import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function Breadcrumbs({ items, className }) {
  if (!items?.length) return null

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center flex-wrap gap-1.5 font-mono text-[11px] text-ink-soft', className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="hover:text-ink underline decoration-dotted underline-offset-2 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-ink font-bold' : undefined} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="text-ink-soft/60" aria-hidden="true">›</span>}
          </span>
        )
      })}
    </nav>
  )
}
