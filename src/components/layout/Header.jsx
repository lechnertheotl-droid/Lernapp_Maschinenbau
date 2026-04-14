import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useTheme } from '@/context/ThemeContext'

const navLinks = [
  { to: '/',       label: 'Dashboard' },
  { to: '/topics', label: 'Themen'    },
  { to: '/review', label: 'Üben'      },
]

export function Header() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

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
          const isActive = pathname === to
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                'px-4 py-1.5 font-mono font-semibold text-xs uppercase tracking-wider rounded-retro border-2 transition-all',
                isActive
                  ? 'bg-lemon text-ink border-lemon-dark shadow-hard-sm'
                  : 'text-surface-400 border-transparent hover:text-lemon hover:border-surface-600'
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
            pathname === '/settings'
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
