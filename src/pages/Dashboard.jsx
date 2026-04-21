import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { StreakBadge } from '@/components/ui/StreakBadge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { TopicGrid } from '@/components/topics/TopicGrid'
import { TopicSearchAndFilter } from '@/components/topics/TopicSearchAndFilter'
import {
  getTopicMeta,
  computeTopicStatus,
  nextRecommendedTopic,
} from '@/utils/topicGraph'
import { topicLevelOf } from '@/utils/topicLevels'

function greeting(name) {
  const h = new Date().getHours()
  if (h < 5)  return `Noch wach, ${name}?`
  if (h < 12) return `Guten Morgen, ${name}!`
  if (h < 18) return `Hallo, ${name}!`
  return `Guten Abend, ${name}!`
}

export function Dashboard() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()

  const [query, setQuery]   = useState('')
  const [filter, setFilter] = useState('grundlagen') // 'grundlagen' | 'all'

  const lastActive = Object.entries(state.progress.topicProgress)
    .map(([topicId, tp]) => ({ topicId, ...tp }))
    .filter((tp) => tp.currentLessonId)
    .at(0)

  const totalCompleted = Object.values(state.progress.topicProgress)
    .flatMap((tp) => tp.completedLessons ?? []).length

  // Compute recommended next topic from skill-tree
  const completionByTopic = useMemo(() => Object.fromEntries(
    topics.map((topic) => {
      const total = getAllLessons(topic.id).length
      const done  = state.progress.topicProgress[topic.id]?.completedLessons?.length ?? 0
      return [topic.id, total > 0 ? done / total : 0]
    })
  ), [topics, state.progress.topicProgress])

  const statusByTopic = useMemo(() => Object.fromEntries(
    topics.map((topic) => {
      const ratio       = completionByTopic[topic.id] ?? 0
      const prereqs     = getTopicMeta(topic.id).prerequisiteTopics
      const prereqDone  = prereqs.every((pid) => (completionByTopic[pid] ?? 0) >= 1)
      return [topic.id, computeTopicStatus(topic.id, ratio, prereqDone)]
    })
  ), [topics, completionByTopic])

  const recommendedId    = lastActive ? null : nextRecommendedTopic(topics.map((t) => t.id), statusByTopic)
  const recommendedTopic = recommendedId ? topics.find((t) => t.id === recommendedId) : null

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

      {/* ── Greeting bar ─────────────────────────────────────────── */}
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-surface-500 font-mono text-xs uppercase tracking-widest mb-0.5">
            {new Date().toLocaleDateString('de-AT', { weekday: 'short', day: 'numeric', month: 'short' })}
          </p>
          <h1 className="text-xl font-black text-white leading-tight">
            {greeting(state.user.name ?? 'du')}
          </h1>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {(state.streak?.current ?? 0) > 0 && (
            <Link to="/erfolge" aria-label="Erfolge ansehen">
              <StreakBadge current={state.streak.current} longest={state.streak.longest} size="md" />
            </Link>
          )}
          {totalCompleted > 0 && (
            <Link
              to="/erfolge"
              className="flex flex-col items-center bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon px-3 py-2 min-w-[56px] retro-press"
              aria-label={`${totalCompleted} Lektionen abgeschlossen — Erfolge ansehen`}
            >
              <span className="num text-xl font-black text-ink leading-none">{totalCompleted}</span>
              <span className="font-mono text-[9px] font-bold text-ink-soft uppercase tracking-wide mt-0.5">Lekt.</span>
            </Link>
          )}
        </div>
      </div>

      {/* ── Practice CTA ─────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => navigate('/üben')}
        aria-label="Prüfungsaufgaben üben"
        className="w-full text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-center gap-3 retro-press tap-highlight-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
      >
        <span className="text-2xl flex-shrink-0 font-mono font-black text-ink dark:text-paper" aria-hidden>↻</span>
        <div className="flex-1 min-w-0">
          <p className="font-black text-ink dark:text-paper text-sm">Üben — Prüfungsniveau</p>
          <p className="text-ink-soft dark:text-surface-200 text-xs font-mono mt-0.5">Mehrstufige Klausuraufgaben im TU-Wien-Stil →</p>
        </div>
        <span className="font-mono font-black text-ink dark:text-paper text-lg" aria-hidden>›</span>
      </button>

      {/* ── Continue card ────────────────────────────────────────── */}
      {lastActive && (() => {
        const topic = topics.find((t) => t.id === lastActive.topicId)
        const tp    = state.progress.topicProgress[lastActive.topicId]
        const total = getAllLessons(lastActive.topicId).length
        const pct   = computeTopicProgress(tp?.completedLessons ?? [], total)
        return (
          <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">
            <div className="px-4 pt-4 pb-3 flex items-start gap-3">
              <TopicIcon topic={topic} size="md" />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-1">
                  // Weitermachen
                </p>
                <p className="font-black text-ink dark:text-paper text-sm leading-snug">{topic?.title}</p>
                <ProgressBar value={pct} size="lg" tone="primary" className="mt-2.5" />
                <p className="num text-[11px] text-ink-soft dark:text-surface-100 mt-1">
                  {pct}% · {tp?.completedLessons?.length ?? 0}/{total} Lektionen
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/topics/${lastActive.topicId}/${lastActive.currentLessonId}`)}
              className="w-full py-3 bg-primary-700 text-lemon font-mono font-black text-xs uppercase tracking-widest hover:bg-primary-800 transition-colors tap-highlight-none border-t-2 border-ink"
            >
              Weiter lernen →
            </button>
          </div>
        )
      })()}

      {/* ── Welcome-Hint für komplett neue Nutzer ─────────────────── */}
      {!lastActive && totalCompleted === 0 && (
        <div className="bg-lemon-light border-2 border-ink rounded-retro shadow-hard-sm p-4 flex items-start gap-3 animate-fade-in">
          <span className="text-xl flex-shrink-0 font-mono font-black">👋</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-ink text-sm leading-tight">Los geht's!</p>
            <p className="text-ink-soft dark:text-surface-100 text-xs leading-snug mt-1">
              Wähle unten ein Thema oder nutze die Suche. Tipp: „Nur Grundlagen" zeigt die Themen aus den ersten beiden Semestern.
            </p>
          </div>
        </div>
      )}

      {/* ── Recommended next (when no active lesson) ─────────────── */}
      {!lastActive && recommendedTopic && (
        <button
          onClick={() => navigate(`/topics/${recommendedTopic.id}`)}
          className="w-full text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-center gap-3 retro-press tap-highlight-none animate-fade-in"
        >
          <TopicIcon topic={recommendedTopic} size="md" />
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-0.5">
              // Empfohlener Start
            </p>
            <p className="font-black text-ink dark:text-paper text-sm leading-snug line-clamp-2">
              {recommendedTopic.title}
            </p>
            <p className="text-ink-soft dark:text-surface-100 text-[11px] mt-0.5 line-clamp-1">
              {recommendedTopic.description}
            </p>
          </div>
          <span className="font-mono font-black text-ink dark:text-paper text-lg">›</span>
        </button>
      )}

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
