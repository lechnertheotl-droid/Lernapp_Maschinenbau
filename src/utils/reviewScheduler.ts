import type { MasteryEntry, MasteryStatus } from './masteryCheck'

const BASE_INTERVALS = [1, 3, 7, 14, 30, 60] // days
const MIN_EASE = 1.3
const DEFAULT_EASE = 2.5

export interface ReviewItem {
  lessonId: string
  dueDate: string  // YYYY-MM-DD
  interval: number // days
}

export interface ReviewStats {
  due: number
  upcoming: number
  totalReviewed: number
  streakDays: number
}

export function computeInterval(masteryEntry: Pick<MasteryEntry, 'reviewCount' | 'easeFactor'>): number {
  const reviewCount = masteryEntry.reviewCount ?? 0
  // Bug-Fix: bei explizitem 0 wäre `?? DEFAULT_EASE` falsch — wir wollen 0 behalten
  const ease = masteryEntry.easeFactor != null ? masteryEntry.easeFactor : DEFAULT_EASE

  if (reviewCount === 0) return 1
  if (reviewCount === 1) return 3

  const baseIdx = Math.min(reviewCount, BASE_INTERVALS.length - 1)
  const baseInterval = BASE_INTERVALS[baseIdx]
  return Math.round(baseInterval * (ease / DEFAULT_EASE))
}

export function computeNextReviewDate(masteryEntry: MasteryEntry): string {
  const intervalDays = computeInterval(masteryEntry)
  const base = masteryEntry.lastPracticeDate
    ? new Date(masteryEntry.lastPracticeDate)
    : new Date()
  base.setDate(base.getDate() + intervalDays)
  return base.toISOString().split('T')[0]
}

export function updateEaseFactor(currentEase: number | null | undefined, quality: number): number {
  const ease = currentEase != null ? currentEase : DEFAULT_EASE
  const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  return Math.max(MIN_EASE, Math.min(3.0, ease + delta))
}

export function getDueItems(reviewQueue: ReviewItem[] | undefined, now: Date | number): ReviewItem[] {
  const today = new Date(now).toISOString().split('T')[0]
  return (reviewQueue ?? [])
    .filter((item) => item.dueDate <= today)
    .sort((a, b) => {
      const overdueA = a.dueDate < today
      const overdueB = b.dueDate < today
      if (overdueA !== overdueB) return overdueA ? -1 : 1
      return a.dueDate.localeCompare(b.dueDate)
    })
}

export function getUpcomingItems(
  reviewQueue: ReviewItem[] | undefined,
  now: Date | number,
  withinDays = 3
): ReviewItem[] {
  const today = new Date(now)
  const future = new Date(today)
  future.setDate(future.getDate() + withinDays)
  const futureStr = future.toISOString().split('T')[0]
  const todayStr = today.toISOString().split('T')[0]
  return (reviewQueue ?? [])
    .filter((item) => item.dueDate > todayStr && item.dueDate <= futureStr)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
}

const REVIEWABLE_STATUSES = new Set<MasteryStatus>(['understood', 'practiced', 'secure'])

export function buildReviewQueue(masteryMap: Record<string, MasteryEntry> | undefined | null): ReviewItem[] {
  const queue: ReviewItem[] = []
  for (const [lessonId, entry] of Object.entries(masteryMap ?? {})) {
    if (entry.status === 'review') {
      queue.push({
        lessonId,
        dueDate: new Date().toISOString().split('T')[0],
        interval: 1,
      })
    } else if (REVIEWABLE_STATUSES.has(entry.status)) {
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

export function isOverdue(item: ReviewItem, now: Date | number): boolean {
  const today = new Date(now).toISOString().split('T')[0]
  return item.dueDate < today
}

export function getReviewStats(
  reviewQueue: ReviewItem[] | undefined,
  masteryMap: Record<string, MasteryEntry> | undefined,
  now: Date | number
): ReviewStats {
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

function computeStreak(masteryMap: Record<string, MasteryEntry> | undefined): number {
  const dates = new Set<string>()
  for (const entry of Object.values(masteryMap ?? {})) {
    if (entry.lastPracticeDate) {
      dates.add(entry.lastPracticeDate.split('T')[0])
    }
  }
  if (dates.size === 0) return 0

  let streak = 0
  const today = new Date()
  const check = new Date(today)
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
