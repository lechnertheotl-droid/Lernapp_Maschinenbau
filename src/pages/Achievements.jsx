import { useMemo } from 'react'
import { useAppState } from '@/context/AppContext'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { StreakBadge } from '@/components/ui/StreakBadge'
import { LevelIndicator } from '@/components/gamification/LevelIndicator'
import {
  getAllAchievements,
  isAchievementEarned,
  getAchievementProgress,
} from '@/gamification/achievements'
import { buildAchievementContext, getTopicMasterSeeds } from '@/gamification/achievementContext'

const CATEGORY_LABELS = {
  mengen:        '// Mengen',
  streaks:       '// Streaks',
  quality:       '// Qualität',
  'topic-master':'// Topic-Master',
  spezial:       '// Spezial',
}

const CATEGORY_ORDER = ['mengen', 'streaks', 'quality', 'topic-master', 'spezial']

export function Achievements() {
  const state = useAppState()

  const ctx = useMemo(() => buildAchievementContext(state), [state])
  const allDefs = useMemo(() => getAllAchievements(getTopicMasterSeeds()), [])

  const completedLessonsTotal = ctx.lessonsCompletedTotal
  const correctAnswersTotal   = ctx.correctAnswersTotal

  const byCategory = useMemo(() => {
    const groups = {}
    for (const cat of CATEGORY_ORDER) groups[cat] = []
    for (const def of allDefs) {
      const earned = isAchievementEarned(def, ctx)
      const progress = getAchievementProgress(def, ctx)
      const list = groups[def.category] ?? (groups[def.category] = [])
      list.push({ def, earned, progress })
    }
    // pro Kategorie: earned-first, dann nach Target
    for (const cat of Object.keys(groups)) {
      groups[cat].sort((a, b) => {
        if (a.earned !== b.earned) return a.earned ? -1 : 1
        return a.def.target - b.def.target
      })
    }
    return groups
  }, [allDefs, ctx])

  const totalEarned = useMemo(() =>
    allDefs.filter((d) => isAchievementEarned(d, ctx)).length,
  [allDefs, ctx])

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[{ label: 'Dashboard', to: '/' }, { label: 'Erfolge' }]} />

      <header className="flex items-center justify-between gap-2">
        <div>
          <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Erfolge</h1>
          <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
            {totalEarned}/{allDefs.length} freigeschaltet
          </p>
        </div>
        <LevelIndicator xp={state.gamification.xp} size="md" href="/profil" />
      </header>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
        <StatTile label="XP" value={String(state.gamification.xp)} />
        <StatTile label="Lektionen" value={String(completedLessonsTotal)} />
        <StatTile label="Richtig" value={String(correctAnswersTotal)} />
        <div className="col-span-2 xs:col-span-1 flex items-center justify-center">
          <StreakBadge
            current={state.streak?.current ?? 0}
            longest={state.streak?.longest ?? 0}
            freezes={state.gamification.streakFreezes}
            size="lg"
          />
        </div>
      </div>

      {/* Kategorisierte Achievement-Liste */}
      {CATEGORY_ORDER.map((cat) => {
        const items = byCategory[cat] ?? []
        if (items.length === 0) return null
        return (
          <section key={cat}>
            <h2 className="font-mono text-[11px] font-black text-ink dark:text-paper uppercase tracking-widest mb-3">
              {CATEGORY_LABELS[cat]}
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              {items.map(({ def, earned, progress }) => (
                <AchievementCard key={def.id} def={def} earned={earned} progress={progress} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function StatTile({ label, value }) {
  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm px-3 py-2 flex flex-col items-center justify-center min-h-[68px]">
      <span className="num text-2xl font-black text-primary-700 dark:text-primary-300 leading-tight">{value}</span>
      <span className="font-mono text-[9px] font-black uppercase tracking-wider text-ink-soft dark:text-surface-400 mt-0.5">
        {label}
      </span>
    </div>
  )
}

function AchievementCard({ def, earned, progress }) {
  const showProgress = !earned && def.target > 1
  const pct = def.target > 0 ? Math.min(100, Math.round((progress / def.target) * 100)) : 0
  return (
    <div
      className={[
        'border-2 rounded-retro shadow-hard-sm p-3 flex items-start gap-3',
        earned
          ? 'bg-lemon-light border-ink'
          : 'bg-white dark:bg-surface-800 border-surface-300 dark:border-surface-600',
      ].join(' ')}
    >
      <span
        className={['text-2xl flex-shrink-0 leading-none', earned ? '' : 'opacity-40'].join(' ')}
        aria-hidden
      >
        {def.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className={['font-black text-sm leading-tight', earned ? 'text-ink' : 'text-ink dark:text-paper'].join(' ')}>
          {def.title}
        </p>
        <p className={['text-[11px] leading-snug mt-0.5', earned ? 'text-ink-soft' : 'text-ink-soft dark:text-surface-400'].join(' ')}>
          {def.description}
        </p>
        {showProgress && (
          <div className="mt-1.5">
            <div className="relative h-1.5 bg-surface-200 dark:bg-surface-700 rounded-sm overflow-hidden border border-ink/20 dark:border-surface-500">
              <div
                className="absolute left-0 top-0 bottom-0 bg-primary-700 dark:bg-primary-400"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="font-mono text-[9px] text-ink-soft dark:text-surface-400 mt-0.5 tabular-nums">
              {progress}/{def.target}
            </p>
          </div>
        )}
      </div>
      {earned && (
        <span className="font-mono font-black text-green-700 dark:text-green-300 text-lg flex-shrink-0" aria-hidden>✓</span>
      )}
    </div>
  )
}
