/**
 * Algebraic + numeric answer comparison via mathjs.
 *
 * mathjs ist ~680 KB groß und wird daher **lazy** über `preloadParser()` geladen.
 * Konsumenten (FreeTextInput, MultiStepExercise) müssen `preloadParser()` beim
 * Mount aufrufen und den Submit-Button bis zum Resolve disabled halten.
 *
 * Die synchronen Vergleichsfunktionen werfen einen Fehler, wenn sie aufgerufen
 * werden, bevor mathjs geladen ist — das macht den Programmierfehler offensichtlich.
 */

type MathjsAPI = typeof import('mathjs')

let _mathjs: MathjsAPI | null = null
let _loadingPromise: Promise<MathjsAPI> | null = null

export function preloadParser(): Promise<void> {
  if (_mathjs) return Promise.resolve()
  if (!_loadingPromise) {
    _loadingPromise = import('mathjs').then((m) => {
      _mathjs = m
      return m
    })
  }
  return _loadingPromise.then(() => undefined)
}

export function isParserReady(): boolean {
  return _mathjs !== null
}

function ensure(): MathjsAPI {
  if (!_mathjs) {
    throw new Error(
      'answerParser: mathjs noch nicht geladen — preloadParser() awaiten und Submit erst danach erlauben.'
    )
  }
  return _mathjs
}

function clean(input: string): string {
  return input
    .trim()
    .replace(/\s+/g, '')
    .replace(/·|×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, 'pi')
    .replace(/√(\d+(?:\.\d+)?|[a-zA-Z]\w*|\([^()]*\))/g, 'sqrt($1)')
    .replace(/√/g, 'sqrt')
}

function rationalizeSafe(expr: string): string | null {
  try {
    return ensure().rationalize(expr).toString()
  } catch {
    return null
  }
}

export function normalizeAlgebraic(input: string): string {
  const cleaned = clean(input)
  if (!cleaned) return ''
  try {
    const { simplify, parse } = ensure()
    return simplify(parse(cleaned)).toString()
  } catch {
    return cleaned
  }
}

export function compareAlgebraic(student: string, solutions: string[]): boolean {
  const cleanedStudent = clean(student)
  if (!cleanedStudent) return false
  const { simplify, parse } = ensure()
  let studentNorm: string
  try {
    studentNorm = simplify(parse(cleanedStudent)).toString()
  } catch {
    return false
  }
  const studentRat = rationalizeSafe(cleanedStudent)
  for (const sol of solutions) {
    try {
      const cleanedSol = clean(sol)
      const solNorm = simplify(parse(cleanedSol)).toString()
      if (studentNorm === solNorm) return true
      const diff = simplify(parse(`(${cleanedStudent})-(${cleanedSol})`)).toString()
      if (diff === '0') return true
      if (studentRat) {
        const solRat = rationalizeSafe(cleanedSol)
        if (solRat && studentRat === solRat) return true
      }
    } catch {
      continue
    }
  }
  return false
}

export function compareNumericEquivalent(
  student: string,
  solutions: string[],
  tol = 1e-6
): boolean {
  const cleaned = clean(student)
  if (!cleaned) return false
  const { evaluate } = ensure()
  let studentVal: number
  try {
    studentVal = Number(evaluate(cleaned))
  } catch {
    return false
  }
  if (!Number.isFinite(studentVal)) return false
  for (const sol of solutions) {
    try {
      const solVal = Number(evaluate(clean(sol)))
      if (Number.isFinite(solVal) && Math.abs(studentVal - solVal) <= tol) return true
    } catch {
      continue
    }
  }
  return false
}

export type ParserMode = 'algebraic' | 'numeric' | 'trig'

export function compareAnswer(
  student: string,
  solutions: string[],
  mode: ParserMode = 'algebraic'
): boolean {
  if (mode === 'numeric' || mode === 'trig') {
    return compareNumericEquivalent(student, solutions)
  }
  return compareAlgebraic(student, solutions)
}
