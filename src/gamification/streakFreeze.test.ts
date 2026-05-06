import { describe, it, expect } from 'vitest'
import { evaluateStreakFreezeOnLogin, clampFreezes, MAX_STREAK_FREEZES } from './streakFreeze'

describe('evaluateStreakFreezeOnLogin', () => {
  it('does nothing on same-day login', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 5, longest: 5, lastActiveDate: '2026-04-14' },
      freezesAvailable: 1,
      today: '2026-04-14',
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.freezesAvailable).toBe(1)
    expect(r.streak.current).toBe(5)
  })

  it('does nothing on consecutive-day login', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 5, longest: 5, lastActiveDate: '2026-04-14' },
      freezesAvailable: 1,
      today: '2026-04-15',
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.freezesAvailable).toBe(1)
    expect(r.streak.lastActiveDate).toBe('2026-04-14')
  })

  it('consumes freeze on 1-day-miss when freeze available', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 8, longest: 8, lastActiveDate: '2026-04-14' },
      freezesAvailable: 1,
      today: '2026-04-16',  // skip 04-15
    })
    expect(r.freezeConsumed).toBe(true)
    expect(r.freezesAvailable).toBe(0)
    // lastActiveDate jetzt = today - 1 = 2026-04-15
    expect(r.streak.lastActiveDate).toBe('2026-04-15')
    expect(r.streak.current).toBe(8)
  })

  it('does not consume freeze on 2-day-miss', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 8, longest: 8, lastActiveDate: '2026-04-14' },
      freezesAvailable: 2,
      today: '2026-04-17',  // skip 04-15 and 04-16
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.freezesAvailable).toBe(2)  // unchanged
    expect(r.brokenStreakLength).toBe(8)
  })

  it('marks broken streak when no freeze available', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 12, longest: 12, lastActiveDate: '2026-04-14' },
      freezesAvailable: 0,
      today: '2026-04-16',
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.brokenStreakLength).toBe(12)
  })

  it('handles undefined streak', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: undefined,
      freezesAvailable: 2,
      today: '2026-04-14',
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.streak.current).toBe(0)
  })

  it('handles streak with null lastActiveDate', () => {
    const r = evaluateStreakFreezeOnLogin({
      streak: { current: 0, longest: 0, lastActiveDate: null },
      freezesAvailable: 1,
      today: '2026-04-14',
    })
    expect(r.freezeConsumed).toBe(false)
    expect(r.freezesAvailable).toBe(1)
  })
})

describe('clampFreezes', () => {
  it('clamps to 0 below 0', () => {
    expect(clampFreezes(-3)).toBe(0)
  })

  it('clamps to MAX above max', () => {
    expect(clampFreezes(99)).toBe(MAX_STREAK_FREEZES)
  })

  it('floors fractional values', () => {
    expect(clampFreezes(1.7)).toBe(1)
  })

  it('preserves valid values', () => {
    expect(clampFreezes(0)).toBe(0)
    expect(clampFreezes(1)).toBe(1)
    expect(clampFreezes(2)).toBe(2)
  })
})
