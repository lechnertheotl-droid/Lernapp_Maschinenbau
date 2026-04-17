import { useState } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

interface Matrix2 {
  a: number
  b: number
  c: number
  d: number
}

interface Eigenpair {
  lambda: number
  vx: number
  vy: number
}

/** Eigenwerte + Eigenvektoren einer 2×2-Matrix (reell, nicht-defekt). */
function eigen(M: Matrix2): Eigenpair[] {
  const trace = M.a + M.d
  const det = M.a * M.d - M.b * M.c
  const disc = trace * trace - 4 * det
  if (disc < -1e-9) return [] // komplexe Eigenwerte
  const sq = Math.sqrt(Math.max(0, disc))
  const l1 = (trace + sq) / 2
  const l2 = (trace - sq) / 2

  const vectorFor = (lambda: number): { vx: number; vy: number } => {
    // (A - λI) v = 0  →  find vector in nullspace
    const a = M.a - lambda, b = M.b, c = M.c, d = M.d - lambda
    // Try row 1: a*vx + b*vy = 0  →  v = (-b, a) or (1, -a/b)
    if (Math.abs(b) > 1e-9) return normalize({ vx: -b, vy: a })
    if (Math.abs(c) > 1e-9) return normalize({ vx: d, vy: -c })
    // Diagonal eigenvector
    if (Math.abs(a) < 1e-9) return { vx: 1, vy: 0 }
    return { vx: 0, vy: 1 }
  }
  const normalize = ({ vx, vy }: { vx: number; vy: number }) => {
    const n = Math.hypot(vx, vy) || 1
    return { vx: vx / n, vy: vy / n }
  }

  return [{ lambda: l1, ...vectorFor(l1) }, { lambda: l2, ...vectorFor(l2) }]
}

interface DrawParams {
  M: Matrix2
  t: number // 0 = identity, 1 = fully transformed
  range: number
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawParams) {
  const style = getVizStyle(w)
  const cx = w / 2, cy = h / 2
  const u = Math.min(w, h) / 2 / p.range

  // Grid
  ctx.strokeStyle = style.colors.grid
  ctx.lineWidth = 1
  for (let i = -p.range; i <= p.range; i++) {
    ctx.beginPath(); ctx.moveTo(cx + i * u, 0); ctx.lineTo(cx + i * u, h); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, cy - i * u); ctx.lineTo(w, cy - i * u); ctx.stroke()
  }

  // Axes
  ctx.strokeStyle = style.colors.text
  ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke()

  // Interpolated matrix: (1−t)·I + t·M
  const lerp = (a: number, b: number) => (1 - p.t) * a + p.t * b
  const M = {
    a: lerp(1, p.M.a), b: lerp(0, p.M.b),
    c: lerp(0, p.M.c), d: lerp(1, p.M.d),
  }
  const apply = (x: number, y: number): [number, number] => [M.a * x + M.b * y, M.c * x + M.d * y]

  // Draw transformed unit circle
  ctx.strokeStyle = 'rgba(0, 61, 165, 0.45)'
  ctx.lineWidth = 2
  ctx.beginPath()
  for (let i = 0; i <= 120; i++) {
    const theta = (i / 120) * 2 * Math.PI
    const [tx, ty] = apply(Math.cos(theta), Math.sin(theta))
    const px = cx + tx * u, py = cy - ty * u
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
  }
  ctx.stroke()

  // Draw sample grid-vectors (small arrow at each integer lattice point)
  ctx.strokeStyle = 'rgba(234, 88, 12, 0.3)'
  ctx.lineWidth = 1
  for (let gx = -2; gx <= 2; gx++) {
    for (let gy = -2; gy <= 2; gy++) {
      if (gx === 0 && gy === 0) continue
      const [tx, ty] = apply(gx, gy)
      const sx = cx + gx * u, sy = cy - gy * u
      const ex = cx + tx * u, ey = cy - ty * u
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke()
    }
  }

  // Eigenvectors (original direction, always visible; scaled by lambda on transformed side)
  const pairs = eigen(p.M)
  const colors = ['#dc2626', '#16a34a']
  pairs.forEach((pair, i) => {
    const color = colors[i] ?? '#f97316'
    // Original eigenvector (length 1.5 for visibility)
    const len = 1.8
    const ox = pair.vx * len, oy = pair.vy * len
    ctx.strokeStyle = color
    ctx.lineWidth = 2.5
    ctx.setLineDash([4, 4])
    ctx.beginPath(); ctx.moveTo(cx - ox * u, cy + oy * u); ctx.lineTo(cx + ox * u, cy - oy * u); ctx.stroke()
    ctx.setLineDash([])

    // Transformed eigenvector (λ·v)
    const [tx, ty] = apply(pair.vx, pair.vy)
    const plen = Math.hypot(tx, ty)
    const bx = cx + tx * u, by = cy - ty * u
    ctx.strokeStyle = color
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, by); ctx.stroke()
    if (plen > 0.02) {
      const ux = tx / plen, uy = ty / plen
      const hs = 8
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(bx, by)
      ctx.lineTo(bx - ux * hs + uy * hs * 0.6, by + uy * hs + ux * hs * 0.6)
      ctx.lineTo(bx - ux * hs - uy * hs * 0.6, by + uy * hs - ux * hs * 0.6)
      ctx.closePath(); ctx.fill()
    }
    // Label
    ctx.font = style.fontAnnotation
    drawLabel(ctx, `λ${i + 1} = ${pair.lambda.toFixed(2)}`, bx + 10, by, {
      align: 'left', baseline: 'middle', color, bg: true, style,
    })
  })
}

interface Props {
  initialMatrix?: Matrix2
  range?: number
}

const PRESETS: { name: string; matrix: Matrix2 }[] = [
  { name: 'Streckung',  matrix: { a: 2,   b: 0, c: 0, d: 0.5 } },
  { name: 'Scherung',   matrix: { a: 1,   b: 1, c: 0, d: 1   } },
  { name: 'Rotation+Streck.', matrix: { a: 0.8, b: 0.8, c: -0.8, d: 0.8 } },
  { name: 'Symm.',      matrix: { a: 2,   b: 1, c: 1, d: 2   } },
]

export function EigenvectorViz({ initialMatrix = PRESETS[3].matrix, range = 3 }: Props) {
  const [M, setM] = useState<Matrix2>(initialMatrix)
  const [t, setT] = useState(1)
  const canvasRef = useCanvas(draw, { M, t, range })

  const pairs = eigen(M)
  const det = M.a * M.d - M.b * M.c
  const trace = M.a + M.d
  const complex = trace * trace - 4 * det < 0

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-72 rounded-retro bg-white dark:bg-surface-900 border-2 border-ink dark:border-surface-500 shadow-hard-sm"
      />

      <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Beispielmatrix">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            type="button"
            role="radio"
            aria-checked={preset.matrix.a === M.a && preset.matrix.b === M.b && preset.matrix.c === M.c && preset.matrix.d === M.d}
            onClick={() => setM(preset.matrix)}
            className="px-2.5 h-8 border-2 border-ink rounded-retro bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono text-[11px] font-black shadow-hard-sm retro-press"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {(['a', 'b', 'c', 'd'] as const).map((k) => (
          <label key={k} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] font-bold text-ink-soft dark:text-surface-400">M.{k} = {M[k].toFixed(1)}</span>
            <input
              type="range" min={-3} max={3} step={0.1}
              value={M[k]}
              onChange={(e) => setM({ ...M, [k]: +e.target.value })}
              className="accent-primary-700"
              aria-label={`Matrix-Eintrag ${k}`}
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-1">
        <span className="font-mono text-[10px] font-bold text-orange-600 dark:text-orange-400">Animation t = {t.toFixed(2)}</span>
        <input
          type="range" min={0} max={1} step={0.01}
          value={t} onChange={(e) => setT(+e.target.value)}
          className="accent-orange-500"
          aria-label={`Interpolation von Identität zur Matrix, aktuell ${t.toFixed(2)}`}
        />
      </label>

      <div className="border-2 border-ink bg-lemon-light rounded-retro shadow-hard-sm px-3 py-2">
        <p className="font-mono text-[10px] font-black text-ink uppercase tracking-widest mb-1">
          // Eigenwerte
        </p>
        {complex ? (
          <p className="text-ink text-sm font-mono">
            Komplexe Eigenwerte (Diskriminante &lt; 0) — keine reellen Eigenvektoren.
          </p>
        ) : (
          <div className="flex gap-4 text-sm font-mono">
            {pairs.map((pair, i) => (
              <span key={i} className="num">λ{i + 1} = {pair.lambda.toFixed(3)}</span>
            ))}
          </div>
        )}
        <p className="text-ink-soft dark:text-surface-500 text-[10px] mt-1 font-mono">
          det(M) = {det.toFixed(2)}, tr(M) = {trace.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
