import { cn } from '@/utils/cn'

export function Card({ children, className, onClick, elevated = false }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl border border-surface-200 overflow-hidden',
        elevated && 'shadow-md',
        onClick && 'cursor-pointer hover:border-primary-300 hover:shadow-md transition-all duration-150 text-left active:scale-[0.99] tap-highlight-none',
        className
      )}
    >
      {children}
    </Tag>
  )
}
