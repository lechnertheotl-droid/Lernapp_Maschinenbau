import { useMemo } from 'react'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { StreakBadge } from '@/components/ui/StreakBadge'
import { computeBadges } from '@/utils/badges'

export function Achievements() {
  const state = useAppState()

  const stats = useMemo(() => {
    const topics = getAllTopics()
    const completedLessonsTotal = Object.values(state.progress.topicProgress)
      .flatMap((tp) => tp.completedLessons ?? []).length

    const correctAnswersTotal = Object.values(state.exercises ?? {})
      .reduce((sum, ex) => sum + (ex.attempts ?? []).filter((a) => a.correct).length, 0)

    const completedTopicIds = topics
      .filter((topic) => {
        const done = state.progress.topicProgress[topic.id]?.completedLessons?.length ?? 0
        const total = getAllLessons(topic.id).length
        return total > 0 && done >= total
      })
      .map((t) => t.id)

    return {
      completedLessonsTotal,
      correctAnswersTotal,
      streakLongest: state.streak?.longest ?? 0,
      streakCurrent: state.streak?.current ?? 0,
      completedTopicIds,
      points: state.points ?? 0,
    }
  }, [state])

  const badges = useMemo(() => computeBadges(stats), [stats])
  const earned = badges.filter((b) => b.earned)
  const locked = badges.filter((b) => !b.earned)

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[{ label: 'Dashboard', to: '/' }, { label: 'Erfolge' }]} />

      <header>
        <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Erfolge</h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
          {earned.length}/{badges.length} Badges freigeschaltet
        </p>
      </header>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
        <StatTile label="Punkte" value={String(stats.points)} />
        <StatTile label="Lektionen" value={String(stats.completedLessonsTotal)} />
        <StatTile label="Richtig" value={String(stats.correctAnswersTotal)} />
        <div className="col-span-2 xs:col-span-1 flex items-center justify-center">
          <StreakBadge current={stats.streakCurrent} longest={stats.streakLongest} size="lg" />
        </div>
      </div>

      {/* Earned badges */}
      {earned.length > 0 && (
        <section>
          <h2 className="font-mono text-[11px] font-black text-ink dark:text-paper uppercase tracking-widest mb-3">
            // Freigeschaltet
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
            {earned.map((b) => (
              <BadgeCard key={b.id} badge={b} />
            ))}
          </div>
        </section>
      )}

      {/* Locked badges */}
      {locked.length > 0 && (
        <section>
          <h2 className="font-mono text-[11px] font-black text-ink-soft dark:text-surface-400 uppercase tracking-widest mb-3">
            // In Reichweite
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
            {locked.map((b) => (
              <BadgeCard key={b.id} badge={b} />
            ))}
          </div>
        </section>
      )}
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

function BadgeCard({ badge }) {
  return (
    <div
      className={`border-2 rounded-retro shadow-hard-sm p-3 flex items-center gap-3 ${
        badge.earned
          ? 'bg-lemon-light border-ink'
          : 'bg-surface-100 dark:bg-surface-800 border-surface-300 dark:border-surface-600 opacity-60'
      }`}
    >
      <span className={`text-2xl flex-shrink-0 ${badge.earned ? '' : 'grayscale'}`} aria-hidden>
        {badge.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-black text-ink dark:text-paper text-sm leading-tight">{badge.title}</p>
        <p className="text-ink-soft dark:text-surface-400 text-[11px] leading-snug">{badge.description}</p>
      </div>
      {badge.earned && (
        <span className="font-mono font-black text-green-700 dark:text-green-300 text-lg" aria-hidden>✓</span>
      )}
    </div>
  )
}
