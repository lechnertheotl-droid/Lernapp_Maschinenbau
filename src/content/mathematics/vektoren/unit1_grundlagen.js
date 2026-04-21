// ── Vektoren Unit 1: Vektorrechnung Grundlagen ────────────────────────────────

export const exercises_vek_u1 = {
  // ───────────── Lektion 1-0: Koordinaten, Punkte, Pfeile (Einstieg) ─────────
  'ex-vek-1-0-a': {
    id: 'ex-vek-1-0-a', lessonId: 'vek-1-0', type: 'multiple-choice',
    question: 'Welche Koordinaten hat der Punkt, der 3 Einheiten nach rechts und 2 Einheiten nach oben vom Ursprung liegt?',
    options: ['$(3, 2)$', '$(2, 3)$', '$(-3, 2)$', '$(3, -2)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Im 2D-Koordinatensystem ist die erste Zahl der $x$-Wert (horizontal), die zweite der $y$-Wert (vertikal).

**Rechnung:** „3 nach rechts" = $x = 3$, „2 nach oben" = $y = 2$. Punkt: $(3, 2)$.

**Probe:** Rechts → positives $x$, oben → positives $y$. ✓

**Typischer Fehler:** $x$ und $y$ vertauschen ($\\,(2,3)\\,$) — Koordinaten folgen immer der Reihenfolge $(x, y)$.`,
    hints: [
      'Reihenfolge in der Klammer: $(x, y)$.',
      'Rechts bedeutet positives $x$, oben bedeutet positives $y$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast $x$ und $y$ vertauscht. Die Schreibweise ist immer $(x, y)$ — erst horizontal, dann vertikal.',
      2: 'Das wäre 3 nach **links**. „Rechts" entspricht positivem $x$.',
      3: 'Das wäre 2 nach **unten**. „Oben" entspricht positivem $y$.',
    },
  },
  'ex-vek-1-0-b': {
    id: 'ex-vek-1-0-b', lessonId: 'vek-1-0', type: 'true-false',
    statement: 'Ein Punkt und ein Vektor haben im 2D-Koordinatensystem die gleiche Schreibweise $(x, y)$, aber eine unterschiedliche Bedeutung.',
    correct: true,
    explanation: `**Ansatz:** Schreibweise vs. Bedeutung trennen.

**Rechnung:** Ein **Punkt** $P = (3, 2)$ beschreibt einen **Ort** im Raum. Ein **Vektor** $\\vec{v} = (3, 2)$ beschreibt eine **Verschiebung** (3 nach rechts, 2 nach oben) — unabhängig vom Startpunkt.

**Probe:** Zwei Vektoren $(3,2)$, die an verschiedenen Stellen gezeichnet sind, sind gleich (gleiche Richtung und Länge). Zwei Punkte $(3,2)$ und $(5,1)$ sind verschieden — sie sind Orte.

**Typischer Fehler:** Punkt und Vektor gleichsetzen. Beides sieht auf dem Papier ähnlich aus, aber der Unterschied ist wichtig: Vektoren sind verschiebbar, Punkte nicht.`,
    hints: [
      'Denk an den Unterschied: „Wo liegt etwas?" (Punkt) vs. „Wie weit/wohin bewegt sich etwas?" (Vektor).',
    ],
  },
  'ex-vek-1-0-c': {
    id: 'ex-vek-1-0-c', lessonId: 'vek-1-0', type: 'multiple-choice',
    question: 'Welche Größe ist ein **Vektor** (hat Betrag UND Richtung)?',
    options: ['Geschwindigkeit eines Autos', 'Masse eines Bauteils', 'Temperatur im Raum', 'Zeit seit Start'],
    correctIndex: 0,
    explanation: `**Ansatz:** Frage „Hat die Größe eine Richtung?" bestimmt Vektor oder Skalar.

**Rechnung:** Geschwindigkeit „50 km/h nach Norden" — Betrag (50) und Richtung (Norden). Masse/Temperatur/Zeit haben keine Richtung — nur Betrag.

**Probe:** Ingenieur-Klassiker: Kraft, Geschwindigkeit, Verschiebung, Beschleunigung = Vektoren. Masse, Temperatur, Energie, Zeit = Skalare.

**Typischer Fehler:** Masse mit Gewicht verwechseln — **Gewicht** (Gewichtskraft) ist ein Vektor (Kraft), **Masse** ist ein Skalar.`,
    hints: [
      'Frag dich: „Kann ich nach Norden oder nach oben dazusagen — und ergibt das Sinn?"',
      'Wenn ja → Vektor. Wenn nein → Skalar.',
    ],
    wrongAnswerExplanations: {
      1: 'Masse ist nur eine Zahl (kg). Es gibt keine „Masse nach Norden" — also Skalar.',
      2: 'Temperatur ist nur eine Zahl (°C). Es gibt keine „Temperatur nach rechts" — also Skalar.',
      3: 'Zeit läuft nur in eine Richtung — sie hat keine räumliche Richtung. Skalar.',
    },
  },
  'ex-vek-1-0-d': {
    id: 'ex-vek-1-0-d', lessonId: 'vek-1-0', type: 'matching',
    question: 'Ordne jedes Koordinatenpaar dem passenden Quadranten im 2D-Koordinatensystem zu.',
    pairs: [
      { left: '$(3, 2)$', right: '1. Quadrant (x>0, y>0)' },
      { left: '$(-3, 2)$', right: '2. Quadrant (x<0, y>0)' },
      { left: '$(-3, -2)$', right: '3. Quadrant (x<0, y<0)' },
      { left: '$(3, -2)$', right: '4. Quadrant (x>0, y<0)' },
    ],
    explanation: `**Ansatz:** Vorzeichen von $x$ und $y$ bestimmen den Quadranten.

**Rechnung:** Zählweise entgegen dem Uhrzeigersinn, beginnend rechts-oben.

**Probe:** Zeichne Punkte in ein Koordinatensystem — das bestätigt die Zuordnung.

**Typischer Fehler:** Die Reihenfolge der Quadranten im Uhrzeigersinn zählen (Q1→Q4→Q3→Q2) — Konvention ist aber **entgegen** dem Uhrzeigersinn.`,
    hints: [
      'Quadranten werden entgegen dem Uhrzeigersinn durchgezählt, beginnend rechts-oben.',
    ],
  },
  'ex-vek-1-0-mastery': {
    id: 'ex-vek-1-0-mastery', lessonId: 'vek-1-0', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Ein Vektor $\\vec{v}$ beschreibt die Verschiebung vom Punkt $A = (1, 2)$ zum Punkt $B = (4, 6)$. Wie lautet $\\vec{v}$?',
    options: ['$(3, 4)$', '$(5, 8)$', '$(4, 6)$', '$(-3, -4)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Verschiebung von $A$ nach $B$: Zielpunkt minus Startpunkt, komponentenweise.

**Rechnung:** $\\vec{v} = B - A = (4-1, 6-2) = (3, 4)$.

**Probe:** Geh von $A = (1,2)$ um $\\vec{v} = (3,4)$ weiter → $(1+3, 2+4) = (4, 6) = B$. ✓

**Typischer Fehler:** Koordinaten addieren statt subtrahieren ($(5, 8)$) oder Zielpunkt mit Vektor verwechseln ($(4, 6)$ ist der Punkt $B$, nicht der Vektor).`,
    hints: [
      'Vektor von $A$ nach $B$: $\\vec{v} = B - A$.',
      'Komponentenweise: $(4-1,\\;6-2)$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast die Koordinaten addiert statt subtrahiert. Richtig ist Zielpunkt minus Startpunkt.',
      2: 'Das sind die Koordinaten des Zielpunkts $B$, nicht der Vektor von $A$ nach $B$.',
      3: 'Das wäre der Vektor von $B$ nach $A$ (entgegengesetzte Richtung).',
    },
  },

  'ex-vek-1-1-a': {
    id: 'ex-vek-1-1-a', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: 'Was unterscheidet einen Vektor von einer Zahl (Skalar)?',
    options: [
      'Vektoren sind immer größer als Skalare',
      'Vektoren haben Betrag UND Richtung, Skalare nur Betrag',
      'Vektoren können nicht addiert werden',
      'Vektoren sind dimensionslos, Skalare haben eine Einheit',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Unterscheide nach den Eigenschaften, die beide Größen definieren.

**Rechnung / Beispiel:**
- Skalar: Temperatur $T = 20\\,°\\text{C}$ — nur ein Zahlenwert.
- Vektor: Geschwindigkeit $\\vec{v} = (50, 0)\\,\\text{km/h}$ — Zahl *und* Richtung (nach Osten).

**Probe:** Kann man "20 °C nach Norden" sagen? Nein — Temperatur hat keine Richtung. Kann man "50 km/h" ohne Richtung sagen? Ja, aber dann weißt du nicht wohin.

**Typischer Fehler:** Vektoren sind nicht "größer" als Skalare — das ist kein mathematisches Kriterium.`,
    hints: [
      'Welche Eigenschaft hat eine Kraft, die eine Temperatur nicht hat?',
      'Ein Vektor braucht zwei Informationen: "wie viel" und "wohin".',
      'Beispiele: Kraft, Geschwindigkeit, Verschiebung sind Vektoren. Masse, Temperatur, Zeit sind Skalare.',
    ],
    wrongAnswerExplanations: {
      0: '"Größer" ist kein mathematisches Unterscheidungskriterium — ein Skalar wie $T = 1000\\,°\\text{C}$ kann durchaus betragsmäßig größer sein als ein Vektor wie $\\vec{v} = (3, 4)$. Der echte Unterschied ist die Richtung: Vektoren haben Betrag UND Richtung, Skalare nur Betrag.',
      2: 'Vektoren können sehr wohl addiert werden — komponentenweise: $\\vec{a} + \\vec{b} = (a_x + b_x,\\, a_y + b_y)$. Die eigentliche Unterscheidung zu Skalaren liegt darin, dass Vektoren zusätzlich eine Richtung tragen.',
      3: 'Das ist umgekehrt falsch: Sowohl Skalare als auch Vektoren können Einheiten haben (Kraft in N, Masse in kg). Das Unterscheidungsmerkmal ist die Richtung, nicht die Dimensionalität.',
    },
  },
  'ex-vek-1-1-b': {
    id: 'ex-vek-1-1-b', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: 'Gegeben: $\\vec{a} = (3, 4)$. Was ist der Betrag $|\\vec{a}|$?',
    options: ['$7$', '$5$', '$\\sqrt{7}$', '$25$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Der Betrag eines 2D-Vektors ist die Länge — via Satz des Pythagoras.

**Formel:** $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2}}$.

**Rechnung:** $|\\vec{a}| = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.

**Probe:** Das berühmte 3-4-5-Dreieck — ein rechtwinkliges Dreieck mit Katheten 3 und 4 hat Hypotenuse 5. ✓

**Typischer Fehler:** Antwort $7$ entsteht durch einfaches Addieren $3+4$ — Vektorlänge ist *nicht* die Summe der Komponenten. Antwort $25$ ist $|\\vec{a}|^{2}$ — die Wurzel vergessen.`,
    hints: [
      'Welche Formel liefert die Länge eines Vektors? (Pythagoras auf die Komponenten.)',
      'Formel: $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2}}$.',
      'Rechne $3^{2} + 4^{2} = 25$, dann Wurzel ziehen.',
    ],
    wrongAnswerExplanations: {
      0: 'Du hast die Komponenten einfach addiert: $3 + 4 = 7$. Das ist nicht die Vektorlänge — der Vektor bildet mit seinen Komponenten ein rechtwinkliges Dreieck, also gilt Pythagoras: $|\\vec{a}| = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5$.',
      2: 'Du hast $3 + 4 = 7$ gerechnet und dann die Wurzel gezogen. Richtig wird aber erst *quadriert* und *summiert*, dann die Wurzel gezogen: $\\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
      3: 'Das ist $|\\vec{a}|^{2}$, also die Summe $3^{2} + 4^{2} = 25$ — die Wurzel am Ende wurde vergessen. Die Betragsformel lautet $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2}} = \\sqrt{25} = 5$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: { vectors: [{ x: 3, y: 4, color: '#0ea5e9', label: 'a=(3,4), |a|=5' }], showComponents: true },
      caption: '$|\\vec{a}| = \\sqrt{3^{2} + 4^{2}} = 5$',
      alt: 'Vektor (3,4) mit Komponenten und Betrag 5.',
    },
  },
  'ex-vek-1-1-c': {
    id: 'ex-vek-1-1-c', lessonId: 'vek-1-1', type: 'multiple-choice',
    question: '$\\vec{a} = (2, 3)$, $\\vec{b} = (1, -1)$. Was ist $\\vec{a} + \\vec{b}$?',
    options: ['$(3, 2)$', '$(1, 4)$', '$(2, -3)$', '$(3, 4)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Vektoraddition erfolgt komponentenweise — jede Komponente einzeln.

**Formel:** $\\vec{a} + \\vec{b} = (a_x + b_x,\\; a_y + b_y)$.

**Rechnung:** $\\vec{a} + \\vec{b} = (2 + 1,\\; 3 + (-1)) = (3, 2)$.

**Probe (geometrisch):** Zeichne $\\vec{a}$, hänge $\\vec{b}$ an dessen Spitze an. Die Spitze von $\\vec{b}$ liegt bei $(3, 2)$. ✓

**Typischer Fehler:** Antwort $(1, 4)$ verwechselt Subtraktion mit Addition ($2-1$ statt $2+1$, $3-(-1)$ statt $3+(-1)$). Antwort $(3, 4)$ ignoriert das Minuszeichen bei $b_y$.`,
    hints: [
      'Welche Regel gilt für die Addition zweier Vektoren? (Komponentenweise.)',
      'Formel: $(a_x + b_x,\\; a_y + b_y)$.',
      'Achte auf das Vorzeichen: $3 + (-1) = 2$, nicht $4$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast statt addiert subtrahiert: $2-1 = 1$ und $3-(-1) = 4$. Vektoraddition ist aber komponentenweise *addieren*: $\\vec{a} + \\vec{b} = (a_x + b_x,\\; a_y + b_y) = (2+1,\\; 3+(-1)) = (3, 2)$.',
      2: 'Das sieht aus wie das komponentenweise Produkt ($2 \\cdot 1,\\; 3 \\cdot (-1)$) — aber Vektoren werden komponentenweise *addiert*, nicht multipliziert: $(2+1,\\; 3+(-1)) = (3, 2)$.',
      3: 'Du hast das Minuszeichen bei $b_y = -1$ ignoriert und $3 + 1 = 4$ gerechnet. Richtig ist $3 + (-1) = 2$, Ergebnis also $(3, 2)$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 2, y: 3, color: '#0ea5e9', label: 'a' },
          { x: 1, y: -1, color: '#dc2626', label: 'b' },
          { x: 3, y: 2, color: '#16a34a', label: 'a+b' },
        ],
        showSum: true,
      },
      caption: 'Summenvektor $\\vec{a} + \\vec{b} = (3, 2)$',
      alt: 'Zwei Vektoren a und b sowie ihr Summenvektor.',
    },
  },
  'ex-vek-1-1-mastery': {
    id: 'ex-vek-1-1-mastery', lessonId: 'vek-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Gegeben $\\vec{a} = (3, 4)$. Berechne $|2\\vec{a}|$ (Betrag des doppelten Vektors).',
    options: ['$10$', '$5$', '$7$', '$14$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Zwei Schritte kombinieren — Skalarmultiplikation **und** Betragsberechnung.

**Weg A (erst skalieren, dann Betrag):**
- $2\\vec{a} = (6, 8)$
- $|2\\vec{a}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$

**Weg B (Homogenitäts-Regel):** $|k \\vec{a}| = |k| \\cdot |\\vec{a}|$.
- $|\\vec{a}| = \\sqrt{9 + 16} = 5$
- $|2\\vec{a}| = 2 \\cdot 5 = 10$ ✓

**Synthese:** Beide Wege müssen dasselbe Ergebnis liefern — das bestätigt die Regel $|k \\vec{a}| = |k| |\\vec{a}|$.

**Typische Fehler:**
- $5$: $|\\vec{a}|$ berechnet, aber $2\\cdot$ vergessen.
- $7 = |2| + |\\vec{a}|$: Skalar mit Betrag **addiert** statt multipliziert.
- $14 = 2 \\cdot (3+4)$: Komponenten addiert statt $\\sqrt{}$-Betrag gebildet.`,
    hints: [
      'Zwei Operationen: erst skalieren ($2\\vec{a}$), dann Betrag, oder umgekehrt.',
      'Betrag: $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$. Homogenität: $|k\\vec{a}| = |k| |\\vec{a}|$.',
      '$|\\vec{a}| = \\sqrt{9+16} = 5 \\Rightarrow |2\\vec{a}| = 10$. 3-4-5-Tripel!',
    ],
    wrongAnswerExplanations: {
      1: 'Das ist $|\\vec{a}| = 5$ selbst — du hast den Faktor $2$ vergessen. Nach der Homogenitätsregel gilt $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$, also $|2\\vec{a}| = 2 \\cdot 5 = 10$.',
      2: 'Das sieht nach $|2| + |\\vec{a}| = 2 + 5 = 7$ aus — Skalar und Betrag wurden addiert statt multipliziert. Richtig: $|k\\vec{a}| = |k| \\cdot |\\vec{a}| = 2 \\cdot 5 = 10$.',
      3: 'Du hast $2 \\cdot (3+4) = 14$ gerechnet — Komponenten addiert statt den Betrag via Pythagoras gebildet. Richtig: $2\\vec{a} = (6,8)$, dann $|2\\vec{a}| = \\sqrt{36+64} = \\sqrt{100} = 10$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 3, y: 4, color: '#0ea5e9', label: 'a' },
          { x: 6, y: 8, color: '#dc2626', label: '2a' },
        ],
      },
      caption: 'Doppelter Vektor hat doppelten Betrag',
      alt: 'Vektor a und sein doppeltes 2a.',
    },
  },

  'ex-vek-1-2-a': {
    id: 'ex-vek-1-2-a', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: 'Das Skalarprodukt $\\vec{a} \\cdot \\vec{b}$ mit $\\vec{a} = (2, 3)$ und $\\vec{b} = (1, -2)$ ist:',
    options: ['$(2, -6)$', '$-4$', '$8$', '$5$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Das Skalarprodukt wird komponentenweise multipliziert und dann *summiert* — Ergebnis ist eine **Zahl**, kein Vektor.

**Formel:** $\\vec{a} \\cdot \\vec{b} = a_x \\cdot b_x + a_y \\cdot b_y$.

**Rechnung:** $\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 3 \\cdot (-2) = 2 - 6 = -4$.

**Probe:** Vorzeichen plausibel? Negativer Wert → stumpfer Winkel (> 90°). Der Vektor $\\vec{b}$ zeigt stark nach unten, während $\\vec{a}$ nach oben zeigt — passt. ✓

**Typischer Fehler:** Antwort $(2, -6)$ ist das *komponentenweise Produkt* — das ist weder Skalar- noch Kreuzprodukt. Antwort $8 = 2 \\cdot 1 + 3 \\cdot 2$ ignoriert das Minuszeichen.`,
    hints: [
      'Skalarprodukt oder Kreuzprodukt? Die Formel $a_x b_x + a_y b_y$ liefert eine einzige Zahl.',
      'Formel: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$ (in 2D).',
      'Achte auf das Vorzeichen bei $b_y = -2$: $3 \\cdot (-2) = -6$.',
    ],
    wrongAnswerExplanations: {
      0: 'Das ist das *komponentenweise Produkt* $(a_x b_x,\\; a_y b_y) = (2, -6)$ — aber das Skalarprodukt summiert danach zu einer Zahl. Formel: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y = 2 + (-6) = -4$.',
      2: 'Du hast das Minuszeichen bei $b_y = -2$ ignoriert und $2 \\cdot 1 + 3 \\cdot 2 = 8$ gerechnet. Richtig ist $3 \\cdot (-2) = -6$, also $\\vec{a} \\cdot \\vec{b} = 2 - 6 = -4$.',
      3: 'Das sieht nach $2 + 3 = 5$ aus — einfach die Komponenten von $\\vec{a}$ addiert. Das Skalarprodukt lautet aber $a_x b_x + a_y b_y = 2\\cdot 1 + 3\\cdot(-2) = -4$.',
    },
  },
  'ex-vek-1-2-b': {
    id: 'ex-vek-1-2-b', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: 'Es gilt $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\varphi)$. Was bedeutet $\\vec{a} \\cdot \\vec{b} = 0$ (für $\\vec{a}, \\vec{b} \\neq \\vec{0}$)?',
    options: [
      'Die Vektoren haben gleiche Länge',
      'Die Vektoren stehen senkrecht aufeinander ($\\varphi = 90°$)',
      'Die Vektoren zeigen in die gleiche Richtung',
      'Die Vektoren sind parallel',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Setze $\\vec{a} \\cdot \\vec{b} = 0$ in die geometrische Formel ein.

**Rechnung:** $|\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\varphi) = 0$. Da $|\\vec{a}|, |\\vec{b}| > 0$, muss $\\cos(\\varphi) = 0$ gelten — also $\\varphi = 90°$.

**Merkregel:** Skalarprodukt $= 0$ $\\Leftrightarrow$ **Orthogonalität** (senkrecht). Das ist der wichtigste Test für Rechtwinkligkeit in der Vektorrechnung.

**Probe:** $\\vec{a} = (1, 0)$, $\\vec{b} = (0, 1)$ stehen senkrecht. $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 0 + 0 \\cdot 1 = 0$. ✓

**Typischer Fehler:** "Parallel" ist falsch — bei Parallelität ist $\\cos(0°) = 1$, also $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\neq 0$.`,
    hints: [
      'Welche Operation testet Orthogonalität? Skalarprodukt — nicht Kreuzprodukt.',
      'Damit $|\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\varphi) = 0$ wird, muss $\\cos(\\varphi) = 0$ sein.',
      'Bei welchem Winkel ist $\\cos(\\varphi) = 0$? $\\varphi = 90°$ (senkrecht).',
    ],
    wrongAnswerExplanations: {
      0: 'Gleiche Länge $|\\vec{a}| = |\\vec{b}|$ macht das Skalarprodukt nicht null — es hängt vom Winkel ab. Aus $|\\vec{a}||\\vec{b}|\\cos\\varphi = 0$ folgt (bei $|\\vec{a}|, |\\vec{b}| \\neq 0$) zwingend $\\cos\\varphi = 0$, also $\\varphi = 90°$.',
      2: 'Gleiche Richtung bedeutet $\\varphi = 0°$ und $\\cos(0°) = 1$, also $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}| > 0$ — maximales Skalarprodukt, nicht null. Null tritt nur bei $\\cos\\varphi = 0$, also $\\varphi = 90°$ auf.',
      3: 'Bei Parallelität ist $\\varphi = 0°$ oder $180°$, also $\\cos\\varphi = \\pm 1$ und $\\vec{a} \\cdot \\vec{b} = \\pm|\\vec{a}||\\vec{b}| \\neq 0$. Null-Skalarprodukt entspricht exakt dem Gegenteil — Orthogonalität ($\\varphi = 90°$).',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 3, y: 0, color: '#0ea5e9', label: 'a' },
          { x: 0, y: 2, color: '#dc2626', label: 'b' },
        ],
      },
      caption: '$\\vec{a} \\perp \\vec{b} \\;\\Rightarrow\\; \\vec{a} \\cdot \\vec{b} = 0$',
      alt: 'Zwei senkrecht aufeinander stehende Vektoren.',
    },
  },
  'ex-vek-1-2-c': {
    id: 'ex-vek-1-2-c', lessonId: 'vek-1-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne den Winkel zwischen $\\vec{a} = (1, 0)$ und $\\vec{b} = (1, 1)$.',
    options: ['$0°$', '$30°$', '$45°$', '$90°$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Für Winkel zwischen Vektoren: *Skalarprodukt*, nicht Kreuzprodukt. Formel: $\\cos(\\varphi) = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$.

**Rechnung:**
- $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 1 + 0 \\cdot 1 = 1$
- $|\\vec{a}| = \\sqrt{1^{2} + 0^{2}} = 1$
- $|\\vec{b}| = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}$
- $\\cos(\\varphi) = \\dfrac{1}{1 \\cdot \\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$
- $\\varphi = \\arccos\\!\\left(\\tfrac{1}{\\sqrt{2}}\\right) = 45°$

**Probe:** $\\vec{b} = (1, 1)$ ist die Diagonale im Einheitsquadrat — der Winkel zur x-Achse $(\\vec{a})$ ist bekanntermaßen $45°$. ✓

**Typischer Fehler:** Antwort $90°$ entsteht, wenn man $\\vec{a} \\cdot \\vec{b} = 0$ erwartet — aber hier ist das Skalarprodukt $= 1$, also kein rechter Winkel.`,
    hints: [
      'Winkel → Skalarprodukt. Formel: $\\cos(\\varphi) = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$.',
      '$\\vec{a} \\cdot \\vec{b} = 1$, $|\\vec{a}| = 1$, $|\\vec{b}| = \\sqrt{2}$.',
      '$\\cos(\\varphi) = 1/\\sqrt{2}$ — welcher Standardwinkel hat diesen Kosinus?',
    ],
    wrongAnswerExplanations: {
      0: '$0°$ würde $\\cos\\varphi = 1$ verlangen, also $\\vec{a} \\parallel \\vec{b}$ (gleiche Richtung). Hier ist $\\cos\\varphi = 1/\\sqrt{2} \\approx 0{,}71$, nicht $1$ — also $\\varphi = 45°$.',
      1: '$30°$ hat $\\cos(30°) = \\sqrt{3}/2 \\approx 0{,}87$, aber hier kommt $\\cos\\varphi = 1/\\sqrt{2} \\approx 0{,}71$ heraus. Das passt zu $45°$, nicht $30°$.',
      3: '$90°$ würde $\\vec{a} \\cdot \\vec{b} = 0$ voraussetzen (Orthogonalität). Hier ist $\\vec{a} \\cdot \\vec{b} = 1 \\neq 0$, also kein rechter Winkel. Aus $\\cos\\varphi = 1/\\sqrt{2}$ folgt $\\varphi = 45°$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 2, y: 0, color: '#0ea5e9', label: 'a=(1,0)' },
          { x: 2, y: 2, color: '#dc2626', label: 'b=(1,1)' },
        ],
      },
      caption: 'Winkel zwischen $\\vec{a}$ und $\\vec{b}$ $= 45°$',
      alt: 'Zwei Vektoren im 45-Grad-Winkel.',
    },
  },
  'ex-vek-1-2-d': {
    id: 'ex-vek-1-2-d', lessonId: 'vek-1-2', type: 'number-input',
    question: 'Projektion: Wie lang ist die Projektion des Vektors $\\vec{a} = (3, 4)$ auf den Einheitsvektor $\\hat{e}_x = (1, 0)$?',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Die skalare Projektion von $\\vec{a}$ auf den Einheitsvektor $\\hat{e}$ ist das Skalarprodukt $\\vec{a} \\cdot \\hat{e}$. Sie sagt: *Wie viel von $\\vec{a}$ zeigt in Richtung $\\hat{e}$?*

**Rechnung:** $\\vec{a} \\cdot \\hat{e}_x = 3 \\cdot 1 + 4 \\cdot 0 = 3$.

**Probe:** Der Vektor $(3, 4)$ hat x-Komponente $3$ — und genau das ist die Projektion auf die x-Achse. Geometrisch offensichtlich.

**Vektorielle Projektion:** Für die *vektorielle* Projektion multipliziert man die skalare Projektion mit dem Einheitsvektor: $\\vec{a}_{\\parallel} = (\\vec{a} \\cdot \\hat{e}) \\cdot \\hat{e} = 3 \\cdot (1, 0) = (3, 0)$.

**Typischer Fehler:** Betrag von $\\vec{a}$ nehmen ($|\\vec{a}| = 5$) statt der Projektion. Das wäre die Projektion auf $\\vec{a}$ selbst, nicht auf $\\hat{e}_x$.

**Anwendung in der Mechanik:** Kraft entlang einer schiefen Ebene, zurückgelegter Weg in Wegrichtung, Komponente einer Geschwindigkeit.`,
    hints: [
      'Skalare Projektion = $\\vec{a} \\cdot \\hat{e}$ (Skalarprodukt mit Einheitsvektor).',
      '$(3, 4) \\cdot (1, 0) = ?$',
      'Nur die x-Komponente bleibt stehen.',
    ],
  },
  'ex-vek-1-2-mastery': {
    id: 'ex-vek-1-2-mastery', lessonId: 'vek-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Arbeit $W = \\vec{F} \\cdot \\vec{s}$ bei $\\vec{F} = (10, 0)\\,\\text{N}$ und $\\vec{s} = (3, 4)\\,\\text{m}$ ist:',
    options: ['$70\\,\\text{J}$', '$50\\,\\text{J}$', '$30\\,\\text{J}$', '$0\\,\\text{J}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Arbeit = Skalarprodukt aus Kraft und Weg — nur die Komponente der Kraft *in Wegrichtung* leistet Arbeit.

**Formel:** $W = \\vec{F} \\cdot \\vec{s} = F_x s_x + F_y s_y$.

**Rechnung:** $W = 10 \\cdot 3 + 0 \\cdot 4 = 30\\,\\text{J}$.

**Probe (geometrisch):** $|\\vec{F}| = 10$, $|\\vec{s}| = \\sqrt{9+16} = 5$. $\\cos(\\varphi) = \\tfrac{30}{10 \\cdot 5} = 0{,}6$ → $\\varphi \\approx 53°$. Arbeit $= 10 \\cdot 5 \\cdot 0{,}6 = 30\\,\\text{J}$. ✓

**Typischer Fehler:**
- $70\\,\\text{J} = |\\vec{F}| + |\\vec{s}| \\cdot \\ldots$ — Formel falsch.
- $50\\,\\text{J} = |\\vec{F}| \\cdot |\\vec{s}|$ — ignoriert den Winkel zwischen $\\vec{F}$ und $\\vec{s}$.
- Nur die horizontale Kraftkomponente (hier $F_x = 10$) trägt bei.`,
    hints: [
      'Welche Operation verbindet Kraft und Weg zur Arbeit? Skalarprodukt.',
      'Formel: $W = F_x s_x + F_y s_y$.',
      '$F_y = 0$, also fällt der zweite Summand weg: $W = 10 \\cdot 3 + 0 = 30\\,\\text{J}$.',
    ],
    wrongAnswerExplanations: {
      0: 'Das sieht nach $|\\vec{F}| + |\\vec{s}| \\cdot \\ldots = 10 + 60 = 70$ aus — eine willkürliche Kombination, die keiner Skalarprodukt-Formel entspricht. Richtig: $W = F_x s_x + F_y s_y = 10\\cdot 3 + 0\\cdot 4 = 30\\,\\text{J}$.',
      1: 'Du hast $|\\vec{F}| \\cdot |\\vec{s}| = 10 \\cdot 5 = 50$ gerechnet — das ist das Skalarprodukt-Maximum bei Parallelität ($\\cos\\varphi = 1$). Der Winkel zwischen $\\vec{F}$ und $\\vec{s}$ ist aber nicht $0$. Richtig: $W = F_x s_x + F_y s_y = 30\\,\\text{J}$.',
      3: 'Null würde $\\vec{F} \\perp \\vec{s}$ bedeuten — das ist hier nicht der Fall, weil $F_x \\cdot s_x = 10 \\cdot 3 \\neq 0$. Das Skalarprodukt liefert $W = 10 \\cdot 3 + 0 \\cdot 4 = 30\\,\\text{J}$.',
    },
  },

  'ex-vek-1-3-a': {
    id: 'ex-vek-1-3-a', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: 'Das Kreuzprodukt $\\vec{a} \\times \\vec{b}$ ergibt:',
    options: [
      'Eine Zahl (Skalar)',
      'Einen Vektor senkrecht zu $\\vec{a}$ und $\\vec{b}$',
      'Einen Vektor parallel zu $\\vec{a}$',
      'Immer den Nullvektor',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Merke den Unterschied zwischen Skalarprodukt und Kreuzprodukt.

**Definition:** Das Kreuzprodukt $\\vec{a} \\times \\vec{b}$ ist ein **Vektor** (nur in 3D definiert), der **senkrecht** auf beiden Ausgangsvektoren steht. Richtung nach Rechte-Hand-Regel.

**Test:** $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 0$ und $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{b} = 0$ — das Kreuzprodukt ist orthogonal zu beiden.

**Anwendung:** Damit bekommt man den **Normalvektor** einer Ebene, die von $\\vec{a}$ und $\\vec{b}$ aufgespannt wird.

**Typischer Fehler:** "Eine Zahl" wäre das Skalarprodukt — Dimensionsverwechslung!`,
    hints: [
      'Kreuzprodukt oder Skalarprodukt? Kreuzprodukt liefert einen Vektor, Skalarprodukt eine Zahl.',
      'Steht das Ergebnis parallel zu den Ausgangsvektoren oder senkrecht dazu?',
      'Anwendung: Normalvektor der aufgespannten Ebene.',
    ],
    wrongAnswerExplanations: {
      0: 'Eine Zahl liefert das *Skalarprodukt* $\\vec{a} \\cdot \\vec{b}$ — Dimensionsverwechslung. Das Kreuzprodukt liefert dagegen einen Vektor senkrecht zu beiden Ausgangsvektoren.',
      2: 'Das Kreuzprodukt steht per Konstruktion senkrecht auf beiden Vektoren, also auch senkrecht zu $\\vec{a}$ — nicht parallel. Prüfbar: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 0$.',
      3: '$\\vec{a} \\times \\vec{b} = \\vec{0}$ tritt nur bei *parallelen* Ausgangsvektoren auf (wegen $\\sin\\varphi = 0$). Für beliebige, nicht-parallele $\\vec{a}, \\vec{b}$ liefert das Kreuzprodukt einen nicht-verschwindenden Vektor senkrecht zu beiden.',
    },
  },
  'ex-vek-1-3-b': {
    id: 'ex-vek-1-3-b', lessonId: 'vek-1-3', type: 'multiple-choice',
    question: 'Es gilt $|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$. Was ist $|\\vec{a} \\times \\vec{b}|$, wenn $\\vec{a} \\parallel \\vec{b}$ (parallel)?',
    options: ['$|\\vec{a}| \\cdot |\\vec{b}|$', '$1$', '$0$', '$|\\vec{a}| + |\\vec{b}|$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Setze den Winkel bei parallelen Vektoren in die Formel ein.

**Rechnung:** Wenn $\\vec{a} \\parallel \\vec{b}$, dann $\\varphi = 0°$ → $\\sin(0°) = 0$ → $|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot 0 = 0$.

**Geometrisch:** Das Kreuzprodukt-Betrag ist die Fläche des von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms. Parallele Vektoren spannen kein Parallelogramm auf → Fläche $= 0$. ✓

**Merkregel:**
- $\\vec{a} \\cdot \\vec{b} = 0 \\;\\Leftrightarrow\\; \\vec{a} \\perp \\vec{b}$ (senkrecht)
- $\\vec{a} \\times \\vec{b} = \\vec{0} \\;\\Leftrightarrow\\; \\vec{a} \\parallel \\vec{b}$ (parallel)

**Typischer Fehler:** $|\\vec{a}| \\cdot |\\vec{b}|$ wäre das Maximum — das tritt bei $\\varphi = 90°$ auf, nicht bei Parallelität.`,
    hints: [
      'In die Formel einsetzen: $\\varphi = 0°$, weil die Vektoren parallel sind.',
      '$\\sin(0°) = 0$.',
      'Geometrisch: Parallele Vektoren spannen keine Fläche auf.',
    ],
    wrongAnswerExplanations: {
      0: '$|\\vec{a}| \\cdot |\\vec{b}|$ ist das *Maximum* von $|\\vec{a} \\times \\vec{b}|$ — erreicht bei $\\sin\\varphi = 1$, also $\\varphi = 90°$ (Orthogonalität). Bei Parallelität ist $\\sin(0°) = 0$, also $|\\vec{a} \\times \\vec{b}| = 0$.',
      1: '$1$ ist keine plausible Länge — das Ergebnis hängt von den Beträgen ab. Bei $\\vec{a} \\parallel \\vec{b}$ ist $\\sin\\varphi = 0$ und daher $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}| \\cdot 0 = 0$.',
      3: '$|\\vec{a}| + |\\vec{b}|$ entspricht keiner Formel der Vektorrechnung. Korrekt: $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\varphi$, und bei Parallelität ist $\\sin(0°) = 0$, also das Ergebnis $0$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 3, y: 1, color: '#0ea5e9', label: 'a' },
          { x: 1.5, y: 0.5, color: '#dc2626', label: 'b' },
        ],
      },
      caption: 'Parallele Vektoren spannen keine Fläche auf $\\Rightarrow \\vec{a} \\times \\vec{b} = \\vec{0}$',
      alt: 'Zwei parallele Vektoren.',
    },
  },
  'ex-vek-1-3-mastery': {
    id: 'ex-vek-1-3-mastery', lessonId: 'vek-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Das Kreuzprodukt der Einheitsvektoren $\\hat{e}_1 \\times \\hat{e}_2$ (x- und y-Richtung) ergibt:',
    options: ['$\\hat{e}_1$', '$-\\hat{e}_3$', '$\\hat{e}_3$', '$\\vec{0}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Standardregel für die Einheitsvektoren eines Rechtssystems — Rechte-Hand-Regel oder zyklische Regel.

**Zyklische Regel:**
$$\\hat{e}_1 \\times \\hat{e}_2 = \\hat{e}_3, \\quad \\hat{e}_2 \\times \\hat{e}_3 = \\hat{e}_1, \\quad \\hat{e}_3 \\times \\hat{e}_1 = \\hat{e}_2$$

Werden die Indizes *entgegen* der zyklischen Reihenfolge gewählt, erhält man das Negative: $\\hat{e}_2 \\times \\hat{e}_1 = -\\hat{e}_3$.

**Rechnung mit der Komponentenformel:** $\\hat{e}_1 = (1,0,0)$, $\\hat{e}_2 = (0,1,0)$.
$\\hat{e}_1 \\times \\hat{e}_2 = (0 \\cdot 0 - 0 \\cdot 1,\\; 0 \\cdot 0 - 1 \\cdot 0,\\; 1 \\cdot 1 - 0 \\cdot 0) = (0, 0, 1) = \\hat{e}_3$. ✓

**Rechte-Hand-Regel:** Zeigefinger $\\to \\hat{e}_1$ (x), Mittelfinger $\\to \\hat{e}_2$ (y), Daumen $\\to \\hat{e}_3$ (z).

**Typischer Fehler:** $-\\hat{e}_3$ ergibt sich bei vertauschter Reihenfolge $\\hat{e}_2 \\times \\hat{e}_1$ — das Kreuzprodukt ist *antikommutativ*.`,
    hints: [
      'Rechte-Hand-Regel: Zeigefinger x, Mittelfinger y, Daumen zeigt in welche Richtung?',
      'Zyklisch: $1 \\to 2 \\to 3 \\to 1$. Passt $\\hat{e}_1 \\times \\hat{e}_2$ zur zyklischen Reihenfolge?',
      'Bei zyklischer Reihenfolge positives Ergebnis: $\\hat{e}_1 \\times \\hat{e}_2 = +\\hat{e}_3$.',
    ],
    wrongAnswerExplanations: {
      0: '$\\hat{e}_1$ wäre parallel zu einem der Ausgangsvektoren — das widerspricht der Kreuzprodukt-Eigenschaft, senkrecht zu beiden zu stehen. Zyklische Regel: $\\hat{e}_1 \\times \\hat{e}_2 = \\hat{e}_3$.',
      1: '$-\\hat{e}_3$ ergibt sich bei *vertauschter* Reihenfolge $\\hat{e}_2 \\times \\hat{e}_1$ — hier aber ist $\\hat{e}_1$ zuerst, also zyklisch und positiv: $\\hat{e}_1 \\times \\hat{e}_2 = +\\hat{e}_3$.',
      3: 'Der Nullvektor entsteht nur bei parallelen Ausgangsvektoren ($\\sin\\varphi = 0$). Die Einheitsvektoren $\\hat{e}_1$ und $\\hat{e}_2$ stehen senkrecht, also $\\sin(90°) = 1$ und das Kreuzprodukt ist $\\hat{e}_3 \\neq \\vec{0}$.',
    },
  },

  'ex-vek-1-4-a': {
    id: 'ex-vek-1-4-a', lessonId: 'vek-1-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Drei Kräfte: $\\vec{F}_1 = (10, 0)\\,\\text{N}$, $\\vec{F}_2 = (0, 5)\\,\\text{N}$, $\\vec{F}_3 = (-3, -2)\\,\\text{N}$. Resultierende $\\vec{R} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = ?$',
    options: ['$(7, 3)\\,\\text{N}$', '$(7, -3)\\,\\text{N}$', '$(13, 7)\\,\\text{N}$', '$(-7, -3)\\,\\text{N}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Vektoraddition komponentenweise — x-Komponenten addieren, y-Komponenten addieren.

**Rechnung:**
- $R_x = 10 + 0 + (-3) = 7$
- $R_y = 0 + 5 + (-2) = 3$
- $\\vec{R} = (7, 3)\\,\\text{N}$

**Probe:** $|\\vec{R}| = \\sqrt{7^{2} + 3^{2}} = \\sqrt{58} \\approx 7{,}6\\,\\text{N}$ — plausibel, da die größten Kräfte fast in x-Richtung zeigen.

**Typischer Fehler:**
- $(7, -3)$: Vorzeichenfehler bei $F_{3y}$ ($0 + 5 + 2 = 7$ statt $3$ — falsche Vorzeichenbehandlung).
- $(13, 7)$: Beträge statt Komponenten addiert — falsch, weil Richtungsvorzeichen verloren gehen.`,
    hints: [
      'Vektoraddition: jede Achse einzeln behandeln.',
      '$R_x = F_{1x} + F_{2x} + F_{3x}$, $R_y = F_{1y} + F_{2y} + F_{3y}$.',
      'Achte auf die Vorzeichen: $10 + 0 + (-3)$ und $0 + 5 + (-2)$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast bei $R_y$ das Minuszeichen von $F_{3y} = -2$ ignoriert: $0 + 5 - (-2) = 7$ statt $0 + 5 + (-2) = 3$. Richtig: $R_y = 3$, also $\\vec{R} = (7, 3)\\,\\text{N}$.',
      2: 'Du hast die *Beträge* addiert: $10 + 0 + 3 = 13$ und $0 + 5 + 2 = 7$. Das verliert die Richtungsinformation. Bei Vektoraddition werden Komponenten mit Vorzeichen addiert: $10 + 0 + (-3) = 7$ und $0 + 5 + (-2) = 3$.',
      3: 'Alle Vorzeichen der Resultierenden sind umgekehrt — das wäre $-\\vec{R}$. Richtig ist $R_x = 10 + 0 + (-3) = +7$ und $R_y = 0 + 5 + (-2) = +3$, also $\\vec{R} = (7, 3)\\,\\text{N}$.',
    },
    visualization: {
      id: 'vector-diagram',
      params: {
        vectors: [
          { x: 3, y: 0, color: '#0ea5e9', label: 'F₁' },
          { x: 0, y: 1.5, color: '#dc2626', label: 'F₂' },
          { x: -1, y: -0.7, color: '#f59e0b', label: 'F₃' },
          { x: 2, y: 0.9, color: '#16a34a', label: 'R' },
        ],
      },
      caption: 'Resultierende $\\vec{R} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = (7, 3)\\,\\text{N}$',
      alt: 'Drei Kraftvektoren und ihr Summenvektor.',
    },
  },
  'ex-vek-1-4-b': {
    id: 'ex-vek-1-4-b', lessonId: 'vek-1-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Gleichgewicht: Eine Masse hängt an zwei Seilen mit Kräften $\\vec{F}_1 = (-F_1 \\sin 30°,\\, F_1 \\cos 30°)$ und $\\vec{F}_2 = (F_2 \\sin 45°,\\, F_2 \\cos 45°)$. Aus $\\sum F_x = 0$ folgt:',
    options: [
      '$F_1 \\sin 30° = F_2 \\sin 45°$',
      '$F_1 \\cos 30° = F_2 \\cos 45°$',
      '$F_1 = F_2$',
      '$F_1 \\sin 30° + F_2 \\sin 45° = 0$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Gleichgewichtsbedingung: $\\sum F_x = 0$. Alle x-Komponenten addieren und gleich null setzen.

**Rechnung:**
$$-F_1 \\sin 30° + F_2 \\sin 45° = 0 \\;\\Leftrightarrow\\; F_1 \\sin 30° = F_2 \\sin 45°.$$

**Probe (Plausibilität):** Seil 1 zieht nach links-oben, Seil 2 zieht nach rechts-oben. Damit die Masse nicht seitlich wegschwingt, müssen sich die **horizontalen** Komponenten gegenseitig aufheben. Genau das sagt die Gleichung aus.

**Typischer Fehler:**
- Antwort B nimmt die y-Komponenten ($\\cos$) — das wäre $\\sum F_y = 0$, eine *andere* Gleichung (betrifft Gewichtskraft).
- Antwort D vergisst das Minuszeichen bei $\\vec{F}_1$ — dann wäre die Gleichung falsch.`,
    hints: [
      'Aus welcher Bedingung? $\\sum F_x = 0$ — nur die x-Komponenten.',
      'Schreibe die Summe auf: $-F_1 \\sin 30° + F_2 \\sin 45° = 0$.',
      'Forme um nach $F_1 \\sin 30° = F_2 \\sin 45°$.',
    ],
    wrongAnswerExplanations: {
      1: 'Das wäre die $y$-Gleichgewichtsbedingung $\\sum F_y = 0$ (mit den $\\cos$-Anteilen) — sie betrifft Auflage gegen Gewichtskraft, nicht die horizontale Balance. Für $\\sum F_x = 0$ gelten die $\\sin$-Komponenten: $F_1 \\sin 30° = F_2 \\sin 45°$.',
      2: '$F_1 = F_2$ gilt nur bei symmetrischer Aufhängung (gleiche Winkel). Hier sind die Winkel aber $30°$ und $45°$ — daraus folgt $F_1 \\sin 30° = F_2 \\sin 45°$, und wegen $\\sin 30° < \\sin 45°$ ist $F_1 \\neq F_2$.',
      3: 'Das Minuszeichen bei $\\vec{F}_1$ (Kraft zeigt nach links) wurde vergessen. Aus $\\sum F_x = -F_1 \\sin 30° + F_2 \\sin 45° = 0$ folgt $F_1 \\sin 30° = F_2 \\sin 45°$, nicht die Summe gleich null.',
    },
  },
  'ex-vek-1-4-mastery': {
    id: 'ex-vek-1-4-mastery', lessonId: 'vek-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Einheitsvektor hat Betrag ... und wird aus $\\vec{a} \\neq \\vec{0}$ berechnet durch ...',
    options: [
      'Betrag $= 1$;\u00a0 $\\hat{e} = \\dfrac{\\vec{a}}{|\\vec{a}|}$',
      'Betrag $= 0$;\u00a0 $\\hat{e} = \\vec{a} \\cdot |\\vec{a}|$',
      'Betrag $= 1$;\u00a0 $\\hat{e} = |\\vec{a}| \\cdot \\vec{a}$',
      'Betrag beliebig;\u00a0 $\\hat{e} = \\vec{a} - |\\vec{a}|$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Ein **Einheitsvektor** hat per Definition die Länge 1 und zeigt in dieselbe Richtung wie der Ausgangsvektor.

**Formel:** $\\hat{e} = \\dfrac{\\vec{a}}{|\\vec{a}|}$ (Normieren = durch den eigenen Betrag dividieren).

**Probe:** $|\\hat{e}| = \\left|\\dfrac{\\vec{a}}{|\\vec{a}|}\\right| = \\dfrac{|\\vec{a}|}{|\\vec{a}|} = 1$. ✓

**Beispiel:** $\\vec{a} = (3, 4)$, $|\\vec{a}| = 5$. $\\hat{e} = \\left(\\tfrac{3}{5}, \\tfrac{4}{5}\\right)$. Prüfen: $|\\hat{e}| = \\sqrt{(3/5)^{2} + (4/5)^{2}} = \\sqrt{9/25 + 16/25} = \\sqrt{1} = 1$. ✓

**Typischer Fehler:**
- Antwort C ($|\\vec{a}| \\cdot \\vec{a}$): *Multiplikation* statt Division — streckt den Vektor, normiert ihn nicht.
- Antwort D: Dimensionsfehler — man kann nicht Vektor minus Skalar rechnen.`,
    hints: [
      'Was bedeutet "Einheit"? Länge genau 1.',
      'Wie macht man aus einem Vektor der Länge $L$ einen Vektor der Länge $1$? Durch $L$ teilen.',
      'Formel: $\\hat{e} = \\vec{a} / |\\vec{a}|$.',
    ],
    wrongAnswerExplanations: {
      1: 'Der Einheitsvektor hat per Definition Länge $1$, nicht $0$ — ein Vektor mit Länge $0$ wäre der Nullvektor. Außerdem ist $\\vec{a} \\cdot |\\vec{a}|$ keine gültige Operation (Skalar mit Punktprodukt — hier meint man wohl Skalarmultiplikation, aber die *streckt* statt zu normieren).',
      2: 'Betrag $= 1$ stimmt, aber die Formel ist falsch: $|\\vec{a}| \\cdot \\vec{a}$ *multipliziert* statt *dividiert* — das streckt den Vektor. Richtig: $\\hat{e} = \\vec{a} / |\\vec{a}|$, weil man einen Vektor der Länge $L$ durch $L$ teilt, um Länge $1$ zu bekommen.',
      3: '"Beliebig" widerspricht der Definition — ein Einheitsvektor hat *genau* Länge $1$. Außerdem ist $\\vec{a} - |\\vec{a}|$ ein Dimensionsfehler: Vektor minus Skalar ist nicht definiert.',
    },
  },
}

const lessons_vek_u1 = [
  {
    id: 'vek-1-0', unitId: 'vek-unit-1',
    title: 'Koordinaten, Punkte & Pfeile (Einstieg)',
    order: 0, estimatedMinutes: 10,
    learningGoals: [
      'Koordinaten $(x, y)$ in 2D lesen und zeichnen',
      'Unterschied zwischen Punkt und Vektor verstehen',
      'Vektor aus zwei Punkten bestimmen ($B - A$)',
    ],
    prerequisites: [],
    nextLessonId: 'vek-1-1',
    steps: [
      {
        id: 'vek-1-0-s1', type: 'explanation-intuitive', title: 'Das Koordinatensystem',
        content: `**Grundidee:** Jeder Ort in einer 2D-Ebene lässt sich durch zwei Zahlen beschreiben — die **Koordinaten** $(x, y)$.

- $x$ sagt, wie weit es **nach rechts** geht (negativ → nach links).
- $y$ sagt, wie weit es **nach oben** geht (negativ → nach unten).
- $(0, 0)$ ist der **Ursprung** — dort kreuzen sich die Achsen.

**Quadranten:** Das Koordinatensystem zerfällt in vier Bereiche:
- Q1: rechts oben ($x>0$, $y>0$)
- Q2: links oben ($x<0$, $y>0$)
- Q3: links unten ($x<0$, $y<0$)
- Q4: rechts unten ($x>0$, $y<0$)

Die Zählung läuft **entgegen dem Uhrzeigersinn**.`,
      },
      {
        id: 'vek-1-0-s2', type: 'explanation-intuitive', title: 'Punkt vs. Vektor',
        content: `**Punkt:** beschreibt einen **Ort**. Schreibweise $P = (x, y)$ — etwa $P = (3, 2)$.

**Vektor:** beschreibt eine **Verschiebung** (Betrag + Richtung). Schreibweise $\\vec{v} = (v_x, v_y)$ oder als Pfeil. Zwei Pfeile an verschiedenen Stellen der Ebene stellen **denselben Vektor** dar, solange sie gleiche Länge und Richtung haben.

**Vektor aus zwei Punkten:** Der Vektor **von $A$ nach $B$** ist

$$\\vec{AB} = B - A = (B_x - A_x,\\; B_y - A_y)$$

**Beispiel:** $A=(1,2)$, $B=(4,6)$ → $\\vec{AB} = (4-1,\\,6-2) = (3,4)$.

**Anwendung in Maschinenbau:** Kräfte, Geschwindigkeiten, Verschiebungen sind Vektoren. Temperaturen, Massen, Zeiten sind Skalare (reine Zahlen).`,
      },
      { id: 'vek-1-0-s3', type: 'exercise', title: 'Aufgabe 1 — Koordinaten lesen', exerciseRef: 'ex-vek-1-0-a' },
      { id: 'vek-1-0-s4', type: 'exercise', title: 'Aufgabe 2 — Punkt vs. Vektor', exerciseRef: 'ex-vek-1-0-b' },
      { id: 'vek-1-0-s5', type: 'exercise', title: 'Aufgabe 3 — Vektor vs. Skalar', exerciseRef: 'ex-vek-1-0-c' },
      { id: 'vek-1-0-s6', type: 'exercise', title: 'Aufgabe 4 — Quadranten', exerciseRef: 'ex-vek-1-0-d' },
      { id: 'vek-1-0-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-vek-1-0-mastery' },
    ],
  },
  {
    id: 'vek-1-1', unitId: 'vek-unit-1',
    title: 'Vektoren — Grundbegriffe',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Vektor vs. Skalar sicher unterscheiden', 'Betrag eines Vektors berechnen', 'Vektoraddition und Skalarmultiplikation komponentenweise durchführen'],
    prerequisites: ['vek-1-0'],
    nextLessonId: 'vek-1-2',
    steps: [
      {
        id: 'vek-1-1-s1', type: 'explanation-intuitive', title: 'Was ist ein Vektor?',
        content: `Ein **Vektor** ist eine *gerichtete* Größe — er hat Betrag (Länge) **und** Richtung. Ein **Skalar** hat nur einen Zahlenwert.

**Beispiele aus der Technik:**

| Größe | Typ | Schreibweise |
|-------|-----|--------------|
| Kraft | Vektor | $\\vec{F} = (100, 0)\\,\\text{N}$ |
| Geschwindigkeit | Vektor | $\\vec{v} = (80, 60)\\,\\text{km/h}$ |
| Verschiebung | Vektor | $\\vec{s} = (3, 4)\\,\\text{m}$ |
| Masse | Skalar | $m = 2\\,\\text{kg}$ |
| Temperatur | Skalar | $T = 20\\,°\\text{C}$ |
| Zeit | Skalar | $t = 5\\,\\text{s}$ |

**Darstellung:** In 2D schreibt man $\\vec{a} = (a_x, a_y)$, in 3D $\\vec{a} = (a_x, a_y, a_z)$. Geometrisch: Pfeil vom Ursprung (oder einem beliebigen Startpunkt) in die gewünschte Richtung.

**Betrag (Länge) via Pythagoras:**
$$|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2}} \\quad \\text{(2D)}, \\qquad |\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2} + a_z^{2}} \\quad \\text{(3D)}$$`,
      },
      {
        id: 'vek-1-1-s2', type: 'explanation-formal', title: 'Addition und Skalarmultiplikation',
        content: `**Alle Grundoperationen laufen komponentenweise** — das ist der Kern der Vektorrechnung.

| Operation | Formel | Geometrisch |
|-----------|--------|-------------|
| Addition | $\\vec{a} + \\vec{b} = (a_x + b_x,\\, a_y + b_y)$ | Pfeile aneinandersetzen |
| Subtraktion | $\\vec{a} - \\vec{b} = (a_x - b_x,\\, a_y - b_y)$ | $\\vec{a} + (-\\vec{b})$ |
| Skalarmultiplikation | $k \\cdot \\vec{a} = (k \\cdot a_x,\\, k \\cdot a_y)$ | Pfeil verlängern/stauchen (bzw. umdrehen bei $k<0$) |
| Betrag | $|\\vec{a}| = \\sqrt{a_x^{2} + a_y^{2}}$ | Länge des Pfeils |

**Regeln (Vektorraumaxiome — wichtig für Umformungen):**
- $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$ (Kommutativgesetz)
- $\\vec{a} + (\\vec{b} + \\vec{c}) = (\\vec{a} + \\vec{b}) + \\vec{c}$ (Assoziativgesetz)
- $k \\cdot (\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$ (Distributivgesetz)

**Merke:** Zwei Vektoren können *nicht* multipliziert werden wie Zahlen — dafür gibt es extra Skalarprodukt und Kreuzprodukt (nächste Lektionen).`,
      },
      {
        id: 'vek-1-1-s3', type: 'visualization', title: 'Vektor im Koordinatensystem',
        visualizationId: 'vector-diagram',
        params: { vectors: [{ x: 3, y: 4, color: '#3b82f6', label: '$\\vec{a}=(3,4)$' }], showGrid: true, showComponents: true },
      },
      { id: 'vek-1-1-s4', type: 'exercise', title: 'Aufgabe 1 — Vektor vs. Skalar', exerciseRef: 'ex-vek-1-1-a' },
      { id: 'vek-1-1-s5', type: 'exercise', title: 'Aufgabe 2 — Betrag', exerciseRef: 'ex-vek-1-1-b' },
      { id: 'vek-1-1-s6', type: 'exercise', title: 'Aufgabe 3 — Addition', exerciseRef: 'ex-vek-1-1-c' },
      { id: 'vek-1-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-1-mastery' },
    ],
  },
  {
    id: 'vek-1-2', unitId: 'vek-unit-1',
    title: 'Skalarprodukt',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Skalarprodukt in Komponenten- und Winkelform berechnen', 'Winkel zwischen Vektoren bestimmen', 'Orthogonalität per Skalarprodukt erkennen'],
    prerequisites: ['vek-1-1'],
    nextLessonId: 'vek-1-3',
    steps: [
      {
        id: 'vek-1-2-s1', type: 'explanation-formal', title: 'Skalarprodukt — Definition und Anwendungen',
        content: `Das **Skalarprodukt** (engl. *dot product*) zweier Vektoren liefert eine **Zahl** (keinen Vektor!).

**Komponentenform** (Rechnung):
$$\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y + a_z b_z$$

**Geometrische Form** (Interpretation):
$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\varphi)$$

wobei $\\varphi$ der eingeschlossene Winkel ist ($0° \\leq \\varphi \\leq 180°$).

**Die drei wichtigsten Anwendungen:**

| Zweck | Formel |
|-------|--------|
| Winkel berechnen | $\\cos(\\varphi) = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ |
| Orthogonalität testen | $\\vec{a} \\perp \\vec{b} \\;\\Leftrightarrow\\; \\vec{a} \\cdot \\vec{b} = 0$ |
| Arbeit (Physik) | $W = \\vec{F} \\cdot \\vec{s}$ |

**Vorzeichen-Interpretation:**
- $\\vec{a} \\cdot \\vec{b} > 0$: spitzer Winkel ($\\varphi < 90°$)
- $\\vec{a} \\cdot \\vec{b} = 0$: rechter Winkel ($\\varphi = 90°$)
- $\\vec{a} \\cdot \\vec{b} < 0$: stumpfer Winkel ($\\varphi > 90°$)

**Rechenregeln:** kommutativ ($\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$), distributiv ($\\vec{a} \\cdot (\\vec{b}+\\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$), assoziativ mit Skalaren ($k(\\vec{a} \\cdot \\vec{b}) = (k\\vec{a}) \\cdot \\vec{b}$).`,
      },
      { id: 'vek-1-2-s2', type: 'exercise', title: 'Aufgabe 1 — Skalarprodukt berechnen', exerciseRef: 'ex-vek-1-2-a' },
      { id: 'vek-1-2-s3', type: 'exercise', title: 'Aufgabe 2 — Bedeutung $\\vec{a}\\cdot\\vec{b}=0$', exerciseRef: 'ex-vek-1-2-b' },
      { id: 'vek-1-2-s4', type: 'exercise', title: 'Aufgabe 3 — Winkel berechnen', exerciseRef: 'ex-vek-1-2-c' },
      { id: 'vek-1-2-s5', type: 'exercise', title: 'Aufgabe 4 — Projektion eines Vektors', exerciseRef: 'ex-vek-1-2-d' },
      { id: 'vek-1-2-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-2-mastery' },
    ],
  },
  {
    id: 'vek-1-3', unitId: 'vek-unit-1',
    title: 'Kreuzprodukt',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Kreuzprodukt mit der Komponentenformel berechnen', 'Normalvektor einer Ebene bestimmen', 'Skalar- und Kreuzprodukt sicher unterscheiden'],
    prerequisites: ['vek-1-2'],
    nextLessonId: 'vek-1-4',
    steps: [
      {
        id: 'vek-1-3-s1', type: 'explanation-formal', title: 'Kreuzprodukt (Vektorprodukt)',
        content: `Das **Kreuzprodukt** (nur in 3D definiert) liefert einen **Vektor**, der **senkrecht** auf beiden Ausgangsvektoren steht.

**Komponentenformel:**
$$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_y b_z - a_z b_y \\\\ a_z b_x - a_x b_z \\\\ a_x b_y - a_y b_x \\end{pmatrix}$$

**Merkhilfe (Sarrus / zyklisch):** $x$-Komponente aus $y$ und $z$, $y$-Komponente aus $z$ und $x$, $z$-Komponente aus $x$ und $y$ — immer zyklisch nach rechts.

**Betrag = Parallelogrammfläche:**
$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\varphi)$$

**Rechte-Hand-Regel (Richtung):** Zeigefinger $\\to \\vec{a}$, Mittelfinger $\\to \\vec{b}$, Daumen zeigt in Richtung $\\vec{a} \\times \\vec{b}$.

**Wichtigste Eigenschaften:**

| Eigenschaft | Formel |
|-------------|--------|
| Antikommutativ | $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$ |
| Parallelitätstest | $\\vec{a} \\parallel \\vec{b} \\;\\Leftrightarrow\\; \\vec{a} \\times \\vec{b} = \\vec{0}$ |
| Orthogonalität zum Ergebnis | $(\\vec{a} \\times \\vec{b}) \\perp \\vec{a}$ und $(\\vec{a} \\times \\vec{b}) \\perp \\vec{b}$ |

**Anwendungen im Maschinenbau:**
- **Drehmoment:** $\\vec{M} = \\vec{r} \\times \\vec{F}$
- **Normalvektor** einer Ebene aus zwei Richtungsvektoren
- **Flächen**berechnung (Parallelogramm, Dreieck)

**Skalar- vs. Kreuzprodukt — Spickzettel:**

| Frage | Operation | Ergebnis |
|-------|-----------|----------|
| Winkel? Senkrecht? Arbeit? | Skalarprodukt $\\vec{a} \\cdot \\vec{b}$ | Zahl |
| Normalvektor? Fläche? Drehmoment? | Kreuzprodukt $\\vec{a} \\times \\vec{b}$ | Vektor |`,
      },
      {
        id: 'vek-1-3-s-viz',
        type: 'visualization',
        title: '3D-Ansicht drehbar — Rechte-Hand-Regel live',
        visualizationId: 'vector-3d',
        params: {
          initialA: { x: 2, y: 0, z: 0 },
          initialB: { x: 0, y: 2, z: 0 },
          mode: 'cross',
        },
      },
      { id: 'vek-1-3-s2', type: 'exercise', title: 'Aufgabe 1 — Was liefert das Kreuzprodukt?', exerciseRef: 'ex-vek-1-3-a' },
      { id: 'vek-1-3-s3', type: 'exercise', title: 'Aufgabe 2 — Parallele Vektoren', exerciseRef: 'ex-vek-1-3-b' },
      { id: 'vek-1-3-s4', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-3-mastery' },
    ],
  },
  {
    id: 'vek-1-4', unitId: 'vek-unit-1',
    title: 'Kräfte als Vektoren (Prüfung)',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Kräfte vektoriell addieren', 'Gleichgewichtsbedingungen aufstellen', 'Einheitsvektoren berechnen'],
    prerequisites: ['vek-1-3'],
    nextLessonId: null,
    steps: [
      {
        id: 'vek-1-4-s1', type: 'explanation-intuitive', title: 'Kräfte im Maschinenbau — Strategie',
        content: `In der Technischen Mechanik werden Kräfte **immer** als Vektoren behandelt. Hier die Standard-Strategie für Prüfungsaufgaben:

**Schritt 1 — Alle Kräfte in Komponenten zerlegen:**
Bei einer Kraft $F$ unter dem Winkel $\\alpha$ (zur x-Achse):
- $F_x = F \\cdot \\cos(\\alpha)$
- $F_y = F \\cdot \\sin(\\alpha)$

**Schritt 2 — Resultierende komponentenweise berechnen:**
$$\\vec{R} = \\sum_i \\vec{F}_i \\;\\Rightarrow\\; R_x = \\sum F_{ix}, \\quad R_y = \\sum F_{iy}$$

**Schritt 3 — Gleichgewichtsbedingung (falls gesucht):**
$$\\sum \\vec{F}_i = \\vec{0} \\;\\Leftrightarrow\\; \\sum F_{ix} = 0 \\;\\wedge\\; \\sum F_{iy} = 0 \\;\\wedge\\; \\sum F_{iz} = 0$$

Jede Achse liefert **eine Gleichung** — das ist dein Werkzeug zur Bestimmung unbekannter Seilkräfte, Auflagerkräfte etc.

**Schritt 4 — Einheitsvektor bei Bedarf:**
Für eine Richtung ohne Länge: $\\hat{e} = \\dfrac{\\vec{a}}{|\\vec{a}|}$.

**Prüfungs-Check:** Am Ende *immer* das Vorzeichen und die Einheit prüfen. Eine Resultierende mit $R_y > 0$ zeigt nach oben — stimmt das zum Bild?`,
      },
      {
        id: 'vek-1-4-s2', type: 'visualization', title: 'Kräfteaddition grafisch',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [
            { x: 3, y: 0, color: '#3b82f6', label: '$\\vec{F}_1$' },
            { x: 0, y: 2, color: '#ef4444', label: '$\\vec{F}_2$' },
            { x: 3, y: 2, color: '#22c55e', label: '$\\vec{R}$' },
          ],
          showGrid: true, showSum: true,
        },
      },
      { id: 'vek-1-4-s3', type: 'exercise', title: 'Aufgabe 1 — Resultierende (Prüfung)', exerciseRef: 'ex-vek-1-4-a' },
      { id: 'vek-1-4-s4', type: 'exercise', title: 'Aufgabe 2 — Gleichgewicht (Prüfung)', exerciseRef: 'ex-vek-1-4-b' },
      { id: 'vek-1-4-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-vek-1-4-mastery' },
    ],
  },
]

export const vek_unit1 = {
  id: 'vek-unit-1',
  title: 'Vektorrechnung',
  order: 1,
  description: 'Grundlagen, Skalarprodukt, Kreuzprodukt und Kräfte als Vektoren',
  lessons: lessons_vek_u1,
  exercises: exercises_vek_u1,
}
