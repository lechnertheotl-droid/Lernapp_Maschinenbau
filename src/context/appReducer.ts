import { evaluateAttempt, type MasteryEntry } from '@/utils/masteryCheck'
import { buildReviewQueue, updateEaseFactor, type ReviewItem } from '@/utils/reviewScheduler'
import { updateStreak, type StreakState } from '@/utils/streakLogic'
import { INITIAL_PRACTICE_STATE, type PracticeState } from '@/types/practice'
import {
  generateDailyQuests, generateWeeklyQuest, getIsoWeek,
  progressQuest, progressWeeklyQuest,
  type DailyQuest, type WeeklyQuest,
} from '@/gamification/quests'
import { xpForCorrectAnswer, xpForLessonStars } from '@/gamification/xpFormula'
import { evaluateStreakFreezeOnLogin, MAX_STREAK_FREEZES } from '@/gamification/streakFreeze'

const POINTS_CORRECT_ANSWER = 10
const POINTS_COMPLETE_LESSON = 25

function todayISO(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

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
  // ── Gamification ───────────────────────────────────────────
  TRACK_HINT_USED:         'TRACK_HINT_USED',
  GENERATE_DAILY_QUESTS:   'GENERATE_DAILY_QUESTS',
  CLAIM_QUEST_REWARD:      'CLAIM_QUEST_REWARD',
  CLAIM_WEEKLY_QUEST:      'CLAIM_WEEKLY_QUEST',
  UNLOCK_ACHIEVEMENT:      'UNLOCK_ACHIEVEMENT',
  CONSUME_STREAK_FREEZE:   'CONSUME_STREAK_FREEZE',
  ADD_STREAK_FREEZE:       'ADD_STREAK_FREEZE',
  RECORD_PRACTICE_RESULT:  'RECORD_PRACTICE_RESULT',
  AWARD_MILESTONE_XP:      'AWARD_MILESTONE_XP',
  UPDATE_GAMIFICATION_SETTINGS: 'UPDATE_GAMIFICATION_SETTINGS',
  RECORD_MINUTES_ACTIVE:   'RECORD_MINUTES_ACTIVE',
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

export interface AchievementRecord {
  earned: boolean
  earnedAt: string | null
  progress: number
}

export interface SessionStats {
  date: string
  minutesActive: number
  lessonsCompleted: number
  exercisesCorrect: number
  exercisesTotal: number
}

export interface LessonAttemptRecord {
  hintsUsed: number
  firstTryCorrect: number
  firstTryTotal: number
}

export interface PracticeBest {
  bestScore: number
  bestTimeSec: number
  bestPercent: number
}

export interface GamificationSettings {
  soundEnabled: boolean
  hapticsEnabled: boolean
  reducedMotion: boolean | 'auto'
  notificationsEnabled: boolean
}

export interface GamificationState {
  xp: number
  comboStreak: number
  longestCombo: number
  streakFreezes: number
  lastStreakFreezeUsed: string | null
  dailyQuests: DailyQuest[]
  weeklyQuest: WeeklyQuest | null
  achievements: Record<string, AchievementRecord>
  sessionStats: SessionStats
  starsByLessonId: Record<string, 1 | 2 | 3>
  lessonAttempts: Record<string, LessonAttemptRecord>
  practiceBests: Record<string, PracticeBest>
  settings: GamificationSettings
  earlyBirdAchieved: boolean
  weekendDays: string[]  // letzte ISO-Daten an Sa/So aktiv
  brokenStreakLength: number  // letzte gebrochene Streak-Länge — für Recovery-UI
  brokenStreakAcked: boolean  // hat User die Recovery-Card gesehen?
  comebackStreakAchieved: boolean
  practicePassed: boolean
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
  gamification: GamificationState
}

export const INITIAL_GAMIFICATION_STATE: GamificationState = {
  xp: 0,
  comboStreak: 0,
  longestCombo: 0,
  streakFreezes: 0,
  lastStreakFreezeUsed: null,
  dailyQuests: [],
  weeklyQuest: null,
  achievements: {},
  sessionStats: { date: '', minutesActive: 0, lessonsCompleted: 0, exercisesCorrect: 0, exercisesTotal: 0 },
  starsByLessonId: {},
  lessonAttempts: {},
  practiceBests: {},
  settings: {
    soundEnabled: true,
    hapticsEnabled: true,
    reducedMotion: 'auto',
    notificationsEnabled: false,
  },
  earlyBirdAchieved: false,
  weekendDays: [],
  brokenStreakLength: 0,
  brokenStreakAcked: true,
  comebackStreakAchieved: false,
  practicePassed: false,
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
  gamification: INITIAL_GAMIFICATION_STATE,
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
  | { type: typeof ACTIONS.TRACK_HINT_USED; lessonId: string }
  | { type: typeof ACTIONS.GENERATE_DAILY_QUESTS; today?: string }
  | { type: typeof ACTIONS.CLAIM_QUEST_REWARD; questId: string }
  | { type: typeof ACTIONS.CLAIM_WEEKLY_QUEST }
  | { type: typeof ACTIONS.UNLOCK_ACHIEVEMENT; achievementId: string; progress?: number }
  | { type: typeof ACTIONS.CONSUME_STREAK_FREEZE; today?: string }
  | { type: typeof ACTIONS.ADD_STREAK_FREEZE; amount?: number }
  | { type: typeof ACTIONS.RECORD_PRACTICE_RESULT; setId: string; score: number; timeSec: number; percent: number }
  | { type: typeof ACTIONS.AWARD_MILESTONE_XP; xp: number; reason: string }
  | { type: typeof ACTIONS.UPDATE_GAMIFICATION_SETTINGS; patch: Partial<GamificationSettings> }
  | { type: typeof ACTIONS.RECORD_MINUTES_ACTIVE; minutes: number; today?: string }

// ── Helpers ──────────────────────────────────────────────────────────────────

function ensureSessionForToday(session: SessionStats, today: string): SessionStats {
  if (session.date === today) return session
  return { date: today, minutesActive: 0, lessonsCompleted: 0, exercisesCorrect: 0, exercisesTotal: 0 }
}

function isWeekendISO(iso: string): boolean {
  const d = new Date(`${iso}T00:00:00Z`)
  const dow = d.getUTCDay()  // 0 = Sun, 6 = Sat
  return dow === 0 || dow === 6
}

// Verfolgt, ob in einem laufenden Wochenende sowohl Sa als auch So aktiv waren.
function trackWeekendActivity(weekendDays: string[], today: string): string[] {
  if (!isWeekendISO(today)) return weekendDays
  if (weekendDays.includes(today)) return weekendDays
  // Nur die letzten beiden Tage halten — reicht, um Sa+So zu erkennen
  const next = [...weekendDays, today]
  return next.length > 6 ? next.slice(-6) : next
}

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
      // Combo wird beim Lesson-Start zurückgesetzt — eine neue Lesson, eine neue Combo-Chance.
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
        gamification: { ...state.gamification, comboStreak: 0 },
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

      // ── Stars-Berechnung ─────────────────────────────────────
      const lessonAttempts = state.gamification.lessonAttempts[lessonId]
        ?? { hintsUsed: 0, firstTryCorrect: 0, firstTryTotal: 0 }
      const noHint = lessonAttempts.hintsUsed === 0
      const allFirstTry = lessonAttempts.firstTryTotal > 0
        && lessonAttempts.firstTryCorrect === lessonAttempts.firstTryTotal
      let stars: 1 | 2 | 3 = 1
      if (noHint) stars = 2
      if (noHint && allFirstTry) stars = 3
      const prevStars = state.gamification.starsByLessonId[lessonId] ?? 0
      const newStars = (Math.max(prevStars, stars) as 1 | 2 | 3)

      // XP nach Stern-Differential: nur Bonus-XP, wenn Sterne sich verbessern
      const xpForNew = xpForLessonStars(newStars)
      const xpForOld = prevStars > 0 ? xpForLessonStars(prevStars as 1 | 2 | 3) : 0
      const lessonXpAwarded = xpForNew - xpForOld

      // ── Quests progressieren ──────────────────────────────────
      const today = todayISO()
      const sessionStats = ensureSessionForToday(state.gamification.sessionStats, today)
      const updatedSession = wasAlreadyCompleted
        ? sessionStats
        : { ...sessionStats, lessonsCompleted: sessionStats.lessonsCompleted + 1 }

      let dailyQuests = state.gamification.dailyQuests
      let weeklyQuest = state.gamification.weeklyQuest
      if (!wasAlreadyCompleted) {
        dailyQuests = dailyQuests.map((q) => progressQuest(q, { kind: 'lesson-completed' }))
        if (weeklyQuest) weeklyQuest = progressWeeklyQuest(weeklyQuest, { kind: 'lesson-completed' })
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
        gamification: {
          ...state.gamification,
          xp: state.gamification.xp + lessonXpAwarded,
          comboStreak: 0,
          starsByLessonId: { ...state.gamification.starsByLessonId, [lessonId]: newStars },
          sessionStats: updatedSession,
          dailyQuests,
          weeklyQuest,
        },
      }
    }

    case ACTIONS.RECORD_ATTEMPT: {
      const { exerciseId, lessonId, answer, isCorrect } = action
      const prevExercise = state.exercises[exerciseId] ?? { attempts: [] }
      const isFirstTry = prevExercise.attempts.length === 0
      const newAttempt: ExerciseAttempt = {
        answer,
        correct: isCorrect,
        timestamp: new Date().toISOString(),
      }
      const updatedMastery: Record<string, MasteryEntry> = {
        ...state.mastery,
        [lessonId]: evaluateAttempt(state.mastery[lessonId], isCorrect),
      }

      // Combo
      const oldCombo = state.gamification.comboStreak
      const newCombo = isCorrect ? oldCombo + 1 : 0
      const longestCombo = Math.max(state.gamification.longestCombo, newCombo)
      const xpAwarded = isCorrect ? xpForCorrectAnswer(newCombo) : 0

      // Session
      const today = todayISO()
      const sessionBase = ensureSessionForToday(state.gamification.sessionStats, today)
      const updatedSession: SessionStats = {
        ...sessionBase,
        exercisesTotal: sessionBase.exercisesTotal + 1,
        exercisesCorrect: sessionBase.exercisesCorrect + (isCorrect ? 1 : 0),
      }

      // First-try-Tracking pro Lesson (für Stars + Achievements)
      const prevAttempts = state.gamification.lessonAttempts[lessonId]
        ?? { hintsUsed: 0, firstTryCorrect: 0, firstTryTotal: 0 }
      const lessonAttempts = isFirstTry
        ? {
          ...state.gamification.lessonAttempts,
          [lessonId]: {
            ...prevAttempts,
            firstTryTotal: prevAttempts.firstTryTotal + 1,
            firstTryCorrect: prevAttempts.firstTryCorrect + (isCorrect ? 1 : 0),
          },
        }
        : state.gamification.lessonAttempts

      // Quest-Progress
      let dailyQuests = state.gamification.dailyQuests
      if (isCorrect) {
        dailyQuests = dailyQuests.map((q) => progressQuest(q, { kind: 'correct-answer' }))
        dailyQuests = dailyQuests.map((q) => progressQuest(q, { kind: 'combo-update', combo: newCombo }))
      }

      // Early-Bird-Tracking (vor 7 Uhr)
      const hour = new Date().getHours()
      const earlyBird = state.gamification.earlyBirdAchieved || hour < 7

      // Wochenend-Tracking
      const weekendDays = trackWeekendActivity(state.gamification.weekendDays, today)

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [exerciseId]: { attempts: [...prevExercise.attempts, newAttempt] },
        },
        mastery: updatedMastery,
        points: state.points + (isCorrect ? POINTS_CORRECT_ANSWER : 0),
        streak: updateStreak(state.streak),
        gamification: {
          ...state.gamification,
          xp: state.gamification.xp + xpAwarded,
          comboStreak: newCombo,
          longestCombo,
          sessionStats: updatedSession,
          lessonAttempts,
          dailyQuests,
          earlyBirdAchieved: earlyBird,
          weekendDays,
        },
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

    case ACTIONS.TRACK_ACTIVITY: {
      const today = action.today ?? todayISO()
      const updatedStreak = updateStreak(state.streak, today)
      // Wenn neuer Streak ≥ 7 nach Bruch → Comeback markieren
      const comeback = state.gamification.comebackStreakAchieved
        || (state.gamification.brokenStreakLength > 0 && updatedStreak.current >= 7)
      return {
        ...state,
        streak: updatedStreak,
        gamification: {
          ...state.gamification,
          comebackStreakAchieved: comeback,
          weekendDays: trackWeekendActivity(state.gamification.weekendDays, today),
        },
      }
    }

    case ACTIONS.RECORD_PRACTICE_ATTEMPT: {
      const { exerciseId, correct, points } = action
      const prev = state.practice.attempts[exerciseId]
      const bestPoints = Math.max(prev?.bestPoints ?? 0, points)

      // Combo + XP wie bei normalem RECORD_ATTEMPT
      const oldCombo = state.gamification.comboStreak
      const newCombo = correct ? oldCombo + 1 : 0
      const longestCombo = Math.max(state.gamification.longestCombo, newCombo)
      const xpAwarded = correct ? xpForCorrectAnswer(newCombo) : 0

      const today = todayISO()
      const sessionBase = ensureSessionForToday(state.gamification.sessionStats, today)
      const updatedSession: SessionStats = {
        ...sessionBase,
        exercisesTotal: sessionBase.exercisesTotal + 1,
        exercisesCorrect: sessionBase.exercisesCorrect + (correct ? 1 : 0),
      }

      let dailyQuests = state.gamification.dailyQuests
      if (correct) {
        dailyQuests = dailyQuests.map((q) => progressQuest(q, { kind: 'correct-answer' }))
        dailyQuests = dailyQuests.map((q) => progressQuest(q, { kind: 'combo-update', combo: newCombo }))
      }

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
        gamification: {
          ...state.gamification,
          xp: state.gamification.xp + xpAwarded,
          comboStreak: newCombo,
          longestCombo,
          sessionStats: updatedSession,
          dailyQuests,
        },
      }
    }

    case ACTIONS.RESET_PROGRESS:
      return {
        ...INITIAL_STATE,
        user: state.user,
        // Settings beibehalten — User soll nicht plötzlich Sound an/aus haben.
        gamification: {
          ...INITIAL_GAMIFICATION_STATE,
          settings: state.gamification.settings,
        },
      }

    // ── Gamification ──────────────────────────────────────────────────────
    case ACTIONS.TRACK_HINT_USED: {
      const prev = state.gamification.lessonAttempts[action.lessonId]
        ?? { hintsUsed: 0, firstTryCorrect: 0, firstTryTotal: 0 }
      return {
        ...state,
        gamification: {
          ...state.gamification,
          lessonAttempts: {
            ...state.gamification.lessonAttempts,
            [action.lessonId]: { ...prev, hintsUsed: prev.hintsUsed + 1 },
          },
        },
      }
    }

    case ACTIONS.GENERATE_DAILY_QUESTS: {
      const today = action.today ?? todayISO()
      // Tageswechsel? — neue Quests, ggf. neue Wochen-Quest
      const existingDate = state.gamification.dailyQuests[0]?.date
      const dailyQuests = existingDate === today
        ? state.gamification.dailyQuests
        : generateDailyQuests(today)

      const wantedWeek = getIsoWeek(today)
      const weeklyQuest = state.gamification.weeklyQuest && state.gamification.weeklyQuest.weekIso === wantedWeek
        ? state.gamification.weeklyQuest
        : generateWeeklyQuest(wantedWeek)

      const sessionStats = ensureSessionForToday(state.gamification.sessionStats, today)

      return {
        ...state,
        gamification: { ...state.gamification, dailyQuests, weeklyQuest, sessionStats },
      }
    }

    case ACTIONS.CLAIM_QUEST_REWARD: {
      const quests = state.gamification.dailyQuests
      const idx = quests.findIndex((q) => q.id === action.questId)
      if (idx < 0) return state
      const q = quests[idx]
      if (!q.completed || q.claimed) return state
      const newQuests = [...quests]
      newQuests[idx] = { ...q, claimed: true }
      return {
        ...state,
        gamification: {
          ...state.gamification,
          dailyQuests: newQuests,
          xp: state.gamification.xp + q.rewardXp,
        },
      }
    }

    case ACTIONS.CLAIM_WEEKLY_QUEST: {
      const w = state.gamification.weeklyQuest
      if (!w || !w.completed || w.claimed) return state
      const newFreezes = Math.min(MAX_STREAK_FREEZES, state.gamification.streakFreezes + w.rewardFreezes)
      return {
        ...state,
        gamification: {
          ...state.gamification,
          weeklyQuest: { ...w, claimed: true },
          xp: state.gamification.xp + w.rewardXp,
          streakFreezes: newFreezes,
        },
      }
    }

    case ACTIONS.UNLOCK_ACHIEVEMENT: {
      const { achievementId, progress } = action
      const prev = state.gamification.achievements[achievementId]
      if (prev?.earned) {
        // Update progress only
        return progress != null
          ? {
            ...state,
            gamification: {
              ...state.gamification,
              achievements: {
                ...state.gamification.achievements,
                [achievementId]: { ...prev, progress },
              },
            },
          }
          : state
      }
      return {
        ...state,
        gamification: {
          ...state.gamification,
          achievements: {
            ...state.gamification.achievements,
            [achievementId]: {
              earned: true,
              earnedAt: new Date().toISOString(),
              progress: progress ?? 0,
            },
          },
        },
      }
    }

    case ACTIONS.CONSUME_STREAK_FREEZE: {
      const today = action.today ?? todayISO()
      const r = evaluateStreakFreezeOnLogin({
        streak: state.streak,
        freezesAvailable: state.gamification.streakFreezes,
        today,
      })
      // Wenn der Streak gebrochen wurde (kein Freeze möglich): broken-Length merken,
      // sodass die Recovery-Card im UI gezeigt werden kann.
      const broken = !r.freezeConsumed && r.brokenStreakLength > 0
      return {
        ...state,
        streak: r.streak,
        gamification: {
          ...state.gamification,
          streakFreezes: r.freezesAvailable,
          lastStreakFreezeUsed: r.freezeConsumed ? today : state.gamification.lastStreakFreezeUsed,
          brokenStreakLength: broken ? r.brokenStreakLength : state.gamification.brokenStreakLength,
          brokenStreakAcked: broken ? false : state.gamification.brokenStreakAcked,
        },
      }
    }

    case ACTIONS.ADD_STREAK_FREEZE: {
      const amount = action.amount ?? 1
      const newFreezes = Math.min(MAX_STREAK_FREEZES, state.gamification.streakFreezes + amount)
      return {
        ...state,
        gamification: { ...state.gamification, streakFreezes: newFreezes },
      }
    }

    case ACTIONS.RECORD_PRACTICE_RESULT: {
      const { setId, score, timeSec, percent } = action
      const prev = state.gamification.practiceBests[setId]
      const isImprovement = !prev
        || percent > prev.bestPercent
        || (percent === prev.bestPercent && timeSec < prev.bestTimeSec)
      const newBest: PracticeBest = isImprovement
        ? { bestScore: score, bestTimeSec: timeSec, bestPercent: percent }
        : prev
      const today = todayISO()
      const sessionBase = ensureSessionForToday(state.gamification.sessionStats, today)
      const dailyQuests = state.gamification.dailyQuests
        .map((q) => progressQuest(q, { kind: 'practice-set-completed' }))
      const passed = state.gamification.practicePassed || percent >= 80
      return {
        ...state,
        gamification: {
          ...state.gamification,
          practiceBests: { ...state.gamification.practiceBests, [setId]: newBest },
          dailyQuests,
          sessionStats: sessionBase,
          practicePassed: passed,
        },
      }
    }

    case ACTIONS.AWARD_MILESTONE_XP: {
      return {
        ...state,
        gamification: { ...state.gamification, xp: state.gamification.xp + action.xp },
      }
    }

    case ACTIONS.UPDATE_GAMIFICATION_SETTINGS: {
      return {
        ...state,
        gamification: {
          ...state.gamification,
          settings: { ...state.gamification.settings, ...action.patch },
        },
      }
    }

    case ACTIONS.RECORD_MINUTES_ACTIVE: {
      const today = action.today ?? todayISO()
      const sessionBase = ensureSessionForToday(state.gamification.sessionStats, today)
      const updated: SessionStats = {
        ...sessionBase,
        minutesActive: sessionBase.minutesActive + action.minutes,
      }
      const dailyQuests = state.gamification.dailyQuests
        .map((q) => progressQuest(q, { kind: 'minutes-elapsed', minutes: action.minutes }))
      return {
        ...state,
        gamification: { ...state.gamification, sessionStats: updated, dailyQuests },
      }
    }

    default:
      // Exhaustiveness check — TS warnt, falls neue Action vergessen wird
      return state
  }
}
