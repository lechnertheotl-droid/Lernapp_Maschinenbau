import { Link, useNavigate } from 'react-router-dom'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StreakBadge } from '@/components/ui/StreakBadge'
import { LevelIndicator } from '@/components/gamification/LevelIndicator'
import { useAppState } from '@/context/AppContext'

function findTopic(topics, topicId) {
  return topics.find((t) => t.id === topicId) ?? null
}

export function PathCard({ topics, pathProgress, streak, totalCompletedLessons }) {
  const appState = useAppState()
  const xp = appState.gamification.xp
  const freezes = appState.gamification.streakFreezes
  const navigate = useNavigate()
  const { steps, currentIndex, doneCount, totalCount } = pathProgress
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0
  const current = currentIndex >= 0 ? steps[currentIndex] : null
  const topic = current ? findTopic(topics, current.topicId) : null

  const showStreak  = (streak?.current ?? 0) > 0
  const showCounter = (totalCompletedLessons ?? 0) > 0

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">
      {/* Header: Pfad-Label + Level/Streak/Counter rechts */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-2 border-b border-surface-200 dark:border-surface-700">
        <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest">
          // Dein Lernpfad
        </p>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <LevelIndicator xp={xp} size="sm" href="/profil" />
          {showStreak && (
            <Link to="/erfolge" aria-label="Erfolge ansehen">
              <StreakBadge current={streak.current} longest={streak.longest} freezes={freezes} size="sm" />
            </Link>
          )}
          {showCounter && (
            <Link
              to="/erfolge"
              className="flex items-baseline gap-1 bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon px-2 py-1 retro-press"
              aria-label={`${totalCompletedLessons} Lektionen abgeschlossen`}
            >
              <span className="num text-sm font-black text-ink leading-none">{totalCompletedLessons}</span>
              <span className="font-mono text-[9px] font-bold text-ink-soft uppercase tracking-wide">Lekt.</span>
            </Link>
          )}
        </div>
      </div>

      {/* Body: aktueller Step ODER Done-State */}
      {current ? (
        <div className="px-4 pt-3 pb-3 flex items-start gap-3">
          <TopicIcon topic={topic} size="md" />
          <div className="flex-1 min-w-0">
            {current.kind === 'lesson' ? (
              <>
                <p className="text-[11px] font-mono text-ink-soft dark:text-surface-300 uppercase tracking-wide">{topic?.title}</p>
                <p className="font-black text-ink dark:text-paper text-sm leading-snug mt-0.5">
                  {current.lessonTitle}
                </p>
              </>
            ) : (
              <>
                <p className="text-[11px] font-mono text-ink-soft dark:text-surface-300 uppercase tracking-wide">{topic?.title}</p>
                <p className="font-black text-ink dark:text-paper text-sm leading-snug mt-0.5">
                  Prüfungsübung — {current.practiceCount} Aufgabe{current.practiceCount === 1 ? '' : 'n'}
                </p>
              </>
            )}
            <ProgressBar value={pct} size="md" tone="primary" className="mt-2.5" />
            <p className="num text-[11px] text-ink-soft dark:text-surface-100 mt-1">
              {doneCount}/{totalCount} Schritte · {pct}%
            </p>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-3 pb-3 flex items-start gap-3 bg-green-50 dark:bg-green-900/20">
          <span className="text-2xl flex-shrink-0" aria-hidden>🎉</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-ink dark:text-paper text-sm leading-snug">
              Pfad abgeschlossen
            </p>
            <p className="text-ink-soft dark:text-surface-100 text-xs mt-1">
              Alle {totalCount} Schritte aus Lektionen und Prüfungsübungen geschafft.
            </p>
          </div>
        </div>
      )}

      {/* Primärer CTA */}
      {current && (
        <button
          onClick={() => {
            if (current.kind === 'lesson') {
              navigate(`/topics/${current.topicId}/${current.lessonId}`)
            } else {
              navigate(`/üben?topic=${encodeURIComponent(current.topicId)}`)
            }
          }}
          className="w-full py-3 bg-primary-700 text-lemon font-mono font-black text-xs uppercase tracking-widest hover:bg-primary-800 transition-colors tap-highlight-none border-t-2 border-ink"
        >
          {current.kind === 'lesson' ? 'Weiter lernen →' : 'Prüfungsübung starten →'}
        </button>
      )}

      {/* Sekundär: Pfad-Übersicht */}
      <Link
        to="/pfad"
        className="block w-full py-2.5 text-center bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors tap-highlight-none border-t border-surface-200 dark:border-surface-700"
      >
        Ganzen Pfad ansehen →
      </Link>
    </div>
  )
}
