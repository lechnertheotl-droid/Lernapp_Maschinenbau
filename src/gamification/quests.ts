// Daily/Weekly-Quests: deterministische Auswahl pro Tag/Woche aus Pool.
// Pure Funktionen ohne State-/DOM-Kopplung.

export type QuestType =
  | 'correct-answers'    // n richtige Antworten heute
  | 'lessons-completed'  // n Lessons heute
  | 'minutes-active'     // n Minuten Aktivität heute
  | 'streak-in-row'      // n in Folge richtig (max combo heute)
  | 'practice-set'       // 1 Praxis-Set abgeschlossen heute

export interface QuestDef {
  id: string
  type: QuestType
  target: number
  rewardXp: number
  label: string  // kurze UI-Beschreibung
}

export interface DailyQuest {
  id: string
  type: QuestType
  target: number
  progress: number
  rewardXp: number
  label: string
  completed: boolean
  claimed: boolean
  date: string  // YYYY-MM-DD
}

export interface WeeklyQuest {
  id: string
  type: 'lessons-completed-week'
  target: number
  progress: number
  rewardXp: number
  rewardFreezes: number
  label: string
  completed: boolean
  claimed: boolean
  weekIso: string  // YYYY-WW (ISO-Wochen-Repräsentation)
}

// Pool von 5 Quest-Typen — pro Tag werden 2 deterministisch gezogen.
export const DAILY_QUEST_POOL: QuestDef[] = [
  { id: 'pool-correct-10',  type: 'correct-answers',   target: 10, rewardXp: 30, label: '10 Aufgaben richtig beantworten' },
  { id: 'pool-lessons-1',   type: 'lessons-completed', target: 1,  rewardXp: 50, label: '1 Lektion abschließen' },
  { id: 'pool-minutes-15',  type: 'minutes-active',    target: 15, rewardXp: 40, label: '15 Minuten lernen' },
  { id: 'pool-row-5',       type: 'streak-in-row',     target: 5,  rewardXp: 40, label: '5 Aufgaben in Folge richtig' },
  { id: 'pool-practice-1',  type: 'practice-set',      target: 1,  rewardXp: 50, label: '1 Prüfungsübung abschließen' },
]

// Wochen-Quest: nur eine Variante.
export const WEEKLY_QUEST_DEF = {
  id: 'weekly-lessons-5',
  type: 'lessons-completed-week' as const,
  target: 5,
  rewardXp: 200,
  rewardFreezes: 1,
  label: '5 Lektionen diese Woche',
}

// Deterministischer Hash aus String → Integer ≥ 0.
function hashString(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

// Wählt 2 unterschiedliche Quests pro Datum deterministisch aus dem Pool.
export function generateDailyQuests(date: string): DailyQuest[] {
  const seed = hashString(date)
  const pool = [...DAILY_QUEST_POOL]
  const picks: QuestDef[] = []
  let s = seed
  for (let i = 0; i < 2 && pool.length > 0; i++) {
    const idx = s % pool.length
    picks.push(pool.splice(idx, 1)[0])
    s = Math.floor(s / pool.length) + 31  // re-mix
  }
  return picks.map((def, i) => ({
    id: `${date}-q${i}-${def.id}`,
    type: def.type,
    target: def.target,
    progress: 0,
    rewardXp: def.rewardXp,
    label: def.label,
    completed: false,
    claimed: false,
    date,
  }))
}

// ISO-Woche aus Datum (yyyy-Www, z.B. "2026-W15").
export function getIsoWeek(date: string): string {
  const d = new Date(`${date}T00:00:00Z`)
  // ISO-8601: Wochen-Donnerstag-Trick
  const target = new Date(d.valueOf())
  const dayNr = (d.getUTCDay() + 6) % 7
  target.setUTCDate(target.getUTCDate() - dayNr + 3)
  const firstThursday = target.valueOf()
  target.setUTCMonth(0, 1)
  if (target.getUTCDay() !== 4) {
    target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7)
  }
  const week = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000)
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

export function generateWeeklyQuest(weekIso: string): WeeklyQuest {
  return {
    id: `weekly-${weekIso}`,
    type: WEEKLY_QUEST_DEF.type,
    target: WEEKLY_QUEST_DEF.target,
    progress: 0,
    rewardXp: WEEKLY_QUEST_DEF.rewardXp,
    rewardFreezes: WEEKLY_QUEST_DEF.rewardFreezes,
    label: WEEKLY_QUEST_DEF.label,
    completed: false,
    claimed: false,
    weekIso,
  }
}

// Trigger-Events für Quest-Progress. Reducer ruft `progressQuest()` mit dem
// passenden Event nach jeder Aktion. Quests reagieren nur auf zu ihrem Typ
// passende Events.
export type QuestEvent =
  | { kind: 'correct-answer' }
  | { kind: 'lesson-completed' }
  | { kind: 'minutes-elapsed'; minutes: number }
  | { kind: 'combo-update'; combo: number }
  | { kind: 'practice-set-completed' }

export function progressQuest(quest: DailyQuest, event: QuestEvent): DailyQuest {
  if (quest.completed) return quest
  let newProgress = quest.progress
  switch (quest.type) {
    case 'correct-answers':
      if (event.kind === 'correct-answer') newProgress = quest.progress + 1
      break
    case 'lessons-completed':
      if (event.kind === 'lesson-completed') newProgress = quest.progress + 1
      break
    case 'minutes-active':
      if (event.kind === 'minutes-elapsed') newProgress = quest.progress + event.minutes
      break
    case 'streak-in-row':
      if (event.kind === 'combo-update') newProgress = Math.max(quest.progress, event.combo)
      break
    case 'practice-set':
      if (event.kind === 'practice-set-completed') newProgress = quest.progress + 1
      break
  }
  newProgress = Math.min(newProgress, quest.target)
  const completed = newProgress >= quest.target
  return { ...quest, progress: newProgress, completed }
}

export function progressWeeklyQuest(quest: WeeklyQuest, event: QuestEvent): WeeklyQuest {
  if (quest.completed) return quest
  if (event.kind !== 'lesson-completed') return quest
  const newProgress = Math.min(quest.progress + 1, quest.target)
  return { ...quest, progress: newProgress, completed: newProgress >= quest.target }
}
