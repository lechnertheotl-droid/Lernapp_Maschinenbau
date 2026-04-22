// Struktur-Hüllen für manuell geschriebene Zielaufgaben (eine Aufgabe pro
// Sub-Goal einer Lesson). Jede Helper-Funktion erzwingt das Mindest-Schema —
// Inhalt (Frage, Optionen, Zahlen, Erklärung) bleibt vollständig manuell.

export function mc(question, options, correctIndex, explanation, hints, wrongAnswerExplanations) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

export function ni(question, correctValue, tolerance, unit, explanation, hints) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints }
}

export function tf(statement, correct, explanation, hints) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

export function matching(question, pairs, explanation, hints) {
  return { type: 'matching', question, pairs, explanation, hints }
}

export function sorting(question, items, correctOrder, explanation, hints) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}
