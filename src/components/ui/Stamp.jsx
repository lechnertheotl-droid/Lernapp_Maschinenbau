import { cn } from '@/utils/cn'

const VARIANT_CLASSES = {
  exam:     'text-lemon-dark',
  done:     'text-green-700',
  progress: 'text-primary-700 dark:text-primary-300',
}

/**
 * Retro-Stempel für Status-Badges (Prüfung ✓ / Fertig / 42%).
 * Nutzt die globale `.stamp`-CSS-Klasse aus index.css.
 */
export function Stamp({ variant = 'progress', children, className }) {
  return (
    <span className={cn('stamp flex-shrink-0', VARIANT_CLASSES[variant], className)}>
      {children}
    </span>
  )
}
