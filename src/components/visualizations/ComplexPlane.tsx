import { useRef, useState, useEffect } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

type Mode = 'single' | 'multiply'

interface ZPoint {
  a: number
  b: number
}

interface DrawParams {
  z1: ZPoint
  z2: ZPoint
  mode: Mode
  hoverIndex: number | null
  range: number
}

function arg(z: ZPoint): number {
  return Math.atan2(z.b, z.a)
}

function mag(z: ZPoint): number {
  return Math.hypot(z.a, z.b)
}

function mul(a: ZPoint, b: ZPoint): ZPoint {
  return { a: a.a * b.a - a.b * b.b, b: a.a * b.b + a.b * b.a }
}

function drawAxes(ctx: CanvasRenderingContext2D, w: number, h: number, range: number) {
  const style = getVizStyle(w)
  const cx = w / 2, cy = h / 2
  const u = Math.min(w, h) / 2 / range

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  for (let i = -range; i <= range; i++) {
    const x = cx + i * u
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
    const y = cy - i * u
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke()

  // Axis labels
  ctx.font = style.fontLabel
  drawLabel(ctx, 'Re', w - 6, cy - 6, {
    align: 'right', baseline: 'bottom', color: style.colors.text, bg: true, style,
  })
  drawLabel(ctx, 'Im', cx + 6, 14, {
    align: 'left', baseline: 'alphabetic', color: style.colors.text, bg: true, style,
  })

  // Unit markers
  ctx.font = style.fontTick
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue
    drawLabel(ctx, String(i), cx + i * u, cy + 14, {
      align: 'center', baseline: 'top', color: style.colors.textMuted, bg: true, style,
    })
    drawLabel(ctx, String(i), cx - 6, cy - i * u, {
      align: 'right', baseline: 'middle', color: style.colors.textMuted, bg: true, style,
    })
  }
}

function drawZ(
  ctx: CanvasRenderingContext2D,
  w: number, h: number, range: number,
  z: ZPoint, color: string, label: string, isHovered: boolean
) {
  const cx = w / 2, cy = h / 2
  const u = Math.min(w, h) / 2 / range
  const px = cx + z.a * u, py = cy - z.b * u

  // Vector from origin
  ctx.strokeStyle = color
  ctx.lineWidth = 2.5
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke()

  // Arrowhead
  const dx = px - cx, dy = py - cy
  const len = Math.hypot(dx, dy)
  if (len > 6) {
    const ux = dx / len, uy = dy / len
    const size = 8
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(px, py)
    ctx.lineTo(px - ux * size - uy * size * 0.5, py - uy * size + ux * size * 0.5)
    ctx.lineTo(px - ux * size + uy * size * 0.5, py - uy * size - ux * size * 0.5)
    ctx.closePath(); ctx.fill()
  }

  // Dashed projections to axes
  ctx.strokeStyle = 'rgba(0,0,0,0.25)'
  ctx.lineWidth = 1
  ctx.setLineDash([3, 3])
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(cx, py); ctx.stroke()
  ctx.setLineDash([])

  // Point
  const style = getVizStyle(w)
  ctx.fillStyle = color
  ctx.beginPath(); ctx.arc(px, py, isHovered ? 8 : 6, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 2
  ctx.stroke()

  // Label
  ctx.font = style.fontAnnotation
  drawLabel(ctx, label, px + 10, py - 8, {
    align: 'left', baseline: 'bottom', color: style.colors.text, bg: true, style,
  })
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawParams) {
  drawAxes(ctx, w, h, p.range)

  drawZ(ctx, w, h, p.range, p.z1, '#003DA5', 'z₁', p.hoverIndex === 0)

  if (p.mode === 'multiply') {
    drawZ(ctx, w, h, p.range, p.z2, '#16a34a', 'z₂', p.hoverIndex === 1)
    const product = mul(p.z1, p.z2)
    drawZ(ctx, w, h, p.range, product, '#dc2626', 'z₁·z₂', false)

    // Draw arc showing argument of product (sum of args)
    const cx = w / 2, cy = h / 2
    const u = Math.min(w, h) / 2 / p.range
    const r = 28
    const a1 = -arg(p.z1)
    const a2 = -arg(p.z2)
    const aprod = -arg(product)
    ctx.strokeStyle = 'rgba(220, 38, 38, 0.7)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(cx, cy, r, Math.min(0, aprod), Math.max(0, aprod), aprod < 0)
    ctx.stroke()
    void u; void a1; void a2
  }
}

interface Props {
  initialZ1?: ZPoint
  initialZ2?: ZPoint
  range?: number
}

export function ComplexPlane({
  initialZ1 = { a: 1, b: 1 },
  initialZ2 = { a: 1, b: 0.5 },
  range = 3,
}: Props) {
  const [z1, setZ1] = useState<ZPoint>(initialZ1)
  const [z2, setZ2] = useState<ZPoint>(initialZ2)
  const [mode, setMode] = useState<Mode>('single')
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const draggingRef = useRef<number | null>(null)

  const canvasRef = useCanvas(draw, { z1, z2, mode, hoverIndex, range })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const toComplex = (e: PointerEvent): ZPoint => {
      const rect = canvas.getBoundingClientRect()
      const cx = rect.width / 2, cy = rect.height / 2
      const u = Math.min(rect.width, rect.height) / 2 / range
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      return { a: (x - cx) / u, b: -(y - cy) / u }
    }

    const nearest = (pt: ZPoint): number | null => {
      const d1 = Math.hypot(pt.a - z1.a, pt.b - z1.b)
      if (mode === 'multiply') {
        const d2 = Math.hypot(pt.a - z2.a, pt.b - z2.b)
        if (d1 < d2 && d1 < 0.3) return 0
        if (d2 < d1 && d2 < 0.3) return 1
        return null
      }
      return d1 < 0.4 ? 0 : null
    }

    const onDown = (e: PointerEvent) => {
      const pt = toComplex(e)
      const idx = nearest(pt) ?? 0 // grab z1 by default so the user can click anywhere
      draggingRef.current = idx
      canvas.setPointerCapture(e.pointerId)
      if (idx === 0) setZ1(pt)
      else setZ2(pt)
    }
    const onMove = (e: PointerEvent) => {
      const pt = toComplex(e)
      setHoverIndex(nearest(pt))
      if (draggingRef.current == null) return
      if (draggingRef.current === 0) setZ1(pt)
      else setZ2(pt)
    }
    const onUp = (e: PointerEvent) => {
      draggingRef.current = null
      try { canvas.releasePointerCapture(e.pointerId) } catch { /* noop */ }
    }

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointerleave', onUp)
    return () => {
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointerleave', onUp)
    }
  }, [canvasRef, z1, z2, mode, range])

  const product = mul(z1, z2)

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-80 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm cursor-crosshair touch-none"
      />

      <div className="flex gap-1.5" role="radiogroup" aria-label="Modus">
        {(['single', 'multiply'] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mode === m}
            onClick={() => setMode(m)}
            className={`px-3 h-9 border-2 border-ink rounded-retro font-mono text-[11px] font-black uppercase retro-press ${
              mode === m
                ? 'bg-primary-700 text-white shadow-hard-sm dark:bg-primary-400 dark:text-ink'
                : 'bg-white dark:bg-surface-800 text-ink dark:text-paper shadow-hard-sm'
            }`}
          >
            {m === 'single' ? 'Einzelne Zahl' : 'Multiplikation z₁·z₂'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
        <StatBox color="text-primary-700 dark:text-primary-300" label="z₁" value={`${z1.a.toFixed(2)} + ${z1.b.toFixed(2)}i`} />
        <StatBox color="text-primary-700 dark:text-primary-300" label="|z₁|" value={mag(z1).toFixed(3)} />
        <StatBox color="text-primary-700 dark:text-primary-300" label="arg(z₁)" value={`${(arg(z1) * 180 / Math.PI).toFixed(1)}°`} />
        <StatBox color="text-primary-700 dark:text-primary-300" label="conj(z₁)" value={`${z1.a.toFixed(2)} − ${z1.b.toFixed(2)}i`} />

        {mode === 'multiply' && (
          <>
            <StatBox color="text-green-700 dark:text-green-400" label="z₂" value={`${z2.a.toFixed(2)} + ${z2.b.toFixed(2)}i`} />
            <StatBox color="text-green-700 dark:text-green-400" label="|z₂|" value={mag(z2).toFixed(3)} />
            <StatBox color="text-red-700 dark:text-red-400" label="z₁·z₂" value={`${product.a.toFixed(2)} + ${product.b.toFixed(2)}i`} />
            <StatBox color="text-red-700 dark:text-red-400" label="|z₁·z₂|" value={`${mag(product).toFixed(3)} = |z₁|·|z₂|`} />
          </>
        )}
      </div>

      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 text-center">
        Tipp: Punkt mit der Maus ziehen — im „Multiplikation"-Modus siehst du, dass Beträge multipliziert und Winkel addiert werden.
      </p>
    </div>
  )
}

function StatBox({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="px-2 py-1 bg-white dark:bg-surface-800 border-2 border-ink rounded shadow-hard-sm">
      <span className={`font-black ${color}`}>{label}</span>
      <span className="text-ink dark:text-paper num ml-1">{value}</span>
    </div>
  )
}
