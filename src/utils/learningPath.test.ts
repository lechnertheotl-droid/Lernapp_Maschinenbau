import { describe, it, expect } from 'vitest'
import {
  buildLearningPath,
  computePathProgress,
  nextPathStep,
  type PathStep,
  type PathUnit,
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

// Units pro Topic. Algebra hat eine Vorkurs-Unit-0 + Unit-1 + Klausur-Unit-2.
// Trig hat nur Unit-0 (Grundlagen) + Klausur-Unit-1 — keine Vorkurs-Unit-0
// im Sinne von Algebra. Mech, LinAlg, MdAna haben jeweils eine Unit.
const UNITS: Record<string, PathUnit[]> = {
  algebra: [
    { unitIndex: 0, lessons: [{ id: 'alg-0-1', title: 'Brüche' }] },
    { unitIndex: 1, lessons: [{ id: 'alg-1-1', title: 'Potenzen' }, { id: 'alg-1-2', title: 'Wurzeln' }] },
    { unitIndex: 2, lessons: [{ id: 'alg-2-1', title: 'Klausur Algebra' }] },
  ],
  trigonometry: [
    { unitIndex: 0, lessons: [{ id: 'trig-1-1', title: 'Winkel' }] },
    { unitIndex: 1, lessons: [{ id: 'trig-2-1', title: 'Klausur Trig' }] },
  ],
  'technische-mechanik': [
    { unitIndex: 0, lessons: [{ id: 'mech-1-1', title: 'Statik' }] },
  ],
  'lineare-algebra': [
    { unitIndex: 0, lessons: [{ id: 'lin-1-1', title: 'Matrix' }] },
  ],
  'mehrdim-analysis': [
    { unitIndex: 0, lessons: [{ id: 'md-1-1', title: 'Partiell' }] },
  ],
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
    unitsByTopic: (id) => UNITS[id] ?? [],
    practiceCountByTopic: (id) => PRACTICE_COUNTS[id] ?? 0,
  })
}

describe('buildLearningPath', () => {
  it('round-robins lessons by unit-position within a phase', () => {
    const steps = buildSteps()
    // Phase 1 first. Topics in order: algebra (0), trigonometry (1), tech-mech (20).
    // Unit-Pos 0: alg-0-1 (algebra has unit 0), trig-1-1 (trig has unit 0), mech-1-1 (mech has unit 0)
    // Unit-Pos 1: alg-1-1, alg-1-2, trig-2-1 (mech has no unit 1)
    // Unit-Pos 2: alg-2-1 (only algebra has unit 2)
    // Then Phase-1 practice in topic-order: practice algebra, practice trig (mech has none)
    // Phase 2: lin-1-1, then practice lin
    // Phase 3: md-1-1 (no practice)
    const labels = steps.map((s) => s.kind === 'lesson' ? s.lessonId : `practice:${s.topicId}`)
    expect(labels).toEqual([
      // Phase 1, unit-pos 0 (round-robin across topics)
      'alg-0-1',
      'trig-1-1',
      'mech-1-1',
      // Phase 1, unit-pos 1
      'alg-1-1',
      'alg-1-2',
      'trig-2-1',
      // Phase 1, unit-pos 2
      'alg-2-1',
      // Phase 1 practice block
      'practice:algebra',
      'practice:trigonometry',
      // Phase 2
      'lin-1-1',
      'practice:lineare-algebra',
      // Phase 3
      'md-1-1',
    ])
  })

  it('attaches phase to every step', () => {
    const steps = buildSteps()
    const phasesByLesson = Object.fromEntries(steps.map((s) => [
      s.kind === 'lesson' ? s.lessonId : `practice:${s.topicId}`,
      s.phase,
    ]))
    expect(phasesByLesson['alg-0-1']).toBe(1)
    expect(phasesByLesson['trig-1-1']).toBe(1)
    expect(phasesByLesson['lin-1-1']).toBe(2)
    expect(phasesByLesson['md-1-1']).toBe(3)
    expect(phasesByLesson['practice:algebra']).toBe(1)
    expect(phasesByLesson['practice:lineare-algebra']).toBe(2)
  })

  it('omits practice step when topic has no practice exercises', () => {
    const steps = buildSteps()
    const mechPracticeSteps = steps.filter((s) => s.kind === 'practice' && s.topicId === 'technische-mechanik')
    expect(mechPracticeSteps).toEqual([])
  })

  it('skips topics that have no unit at the current unit-position', () => {
    // tech-mech has only unit 0 — it must NOT appear at unit-pos 1 or 2.
    const steps = buildSteps()
    const mechSteps = steps.filter((s) => s.kind === 'lesson' && s.topicId === 'technische-mechanik')
    expect(mechSteps.map((s) => s.lessonId)).toEqual(['mech-1-1'])
  })
})

describe('computePathProgress', () => {
  it('marks lesson done when lessonId is in completedLessons (regardless of order user did them)', () => {
    const steps = buildSteps()
    // User has completed alg-1-2 (out of order — skipped alg-1-1), trig-1-1, and md-1-1.
    const progress = computePathProgress(steps, {
      topicProgress: {
        algebra:           { started: true, completedLessons: ['alg-1-2'], currentLessonId: null, currentStepIndex: 0, progress: 33 },
        trigonometry:      { started: true, completedLessons: ['trig-1-1'], currentLessonId: null, currentStepIndex: 0, progress: 50 },
        'mehrdim-analysis':{ started: true, completedLessons: ['md-1-1'],  currentLessonId: null, currentStepIndex: 0, progress: 100 },
      },
      practiceAttempts: {},
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const flagsByLabel = Object.fromEntries(steps.map((s, i) => {
      const label = s.kind === 'lesson' ? s.lessonId : `practice:${s.topicId}`
      return [label, progress.doneFlags[i]]
    }))
    expect(flagsByLabel).toMatchObject({
      'alg-0-1': false,
      'alg-1-1': false,
      'alg-1-2': true,        // completed out of order — still ✓
      'trig-1-1': true,
      'md-1-1': true,
      'mech-1-1': false,
      'lin-1-1': false,
    })
  })

  it('marks practice step done when at least one exercise has lastCorrect=true', () => {
    const steps = buildSteps()
    const progress = computePathProgress(steps, {
      topicProgress: {},
      practiceAttempts: {
        'pr-alg-2': { attempts: 1, lastAttemptAt: '2026-05-06', lastCorrect: true, bestPoints: 5 },
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
    // User skipped algebra entirely but did trig-1-1 — current should be alg-0-1 (the first gap).
    const progress = computePathProgress(steps, {
      topicProgress: {
        trigonometry: { started: true, completedLessons: ['trig-1-1'], currentLessonId: null, currentStepIndex: 0, progress: 50 },
      },
      practiceAttempts: {},
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    const current = nextPathStep(progress)
    expect(current?.kind).toBe('lesson')
    if (current?.kind === 'lesson') {
      expect(current.lessonId).toBe('alg-0-1')
    }
  })

  it('currentIndex is -1 and nextPathStep is null when everything is done', () => {
    const steps = buildSteps()
    const allLessonIds = Object.values(UNITS).flatMap((units) => units.flatMap((u) => u.lessons.map((l) => l.id)))
    const topicProgress = Object.fromEntries(Object.entries(UNITS).map(([tid, us]) => [tid, {
      started: true,
      completedLessons: us.flatMap((u) => u.lessons.map((l) => l.id)),
      currentLessonId: null,
      currentStepIndex: 0,
      progress: 100,
    }]))
    const practiceAttempts = Object.fromEntries(Object.values(PRACTICE_IDS).flat().map((id) => [id, {
      attempts: 1, lastAttemptAt: '2026-05-06', lastCorrect: true, bestPoints: 1,
    }]))
    const progress = computePathProgress(steps, {
      topicProgress,
      practiceAttempts,
      practiceExerciseIdsByTopic: (id) => PRACTICE_IDS[id] ?? [],
    })
    expect(progress.currentIndex).toBe(-1)
    expect(nextPathStep(progress)).toBeNull()
    expect(progress.doneCount).toBe(progress.totalCount)
    // Sanity: every lesson is in the path
    const lessonStepIds = steps.filter((s) => s.kind === 'lesson').map((s) => (s as { lessonId: string }).lessonId)
    expect(lessonStepIds.sort()).toEqual(allLessonIds.sort())
  })
})
