/**
 * Topic-IDs, für die im FormulaSheet eine Formelsammlung hinterlegt ist.
 *
 * Dieses kleine Meta-File existiert separat von `FormulaSheet.jsx`, damit der
 * f-Icon-Check in `LessonView` (`hasFormulas`) nicht das komplette FORMULAS-
 * Objekt (~250 Zeilen Daten) in den eager Lesson-Bundle zieht. `FormulaSheet`
 * selbst wird per `React.lazy` erst beim Öffnen nachgeladen.
 *
 * ACHTUNG: Muss synchron gehalten werden mit den Top-Level-Keys von FORMULAS
 * in `FormulaSheet.jsx`. Bei Änderung dort hier anpassen.
 */
export const TOPICS_WITH_FORMULAS = new Set([
  'trigonometry',
  'ableitung',
  'vektoren',
  'algebra',
  'festigkeitslehre',
  'thermodynamik',
  'fluidmechanik',
  'maschinenelemente',
])

export function hasFormulas(topicId) {
  return TOPICS_WITH_FORMULAS.has(topicId)
}
