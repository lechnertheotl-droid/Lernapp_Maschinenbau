// ── Unit 4: Prüfungsaufgaben Algebra ─────────────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_alg_u4 = {

  // ── Lektion 4-1: Prüfung Algebra-Grundlagen ──────────────────────────────
  'ex-alg-4-1-a': {
    id: 'ex-alg-4-1-a', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: (8x⁶y³)^(2/3)',
    options: ['4x⁴y²', '4x⁴y³', '8x⁴y²', '2x⁴y²'],
    correctIndex: 0,
    explanation: '(8x⁶y³)^(2/3) = 8^(2/3) · x^(6·2/3) · y^(3·2/3) = (∛8)² · x⁴ · y² = 2² · x⁴ · y² = 4x⁴y².',
    hints: ['Jeden Faktor einzeln potenzieren: (abc)ⁿ = aⁿ·bⁿ·cⁿ', '8^(1/3) = ∛8 = 2, also 8^(2/3) = 4'],
  },
  'ex-alg-4-1-b': {
    id: 'ex-alg-4-1-b', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse nach x: ln(2x − 1) = 3',
    options: ['x = (e³ + 1)/2', 'x = e³/2', 'x = (e³ − 1)/2', 'x = e³ + 1'],
    correctIndex: 0,
    explanation: 'ln(2x − 1) = 3 → 2x − 1 = e³ → 2x = e³ + 1 → x = (e³ + 1)/2 ≈ 10,54.',
    hints: ['ln(A) = B → A = eᴮ', 'Dann nach x auflösen: 2x − 1 = e³'],
  },
  'ex-alg-4-1-c': {
    id: 'ex-alg-4-1-c', lessonId: 'alg-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne: log₂(128). Gib eine ganze Zahl ein.',
    correctAnswer: 7,
    tolerance: 0,
    unit: '',
    explanation: '128 = 2⁷, also log₂(128) = 7. Allgemein: log_a(aⁿ) = n.',
    hints: ['Frage: 2 hoch WAS ergibt 128?', '2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128'],
  },
  'ex-alg-4-1-d': {
    id: 'ex-alg-4-1-d', lessonId: 'alg-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Es gilt: log(a · b) = log(a) · log(b)',
    correct: false,
    explanation: 'FALSCH! Die korrekte Regel lautet: log(a · b) = log(a) + log(b). Das Produkt unter dem Logarithmus wird zur Summe der Logarithmen — nicht zum Produkt!',
    hints: ['Logarithmusgesetze: log(a·b) = log(a) + log(b)', 'Gegenbeispiel: log(10·10) = log(100) = 2, aber log(10)·log(10) = 1·1 = 1'],
  },
  'ex-alg-4-1-e': {
    id: 'ex-alg-4-1-e', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: log₃(81) − log₃(3)',
    options: ['3', '2', '4', '1'],
    correctIndex: 0,
    explanation: 'log₃(81) = log₃(3⁴) = 4. log₃(3) = 1. Differenz: 4 − 1 = 3. Alternativ: log₃(81/3) = log₃(27) = log₃(3³) = 3.',
    hints: ['log_a(aⁿ) = n', 'Oder nutze: log(A) − log(B) = log(A/B)'],
  },
  'ex-alg-4-1-f': {
    id: 'ex-alg-4-1-f', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse die quadratische Gleichung: x² − 5x + 6 = 0',
    options: ['x₁ = 2, x₂ = 3', 'x₁ = 1, x₂ = 6', 'x₁ = −2, x₂ = −3', 'x₁ = −1, x₂ = 6'],
    correctIndex: 0,
    explanation: 'Faktorisierung: (x − 2)(x − 3) = 0 → x = 2 oder x = 3. Probe: 4 − 10 + 6 = 0 ✓ und 9 − 15 + 6 = 0 ✓.',
    hints: ['Gesucht: zwei Zahlen, deren Produkt 6 und Summe 5 ist.', 'Faktorisierung: (x − r₁)(x − r₂) = 0'],
  },
  'ex-alg-4-1-g': {
    id: 'ex-alg-4-1-g', lessonId: 'alg-4-1', type: 'number-input',
    question: '[PRÜFUNG] Die Gleichung 2x² + 4x − 6 = 0 hat zwei Lösungen. Was ist die größere Lösung?',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: '2x² + 4x − 6 = 0 → x² + 2x − 3 = 0 (÷2). Diskriminante: D = 4 + 12 = 16. x = (−2 ± 4)/2. Also x₁ = 1, x₂ = −3. Die größere Lösung ist x = 1.',
    hints: ['Durch 2 dividieren: x² + 2x − 3 = 0', 'abc-Formel: x = (−b ± √(b²−4ac))/(2a)'],
  },
  'ex-alg-4-1-h': {
    id: 'ex-alg-4-1-h', lessonId: 'alg-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Gleichung x² + 4 = 0 hat in ℝ keine Lösung.',
    correct: true,
    explanation: 'x² + 4 = 0 → x² = −4. Da x² ≥ 0 für alle reellen x, kann x² nie gleich −4 sein. Die Diskriminante ist D = 0 − 16 = −16 < 0 → keine reellen Lösungen.',
    hints: ['x² ist immer ≥ 0 für reelle Zahlen.', 'Diskriminante D = b² − 4ac = 0 − 4·1·4 = −16 < 0'],
  },
  'ex-alg-4-1-i': {
    id: 'ex-alg-4-1-i', lessonId: 'alg-4-1', type: 'matching',
    question: '[PRÜFUNG] Ordne jedem Ausdruck das richtige Vereinfachungsergebnis zu:',
    pairs: [
      { left: 'log(a³)', right: '3·log(a)' },
      { left: 'log(a) + log(b)', right: 'log(a·b)' },
      { left: 'log(a) − log(b)', right: 'log(a/b)' },
      { left: 'e^(ln(x))', right: 'x' },
    ],
    explanation: 'Die vier Grundregeln des Logarithmus: Potenzregel (log aⁿ = n·log a), Produktregel (log a + log b = log ab), Quotientenregel (log a − log b = log a/b), und Umkehreigenschaft (e^ln(x) = x).',
    hints: ['Logarithmusgesetze: Potenz → Faktor, Produkt → Summe, Quotient → Differenz', 'e und ln sind Umkehrfunktionen voneinander'],
  },
  'ex-alg-4-1-j': {
    id: 'ex-alg-4-1-j', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Wie viele reelle Lösungen hat x² − 6x + 9 = 0?',
    options: ['0', '1 (Doppellösung)', '2 verschiedene', 'unendlich viele'],
    correctIndex: 1,
    explanation: 'Diskriminante: D = 36 − 36 = 0. Bei D = 0 gibt es genau eine reelle Lösung (Doppellösung): x = 6/2 = 3. Probe: (3−3)² = 0 ✓. Faktorisierung: (x−3)² = 0.',
    hints: ['Diskriminante: D = b² − 4ac', 'D = 0 → eine Doppellösung, D > 0 → zwei Lösungen, D < 0 → keine reellen Lösungen'],
  },
  'ex-alg-4-1-mastery': {
    id: 'ex-alg-4-1-mastery', lessonId: 'alg-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Druckbehälter hat Innendruck p(t) = p₀ · e^(−kt). Nach 5 s ist der Druck auf die Hälfte gesunken. Wie groß ist k?',
    options: ['k = ln(2)/5', 'k = 1/5', 'k = ln(5)/2', 'k = 5/ln(2)'],
    correctIndex: 0,
    explanation: 'p(5) = p₀/2 → p₀·e^(−5k) = p₀/2 → e^(−5k) = 1/2 → −5k = ln(1/2) = −ln(2) → k = ln(2)/5 ≈ 0,139 s⁻¹.',
    hints: ['e^(−5k) = 1/2. Logarithmieren: −5k = ln(1/2)', 'ln(1/2) = ln(1) − ln(2) = −ln(2)'],
  },

  // ── Lektion 4-2: Prüfung Funktionen & Anwendungen ────────────────────────
  'ex-alg-4-2-a': {
    id: 'ex-alg-4-2-a', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] f(x) = x³ − 3x. An welchen Stellen hat f lokale Extrema?',
    options: ['x = 1 und x = −1', 'x = 0 und x = 3', 'x = √3 und x = −√3', 'keine Extrema'],
    correctIndex: 0,
    explanation: "f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1. f''(x) = 6x: f''(1) = 6 > 0 (Minimum), f''(−1) = −6 < 0 (Maximum). Extrema bei x = ±1.",
    hints: ["Extrema wo f'(x) = 0: 3x² − 3 = 0 → x² = 1", "Vorzeichen von f''(x) bestimmt Maximum oder Minimum"],
  },
  'ex-alg-4-2-b': {
    id: 'ex-alg-4-2-b', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Was ist die Umkehrfunktion von f(x) = 3x − 2?',
    options: ['f⁻¹(x) = (x + 2)/3', 'f⁻¹(x) = (x − 2)/3', 'f⁻¹(x) = 3x + 2', 'f⁻¹(x) = 1/(3x − 2)'],
    correctIndex: 0,
    explanation: 'y = 3x − 2 → y + 2 = 3x → x = (y + 2)/3. Tausche x und y: f⁻¹(x) = (x + 2)/3. Probe: f(f⁻¹(x)) = 3·(x+2)/3 − 2 = x + 2 − 2 = x ✓.',
    hints: ['Schritt 1: y = 3x − 2 nach x auflösen', 'Schritt 2: x und y tauschen'],
  },
  'ex-alg-4-2-c': {
    id: 'ex-alg-4-2-c', lessonId: 'alg-4-2', type: 'true-false',
    statement: '[PRÜFUNG] f(x) = x³ ist eine bijektive Funktion (ℝ → ℝ) und besitzt daher eine Umkehrfunktion.',
    correct: true,
    explanation: 'f(x) = x³ ist streng monoton steigend auf ganz ℝ, also injektiv. Da jedes y ∈ ℝ einen Wert x = ∛y hat, ist f auch surjektiv. Damit ist f bijektiv, und f⁻¹(x) = ∛x existiert auf ℝ.',
    hints: ['Streng monoton → injektiv', 'Jeder y-Wert wird getroffen → surjektiv. Bijektiv = injektiv + surjektiv.'],
  },
  'ex-alg-4-2-d': {
    id: 'ex-alg-4-2-d', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Parabel hat die Gleichung f(x) = 2(x − 3)² + 1. Was ist der Scheitelpunkt?',
    options: ['S(3 | 1)', 'S(−3 | 1)', 'S(3 | −1)', 'S(0 | 19)'],
    correctIndex: 0,
    explanation: 'Scheitelform: f(x) = a(x − h)² + k mit Scheitelpunkt S(h | k). Hier ist h = 3, k = 1 → S(3 | 1). Die Parabel öffnet nach oben (a = 2 > 0) und hat ein Minimum bei S.',
    hints: ['Scheitelform: f(x) = a(x − h)² + k → S(h, k)', 'Achtung: h ist das, was vom x subtrahiert wird (Vorzeichen beachten!)'],
  },
  'ex-alg-4-2-e': {
    id: 'ex-alg-4-2-e', lessonId: 'alg-4-2', type: 'number-input',
    question: '[PRÜFUNG] f(x) = x² − 4x + 3. An welcher x-Stelle liegt der Scheitelpunkt (Minimum)?',
    correctAnswer: 2,
    tolerance: 0.01,
    unit: '',
    explanation: 'Scheitelpunkt bei x_S = −b/(2a) = −(−4)/(2·1) = 4/2 = 2. Oder: quadratische Ergänzung: x² − 4x + 3 = (x−2)² − 1 → Scheitelpunkt S(2 | −1).',
    hints: ['x_S = −b/(2a) für f(x) = ax² + bx + c', 'Hier: a = 1, b = −4 → x_S = 4/2 = 2'],
  },
  'ex-alg-4-2-f': {
    id: 'ex-alg-4-2-f', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Funktion hat den Definitionsbereich D = (0, ∞)?',
    options: ['f(x) = ln(x)', 'f(x) = x²', 'f(x) = eˣ', 'f(x) = sin(x)'],
    correctIndex: 0,
    explanation: 'ln(x) ist nur für x > 0 definiert, also D = (0, ∞). x² und eˣ und sin(x) haben alle D = ℝ (jede reelle Zahl ist erlaubt).',
    hints: ['Logarithmus: nur positive Zahlen erlaubt!', 'Exponential- und Potenzfunktionen sind auf ganz ℝ definiert.'],
  },
  'ex-alg-4-2-g': {
    id: 'ex-alg-4-2-g', lessonId: 'alg-4-2', type: 'sorting',
    question: '[PRÜFUNG] Bringe die Schritte zur Bestimmung der Umkehrfunktion von f(x) = 2eˣ − 1 in die richtige Reihenfolge:',
    items: [
      'y = 2eˣ − 1 aufschreiben',
      'y + 1 = 2eˣ umformen',
      '(y + 1)/2 = eˣ isolieren',
      'x = ln((y + 1)/2) logarithmieren',
      'x und y tauschen: f⁻¹(x) = ln((x + 1)/2)',
    ],
    explanation: 'Vorgehen: (1) y = f(x) hinschreiben, (2–4) schrittweise nach x auflösen, (5) x und y tauschen. Ergebnis: f⁻¹(x) = ln((x + 1)/2), definiert für x > −1.',
    hints: ['Ziel: die Gleichung nach x auflösen', 'Logarithmus ist die Umkehrung der Exponentialfunktion'],
  },
  'ex-alg-4-2-h': {
    id: 'ex-alg-4-2-h', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Bauteil dehnt sich mit l(T) = l₀ · (1 + α·T) aus. l₀ = 1 m, α = 2·10⁻⁵ K⁻¹. Bei T = 500 K ist l =',
    options: ['1,01 m', '1,001 m', '1,1 m', '2 m'],
    correctIndex: 0,
    explanation: 'l(500) = 1 · (1 + 2·10⁻⁵ · 500) = 1 · (1 + 0,01) = 1,01 m. Die Ausdehnung beträgt also 1 cm auf 1 m — typischer Wert für Metalle.',
    hints: ['Einsetzen: T = 500, α = 2·10⁻⁵', '2·10⁻⁵ · 500 = 10⁻² = 0,01'],
  },
  'ex-alg-4-2-i': {
    id: 'ex-alg-4-2-i', lessonId: 'alg-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Der Graph von f⁻¹(x) entsteht aus dem Graphen von f(x) durch Spiegelung an der Geraden y = x.',
    correct: true,
    explanation: 'Ja! Bei der Umkehrfunktion werden x und y vertauscht: Punkt (a, b) auf f wird zu Punkt (b, a) auf f⁻¹. Das ist geometrisch eine Spiegelung an der Winkelhalbierenden y = x.',
    hints: ['Umkehrfunktion: x und y tauschen', 'Geometrisch: Spiegelung an y = x. Punkt (a,b) → (b,a)'],
  },
  'ex-alg-4-2-j': {
    id: 'ex-alg-4-2-j', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Polynomdivision: (x³ − 2x² − 5x + 6) ÷ (x − 1). Das Ergebnis ist:',
    options: ['x² − x − 6', 'x² + x − 6', 'x² − 3x + 6', 'x² − x + 6'],
    correctIndex: 0,
    explanation: '(x³ − 2x² − 5x + 6) ÷ (x − 1) = x² − x − 6. Probe: (x−1)(x² − x − 6) = x³ − x² − 6x − x² + x + 6 = x³ − 2x² − 5x + 6 ✓. Nullstellen: x = 1, x = 3, x = −2.',
    hints: ['Polynomdivision: Schritt für Schritt dividieren', 'Wenn x = 1 eine Nullstelle ist, ist (x−1) ein Teiler'],
  },
  'ex-alg-4-2-mastery': {
    id: 'ex-alg-4-2-mastery', lessonId: 'alg-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Nachfragefunktion eines Produkts lautet p(x) = 100 − 2x (Preis in €, x = Menge). Der Umsatz U(x) = x · p(x) wird maximal bei x =',
    options: ['x = 25', 'x = 50', 'x = 100', 'x = 10'],
    correctIndex: 0,
    explanation: 'U(x) = x·(100 − 2x) = 100x − 2x². Das ist eine nach unten geöffnete Parabel. Maximum bei x_S = −100/(2·(−2)) = 100/4 = 25. U(25) = 25·50 = 1250 €.',
    hints: ['U(x) = 100x − 2x² ist eine nach unten geöffnete Parabel', 'x_S = −b/(2a) = −100/(−4) = 25'],
  },
}

const lessons_alg_u4 = [
  {
    id: 'alg-4-1', unitId: 'alg-unit-4',
    title: 'Prüfung: Algebra-Grundlagen',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Potenzgesetze und Logarithmusregeln sicher anwenden',
      'Quadratische Gleichungen auf Prüfungsniveau lösen',
      'Exponentialgleichungen durch Logarithmieren lösen',
    ],
    prerequisites: [],
    nextLessonId: 'alg-4-2',
    steps: [
      {
        id: 'alg-4-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Algebra-Grundlagen',
        content: `**Prüfungsaufgaben Algebra** an der TU Wien folgen typischerweise diesen Mustern:

1. **Potenzen & Wurzeln** — Vereinfache Ausdrücke mit gebrochenen Exponenten
2. **Logarithmengesetze** — Wende Produkt-, Quotienten- und Potenzregel an
3. **Quadratische Gleichungen** — abc-Formel, Faktorisierung, Diskriminante
4. **Exponentialgleichungen** — Logarithmieren auf beiden Seiten

**Wichtigste Formeln für die Prüfung:**

*Potenzgesetze:*
- $x^a \\cdot x^b = x^{a+b}$, $(x^a)^b = x^{a \\cdot b}$, $x^{-n} = 1/x^n$, $x^{1/n} = \\sqrt[n]{x}$

*Logarithmusgesetze:*
- $\\log(a \\cdot b) = \\log(a) + \\log(b)$
- $\\log(a/b) = \\log(a) - \\log(b)$
- $\\log(a^n) = n \\cdot \\log(a)$
- $e^{\\ln(x)} = x$, $\\ln(e^x) = x$

*Quadratische Gleichungen:*
$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac$$
- D > 0: zwei Lösungen, D = 0: Doppellösung, D < 0: keine reellen Lösungen`,
      },
      { id: 'alg-4-1-s2', type: 'exercise', title: 'Aufgabe 1 (Potenzen)', exerciseRef: 'ex-alg-4-1-a' },
      { id: 'alg-4-1-s3', type: 'exercise', title: 'Aufgabe 2 (Logarithmusgleichung)', exerciseRef: 'ex-alg-4-1-b' },
      { id: 'alg-4-1-s4', type: 'exercise', title: 'Aufgabe 3 (Logarithmus berechnen)', exerciseRef: 'ex-alg-4-1-c' },
      { id: 'alg-4-1-s5', type: 'exercise', title: 'Aufgabe 4 (wahr oder falsch)', exerciseRef: 'ex-alg-4-1-d' },
      { id: 'alg-4-1-s6', type: 'exercise', title: 'Aufgabe 5 (Logarithmen vereinfachen)', exerciseRef: 'ex-alg-4-1-e' },
      { id: 'alg-4-1-s7', type: 'exercise', title: 'Aufgabe 6 (quadratische Gleichung)', exerciseRef: 'ex-alg-4-1-f' },
      { id: 'alg-4-1-s8', type: 'exercise', title: 'Aufgabe 7 (abc-Formel)', exerciseRef: 'ex-alg-4-1-g' },
      { id: 'alg-4-1-s9', type: 'exercise', title: 'Aufgabe 8 (wahr oder falsch)', exerciseRef: 'ex-alg-4-1-h' },
      { id: 'alg-4-1-s10', type: 'exercise', title: 'Aufgabe 9 (Logarithmusregeln zuordnen)', exerciseRef: 'ex-alg-4-1-i' },
      { id: 'alg-4-1-s11', type: 'exercise', title: 'Aufgabe 10 (Diskriminante)', exerciseRef: 'ex-alg-4-1-j' },
      { id: 'alg-4-1-s12', type: 'mastery-check', title: 'Prüfungsfrage: technische Anwendung', exerciseRef: 'ex-alg-4-1-mastery' },
    ],
  },
  {
    id: 'alg-4-2', unitId: 'alg-unit-4',
    title: 'Prüfung: Funktionen & Anwendungen',
    order: 2, estimatedMinutes: 25,
    learningGoals: [
      'Extrema und Scheitelpunkte von Funktionen bestimmen',
      'Umkehrfunktionen berechnen und interpretieren',
      'Funktionen auf technische Probleme anwenden',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-4-2-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Funktionen & Anwendungen',
        content: `**Funktionsanalyse in der TU Wien Prüfung:**

**Scheitelpunkt einer Parabel** f(x) = ax² + bx + c:
$$x_S = -\\frac{b}{2a}, \\quad y_S = f(x_S)$$
Scheitelform: $f(x) = a(x - x_S)^2 + y_S$

**Umkehrfunktion berechnen:**
1. $y = f(x)$ aufschreiben
2. Nach $x$ auflösen
3. $x$ und $y$ tauschen → $f^{-1}(x)$
4. Definitionsbereich anpassen!

Geometrisch: Graph von $f^{-1}$ ist Spiegelung von $f$ an $y = x$.

**Technische Anwendungen:**
- Wärmeausdehnung: $l(T) = l_0 \\cdot (1 + \\alpha T)$
- Abklingprozesse: $p(t) = p_0 \\cdot e^{-kt}$
- Umsatzmaximierung: $U(x) = x \\cdot p(x)$, Maximum bei $U'(x) = 0$

**Polynome & Nullstellen:**
Wenn $x = r$ eine Nullstelle ist, ist $(x - r)$ ein Teiler des Polynoms.
Polynomdivision → restliche Nullstellen bestimmen.`,
      },
      { id: 'alg-4-2-s2', type: 'exercise', title: 'Aufgabe 1 (Extrema)', exerciseRef: 'ex-alg-4-2-a' },
      { id: 'alg-4-2-s3', type: 'exercise', title: 'Aufgabe 2 (Umkehrfunktion)', exerciseRef: 'ex-alg-4-2-b' },
      { id: 'alg-4-2-s4', type: 'exercise', title: 'Aufgabe 3 (wahr oder falsch)', exerciseRef: 'ex-alg-4-2-c' },
      { id: 'alg-4-2-s5', type: 'exercise', title: 'Aufgabe 4 (Scheitelpunkt)', exerciseRef: 'ex-alg-4-2-d' },
      { id: 'alg-4-2-s6', type: 'exercise', title: 'Aufgabe 5 (Scheitelpunkt berechnen)', exerciseRef: 'ex-alg-4-2-e' },
      { id: 'alg-4-2-s7', type: 'exercise', title: 'Aufgabe 6 (Definitionsbereich)', exerciseRef: 'ex-alg-4-2-f' },
      { id: 'alg-4-2-s8', type: 'exercise', title: 'Aufgabe 7 (Schritte sortieren)', exerciseRef: 'ex-alg-4-2-g' },
      { id: 'alg-4-2-s9', type: 'exercise', title: 'Aufgabe 8 (Wärmeausdehnung)', exerciseRef: 'ex-alg-4-2-h' },
      { id: 'alg-4-2-s10', type: 'exercise', title: 'Aufgabe 9 (wahr oder falsch)', exerciseRef: 'ex-alg-4-2-i' },
      { id: 'alg-4-2-s11', type: 'exercise', title: 'Aufgabe 10 (Polynomdivision)', exerciseRef: 'ex-alg-4-2-j' },
      { id: 'alg-4-2-s12', type: 'mastery-check', title: 'Prüfungsfrage: Umsatzmaximierung', exerciseRef: 'ex-alg-4-2-mastery' },
    ],
  },
]

export const alg_unit4 = {
  id: 'alg-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Potenzen, Logarithmen, Gleichungen, Funktionsanalyse',
  lessons: lessons_alg_u4,
  exercises: exercises_alg_u4,
}
