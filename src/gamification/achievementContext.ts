// Baut einen AchievementContext aus dem AppState, ohne State-Mutation.
// Nutzt curriculum + getAllTopics/getAllLessons, um Topic-Master + Phase-Master zu evaluieren.

import type { AppState } from '@/context/appReducer'
import type { AchievementContext, TopicMasterSeed } from './achievements'
import { getAllTopics, getAllLessons } from '@/content/index'
import { CURRICULUM_PHASES } from '@/content/curriculum'

interface PhaseDef {
  id: 0 | 1 | 2 | 3
  topicIds: string[]
}

function buildPhaseList(): PhaseDef[] {
  // CURRICULUM_PHASES gibt Phasen 0..3 mit subjects[].topicIds.
  return CURRICULUM_PHASES.map((p: { id: number; subjects: { topicIds: string[] }[] }) => ({
    id: p.id as 0 | 1 | 2 | 3,
    topicIds: Array.from(new Set(p.subjects.flatMap((s) => s.topicIds))),
  }))
}

// Liefert Topic-Master-Seeds — pro existierendem Topic ein Achievement.
export function getTopicMasterSeeds(): TopicMasterSeed[] {
  const topics = getAllTopics() as { id: string; title: string; icon?: string }[]
  return topics.map((t) => ({
    topicId: t.id,
    topicTitle: t.title,
    icon: t.icon ?? '◆',
  }))
}

function isWeekendCovered(weekendDays: string[]): boolean {
  // Achievement freigeschaltet, wenn in einem zusammenhängenden Sa+So-Paar beide Tage aktiv waren.
  if (weekendDays.length < 2) return false
  for (const day of weekendDays) {
    const d = new Date(`${day}T00:00:00Z`)
    if (d.getUTCDay() !== 6) continue  // suche Samstag
    const next = new Date(d.valueOf())
    next.setUTCDate(next.getUTCDate() + 1)
    const sundayIso = next.toISOString().split('T')[0]
    if (weekendDays.includes(sundayIso)) return true
  }
  return false
}

export function buildAchievementContext(state: AppState): AchievementContext {
  const correctAnswersTotal = Object.values(state.exercises ?? {}).reduce(
    (sum, ex) => sum + (ex.attempts ?? []).filter((a) => a.correct).length,
    0,
  )
  const lessonsCompletedTotal = Object.values(state.progress.topicProgress ?? {})
    .flatMap((tp) => tp.completedLessons ?? []).length

  // Topic-Completion: alle Lessons des Topics abgeschlossen.
  const topics = getAllTopics() as { id: string }[]
  const completedTopicIds = new Set<string>()
  for (const t of topics) {
    const totalLessons = getAllLessons(t.id).length
    const done = state.progress.topicProgress[t.id]?.completedLessons?.length ?? 0
    if (totalLessons > 0 && done >= totalLessons) completedTopicIds.add(t.id)
  }

  // Phase-Completion: alle Topics einer Phase abgeschlossen, die in der App existieren.
  // (Einige Phasen referenzieren Topics, die noch nicht implementiert sind — diese
  // werden ignoriert, sonst wäre die Phase nie erreichbar.)
  const completedPhases = new Set<0 | 1 | 2 | 3>()
  const existingTopicIds = new Set(topics.map((t) => t.id))
  for (const phase of buildPhaseList()) {
    const topicsInPhase = phase.topicIds.filter((id) => existingTopicIds.has(id))
    if (topicsInPhase.length === 0) continue
    if (topicsInPhase.every((id) => completedTopicIds.has(id))) {
      completedPhases.add(phase.id)
    }
  }

  const stars = state.gamification.starsByLessonId
  const starValues = Object.values(stars)
  const threeStarLessons = starValues.filter((v) => v === 3).length

  return {
    correctAnswersTotal,
    lessonsCompletedTotal,
    xpTotal: state.gamification.xp,
    streakLongest: state.streak?.longest ?? 0,
    longestCombo: state.gamification.longestCombo,
    weekendActive: isWeekendCovered(state.gamification.weekendDays ?? []),
    threeStarLessons,
    hasPerfectLesson: threeStarLessons >= 1,
    completedTopicIds,
    completedPhases,
    comebackStreakAchieved: state.gamification.comebackStreakAchieved,
    earlyBirdAchieved: state.gamification.earlyBirdAchieved,
    practicePassed: state.gamification.practicePassed,
  }
}
