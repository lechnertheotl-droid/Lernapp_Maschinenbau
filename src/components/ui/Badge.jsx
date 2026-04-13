import { cn } from '@/utils/cn'
import { getMasteryColor, getMasteryLabel } from '@/utils/masteryCheck'

export function Badge({ status, children, className }) {
  const colorClass = getMasteryColor(status)
  const label = children ?? getMasteryLabel(status)
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium', colorClass, className)}>
      {label}
    </span>
  )
}
