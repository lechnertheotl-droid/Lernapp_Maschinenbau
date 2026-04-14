import { VARIABLES, DISPLAY_LABELS } from '@/utils/variablesDB'

// LaTeX commands that map to Greek-letter keys in VARIABLES
const LATEX_TO_SYMBOL = {
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

// LaTeX functions to ignore (not variables)
const IGNORED_COMMANDS = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
  'arcsin', 'arccos', 'arctan', 'sinh', 'cosh', 'tanh',
  'ln', 'log', 'exp', 'sqrt', 'cbrt', 'abs',
  'frac', 'sum', 'int', 'prod', 'lim', 'infty',
  'cdot', 'times', 'div', 'pm', 'mp',
  'left', 'right', 'text', 'mathrm', 'mathbf', 'mathit',
  'bar', 'hat', 'dot', 'ddot', 'vec', 'tilde',
  'over', 'under', 'overbrace', 'underbrace',
  'quad', 'qquad', 'hspace', 'vspace',
  'begin', 'end', 'label', 'ref',
  'approx', 'neq', 'leq', 'geq', 'equiv', 'sim',
  'in', 'notin', 'subset', 'supset', 'cup', 'cap',
  'partial', 'nabla', 'forall', 'exists',
])

/**
 * Extract variables from a raw LaTeX string and look them up in VARIABLES.
 * Returns array of { key, displayLabel, unit, desc } for known variables.
 */
export function extractVariables(rawLatex) {
  if (!rawLatex) return []

  const found = new Set()

  // 1. Extract \command sequences and map to symbols/keys
  const commandRe = /\\([a-zA-Z]+)/g
  let m
  while ((m = commandRe.exec(rawLatex)) !== null) {
    const cmd = m[1]
    if (IGNORED_COMMANDS.has(cmd)) continue
    const symbol = LATEX_TO_SYMBOL[cmd]
    if (symbol) {
      found.add(symbol)
    }
  }

  // 2. Strip LaTeX commands for the letter-scan pass
  const stripped = rawLatex
    .replace(/\\[a-zA-Z]+/g, ' ')  // remove \commands
    .replace(/[{}^_$\\]/g, ' ')    // remove structural chars
    .replace(/[0-9]/g, ' ')        // remove digits

  // 3. Scan for letter tokens (single letters and short combos like cp, cv, Re, etc.)
  // Match sequences of uppercase+lowercase letters as potential variable names
  const tokenRe = /[a-zA-Z][a-zA-Z0-9]*/g
  while ((m = tokenRe.exec(stripped)) !== null) {
    const tok = m[0]
    if (IGNORED_COMMANDS.has(tok.toLowerCase())) continue
    found.add(tok)
  }

  // 4. Also scan subscript patterns in original: x_{...} → key
  const subscriptRe = /([a-zA-Z])_\{([^}]+)\}/g
  while ((m = subscriptRe.exec(rawLatex)) !== null) {
    found.add(m[1] + m[2]) // e.g. σ_b → σb
  }
  const shortSubscriptRe = /([a-zA-Z])_([a-zA-Z0-9])/g
  while ((m = shortSubscriptRe.exec(rawLatex)) !== null) {
    found.add(m[1] + m[2]) // e.g. F_G → FG
  }

  // 5. Map found tokens to VARIABLES keys
  const result = []
  const seen = new Set()

  for (const token of found) {
    // Try exact match first
    let key = null
    if (VARIABLES[token]) {
      key = token
    } else if (VARIABLES[token.toLowerCase()]) {
      key = token.toLowerCase()
    } else {
      // Try stripping trailing digits (V_1 → V, T_2 → T)
      const base = token.replace(/\d+$/, '')
      if (VARIABLES[base]) key = base
      else if (VARIABLES[base.toLowerCase()]) key = base.toLowerCase()
    }

    if (key && !seen.has(key)) {
      seen.add(key)
      const v = VARIABLES[key]
      result.push({
        key,
        displayLabel: DISPLAY_LABELS[key] || key,
        unit: v.unit,
        desc: v.desc,
        name: v.name,
      })
    }
  }

  return result
}
