export interface StreakState {
  current: number
  longest: number
  lastActiveDate: string | null
}

function todayISO(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function diffDaysUTC(laterISO: string, earlierISO: string): number {
  const a = new Date(`${laterISO}T00:00:00Z`).getTime()
  const b = new Date(`${earlierISO}T00:00:00Z`).getTime()
  return Math.round((a - b) / 86400000)
}

/**
 * Pure streak update: pass the current streak state and „today" (ISO date).
 * Same-day calls are idempotent. Exactly +1 day continues the streak, gaps reset to 1.
 */
export function updateStreak(
  cur: StreakState | undefined,
  today: string = todayISO()
): StreakState {
  const state = cur ?? { current: 0, longest: 0, lastActiveDate: null }
  if (state.lastActiveDate === today) return state
  if (!state.lastActiveDate) {
    return { current: 1, longest: Math.max(state.longest, 1), lastActiveDate: today }
  }
  const diff = diffDaysUTC(today, state.lastActiveDate)
  const newCurrent = diff === 1 ? state.current + 1 : 1
  return {
    current: newCurrent,
    longest: Math.max(state.longest, newCurrent),
    lastActiveDate: today,
  }
}
