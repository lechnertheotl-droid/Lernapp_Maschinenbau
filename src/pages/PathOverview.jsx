import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getTopic } from '@/content/index'
import {
  getPracticeExercisesForTopic,
} from '@/content/practice/index'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import {
  buildLearningPath,
  computePathProgress,
} from '@/utils/learningPath'
import { cn } from '@/utils/cn'

const PHASE_LABEL = {
  1: 'Phase 1 — 1. Semester',
  2: 'Phase 2 — 2. Semester',
  3: 'Phase 3 — Vertiefung',
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

  const pathSteps = useMemo(() => buildLearningPath({
    topics,
    unitsByTopic: (id) => (getTopic(id)?.units ?? []).map((u, i) => ({ unitIndex: i, lessons: u.lessons ?? [] })),
    practiceCountByTopic: (id) => getPracticeExercisesForTopic(id).length,
  }), [topics])

  const pathProgress = useMemo(() => computePathProgress(pathSteps, {
    topicProgress:               state.progress.topicProgress,
    practiceAttempts:            state.practice?.attempts ?? {},
    practiceExerciseIdsByTopic:  (id) => getPracticeExercisesForTopic(id).map((ex) => ex.id),
  }), [pathSteps, state.progress.topicProgress, state.practice])

  const { steps, doneFlags, currentIndex, doneCount, totalCount } = pathProgress
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0

  const topicById = useMemo(() => Object.fromEntries(topics.map((t) => [t.id, t])), [topics])

  // Group flat step list by phase, preserve in-phase order (already mixed by buildLearningPath).
  const groupedByPhase = useMemo(() => {
    const groups = new Map() // phase -> { items: [{ step, idx }] }
    steps.forEach((step, idx) => {
      if (!groups.has(step.phase)) groups.set(step.phase, [])
      groups.get(step.phase).push({ step, idx })
    })
    return [...groups.entries()].sort((a, b) => a[0] - b[0])
  }, [steps])

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 flex flex-col gap-5">
      <Breadcrumbs items={[{ label: 'Start', to: '/' }, { label: 'Lernpfad' }]} />

      <header className="flex flex-col gap-2">
        <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Dein Lernpfad</h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm">
          Lektionen sind nach Phase und Aufbau-Tiefe gemixt: erst alle Grundlagen­lektionen
          aller Phase-1-Themen, dann alle Vertiefungen, dann die Klausurübungen der Phase.
          Danach Phase 2 und Phase 3 nach demselben Prinzip.
        </p>
        <div className="mt-2">
          <ProgressBar value={pct} size="lg" tone="primary" />
          <p className="num text-xs text-ink-soft dark:text-surface-100 mt-1">
            {doneCount}/{totalCount} Schritte · {pct}%
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-5">
        {groupedByPhase.map(([phase, items]) => {
          const phaseDone  = items.filter((it) => doneFlags[it.idx]).length
          const phaseTotal = items.length
          return (
            <section key={phase} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <h2 className="font-mono text-[11px] font-black text-ink dark:text-paper uppercase tracking-widest">
                  // {PHASE_LABEL[phase]}
                </h2>
                <span className="num font-mono text-[11px] text-ink-soft dark:text-surface-300">
                  {phaseDone}/{phaseTotal}
                </span>
              </div>

              <ul className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden divide-y divide-surface-100 dark:divide-surface-700">
                {items.map(({ step, idx }) => {
                  const done    = doneFlags[idx]
                  const current = idx === currentIndex
                  const topic   = topicById[step.topicId]
                  const onClick = step.kind === 'lesson'
                    ? () => navigate(`/topics/${step.topicId}/${step.lessonId}`)
                    : () => navigate(`/üben?topic=${encodeURIComponent(step.topicId)}`)

                  return (
                    <li key={`${step.kind}-${idx}`}>
                      <button
                        type="button"
                        onClick={onClick}
                        className={cn(
                          'w-full px-3 py-2.5 flex items-center gap-3 text-left tap-highlight-none transition-colors',
                          current
                            ? 'bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                            : 'hover:bg-surface-50 dark:hover:bg-surface-700',
                        )}
                        aria-current={current ? 'step' : undefined}
                      >
                        <span className="w-5 flex-shrink-0 text-center text-base">
                          <StatusIcon done={done} current={current} />
                        </span>
                        <TopicIcon topic={topic} size="sm" />
                        <span className="flex-1 min-w-0">
                          {step.kind === 'lesson' ? (
                            <>
                              <span className={cn(
                                'block text-sm leading-snug truncate',
                                done ? 'text-ink-soft dark:text-surface-300 line-through' : 'text-ink dark:text-paper font-bold',
                              )}>
                                {step.lessonTitle}
                              </span>
                              <span className="block font-mono text-[10px] text-ink-soft dark:text-surface-400 truncate uppercase tracking-wide">
                                {topic?.title ?? step.topicTitle}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className={cn(
                                'block text-sm leading-snug truncate',
                                done ? 'text-ink-soft dark:text-surface-300' : 'text-ink dark:text-paper font-bold',
                              )}>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-300 mr-1.5">★ Prüfung</span>
                                {step.practiceCount} Klausur­aufgabe{step.practiceCount === 1 ? '' : 'n'}
                              </span>
                              <span className="block font-mono text-[10px] text-ink-soft dark:text-surface-400 truncate uppercase tracking-wide">
                                {topic?.title ?? step.topicTitle}
                              </span>
                            </>
                          )}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>

      <div className="h-4" />
    </div>
  )
}
