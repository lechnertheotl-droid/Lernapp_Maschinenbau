// ── Differentialgleichungen Unit 3: Prüfungsaufgaben ─────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_dgl_u3 = {

  // ── Lektion 3-1: Prüfung DGL 1. Ordnung ──────────────────────────────────
  'ex-dgl-3-1-a': {
    id: 'ex-dgl-3-1-a', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse die DGL durch Trennung der Variablen: $y\' = x \\cdot y$ mit $y(0) = 2$.',
    options: [
      '$y = 2e^{x^2/2}$',
      '$y = 2e^{x^2}$',
      '$y = e^{x^2/2} + 1$',
      '$y = 2e^x$',
    ],
    correctIndex: 0,
    explanation: 'Trennung: $\\frac{dy}{y} = x\\,dx$. Integration: $\\ln|y| = \\frac{x^2}{2} + C$, also $y = Ae^{x^2/2}$. Anfangsbedingung $y(0) = 2$: $A = 2$. Lösung: $y = 2e^{x^2/2}$.',
    hints: ['Bringe alle y auf eine Seite, alle x auf die andere.', 'Integriere $\\int \\frac{dy}{y} = \\ln|y|$.'],
  },
  'ex-dgl-3-1-b': {
    id: 'ex-dgl-3-1-b', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche allgemeine Lösung hat $y\' - 3y = 0$?',
    options: [
      '$y = Ce^{3x}$',
      '$y = Ce^{-3x}$',
      '$y = C \\cdot 3x$',
      '$y = C\\cos(3x)$',
    ],
    correctIndex: 0,
    explanation: 'Trennung der Variablen: $\\frac{dy}{y} = 3\\,dx \\Rightarrow \\ln|y| = 3x + C \\Rightarrow y = Ce^{3x}$. Alternativ: charakteristische Gleichung $\\lambda - 3 = 0 \\Rightarrow \\lambda = 3$.',
    hints: ['Charakteristische Gleichung: setze $y = e^{\\lambda x}$ an.'],
  },
  'ex-dgl-3-1-c': {
    id: 'ex-dgl-3-1-c', lessonId: 'dgl-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Die DGL $y\' + \\frac{2}{x}y = x^3$ ist eine lineare DGL 1. Ordnung.',
    correct: true,
    explanation: 'Ja, die Standardform $y\' + p(x)y = q(x)$ liegt vor mit $p(x) = \\frac{2}{x}$ und $q(x) = x^3$. y und y\' kommen nur in der 1. Potenz vor — das ist linear.',
    hints: ['Prüfe: Kommt y oder y\' nur in der 1. Potenz vor? Treten Produkte y·y\' auf?'],
  },
  'ex-dgl-3-1-d': {
    id: 'ex-dgl-3-1-d', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Der integrierende Faktor für $y\' + p(x)y = q(x)$ ist:',
    options: [
      '$\\mu(x) = e^{\\int p(x)\\,dx}$',
      '$\\mu(x) = e^{-\\int p(x)\\,dx}$',
      '$\\mu(x) = \\int p(x)\\,dx$',
      '$\\mu(x) = p(x)$',
    ],
    correctIndex: 0,
    explanation: 'Der integrierende Faktor ist $\\mu(x) = e^{\\int p(x)\\,dx}$. Multipliziert man die DGL damit, ergibt die linke Seite die Ableitung von $(\\mu \\cdot y)\'$.',
    hints: ['Nach Multiplikation mit $\\mu$ soll gelten: $(\\mu y)\' = \\mu q(x)$.'],
  },
  'ex-dgl-3-1-e': {
    id: 'ex-dgl-3-1-e', lessonId: 'dgl-3-1', type: 'number-input',
    question: '[PRÜFUNG] Anfangswertproblem: $y\' = -2y$, $y(0) = 5$. Welchen Wert hat $y(1)$ (auf 4 Dezimalstellen: $e^{-2} \\approx 0{,}1353$)?',
    correctAnswer: 0.6767,
    tolerance: 0.001,
    unit: '',
    explanation: 'Allgemeine Lösung: $y = Ce^{-2x}$. Anfangsbedingung: $y(0) = C = 5$. Also $y(1) = 5e^{-2} \\approx 5 \\cdot 0{,}1353 = 0{,}6767$.',
    hints: ['Trenne Variablen: $\\frac{dy}{y} = -2\\,dx$, integriere.', 'Setze $x = 1$ in $y = 5e^{-2x}$ ein.'],
  },
  'ex-dgl-3-1-f': {
    id: 'ex-dgl-3-1-f', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse $y\' + y = e^x$. Die allgemeine Lösung lautet:',
    options: [
      '$y = Ce^{-x} + \\frac{1}{2}e^x$',
      '$y = Ce^x + e^x$',
      '$y = Ce^{-x} + e^{-x}$',
      '$y = Ce^x + \\frac{1}{2}e^{-x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^{-x}$. Partikulärer Ansatz: $y_p = Ae^x$. Einsetzen: $Ae^x + Ae^x = e^x \\Rightarrow 2A = 1 \\Rightarrow A = \\frac{1}{2}$. Allgemein: $y = Ce^{-x} + \\frac{1}{2}e^x$.',
    hints: ['Zerlege in $y = y_h + y_p$.', 'Für $q(x) = e^x$: Ansatz $y_p = Ae^x$, wenn $e^x$ keine Lösung der homogenen DGL ist.'],
  },
  'ex-dgl-3-1-g': {
    id: 'ex-dgl-3-1-g', lessonId: 'dgl-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Gleichung $M(x,y)\\,dx + N(x,y)\\,dy = 0$ ist exakt, wenn $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ gilt.',
    correct: true,
    explanation: 'Korrekt. Die Bedingung $M_y = N_x$ ist notwendig und hinreichend dafür, dass ein Potential $F(x,y)$ mit $F_x = M$ und $F_y = N$ existiert. Die Lösung ist dann $F(x,y) = C$.',
    hints: ['Exakt bedeutet: Die DGL ist das totale Differential von $F$.'],
  },
  'ex-dgl-3-1-h': {
    id: 'ex-dgl-3-1-h', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Prüfe $(2xy + y^2)\\,dx + (x^2 + 2xy)\\,dy = 0$ auf Exaktheit. Was gilt?',
    options: [
      'Exakt, da $M_y = N_x = 2x + 2y$',
      'Nicht exakt, da $M_y \\neq N_x$',
      'Exakt, da $M = N$',
      'Nicht exakt, da keine Lösung existiert',
    ],
    correctIndex: 0,
    explanation: '$M = 2xy + y^2 \\Rightarrow M_y = 2x + 2y$. $N = x^2 + 2xy \\Rightarrow N_x = 2x + 2y$. Da $M_y = N_x$ ist die DGL exakt. Potential: $F = x^2y + xy^2$, Lösung: $x^2y + xy^2 = C$.',
    hints: ['$M_y = \\frac{\\partial}{\\partial y}(2xy + y^2)$; $N_x = \\frac{\\partial}{\\partial x}(x^2 + 2xy)$'],
  },
  'ex-dgl-3-1-i': {
    id: 'ex-dgl-3-1-i', lessonId: 'dgl-3-1', type: 'matching',
    question: '[PRÜFUNG] Ordne jede DGL ihrer Lösungsmethode zu:',
    pairs: [
      { left: '$y\' = f(x) \\cdot g(y)$', right: 'Trennung der Variablen' },
      { left: '$y\' + p(x)y = q(x)$', right: 'Integrierender Faktor / Variation der Konstanten' },
      { left: '$M\\,dx + N\\,dy = 0$ mit $M_y = N_x$', right: 'Exakte DGL (Potentialfunktion)' },
      { left: '$y\' = f\\left(\\frac{y}{x}\\right)$', right: 'Substitution $v = y/x$' },
    ],
    explanation: 'Jede DGL-Klasse hat ihre bevorzugte Lösungsmethode: Trennbare DGL → Trennung; lineare DGL 1. Ordnung → Int. Faktor; exakte DGL → Potential; homogene DGL (im Sinne von $y/x$) → Substitution.',
    hints: ['Die Struktur der DGL verrät die Methode.'],
  },
  'ex-dgl-3-1-j': {
    id: 'ex-dgl-3-1-j', lessonId: 'dgl-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welchen Wert hat $C$ beim AWP $y\' = \\frac{x}{y}$, $y(0) = 3$? (Allg. Lösung: $y^2 = x^2 + C$)',
    options: ['$C = 3$', '$C = 6$', '$C = 9$', '$C = 0$'],
    correctIndex: 2,
    explanation: 'Allgemeine Lösung: $y^2 = x^2 + C$. Einsetzen von $y(0) = 3$: $9 = 0 + C \\Rightarrow C = 9$. Die partikuläre Lösung ist $y = \\sqrt{x^2 + 9}$.',
    hints: ['Setze $x = 0$ und $y = 3$ in die allgemeine Lösung ein.'],
  },
  'ex-dgl-3-1-mastery': {
    id: 'ex-dgl-3-1-mastery', lessonId: 'dgl-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse das AWP vollständig: $y\' + 2y = 4$, $y(0) = 1$.',
    options: [
      '$y = 2 - e^{-2x}$',
      '$y = 2 + e^{-2x}$',
      '$y = 2 - e^{2x}$',
      '$y = 1 + 2e^{-2x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^{-2x}$. Partikuläre Lösung (konstanter Ansatz $y_p = A$): $2A = 4 \\Rightarrow A = 2$. Allgemeine Lösung: $y = Ce^{-2x} + 2$. AWP $y(0) = 1$: $C + 2 = 1 \\Rightarrow C = -1$. Ergebnis: $y = 2 - e^{-2x}$.',
    hints: ['Homogene Lösung: $\\lambda + 2 = 0 \\Rightarrow \\lambda = -2$.', 'Partikulärer Ansatz: $y_p = \\text{const}$, da $q(x) = 4$ konstant ist.'],
  },

  // ── Lektion 3-2: Prüfung DGL 2. Ordnung & Anwendungen ────────────────────
  'ex-dgl-3-2-a': {
    id: 'ex-dgl-3-2-a', lessonId: 'dgl-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die charakteristische Gleichung von $y\'\' - 5y\' + 6y = 0$ hat die Wurzeln:',
    options: [
      '$\\lambda_{1,2} = 2,\\, 3$',
      '$\\lambda_{1,2} = -2,\\, -3$',
      '$\\lambda_{1,2} = 1,\\, 6$',
      '$\\lambda_{1,2} = \\pm\\sqrt{6}$',
    ],
    correctIndex: 0,
    explanation: 'Char. Gleichung: $\\lambda^2 - 5\\lambda + 6 = 0$. Faktorisieren: $(\\lambda - 2)(\\lambda - 3) = 0$. Wurzeln: $\\lambda_1 = 2$, $\\lambda_2 = 3$. Allgemeine Lösung: $y = C_1 e^{2x} + C_2 e^{3x}$.',
    hints: ['Setze $y = e^{\\lambda x}$ an und kürze $e^{\\lambda x}$.', 'Löse $\\lambda^2 - 5\\lambda + 6 = 0$ mit der Lösungsformel oder durch Faktorisieren.'],
  },
  'ex-dgl-3-2-b': {
    id: 'ex-dgl-3-2-b', lessonId: 'dgl-3-2', type: 'true-false',
    statement: '[PRÜFUNG] Wenn die char. Gleichung eine doppelte reelle Wurzel $\\lambda$ hat, lautet die allgemeine Lösung $y = (C_1 + C_2 x)e^{\\lambda x}$.',
    correct: true,
    explanation: 'Korrekt. Bei einer doppelten Wurzel $\\lambda$ ist $e^{\\lambda x}$ eine Lösung, aber wir brauchen zwei linear unabhängige. Die zweite ist $x e^{\\lambda x}$. Daher: $y = (C_1 + C_2 x)e^{\\lambda x}$.',
    hints: ['Zwei linear unabhängige Lösungen werden bei Doppelwurzel durch den Faktor $x$ gewonnen.'],
  },
  'ex-dgl-3-2-c': {
    id: 'ex-dgl-3-2-c', lessonId: 'dgl-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die char. Gleichung $\\lambda^2 + 4 = 0$ hat die Wurzeln:',
    options: [
      '$\\lambda_{1,2} = \\pm 2i$',
      '$\\lambda_{1,2} = \\pm 2$',
      '$\\lambda_{1,2} = \\pm 4i$',
      '$\\lambda_{1,2} = 2 \\pm i$',
    ],
    correctIndex: 0,
    explanation: '$\\lambda^2 = -4 \\Rightarrow \\lambda = \\pm 2i$ (rein imaginäre Wurzeln). Allgemeine Lösung: $y = C_1 \\cos(2x) + C_2 \\sin(2x)$ — eine ungedämpfte Schwingung.',
    hints: ['$\\lambda^2 = -4$; ziehe die Wurzel und denke an $\\sqrt{-1} = i$.'],
  },
  'ex-dgl-3-2-d': {
    id: 'ex-dgl-3-2-d', lessonId: 'dgl-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die DGL $y\'\' + 4y\' + 4y = 0$ hat den Ansatz $y_p = Ae^{ax}$ für eine partikuläre Lösung. Welches Phänomen tritt auf, wenn $a = -2$?',
    options: [
      'Resonanz — der Ansatz muss mit $x^2$ multipliziert werden',
      'Kein Problem — der Ansatz funktioniert normal',
      'Die DGL ist unlösbar',
      'Nur die homogene Lösung existiert',
    ],
    correctIndex: 0,
    explanation: 'Die char. Gleichung $\\lambda^2 + 4\\lambda + 4 = (\\lambda + 2)^2 = 0$ hat die doppelte Wurzel $\\lambda = -2$. Da $e^{-2x}$ bereits (doppelt) Lösung der homogenen DGL ist, tritt Resonanz auf: Man multipliziert mit $x^2$, also $y_p = Ax^2 e^{-2x}$.',
    hints: ['Wenn der Ansatz $e^{ax}$ bereits die homogene DGL löst, muss er mit $x$ (bzw. $x^2$ bei Doppelwurzel) multipliziert werden.'],
  },
  'ex-dgl-3-2-e': {
    id: 'ex-dgl-3-2-e', lessonId: 'dgl-3-2', type: 'number-input',
    question: '[PRÜFUNG] Ein Feder-Masse-System: $m = 1$ kg, $k = 9$ N/m, keine Dämpfung. Berechne die Eigenkreisfrequenz $\\omega_0$ in rad/s.',
    correctAnswer: 3,
    tolerance: 0.01,
    unit: 'rad/s',
    explanation: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{9/1} = \\sqrt{9} = 3$ rad/s. Die Schwingungsgleichung lautet $x\'\' + 9x = 0$ mit der Lösung $x(t) = C_1\\cos(3t) + C_2\\sin(3t)$.',
    hints: ['Formel: $\\omega_0 = \\sqrt{k/m}$.'],
  },
  'ex-dgl-3-2-f': {
    id: 'ex-dgl-3-2-f', lessonId: 'dgl-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Die allgemeine Lösung von $y\'\' + 2y\' + 5y = 0$ lautet:',
    options: [
      '$y = e^{-x}(C_1\\cos(2x) + C_2\\sin(2x))$',
      '$y = e^{x}(C_1\\cos(2x) + C_2\\sin(2x))$',
      '$y = C_1 e^{-x} + C_2 e^{-5x}$',
      '$y = e^{-2x}(C_1\\cos(x) + C_2\\sin(x))$',
    ],
    correctIndex: 0,
    explanation: 'Char. Gleichung: $\\lambda^2 + 2\\lambda + 5 = 0$. Diskriminante: $4 - 20 = -16 < 0$. $\\lambda = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$. Allg. Lösung: $y = e^{-x}(C_1\\cos(2x) + C_2\\sin(2x))$ — gedämpfte Schwingung.',
    hints: ['Char. Gleichung mit der Lösungsformel lösen.', 'Komplexe Wurzeln $\\alpha \\pm \\beta i$ liefern $e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x))$.'],
  },
  'ex-dgl-3-2-g': {
    id: 'ex-dgl-3-2-g', lessonId: 'dgl-3-2', type: 'matching',
    question: '[PRÜFUNG] Ordne die Wurzeltypen der char. Gleichung dem Schwingungsverhalten zu:',
    pairs: [
      { left: 'Zwei reelle Wurzeln ($\\lambda_1 \\neq \\lambda_2$, beide negativ)', right: 'Kriechfall — exponentielles Abklingen' },
      { left: 'Doppelte reelle Wurzel ($\\lambda < 0$)', right: 'Aperiodischer Grenzfall' },
      { left: 'Komplexe Wurzeln $\\alpha \\pm \\beta i$ mit $\\alpha < 0$', right: 'Schwingfall — gedämpfte Schwingung' },
      { left: 'Rein imaginäre Wurzeln $\\pm \\beta i$', right: 'Ungedämpfte Dauerschwingung' },
    ],
    explanation: 'Der Realteil der char. Wurzeln bestimmt das Klingverhalten, der Imaginärteil die Frequenz. Nur rein imaginäre Wurzeln liefern ungedämpfte Schwingungen.',
    hints: ['Realteil $< 0$: abklingend; Realteil $= 0$: konstante Amplitude; Imaginärteil $\\neq 0$: Schwingung.'],
  },
  'ex-dgl-3-2-h': {
    id: 'ex-dgl-3-2-h', lessonId: 'dgl-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Finde die partikuläre Lösung von $y\'\' + y = 3\\cos(x)$ (Resonanzfall). Der richtige Ansatz ist:',
    options: [
      '$y_p = x(A\\cos(x) + B\\sin(x))$',
      '$y_p = A\\cos(x) + B\\sin(x)$',
      '$y_p = Ax\\cos(x)$',
      '$y_p = A\\cos(x)$',
    ],
    correctIndex: 0,
    explanation: 'Die homogene Lösung enthält bereits $\\cos(x)$ und $\\sin(x)$ (Wurzeln $\\pm i$ der char. Gleichung). Daher tritt Resonanz auf: der Standard-Ansatz $A\\cos(x) + B\\sin(x)$ muss mit $x$ multipliziert werden. Einsetzen liefert $y_p = \\frac{3}{2}x\\sin(x)$.',
    hints: ['Prüfe, ob die Erregerfrequenz gleich der Eigenfrequenz ist.', 'Bei Resonanz: Ansatz × $x$ multiplizieren.'],
  },
  'ex-dgl-3-2-i': {
    id: 'ex-dgl-3-2-i', lessonId: 'dgl-3-2', type: 'true-false',
    statement: '[PRÜFUNG] Das Superpositionsprinzip gilt für lineare inhomogene DGL: Sind $y_1$ und $y_2$ zwei partikuläre Lösungen von $y\'\' + p y\' + qy = f$, so ist $y_1 - y_2$ eine Lösung der zugehörigen homogenen DGL.',
    correct: true,
    explanation: 'Korrekt. $L[y_1] = f$ und $L[y_2] = f$ (wobei $L$ der lineare Differentialoperator ist). Dann gilt $L[y_1 - y_2] = L[y_1] - L[y_2] = f - f = 0$. Die Differenz löst also die homogene DGL.',
    hints: ['Linearer Operator: $L[ay + bz] = aL[y] + bL[z]$.'],
  },
  'ex-dgl-3-2-j': {
    id: 'ex-dgl-3-2-j', lessonId: 'dgl-3-2', type: 'number-input',
    question: '[PRÜFUNG] AWP: $y\'\' - y\' - 6y = 0$, $y(0) = 1$, $y\'(0) = 0$. Berechne $C_1$ in der Lösung $y = C_1 e^{3x} + C_2 e^{-2x}$.',
    correctAnswer: 0.4,
    tolerance: 0.01,
    unit: '',
    explanation: 'Char. Gleichung: $\\lambda^2 - \\lambda - 6 = (\\lambda - 3)(\\lambda + 2) = 0$, Wurzeln $\\lambda_1 = 3$, $\\lambda_2 = -2$. Allg. Lösung: $y = C_1 e^{3x} + C_2 e^{-2x}$. AWP: $y(0) = C_1 + C_2 = 1$ und $y\'(0) = 3C_1 - 2C_2 = 0$. Aus dem System: $C_1 = \\frac{2}{5} = 0{,}4$, $C_2 = \\frac{3}{5}$.',
    hints: ['Leite $y$ ab: $y\' = 3C_1 e^{3x} - 2C_2 e^{-2x}$.', 'Löse das lineare Gleichungssystem für $C_1$ und $C_2$.'],
  },
  'ex-dgl-3-2-mastery': {
    id: 'ex-dgl-3-2-mastery', lessonId: 'dgl-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein gedämpftes Feder-Masse-System: $x\'\' + 4x\' + 3x = 0$, $x(0) = 2$, $x\'(0) = -2$. Welche Aussage zur allgemeinen Lösung ist korrekt?',
    options: [
      '$x(t) = e^{-t}(C_1 + C_2 t)$ — aperiodischer Grenzfall',
      '$x(t) = C_1 e^{-t} + C_2 e^{-3t}$ — Kriechfall, klingt monoton ab',
      '$x(t) = e^{-2t}(C_1\\cos t + C_2\\sin t)$ — Schwingfall',
      '$x(t) = C_1\\cos(t) + C_2\\sin(t)$ — ungedämpfte Schwingung',
    ],
    correctIndex: 1,
    explanation: 'Char. Gleichung: $\\lambda^2 + 4\\lambda + 3 = (\\lambda + 1)(\\lambda + 3) = 0$. Wurzeln: $\\lambda_1 = -1$, $\\lambda_2 = -3$ (beide reell, verschieden, negativ). Das ist der Kriechfall. Allg. Lösung: $x = C_1 e^{-t} + C_2 e^{-3t}$. AWP: $C_1 + C_2 = 2$, $-C_1 - 3C_2 = -2 \\Rightarrow C_1 = 2$, $C_2 = 0$. Lösung: $x = 2e^{-t}$.',
    hints: ['Berechne die Diskriminante: $b^2 - 4ac = 16 - 12 = 4 > 0$, also zwei reelle Wurzeln.', 'Beide Wurzeln negativ → Kriechfall (kein Überschwingen).'],
  },
}

const lessons_dgl_u3 = [
  {
    id: 'dgl-3-1', unitId: 'dgl-unit-3',
    title: 'Prüfung: DGL 1. Ordnung',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Trennbare DGL sicher lösen',
      'Lineare DGL 1. Ordnung mit integrierendem Faktor behandeln',
      'Anfangswertprobleme vollständig lösen',
      'Exakte DGL erkennen und die Potentialfunktion bestimmen',
    ],
    prerequisites: [],
    nextLessonId: 'dgl-3-2',
    steps: [
      {
        id: 'dgl-3-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie DGL 1. Ordnung',
        content: `**Prüfungsaufgaben DGL 1. Ordnung** — Erkenne den Typ, wähle die Methode:

**1. Trennbare DGL:** $y' = f(x) \\cdot g(y)$
$$\\frac{dy}{g(y)} = f(x)\\,dx \\quad \\Rightarrow \\quad \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx$$

**2. Lineare DGL 1. Ordnung:** $y' + p(x)y = q(x)$
- Integrierender Faktor: $\\mu(x) = e^{\\int p(x)\\,dx}$
- Lösung: $y = \\frac{1}{\\mu}\\left(\\int \\mu \\cdot q\\,dx + C\\right)$

**3. Exakte DGL:** $M\\,dx + N\\,dy = 0$ mit $M_y = N_x$
- Finde Potential $F$ mit $F_x = M$, $F_y = N$
- Lösung: $F(x,y) = C$

**4. Anfangswertproblem (AWP):** Bestimme $C$ aus $y(x_0) = y_0$

**Merksatz:** Erst den Typ der DGL bestimmen, dann die passende Methode anwenden!`,
      },
      { id: 'dgl-3-1-s2', type: 'exercise', title: 'Aufgabe 1 — Trennung der Variablen', exerciseRef: 'ex-dgl-3-1-a' },
      { id: 'dgl-3-1-s3', type: 'exercise', title: 'Aufgabe 2 — Homogene lineare DGL', exerciseRef: 'ex-dgl-3-1-b' },
      { id: 'dgl-3-1-s4', type: 'exercise', title: 'Aufgabe 3 — Linearität erkennen', exerciseRef: 'ex-dgl-3-1-c' },
      { id: 'dgl-3-1-s5', type: 'exercise', title: 'Aufgabe 4 — Integrierender Faktor', exerciseRef: 'ex-dgl-3-1-d' },
      { id: 'dgl-3-1-s6', type: 'exercise', title: 'Aufgabe 5 — AWP numerisch', exerciseRef: 'ex-dgl-3-1-e' },
      { id: 'dgl-3-1-s7', type: 'exercise', title: 'Aufgabe 6 — Inhomogene lineare DGL', exerciseRef: 'ex-dgl-3-1-f' },
      { id: 'dgl-3-1-s8', type: 'exercise', title: 'Aufgabe 7 — Exakte DGL (Begriff)', exerciseRef: 'ex-dgl-3-1-g' },
      { id: 'dgl-3-1-s9', type: 'exercise', title: 'Aufgabe 8 — Exaktheit prüfen', exerciseRef: 'ex-dgl-3-1-h' },
      { id: 'dgl-3-1-s10', type: 'exercise', title: 'Aufgabe 9 — Methoden zuordnen', exerciseRef: 'ex-dgl-3-1-i' },
      { id: 'dgl-3-1-s11', type: 'exercise', title: 'Aufgabe 10 — AWP Konstante bestimmen', exerciseRef: 'ex-dgl-3-1-j' },
      { id: 'dgl-3-1-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-dgl-3-1-mastery' },
    ],
  },
  {
    id: 'dgl-3-2', unitId: 'dgl-unit-3',
    title: 'Prüfung: DGL 2. Ordnung & Anwendungen',
    order: 2, estimatedMinutes: 25,
    learningGoals: [
      'Charakteristische Gleichung aufstellen und lösen',
      'Allgemeine Lösung für alle Wurzeltypen angeben',
      'Partikuläre Lösung durch Ansatz vom Typ der rechten Seite bestimmen',
      'Schwingungsverhalten eines Feder-Masse-Systems analysieren',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-3-2-s1', type: 'explanation-formal', title: 'Prüfungsstrategie DGL 2. Ordnung',
        content: `**Lineare DGL 2. Ordnung mit konstanten Koeffizienten:**
$$y'' + ay' + by = q(x)$$

**Schritt 1 — Homogene Lösung:** Char. Gleichung $\\lambda^2 + a\\lambda + b = 0$

| Diskriminante $D = a^2 - 4b$ | Wurzeln | Allg. Lösung $y_h$ |
|---|---|---|
| $D > 0$ | $\\lambda_1 \\neq \\lambda_2$ (reell) | $C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$ |
| $D = 0$ | Doppelwurzel $\\lambda$ | $(C_1 + C_2 x)e^{\\lambda x}$ |
| $D < 0$ | $\\alpha \\pm \\beta i$ | $e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$ |

**Schritt 2 — Partikuläre Lösung** (Ansatz vom Typ der Störfunktion):
- $q = P_n(x)$: Ansatz $y_p = Q_n(x)$ (Polynom gleichen Grades)
- $q = e^{cx}$: Ansatz $y_p = Ae^{cx}$ (falls kein Resonanzfall)
- $q = \\cos(\\omega x)$ oder $\\sin(\\omega x)$: Ansatz $y_p = A\\cos(\\omega x) + B\\sin(\\omega x)$
- **Resonanz:** Ansatz mit $x$ multiplizieren!

**Schritt 3 — Allgemeine Lösung:** $y = y_h + y_p$

**Schritt 4 — AWP:** Konstanten $C_1, C_2$ aus $y(x_0)$ und $y'(x_0)$ bestimmen.`,
      },
      { id: 'dgl-3-2-s2', type: 'exercise', title: 'Aufgabe 1 — Char. Gleichung', exerciseRef: 'ex-dgl-3-2-a' },
      { id: 'dgl-3-2-s3', type: 'exercise', title: 'Aufgabe 2 — Doppelwurzel', exerciseRef: 'ex-dgl-3-2-b' },
      { id: 'dgl-3-2-s4', type: 'exercise', title: 'Aufgabe 3 — Komplexe Wurzeln', exerciseRef: 'ex-dgl-3-2-c' },
      { id: 'dgl-3-2-s5', type: 'exercise', title: 'Aufgabe 4 — Resonanz', exerciseRef: 'ex-dgl-3-2-d' },
      { id: 'dgl-3-2-s6', type: 'exercise', title: 'Aufgabe 5 — Eigenfrequenz', exerciseRef: 'ex-dgl-3-2-e' },
      { id: 'dgl-3-2-s7', type: 'exercise', title: 'Aufgabe 6 — Gedämpfte Schwingung', exerciseRef: 'ex-dgl-3-2-f' },
      { id: 'dgl-3-2-s8', type: 'exercise', title: 'Aufgabe 7 — Schwingungstypen zuordnen', exerciseRef: 'ex-dgl-3-2-g' },
      { id: 'dgl-3-2-s9', type: 'exercise', title: 'Aufgabe 8 — Resonanzansatz', exerciseRef: 'ex-dgl-3-2-h' },
      { id: 'dgl-3-2-s10', type: 'exercise', title: 'Aufgabe 9 — Superposition', exerciseRef: 'ex-dgl-3-2-i' },
      { id: 'dgl-3-2-s11', type: 'exercise', title: 'Aufgabe 10 — AWP Konstante', exerciseRef: 'ex-dgl-3-2-j' },
      { id: 'dgl-3-2-s12', type: 'mastery-check', title: 'Prüfungsfrage', exerciseRef: 'ex-dgl-3-2-mastery' },
    ],
  },
]

export const dgl_unit3 = {
  id: 'dgl-unit-3',
  title: 'Prüfungsaufgaben',
  order: 3,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — DGL 1. Ordnung, DGL 2. Ordnung, Schwingungen',
  lessons: lessons_dgl_u3,
  exercises: exercises_dgl_u3,
}
