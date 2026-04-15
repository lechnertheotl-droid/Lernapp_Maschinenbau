import { useState } from 'react'
import { useCanvas } from './useCanvas'

type FnKey = 'sin' | 'cos' | 'exp' | 'ln1p'

interface FnDef {
  label: string
  f: (x: number) => number
  /** Taylor-Koeffizient a_n um 0: f^(n)(0)/n! */
  coeff: (n: number) => number
  xMin: number
  xMax: number
  yRange: [number, number]
}

const FUNCS: Record<FnKey, FnDef> = {
  sin: {
    label: 'sin(x)',
    f: Math.sin,
    coeff: (n) => {
      if (n % 2 === 0) return 0
      const k = (n - 1) / 2
      const sign = k % 2 === 0 ? 1 : -1
      return sign / factorial(n)
    },
    xMin: -2 * Math.PI, xMax: 2 * Math.PI,
    yRange: [-2, 2],
  },
  cos: {
    label: 'cos(x)',
    f: Math.cos,
    coeff: (n) => {
      if (n % 2 !== 0) return 0
      const k = n / 2
      const sign = k % 2 === 0 ? 1 : -1
      return sign / factorial(n)
    },
    xMin: -2 * Math.PI, xMax: 2 * Math.PI,
    yRange: [-2, 2],
  },
  exp: {
    label: 'eˣ',
    f: Math.exp,
    coeff: (n) => 1 / factorial(n),
    xMin: -2, xMax: 3,
    yRange: [-1, 15],
  },
  ln1p: {
    label: 'ln(1+x)',
    f: (x) => Math.log(1 + x),
    coeff: (n) => (n === 0 ? 0 : ((n % 2 === 1 ? 1 : -1)) / n),
    xMin: -0.9, xMax: 1.5,
    yRange: [-3, 1],
  },
}

function factorial(n: number): number {
  let result = 1
  for (let i = 2; i <= n; i++) result *= i
  return result
}

function taylorAt(fnKey: FnKey, order: number, x: number): number {
  const def = FUNCS[fnKey]
  let sum = 0
  for (let n = 0; n <= order; n++) {
    sum += def.coeff(n) * Math.pow(x, n)
  }
  return sum
}

interface DrawParams {
  fnKey: FnKey
  order: number
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawParams) {
  const def = FUNCS[p.fnKey]
  const pad = { left: 35, right: 15, top: 15, bottom: 28 }
  const innerW = w - pad.left - pad.right
  const innerH = h - pad.top - pad.bottom
  const [yLo, yHi] = def.yRange

  const toPx = (x: number) => pad.left + ((x - def.xMin) / (def.xMax - def.xMin)) * innerW
  const toPy = (y: number) => pad.top + innerH - ((y - yLo) / (yHi - yLo)) * innerH

  // Grid
  ctx.strokeStyle = 'rgba(0,61,165,0.06)'
  ctx.lineWidth = 1
  for (let i = 0; i <= 10; i++) {
    const x = pad.left + (i / 10) * innerW
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, pad.top + innerH); ctx.stroke()
  }
  for (let j = 0; j <= 6; j++) {
    const y = pad.top + (j / 6) * innerH
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + innerW, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 1.5
  const y0 = toPy(0)
  const x0 = toPx(0)
  if (y0 >= pad.top && y0 <= pad.top + innerH) {
    ctx.beginPath(); ctx.moveTo(pad.left, y0); ctx.lineTo(pad.left + innerW, y0); ctx.stroke()
  }
  if (x0 >= pad.left && x0 <= pad.left + innerW) {
    ctx.beginPath(); ctx.moveTo(x0, pad.top); ctx.lineTo(x0, pad.top + innerH); ctx.stroke()
  }

  // Taylor approximation (dashed orange)
  ctx.strokeStyle = '#f97316'
  ctx.lineWidth = 2.5
  ctx.setLineDash([6, 4])
  ctx.beginPath()
  const N = 240
  let started = false
  for (let i = 0; i <= N; i++) {
    const x = def.xMin + (i / N) * (def.xMax - def.xMin)
    const y = taylorAt(p.fnKey, p.order, x)
    if (y < yLo - 5 || y > yHi + 5) { started = false; continue }
    const px = toPx(x), py = toPy(y)
    if (!started) { ctx.moveTo(px, py); started = true }
    else ctx.lineTo(px, py)
  }
  ctx.stroke()
  ctx.setLineDash([])

  // Original function (solid blue, on top)
  ctx.strokeStyle = '#003DA5'
  ctx.lineWidth = 2.5
  ctx.beginPath()
  started = false
  for (let i = 0; i <= N; i++) {
    const x = def.xMin + (i / N) * (def.xMax - def.xMin)
    const y = def.f(x)
    if (y < yLo - 5 || y > yHi + 5) { started = false; continue }
    const px = toPx(x), py = toPy(y)
    if (!started) { ctx.moveTo(px, py); started = true }
    else ctx.lineTo(px, py)
  }
  ctx.stroke()

  // Entwicklungspunkt marker (x=0)
  ctx.fillStyle = '#16a34a'
  ctx.beginPath(); ctx.arc(x0, toPy(def.f(0)), 5, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 1.5; ctx.stroke()

  // Labels
  ctx.fillStyle = '#003DA5'
  ctx.font = 'bold 11px ui-monospace, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(`f(x) = ${def.label}`, pad.left + 4, pad.top + 14)
  ctx.fillStyle = '#f97316'
  ctx.fillText(`Taylor-Polynom Grad n = ${p.order}`, pad.left + 4, pad.top + 28)
}

interface Props {
  initialFn?: FnKey
  initialOrder?: number
  maxOrder?: number
}

export function TaylorApproximation({
  initialFn = 'sin',
  initialOrder = 3,
  maxOrder = 15,
}: Props) {
  const [fnKey, setFnKey] = useState<FnKey>(initialFn)
  const [order, setOrder] = useState(initialOrder)
  const canvasRef = useCanvas(draw, { fnKey, order })

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-64 rounded-retro bg-white dark:bg-surface-800 border-2 border-ink shadow-hard-sm"
      />

      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Funktion">
        {(Object.keys(FUNCS) as FnKey[]).map((key) => (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={fnKey === key}
            onClick={() => setFnKey(key)}
            className={`px-2.5 h-8 border-2 border-ink rounded-retro font-mono text-[11px] font-black retro-press ${
              fnKey === key
                ? 'bg-primary-700 text-white shadow-hard-sm dark:bg-primary-400 dark:text-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm'
            }`}
          >
            {FUNCS[key].label}
          </button>
        ))}
      </div>

      <label className="flex flex-col gap-1">
        <span className="font-mono text-[10px] font-bold text-orange-600 dark:text-orange-400">
          Taylor-Grad n = {order}
        </span>
        <input
          type="range" min={0} max={maxOrder} step={1}
          value={order} onChange={(e) => setOrder(+e.target.value)}
          className="accent-orange-500"
          aria-label={`Taylor-Grad, aktuell ${order}`}
        />
      </label>

      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 text-center">
        Mit wachsendem n passt sich das Taylor-Polynom (gestrichelt) in einem immer größeren Intervall an f(x) an.
      </p>
    </div>
  )
}
