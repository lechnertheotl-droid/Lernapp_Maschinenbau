export type MasteryStatus =
  | 'not-started'
  | 'started'
  | 'understood'
  | 'practiced'
  | 'secure'
  | 'review'

export const MASTERY_LEVELS: MasteryStatus[] = [
  'not-started', 'started', 'understood', 'practiced', 'secure', 'review',
]

export interface MasteryEntry {
  status: MasteryStatus
  correctCount: number
  consecutiveCorrect: number
  totalAttempts: number
  lastPracticeDate: string | null
  reviewCount: number
  easeFactor?: number
}

const ADVANCE_THRESHOLDS: Partial<Record<MasteryStatus, number>> = {
  'not-started': 0,
  'started':     1,
  'understood':  3,
  'practiced':   5,
  'secure':      1,
}

const SECURE_INDEX = MASTERY_LEVELS.indexOf('secure')

/**
 * Pure-function update einer Mastery-Entry nach einem neuen Versuch.
 */
export function evaluateAttempt(
  masteryEntry: MasteryEntry | null | undefined,
  isCorrect: boolean
): MasteryEntry {
  const entry: MasteryEntry = masteryEntry ?? {
    status: 'not-started',
    correctCount: 0,
    consecutiveCorrect: 0,
    totalAttempts: 0,
    lastPracticeDate: null,
    reviewCount: 0,
  }

  const now = new Date().toISOString()
  const consecutiveCorrect = isCorrect ? entry.consecutiveCorrect + 1 : 0
  const correctCount = entry.correctCount + (isCorrect ? 1 : 0)
  const totalAttempts = entry.totalAttempts + 1

  let newStatus: MasteryStatus = entry.status === 'not-started' ? 'started' : entry.status

  const threshold = ADVANCE_THRESHOLDS[newStatus]
  if (isCorrect && threshold !== undefined && consecutiveCorrect >= threshold) {
    const currentIdx = MASTERY_LEVELS.indexOf(newStatus)
    if (currentIdx >= 0 && currentIdx < SECURE_INDEX) {
      newStatus = MASTERY_LEVELS[currentIdx + 1]
    }
  }

  return {
    ...entry,
    status: newStatus,
    correctCount,
    consecutiveCorrect,
    totalAttempts,
    lastPracticeDate: now,
  }
}

export function getMasteryColor(status: MasteryStatus | string | undefined): string {
  switch (status) {
    case 'secure':      return 'text-green-700  dark:text-green-300  bg-green-100  dark:bg-green-950/50'
    case 'practiced':   return 'text-blue-700   dark:text-blue-300   bg-blue-100   dark:bg-blue-950/50'
    case 'understood':  return 'text-sky-700    dark:text-sky-300    bg-sky-100    dark:bg-sky-950/50'
    case 'started':     return 'text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-950/50'
    case 'review':      return 'text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-950/50'
    default:            return 'text-surface-500 dark:text-surface-400 bg-surface-100 dark:bg-surface-800'
  }
}

export function getMasteryLabel(status: MasteryStatus | string | undefined): string {
  switch (status) {
    case 'secure':      return 'Sicher'
    case 'practiced':   return 'Geübt'
    case 'understood':  return 'Verstanden'
    case 'started':     return 'Begonnen'
    case 'review':      return 'Wiederholen'
    default:            return 'Neu'
  }
}
