// ── Ableitung Unit 1: Grundbegriffe der Differentialrechnung ──────────────────

export const exercises_abl_u1 = {
  'ex-abl-1-1-a': {
    id: 'ex-abl-1-1-a', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Was beschreibt die Ableitung f\'(x) geometrisch?',
    options: ['Die Fläche unter der Kurve', 'Die Steigung der Tangente an f(x) im Punkt x', 'Den y-Achsenabschnitt', 'Den Scheitelpunkt der Kurve'],
    correctIndex: 1,
    explanation: 'f\'(x) gibt die Steigung der Tangente an die Kurve f(x) im Punkt x an. Das ist die momentane Änderungsrate.',
    hints: ['Tangente = Gerade, die die Kurve in einem Punkt berührt.'],
  },
  'ex-abl-1-1-b': {
    id: 'ex-abl-1-1-b', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Der Differenzenquotient [f(x+h) - f(x)] / h beschreibt für h→0:',
    options: ['Die mittlere Steigung auf [x, x+h]', 'Die momentane Steigung (Ableitung) in x', 'Den Wert von f in x', 'Die Fläche unter f'],
    correctIndex: 1,
    explanation: 'Für h→0 nähert sich der Differenzenquotient dem Differentialquotienten f\'(x) = lim(h→0) [f(x+h)-f(x)]/h.',
    hints: ['h→0 bedeutet: die zwei Punkte rücken zusammen → Sekante wird zur Tangente.'],
  },
  'ex-abl-1-1-c': {
    id: 'ex-abl-1-1-c', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Wo ist f\'(x) = 0?',
    options: ['An Nullstellen von f', 'An lokalen Maxima und Minima von f', 'Überall dort wo f wächst', 'An Wendepunkten von f'],
    correctIndex: 1,
    explanation: 'An lokalen Extrema (Maxima/Minima) ist die Tangente waagerecht → Steigung = 0 → f\'(x) = 0. Notwendige Bedingung!',
    hints: ['Waagerechte Tangente → Steigung = 0 → f\'(x) = 0'],
  },
  'ex-abl-1-1-mastery': {
    id: 'ex-abl-1-1-mastery', lessonId: 'abl-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'f\'(x) > 0 bedeutet:',
    options: ['f ist negativ', 'f ist konkav', 'f ist streng monoton steigend', 'f hat ein Maximum'],
    correctIndex: 2,
    explanation: 'f\'(x) > 0 bedeutet positive Steigung → f ist (streng) monoton steigend in diesem Bereich.',
    hints: ['Positive Steigung = Funktion geht nach oben.'],
  },

  'ex-abl-1-2-a': {
    id: 'ex-abl-1-2-a', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: '(xⁿ)\' =',
    options: ['xⁿ⁻¹', 'n·xⁿ⁻¹', '(n+1)·xⁿ', 'n·xⁿ'],
    correctIndex: 1,
    explanation: 'Potenzregel: (xⁿ)\' = n·xⁿ⁻¹. Beispiel: (x³)\' = 3x².',
    hints: ['Der Exponent kommt nach vorne, dann wird er um 1 reduziert.'],
  },
  'ex-abl-1-2-b': {
    id: 'ex-abl-1-2-b', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: 'f(x) = 3x² + 5x − 2. Was ist f\'(x)?',
    options: ['6x + 5', '3x + 5', '6x² + 5', '6x − 2'],
    correctIndex: 0,
    explanation: 'f\'(x) = (3x²)\' + (5x)\' + (−2)\' = 6x + 5 + 0 = 6x + 5. Potenzregel + Summenregel.',
    hints: ['Jedes Glied einzeln ableiten. Konstanten fallen weg.'],
  },
  'ex-abl-1-2-c': {
    id: 'ex-abl-1-2-c', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: 'f(x) = √x = x^(1/2). Was ist f\'(x)?',
    options: ['1/(2√x)', '2√x', '√x/2', '1/√x'],
    correctIndex: 0,
    explanation: 'f\'(x) = (1/2)·x^(1/2 − 1) = (1/2)·x^(−1/2) = 1/(2·x^(1/2)) = 1/(2√x).',
    hints: ['Potenzregel: n = 1/2. (1/2)·x^(1/2−1) = (1/2)·x^(−1/2)'],
  },
  'ex-abl-1-2-d': {
    id: 'ex-abl-1-2-d', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: '(1/x)\' = (x⁻¹)\'= ',
    options: ['−1/x', '1/x²', '−1/x²', 'ln(x)'],
    correctIndex: 2,
    explanation: '(x⁻¹)\' = −1·x⁻² = −1/x². Potenzregel mit n = −1.',
    hints: ['n = −1. Potenzregel: −1·x^(−1−1) = −x^(−2) = −1/x²'],
  },
  'ex-abl-1-2-mastery': {
    id: 'ex-abl-1-2-mastery', lessonId: 'abl-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'f(x) = 2x⁴ − 3x² + 7. Berechne f\'(2).',
    options: ['52', '20', '40', '25'],
    correctIndex: 0,
    explanation: "f'(x) = 8x³ − 6x. Einsetzen von x = 2 ergibt f'(2) = 8·8 − 6·2 = 64 − 12 = 52.",
    hints: ['f\'(x) = 8x³ − 6x. Setze x = 2 ein.'],
  },

  'ex-abl-1-3-a': {
    id: 'ex-abl-1-3-a', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: '(sin x)\' =',
    options: ['−sin x', 'cos x', '−cos x', 'tan x'],
    correctIndex: 1,
    explanation: '(sin x)\' = cos x. Wichtige Grundformel — auswendig lernen!',
    hints: ['sin → cos (eine Stufe nach vorne im Zyklus: sin→cos→−sin→−cos→sin)'],
  },
  'ex-abl-1-3-b': {
    id: 'ex-abl-1-3-b', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: '(cos x)\' =',
    options: ['sin x', 'tan x', '−sin x', '−cos x'],
    correctIndex: 2,
    explanation: '(cos x)\' = −sin x. Das Minus ist wichtig!',
    hints: ['cos → −sin (Ableitungszyklus weiter: cos→−sin→−cos→sin→cos)'],
  },
  'ex-abl-1-3-c': {
    id: 'ex-abl-1-3-c', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: '(eˣ)\' =',
    options: ['x·eˣ⁻¹', 'eˣ', 'e·x', '1/eˣ'],
    correctIndex: 1,
    explanation: '(eˣ)\' = eˣ. Die Exponentialfunktion e^x ist ihre eigene Ableitung — das macht sie so besonders!',
    hints: ['e^x ist die einzige Funktion, die ihre eigene Ableitung ist.'],
  },
  'ex-abl-1-3-d': {
    id: 'ex-abl-1-3-d', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: '(ln x)\' =',
    options: ['eˣ', '1/x', 'x·ln x', '−1/x'],
    correctIndex: 1,
    explanation: '(ln x)\' = 1/x für x > 0.',
    hints: ['ln(x) und e^x sind Umkehrfunktionen voneinander.'],
  },
  'ex-abl-1-3-mastery': {
    id: 'ex-abl-1-3-mastery', lessonId: 'abl-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: 'f(x) = sin(x) + eˣ − 3x². Was ist f\'(x)?',
    options: ['cos(x) + eˣ − 6x', 'cos(x) + eˣ − 3', '−cos(x) + eˣ − 6x', 'cos(x) − eˣ − 6x'],
    correctIndex: 0,
    explanation: 'f\'(x) = (sin x)\' + (eˣ)\' − (3x²)\' = cos(x) + eˣ − 6x.',
    hints: ['Jedes Glied einzeln ableiten.'],
  },

  'ex-abl-1-4-a': {
    id: 'ex-abl-1-4-a', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'Kettenregel: [f(g(x))]\' =',
    options: ["f'(x) · g'(x)", "f'(g(x)) · g'(x)", "f(g'(x))", "f'(g(x)) + g'(x)"],
    correctIndex: 1,
    explanation: "Kettenregel: [f(g(x))]' = f'(g(x)) · g'(x). Zuerst äußere Funktion ableiten (innere einsetzen), dann mal innere Ableitung.",
    hints: ['Äußere Ableitung · innere Ableitung', '"Außen ableiten, innen stehen lassen, dann mal innere Ableitung"'],
  },
  'ex-abl-1-4-b': {
    id: 'ex-abl-1-4-b', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'f(x) = sin(3x). Was ist f\'(x)?',
    options: ['cos(3x)', '3·cos(3x)', '3·cos(x)', '−3·cos(3x)'],
    correctIndex: 1,
    explanation: "Kettenregel: äußere Funktion sin→cos, innere Ableitung (3x)'=3. Also: f'(x) = cos(3x)·3 = 3·cos(3x).",
    hints: ['Äußere Funktion: sin → cos. Innere Funktion: 3x → 3.'],
  },
  'ex-abl-1-4-c': {
    id: 'ex-abl-1-4-c', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'f(x) = e^(x²). Was ist f\'(x)?',
    options: ['e^(x²)', '2x · e^(x²)', 'x² · eˣ', '2 · e^(x²)'],
    correctIndex: 1,
    explanation: "Kettenregel: äußere = e^u → e^u; innere = x² → 2x. Also: f'(x) = e^(x²) · 2x.",
    hints: ['Äußere: e^u → e^u (bleibt gleich). Innere: x² → 2x.'],
  },
  'ex-abl-1-4-d': {
    id: 'ex-abl-1-4-d', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'f(x) = (2x + 1)⁵. Was ist f\'(x)?',
    options: ['5·(2x+1)⁴', '10·(2x+1)⁴', '5·(2x+1)⁵', '10·(2x+1)⁵'],
    correctIndex: 1,
    explanation: "Kettenregel: äußere = u⁵ → 5u⁴; innere = 2x+1 → 2. f'(x) = 5·(2x+1)⁴ · 2 = 10·(2x+1)⁴.",
    hints: ['Äußere: u⁵ → 5u⁴. Innere: 2x+1 → 2.'],
  },
  'ex-abl-1-4-mastery': {
    id: 'ex-abl-1-4-mastery', lessonId: 'abl-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = cos(x²+1). f\'(x) =',
    options: ['−sin(x²+1)', '−2x·sin(x²+1)', '2x·cos(x²+1)', '−2x·cos(x²+1)'],
    correctIndex: 1,
    explanation: "Kettenregel: äußere = cos→−sin; innere = x²+1 → 2x. f'(x) = −sin(x²+1)·2x.",
    hints: ['cos → −sin (äußere Ableitung). x²+1 → 2x (innere Ableitung).'],
  },

  'ex-abl-1-5-a': {
    id: 'ex-abl-1-5-a', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: '[PRÜFUNG] Extrema: Notwendige Bedingung für ein lokales Extremum bei x₀ ist:',
    options: ["f''(x₀) = 0", "f'(x₀) = 0", "f(x₀) = 0", "f'(x₀) ≠ 0"],
    correctIndex: 1,
    explanation: "Notwendige Bedingung: f'(x₀) = 0 (waagerechte Tangente). Hinreichend: f''(x₀) < 0 → Maximum; f''(x₀) > 0 → Minimum.",
    hints: ["Extremum → Tangente waagerecht → Steigung = 0 → f'(x) = 0"],
  },
  'ex-abl-1-5-b': {
    id: 'ex-abl-1-5-b', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: 'f(x) = x² − 4x + 3. Wo liegt das Minimum?',
    options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
    correctIndex: 1,
    explanation: "f'(x) = 2x − 4 = 0 → x = 2. f''(x) = 2 > 0 → Minimum. f(2) = 4 − 8 + 3 = −1.",
    hints: ["f'(x) = 0 setzen und lösen.", 'f\'(x) = 2x − 4'],
  },
  'ex-abl-1-5-c': {
    id: 'ex-abl-1-5-c', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: '[PRÜFUNG] Wendepunkt: f hat einen Wendepunkt bei x₀, wenn:',
    options: ["f'(x₀) = 0", "f''(x₀) = 0 und Vorzeichenwechsel von f''", "f(x₀) = 0", "f'''(x₀) = 0"],
    correctIndex: 1,
    explanation: "Wendepunkt = Wechsel der Krümmung. Notwendig: f''(x₀) = 0. Hinreichend: Vorzeichenwechsel von f'' bei x₀.",
    hints: ["Wendepunkt = f''(x) wechselt das Vorzeichen."],
  },
  'ex-abl-1-5-mastery': {
    id: 'ex-abl-1-5-mastery', lessonId: 'abl-1-5', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = x³ − 3x. Bestimme alle lokalen Extrema.',
    options: ['Maximum bei x=−1, Minimum bei x=1', 'Minimum bei x=−1, Maximum bei x=1', 'Nur ein Extremum bei x=0', 'Keine Extrema'],
    correctIndex: 0,
    explanation: "f'(x) = 3x²−3 = 0 → x=±1. f''(x) = 6x. f''(−1) = −6 < 0 → lokales Maximum. f''(1) = 6 > 0 → lokales Minimum.",
    hints: ["f'(x) = 3x² − 3. Nullstellen: x = ±1.", "f''(x) = 6x bestimmt ob Max oder Min."],
  },
}

const lessons_abl_u1 = [
  {
    id: 'abl-1-1', unitId: 'abl-unit-1',
    title: 'Was ist eine Ableitung?',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Ableitung als Steigung der Tangente verstehen', 'Differenzenquotient interpretieren'],
    prerequisites: [],
    nextLessonId: 'abl-1-2',
    steps: [
      {
        id: 'abl-1-1-s1', type: 'explanation-intuitive', title: 'Steigung im Punkt',
        content: `Stell dir vor, du fährst mit dem Auto. Die **Ableitung** ist der **Tacho** — sie zeigt die momentane Geschwindigkeit.

Mathematisch: Wenn f(x) die zurückgelegte Strecke beschreibt, dann gibt f'(x) die **momentane Geschwindigkeit** an.

Geometrisch: f'(x) ist die **Steigung der Tangente** an die Kurve y = f(x) im Punkt (x, f(x)).

**Positive Steigung** → Funktion steigt
**Negative Steigung** → Funktion fällt
**Steigung = 0** → Extrempunkt (Maximum oder Minimum)`,
      },
      {
        id: 'abl-1-1-s2', type: 'visualization', title: 'Tangente an die Kurve',
        visualizationId: 'derivative-graph',
        params: { fn: null, fnName: 'x²', showTangent: true, interactive: true },
      },
      {
        id: 'abl-1-1-s3', type: 'explanation-formal', title: 'Definition über Grenzwert',
        content: `**Definition der Ableitung:**

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Der Bruch $\\frac{f(x+h)-f(x)}{h}$ heißt **Differenzenquotient** — er berechnet die mittlere Steigung zwischen den Punkten x und x+h.

Für h→0 rücken die zwei Punkte zusammen, die Sekante wird zur Tangente, und der Differenzenquotient wird zum **Differentialquotienten** f'(x).`,
      },
      {
        id: 'abl-1-1-s3-limit', type: 'visualization', title: 'Grenzwert numerisch erkunden',
        visualizationId: 'limit-explorer',
        params: { initialFunction: 'removable', initialEpsilon: 0.8 },
      },
      { id: 'abl-1-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-1-1-a' },
      { id: 'abl-1-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-1-1-b' },
      { id: 'abl-1-1-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-1-1-c' },
      { id: 'abl-1-1-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-1-mastery' },
    ],
  },
  {
    id: 'abl-1-2', unitId: 'abl-unit-1',
    title: 'Potenzregel und Summenregel',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Polynome ableiten', 'Potenzregel und Summenregel anwenden'],
    prerequisites: [],
    nextLessonId: 'abl-1-3',
    steps: [
      {
        id: 'abl-1-2-s1', type: 'explanation-formal', title: 'Die Ableitungsregeln',
        content: `**Potenzregel** (wichtigste Regel!):
$$(x^n)' = n \\cdot x^{n-1}$$

**Summenregel:**
$$(f + g)' = f' + g'$$

**Faktorregel:**
$$(c \\cdot f)' = c \\cdot f'$$

**Konstante:**
$$c' = 0$$

**Beispiele:**
- $(x^3)' = 3x^2$
- $(5x^4)' = 20x^3$
- $(x^{-2})' = -2x^{-3} = -2/x^3$
- $(\\sqrt{x})' = (x^{1/2})' = \\frac{1}{2\\sqrt{x}}$`,
      },
      {
        id: 'abl-1-2-s2', type: 'visualization', title: 'Ableitung von x²',
        visualizationId: 'derivative-graph',
        params: { fnName: 'x²', showDerivative: true },
      },
      { id: 'abl-1-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-1-2-a' },
      { id: 'abl-1-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-1-2-b' },
      { id: 'abl-1-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-1-2-c' },
      { id: 'abl-1-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-abl-1-2-d' },
      { id: 'abl-1-2-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-2-mastery' },
    ],
  },
  {
    id: 'abl-1-3', unitId: 'abl-unit-1',
    title: 'Ableitungen elementarer Funktionen',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['sin, cos, eˣ, ln ableiten', 'Ableitungstabelle auswendig kennen'],
    prerequisites: [],
    nextLessonId: 'abl-1-4',
    steps: [
      {
        id: 'abl-1-3-s1', type: 'explanation-formal', title: 'Ableitungstabelle',
        content: `**Auswendig lernen — Prüfungsrelevant:**

| f(x)    | f'(x)     |
|---------|-----------|
| xⁿ      | n·xⁿ⁻¹    |
| sin(x)  | cos(x)    |
| cos(x)  | −sin(x)   |
| tan(x)  | 1/cos²(x) |
| eˣ      | eˣ        |
| aˣ      | aˣ·ln(a)  |
| ln(x)   | 1/x       |
| log_a(x)| 1/(x·ln a)|

**Merkhilfe Zyklus:** sin → cos → −sin → −cos → sin → ...`,
      },
      {
        id: 'abl-1-3-s2', type: 'visualization', title: 'sin und seine Ableitung cos',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.sin(x), color: '#3b82f6', label: 'sin(x)' },
            { fn: (x) => Math.cos(x), color: '#ef4444', label: "sin'(x) = cos(x)" },
          ],
          xRange: [-2 * Math.PI, 2 * Math.PI],
          yRange: [-1.5, 1.5],
          showGrid: true,
        },
      },
      { id: 'abl-1-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-1-3-a' },
      { id: 'abl-1-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-1-3-b' },
      { id: 'abl-1-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-1-3-c' },
      { id: 'abl-1-3-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-abl-1-3-d' },
      { id: 'abl-1-3-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-3-mastery' },
    ],
  },
  {
    id: 'abl-1-4', unitId: 'abl-unit-1',
    title: 'Kettenregel',
    order: 4, estimatedMinutes: 15,
    learningGoals: ['Kettenregel verstehen und anwenden', 'Verkettete Funktionen ableiten'],
    prerequisites: [],
    nextLessonId: 'abl-1-5',
    steps: [
      {
        id: 'abl-1-4-s1', type: 'explanation-intuitive', title: 'Äußere und innere Funktion',
        content: `Die **Kettenregel** wird benötigt, wenn eine Funktion in einer anderen "steckt" — also eine verkettete Funktion vorliegt.

Beispiel: f(x) = sin(**x²**) — hier ist sin die **äußere** Funktion, x² die **innere**.

**Formel:**
$$[f(g(x))]' = f'(g(x)) \\cdot g'(x)$$

**Eselsbrücke:** "Äußere ableiten (innere einsetzen), mal innere ableiten"

Schritte:
1. Äußere Funktion ableiten (innere unverändert lassen)
2. Multiplizieren mit der Ableitung der inneren Funktion`,
      },
      { id: 'abl-1-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-1-4-a' },
      { id: 'abl-1-4-s3', type: 'exercise', title: 'Aufgabe 2 — sin(3x)', exerciseRef: 'ex-abl-1-4-b' },
      { id: 'abl-1-4-s4', type: 'exercise', title: 'Aufgabe 3 — e^(x²)', exerciseRef: 'ex-abl-1-4-c' },
      { id: 'abl-1-4-s5', type: 'exercise', title: 'Aufgabe 4 — (2x+1)⁵', exerciseRef: 'ex-abl-1-4-d' },
      { id: 'abl-1-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-1-4-mastery' },
    ],
  },
  {
    id: 'abl-1-5', unitId: 'abl-unit-1',
    title: 'Extremwerte und Kurvendiskussion',
    order: 5, estimatedMinutes: 20,
    learningGoals: ['Extrema mit Ableitungen bestimmen', 'Kurvendiskussion durchführen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-1-5-s1', type: 'explanation-formal', title: 'Systematische Kurvendiskussion',
        content: `**Kurvendiskussion — Prüfungsrelevantes Schema:**

1. **Definitionsbereich** (Wo ist f definiert?)
2. **Nullstellen:** f(x) = 0
3. **Extrema:** f'(x) = 0 lösen; f''(x) einsetzen für Art
   - f''(x₀) > 0 → lokales **Minimum**
   - f''(x₀) < 0 → lokales **Maximum**
   - f''(x₀) = 0 → weitere Untersuchung nötig
4. **Wendepunkte:** f''(x) = 0 mit Vorzeichenwechsel
5. **Verhalten für x→±∞**
6. **Skizze**`,
      },
      {
        id: 'abl-1-5-s2', type: 'visualization', title: 'Extrema von x³ − 3x',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x * x - 3 * x, color: '#3b82f6', label: 'f(x) = x³−3x' },
            { fn: (x) => 3 * x * x - 3, color: '#ef4444', label: "f'(x) = 3x²−3" },
          ],
          xRange: [-3, 3],
          yRange: [-4, 4],
          showGrid: true,
        },
      },
      { id: 'abl-1-5-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-abl-1-5-a' },
      { id: 'abl-1-5-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-abl-1-5-b' },
      { id: 'abl-1-5-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-abl-1-5-c' },
      { id: 'abl-1-5-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-1-5-mastery' },
    ],
  },
]

export const abl_unit1 = {
  id: 'abl-unit-1',
  title: 'Grundlagen der Differentialrechnung',
  order: 1,
  description: 'Ableitungsbegriff, Potenzregel, elementare Ableitungen, Kettenregel',
  lessons: lessons_abl_u1,
  exercises: exercises_abl_u1,
}
