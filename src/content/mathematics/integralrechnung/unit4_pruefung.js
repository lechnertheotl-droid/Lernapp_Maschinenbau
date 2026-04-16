// ── Integralrechnung Unit 4: Prüfungsaufgaben ─────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

const exercises_int_u4 = {

  // ── Lektion 4-1: Prüfung Integrationstechniken ───────────────────────────

  'ex-int-4-1-a': {
    id: 'ex-int-4-1-a', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: $\\int x \\cdot e^{x^2} \\, dx$',
    options: [
      '$e^{x^2} + C$',
      '$\\frac{1}{2} \\cdot e^{x^2} + C$',
      '$x^2 \\cdot e^{x^2} + C$',
      '$2x \\cdot e^{x^2} + C$',
    ],
    correctIndex: 1,
    explanation: 'Substitution: $u = x^2$, $du = 2x \\, dx$ → $x \\, dx = du/2$. Das Integral wird: $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2} e^u + C = \\frac{1}{2} e^{x^2} + C$. Probe: $\\left(\\frac{1}{2} e^{x^2}\\right)\' = \\frac{1}{2} e^{x^2} \\cdot 2x = x e^{x^2}$ ✓',
    hints: ['Setze $u = x^2$. Was ist dann $du$?', '$du = 2x \\, dx$ → $x \\, dx = du/2$'],
  },

  'ex-int-4-1-b': {
    id: 'ex-int-4-1-b', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: $\\int x \\cdot \\ln(x) \\, dx$',
    options: [
      '$\\frac{x^2 \\ln(x)}{2} - \\frac{x^2}{4} + C$',
      '$\\frac{x^2 \\ln(x)}{2} + \\frac{x^2}{4} + C$',
      '$x \\ln(x) - x + C$',
      '$\\frac{\\ln(x)^2}{2} + C$',
    ],
    correctIndex: 0,
    explanation: 'Partielle Integration: $u = \\ln(x)$ → $u\' = 1/x$; $v\' = x$ → $v = x^2/2$. $\\int x \\ln(x) \\, dx = \\frac{x^2}{2} \\ln(x) - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x} \\, dx = \\frac{x^2}{2} \\ln(x) - \\frac{1}{2} \\int x \\, dx = \\frac{x^2}{2} \\ln(x) - \\frac{x^2}{4} + C$.',
    hints: ['Wähle $u = \\ln(x)$ (wird beim Ableiten einfacher) und $v\' = x$.', '$u\' = 1/x$, $v = x^2/2$. Einsetzen in $\\int u \\cdot v\' = u \\cdot v - \\int u\' \\cdot v$.'],
  },

  'ex-int-4-1-c': {
    id: 'ex-int-4-1-c', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Zerlege in Partialbrüche und berechne: $\\int \\frac{1}{x^2-1} \\, dx$',
    options: [
      '$\\frac{1}{2} \\ln|x-1| - \\frac{1}{2} \\ln|x+1| + C$',
      '$\\frac{1}{2} \\ln|x-1| + \\frac{1}{2} \\ln|x+1| + C$',
      '$\\ln|x^2-1| + C$',
      '$-\\frac{1}{2(x^2-1)} + C$',
    ],
    correctIndex: 0,
    explanation: '$\\frac{1}{x^2-1} = \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$. Ansatz: $1 = A(x+1) + B(x-1)$. $x=1$: $A=1/2$; $x=-1$: $B=-1/2$. Also: $\\int \\left[\\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\right] dx = \\frac{1}{2} \\ln|x-1| - \\frac{1}{2} \\ln|x+1| + C$.',
    hints: ['$\\frac{1}{x^2-1} = \\frac{1}{(x-1)(x+1)}$', 'Partialbruchansatz: $\\frac{A}{x-1} + \\frac{B}{x+1}$. Einsetzen von $x=1$ und $x=-1$ liefert $A$ und $B$.'],
  },

  'ex-int-4-1-d': {
    id: 'ex-int-4-1-d', lessonId: 'int-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne das bestimmte Integral: $\\int_0^1 x \\cdot e^x \\, dx$. Runde auf 2 Dezimalstellen.',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Partielle Integration: $u = x$ → $u\' = 1$; $v\' = e^x$ → $v = e^x$. $[x \\cdot e^x - e^x]_0^1 = [e^x(x-1)]_0^1 = e \\cdot (1-1) - e^0 \\cdot (0-1) = 0 - (-1) = 1$.',
    hints: ['Partielle Integration mit $u = x$, $v\' = e^x$.', 'Ergebnis: $[e^x(x-1)]_0^1 = e \\cdot 0 - 1 \\cdot (-1) = 1$.'],
  },

  'ex-int-4-1-e': {
    id: 'ex-int-4-1-e', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: $\\int \\sin^2(x) \\, dx$',
    options: [
      '$-\\frac{1}{2} \\cos(2x) + C$',
      '$\\frac{x}{2} - \\frac{\\sin(2x)}{4} + C$',
      '$\\frac{x}{2} + \\frac{\\sin(2x)}{4} + C$',
      '$-\\cos(x) \\cdot \\sin(x) + C$',
    ],
    correctIndex: 1,
    explanation: 'Nutze die Halbwinkelformel: $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$. Dann: $\\int \\frac{1 - \\cos(2x)}{2} \\, dx = \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C$.',
    hints: ['$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ — Halbwinkelformel anwenden.', '$\\int \\cos(2x) \\, dx = \\frac{\\sin(2x)}{2}$'],
  },

  'ex-int-4-1-f': {
    id: 'ex-int-4-1-f', lessonId: 'int-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Es gilt: $\\int_{-1}^1 x^3 \\, dx = 0$, weil $x^3$ eine ungerade Funktion ist.',
    correct: true,
    explanation: 'Korrekt! Eine ungerade Funktion $f(x)$ erfüllt $f(-x) = -f(x)$. Für ein symmetrisches Intervall $[-a, a]$ gilt daher stets $\\int_{-a}^a f(x) \\, dx = 0$. Da $x^3$ ungerade ist, heben sich die Flächenanteile auf.',
    hints: ['Ungerade Funktion: $f(-x) = -f(x)$. Was bedeutet das für symmetrische Integrale?', '$\\int_{-a}^a f(x) \\, dx = 0$ für ungerade $f$ — oder nachrechnen: $[x^4/4]_{-1}^1 = 1/4 - 1/4 = 0$. $\\int x^3 \\, dx = x^4/4$, $x^3$ ist ungerade, $x^4/4$ ist gerade. $[x^4/4]_{-1}^1 = 1/4 - 1/4 = 0$. ✓'],
  },

  'ex-int-4-1-g': {
    id: 'ex-int-4-1-g', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Substitution ist am geeignetsten für $\\int \\sqrt{1-x^2} \\, dx$?',
    options: [
      '$u = 1 - x^2$',
      '$x = \\sin(t)$',
      '$x = \\tan(t)$',
      '$u = x^2$',
    ],
    correctIndex: 1,
    explanation: 'Die Substitution $x = \\sin(t)$ verwandelt $\\sqrt{1-x^2}$ in $\\sqrt{1-\\sin^2(t)} = \\sqrt{\\cos^2(t)} = \\cos(t)$. Dann gilt $dx = \\cos(t) \\, dt$ und das Integral wird $\\int \\cos^2(t) \\, dt$ — lösbar mit der Halbwinkelformel. Das Ergebnis ist $\\frac{1}{2}(\\arcsin(x) + x\\sqrt{1-x^2}) + C$.',
    hints: ['$\\sqrt{1-x^2}$ erinnert an die Identität $\\sin^2 + \\cos^2 = 1$.', 'Setze $x = \\sin(t)$, dann wird $1-x^2 = \\cos^2(t)$.'],
  },

  'ex-int-4-1-h': {
    id: 'ex-int-4-1-h', lessonId: 'int-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne: $\\int_1^e \\ln(x) \\, dx$. (Tipp: Partielle Integration mit $u = \\ln(x)$, $v\' = 1$)',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Partielle Integration: $u = \\ln(x)$ → $u\' = 1/x$; $v\' = 1$ → $v = x$. $[x \\ln(x) - x]_1^e = (e \\cdot 1 - e) - (1 \\cdot 0 - 1) = 0 - (-1) = 1$.',
    hints: ['$u = \\ln(x)$, $v\' = 1$ → $v = x$. Dann: $x \\ln(x) - \\int x \\cdot (1/x) \\, dx = x \\ln(x) - x$.', 'Grenzen einsetzen: $[x \\ln(x) - x]_1^e = (e - e) - (0 - 1) = 1$.'],
  },

  'ex-int-4-1-i': {
    id: 'ex-int-4-1-i', lessonId: 'int-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Partialbruchzerlegung von $\\frac{1}{x(x+1)}$ lautet: $\\frac{1}{x} - \\frac{1}{x+1}$.',
    correct: true,
    explanation: '$\\frac{1}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1}$. Multipliziere mit $x(x+1)$: $1 = A(x+1) + Bx$. $x=0$: $A=1$. $x=-1$: $B=-1$. Also: $\\frac{1}{x} - \\frac{1}{x+1}$. Probe: $\\frac{x+1-x}{x(x+1)} = \\frac{1}{x(x+1)}$ ✓',
    hints: ['Ansatz: $\\frac{A}{x} + \\frac{B}{x+1}$. Multipliziere beide Seiten mit $x(x+1)$.', 'Setze $x=0$ für $A$ und $x=-1$ für $B$ ein.'],
  },

  'ex-int-4-1-j': {
    id: 'ex-int-4-1-j', lessonId: 'int-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: $\\int x^2 \\cdot e^x \\, dx$',
    options: [
      '$x^2 e^x - 2x e^x + 2e^x + C$',
      '$x^2 e^x + 2x e^x + 2e^x + C$',
      '$x^2 e^x - 2e^x + C$',
      '$(x^2 - 2) e^x + C$',
    ],
    correctIndex: 0,
    explanation: 'Zweifache partielle Integration. Runde 1: $u=x^2$, $v\'=e^x$ → $x^2 e^x - \\int 2x e^x \\, dx$. Runde 2: $u=2x$, $v\'=e^x$ → $2x e^x - \\int 2e^x \\, dx = 2x e^x - 2e^x$. Gesamt: $x^2 e^x - (2x e^x - 2e^x) + C = x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2-2x+2) + C$.',
    hints: ['Zweimal partielle Integration: zuerst $u=x^2$, $v\'=e^x$, dann $u=2x$, $v\'=e^x$.', 'Jedes Mal nimmt der Grad des Polynoms um 1 ab.'],
  },

  'ex-int-4-1-mastery': {
    id: 'ex-int-4-1-mastery', lessonId: 'int-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: $\\int_0^{\\pi/2} \\sin(x) \\cdot \\cos(x) \\, dx$',
    options: ['$0$', '$1/4$', '$1/2$', '$1$'],
    correctIndex: 2,
    explanation: 'Methode 1 (Substitution): $u = \\sin(x)$, $du = \\cos(x) \\, dx$. Grenzen: $x=0 \\to u=0$, $x=\\pi/2 \\to u=1$. Integral: $\\int_0^1 u \\, du = [u^2/2]_0^1 = 1/2$. Methode 2 (Identität): $\\sin(x) \\cdot \\cos(x) = \\sin(2x)/2$. $\\int_0^{\\pi/2} \\frac{\\sin(2x)}{2} \\, dx = [-\\cos(2x)/4]_0^{\\pi/2} = (1/4) - (-1/4) = 1/2$.',
    hints: ['Nutze $u = \\sin(x)$ oder die Identität $\\sin(x) \\cdot \\cos(x) = \\sin(2x)/2$.', 'Vergiss nicht, bei der Substitution auch die Grenzen umzurechnen.'],
  },

  // ── Lektion 4-2: Prüfung Anwendungen ─────────────────────────────────────

  'ex-int-4-2-a': {
    id: 'ex-int-4-2-a', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne die Fläche, die von $f(x) = x^2 - 4$ und der $x$-Achse eingeschlossen wird. (Tipp: Nullstellen bei $x = \\pm 2$)',
    correctValue: 10.67,
    tolerance: 0.02,
    unit: 'FE',
    explanation: 'Nullstellen: $x^2 - 4 = 0$ → $x = \\pm 2$. Auf $[-2, 2]$ gilt $f(x) \\le 0$, also $A = \\left|\\int_{-2}^2 (x^2-4) \\, dx\\right| = \\left|[x^3/3 - 4x]_{-2}^2\\right| = |(8/3 - 8) - (-8/3 + 8)| = |-16/3 - 16/3| = 32/3 \\approx 10{,}67$ FE.',
    hints: ['$f(x) = x^2-4$ ist auf $[-2, 2]$ negativ — Betrag des Integrals nehmen!', 'Nutze Symmetrie: $A = 2 \\cdot \\left|\\int_0^2 (x^2-4) \\, dx\\right|$.'],
  },

  'ex-int-4-2-b': {
    id: 'ex-int-4-2-b', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das Volumen des Rotationskörpers, der entsteht, wenn $f(x) = \\sqrt{x}$ auf $[0, 4]$ um die $x$-Achse gedreht wird, berechnet sich zu:',
    options: [
      '$V = \\pi \\cdot \\int_0^4 x \\, dx = 8\\pi$',
      '$V = \\pi \\cdot \\int_0^4 \\sqrt{x} \\, dx = 16\\pi/3$',
      '$V = \\pi \\cdot \\int_0^4 x^2 \\, dx = 64\\pi/3$',
      '$V = 2\\pi \\cdot \\int_0^4 x \\cdot \\sqrt{x} \\, dx = 128\\pi/5$',
    ],
    correctIndex: 0,
    explanation: 'Scheibenformel: $V = \\pi \\cdot \\int_a^b [f(x)]^2 \\, dx = \\pi \\cdot \\int_0^4 (\\sqrt{x})^2 \\, dx = \\pi \\cdot \\int_0^4 x \\, dx = \\pi \\cdot [x^2/2]_0^4 = \\pi \\cdot 8 = 8\\pi$.',
    hints: ['Rotationsvolumen um $x$-Achse: $V = \\pi \\cdot \\int [f(x)]^2 \\, dx$.', '$(\\sqrt{x})^2 = x$. Dann ist das Integral einfach.'],
  },

  'ex-int-4-2-c': {
    id: 'ex-int-4-2-c', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne die Fläche zwischen $f(x) = x^2$ und $g(x) = x$ auf $[0, 1]$.',
    correctValue: 0.17,
    tolerance: 0.02,
    unit: 'FE',
    explanation: 'Auf $[0, 1]$ gilt $g(x) = x \\ge x^2 = f(x)$. $A = \\int_0^1 (x - x^2) \\, dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6 \\approx 0{,}167$ FE.',
    hints: ['Welche Funktion ist auf $(0,1)$ größer? Prüfe z.B. bei $x=0{,}5$: $0{,}5 > 0{,}25$.', '$A = \\int_0^1 (x - x^2) \\, dx = [x^2/2 - x^3/3]_0^1$.'],
  },

  'ex-int-4-2-d': {
    id: 'ex-int-4-2-d', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Der $x$-Schwerpunkt einer homogenen Fläche unter $f(x) \\ge 0$ auf $[a, b]$ berechnet sich als:',
    options: [
      '$\\bar{x} = \\int_a^b x \\cdot f(x) \\, dx$',
      '$\\bar{x} = \\dfrac{\\int_a^b x \\cdot f(x) \\, dx}{\\int_a^b f(x) \\, dx}$',
      '$\\bar{x} = \\dfrac{\\frac{1}{2} \\int_a^b [f(x)]^2 \\, dx}{\\int_a^b f(x) \\, dx}$',
      '$\\bar{x} = (b + a) / 2$',
    ],
    correctIndex: 1,
    explanation: 'Der Schwerpunkt (Flächenschwerpunkt) in $x$-Richtung ist: $\\bar{x} = M_x / A = \\frac{\\int_a^b x \\cdot f(x) \\, dx}{\\int_a^b f(x) \\, dx}$. Dabei ist $A$ die Gesamtfläche und $M_x$ das statische Moment. Das entspricht dem gewichteten Mittelwert von $x$, gewichtet mit $f(x)$.',
    hints: ['$\\bar{x} = $ Moment / Fläche.', 'Das statische Moment $M_x = \\int x \\cdot f(x) \\, dx$, die Fläche $A = \\int f(x) \\, dx$.'],
  },

  'ex-int-4-2-e': {
    id: 'ex-int-4-2-e', lessonId: 'int-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Der Schwerpunkt der Fläche unter $f(x) = x$ auf $[0, 2]$ liegt bei $\\bar{x} = 4/3$.',
    correct: true,
    explanation: 'Fläche: $A = \\int_0^2 x \\, dx = [x^2/2]_0^2 = 2$. Statisches Moment: $M_x = \\int_0^2 x \\cdot x \\, dx = \\int_0^2 x^2 \\, dx = [x^3/3]_0^2 = 8/3$. Schwerpunkt: $\\bar{x} = M_x/A = (8/3)/2 = 4/3$ ✓',
    hints: ['Berechne $A = \\int_0^2 x \\, dx$ und $M_x = \\int_0^2 x \\cdot x \\, dx$.', '$\\bar{x} = M_x / A$.'],
  },

  'ex-int-4-2-f': {
    id: 'ex-int-4-2-f', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Bauteil hat das Querschnittsprofil $f(x) = 2$ auf $[0, 3]$ (Rechteck). Welche Schnittgröße erhält man durch $\\int_0^3 f(x) \\, dx$?',
    options: [
      'Die Fläche des Querschnitts $A = 6$ m²',
      'Das Flächenträgheitsmoment I',
      'Den Schwerpunkt x̄',
      'Das Volumen eines Zylinders mit Radius 2',
    ],
    correctIndex: 0,
    explanation: '$\\int_0^3 2 \\, dx = [2x]_0^3 = 6$. Das Integral einer konstanten Profil-Funktion über die Breite ergibt die Querschnittsfläche $A$. Für $f(x) = 2$ (Höhe 2, Breite 3) erhält man $A = 2 \\cdot 3 = 6\\,m^2$.',
    hints: ['Was bedeutet das Integral geometrisch?', 'Das bestimmte Integral = Fläche unter dem Graphen.'],
  },

  'ex-int-4-2-g': {
    id: 'ex-int-4-2-g', lessonId: 'int-4-2', type: 'number-input',
    question: '[PRÜFUNG] Berechne das Volumen des Rotationskörpers, der entsteht, wenn $f(x) = 2$ auf $[0, 3]$ um die $x$-Achse gedreht wird. Gib das Ergebnis als Vielfaches von $\\pi$ an.',
    correctValue: 12,
    tolerance: 0.01,
    unit: '·π m³',
    explanation: '$V = \\pi \\cdot \\int_0^3 [f(x)]^2 \\, dx = \\pi \\cdot \\int_0^3 4 \\, dx = \\pi \\cdot [4x]_0^3 = 12\\pi\\,m^3$. Das ist ein Zylinder mit Radius 2 und Länge 3: $V = \\pi \\cdot r^2 \\cdot l = \\pi \\cdot 4 \\cdot 3 = 12\\pi$ ✓',
    hints: ['$V = \\pi \\cdot \\int [f(x)]^2 \\, dx = \\pi \\cdot \\int_0^3 2^2 \\, dx$.', 'Das Ergebnis ist ein Zylinder: $V = \\pi \\cdot r^2 \\cdot h$.'],
  },

  'ex-int-4-2-h': {
    id: 'ex-int-4-2-h', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft wirkt ortsabhängig: $F(x) = 3x^2$ N ($x$ in Metern). Welche Arbeit verrichtet sie auf dem Weg von $x = 0$ bis $x = 2$ m?',
    options: ['$W = 6$ J', '$W = 8$ J', '$W = 12$ J', '$W = 24$ J'],
    correctIndex: 1,
    explanation: 'Arbeit $= \\int F(x) \\, dx$. $W = \\int_0^2 3x^2 \\, dx = [x^3]_0^2 = 8 - 0 = 8$ J. Allgemein: $W = \\int_a^b F(x) \\, dx$ — das Integral der Kraft über den Weg ergibt die Arbeit.',
    hints: ['Arbeit = Integral der Kraft über den Weg: $W = \\int F(x) \\, dx$.', '$\\int 3x^2 \\, dx = x^3$.'],
  },

  'ex-int-4-2-i': {
    id: 'ex-int-4-2-i', lessonId: 'int-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Das Flächenträgheitsmoment $I_x = \\iint y^2 \\, dA$ eines Rechtecks (Breite $b$, Höhe $h$) um die $x$-Achse ist $I_x = b \\cdot h^3/12$.',
    correct: true,
    explanation: 'Für ein Rechteck (Querschnitt) mit Breite $b$ und Höhe $h$, mittig auf der $x$-Achse zentriert: $I_x = \\int_{-h/2}^{h/2} b \\cdot y^2 \\, dy = b \\cdot [y^3/3]_{-h/2}^{h/2} = b \\cdot (h^3/24 - (-h^3/24)) = b \\cdot h^3/12$. Dies ist eine zentrale Formel in der Technischen Mechanik.',
    hints: ['$I_x = b \\cdot \\int_{-h/2}^{h/2} y^2 \\, dy$. Das ist ein einfaches Integral.', '$[y^3/3]_{-h/2}^{h/2} = h^3/24 - (-h^3/24) = h^3/12$. Dann mal $b$.'],
  },

  'ex-int-4-2-j': {
    id: 'ex-int-4-2-j', lessonId: 'int-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne die Bogenlänge von $f(x) = x^{3/2}$ auf $[0, 4]$. Die Formel lautet $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2} \\, dx$.',
    options: [
      '$L = \\int_0^4 \\sqrt{1 + \\frac{9}{4}x} \\, dx$',
      '$L = \\int_0^4 \\sqrt{1 + x} \\, dx$',
      '$L = \\int_0^4 \\left(1 + \\frac{3}{2}\\sqrt{x}\\right) dx$',
      '$L = \\int_0^4 \\sqrt{1 + \\frac{3}{2}x^{1/2}} \\, dx$',
    ],
    correctIndex: 0,
    explanation: '$f\'(x) = \\frac{3}{2} x^{1/2}$. $[f\'(x)]^2 = \\frac{9}{4} x$. Also $L = \\int_0^4 \\sqrt{1 + \\frac{9}{4}x} \\, dx$. (Das Ergebnis nach Substitution $u = 1 + \\frac{9}{4}x$ ist $L = \\frac{8}{27} \\cdot [(1 + \\frac{9}{4}x)^{3/2}]_0^4 \\approx 9{,}07$.)',
    hints: ['$f\'(x) = \\frac{3}{2} \\sqrt{x}$. Was ist $[f\'(x)]^2$?', '$\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, also $[f\'(x)]^2 = \\frac{9}{4} x$.'],
  },

  'ex-int-4-2-mastery': {
    id: 'ex-int-4-2-mastery', lessonId: 'int-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Eine Parabel $f(x) = -x^2 + 4$ und $g(x) = 0$ begrenzen eine Fläche. Berechne das Volumen des Rotationskörpers (Drehung um $x$-Achse).',
    options: [
      '$V = \\pi \\cdot \\int_{-2}^2 (-x^2 + 4)^2 \\, dx = 512\\pi/15$',
      '$V = \\pi \\cdot \\int_{-2}^2 (x^2 - 4) \\, dx$',
      '$V = 2\\pi \\cdot \\int_0^2 (-x^2 + 4) \\, dx = 16\\pi$',
      '$V = \\pi \\cdot \\int_0^2 (-x^2 + 4)^2 \\, dx = 256\\pi/15$',
    ],
    correctIndex: 0,
    explanation: '$f(x) = -x^2+4$ hat Nullstellen bei $x=\\pm 2$. Scheibenformel: $V = \\pi \\cdot \\int_{-2}^2 (-x^2+4)^2 \\, dx$. $(-x^2+4)^2 = x^4 - 8x^2 + 16$. $\\int_{-2}^2 (x^4-8x^2+16) \\, dx = 2 \\cdot \\int_0^2 (x^4-8x^2+16) \\, dx$ (Symmetrie) $= 2 \\cdot [x^5/5 - 8x^3/3 + 16x]_0^2 = 2 \\cdot (32/5 - 64/3 + 32) = 2 \\cdot (256/15) = 512/15$. $V = 512\\pi/15$.',
    hints: ['Scheibenformel: $V = \\pi \\cdot \\int [f(x)]^2 \\, dx$. Nullstellen bestimmen die Grenzen.', '$(-x^2+4)^2 = x^4-8x^2+16$. Nutze die Symmetrie um $x=0$.'],
  },

  // ── Lektion 4-3: Uneigentliche & numerische Integration ────────────────────
  'ex-int-4-3-a': {
    id: 'ex-int-4-3-a', lessonId: 'int-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Aussage zu uneigentlichen Integralen ist KORREKT?',
    options: [
      'Ein uneigentliches Integral konvergiert, wenn der Grenzwert $\\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$ existiert',
      'Uneigentliche Integrale haben nie einen endlichen Wert',
      'Sie sind dasselbe wie unbestimmte Integrale',
      'Sie sind nur über symmetrische Bereiche definiert',
    ],
    correctIndex: 0,
    explanation: 'Uneigentliche Integrale entstehen, wenn der Integrationsbereich unbeschränkt ist ($\\infty$) oder der Integrand bei einer Grenze divergiert. Sie konvergieren, wenn der Grenzwert existiert und endlich ist. Beispiel: $\\int_1^\\infty x^{-2} dx = 1$ konvergiert, $\\int_1^\\infty x^{-1} dx$ divergiert.',
    hints: ['Definition über Grenzwert.', 'Konvergenz hängt vom Abklingverhalten des Integranden ab.'],
  },
  'ex-int-4-3-b': {
    id: 'ex-int-4-3-b', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_1^\\infty \\frac{1}{x^2}\\,dx$.',
    correctValue: 1,
    tolerance: 0.001,
    unit: '',
    explanation: '$\\int_1^b x^{-2}\\,dx = [-x^{-1}]_1^b = -1/b + 1$. Grenzwert für $b \\to \\infty$: $0 + 1 = 1$. Konvergent.',
    hints: ['Stammfunktion von $x^{-2}$ ist $-x^{-1}$.', 'Grenzwert für $b \\to \\infty$ bilden.'],
  },
  'ex-int-4-3-c': {
    id: 'ex-int-4-3-c', lessonId: 'int-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Das Integral $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ ist uneigentlich (Singularität an der unteren Grenze) und konvergiert mit Wert $2$.',
    correct: true,
    explanation: 'Bei $x = 0$ wird $1/\\sqrt{x}$ unendlich. $\\int_a^1 x^{-1/2} dx = [2\\sqrt{x}]_a^1 = 2 - 2\\sqrt{a}$. Für $a \\to 0$: $2 - 0 = 2$. Konvergiert. Allgemein: $\\int_0^1 x^{-p} dx$ konvergiert für $p < 1$.',
    hints: ['Singularität bei der unteren Grenze: Grenzwert $a \\to 0^+$ bilden.', 'Stammfunktion: $2\\sqrt{x}$.'],
  },
  'ex-int-4-3-d': {
    id: 'ex-int-4-3-d', lessonId: 'int-4-3', type: 'matching',
    question: '[PRÜFUNG] Ordne die Vergleichskriterien für die Konvergenz von $\\int_1^\\infty x^{-p} dx$ zu.',
    pairs: [
      { left: '$p > 1$', right: 'Konvergent (Wert $1/(p-1)$)' },
      { left: '$p = 1$', right: 'Divergent ($\\ln$-Wachstum)' },
      { left: '$p < 1$', right: 'Divergent ($x^{1-p}$ wächst unbeschränkt)' },
      { left: '$p = 2$', right: 'Konvergent, Wert $1$' },
    ],
    explanation: 'Die p-Integrale sind die Standardvergleiche für Konvergenzfragen. Über $[1,\\infty)$: konvergent gdw. $p > 1$. Über $(0,1]$: konvergent gdw. $p < 1$ (umgekehrt!).',
    hints: ['Schlüsselgrenze ist $p = 1$ (Logarithmus).', 'Im Unendlichen: schnelles Abklingen nötig.'],
  },
  'ex-int-4-3-e': {
    id: 'ex-int-4-3-e', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Numerische Integration mit Trapezregel: $\\int_0^1 x^2\\,dx$, Schrittweite $h = 0{,}5$ (3 Stützstellen). Berechne den Trapez-Näherungswert.',
    correctValue: 0.375,
    tolerance: 0.001,
    unit: '',
    explanation: 'Stützstellen: $x_0=0$, $x_1=0{,}5$, $x_2=1$ mit $f$-Werten $0$, $0{,}25$, $1$. Trapez: $T = h \\cdot (f_0/2 + f_1 + f_2/2) = 0{,}5 \\cdot (0 + 0{,}25 + 0{,}5) = 0{,}5 \\cdot 0{,}75 = 0{,}375$. Exakter Wert: $1/3 \\approx 0{,}333$ — Trapez überschätzt bei konvexen Funktionen.',
    hints: ['Trapezregel: $T = h \\cdot (f_0/2 + f_1 + \\ldots + f_{n-1} + f_n/2)$.', 'Bei nur 3 Punkten: $T = h(f_0/2 + f_1 + f_2/2)$.'],
  },
  'ex-int-4-3-f': {
    id: 'ex-int-4-3-f', lessonId: 'int-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Methode ist für $\\int_0^1 \\sqrt{1 - x^2}\\,dx$ am effizientesten?',
    options: [
      'Trigonometrische Substitution $x = \\sin u$ — liefert $\\pi/4$ (Viertelkreis-Fläche)',
      'Partielle Integration',
      'Partialbrüche',
      'Direkte Stammfunktion mit der Potenzregel',
    ],
    correctIndex: 0,
    explanation: '$x = \\sin u$, $dx = \\cos u\\,du$, $\\sqrt{1-x^2} = \\cos u$. Grenzen: $u = 0$ bis $\\pi/2$. Integral: $\\int_0^{\\pi/2} \\cos^2 u\\,du = \\pi/4$. Geometrisch: Viertel des Einheitskreises mit Fläche $\\pi/4$.',
    hints: ['$\\sqrt{1 - x^2}$ schreit nach trigonometrischer Substitution.', 'Geometrische Interpretation: Viertelkreis.'],
  },
  'ex-int-4-3-g': {
    id: 'ex-int-4-3-g', lessonId: 'int-4-3', type: 'sorting',
    question: '[PRÜFUNG] Bringe die Schritte zur Konvergenzprüfung eines uneigentlichen Integrals in die richtige Reihenfolge.',
    items: [
      'Singularitäten und unbeschränkte Bereiche identifizieren',
      'Integral als Grenzwert eines bestimmten Integrals schreiben',
      'Stammfunktion $F(x)$ ermitteln',
      'Grenzwert $\\lim F$ bilden',
      'Wenn Grenzwert endlich → konvergent; sonst divergent',
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: 'Grenzwertbildung ist der entscheidende Schritt. Bei mehreren Singularitäten: Integral aufteilen und jede Stelle separat prüfen.',
    hints: ['Erst die Singularitäten finden.', 'Stammfunktion → Grenzwert.'],
  },
  'ex-int-4-3-h': {
    id: 'ex-int-4-3-h', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_0^\\infty e^{-x}\\,dx$.',
    correctValue: 1,
    tolerance: 0.001,
    unit: '',
    explanation: '$\\int_0^b e^{-x}\\,dx = [-e^{-x}]_0^b = -e^{-b} + 1$. Grenzwert $b \\to \\infty$: $-0 + 1 = 1$. Konvergiert. Diese Form taucht in der Wärmelehre, Diffusion und Wahrscheinlichkeitstheorie ständig auf.',
    hints: ['Stammfunktion: $-e^{-x}$.', '$e^{-b} \\to 0$ für $b \\to \\infty$.'],
  },
  'ex-int-4-3-i': {
    id: 'ex-int-4-3-i', lessonId: 'int-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Die Simpson-Regel ist genauer als die Trapezregel, weil sie Polynome bis Grad 3 exakt integriert.',
    correct: true,
    explanation: 'Simpson nutzt eine quadratische Interpolation (3 Punkte → Parabel) und integriert diese exakt. Daher liefert sie Polynome bis Grad 3 fehlerfrei. Lokaler Fehler: $O(h^5)$, global $O(h^4)$ — deutlich besser als Trapez ($O(h^3)$ lokal, $O(h^2)$ global).',
    hints: ['Simpson basiert auf Parabel-Interpolation.', 'Höhere Konvergenzordnung als Trapez.'],
  },
  'ex-int-4-3-j': {
    id: 'ex-int-4-3-j', lessonId: 'int-4-3', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\int_0^\\infty x \\cdot e^{-x}\\,dx$ (uneigentlich, partielle Integration).',
    correctValue: 1,
    tolerance: 0.005,
    unit: '',
    explanation: 'Partielle Integration: $u = x$, $v\' = e^{-x}$, $u\' = 1$, $v = -e^{-x}$. $\\int x e^{-x}\\,dx = -x e^{-x} + \\int e^{-x}\\,dx = -x e^{-x} - e^{-x} = -(x+1)e^{-x}$. Bestimmtes Integral: $[-(x+1)e^{-x}]_0^\\infty = 0 - (-1) = 1$ (mit $\\lim_{x \\to \\infty} (x+1)e^{-x} = 0$).',
    hints: ['Partielle Integration mit $u = x$, $v\' = e^{-x}$.', 'Grenzwert $x e^{-x} \\to 0$ schneller als $x \\to \\infty$.'],
  },
  'ex-int-4-3-mastery': {
    id: 'ex-int-4-3-mastery', lessonId: 'int-4-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Aussage zu $\\int_0^\\infty \\frac{1}{1+x^2}\\,dx$ ist korrekt?',
    options: [
      'Konvergent mit Wert $\\pi/2$ (Stammfunktion: $\\arctan x$)',
      'Divergent, weil $1/(1+x^2)$ nicht abklingt',
      'Konvergent mit Wert $\\pi$',
      'Konvergent mit Wert $1$',
    ],
    correctIndex: 0,
    explanation: 'Stammfunktion: $\\arctan x$. $[\\arctan x]_0^b = \\arctan b - 0$. Grenzwert: $\\arctan(\\infty) = \\pi/2$. Konvergent. Dieses Integral spielt in der Wahrscheinlichkeit (Cauchy-Verteilung) und Signalverarbeitung eine zentrale Rolle.',
    hints: ['Stammfunktion: $\\arctan x$.', '$\\arctan(\\infty) = \\pi/2$.'],
  },
}

const lessons_int_u4 = [
  {
    id: 'int-4-1', unitId: 'int-unit-4',
    title: 'Prüfung: Integrationstechniken',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Substitution, partielle Integration und Partialbrüche auf Prüfungsniveau anwenden',
      'Bestimmte Integrale sicher berechnen',
      'Die geeignete Integrationsmethode erkennen und einsetzen',
    ],
    prerequisites: ['int-2-4'],
    nextLessonId: 'int-4-2',
    steps: [
      {
        id: 'int-4-1-s1', type: 'explanation-formal', title: 'Prüfungsstrategie Integrationstechniken',
        content: `**Prüfungsaufgaben Integrationstechniken** — Erkennungsmuster:

**1. Substitution** — wenn der Integrand eine innere Funktion hat, deren Ableitung (bis auf Konstante) ebenfalls vorkommt:
$$\\int f(g(x)) \\cdot g'(x)\\,dx \\xrightarrow{u = g(x)} \\int f(u)\\,du$$

**2. Partielle Integration** — bei Produkten aus Polynom·Exponential, Polynom·Trig oder Polynom·ln:
$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$
Merkregel für u: **L**ogarithmus > **I**nvers-trig > **P**olynom > **T**rigonometrie > **E**xponential

**3. Partialbrüche** — bei gebrochenrationalen Funktionen (Zählergrad < Nennergrad):
$$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$

**4. Halbwinkelformeln** — für sin²(x) oder cos²(x):
$$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}, \\quad \\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$$

**Wichtig bei bestimmten Integralen:** Bei Substitution auch die Grenzen umrechnen!`,
      },
      { id: 'int-4-1-s2', type: 'exercise', title: 'Aufgabe 1 — Substitution', exerciseRef: 'ex-int-4-1-a' },
      { id: 'int-4-1-s3', type: 'exercise', title: 'Aufgabe 2 — Partielle Integration', exerciseRef: 'ex-int-4-1-b' },
      { id: 'int-4-1-s4', type: 'exercise', title: 'Aufgabe 3 — Partialbrüche', exerciseRef: 'ex-int-4-1-c' },
      { id: 'int-4-1-s5', type: 'exercise', title: 'Aufgabe 4 — Bestimmtes Integral', exerciseRef: 'ex-int-4-1-d' },
      { id: 'int-4-1-s6', type: 'exercise', title: 'Aufgabe 5 — Halbwinkelformel', exerciseRef: 'ex-int-4-1-e' },
      { id: 'int-4-1-s7', type: 'exercise', title: 'Aufgabe 6 — Symmetrie', exerciseRef: 'ex-int-4-1-f' },
      { id: 'int-4-1-s8', type: 'exercise', title: 'Aufgabe 7 — Trigonometrische Substitution', exerciseRef: 'ex-int-4-1-g' },
      { id: 'int-4-1-s9', type: 'exercise', title: 'Aufgabe 8 — ln-Integral', exerciseRef: 'ex-int-4-1-h' },
      { id: 'int-4-1-s10', type: 'exercise', title: 'Aufgabe 9 — Partialbrüche True/False', exerciseRef: 'ex-int-4-1-i' },
      { id: 'int-4-1-s11', type: 'exercise', title: 'Aufgabe 10 — Zweifache partielle Integration', exerciseRef: 'ex-int-4-1-j' },
      { id: 'int-4-1-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-int-4-1-mastery' },
    ],
  },
  {
    id: 'int-4-2', unitId: 'int-unit-4',
    title: 'Prüfung: Anwendungen der Integralrechnung',
    order: 2, estimatedMinutes: 25,
    learningGoals: [
      'Flächen zwischen Kurven und Rotationsvolumina berechnen',
      'Schwerpunkte und technische Kenngrößen mit Integralen bestimmen',
      'Technische Anwendungen (Arbeit, Trägheitsmoment, Bogenlänge) lösen',
    ],
    prerequisites: ['int-3-3', 'int-4-1'],
    nextLessonId: 'int-4-3',
    steps: [
      {
        id: 'int-4-2-s1', type: 'explanation-intuitive', title: 'Anwendungen in der Prüfung',
        content: `**Technische Anwendungen der Integralrechnung** — die häufigsten Prüfungsaufgaben:

**Flächenberechnung** (zwischen zwei Kurven):
$$A = \\int_a^b [f(x) - g(x)]\\,dx \\quad \\text{mit } f(x) \\geq g(x)$$
Achtung: Vorzeichenwechsel berücksichtigen — Betrag nehmen!

**Rotationsvolumen** (Scheibenformel, Drehung um x-Achse):
$$V = \\pi \\cdot \\int_a^b [f(x)]^2\\,dx$$

**Schwerpunkt** einer Fläche unter f(x) ≥ 0:
$$\\bar{x} = \\frac{\\int_a^b x \\cdot f(x)\\,dx}{\\int_a^b f(x)\\,dx}, \\quad \\bar{y} = \\frac{\\frac{1}{2}\\int_a^b [f(x)]^2\\,dx}{\\int_a^b f(x)\\,dx}$$

**Arbeit** einer ortsabhängigen Kraft:
$$W = \\int_{x_1}^{x_2} F(x)\\,dx$$

**Flächenträgheitsmoment** (Rechteck, Breite b, Höhe h):
$$I_x = \\frac{b \\cdot h^3}{12}$$

**Bogenlänge**:
$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$$`,
      },
      { id: 'int-4-2-s2', type: 'exercise', title: 'Aufgabe 1 — Fläche unter Parabel', exerciseRef: 'ex-int-4-2-a' },
      { id: 'int-4-2-s3', type: 'exercise', title: 'Aufgabe 2 — Rotationsvolumen', exerciseRef: 'ex-int-4-2-b' },
      { id: 'int-4-2-s4', type: 'exercise', title: 'Aufgabe 3 — Fläche zwischen Kurven', exerciseRef: 'ex-int-4-2-c' },
      { id: 'int-4-2-s5', type: 'exercise', title: 'Aufgabe 4 — Schwerpunktformel', exerciseRef: 'ex-int-4-2-d' },
      { id: 'int-4-2-s6', type: 'exercise', title: 'Aufgabe 5 — Schwerpunkt berechnen', exerciseRef: 'ex-int-4-2-e' },
      { id: 'int-4-2-s7', type: 'exercise', title: 'Aufgabe 6 — Technische Interpretation', exerciseRef: 'ex-int-4-2-f' },
      { id: 'int-4-2-s8', type: 'exercise', title: 'Aufgabe 7 — Rotationsvolumen Zylinder', exerciseRef: 'ex-int-4-2-g' },
      { id: 'int-4-2-s9', type: 'exercise', title: 'Aufgabe 8 — Arbeit einer Kraft', exerciseRef: 'ex-int-4-2-h' },
      { id: 'int-4-2-s10', type: 'exercise', title: 'Aufgabe 9 — Trägheitsmoment', exerciseRef: 'ex-int-4-2-i' },
      { id: 'int-4-2-s11', type: 'exercise', title: 'Aufgabe 10 — Bogenlänge', exerciseRef: 'ex-int-4-2-j' },
      { id: 'int-4-2-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-int-4-2-mastery' },
    ],
  },
  {
    id: 'int-4-3', unitId: 'int-unit-4',
    title: 'Prüfung: Uneigentliche & numerische Integrale',
    order: 3, estimatedMinutes: 30,
    learningGoals: [
      'Uneigentliche Integrale erkennen und auf Konvergenz prüfen',
      'p-Integrale als Vergleichsmaßstab nutzen',
      'Numerische Integration (Trapez, Simpson) anwenden und Fehler abschätzen',
      'Komplexe Integrale durch Methodenmix lösen',
    ],
    prerequisites: ['int-4-1', 'int-4-2'],
    nextLessonId: null,
    steps: [
      {
        id: 'int-4-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Uneigentliche & numerische Integrale',
        content: `**Uneigentliche Integrale** entstehen, wenn:
- Der Integrationsbereich unbeschränkt ist: $\\int_a^\\infty f(x)\\,dx$
- Der Integrand bei einer Grenze divergiert: $\\int_a^b f(x)\\,dx$ mit $f(x) \\to \\infty$ bei $x \\to a$ oder $b$

**Definition über Grenzwert:**
$$\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$$

Existiert der Grenzwert und ist endlich → konvergent. Sonst → divergent.

**p-Integrale (Standardvergleich):**

| $\\int_1^\\infty x^{-p} dx$ | $\\int_0^1 x^{-p} dx$ |
|---|---|
| $p > 1$: konvergent ($1/(p-1)$) | $p < 1$: konvergent |
| $p \\leq 1$: divergent | $p \\geq 1$: divergent |

---

**Numerische Integration** — wenn keine elementare Stammfunktion existiert oder nur Messwerte vorliegen:

**Trapezregel:** $T = h \\cdot \\left( \\frac{f_0 + f_n}{2} + \\sum_{i=1}^{n-1} f_i \\right)$, Fehler $O(h^2)$

**Simpson-Regel** (nur für gerades $n$): $S = \\frac{h}{3} \\left( f_0 + 4 \\sum_{\\text{ungerade}} f_i + 2 \\sum_{\\text{gerade}} f_i + f_n \\right)$, Fehler $O(h^4)$

Simpson ist deutlich genauer — integriert Polynome bis Grad 3 exakt.

---

**Standard-uneigentliche Integrale (auswendig):**

| Integral | Wert |
|---|---|
| $\\int_0^\\infty e^{-x}\\,dx$ | $1$ |
| $\\int_0^\\infty x \\cdot e^{-x}\\,dx$ | $1$ |
| $\\int_{-\\infty}^\\infty \\frac{1}{1+x^2}\\,dx$ | $\\pi$ |
| $\\int_0^\\infty e^{-x^2}\\,dx$ | $\\sqrt{\\pi}/2$ |

**Prüfungsfallen:**
- Konvergenz übersehen → falsche Anwendung der Stammfunktion ohne Grenzwert
- Trapezregel-Endfaktoren $1/2$ vergessen
- Simpson nur mit gerader Anzahl Teilintervallen anwendbar`,
      },
      { id: 'int-4-3-s2', type: 'exercise', title: 'Aufgabe 1: Konvergenzdefinition', exerciseRef: 'ex-int-4-3-a' },
      { id: 'int-4-3-s3', type: 'exercise', title: 'Aufgabe 2: Konvergente p-Integrale', exerciseRef: 'ex-int-4-3-b' },
      { id: 'int-4-3-s4', type: 'exercise', title: 'Aufgabe 3: Singularität bei 0', exerciseRef: 'ex-int-4-3-c' },
      { id: 'int-4-3-s5', type: 'exercise', title: 'Aufgabe 4: p-Vergleich', exerciseRef: 'ex-int-4-3-d' },
      { id: 'int-4-3-s6', type: 'exercise', title: 'Aufgabe 5: Trapezregel anwenden', exerciseRef: 'ex-int-4-3-e' },
      { id: 'int-4-3-s7', type: 'exercise', title: 'Aufgabe 6: Trigonometrische Substitution', exerciseRef: 'ex-int-4-3-f' },
      { id: 'int-4-3-s8', type: 'exercise', title: 'Aufgabe 7: Konvergenzanalyse-Schritte', exerciseRef: 'ex-int-4-3-g' },
      { id: 'int-4-3-s9', type: 'exercise', title: 'Aufgabe 8: Exponential bis ∞', exerciseRef: 'ex-int-4-3-h' },
      { id: 'int-4-3-s10', type: 'exercise', title: 'Aufgabe 9: Trapez vs. Simpson', exerciseRef: 'ex-int-4-3-i' },
      { id: 'int-4-3-s11', type: 'exercise', title: 'Aufgabe 10: Partielle Integration uneigentlich', exerciseRef: 'ex-int-4-3-j' },
      { id: 'int-4-3-s12', type: 'mastery-check', title: 'Prüfungsfrage: Cauchy-Integral', exerciseRef: 'ex-int-4-3-mastery' },
    ],
  },
]

export const int_unit4 = {
  id: 'int-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Integrationstechniken und technische Anwendungen',
  lessons: lessons_int_u4,
  exercises: exercises_int_u4,
}
