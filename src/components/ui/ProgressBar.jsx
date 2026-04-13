import { cn } from '@/utils/cn'

const colorMap = {
  blue:   'bg-primary-600',
  green:  'bg-green-500',
  yellow: 'bg-yellow-400',
}

export function ProgressBar({ value = 0, color = 'blue', size = 'md', animated = false, className }) {
  const clamped = Math.max(0, Math.min(100, value))
  const height = size === 'sm' ? 'h-1.5' : 'h-2.5'

  return (
    <div className={cn('w-full bg-surface-100 rounded-full overflow-hidden', height, className)}>
      <div
        className={cn(
          'h-full rounded-full transition-all duration-500',
          colorMap[color] ?? colorMap.blue,
          animated && 'animate-pulse'
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
