/**
 * Geteilte Content-Metriken für scripts/generate-status.js.
 * Alle Funktionen sind pure und arbeiten ausschließlich auf den
 * Runtime-Content-Objekten aus src/content/index.js.
 */

const FOUR_BLOCK_PATTERNS = [
  /\*\*Ansatz\s*:\*\*/i,
  /\*\*Rechnung\s*:\*\*/i,
  /\*\*Probe\s*:\*\*/i,
  /\*\*Typischer Fehler\s*:\*\*/i,
]

export function hasFourBlockExplanation(exercise) {
  if (typeof exercise?.explanation !== 'string') return false
  return FOUR_BLOCK_PATTERNS.every((p) => p.test(exercise.explanation))
}

export function isMcWithCompleteWae(exercise) {
  if (exercise?.type !== 'multiple-choice') return null
  if (!Array.isArray(exercise.options) || exercise.options.length < 3) return null
  const wae = exercise.wrongAnswerExplanations
  if (!wae || typeof wae !== 'object') return false
  const wrongIndices = exercise.options
    .map((_, i) => i)
    .filter((i) => i !== exercise.correctIndex)
  return wrongIndices.every(
    (i) => typeof wae[String(i)] === 'string' && wae[String(i)].trim().length > 0
  )
}

export function isSupplementalExercise(exercise) {
  return Boolean(exercise?.isSupplemental)
}

export function countExercisesByType(topic) {
  const counts = {}
  for (const unit of topic.units ?? []) {
    for (const ex of Object.values(unit.exercises ?? {})) {
      counts[ex.type] = (counts[ex.type] ?? 0) + 1
    }
  }
  return counts
}

export function collectTopicMetrics(topic) {
  let total = 0
  let supplemental = 0
  let fourBlock = 0
  let withExplanation = 0
  let mcTotal = 0
  let mcWithWae = 0

  for (const unit of topic.units ?? []) {
    for (const ex of Object.values(unit.exercises ?? {})) {
      total += 1
      if (isSupplementalExercise(ex)) supplemental += 1
      if (typeof ex.explanation === 'string' && ex.explanation.length > 0) {
        withExplanation += 1
        if (hasFourBlockExplanation(ex)) fourBlock += 1
      }
      if (ex.type === 'multiple-choice' && Array.isArray(ex.options) && ex.options.length >= 3) {
        mcTotal += 1
        if (isMcWithCompleteWae(ex)) mcWithWae += 1
      }
    }
  }

  return {
    total,
    manual: total - supplemental,
    supplemental,
    fourBlock,
    withExplanation,
    mcTotal,
    mcWithWae,
  }
}

export function collectLessonMetrics(topic, lesson) {
  const unit = (topic.units ?? []).find((u) => u.lessons?.some((l) => l.id === lesson.id))
  if (!unit) return { total: 0, manual: 0, supplemental: 0, fourBlock: 0 }

  const exerciseSteps = (lesson.steps ?? []).filter(
    (s) => s.type === 'exercise' || s.type === 'mastery-check'
  )

  let total = 0
  let supplemental = 0
  let fourBlock = 0

  for (const step of exerciseSteps) {
    const ex = unit.exercises?.[step.exerciseRef]
    if (!ex) continue
    total += 1
    if (isSupplementalExercise(ex)) supplemental += 1
    if (hasFourBlockExplanation(ex)) fourBlock += 1
  }

  return { total, manual: total - supplemental, supplemental, fourBlock }
}

export function percent(n, d) {
  if (!d) return 0
  return Math.round((100 * n) / d)
}
