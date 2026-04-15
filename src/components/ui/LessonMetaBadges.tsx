import { cn } from '@/utils/cn'
import { difficultyLabel } from '@/utils/lessonMeta'
import type { Difficulty } from '@/types/content'

const diffStyle: Record<Difficulty, string> = {
  einsteiger:      'bg-green-100 text-green-900 border-green-700 dark:bg-green-900/50 dark:text-green-200 dark:border-green-500',
  grundlagen:      'bg-blue-100 text-blue-900 border-blue-700 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-500',
  mittel:          'bg-amber-100 text-amber-900 border-amber-700 dark:bg-amber-900/50 dark:text-amber-100 dark:border-amber-500',
  fortgeschritten: 'bg-orange-100 text-orange-900 border-orange-700 dark:bg-orange-900/50 dark:text-orange-100 dark:border-orange-500',
  pruefung:        'bg-red-100 text-red-900 border-red-700 dark:bg-red-900/50 dark:text-red-200 dark:border-red-500',
}

interface Props {
  minutes: number | undefined
  difficulty: Difficulty
  className?: string
}

export function LessonMetaBadges({ minutes, difficulty, className }: Props) {
  return (
    <div className={cn('flex gap-1.5 flex-wrap', className)}>
      {typeof minutes === 'number' && (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 border-2 border-ink rounded-sm bg-white dark:bg-surface-800 text-ink dark:text-paper font-mono text-[10px] font-black uppercase tracking-wider">
          <span aria-hidden>⏱</span>
          <span className="num">{minutes} min</span>
        </span>
      )}
      <span
        className={cn(
          'inline-flex items-center gap-1 px-1.5 py-0.5 border-2 rounded-sm font-mono text-[10px] font-black uppercase tracking-wider',
          diffStyle[difficulty]
        )}
      >
        {difficultyLabel(difficulty)}
      </span>
    </div>
  )
}
