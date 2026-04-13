// ── Vektoren Unit 1: Vektorrechnung Grundlagen ────────────────────────────────

export const exercises_vek_u1 = {
  'ex-vek-1-1-a': {
    id: 'ex-vek-1-1-a', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: 'Was unterscheidet einen Vektor von einer Zahl (Skalar)?',
    options: ['Vektoren sind immer größer', 'Vektoren haben Betrag UND Richtung', 'Vektoren können nicht addiert werden', 'Vektoren sind dimensionslos'],
    correctIndex: 1,
    explanation: 'Ein Vektor hat sowohl einen **Betrag** (Länge) als auch eine **Richtung**. Ein Skalar hat nur einen Betrag. Beispiel: "50 km/h" ist ein Skalar, "50 km/h nach Norden" ist ein Vektor.',
    hints: ['Kraft, Geschwindigkeit, Verschiebung = Vektoren. Masse, Temperatur = Skalare.'],
  },
  'ex-vek-1-1-b': {
    id: 'ex-vek-1-1-b', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: 'Gegeben: a⃗ = (3, 4). Was ist der Betrag |a⃗|?',
    options: ['7', '5', '3,5', '12'],
    correctIndex: 1,
    explanation: '|a⃗| = √(3² + 4²) = √(9 + 16) = √25 = 5. Das 3-4-5 Dreieck!',
    hints: ['Betrag: |a⃗| = √(ax² + ay²)', '3² + 4² = 9 + 16 = 25'],
  },
  'ex-vek-1-1-c': {
    id: 'ex-vek-1-1-c', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: 'a⃗ = (2, 3), b⃗ = (1, −1). Was ist a⃗ + b⃗?',
    options: ['(3, 2)', '(1, 4)', '(2, −3)', '(3, 4)'],
    correctIndex: 0,
    explanation: 'Vektoraddition komponentenweise: a⃗ + b⃗ = (2+1, 3+(−1)) = (3, 2).',
    hints: ['Vektoren komponentenweise addieren: (ax+bx, ay+by)'],
  },
  'ex-vek-1-1-mastery': {
    id: 'ex-vek-1-1-mastery', lessonId: 'vek-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'a⃗ = (−2, 5). Was ist 3·a⃗?',
    options: ['(−6, 15)', '(1, 8)', '(−5, 2)', '(6, 15)'],
    correctIndex: 0,
    explanation: 'Skalarmultiplikation: 3·a⃗ = (3·(−2), 3·5) = (−6, 15).',
    hints: ['Jeden Komponent mit dem Skalar multiplizieren.'],
  },

  'ex-vek-1-2-a': {
    id: 'ex-vek-1-2-a', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: 'Das Skalarprodukt a⃗·b⃗ = (2,3)·(1,−2) ist:',
    options: ['(2,−6)', '−4', '8', '5'],
    correctIndex: 1,
    explanation: 'a⃗·b⃗ = ax·bx + ay·by = 2·1 + 3·(−2) = 2 − 6 = −4. Das Ergebnis ist ein Skalar!',
    hints: ['Skalarprodukt = Zahl, kein Vektor. a⃗·b⃗ = ax·bx + ay·by'],
  },
  'ex-vek-1-2-b': {
    id: 'ex-vek-1-2-b', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: 'a⃗·b⃗ = |a⃗|·|b⃗|·cos(φ). Was bedeutet a⃗·b⃗ = 0?',
    options: ['Die Vektoren haben gleiche Länge', 'Die Vektoren stehen senkrecht aufeinander (φ = 90°)', 'Die Vektoren zeigen in die gleiche Richtung', 'Einer der Vektoren ist der Nullvektor'],
    correctIndex: 1,
    explanation: 'a⃗·b⃗ = |a⃗|·|b⃗|·cos(90°) = 0, weil cos(90°) = 0. Skalarprodukt = 0 ↔ Vektoren senkrecht.',
    hints: ['cos(90°) = 0. Wenn das Produkt null ist, ist der Winkel 90°.'],
  },
  'ex-vek-1-2-c': {
    id: 'ex-vek-1-2-c', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne den Winkel zwischen a⃗=(1,0) und b⃗=(1,1).',
    options: ['0°', '30°', '45°', '90°'],
    correctIndex: 2,
    explanation: 'cos(φ) = a⃗·b⃗ / (|a⃗|·|b⃗|) = (1·1+0·1)/(1·√2) = 1/√2. φ = arccos(1/√2) = 45°.',
    hints: ['a⃗·b⃗ = 1·1 + 0·1 = 1. |a⃗| = 1, |b⃗| = √2.', 'cos(φ) = 1/√2 → φ = 45°'],
  },
  'ex-vek-1-2-mastery': {
    id: 'ex-vek-1-2-mastery', lessonId: 'vek-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Arbeit W = F⃗·s⃗ bei F⃗=(10,0)N und s⃗=(3,4)m ist:',
    options: ['70 J', '50 J', '30 J', '0 J'],
    correctIndex: 2,
    explanation: 'W = F⃗·s⃗ = 10·3 + 0·4 = 30 J. Nur die horizontale Kraftkomponente leistet Arbeit entlang der horizontalen Verschiebung.',
    hints: ['Skalarprodukt: F⃗·s⃗ = Fx·sx + Fy·sy'],
  },

  'ex-vek-1-3-a': {
    id: 'ex-vek-1-3-a', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: 'Das Kreuzprodukt a⃗ × b⃗ ergibt:',
    options: ['Eine Zahl', 'Einen Vektor senkrecht zu a⃗ und b⃗', 'Einen parallelen Vektor', 'Immer den Nullvektor'],
    correctIndex: 1,
    explanation: 'Das Kreuzprodukt a⃗ × b⃗ ist ein Vektor, der **senkrecht** auf beiden Ausgangsvektoren steht. Wichtig in 3D!',
    hints: ['Kreuzprodukt → Normalvektor → Steht senkrecht auf der Ebene, die a⃗ und b⃗ aufspannen.'],
  },
  'ex-vek-1-3-b': {
    id: 'ex-vek-1-3-b', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: '|a⃗ × b⃗| = |a⃗|·|b⃗|·sin(φ). Was ist |a⃗ × b⃗| wenn a⃗ ∥ b⃗ (parallel)?',
    options: ['|a⃗|·|b⃗|', '1', '0', '|a⃗| + |b⃗|'],
    correctIndex: 2,
    explanation: 'Wenn a⃗ und b⃗ parallel sind, gilt φ = 0° → sin(0°) = 0 → |a⃗ × b⃗| = 0.',
    hints: ['φ = 0° → sin(0°) = 0'],
  },
  'ex-vek-1-3-mastery': {
    id: 'ex-vek-1-3-mastery', lessonId: 'vek-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Das Kreuzprodukt è₁ × è₂ (Einheitsvektoren in x- und y-Richtung) ergibt:',
    options: ['è₁', '−è₃', 'è₃', '0'],
    correctIndex: 2,
    explanation: 'è₁ × è₂ = è₃ (z-Richtung, nach Rechte-Hand-Regel). Zyklisch: è₁×è₂=è₃, è₂×è₃=è₁, è₃×è₁=è₂.',
    hints: ['Rechte-Hand-Regel: Finger von è₁ nach è₂ krümmen → Daumen zeigt in è₃-Richtung.'],
  },

  'ex-vek-1-4-a': {
    id: 'ex-vek-1-4-a', lessonId: 'vek-1-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Drei Kräfte F⃗₁=(10,0)N, F⃗₂=(0,5)N, F⃗₃=(−3,−2)N. Resultierende R⃗ =',
    options: ['(7, 3)', '(7, −3)', '(13, 7)', '(−7, −3)'],
    correctIndex: 0,
    explanation: 'R⃗ = F⃗₁ + F⃗₂ + F⃗₃ = (10+0+(−3), 0+5+(−2)) = (7, 3) N.',
    hints: ['Komponentenweise addieren: Rx = F1x+F2x+F3x, Ry = F1y+F2y+F3y'],
  },
  'ex-vek-1-4-b': {
    id: 'ex-vek-1-4-b', lessonId: 'vek-1-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gleichgewicht: Eine Masse hängt an zwei Seilen mit Kräften F⃗₁=(−F₁·sin30°, F₁·cos30°) und F⃗₂=(F₂·sin45°, F₂·cos45°). Damit Gleichgewicht gilt: ΣFx = 0. Was folgt daraus?',
    options: [
      'F₁·sin30° = F₂·sin45°',
      'F₁·cos30° = F₂·cos45°',
      'F₁ = F₂',
      'F₁·sin30° + F₂·sin45° = 0',
    ],
    correctIndex: 0,
    explanation: 'ΣFx = 0: −F₁·sin30° + F₂·sin45° = 0 → F₁·sin30° = F₂·sin45°.',
    hints: ['Gleichgewicht: Summe aller Kräfte = 0 in x- und y-Richtung.'],
  },
  'ex-vek-1-4-mastery': {
    id: 'ex-vek-1-4-mastery', lessonId: 'vek-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Einheitsvektor hat Betrag … und wird berechnet durch …',
    options: [
      'Betrag = 1; ê = a⃗ / |a⃗|',
      'Betrag = 0; ê = a⃗ · |a⃗|',
      'Betrag = 1; ê = |a⃗| · a⃗',
      'Betrag ≠ 1; ê = a⃗ − |a⃗|',
    ],
    correctIndex: 0,
    explanation: 'Ein Einheitsvektor hat Betrag 1 und zeigt in die Richtung von a⃗. Berechnung: ê = a⃗ / |a⃗| (Division durch den Betrag normiert den Vektor).',
    hints: ['Normieren = durch den eigenen Betrag dividieren.'],
  },
}

const lessons_vek_u1 = [
  {
    id: 'vek-1-1', unitId: 'vek-unit-1',
    title: 'Vektoren — Grundbegriffe',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Vektor vs. Skalar unterscheiden', 'Vektoraddition und Skalarmultiplikation'],
    prerequisites: [],
    nextLessonId: 'vek-1-2',
    steps: [
      {
        id: 'vek-1-1-s1', type: 'explanation-intuitive', title: 'Was ist ein Vektor?',
        content: `Ein **Vektor** ist eine gerichtete Größe — er hat Betrag (Länge) UND Richtung.

**Beispiele:**
- Kraft: 100 N nach links → Vektor
- Geschwindigkeit: 120 km/h in Richtung Norden → Vektor
- Temperatur: 20°C → Skalar (keine Richtung)

In der Technik werden Vektoren als Pfeile dargestellt. In 2D schreibt man a⃗ = (ax, ay), in 3D: a⃗ = (ax, ay, az).

**Betrag** (Länge): $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$`,
      },
      {
        id: 'vek-1-1-s2', type: 'visualization', title: 'Vektoren grafisch',
        visualizationId: 'vector-diagram',
        params: { vectors: [{ x: 3, y: 4, color: '#3b82f6', label: 'a⃗=(3,4)' }], showGrid: true, showComponents: true },
      },
      { id: 'vek-1-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-1-1-a' },
      { id: 'vek-1-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-vek-1-1-b' },
      { id: 'vek-1-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-vek-1-1-c' },
      { id: 'vek-1-1-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-vek-1-1-mastery' },
    ],
  },
  {
    id: 'vek-1-2', unitId: 'vek-unit-1',
    title: 'Skalarprodukt',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Skalarprodukt berechnen', 'Winkel zwischen Vektoren bestimmen'],
    prerequisites: [],
    nextLessonId: 'vek-1-3',
    steps: [
      {
        id: 'vek-1-2-s1', type: 'explanation-formal', title: 'Skalarprodukt — Definition',
        content: `Das **Skalarprodukt** (Dot Product) zweier Vektoren:

**Komponentenform:**
$$\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y + a_z b_z$$

**Geometrische Form:**
$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\varphi)$$

Das Ergebnis ist eine **Zahl** (Skalar)!

**Wichtige Anwendungen:**
- Winkel zwischen Vektoren: $\\cos(\\varphi) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$
- Arbeit: $W = \\vec{F} \\cdot \\vec{s}$
- Orthogonalität prüfen: a⃗ ⊥ b⃗ ↔ a⃗·b⃗ = 0`,
      },
      { id: 'vek-1-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-1-2-a' },
      { id: 'vek-1-2-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-vek-1-2-b' },
      { id: 'vek-1-2-s4', type: 'exercise', title: 'Aufgabe 3 (Prüfung)', exerciseRef: 'ex-vek-1-2-c' },
      { id: 'vek-1-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-2-mastery' },
    ],
  },
  {
    id: 'vek-1-3', unitId: 'vek-unit-1',
    title: 'Kreuzprodukt',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Kreuzprodukt verstehen', 'Normalvektor bestimmen'],
    prerequisites: [],
    nextLessonId: 'vek-1-4',
    steps: [
      {
        id: 'vek-1-3-s1', type: 'explanation-formal', title: 'Kreuzprodukt (Vektorprodukt)',
        content: `Das **Kreuzprodukt** (nur im 3D!) ergibt einen Vektor **senkrecht** zu beiden:

$$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_y b_z - a_z b_y \\\\ a_z b_x - a_x b_z \\\\ a_x b_y - a_y b_x \\end{pmatrix}$$

**Betrag:** $|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$

**Geometrisch:** Der Betrag = Fläche des von a⃗ und b⃗ aufgespannten Parallelogramms.

**Rechte-Hand-Regel:** Zeigefinger → a⃗, Mittelfinger → b⃗, Daumen → a⃗ × b⃗

**Anwendungen:** Drehmoment M⃗ = r⃗ × F⃗`,
      },
      { id: 'vek-1-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-vek-1-3-a' },
      { id: 'vek-1-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-vek-1-3-b' },
      { id: 'vek-1-3-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-3-mastery' },
    ],
  },
  {
    id: 'vek-1-4', unitId: 'vek-unit-1',
    title: 'Kräfte als Vektoren (Prüfung)',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Kräfte vektoriell addieren', 'Gleichgewichtsbedingungen aufstellen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-1-4-s1', type: 'explanation-intuitive', title: 'Kräfte im Maschinenbau',
        content: `In der Technischen Mechanik werden Kräfte immer als Vektoren behandelt.

**Gleichgewichtsbedingung (Statik):**
$$\\sum \\vec{F}_i = \\vec{0}$$

d.h. $\\sum F_{ix} = 0$ und $\\sum F_{iy} = 0$ (und $\\sum F_{iz} = 0$ im 3D)

**Kräftezerlegung:**
- Horizontal: $F_x = F \\cdot \\cos(\\alpha)$
- Vertikal: $F_y = F \\cdot \\sin(\\alpha)$

**Resultierende:** Addition aller Kräfte komponentenweise.`,
      },
      {
        id: 'vek-1-4-s2', type: 'visualization', title: 'Kräfteaddition',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [
            { x: 3, y: 0, color: '#3b82f6', label: 'F⃗₁' },
            { x: 0, y: 2, color: '#ef4444', label: 'F⃗₂' },
            { x: 3, y: 2, color: '#22c55e', label: 'R⃗' },
          ],
          showGrid: true, showSum: true,
        },
      },
      { id: 'vek-1-4-s3', type: 'exercise', title: 'Aufgabe 1 (Prüfung)', exerciseRef: 'ex-vek-1-4-a' },
      { id: 'vek-1-4-s4', type: 'exercise', title: 'Aufgabe 2 (Prüfung)', exerciseRef: 'ex-vek-1-4-b' },
      { id: 'vek-1-4-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-4-mastery' },
    ],
  },
]

export const vek_unit1 = {
  id: 'vek-unit-1',
  title: 'Vektorrechnung',
  order: 1,
  description: 'Grundlagen, Skalarprodukt, Kreuzprodukt und Kräfte als Vektoren',
  lessons: lessons_vek_u1,
  exercises: exercises_vek_u1,
}
