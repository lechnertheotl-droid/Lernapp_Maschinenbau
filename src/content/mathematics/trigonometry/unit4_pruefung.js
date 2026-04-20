// ── Unit 4: Prüfungsaufgaben Trigonometrie ────────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_u4 = {

  // ── Lektion 4-1: Prüfung Grundlagen ──────────────────────────────────────
  'ex-trig-4-1-a': {
    id: 'ex-trig-4-1-a', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: $\\sin^{2}(\\alpha) \\cdot (1 + \\cot^{2}(\\alpha))$',
    options: ['$\\sin^{2}(\\alpha)$', '$\\cos^{2}(\\alpha)$', '$1$', '$\\tan^{2}(\\alpha)$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\cot$ als Bruch ausdrücken und Pythagoreische Identität nutzen.

**Rechnung:**
$$\\cot(\\alpha) = \\dfrac{\\cos(\\alpha)}{\\sin(\\alpha)} \\Rightarrow \\cot^{2}(\\alpha) = \\dfrac{\\cos^{2}(\\alpha)}{\\sin^{2}(\\alpha)}$$
$$\\sin^{2}(\\alpha) \\cdot \\left(1 + \\dfrac{\\cos^{2}(\\alpha)}{\\sin^{2}(\\alpha)}\\right) = \\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1.$$

**Probe (Taschenrechner, DEG-Modus):** $\\alpha = 30°$: $\\sin^{2}(30°) \\cdot (1 + \\cot^{2}(30°)) = 0{,}25 \\cdot (1 + 3) = 1$ ✓.

**Am Einheitskreis heißt das:** Die Pythagoreische Identität $\\sin^{2}+\\cos^{2}=1$ ist der Schlüssel — jede trigonometrische Vereinfachung reduziert sich am Ende auf sie.

**Typischer Fehler:** $\\tan^{2}$ wählen — dazu müsste $\\sin^{2} + \\tan^{2}\\sin^{2}$ stehen, das wäre falsch umgeformt.`,
    hints: [
      'Welches Winkelmaß spielt keine Rolle — vereinfache symbolisch.',
      'Schreibe $\\cot(\\alpha) = \\dfrac{\\cos(\\alpha)}{\\sin(\\alpha)}$.',
      'Nutze $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1$.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast nur einen Teil der Klammer berücksichtigt. $\\sin^{2}\\alpha \\cdot 1 = \\sin^{2}\\alpha$ wäre richtig, wenn in der Klammer nur $1$ stünde. Der $\\cot^{2}$-Term liefert aber noch $\\cos^{2}\\alpha$ dazu, und die Summe ergibt $1$.',
      1: 'Du hast den $1$-Term aus der Klammer weggelassen. $\\sin^{2}\\alpha \\cdot \\cot^{2}\\alpha = \\sin^{2}\\alpha \\cdot \\dfrac{\\cos^{2}\\alpha}{\\sin^{2}\\alpha} = \\cos^{2}\\alpha$ — aber die $1$ in der Klammer liefert zusätzlich $\\sin^{2}\\alpha$, Summe $= 1$.',
      3: 'Das Ergebnis wäre nur richtig, wenn $\\cos^{2} = 0$ wäre (also $\\alpha = 90°, 270°, \\ldots$). Für beliebige $\\alpha$ ergibt die korrekte Umformung $\\sin^{2}\\alpha + \\cos^{2}\\alpha = 1$. Bei $\\alpha = 30°$: Ergebnis $= 1$, nicht $\\tan^{2}(30°) = 1/3$.',
    },
  },
  'ex-trig-4-1-b': {
    id: 'ex-trig-4-1-b', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Für welchen Winkel $\\alpha \\in [0°, 360°)$ gilt: $2 \\cdot \\sin(\\alpha) \\cdot \\cos(\\alpha) = 1$?',
    options: ['$\\alpha = 30°$ und $\\alpha = 150°$', '$\\alpha = 45°$ und $\\alpha = 225°$', '$\\alpha = 60°$ und $\\alpha = 300°$', '$\\alpha = 45°$ und $\\alpha = 135°$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Doppelwinkelformel erkennen.

**Schritt 1:** $2\\sin(\\alpha)\\cos(\\alpha) = \\sin(2\\alpha)$.

**Schritt 2:** $\\sin(2\\alpha) = 1 \\Rightarrow 2\\alpha = 90° + k \\cdot 360°$.

**Schritt 3:** $\\alpha = 45° + k \\cdot 180°$. Im Intervall $[0°, 360°)$: $k = 0 \\Rightarrow \\alpha = 45°$; $k = 1 \\Rightarrow \\alpha = 225°$.

**Probe:** $\\alpha = 45°$: $2 \\cdot \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{2}}{2} = 1$ ✓. $\\alpha = 225°$: $2 \\cdot \\left(-\\dfrac{\\sqrt{2}}{2}\\right) \\cdot \\left(-\\dfrac{\\sqrt{2}}{2}\\right) = 1$ ✓.

**Am Einheitskreis heißt das:** $\\sin(2\\alpha) = 1$ bedeutet, der "Doppelpunkt" $2\\alpha$ zeigt nach oben. Erste Lösung: $2\\alpha = 90°$ (also $\\alpha = 45°$), zweite: $2\\alpha = 90° + 360° = 450°$ (also $\\alpha = 225°$).

**Typischer Fehler:** Nur $\\alpha = 45°$ angeben und die zweite Lösung $225°$ (aus $k=1$) vergessen. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Erkenne die Doppelwinkelformel: $2\\sin\\alpha\\cos\\alpha = \\sin(2\\alpha)$.',
      '$\\sin(2\\alpha) = 1 \\Rightarrow 2\\alpha = 90° + k \\cdot 360°$, also $\\alpha = 45° + k \\cdot 180°$.',
      'Suche alle $\\alpha$ im Intervall $[0°, 360°)$.',
    ],
    wrongAnswerExplanations: {
      0: 'Probe scheitert: $2\\sin(30°)\\cos(30°) = 2 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2} \\neq 1$. Du hast nicht die Doppelwinkelformel erkannt. Richtig: $\\sin(2\\alpha) = 1 \\Rightarrow 2\\alpha = 90°$, also $\\alpha = 45°$ (und $225°$).',
      2: 'Probe scheitert: $2\\sin(60°)\\cos(60°) = 2 \\cdot \\dfrac{\\sqrt{3}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{3}}{2} \\neq 1$. Das Maximum von $\\sin(2\\alpha)$ ist $1$, erreicht bei $2\\alpha = 90°$ (also $\\alpha = 45°$), nicht bei $60°$.',
      3: '$135°$ ist keine Lösung: $\\sin(2 \\cdot 135°) = \\sin(270°) = -1 \\neq 1$. Du hast die Supplementärwinkel-Regel fälschlich angewendet. Richtig: $\\sin(2\\alpha) = 1$ hat nur Lösung $2\\alpha = 90° + k \\cdot 360°$ (keine $180°$-Supplementärwinkel, weil $\\sin$ bei $1$ *maximal* ist).',
    },
  },
  'ex-trig-4-1-c': {
    id: 'ex-trig-4-1-c', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Gleichung ist KEINE trigonometrische Identität?',
    options: [
      '$\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$',
      '$\\cos(2\\alpha) = 1 - 2\\sin^{2}(\\alpha)$',
      '$\\tan(\\alpha) = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)}$',
      '$\\sin(\\alpha + \\beta) = \\sin(\\alpha) + \\sin(\\beta)$',
    ],
    correctIndex: 3,
    explanation: `**Ansatz:** Jede Formel gegen die Standardidentitäten prüfen.

**Prüfung:**
- A: $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ — Doppelwinkelformel ✓
- B: $\\cos(2\\alpha) = 1 - 2\\sin^{2}\\alpha$ — Alternativform ✓
- C: $\\tan = \\dfrac{\\sin}{\\cos}$ — Definition ✓
- D: $\\sin(\\alpha+\\beta) = \\sin\\alpha + \\sin\\beta$ — **FALSCH**. Richtig: $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.

**Gegenbeispiel für D:** $\\sin(60° + 30°) = \\sin(90°) = 1$, aber $\\sin(60°) + \\sin(30°) = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2} \\approx 1{,}37 \\neq 1$.

**Am Einheitskreis heißt das:** Drehungen addieren sich nicht linear. Sinus misst eine Projektion — und Projektionen zweier getrennter Drehungen lassen sich nicht einfach summieren.

**Typischer Fehler:** Linearität annehmen. Sinus ist *niemals* linear — das ist der wichtigste Warnhinweis in jeder Prüfung.`,
    hints: [
      'Prüfe jede Formel auf Korrektheit — Linearität ist bei $\\sin$ und $\\cos$ FALSCH.',
      'Gegenbeispiel: $\\sin(60° + 30°) = \\sin(90°) = 1$. Stimmt das mit Option D überein?',
      'Richtige Formel: $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
    ],
    wrongAnswerExplanations: {
      0: '$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ ist korrekt (Doppelwinkelformel aus dem Additionstheorem mit $\\beta = \\alpha$). Du suchst die *falsche* Aussage — diese ist eine echte Identität.',
      1: '$\\cos(2\\alpha) = 1 - 2\\sin^{2}\\alpha$ ist korrekt (Alternativform der Doppelwinkelformel mit $\\cos^{2} = 1 - \\sin^{2}$). Du suchst die *falsche* Aussage — diese ist richtig.',
      2: '$\\tan = \\dfrac{\\sin}{\\cos}$ ist die Definition des Tangens, also trivial wahr. Du suchst die *falsche* Aussage — schau Option D an: der Linearitäts-Irrtum $\\sin(\\alpha+\\beta) = \\sin\\alpha + \\sin\\beta$ ist falsch.',
    },
  },
  'ex-trig-4-1-d': {
    id: 'ex-trig-4-1-d', lessonId: 'trig-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne: $\\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta)$ für $\\alpha = 75°$, $\\beta = 30°$.',
    options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$0$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Ausdrucksmuster als Additionstheorem erkennen.

**Schritt 1:** $\\cos(\\alpha)\\cos(\\beta) + \\sin(\\alpha)\\sin(\\beta) = \\cos(\\alpha - \\beta)$ (Additionstheorem für $\\cos(\\alpha - \\beta)$).

**Schritt 2:** $\\cos(75° - 30°) = \\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.

**Probe (Taschenrechner, DEG-Modus):**
$\\cos(75°)\\cos(30°) + \\sin(75°)\\sin(30°) \\approx 0{,}2588 \\cdot 0{,}8660 + 0{,}9659 \\cdot 0{,}5 \\approx 0{,}2241 + 0{,}4830 = 0{,}7071 \\approx \\dfrac{\\sqrt{2}}{2}$ ✓.

**Am Einheitskreis heißt das:** Der Ausdruck ist das Skalarprodukt zweier Einheitsvektoren unter den Winkeln $\\alpha$ und $\\beta$. Er misst den Kosinus des eingeschlossenen Winkels $\\alpha - \\beta$.

**Typischer Fehler:** Die Mustererkennung scheitern und alles einzeln ausrechnen — möglich, aber aufwändig. Oder falsches Vorzeichen bei $\\cos(\\alpha + \\beta)$ annehmen.`,
    hints: [
      'Welches Additionstheorem hat diese Struktur? $\\cos\\cdot\\cos + \\sin\\cdot\\sin$.',
      'Formel: $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.',
      'Setze $\\alpha - \\beta = 45°$ ein. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das wäre $\\cos(60°)$ oder $\\sin(30°)$. Du hast entweder das Additionstheorem falsch angewendet (evtl. $\\cos(\\alpha+\\beta) = \\cos(105°)$ statt $\\cos(\\alpha-\\beta) = \\cos(45°)$) oder den falschen Differenzwinkel gebildet. Richtig: $75° - 30° = 45°$, und $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.',
      2: 'Das wäre $\\cos(30°)$ oder $\\sin(60°)$. Du hast vermutlich $\\alpha - \\beta = 30°$ statt $45°$ gerechnet. Richtig: $\\alpha - \\beta = 75° - 30° = 45°$. Dann $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.',
      3: 'Das wäre $\\cos(90°)$, also $\\alpha - \\beta = 90°$ — hier aber $\\alpha - \\beta = 45°$. Du hast vermutlich das *Additionstheorem* statt des Subtraktionstheorems verwendet: $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ (mit $-$).',
    },
  },
  'ex-trig-4-1-mastery': {
    id: 'ex-trig-4-1-mastery', lessonId: 'trig-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: $\\sin(\\alpha) = \\cos(\\alpha)$ für $\\alpha \\in [0°, 360°)$',
    options: ['$\\alpha = 45°$', '$\\alpha = 45°$ und $\\alpha = 225°$', '$\\alpha = 45°$ und $\\alpha = 315°$', 'keine Lösung'],
    correctIndex: 1,
    explanation: `**Ansatz:** Gleichung in eine einzige trigonometrische Funktion umformen.

**Schritt 1:** $\\sin(\\alpha) = \\cos(\\alpha)$. Dividiere beide Seiten durch $\\cos(\\alpha)$ (erlaubt, wenn $\\cos\\alpha \\neq 0$):
$$\\tan(\\alpha) = 1.$$

**Schritt 2:** Hauptwert: $\\alpha_{0} = \\arctan(1) = 45°$. Periode von $\\tan$ ist $180°$, also alle Lösungen: $\\alpha = 45° + k \\cdot 180°$.

**Schritt 3:** Im Intervall $[0°, 360°)$: $k = 0 \\Rightarrow 45°$; $k = 1 \\Rightarrow 225°$.

**Probe:** $\\alpha = 45°$: $\\sin(45°) = \\cos(45°) = \\dfrac{\\sqrt{2}}{2}$ ✓. $\\alpha = 225°$: $\\sin(225°) = \\cos(225°) = -\\dfrac{\\sqrt{2}}{2}$ ✓.

**Am Einheitskreis heißt das:** $\\sin = \\cos$ bedeutet $y = x$ — die Winkelhalbierende. Sie schneidet den Einheitskreis im 1. Quadrant ($45°$) und im 3. Quadrant ($225°$).

**Typischer Fehler:** Nur $45°$ angeben (Hauptwert) und $225°$ vergessen. Oder durch $\\cos\\alpha$ teilen ohne Fallunterscheidung — hier unkritisch, weil $\\cos(45°) \\neq 0$ und $\\cos(225°) \\neq 0$. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze am Einheitskreis: wo gilt $y = x$?',
      'Dividiere durch $\\cos(\\alpha)$: $\\tan(\\alpha) = 1$.',
      '$\\tan$ hat Periode $180°$. Finde alle Lösungen in $[0°, 360°)$.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast nur den Hauptwert gefunden und die zweite Lösung vergessen. $\\tan$ hat Periode $180°$, also gibt es im Intervall $[0°, 360°)$ zwei Lösungen: $45°$ UND $225°$.',
      2: '$315°$ ist keine Lösung: $\\sin(315°) = -\\dfrac{\\sqrt{2}}{2}$, aber $\\cos(315°) = +\\dfrac{\\sqrt{2}}{2}$ — die sind entgegengesetzt gleich, also $\\sin \\neq \\cos$. Du hast vermutlich an $\\sin = -\\cos$ gedacht.',
      3: 'Es gibt Lösungen! $\\sin(\\alpha) = \\cos(\\alpha)$ gilt überall dort, wo die Winkelhalbierende $y = x$ den Einheitskreis schneidet — nämlich bei $45°$ (1. Q) und $225°$ (3. Q).',
    },
  },

  // ── Lektion 4-2: Prüfung Anwendung ───────────────────────────────────────
  'ex-trig-4-2-a': {
    id: 'ex-trig-4-2-a', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Mast ist $20$ m hoch. Der Schatten hat Länge $15$ m. Welchen Winkel $\\alpha$ bildet die Sonne mit dem Boden?',
    options: ['$\\alpha = \\arctan(3/4) \\approx 36{,}9°$', '$\\alpha = \\arctan(4/3) \\approx 53{,}1°$', '$\\alpha = \\arcsin(3/4) \\approx 48{,}6°$', '$\\alpha = \\arccos(3/4) \\approx 41{,}4°$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Rechtwinkliges Dreieck mit Mast (vertikal) und Schatten (horizontal) skizzieren. Der Sonnenstrahl bildet die Hypotenuse.

**Schritt 1 — Zuordnung:** Der Winkel $\\alpha$ zwischen Sonnenstrahl und Boden liegt am Schattenende. Vom $\\alpha$ aus gesehen ist der Mast die *Gegenkathete* ($G = 20$ m), der Schatten die *Ankathete* ($A = 15$ m).

**Schritt 2 — Formel:** $\\tan(\\alpha) = \\dfrac{G}{A} = \\dfrac{20}{15} = \\dfrac{4}{3}$.

**Schritt 3 — Umkehrfunktion:** $\\alpha = \\arctan(4/3) \\approx 53{,}13°$.

**Probe:** $\\tan(53{,}13°) \\approx 1{,}333 = 4/3$ ✓ (Taschenrechner, DEG-Modus).

**Am Einheitskreis heißt das:** $\\arctan(4/3)$ liefert den Winkel der Geraden vom Ursprung zum Punkt $(3, 4)$ (nicht normiert). Steigung $4/3 \\approx 1{,}33$ entspricht $\\approx 53°$.

**Typischer Fehler:** $\\arctan(3/4)$ — das wäre der Winkel zwischen Sonnenstrahl und Mast (nicht zum Boden). Immer *zeichnen* und Katheten eindeutig zuordnen! Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: Mast vertikal, Schatten horizontal, Sonnenstrahl als Hypotenuse.',
      'Formel: $\\tan(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\dfrac{\\text{Masthöhe}}{\\text{Schattenlänge}}$.',
      'Setze $G = 20$, $A = 15$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast Ankathete und Gegenkathete vertauscht. $\\arctan(3/4)$ wäre der Winkel zwischen Sonnenstrahl und *Mast* (nicht zum Boden) oder mit vertauschten Seiten. Vom Schattenende aus: Mast $= G = 20$ m (gegenüber), Schatten $= A = 15$ m (daneben). Also $\\tan(\\alpha) = 20/15 = 4/3$.',
      2: '$\\arcsin(3/4)$ wäre nur richtig, wenn der Mast durch die *Hypotenuse* (Sonnenstrahl-Länge) geteilt würde — aber die Hypotenuse kennst du gar nicht. Bei *zwei Katheten* (Mast + Schatten) nutzt man immer $\\tan$, nicht $\\sin$.',
      3: '$\\arccos(3/4)$ wäre $\\arccos(\\text{Schatten/Hypotenuse})$, aber die Hypotenuse ist nicht gegeben (müsste $\\sqrt{20^2 + 15^2} = 25$ sein). Bei zwei Katheten verwende $\\tan$, nicht $\\cos$. Außerdem hast du Zähler und Nenner vertauscht.',
    },
  },
  'ex-trig-4-2-b': {
    id: 'ex-trig-4-2-b', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Kraft $F = 500$ N wirkt unter $37°$ zur Horizontalen. Welche Komponenten $F_{x}$ und $F_{y}$ hat sie ($\\sin 37° \\approx 0{,}6$; $\\cos 37° \\approx 0{,}8$)?',
    options: ['$F_{x} = 400$ N, $F_{y} = 300$ N', '$F_{x} = 300$ N, $F_{y} = 400$ N', '$F_{x} = 500$ N, $F_{y} = 500$ N', '$F_{x} = 350$ N, $F_{y} = 350$ N'],
    correctIndex: 0,
    explanation: `**Ansatz:** Kräftezerlegung, horizontale Komponente mit Kosinus, vertikale mit Sinus.

**Schritt 1 — Formeln:** $F_{x} = F\\cos(\\alpha)$, $F_{y} = F\\sin(\\alpha)$.

**Schritt 2 — Rechnung:**
- $F_{x} = 500 \\cdot \\cos(37°) \\approx 500 \\cdot 0{,}8 = 400$ N.
- $F_{y} = 500 \\cdot \\sin(37°) \\approx 500 \\cdot 0{,}6 = 300$ N.

**Probe mit Pythagoras:** $\\sqrt{400^{2} + 300^{2}} = \\sqrt{250000} = 500$ N ✓ — das bekannte $3{-}4{-}5$-Dreieck, skaliert mit $100$.

**Am Einheitskreis heißt das:** Der Einheitsvektor bei $37°$ ist $(0{,}8,\\ 0{,}6)$. Der Kraftvektor ist $500 \\cdot (0{,}8,\\ 0{,}6) = (400,\\ 300)$ N.

**Merkwert:** Die Werte $\\sin 37° \\approx 0{,}6$, $\\cos 37° \\approx 0{,}8$ (und analog $\\sin 53° \\approx 0{,}8$, $\\cos 53° \\approx 0{,}8$) sind Prüfungsstandard — auswendig lernen!

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: Kraftvektor unter $37°$.',
      'Formeln: $F_{x} = F \\cos\\alpha$ (horizontal), $F_{y} = F \\sin\\alpha$ (vertikal).',
      'Merke: $\\sin 37° \\approx 0{,}6$, $\\cos 37° \\approx 0{,}8$ — das 3-4-5-Dreieck!',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast $\\sin$ und $\\cos$ vertauscht. $F_{x} = F\\cos(37°) = 500 \\cdot 0{,}8 = 400$ N (nicht $300$), und $F_{y} = F\\sin(37°) = 500 \\cdot 0{,}6 = 300$ N (nicht $400$). Merke: horizontal $\\to \\cos$, vertikal $\\to \\sin$.',
      2: 'Das ist doppelt die volle Kraft. Die Komponenten $F_{x}$ und $F_{y}$ sind immer *kleiner* als $F$ (weil $|\\sin|, |\\cos| \\leq 1$). Nur die Vektorsumme $\\sqrt{F_{x}^2 + F_{y}^2} = F = 500$ N.',
      3: 'Du hast beide Komponenten gleichgesetzt ($500 \\cdot \\dfrac{\\sqrt{2}}{2} \\approx 353$). Das gälte nur bei $\\alpha = 45°$, wo $\\sin = \\cos$. Bei $37°$ ist $\\cos > \\sin$, also $F_{x} > F_{y}$ ($400 > 300$).',
    },
  },
  'ex-trig-4-2-c': {
    id: 'ex-trig-4-2-c', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Schwingung $x(t) = 3 \\cdot \\sin(2t + \\pi/4)$ hat die Amplitude ... und die Kreisfrequenz ...',
    options: ['$A = 3$, $\\omega = 2$', '$A = 2$, $\\omega = 3$', '$A = 3$, $\\omega = \\pi/4$', '$A = 3$, $\\omega = 2t$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Standardform $x(t) = A \\sin(\\omega t + \\varphi)$ mit der gegebenen Gleichung vergleichen.

**Identifikation:**
- $A = 3$ (Vorfaktor vor dem Sinus)
- $\\omega = 2$ (Koeffizient von $t$ im Argument)
- $\\varphi = \\pi/4$ (Konstante im Argument)

**Am Einheitskreis heißt das:** Die Schwingung ist die y-Koordinate eines Punkts, der auf einem Kreis mit Radius $3$ mit Winkelgeschwindigkeit $\\omega = 2$ rad/s rotiert, wobei er bei $t = 0$ schon um $\\pi/4$ vorangekommen ist.

**Abgeleitete Größen:**
- Periode: $T = \\dfrac{2\\pi}{\\omega} = \\pi$ s
- Frequenz: $f = \\dfrac{1}{T} = \\dfrac{1}{\\pi}$ Hz

**Typischer Fehler:** $\\omega = \\pi/4$ wählen — das ist der Phasenwinkel $\\varphi$, nicht die Kreisfrequenz. Oder $\\omega = 2t$ — $\\omega$ ist eine *Konstante*, nicht eine Funktion von $t$.`,
    hints: [
      'Standardform: $x(t) = A \\cdot \\sin(\\omega t + \\varphi)$.',
      '$A$ ist der Vorfaktor vor $\\sin$, $\\omega$ der Faktor vor $t$ im Argument.',
      '$\\varphi = \\pi/4$ ist die Phase (Konstante im Argument), nicht $\\omega$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast $A$ und $\\omega$ vertauscht. In $3 \\cdot \\sin(2t + \\pi/4)$ steht $3$ als Vorfaktor *vor* dem Sinus (also $A = 3$), und $2$ als Koeffizient von $t$ *im Argument* (also $\\omega = 2$). Die Reihenfolge in der Formel $A\\sin(\\omega t + \\varphi)$ beachten.',
      2: '$\\pi/4$ ist der Phasenwinkel $\\varphi$ (die Konstante im Argument), nicht die Kreisfrequenz. $\\omega$ ist der Koeffizient *von $t$*, nicht die additive Konstante. Also $\\omega = 2$.',
      3: '$\\omega$ ist eine *Konstante* (Kreisfrequenz in rad/s), keine zeitabhängige Größe. Im Argument $\\omega t + \\varphi$ ist $t$ die Variable, $\\omega$ der konstante Vorfaktor. Aus $2t$ im Argument folgt $\\omega = 2$.',
    },
  },
  'ex-trig-4-2-d': {
    id: 'ex-trig-4-2-d', lessonId: 'trig-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Cosinus-Satz: In einem Dreieck gilt $a^{2} = b^{2} + c^{2} - 2bc\\cos(\\alpha)$. Für $\\alpha = 60°$, $b = c = 5$: wie groß ist $a$?',
    options: ['$a = 5$', '$a = 5\\sqrt{2}$', '$a = 5\\sqrt{3}$', '$a = 10$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Einsetzen in den Cosinus-Satz.

**Rechnung:**
$$a^{2} = 5^{2} + 5^{2} - 2 \\cdot 5 \\cdot 5 \\cdot \\cos(60°) = 25 + 25 - 50 \\cdot \\dfrac{1}{2} = 50 - 25 = 25.$$
$$a = \\sqrt{25} = 5.$$

**Am Einheitskreis heißt das:** Bei $\\alpha = 60°$ und $b = c$ entsteht ein gleichseitiges Dreieck — $a = b = c = 5$. Der Cosinus-Satz liefert das korrekt, weil $\\cos(60°) = \\dfrac{1}{2}$.

**Probe:** Alle drei Seiten $= 5$ und alle Winkel $= 60°$ — definitionsgemäß gleichseitig.

**Merke:** Der Cosinus-Satz ist eine Verallgemeinerung des Satzes von Pythagoras. Bei $\\alpha = 90°$ ist $\\cos(90°) = 0$, und die Formel reduziert sich auf $a^{2} = b^{2} + c^{2}$.

**Typischer Fehler:** $\\cos(60°) = \\dfrac{\\sqrt{3}}{2}$ einsetzen (das ist $\\sin(60°)$) — führt zu $a = 5\\sqrt{2 - \\sqrt{3}}$, nicht $5$. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Grundwert: $\\cos(60°) = \\dfrac{1}{2}$.',
      'Setze in $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$ ein.',
      'Wenn $\\alpha = 60°$ und $b = c$: gleichseitiges Dreieck, alle Seiten gleich.',
    ],
    wrongAnswerExplanations: {
      1: 'Das wäre das Ergebnis für $\\alpha = 90°$ (rechtwinkliges Dreieck, Satz von Pythagoras): $a^{2} = 25 + 25 = 50$, also $a = 5\\sqrt{2}$. Aber bei $\\alpha = 60°$ ist $\\cos(60°) = \\dfrac{1}{2} \\neq 0$, der Korrekturterm $-2bc\\cos\\alpha = -25$ bringt $a^2 = 25$, also $a = 5$.',
      2: 'Du hast $\\cos(60°) = \\dfrac{\\sqrt{3}}{2}$ angenommen (das ist aber $\\sin(60°)$) oder $\\cos(30°)$ verwendet. Richtig ist $\\cos(60°) = \\dfrac{1}{2}$. Damit ist $a^{2} = 50 - 50 \\cdot \\dfrac{1}{2} = 25$, also $a = 5$ (nicht $5\\sqrt{3}$).',
      3: 'Das wäre der Fall $\\cos(\\alpha) = -1$, also $\\alpha = 180°$ (Dreieck entartet zur Linie). Bei $\\alpha = 60°$ ist $\\cos(60°) = +\\dfrac{1}{2}$, und die Formel liefert $a^2 = 25$, also $a = 5$ (gleichseitiges Dreieck).',
    },
  },
  'ex-trig-4-2-mastery': {
    id: 'ex-trig-4-2-mastery', lessonId: 'trig-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Periode einer Schwingung $x(t) = A \\cdot \\sin(\\omega t)$ ist:',
    options: ['$T = \\omega$', '$T = \\dfrac{2\\pi}{\\omega}$', '$T = \\dfrac{\\omega}{2\\pi}$', '$T = \\dfrac{1}{\\omega}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Sinus hat Periode $2\\pi$ im Argument. Die Periode der Schwingung ist die Zeit, bis das Argument um $2\\pi$ gewachsen ist.

**Herleitung:** Nach einer Periode $T$ muss gelten:
$$\\omega \\cdot (t + T) = \\omega t + 2\\pi \\Rightarrow \\omega T = 2\\pi \\Rightarrow T = \\dfrac{2\\pi}{\\omega}.$$

**Einheitencheck:** $[\\omega] = $ rad/s. $[T] = \\dfrac{\\text{rad}}{\\text{rad/s}} = $ s ✓.

**Am Einheitskreis heißt das:** Der Punkt mit Winkelgeschwindigkeit $\\omega$ braucht Zeit $T = \\dfrac{2\\pi}{\\omega}$, um einmal rund zu laufen. Das ist exakt die Schwingungsperiode.

**Zusammenhang mit Frequenz:** $f = \\dfrac{1}{T} = \\dfrac{\\omega}{2\\pi}$. Bei $\\omega = 2\\pi \\cdot 50$ rad/s $\\Rightarrow f = 50$ Hz (Netzfrequenz).

**Typischer Fehler:** $T = \\omega$ — vergisst, dass $\\omega$ in rad/s ist und man die volle Runde $2\\pi$ braucht.`,
    hints: [
      'Wann wiederholt sich $\\sin(\\omega t)$? Wenn $\\omega t$ um $2\\pi$ wächst.',
      'Setze an: $\\omega T = 2\\pi$, löse nach $T$ auf.',
      'Einheitencheck: $\\omega$ in rad/s $\\Rightarrow T$ in s.',
    ],
    wrongAnswerExplanations: {
      0: 'Einheiten passen nicht: $[\\omega] = $ rad/s, aber $[T] = $ s. $T = \\omega$ vermischt Winkelgeschwindigkeit und Zeit. Richtig: $T = \\dfrac{2\\pi}{\\omega}$, dann $[T] = \\dfrac{\\text{rad}}{\\text{rad/s}} = $ s ✓.',
      2: 'Das ist die Frequenz $f = \\dfrac{\\omega}{2\\pi}$, nicht die Periode. Periode und Frequenz sind *Kehrwerte*: $T = \\dfrac{1}{f} = \\dfrac{2\\pi}{\\omega}$. Bruch falsch herum.',
      3: 'Das wäre richtig, wenn $\\omega$ in Hz (Umdrehungen/s) wäre — aber $\\omega$ ist in rad/s. Für die vollständige Drehung braucht man $2\\pi$ rad, nicht $1$ rad. Daher Faktor $2\\pi$: $T = \\dfrac{2\\pi}{\\omega}$.',
    },
  },

  // ── Lektion 4-3: Prüfungsaufgaben Einheitskreis & Gleichungen ─────────────
  'ex-trig-4-3-a': {
    id: 'ex-trig-4-3-a', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Wie viele Lösungen hat $\\sin(x) = 0{,}5$ im Intervall $[0, 4\\pi]$?',
    options: ['$1$', '$2$', '$4$', '$\\infty$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\sin$ ist periodisch mit Periode $2\\pi$ und nimmt jeden Wert $|y| < 1$ **zweimal** pro Periode an.

**Schritt 1 — Hauptwerte in $[0, 2\\pi]$:** $\\sin(x) = 0{,}5 \\Rightarrow x_{1} = \\dfrac{\\pi}{6}$ und $x_{2} = \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$ (Supplementärwinkel im 2. Quadrant).

**Schritt 2 — Weitere Periode $[2\\pi, 4\\pi]$:** Addiere $2\\pi$ zu jeder Lösung: $x_{3} = \\dfrac{13\\pi}{6}$, $x_{4} = \\dfrac{17\\pi}{6}$.

**Schritt 3 — Summe:** $4$ Lösungen im Intervall $[0, 4\\pi]$.

**Am Einheitskreis heißt das:** In jeder vollen Umdrehung ($2\\pi$) schneidet die waagerechte Linie $y = 0{,}5$ den Einheitskreis zweimal (einmal im 1., einmal im 2. Quadrant). In zwei Umdrehungen sind das $4$ Schnittpunkte.

**Typischer Fehler:** Nur die 2 Lösungen der ersten Periode zählen, oder den Hauptwert $\\arcsin(0{,}5) = \\pi/6$ als einzige Lösung nehmen.`,
    hints: [
      'Welches Winkelmaß? Radiant (erkennbar an $\\pi$). Periode von $\\sin$ ist $2\\pi$.',
      'In jeder Periode gibt es **zwei** Lösungen: $\\arcsin(0{,}5)$ und $\\pi - \\arcsin(0{,}5)$.',
      '$[0, 4\\pi]$ umfasst zwei volle Perioden.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast nur den Hauptwert $\\arcsin(0{,}5) = \\pi/6$ gezählt. Aber $\\sin(x) = 0{,}5$ hat zwei Lösungen pro Periode: $\\pi/6$ und $5\\pi/6$ (Supplementärwinkel). Im Intervall $[0, 4\\pi]$ (zwei Perioden) sind es insgesamt $4$.',
      1: 'Das ist die Anzahl in *einer* Periode $[0, 2\\pi]$. Aber das Intervall $[0, 4\\pi]$ umfasst *zwei* volle Perioden. Pro Periode 2 Lösungen, insgesamt $2 \\cdot 2 = 4$.',
      3: 'Nicht unendlich — das Intervall $[0, 4\\pi]$ ist begrenzt. Auf ganz $\\mathbb{R}$ gäbe es zwar unendlich viele Lösungen, aber hier nur die 4 in den zwei Perioden.',
    },
  },
  'ex-trig-4-3-b': {
    id: 'ex-trig-4-3-b', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welcher Wert hat $\\sin(-210°)$?',
    options: ['$-\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Symmetrie $\\sin(-\\alpha) = -\\sin(\\alpha)$ und Reduktionsformel anwenden.

**Schritt 1:** $\\sin(-210°) = -\\sin(210°)$ ($\\sin$ ist ungerade).

**Schritt 2:** $210° = 180° + 30°$. Im 3. Quadrant: $\\sin(210°) = -\\sin(30°) = -\\dfrac{1}{2}$.

**Schritt 3:** $\\sin(-210°) = -(-\\dfrac{1}{2}) = \\dfrac{1}{2}$.

**Alternativer Weg:** $-210° = -210° + 360° = 150°$. Also $\\sin(-210°) = \\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$.

**Am Einheitskreis heißt das:** $-210°$ (im Uhrzeigersinn) und $150°$ (gegen den Uhrzeigersinn) landen am *selben Punkt* im 2. Quadrant: $\\left(-\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$. Die y-Koordinate ist $\\dfrac{1}{2}$.

**Probe (Taschenrechner, DEG-Modus):** $\\sin(-210°) = 0{,}5$ ✓.

**Typischer Fehler:** Nur eine der zwei Regeln anwenden (z.B. ungerade Funktion vergessen) und $-\\dfrac{1}{2}$ angeben.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $-210°$ landet wo auf dem Einheitskreis?',
      'Oder: $\\sin(-210°) = \\sin(-210° + 360°) = \\sin(150°)$.',
      '$\\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Doppelter Fehler: falscher Betrag UND falsches Vorzeichen. $-210°$ entspricht $150°$ (addiere $360°$), und $\\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$ (nicht $\\dfrac{\\sqrt{3}}{2}$). Das Vorzeichen ist positiv, weil $150°$ im 2. Quadrant liegt.',
      1: 'Der Betrag stimmt nicht. $\\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$, nicht $\\dfrac{\\sqrt{3}}{2}$. Du hast vermutlich $\\sin$ und $\\cos$ verwechselt: $\\cos(30°) = \\dfrac{\\sqrt{3}}{2}$. Vorzeichen ist aber korrekt positiv.',
      3: 'Vorzeichen vergessen. $\\sin$ ist ungerade: $\\sin(-210°) = -\\sin(210°) = -(-\\dfrac{1}{2}) = +\\dfrac{1}{2}$. Zwei Minuszeichen heben sich auf. Oder einfacher: $-210° + 360° = 150°$ liegt im 2. Quadrant, wo $\\sin > 0$.',
    },
  },
  'ex-trig-4-3-c': {
    id: 'ex-trig-4-3-c', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\arctan(-1) = $?',
    options: ['$-45°$', '$135°$', '$225°$', '$315°$'],
    correctIndex: 0,
    explanation: `**Ansatz:** $\\arctan$ liefert Werte im Hauptast $(-90°, 90°)$.

**Rechnung:** $\\tan(-45°) = -1$ und $-45° \\in (-90°, 90°)$. Also $\\arctan(-1) = -45°$.

**Am Einheitskreis heißt das:** $\\arctan$ "scannt" nur die rechte Halbkreisseite (ohne Pole). Der Winkel $-45°$ entspricht der Richtung in den 4. Quadrant.

**Probe (Taschenrechner, DEG-Modus):** $\\tan(-45°) = -1$ ✓.

**Achtung bei Anwendungen:** In Gleichungen wie $\\tan(x) = -1$ gibt es zusätzliche Lösungen: $x = -45° + k \\cdot 180°$, also auch $x = 135°, 315°, \\ldots$. Aber $\\arctan$ liefert *nur* den Hauptwert $-45°$.

**Typischer Fehler:** $135°$ wählen — das ist auch eine Lösung von $\\tan(x) = -1$, aber nicht im Hauptast von $\\arctan$. Taschenrechner im richtigen Modus (DEG oder RAD)!`,
    hints: [
      'Welches Winkelmaß? Grad. Wertebereich von $\\arctan$: $(-90°, 90°)$.',
      'Grundwert: $\\tan(45°) = 1$. Was ist $\\tan(-45°)$?',
      'Vorzeichen beachten — $\\arctan$ von negativem Wert ist negativer Winkel.',
    ],
    wrongAnswerExplanations: {
      1: '$135°$ ist zwar eine Lösung der Gleichung $\\tan(x) = -1$ (im 2. Quadrant), aber *nicht* im Hauptast von $\\arctan$, der nur $(-90°, 90°)$ umfasst. $\\arctan$ liefert immer nur den Wert im Hauptast: $-45°$.',
      2: '$225°$ ist zwar eine Lösung der Gleichung $\\tan(x) = -1$ — moment: $\\tan(225°) = \\tan(45°) = +1$, nicht $-1$. Doppelfehler: falsches Vorzeichen UND außerhalb des Hauptastes. $\\arctan(-1) = -45°$.',
      3: '$315°$ ist zwar eine Lösung der Gleichung $\\tan(x) = -1$ (im 4. Quadrant, $315° = -45° + 360°$), aber nicht im Hauptast von $\\arctan$. Die Hauptast-Konvention verlangt $-90° < \\alpha < 90°$, also $-45°$.',
    },
  },
  'ex-trig-4-3-d': {
    id: 'ex-trig-4-3-d', lessonId: 'trig-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: $(\\sin(\\alpha) + \\cos(\\alpha))^{2} - 1$',
    options: ['$\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha)$', '$2\\sin(\\alpha)\\cos(\\alpha)$', '$2\\sin(\\alpha)\\cos(\\alpha) + 1$', '$0$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Binomische Formel und Pythagoreische Identität.

**Rechnung:**
$$(\\sin\\alpha + \\cos\\alpha)^{2} = \\sin^{2}\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^{2}\\alpha$$
$$= (\\sin^{2}\\alpha + \\cos^{2}\\alpha) + 2\\sin\\alpha\\cos\\alpha = 1 + 2\\sin\\alpha\\cos\\alpha.$$

**Minus $1$:** $(\\sin\\alpha + \\cos\\alpha)^{2} - 1 = 2\\sin\\alpha\\cos\\alpha = \\sin(2\\alpha)$.

**Am Einheitskreis heißt das:** Der Ausdruck ist äquivalent zu $\\sin(2\\alpha)$ — ein kompakter Weg, die Doppelwinkelformel zu "entdecken".

**Probe:** $\\alpha = 30°$: $(\\sin 30° + \\cos 30°)^{2} - 1 = (0{,}5 + 0{,}866)^{2} - 1 \\approx 1{,}866 - 1 = 0{,}866 = \\sin(60°)$ ✓.

**Typischer Fehler:** $\\sin^{2} + \\cos^{2}$ stehen lassen — ignoriert, dass dieser Ausdruck $= 1$ ist und dass die $-1$ am Ende dafür sorgt, dass nur der Mischterm übrig bleibt.`,
    hints: [
      'Binomische Formel: $(a + b)^{2} = a^{2} + 2ab + b^{2}$.',
      'Pythagoras: $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1$.',
      'Der Mischterm $2\\sin(\\alpha)\\cos(\\alpha)$ bleibt übrig — erkenne die Doppelwinkelformel.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast die $-1$ vergessen. $(\\sin\\alpha + \\cos\\alpha)^{2} = \\sin^{2}\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^{2}\\alpha = 1 + 2\\sin\\alpha\\cos\\alpha$. Die $-1$ am Ende zieht gerade den Pythagoras-Teil weg, übrig bleibt $2\\sin\\alpha\\cos\\alpha$.',
      2: 'Du hast die $-1$ nicht abgezogen. $(\\sin\\alpha + \\cos\\alpha)^{2} = 1 + 2\\sin\\alpha\\cos\\alpha$, und dann minus $1$ ergibt nur $2\\sin\\alpha\\cos\\alpha$. Die $+1$ in deiner Antwort hätte sich gerade weggekürzt.',
      3: 'Der Ausdruck ist nicht identisch $0$. Beispiel $\\alpha = 30°$: $(\\sin 30° + \\cos 30°)^{2} - 1 \\approx 1{,}866 - 1 = 0{,}866 \\neq 0$. Richtig: $2\\sin\\alpha\\cos\\alpha = \\sin(2\\alpha)$, und $\\sin(60°) \\approx 0{,}866$ ✓.',
    },
  },
  'ex-trig-4-3-mastery': {
    id: 'ex-trig-4-3-mastery', lessonId: 'trig-4-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\cos(75°)$ in exakter Form:',
    options: ['$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$', '$\\dfrac{\\sqrt{3} - 1}{2\\sqrt{2}}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Additionstheorem $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ mit $75° = 45° + 30°$.

**Rechnung:**
$$\\cos(75°) = \\cos(45° + 30°) = \\cos(45°)\\cos(30°) - \\sin(45°)\\sin(30°)$$
$$= \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6}}{4} - \\dfrac{\\sqrt{2}}{4} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}.$$

**Probe (Taschenrechner, DEG-Modus):** $\\cos(75°) \\approx 0{,}2588$. Und $\\dfrac{\\sqrt{6} - \\sqrt{2}}{4} \\approx \\dfrac{2{,}449 - 1{,}414}{4} \\approx 0{,}2588$ ✓.

**Am Einheitskreis heißt das:** Bei $75°$ liegt der Punkt fast oben auf dem Kreis — die x-Koordinate ($\\cos$) ist klein und positiv.

**Verwandte Formel:** $\\sin(75°) = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$ (mit Plus!). Zusammen: $\\sin^{2}(75°) + \\cos^{2}(75°) = \\dfrac{(\\sqrt{6}+\\sqrt{2})^{2} + (\\sqrt{6}-\\sqrt{2})^{2}}{16} = \\dfrac{16}{16} = 1$ ✓.

**Typischer Fehler:** Pluszeichen wählen (das ist $\\sin(75°)$, nicht $\\cos(75°)$). Merke: Bei $\\cos(\\alpha + \\beta)$ ist das Vorzeichen zwischen den Produkten *umgekehrt* zum Winkel-Vorzeichen.`,
    hints: [
      'Welches Winkelmaß? Grad. Zerlege: $75° = 45° + 30°$.',
      'Formel: $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ (beachte das Minus!).',
      'Grundwerte: $\\cos(45°) = \\sin(45°) = \\dfrac{\\sqrt{2}}{2}$, $\\cos(30°) = \\dfrac{\\sqrt{3}}{2}$, $\\sin(30°) = \\dfrac{1}{2}$.',
    ],
    wrongAnswerExplanations: {
      0: 'Falsches Vorzeichen. Das ist $\\sin(75°)$, nicht $\\cos(75°)$. Bei $\\cos(\\alpha + \\beta)$ steht zwischen den Produkten ein Minus: $\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$. Probe: $\\cos(75°) \\approx 0{,}26$, aber $\\dfrac{\\sqrt{6}+\\sqrt{2}}{4} \\approx 0{,}97$.',
      2: 'Vorzeichen vertauscht. $\\dfrac{\\sqrt{2} - \\sqrt{6}}{4} \\approx -0{,}26$ ist negativ — aber $\\cos(75°)$ liegt im 1. Quadrant und ist positiv (zwischen $0$ und $1$). Du hast Minuend und Subtrahend vertauscht. Richtig: $\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$.',
      3: 'Dieser Ausdruck ist zwar nummerisch gleich $\\dfrac{\\sqrt{6} - \\sqrt{2}}{4} \\approx 0{,}259$ (durch Rationalisierung), aber nicht die Standardform. Bei Prüfungen die rationalisierte Form wählen: $\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$.',
    },
  },
}

const lessons_u4 = [
  {
    id: 'trig-4-1', unitId: 'trig-unit-4',
    title: 'Prüfung: Identitäten & Gleichungen',
    order: 1, estimatedMinutes: 20,
    learningGoals: ['Trigonometrische Identitäten umformen', 'Gleichungen auf Prüfungsniveau lösen'],
    prerequisites: [],
    nextLessonId: 'trig-4-2',
    steps: [
      {
        id: 'trig-4-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Identitäten & Gleichungen',
        content: `**Prüfungsaufgaben Trigonometrie** folgen meist einem dieser Muster:

1. **Identitäten umformen** — Nutze $\\sin^{2}+\\cos^{2}=1$, Additionstheoreme, Doppelwinkel
2. **Gleichungen lösen** — Finde *alle* Lösungen im gegebenen Intervall
3. **Anwendungen** — Kräfte, Schwingungen, Dreiecksberechnung

**Strategie in 4 Schritten:**
1. **Skizze am Einheitskreis** — macht Vorzeichen und Quadranten sichtbar.
2. **Einheiten/Modus prüfen** — Taschenrechner im richtigen Modus (DEG oder RAD)? Winkelangabe in Grad oder Radiant?
3. **Bekannte Struktur erkennen** — $2\\sin\\alpha\\cos\\alpha$, $\\sin^{2}+\\cos^{2}$, Additionstheoreme.
4. **Alle Lösungen finden** — Periodizität berücksichtigen (sin/cos: $2\\pi$; tan: $\\pi$).

**Wichtigste Formeln für die Prüfung:**
- $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 1$ (Pythagoras)
- $\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$
- $\\cos(2\\alpha) = \\cos^{2}(\\alpha) - \\sin^{2}(\\alpha) = 2\\cos^{2}\\alpha - 1 = 1 - 2\\sin^{2}\\alpha$
- $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$
- $\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$
- $\\tan(\\alpha) = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, $\\cot(\\alpha) = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$

**Typische Fallen:**
- DEG/RAD-Verwechslung ($\\sin(30)$ vs. $\\sin(30°)$).
- Linearitäts-Irrtum: $\\sin(\\alpha+\\beta) \\neq \\sin\\alpha + \\sin\\beta$.
- Nur Hauptwert angeben und weitere Lösungen vergessen.`,
      },
      { id: 'trig-4-1-s2', type: 'exercise', title: 'Aufgabe 1 — Pythagoras-Vereinfachung', exerciseRef: 'ex-trig-4-1-a' },
      { id: 'trig-4-1-s3', type: 'exercise', title: 'Aufgabe 2 — Doppelwinkelgleichung', exerciseRef: 'ex-trig-4-1-b' },
      { id: 'trig-4-1-s4', type: 'exercise', title: 'Aufgabe 3 — Identitäten erkennen', exerciseRef: 'ex-trig-4-1-c' },
      { id: 'trig-4-1-s5', type: 'exercise', title: 'Aufgabe 4 — Musterrerkennung', exerciseRef: 'ex-trig-4-1-d' },
      { id: 'trig-4-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-4-1-mastery' },
    ],
  },
  {
    id: 'trig-4-2', unitId: 'trig-unit-4',
    title: 'Prüfung: Technische Anwendungen',
    order: 2, estimatedMinutes: 20,
    learningGoals: ['Prüfungsaufgaben zu Kräften und Schwingungen lösen'],
    prerequisites: [],
    nextLessonId: 'trig-4-3',
    steps: [
      {
        id: 'trig-4-2-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Technische Anwendungen',
        content: `In technischen Prüfungen kommen Trigonometrie-Aufgaben fast immer in diesen Formen:

**Strategie in 4 Schritten:**
1. **Skizze zeichnen** — Kräfte, Dreiecke, Vektoren maßstabsgerecht.
2. **Zuordnung Kathete/Hypotenuse** prüfen — welche Seite ist *gegenüber* vom Winkel?
3. **Richtige Funktion wählen** — SOH-CAH-TOA oder Kräftezerlegung.
4. **Einheiten und DEG/RAD prüfen** — Taschenrechner im richtigen Modus (DEG oder RAD)!

**Kräftezerlegung:**
$$F_{x} = F \\cdot \\cos(\\alpha), \\quad F_{y} = F \\cdot \\sin(\\alpha)$$

**Schwingungen:**
$$x(t) = A \\cdot \\sin(\\omega t + \\varphi), \\quad T = \\dfrac{2\\pi}{\\omega}, \\quad f = \\dfrac{1}{T}$$

**Cosinussatz** (allgemeine Dreiecke):
$$a^{2} = b^{2} + c^{2} - 2bc \\cdot \\cos(\\alpha)$$

**Sinussatz:**
$$\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma} = 2R$$

**Merkwerte für den 3-4-5:** $\\sin 37° \\approx 0{,}6$; $\\cos 37° \\approx 0{,}8$; $\\sin 53° \\approx 0{,}8$; $\\cos 53° \\approx 0{,}6$.

**Typische Fallen:**
- $\\sin$ und $\\cos$ vertauschen bei der Kräftezerlegung.
- Taschenrechner im RAD, Angabe in Grad.
- Arctan-Hauptwert ausgegeben, aber zweite Lösung vergessen.`,
      },
      {
        id: 'trig-4-2-s2', type: 'visualization', title: 'Kräftezerlegung',
        visualizationId: 'unit-circle',
        params: { showSine: true, showCosine: true, interactive: true, showLabels: true, initialAngle: 37 },
      },
      { id: 'trig-4-2-s3', type: 'exercise', title: 'Aufgabe 1 — Mast und Schatten', exerciseRef: 'ex-trig-4-2-a' },
      { id: 'trig-4-2-s4', type: 'exercise', title: 'Aufgabe 2 — Kraftzerlegung', exerciseRef: 'ex-trig-4-2-b' },
      { id: 'trig-4-2-s5', type: 'exercise', title: 'Aufgabe 3 — Schwingung', exerciseRef: 'ex-trig-4-2-c' },
      { id: 'trig-4-2-s6', type: 'exercise', title: 'Aufgabe 4 — Cosinussatz', exerciseRef: 'ex-trig-4-2-d' },
      { id: 'trig-4-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-4-2-mastery' },
    ],
  },
  {
    id: 'trig-4-3', unitId: 'trig-unit-4',
    title: 'Prüfung: Einheitskreis & Gleichungssysteme',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Lösungsmengen bestimmen', 'Komplexe Umformungen durchführen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'trig-4-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Gleichungen systematisch lösen',
        content: `**Strategie in 5 Schritten:**

1. **Einheitskreis-Skizze** — macht Lösungsbereiche und Quadranten sichtbar.
2. **Vereinfachen** mit Identitäten ($\\sin^{2}+\\cos^{2}=1$, Doppelwinkel, Additionstheoreme).
3. **In eine Funktion überführen** (z.B. durch $\\cos$ teilen, um $\\tan$ zu erzeugen).
4. **Hauptwinkel bestimmen** (arcsin/arccos/arctan) — Taschenrechner im richtigen Modus (DEG oder RAD)!
5. **Alle Lösungen finden** unter Berücksichtigung der Periodizität und Quadranten.

**Wichtig:** $\\sin(x) = a$ hat im Intervall $[0, 2\\pi]$ genau **zwei Lösungen** (für $|a| < 1$):
$$x_{1} = \\arcsin(a), \\quad x_{2} = \\pi - \\arcsin(a)$$

$\\cos(x) = a$:
$$x_{1} = \\arccos(a), \\quad x_{2} = 2\\pi - \\arccos(a)$$

$\\tan(x) = a$: **eine Lösung pro Periode** (Periode $\\pi$):
$$x_{k} = \\arctan(a) + k \\cdot \\pi$$

**Am Einheitskreis heißt das:**
- Waagrechte Linie $y = a$ schneidet den Kreis *zweimal* $\\Rightarrow$ $\\sin(x) = a$ hat zwei Lösungen.
- Senkrechte Linie $x = a$ schneidet den Kreis *zweimal* $\\Rightarrow$ $\\cos(x) = a$ hat zwei Lösungen.
- Ursprungsgerade mit Steigung $a$ schneidet den Kreis *zweimal*, aber beide Punkte liegen auf derselben Geraden $\\Rightarrow$ $\\tan$-Periode nur $\\pi$, eine Lösung pro Periode.

**Typische Fallen:**
- Nur Hauptwert nennen, zweite Lösung vergessen.
- DEG/RAD-Modus verwechseln.
- Beim Dividieren durch $\\cos$ Fälle $\\cos = 0$ nicht separat prüfen.`,
      },
      {
        id: 'trig-4-3-s2', type: 'visualization', title: 'Lösungen am Einheitskreis ablesen',
        visualizationId: 'unit-circle',
        params: { showSine: true, showCosine: false, interactive: true, showQuadrants: true, showLabels: true, initialAngle: 30 },
      },
      { id: 'trig-4-3-s3', type: 'exercise', title: 'Aufgabe 1 — Anzahl Lösungen', exerciseRef: 'ex-trig-4-3-a' },
      { id: 'trig-4-3-s4', type: 'exercise', title: 'Aufgabe 2 — negativer Winkel', exerciseRef: 'ex-trig-4-3-b' },
      { id: 'trig-4-3-s5', type: 'exercise', title: 'Aufgabe 3 — arctan', exerciseRef: 'ex-trig-4-3-c' },
      { id: 'trig-4-3-s6', type: 'exercise', title: 'Aufgabe 4 — Ausdruck vereinfachen', exerciseRef: 'ex-trig-4-3-d' },
      { id: 'trig-4-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-4-3-mastery' },
    ],
  },
]

export const unit4 = {
  id: 'trig-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Identitäten, Anwendungen, Gleichungen',
  lessons: lessons_u4,
  exercises: exercises_u4,
}
