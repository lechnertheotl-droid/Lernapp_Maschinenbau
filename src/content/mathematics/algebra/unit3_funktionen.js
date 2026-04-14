// ── Algebra Unit 3: Funktionen ───────────────────────────────────────────────

export const exercises_alg_u3 = {
  // ── Lesson 1: Funktionsbegriff ──
  'ex-alg-3-1-a': {
    id: 'ex-alg-3-1-a', lessonId: 'alg-3-1', type: 'multiple-choice',
    question: 'Was ist eine Funktion f: A → B?',
    options: [
      'Jedem Element aus A wird genau ein Element aus B zugeordnet',
      'Jedem Element aus A werden mehrere Elemente aus B zugeordnet',
      'Nur manche Elemente aus A haben ein Bild in B',
      'A und B müssen gleich sein',
    ],
    correctIndex: 0,
    explanation: 'Eine Funktion ordnet **jedem** Element aus dem Definitionsbereich A **genau ein** Element aus dem Wertebereich B zu. Eindeutigkeit ist der Schlüssel!',
    hints: ['Jeder x-Wert hat genau einen y-Wert. (Vertikaler Linientest!)'],
  },
  'ex-alg-3-1-b': {
    id: 'ex-alg-3-1-b', lessonId: 'alg-3-1', type: 'multiple-choice',
    question: 'f(x) = x². Was ist der Definitionsbereich D und Wertebereich W?',
    options: [
      'D = ℝ, W = ℝ',
      'D = ℝ, W = [0, ∞)',
      'D = [0, ∞), W = [0, ∞)',
      'D = ℝ, W = (−∞, 0]',
    ],
    correctIndex: 1,
    explanation: 'Jede reelle Zahl darf quadriert werden → D = ℝ. Aber x² ist immer ≥ 0 → W = [0, ∞). Negative Werte kommen nicht vor!',
    hints: ['x² kann nie negativ sein.'],
  },
  'ex-alg-3-1-c': {
    id: 'ex-alg-3-1-c', lessonId: 'alg-3-1', type: 'true-false',
    statement: 'f(x) = x² ist injektiv (verschiedene x-Werte haben verschiedene y-Werte).',
    correct: false,
    explanation: 'f(2) = 4 und f(−2) = 4. Zwei verschiedene x-Werte haben denselben y-Wert → f ist **nicht injektiv**.',
    hints: ['Injektiv: Wenn f(x₁) = f(x₂), dann muss x₁ = x₂ gelten.'],
  },
  'ex-alg-3-1-mastery': {
    id: 'ex-alg-3-1-mastery', lessonId: 'alg-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Eigenschaft muss eine Funktion haben, damit ihre Umkehrfunktion existiert?',
    options: ['Stetig', 'Differenzierbar', 'Bijektiv (injektiv + surjektiv)', 'Monoton fallend'],
    correctIndex: 2,
    explanation: 'Eine Umkehrfunktion existiert genau dann, wenn f **bijektiv** ist: injektiv (eindeutig) UND surjektiv (jeder Wert wird getroffen). Auf einem eingeschränkten Bereich kann man Bijektivität erzwingen.',
    hints: ['Bijektiv = injektiv (1-zu-1) + surjektiv (ganz B wird getroffen).'],
  },

  // ── Lesson 2: Elementare Funktionen ──
  'ex-alg-3-2-a': {
    id: 'ex-alg-3-2-a', lessonId: 'alg-3-2', type: 'matching',
    question: 'Ordne die Funktionen ihrem Typ zu:',
    pairs: [
      { left: 'f(x) = x³', right: 'Potenzfunktion' },
      { left: 'f(x) = 2ˣ', right: 'Exponentialfunktion' },
      { left: 'f(x) = ln(x)', right: 'Logarithmusfunktion' },
      { left: 'f(x) = sin(x)', right: 'Trigonometrische Funktion' },
    ],
    explanation: 'Potenzfunktion: Variable in der Basis (xⁿ). Exponentialfunktion: Variable im Exponenten (aˣ). Logarithmus: Umkehrung der Exponentialfunktion. Trigonometrisch: sin, cos, tan.',
    hints: ['Wo steht das x? In der Basis → Potenz. Im Exponent → Exponential.'],
  },
  'ex-alg-3-2-b': {
    id: 'ex-alg-3-2-b', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Welche Aussage über f(x) = eˣ ist FALSCH?',
    options: [
      'f(x) > 0 für alle x ∈ ℝ',
      'f(0) = 1',
      'f ist streng monoton steigend',
      'f hat eine Nullstelle bei x = 0',
    ],
    correctIndex: 3,
    explanation: 'eˣ ist IMMER positiv, hat also **keine Nullstelle**. f(0) = e⁰ = 1 ≠ 0. Die anderen Aussagen sind korrekt.',
    hints: ['eˣ > 0 für alle x. Die Funktion berührt nie die x-Achse.'],
  },
  'ex-alg-3-2-c': {
    id: 'ex-alg-3-2-c', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Was ist der Definitionsbereich von f(x) = ln(x)?',
    options: ['ℝ', '(0, ∞)', '[0, ∞)', '(−∞, 0)'],
    correctIndex: 1,
    explanation: 'Der Logarithmus ist nur für **positive** Zahlen definiert: D = (0, ∞). ln(0) und ln(negative Zahl) existieren nicht im Reellen.',
    hints: ['Man kann nur positive Zahlen logarithmieren.'],
  },
  'ex-alg-3-2-d': {
    id: 'ex-alg-3-2-d', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Welche Funktion wächst für große x am schnellsten?',
    options: ['x¹⁰', '10ˣ', 'ln(x)', '1000·x'],
    correctIndex: 1,
    explanation: 'Exponentialfunktionen wachsen schneller als jede Potenzfunktion: Für große x gilt immer aˣ >> xⁿ >> ln(x). Die Hierarchie: Exponential > Potenz > Logarithmus.',
    hints: ['Exponentielles Wachstum schlägt jedes polynomiale Wachstum.'],
  },
  'ex-alg-3-2-mastery': {
    id: 'ex-alg-3-2-mastery', lessonId: 'alg-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = 2·eˣ − 1. Was ist f(0)?',
    options: ['0', '1', '−1', '2'],
    correctIndex: 1,
    explanation: 'f(0) = 2·e⁰ − 1 = 2·1 − 1 = 1.',
    hints: ['e⁰ = 1. Dann einsetzen.'],
  },

  // ── Lesson 3: Funktionsoperationen ──
  'ex-alg-3-3-a': {
    id: 'ex-alg-3-3-a', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: 'Der Graph von f(x) = x² wird um 3 nach rechts und 2 nach oben verschoben. Wie lautet die neue Funktion?',
    options: ['g(x) = (x−3)² + 2', 'g(x) = (x+3)² + 2', 'g(x) = (x−3)² − 2', 'g(x) = (x+2)² + 3'],
    correctIndex: 0,
    explanation: 'Rechts verschieben um a: x durch (x−a) ersetzen. Nach oben um b: +b addieren. Also: g(x) = (x−3)² + 2.',
    hints: ['Rechts → Minus im Argument! Oben → Plus am Ende!'],
  },
  'ex-alg-3-3-b': {
    id: 'ex-alg-3-3-b', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: 'f(x) = sin(x) wird an der x-Achse gespiegelt. Wie lautet die neue Funktion?',
    options: ['g(x) = sin(−x)', 'g(x) = −sin(x)', 'g(x) = sin(x + π)', 'g(x) = |sin(x)|'],
    correctIndex: 1,
    explanation: 'Spiegelung an der x-Achse: alle y-Werte umkehren → g(x) = −f(x) = −sin(x).',
    hints: ['Spiegelung an x-Achse: Minus VOR die Funktion. Spiegelung an y-Achse: Minus INS Argument.'],
  },
  'ex-alg-3-3-c': {
    id: 'ex-alg-3-3-c', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: 'f(x) = x² wird vertikal um Faktor 3 gestreckt. Wie lautet g(x)?',
    options: ['g(x) = x⁶', 'g(x) = 3x²', 'g(x) = (3x)²', 'g(x) = x² + 3'],
    correctIndex: 1,
    explanation: 'Vertikale Streckung um Faktor c: g(x) = c·f(x) = 3·x². Alle y-Werte werden verdreifacht.',
    hints: ['Vertikal strecken = Faktor VOR die Funktion multiplizieren.'],
  },
  'ex-alg-3-3-mastery': {
    id: 'ex-alg-3-3-mastery', lessonId: 'alg-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = eˣ. Welche Transformation ergibt g(x) = e^(x−2) + 1?',
    options: [
      'Verschiebung um 2 nach rechts und 1 nach oben',
      'Verschiebung um 2 nach links und 1 nach oben',
      'Streckung um 2 und Verschiebung um 1',
      'Spiegelung und Verschiebung',
    ],
    correctIndex: 0,
    explanation: 'e^(x−2) = Verschiebung um 2 nach rechts (x → x−2). +1 = Verschiebung um 1 nach oben. Also: 2 rechts, 1 hoch.',
    hints: ['f(x−a) + b: a nach rechts, b nach oben.'],
  },

  // ── Lesson 4: Umkehrfunktionen ──
  'ex-alg-3-4-a': {
    id: 'ex-alg-3-4-a', lessonId: 'alg-3-4', type: 'multiple-choice',
    question: 'Was ist die Umkehrfunktion von f(x) = 2x + 3?',
    options: ['f⁻¹(x) = (x−3)/2', 'f⁻¹(x) = 2x − 3', 'f⁻¹(x) = 1/(2x+3)', 'f⁻¹(x) = (x+3)/2'],
    correctIndex: 0,
    explanation: 'y = 2x + 3 → nach x auflösen: x = (y−3)/2. Dann x und y vertauschen: f⁻¹(x) = (x−3)/2.',
    hints: ['Umkehrfunktion: y = f(x) nach x auflösen, dann x und y tauschen.'],
  },
  'ex-alg-3-4-b': {
    id: 'ex-alg-3-4-b', lessonId: 'alg-3-4', type: 'multiple-choice',
    question: 'Die Umkehrfunktion von f(x) = eˣ ist:',
    options: ['f⁻¹(x) = 1/eˣ', 'f⁻¹(x) = ln(x)', 'f⁻¹(x) = e⁻ˣ', 'f⁻¹(x) = 10ˣ'],
    correctIndex: 1,
    explanation: 'y = eˣ → x = ln(y) → f⁻¹(x) = ln(x). Die Exponentialfunktion und der natürliche Logarithmus sind Umkehrfunktionen voneinander.',
    hints: ['eˣ und ln(x) sind Umkehrfunktionen. Sie "heben sich auf": ln(eˣ) = x, e^(ln(x)) = x.'],
  },
  'ex-alg-3-4-c': {
    id: 'ex-alg-3-4-c', lessonId: 'alg-3-4', type: 'true-false',
    statement: 'Der Graph einer Umkehrfunktion f⁻¹ entsteht durch Spiegelung des Graphen von f an der Geraden y = x.',
    correct: true,
    explanation: 'Ja! Bei der Umkehrung werden x und y vertauscht. Geometrisch entspricht das einer **Spiegelung an y = x**. Deshalb sind z.B. eˣ und ln(x) spiegelsymmetrisch zu y = x.',
    hints: ['x und y tauschen → Punkt (a,b) wird zu (b,a) → Spiegelung an y = x.'],
  },
  'ex-alg-3-4-mastery': {
    id: 'ex-alg-3-4-mastery', lessonId: 'alg-3-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] f(x) = x² (für x ≥ 0). Was ist f⁻¹(x)?',
    options: ['f⁻¹(x) = √x', 'f⁻¹(x) = ±√x', 'f⁻¹(x) = x^(1/2) für alle x', 'Existiert nicht'],
    correctIndex: 0,
    explanation: 'Für x ≥ 0 ist f(x) = x² bijektiv (streng monoton steigend). Die Umkehrfunktion ist f⁻¹(x) = √x (nur die positive Wurzel!). Ohne die Einschränkung x ≥ 0 wäre f nicht injektiv.',
    hints: ['Ohne Einschränkung wäre f(2) = f(−2) = 4 → nicht injektiv. Mit x ≥ 0 geht es.'],
  },
}

const lessons_alg_u3 = [
  {
    id: 'alg-3-1', unitId: 'alg-unit-3',
    title: 'Funktionsbegriff',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Definition einer Funktion kennen', 'Definitions- und Wertebereich bestimmen', 'Injektiv, surjektiv, bijektiv unterscheiden'],
    prerequisites: [],
    nextLessonId: 'alg-3-2',
    steps: [
      {
        id: 'alg-3-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Funktion?',
        content: `Stell dir eine **Maschine** vor: Du wirfst eine Zahl rein (x), und es kommt genau eine Zahl raus (y = f(x)).

**Beispiel:** Die "Quadrier-Maschine" f(x) = x².
- Rein: 3 → Raus: 9
- Rein: −2 → Raus: 4
- Rein: 0 → Raus: 0

**Wichtig:** Für jedes x kommt **genau ein** y raus. Nie null, nie zwei verschiedene!

**Begriffe:**
- **Definitionsbereich D:** Alle erlaubten Eingaben (z.B. bei √x nur x ≥ 0)
- **Wertebereich W:** Alle möglichen Ausgaben (z.B. bei x² nur y ≥ 0)
- **Graph:** Alle Punkte (x, f(x)) in der Ebene`,
      },
      {
        id: 'alg-3-1-s2', type: 'explanation-formal', title: 'Injektiv, Surjektiv, Bijektiv',
        content: `Drei wichtige Eigenschaften von Funktionen f: A → B:

**Injektiv** (eindeutig, 1-zu-1):
Verschiedene Eingaben → verschiedene Ausgaben.
$$f(x_1) = f(x_2) \\Rightarrow x_1 = x_2$$
Beispiel: f(x) = 2x ist injektiv. f(x) = x² ist NICHT injektiv (f(2) = f(−2) = 4).

**Surjektiv** (auf):
Jedes Element in B wird getroffen (hat ein Urbild).
Beispiel: f: ℝ → ℝ, f(x) = x³ ist surjektiv. f(x) = x² ist NICHT surjektiv (−1 wird nie erreicht).

**Bijektiv** = injektiv + surjektiv:
Perfekte 1-zu-1-Zuordnung. **Nur bijektive Funktionen haben eine Umkehrfunktion!**
Beispiel: f(x) = 2x + 1 ist bijektiv (ℝ → ℝ).`,
      },
      {
        id: 'alg-3-1-s3', type: 'visualization', title: 'Funktionsgraph',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'x²' },
          ],
          xRange: [-3, 3],
          yRange: [-1, 9],
          showGrid: true,
        },
      },
      { id: 'alg-3-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-1-a' },
      { id: 'alg-3-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-1-b' },
      { id: 'alg-3-1-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-1-c' },
      { id: 'alg-3-1-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-3-1-mastery' },
    ],
  },
  {
    id: 'alg-3-2', unitId: 'alg-unit-3',
    title: 'Elementare Funktionen',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Potenz-, Exponential- und Logarithmusfunktionen unterscheiden', 'Wachstumsverhalten vergleichen', 'Definitionsbereiche kennen'],
    prerequisites: [],
    nextLessonId: 'alg-3-3',
    steps: [
      {
        id: 'alg-3-2-s1', type: 'explanation-formal', title: 'Die wichtigsten Funktionstypen',
        content: `**Potenzfunktionen:** $f(x) = x^n$
- n gerade: U-Form (Parabel), symmetrisch
- n ungerade: S-Form, punktsymmetrisch
- Definitionsbereich: ℝ

**Exponentialfunktionen:** $f(x) = a^x$ (a > 0, a ≠ 1)
- Wächst (a > 1) oder fällt (0 < a < 1) **extrem schnell**
- Immer positiv: f(x) > 0
- Definitionsbereich: ℝ, Wertebereich: (0, ∞)
- Wichtigste: $e^x$ (Basis e ≈ 2,718)

**Logarithmusfunktionen:** $f(x) = \\log_a(x)$
- Umkehrung der Exponentialfunktion
- Definitionsbereich: (0, ∞)
- Wächst langsam (langsamer als jede Potenz!)
- Wichtigste: $\\ln(x) = \\log_e(x)$

**Trigonometrische Funktionen:** sin(x), cos(x), tan(x)
- Periodisch (wiederholen sich)
- Details im Thema "Trigonometrie"

**Wachstumshierarchie:** $\\ln(x) \\ll x^n \\ll a^x$ für große x`,
      },
      {
        id: 'alg-3-2-s2', type: 'visualization', title: 'Elementare Funktionen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'x²' },
            { fn: (x) => Math.exp(x), color: '#ef4444', label: 'eˣ' },
            { fn: (x) => (x > 0 ? Math.log(x) : NaN), color: '#22c55e', label: 'ln(x)' },
            { fn: (x) => Math.sqrt(Math.abs(x)), color: '#f59e0b', label: '√|x|' },
          ],
          xRange: [-3, 4],
          yRange: [-3, 8],
          showGrid: true,
        },
      },
      { id: 'alg-3-2-s3', type: 'exercise', title: 'Aufgabe 1 (Zuordnung)', exerciseRef: 'ex-alg-3-2-a' },
      { id: 'alg-3-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-2-b' },
      { id: 'alg-3-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-2-c' },
      { id: 'alg-3-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-alg-3-2-d' },
      { id: 'alg-3-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-2-mastery' },
    ],
  },
  {
    id: 'alg-3-3', unitId: 'alg-unit-3',
    title: 'Funktionsoperationen',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Verschiebung, Streckung, Spiegelung anwenden', 'Transformationsregeln sicher beherrschen'],
    prerequisites: [],
    nextLessonId: 'alg-3-4',
    steps: [
      {
        id: 'alg-3-3-s1', type: 'explanation-intuitive', title: 'Graphen verändern — die Regeln',
        content: `Man kann jeden Funktionsgraphen verschieben, strecken und spiegeln. Die Regeln sind immer gleich!

**Verschiebung:**
- $f(x - a)$: um a nach **rechts** (Minus → rechts, Achtung: kontraintuitiv!)
- $f(x) + b$: um b nach **oben**
- Zusammen: $f(x - a) + b$ → a rechts, b hoch

**Streckung/Stauchung:**
- $c \\cdot f(x)$: vertikal um Faktor c (c > 1: strecken, 0 < c < 1: stauchen)
- $f(c \\cdot x)$: horizontal um Faktor 1/c (c > 1: stauchen, kontraintuitiv!)

**Spiegelung:**
- $-f(x)$: an der **x-Achse** (alle y-Werte umkehren)
- $f(-x)$: an der **y-Achse** (Graph links-rechts spiegeln)

**Merkregel:** Alles, was "im x passiert" (im Argument), wirkt **horizontal und umgekehrt**. Alles, was "außen passiert" (vor oder nach f), wirkt **vertikal und wie erwartet**.`,
      },
      { id: 'alg-3-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-3-a' },
      { id: 'alg-3-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-3-b' },
      { id: 'alg-3-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-3-c' },
      { id: 'alg-3-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-3-mastery' },
    ],
  },
  {
    id: 'alg-3-4', unitId: 'alg-unit-3',
    title: 'Umkehrfunktionen',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['Umkehrfunktion berechnen', 'Bedingung für Existenz kennen', 'Graphische Interpretation verstehen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-3-4-s1', type: 'explanation-intuitive', title: 'Umkehrfunktionen — die "Rückwärts-Maschine"',
        content: `Stell dir wieder die Maschine vor: f verwandelt x in y. Die **Umkehrfunktion** f⁻¹ macht das rückgängig: sie verwandelt y zurück in x.

**Beispiel:**
- f(x) = 2x + 3 (verdoppeln und 3 addieren)
- f⁻¹(x) = (x − 3)/2 (3 abziehen und halbieren — genau rückwärts!)

**Berechnung:**
1. Schreibe y = f(x)
2. Löse nach x auf
3. Tausche x und y → f⁻¹(x)

**Wann existiert f⁻¹?**
Nur wenn f **bijektiv** ist! Also: verschiedene Eingaben müssen verschiedene Ausgaben haben.

**Graphisch:** Der Graph von f⁻¹ entsteht durch **Spiegelung an y = x**. Punkt (a,b) wird zu (b,a).`,
      },
      {
        id: 'alg-3-4-s2', type: 'explanation-formal', title: 'Wichtige Umkehrpaare',
        content: `**Wichtige Umkehrfunktionspaare:**

| Funktion f(x) | Umkehrfunktion f⁻¹(x) | Bedingung |
|---------------|----------------------|-----------|
| $x^2$ | $\\sqrt{x}$ | x ≥ 0 |
| $x^3$ | $\\sqrt[3]{x}$ | ℝ → ℝ |
| $e^x$ | $\\ln(x)$ | ℝ → (0,∞) |
| $a^x$ | $\\log_a(x)$ | ℝ → (0,∞) |
| $\\sin(x)$ | $\\arcsin(x)$ | $[-\\pi/2, \\pi/2]$ |

**Wichtige Eigenschaft:**
$$f(f^{-1}(x)) = x \\quad \\text{und} \\quad f^{-1}(f(x)) = x$$

Beispiel: $e^{\\ln(x)} = x$ und $\\ln(e^x) = x$.`,
      },
      { id: 'alg-3-4-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-4-a' },
      { id: 'alg-3-4-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-4-b' },
      { id: 'alg-3-4-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-4-c' },
      { id: 'alg-3-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-4-mastery' },
    ],
  },
]

export const alg_unit3 = {
  id: 'alg-unit-3',
  title: 'Funktionen',
  order: 3,
  description: 'Funktionsbegriff, elementare Funktionen, Transformationen, Umkehrfunktionen',
  lessons: lessons_alg_u3,
  exercises: exercises_alg_u3,
}
