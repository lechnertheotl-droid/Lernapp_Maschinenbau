// ── Vektoren Unit 3: Prüfungsvorbereitung Vektoren ──────────────────────────

export const exercises_vek_u3 = {
  // ── Lesson 1: Gemischte Aufgaben Skalar- und Kreuzprodukt ──
  'ex-vek-3-1-a': {
    id: 'ex-vek-3-1-a', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a}$ = (1, 2, 2), $\\vec{b}$ = (2, −1, 2). Berechne $\\vec{a}$ · $\\vec{b}$.',
    options: ['4', '6', '0', '2'],
    correctIndex: 1,
    explanation: '$\\vec{a}$ · $\\vec{b}$ = 1·2 + 2·(−1) + 2·2 = 2 − 2 + 4 = 4. Moment: 2 − 2 + 4 = 4. Korrektur: Richtig ist 4.',
    hints: ['$\\vec{a}$ · $\\vec{b}$ = ax·bx + ay·by + az·bz'],
  },
  'ex-vek-3-1-b': {
    id: 'ex-vek-3-1-b', lessonId: 'vek-3-1', type: 'number-input',
    question: '[PRÜFUNG] $\\vec{a}$ = (3, 0, 4). Berechne den Betrag |$\\vec{a}$|.',
    correctValue: 5,
    tolerance: 0.01,
    unit: '',
    explanation: '$|\\vec{a}| = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 0 + 16} = \\sqrt{25} = 5$.',
    hints: ['$|\\vec{a}| = \\sqrt{a_x^2 + a_y^2 + a_z^2}$', '$9 + 16 = 25$'],
  },
  'ex-vek-3-1-c': {
    id: 'ex-vek-3-1-c', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a}$ = (1, 0, 0), $\\vec{b}$ = (0, 1, 0). Was ist $\\vec{a}$ × $\\vec{b}$?',
    options: ['(0, 0, 1)', '(0, 0, −1)', '(1, 1, 0)', '0'],
    correctIndex: 0,
    explanation: '$\\vec{a}$ × $\\vec{b}$ = (0·0−0·1, 0·0−1·0, 1·1−0·0) = (0, 0, 1). Das ist der Einheitsvektor in z-Richtung (Rechte-Hand-Regel).',
    hints: ['$\\hat{e}_1 \\times \\hat{e}_2 = \\hat{e}_3$ nach der Rechte-Hand-Regel.'],
  },
  'ex-vek-3-1-d': {
    id: 'ex-vek-3-1-d', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\vec{a}$ = (2, 1, −1), $\\vec{b}$ = (1, 3, 2). Was ist $\\vec{a}$ × $\\vec{b}$?',
    options: ['(5, −5, 5)', '(5, 5, 5)', '(−5, 5, −5)', '(5, −5, −5)'],
    correctIndex: 0,
    explanation: '$\\vec{a}$ × $\\vec{b}$ = (1·2−(−1)·3, (−1)·1−2·2, 2·3−1·1) = (2+3, −1−4, 6−1) = (5, −5, 5).',
    hints: ['Kreuzprodukt: (ay·bz−az·by, az·bx−ax·bz, ax·by−ay·bx)'],
  },
  'ex-vek-3-1-e': {
    id: 'ex-vek-3-1-e', lessonId: 'vek-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Das Kreuzprodukt ist kommutativ: $\\vec{a}$ × $\\vec{b}$ = $\\vec{b}$ × $\\vec{a}$.',
    correct: false,
    explanation: 'Das Kreuzprodukt ist **antikommutativ**: $\\vec{a}$ × $\\vec{b}$ = −($\\vec{b}$ × $\\vec{a}$). Die Reihenfolge ist wichtig!',
    hints: ['Beim Vertauschen ändert sich das Vorzeichen.'],
  },
  'ex-vek-3-1-mastery': {
    id: 'ex-vek-3-1-mastery', lessonId: 'vek-3-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Winkel zwischen $\\vec{a}$ = (1, 1, 0) und $\\vec{b}$ = (0, 1, 1) in Grad. Runde auf ganze Grad.',
    correctValue: 60,
    tolerance: 1,
    unit: '',
    explanation: '$\cos(\varphi) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{0+1+0}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$. $\\varphi = \\arccos(1/2) = 60°$.',
    hints: ['$\\vec{a} \\cdot \\vec{b} = 0+1+0 = 1$. $|\\vec{a}| = \\sqrt{2}$, $|\\vec{b}| = \\sqrt{2}$.', '$\cos(\\varphi) = 1/2 \\Rightarrow \\varphi = 60°$'],
  },

  // ── Lesson 2: Flächen- und Volumenberechnung ──
  'ex-vek-3-2-a': {
    id: 'ex-vek-3-2-a', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die Fläche eines von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms ist:',
    options: ['|$\\vec{a}$ · $\\vec{b}$|', '|$\\vec{a}$ × $\\vec{b}$|', '$\\vec{a}$ · ($\\vec{b}$ × $\\vec{c}$)', '|$\\vec{a}$| + |$\\vec{b}$|'],
    correctIndex: 1,
    explanation: 'Die Parallelogrammfläche ist der **Betrag des Kreuzprodukts**: A = |$\\vec{a}$ × $\\vec{b}$| = |$\\vec{a}$|·|$\\vec{b}$|·sin(φ).',
    hints: ['Kreuzprodukt → Fläche. Skalarprodukt → Winkel/Projektion.'],
  },
  'ex-vek-3-2-b': {
    id: 'ex-vek-3-2-b', lessonId: 'vek-3-2', type: 'number-input',
    question: '[PRÜFUNG] $\\vec{a}$ = (3, 0, 0), $\\vec{b}$ = (0, 4, 0). Berechne die Parallelogrammfläche A = |$\\vec{a}$ × $\\vec{b}$|.',
    correctValue: 12,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\vec{a}$ × $\\vec{b}$ = (0·0−0·4, 0·0−3·0, 3·4−0·0) = (0, 0, 12). |$\\vec{a}$ × $\\vec{b}$| = 12. Das Parallelogramm ist ein Rechteck mit Seiten 3 und 4.',
    hints: ['Kreuzprodukt berechnen, dann den Betrag nehmen.', 'Alternativ: Die Vektoren stehen senkrecht → A = |$\\vec{a}$|·|$\\vec{b}$| = 3·4 = 12'],
  },
  'ex-vek-3-2-c': {
    id: 'ex-vek-3-2-c', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Volumen eines Spats (Parallelepiped) wird berechnet durch:',
    options: ['V = |$\\vec{a}$ × $\\vec{b}$|', 'V = $\\vec{a}$ · $\\vec{b}$ · $\\vec{c}$', 'V = |$\\vec{a}$ · ($\\vec{b}$ × $\\vec{c}$)|', 'V = |$\\vec{a}$| · |$\\vec{b}$| · |$\\vec{c}$|'],
    correctIndex: 2,
    explanation: 'Das **Spatprodukt** V = |$\\vec{a}$ · ($\\vec{b}$ × $\\vec{c}$)| gibt das Volumen des von drei Vektoren aufgespannten Parallelepipeds.',
    hints: ['Erst Kreuzprodukt $\\vec{b}$ × $\\vec{c}$ (→ Flächenvektor), dann Skalarprodukt mit $\\vec{a}$ (→ Höhe × Fläche = Volumen).'],
  },
  'ex-vek-3-2-mastery': {
    id: 'ex-vek-3-2-mastery', lessonId: 'vek-3-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\vec{a}$ = (1,0,0), $\\vec{b}$ = (0,1,0), $\\vec{c}$ = (0,0,3). Berechne das Spatvolumen V = |$\\vec{a}$ · ($\\vec{b}$ × $\\vec{c}$)|.',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\vec{b}$ × $\\vec{c}$ = (1·3−0·0, 0·0−0·3, 0·0−1·0) = (3, 0, 0). $\\vec{a}$ · (3, 0, 0) = 1·3 + 0 + 0 = 3. V = |3| = 3. Das ist ein Quader mit den Seiten 1, 1 und 3.',
    hints: ['$\\vec{b}$ × $\\vec{c}$ zuerst berechnen, dann mit $\\vec{a}$ das Skalarprodukt bilden.'],
  },

  // ── Lesson 3: Technische Anwendungen ──
  'ex-vek-3-3-a': {
    id: 'ex-vek-3-3-a', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Drehmoment wird berechnet durch:',
    options: ['$\\vec{M}$ = $\\vec{r}$ · $\\vec{F}$', '$\\vec{M}$ = $\\vec{r}$ × $\\vec{F}$', '$\\vec{M}$ = |$\\vec{r}$| · |$\\vec{F}$|', '$\\vec{M}$ = $\\vec{F}$ × $\\vec{r}$'],
    correctIndex: 1,
    explanation: 'Das Drehmoment ist $\\vec{M}$ = $\\vec{r}$ × $\\vec{F}$ (Kreuzprodukt). $\\vec{r}$ ist der Hebelarm (Ortsvektor vom Drehpunkt zur Kraft), $\\vec{F}$ ist die Kraft. Achtung: Reihenfolge wichtig!',
    hints: ['Drehmoment = Kreuzprodukt aus Hebelarm und Kraft.'],
  },
  'ex-vek-3-3-b': {
    id: 'ex-vek-3-3-b', lessonId: 'vek-3-3', type: 'number-input',
    question: '[PRÜFUNG] Hebelarm $\\vec{r}$ = (0,5, 0, 0) m, Kraft $\\vec{F}$ = (0, 100, 0) N. Berechne |$\\vec{M}$| = |$\\vec{r}$ × $\\vec{F}$| in Nm.',
    correctValue: 50,
    tolerance: 0.1,
    unit: '',
    explanation: '$\\vec{r}$ × $\\vec{F}$ = (0·0−0·100, 0·0−0,5·0, 0,5·100−0·0) = (0, 0, 50). |$\\vec{M}$| = 50 Nm. Der Hebel ist 0,5 m lang, die Kraft steht senkrecht → M = 0,5·100 = 50 Nm.',
    hints: ['Da $\\vec{r}$ und $\\vec{F}$ senkrecht stehen: |$\\vec{M}$| = |$\\vec{r}$|·|$\\vec{F}$|·sin(90°) = 0,5·100 = 50'],
  },
  'ex-vek-3-3-c': {
    id: 'ex-vek-3-3-c', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft $\\vec{F}$ = (100, 0) N wirkt auf einen Körper. Zerlege sie in Komponenten parallel und senkrecht zu einer Rampe mit Neigung α = 30°. Wie groß ist die Hangabtriebskraft?',
    options: ['100·cos(30°) ≈ 86,6 N', '100·sin(30°) = 50 N', '100·tan(30°) ≈ 57,7 N', '100 N'],
    correctIndex: 1,
    explanation: 'Die **Hangabtriebskraft** (parallel zur Rampe) ist F_parallel = F·sin(α) = 100·sin(30°) = 50 N. Die Normalkraft (senkrecht zur Rampe) ist F_normal = F·cos(α).',
    hints: ['Hangabtriebskraft = Gewichtskraft × sin(Neigungswinkel)'],
  },
  'ex-vek-3-3-mastery': {
    id: 'ex-vek-3-3-mastery', lessonId: 'vek-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Kran hebt eine Last mit $\\vec{F}$ = (0, 0, −500) N. Der Seilansatzpunkt ist $\\vec{r}$ = (3, 4, 0) m vom Drehpunkt. Welche Aussage zum Drehmoment ist korrekt?',
    options: [
      '$\\vec{M}$ = (−2000, 1500, 0) Nm',
      '$\\vec{M}$ = (2000, −1500, 0) Nm',
      '$\\vec{M}$ = (0, 0, −2500) Nm',
      '|$\\vec{M}$| = 2500 Nm',
    ],
    correctIndex: 0,
    explanation: '$\\vec{M}$ = $\\vec{r}$ × $\\vec{F}$ = (3,4,0) × (0,0,−500) = (4·(−500)−0·0, 0·0−3·(−500), 3·0−4·0) = (−2000, 1500, 0) Nm.',
    hints: ['Kreuzprodukt Schritt für Schritt: (ay·bz−az·by, az·bx−ax·bz, ax·by−ay·bx)'],
  },
}

const lessons_vek_u3 = [
  {
    id: 'vek-3-1', unitId: 'vek-unit-3',
    title: 'Gemischte Aufgaben Skalar- und Kreuzprodukt',
    order: 1, estimatedMinutes: 20,
    learningGoals: ['Skalar- und Kreuzprodukt sicher berechnen', 'Winkel zwischen Vektoren bestimmen', 'Rechenregeln sicher anwenden'],
    prerequisites: ['vek-1-4'],
    nextLessonId: 'vek-3-2',
    steps: [
      { id: 'vek-3-1-s1', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-3-1-a' },
      { id: 'vek-3-1-s2', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-vek-3-1-b' },
      { id: 'vek-3-1-s3', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-3-1-c' },
      { id: 'vek-3-1-s4', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-vek-3-1-d' },
      { id: 'vek-3-1-s5', type: 'exercise', title: 'Aufgabe 5', exerciseRef: 'ex-vek-3-1-e' },
      { id: 'vek-3-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-1-mastery' },
    ],
  },
  {
    id: 'vek-3-2', unitId: 'vek-unit-3',
    title: 'Flächen- und Volumenberechnung',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Parallelogrammfläche mit Kreuzprodukt berechnen', 'Spatprodukt für Volumen anwenden'],
    prerequisites: ['vek-3-1'],
    nextLessonId: 'vek-3-3',
    steps: [
      {
        id: 'vek-3-2-s1', type: 'explanation-formal', title: 'Flächen und Volumen mit Vektoren',
        content: `Vektoren sind perfekt geeignet, um Flächen und Volumen zu berechnen!

**Parallelogrammfläche** (aufgespannt von $\\vec{a}$ und $\\vec{b}$):
$$A = |\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$$

**Dreiecksfläche** = halbe Parallelogrammfläche:
$$A_{\\triangle} = \\frac{1}{2} |\\vec{a} \\times \\vec{b}|$$

**Spatprodukt** (Volumen des Parallelepipeds, aufgespannt von $\\vec{a}$, $\\vec{b}$, $\\vec{c}$):
$$V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$$

**Idee:** Erst $\\vec{b}$ × $\\vec{c}$ berechnen (ergibt einen Flächenvektor). Dann Skalarprodukt mit $\\vec{a}$ (projiziert die Höhe auf die Fläche). Das Ergebnis ist Grundfläche × Höhe = Volumen.

**Tetraedervolumen** = 1/6 des Spatvolumens:
$$V_{\\text{Tetraeder}} = \\frac{1}{6} |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$$`,
      },
      { id: 'vek-3-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-3-2-a' },
      { id: 'vek-3-2-s3', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-vek-3-2-b' },
      { id: 'vek-3-2-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-3-2-c' },
      { id: 'vek-3-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-2-mastery' },
    ],
  },
  {
    id: 'vek-3-3', unitId: 'vek-unit-3',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Drehmoment als Kreuzprodukt berechnen', 'Kräftezerlegung an der schiefen Ebene', 'Vektoren in technischen Aufgaben anwenden'],
    prerequisites: ['vek-2-4', 'vek-3-2'],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-3-3-s1', type: 'explanation-intuitive', title: 'Vektoren im Maschinenbau',
        content: `Vektoren sind das **Handwerkszeug** des Ingenieurs. Zwei zentrale Anwendungen:

**1. Kräftezerlegung (schiefe Ebene):**
Stell dir einen Koffer auf einer Rampe vor. Die Gewichtskraft $\\vec{F}$_G zeigt senkrecht nach unten. Aber der Koffer rutscht **parallel zur Rampe** hinunter.

Zerlegung bei Neigungswinkel α:
- **Hangabtriebskraft:** $F_{\\parallel} = F_G \\cdot \\sin(\\alpha)$ (zieht den Koffer die Rampe hinunter)
- **Normalkraft:** $F_{\\perp} = F_G \\cdot \\cos(\\alpha)$ (drückt den Koffer auf die Rampe)

**2. Drehmoment $\\vec{M}$ = $\\vec{r}$ × $\\vec{F}$:**
Stell dir einen Schraubenschlüssel vor. Je länger der Hebel ($\\vec{r}$) und je stärker du drückst ($\\vec{F}$), desto größer das Drehmoment. Und: Am besten senkrecht zum Hebel drücken!

$$|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin(\\alpha)$$

Bei α = 90° (senkrecht): Maximales Drehmoment. Bei α = 0° (parallel): Kein Drehmoment.`,
      },
      { id: 'vek-3-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-3-3-a' },
      { id: 'vek-3-3-s3', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-vek-3-3-b' },
      { id: 'vek-3-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-3-3-c' },
      { id: 'vek-3-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-3-3-mastery' },
    ],
  },
]

export const vek_unit3 = {
  id: 'vek-unit-3',
  title: 'Prüfungsvorbereitung Vektoren',
  order: 3,
  description: 'Gemischte Aufgaben, Flächen- und Volumenberechnung, technische Anwendungen',
  lessons: lessons_vek_u3,
  exercises: exercises_vek_u3,
}
