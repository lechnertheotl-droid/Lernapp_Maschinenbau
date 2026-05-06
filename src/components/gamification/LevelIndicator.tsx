// Kompakter Level-Block für PathCard-Header und Profil. Mono-Stil, dünne XP-Bar.

import { Link } from 'react-router-dom'
import { getLevelInfo } from '@/gamification/levels'

interface Props {
  xp: number
  size?: 'sm' | 'md' | 'lg'
  href?: string  // wenn gesetzt → klickbar (Profil)
  showBar?: boolean
}

export function LevelIndicator({ xp, size = 'sm', href, showBar = true }: Props) {
  const info = getLevelInfo(xp)
  const padding = size === 'lg' ? 'px-3 py-2' : size === 'md' ? 'px-2.5 py-1.5' : 'px-2 py-1'
  const labelText = size === 'sm' ? `LV ${info.level}` : `LV ${info.level} · ${info.rank}`
  const ariaLabel = `Level ${info.level}, ${info.rank}, ${info.xpIntoLevel} von ${info.xpForNextLevel ?? '∞'} XP`
  const className = [
    'inline-flex items-center gap-2 border-2 border-ink rounded-retro shadow-hard-sm',
    'bg-white dark:bg-surface-800 text-ink dark:text-paper',
    'font-mono text-[10px] font-black uppercase tracking-wide',
    padding,
    href ? 'tap-highlight-none retro-press' : '',
  ].join(' ')

  const content = (
    <>
      <span className="whitespace-nowrap tabular-nums">{labelText}</span>
      {showBar && !info.isMaxLevel && (
        <span aria-hidden className="relative inline-block w-12 h-1.5 bg-surface-200 dark:bg-surface-600 rounded-sm overflow-hidden">
          <span
            className="absolute left-0 top-0 bottom-0 bg-primary-700 dark:bg-primary-400"
            style={{ width: `${Math.round(info.progressInLevel * 100)}%` }}
          />
        </span>
      )}
      {info.isMaxLevel && (
        <span aria-hidden className="text-[10px]">MAX</span>
      )}
    </>
  )

  if (href) {
    return (
      <Link to={href} aria-label={ariaLabel} className={className}>
        {content}
      </Link>
    )
  }
  return (
    <div aria-label={ariaLabel} className={className}>
      {content}
    </div>
  )
}
