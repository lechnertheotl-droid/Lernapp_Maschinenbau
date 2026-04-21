import { evaluateAttempt, type MasteryEntry } from '@/utils/masteryCheck'
import { buildReviewQueue, updateEaseFactor, type ReviewItem } from '@/utils/reviewScheduler'
import { updateStreak, type StreakState } from '@/utils/streakLogic'
import { INITIAL_PRACTICE_STATE, type PracticeState } from '@/types/practice'

const POINTS_CORRECT_ANSWER = 10
const POINTS_COMPLETE_LESSON = 25

// ── Action Types als Union (statt loser Strings) ──────────────────────────────
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
  TOGGLE_BOOKMARK:      'TOGGLE_BOOKMARK',
  TRACK_ACTIVITY:       'TRACK_ACTIVITY',
  RECORD_PRACTICE_ATTEMPT: 'RECORD_PRACTICE_ATTEMPT',
} as const

// ── State Shape ──────────────────────────────────────────────────────────────
export interface User {
  id: string | null
  name: string | null
  startDate: string | null
}

export interface TopicProgress {
  started: boolean
  completedLessons: string[]
  currentLessonId: string | null
  currentStepIndex: number
  progress: number
}

export interface ExerciseAttempt {
  answer: unknown
  correct: boolean
  timestamp: string
}

export interface ExerciseHistory {
  attempts: ExerciseAttempt[]
}

export interface ErrorPattern {
  type: string
  frequency: number
}

export interface AppState {
  user: User
  progress: { topicProgress: Record<string, TopicProgress> }
  mastery: Record<string, MasteryEntry>
  exercises: Record<string, ExerciseHistory>
  review: { queue: ReviewItem[] }
  adaptive: {
    errorPatterns: Record<string, ErrorPattern>
    recommendedBridgeLessons: string[]
  }
  bookmarks: string[]
  streak: StreakState
  points: number
  practice: PracticeState
}

export const INITIAL_STATE: AppState = {
  user: { id: null, name: null, startDate: null },
  progress: { topicProgress: {} },
  mastery: {},
  exercises: {},
  review: { queue: [] },
  adaptive: { errorPatterns: {}, recommendedBridgeLessons: [] },
  bookmarks: [],
  streak: { current: 0, longest: 0, lastActiveDate: null },
  points: 0,
  practice: INITIAL_PRACTICE_STATE,
}

// ── Discriminated-Union der Actions ──────────────────────────────────────────
export type Action =
  | { type: typeof ACTIONS.LOAD_STATE; payload: Partial<AppState> }
  | { type: typeof ACTIONS.SET_USER; name: string }
  | { type: typeof ACTIONS.START_LESSON; topicId: string; lessonId: string }
  | { type: typeof ACTIONS.ADVANCE_STEP; topicId: string }
  | { type: typeof ACTIONS.SET_STEP_INDEX; topicId: string; stepIndex: number }
  | { type: typeof ACTIONS.COMPLETE_LESSON; topicId: string; lessonId: string; totalLessons: number }
  | { type: typeof ACTIONS.RECORD_ATTEMPT; exerciseId: string; lessonId: string; answer: unknown; isCorrect: boolean }
  | { type: typeof ACTIONS.UPDATE_MASTERY; lessonId: string; entry: Partial<MasteryEntry> }
  | { type: typeof ACTIONS.SCHEDULE_REVIEW; lessonId: string }
  | { type: typeof ACTIONS.COMPLETE_REVIEW; lessonId: string; isCorrect: boolean }
  | { type: typeof ACTIONS.ADD_ERROR_PATTERN; exerciseId: string; errorType: string }
  | { type: typeof ACTIONS.SET_RECOMMENDED; lessons: string[] }
  | { type: typeof ACTIONS.RESET_PROGRESS }
  | { type: typeof ACTIONS.TOGGLE_BOOKMARK; bookmarkId: string }
  | { type: typeof ACTIONS.TRACK_ACTIVITY; today?: string }
  | { type: typeof ACTIONS.RECORD_PRACTICE_ATTEMPT; exerciseId: string; correct: boolean; points: number }

// ── Reducer ──────────────────────────────────────────────────────────────────
export function appReducer(state: AppState, action: Action): AppState {
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
      const existing: TopicProgress = state.progress.topicProgress[topicId] ?? {
        started: false,
        completedLessons: [],
        currentLessonId: null,
        currentStepIndex: 0,
        progress: 0,
      }
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
      const tp = state.progress.topicProgress[action.topicId]
      if (!tp) return state
      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [action.topicId]: { ...tp, currentStepIndex: tp.currentStepIndex + 1 },
          },
        },
      }
    }

    case ACTIONS.SET_STEP_INDEX: {
      const tp = state.progress.topicProgress[action.topicId]
      if (!tp) return state
      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [action.topicId]: { ...tp, currentStepIndex: Math.max(0, action.stepIndex) },
          },
        },
      }
    }

    case ACTIONS.COMPLETE_LESSON: {
      const { topicId, lessonId, totalLessons } = action
      const tp: TopicProgress = state.progress.topicProgress[topicId] ?? {
        started: true,
        completedLessons: [],
        currentLessonId: null,
        currentStepIndex: 0,
        progress: 0,
      }
      const wasAlreadyCompleted = tp.completedLessons.includes(lessonId)
      const completedLessons = wasAlreadyCompleted
        ? tp.completedLessons
        : [...tp.completedLessons, lessonId]
      const progress = totalLessons > 0
        ? Math.round((completedLessons.length / totalLessons) * 100)
        : 0

      const prevMastery: MasteryEntry = state.mastery[lessonId] ?? {
        status: 'not-started',
        correctCount: 0,
        consecutiveCorrect: 0,
        totalAttempts: 0,
        lastPracticeDate: null,
        reviewCount: 0,
      }
      const updatedMastery: Record<string, MasteryEntry> = {
        ...state.mastery,
        [lessonId]: {
          ...prevMastery,
          status: prevMastery.status === 'not-started' ? 'understood' : prevMastery.status,
        },
      }

      return {
        ...state,
        progress: {
          ...state.progress,
          topicProgress: {
            ...state.progress.topicProgress,
            [topicId]: { ...tp, completedLessons, progress },
          },
        },
        mastery: updatedMastery,
        review: { queue: buildReviewQueue(updatedMastery) },
        points: state.points + (wasAlreadyCompleted ? 0 : POINTS_COMPLETE_LESSON),
        streak: updateStreak(state.streak),
      }
    }

    case ACTIONS.RECORD_ATTEMPT: {
      const { exerciseId, lessonId, answer, isCorrect } = action
      const prevExercise = state.exercises[exerciseId] ?? { attempts: [] }
      const newAttempt: ExerciseAttempt = {
        answer,
        correct: isCorrect,
        timestamp: new Date().toISOString(),
      }
      const updatedMastery: Record<string, MasteryEntry> = {
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
        points: state.points + (isCorrect ? POINTS_CORRECT_ANSWER : 0),
        streak: updateStreak(state.streak),
      }
    }

    case ACTIONS.UPDATE_MASTERY: {
      const prev = state.mastery[action.lessonId]
      if (!prev) return state
      return {
        ...state,
        mastery: {
          ...state.mastery,
          [action.lessonId]: { ...prev, ...action.entry },
        },
      }
    }

    case ACTIONS.SCHEDULE_REVIEW:
      return state // currently no-op, queue is rebuilt elsewhere

    case ACTIONS.COMPLETE_REVIEW: {
      const { lessonId, isCorrect } = action
      const prev = state.mastery[lessonId]
      if (!prev) return state
      const quality = isCorrect ? 5 : 1
      const newEase = updateEaseFactor(prev.easeFactor, quality)
      const updatedMastery: Record<string, MasteryEntry> = {
        ...state.mastery,
        [lessonId]: {
          ...prev,
          reviewCount: isCorrect ? prev.reviewCount + 1 : 0,
          consecutiveCorrect: isCorrect ? prev.consecutiveCorrect + 1 : 0,
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

    case ACTIONS.TOGGLE_BOOKMARK: {
      const { bookmarkId } = action
      const next = state.bookmarks.includes(bookmarkId)
        ? state.bookmarks.filter((id) => id !== bookmarkId)
        : [...state.bookmarks, bookmarkId]
      return { ...state, bookmarks: next }
    }

    case ACTIONS.TRACK_ACTIVITY:
      return { ...state, streak: updateStreak(state.streak, action.today) }

    case ACTIONS.RECORD_PRACTICE_ATTEMPT: {
      const { exerciseId, correct, points } = action
      const prev = state.practice.attempts[exerciseId]
      const bestPoints = Math.max(prev?.bestPoints ?? 0, points)
      return {
        ...state,
        practice: {
          attempts: {
            ...state.practice.attempts,
            [exerciseId]: {
              attempts: (prev?.attempts ?? 0) + 1,
              lastAttemptAt: new Date().toISOString(),
              lastCorrect: correct,
              bestPoints,
            },
          },
          totalAttempts: state.practice.totalAttempts + 1,
          totalCorrect: state.practice.totalCorrect + (correct ? 1 : 0),
        },
        points: state.points + (correct ? POINTS_CORRECT_ANSWER : 0),
        streak: updateStreak(state.streak),
      }
    }

    case ACTIONS.RESET_PROGRESS:
      return { ...INITIAL_STATE, user: state.user }

    default:
      // Exhaustiveness check — TS warnt, falls neue Action vergessen wird
      return state
  }
}
