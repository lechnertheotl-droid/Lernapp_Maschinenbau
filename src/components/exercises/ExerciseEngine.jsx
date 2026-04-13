import { useState } from 'react'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { getExercise } from '@/content/index'
import { generateFeedback } from '@/utils/feedbackGenerator'
import { useToast } from '@/components/ui/Toast'
import { MultipleChoice, validate as validateMC } from './MultipleChoice'
import { TrueFalse, validate as validateTF } from './TrueFalse'
import { NumberInput, validate as validateNI } from './NumberInput'
import { HintSystem } from '@/components/lesson/HintSystem'
import { FeedbackDisplay } from '@/components/lesson/FeedbackDisplay'

const EXERCISE_COMPONENTS = {
  'multiple-choice': { Component: MultipleChoice, validate: validateMC },
  'true-false':      { Component: TrueFalse,      validate: validateTF },
  'number-input':    { Component: NumberInput,     validate: validateNI },
}

export function ExerciseEngine({ exerciseId, topicId, lessonId, onComplete }) {
  const dispatch   = useAppDispatch()
  const showToast  = useToast()
  const exercise   = getExercise(topicId, exerciseId)

  const [submitted, setSubmitted]   = useState(false)
  const [isCorrect, setIsCorrect]   = useState(null)
  const [streak, setStreak]         = useState(0)

  if (!exercise) {
    return <div className="text-surface-400 text-sm">Aufgabe nicht gefunden: {exerciseId}</div>
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
    <div className="flex flex-col gap-4">
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
    </div>
  )
}
