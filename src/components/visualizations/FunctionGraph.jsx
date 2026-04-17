import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel, clampInside } from './vizStyle'

function drawFunctionGraph(ctx, w, h, { functions = [], xRange = [-2 * Math.PI, 2 * Math.PI], yRange = [-1.5, 1.5], showGrid = true, marks = [] }) {
  const style = getVizStyle(w)
  const pad = style.margin
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top  + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  // Grid
  if (showGrid) {
    ctx.strokeStyle = style.colors.grid
    ctx.lineWidth = 1
    const xStep = (xRange[1] - xRange[0]) / 8
    for (let x = Math.ceil(xRange[0] / xStep) * xStep; x <= xRange[1]; x += xStep) {
      ctx.beginPath(); ctx.moveTo(toX(x), pad.top); ctx.lineTo(toX(x), h - pad.bottom); ctx.stroke()
    }
    const yStep = (yRange[1] - yRange[0]) / 6
    for (let y = Math.ceil(yRange[0] / yStep) * yStep; y <= yRange[1]; y += yStep) {
      ctx.beginPath(); ctx.moveTo(pad.left, toY(y)); ctx.lineTo(w - pad.right, toY(y)); ctx.stroke()
    }
  }

  // Axes
  ctx.strokeStyle = style.colors.axis
  ctx.lineWidth = 1.5
  if (yRange[0] <= 0 && yRange[1] >= 0) {
    const y0 = toY(0)
    ctx.beginPath(); ctx.moveTo(pad.left, y0); ctx.lineTo(w - pad.right, y0); ctx.stroke()
  }
  if (xRange[0] <= 0 && xRange[1] >= 0) {
    const x0 = toX(0)
    ctx.beginPath(); ctx.moveTo(x0, pad.top); ctx.lineTo(x0, h - pad.bottom); ctx.stroke()
  }

  // Axis tick labels
  ctx.font = style.fontTick

  const piMarks = [-2, -1, -0.5, 0, 0.5, 1, 2]
  piMarks.forEach((m) => {
    const x = m * Math.PI
    if (x < xRange[0] || x > xRange[1]) return
    const label = m === 0 ? '0' : m === 1 ? 'π' : m === -1 ? '-π' : `${m}π`
    drawLabel(ctx, label, toX(x), h - pad.bottom + 16, {
      align: 'center',
      baseline: 'top',
      color: style.colors.textMuted,
      style,
    })
  })

  // Function curves
  functions.forEach(({ fn, color = '#3b82f6', label: fnLabel }) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 2.5
    ctx.beginPath()
    let started = false
    for (let i = 0; i <= pw; i++) {
      const x = xRange[0] + (i / pw) * (xRange[1] - xRange[0])
      const y = fn(x)
      if (!isFinite(y) || Math.abs(y) > 1000) { started = false; continue }
      const sx = toX(x), sy = toY(y)
      if (!started) { ctx.moveTo(sx, sy); started = true } else { ctx.lineTo(sx, sy) }
    }
    ctx.stroke()

    if (fnLabel) {
      ctx.font = style.fontLabel
      const endY = fn(xRange[1])
      const anchor = clampInside(toX(xRange[1]) - 6, toY(endY) - 10, w, h, 6)
      drawLabel(ctx, fnLabel, anchor.x, anchor.y, {
        align: 'right',
        baseline: 'bottom',
        color,
        bg: true,
        style,
      })
    }
  })

  // Marks (special points)
  marks.forEach(({ x, y, label: mLabel, color: mColor = '#ef4444' }) => {
    ctx.beginPath()
    ctx.arc(toX(x), toY(y), 4, 0, 2 * Math.PI)
    ctx.fillStyle = mColor
    ctx.fill()
    if (mLabel) {
      ctx.font = style.fontAnnotation
      drawLabel(ctx, mLabel, toX(x), toY(y) - 10, {
        align: 'center',
        baseline: 'bottom',
        color: mColor,
        bg: true,
        style,
      })
    }
  })
}

export function FunctionGraph({ functions, xRange, yRange, showGrid = true, marks = [] }) {
  const params = { functions, xRange, yRange, showGrid, marks }
  const canvasRef = useCanvas(drawFunctionGraph, params)

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 sm:h-56 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm"
    />
  )
}
