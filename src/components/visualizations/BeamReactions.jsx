import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

function draw(ctx, w, h, { forcePos, forceN, beamL }) {
  const style = getVizStyle(w)
  const pad = { left: Math.max(40, style.margin.left), right: Math.max(40, style.margin.right), top: 50, bottom: 80 }
  const bw = w - pad.left - pad.right
  const by = h * 0.4 // beam y

  const toX = (pos) => pad.left + (pos / beamL) * bw

  // Ground hatch
  ctx.strokeStyle = style.colors.textMuted
  ctx.lineWidth = 1
  for (let i = 0; i < bw + 20; i += 8) {
    ctx.beginPath()
    ctx.moveTo(pad.left - 10 + i, by + 30)
    ctx.lineTo(pad.left - 18 + i, by + 40)
    ctx.stroke()
  }

  // Beam
  ctx.fillStyle = '#e2e8f0'
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.rect(pad.left, by - 8, bw, 16)
  ctx.fill()
  ctx.stroke()

  // Support A (pin — triangle at x=0)
  const ax = toX(0)
  ctx.fillStyle = '#3b82f6'
  ctx.beginPath()
  ctx.moveTo(ax, by + 8)
  ctx.lineTo(ax - 12, by + 28)
  ctx.lineTo(ax + 12, by + 28)
  ctx.closePath()
  ctx.fill()
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.stroke()

  // Support B (roller at x=L)
  const bx = toX(beamL)
  ctx.fillStyle = '#ef4444'
  ctx.beginPath()
  ctx.moveTo(bx, by + 8)
  ctx.lineTo(bx - 10, by + 22)
  ctx.lineTo(bx + 10, by + 22)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  // roller circle
  ctx.beginPath()
  ctx.arc(bx, by + 27, 5, 0, Math.PI * 2)
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.stroke()

  // Applied force (downward arrow)
  const fx = toX(forcePos)
  ctx.strokeStyle = '#dc2626'
  ctx.fillStyle = '#dc2626'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(fx, by - 60)
  ctx.lineTo(fx, by - 12)
  ctx.stroke()
  // arrowhead
  ctx.beginPath()
  ctx.moveTo(fx, by - 8)
  ctx.lineTo(fx - 7, by - 18)
  ctx.lineTo(fx + 7, by - 18)
  ctx.closePath()
  ctx.fill()
  // force label
  ctx.font = style.fontAnnotation
  drawLabel(ctx, `F = ${forceN} N`, fx, by - 66, {
    align: 'center', baseline: 'bottom', color: '#dc2626', bg: true, style,
  })

  // Calculate reactions (static equilibrium)
  const Rb = (forceN * forcePos) / beamL
  const Ra = forceN - Rb

  // Reaction arrows (upward)
  const arrowH = Math.min(35, Math.max(15, Ra / forceN * 35))
  // Ra
  ctx.strokeStyle = '#3b82f6'
  ctx.fillStyle = '#3b82f6'
  ctx.lineWidth = 2.5
  ctx.beginPath()
  ctx.moveTo(ax, by + 44)
  ctx.lineTo(ax, by + 44 + arrowH)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(ax, by + 40)
  ctx.lineTo(ax - 6, by + 50)
  ctx.lineTo(ax + 6, by + 50)
  ctx.closePath()
  ctx.fill()
  ctx.font = style.fontAnnotation
  drawLabel(ctx, `Rₐ = ${Ra.toFixed(1)} N`, ax, by + 56 + arrowH, {
    align: 'center', baseline: 'top', color: '#3b82f6', bg: true, style,
  })

  // Rb
  const arrowH2 = Math.min(35, Math.max(15, Rb / forceN * 35))
  ctx.strokeStyle = '#ef4444'
  ctx.fillStyle = '#ef4444'
  ctx.lineWidth = 2.5
  ctx.beginPath()
  ctx.moveTo(bx, by + 44)
  ctx.lineTo(bx, by + 44 + arrowH2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(bx, by + 40)
  ctx.lineTo(bx - 6, by + 50)
  ctx.lineTo(bx + 6, by + 50)
  ctx.closePath()
  ctx.fill()
  drawLabel(ctx, `R_B = ${Rb.toFixed(1)} N`, bx, by + 56 + arrowH2, {
    align: 'center', baseline: 'top', color: '#ef4444', bg: true, style,
  })

  // Dimension line
  ctx.strokeStyle = style.colors.textMuted
  ctx.lineWidth = 1
  ctx.setLineDash([3, 3])
  ctx.beginPath()
  ctx.moveTo(ax, by - 76)
  ctx.lineTo(fx, by - 76)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.font = style.fontTick
  drawLabel(ctx, `${forcePos.toFixed(1)} m`, (ax + fx) / 2, by - 80, {
    align: 'center', baseline: 'bottom', color: style.colors.textMuted, bg: true, style,
  })

  // Support labels
  ctx.font = style.fontAnnotation
  drawLabel(ctx, 'A', ax - 6, by + 8 + 45, {
    align: 'right', baseline: 'alphabetic', color: style.colors.text, style,
  })
  drawLabel(ctx, 'B', bx + 6, by + 8 + 45, {
    align: 'left', baseline: 'alphabetic', color: style.colors.text, style,
  })
}

export function BeamReactions() {
  const [forcePos, setForcePos] = useState(2)
  const [forceN, setForceN]     = useState(500)
  const beamL = 4

  const canvasRef = useCanvas(draw, { forcePos, forceN, beamL })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-64 sm:h-56 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm" />
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600 dark:text-red-400">F = {forceN} N</span>
          <input type="range" min="100" max="1000" step="50" value={forceN} onChange={(e) => setForceN(+e.target.value)} className="accent-red-600" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300">Position = {forcePos.toFixed(1)} m</span>
          <input type="range" min="0.2" max="3.8" step="0.1" value={forcePos} onChange={(e) => setForcePos(+e.target.value)} className="accent-primary-700" />
        </label>
      </div>
      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 text-center">
        Gleichgewicht: Rₐ + R_B = F · ΣM_A = 0 → R_B = F · a / L
      </p>
    </div>
  )
}
