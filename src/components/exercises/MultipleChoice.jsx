import { useState } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'

export function validate(answer, exercise) {
  const isCorrect = answer.selectedIndex === exercise.correctIndex
  return { isCorrect }
}

export function MultipleChoice({ exercise, onSubmit, disabled }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-base font-medium text-surface-900 leading-relaxed">{exercise.question}</p>

      <div className="flex flex-col gap-2">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            disabled={disabled}
            onClick={() => !disabled && setSelected(i)}
            className={cn(
              'w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 tap-highlight-none',
              selected === i
                ? 'border-primary-600 bg-primary-50 text-primary-800'
                : 'border-surface-200 bg-white text-surface-700 hover:border-surface-300',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
          >
            <span className="text-surface-400 mr-2">{String.fromCharCode(65 + i)}.</span>
            {option}
          </button>
        ))}
      </div>

      <Button
        fullWidth
        size="lg"
        disabled={selected === null || disabled}
        onClick={() => onSubmit({ selectedIndex: selected })}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
