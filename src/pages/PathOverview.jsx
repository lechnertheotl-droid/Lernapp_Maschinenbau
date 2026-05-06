import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import {
  getPracticeExercisesForTopic,
  getPracticeTopicIds,
} from '@/content/practice/index'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import {
  buildLearningPath,
  computePathProgress,
} from '@/utils/learningPath'
import { getStudienbeginPhase } from '@/utils/topicGraph'
import { cn } from '@/utils/cn'

const PHASE_LABEL = {
  1: 'Phase 1 — 1. Semester',
  2: 'Phase 2 — 2. Semester',
  3: 'Phase 3 — Vertiefung',
}

function phaseOf(topicId) {
  return getStudienbeginPhase(topicId) ?? 3
}

function StatusIcon({ done, current }) {
  if (done) {
    return <span className="text-green-700 dark:text-green-400 font-mono font-black" aria-label="erledigt">✓</span>
  }
  if (current) {
    return <span className="text-primary-700 dark:text-primary-300 font-mono font-black" aria-label="aktueller Schritt">▶</span>
  }
  return <span className="text-surface-400 dark:text-surface-500 font-mono" aria-label="offen">○</span>
}

export function PathOverview() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()

  const practiceTopicIds = useMemo(() => new Set(getPracticeTopicIds()), [])

  const pathSteps = useMemo(() => buildLearningPath({
    topics,
    lessonsByTopic:        (id) => getAllLessons(id),
    practiceCountByTopic:  (id) => getPracticeExercisesForTopic(id).length,
  }), [topics])

  const pathProgress = useMemo(() => computePathProgress(pathSteps, {
    topicProgress:               state.progress.topicProgress,
    practiceAttempts:            state.practice?.attempts ?? {},
    practiceExerciseIdsByTopic:  (id) => getPracticeExercisesForTopic(id).map((ex) => ex.id),
  }), [pathSteps, state.progress.topicProgress, state.practice])

  const { steps, doneFlags, currentIndex, doneCount, totalCount } = pathProgress
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0

  // Group steps by topic, in path order
  const groupedByTopic = useMemo(() => {
    const groups = []
    let currentGroup = null
    steps.forEach((step, idx) => {
      if (!currentGroup || currentGroup.topicId !== step.topicId) {
        currentGroup = { topicId: step.topicId, topicTitle: step.topicTitle, items: [] }
        groups.push(currentGroup)
      }
      currentGroup.items.push({ step, idx })
    })
    return groups
  }, [steps])

  const titleById = useMemo(() => Object.fromEntries(topics.map((t) => [t.id, t])), [topics])

  // Phase divider tracking
  let lastPhase = null

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5">
      <Breadcrumbs items={[{ label: 'Start', to: '/' }, { label: 'Lernpfad' }]} />

      <header className="flex flex-col gap-2">
        <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Dein Lernpfad</h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm">
          Alle Topics in empfohlener Reihenfolge. Pro Topic erst alle Lektionen,
          danach die zugehörige Prüfungsübung.
        </p>
        <div className="mt-2">
          <ProgressBar value={pct} size="lg" tone="primary" />
          <p className="num text-xs text-ink-soft dark:text-surface-100 mt-1">
            {doneCount}/{totalCount} Schritte · {pct}%
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {groupedByTopic.map((group) => {
          const topic = titleById[group.topicId]
          const phase = phaseOf(group.topicId)
          const showPhaseDivider = phase !== lastPhase
          lastPhase = phase

          return (
            <div key={group.topicId} className="flex flex-col gap-2">
              {showPhaseDivider && (
                <div className="font-mono text-[11px] font-black text-ink dark:text-paper uppercase tracking-widest pt-2">
                  // {PHASE_LABEL[phase]}
                </div>
              )}

              <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden">
                {/* Topic-Header */}
                <button
                  type="button"
                  onClick={() => navigate(`/topics/${group.topicId}`)}
                  className="w-full px-4 py-3 flex items-center gap-3 retro-press tap-highlight-none border-b border-surface-200 dark:border-surface-700 text-left"
                >
                  <TopicIcon topic={topic} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-ink dark:text-paper text-sm leading-snug">
                      {topic?.title ?? group.topicTitle}
                    </p>
                    <p className="text-[11px] text-ink-soft dark:text-surface-300 mt-0.5">
                      {group.items.filter((it) => doneFlags[it.idx]).length}/{group.items.length} Schritte erledigt
                    </p>
                  </div>
                  <span className="font-mono font-black text-ink dark:text-paper text-lg" aria-hidden>›</span>
                </button>

                {/* Step-Liste */}
                <ul className="divide-y divide-surface-100 dark:divide-surface-700">
                  {group.items.map(({ step, idx }) => {
                    const done    = doneFlags[idx]
                    const current = idx === currentIndex
                    const onClick = step.kind === 'lesson'
                      ? () => navigate(`/topics/${step.topicId}/${step.lessonId}`)
                      : () => navigate(`/üben?topic=${encodeURIComponent(step.topicId)}`)

                    return (
                      <li key={`${step.kind}-${idx}`}>
                        <button
                          type="button"
                          onClick={onClick}
                          className={cn(
                            'w-full px-4 py-2.5 flex items-center gap-3 text-left tap-highlight-none transition-colors',
                            current
                              ? 'bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                              : 'hover:bg-surface-50 dark:hover:bg-surface-700',
                          )}
                          aria-current={current ? 'step' : undefined}
                        >
                          <span className="w-5 flex-shrink-0 text-center text-base">
                            <StatusIcon done={done} current={current} />
                          </span>
                          <span className="flex-1 min-w-0">
                            {step.kind === 'lesson' ? (
                              <span className={cn(
                                'block text-sm leading-snug truncate',
                                done
                                  ? 'text-ink-soft dark:text-surface-300 line-through'
                                  : 'text-ink dark:text-paper font-bold',
                              )}>
                                {step.lessonTitle}
                              </span>
                            ) : (
                              <span className={cn(
                                'block text-sm leading-snug truncate',
                                done
                                  ? 'text-ink-soft dark:text-surface-300'
                                  : 'text-ink dark:text-paper font-bold',
                              )}>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-300 mr-1.5">★ Prüfung</span>
                                {step.practiceCount} Klausuraufgabe{step.practiceCount === 1 ? '' : 'n'}
                              </span>
                            )}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="h-4" />
    </div>
  )
}
