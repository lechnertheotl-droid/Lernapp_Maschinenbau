import { useEffect, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { compareAnswer, preloadParser, isParserReady } from '@/utils/answerParser'
import { isNumericMatch } from '@/utils/numericTolerance'

interface Step {
  prompt: string
  answer: string | number
  alternates?: string[]
  tolerance?: number
  unit?: string
  explanation: string
  mode?: 'numeric' | 'algebraic'
}

interface MultiStepShape {
  question?: string
  steps: Step[]
}

interface Props {
  exercise: MultiStepShape
  onSubmit: (answer: { stepAnswers: string[]; allCorrect: boolean }) => void
  disabled?: boolean
}

function checkStep(raw: string, step: Step): boolean {
  const cleaned = raw.trim()
  if (!cleaned) return false
  const expected = [String(step.answer), ...(step.alternates ?? [])]
  if (step.mode === 'algebraic') return compareAnswer(cleaned, expected, 'algebraic')
  // numeric by default — accept exact tolerance OR student-precision-rounded match
  const tol = step.tolerance ?? 1e-3
  const target = Number(step.answer)
  if (Number.isFinite(target) && isNumericMatch(cleaned, target, tol)) return true
  // Fallback: algebraisch (z. B. wenn step.answer als Ausdruck wie "pi/2" formuliert ist)
  return compareAnswer(cleaned, expected, 'numeric')
}

export function validate(
  answer: { stepAnswers: string[]; allCorrect: boolean }
) {
  return { isCorrect: answer.allCorrect }
}

export function MultiStepExercise({ exercise, onSubmit, disabled }: Props) {
  const [current, setCurrent] = useState(0)
  const [stepAnswers, setStepAnswers] = useState<string[]>(() =>
    exercise.steps.map(() => '')
  )
  const [stepStatus, setStepStatus] = useState<Array<'pending' | 'correct' | 'wrong'>>(
    () => exercise.steps.map(() => 'pending')
  )
  const [showWrong, setShowWrong] = useState<number | null>(null)
  const [parserReady, setParserReady] = useState(isParserReady())

  useEffect(() => {
    if (parserReady) return
    let cancelled = false
    preloadParser().then(() => { if (!cancelled) setParserReady(true) })
    return () => { cancelled = true }
  }, [parserReady])

  const currentStep = exercise.steps[current]
  const isLast = current === exercise.steps.length - 1
  const allDone = stepStatus.every((s) => s === 'correct')

  const updateAnswer = (v: string) => {
    setStepAnswers((arr) => {
      const next = [...arr]
      next[current] = v
      return next
    })
  }

  const handleCheckStep = (e: FormEvent) => {
    e.preventDefault()
    const raw = stepAnswers[current]
    if (!raw?.trim()) return
    const ok = checkStep(raw, currentStep)
    setStepStatus((arr) => {
      const next = [...arr]
      next[current] = ok ? 'correct' : 'wrong'
      return next
    })
    if (ok) {
      setShowWrong(null)
      if (isLast) {
        onSubmit({ stepAnswers, allCorrect: true })
      } else {
        setCurrent(current + 1)
      }
    } else {
      setShowWrong(current)
    }
  }

  const handleGiveUp = () => {
    onSubmit({ stepAnswers, allCorrect: false })
  }

  return (
    <div className="flex flex-col gap-4">
      {exercise.question && (
        <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
          {exercise.question}
        </MathText>
      )}

      {/* Step progress */}
      <div className="flex items-center gap-1.5" aria-label="Fortschritt">
        {exercise.steps.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 border-2 border-ink rounded-sm ${
              stepStatus[i] === 'correct'
                ? 'bg-green-600'
                : stepStatus[i] === 'wrong'
                ? 'bg-red-500'
                : i === current
                ? 'bg-primary-700 dark:bg-primary-400'
                : 'bg-white dark:bg-surface-600'
            }`}
          />
        ))}
        <span className="num text-[11px] text-ink-soft dark:text-surface-300 flex-shrink-0 ml-1">
          {Math.min(current + 1, exercise.steps.length)}/{exercise.steps.length}
        </span>
      </div>

      {!allDone && (
        <form onSubmit={handleCheckStep} className="flex flex-col gap-3">
          <div className="border-2 border-ink rounded-retro bg-white dark:bg-surface-800 shadow-hard-sm p-3">
            <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-2">
              // Schritt {current + 1}
            </p>
            <MarkdownContent className="text-ink dark:text-paper">
              {currentStep.prompt}
            </MarkdownContent>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode={currentStep.mode === 'algebraic' ? 'text' : 'decimal'}
              autoComplete="off"
              spellCheck={false}
              value={stepAnswers[current]}
              onChange={(e) => updateAnswer(e.target.value)}
              disabled={disabled}
              placeholder="Antwort für diesen Schritt…"
              aria-label={`Antwort Schritt ${current + 1}`}
              className="flex-1 h-12 px-4 text-base font-mono border-2 border-ink rounded-retro bg-white dark:bg-surface-800 dark:text-paper shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:opacity-60"
            />
            {currentStep.unit && (
              <span className="text-ink-soft dark:text-surface-300 text-sm font-mono font-black whitespace-nowrap">
                {currentStep.unit}
              </span>
            )}
          </div>

          {showWrong === current && (
            <div className="border-2 border-red-600 bg-red-50 dark:bg-red-950 rounded-retro p-3 text-sm">
              <p className="font-mono font-black text-red-700 dark:text-red-300 mb-1">
                Nochmal ansehen:
              </p>
              <MarkdownContent>{currentStep.explanation}</MarkdownContent>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              type="submit"
              size="lg"
              variant="dark"
              className="flex-1"
              disabled={!stepAnswers[current]?.trim() || disabled || !parserReady}
            >
              {parserReady ? 'Schritt prüfen' : 'Lade Parser…'}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="secondary"
              onClick={handleGiveUp}
              disabled={disabled}
            >
              Auflösen
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
