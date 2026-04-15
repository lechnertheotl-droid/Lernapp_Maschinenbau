import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'
import { compareAnswer, preloadParser, isParserReady, type ParserMode } from '@/utils/answerParser'

interface FreeTextExerciseShape {
  question: string
  correctAnswers: string[]
  parser?: ParserMode
  tolerance?: number
  placeholder?: string
}

interface Props {
  exercise: FreeTextExerciseShape
  onSubmit: (answer: { value: string }) => void
  disabled?: boolean
}

const SYMBOLS: { label: string; insert: string; aria: string }[] = [
  { label: 'π', insert: 'π', aria: 'Pi einfügen' },
  { label: '√', insert: '√(', aria: 'Wurzel einfügen' },
  { label: 'x²', insert: '^2', aria: 'Hoch 2 einfügen' },
  { label: '·', insert: '·', aria: 'Malpunkt einfügen' },
  { label: '÷', insert: '÷', aria: 'Divisionszeichen einfügen' },
  { label: '(', insert: '(', aria: 'Klammer auf einfügen' },
  { label: ')', insert: ')', aria: 'Klammer zu einfügen' },
]

export function validate(answer: { value: string }, exercise: FreeTextExerciseShape) {
  const mode = exercise.parser ?? 'algebraic'
  const isCorrect = compareAnswer(answer.value, exercise.correctAnswers, mode)
  return { isCorrect }
}

export function FreeTextInput({ exercise, onSubmit, disabled }: Props) {
  const [value, setValue] = useState('')
  const [parserReady, setParserReady] = useState(isParserReady())
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (parserReady) return
    let cancelled = false
    preloadParser().then(() => { if (!cancelled) setParserReady(true) })
    return () => { cancelled = true }
  }, [parserReady])

  const insertAtCursor = (snippet: string) => {
    const input = inputRef.current
    if (!input) {
      setValue((v) => v + snippet)
      return
    }
    const start = input.selectionStart ?? value.length
    const end = input.selectionEnd ?? value.length
    const next = value.slice(0, start) + snippet + value.slice(end)
    setValue(next)
    requestAnimationFrame(() => {
      input.focus()
      const caret = start + snippet.length
      input.setSelectionRange(caret, caret)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit({ value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
        {exercise.question}
      </MathText>

      <div className="flex flex-wrap gap-1.5" aria-label="Formel-Symbole">
        {SYMBOLS.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => insertAtCursor(s.insert)}
            disabled={disabled}
            aria-label={s.aria}
            className="min-w-10 h-10 px-2 rounded-retro border-2 border-ink bg-white dark:bg-surface-800 shadow-hard-sm text-ink dark:text-paper font-mono font-black text-sm retro-press tap-highlight-none disabled:opacity-50"
          >
            {s.label}
          </button>
        ))}
      </div>

      <input
        ref={inputRef}
        type="text"
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder={exercise.placeholder ?? 'Antwort eingeben…'}
        aria-label="Deine Antwort"
        className="h-12 px-4 text-base font-mono border-2 border-ink rounded-retro bg-white dark:bg-surface-800 dark:text-paper shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:opacity-60"
      />

      <Button
        type="submit"
        fullWidth
        size="lg"
        variant="dark"
        disabled={!value.trim() || disabled || !parserReady}
      >
        {parserReady ? 'Antwort prüfen' : 'Lade Parser…'}
      </Button>
    </form>
  )
}
