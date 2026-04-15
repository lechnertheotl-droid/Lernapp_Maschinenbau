export const LEVEL_ORDER = { grundlagen: 0, vertiefung: 1 } as const

export const LEVEL_HEADINGS = {
  grundlagen: 'Grundlagen (1.–2. Semester)',
  vertiefung: 'Vertiefung (ab 3. Semester)',
} as const

export type TopicLevel = keyof typeof LEVEL_ORDER

export function topicLevelOf<T extends { level?: string }>(topic: T): TopicLevel {
  return (topic.level === 'vertiefung' ? 'vertiefung' : 'grundlagen')
}

export function groupTopicsByLevel<T extends { level?: string }>(
  topics: T[]
): Array<[TopicLevel, T[]]> {
  const groups = new Map<TopicLevel, T[]>()
  for (const topic of topics) {
    const level = topicLevelOf(topic)
    if (!groups.has(level)) groups.set(level, [])
    groups.get(level)!.push(topic)
  }
  return [...groups.entries()].sort(
    ([a], [b]) => LEVEL_ORDER[a] - LEVEL_ORDER[b]
  )
}
