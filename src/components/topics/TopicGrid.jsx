import { useAppState } from '@/context/AppContext'
import { LEVEL_HEADINGS, groupTopicsByLevel } from '@/utils/topicLevels'
import { TopicCard } from './TopicCard'
import { cn } from '@/utils/cn'

/**
 * Grid/Liste aller Topics mit optionaler Gruppierung nach Level (Grundlagen/Vertiefung).
 *
 * - `variant="compact"` → 2-Spalten-Grid, kleinere Cards (Home-Default bei schmaler Breite).
 * - `variant="detailed"` → einspaltige Liste, große Cards mit Description.
 */
export function TopicGrid({ topics, variant = 'detailed', groupByLevel = true, emptyMessage }) {
  const state = useAppState()

  if (topics.length === 0) {
    return (
      <div className="text-center py-8 text-ink-soft dark:text-surface-100 text-sm font-mono">
        {emptyMessage ?? 'Keine Themen gefunden.'}
      </div>
    )
  }

  const sections = groupByLevel ? groupTopicsByLevel(topics) : [[null, topics]]
  const containerClass = variant === 'compact'
    ? 'grid grid-cols-1 xs:grid-cols-2 gap-3'
    : 'flex flex-col gap-3'

  let globalIndex = 0

  return (
    <div className="flex flex-col gap-5">
      {sections.map(([level, levelTopics]) => (
        <section key={level ?? 'all'}>
          {level && (
            <h2 className="font-mono text-[11px] font-black uppercase tracking-widest text-primary-700 dark:text-lemon mb-2 pb-1 border-b-2 border-primary-200 dark:border-surface-700">
              {LEVEL_HEADINGS[level] ?? level}
            </h2>
          )}
          <div className={containerClass}>
            {levelTopics.map((topic) => {
              const i = globalIndex++
              const delay = variant === 'compact' ? i * 60 : i * 50
              return (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  progress={state.progress.topicProgress[topic.id]}
                  variant={variant}
                  style={{ animationDelay: `${delay}ms` }}
                />
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
