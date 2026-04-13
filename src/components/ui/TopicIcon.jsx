import { cn } from '@/utils/cn'

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

function TriangleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M10 38 38 38 38 10Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M34 38 34 30 38 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 34 30 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function DerivativeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M7 36h34M12 41V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 34c8-1 10-21 18-22 4-.5 7 4 9 9" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M17 25h20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function VectorIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M9 38 36 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 10h12v12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 38h26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <path d="M9 38V12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function AlgebraIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="w-full h-full">
      <path d="M10 15h28M10 24h28M10 33h28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <text x="24" y="30" textAnchor="middle" className="fill-current font-mono font-black" fontSize="18">x^n</text>
    </svg>
  )
}

const ICONS = {
  trigonometry: TriangleIcon,
  ableitung: DerivativeIcon,
  vektoren: VectorIcon,
  algebra: AlgebraIcon,
}

export function TopicIcon({ topic, size = 'md', className }) {
  const Icon = ICONS[topic?.id]

  return (
    <span className={cn(
      'inline-flex items-center justify-center rounded-retro border-2 border-ink bg-lemon text-ink shadow-hard-sm flex-shrink-0',
      sizeClasses[size] ?? sizeClasses.md,
      className,
    )}>
      {Icon ? (
        <Icon />
      ) : (
        <span className="font-mono font-black text-sm uppercase tracking-tight">
          {(topic?.icon ?? topic?.title ?? '?').slice(0, 3)}
        </span>
      )}
    </span>
  )
}
