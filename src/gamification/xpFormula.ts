// XP-Formel: Basiswerte + Combo-Multiplier + Speed-Bonus.
// Pure Funktionen für deterministisches Testing.

export const XP_BASE_CORRECT = 10
export const XP_LESSON_1_STAR = 50
export const XP_LESSON_2_STAR = 75
export const XP_LESSON_3_STAR = 125
export const XP_WEEKLY_QUEST = 200

// Streak-Milestone-Boni (Tag → XP)
export const STREAK_MILESTONE_XP: Record<number, number> = {
  3: 50,
  7: 150,
  14: 300,
  30: 500,
  100: 1500,
  365: 3000,
}

export type ComboTier = { threshold: number; multiplier: number }

// Combo erst ab 5 wirksam — bewusstes Design (Plan §1).
export const COMBO_TIERS: ComboTier[] = [
  { threshold: 20, multiplier: 2.5 },
  { threshold: 10, multiplier: 2.0 },
  { threshold: 5,  multiplier: 1.5 },
  { threshold: 0,  multiplier: 1.0 },
]

export function getComboMultiplier(combo: number): number {
  if (combo <= 0) return 1
  for (const tier of COMBO_TIERS) {
    if (combo >= tier.threshold) return tier.multiplier
  }
  return 1
}

// Zentrale Berechnung der vergebenen XP für eine richtige Antwort.
// `combo` ist der NEUE Combo-Stand NACH der richtigen Antwort.
export function xpForCorrectAnswer(combo: number, opts?: { speedBonus?: boolean }): number {
  const base = XP_BASE_CORRECT
  const mult = getComboMultiplier(combo)
  const speed = opts?.speedBonus ? 1.5 : 1
  return Math.round(base * mult * speed)
}

// Lesson-XP nach erreichten Sternen.
export function xpForLessonStars(stars: 1 | 2 | 3): number {
  if (stars === 3) return XP_LESSON_3_STAR
  if (stars === 2) return XP_LESSON_2_STAR
  return XP_LESSON_1_STAR
}

// Combo-Milestones, bei denen ein dezenter Mini-Reward (Sound/Confetti) feuert.
export const COMBO_MILESTONES = [5, 10, 20] as const

export function isComboMilestone(combo: number): boolean {
  return (COMBO_MILESTONES as readonly number[]).includes(combo)
}
