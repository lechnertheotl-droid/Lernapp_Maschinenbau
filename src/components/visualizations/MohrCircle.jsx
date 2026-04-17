import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel, clampInside } from './vizStyle'

function draw(ctx, w, h, { sigmaX, sigmaY, tauXY }) {
  const style = getVizStyle(w)
  const pad = { ...style.margin, left: Math.max(style.margin.left, 50) }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  // Mohr's circle parameters
  const center = (sigmaX + sigmaY) / 2
  const radius = Math.sqrt(((sigmaX - sigmaY) / 2) ** 2 + tauXY ** 2)
  const sigma1 = center + radius
  const sigma2 = center - radius
  const tauMax = radius

  // Scale to fit
  const maxVal = Math.max(Math.abs(sigma1), Math.abs(sigma2), Math.abs(tauMax), 50) * 1.3
  const scaleX = pw / (2 * maxVal)
  const scaleY = ph / (2 * maxVal)
  const scale = Math.min(scaleX, scaleY)

  const cx = pad.left + pw / 2
  const cy = pad.top + ph / 2

  const toX = (sig) => cx + (sig - 0) * scale
  const toY = (tau) => cy - tau * scale

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  const gridStep = Math.ceil(maxVal / 5 / 10) * 10
  for (let v = -maxVal; v <= maxVal; v += gridStep) {
    ctx.beginPath(); ctx.moveTo(toX(v), pad.top); ctx.lineTo(toX(v), h - pad.bottom); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(pad.left, toY(v)); ctx.lineTo(w - pad.right, toY(v)); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(pad.left, cy); ctx.lineTo(w - pad.right, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx, pad.top); ctx.lineTo(cx, h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.font = style.fontLabel
  drawLabel(ctx, 'σ [MPa]', w / 2, h - 6, {
    align: 'center', baseline: 'bottom', color: style.colors.text, style,
  })
  drawLabel(ctx, 'τ [MPa]', cx + 8, pad.top + 4, {
    align: 'left', baseline: 'top', color: style.colors.text, style,
  })

  // Circle
  ctx.beginPath()
  ctx.arc(toX(center), cy, radius * scale, 0, Math.PI * 2)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2.5
  ctx.stroke()

  // Fill circle lightly
  ctx.fillStyle = 'rgba(59, 130, 246, 0.08)'
  ctx.fill()

  // Principal stresses (σ1, σ2)
  ctx.fillStyle = '#ef4444'
  ctx.beginPath(); ctx.arc(toX(sigma1), cy, 5, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(toX(sigma2), cy, 5, 0, Math.PI * 2); ctx.fill()

  ctx.font = style.fontAnnotation
  const s1Anchor = clampInside(toX(sigma1), cy + 18, w, h, 6)
  const s2Anchor = clampInside(toX(sigma2), cy + 18, w, h, 6)
  drawLabel(ctx, `σ₁ = ${sigma1.toFixed(0)}`, s1Anchor.x, s1Anchor.y, {
    align: 'center', baseline: 'top', color: '#ef4444', bg: true, style,
  })
  drawLabel(ctx, `σ₂ = ${sigma2.toFixed(0)}`, s2Anchor.x, s2Anchor.y, {
    align: 'center', baseline: 'top', color: '#ef4444', bg: true, style,
  })

  // Center point
  ctx.fillStyle = '#10b981'
  ctx.beginPath(); ctx.arc(toX(center), cy, 4, 0, Math.PI * 2); ctx.fill()
  const mAnchor = clampInside(toX(center), cy - 12, w, h, 6)
  drawLabel(ctx, `M(${center.toFixed(0)}, 0)`, mAnchor.x, mAnchor.y, {
    align: 'center', baseline: 'bottom', color: '#10b981', bg: true, style,
  })

  // Current stress state points (σx, τxy) and (σy, -τxy)
  ctx.fillStyle = '#8b5cf6'
  ctx.beginPath(); ctx.arc(toX(sigmaX), toY(tauXY), 5, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(toX(sigmaY), toY(-tauXY), 5, 0, Math.PI * 2); ctx.fill()

  // Connecting line (diameter)
  ctx.setLineDash([4, 3])
  ctx.strokeStyle = '#8b5cf6'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(toX(sigmaX), toY(tauXY))
  ctx.lineTo(toX(sigmaY), toY(-tauXY))
  ctx.stroke()
  ctx.setLineDash([])

  ctx.font = style.fontTick
  const stressAnchor = clampInside(toX(sigmaX) + 10, toY(tauXY) - 6, w, h, 6)
  drawLabel(ctx, `(σx, τxy)`, stressAnchor.x, stressAnchor.y, {
    align: 'left', baseline: 'bottom', color: '#8b5cf6', bg: true, style,
  })

  // Max shear stress
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = '#f59e0b'
  ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(pad.left, toY(tauMax)); ctx.lineTo(w - pad.right, toY(tauMax)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(pad.left, toY(-tauMax)); ctx.lineTo(w - pad.right, toY(-tauMax)); ctx.stroke()
  ctx.setLineDash([])
  ctx.font = style.fontAnnotation
  const tauAnchor = clampInside(w - pad.right - 6, toY(tauMax) - 6, w, h, 6)
  drawLabel(ctx, `τ_max = ${tauMax.toFixed(0)}`, tauAnchor.x, tauAnchor.y, {
    align: 'right', baseline: 'bottom', color: '#f59e0b', bg: true, style,
  })
}

export function MohrCircle() {
  const [sigmaX, setSigmaX] = useState(80)
  const [sigmaY, setSigmaY] = useState(20)
  const [tauXY, setTauXY]   = useState(40)

  const canvasRef = useCanvas(draw, { sigmaX, sigmaY, tauXY })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-72 sm:h-64 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm" />
      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300">σx = {sigmaX} MPa</span>
          <input type="range" min="-100" max="200" step="5" value={sigmaX} onChange={(e) => setSigmaX(+e.target.value)} className="accent-primary-700" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600 dark:text-red-400">σy = {sigmaY} MPa</span>
          <input type="range" min="-100" max="200" step="5" value={sigmaY} onChange={(e) => setSigmaY(+e.target.value)} className="accent-red-600" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-purple-600 dark:text-purple-400">τxy = {tauXY} MPa</span>
          <input type="range" min="-100" max="100" step="5" value={tauXY} onChange={(e) => setTauXY(+e.target.value)} className="accent-purple-600" />
        </label>
      </div>
    </div>
  )
}
