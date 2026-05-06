// 90-Tage-Aktivitäts-Heatmap im GitHub-Contributions-Stil.
// Eine Zelle pro Tag, 4 Helligkeits-Stufen Lemon, Wochen vertikal gestapelt.

import { useMemo } from 'react'
import type { AppState } from '@/context/appReducer'

interface Props {
  state: AppState
  days?: number
}

interface DayCell {
  iso: string
  intensity: 0 | 1 | 2 | 3 | 4
  date: Date
}

function isoOf(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function buildActivityMap(state: AppState): Record<string, number> {
  const map: Record<string, number> = {}
  for (const ex of Object.values(state.exercises ?? {})) {
    for (const a of ex.attempts ?? []) {
      const day = a.timestamp.slice(0, 10)
      map[day] = (map[day] ?? 0) + 1
    }
  }
  // SessionStats heute hinzufügen, falls leer (z.B. Migration)
  if (state.gamification.sessionStats?.date) {
    const d = state.gamification.sessionStats.date
    if (state.gamification.sessionStats.exercisesTotal > 0 && !map[d]) {
      map[d] = state.gamification.sessionStats.exercisesTotal
    }
  }
  return map
}

function intensityFor(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0
  if (count < 5) return 1
  if (count < 12) return 2
  if (count < 24) return 3
  return 4
}

const INTENSITY_CLASSES: Record<number, string> = {
  0: 'bg-surface-100 dark:bg-surface-800 border-surface-300 dark:border-surface-700',
  1: 'bg-lemon/30 dark:bg-lemon/15 border-lemon-dark/40',
  2: 'bg-lemon/55 dark:bg-lemon/35 border-lemon-dark/60',
  3: 'bg-lemon/80 dark:bg-lemon/60 border-lemon-dark/80',
  4: 'bg-lemon dark:bg-lemon border-ink',
}

export function StreakHeatmap({ state, days = 90 }: Props) {
  const cells: DayCell[] = useMemo(() => {
    const activity = buildActivityMap(state)
    const out: DayCell[] = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today.valueOf() - i * 86400000)
      const iso = isoOf(d)
      out.push({ iso, intensity: intensityFor(activity[iso] ?? 0), date: d })
    }
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, state.exercises, state.gamification.sessionStats])

  // Gruppiere in Wochen-Säulen (7 Zeilen, n Spalten). Erste Zeile = Sonntag.
  const weeks: DayCell[][] = []
  let currentWeek: DayCell[] = []
  // Pad vorne, damit erste Spalte mit Sonntag startet
  const firstDow = cells[0]?.date.getDay() ?? 0
  for (let i = 0; i < firstDow; i++) {
    currentWeek.push({ iso: `pad-${i}`, intensity: 0, date: new Date(0) })
  }
  for (const c of cells) {
    currentWeek.push(c)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push({ iso: `pad-end-${currentWeek.length}`, intensity: 0, date: new Date(0) })
    weeks.push(currentWeek)
  }

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest">
          // Aktivität · letzte {days} Tage
        </p>
        <div className="flex items-center gap-1 text-[10px] font-mono text-ink-soft dark:text-surface-400">
          <span>weniger</span>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`inline-block w-2.5 h-2.5 rounded-sm border ${INTENSITY_CLASSES[i]}`} aria-hidden />
          ))}
          <span>mehr</span>
        </div>
      </div>
      <div
        className="overflow-x-auto"
        // GitHub-Style: Wochen sind Spalten, Wochentage Zeilen
      >
        <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-fit">
          {weeks.flatMap((week) =>
            week.map((c) => {
              const isPad = c.iso.startsWith('pad-')
              return (
                <span
                  key={c.iso}
                  aria-label={isPad ? undefined : `${c.iso} — Aktivität ${c.intensity}/4`}
                  title={isPad ? undefined : c.iso}
                  className={[
                    'w-3.5 h-3.5 rounded-sm border',
                    isPad ? 'invisible' : INTENSITY_CLASSES[c.intensity],
                  ].join(' ')}
                />
              )
            }),
          )}
        </div>
      </div>
    </div>
  )
}
