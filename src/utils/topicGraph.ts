/**
 * Zentrale Definition der Topic-Reihenfolge und Abhängigkeiten.
 * Liegt außerhalb der Content-Module, damit der Skill-Tree ohne Eingriff in
 * jede Content-Datei gepflegt werden kann. Neue Topics hier eintragen.
 */
export type TopicCategory = 'math' | 'engineering' | 'programming'

export interface TopicGraphEntry {
  order: number
  category: TopicCategory
  prerequisiteTopics: string[]
}

export const TOPIC_GRAPH: Record<string, TopicGraphEntry> = {
  // ── Mathematics track (0–19) ────────────────────────────────────────────
  algebra:                 { order: 0,  category: 'math', prerequisiteTopics: [] },
  trigonometry:            { order: 1,  category: 'math', prerequisiteTopics: ['algebra'] },
  vektoren:                { order: 2,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'] },
  ableitung:               { order: 3,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'] },
  integralrechnung:        { order: 4,  category: 'math', prerequisiteTopics: ['ableitung'] },
  'lineare-algebra':       { order: 5,  category: 'math', prerequisiteTopics: ['vektoren'] },
  differentialgleichungen: { order: 6,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung'] },
  'komplexe-zahlen':       { order: 7,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'] },
  'reihen-folgen':         { order: 8,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung'] },
  'mehrdim-analysis':      { order: 9,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung', 'vektoren'] },
  numerik:                 { order: 10, category: 'math', prerequisiteTopics: ['algebra', 'ableitung'] },
  statistik:               { order: 11, category: 'math', prerequisiteTopics: ['algebra', 'integralrechnung'] },

  // ── Engineering track (20–39) ───────────────────────────────────────────
  'technische-mechanik':   { order: 20, category: 'engineering', prerequisiteTopics: ['algebra', 'trigonometry', 'vektoren'] },
  festigkeitslehre:        { order: 21, category: 'engineering', prerequisiteTopics: ['technische-mechanik', 'ableitung'] },
  thermodynamik:           { order: 22, category: 'engineering', prerequisiteTopics: ['ableitung', 'integralrechnung'] },
  fluidmechanik:           { order: 23, category: 'engineering', prerequisiteTopics: ['ableitung', 'vektoren'] },
  werkstoffkunde:          { order: 24, category: 'engineering', prerequisiteTopics: ['algebra'] },
  maschinenelemente:       { order: 25, category: 'engineering', prerequisiteTopics: ['festigkeitslehre'] },

  // ── Programming track (40+) ─────────────────────────────────────────────
  'python-matlab':         { order: 40, category: 'programming', prerequisiteTopics: ['algebra'] },
}

export function getTopicMeta(topicId: string): TopicGraphEntry {
  return TOPIC_GRAPH[topicId] ?? { order: 999, category: 'math', prerequisiteTopics: [] }
}

interface TopicLike {
  id: string
}

export function sortTopicsByOrder<T extends TopicLike>(topics: T[]): T[] {
  return [...topics].sort((a, b) => getTopicMeta(a.id).order - getTopicMeta(b.id).order)
}

/**
 * Returns the status of each topic given completion info.
 * - locked: not all prerequisiteTopics reached `completed`
 * - available: all prerequisites done, topic not yet started
 * - in-progress: at least one lesson completed but not all
 * - completed: all lessons completed
 */
export type TopicStatus = 'locked' | 'available' | 'in-progress' | 'completed'

export function computeTopicStatus(
  topicId: string,
  completedRatio: number,
  prereqAllComplete: boolean
): TopicStatus {
  if (completedRatio >= 1) return 'completed'
  if (completedRatio > 0) return 'in-progress'
  if (!prereqAllComplete) return 'locked'
  return 'available'
}

/** Returns the first-recommended available topic (lowest order, not completed). */
export function nextRecommendedTopic(
  topicIds: string[],
  statusByTopic: Record<string, TopicStatus>
): string | null {
  const inProgress = sortTopicsByOrder(topicIds.map((id) => ({ id })))
    .find((t) => statusByTopic[t.id] === 'in-progress')
  if (inProgress) return inProgress.id
  const available = sortTopicsByOrder(topicIds.map((id) => ({ id })))
    .find((t) => statusByTopic[t.id] === 'available')
  return available?.id ?? null
}
