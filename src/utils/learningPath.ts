import { sortTopicsByOrder } from './topicGraph'
import type { TopicProgress } from '@/context/appReducer'
import type { PracticeAttemptSummary } from '@/types/practice'

export type LessonStep = {
  kind: 'lesson'
  index: number
  topicId: string
  topicTitle: string
  lessonId: string
  lessonTitle: string
}

export type PracticeStep = {
  kind: 'practice'
  index: number
  topicId: string
  topicTitle: string
  practiceCount: number
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

interface BuildInputs {
  topics: PathTopic[]
  lessonsByTopic: (topicId: string) => PathLesson[]
  practiceCountByTopic: (topicId: string) => number
}

/**
 * Linearer Lernpfad: Topics in topicGraph.order-Reihenfolge,
 * pro Topic alle Lektionen, danach (wenn vorhanden) ein Practice-Step.
 */
export function buildLearningPath({ topics, lessonsByTopic, practiceCountByTopic }: BuildInputs): PathStep[] {
  const sorted = sortTopicsByOrder(topics)
  const steps: PathStep[] = []
  let i = 0
  for (const topic of sorted) {
    const lessons = lessonsByTopic(topic.id)
    for (const lesson of lessons) {
      steps.push({
        kind: 'lesson',
        index: i++,
        topicId: topic.id,
        topicTitle: topic.title,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
      })
    }
    const practiceCount = practiceCountByTopic(topic.id)
    if (practiceCount > 0) {
      steps.push({
        kind: 'practice',
        index: i++,
        topicId: topic.id,
        topicTitle: topic.title,
        practiceCount,
      })
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
 * nächsten offenen Steps. Lesson-Step done = lessonId in completedLessons.
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
