import { useState, useEffect, useRef, lazy, Suspense, type ComponentType } from 'react'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getExercise } from '@/content/index'
import { getEncouragementMessage } from '@/utils/feedbackGenerator'
import { useToast } from '@/components/ui/Toast'
import { MultipleChoice, validate as validateMC } from './MultipleChoice'
import { TrueFalse,      validate as validateTF } from './TrueFalse'
import { NumberInput,    validate as validateNI } from './NumberInput'
import { Matching,       validate as validateMA } from './Matching'
import { Sorting,        validate as validateSO } from './Sorting'
import { FreeTextInput,  validate as validateFT } from './FreeTextInput'
import { FillInBlank,    validate as validateFIB } from './FillInBlank'
import { MultiStepExercise, validate as validateMS } from './MultiStepExercise'
import { HintSystem } from '@/components/lesson/HintSystem'
import { MathText } from '@/components/ui/MathText'
import { FeedbackContent, FeedbackActions } from '@/components/lesson/FeedbackDisplay'

// Tool-Modals erst beim ersten Öffnen laden (mathjs & Formeldatenbank sind groß).
const Calculator   = lazy(() => import('@/components/ui/Calculator').then((m) => ({ default: m.Calculator })))
const FormulaSheet = lazy(() => import('@/components/ui/FormulaSheet').then((m) => ({ default: m.FormulaSheet })))

interface ExerciseLike {
  id: string
  type: string
  hints?: string[]
  explanation?: string
  relatedFormulaId?: string
  wrongAnswerExplanations?: Record<string, string>
}

interface ComponentEntry {
  // Use `any` here because each exercise/answer shape is different;
  // exhaustive typing per type would force a discriminated union we don't have yet.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (answer: any, exercise: any) => { isCorrect: boolean }
}

const EXERCISE_COMPONENTS: Record<string, ComponentEntry> = {
  'multiple-choice': { Component: MultipleChoice,    validate: validateMC },
  'true-false':      { Component: TrueFalse,         validate: validateTF },
  'number-input':    { Component: NumberInput,       validate: validateNI },
  'matching':        { Component: Matching,          validate: validateMA },
  'sorting':         { Component: Sorting,           validate: validateSO },
  'free-text':       { Component: FreeTextInput,     validate: validateFT },
  'fill-in-blank':   { Component: FillInBlank,       validate: validateFIB },
  'multi-step':      { Component: MultiStepExercise, validate: validateMS },
}

interface Props {
  exerciseId: string
  topicId: string
  lessonId: string
  onComplete: () => void
}

export function ExerciseEngine({ exerciseId, topicId, lessonId, onComplete }: Props) {
  const dispatch = useAppDispatch()
  const showToast = useToast() as (opts: { message: string; tone: string }) => void
  const exercise = getExercise(topicId, exerciseId) as ExerciseLike | null

  const [submitted, setSubmitted]   = useState(false)
  const [isCorrect, setIsCorrect]   = useState<boolean | null>(null)
  const [lastAnswer, setLastAnswer] = useState<unknown>(null)
  const [streak, setStreak]         = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showFormulas, setShowFormulas] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const feedbackPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submitted) {
      requestAnimationFrame(() => {
        feedbackPanelRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      })
    }
  }, [submitted])

  if (!exercise) {
    return <div className="text-ink-soft text-sm font-mono">Aufgabe nicht gefunden: {exerciseId}</div>
  }

  const entry = EXERCISE_COMPONENTS[exercise.type]
  if (!entry) {
    if (import.meta.env.DEV) {
      console.error(
        `[ExerciseEngine] Unbekannter Aufgabentyp "${exercise.type}" bei Aufgabe ${exerciseId}. `
          + `Erlaubt: ${Object.keys(EXERCISE_COMPONENTS).join(', ')}.`,
      )
    }
    return (
      <div className="text-red-700 dark:text-red-300 text-sm font-mono">
        Unbekannter Aufgabentyp „{exercise.type}" bei Aufgabe {exerciseId}.
      </div>
    )
  }
  const { Component, validate } = entry

  const handleSubmit = (answer: unknown) => {
    const { isCorrect: correct } = validate(answer, exercise)
    const newStreak = correct ? streak + 1 : 0

    dispatch({
      type: ACTIONS.RECORD_ATTEMPT,
      exerciseId,
      lessonId,
      answer,
      isCorrect: correct,
    })

    // Kein Toast mehr bei normalem richtig/falsch — das fixe Feedback-Panel
    // zeigt beides bereits deutlich. Toast nur noch als Streak-Belohnung.
    if (correct) {
      const streakMsg = getEncouragementMessage(newStreak)
      if (streakMsg) {
        showToast({ message: streakMsg, tone: newStreak >= 5 ? 'celebratory' : 'encouraging' })
      }
    }

    setIsCorrect(correct)
    setLastAnswer(answer)
    setStreak(newStreak)
    setSubmitted(true)
  }

  const handleRetry = () => {
    setSubmitted(false)
    setIsCorrect(null)
    setLastAnswer(null)
    setResetKey((k) => k + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest">
              // Aufgabe
            </p>
            {exercise.subGoalLabel && (
              <div className="font-mono text-[11px] font-bold text-ink dark:text-paper leading-snug">
                <span>Sub-Goal:{' '}</span>
                <MathText className="inline font-normal italic">{exercise.subGoalLabel}</MathText>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="min-h-9 px-3 rounded-retro border-2 border-ink bg-lemon shadow-hard-lemon text-ink font-mono text-[10px] font-black uppercase tracking-wider retro-press tap-highlight-none flex-shrink-0"
          >
            Rechner
          </button>
        </div>
        <Component
          key={resetKey}
          exercise={exercise}
          onSubmit={handleSubmit}
          disabled={submitted}
        />

        <HintSystem hints={exercise.hints ?? []} disabled={submitted} />
      </div>

      {submitted && (
        <div ref={feedbackPanelRef} className="flex flex-col gap-3">
          <FeedbackContent
            isCorrect={!!isCorrect}
            exercise={exercise}
            userAnswer={lastAnswer}
          />
          <FeedbackActions
            isCorrect={!!isCorrect}
            exercise={exercise}
            onNext={onComplete}
            onRetry={!isCorrect ? handleRetry : undefined}
            onOpenFormulas={!isCorrect && exercise.relatedFormulaId ? () => setShowFormulas(true) : undefined}
          />
        </div>
      )}

      <Suspense fallback={null}>
        {showCalculator && <Calculator isOpen onClose={() => setShowCalculator(false)} />}
        {showFormulas   && <FormulaSheet isOpen onClose={() => setShowFormulas(false)} topicId={topicId} />}
      </Suspense>
    </div>
  )
}
