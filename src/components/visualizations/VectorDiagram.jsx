import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

function drawArrow(ctx, x1, y1, x2, y2, color, lineWidth = 2) {
  const headLen = 10
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

function drawVectorDiagram(ctx, w, h, {
  vectors = [{ x: 3, y: 2, color: '#3b82f6', label: 'a' }],
  showComponents = false,
  showSum = false,
  origin = [0, 0],
}) {
  const xRange = [-4, 4]
  const yRange = [-4, 4]
  const style = getVizStyle(w)
  const pad = style.margin
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top  + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  for (let x = xRange[0]; x <= xRange[1]; x++) {
    ctx.beginPath(); ctx.moveTo(toX(x), pad.top); ctx.lineTo(toX(x), h - pad.bottom); ctx.stroke()
  }
  for (let y = yRange[0]; y <= yRange[1]; y++) {
    ctx.beginPath(); ctx.moveTo(pad.left, toY(y)); ctx.lineTo(w - pad.right, toY(y)); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.axis; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(pad.left, toY(0)); ctx.lineTo(w - pad.right, toY(0)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(toX(0), pad.top); ctx.lineTo(toX(0), h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.font = style.fontTick
  for (let x = xRange[0] + 1; x < xRange[1]; x++) {
    if (x === 0) continue
    drawLabel(ctx, String(x), toX(x), h - pad.bottom + 16, {
      align: 'center', baseline: 'top', color: style.colors.textMuted, bg: true, style,
    })
  }
  for (let y = yRange[0] + 1; y < yRange[1]; y++) {
    if (y === 0) continue
    drawLabel(ctx, String(y), pad.left - 6, toY(y), {
      align: 'right', baseline: 'middle', color: style.colors.textMuted, bg: true, style,
    })
  }

  const ox = origin[0]
  const oy = origin[1]

  // Draw sum vector (parallelogram resultant)
  if (showSum && vectors.length >= 2) {
    const sumX = vectors.reduce((acc, v) => acc + v.x, 0)
    const sumY = vectors.reduce((acc, v) => acc + v.y, 0)
    // Dashed resultant
    ctx.setLineDash([5, 3])
    drawArrow(ctx, toX(ox), toY(oy), toX(ox + sumX), toY(oy + sumY), '#10b981', 2.5)
    ctx.setLineDash([])
    // Label
    ctx.font = style.fontAnnotation
    drawLabel(ctx, `r(${sumX.toFixed(1)}, ${sumY.toFixed(1)})`, toX(ox + sumX) + 8, toY(oy + sumY) - 6, {
      align: 'left', baseline: 'bottom', color: '#10b981', bg: true, style,
    })
  }

  // Draw each vector
  vectors.forEach((v) => {
    const color = v.color ?? '#3b82f6'
    const label = v.label ?? ''

    // Component lines
    if (showComponents) {
      ctx.setLineDash([4, 3])
      ctx.strokeStyle = color; ctx.globalAlpha = 0.4; ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(toX(ox), toY(oy)); ctx.lineTo(toX(ox + v.x), toY(oy)); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(toX(ox + v.x), toY(oy)); ctx.lineTo(toX(ox + v.x), toY(oy + v.y)); ctx.stroke()
      ctx.setLineDash([]); ctx.globalAlpha = 1
      // Component labels
      ctx.font = style.fontTick
      drawLabel(ctx, `${v.x}`, toX(ox + v.x / 2), toY(oy) + 14, {
        align: 'center', baseline: 'top', color, bg: true, style,
      })
      drawLabel(ctx, `${v.y}`, toX(ox + v.x) - 6, toY(oy + v.y / 2), {
        align: 'right', baseline: 'middle', color, bg: true, style,
      })
    }

    // Main vector arrow
    drawArrow(ctx, toX(ox), toY(oy), toX(ox + v.x), toY(oy + v.y), color, 2.5)

    // Label
    if (label) {
      ctx.font = style.fontLabel
      const midX = toX(ox + v.x / 2)
      const midY = toY(oy + v.y / 2)
      drawLabel(ctx, label, midX + 8, midY - 6, {
        align: 'left', baseline: 'bottom', color, bg: true, style,
      })
    }
  })
}

export function VectorDiagram({
  vectors = [{ x: 3, y: 2, color: '#3b82f6', label: 'a⃗' }],
  showComponents = false,
  showSum = false,
  origin = [0, 0],
}) {
  const params = { vectors, showComponents, showSum, origin }
  const canvasRef = useCanvas(drawVectorDiagram, params)

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 sm:h-56 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm"
    />
  )
}
