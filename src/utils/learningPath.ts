import { sortTopicsByPathOrder, getStudienbeginPhase } from './topicGraph'
import type { TopicProgress } from '@/context/appReducer'
import type { PracticeAttemptSummary } from '@/types/practice'

export type LessonStep = {
  kind: 'lesson'
  index: number
  topicId: string
  topicTitle: string
  lessonId: string
  lessonTitle: string
  phase: 1 | 2 | 3
}

export type PracticeStep = {
  kind: 'practice'
  index: number
  topicId: string
  topicTitle: string
  practiceCount: number
  phase: 1 | 2 | 3
}

export type PathStep = LessonStep | PracticeStep

export interface PathProgress {
  steps: PathStep[]
  doneFlags: boolean[]
  currentIndex: number
  doneCount: number
  totalCount: number
}

interface PathLesson { id: string; title: string }
interface PathTopic { id: string; title: string }

export interface PathUnit {
  unitIndex: number
  lessons: PathLesson[]
}

interface BuildInputs {
  topics: PathTopic[]
  unitsByTopic: (topicId: string) => PathUnit[]
  practiceCountByTopic: (topicId: string) => number
}

function phaseOf(topicId: string): 1 | 2 | 3 {
  return getStudienbeginPhase(topicId) ?? 3
}

/**
 * Linearer Lernpfad: Topics werden nach Phase gruppiert (1 → 2 → 3).
 * Innerhalb einer Phase werden Lektionen nach **Unit-Position** gemixt:
 * erst alle Unit-0-Lessons aller Topics (in topicGraph-Order), dann alle
 * Unit-1-Lessons, usw. Das durchläuft den Stoff in Aufbau-Tiefe parallel
 * über die Topics — der Lernende baut Grundlagen breit auf, bevor er in
 * die Vertiefungen jedes Topics geht.
 *
 * Practice-Steps kommen am Ende der Phase pro Topic (Topic-Order),
 * also als Klausur-Block nachdem alle Lektionen der Phase abgearbeitet
 * sind. So wird das in der Phase Gelernte direkt geprüft.
 */
export function buildLearningPath({ topics, unitsByTopic, practiceCountByTopic }: BuildInputs): PathStep[] {
  const sorted = sortTopicsByPathOrder(topics)

  // Gruppiere nach Phase, behalte Topic-Order innerhalb der Phase.
  const byPhase = new Map<1 | 2 | 3, PathTopic[]>([[1, []], [2, []], [3, []]])
  for (const t of sorted) byPhase.get(phaseOf(t.id))!.push(t)

  const steps: PathStep[] = []
  let i = 0

  for (const phase of [1, 2, 3] as const) {
    const phaseTopics = byPhase.get(phase) ?? []
    if (phaseTopics.length === 0) continue

    // Units pro Topic vorberechnen, max-Unit-Position für Round-Robin.
    const unitsPerTopic = phaseTopics.map((t) => unitsByTopic(t.id))
    const maxUnits = unitsPerTopic.reduce((m, u) => Math.max(m, u.length), 0)

    for (let unitPos = 0; unitPos < maxUnits; unitPos++) {
      for (let ti = 0; ti < phaseTopics.length; ti++) {
        const topic = phaseTopics[ti]
        const unit  = unitsPerTopic[ti][unitPos]
        if (!unit) continue
        for (const lesson of unit.lessons) {
          steps.push({
            kind: 'lesson',
            index: i++,
            topicId: topic.id,
            topicTitle: topic.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            phase,
          })
        }
      }
    }

    // Practice-Block am Ende der Phase, in Topic-Order.
    for (const topic of phaseTopics) {
      const practiceCount = practiceCountByTopic(topic.id)
      if (practiceCount > 0) {
        steps.push({
          kind: 'practice',
          index: i++,
          topicId: topic.id,
          topicTitle: topic.title,
          practiceCount,
          phase,
        })
      }
    }
  }

  return steps
}

interface ProgressInputs {
  topicProgress: Record<string, TopicProgress>
  practiceAttempts: Record<string, PracticeAttemptSummary>
  practiceExerciseIdsByTopic: (topicId: string) => string[]
}

/**
 * Berechnet pro Step, ob er erledigt ist, und liefert den Index des
 * nächsten offenen Steps. Lesson-Step done = lessonId in completedLessons
 * (unabhängig davon, in welcher Reihenfolge der User die Lessons gemacht hat).
 * Practice-Step done = mind. eine Aufgabe des Topics mit lastCorrect===true.
 */
export function computePathProgress(
  steps: PathStep[],
  { topicProgress, practiceAttempts, practiceExerciseIdsByTopic }: ProgressInputs
): PathProgress {
  const doneFlags = steps.map((step) => {
    if (step.kind === 'lesson') {
      const completed = topicProgress[step.topicId]?.completedLessons ?? []
      return completed.includes(step.lessonId)
    }
    const ids = practiceExerciseIdsByTopic(step.topicId)
    return ids.some((id) => practiceAttempts[id]?.lastCorrect === true)
  })
  const currentIndex = doneFlags.findIndex((d) => !d)
  const doneCount = doneFlags.filter(Boolean).length
  return {
    steps,
    doneFlags,
    currentIndex,
    doneCount,
    totalCount: steps.length,
  }
}

export function nextPathStep(progress: PathProgress): PathStep | null {
  if (progress.currentIndex < 0) return null
  return progress.steps[progress.currentIndex] ?? null
}
