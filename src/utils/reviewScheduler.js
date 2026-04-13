// ── Enhanced Spaced Repetition (SM-2 inspired) ──────────────────────────────
// Each lesson tracks an ease factor and interval. Correct answers increase
// the interval; incorrect answers reset it. The ease factor adjusts how
// aggressively intervals grow.

const BASE_INTERVALS = [1, 3, 7, 14, 30, 60] // days
const MIN_EASE = 1.3
const DEFAULT_EASE = 2.5

/**
 * Computes the next review interval in days, accounting for ease factor
 * and review history.
 */
export function computeInterval(masteryEntry) {
  const reviewCount = masteryEntry.reviewCount ?? 0
  const ease = masteryEntry.easeFactor ?? DEFAULT_EASE

  if (reviewCount === 0) return 1
  if (reviewCount === 1) return 3

  // After first two fixed intervals, use ease-factor-based growth
  const baseIdx = Math.min(reviewCount, BASE_INTERVALS.length - 1)
  const baseInterval = BASE_INTERVALS[baseIdx]
  return Math.round(baseInterval * (ease / DEFAULT_EASE))
}

/**
 * Computes the next review due date ISO string based on mastery entry.
 */
export function computeNextReviewDate(masteryEntry) {
  const intervalDays = computeInterval(masteryEntry)
  const base = masteryEntry.lastPracticeDate
    ? new Date(masteryEntry.lastPracticeDate)
    : new Date()
  base.setDate(base.getDate() + intervalDays)
  return base.toISOString().split('T')[0] // YYYY-MM-DD
}

/**
 * Updates the ease factor after a review.
 * Correct answers raise ease (max 3.0), wrong answers lower it (min 1.3).
 * quality: 0-2 = wrong/hard, 3 = okay, 4-5 = easy/perfect
 */
export function updateEaseFactor(currentEase, quality) {
  const ease = currentEase ?? DEFAULT_EASE
  // SM-2 formula simplified
  const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  return Math.max(MIN_EASE, Math.min(3.0, ease + delta))
}

/**
 * Filters queue to items due on or before `now` (Date or timestamp).
 */
export function getDueItems(reviewQueue, now) {
  const today = new Date(now).toISOString().split('T')[0]
  return (reviewQueue ?? [])
    .filter((item) => item.dueDate <= today)
    .sort((a, b) => {
      // Prioritize overdue items, then by interval (shorter = more urgent)
      const overdueA = a.dueDate < today
      const overdueB = b.dueDate < today
      if (overdueA !== overdueB) return overdueA ? -1 : 1
      return a.dueDate.localeCompare(b.dueDate)
    })
}

/**
 * Gets items due soon (within the next N days).
 */
export function getUpcomingItems(reviewQueue, now, withinDays = 3) {
  const today = new Date(now)
  const future = new Date(today)
  future.setDate(future.getDate() + withinDays)
  const futureStr = future.toISOString().split('T')[0]
  const todayStr = today.toISOString().split('T')[0]
  return (reviewQueue ?? [])
    .filter((item) => item.dueDate > todayStr && item.dueDate <= futureStr)
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
        interval: 1,
      })
    } else if (entry.status === 'understood' || entry.status === 'practiced' || entry.status === 'secure') {
      const interval = computeInterval(entry)
      queue.push({
        lessonId,
        dueDate: computeNextReviewDate(entry),
        interval,
      })
    }
  }
  return queue.sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

export function isOverdue(item, now) {
  const today = new Date(now).toISOString().split('T')[0]
  return item.dueDate < today
}

/**
 * Computes review stats for the dashboard.
 */
export function getReviewStats(reviewQueue, masteryMap, now) {
  const today = new Date(now).toISOString().split('T')[0]
  const due = (reviewQueue ?? []).filter((i) => i.dueDate <= today).length
  const upcoming = (reviewQueue ?? []).filter((i) => {
    const future = new Date(now)
    future.setDate(future.getDate() + 3)
    return i.dueDate > today && i.dueDate <= future.toISOString().split('T')[0]
  }).length
  const totalReviewed = Object.values(masteryMap ?? {})
    .reduce((sum, e) => sum + (e.reviewCount ?? 0), 0)
  const streakDays = computeStreak(masteryMap)
  return { due, upcoming, totalReviewed, streakDays }
}

/**
 * Computes the current consecutive-day review streak.
 */
function computeStreak(masteryMap) {
  const dates = new Set()
  for (const entry of Object.values(masteryMap ?? {})) {
    if (entry.lastPracticeDate) {
      dates.add(entry.lastPracticeDate.split('T')[0])
    }
  }
  if (dates.size === 0) return 0

  let streak = 0
  const today = new Date()
  const check = new Date(today)
  // Allow today to not yet be practiced
  const todayStr = today.toISOString().split('T')[0]
  if (!dates.has(todayStr)) {
    check.setDate(check.getDate() - 1)
  }

  while (dates.has(check.toISOString().split('T')[0])) {
    streak++
    check.setDate(check.getDate() - 1)
  }
  return streak
}
