import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

function draw(ctx, w, h, { process, T1, p1 }) {
  const style = getVizStyle(w)
  const pad = { ...style.margin, left: Math.max(55, style.margin.left), bottom: Math.max(48, style.margin.bottom) }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  // Ideal gas: pV = nRT, n=1, R=8.314
  const R = 8.314
  const V1 = R * T1 / (p1 * 1000) // m³ (p in kPa)

  const maxV = V1 * 4
  const maxP = p1 * 1.5

  const toX = (V) => pad.left + (V / maxV) * pw
  const toY = (p) => pad.top + ph - (p / maxP) * ph

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  for (let i = 1; i <= 4; i++) {
    const x = pad.left + (i / 5) * pw
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, h - pad.bottom); ctx.stroke()
  }
  for (let i = 1; i <= 4; i++) {
    const y = pad.top + (i / 5) * ph
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(pad.left, pad.top)
  ctx.lineTo(pad.left, h - pad.bottom)
  ctx.lineTo(w - pad.right, h - pad.bottom)
  ctx.stroke()

  // Labels
  ctx.font = style.fontLabel
  drawLabel(ctx, 'V [m³]', w / 2, h - 6, {
    align: 'center', baseline: 'bottom', color: style.colors.text, bg: true, style,
  })
  ctx.save()
  ctx.translate(16, h / 2)
  ctx.rotate(-Math.PI / 2)
  drawLabel(ctx, 'p [kPa]', 0, 0, {
    align: 'center', baseline: 'alphabetic', color: style.colors.text, bg: true, style,
  })
  ctx.restore()

  const steps = 200
  const colors = {
    isotherm: '#3b82f6',
    isobar: '#ef4444',
    isochor: '#10b981',
    adiabat: '#f59e0b',
  }

  // Draw process curve
  ctx.beginPath()
  const points = []

  for (let i = 0; i <= steps; i++) {
    const frac = i / steps
    let V, p

    if (process === 'isotherm') {
      // pV = const → p = p1*V1/V
      V = V1 + frac * (V1 * 3)
      p = (p1 * V1) / V
    } else if (process === 'isobar') {
      // p = const, V changes
      V = V1 + frac * (V1 * 2)
      p = p1
    } else if (process === 'isochor') {
      // V = const, p changes
      V = V1
      p = p1 * (1 - frac * 0.6)
    } else if (process === 'adiabat') {
      // pV^γ = const, γ = 1.4 (diatomic)
      const gamma = 1.4
      V = V1 + frac * (V1 * 3)
      p = p1 * Math.pow(V1 / V, gamma)
    }

    points.push({ V, p })
    const px = toX(V)
    const py = toY(p)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }

  ctx.strokeStyle = colors[process]
  ctx.lineWidth = 3
  ctx.stroke()

  // Shade area under curve (work)
  ctx.beginPath()
  ctx.moveTo(toX(points[0].V), toY(0))
  points.forEach((pt) => ctx.lineTo(toX(pt.V), toY(pt.p)))
  ctx.lineTo(toX(points[points.length - 1].V), toY(0))
  ctx.closePath()
  ctx.fillStyle = colors[process] + '15'
  ctx.fill()

  // Start/end points
  ctx.fillStyle = style.colors.text
  ctx.beginPath(); ctx.arc(toX(points[0].V), toY(points[0].p), 5, 0, Math.PI * 2); ctx.fill()
  const last = points[points.length - 1]
  ctx.beginPath(); ctx.arc(toX(last.V), toY(last.p), 5, 0, Math.PI * 2); ctx.fill()

  // State labels
  ctx.font = style.fontAnnotation
  drawLabel(ctx, '1', toX(points[0].V) + 10, toY(points[0].p) - 8, {
    align: 'left', baseline: 'bottom', color: style.colors.text, bg: true, style,
  })
  drawLabel(ctx, '2', toX(last.V) + 10, toY(last.p) - 8, {
    align: 'left', baseline: 'bottom', color: style.colors.text, bg: true, style,
  })

  // Process name
  const processNames = {
    isotherm: 'Isotherm (T = const)',
    isobar: 'Isobar (p = const)',
    isochor: 'Isochor (V = const)',
    adiabat: 'Adiabatisch (Q = 0)',
  }
  drawLabel(ctx, processNames[process], w - pad.right - 6, pad.top + 18, {
    align: 'right', baseline: 'alphabetic', color: colors[process], bg: true, style,
  })

  // Work annotation
  ctx.font = style.fontTick
  const workText = process !== 'isochor'
    ? 'W = ∫ p dV (schraffierte Fläche)'
    : 'W = 0 (keine Volumenänderung)'
  drawLabel(ctx, workText, w / 2, h - pad.bottom + 30, {
    align: 'center', baseline: 'top', color: style.colors.textMuted, bg: true, style,
  })
}

const PROCESSES = [
  { id: 'isotherm', label: 'Isotherm' },
  { id: 'isobar', label: 'Isobar' },
  { id: 'isochor', label: 'Isochor' },
  { id: 'adiabat', label: 'Adiabat' },
]

export function PVDiagram() {
  const [process, setProcess] = useState('isotherm')
  const [T1, setT1] = useState(300)
  const [p1, setP1] = useState(200)

  const canvasRef = useCanvas(draw, { process, T1, p1 })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-72 sm:h-56 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm" />
      <div className="flex gap-2 flex-wrap justify-center">
        {PROCESSES.map((p) => (
          <button
            key={p.id}
            onClick={() => setProcess(p.id)}
            className={`px-3 py-1.5 rounded-retro border-2 font-mono text-[10px] font-bold retro-press ${process === p.id ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white dark:bg-surface-800 border-ink dark:border-surface-500 text-ink-soft dark:text-surface-300 shadow-hard-sm'}`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-ink dark:text-paper">T₁ = {T1} K</span>
          <input type="range" min="200" max="500" step="10" value={T1} onChange={(e) => setT1(+e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-ink dark:text-paper">p₁ = {p1} kPa</span>
          <input type="range" min="50" max="500" step="10" value={p1} onChange={(e) => setP1(+e.target.value)} />
        </label>
      </div>
    </div>
  )
}
