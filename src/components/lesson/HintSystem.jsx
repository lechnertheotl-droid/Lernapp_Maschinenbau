import { useState } from 'react'
import { getNextHint } from '@/utils/hints'

export function HintSystem({ hints = [], disabled }) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  if (!hints.length) return null

  const revealedHints = hints.slice(0, currentIndex + 1)
  const allShown = currentIndex >= hints.length - 1

  return (
    <div className="flex flex-col gap-2">
      {revealedHints.map((hint, i) => (
        <div key={i} className="flex gap-2 items-start bg-lemon-light border-2 border-ink rounded-retro px-3 py-2 text-sm text-ink animate-fade-in shadow-hard-sm">
          <span className="text-primary-700 mt-0.5 font-mono font-black">!</span>
          <span>{hint}</span>
        </div>
      ))}

      {!allShown && !disabled && (
        <button
          onClick={() => {
            const { index } = getNextHint(currentIndex, hints)
            setCurrentIndex(index)
          }}
          className="self-start font-mono text-xs font-black text-primary-700 hover:text-primary-900 underline underline-offset-4 transition-colors tap-highlight-none"
        >
          {currentIndex === -1 ? 'Tipp anzeigen' : 'Nächster Tipp'}
        </button>
      )}
    </div>
  )
}
