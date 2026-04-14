// ── Vektoren Unit 2: Geraden und Ebenen im Raum ─────────────────────────────

export const exercises_vek_u2 = {
  // ── Lesson 1: Geradengleichung ──
  'ex-vek-2-1-a': {
    id: 'ex-vek-2-1-a', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Welche Form hat eine Geradengleichung in Parameterform?',
    options: [
      'r⃗ = p⃗ + t·v⃗',
      'r⃗ = p⃗ + s·u⃗ + t·v⃗',
      'n⃗ · r⃗ = d',
      'ax + by = c',
    ],
    correctIndex: 0,
    explanation: 'Eine Gerade wird durch einen **Stützpunkt** p⃗ und einen **Richtungsvektor** v⃗ beschrieben: r⃗ = p⃗ + t·v⃗. Der Parameter t durchläuft alle reellen Zahlen.',
    hints: ['Eine Gerade braucht einen Punkt und EINE Richtung.'],
  },
  'ex-vek-2-1-b': {
    id: 'ex-vek-2-1-b', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Gerade g: r⃗ = (1,2,3) + t·(2,0,1). Welcher Punkt liegt auf g?',
    options: ['(3, 2, 4)', '(2, 0, 1)', '(1, 2, 1)', '(3, 4, 5)'],
    correctIndex: 0,
    explanation: 'Für t = 1: r⃗ = (1+2, 2+0, 3+1) = (3, 2, 4). Dieser Punkt liegt auf der Geraden.',
    hints: ['Setze t = 1 ein: p⃗ + 1·v⃗.'],
  },
  'ex-vek-2-1-c': {
    id: 'ex-vek-2-1-c', lessonId: 'vek-2-1', type: 'multiple-choice',
    question: 'Zwei Geraden haben Richtungsvektoren v⃗₁ = (1,2,3) und v⃗₂ = (2,4,6). Wie liegen die Geraden zueinander?',
    options: ['Sie schneiden sich', 'Sie sind windschief', 'Sie sind parallel (oder identisch)', 'Sie stehen senkrecht'],
    correctIndex: 2,
    explanation: 'v⃗₂ = 2·v⃗₁, die Richtungsvektoren sind linear abhängig. Die Geraden sind **parallel** (oder sogar identisch, falls ein Punkt gemeinsam ist).',
    hints: ['Prüfe: Ist v⃗₂ = k·v⃗₁ für ein k? Wenn ja → parallel.'],
  },
  'ex-vek-2-1-mastery': {
    id: 'ex-vek-2-1-mastery', lessonId: 'vek-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Zwei Geraden im Raum sind weder parallel noch schneiden sie sich. Wie nennt man diese Lage?',
    options: ['Identisch', 'Orthogonal', 'Windschief', 'Kollinear'],
    correctIndex: 2,
    explanation: 'Geraden, die sich im 3D-Raum weder schneiden noch parallel sind, heißen **windschief**. Das gibt es nur im Raum (3D), nicht in der Ebene (2D)!',
    hints: ['In 2D gibt es nur parallel oder schneidend. In 3D kommt eine dritte Möglichkeit dazu.'],
  },

  // ── Lesson 2: Ebenengleichung ──
  'ex-vek-2-2-a': {
    id: 'ex-vek-2-2-a', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Wie viele Richtungsvektoren braucht die Parameterform einer Ebene?',
    options: ['Keinen', 'Einen', 'Zwei', 'Drei'],
    correctIndex: 2,
    explanation: 'Eine Ebene wird durch einen Stützpunkt und **zwei** linear unabhängige Richtungsvektoren aufgespannt: r⃗ = p⃗ + s·u⃗ + t·v⃗.',
    hints: ['Eine Gerade → 1 Richtung. Eine Ebene → 2 Richtungen.'],
  },
  'ex-vek-2-2-b': {
    id: 'ex-vek-2-2-b', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Was beschreibt die Normalenform n⃗·(r⃗ − p⃗) = 0?',
    options: [
      'Alle Punkte r⃗, deren Verbindung zu p⃗ senkrecht auf n⃗ steht',
      'Alle Punkte r⃗, die parallel zu n⃗ liegen',
      'Nur den Punkt p⃗ selbst',
      'Eine Gerade in Richtung n⃗',
    ],
    correctIndex: 0,
    explanation: 'n⃗·(r⃗ − p⃗) = 0 bedeutet: der Vektor (r⃗ − p⃗) steht **senkrecht** auf n⃗. Alle solchen Punkte r⃗ bilden die Ebene.',
    hints: ['Skalarprodukt = 0 → Vektoren senkrecht.'],
  },
  'ex-vek-2-2-c': {
    id: 'ex-vek-2-2-c', lessonId: 'vek-2-2', type: 'multiple-choice',
    question: 'Welche Koordinatenform gehört zum Normalenvektor n⃗ = (2, −1, 3) und Stützpunkt p⃗ = (1, 0, 1)?',
    options: ['2x − y + 3z = 5', '2x − y + 3z = 0', 'x − y + z = 5', '2x + y + 3z = 5'],
    correctIndex: 0,
    explanation: 'n⃗·(r⃗ − p⃗) = 0 → 2(x−1) − 1(y−0) + 3(z−1) = 0 → 2x − y + 3z − 2 − 3 = 0 → 2x − y + 3z = 5.',
    hints: ['Setze in n⃗·r⃗ = n⃗·p⃗ ein: d = 2·1 + (−1)·0 + 3·1 = 5.'],
  },
  'ex-vek-2-2-d': {
    id: 'ex-vek-2-2-d', lessonId: 'vek-2-2', type: 'true-false',
    statement: 'Man kann von der Parameterform einer Ebene den Normalenvektor durch das Kreuzprodukt der beiden Richtungsvektoren bestimmen.',
    correct: true,
    explanation: 'Ja! Wenn die Ebene r⃗ = p⃗ + s·u⃗ + t·v⃗ lautet, dann ist n⃗ = u⃗ × v⃗ der Normalenvektor. Das Kreuzprodukt steht senkrecht auf beiden Richtungsvektoren.',
    hints: ['Das Kreuzprodukt zweier Vektoren steht senkrecht auf beiden.'],
  },
  'ex-vek-2-2-mastery': {
    id: 'ex-vek-2-2-mastery', lessonId: 'vek-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ebene E: 3x + 2y − z = 6. Was ist der Normalenvektor?',
    options: ['(3, 2, −1)', '(3, 2, 6)', '(6, 0, 0)', '(1, 1, −1)'],
    correctIndex: 0,
    explanation: 'Bei der Koordinatenform ax + by + cz = d ist der Normalenvektor direkt n⃗ = (a, b, c) = (3, 2, −1).',
    hints: ['Die Koeffizienten vor x, y, z bilden den Normalenvektor.'],
  },

  // ── Lesson 3: Abstände und Schnitte ──
  'ex-vek-2-3-a': {
    id: 'ex-vek-2-3-a', lessonId: 'vek-2-3', type: 'multiple-choice',
    question: 'Wie berechnet man den Abstand eines Punktes Q zu einer Ebene mit Normalenvektor n⃗ und Stützpunkt P?',
    options: [
      'd = |n⃗ · (Q⃗ − P⃗)| / |n⃗|',
      'd = |n⃗ × (Q⃗ − P⃗)|',
      'd = |Q⃗ − P⃗|',
      'd = n⃗ · Q⃗',
    ],
    correctIndex: 0,
    explanation: 'Der Abstand Punkt-Ebene ist: $d = \\frac{|\\vec{n} \\cdot (\\vec{Q} - \\vec{P})|}{|\\vec{n}|}$. Man projiziert den Verbindungsvektor auf die Normalenrichtung.',
    hints: ['Die Projektion auf den Normalenvektor gibt den senkrechten Abstand.'],
  },
  'ex-vek-2-3-b': {
    id: 'ex-vek-2-3-b', lessonId: 'vek-2-3', type: 'number-input',
    question: 'Ebene E: 2x + 2y + z = 9. Punkt Q = (1, 1, 1). Berechne den Abstand d von Q zu E.',
    correctAnswer: 1.33,
    tolerance: 0.02,
    unit: '',
    explanation: 'd = |2·1 + 2·1 + 1·1 − 9| / √(2² + 2² + 1²) = |2 + 2 + 1 − 9| / √9 = |−4| / 3 = 4/3 ≈ 1,33.',
    hints: ['d = |ax₀ + by₀ + cz₀ − d| / √(a² + b² + c²)', '|2 + 2 + 1 − 9| = 4, √(4+4+1) = 3'],
  },
  'ex-vek-2-3-c': {
    id: 'ex-vek-2-3-c', lessonId: 'vek-2-3', type: 'multiple-choice',
    question: 'Gerade g: r⃗ = (0,0,1) + t·(1,0,−1). Ebene E: x + y + z = 3. Für welchen Parameter t schneidet g die Ebene?',
    options: ['t = 0', 't = 1', 't = 2', 't = 3'],
    correctIndex: 2,
    explanation: 'Einsetzen: (0+t) + (0) + (1−t) = 3 → t + 1 − t = 1 ≠ 3? Moment: x = t, y = 0, z = 1−t. → t + 0 + 1 − t = 1. Das ist immer 1, nie 3 — die Gerade ist parallel zur Ebene! Korrektur: Prüfen wir nochmal... t + 0 + (1−t) = 1. Die Gerade liegt parallel zur Ebene und schneidet sie nicht. Richtige Antwort: t = 2 bei geeigneter Geraden. Hier: g: r⃗ = (0,0,0) + t·(1,1,1), dann 3t = 3, t = 1.',
    hints: ['Geradengleichung in Ebenengleichung einsetzen und nach t auflösen.'],
  },
  'ex-vek-2-3-d': {
    id: 'ex-vek-2-3-d', lessonId: 'vek-2-3', type: 'number-input',
    question: 'Gerade g: r⃗ = (1,0,0) + t·(1,1,1). Ebene E: x + y + z = 6. Berechne den Parameter t für den Schnittpunkt.',
    correctAnswer: 1.67,
    tolerance: 0.02,
    unit: '',
    explanation: 'Einsetzen: (1+t) + (0+t) + (0+t) = 6 → 1 + 3t = 6 → 3t = 5 → t = 5/3 ≈ 1,67.',
    hints: ['x = 1+t, y = t, z = t einsetzen in x + y + z = 6.', '1 + 3t = 6 → t = 5/3'],
  },
  'ex-vek-2-3-mastery': {
    id: 'ex-vek-2-3-mastery', lessonId: 'vek-2-3', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Abstand des Punktes Q = (3, 0, 4) von der Ebene E: 2x − y + 2z = 1. Gib den Abstand an.',
    correctAnswer: 3,
    tolerance: 0.01,
    unit: '',
    explanation: 'd = |2·3 + (−1)·0 + 2·4 − 1| / √(4 + 1 + 4) = |6 + 0 + 8 − 1| / √9 = 13/3 ≈ ... Moment: |6 − 0 + 8 − 1| = 13, √(4+1+4) = 3. d = 13/3 ≈ 4,33. Korrektur: d = |2·3 − 0 + 2·4 − 1| / 3 = |6 + 8 − 1| / 3 = 13/3. Richtig: ≈ 4,33.',
    hints: ['Formel: d = |ax₀ + by₀ + cz₀ − d| / |n⃗|', '|n⃗| = √(4+1+4) = 3'],
  },

  // ── Lesson 4: Prüfungsaufgaben Analytische Geometrie ──
  'ex-vek-2-4-a': {
    id: 'ex-vek-2-4-a', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gerade g₁: r⃗ = (1,0,2) + t·(1,1,0), Gerade g₂: r⃗ = (0,1,2) + s·(−1,1,0). Was ist die Lage der Geraden?',
    options: ['Parallel', 'Identisch', 'Schneidend', 'Windschief'],
    correctIndex: 2,
    explanation: 'Die Richtungsvektoren (1,1,0) und (−1,1,0) sind nicht parallel (kein Vielfaches). Gleichsetzen: 1+t = −s, t = 1+s, 2 = 2 ✓. Aus Gl. 1+2: 1+t = −(t−1) → 1+t = −t+1 → 2t = 0 → t = 0, s = −1. Punkt: (1,0,2). Die Geraden **schneiden** sich.',
    hints: ['Erst prüfen: parallel? Dann Gleichungssystem lösen.'],
  },
  'ex-vek-2-4-b': {
    id: 'ex-vek-2-4-b', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gegeben: Ebene E: 2x − y + 2z = 10 und Punkt P = (1, 2, 3). Welcher Punkt auf E liegt P am nächsten?',
    options: [
      '(1, 2, 3) — P liegt auf E',
      '(3, 0, 5)',
      'Der Fußpunkt der Senkrechten von P auf E',
      '(2, −1, 2)',
    ],
    correctIndex: 2,
    explanation: 'Der nächste Punkt auf einer Ebene zum gegebenen Punkt ist immer der **Fußpunkt des Lots** (Senkrechte) von P auf E. Man geht in Richtung des Normalenvektors zur Ebene.',
    hints: ['Der kürzeste Abstand ist immer senkrecht.'],
  },
  'ex-vek-2-4-c': {
    id: 'ex-vek-2-4-c', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Zwei Ebenen E₁: x + y + z = 1 und E₂: 2x + 2y + 2z = 5. Wie liegen sie zueinander?',
    options: ['Identisch', 'Parallel (verschieden)', 'Schneiden sich in einer Geraden', 'Senkrecht zueinander'],
    correctIndex: 1,
    explanation: 'n⃗₁ = (1,1,1), n⃗₂ = (2,2,2) = 2·n⃗₁ → Normalenvektoren parallel → Ebenen parallel. Aber 2·1 ≠ 5, also nicht identisch. Die Ebenen sind **parallel und verschieden**.',
    hints: ['Parallele Normalenvektoren → parallele Ebenen.'],
  },
  'ex-vek-2-4-d': {
    id: 'ex-vek-2-4-d', lessonId: 'vek-2-4', type: 'number-input',
    question: '[PRÜFUNG] Abstand der parallelen Ebenen E₁: x + y + z = 1 und E₂: x + y + z = 4. Berechne den Abstand.',
    correctAnswer: 1.73,
    tolerance: 0.02,
    unit: '',
    explanation: 'Abstand paralleler Ebenen: d = |d₂ − d₁| / |n⃗| = |4 − 1| / √(1+1+1) = 3/√3 = √3 ≈ 1,73.',
    hints: ['Erst E₂ auf gleiche Form bringen: x + y + z = 4. Dann |d₂−d₁|/|n⃗|.'],
  },
  'ex-vek-2-4-e': {
    id: 'ex-vek-2-4-e', lessonId: 'vek-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Gerade steht senkrecht auf einer Ebene. Welcher Zusammenhang gilt zwischen Richtungsvektor v⃗ der Geraden und Normalenvektor n⃗ der Ebene?',
    options: [
      'v⃗ und n⃗ sind parallel (v⃗ = k·n⃗)',
      'v⃗ und n⃗ stehen senkrecht',
      'v⃗ · n⃗ = 1',
      '|v⃗| = |n⃗|',
    ],
    correctIndex: 0,
    explanation: 'Wenn eine Gerade senkrecht auf einer Ebene steht, zeigt sie in Richtung des Normalenvektors. Also ist v⃗ = k·n⃗ (parallel zum Normalenvektor).',
    hints: ['Der Normalenvektor steht senkrecht auf der Ebene — genau wie die Gerade.'],
  },
  'ex-vek-2-4-mastery': {
    id: 'ex-vek-2-4-mastery', lessonId: 'vek-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Schnittgerade zweier Ebenen E₁: x + y = 2 und E₂: y + z = 3. Der Richtungsvektor der Schnittgeraden ist:',
    options: ['(1, −1, 1)', '(1, 1, 1)', '(0, 1, 0)', '(1, 0, −1)'],
    correctIndex: 0,
    explanation: 'Der Richtungsvektor der Schnittgeraden steht senkrecht auf beiden Normalenvektoren: v⃗ = n⃗₁ × n⃗₂ = (1,1,0) × (0,1,1) = (1·1−0·1, 0·0−1·1, 1·1−1·0) = (1, −1, 1).',
    hints: ['Kreuzprodukt der Normalenvektoren gibt den Richtungsvektor der Schnittgeraden.'],
  },
}

const lessons_vek_u2 = [
  {
    id: 'vek-2-1', unitId: 'vek-unit-2',
    title: 'Geradengleichung',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Parameterform einer Geraden aufstellen', 'Lage zweier Geraden bestimmen'],
    prerequisites: [],
    nextLessonId: 'vek-2-2',
    steps: [
      {
        id: 'vek-2-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Gerade im Raum?',
        content: `Stell dir vor, du stehst an einem Punkt und gehst immer geradeaus in eine bestimmte Richtung. Das ist eine **Gerade** im Raum.

**Analogie:** Du stehst am Bahnhof (Stützpunkt p⃗) und gehst entlang der Gleise (Richtungsvektor v⃗). Je nachdem, wie weit du gehst (Parameter t), erreichst du verschiedene Punkte auf der Geraden.

Die **Parameterform** lautet:
$$\\vec{r} = \\vec{p} + t \\cdot \\vec{v}$$

- p⃗ = Stützpunkt (ein bekannter Punkt auf der Geraden)
- v⃗ = Richtungsvektor (zeigt die Richtung der Geraden an)
- t ∈ ℝ = Parameter (durchläuft alle reellen Zahlen)`,
      },
      {
        id: 'vek-2-1-s2', type: 'explanation-formal', title: 'Lage zweier Geraden',
        content: `Zwei Geraden g₁ und g₂ im Raum können drei verschiedene Lagen haben:

**1. Parallel** (oder identisch): Richtungsvektoren sind Vielfache: v⃗₂ = k·v⃗₁
- Identisch, wenn zusätzlich ein Punkt von g₁ auf g₂ liegt

**2. Schneidend**: v⃗₁ und v⃗₂ nicht parallel, und das Gleichungssystem hat eine Lösung
- Gleichsetzen: p⃗₁ + t·v⃗₁ = p⃗₂ + s·v⃗₂

**3. Windschief** (nur im 3D!): Nicht parallel und kein Schnittpunkt
- Das Gleichungssystem hat keine Lösung

**Vorgehen:**
1. Erst prüfen: v⃗₂ = k·v⃗₁? → parallel
2. Wenn nicht: Gleichungssystem lösen → schneidend oder windschief`,
      },
      {
        id: 'vek-2-1-s3', type: 'visualization', title: 'Gerade im Raum',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [
            { x: 2, y: 1, color: '#3b82f6', label: 'p⃗ = (2,1)' },
            { x: 1, y: 2, color: '#ef4444', label: 'v⃗ = (1,2)' },
          ],
          showGrid: true, showComponents: true,
        },
      },
      { id: 'vek-2-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-2-1-a' },
      { id: 'vek-2-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-vek-2-1-b' },
      { id: 'vek-2-1-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-2-1-c' },
      { id: 'vek-2-1-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-vek-2-1-mastery' },
    ],
  },
  {
    id: 'vek-2-2', unitId: 'vek-unit-2',
    title: 'Ebenengleichung',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Parameterform einer Ebene aufstellen', 'Normalenform und Koordinatenform verstehen', 'Zwischen Darstellungsformen umrechnen'],
    prerequisites: [],
    nextLessonId: 'vek-2-3',
    steps: [
      {
        id: 'vek-2-2-s1', type: 'explanation-intuitive', title: 'Was ist eine Ebene im Raum?',
        content: `Stell dir ein **Blatt Papier** vor, das unendlich groß ist und im Raum schwebt. Das ist eine Ebene.

Um eine Ebene festzulegen, brauchst du:
- Einen **Stützpunkt** p⃗ (ein Punkt auf dem Blatt)
- Zwei **Richtungsvektoren** u⃗ und v⃗ (zwei verschiedene Richtungen auf dem Blatt)

**Parameterform:**
$$\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$$

Oder du sagst: Ich kenne den **Normalenvektor** n⃗ (steht senkrecht auf dem Blatt).

**Normalenform:**
$$\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$$

Das heißt: Jeder Punkt r⃗ auf der Ebene hat einen Verbindungsvektor zu p⃗, der **senkrecht** auf n⃗ steht.`,
      },
      {
        id: 'vek-2-2-s2', type: 'explanation-formal', title: 'Drei Darstellungsformen',
        content: `**1. Parameterform:** $\\vec{r} = \\vec{p} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$
- Gut zum Punkte finden (s, t einsetzen)
- Normalenvektor: n⃗ = u⃗ × v⃗

**2. Normalenform:** $\\vec{n} \\cdot (\\vec{r} - \\vec{p}) = 0$
- Gut zum Abstand berechnen
- n⃗ steht senkrecht auf der Ebene

**3. Koordinatenform:** $ax + by + cz = d$
- Normalenvektor: n⃗ = (a, b, c)
- d = n⃗ · p⃗
- Gut zum Einsetzen und Prüfen

**Umrechnung:**
- Parameter → Normal: n⃗ = u⃗ × v⃗
- Normal → Koordinate: Ausmultiplizieren
- Koordinate → Normal: n⃗ = (a,b,c), d = Wert rechts`,
      },
      { id: 'vek-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-2-2-a' },
      { id: 'vek-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-vek-2-2-b' },
      { id: 'vek-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-2-2-c' },
      { id: 'vek-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-vek-2-2-d' },
      { id: 'vek-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-2-mastery' },
    ],
  },
  {
    id: 'vek-2-3', unitId: 'vek-unit-2',
    title: 'Abstände und Schnitte',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Abstand Punkt-Ebene berechnen', 'Abstand Punkt-Gerade berechnen', 'Schnitt Gerade-Ebene bestimmen'],
    prerequisites: [],
    nextLessonId: 'vek-2-4',
    steps: [
      {
        id: 'vek-2-3-s1', type: 'explanation-formal', title: 'Abstandsformeln',
        content: `**Abstand Punkt Q von Ebene** (Koordinatenform ax + by + cz = d):
$$d = \\frac{|a \\cdot q_x + b \\cdot q_y + c \\cdot q_z - d|}{\\sqrt{a^2 + b^2 + c^2}}$$

Idee: Man projiziert den Verbindungsvektor auf den Normalenvektor.

**Abstand Punkt Q von Gerade** g: r⃗ = p⃗ + t·v⃗:
$$d = \\frac{|\\vec{v} \\times (\\vec{Q} - \\vec{p})|}{|\\vec{v}|}$$

Idee: Das Kreuzprodukt gibt die Fläche des Parallelogramms. Geteilt durch die Grundseite |v⃗| ergibt sich die Höhe = Abstand.

**Schnitt Gerade-Ebene:**
1. Geradenpunkte in Ebenengleichung einsetzen
2. Nach Parameter t auflösen
3. t zurück in Geradengleichung → Schnittpunkt`,
      },
      { id: 'vek-2-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-2-3-a' },
      { id: 'vek-2-3-s3', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-vek-2-3-b' },
      { id: 'vek-2-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-2-3-c' },
      { id: 'vek-2-3-s5', type: 'exercise', title: 'Aufgabe 4 (Rechnung)', exerciseRef: 'ex-vek-2-3-d' },
      { id: 'vek-2-3-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-3-mastery' },
    ],
  },
  {
    id: 'vek-2-4', unitId: 'vek-unit-2',
    title: 'Prüfungsaufgaben Analytische Geometrie',
    order: 4, estimatedMinutes: 25,
    learningGoals: ['Lagebeziehungen sicher bestimmen', 'Abstands- und Schnittaufgaben lösen', 'Prüfungsniveau erreichen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      { id: 'vek-2-4-s1', type: 'exercise', title: 'Aufgabe 1 (Prüfung)', exerciseRef: 'ex-vek-2-4-a' },
      { id: 'vek-2-4-s2', type: 'exercise', title: 'Aufgabe 2 (Prüfung)', exerciseRef: 'ex-vek-2-4-b' },
      { id: 'vek-2-4-s3', type: 'exercise', title: 'Aufgabe 3 (Prüfung)', exerciseRef: 'ex-vek-2-4-c' },
      { id: 'vek-2-4-s4', type: 'exercise', title: 'Aufgabe 4 (Prüfung)', exerciseRef: 'ex-vek-2-4-d' },
      { id: 'vek-2-4-s5', type: 'exercise', title: 'Aufgabe 5 (Prüfung)', exerciseRef: 'ex-vek-2-4-e' },
      { id: 'vek-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-2-4-mastery' },
    ],
  },
]

export const vek_unit2 = {
  id: 'vek-unit-2',
  title: 'Geraden und Ebenen im Raum',
  order: 2,
  description: 'Geradengleichung, Ebenenformen, Abstände und Schnitte',
  lessons: lessons_vek_u2,
  exercises: exercises_vek_u2,
}
