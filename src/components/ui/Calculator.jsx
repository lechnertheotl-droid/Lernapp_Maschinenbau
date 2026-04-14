import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

// ── Safe evaluator ────────────────────────────────────────────────────────────
function calcEval(expr, isDeg) {
  try {
    const toR = isDeg ? (x) => (x * Math.PI) / 180 : (x) => x
    const fromR = isDeg ? (x) => (x * 180) / Math.PI : (x) => x

    // Pre-process: handle display symbols and implicit multiplication like 2π.
    let e = expr
      .replace(/arcsin/g, 'asin')
      .replace(/arccos/g, 'acos')
      .replace(/arctan/g, 'atan')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/(\([^()]+\)|\d+(?:\.\d+)?|π|ℯ)²/g, '($1**2)')
      .replace(/(\([^()]+\)|\d+(?:\.\d+)?|π|ℯ)³/g, '($1**3)')
      .replace(/(\d)(π|ℯ)/g, '$1*$2')
      .replace(/(π|ℯ)(\d)/g, '$1*$2')
      .replace(/(\d|π|ℯ|\))(\()/g, '$1*$2')
      .replace(/(\))(\d|π|ℯ)/g, '$1*$2')
      .replace(/π/g, '__PI__')
      .replace(/ℯ/g, '__E__')

    const fn = new Function(
      'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
      'ln', 'log', 'sqrt', 'cbrt', 'abs', 'exp', '__PI__', '__E__',
      `'use strict'; return (${e})`
    )
    const result = fn(
      (x) => Math.sin(toR(x)),
      (x) => Math.cos(toR(x)),
      (x) => Math.tan(toR(x)),
      (x) => fromR(Math.asin(x)),
      (x) => fromR(Math.acos(x)),
      (x) => fromR(Math.atan(x)),
      (x) => Math.log(x),
      (x) => Math.log10(x),
      (x) => Math.sqrt(x),
      (x) => Math.cbrt(x),
      (x) => Math.abs(x),
      (x) => Math.exp(x),
      Math.PI,
      Math.E
    )
    if (!isFinite(result) || isNaN(result)) return null
    return parseFloat(result.toPrecision(10))
  } catch {
    return null
  }
}

// ── Equation solver ──────────────────────────────────────────────────────────
function solveEquation(eqStr, isDeg) {
  try {
    // Split on '=' — must have exactly one
    const parts = eqStr.split('=')
    if (parts.length !== 2) return { error: 'Genau ein = erwartet' }

    const [lhs, rhs] = parts.map(s => s.trim())
    if (!lhs || !rhs) return { error: 'Beide Seiten ausfüllen' }

    // Detect variable (x, t, or first lowercase letter that isn't a function name)
    const funcNames = /\b(sin|cos|tan|asin|acos|atan|arcsin|arccos|arctan|ln|log|sqrt|cbrt|abs|exp)\b/g
    const cleaned = eqStr.replace(funcNames, '')
    const varMatch = cleaned.match(/[a-z]/i)
    const v = varMatch ? varMatch[0] : 'x'

    // Build f(v) = lhs - rhs, evaluate numerically
    const buildFn = (val) => {
      const substitute = (expr) => {
        // Replace variable with value, handling implicit multiplication: 2x → 2*x
        return expr
          .replace(new RegExp(`(\\d)(${v})`, 'g'), '$1*$2')
          .replace(new RegExp(`(${v})(\\d)`, 'g'), '$1*$2')
          .replace(new RegExp(`(\\))(${v})`, 'g'), '$1*$2')
          .replace(new RegExp(`(${v})(\\()`, 'g'), '$1*$2')
          .replace(new RegExp(v, 'g'), `(${val})`)
      }
      const lEval = calcEval(substitute(lhs), isDeg)
      const rEval = calcEval(substitute(rhs), isDeg)
      if (lEval === null || rEval === null) return null
      return lEval - rEval
    }

    // Try multiple starting points (Newton's method can miss with bad initial guess)
    const h = 1e-8
    const starts = [0, 1, -1, 5, -5, 10, -10, 0.5, -0.5, 100, -100, 0.01, Math.PI]
    let bestSolution = null
    let bestResidual = Infinity

    for (const x0 of starts) {
      let x = x0
      for (let i = 0; i < 200; i++) {
        const fx = buildFn(x)
        if (fx === null) break
        if (Math.abs(fx) < 1e-12) break

        const fxh = buildFn(x + h)
        if (fxh === null) break
        const deriv = (fxh - fx) / h
        if (Math.abs(deriv) < 1e-15) break // flat region

        const step = fx / deriv
        x = x - step
        if (!isFinite(x)) break
        if (Math.abs(fx) < 1e-10) break
      }

      if (isFinite(x)) {
        const residual = Math.abs(buildFn(x) ?? Infinity)
        if (residual < bestResidual) {
          bestResidual = residual
          bestSolution = x
        }
      }
    }

    if (bestSolution !== null && bestResidual < 1e-6) {
      // Round near-integers
      const rounded = Math.round(bestSolution * 1e8) / 1e8
      return { variable: v, value: parseFloat(rounded.toPrecision(10)) }
    }

    return { error: 'Keine Lösung gefunden' }
  } catch {
    return { error: 'Ungültige Gleichung' }
  }
}

function formatResult(val) {
  if (val === null) return 'Fehler'
  const s = String(val)
  if (Math.abs(val) > 1e12 || (Math.abs(val) < 1e-6 && val !== 0)) return val.toExponential(6)
  return s.length > 14 ? val.toPrecision(10) : s
}

function formatExpression(expr) {
  return expr
    .replace(/asin\(/g, 'arcsin(')
    .replace(/acos\(/g, 'arccos(')
    .replace(/atan\(/g, 'arctan(')
    .replace(/sqrt\(/g, '√(')
    .replace(/cbrt\(/g, '∛(')
    .replace(/abs\(/g, '|(')
    .replace(/exp\(/g, 'e^(')
    .replace(/\*/g, '·')
}

const BASIC_ROWS = [
  ['AC', 'ac', 'clear'], ['⌫', 'del', 'del'], ['(', 'sym:(', 'paren'], [')', 'sym:)', 'paren'],
  ['7', 'num:7', 'num'], ['8', 'num:8', 'num'], ['9', 'num:9', 'num'], ['÷', 'sym:÷', 'op'],
  ['4', 'num:4', 'num'], ['5', 'num:5', 'num'], ['6', 'num:6', 'num'], ['×', 'sym:×', 'op'],
  ['1', 'num:1', 'num'], ['2', 'num:2', 'num'], ['3', 'num:3', 'num'], ['−', 'sym:−', 'op'],
  ['0', 'num:0', 'num'], ['.', 'sym:.', 'num'], ['π', 'sym:π', 'sci'], ['+', 'sym:+', 'op'],
  ['√', 'fn:sqrt', 'sci'], ['x²', 'sq', 'sci'], ['xʸ', 'sym:^', 'sci'], ['=', 'eq', 'eq'],
]

const FUNCTION_ROWS = [
  ['sin', 'fn:sin', 'sci'], ['cos', 'fn:cos', 'sci'], ['tan', 'fn:tan', 'sci'], ['=', 'eq', 'eq'],
  ['arcsin', 'fn:asin', 'sci'], ['arccos', 'fn:acos', 'sci'], ['arctan', 'fn:atan', 'sci'], ['π', 'sym:π', 'sci'],
  ['ln', 'fn:ln', 'sci'], ['log', 'fn:log', 'sci'], ['e^x', 'fn:exp', 'sci'], ['ℯ', 'sym:ℯ', 'sci'],
  ['√', 'fn:sqrt', 'sci'], ['∛', 'fn:cbrt', 'sci'], ['|x|', 'fn:abs', 'sci'], ['1/x', 'inv', 'sci'],
  ['x²', 'sq', 'sci'], ['x³', 'cube', 'sci'], ['+/-', 'sign', 'sci'], ['%', 'sym:%', 'op'],
  ['AC', 'ac', 'clear'], ['⌫', 'del', 'del'], ['(', 'sym:(', 'paren'], [')', 'sym:)', 'paren'],
]

const SOLVER_ROWS = [
  ['x', 'sym:x', 'sci'], ['=', 'sym:=', 'op'], ['(', 'sym:(', 'paren'], [')', 'sym:)', 'paren'],
  ['7', 'num:7', 'num'], ['8', 'num:8', 'num'], ['9', 'num:9', 'num'], ['÷', 'sym:÷', 'op'],
  ['4', 'num:4', 'num'], ['5', 'num:5', 'num'], ['6', 'num:6', 'num'], ['×', 'sym:×', 'op'],
  ['1', 'num:1', 'num'], ['2', 'num:2', 'num'], ['3', 'num:3', 'num'], ['−', 'sym:−', 'op'],
  ['0', 'num:0', 'num'], ['.', 'sym:.', 'num'], ['π', 'sym:π', 'sci'], ['+', 'sym:+', 'op'],
  ['AC', 'ac', 'clear'], ['⌫', 'del', 'del'], ['x²', 'sq', 'sci'], ['Lösen', 'solve', 'eq'],
]

const cellStyles = {
  sci: 'bg-surface-100 text-ink hover:bg-surface-200 border-surface-300',
  clear: 'bg-red-600 text-white hover:bg-red-700 border-red-800',
  del: 'bg-surface-700 text-white hover:bg-surface-800 border-surface-900',
  paren: 'bg-surface-200 text-ink hover:bg-surface-300 border-surface-400',
  op: 'bg-primary-700 text-white hover:bg-primary-800 border-primary-900',
  num: 'bg-white text-ink hover:bg-surface-50 border-surface-200 text-xl',
  eq: 'bg-lemon text-ink hover:bg-lemon-dark border-lemon-dark font-black text-lg',
}

export function Calculator({ isOpen, onClose }) {
  const [expr, setExpr] = useState('')
  const [isDeg, setIsDeg] = useState(true)
  const [justEq, setJustEq] = useState(false)
  const [page, setPage] = useState('basic')
  const [solverResult, setSolverResult] = useState(null)

  const result = expr ? calcEval(expr, isDeg) : null
  const isSolver = page === 'solver'
  const displayExpr = expr ? (isSolver ? expr : formatExpression(expr)) : ' '
  const displayResult = isSolver
    ? (solverResult ? (solverResult.error ?? `${solverResult.variable} = ${formatResult(solverResult.value)}`) : 'Gleichung eingeben')
    : (expr ? formatResult(result) : '0')
  const rows = page === 'basic' ? BASIC_ROWS : page === 'functions' ? FUNCTION_ROWS : SOLVER_ROWS

  const wrapCurrent = useCallback((wrapper) => {
    setExpr((e) => e ? wrapper(e) : '')
    setJustEq(false)
  }, [])

  const press = useCallback((action) => {
    if (!action) return

    if (action === 'ac') { setExpr(''); setJustEq(false); setSolverResult(null); return }
    if (action === 'del') { setExpr((e) => e.slice(0, -1)); setJustEq(false); return }
    if (action === 'solve') {
      if (expr) setSolverResult(solveEquation(expr, isDeg))
      return
    }
    if (action === 'eq') {
      const val = calcEval(expr, isDeg)
      if (val !== null) { setExpr(String(val)); setJustEq(true) }
      return
    }
    if (action === 'sq') { justEq && expr ? setExpr(`(${expr})²`) : setExpr((e) => e + '²'); setJustEq(false); return }
    if (action === 'cube') { justEq && expr ? setExpr(`(${expr})³`) : setExpr((e) => e + '³'); setJustEq(false); return }
    if (action === 'inv') { wrapCurrent((e) => `1/(${e})`); return }
    if (action === 'sign') { wrapCurrent((e) => `-(${e})`); return }

    const isOp = action.startsWith('sym:') && '÷×−+%'.includes(action.slice(4))
    if (justEq && !isOp) { setExpr(''); setJustEq(false) } else { setJustEq(false) }

    if (action.startsWith('num:')) setExpr((e) => e + action.slice(4))
    else if (action.startsWith('sym:')) setExpr((e) => e + action.slice(4))
    else if (action.startsWith('fn:')) setExpr((e) => e + `${action.slice(3)}(`)
  }, [expr, isDeg, justEq, wrapCurrent])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-sm border-t-2 border-x-2 border-ink bg-paper animate-slide-in-up rounded-t-retro overflow-hidden shadow-hard-xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink">
          <div className="flex items-center gap-2">
            <span className="text-lemon font-mono font-black text-sm tracking-widest">RECHNER</span>
            <button onClick={() => setIsDeg((d) => !d)} className="ml-1 flex items-center border border-surface-600 rounded overflow-hidden text-xs font-mono font-bold">
              <span className={cn('px-2 py-0.5 transition-colors', isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>DEG</span>
              <span className={cn('px-2 py-0.5 transition-colors', !isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>RAD</span>
            </button>
          </div>
          <button onClick={onClose} className="text-surface-400 hover:text-lemon text-lg leading-none font-mono transition-colors w-8 h-8 flex items-center justify-center">✕</button>
        </div>

        <div className="px-4 py-3 bg-green-950 border-b-2 border-ink min-h-[78px] flex flex-col justify-end">
          <p className="text-green-400/80 font-mono text-sm text-right truncate min-h-[20px]">{isSolver && !expr ? 'z.B. 2x+3=7' : displayExpr}</p>
          <p className={cn('font-mono font-bold text-right text-3xl leading-tight',
            isSolver
              ? (solverResult?.error ? 'text-red-400' : solverResult ? 'text-green-300' : 'text-green-400/50 text-lg')
              : (result === null && expr ? 'text-red-400' : 'text-green-300')
          )}>{displayResult}</p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 p-2 bg-paper border-b-2 border-ink">
          {[['basic', 'Basis'], ['functions', 'f(x)'], ['solver', 'Löser']].map(([key, label]) => (
            <button key={key} type="button" onClick={() => { setPage(key); setSolverResult(null) }} className={cn('h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press', page === key ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm')}>{label}</button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-px bg-ink p-px">
          {rows.map(([label, action, style], i) => (
            <button
              key={`${page}-${i}-${label}`}
              onClick={() => press(action)}
              className={cn('h-14 flex items-center justify-center font-mono font-black text-sm transition-colors select-none tap-highlight-none active:brightness-75', cellStyles[style] ?? cellStyles.num)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-paper" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
