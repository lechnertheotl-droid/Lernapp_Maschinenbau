import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'
import { isNumericMatch } from '@/utils/numericTolerance'

interface NumberExercise {
  question: string
  correctAnswer: number
  tolerance?: number
  unit?: string
}

export interface NumberAnswer {
  value: number
  raw?: string
}

interface Props {
  exercise: NumberExercise
  onSubmit: (answer: NumberAnswer) => void
  disabled?: boolean
}

export function validate(answer: NumberAnswer, exercise: NumberExercise) {
  const tolerance = exercise.tolerance ?? 0.01
  const raw = typeof answer.raw === 'string' ? answer.raw : String(answer.value ?? '')
  const isCorrect = isNumericMatch(raw, exercise.correctAnswer, tolerance)
  return { isCorrect }
}

export function NumberInput({ exercise, onSubmit, disabled }: Props) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const num = parseFloat(value.replace(',', '.'))
    if (Number.isNaN(num)) return
    onSubmit({ value: num, raw: value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
        {exercise.question}
      </MathText>

      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Antwort eingeben..."
          aria-label="Numerische Antwort"
          className="flex-1 h-12 px-4 text-base border-2 border-ink rounded-retro bg-white dark:bg-surface-800 dark:text-paper shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:opacity-60"
        />
        {exercise.unit && (
          <span className="text-ink-soft dark:text-surface-300 text-sm font-mono font-black whitespace-nowrap">
            {exercise.unit}
          </span>
        )}
      </div>

      <Button type="submit" fullWidth size="lg" variant="dark" disabled={!value.trim() || disabled}>
        Antwort prüfen
      </Button>
    </form>
  )
}
