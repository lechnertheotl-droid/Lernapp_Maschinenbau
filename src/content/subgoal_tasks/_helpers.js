// Struktur-Hüllen für manuell geschriebene Zielaufgaben (eine Aufgabe pro
// Sub-Goal einer Lesson). Jede Helper-Funktion erzwingt das Mindest-Schema —
// Inhalt (Frage, Optionen, Zahlen, Erklärung) bleibt vollständig manuell.
//
// Alle Helfer akzeptieren als LETZTES optionales Argument ein `pedagogy`-
// Objekt der Form `{ stage, subGoal, uses }`. Für Topics in
// BLUEPRINT_ENFORCED_TOPICS ist das Feld Pflicht; die Validierung passiert
// in `scripts/validate-content.js`.

function withPedagogy(obj, pedagogy) {
  if (!pedagogy) return obj
  return { ...obj, pedagogy }
}

export function mc(question, options, correctIndex, explanation, hints, wrongAnswerExplanations, pedagogy) {
  return withPedagogy(
    {
      type: 'multiple-choice',
      question,
      options,
      correctIndex,
      explanation,
      hints,
      ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
    },
    pedagogy,
  )
}

export function ni(question, correctValue, tolerance, unit, explanation, hints, pedagogy) {
  return withPedagogy(
    { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints },
    pedagogy,
  )
}

export function tf(statement, correct, explanation, hints, pedagogy) {
  return withPedagogy({ type: 'true-false', statement, correct, explanation, hints }, pedagogy)
}

export function matching(question, pairs, explanation, hints, pedagogy) {
  return withPedagogy({ type: 'matching', question, pairs, explanation, hints }, pedagogy)
}

export function sorting(question, items, correctOrder, explanation, hints, pedagogy) {
  return withPedagogy({ type: 'sorting', question, items, correctOrder, explanation, hints }, pedagogy)
}

/**
 * Wrap-Stil: `tag(mc(...), { stage: 'recognize', subGoal: 0, uses: ['log-def'] })`.
 * Praktisch, wenn man bestehende Helper-Calls um Pedagogy ergänzen will, ohne
 * die letzte Positions-Argumentenreihenfolge zu pflegen.
 */
export function tag(exercise, pedagogy) {
  return { ...exercise, pedagogy }
}
