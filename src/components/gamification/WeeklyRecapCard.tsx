// Wochen-Vergleich: diese Woche vs. letzte Woche, kompakt mit Mono-Zahlen.

import { useMemo } from 'react'
import type { AppState } from '@/context/appReducer'
import { getIsoWeek } from '@/gamification/quests'

interface Props {
  state: AppState
}

interface WeekStats {
  exercises: number
  correct: number
  lessons: number
}

function todayDate(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function dateNDaysAgo(n: number): Date {
  const d = todayDate()
  d.setDate(d.getDate() - n)
  return d
}

function isoOf(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function WeeklyRecapCard({ state }: Props) {
  const stats = useMemo(() => {
    const thisWeekIso = getIsoWeek(isoOf(todayDate()))
    const lastWeekIso = getIsoWeek(isoOf(dateNDaysAgo(7)))
    const tw: WeekStats = { exercises: 0, correct: 0, lessons: 0 }
    const lw: WeekStats = { exercises: 0, correct: 0, lessons: 0 }
    for (const ex of Object.values(state.exercises ?? {})) {
      for (const a of ex.attempts ?? []) {
        const aw = getIsoWeek(a.timestamp.slice(0, 10))
        if (aw === thisWeekIso) {
          tw.exercises++
          if (a.correct) tw.correct++
        } else if (aw === lastWeekIso) {
          lw.exercises++
          if (a.correct) lw.correct++
        }
      }
    }
    // Lessons-completed pro Woche aus completedLessons-Datum nicht trivial verfügbar —
    // wir nutzen nur exercises-Counter für die Card.
    return { tw, lw }
  }, [state])

  const Row = ({ label, a, b }: { label: string; a: number; b: number }) => {
    const diff = a - b
    const sign = diff > 0 ? '+' : diff < 0 ? '−' : '·'
    return (
      <div className="flex items-baseline justify-between gap-3 py-1.5 border-b border-surface-200 dark:border-surface-700 last:border-b-0">
        <span className="font-mono text-[10px] font-black text-ink-soft dark:text-surface-400 uppercase tracking-wide">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="num font-mono font-black text-ink dark:text-paper tabular-nums">{a}</span>
          <span className="font-mono text-[10px] text-ink-soft dark:text-surface-400">vs. {b}</span>
          <span
            className={[
              'font-mono text-[10px] font-black tabular-nums',
              diff > 0 ? 'text-green-700 dark:text-green-300' : diff < 0 ? 'text-red-700 dark:text-red-300' : 'text-ink-soft dark:text-surface-400',
            ].join(' ')}
          >
            {sign}{Math.abs(diff)}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4">
      <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-3">
        // Diese Woche vs. letzte Woche
      </p>
      <Row label="Aufgaben" a={stats.tw.exercises} b={stats.lw.exercises} />
      <Row label="Davon richtig" a={stats.tw.correct} b={stats.lw.correct} />
    </div>
  )
}
