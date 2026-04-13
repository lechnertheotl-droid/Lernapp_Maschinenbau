import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { getDueItems } from '@/utils/reviewScheduler'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'

function greeting(name) {
  const h = new Date().getHours()
  if (h < 5)  return `Noch wach, ${name}?`
  if (h < 12) return `Guten Morgen, ${name}!`
  if (h < 18) return `Hallo, ${name}!`
  return `Guten Abend, ${name}!`
}

const DIFF_LABEL = ['', 'Einsteiger', 'Grundlagen', 'Mittel', 'Fortgeschr.', 'Experte']

export function Dashboard() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()
  const due      = getDueItems(state.review.queue, Date.now())

  const lastActive = Object.entries(state.progress.topicProgress)
    .map(([topicId, tp]) => ({ topicId, ...tp }))
    .filter((tp) => tp.currentLessonId)
    .at(0)

  const totalCompleted = Object.values(state.progress.topicProgress)
    .flatMap((tp) => tp.completedLessons ?? []).length

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-2 flex flex-col gap-5">

      {/* ── Greeting bar ─────────────────────────────────────────── */}
      <div className="bg-ink border-2 border-ink rounded-retro shadow-hard-lg px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-surface-500 font-mono text-xs uppercase tracking-widest mb-0.5">
            {new Date().toLocaleDateString('de-AT', { weekday: 'short', day: 'numeric', month: 'short' })}
          </p>
          <h1 className="text-xl font-black text-white leading-tight">
            {greeting(state.user.name ?? 'du')}
          </h1>
        </div>
        {totalCompleted > 0 && (
          <div className="flex flex-col items-center bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon px-3 py-2 min-w-[56px]">
            <span className="num text-xl font-black text-ink leading-none">{totalCompleted}</span>
            <span className="font-mono text-[9px] font-bold text-ink-soft uppercase tracking-wide mt-0.5">Lekt.</span>
          </div>
        )}
      </div>

      {/* ── Review CTA ───────────────────────────────────────────── */}
      {due.length > 0 && (
        <button
          onClick={() => navigate('/review')}
          className="w-full text-left bg-lemon border-2 border-lemon-dark rounded-retro shadow-hard-lemon p-4 flex items-center gap-3 retro-press tap-highlight-none"
        >
          <span className="text-2xl flex-shrink-0 font-mono font-black">↻</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-ink text-sm">
              {due.length} Wiederholung{due.length > 1 ? 'en' : ''} fällig
            </p>
            <p className="text-ink-soft text-xs font-mono mt-0.5">Jetzt Wissen festigen →</p>
          </div>
          <span className="font-mono font-black text-ink text-lg">›</span>
        </button>
      )}

      {/* ── Continue card ────────────────────────────────────────── */}
      {lastActive && (() => {
        const topic = topics.find((t) => t.id === lastActive.topicId)
        const tp    = state.progress.topicProgress[lastActive.topicId]
        const total = getAllLessons(lastActive.topicId).length
        const pct   = computeTopicProgress(tp?.completedLessons ?? [], total)
        return (
          <div className="bg-white border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">
            <div className="px-4 pt-4 pb-3 flex items-start gap-3">
              <TopicIcon topic={topic} size="md" />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] font-bold text-primary-700 uppercase tracking-widest mb-1">
                  // Weitermachen
                </p>
                <p className="font-black text-ink text-sm leading-snug">{topic?.title}</p>
                <div className="mt-2.5 h-3 bg-surface-100 border border-ink rounded-sm overflow-hidden">
                  <div className="h-full bg-primary-700 transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
                <p className="num text-[11px] text-ink-soft mt-1">
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

      {/* ── Topics grid ──────────────────────────────────────────── */}
      <div>
        <h2 className="font-mono font-black text-[11px] text-ink-soft uppercase tracking-widest mb-3">
          // Themenbereiche
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {topics.map((topic, i) => {
            const tp      = state.progress.topicProgress[topic.id]
            const total   = getAllLessons(topic.id).length
            const pct     = tp ? computeTopicProgress(tp.completedLessons, total) : 0
            const started = (tp?.completedLessons?.length ?? 0) > 0

            return (
              <button
                key={topic.id}
                onClick={() => navigate(`/topics/${topic.id}`)}
                className="text-left bg-white border-2 border-ink rounded-retro shadow-hard p-3.5 flex flex-col gap-2.5 tap-highlight-none retro-press hover:bg-surface-50 animate-pop"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between">
                  <TopicIcon topic={topic} size="sm" />
                  {started && (
                    <span className="num text-[10px] font-black text-primary-700 bg-primary-50 border border-primary-200 rounded px-1.5 py-0.5">
                      {pct}%
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-black text-ink text-sm leading-tight">{topic.title}</p>
                  <p className="font-mono text-[10px] text-ink-soft mt-0.5 uppercase tracking-wider">
                    {DIFF_LABEL[topic.difficulty] ?? ''} · {total} Lekt.
                  </p>
                </div>
                <div className="h-2 bg-surface-100 border border-ink rounded-sm overflow-hidden">
                  <div className="h-full bg-primary-700 transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
