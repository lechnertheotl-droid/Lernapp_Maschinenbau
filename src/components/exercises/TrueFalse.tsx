import { useState } from 'react'
import { cn } from '@/utils/cn'
import { MathText } from '@/components/ui/MathText'

interface TFExercise {
  statement: string
  correct: boolean
}

export interface TFAnswer {
  value: boolean
}

interface Props {
  exercise: TFExercise
  onSubmit: (answer: TFAnswer) => void
  disabled?: boolean
}

export function validate(answer: TFAnswer, exercise: TFExercise) {
  return { isCorrect: answer.value === exercise.correct }
}

const OPTIONS = [
  { label: 'Richtig', val: true,  color: 'border-green-800 bg-green-600 text-white shadow-hard-green' },
  { label: 'Falsch',  val: false, color: 'border-red-800 bg-red-600 text-white shadow-hard-red' },
]

export function TrueFalse({ exercise, onSubmit, disabled }: Props) {
  const [selected, setSelected] = useState<boolean | null>(null)

  const submit = (val: boolean) => {
    setSelected(val)
    onSubmit({ value: val })
  }

  return (
    <div className="flex flex-col gap-4">
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
        {exercise.statement}
      </MathText>
      <div className="grid grid-cols-2 gap-3">
        {OPTIONS.map(({ label, val, color }) => (
          <button
            key={label}
            disabled={disabled}
            onClick={() => !disabled && submit(val)}
            className={cn(
              'py-5 rounded-retro border-2 text-base font-black transition-all duration-150 tap-highlight-none retro-press',
              selected === val ? color : 'border-ink bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
