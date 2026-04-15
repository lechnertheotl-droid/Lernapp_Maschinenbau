import { describe, it, expect } from 'vitest'
import { updateStreak } from './streakLogic'

describe('updateStreak', () => {
  it('starts at 1 on first activity', () => {
    const result = updateStreak(undefined, '2026-04-14')
    expect(result).toEqual({ current: 1, longest: 1, lastActiveDate: '2026-04-14' })
  })

  it('is idempotent on same-day calls', () => {
    const s1 = updateStreak(undefined, '2026-04-14')
    const s2 = updateStreak(s1, '2026-04-14')
    expect(s2).toEqual(s1)
  })

  it('continues streak on consecutive day', () => {
    const s1 = updateStreak(undefined, '2026-04-14')
    const s2 = updateStreak(s1, '2026-04-15')
    expect(s2.current).toBe(2)
    expect(s2.longest).toBe(2)
  })

  it('resets on gap but remembers longest', () => {
    const s1 = updateStreak(undefined, '2026-04-14')
    const s2 = updateStreak(s1, '2026-04-15')
    const s3 = updateStreak(s2, '2026-04-18') // 3-day gap
    expect(s3.current).toBe(1)
    expect(s3.longest).toBe(2)
  })

  it('tracks longest across multiple runs', () => {
    let s = updateStreak(undefined, '2026-04-14')
    s = updateStreak(s, '2026-04-15')
    s = updateStreak(s, '2026-04-16')
    s = updateStreak(s, '2026-04-17') // streak 4
    s = updateStreak(s, '2026-04-20') // break
    s = updateStreak(s, '2026-04-21') // restart
    expect(s.current).toBe(2)
    expect(s.longest).toBe(4)
  })
})
