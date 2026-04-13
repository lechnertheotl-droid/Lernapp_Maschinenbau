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
  ['√', 'fn:sqrt', 'sci'], ['x²', 'sq', 'sci'], ['x³', 'cube', 'sci'], ['=', 'eq', 'eq'],
]

const FUNCTION_ROWS = [
  ['sin', 'fn:sin', 'sci'], ['cos', 'fn:cos', 'sci'], ['tan', 'fn:tan', 'sci'], ['=', 'eq', 'eq'],
  ['arcsin', 'fn:asin', 'sci'], ['arccos', 'fn:acos', 'sci'], ['arctan', 'fn:atan', 'sci'], ['π', 'sym:π', 'sci'],
  ['ln', 'fn:ln', 'sci'], ['log', 'fn:log', 'sci'], ['e^x', 'fn:exp', 'sci'], ['ℯ', 'sym:ℯ', 'sci'],
  ['√', 'fn:sqrt', 'sci'], ['∛', 'fn:cbrt', 'sci'], ['|x|', 'fn:abs', 'sci'], ['1/x', 'inv', 'sci'],
  ['x²', 'sq', 'sci'], ['x³', 'cube', 'sci'], ['+/-', 'sign', 'sci'], ['%', 'sym:%', 'op'],
  ['AC', 'ac', 'clear'], ['⌫', 'del', 'del'], ['(', 'sym:(', 'paren'], [')', 'sym:)', 'paren'],
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

  const result = expr ? calcEval(expr, isDeg) : null
  const displayExpr = expr ? formatExpression(expr) : ' '
  const displayResult = expr ? formatResult(result) : '0'
  const rows = page === 'basic' ? BASIC_ROWS : FUNCTION_ROWS

  const wrapCurrent = useCallback((wrapper) => {
    setExpr((e) => e ? wrapper(e) : '')
    setJustEq(false)
  }, [])

  const press = useCallback((action) => {
    if (!action) return

    if (action === 'ac') { setExpr(''); setJustEq(false); return }
    if (action === 'del') { setExpr((e) => e.slice(0, -1)); setJustEq(false); return }
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
          <p className="text-green-400/80 font-mono text-sm text-right truncate min-h-[20px]">{displayExpr}</p>
          <p className={cn('font-mono font-bold text-right text-3xl leading-tight', result === null && expr ? 'text-red-400' : 'text-green-300')}>{displayResult}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-2 bg-paper border-b-2 border-ink">
          <button type="button" onClick={() => setPage('basic')} className={cn('h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press', page === 'basic' ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm')}>Basis</button>
          <button type="button" onClick={() => setPage('functions')} className={cn('h-10 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press', page === 'functions' ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm')}>Funktionen</button>
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
