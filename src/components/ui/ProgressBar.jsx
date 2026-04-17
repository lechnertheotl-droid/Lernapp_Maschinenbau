import { cn } from '@/utils/cn'

const SIZE_CLASSES = {
  sm: 'h-2',
  md: 'h-2.5',
  lg: 'h-3',
}

const TONE_CLASSES = {
  primary: {
    track: 'bg-surface-100 dark:bg-surface-700 border-ink',
    fill:  'bg-primary-700',
  },
  lemon:   {
    track: 'bg-lemon-light border-lemon-dark',
    fill:  'bg-lemon-dark',
  },
  green:   {
    track: 'bg-surface-100 dark:bg-surface-700 border-ink',
    fill:  'bg-green-600',
  },
  // Für dunkle Hintergründe (z.B. TopicDetail-Header, ReviewArea-Header):
  // gelber Balken auf dunklem Track, damit der Akzent auch auf Ink sichtbar bleibt.
  'dark-lemon': {
    track: 'bg-surface-800 border-surface-600',
    fill:  'bg-lemon',
  },
}

/**
 * Einheitliche Progress-Bar im Retro-Stil (border 1px, gefüllter Block).
 * `value` wird auf 0–100 geclampt.
 */
export function ProgressBar({ value = 0, size = 'md', tone = 'primary', className }) {
  const pct  = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0))
  const sz   = SIZE_CLASSES[size] ?? SIZE_CLASSES.md
  const tn   = TONE_CLASSES[tone] ?? TONE_CLASSES.primary

  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(sz, 'border rounded-sm overflow-hidden', tn.track, className)}
    >
      <div
        className={cn('h-full transition-all duration-500', tn.fill)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
