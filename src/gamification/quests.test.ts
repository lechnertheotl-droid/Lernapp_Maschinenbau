import { describe, it, expect } from 'vitest'
import {
  generateDailyQuests,
  generateWeeklyQuest,
  progressQuest,
  progressWeeklyQuest,
  getIsoWeek,
  DAILY_QUEST_POOL,
} from './quests'

describe('generateDailyQuests', () => {
  it('returns exactly 2 quests', () => {
    const qs = generateDailyQuests('2026-04-14')
    expect(qs).toHaveLength(2)
  })

  it('is deterministic per date', () => {
    const a = generateDailyQuests('2026-04-14')
    const b = generateDailyQuests('2026-04-14')
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id))
  })

  it('produces different selections across days (probabilistic)', () => {
    const days = Array.from({ length: 30 }, (_, i) => `2026-04-${String(i + 1).padStart(2, '0')}`)
    const ids = days.map((d) => generateDailyQuests(d).map((q) => q.type).sort().join(','))
    const unique = new Set(ids)
    // Mit nur 5 Pool-Items × 2 Picks = 10 mögliche Kombinationen, sollte ≥3 Varianten in 30 Tagen geben
    expect(unique.size).toBeGreaterThanOrEqual(3)
  })

  it('quests are distinct within a day', () => {
    const qs = generateDailyQuests('2026-04-14')
    expect(qs[0].type).not.toBe(qs[1].type)
  })

  it('starts with 0 progress and not completed', () => {
    const qs = generateDailyQuests('2026-04-14')
    qs.forEach((q) => {
      expect(q.progress).toBe(0)
      expect(q.completed).toBe(false)
      expect(q.claimed).toBe(false)
    })
  })

  it('all quest types come from the pool', () => {
    const qs = generateDailyQuests('2026-04-14')
    const poolTypes = new Set(DAILY_QUEST_POOL.map((d) => d.type))
    qs.forEach((q) => {
      expect(poolTypes.has(q.type)).toBe(true)
    })
  })
})

describe('progressQuest', () => {
  it('advances correct-answers quest on matching event', () => {
    const q = generateDailyQuests('2026-04-14').find((x) => x.type === 'correct-answers')
      ?? { ...generateDailyQuests('2026-04-14')[0], type: 'correct-answers' as const, target: 10, progress: 0, completed: false }
    if (q.type !== 'correct-answers') return  // skip if not picked this day
    const r = progressQuest(q, { kind: 'correct-answer' })
    expect(r.progress).toBe(1)
  })

  it('ignores non-matching events', () => {
    const q = generateDailyQuests('2026-04-14')[0]
    const r = progressQuest({ ...q, type: 'correct-answers', target: 10 }, { kind: 'lesson-completed' })
    expect(r.progress).toBe(0)
  })

  it('caps progress at target and marks completed', () => {
    const q = { ...generateDailyQuests('2026-04-14')[0], type: 'correct-answers' as const, target: 3, progress: 2, completed: false }
    const r1 = progressQuest(q, { kind: 'correct-answer' })
    expect(r1.progress).toBe(3)
    expect(r1.completed).toBe(true)
    const r2 = progressQuest(r1, { kind: 'correct-answer' })
    expect(r2.progress).toBe(3)
  })

  it('streak-in-row uses max not sum', () => {
    const q = { ...generateDailyQuests('2026-04-14')[0], type: 'streak-in-row' as const, target: 5, progress: 0, completed: false }
    const r1 = progressQuest(q, { kind: 'combo-update', combo: 3 })
    expect(r1.progress).toBe(3)
    const r2 = progressQuest(r1, { kind: 'combo-update', combo: 1 })
    expect(r2.progress).toBe(3)  // not 4
  })

  it('minutes-active sums up minutes', () => {
    const q = { ...generateDailyQuests('2026-04-14')[0], type: 'minutes-active' as const, target: 15, progress: 0, completed: false }
    const r1 = progressQuest(q, { kind: 'minutes-elapsed', minutes: 5 })
    const r2 = progressQuest(r1, { kind: 'minutes-elapsed', minutes: 7 })
    expect(r2.progress).toBe(12)
    expect(r2.completed).toBe(false)
  })

  it('does not advance once completed', () => {
    const q = { ...generateDailyQuests('2026-04-14')[0], type: 'correct-answers' as const, target: 1, progress: 1, completed: true }
    const r = progressQuest(q, { kind: 'correct-answer' })
    expect(r).toEqual(q)
  })
})

describe('weekly quest', () => {
  it('generates with weekIso and correct shape', () => {
    const q = generateWeeklyQuest('2026-W15')
    expect(q.weekIso).toBe('2026-W15')
    expect(q.target).toBe(5)
    expect(q.rewardFreezes).toBe(1)
  })

  it('progresses on lesson-completed', () => {
    const q = generateWeeklyQuest('2026-W15')
    const r = progressWeeklyQuest(q, { kind: 'lesson-completed' })
    expect(r.progress).toBe(1)
  })

  it('completes at target', () => {
    let q = generateWeeklyQuest('2026-W15')
    for (let i = 0; i < 5; i++) q = progressWeeklyQuest(q, { kind: 'lesson-completed' })
    expect(q.completed).toBe(true)
  })

  it('ignores non-lesson events', () => {
    const q = generateWeeklyQuest('2026-W15')
    const r = progressWeeklyQuest(q, { kind: 'correct-answer' })
    expect(r.progress).toBe(0)
  })
})

describe('getIsoWeek', () => {
  it('returns YYYY-Www format', () => {
    expect(getIsoWeek('2026-04-14')).toMatch(/^\d{4}-W\d{2}$/)
  })

  it('same week for consecutive days within week', () => {
    // 2026-04-13 ist ein Montag → gleiche ISO-Woche bis Sonntag 04-19
    const monday = getIsoWeek('2026-04-13')
    const sunday = getIsoWeek('2026-04-19')
    expect(monday).toBe(sunday)
  })

  it('different week across week-boundary', () => {
    const sunday = getIsoWeek('2026-04-19')
    const nextMonday = getIsoWeek('2026-04-20')
    expect(sunday).not.toBe(nextMonday)
  })
})
