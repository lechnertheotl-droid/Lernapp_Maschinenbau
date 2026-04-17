import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

const LINKS = [
  { to: '/lernpfad',        icon: '⌬', title: 'Lernpfad',        desc: 'Abhängigkeits-Graph aller Themen' },
  { to: '/formelsammlung',  icon: 'ƒ', title: 'Formelsammlung',  desc: 'Alle Formeln mit Favoriten und Suche' },
  { to: '/erfolge',         icon: '★', title: 'Erfolge',         desc: 'Streak, Badges und Statistiken' },
  { to: '/settings',        icon: '⚙', title: 'Einstellungen',   desc: 'Profil, Dark Mode, Fortschritt zurücksetzen' },
]

export function More() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-black text-2xl text-ink dark:text-paper">Mehr</h1>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
          title={theme === 'dark' ? 'Heller Modus' : 'Dunkler Modus'}
          className="w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink dark:border-surface-600 bg-white dark:bg-surface-800 text-ink dark:text-lemon font-mono text-base shadow-hard-sm retro-press"
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>

      <nav className="flex flex-col gap-3">
        {LINKS.map(({ to, icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4 flex items-center gap-4 retro-press tap-highlight-none hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            <span className="w-11 h-11 inline-flex items-center justify-center rounded-retro border-2 border-ink bg-lemon text-ink text-lg font-mono font-black shadow-hard-sm flex-shrink-0">
              {icon}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-black text-ink dark:text-paper text-sm leading-tight">{title}</p>
              <p className="font-mono text-[11px] text-ink-soft dark:text-surface-100 mt-0.5 line-clamp-2">{desc}</p>
            </div>
            <span className="font-mono font-black text-ink dark:text-paper text-lg flex-shrink-0">›</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
