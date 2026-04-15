interface Step {
  type?: string
  exerciseRef?: string
}

interface Lesson {
  id: string
  steps?: Step[]
}

interface Unit {
  lessons?: Lesson[]
  exercises?: Record<string, { id?: string; isSupplemental?: boolean }>
}

interface Topic {
  id?: string
  units?: Unit[]
}

export type ReviewSource = 'supplement' | 'sibling' | 'self'

export interface PickedReviewExercise {
  exerciseId: string
  source: ReviewSource
}

function collectLessonExerciseIds(lesson: Lesson | undefined): Set<string> {
  const ids = new Set<string>()
  if (!lesson?.steps) return ids
  for (const step of lesson.steps) {
    if ((step.type === 'exercise' || step.type === 'mastery-check') && step.exerciseRef) {
      ids.add(step.exerciseRef)
    }
  }
  return ids
}

function findLesson(topic: Topic, lessonId: string): Lesson | undefined {
  for (const unit of topic.units ?? []) {
    const found = (unit.lessons ?? []).find((l) => l.id === lessonId)
    if (found) return found
  }
  return undefined
}

function pickRandom<T>(arr: T[]): T | null {
  if (arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}

// Picks a fresh exercise for spaced-repetition review.
// Priority: 1) topic supplements, 2) other lessons in topic, 3) original lesson.
// Excludes any IDs in `excludeExerciseIds`.
export function pickReviewExercise(opts: {
  topic: Topic | null | undefined
  lessonId: string
  excludeExerciseIds?: Set<string>
}): PickedReviewExercise | null {
  const { topic, lessonId, excludeExerciseIds } = opts
  if (!topic) return null

  const exclude = excludeExerciseIds ?? new Set<string>()
  const lessonIds = collectLessonExerciseIds(findLesson(topic, lessonId))

  const supplementIds: string[] = []
  const siblingIds: string[] = []
  const selfIds: string[] = []

  for (const unit of topic.units ?? []) {
    for (const [id, exercise] of Object.entries(unit.exercises ?? {})) {
      if (exclude.has(id)) continue
      if (exercise?.isSupplemental) {
        supplementIds.push(id)
        continue
      }
      if (lessonIds.has(id)) {
        selfIds.push(id)
      } else {
        siblingIds.push(id)
      }
    }
  }

  const supp = pickRandom(supplementIds)
  if (supp) return { exerciseId: supp, source: 'supplement' }

  const sibling = pickRandom(siblingIds)
  if (sibling) return { exerciseId: sibling, source: 'sibling' }

  const self = pickRandom(selfIds)
  if (self) return { exerciseId: self, source: 'self' }

  return null
}
