import { useNavigate } from 'react-router-dom'
import { TopicIcon } from '@/components/ui/TopicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Stamp } from '@/components/ui/Stamp'
import { computeTopicProgress } from '@/utils/progressLogic'
import { getAllLessons, isExamCompleted } from '@/content/index'
import { getStudienbeginPhase } from '@/utils/topicGraph'
import { cn } from '@/utils/cn'

const DIFF_LABEL = ['', 'Einsteiger', 'Grundlagen', 'Mittel', 'Fortgeschr.', 'Experte']
const DIFF_STARS = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

/**
 * Platzhalter-Card für State-Hydration (LocalStorage lädt asynchron).
 * Vermeidet Layout-Shift, wenn das Themen-Grid vor dem Progress-Load rendert.
 */
function TopicCardSkeleton({ variant = 'detailed' }) {
  if (variant === 'compact') {
    return (
      <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-3.5 flex flex-col gap-2.5 animate-pulse">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-retro bg-surface-200 dark:bg-surface-700" />
          <div className="w-10 h-4 rounded bg-surface-200 dark:bg-surface-700" />
        </div>
        <div className="space-y-2">
          <div className="h-3.5 w-4/5 rounded bg-surface-200 dark:bg-surface-700" />
          <div className="h-2.5 w-2/5 rounded bg-surface-200 dark:bg-surface-700" />
        </div>
        <div className="h-2 rounded bg-surface-200 dark:bg-surface-700" />
      </div>
    )
  }
  return (
    <div className="w-full bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-start gap-4 animate-pulse">
      <div className="w-12 h-12 rounded-retro bg-surface-200 dark:bg-surface-700 flex-shrink-0" />
      <div className="flex-1 min-w-0 space-y-2">
        <div className="h-4 w-2/3 rounded bg-surface-200 dark:bg-surface-700" />
        <div className="h-3 w-full rounded bg-surface-200 dark:bg-surface-700" />
        <div className="h-2.5 rounded bg-surface-200 dark:bg-surface-700 mt-3" />
        <div className="h-2 w-1/2 rounded bg-surface-200 dark:bg-surface-700" />
      </div>
    </div>
  )
}

/**
 * Zwei Varianten:
 *  - `compact` (Dashboard-Style): Icon oben, Titel, Meta, Progress-Bar — passt in 2-Spalten-Grid.
 *  - `detailed` (Browse-Style): Icon links, Stamp rechts, Description, Progress, Meta mit Stars/Hours.
 */
export function TopicCard({ topic, progress, variant = 'detailed', style, studienbeginBadge = false }) {
  const navigate   = useNavigate()
  const completedLessons = progress?.completedLessons ?? []
  const total      = getAllLessons(topic.id).length
  const completed  = completedLessons.length
  const pct        = total > 0 ? computeTopicProgress(completedLessons, total) : 0
  const examDone   = isExamCompleted(topic.id, completedLessons)
  const phase      = studienbeginBadge ? getStudienbeginPhase(topic.id) : null
  const phaseLabel = phase === 1 ? '📚 1. Sem' : phase === 2 ? '📚 2. Sem' : null

  const handleClick = () => navigate(`/topics/${topic.id}`)

  if (variant === 'compact') {
    return (
      <button
        onClick={handleClick}
        style={style}
        className="text-left bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-3.5 flex flex-col gap-2.5 tap-highlight-none retro-press hover:bg-surface-50 dark:hover:bg-surface-700 animate-pop"
      >
        <div className="flex items-start justify-between">
          <TopicIcon topic={topic} size="sm" />
          {examDone ? (
            <Stamp variant="exam">Prüfung ✓</Stamp>
          ) : pct === 100 ? (
            <Stamp variant="done">Fertig</Stamp>
          ) : pct > 0 ? (
            <Stamp variant="progress">{pct}%</Stamp>
          ) : null}
        </div>
        <div>
          <p className="font-black text-ink dark:text-paper text-sm leading-tight line-clamp-2 break-words">{topic.title}</p>
          <p className="font-mono text-[10px] text-ink-soft dark:text-surface-300 mt-0.5 uppercase tracking-wider">
            {DIFF_LABEL[topic.difficulty] ?? ''} · {total} Lekt.{phaseLabel ? ` · ${phaseLabel}` : ''}
          </p>
        </div>
        <ProgressBar value={pct} size="sm" tone={examDone ? 'lemon' : 'primary'} />
      </button>
    )
  }

  // detailed variant
  return (
    <button
      onClick={handleClick}
      style={style}
      className={cn(
        'w-full text-left border-2 rounded-retro p-4 flex items-start gap-4 retro-press tap-highlight-none animate-slide-up',
        examDone
          ? 'bg-lemon/30 border-lemon-dark shadow-hard-lemon hover:bg-lemon/40'
          : 'bg-white dark:bg-surface-800 border-ink shadow-hard hover:bg-surface-50 dark:hover:bg-surface-700'
      )}
    >
      <TopicIcon topic={topic} size="md" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-black text-ink dark:text-paper text-base leading-tight line-clamp-2 break-words">{topic.title}</h3>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            {examDone ? (
              <Stamp variant="exam">Prüfung ✓</Stamp>
            ) : pct === 100 ? (
              <Stamp variant="done">Fertig</Stamp>
            ) : pct > 0 ? (
              <Stamp variant="progress">{pct}%</Stamp>
            ) : null}
            {phaseLabel && (
              <span className="font-mono text-[9px] font-black text-ink dark:text-paper bg-lemon border border-ink rounded px-1.5 py-0.5 uppercase tracking-wider whitespace-nowrap">
                {phaseLabel}
              </span>
            )}
          </div>
        </div>
        <p className="text-ink-soft dark:text-surface-100 text-xs leading-snug mb-3">{topic.description}</p>
        <ProgressBar value={pct} size="md" tone={examDone ? 'lemon' : 'primary'} className="mb-2" />
        <div className="flex items-center gap-3 font-mono text-[10px] text-ink-soft dark:text-surface-100">
          <span>{completed}/{total} Lekt.</span>
          <span>·</span>
          <span>{topic.estimatedHours}h</span>
          <span>·</span>
          <span className="text-lemon-dark">{DIFF_STARS(topic.difficulty)}</span>
        </div>
      </div>
      <span className="text-ink-soft dark:text-surface-100 font-mono font-black text-xl flex-shrink-0 self-center">›</span>
    </button>
  )
}

TopicCard.Skeleton = TopicCardSkeleton
