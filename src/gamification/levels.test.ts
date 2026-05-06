import { describe, it, expect } from 'vitest'
import {
  getLevelFromXp,
  getRankName,
  getLevelInfo,
  didLevelUp,
  XP_PER_LEVEL,
  MAX_LEVEL,
  RANK_NAMES,
} from './levels'

describe('levels', () => {
  describe('getLevelFromXp', () => {
    it('returns 1 at 0 XP', () => {
      expect(getLevelFromXp(0)).toBe(1)
    })

    it('returns 1 at 1 XP', () => {
      expect(getLevelFromXp(1)).toBe(1)
    })

    it('crosses to level 2 exactly at threshold', () => {
      expect(getLevelFromXp(99)).toBe(1)
      expect(getLevelFromXp(100)).toBe(2)
      expect(getLevelFromXp(101)).toBe(2)
    })

    it('clamps negative XP to level 1', () => {
      expect(getLevelFromXp(-50)).toBe(1)
    })

    it('returns max level at MAX threshold', () => {
      const maxXp = XP_PER_LEVEL[MAX_LEVEL - 1]
      expect(getLevelFromXp(maxXp)).toBe(MAX_LEVEL)
      expect(getLevelFromXp(maxXp + 99999)).toBe(MAX_LEVEL)
    })

    it('handles known boundaries', () => {
      expect(getLevelFromXp(700)).toBe(5)
      expect(getLevelFromXp(3000)).toBe(10)
      expect(getLevelFromXp(15000)).toBe(20)
    })
  })

  describe('getRankName', () => {
    it('starts with Lehrling I', () => {
      expect(getRankName(1)).toBe('Lehrling I')
    })

    it('matches MAX_LEVEL with last rank', () => {
      expect(getRankName(MAX_LEVEL)).toBe(RANK_NAMES[MAX_LEVEL - 1])
    })

    it('clamps below 1', () => {
      expect(getRankName(0)).toBe('Lehrling I')
      expect(getRankName(-3)).toBe('Lehrling I')
    })

    it('clamps above MAX_LEVEL', () => {
      expect(getRankName(MAX_LEVEL + 5)).toBe(RANK_NAMES[MAX_LEVEL - 1])
    })
  })

  describe('getLevelInfo', () => {
    it('reports 0 progress at level start', () => {
      const info = getLevelInfo(100)
      expect(info.level).toBe(2)
      expect(info.xpIntoLevel).toBe(0)
      expect(info.progressInLevel).toBe(0)
      expect(info.isMaxLevel).toBe(false)
    })

    it('reports 50% progress halfway through a level', () => {
      // Level 2 ist 100..250 → halbway ist 175
      const info = getLevelInfo(175)
      expect(info.level).toBe(2)
      expect(info.xpIntoLevel).toBe(75)
      expect(info.xpForNextLevel).toBe(150)
      expect(info.progressInLevel).toBeCloseTo(0.5, 5)
    })

    it('reports max-level info correctly', () => {
      const maxXp = XP_PER_LEVEL[MAX_LEVEL - 1]
      const info = getLevelInfo(maxXp + 5000)
      expect(info.isMaxLevel).toBe(true)
      expect(info.xpCeiling).toBe(null)
      expect(info.xpForNextLevel).toBe(null)
      expect(info.progressInLevel).toBe(1)
    })

    it('exposes rank name', () => {
      const info = getLevelInfo(0)
      expect(info.rank).toBe('Lehrling I')
    })
  })

  describe('didLevelUp', () => {
    it('detects level-up at threshold', () => {
      const r = didLevelUp(99, 100)
      expect(r.leveledUp).toBe(true)
      expect(r.from).toBe(1)
      expect(r.to).toBe(2)
    })

    it('reports no level-up within same level', () => {
      const r = didLevelUp(150, 200)
      expect(r.leveledUp).toBe(false)
      expect(r.from).toBe(2)
      expect(r.to).toBe(2)
    })

    it('detects multi-level jump', () => {
      const r = didLevelUp(0, 800)  // 1 → 5
      expect(r.leveledUp).toBe(true)
      expect(r.from).toBe(1)
      expect(r.to).toBe(5)
    })
  })

  describe('table integrity', () => {
    it('XP table is strictly increasing', () => {
      for (let i = 1; i < XP_PER_LEVEL.length; i++) {
        expect(XP_PER_LEVEL[i]).toBeGreaterThan(XP_PER_LEVEL[i - 1])
      }
    })

    it('XP table starts at 0', () => {
      expect(XP_PER_LEVEL[0]).toBe(0)
    })

    it('rank-name count matches level count', () => {
      expect(RANK_NAMES.length).toBe(XP_PER_LEVEL.length)
    })
  })
})
