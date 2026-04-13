import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useAppState } from '@/context/AppContext'
import { getDueItems } from '@/utils/reviewScheduler'

const tabs = [
  { to: '/',       icon: '⌂',  label: 'Home'   },
  { to: '/topics', icon: '▤',  label: 'Themen' },
  { to: '/review', icon: '↻',  label: 'Üben'   },
]

export function MobileNav() {
  const { pathname } = useLocation()
  const state        = useAppState()
  const dueCount     = getDueItems(state.review.queue, Date.now()).length

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink border-t-2 border-lemon flex"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {tabs.map(({ to, icon, label }) => {
        const isActive  = pathname === to
        const showBadge = to === '/review' && dueCount > 0

        return (
          <Link
            key={to}
            to={to}
            className={cn(
              'flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 tap-highlight-none transition-colors relative',
              isActive ? 'text-lemon' : 'text-surface-500 hover:text-surface-300',
            )}
          >
            {isActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-lemon rounded-b" />
            )}
            <span className="relative text-xl leading-none font-mono font-bold">
              {icon}
              {showBadge && (
                <span className="absolute -top-1 -right-2 min-w-[16px] h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full px-1 border border-ink">
                  {dueCount}
                </span>
              )}
            </span>
            <span className={cn(
              'font-mono text-[10px] font-bold uppercase tracking-wider',
              isActive ? 'text-lemon' : 'text-surface-500'
            )}>
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
