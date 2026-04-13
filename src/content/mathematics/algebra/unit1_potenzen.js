// ── Algebra Unit 1: Potenzen, Wurzeln & Logarithmen ──────────────────────────

export const exercises_alg_u1 = {
  'ex-alg-1-1-a': {
    id: 'ex-alg-1-1-a', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'x³ · x⁴ =',
    options: ['x⁷', 'x¹²', '2x⁷', 'x'],
    correctIndex: 0,
    explanation: 'Gleiche Basis: Exponenten addieren. x³ · x⁴ = x^(3+4) = x⁷.',
    hints: ['Potenzregel: xᵃ · xᵇ = x^(a+b)'],
  },
  'ex-alg-1-1-b': {
    id: 'ex-alg-1-1-b', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: '(x³)⁴ =',
    options: ['x⁷', 'x¹²', 'x³⁴', '4x³'],
    correctIndex: 1,
    explanation: 'Potenz einer Potenz: Exponenten multiplizieren. (x³)⁴ = x^(3·4) = x¹².',
    hints: ['(xᵃ)ᵇ = x^(a·b)'],
  },
  'ex-alg-1-1-c': {
    id: 'ex-alg-1-1-c', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'x⁻³ =',
    options: ['−x³', '1/x³', 'x^(1/3)', '3·x'],
    correctIndex: 1,
    explanation: 'Negativer Exponent = Kehrwert: x⁻³ = 1/x³. Allgemein: x⁻ⁿ = 1/xⁿ.',
    hints: ['Negativer Exponent → ins Nenner verschieben.'],
  },
  'ex-alg-1-1-d': {
    id: 'ex-alg-1-1-d', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: '(2x²y)³ =',
    options: ['2x⁶y³', '6x⁶y³', '8x⁶y³', '8x⁵y³'],
    correctIndex: 2,
    explanation: 'Jeder Faktor wird potenziert: (2)³·(x²)³·(y)³ = 8·x⁶·y³.',
    hints: ['(a·b·c)ⁿ = aⁿ·bⁿ·cⁿ'],
  },
  'ex-alg-1-1-mastery': {
    id: 'ex-alg-1-1-mastery', lessonId: 'alg-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Vereinfache: (x⁴·y²)/(x²·y⁵)',
    options: ['x²/y³', 'x²·y³', 'x⁶/y⁷', 'x²y⁻³'],
    correctIndex: 0,
    explanation: 'x⁴/x² = x^(4−2) = x². y²/y⁵ = y^(2−5) = y⁻³ = 1/y³. Ergebnis: x²/y³.',
    hints: ['xᵃ/xᵇ = x^(a−b)'],
  },

  'ex-alg-1-2-a': {
    id: 'ex-alg-1-2-a', lessonId: 'alg-1-2', type: 'multiple-choice',
    question: '√(x²) =',
    options: ['x', '|x|', 'x²', '1/x'],
    correctIndex: 1,
    explanation: '√(x²) = |x|, da die Wurzel immer nicht-negativ ist. (Für x≥0 ist |x|=x).',
    hints: ['Wurzel gibt immer ein nicht-negatives Ergebnis.'],
  },
  'ex-alg-1-2-b': {
    id: 'ex-alg-1-2-b', lessonId: 'alg-1-2', type: 'multiple-choice',
    question: '∛8 =',
    options: ['2', '4', '2,66', '3'],
    correctIndex: 0,
    explanation: '∛8 = ∛(2³) = 2, da 2³ = 8.',
    hints: ['∛8 = 8^(1/3). Welche Zahl hoch 3 ergibt 8?'],
  },
  'ex-alg-1-2-c': {
    id: 'ex-alg-1-2-c', lessonId: 'alg-1-2', type: 'multiple-choice',
    question: '√12 vereinfacht:',
    options: ['2√6', '2√3', '3√2', '√12 (nicht vereinfachbar)'],
    correctIndex: 1,
    explanation: '√12 = √(4·3) = √4·√3 = 2√3.',
    hints: ['Suche einen quadratischen Teiler von 12. 12 = 4·3.'],
  },
  'ex-alg-1-2-mastery': {
    id: 'ex-alg-1-2-mastery', lessonId: 'alg-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] x^(2/3) ist äquivalent zu:',
    options: ['(∛x)²', '√(x³)', '2x/3', 'x²·x³'],
    correctIndex: 0,
    explanation: 'x^(m/n) = (x^(1/n))^m = (ⁿ√x)^m. Also x^(2/3) = (∛x)² = ∛(x²).',
    hints: ['x^(m/n) = (ⁿ√x)^m'],
  },

  'ex-alg-1-3-a': {
    id: 'ex-alg-1-3-a', lessonId: 'alg-1-3', type: 'multiple-choice',
    question: 'log₂(8) =',
    options: ['2', '3', '4', '6'],
    correctIndex: 1,
    explanation: 'log₂(8) = x ↔ 2ˣ = 8 = 2³ → x = 3.',
    hints: ['log_b(x) = y ↔ bʸ = x. Hier: 2^? = 8'],
  },
  'ex-alg-1-3-b': {
    id: 'ex-alg-1-3-b', lessonId: 'alg-1-3', type: 'multiple-choice',
    question: 'ln(e³) =',
    options: ['e³', '3', '3e', '1/3'],
    correctIndex: 1,
    explanation: 'ln(eˣ) = x (ln und e sind Umkehrfunktionen). ln(e³) = 3.',
    hints: ['ln(e^x) = x — direkte Umkehrung.'],
  },
  'ex-alg-1-3-c': {
    id: 'ex-alg-1-3-c', lessonId: 'alg-1-3', type: 'multiple-choice',
    question: 'ln(a·b) =',
    options: ['ln(a)·ln(b)', 'ln(a) + ln(b)', 'ln(a) − ln(b)', 'ln(a+b)'],
    correctIndex: 1,
    explanation: 'Logarithmusregel: ln(a·b) = ln(a) + ln(b). Multiplikation wird zu Addition!',
    hints: ['log(a·b) = log(a) + log(b) — gilt für alle Basen.'],
  },
  'ex-alg-1-3-mastery': {
    id: 'ex-alg-1-3-mastery', lessonId: 'alg-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: eˣ = 5',
    options: ['x = log(5)', 'x = ln(5)', 'x = 5/e', 'x = e⁵'],
    correctIndex: 1,
    explanation: 'eˣ = 5 → ln(eˣ) = ln(5) → x = ln(5) ≈ 1,609.',
    hints: ['ln auf beiden Seiten anwenden. ln und e sind Umkehrfunktionen.'],
  },
}

const lessons_alg_u1 = [
  {
    id: 'alg-1-1', unitId: 'alg-unit-1',
    title: 'Potenzgesetze',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Alle Potenzregeln kennen und anwenden', 'Terme mit Potenzen vereinfachen'],
    prerequisites: [],
    nextLessonId: 'alg-1-2',
    steps: [
      {
        id: 'alg-1-1-s1', type: 'explanation-formal', title: 'Potenzregeln im Überblick',
        content: `**Alle Potenzregeln — auswendig lernen:**

| Regel | Formel | Beispiel |
|-------|--------|---------|
| Gleiche Basis · | xᵃ · xᵇ = x^(a+b) | x² · x³ = x⁵ |
| Gleiche Basis ÷ | xᵃ / xᵇ = x^(a−b) | x⁵ / x² = x³ |
| Potenz der Potenz | (xᵃ)ᵇ = x^(a·b) | (x²)³ = x⁶ |
| Produkt | (xy)ⁿ = xⁿ·yⁿ | (2x)³ = 8x³ |
| Negativer Exp. | x⁻ⁿ = 1/xⁿ | x⁻² = 1/x² |
| Nullter Exp. | x⁰ = 1 | 5⁰ = 1 |
| Gebroch. Exp. | x^(m/n) = (ⁿ√x)^m | x^(1/2) = √x |`,
      },
      { id: 'alg-1-1-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-1-1-a' },
      { id: 'alg-1-1-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-1-1-b' },
      { id: 'alg-1-1-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-1-1-c' },
      { id: 'alg-1-1-s5', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-alg-1-1-d' },
      { id: 'alg-1-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-1-mastery' },
    ],
  },
  {
    id: 'alg-1-2', unitId: 'alg-unit-1',
    title: 'Wurzeln und gebrochene Exponenten',
    order: 2, estimatedMinutes: 12,
    learningGoals: ['Wurzeln mit Potenzschreibweise verstehen', 'Wurzelterme vereinfachen'],
    prerequisites: [],
    nextLessonId: 'alg-1-3',
    steps: [
      {
        id: 'alg-1-2-s1', type: 'explanation-formal', title: 'Wurzeln als Potenzen',
        content: `Wurzeln sind gebrochene Exponenten:

$$\\sqrt{x} = x^{1/2}, \\quad \\sqrt[3]{x} = x^{1/3}, \\quad \\sqrt[n]{x} = x^{1/n}$$

**Rechenregeln:**
$$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$$
$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$
$$\\sqrt{a^n} = a^{n/2}$$

**Vereinfachen:** Immer Quadratzahlen aus der Wurzel herausziehen!
$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$$`,
      },
      { id: 'alg-1-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-1-2-a' },
      { id: 'alg-1-2-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-1-2-b' },
      { id: 'alg-1-2-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-1-2-c' },
      { id: 'alg-1-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-2-mastery' },
    ],
  },
  {
    id: 'alg-1-3', unitId: 'alg-unit-1',
    title: 'Logarithmen',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Logarithmus als Umkehrfunktion verstehen', 'Logarithmusgesetze anwenden', 'Gleichungen mit e^x und ln lösen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-1-3-s1', type: 'explanation-intuitive', title: 'Logarithmus — die Umkehrung',
        content: `Der **Logarithmus** beantwortet die Frage: "2 hoch wie viel ergibt 8?"

$$2^? = 8 \\quad \\Rightarrow \\quad ? = \\log_2(8) = 3$$

**Definition:** $\\log_b(x) = y \\Leftrightarrow b^y = x$

**Wichtige Logarithmen:**
- **ln(x)** = natürlicher Logarithmus (Basis e ≈ 2,718)
- **log(x)** = dekadischer Logarithmus (Basis 10)

**Gesetze:**
$$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$$
$$\\ln(a / b) = \\ln(a) - \\ln(b)$$
$$\\ln(a^n) = n \\cdot \\ln(a)$$`,
      },
      {
        id: 'alg-1-3-s2', type: 'visualization', title: 'eˣ und ln(x)',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.exp(x), color: '#3b82f6', label: 'eˣ' },
            { fn: (x) => (x > 0 ? Math.log(x) : NaN), color: '#ef4444', label: 'ln(x)' },
          ],
          xRange: [-2, 3],
          yRange: [-2, 5],
          showGrid: true,
        },
      },
      { id: 'alg-1-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-1-3-a' },
      { id: 'alg-1-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-1-3-b' },
      { id: 'alg-1-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-1-3-c' },
      { id: 'alg-1-3-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-3-mastery' },
    ],
  },
]

export const alg_unit1 = {
  id: 'alg-unit-1',
  title: 'Potenzen, Wurzeln & Logarithmen',
  order: 1,
  description: 'Potenzgesetze, Wurzeln als Potenzen, natürlicher Logarithmus',
  lessons: lessons_alg_u1,
  exercises: exercises_alg_u1,
}
