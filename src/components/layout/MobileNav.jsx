import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useAppState } from '@/context/AppContext'
import { getDueItems } from '@/utils/reviewScheduler'

const tabs = [
  { to: '/',        icon: '🏠', label: 'Home' },
  { to: '/topics',  icon: '📚', label: 'Themen' },
  { to: '/review',  icon: '🔄', label: 'Wiederholen' },
]

export function MobileNav() {
  const { pathname } = useLocation()
  const state = useAppState()
  const dueCount = getDueItems(state.review.queue, Date.now()).length

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-surface-200 flex safe-area-bottom"
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {tabs.map(({ to, icon, label }) => {
        const isActive = pathname === to
        const showBadge = to === '/review' && dueCount > 0

        return (
          <Link
            key={to}
            to={to}
            className={cn(
              'flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition-colors tap-highlight-none',
              isActive ? 'text-primary-700' : 'text-surface-400'
            )}
          >
            <span className="relative text-xl leading-none">
              {icon}
              {showBadge && (
                <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full">
                  {dueCount}
                </span>
              )}
            </span>
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
