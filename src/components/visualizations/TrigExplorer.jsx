import { useMemo, useState } from 'react'
import { useCanvas } from './useCanvas'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const DEG = Math.PI / 180

function nice(value) {
  if (Math.abs(value) < 0.0005) return '0.000'
  return value.toFixed(3)
}

function drawTrigExplorer(ctx, w, h, { angle, showTangent, hidePanel }) {
  const pad = 18
  const panelW = hidePanel ? 0 : Math.min(126, w * 0.34)
  const graphX = pad
  const graphW = hidePanel ? w - pad * 2 : w - panelW - pad * 3
  const cx = graphX + graphW / 2
  const cy = h / 2
  const r = Math.min(graphW, h - 42) / 2
  const rad = angle * DEG
  const x = Math.cos(rad)
  const y = Math.sin(rad)
  const px = cx + r * x
  const py = cy - r * y

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // Notebook grid
  ctx.strokeStyle = 'rgba(0,61,165,0.07)'
  ctx.lineWidth = 1
  for (let gx = 0; gx <= w; gx += 18) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke()
  }
  for (let gy = 0; gy <= h; gy += 18) {
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke()
  }

  // Quadrants
  const quadrants = [
    ['I', 0, -Math.PI / 2, '#eff6ff'],
    ['II', -Math.PI / 2, -Math.PI, '#f5f3ff'],
    ['III', -Math.PI, -3 * Math.PI / 2, '#fef2f2'],
    ['IV', -3 * Math.PI / 2, -2 * Math.PI, '#f0fdf4'],
  ]
  quadrants.forEach(([, start, end, color]) => {
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, start, end, true); ctx.closePath()
    ctx.fillStyle = color; ctx.fill()
  })

  // Axes and circle
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(cx - r - 10, cy); ctx.lineTo(cx + r + 10, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx, cy + r + 10); ctx.lineTo(cx, cy - r - 10); ctx.stroke()
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()

  // 30 degree rays
  ctx.strokeStyle = 'rgba(26,26,26,0.22)'
  ctx.lineWidth = 1
  for (let a = 0; a < 360; a += 30) {
    const rr = a % 90 === 0 ? r + 5 : r
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + rr * Math.cos(a * DEG), cy - rr * Math.sin(a * DEG)); ctx.stroke()
  }

  // Projections
  ctx.setLineDash([6, 4])
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#16a34a'
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke()
  ctx.strokeStyle = '#dc2626'
  ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke()
  ctx.setLineDash([])

  // Radius
  ctx.strokeStyle = '#003DA5'
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke()

  // Angle arc
  ctx.strokeStyle = '#FFD60A'
  ctx.lineWidth = 5
  ctx.beginPath(); ctx.arc(cx, cy, Math.max(22, r * 0.24), 0, -rad, true); ctx.stroke()

  // Tangent line at x = 1
  if (showTangent && Math.abs(x) > 0.03) {
    const tangentX = cx + r
    const tangentY = cy - r * Math.tan(rad)
    ctx.strokeStyle = '#f97316'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(tangentX, cy - r * 1.3); ctx.lineTo(tangentX, cy + r * 1.3); ctx.stroke()
    if (Math.abs(Math.tan(rad)) < 1.35) {
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(tangentX, tangentY); ctx.stroke()
      ctx.beginPath(); ctx.arc(tangentX, tangentY, 4, 0, Math.PI * 2); ctx.fillStyle = '#f97316'; ctx.fill()
    }
  }

  // Point
  ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2)
  ctx.fillStyle = '#003DA5'; ctx.fill()
  ctx.lineWidth = 2; ctx.strokeStyle = '#ffffff'; ctx.stroke()

  // Labels
  ctx.font = '800 11px ui-monospace, monospace'
  ctx.textAlign = 'center'
  ctx.fillStyle = '#1a1a1a'
  quadrants.forEach(([label], idx) => {
    const a = (45 + idx * 90) * DEG
    ctx.fillText(label, cx + r * 0.62 * Math.cos(a), cy - r * 0.62 * Math.sin(a))
  })

  // In-canvas value panel (only on wider viewports; mobile shows HTML panel below)
  if (hidePanel) return
  const panelX = w - panelW - pad
  ctx.fillStyle = '#ffffff'
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.rect(panelX, pad, panelW, h - pad * 2)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = '#003DA5'
  ctx.font = '900 10px ui-monospace, monospace'
  ctx.textAlign = 'left'
  ctx.fillText('TRIG', panelX + 12, pad + 20)

  const rows = [
    ['α', `${angle}°`],
    ['rad', nice(rad)],
    ['sin', nice(y)],
    ['cos', nice(x)],
    ['tan', Math.abs(x) < 0.03 ? 'undef.' : nice(Math.tan(rad))],
  ]
  rows.forEach(([label, value], i) => {
    const yy = pad + 44 + i * 24
    ctx.fillStyle = '#555555'
    ctx.font = '700 10px ui-monospace, monospace'
    ctx.fillText(label, panelX + 12, yy)
    ctx.fillStyle = label === 'sin' ? '#dc2626' : label === 'cos' ? '#16a34a' : label === 'tan' ? '#f97316' : '#1a1a1a'
    ctx.font = '900 12px ui-monospace, monospace'
    ctx.textAlign = 'right'
    ctx.fillText(value, panelX + panelW - 12, yy)
    ctx.textAlign = 'left'
  })
}

function computeValues(angle) {
  const rad = angle * DEG
  const sinV = Math.sin(rad)
  const cosV = Math.cos(rad)
  const tanV = Math.abs(cosV) < 0.03 ? null : Math.tan(rad)
  return { rad, sinV, cosV, tanV }
}

export function TrigExplorer({ initialAngle = 45, showTangent = true }) {
  const [angle, setAngle] = useState(initialAngle)
  const bp = useBreakpoint()
  const isMobile = bp === 'xs'
  const params = useMemo(
    () => ({ angle, showTangent, hidePanel: isMobile }),
    [angle, showTangent, isMobile]
  )
  const canvasRef = useCanvas(drawTrigExplorer, params)
  const { rad, sinV, cosV, tanV } = computeValues(angle)

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-64 rounded-retro bg-white border-2 border-ink shadow-hard-sm" />

      {isMobile && (
        <div className="grid grid-cols-5 gap-1.5 bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm px-2 py-2">
          {[
            { label: 'α', value: `${angle}°`, color: 'text-ink dark:text-paper' },
            { label: 'rad', value: nice(rad), color: 'text-ink dark:text-paper' },
            { label: 'sin', value: nice(sinV), color: 'text-red-600 dark:text-red-400' },
            { label: 'cos', value: nice(cosV), color: 'text-green-700 dark:text-green-400' },
            { label: 'tan', value: tanV == null ? 'undef.' : nice(tanV), color: 'text-orange-600 dark:text-orange-400' },
          ].map((row) => (
            <div key={row.label} className="flex flex-col items-center justify-center">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider text-ink-soft">{row.label}</span>
              <span className={`num text-[13px] font-black leading-tight ${row.color}`}>{row.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white border-2 border-ink rounded-retro shadow-hard-sm px-3 py-2">
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={angle}
          onChange={(event) => setAngle(Number(event.target.value))}
          className="w-full accent-lemon-dark"
          aria-label={`Winkel, aktuell ${angle} Grad`}
        />
        <div className="flex items-center justify-between font-mono text-[10px] font-black text-ink-soft uppercase tracking-wider mt-1">
          <span>0°</span>
          <span className="text-primary-700">α = {angle}°</span>
          <span>360°</span>
        </div>
      </div>
    </div>
  )
}
