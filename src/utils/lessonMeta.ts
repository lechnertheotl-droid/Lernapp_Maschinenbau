import type { Difficulty } from '@/types/content'

interface TopicLike {
  difficulty?: number | Difficulty
  id?: string
}

interface UnitLike {
  title?: string
}

interface LessonLike {
  id: string
  title?: string
  difficulty?: Difficulty
  estimatedMinutes?: number
}

const EXAM_RX = /prüfung|pruefung|exam/i

export function getLessonDifficulty(
  topic: TopicLike,
  unit: UnitLike,
  lesson: LessonLike
): Difficulty {
  if (lesson.difficulty) return lesson.difficulty
  if (unit.title && EXAM_RX.test(unit.title)) return 'pruefung'
  if (typeof topic.difficulty === 'string') return topic.difficulty
  const num = typeof topic.difficulty === 'number' ? topic.difficulty : 1
  if (num <= 1) return 'einsteiger'
  if (num === 2) return 'grundlagen'
  if (num === 3) return 'mittel'
  return 'fortgeschritten'
}

export function difficultyLabel(d: Difficulty): string {
  return (
    {
      einsteiger: 'Einsteiger',
      grundlagen: 'Grundlagen',
      mittel: 'Mittel',
      fortgeschritten: 'Fortgeschritten',
      pruefung: 'Prüfung',
    } satisfies Record<Difficulty, string>
  )[d]
}
