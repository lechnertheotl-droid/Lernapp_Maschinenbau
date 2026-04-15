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

// ── Equation solver (single variable) ────────────────────────────────────────
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

    return solveForVar(eqStr, v, isDeg)
  } catch {
    return { error: 'Ungültige Gleichung' }
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function solveForVar(eqStr, v, isDeg) {
  try {
    const parts = eqStr.split('=')
    if (parts.length !== 2) return { error: 'Genau ein = erwartet' }
    const [lhs, rhs] = parts.map(s => s.trim())

    // Build f(v) = lhs - rhs, evaluate numerically
    const buildFn = (val) => {
      const substitute = (expr) => {
        const re = new RegExp(`(\\d)(${escapeRegex(v)})`, 'g')
        const re2 = new RegExp(`(${escapeRegex(v)})(\\d)`, 'g')
        const re3 = new RegExp(`(\\))(${escapeRegex(v)})`, 'g')
        const re4 = new RegExp(`(${escapeRegex(v)})(\\()`, 'g')
        const reV = new RegExp(escapeRegex(v), 'g')
        return expr
          .replace(re, '$1*$2')
          .replace(re2, '$1*$2')
          .replace(re3, '$1*$2')
          .replace(re4, '$1*$2')
          .replace(reV, `(${val})`)
      }
      const lEval = calcEval(substitute(lhs), isDeg)
      const rEval = calcEval(substitute(rhs), isDeg)
      if (lEval === null || rEval === null) return null
      return lEval - rEval
    }

    // Newton-Raphson with multiple starting points
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
        if (Math.abs(deriv) < 1e-15) break

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
      const rounded = Math.round(bestSolution * 1e8) / 1e8
      return { variable: v, value: parseFloat(rounded.toPrecision(10)) }
    }

    return { error: 'Keine Lösung gefunden' }
  } catch {
    return { error: 'Ungültige Gleichung' }
  }
}

// ── Multi-variable solver ─────────────────────────────────────────────────────
function solveWithVars(equation, vars, targetVar, isDeg) {
  try {
    // Substitute all known vars into equation (longest names first to avoid partial matches)
    const knownVars = vars.filter(v => v.name.trim() && v.value.trim() && v.name.trim() !== targetVar.trim())
    const sortedByLength = [...knownVars].sort((a, b) => b.name.length - a.name.length)

    let substituted = equation
    for (const { name, value } of sortedByLength) {
      const num = parseFloat(value.replace(',', '.'))
      if (isNaN(num)) return { error: `Ungültiger Wert für ${name}` }
      const re = new RegExp(`\\b${escapeRegex(name)}\\b`, 'g')
      substituted = substituted.replace(re, `(${num})`)
    }

    const target = targetVar.trim()
    if (!target) return { error: 'Gesuchte Variable angeben' }

    // Check if target still in equation
    const targetRe = new RegExp(`\\b${escapeRegex(target)}\\b`)
    if (!targetRe.test(substituted)) {
      // No unknown left — evaluate directly
      const parts = substituted.split('=')
      if (parts.length === 2) {
        const lVal = calcEval(parts[0].trim(), isDeg)
        const rVal = calcEval(parts[1].trim(), isDeg)
        if (lVal !== null && rVal !== null) {
          const diff = Math.abs(lVal - rVal)
          return { variable: target, value: lVal, note: diff < 1e-6 ? 'Gleichung erfüllt' : 'Widerspruch' }
        }
      }
      return { error: 'Variable nicht in Gleichung gefunden' }
    }

    return solveForVar(substituted, target, isDeg)
  } catch {
    return { error: 'Fehler bei der Berechnung' }
  }
}

// ── Detect variable names in an equation ─────────────────────────────────────
function detectVarsInEquation(equation) {
  const funcNames = new Set(['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'arcsin', 'arccos', 'arctan', 'ln', 'log', 'sqrt', 'cbrt', 'abs', 'exp'])
  const cleaned = equation.replace(/\b(sin|cos|tan|asin|acos|atan|arcsin|arccos|arctan|ln|log|sqrt|cbrt|abs|exp)\b/g, '')
  const matches = cleaned.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) ?? []
  return [...new Set(matches)].filter(m => !funcNames.has(m))
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

// ── Multi-tab panel ───────────────────────────────────────────────────────────
function MultiPanel({ isDeg }) {
  const [vars, setVars] = useState([
    { name: '', value: '' },
    { name: '', value: '' },
  ])
  const [equation, setEquation] = useState('')
  const [targetVar, setTargetVar] = useState('')
  const [result, setResult] = useState(null)

  const detectedVars = detectVarsInEquation(equation)
  const knownNames = new Set(vars.map(v => v.name.trim()).filter(Boolean))
  const unknowns = detectedVars.filter(v => !knownNames.has(v) || vars.find(r => r.name.trim() === v)?.value.trim() === '')

  function addVar() {
    setVars(prev => [...prev, { name: '', value: '' }])
  }

  function removeVar(i) {
    setVars(prev => prev.filter((_, idx) => idx !== i))
  }

  function updateVar(i, field, val) {
    setVars(prev => prev.map((v, idx) => idx === i ? { ...v, [field]: val } : v))
  }

  function handleSolve() {
    if (!equation.trim() || !targetVar.trim()) return
    const res = solveWithVars(equation, vars, targetVar, isDeg)
    setResult(res)
  }

  const resultText = result
    ? result.error
      ? result.error
      : `${result.variable} = ${formatResult(result.value)}`
    : null

  return (
    <div className="flex flex-col gap-0 overflow-y-auto max-h-[calc(100dvh-180px)]">
      {/* Result display */}
      <div className="px-4 py-2 bg-green-950 border-b-2 border-ink min-h-[52px] flex items-center justify-end">
        <p className={cn(
          'font-mono font-bold text-right text-xl leading-tight',
          !result ? 'text-green-400/50 text-sm' : result.error ? 'text-red-400' : 'text-green-300'
        )}>
          {resultText ?? 'Ergebnis erscheint hier'}
        </p>
      </div>

      <div className="p-3 flex flex-col gap-3">
        {/* Hint */}
        <p className="text-[10px] font-mono text-ink-soft text-center">Werte in SI-Einheiten (K, Pa, m³, …)</p>

        {/* Variables */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest">Bekannte Variablen</p>
          {vars.map((v, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <input
                type="text"
                value={v.name}
                onChange={e => updateVar(i, 'name', e.target.value)}
                placeholder="Name"
                className="w-20 h-9 px-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
              />
              <span className="font-mono text-ink font-black">=</span>
              <input
                inputMode="decimal"
                type="text"
                value={v.value}
                onChange={e => updateVar(i, 'value', e.target.value)}
                placeholder="Wert"
                className="flex-1 h-9 px-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
              />
              <button
                type="button"
                onClick={() => removeVar(i)}
                className="w-8 h-9 flex items-center justify-center border-2 border-ink rounded-retro font-mono text-xs font-black bg-white text-ink-soft hover:bg-red-50 hover:text-red-600 tap-highlight-none"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addVar}
            className="self-start text-xs font-mono font-black text-primary-700 hover:text-primary-900 underline underline-offset-2 tap-highlight-none"
          >
            + Variable hinzufügen
          </button>
        </div>

        {/* Equation */}
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest">Gleichung</p>
          <input
            type="text"
            value={equation}
            onChange={e => { setEquation(e.target.value); setResult(null) }}
            placeholder="z.B. V_2/V_1 = T_2/T_1"
            className="w-full h-10 px-3 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
          />
        </div>

        {/* Target variable + solve */}
        <div className="flex items-end gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-[10px] font-mono font-bold text-primary-700 uppercase tracking-widest">Gesucht</p>
            {unknowns.length > 0 ? (
              <select
                value={targetVar}
                onChange={e => { setTargetVar(e.target.value); setResult(null) }}
                className="h-10 px-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
              >
                <option value="">– auswählen –</option>
                {unknowns.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            ) : (
              <input
                type="text"
                value={targetVar}
                onChange={e => { setTargetVar(e.target.value); setResult(null) }}
                placeholder="Variable"
                className="h-10 px-2 border-2 border-ink rounded-retro font-mono text-sm bg-white focus:outline-none focus:border-primary-700"
              />
            )}
          </div>
          <button
            type="button"
            onClick={handleSolve}
            disabled={!equation.trim() || !targetVar.trim()}
            className={cn(
              'h-10 px-5 border-2 rounded-retro font-mono text-sm font-black tap-highlight-none retro-press',
              equation.trim() && targetVar.trim()
                ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon'
                : 'bg-surface-100 border-surface-300 text-ink-soft cursor-not-allowed'
            )}
          >
            Lösen
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main Calculator component ─────────────────────────────────────────────────
export function Calculator({ isOpen, onClose }) {
  const [expr, setExpr] = useState('')
  const [isDeg, setIsDeg] = useState(true)
  const [justEq, setJustEq] = useState(false)
  const [page, setPage] = useState('basic')
  const [solverResult, setSolverResult] = useState(null)

  const result = expr ? calcEval(expr, isDeg) : null
  const isSolver = page === 'solver'
  const isMulti = page === 'multi'
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

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink">
          <div className="flex items-center gap-2">
            <span className="text-lemon font-mono font-black text-sm tracking-widest">RECHNER</span>
            {!isMulti && (
              <button onClick={() => setIsDeg((d) => !d)} className="ml-1 flex items-center border border-surface-600 rounded overflow-hidden text-xs font-mono font-bold">
                <span className={cn('px-2 py-0.5 transition-colors', isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>DEG</span>
                <span className={cn('px-2 py-0.5 transition-colors', !isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>RAD</span>
              </button>
            )}
          </div>
          <button onClick={onClose} className="text-surface-400 hover:text-lemon text-lg leading-none font-mono transition-colors w-8 h-8 flex items-center justify-center">✕</button>
        </div>

        {/* Display (hidden for multi tab) */}
        {!isMulti && (
          <div className="px-4 py-3 bg-green-950 border-b-2 border-ink min-h-[78px] flex flex-col justify-end">
            <p className="text-green-400/80 font-mono text-sm text-right truncate min-h-[20px]">{isSolver && !expr ? 'z.B. 2x+3=7' : displayExpr}</p>
            <p className={cn('font-mono font-bold text-right text-3xl leading-tight',
              isSolver
                ? (solverResult?.error ? 'text-red-400' : solverResult ? 'text-green-300' : 'text-green-400/50 text-lg')
                : (result === null && expr ? 'text-red-400' : 'text-green-300')
            )}>{displayResult}</p>
          </div>
        )}

        {/* Tab bar */}
        <div className="grid grid-cols-4 gap-1.5 p-2 bg-paper border-b-2 border-ink">
          {[
            ['basic',     'Standard', '+ − × ÷ und Grundoperationen'],
            ['functions', 'Funktion', 'sin, cos, log, exp, Wurzeln'],
            ['solver',    'Löser',    'Gleichung f(x) = 0 mit Newton-Verfahren'],
            ['multi',     'System',   'Mehrere Gleichungen zugleich lösen'],
          ].map(([key, label, tooltip]) => (
            <button
              key={key}
              type="button"
              onClick={() => { setPage(key); setSolverResult(null) }}
              title={tooltip}
              aria-label={`${label} — ${tooltip}`}
              className={cn(
                'h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press',
                page === key
                  ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon'
                  : 'bg-white dark:bg-surface-800 border-ink text-ink-soft dark:text-surface-300 shadow-hard-sm'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {isMulti ? (
          <MultiPanel isDeg={isDeg} />
        ) : (
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
        )}

        <div className="bg-paper" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
