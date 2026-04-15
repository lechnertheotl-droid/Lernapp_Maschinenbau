import { useState, useMemo } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'

const PAIR_COLORS = [
  'bg-primary-100 dark:bg-primary-900/60 border-primary-700 dark:border-primary-400',
  'bg-green-100 dark:bg-green-900/60 border-green-700 dark:border-green-400',
  'bg-amber-100 dark:bg-amber-900/60 border-amber-700 dark:border-amber-400',
  'bg-rose-100 dark:bg-rose-900/60 border-rose-700 dark:border-rose-400',
  'bg-violet-100 dark:bg-violet-900/60 border-violet-700 dark:border-violet-400',
  'bg-cyan-100 dark:bg-cyan-900/60 border-cyan-700 dark:border-cyan-400',
]

const PAIR_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

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

  function getMatchIdx(leftShuffled, rightShuffled) {
    return matches.findIndex(
      m => m.leftShuffled === leftShuffled || m.rightShuffled === rightShuffled
    )
  }
  function getMatchColor(leftShuffled, rightShuffled) {
    const idx = getMatchIdx(leftShuffled, rightShuffled)
    return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null
  }
  function getMatchLabel(leftShuffled, rightShuffled) {
    const idx = getMatchIdx(leftShuffled, rightShuffled)
    return idx >= 0 ? PAIR_LABELS[idx % PAIR_LABELS.length] : null
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
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">{exercise.question}</MathText>

      <p className="sr-only" aria-live="polite">
        {matches.length} von {exercise.pairs.length} Paaren zugeordnet
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-2" role="list" aria-label="Erste Spalte">
          {shuffledLeft.map((entry, i) => {
            const matched = matchedLeftIndices.has(i)
            const color = getMatchColor(i, null)
            const label = getMatchLabel(i, null)
            return (
              <button
                key={i}
                role="listitem"
                disabled={disabled || matched}
                onClick={() => handleLeftTap(i)}
                aria-label={matched ? `Element ${entry.item}, zugeordnet als Paar ${label}` : `Element ${entry.item}, auswählen`}
                aria-pressed={selectedLeft === i}
                className={cn(
                  'min-h-[48px] px-3 py-2 border-2 rounded-retro text-sm font-mono font-semibold transition-all duration-150 tap-highlight-none retro-press text-left flex items-center gap-2',
                  selectedLeft === i
                    ? 'border-ink bg-lemon text-ink shadow-hard-lemon'
                    : matched && color
                      ? `${color} text-ink dark:text-paper shadow-hard-sm`
                      : 'border-ink bg-white dark:bg-surface-800 text-ink dark:text-surface-100 shadow-hard-sm hover:bg-surface-50 dark:hover:bg-surface-700',
                  disabled && 'opacity-60 cursor-not-allowed'
                )}
              >
                {matched && label && (
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-ink bg-white dark:bg-surface-900 text-ink dark:text-paper text-[11px] font-black flex items-center justify-center" aria-hidden>
                    {label}
                  </span>
                )}
                <span className="flex-1"><MathText>{entry.item}</MathText></span>
              </button>
            )
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2" role="list" aria-label="Zweite Spalte">
          {shuffledRight.map((entry, i) => {
            const matched = matchedRightIndices.has(i)
            const color = getMatchColor(null, i)
            const label = getMatchLabel(null, i)
            return (
              <button
                key={i}
                role="listitem"
                disabled={disabled || matched || selectedLeft === null}
                onClick={() => handleRightTap(i)}
                aria-label={matched ? `Element ${entry.item}, zugeordnet als Paar ${label}` : selectedLeft !== null ? `Element ${entry.item}, als Partner wählen` : `Element ${entry.item}`}
                className={cn(
                  'min-h-[48px] px-3 py-2 border-2 rounded-retro text-sm font-mono font-semibold transition-all duration-150 tap-highlight-none retro-press text-left flex items-center gap-2',
                  matched && color
                    ? `${color} text-ink dark:text-paper shadow-hard-sm`
                    : selectedLeft !== null && !matched
                      ? 'border-ink bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm hover:bg-lemon hover:shadow-hard-lemon'
                      : 'border-ink bg-white dark:bg-surface-800 text-ink dark:text-surface-100 shadow-hard-sm',
                  disabled && 'opacity-60 cursor-not-allowed'
                )}
              >
                {matched && label && (
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-ink bg-white dark:bg-surface-900 text-ink dark:text-paper text-[11px] font-black flex items-center justify-center" aria-hidden>
                    {label}
                  </span>
                )}
                <span className="flex-1"><MathText>{entry.item}</MathText></span>
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
