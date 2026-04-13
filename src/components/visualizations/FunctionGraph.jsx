import { useCanvas } from './useCanvas'

function drawFunctionGraph(ctx, w, h, { functions = [], xRange = [-2 * Math.PI, 2 * Math.PI], yRange = [-1.5, 1.5], showGrid = true, marks = [] }) {
  const pad = { top: 20, right: 20, bottom: 30, left: 40 }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const toX = (x) => pad.left + ((x - xRange[0]) / (xRange[1] - xRange[0])) * pw
  const toY = (y) => pad.top  + ((yRange[1] - y) / (yRange[1] - yRange[0])) * ph

  // Grid
  if (showGrid) {
    ctx.strokeStyle = '#f1f5f9'
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
  ctx.strokeStyle = '#cbd5e1'
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
  ctx.fillStyle = '#94a3b8'
  ctx.font = '10px Inter, sans-serif'
  ctx.textAlign = 'center'

  const piMarks = [-2, -1, -0.5, 0, 0.5, 1, 2]
  piMarks.forEach((m) => {
    const x = m * Math.PI
    if (x < xRange[0] || x > xRange[1]) return
    const label = m === 0 ? '0' : m === 1 ? 'π' : m === -1 ? '-π' : `${m}π`
    ctx.fillText(label, toX(x), h - pad.bottom + 14)
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
      ctx.fillStyle = color
      ctx.font = '11px Inter, sans-serif'
      ctx.textAlign = 'right'
      const midX = (xRange[0] + xRange[1]) / 2
      ctx.fillText(fnLabel, toX(xRange[1]) - 4, toY(fn(xRange[1])) - 6)
    }
  })

  // Marks (special points)
  marks.forEach(({ x, y, label: mLabel, color: mColor = '#ef4444' }) => {
    ctx.beginPath()
    ctx.arc(toX(x), toY(y), 4, 0, 2 * Math.PI)
    ctx.fillStyle = mColor
    ctx.fill()
    if (mLabel) {
      ctx.fillStyle = mColor
      ctx.font = '10px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(mLabel, toX(x), toY(y) - 8)
    }
  })
}

export function FunctionGraph({ functions, xRange, yRange, showGrid = true, marks = [] }) {
  const params = { functions, xRange, yRange, showGrid, marks }
  const canvasRef = useCanvas(drawFunctionGraph, params)

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-48 rounded-xl bg-surface-50"
    />
  )
}
