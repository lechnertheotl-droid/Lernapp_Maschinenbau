import { useState } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'

export function validate(answer, exercise) {
  return { isCorrect: answer.selectedIndex === exercise.correctIndex }
}

export function MultipleChoice({ exercise, onSubmit, disabled }) {
  const [selected, setSelected] = useState(null)

  const letters = ['A', 'B', 'C', 'D', 'E']

  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-black text-ink leading-relaxed">{exercise.question}</p>

      <div className="flex flex-col gap-2.5">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            disabled={disabled}
            onClick={() => !disabled && setSelected(i)}
            className={cn(
              // min-h-[52px] ensures ≥44pt touch target on iPhone
              'w-full text-left min-h-[52px] px-4 py-3 rounded-retro border-2 text-sm font-semibold transition-all duration-150 tap-highlight-none flex items-center gap-3 retro-press',
              selected === i
                ? 'border-ink bg-lemon text-ink shadow-hard-lemon'
                : 'border-ink bg-white text-ink-soft shadow-hard-sm hover:bg-surface-50',
              disabled && 'opacity-60 cursor-not-allowed'
            )}
          >
            <span className={cn(
              'w-7 h-7 rounded-sm border-2 border-ink flex items-center justify-center text-xs font-mono font-black flex-shrink-0 transition-colors',
              selected === i ? 'bg-ink text-lemon' : 'bg-paper text-ink'
            )}>
              {letters[i]}
            </span>
            <span className="flex-1">{option}</span>
          </button>
        ))}
      </div>

      <Button
        fullWidth size="lg"
        disabled={selected === null || disabled}
        onClick={() => onSubmit({ selectedIndex: selected })}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
