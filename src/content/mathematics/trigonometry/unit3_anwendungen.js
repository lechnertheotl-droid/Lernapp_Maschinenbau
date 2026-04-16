// ── Unit 3: Anwendungen und Identitäten ──────────────────────────────────────

export const exercises_u3 = {
  // ───────────── Lektion 3-1: Additionstheoreme ─────────────
  'ex-trig-3-1-a': {
    id: 'ex-trig-3-1-a', lessonId: 'trig-3-1', type: 'multiple-choice',
    question: '$\\sin(\\alpha + \\beta) = $?',
    options: [
      '$\\sin(\\alpha) + \\sin(\\beta)$',
      '$\\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$',
      '$\\sin(\\alpha)\\sin(\\beta) + \\cos(\\alpha)\\cos(\\beta)$',
      '$\\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Sinus ist *nicht* linear: $\\sin(\\alpha + \\beta) \\neq \\sin\\alpha + \\sin\\beta$. Das Additionstheorem muss ausgeschrieben werden.

**Regel:** $\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$.

**Merkhilfe:** "SinCos + CosSin" — die Kreuzform. Das Pluszeichen bleibt.

**Am Einheitskreis heißt das:** Wenn du einen Punkt erst um $\\alpha$, dann um $\\beta$ drehst, lassen sich die neuen Koordinaten mit dem Additionstheorem durch die alten ausdrücken (Drehmatrix!).

**Probe:** Setze $\\beta = 0$: $\\sin(\\alpha + 0) = \\sin\\alpha \\cdot 1 + \\cos\\alpha \\cdot 0 = \\sin\\alpha$ ✓.

**Typischer Fehler:** $\\sin(\\alpha + \\beta) = \\sin\\alpha + \\sin\\beta$ — klassischer Linearitäts-Irrtum. Gegenbeispiel: $\\sin(30° + 30°) = \\sin(60°) = \\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$, aber $\\sin(30°) + \\sin(30°) = 1$.`,
    hints: [
      'Sinus ist *nicht* linear, $\\sin(\\alpha+\\beta) \\neq \\sin\\alpha + \\sin\\beta$.',
      'Formel: Kreuzform mit sin·cos + cos·sin.',
      'Taschenrechner im richtigen Modus (DEG oder RAD) bei Probe: z.B. $\\sin(75°)$.',
    ],
  },
  'ex-trig-3-1-b': {
    id: 'ex-trig-3-1-b', lessonId: 'trig-3-1', type: 'multiple-choice',
    question: '$\\cos(\\alpha + \\beta) = $?',
    options: [
      '$\\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$',
      '$\\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)$',
      '$\\cos(\\alpha) + \\cos(\\beta)$',
      '$\\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Zweites Additionstheorem.

**Regel:** $\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)$.

**Merkhilfe:** "CosCos − SinSin" — bei cos ist das Vorzeichen **umgekehrt** zum Winkel: bei $+$ im Winkel steht $-$ im Term.

**Probe:** Setze $\\alpha = \\beta = 30°$: $\\cos(60°) = \\cos^{2}(30°) - \\sin^{2}(30°) = \\dfrac{3}{4} - \\dfrac{1}{4} = \\dfrac{1}{2}$ ✓.

**Am Einheitskreis heißt das:** Das Theorem kann aus der Drehmatrix hergeleitet werden. Dreht man den Punkt $(\\cos\\alpha, \\sin\\alpha)$ um weitere $\\beta$, ist die neue x-Koordinate genau $\\cos(\\alpha+\\beta)$.

**Typischer Fehler:** Das Vorzeichen $+$ statt $-$ setzen — führt zu einem falschen Wert für jedes Testbeispiel.`,
    hints: [
      'cos-Theorem: CosCos ... SinSin — welches Vorzeichen?',
      'Merkregel: bei $\\cos(\\alpha+\\beta)$ steht $-$, bei $\\cos(\\alpha-\\beta)$ steht $+$.',
      'Probe mit $\\alpha = \\beta = 30°$: $\\cos(60°) = \\dfrac{1}{2}$ — stimmt das mit deiner Formel?',
    ],
  },
  'ex-trig-3-1-mastery': {
    id: 'ex-trig-3-1-mastery', lessonId: 'trig-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne $\\sin(75°) = \\sin(45° + 30°)$:',
    options: ['$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2} + 1}{2}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Additionstheorem $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.

**Rechnung:** Mit $\\alpha = 45°$, $\\beta = 30°$:
$$\\sin(75°) = \\sin(45°)\\cos(30°) + \\cos(45°)\\sin(30°)$$
$$= \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2}$$
$$= \\dfrac{\\sqrt{6}}{4} + \\dfrac{\\sqrt{2}}{4} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}.$$

**Probe (Taschenrechner, DEG-Modus):** $\\sin(75°) \\approx 0{,}9659$. Und $\\dfrac{\\sqrt{6} + \\sqrt{2}}{4} \\approx \\dfrac{2{,}449 + 1{,}414}{4} \\approx 0{,}9659$ ✓.

**Am Einheitskreis heißt das:** $75°$ ist ein "krummer" Winkel, aber als Summe zweier Standardwinkel ausdrückbar — damit wird der Funktionswert exakt bestimmbar.

**Typischer Fehler:** Minuszeichen ($\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$) wählen — das ist $\\sin(15°)$ bzw. $\\cos(75°)$, nicht $\\sin(75°)$.`,
    hints: [
      'Welche Formel? $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
      'Grundwerte: $\\sin(45°) = \\cos(45°) = \\dfrac{\\sqrt{2}}{2}$, $\\sin(30°) = \\dfrac{1}{2}$, $\\cos(30°) = \\dfrac{\\sqrt{3}}{2}$.',
      'Achte auf das Pluszeichen. Taschenrechner im richtigen Modus (DEG oder RAD) bei der Probe.',
    ],
  },

  // ───────────── Lektion 3-2: Doppelwinkel & Pythagoras ─────────────
  'ex-trig-3-2-a': {
    id: 'ex-trig-3-2-a', lessonId: 'trig-3-2', type: 'multiple-choice',
    question: '$\\sin(2\\alpha) = $?',
    options: ['$2\\sin(\\alpha)$', '$\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha)$', '$2\\sin(\\alpha)\\cos(\\alpha)$', '$\\sin(\\alpha)\\cos(\\alpha)$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Spezialfall des Additionstheorems mit $\\beta = \\alpha$.

**Herleitung:** $\\sin(2\\alpha) = \\sin(\\alpha + \\alpha) = \\sin\\alpha\\cos\\alpha + \\cos\\alpha\\sin\\alpha = 2\\sin\\alpha\\cos\\alpha$.

**Regel:** $\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$.

**Probe:** Setze $\\alpha = 30°$: $\\sin(60°) = 2 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2}$ ✓.

**Am Einheitskreis heißt das:** Eine Verdopplung des Winkels produziert eine neue y-Koordinate, die als Produkt der alten Koordinaten ausgedrückt werden kann.

**Typischer Fehler:** $\\sin(2\\alpha) = 2\\sin(\\alpha)$ — klassischer Linearitäts-Irrtum. Gegenbeispiel: $\\sin(60°) = \\dfrac{\\sqrt{3}}{2}$, aber $2\\sin(30°) = 1$.`,
    hints: [
      'Setze $\\beta = \\alpha$ im Additionstheorem für $\\sin(\\alpha+\\beta)$ ein.',
      'Formel: $\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$.',
      'Probe mit $\\alpha = 30°$: stimmt $\\sin(60°) = 2 \\cdot \\sin(30°) \\cdot \\cos(30°)$?',
    ],
  },
  'ex-trig-3-2-b': {
    id: 'ex-trig-3-2-b', lessonId: 'trig-3-2', type: 'multiple-choice',
    question: '$\\cos(2\\alpha) = $?',
    options: ['$2\\cos(\\alpha)$', '$\\cos^{2}(\\alpha) - \\sin^{2}(\\alpha)$', '$2\\cos^{2}(\\alpha)$', '$1 - \\sin^{2}(\\alpha)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Additionstheorem $\\cos(\\alpha + \\beta)$ mit $\\beta = \\alpha$.

**Herleitung:** $\\cos(2\\alpha) = \\cos(\\alpha)\\cos(\\alpha) - \\sin(\\alpha)\\sin(\\alpha) = \\cos^{2}(\\alpha) - \\sin^{2}(\\alpha)$.

**Alternativformen** (mit $\\sin^{2} + \\cos^{2} = 1$):
$$\\cos(2\\alpha) = 2\\cos^{2}(\\alpha) - 1 = 1 - 2\\sin^{2}(\\alpha).$$

**Probe:** $\\alpha = 30°$: $\\cos(60°) = \\cos^{2}(30°) - \\sin^{2}(30°) = \\dfrac{3}{4} - \\dfrac{1}{4} = \\dfrac{1}{2}$ ✓.

**Am Einheitskreis heißt das:** Die drei Formen sind am Einheitskreis äquivalent — nützlich, um je nach Situation nur $\\sin$ oder nur $\\cos$ im Ausdruck zu haben.

**Typischer Fehler:** Vorzeichen vertauschen und $\\sin^{2} - \\cos^{2}$ schreiben — damit käme $-\\dfrac{1}{2}$ statt $\\dfrac{1}{2}$ heraus.`,
    hints: [
      'Additionstheorem mit $\\beta = \\alpha$: $\\cos(\\alpha)\\cos(\\alpha) - \\sin(\\alpha)\\sin(\\alpha)$.',
      'Formel: $\\cos(2\\alpha) = \\cos^{2}(\\alpha) - \\sin^{2}(\\alpha)$.',
      'Weitere Formen: $= 2\\cos^{2}\\alpha - 1 = 1 - 2\\sin^{2}\\alpha$ (mit $\\sin^{2}+\\cos^{2}=1$).',
    ],
  },
  'ex-trig-3-2-mastery': {
    id: 'ex-trig-3-2-mastery', lessonId: 'trig-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Vereinfache: $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha)$',
    options: ['$2$', '$0$', '$1$', '$\\sin(2\\alpha)$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Pythagoreische Identität.

**Regel:** $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1$ für **alle** $\\alpha$.

**Herleitung am Einheitskreis:** Der Punkt $P = (\\cos\\alpha, \\sin\\alpha)$ liegt auf dem Einheitskreis mit Radius $1$. Die Kreisgleichung ist $x^{2} + y^{2} = 1$. Setze ein: $\\cos^{2}\\alpha + \\sin^{2}\\alpha = 1$.

**Am Einheitskreis heißt das:** Die Identität *ist* der Satz des Pythagoras, angewendet auf das rechtwinklige Dreieck mit Hypotenuse $= 1$ (Radius), Katheten $= \\cos\\alpha$ und $\\sin\\alpha$.

**Probe:** $\\alpha = 30°$: $\\dfrac{1}{4} + \\dfrac{3}{4} = 1$ ✓. $\\alpha = 45°$: $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$ ✓.

**Typischer Fehler:** $\\sin^{2}\\alpha + \\cos^{2}\\alpha = \\sin(2\\alpha)$ — unterschiedliche Formeln! $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ (Produkt, nicht Summe von Quadraten).`,
    hints: [
      'Grundidentität der Trigonometrie — kannst du sie auswendig?',
      'Am Einheitskreis: $P = (\\cos\\alpha, \\sin\\alpha)$ liegt auf Kreis mit Gleichung $x^{2}+y^{2}=1$.',
      'Setze $P$ in die Kreisgleichung ein.',
    ],
  },

  // ───────────── Lektion 3-3: Technische Anwendungen ─────────────
  'ex-trig-3-3-a': {
    id: 'ex-trig-3-3-a', lessonId: 'trig-3-3', type: 'multiple-choice',
    question: 'Eine Schwingung $x(t) = A \\cdot \\sin(\\omega t + \\varphi)$. Was beschreibt $A$?',
    options: ['Die Frequenz', 'Die Amplitude (maximale Auslenkung)', 'Die Phasenverschiebung', 'Die Kreisfrequenz'],
    correctIndex: 1,
    explanation: `**Ansatz:** Schwingungsformel verstehen.

**Regel:** In $x(t) = A \\cdot \\sin(\\omega t + \\varphi)$ ist:
- $A$ = **Amplitude** (maximale Auslenkung), Einheit wie $x$ (z.B. m)
- $\\omega$ = **Kreisfrequenz** in rad/s
- $\\varphi$ = **Phasenverschiebung** in rad (oder Grad)

**Warum Amplitude?** Da $|\\sin| \\leq 1$, gilt $|x(t)| \\leq A$. $A$ ist der *Vorfaktor*, der den Sinuswert (zwischen $-1$ und $+1$) auf die echte Auslenkung skaliert.

**Am Einheitskreis heißt das:** Die Schwingung $\\sin(\\omega t)$ entsteht, wenn sich ein Punkt mit Winkelgeschwindigkeit $\\omega$ auf einem Kreis mit Radius $A$ bewegt und man nur die y-Koordinate betrachtet.

**Typischer Fehler:** $A$ mit Frequenz oder Periode verwechseln — Amplitude ist die **Höhe** der Welle, nicht ihre Dauer.`,
    hints: [
      'Was bedeutet "Amplitude"? Skizze einer Sinuswelle mit Markierung.',
      '$|\\sin| \\leq 1$, also ist $|A \\sin(\\ldots)| \\leq A$.',
      '$A$ skaliert die Schwankung der Sinusfunktion.',
    ],
  },
  'ex-trig-3-3-b': {
    id: 'ex-trig-3-3-b', lessonId: 'trig-3-3', type: 'multiple-choice',
    question: 'Eine Kraft $F = 100$ N wirkt unter Winkel $30°$ zur Horizontalen. Welche horizontale Komponente $F_{x}$ hat sie?',
    options: ['$50$ N', '$86{,}6$ N', '$100$ N', '$57{,}7$ N'],
    correctIndex: 1,
    explanation: `**Ansatz:** Kräftezerlegung: horizontale Komponente mit Kosinus, vertikale mit Sinus.

**Regel:** $F_{x} = F \\cdot \\cos(\\alpha)$, $F_{y} = F \\cdot \\sin(\\alpha)$.

**Rechnung:** $F_{x} = 100 \\text{ N} \\cdot \\cos(30°) = 100 \\cdot \\dfrac{\\sqrt{3}}{2} \\approx 100 \\cdot 0{,}866 = 86{,}6$ N.

**Am Einheitskreis heißt das:** Der Kraftvektor zeigt in Richtung $(\\cos\\alpha, \\sin\\alpha)$. Skaliere mit $F$, um die Komponenten $(F\\cos\\alpha, F\\sin\\alpha)$ zu erhalten.

**Probe:** Mit Pythagoras: $F_{x}^{2} + F_{y}^{2} = (86{,}6)^{2} + (50)^{2} \\approx 7500 + 2500 = 10000 = 100^{2}$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen und $50$ N angeben (das wäre $F_{y}$). Oder Taschenrechner im RAD-Modus. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: Vektor mit $30°$ zur Horizontalen.',
      'Formel: $F_{x} = F \\cdot \\cos(\\alpha)$, $F_{y} = F \\cdot \\sin(\\alpha)$.',
      '$\\cos(30°) = \\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$. Taschenrechner im richtigen Modus!',
    ],
  },
  'ex-trig-3-3-mastery': {
    id: 'ex-trig-3-3-mastery', lessonId: 'trig-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche vertikale Komponente $F_{y}$ hat eine Kraft $F = 200$ N unter $60°$ zur Horizontalen?',
    options: ['$100$ N', '$141$ N', '$173$ N', '$200$ N'],
    correctIndex: 2,
    explanation: `**Ansatz:** Vertikale Komponente mit Sinus.

**Regel:** $F_{y} = F \\cdot \\sin(\\alpha)$.

**Rechnung:** $F_{y} = 200 \\text{ N} \\cdot \\sin(60°) = 200 \\cdot \\dfrac{\\sqrt{3}}{2} = 100\\sqrt{3} \\approx 100 \\cdot 1{,}732 \\approx 173$ N.

**Am Einheitskreis heißt das:** Bei $60°$ ist der y-Anteil größer als der x-Anteil — der Vektor zeigt mehr nach oben als zur Seite.

**Probe:** $F_{x} = 200 \\cos(60°) = 100$ N. Pythagoras: $100^{2} + 173^{2} \\approx 10000 + 30000 = 40000 = 200^{2}$ ✓.

**Typischer Fehler:** $\\cos$ statt $\\sin$ verwenden und $100$ N angeben. Bei großen Winkeln ($> 45°$) überwiegt der y-Anteil — das dient als schnelle Plausibilitätsprüfung. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $60°$ steil zur Horizontalen.',
      'Formel: $F_{y} = F \\cdot \\sin(\\alpha)$.',
      '$\\sin(60°) = \\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$. Taschenrechner im richtigen Modus!',
    ],
  },

  // ───────────── Lektion 3-4: Inverse Funktionen ─────────────
  'ex-trig-3-4-a': {
    id: 'ex-trig-3-4-a', lessonId: 'trig-3-4', type: 'multiple-choice',
    question: '$\\arcsin(1/2) = $?',
    options: ['$30°$', '$45°$', '$60°$', '$90°$'],
    correctIndex: 0,
    explanation: `**Ansatz:** $\\arcsin$ ist die Umkehrfunktion von $\\sin$. Gesucht: der Winkel im Hauptast $[-90°, 90°]$, dessen Sinus $\\dfrac{1}{2}$ ist.

**Rechnung:** $\\sin(30°) = \\dfrac{1}{2}$, und $30°$ liegt in $[-90°, 90°]$. Also $\\arcsin(1/2) = 30°$.

**Am Einheitskreis heißt das:** Suche den Punkt auf dem Kreis mit y-Koordinate $= \\dfrac{1}{2}$ im rechten Halbkreis (x-Achse-nah). Der zugehörige Drehwinkel ist $30°$.

**Probe:** $\\sin(30°) = 0{,}5$ ✓ (Taschenrechner im DEG-Modus).

**Wichtig:** $\\arcsin$ liefert *nur* einen Winkel im Bereich $[-90°, 90°]$ — trotz periodischer Lösungen in der ursprünglichen Gleichung $\\sin(x) = \\dfrac{1}{2}$.

**Typischer Fehler:** $150°$ (auch eine Lösung von $\\sin(x) = \\dfrac{1}{2}$) als Antwort geben — aber das ist außerhalb des Hauptastes.`,
    hints: [
      '$\\arcsin$ ist die Umkehrfunktion — welcher Winkel hat $\\sin = \\dfrac{1}{2}$?',
      'Grundwert: $\\sin(30°) = \\dfrac{1}{2}$.',
      'Hauptast: $\\arcsin \\in [-90°, 90°]$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
  },
  'ex-trig-3-4-b': {
    id: 'ex-trig-3-4-b', lessonId: 'trig-3-4', type: 'multiple-choice',
    question: 'Der Wertebereich (Hauptast) von $\\arcsin$ ist:',
    options: ['$[0°, 360°]$', '$[0°, 180°]$', '$[-90°, 90°]$', '$[-180°, 180°]$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Eindeutigkeit der Umkehrfunktion sichern.

**Regel:** $\\arcsin: [-1, 1] \\to [-90°, 90°]$ (oder $[-\\pi/2, \\pi/2]$).

**Warum dieser Bereich?** Die $\\sin$-Funktion ist periodisch und nicht injektiv — zu jedem Wert gibt es unendlich viele Winkel. Um eine Umkehrfunktion zu definieren, schränkt man $\\sin$ auf einen Bereich ein, auf dem sie streng monoton wächst: $[-90°, 90°]$. Dort ist $\\sin$ bijektiv und $\\arcsin$ wohldefiniert.

**Am Einheitskreis heißt das:** $\\arcsin$ liefert den Winkel aus der **rechten Hälfte** des Einheitskreises (x-Achse-nah), wo $\\sin$ alle Werte von $-1$ bis $+1$ genau einmal annimmt.

**Typischer Fehler:** $[0°, 180°]$ wählen — das ist der Hauptast von $\\arccos$, nicht von $\\arcsin$.`,
    hints: [
      'Damit $\\arcsin$ eindeutig ist, muss $\\sin$ injektiv sein.',
      'In welchem Bereich ist $\\sin$ streng monoton wachsend?',
      'Am Einheitskreis heißt das: rechte Hälfte, von $-90°$ bis $+90°$.',
    ],
  },
  'ex-trig-3-4-mastery': {
    id: 'ex-trig-3-4-mastery', lessonId: 'trig-3-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\arccos(0) = $?',
    options: ['$0°$', '$45°$', '$90°$', '$180°$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\arccos$ ist die Umkehrfunktion von $\\cos$, Hauptast $[0°, 180°]$. Gesucht: Winkel mit $\\cos(\\alpha) = 0$.

**Rechnung:** $\\cos(90°) = 0$ und $90° \\in [0°, 180°]$. Also $\\arccos(0) = 90°$.

**Am Einheitskreis heißt das:** Suche den Punkt mit x-Koordinate $= 0$ im oberen Halbkreis ($\\arccos$-Hauptast). Das ist der Nordpol $(0, 1)$, gehört zu $90°$.

**Probe:** $\\cos(90°) = 0$ ✓ (Taschenrechner im DEG-Modus).

**Unterschied zu $\\arcsin$:** Hauptast ist $[0°, 180°]$ (obere Hälfte), nicht $[-90°, 90°]$ (rechte Hälfte). Bei der Inversen nicht verwechseln!

**Typischer Fehler:** $0°$ wählen — dort ist $\\cos(0°) = 1$, nicht $0$.`,
    hints: [
      'Welcher Winkel hat $\\cos = 0$? Skizze am Einheitskreis.',
      'Hauptast: $\\arccos \\in [0°, 180°]$ (oberer Halbkreis).',
      'Grundwert: $\\cos(90°) = 0$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
  },
}

const lessons_u3 = [
  {
    id: 'trig-3-1', unitId: 'trig-unit-3',
    title: 'Additionstheoreme',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Additionstheoreme für sin und cos kennen', 'Anwenden bei konkreten Winkeln'],
    prerequisites: ['trig-2-5'],
    nextLessonId: 'trig-3-2',
    steps: [
      {
        id: 'trig-3-1-s1', type: 'explanation-intuitive', title: 'Warum reichen Grundwerte nicht?',
        content: `Wir kennen $\\sin$ und $\\cos$ für $0°$, $30°$, $45°$, $60°$, $90°$. Aber was ist $\\sin(75°)$? Oder $\\cos(15°)$?

Die **Additionstheoreme** erlauben uns, $\\sin$ und $\\cos$ von Summen (und Differenzen) von Winkeln zu berechnen. So können wir z.B. $\\sin(75°) = \\sin(45° + 30°)$ aus bekannten Werten exakt berechnen.

**Am Einheitskreis heißt das:** Die Additionstheoreme beschreiben, was passiert, wenn zwei Drehungen hintereinander ausgeführt werden. Die Drehmatrix $R(\\alpha+\\beta) = R(\\alpha) \\cdot R(\\beta)$ liefert die Formeln direkt.`,
      },
      {
        id: 'trig-3-1-s2', type: 'explanation-formal', title: 'Die Formeln',
        content: `$$\\sin(\\alpha \\pm \\beta) = \\sin(\\alpha)\\cos(\\beta) \\pm \\cos(\\alpha)\\sin(\\beta)$$

$$\\cos(\\alpha \\pm \\beta) = \\cos(\\alpha)\\cos(\\beta) \\mp \\sin(\\alpha)\\sin(\\beta)$$

**Merkhilfe für cos:** Das Vorzeichen ist "umgekehrt" — bei $+$ im Winkel steht $-$ im Term, bei $-$ im Winkel steht $+$.

**Für tan:**
$$\\tan(\\alpha \\pm \\beta) = \\dfrac{\\tan(\\alpha) \\pm \\tan(\\beta)}{1 \\mp \\tan(\\alpha)\\tan(\\beta)}$$`,
      },
      { id: 'trig-3-1-s3', type: 'exercise', title: 'Aufgabe 1 — sin(α+β)', exerciseRef: 'ex-trig-3-1-a' },
      { id: 'trig-3-1-s4', type: 'exercise', title: 'Aufgabe 2 — cos(α+β)', exerciseRef: 'ex-trig-3-1-b' },
      { id: 'trig-3-1-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-3-1-mastery' },
    ],
  },
  {
    id: 'trig-3-2', unitId: 'trig-unit-3',
    title: 'Doppelwinkelformeln und Pythagoreischer Satz',
    order: 2, estimatedMinutes: 12,
    learningGoals: ['Doppelwinkelformeln anwenden', 'sin²+cos²=1 verstehen und nutzen'],
    prerequisites: ['trig-3-1'],
    nextLessonId: 'trig-3-3',
    steps: [
      {
        id: 'trig-3-2-s1', type: 'explanation-formal', title: 'Doppelwinkel',
        content: `Spezialfall der Additionstheoreme mit $\\alpha = \\beta$:

$$\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$$

$$\\cos(2\\alpha) = \\cos^{2}(\\alpha) - \\sin^{2}(\\alpha) = 2\\cos^{2}(\\alpha) - 1 = 1 - 2\\sin^{2}(\\alpha)$$

**Pythagoreische Identität** (aus dem Einheitskreis: $x^{2} + y^{2} = 1$):

$$\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1$$

**Am Einheitskreis heißt das:** Die Identität $\\sin^{2}+\\cos^{2}=1$ *ist* die Kreisgleichung. Sie gilt für *jeden* Winkel, weil der Punkt immer auf dem Kreis bleibt.

Diese Formel ist extrem nützlich zum Vereinfachen und Umformen — insbesondere lassen sich damit $\\sin^{2}$ und $\\cos^{2}$ ineinander umwandeln.`,
      },
      { id: 'trig-3-2-s2', type: 'exercise', title: 'Aufgabe 1 — sin(2α)', exerciseRef: 'ex-trig-3-2-a' },
      { id: 'trig-3-2-s3', type: 'exercise', title: 'Aufgabe 2 — cos(2α)', exerciseRef: 'ex-trig-3-2-b' },
      { id: 'trig-3-2-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-3-2-mastery' },
    ],
  },
  {
    id: 'trig-3-3', unitId: 'trig-unit-3',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Kräfte in Komponenten zerlegen', 'Schwingungen verstehen'],
    prerequisites: ['trig-2-5'],
    nextLessonId: 'trig-3-4',
    steps: [
      {
        id: 'trig-3-3-s1', type: 'explanation-intuitive', title: 'Wozu braucht man das im Maschinenbau?',
        content: `Trigonometrie ist das Handwerkszeug jedes Ingenieurs. Zwei wichtige Anwendungen:

**1. Kräftezerlegung:** Jede Kraft kann in eine horizontale und vertikale Komponente zerlegt werden:
$$F_{x} = F \\cdot \\cos(\\alpha), \\quad F_{y} = F \\cdot \\sin(\\alpha)$$

**2. Schwingungen:** Mechanische und elektrische Schwingungen werden durch Sinusfunktionen beschrieben:
$$x(t) = A \\cdot \\sin(\\omega t + \\varphi)$$

mit Amplitude $A$, Kreisfrequenz $\\omega$ und Phasenwinkel $\\varphi$.

**Am Einheitskreis heißt das:** Ein Kraftvektor mit Betrag $F$ unter dem Winkel $\\alpha$ zeigt in Richtung $(\\cos\\alpha, \\sin\\alpha) \\cdot F$. Eine Schwingung $A\\sin(\\omega t)$ ist die y-Koordinate eines Punkts, der mit Winkelgeschwindigkeit $\\omega$ auf einem Kreis mit Radius $A$ rotiert.`,
      },
      {
        id: 'trig-3-3-s2-viz', type: 'visualization', title: 'Sinusschwingung erkunden',
        visualizationId: 'sin-wave-explorer',
        params: { initialAmplitude: 1, initialFrequency: 1, initialPhase: 0 },
      },
      { id: 'trig-3-3-s2', type: 'exercise', title: 'Aufgabe 1 — Amplitude', exerciseRef: 'ex-trig-3-3-a' },
      { id: 'trig-3-3-s3', type: 'exercise', title: 'Aufgabe 2 — horizontale Kraftkomponente', exerciseRef: 'ex-trig-3-3-b' },
      { id: 'trig-3-3-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-3-3-mastery' },
    ],
  },
  {
    id: 'trig-3-4', unitId: 'trig-unit-3',
    title: 'Inverse Funktionen',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['arcsin, arccos, arctan kennen und anwenden', 'Definitionsbereiche verstehen'],
    prerequisites: ['trig-2-5'],
    nextLessonId: null,
    steps: [
      {
        id: 'trig-3-4-s1', type: 'explanation-intuitive', title: 'Die Umkehrfunktionen',
        content: `Manchmal kennt man den Sinuswert und sucht den Winkel. Dafür gibt es die **inversen Funktionen**:

- **$\\arcsin(x)$:** Gibt den Winkel $\\alpha$, für den $\\sin(\\alpha) = x$ gilt. Wertebereich: $[-90°, 90°]$
- **$\\arccos(x)$:** Gibt den Winkel $\\alpha$, für den $\\cos(\\alpha) = x$ gilt. Wertebereich: $[0°, 180°]$
- **$\\arctan(x)$:** Gibt den Winkel $\\alpha$, für den $\\tan(\\alpha) = x$ gilt. Wertebereich: $(-90°, 90°)$

**Wichtig:** Diese Funktionen geben nur einen Winkel zurück — den **Hauptwert**. Im Allgemeinen gibt es unendlich viele Lösungen (wegen Periodizität)! Beim Lösen von Gleichungen musst du zusätzliche Lösungen per Hand ergänzen.

**Am Einheitskreis heißt das:** $\\arcsin$ "scannt" die rechte Halbkreisseite (x-Achse-nah), $\\arccos$ die obere Halbkreisseite, $\\arctan$ die rechte Halbkreisseite ohne die Pole.

**Praxishinweis:** Taschenrechner im richtigen Modus (DEG oder RAD) — sonst liefert $\\arcsin(0{,}5)$ entweder $30°$ oder $\\pi/6 \\approx 0{,}524$.`,
      },
      { id: 'trig-3-4-s2', type: 'exercise', title: 'Aufgabe 1 — arcsin(1/2)', exerciseRef: 'ex-trig-3-4-a' },
      { id: 'trig-3-4-s3', type: 'exercise', title: 'Aufgabe 2 — Definitionsbereich arcsin', exerciseRef: 'ex-trig-3-4-b' },
      { id: 'trig-3-4-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-3-4-mastery' },
    ],
  },
]

export const unit3 = {
  id: 'trig-unit-3',
  title: 'Anwendungen und Identitäten',
  order: 3,
  description: 'Additionstheoreme, Doppelwinkel, technische Anwendungen und Umkehrfunktionen',
  lessons: lessons_u3,
  exercises: exercises_u3,
}
