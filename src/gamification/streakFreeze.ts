// Streak-Schutz-Logik: bei genau 1 verpasstem Tag wird automatisch
// ein Freeze konsumiert, falls vorhanden — der Streak bleibt erhalten.
// Bei 2+ verpassten Tagen: Streak bricht regulär.
//
// Pure Funktion, deterministisch über `today`-Parameter testbar.

import type { StreakState } from '@/utils/streakLogic'

export const MAX_STREAK_FREEZES = 2

export interface FreezeConsumeInput {
  streak: StreakState | undefined
  freezesAvailable: number
  today: string  // YYYY-MM-DD
}

export interface FreezeConsumeResult {
  streak: StreakState
  freezesAvailable: number
  freezeConsumed: boolean
  brokenStreakLength: number  // wenn der Streak gebrochen wäre — für Recovery-UI
}

function diffDaysUTC(laterISO: string, earlierISO: string): number {
  const a = new Date(`${laterISO}T00:00:00Z`).getTime()
  const b = new Date(`${earlierISO}T00:00:00Z`).getTime()
  return Math.round((a - b) / 86400000)
}

/**
 * Bei App-Öffnung / Datums-Wechsel aufrufen, BEVOR `updateStreak()` läuft.
 * Wenn 1-Tag-Lücke und Freeze verfügbar → konsumieren, lastActiveDate auf
 * gestern setzen (sodass updateStreak() den Streak fortsetzt).
 *
 * Side-effect-frei: gibt neuen Streak + neue Freeze-Anzahl zurück.
 */
export function evaluateStreakFreezeOnLogin(input: FreezeConsumeInput): FreezeConsumeResult {
  const { streak, freezesAvailable, today } = input

  if (!streak || !streak.lastActiveDate) {
    return {
      streak: streak ?? { current: 0, longest: 0, lastActiveDate: null },
      freezesAvailable,
      freezeConsumed: false,
      brokenStreakLength: 0,
    }
  }

  const gap = diffDaysUTC(today, streak.lastActiveDate)

  // Kein Gap oder fortlaufend (gap 0 = heute schon aktiv, gap 1 = gestern)
  if (gap <= 1) {
    return {
      streak,
      freezesAvailable,
      freezeConsumed: false,
      brokenStreakLength: 0,
    }
  }

  // Genau 2 Tage Gap = 1 Tag verpasst → Freeze kann retten
  if (gap === 2 && freezesAvailable > 0) {
    // Setze lastActiveDate auf "gestern" (today - 1 Tag), damit updateStreak()
    // den Streak nahtlos fortsetzt, sobald heute Aktivität erfolgt.
    const yesterday = new Date(`${today}T00:00:00Z`)
    yesterday.setUTCDate(yesterday.getUTCDate() - 1)
    const yesterdayISO = yesterday.toISOString().split('T')[0]
    return {
      streak: { ...streak, lastActiveDate: yesterdayISO },
      freezesAvailable: freezesAvailable - 1,
      freezeConsumed: true,
      brokenStreakLength: streak.current,
    }
  }

  // Streak bricht: gap >= 2 ohne Freeze, oder gap >= 3.
  return {
    streak,
    freezesAvailable,
    freezeConsumed: false,
    brokenStreakLength: streak.current,
  }
}

export function clampFreezes(n: number): number {
  return Math.max(0, Math.min(MAX_STREAK_FREEZES, Math.floor(n)))
}
