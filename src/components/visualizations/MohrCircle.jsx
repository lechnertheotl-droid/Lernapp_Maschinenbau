import { useState } from 'react'
import { useCanvas } from './useCanvas'

function draw(ctx, w, h, { sigmaX, sigmaY, tauXY }) {
  const pad = { left: 50, right: 30, top: 30, bottom: 40 }
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

  const toX = (sig) => cx + (sig - 0) * scale  // Note: center of view at σ=0
  const toY = (tau) => cy - tau * scale

  // Grid
  ctx.strokeStyle = '#f1f5f9'
  ctx.lineWidth = 1
  const gridStep = Math.ceil(maxVal / 5 / 10) * 10
  for (let v = -maxVal; v <= maxVal; v += gridStep) {
    ctx.beginPath(); ctx.moveTo(toX(v), pad.top); ctx.lineTo(toX(v), h - pad.bottom); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(pad.left, toY(v)); ctx.lineTo(w - pad.right, toY(v)); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(pad.left, cy); ctx.lineTo(w - pad.right, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx, pad.top); ctx.lineTo(cx, h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#1a1a1a'
  ctx.font = 'bold 10px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('σ [MPa]', w / 2, h - 5)
  ctx.textAlign = 'left'
  ctx.fillText('τ [MPa]', cx + 5, pad.top + 12)

  // Circle
  ctx.beginPath()
  ctx.arc(toX(center), cy, radius * scale, 0, Math.PI * 2)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2.5
  ctx.stroke()

  // Fill circle lightly
  ctx.fillStyle = 'rgba(59, 130, 246, 0.08)'
  ctx.fill()

  // Principal stresses (σ1, σ2) on horizontal axis
  ctx.fillStyle = '#ef4444'
  ctx.beginPath(); ctx.arc(toX(sigma1), cy, 5, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(toX(sigma2), cy, 5, 0, Math.PI * 2); ctx.fill()

  ctx.font = 'bold 10px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`σ₁ = ${sigma1.toFixed(0)}`, toX(sigma1), cy + 16)
  ctx.fillText(`σ₂ = ${sigma2.toFixed(0)}`, toX(sigma2), cy + 16)

  // Center point
  ctx.fillStyle = '#10b981'
  ctx.beginPath(); ctx.arc(toX(center), cy, 4, 0, Math.PI * 2); ctx.fill()
  ctx.fillText(`M(${center.toFixed(0)}, 0)`, toX(center), cy - 10)

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

  ctx.font = '9px Inter, system-ui, sans-serif'
  ctx.fillStyle = '#8b5cf6'
  ctx.textAlign = 'left'
  ctx.fillText(`(σx, τxy)`, toX(sigmaX) + 8, toY(tauXY) - 4)

  // Max shear stress
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = '#f59e0b'
  ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(pad.left, toY(tauMax)); ctx.lineTo(w - pad.right, toY(tauMax)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(pad.left, toY(-tauMax)); ctx.lineTo(w - pad.right, toY(-tauMax)); ctx.stroke()
  ctx.setLineDash([])
  ctx.fillStyle = '#f59e0b'
  ctx.font = 'bold 9px Inter, system-ui, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText(`τ_max = ${tauMax.toFixed(0)}`, w - pad.right - 4, toY(tauMax) - 4)
}

export function MohrCircle() {
  const [sigmaX, setSigmaX] = useState(80)
  const [sigmaY, setSigmaY] = useState(20)
  const [tauXY, setTauXY]   = useState(40)

  const canvasRef = useCanvas(draw, { sigmaX, sigmaY, tauXY })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-56 rounded-retro bg-white border-2 border-ink shadow-hard-sm" />
      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700">σx = {sigmaX} MPa</span>
          <input type="range" min="-100" max="200" step="5" value={sigmaX} onChange={(e) => setSigmaX(+e.target.value)} className="accent-primary-700" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600">σy = {sigmaY} MPa</span>
          <input type="range" min="-100" max="200" step="5" value={sigmaY} onChange={(e) => setSigmaY(+e.target.value)} className="accent-red-600" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-purple-600">τxy = {tauXY} MPa</span>
          <input type="range" min="-100" max="100" step="5" value={tauXY} onChange={(e) => setTauXY(+e.target.value)} className="accent-purple-600" />
        </label>
      </div>
    </div>
  )
}
