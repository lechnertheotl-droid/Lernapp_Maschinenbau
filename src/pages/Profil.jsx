import { useMemo } from 'react'
import { useAppState } from '@/context/AppContext'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProfileHeader } from '@/components/gamification/ProfileHeader'
import { StreakHeatmap } from '@/components/gamification/StreakHeatmap'
import { TopicAccuracyChart } from '@/components/gamification/TopicAccuracyChart'
import { WeeklyRecapCard } from '@/components/gamification/WeeklyRecapCard'
import { StreakBadge } from '@/components/ui/StreakBadge'

export function Profil() {
  const state = useAppState()

  const stats = useMemo(() => {
    const lessonsCompletedTotal = Object.values(state.progress.topicProgress)
      .flatMap((tp) => tp.completedLessons ?? []).length
    const correctAnswersTotal = Object.values(state.exercises ?? {})
      .reduce((sum, ex) => sum + (ex.attempts ?? []).filter((a) => a.correct).length, 0)
    return {
      lessonsCompletedTotal,
      correctAnswersTotal,
      xp: state.gamification.xp,
      streakLongest: state.streak?.longest ?? 0,
      longestCombo: state.gamification.longestCombo,
    }
  }, [state])

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[{ label: 'Start', to: '/' }, { label: 'Mehr', to: '/mehr' }, { label: 'Profil' }]} />

      <ProfileHeader name={state.user?.name ?? null} xp={state.gamification.xp} />

      <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
        <StatTile label="XP" value={String(stats.xp)} />
        <StatTile label="Lektionen" value={String(stats.lessonsCompletedTotal)} />
        <StatTile label="Richtig" value={String(stats.correctAnswersTotal)} />
        <StatTile label="Längste Combo" value={String(stats.longestCombo)} />
      </div>

      <div className="flex items-center justify-center">
        <StreakBadge
          current={state.streak?.current ?? 0}
          longest={state.streak?.longest ?? 0}
          freezes={state.gamification.streakFreezes}
          size="lg"
        />
      </div>

      <StreakHeatmap state={state} days={90} />
      <TopicAccuracyChart state={state} />
      <WeeklyRecapCard state={state} />
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
