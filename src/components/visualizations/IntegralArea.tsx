import { useState } from 'react'
import { useCanvas } from './useCanvas'

type FnKey = 'parabola' | 'linear' | 'sin' | 'cubic'

const FUNCTIONS: Record<FnKey, { label: string; f: (x: number) => number; latex: string }> = {
  parabola: { label: 'x²',        f: (x) => x * x,           latex: 'x^2' },
  linear:   { label: '2x',        f: (x) => 2 * x,           latex: '2x' },
  sin:      { label: 'sin(x)',    f: (x) => Math.sin(x),     latex: '\\sin(x)' },
  cubic:    { label: 'x³ − 3x',   f: (x) => x * x * x - 3 * x, latex: 'x^3 - 3x' },
}

// Numerical integral via Simpson (sufficient for demo)
function simpson(f: (x: number) => number, a: number, b: number, n = 200): number {
  if (a === b) return 0
  const h = (b - a) / n
  let s = f(a) + f(b)
  for (let i = 1; i < n; i++) {
    const x = a + i * h
    s += (i % 2 === 0 ? 2 : 4) * f(x)
  }
  return (h / 3) * s
}

interface DrawParams {
  fn: FnKey
  lowerBound: number
  upperBound: number
  xMin: number
  xMax: number
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawParams) {
  const { fn, lowerBound, upperBound, xMin, xMax } = p
  const fnData = FUNCTIONS[fn]
  const pad = { left: 40, right: 20, top: 20, bottom: 30 }
  const innerW = w - pad.left - pad.right
  const innerH = h - pad.top - pad.bottom

  // Auto y-range based on function over xMin..xMax
  let yLo = 0, yHi = 0
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin)
    const y = fnData.f(x)
    if (y < yLo) yLo = y
    if (y > yHi) yHi = y
  }
  if (yLo === yHi) { yLo -= 1; yHi += 1 }
  // Padding
  const yPad = (yHi - yLo) * 0.15
  yLo -= yPad; yHi += yPad

  const toPx = (x: number) => pad.left + ((x - xMin) / (xMax - xMin)) * innerW
  const toPy = (y: number) => pad.top + innerH - ((y - yLo) / (yHi - yLo)) * innerH

  // Grid
  ctx.strokeStyle = 'rgba(0,61,165,0.06)'
  ctx.lineWidth = 1
  for (let gx = 0; gx <= 10; gx++) {
    const x = pad.left + (gx / 10) * innerW
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, pad.top + innerH); ctx.stroke()
  }
  for (let gy = 0; gy <= 6; gy++) {
    const y = pad.top + (gy / 6) * innerH
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + innerW, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 1.5
  const zeroY = toPy(0)
  const zeroX = toPx(0)
  if (zeroY >= pad.top && zeroY <= pad.top + innerH) {
    ctx.beginPath(); ctx.moveTo(pad.left, zeroY); ctx.lineTo(pad.left + innerW, zeroY); ctx.stroke()
  }
  if (zeroX >= pad.left && zeroX <= pad.left + innerW) {
    ctx.beginPath(); ctx.moveTo(zeroX, pad.top); ctx.lineTo(zeroX, pad.top + innerH); ctx.stroke()
  }

  // Shaded area between lower and upper bound
  const [lo, hi] = lowerBound < upperBound ? [lowerBound, upperBound] : [upperBound, lowerBound]
  ctx.fillStyle = 'rgba(255, 214, 10, 0.5)'
  ctx.strokeStyle = 'rgba(229, 190, 0, 0.9)'
  ctx.beginPath()
  ctx.moveTo(toPx(lo), zeroY)
  const steps = 120
  for (let i = 0; i <= steps; i++) {
    const x = lo + (i / steps) * (hi - lo)
    ctx.lineTo(toPx(x), toPy(fnData.f(x)))
  }
  ctx.lineTo(toPx(hi), zeroY)
  ctx.closePath()
  ctx.fill()

  // Function curve
  ctx.strokeStyle = '#003DA5'
  ctx.lineWidth = 2.5
  ctx.beginPath()
  for (let i = 0; i <= 400; i++) {
    const x = xMin + (i / 400) * (xMax - xMin)
    const px = toPx(x), py = toPy(fnData.f(x))
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
  }
  ctx.stroke()

  // Bound markers
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 2
  ctx.setLineDash([4, 3])
  ctx.beginPath(); ctx.moveTo(toPx(lo), pad.top); ctx.lineTo(toPx(lo), pad.top + innerH); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(toPx(hi), pad.top); ctx.lineTo(toPx(hi), pad.top + innerH); ctx.stroke()
  ctx.setLineDash([])

  // Labels
  ctx.fillStyle = '#1a1a1a'
  ctx.font = 'bold 10px ui-monospace, monospace'
  ctx.textAlign = 'center'
  ctx.fillText(`a = ${lo.toFixed(1)}`, toPx(lo), pad.top + innerH + 14)
  ctx.fillText(`b = ${hi.toFixed(1)}`, toPx(hi), pad.top + innerH + 14)
}

interface Props {
  fnKey?: FnKey
  xMin?: number
  xMax?: number
  initialA?: number
  initialB?: number
}

export function IntegralArea({
  fnKey = 'parabola',
  xMin = -3,
  xMax = 3,
  initialA = 0,
  initialB = 2,
}: Props) {
  const [fn, setFn] = useState<FnKey>(fnKey)
  const [a, setA] = useState(initialA)
  const [b, setB] = useState(initialB)

  const [lo, hi] = a < b ? [a, b] : [b, a]
  const integral = simpson(FUNCTIONS[fn].f, lo, hi)
  const canvasRef = useCanvas(draw, { fn, lowerBound: a, upperBound: b, xMin, xMax })

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-64 rounded-retro bg-white dark:bg-surface-800 border-2 border-ink shadow-hard-sm"
      />

      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Funktion wählen">
        {(Object.keys(FUNCTIONS) as FnKey[]).map((key) => (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={fn === key}
            onClick={() => setFn(key)}
            className={`px-2.5 h-8 border-2 border-ink rounded-retro font-mono text-[11px] font-black retro-press ${
              fn === key
                ? 'bg-primary-700 text-white shadow-hard-sm dark:bg-primary-400 dark:text-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm'
            }`}
          >
            f(x) = {FUNCTIONS[key].label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600 dark:text-red-400">a = {a.toFixed(2)}</span>
          <input
            type="range" min={xMin} max={xMax} step={0.1}
            value={a} onChange={(e) => setA(+e.target.value)}
            className="accent-red-600"
            aria-label={`Untere Grenze, aktuell ${a.toFixed(2)}`}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600 dark:text-red-400">b = {b.toFixed(2)}</span>
          <input
            type="range" min={xMin} max={xMax} step={0.1}
            value={b} onChange={(e) => setB(+e.target.value)}
            className="accent-red-600"
            aria-label={`Obere Grenze, aktuell ${b.toFixed(2)}`}
          />
        </label>
      </div>

      <div className="border-2 border-ink bg-lemon-light rounded-retro shadow-hard-sm px-3 py-2">
        <p className="font-mono text-[10px] font-black text-ink uppercase tracking-widest mb-0.5">
          // Bestimmtes Integral
        </p>
        <p className="font-mono text-sm text-ink">
          ∫<sub className="num">{lo.toFixed(1)}</sub>
          <sup className="num">{hi.toFixed(1)}</sup> {FUNCTIONS[fn].label} dx ={' '}
          <span className="num font-black">{integral.toFixed(3)}</span>
        </p>
      </div>
    </div>
  )
}
