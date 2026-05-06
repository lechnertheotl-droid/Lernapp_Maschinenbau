import { useMemo, useState } from 'react'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getTopic } from '@/content/index'
import { getPracticeExercisesForTopic } from '@/content/practice/index'
import { TopicGrid } from '@/components/topics/TopicGrid'
import { TopicSearchAndFilter } from '@/components/topics/TopicSearchAndFilter'
import { PathCard } from '@/components/path/PathCard'
import { DailyQuestsCard } from '@/components/gamification/DailyQuestsCard'
import { buildLearningPath, computePathProgress } from '@/utils/learningPath'
import { topicLevelOf } from '@/utils/topicLevels'

export function Dashboard() {
  const state  = useAppState()
  const topics = getAllTopics()

  const [query, setQuery]   = useState('')
  const [filter, setFilter] = useState('grundlagen') // 'grundlagen' | 'all'

  const totalCompleted = Object.values(state.progress.topicProgress)
    .flatMap((tp) => tp.completedLessons ?? []).length

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

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase()
    const afterSearch = !q
      ? topics
      : topics.filter((topic) => {
          if (topic.title.toLowerCase().includes(q)) return true
          if (topic.description?.toLowerCase().includes(q)) return true
          const lessonTitles = (topic.units ?? []).flatMap((u) => (u.lessons ?? []).map((l) => l.title?.toLowerCase() ?? ''))
          return lessonTitles.some((t) => t.includes(q))
        })
    if (filter === 'grundlagen') {
      return afterSearch.filter((t) => topicLevelOf(t) === 'grundlagen')
    }
    return afterSearch
  }, [topics, query, filter])

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-2 flex flex-col gap-5">

      {/* ── Pfad-Karte (Hauptaktion) ─────────────────────────────── */}
      <PathCard
        topics={topics}
        pathProgress={pathProgress}
        streak={state.streak}
        totalCompletedLessons={totalCompleted}
      />

      {/* ── Tages-/Wochen-Quests ─────────────────────────────────── */}
      <DailyQuestsCard />

      {/* ── Themen: Suche + Filter + Grid ────────────────────────── */}
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-mono font-black text-[11px] text-ink-soft dark:text-surface-100 uppercase tracking-widest">
            // Themenbereiche
          </h2>
        </div>

        <div className="mb-4">
          <TopicSearchAndFilter
            query={query}      setQuery={setQuery}
            filter={filter}    setFilter={setFilter}
            resultCount={filteredTopics.length}
            totalCount={topics.length}
          />
        </div>

        <TopicGrid
          topics={filteredTopics}
          variant="detailed"
          groupByLevel
          studienbeginBadge
          emptyMessage={query ? `Keine Treffer für „${query}".` : 'Keine Themen im aktuellen Filter.'}
        />
      </div>

      <div className="h-4" />
    </div>
  )
}
