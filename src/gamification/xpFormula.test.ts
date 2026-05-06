import { describe, it, expect } from 'vitest'
import {
  getComboMultiplier,
  xpForCorrectAnswer,
  xpForLessonStars,
  isComboMilestone,
  XP_BASE_CORRECT,
  XP_LESSON_1_STAR,
  XP_LESSON_2_STAR,
  XP_LESSON_3_STAR,
} from './xpFormula'

describe('xpFormula', () => {
  describe('getComboMultiplier', () => {
    it('returns 1 below threshold of 5', () => {
      expect(getComboMultiplier(0)).toBe(1)
      expect(getComboMultiplier(4)).toBe(1)
    })

    it('returns 1.5 at combo 5..9', () => {
      expect(getComboMultiplier(5)).toBe(1.5)
      expect(getComboMultiplier(9)).toBe(1.5)
    })

    it('returns 2.0 at combo 10..19', () => {
      expect(getComboMultiplier(10)).toBe(2.0)
      expect(getComboMultiplier(19)).toBe(2.0)
    })

    it('returns 2.5 at combo 20+', () => {
      expect(getComboMultiplier(20)).toBe(2.5)
      expect(getComboMultiplier(100)).toBe(2.5)
    })
  })

  describe('xpForCorrectAnswer', () => {
    it('returns base XP at no combo', () => {
      expect(xpForCorrectAnswer(0)).toBe(XP_BASE_CORRECT)
      expect(xpForCorrectAnswer(4)).toBe(XP_BASE_CORRECT)
    })

    it('applies 1.5 multiplier at combo 5', () => {
      expect(xpForCorrectAnswer(5)).toBe(15)
    })

    it('applies 2.0 multiplier at combo 10', () => {
      expect(xpForCorrectAnswer(10)).toBe(20)
    })

    it('applies 2.5 multiplier at combo 20', () => {
      expect(xpForCorrectAnswer(20)).toBe(25)
    })

    it('applies speed bonus on top of combo', () => {
      // base 10 * 1.5 (combo 5) * 1.5 (speed) = 22.5 → 23 rounded
      expect(xpForCorrectAnswer(5, { speedBonus: true })).toBe(23)
    })

    it('speed bonus alone yields 15', () => {
      expect(xpForCorrectAnswer(0, { speedBonus: true })).toBe(15)
    })
  })

  describe('xpForLessonStars', () => {
    it('matches table values', () => {
      expect(xpForLessonStars(1)).toBe(XP_LESSON_1_STAR)
      expect(xpForLessonStars(2)).toBe(XP_LESSON_2_STAR)
      expect(xpForLessonStars(3)).toBe(XP_LESSON_3_STAR)
    })
  })

  describe('isComboMilestone', () => {
    it('detects 5/10/20 as milestones', () => {
      expect(isComboMilestone(5)).toBe(true)
      expect(isComboMilestone(10)).toBe(true)
      expect(isComboMilestone(20)).toBe(true)
    })

    it('rejects non-milestone values', () => {
      expect(isComboMilestone(0)).toBe(false)
      expect(isComboMilestone(4)).toBe(false)
      expect(isComboMilestone(6)).toBe(false)
      expect(isComboMilestone(11)).toBe(false)
      expect(isComboMilestone(25)).toBe(false)
    })
  })
})
