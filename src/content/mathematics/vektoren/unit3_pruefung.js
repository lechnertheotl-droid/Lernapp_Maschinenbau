// ── Vektoren Unit 3: Prüfungsvorbereitung Vektoren ──────────────────────────

export const exercises_vek_u3 = {
  // ── Lesson 1: Gemischte Aufgaben Skalar- und Kreuzprodukt ──
  'ex-vek-3-1-a': {
    id: 'ex-vek-3-1-a', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] a⃗ = (1, 2, 2), b⃗ = (2, −1, 2). Berechne a⃗ · b⃗.',
    options: ['4', '6', '0', '2'],
    correctIndex: 1,
    explanation: 'a⃗ · b⃗ = 1·2 + 2·(−1) + 2·2 = 2 − 2 + 4 = 4. Moment: 2 − 2 + 4 = 4. Korrektur: Richtig ist 4.',
    hints: ['a⃗ · b⃗ = ax·bx + ay·by + az·bz'],
  },
  'ex-vek-3-1-b': {
    id: 'ex-vek-3-1-b', lessonId: 'vek-3-1', type: 'number-input',
    question: '[PRÜFUNG] a⃗ = (3, 0, 4). Berechne den Betrag |a⃗|.',
    correctAnswer: 5,
    tolerance: 0.01,
    unit: '',
    explanation: '|a⃗| = √(3² + 0² + 4²) = √(9 + 0 + 16) = √25 = 5.',
    hints: ['|a⃗| = √(ax² + ay² + az²)', '9 + 16 = 25'],
  },
  'ex-vek-3-1-c': {
    id: 'ex-vek-3-1-c', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] a⃗ = (1, 0, 0), b⃗ = (0, 1, 0). Was ist a⃗ × b⃗?',
    options: ['(0, 0, 1)', '(0, 0, −1)', '(1, 1, 0)', '0'],
    correctIndex: 0,
    explanation: 'a⃗ × b⃗ = (0·0−0·1, 0·0−1·0, 1·1−0·0) = (0, 0, 1). Das ist der Einheitsvektor in z-Richtung (Rechte-Hand-Regel).',
    hints: ['è₁ × è₂ = è₃ nach der Rechte-Hand-Regel.'],
  },
  'ex-vek-3-1-d': {
    id: 'ex-vek-3-1-d', lessonId: 'vek-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] a⃗ = (2, 1, −1), b⃗ = (1, 3, 2). Was ist a⃗ × b⃗?',
    options: ['(5, −5, 5)', '(5, 5, 5)', '(−5, 5, −5)', '(5, −5, −5)'],
    correctIndex: 0,
    explanation: 'a⃗ × b⃗ = (1·2−(−1)·3, (−1)·1−2·2, 2·3−1·1) = (2+3, −1−4, 6−1) = (5, −5, 5).',
    hints: ['Kreuzprodukt: (ay·bz−az·by, az·bx−ax·bz, ax·by−ay·bx)'],
  },
  'ex-vek-3-1-e': {
    id: 'ex-vek-3-1-e', lessonId: 'vek-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Das Kreuzprodukt ist kommutativ: a⃗ × b⃗ = b⃗ × a⃗.',
    correct: false,
    explanation: 'Das Kreuzprodukt ist **antikommutativ**: a⃗ × b⃗ = −(b⃗ × a⃗). Die Reihenfolge ist wichtig!',
    hints: ['Beim Vertauschen ändert sich das Vorzeichen.'],
  },
  'ex-vek-3-1-mastery': {
    id: 'ex-vek-3-1-mastery', lessonId: 'vek-3-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Winkel zwischen a⃗ = (1, 1, 0) und b⃗ = (0, 1, 1) in Grad. Runde auf ganze Grad.',
    correctAnswer: 60,
    tolerance: 1,
    unit: '',
    explanation: 'cos(φ) = (a⃗·b⃗)/(|a⃗|·|b⃗|) = (0+1+0)/(√2·√2) = 1/2. φ = arccos(1/2) = 60°.',
    hints: ['a⃗·b⃗ = 0+1+0 = 1. |a⃗| = √2, |b⃗| = √2.', 'cos(φ) = 1/2 → φ = 60°'],
  },

  // ── Lesson 2: Flächen- und Volumenberechnung ──
  'ex-vek-3-2-a': {
    id: 'ex-vek-3-2-a', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die Fläche eines von a⃗ und b⃗ aufgespannten Parallelogramms ist:',
    options: ['|a⃗ · b⃗|', '|a⃗ × b⃗|', 'a⃗ · (b⃗ × c⃗)', '|a⃗| + |b⃗|'],
    correctIndex: 1,
    explanation: 'Die Parallelogrammfläche ist der **Betrag des Kreuzprodukts**: A = |a⃗ × b⃗| = |a⃗|·|b⃗|·sin(φ).',
    hints: ['Kreuzprodukt → Fläche. Skalarprodukt → Winkel/Projektion.'],
  },
  'ex-vek-3-2-b': {
    id: 'ex-vek-3-2-b', lessonId: 'vek-3-2', type: 'number-input',
    question: '[PRÜFUNG] a⃗ = (3, 0, 0), b⃗ = (0, 4, 0). Berechne die Parallelogrammfläche A = |a⃗ × b⃗|.',
    correctAnswer: 12,
    tolerance: 0.01,
    unit: '',
    explanation: 'a⃗ × b⃗ = (0·0−0·4, 0·0−3·0, 3·4−0·0) = (0, 0, 12). |a⃗ × b⃗| = 12. Das Parallelogramm ist ein Rechteck mit Seiten 3 und 4.',
    hints: ['Kreuzprodukt berechnen, dann den Betrag nehmen.', 'Alternativ: Die Vektoren stehen senkrecht → A = |a⃗|·|b⃗| = 3·4 = 12'],
  },
  'ex-vek-3-2-c': {
    id: 'ex-vek-3-2-c', lessonId: 'vek-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Volumen eines Spats (Parallelepiped) wird berechnet durch:',
    options: ['V = |a⃗ × b⃗|', 'V = a⃗ · b⃗ · c⃗', 'V = |a⃗ · (b⃗ × c⃗)|', 'V = |a⃗| · |b⃗| · |c⃗|'],
    correctIndex: 2,
    explanation: 'Das **Spatprodukt** V = |a⃗ · (b⃗ × c⃗)| gibt das Volumen des von drei Vektoren aufgespannten Parallelepipeds.',
    hints: ['Erst Kreuzprodukt b⃗ × c⃗ (→ Flächenvektor), dann Skalarprodukt mit a⃗ (→ Höhe × Fläche = Volumen).'],
  },
  'ex-vek-3-2-mastery': {
    id: 'ex-vek-3-2-mastery', lessonId: 'vek-3-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] a⃗ = (1,0,0), b⃗ = (0,1,0), c⃗ = (0,0,3). Berechne das Spatvolumen V = |a⃗ · (b⃗ × c⃗)|.',
    correctAnswer: 3,
    tolerance: 0.01,
    unit: '',
    explanation: 'b⃗ × c⃗ = (1·3−0·0, 0·0−0·3, 0·0−1·0) = (3, 0, 0). a⃗ · (3, 0, 0) = 1·3 + 0 + 0 = 3. V = |3| = 3. Das ist ein Quader mit den Seiten 1, 1 und 3.',
    hints: ['b⃗ × c⃗ zuerst berechnen, dann mit a⃗ das Skalarprodukt bilden.'],
  },

  // ── Lesson 3: Technische Anwendungen ──
  'ex-vek-3-3-a': {
    id: 'ex-vek-3-3-a', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Drehmoment wird berechnet durch:',
    options: ['M⃗ = r⃗ · F⃗', 'M⃗ = r⃗ × F⃗', 'M⃗ = |r⃗| · |F⃗|', 'M⃗ = F⃗ × r⃗'],
    correctIndex: 1,
    explanation: 'Das Drehmoment ist M⃗ = r⃗ × F⃗ (Kreuzprodukt). r⃗ ist der Hebelarm (Ortsvektor vom Drehpunkt zur Kraft), F⃗ ist die Kraft. Achtung: Reihenfolge wichtig!',
    hints: ['Drehmoment = Kreuzprodukt aus Hebelarm und Kraft.'],
  },
  'ex-vek-3-3-b': {
    id: 'ex-vek-3-3-b', lessonId: 'vek-3-3', type: 'number-input',
    question: '[PRÜFUNG] Hebelarm r⃗ = (0,5, 0, 0) m, Kraft F⃗ = (0, 100, 0) N. Berechne |M⃗| = |r⃗ × F⃗| in Nm.',
    correctAnswer: 50,
    tolerance: 0.1,
    unit: '',
    explanation: 'r⃗ × F⃗ = (0·0−0·100, 0·0−0,5·0, 0,5·100−0·0) = (0, 0, 50). |M⃗| = 50 Nm. Der Hebel ist 0,5 m lang, die Kraft steht senkrecht → M = 0,5·100 = 50 Nm.',
    hints: ['Da r⃗ und F⃗ senkrecht stehen: |M⃗| = |r⃗|·|F⃗|·sin(90°) = 0,5·100 = 50'],
  },
  'ex-vek-3-3-c': {
    id: 'ex-vek-3-3-c', lessonId: 'vek-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft F⃗ = (100, 0) N wirkt auf einen Körper. Zerlege sie in Komponenten parallel und senkrecht zu einer Rampe mit Neigung α = 30°. Wie groß ist die Hangabtriebskraft?',
    options: ['100·cos(30°) ≈ 86,6 N', '100·sin(30°) = 50 N', '100·tan(30°) ≈ 57,7 N', '100 N'],
    correctIndex: 1,
    explanation: 'Die **Hangabtriebskraft** (parallel zur Rampe) ist F_parallel = F·sin(α) = 100·sin(30°) = 50 N. Die Normalkraft (senkrecht zur Rampe) ist F_normal = F·cos(α).',
    hints: ['Hangabtriebskraft = Gewichtskraft × sin(Neigungswinkel)'],
  },
  'ex-vek-3-3-mastery': {
    id: 'ex-vek-3-3-mastery', lessonId: 'vek-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Kran hebt eine Last mit F⃗ = (0, 0, −500) N. Der Seilansatzpunkt ist r⃗ = (3, 4, 0) m vom Drehpunkt. Welche Aussage zum Drehmoment ist korrekt?',
    options: [
      'M⃗ = (−2000, 1500, 0) Nm',
      'M⃗ = (2000, −1500, 0) Nm',
      'M⃗ = (0, 0, −2500) Nm',
      '|M⃗| = 2500 Nm',
    ],
    correctIndex: 0,
    explanation: 'M⃗ = r⃗ × F⃗ = (3,4,0) × (0,0,−500) = (4·(−500)−0·0, 0·0−3·(−500), 3·0−4·0) = (−2000, 1500, 0) Nm.',
    hints: ['Kreuzprodukt Schritt für Schritt: (ay·bz−az·by, az·bx−ax·bz, ax·by−ay·bx)'],
  },
}

const lessons_vek_u3 = [
  {
    id: 'vek-3-1', unitId: 'vek-unit-3',
    title: 'Gemischte Aufgaben Skalar- und Kreuzprodukt',
    order: 1, estimatedMinutes: 20,
    learningGoals: ['Skalar- und Kreuzprodukt sicher berechnen', 'Winkel zwischen Vektoren bestimmen', 'Rechenregeln sicher anwenden'],
    prerequisites: [],
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
    prerequisites: [],
    nextLessonId: 'vek-3-3',
    steps: [
      {
        id: 'vek-3-2-s1', type: 'explanation-formal', title: 'Flächen und Volumen mit Vektoren',
        content: `Vektoren sind perfekt geeignet, um Flächen und Volumen zu berechnen!

**Parallelogrammfläche** (aufgespannt von a⃗ und b⃗):
$$A = |\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$$

**Dreiecksfläche** = halbe Parallelogrammfläche:
$$A_{\\triangle} = \\frac{1}{2} |\\vec{a} \\times \\vec{b}|$$

**Spatprodukt** (Volumen des Parallelepipeds, aufgespannt von a⃗, b⃗, c⃗):
$$V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$$

**Idee:** Erst b⃗ × c⃗ berechnen (ergibt einen Flächenvektor). Dann Skalarprodukt mit a⃗ (projiziert die Höhe auf die Fläche). Das Ergebnis ist Grundfläche × Höhe = Volumen.

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
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-3-3-s1', type: 'explanation-intuitive', title: 'Vektoren im Maschinenbau',
        content: `Vektoren sind das **Handwerkszeug** des Ingenieurs. Zwei zentrale Anwendungen:

**1. Kräftezerlegung (schiefe Ebene):**
Stell dir einen Koffer auf einer Rampe vor. Die Gewichtskraft F⃗_G zeigt senkrecht nach unten. Aber der Koffer rutscht **parallel zur Rampe** hinunter.

Zerlegung bei Neigungswinkel α:
- **Hangabtriebskraft:** $F_{\\parallel} = F_G \\cdot \\sin(\\alpha)$ (zieht den Koffer die Rampe hinunter)
- **Normalkraft:** $F_{\\perp} = F_G \\cdot \\cos(\\alpha)$ (drückt den Koffer auf die Rampe)

**2. Drehmoment M⃗ = r⃗ × F⃗:**
Stell dir einen Schraubenschlüssel vor. Je länger der Hebel (r⃗) und je stärker du drückst (F⃗), desto größer das Drehmoment. Und: Am besten senkrecht zum Hebel drücken!

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
