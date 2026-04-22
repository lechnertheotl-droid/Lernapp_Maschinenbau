// ── Differentialgleichungen Unit 1: Grundbegriffe & einfache DGL ─────────────

export const exercises_dgl_u1 = {
  'ex-dgl-1-1-a': {
    id: 'ex-dgl-1-1-a', lessonId: 'dgl-1-1', type: 'multiple-choice',
    question: 'Was ist eine Differentialgleichung (DGL)?',
    options: [
      'Eine Gleichung, die nur Zahlen enthält',
      'Eine Gleichung, die eine unbekannte Funktion und ihre Ableitungen enthält',
      'Eine Gleichung mit zwei Unbekannten x und y',
      'Eine Gleichung, die nur Integrale enthält',
    ],
    correctIndex: 1,
    explanation: 'Eine DGL enthält eine gesuchte Funktion y(x) und mindestens eine ihrer Ableitungen y\', y\'\', ... Das Ziel: die Funktion y(x) finden!',
    hints: [
      'Was bedeutet das Wort "Differential" mathematisch?',
      'Es bezieht sich auf die Ableitung (Differentialquotient).',
      'Eine DGL verbindet eine Funktion mit ihren Ableitungen.',
    ],
    wrongAnswerExplanations: {
      0: 'Eine Gleichung, die nur Zahlen enthält, ist eine arithmetische Aussage wie $2+3=5$ — dort ist nichts unbekannt. Eine DGL enthält immer eine gesuchte Funktion und deren Ableitungen, z.B. $y\' = 2y$.',
      2: 'Das beschreibt eine algebraische Gleichung in zwei Variablen (z.B. $x^2+y^2=1$), aber keine Ableitungen. In einer DGL steht mindestens ein $y\'$, $y\'\'$ etc. — das Wort „Differential" verweist genau darauf.',
      3: 'Das ist eine Integralgleichung (z.B. $\\int_0^x f(t)\\,dt = g(x)$) — das Gegenstück zur DGL. DGL enthält Ableitungen; Integralgleichungen enthalten Integrale. Die beiden hängen zusammen, sind aber verschiedene Objekte.',
    },
  },
  'ex-dgl-1-1-b': {
    id: 'ex-dgl-1-1-b', lessonId: 'dgl-1-1', type: 'multiple-choice',
    question: 'Welche Ordnung hat die DGL $y\'\' + 3y\' - 2y = 0$?',
    options: ['Ordnung 0', 'Ordnung 1', 'Ordnung 2', 'Ordnung 3'],
    correctIndex: 2,
    explanation: 'Die Ordnung einer DGL ist die höchste vorkommende Ableitung. Hier ist $y\'\'$ (zweite Ableitung) die höchste, also Ordnung 2.',
    hints: [
      'Welche ist die höchste vorkommende Ableitung in der DGL?',
      'Zähle die Striche: $y\'$ ist 1. Ordnung, $y\'\'$ ist 2. Ordnung.',
      'Die höchste Ableitung in $y\'\' + 3y\' - 2y$ ist $y\'\'$ — also Ordnung 2.',
    ],
    wrongAnswerExplanations: {
      0: 'Ordnung 0 gäbe es nur, wenn gar keine Ableitung vorkäme — das wäre dann eine gewöhnliche algebraische Gleichung, keine DGL. Die Ordnung ist definiert als die höchste auftretende Ableitung; $y\'\'$ ist vorhanden, also mindestens Ordnung 2.',
      1: 'Du hast vermutlich nur den Term $3y\'$ gesehen und den Strich als Maß genommen. Die Ordnung richtet sich aber nach der *höchsten* Ableitung in der gesamten Gleichung: $y\'\'$ kommt vor und liefert Ordnung 2, nicht 1.',
      3: 'Ordnung 3 würde bedeuten, dass $y\'\'\'$ in der Gleichung steht — das ist hier nicht der Fall. Die höchste sichtbare Ableitung ist $y\'\'$ (zwei Striche), also Ordnung 2.',
    },
  },
  'ex-dgl-1-1-c': {
    id: 'ex-dgl-1-1-c', lessonId: 'dgl-1-1', type: 'true-false',
    statement: 'Die DGL $y\' = y^2 + x$ ist linear.',
    correct: false,
    explanation: 'Die DGL ist nichtlinear, weil $y^2$ vorkommt. Bei einer linearen DGL darf y und seine Ableitungen nur in der 1. Potenz auftreten (also $y$, $y\'$, $y\'\'$, ... aber nicht $y^2$, $\\sin(y)$, $e^y$, ...).',
    hints: [
      'Was bedeutet "linear" im DGL-Kontext?',
      '$y$ und alle Ableitungen dürfen nur in der 1. Potenz vorkommen.',
      'Ist $y^2$ in der DGL? Dann ist sie nichtlinear.',
    ],
  },
  'ex-dgl-1-1-mastery': {
    id: 'ex-dgl-1-1-mastery', lessonId: 'dgl-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Funktion löst das AWP $y\' = 2y$ mit $y(0) = 3$?',
    options: [
      '$y(x) = 3e^{2x}$',
      '$y(x) = e^{2x} + 3$',
      '$y(x) = 2e^{3x}$',
      '$y(x) = 3e^{x}$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Zwei Bedingungen prüfen: (1) DGL erfüllt, (2) Anfangsbedingung erfüllt.

**Prüfung $y = 3e^{2x}$:**
- Ableitung: $y' = 3 \\cdot 2 e^{2x} = 6e^{2x} = 2 \\cdot (3e^{2x}) = 2y$ ✓ (DGL erfüllt)
- Anfangsbedingung: $y(0) = 3 \\cdot e^{0} = 3 \\cdot 1 = 3$ ✓

**Warum die anderen falsch sind:**
- B: $y(0) = 1 + 3 = 4 \\neq 3$ und $y'(x) = 2e^{2x} \\neq 2y$.
- C: $y' = 6e^{3x} \\neq 2 \\cdot 2e^{3x}$ — DGL nicht erfüllt (Faktor im Exponent falsch).
- D: $y' = 3e^x \\neq 2 \\cdot 3e^x$ — falscher Exponent.

**Merke:** Die allgemeine Lösung von $y' = ky$ ist $y = C e^{kx}$; die Anfangsbedingung fixiert $C$.`,
    hints: [
      'Zwei Bedingungen müssen stimmen: DGL **und** $y(0) = 3$.',
      'Die allgemeine Lösung von $y\' = ky$ ist $y = C e^{kx}$. Hier $k = 2$.',
      '$y(0) = C \\cdot e^{0} = C$, also muss $C = 3$ sein.',
    ],
    wrongAnswerExplanations: {
      1: 'Hier wurde die Anfangsbedingung additiv statt multiplikativ eingebaut: $y(0) = e^0 + 3 = 4 \\neq 3$. Außerdem ist $y\' = 2e^{2x}$, aber $2y = 2e^{2x}+6$ — die DGL ist also auch nicht erfüllt. Richtig: die Konstante gehört als Faktor $C$ vor $e^{kx}$.',
      2: 'Du hast Vorfaktor und Exponent-Koeffizient vertauscht ($2$ und $3$). Setzt man $y=2e^{3x}$ ein: $y\' = 6e^{3x}$, aber $2y = 4e^{3x}$ — DGL nicht erfüllt. Die Regel lautet: bei $y\'=ky$ steht $k$ im Exponenten, der Vorfaktor wird aus $y(0)$ bestimmt.',
      3: 'Der Exponent-Koeffizient ist falsch: $y = 3e^{x}$ gibt $y\' = 3e^{x}$, aber die DGL verlangt $y\' = 2y = 6e^{x}$. Anfangsbedingung passt zwar ($y(0)=3$), die DGL aber nicht. Korrekt: der Koeffizient $k=2$ aus $y\'=2y$ erscheint im Exponenten.',
    },
  },

  'ex-dgl-1-2-a': {
    id: 'ex-dgl-1-2-a', lessonId: 'dgl-1-2', type: 'multiple-choice',
    question: 'Bei der Trennung der Variablen bringt man die DGL $\\frac{dy}{dx} = g(x) \\cdot h(y)$ in welche Form?',
    options: [
      '$\\frac{dy}{h(y)} = g(x)\\,dx$',
      '$dy = g(x) + h(y)\\,dx$',
      '$\\frac{dx}{dy} = g(x) \\cdot h(y)$',
      '$dy \\cdot dx = g(x) \\cdot h(y)$',
    ],
    correctIndex: 0,
    explanation: 'Man trennt die Variablen: alles mit y auf eine Seite, alles mit x auf die andere. Dann integriert man beide Seiten: $\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$.',
    hints: [
      'Was ist die Idee bei "Trennung der Variablen"?',
      'Alle $y$-Terme (inkl. $dy$) auf eine Seite, alle $x$-Terme (inkl. $dx$) auf die andere.',
      'Aus $\\frac{dy}{dx} = g(x) \\cdot h(y)$ folgt nach Umordnen: $\\frac{dy}{h(y)} = g(x)\\,dx$.',
    ],
    wrongAnswerExplanations: {
      1: 'Hier wurde das Produkt $g(x) \\cdot h(y)$ zu einer Summe $g(x) + h(y)$ umgeformt — das ist algebraisch falsch. Bei Trennung der Variablen *dividiert* man durch $h(y)$, man addiert nichts. Korrekt: $\\frac{dy}{h(y)} = g(x)\\,dx$.',
      2: 'Du hast $dy$ und $dx$ vertauscht. Damit hättest du $x\'(y)$ statt $y\'(x)$ getrennt — und das Produkt steht weiterhin auf der rechten Seite, also ist gar nichts getrennt. Ziel ist: $y$ allein links, $x$ allein rechts.',
      3: 'Die Differentiale wurden multipliziert — das ergibt kein Standardintegral, $dy \\cdot dx$ ist als Objekt in der 1D-Analysis undefiniert (kommt erst bei Doppelintegralen vor). Richtig: nach $h(y)$ dividieren, $dx$ auf die andere Seite bringen.',
    },
  },
  'ex-dgl-1-2-b': {
    id: 'ex-dgl-1-2-b', lessonId: 'dgl-1-2', type: 'multiple-choice',
    question: 'Löse die DGL $y\' = xy$ mit Trennung der Variablen. Welche allgemeine Lösung erhältst du?',
    options: [
      '$y = Ce^{x}$',
      '$y = Ce^{x^2/2}$',
      '$y = Cx^2$',
      '$y = Ce^{-x^2/2}$',
    ],
    correctIndex: 1,
    explanation: 'Trennung: $\\frac{dy}{y} = x\\,dx$. Integration: $\\ln|y| = \\frac{x^2}{2} + C_1$. Auflösen: $y = Ce^{x^2/2}$ mit $C = \\pm e^{C_1}$.',
    hints: [
      'Trenne die Variablen: $y$-Terme links, $x$-Terme rechts.',
      'Schritt 1: $\\frac{dy}{y} = x\\,dx$.',
      'Schritt 2: Beide Seiten integrieren — links $\\ln|y|$, rechts $x^2/2 + C$.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast die rechte Seite $\\int x\\,dx = \\frac{x^2}{2}$ als $\\int 1\\,dx = x$ integriert — also den Faktor $x$ übersehen. Das wäre die Lösung zu $y\'=y$, nicht zu $y\'=xy$. Korrekt: $\\int x\\,dx = \\frac{x^2}{2}$, daher Exponent $x^2/2$.',
      2: 'Das sieht nach einer Potenzfunktion aus — vermutlich wurde versucht, $y=x^n$ einzusetzen. Test: $y=Cx^2 \\Rightarrow y\'=2Cx$, aber $xy=Cx^3$. Das stimmt nicht. Separable DGL $\\frac{dy}{y}=x\\,dx$ führt über $\\ln|y|$ zwingend auf $e^{x^2/2}$.',
      3: 'Das Vorzeichen im Exponenten ist falsch. Aus $\\int x\\,dx = +\\frac{x^2}{2}$ folgt $\\ln|y|=+x^2/2$ — es gibt keine Vorzeichenumkehr. $y = Ce^{-x^2/2}$ würde die DGL $y\'=-xy$ lösen, nicht $y\'=xy$.',
    },
    visualization: {
      id: 'function-graph',
      params: {
        mode: 'static',
        functions: [
          { fn: (x) => Math.exp(x * x / 2), color: '#3b82f6', label: 'C=1: eˣ²/²' },
          { fn: (x) => 0.5 * Math.exp(x * x / 2), color: '#22c55e', label: 'C=0.5' },
          { fn: (x) => -Math.exp(x * x / 2), color: '#ef4444', label: 'C=−1' },
        ],
        xRange: [-2, 2],
        yRange: [-3, 3],
        showGrid: true,
      },
      caption: 'Lösungsfamilie y = C·e^(x²/2) für verschiedene Anfangsbedingungen',
      alt: 'Drei Lösungskurven der DGL y\' = xy für verschiedene Konstanten C',
    },
  },
  'ex-dgl-1-2-c': {
    id: 'ex-dgl-1-2-c', lessonId: 'dgl-1-2', type: 'number-input',
    question: 'Gegeben: $y\' = 2y$ mit $y(0) = 3$. Berechne $y(1)$ (auf 2 Dezimalstellen gerundet).',
    correctValue: 22.17,
    tolerance: 0.1,
    unit: '',
    explanation: 'Trennung: $\\frac{dy}{y} = 2\\,dx \\Rightarrow \\ln|y| = 2x + C_1 \\Rightarrow y = Ce^{2x}$. Anfangsbedingung: $y(0) = C = 3$. Also $y(1) = 3e^2 \\approx 22.17$.',
    hints: [
      'Trennung der Variablen liefert die allgemeine Lösung.',
      'Form: $y = Ce^{2x}$. Setze $x=0$ ein, um $C$ zu bestimmen.',
      'Mit $C = 3$: $y(1) = 3 e^{2} \\approx 22{,}17$.',
    ],
  },
  'ex-dgl-1-2-mastery': {
    id: 'ex-dgl-1-2-mastery', lessonId: 'dgl-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Löse das AWP: $y\' = -3y$, $y(0) = 5$. Was ist $y(x)$?',
    options: [
      '$y = 5e^{3x}$',
      '$y = 5e^{-3x}$',
      '$y = -3e^{5x}$',
      '$y = 5 - 3x$',
    ],
    correctIndex: 1,
    explanation: 'Trennung: $\\frac{dy}{y} = -3\\,dx \\Rightarrow \\ln|y| = -3x + C_1 \\Rightarrow y = Ce^{-3x}$. AWP: $y(0) = C = 5$. Also $y = 5e^{-3x}$.',
    hints: [
      'Trennung der Variablen: $\\frac{dy}{y} = -3 \\, dx$.',
      'Integrieren ergibt $\\ln|y| = -3x + C_1$, also $y = Ce^{-3x}$.',
      'Aus $y(0) = 5$ folgt $C = 5$.',
    ],
    wrongAnswerExplanations: {
      0: 'Vorzeichen im Exponenten vergessen: aus $y\'=-3y$ folgt $\\int \\frac{dy}{y}=\\int -3\\,dx$, also $\\ln|y|=-3x+C_1$ mit *negativem* $3$. Der Exponent muss $-3x$ lauten — sonst hättest du $y\'=+3y$ gelöst, nicht $y\'=-3y$.',
      2: 'Vorfaktor und Exponent-Koeffizient wurden vertauscht ($-3$ und $5$). Der Vorfaktor kommt aus $y(0)=C$, der Koeffizient im Exponenten aus dem Faktor vor $y$ in der DGL. Test: $y=-3e^{5x} \\Rightarrow y\'=-15e^{5x}$, aber $-3y=9e^{5x}$ — passt nicht.',
      3: 'Das ist eine lineare Funktion (konstante Ableitung $y\'=-3$), aber die DGL verlangt $y\'$ proportional zu $y$, nicht zu einer Konstanten. Aus $\\frac{dy}{y}=-3\\,dx$ folgt zwingend eine e-Funktion, keine Gerade.',
    },
    visualization: {
      id: 'function-graph',
      params: {
        mode: 'static',
        functions: [
          { fn: (x) => 5 * Math.exp(-3 * x), color: '#3b82f6', label: 'y = 5e⁻³ˣ' },
          { fn: (x) => 5 * Math.exp(3 * x), color: '#ef4444', label: 'y = 5e³ˣ (falsch)' },
        ],
        xRange: [-0.1, 2],
        yRange: [-1, 8],
        showGrid: true,
      },
      caption: 'Exponentieller Zerfall y = 5e⁻³ˣ: y(0)=5 und fällt gegen 0',
      alt: 'Graph des exponentiellen Zerfalls 5e hoch -3x',
    },
  },

  'ex-dgl-1-3-a': {
    id: 'ex-dgl-1-3-a', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Die allgemeine lineare DGL 1. Ordnung hat die Form:',
    options: [
      '$y\' = y^2 + p(x)$',
      '$y\' + p(x) \\cdot y = q(x)$',
      '$y\'\' + p(x) \\cdot y = 0$',
      '$y\' \\cdot y = q(x)$',
    ],
    correctIndex: 1,
    explanation: 'Die Standardform ist $y\' + p(x) \\cdot y = q(x)$. Dabei heißt $q(x)$ die Störfunktion. Für $q(x) = 0$ ist die DGL homogen.',
    hints: [
      'Wie sieht die kanonische Form einer linearen DGL 1. Ordnung aus?',
      'Standardform: $y\' + p(x) \\cdot y = q(x)$ — höchste Ableitung $y\'$, Koeffizienten von $x$ abhängig.',
      'Falls $q(x) = 0$: homogen; sonst inhomogen.',
    ],
    wrongAnswerExplanations: {
      0: 'Diese DGL ist *nichtlinear*, weil $y^2$ auftritt — $y$ und seine Ableitungen dürfen bei einer linearen DGL nur in erster Potenz vorkommen. Richtig: $y\' + p(x)y = q(x)$ (nur $y$, nicht $y^2$).',
      2: 'Hier steht $y\'\'$ — das ist eine DGL 2. Ordnung, nicht 1. Ordnung. Die Frage verlangt die höchste Ableitung $y\'$. Außerdem fehlt die rechte Seite $q(x)$ für die inhomogene Form.',
      3: 'Das Produkt $y\' \\cdot y$ ist nichtlinear (Produkt der Unbekannten mit ihrer Ableitung). Eine lineare DGL verknüpft $y$ und $y\'$ nur additiv, nicht multiplikativ: $y\' + p(x)y = q(x)$.',
    },
  },
  'ex-dgl-1-3-b': {
    id: 'ex-dgl-1-3-b', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Wie lautet der integrierende Faktor $\\mu(x)$ für die DGL $y\' + p(x) \\cdot y = q(x)$?',
    options: [
      '$\\mu = e^{\\int q(x)\\,dx}$',
      '$\\mu = e^{\\int p(x)\\,dx}$',
      '$\\mu = \\int p(x)\\,dx$',
      '$\\mu = e^{p(x)}$',
    ],
    correctIndex: 1,
    explanation: 'Der integrierende Faktor ist $\\mu(x) = e^{\\int p(x)\\,dx}$. Multipliziert man die DGL mit $\\mu$, wird die linke Seite zu $(\\mu \\cdot y)\' = \\mu \\cdot q$.',
    hints: [
      'Welche Funktion macht $y\' + p y$ zu einer Ableitung eines Produkts?',
      'Trick: $\\mu \\cdot y\' + \\mu \\cdot p \\cdot y = (\\mu \\cdot y)\'$, wenn $\\mu\' = \\mu \\cdot p$.',
      'Diese DGL für $\\mu$ hat die Lösung $\\mu = e^{\\int p \\, dx}$.',
    ],
    wrongAnswerExplanations: {
      0: 'Hier wurde $p$ und $q$ vertauscht. Der integrierende Faktor muss die Bedingung $\\mu\'=\\mu \\cdot p$ erfüllen — er hängt vom Koeffizienten $p(x)$ bei $y$ ab, nicht von der Störfunktion $q(x)$. Richtig: $\\mu=e^{\\int p\\,dx}$.',
      2: 'Ohne Exponentialfunktion erfüllt $\\mu$ nicht die Bedingung $\\mu\'=\\mu \\cdot p$. Beispiel: $p=1$ gäbe $\\mu=\\int 1\\,dx = x$, aber dann ist $\\mu\'=1 \\neq x \\cdot 1 = \\mu p$. Nur $\\mu=e^{\\int p\\,dx}$ erfüllt die Differentialgleichung für $\\mu$.',
      3: 'Das Integral im Exponenten fehlt. Mit $\\mu=e^{p(x)}$ ergibt sich $\\mu\'=p\'(x) \\cdot e^{p(x)}$, also $\\mu\'=p\' \\cdot \\mu$ — gefordert ist aber $\\mu\'=p \\cdot \\mu$. Der Exponent muss die *Stammfunktion* von $p$ sein, nicht $p$ selbst.',
    },
  },
  'ex-dgl-1-3-c': {
    id: 'ex-dgl-1-3-c', lessonId: 'dgl-1-3', type: 'multiple-choice',
    question: 'Löse: $y\' + 2y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = Ce^{2x}$',
      '$y = Ce^{-2x}$',
      '$y = 2x + C$',
      '$y = C \\cdot \\cos(2x)$',
    ],
    correctIndex: 1,
    explanation: 'Homogene lineare DGL: $y\' = -2y$. Lösung: $y = Ce^{-2x}$. Alternativ: $\\mu = e^{2x}$, dann $(e^{2x} \\cdot y)\' = 0 \\Rightarrow y = Ce^{-2x}$.',
    hints: [
      'Erkenne die Form: homogen mit konstantem Koeffizienten.',
      'Trennung der Variablen: $\\frac{dy}{y} = -2 \\, dx$ → $\\ln|y| = -2x + C_1$.',
      'Auflösen: $y = Ce^{-2x}$. Achte auf das negative Vorzeichen im Exponenten.',
    ],
    wrongAnswerExplanations: {
      0: 'Vorzeichen im Exponenten falsch: $y\' + 2y = 0$ heißt $y\' = -2y$, also $\\frac{dy}{y} = -2\\,dx$. Das negative Vorzeichen aus dem „$+2y$" landet im Exponenten. Test: $y=Ce^{2x} \\Rightarrow y\'=2Ce^{2x}=2y \\neq -2y$.',
      2: 'Das ist eine lineare Funktion (konstante Steigung $y\' = 2$), aber die DGL verlangt $y\' = -2y$ — die Steigung ist proportional zu $y$, nicht konstant. Eine homogene lineare DGL mit konstantem Koeffizienten hat immer eine e-Funktion als Lösung.',
      3: 'Kosinus taucht als Lösung bei DGL *zweiter* Ordnung ohne erste Ableitung auf (wie $y\'\'+4y=0$). Hier ist die Ordnung aber 1, und die charakteristische Gleichung $\\lambda+2=0$ hat eine reelle Wurzel — also kein Schwingungsverhalten, sondern e-Funktion.',
    },
  },
  'ex-dgl-1-3-d': {
    id: 'ex-dgl-1-3-d', lessonId: 'dgl-1-3', type: 'number-input',
    question: 'DGL: $y\' + y = 3$, AWP: $y(0) = 1$. Berechne $y(1)$ (auf 2 Dezimalstellen).',
    correctValue: 2.26,
    tolerance: 0.1,
    unit: '',
    explanation: '$\\mu = e^x$. $(e^x y)\' = 3e^x \\Rightarrow e^x y = 3e^x + C \\Rightarrow y = 3 + Ce^{-x}$. AWP: $y(0) = 1 = 3 + C \\Rightarrow C = -2$. Also $y(x) = 3 - 2e^{-x}$, $y(1) = 3 - 2e^{-1} \\approx 2.26$.',
    hints: [
      'Erst integrierenden Faktor $\\mu = e^{\\int p \\, dx}$ berechnen.',
      'Hier $p(x) = 1$ → $\\mu = e^x$. Dann $(e^x y)\' = 3 e^x$ integrieren.',
      'Allgemein: $y = 3 + Ce^{-x}$. Mit $y(0) = 1$ folgt $C = -2$, also $y(1) = 3 - 2/e \\approx 2{,}26$.',
    ],
  },
  'ex-dgl-1-3-mastery': {
    id: 'ex-dgl-1-3-mastery', lessonId: 'dgl-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die allgemeine Lösung von $y\' - 3y = 6$ ist:',
    options: [
      '$y = Ce^{3x} - 2$',
      '$y = Ce^{-3x} + 2$',
      '$y = Ce^{3x} + 6$',
      '$y = 6x + Ce^{3x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^{3x}$. Partikuläre Lösung (Ansatz $y_p = \\text{const}$): $0 - 3y_p = 6 \\Rightarrow y_p = -2$. Allgemein: $y = Ce^{3x} - 2$.',
    hints: [
      'Strategie: Homogene Lösung + partikuläre Lösung = allgemeine Lösung.',
      'Homogen: $y_h\' - 3y_h = 0 \\Rightarrow y_h = Ce^{3x}$.',
      'Partikulär: Ansatz $y_p = \\text{const}$, einsetzen in $y\' - 3y = 6$ ergibt $y_p = -2$.',
    ],
    wrongAnswerExplanations: {
      1: 'Im homogenen Teil ist das Vorzeichen falsch: $y\' - 3y = 0$ liefert $y\' = 3y$, also $y_h = Ce^{+3x}$. Außerdem ist die Partikulärlösung das Vorzeichen-verkehrt: aus $-3y_p = 6$ folgt $y_p = -2$, nicht $+2$.',
      2: 'Die Partikulärlösung ist falsch eingesetzt. Ansatz $y_p = \\text{const}$: $y_p\' = 0$, also $0 - 3y_p = 6 \\Rightarrow y_p = -2$ — nicht $+6$. Die rechte Seite $6$ ist die Störfunktion, nicht direkt die Partikulärlösung.',
      3: 'Hier wurde $y_p = 6x$ angenommen — das wäre nur richtig, wenn die Störfunktion $6x$ wäre und kein konstanter Term in $y_p$ nötig. Da die Störfunktion *konstant* ($=6$) ist, muss auch $y_p$ konstant sein. Einsetzen von $y_p=6x$ ergibt $6 - 18x \\neq 6$.',
    },
  },

  'ex-dgl-1-4-a': {
    id: 'ex-dgl-1-4-a', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Für die DGL $ay\'\' + by\' + cy = 0$ macht man den Ansatz $y = e^{\\lambda x}$. Welche Gleichung ergibt sich für $\\lambda$?',
    options: [
      '$a + b + c = 0$',
      '$a\\lambda^2 + b\\lambda + c = 0$',
      '$a\\lambda + b = 0$',
      '$\\lambda^2 = -c/a$',
    ],
    correctIndex: 1,
    explanation: 'Einsetzen von $y = e^{\\lambda x}$, $y\' = \\lambda e^{\\lambda x}$, $y\'\' = \\lambda^2 e^{\\lambda x}$ ergibt nach Kürzen von $e^{\\lambda x}$: $a\\lambda^2 + b\\lambda + c = 0$ (charakteristische Gleichung).',
    hints: [
      'Setze den Exponentialansatz $y = e^{\\lambda x}$ in die DGL ein.',
      '$y\' = \\lambda e^{\\lambda x}$, $y\'\' = \\lambda^2 e^{\\lambda x}$ — alles enthält Faktor $e^{\\lambda x}$.',
      'Kürzen mit $e^{\\lambda x} \\neq 0$ liefert die quadratische Gleichung in $\\lambda$.',
    ],
    wrongAnswerExplanations: {
      0: 'Hier fehlen die $\\lambda$-Potenzen. Beim Ableiten von $e^{\\lambda x}$ fällt jedes Mal ein Faktor $\\lambda$ heraus: $y\'\'=\\lambda^2 e^{\\lambda x}$, $y\'=\\lambda e^{\\lambda x}$. Das ergibt $a\\lambda^2+b\\lambda+c=0$, nicht $a+b+c=0$.',
      2: 'Das ist nur der Teil erster Ordnung — du hast $y\'\'$ weggelassen. Weil die DGL von Ordnung 2 ist, muss auch der quadratische Term $a\\lambda^2$ in der charakteristischen Gleichung auftauchen. Richtig: $a\\lambda^2+b\\lambda+c=0$.',
      3: 'Das ist nur ein Spezialfall: richtig wäre es nur, wenn $b=0$. Allgemein entsteht beim Einsetzen aber ein Term $b\\lambda$, der nicht fehlen darf: $a\\lambda^2+b\\lambda+c=0$.',
    },
  },
  'ex-dgl-1-4-b': {
    id: 'ex-dgl-1-4-b', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Die charakteristische Gleichung hat komplexe Wurzeln $\\lambda = \\alpha \\pm i\\beta$. Welche Form hat die allgemeine Lösung?',
    options: [
      '$y = C_1 e^{\\alpha x} + C_2 e^{\\beta x}$',
      '$y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$',
      '$y = (C_1 + C_2 x)e^{\\alpha x}$',
      '$y = C_1 \\cos(\\alpha x) + C_2 \\sin(\\beta x)$',
    ],
    correctIndex: 1,
    explanation: 'Bei komplexen Wurzeln $\\alpha \\pm i\\beta$ ist die reelle Lösung: $y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$. Das beschreibt eine Schwingung (sin/cos) mit Dämpfung ($e^{\\alpha x}$).',
    hints: [
      'Komplexe Wurzeln $\\Rightarrow$ Schwingungsverhalten.',
      '$\\alpha$ ist der Realteil — bestimmt die exponentielle Dämpfung ($e^{\\alpha x}$).',
      '$\\beta$ ist der Imaginärteil — bestimmt die Kreisfrequenz von $\\sin$ und $\\cos$.',
    ],
    wrongAnswerExplanations: {
      0: 'Diese Form gilt für zwei *verschiedene reelle* Wurzeln, nicht für komplexe. Bei komplexen Wurzeln müssen die Lösungen reell formuliert werden — über die Eulerformel $e^{i\\beta x}=\\cos(\\beta x)+i\\sin(\\beta x)$ entstehen sin/cos, nicht zwei getrennte e-Funktionen.',
      2: 'Das ist die Form für eine *doppelte reelle* Wurzel ($\\lambda_1=\\lambda_2=\\alpha$). Bei komplexen Wurzeln sind die beiden $\\lambda$ aber verschieden ($\\alpha+i\\beta$ und $\\alpha-i\\beta$) — kein linearer Faktor $x$, dafür trigonometrische Funktionen.',
      3: 'Hier wurden Real- und Imaginärteil gemischt. Korrekt wäre: $\\alpha$ steckt im Vorfaktor $e^{\\alpha x}$ (Dämpfung), $\\beta$ in $\\cos(\\beta x)$ und $\\sin(\\beta x)$ (Frequenz) — nicht $\\alpha$ im $\\cos$ und $\\beta$ im $\\sin$.',
    },
  },
  'ex-dgl-1-4-c': {
    id: 'ex-dgl-1-4-c', lessonId: 'dgl-1-4', type: 'multiple-choice',
    question: 'Löse: $y\'\' + 4y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = C_1 e^{2x} + C_2 e^{-2x}$',
      '$y = C_1 \\cos(2x) + C_2 \\sin(2x)$',
      '$y = (C_1 + C_2 x)e^{2x}$',
      '$y = C_1 \\cos(4x) + C_2 \\sin(4x)$',
    ],
    correctIndex: 1,
    explanation: 'Charakteristische Gleichung: $\\lambda^2 + 4 = 0 \\Rightarrow \\lambda = \\pm 2i$. Also $\\alpha = 0$, $\\beta = 2$. Lösung: $y = C_1 \\cos(2x) + C_2 \\sin(2x)$ (reine Schwingung ohne Dämpfung).',
    hints: [
      'Charakteristische Gleichung: $\\lambda^2 + 4 = 0$.',
      '$\\lambda^2 = -4 \\Rightarrow \\lambda = \\pm 2i$ (rein imaginär, $\\alpha = 0$).',
      'Rein imaginäre Wurzeln → ungedämpfte Schwingung mit Frequenz $\\beta = 2$.',
    ],
    wrongAnswerExplanations: {
      0: 'Das Vorzeichen in $\\lambda^2+4=0$ wurde übersehen: $\\lambda^2=-4$, nicht $+4$. Daher ist $\\lambda=\\pm 2i$ (imaginär), nicht $\\pm 2$ (reell). Reelle $\\lambda$ gäben e-Funktionen, aber hier liegen komplexe Wurzeln vor.',
      2: 'Das ist die Form für eine *doppelte reelle* Wurzel $\\lambda=2$. Die charakteristische Gleichung $\\lambda^2+4=0$ hat aber zwei *verschiedene* imaginäre Wurzeln $\\pm 2i$, keine Doppelwurzel. Keine $x$-Vorfaktoren, dafür sin/cos.',
      3: 'Die Frequenz $\\beta$ wurde als $4$ statt $2$ angesetzt. Aus $\\lambda^2=-4$ folgt $\\lambda=\\pm 2i$, also $\\beta=2$. Man nimmt die *Wurzel* von $4$, nicht den Wert selbst. Achtung: Der Zahlenkoeffizient in der charakteristischen Gleichung ist nicht direkt die Frequenz.',
    },
  },
  'ex-dgl-1-4-mastery': {
    id: 'ex-dgl-1-4-mastery', lessonId: 'dgl-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $y\'\' - 5y\' + 6y = 0$. Die allgemeine Lösung ist:',
    options: [
      '$y = C_1 e^{2x} + C_2 e^{3x}$',
      '$y = C_1 e^{-2x} + C_2 e^{-3x}$',
      '$y = (C_1 + C_2 x)e^{5x}$',
      '$y = e^{2.5x}(C_1 \\cos(x) + C_2 \\sin(x))$',
    ],
    correctIndex: 0,
    explanation: 'Charakteristische Gleichung: $\\lambda^2 - 5\\lambda + 6 = 0 \\Rightarrow (\\lambda - 2)(\\lambda - 3) = 0 \\Rightarrow \\lambda_1 = 2, \\lambda_2 = 3$. Zwei verschiedene reelle Wurzeln → $y = C_1 e^{2x} + C_2 e^{3x}$.',
    hints: [
      'Charakteristische Gleichung: $\\lambda^2 - 5\\lambda + 6 = 0$.',
      'Faktorisieren: $(\\lambda - 2)(\\lambda - 3) = 0$ (oder pq-Formel) → $\\lambda_1 = 2, \\lambda_2 = 3$.',
      'Zwei verschiedene reelle Wurzeln → $y = C_1 e^{2x} + C_2 e^{3x}$.',
    ],
    wrongAnswerExplanations: {
      1: 'Vorzeichen der Nullstellen falsch. Aus $(\\lambda-2)(\\lambda-3)=0$ folgt $\\lambda=+2$ und $\\lambda=+3$ (nicht $-2, -3$). Probe: $(-2)\\cdot(-3)=6$ ✓, aber $(-2)+(-3)=-5 \\neq +5$ (denn die Summe der Wurzeln ist $-(-5)=+5$ nach Vieta).',
      2: 'Das ist die Form für eine *doppelte* Wurzel. Hier haben wir aber zwei *verschiedene* Wurzeln $\\lambda_1=2, \\lambda_2=3$ — also keinen $x$-Vorfaktor. Außerdem $5$ im Exponenten ist falsch: $\\lambda$ ist entweder $2$ oder $3$.',
      3: 'Das wäre die Form für komplexe Wurzeln. Aber die Diskriminante $D=25-24=1>0$ — also zwei verschiedene reelle Wurzeln, keine komplexen. Keine trigonometrischen Funktionen, sondern zwei e-Funktionen.',
    },
  },
}

const lessons_dgl_u1 = [
  {
    id: 'dgl-1-1', unitId: 'dgl-unit-1',
    title: 'Was ist eine Differentialgleichung?',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['DGL als Gleichung mit Funktion und Ableitungen verstehen', 'Ordnung und Linearität bestimmen', 'Anfangswertproblem verstehen'],
    subGoals: [
      { label: 'Ordnung = höchste vorkommende Ableitung ($y$, $y\'$, $y\'\'$ … )', examRelevance: 'hoch' },
      { label: 'Linear ⇔ $y$ und alle Ableitungen nur in 1. Potenz, keine Produkte $y \\cdot y\'$', examRelevance: 'hoch' },
      { label: 'Homogen ⇔ rechte Seite = 0; sonst inhomogen (wichtig für Ansatzwahl)', examRelevance: 'hoch' },
      { label: 'Anfangswertproblem = DGL + Anfangsbedingung → eindeutige Lösung', examRelevance: 'mittel' },
      { label: 'Gewöhnlich (ODE) vs. partiell (PDE): genau eine unabhängige Variable', examRelevance: 'niedrig' },
    ],
    prerequisites: [],
    nextLessonId: 'dgl-1-2',
    steps: [
      {
        id: 'dgl-1-1-s1', type: 'explanation-intuitive', title: 'Die Idee hinter Differentialgleichungen',
        content: `Stell dir vor, du beobachtest ein Phänomen in der Natur:

- Ein Pendel schwingt hin und her
- Eine Tasse Kaffee kühlt ab
- Eine Population von Bakterien wächst

In all diesen Fällen kennst du nicht direkt die **Funktion** (z.B. Temperatur als Funktion der Zeit), aber du kennst eine **Regel, wie sich die Funktion ändert**.

**Beispiel Kaffee:** Die Abkühlgeschwindigkeit (= Ableitung der Temperatur) ist proportional zur Temperaturdifferenz zur Umgebung:

$$T'(t) = -k \\cdot (T(t) - T_{\\text{Umgebung}})$$

Das ist eine **Differentialgleichung** (DGL)! Sie enthält:
- Die unbekannte Funktion $T(t)$
- Ihre Ableitung $T'(t)$

**Ziel:** Finde die Funktion $T(t)$, die diese Gleichung erfüllt.

Aus der Physik kennst du das schon: Die Geschwindigkeit $v(t) = s'(t)$ ist die Ableitung des Weges. Wenn du weißt, wie sich die Geschwindigkeit verhält, kannst du den Weg berechnen — das ist im Grunde eine DGL lösen!`,
      },
      {
        id: 'dgl-1-1-s2', type: 'explanation-formal', title: 'Grundbegriffe',
        content: `**Definition:** Eine Differentialgleichung (DGL) ist eine Gleichung, die eine gesuchte Funktion $y(x)$ und mindestens eine ihrer Ableitungen $y', y'', \\ldots$ enthält.

**Ordnung** einer DGL = höchste vorkommende Ableitung:
- $y' = 2y$ → Ordnung **1** (nur $y'$)
- $y'' + 3y' - y = 0$ → Ordnung **2** ($y''$ ist die höchste)
- $y''' = x$ → Ordnung **3**

**Linear vs. nichtlinear:**
Eine DGL ist **linear**, wenn $y$ und seine Ableitungen nur in der **1. Potenz** vorkommen:
- $y' + 2y = x$ → **linear** ✓
- $y' = y^2$ → **nichtlinear** ✗ (wegen $y^2$)
- $y'' \\cdot y = 1$ → **nichtlinear** ✗ (Produkt $y'' \\cdot y$)

**Anfangswertproblem (AWP):**
DGL + Anfangsbedingung(en), z.B.:
$$y' = 2y, \\quad y(0) = 3$$
Die DGL allein hat unendlich viele Lösungen ($y = Ce^{2x}$ für jedes $C$). Die Anfangsbedingung wählt genau eine aus ($C = 3$).`,
      },
      { id: 'dgl-1-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-1-a' },
      { id: 'dgl-1-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-1-b' },
      { id: 'dgl-1-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-1-c' },
      { id: 'dgl-1-1-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-1-1-mastery' },
    ],
  },
  {
    id: 'dgl-1-2', unitId: 'dgl-unit-1',
    title: 'Trennung der Variablen',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Methode der Variablentrennung anwenden', 'Einfache DGL 1. Ordnung lösen', 'Anfangswerte einsetzen'],
    subGoals: [
      { label: 'Anwendbarkeit erkennen: $y\' = f(x)\\,g(y)$ — Produkt aus $x$- und $y$-Anteil', examRelevance: 'hoch' },
      { label: '$dy/dx$-Schreibweise: $\\tfrac{dy}{g(y)} = f(x)\\,dx$ sauber trennen', examRelevance: 'hoch' },
      { label: 'Beide Seiten integrieren, Integrationskonstante $C$ nur einmal ansetzen', examRelevance: 'hoch' },
      { label: 'Anfangsbedingung $y(x_0) = y_0$ zum Bestimmen von $C$ einsetzen — vor dem Umformen nach $y$', examRelevance: 'hoch' },
      { label: 'Betragsstriche bei $\\int 1/y\\,dy = \\ln|y|$ nicht vergessen und Fallunterscheidung prüfen', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'dgl-1-3',
    steps: [
      {
        id: 'dgl-1-2-s1', type: 'explanation-intuitive', title: 'Die Idee: Sortieren und Integrieren',
        content: `Die **Trennung der Variablen** ist die einfachste Methode, um DGL zu lösen. Sie funktioniert, wenn die rechte Seite ein **Produkt** aus einer reinen x-Funktion und einer reinen y-Funktion ist:

$$\\frac{dy}{dx} = g(x) \\cdot h(y)$$

**Die Idee:** Sortiere alles mit $y$ nach links, alles mit $x$ nach rechts, und integriere dann beide Seiten.

**Rezept (Schritt für Schritt):**

1. **Trennen:** $\\frac{dy}{h(y)} = g(x)\\,dx$
2. **Integrieren:** $\\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx$
3. **Auflösen** nach $y$ (wenn möglich)
4. **Anfangsbedingung** einsetzen (falls AWP)

**Beispiel:** $y' = xy$
1. Trennen: $\\frac{dy}{y} = x\\,dx$
2. Integrieren: $\\ln|y| = \\frac{x^2}{2} + C_1$
3. Auflösen: $y = Ce^{x^2/2}$ (mit $C = \\pm e^{C_1}$)`,
      },
      {
        id: 'dgl-1-2-s2', type: 'explanation-formal', title: 'Weiteres Beispiel',
        content: `**Beispiel mit AWP:** $y' = 2ty$, $y(0) = 5$

**Schritt 1 — Trennen:**
$$\\frac{dy}{y} = 2t\\,dt$$

**Schritt 2 — Integrieren:**
$$\\int \\frac{dy}{y} = \\int 2t\\,dt$$
$$\\ln|y| = t^2 + C_1$$

**Schritt 3 — Auflösen:**
$$y = Ce^{t^2}$$

**Schritt 4 — Anfangsbedingung:**
$$y(0) = Ce^0 = C = 5$$

**Ergebnis:** $y(t) = 5e^{t^2}$`,
      },
      { id: 'dgl-1-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-2-a' },
      { id: 'dgl-1-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-2-b' },
      { id: 'dgl-1-2-s5', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-dgl-1-2-c' },
      { id: 'dgl-1-2-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-1-2-mastery' },
    ],
  },
  {
    id: 'dgl-1-3', unitId: 'dgl-unit-1',
    title: 'Lineare DGL 1. Ordnung',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Lineare DGL 1. Ordnung in Standardform bringen', 'Integrierenden Faktor berechnen', 'Homogene + partikuläre Lösung bestimmen'],
    subGoals: [
      { label: 'Standardform: $y\' + p(x) y = q(x)$', examRelevance: 'hoch' },
      { label: 'Integrierender Faktor: $\\mu(x) = e^{\\int p(x) dx}$', examRelevance: 'hoch' },
      { label: 'Lösungsformel: $y = (1/\\mu) [\\int \\mu \\cdot q \\, dx + C]$', examRelevance: 'hoch' },
      { label: 'Alternative: Variation der Konstanten (homogene + partikuläre Lösung)', examRelevance: 'hoch' },
      { label: 'Homogene Lösung $y_h = C e^{-\\int p dx}$ einzeln bestimmbar', examRelevance: 'hoch' },
      { label: 'Typisches Anwendungsproblem: RC-Stromkreis $\\dot U + U/RC = U_0/RC$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'dgl-1-4',
    steps: [
      {
        id: 'dgl-1-3-s1', type: 'explanation-intuitive', title: 'Warum ein "integrierender Faktor"?',
        content: `Nicht jede DGL lässt sich durch Trennung der Variablen lösen. Die DGL

$$y' + p(x) \\cdot y = q(x)$$

hat auf der linken Seite eine Mischung aus $y'$ und $y$ — die Variablen lassen sich nicht trennen (es sei denn, $q(x) = 0$).

**Der Trick:** Wir multiplizieren die gesamte Gleichung mit einem geschickt gewählten Faktor $\\mu(x)$, sodass die linke Seite zu einer **Produktregel rückwärts** wird:

$$\\mu \\cdot y' + \\mu \\cdot p \\cdot y = (\\mu \\cdot y)' = \\mu \\cdot q$$

Dann ist es einfach: Integriere beide Seiten!

$$\\mu(x) \\cdot y = \\int \\mu(x) \\cdot q(x)\\,dx + C$$

Der passende Faktor ist: $\\mu(x) = e^{\\int p(x)\\,dx}$.`,
      },
      {
        id: 'dgl-1-3-s2', type: 'explanation-formal', title: 'Methode des integrierenden Faktors',
        content: `**Gegeben:** $y' + p(x) \\cdot y = q(x)$

**Schritt 1 — Integrierenden Faktor berechnen:**
$$\\mu(x) = e^{\\int p(x)\\,dx}$$

**Schritt 2 — Beide Seiten mit $\\mu$ multiplizieren:**
$$(\\mu \\cdot y)' = \\mu \\cdot q(x)$$

**Schritt 3 — Integrieren:**
$$\\mu \\cdot y = \\int \\mu \\cdot q(x)\\,dx + C$$

**Schritt 4 — Nach y auflösen:**
$$y = \\frac{1}{\\mu} \\left( \\int \\mu \\cdot q\\,dx + C \\right)$$

**Beispiel:** $y' + 2y = e^x$
- $p(x) = 2$, $q(x) = e^x$
- $\\mu = e^{2x}$
- $(e^{2x} y)' = e^{2x} \\cdot e^x = e^{3x}$
- $e^{2x} y = \\frac{1}{3}e^{3x} + C$
- $y = \\frac{1}{3}e^{x} + Ce^{-2x}$

Dabei ist $Ce^{-2x}$ die **homogene Lösung** und $\\frac{1}{3}e^x$ die **partikuläre Lösung**.`,
      },
      { id: 'dgl-1-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-3-a' },
      { id: 'dgl-1-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-3-b' },
      { id: 'dgl-1-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-3-c' },
      { id: 'dgl-1-3-s6', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-dgl-1-3-d' },
      { id: 'dgl-1-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-1-3-mastery' },
    ],
  },
  {
    id: 'dgl-1-4', unitId: 'dgl-unit-1',
    title: 'DGL 2. Ordnung mit konstanten Koeffizienten',
    order: 4, estimatedMinutes: 22,
    learningGoals: ['Charakteristische Gleichung aufstellen und lösen', 'Drei Fälle unterscheiden: reelle, doppelte, komplexe Wurzeln', 'Schwingungsverhalten aus der Lösung ablesen'],
    subGoals: [
      { label: 'Ansatz $y = e^{\\lambda x}$ führt zu char. Gleichung $a\\lambda^2 + b\\lambda + c = 0$', examRelevance: 'hoch' },
      { label: 'D > 0 (zwei reelle): $y = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$', examRelevance: 'hoch' },
      { label: 'D = 0 (doppelte): $y = (C_1 + C_2 x) e^{\\lambda x}$', examRelevance: 'hoch' },
      { label: 'D < 0 (komplex $\\alpha \\pm i\\beta$): $y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$ — Schwingung!', examRelevance: 'hoch' },
      { label: 'Dämpfung: $\\alpha < 0$ abklingend, $\\alpha = 0$ ungedämpft, $\\alpha > 0$ instabil', examRelevance: 'hoch' },
      { label: 'Feder-Masse: $m\\ddot x + d\\dot x + kx = 0$ — Eigenfrequenz $\\omega_0 = \\sqrt{k/m}$', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-1-4-s1', type: 'explanation-intuitive', title: 'Warum Schwingungen?',
        content: `DGL 2. Ordnung beschreiben viele physikalische Phänomene:
- **Pendel:** $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$
- **Feder-Masse-System:** $m\\ddot{x} + kx = 0$
- **Elektrischer Schwingkreis:** $L\\ddot{q} + R\\dot{q} + \\frac{1}{C}q = 0$

All diese haben die Form:
$$ay'' + by' + cy = 0$$

Die Lösung hängt davon ab, welche Art von Wurzeln die **charakteristische Gleichung** $a\\lambda^2 + b\\lambda + c = 0$ hat:

1. **Zwei verschiedene reelle Wurzeln** $\\lambda_1 \\neq \\lambda_2$: Exponentielles Verhalten
2. **Doppelte reelle Wurzel** $\\lambda_1 = \\lambda_2$: Grenzfall
3. **Komplexe Wurzeln** $\\alpha \\pm i\\beta$: **Schwingung!** (Das ist der spannendste Fall)

Komplexe Wurzeln erzeugen Sinus- und Kosinusfunktionen — das sind die **Schwingungen**, die wir überall in der Technik sehen!`,
      },
      {
        id: 'dgl-1-4-s2', type: 'explanation-formal', title: 'Die drei Fälle',
        content: `**DGL:** $ay'' + by' + cy = 0$
**Ansatz:** $y = e^{\\lambda x}$
**Charakteristische Gleichung:** $a\\lambda^2 + b\\lambda + c = 0$

**Fall 1: Diskriminante $D > 0$ — zwei reelle Wurzeln $\\lambda_1, \\lambda_2$**
$$y = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$$

**Fall 2: Diskriminante $D = 0$ — doppelte Wurzel $\\lambda_1 = \\lambda_2 = \\lambda$**
$$y = (C_1 + C_2 x) e^{\\lambda x}$$

**Fall 3: Diskriminante $D < 0$ — komplexe Wurzeln $\\lambda = \\alpha \\pm i\\beta$**
$$y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$$

Dabei ist:
- $\\alpha = -\\frac{b}{2a}$ (Dämpfung)
- $\\beta = \\frac{\\sqrt{|D|}}{2a}$ (Kreisfrequenz)

Wenn $\\alpha < 0$: gedämpfte Schwingung (klingt ab)
Wenn $\\alpha = 0$: ungedämpfte Schwingung (schwingt ewig)
Wenn $\\alpha > 0$: aufklingende Schwingung (Amplitude wächst — instabil!)`,
      },
      {
        id: 'dgl-1-4-s3', type: 'visualization', title: 'Schwingungslösungen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.cos(2 * x), color: '#3b82f6', label: 'ungedämpft: cos(2x)' },
            { fn: (x) => Math.exp(-0.3 * x) * Math.cos(2 * x), color: '#ef4444', label: 'gedämpft: e^(-0.3x)·cos(2x)' },
          ],
          xRange: [0, 15],
          yRange: [-1.5, 1.5],
          showGrid: true,
        },
      },
      { id: 'dgl-1-4-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-1-4-a' },
      { id: 'dgl-1-4-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-1-4-b' },
      { id: 'dgl-1-4-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-1-4-c' },
      { id: 'dgl-1-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-1-4-mastery' },
    ],
  },
]

export const dgl_unit1 = {
  id: 'dgl-unit-1',
  title: 'Grundbegriffe & einfache DGL',
  order: 1,
  description: 'Was ist eine DGL, Trennung der Variablen, lineare DGL 1. und 2. Ordnung',
  unitGoals: [
    'Ordnung und Typ einer DGL (explizit, implizit, linear/nichtlinear, homogen/inhomogen) bestimmen',
    'Trennung der Variablen bei DGL der Form $y\' = f(x) g(y)$ korrekt anwenden',
    'Allgemeine und spezielle Lösung unterscheiden — Anfangswertproblem mit $y(x_0) = y_0$ fixiert die Konstante',
    'Richtungsfeld als visuelle Vorschau der Lösungsscharen interpretieren',
  ],
  lessons: lessons_dgl_u1,
  exercises: exercises_dgl_u1,
}
