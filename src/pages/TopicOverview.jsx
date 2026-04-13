import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppContext'
import { getAllTopics, getAllLessons } from '@/content/index'
import { computeTopicProgress } from '@/utils/progressLogic'
import { TopicIcon } from '@/components/ui/TopicIcon'

const DIFF_STARS = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

export function TopicOverview() {
  const state    = useAppState()
  const navigate = useNavigate()
  const topics   = getAllTopics()

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-baseline gap-3 mb-5">
        <h1 className="font-black text-2xl text-ink">Themenbereiche</h1>
        <span className="font-mono text-xs text-ink-soft">{topics.length} verfügbar</span>
      </div>

      <div className="flex flex-col gap-3">
        {topics.map((topic, i) => {
          const tp       = state.progress.topicProgress[topic.id]
          const total    = getAllLessons(topic.id).length
          const completed = tp?.completedLessons?.length ?? 0
          const pct      = computeTopicProgress(tp?.completedLessons ?? [], total)

          return (
            <button
              key={topic.id}
              onClick={() => navigate(`/topics/${topic.id}`)}
              className="w-full text-left bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex items-start gap-4 retro-press tap-highlight-none hover:bg-surface-50 animate-slide-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <TopicIcon topic={topic} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h2 className="font-black text-ink text-base leading-tight">{topic.title}</h2>
                  {pct === 100
                    ? <span className="stamp text-green-700 flex-shrink-0">Fertig</span>
                    : pct > 0
                    ? <span className="stamp text-primary-700 flex-shrink-0">{pct}%</span>
                    : null
                  }
                </div>
                <p className="text-ink-soft text-xs leading-snug mb-3">{topic.description}</p>
                {/* Retro progress bar */}
                <div className="h-2.5 bg-surface-100 border border-ink rounded-sm overflow-hidden mb-2">
                  <div
                    className="h-full bg-primary-700 transition-all duration-500"
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
