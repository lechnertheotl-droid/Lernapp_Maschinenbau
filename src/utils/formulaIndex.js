import { getAllTopics } from '@/content/index'

/**
 * Durchläuft alle Topics und sammelt alle explanation-formal-Steps
 * zu einer flachen Liste für die zentrale Formelsammlung.
 */
export function buildFormulaIndex() {
  const result = []
  for (const topic of getAllTopics()) {
    for (const unit of topic.units ?? []) {
      for (const lesson of unit.lessons ?? []) {
        for (const step of lesson.steps ?? []) {
          if (step.type !== 'explanation-formal') continue
          result.push({
            id: `${lesson.id}__${step.id}`,
            title: step.title,
            content: step.content,
            priority: step.priority ?? 'wichtig',
            topicId: topic.id,
            topicTitle: topic.title,
            topicIcon: topic.icon,
            unitTitle: unit.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
          })
        }
      }
    }
  }
  return result
}

export function searchFormulas(formulas, query) {
  const q = query.trim().toLowerCase()
  if (!q) return formulas
  return formulas.filter((f) => {
    if (f.title.toLowerCase().includes(q)) return true
    if (f.lessonTitle.toLowerCase().includes(q)) return true
    if (f.topicTitle.toLowerCase().includes(q)) return true
    if (f.content.toLowerCase().includes(q)) return true
    return false
  })
}
