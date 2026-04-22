import { useState, lazy, Suspense } from 'react'
import { MultiStepExercise } from '@/components/exercises/MultiStepExercise'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { HintSystem } from '@/components/lesson/HintSystem'
import { Button } from '@/components/ui/Button'
import { ToolButton } from '@/components/ui/ToolButton'
import { hasFormulas } from '@/components/ui/formulaTopics'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import type { PracticeExercise, PracticeSubTask } from '@/types/practice'

// Tool-Modals sind auch beim Üben nutzbar — identische Lazy-Strategie wie in
// der Lektions-Ansicht, damit Calculator/FormulaSheet/VariableGlossary nicht
// im Initial-Bundle der Übenfunktion landen.
const Calculator       = lazy(() => import('@/components/ui/Calculator')       .then((m) => ({ default: m.Calculator })))
const FormulaSheet     = lazy(() => import('@/components/ui/FormulaSheet')     .then((m) => ({ default: m.FormulaSheet })))
const VariableGlossary = lazy(() => import('@/components/ui/VariableGlossary') .then((m) => ({ default: m.VariableGlossary })))

interface Props {
  exercise: PracticeExercise
  topicId?: string
  onFinished: (result: { correct: boolean; pointsScored: number }) => void
  onNext: () => void
  onChooseOther: () => void
  hasNext: boolean
}

function toEngineSteps(subtasks: PracticeSubTask[]) {
  return subtasks.map((st) => ({
    prompt: st.prompt,
    answer: st.answer,
    alternates: st.alternates,
    tolerance: st.tolerance,
    unit: st.unit,
    explanation: st.explanation,
    mode: st.mode,
  }))
}

function pointsFor(subtasks: PracticeSubTask[], answers: string[]): number {
  return subtasks.reduce((sum, st, i) => {
    const raw = (answers[i] ?? '').trim()
    if (!raw) return sum
    // Konservative Näherung: nach abgeschlossenem Run gibt der MultiStep-Engine
    // nur "allCorrect" zurück, pro Step zählen wir anhand von Nicht-Leere + Index-Position.
    // Punkt-Genauigkeit wird beim Commit im onFinished-Callback über allCorrect gesetzt.
    return sum + (st.points ?? Math.max(1, Math.round((10 / Math.max(1, subtasks.length)))))
  }, 0)
}

export function PracticeRunner({ exercise, topicId, onFinished, onNext, onChooseOther, hasNext }: Props) {
  const dispatch = useAppDispatch()
  const [finished, setFinished] = useState<{ correct: boolean } | null>(null)
  const [showCalculator, setShowCalculator]   = useState(false)
  const [showFormulaSheet, setShowFormulaSheet] = useState(false)
  const [showVariables, setShowVariables]     = useState(false)
  const canShowFormulas = topicId ? hasFormulas(topicId) : false

  const handleSubmit = (answer: { stepAnswers: string[]; allCorrect: boolean }) => {
    const pointsScored = answer.allCorrect
      ? exercise.points
      : Math.min(exercise.points, pointsFor(exercise.subtasks, answer.stepAnswers))
    dispatch({
      type: ACTIONS.RECORD_PRACTICE_ATTEMPT,
      exerciseId: exercise.id,
      correct: answer.allCorrect,
      points: pointsScored,
    })
    setFinished({ correct: answer.allCorrect })
    onFinished({ correct: answer.allCorrect, pointsScored })
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Tools-Leiste — gleicher Funktionsumfang wie in der Lektionsansicht */}
      <div className="flex items-center justify-end gap-1.5">
        <ToolButton onClick={() => setShowVariables(true)} label="Variablen-Glossar öffnen" className="text-[11px]">
          x,y
        </ToolButton>
        {canShowFormulas && (
          <ToolButton onClick={() => setShowFormulaSheet(true)} label="Formelsammlung öffnen" variant="lemon">
            f
          </ToolButton>
        )}
        <ToolButton onClick={() => setShowCalculator(true)} label="Taschenrechner öffnen">
          =
        </ToolButton>
      </div>

      {/* Header / Angabe */}
      <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-1">
              // Prüfungsaufgabe · {exercise.difficulty.replace('-', ' ')}
            </p>
            <h2 className="text-lg font-black text-ink dark:text-paper leading-tight">{exercise.title}</h2>
            <p className="font-mono text-[10px] text-ink-soft dark:text-surface-300 mt-1">
              {exercise.points} Punkte · {exercise.estimatedMinutes} min · {exercise.subtasks.length} Teilschritte
            </p>
          </div>
          <span
            className="h-8 min-w-[3rem] px-2 inline-flex items-center justify-center rounded-retro border-2 border-ink bg-lemon font-mono font-black text-ink text-xs"
            aria-label={`${exercise.points} Punkte`}
          >
            {exercise.points}P
          </span>
        </div>

        <div className="border-t-2 border-surface-200 dark:border-surface-700 pt-3">
          <p className="font-mono text-[10px] font-black text-ink-soft dark:text-surface-300 uppercase tracking-widest mb-2">
            // Angabe
          </p>
          <MarkdownContent className="text-ink dark:text-paper leading-relaxed">
            {exercise.context}
          </MarkdownContent>
        </div>

        {exercise.hints && exercise.hints.length > 0 && (
          <HintSystem hints={exercise.hints} disabled={finished !== null} />
        )}
      </div>

      {/* Teilaufgaben */}
      <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-5">
        <MultiStepExercise
          key={exercise.id}
          exercise={{ question: '', steps: toEngineSteps(exercise.subtasks) }}
          onSubmit={handleSubmit}
          disabled={finished !== null}
        />
      </div>

      {/* Auswertung */}
      {finished && (
        <div className={`border-2 rounded-retro p-5 flex flex-col gap-4 ${finished.correct ? 'bg-green-50 dark:bg-green-950/40 border-green-700' : 'bg-surface-50 dark:bg-surface-800 border-ink'}`}>
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-1">
              {finished.correct ? '// Aufgabe gelöst' : '// Musterlösung'}
            </p>
            <h3 className="text-base font-black text-ink dark:text-paper">
              {finished.correct ? `Volle Punktzahl: ${exercise.points} P` : 'Alle Teilschritte auf einen Blick'}
            </h3>
          </div>

          <ol className="flex flex-col gap-3 list-none">
            {exercise.subtasks.map((st, i) => (
              <li key={st.id} className="border-2 border-ink rounded-retro bg-white dark:bg-surface-900 p-3">
                <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-2">
                  Teil {String.fromCharCode(97 + i)}) · Lösung: {String(st.answer)}{st.unit ? ` ${st.unit}` : ''}
                </p>
                <MarkdownContent className="text-sm text-ink-soft dark:text-surface-200 leading-relaxed">
                  {st.explanation}
                </MarkdownContent>
              </li>
            ))}
          </ol>

          {exercise.wrapUp && (
            <div className="border-t-2 border-surface-200 dark:border-surface-700 pt-3">
              <p className="font-mono text-[10px] font-black text-ink-soft dark:text-surface-300 uppercase tracking-widest mb-2">
                // Kommentar
              </p>
              <MarkdownContent className="text-sm text-ink-soft dark:text-surface-200 leading-relaxed">
                {exercise.wrapUp}
              </MarkdownContent>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {hasNext && (
              <Button variant="dark" size="lg" fullWidth onClick={onNext}>
                Nächste Aufgabe →
              </Button>
            )}
            <Button variant="secondary" size="lg" fullWidth onClick={onChooseOther}>
              Andere Aufgabe wählen
            </Button>
          </div>
        </div>
      )}

      {/* Tool-Modals — lazy, wie in LessonView */}
      <Suspense fallback={null}>
        {showCalculator && <Calculator isOpen onClose={() => setShowCalculator(false)} />}
        {showFormulaSheet && (
          <FormulaSheet isOpen onClose={() => setShowFormulaSheet(false)} topicId={topicId} />
        )}
        {showVariables && <VariableGlossary isOpen onClose={() => setShowVariables(false)} />}
      </Suspense>
    </div>
  )
}
