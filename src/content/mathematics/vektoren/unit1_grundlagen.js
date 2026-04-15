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
    question: 'Gegeben: $\\vec{a}$ = (3, 4). Was ist der Betrag |$\\vec{a}$|?',
    options: ['7', '5', '3,5', '12'],
    correctIndex: 1,
    explanation: '|$\\vec{a}$| = √(3² + 4²) = √(9 + 16) = √25 = 5. Das 3-4-5 Dreieck!',
    hints: ['Betrag: |$\\vec{a}$| = √(ax² + ay²)', '3² + 4² = 9 + 16 = 25'],
  },
  'ex-vek-1-1-c': {
    id: 'ex-vek-1-1-c', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: '$\\vec{a}$ = (2, 3), $\\vec{b}$ = (1, −1). Was ist $\\vec{a}$ + $\\vec{b}$?',
    options: ['(3, 2)', '(1, 4)', '(2, −3)', '(3, 4)'],
    correctIndex: 0,
    explanation: 'Vektoraddition komponentenweise: $\\vec{a}$ + $\\vec{b}$ = (2+1, 3+(−1)) = (3, 2).',
    hints: ['Vektoren komponentenweise addieren: (ax+bx, ay+by)'],
  },
  'ex-vek-1-1-mastery': {
    id: 'ex-vek-1-1-mastery', lessonId: 'vek-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '$\\vec{a}$ = (−2, 5). Was ist 3·$\\vec{a}$?',
    options: ['(−6, 15)', '(1, 8)', '(−5, 2)', '(6, 15)'],
    correctIndex: 0,
    explanation: 'Skalarmultiplikation: 3·$\\vec{a}$ = (3·(−2), 3·5) = (−6, 15).',
    hints: ['Jeden Komponent mit dem Skalar multiplizieren.'],
  },

  'ex-vek-1-2-a': {
    id: 'ex-vek-1-2-a', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: 'Das Skalarprodukt $\\vec{a}$·$\\vec{b}$ = (2,3)·(1,−2) ist:',
    options: ['(2,−6)', '−4', '8', '5'],
    correctIndex: 1,
    explanation: '$\\vec{a}$·$\\vec{b}$ = ax·bx + ay·by = 2·1 + 3·(−2) = 2 − 6 = −4. Das Ergebnis ist ein Skalar!',
    hints: ['Skalarprodukt = Zahl, kein Vektor. $\\vec{a}$·$\\vec{b}$ = ax·bx + ay·by'],
  },
  'ex-vek-1-2-b': {
    id: 'ex-vek-1-2-b', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: '$\\vec{a}$·$\\vec{b}$ = |$\\vec{a}$|·|$\\vec{b}$|·cos(φ). Was bedeutet $\\vec{a}$·$\\vec{b}$ = 0?',
    options: ['Die Vektoren haben gleiche Länge', 'Die Vektoren stehen senkrecht aufeinander (φ = 90°)', 'Die Vektoren zeigen in die gleiche Richtung', 'Einer der Vektoren ist der Nullvektor'],
    correctIndex: 1,
    explanation: '$\\vec{a}$·$\\vec{b}$ = |$\\vec{a}$|·|$\\vec{b}$|·cos(90°) = 0, weil cos(90°) = 0. Skalarprodukt = 0 ↔ Vektoren senkrecht.',
    hints: ['cos(90°) = 0. Wenn das Produkt null ist, ist der Winkel 90°.'],
  },
  'ex-vek-1-2-c': {
    id: 'ex-vek-1-2-c', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne den Winkel zwischen $\\vec{a}$=(1,0) und $\\vec{b}$=(1,1).',
    options: ['0°', '30°', '45°', '90°'],
    correctIndex: 2,
    explanation: 'cos(φ) = $\\vec{a}$·$\\vec{b}$ / (|$\\vec{a}$|·|$\\vec{b}$|) = (1·1+0·1)/(1·√2) = 1/√2. φ = arccos(1/√2) = 45°.',
    hints: ['$\\vec{a}$·$\\vec{b}$ = 1·1 + 0·1 = 1. |$\\vec{a}$| = 1, |$\\vec{b}$| = √2.', 'cos(φ) = 1/√2 → φ = 45°'],
  },
  'ex-vek-1-2-mastery': {
    id: 'ex-vek-1-2-mastery', lessonId: 'vek-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Arbeit W = $\\vec{F}$·$\\vec{s}$ bei $\\vec{F}$=(10,0)N und $\\vec{s}$=(3,4)m ist:',
    options: ['70 J', '50 J', '30 J', '0 J'],
    correctIndex: 2,
    explanation: 'W = $\\vec{F}$·$\\vec{s}$ = 10·3 + 0·4 = 30 J. Nur die horizontale Kraftkomponente leistet Arbeit entlang der horizontalen Verschiebung.',
    hints: ['Skalarprodukt: $\\vec{F}$·$\\vec{s}$ = Fx·sx + Fy·sy'],
  },

  'ex-vek-1-3-a': {
    id: 'ex-vek-1-3-a', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: 'Das Kreuzprodukt $\\vec{a}$ × $\\vec{b}$ ergibt:',
    options: ['Eine Zahl', 'Einen Vektor senkrecht zu $\\vec{a}$ und $\\vec{b}$', 'Einen parallelen Vektor', 'Immer den Nullvektor'],
    correctIndex: 1,
    explanation: 'Das Kreuzprodukt $\\vec{a}$ × $\\vec{b}$ ist ein Vektor, der **senkrecht** auf beiden Ausgangsvektoren steht. Wichtig in 3D!',
    hints: ['Kreuzprodukt → Normalvektor → Steht senkrecht auf der Ebene, die $\\vec{a}$ und $\\vec{b}$ aufspannen.'],
  },
  'ex-vek-1-3-b': {
    id: 'ex-vek-1-3-b', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: '|$\\vec{a}$ × $\\vec{b}$| = |$\\vec{a}$|·|$\\vec{b}$|·sin(φ). Was ist |$\\vec{a}$ × $\\vec{b}$| wenn $\\vec{a}$ ∥ $\\vec{b}$ (parallel)?',
    options: ['|$\\vec{a}$|·|$\\vec{b}$|', '1', '0', '|$\\vec{a}$| + |$\\vec{b}$|'],
    correctIndex: 2,
    explanation: 'Wenn $\\vec{a}$ und $\\vec{b}$ parallel sind, gilt φ = 0° → sin(0°) = 0 → |$\\vec{a}$ × $\\vec{b}$| = 0.',
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
    question: '[PRÜFUNG] Drei Kräfte $\\vec{F}$₁=(10,0)N, $\\vec{F}$₂=(0,5)N, $\\vec{F}$₃=(−3,−2)N. Resultierende $\\vec{R}$ =',
    options: ['(7, 3)', '(7, −3)', '(13, 7)', '(−7, −3)'],
    correctIndex: 0,
    explanation: '$\\vec{R}$ = $\\vec{F}$₁ + $\\vec{F}$₂ + $\\vec{F}$₃ = (10+0+(−3), 0+5+(−2)) = (7, 3) N.',
    hints: ['Komponentenweise addieren: Rx = F1x+F2x+F3x, Ry = F1y+F2y+F3y'],
  },
  'ex-vek-1-4-b': {
    id: 'ex-vek-1-4-b', lessonId: 'vek-1-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gleichgewicht: Eine Masse hängt an zwei Seilen mit Kräften $\\vec{F}$₁=(−F₁·sin30°, F₁·cos30°) und $\\vec{F}$₂=(F₂·sin45°, F₂·cos45°). Damit Gleichgewicht gilt: ΣFx = 0. Was folgt daraus?',
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
      'Betrag = 1; ê = $\\vec{a}$ / |$\\vec{a}$|',
      'Betrag = 0; ê = $\\vec{a}$ · |$\\vec{a}$|',
      'Betrag = 1; ê = |$\\vec{a}$| · $\\vec{a}$',
      'Betrag ≠ 1; ê = $\\vec{a}$ − |$\\vec{a}$|',
    ],
    correctIndex: 0,
    explanation: 'Ein Einheitsvektor hat Betrag 1 und zeigt in die Richtung von $\\vec{a}$. Berechnung: ê = $\\vec{a}$ / |$\\vec{a}$| (Division durch den Betrag normiert den Vektor).',
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

In der Technik werden Vektoren als Pfeile dargestellt. In 2D schreibt man $\\vec{a}$ = (ax, ay), in 3D: $\\vec{a}$ = (ax, ay, az).

**Betrag** (Länge): $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$`,
      },
      {
        id: 'vek-1-1-s2', type: 'visualization', title: 'Vektoren grafisch',
        visualizationId: 'vector-diagram',
        params: { vectors: [{ x: 3, y: 4, color: '#3b82f6', label: '$\\vec{a}$=(3,4)' }], showGrid: true, showComponents: true },
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
- Orthogonalität prüfen: $\\vec{a}$ ⊥ $\\vec{b}$ ↔ $\\vec{a}$·$\\vec{b}$ = 0`,
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

**Geometrisch:** Der Betrag = Fläche des von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms.

**Rechte-Hand-Regel:** Zeigefinger → $\\vec{a}$, Mittelfinger → $\\vec{b}$, Daumen → $\\vec{a}$ × $\\vec{b}$

**Anwendungen:** Drehmoment $\\vec{M}$ = $\\vec{r}$ × $\\vec{F}$`,
      },
      {
        id: 'vek-1-3-s-viz',
        type: 'visualization',
        title: '3D-Ansicht drehbar — Rechte-Hand-Regel live',
        visualizationId: 'vector-3d',
        params: {
          initialA: { x: 2, y: 0, z: 0 },
          initialB: { x: 0, y: 2, z: 0 },
          mode: 'cross',
        },
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
            { x: 3, y: 0, color: '#3b82f6', label: '$\\vec{F}$₁' },
            { x: 0, y: 2, color: '#ef4444', label: '$\\vec{F}$₂' },
            { x: 3, y: 2, color: '#22c55e', label: '$\\vec{R}$' },
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
