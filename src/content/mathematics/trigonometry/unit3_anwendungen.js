// ── Unit 3: Anwendungen und Identitäten ──────────────────────────────────────

export const exercises_u3 = {
  'ex-trig-3-1-a': {
    id: 'ex-trig-3-1-a', lessonId: 'trig-3-1', type: 'multiple-choice',
    question: 'sin(α + β) =',
    options: ['sin(α) + sin(β)', 'sin(α)·cos(β) + cos(α)·sin(β)', 'sin(α)·sin(β) + cos(α)·cos(β)', 'cos(α)·cos(β) - sin(α)·sin(β)'],
    correctIndex: 1,
    explanation: 'Das Additionstheorem: sin(α + β) = sin(α)·cos(β) + cos(α)·sin(β).',
    hints: ['SOH mit Kreuzprodukten: sin·cos + cos·sin'],
  },
  'ex-trig-3-1-b': {
    id: 'ex-trig-3-1-b', lessonId: 'trig-3-1', type: 'multiple-choice',
    question: 'cos(α + β) =',
    options: ['cos(α)·cos(β) - sin(α)·sin(β)', 'cos(α)·cos(β) + sin(α)·sin(β)', 'cos(α) + cos(β)', 'sin(α)·cos(β) + cos(α)·sin(β)'],
    correctIndex: 0,
    explanation: 'cos(α + β) = cos(α)·cos(β) - sin(α)·sin(β). Merke: Das Minus-Zeichen!',
    hints: ['CAH: cos·cos - sin·sin'],
  },
  'ex-trig-3-1-mastery': {
    id: 'ex-trig-3-1-mastery', lessonId: 'trig-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Berechne sin(75°) = sin(45° + 30°):',
    options: ['(√6 + √2)/4', '(√6 - √2)/4', '√3/2', '(√2 + 1)/2'],
    correctIndex: 0,
    explanation: 'sin(75°) = sin(45°)·cos(30°) + cos(45°)·sin(30°) = (√2/2·√3/2) + (√2/2·1/2) = √6/4 + √2/4 = (√6+√2)/4.',
    hints: ['Wende sin(α+β) = sin(α)cos(β) + cos(α)sin(β) an.', 'sin(45°) = cos(45°) = √2/2, sin(30°) = 1/2, cos(30°) = √3/2'],
  },

  'ex-trig-3-2-a': {
    id: 'ex-trig-3-2-a', lessonId: 'trig-3-2', type: 'multiple-choice',
    question: 'sin(2α) =',
    options: ['2·sin(α)', 'sin²(α) + cos²(α)', '2·sin(α)·cos(α)', 'sin(α)·cos(α)'],
    correctIndex: 2,
    explanation: 'sin(2α) = sin(α + α) = sin(α)·cos(α) + cos(α)·sin(α) = 2·sin(α)·cos(α).',
    hints: ['Setze β = α in das Additionstheorem ein.'],
  },
  'ex-trig-3-2-b': {
    id: 'ex-trig-3-2-b', lessonId: 'trig-3-2', type: 'multiple-choice',
    question: 'cos(2α) =',
    options: ['2·cos(α)', 'cos²(α) - sin²(α)', '2·cos²(α)', '1 - sin²(α)'],
    correctIndex: 1,
    explanation: 'cos(2α) = cos²(α) - sin²(α). Alternativen: = 2cos²(α) - 1 = 1 - 2sin²(α).',
    hints: ['Additionstheorem mit α = β: cos(α)·cos(α) - sin(α)·sin(α)'],
  },
  'ex-trig-3-2-mastery': {
    id: 'ex-trig-3-2-mastery', lessonId: 'trig-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Vereinfache: sin²(α) + cos²(α)',
    options: ['2', '0', '1', 'sin(2α)'],
    correctIndex: 2,
    explanation: 'sin²(α) + cos²(α) = 1. Das ist der **Pythagoreische Satz** in trigonometrischer Form — gilt für alle α.',
    hints: ['Am Einheitskreis: P = (cos α, sin α) liegt auf dem Kreis mit Radius 1. Kreisgleichung: x² + y² = 1.'],
  },

  'ex-trig-3-3-a': {
    id: 'ex-trig-3-3-a', lessonId: 'trig-3-3', type: 'multiple-choice',
    question: 'Eine Schwingung x(t) = A·sin(ωt + φ). Was beschreibt A?',
    options: ['Die Frequenz', 'Die Amplitude (maximale Auslenkung)', 'Die Phasenverschiebung', 'Die Kreisfrequenz'],
    correctIndex: 1,
    explanation: 'A ist die Amplitude — die maximale Auslenkung. |sin| ≤ 1, also ist A·sin ≤ A.',
    hints: ['sin schwankt zwischen -1 und +1. A skaliert diese Schwankung.'],
  },
  'ex-trig-3-3-b': {
    id: 'ex-trig-3-3-b', lessonId: 'trig-3-3', type: 'multiple-choice',
    question: 'Eine Kraft F = 100N wirkt unter Winkel 30° zur Horizontalen. Welche horizontale Komponente Fx hat sie?',
    options: ['50 N', '86,6 N', '100 N', '57,7 N'],
    correctIndex: 1,
    explanation: 'Fx = F·cos(30°) = 100·(√3/2) ≈ 86,6 N. Die horizontale Komponente nutzt den Kosinus.',
    hints: ['Fx = F·cos(α). cos(30°) = √3/2 ≈ 0,866'],
  },
  'ex-trig-3-3-mastery': {
    id: 'ex-trig-3-3-mastery', lessonId: 'trig-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Welche vertikale Komponente Fy hat eine Kraft F = 200N unter 60° zur Horizontalen?',
    options: ['100 N', '141 N', '173 N', '200 N'],
    correctIndex: 2,
    explanation: 'Fy = F·sin(60°) = 200·(√3/2) = 100√3 ≈ 173 N.',
    hints: ['Fy = F·sin(α). sin(60°) = √3/2 ≈ 0,866'],
  },

  'ex-trig-3-4-a': {
    id: 'ex-trig-3-4-a', lessonId: 'trig-3-4', type: 'multiple-choice',
    question: 'arcsin(1/2) =',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 0,
    explanation: 'arcsin(1/2) = 30°, weil sin(30°) = 1/2. arcsin ist die Umkehrfunktion von sin.',
    hints: ['arcsin(x) gibt den Winkel α, für den sin(α) = x gilt.'],
  },
  'ex-trig-3-4-b': {
    id: 'ex-trig-3-4-b', lessonId: 'trig-3-4', type: 'multiple-choice',
    question: 'Der Definitionsbereich von arcsin ist:',
    options: ['[0°, 360°]', '[0°, 180°]', '[-90°, 90°]', '[-180°, 180°]'],
    correctIndex: 2,
    explanation: 'arcsin gibt Werte in [-90°, 90°] zurück. So ist es eindeutig (bijektiv).',
    hints: ['arcsin ist nur auf dem Hauptast von sin definiert.'],
  },
  'ex-trig-3-4-mastery': {
    id: 'ex-trig-3-4-mastery', lessonId: 'trig-3-4', type: 'multiple-choice', isMasteryCheck: true,
    question: 'arccos(0) =',
    options: ['0°', '45°', '90°', '180°'],
    correctIndex: 2,
    explanation: 'arccos(0) = 90°, weil cos(90°) = 0.',
    hints: ['arccos(x) gibt den Winkel α ∈ [0°, 180°] mit cos(α) = x.'],
  },
}

const lessons_u3 = [
  {
    id: 'trig-3-1', unitId: 'trig-unit-3',
    title: 'Additionstheoreme',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Additionstheoreme für sin und cos kennen', 'Anwenden bei konkreten Winkeln'],
    prerequisites: ['trig-2-5'],
    nextLessonId: 'trig-3-2',
    steps: [
      {
        id: 'trig-3-1-s1', type: 'explanation-intuitive', title: 'Warum reichen Grundwerte nicht?',
        content: `Wir kennen sin und cos für 0°, 30°, 45°, 60°, 90°. Aber was ist sin(75°)? Oder cos(15°)?

Die **Additionstheoreme** erlauben uns, sin und cos von Summen (und Differenzen) von Winkeln zu berechnen. So können wir z.B. sin(75°) = sin(45° + 30°) aus bekannten Werten berechnen.`,
      },
      {
        id: 'trig-3-1-s2', type: 'explanation-formal', title: 'Die Formeln',
        content: `$$\\sin(\\alpha \\pm \\beta) = \\sin(\\alpha)\\cos(\\beta) \\pm \\cos(\\alpha)\\sin(\\beta)$$

$$\\cos(\\alpha \\pm \\beta) = \\cos(\\alpha)\\cos(\\beta) \\mp \\sin(\\alpha)\\sin(\\beta)$$

**Merkhilfe für cos:** Das Vorzeichen ist "umgekehrt" — bei + im Winkel steht − im Term.`,
      },
      { id: 'trig-3-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-3-1-a' },
      { id: 'trig-3-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-3-1-b' },
      { id: 'trig-3-1-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-3-1-mastery' },
    ],
  },
  {
    id: 'trig-3-2', unitId: 'trig-unit-3',
    title: 'Doppelwinkelformeln und Pythagoreischer Satz',
    order: 2, estimatedMinutes: 12,
    learningGoals: ['Doppelwinkelformeln anwenden', 'sin²+cos²=1 verstehen und nutzen'],
    prerequisites: ['trig-3-1'],
    nextLessonId: 'trig-3-3',
    steps: [
      {
        id: 'trig-3-2-s1', type: 'explanation-formal', title: 'Doppelwinkel',
        content: `Spezialfall der Additionstheoreme mit α = β:

$$\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$$

$$\\cos(2\\alpha) = \\cos^2(\\alpha) - \\sin^2(\\alpha) = 2\\cos^2(\\alpha) - 1 = 1 - 2\\sin^2(\\alpha)$$

**Pythagoreische Identität** (aus dem Einheitskreis: x² + y² = 1):

$$\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$$

Diese Formel ist extrem nützlich zum Vereinfachen und Umformen!`,
      },
      { id: 'trig-3-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-3-2-a' },
      { id: 'trig-3-2-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-3-2-b' },
      { id: 'trig-3-2-s4', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-3-2-mastery' },
    ],
  },
  {
    id: 'trig-3-3', unitId: 'trig-unit-3',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Kräfte in Komponenten zerlegen', 'Schwingungen verstehen'],
    prerequisites: ['trig-2-5'],
    nextLessonId: 'trig-3-4',
    steps: [
      {
        id: 'trig-3-3-s1', type: 'explanation-intuitive', title: 'Wozu braucht man das im Maschinenbau?',
        content: `Trigonometrie ist das Handwerkszeug jedes Ingenieurs. Zwei wichtige Anwendungen:

**1. Kräftezerlegung:** Jede Kraft kann in eine horizontale und vertikale Komponente zerlegt werden:
$$F_x = F \\cdot \\cos(\\alpha), \\quad F_y = F \\cdot \\sin(\\alpha)$$

**2. Schwingungen:** Mechanische und elektrische Schwingungen werden durch Sinusfunktionen beschrieben:
$$x(t) = A \\cdot \\sin(\\omega t + \\varphi)$$

mit Amplitude A, Kreisfrequenz ω und Phasenwinkel φ.`,
      },
      { id: 'trig-3-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-3-3-a' },
      { id: 'trig-3-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-3-3-b' },
      { id: 'trig-3-3-s4', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-3-3-mastery' },
    ],
  },
  {
    id: 'trig-3-4', unitId: 'trig-unit-3',
    title: 'Inverse Funktionen',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['arcsin, arccos, arctan kennen und anwenden', 'Definitionsbereiche verstehen'],
    prerequisites: ['trig-2-5'],
    nextLessonId: null,
    steps: [
      {
        id: 'trig-3-4-s1', type: 'explanation-intuitive', title: 'Die Umkehrfunktionen',
        content: `Manchmal kennt man den Sinuswert und sucht den Winkel. Dafür gibt es die **inversen Funktionen**:

- **arcsin(x):** Gibt den Winkel α, für den sin(α) = x gilt. Wertebereich: [−90°, 90°]
- **arccos(x):** Gibt den Winkel α, für den cos(α) = x gilt. Wertebereich: [0°, 180°]
- **arctan(x):** Gibt den Winkel α, für den tan(α) = x gilt. Wertebereich: (−90°, 90°)

**Wichtig:** Diese Funktionen geben nur einen Winkel zurück — den Hauptwert. Im allgemeinen gibt es unendlich viele Lösungen (wegen Periodizität)!`,
      },
      { id: 'trig-3-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-3-4-a' },
      { id: 'trig-3-4-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-3-4-b' },
      { id: 'trig-3-4-s4', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-3-4-mastery' },
    ],
  },
]

export const unit3 = {
  id: 'trig-unit-3',
  title: 'Anwendungen und Identitäten',
  order: 3,
  description: 'Additionstheoreme, Doppelwinkel, technische Anwendungen und Umkehrfunktionen',
  lessons: lessons_u3,
  exercises: exercises_u3,
}
