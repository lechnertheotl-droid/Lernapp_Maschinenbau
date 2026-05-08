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
    explanation: `**Ansatz:** Das Wort *Differential* zeigt auf die Ableitung — eine DGL muss also Ableitungen einer unbekannten Funktion enthalten.

**Rechnung:** Beispiel $y' = 2y$: hier kommt die unbekannte Funktion $y(x)$ und ihre Ableitung $y'$ vor. Gesucht: alle $y(x)$, die diese Gleichung erfüllen.

**Probe:** $y(x) = e^{2x}$ einsetzen: $y' = 2e^{2x} = 2y$ ✓ — die Funktion löst die DGL.

**Typischer Fehler:** Man hält jede Gleichung mit $y$ für eine DGL. Erst wenn auch eine *Ableitung* von $y$ vorkommt, ist es eine Differentialgleichung.`,
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
    explanation: `**Ansatz:** Die *Ordnung* einer DGL ist definiert als die höchste vorkommende Ableitung — unabhängig davon, mit welchem Koeffizienten sie multipliziert ist.

**Rechnung:** In $y'' + 3y' - 2y = 0$ stehen $y''$ (zweite Ableitung), $y'$ (erste Ableitung) und $y$ (nullte Ableitung). Die höchste ist $y''$ → Ordnung 2.

**Probe:** Wären die Ableitungen einer Lösung explizit, müsstest du auch die zweite Ableitung berechnen — z. B. $y = e^{\\lambda x}$ liefert $y'' = \\lambda^2 e^{\\lambda x}$, also wirklich Ordnung 2.

**Typischer Fehler:** Sich am Vorfaktor ($3y'$) orientieren statt an der Anzahl der Striche, oder die niedrigste statt die höchste Ableitung als Ordnung wählen.`,
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
    explanation: `**Ansatz:** Linearität-Test: $y$ und alle Ableitungen dürfen nur in 1. Potenz vorkommen — keine Produkte $y\\cdot y'$, keine Funktionen wie $\\sin(y)$, $e^y$, $y^2$.

**Rechnung:** In $y' = y^2 + x$ steht $y^2$ → 2. Potenz → Linearitätsbedingung verletzt → DGL ist *nichtlinear*. Die Aussage ist also **falsch**.

**Probe:** Standard-Form prüfen: lineare DGL 1. Ordnung wäre $y' + p(x)\\,y = q(x)$. Mit $y^2$ kann man die Gleichung nicht in diese Form bringen — daher nichtlinear.

**Typischer Fehler:** "Linear" mit "rechte Seite ist linear in $x$" verwechseln. Linear bezieht sich auf $y$ und seine Ableitungen, NICHT auf die unabhängige Variable $x$ — $x$ und beliebige Funktionen $f(x)$ sind in linearen DGL erlaubt.`,
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
    explanation: `**Ansatz:** Allgemeine Lösung von $y'=ky$ ist $y=C\\,e^{kx}$. Anfangsbedingung $y(0)=3$ liefert die Konstante $C$.

**Rechnung:** Mit $k=2$ ist die Lösungsfamilie $y=C\\,e^{2x}$. Einsetzen: $y(0)=C\\cdot e^{0}=C$, also $C=3$. Damit ist $y(x)=3e^{2x}$.

**Probe:** Ableiten: $y'=3\\cdot 2 e^{2x}=6e^{2x}$. Vergleich mit $2y=2\\cdot 3e^{2x}=6e^{2x}$ → DGL erfüllt ✓. Anfangswert: $y(0)=3e^{0}=3$ ✓.

**Typischer Fehler:** Die Anfangsbedingung additiv ($e^{2x}+3$) statt als Vorfaktor einbauen, oder Vorfaktor $C$ und Exponentkoeffizient $k$ vertauschen ($2e^{3x}$ statt $3e^{2x}$).`,
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
    explanation: `**Ansatz:** Ziel der Trennung der Variablen: alle $y$-Terme (inkl. $dy$) auf die eine Seite, alle $x$-Terme (inkl. $dx$) auf die andere — sodass beide Seiten unabhängig integriert werden können.

**Rechnung:** Aus $\\frac{dy}{dx} = g(x)\\cdot h(y)$ folgt durch Multiplikation mit $dx$ und Division durch $h(y)$: $\\frac{dy}{h(y)} = g(x)\\,dx$. Anschließend $\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$.

**Probe:** Beispiel $y\' = xy$: hier ist $g(x)=x$, $h(y)=y$. Trennung: $\\frac{dy}{y} = x\\,dx$ — passt zur Standardform.

**Typischer Fehler:** Aus dem Produkt eine Summe machen ($g(x)+h(y)$) oder $dx$ und $dy$ vertauschen. Ziel ist sauber: $y$-Anteile links, $x$-Anteile rechts, beide Differentiale auf der jeweils richtigen Seite.`,
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
    explanation: `**Ansatz:** Rechte Seite $xy$ ist Produkt aus reiner $x$-Funktion ($x$) und reiner $y$-Funktion ($y$) → Trennung der Variablen anwendbar.

**Rechnung:** $\\frac{dy}{y} = x\\,dx$. Integration: $\\ln|y| = \\frac{x^2}{2} + C_1$. Exponieren: $|y| = e^{C_1}\\,e^{x^2/2}$ → $y = C\\,e^{x^2/2}$ mit $C = \\pm e^{C_1} \\in \\mathbb{R}$.

**Probe:** Ableiten von $y = C\\,e^{x^2/2}$: $y\' = C\\cdot x\\cdot e^{x^2/2} = x\\cdot y$ ✓. Allgemeine Lösungsschar mit $C \\in \\mathbb{R}$.

**Typischer Fehler:** $\\int x\\,dx$ als $x$ statt $x^2/2$ integrieren ($\\to e^x$), oder das Vorzeichen im Exponenten umkehren ($\\to e^{-x^2/2}$ wäre Lösung von $y\'=-xy$).`,
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
    explanation: `**Ansatz:** Trennung der Variablen, dann allgemeine Lösung über die Anfangsbedingung fixieren und an der Stelle $x=1$ auswerten.

**Rechnung:** $\\frac{dy}{y} = 2\\,dx \\Rightarrow \\ln|y| = 2x + C_1 \\Rightarrow y(x) = C\\,e^{2x}$. AB: $y(0) = C\\,e^{0} = C = 3$. Also $y(x) = 3\\,e^{2x}$ und $y(1) = 3\\,e^{2} \\approx 22{,}17$.

**Probe:** $y\'(x) = 6\\,e^{2x} = 2\\cdot 3\\,e^{2x} = 2y$ ✓; $y(0) = 3$ ✓.

**Typischer Fehler:** Die AB additiv einbauen ($e^{2x}+3$ → $y(0)=4$, falsch) oder den Exponentkoeffizienten mit dem Anfangswert verwechseln ($3e^{3x}$ → $y(0)=3$ ✓ aber DGL verletzt).`,
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
    explanation: `**Ansatz:** Trennung der Variablen, dann $C$ aus der Anfangsbedingung bestimmen.

**Rechnung:** $\\frac{dy}{y} = -3\\,dx \\Rightarrow \\ln|y| = -3x + C_1 \\Rightarrow y(x) = C\\,e^{-3x}$. AB: $y(0) = C\\,e^{0} = C = 5$. Damit $y(x) = 5\\,e^{-3x}$.

**Probe:** $y\'(x) = -15\\,e^{-3x} = -3\\cdot 5\\,e^{-3x} = -3y$ ✓ (DGL erfüllt). $y(0) = 5\\,e^{0} = 5$ ✓ (AB erfüllt). Verhalten: exponentieller Zerfall, $y \\to 0$ für $x \\to \\infty$.

**Typischer Fehler:** Vorzeichen im Exponenten vergessen ($e^{+3x}$) oder Vorfaktor und Exponentkoeffizient vertauschen ($-3e^{5x}$). Merkregel: Koeffizient $k$ aus $y\'=ky$ steht im Exponenten, Vorfaktor $C$ aus der Anfangsbedingung.`,
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
    explanation: `**Ansatz:** Eine *lineare* DGL 1. Ordnung enthält $y$ und $y'$ jeweils nur in 1. Potenz. Die Standardform isoliert die höchste Ableitung mit Koeffizient 1.

**Rechnung:** Standardform: $y' + p(x)\\cdot y = q(x)$. Hier ist $p(x)$ der Koeffizient bei $y$ und $q(x)$ die Störfunktion (rechte Seite).

**Probe:** Beispiel $y' + 2x\\,y = e^x$: $p(x)=2x$, $q(x)=e^x$ — passt zur Standardform. Lösbar mit integrierendem Faktor $\\mu = e^{\\int p\\,dx}$.

**Typischer Fehler:** Form $y' = y^2 + p(x)$ (nichtlinear wegen $y^2$) oder $y'\\cdot y = q(x)$ (Produkt $y\\cdot y'$ → nichtlinear) für linear halten. Linearität verlangt $y$ und $y'$ ohne Potenzen, ohne Produkte miteinander.`,
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
    explanation: `**Ansatz:** Suche eine Funktion $\\mu(x)$, sodass die linke Seite $\\mu(y' + p\\,y)$ als Ableitung des Produkts $\\mu\\cdot y$ geschrieben werden kann.

**Rechnung:** $(\\mu\\cdot y)' = \\mu' y + \\mu y' = \\mu(y' + (\\mu'/\\mu)\\,y)$. Damit das mit $\\mu(y' + p\\,y)$ übereinstimmt, muss $\\mu'/\\mu = p$, d. h. $\\mu' = p\\,\\mu$. Diese DGL für $\\mu$ wird durch $\\mu = e^{\\int p\\,dx}$ gelöst.

**Probe:** Mit $p(x) = 3$ und $\\mu = e^{3x}$: $\\mu' = 3e^{3x} = p\\cdot \\mu$ ✓. Multipliziert man die ursprüngliche DGL mit $\\mu$, wird $(\\mu\\cdot y)' = \\mu\\cdot q$ — direkt integrierbar.

**Typischer Fehler:** $p$ und $q$ vertauschen ($\\mu = e^{\\int q\\,dx}$, falsch — die rechte Seite spielt für $\\mu$ keine Rolle), Integral vergessen ($\\mu = e^p$), oder e-Funktion ganz weglassen ($\\mu = \\int p\\,dx$).`,
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
    explanation: `**Ansatz:** Homogene lineare DGL mit konstantem Koeffizienten — Lösung über Trennung der Variablen oder direkt aus der Formel $y_h = C\\,e^{-\\int p\\,dx}$.

**Rechnung:** $y' + 2y = 0 \\Leftrightarrow y' = -2y$. Mit $p(x) = 2$: $y_h = C\\,e^{-\\int 2\\,dx} = C\\,e^{-2x}$. Alternative: $\\frac{dy}{y} = -2\\,dx \\Rightarrow \\ln|y| = -2x + C_1 \\Rightarrow y = C\\,e^{-2x}$.

**Probe:** $y' = -2C\\,e^{-2x} = -2\\,(C\\,e^{-2x}) = -2y$ ✓ — DGL erfüllt für jedes $C \\in \\mathbb{R}$.

**Typischer Fehler:** Vorzeichen im Exponenten umdrehen ($Ce^{+2x}$ ist Lösung von $y' = +2y$, nicht $y' = -2y$). Oder lineare Funktion $2x + C$ ansetzen — passt zur DGL $y' = 2$, nicht $y' = -2y$.`,
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
    explanation: `**Ansatz:** Standardform $y' + 1\\cdot y = 3$ → $p(x) = 1$, $q(x) = 3$. Methode des integrierenden Faktors anwenden.

**Rechnung:** $\\mu = e^{\\int 1\\,dx} = e^x$. Multiplizieren: $(e^x y)' = 3\\,e^x$. Integrieren: $e^x y = 3\\,e^x + C \\Rightarrow y(x) = 3 + C\\,e^{-x}$. AWP: $y(0) = 3 + C = 1 \\Rightarrow C = -2$. Also $y(x) = 3 - 2\\,e^{-x}$ und $y(1) = 3 - 2/e \\approx 2{,}264$.

**Probe:** $y'(x) = 2\\,e^{-x}$; einsetzen: $y' + y = 2\\,e^{-x} + 3 - 2\\,e^{-x} = 3$ ✓. Anfangswert: $y(0) = 3 - 2 = 1$ ✓. Asymptotik: $y \\to 3$ für $x \\to \\infty$ (Gleichgewicht).

**Typischer Fehler:** Statt $C\\,e^{-x}$ den Term $C\\,e^{+x}$ ansetzen (Vorzeichen aus $1/\\mu$ vergessen) oder die Partikulärlösung $y_p = 3$ als $y_p = 3x$ anschreiben (denn die Stör­funktion ist eine Konstante, nicht $3x$).`,
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
    explanation: `**Ansatz:** Allgemeine Lösung = homogene Lösung $y_h$ + partikuläre Lösung $y_p$. Bei konstanter Stör­funktion: $y_p$ als Konstante ansetzen.

**Rechnung:** Homogen: $y' - 3y = 0 \\Rightarrow y_h = C\\,e^{3x}$. Partikulär (Ansatz $y_p = \\text{const}$, also $y_p' = 0$): einsetzen liefert $0 - 3\\,y_p = 6 \\Rightarrow y_p = -2$. Allgemein: $y(x) = C\\,e^{3x} - 2$.

**Probe:** $y' = 3C\\,e^{3x}$; $y' - 3y = 3C\\,e^{3x} - 3(C\\,e^{3x} - 2) = 6$ ✓ für jedes $C$.

**Typischer Fehler:** Vorzeichen im homogenen Teil umkehren ($Ce^{-3x}$, falsch) oder die Stör­funktion $6$ direkt als $y_p$ übernehmen (Lösungs­ansatz vergessen — $y_p$ folgt aus der DGL, nicht aus der rechten Seite).`,
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
    blueprint: {
      prerequisites: [],
      concepts: [
        { id: 'dgl-def',         title: 'DGL: Gleichung, in der Funktion und ihre Ableitungen vorkommen',                       dependsOn: [] },
        { id: 'dgl-ordnung',     title: 'Ordnung = höchste vorkommende Ableitung',                                                dependsOn: ['dgl-def'] },
        { id: 'dgl-linear',      title: 'Linear $\\iff$ $y$ und Ableitungen nur in 1. Potenz, keine Produkte $y\\cdot y\'$',     dependsOn: ['dgl-def'] },
        { id: 'dgl-homogen',     title: 'Homogen $\\iff$ rechte Seite $=0$; sonst inhomogen',                                     dependsOn: ['dgl-def'] },
        { id: 'awp',             title: 'Anfangswertproblem = DGL + Anfangsbedingung → eindeutige Lösung',                       dependsOn: ['dgl-def'] },
        { id: 'ode-vs-pde',      title: 'Gewöhnlich (ODE: 1 unabh. Variable) vs. partiell (PDE)',                                 dependsOn: ['dgl-def'] },
      ],
      subGoalConcepts: {
        0: ['dgl-ordnung'],
        1: ['dgl-linear'],
        2: ['dgl-homogen'],
        3: ['awp'],
        4: ['ode-vs-pde'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['dgl-ordnung'],          qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dgl-ordnung'],          qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['dgl-ordnung'],          qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dgl-ordnung'],          qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['dgl-ordnung'],          qty: 1 },
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['dgl-linear'],           qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dgl-linear'],           qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['dgl-linear'],           qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dgl-linear'],           qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['dgl-linear'],           qty: 1 },
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['dgl-homogen'],          qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dgl-homogen'],          qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['dgl-homogen'],          qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dgl-homogen'],          qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['dgl-homogen', 'dgl-linear'], qty: 1 },
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['awp'],                  qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['awp'],                  qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['awp'],                  qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['awp'],                  qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['awp'],                  qty: 1 },
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['ode-vs-pde'],           qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['ode-vs-pde'],           qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['ode-vs-pde'],           qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['ode-vs-pde'],           qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['ode-vs-pde'],           qty: 1 },
      ],
    },
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

**Homogen vs. inhomogen** (lineare DGL):
Standardform $y^{(n)} + p_{n-1}(x)\\,y^{(n-1)} + \\ldots + p_0(x)\\,y = q(x)$:
- $q(x) \\equiv 0$ → **homogen** (z. B. $y' + 3y = 0$).
- $q(x) \\not\\equiv 0$ → **inhomogen** (z. B. $y' + 3y = \\sin x$, $q(x)=\\sin x$).

Für homogene lineare DGL gilt das *Superpositionsprinzip*: Linearkombinationen von Lösungen sind wieder Lösungen.

**Anfangswertproblem (AWP):**
DGL + Anfangsbedingung(en), z.B.:
$$y' = 2y, \\quad y(0) = 3$$
Die DGL allein hat unendlich viele Lösungen ($y = Ce^{2x}$ für jedes $C$). Die Anfangsbedingung wählt genau eine aus ($C = 3$).

**Gewöhnlich (ODE) vs. partiell (PDE):**
- **ODE** (*ordinary*): gesuchte Funktion hängt von **einer** unabh. Variablen ab, z. B. $y(x)$. Ableitungen mit $\\frac{d}{dx}$. Beispiel: $y'' + \\omega^2 y = 0$.
- **PDE** (*partial*): gesuchte Funktion hängt von **mehreren** unabh. Variablen ab, z. B. $u(x, t)$. Ableitungen mit $\\frac{\\partial}{\\partial x}$, $\\frac{\\partial}{\\partial t}$. Beispiel: Wärmeleitung $\\frac{\\partial u}{\\partial t} = \\alpha\\,\\frac{\\partial^2 u}{\\partial x^2}$.

| Kriterium | ODE | PDE |
|---|---|---|
| Unabh. Variablen | 1 ($x$, $t$, …) | $\\geq 2$ ($x$ und $t$ etc.) |
| Ableitungs­operator | $\\frac{d}{dx}$ | $\\frac{\\partial}{\\partial x}$, $\\frac{\\partial}{\\partial t}$ |
| Beispiel | $y' + 2y = 0$ | $u_t = \\alpha\\,u_{xx}$ |`,
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
    blueprint: {
      prerequisites: [
        { lessonId: 'dgl-1-1', concepts: ['dgl-def', 'awp'] },
      ],
      concepts: [
        { id: 'tdv-erkennen',  title: 'Anwendbarkeit: $y\'=f(x)\\,g(y)$ — Produkt aus reiner $x$- und reiner $y$-Funktion',     dependsOn: [] },
        { id: 'tdv-trennen',   title: 'Trennung: $dy/g(y)=f(x)\\,dx$ sauber sortieren',                                          dependsOn: ['tdv-erkennen'] },
        { id: 'tdv-integrieren', title: 'Beide Seiten integrieren, $C$ nur einmal ansetzen',                                      dependsOn: ['tdv-trennen'] },
        { id: 'tdv-awp',       title: 'Anfangsbedingung $y(x_0)=y_0$ → $C$ bestimmen, vor Umformen nach $y$',                   dependsOn: ['tdv-integrieren'] },
        { id: 'tdv-betrag',    title: 'Betragsstriche bei $\\int 1/y\\,dy=\\ln|y|$ + Fallunterscheidung',                        dependsOn: ['tdv-integrieren'] },
      ],
      subGoalConcepts: {
        0: ['tdv-erkennen'],
        1: ['tdv-trennen'],
        2: ['tdv-integrieren'],
        3: ['tdv-awp'],
        4: ['tdv-betrag'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['tdv-erkennen'],          qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tdv-erkennen'],          qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['tdv-erkennen'],          qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tdv-erkennen'],          qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['tdv-erkennen'],          qty: 1 },
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['tdv-trennen'],           qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tdv-trennen'],           qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['tdv-trennen'],           qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tdv-trennen'],           qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'sorting',         uses: ['tdv-trennen', 'tdv-integrieren'], qty: 1 },
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['tdv-integrieren'],       qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tdv-integrieren'],       qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['tdv-integrieren'],       qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tdv-integrieren'],       qty: 1, note: '$C$ doppelt angesetzt' },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['tdv-integrieren'],       qty: 1 },
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['tdv-awp'],               qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tdv-awp'],               qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['tdv-awp', 'tdv-integrieren'], qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tdv-awp'],               qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['tdv-awp'],               qty: 1 },
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['tdv-betrag'],            qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tdv-betrag'],            qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['tdv-betrag'],            qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tdv-betrag'],            qty: 1, note: 'Betragsstriche vergessen' },
        { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['tdv-betrag'],            qty: 1 },
      ],
    },
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
        id: 'dgl-1-2-s2', type: 'explanation-formal', title: 'Trennung der Variablen — Regeln und Beispiel',
        content: `**Anwendbarkeitsbedingung:** Die rechte Seite muss als Produkt einer reinen $x$-Funktion und einer reinen $y$-Funktion schreibbar sein:
$$\\frac{dy}{dx} = f(x)\\cdot g(y)$$

**Vier-Schritte-Rezept:**

| Schritt | Formel | Beispiel: $y' = 2ty$, $y(0)=5$ |
|---|---|---|
| 1. Trennen | $\\dfrac{dy}{g(y)} = f(x)\\,dx$ | $\\dfrac{dy}{y} = 2t\\,dt$ |
| 2. Integrieren | $\\int \\dfrac{dy}{g(y)} = \\int f(x)\\,dx + C$ | $\\ln\\lvert y\\rvert = t^2 + C_1$ |
| 3. Auflösen nach $y$ | $y(x) = \\ldots$ | $y = C\\,e^{t^2}$ |
| 4. Anfangsbedingung | $y(x_0) = y_0 \\Rightarrow C$ | $y(0) = C = 5 \\Rightarrow y(t) = 5\\,e^{t^2}$ |

**Wichtige Stamm­funktion mit Beträgen:**
$$\\int \\frac{dy}{y} = \\ln\\lvert y\\rvert + C$$
Beträge nötig, weil $\\ln$ ohne Beträge nur für $y > 0$ definiert wäre. Beim Auflösen wird daraus
$$y = \\pm e^{C_1}\\,e^{f(x)\\text{-Anteil}} = C\\,e^{f(x)\\text{-Anteil}}, \\quad C \\in \\mathbb{R}\\setminus\\{0\\}.$$

**Konstantenpolitik:** Beim unbestimmten Integrieren beider Seiten entstehen formal $C_1$ (links) und $C_2$ (rechts). In der Praxis fasst man sie zu **einer** Konstante auf der rechten Seite zusammen: $C := C_2 - C_1$.`,
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
    blueprint: {
      prerequisites: [
        { lessonId: 'dgl-1-1', concepts: ['dgl-linear', 'dgl-homogen', 'awp'] },
        { lessonId: 'dgl-1-2', concepts: ['tdv-trennen'] },
      ],
      concepts: [
        { id: 'lin1-standardform',  title: 'Standardform: $y\'+p(x)y=q(x)$',                                             dependsOn: [] },
        { id: 'lin1-mu',            title: 'Integrierender Faktor $\\mu(x)=e^{\\int p(x)dx}$',                            dependsOn: ['lin1-standardform'] },
        { id: 'lin1-formel',        title: 'Lösungsformel $y=(1/\\mu)[\\int\\mu\\cdot q\\,dx+C]$',                         dependsOn: ['lin1-mu'] },
        { id: 'lin1-vdk',           title: 'Alternative: Variation der Konstanten (homogen + partikulär)',                dependsOn: ['lin1-standardform'] },
        { id: 'lin1-yh',            title: 'Homogene Lösung $y_h=Ce^{-\\int p\\,dx}$',                                     dependsOn: ['lin1-standardform'] },
        { id: 'lin1-rc',            title: 'Anwendung RC-Kreis: $\\dot U+U/RC=U_0/RC$',                                    dependsOn: ['lin1-formel'] },
      ],
      subGoalConcepts: {
        0: ['lin1-standardform'],
        1: ['lin1-mu'],
        2: ['lin1-formel'],
        3: ['lin1-vdk'],
        4: ['lin1-yh'],
        5: ['lin1-rc'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['lin1-standardform'],     qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-standardform'],     qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['lin1-standardform'],     qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-standardform'],     qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['lin1-standardform'],     qty: 1 },
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['lin1-mu'],               qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-mu'],               qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['lin1-mu'],               qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-mu'],               qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['lin1-mu'],               qty: 1 },
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['lin1-formel'],           qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-formel'],           qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['lin1-formel'],           qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-formel'],           qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['lin1-formel'],           qty: 1 },
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['lin1-vdk'],              qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-vdk'],              qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['lin1-vdk'],              qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-vdk'],              qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'sorting',         uses: ['lin1-vdk'],              qty: 1 },
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['lin1-yh'],               qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-yh'],               qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['lin1-yh'],               qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-yh'],               qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['lin1-yh'],               qty: 1 },
        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['lin1-rc'],               qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lin1-rc'],               qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['lin1-rc'],               qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lin1-rc'],               qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['lin1-rc'],               qty: 1 },
      ],
    },
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

Dabei ist $Ce^{-2x}$ die **homogene Lösung** und $\\frac{1}{3}e^x$ die **partikuläre Lösung**.

**Homogene Lösung allgemein:**
$$y_h(x) = C \\cdot e^{-\\int p(x)\\,dx}$$
Sie löst $y' + p(x)\\,y = 0$ und enthält die freie Konstante $C$ (Schritt 1 der Variation der Konstanten).

**Variation der Konstanten (alternative Methode):** Statt des integrierenden Faktors kann man $y_p$ über den Ansatz $y_p(x) = C(x)\\cdot u(x)$ mit $u(x) = e^{-\\int p\\,dx}$ bestimmen. Einsetzen liefert
$$C'(x) = q(x)/u(x) \\quad\\Rightarrow\\quad C(x) = \\int q(x)/u(x)\\,dx.$$
Dann ist $y = y_h + y_p = C\\,u(x) + C(x)\\,u(x)$.

**Anwendung RC-Kreis:** Beim Aufladen eines Konden­sators über einen Widerstand $R$ an einer Spannungs­quelle $U_0$ gilt
$$\\dot U + \\frac{U}{RC} = \\frac{U_0}{RC}.$$
Mit $\\tau := RC$ (Zeit­konstante, Einheit Sekunden) und AB $U(0)=0$:
$$U(t) = U_0\\,(1 - e^{-t/\\tau}).$$
Beim *Entladen* ($U_0 = 0$, $U(0) = U_0$) folgt $U(t) = U_0\\,e^{-t/\\tau}$, Halbwertszeit $t_{1/2} = \\tau\\,\\ln 2 \\approx 0{,}693\\,\\tau$.`,
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
    blueprint: {
      prerequisites: [
        { lessonId: 'dgl-1-1', concepts: ['dgl-ordnung', 'dgl-linear', 'dgl-homogen'] },
      ],
      concepts: [
        { id: 'char-gleichung', title: 'Ansatz $y=e^{\\lambda x}$ → char. Gleichung $a\\lambda^2+b\\lambda+c=0$',                  dependsOn: [] },
        { id: 'fall-d-pos',     title: 'D>0 (zwei reelle Wurzeln): $y=C_1 e^{\\lambda_1 x}+C_2 e^{\\lambda_2 x}$',                  dependsOn: ['char-gleichung'] },
        { id: 'fall-d-null',    title: 'D=0 (Doppelwurzel): $y=(C_1+C_2 x)e^{\\lambda x}$',                                          dependsOn: ['char-gleichung'] },
        { id: 'fall-d-neg',     title: 'D<0 (komplex $\\alpha\\pm i\\beta$): $y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$',  dependsOn: ['char-gleichung'] },
        { id: 'daempfung',      title: 'Dämpfung: $\\alpha<0$ abklingend, $\\alpha=0$ ungedämpft, $\\alpha>0$ instabil',             dependsOn: ['fall-d-neg'] },
        { id: 'feder-masse',    title: 'Feder-Masse: $m\\ddot x+d\\dot x+kx=0$, $\\omega_0=\\sqrt{k/m}$',                            dependsOn: ['fall-d-neg'] },
      ],
      subGoalConcepts: {
        0: ['char-gleichung'],
        1: ['fall-d-pos'],
        2: ['fall-d-null'],
        3: ['fall-d-neg'],
        4: ['daempfung'],
        5: ['feder-masse'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['char-gleichung'],          qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['char-gleichung'],          qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['char-gleichung'],          qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['char-gleichung'],          qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['char-gleichung'],          qty: 1 },
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['fall-d-pos'],              qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fall-d-pos'],              qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['fall-d-pos', 'char-gleichung'], qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fall-d-pos'],              qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['fall-d-pos'],              qty: 1 },
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['fall-d-null'],             qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fall-d-null'],             qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['fall-d-null'],             qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fall-d-null'],             qty: 1, note: 'Doppelwurzel-Faktor $x$ vergessen' },
        { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['fall-d-null'],             qty: 1 },
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['fall-d-neg'],              qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fall-d-neg'],              qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['fall-d-neg'],              qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fall-d-neg'],              qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['fall-d-neg'],              qty: 1 },
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['daempfung'],               qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['daempfung'],               qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['daempfung'],               qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['daempfung'],               qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['daempfung', 'fall-d-neg'], qty: 1 },
        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['feder-masse'],             qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['feder-masse'],             qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['feder-masse'],             qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['feder-masse'],             qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['feder-masse'],             qty: 1 },
      ],
    },
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
