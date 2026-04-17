import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

interface BeamParams {
  forcePos: number
  forceN: number
  beamL: number
}

/**
 * Einfeldträger mit Einzelkraft: zeigt gleichzeitig
 *   1) Statik-Skizze mit Lagern + Last
 *   2) Q(x) Querkraftverlauf
 *   3) M(x) Biegemomentverlauf
 * Max-Moment bei der Lastangriffsposition (markiert).
 */
function drawBeam(ctx: CanvasRenderingContext2D, w: number, h: number, p: BeamParams) {
  const { forcePos: a, forceN: F, beamL: L } = p
  const style = getVizStyle(w)
  const pad = { left: Math.max(40, style.margin.left), right: Math.max(40, style.margin.right), top: 10, bottom: 10 }
  const innerW = w - pad.left - pad.right
  const sections = 3 // statik / Q / M
  const sectionH = (h - pad.top - pad.bottom) / sections

  // Ra, Rb via static equilibrium
  const Rb = (F * a) / L
  const Ra = F - Rb
  const Mmax = Ra * a

  const toX = (x: number) => pad.left + (x / L) * innerW

  // ── Section 1: Statik ────────────────────────────────────────────────
  const beamY = pad.top + sectionH * 0.55
  // Beam
  ctx.fillStyle = '#e2e8f0'
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.rect(pad.left, beamY - 6, innerW, 12); ctx.fill(); ctx.stroke()

  // Support A (pin)
  const ax = toX(0), bx = toX(L)
  ctx.fillStyle = '#3b82f6'
  ctx.beginPath()
  ctx.moveTo(ax, beamY + 6); ctx.lineTo(ax - 10, beamY + 22); ctx.lineTo(ax + 10, beamY + 22); ctx.closePath()
  ctx.fill(); ctx.stroke()

  // Support B (roller)
  ctx.fillStyle = '#ef4444'
  ctx.beginPath()
  ctx.moveTo(bx, beamY + 6); ctx.lineTo(bx - 9, beamY + 18); ctx.lineTo(bx + 9, beamY + 18); ctx.closePath()
  ctx.fill(); ctx.stroke()
  ctx.beginPath(); ctx.arc(bx, beamY + 22, 4, 0, Math.PI * 2); ctx.stroke()

  // Force arrow
  const fx = toX(a)
  ctx.strokeStyle = '#dc2626'; ctx.fillStyle = '#dc2626'; ctx.lineWidth = 2.5
  ctx.beginPath(); ctx.moveTo(fx, beamY - 40); ctx.lineTo(fx, beamY - 10); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(fx, beamY - 6); ctx.lineTo(fx - 6, beamY - 14); ctx.lineTo(fx + 6, beamY - 14); ctx.closePath(); ctx.fill()
  ctx.font = style.fontAnnotation
  drawLabel(ctx, `F = ${F.toFixed(0)} N`, fx, beamY - 44, {
    align: 'center', baseline: 'bottom', color: '#dc2626', bg: true, style,
  })

  // Labels A/B/a
  ctx.font = style.fontTick
  drawLabel(ctx, 'A', ax, beamY + 36, {
    align: 'center', baseline: 'middle', color: style.colors.text, style,
  })
  drawLabel(ctx, 'B', bx, beamY + 36, {
    align: 'center', baseline: 'middle', color: style.colors.text, style,
  })
  drawLabel(ctx, `a = ${a.toFixed(2)} m`, (ax + fx) / 2, beamY - 52, {
    align: 'center', baseline: 'bottom', color: style.colors.textMuted, bg: true, style,
  })

  // ── Section 2: Q(x) diagram ─────────────────────────────────────────
  const qY = pad.top + sectionH + sectionH * 0.55
  const qMax = Math.max(Math.abs(Ra), Math.abs(Rb))
  const qScale = qMax === 0 ? 0 : (sectionH * 0.35) / qMax

  // Zero line
  ctx.strokeStyle = style.colors.textMuted; ctx.lineWidth = 1; ctx.setLineDash([3, 3])
  ctx.beginPath(); ctx.moveTo(pad.left, qY); ctx.lineTo(w - pad.right, qY); ctx.stroke()
  ctx.setLineDash([])

  // Fill Q(x) — constant Ra between 0..a, then -Rb between a..L
  ctx.fillStyle = 'rgba(59, 130, 246, 0.28)'
  ctx.beginPath()
  ctx.moveTo(ax, qY)
  ctx.lineTo(ax, qY - Ra * qScale)
  ctx.lineTo(fx, qY - Ra * qScale)
  ctx.lineTo(fx, qY + Rb * qScale)
  ctx.lineTo(bx, qY + Rb * qScale)
  ctx.lineTo(bx, qY)
  ctx.closePath(); ctx.fill()

  ctx.strokeStyle = style.colors.text; ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(ax, qY - Ra * qScale); ctx.lineTo(fx, qY - Ra * qScale)
  ctx.moveTo(fx, qY + Rb * qScale); ctx.lineTo(bx, qY + Rb * qScale)
  ctx.stroke()
  // Vertical jump at force
  ctx.beginPath()
  ctx.moveTo(fx, qY - Ra * qScale); ctx.lineTo(fx, qY + Rb * qScale); ctx.stroke()

  ctx.font = style.fontAnnotation
  drawLabel(ctx, 'Q(x)', pad.left, qY - sectionH * 0.4, {
    align: 'left', baseline: 'alphabetic', color: style.colors.text, bg: true, style,
  })
  drawLabel(ctx, `Ra = +${Ra.toFixed(1)} N`, fx - 6, qY - Ra * qScale - 4, {
    align: 'right', baseline: 'bottom', color: '#3b82f6', bg: true, style,
  })
  drawLabel(ctx, `−Rb = ${(-Rb).toFixed(1)} N`, bx - 6, qY + Rb * qScale + 14, {
    align: 'right', baseline: 'top', color: '#ef4444', bg: true, style,
  })

  // ── Section 3: M(x) diagram ─────────────────────────────────────────
  const mY = pad.top + sectionH * 2 + sectionH * 0.55
  const mScale = Mmax === 0 ? 0 : (sectionH * 0.4) / Mmax

  ctx.strokeStyle = style.colors.textMuted; ctx.lineWidth = 1; ctx.setLineDash([3, 3])
  ctx.beginPath(); ctx.moveTo(pad.left, mY); ctx.lineTo(w - pad.right, mY); ctx.stroke()
  ctx.setLineDash([])

  // M(x) triangular profile with peak at a (convention: positive M downward)
  ctx.fillStyle = 'rgba(234, 179, 8, 0.35)'
  ctx.beginPath()
  ctx.moveTo(ax, mY); ctx.lineTo(fx, mY + Mmax * mScale); ctx.lineTo(bx, mY); ctx.closePath(); ctx.fill()
  ctx.strokeStyle = style.colors.text; ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(ax, mY); ctx.lineTo(fx, mY + Mmax * mScale); ctx.lineTo(bx, mY); ctx.stroke()

  // Max marker
  ctx.fillStyle = '#ca8a04'
  ctx.beginPath(); ctx.arc(fx, mY + Mmax * mScale, 5, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = style.colors.text; ctx.lineWidth = 1.5; ctx.stroke()

  ctx.font = style.fontAnnotation
  drawLabel(ctx, 'M(x)', pad.left, mY - sectionH * 0.4, {
    align: 'left', baseline: 'alphabetic', color: style.colors.text, bg: true, style,
  })
  drawLabel(ctx, `M_max = ${Mmax.toFixed(1)} Nm bei x = ${a.toFixed(2)} m`, fx, mY + Mmax * mScale + 16, {
    align: 'center', baseline: 'top', color: '#ca8a04', bg: true, style,
  })
}

interface Props {
  initialForce?: number
  initialPos?: number
  beamL?: number
}

export function InteractiveBeam({
  initialForce = 500,
  initialPos = 2,
  beamL = 4,
}: Props) {
  const [forceN, setForceN] = useState(initialForce)
  const [forcePos, setForcePos] = useState(initialPos)

  const Rb = (forceN * forcePos) / beamL
  const Ra = forceN - Rb
  const Mmax = Ra * forcePos

  const canvasRef = useCanvas(drawBeam, { forcePos, forceN, beamL })

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-80 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm"
      />
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-red-600 dark:text-red-400">
            F = {forceN} N
          </span>
          <input
            type="range" min={100} max={1000} step={50}
            value={forceN} onChange={(e) => setForceN(+e.target.value)}
            className="accent-red-600"
            aria-label={`Kraft, aktuell ${forceN} Newton`}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300">
            a = {forcePos.toFixed(2)} m von {beamL} m
          </span>
          <input
            type="range" min={0.2} max={beamL - 0.2} step={0.1}
            value={forcePos} onChange={(e) => setForcePos(+e.target.value)}
            className="accent-primary-700"
            aria-label={`Lastposition, aktuell ${forcePos.toFixed(2)} Meter`}
          />
        </label>
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
        <div className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-700 dark:border-blue-400 rounded">
          <span className="text-blue-700 dark:text-blue-300 font-black">Rₐ</span>
          <span className="text-ink dark:text-paper num ml-1">{Ra.toFixed(1)} N</span>
        </div>
        <div className="px-2 py-1 bg-red-50 dark:bg-red-950/30 border-2 border-red-700 dark:border-red-400 rounded">
          <span className="text-red-700 dark:text-red-300 font-black">R_B</span>
          <span className="text-ink dark:text-paper num ml-1">{Rb.toFixed(1)} N</span>
        </div>
        <div className="px-2 py-1 bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-700 dark:border-amber-400 rounded">
          <span className="text-amber-700 dark:text-amber-300 font-black">M_max</span>
          <span className="text-ink dark:text-paper num ml-1">{Mmax.toFixed(0)} Nm</span>
        </div>
      </div>
    </div>
  )
}
