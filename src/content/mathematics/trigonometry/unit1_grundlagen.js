// ── Unit 1: Grundlagen der Trigonometrie ─────────────────────────────────────

export const exercises_u1 = {
  // Lektion 1-1: Winkel und ihre Maße
  'ex-trig-1-1-a': {
    id: 'ex-trig-1-1-a', lessonId: 'trig-1-1', type: 'multiple-choice',
    question: 'Wie viel Radiant entspricht einem Winkel von 90°?',
    options: ['π/4', 'π/2', 'π', '2π'],
    correctIndex: 1,
    explanation: '90° ist ein Viertel des Vollkreises (360° = 2π). Also: 2π / 4 = π/2 ≈ 1,571 rad.',
    hints: ['Der Vollkreis hat 360° oder 2π Radiant.', 'Teile 2π durch 4 für ein Viertel des Kreises.'],
  },
  'ex-trig-1-1-b': {
    id: 'ex-trig-1-1-b', lessonId: 'trig-1-1', type: 'multiple-choice',
    question: 'Welcher Winkel im Gradmaß entspricht π Radiant?',
    options: ['90°', '180°', '270°', '360°'],
    correctIndex: 1,
    explanation: 'π Radiant ist genau der halbe Vollkreis = 180°.',
    hints: ['2π Radiant = 360°. Was ist π Radiant?'],
  },
  'ex-trig-1-1-c': {
    id: 'ex-trig-1-1-c', lessonId: 'trig-1-1', type: 'multiple-choice',
    question: '270° in Radiant:',
    options: ['π/2', 'π', '3π/2', '2π'],
    correctIndex: 2,
    explanation: '270° = 3/4 · 360°. In Radiant: 3/4 · 2π = 3π/2.',
    hints: ['270° ist drei Viertel des Vollkreises.', '3/4 · 2π = ?'],
  },
  'ex-trig-1-1-mastery': {
    id: 'ex-trig-1-1-mastery', lessonId: 'trig-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Welches Bogenmaß entspricht 135°?',
    options: ['π/4', 'π/2', '3π/4', 'π'],
    correctIndex: 2,
    explanation: '135° = 3/4 · 180°. Formel: 135 · π/180 = 3π/4.',
    hints: ['135° liegt genau zwischen 90° (π/2) und 180° (π).'],
  },

  // Lektion 1-2: Rechtwinkliges Dreieck
  'ex-trig-1-2-a': {
    id: 'ex-trig-1-2-a', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: 'In einem rechtwinkligen Dreieck ist sin(α) definiert als:',
    options: ['Ankathete / Hypotenuse', 'Gegenkathete / Hypotenuse', 'Gegenkathete / Ankathete', 'Hypotenuse / Gegenkathete'],
    correctIndex: 1,
    explanation: 'SOH-CAH-TOA: Sin = Gegenkathete / Hypotenuse.',
    hints: ['Merkhilfe: SOH-CAH-TOA', 'S = G/H'],
  },
  'ex-trig-1-2-b': {
    id: 'ex-trig-1-2-b', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: 'cos(α) ist definiert als:',
    options: ['Gegenkathete / Hypotenuse', 'Ankathete / Hypotenuse', 'Gegenkathete / Ankathete', 'Hypotenuse / Ankathete'],
    correctIndex: 1,
    explanation: 'SOH-CAH-TOA: Cos = Ankathete / Hypotenuse.',
    hints: ['C = A/H'],
  },
  'ex-trig-1-2-c': {
    id: 'ex-trig-1-2-c', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: 'tan(α) ist definiert als:',
    options: ['Hypotenuse / Gegenkathete', 'Ankathete / Gegenkathete', 'Gegenkathete / Ankathete', 'Ankathete / Hypotenuse'],
    correctIndex: 2,
    explanation: 'SOH-CAH-TOA: Tan = Gegenkathete / Ankathete.',
    hints: ['T = G/A'],
  },
  'ex-trig-1-2-mastery': {
    id: 'ex-trig-1-2-mastery', lessonId: 'trig-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Ein Dreieck hat Gegenkathete = 3, Ankathete = 4, Hypotenuse = 5. Was ist sin(α)?',
    options: ['3/5', '4/5', '3/4', '4/3'],
    correctIndex: 0,
    explanation: 'sin(α) = Gegenkathete / Hypotenuse = 3/5 = 0,6.',
    hints: ['sin = G/H. G = 3, H = 5.'],
  },

  // Lektion 1-3: Grundwerte
  'ex-trig-1-3-a': {
    id: 'ex-trig-1-3-a', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: 'sin(30°) =',
    options: ['0', '1/2', '√2/2', '√3/2'],
    correctIndex: 1,
    explanation: 'sin(30°) = 1/2. Grundwert, den du auswendig kennen solltest.',
    hints: ['Die Grundwerte für 0°, 30°, 45°, 60°, 90° folgen dem Muster √0/2, √1/2, √2/2, √3/2, √4/2.'],
  },
  'ex-trig-1-3-b': {
    id: 'ex-trig-1-3-b', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: 'cos(60°) =',
    options: ['√3/2', '√2/2', '1/2', '0'],
    correctIndex: 2,
    explanation: 'cos(60°) = 1/2. Beachte: cos(60°) = sin(30°) — Komplementwinkel!',
    hints: ['cos(α) = sin(90° - α)', 'cos(60°) = sin(30°) = ?'],
  },
  'ex-trig-1-3-c': {
    id: 'ex-trig-1-3-c', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: 'sin(45°) =',
    options: ['1/2', '√2/2', '√3/2', '1'],
    correctIndex: 1,
    explanation: 'sin(45°) = cos(45°) = √2/2 ≈ 0,707. Bei 45° sind sin und cos gleich.',
    hints: ['Bei 45° ist das rechtwinklige Dreieck gleichschenklig.'],
  },
  'ex-trig-1-3-d': {
    id: 'ex-trig-1-3-d', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: 'tan(45°) =',
    options: ['0', '1/2', '1', '√3'],
    correctIndex: 2,
    explanation: 'tan(45°) = sin(45°)/cos(45°) = 1. Beide Werte sind gleich.',
    hints: ['tan = sin/cos. Bei 45° gilt sin = cos.'],
  },
  'ex-trig-1-3-mastery': {
    id: 'ex-trig-1-3-mastery', lessonId: 'trig-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Welcher Wert ist FALSCH?',
    options: ['sin(0°) = 0', 'cos(0°) = 1', 'sin(90°) = 0', 'tan(0°) = 0'],
    correctIndex: 2,
    explanation: 'sin(90°) = 1, nicht 0! Am oberen Punkt des Einheitskreises ist die y-Koordinate = 1.',
    hints: ['Am Einheitskreis: sin(90°) ist die y-Koordinate bei 90°.'],
  },

  // Lektion 1-4: Taschenrechner
  'ex-trig-1-4-a': {
    id: 'ex-trig-1-4-a', lessonId: 'trig-1-4', type: 'multiple-choice',
    question: 'Im zweiten Quadranten (90°–180°) ist:',
    options: ['sin > 0, cos > 0', 'sin > 0, cos < 0', 'sin < 0, cos < 0', 'sin < 0, cos > 0'],
    correctIndex: 1,
    explanation: 'Im 2. Quadranten: x < 0 (→ cos < 0), y > 0 (→ sin > 0). Merkhilfe: "All Students Take Calculus" — im 2. Quadrant nur Sinus positiv.',
    hints: ['Am Einheitskreis: cos = x-Koordinate, sin = y-Koordinate.'],
  },
  'ex-trig-1-4-b': {
    id: 'ex-trig-1-4-b', lessonId: 'trig-1-4', type: 'multiple-choice',
    question: 'sin(150°) =',
    options: ['-1/2', '0', '1/2', '√3/2'],
    correctIndex: 2,
    explanation: 'sin(150°) = sin(180° - 30°) = sin(30°) = 1/2. Im 2. Quadrant bleibt sin positiv.',
    hints: ['150° liegt im 2. Quadranten. sin ist dort positiv.', 'sin(180° - α) = sin(α)'],
  },
  'ex-trig-1-4-mastery': {
    id: 'ex-trig-1-4-mastery', lessonId: 'trig-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: 'cos(120°) =',
    options: ['1/2', '√3/2', '-1/2', '-√3/2'],
    correctIndex: 2,
    explanation: 'cos(120°) = -cos(60°) = -1/2. Im 2. Quadranten ist cos negativ.',
    hints: ['120° = 180° - 60°. cos(180° - α) = -cos(α).'],
  },
}

const lessons_u1 = [
  {
    id: 'trig-1-1', unitId: 'trig-unit-1',
    title: 'Winkel und ihre Maße',
    order: 1, estimatedMinutes: 10,
    learningGoals: ['Grad- und Bogenmaß umrechnen', 'Bedeutung von π im Einheitskreis verstehen'],
    prerequisites: [],
    nextLessonId: 'trig-1-2',
    steps: [
      {
        id: 'trig-1-1-s1', type: 'explanation-intuitive', title: 'Was ist ein Winkel?',
        content: `Ein **Winkel** beschreibt eine Drehung. Stell dir einen Uhrzeiger vor, der sich dreht — der Winkel ist die Menge an Drehung.

Das gebräuchlichste Maß ist das **Gradmaß**: Der volle Kreis hat **360°**. Das ist eine willkürliche Wahl (aus dem babylonischen Zahlensystem).

In der Mathematik und Technik verwendet man aber oft das **Bogenmaß (Radiant)**: Hier wird die Bogenlänge am Einheitskreis (Radius = 1) als Winkelmaß verwendet. Der volle Kreis hat **2π Radiant** ≈ 6,28 rad.`,
      },
      {
        id: 'trig-1-1-s2', type: 'explanation-formal', title: 'Umrechnungsformel',
        content: `**Umrechnung Grad ↔ Radiant:**

$$\\alpha_{\\text{rad}} = \\alpha_{\\circ} \\cdot \\frac{\\pi}{180}$$

$$\\alpha_{\\circ} = \\alpha_{\\text{rad}} \\cdot \\frac{180}{\\pi}$$

**Wichtige Werte auswendig lernen:**

| Grad | Radiant |
|------|---------|
| 0°   | 0       |
| 30°  | π/6     |
| 45°  | π/4     |
| 60°  | π/3     |
| 90°  | π/2     |
| 180° | π       |
| 360° | 2π      |`,
      },
      { id: 'trig-1-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-1-1-a' },
      { id: 'trig-1-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-1-1-b' },
      { id: 'trig-1-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-trig-1-1-c' },
      { id: 'trig-1-1-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-1-1-mastery' },
    ],
  },
  {
    id: 'trig-1-2', unitId: 'trig-unit-1',
    title: 'Rechtwinkliges Dreieck',
    order: 2, estimatedMinutes: 12,
    learningGoals: ['sin, cos, tan als Seitenverhältnisse kennen', 'SOH-CAH-TOA anwenden'],
    prerequisites: ['trig-1-1'],
    nextLessonId: 'trig-1-3',
    steps: [
      {
        id: 'trig-1-2-s1', type: 'explanation-intuitive', title: 'Seitenverhältnisse im Dreieck',
        content: `Betrachte ein rechtwinkliges Dreieck mit einem Winkel α (nicht der rechte Winkel).

Die drei Seiten heißen:
- **Hypotenuse (H)**: die längste Seite, gegenüber dem rechten Winkel
- **Gegenkathete (G)**: die Seite gegenüber von α
- **Ankathete (A)**: die Seite neben α (nicht die Hypotenuse)

Die trigonometrischen Funktionen sind **Verhältnisse dieser Seiten**.`,
      },
      {
        id: 'trig-1-2-s2', type: 'explanation-formal', title: 'SOH-CAH-TOA',
        content: `**Merkhilfe: SOH-CAH-TOA**

$$\\sin(\\alpha) = \\frac{G}{H} = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$$

$$\\cos(\\alpha) = \\frac{A}{H} = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}$$

$$\\tan(\\alpha) = \\frac{G}{A} = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$$

**Wichtig:** Diese Definitionen gelten nur im rechtwinkligen Dreieck und nur für Winkel zwischen 0° und 90°. Für andere Winkel brauchen wir den Einheitskreis.`,
      },
      { id: 'trig-1-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-1-2-a' },
      { id: 'trig-1-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-1-2-b' },
      { id: 'trig-1-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-trig-1-2-c' },
      { id: 'trig-1-2-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-1-2-mastery' },
    ],
  },
  {
    id: 'trig-1-3', unitId: 'trig-unit-1',
    title: 'Die Grundwerte',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Werte für 0°, 30°, 45°, 60°, 90° auswendig kennen', 'Muster in den Grundwerten erkennen'],
    prerequisites: ['trig-1-2'],
    nextLessonId: 'trig-1-4',
    steps: [
      {
        id: 'trig-1-3-s1', type: 'explanation-intuitive', title: 'Warum diese Winkel?',
        content: `In der Technik begegnen dir immer wieder dieselben "speziellen" Winkel: **0°, 30°, 45°, 60°, 90°**.

Der Grund: Diese Winkel kommen in regelmäßigen Geometrien vor (gleichseitiges Dreieck → 60°, gleichschenkliges rechtwinkliges Dreieck → 45°) und haben exakte, schöne Werte — keine krummen Dezimalzahlen.`,
      },
      {
        id: 'trig-1-3-s2', type: 'explanation-formal', title: 'Tabelle der Grundwerte',
        content: `**Eselsbrücke:** Die Sinuswerte folgen dem Muster **√0/2, √1/2, √2/2, √3/2, √4/2**:

| Winkel | sin      | cos      | tan       |
|--------|----------|----------|-----------|
| 0°     | 0        | 1        | 0         |
| 30°    | 1/2      | √3/2     | 1/√3      |
| 45°    | √2/2     | √2/2     | 1         |
| 60°    | √3/2     | 1/2      | √3        |
| 90°    | 1        | 0        | —         |

**Beachte:** cos(α) = sin(90° - α) — Sinus und Kosinus sind "komplementär"!`,
      },
      {
        id: 'trig-1-3-s3', type: 'visualization', title: 'Einheitskreis erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 30, showTangent: false },
      },
      { id: 'trig-1-3-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-1-3-a' },
      { id: 'trig-1-3-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-1-3-b' },
      { id: 'trig-1-3-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-trig-1-3-c' },
      { id: 'trig-1-3-s7', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-trig-1-3-d' },
      { id: 'trig-1-3-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-1-3-mastery' },
    ],
  },
  {
    id: 'trig-1-4', unitId: 'trig-unit-1',
    title: 'Vorzeichen und Quadranten',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['Vorzeichen von sin/cos/tan in allen vier Quadranten bestimmen', 'Winkel > 90° berechnen'],
    prerequisites: ['trig-1-3'],
    nextLessonId: 'trig-2-1',
    steps: [
      {
        id: 'trig-1-4-s1', type: 'explanation-intuitive', title: 'Über den ersten Quadranten hinaus',
        content: `Bis jetzt haben wir nur Winkel zwischen 0° und 90° betrachtet. Aber in der Technik kommen auch größere Winkel vor — z.B. Phasenwinkel in der Elektrotechnik oder Kurbelwinkel in Motoren.

Am Einheitskreis können wir jeden Winkel darstellen, nicht nur die zwischen 0° und 90°. Die vier Quadranten haben unterschiedliche Vorzeichen für sin und cos.`,
      },
      {
        id: 'trig-1-4-s2', type: 'explanation-formal', title: 'Vorzeichen-Regel (ASTC)',
        content: `**Merkhilfe "All Students Take Calculus" (ASTC):**

- **1. Quadrant (0°–90°):** **A**lle positiv (sin > 0, cos > 0, tan > 0)
- **2. Quadrant (90°–180°):** Nur **S**inus positiv
- **3. Quadrant (180°–270°):** Nur **T**angens positiv
- **4. Quadrant (270°–360°):** Nur **C**osinus positiv

**Reduktionsformeln:**
- sin(180° - α) = sin(α)
- cos(180° - α) = -cos(α)
- sin(180° + α) = -sin(α)
- cos(360° - α) = cos(α)`,
      },
      {
        id: 'trig-1-4-s3', type: 'visualization', title: 'Vorzeichen erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 120, showTangent: true },
      },
      { id: 'trig-1-4-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-trig-1-4-a' },
      { id: 'trig-1-4-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-trig-1-4-b' },
      { id: 'trig-1-4-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-1-4-mastery' },
    ],
  },
]

export const unit1 = {
  id: 'trig-unit-1',
  title: 'Grundlagen der Trigonometrie',
  order: 1,
  description: 'Winkelmaße, rechtwinkliges Dreieck und erste Grundwerte',
  lessons: lessons_u1,
  exercises: exercises_u1,
}
