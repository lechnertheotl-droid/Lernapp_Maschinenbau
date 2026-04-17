import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useTheme } from '@/context/ThemeContext'
import { useAppState } from '@/context/AppContext'
import { getDueItems } from '@/utils/reviewScheduler'

const navLinks = [
  { to: '/',        label: 'Start'   },
  { to: '/review',  label: 'Üben'    },
  { to: '/erfolge', label: 'Erfolge' },
]

const secondaryLinks = [
  { to: '/lernpfad',       label: 'Lernpfad' },
  { to: '/formelsammlung', label: 'Formeln'  },
]

function matchPath(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

export function Header() {
  const { pathname }          = useLocation()
  const { theme, toggleTheme } = useTheme()
  const state                  = useAppState()
  const dueCount               = getDueItems(state.review.queue, Date.now()).length

  return (
    <header className="hidden md:flex h-14 items-center justify-between px-6 bg-ink border-b-2 border-ink sticky top-0 z-40">
      <Link to="/" className="flex items-center gap-2.5 tap-highlight-none">
        <span className="w-9 h-9 inline-flex items-center justify-center rounded-retro border-2 border-lemon bg-ink text-lemon font-mono font-black text-xs shadow-hard-sm">
          MB
        </span>
        <span className="font-mono font-black text-lemon text-base tracking-wider uppercase">
          MB<span className="text-surface-500">·</span>LERNAPP
        </span>
      </Link>

      <nav className="flex items-center gap-1">
        {navLinks.map(({ to, label }) => {
          const isActive  = matchPath(pathname, to)
          const showBadge = to === '/review' && dueCount > 0
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                'relative px-4 py-1.5 font-mono font-semibold text-xs uppercase tracking-wider rounded-retro border-2 transition-all',
                isActive
                  ? 'bg-lemon text-ink border-lemon-dark shadow-hard-sm'
                  : 'text-surface-400 border-transparent hover:text-lemon hover:border-surface-600'
              )}
            >
              {label}
              {showBadge && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full px-1 border border-ink">
                  {dueCount}
                </span>
              )}
            </Link>
          )
        })}

        <span className="mx-2 h-6 w-px bg-surface-600" aria-hidden="true" />

        {secondaryLinks.map(({ to, label }) => {
          const isActive = matchPath(pathname, to)
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                'px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-retro border-2 transition-all',
                isActive
                  ? 'bg-lemon text-ink border-lemon-dark shadow-hard-sm'
                  : 'text-surface-500 border-transparent hover:text-lemon hover:border-surface-700'
              )}
            >
              {label}
            </Link>
          )
        })}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
          title={theme === 'dark' ? 'Heller Modus' : 'Dunkler Modus'}
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-retro border-2 border-surface-600 text-lemon hover:border-lemon font-mono text-sm transition-colors"
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <Link
          to="/settings"
          aria-label="Einstellungen"
          title="Einstellungen"
          className={cn(
            'w-9 h-9 flex items-center justify-center rounded-retro border-2 font-mono text-sm transition-colors',
            matchPath(pathname, '/settings')
              ? 'bg-lemon text-ink border-lemon-dark shadow-hard-sm'
              : 'border-surface-600 text-lemon hover:border-lemon'
          )}
        >
          ⚙
        </Link>
      </nav>
    </header>
  )
}
