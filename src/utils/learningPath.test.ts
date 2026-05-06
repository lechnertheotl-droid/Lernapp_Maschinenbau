import { describe, it, expect } from 'vitest'
import {
  buildLearningPath,
  computePathProgress,
  nextPathStep,
  type PathStep,
} from './learningPath'

// Mini-Topics in nicht-sortierter Reihenfolge, mit echten topicGraph-IDs:
//   algebra (Phase 1, order 0), trigonometry (Phase 1, order 1),
//   technische-mechanik (Phase 1, order 20), lineare-algebra (Phase 2, order 5),
//   mehrdim-analysis (Phase 3, order 9).
const TOPICS = [
  { id: 'mehrdim-analysis',     title: 'Mehrdim. Analysis' },
  { id: 'lineare-algebra',      title: 'Lineare Algebra' },
  { id: 'technische-mechanik',  title: 'Technische Mechanik' },
  { id: 'algebra',              title: 'Algebra' },
  { id: 'trigonometry',         title: 'Trigonometrie' },
]

const LESSONS: Record<string, { id: string; title: string }[]> = {
  algebra:                [{ id: 'alg-1', title: 'L1' }, { id: 'alg-2', title: 'L2' }],
  trigonometry:           [{ id: 'trig-1', title: 'T1' }],
  'technische-mechanik':  [{ id: 'mech-1', title: 'M1' }],
  'lineare-algebra':      [{ id: 'lin-1', title: 'LA1' }],
  'mehrdim-analysis':     [{ id: 'md-1', title: 'MD1' }],
}

const PRACTICE_COUNTS: Record<string, number> = {
  algebra: 2,
  trigonometry: 1,
  'technische-mechanik': 0,  // kein practice → kein practice-step
  'lineare-algebra': 1,
  'mehrdim-analysis': 0,
}

const PRACTICE_IDS: Record<string, string[]> = {
  algebra: ['pr-alg-1', 'pr-alg-2'],
  trigonometry: ['pr-trig-1'],
  'lineare-algebra': ['pr-lin-1'],
  'technische-mechanik': [],
  'mehrdim-analysis': [],
}

function buildSteps(): PathStep[] {
  return buildLearningPath({
    topics: TOPICS,
    lessonsByTopic: (id) => LESSONS[id] ?? [],
    practiceCountByTopic: (id) => PRACTICE_COUNTS[id] ?? 0,
  })
}

describe('buildLearningPath', () => {
  it('sorts topics by phase first, then by order within phase', () => {
    const steps  = buildSteps()
    const ids = [...new Set(steps.map((s) => s.topicId))]
    expect(ids).toEqual([
      'algebra',              // Phase 1, order 0
      'trigonometry',         // Phase 1, order 1
      'technische-mechanik',  // Phase 1, order 20
      'lineare-algebra',      // Phase 2, order 5
      'mehrdim-analysis',     // Phase 3, order 9
    ])
  })

  it('emits all lessons of a topic before its practice step', () => {
    const steps = buildSteps().filter((s) => s.topicId === 'algebra')
    expect(steps.map((s) => s.kind)).toEqual(['lesson', 'lesson', 'practice'])
  })

  it('omits practice step when topic has no practice exercises', () => {
    const steps = buildSteps().filter((s) => s.topicId === 'technische-mechanik')
    expect(steps.map((s) => s.kind)).toEqual(['lesson'])
  })
})

describe('computePathProgress', () => {
  it('marks lesson done when lessonId is in completedLessons (regardless of order user did them)', () => {
    const steps = buildSteps()
    // User has completed alg-2 (out of order), trig-1, and md-1 — but not alg-1.
    const progress = computePathProgress(steps, {
      topicProgress: {
        algebra:           { started: true, completedLessons: ['alg-2'], currentLessonId: null, currentStepIndex: 0, progress: 50 },
        trigonometry:      { started: true, completedLessons: ['trig-1'], currentLessonId: null, currentStepIndex: 0, progress: 100 },
        'mehrdim-analysis':{ started: true, completedLessons: ['md-1'],  currentLessonId: null, currentStepIndex: 0, progress: 100 },
      },
      practiceAttempts: {},
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const flagsByLabel = Object.fromEntries(steps.map((s, i) => {
      const label = s.kind === 'lesson' ? s.lessonId : `practice:${s.topicId}`
      return [label, progress.doneFlags[i]]
    }))
    expect(flagsByLabel).toMatchObject({
      'alg-1': false,
      'alg-2': true,        // completed out of order — still ✓
      'trig-1': true,
      'md-1': true,
      'mech-1': false,
      'lin-1': false,
      'practice:algebra': false,        // no attempts
      'practice:trigonometry': false,
      'practice:lineare-algebra': false,
    })
  })

  it('marks practice step done when at least one exercise has lastCorrect=true', () => {
    const steps = buildSteps()
    const progress = computePathProgress(steps, {
      topicProgress: {},
      practiceAttempts: {
        'pr-alg-2': { attempts: 1, lastAttemptAt: '2026-05-06', lastCorrect: true, bestPoints: 5 },
        // pr-alg-1 not attempted — but one solved is enough
      },
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const algebraPracticeIdx = steps.findIndex((s) => s.kind === 'practice' && s.topicId === 'algebra')
    expect(progress.doneFlags[algebraPracticeIdx]).toBe(true)
  })

  it('does not mark practice done when only attempts exist without lastCorrect', () => {
    const steps = buildSteps()
    const progress = computePathProgress(steps, {
      topicProgress: {},
      practiceAttempts: {
        'pr-alg-1': { attempts: 3, lastAttemptAt: '2026-05-06', lastCorrect: false, bestPoints: 0 },
      },
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const algebraPracticeIdx = steps.findIndex((s) => s.kind === 'practice' && s.topicId === 'algebra')
    expect(progress.doneFlags[algebraPracticeIdx]).toBe(false)
  })

  it('currentIndex points to the first not-done step in path order', () => {
    const steps = buildSteps()
    // User skipped algebra entirely but did some trig — current should be alg-1 (fill the gap).
    const progress = computePathProgress(steps, {
      topicProgress: {
        trigonometry: { started: true, completedLessons: ['trig-1'], currentLessonId: null, currentStepIndex: 0, progress: 100 },
      },
      practiceAttempts: {},
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const current = nextPathStep(progress)
    expect(current?.kind).toBe('lesson')
    if (current?.kind === 'lesson') {
      expect(current.lessonId).toBe('alg-1')
    }
  })

  it('currentIndex is -1 and nextPathStep is null when everything is done', () => {
    const steps = buildSteps()
    const progress = computePathProgress(steps, {
      topicProgress: Object.fromEntries(Object.entries(LESSONS).map(([tid, ls]) => [tid, {
        started: true, completedLessons: ls.map((l) => l.id), currentLessonId: null, currentStepIndex: 0, progress: 100,
      }])),
      practiceAttempts: Object.fromEntries(Object.values(PRACTICE_IDS).flat().map((id) => [id, {
        attempts: 1, lastAttemptAt: '2026-05-06', lastCorrect: true, bestPoints: 1,
      }])),
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    expect(progress.currentIndex).toBe(-1)
    expect(nextPathStep(progress)).toBeNull()
    expect(progress.doneCount).toBe(progress.totalCount)
  })
})
