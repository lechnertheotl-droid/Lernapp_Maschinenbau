// ── Ableitung Unit 4: Prüfungsaufgaben Differentialrechnung ──────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_abl_u4 = {

  // ── Lektion 4-1: Ableitungsregeln ────────────────────────────────────────
  'ex-abl-4-1-a': {
    id: 'ex-abl-4-1-a', lessonId: 'abl-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = \\sin(x^2 + 1)$. Bestimme $f\'(x)$.',
    options: [
      '$\\cos(x^2 + 1)$',
      '$2x \\cdot \\cos(x^2 + 1)$',
      '$2x \\cdot \\sin(x^2 + 1)$',
      '$-2x \\cdot \\cos(x^2 + 1)$',
    ],
    correctIndex: 1,
    explanation: 'Kettenregel: $f(x) = \\sin(u)$ mit $u = x^2 + 1$. Also $f\'(x) = \\cos(u) \\cdot u\' = \\cos(x^2+1) \\cdot 2x$.',
    hints: ['Kettenregel: $(\\sin(u))\' = \\cos(u) \\cdot u\'', 'Die innere Funktion ist $u = x^2 + 1$, also $u\' = 2x$.'],
  },
  'ex-abl-4-1-b': {
    id: 'ex-abl-4-1-b', lessonId: 'abl-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = e^{3x} \\cdot \\cos(x)$. Was ist $f\'(x)$?',
    options: [
      '$3e^{3x} \\cdot \\cos(x) - e^{3x} \\cdot \\sin(x)$',
      '$3e^{3x} \\cdot \\cos(x) + e^{3x} \\cdot \\sin(x)$',
      '$e^{3x} \\cdot (-\\sin(x))$',
      '$3e^{3x} \\cdot (-\\sin(x))$',
    ],
    correctIndex: 0,
    explanation: 'Produktregel: $f\' = (e^{3x})\' \\cdot \\cos(x) + e^{3x} \\cdot (\\cos x)\' = 3e^{3x}\\cos(x) + e^{3x}(-\\sin(x)) = 3e^{3x}\\cos(x) - e^{3x}\\sin(x)$.',
    hints: ['Produktregel: $(u \\cdot v)\' = u\'v + uv\'', '$(e^{3x})\' = 3e^{3x}$ (Kettenregel!), $(\\cos x)\' = -\\sin x$'],
  },
  'ex-abl-4-1-c': {
    id: 'ex-abl-4-1-c', lessonId: 'abl-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = \\dfrac{x^2 + 1}{x - 1}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{2x}{1}$',
      '$\\dfrac{x^2 - 2x - 1}{(x-1)^2}$',
      '$\\dfrac{2x(x-1) - (x^2+1)}{(x-1)^2}$',
      '$\\dfrac{2x(x-1) + (x^2+1)}{(x-1)^2}$',
    ],
    correctIndex: 2,
    explanation: 'Quotientenregel: $f\' = \\frac{(x^2+1)\' \\cdot (x-1) - (x^2+1) \\cdot (x-1)\'}{(x-1)^2} = \\frac{2x(x-1) - (x^2+1)}{(x-1)^2}$. Vereinfacht: $\\frac{x^2 - 2x - 1}{(x-1)^2}$.',
    hints: ['NAZ: Nenner × Abl. Zähler − Zähler × Abl. Nenner, geteilt durch Nenner².', '$(x^2+1)\' = 2x$, $(x-1)\' = 1$'],
  },
  'ex-abl-4-1-d': {
    id: 'ex-abl-4-1-d', lessonId: 'abl-4-1', type: 'number-input',
    question: '[PRÜFUNG] $f(x) = \\ln(x^2 + 4)$. Berechne $f\'(2)$.',
    correctAnswer: 0.5,
    tolerance: 0.01,
    unit: '',
    explanation: 'Kettenregel: $f\'(x) = \\frac{1}{x^2+4} \\cdot 2x = \\frac{2x}{x^2+4}$. Einsetzen: $f\'(2) = \\frac{4}{4+4} = \\frac{4}{8} = 0{,}5$.',
    hints: ['$(\\ln u)\' = \\frac{1}{u} \\cdot u\'$ (Kettenregel)', 'Innere Funktion: $u = x^2 + 4$, also $u\' = 2x$.'],
  },
  'ex-abl-4-1-e': {
    id: 'ex-abl-4-1-e', lessonId: 'abl-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Ableitung von $f(x) = \\tan(x)$ ist $f\'(x) = \\dfrac{1}{\\cos^2(x)}$.',
    correct: true,
    explanation: 'Ja, das stimmt. $\\tan(x) = \\frac{\\sin x}{\\cos x}$. Quotientenregel: $f\'= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$. Alternativ: $1 + \\tan^2(x)$.',
    hints: ['$\\tan(x) = \\sin(x)/\\cos(x)$. Quotientenregel anwenden.', 'Pythagoreischer Satz: $\\sin^2 + \\cos^2 = 1$.'],
  },
  'ex-abl-4-1-f': {
    id: 'ex-abl-4-1-f', lessonId: 'abl-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = (x^3 - 2x)^5$. Welches ist $f\'(x)$?',
    options: [
      '$5(x^3 - 2x)^4$',
      '$5(3x^2 - 2)^4$',
      '$5(3x^2 - 2)(x^3 - 2x)^4$',
      '$5x^2(x^3 - 2x)^4$',
    ],
    correctIndex: 2,
    explanation: 'Kettenregel: $f\'(x) = 5(x^3-2x)^4 \\cdot (x^3-2x)\' = 5(x^3-2x)^4 \\cdot (3x^2-2)$.',
    hints: ['$(u^n)\' = n \\cdot u^{n-1} \\cdot u\'$ (Kettenregel)', 'Innere Funktion $u = x^3 - 2x$, also $u\' = 3x^2 - 2$.'],
  },
  'ex-abl-4-1-g': {
    id: 'ex-abl-4-1-g', lessonId: 'abl-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = x^2 \\cdot \\ln(x)$. Was ist $f\'(x)$?',
    options: [
      '$2x \\cdot \\frac{1}{x} = 2$',
      '$x + 2x \\cdot \\ln(x)$',
      '$2x \\cdot \\ln(x) + x$',
      '$2x \\cdot \\ln(x) - x$',
    ],
    correctIndex: 2,
    explanation: 'Produktregel: $f\' = (x^2)\' \\cdot \\ln(x) + x^2 \\cdot (\\ln x)\' = 2x \\cdot \\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x$.',
    hints: ['$(x^2)\' = 2x$, $(\\ln x)\' = 1/x$', 'Produktregel: $u\'v + uv\'$'],
  },
  'ex-abl-4-1-h': {
    id: 'ex-abl-4-1-h', lessonId: 'abl-4-1', type: 'matching',
    question: '[PRÜFUNG] Ordne jede Funktion ihrer Ableitung zu:',
    pairs: [
      { left: '$e^{2x}$', right: '$2e^{2x}$' },
      { left: '$\\sin(3x)$', right: '$3\\cos(3x)$' },
      { left: '$\\ln(5x)$', right: '$\\frac{1}{x}$' },
      { left: '$\\cos(x^2)$', right: '$-2x\\sin(x^2)$' },
    ],
    explanation: '$(e^{2x})\' = 2e^{2x}$ (Kettenregel). $(\\sin 3x)\' = 3\\cos(3x)$. $(\\ln 5x)\' = \\frac{1}{5x} \\cdot 5 = \\frac{1}{x}$. $(\\cos x^2)\' = -\\sin(x^2) \\cdot 2x$.',
    hints: ['Für alle gilt die Kettenregel. Äußere Funktion ableiten, mal innere Ableitung.'],
  },
  'ex-abl-4-1-i': {
    id: 'ex-abl-4-1-i', lessonId: 'abl-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Für $f(x) = e^x \\cdot \\sin(x)$ gilt: $f\'(0) = 1$.',
    correct: true,
    explanation: 'Produktregel: $f\'(x) = e^x \\sin(x) + e^x \\cos(x) = e^x(\\sin x + \\cos x)$. Einsetzen: $f\'(0) = e^0(\\sin 0 + \\cos 0) = 1 \\cdot (0 + 1) = 1$. ✓',
    hints: ['Produktregel: $f\' = e^x\\sin x + e^x\\cos x$', '$e^0 = 1$, $\\sin(0) = 0$, $\\cos(0) = 1$'],
  },
  'ex-abl-4-1-j': {
    id: 'ex-abl-4-1-j', lessonId: 'abl-4-1', type: 'number-input',
    question: '[PRÜFUNG] $f(x) = \\dfrac{\\sin(x)}{x}$ für $x \\neq 0$. Berechne $f\'(\\pi/2)$ (exakt als Dezimalzahl, 4 Stellen).',
    correctAnswer: -0.4053,
    tolerance: 0.002,
    unit: '',
    explanation: 'Quotientenregel: $f\'(x) = \\frac{\\cos(x) \\cdot x - \\sin(x) \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$. Bei $x = \\pi/2$: Zähler $= \\frac{\\pi}{2} \\cdot 0 - 1 = -1$. Nenner $= (\\pi/2)^2 \\approx 2{,}467$. $f\'(\\pi/2) \\approx -1/2{,}467 \\approx -0{,}4053$.',
    hints: ['Quotientenregel: $f\' = \\frac{u\'v - uv\'}{v^2}$ mit $u = \\sin x$, $v = x$.', '$\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$'],
  },
  'ex-abl-4-1-mastery': {
    id: 'ex-abl-4-1-mastery', lessonId: 'abl-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\dfrac{e^{2x}}{\\cos(x)}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{2e^{2x}\\cos(x) + e^{2x}\\sin(x)}{\\cos^2(x)}$',
      '$\\dfrac{2e^{2x}\\cos(x) - e^{2x}\\sin(x)}{\\cos^2(x)}$',
      '$\\dfrac{e^{2x}}{-\\sin(x)}$',
      '$2e^{2x} \\cdot \\tan(x)$',
    ],
    correctIndex: 0,
    explanation: 'Quotientenregel: $f\' = \\frac{(e^{2x})\' \\cdot \\cos x - e^{2x} \\cdot (\\cos x)\'}{\\cos^2 x} = \\frac{2e^{2x}\\cos x - e^{2x}(-\\sin x)}{\\cos^2 x} = \\frac{2e^{2x}\\cos x + e^{2x}\\sin x}{\\cos^2 x}$.',
    hints: ['$(e^{2x})\' = 2e^{2x}$, $(\\cos x)\' = -\\sin x$', 'Quotientenregel: Negatives Vorzeichen von $-\\sin x$ wird durch das Minus der Formel wieder positiv.'],
  },

  // ── Lektion 4-2: Kurvendiskussion & Anwendungen ───────────────────────────
  'ex-abl-4-2-a': {
    id: 'ex-abl-4-2-a', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = x^3 - 3x^2 - 9x + 5$. An welchen Stellen liegen die lokalen Extrema?',
    options: [
      'Maximum bei $x = -1$, Minimum bei $x = 3$',
      'Maximum bei $x = 3$, Minimum bei $x = -1$',
      'Nur Minimum bei $x = 3$',
      'Maximum bei $x = -1$, kein Minimum',
    ],
    correctIndex: 0,
    explanation: '$f\'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1) = 0 \\Rightarrow x = 3$ oder $x = -1$. $f\'\'(x) = 6x - 6$. $f\'\'(-1) = -12 < 0$ → Maximum bei $x = -1$. $f\'\'(3) = 12 > 0$ → Minimum bei $x = 3$.',
    hints: ['$f\'(x) = 0$ und dann $f\'\'$ auswerten.', 'Faktorisiere: $3(x^2-2x-3) = 3(x-3)(x+1)$.'],
  },
  'ex-abl-4-2-b': {
    id: 'ex-abl-4-2-b', lessonId: 'abl-4-2', type: 'number-input',
    question: '[PRÜFUNG] $f(x) = 2x^3 - 9x^2 + 12x - 4$. An welcher Stelle $x$ liegt der Wendepunkt?',
    correctAnswer: 1.5,
    tolerance: 0.01,
    unit: '',
    explanation: '$f\'(x) = 6x^2 - 18x + 12$. $f\'\'(x) = 12x - 18 = 0 \\Rightarrow x = 3/2 = 1{,}5$. $f\'\'\'(x) = 12 \\neq 0$ → Wendepunkt bei $x = 1{,}5$.',
    hints: ['Wendepunkt: $f\'\'(x) = 0$ lösen, dann $f\'\'\'(x_0) \\neq 0$ prüfen.', '$f\'\'(x) = 12x - 18$'],
  },
  'ex-abl-4-2-c': {
    id: 'ex-abl-4-2-c', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Rechteck hat den Umfang $U = 20$ cm. Für welche Seitenlänge $x$ wird der Flächeninhalt maximal?',
    options: [
      '$x = 4$ cm',
      '$x = 5$ cm',
      '$x = 10$ cm',
      '$x = 2{,}5$ cm',
    ],
    correctIndex: 1,
    explanation: 'Umfang: $2x + 2y = 20 \\Rightarrow y = 10 - x$. Fläche: $A(x) = x \\cdot y = x(10-x) = 10x - x^2$. $A\'(x) = 10 - 2x = 0 \\Rightarrow x = 5$ cm. $A\'\'(x) = -2 < 0$ → Maximum. Das optimale Rechteck ist ein Quadrat mit Seite 5 cm.',
    hints: ['Nebenbedingung (Umfang) → $y$ durch $x$ ausdrücken.', 'Zielfunktion $A(x)$ ableiten und null setzen.'],
  },
  'ex-abl-4-2-d': {
    id: 'ex-abl-4-2-d', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Taylor-Polynom 2. Grades von $f(x) = e^x$ um $x_0 = 0$ lautet:',
    options: [
      '$1 + x$',
      '$1 + x + x^2$',
      '$1 + x + \\dfrac{x^2}{2}$',
      '$x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$',
    ],
    correctIndex: 2,
    explanation: 'Taylor: $T_2(x) = f(0) + f\'(0) \\cdot x + \\frac{f\'\'(0)}{2!} \\cdot x^2$. Für $e^x$: $f(0) = f\'(0) = f\'\'(0) = 1$. Also: $T_2(x) = 1 + x + \\frac{x^2}{2}$.',
    hints: ['Taylorformel: $T_n = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$', 'Alle Ableitungen von $e^x$ sind wieder $e^x$, also alle Werte an $x_0 = 0$ gleich 1.'],
  },
  'ex-abl-4-2-e': {
    id: 'ex-abl-4-2-e', lessonId: 'abl-4-2', type: 'true-false',
    statement: '[PRÜFUNG] $f(x) = x^4$ hat bei $x = 0$ ein lokales Minimum, obwohl $f\'\'(0) = 0$.',
    correct: true,
    explanation: '$f\'(x) = 4x^3$, $f\'\'(x) = 12x^2$, $f\'\'(0) = 0$ — die 2. Ableitungsregel versagt! Aber $f\'$ wechselt von negativ (für $x < 0$) zu positiv (für $x > 0$): Vorzeichenwechsel von $-$ nach $+$ → lokales Minimum. Alternativ: $f(x) = x^4 \\geq 0 = f(0)$.',
    hints: ['Wenn $f\'\'(x_0) = 0$: Vorzeichenwechsel von $f\'$ prüfen oder höhere Ableitungen nutzen.', '$f\'$ wechselt von $-$ nach $+$ → Minimum.'],
  },
  'ex-abl-4-2-f': {
    id: 'ex-abl-4-2-f', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = xe^{-x}$ auf $[0, \\infty)$. Welcher Wert ist das globale Maximum?',
    options: [
      '$f_{\\max} = 0$',
      '$f_{\\max} = e^{-1} \\approx 0{,}368$',
      '$f_{\\max} = 1$',
      '$f_{\\max} = e \\approx 2{,}718$',
    ],
    correctIndex: 1,
    explanation: '$f\'(x) = e^{-x} - xe^{-x} = (1-x)e^{-x} = 0 \\Rightarrow x = 1$. $f\'\'(x) = (x-2)e^{-x}$, $f\'\'(1) = -e^{-1} < 0$ → Maximum. $f(1) = 1 \\cdot e^{-1} = e^{-1} \\approx 0{,}368$.',
    hints: ['Produktregel für $f\'$: $(1-x)e^{-x} = 0$ → $x = 1$.', '$f(1) = 1 \\cdot e^{-1}$'],
  },
  'ex-abl-4-2-g': {
    id: 'ex-abl-4-2-g', lessonId: 'abl-4-2', type: 'matching',
    question: '[PRÜFUNG] Ordne die Aussagen den richtigen Bedingungen zu:',
    pairs: [
      { left: 'Lokales Maximum (hinreichend)', right: '$f\'(x_0) = 0$ und $f\'\'(x_0) < 0$' },
      { left: 'Wendepunkt (notwendig)', right: '$f\'\'(x_0) = 0$' },
      { left: 'Streng monoton fallend', right: '$f\'(x) < 0$ auf Intervall' },
      { left: 'Linksgekrümmt (konkav)', right: '$f\'\'(x) > 0$' },
    ],
    explanation: 'Maximum: $f\' = 0$ und $f\'\' < 0$ (Hügelform). Wendepunkt (notwendig): $f\'\' = 0$. Fallend: $f\' < 0$. Linksgekrümmt: $f\'\' > 0$ (Schüsselform).',
    hints: ['Jede Eigenschaft hat ihre "Ableitungsstufe": $f$, $f\'$, $f\'\'$.'],
  },
  'ex-abl-4-2-h': {
    id: 'ex-abl-4-2-h', lessonId: 'abl-4-2', type: 'number-input',
    question: '[PRÜFUNG] Ein zylindrischer Behälter ohne Deckel soll ein Volumen von $V = \\pi$ L = $\\pi \\cdot 10^{-3}$ m³ fassen. Gesucht ist der Radius $r$ (in m), der die Oberfläche minimiert. Berechne $r$ (auf 4 Stellen nach dem Komma).',
    correctAnswer: 0.1,
    tolerance: 0.001,
    unit: 'm',
    explanation: 'Oberfläche: $A = \\pi r^2 + 2\\pi r h$ (Boden + Mantel, kein Deckel). Nebenbedingung: $V = \\pi r^2 h = \\pi \\cdot 10^{-3} \\Rightarrow h = \\frac{10^{-3}}{r^2}$. Einsetzen: $A(r) = \\pi r^2 + \\frac{2\\pi \\cdot 10^{-3}}{r}$. $A\'(r) = 2\\pi r - \\frac{2\\pi \\cdot 10^{-3}}{r^2} = 0 \\Rightarrow r^3 = 10^{-3} \\Rightarrow r = 0{,}1$ m.',
    hints: ['Nebenbedingung (Volumen) nutzen, um $h$ durch $r$ auszudrücken.', '$A\'(r) = 0$: $2\\pi r = \\frac{2\\pi \\cdot 10^{-3}}{r^2} \\Rightarrow r^3 = 10^{-3}$'],
  },
  'ex-abl-4-2-i': {
    id: 'ex-abl-4-2-i', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = x^3 - 12x$. Welche Aussage über Monotonie ist KORREKT?',
    options: [
      '$f$ ist auf ganz $\\mathbb{R}$ monoton steigend',
      '$f$ ist monoton steigend auf $(-\\infty, -2) \\cup (2, \\infty)$ und fallend auf $(-2, 2)$',
      '$f$ ist monoton fallend auf $(-\\infty, -2) \\cup (2, \\infty)$',
      '$f$ hat keine Monotoniebereiche',
    ],
    correctIndex: 1,
    explanation: '$f\'(x) = 3x^2 - 12 = 3(x^2-4) = 3(x-2)(x+2)$. $f\' > 0$ für $x < -2$ oder $x > 2$ (steigend). $f\' < 0$ für $-2 < x < 2$ (fallend). Also: steigend auf $(-\\infty, -2) \\cup (2, \\infty)$, fallend auf $(-2, 2)$.',
    hints: ['Monotoniebereiche: Vorzeichen von $f\'(x)$ bestimmen.', 'Nullstellen von $f\': x = \\pm 2$. Vorzeichen zwischen und außerhalb prüfen.'],
  },
  'ex-abl-4-2-j': {
    id: 'ex-abl-4-2-j', lessonId: 'abl-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Taylor-Polynom 3. Grades von $f(x) = \\sin(x)$ um $x_0 = 0$ lautet:',
    options: [
      '$x - \\dfrac{x^2}{2}$',
      '$x - \\dfrac{x^3}{6}$',
      '$1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24}$',
      '$x + \\dfrac{x^3}{6}$',
    ],
    correctIndex: 1,
    explanation: 'Ableitungen von $\\sin(x)$ an $x_0 = 0$: $f(0) = 0$, $f\'(0) = \\cos(0) = 1$, $f\'\'(0) = -\\sin(0) = 0$, $f\'\'\'(0) = -\\cos(0) = -1$. $T_3(x) = 0 + 1 \\cdot x + 0 - \\frac{1}{6}x^3 = x - \\frac{x^3}{6}$.',
    hints: ['Ableitungsfolge von $\\sin$: $\\sin, \\cos, -\\sin, -\\cos, \\sin, ...$', '$T_3 = f(0) + f\'(0)x + \\frac{f\'\'(0)}{2}x^2 + \\frac{f\'\'\'(0)}{6}x^3$'],
  },
  'ex-abl-4-2-mastery': {
    id: 'ex-abl-4-2-mastery', lessonId: 'abl-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Vollständige Kurvendiskussion: $f(x) = \\dfrac{x^2}{x^2 + 3}$. Welche Aussage ist FALSCH?',
    options: [
      '$f$ ist gerade (achsensymmetrisch zur y-Achse)',
      '$f$ hat ein lokales Minimum bei $x = 0$ mit $f(0) = 0$',
      '$f$ hat keine Wendepunkte',
      'Für $x \\to \\pm\\infty$ gilt $f(x) \\to 1$ (horizontale Asymptote)',
    ],
    correctIndex: 2,
    explanation: '$f(-x) = f(x)$ → gerade ✓. $f\'(x) = \\frac{2x(x^2+3) - x^2 \\cdot 2x}{(x^2+3)^2} = \\frac{6x}{(x^2+3)^2} = 0 \\Rightarrow x = 0$: Minimum bei $(0, 0)$ ✓. Grenzwert: $\\frac{x^2}{x^2+3} \\to 1$ ✓. Wendepunkte: $f\'\'(x) = 0$ liefert $x = \\pm 1$ → es gibt Wendepunkte! Aussage C ist FALSCH.',
    hints: ['Prüfe jede Aussage einzeln durch Rechnung.', 'Für Wendepunkte: $f\'\'(x) = 0$ ausrechnen — liefert $x = \\pm 1$.'],
  },
}

const lessons_abl_u4 = [
  {
    id: 'abl-4-1', unitId: 'abl-unit-4',
    title: 'Prüfung: Ableitungsregeln',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Ketten-, Produkt- und Quotientenregel sicher anwenden',
      'Ableitungen trigonometrischer und Exponentialfunktionen berechnen',
      'Kombinierte Regeln auf Prüfungsniveau einsetzen',
    ],
    prerequisites: [],
    nextLessonId: 'abl-4-2',
    steps: [
      {
        id: 'abl-4-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Ableitungsregeln',
        content: `**Prüfungsaufgaben zu Ableitungsregeln** — das musst du sicher beherrschen:

**Die drei großen Regeln:**

| Regel | Formel | Wann? |
|---|---|---|
| **Kettenregel** | $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$ | Verkettung: "Funktion in Funktion" |
| **Produktregel** | $(u \\cdot v)\' = u\'v + uv\'$ | Produkt zweier Funktionen |
| **Quotientenregel** | $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ | Bruch mit $x$ im Nenner |

**Wichtige Standardableitungen:**
$$\\sin(x) \\to \\cos(x) \\qquad \\cos(x) \\to -\\sin(x) \\qquad \\tan(x) \\to \\frac{1}{\\cos^2(x)}$$
$$e^x \\to e^x \\qquad \\ln(x) \\to \\frac{1}{x} \\qquad x^n \\to nx^{n-1}$$

**Prüfungsstrategie:**
1. **Erkenne die Struktur:** Ist es eine Verkettung, ein Produkt oder ein Bruch?
2. **Oft kommen Regeln kombiniert vor** — z.B. Produktregel + Kettenregel.
3. **Schreibe alle Teilschritte auf** — Punkte gibt es für den Rechenweg!`,
      },
      { id: 'abl-4-1-s2', type: 'exercise', title: 'Aufgabe 1 — Kettenregel', exerciseRef: 'ex-abl-4-1-a' },
      { id: 'abl-4-1-s3', type: 'exercise', title: 'Aufgabe 2 — Produkt + Kette', exerciseRef: 'ex-abl-4-1-b' },
      { id: 'abl-4-1-s4', type: 'exercise', title: 'Aufgabe 3 — Quotientenregel', exerciseRef: 'ex-abl-4-1-c' },
      { id: 'abl-4-1-s5', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-4-1-d' },
      { id: 'abl-4-1-s6', type: 'exercise', title: 'Aufgabe 5 — Wahr/Falsch', exerciseRef: 'ex-abl-4-1-e' },
      { id: 'abl-4-1-s7', type: 'exercise', title: 'Aufgabe 6 — Kettenregel (Potenz)', exerciseRef: 'ex-abl-4-1-f' },
      { id: 'abl-4-1-s8', type: 'exercise', title: 'Aufgabe 7 — Produkt mit ln', exerciseRef: 'ex-abl-4-1-g' },
      { id: 'abl-4-1-s9', type: 'exercise', title: 'Aufgabe 8 — Zuordnung', exerciseRef: 'ex-abl-4-1-h' },
      { id: 'abl-4-1-s10', type: 'exercise', title: 'Aufgabe 9 — Wahr/Falsch', exerciseRef: 'ex-abl-4-1-i' },
      { id: 'abl-4-1-s11', type: 'exercise', title: 'Aufgabe 10 — Zahleneingabe', exerciseRef: 'ex-abl-4-1-j' },
      { id: 'abl-4-1-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-abl-4-1-mastery' },
    ],
  },
  {
    id: 'abl-4-2', unitId: 'abl-unit-4',
    title: 'Prüfung: Kurvendiskussion & Anwendungen',
    order: 2, estimatedMinutes: 30,
    learningGoals: [
      'Extrema und Wendepunkte auf Prüfungsniveau bestimmen',
      'Monotoniebereiche analysieren',
      'Optimierungsaufgaben lösen',
      'Taylor-Polynome aufstellen',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-4-2-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Kurvendiskussion & Anwendungen',
        content: `**Typische Prüfungsthemen:**

**1. Extremwertaufgaben (Kurvendiskussion)**
$$f\'(x_0) = 0 \\text{ (notwendig)} \\qquad f\'\'(x_0) \\begin{cases} < 0 & \\text{Maximum} \\\\ > 0 & \\text{Minimum} \\\\ = 0 & \\text{weitere Untersuchung nötig} \\end{cases}$$

**2. Wendepunkte**
$$f\'\'(x_0) = 0 \\quad \\text{und} \\quad f\'\'\'(x_0) \\neq 0 \\Rightarrow \\text{Wendepunkt}$$

**3. Optimierungsaufgaben (Extremwertprobleme)**
- Zielfunktion $Z(x)$ aufstellen (was soll maximiert/minimiert werden?)
- Nebenbedingung einsetzen → eine Variable eliminieren
- $Z\'(x) = 0$ lösen und $Z\'\'$ prüfen

**4. Taylor-Polynome**
$$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$
Für $x_0 = 0$: $T_n(x) = f(0) + f\'(0)x + \\frac{f\'\'(0)}{2}x^2 + \\frac{f\'\'\'(0)}{6}x^3 + \\ldots$

**Wichtige Näherungen ($x_0 = 0$, kleines $x$):**
$$\\sin(x) \\approx x - \\frac{x^3}{6}, \\quad \\cos(x) \\approx 1 - \\frac{x^2}{2}, \\quad e^x \\approx 1 + x + \\frac{x^2}{2}$$`,
      },
      { id: 'abl-4-2-s2', type: 'exercise', title: 'Aufgabe 1 — Extrema', exerciseRef: 'ex-abl-4-2-a' },
      { id: 'abl-4-2-s3', type: 'exercise', title: 'Aufgabe 2 — Wendepunkt', exerciseRef: 'ex-abl-4-2-b' },
      { id: 'abl-4-2-s4', type: 'exercise', title: 'Aufgabe 3 — Optimierung Rechteck', exerciseRef: 'ex-abl-4-2-c' },
      { id: 'abl-4-2-s5', type: 'exercise', title: 'Aufgabe 4 — Taylor e^x', exerciseRef: 'ex-abl-4-2-d' },
      { id: 'abl-4-2-s6', type: 'exercise', title: 'Aufgabe 5 — Wahr/Falsch', exerciseRef: 'ex-abl-4-2-e' },
      { id: 'abl-4-2-s7', type: 'exercise', title: 'Aufgabe 6 — xe^(-x)', exerciseRef: 'ex-abl-4-2-f' },
      { id: 'abl-4-2-s8', type: 'exercise', title: 'Aufgabe 7 — Zuordnung', exerciseRef: 'ex-abl-4-2-g' },
      { id: 'abl-4-2-s9', type: 'exercise', title: 'Aufgabe 8 — Optimierung Zylinder', exerciseRef: 'ex-abl-4-2-h' },
      { id: 'abl-4-2-s10', type: 'exercise', title: 'Aufgabe 9 — Monotonie', exerciseRef: 'ex-abl-4-2-i' },
      { id: 'abl-4-2-s11', type: 'exercise', title: 'Aufgabe 10 — Taylor sin(x)', exerciseRef: 'ex-abl-4-2-j' },
      { id: 'abl-4-2-s12', type: 'mastery-check', title: 'Abschluss-Prüfungsfrage', exerciseRef: 'ex-abl-4-2-mastery' },
    ],
  },
]

export const abl_unit4 = {
  id: 'abl-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Ableitungsregeln, Kurvendiskussion, Optimierung und Taylor — auf TU Wien Klausurniveau',
  lessons: lessons_abl_u4,
  exercises: exercises_abl_u4,
}
