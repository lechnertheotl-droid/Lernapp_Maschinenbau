import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

function drawArrow(ctx, x1, y1, x2, y2, color, lineWidth = 2.5) {
  const headLen = 12
  const angle = Math.atan2(y2 - y1, x2 - x1)
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = lineWidth
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6))
  ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6))
  ctx.closePath()
  ctx.fill()
}

function draw(ctx, w, h, { f1, angle1, f2, angle2 }) {
  const style = getVizStyle(w)
  const cx = w / 2
  const cy = h * 0.6
  const scale = Math.min(w, h) / 6

  const a1 = (angle1 * Math.PI) / 180
  const a2 = (angle2 * Math.PI) / 180

  const f1x = f1 * Math.cos(a1) * scale
  const f1y = -f1 * Math.sin(a1) * scale
  const f2x = f2 * Math.cos(a2) * scale
  const f2y = -f2 * Math.sin(a2) * scale

  // Parallelogram dashed lines
  ctx.setLineDash([5, 4])
  ctx.strokeStyle = '#94a3b8'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(cx + f1x, cy + f1y)
  ctx.lineTo(cx + f1x + f2x, cy + f1y + f2y)
  ctx.lineTo(cx + f2x, cy + f2y)
  ctx.stroke()
  ctx.setLineDash([])

  // F1 arrow (blue)
  drawArrow(ctx, cx, cy, cx + f1x, cy + f1y, '#3b82f6', 3)
  // F2 arrow (red)
  drawArrow(ctx, cx, cy, cx + f2x, cy + f2y, '#ef4444', 3)
  // Resultant (green)
  const rx = f1x + f2x
  const ry = f1y + f2y
  drawArrow(ctx, cx, cy, cx + rx, cy + ry, '#10b981', 3.5)

  // Labels
  ctx.font = style.fontAnnotation
  const rMag = Math.sqrt(rx * rx + ry * ry) / scale
  drawLabel(ctx, `F₁ = ${f1.toFixed(1)} N`, cx + f1x * 0.5 + 10, cy + f1y * 0.5 - 8, {
    align: 'left', baseline: 'bottom', color: '#3b82f6', bg: true, style,
  })
  drawLabel(ctx, `F₂ = ${f2.toFixed(1)} N`, cx + f2x * 0.5 + 10, cy + f2y * 0.5 - 8, {
    align: 'left', baseline: 'bottom', color: '#ef4444', bg: true, style,
  })
  drawLabel(ctx, `R = ${rMag.toFixed(1)} N`, cx + rx * 0.5 + 10, cy + ry * 0.5 - 8, {
    align: 'left', baseline: 'bottom', color: '#10b981', bg: true, style,
  })

  // Origin dot
  ctx.beginPath()
  ctx.arc(cx, cy, 4, 0, Math.PI * 2)
  ctx.fillStyle = style.colors.text
  ctx.fill()

  // Angle arc for F1
  ctx.beginPath()
  ctx.arc(cx, cy, 30, -a1, 0)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 1.5
  ctx.stroke()
  ctx.font = style.fontTick
  drawLabel(ctx, `${angle1}°`, cx + 36, cy - 4, {
    align: 'left', baseline: 'bottom', color: '#3b82f6', bg: true, style,
  })
}

export function ForceParallelogram() {
  const [f1, setF1] = useState(2)
  const [angle1, setAngle1] = useState(30)
  const [f2, setF2] = useState(1.5)
  const [angle2, setAngle2] = useState(120)

  const canvasRef = useCanvas(draw, { f1, angle1, f2, angle2 })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-64 sm:h-52 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm" />
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700">F₁ = {f1.toFixed(1)} N</span>
          <input type="range" min="0.5" max="3" step="0.1" value={f1} onChange={(e) => setF1(+e.target.value)} className="accent-primary-700" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700">α₁ = {angle1}°</span>
          <input type="range" min="0" max="180" step="5" value={angle1} onChange={(e) => setAngle1(+e.target.value)} className="accent-primary-700" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600">F₂ = {f2.toFixed(1)} N</span>
          <input type="range" min="0.5" max="3" step="0.1" value={f2} onChange={(e) => setF2(+e.target.value)} className="accent-red-600" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600">α₂ = {angle2}°</span>
          <input type="range" min="0" max="180" step="5" value={angle2} onChange={(e) => setAngle2(+e.target.value)} className="accent-red-600" />
        </label>
      </div>
    </div>
  )
}
