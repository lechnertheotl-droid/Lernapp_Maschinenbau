import { useState, useMemo } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'

const PAIR_COLORS = [
  'bg-primary-100 border-primary-700',
  'bg-green-100 border-green-700',
  'bg-amber-100 border-amber-700',
  'bg-rose-100 border-rose-700',
  'bg-violet-100 border-violet-700',
  'bg-cyan-100 border-cyan-700',
]

export function validate(answer, exercise) {
  if (!answer.pairs || answer.pairs.length !== exercise.pairs.length) {
    return { isCorrect: false }
  }
  const correct = answer.pairs.every(
    ([leftIdx, rightIdx]) => leftIdx === rightIdx
  )
  return { isCorrect: correct }
}

function shuffle(arr, seed) {
  const copy = arr.map((item, i) => ({ item, origIdx: i }))
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(((seed + i * 7) % 97) / 97 * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function Matching({ exercise, onSubmit, disabled }) {
  const shuffledLeft = useMemo(
    () => shuffle(exercise.pairs.map(p => p.left), 42),
    [exercise.pairs]
  )
  const shuffledRight = useMemo(
    () => shuffle(exercise.pairs.map(p => p.right), 73),
    [exercise.pairs]
  )

  const [selectedLeft, setSelectedLeft] = useState(null)
  const [matches, setMatches] = useState([])

  const matchedLeftIndices = new Set(matches.map(m => m.leftShuffled))
  const matchedRightIndices = new Set(matches.map(m => m.rightShuffled))

  function getMatchColor(leftShuffled, rightShuffled) {
    const idx = matches.findIndex(
      m => m.leftShuffled === leftShuffled || m.rightShuffled === rightShuffled
    )
    return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null
  }

  function handleLeftTap(shuffledIdx) {
    if (disabled || matchedLeftIndices.has(shuffledIdx)) return
    setSelectedLeft(shuffledIdx === selectedLeft ? null : shuffledIdx)
  }

  function handleRightTap(shuffledIdx) {
    if (disabled || selectedLeft === null || matchedRightIndices.has(shuffledIdx)) return
    setMatches(prev => [...prev, { leftShuffled: selectedLeft, rightShuffled: shuffledIdx }])
    setSelectedLeft(null)
  }

  function handleUndo() {
    if (disabled) return
    setMatches(prev => prev.slice(0, -1))
  }

  function handleSubmit() {
    const pairs = matches.map(m => {
      const leftOrig = shuffledLeft[m.leftShuffled].origIdx
      const rightOrig = shuffledRight[m.rightShuffled].origIdx
      return [leftOrig, rightOrig]
    })
    onSubmit({ pairs })
  }

  return (
    <div className="flex flex-col gap-4">
      <MathText className="text-base font-black text-ink leading-relaxed block">{exercise.question}</MathText>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          {shuffledLeft.map((entry, i) => {
            const matched = matchedLeftIndices.has(i)
            const color = getMatchColor(i, null)
            return (
              <button
                key={i}
                disabled={disabled || matched}
                onClick={() => handleLeftTap(i)}
                className={cn(
                  'min-h-[48px] px-3 py-2 border-2 rounded-retro text-sm font-mono font-semibold transition-all duration-150 tap-highlight-none retro-press text-left',
                  selectedLeft === i
                    ? 'border-ink bg-lemon text-ink shadow-hard-lemon'
                    : matched && color
                      ? `${color} text-ink shadow-hard-sm`
                      : 'border-ink bg-white text-ink-soft shadow-hard-sm hover:bg-surface-50',
                  disabled && 'opacity-60 cursor-not-allowed'
                )}
              >
                <MathText>{entry.item}</MathText>
              </button>
            )
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2">
          {shuffledRight.map((entry, i) => {
            const matched = matchedRightIndices.has(i)
            const color = getMatchColor(null, i)
            return (
              <button
                key={i}
                disabled={disabled || matched || selectedLeft === null}
                onClick={() => handleRightTap(i)}
                className={cn(
                  'min-h-[48px] px-3 py-2 border-2 rounded-retro text-sm font-mono font-semibold transition-all duration-150 tap-highlight-none retro-press text-left',
                  matched && color
                    ? `${color} text-ink shadow-hard-sm`
                    : selectedLeft !== null && !matched
                      ? 'border-ink bg-white text-ink shadow-hard-sm hover:bg-lemon hover:shadow-hard-lemon'
                      : 'border-ink bg-white text-ink-soft shadow-hard-sm',
                  disabled && 'opacity-60 cursor-not-allowed'
                )}
              >
                <MathText>{entry.item}</MathText>
              </button>
            )
          })}
        </div>
      </div>

      {matches.length > 0 && !disabled && (
        <button
          type="button"
          onClick={handleUndo}
          className="self-start text-xs font-mono font-black text-ink-soft underline tap-highlight-none"
        >
          Letzte Zuordnung entfernen
        </button>
      )}

      <Button
        fullWidth size="lg"
        disabled={matches.length !== exercise.pairs.length || disabled}
        onClick={handleSubmit}
      >
        Antwort prüfen
      </Button>
    </div>
  )
}
