import { cn } from '@/utils/cn'

/**
 * Quadratischer Icon-Button für Tool-Leisten (LessonView Sticky-Header).
 * Konsolidiert die 4–5 gleich gebauten Buttons (Back, Variablen, Formeln,
 * Calculator, Zusammenfassung). Für lange Buttons weiterhin `<Button>` nutzen.
 */
export function ToolButton({
  onClick,
  children,
  label,
  variant = 'default', // 'default' | 'lemon'
  className,
  ...rest
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-retro border-2 border-ink',
        'text-ink tap-highlight-none retro-press font-mono font-black',
        variant === 'lemon'
          ? 'bg-lemon shadow-hard-lemon'
          : 'bg-white dark:bg-surface-800 dark:text-surface-100 shadow-hard-sm',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
