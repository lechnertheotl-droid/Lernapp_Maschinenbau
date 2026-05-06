// Horizontale Balken pro Topic mit Genauigkeit (% richtig). Mono-Stil.

import type { AppState } from '@/context/appReducer'
import { getAllTopics, getAllLessons } from '@/content/index'

interface Props {
  state: AppState
}

interface TopicStat {
  id: string
  title: string
  correct: number
  total: number
  pct: number
}

export function TopicAccuracyChart({ state }: Props) {
  const topics = getAllTopics() as { id: string; title: string }[]
  const stats: TopicStat[] = topics.map((t) => {
    const lessonIds: string[] = (getAllLessons(t.id) as { id: string }[]).map((l) => l.id)
    let correct = 0
    let total = 0
    // Mastery aggregiert pro Lesson totalAttempts/correctCount — wir summieren über alle Lessons des Topics.
    for (const lessonId of lessonIds) {
      const m = state.mastery[lessonId]
      if (!m) continue
      total += m.totalAttempts
      correct += m.correctCount
    }
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    return { id: t.id, title: t.title, correct, total, pct }
  })

  const withData = stats.filter((s) => s.total > 0).sort((a, b) => b.pct - a.pct)

  if (withData.length === 0) {
    return (
      <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4">
        <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-2">
          // Genauigkeit pro Thema
        </p>
        <p className="text-ink-soft dark:text-surface-400 text-sm">Noch keine Aufgaben gelöst.</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4">
      <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-3">
        // Genauigkeit pro Thema
      </p>
      <ul className="flex flex-col gap-2">
        {withData.map((s) => (
          <li key={s.id} className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-black text-ink dark:text-paper truncate flex-1 min-w-0">
              {s.title}
            </span>
            <span className="relative h-2 w-32 bg-surface-200 dark:bg-surface-700 rounded-sm overflow-hidden border border-ink/20 dark:border-surface-500 flex-shrink-0">
              <span
                className="absolute left-0 top-0 bottom-0 bg-primary-700 dark:bg-primary-400"
                style={{ width: `${s.pct}%` }}
              />
            </span>
            <span className="font-mono text-[10px] font-black text-ink dark:text-paper tabular-nums w-10 text-right">
              {s.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
