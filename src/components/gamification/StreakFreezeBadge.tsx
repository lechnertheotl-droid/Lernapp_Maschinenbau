// Schild-Icon mit Count, sichtbar wenn ≥1 Freeze verfügbar. Subtil — kein knallendes Lemon.

interface Props {
  count: number
}

export function StreakFreezeBadge({ count }: Props) {
  if (count <= 0) return null
  return (
    <span
      role="img"
      aria-label={`${count} Streak-Schutzschild${count === 1 ? '' : 'e'} verfügbar`}
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-retro border-2 border-ink bg-white dark:bg-surface-800 shadow-hard-sm font-mono text-[10px] font-black text-ink dark:text-paper"
    >
      <span aria-hidden>🛡</span>
      <span className="tabular-nums">{count}</span>
    </span>
  )
}
