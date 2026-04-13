import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const navLinks = [
  { to: '/',       label: 'Dashboard' },
  { to: '/topics', label: 'Themen'    },
  { to: '/review', label: 'Üben'      },
]

export function Header() {
  const { pathname } = useLocation()

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
      </nav>
    </header>
  )
}
