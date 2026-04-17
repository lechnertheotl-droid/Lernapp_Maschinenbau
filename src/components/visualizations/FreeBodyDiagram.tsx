import { useRef, useState, useEffect, useCallback } from 'react'
import { useCanvas } from './useCanvas'
import { getVizStyle, drawLabel } from './vizStyle'

export interface TargetForce {
  /** Anchor point on body in body-local coords (x: 0..1, y: 0..1). Falls `null`, zentriert. */
  at?: { x: number; y: number } | null
  /** Direction vector (normalized). y points DOWN (screen) — use negative y for upward. */
  dir: { x: number; y: number }
  magnitude: number
  name: string
}

interface UserForce {
  id: number
  anchorX: number
  anchorY: number
  endX: number
  endY: number
}

type BodyKind = 'block' | 'beam'

interface Props {
  body?: BodyKind
  /** Vorgegebene Ziel-Lösung */
  target: TargetForce[]
  /** Wie viele Pfeile der Nutzer zeichnen darf */
  maxUserForces?: number
  /** Toleranz für Richtungs-Cosinus (Dot-Produkt auf normalisierten Vektoren) */
  angleTolerance?: number
  /** Toleranz für Magnitude-Verhältnis (relativ) */
  magnitudeTolerance?: number
}

interface MatchResult {
  matched: { targetIdx: number; userIdx: number }[]
  missing: number[]  // target indices without match
  extra: number[]    // user indices without match
  feedback: string[]
}

/** Hungarian-lite: greedy best-match by similarity. Good enough for ≤ 5 vectors. */
function matchForces(
  user: UserForce[],
  targets: TargetForce[],
  w: number, h: number,
  angleTol: number,
  magTol: number
): MatchResult {
  const result: MatchResult = { matched: [], missing: [], extra: [], feedback: [] }

  // Convert user forces to (dir, magnitude)
  const userVec = user.map((u) => {
    const dx = u.endX - u.anchorX
    const dy = u.endY - u.anchorY
    const len = Math.hypot(dx, dy)
    return {
      dir: len > 0 ? { x: dx / len, y: dy / len } : { x: 0, y: 0 },
      magnitude: len,
      anchor: { x: u.anchorX, y: u.anchorY },
    }
  })

  // Scale factor — user drew at pixel scale; targets are relative magnitudes.
  // Use the largest user arrow as reference for the largest target.
  const maxUser = Math.max(0.1, ...userVec.map((v) => v.magnitude))
  const maxTarget = Math.max(0.1, ...targets.map((t) => t.magnitude))
  const scale = maxUser / maxTarget

  const usedUser = new Set<number>()
  const usedTarget = new Set<number>()

  // Score every (user, target) pair
  const scores: { u: number; t: number; score: number; dirOk: boolean; magOk: boolean }[] = []
  for (let ui = 0; ui < userVec.length; ui++) {
    for (let ti = 0; ti < targets.length; ti++) {
      const uv = userVec[ui]
      const tv = targets[ti]
      const dot = uv.dir.x * tv.dir.x + uv.dir.y * tv.dir.y // positive when aligned
      const expectedLen = tv.magnitude * scale
      const magRatio = uv.magnitude / Math.max(0.001, expectedLen)
      const magOk = Math.abs(magRatio - 1) <= magTol
      const dirOk = dot >= 1 - angleTol
      // Combined score: direction dominates
      const score = dot * 2 + (magOk ? 0.5 : 0) + (dirOk ? 0.5 : 0)
      scores.push({ u: ui, t: ti, score, dirOk, magOk })
    }
  }
  scores.sort((a, b) => b.score - a.score)

  for (const s of scores) {
    if (usedUser.has(s.u) || usedTarget.has(s.t)) continue
    if (!s.dirOk) continue
    usedUser.add(s.u)
    usedTarget.add(s.t)
    result.matched.push({ targetIdx: s.t, userIdx: s.u })
    if (!s.magOk) {
      const expected = targets[s.t].magnitude * scale
      const ratio = userVec[s.u].magnitude / expected
      const direction = ratio < 1 ? 'zu klein' : 'zu groß'
      result.feedback.push(`${targets[s.t].name}: Richtung stimmt, Betrag ${direction} (Faktor ${ratio.toFixed(1)})`)
    }
  }

  for (let ti = 0; ti < targets.length; ti++) {
    if (!usedTarget.has(ti)) {
      result.missing.push(ti)
      result.feedback.push(`Es fehlt: ${targets[ti].name}`)
    }
  }
  for (let ui = 0; ui < user.length; ui++) {
    if (!usedUser.has(ui)) {
      result.extra.push(ui)
      result.feedback.push(`Überflüssiger Pfeil Nr. ${ui + 1} (oder Richtung unklar)`)
    }
  }

  void w; void h
  return result
}

function drawBody(ctx: CanvasRenderingContext2D, w: number, h: number, kind: BodyKind) {
  const cx = w / 2, cy = h / 2
  ctx.save()
  if (kind === 'block') {
    const size = Math.min(100, Math.min(w, h) * 0.25)
    ctx.fillStyle = '#e2e8f0'
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.rect(cx - size / 2, cy - size / 2, size, size); ctx.fill(); ctx.stroke()

    // Ground hatch below
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 1
    for (let i = 0; i < 10; i++) {
      ctx.beginPath()
      ctx.moveTo(cx - size / 2 - 20 + i * 16, cy + size / 2 + 4)
      ctx.lineTo(cx - size / 2 - 28 + i * 16, cy + size / 2 + 14)
      ctx.stroke()
    }
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(cx - size / 2 - 20, cy + size / 2)
    ctx.lineTo(cx + size / 2 + 20, cy + size / 2)
    ctx.stroke()
  } else {
    const length = Math.min(w * 0.65, 320)
    const height = 14
    ctx.fillStyle = '#e2e8f0'
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.rect(cx - length / 2, cy - height / 2, length, height); ctx.fill(); ctx.stroke()
    // Pin support left
    ctx.fillStyle = '#3b82f6'
    ctx.beginPath()
    ctx.moveTo(cx - length / 2, cy + height / 2)
    ctx.lineTo(cx - length / 2 - 12, cy + height / 2 + 18)
    ctx.lineTo(cx - length / 2 + 12, cy + height / 2 + 18)
    ctx.closePath(); ctx.fill(); ctx.stroke()
    // Roller right
    ctx.fillStyle = '#ef4444'
    ctx.beginPath()
    ctx.moveTo(cx + length / 2, cy + height / 2)
    ctx.lineTo(cx + length / 2 - 10, cy + height / 2 + 14)
    ctx.lineTo(cx + length / 2 + 10, cy + height / 2 + 14)
    ctx.closePath(); ctx.fill(); ctx.stroke()
    ctx.beginPath(); ctx.arc(cx + length / 2, cy + height / 2 + 18, 4, 0, Math.PI * 2); ctx.stroke()
  }
  ctx.restore()
}

function drawUserArrow(ctx: CanvasRenderingContext2D, f: UserForce, color: string) {
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(f.anchorX, f.anchorY); ctx.lineTo(f.endX, f.endY); ctx.stroke()
  const dx = f.endX - f.anchorX, dy = f.endY - f.anchorY
  const len = Math.hypot(dx, dy)
  if (len < 6) return
  const ux = dx / len, uy = dy / len
  const hs = 9
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(f.endX, f.endY)
  ctx.lineTo(f.endX - ux * hs - uy * hs * 0.6, f.endY - uy * hs + ux * hs * 0.6)
  ctx.lineTo(f.endX - ux * hs + uy * hs * 0.6, f.endY - uy * hs - ux * hs * 0.6)
  ctx.closePath(); ctx.fill()
  // Anchor dot
  ctx.beginPath(); ctx.arc(f.anchorX, f.anchorY, 4, 0, Math.PI * 2); ctx.fill()
}

interface DrawState {
  body: BodyKind
  forces: UserForce[]
  inProgress: UserForce | null
  checked: boolean
  matched: number[]
  missingNames: string[]
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, p: DrawState) {
  const style = getVizStyle(w)
  drawBody(ctx, w, h, p.body)
  for (let i = 0; i < p.forces.length; i++) {
    const f = p.forces[i]
    const color =
      p.checked && p.matched.includes(i) ? '#16a34a' :
      p.checked ? '#dc2626' : '#0ea5e9'
    drawUserArrow(ctx, f, color)
    ctx.font = style.fontAnnotation
    // Label etwas weiter weg vom Pfeilende, damit es nicht vom Pfeilkopf verdeckt wird,
    // und mit halbtransparentem Hintergrund, damit Zahlen lesbar bleiben.
    const dx = f.endX - f.anchorX
    const dy = f.endY - f.anchorY
    const len = Math.max(1, Math.hypot(dx, dy))
    const nx = dx / len
    const ny = dy / len
    const lx = Math.max(4, Math.min(w - 4, f.endX + nx * 14 + 4))
    const ly = Math.max(8, Math.min(h - 4, f.endY + ny * 14))
    drawLabel(ctx, `F${i + 1}`, lx, ly, {
      align: 'left', baseline: 'middle', color, bg: true, style,
    })
  }
  if (p.inProgress) {
    drawUserArrow(ctx, p.inProgress, '#94a3b8')
  }
}

export function FreeBodyDiagram({
  body = 'block',
  target,
  maxUserForces = 4,
  angleTolerance = 0.15, // ≈ 32° cone
  magnitudeTolerance = 0.4,
}: Props) {
  const [forces, setForces] = useState<UserForce[]>([])
  const [inProgress, setInProgress] = useState<UserForce | null>(null)
  const [checked, setChecked] = useState<MatchResult | null>(null)
  const nextIdRef = useRef(0)

  const canvasRef = useCanvas(draw, {
    body,
    forces,
    inProgress,
    checked: !!checked,
    matched: checked ? checked.matched.map((m) => m.userIdx) : [],
    missingNames: checked ? checked.missing.map((i) => target[i].name) : [],
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const getPos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      return { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onDown = (e: PointerEvent) => {
      if (checked) return
      if (forces.length >= maxUserForces) return
      const p = getPos(e)
      setInProgress({ id: nextIdRef.current++, anchorX: p.x, anchorY: p.y, endX: p.x, endY: p.y })
      canvas.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!inProgress) return
      const p = getPos(e)
      setInProgress((prev) => (prev ? { ...prev, endX: p.x, endY: p.y } : null))
    }
    const onUp = (e: PointerEvent) => {
      if (!inProgress) return
      const len = Math.hypot(inProgress.endX - inProgress.anchorX, inProgress.endY - inProgress.anchorY)
      if (len >= 12) {
        setForces((arr) => [...arr, inProgress])
      }
      setInProgress(null)
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
  }, [canvasRef, forces, inProgress, checked, maxUserForces])

  const onCheck = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    setChecked(matchForces(forces, target, rect.width, rect.height, angleTolerance, magnitudeTolerance))
  }, [forces, target, angleTolerance, magnitudeTolerance, canvasRef])

  const onUndo = useCallback(() => {
    if (checked) setChecked(null)
    else setForces((arr) => arr.slice(0, -1))
  }, [checked])

  const onReset = useCallback(() => {
    setForces([])
    setChecked(null)
    setInProgress(null)
  }, [])

  const allMatched = checked && checked.missing.length === 0 && checked.extra.length === 0 && checked.feedback.length === 0

  return (
    <div className="flex flex-col gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-72 rounded-retro bg-white dark:bg-surface-800 border-2 border-ink shadow-hard-sm cursor-crosshair touch-none"
      />

      <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 text-center">
        Ziehe mit der Maus Kraftpfeile auf den Körper — Startpunkt = Angriffspunkt, Richtung und Länge = Kraft.
        <br />
        {forces.length}/{maxUserForces} Pfeile gezeichnet.
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCheck}
          disabled={forces.length === 0 || !!checked}
          className="flex-1 h-11 bg-primary-700 dark:bg-primary-400 dark:text-ink text-white font-mono font-black text-xs uppercase tracking-wider rounded-retro border-2 border-ink shadow-hard-sm retro-press disabled:opacity-40"
        >
          Prüfen
        </button>
        <button
          type="button"
          onClick={onUndo}
          disabled={forces.length === 0 && !checked}
          className="flex-1 h-11 bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono font-black text-xs uppercase tracking-wider rounded-retro border-2 border-ink shadow-hard-sm retro-press disabled:opacity-40"
        >
          {checked ? 'Wieder bearbeiten' : 'Letzten entfernen'}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="flex-1 h-11 bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono font-black text-xs uppercase tracking-wider rounded-retro border-2 border-ink shadow-hard-sm retro-press"
        >
          Neu
        </button>
      </div>

      {checked && (
        <div
          className={`border-2 rounded-retro shadow-hard-sm p-3 ${
            allMatched
              ? 'bg-green-50 dark:bg-green-950/40 border-green-700'
              : 'bg-red-50 dark:bg-red-950/40 border-red-700'
          }`}
        >
          <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-2">
            {allMatched ? '// Alle Kräfte korrekt!' : '// Rückmeldung'}
          </p>
          {allMatched ? (
            <p className="text-sm text-green-900 dark:text-green-200">
              Freikörperbild vollständig: {target.map((t) => t.name).join(', ')}.
            </p>
          ) : (
            <ul className="text-sm text-ink dark:text-paper space-y-1">
              {checked.feedback.map((msg, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden>·</span>
                  <span>{msg}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
