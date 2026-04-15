import { cn } from '@/utils/cn'

interface Props {
  current: number
  longest?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function StreakBadge({ current, longest, className, size = 'md' }: Props) {
  const active = current > 0
  const scale = size === 'sm' ? 'text-base px-2 py-1' : size === 'lg' ? 'text-xl px-3 py-2' : 'text-base px-2.5 py-1.5'
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 border-2 border-ink rounded-retro font-mono font-black',
        active
          ? 'bg-orange-500 text-white shadow-hard-sm'
          : 'bg-white dark:bg-surface-800 text-ink-soft dark:text-surface-400 shadow-hard-sm',
        scale,
        className
      )}
      role="status"
      aria-label={`Streak: ${current} Tag${current === 1 ? '' : 'e'}${longest ? `, Bestwert ${longest}` : ''}`}
    >
      <span aria-hidden>{active ? '🔥' : '·'}</span>
      <span className="num leading-none">{current}</span>
      <span className="text-[9px] uppercase tracking-widest opacity-80">Streak</span>
    </div>
  )
}
