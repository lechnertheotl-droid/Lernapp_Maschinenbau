// Achievements: ~30 Items, gruppiert in 5 Kategorien.
// Pure-data + Trigger-Funktion. Ersetzt das alte src/utils/badges.ts.

export type AchievementCategory =
  | 'mengen'
  | 'streaks'
  | 'quality'
  | 'topic-master'
  | 'spezial'

export interface AchievementDef {
  id: string
  category: AchievementCategory
  title: string
  description: string
  icon: string
  target: number              // Zielwert für Progress-Bar (1, wenn binär)
  // Welcher Wert aus AchievementContext bestimmt den Progress?
  metric: AchievementMetric
}

export type AchievementMetric =
  | { kind: 'correct-answers-total' }
  | { kind: 'lessons-completed-total' }
  | { kind: 'xp-total' }
  | { kind: 'streak-longest' }
  | { kind: 'weekend-active' }       // 1 wenn Samstag UND Sonntag aktiv
  | { kind: 'lessons-3-stars' }
  | { kind: 'longest-combo' }
  | { kind: 'perfect-lesson' }       // 1 wenn ≥1 Lesson 3-Sterne
  | { kind: 'topic-master'; topicId: string }
  | { kind: 'phase-master'; phase: 0 | 1 | 2 | 3 }
  | { kind: 'comeback-streak' }      // 1 wenn nach Streak-Bruch wieder ≥7
  | { kind: 'early-bird' }           // 1 wenn Aktivität vor 7 Uhr
  | { kind: 'practice-passed' }      // 1 wenn ≥1 Praxis-Set ≥80%

export interface AchievementContext {
  correctAnswersTotal: number
  lessonsCompletedTotal: number
  xpTotal: number
  streakLongest: number
  longestCombo: number
  weekendActive: boolean
  threeStarLessons: number
  hasPerfectLesson: boolean
  completedTopicIds: Set<string>
  completedPhases: Set<0 | 1 | 2 | 3>
  comebackStreakAchieved: boolean
  earlyBirdAchieved: boolean
  practicePassed: boolean
}

// Hilfen, um Topic-Master-Achievements pro existierendem Topic zu generieren.
// Topic-Liste wird zur Build-Zeit gefüttert (nicht hier hardcoded), damit
// neue Topics automatisch ein Achievement bekommen.
export interface TopicMasterSeed {
  topicId: string
  topicTitle: string
  icon: string
}

export function buildTopicMasterAchievements(seeds: TopicMasterSeed[]): AchievementDef[] {
  return seeds.map((s) => ({
    id: `topic-master-${s.topicId}`,
    category: 'topic-master',
    title: `${s.topicTitle} gemeistert`,
    description: `Alle Lektionen in ${s.topicTitle} abgeschlossen`,
    icon: s.icon,
    target: 1,
    metric: { kind: 'topic-master', topicId: s.topicId },
  }))
}

const PHASE_LABELS: Record<0 | 1 | 2 | 3, string> = {
  0: 'Phase 0 — Studienbeginn',
  1: 'Phase 1 — Grundlagen',
  2: 'Phase 2 — Vertiefung',
  3: 'Phase 3 — Spezialisierung',
}

export const PHASE_MASTER_ACHIEVEMENTS: AchievementDef[] = ([0, 1, 2, 3] as const).map((p) => ({
  id: `phase-master-${p}`,
  category: 'topic-master' as const,
  title: `${PHASE_LABELS[p]} abgeschlossen`,
  description: `Alle Topics aus ${PHASE_LABELS[p]} fertig`,
  icon: ['◯', '◐', '◑', '●'][p],
  target: 1,
  metric: { kind: 'phase-master' as const, phase: p },
}))

export const ACHIEVEMENTS_STATIC: AchievementDef[] = [
  // Mengen — Aufgaben richtig
  { id: 'correct-1',    category: 'mengen', title: 'Erster Treffer',  description: 'Erste Aufgabe richtig',         icon: '🎯', target: 1,    metric: { kind: 'correct-answers-total' } },
  { id: 'correct-10',   category: 'mengen', title: '10 richtig',       description: '10 Aufgaben richtig',             icon: '✓',   target: 10,   metric: { kind: 'correct-answers-total' } },
  { id: 'correct-50',   category: 'mengen', title: '50 richtig',       description: '50 Aufgaben richtig',             icon: '★',   target: 50,   metric: { kind: 'correct-answers-total' } },
  { id: 'correct-100',  category: 'mengen', title: '100 richtig',      description: '100 Aufgaben richtig',            icon: '◆',   target: 100,  metric: { kind: 'correct-answers-total' } },
  { id: 'correct-500',  category: 'mengen', title: '500 richtig',      description: '500 Aufgaben richtig',            icon: '✦',   target: 500,  metric: { kind: 'correct-answers-total' } },
  // Mengen — Lessons
  { id: 'lessons-1',    category: 'mengen', title: 'Einsteiger',       description: 'Erste Lektion abgeschlossen',     icon: '🌱', target: 1,    metric: { kind: 'lessons-completed-total' } },
  { id: 'lessons-5',    category: 'mengen', title: '5 Lektionen',      description: '5 Lektionen abgeschlossen',       icon: '📘', target: 5,    metric: { kind: 'lessons-completed-total' } },
  { id: 'lessons-15',   category: 'mengen', title: '15 Lektionen',     description: '15 Lektionen abgeschlossen',      icon: '📚', target: 15,   metric: { kind: 'lessons-completed-total' } },
  { id: 'lessons-30',   category: 'mengen', title: '30 Lektionen',     description: '30 Lektionen abgeschlossen',      icon: '🎓', target: 30,   metric: { kind: 'lessons-completed-total' } },
  // Mengen — XP
  { id: 'xp-100',       category: 'mengen', title: '100 XP',           description: '100 XP gesammelt',                icon: '+',   target: 100,    metric: { kind: 'xp-total' } },
  { id: 'xp-500',       category: 'mengen', title: '500 XP',           description: '500 XP gesammelt',                icon: '⊕',   target: 500,    metric: { kind: 'xp-total' } },
  { id: 'xp-2000',      category: 'mengen', title: '2 000 XP',         description: '2 000 XP gesammelt',              icon: '※',   target: 2000,   metric: { kind: 'xp-total' } },
  { id: 'xp-10000',     category: 'mengen', title: '10 000 XP',        description: '10 000 XP gesammelt',             icon: '∞',   target: 10000,  metric: { kind: 'xp-total' } },

  // Streaks
  { id: 'streak-3',     category: 'streaks', title: '3-Tage-Streak',   description: '3 Tage in Folge gelernt',         icon: '🔥', target: 3,   metric: { kind: 'streak-longest' } },
  { id: 'streak-7',     category: 'streaks', title: '7-Tage-Streak',   description: '7 Tage in Folge gelernt',         icon: '🔥', target: 7,   metric: { kind: 'streak-longest' } },
  { id: 'streak-14',    category: 'streaks', title: '14-Tage-Streak',  description: '14 Tage in Folge gelernt',        icon: '⚡', target: 14,  metric: { kind: 'streak-longest' } },
  { id: 'streak-30',    category: 'streaks', title: '30-Tage-Streak',  description: '30 Tage in Folge gelernt',        icon: '⚡', target: 30,  metric: { kind: 'streak-longest' } },
  { id: 'streak-100',   category: 'streaks', title: '100-Tage-Streak', description: '100 Tage in Folge gelernt',       icon: '☀',   target: 100, metric: { kind: 'streak-longest' } },
  { id: 'weekend',      category: 'streaks', title: 'Wochenend-Lerner', description: 'Sa und So aktiv im selben Weekend', icon: '◑', target: 1, metric: { kind: 'weekend-active' } },

  // Quality
  { id: 'three-star-5',   category: 'quality', title: '5× 3 Sterne',     description: '5 Lektionen mit 3 Sternen',       icon: '⭐', target: 5,  metric: { kind: 'lessons-3-stars' } },
  { id: 'three-star-15',  category: 'quality', title: '15× 3 Sterne',    description: '15 Lektionen mit 3 Sternen',      icon: '⭐', target: 15, metric: { kind: 'lessons-3-stars' } },
  { id: 'combo-25',       category: 'quality', title: 'Combo 25',         description: '25 Aufgaben in Folge richtig',    icon: '🔗', target: 25, metric: { kind: 'longest-combo' } },
  { id: 'combo-50',       category: 'quality', title: 'Combo 50',         description: '50 Aufgaben in Folge richtig',    icon: '🔗', target: 50, metric: { kind: 'longest-combo' } },
  { id: 'perfect-lesson', category: 'quality', title: 'Perfekte Lesson',  description: 'Lektion ohne Hint, alle 1st-try', icon: '✨', target: 1,  metric: { kind: 'perfect-lesson' } },

  // Spezial
  { id: 'comeback',     category: 'spezial', title: 'Comeback-Hero',   description: 'Streak nach Bruch wieder ≥ 7',     icon: '↩', target: 1, metric: { kind: 'comeback-streak' } },
  { id: 'early-bird',   category: 'spezial', title: 'Frühaufsteher',    description: 'Lerneinheit vor 7 Uhr',           icon: '🌅', target: 1, metric: { kind: 'early-bird' } },
  { id: 'practice-pass', category: 'spezial', title: 'Klausur bestanden', description: 'Praxis-Set mit ≥ 80% bestanden', icon: '🏁', target: 1, metric: { kind: 'practice-passed' } },
]

export function getAllAchievements(topicSeeds: TopicMasterSeed[]): AchievementDef[] {
  return [
    ...ACHIEVEMENTS_STATIC,
    ...buildTopicMasterAchievements(topicSeeds),
    ...PHASE_MASTER_ACHIEVEMENTS,
  ]
}

// Aktueller Progress-Wert (0..target) für ein Achievement gegeben Context.
export function getAchievementProgress(def: AchievementDef, ctx: AchievementContext): number {
  const m = def.metric
  switch (m.kind) {
    case 'correct-answers-total':   return Math.min(def.target, ctx.correctAnswersTotal)
    case 'lessons-completed-total': return Math.min(def.target, ctx.lessonsCompletedTotal)
    case 'xp-total':                return Math.min(def.target, ctx.xpTotal)
    case 'streak-longest':          return Math.min(def.target, ctx.streakLongest)
    case 'longest-combo':           return Math.min(def.target, ctx.longestCombo)
    case 'lessons-3-stars':         return Math.min(def.target, ctx.threeStarLessons)
    case 'weekend-active':          return ctx.weekendActive ? 1 : 0
    case 'perfect-lesson':          return ctx.hasPerfectLesson ? 1 : 0
    case 'topic-master':            return ctx.completedTopicIds.has(m.topicId) ? 1 : 0
    case 'phase-master':            return ctx.completedPhases.has(m.phase) ? 1 : 0
    case 'comeback-streak':         return ctx.comebackStreakAchieved ? 1 : 0
    case 'early-bird':              return ctx.earlyBirdAchieved ? 1 : 0
    case 'practice-passed':         return ctx.practicePassed ? 1 : 0
  }
}

export function isAchievementEarned(def: AchievementDef, ctx: AchievementContext): boolean {
  return getAchievementProgress(def, ctx) >= def.target
}

// Liste der eben neu freigeschalteten IDs zwischen zwei Snapshots.
export function diffEarnedAchievements(
  before: AchievementContext,
  after: AchievementContext,
  defs: AchievementDef[],
): string[] {
  const newly: string[] = []
  for (const d of defs) {
    if (!isAchievementEarned(d, before) && isAchievementEarned(d, after)) {
      newly.push(d.id)
    }
  }
  return newly
}
