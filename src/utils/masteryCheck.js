/**
 * Status order for comparison.
 */
export const MASTERY_LEVELS = ['not-started', 'started', 'understood', 'practiced', 'secure', 'review']

/**
 * Thresholds: how many consecutive correct answers required to advance.
 */
const ADVANCE_THRESHOLDS = {
  'not-started': 0,  // any attempt
  'started':     1,
  'understood':  3,
  'practiced':   5,
  'secure':      1,  // must pass review
}

/**
 * Evaluates a new attempt and returns an updated mastery entry.
 * Pure function — does not mutate.
 */
export function evaluateAttempt(masteryEntry, isCorrect) {
  const entry = masteryEntry ?? {
    status: 'not-started',
    correctCount: 0,
    consecutiveCorrect: 0,
    totalAttempts: 0,
    lastPracticeDate: null,
    reviewCount: 0,
  }

  const now = new Date().toISOString()
  const consecutiveCorrect = isCorrect ? (entry.consecutiveCorrect ?? 0) + 1 : 0
  const correctCount = entry.correctCount + (isCorrect ? 1 : 0)
  const totalAttempts = entry.totalAttempts + 1

  let newStatus = entry.status === 'not-started' ? 'started' : entry.status

  // Advance based on thresholds
  const threshold = ADVANCE_THRESHOLDS[newStatus]
  if (isCorrect && threshold !== undefined && consecutiveCorrect >= threshold) {
    const currentIdx = MASTERY_LEVELS.indexOf(newStatus)
    // Advance one level, but never past 'secure'
    if (currentIdx >= 0 && currentIdx < MASTERY_LEVELS.indexOf('secure')) {
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

/**
 * Returns a Tailwind CSS color class for a given mastery status.
 */
export function getMasteryColor(status) {
  switch (status) {
    case 'secure':      return 'text-green-700 bg-green-100'
    case 'practiced':   return 'text-blue-700 bg-blue-100'
    case 'understood':  return 'text-sky-700 bg-sky-100'
    case 'started':     return 'text-yellow-700 bg-yellow-100'
    case 'review':      return 'text-orange-700 bg-orange-100'
    default:            return 'text-surface-500 bg-surface-100'
  }
}

export function getMasteryLabel(status) {
  switch (status) {
    case 'secure':      return 'Sicher'
    case 'practiced':   return 'Geübt'
    case 'understood':  return 'Verstanden'
    case 'started':     return 'Begonnen'
    case 'review':      return 'Wiederholen'
    default:            return 'Neu'
  }
}
