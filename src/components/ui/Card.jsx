import { cn } from '@/utils/cn'

export function Card({ children, className, onClick, elevated = false }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'bg-white rounded-retro border-2 border-ink overflow-hidden text-left',
        elevated && 'shadow-hard',
        onClick && [
          'cursor-pointer tap-highlight-none retro-press',
          'hover:bg-surface-50 shadow-hard',
        ],
        className
      )}
    >
      {children}
    </Tag>
  )
}
