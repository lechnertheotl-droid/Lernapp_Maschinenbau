function mc(question, options, correctIndex, explanation, hints = [], visualization = undefined, wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(visualization ? { visualization } : {}),
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = [], visualization = undefined) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints, ...(visualization ? { visualization } : {}) }
}

function tf(statement, correct, explanation, hints = []) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

function matching(question, pairs, explanation, hints = []) {
  return { type: 'matching', question, pairs, explanation, hints }
}

function sorting(question, items, correctOrder, explanation, hints = []) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}

function withExamPrefix(exercise, exam) {
  if (!exam) return exercise
  if (exercise.question && !exercise.question.includes('[PRÜFUNG]')) {
    return { ...exercise, question: `[PRÜFUNG] ${exercise.question}` }
  }
  if (exercise.statement && !exercise.statement.includes('[PRÜFUNG]')) {
    return { ...exercise, statement: `[PRÜFUNG] ${exercise.statement}` }
  }
  return exercise
}

function bank(profile) {
  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptVisualization, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints, profile.calcVisualization),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, undefined, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}


// ── Numerik ── Supplements Shell
// Workflow: profiles-Objekt unkommentieren → alle Felder ausfüllen
// bank(profile) erzeugt 7 Aufgaben (mc/ni/tf/matching/sorting/mc/ni)
// Muster: src/content/supplements/thermodynamik.js

//
// const profiles = {
//   'num-1-1': {
//     explanation: 'TODO',
//     conceptQuestion: 'TODO', conceptOptions: ['a', 'b', 'c', 'd'], conceptCorrect: 0,
//     conceptExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     conceptHints: ['TODO', 'TODO', 'TODO'],
//     conceptWrongAnswers: { 1: 'TODO', 2: 'TODO', 3: 'TODO' },
//     calcQuestion: 'TODO', calcAnswer: 0, calcTolerance: 0, calcUnit: '',
//     calcExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     calcHints: ['TODO', 'TODO', 'TODO'],
//     trueFalseStatement: 'TODO', trueFalseCorrect: true,
//     trueFalseExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     trueFalseHints: ['TODO', 'TODO', 'TODO'],
//     matchingQuestion: 'TODO',
//     matchingPairs: [{ left: 'TODO', right: 'TODO' }, { left: 'TODO', right: 'TODO' }],
//     matchingExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     matchingHints: ['TODO', 'TODO', 'TODO'],
//     sortingQuestion: 'TODO', sortingItems: ['TODO', 'TODO', 'TODO'], sortingOrder: [0, 1, 2],
//     sortingExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     sortingHints: ['TODO', 'TODO', 'TODO'],
//     errorQuestion: 'TODO', errorOptions: ['a', 'b', 'c', 'd'], errorCorrect: 0,
//     errorExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     errorHints: ['TODO', 'TODO', 'TODO'],
//     errorWrongAnswers: { 1: 'TODO', 2: 'TODO', 3: 'TODO' },
//     transferQuestion: 'TODO', transferAnswer: 0, transferTolerance: 0, transferUnit: '',
//     transferExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     transferHints: ['TODO', 'TODO', 'TODO'],
//   },
//   'num-1-2': {
//     explanation: 'TODO',
//     conceptQuestion: 'TODO', conceptOptions: ['a', 'b', 'c', 'd'], conceptCorrect: 0,
//     conceptExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     conceptHints: ['TODO', 'TODO', 'TODO'],
//     conceptWrongAnswers: { 1: 'TODO', 2: 'TODO', 3: 'TODO' },
//     calcQuestion: 'TODO', calcAnswer: 0, calcTolerance: 0, calcUnit: '',
//     calcExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     calcHints: ['TODO', 'TODO', 'TODO'],
//     trueFalseStatement: 'TODO', trueFalseCorrect: true,
//     trueFalseExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     trueFalseHints: ['TODO', 'TODO', 'TODO'],
//     matchingQuestion: 'TODO',
//     matchingPairs: [{ left: 'TODO', right: 'TODO' }, { left: 'TODO', right: 'TODO' }],
//     matchingExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     matchingHints: ['TODO', 'TODO', 'TODO'],
//     sortingQuestion: 'TODO', sortingItems: ['TODO', 'TODO', 'TODO'], sortingOrder: [0, 1, 2],
//     sortingExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     sortingHints: ['TODO', 'TODO', 'TODO'],
//     errorQuestion: 'TODO', errorOptions: ['a', 'b', 'c', 'd'], errorCorrect: 0,
//     errorExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     errorHints: ['TODO', 'TODO', 'TODO'],
//     errorWrongAnswers: { 1: 'TODO', 2: 'TODO', 3: 'TODO' },
//     transferQuestion: 'TODO', transferAnswer: 0, transferTolerance: 0, transferUnit: '',
//     transferExplanation: '**Ansatz:** TODO  **Rechnung:** TODO  **Probe:** TODO  **Typischer Fehler:** TODO',
//     transferHints: ['TODO', 'TODO', 'TODO'],
//   },
// }

// export const numerikSupplements = Object.fromEntries(
//   Object.entries(profiles).map(([id, p]) => [id, { explanation: p.explanation, exercises: bank(p) }])
// )

export const numerikSupplements = {}
