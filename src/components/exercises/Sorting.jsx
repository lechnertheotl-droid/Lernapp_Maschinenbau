import { useState, useMemo } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'

export function validate(answer, exercise) {
  if (!answer.order || answer.order.length !== exercise.correctOrder.length) {
    return { isCorrect: false }
  }
  const correct = answer.order.every((val, i) => val === exercise.correctOrder[i])
  return { isCorrect: correct }
}

function initialShuffle(items, seed) {
  const indices = items.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(((seed + i * 13) % 97) / 97 * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices
}

export function Sorting({ exercise, onSubmit, disabled }) {
  const shuffled = useMemo(
    () => initialShuffle(exercise.items, 51),
    [exercise.items]
  )
  const [order, setOrder] = useState(shuffled)

  function moveUp(index) {
    if (disabled || index === 0) return
    setOrder(prev => {
      const next = [...prev]
      ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
      return next
    })
  }

  function moveDown(index) {
    if (disabled || index === order.length - 1) return
    setOrder(prev => {
      const next = [...prev]
      ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
      return next
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-black text-ink leading-relaxed">{exercise.question}</p>

      <div className="flex flex-col gap-2">
        {order.map((itemIdx, pos) => (
          <div
            key={itemIdx}
            className={cn(
              'flex items-center gap-2 min-h-[52px] px-3 py-2 border-2 border-ink rounded-retro shadow-hard-sm bg-white transition-all duration-150',
              disabled && 'opacity-60'
            )}
          >
            <span className="w-7 h-7 rounded-sm border-2 border-ink bg-paper flex items-center justify-center text-xs font-mono font-black text-ink flex-shrink-0">
              {pos + 1}
            </span>

            <span className="flex-1 text-sm font-semibold text-ink font-mono">
              {exercise.items[itemIdx]}
            </span>

            <div className="flex flex-col gap-0.5 flex-shrink-0">
              <button
                type="button"
                disabled={disabled || pos === 0}
                onClick={() => moveUp(pos)}
                className={cn(
                  'w-8 h-7 flex items-center justify-center border-2 border-ink rounded-retro text-xs font-black tap-highlight-none retro-press',
                  pos === 0 || disabled
                    ? 'bg-surface-100 text-ink-soft cursor-not-allowed'
                    : 'bg-lemon text-ink shadow-hard-lemon hover:bg-lemon-dark'
                )}
                aria-label="Nach oben"
              >
                ▲
              </button>
              <button
                type="button"
                disabled={disabled || pos === order.length - 1}
                onClick={() => moveDown(pos)}
                className={cn(
                  'w-8 h-7 flex items-center justify-center border-2 border-ink rounded-retro text-xs font-black tap-highlight-none retro-press',
                  pos === order.length - 1 || disabled
                    ? 'bg-surface-100 text-ink-soft cursor-not-allowed'
                    : 'bg-lemon text-ink shadow-hard-lemon hover:bg-lemon-dark'
                )}
                aria-label="Nach unten"
              >
                ▼
              </button>
            </div>
          </div>
        ))}
      </div>

      <Button
        fullWidth size="lg"
        disabled={disabled}
        onClick={() => onSubmit({ order: [...order] })}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
