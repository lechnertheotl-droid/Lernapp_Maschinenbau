import { useState, useRef } from 'react'
import { useCanvas } from './useCanvas'

function draw(ctx, w, h, { m, k, d, time }) {
  const omega0 = Math.sqrt(k / m)
  const D = d / (2 * Math.sqrt(k * m))
  const omegaD = omega0 * Math.sqrt(Math.max(0, 1 - D * D))

  // Position x(t) for underdamped/overdamped
  let x
  if (D < 1) {
    x = Math.exp(-D * omega0 * time) * Math.cos(omegaD * time)
  } else {
    // Overdamped
    const r1 = -omega0 * (D + Math.sqrt(D * D - 1))
    const r2 = -omega0 * (D - Math.sqrt(D * D - 1))
    x = (r2 * Math.exp(r1 * time) - r1 * Math.exp(r2 * time)) / (r2 - r1)
  }

  const cx = w / 2
  const baseY = h * 0.45
  const amplitude = 60
  const massY = baseY + x * amplitude

  // Wall (left side)
  ctx.fillStyle = '#e2e8f0'
  ctx.fillRect(0, baseY - 50, 20, 100)
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(20, baseY - 50)
  ctx.lineTo(20, baseY + 50)
  ctx.stroke()
  // Hatch
  for (let i = 0; i < 10; i++) {
    ctx.beginPath()
    ctx.moveTo(15, baseY - 45 + i * 10)
    ctx.lineTo(5, baseY - 35 + i * 10)
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  // Spring (zigzag from wall to mass)
  const springStart = 20
  const springEnd = cx - 30
  const springW = springEnd - springStart
  const coils = 8
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2.5
  ctx.beginPath()
  ctx.moveTo(springStart, baseY - 10)
  for (let i = 0; i <= coils; i++) {
    const px = springStart + (i / coils) * springW
    const py = baseY - 10 + (i % 2 === 0 ? -8 : 8)
    ctx.lineTo(px, py)
  }
  ctx.lineTo(springEnd, baseY - 10)
  ctx.stroke()

  // Damper (parallel to spring, below)
  ctx.strokeStyle = '#ef4444'
  ctx.lineWidth = 2
  const dStart = springStart
  const dEnd = springEnd
  const dMid = (dStart + dEnd) / 2
  // piston housing
  ctx.beginPath()
  ctx.moveTo(dStart, baseY + 10)
  ctx.lineTo(dMid - 15, baseY + 10)
  ctx.stroke()
  ctx.strokeRect(dMid - 15, baseY + 3, 30, 14)
  // piston rod
  ctx.beginPath()
  ctx.moveTo(dMid + 15, baseY + 10)
  ctx.lineTo(dEnd, baseY + 10)
  ctx.stroke()

  // Mass box
  ctx.fillStyle = '#1a1a1a'
  ctx.fillRect(cx - 30, massY - 25, 60, 50)
  ctx.fillStyle = '#FFD60A'
  ctx.font = 'bold 14px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`${m} kg`, cx, massY + 5)

  // Ground line
  ctx.strokeStyle = '#94a3b8'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(0, baseY + 55)
  ctx.lineTo(w, baseY + 55)
  ctx.stroke()

  // Response graph (bottom section)
  const graphTop = h * 0.65
  const graphH = h * 0.28
  const graphLeft = 30
  const graphW = w - 60
  const tMax = 6

  // Graph background
  ctx.fillStyle = '#fafafa'
  ctx.fillRect(graphLeft, graphTop, graphW, graphH)
  ctx.strokeStyle = '#e2e8f0'
  ctx.lineWidth = 1
  ctx.strokeRect(graphLeft, graphTop, graphW, graphH)

  // Zero line
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = '#94a3b8'
  ctx.beginPath()
  ctx.moveTo(graphLeft, graphTop + graphH / 2)
  ctx.lineTo(graphLeft + graphW, graphTop + graphH / 2)
  ctx.stroke()
  ctx.setLineDash([])

  // Plot x(t)
  ctx.beginPath()
  for (let i = 0; i <= graphW; i++) {
    const t = (i / graphW) * tMax
    let xt
    if (D < 1) {
      xt = Math.exp(-D * omega0 * t) * Math.cos(omegaD * t)
    } else {
      const r1 = -omega0 * (D + Math.sqrt(D * D - 1))
      const r2 = -omega0 * (D - Math.sqrt(D * D - 1))
      xt = (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r2 - r1)
    }
    const py = graphTop + graphH / 2 - xt * graphH * 0.4
    if (i === 0) ctx.moveTo(graphLeft + i, py)
    else ctx.lineTo(graphLeft + i, py)
  }
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.stroke()

  // Envelope (for underdamped)
  if (D < 1 && D > 0) {
    ctx.setLineDash([4, 4])
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let i = 0; i <= graphW; i++) {
      const t = (i / graphW) * tMax
      const env = Math.exp(-D * omega0 * t)
      const py = graphTop + graphH / 2 - env * graphH * 0.4
      if (i === 0) ctx.moveTo(graphLeft + i, py)
      else ctx.lineTo(graphLeft + i, py)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i <= graphW; i++) {
      const t = (i / graphW) * tMax
      const env = -Math.exp(-D * omega0 * t)
      const py = graphTop + graphH / 2 - env * graphH * 0.4
      if (i === 0) ctx.moveTo(graphLeft + i, py)
      else ctx.lineTo(graphLeft + i, py)
    }
    ctx.stroke()
    ctx.setLineDash([])
  }

  // Time marker
  const tPx = graphLeft + (time / tMax) * graphW
  if (time <= tMax) {
    ctx.strokeStyle = '#10b981'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(tPx, graphTop)
    ctx.lineTo(tPx, graphTop + graphH)
    ctx.stroke()
  }

  // Labels
  ctx.fillStyle = '#64748b'
  ctx.font = '9px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('t [s]', graphLeft + graphW / 2, graphTop + graphH + 14)
  ctx.textAlign = 'left'
  ctx.fillText('x(t)', graphLeft + 4, graphTop + 12)

  // Info
  ctx.fillStyle = '#1a1a1a'
  ctx.font = 'bold 10px Inter, system-ui, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText(`D = ${D.toFixed(2)}  ω₀ = ${omega0.toFixed(1)} rad/s`, w - 20, graphTop - 6)
  ctx.fillStyle = D < 1 ? '#3b82f6' : D === 1 ? '#10b981' : '#ef4444'
  ctx.textAlign = 'left'
  ctx.fillText(D < 1 ? 'unterdämpft' : D === 1 ? 'krit. gedämpft' : 'überdämpft', 20, graphTop - 6)
}

export function SpringMassDamper() {
  const [m, setM] = useState(1)
  const [k, setK] = useState(40)
  const [d, setD] = useState(2)
  const [time, setTime] = useState(0)
  const animRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (playing) {
      cancelAnimationFrame(animRef.current)
      setPlaying(false)
    } else {
      setPlaying(true)
      setTime(0)
      const start = performance.now()
      const animate = (now) => {
        const t = (now - start) / 1000
        if (t > 6) { setPlaying(false); setTime(6); return }
        setTime(t)
        animRef.current = requestAnimationFrame(animate)
      }
      animRef.current = requestAnimationFrame(animate)
    }
  }

  const canvasRef = useCanvas(draw, { m, k, d, time })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-72 rounded-retro bg-white border-2 border-ink shadow-hard-sm" />
      <button
        onClick={togglePlay}
        className="mx-auto px-6 py-2 rounded-retro border-2 border-ink bg-lemon shadow-hard-lemon font-mono text-xs font-black uppercase tracking-wider retro-press"
      >
        {playing ? '⏸ Stopp' : '▶ Simulation starten'}
      </button>
      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-ink">m = {m} kg</span>
          <input type="range" min="0.5" max="5" step="0.5" value={m} onChange={(e) => setM(+e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700">k = {k} N/m</span>
          <input type="range" min="10" max="200" step="10" value={k} onChange={(e) => setK(+e.target.value)} className="accent-primary-700" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600">d = {d} Ns/m</span>
          <input type="range" min="0" max="30" step="1" value={d} onChange={(e) => setD(+e.target.value)} className="accent-red-600" />
        </label>
      </div>
    </div>
  )
}
