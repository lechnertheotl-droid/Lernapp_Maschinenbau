// Parse a number, signed decimal, or simple fraction (a/b, -3/4, 1.5/2) from
// user input. Comma is treated as decimal separator. Returns null on parse
// failure or non-finite result.
//
// Intentionally NO mathjs import: mathjs is ~680 KB and only loaded lazily for
// algebraic expressions in answerParser.ts. NumberInput needs a synchronous,
// lightweight check; full expressions like `sqrt(2)` belong in FreeTextInput.

const NUMBER_RE = /^[-+]?(\d+(\.\d+)?|\.\d+)$/

function parseDecimal(token: string): number | null {
  if (!NUMBER_RE.test(token)) return null
  const n = Number(token)
  return Number.isFinite(n) ? n : null
}

export function parseNumericAnswer(raw: string): number | null {
  if (raw == null) return null
  const trimmed = String(raw).trim().replace(/,/g, '.').replace(/\s+/g, '')
  if (trimmed === '') return null

  if (trimmed.includes('/')) {
    const parts = trimmed.split('/')
    if (parts.length !== 2) return null
    const num = parseDecimal(parts[0])
    const den = parseDecimal(parts[1])
    if (num == null || den == null || den === 0) return null
    return num / den
  }

  return parseDecimal(trimmed)
}
