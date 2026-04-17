import { useState, useCallback } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

const DEG = Math.PI / 180

function drawUnitCircle(ctx, w, h, params) {
  const { angle = 45, showSine = true, showCosine = true, showLabels = true, showCoordinates = false, showQuadrants = false } = params
  const style = getVizStyle(w)
  const rad = angle * DEG
  const cx = w / 2
  const cy = h / 2
  const r  = Math.min(w, h) / 2 - 40

  const px = cx + r * Math.cos(rad)
  const py = cy - r * Math.sin(rad)

  const sinVal = Math.sin(rad)
  const cosVal = Math.cos(rad)

  // Quadrant background tints
  if (showQuadrants) {
    const qColors = ['rgba(59,130,246,0.06)', 'rgba(168,85,247,0.06)', 'rgba(239,68,68,0.06)', 'rgba(34,197,94,0.06)']
    const qAngles = [0, 90, 180, 270]
    qAngles.forEach((qa, i) => {
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, -qa * DEG, -(qa + 90) * DEG, true)
      ctx.closePath()
      ctx.fillStyle = qColors[i]
      ctx.fill()
    })
  }

  // Grid lines at 30° intervals
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 0.5
  for (let a = 0; a < 360; a += 30) {
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + r * Math.cos(a * DEG), cy - r * Math.sin(a * DEG))
    ctx.stroke()
  }

  // Circle
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, 2 * Math.PI)
  ctx.strokeStyle = style.colors.axis
  ctx.lineWidth = 1.5
  ctx.stroke()

  // Axes
  ctx.strokeStyle = style.colors.textMuted
  ctx.lineWidth = 1.5
  // x-axis
  ctx.beginPath(); ctx.moveTo(cx - r - 12, cy); ctx.lineTo(cx + r + 12, cy); ctx.stroke()
  // y-axis
  ctx.beginPath(); ctx.moveTo(cx, cy - r - 12); ctx.lineTo(cx, cy + r + 12); ctx.stroke()

  // Axis arrowheads
  ctx.fillStyle = style.colors.textMuted
  ;[[cx + r + 12, cy, 0], [cx, cy - r - 12, -Math.PI/2]].forEach(([ax, ay, rot]) => {
    ctx.save(); ctx.translate(ax, ay); ctx.rotate(rot)
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-6, -3); ctx.lineTo(-6, 3); ctx.closePath(); ctx.fill()
    ctx.restore()
  })

  // Angle arc
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.22, 0, -rad, rad < 0)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.stroke()

  // Cosine projection (horizontal dashed line from origin to foot)
  if (showCosine) {
    ctx.setLineDash([4, 3])
    ctx.strokeStyle = '#22c55e'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(cx, py); ctx.lineTo(px, py); ctx.stroke()
    ctx.setLineDash([])
  }

  // Sine projection (vertical dashed line from point to x-axis)
  if (showSine) {
    ctx.setLineDash([4, 3])
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke()
    ctx.setLineDash([])
  }

  // Radius line
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(px, py)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.stroke()

  // Point on circle
  ctx.beginPath()
  ctx.arc(px, py, 5, 0, 2 * Math.PI)
  ctx.fillStyle = '#1d4ed8'
  ctx.fill()
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 1.5
  ctx.stroke()

  if (!showLabels) return

  ctx.font = style.fontAnnotation

  // Angle label
  const labelR = r * 0.28
  const labelAngle = rad / 2
  drawLabel(ctx, `${Math.round(angle)}°`, cx + labelR * Math.cos(labelAngle) + 6, cy - labelR * Math.sin(labelAngle), {
    align: 'center', baseline: 'middle', color: '#3b82f6', bg: true, style,
  })

  // sin label
  if (showSine) {
    const midY = (cy + py) / 2
    drawLabel(ctx, `sin=${sinVal.toFixed(2)}`, px + (px > cx ? 8 : -8), midY, {
      align: px > cx ? 'left' : 'right', baseline: 'middle', color: '#ef4444', bg: true, style,
    })
  }

  // cos label
  if (showCosine) {
    drawLabel(ctx, `cos=${cosVal.toFixed(2)}`, (cx + px) / 2, py + 16, {
      align: 'center', baseline: 'top', color: '#22c55e', bg: true, style,
    })
  }

  // Coordinate label
  if (showCoordinates) {
    drawLabel(ctx, `(${cosVal.toFixed(2)}, ${sinVal.toFixed(2)})`, px + (px > cx ? 10 : -10), py - 10, {
      align: px > cx + 20 ? 'left' : px < cx - 20 ? 'right' : 'center',
      baseline: 'bottom', color: style.colors.text, bg: true, style,
    })
  }

  // Axis labels
  ctx.font = style.fontLabel
  drawLabel(ctx, 'x', cx + r + 16, cy, {
    align: 'left', baseline: 'middle', color: style.colors.textMuted, style,
  })
  drawLabel(ctx, 'y', cx, cy - r - 16, {
    align: 'center', baseline: 'middle', color: style.colors.textMuted, style,
  })
}

export function UnitCircle({ angle: controlledAngle, interactive = true, showSine = true, showCosine = true, showLabels = true, showCoordinates = false, showQuadrants = false, initialAngle = 45, onChange }) {
  const [internalAngle, setInternalAngle] = useState(initialAngle)
  const angle = controlledAngle ?? internalAngle

  const params = { angle, showSine, showCosine, showLabels, showCoordinates, showQuadrants }
  const canvasRef = useCanvas(drawUnitCircle, params)

  const handleInteraction = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current
    if (!canvas || !interactive) return
    const rect = canvas.getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = clientX - rect.left - cx
    const dy = cy - (clientY - rect.top)
    const newAngle = Math.round(Math.atan2(dy, dx) / DEG)
    const normalized = ((newAngle % 360) + 360) % 360
    setInternalAngle(normalized)
    onChange?.(normalized)
  }, [canvasRef, interactive, onChange])

  const handleMouseMove = useCallback((e) => {
    if (e.buttons !== 1) return
    handleInteraction(e.clientX, e.clientY)
  }, [handleInteraction])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    const t = e.touches[0]
    handleInteraction(t.clientX, t.clientY)
  }, [handleInteraction])

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas
        ref={canvasRef}
        className="w-full max-w-xs aspect-square cursor-crosshair rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm"
        onMouseDown={(e) => handleInteraction(e.clientX, e.clientY)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { const t = e.touches[0]; handleInteraction(t.clientX, t.clientY) }}
        onTouchMove={handleTouchMove}
        style={{ touchAction: 'none' }}
      />
      {interactive && (
        <div className="w-full max-w-xs px-2">
          <input
            type="range"
            min={0} max={359} step={1}
            value={angle}
            onChange={(e) => {
              const v = Number(e.target.value)
              setInternalAngle(v)
              onChange?.(v)
            }}
            className="w-full accent-lemon-dark"
          />
          <div className="flex justify-between text-xs text-ink-soft dark:text-surface-400 mt-1 font-mono">
            <span>0°</span>
            <span className="font-black text-primary-700 dark:text-primary-300">{angle}°</span>
            <span>359°</span>
          </div>
        </div>
      )}
    </div>
  )
}
