import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

// ── Safe evaluator ────────────────────────────────────────────────────────────
function calcEval(expr, isDeg) {
  try {
    const toR = isDeg ? (x) => (x * Math.PI) / 180 : (x) => x
    const fromR = isDeg ? (x) => (x * 180) / Math.PI : (x) => x

    // Pre-process: handle implicit multiplication like 2π → 2*π
    let e = expr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/(\([^()]+\)|\d+(?:\.\d+)?|π|ℯ)²/g, '($1**2)')
      .replace(/(\([^()]+\)|\d+(?:\.\d+)?|π|ℯ)³/g, '($1**3)')
      // implicit mult before π and e symbols: "2π" → "2*π", "3e" → "3*e"
      .replace(/(\d)(π|ℯ)/g, '$1*$2')
      .replace(/(π|ℯ)(\d)/g, '$1*$2')
      .replace(/(\d|π|ℯ|\))(\()/g, '$1*$2')
      .replace(/(\))(\d|π|ℯ)/g, '$1*$2')
      .replace(/π/g, '__PI__')
      .replace(/ℯ/g, '__E__')

    const fn = new Function(
      'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
      'ln', 'log', 'sqrt', 'abs', '__PI__', '__E__',
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
      (x) => Math.abs(x),
      Math.PI,
      Math.E
    )
    if (!isFinite(result) || isNaN(result)) return null
    // Round to 10 significant figures to avoid floating-point noise
    const rounded = parseFloat(result.toPrecision(10))
    return rounded
  } catch {
    return null
  }
}

function formatResult(val) {
  if (val === null) return 'Fehler'
  const s = String(val)
  // Use exponential for very large/small numbers
  if (Math.abs(val) > 1e12 || (Math.abs(val) < 1e-6 && val !== 0)) {
    return val.toExponential(6)
  }
  return s.length > 14 ? val.toPrecision(10) : s
}

// ── Button grid config ────────────────────────────────────────────────────────
const ROWS = [
  // [label, action, style]
  ['sin',  'fn:sin',  'sci'],  ['cos',  'fn:cos',  'sci'],  ['tan',  'fn:tan',  'sci'],  ['ln',   'fn:ln',   'sci'],  ['log',  'fn:log',  'sci'],
  ['x²',   'sq',      'sci'],  ['√',    'fn:sqrt', 'sci'],  ['π',    'sym:π',   'sci'],  ['ℯ',    'sym:ℯ',   'sci'],  ['|x|',  'fn:abs',  'sci'],
  ['AC',   'ac',      'clear'],['(',    'sym:(',   'paren'],[')',    'sym:)',   'paren'],['⌫',    'del',     'del'],  ['÷',    'sym:÷',   'op'],
  ['7',    'num:7',   'num'],  ['8',    'num:8',   'num'],  ['9',    'num:9',   'num'],  ['×',    'sym:×',   'op'],   [null,   null,      null],
  ['4',    'num:4',   'num'],  ['5',    'num:5',   'num'],  ['6',    'num:6',   'num'],  ['−',    'sym:−',   'op'],   [null,   null,      null],
  ['1',    'num:1',   'num'],  ['2',    'num:2',   'num'],  ['3',    'num:3',   'num'],  ['+',    'sym:+',   'op'],   ['=',    'eq',      'eq'],
  ['0',    'num:0',   'num'],  [null,   null,      null],   ['.',    'sym:.',   'num'],  ['%',    'sym:%',   'op'],   [null,   null,      null],
]

const cellStyles = {
  sci:   'bg-surface-100 text-ink hover:bg-surface-200 border-surface-300',
  clear: 'bg-red-600 text-white hover:bg-red-700 border-red-800',
  del:   'bg-surface-700 text-white hover:bg-surface-800 border-surface-900',
  paren: 'bg-surface-200 text-ink hover:bg-surface-300 border-surface-400',
  op:    'bg-primary-700 text-white hover:bg-primary-800 border-primary-900',
  num:   'bg-white text-ink hover:bg-surface-50 border-surface-200',
  eq:    'bg-lemon text-ink hover:bg-lemon-dark border-lemon-dark font-black text-lg',
}

// ── Main component ────────────────────────────────────────────────────────────
export function Calculator({ isOpen, onClose }) {
  const [expr, setExpr]    = useState('')
  const [isDeg, setIsDeg]  = useState(true)
  const [justEq, setJustEq] = useState(false)

  const result = expr ? calcEval(expr, isDeg) : null
  const displayResult = expr ? formatResult(result) : '0'

  const press = useCallback((action) => {
    if (!action) return

    if (action === 'ac') {
      setExpr(''); setJustEq(false); return
    }
    if (action === 'del') {
      setExpr((e) => e.slice(0, -1)); setJustEq(false); return
    }
    if (action === 'eq') {
      const val = calcEval(expr, isDeg)
      if (val !== null) { setExpr(String(val)); setJustEq(true) }
      return
    }
    if (action === 'sq') {
      if (justEq && expr) { setExpr(`(${expr})²`); setJustEq(false) }
      else { setExpr((e) => e + '²'); setJustEq(false) }
      return
    }

    // On new input right after equals, start fresh (unless operator)
    const isOp = action.startsWith('sym:') && '÷×−+'.includes(action.slice(4))
    if (justEq && !isOp) {
      setExpr(''); setJustEq(false)
    } else {
      setJustEq(false)
    }

    if (action.startsWith('num:')) {
      setExpr((e) => e + action.slice(4))
    } else if (action.startsWith('sym:')) {
      setExpr((e) => e + action.slice(4))
    } else if (action.startsWith('fn:')) {
      const fn = action.slice(3)
      setExpr((e) => e + `${fn}(`)
    }
  }, [expr, isDeg, justEq])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Calculator panel */}
      <div className="relative w-full max-w-sm border-t-2 border-x-2 border-ink bg-paper animate-slide-in-up rounded-t-retro overflow-hidden shadow-hard-xl">

        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-ink border-b-2 border-ink">
          <div className="flex items-center gap-2">
            <span className="text-lemon font-mono font-black text-sm tracking-widest">RECHNER</span>
            {/* DEG / RAD toggle */}
            <button
              onClick={() => setIsDeg((d) => !d)}
              className="ml-2 flex items-center border border-surface-600 rounded overflow-hidden text-xs font-mono font-bold"
            >
              <span className={cn('px-2 py-0.5 transition-colors', isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>DEG</span>
              <span className={cn('px-2 py-0.5 transition-colors', !isDeg ? 'bg-lemon text-ink' : 'text-surface-500')}>RAD</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-surface-400 hover:text-lemon text-lg leading-none font-mono transition-colors w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Display */}
        <div className="px-4 py-3 bg-green-950 border-b-2 border-ink min-h-[72px] flex flex-col justify-end">
          {/* Expression */}
          <p className="text-green-400/70 font-mono text-xs text-right truncate min-h-[16px]">
            {expr || ' '}
          </p>
          {/* Result */}
          <p className={cn(
            'font-mono font-bold text-right text-2xl leading-tight',
            result === null && expr ? 'text-red-400' : 'text-green-300',
          )}>
            {displayResult}
          </p>
        </div>

        {/* Button grid — 5 columns */}
        <div
          className="grid gap-px bg-ink p-px"
          style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
        >
          {ROWS.map(([label, action, style], i) => {
            if (!label) {
              return <div key={i} className="bg-paper" />
            }
            return (
              <button
                key={i}
                onClick={() => press(action)}
                className={cn(
                  'h-12 flex items-center justify-center font-mono font-semibold text-sm',
                  'transition-colors select-none tap-highlight-none',
                  'active:brightness-75',
                  cellStyles[style] ?? cellStyles.num,
                  // = button spans 1 row (we handle it via position)
                  action === 'eq' && 'row-span-2 h-full'
                )}
                style={action === 'eq' ? { gridRow: 'span 2' } : undefined}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Safe area spacer */}
        <div className="bg-paper" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </div>,
    document.body
  )
}
