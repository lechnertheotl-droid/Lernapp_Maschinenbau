import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const navLinks = [
  { to: '/',        label: 'Dashboard' },
  { to: '/topics',  label: 'Themen' },
  { to: '/review',  label: 'Wiederholen' },
]

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="hidden md:flex h-14 items-center justify-between px-6 bg-white border-b border-surface-200 sticky top-0 z-40">
      <Link to="/" className="flex items-center gap-2 font-bold text-primary-700 text-lg">
        <span className="text-2xl">🔧</span>
        <span className="hidden lg:block">Lernapp Maschinenbau</span>
        <span className="lg:hidden">MB</span>
      </Link>

      <nav className="flex items-center gap-1">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              'px-4 py-1.5 rounded-lg text-sm font-medium transition-colors',
              pathname === to
                ? 'bg-primary-50 text-primary-700'
                : 'text-surface-600 hover:bg-surface-100'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
