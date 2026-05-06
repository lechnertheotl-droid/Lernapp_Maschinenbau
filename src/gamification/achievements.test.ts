import { describe, it, expect } from 'vitest'
import {
  ACHIEVEMENTS_STATIC,
  PHASE_MASTER_ACHIEVEMENTS,
  buildTopicMasterAchievements,
  getAllAchievements,
  getAchievementProgress,
  isAchievementEarned,
  diffEarnedAchievements,
  type AchievementContext,
} from './achievements'

const baseCtx: AchievementContext = {
  correctAnswersTotal: 0,
  lessonsCompletedTotal: 0,
  xpTotal: 0,
  streakLongest: 0,
  longestCombo: 0,
  weekendActive: false,
  threeStarLessons: 0,
  hasPerfectLesson: false,
  completedTopicIds: new Set<string>(),
  completedPhases: new Set<0 | 1 | 2 | 3>(),
  comebackStreakAchieved: false,
  earlyBirdAchieved: false,
  practicePassed: false,
}

describe('achievements', () => {
  it('static catalogue has expected size', () => {
    // 5 mengen-correct + 4 lessons + 4 xp + 5 streaks + 1 weekend + 5 quality + 3 spezial = 27
    expect(ACHIEVEMENTS_STATIC.length).toBeGreaterThanOrEqual(25)
  })

  it('all phase-master achievements have phase metric', () => {
    expect(PHASE_MASTER_ACHIEVEMENTS).toHaveLength(4)
    PHASE_MASTER_ACHIEVEMENTS.forEach((a) => {
      expect(a.metric.kind).toBe('phase-master')
    })
  })

  it('IDs are unique', () => {
    const all = getAllAchievements([
      { topicId: 'algebra', topicTitle: 'Algebra', icon: '±' },
    ])
    const ids = new Set(all.map((a) => a.id))
    expect(ids.size).toBe(all.length)
  })

  it('builds topic-master achievements per seed', () => {
    const seeds = [
      { topicId: 't1', topicTitle: 'T1', icon: '⚙' },
      { topicId: 't2', topicTitle: 'T2', icon: '∂' },
    ]
    const result = buildTopicMasterAchievements(seeds)
    expect(result).toHaveLength(2)
    expect(result[0].id).toBe('topic-master-t1')
  })

  it('progress reaches target for unlocking', () => {
    const correct100 = ACHIEVEMENTS_STATIC.find((a) => a.id === 'correct-100')!
    const earnedCtx = { ...baseCtx, correctAnswersTotal: 100 }
    expect(getAchievementProgress(correct100, baseCtx)).toBe(0)
    expect(getAchievementProgress(correct100, earnedCtx)).toBe(100)
    expect(isAchievementEarned(correct100, earnedCtx)).toBe(true)
  })

  it('progress is capped at target', () => {
    const correct10 = ACHIEVEMENTS_STATIC.find((a) => a.id === 'correct-10')!
    const overCtx = { ...baseCtx, correctAnswersTotal: 999 }
    expect(getAchievementProgress(correct10, overCtx)).toBe(10)
  })

  it('weekend-active is binary', () => {
    const wd = ACHIEVEMENTS_STATIC.find((a) => a.id === 'weekend')!
    expect(getAchievementProgress(wd, baseCtx)).toBe(0)
    expect(getAchievementProgress(wd, { ...baseCtx, weekendActive: true })).toBe(1)
  })

  it('topic-master earned when topicId in set', () => {
    const masters = buildTopicMasterAchievements([{ topicId: 'algebra', topicTitle: 'A', icon: '±' }])
    const m = masters[0]
    const ctxWith = { ...baseCtx, completedTopicIds: new Set(['algebra']) }
    expect(isAchievementEarned(m, ctxWith)).toBe(true)
    expect(isAchievementEarned(m, baseCtx)).toBe(false)
  })

  it('phase-master earned when phase in set', () => {
    const phase0 = PHASE_MASTER_ACHIEVEMENTS[0]
    const ctxWith = { ...baseCtx, completedPhases: new Set<0 | 1 | 2 | 3>([0]) }
    expect(isAchievementEarned(phase0, ctxWith)).toBe(true)
  })

  it('diffEarnedAchievements lists only new unlocks', () => {
    const before = { ...baseCtx, correctAnswersTotal: 9 }
    const after = { ...baseCtx, correctAnswersTotal: 11 }
    const ids = diffEarnedAchievements(before, after, ACHIEVEMENTS_STATIC)
    expect(ids).toContain('correct-10')
    expect(ids).not.toContain('correct-1')  // already earned in `before`
    expect(ids).not.toContain('correct-50')  // not yet earned in `after`
  })
})
