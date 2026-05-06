// Reducer-Tests für die neuen Gamification-Actions. Fokus: Combo-Mechanik,
// Stars-Berechnung, Streak-Freeze, Quest-Progress.

import { describe, it, expect } from 'vitest'
import { appReducer, INITIAL_STATE, ACTIONS, type AppState } from './appReducer'

function makeState(overrides: Partial<AppState> = {}): AppState {
  return { ...INITIAL_STATE, ...overrides }
}

describe('Gamification reducer', () => {
  describe('RECORD_ATTEMPT — Combo + XP', () => {
    it('sets combo to 1 on first correct answer and awards base XP', () => {
      const s = appReducer(makeState(), {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1',
        lessonId: 'lesson1',
        answer: 'a',
        isCorrect: true,
      })
      expect(s.gamification.comboStreak).toBe(1)
      expect(s.gamification.xp).toBe(10)
      expect(s.gamification.longestCombo).toBe(1)
    })

    it('resets combo to 0 on wrong answer', () => {
      let s = makeState({
        gamification: { ...INITIAL_STATE.gamification, comboStreak: 4, longestCombo: 4, xp: 50 },
      })
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1',
        lessonId: 'lesson1',
        answer: 'a',
        isCorrect: false,
      })
      expect(s.gamification.comboStreak).toBe(0)
      expect(s.gamification.xp).toBe(50)  // no XP for wrong
      expect(s.gamification.longestCombo).toBe(4)  // longest preserved
    })

    it('applies combo-multiplier from threshold 5', () => {
      let s = makeState({
        gamification: { ...INITIAL_STATE.gamification, comboStreak: 4, longestCombo: 4, xp: 0 },
      })
      // 5er Combo → 1.5× Multiplier → 15 XP
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1',
        lessonId: 'lesson1',
        answer: 'a',
        isCorrect: true,
      })
      expect(s.gamification.comboStreak).toBe(5)
      expect(s.gamification.xp).toBe(15)
    })

    it('tracks first-try-correct in lessonAttempts', () => {
      const s = appReducer(makeState(), {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1',
        lessonId: 'lesson1',
        answer: 'a',
        isCorrect: true,
      })
      const att = s.gamification.lessonAttempts.lesson1
      expect(att).toBeDefined()
      expect(att.firstTryTotal).toBe(1)
      expect(att.firstTryCorrect).toBe(1)
    })

    it('does not count second attempt as first-try', () => {
      let s = appReducer(makeState(), {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'lesson1', answer: 'a', isCorrect: false,
      })
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'lesson1', answer: 'b', isCorrect: true,
      })
      const att = s.gamification.lessonAttempts.lesson1
      expect(att.firstTryTotal).toBe(1)
      expect(att.firstTryCorrect).toBe(0)
    })
  })

  describe('TRACK_HINT_USED', () => {
    it('increments hintsUsed for the lesson', () => {
      const s = appReducer(makeState(), {
        type: ACTIONS.TRACK_HINT_USED,
        lessonId: 'lesson1',
      })
      expect(s.gamification.lessonAttempts.lesson1.hintsUsed).toBe(1)
    })
  })

  describe('COMPLETE_LESSON — Stars', () => {
    it('awards 1 star when hints were used', () => {
      let s = makeState()
      s = appReducer(s, { type: ACTIONS.TRACK_HINT_USED, lessonId: 'l1' })
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'l1', answer: 'a', isCorrect: true,
      })
      s = appReducer(s, {
        type: ACTIONS.COMPLETE_LESSON,
        topicId: 't1', lessonId: 'l1', totalLessons: 1,
      })
      expect(s.gamification.starsByLessonId['l1']).toBe(1)
    })

    it('awards 2 stars without hints but with at-least-one wrong', () => {
      let s = makeState()
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'l1', answer: 'x', isCorrect: false,
      })
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'l1', answer: 'a', isCorrect: true,
      })
      s = appReducer(s, {
        type: ACTIONS.COMPLETE_LESSON,
        topicId: 't1', lessonId: 'l1', totalLessons: 1,
      })
      expect(s.gamification.starsByLessonId['l1']).toBe(2)
    })

    it('awards 3 stars when all first-try and no hints', () => {
      let s = makeState()
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'l1', answer: 'a', isCorrect: true,
      })
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex2', lessonId: 'l1', answer: 'b', isCorrect: true,
      })
      s = appReducer(s, {
        type: ACTIONS.COMPLETE_LESSON,
        topicId: 't1', lessonId: 'l1', totalLessons: 1,
      })
      expect(s.gamification.starsByLessonId['l1']).toBe(3)
      // 3-Sterne XP = 125
      expect(s.gamification.xp).toBeGreaterThanOrEqual(125)
    })

    it('grants only differential XP on star upgrade', () => {
      let s = makeState({
        gamification: {
          ...INITIAL_STATE.gamification,
          starsByLessonId: { l1: 1 },
          xp: 50,  // bereits aus erstem Abschluss
        },
      })
      // Erfolgreicher Replay mit besseren Sternen — keine hints, alle first-try.
      s = appReducer(s, {
        type: ACTIONS.RECORD_ATTEMPT,
        exerciseId: 'ex1', lessonId: 'l1', answer: 'a', isCorrect: true,
      })
      s = appReducer(s, {
        type: ACTIONS.COMPLETE_LESSON,
        topicId: 't1', lessonId: 'l1', totalLessons: 1,
      })
      expect(s.gamification.starsByLessonId['l1']).toBe(3)
      // Differential XP: 125 - 50 = +75. base + RECORD_ATTEMPT(=10) ergibt 50+10+75 = 135
      expect(s.gamification.xp).toBe(135)
    })

    it('resets combo to 0 on lesson completion', () => {
      let s = makeState({
        gamification: { ...INITIAL_STATE.gamification, comboStreak: 6, longestCombo: 6 },
      })
      s = appReducer(s, {
        type: ACTIONS.COMPLETE_LESSON,
        topicId: 't1', lessonId: 'l1', totalLessons: 1,
      })
      expect(s.gamification.comboStreak).toBe(0)
      expect(s.gamification.longestCombo).toBe(6)  // longest preserved
    })
  })

  describe('GENERATE_DAILY_QUESTS', () => {
    it('produces 2 quests on first call', () => {
      const s = appReducer(makeState(), { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-14' })
      expect(s.gamification.dailyQuests).toHaveLength(2)
      expect(s.gamification.weeklyQuest).not.toBeNull()
    })

    it('keeps existing quests on same-day call', () => {
      let s = appReducer(makeState(), { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-14' })
      const ids = s.gamification.dailyQuests.map((q) => q.id)
      s = appReducer(s, { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-14' })
      expect(s.gamification.dailyQuests.map((q) => q.id)).toEqual(ids)
    })

    it('regenerates on next-day call', () => {
      let s = appReducer(makeState(), { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-14' })
      const idsDay1 = s.gamification.dailyQuests.map((q) => q.id)
      s = appReducer(s, { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-15' })
      const idsDay2 = s.gamification.dailyQuests.map((q) => q.id)
      expect(idsDay2).not.toEqual(idsDay1)
    })
  })

  describe('CONSUME_STREAK_FREEZE', () => {
    it('consumes a freeze on 1-day-miss', () => {
      const s = appReducer(makeState({
        streak: { current: 5, longest: 5, lastActiveDate: '2026-04-14' },
        gamification: { ...INITIAL_STATE.gamification, streakFreezes: 1 },
      }), { type: ACTIONS.CONSUME_STREAK_FREEZE, today: '2026-04-16' })
      expect(s.gamification.streakFreezes).toBe(0)
      expect(s.streak.lastActiveDate).toBe('2026-04-15')  // shifted to yesterday
      expect(s.streak.current).toBe(5)  // streak preserved
    })

    it('marks broken streak when no freeze available', () => {
      const s = appReducer(makeState({
        streak: { current: 8, longest: 8, lastActiveDate: '2026-04-14' },
        gamification: { ...INITIAL_STATE.gamification, streakFreezes: 0 },
      }), { type: ACTIONS.CONSUME_STREAK_FREEZE, today: '2026-04-17' })
      expect(s.gamification.brokenStreakLength).toBe(8)
      expect(s.gamification.brokenStreakAcked).toBe(false)
    })
  })

  describe('UPDATE_GAMIFICATION_SETTINGS', () => {
    it('patches selected settings, leaves others intact', () => {
      const s = appReducer(makeState(), {
        type: ACTIONS.UPDATE_GAMIFICATION_SETTINGS,
        patch: { soundEnabled: false },
      })
      expect(s.gamification.settings.soundEnabled).toBe(false)
      expect(s.gamification.settings.hapticsEnabled).toBe(true)  // unchanged default
    })
  })

  describe('CLAIM_QUEST_REWARD', () => {
    it('awards XP and marks claimed only when completed', () => {
      let s = appReducer(makeState(), { type: ACTIONS.GENERATE_DAILY_QUESTS, today: '2026-04-14' })
      const q0 = s.gamification.dailyQuests[0]
      // unclaimed + uncompleted → no-op
      s = appReducer(s, { type: ACTIONS.CLAIM_QUEST_REWARD, questId: q0.id })
      expect(s.gamification.xp).toBe(0)
      expect(s.gamification.dailyQuests[0].claimed).toBe(false)
      // Mark completed manually for testing
      s = {
        ...s,
        gamification: {
          ...s.gamification,
          dailyQuests: s.gamification.dailyQuests.map((q, i) =>
            i === 0 ? { ...q, completed: true, progress: q.target } : q,
          ),
        },
      }
      s = appReducer(s, { type: ACTIONS.CLAIM_QUEST_REWARD, questId: q0.id })
      expect(s.gamification.xp).toBe(q0.rewardXp)
      expect(s.gamification.dailyQuests[0].claimed).toBe(true)
      // Re-claim is a no-op
      s = appReducer(s, { type: ACTIONS.CLAIM_QUEST_REWARD, questId: q0.id })
      expect(s.gamification.xp).toBe(q0.rewardXp)
    })
  })
})
