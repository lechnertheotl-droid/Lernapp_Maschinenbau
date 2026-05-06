// Drei Stern-Slots, die nacheinander mit stamp-in einblenden — gefüllter Stern
// für erreichte Sterne, leerer Stern-Outline für nicht erreichte.

interface Props {
  stars: 0 | 1 | 2 | 3
  size?: 'md' | 'lg'
}

export function StarReveal({ stars, size = 'lg' }: Props) {
  const px = size === 'lg' ? 'text-3xl' : 'text-2xl'
  return (
    <div className="flex items-center justify-center gap-3" role="img" aria-label={`${stars} von 3 Sternen`}>
      {[0, 1, 2].map((i) => {
        const filled = i < stars
        const delay = `${i * 0.18}s`
        return (
          <span
            key={i}
            aria-hidden
            className={[
              px,
              'inline-block leading-none',
              'motion-safe:animate-stamp-in motion-reduce:opacity-100',
              filled ? 'text-lemon-dark drop-shadow-[2px_2px_0_#1a1a1a]' : 'text-surface-300 dark:text-surface-600',
            ].join(' ')}
            style={{ animationDelay: delay, opacity: 0 }}
          >
            {filled ? '★' : '☆'}
          </span>
        )
      })}
    </div>
  )
}
