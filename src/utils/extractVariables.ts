import { VARIABLES, DISPLAY_LABELS, getVariableEntries } from '@/utils/variablesDB'

// LaTeX-Befehle, die direkt einem griechischen Buchstaben entsprechen
const LATEX_TO_SYMBOL: Record<string, string> = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε',
  zeta: 'ζ', eta: 'η', theta: 'θ', iota: 'ι', kappa: 'κ',
  lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π',
  rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ', phi: 'φ',
  chi: 'χ', psi: 'ψ', omega: 'ω',
  Alpha: 'Α', Beta: 'Β', Gamma: 'Γ', Delta: 'Δ', Epsilon: 'Ε',
  Eta: 'Η', Theta: 'Θ', Iota: 'Ι', Kappa: 'Κ', Lambda: 'Λ',
  Mu: 'Μ', Nu: 'Ν', Xi: 'Ξ', Pi: 'Π', Rho: 'Ρ',
  Sigma: 'Σ', Tau: 'Τ', Upsilon: 'Υ', Phi: 'Φ', Chi: 'Χ',
  Psi: 'Ψ', Omega: 'Ω',
}

// LaTeX-Funktionen + Operatoren, die KEINE Variablen sind
const IGNORED_COMMANDS = new Set([
  // trigonometric
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
  'arcsin', 'arccos', 'arctan', 'sinh', 'cosh', 'tanh',
  // analytic
  'ln', 'log', 'exp', 'sqrt', 'cbrt', 'abs',
  'lim', 'sum', 'int', 'prod', 'frac', 'infty',
  // operators
  'cdot', 'times', 'div', 'pm', 'mp', 'leq', 'geq',
  'left', 'right', 'text', 'mathrm', 'mathbf', 'mathit', 'mathcal',
  'bar', 'hat', 'dot', 'ddot', 'vec', 'tilde', 'overline',
  'over', 'under', 'overbrace', 'underbrace',
  'quad', 'qquad', 'hspace', 'vspace',
  'begin', 'end', 'label', 'ref',
  'approx', 'neq', 'equiv', 'sim',
  'in', 'notin', 'subset', 'supset', 'cup', 'cap',
  'partial', 'nabla', 'forall', 'exists',
  // additional function-like names that are NOT variables
  'Re', 'Im', 'det', 'min', 'max', 'mod', 'arg', 'gcd', 'lcm',
])

// Akzent-Befehle, deren Inhalt als 1 Token erhalten bleiben soll
const ACCENT_COMMANDS = new Set(['vec', 'bar', 'hat', 'dot', 'ddot', 'tilde', 'overline'])

const KNOWN_KEYS = new Set(Object.keys(VARIABLES))

export interface ExtractedVariable {
  key: string
  displayLabel: string
  name: string
  unit?: string
  desc: string
  ambiguous?: boolean
  alternates?: { name: string; unit?: string; desc: string }[]
}

interface ExtractOptions {
  topicId?: string | null
}

/**
 * Extrahiert Variablen aus einem rohen LaTeX-String und matched sie auf bekannte
 * Einträge in `VARIABLES`. Bei Mehrdeutigkeit (z.B. `E` = E-Modul / Energie /
 * Eulersche Zahl) wird der zur `topicId` passende Eintrag bevorzugt; alle
 * anderen Bedeutungen kommen als `alternates` mit `ambiguous: true`.
 */
export function extractVariables(
  rawLatex: string,
  options: ExtractOptions = {}
): ExtractedVariable[] {
  if (!rawLatex) return []
  const topicId = options.topicId ?? null

  const found = new Set<string>()
  const consumedRanges: Array<[number, number]> = []

  // 0. Akzent-Befehle wie \vec{r}, \bar{x} → Inhalt als 1 Token, Range merken
  const accentRe = /\\([a-zA-Z]+)\{([^{}]+)\}/g
  let m: RegExpExecArray | null
  while ((m = accentRe.exec(rawLatex)) !== null) {
    const cmd = m[1]
    const inner = m[2]
    if (ACCENT_COMMANDS.has(cmd)) {
      // Ganz innerer Inhalt als 1 Token behandeln
      const cleanInner = inner.replace(/[\s\\{}]/g, '')
      if (cleanInner) found.add(cleanInner)
      consumedRanges.push([m.index, m.index + m[0].length])
    }
  }

  // 1. Verbleibende \command-Sequenzen (nicht in consumedRanges)
  const commandRe = /\\([a-zA-Z]+)/g
  while ((m = commandRe.exec(rawLatex)) !== null) {
    const start = m.index
    if (consumedRanges.some(([a, b]) => start >= a && start < b)) continue
    const cmd = m[1]
    if (IGNORED_COMMANDS.has(cmd)) continue
    const symbol = LATEX_TO_SYMBOL[cmd]
    if (symbol) found.add(symbol)
  }

  // 2. Subscripts ZUERST extrahieren — die referenzierten Buchstaben
  //    müssen aus der späteren Letter-Suche ausgeblendet werden, damit
  //    `F_G` nicht als FG + F + G gezählt wird.
  //    Auch `\sigma_b` → `b` darf nicht standalone als Variable erscheinen.
  const usedInSubscript = new Set<string>() // sowohl Basis-Buchstaben als auch Subscript-Suffixe (single char)
  const subscriptRe = /([a-zA-Z])_\{([^}]+)\}/g
  while ((m = subscriptRe.exec(rawLatex)) !== null) {
    const base = m[1]
    const sub = m[2].replace(/[\s\\]/g, '')
    found.add(base + sub)
    usedInSubscript.add(base)
    if (sub.length === 1 && /[a-zA-Z]/.test(sub)) usedInSubscript.add(sub)
  }
  const shortSubscriptRe = /([a-zA-Z])_([a-zA-Z0-9])/g
  while ((m = shortSubscriptRe.exec(rawLatex)) !== null) {
    found.add(m[1] + m[2])
    usedInSubscript.add(m[1])
    if (/[a-zA-Z]/.test(m[2])) usedInSubscript.add(m[2])
  }
  // \command_letter-Pattern (z.B. \sigma_b → b auch suppressen)
  const cmdShortSubRe = /\\[a-zA-Z]+_([a-zA-Z])/g
  while ((m = cmdShortSubRe.exec(rawLatex)) !== null) {
    usedInSubscript.add(m[1])
  }
  const cmdLongSubRe = /\\[a-zA-Z]+_\{([^}]+)\}/g
  while ((m = cmdLongSubRe.exec(rawLatex)) !== null) {
    const sub = m[1].replace(/[\s\\]/g, '')
    if (sub.length === 1 && /[a-zA-Z]/.test(sub)) usedInSubscript.add(sub)
  }

  // 3. Stripped text für den Letter-Scan
  let stripped = rawLatex
  // Akzent-Inhalte (bereits konsumiert) komplett entfernen
  for (const [a, b] of consumedRanges.sort((x, y) => y[0] - x[0])) {
    stripped = stripped.slice(0, a) + ' '.repeat(b - a) + stripped.slice(b)
  }
  stripped = stripped
    .replace(/\\[a-zA-Z]+/g, ' ')   // remaining \commands
    .replace(/[{}^_$\\]/g, ' ')     // structural chars
    .replace(/[0-9]/g, ' ')         // digits

  // 4. Letter-Tokens (a, ab, sigmaXY...) — überspringe die Buchstaben,
  //    die schon als Subscript-Basis konsumiert sind, falls Token == Basis
  const tokenRe = /[a-zA-Z][a-zA-Z0-9]*/g
  while ((m = tokenRe.exec(stripped)) !== null) {
    const tok = m[0]
    if (IGNORED_COMMANDS.has(tok.toLowerCase())) continue
    if (tok.length === 1 && usedInSubscript.has(tok)) continue
    found.add(tok)
  }

  // 5. Auflösen → bekannte VARIABLES-Schlüssel
  const result: ExtractedVariable[] = []
  const seen = new Set<string>()

  for (const token of found) {
    let key: string | null = null
    if (KNOWN_KEYS.has(token)) {
      key = token
    } else if (KNOWN_KEYS.has(token.toLowerCase())) {
      key = token.toLowerCase()
    } else {
      // Trailing-digits abtrennen (V_1 → V, T_2 → T)
      let base = token.replace(/\d+$/, '')
      if (KNOWN_KEYS.has(base)) key = base
      else if (KNOWN_KEYS.has(base.toLowerCase())) key = base.toLowerCase()
      // Subscript-Buchstaben abtrennen (RA → R, RB → R)
      if (!key && /^[A-Z][a-zA-Z]+$/.test(base)) {
        const head = base[0]
        if (KNOWN_KEYS.has(head)) key = head
      }
    }
    if (!key || seen.has(key)) continue
    seen.add(key)

    const lookup = getVariableEntries(key, topicId)
    if (!lookup) continue
    const { primary, alternates, ambiguous } = lookup

    result.push({
      key,
      displayLabel: DISPLAY_LABELS[key as keyof typeof DISPLAY_LABELS] ?? key,
      name: primary.name,
      unit: primary.unit,
      desc: primary.desc,
      ambiguous,
      alternates: ambiguous
        ? alternates.map((a) => ({ name: a.name, unit: a.unit, desc: a.desc }))
        : undefined,
    })
  }

  return result
}
