import { useMemo, useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

function drawSinWaveExplorer(ctx, w, h, { amplitude, frequency, phase }) {
  const style = getVizStyle(w)
  const pad = style.margin
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom
  const xMin = 0
  const xMax = 2 * Math.PI
  const yMax = Math.max(2.2, amplitude + 0.35)
  const toX = (x) => pad.left + ((x - xMin) / (xMax - xMin)) * pw
  const toY = (y) => pad.top + ((yMax - y) / (2 * yMax)) * ph

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  for (let i = 0; i <= 8; i++) {
    const x = pad.left + (i / 8) * pw
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, h - pad.bottom); ctx.stroke()
  }
  for (let i = -2; i <= 2; i++) {
    const y = toY(i)
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(pad.left, toY(0)); ctx.lineTo(w - pad.right, toY(0)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(pad.left, pad.top); ctx.lineTo(pad.left, h - pad.bottom); ctx.stroke()

  // Reference sine
  ctx.strokeStyle = '#cbd5e1'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 4])
  ctx.beginPath()
  for (let i = 0; i <= pw; i++) {
    const x = xMin + (i / pw) * (xMax - xMin)
    const y = Math.sin(x)
    if (i === 0) ctx.moveTo(toX(x), toY(y)); else ctx.lineTo(toX(x), toY(y))
  }
  ctx.stroke()
  ctx.setLineDash([])

  // Main wave
  ctx.strokeStyle = '#003DA5'
  ctx.lineWidth = 3
  ctx.beginPath()
  for (let i = 0; i <= pw; i++) {
    const x = xMin + (i / pw) * (xMax - xMin)
    const y = amplitude * Math.sin(frequency * x + phase)
    if (i === 0) ctx.moveTo(toX(x), toY(y)); else ctx.lineTo(toX(x), toY(y))
  }
  ctx.stroke()

  // Amplitude marker
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 4])
  ctx.beginPath(); ctx.moveTo(pad.left, toY(amplitude)); ctx.lineTo(w - pad.right, toY(amplitude)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(pad.left, toY(-amplitude)); ctx.lineTo(w - pad.right, toY(-amplitude)); ctx.stroke()
  ctx.setLineDash([])

  // Ticks
  ctx.font = style.fontTick
  const ticks = [['0', 0], ['π/2', Math.PI / 2], ['π', Math.PI], ['3π/2', 1.5 * Math.PI], ['2π', 2 * Math.PI]]
  ticks.forEach(([label, x]) => {
    drawLabel(ctx, label, toX(x), h - pad.bottom + 18, {
      align: 'center', baseline: 'top', color: style.colors.textMuted, bg: true, style,
    })
  })
  drawLabel(ctx, '0', pad.left - 8, toY(0), {
    align: 'right', baseline: 'middle', color: style.colors.textMuted, bg: true, style,
  })
  drawLabel(ctx, 'A', pad.left - 8, toY(amplitude), {
    align: 'right', baseline: 'middle', color: '#dc2626', bg: true, style,
  })

  // Formula label
  ctx.font = style.fontLabel
  drawLabel(ctx, `x(t) = ${amplitude.toFixed(1)} · sin(${frequency.toFixed(1)}t + ${phase.toFixed(2)})`, pad.left, 16, {
    align: 'left', baseline: 'alphabetic', color: style.colors.text, bg: true, style,
  })
}

function Control({ label, value, min, max, step, onChange }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="flex justify-between font-mono text-[10px] font-black uppercase tracking-wider text-ink-soft dark:text-surface-400">
        <span>{label}</span>
        <span className="text-primary-700 dark:text-primary-300">{Number(value).toFixed(2)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="w-full accent-lemon-dark" />
    </label>
  )
}

export function SinWaveExplorer({ initialAmplitude = 1, initialFrequency = 1, initialPhase = 0 }) {
  const [amplitude, setAmplitude] = useState(initialAmplitude)
  const [frequency, setFrequency] = useState(initialFrequency)
  const [phase, setPhase] = useState(initialPhase)
  const params = useMemo(() => ({ amplitude, frequency, phase }), [amplitude, frequency, phase])
  const canvasRef = useCanvas(drawSinWaveExplorer, params)

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-64 sm:h-56 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm" />
      <div className="grid grid-cols-1 gap-3 bg-white dark:bg-surface-800 border-2 border-ink dark:border-surface-500 rounded-retro shadow-hard-sm p-3">
        <Control label="Amplitude A" value={amplitude} min={0.2} max={2} step={0.1} onChange={setAmplitude} />
        <Control label="Kreisfrequenz ω" value={frequency} min={0.5} max={3} step={0.1} onChange={setFrequency} />
        <Control label="Phase φ" value={phase} min={-3.14} max={3.14} step={0.1} onChange={setPhase} />
      </div>
    </div>
  )
}
