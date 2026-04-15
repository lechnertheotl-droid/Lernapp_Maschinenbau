import type { ReactNode } from 'react'
import type { Priority } from '@/types/content'

interface FormelBlockProps {
  title: string
  priority?: Priority
  label?: string
  children: ReactNode
}

const styleByPriority: Record<Priority, { wrapper: string; accent: string; chip: string }> = {
  kritisch: {
    wrapper: 'border-red-600 bg-red-50 dark:bg-red-950/40',
    accent: 'text-red-700 dark:text-red-300',
    chip: 'bg-red-600 text-white',
  },
  wichtig: {
    wrapper: 'border-ink bg-lemon-light formula-box-like',
    accent: 'text-primary-700 dark:text-lemon',
    chip: 'bg-lemon text-ink',
  },
  optional: {
    wrapper: 'border-green-700 bg-green-50 dark:bg-green-950/30',
    accent: 'text-green-800 dark:text-green-300',
    chip: 'bg-green-700 text-white',
  },
}

const priorityLabel: Record<Priority, string> = {
  kritisch: 'KRITISCH',
  wichtig: 'FORMELBLOCK',
  optional: 'OPTIONAL',
}

export function FormelBlock({ title, priority = 'wichtig', label, children }: FormelBlockProps) {
  const s = styleByPriority[priority]
  return (
    <div className={`border-2 ${s.wrapper} rounded-retro shadow-hard-sm p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`font-mono text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${s.chip}`}
        >
          {label ?? priorityLabel[priority]}
        </span>
      </div>
      <h3 className="font-black text-ink dark:text-paper text-lg leading-tight mb-3">{title}</h3>
      <div className={s.accent}>{children}</div>
    </div>
  )
}
