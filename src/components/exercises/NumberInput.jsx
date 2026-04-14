import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'

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
      <MathText className="text-base font-black text-ink leading-relaxed block">{exercise.question}</MathText>

      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Antwort eingeben..."
          className="flex-1 h-12 px-4 text-base border-2 border-ink rounded-retro bg-white shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:opacity-60"
        />
        {exercise.unit && (
          <span className="text-ink-soft text-sm font-mono font-black whitespace-nowrap">{exercise.unit}</span>
        )}
      </div>

      <Button type="submit" fullWidth size="lg" variant="dark" disabled={!value.trim() || disabled}>
        Antwort prüfen
      </Button>
    </form>
  )
}
