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
    wrongAnswerExplanations: {
      1: 'Der Faktor $1/2$ im Exponenten fehlt. $\\int x\\,dx = \\frac{x^2}{2}$, nicht $x^2$. Wer $x^2$ schreibt, behandelt $x$ wie $2x$ beim Integrieren. Richtig: $\\ln|y| = \\frac{x^2}{2}+C \\Rightarrow y=Ae^{x^2/2}$.',
      2: 'Hier wurde die Anfangsbedingung additiv eingebaut ($+1$), aber bei multiplikativer Lösung $y=Ae^{x^2/2}$ gehört der Wert als *Vorfaktor*, nicht als Summand. Außerdem gibt $e^0+1=2$ zwar $y(0)=2$, aber die DGL $y\'=xy$ ist nicht erfüllt: $y\'=xe^{x^2/2}$ und $xy = xe^{x^2/2}+x \\neq y\'$.',
      3: 'Das ist die Lösung von $y\'=y$, nicht von $y\'=xy$. Der Faktor $x$ auf der rechten Seite wurde ignoriert; beim Integrieren muss $\\int x\\,dx=\\frac{x^2}{2}$ stehen, nicht $\\int 1\\,dx=x$. Deshalb hat der Exponent $x^2/2$, nicht nur $x$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler im Exponenten. Aus $y\'-3y=0$ folgt $y\'=+3y$, also $\\lambda=+3$. Test: $y=Ce^{-3x} \\Rightarrow y\'=-3Ce^{-3x}=-3y$, aber die DGL verlangt $y\'=+3y$.',
      2: 'Das ist eine lineare Funktion, keine Exponentialfunktion. Die DGL $y\'=3y$ erfordert $y\'$ proportional zu $y$; bei $y=3Cx$ ist $y\'=3C$ konstant, also nicht proportional zu $y$.',
      3: 'Kosinus taucht bei *komplexen* Wurzeln der charakteristischen Gleichung auf (DGL 2. Ordnung mit negativer Diskriminante). Hier ist die DGL aber erster Ordnung und die charakteristische Gleichung $\\lambda-3=0$ hat eine *reelle* Wurzel.',
    },
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
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler im Exponenten. Aus der Forderung $\\mu\' = \\mu \\cdot p$ folgt $\\mu = e^{+\\int p\\,dx}$ (positives Vorzeichen). Mit $e^{-\\int p\\,dx}$ wäre $\\mu\' = -p\\mu$, und die linke Seite der DGL wird nicht zur Produktableitung.',
      2: 'Ohne Exponentialfunktion erfüllt $\\mu$ nicht die Differentialgleichung $\\mu\'=p\\mu$. Beispiel $p=1$: $\\mu=\\int 1\\,dx=x$ gibt $\\mu\'=1$, aber $p\\mu=x \\neq 1$. Der Exponent muss die Stammfunktion sein *und* in der e-Funktion stehen.',
      3: '$\\mu=p(x)$ erfüllt $\\mu\'=p\'$, aber gefordert ist $\\mu\'=p \\cdot \\mu$ — das stimmt im Allgemeinen nicht. Z.B. bei $p(x)=x$: $\\mu=x \\Rightarrow \\mu\'=1 \\neq x \\cdot x = x^2$. Korrekt: $\\mu = e^{\\int p\\,dx}$.',
    },
  },
  'ex-dgl-3-1-e': {
    id: 'ex-dgl-3-1-e', lessonId: 'dgl-3-1', type: 'number-input',
    question: '[PRÜFUNG] Anfangswertproblem: $y\' = -2y$, $y(0) = 5$. Welchen Wert hat $y(1)$ (auf 4 Dezimalstellen: $e^{-2} \\approx 0{,}1353$)?',
    correctValue: 0.6767,
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
    wrongAnswerExplanations: {
      1: 'Zwei Fehler: Homogene Lösung ist $Ce^{-x}$ (nicht $Ce^x$, denn $y\'+y=0 \\Rightarrow \\lambda=-1$). Außerdem fehlt der Faktor $1/2$ bei der Partikulärlösung: Einsetzen $y_p=e^x$ gibt $e^x+e^x=2e^x \\neq e^x$.',
      2: 'Die Partikulärlösung ist falsch. $y_p=e^{-x}$ *ist* die homogene Lösung (Resonanzfall), also wäre $y_p\'+y_p=0$, nicht $e^x$. Außerdem passt der Ansatztyp nicht: für $q=e^x$ muss $y_p \\propto e^x$ gewählt werden, nicht $e^{-x}$.',
      3: 'Hier wurden die Exponenten $+x$ und $-x$ zwischen homogener und partikulärer Lösung vertauscht. Die charakteristische Gleichung $\\lambda+1=0$ liefert $\\lambda=-1$, also $y_h=Ce^{-x}$. Die Partikulärlösung hat denselben Exponenten wie die Störfunktion: $y_p=\\tfrac{1}{2}e^{+x}$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Die partiellen Ableitungen wurden falsch berechnet. Korrekt: $\\partial_y(2xy+y^2)=2x+2y$ und $\\partial_x(x^2+2xy)=2x+2y$. Beide sind gleich, also ist die DGL exakt.',
      2: '$M=N$ ist *nicht* das Kriterium für Exaktheit. Exaktheit verlangt $M_y = N_x$ (Gleichheit der gemischten partiellen Ableitungen, Satz von Schwarz). Hier ist tatsächlich $M = 2xy+y^2 \\neq x^2+2xy = N$, aber die DGL ist trotzdem exakt.',
      3: 'Auch nichtexakte DGL können Lösungen haben (z.B. durch integrierenden Faktor). Das Kriterium für Exaktheit bezieht sich auf die partiellen Ableitungen $M_y$ und $N_x$, nicht auf die Existenz einer Lösung. Hier gilt $M_y=N_x=2x+2y$, also ist die DGL exakt.',
    },
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
    wrongAnswerExplanations: {
      0: 'Hier wurde $y=3$ linear eingesetzt statt $y^2$. Die allgemeine Lösung enthält $y^2$, nicht $y$. Aus $y(0)=3$ folgt $y^2 = 9$, nicht $3$. Also $C=9$.',
      1: '$2y$ statt $y^2$ eingesetzt — Quadrat mit Verdopplung verwechselt. $y^2 = 3^2 = 9$, nicht $2 \\cdot 3 = 6$. Daraus $C=9$.',
      3: 'Hier wurde vergessen, dass $y(0)=3 \\neq 0$ einen nichttrivialen Beitrag liefert. Bei $C=0$ wäre $y^2=x^2$, also $y=\\pm x$ und damit $y(0)=0 \\neq 3$. Richtig: $C=9$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler bei $C$. Aus $y(0)=1$ und $y_p=2$ folgt $C=1-2=-1$, nicht $+1$. Test: $y(0)=1 \\cdot 1 + 2 = 3 \\neq 1$ — erfüllt die Anfangsbedingung nicht.',
      2: 'Im Exponenten falsches Vorzeichen. Aus $y\'+2y=0$ folgt $\\lambda=-2$, also $y_h=Ce^{-2x}$ (e-Funktion klingt ab, weil $+2y$ zurückzieht). $+2x$ im Exponenten gäbe $y\'-2y=0$.',
      3: 'Die Partikulärlösung ist falsch: bei konstanter Störfunktion $q=4$ macht man den Ansatz $y_p=A$ (Konstante), nicht $y_p=2e^{-2x}$ (das wäre Teil der homogenen Lösung). Außerdem erfüllt $1+2e^{-2x}$ die DGL nicht: $y\'+2y = -4e^{-2x}+2(1+2e^{-2x})=2 \\neq 4$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Vorzeichen der Wurzeln falsch. Nach Vieta: Produkt der Wurzeln $= +6$ (stimmt bei $-2 \\cdot -3$), aber Summe $= +5$ (da $-(-5)=+5$), und $(-2)+(-3)=-5 \\neq +5$. Also müssen beide Wurzeln positiv sein: $\\lambda_{1,2}=2,3$.',
      2: 'Das Produkt stimmt ($1 \\cdot 6 = 6$ ✓), aber die Summe ist $1+6=7 \\neq 5$. Korrekte Zerlegung: $(\\lambda-2)(\\lambda-3)$ mit Summe $2+3=5$.',
      3: 'Diese Form $\\pm\\sqrt{6}$ gäbe die Lösung von $\\lambda^2 - 6 = 0$ (ohne den linearen Term). Der $-5\\lambda$-Term ist hier entscheidend und verhindert diese symmetrische Form.',
    },
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
    wrongAnswerExplanations: {
      1: 'Das Minuszeichen unter der Wurzel wurde ignoriert. Aus $\\lambda^2+4=0$ folgt $\\lambda^2=-4$, und die Wurzel ist *imaginär* ($\\pm 2i$), nicht reell ($\\pm 2$). Test: $\\lambda=2 \\Rightarrow \\lambda^2+4=8 \\neq 0$.',
      2: 'Hier wurde keine Wurzel gezogen. Aus $\\lambda^2=-4$ folgt $\\lambda=\\pm\\sqrt{-4}=\\pm 2i$, nicht $\\pm 4i$. Test: $\\lambda=4i \\Rightarrow \\lambda^2=-16 \\neq -4$.',
      3: 'Das wäre die Form komplexer Wurzeln mit nichtverschwindendem Realteil ($\\alpha=2, \\beta=1$). Die char. Gleichung $\\lambda^2+4=0$ hat aber *rein imaginäre* Wurzeln (Realteil $\\alpha=0$): $\\lambda=\\pm 2i$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Das übersieht die Resonanz: $a=-2$ ist genau die (doppelte) Nullstelle des char. Polynoms. Der Standard-Ansatz $Ae^{-2x}$ ist bereits homogene Lösung, daher $y_p\'\'+4y_p\'+4y_p=0 \\neq e^{-2x}$ — der Ansatz liefert keine Partikulärlösung.',
      2: 'DGL mit konstanten Koeffizienten sind immer lösbar. Das „Problem" hier ist nur, dass der Standard-Ansatz nicht funktioniert — aber mit Resonanzansatz ($\\cdot x^2$) erhält man eine Lösung. „Unlösbar" ist falsch.',
      3: 'Falsche Schlussfolgerung. Partikuläre Lösungen existieren immer (ggf. mit Resonanzansatz). Die homogene Lösung ist *Teil* der allgemeinen Lösung, aber nicht die einzige: $y=y_h+y_p$ — bei Störterm $e^{-2x}$ trotz Resonanz gibt es $y_p=Ax^2e^{-2x}$.',
    },
  },
  'ex-dgl-3-2-e': {
    id: 'ex-dgl-3-2-e', lessonId: 'dgl-3-2', type: 'number-input',
    question: '[PRÜFUNG] Ein Feder-Masse-System: $m = 1$ kg, $k = 9$ N/m, keine Dämpfung. Berechne die Eigenkreisfrequenz $\\omega_0$ in rad/s.',
    correctValue: 3,
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
    wrongAnswerExplanations: {
      1: 'Vorzeichen im Realteil der Wurzeln falsch. Aus $\\lambda=\\frac{-2\\pm\\sqrt{-16}}{2}=\\frac{-2\\pm 4i}{2}=-1\\pm 2i$ folgt $\\alpha=-1$, also Vorfaktor $e^{-x}$ (Dämpfung). $e^{+x}$ wäre aufklingende Schwingung und entspräche $\\alpha=+1$.',
      2: 'Das wäre die Form für zwei *reelle* Wurzeln. Diskriminante $D = 4-20=-16<0$ ist aber negativ, also komplexe Wurzeln. Außerdem: $\\lambda=-5$ macht nur die Zerlegung $(\\lambda+1)(\\lambda+5)=\\lambda^2+6\\lambda+5 \\neq \\lambda^2+2\\lambda+5$.',
      3: 'Real- und Imaginärteil vertauscht. Aus $\\lambda=\\frac{-2\\pm 4i}{2}$ folgt $\\alpha=-1$ (nicht $-2$), $\\beta=2$ (nicht $1$). Man muss *durch 2* teilen, weil die Lösungsformel den Nenner $2a=2$ hat.',
    },
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
    wrongAnswerExplanations: {
      1: 'Das ist der *Standard-Ansatz ohne Resonanzbehandlung*. Aber $A\\cos x + B\\sin x$ ist bereits die homogene Lösung, daher gibt $y_p\'\' + y_p = 0 \\neq 3\\cos x$. Bei Resonanz muss der Ansatz mit $x$ multipliziert werden.',
      2: 'Der Ansatz enthält nur $\\cos$, nicht $\\sin$. Beim zweiten Ableiten von $Ax\\cos x$ entsteht sowohl ein $\\cos$- als auch ein $\\sin$-Anteil. Der Ansatz muss beide trigonometrischen Funktionen mit $x$ enthalten: $y_p=x(A\\cos x + B\\sin x)$.',
      3: 'Doppelt falsch: weder Resonanzbehandlung ($\\cdot x$) noch beide trigonometrischen Funktionen. $A\\cos x$ ist Teil der homogenen Lösung und kann als Partikulärlösung nichts erzeugen.',
    },
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
    correctValue: 0.4,
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
    wrongAnswerExplanations: {
      0: 'Das wäre eine *doppelte* Wurzel. Prüfe die Diskriminante: $D = 16-12 = 4 > 0$, also *zwei verschiedene* reelle Wurzeln. Bei Doppelwurzel ($D=0$) wäre $b^2 = 4ac$; hier ist $16 \\neq 12$.',
      2: 'Das wäre der Schwingfall (komplexe Wurzeln, $D<0$). Hier ist $D = 16-12 = 4 > 0$, also reelle Wurzeln und *kein* Schwingen. Außerdem stimmt die Form nicht: $\\lambda_{1,2}=-1,-3$, was $y=C_1e^{-t}+C_2e^{-3t}$ ergibt, keine trigonometrischen Funktionen.',
      3: 'Das wäre der ungedämpfte Fall ($c=0$, $D<0$). Hier ist $c=4>0$ (Dämpfung vorhanden), die Lösung muss also exponentiell abklingen. Außerdem ist $D=16-12>0$: keine komplexen Wurzeln.',
    },
  },

  // ── Lektion 3-3: Systeme von DGL & technische Modellbildung ───────────────
  'ex-dgl-3-3-a': {
    id: 'ex-dgl-3-3-a', lessonId: 'dgl-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein RLC-Stromkreis (Spannung $u$): $L \\ddot q + R \\dot q + \\frac{1}{C} q = u(t)$. Welcher Parameter wirkt wie eine "Federkonstante"?',
    options: [
      '$L$ (Induktivität, wirkt wie Masse)',
      '$1/C$ (Reziproke Kapazität, wirkt wie Federkonstante $k$)',
      '$R$ (Widerstand, wirkt wie Federkonstante)',
      '$u(t)$ (Spannung, wirkt wie Federkonstante)',
    ],
    correctIndex: 1,
    explanation: 'Vergleich Mechanik ($m\\ddot x + d\\dot x + kx = F$) ↔ Elektrotechnik ($L\\ddot q + R\\dot q + q/C = u$): $m \\leftrightarrow L$, $d \\leftrightarrow R$ (Dämpfung/Widerstand), $k \\leftrightarrow 1/C$ (Steifigkeit/inverse Kapazität), $F \\leftrightarrow u$ (Antrieb). Diese Analogie erlaubt, dieselbe DGL-Mathematik in beiden Domänen zu nutzen.',
    hints: ['Schau auf den Term, der die Auslenkung selbst ($q$ oder $x$) ohne Ableitung enthält.', 'Im mechanischen System steht dort $k \\cdot x$.'],
    wrongAnswerExplanations: {
      0: '$L$ ist tatsächlich das Analogon zur Masse (nicht zur Federkonstante). Die Masse steht vor $\\ddot x$ (zweite Ableitung), genauso wie $L$ vor $\\ddot q$ steht. Federkonstante entspricht dem Term *ohne* Ableitung, also $1/C$.',
      2: '$R$ steht vor $\\dot q$ (erste Ableitung) — das ist das Analogon zur *Dämpfung* $d$ bei $\\dot x$, nicht zur Federkonstante. Die Federkraft ist proportional zur Auslenkung (keine Ableitung), und das leistet im RLC $1/C \\cdot q$.',
      3: '$u(t)$ ist das Analogon zur äußeren Kraft $F(t)$ — es steht auf der *rechten Seite* der DGL (Antrieb). Die Federkonstante hingegen ist ein *Systemparameter* auf der linken Seite, der die Rückstellkraft beschreibt.',
    },
  },
  'ex-dgl-3-3-b': {
    id: 'ex-dgl-3-3-b', lessonId: 'dgl-3-3', type: 'number-input',
    question: '[PRÜFUNG] System: $\\dot x_1 = 2x_1 + x_2$, $\\dot x_2 = x_1 + 2x_2$. Wie groß ist der größere Eigenwert der Systemmatrix (entscheidend für die Stabilität)?',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: 'Systemmatrix $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Char. Polynom: $(2-\\lambda)^2 - 1 = 0 \\Rightarrow 2-\\lambda = \\pm 1 \\Rightarrow \\lambda = 1$ oder $3$. Größter Eigenwert: $\\lambda_{\\max} = 3 > 0$ → System ist instabil (wächst exponentiell).',
    hints: ['DGL-System linear: $\\dot{\\vec x} = A\\vec x$. Systemmatrix aus den Koeffizienten ablesen.', 'Eigenwerte aus $\\det(A - \\lambda I) = 0$.', 'Stabilität: alle $\\text{Re}(\\lambda) < 0$.'],
  },
  'ex-dgl-3-3-c': {
    id: 'ex-dgl-3-3-c', lessonId: 'dgl-3-3', type: 'true-false',
    statement: '[PRÜFUNG] Ein lineares DGL-System $\\dot{\\vec x} = A\\vec x$ ist asymptotisch stabil genau dann, wenn alle Eigenwerte von $A$ negativen Realteil haben.',
    correct: true,
    explanation: 'Asymptotische Stabilität: Lösungen klingen für $t \\to \\infty$ ab. Allgemeine Lösung enthält Terme $e^{\\lambda_i t}$ — diese gehen gegen 0 genau dann, wenn alle $\\text{Re}(\\lambda_i) < 0$. Bei $\\text{Re}(\\lambda) = 0$ entstehen ungedämpfte Schwingungen (Grenzstabilität); $\\text{Re}(\\lambda) > 0$ bedeutet instabil.',
    hints: ['Lösungen sind Linearkombinationen von $e^{\\lambda_i t} \\vec v_i$.', '$e^{\\lambda t} \\to 0$ genau bei $\\text{Re}(\\lambda) < 0$.'],
  },
  'ex-dgl-3-3-d': {
    id: 'ex-dgl-3-3-d', lessonId: 'dgl-3-3', type: 'matching',
    question: '[PRÜFUNG] Ordne die technischen Modelle ihren DGL-Typen zu.',
    pairs: [
      { left: 'Newton-Abkühlung $\\dot T = -k(T - T_U)$', right: 'Lineare DGL 1. Ordnung' },
      { left: 'Feder-Masse-Schwinger $m\\ddot x + kx = 0$', right: 'Homogene lineare DGL 2. Ordnung' },
      { left: 'RLC-Kreis mit Spannung $u(t)$', right: 'Inhomogene lineare DGL 2. Ordnung' },
      { left: 'Zwei gekoppelte Pendel', right: 'System linearer DGL 2. Ordnung' },
    ],
    explanation: 'Diese vier Modelle decken den Großteil aller technischen Anwendungen ab. Erkenne: Wie viele Variablen? Wie hoch die Ableitungs-Ordnung? Mit oder ohne Antrieb? Daraus folgt der Lösungsweg.',
    hints: ['Wie viele Bewegungsvariablen — eine oder mehrere?', 'Höchste Ableitung bestimmt die Ordnung.'],
  },
  'ex-dgl-3-3-e': {
    id: 'ex-dgl-3-3-e', lessonId: 'dgl-3-3', type: 'number-input',
    question: '[PRÜFUNG] Newton-Abkühlung: Ein Werkstück hat $T(0) = 200$ °C in einer Umgebung mit $T_U = 20$ °C. Nach $t = 10$ min ist $T = 110$ °C. Wie groß ist $k$ in 1/min?',
    correctValue: 0.0693,
    tolerance: 0.001,
    unit: '1/min',
    explanation: 'Lösung: $T(t) = T_U + (T_0 - T_U) e^{-kt} = 20 + 180 e^{-kt}$. Bei $t = 10$: $110 = 20 + 180 e^{-10k} \\Rightarrow e^{-10k} = 90/180 = 0{,}5 \\Rightarrow -10k = \\ln(0{,}5) \\Rightarrow k = \\ln(2)/10 \\approx 0{,}0693$ 1/min.',
    hints: ['Newton-Abkühlung hat Lösung der Form $T = T_U + (T_0 - T_U) e^{-kt}$.', 'Setze $T(10)$ ein und löse nach $k$ auf.', '$\\ln(2) \\approx 0{,}693$.'],
  },
  'ex-dgl-3-3-f': {
    id: 'ex-dgl-3-3-f', lessonId: 'dgl-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Tank hat Zufluss $q_{ein} = 5$ L/min, Abfluss proportional zum Inhalt: $q_{aus} = 0{,}1 \\cdot V$. Was ist die DGL für $V(t)$?',
    options: [
      '$\\dot V = 5 - 0{,}1 V$',
      '$\\dot V = 5 \\cdot 0{,}1 V$',
      '$\\dot V = 5 + V$',
      '$\\dot V = -5 + 0{,}1 V$',
    ],
    correctIndex: 0,
    explanation: 'Massenbilanz: Änderungsrate = Zufluss − Abfluss. $\\dot V = q_{ein} - q_{aus} = 5 - 0{,}1 V$. Stationärer Zustand $\\dot V = 0$ liefert $V_\\infty = 50$ L. Lineare DGL 1. Ordnung — analytisch lösbar.',
    hints: ['Bilanz: Was kommt rein minus was geht raus.', 'Abfluss ist proportional zum Inhalt: $q_{aus} = k V$.'],
    wrongAnswerExplanations: {
      1: 'Zufluss und Abfluss sind verrechnet. Die Bilanz ist eine *Differenz*: $\\dot V = q_{ein} - q_{aus}$, nicht ein Produkt. Wenn du $5 \\cdot 0{,}1 V = 0{,}5 V$ schreibst, wird Zufluss an Volumen gekoppelt — Zufluss ist aber konstant 5 L/min.',
      2: 'Hier wurde die Proportionalität des Abflusses vergessen. Aus „$q_{aus} = 0{,}1 \\cdot V$" folgt $\\dot V = 5 - 0{,}1 V$, nicht $5 + V$. Der Abfluss reduziert das Volumen (Minuszeichen), und der Koeffizient ist $0{,}1$, nicht $1$.',
      3: 'Beide Vorzeichen sind falsch. Zufluss vergrößert das Volumen (Pluszeichen), Abfluss verkleinert es (Minuszeichen). Korrekt: $\\dot V = +5 - 0{,}1 V$. Mit dem angegebenen Vorzeichen würde das System für $V_0 > 0$ unbeschränkt wachsen.',
    },
  },
  'ex-dgl-3-3-g': {
    id: 'ex-dgl-3-3-g', lessonId: 'dgl-3-3', type: 'sorting',
    question: '[PRÜFUNG] Ordne die Schritte der technischen Modellbildung mit DGL.',
    items: [
      'System abgrenzen: Was ist im System, was ist Umgebung?',
      'Variablen identifizieren: Was ändert sich? Was sind die Treibkräfte?',
      'Bilanzgleichung aufstellen (Masse, Energie, Kraft, Impuls)',
      'Aus der Bilanz die DGL formulieren',
      'Anfangsbedingungen festlegen',
      'DGL lösen (analytisch oder numerisch)',
      'Lösung interpretieren und mit Realität vergleichen',
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
    explanation: 'Modellbildung folgt einer klaren Hierarchie: erst System, dann Variablen, dann Bilanzen, dann DGL, dann Lösung, dann Validierung. Der letzte Schritt ist oft der wichtigste — er prüft, ob das Modell zur Realität passt.',
    hints: ['Erst System verstehen, dann modellieren.', 'Bilanzgleichungen sind das physikalische Fundament.'],
  },
  'ex-dgl-3-3-h': {
    id: 'ex-dgl-3-3-h', lessonId: 'dgl-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Aussage zum Euler-Verfahren $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$ ist FALSCH?',
    options: [
      'Es ist ein expliziter Einschrittverfahren erster Ordnung',
      'Der Fehler pro Schritt ist $O(h^2)$, der globale Fehler $O(h)$',
      'Es ist immer stabil, unabhängig von $h$',
      'Es eignet sich für DGL der Form $\\dot y = f(t, y)$',
    ],
    correctIndex: 2,
    explanation: 'Euler ist NICHT immer stabil — bei zu großem $h$ entstehen numerische Instabilitäten, besonders bei "steifen" DGL. Stabilitätsbedingung etwa $|1 + h\\lambda| \\leq 1$ für lineare Systeme. Die anderen Aussagen stimmen: explizit, Ordnung 1, lokal $O(h^2)$, global $O(h)$.',
    hints: ['Numerische Stabilität hängt von Schrittweite und DGL-Eigenschaften ab.', 'Steife Systeme erfordern implizite Verfahren oder kleines $h$.'],
    wrongAnswerExplanations: {
      0: 'Diese Aussage ist *richtig* und damit keine falsche Antwort. Euler ist tatsächlich explizit (neuer Wert direkt berechenbar), Einschrittverfahren (nur $y_n$ nötig) und Ordnung 1 (globaler Fehler $O(h)$). Die Frage sucht die *falsche* Aussage.',
      1: 'Diese Aussage ist *richtig* — Standardresultat für das Euler-Verfahren: lokaler Fehler $O(h^2)$, globaler Fehler $O(h)$ (eine Größenordnung weniger wegen $N=T/h$ Schritten). Die Frage sucht die *falsche* Aussage.',
      3: 'Diese Aussage ist *richtig* — Euler ist universell auf DGL erster Ordnung $\\dot y=f(t,y)$ anwendbar (auch auf Systeme durch komponentenweise Anwendung). Die Frage sucht die *falsche* Aussage.',
    },
  },
  'ex-dgl-3-3-i': {
    id: 'ex-dgl-3-3-i', lessonId: 'dgl-3-3', type: 'true-false',
    statement: '[PRÜFUNG] Ein homogenes DGL-System $\\dot{\\vec x} = A\\vec x$ wird durch Diagonalisierung von $A$ in entkoppelte skalare DGL $\\dot u_i = \\lambda_i u_i$ überführt.',
    correct: true,
    explanation: 'Mit der Substitution $\\vec x = P \\vec u$ (Spalten von $P$ = Eigenvektoren) wird $\\dot{\\vec u} = P^{-1} A P \\vec u = D \\vec u$. Da $D$ diagonal, zerfällt das System in unabhängige skalare DGL $\\dot u_i = \\lambda_i u_i$, jede mit Lösung $u_i(t) = u_i(0) e^{\\lambda_i t}$. Rücktransformation: $\\vec x(t) = P \\vec u(t)$.',
    hints: ['Diagonalisierung entkoppelt den Zustand in Eigenrichtungen.', 'In jeder Eigenrichtung ist die DGL skalar und trivial lösbar.'],
  },
  'ex-dgl-3-3-j': {
    id: 'ex-dgl-3-3-j', lessonId: 'dgl-3-3', type: 'number-input',
    question: '[PRÜFUNG] Euler-Verfahren für $\\dot y = -2y$, $y(0) = 1$, Schrittweite $h = 0{,}1$. Berechne $y_2$ (Wert nach zwei Schritten).',
    correctValue: 0.64,
    tolerance: 0.005,
    unit: '',
    explanation: 'Schritt 1: $y_1 = y_0 + h \\cdot f(x_0, y_0) = 1 + 0{,}1 \\cdot (-2 \\cdot 1) = 1 - 0{,}2 = 0{,}8$. Schritt 2: $y_2 = y_1 + h \\cdot f(x_1, y_1) = 0{,}8 + 0{,}1 \\cdot (-2 \\cdot 0{,}8) = 0{,}8 - 0{,}16 = 0{,}64$. Exakte Lösung: $y(0{,}2) = e^{-0{,}4} \\approx 0{,}670$ — Euler unterschätzt etwas.',
    hints: ['Iteration: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$.', 'Hier $f(x, y) = -2y$.', 'Nach 2 Schritten: $y_2 = y_0 \\cdot (1 - 2h)^2$ direkt.'],
  },
  'ex-dgl-3-3-mastery': {
    id: 'ex-dgl-3-3-mastery', lessonId: 'dgl-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Eine Heizung füllt einen Raum mit Wärmeleistung $\\dot Q_{ein} = 2$ kW, Wärmeverlust nach außen ist proportional zur Temperaturdifferenz: $\\dot Q_{aus} = \\alpha (T - T_U)$ mit $\\alpha = 100$ W/K, $T_U = 0$ °C. Wärmekapazität $C_W = 1$ kJ/K. Welche stationäre Raumtemperatur stellt sich ein?',
    options: [
      '$T_\\infty = 20$ °C',
      '$T_\\infty = 200$ °C',
      '$T_\\infty = 2$ °C',
      '$T_\\infty = 0$ °C',
    ],
    correctIndex: 0,
    explanation: 'DGL: $C_W \\dot T = \\dot Q_{ein} - \\alpha(T - T_U) = 2000 - 100 T$ (in W mit $T_U = 0$). Stationär: $\\dot T = 0 \\Rightarrow 2000 = 100 \\cdot T_\\infty \\Rightarrow T_\\infty = 20$ K = 20 °C über Umgebungstemperatur. Da $T_U = 0$ °C, ist $T_\\infty = 20$ °C.',
    hints: ['Bilanz: $C_W \\dot T = $ Zufluss − Abfluss.', 'Stationär: $\\dot T = 0$.', 'Auflösen nach $T_\\infty$.'],
    wrongAnswerExplanations: {
      1: 'Einheitenfehler: kW wurde nicht in W umgerechnet. $\\dot Q_{ein}=2$ kW $=2000$ W. Aus $2000 = 100 \\cdot T_\\infty$ folgt $T_\\infty=20$ K. Mit fehlender Umrechnung ($2000 \\cdot 100$ oder $200000/100=2000$ K) käme ein Wert weit über Raumtemperatur.',
      2: 'Falsches Verhältnis: $T_\\infty = \\dot Q_{ein}/\\alpha = 2000\\,\\text{W}/100\\,\\text{W/K} = 20$ K, nicht $\\dot Q_{ein}\\,[\\text{kW}] / \\alpha\\,[\\text{kW/K}] = 2/100$ oder ähnlich. Einheiten sauber führen: W und W/K passen zusammen.',
      3: 'Ohne Heizung ($\\dot Q_{ein}=0$) wäre $T_\\infty=T_U=0$ °C. Hier heizt aber 2 kW in den Raum, was im Gleichgewicht eine Temperaturdifferenz erzeugt: $\\Delta T = \\dot Q_{ein}/\\alpha = 2000/100 = 20$ K über Umgebung.',
    },
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
    nextLessonId: 'dgl-3-3',
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
  {
    id: 'dgl-3-3', unitId: 'dgl-unit-3',
    title: 'Prüfung: Systeme & technische Modellbildung',
    order: 3, estimatedMinutes: 30,
    learningGoals: [
      'Lineare DGL-Systeme analysieren (Eigenwerte, Stabilität)',
      'Reale technische Systeme als DGL formulieren (Wärme, Strömung, Elektrik)',
      'Numerische Lösung mit Euler-Verfahren durchführen',
      'Stationäre Lösungen aus Bilanzgleichungen ermitteln',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-3-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Systeme & Modellbildung',
        content: `**Lineare DGL-Systeme:** $\\dot{\\vec{x}} = A\\vec{x}$ mit $\\vec{x} \\in \\mathbb{R}^n$. Allgemeine Lösung über Eigenwerte und Eigenvektoren von $A$:

$$\\vec{x}(t) = \\sum_i c_i e^{\\lambda_i t} \\vec{v}_i$$

**Stabilität:** Asymptotisch stabil $\\Leftrightarrow$ alle $\\text{Re}(\\lambda_i) < 0$. Bei $\\lambda$ rein imaginär: ungedämpfte Schwingung. Bei $\\text{Re}(\\lambda) > 0$: instabil.

---

**Modellbildung-Schema (Maschinenbau):**

| Bilanz | Beispiel | Form |
|---|---|---|
| **Massenbilanz** | Tankzu-/abfluss | $\\dot V = q_{ein} - q_{aus}$ |
| **Energiebilanz** | Wärmeverlust | $C_W \\dot T = \\dot Q_{ein} - \\alpha (T - T_U)$ |
| **Kräftebilanz** | Feder-Masse | $m \\ddot x = -k x - d \\dot x + F$ |
| **Ladungsbilanz** | RLC-Kreis | $L \\ddot q + R \\dot q + q/C = u(t)$ |

**Mechanik-Elektrotechnik-Analogie:** Masse ↔ Induktivität, Dämpfung ↔ Widerstand, Federsteifigkeit ↔ $1/C$, Kraft ↔ Spannung. Selbe Mathematik, andere Domäne.

---

**Numerische Lösung — Euler-Verfahren:**

$$y_{n+1} = y_n + h \\cdot f(x_n, y_n)$$

Einfaches explizites Verfahren erster Ordnung. Globaler Fehler $O(h)$. Achtung: Kann bei großem $h$ instabil werden — speziell bei steifen Systemen.

**Stationäre Lösungen:** $\\dot y = 0$ gibt den Gleichgewichtszustand. Oft schneller herzuleiten als die volle DGL.

**Prüfungsfallen:**
- Bilanzgleichung mit falschem Vorzeichen
- Stabilitätskriterium auf Realteil prüfen, nicht auf Vorzeichen von $\\lambda$ direkt
- Euler-Schrittweite zu groß → numerische Instabilität`,
      },
      { id: 'dgl-3-3-s2', type: 'exercise', title: 'Aufgabe 1: Mechanik-Elektrik-Analogie', exerciseRef: 'ex-dgl-3-3-a' },
      { id: 'dgl-3-3-s3', type: 'exercise', title: 'Aufgabe 2: System-Eigenwerte', exerciseRef: 'ex-dgl-3-3-b' },
      { id: 'dgl-3-3-s4', type: 'exercise', title: 'Aufgabe 3: Stabilitätskriterium', exerciseRef: 'ex-dgl-3-3-c' },
      { id: 'dgl-3-3-s5', type: 'exercise', title: 'Aufgabe 4: Modelle zuordnen', exerciseRef: 'ex-dgl-3-3-d' },
      { id: 'dgl-3-3-s6', type: 'exercise', title: 'Aufgabe 5: Newton-Abkühlung', exerciseRef: 'ex-dgl-3-3-e' },
      { id: 'dgl-3-3-s7', type: 'exercise', title: 'Aufgabe 6: Tankbilanz', exerciseRef: 'ex-dgl-3-3-f' },
      { id: 'dgl-3-3-s8', type: 'exercise', title: 'Aufgabe 7: Modellierungsstrategie', exerciseRef: 'ex-dgl-3-3-g' },
      { id: 'dgl-3-3-s9', type: 'exercise', title: 'Aufgabe 8: Euler-Stabilität', exerciseRef: 'ex-dgl-3-3-h' },
      { id: 'dgl-3-3-s10', type: 'exercise', title: 'Aufgabe 9: System-Entkopplung', exerciseRef: 'ex-dgl-3-3-i' },
      { id: 'dgl-3-3-s11', type: 'exercise', title: 'Aufgabe 10: Euler-Schrittberechnung', exerciseRef: 'ex-dgl-3-3-j' },
      { id: 'dgl-3-3-s12', type: 'mastery-check', title: 'Prüfungsfrage: Heizungs-Modellbildung', exerciseRef: 'ex-dgl-3-3-mastery' },
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
