import { evaluateAttempt } from '@/utils/masteryCheck'
import { buildReviewQueue, updateEaseFactor } from '@/utils/reviewScheduler'

// ── Action Types ──────────────────────────────────────────────────────────────
export const ACTIONS = {
  LOAD_STATE:           'LOAD_STATE',
  SET_USER:             'SET_USER',
  START_LESSON:         'START_LESSON',
  ADVANCE_STEP:         'ADVANCE_STEP',
  SET_STEP_INDEX:       'SET_STEP_INDEX',
  COMPLETE_LESSON:      'COMPLETE_LESSON',
  RECORD_ATTEMPT:       'RECORD_ATTEMPT',
  UPDATE_MASTERY:       'UPDATE_MASTERY',
  SCHEDULE_REVIEW:      'SCHEDULE_REVIEW',
  COMPLETE_REVIEW:      'COMPLETE_REVIEW',
  ADD_ERROR_PATTERN:    'ADD_ERROR_PATTERN',
  SET_RECOMMENDED:      'SET_RECOMMENDED',
  RESET_PROGRESS:       'RESET_PROGRESS',
}

// ── Initial State ─────────────────────────────────────────────────────────────
export const INITIAL_STATE = {
  user: {
    id: null,
    name: null,
    startDate: null,
  },
  progress: {
    topicProgress: {},
  },
  mastery: {},
  exercises: {},
  review: {
    queue: [],
  },
  adaptive: {
    errorPatterns: {},
    recommendedBridgeLessons: [],
  },
}

// ── Reducer ───────────────────────────────────────────────────────────────────
export function appReducer(state, action) {
  switch (action.type) {

    case ACTIONS.LOAD_STATE:
      return { ...INITIAL_STATE, ...action.payload }

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: {
          id: 'user-1',
          name: action.name,
          startDate: new Date().toISOString().split('T')[0],
        },
      }

    case ACTIONS.START_LESSON: {
      const { topicId, lessonId } = action
      const existing = state.progress.topicProgress[topicId] ?? {
        started: false,
        completedLessons: [],
        currentLessonId: null,
        currentStepIndex: 0,
        progress: 0,
      }
      // Only reset step if switching to a different lesson
      const isNewLesson = existing.currentLessonId !== lessonId
      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [topicId]: {
              ...existing,
              started: true,
              currentLessonId: lessonId,
              currentStepIndex: isNewLesson ? 0 : existing.currentStepIndex,
            },
          },
        },
        mastery: {
          ...state.mastery,
          [lessonId]: state.mastery[lessonId] ?? {
            status: 'started',
            correctCount: 0,
            consecutiveCorrect: 0,
            totalAttempts: 0,
            lastPracticeDate: null,
            reviewCount: 0,
          },
        },
      }
    }

    case ACTIONS.ADVANCE_STEP: {
      const { topicId } = action
      const tp = state.progress.topicProgress[topicId]
      if (!tp) return state
      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [topicId]: {
              ...tp,
              currentStepIndex: tp.currentStepIndex + 1,
            },
          },
        },
      }
    }

    case ACTIONS.SET_STEP_INDEX: {
      const { topicId, stepIndex } = action
      const tp = state.progress.topicProgress[topicId]
      if (!tp) return state
      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [topicId]: {
              ...tp,
              currentStepIndex: Math.max(0, stepIndex),
            },
          },
        },
      }
    }

    case ACTIONS.COMPLETE_LESSON: {
      const { topicId, lessonId, totalLessons } = action
      const tp = state.progress.topicProgress[topicId] ?? {
        started: true, completedLessons: [], currentLessonId: null, currentStepIndex: 0, progress: 0,
      }
      const completedLessons = tp.completedLessons.includes(lessonId)
        ? tp.completedLessons
        : [...tp.completedLessons, lessonId]
      const progress = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0

      const updatedMastery = {
        ...state.mastery,
        [lessonId]: {
          ...(state.mastery[lessonId] ?? {}),
          status: state.mastery[lessonId]?.status === 'not-started' || !state.mastery[lessonId]
            ? 'understood'
            : state.mastery[lessonId].status,
        },
      }

      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [topicId]: {
              ...tp,
              completedLessons,
              progress,
            },
          },
        },
        mastery: updatedMastery,
        review: {
          queue: buildReviewQueue(updatedMastery),
        },
      }
    }

    case ACTIONS.RECORD_ATTEMPT: {
      const { exerciseId, lessonId, answer, isCorrect } = action
      const prevExercise = state.exercises[exerciseId] ?? { attempts: [] }
      const newAttempt = { answer, correct: isCorrect, timestamp: new Date().toISOString() }
      const updatedMastery = {
        ...state.mastery,
        [lessonId]: evaluateAttempt(state.mastery[lessonId], isCorrect),
      }
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [exerciseId]: { attempts: [...prevExercise.attempts, newAttempt] },
        },
        mastery: updatedMastery,
      }
    }

    case ACTIONS.UPDATE_MASTERY:
      return {
        ...state,
        mastery: {
          ...state.mastery,
          [action.lessonId]: { ...state.mastery[action.lessonId], ...action.entry },
        },
      }

    case ACTIONS.COMPLETE_REVIEW: {
      const { lessonId, isCorrect } = action
      const prev = state.mastery[lessonId] ?? {}
      const quality = isCorrect ? 5 : 1
      const newEase = updateEaseFactor(prev.easeFactor, quality)
      const updatedMastery = {
        ...state.mastery,
        [lessonId]: {
          ...prev,
          reviewCount: isCorrect ? (prev.reviewCount ?? 0) + 1 : 0,
          consecutiveCorrect: isCorrect ? (prev.consecutiveCorrect ?? 0) + 1 : 0,
          status: isCorrect ? 'secure' : 'review',
          easeFactor: newEase,
          lastPracticeDate: new Date().toISOString(),
        },
      }
      return {
        ...state,
        mastery: updatedMastery,
        review: { queue: buildReviewQueue(updatedMastery) },
      }
    }

    case ACTIONS.ADD_ERROR_PATTERN: {
      const { exerciseId, errorType } = action
      const prev = state.adaptive.errorPatterns[exerciseId] ?? { type: errorType, frequency: 0 }
      return {
        ...state,
        adaptive: {
          ...state.adaptive,
          errorPatterns: {
            ...state.adaptive.errorPatterns,
            [exerciseId]: { type: errorType, frequency: prev.frequency + 1 },
          },
        },
      }
    }

    case ACTIONS.SET_RECOMMENDED:
      return {
        ...state,
        adaptive: { ...state.adaptive, recommendedBridgeLessons: action.lessons },
      }

    case ACTIONS.RESET_PROGRESS:
      return { ...INITIAL_STATE, user: state.user }

    default:
      return state
  }
}
