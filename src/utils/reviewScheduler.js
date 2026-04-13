// Simplified SM-2: interval sequence in days
const INTERVALS = [1, 3, 7, 14, 30]

/**
 * Computes the next review due date ISO string based on mastery entry.
 */
export function computeNextReviewDate(masteryEntry) {
  const reviewCount = masteryEntry.reviewCount ?? 0
  const intervalDays = INTERVALS[Math.min(reviewCount, INTERVALS.length - 1)]
  const base = masteryEntry.lastPracticeDate
    ? new Date(masteryEntry.lastPracticeDate)
    : new Date()
  base.setDate(base.getDate() + intervalDays)
  return base.toISOString().split('T')[0] // YYYY-MM-DD
}

/**
 * Filters queue to items due on or before `now` (Date or timestamp).
 */
export function getDueItems(reviewQueue, now) {
  const today = new Date(now).toISOString().split('T')[0]
  return (reviewQueue ?? [])
    .filter((item) => item.dueDate <= today)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

/**
 * Builds a full review queue from the mastery map.
 */
export function buildReviewQueue(masteryMap) {
  const queue = []
  for (const [lessonId, entry] of Object.entries(masteryMap ?? {})) {
    if (entry.status === 'review') {
      queue.push({
        lessonId,
        dueDate: new Date().toISOString().split('T')[0],
      })
    } else if (entry.status === 'understood' || entry.status === 'practiced' || entry.status === 'secure') {
      queue.push({
        lessonId,
        dueDate: computeNextReviewDate(entry),
      })
    }
  }
  return queue.sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

export function isOverdue(item, now) {
  const today = new Date(now).toISOString().split('T')[0]
  return item.dueDate < today
}
