import { cn } from '@/utils/cn'
import type { TopicStatus } from '@/utils/topicGraph'

interface TopicLike {
  id: string
  title: string
  description?: string
  icon?: string
  color?: string
}

interface Props {
  topic: TopicLike
  status: TopicStatus
  progressPct: number
  prerequisiteTitles: string[]
  onClick: () => void
}

const statusStyle: Record<TopicStatus, { wrap: string; stamp: string; stampLabel: string }> = {
  locked: {
    wrap: 'border-surface-400 bg-surface-200 dark:bg-surface-800 opacity-60 cursor-not-allowed',
    stamp: 'bg-surface-300 text-surface-700 border-surface-500 dark:bg-surface-700 dark:text-surface-300',
    stampLabel: 'Gesperrt',
  },
  available: {
    wrap: 'border-ink bg-white dark:bg-surface-800 shadow-hard hover:bg-surface-50',
    stamp: 'bg-lemon border-lemon-dark text-ink',
    stampLabel: 'Verfügbar',
  },
  'in-progress': {
    wrap: 'border-primary-700 bg-primary-50 dark:bg-primary-950/30 shadow-hard hover:bg-primary-100',
    stamp: 'bg-primary-700 text-white border-primary-800',
    stampLabel: 'Laufend',
  },
  completed: {
    wrap: 'border-green-700 bg-green-50 dark:bg-green-950/30 shadow-hard hover:bg-green-100',
    stamp: 'bg-green-600 text-white border-green-800',
    stampLabel: 'Abgeschlossen',
  },
}

export function TopicNode({ topic, status, progressPct, prerequisiteTitles, onClick }: Props) {
  const s = statusStyle[status]
  const locked = status === 'locked'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      aria-label={`${topic.title} — ${s.stampLabel}`}
      className={cn(
        'w-full text-left border-2 rounded-retro p-3.5 flex flex-col gap-2 transition-colors tap-highlight-none retro-press',
        s.wrap
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {topic.icon && <span className="text-xl leading-none" aria-hidden>{topic.icon}</span>}
            <h3 className="font-black text-ink dark:text-paper text-sm leading-tight line-clamp-2">
              {topic.title}
            </h3>
          </div>
          {topic.description && (
            <p className="text-ink-soft dark:text-surface-400 text-[11px] leading-snug mt-1 line-clamp-2">
              {topic.description}
            </p>
          )}
        </div>
        <span
          className={cn(
            'flex-shrink-0 px-1.5 py-0.5 border-2 rounded-sm font-mono text-[9px] font-black uppercase tracking-wider',
            s.stamp
          )}
        >
          {s.stampLabel}
        </span>
      </div>

      {status !== 'locked' && (
        <div className="h-1.5 bg-surface-100 dark:bg-surface-700 border border-ink rounded-sm overflow-hidden">
          <div
            className={cn(
              'h-full transition-all',
              status === 'completed' ? 'bg-green-600' : 'bg-primary-700 dark:bg-primary-400'
            )}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}

      {locked && prerequisiteTitles.length > 0 && (
        <p className="text-[10px] font-mono text-ink-soft dark:text-surface-400 leading-snug">
          Erfordert: {prerequisiteTitles.join(' · ')}
        </p>
      )}
    </button>
  )
}
