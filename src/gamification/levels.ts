// Level + Rang-System: 30 Stufen, ingenieurs-thematische Rang-Namen.
// Pure Funktionen — keine State-/DOM-Abhängigkeit.

export interface LevelInfo {
  level: number
  rank: string
  xpFloor: number
  xpCeiling: number | null  // null bei Max-Level
  xpIntoLevel: number
  xpForNextLevel: number | null
  progressInLevel: number   // 0..1
  isMaxLevel: boolean
}

// Cumulative XP-Schwellen pro Level. Sanft progressiv: früh erreichbar, spät dauerhaft.
export const XP_PER_LEVEL: number[] = [
  0,        // Level 1
  100,      // 2
  250,      // 3
  450,      // 4
  700,      // 5
  1000,     // 6
  1350,     // 7
  1750,     // 8
  2200,     // 9
  3000,     // 10
  3900,     // 11
  4900,     // 12
  6000,     // 13
  7200,     // 14
  8500,     // 15
  9900,     // 16 (≈ +1400)
  11000,    // 17
  12200,    // 18
  13500,    // 19
  15000,    // 20
  16700,    // 21
  18500,    // 22 (≈ +1800)
  20400,    // 23
  22500,    // 24
  24800,    // 25
  27300,    // 26
  30000,    // 27
  33000,    // 28
  36500,    // 29
  40000,    // 30 (max)
]

export const MAX_LEVEL = XP_PER_LEVEL.length

export const RANK_NAMES: string[] = [
  'Lehrling I',         // 1
  'Lehrling II',
  'Lehrling III',
  'Geselle I',          // 4
  'Geselle II',
  'Geselle III',
  'Techniker I',        // 7
  'Techniker II',
  'Techniker III',
  'Konstrukteur I',     // 10
  'Konstrukteur II',
  'Konstrukteur III',
  'Ingenieur I',        // 13
  'Ingenieur II',
  'Ingenieur III',
  'Senior-Ingenieur I', // 16
  'Senior-Ingenieur II',
  'Senior-Ingenieur III',
  'Diplom-Ing. I',      // 19
  'Diplom-Ing. II',
  'Diplom-Ing. III',
  'Dr.-Ing. I',         // 22
  'Dr.-Ing. II',
  'Dr.-Ing. III',
  'Chefkonstrukteur',   // 25
  'Habilitand',
  'Privatdozent',
  'Prof.-Ing. I',
  'Prof.-Ing. II',
  'Prof.-Ing. — Lehrstuhl',  // 30
]

export function getLevelFromXp(xp: number): number {
  const safeXp = Math.max(0, Math.floor(xp))
  for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
    if (safeXp >= XP_PER_LEVEL[i]) return i + 1
  }
  return 1
}

export function getRankName(level: number): string {
  const idx = Math.max(1, Math.min(level, MAX_LEVEL)) - 1
  return RANK_NAMES[idx]
}

export function getLevelInfo(xp: number): LevelInfo {
  const level = getLevelFromXp(xp)
  const isMax = level >= MAX_LEVEL
  const xpFloor = XP_PER_LEVEL[level - 1]
  const xpCeiling = isMax ? null : XP_PER_LEVEL[level]
  const xpIntoLevel = Math.max(0, xp - xpFloor)
  const xpForNextLevel = isMax ? null : (xpCeiling as number) - xpFloor
  const progressInLevel = isMax ? 1 : xpIntoLevel / (xpForNextLevel as number)
  return {
    level,
    rank: getRankName(level),
    xpFloor,
    xpCeiling,
    xpIntoLevel,
    xpForNextLevel,
    progressInLevel: Math.max(0, Math.min(1, progressInLevel)),
    isMaxLevel: isMax,
  }
}

// Liefert das Level, das bei xpDelta-XP-Zuwachs (von xpBefore aus) erreicht wird.
// Praktisch: nach AWARD_XP prüfen, ob ein Level-Up stattgefunden hat.
export function didLevelUp(xpBefore: number, xpAfter: number): { leveledUp: boolean; from: number; to: number } {
  const from = getLevelFromXp(xpBefore)
  const to = getLevelFromXp(xpAfter)
  return { leveledUp: to > from, from, to }
}
