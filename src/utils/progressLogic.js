/**
 * Computes overall topic progress 0–100 based on completed lessons.
 */
export function computeTopicProgress(completedLessons, totalLessons) {
  if (!totalLessons || totalLessons === 0) return 0
  return Math.round((completedLessons.length / totalLessons) * 100)
}

/**
 * Maps a mastery entry to a readable status string.
 */
export function getLessonStatus(masteryEntry) {
  if (!masteryEntry) return 'not-started'
  return masteryEntry.status
}

/**
 * Returns true if all prerequisite lessons have been at least "understood".
 */
const UNLOCKED_STATUSES = new Set(['understood', 'practiced', 'secure', 'review'])

// All lessons are always available — no locks
export function isLessonUnlocked(_prerequisites, _masteryMap) {
  return true
}

/**
 * Returns a summary count object for a topic's lessons.
 */
export function buildTopicStats(lessonIds, masteryMap) {
  let completed = 0
  let inProgress = 0
  let locked = 0

  for (const id of lessonIds) {
    const entry = masteryMap[id]
    if (!entry || entry.status === 'not-started') continue
    if (UNLOCKED_STATUSES.has(entry.status)) completed++
    else if (entry.status === 'started') inProgress++
  }

  locked = lessonIds.length - completed - inProgress

  return { total: lessonIds.length, completed, inProgress, locked }
}
