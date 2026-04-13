// ── Unit 4: Prüfungsaufgaben Trigonometrie ────────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_u4 = {

  // ── Lektion 4-1: Prüfung Grundlagen ──────────────────────────────────────
  'ex-trig-4-1-a': {
    id: 'ex-trig-4-1-a', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: sin²(α) · (1 + cot²(α))',
    options: ['sin²(α)', 'cos²(α)', '1', 'tan²(α)'],
    correctIndex: 2,
    explanation: 'cot²(α) = cos²(α)/sin²(α). Also: sin²(α)·(1 + cos²(α)/sin²(α)) = sin²(α) + cos²(α) = 1.',
    hints: ['cot(α) = cos(α)/sin(α)', 'Nutze den Pythagoreischen Satz: sin² + cos² = 1'],
  },
  'ex-trig-4-1-b': {
    id: 'ex-trig-4-1-b', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Für welchen Winkel α ∈ [0°, 360°) gilt: 2·sin(α)·cos(α) = 1?',
    options: ['α = 30° und α = 150°', 'α = 45° und α = 225°', 'α = 60° und α = 300°', 'α = 45° und α = 135°'],
    correctIndex: 1,
    explanation: '2·sin(α)·cos(α) = sin(2α) = 1 → 2α = 90° → α = 45°. Zweite Lösung: 2α = 90° + 360° → α = 225°.',
    hints: ['Erkenne: 2·sin·cos = sin(2α)', 'sin(2α) = 1 → 2α = 90° + k·360°'],
  },
  'ex-trig-4-1-c': {
    id: 'ex-trig-4-1-c', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Gleichung ist KEINE trigonometrische Identität?',
    options: [
      'sin(2α) = 2·sin(α)·cos(α)',
      'cos(2α) = 1 - 2·sin²(α)',
      'tan(α) = sin(α)/cos(α)',
      'sin(α + β) = sin(α) + sin(β)',
    ],
    correctIndex: 3,
    explanation: 'sin(α + β) = sin(α)·cos(β) + cos(α)·sin(β) ≠ sin(α) + sin(β). Die anderen drei sind korrekte Identitäten.',
    hints: ['Prüfe das Additionstheorem für sin.', 'Beispiel: sin(60° + 30°) = sin(90°) = 1, aber sin(60°) + sin(30°) = √3/2 + 1/2 ≈ 1.37 ≠ 1'],
  },
  'ex-trig-4-1-d': {
    id: 'ex-trig-4-1-d', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: cos(α)·cos(β) + sin(α)·sin(β) für α = 75°, β = 30°.',
    options: ['1/2', '√2/2', '√3/2', '0'],
    correctIndex: 1,
    explanation: 'Dies ist cos(α - β) = cos(75° - 30°) = cos(45°) = √2/2.',
    hints: ['Erkenne das Muster: cos(α)cos(β) + sin(α)sin(β) = cos(α - β)', 'cos(75° - 30°) = cos(45°)'],
  },
  'ex-trig-4-1-mastery': {
    id: 'ex-trig-4-1-mastery', lessonId: 'trig-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: sin(α) = cos(α) für α ∈ [0°, 360°)',
    options: ['α = 45°', 'α = 45° und α = 225°', 'α = 45° und α = 315°', 'keine Lösung'],
    correctIndex: 1,
    explanation: 'sin(α) = cos(α) → tan(α) = 1 → α = 45° + k·180°. Im Intervall [0°, 360°): α = 45° und α = 225°.',
    hints: ['Dividiere beide Seiten durch cos(α): tan(α) = 1', 'tan hat Periode 180°'],
  },

  // ── Lektion 4-2: Prüfung Anwendung ───────────────────────────────────────
  'ex-trig-4-2-a': {
    id: 'ex-trig-4-2-a', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Mast ist 20 m hoch. Der Schatten hat Länge 15 m. Welchen Winkel α bildet die Sonne mit dem Boden?',
    options: ['α = arctan(3/4) ≈ 36,9°', 'α = arctan(4/3) ≈ 53,1°', 'α = arcsin(3/4) ≈ 48,6°', 'α = arccos(3/4) ≈ 41,4°'],
    correctIndex: 1,
    explanation: 'tan(α) = Gegenkathete/Ankathete = Masthöhe/Schattenlänge = 20/15 = 4/3. Also α = arctan(4/3) ≈ 53,1°.',
    hints: ['Der Mast ist senkrecht (Gegenkathete), der Schatten horizontal (Ankathete).', 'tan(α) = G/A = 20/15'],
  },
  'ex-trig-4-2-b': {
    id: 'ex-trig-4-2-b', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft F = 500 N wirkt unter 37° zur Horizontalen. Welche Komponenten Fx und Fy hat sie (sin 37° ≈ 0,6; cos 37° ≈ 0,8)?',
    options: ['Fx = 400 N, Fy = 300 N', 'Fx = 300 N, Fy = 400 N', 'Fx = 500 N, Fy = 500 N', 'Fx = 350 N, Fy = 350 N'],
    correctIndex: 0,
    explanation: 'Fx = F·cos(37°) = 500·0,8 = 400 N; Fy = F·sin(37°) = 500·0,6 = 300 N. Das 3-4-5 Dreieck!',
    hints: ['Fx = F·cos(α), Fy = F·sin(α)', 'cos(37°) ≈ 0,8; sin(37°) ≈ 0,6 — merkenswerte Werte!'],
  },
  'ex-trig-4-2-c': {
    id: 'ex-trig-4-2-c', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Schwingung x(t) = 3·sin(2t + π/4) hat die Amplitude … und die Kreisfrequenz …',
    options: ['A = 3, ω = 2', 'A = 2, ω = 3', 'A = 3, ω = π/4', 'A = 3, ω = 2t'],
    correctIndex: 0,
    explanation: 'x(t) = A·sin(ωt + φ): Amplitude A = 3 (Vorfaktor), Kreisfrequenz ω = 2 (Koeffizient von t), Phasenwinkel φ = π/4.',
    hints: ['Form: x = A·sin(ωt + φ). Identifiziere A, ω, φ.'],
  },
  'ex-trig-4-2-d': {
    id: 'ex-trig-4-2-d', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Cosinus-Satz: In einem Dreieck gilt a² = b² + c² - 2bc·cos(α). Für α = 60°, b = c = 5: wie groß ist a?',
    options: ['a = 5', 'a = 5√2', 'a = 5√3', 'a = 10'],
    correctIndex: 0,
    explanation: 'a² = 25 + 25 - 2·25·cos(60°) = 50 - 50·(1/2) = 50 - 25 = 25 → a = 5. Gleichseitiges Dreieck!',
    hints: ['cos(60°) = 1/2', 'a² = b² + c² - 2bc·(1/2) = b² + c² - bc'],
  },
  'ex-trig-4-2-mastery': {
    id: 'ex-trig-4-2-mastery', lessonId: 'trig-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Periode einer Schwingung x(t) = A·sin(ωt) ist:',
    options: ['T = ω', 'T = 2π/ω', 'T = ω/(2π)', 'T = 1/ω'],
    correctIndex: 1,
    explanation: 'Nach einer Periode T muss der Sinus wieder denselben Wert annehmen: ω(t + T) = ωt + 2π → ωT = 2π → T = 2π/ω.',
    hints: ['sin ist periodisch mit 2π.', 'Nach welchem t gilt ωt = 2π?'],
  },

  // ── Lektion 4-3: Prüfungsaufgaben Einheitskreis & Gleichungen ─────────────
  'ex-trig-4-3-a': {
    id: 'ex-trig-4-3-a', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Wie viele Lösungen hat sin(x) = 0,5 im Intervall [0, 4π]?',
    options: ['1', '2', '4', '∞'],
    correctIndex: 2,
    explanation: 'sin(x) = 0,5 hat im Intervall [0, 2π] zwei Lösungen: x = π/6 und x = 5π/6. Im Intervall [2π, 4π] wiederholen sie sich: x = π/6 + 2π und 5π/6 + 2π. Gesamt: 4 Lösungen.',
    hints: ['Im Intervall [0, 2π]: 2 Lösungen für sin = 0,5.', '[0, 4π] = zwei Perioden → 4 Lösungen.'],
  },
  'ex-trig-4-3-b': {
    id: 'ex-trig-4-3-b', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welcher Wert hat sin(−210°)?',
    options: ['−√3/2', '√3/2', '1/2', '−1/2'],
    correctIndex: 2,
    explanation: 'sin(−210°) = −sin(210°) (ungerade Funktion). sin(210°) = sin(180°+30°) = −sin(30°) = −1/2. Also sin(−210°) = −(−1/2) = 1/2.',
    hints: ['sin ist ungerade: sin(−α) = −sin(α)', '210° = 180° + 30°, sin im 3. Quadrant negativ'],
  },
  'ex-trig-4-3-c': {
    id: 'ex-trig-4-3-c', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] arctan(−1) =',
    options: ['−45°', '135°', '225°', '315°'],
    correctIndex: 0,
    explanation: 'arctan gibt Werte in (−90°, 90°). tan(−45°) = −1, also arctan(−1) = −45°.',
    hints: ['arctan hat Wertebereich (−90°, 90°).', 'tan(45°) = 1, also tan(−45°) = −1'],
  },
  'ex-trig-4-3-d': {
    id: 'ex-trig-4-3-d', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: (sin(α) + cos(α))² − 1',
    options: ['sin²(α) + cos²(α)', '2·sin(α)·cos(α)', '2·sin(α)·cos(α) + 1', '0'],
    correctIndex: 1,
    explanation: '(sin + cos)² = sin² + 2·sin·cos + cos² = 1 + 2·sin·cos. Minus 1: = 2·sin(α)·cos(α) = sin(2α).',
    hints: ['Binomische Formel: (a+b)² = a² + 2ab + b²', 'sin² + cos² = 1'],
  },
  'ex-trig-4-3-mastery': {
    id: 'ex-trig-4-3-mastery', lessonId: 'trig-4-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] cos(75°) in exakter Form:',
    options: ['(√6 + √2)/4', '(√6 − √2)/4', '(√2 − √6)/4', '(√3 − 1)/2√2'],
    correctIndex: 1,
    explanation: 'cos(75°) = cos(45° + 30°) = cos45·cos30 − sin45·sin30 = (√2/2·√3/2) − (√2/2·1/2) = √6/4 − √2/4 = (√6−√2)/4.',
    hints: ['Additionstheorem: cos(α+β) = cos·cos − sin·sin', 'cos45 = sin45 = √2/2; cos30 = √3/2; sin30 = 1/2'],
  },
}

const lessons_u4 = [
  {
    id: 'trig-4-1', unitId: 'trig-unit-4',
    title: 'Prüfung: Identitäten & Gleichungen',
    order: 1, estimatedMinutes: 20,
    learningGoals: ['Trigonometrische Identitäten umformen', 'Gleichungen auf Prüfungsniveau lösen'],
    prerequisites: [],
    nextLessonId: 'trig-4-2',
    steps: [
      {
        id: 'trig-4-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie',
        content: `**Prüfungsaufgaben Trigonometrie** folgen meist einem dieser Muster:

1. **Identitäten umformen** — Nutze sin²+cos²=1, Additionstheoreme, Doppelwinkel
2. **Gleichungen lösen** — Finde alle Lösungen im gegebenen Intervall
3. **Anwendungen** — Kräfte, Schwingungen, Dreiecksberechnung

**Wichtigste Formeln für die Prüfung:**
- sin²(α) + cos²(α) = **1**
- sin(2α) = 2·sin(α)·cos(α)
- cos(2α) = cos²(α) − sin²(α)
- sin(α ± β) = sin·cos ± cos·sin
- cos(α ± β) = cos·cos ∓ sin·sin`,
      },
      { id: 'trig-4-1-s2', type: 'exercise', title: 'Aufgabe 1 (schwer)', exerciseRef: 'ex-trig-4-1-a' },
      { id: 'trig-4-1-s3', type: 'exercise', title: 'Aufgabe 2 (schwer)', exerciseRef: 'ex-trig-4-1-b' },
      { id: 'trig-4-1-s4', type: 'exercise', title: 'Aufgabe 3 (schwer)', exerciseRef: 'ex-trig-4-1-c' },
      { id: 'trig-4-1-s5', type: 'exercise', title: 'Aufgabe 4 (sehr schwer)', exerciseRef: 'ex-trig-4-1-d' },
      { id: 'trig-4-1-s6', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-trig-4-1-mastery' },
    ],
  },
  {
    id: 'trig-4-2', unitId: 'trig-unit-4',
    title: 'Prüfung: Technische Anwendungen',
    order: 2, estimatedMinutes: 20,
    learningGoals: ['Prüfungsaufgaben zu Kräften und Schwingungen lösen'],
    prerequisites: [],
    nextLessonId: 'trig-4-3',
    steps: [
      {
        id: 'trig-4-2-s1', type: 'explanation-intuitive', title: 'Technische Anwendungen in der Prüfung',
        content: `In technischen Prüfungen kommen Trigonometrie-Aufgaben fast immer in diesen Formen:

**Kräftezerlegung:**
$$F_x = F \\cdot \\cos(\\alpha), \\quad F_y = F \\cdot \\sin(\\alpha)$$

**Schwingungen:**
$$x(t) = A \\cdot \\sin(\\omega t + \\varphi), \\quad T = \\frac{2\\pi}{\\omega}, \\quad f = \\frac{1}{T}$$

**Cosinussatz** (allgemeine Dreiecke):
$$a^2 = b^2 + c^2 - 2bc \\cdot \\cos(\\alpha)$$

**Merke:** sin37° ≈ 0,6; cos37° ≈ 0,8; sin53° ≈ 0,8; cos53° ≈ 0,6 (3-4-5 Dreieck!)`,
      },
      {
        id: 'trig-4-2-s2', type: 'visualization', title: 'Kräftezerlegung',
        visualizationId: 'unit-circle',
        params: { showSine: true, showCosine: true, interactive: true, showLabels: true, initialAngle: 37 },
      },
      { id: 'trig-4-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-4-2-a' },
      { id: 'trig-4-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-4-2-b' },
      { id: 'trig-4-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-trig-4-2-c' },
      { id: 'trig-4-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-trig-4-2-d' },
      { id: 'trig-4-2-s7', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-trig-4-2-mastery' },
    ],
  },
  {
    id: 'trig-4-3', unitId: 'trig-unit-4',
    title: 'Prüfung: Einheitskreis & Gleichungssysteme',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Lösungsmengen bestimmen', 'Komplexe Umformungen durchführen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'trig-4-3-s1', type: 'explanation-formal', title: 'Gleichungen systematisch lösen',
        content: `**Vorgehen bei trig. Gleichungen in der Prüfung:**

1. **Vereinfache** mit Identitäten (sin²+cos²=1, Doppelwinkel, etc.)
2. **Bestimme den Grundwinkel** (arcsin/arccos/arctan)
3. **Finde alle Lösungen** im gegebenen Intervall unter Berücksichtigung der Periodizität und Quadranten

**Wichtig:** sin(x) = a hat im Intervall [0, 2π] genau **2 Lösungen** (für |a| < 1):
$$x_1 = \\arcsin(a), \\quad x_2 = \\pi - \\arcsin(a)$$

cos(x) = a:
$$x_1 = \\arccos(a), \\quad x_2 = 2\\pi - \\arccos(a)$$`,
      },
      {
        id: 'trig-4-3-s2', type: 'visualization', title: 'Lösungen am Einheitskreis ablesen',
        visualizationId: 'unit-circle',
        params: { showSine: true, showCosine: false, interactive: true, showQuadrants: true, showLabels: true, initialAngle: 30 },
      },
      { id: 'trig-4-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-4-3-a' },
      { id: 'trig-4-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-4-3-b' },
      { id: 'trig-4-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-trig-4-3-c' },
      { id: 'trig-4-3-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-trig-4-3-d' },
      { id: 'trig-4-3-s7', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-trig-4-3-mastery' },
    ],
  },
]

export const unit4 = {
  id: 'trig-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Identitäten, Anwendungen, Gleichungen',
  lessons: lessons_u4,
  exercises: exercises_u4,
}
