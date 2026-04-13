import { useCanvas } from './useCanvas'

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
  const pad = { top: 20, right: 20, bottom: 30, left: 40 }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top  + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  // Grid
  ctx.strokeStyle = '#f1f5f9'
  ctx.lineWidth = 1
  for (let x = xRange[0]; x <= xRange[1]; x++) {
    ctx.beginPath(); ctx.moveTo(toX(x), pad.top); ctx.lineTo(toX(x), h - pad.bottom); ctx.stroke()
  }
  for (let y = yRange[0]; y <= yRange[1]; y++) {
    ctx.beginPath(); ctx.moveTo(pad.left, toY(y)); ctx.lineTo(w - pad.right, toY(y)); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(pad.left, toY(0)); ctx.lineTo(w - pad.right, toY(0)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(toX(0), pad.top); ctx.lineTo(toX(0), h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#94a3b8'; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'center'
  for (let x = xRange[0] + 1; x < xRange[1]; x++) {
    if (x === 0) continue
    ctx.fillText(x, toX(x), h - pad.bottom + 14)
  }
  ctx.textAlign = 'right'
  for (let y = yRange[0] + 1; y < yRange[1]; y++) {
    if (y === 0) continue
    ctx.fillText(y, pad.left - 4, toY(y) + 3)
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
    ctx.fillStyle = '#10b981'; ctx.font = 'bold 11px Inter, sans-serif'; ctx.textAlign = 'left'
    ctx.fillText(`r(${sumX.toFixed(1)}, ${sumY.toFixed(1)})`, toX(ox + sumX) + 6, toY(oy + sumY) - 4)
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
      ctx.fillStyle = color; ctx.font = '9px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`${v.x}`, toX(ox + v.x / 2), toY(oy) + 12)
      ctx.textAlign = 'right'
      ctx.fillText(`${v.y}`, toX(ox + v.x) - 4, toY(oy + v.y / 2) + 3)
    }

    // Main vector arrow
    drawArrow(ctx, toX(ox), toY(oy), toX(ox + v.x), toY(oy + v.y), color, 2.5)

    // Label
    if (label) {
      ctx.fillStyle = color; ctx.font = 'bold 12px Inter, sans-serif'; ctx.textAlign = 'left'
      const midX = toX(ox + v.x / 2)
      const midY = toY(oy + v.y / 2)
      ctx.fillText(label, midX + 6, midY - 4)
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
      className="w-full h-48 rounded-retro bg-white border-2 border-ink shadow-hard-sm"
    />
  )
}
