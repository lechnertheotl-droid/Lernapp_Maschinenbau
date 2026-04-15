import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

const base = [
  'inline-flex items-center justify-center font-semibold',
  'border-2 border-ink',
  'rounded-retro',
  'retro-press',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  'disabled:opacity-40 disabled:pointer-events-none',
  'tap-highlight-none select-none',
].join(' ')

const variants = {
  primary:   'bg-primary-700 text-white shadow-hard-sm hover:bg-primary-800',
  secondary: 'bg-white text-ink shadow-hard-sm hover:bg-surface-50',
  ghost:     'border-transparent text-ink-soft hover:bg-surface-100 hover:border-surface-200',
  success:   'bg-green-600 text-white shadow-hard-green hover:bg-green-700',
  danger:    'bg-red-600 text-white shadow-hard-red hover:bg-red-700',
  lemon:     'bg-lemon text-ink shadow-hard-lemon hover:bg-lemon-dark',
  dark:      'bg-ink text-lemon border-ink shadow-hard-lg hover:bg-ink-light',
} as const

const sizes = {
  xs: 'h-7  px-2.5 text-xs  gap-1',
  sm: 'h-8  px-3   text-xs  gap-1.5',
  md: 'h-10 px-4   text-sm  gap-2',
  lg: 'h-12 px-5   text-sm  gap-2   min-w-[44px]',
  xl: 'h-14 px-7   text-base gap-2.5 min-w-[44px]',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  onClick,
  children,
  className,
  type = 'button',
  fullWidth,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...rest}
    >
      {loading && (
        <svg className="w-4 h-4 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  )
}
