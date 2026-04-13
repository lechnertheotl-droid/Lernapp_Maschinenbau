import { useState } from 'react'
import { useCanvas } from './useCanvas'

function draw(ctx, w, h, { E, sigma_y, material }) {
  const pad = { left: 55, right: 20, top: 20, bottom: 40 }
  const pw = w - pad.left - pad.right
  const ph = h - pad.top - pad.bottom

  const maxEps = material === 'steel' ? 0.25 : material === 'aluminum' ? 0.15 : 0.02
  const maxSig = sigma_y * 1.6

  const toX = (eps) => pad.left + (eps / maxEps) * pw
  const toY = (sig) => pad.top + ph - (sig / maxSig) * ph

  // Grid
  ctx.strokeStyle = '#f1f5f9'
  ctx.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const y = pad.top + (i / 5) * ph
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(pad.left, pad.top); ctx.lineTo(pad.left, h - pad.bottom); ctx.lineTo(w - pad.right, h - pad.bottom); ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#1a1a1a'
  ctx.font = 'bold 11px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('ε (Dehnung)', w / 2, h - 5)
  ctx.save()
  ctx.translate(14, h / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.fillText('σ (Spannung) [MPa]', 0, 0)
  ctx.restore()

  // Draw stress-strain curve
  ctx.beginPath()
  ctx.moveTo(toX(0), toY(0))
  const epsY = sigma_y / E
  const steps = 200

  for (let i = 0; i <= steps; i++) {
    const eps = (i / steps) * maxEps
    let sig
    if (eps <= epsY) {
      // Elastic region (Hooke's law)
      sig = E * eps
    } else if (material === 'brittle') {
      // Brittle: fracture at yield
      sig = sigma_y
      if (eps > epsY * 1.05) break
    } else {
      // Plastic region with hardening + necking
      const plasticEps = eps - epsY
      const hardenFactor = material === 'steel' ? 0.15 : 0.1
      const neckingStart = maxEps * 0.6
      if (eps < neckingStart) {
        sig = sigma_y + hardenFactor * E * plasticEps * Math.exp(-plasticEps * 3)
      } else {
        const peak = sigma_y + hardenFactor * E * (neckingStart - epsY) * Math.exp(-(neckingStart - epsY) * 3)
        const drop = (eps - neckingStart) / (maxEps - neckingStart)
        sig = peak * (1 - drop * 0.4)
      }
    }
    ctx.lineTo(toX(eps), toY(Math.max(0, sig)))
  }

  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 3
  ctx.stroke()

  // Yield point marker
  ctx.beginPath()
  ctx.arc(toX(epsY), toY(sigma_y), 5, 0, Math.PI * 2)
  ctx.fillStyle = '#ef4444'
  ctx.fill()
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 1.5
  ctx.stroke()

  // Yield line dashed
  ctx.setLineDash([4, 3])
  ctx.strokeStyle = '#ef4444'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(pad.left, toY(sigma_y))
  ctx.lineTo(w - pad.right, toY(sigma_y))
  ctx.stroke()
  ctx.setLineDash([])

  // Labels
  ctx.fillStyle = '#ef4444'
  ctx.font = 'bold 10px Inter, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText(`σ_y = ${sigma_y} MPa`, toX(epsY) + 10, toY(sigma_y) - 8)

  // E-Modul annotation (slope line)
  ctx.strokeStyle = '#10b981'
  ctx.lineWidth = 1.5
  ctx.setLineDash([6, 3])
  ctx.beginPath()
  ctx.moveTo(toX(0), toY(0))
  ctx.lineTo(toX(epsY * 1.5), toY(sigma_y * 1.5))
  ctx.stroke()
  ctx.setLineDash([])
  ctx.fillStyle = '#10b981'
  ctx.font = '10px Inter, system-ui, sans-serif'
  ctx.fillText(`E = ${E} MPa`, toX(epsY * 0.3) + 8, toY(sigma_y * 0.3) - 8)

  // Region labels
  ctx.fillStyle = '#64748b'
  ctx.font = '9px Inter, system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('elastisch', toX(epsY / 2), toY(sigma_y * 0.4))
  if (material !== 'brittle') {
    ctx.fillText('plastisch', toX(maxEps * 0.4), toY(sigma_y * 0.4))
  }
}

const MATERIALS = {
  steel: { label: 'Stahl (S235)', E: 210000, sigma_y: 235 },
  aluminum: { label: 'Aluminium', E: 70000, sigma_y: 150 },
  brittle: { label: 'Gusseisen (spröd)', E: 120000, sigma_y: 200 },
}

export function StressStrainDiagram() {
  const [material, setMaterial] = useState('steel')
  const mat = MATERIALS[material]
  const canvasRef = useCanvas(draw, { E: mat.E, sigma_y: mat.sigma_y, material })

  return (
    <div className="flex flex-col gap-3">
      <canvas ref={canvasRef} className="w-full h-52 rounded-retro bg-white border-2 border-ink shadow-hard-sm" />
      <div className="flex gap-2 justify-center">
        {Object.entries(MATERIALS).map(([key, m]) => (
          <button
            key={key}
            onClick={() => setMaterial(key)}
            className={`px-3 py-1.5 rounded-retro border-2 font-mono text-[10px] font-bold retro-press ${material === key ? 'bg-lemon border-lemon-dark text-ink shadow-hard-lemon' : 'bg-white border-ink text-ink-soft shadow-hard-sm'}`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  )
}
