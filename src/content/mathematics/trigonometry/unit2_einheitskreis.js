// ── Unit 2: Einheitskreis und Winkelfunktionen ────────────────────────────────

export const exercises_u2 = {
  // ───────────── Lektion 2-1: Der Einheitskreis ─────────────
  'ex-trig-2-1-a': {
    id: 'ex-trig-2-1-a', lessonId: 'trig-2-1', type: 'multiple-choice',
    question: 'Was ist der Radius des Einheitskreises?',
    options: ['$\\pi$', '$2$', '$1$', '$360$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Namensdefinition. "Einheit" bedeutet in der Mathematik $1$.

**Rechnung:** Der Einheitskreis ist der Kreis um den Ursprung mit Radius $r = 1$ in der $xy$-Ebene. Gleichung: $x^{2} + y^{2} = 1$. Mit $r = 1$ lassen sich $\\sin$ und $\\cos$ direkt als Koordinaten eines Punkts auf dem Kreis definieren — ohne Division durch den Radius.

**Probe:** Jeder Punkt auf dem Kreis hat die Form $(\\cos\\alpha, \\sin\\alpha)$, Distanz zum Ursprung $\\sqrt{\\cos^{2}\\alpha + \\sin^{2}\\alpha} = 1$ ✓.

**Typischer Fehler:** $2$ wählen, wenn man den Durchmesser statt des Radius meint.`,
    hints: [
      'Der Name verrät es: "Einheits"-Kreis.',
      'In der Mathematik ist "Einheit" gleich $1$.',
      'Kreisgleichung: $x^{2} + y^{2} = r^{2}$. Welches $r$?',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast $\\pi$ mit dem Radius verwechselt. $\\pi \\approx 3{,}14$ ist zwar eine Kreiszahl, beschreibt aber das Verhältnis von Umfang zu Durchmesser — nicht den Radius. Der Einheitskreis hat nach Definition Radius $r = 1$, Kreisgleichung $x^{2} + y^{2} = 1$.',
      1: 'Das ist der Durchmesser, nicht der Radius. Verwechsle beide nicht: Der Radius geht vom Mittelpunkt zum Rand, der Durchmesser geht komplett durch. Beim Einheitskreis gilt $r = 1$, also $d = 2r = 2$.',
      3: 'Du hast den Gradwert des vollen Kreises ($360°$) mit dem Radius verwechselt. $360°$ beschreibt den Winkelumfang, nicht die Länge. Der Radius des Einheitskreises ist dimensionslos und beträgt $r = 1$.',
    },
  },
  'ex-trig-2-1-b': {
    id: 'ex-trig-2-1-b', lessonId: 'trig-2-1', type: 'multiple-choice',
    question: 'Ein Punkt $P$ liegt auf dem Einheitskreis beim Winkel $\\alpha = 0°$. Seine Koordinaten sind:',
    options: ['$(0, 0)$', '$(0, 1)$', '$(1, 0)$', '$(1, 1)$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $P = (\\cos\\alpha, \\sin\\alpha)$, Winkelmaß vom positiven x-Achse-Strahl gegen den Uhrzeigersinn.

**Rechnung:** Bei $\\alpha = 0°$: $\\cos(0°) = 1$, $\\sin(0°) = 0$. Also $P = (1, 0)$.

**Am Einheitskreis heißt das:** Bei $\\alpha = 0°$ liegt der Punkt ganz rechts am Kreis, auf der positiven x-Achse. Noch keine Drehung.

**Probe:** Überprüfe Kreisgleichung: $1^{2} + 0^{2} = 1$ ✓.

**Typischer Fehler:** $(0, 0)$ wählen — das ist der Ursprung, nicht ein Punkt *auf* dem Kreis.`,
    hints: [
      'Skizze: wo landet der Strahl bei $\\alpha = 0°$?',
      'Formel: $P = (\\cos\\alpha, \\sin\\alpha)$. Was sind $\\cos(0°)$ und $\\sin(0°)$?',
      'Der Punkt liegt *auf* dem Kreis mit Radius $1$, also $\\neq (0,0)$.',
    ],
    wrongAnswerExplanations: {
      0: '$(0, 0)$ ist der Ursprung (Mittelpunkt des Kreises), nicht ein Punkt auf dem Kreis. Für jeden Punkt auf dem Einheitskreis muss $x^{2} + y^{2} = 1$ gelten — für $(0,0)$ ergibt das aber $0 \\neq 1$.',
      1: 'Du hast $\\sin$ und $\\cos$ verwechselt. $(0, 1)$ ist der Punkt bei $\\alpha = 90°$, denn dort gilt $\\cos(90°) = 0$ und $\\sin(90°) = 1$. Bei $\\alpha = 0°$ ist es umgekehrt: $\\cos(0°) = 1$, $\\sin(0°) = 0$, also $P = (1, 0)$.',
      3: '$(1, 1)$ liegt außerhalb des Einheitskreises, denn $1^{2} + 1^{2} = 2 \\neq 1$. Die Koordinaten eines Punktes auf dem Einheitskreis sind immer $(\\cos\\alpha, \\sin\\alpha)$ — bei $\\alpha = 0°$ ist $\\sin(0°) = 0$, nicht $1$.',
    },
  },
  'ex-trig-2-1-mastery': {
    id: 'ex-trig-2-1-mastery', lessonId: 'trig-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Koordinaten hat der Punkt auf dem Einheitskreis bei $\\alpha = 90°$?',
    options: ['$(1, 0)$', '$(0, 1)$', '$(-1, 0)$', '$(0, -1)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** $P = (\\cos\\alpha, \\sin\\alpha)$ anwenden.

**Rechnung:** Bei $\\alpha = 90°$: $\\cos(90°) = 0$, $\\sin(90°) = 1$. Also $P = (0, 1)$.

**Am Einheitskreis heißt das:** Bei $90°$ bzw. $\\pi/2$ rad hat sich der Strahl um ein Viertel gegen den Uhrzeigersinn gedreht und zeigt nach oben. Höchster Punkt des Kreises.

**Probe:** Kreisgleichung $0^{2} + 1^{2} = 1$ ✓. Außerdem: $\\sin^{2}(90°) + \\cos^{2}(90°) = 1 + 0 = 1$ ✓.

**Typischer Fehler:** $(1, 0)$ (das ist bei $0°$) oder die Koordinaten vertauschen. Merke: Die **erste** Zahl ist $\\cos$, die **zweite** ist $\\sin$.`,
    hints: [
      'Skizze: wo liegt $90°$ am Einheitskreis? Oben.',
      'Formel: $P = (\\cos(90°), \\sin(90°))$.',
      'Am Einheitskreis heißt das: x-Koordinate $= \\cos$, y-Koordinate $= \\sin$.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist der Punkt bei $\\alpha = 0°$, nicht bei $90°$. Du hast möglicherweise $\\cos$ und $\\sin$ vertauscht: Bei $90°$ gilt $\\cos(90°) = 0$ und $\\sin(90°) = 1$, also $P = (0, 1)$. Merke: erste Koordinate ist $\\cos$, zweite ist $\\sin$.',
      2: 'Das ist der Punkt bei $\\alpha = 180°$ (halbe Umdrehung). Du hast den Winkel verdoppelt oder im falschen Quadranten gelandet. Bei $90°$ zeigt der Strahl nach oben auf $(0, 1)$, nicht nach links.',
      3: 'Das ist der Punkt bei $\\alpha = 270°$ (bzw. $-90°$). Du hast das Vorzeichen der y-Koordinate falsch gesetzt. Bei $90°$ ist $\\sin(90°) = +1$ (nicht $-1$), denn im 1./2. Quadrant ist $\\sin > 0$.',
    },
  },

  // ───────────── Lektion 2-2: sin und cos als Koordinaten ─────────────
  'ex-trig-2-2-a': {
    id: 'ex-trig-2-2-a', lessonId: 'trig-2-2', type: 'multiple-choice',
    question: '$\\cos(\\alpha)$ entspricht am Einheitskreis:',
    options: ['der y-Koordinate', 'der x-Koordinate', 'dem Radius', 'dem Winkel'],
    correctIndex: 1,
    explanation: `**Ansatz:** Definition am Einheitskreis.

**Rechnung:** $P = (\\cos\\alpha, \\sin\\alpha)$, also ist die **x-Koordinate** gleich $\\cos(\\alpha)$, die **y-Koordinate** gleich $\\sin(\\alpha)$. Projektionslinie vom Punkt auf die x-Achse liefert den Kosinuswert.

**Probe:** Bei $\\alpha = 0°$: $P = (1, 0)$ und $\\cos(0°) = 1$ ✓. Bei $\\alpha = 90°$: $P = (0, 1)$ und $\\cos(90°) = 0$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ verwechseln. Eselsbrücke: **c**osinus und **x**-Achse sind "horizontal"; **s**inus und **y**-Achse passen zur "Höhe".`,
    hints: [
      'Die grundlegende Definition: $P = (?, ?)$ auf dem Einheitskreis.',
      'Der erste Koordinatenwert (x) entspricht welcher Funktion?',
      'Skizze: Lot vom Punkt auf die x-Achse hat Länge $|\\cos\\alpha|$.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist $\\sin(\\alpha)$, nicht $\\cos(\\alpha)$. Du hast sin/cos vertauscht. Am Einheitskreis gilt $P = (\\cos\\alpha, \\sin\\alpha)$: die *erste* Koordinate (x) ist $\\cos$, die *zweite* (y) ist $\\sin$. Eselsbrücke: "cos horizontal, sin vertikal".',
      2: 'Der Radius ist am Einheitskreis immer $1$ — eine Konstante, keine Funktion von $\\alpha$. $\\cos(\\alpha)$ ändert sich jedoch mit $\\alpha$ (z.B. $\\cos(0°) = 1$, $\\cos(90°) = 0$). Also kann $\\cos$ nicht der Radius sein.',
      3: 'Der Winkel $\\alpha$ ist der Eingabewert der Funktion, nicht der Ausgabewert. $\\cos(\\alpha)$ ist eine Koordinate, und zwar die x-Koordinate (eine Zahl zwischen $-1$ und $1$).',
    },
  },
  'ex-trig-2-2-b': {
    id: 'ex-trig-2-2-b', lessonId: 'trig-2-2', type: 'multiple-choice',
    question: 'Welcher Punkt liegt bei $\\alpha = 180°$?',
    options: ['$(1, 0)$', '$(0, 1)$', '$(-1, 0)$', '$(0, -1)$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $P = (\\cos(180°), \\sin(180°))$ berechnen.

**Rechnung:** $\\cos(180°) = -1$, $\\sin(180°) = 0$. Also $P = (-1, 0)$.

**Am Einheitskreis heißt das:** $180° = \\pi$ rad entspricht einer halben Drehung. Der Punkt liegt ganz links auf der negativen x-Achse — gegenüber vom Startpunkt $(1, 0)$.

**Probe:** Kreisgleichung $(-1)^{2} + 0^{2} = 1$ ✓.

**Typischer Fehler:** $(0, -1)$ wählen — das ist bei $270°$.`,
    hints: [
      'Skizze: $180°$ ist eine halbe Drehung. Wo zeigt der Strahl hin?',
      'Formel: $P = (\\cos(180°), \\sin(180°))$.',
      'Am Einheitskreis heißt das: ganz links, x-Koordinate ist negativ.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist der Startpunkt bei $\\alpha = 0°$, nicht bei $180°$. Bei einer halben Umdrehung landet der Punkt gegenüber vom Start, bei $(-1, 0)$. Vergiss das Minuszeichen nicht: $\\cos(180°) = -1$.',
      1: 'Das ist der Punkt bei $\\alpha = 90°$, nicht bei $180°$. Bei $90°$ hast du erst ein Viertel der Umdrehung geschafft (oben). Bei $180°$ ist eine halbe Umdrehung vollständig, der Punkt liegt links auf $(-1, 0)$.',
      3: 'Das ist der Punkt bei $\\alpha = 270°$ (drei Viertel der Umdrehung). Du hast die Koordinaten vertauscht oder bist zu weit gedreht. Bei $180°$: halbe Umdrehung, Punkt ganz links, $P = (-1, 0)$.',
    },
  },
  'ex-trig-2-2-mastery': {
    id: 'ex-trig-2-2-mastery', lessonId: 'trig-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Punkt hat die Koordinaten $\\left(-\\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{2}}{2}\\right)$. Welchem Winkel entspricht das?',
    options: ['$45°$', '$135°$', '$225°$', '$315°$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Quadrant aus Vorzeichen bestimmen, Referenzwinkel aus Beträgen.

**Schritt 1 — Quadrant:** $x = -\\dfrac{\\sqrt{2}}{2} < 0$, $y = +\\dfrac{\\sqrt{2}}{2} > 0$. Das ist der **2. Quadrant** ($90° < \\alpha < 180°$).

**Schritt 2 — Referenzwinkel:** $|x| = |y| = \\dfrac{\\sqrt{2}}{2}$. Das entspricht $45°$ (weil $\\cos(45°) = \\sin(45°) = \\dfrac{\\sqrt{2}}{2}$).

**Schritt 3 — Gesamt:** Im 2. Quadrant gilt $\\alpha = 180° - 45° = 135°$.

**Am Einheitskreis heißt das:** Der Punkt liegt links-oben, auf der Winkelhalbierenden des 2. Quadranten.

**Probe:** $\\cos(135°) = -\\dfrac{\\sqrt{2}}{2}$ ✓, $\\sin(135°) = \\dfrac{\\sqrt{2}}{2}$ ✓.

**Typischer Fehler:** $45°$ wählen, weil $|x| = |y|$ — aber das Vorzeichen von $x$ wird ignoriert. Immer zuerst den Quadranten prüfen.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: Punkt mit $x < 0$, $y > 0$ — welcher Quadrant?',
      '$|x| = |y| = \\dfrac{\\sqrt{2}}{2}$ → Referenzwinkel $45°$.',
      'Im 2. Quadrant: $\\alpha = 180° - 45°$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast das Vorzeichen von $x$ ignoriert. $45°$ liegt im 1. Quadrant mit $\\cos(45°) = +\\dfrac{\\sqrt{2}}{2} > 0$. Hier ist aber $x < 0$, also 2. Quadrant. Immer zuerst die Vorzeichen prüfen, nicht nur die Beträge.',
      2: 'Das wäre der 3. Quadrant (beide Koordinaten negativ: $\\cos(225°) = \\sin(225°) = -\\dfrac{\\sqrt{2}}{2}$). Hier ist aber $y > 0$, also liegt der Punkt oberhalb der x-Achse — 2. Quadrant.',
      3: 'Das wäre der 4. Quadrant mit $x > 0$, $y < 0$ ($\\cos(315°) = +\\dfrac{\\sqrt{2}}{2}$, $\\sin(315°) = -\\dfrac{\\sqrt{2}}{2}$). Hier sind beide Vorzeichen genau umgekehrt. Im 2. Quadrant: $x < 0$, $y > 0$ → $\\alpha = 135°$.',
    },
  },

  // ───────────── Lektion 2-3: Symmetrien und Periodizität ─────────────
  'ex-trig-2-3-a': {
    id: 'ex-trig-2-3-a', lessonId: 'trig-2-3', type: 'multiple-choice',
    question: '$\\sin(\\alpha + 360°) = $?',
    options: ['$\\sin(\\alpha) + 1$', '$-\\sin(\\alpha)$', '$\\sin(\\alpha)$', '$0$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Periodizität des Sinus.

**Regel:** $\\sin$ und $\\cos$ sind periodisch mit Periode $360° = 2\\pi$.

**Am Einheitskreis heißt das:** Nach einer vollen Umdrehung ($360°$) ist der Punkt wieder an derselben Stelle. Also sind $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) wieder gleich.

**Rechnung:** $\\sin(\\alpha + 360°) = \\sin(\\alpha)$ für alle $\\alpha$.

**Probe:** $\\sin(30° + 360°) = \\sin(390°) = \\sin(30°) = \\dfrac{1}{2}$. Taschenrechner im DEG-Modus bestätigt.

**Typischer Fehler:** $\\sin(\\alpha) + 1$ wählen — die $1$ gehört nicht in die Formel, $\\sin$ ist keine additive Funktion.`,
    hints: [
      'Wie verhält sich $\\sin$ nach einer vollen Umdrehung? Skizze am Einheitskreis.',
      'Periodizität: $\\sin(\\alpha + 360°) = \\sin(\\alpha)$.',
      'Am Einheitskreis heißt das: nach $2\\pi$ ist der Punkt wieder an derselben Stelle.',
    ],
    wrongAnswerExplanations: {
      0: 'Linearitäts-Irrtum. $\\sin$ ist *nicht* additiv: $\\sin(\\alpha + 360°) \\neq \\sin(\\alpha) + \\sin(360°)$. Da $\\sin(360°) = 0$ wäre die "$+1$" ohnehin falsch. Richtig: Nach einer vollen Umdrehung ist der Punkt exakt wieder an der Startposition.',
      1: 'Das gilt für eine Spiegelung (z.B. $\\sin(180° + \\alpha) = -\\sin(\\alpha)$), nicht für eine volle Umdrehung. Nach $360°$ liegt der Punkt am selben Ort, also $\\sin(\\alpha + 360°) = +\\sin(\\alpha)$ ohne Vorzeichenwechsel.',
      3: 'Das gilt nur, wenn $\\sin(\\alpha) = 0$ war — also z.B. bei $\\alpha = 0°, 180°, \\ldots$. Im Allgemeinen bleibt $\\sin$ nach einer vollen Umdrehung unverändert ($= \\sin(\\alpha)$), nicht pauschal $0$.',
    },
  },
  'ex-trig-2-3-b': {
    id: 'ex-trig-2-3-b', lessonId: 'trig-2-3', type: 'multiple-choice',
    question: '$\\sin(-\\alpha) = $?',
    options: ['$\\sin(\\alpha)$', '$-\\sin(\\alpha)$', '$\\cos(\\alpha)$', '$-\\cos(\\alpha)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Symmetrie des Sinus am Einheitskreis.

**Regel:** $\\sin$ ist eine **ungerade** Funktion: $\\sin(-\\alpha) = -\\sin(\\alpha)$.

**Am Einheitskreis heißt das:** Der Winkel $-\\alpha$ entspricht einer Drehung im *Uhrzeigersinn*. Der Punkt liegt gespiegelt an der x-Achse: x bleibt, y wechselt das Vorzeichen. Da $\\sin$ die y-Koordinate ist, ändert sich das Vorzeichen.

**Probe:** $\\sin(-30°) = -\\sin(30°) = -\\dfrac{1}{2}$. Taschenrechner (DEG-Modus) bestätigt.

**Typischer Fehler:** $\\sin(-\\alpha) = \\sin(\\alpha)$ setzen — das ist die Regel für $\\cos$ (gerade Funktion), nicht für $\\sin$.`,
    hints: [
      'Skizze: negative Winkel drehen wie am Uhrzeigersinn. Spiegelung an welcher Achse?',
      '$\\sin$ ist eine ungerade Funktion.',
      'Am Einheitskreis heißt das: y-Koordinate kippt das Vorzeichen.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist die Regel für $\\cos$ (gerade Funktion: $\\cos(-\\alpha) = \\cos(\\alpha)$), nicht für $\\sin$. $\\sin$ ist *ungerade*: Spiegelung an der x-Achse kippt die y-Koordinate, also das Vorzeichen. Richtig: $\\sin(-\\alpha) = -\\sin(\\alpha)$.',
      2: '$\\sin$ und $\\cos$ gehen nicht ohne Zusatzwinkel ineinander über. Der Zusammenhang ist $\\sin(90° - \\alpha) = \\cos(\\alpha)$ (Komplementärformel), nicht $\\sin(-\\alpha) = \\cos(\\alpha)$. Bei $\\sin(-\\alpha)$ ändert sich *nur das Vorzeichen*.',
      3: 'Doppelter Fehler: falsche Funktion UND falsches Vorzeichen. Beim negativen Winkel wechselt $\\sin$ das Vorzeichen und bleibt $\\sin$. Die richtige Regel ist $\\sin(-\\alpha) = -\\sin(\\alpha)$, nicht $-\\cos(\\alpha)$.',
    },
  },
  'ex-trig-2-3-mastery': {
    id: 'ex-trig-2-3-mastery', lessonId: 'trig-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\cos(-\\alpha) = $?',
    options: ['$-\\cos(\\alpha)$', '$\\cos(\\alpha)$', '$\\sin(\\alpha)$', '$-\\sin(\\alpha)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Symmetrie des Kosinus.

**Regel:** $\\cos$ ist eine **gerade** Funktion: $\\cos(-\\alpha) = \\cos(\\alpha)$.

**Am Einheitskreis heißt das:** Der negative Winkel spiegelt den Punkt an der x-Achse. Die x-Koordinate bleibt unverändert (nur y kippt). Da $\\cos$ die x-Koordinate ist, ändert sie sich nicht.

**Probe:** $\\cos(-60°) = \\cos(60°) = \\dfrac{1}{2}$. Taschenrechner (DEG-Modus) bestätigt.

**Merke:**
- $\\sin(-\\alpha) = -\\sin(\\alpha)$ (ungerade)
- $\\cos(-\\alpha) = +\\cos(\\alpha)$ (gerade)
- $\\tan(-\\alpha) = -\\tan(\\alpha)$ (ungerade, da $\\sin$ ungerade und $\\cos$ gerade)

**Typischer Fehler:** $-\\cos(\\alpha)$ wählen — das ist die Formel für $\\cos(180° - \\alpha)$, nicht für $\\cos(-\\alpha)$.`,
    hints: [
      'Skizze: Spiegelung an der x-Achse. Wie ändert sich die x-Koordinate?',
      '$\\cos$ ist eine gerade Funktion.',
      'Am Einheitskreis heißt das: x-Koordinate bleibt bei Spiegelung gleich.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist die Formel für $\\cos(180° - \\alpha)$ (Spiegelung an der y-Achse), nicht für $\\cos(-\\alpha)$ (Spiegelung an der x-Achse). Bei der Spiegelung an der x-Achse bleibt die x-Koordinate (= $\\cos$) unverändert, ohne Vorzeichenwechsel.',
      2: '$\\cos$ und $\\sin$ gehen nicht ohne Zusatzwinkel ineinander über. Der Zusammenhang ist $\\cos(90° - \\alpha) = \\sin(\\alpha)$ (Komplementärformel), nicht $\\cos(-\\alpha) = \\sin(\\alpha)$. $\\cos$ ist *gerade*, der negative Winkel ändert nichts.',
      3: 'Das ist die Formel für $\\sin(-\\alpha)$, nicht für $\\cos(-\\alpha)$. Du hast zwei Fehler kombiniert: falsche Funktion UND falsches Vorzeichen. Richtig: $\\cos(-\\alpha) = \\cos(\\alpha)$ (gerade Funktion).',
    },
  },

  // ───────────── Lektion 2-4: Tangens im Einheitskreis ─────────────
  'ex-trig-2-4-a': {
    id: 'ex-trig-2-4-a', lessonId: 'trig-2-4', type: 'multiple-choice',
    question: 'Was beschreibt $\\tan(\\alpha)$ geometrisch am Einheitskreis?',
    options: ['Den Radius', 'Die x-Koordinate', 'Das Verhältnis $y/x$ (= $\\sin/\\cos$)', 'Die Bogenlänge'],
    correctIndex: 2,
    explanation: `**Ansatz:** Definition von $\\tan$ als Quotient.

**Regel:** $\\tan(\\alpha) = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\dfrac{y}{x}$ am Einheitskreis.

**Am Einheitskreis heißt das:** $\\tan(\\alpha)$ ist die **Steigung** der Geraden vom Ursprung zum Punkt $P = (\\cos\\alpha, \\sin\\alpha)$. Steigung = $\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y - 0}{x - 0} = \\dfrac{y}{x}$.

**Alternative Anschauung:** Zeichne die Tangente an den Einheitskreis bei $(1, 0)$. Schneide sie mit dem verlängerten Ortsvektor — die Höhe dieses Schnittpunkts ist $\\tan(\\alpha)$. Daher der Name.

**Probe:** Bei $\\alpha = 45°$: $y/x = \\dfrac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1 = \\tan(45°)$ ✓.`,
    hints: [
      'Formel: $\\tan(\\alpha) = \\dfrac{?}{?}$.',
      '$\\tan = \\sin/\\cos$ — und $\\sin$, $\\cos$ sind welche Koordinaten?',
      'Am Einheitskreis heißt das: Steigung der Geraden vom Ursprung zum Punkt.',
    ],
    wrongAnswerExplanations: {
      0: 'Der Radius am Einheitskreis ist konstant $1$, $\\tan$ dagegen variiert mit $\\alpha$ und wird sogar unendlich bei $\\alpha = 90°$. Der Radius kann $\\tan$ nicht beschreiben. Richtig: $\\tan(\\alpha) = y/x = \\sin/\\cos$.',
      1: 'Die x-Koordinate ist $\\cos(\\alpha)$, nicht $\\tan(\\alpha)$. Du hast $\\cos$ und $\\tan$ verwechselt. $\\tan$ ist der *Quotient* $y/x$ (= Steigung), nicht eine einzelne Koordinate.',
      3: 'Die Bogenlänge ist $s = r \\cdot \\alpha_{\\text{rad}}$, also ein Längenmaß abhängig vom Winkel. $\\tan(\\alpha)$ ist hingegen ein dimensionsloses Verhältnis $y/x$ und hat nichts mit einer Länge auf dem Kreis zu tun.',
    },
  },
  'ex-trig-2-4-b': {
    id: 'ex-trig-2-4-b', lessonId: 'trig-2-4', type: 'multiple-choice',
    question: 'Warum ist $\\tan(90°)$ nicht definiert?',
    options: ['Weil $\\sin(90°) = 0$', 'Weil $\\cos(90°) = 0$ (Division durch 0)', 'Weil $90°$ zu groß ist', 'Weil $\\tan$ nur bis $45°$ gilt'],
    correctIndex: 1,
    explanation: `**Ansatz:** $\\tan = \\sin/\\cos$, Nenner kontrollieren.

**Rechnung:** Bei $\\alpha = 90°$: $\\sin(90°) = 1$, $\\cos(90°) = 0$. Also $\\tan(90°) = \\dfrac{1}{0}$ — Division durch Null, undefiniert.

**Am Einheitskreis heißt das:** Der Punkt liegt bei $(0, 1)$. Die Gerade vom Ursprung dorthin ist *senkrecht* — sie hat keine endliche Steigung. Daher wächst $\\tan(\\alpha)$ für $\\alpha \\to 90°$ gegen $+\\infty$ (Polstelle).

**Weitere Polstellen:** $\\tan(\\alpha)$ ist undefiniert bei $\\alpha = 90° + k \\cdot 180°$ für $k \\in \\mathbb{Z}$, also bei $90°, 270°, 450°, \\ldots$.

**Typischer Fehler:** "$\\sin(90°) = 0$" — falsch, es ist $\\sin(90°) = 1$.`,
    hints: [
      'Welche Formel? $\\tan = \\sin/\\cos$. Welche Werte bei $90°$?',
      'Division durch $0$ ist nicht definiert — welcher Wert ist $0$?',
      'Am Einheitskreis heißt das: Gerade zum Punkt $(0,1)$ ist senkrecht, Steigung undefiniert.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist falsch — $\\sin(90°) = 1$, nicht $0$. Du hast $\\sin$ und $\\cos$ bei $90°$ verwechselt. Das Problem bei $\\tan(90°)$ liegt am Nenner: $\\cos(90°) = 0$ macht den Quotienten undefiniert.',
      2: '"Zu groß" ist kein mathematisches Argument. $\\tan$ ist für alle reellen Winkel definiert, *außer* an den Polstellen, wo $\\cos = 0$ ist (also bei $90°, 270°, \\ldots$). Bei z.B. $180°$ ist $\\tan$ sehr wohl definiert und gleich $0$.',
      3: 'Das ist falsch. $\\tan$ ist für die meisten Winkel definiert, auch weit über $45°$ hinaus (z.B. $\\tan(60°) = \\sqrt{3}$, $\\tan(100°) \\approx -5{,}67$). Nur bei $\\cos(\\alpha) = 0$ entsteht eine Polstelle.',
    },
  },
  'ex-trig-2-4-mastery': {
    id: 'ex-trig-2-4-mastery', lessonId: 'trig-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\tan(\\alpha)$ ist positiv, wenn:',
    options: ['$\\sin$ und $\\cos$ beide positiv (1. Quadrant) oder beide negativ (3. Quadrant)', 'Nur im 1. Quadrant', '$\\sin$ positiv und $\\cos$ negativ', 'Immer'],
    correctIndex: 0,
    explanation: `**Ansatz:** $\\tan = \\sin/\\cos$, Vorzeichenregel für Quotienten.

**Regel:** $\\dfrac{+}{+} = +$ und $\\dfrac{-}{-} = +$. Also ist $\\tan > 0$, wenn $\\sin$ und $\\cos$ **gleiche Vorzeichen** haben.

**Am Einheitskreis heißt das:**
- 1. Quadrant: $x > 0$, $y > 0$ → $\\tan > 0$
- 2. Quadrant: $x < 0$, $y > 0$ → $\\tan < 0$
- 3. Quadrant: $x < 0$, $y < 0$ → $\\tan > 0$
- 4. Quadrant: $x > 0$, $y < 0$ → $\\tan < 0$

**ASTC-Merkhilfe:** Im 3. Quadrant ist nur $\\tan$ positiv ("**T**ake").

**Probe:** $\\tan(200°) = \\tan(180° + 20°) = \\tan(20°) > 0$ ✓ (3. Quadrant).

**Typischer Fehler:** Nur den 1. Quadrant zu sehen — $\\tan$ hat Periode $180°$, daher Positivität auch im 3. Quadrant.`,
    hints: [
      'Formel: $\\tan = \\sin/\\cos$. Wann ist der Bruch positiv?',
      'Zwei Fälle: beide Zahlen positiv ODER beide negativ.',
      'Am Einheitskreis heißt das: 1. und 3. Quadrant. ASTC: "T" im 3. Quadrant.',
    ],
    wrongAnswerExplanations: {
      1: 'Du vergisst den 3. Quadrant. Dort sind zwar $\\sin < 0$ UND $\\cos < 0$, aber der Quotient $\\dfrac{-}{-} = +$. $\\tan$ hat Periode $180°$ (nicht $360°$), also ist $\\tan$ in 1. UND 3. Quadrant positiv (ASTC: "T").',
      2: 'Das ist der 2. Quadrant. Dort gilt $\\tan = \\dfrac{+}{-} = -$, also ist $\\tan$ dort *negativ*, nicht positiv. Im 2. Q ist nur $\\sin$ positiv (ASTC: "S").',
      3: '$\\tan$ ist nicht immer positiv — z.B. im 2. und 4. Quadrant ist $\\tan < 0$, und an den Polstellen ($90°, 270°$) gar nicht definiert. Die Vorzeichen folgen der Quadranten-Regel.',
    },
  },

  // ───────────── Lektion 2-5: Alle vier Quadranten ─────────────
  'ex-trig-2-5-a': {
    id: 'ex-trig-2-5-a', lessonId: 'trig-2-5', type: 'multiple-choice',
    question: 'In welchem Quadranten liegt $\\alpha = 200°$?',
    options: ['1. Quadrant', '2. Quadrant', '3. Quadrant', '4. Quadrant'],
    correctIndex: 2,
    explanation: `**Ansatz:** Quadrantenbereiche prüfen.

**Regel:**
- 1. Q: $0°$–$90°$
- 2. Q: $90°$–$180°$
- 3. Q: $180°$–$270°$
- 4. Q: $270°$–$360°$

**Rechnung:** $200°$ liegt zwischen $180°$ und $270°$ → **3. Quadrant**.

**Am Einheitskreis heißt das:** Der Punkt liegt links-unten ($x < 0$, $y < 0$). Nur $\\tan$ ist dort positiv (ASTC).

**Probe:** $\\sin(200°) = \\sin(180° + 20°) = -\\sin(20°) < 0$ ✓.

**Typischer Fehler:** $2°$ Abweichung übersehen — immer Grenzen genau prüfen ($180° < 200° < 270°$).`,
    hints: [
      'Welche Quadranten gibt es? Zeichne den Einheitskreis und markiere die Grenzen.',
      '3. Quadrant: $180°$ bis $270°$.',
      'Am Einheitskreis heißt das: Punkt links-unten, $x < 0$, $y < 0$.',
    ],
    wrongAnswerExplanations: {
      0: 'Der 1. Quadrant reicht nur von $0°$ bis $90°$. $200°$ liegt weit darüber. Prüfe die Grenzen: $0° \\leq \\alpha < 90°$ für den 1. Q.',
      1: 'Der 2. Quadrant reicht von $90°$ bis $180°$. $200°$ liegt schon darüber, weil $200° > 180°$. Der Punkt hat bereits die negative x-Achse überschritten.',
      3: 'Der 4. Quadrant beginnt erst ab $270°$. $200°$ ist aber noch unter $270°$, also noch im 3. Quadrant. Merke die Grenzen: 3. Q: $180°$–$270°$, 4. Q: $270°$–$360°$.',
    },
  },
  'ex-trig-2-5-b': {
    id: 'ex-trig-2-5-b', lessonId: 'trig-2-5', type: 'multiple-choice',
    question: '$\\sin(210°) = $?',
    options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Referenzwinkel finden, Vorzeichen mit ASTC setzen.

**Schritt 1 — Quadrant:** $210°$ liegt zwischen $180°$ und $270°$ → **3. Quadrant**.

**Schritt 2 — Referenzwinkel:** $210° - 180° = 30°$. Der Abstand zur negativen x-Achse beträgt $30°$.

**Schritt 3 — Grundwert:** $\\sin(30°) = \\dfrac{1}{2}$.

**Schritt 4 — Vorzeichen:** Im 3. Quadrant ist $\\sin$ negativ (ASTC: nur "T"angens positiv). Also $\\sin(210°) = -\\sin(30°) = -\\dfrac{1}{2}$.

**Am Einheitskreis heißt das:** Bei $210°$ liegt der Punkt $\\left(-\\dfrac{\\sqrt{3}}{2}, -\\dfrac{1}{2}\\right)$. Die y-Koordinate ist $-\\dfrac{1}{2}$.

**Probe (Taschenrechner, DEG-Modus):** $\\sin(210°) = -0{,}5$ ✓.

**Typischer Fehler:** Vorzeichen vergessen und $+\\dfrac{1}{2}$ angeben, oder $\\dfrac{\\sqrt{3}}{2}$ (das wäre $\\cos$, auch mit falschem Vorzeichen).`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $210°$ ist im 3. Quadrant.',
      'Referenzwinkel: $210° - 180° = 30°$. Grundwert $\\sin(30°) = ?$',
      'Im 3. Quadrant ist $\\sin < 0$ (ASTC). Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Vorzeichen vergessen. Der Betrag ist zwar $\\dfrac{1}{2}$, aber $210°$ liegt im 3. Quadrant, wo $\\sin < 0$ ist (ASTC: nur "T"angens positiv). Richtig: $\\sin(210°) = -\\dfrac{1}{2}$.',
      1: 'Doppelter Fehler: falscher Betrag UND falsches Vorzeichen. Der Referenzwinkel zu $210°$ ist $30°$ (nicht $60°$). $\\sin(30°) = \\dfrac{1}{2}$, nicht $\\dfrac{\\sqrt{3}}{2}$. Außerdem ist $\\sin$ im 3. Quadrant negativ.',
      3: 'Der Betrag ist falsch. Du hast vermutlich $\\sin$ und $\\cos$ verwechselt: $|\\cos(210°)| = \\dfrac{\\sqrt{3}}{2}$, aber $|\\sin(210°)| = \\dfrac{1}{2}$. Das Vorzeichen ist korrekt negativ.',
    },
  },
  'ex-trig-2-5-mastery': {
    id: 'ex-trig-2-5-mastery', lessonId: 'trig-2-5', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\cos(315°) = $?',
    options: ['$-\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Quadrant, Referenzwinkel, Vorzeichen.

**Schritt 1 — Quadrant:** $315°$ liegt zwischen $270°$ und $360°$ → **4. Quadrant**.

**Schritt 2 — Referenzwinkel:** $360° - 315° = 45°$.

**Schritt 3 — Grundwert:** $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.

**Schritt 4 — Vorzeichen:** Im 4. Quadrant ist $\\cos > 0$ (ASTC: nur "C"osinus positiv). Also $\\cos(315°) = +\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.

**Am Einheitskreis heißt das:** Bei $315°$ liegt der Punkt $\\left(\\dfrac{\\sqrt{2}}{2}, -\\dfrac{\\sqrt{2}}{2}\\right)$ im 4. Quadranten — rechts-unten. x-Koordinate ist positiv.

**Probe (Taschenrechner, DEG-Modus):** $\\cos(315°) \\approx 0{,}707$ ✓.

**Typischer Fehler:** Vorzeichen falsch setzen und $-\\dfrac{\\sqrt{2}}{2}$ angeben.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $315°$ liegt im 4. Quadrant.',
      'Referenzwinkel: $360° - 315° = 45°$. Grundwert $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.',
      'Im 4. Quadrant ist $\\cos > 0$ (ASTC). Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Falsches Vorzeichen. $315°$ liegt im 4. Quadrant, wo $\\cos > 0$ ist (ASTC: nur "C"osinus positiv). Der Punkt liegt rechts-unten, x-Koordinate ist positiv. Richtig: $\\cos(315°) = +\\dfrac{\\sqrt{2}}{2}$.',
      2: 'Doppelter Fehler: falscher Betrag UND falsches Vorzeichen. Der Referenzwinkel ist $45°$ (nicht $60°$), also $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$, nicht $\\dfrac{1}{2}$. Und das Vorzeichen ist im 4. Quadrant positiv.',
      3: 'Der Betrag ist falsch. Du hast vermutlich $\\cos$ und $\\sin$ verwechselt: $|\\sin(315°)| = \\dfrac{\\sqrt{2}}{2}$ (ja), aber der Referenzwinkel $45°$ liefert $\\cos(45°) = \\dfrac{\\sqrt{2}}{2}$, nicht $\\dfrac{1}{2}$.',
    },
  },
}

const lessons_u2 = [
  {
    id: 'trig-2-1', unitId: 'trig-unit-2',
    title: 'Der Einheitskreis',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Den Einheitskreis als Grundlage verstehen', 'Punkte auf dem Einheitskreis einordnen'],
    subGoals: [
      { label: 'Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$', examRelevance: 'hoch' },
      { label: 'Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn', examRelevance: 'hoch' },
      { label: 'Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$', examRelevance: 'hoch' },
      { label: 'Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln', examRelevance: 'niedrig' },
    ],
    prerequisites: ['trig-1-3'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-1-3', concepts: ['grundwerte-sin', 'grundwerte-cos'] },
      ],
      concepts: [
        { id: 'einheitskreis-def', title: 'Einheitskreis: $x^2 + y^2 = 1$ um den Ursprung',                              dependsOn: [] },
        { id: 'winkel-messung',    title: 'Winkel gemessen von positiver $x$-Achse gegen Uhrzeigersinn',               dependsOn: ['einheitskreis-def'] },
        { id: 'punkt-parametrisierung', title: 'Punkt auf Kreis: $P = (\\cos\\alpha, \\sin\\alpha)$',                   dependsOn: ['winkel-messung'] },
        { id: 'quadrantenpunkte',  title: 'Achsenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$', dependsOn: ['punkt-parametrisierung'] },
        { id: 'durchmesser-radius', title: 'Durchmesser $d = 2r = 2$ vs. Radius $r = 1$',                               dependsOn: ['einheitskreis-def'] },
      ],
      subGoalConcepts: {
        0: ['einheitskreis-def'],
        1: ['winkel-messung', 'punkt-parametrisierung'],
        2: ['quadrantenpunkte'],
        3: ['durchmesser-radius'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['einheitskreis-def'],        qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheitskreis-def'],        qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['einheitskreis-def'],        qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheitskreis-def'],        qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['einheitskreis-def'],        qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['punkt-parametrisierung'],   qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['punkt-parametrisierung'],   qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['punkt-parametrisierung'],   qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['punkt-parametrisierung'],   qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['punkt-parametrisierung'],   qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'matching',        uses: ['quadrantenpunkte'],         qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['quadrantenpunkte'],         qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['quadrantenpunkte'],         qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['quadrantenpunkte'],         qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['quadrantenpunkte'],         qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['durchmesser-radius'],       qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['durchmesser-radius'],       qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['durchmesser-radius'],       qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['durchmesser-radius'],       qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['durchmesser-radius'],       qty: 1 },
      ],
    },
    nextLessonId: 'trig-2-2',
    steps: [
      {
        id: 'trig-2-1-s1', type: 'explanation-intuitive', title: 'Warum der Einheitskreis?',
        content: `Das rechtwinklige Dreieck erklärt $\\sin$ und $\\cos$ nur für $0°$–$90°$. Um alle Winkel zu erfassen, brauchen wir eine bessere Definition.

Die Lösung: Der **Einheitskreis** — ein Kreis mit **Radius $= 1$** im Koordinatensystem. Wir platzieren einen Punkt $P$ auf diesem Kreis und messen den Winkel $\\alpha$ von der positiven x-Achse im Gegenuhrzeigersinn.

Die Koordinaten von $P$ sind dann genau **$(\\cos(\\alpha), \\sin(\\alpha))$** — das ist die allgemeine Definition.

**Am Einheitskreis heißt das:** Jede Aussage über $\\sin$ und $\\cos$ lässt sich geometrisch ablesen — Koordinaten, Vorzeichen, Symmetrie, Periodizität. Der Einheitskreis ist das zentrale Werkzeug der Trigonometrie.`,
      },
      {
        id: 'trig-2-1-s2', type: 'visualization', title: 'Interaktiver Einheitskreis',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 45, showTangent: false },
      },
      { id: 'trig-2-1-s3', type: 'exercise', title: 'Aufgabe 1 — Radius', exerciseRef: 'ex-trig-2-1-a' },
      { id: 'trig-2-1-s4', type: 'exercise', title: 'Aufgabe 2 — Punkt bei 0°', exerciseRef: 'ex-trig-2-1-b' },
      { id: 'trig-2-1-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-2-1-mastery' },
    ],
  },
  {
    id: 'trig-2-2', unitId: 'trig-unit-2',
    title: 'sin und cos als Koordinaten',
    order: 2, estimatedMinutes: 10,
    learningGoals: ['sin und cos als x/y-Koordinaten am Einheitskreis verstehen', 'Punkte ↔ Winkel umsetzen'],
    subGoals: [
      { label: '$\\cos\\alpha$ = $x$-Koordinate (horizontal), $\\sin\\alpha$ = $y$-Koordinate (vertikal)', examRelevance: 'hoch' },
      { label: 'Definition gilt für **alle** reellen Winkel, nicht nur $0°$–$90°$', examRelevance: 'hoch' },
      { label: 'Aus Koordinaten $(x,y)$ auf Kreis den Winkel über Vorzeichen + Referenzwinkel ermitteln', examRelevance: 'hoch' },
      { label: 'Eselsbrücke: **c**osinus → **x**-Achse, **s**inus → $y$-Achse (vertikal)', examRelevance: 'niedrig' },
      { label: 'Werte liegen stets im Intervall $[-1, +1]$, weil $r = 1$', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-2-1'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-2-1', concepts: ['einheitskreis-def', 'punkt-parametrisierung'] },
      ],
      concepts: [
        { id: 'cos-x-sin-y',        title: 'Konvention: $\\cos\\alpha = x$-Koord., $\\sin\\alpha = y$-Koord.',                dependsOn: [] },
        { id: 'koord-universell',   title: 'Definition gilt für ALLE reellen Winkel (positiv, negativ, $>360°$)',            dependsOn: ['cos-x-sin-y'] },
        { id: 'koord-zu-winkel',    title: 'Winkel aus $(x, y)$-Koordinaten via Vorzeichen + Referenzwinkel',                 dependsOn: ['cos-x-sin-y'] },
        { id: 'eselsbruecke-xy',    title: 'Merkregel: c-Osinus = $x$-Achse, $s$-Inus = $y$-Achse',                           dependsOn: [] },
        { id: 'wertebereich-sincos', title: 'Wertebereich $[-1, +1]$ folgt direkt aus $r = 1$',                               dependsOn: ['cos-x-sin-y'] },
      ],
      subGoalConcepts: {
        0: ['cos-x-sin-y'],
        1: ['koord-universell'],
        2: ['koord-zu-winkel'],
        3: ['eselsbruecke-xy'],
        4: ['wertebereich-sincos'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['cos-x-sin-y'],         qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['cos-x-sin-y'],         qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['cos-x-sin-y'],         qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['cos-x-sin-y'],         qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['cos-x-sin-y'],         qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['koord-universell'],    qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['koord-universell'],    qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['koord-universell'],    qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['koord-universell'],    qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['koord-universell'],    qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'multiple-choice', uses: ['koord-zu-winkel'],     qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['koord-zu-winkel'],     qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['koord-zu-winkel'],     qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['koord-zu-winkel'],     qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['koord-zu-winkel'],     qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['eselsbruecke-xy'],     qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eselsbruecke-xy'],     qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['eselsbruecke-xy'],     qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eselsbruecke-xy'],     qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['eselsbruecke-xy'],     qty: 1 },

        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['wertebereich-sincos'], qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['wertebereich-sincos'], qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['wertebereich-sincos'], qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['wertebereich-sincos'], qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'true-false',      uses: ['wertebereich-sincos'], qty: 1 },
      ],
    },
    nextLessonId: 'trig-2-3',
    steps: [
      {
        id: 'trig-2-2-s1', type: 'explanation-formal', title: 'Die Definition',
        content: `Für einen Punkt $P$ auf dem Einheitskreis beim Winkel $\\alpha$ gilt:

$$P = (\\cos(\\alpha),\\; \\sin(\\alpha))$$

Das bedeutet:
- **$\\cos(\\alpha) = $ x-Koordinate** von $P$
- **$\\sin(\\alpha) = $ y-Koordinate** von $P$

Diese Definition gilt für **alle reellen Winkel** — nicht nur $0°$–$90°$.

**Am Einheitskreis heißt das:** Willst du $\\sin$/$\\cos$ eines beliebigen Winkels bestimmen, zeichne den Punkt auf dem Kreis und lies die Koordinaten ab. Das ist die geometrische Definition.`,
      },
      {
        id: 'trig-2-2-s2', type: 'visualization', title: 'Koordinaten ablesen',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 60, showTangent: false },
      },
      { id: 'trig-2-2-s3', type: 'exercise', title: 'Aufgabe 1 — cos als Koordinate', exerciseRef: 'ex-trig-2-2-a' },
      { id: 'trig-2-2-s4', type: 'exercise', title: 'Aufgabe 2 — Punkt bei 180°', exerciseRef: 'ex-trig-2-2-b' },
      { id: 'trig-2-2-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-2-2-mastery' },
    ],
  },
  {
    id: 'trig-2-3', unitId: 'trig-unit-2',
    title: 'Symmetrien und Periodizität',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Periodizität von sin und cos verstehen', 'Symmetrieeigenschaften anwenden', 'Reduktionsformeln aus dem Einheitskreis herleiten'],
    subGoals: [
      { label: 'Periodizität: $\\sin(\\alpha + 360°) = \\sin\\alpha$, $\\cos(\\alpha + 360°) = \\cos\\alpha$ (Periode $2\\pi$)', examRelevance: 'hoch' },
      { label: '$\\sin$ ungerade: $\\sin(-\\alpha) = -\\sin\\alpha$ — Spiegelung an $x$-Achse kippt $y$', examRelevance: 'hoch' },
      { label: '$\\cos$ gerade: $\\cos(-\\alpha) = \\cos\\alpha$ — $x$-Koordinate unverändert', examRelevance: 'hoch' },
      { label: 'Supplementformel: $\\sin(180°-\\alpha) = \\sin\\alpha$, $\\cos(180°-\\alpha) = -\\cos\\alpha$', examRelevance: 'mittel' },
      { label: 'Komplementformel: $\\sin(90°-\\alpha) = \\cos\\alpha$, $\\cos(90°-\\alpha) = \\sin\\alpha$', examRelevance: 'mittel' },
      { label: 'Punktspiegelung: $\\sin(180°+\\alpha) = -\\sin\\alpha$, $\\cos(180°+\\alpha) = -\\cos\\alpha$', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-2-2'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-2-2', concepts: ['cos-x-sin-y', 'koord-universell'] },
      ],
      concepts: [
        { id: 'periodizitaet-360',  title: 'Periodizität: $\\sin(\\alpha+360°)=\\sin\\alpha$, $\\cos(\\alpha+360°)=\\cos\\alpha$',  dependsOn: [] },
        { id: 'sin-ungerade',       title: '$\\sin$ ungerade: $\\sin(-\\alpha)=-\\sin\\alpha$',                                     dependsOn: [] },
        { id: 'cos-gerade',         title: '$\\cos$ gerade: $\\cos(-\\alpha)=\\cos\\alpha$',                                         dependsOn: [] },
        { id: 'supplement-formel',  title: 'Supplementformel: $\\sin(180°-\\alpha)=\\sin\\alpha$, $\\cos(180°-\\alpha)=-\\cos\\alpha$', dependsOn: ['sin-ungerade', 'cos-gerade'] },
        { id: 'komplement-formel',  title: 'Komplementformel: $\\sin(90°-\\alpha)=\\cos\\alpha$, $\\cos(90°-\\alpha)=\\sin\\alpha$',  dependsOn: [] },
        { id: 'punktspiegelung',    title: 'Punktspiegelung: $\\sin(180°+\\alpha)=-\\sin\\alpha$, $\\cos(180°+\\alpha)=-\\cos\\alpha$', dependsOn: ['supplement-formel'] },
      ],
      subGoalConcepts: {
        0: ['periodizitaet-360'],
        1: ['sin-ungerade'],
        2: ['cos-gerade'],
        3: ['supplement-formel'],
        4: ['komplement-formel'],
        5: ['punktspiegelung'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['periodizitaet-360'], qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['periodizitaet-360'], qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['periodizitaet-360'], qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['periodizitaet-360'], qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['periodizitaet-360'], qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['sin-ungerade'],      qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sin-ungerade'],      qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['sin-ungerade'],      qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sin-ungerade'],      qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['sin-ungerade'],      qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['cos-gerade'],        qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['cos-gerade'],        qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['cos-gerade'],        qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['cos-gerade'],        qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['cos-gerade', 'sin-ungerade'], qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['supplement-formel'], qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['supplement-formel'], qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['supplement-formel'], qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['supplement-formel'], qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['supplement-formel'], qty: 1 },

        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['komplement-formel'], qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['komplement-formel'], qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['komplement-formel'], qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['komplement-formel'], qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['komplement-formel'], qty: 1 },

        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['punktspiegelung'],   qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['punktspiegelung'],   qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['punktspiegelung'],   qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['punktspiegelung'],   qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['punktspiegelung'],   qty: 1 },
      ],
    },
    nextLessonId: 'trig-2-4',
    steps: [
      {
        id: 'trig-2-3-s1', type: 'explanation-intuitive', title: 'Immer im Kreis',
        content: `Dreht sich der Punkt auf dem Einheitskreis einmal komplett herum ($360°$ bzw. $2\\pi$), ist er wieder an derselben Stelle. Daher sind $\\sin$ und $\\cos$ **periodisch** mit Periode $360°$:

$$\\sin(\\alpha + 360°) = \\sin(\\alpha)$$
$$\\cos(\\alpha + 360°) = \\cos(\\alpha)$$

Außerdem hat der Einheitskreis **Spiegelsymmetrien**, die nützliche Formeln ergeben.

**Am Einheitskreis heißt das:** Jede Symmetrie des Kreises (Spiegelung an x-Achse, y-Achse, Ursprung, Winkelhalbierender) entspricht einer Rechenformel für $\\sin$ und $\\cos$.`,
      },
      {
        id: 'trig-2-3-s2', type: 'explanation-formal', title: 'Symmetrieformeln',
        content: `**Spiegelung an der x-Achse** (negativer Winkel):
$$\\sin(-\\alpha) = -\\sin(\\alpha) \\quad \\text{(ungerade Funktion)}$$
$$\\cos(-\\alpha) = \\cos(\\alpha) \\quad \\text{(gerade Funktion)}$$

**Spiegelung an der y-Achse** (Supplement):
$$\\sin(180° - \\alpha) = \\sin(\\alpha)$$
$$\\cos(180° - \\alpha) = -\\cos(\\alpha)$$

**Punktspiegelung am Ursprung:**
$$\\sin(180° + \\alpha) = -\\sin(\\alpha)$$
$$\\cos(180° + \\alpha) = -\\cos(\\alpha)$$

**Spiegelung an der Winkelhalbierenden $y = x$** (Komplementwinkel):
$$\\sin(90° - \\alpha) = \\cos(\\alpha), \\quad \\cos(90° - \\alpha) = \\sin(\\alpha)$$`,
      },
      { id: 'trig-2-3-s3', type: 'exercise', title: 'Aufgabe 1 — Periodizität', exerciseRef: 'ex-trig-2-3-a' },
      { id: 'trig-2-3-s4', type: 'exercise', title: 'Aufgabe 2 — sin negativer Winkel', exerciseRef: 'ex-trig-2-3-b' },
      { id: 'trig-2-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-2-3-mastery' },
    ],
  },
  {
    id: 'trig-2-4', unitId: 'trig-unit-2',
    title: 'Tangens im Einheitskreis',
    order: 4, estimatedMinutes: 10,
    learningGoals: ['Tangens als sin/cos verstehen', 'Polstellen von tan erkennen', 'Vorzeichen von tan in Quadranten bestimmen'],
    subGoals: [
      { label: 'Definition: $\\tan\\alpha = \\sin\\alpha/\\cos\\alpha = y/x$ — Steigung der Ursprungsgerade', examRelevance: 'hoch' },
      { label: 'Polstellen bei $\\alpha = 90° + k\\cdot 180°$ (überall dort $\\cos\\alpha = 0$)', examRelevance: 'hoch' },
      { label: 'Periode von $\\tan$ ist $180°$, nicht $360°$ (Steigung wiederholt sich nach halber Drehung)', examRelevance: 'hoch' },
      { label: 'ASTC-Vorzeichen: $\\tan > 0$ in 1. und 3. Quadrant, $\\tan < 0$ in 2. und 4.', examRelevance: 'hoch' },
      { label: '$\\tan$ ist ungerade: $\\tan(-\\alpha) = -\\tan\\alpha$', examRelevance: 'mittel' },
      { label: 'Wertebereich: $(-\\infty, +\\infty)$, keine Beschränkung wie bei $\\sin$/$\\cos$', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-2-2'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-2-2', concepts: ['cos-x-sin-y'] },
      ],
      concepts: [
        { id: 'tan-def',        title: 'Definition: $\\tan\\alpha = \\sin\\alpha/\\cos\\alpha = y/x$',                    dependsOn: [] },
        { id: 'tan-polstellen', title: 'Polstellen bei $\\alpha = 90° + k\\cdot 180°$ (dort $\\cos\\alpha = 0$)',         dependsOn: ['tan-def'] },
        { id: 'tan-periode',    title: 'Periode von $\\tan$ ist $180°$, nicht $360°$',                                    dependsOn: ['tan-def'] },
        { id: 'tan-astc',       title: 'ASTC: $\\tan > 0$ in Q1, Q3 / $\\tan < 0$ in Q2, Q4',                             dependsOn: ['tan-def'] },
        { id: 'tan-ungerade',   title: '$\\tan(-\\alpha) = -\\tan\\alpha$ (ungerade Funktion)',                           dependsOn: ['tan-def'] },
        { id: 'tan-wertebereich', title: 'Wertebereich $\\tan: (-\\infty, +\\infty)$, keine Beschränkung',               dependsOn: ['tan-def', 'tan-polstellen'] },
      ],
      subGoalConcepts: {
        0: ['tan-def'],
        1: ['tan-polstellen'],
        2: ['tan-periode'],
        3: ['tan-astc'],
        4: ['tan-ungerade'],
        5: ['tan-wertebereich'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['tan-def'],          qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-def'],          qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['tan-def'],          qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-def'],          qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['tan-def'],          qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['tan-polstellen'],   qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-polstellen'],   qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['tan-polstellen'],   qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-polstellen'],   qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['tan-polstellen'],   qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['tan-periode'],      qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-periode'],      qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['tan-periode'],      qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-periode'],      qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['tan-periode'],      qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'matching',        uses: ['tan-astc'],         qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-astc'],         qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['tan-astc'],         qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-astc'],         qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['tan-astc'],         qty: 1 },

        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['tan-ungerade'],     qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-ungerade'],     qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['tan-ungerade'],     qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-ungerade'],     qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['tan-ungerade'],     qty: 1 },

        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['tan-wertebereich'], qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tan-wertebereich'], qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'true-false',      uses: ['tan-wertebereich'], qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tan-wertebereich'], qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'multiple-choice', uses: ['tan-wertebereich'], qty: 1 },
      ],
    },
    nextLessonId: 'trig-2-5',
    steps: [
      {
        id: 'trig-2-4-s1', type: 'explanation-formal', title: 'tan als Quotient',
        content: `$$\\tan(\\alpha) = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)} = \\dfrac{y}{x}$$

**Am Einheitskreis heißt das:** $\\tan(\\alpha)$ ist die **Steigung** der Geraden vom Ursprung zum Punkt $P(\\cos\\alpha, \\sin\\alpha)$. Die Steigung der Ursprungsgerade ist $m = \\dfrac{y}{x}$.

**Wichtig:** $\\tan$ ist **nicht definiert**, wenn $\\cos(\\alpha) = 0$, also bei $\\alpha = 90°, 270°, \\ldots$. Dort gibt es senkrechte Asymptoten — die Gerade ist senkrecht und hat keine endliche Steigung.

**Periode:** Der Tangens hat Periode $180°$ (nicht $360°$!), weil die Steigung einer Geraden sich nach einer halben Drehung wiederholt: die Gerade zeigt zwar in die andere Richtung, die Steigung bleibt.`,
      },
      { id: 'trig-2-4-s2', type: 'exercise', title: 'Aufgabe 1 — tan geometrisch', exerciseRef: 'ex-trig-2-4-a' },
      { id: 'trig-2-4-s3', type: 'exercise', title: 'Aufgabe 2 — tan(90°)', exerciseRef: 'ex-trig-2-4-b' },
      { id: 'trig-2-4-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-2-4-mastery' },
    ],
  },
  {
    id: 'trig-2-5', unitId: 'trig-unit-2',
    title: 'Alle vier Quadranten',
    order: 5, estimatedMinutes: 15,
    learningGoals: ['Winkel in allen Quadranten berechnen', 'Reduktionsformeln anwenden', 'Referenzwinkel bilden'],
    subGoals: [
      { label: 'Quadrantengrenzen: Q1 $0°$–$90°$, Q2 $90°$–$180°$, Q3 $180°$–$270°$, Q4 $270°$–$360°$', examRelevance: 'hoch' },
      { label: 'ASTC-Regel: **A**lle (Q1), **S**inus (Q2), **T**angens (Q3), **C**osinus (Q4) positiv', examRelevance: 'hoch' },
      { label: 'Referenzwinkel = Abstand zur nächsten $x$-Achsen-Hälfte ($0°$ oder $180°$)', examRelevance: 'hoch' },
      { label: '4-Schritt-Verfahren: Quadrant → Referenzwinkel → Grundwert (Q1) → Vorzeichen aus ASTC', examRelevance: 'hoch' },
      { label: 'Standardwerte $\\sin$/$\\cos$ für $0°/30°/45°/60°/90°$ auswendig, Rest per Reduktion', examRelevance: 'hoch' },
      { label: 'Winkel $> 360°$ oder $< 0°$ per $\\alpha \\bmod 360°$ in Hauptbereich bringen', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-2-3', 'trig-2-4'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-2-3', concepts: ['supplement-formel', 'punktspiegelung', 'periodizitaet-360'] },
        { lessonId: 'trig-2-4', concepts: ['tan-astc'] },
        { lessonId: 'trig-1-3', concepts: ['grundwerte-sin', 'grundwerte-cos'] },
      ],
      concepts: [
        { id: 'quadranten-grenzen', title: 'Quadranten Q1–Q4 mit den Winkelgrenzen $0°/90°/180°/270°/360°$',           dependsOn: [] },
        { id: 'astc-vollstaendig',  title: 'ASTC: Q1 alle, Q2 Sinus, Q3 Tangens, Q4 Kosinus positiv',                  dependsOn: ['quadranten-grenzen'] },
        { id: 'referenzwinkel-def', title: 'Referenzwinkel = spitzer Winkel zur $x$-Achse (zu $0°$ oder $180°$)',      dependsOn: ['quadranten-grenzen'] },
        { id: 'vier-schritt-reduktion', title: '4-Schritt: Quadrant → Referenzwinkel → Q1-Grundwert → Vorzeichen aus ASTC', dependsOn: ['astc-vollstaendig', 'referenzwinkel-def'] },
        { id: 'standardwerte-reduktion', title: 'Nur Q1-Grundwerte auswendig, alle anderen per Reduktion',             dependsOn: ['vier-schritt-reduktion'] },
        { id: 'winkel-hauptbereich', title: 'Winkel $\\notin [0°, 360°)$ per $\\alpha \\bmod 360°$ reduzieren',         dependsOn: [] },
      ],
      subGoalConcepts: {
        0: ['quadranten-grenzen'],
        1: ['astc-vollstaendig'],
        2: ['referenzwinkel-def'],
        3: ['vier-schritt-reduktion'],
        4: ['standardwerte-reduktion'],
        5: ['winkel-hauptbereich'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'matching',        uses: ['quadranten-grenzen'],         qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['quadranten-grenzen'],         qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['quadranten-grenzen'],         qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['quadranten-grenzen'],         qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['quadranten-grenzen'],         qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'matching',        uses: ['astc-vollstaendig'],          qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['astc-vollstaendig'],          qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['astc-vollstaendig'],          qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['astc-vollstaendig'],          qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['astc-vollstaendig'],          qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['referenzwinkel-def'],         qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['referenzwinkel-def'],         qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['referenzwinkel-def'],         qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['referenzwinkel-def'],         qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['referenzwinkel-def'],         qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['vier-schritt-reduktion'],     qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vier-schritt-reduktion'],     qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['vier-schritt-reduktion'],     qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vier-schritt-reduktion'],     qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'sorting',         uses: ['vier-schritt-reduktion'],     qty: 1 },

        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['standardwerte-reduktion'],    qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['standardwerte-reduktion'],    qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['standardwerte-reduktion'],    qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['standardwerte-reduktion'],    qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['standardwerte-reduktion'],    qty: 1 },

        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['winkel-hauptbereich'],        qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['winkel-hauptbereich'],        qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['winkel-hauptbereich'],        qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['winkel-hauptbereich'],        qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['winkel-hauptbereich'],        qty: 1 },
      ],
    },
    nextLessonId: 'trig-3-1',
    steps: [
      {
        id: 'trig-2-5-s1', type: 'explanation-formal', title: 'Reduktionsformeln',
        content: `Für Winkel außerhalb des 1. Quadranten: Immer auf Winkel im 1. Quadrant (Referenzwinkel) zurückführen + Vorzeichen aus ASTC.

**Zusammenfassung:**

| Quadrant | Winkelbereich    | $\\sin$ | $\\cos$ | $\\tan$ |
|----------|------------------|---------|---------|---------|
| 1.       | $0°$–$90°$       | $+$     | $+$     | $+$     |
| 2.       | $90°$–$180°$     | $+$     | $-$     | $-$     |
| 3.       | $180°$–$270°$    | $-$     | $-$     | $+$     |
| 4.       | $270°$–$360°$    | $-$     | $+$     | $-$     |

**Am Einheitskreis heißt das:** Die Vorzeichen folgen direkt aus dem Quadranten — links ist $x < 0$ (also $\\cos < 0$), unten ist $y < 0$ (also $\\sin < 0$).

**Vorgehen in 4 Schritten:**
1. Quadrant bestimmen
2. Referenzwinkel $= $ Abstand zur nächsten x-Achsenhälfte ($0°$ oder $180°$)
3. Grundwert im 1. Quadrant berechnen
4. Vorzeichen aus Tabelle davorsetzen`,
      },
      {
        id: 'trig-2-5-s2', type: 'visualization', title: 'Alle Quadranten erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 210, showTangent: true },
      },
      { id: 'trig-2-5-s3', type: 'exercise', title: 'Aufgabe 1 — Quadrant von 200°', exerciseRef: 'ex-trig-2-5-a' },
      { id: 'trig-2-5-s4', type: 'exercise', title: 'Aufgabe 2 — sin(210°)', exerciseRef: 'ex-trig-2-5-b' },
      { id: 'trig-2-5-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-2-5-mastery' },
    ],
  },
]

export const unit2 = {
  id: 'trig-unit-2',
  title: 'Einheitskreis und Winkelfunktionen',
  order: 2,
  description: 'Der Einheitskreis als universelle Definition von sin, cos und tan',
  unitGoals: [
    'Sinus/Kosinus am Einheitskreis als $y$- bzw. $x$-Koordinate eines Punktes verstehen',
    'Symmetrien ($\\sin(-\\alpha) = -\\sin\\alpha$, $\\cos(-\\alpha) = \\cos\\alpha$) und Periodizität ($2\\pi$) anwenden',
    'Werte in allen vier Quadranten durch Vorzeichen und Achsensymmetrie bestimmen',
    'Zusammenhang $\\sin^2\\alpha + \\cos^2\\alpha = 1$ als Pythagoras am Einheitskreis erkennen',
  ],
  lessons: lessons_u2,
  exercises: exercises_u2,
}
