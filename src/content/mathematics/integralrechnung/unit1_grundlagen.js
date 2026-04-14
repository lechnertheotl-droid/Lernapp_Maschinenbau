// ── Integralrechnung Unit 1: Stammfunktionen & Grundintegrale ─────────────────

export const exercises_int_u1 = {
  // ── Lesson 1: Stammfunktion — das Umkehren der Ableitung ──────────────────
  'ex-int-1-1-a': {
    id: 'ex-int-1-1-a', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Was ist eine Stammfunktion F(x) von f(x)?',
    options: [
      'Eine Funktion, deren Ableitung f(x) ergibt: F\'(x) = f(x)',
      'Die Ableitung von f(x)',
      'Der Kehrwert von f(x)',
      'Die Nullstelle von f(x)',
    ],
    correctIndex: 0,
    explanation: 'Eine Stammfunktion F(x) ist eine Funktion, deren Ableitung die Ausgangsfunktion f(x) ergibt. Also: F\'(x) = f(x). Integration ist die Umkehrung der Differentiation.',
    hints: ['Integration ist die Umkehrung der Ableitung.'],
  },
  'ex-int-1-1-b': {
    id: 'ex-int-1-1-b', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Warum schreibt man bei unbestimmten Integralen immer "+ C"?',
    options: [
      'C steht für "Cosinus"',
      'Weil die Integrationskonstante beliebig ist — jede Konstante fällt beim Ableiten weg',
      'C ist immer gleich 0',
      'C ist der Anfangswert der Funktion',
    ],
    correctIndex: 1,
    explanation: 'Beim Ableiten verschwindet jede Konstante (z.B. (5)\' = 0). Daher gibt es unendlich viele Stammfunktionen, die sich nur um eine Konstante C unterscheiden. Wir schreiben "+ C", um alle möglichen Stammfunktionen zu erfassen.',
    hints: ['Was passiert beim Ableiten mit einer Konstanten?', 'Denke daran: (F(x) + 7)\' = F\'(x) + 0 = f(x).'],
  },
  'ex-int-1-1-c': {
    id: 'ex-int-1-1-c', lessonId: 'int-1-1', type: 'matching',
    question: 'Ordne jeder Funktion f(x) eine Stammfunktion F(x) zu:',
    pairs: [
      { left: 'f(x) = 2x', right: 'F(x) = x²' },
      { left: 'f(x) = 3x²', right: 'F(x) = x³' },
      { left: 'f(x) = 1', right: 'F(x) = x' },
      { left: 'f(x) = 0', right: 'F(x) = C (Konstante)' },
    ],
    explanation: 'Man prüft jeweils: Ist F\'(x) = f(x)? (x²)\' = 2x ✓, (x³)\' = 3x² ✓, (x)\' = 1 ✓, (C)\' = 0 ✓. Bei einer Stammfunktion muss immer gelten: Leitet man sie ab, erhält man die ursprüngliche Funktion.',
    hints: ['Leite jede rechte Seite ab und prüfe, ob du die linke Seite erhältst.'],
  },
  'ex-int-1-1-d': {
    id: 'ex-int-1-1-d', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Welche der folgenden Funktionen ist eine Stammfunktion von f(x) = 6x?',
    options: ['F(x) = 6x²', 'F(x) = 3x²', 'F(x) = 3x² + 5', 'Sowohl F(x) = 3x² als auch F(x) = 3x² + 5'],
    correctIndex: 3,
    explanation: '(3x²)\' = 6x ✓ und (3x² + 5)\' = 6x + 0 = 6x ✓. Beide sind Stammfunktionen! Sie unterscheiden sich nur um die Konstante C = 5. Jede Funktion der Form 3x² + C ist eine Stammfunktion von 6x.',
    hints: ['Leite beide Optionen ab.', 'Vergiss nicht: die Integrationskonstante C kann jeden Wert haben.'],
  },
  'ex-int-1-1-mastery': {
    id: 'ex-int-1-1-mastery', lessonId: 'int-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: 'F(x) = x⁴ + 2x + 7 ist Stammfunktion von:',
    options: ['f(x) = 4x³ + 2', 'f(x) = x⁵/5 + x² + 7x', 'f(x) = 4x⁴ + 2', 'f(x) = 4x³ + 2x'],
    correctIndex: 0,
    explanation: 'Wir leiten F(x) ab: F\'(x) = (x⁴)\' + (2x)\' + (7)\' = 4x³ + 2 + 0 = 4x³ + 2. Also ist f(x) = 4x³ + 2.',
    hints: ['Leite F(x) ab, um f(x) zu finden.'],
  },

  // ── Lesson 2: Grundintegrale ──────────────────────────────────────────────
  'ex-int-1-2-a': {
    id: 'ex-int-1-2-a', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '∫x³ dx = ?',
    options: ['x⁴ + C', 'x⁴/4 + C', '3x² + C', 'x⁴/3 + C'],
    correctIndex: 1,
    explanation: 'Die Potenzregel für Integration: ∫xⁿ dx = x^(n+1)/(n+1) + C. Hier: n = 3, also ∫x³ dx = x⁴/4 + C. Probe: (x⁴/4)\' = 4x³/4 = x³ ✓',
    hints: ['Potenzregel: Exponent um 1 erhöhen, dann durch den neuen Exponenten teilen.'],
  },
  'ex-int-1-2-b': {
    id: 'ex-int-1-2-b', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '∫cos(x) dx = ?',
    options: ['sin(x) + C', '-sin(x) + C', '-cos(x) + C', 'tan(x) + C'],
    correctIndex: 0,
    explanation: '∫cos(x) dx = sin(x) + C. Probe: (sin(x))\' = cos(x) ✓. Merke: Integration ist die Umkehrung der Ableitung — da (sin x)\' = cos x, ist ∫cos x dx = sin x + C.',
    hints: ['Was ist die Ableitung von sin(x)?'],
  },
  'ex-int-1-2-c': {
    id: 'ex-int-1-2-c', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '∫eˣ dx = ?',
    options: ['x·eˣ + C', 'eˣ + C', 'eˣ/x + C', 'ln(eˣ) + C'],
    correctIndex: 1,
    explanation: '∫eˣ dx = eˣ + C. Die Exponentialfunktion eˣ ist ihre eigene Stammfunktion — genauso wie sie ihre eigene Ableitung ist! Probe: (eˣ)\' = eˣ ✓',
    hints: ['eˣ ist die einzige Funktion, die ihre eigene Ableitung ist.'],
  },
  'ex-int-1-2-d': {
    id: 'ex-int-1-2-d', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '∫1/x dx = ?',
    options: ['x⁰ + C', 'ln(x) + C', 'ln|x| + C', '-1/x² + C'],
    correctIndex: 2,
    explanation: '∫1/x dx = ln|x| + C. Der Betrag |x| ist wichtig, weil ln nur für positive Argumente definiert ist, aber 1/x auch für x < 0 existiert. Probe: (ln|x|)\' = 1/x ✓',
    hints: ['Welche Funktion hat die Ableitung 1/x?', 'Warum steht ein Betrag um x?'],
  },
  'ex-int-1-2-e': {
    id: 'ex-int-1-2-e', lessonId: 'int-1-2', type: 'matching',
    question: 'Ordne jeder Funktion ihr Integral zu:',
    pairs: [
      { left: '∫sin(x) dx', right: '-cos(x) + C' },
      { left: '∫cos(x) dx', right: 'sin(x) + C' },
      { left: '∫eˣ dx', right: 'eˣ + C' },
      { left: '∫x² dx', right: 'x³/3 + C' },
    ],
    explanation: '∫sin(x) dx = -cos(x) + C, denn (-cos(x))\' = sin(x). ∫cos(x) dx = sin(x) + C, denn (sin(x))\' = cos(x). ∫eˣ dx = eˣ + C. ∫x² dx = x³/3 + C nach der Potenzregel.',
    hints: ['Überlege: Welche Funktion muss ich ableiten, um den Integranden zu erhalten?'],
  },
  'ex-int-1-2-mastery': {
    id: 'ex-int-1-2-mastery', lessonId: 'int-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '∫sin(x) dx = ?',
    options: ['cos(x) + C', '-cos(x) + C', 'sin(x) + C', '-sin(x) + C'],
    correctIndex: 1,
    explanation: '∫sin(x) dx = -cos(x) + C. Probe: (-cos(x))\' = -(-sin(x)) = sin(x) ✓. Das Minus ist entscheidend!',
    hints: ['Leite -cos(x) ab: (-cos(x))\' = sin(x).'],
  },

  // ── Lesson 3: Summenregel & Faktorregel ───────────────────────────────────
  'ex-int-1-3-a': {
    id: 'ex-int-1-3-a', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '∫(3x² + 2x) dx = ?',
    options: ['3x³ + 2x² + C', 'x³ + x² + C', '6x + 2 + C', '3x³/3 + 2x²/2 + C'],
    correctIndex: 1,
    explanation: 'Summenregel: ∫(3x² + 2x) dx = ∫3x² dx + ∫2x dx = 3·(x³/3) + 2·(x²/2) + C = x³ + x² + C. Probe: (x³ + x²)\' = 3x² + 2x ✓',
    hints: ['Wende die Summenregel an: integriere jedes Glied einzeln.', 'Faktorregel: ∫c·f dx = c·∫f dx'],
  },
  'ex-int-1-3-b': {
    id: 'ex-int-1-3-b', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '∫5·cos(x) dx = ?',
    options: ['5·sin(x) + C', '-5·sin(x) + C', '5·cos(x) + C', 'sin(5x) + C'],
    correctIndex: 0,
    explanation: 'Faktorregel: ∫5·cos(x) dx = 5·∫cos(x) dx = 5·sin(x) + C. Den konstanten Faktor darf man vor das Integral ziehen.',
    hints: ['Ziehe die 5 vor das Integral.'],
  },
  'ex-int-1-3-c': {
    id: 'ex-int-1-3-c', lessonId: 'int-1-3', type: 'number-input',
    question: '∫(4x³ − 6x + 1) dx = x⁴ − 3x² + x + C. Wie lautet der Wert von F(2), wenn C = 0? (F(x) = x⁴ − 3x² + x)',
    correctAnswer: 6,
    tolerance: 0.01,
    unit: '',
    explanation: 'F(2) = 2⁴ − 3·2² + 2 = 16 − 12 + 2 = 6. Die Stammfunktion ist F(x) = x⁴ − 3x² + x (mit C = 0).',
    hints: ['Setze x = 2 in F(x) = x⁴ − 3x² + x ein.', '2⁴ = 16, 3·2² = 12'],
  },
  'ex-int-1-3-d': {
    id: 'ex-int-1-3-d', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '∫(eˣ − 2sin(x) + 3) dx = ?',
    options: [
      'eˣ + 2cos(x) + 3x + C',
      'eˣ − 2cos(x) + 3x + C',
      'eˣ + 2cos(x) − 3x + C',
      'xeˣ − 2cos(x) + 3x + C',
    ],
    correctIndex: 0,
    explanation: '∫eˣ dx = eˣ. ∫(-2sin(x)) dx = -2·(-cos(x)) = 2cos(x). ∫3 dx = 3x. Zusammen: eˣ + 2cos(x) + 3x + C.',
    hints: ['Integriere jeden Summanden einzeln.', '∫sin(x) dx = -cos(x), also ∫(-2sin(x)) dx = +2cos(x).'],
  },
  'ex-int-1-3-mastery': {
    id: 'ex-int-1-3-mastery', lessonId: 'int-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '∫(6x² − 4x + eˣ) dx = ?',
    options: ['2x³ − 2x² + eˣ + C', '12x − 4 + eˣ + C', '2x³ − 4x² + eˣ + C', '6x³ − 2x² + eˣ + C'],
    correctIndex: 0,
    explanation: '∫6x² dx = 6·(x³/3) = 2x³. ∫(-4x) dx = -4·(x²/2) = -2x². ∫eˣ dx = eˣ. Ergebnis: 2x³ − 2x² + eˣ + C. Probe: (2x³ − 2x² + eˣ)\' = 6x² − 4x + eˣ ✓',
    hints: ['Jedes Glied einzeln integrieren: Potenzregel für x², x und Grundintegral für eˣ.'],
  },

  // ── Lesson 4: Das bestimmte Integral ──────────────────────────────────────
  'ex-int-1-4-a': {
    id: 'ex-int-1-4-a', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: ∫₀² 2x dx',
    correctAnswer: 4,
    tolerance: 0.01,
    unit: '',
    explanation: 'Stammfunktion: F(x) = x². Hauptsatz: F(2) − F(0) = 2² − 0² = 4 − 0 = 4. Geometrisch: Fläche des Dreiecks mit Grundseite 2 und Höhe 4 ergibt (2·4)/2 = 4.',
    hints: ['Finde zuerst die Stammfunktion von 2x.', 'Setze dann die Grenzen ein: F(oben) − F(unten).'],
  },
  'ex-int-1-4-b': {
    id: 'ex-int-1-4-b', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: ∫₁³ x² dx (Ergebnis als Dezimalzahl, gerundet auf 2 Nachkommastellen)',
    correctAnswer: 8.67,
    tolerance: 0.01,
    unit: '',
    explanation: 'Stammfunktion: F(x) = x³/3. F(3) − F(1) = 27/3 − 1/3 = 9 − 1/3 = 26/3 ≈ 8,67.',
    hints: ['∫x² dx = x³/3 + C.', 'F(3) = 27/3 = 9, F(1) = 1/3.'],
  },
  'ex-int-1-4-c': {
    id: 'ex-int-1-4-c', lessonId: 'int-1-4', type: 'multiple-choice',
    question: 'Was beschreibt ∫ₐᵇ f(x) dx geometrisch, wenn f(x) ≥ 0 auf [a,b]?',
    options: [
      'Die Steigung von f',
      'Die Fläche zwischen der Kurve f(x) und der x-Achse von a bis b',
      'Den Mittelwert von f',
      'Die Länge der Kurve',
    ],
    correctIndex: 1,
    explanation: 'Für f(x) ≥ 0 entspricht das bestimmte Integral ∫ₐᵇ f(x) dx der Fläche zwischen dem Graphen von f und der x-Achse im Intervall [a, b]. Das ist die geometrische Grundbedeutung des Integrals.',
    hints: ['Denke an die Fläche "unter" der Kurve.'],
  },
  'ex-int-1-4-d': {
    id: 'ex-int-1-4-d', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: ∫₀^π sin(x) dx (ganzzahliges Ergebnis)',
    correctAnswer: 2,
    tolerance: 0.01,
    unit: '',
    explanation: 'Stammfunktion: F(x) = -cos(x). F(π) − F(0) = -cos(π) − (-cos(0)) = -(-1) − (-1) = 1 + 1 = 2. Die Fläche unter einer halben Sinuswelle beträgt genau 2.',
    hints: ['∫sin(x) dx = -cos(x) + C.', '-cos(π) = -(-1) = 1 und -cos(0) = -1.'],
  },
  'ex-int-1-4-mastery': {
    id: 'ex-int-1-4-mastery', lessonId: 'int-1-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: ∫₁² (3x² + 1) dx',
    correctAnswer: 8,
    tolerance: 0.01,
    unit: '',
    explanation: 'Stammfunktion: F(x) = x³ + x. F(2) − F(1) = (8 + 2) − (1 + 1) = 10 − 2 = 8.',
    hints: ['∫3x² dx = x³, ∫1 dx = x.', 'F(x) = x³ + x. Setze Grenzen ein.'],
  },

  // ── Lesson 5: Hauptsatz der Differential- und Integralrechnung ────────────
  'ex-int-1-5-a': {
    id: 'ex-int-1-5-a', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Der Hauptsatz der Differential- und Integralrechnung besagt:',
    options: [
      'Jede Funktion hat eine Ableitung',
      'Wenn F eine Stammfunktion von f ist, dann gilt ∫ₐᵇ f(x) dx = F(b) − F(a)',
      'Die Ableitung ist immer positiv',
      'Jedes Integral kann exakt berechnet werden',
    ],
    correctIndex: 1,
    explanation: 'Der Hauptsatz verbindet Differentiation und Integration: Wenn F\'(x) = f(x), dann ist ∫ₐᵇ f(x) dx = F(b) − F(a). Das bedeutet: Um eine Fläche (bestimmtes Integral) zu berechnen, braucht man nur eine Stammfunktion und setzt die Grenzen ein.',
    hints: ['Er verbindet die beiden Grundoperationen der Analysis.'],
  },
  'ex-int-1-5-b': {
    id: 'ex-int-1-5-b', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Sei F(x) = ∫₀ˣ t² dt. Was ist F\'(x)?',
    options: ['x²', 'x³/3', '2x', '0'],
    correctIndex: 0,
    explanation: 'Nach dem Hauptsatz gilt: Wenn F(x) = ∫₀ˣ f(t) dt, dann ist F\'(x) = f(x). Hier: f(t) = t², also F\'(x) = x². Das Integral als Funktion der oberen Grenze hat als Ableitung den Integranden.',
    hints: ['Der Hauptsatz sagt: d/dx ∫₀ˣ f(t) dt = f(x).'],
  },
  'ex-int-1-5-c': {
    id: 'ex-int-1-5-c', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Welche Aussage folgt aus dem Hauptsatz?',
    options: [
      'Integration und Differentiation sind unabhängige Operationen',
      'Integration und Differentiation sind zueinander inverse Operationen',
      'Jede Funktion ist integrierbar',
      'Jede stetige Funktion hat keine Stammfunktion',
    ],
    correctIndex: 1,
    explanation: 'Der Hauptsatz zeigt: Differentiation und Integration sind Umkehroperationen voneinander. Wenn man zuerst integriert und dann ableitet (oder umgekehrt), erhält man die ursprüngliche Funktion zurück. Das ist die zentrale Aussage der Analysis!',
    hints: ['Was passiert, wenn man zuerst integriert und dann ableitet?'],
  },
  'ex-int-1-5-mastery': {
    id: 'ex-int-1-5-mastery', lessonId: 'int-1-5', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne mit dem Hauptsatz: ∫₀¹ (eˣ + 2x) dx (Ergebnis auf 2 Nachkommastellen gerundet)',
    correctAnswer: 2.72,
    tolerance: 0.02,
    unit: '',
    explanation: 'Stammfunktion: F(x) = eˣ + x². F(1) − F(0) = (e¹ + 1) − (e⁰ + 0) = e + 1 − 1 = e ≈ 2,72.',
    hints: ['∫eˣ dx = eˣ, ∫2x dx = x².', 'F(x) = eˣ + x². F(1) = e + 1, F(0) = 1.'],
  },
}

const lessons_int_u1 = [
  {
    id: 'int-1-1', unitId: 'int-unit-1',
    title: 'Stammfunktion — das Umkehren der Ableitung',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Stammfunktion als Umkehrung der Ableitung verstehen', 'Integrationskonstante C erklären können'],
    prerequisites: [],
    nextLessonId: 'int-1-2',
    steps: [
      {
        id: 'int-1-1-s1', type: 'explanation-intuitive', title: 'Was ist Integration?',
        content: `Stell dir vor, du kennst die **Geschwindigkeit** eines Autos zu jedem Zeitpunkt. Jetzt willst du wissen, wie weit es insgesamt gefahren ist.

Dazu musst du die Geschwindigkeit über die Zeit "aufaddieren" — und genau das ist **Integration**.

Bei der Ableitung haben wir gelernt: Aus der Strecke berechnet man die Geschwindigkeit.
Bei der Integration gehen wir den **umgekehrten Weg**: Aus der Geschwindigkeit berechnet man die Strecke.

**Integration ist die Umkehrung der Differentiation.**

Wenn f(x) gegeben ist und wir eine Funktion F(x) suchen, deren Ableitung f(x) ergibt, dann nennen wir F(x) eine **Stammfunktion** von f(x).

$$F'(x) = f(x) \\quad \\Longleftrightarrow \\quad \\int f(x)\\,dx = F(x) + C$$

Das Symbol $\\int$ heißt **Integralzeichen** und $dx$ zeigt an, nach welcher Variable wir integrieren.`,
      },
      {
        id: 'int-1-1-s2', type: 'explanation-formal', title: 'Die Integrationskonstante C',
        content: `**Warum steht da immer "+ C"?**

Beim Ableiten verschwindet jede Konstante:
$$(F(x) + 5)' = F'(x) + 0 = f(x)$$
$$(F(x) - 3)' = F'(x) + 0 = f(x)$$
$$(F(x) + 42)' = F'(x) + 0 = f(x)$$

Alle Funktionen $F(x) + C$ (mit beliebigem $C \\in \\mathbb{R}$) haben die **gleiche Ableitung** $f(x)$.

Daher ist die Stammfunktion **nicht eindeutig**, sondern eine ganze **Familie von Funktionen**, die sich nur durch eine Konstante unterscheiden.

**Schreibweise des unbestimmten Integrals:**
$$\\int f(x)\\,dx = F(x) + C$$

Die Konstante $C$ heißt **Integrationskonstante**.

**Beispiel:**
$$\\int 2x\\,dx = x^2 + C$$

Probe: $(x^2 + C)' = 2x + 0 = 2x$ ✓`,
      },
      {
        id: 'int-1-1-s3', type: 'visualization', title: 'Ableitung und Stammfunktion',
        visualizationId: 'derivative-graph',
        params: { fnName: 'x²', showDerivative: true, showArea: true },
      },
      { id: 'int-1-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-1-a' },
      { id: 'int-1-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-1-b' },
      { id: 'int-1-1-s6', type: 'exercise', title: 'Aufgabe 3 — Zuordnung', exerciseRef: 'ex-int-1-1-c' },
      { id: 'int-1-1-s7', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-1-d' },
      { id: 'int-1-1-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-1-mastery' },
    ],
  },
  {
    id: 'int-1-2', unitId: 'int-unit-1',
    title: 'Grundintegrale',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Grundintegrale auswendig kennen', 'Potenzregel für Integration anwenden'],
    prerequisites: [],
    nextLessonId: 'int-1-3',
    steps: [
      {
        id: 'int-1-2-s1', type: 'explanation-formal', title: 'Tabelle der Grundintegrale',
        content: `**Auswendig lernen — Prüfungsrelevant!**

Die folgenden Integrale sind die Bausteine für alles Weitere. Man erhält sie, indem man die bekannten Ableitungen "rückwärts liest".

| $f(x)$ (Integrand)  | $\\int f(x)\\,dx$ (Stammfunktion) |
|----------------------|----------------------------------|
| $x^n$ $(n \\neq -1)$ | $\\dfrac{x^{n+1}}{n+1} + C$       |
| $\\dfrac{1}{x}$      | $\\ln|x| + C$                     |
| $e^x$               | $e^x + C$                        |
| $\\sin(x)$           | $-\\cos(x) + C$                   |
| $\\cos(x)$           | $\\sin(x) + C$                    |

**Die Potenzregel im Detail:**

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

Merke: **Exponent um 1 erhöhen**, dann durch den **neuen Exponenten teilen**.

**Beispiele:**
- $\\int x^4\\,dx = \\frac{x^5}{5} + C$
- $\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$
- $\\int \\sqrt{x}\\,dx = \\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C$

**Warum gilt die Potenzregel nicht für n = -1?**
Weil $\\frac{x^0}{0}$ nicht definiert ist! Für $n = -1$ gilt stattdessen: $\\int x^{-1}\\,dx = \\int \\frac{1}{x}\\,dx = \\ln|x| + C$.`,
      },
      { id: 'int-1-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-2-a' },
      { id: 'int-1-2-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-2-b' },
      { id: 'int-1-2-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-2-c' },
      { id: 'int-1-2-s5', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-2-d' },
      { id: 'int-1-2-s6', type: 'exercise', title: 'Aufgabe 5 — Zuordnung', exerciseRef: 'ex-int-1-2-e' },
      { id: 'int-1-2-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-2-mastery' },
    ],
  },
  {
    id: 'int-1-3', unitId: 'int-unit-1',
    title: 'Summenregel & Faktorregel',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Summenregel für Integration anwenden', 'Konstantenfaktor vor das Integral ziehen'],
    prerequisites: [],
    nextLessonId: 'int-1-4',
    steps: [
      {
        id: 'int-1-3-s1', type: 'explanation-formal', title: 'Rechenregeln für Integrale',
        content: `Genau wie bei der Ableitung darf man Summen **gliedweise** integrieren und konstante Faktoren **vor das Integral** ziehen.

**Summenregel:**
$$\\int \\bigl[f(x) + g(x)\\bigr]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$$

Man integriert jeden Summanden einzeln.

**Faktorregel (Konstantenfaktor):**
$$\\int c \\cdot f(x)\\,dx = c \\cdot \\int f(x)\\,dx \\quad (c \\in \\mathbb{R})$$

Einen konstanten Faktor darf man vor das Integral ziehen.

**Achtung:** Diese Regeln gelten **nur** für Summen und konstante Faktoren! Für Produkte $\\int f(x) \\cdot g(x)\\,dx$ gibt es **keine** einfache Regel — dafür braucht man spezielle Techniken (partielle Integration, Substitution).

**Beispiel Schritt für Schritt:**
$$\\int (6x^2 - 4x + 3)\\,dx$$
$$= \\int 6x^2\\,dx - \\int 4x\\,dx + \\int 3\\,dx$$
$$= 6 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + 3x + C$$
$$= 2x^3 - 2x^2 + 3x + C$$`,
      },
      { id: 'int-1-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-3-a' },
      { id: 'int-1-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-3-b' },
      { id: 'int-1-3-s4', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-int-1-3-c' },
      { id: 'int-1-3-s5', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-3-d' },
      { id: 'int-1-3-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-3-mastery' },
    ],
  },
  {
    id: 'int-1-4', unitId: 'int-unit-1',
    title: 'Das bestimmte Integral',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Bestimmtes Integral berechnen', 'Geometrische Deutung als Fläche verstehen'],
    prerequisites: [],
    nextLessonId: 'int-1-5',
    steps: [
      {
        id: 'int-1-4-s1', type: 'explanation-intuitive', title: 'Fläche unter einer Kurve',
        content: `Bisher haben wir **unbestimmte** Integrale berechnet — das Ergebnis war eine Funktion (+ C).

Jetzt kommt das **bestimmte Integral**: Hier berechnen wir eine **Zahl**, nämlich die **Fläche** unter einer Kurve.

Stell dir vor, du hast den Graphen einer Funktion $f(x)$ und willst die Fläche zwischen der Kurve und der x-Achse von $x = a$ bis $x = b$ wissen.

Die Idee: Teile die Fläche in viele schmale Rechtecke auf. Jedes Rechteck hat die Breite $\\Delta x$ und die Höhe $f(x_i)$. Die Gesamtfläche ist ungefähr:

$$A \\approx \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$$

Je mehr Rechtecke (je schmaler), desto genauer wird die Fläche. Im Grenzwert (unendlich viele, unendlich schmale Rechtecke) erhalten wir das bestimmte Integral:

$$A = \\int_a^b f(x)\\,dx$$

Dabei heißen $a$ die **untere** und $b$ die **obere Integrationsgrenze**.`,
      },
      {
        id: 'int-1-4-s2', type: 'explanation-formal', title: 'Berechnung mit dem Hauptsatz',
        content: `**Das bestimmte Integral berechnen:**

$$\\int_a^b f(x)\\,dx = F(b) - F(a) = \\bigl[F(x)\\bigr]_a^b$$

Dabei ist $F(x)$ eine beliebige Stammfunktion von $f(x)$.

**Schreibweise:** $\\bigl[F(x)\\bigr]_a^b$ bedeutet: "F(x) ausgewertet von a bis b", also $F(b) - F(a)$.

**Beachte:** Die Integrationskonstante $C$ fällt beim bestimmten Integral weg, denn:
$$\\bigl[F(x) + C\\bigr]_a^b = (F(b) + C) - (F(a) + C) = F(b) - F(a)$$

**Schritt-für-Schritt-Beispiel:**
$$\\int_1^3 x^2\\,dx$$
1. Stammfunktion: $F(x) = \\frac{x^3}{3}$
2. Obere Grenze einsetzen: $F(3) = \\frac{27}{3} = 9$
3. Untere Grenze einsetzen: $F(1) = \\frac{1}{3}$
4. Differenz bilden: $9 - \\frac{1}{3} = \\frac{26}{3} \\approx 8{,}67$

**Wichtig:** Wenn $f(x) < 0$ im Intervall $[a,b]$, ist das Integral **negativ** — es misst dann die Fläche mit negativem Vorzeichen.`,
      },
      {
        id: 'int-1-4-s3', type: 'visualization', title: 'Fläche unter f(x) = x²',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'f(x) = x²' },
          ],
          xRange: [-1, 4],
          yRange: [-1, 10],
          showGrid: true,
          shadedArea: { from: 1, to: 3, color: 'rgba(59, 130, 246, 0.3)' },
        },
      },
      { id: 'int-1-4-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-4-a' },
      { id: 'int-1-4-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-4-b' },
      { id: 'int-1-4-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-4-c' },
      { id: 'int-1-4-s7', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-4-d' },
      { id: 'int-1-4-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-4-mastery' },
    ],
  },
  {
    id: 'int-1-5', unitId: 'int-unit-1',
    title: 'Hauptsatz der Differential- und Integralrechnung',
    order: 5, estimatedMinutes: 14,
    learningGoals: ['Hauptsatz der Analysis formulieren können', 'Zusammenhang Ableitung ↔ Integral verstehen'],
    prerequisites: [],
    nextLessonId: 'int-2-1',
    steps: [
      {
        id: 'int-1-5-s1', type: 'explanation-intuitive', title: 'Die Brücke zwischen Ableitung und Integral',
        content: `Der **Hauptsatz der Differential- und Integralrechnung** (auch: Fundamentalsatz der Analysis) ist einer der wichtigsten Sätze der gesamten Mathematik.

Er sagt im Wesentlichen:

**Ableitung und Integration sind Umkehroperationen.**

Stell dir einen Wasserhahn vor:
- Die **Flussrate** (Liter pro Sekunde) = $f(t)$
- Die **Gesamtmenge** Wasser im Eimer = $F(t)$

Die Flussrate ist die Ableitung der Gesamtmenge: $F'(t) = f(t)$.
Die Gesamtmenge ist das Integral der Flussrate: $F(t) = \\int_0^t f(s)\\,ds$.

Wenn du die Flussrate kennst und die Gesamtmenge willst → **integrieren**.
Wenn du die Gesamtmenge kennst und die Flussrate willst → **ableiten**.`,
      },
      {
        id: 'int-1-5-s2', type: 'explanation-formal', title: 'Formale Formulierung',
        content: `**Hauptsatz der Differential- und Integralrechnung:**

Sei $f$ eine stetige Funktion auf $[a, b]$.

**Teil 1:** Die Funktion $F(x) = \\int_a^x f(t)\\,dt$ ist differenzierbar und es gilt:
$$F'(x) = f(x)$$

Das heißt: Wenn man das Integral als Funktion der oberen Grenze betrachtet und ableitet, erhält man den Integranden zurück.

**Teil 2:** Wenn $F$ eine beliebige Stammfunktion von $f$ ist (also $F' = f$), dann gilt:
$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

**Zusammenfassung:**
- Integration → Ableitung → zurück zur Ausgangsfunktion: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$
- Ableitung → Integration → zurück (bis auf Konstante): $\\int_a^x f'(t)\\,dt = f(x) - f(a)$

Diesen Satz haben wir bereits in Lektion 4 zum Berechnen bestimmter Integrale benutzt — jetzt kennen wir seine vollständige Formulierung.`,
      },
      { id: 'int-1-5-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-5-a' },
      { id: 'int-1-5-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-5-b' },
      { id: 'int-1-5-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-5-c' },
      { id: 'int-1-5-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-5-mastery' },
    ],
  },
]

export const int_unit1 = {
  id: 'int-unit-1',
  title: 'Stammfunktionen & Grundintegrale',
  order: 1,
  description: 'Stammfunktionen, Grundintegrale, Rechenregeln, bestimmtes Integral und Hauptsatz',
  lessons: lessons_int_u1,
  exercises: exercises_int_u1,
}
