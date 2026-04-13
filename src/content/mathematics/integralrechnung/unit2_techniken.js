// ── Integralrechnung Unit 2: Integrationstechniken ────────────────────────────

export const exercises_int_u2 = {
  // ── Lesson 1: Substitution ────────────────────────────────────────────────
  'ex-int-2-1-a': {
    id: 'ex-int-2-1-a', lessonId: 'int-2-1', type: 'multiple-choice',
    question: 'Was ist der erste Schritt bei der Substitutionsmethode?',
    options: [
      'Die Funktion ableiten',
      'Einen geeigneten Teil des Integranden als u = g(x) setzen',
      'Partielle Integration anwenden',
      'Die Funktion in Partialbrüche zerlegen',
    ],
    correctIndex: 1,
    explanation: 'Bei der Substitution wählt man einen geeigneten inneren Ausdruck u = g(x). Dann berechnet man du = g\'(x) dx und ersetzt alles im Integral. Man sucht den Teil, dessen Ableitung ebenfalls im Integranden vorkommt.',
    hints: ['Denke an die Kettenregel "rückwärts".'],
  },
  'ex-int-2-1-b': {
    id: 'ex-int-2-1-b', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '∫2x · eˣ² dx = ? (Tipp: u = x²)',
    options: ['x² · eˣ² + C', 'eˣ² + C', '2eˣ² + C', 'eˣ²/2 + C'],
    correctIndex: 1,
    explanation: 'Substitution: u = x², du = 2x dx. Das Integral wird zu ∫eᵘ du = eᵘ + C = eˣ² + C. Probe: (eˣ²)\' = eˣ² · 2x ✓',
    hints: ['Setze u = x². Was ist dann du?', 'du = 2x dx — genau das steht schon im Integral!'],
  },
  'ex-int-2-1-c': {
    id: 'ex-int-2-1-c', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '∫cos(3x) dx = ? (Tipp: u = 3x)',
    options: ['sin(3x) + C', 'sin(3x)/3 + C', '3·sin(3x) + C', '-sin(3x)/3 + C'],
    correctIndex: 1,
    explanation: 'Substitution: u = 3x, du = 3 dx, also dx = du/3. ∫cos(u) · (du/3) = (1/3)·sin(u) + C = sin(3x)/3 + C. Probe: (sin(3x)/3)\' = cos(3x)·3/3 = cos(3x) ✓',
    hints: ['u = 3x, du = 3dx, also dx = du/3.', 'Vergiss nicht, durch 3 zu teilen!'],
  },
  'ex-int-2-1-d': {
    id: 'ex-int-2-1-d', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '∫x · (x² + 1)⁴ dx = ?',
    options: ['(x² + 1)⁵/10 + C', '(x² + 1)⁵/5 + C', 'x²(x² + 1)⁴/2 + C', '(x² + 1)⁵ + C'],
    correctIndex: 0,
    explanation: 'Substitution: u = x² + 1, du = 2x dx, also x dx = du/2. ∫u⁴ · (du/2) = (1/2) · u⁵/5 + C = (x² + 1)⁵/10 + C.',
    hints: ['Setze u = x² + 1.', 'du = 2x dx → x dx = du/2. Dann hast du (1/2)∫u⁴ du.'],
  },
  'ex-int-2-1-mastery': {
    id: 'ex-int-2-1-mastery', lessonId: 'int-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] ∫sin(x) · cos(x) dx = ? (Tipp: u = sin(x))',
    options: ['sin²(x)/2 + C', '-cos²(x)/2 + C', 'sin(x)·cos(x) + C', 'Sowohl sin²(x)/2 + C als auch -cos²(x)/2 + C sind korrekt'],
    correctIndex: 3,
    explanation: 'Mit u = sin(x): du = cos(x) dx → ∫u du = u²/2 + C = sin²(x)/2 + C. Mit u = cos(x): du = -sin(x) dx → -∫u du = -u²/2 + C = -cos²(x)/2 + C. Beide Ergebnisse sind korrekt — sie unterscheiden sich nur um eine Konstante, denn sin²(x)/2 = (1 - cos²(x))/2 = 1/2 - cos²(x)/2.',
    hints: ['Es gibt zwei mögliche Substitutionen: u = sin(x) oder u = cos(x).', 'Beide Ergebnisse sind korrekt — prüfe, ob sie sich nur um eine Konstante unterscheiden.'],
  },

  // ── Lesson 2: Partielle Integration ───────────────────────────────────────
  'ex-int-2-2-a': {
    id: 'ex-int-2-2-a', lessonId: 'int-2-2', type: 'multiple-choice',
    question: 'Die Formel für partielle Integration lautet:',
    options: [
      '∫u·v\' dx = u·v − ∫u\'·v dx',
      '∫u·v\' dx = u·v + ∫u\'·v dx',
      '∫u·v\' dx = u\'·v − ∫u·v\' dx',
      '∫u·v\' dx = u·v',
    ],
    correctIndex: 0,
    explanation: 'Partielle Integration: ∫u·v\' dx = u·v − ∫u\'·v dx. Diese Formel stammt aus der Produktregel der Ableitung: (u·v)\' = u\'·v + u·v\'. Umgestellt: u·v\' = (u·v)\' − u\'·v. Integriert man beide Seiten, erhält man die Formel.',
    hints: ['Die Formel kommt von der Produktregel der Ableitung.'],
  },
  'ex-int-2-2-b': {
    id: 'ex-int-2-2-b', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '∫x · eˣ dx = ? (partielle Integration mit u = x, v\' = eˣ)',
    options: ['x·eˣ − eˣ + C', 'x·eˣ + eˣ + C', 'x²·eˣ/2 + C', 'eˣ(x − 1) + C'],
    correctIndex: 0,
    explanation: 'u = x → u\' = 1; v\' = eˣ → v = eˣ. Formel: ∫x·eˣ dx = x·eˣ − ∫1·eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C. Antworten A und D sind also gleichwertig, aber A ist die direkte Anwendung der Formel.',
    hints: ['Wähle u = x (wird beim Ableiten einfacher) und v\' = eˣ (leicht zu integrieren).', 'u\' = 1, v = eˣ. Einsetzen in ∫u·v\' = u·v − ∫u\'·v.'],
  },
  'ex-int-2-2-c': {
    id: 'ex-int-2-2-c', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '∫x · cos(x) dx = ?',
    options: ['x·sin(x) + cos(x) + C', 'x·sin(x) − cos(x) + C', 'x·cos(x) + sin(x) + C', '-x·sin(x) + cos(x) + C'],
    correctIndex: 0,
    explanation: 'u = x → u\' = 1; v\' = cos(x) → v = sin(x). ∫x·cos(x) dx = x·sin(x) − ∫1·sin(x) dx = x·sin(x) − (−cos(x)) + C = x·sin(x) + cos(x) + C.',
    hints: ['u = x, v\' = cos(x).', '∫sin(x) dx = −cos(x).'],
  },
  'ex-int-2-2-d': {
    id: 'ex-int-2-2-d', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '∫ln(x) dx = ? (Tipp: Setze u = ln(x), v\' = 1)',
    options: ['1/x + C', 'x·ln(x) − x + C', 'x·ln(x) + C', 'x·ln(x) + x + C'],
    correctIndex: 1,
    explanation: 'u = ln(x) → u\' = 1/x; v\' = 1 → v = x. ∫ln(x) dx = x·ln(x) − ∫x·(1/x) dx = x·ln(x) − ∫1 dx = x·ln(x) − x + C. Dieser Trick (v\' = 1 setzen) funktioniert immer, wenn der Integrand keine offensichtliche Zerlegung hat.',
    hints: ['Bei ∫ln(x) dx setzt man u = ln(x), v\' = 1.', 'v\' = 1 → v = x. Dann: x·ln(x) − ∫(x · 1/x) dx = x·ln(x) − ∫1 dx.'],
  },
  'ex-int-2-2-mastery': {
    id: 'ex-int-2-2-mastery', lessonId: 'int-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] ∫x²·eˣ dx erfordert partielle Integration — wie oft?',
    options: ['Einmal', 'Zweimal', 'Dreimal', 'Es ist nicht mit partieller Integration lösbar'],
    correctIndex: 1,
    explanation: 'Beim ersten Mal: u = x², v\' = eˣ → x²·eˣ − 2∫x·eˣ dx. Beim zweiten Mal (für ∫x·eˣ dx): u = x, v\' = eˣ → x·eˣ − eˣ. Ergebnis: x²·eˣ − 2(x·eˣ − eˣ) + C = eˣ(x² − 2x + 2) + C. Bei jeder partiellen Integration sinkt die Potenz von x um 1.',
    hints: ['Bei jedem Schritt wird die Potenz von x um 1 reduziert.', 'x² → x → 1 → fertig. Also 2 Schritte.'],
  },

  // ── Lesson 3: Partialbruchzerlegung ───────────────────────────────────────
  'ex-int-2-3-a': {
    id: 'ex-int-2-3-a', lessonId: 'int-2-3', type: 'multiple-choice',
    question: 'Wann verwendet man die Partialbruchzerlegung?',
    options: [
      'Wenn man trigonometrische Funktionen integriert',
      'Wenn man gebrochen-rationale Funktionen integriert (Polynom/Polynom)',
      'Wenn man Exponentialfunktionen integriert',
      'Immer als ersten Schritt',
    ],
    correctIndex: 1,
    explanation: 'Die Partialbruchzerlegung wird für gebrochen-rationale Funktionen der Form P(x)/Q(x) verwendet, wobei Grad(P) < Grad(Q). Man zerlegt den Bruch in einfachere Teilbrüche, die einzeln leicht integrierbar sind.',
    hints: ['Denke an Brüche wie 1/((x-1)(x+2)).'],
  },
  'ex-int-2-3-b': {
    id: 'ex-int-2-3-b', lessonId: 'int-2-3', type: 'multiple-choice',
    question: '∫1/(x² − 1) dx = ∫1/((x−1)(x+1)) dx. Welcher Ansatz ist korrekt?',
    options: [
      '1/((x−1)(x+1)) = A/(x−1) + B/(x+1)',
      '1/((x−1)(x+1)) = A·x/(x−1) + B·x/(x+1)',
      '1/((x−1)(x+1)) = (Ax + B)/(x² − 1)',
      '1/((x−1)(x+1)) = A/(x² − 1)',
    ],
    correctIndex: 0,
    explanation: 'Bei verschiedenen reellen Linearfaktoren im Nenner lautet der Ansatz: A/(x−1) + B/(x+1). Koeffizientenvergleich oder Einsetzmethode liefert A = 1/2, B = −1/2. Also: ∫dx/(x²−1) = (1/2)·ln|x−1| − (1/2)·ln|x+1| + C.',
    hints: ['Verschiedene Linearfaktoren → Ein Bruch pro Faktor.', 'Ansatz: A/(x−1) + B/(x+1). Multipliziere beide Seiten mit (x−1)(x+1).'],
  },
  'ex-int-2-3-c': {
    id: 'ex-int-2-3-c', lessonId: 'int-2-3', type: 'number-input',
    question: 'Partialbruchzerlegung: 1/((x−1)(x+1)) = A/(x−1) + B/(x+1). Bestimme A. (Tipp: Setze x = 1 ein)',
    correctAnswer: 0.5,
    tolerance: 0.01,
    explanation: 'Multipliziere mit (x−1)(x+1): 1 = A(x+1) + B(x−1). Setze x = 1: 1 = A·2 + B·0 = 2A → A = 1/2 = 0,5. Setze x = −1: 1 = A·0 + B·(−2) → B = −1/2.',
    hints: ['Multipliziere beide Seiten mit dem Hauptnenner.', 'Setze x = 1 ein, damit B wegfällt.'],
  },
  'ex-int-2-3-mastery': {
    id: 'ex-int-2-3-mastery', lessonId: 'int-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] ∫1/(x(x+1)) dx = ?',
    options: [
      'ln|x| − ln|x+1| + C',
      'ln|x| + ln|x+1| + C',
      'ln|x·(x+1)| + C',
      '1/x − 1/(x+1) + C',
    ],
    correctIndex: 0,
    explanation: 'Partialbruchzerlegung: 1/(x(x+1)) = A/x + B/(x+1). Multiplizieren: 1 = A(x+1) + Bx. x = 0: A = 1. x = −1: B = −1. Also: ∫(1/x − 1/(x+1)) dx = ln|x| − ln|x+1| + C.',
    hints: ['Ansatz: A/x + B/(x+1). Bestimme A und B.', 'x = 0 einsetzen → A = 1. x = −1 einsetzen → B = −1.'],
  },

  // ── Lesson 4: Gemischte Übungen ───────────────────────────────────────────
  'ex-int-2-4-a': {
    id: 'ex-int-2-4-a', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] ∫x·sin(x) dx = ?',
    options: ['−x·cos(x) + sin(x) + C', 'x·cos(x) − sin(x) + C', '−x·cos(x) − sin(x) + C', 'x·sin(x) − cos(x) + C'],
    correctIndex: 0,
    explanation: 'Partielle Integration: u = x → u\' = 1; v\' = sin(x) → v = −cos(x). ∫x·sin(x) dx = x·(−cos(x)) − ∫1·(−cos(x)) dx = −x·cos(x) + ∫cos(x) dx = −x·cos(x) + sin(x) + C.',
    hints: ['Partielle Integration: u = x, v\' = sin(x).', 'v = −cos(x). Dann: −x·cos(x) − ∫(−cos(x)) dx.'],
  },
  'ex-int-2-4-b': {
    id: 'ex-int-2-4-b', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] ∫e^(2x) dx = ?',
    options: ['e^(2x) + C', 'e^(2x)/2 + C', '2·e^(2x) + C', 'e^(2x)/x + C'],
    correctIndex: 1,
    explanation: 'Substitution: u = 2x, du = 2dx, dx = du/2. ∫eᵘ · (du/2) = eᵘ/2 + C = e^(2x)/2 + C. Probe: (e^(2x)/2)\' = e^(2x) · 2/2 = e^(2x) ✓',
    hints: ['Substitution mit u = 2x.', 'du = 2dx → dx = du/2.'],
  },
  'ex-int-2-4-c': {
    id: 'ex-int-2-4-c', lessonId: 'int-2-4', type: 'number-input',
    question: '[PRÜFUNG] Berechne: ∫₀¹ x·eˣ dx (Ergebnis auf 2 Nachkommastellen)',
    correctAnswer: 1.00,
    tolerance: 0.02,
    explanation: 'Partielle Integration: u = x, v\' = eˣ, u\' = 1, v = eˣ. ∫₀¹ x·eˣ dx = [x·eˣ]₀¹ − ∫₀¹ eˣ dx = (1·e − 0) − [eˣ]₀¹ = e − (e − 1) = 1.',
    hints: ['Partielle Integration, dann Grenzen einsetzen.', '[x·eˣ − eˣ]₀¹ = (e − e) − (0 − 1) = 0 + 1 = 1.'],
  },
  'ex-int-2-4-d': {
    id: 'ex-int-2-4-d', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Methode ist am besten geeignet für ∫sin²(x) dx?',
    options: [
      'Substitution',
      'Partialbruchzerlegung',
      'Trigonometrische Identität: sin²(x) = (1 − cos(2x))/2',
      'Direkte Integration mit Grundintegral',
    ],
    correctIndex: 2,
    explanation: 'Für ∫sin²(x) dx verwendet man die Identität sin²(x) = (1 − cos(2x))/2. Dann: ∫(1 − cos(2x))/2 dx = x/2 − sin(2x)/4 + C. Weder Substitution noch Partialbruchzerlegung helfen hier direkt.',
    hints: ['Sin² hat kein direktes Grundintegral.', 'Verwende eine trigonometrische Identität, um die Potenz loszuwerden.'],
  },
  'ex-int-2-4-e': {
    id: 'ex-int-2-4-e', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] ∫(2x + 3)/(x² + 3x + 1) dx = ? (Tipp: Zähler ist Ableitung des Nenners)',
    options: [
      'ln|x² + 3x + 1| + C',
      '(x² + 3x + 1)² + C',
      '1/(x² + 3x + 1) + C',
      'ln|2x + 3| + C',
    ],
    correctIndex: 0,
    explanation: 'Der Zähler 2x + 3 ist genau die Ableitung des Nenners x² + 3x + 1. Wenn der Zähler die Ableitung des Nenners ist, gilt: ∫f\'(x)/f(x) dx = ln|f(x)| + C. Also: ln|x² + 3x + 1| + C.',
    hints: ['Berechne die Ableitung des Nenners.', 'Wenn Zähler = Ableitung des Nenners, dann ist das Integral = ln|Nenner| + C.'],
  },
  'ex-int-2-4-mastery': {
    id: 'ex-int-2-4-mastery', lessonId: 'int-2-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: ∫₀^(π/2) x·cos(x) dx (Ergebnis auf 2 Nachkommastellen)',
    correctAnswer: 0.57,
    tolerance: 0.02,
    explanation: 'Partielle Integration: u = x, v\' = cos(x), u\' = 1, v = sin(x). ∫₀^(π/2) x·cos(x) dx = [x·sin(x)]₀^(π/2) − ∫₀^(π/2) sin(x) dx = (π/2)·1 − 0 − [−cos(x)]₀^(π/2) = π/2 − (−cos(π/2) + cos(0)) = π/2 − (0 + 1) = π/2 − 1 ≈ 0,57.',
    hints: ['Partielle Integration: u = x, v\' = cos(x).', 'π/2 − 1 ≈ 1,5708 − 1 = 0,57.'],
  },
}

const lessons_int_u2 = [
  {
    id: 'int-2-1', unitId: 'int-unit-2',
    title: 'Substitution',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Substitutionsmethode verstehen und anwenden', 'Geeignete Substitution wählen'],
    prerequisites: [],
    nextLessonId: 'int-2-2',
    steps: [
      {
        id: 'int-2-1-s1', type: 'explanation-intuitive', title: 'Substitution — die Kettenregel rückwärts',
        content: `Die **Substitution** ist die wichtigste Integrationstechnik. Sie ist die Umkehrung der **Kettenregel**.

**Analogie:** Stell dir vor, du hast eine Zwiebel. Die Kettenregel schält die Zwiebel Schicht für Schicht ab (äußere Ableitung · innere Ableitung). Die Substitution baut die Zwiebel wieder zusammen.

Bei der Kettenregel gilt: $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$

"Rückwärts gelesen" (= Integration): $\\int f'(g(x)) \\cdot g'(x)\\,dx = f(g(x)) + C$

Die Idee: Wenn im Integral ein Ausdruck $g(x)$ und gleichzeitig seine Ableitung $g'(x)$ vorkommt, können wir substituieren.`,
      },
      {
        id: 'int-2-1-s2', type: 'explanation-formal', title: 'Schritt-für-Schritt-Anleitung',
        content: `**Substitutionsregel:**

$$\\int f(g(x)) \\cdot g'(x)\\,dx \\;\\overset{u=g(x)}{=}\\; \\int f(u)\\,du$$

**Schritte:**

1. **Substitution wählen:** Setze $u = g(x)$ (ein geeigneter innerer Ausdruck)
2. **Ableitung berechnen:** $\\frac{du}{dx} = g'(x) \\;\\Rightarrow\\; du = g'(x)\\,dx$
3. **Ersetzen:** Schreibe das gesamte Integral nur in $u$ und $du$ um
4. **Integrieren:** Berechne $\\int f(u)\\,du$
5. **Rücksubstitution:** Ersetze $u$ wieder durch $g(x)$

**Beispiel:** $\\int 2x \\cdot e^{x^2}\\,dx$

1. $u = x^2$
2. $du = 2x\\,dx$ — perfekt, $2x\\,dx$ steht schon da!
3. $\\int e^u\\,du$
4. $= e^u + C$
5. $= e^{x^2} + C$

**Tipp:** Die Substitution funktioniert am besten, wenn die Ableitung des gewählten $u$ bereits als Faktor im Integral vorkommt (eventuell bis auf eine Konstante).`,
      },
      { id: 'int-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-1-a' },
      { id: 'int-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-1-b' },
      { id: 'int-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-2-1-c' },
      { id: 'int-2-1-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-2-1-d' },
      { id: 'int-2-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-1-mastery' },
    ],
  },
  {
    id: 'int-2-2', unitId: 'int-unit-2',
    title: 'Partielle Integration',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Partielle Integration anwenden', 'LIATE-Regel für die Wahl von u kennen'],
    prerequisites: [],
    nextLessonId: 'int-2-3',
    steps: [
      {
        id: 'int-2-2-s1', type: 'explanation-intuitive', title: 'Produkte integrieren',
        content: `Was tun, wenn ein **Produkt zweier Funktionen** integriert werden soll? Zum Beispiel $\\int x \\cdot e^x\\,dx$?

Hier hilft weder Substitution noch ein Grundintegral. Wir brauchen die **partielle Integration** (auch: Produktintegration).

Die Idee: Wir kennen die Produktregel der Ableitung:
$$(u \\cdot v)' = u' \\cdot v + u \\cdot v'$$

Integrieren wir beide Seiten:
$$u \\cdot v = \\int u' \\cdot v\\,dx + \\int u \\cdot v'\\,dx$$

Umgestellt:
$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$

**Ziel:** Wir tauschen ein "schwieriges" Integral gegen ein "einfacheres" ein.`,
      },
      {
        id: 'int-2-2-s2', type: 'explanation-formal', title: 'LIATE-Regel und Formel',
        content: `**Formel der partiellen Integration:**

$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$

**Die LIATE-Regel** hilft bei der Wahl von $u$:

Wähle als $u$ die Funktion, die in der folgenden Liste **zuerst** vorkommt:
- **L** = Logarithmische Funktionen ($\\ln x$, $\\log x$)
- **I** = Inverse trigonometrische Funktionen ($\\arcsin x$, $\\arctan x$)
- **A** = Algebraische Funktionen ($x$, $x^2$, $x^3$, ...)
- **T** = Trigonometrische Funktionen ($\\sin x$, $\\cos x$)
- **E** = Exponentialfunktionen ($e^x$, $2^x$)

**Beispiel:** $\\int x \\cdot e^x\\,dx$
- $x$ ist algebraisch (A), $e^x$ ist exponentiell (E)
- A kommt vor E → wähle $u = x$, $v' = e^x$
- $u' = 1$, $v = e^x$
- $= x \\cdot e^x - \\int 1 \\cdot e^x\\,dx = x \\cdot e^x - e^x + C = e^x(x - 1) + C$

**Beispiel:** $\\int \\ln(x)\\,dx$
- Setze $u = \\ln(x)$, $v' = 1$
- $u' = 1/x$, $v = x$
- $= x \\cdot \\ln(x) - \\int x \\cdot (1/x)\\,dx = x\\ln(x) - x + C$`,
      },
      { id: 'int-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-2-a' },
      { id: 'int-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-2-b' },
      { id: 'int-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-2-2-c' },
      { id: 'int-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-2-2-d' },
      { id: 'int-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-2-mastery' },
    ],
  },
  {
    id: 'int-2-3', unitId: 'int-unit-2',
    title: 'Partialbruchzerlegung',
    order: 3, estimatedMinutes: 16,
    learningGoals: ['Gebrochen-rationale Funktionen integrieren', 'Partialbruchzerlegung aufstellen'],
    prerequisites: [],
    nextLessonId: 'int-2-4',
    steps: [
      {
        id: 'int-2-3-s1', type: 'explanation-formal', title: 'Integration rationaler Funktionen',
        content: `**Problem:** Wie integriert man einen Bruch wie $\\frac{1}{x^2 - 1}$?

**Idee:** Zerlege den Bruch in einfachere Teilbrüche, die man einzeln integrieren kann.

**Voraussetzung:** Der Grad des Zählers muss **kleiner** sein als der Grad des Nenners. Falls nicht: zuerst Polynomdivision durchführen.

**Schritt 1 — Nenner faktorisieren:**
$$x^2 - 1 = (x-1)(x+1)$$

**Schritt 2 — Ansatz aufstellen:**
$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

**Schritt 3 — Koeffizienten bestimmen:**
Multipliziere beide Seiten mit $(x-1)(x+1)$:
$$1 = A(x+1) + B(x-1)$$

Einsetzmethode:
- $x = 1$: $1 = 2A \\Rightarrow A = \\frac{1}{2}$
- $x = -1$: $1 = -2B \\Rightarrow B = -\\frac{1}{2}$

**Schritt 4 — Integrieren:**
$$\\int \\frac{dx}{x^2-1} = \\frac{1}{2}\\int \\frac{dx}{x-1} - \\frac{1}{2}\\int \\frac{dx}{x+1} = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$

**Ansätze für verschiedene Nennertypen:**
- Verschiedene Linearfaktoren $(x-a)(x-b)$: $\\frac{A}{x-a} + \\frac{B}{x-b}$
- Doppelter Linearfaktor $(x-a)^2$: $\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$
- Irreduzibler quadratischer Faktor $x^2+px+q$: $\\frac{Ax+B}{x^2+px+q}$`,
      },
      { id: 'int-2-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-3-a' },
      { id: 'int-2-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-3-b' },
      { id: 'int-2-3-s4', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-int-2-3-c' },
      { id: 'int-2-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-3-mastery' },
    ],
  },
  {
    id: 'int-2-4', unitId: 'int-unit-2',
    title: 'Gemischte Übungen',
    order: 4, estimatedMinutes: 20,
    learningGoals: ['Integrationstechnik selbständig erkennen und anwenden', 'Prüfungsaufgaben lösen'],
    prerequisites: [],
    nextLessonId: 'int-3-1',
    steps: [
      { id: 'int-2-4-s1', type: 'exercise', title: 'Aufgabe 1 — Partielle Integration', exerciseRef: 'ex-int-2-4-a' },
      { id: 'int-2-4-s2', type: 'exercise', title: 'Aufgabe 2 — Substitution', exerciseRef: 'ex-int-2-4-b' },
      { id: 'int-2-4-s3', type: 'exercise', title: 'Aufgabe 3 — Bestimmtes Integral', exerciseRef: 'ex-int-2-4-c' },
      { id: 'int-2-4-s4', type: 'exercise', title: 'Aufgabe 4 — Strategie', exerciseRef: 'ex-int-2-4-d' },
      { id: 'int-2-4-s5', type: 'exercise', title: 'Aufgabe 5 — Erkennen', exerciseRef: 'ex-int-2-4-e' },
      { id: 'int-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-4-mastery' },
    ],
  },
]

export const int_unit2 = {
  id: 'int-unit-2',
  title: 'Integrationstechniken',
  order: 2,
  description: 'Substitution, partielle Integration, Partialbruchzerlegung und gemischte Übungen',
  lessons: lessons_int_u2,
  exercises: exercises_int_u2,
}
