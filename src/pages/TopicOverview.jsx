import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons, isExamCompleted } from '@/content/index'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { cn } from '@/utils/cn'

const DIFF_STARS = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

const LEVEL_ORDER = { grundlagen: 0, vertiefung: 1 }
const LEVEL_HEADINGS = {
  grundlagen: 'Grundlagen (1.–2. Semester)',
  vertiefung: 'Vertiefung (ab 3. Semester)',
}

export function TopicOverview() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('grundlagen') // 'grundlagen' | 'all'

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
      return afterSearch.filter((t) => (t.level ?? 'grundlagen') === 'grundlagen')
    }
    return afterSearch
  }, [topics, query, filter])

  const groupedTopics = useMemo(() => {
    const groups = new Map()
    for (const topic of filteredTopics) {
      const level = topic.level ?? 'grundlagen'
      if (!groups.has(level)) groups.set(level, [])
      groups.get(level).push(topic)
    }
    return [...groups.entries()].sort(([a], [b]) => (LEVEL_ORDER[a] ?? 9) - (LEVEL_ORDER[b] ?? 9))
  }, [filteredTopics])

  let animationIndex = 0

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-baseline gap-3 mb-4">
        <h1 className="font-black text-2xl text-ink dark:text-paper">Themenbereiche</h1>
        <span className="font-mono text-xs text-ink-soft">
          {query ? `${filteredTopics.length}/${topics.length}` : `${filteredTopics.length} gezeigt`}
        </span>
      </div>

      <div className="flex gap-2 mb-4">
        {[
          ['grundlagen', 'Nur Grundlagen'],
          ['all', 'Alle Themen'],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={cn(
              'px-3 h-9 rounded-retro border-2 font-mono text-xs font-black uppercase tracking-wider retro-press',
              filter === key
                ? 'bg-lemon border-ink text-ink shadow-hard-lemon'
                : 'bg-white dark:bg-surface-800 border-ink text-ink dark:text-surface-100 shadow-hard-sm'
            )}
          >
            {label}
          </button>
        ))}
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
          {query ? `Keine Treffer für „${query}".` : 'Keine Themen im aktuellen Filter.'}
        </div>
      )}

      <div className="flex flex-col gap-6">
        {groupedTopics.map(([level, levelTopics]) => (
          <section key={level}>
            <h2 className="font-mono text-[11px] font-black uppercase tracking-widest text-primary-700 dark:text-lemon mb-2 pb-1 border-b-2 border-primary-200 dark:border-surface-700">
              {LEVEL_HEADINGS[level] ?? level}
            </h2>
            <div className="flex flex-col gap-3">
              {levelTopics.map((topic) => {
                const tp       = state.progress.topicProgress[topic.id]
                const total    = getAllLessons(topic.id).length
                const completed = tp?.completedLessons?.length ?? 0
                const pct      = computeTopicProgress(tp?.completedLessons ?? [], total)
                const examDone = isExamCompleted(topic.id, tp?.completedLessons ?? [])
                const animDelay = animationIndex++ * 50

                return (
                  <button
                    key={topic.id}
                    onClick={() => navigate(`/topics/${topic.id}`)}
                    className={`w-full text-left border-2 rounded-retro p-4 flex items-start gap-4 retro-press tap-highlight-none animate-slide-up ${
                      examDone
                        ? 'bg-lemon/30 border-lemon-dark shadow-hard-lemon hover:bg-lemon/40'
                        : 'bg-white dark:bg-surface-800 border-ink shadow-hard hover:bg-surface-50 dark:hover:bg-surface-700'
                    }`}
                    style={{ animationDelay: `${animDelay}ms` }}
                  >
                    <TopicIcon topic={topic} size="md" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-black text-ink dark:text-paper text-base leading-tight line-clamp-2 break-words">{topic.title}</h3>
                        {examDone
                          ? <span className="stamp text-lemon-dark flex-shrink-0">Prüfung ✓</span>
                          : pct === 100
                          ? <span className="stamp text-green-700 flex-shrink-0">Fertig</span>
                          : pct > 0
                          ? <span className="stamp text-primary-700 flex-shrink-0">{pct}%</span>
                          : null
                        }
                      </div>
                      <p className="text-ink-soft dark:text-surface-300 text-xs leading-snug mb-3">{topic.description}</p>
                      <div className={`h-2.5 border rounded-sm overflow-hidden mb-2 ${examDone ? 'bg-lemon-light border-lemon-dark' : 'bg-surface-100 dark:bg-surface-700 border-ink'}`}>
                        <div
                          className={`h-full transition-all duration-500 ${examDone ? 'bg-lemon-dark' : 'bg-primary-700'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-ink-soft dark:text-surface-400">
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
          </section>
        ))}
      </div>
    </div>
  )
}
