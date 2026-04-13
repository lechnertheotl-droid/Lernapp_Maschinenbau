import { cn } from '@/utils/cn'

const base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none tap-highlight-none'

const variants = {
  primary:   'bg-primary-700 text-white hover:bg-primary-800 active:scale-95 shadow-sm',
  secondary: 'bg-surface-100 text-surface-800 hover:bg-surface-200 active:scale-95',
  ghost:     'text-surface-600 hover:bg-surface-100 active:scale-95',
  success:   'bg-green-600 text-white hover:bg-green-700 active:scale-95 shadow-sm',
  danger:    'bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-sm',
}

const sizes = {
  sm:  'h-8  px-3  text-sm  gap-1.5',
  md:  'h-10 px-4  text-sm  gap-2',
  lg:  'h-12 px-6  text-base gap-2 min-w-[44px]',
  xl:  'h-14 px-8  text-base gap-2 min-w-[44px]',
}

export function Button({ variant = 'primary', size = 'md', disabled, loading, onClick, children, className, type = 'button', fullWidth }) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
    >
      {loading && (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      )}
      {children}
    </button>
  )
}
