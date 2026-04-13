// ── Unit 2: Einheitskreis und Winkelfunktionen ────────────────────────────────

export const exercises_u2 = {
  'ex-trig-2-1-a': {
    id: 'ex-trig-2-1-a', lessonId: 'trig-2-1', type: 'multiple-choice',
    question: 'Was ist der Radius des Einheitskreises?',
    options: ['π', '2', '1', '360'],
    correctIndex: 2,
    explanation: 'Der Einheitskreis hat per Definition den Radius 1. Daher der Name "Einheits"-Kreis.',
    hints: ['"Einheit" bedeutet in der Mathematik "1".'],
  },
  'ex-trig-2-1-b': {
    id: 'ex-trig-2-1-b', lessonId: 'trig-2-1', type: 'multiple-choice',
    question: 'Ein Punkt P liegt auf dem Einheitskreis beim Winkel α = 0°. Seine Koordinaten sind:',
    options: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'],
    correctIndex: 2,
    explanation: 'Bei α = 0° liegt der Punkt ganz rechts auf dem Kreis: x = cos(0°) = 1, y = sin(0°) = 0 → P = (1, 0).',
    hints: ['P = (cos(α), sin(α)). Was ist cos(0°) und sin(0°)?'],
  },
  'ex-trig-2-1-mastery': {
    id: 'ex-trig-2-1-mastery', lessonId: 'trig-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Welche Koordinaten hat der Punkt auf dem Einheitskreis bei α = 90°?',
    options: ['(1, 0)', '(0, 1)', '(-1, 0)', '(0, -1)'],
    correctIndex: 1,
    explanation: 'Bei 90°: x = cos(90°) = 0, y = sin(90°) = 1 → P = (0, 1). Das ist der höchste Punkt des Kreises.',
    hints: ['P = (cos(90°), sin(90°))'],
  },

  'ex-trig-2-2-a': {
    id: 'ex-trig-2-2-a', lessonId: 'trig-2-2', type: 'multiple-choice',
    question: 'cos(α) entspricht am Einheitskreis:',
    options: ['der y-Koordinate', 'der x-Koordinate', 'dem Radius', 'dem Winkel'],
    correctIndex: 1,
    explanation: 'Am Einheitskreis: P = (cos(α), sin(α)). cos = x-Koordinate, sin = y-Koordinate.',
    hints: ['Der Punkt auf dem Einheitskreis hat die Koordinaten (cos(α), sin(α)).'],
  },
  'ex-trig-2-2-b': {
    id: 'ex-trig-2-2-b', lessonId: 'trig-2-2', type: 'multiple-choice',
    question: 'Welcher Punkt liegt bei α = 180°?',
    options: ['(1, 0)', '(0, 1)', '(-1, 0)', '(0, -1)'],
    correctIndex: 2,
    explanation: 'cos(180°) = -1, sin(180°) = 0 → P = (-1, 0). Das ist der linkeste Punkt des Kreises.',
    hints: ['Bei 180° zeigt die Drehung genau nach links.'],
  },
  'ex-trig-2-2-mastery': {
    id: 'ex-trig-2-2-mastery', lessonId: 'trig-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Ein Punkt hat die Koordinaten (-√2/2, √2/2). Welchem Winkel entspricht das?',
    options: ['45°', '135°', '225°', '315°'],
    correctIndex: 1,
    explanation: 'x = -√2/2 = cos(135°), y = √2/2 = sin(135°). Im 2. Quadranten: α = 135°.',
    hints: ['|x| = |y| → der Winkel ist ein Vielfaches von 45°.', 'x negativ, y positiv → 2. Quadrant.'],
  },

  'ex-trig-2-3-a': {
    id: 'ex-trig-2-3-a', lessonId: 'trig-2-3', type: 'multiple-choice',
    question: 'sin(α + 360°) =',
    options: ['sin(α) + 1', '-sin(α)', 'sin(α)', '0'],
    correctIndex: 2,
    explanation: 'Der Sinus ist periodisch mit Periode 360°: sin(α + 360°) = sin(α).',
    hints: ['Eine volle Umdrehung (360°) bringt den Punkt an dieselbe Stelle.'],
  },
  'ex-trig-2-3-b': {
    id: 'ex-trig-2-3-b', lessonId: 'trig-2-3', type: 'multiple-choice',
    question: 'sin(-α) =',
    options: ['sin(α)', '-sin(α)', 'cos(α)', '-cos(α)'],
    correctIndex: 1,
    explanation: 'Sinus ist eine ungerade Funktion: sin(-α) = -sin(α). Der Punkt wird an der x-Achse gespiegelt.',
    hints: ['Negative Winkel = Drehung im Uhrzeigersinn. Der Punkt hat dieselbe x-, aber entgegengesetzte y-Koordinate.'],
  },
  'ex-trig-2-3-mastery': {
    id: 'ex-trig-2-3-mastery', lessonId: 'trig-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: 'cos(-α) =',
    options: ['-cos(α)', 'cos(α)', 'sin(α)', '-sin(α)'],
    correctIndex: 1,
    explanation: 'Kosinus ist eine gerade Funktion: cos(-α) = cos(α). Die x-Koordinate ändert sich bei Spiegelung an der x-Achse nicht.',
    hints: ['Spiegelung an der x-Achse: x-Koordinate bleibt gleich → cos unverändert.'],
  },

  'ex-trig-2-4-a': {
    id: 'ex-trig-2-4-a', lessonId: 'trig-2-4', type: 'multiple-choice',
    question: 'Was beschreibt tan(α) geometrisch am Einheitskreis?',
    options: ['Den Radius', 'Die x-Koordinate', 'Das Verhältnis y/x (= sin/cos)', 'Den Bogenlänge'],
    correctIndex: 2,
    explanation: 'tan(α) = sin(α)/cos(α) = y/x am Einheitskreis. Geometrisch ist es die Steigung der Geraden durch den Ursprung zum Punkt P.',
    hints: ['tan = sin/cos = Gegenkathete/Ankathete = y/x'],
  },
  'ex-trig-2-4-b': {
    id: 'ex-trig-2-4-b', lessonId: 'trig-2-4', type: 'multiple-choice',
    question: 'Warum ist tan(90°) nicht definiert?',
    options: ['Weil sin(90°) = 0', 'Weil cos(90°) = 0 (Division durch 0)', 'Weil 90° zu groß ist', 'Weil tan nur bis 45° gilt'],
    correctIndex: 1,
    explanation: 'tan(α) = sin(α)/cos(α). Bei 90°: cos(90°) = 0. Division durch 0 ist undefiniert.',
    hints: ['tan = sin/cos. Was ist der Nenner bei 90°?'],
  },
  'ex-trig-2-4-mastery': {
    id: 'ex-trig-2-4-mastery', lessonId: 'trig-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: 'tan(α) ist positiv, wenn:',
    options: ['sin und cos beide positiv (1. Quadrant) oder beide negativ (3. Quadrant)', 'Nur im 1. Quadrant', 'sin positiv und cos negativ', 'Immer'],
    correctIndex: 0,
    explanation: 'tan = sin/cos. Positiv wenn beide gleiche Vorzeichen haben: 1. Quadrant (+/+) oder 3. Quadrant (-/-).',
    hints: ['Vorzeichen: positiv/positiv = positiv, negativ/negativ = positiv'],
  },

  'ex-trig-2-5-a': {
    id: 'ex-trig-2-5-a', lessonId: 'trig-2-5', type: 'multiple-choice',
    question: 'In welchem Quadranten liegt α = 200°?',
    options: ['1. Quadrant', '2. Quadrant', '3. Quadrant', '4. Quadrant'],
    correctIndex: 2,
    explanation: '200° liegt zwischen 180° und 270° → 3. Quadrant.',
    hints: ['1. Q: 0°–90°, 2. Q: 90°–180°, 3. Q: 180°–270°, 4. Q: 270°–360°'],
  },
  'ex-trig-2-5-b': {
    id: 'ex-trig-2-5-b', lessonId: 'trig-2-5', type: 'multiple-choice',
    question: 'sin(210°) =',
    options: ['1/2', '√3/2', '-1/2', '-√3/2'],
    correctIndex: 2,
    explanation: '210° = 180° + 30°. Im 3. Quadrant: sin ist negativ. sin(210°) = -sin(30°) = -1/2.',
    hints: ['210° = 180° + 30°. Welches Vorzeichen hat sin im 3. Quadrant?'],
  },
  'ex-trig-2-5-mastery': {
    id: 'ex-trig-2-5-mastery', lessonId: 'trig-2-5', type: 'multiple-choice', isMasteryCheck: true,
    question: 'cos(315°) =',
    options: ['-√2/2', '√2/2', '-1/2', '1/2'],
    correctIndex: 1,
    explanation: '315° = 360° - 45°. Im 4. Quadrant: cos positiv. cos(315°) = cos(45°) = √2/2.',
    hints: ['315° = 360° - 45° → 4. Quadrant. cos ist dort positiv.'],
  },
}

const lessons_u2 = [
  {
    id: 'trig-2-1', unitId: 'trig-unit-2',
    title: 'Der Einheitskreis',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Den Einheitskreis als Grundlage verstehen', 'Punkte auf dem Einheitskreis einordnen'],
    prerequisites: ['trig-1-3'],
    nextLessonId: 'trig-2-2',
    steps: [
      {
        id: 'trig-2-1-s1', type: 'explanation-intuitive', title: 'Warum der Einheitskreis?',
        content: `Das rechtwinklige Dreieck erklärt sin und cos nur für 0°–90°. Um alle Winkel zu erfassen, brauchen wir eine bessere Definition.

Die Lösung: Der **Einheitskreis** — ein Kreis mit **Radius = 1** im Koordinatensystem. Wir platzieren einen Punkt P auf diesem Kreis und messen den Winkel α von der positiven x-Achse im Gegenuhrzeigersinn.

Die Koordinaten von P sind dann genau **(cos(α), sin(α))** — das ist die allgemeine Definition.`,
      },
      {
        id: 'trig-2-1-s2', type: 'visualization', title: 'Interaktiver Einheitskreis',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 45, showTangent: false },
      },
      { id: 'trig-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-2-1-a' },
      { id: 'trig-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-2-1-b' },
      { id: 'trig-2-1-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-2-1-mastery' },
    ],
  },
  {
    id: 'trig-2-2', unitId: 'trig-unit-2',
    title: 'sin und cos als Koordinaten',
    order: 2, estimatedMinutes: 10,
    learningGoals: ['sin und cos als x/y-Koordinaten am Einheitskreis verstehen'],
    prerequisites: ['trig-2-1'],
    nextLessonId: 'trig-2-3',
    steps: [
      {
        id: 'trig-2-2-s1', type: 'explanation-formal', title: 'Die Definition',
        content: `Für einen Punkt P auf dem Einheitskreis beim Winkel α gilt:

$$P = (\\cos(\\alpha),\\; \\sin(\\alpha))$$

Das bedeutet:
- **cos(α) = x-Koordinate** von P
- **sin(α) = y-Koordinate** von P

Diese Definition gilt für **alle reellen Winkel** — nicht nur 0°–90°.`,
      },
      {
        id: 'trig-2-2-s2', type: 'visualization', title: 'Koordinaten ablesen',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 60, showTangent: false },
      },
      { id: 'trig-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-2-2-a' },
      { id: 'trig-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-2-2-b' },
      { id: 'trig-2-2-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-2-2-mastery' },
    ],
  },
  {
    id: 'trig-2-3', unitId: 'trig-unit-2',
    title: 'Symmetrien und Periodizität',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Periodizität von sin und cos verstehen', 'Symmetrieeigenschaften anwenden'],
    prerequisites: ['trig-2-2'],
    nextLessonId: 'trig-2-4',
    steps: [
      {
        id: 'trig-2-3-s1', type: 'explanation-intuitive', title: 'Immer im Kreis',
        content: `Dreht sich der Punkt auf dem Einheitskreis einmal komplett herum (360° bzw. 2π), ist er wieder an derselben Stelle. Daher sind sin und cos **periodisch** mit Periode 360°:

$$\\sin(\\alpha + 360°) = \\sin(\\alpha)$$
$$\\cos(\\alpha + 360°) = \\cos(\\alpha)$$

Außerdem hat der Einheitskreis **Spiegelsymmetrien**, die nützliche Formeln ergeben.`,
      },
      {
        id: 'trig-2-3-s2', type: 'explanation-formal', title: 'Symmetrieformeln',
        content: `**Spiegelung an der x-Achse** (negativer Winkel):
$$\\sin(-\\alpha) = -\\sin(\\alpha) \\quad \\text{(ungerade Funktion)}$$
$$\\cos(-\\alpha) = \\cos(\\alpha) \\quad \\text{(gerade Funktion)}$$

**Spiegelung an der y-Achse** (Supplement):
$$\\sin(180° - \\alpha) = \\sin(\\alpha)$$
$$\\cos(180° - \\alpha) = -\\cos(\\alpha)$$`,
      },
      { id: 'trig-2-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-2-3-a' },
      { id: 'trig-2-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-2-3-b' },
      { id: 'trig-2-3-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-2-3-mastery' },
    ],
  },
  {
    id: 'trig-2-4', unitId: 'trig-unit-2',
    title: 'Tangens im Einheitskreis',
    order: 4, estimatedMinutes: 10,
    learningGoals: ['Tangens als sin/cos verstehen', 'Polstellen von tan erkennen'],
    prerequisites: ['trig-2-2'],
    nextLessonId: 'trig-2-5',
    steps: [
      {
        id: 'trig-2-4-s1', type: 'explanation-formal', title: 'tan als Quotient',
        content: `$$\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\frac{y}{x}$$

Geometrisch: tan(α) ist die **Steigung** der Geraden vom Ursprung zum Punkt P(cos α, sin α).

**Wichtig:** tan ist **nicht definiert** wenn cos(α) = 0, also bei α = 90°, 270°, ... Dort gibt es senkrechte Asymptoten.

**Periode:** Der Tangens hat Periode 180° (nicht 360°!), weil die Steigung nach einer halben Drehung wieder dieselbe ist.`,
      },
      { id: 'trig-2-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-2-4-a' },
      { id: 'trig-2-4-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-2-4-b' },
      { id: 'trig-2-4-s4', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-2-4-mastery' },
    ],
  },
  {
    id: 'trig-2-5', unitId: 'trig-unit-2',
    title: 'Alle vier Quadranten',
    order: 5, estimatedMinutes: 15,
    learningGoals: ['Winkel in allen Quadranten berechnen', 'Reduktionsformeln anwenden'],
    prerequisites: ['trig-2-3', 'trig-2-4'],
    nextLessonId: 'trig-3-1',
    steps: [
      {
        id: 'trig-2-5-s1', type: 'explanation-formal', title: 'Reduktionsformeln',
        content: `Für Winkel außerhalb des 1. Quadranten: Immer auf Winkel im 1. Quadrant (Referenzwinkel) zurückführen + Vorzeichen aus ASTC.

**Zusammenfassung:**

| Quadrant | Winkelbereich | sin | cos | tan |
|----------|---------------|-----|-----|-----|
| 1.       | 0°–90°        | +   | +   | +   |
| 2.       | 90°–180°      | +   | −   | −   |
| 3.       | 180°–270°     | −   | −   | +   |
| 4.       | 270°–360°     | −   | +   | −   |

**Vorgehen:** 1. Quadrant bestimmen 2. Referenzwinkel = Abstand zur nächsten Achse 3. Vorzeichen aus Tabelle`,
      },
      {
        id: 'trig-2-5-s2', type: 'visualization', title: 'Alle Quadranten erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 210, showTangent: true },
      },
      { id: 'trig-2-5-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-2-5-a' },
      { id: 'trig-2-5-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-2-5-b' },
      { id: 'trig-2-5-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-2-5-mastery' },
    ],
  },
]

export const unit2 = {
  id: 'trig-unit-2',
  title: 'Einheitskreis und Winkelfunktionen',
  order: 2,
  description: 'Der Einheitskreis als universelle Definition von sin, cos und tan',
  lessons: lessons_u2,
  exercises: exercises_u2,
}
