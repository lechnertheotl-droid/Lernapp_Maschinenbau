import { trigonometryTopic } from './mathematics/trigonometry/index'
import { ableitungTopic }    from './mathematics/ableitung/index'
import { vektorenTopic }     from './mathematics/vektoren/index'
import { algebraTopic }      from './mathematics/algebra/index'
import { engineeringTopics } from './engineering/maschinenbau'

// ── Registry ──────────────────────────────────────────────────────────────────
const BASE_TOPICS = {
  trigonometry: trigonometryTopic,
  ableitung:    ableitungTopic,
  vektoren:     vektorenTopic,
  algebra:      algebraTopic,
}

const TOPICS = {
  ...BASE_TOPICS,
  ...Object.fromEntries(engineeringTopics.map((topic) => [topic.id, topic])),
}

export function getAllTopics() {
  return Object.values(TOPICS)
}

export function getTopic(topicId) {
  return TOPICS[topicId] ?? null
}

/** Flattens all lessons across all units of a topic. */
export function getAllLessons(topicId) {
  const topic = getTopic(topicId)
  if (!topic) return []
  return topic.units.flatMap((u) => u.lessons)
}

export function getLesson(topicId, lessonId) {
  return getAllLessons(topicId).find((l) => l.id === lessonId) ?? null
}

export function getLessonById(lessonId) {
  for (const topic of getAllTopics()) {
    const lesson = getLesson(topic.id, lessonId)
    if (lesson) return { topicId: topic.id, lesson }
  }
  return null
}

export function getExercise(topicId, exerciseId) {
  const topic = getTopic(topicId)
  if (!topic) return null
  for (const unit of topic.units) {
    if (unit.exercises[exerciseId]) return unit.exercises[exerciseId]
  }
  return null
}

/** Returns all lesson IDs for a topic (used for progress calculation). */
export function getLessonIds(topicId) {
  return getAllLessons(topicId).map((l) => l.id)
}
