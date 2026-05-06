// Combo-Pin in der Aufgaben-Header-Leiste. Erscheint erst ab combo ≥ 5.
// Bei Milestones (5, 10, 20) kurz pulsen.

import { isComboMilestone, getComboMultiplier } from '@/gamification/xpFormula'

interface Props {
  combo: number
  pulse?: boolean
}

export function ComboBadge({ combo, pulse = false }: Props) {
  if (combo < 5) return null
  const mult = getComboMultiplier(combo)
  const milestone = isComboMilestone(combo)
  return (
    <span
      role="status"
      aria-label={`Aktuelle Combo ${combo} — XP-Multiplikator ${mult}-fach`}
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5',
        'border-2 border-ink rounded-retro shadow-hard-sm',
        'bg-lemon dark:bg-lemon',
        'font-mono text-[10px] font-black text-ink whitespace-nowrap',
        pulse && milestone ? 'motion-safe:animate-combo-pulse' : '',
      ].filter(Boolean).join(' ')}
    >
      <span aria-hidden>🔥</span>
      <span className="tabular-nums">×{combo}</span>
      <span className="opacity-60" aria-hidden>·</span>
      <span className="tabular-nums">{mult.toFixed(1)}× XP</span>
    </span>
  )
}
