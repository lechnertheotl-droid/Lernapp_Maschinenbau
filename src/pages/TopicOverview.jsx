import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons, isExamCompleted } from '@/content/index'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'

const DIFF_STARS = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

export function TopicOverview() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()
  const [query, setQuery] = useState('')

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return topics
    return topics.filter((topic) => {
      if (topic.title.toLowerCase().includes(q)) return true
      if (topic.description?.toLowerCase().includes(q)) return true
      const lessonTitles = (topic.units ?? []).flatMap((u) => (u.lessons ?? []).map((l) => l.title?.toLowerCase() ?? ''))
      return lessonTitles.some((t) => t.includes(q))
    })
  }, [topics, query])

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-baseline gap-3 mb-4">
        <h1 className="font-black text-2xl text-ink">Themenbereiche</h1>
        <span className="font-mono text-xs text-ink-soft">
          {query ? `${filteredTopics.length}/${topics.length}` : `${topics.length} verfügbar`}
        </span>
      </div>

      <div className="mb-5">
        <label className="sr-only" htmlFor="topic-search">Thema suchen</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-ink-soft text-sm pointer-events-none">⌕</span>
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Thema oder Lektion suchen…"
            className="w-full pl-9 pr-3 py-2.5 border-2 border-ink rounded-retro bg-white shadow-hard-sm font-mono text-sm placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-8 text-ink-soft text-sm font-mono">
          Keine Treffer für „{query}".
        </div>
      )}

      <div className="flex flex-col gap-3">
        {filteredTopics.map((topic, i) => {
          const tp       = state.progress.topicProgress[topic.id]
          const total    = getAllLessons(topic.id).length
          const completed = tp?.completedLessons?.length ?? 0
          const pct      = computeTopicProgress(tp?.completedLessons ?? [], total)
          const examDone = isExamCompleted(topic.id, tp?.completedLessons ?? [])

          return (
            <button
              key={topic.id}
              onClick={() => navigate(`/topics/${topic.id}`)}
              className={`w-full text-left border-2 rounded-retro p-4 flex items-start gap-4 retro-press tap-highlight-none animate-slide-up ${
                examDone
                  ? 'bg-lemon/30 border-lemon-dark shadow-hard-lemon hover:bg-lemon/40'
                  : 'bg-white border-ink shadow-hard hover:bg-surface-50'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <TopicIcon topic={topic} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h2 className="font-black text-ink dark:text-paper text-base leading-tight line-clamp-2 break-words">{topic.title}</h2>
                  {examDone
                    ? <span className="stamp text-lemon-dark flex-shrink-0">Prüfung ✓</span>
                    : pct === 100
                    ? <span className="stamp text-green-700 flex-shrink-0">Fertig</span>
                    : pct > 0
                    ? <span className="stamp text-primary-700 flex-shrink-0">{pct}%</span>
                    : null
                  }
                </div>
                <p className="text-ink-soft text-xs leading-snug mb-3">{topic.description}</p>
                {/* Retro progress bar */}
                <div className={`h-2.5 border rounded-sm overflow-hidden mb-2 ${examDone ? 'bg-lemon-light border-lemon-dark' : 'bg-surface-100 border-ink'}`}>
                  <div
                    className={`h-full transition-all duration-500 ${examDone ? 'bg-lemon-dark' : 'bg-primary-700'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="flex items-center gap-3 font-mono text-[10px] text-ink-soft">
                  <span>{completed}/{total} Lekt.</span>
                  <span>·</span>
                  <span>{topic.estimatedHours}h</span>
                  <span>·</span>
                  <span className="text-lemon-dark">{DIFF_STARS(topic.difficulty)}</span>
                </div>
              </div>
              <span className="text-ink-soft font-mono font-black text-xl flex-shrink-0 self-center">›</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
