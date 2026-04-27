/**
 * Geteilte Qualitäts-Pattern für Content-Aufgaben.
 * Wird genutzt von:
 *   - src/content/index.js  (Runtime-Audit in getAgentTasks/getContentQualityIssues)
 *   - scripts/lib/content-metrics.js  (Status-Generator + Validator)
 *
 * Wenn der 4-Block-Kontrakt sich ändert (z. B. Block-Namen umbenennen),
 * NUR HIER anpassen.
 */

export const FOUR_BLOCK_PATTERNS = [
  /\*\*Ansatz\s*:\*\*/i,
  /\*\*Rechnung\s*:\*\*/i,
  /\*\*Probe\s*:\*\*/i,
  /\*\*Typischer Fehler\s*:\*\*/i,
]

export function hasFourBlockExplanation(exercise) {
  if (typeof exercise?.explanation !== 'string') return false
  return FOUR_BLOCK_PATTERNS.every((p) => p.test(exercise.explanation))
}
