import { useState, useEffect, useRef, type ComponentType } from 'react'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getExercise } from '@/content/index'
import { generateFeedback } from '@/utils/feedbackGenerator'
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
import { FeedbackContent, FeedbackActions } from '@/components/lesson/FeedbackDisplay'
import { Calculator } from '@/components/ui/Calculator'
import { FormulaSheet } from '@/components/ui/FormulaSheet'

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
  const feedbackAnchorRef = useRef<HTMLDivElement>(null)
  const feedbackPanelRef = useRef<HTMLDivElement>(null)
  const [panelHeight, setPanelHeight] = useState(0)

  useEffect(() => {
    if (submitted) {
      requestAnimationFrame(() => {
        feedbackAnchorRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
      })
    }
  }, [submitted])

  // Misst die Höhe des Fixed-Feedback-Panels und überträgt sie als Bottom-Padding
  // auf die Aufgaben-Card, damit kein Inhalt verdeckt wird und keine leere
  // Lücke unter der Card entsteht.
  useEffect(() => {
    if (!submitted) {
      setPanelHeight(0)
      return
    }
    const el = feedbackPanelRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) setPanelHeight(entry.contentRect.height)
    })
    observer.observe(el)
    // Initialmessung
    setPanelHeight(el.getBoundingClientRect().height)
    return () => observer.disconnect()
  }, [submitted])

  if (!exercise) {
    return <div className="text-ink-soft text-sm font-mono">Aufgabe nicht gefunden: {exerciseId}</div>
  }

  const entry = EXERCISE_COMPONENTS[exercise.type] ?? EXERCISE_COMPONENTS['multiple-choice']
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

    const { message, tone } = generateFeedback({ isCorrect: correct, streakCount: newStreak })
    showToast({ message, tone })

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
    <>
      <div
        className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-4"
        style={submitted ? { paddingBottom: `${panelHeight + 24}px` } : undefined}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest">
            // Aufgabe
          </p>
          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="min-h-9 px-3 rounded-retro border-2 border-ink bg-lemon shadow-hard-lemon text-ink font-mono text-[10px] font-black uppercase tracking-wider retro-press tap-highlight-none"
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
        <div ref={feedbackAnchorRef} aria-hidden="true" />
      </div>

      {submitted && (
        <div
          ref={feedbackPanelRef}
          className="fixed inset-x-0 bottom-0 z-50 bg-paper/95 dark:bg-surface-900/95 backdrop-blur border-t-2 border-ink dark:border-surface-500 shadow-hard-lg dark:shadow-none flex flex-col"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div
            className="max-w-xl mx-auto w-full px-3 pt-3 overflow-y-auto overscroll-contain"
            style={{ maxHeight: 'min(45vh, calc(100vh - 220px))' }}
          >
            <FeedbackContent
              isCorrect={!!isCorrect}
              exercise={exercise}
              userAnswer={lastAnswer}
            />
          </div>
          <div className="max-w-xl mx-auto w-full px-3 py-3 border-t-2 border-ink/20 dark:border-surface-500/60 bg-paper/95 dark:bg-surface-900/95">
            <FeedbackActions
              isCorrect={!!isCorrect}
              exercise={exercise}
              onNext={onComplete}
              onRetry={!isCorrect ? handleRetry : undefined}
              onOpenFormulas={!isCorrect && exercise.relatedFormulaId ? () => setShowFormulas(true) : undefined}
            />
          </div>
        </div>
      )}

      <Calculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
      <FormulaSheet isOpen={showFormulas} onClose={() => setShowFormulas(false)} topicId={topicId} />
    </>
  )
}
