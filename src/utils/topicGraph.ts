/**
 * Zentrale Definition der Topic-Reihenfolge und Abhängigkeiten.
 * Liegt außerhalb der Content-Module, damit der Skill-Tree ohne Eingriff in
 * jede Content-Datei gepflegt werden kann. Neue Topics hier eintragen.
 */
export type TopicCategory = 'math' | 'engineering' | 'programming'

/**
 * studienbeginPriority:
 *   1 = 1. Semester (Phase 1) — enthält ggf. integrierte Vorkurs-Units (Phase 0).
 *   2 = 2. Semester (Phase 2).
 *   null/undefined = Vertiefung ab 3. Semester (Phase 3).
 * Keine Blockier-Wirkung; nur für Badges und Filter (siehe Lehrplan).
 */
export interface TopicGraphEntry {
  order: number
  category: TopicCategory
  prerequisiteTopics: string[]
  studienbeginPriority?: 1 | 2 | null
}

export const TOPIC_GRAPH: Record<string, TopicGraphEntry> = {
  // ── Mathematics track (0–19) ────────────────────────────────────────────
  algebra:                 { order: 0,  category: 'math', prerequisiteTopics: [], studienbeginPriority: 1 },
  trigonometry:            { order: 1,  category: 'math', prerequisiteTopics: ['algebra'], studienbeginPriority: 1 },
  vektoren:                { order: 2,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'], studienbeginPriority: 1 },
  ableitung:               { order: 3,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'], studienbeginPriority: 1 },
  integralrechnung:        { order: 4,  category: 'math', prerequisiteTopics: ['ableitung'], studienbeginPriority: 1 },
  'lineare-algebra':       { order: 5,  category: 'math', prerequisiteTopics: ['vektoren'], studienbeginPriority: 2 },
  differentialgleichungen: { order: 6,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung'], studienbeginPriority: 2 },
  'komplexe-zahlen':       { order: 7,  category: 'math', prerequisiteTopics: ['algebra', 'trigonometry'], studienbeginPriority: 2 },
  'reihen-folgen':         { order: 8,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung'], studienbeginPriority: 2 },
  'mehrdim-analysis':      { order: 9,  category: 'math', prerequisiteTopics: ['ableitung', 'integralrechnung', 'vektoren'], studienbeginPriority: null },
  numerik:                 { order: 10, category: 'math', prerequisiteTopics: ['algebra', 'ableitung'], studienbeginPriority: null },
  statistik:               { order: 11, category: 'math', prerequisiteTopics: ['algebra', 'integralrechnung'], studienbeginPriority: null },
  'fourier-laplace':       { order: 12, category: 'math', prerequisiteTopics: ['differentialgleichungen', 'komplexe-zahlen'], studienbeginPriority: null },

  // ── Engineering track (20–39) ───────────────────────────────────────────
  'technische-mechanik':   { order: 20, category: 'engineering', prerequisiteTopics: ['algebra', 'trigonometry', 'vektoren'], studienbeginPriority: 1 },
  festigkeitslehre:        { order: 21, category: 'engineering', prerequisiteTopics: ['technische-mechanik', 'ableitung'], studienbeginPriority: 2 },
  thermodynamik:           { order: 22, category: 'engineering', prerequisiteTopics: ['ableitung', 'integralrechnung'], studienbeginPriority: 2 },
  fluidmechanik:           { order: 23, category: 'engineering', prerequisiteTopics: ['ableitung', 'vektoren'], studienbeginPriority: null },
  werkstoffkunde:          { order: 24, category: 'engineering', prerequisiteTopics: ['algebra'], studienbeginPriority: 1 },
  maschinenelemente:       { order: 25, category: 'engineering', prerequisiteTopics: ['festigkeitslehre'], studienbeginPriority: 2 },
  elektrotechnik:          { order: 26, category: 'engineering', prerequisiteTopics: ['algebra'], studienbeginPriority: 1 },
  regelungstechnik:        { order: 27, category: 'engineering', prerequisiteTopics: ['differentialgleichungen', 'komplexe-zahlen'], studienbeginPriority: null },

  // ── Programming track (40+) ─────────────────────────────────────────────
  'python-matlab':         { order: 40, category: 'programming', prerequisiteTopics: ['algebra'], studienbeginPriority: 1 },
}

/** Liefert die Phase (1, 2, oder null) für ein Topic. */
export function getStudienbeginPhase(topicId: string): 1 | 2 | null {
  const entry = TOPIC_GRAPH[topicId]
  if (!entry) return null
  return entry.studienbeginPriority ?? null
}

/** True, wenn das Topic zu Studienbeginn (Phase 1 oder 2) gehört. */
export function isStudienbeginTopic(topicId: string): boolean {
  const phase = getStudienbeginPhase(topicId)
  return phase === 1 || phase === 2
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
