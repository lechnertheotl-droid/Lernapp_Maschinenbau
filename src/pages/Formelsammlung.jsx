import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { FormelBlock } from '@/components/lesson/FormelBlock'
import { MarkdownContent } from '@/components/lesson/MarkdownContent'
import { buildFormulaIndex, searchFormulas } from '@/utils/formulaIndex'

const FILTER_ALL = '__all__'
const FILTER_BOOKMARKED = '__bookmarked__'

export function Formelsammlung() {
  const state    = useAppState()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const bookmarks = state.bookmarks ?? []

  const formulas = useMemo(() => buildFormulaIndex(), [])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState(FILTER_ALL)

  const topics = useMemo(() => {
    const ids = new Map()
    for (const f of formulas) ids.set(f.topicId, { id: f.topicId, title: f.topicTitle })
    return Array.from(ids.values())
  }, [formulas])

  const filtered = useMemo(() => {
    let list = formulas
    if (filter === FILTER_BOOKMARKED) {
      list = list.filter((f) => bookmarks.includes(f.id))
    } else if (filter !== FILTER_ALL) {
      list = list.filter((f) => f.topicId === filter)
    }
    return searchFormulas(list, query)
  }, [formulas, bookmarks, filter, query])

  const toggleBookmark = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_BOOKMARK, bookmarkId: id })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 flex flex-col gap-5 min-h-[100dvh]">
      <Breadcrumbs items={[{ label: 'Themen', to: '/topics' }, { label: 'Formelsammlung' }]} />

      <header>
        <h1 className="font-black text-ink dark:text-paper text-2xl leading-tight">Formelsammlung</h1>
        <p className="text-ink-soft dark:text-surface-300 text-sm mt-1">
          {formulas.length} Formelblöcke aus allen Themen — durchsuchbar, filterbar, mit Favoriten-Stern.
        </p>
      </header>

      <div className="flex flex-col gap-2">
        <label className="sr-only" htmlFor="formula-search">Formel suchen</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-ink-soft pointer-events-none">⌕</span>
          <input
            id="formula-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Formel, Thema oder Lektion suchen…"
            className="w-full pl-9 pr-3 h-11 border-2 border-ink rounded-retro bg-white dark:bg-surface-800 dark:text-paper shadow-hard-sm font-mono text-sm placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="Filter nach Thema">
          <FilterChip active={filter === FILTER_ALL} onClick={() => setFilter(FILTER_ALL)}>
            Alle ({formulas.length})
          </FilterChip>
          <FilterChip active={filter === FILTER_BOOKMARKED} onClick={() => setFilter(FILTER_BOOKMARKED)} accent="lemon">
            ★ Favoriten ({bookmarks.length})
          </FilterChip>
          {topics.map((t) => (
            <FilterChip key={t.id} active={filter === t.id} onClick={() => setFilter(t.id)}>
              {t.title}
            </FilterChip>
          ))}
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[11px] text-ink-soft dark:text-surface-400">
          {query || filter !== FILTER_ALL
            ? `${filtered.length}/${formulas.length} Treffer`
            : `${filtered.length} Formelblöcke`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-soft dark:text-surface-400 text-sm italic text-center py-8">
          Keine Treffer. {filter === FILTER_BOOKMARKED && 'Öffne eine Formel und klicke auf ★, um sie zu merken.'}
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((f) => {
            const bookmarked = bookmarks.includes(f.id)
            return (
              <div key={f.id} className="relative">
                <FormelBlock title={f.title} priority={f.priority}>
                  <MarkdownContent className="text-ink dark:text-paper">{f.content}</MarkdownContent>
                </FormelBlock>
                <div className="flex items-center justify-between mt-1.5 px-1">
                  <Link
                    to={`/topics/${f.topicId}/${f.lessonId}`}
                    className="font-mono text-[10px] text-ink-soft dark:text-surface-400 hover:underline"
                  >
                    {f.topicIcon ? `${f.topicIcon} · ` : ''}{f.topicTitle} · {f.lessonTitle}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleBookmark(f.id)}
                    aria-label={bookmarked ? `${f.title} — Favorit entfernen` : `${f.title} — als Favorit speichern`}
                    aria-pressed={bookmarked}
                    className={`text-xl leading-none tap-highlight-none retro-press ${
                      bookmarked ? 'text-lemon-dark' : 'text-ink-soft dark:text-surface-500 hover:text-lemon-dark'
                    }`}
                  >
                    {bookmarked ? '★' : '☆'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function FilterChip({ active, onClick, accent, children }) {
  const base = 'flex-shrink-0 px-3 h-9 border-2 border-ink rounded-retro font-mono text-[11px] font-black uppercase tracking-wider retro-press tap-highlight-none'
  const activeClass = accent === 'lemon'
    ? 'bg-lemon text-ink shadow-hard-lemon'
    : 'bg-primary-700 text-white shadow-hard-sm dark:bg-primary-400 dark:text-ink'
  const inactiveClass = 'bg-white dark:bg-surface-800 text-ink-soft dark:text-surface-300 shadow-hard-sm hover:bg-surface-50'
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`${base} ${active ? activeClass : inactiveClass}`}
    >
      {children}
    </button>
  )
}
