import { useState } from 'react'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getExercise } from '@/content/index'
import { generateFeedback } from '@/utils/feedbackGenerator'
import { useToast } from '@/components/ui/Toast'
import { MultipleChoice, validate as validateMC } from './MultipleChoice'
import { TrueFalse, validate as validateTF } from './TrueFalse'
import { NumberInput, validate as validateNI } from './NumberInput'
import { Matching, validate as validateMA } from './Matching'
import { Sorting, validate as validateSO } from './Sorting'
import { HintSystem } from '@/components/lesson/HintSystem'
import { FeedbackDisplay } from '@/components/lesson/FeedbackDisplay'
import { Calculator } from '@/components/ui/Calculator'

const EXERCISE_COMPONENTS = {
  'multiple-choice': { Component: MultipleChoice, validate: validateMC },
  'true-false':      { Component: TrueFalse,      validate: validateTF },
  'number-input':    { Component: NumberInput,     validate: validateNI },
  'matching':        { Component: Matching,        validate: validateMA },
  'sorting':         { Component: Sorting,         validate: validateSO },
}

export function ExerciseEngine({ exerciseId, topicId, lessonId, onComplete }) {
  const dispatch   = useAppDispatch()
  const showToast  = useToast()
  const exercise   = getExercise(topicId, exerciseId)

  const [submitted, setSubmitted]   = useState(false)
  const [isCorrect, setIsCorrect]   = useState(null)
  const [streak, setStreak]         = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)

  if (!exercise) {
    return <div className="text-ink-soft text-sm font-mono">Aufgabe nicht gefunden: {exerciseId}</div>
  }

  const entry = EXERCISE_COMPONENTS[exercise.type] ?? EXERCISE_COMPONENTS['multiple-choice']
  const { Component, validate } = entry

  const handleSubmit = (answer) => {
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
    setStreak(newStreak)
    setSubmitted(true)
  }

  return (
    <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] font-black text-primary-700 uppercase tracking-widest">
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
        exercise={exercise}
        onSubmit={handleSubmit}
        disabled={submitted}
      />

      <HintSystem hints={exercise.hints ?? []} disabled={submitted} />

      {submitted && (
        <FeedbackDisplay
          isCorrect={isCorrect}
          explanation={exercise.explanation}
          onNext={onComplete}
        />
      )}
      <Calculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
    </div>
  )
}
