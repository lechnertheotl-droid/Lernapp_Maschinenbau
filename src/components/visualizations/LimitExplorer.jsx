import { useMemo, useState } from 'react'
import { useCanvas } from './useCanvas'

const FUNCTIONS = {
  removable: {
    label: '(x² − 1) / (x − 1)',
    target: 1,
    limit: 2,
    fn: (x) => (x * x - 1) / (x - 1),
    yRange: [-1, 4],
  },
  sinxoverx: {
    label: 'sin(x) / x',
    target: 0,
    limit: 1,
    fn: (x) => Math.sin(x) / x,
    yRange: [-0.5, 1.5],
  },
  oneoverx: {
    label: '1 / x',
    target: 0,
    limit: null,
    fn: (x) => 1 / x,
    yRange: [-6, 6],
  },
}

function nice(value) {
  if (value === null) return 'existiert nicht'
  if (!Number.isFinite(value)) return 'undef.'
  if (Math.abs(value) < 0.0005) return '0.000'
  return value.toFixed(3)
}

function drawLimitExplorer(ctx, w, h, { functionKey, epsilon }) {
  const entry = FUNCTIONS[functionKey] ?? FUNCTIONS.removable
  const { fn, target, limit, yRange } = entry
  const pad = { top: 22, right: 18, bottom: 34, left: 42 }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom
  const xRange = [target - 3, target + 3]
  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // Grid
  ctx.strokeStyle = 'rgba(0,61,165,0.08)'
  ctx.lineWidth = 1
  for (let i = 0; i <= 6; i++) {
    const x = pad.left + (i / 6) * pw
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, h - pad.bottom); ctx.stroke()
  }
  for (let i = 0; i <= 6; i++) {
    const y = pad.top + (i / 6) * ph
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke()
  }

  // Epsilon band
  if (limit !== null) {
    const top = toY(limit + epsilon)
    const bottom = toY(limit - epsilon)
    ctx.fillStyle = 'rgba(255,214,10,0.34)'
    ctx.fillRect(pad.left, top, pw, bottom - top)
    ctx.strokeStyle = '#E5BE00'
    ctx.lineWidth = 1.5
    ctx.setLineDash([5, 4])
    ctx.beginPath(); ctx.moveTo(pad.left, toY(limit)); ctx.lineTo(w - pad.right, toY(limit)); ctx.stroke()
    ctx.setLineDash([])
  }

  // Axes
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  if (yRange[0] <= 0 && yRange[1] >= 0) {
    ctx.beginPath(); ctx.moveTo(pad.left, toY(0)); ctx.lineTo(w - pad.right, toY(0)); ctx.stroke()
  }
  if (xRange[0] <= 0 && xRange[1] >= 0) {
    ctx.beginPath(); ctx.moveTo(toX(0), pad.top); ctx.lineTo(toX(0), h - pad.bottom); ctx.stroke()
  }

  // Target x line
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 2
  ctx.setLineDash([6, 4])
  ctx.beginPath(); ctx.moveTo(toX(target), pad.top); ctx.lineTo(toX(target), h - pad.bottom); ctx.stroke()
  ctx.setLineDash([])

  // Function curve
  ctx.strokeStyle = '#003DA5'
  ctx.lineWidth = 3
  ctx.beginPath()
  let started = false
  for (let i = 0; i <= pw; i++) {
    const x = xRange[0] + (i / pw) * (xRange[1] - xRange[0])
    if (Math.abs(x - target) < 0.015) { started = false; continue }
    const y = fn(x)
    if (!Number.isFinite(y) || y < yRange[0] - 4 || y > yRange[1] + 4) { started = false; continue }
    const sx = toX(x)
    const sy = toY(y)
    if (!started) { ctx.moveTo(sx, sy); started = true } else ctx.lineTo(sx, sy)
  }
  ctx.stroke()

  // Open point at target/limit
  if (limit !== null) {
    ctx.beginPath(); ctx.arc(toX(target), toY(limit), 6, 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'; ctx.fill()
    ctx.strokeStyle = '#003DA5'; ctx.lineWidth = 3; ctx.stroke()
  }

  // Approach markers
  const leftX = target - epsilon
  const rightX = target + epsilon
  const markers = [[leftX, fn(leftX), '#16a34a'], [rightX, fn(rightX), '#f97316']]
  markers.forEach(([x, y, color]) => {
    if (!Number.isFinite(y) || y < yRange[0] || y > yRange[1]) return
    ctx.beginPath(); ctx.arc(toX(x), toY(y), 5, 0, Math.PI * 2)
    ctx.fillStyle = color; ctx.fill()
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke()
  })

  // Labels
  ctx.fillStyle = '#1a1a1a'
  ctx.font = '900 12px ui-monospace, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(`f(x) = ${entry.label}`, pad.left, 16)
  ctx.font = '800 10px ui-monospace, monospace'
  ctx.fillStyle = '#555555'
  ctx.fillText(`x → ${target}, ε = ${epsilon.toFixed(2)}, Grenzwert: ${nice(limit)}`, pad.left, h - 9)
}

export function LimitExplorer({ initialFunction = 'removable', initialEpsilon = 0.8 }) {
  const [functionKey, setFunctionKey] = useState(initialFunction)
  const [epsilon, setEpsilon] = useState(initialEpsilon)
  const params = useMemo(() => ({ functionKey, epsilon }), [functionKey, epsilon])
  const canvasRef = useCanvas(drawLimitExplorer, params)
  const entry = FUNCTIONS[functionKey] ?? FUNCTIONS.removable
  const leftValue = entry.fn(entry.target - epsilon)
  const rightValue = entry.fn(entry.target + epsilon)

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-56 rounded-retro bg-white border-2 border-ink shadow-hard-sm" />
      <div className="bg-white border-2 border-ink rounded-retro shadow-hard-sm p-3 flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-ink-soft">Funktion</span>
          <select value={functionKey} onChange={(event) => setFunctionKey(event.target.value)} className="h-10 border-2 border-ink rounded-retro bg-paper px-3 font-mono text-xs font-black text-ink">
            {Object.entries(FUNCTIONS).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="flex justify-between font-mono text-[10px] font-black uppercase tracking-wider text-ink-soft">
            <span>Abstand ε</span>
            <span className="text-primary-700">{epsilon.toFixed(2)}</span>
          </span>
          <input type="range" min={0.05} max={1.5} step={0.05} value={epsilon} onChange={(event) => setEpsilon(Number(event.target.value))} className="w-full accent-lemon-dark" />
        </label>
        <div className="grid grid-cols-2 gap-2 font-mono text-[11px] font-black text-ink">
          <div className="bg-green-50 border border-green-700 rounded-retro px-2 py-1">links: {nice(leftValue)}</div>
          <div className="bg-orange-50 border border-orange-700 rounded-retro px-2 py-1">rechts: {nice(rightValue)}</div>
        </div>
      </div>
    </div>
  )
}
