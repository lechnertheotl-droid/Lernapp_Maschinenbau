import { cn } from '@/utils/cn'

const FILTER_TABS = [
  ['grundlagen', 'Nur Grundlagen'],
  ['all',        'Alle Themen'],
]

/**
 * Sucheingabe + Filter-Buttons (Grundlagen/Alle) für die Themenliste.
 * Controlled-Component: State wird vom Parent gehalten.
 */
export function TopicSearchAndFilter({ query, setQuery, filter, setFilter, resultCount, totalCount }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 flex-wrap items-center">
        {FILTER_TABS.map(([key, label]) => (
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
        {query && (
          <span className="font-mono text-[11px] text-ink-soft dark:text-surface-100 ml-auto">
            {resultCount}/{totalCount}
          </span>
        )}
      </div>

      <label className="sr-only" htmlFor="topic-search">Thema suchen</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-ink-soft dark:text-surface-100 text-sm pointer-events-none">⌕</span>
        <input
          id="topic-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Thema oder Lektion suchen…"
          className="w-full pl-9 pr-3 py-2.5 border-2 border-ink rounded-retro bg-white dark:bg-surface-800 dark:text-surface-100 shadow-hard-sm font-mono text-sm placeholder:text-ink-soft dark:placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
    </div>
  )
}
