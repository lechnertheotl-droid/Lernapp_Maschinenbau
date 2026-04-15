import { useEffect, useState, Fragment, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { MathText } from '@/components/ui/MathText'
import { compareAnswer, preloadParser, isParserReady } from '@/utils/answerParser'

interface Blank {
  id: string
  answer: string | number
  tolerance?: number
  alternates?: string[]
  numeric?: boolean
}

interface FillInBlankShape {
  question?: string
  template: string
  blanks: Blank[]
}

interface Props {
  exercise: FillInBlankShape
  onSubmit: (answer: { values: Record<string, string> }) => void
  disabled?: boolean
}

const BLANK_RE = /__([\w-]+)__/g

export function validate(
  answer: { values: Record<string, string> },
  exercise: FillInBlankShape
) {
  const wrong: string[] = []
  for (const b of exercise.blanks) {
    const raw = (answer.values[b.id] ?? '').trim()
    if (!raw) {
      wrong.push(b.id)
      continue
    }
    const expected = [String(b.answer), ...(b.alternates ?? [])]
    const ok = b.numeric
      ? compareAnswer(raw, expected, 'numeric')
      : compareAnswer(raw, expected, 'algebraic') ||
        expected.some((e) => e.trim().toLowerCase() === raw.toLowerCase())
    if (!ok) wrong.push(b.id)
  }
  return { isCorrect: wrong.length === 0, wrong }
}

export function FillInBlank({ exercise, onSubmit, disabled }: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [parserReady, setParserReady] = useState(isParserReady())

  useEffect(() => {
    if (parserReady) return
    let cancelled = false
    preloadParser().then(() => { if (!cancelled) setParserReady(true) })
    return () => { cancelled = true }
  }, [parserReady])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (exercise.blanks.some((b) => !(values[b.id] ?? '').trim())) return
    onSubmit({ values })
  }

  const parts = exercise.template.split(BLANK_RE)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {exercise.question && (
        <MathText className="text-base font-black text-ink dark:text-paper leading-relaxed block">
          {exercise.question}
        </MathText>
      )}

      <p className="text-base leading-loose text-ink dark:text-paper">
        {parts.map((segment, idx) => {
          const isBlank = idx % 2 === 1
          if (!isBlank) {
            return <MathText key={`txt-${idx}`}>{segment}</MathText>
          }
          const blankId = segment
          const meta = exercise.blanks.find((b) => b.id === blankId)
          return (
            <Fragment key={`blank-${idx}`}>
              <input
                type="text"
                inputMode={meta?.numeric ? 'decimal' : 'text'}
                autoComplete="off"
                spellCheck={false}
                value={values[blankId] ?? ''}
                onChange={(e) => setValues((v) => ({ ...v, [blankId]: e.target.value }))}
                disabled={disabled}
                aria-label={`Lücke ${blankId}`}
                className="inline-block mx-1 h-10 w-24 px-2 text-center font-mono font-black border-2 border-ink rounded-retro bg-lemon-light dark:bg-surface-700 text-ink dark:text-paper shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:opacity-60"
              />
            </Fragment>
          )
        })}
      </p>

      <Button
        type="submit"
        fullWidth
        size="lg"
        variant="dark"
        disabled={disabled || !parserReady || exercise.blanks.some((b) => !(values[b.id] ?? '').trim())}
      >
        {parserReady ? 'Antwort prüfen' : 'Lade Parser…'}
      </Button>
    </form>
  )
}
