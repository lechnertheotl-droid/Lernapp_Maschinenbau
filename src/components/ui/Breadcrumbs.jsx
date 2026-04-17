import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function Breadcrumbs({ items, className }) {
  if (!items?.length) return null

  return (
    <nav aria-label="Breadcrumb" className={cn('font-mono text-[11px] text-ink-soft dark:text-surface-100', className)}>
      <ol className="flex items-center gap-1.5 flex-nowrap overflow-hidden">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          // Letzter Eintrag bleibt lesbar (nicht flex-shrink), mittlere dürfen schrumpfen.
          return (
            <li key={i} className={cn('flex items-center gap-1.5 min-w-0', isLast ? 'flex-shrink-0 max-w-[60%]' : 'flex-shrink')}>
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="hover:text-ink dark:hover:text-paper underline decoration-dotted underline-offset-2 transition-colors truncate"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn('truncate', isLast && 'text-ink dark:text-paper font-bold')}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-ink-soft/60 dark:text-surface-400 flex-shrink-0" aria-hidden="true">›</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
