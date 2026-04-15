import { useState } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'

interface MCExercise {
  question: string
  options: string[]
  correctIndex: number
}

export interface MCAnswer {
  selectedIndex: number
}

interface Props {
  exercise: MCExercise
  onSubmit: (answer: MCAnswer) => void
  disabled?: boolean
}

export function validate(answer: MCAnswer, exercise: MCExercise) {
  return { isCorrect: answer.selectedIndex === exercise.correctIndex }
}

const LETTERS = ['A', 'B', 'C', 'D', 'E']

export function MultipleChoice({ exercise, onSubmit, disabled }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
        {exercise.question}
      </MathText>

      <div className="flex flex-col gap-2.5">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            disabled={disabled}
            onClick={() => !disabled && setSelected(i)}
            className={cn(
              'w-full text-left min-h-[52px] px-4 py-3 rounded-retro border-2 text-sm font-semibold transition-all duration-150 tap-highlight-none flex items-center gap-3 retro-press',
              selected === i
                ? 'border-ink bg-lemon text-ink shadow-hard-lemon'
                : 'border-ink bg-white dark:bg-surface-800 text-ink dark:text-surface-100 shadow-hard-sm hover:bg-surface-50 dark:hover:bg-surface-700',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
          >
            <span className={cn(
              'w-7 h-7 rounded-sm border-2 border-ink flex items-center justify-center text-xs font-mono font-black flex-shrink-0 transition-colors',
              selected === i ? 'bg-ink text-lemon' : 'bg-paper dark:bg-surface-900 text-ink dark:text-paper'
            )}>
              {LETTERS[i]}
            </span>
            <MathText className="flex-1">{option}</MathText>
          </button>
        ))}
      </div>

      <Button
        fullWidth
        size="lg"
        disabled={selected === null || disabled}
        onClick={() => selected !== null && onSubmit({ selectedIndex: selected })}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
