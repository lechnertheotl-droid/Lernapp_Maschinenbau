// ── Differentialgleichungen Unit 2: Fortgeschrittene Methoden ────────────────

export const exercises_dgl_u2 = {
  'ex-dgl-2-1-a': {
    id: 'ex-dgl-2-1-a', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Bei der Variation der Konstanten ersetzt man die Konstante $C$ in der homogenen Lösung durch:',
    options: [
      'Eine andere Konstante $D$',
      'Eine Funktion $C(x)$',
      'Den Wert 0',
      'Die Störfunktion $q(x)$',
    ],
    correctIndex: 1,
    explanation: 'Die Idee: Man nimmt die homogene Lösung $y_h = Ce^{...}$ und ersetzt die Konstante $C$ durch eine **Funktion** $C(x)$. Dann bestimmt man $C(x)$ so, dass die inhomogene DGL erfüllt wird.',
    hints: ['Der Name sagt es: Die Konstante wird "variiert", also durch eine Funktion ersetzt.'],
  },
  'ex-dgl-2-1-b': {
    id: 'ex-dgl-2-1-b', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Für $y\' + p(x)y = q(x)$ mit homogener Lösung $y_h = Ce^{-P(x)}$ (wobei $P(x) = \\int p(x)\\,dx$) ergibt der Ansatz $y = C(x) \\cdot e^{-P(x)}$ die Bedingung:',
    options: [
      '$C\'(x) = q(x) \\cdot e^{P(x)}$',
      '$C\'(x) = q(x) \\cdot e^{-P(x)}$',
      '$C\'(x) = p(x) \\cdot q(x)$',
      '$C(x) = \\int q(x)\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'Einsetzen von $y = C(x) e^{-P(x)}$ in die DGL und Vereinfachen ergibt $C\'(x) = q(x) \\cdot e^{P(x)}$. Integration liefert $C(x) = \\int q(x) e^{P(x)}\\,dx$.',
    hints: ['Setze den Ansatz in die DGL ein und nutze, dass $e^{-P(x)}$ bereits die homogene DGL löst.'],
  },
  'ex-dgl-2-1-c': {
    id: 'ex-dgl-2-1-c', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Löse mit Variation der Konstanten: $y\' - y = e^{2x}$.',
    options: [
      '$y = Ce^x + e^{2x}$',
      '$y = Ce^x + \\frac{1}{2}e^{2x}$',
      '$y = Ce^{-x} + e^{2x}$',
      '$y = Ce^x + 2e^{2x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^x$. Ansatz: $y = C(x)e^x$. Einsetzen: $C\'(x)e^x = e^{2x} \\Rightarrow C\'(x) = e^x \\Rightarrow C(x) = e^x + \\tilde{C}$. Also $y = (\\tilde{C} + e^x)e^x = \\tilde{C}e^x + e^{2x}$.',
    hints: ['Homogene Lösung: $y_h = Ce^x$ (da $y\' - y = 0 \\Rightarrow y = Ce^x$).'],
  },
  'ex-dgl-2-1-mastery': {
    id: 'ex-dgl-2-1-mastery', lessonId: 'dgl-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $y\' + y = \\sin(x)$. Die partikuläre Lösung (ohne homogenen Anteil) ist:',
    options: [
      '$y_p = \\frac{1}{2}(\\sin x - \\cos x)$',
      '$y_p = \\sin x + \\cos x$',
      '$y_p = -\\cos x$',
      '$y_p = \\frac{1}{2}(\\sin x + \\cos x)$',
    ],
    correctIndex: 0,
    explanation: 'Mit Variation der Konstanten oder dem Ansatz $y_p = A\\sin x + B\\cos x$: Einsetzen ergibt $A = \\frac{1}{2}$, $B = -\\frac{1}{2}$. Also $y_p = \\frac{1}{2}(\\sin x - \\cos x)$.',
    hints: ['Ansatz: $y_p = A\\sin x + B\\cos x$. Einsetzen in die DGL und Koeffizientenvergleich.'],
  },

  'ex-dgl-2-2-a': {
    id: 'ex-dgl-2-2-a', lessonId: 'dgl-2-2', type: 'multiple-choice',
    question: 'Ein DGL-System 1. Ordnung hat die Form $\\vec{y}\' = A \\cdot \\vec{y}$. Was ist $A$?',
    options: [
      'Ein Skalar',
      'Ein Vektor',
      'Eine Matrix',
      'Eine DGL',
    ],
    correctIndex: 2,
    explanation: '$A$ ist eine quadratische **Matrix** (die Koeffizientenmatrix). $\\vec{y}$ ist ein Vektor von Funktionen. Das System koppelt mehrere DGL miteinander.',
    hints: ['$\\vec{y}$ ist ein Vektor, $\\vec{y}\'$ auch. Damit die Multiplikation aufgeht, muss $A$ eine Matrix sein.'],
  },
  'ex-dgl-2-2-b': {
    id: 'ex-dgl-2-2-b', lessonId: 'dgl-2-2', type: 'true-false',
    statement: 'Jede DGL höherer Ordnung lässt sich in ein System von DGL 1. Ordnung umschreiben.',
    correct: true,
    explanation: 'Ja! Trick: Substitution $y_1 = y$, $y_2 = y\'$, $y_3 = y\'\'$, ... Zum Beispiel wird $y\'\' + 3y\' + 2y = 0$ zu: $y_1\' = y_2$ und $y_2\' = -3y_2 - 2y_1$.',
    hints: ['Einführung neuer Variablen für jede Ableitung.'],
  },
  'ex-dgl-2-2-mastery': {
    id: 'ex-dgl-2-2-mastery', lessonId: 'dgl-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Die DGL $y\'\' + 5y\' + 6y = 0$ wird als System geschrieben mit $y_1 = y$, $y_2 = y\'$. Wie lautet $y_2\'$?',
    options: [
      '$y_2\' = -5y_1 - 6y_2$',
      '$y_2\' = -6y_1 - 5y_2$',
      '$y_2\' = 5y_1 + 6y_2$',
      '$y_2\' = y_1 + y_2$',
    ],
    correctIndex: 1,
    explanation: 'Aus $y\'\' + 5y\' + 6y = 0$ folgt $y\'\' = -5y\' - 6y$. Mit $y_2 = y\'$ und $y_1 = y$: $y_2\' = -6y_1 - 5y_2$.',
    hints: ['$y\'\' = -5y\' - 6y$ umschreiben mit den neuen Variablen.'],
  },

  'ex-dgl-2-3-a': {
    id: 'ex-dgl-2-3-a', lessonId: 'dgl-2-3', type: 'multiple-choice',
    question: 'Die Schwingungsgleichung eines Feder-Masse-Dämpfer-Systems lautet:',
    options: [
      '$mx\' + cx + k = F$',
      '$mx\'\' + cx\' + kx = F(t)$',
      '$mx\'\' = F(t)$',
      '$mx\' + kx\' = F(t)$',
    ],
    correctIndex: 1,
    explanation: '$m\\ddot{x} + c\\dot{x} + kx = F(t)$: $m$ = Masse, $c$ = Dämpfungskonstante, $k$ = Federkonstante, $F(t)$ = äußere Kraft. Trägheit + Dämpfung + Federkraft = äußere Kraft.',
    hints: ['Newton: Summe der Kräfte = Trägheitskraft. Federkraft $\\sim x$, Dämpfungskraft $\\sim \\dot{x}$.'],
  },
  'ex-dgl-2-3-b': {
    id: 'ex-dgl-2-3-b', lessonId: 'dgl-2-3', type: 'matching',
    question: 'Ordne die physikalischen Größen den mathematischen Termen in $mx\'\' + cx\' + kx = F(t)$ zu:',
    pairs: [
      { left: 'Trägheitskraft', right: '$mx\'\'$' },
      { left: 'Dämpfungskraft', right: '$cx\'$' },
      { left: 'Federkraft (Rückstellkraft)', right: '$kx$' },
      { left: 'Äußere Anregung', right: '$F(t)$' },
    ],
    explanation: '$mx\'\'$ ist die Trägheitskraft (Newton: $F = ma$), $cx\'$ die geschwindigkeitsproportionale Dämpfung, $kx$ die Federkraft (Hooke: $F = kx$), und $F(t)$ die äußere Kraft.',
    hints: ['Masse × Beschleunigung = $mx\'\'$. Dämpfung ist proportional zur Geschwindigkeit $x\'$.'],
  },
  'ex-dgl-2-3-c': {
    id: 'ex-dgl-2-3-c', lessonId: 'dgl-2-3', type: 'multiple-choice',
    question: 'Ein RC-Glied (Widerstand $R$, Kapazität $C$, Spannung $u_C$) wird durch welche DGL beschrieben?',
    options: [
      '$RC \\cdot u_C\' + u_C = U_0$',
      '$RC \\cdot u_C\'\' + u_C = U_0$',
      '$R \\cdot u_C\' + C \\cdot u_C = U_0$',
      '$u_C\' = RC \\cdot U_0$',
    ],
    correctIndex: 0,
    explanation: 'Die DGL des RC-Glieds ist $RC \\cdot \\dot{u}_C + u_C = U_0$ (lineare DGL 1. Ordnung). Die Zeitkonstante ist $\\tau = RC$. Lösung: $u_C(t) = U_0(1 - e^{-t/(RC)})$ für Aufladung.',
    hints: ['Kirchhoff: Spannung über R + Spannung über C = Quellspannung. $u_R = R \\cdot i = RC \\cdot u_C\'$.'],
  },
  'ex-dgl-2-3-mastery': {
    id: 'ex-dgl-2-3-mastery', lessonId: 'dgl-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein ungedämpftes Feder-Masse-System ($c = 0$): $m x\'\' + kx = 0$ mit $m = 2$ kg, $k = 8$ N/m. Die Eigenkreisfrequenz $\\omega_0$ ist:',
    options: [
      '$\\omega_0 = 4$ rad/s',
      '$\\omega_0 = 2$ rad/s',
      '$\\omega_0 = \\sqrt{2}$ rad/s',
      '$\\omega_0 = 16$ rad/s',
    ],
    correctIndex: 1,
    explanation: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{8/2} = \\sqrt{4} = 2$ rad/s. Die Lösung ist $x(t) = A\\cos(2t) + B\\sin(2t)$.',
    hints: ['Charakteristische Gleichung: $2\\lambda^2 + 8 = 0 \\Rightarrow \\lambda = \\pm 2i$. Also $\\omega_0 = 2$.'],
  },
}

const lessons_dgl_u2 = [
  {
    id: 'dgl-2-1', unitId: 'dgl-unit-2',
    title: 'Variation der Konstanten',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Methode der Variation der Konstanten verstehen', 'Partikuläre Lösung für inhomogene DGL bestimmen'],
    prerequisites: [],
    nextLessonId: 'dgl-2-2',
    steps: [
      {
        id: 'dgl-2-1-s1', type: 'explanation-intuitive', title: 'Die Idee',
        content: `Du kennst schon die homogene Lösung, z.B. $y_h = Ce^{-P(x)}$. Aber was, wenn die DGL eine **Störfunktion** $q(x)$ hat?

$$y' + p(x)y = q(x)$$

**Trick:** Nimm die homogene Lösung und ersetze die Konstante $C$ durch eine **unbekannte Funktion** $C(x)$:

$$y = C(x) \\cdot e^{-P(x)}$$

Dann setze diesen Ansatz in die DGL ein und bestimme $C(x)$.

**Warum funktioniert das?** Die homogene Lösung "weiß" schon, wie sich das System ohne Störung verhält. Durch die Variable Konstante $C(x)$ passt sich die Lösung an die Störung an — wie ein Auto, das seinen Kurs anpasst, wenn Seitenwind kommt.`,
      },
      {
        id: 'dgl-2-1-s2', type: 'explanation-formal', title: 'Rezept',
        content: `**Gegeben:** $y' + p(x)y = q(x)$

**Schritt 1:** Homogene Lösung: $y_h = Ce^{-P(x)}$ mit $P(x) = \\int p(x)\\,dx$

**Schritt 2:** Ansatz: $y = C(x) \\cdot e^{-P(x)}$

**Schritt 3:** Einsetzen: $C'(x) \\cdot e^{-P(x)} = q(x)$, also:
$$C'(x) = q(x) \\cdot e^{P(x)}$$

**Schritt 4:** Integrieren:
$$C(x) = \\int q(x) \\cdot e^{P(x)}\\,dx + \\tilde{C}$$

**Schritt 5:** Einsetzen in den Ansatz:
$$y = \\left(\\int q(x) e^{P(x)}\\,dx + \\tilde{C}\\right) \\cdot e^{-P(x)}$$

Das liefert die **allgemeine Lösung** (homogener + partikulärer Anteil).

**Vorteil** gegenüber dem integrierenden Faktor: Funktioniert auch für DGL 2. Ordnung (mit der Wronski-Determinante) und für DGL-Systeme.`,
      },
      { id: 'dgl-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-1-a' },
      { id: 'dgl-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-2-1-b' },
      { id: 'dgl-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-2-1-c' },
      { id: 'dgl-2-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-2-1-mastery' },
    ],
  },
  {
    id: 'dgl-2-2', unitId: 'dgl-unit-2',
    title: 'DGL-Systeme',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['DGL-Systeme in Matrixform schreiben', 'DGL höherer Ordnung als System umschreiben'],
    prerequisites: [],
    nextLessonId: 'dgl-2-3',
    steps: [
      {
        id: 'dgl-2-2-s1', type: 'explanation-intuitive', title: 'Mehrere DGL gleichzeitig',
        content: `In der Praxis treten oft **mehrere Größen gleichzeitig** auf, die sich gegenseitig beeinflussen:

- **Räuber-Beute-Modell:** Anzahl der Hasen beeinflusst die Anzahl der Füchse und umgekehrt
- **Gekoppelte Schwingungen:** Zwei Massen, die über Federn verbunden sind
- **Elektrische Netzwerke:** Ströme und Spannungen in verschiedenen Maschen

Mathematisch: Ein System von DGL der Form:

$$\\vec{y}' = A \\cdot \\vec{y}$$

wobei $\\vec{y} = \\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix}$ ein Vektor und $A$ eine Matrix ist.

**Wichtig:** Jede DGL höherer Ordnung lässt sich als System 1. Ordnung schreiben! Zum Beispiel wird aus $y'' + 3y' + 2y = 0$:

$$y_1 = y, \\quad y_2 = y'$$
$$y_1' = y_2$$
$$y_2' = -2y_1 - 3y_2$$`,
      },
      {
        id: 'dgl-2-2-s2', type: 'explanation-formal', title: 'Lösung über Eigenwerte',
        content: `**System:** $\\vec{y}' = A \\vec{y}$

**Lösungsansatz:** $\\vec{y} = \\vec{v} \\cdot e^{\\lambda t}$

Einsetzen ergibt das **Eigenwertproblem:**
$$A \\vec{v} = \\lambda \\vec{v}$$

Man bestimmt:
1. **Eigenwerte** $\\lambda_1, \\lambda_2, \\ldots$ aus $\\det(A - \\lambda I) = 0$
2. **Eigenvektoren** $\\vec{v}_1, \\vec{v}_2, \\ldots$
3. **Allgemeine Lösung:** $\\vec{y} = C_1 \\vec{v}_1 e^{\\lambda_1 t} + C_2 \\vec{v}_2 e^{\\lambda_2 t} + \\ldots$

**Beispiel:**
$$A = \\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix}$$
$\\det(A - \\lambda I) = \\lambda^2 + 3\\lambda + 2 = (\\lambda + 1)(\\lambda + 2) = 0$
$\\lambda_1 = -1$, $\\lambda_2 = -2$ — beide negativ, also stabiles System (alles klingt ab).`,
      },
      { id: 'dgl-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-2-a' },
      { id: 'dgl-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-2-2-b' },
      { id: 'dgl-2-2-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-2-2-mastery' },
    ],
  },
  {
    id: 'dgl-2-3', unitId: 'dgl-unit-2',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Feder-Masse-Dämpfer-System modellieren', 'RC-Glied als DGL beschreiben', 'Eigenfrequenz berechnen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-2-3-s1', type: 'explanation-intuitive', title: 'DGL in der Technik',
        content: `DGL sind das **wichtigste Werkzeug** im Maschinenbau und in der Elektrotechnik. Hier die zwei Klassiker:

**1. Feder-Masse-Dämpfer-System (Mechanik)**

Stell dir eine Masse an einer Feder vor, die in einer zähen Flüssigkeit schwingt:
- **Federkraft:** $F_F = -kx$ (Hooke'sches Gesetz, zieht zurück)
- **Dämpfungskraft:** $F_D = -c\\dot{x}$ (bremst, proportional zur Geschwindigkeit)
- **Äußere Kraft:** $F(t)$ (z.B. Erdbeben, Motor)

Newton ($F = ma$):
$$m\\ddot{x} + c\\dot{x} + kx = F(t)$$

**2. RC-Glied (Elektrotechnik)**

Ein Widerstand $R$ in Reihe mit einem Kondensator $C$:
- Kirchhoff: $u_R + u_C = U_0$
- $R \\cdot i + u_C = U_0$ mit $i = C \\cdot \\dot{u}_C$:

$$RC \\cdot \\dot{u}_C + u_C = U_0$$

Beide haben die **gleiche mathematische Struktur** — DGL sind universell!`,
      },
      {
        id: 'dgl-2-3-s2', type: 'explanation-formal', title: 'Schwingungsgleichung lösen',
        content: `**Schwingungsgleichung:** $m\\ddot{x} + c\\dot{x} + kx = 0$ (freie Schwingung)

**Kenngrößen:**
- Eigenkreisfrequenz: $\\omega_0 = \\sqrt{k/m}$
- Dämpfungsgrad: $D = \\frac{c}{2\\sqrt{km}}$
- Abklingkonstante: $\\delta = \\frac{c}{2m}$

**Drei Fälle:**

| Fall | Bedingung | Verhalten |
|------|-----------|-----------|
| Schwingfall | $D < 1$ | Gedämpfte Schwingung |
| Aperiodischer Grenzfall | $D = 1$ | Schnellstmögliches Abklingen ohne Schwingung |
| Kriechfall | $D > 1$ | Langsames Abklingen ohne Schwingung |

**Schwingfall ($D < 1$):**
$$x(t) = e^{-\\delta t}(C_1 \\cos(\\omega_d t) + C_2 \\sin(\\omega_d t))$$

mit der gedämpften Eigenfrequenz: $\\omega_d = \\omega_0 \\sqrt{1 - D^2}$

**RC-Glied:** $RC\\dot{u}_C + u_C = U_0$, Lösung: $u_C(t) = U_0(1 - e^{-t/\\tau})$ mit $\\tau = RC$.`,
      },
      {
        id: 'dgl-2-3-s3', type: 'visualization', title: 'Freie gedämpfte Schwingung',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.exp(-0.5 * x) * Math.cos(3 * x), color: '#3b82f6', label: 'x(t) — gedämpfte Schwingung' },
            { fn: (x) => Math.exp(-0.5 * x), color: '#9ca3af', label: 'Einhüllende e^(-0.5t)' },
            { fn: (x) => -Math.exp(-0.5 * x), color: '#9ca3af', label: '-Einhüllende' },
          ],
          xRange: [0, 12],
          yRange: [-1.2, 1.2],
          showGrid: true,
        },
      },
      { id: 'dgl-2-3-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-3-a' },
      { id: 'dgl-2-3-s5', type: 'exercise', title: 'Aufgabe 2 — Zuordnung', exerciseRef: 'ex-dgl-2-3-b' },
      { id: 'dgl-2-3-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-2-3-c' },
      { id: 'dgl-2-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-2-3-mastery' },
    ],
  },
]

export const dgl_unit2 = {
  id: 'dgl-unit-2',
  title: 'Fortgeschrittene Methoden',
  order: 2,
  description: 'Variation der Konstanten, DGL-Systeme, technische Anwendungen (Schwingungen, RC-Glied)',
  lessons: lessons_dgl_u2,
  exercises: exercises_dgl_u2,
}
