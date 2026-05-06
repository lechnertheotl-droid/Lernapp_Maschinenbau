import { getLevelInfo } from '@/gamification/levels'

interface Props {
  name: string | null
  xp: number
}

export function ProfileHeader({ name, xp }: Props) {
  const info = getLevelInfo(xp)
  const initial = (name?.trim()?.charAt(0) ?? 'M').toUpperCase()
  const pct = Math.round(info.progressInLevel * 100)

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-center gap-4">
      <div
        aria-hidden
        className="w-14 h-14 rounded-retro border-2 border-ink bg-lemon flex items-center justify-center font-black text-2xl text-ink shadow-hard-sm flex-shrink-0"
      >
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest">
          // Profil
        </p>
        <h1 className="font-black text-ink dark:text-paper text-lg leading-tight truncate">
          {name?.trim() || 'Maschinenbauer:in'}
        </h1>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-wide tabular-nums whitespace-nowrap">
            LV {info.level} · {info.rank}
          </span>
        </div>
        <div className="mt-2">
          <div className="relative h-2 bg-surface-200 dark:bg-surface-700 rounded-sm overflow-hidden border border-ink/20 dark:border-surface-500">
            <div
              className="absolute left-0 top-0 bottom-0 bg-primary-700 dark:bg-primary-400"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 mt-0.5 tabular-nums">
            {info.isMaxLevel
              ? 'Max-Level erreicht'
              : `${info.xpIntoLevel}/${info.xpForNextLevel} XP zum nächsten Level`}
          </p>
        </div>
      </div>
    </div>
  )
}
