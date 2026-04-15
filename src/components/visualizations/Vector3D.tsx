import { useRef, useState, useEffect } from 'react'
import { useCanvas } from './useCanvas'

interface Vec3 { x: number; y: number; z: number }

function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z
}
function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  }
}
function mag(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
}

/** Isometric-ish projection with user-controlled pitch/yaw (rad). */
function project(v: Vec3, yaw: number, pitch: number): { x: number; y: number } {
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw)
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch)
  // Rotate around y-axis (yaw), then x-axis (pitch)
  const x1 = cosY * v.x + sinY * v.z
  const z1 = -sinY * v.x + cosY * v.z
  const y2 = cosP * v.y - sinP * z1
  return { x: x1, y: y2 }
}

interface DrawParams {
  a: Vec3
  b: Vec3
  yaw: number
  pitch: number
  mode: 'dot' | 'cross'
  scale: number
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawParams) {
  const cx = w / 2, cy = h / 2
  const u = Math.min(w, h) / 6 * p.scale

  // Axes + grid plane (x-z floor)
  const proj = (v: Vec3) => {
    const q = project(v, p.yaw, p.pitch)
    return { x: cx + q.x * u, y: cy - q.y * u }
  }

  // Grid on x-z plane (floor)
  ctx.strokeStyle = 'rgba(0,61,165,0.08)'
  ctx.lineWidth = 1
  for (let i = -3; i <= 3; i++) {
    const a = proj({ x: i, y: 0, z: -3 })
    const b = proj({ x: i, y: 0, z: 3 })
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
    const c = proj({ x: -3, y: 0, z: i })
    const d = proj({ x: 3, y: 0, z: i })
    ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(d.x, d.y); ctx.stroke()
  }

  // Axes (colored)
  const drawAxis = (to: Vec3, color: string, label: string) => {
    const o = proj({ x: 0, y: 0, z: 0 })
    const t = proj(to)
    ctx.strokeStyle = color; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(o.x, o.y); ctx.lineTo(t.x, t.y); ctx.stroke()
    ctx.fillStyle = color
    ctx.font = 'bold 11px ui-monospace, monospace'
    ctx.fillText(label, t.x + 4, t.y - 4)
  }
  drawAxis({ x: 3, y: 0, z: 0 }, '#94a3b8', 'x')
  drawAxis({ x: 0, y: 3, z: 0 }, '#94a3b8', 'y')
  drawAxis({ x: 0, y: 0, z: 3 }, '#94a3b8', 'z')

  const arrow = (from: Vec3, to: Vec3, color: string, label: string) => {
    const s = proj(from), e = proj(to)
    ctx.strokeStyle = color; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(e.x, e.y); ctx.stroke()
    // Arrowhead
    const dx = e.x - s.x, dy = e.y - s.y, len = Math.hypot(dx, dy)
    if (len > 6) {
      const ux = dx / len, uy = dy / len, hs = 10
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(e.x, e.y)
      ctx.lineTo(e.x - ux * hs - uy * hs * 0.5, e.y - uy * hs + ux * hs * 0.5)
      ctx.lineTo(e.x - ux * hs + uy * hs * 0.5, e.y - uy * hs - ux * hs * 0.5)
      ctx.closePath(); ctx.fill()
    }
    ctx.fillStyle = color
    ctx.font = 'bold 12px ui-monospace, monospace'
    ctx.fillText(label, e.x + 6, e.y + 4)
  }

  const O: Vec3 = { x: 0, y: 0, z: 0 }
  arrow(O, p.a, '#003DA5', 'a')
  arrow(O, p.b, '#dc2626', 'b')

  if (p.mode === 'cross') {
    const c = cross(p.a, p.b)
    arrow(O, c, '#16a34a', 'a×b')

    // Parallelogram fill (spanned by a and b)
    const a0 = proj(O), a1 = proj(p.a), a2 = proj({ x: p.a.x + p.b.x, y: p.a.y + p.b.y, z: p.a.z + p.b.z }), a3 = proj(p.b)
    ctx.fillStyle = 'rgba(220, 38, 38, 0.12)'
    ctx.beginPath(); ctx.moveTo(a0.x, a0.y); ctx.lineTo(a1.x, a1.y); ctx.lineTo(a2.x, a2.y); ctx.lineTo(a3.x, a3.y); ctx.closePath(); ctx.fill()
  }
}

interface Props {
  initialA?: Vec3
  initialB?: Vec3
  mode?: 'dot' | 'cross'
}

export function Vector3D({
  initialA = { x: 2, y: 0, z: 0 },
  initialB = { x: 0, y: 2, z: 0 },
  mode: initialMode = 'cross',
}: Props) {
  const [a, setA] = useState(initialA)
  const [b, setB] = useState(initialB)
  const [mode, setMode] = useState<'dot' | 'cross'>(initialMode)
  const [yaw, setYaw] = useState(-Math.PI / 6)
  const [pitch, setPitch] = useState(-Math.PI / 10)
  const draggingRef = useRef(false)
  const lastRef = useRef<{ x: number; y: number } | null>(null)
  const canvasRef = useCanvas(draw, { a, b, yaw, pitch, mode, scale: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const onDown = (e: PointerEvent) => {
      draggingRef.current = true
      lastRef.current = { x: e.clientX, y: e.clientY }
      canvas.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current || !lastRef.current) return
      const dx = e.clientX - lastRef.current.x
      const dy = e.clientY - lastRef.current.y
      setYaw((v) => v + dx * 0.01)
      setPitch((v) => Math.max(-Math.PI / 2, Math.min(Math.PI / 2, v - dy * 0.01)))
      lastRef.current = { x: e.clientX, y: e.clientY }
    }
    const onUp = (e: PointerEvent) => {
      draggingRef.current = false
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
  }, [canvasRef])

  const c = cross(a, b)
  const d = dot(a, b)
  const cosAngle = mag(a) > 0 && mag(b) > 0 ? d / (mag(a) * mag(b)) : 0
  const angleDeg = (Math.acos(Math.max(-1, Math.min(1, cosAngle))) * 180) / Math.PI

  const SliderRow = ({ label, value, setValue, accent }: { label: string; value: number; setValue: (n: number) => void; accent: string }) => (
    <label className="flex items-center gap-2">
      <span className={`font-mono text-[10px] font-black w-8 ${accent}`}>{label}</span>
      <input
        type="range" min={-3} max={3} step={0.1}
        value={value} onChange={(e) => setValue(+e.target.value)}
        className="flex-1 accent-primary-700"
        aria-label={`${label}, aktuell ${value.toFixed(1)}`}
      />
      <span className="font-mono text-[10px] num w-10 text-right text-ink dark:text-paper">{value.toFixed(1)}</span>
    </label>
  )

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-80 rounded-retro bg-white dark:bg-surface-800 border-2 border-ink shadow-hard-sm cursor-grab active:cursor-grabbing touch-none"
      />

      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 text-center">
        Ziehen = 3D-Ansicht drehen. Regler darunter = Vektorkomponenten einstellen.
      </p>

      <div className="flex gap-1.5" role="radiogroup" aria-label="Modus">
        {(['cross', 'dot'] as const).map((m) => (
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
            {m === 'cross' ? 'Kreuzprodukt a×b' : 'Skalarprodukt a·b'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <fieldset className="border-2 border-ink rounded-retro bg-white dark:bg-surface-800 shadow-hard-sm p-2 space-y-1">
          <legend className="px-1 font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase">// Vektor a</legend>
          <SliderRow label="a.x" value={a.x} setValue={(n) => setA({ ...a, x: n })} accent="text-primary-700 dark:text-primary-300" />
          <SliderRow label="a.y" value={a.y} setValue={(n) => setA({ ...a, y: n })} accent="text-primary-700 dark:text-primary-300" />
          <SliderRow label="a.z" value={a.z} setValue={(n) => setA({ ...a, z: n })} accent="text-primary-700 dark:text-primary-300" />
        </fieldset>
        <fieldset className="border-2 border-ink rounded-retro bg-white dark:bg-surface-800 shadow-hard-sm p-2 space-y-1">
          <legend className="px-1 font-mono text-[10px] font-black text-red-700 dark:text-red-300 uppercase">// Vektor b</legend>
          <SliderRow label="b.x" value={b.x} setValue={(n) => setB({ ...b, x: n })} accent="text-red-700 dark:text-red-300" />
          <SliderRow label="b.y" value={b.y} setValue={(n) => setB({ ...b, y: n })} accent="text-red-700 dark:text-red-300" />
          <SliderRow label="b.z" value={b.z} setValue={(n) => setB({ ...b, z: n })} accent="text-red-700 dark:text-red-300" />
        </fieldset>
      </div>

      <div className="border-2 border-ink bg-lemon-light rounded-retro shadow-hard-sm p-3 text-sm font-mono">
        {mode === 'cross' ? (
          <>
            <p className="font-black text-ink">a × b = ({c.x.toFixed(2)}, {c.y.toFixed(2)}, {c.z.toFixed(2)})</p>
            <p className="text-ink">|a × b| = {mag(c).toFixed(3)} (Fläche des Parallelogramms)</p>
            <p className="text-ink-soft text-[11px] mt-1">Rechte-Hand-Regel: a × b zeigt senkrecht auf beide, Richtung nach rechter Hand.</p>
          </>
        ) : (
          <>
            <p className="font-black text-ink">a · b = {d.toFixed(3)}</p>
            <p className="text-ink">∠(a,b) = {angleDeg.toFixed(1)}°, cos(∠) = {cosAngle.toFixed(3)}</p>
            <p className="text-ink-soft text-[11px] mt-1">a · b = |a|·|b|·cos(∠). Positiv bei spitzem, negativ bei stumpfem Winkel, 0 bei ⊥.</p>
          </>
        )}
      </div>
    </div>
  )
}
