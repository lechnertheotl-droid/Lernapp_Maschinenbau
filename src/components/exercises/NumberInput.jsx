import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function validate(answer, exercise) {
  const tolerance = exercise.tolerance ?? 0.01
  const isCorrect = Math.abs(answer.value - exercise.correctAnswer) <= tolerance
  return { isCorrect }
}

export function NumberInput({ exercise, onSubmit, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseFloat(value.replace(',', '.'))
    if (isNaN(num)) return
    onSubmit({ value: num })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-base font-medium text-surface-900 leading-relaxed">{exercise.question}</p>

      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Antwort eingeben..."
          className="flex-1 h-12 px-4 text-base border-2 border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 disabled:opacity-60"
        />
        {exercise.unit && (
          <span className="text-surface-500 text-sm font-medium whitespace-nowrap">{exercise.unit}</span>
        )}
      </div>

      <Button type="submit" fullWidth size="lg" disabled={!value.trim() || disabled}>
        Antwort prüfen
      </Button>
    </form>
  )
}
