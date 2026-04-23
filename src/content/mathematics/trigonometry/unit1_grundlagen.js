// ── Unit 1: Grundlagen der Trigonometrie ─────────────────────────────────────

export const exercises_u1 = {
  // ───────────── Lektion 1-0: Winkel-Intuition (Einstieg) ─────────────
  'ex-trig-1-0-a': {
    id: 'ex-trig-1-0-a', lessonId: 'trig-1-0', type: 'multiple-choice',
    question: 'Wie viele Grad hat ein rechter Winkel?',
    options: ['$90°$', '$180°$', '$45°$', '$360°$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Ein rechter Winkel entsteht, wenn zwei Geraden senkrecht aufeinander stehen.

**Rechnung:** Der volle Kreis hat $360°$. Ein Viertel davon ist $360°/4 = 90°$ — genau ein rechter Winkel.

**Probe:** Eine Ecke eines Quadrats oder Rechtecks hat immer $90°$.

**Typischer Fehler:** $180°$ ist ein gestreckter Winkel (Halbkreis, zwei gerade aufeinanderfolgende Linien) — das ist doppelt so viel wie ein rechter Winkel.`,
    hints: [
      'Denk an die Ecke eines Buches oder eines Fensters — wie groß ist der Winkel dort?',
      'Ein Viertel eines vollen Kreises ($360°$).',
    ],
    wrongAnswerExplanations: {
      1: 'Das wäre ein **gestreckter** Winkel (zwei Geraden bilden eine Linie). Ein rechter Winkel ist halb so groß.',
      2: 'Das wäre ein **halb**-rechter Winkel. Ein rechter Winkel ist doppelt so groß.',
      3: 'Das ist ein **voller** Kreis. Ein rechter Winkel ist nur ein Viertel davon.',
    },
  },
  'ex-trig-1-0-b': {
    id: 'ex-trig-1-0-b', lessonId: 'trig-1-0', type: 'true-false',
    statement: 'Ein Winkel von $45°$ ist die Hälfte eines rechten Winkels.',
    correct: true,
    explanation: `**Ansatz:** Rechter Winkel $= 90°$. Die Hälfte davon ist $90°/2 = 45°$.

**Rechnung:** $45° \\cdot 2 = 90°$. ✓

**Probe:** Die Diagonale eines Quadrats teilt die $90°$-Ecke in zwei gleiche Winkel von je $45°$.

**Typischer Fehler:** Die Hälfte des vollen Kreises ($180°$) mit dem halben rechten Winkel verwechseln.`,
    hints: [
      '$45° + 45° = ?$',
      'Denk an die Diagonale eines Quadrats.',
    ],
  },
  'ex-trig-1-0-c': {
    id: 'ex-trig-1-0-c', lessonId: 'trig-1-0', type: 'multiple-choice',
    question: 'Welche Aussage über Winkel stimmt?',
    options: [
      'Spitzer Winkel: kleiner als $90°$; stumpfer Winkel: zwischen $90°$ und $180°$',
      'Spitzer Winkel: größer als $90°$; stumpfer Winkel: größer als $180°$',
      'Ein $180°$-Winkel heißt „rechter Winkel"',
      'Ein gestreckter Winkel hat $90°$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Winkelklassen merken.

**Rechnung:**
- $0° < \\alpha < 90°$ → spitzer Winkel
- $\\alpha = 90°$ → rechter Winkel
- $90° < \\alpha < 180°$ → stumpfer Winkel
- $\\alpha = 180°$ → gestreckter Winkel
- $180° < \\alpha < 360°$ → überstumpfer Winkel

**Probe:** Skizziere $30°$ (spitz), $120°$ (stumpf), $180°$ (gestreckt) zur Kontrolle.

**Typischer Fehler:** „Rechter Winkel" meint nicht $180°$, sondern $90°$ (der „richtige/gerade" Winkel an einer Ecke).`,
    hints: [
      'Spitz = schmal, stumpf = weit offen.',
      'Rechter Winkel = $90°$, gestreckter Winkel = $180°$.',
    ],
    wrongAnswerExplanations: {
      1: 'Die Größenbeziehungen sind umgekehrt. Spitz ist **kleiner**, stumpf **zwischen $90°$ und $180°$**.',
      2: '„Rechter Winkel" bezeichnet traditionell $90°$ — das kommt von „richtig/gerade" gegenüber einem flachen Boden.',
      3: 'Ein gestreckter Winkel ist $180°$ (zwei Linien in entgegengesetzte Richtung). $90°$ ist der rechte Winkel.',
    },
  },
  'ex-trig-1-0-d': {
    id: 'ex-trig-1-0-d', lessonId: 'trig-1-0', type: 'matching',
    question: 'Ordne jeden Winkel seiner Klasse zu.',
    pairs: [
      { left: '$30°$', right: 'spitzer Winkel' },
      { left: '$90°$', right: 'rechter Winkel' },
      { left: '$135°$', right: 'stumpfer Winkel' },
      { left: '$180°$', right: 'gestreckter Winkel' },
    ],
    explanation: `**Ansatz:** Gradzahl mit Klassen-Definition vergleichen.

**Rechnung:** $30°$ < $90°$ → spitz. $135°$ zwischen $90°$ und $180°$ → stumpf. Andere sind Fixpunkte.

**Probe:** Zeichnerisch: $30°$ ist ein schmaler Öffnungswinkel, $135°$ eine weit offene Ecke.

**Typischer Fehler:** $90°$ fälschlich als „spitz" klassifizieren — $90°$ ist genau die Grenze und heißt **rechter** Winkel.`,
    hints: [
      'Klassen: 0°–90° spitz, 90° rechter, 90°–180° stumpf, 180° gestreckt.',
    ],
  },
  'ex-trig-1-0-mastery': {
    id: 'ex-trig-1-0-mastery', lessonId: 'trig-1-0', type: 'number-input', isMasteryCheck: true,
    question: 'Drei Winkel eines Dreiecks sind $60°$, $80°$ und $x$. Wie groß ist $x$ in Grad?',
    correctValue: 40, tolerance: 0, unit: '°',
    explanation: `**Ansatz:** Winkelsumme im Dreieck beträgt immer $180°$.

**Rechnung:** $60 + 80 + x = 180 \\Rightarrow x = 180 - 140 = 40$.

**Probe:** $60 + 80 + 40 = 180°$ ✓.

**Typischer Fehler:** Mit $360°$ rechnen (das ist die Winkelsumme im Viereck, nicht im Dreieck).`,
    hints: [
      'Die drei Innenwinkel eines Dreiecks summieren sich auf $180°$.',
      '$x = 180° - 60° - 80°$.',
    ],
  },

  // ───────────── Lektion 1-1: Winkel und ihre Maße ─────────────
  'ex-trig-1-1-a': {
    id: 'ex-trig-1-1-a', lessonId: 'trig-1-1', type: 'multiple-choice',
    question: 'Wie viel Radiant entspricht einem Winkel von $90°$?',
    options: ['$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{2}$', '$\\pi$', '$2\\pi$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Der volle Kreis hat $360°$ bzw. $2\\pi$ Radiant. Teile in Viertel.

**Rechnung:** $90° = \\dfrac{1}{4} \\cdot 360° \\Rightarrow \\dfrac{1}{4} \\cdot 2\\pi = \\dfrac{\\pi}{2}$.

Alternativ über die Formel: $\\alpha_{\\text{rad}} = \\alpha_{\\circ} \\cdot \\dfrac{\\pi}{180} = 90 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{2}$.

**Probe:** $\\dfrac{\\pi}{2} \\approx 1{,}571$ rad. Rückrechnung: $1{,}571 \\cdot \\dfrac{180}{\\pi} \\approx 90°$. ✓

**Am Einheitskreis:** $90°$ entspricht dem obersten Punkt $(0,1)$. Der zurückgelegte Bogen von der positiven x-Achse ist ein Viertelumlauf $= \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$.

**Typischer Fehler:** Taschenrechner in RAD-Modus, aber Winkel in Grad eingegeben — immer DEG/RAD-Einstellung prüfen!`,
    hints: [
      'Welches Winkelmaß suchst du? Radiant. Skizze am Einheitskreis: $90°$ = Viertelumlauf.',
      'Formel: $\\alpha_{\\text{rad}} = \\alpha_{\\circ} \\cdot \\dfrac{\\pi}{180}$. Der Vollkreis hat $2\\pi$.',
      'Teile $2\\pi$ durch $4$ für ein Viertel. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast nur ein Achtel statt ein Viertel des Vollkreises genommen. $\\pi/4$ rad entspricht $45°$, nicht $90°$ (denn $2\\pi/8 = \\pi/4$).',
      2: '$\\pi$ rad entspricht $180°$, nicht $90°$. Das ist der halbe Vollkreis; $90°$ ist nur der Viertelumlauf, also $\\pi/2$.',
      3: '$2\\pi$ rad ist der ganze Vollkreis ($360°$). $90°$ ist nur ein Viertel davon, also $\\pi/2$.',
    },
  },
  'ex-trig-1-1-b': {
    id: 'ex-trig-1-1-b', lessonId: 'trig-1-1', type: 'multiple-choice',
    question: 'Welcher Winkel im Gradmaß entspricht $\\pi$ Radiant?',
    options: ['$90°$', '$180°$', '$270°$', '$360°$'],
    correctIndex: 1,
    explanation: `**Ansatz:** $\\pi$ rad ist genau der halbe Vollkreis ($2\\pi$ rad = ganzer Kreis).

**Rechnung:** $\\alpha_{\\circ} = \\alpha_{\\text{rad}} \\cdot \\dfrac{180}{\\pi} = \\pi \\cdot \\dfrac{180}{\\pi} = 180°$.

**Probe:** Setze $180°$ zurück: $180 \\cdot \\dfrac{\\pi}{180} = \\pi$. ✓

**Am Einheitskreis:** $\\pi$ rad bringt dich zum Punkt $(-1, 0)$ — der gegenüberliegenden Seite des Startpunkts $(1,0)$. Das ist eine halbe Umdrehung.

**Typischer Fehler:** $\\pi \\approx 3{,}14$ rad wird im DEG-Modus als $3{,}14°$ interpretiert — dort wäre $\\sin(\\pi) \\approx 0{,}055$ statt exakt $0$.`,
    hints: [
      'Welches Winkelmaß? Gradmaß. Skizze: $\\pi$ rad = halber Umlauf.',
      'Formel: $\\alpha_{\\circ} = \\alpha_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$. $\\pi$ kürzt sich.',
      '$2\\pi$ rad = $360°$, also $\\pi$ rad = $180°$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast nur ein Viertel statt einer Hälfte des Kreises gerechnet. $90°$ entspricht $\\dfrac{\\pi}{2}$ rad, nicht $\\pi$ rad. Formel: $\\alpha_{\\circ} = \\pi \\cdot \\dfrac{180}{\\pi} = 180°$ — das $\\pi$ kürzt sich komplett weg.',
      2: 'Du hast $\\dfrac{3\\pi}{2}$ mit $\\pi$ verwechselt. $270°$ entspricht $\\dfrac{3\\pi}{2}$ rad (drei Viertel des Vollkreises), nicht $\\pi$. Bei $\\pi$ bist du erst bei der halben Umdrehung, also $180°$.',
      3: 'Das ist der volle Kreis, der $2\\pi$ rad entspricht — nicht $\\pi$. Du hast die Hälfte verdoppelt. Merke: $2\\pi$ rad $= 360°$, also $\\pi$ rad $= 180°$ (halbe Umdrehung).',
    },
  },
  'ex-trig-1-1-c': {
    id: 'ex-trig-1-1-c', lessonId: 'trig-1-1', type: 'number-input',
    question: 'Eine Welle dreht sich um einen Winkel von $60°$. Welche Bogenlänge legt ein Punkt im Abstand $r = 0{,}5\\,\\text{m}$ von der Drehachse zurück? (in Meter, auf 3 Nachkommastellen)',
    correctValue: 0.524,
    tolerance: 0.005,
    unit: 'm',
    explanation: `**Ansatz:** Bogenlänge $s = r \\cdot \\alpha_{\\text{rad}}$ (der fundamentale Grund, warum man in Technik mit Bogenmaß rechnet).

**Rechnung:**
1. Winkel in Radiant: $\\alpha_{\\text{rad}} = 60 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{3} \\approx 1{,}047$.
2. Bogenlänge: $s = 0{,}5 \\cdot \\dfrac{\\pi}{3} = \\dfrac{\\pi}{6} \\approx 0{,}524\\,\\text{m}$.

**Warum Bogenmaß?** Die Formel $s = r\\cdot\\alpha$ gilt **nur**, wenn $\\alpha$ in Radiant eingesetzt wird. Mit Grad stünde ein Zusatzfaktor $\\pi/180$ drin.

**Typischer Fehler:** Direkt $s = r \\cdot 60 = 30$ rechnen — ohne Umrechnung. Oder DEG statt RAD beim Taschenrechner.`,
    hints: [
      'Formel: Bogenlänge $s = r \\cdot \\alpha$ — aber welches Winkelmaß?',
      'Die Formel gilt nur in Radiant. $60°$ zuerst umrechnen: $\\pi/3$.',
      '$s = 0{,}5 \\cdot \\pi/3 = \\pi/6 \\approx 0{,}524\\,\\text{m}$.',
    ],
  },
  'ex-trig-1-1-mastery': {
    id: 'ex-trig-1-1-mastery', lessonId: 'trig-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Winkel beträgt $\\dfrac{5\\pi}{6}$ rad. In welchem Quadrant liegt der zugehörige Punkt auf dem Einheitskreis, und wie viele Grad sind das?',
    options: [
      '$150°$, 2. Quadrant',
      '$150°$, 1. Quadrant',
      '$120°$, 2. Quadrant',
      '$225°$, 3. Quadrant',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Zuerst in Grad umrechnen, dann lokalisieren.

**Rechnung:** $\\dfrac{5\\pi}{6} \\cdot \\dfrac{180}{\\pi} = \\dfrac{5 \\cdot 180}{6} = 150°$.

**Quadrant:** $150°$ liegt zwischen $90°$ und $180°$ → **2. Quadrant** (links-oben). Am Einheitskreis: Punkt $\\left(-\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$.

**Synthese-Check:** Ohne Umrechnung kannst du auch direkt sehen: $\\dfrac{5\\pi}{6}$ liegt zwischen $\\dfrac{\\pi}{2}$ ($=90°$) und $\\pi$ ($=180°$) — das ist der 2. Quadrant.

**Typischer Fehler:** Option C („$120°$"): dies entspricht $\\dfrac{2\\pi}{3}$, nicht $\\dfrac{5\\pi}{6}$.`,
    hints: [
      'Zwei Schritte: erst Bogenmaß → Gradmaß, dann Quadrant bestimmen.',
      'Formel: $\\alpha_{\\circ} = \\alpha_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$.',
      '$\\dfrac{5\\pi}{6}$ liegt zwischen $\\dfrac{\\pi}{2}$ und $\\pi$ — welcher Quadrant ist das?',
    ],
    wrongAnswerExplanations: {
      1: 'Die Gradzahl stimmt, aber der Quadrant ist falsch. Der 1. Quadrant reicht nur von $0°$ bis $90°$. $150°$ liegt zwischen $90°$ und $180°$, also im 2. Quadrant. Prüfe die Quadrantengrenzen.',
      2: 'Du hast den falschen Bruch umgerechnet: $120° = \\dfrac{2\\pi}{3}$, nicht $\\dfrac{5\\pi}{6}$. Rechnung: $\\dfrac{5\\pi}{6} \\cdot \\dfrac{180}{\\pi} = \\dfrac{5 \\cdot 180}{6} = 150°$ (nicht $120°$).',
      3: 'Beide Angaben sind falsch. $225°$ entspricht $\\dfrac{5\\pi}{4}$ (nicht $\\dfrac{5\\pi}{6}$), und der 3. Quadrant beginnt erst bei $180°$. Setze korrekt ein: $\\dfrac{5\\pi}{6} \\cdot \\dfrac{180}{\\pi} = 150°$ → 2. Quadrant.',
    },
  },

  // ───────────── Lektion 1-2: Rechtwinkliges Dreieck ─────────────
  'ex-trig-1-2-a': {
    id: 'ex-trig-1-2-a', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: 'In einem rechtwinkligen Dreieck ist $\\sin(\\alpha)$ definiert als:',
    options: ['Ankathete / Hypotenuse', 'Gegenkathete / Hypotenuse', 'Gegenkathete / Ankathete', 'Hypotenuse / Gegenkathete'],
    correctIndex: 1,
    explanation: `**Ansatz:** Eselsbrücke SOH-CAH-TOA anwenden.

**Regel:** $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}} = \\dfrac{G}{H}$ (SOH).

**Warum?** Am Einheitskreis ist die y-Koordinate gleich $\\sin(\\alpha)$. In einem rechtwinkligen Dreieck mit Hypotenuse $H$ entspricht die Gegenkathete der senkrechten Projektion — geteilt durch $H$ ergibt sich der Sinuswert.

**Probe:** Bei $\\alpha = 30°$ in einem $30°-60°-90°$-Dreieck: $G = 1$, $H = 2$, also $\\sin(30°) = \\dfrac{1}{2}$. ✓

**Typischer Fehler:** Gegenkathete und Ankathete verwechseln. Merke: Die Gegenkathete liegt *gegenüber* von $\\alpha$.`,
    hints: [
      'Welche Eselsbrücke hilft? SOH-CAH-TOA. Skizze mit markiertem Winkel $\\alpha$.',
      'SOH: **S**inus = **O**pposite (Gegenkathete) / **H**ypotenuse.',
      'Am Einheitskreis heißt das: $\\sin(\\alpha)$ ist die y-Koordinate. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist die Definition von $\\cos(\\alpha)$, nicht $\\sin(\\alpha)$. Du hast die Eselsbrücke SOH-CAH-TOA verwechselt: SOH steht für $\\sin$ = Opposite/Hypotenuse (Gegenkathete/Hypotenuse). Ankathete/Hypotenuse ist CAH = Cosinus.',
      2: 'Das wäre $\\tan(\\alpha)$, nicht $\\sin(\\alpha)$. TOA = Tangens = Opposite/Adjacent (Gegenkathete/Ankathete). Bei $\\sin$ muss im Nenner die Hypotenuse stehen, nicht die Ankathete.',
      3: 'Du hast den Bruch umgedreht. $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$, nicht $\\dfrac{\\text{Hypotenuse}}{\\text{Gegenkathete}}$. Da die Hypotenuse die längste Seite ist, läge $\\sin$ sonst über $1$ — das widerspricht $-1 \\leq \\sin \\leq 1$.',
    },
  },
  'ex-trig-1-2-b': {
    id: 'ex-trig-1-2-b', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: '$\\cos(\\alpha)$ ist definiert als:',
    options: ['Gegenkathete / Hypotenuse', 'Ankathete / Hypotenuse', 'Gegenkathete / Ankathete', 'Hypotenuse / Ankathete'],
    correctIndex: 1,
    explanation: `**Ansatz:** Eselsbrücke CAH anwenden.

**Regel:** $\\cos(\\alpha) = \\dfrac{\\text{Ankathete}}{\\text{Hypotenuse}} = \\dfrac{A}{H}$ (CAH).

**Am Einheitskreis:** $\\cos(\\alpha)$ ist die x-Koordinate des Punkts auf dem Kreis. Die Ankathete ist die horizontale Projektion; geteilt durch $H$ ergibt den Kosinuswert.

**Probe:** Bei $\\alpha = 60°$ in einem $30°-60°-90°$-Dreieck: $A = 1$, $H = 2$, also $\\cos(60°) = \\dfrac{1}{2}$. ✓

**Typischer Fehler:** Ankathete mit Hypotenuse verwechseln. Die Hypotenuse liegt *gegenüber* vom rechten Winkel, die Ankathete *neben* $\\alpha$.`,
    hints: [
      'Welche Eselsbrücke? CAH. Skizze des Dreiecks mit $\\alpha$ markieren.',
      'CAH: **C**osinus = **A**dj (Ankathete) / **H**ypotenuse.',
      'Am Einheitskreis heißt das: $\\cos(\\alpha)$ ist die x-Koordinate. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist die Definition von $\\sin(\\alpha)$, nicht $\\cos(\\alpha)$. Du hast $\\sin$ und $\\cos$ verwechselt. Eselsbrücke: SOH = Sinus/Opposite, CAH = Cosinus/Adjacent — Cosinus gehört zur Ankathete.',
      2: 'Das ist $\\tan(\\alpha)$, nicht $\\cos(\\alpha)$. TOA = Tangens = Gegenkathete/Ankathete. Bei $\\cos$ muss im Nenner die Hypotenuse stehen. Am Einheitskreis ist $\\cos$ die x-Koordinate, $\\tan$ die Steigung $y/x$.',
      3: 'Du hast den Bruch umgedreht. $\\cos(\\alpha) = \\dfrac{\\text{Ankathete}}{\\text{Hypotenuse}}$, nicht umgekehrt. Weil $H \\geq A$, würde $\\dfrac{H}{A} \\geq 1$ gelten — das widerspricht $-1 \\leq \\cos \\leq 1$.',
    },
  },
  'ex-trig-1-2-c': {
    id: 'ex-trig-1-2-c', lessonId: 'trig-1-2', type: 'multiple-choice',
    question: '$\\tan(\\alpha)$ ist definiert als:',
    options: ['Hypotenuse / Gegenkathete', 'Ankathete / Gegenkathete', 'Gegenkathete / Ankathete', 'Ankathete / Hypotenuse'],
    correctIndex: 2,
    explanation: `**Ansatz:** Eselsbrücke TOA oder Quotientenformel.

**Regel:** $\\tan(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\dfrac{G}{A} = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)}$ (TOA).

**Am Einheitskreis:** $\\tan(\\alpha) = \\dfrac{y}{x}$ ist die *Steigung* der Geraden vom Ursprung zum Punkt auf dem Kreis.

**Probe:** Bei $\\alpha = 45°$: $G = A$, also $\\tan(45°) = 1$. ✓

**Typischer Fehler:** $\\dfrac{A}{G}$ statt $\\dfrac{G}{A}$ — das wäre $\\cot(\\alpha)$ (Kotangens).`,
    hints: [
      'Welche Eselsbrücke? TOA. Skizze mit $\\alpha$.',
      'TOA: **T**angens = **O**pposite (Gegenkathete) / **A**dj (Ankathete).',
      'Zusammenhang: $\\tan(\\alpha) = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast Zähler und Nenner umgedreht UND falsche Seiten gewählt. Richtig ist TOA: $\\tan = \\dfrac{\\text{Gegenkathete}}{\\text{Ankathete}}$. Die Hypotenuse kommt bei $\\tan$ gar nicht vor — sie gehört zu $\\sin$ und $\\cos$.',
      1: 'Du hast den Bruch umgedreht: Das ist $\\cot(\\alpha) = \\dfrac{1}{\\tan(\\alpha)} = \\dfrac{A}{G}$, nicht $\\tan$. Merke TOA: $\\tan$ hat die Gegenkathete oben (Opposite), die Ankathete unten (Adjacent).',
      3: 'Das ist $\\cos(\\alpha)$, nicht $\\tan(\\alpha)$. Bei $\\tan$ steht im Nenner die Ankathete (nicht die Hypotenuse). Zur Sicherheit: $\\tan = \\sin/\\cos = (G/H)/(A/H) = G/A$.',
    },
  },
  'ex-trig-1-2-mastery': {
    id: 'ex-trig-1-2-mastery', lessonId: 'trig-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Dreieck hat Gegenkathete $= 3$, Ankathete $= 4$, Hypotenuse $= 5$. Was ist $\\sin(\\alpha)$?',
    options: ['$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** SOH anwenden: $\\sin(\\alpha) = \\dfrac{G}{H}$.

**Rechnung:** $\\sin(\\alpha) = \\dfrac{G}{H} = \\dfrac{3}{5} = 0{,}6$.

**Probe mit Pythagoras:** $3^{2} + 4^{2} = 9 + 16 = 25 = 5^{2}$ ✓ — das ist das klassische $3{-}4{-}5$-Dreieck.

**Probe mit Identität:** $\\cos(\\alpha) = \\dfrac{4}{5} = 0{,}8$. Dann $\\sin^{2}(\\alpha) + \\cos^{2}(\\alpha) = 0{,}36 + 0{,}64 = 1$. ✓

**Am Einheitskreis:** Skaliere das Dreieck so, dass $H = 1$ wird (Divisor $5$). Dann liegt der Punkt bei $\\left(\\dfrac{4}{5}, \\dfrac{3}{5}\\right) = (\\cos\\alpha, \\sin\\alpha)$.

**Typischer Fehler:** $\\dfrac{4}{5}$ (das wäre $\\cos(\\alpha)$) oder $\\dfrac{3}{4}$ (das wäre $\\tan(\\alpha)$).`,
    hints: [
      'Welcher Winkel? $\\alpha$. Welche Formel? SOH: $\\sin = G/H$.',
      'Formel: $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$.',
      'Setze $G = 3$, $H = 5$ ein. Prüfe mit $\\sin^{2} + \\cos^{2} = 1$.',
    ],
    wrongAnswerExplanations: {
      1: 'Das ist $\\cos(\\alpha) = \\dfrac{A}{H} = \\dfrac{4}{5}$, nicht $\\sin(\\alpha)$. Du hast Ankathete und Gegenkathete verwechselt. SOH: bei $\\sin$ gehört die Gegenkathete ($G = 3$) in den Zähler, nicht die Ankathete.',
      2: 'Das ist $\\tan(\\alpha) = \\dfrac{G}{A} = \\dfrac{3}{4}$, nicht $\\sin(\\alpha)$. Du hast die falsche Formel verwendet: bei $\\sin$ steht die Hypotenuse ($H = 5$) im Nenner, nicht die Ankathete.',
      3: 'Das ist $\\dfrac{H}{G} = \\dfrac{5}{3}$, der Kehrwert von $\\sin(\\alpha)$ (also $\\csc(\\alpha)$). Der Wert ist größer als $1$ — unmöglich für $\\sin$, das stets im Bereich $[-1, 1]$ liegt. Bruch umdrehen.',
    },
  },

  // ───────────── Lektion 1-3: Grundwerte ─────────────
  'ex-trig-1-3-a': {
    id: 'ex-trig-1-3-a', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: '$\\sin(30°) = $?',
    options: ['$0$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Grundwert aus dem halbierten gleichseitigen Dreieck herleiten.

**Rechnung:** Im $30°-60°-90°$-Dreieck mit Hypotenuse $2$ ist die Gegenkathete von $30°$ gerade $1$. Also $\\sin(30°) = \\dfrac{1}{2}$.

**Eselsbrücke:** Sinus-Muster $\\dfrac{\\sqrt{0}}{2}, \\dfrac{\\sqrt{1}}{2}, \\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{3}}{2}, \\dfrac{\\sqrt{4}}{2}$ für $0°, 30°, 45°, 60°, 90°$.

**Am Einheitskreis:** $30° = \\dfrac{\\pi}{6}$. Der Punkt liegt bei $\\left(\\dfrac{\\sqrt{3}}{2}, \\dfrac{1}{2}\\right)$ — die y-Koordinate ist $\\dfrac{1}{2}$.

**Probe:** $\\sin^{2}(30°) + \\cos^{2}(30°) = \\dfrac{1}{4} + \\dfrac{3}{4} = 1$. ✓

**Typischer Fehler:** Taschenrechner im RAD-Modus und $\\sin(30)$ eingegeben $\\approx -0{,}988$ — falsches Winkelmaß!`,
    hints: [
      'Welches Winkelmaß? Grad. Welche Grundwerte kennst du auswendig?',
      'Muster: $\\sin(0°) = 0$, $\\sin(30°) = ?$, $\\sin(45°) = \\dfrac{\\sqrt{2}}{2}$, $\\sin(60°) = \\dfrac{\\sqrt{3}}{2}$, $\\sin(90°) = 1$.',
      'Am Einheitskreis: y-Koordinate bei $30°$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist $\\sin(0°)$, nicht $\\sin(30°)$. Bei $0°$ liegt der Punkt auf der x-Achse, y-Koordinate $= 0$. Bei $30°$ ist der Punkt schon nach oben gedreht, $\\sin(30°) = \\dfrac{1}{2}$.',
      2: 'Das ist $\\sin(45°) = \\dfrac{\\sqrt{2}}{2}$, nicht $\\sin(30°)$. Du hast die Grundwerte vertauscht. Merke das Muster: $\\sin(0°){=}0$, $\\sin(30°){=}\\dfrac{1}{2}$, $\\sin(45°){=}\\dfrac{\\sqrt{2}}{2}$, $\\sin(60°){=}\\dfrac{\\sqrt{3}}{2}$, $\\sin(90°){=}1$.',
      3: 'Das ist $\\sin(60°)$, nicht $\\sin(30°)$. Du hast die Komplementärwinkel verwechselt: $\\sin(60°) = \\cos(30°) = \\dfrac{\\sqrt{3}}{2}$, und $\\sin(30°) = \\cos(60°) = \\dfrac{1}{2}$.',
    },
  },
  'ex-trig-1-3-b': {
    id: 'ex-trig-1-3-b', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: '$\\cos(60°) = $?',
    options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{1}{2}$', '$0$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Grundwert oder Komplementärformel nutzen.

**Regel:** $\\cos(\\alpha) = \\sin(90° - \\alpha)$. Also $\\cos(60°) = \\sin(30°) = \\dfrac{1}{2}$.

**Am Einheitskreis:** $60° = \\dfrac{\\pi}{3}$. Der Punkt liegt bei $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\\right)$ — die x-Koordinate ist $\\dfrac{1}{2}$.

**Probe:** $\\sin^{2}(60°) + \\cos^{2}(60°) = \\dfrac{3}{4} + \\dfrac{1}{4} = 1$. ✓

**Typischer Fehler:** $\\dfrac{\\sqrt{3}}{2}$ wählen — das ist $\\sin(60°)$, nicht $\\cos(60°)$. Merke: Bei $60°$ ist $\\cos$ der *kleinere* Wert, bei $30°$ ist $\\sin$ der *kleinere*.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze am Einheitskreis: wo liegt $60°$?',
      'Nutze $\\cos(\\alpha) = \\sin(90° - \\alpha)$.',
      'Am Einheitskreis heißt das: x-Koordinate bei $60°$ ablesen. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist $\\sin(60°)$ (oder $\\cos(30°)$), nicht $\\cos(60°)$. Du hast $\\sin$ und $\\cos$ verwechselt. Merke: $\\cos(60°) = \\sin(30°) = \\dfrac{1}{2}$ wegen der Komplementärformel $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
      1: 'Das ist $\\sin(45°) = \\cos(45°)$, der Wert für $45°$, nicht für $60°$. Bei $60°$ ist der Punkt weiter nach oben gedreht, die x-Koordinate (= $\\cos$) ist kleiner.',
      3: 'Das ist $\\cos(90°) = 0$, nicht $\\cos(60°)$. Bei $90°$ liegt der Punkt oben auf $(0,1)$, x-Koordinate = $0$. Bei $60°$ ist der Punkt noch nicht ganz oben, die x-Koordinate ist $\\dfrac{1}{2}$.',
    },
  },
  'ex-trig-1-3-c': {
    id: 'ex-trig-1-3-c', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: '$\\sin(45°) = $?',
    options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Aus dem gleichschenklig-rechtwinkligen Dreieck.

**Herleitung:** Ein rechtwinkliges Dreieck mit zwei $45°$-Winkeln hat gleiche Katheten ($G = A$) und Hypotenuse $H = \\sqrt{2} \\cdot G$ (Pythagoras). Also:
$$\\sin(45°) = \\dfrac{G}{H} = \\dfrac{G}{\\sqrt{2} \\cdot G} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} \\approx 0{,}707.$$

**Am Einheitskreis:** $45° = \\dfrac{\\pi}{4}$. Der Punkt liegt bei $\\left(\\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{2}}{2}\\right)$ — x = y, die Winkelhalbierende.

**Wichtig:** Bei $45°$ gilt $\\sin(45°) = \\cos(45°)$, daher $\\tan(45°) = 1$.

**Typischer Fehler:** $\\dfrac{1}{\\sqrt{2}}$ nicht rationalisieren und als Endform stehen lassen.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: gleichschenkliges rechtwinkliges Dreieck.',
      'Bei $45°$: Katheten gleich lang, Hypotenuse $= \\sqrt{2} \\cdot$ Kathete.',
      'Am Einheitskreis: Punkt liegt auf der Winkelhalbierenden $y = x$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist $\\sin(30°)$, nicht $\\sin(45°)$. Du hast Grundwerte verwechselt. Bei $45°$ ist der Punkt weiter nach oben gedreht als bei $30°$, also $\\sin(45°) > \\sin(30°)$. Richtig: $\\sin(45°) = \\dfrac{\\sqrt{2}}{2} \\approx 0{,}707$.',
      2: 'Das ist $\\sin(60°)$, nicht $\\sin(45°)$. Bei $60°$ ist der Punkt weiter nach oben als bei $45°$, also $\\sin(60°) > \\sin(45°)$. Die Werte für $45°$ sind symmetrisch: $\\sin(45°) = \\cos(45°) = \\dfrac{\\sqrt{2}}{2}$.',
      3: 'Das ist $\\sin(90°)$, der Maximalwert. Bei $45°$ ist der Punkt erst auf halbem Weg zum obersten Punkt des Kreises. $\\sin(45°) \\approx 0{,}707$, nicht $1$.',
    },
  },
  'ex-trig-1-3-d': {
    id: 'ex-trig-1-3-d', lessonId: 'trig-1-3', type: 'multiple-choice',
    question: '$\\tan(45°) = $?',
    options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$\\sqrt{3}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\tan = \\dfrac{\\sin}{\\cos}$.

**Rechnung:** $\\tan(45°) = \\dfrac{\\sin(45°)}{\\cos(45°)} = \\dfrac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1$.

**Am Einheitskreis:** Bei $45°$ ist der Punkt $\\left(\\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{2}}{2}\\right)$. Die Steigung der Geraden vom Ursprung dorthin ist $\\dfrac{y}{x} = 1$ — die Winkelhalbierende hat Steigung $1$.

**Probe:** $45°$ = gleichschenkliges rechtwinkliges Dreieck, Katheten gleich lang: $\\tan(45°) = \\dfrac{G}{A} = 1$. ✓

**Typischer Fehler:** DEG/RAD-Verwechslung: $\\tan(45)$ im RAD-Modus $\\approx 1{,}62$, nicht $1$.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $45°$ ist Symmetrieachse im 1. Quadrant.',
      'Formel: $\\tan(\\alpha) = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)}$.',
      'Bei $45°$ gilt $\\sin = \\cos$, also ist der Quotient $= 1$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist $\\tan(0°)$, nicht $\\tan(45°)$. Bei $0°$ ist $\\sin = 0$ und damit $\\tan = 0/1 = 0$. Bei $45°$ sind $\\sin$ und $\\cos$ gleich groß — der Quotient ist $1$, nicht $0$.',
      1: 'Das ist $\\sin(30°)$ oder $\\cos(60°) = \\dfrac{1}{2}$, aber nicht $\\tan(45°)$. Du hast vermutlich $\\tan(30°) = \\dfrac{1}{\\sqrt{3}}$ mit $\\dfrac{1}{2}$ verwechselt. Bei $45°$ gilt $\\tan = 1$ (Winkelhalbierende hat Steigung $1$).',
      3: 'Das ist $\\tan(60°)$, nicht $\\tan(45°)$. Merke die Tangens-Grundwerte: $\\tan(30°) = \\dfrac{1}{\\sqrt{3}}$, $\\tan(45°) = 1$, $\\tan(60°) = \\sqrt{3}$. Bei $45°$ ist der Quotient $\\sin/\\cos$ genau $1$, weil beide gleich sind.',
    },
  },
  'ex-trig-1-3-mastery': {
    id: 'ex-trig-1-3-mastery', lessonId: 'trig-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welcher Wert ist FALSCH?',
    options: ['$\\sin(0°) = 0$', '$\\cos(0°) = 1$', '$\\sin(90°) = 0$', '$\\tan(0°) = 0$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Jede Aussage am Einheitskreis prüfen.

**Prüfung:**
- $\\sin(0°) = 0$: Punkt $(1,0)$, y-Koordinate $= 0$ ✓
- $\\cos(0°) = 1$: Punkt $(1,0)$, x-Koordinate $= 1$ ✓
- $\\sin(90°) = 0$: FALSCH. Punkt $(0,1)$, y-Koordinate $= 1$, also $\\sin(90°) = 1$.
- $\\tan(0°) = 0$: $\\tan(0°) = \\dfrac{0}{1} = 0$ ✓

**Am Einheitskreis:** Bei $90°$ steht der Punkt oben auf $(0, 1)$. Die y-Koordinate ist $1$, die x-Koordinate ist $0$. Also $\\sin(90°) = 1$ (nicht $0$!) und $\\cos(90°) = 0$.

**Typischer Fehler:** $\\sin$ und $\\cos$ bei $0°/90°$ verwechseln. Merke: $\\sin(0°) = 0$ (kein Anteil nach oben), $\\sin(90°) = 1$ (maximaler Anteil nach oben).`,
    hints: [
      'Prüfe jeden Wert einzeln am Einheitskreis — Skizze hilft.',
      'Bei $90°$: Wo liegt der Punkt? Welche Koordinate ist sin, welche cos?',
      'Am Einheitskreis heißt das: $\\sin(\\alpha) = y$, $\\cos(\\alpha) = x$. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: '$\\sin(0°) = 0$ ist korrekt. Bei $0°$ liegt der Punkt bei $(1, 0)$ — y-Koordinate ist $0$, also $\\sin = 0$. Du suchst die *falsche* Aussage — diese ist richtig. Prüfe die anderen Optionen.',
      1: '$\\cos(0°) = 1$ ist korrekt. Bei $0°$ ist der Punkt bei $(1, 0)$ — x-Koordinate ist $1$, also $\\cos = 1$. Du suchst die *falsche* Aussage — diese ist richtig.',
      3: '$\\tan(0°) = 0$ ist korrekt, weil $\\tan = \\dfrac{\\sin(0°)}{\\cos(0°)} = \\dfrac{0}{1} = 0$. Du suchst die *falsche* Aussage — diese ist richtig. Schau dir Option C an: $\\sin(90°) = 1$ (nicht $0$), also ist dort der Fehler.',
    },
  },

  // ───────────── Lektion 1-4: Vorzeichen und Quadranten ─────────────
  'ex-trig-1-4-a': {
    id: 'ex-trig-1-4-a', lessonId: 'trig-1-4', type: 'multiple-choice',
    question: 'Im zweiten Quadranten ($90°$–$180°$) ist:',
    options: ['$\\sin > 0$, $\\cos > 0$', '$\\sin > 0$, $\\cos < 0$', '$\\sin < 0$, $\\cos < 0$', '$\\sin < 0$, $\\cos > 0$'],
    correctIndex: 1,
    explanation: `**Ansatz:** ASTC-Regel oder Koordinaten am Einheitskreis prüfen.

**Rechnung:** Am Einheitskreis liegt ein Punkt im 2. Quadrant links-oben: $x < 0$, $y > 0$. Also $\\cos(\\alpha) = x < 0$ (negativ) und $\\sin(\\alpha) = y > 0$ (positiv). ASTC-Eselsbrücke ("All Students Take Calculus"): 1. Q alle positiv, 2. Q nur Sinus positiv, 3. Q nur Tangens positiv, 4. Q nur Cosinus positiv.

**Probe:** $\\sin(120°) = \\tfrac{\\sqrt{3}}{2} > 0$, $\\cos(120°) = -\\tfrac{1}{2} < 0$ ✓ — passt zur 2.-Quadrant-Regel.

**Typischer Fehler:** ASTC in falsche Reihenfolge setzen. Merke: Die Buchstaben laufen gegen den Uhrzeigersinn durch die Quadranten, startend bei 1.`,
    hints: [
      'Skizze: Zeichne den 2. Quadrant ein und markiere einen Punkt darin.',
      'Am Einheitskreis: $\\cos = x$-Koordinate, $\\sin = y$-Koordinate. Welches Vorzeichen?',
      'ASTC-Regel: In welchem Quadrant ist *welche* Funktion positiv?',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist der 1. Quadrant ($0°$–$90°$, "All positive"), nicht der 2. Im 2. Quadrant liegt der Punkt links-oben, also $x < 0$ — damit ist $\\cos(\\alpha) = x < 0$.',
      2: 'Das ist der 3. Quadrant ($180°$–$270°$), wo der Punkt links-unten liegt ($x < 0$, $y < 0$). Im 2. Quadrant ist aber $y > 0$ (oberhalb der x-Achse), also $\\sin > 0$.',
      3: 'Das ist der 4. Quadrant ($270°$–$360°$), wo der Punkt rechts-unten liegt ($x > 0$, $y < 0$). Im 2. Quadrant ist es genau umgekehrt: $x < 0$, $y > 0$.',
    },
  },
  'ex-trig-1-4-b': {
    id: 'ex-trig-1-4-b', lessonId: 'trig-1-4', type: 'multiple-choice',
    question: '$\\sin(150°) = $?',
    options: ['$-\\dfrac{1}{2}$', '$0$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Reduktionsformel $\\sin(180° - \\alpha) = \\sin(\\alpha)$ anwenden.

**Rechnung:** $\\sin(150°) = \\sin(180° - 30°) = \\sin(30°) = \\dfrac{1}{2}$.

**Am Einheitskreis:** $150°$ liegt im 2. Quadrant. Der Referenzwinkel zur x-Achse ist $180° - 150° = 30°$. Im 2. Quadrant bleibt $\\sin$ positiv (ASTC: "Students"), also $\\sin(150°) = +\\sin(30°) = \\dfrac{1}{2}$.

**Probe:** (Taschenrechner, DEG-Modus) $\\sin(150°) = 0{,}5$ ✓.

**Typischer Fehler:** Vorzeichen im 2. Quadrant vergessen und $-\\dfrac{1}{2}$ angeben — das wäre nur richtig, wenn der Winkel im 3. oder 4. Quadrant läge.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $150°$ liegt wo am Einheitskreis?',
      'Formel: $\\sin(180° - \\alpha) = \\sin(\\alpha)$. Hier $\\alpha = 30°$.',
      'Im 2. Quadrant ist $\\sin$ positiv (ASTC). Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Falsches Vorzeichen. $150°$ liegt im 2. Quadrant, wo $\\sin > 0$ ist (ASTC-Regel: "Students"). Das Minuszeichen gilt erst ab dem 3. Quadrant ($180° < \\alpha < 360°$). Richtig: $\\sin(150°) = +\\sin(30°) = +\\dfrac{1}{2}$.',
      1: '$\\sin(150°) = 0$ würde $150°$ auf der x-Achse verlangen (bei $0°$ oder $180°$). $150°$ liegt aber *zwischen* $90°$ und $180°$, also oberhalb der x-Achse — damit ist $\\sin > 0$, nicht $0$.',
      3: 'Das wäre $\\cos(30°)$ bzw. $\\sin(60°)$. Du hast den Referenzwinkel falsch berechnet: $180° - 150° = 30°$ (nicht $60°$). Oder $\\sin$ und $\\cos$ verwechselt. Richtig: $\\sin(150°) = \\sin(30°) = \\dfrac{1}{2}$.',
    },
  },
  'ex-trig-1-4-mastery': {
    id: 'ex-trig-1-4-mastery', lessonId: 'trig-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\cos(120°) = $?',
    options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Reduktionsformel $\\cos(180° - \\alpha) = -\\cos(\\alpha)$.

**Rechnung:** $\\cos(120°) = \\cos(180° - 60°) = -\\cos(60°) = -\\dfrac{1}{2}$.

**Am Einheitskreis:** $120°$ liegt im 2. Quadrant. Referenzwinkel $= 180° - 120° = 60°$. Im 2. Quadrant ist $\\cos < 0$ (ASTC: nur "Students"/Sinus positiv), daher Vorzeichen kehren: $\\cos(120°) = -\\cos(60°)$.

**Koordinaten:** Bei $120°$: Punkt $\\left(-\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\\right)$. x-Koordinate $= -\\dfrac{1}{2} = \\cos(120°)$. ✓

**Probe:** (Taschenrechner, DEG-Modus) $\\cos(120°) = -0{,}5$ ✓.

**Typischer Fehler:** Vorzeichen vergessen und $+\\dfrac{1}{2}$ angeben.`,
    hints: [
      'Welches Winkelmaß? Grad. Skizze: $120°$ ist im 2. Quadrant.',
      'Formel: $\\cos(180° - \\alpha) = -\\cos(\\alpha)$.',
      'Am Einheitskreis: x-Koordinate bei $120°$ ist negativ. Taschenrechner im richtigen Modus (DEG oder RAD)!',
    ],
    wrongAnswerExplanations: {
      0: 'Vorzeichen vergessen. $120°$ liegt im 2. Quadrant, wo $\\cos < 0$ ist (ASTC: nur "Students"/Sinus positiv). Das ist zwar der Betrag, aber das Minuszeichen fehlt. Richtig: $\\cos(120°) = -\\dfrac{1}{2}$.',
      1: 'Doppelter Fehler: falscher Betrag UND falsches Vorzeichen. Der Referenzwinkel zu $120°$ ist $60°$, und $\\cos(60°) = \\dfrac{1}{2}$ (nicht $\\dfrac{\\sqrt{3}}{2}$, das wäre $\\sin(60°)$). Außerdem fehlt das Minuszeichen.',
      3: 'Falscher Betrag. Du hast $\\sin$ und $\\cos$ verwechselt: $\\dfrac{\\sqrt{3}}{2}$ ist $\\sin(60°)$, nicht $\\cos(60°)$. Zwar ist das Vorzeichen im 2. Quadrant korrekt negativ, aber der Betrag $|\\cos(120°)| = \\cos(60°) = \\dfrac{1}{2}$.',
    },
  },
}

const lessons_u1 = [
  {
    id: 'trig-1-0', unitId: 'trig-unit-1',
    title: 'Winkel-Intuition (Einstieg)',
    order: 0, estimatedMinutes: 8,
    learningGoals: [
      'Spitzen, rechten, stumpfen, gestreckten Winkel visuell erkennen',
      'Winkelsumme im Dreieck ($180°$) anwenden',
      'Anschauung für $45°$, $90°$, $180°$, $360°$ entwickeln',
    ],
    subGoals: [
      { label: 'Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$', examRelevance: 'hoch' },
      { label: 'Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen', examRelevance: 'hoch' },
      { label: 'Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    blueprint: {
      prerequisites: [],
      concepts: [
        { id: 'winkel-def',          title: 'Winkel als Drehung, gemessen in Grad',                                 dependsOn: [] },
        { id: 'winkel-typen',        title: 'Winkeltypen: spitz, recht, stumpf, gestreckt, voll',                   dependsOn: ['winkel-def'] },
        { id: 'winkelsumme-180',     title: 'Innenwinkelsumme im Dreieck: $\\alpha + \\beta + \\gamma = 180°$',      dependsOn: ['winkel-def'] },
        { id: 'scheitel-nebenwinkel', title: 'Scheitelwinkel gleich, Nebenwinkel ergänzen zu $180°$',                dependsOn: ['winkel-def'] },
      ],
      subGoalConcepts: {
        0: ['winkel-def', 'winkel-typen'],
        1: ['winkelsumme-180'],
        2: ['scheitel-nebenwinkel'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['winkel-typen'],       qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['winkel-typen'],       qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['winkel-typen'],       qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['winkel-typen'],       qty: 1, note: 'Distraktor: Grenze $90°$ falsch gezogen' },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['winkel-typen'],       qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['winkelsumme-180'],    qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['winkelsumme-180'],    qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['winkelsumme-180'],    qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['winkelsumme-180'],    qty: 1, note: 'Distraktor: rechter Winkel vergessen oder $90°$ statt $180°$' },
        { subGoal: 1, stage: 'transfer',          type: 'sorting',         uses: ['winkelsumme-180'],    qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['scheitel-nebenwinkel'], qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['scheitel-nebenwinkel'], qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['scheitel-nebenwinkel'], qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['scheitel-nebenwinkel'], qty: 1, note: 'Distraktor: Scheitel- mit Komplementärwinkel verwechselt' },
        { subGoal: 2, stage: 'transfer',          type: 'sorting',         uses: ['scheitel-nebenwinkel'], qty: 1 },
      ],
    },
    nextLessonId: 'trig-1-1',
    steps: [
      {
        id: 'trig-1-0-s1', type: 'explanation-intuitive', title: 'Was ist ein Winkel überhaupt?',
        content: `**Ein Winkel ist eine Drehung.** Stell dir einen Zeiger vor, der im Mittelpunkt fixiert ist und sich dreht: Der Winkel ist, wie weit er gedreht wurde.

**Wichtige Landmarken auf dem vollen Kreis ($360°$):**

| Winkel | Name | Bild |
|---|---|---|
| $0°$ | kein Winkel | zwei Linien übereinander |
| $45°$ | halber rechter Winkel | Diagonale im Quadrat |
| $90°$ | rechter Winkel | Buchecke, Fensterecke |
| $135°$ | stumpf (eineinhalb rechte) | schräg geöffnetes Buch |
| $180°$ | gestreckter Winkel | gerade Linie |
| $270°$ | drei rechte Winkel | Dreiviertelkreis |
| $360°$ | voller Kreis | zurück am Start |

**Anwendung in Maschinenbau:** Wellen, die sich drehen, Kurbeltriebe, Zahnradübersetzungen — alles läuft über Winkel.`,
      },
      {
        id: 'trig-1-0-s2', type: 'explanation-formal', title: 'Winkelsumme im Dreieck',
        content: `**Fundamentale Regel:** Die drei Innenwinkel eines Dreiecks summieren sich **immer auf $180°$** — egal wie das Dreieck aussieht.

$$\\alpha + \\beta + \\gamma = 180°$$

**Beispiel:** Ein rechtwinkliges Dreieck hat einen $90°$-Winkel. Die anderen beiden müssen zusammen $90°$ ergeben.

**Warum das wichtig ist:** Wenn du zwei Winkel kennst, kannst du den dritten direkt ausrechnen.`,
      },
      {
        id: 'trig-1-0-s2b', type: 'visualization', title: 'Einheitskreis — Winkel visuell erfassen',
        visualizationId: 'unit-circle',
        params: { showSine: false, showCosine: false, interactive: true, showQuadrants: true, showLabels: true, initialAngle: 45 },
      },
      { id: 'trig-1-0-s3', type: 'exercise', title: 'Aufgabe 1 — Rechter Winkel', exerciseRef: 'ex-trig-1-0-a' },
      { id: 'trig-1-0-s4', type: 'exercise', title: 'Aufgabe 2 — Halber rechter Winkel', exerciseRef: 'ex-trig-1-0-b' },
      { id: 'trig-1-0-s5', type: 'exercise', title: 'Aufgabe 3 — Winkelklassen', exerciseRef: 'ex-trig-1-0-c' },
      { id: 'trig-1-0-s6', type: 'exercise', title: 'Aufgabe 4 — Zuordnen', exerciseRef: 'ex-trig-1-0-d' },
      { id: 'trig-1-0-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-trig-1-0-mastery' },
    ],
  },
  {
    id: 'trig-1-1', unitId: 'trig-unit-1',
    title: 'Winkel und ihre Maße',
    order: 1, estimatedMinutes: 10,
    learningGoals: ['Grad- und Bogenmaß umrechnen', 'Bedeutung von π im Einheitskreis verstehen', 'DEG/RAD-Modus am Taschenrechner sicher wählen'],
    subGoals: [
      { label: 'DEG/RAD-Umschaltung am Taschenrechner', examRelevance: 'hoch' },
      { label: 'π-Vielfache (π/6, π/4, π/3, π/2) als Grad erkennen', examRelevance: 'hoch' },
      { label: 'Umrechnungsformel $\\alpha_{rad}=\\alpha_{deg}\\cdot\\pi/180$', examRelevance: 'hoch' },
      { label: 'Bogenlänge am Einheitskreis als Winkelmaß', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-1-0'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-1-0', concepts: ['winkel-def'] },
      ],
      concepts: [
        { id: 'radiant-def',      title: 'Radiant: Bogenlänge am Einheitskreis als Winkelmaß ($2\\pi = 360°$)', dependsOn: [] },
        { id: 'deg-rad-modus',    title: 'Taschenrechner auf DEG oder RAD umschalten',                         dependsOn: ['radiant-def'] },
        { id: 'pi-vielfache',     title: 'π-Vielfache: $\\pi/6=30°, \\pi/4=45°, \\pi/3=60°, \\pi/2=90°$',      dependsOn: ['radiant-def'] },
        { id: 'umrechnung-formel', title: '$\\alpha_{\\mathrm{rad}}=\\alpha_\\circ\\cdot\\pi/180$ und umgekehrt', dependsOn: ['radiant-def'] },
        { id: 'bogenlaenge',      title: 'Bogenlänge $b = r\\cdot\\alpha_{\\mathrm{rad}}$ am Kreis',            dependsOn: ['radiant-def'] },
      ],
      subGoalConcepts: {
        0: ['radiant-def', 'deg-rad-modus'],
        1: ['pi-vielfache'],
        2: ['umrechnung-formel'],
        3: ['bogenlaenge'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['deg-rad-modus'],     qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['deg-rad-modus'],     qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['deg-rad-modus'],     qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['deg-rad-modus'],     qty: 1, note: 'Distraktor: falscher Modus führt zu unsinnigen Werten' },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['deg-rad-modus'],     qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'matching',        uses: ['pi-vielfache'],      qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pi-vielfache'],      qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['pi-vielfache'],      qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pi-vielfache'],      qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['pi-vielfache'],      qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['umrechnung-formel'], qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['umrechnung-formel'], qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['umrechnung-formel'], qty: 2 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['umrechnung-formel'], qty: 1, note: 'Distraktor: $\\pi/180$ mit $180/\\pi$ verwechselt' },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['umrechnung-formel'], qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['bogenlaenge'],       qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bogenlaenge'],       qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['bogenlaenge'],       qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bogenlaenge'],       qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['bogenlaenge'],       qty: 1 },
      ],
    },
    nextLessonId: 'trig-1-2',
    steps: [
      {
        id: 'trig-1-1-s1', type: 'explanation-intuitive', title: 'Was ist ein Winkel?',
        content: `Ein **Winkel** beschreibt eine Drehung. Stell dir einen Uhrzeiger vor, der sich dreht — der Winkel ist die Menge an Drehung.

Das gebräuchlichste Maß ist das **Gradmaß**: Der volle Kreis hat **360°**. Das ist eine willkürliche Wahl (aus dem babylonischen Zahlensystem).

In der Mathematik und Technik verwendet man aber oft das **Bogenmaß (Radiant)**: Hier wird die Bogenlänge am Einheitskreis (Radius = 1) als Winkelmaß verwendet. Der volle Kreis hat **$2\\pi$ Radiant** ≈ 6,28 rad.

**Am Einheitskreis heißt das:** Der Bogen, den du beim Drehen um den Winkel $\\alpha$ auf dem Einheitskreis zurücklegst, ist exakt $\\alpha_{\\text{rad}}$ lang. Beim Vollumlauf ist der Bogen gerade der Kreisumfang $U = 2\\pi r = 2\\pi \\cdot 1 = 2\\pi$. Daher $360° \\widehat{=} 2\\pi$ rad.

**Praxishinweis:** Taschenrechner im richtigen Modus (DEG oder RAD) — der häufigste Fehler in Prüfungen!`,
      },
      {
        id: 'trig-1-1-s2', type: 'explanation-formal', title: 'Umrechnungsformel',
        content: `**Umrechnung Grad ↔ Radiant:**

$$\\alpha_{\\text{rad}} = \\alpha_{\\circ} \\cdot \\dfrac{\\pi}{180}$$

$$\\alpha_{\\circ} = \\alpha_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$$

**Wichtige Werte auswendig lernen:**

| Grad | Radiant    |
|------|------------|
| $0°$   | $0$          |
| $30°$  | $\\pi/6$     |
| $45°$  | $\\pi/4$     |
| $60°$  | $\\pi/3$     |
| $90°$  | $\\pi/2$     |
| $180°$ | $\\pi$       |
| $270°$ | $3\\pi/2$    |
| $360°$ | $2\\pi$      |

**Merke:** Am Taschenrechner *immer* zuerst DEG/RAD prüfen. Im Zweifel mit $\\sin(90°) = 1$ oder $\\sin(\\pi/2) = 1$ testen.`,
      },
      { id: 'trig-1-1-s3', type: 'exercise', title: 'Aufgabe 1 — 90° in Radiant', exerciseRef: 'ex-trig-1-1-a' },
      { id: 'trig-1-1-s4', type: 'exercise', title: 'Aufgabe 2 — π in Grad', exerciseRef: 'ex-trig-1-1-b' },
      { id: 'trig-1-1-s5', type: 'exercise', title: 'Aufgabe 3 — 270° in Radiant', exerciseRef: 'ex-trig-1-1-c' },
      { id: 'trig-1-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-1-1-mastery' },
    ],
  },
  {
    id: 'trig-1-2', unitId: 'trig-unit-1',
    title: 'Rechtwinkliges Dreieck',
    order: 2, estimatedMinutes: 12,
    learningGoals: ['sin, cos, tan als Seitenverhältnisse kennen', 'SOH-CAH-TOA anwenden', 'Verbindung zum Einheitskreis herstellen'],
    subGoals: [
      { label: 'SOH-CAH-TOA als Merkregel für Seitenverhältnisse', examRelevance: 'hoch' },
      { label: 'Gegenkathete vs. Ankathete in beliebiger Dreiecksorientierung identifizieren', examRelevance: 'hoch' },
      { label: 'Umkehrfunktionen arcsin/arccos/arctan sinnvoll einsetzen', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-1-1'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-1-0', concepts: ['winkel-def'] },
      ],
      concepts: [
        { id: 'dreieck-seiten',     title: 'Hypotenuse, Gegenkathete, Ankathete im rechtwinkligen Dreieck', dependsOn: [] },
        { id: 'soh-cah-toa',        title: 'SOH-CAH-TOA: $\\sin=G/H$, $\\cos=A/H$, $\\tan=G/A$',              dependsOn: ['dreieck-seiten'] },
        { id: 'kathete-orientierung', title: 'Ankathete vs. Gegenkathete je nach Blickrichtung zum Winkel',  dependsOn: ['dreieck-seiten'] },
        { id: 'arcsin-arccos-arctan', title: 'Umkehrfunktionen arcsin/arccos/arctan liefern Hauptwinkel',   dependsOn: ['soh-cah-toa'] },
      ],
      subGoalConcepts: {
        0: ['dreieck-seiten', 'soh-cah-toa'],
        1: ['kathete-orientierung'],
        2: ['arcsin-arccos-arctan'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'matching',        uses: ['soh-cah-toa'],           qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['soh-cah-toa'],           qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['soh-cah-toa'],           qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['soh-cah-toa'],           qty: 1, note: 'Distraktor: sin und cos vertauscht' },
        { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['soh-cah-toa'],           qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kathete-orientierung'],  qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kathete-orientierung'],  qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['kathete-orientierung'],  qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kathete-orientierung'],  qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['kathete-orientierung'],  qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['arcsin-arccos-arctan'],  qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['arcsin-arccos-arctan'],  qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['arcsin-arccos-arctan'],  qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['arcsin-arccos-arctan'],  qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['arcsin-arccos-arctan'],  qty: 1 },
      ],
    },
    nextLessonId: 'trig-1-3',
    steps: [
      {
        id: 'trig-1-2-s1', type: 'explanation-intuitive', title: 'Seitenverhältnisse im Dreieck',
        content: `Betrachte ein rechtwinkliges Dreieck mit einem Winkel $\\alpha$ (nicht der rechte Winkel).

Die drei Seiten heißen:
- **Hypotenuse (H)**: die längste Seite, gegenüber dem rechten Winkel
- **Gegenkathete (G)**: die Seite gegenüber von $\\alpha$
- **Ankathete (A)**: die Seite neben $\\alpha$ (nicht die Hypotenuse)

Die trigonometrischen Funktionen sind **Verhältnisse dieser Seiten**.

**Am Einheitskreis heißt das:** Skaliere das Dreieck so, dass $H = 1$. Dann liegt der Scheitel des Winkels im Ursprung, und der gegenüberliegende Eckpunkt ist ein Punkt auf dem Einheitskreis mit Koordinaten $(\\cos\\alpha, \\sin\\alpha) = (A, G)$. Die Definitionen aus dem Dreieck und dem Einheitskreis sind damit identisch.`,
      },
      {
        id: 'trig-1-2-s2', type: 'explanation-formal', title: 'SOH-CAH-TOA',
        content: `**Merkhilfe: SOH-CAH-TOA**

$$\\sin(\\alpha) = \\dfrac{G}{H} = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$$

$$\\cos(\\alpha) = \\dfrac{A}{H} = \\dfrac{\\text{Ankathete}}{\\text{Hypotenuse}}$$

$$\\tan(\\alpha) = \\dfrac{G}{A} = \\dfrac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\dfrac{\\sin(\\alpha)}{\\cos(\\alpha)}$$

**Wichtig:** Diese Definitionen gelten im rechtwinkligen Dreieck direkt nur für Winkel zwischen $0°$ und $90°$. Für beliebige Winkel brauchen wir den Einheitskreis — dort gilt $\\sin(\\alpha) = y$ und $\\cos(\\alpha) = x$ für *jeden* reellen $\\alpha$.`,
      },
      {
        id: 'trig-1-2-s-herleitung',
        type: 'derivation',
        title: 'Herleitung: 30°-60°-90°-Dreieck',
        defaultOpen: false,
        steps: [
          {
            explanation:
              'Starte mit einem gleichseitigen Dreieck mit Seitenlänge 2. Alle Winkel betragen 60°.',
          },
          {
            explanation:
              'Halbiere es senkrecht zu einer Seite. Daraus entstehen zwei identische rechtwinklige Dreiecke mit den Winkeln 30°, 60°, 90°.',
          },
          {
            explanation: 'Die Seiten dieses halbierten Dreiecks sind: Hypotenuse = 2, kurze Kathete = 1 (halbe Seite), lange Kathete = ?',
            formula: 'a^2 + 1^2 = 2^2 \\;\\Rightarrow\\; a = \\sqrt{3}',
          },
          {
            explanation:
              'Für den Winkel $\\alpha = 30°$ ist die Gegenkathete $= 1$ und die Ankathete $= \\sqrt{3}$:',
            formula: "\\sin(30°) = \\tfrac{1}{2}, \\quad \\cos(30°) = \\tfrac{\\sqrt{3}}{2}, \\quad \\tan(30°) = \\tfrac{1}{\\sqrt{3}}",
          },
          {
            explanation:
              'Für $\\alpha = 60°$ sind Gegen- und Ankathete vertauscht. Damit gilt $\\sin(60°) = \\tfrac{\\sqrt{3}}{2}$, $\\cos(60°) = \\tfrac{1}{2}$. Diese Werte tauchen in Prüfungen ständig auf — auswendig lernen lohnt sich.',
          },
        ],
      },
      {
        id: 'trig-1-2-s-fehler',
        type: 'typical-error',
        title: 'Typische Fehler: sin/cos verwechselt oder Grad/Radiant',
        wrong:
          '**Fehler A:** „$\\sin(\\alpha) = A/H$" — Ankathete durch Hypotenuse.\n\n**Fehler B:** $\\sin(30) = -0{,}988$. (Taschenrechner steht im Radiant-Modus.)',
        right:
          '**Richtig A:** $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$. Eselsbrücke SOH: **S**inus = **O**pposite/**H**ypotenuse.\n\n**Richtig B:** $\\sin(30°) = 0{,}5$. Taschenrechner auf DEG umstellen — oder im Radiant $\\sin(\\pi/6) = 0{,}5$ rechnen.',
        hint: 'Immer beim Ergebnis auf Plausibilität prüfen: $\\sin$ eines spitzen Winkels liegt zwischen 0 und 1. Negative Werte sind dort ein Warnsignal für DEG/RAD-Fehler.',
      },
      { id: 'trig-1-2-s3', type: 'exercise', title: 'Aufgabe 1 — Sinus definieren', exerciseRef: 'ex-trig-1-2-a' },
      { id: 'trig-1-2-s4', type: 'exercise', title: 'Aufgabe 2 — Cosinus definieren', exerciseRef: 'ex-trig-1-2-b' },
      { id: 'trig-1-2-s5', type: 'exercise', title: 'Aufgabe 3 — Tangens definieren', exerciseRef: 'ex-trig-1-2-c' },
      { id: 'trig-1-2-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-1-2-mastery' },
    ],
  },
  {
    id: 'trig-1-3', unitId: 'trig-unit-1',
    title: 'Die Grundwerte',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Werte für 0°, 30°, 45°, 60°, 90° auswendig kennen', 'Muster in den Grundwerten erkennen', 'Grundwerte am Einheitskreis ablesen'],
    subGoals: [
      { label: 'Auswendig: $\\sin 0° = 0$, $\\sin 30° = 1/2$, $\\sin 45° = \\sqrt2/2$, $\\sin 60° = \\sqrt3/2$, $\\sin 90° = 1$', examRelevance: 'hoch' },
      { label: 'Merkregel: $\\sin$-Werte folgen dem Muster $\\sqrt n / 2$ für $n = 0, 1, 2, 3, 4$', examRelevance: 'hoch' },
      { label: 'Kosinus ist Sinus rückwärts: $\\cos 0° = 1, \\cos 90° = 0$, dazwischen symmetrisch', examRelevance: 'hoch' },
      { label: 'Komplementärwinkel: $\\cos\\alpha = \\sin(90° - \\alpha)$ und umgekehrt', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-1-2'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-1-2', concepts: ['soh-cah-toa'] },
      ],
      concepts: [
        { id: 'grundwerte-sin', title: '$\\sin$-Grundwerte: $0, \\tfrac12, \\tfrac{\\sqrt2}{2}, \\tfrac{\\sqrt3}{2}, 1$ für $0°,30°,45°,60°,90°$', dependsOn: [] },
        { id: 'grundwerte-cos', title: '$\\cos$-Grundwerte: $1, \\tfrac{\\sqrt3}{2}, \\tfrac{\\sqrt2}{2}, \\tfrac12, 0$ (Sinus rückwärts)',           dependsOn: ['grundwerte-sin'] },
        { id: 'wurzel-n-muster', title: 'Merkregel $\\sqrt{n}/2$ für $n=0,1,2,3,4$',                                                                 dependsOn: ['grundwerte-sin'] },
        { id: 'grundwerte-tan',  title: '$\\tan$-Grundwerte: $0, 1/\\sqrt3, 1, \\sqrt3$, undef.',                                                    dependsOn: ['grundwerte-sin', 'grundwerte-cos'] },
        { id: 'komplementaer',   title: '$\\cos\\alpha = \\sin(90°-\\alpha)$ und $\\sin\\alpha = \\cos(90°-\\alpha)$',                                dependsOn: ['grundwerte-sin', 'grundwerte-cos'] },
      ],
      subGoalConcepts: {
        0: ['grundwerte-sin'],
        1: ['wurzel-n-muster'],
        2: ['grundwerte-cos', 'grundwerte-tan'],
        3: ['komplementaer'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'matching',        uses: ['grundwerte-sin'], qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['grundwerte-sin'], qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['grundwerte-sin'], qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['grundwerte-sin'], qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['grundwerte-sin'], qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['wurzel-n-muster'], qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['wurzel-n-muster'], qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['wurzel-n-muster'], qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['wurzel-n-muster'], qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'sorting',         uses: ['wurzel-n-muster'], qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['grundwerte-cos'],  qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['grundwerte-cos'],  qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['grundwerte-tan'],  qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['grundwerte-cos', 'grundwerte-sin'], qty: 1, note: 'Distraktor: sin/cos verwechselt' },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['grundwerte-cos', 'grundwerte-sin'], qty: 1 },

        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['komplementaer'],   qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['komplementaer'],   qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['komplementaer'],   qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['komplementaer'],   qty: 1 },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['komplementaer', 'grundwerte-sin'], qty: 1 },
      ],
    },
    nextLessonId: 'trig-1-4',
    steps: [
      {
        id: 'trig-1-3-s1', type: 'explanation-intuitive', title: 'Warum diese Winkel?',
        content: `In der Technik begegnen dir immer wieder dieselben "speziellen" Winkel: **$0°$, $30°$, $45°$, $60°$, $90°$**.

Der Grund: Diese Winkel kommen in regelmäßigen Geometrien vor (gleichseitiges Dreieck → $60°$, gleichschenkliges rechtwinkliges Dreieck → $45°$) und haben exakte, schöne Werte — keine krummen Dezimalzahlen.

**Am Einheitskreis heißt das:** Die fünf Winkel erzeugen fünf Punkte mit besonders einfachen Koordinaten. Merkst du dir die Koordinaten $(\\cos\\alpha, \\sin\\alpha)$ dieser Punkte, hast du die gesamte Grundwerte-Tabelle auswendig.`,
      },
      {
        id: 'trig-1-3-s2', type: 'explanation-formal', title: 'Tabelle der Grundwerte',
        content: `**Eselsbrücke:** Die Sinuswerte folgen dem Muster $\\dfrac{\\sqrt{0}}{2}, \\dfrac{\\sqrt{1}}{2}, \\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{3}}{2}, \\dfrac{\\sqrt{4}}{2}$:

| Winkel | $\\sin$     | $\\cos$     | $\\tan$        |
|--------|-------------|-------------|----------------|
| $0°$     | $0$           | $1$           | $0$              |
| $30°$    | $1/2$         | $\\sqrt{3}/2$ | $1/\\sqrt{3}$    |
| $45°$    | $\\sqrt{2}/2$ | $\\sqrt{2}/2$ | $1$              |
| $60°$    | $\\sqrt{3}/2$ | $1/2$         | $\\sqrt{3}$      |
| $90°$    | $1$           | $0$           | —              |

**Beachte:** $\\cos(\\alpha) = \\sin(90° - \\alpha)$ — Sinus und Kosinus sind "komplementär"! Die cos-Zeile ist die sin-Zeile rückwärts gelesen.

**Taschenrechner-Check:** $\\sin(30°) = 0{,}5$ im DEG-Modus. Bekommst du $-0{,}988$, steht der Rechner im RAD.`,
      },
      {
        id: 'trig-1-3-s3', type: 'visualization', title: 'Einheitskreis erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 30, showTangent: false },
      },
      { id: 'trig-1-3-s4', type: 'exercise', title: 'Aufgabe 1 — sin(30°)', exerciseRef: 'ex-trig-1-3-a' },
      { id: 'trig-1-3-s5', type: 'exercise', title: 'Aufgabe 2 — cos(60°)', exerciseRef: 'ex-trig-1-3-b' },
      { id: 'trig-1-3-s6', type: 'exercise', title: 'Aufgabe 3 — sin(45°)', exerciseRef: 'ex-trig-1-3-c' },
      { id: 'trig-1-3-s7', type: 'exercise', title: 'Aufgabe 4 — tan(45°)', exerciseRef: 'ex-trig-1-3-d' },
      { id: 'trig-1-3-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-1-3-mastery' },
    ],
  },
  {
    id: 'trig-1-4', unitId: 'trig-unit-1',
    title: 'Vorzeichen und Quadranten',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['Vorzeichen von sin/cos/tan in allen vier Quadranten bestimmen', 'Winkel > 90° berechnen', 'Reduktionsformeln am Einheitskreis herleiten'],
    subGoals: [
      { label: 'Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen', examRelevance: 'hoch' },
      { label: 'Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$', examRelevance: 'hoch' },
      { label: 'Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen', examRelevance: 'mittel' },
    ],
    prerequisites: ['trig-1-3'],
    blueprint: {
      prerequisites: [
        { lessonId: 'trig-1-3', concepts: ['grundwerte-sin', 'grundwerte-cos'] },
      ],
      concepts: [
        { id: 'quadranten-def',   title: 'Quadranten I–IV auf dem Einheitskreis',                                      dependsOn: [] },
        { id: 'vorzeichen-ASTC',  title: 'ASTC: All Students Take Calculus — Vorzeichen pro Quadrant',                 dependsOn: ['quadranten-def'] },
        { id: 'symmetrie-sin',    title: '$\\sin(180°-\\alpha) = \\sin\\alpha$ (Sinus-Symmetrie)',                       dependsOn: ['vorzeichen-ASTC'] },
        { id: 'symmetrie-cos',    title: '$\\cos(180°-\\alpha) = -\\cos\\alpha$ (Kosinus-Spiegel)',                      dependsOn: ['vorzeichen-ASTC'] },
        { id: 'referenzwinkel',   title: 'Referenzwinkel: jeder Winkel auf $0°$–$90°$ zurückführen',                    dependsOn: ['vorzeichen-ASTC'] },
      ],
      subGoalConcepts: {
        0: ['quadranten-def', 'vorzeichen-ASTC'],
        1: ['symmetrie-sin', 'symmetrie-cos'],
        2: ['referenzwinkel'],
      },
      taskPlan: [
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['vorzeichen-ASTC'],    qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vorzeichen-ASTC'],    qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['vorzeichen-ASTC'],    qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vorzeichen-ASTC'],    qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['vorzeichen-ASTC'],    qty: 1 },

        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['symmetrie-sin', 'symmetrie-cos'], qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['symmetrie-sin'],      qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['symmetrie-cos'],      qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['symmetrie-sin', 'symmetrie-cos'], qty: 1, note: 'Distraktor: Vorzeichen übersehen' },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['symmetrie-sin', 'symmetrie-cos'], qty: 1 },

        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['referenzwinkel'],     qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['referenzwinkel'],     qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['referenzwinkel'],     qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['referenzwinkel'],     qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['referenzwinkel', 'vorzeichen-ASTC'], qty: 1 },
      ],
    },
    nextLessonId: 'trig-2-1',
    steps: [
      {
        id: 'trig-1-4-s1', type: 'explanation-intuitive', title: 'Über den ersten Quadranten hinaus',
        content: `Bis jetzt haben wir nur Winkel zwischen $0°$ und $90°$ betrachtet. Aber in der Technik kommen auch größere Winkel vor — z.B. Phasenwinkel in der Elektrotechnik oder Kurbelwinkel in Motoren.

**Am Einheitskreis heißt das:** Jeder Winkel lässt sich als Drehwinkel eines Punkts auf dem Kreis darstellen, nicht nur $0°$–$90°$. Je nach Quadrant hat der Punkt unterschiedliche Vorzeichen für x und y — und damit für $\\cos$ und $\\sin$.`,
      },
      {
        id: 'trig-1-4-s2', type: 'explanation-formal', title: 'Vorzeichen-Regel (ASTC)',
        content: `**Merkhilfe "All Students Take Calculus" (ASTC):**

- **1. Quadrant ($0°$–$90°$):** **A**lle positiv ($\\sin > 0$, $\\cos > 0$, $\\tan > 0$)
- **2. Quadrant ($90°$–$180°$):** Nur **S**inus positiv
- **3. Quadrant ($180°$–$270°$):** Nur **T**angens positiv
- **4. Quadrant ($270°$–$360°$):** Nur **C**osinus positiv

**Reduktionsformeln:**
- $\\sin(180° - \\alpha) = \\sin(\\alpha)$
- $\\cos(180° - \\alpha) = -\\cos(\\alpha)$
- $\\sin(180° + \\alpha) = -\\sin(\\alpha)$
- $\\cos(360° - \\alpha) = \\cos(\\alpha)$

**Strategie:** Finde den Referenzwinkel (Abstand zur x-Achse im 1. Quadrant), rechne $\\sin$/$\\cos$ damit, setze das Vorzeichen aus ASTC davor.`,
      },
      {
        id: 'trig-1-4-s3', type: 'visualization', title: 'Vorzeichen erkunden',
        visualizationId: 'trig-explorer',
        params: { initialAngle: 120, showTangent: true },
      },
      { id: 'trig-1-4-s4', type: 'exercise', title: 'Aufgabe 1 — Vorzeichen im 2. Quadrant', exerciseRef: 'ex-trig-1-4-a' },
      { id: 'trig-1-4-s5', type: 'exercise', title: 'Aufgabe 2 — sin(150°)', exerciseRef: 'ex-trig-1-4-b' },
      { id: 'trig-1-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-trig-1-4-mastery' },
    ],
  },
]

export const unit1 = {
  id: 'trig-unit-1',
  title: 'Grundlagen der Trigonometrie',
  order: 1,
  description: 'Winkelmaße, rechtwinkliges Dreieck und erste Grundwerte',
  unitGoals: [
    'Grad- und Bogenmaß fehlerfrei umrechnen: $\\alpha_\\text{rad} = \\alpha_\\text{deg} \\cdot \\pi / 180$',
    'Sinus, Kosinus, Tangens am rechtwinkligen Dreieck als Seitenverhältnisse verstehen und anwenden',
    'Grundwerte für $0°, 30°, 45°, 60°, 90°$ auswendig kennen und ableiten können',
    'Taschenrechner DEG/RAD-Modus bewusst wählen — Fehlerquelle Nr. 1 in Prüfungen',
  ],
  lessons: lessons_u1,
  exercises: exercises_u1,
}
