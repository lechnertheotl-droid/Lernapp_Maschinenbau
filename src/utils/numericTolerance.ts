import { parseNumericAnswer } from './parseNumericAnswer'

/**
 * Anzahl Nachkommastellen im Nutzer-Input (Komma oder Punkt erlaubt).
 * `7.7`     → 1
 * `7,67`    → 2
 * `293`     → 0
 * `1.5e-3`  → 1 (vor dem `e` zählen die Stellen — selten genutzt)
 */
export function decimalsOf(input: string): number {
  const cleaned = input.trim().replace(',', '.')
  const m = /\.(\d+)/.exec(cleaned)
  return m ? m[1].length : 0
}

/**
 * Rundung auf `decimals` Nachkommastellen, „half away from zero" (so wie
 * Menschen runden) — daher rundet `-1.55` zu `-1.6`, nicht wie JS-`Math.round`
 * zu `-1.5`.
 */
export function roundTo(value: number, decimals: number): number {
  const f = Math.pow(10, decimals)
  return (value < 0 ? -Math.round(-value * f) : Math.round(value * f)) / f
}

/**
 * Akzeptiert eine Number-Antwort, wenn entweder
 *   - die klassische Toleranz erfüllt ist
 *   - ODER die korrekte Antwort, gerundet auf die Eingabe-Präzision des
 *     Schülers, exakt mit dem Schüler-Input übereinstimmt.
 *
 * Beispiel: `7.7` als Antwort auf 7.6712 (tolerance 0.01) ist akzeptabel,
 * weil 7.6712 → 1 Stelle = 7.7 = Schüler-Eingabe.
 */
export function isNumericMatch(
  studentRaw: string,
  correct: number,
  tolerance: number
): boolean {
  if (studentRaw == null) return false
  const trimmed = studentRaw.trim()
  if (trimmed === '') return false
  const student = parseNumericAnswer(trimmed)
  if (student == null) return false

  // Pfad 1: klassische absolute Toleranz
  if (Math.abs(student - correct) <= tolerance) return true

  // Pfad 2: Präzisions-Match (Schüler hat sauber gerundet) — nur sinnvoll
  // bei reinen Dezimal-Eingaben, nicht bei Brüchen oder Ausdrücken
  const dec = decimalsOf(trimmed)
  if (dec >= 0 && dec <= 6) {
    const rounded = roundTo(correct, dec)
    if (Math.abs(student - rounded) <= 1e-9) return true
  }

  return false
}
