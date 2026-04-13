import { useState } from 'react'
import { useCanvas } from './useCanvas'

// Built-in functions available by name
const FN_MAP = {
  'x²':        { fn: (x) => x * x,              deriv: (x) => 2 * x,        color: '#3b82f6' },
  'x³':        { fn: (x) => x * x * x,           deriv: (x) => 3 * x * x,   color: '#8b5cf6' },
  'x³−3x':     { fn: (x) => x**3 - 3*x,          deriv: (x) => 3*x*x - 3,   color: '#3b82f6' },
  'sin(x)':    { fn: (x) => Math.sin(x),          deriv: (x) => Math.cos(x), color: '#3b82f6' },
  '2x²−4x+1':  { fn: (x) => 2*x*x - 4*x + 1,    deriv: (x) => 4*x - 4,     color: '#3b82f6' },
}

function drawDerivativeGraph(ctx, w, h, { fnName = 'x²', tangentX = 1, showTangent = true, showDerivative = true }) {
  const entry = FN_MAP[fnName] ?? FN_MAP['x²']
  const { fn, deriv, color } = entry

  const xRange = [-3, 3]
  const yRange = [-3, 5]
  const pad = { top: 20, right: 20, bottom: 30, left: 40 }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top  + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  // Grid
  ctx.strokeStyle = '#f1f5f9'
  ctx.lineWidth = 1
  for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
    ctx.beginPath(); ctx.moveTo(toX(x), pad.top); ctx.lineTo(toX(x), h - pad.bottom); ctx.stroke()
  }
  for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
    ctx.beginPath(); ctx.moveTo(pad.left, toY(y)); ctx.lineTo(w - pad.right, toY(y)); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(pad.left, toY(0)); ctx.lineTo(w - pad.right, toY(0)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(toX(0), pad.top); ctx.lineTo(toX(0), h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#94a3b8'; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'center'
  for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
    if (x === 0) continue
    ctx.fillText(x, toX(x), h - pad.bottom + 14)
  }

  // f(x) curve
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath()
  let started = false
  for (let i = 0; i <= pw; i++) {
    const x = xRange[0] + (i / pw) * (xRange[1] - xRange[0])
    const y = fn(x)
    if (!isFinite(y) || y > yRange[1] + 2 || y < yRange[0] - 2) { started = false; continue }
    if (!started) { ctx.moveTo(toX(x), toY(y)); started = true } else ctx.lineTo(toX(x), toY(y))
  }
  ctx.stroke()

  // f'(x) curve
  if (showDerivative) {
    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.setLineDash([5, 3]); ctx.beginPath()
    started = false
    for (let i = 0; i <= pw; i++) {
      const x = xRange[0] + (i / pw) * (xRange[1] - xRange[0])
      const y = deriv(x)
      if (!isFinite(y) || y > yRange[1] + 2 || y < yRange[0] - 2) { started = false; continue }
      if (!started) { ctx.moveTo(toX(x), toY(y)); started = true } else ctx.lineTo(toX(x), toY(y))
    }
    ctx.stroke(); ctx.setLineDash([])
  }

  // Tangent line
  if (showTangent) {
    const tx = tangentX
    const ty = fn(tx)
    const slope = deriv(tx)
    // Draw tangent: y - ty = slope · (x - tx)
    const x1 = xRange[0], x2 = xRange[1]
    const y1 = ty + slope * (x1 - tx)
    const y2 = ty + slope * (x2 - tx)
    ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(toX(x1), toY(y1)); ctx.lineTo(toX(x2), toY(y2)); ctx.stroke()

    // Point on curve
    ctx.beginPath(); ctx.arc(toX(tx), toY(ty), 5, 0, 2 * Math.PI)
    ctx.fillStyle = '#f59e0b'; ctx.fill()
    ctx.strokeStyle = 'white'; ctx.lineWidth = 1.5; ctx.stroke()

    // Slope label
    ctx.fillStyle = '#d97706'; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'left'
    ctx.fillText(`f'(${tx.toFixed(1)}) = ${slope.toFixed(2)}`, toX(tx) + 8, toY(ty) - 8)
  }

  // Legend
  ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'left'
  ctx.fillStyle = color; ctx.fillRect(pad.left, 4, 14, 3); ctx.fillText(`f(x) = ${fnName}`, pad.left + 18, 8)
  if (showDerivative) {
    ctx.fillStyle = '#ef4444'; ctx.fillRect(pad.left + 90, 4, 14, 3); ctx.fillText("f'(x)", pad.left + 108, 8)
  }
  if (showTangent) {
    ctx.fillStyle = '#f59e0b'; ctx.fillRect(pad.left + 140, 4, 14, 3); ctx.fillText('Tangente', pad.left + 158, 8)
  }
}

export function DerivativeGraph({ fnName = 'x²', showTangent = true, showDerivative = false, interactive = false }) {
  const [tangentX, setTangentX] = useState(1)
  const params = { fnName, tangentX, showTangent, showDerivative }
  const canvasRef = useCanvas(drawDerivativeGraph, params)

  const handleCanvasClick = (e) => {
    if (!interactive) return
    const canvas = canvasRef.current
    const rect   = canvas.getBoundingClientRect()
    const relX   = e.clientX - rect.left
    const xRange = [-3, 3]
    const pad    = 40
    const pw     = rect.width - pad - 20
    const x      = xRange[0] + (relX - pad) / pw * (xRange[1] - xRange[0])
    setTangentX(Math.max(-2.8, Math.min(2.8, x)))
  }

  return (
    <div className="flex flex-col gap-2">
      <canvas
        ref={canvasRef}
        className="w-full h-48 rounded-retro bg-white border-2 border-ink shadow-hard-sm cursor-crosshair"
        onClick={handleCanvasClick}
      />
      {interactive && showTangent && (
        <div className="px-1">
          <input
            type="range" min={-2.8} max={2.8} step={0.1}
            value={tangentX}
            onChange={(e) => setTangentX(Number(e.target.value))}
            className="w-full accent-lemon-dark"
          />
          <p className="text-center text-xs text-ink-soft mt-1 font-mono">
            Tangente bei x = {tangentX.toFixed(1)}
          </p>
        </div>
      )}
    </div>
  )
}
