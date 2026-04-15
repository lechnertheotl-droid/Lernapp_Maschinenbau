import type { MasteryEntry, MasteryStatus } from './masteryCheck'

export function computeTopicProgress(completedLessons: string[] | undefined, totalLessons: number): number {
  if (!totalLessons || totalLessons === 0) return 0
  return Math.round(((completedLessons?.length ?? 0) / totalLessons) * 100)
}

export function getLessonStatus(masteryEntry: MasteryEntry | undefined | null): MasteryStatus {
  if (!masteryEntry) return 'not-started'
  return masteryEntry.status
}

const UNLOCKED_STATUSES = new Set<MasteryStatus>(['understood', 'practiced', 'secure', 'review'])

export function isLessonUnlocked(_prerequisites?: string[], _masteryMap?: Record<string, MasteryEntry>): boolean {
  return true
}

export interface TopicStats {
  total: number
  completed: number
  inProgress: number
  locked: number
}

export function buildTopicStats(
  lessonIds: string[],
  masteryMap: Record<string, MasteryEntry>
): TopicStats {
  let completed = 0
  let inProgress = 0

  for (const id of lessonIds) {
    const entry = masteryMap[id]
    if (!entry || entry.status === 'not-started') continue
    if (UNLOCKED_STATUSES.has(entry.status)) completed++
    else if (entry.status === 'started') inProgress++
  }

  const locked = lessonIds.length - completed - inProgress
  return { total: lessonIds.length, completed, inProgress, locked }
}
