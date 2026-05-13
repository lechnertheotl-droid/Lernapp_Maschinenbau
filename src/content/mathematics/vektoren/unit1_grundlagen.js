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
      'Im 2D-Koordinatensystem schreibt man Punkte als Tupel $(x, y)$ — die Reihenfolge ist fest.',
      'Bewegung „nach rechts" entspricht positivem $x$, „nach oben" positivem $y$.',
      'Setz die Werte ein: $x=3$ (rechts), $y=2$ (oben) → $(3,2)$.',
    ],
    pedagogy: { stage: 'apply-independent', subGoal: 0, uses: ['koord-2d'] },
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
      'Notation $(3,2)$ ist nur ein Zahlenpaar — die **Bedeutung** verleiht erst der Kontext (Ortsangabe oder Verschiebung).',
      'Test: Verschieb den Pfeil — bleibt er derselbe Vektor? Verschieb den Punkt — wird er ein anderer Punkt? Genau dieser Unterschied.',
    ],
    pedagogy: { stage: 'recognize', subGoal: 0, uses: ['punkt-vs-vektor'] },
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
      'Klassiker im Maschinenbau: Kraft, Geschwindigkeit, Verschiebung, Beschleunigung = Vektoren. Masse, Temperatur, Energie, Zeit = Skalare.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 0, uses: ['skalar-vs-vektor'] },
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
      'Vorzeichen-Schema: Q1 $(+,+)$ · Q2 $(-,+)$ · Q3 $(-,-)$ · Q4 $(+,-)$.',
      'Lies pro Punkt das Vorzeichenpaar ab und ordne es dem passenden Quadranten zu.',
    ],
    pedagogy: { stage: 'transfer', subGoal: 0, uses: ['quadranten'] },
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
      'Probe: $A + \\vec{v}$ muss wieder $B$ ergeben — wenn nicht, hast du falsch herum subtrahiert.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 1, uses: ['ab-formel'] },
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
    explanation: `**Ansatz:** Unterscheide nach den Eigenschaften, die beide Größen definieren — Betrag allein vs. Betrag + Richtung.

**Rechnung:** Skalar = nur Zahl mit Einheit (z. B. Temperatur $T = 20\\,°\\text{C}$). Vektor = Zahl **und** Richtung (z. B. Geschwindigkeit $\\vec{v} = (50, 0)\\,\\text{km/h}$ nach Osten).

**Probe:** Kann man „$20\\,°\\text{C}$ nach Norden" sagen? Nein — Temperatur hat keine Richtung. Kann man „$50\\,\\text{km/h}$" ohne Richtung sagen? Ja, aber dann weiß man nicht, wohin sich das Auto bewegt — der Vektor trägt diese Zusatzinformation.

**Typischer Fehler:** Glauben, Vektoren wären „größer" oder „komplexer" als Skalare — das ist kein mathematisches Unterscheidungskriterium. Entscheidend ist allein, ob eine räumliche Richtung sinnvoll ist.`,
    hints: [
      'Welche Eigenschaft hat eine Kraft, die eine Temperatur nicht hat?',
      'Ein Vektor braucht zwei Informationen: „wie viel" und „wohin".',
      'Beispiele: Kraft, Geschwindigkeit, Verschiebung sind Vektoren. Masse, Temperatur, Zeit sind Skalare.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 3, uses: ['tech-groessen'] },
    wrongAnswerExplanations: {
      0: '„Größer" ist kein mathematisches Unterscheidungskriterium — ein Skalar wie $T = 1000\\,°\\text{C}$ kann durchaus betragsmäßig größer sein als ein Vektor wie $\\vec{v} = (3, 4)$. Der echte Unterschied ist die Richtung: Vektoren haben Betrag UND Richtung, Skalare nur Betrag.',
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
    pedagogy: { stage: 'apply-guided', subGoal: 0, uses: ['betrag'] },
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

**Probe:** Geometrisch — zeichne $\\vec{a}$, hänge $\\vec{b}$ an dessen Spitze an. Die Spitze von $\\vec{b}$ liegt bei $(2+1,\\;3-1)=(3, 2)$. ✓

**Typischer Fehler:** Antwort $(1, 4)$ verwechselt Subtraktion mit Addition ($2-1$ statt $2+1$, $3-(-1)$ statt $3+(-1)$). Antwort $(3, 4)$ ignoriert das Minuszeichen bei $b_y$.`,
    hints: [
      'Welche Regel gilt für die Addition zweier Vektoren? (Komponentenweise.)',
      'Formel: $(a_x + b_x,\\; a_y + b_y)$.',
      'Achte auf das Vorzeichen: $3 + (-1) = 2$, nicht $4$.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 1, uses: ['add-komp'] },
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
    explanation: `**Ansatz:** Zwei Schritte kombinieren — Skalarmultiplikation **und** Betragsberechnung. Zwei Wege führen zum Ziel; sie müssen dasselbe ergeben.

**Rechnung:** Weg A (erst skalieren, dann Betrag): $2\\vec{a} = (6, 8)$, dann $|2\\vec{a}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Weg B (Homogenitäts-Regel $|k \\vec{a}| = |k| \\cdot |\\vec{a}|$): $|\\vec{a}| = \\sqrt{9 + 16} = 5$, dann $|2\\vec{a}| = 2 \\cdot 5 = 10$.

**Probe:** Beide Wege liefern $10$ — das bestätigt $|k\\vec{a}|=|k|\\cdot|\\vec{a}|$. Außerdem 3-4-5-Tripel verdoppelt → 6-8-10 ist auch ein pythagoreisches Tripel. ✓

**Typischer Fehler:** $|\\vec{a}|=5$ statt $|2\\vec a|=10$ → den Faktor $2$ vergessen. Oder $|2|+|\\vec a|=2+5=7$ — Skalar und Betrag **addiert** statt multipliziert. Oder $2\\cdot(3+4)=14$ — Komponenten direkt addiert ohne Wurzel.`,
    hints: [
      'Zwei Operationen: erst skalieren ($2\\vec{a}$), dann Betrag, oder umgekehrt.',
      'Betrag: $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$. Homogenität: $|k\\vec{a}| = |k| |\\vec{a}|$.',
      '$|\\vec{a}| = \\sqrt{9+16} = 5 \\Rightarrow |2\\vec{a}| = 10$. 3-4-5-Tripel!',
    ],
    pedagogy: { stage: 'apply-independent', subGoal: 1, uses: ['add-komp', 'skalar-mul', 'betrag'] },
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
    pedagogy: { stage: 'apply-guided', subGoal: 0, uses: ['sp-komp'] },
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
    pedagogy: { stage: 'apply-guided', subGoal: 2, uses: ['sp-orthogonal', 'sp-winkel'] },
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
    pedagogy: { stage: 'apply-independent', subGoal: 2, uses: ['sp-winkel-formel', 'sp-komp'] },
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
    pedagogy: { stage: 'apply-independent', subGoal: 3, uses: ['sp-projektion', 'sp-komp'] },
  },
  'ex-vek-1-2-mastery': {
    id: 'ex-vek-1-2-mastery', lessonId: 'vek-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Arbeit $W = \\vec{F} \\cdot \\vec{s}$ bei $\\vec{F} = (10, 0)\\,\\text{N}$ und $\\vec{s} = (3, 4)\\,\\text{m}$ ist:',
    options: ['$70\\,\\text{J}$', '$50\\,\\text{J}$', '$30\\,\\text{J}$', '$0\\,\\text{J}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Arbeit = Skalarprodukt aus Kraft und Weg — nur die Komponente der Kraft *in Wegrichtung* leistet Arbeit.

**Formel:** $W = \\vec{F} \\cdot \\vec{s} = F_x s_x + F_y s_y$.

**Rechnung:** $W = 10 \\cdot 3 + 0 \\cdot 4 = 30\\,\\text{J}$.

**Probe:** Geometrische Probe via Winkelform — $|\\vec{F}| = 10$, $|\\vec{s}| = \\sqrt{9+16} = 5$. $\\cos(\\varphi) = \\tfrac{30}{10 \\cdot 5} = 0{,}6$ → $\\varphi \\approx 53{,}1°$. Arbeit $= 10 \\cdot 5 \\cdot 0{,}6 = 30\\,\\text{J}$. ✓ Beide Wege liefern dasselbe Ergebnis.

**Typischer Fehler:** $|\\vec F|\\cdot|\\vec s|=50$ rechnen — das ignoriert den Winkel zwischen $\\vec F$ und $\\vec s$ und entspricht $\\cos\\varphi=1$ (Parallelität). Korrekt ist $W=\\vec F\\cdot\\vec s=30\\,\\text{J}$, weil nur die horizontale Kraftkomponente $F_x=10$ in Wegrichtung zur Arbeit beiträgt.`,
    hints: [
      'Welche Operation verbindet Kraft und Weg zur Arbeit? Skalarprodukt.',
      'Formel: $W = F_x s_x + F_y s_y$.',
      '$F_y = 0$, also fällt der zweite Summand weg: $W = 10 \\cdot 3 + 0 = 30\\,\\text{J}$.',
    ],
    pedagogy: { stage: 'transfer', subGoal: 1, uses: ['sp-arbeit', 'sp-komp'] },
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
    explanation: `**Ansatz:** Skalarprodukt vs. Kreuzprodukt: Ergebnistyp und Lage zum Ausgangsvektor unterscheiden.

**Rechnung:** Das Kreuzprodukt $\\vec{a} \\times \\vec{b}$ liefert per Definition (nur in 3D) einen **Vektor**, der **senkrecht** auf beiden Ausgangsvektoren steht. Richtung nach Rechte-Hand-Regel. Anwendung: Normalvektor einer Ebene aus zwei Spannvektoren.

**Probe:** Test über Skalarprodukt: $(\\vec{a}\\times\\vec{b})\\cdot\\vec{a}=0$ und $(\\vec{a}\\times\\vec{b})\\cdot\\vec{b}=0$ — beide null bestätigen die Orthogonalität zu $\\vec{a}$ und $\\vec{b}$.

**Typischer Fehler:** „Eine Zahl" wäre das **Skalarprodukt** $\\vec{a}\\cdot\\vec{b}$ — Dimensionsverwechslung. Skalarprodukt liefert Skalar, Kreuzprodukt liefert Vektor.`,
    hints: [
      'Kreuzprodukt oder Skalarprodukt? Kreuzprodukt liefert einen Vektor, Skalarprodukt eine Zahl.',
      'Steht das Ergebnis parallel zu den Ausgangsvektoren oder senkrecht dazu?',
      'Anwendung: Normalvektor der aufgespannten Ebene.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 0, uses: ['kp-vektor', 'kp-orthog'] },
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

**Probe:** Geometrisch — der Betrag des Kreuzprodukts ist die Fläche des von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms. Parallele Vektoren spannen kein Parallelogramm auf → Fläche $= 0$. ✓ Außerdem: Spickzettel — $\\vec{a}\\cdot\\vec{b}=0\\iff\\vec{a}\\perp\\vec{b}$ (Skalarprodukt = senkrecht-Test); $\\vec{a}\\times\\vec{b}=\\vec{0}\\iff\\vec{a}\\parallel\\vec{b}$ (Kreuzprodukt = parallel-Test).

**Typischer Fehler:** $|\\vec{a}| \\cdot |\\vec{b}|$ wäre das **Maximum** — das tritt bei $\\varphi = 90°$ auf ($\\sin 90°=1$), nicht bei Parallelität.`,
    hints: [
      'In die Formel einsetzen: $\\varphi = 0°$, weil die Vektoren parallel sind.',
      '$\\sin(0°) = 0$.',
      'Geometrisch: Parallele Vektoren spannen keine Fläche auf.',
    ],
    pedagogy: { stage: 'apply-independent', subGoal: 2, uses: ['kp-parallel', 'kp-betrag'] },
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
    explanation: `**Ansatz:** Standardregel für die Einheitsvektoren eines Rechtssystems — Rechte-Hand-Regel oder zyklische Regel anwenden.

**Rechnung:** Zyklisch $1\\to 2\\to 3\\to 1$: $\\hat{e}_1\\times\\hat{e}_2=\\hat{e}_3$, $\\hat{e}_2\\times\\hat{e}_3=\\hat{e}_1$, $\\hat{e}_3\\times\\hat{e}_1=\\hat{e}_2$. Werden Indizes *entgegen* der zyklischen Reihenfolge gewählt, kommt das Negative heraus ($\\hat{e}_2\\times\\hat{e}_1=-\\hat{e}_3$). Hier: $\\hat{e}_1\\times\\hat{e}_2=\\hat{e}_3$ — zyklisch, also positiv.

**Probe:** Komponentenformel mit $\\hat{e}_1=(1,0,0)$ und $\\hat{e}_2=(0,1,0)$: $\\hat{e}_1\\times\\hat{e}_2=(0\\cdot 0-0\\cdot 1,\\;0\\cdot 0-1\\cdot 0,\\;1\\cdot 1-0\\cdot 0)=(0,0,1)=\\hat{e}_3$. ✓ Rechte-Hand-Regel-Check: Zeigefinger $x$, Mittelfinger $y$, Daumen zeigt in $+z$ — passt.

**Typischer Fehler:** $-\\hat{e}_3$ ergibt sich bei vertauschter Reihenfolge $\\hat{e}_2\\times\\hat{e}_1$ — das Kreuzprodukt ist **antikommutativ**: $\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})$.`,
    hints: [
      'Rechte-Hand-Regel: Zeigefinger x, Mittelfinger y, Daumen zeigt in welche Richtung?',
      'Zyklisch: $1 \\to 2 \\to 3 \\to 1$. Passt $\\hat{e}_1 \\times \\hat{e}_2$ zur zyklischen Reihenfolge?',
      'Bei zyklischer Reihenfolge positives Ergebnis: $\\hat{e}_1 \\times \\hat{e}_2 = +\\hat{e}_3$.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 3, uses: ['kp-komp', 'kp-rh-regel'] },
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
    pedagogy: { stage: 'apply-guided', subGoal: 1, uses: ['resultierende', 'kraft-zerlegung'] },
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

**Probe:** Plausibilitäts-Check — Seil 1 zieht nach links-oben, Seil 2 zieht nach rechts-oben. Damit die Masse nicht seitlich wegschwingt, müssen sich die **horizontalen** Komponenten gegenseitig aufheben. Genau das sagt die Gleichung aus.

**Typischer Fehler:** Statt $\\sin$ (horizontale Komponenten) die $\\cos$-Anteile gleichgesetzt — das wäre $\\sum F_y = 0$, eine andere Gleichung (betrifft Gewichtskraft, nicht horizontales Gleichgewicht). Oder das Minuszeichen bei $\\vec{F}_1$ vergessen.`,
    hints: [
      'Aus welcher Bedingung? $\\sum F_x = 0$ — nur die x-Komponenten.',
      'Schreibe die Summe auf: $-F_1 \\sin 30° + F_2 \\sin 45° = 0$.',
      'Forme um nach $F_1 \\sin 30° = F_2 \\sin 45°$.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 2, uses: ['gleichgewicht'] },
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
    explanation: `**Ansatz:** Ein **Einheitsvektor** hat per Definition die Länge 1 und zeigt in dieselbe Richtung wie der Ausgangsvektor — die Konstruktion ist Normierung durch den Betrag.

**Rechnung:** $\\hat{e}=\\dfrac{\\vec{a}}{|\\vec{a}|}$. Beispiel $\\vec{a}=(3,4)$, $|\\vec{a}|=5$ → $\\hat{e}=(3/5,\\,4/5)=(0{,}6;\\,0{,}8)$.

**Probe:** Längencheck $|\\hat{e}|=\\left|\\dfrac{\\vec{a}}{|\\vec{a}|}\\right|=\\dfrac{|\\vec{a}|}{|\\vec{a}|}=1$. ✓ Numerisch: $\\sqrt{(3/5)^2+(4/5)^2}=\\sqrt{9/25+16/25}=\\sqrt{1}=1$ ✓.

**Typischer Fehler:** Multiplikation statt Division ($|\\vec{a}|\\cdot\\vec{a}$) — das **streckt** den Vektor um Faktor $|\\vec{a}|$ statt zu normieren. Oder Vektor minus Skalar ($\\vec{a}-|\\vec{a}|$) — Dimensionsfehler.`,
    hints: [
      'Was bedeutet "Einheit"? Länge genau 1.',
      'Wie macht man aus einem Vektor der Länge $L$ einen Vektor der Länge $1$? Durch $L$ teilen.',
      'Formel: $\\hat{e} = \\vec{a} / |\\vec{a}|$.',
    ],
    pedagogy: { stage: 'apply-guided', subGoal: 3, uses: ['einheits-tech'] },
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
    subGoals: [
      { label: 'Punkt = Ort mit Koordinaten; Vektor = Verschiebung mit Richtung und Länge', examRelevance: 'hoch' },
      { label: 'Vektor von $A$ nach $B$: $\\vec{AB} = B - A$ (komponentenweise Subtraktion)', examRelevance: 'hoch' },
      { label: 'Freier Vektor: gleicher Richtung und Länge → gleicher Vektor, egal wo eingezeichnet', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'vek-1-1',
    blueprint: {
      prerequisites: [],
      concepts: [
        { id: 'koord-2d',           title: 'Koordinatensystem $(x,y)$ — $x$ horizontal, $y$ vertikal, Ursprung $(0,0)$', dependsOn: [] },
        { id: 'quadranten',         title: '4 Quadranten gegen den Uhrzeigersinn (Q1: $x>0,y>0$ … Q4: $x>0,y<0$)',     dependsOn: ['koord-2d'] },
        { id: 'punkt',              title: 'Punkt $P=(x,y)$ — beschreibt einen Ort',                                     dependsOn: ['koord-2d'] },
        { id: 'vektor',             title: 'Vektor $\\vec v=(v_x,v_y)$ — Verschiebung mit Betrag und Richtung',         dependsOn: ['koord-2d'] },
        { id: 'punkt-vs-vektor',    title: 'Gleiche Schreibweise $(x,y)$, verschiedene Bedeutung (Ort vs. Verschiebung)', dependsOn: ['punkt', 'vektor'] },
        { id: 'skalar-vs-vektor',   title: 'Skalar (nur Betrag) vs. Vektor (Betrag + Richtung) — Erkennung an „Richtung sinnvoll?"', dependsOn: ['vektor'] },
        { id: 'ab-formel',          title: 'Verbindungsvektor $\\vec{AB}=B-A$ — komponentenweise',                       dependsOn: ['punkt', 'vektor'] },
        { id: 'vektor-frei',        title: 'Freier Vektor: gleiche Länge & Richtung → gleicher Vektor, egal Startpunkt', dependsOn: ['vektor'] },
      ],
      subGoalConcepts: {
        0: ['koord-2d', 'quadranten', 'punkt', 'vektor', 'punkt-vs-vektor', 'skalar-vs-vektor'],
        1: ['ab-formel'],
        2: ['vektor-frei'],
      },
      taskPlan: [
        // SG 0 — Punkt vs. Vektor, Skalar-Erkennung
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['punkt-vs-vektor'],                         qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['skalar-vs-vektor'],                        qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['koord-2d'],                                qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['punkt-vs-vektor', 'skalar-vs-vektor'],     qty: 1, note: 'Masse/Gewicht-Verwechslung' },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['quadranten'],                              qty: 1 },
        // SG 1 — AB-Formel
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['ab-formel'],                               qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['ab-formel'],                               qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['ab-formel'],                               qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['ab-formel'],                               qty: 1, note: 'Distraktor: A−B statt B−A' },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['ab-formel'],                               qty: 1, note: 'Anwendung in 3D oder mit negativen Koordinaten' },
        // SG 2 — Freier Vektor
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['vektor-frei'],                             qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vektor-frei', 'ab-formel'],                qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['vektor-frei'],                             qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vektor-frei', 'punkt-vs-vektor'],          qty: 1, note: 'Distraktor: Punkt verschoben statt Vektor frei' },
        { subGoal: 2, stage: 'transfer',          type: 'sorting',         uses: ['vektor-frei', 'ab-formel'],                qty: 1 },
      ],
    },
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
      {
        id: 'vek-1-0-s2b', type: 'visualization', title: 'Punkt und Vektor im Koordinatensystem',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [{ x: 3, y: 2, color: '#3b82f6', label: '$\\vec{a}=(3,2)$' }],
          showGrid: true,
          showComponents: true,
        },
      },
      {
        id: 'vek-1-0-s2c', type: 'explanation-formal', title: 'Formelübersicht — Koordinaten, Punkt, Vektor',
        content: `**Schreibweisen und Grundformeln dieser Lektion:**

| Begriff | Schreibweise | Bedeutung |
|---------|--------------|-----------|
| Koordinaten in 2D | $(x,\\,y)$ | $x$ horizontal, $y$ vertikal — Reihenfolge ist fest |
| Quadranten (Konvention) | Q1 $(+,+)$ · Q2 $(-,+)$ · Q3 $(-,-)$ · Q4 $(+,-)$ | gegen den Uhrzeigersinn ab rechts oben |
| Punkt | $P=(x,\\,y)$ | beschreibt einen **Ort** im Raum |
| Vektor | $\\vec{v}=(v_x,\\,v_y)$ | beschreibt eine **Verschiebung** (Betrag + Richtung) |
| Verbindungsvektor | $\\vec{AB}=B-A$ | Endpunkt **minus** Startpunkt — komponentenweise |
| Endpunkt aus Start + Vektor | $B = A + \\vec{AB}$ | umgekehrte Anwendung der $\\vec{AB}$-Formel |
| Freier Vektor | $\\vec{a}=\\vec{b}\\iff a_i=b_i \\;\\forall i$ | Komponenten gleich → derselbe Vektor, egal wo gezeichnet |

**Merke:**
- **Skalar** = nur Zahl (z. B. Masse, Temperatur, Volumen).
- **Vektor** = Zahl **und** Richtung (z. B. Kraft, Geschwindigkeit, Verschiebung).
- Notation $(x,y)$ allein sagt noch nicht, ob es ein Punkt oder Vektor ist — der **Kontext** entscheidet.

**Beispiel:** $A=(1,2)$, $B=(4,6)$:
$$\\vec{AB} = B - A = (4-1,\\;6-2) = (3,\\,4)$$

Probe: $A + \\vec{AB} = (1+3,\\;2+4) = (4,\\,6) = B$. ✓`,
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
    subGoals: [
      { label: 'Betrag $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$', examRelevance: 'hoch' },
      { label: 'Vektoraddition komponentenweise', examRelevance: 'hoch' },
      { label: 'Einheitsvektor $\\vec{e}=\\vec{v}/|\\vec{v}|$ bilden', examRelevance: 'mittel' },
      { label: 'Vektor vs. Skalar in technischen Größen erkennen', examRelevance: 'niedrig' },
    ],
    prerequisites: ['vek-1-0'],
    nextLessonId: 'vek-1-2',
    blueprint: {
      prerequisites: [
        { lessonId: 'vek-1-0', concepts: ['vektor', 'skalar-vs-vektor', 'punkt-vs-vektor'] },
      ],
      concepts: [
        { id: 'komp-darstellung',  title: '$\\vec a=(a_x,a_y)$ in 2D bzw. $(a_x,a_y,a_z)$ in 3D — Komponentenform',           dependsOn: [] },
        { id: 'betrag',            title: 'Betrag $|\\vec v|=\\sqrt{v_x^2+v_y^2(+v_z^2)}$ via Pythagoras',                     dependsOn: ['komp-darstellung'] },
        { id: 'add-komp',          title: 'Addition komponentenweise: $\\vec a+\\vec b=(a_x+b_x,a_y+b_y)$',                    dependsOn: ['komp-darstellung'] },
        { id: 'add-geo',           title: 'Geometrisch: Pfeile aneinandersetzen, Resultierende zeichnen',                       dependsOn: ['add-komp'] },
        { id: 'sub-komp',          title: 'Subtraktion komponentenweise: $\\vec a-\\vec b=\\vec a+(-\\vec b)$',                  dependsOn: ['add-komp'] },
        { id: 'skalar-mul',        title: 'Skalarmultiplikation $k\\vec a=(k a_x,k a_y)$ — verlängert/staucht/spiegelt',        dependsOn: ['komp-darstellung'] },
        { id: 'einheitsvektor',    title: 'Einheitsvektor $\\vec e=\\vec v/|\\vec v|$ hat Länge 1, gleiche Richtung',           dependsOn: ['betrag', 'skalar-mul'] },
        { id: 'tech-groessen',     title: 'Kraft, Geschwindigkeit, Verschiebung = Vektoren; Masse, Zeit, Temperatur = Skalare', dependsOn: [] },
        { id: 'vra-axiome',        title: 'Kommutativ, Assoziativ, Distributiv für Vektoren',                                    dependsOn: ['add-komp', 'skalar-mul'] },
      ],
      subGoalConcepts: {
        0: ['komp-darstellung', 'betrag'],
        1: ['add-komp', 'sub-komp', 'add-geo', 'skalar-mul', 'vra-axiome'],
        2: ['einheitsvektor'],
        3: ['tech-groessen'],
      },
      taskPlan: [
        // SG 0 — Betrag
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['betrag'],                              qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['betrag'],                              qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['betrag'],                              qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['betrag'],                              qty: 1, note: 'Distraktor: Wurzel vergessen / Komponenten addiert' },
        { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['betrag'],                              qty: 1, note: '3D-Beispiel oder negative Komponenten' },
        // SG 1 — Addition komponentenweise
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['add-komp', 'vra-axiome'],              qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['add-komp'],                            qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['add-komp', 'skalar-mul'],              qty: 1, note: '$2\\vec a + 3\\vec b$' },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['add-komp', 'sub-komp'],                qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['add-komp', 'add-geo', 'skalar-mul'],    qty: 1 },
        // SG 2 — Einheitsvektor
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['einheitsvektor'],                      qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheitsvektor', 'betrag'],            qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['einheitsvektor', 'betrag'],            qty: 1, note: 'Länge prüfen = 1' },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheitsvektor'],                      qty: 1, note: 'Distraktor: durch Komponente statt Betrag geteilt' },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['einheitsvektor', 'skalar-mul'],        qty: 1 },
        // SG 3 — Vektor vs. Skalar in technischen Größen
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['tech-groessen'],                       qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tech-groessen'],                       qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'matching',        uses: ['tech-groessen'],                       qty: 1, note: 'Größe ↔ Typ' },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tech-groessen'],                       qty: 1, note: 'Masse/Gewichtskraft-Falle' },
        { subGoal: 3, stage: 'transfer',          type: 'sorting',         uses: ['tech-groessen'],                       qty: 1 },
      ],
    },
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
    subGoals: [
      { label: 'Komponentenform $\\vec{a}\\cdot\\vec{b}=\\sum a_i b_i$', examRelevance: 'hoch' },
      { label: 'Winkelform $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\alpha$', examRelevance: 'hoch' },
      { label: 'Orthogonalitäts-Test über $\\vec{a}\\cdot\\vec{b}=0$', examRelevance: 'hoch' },
      { label: 'Projektion eines Vektors auf einen anderen', examRelevance: 'mittel' },
    ],
    prerequisites: ['vek-1-1'],
    nextLessonId: 'vek-1-3',
    blueprint: {
      prerequisites: [
        { lessonId: 'vek-1-1', concepts: ['betrag', 'add-komp', 'skalar-mul'] },
      ],
      concepts: [
        { id: 'sp-komp',         title: '$\\vec a\\cdot\\vec b=a_x b_x+a_y b_y+a_z b_z$ — Komponentenform liefert Zahl',         dependsOn: [] },
        { id: 'sp-skalar',       title: 'Ergebnis ist ein Skalar (Zahl), kein Vektor',                                              dependsOn: ['sp-komp'] },
        { id: 'sp-winkel',       title: '$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$ — Winkelform',                       dependsOn: ['sp-komp'] },
        { id: 'sp-vorzeichen',   title: 'Vorzeichen: $>0$ spitz, $=0$ rechtwinklig, $<0$ stumpf',                                   dependsOn: ['sp-winkel'] },
        { id: 'sp-orthogonal',   title: 'Orthogonalitätstest $\\vec a\\perp\\vec b\\iff\\vec a\\cdot\\vec b=0$',                     dependsOn: ['sp-winkel'] },
        { id: 'sp-winkel-formel', title: 'Winkel: $\\cos\\varphi=(\\vec a\\cdot\\vec b)/(|\\vec a||\\vec b|)$',                     dependsOn: ['sp-winkel'] },
        { id: 'sp-projektion',   title: 'Projektion $\\vec a$ auf $\\vec b$: $\\vec a_b=(\\vec a\\cdot\\vec b/|\\vec b|^2)\\vec b$', dependsOn: ['sp-komp', 'sp-winkel'] },
        { id: 'sp-arbeit',       title: 'Anwendung: Arbeit $W=\\vec F\\cdot\\vec s$',                                                dependsOn: ['sp-komp'] },
        { id: 'sp-regeln',       title: 'Kommutativ, distributiv, mit Skalar verträglich',                                          dependsOn: ['sp-komp'] },
      ],
      subGoalConcepts: {
        0: ['sp-komp', 'sp-skalar', 'sp-regeln'],
        1: ['sp-winkel', 'sp-vorzeichen', 'sp-arbeit'],
        2: ['sp-orthogonal', 'sp-winkel-formel'],
        3: ['sp-projektion'],
      },
      taskPlan: [
        // SG 0 — Komponentenform
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['sp-skalar'],                                qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-komp'],                                  qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['sp-komp'],                                  qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-komp', 'sp-skalar'],                     qty: 1, note: 'Distraktor: komponentenweises Produkt statt Summe' },
        { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['sp-komp', 'sp-regeln'],                     qty: 1 },
        // SG 1 — Winkelform
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['sp-winkel', 'sp-vorzeichen'],               qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-winkel'],                                qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['sp-winkel'],                                qty: 1, note: 'Winkel rückwärts aus $|\\vec a|,|\\vec b|,\\cos$' },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-vorzeichen'],                            qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['sp-arbeit', 'sp-winkel'],                   qty: 1, note: 'Arbeit Kraft·Weg' },
        // SG 2 — Orthogonalität
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['sp-orthogonal'],                            qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-orthogonal', 'sp-komp'],                 qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['sp-winkel-formel', 'sp-komp'],              qty: 1, note: 'Winkel in Grad' },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-orthogonal'],                            qty: 1, note: 'Distraktor: Skalarprodukt $\\neq 0$ als parallel interpretiert' },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['sp-vorzeichen', 'sp-orthogonal'],           qty: 1 },
        // SG 3 — Projektion
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['sp-projektion'],                            qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-projektion'],                            qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['sp-projektion', 'sp-komp'],                 qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-projektion'],                            qty: 1, note: 'Distraktor: durch $|\\vec b|$ statt $|\\vec b|^2$' },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['sp-projektion', 'sp-arbeit'],               qty: 1 },
      ],
    },
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
| Skalare Projektion | $\\vec{a}_{\\parallel}^{\\text{(Skalar)}} = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$ |
| Vektorielle Projektion | $\\vec{a}_b = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}$ |

**Vorzeichen-Interpretation:**
- $\\vec{a} \\cdot \\vec{b} > 0$: spitzer Winkel ($\\varphi < 90°$)
- $\\vec{a} \\cdot \\vec{b} = 0$: rechter Winkel ($\\varphi = 90°$)
- $\\vec{a} \\cdot \\vec{b} < 0$: stumpfer Winkel ($\\varphi > 90°$)

**Rechenregeln:** kommutativ ($\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$), distributiv ($\\vec{a} \\cdot (\\vec{b}+\\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$), assoziativ mit Skalaren ($k(\\vec{a} \\cdot \\vec{b}) = (k\\vec{a}) \\cdot \\vec{b}$).

**Hinweis Projektion:** $\\vec{a}_b$ ist der Anteil von $\\vec{a}$, der parallel zu $\\vec{b}$ liegt — der Rest $\\vec{a}_\\perp = \\vec{a} - \\vec{a}_b$ steht senkrecht zu $\\vec{b}$.`,
      },
      {
        id: 'vek-1-2-s1b', type: 'visualization', title: 'Vektoren mit eingeschlossenem Winkel',
        visualizationId: 'vector-diagram',
        params: {
          vectors: [
            { x: 3, y: 0, color: '#0ea5e9', label: '$\\vec{a}=(3,0)$' },
            { x: 2, y: 2, color: '#dc2626', label: '$\\vec{b}=(2,2)$' },
          ],
          showGrid: true,
        },
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
    subGoals: [
      { label: 'Kreuzprodukt liefert *Vektor* senkrecht auf $\\vec a$ und $\\vec b$ — nicht Skalar wie das Skalarprodukt', examRelevance: 'hoch' },
      { label: 'Betrag $|\\vec a \\times \\vec b| = |\\vec a| |\\vec b| \\sin\\varphi$ = Flächeninhalt des Parallelogramms', examRelevance: 'hoch' },
      { label: 'Richtung per Rechte-Hand-Regel; $\\vec a \\times \\vec b = -\\vec b \\times \\vec a$ (antikommutativ)', examRelevance: 'hoch' },
      { label: 'Nur in 3D definiert; Komponentenformel oder Sarrus-Merkschema mit Einheitsvektoren', examRelevance: 'mittel' },
    ],
    prerequisites: ['vek-1-2'],
    nextLessonId: 'vek-1-4',
    blueprint: {
      prerequisites: [
        { lessonId: 'vek-1-2', concepts: ['sp-komp', 'sp-orthogonal'] },
        { lessonId: 'vek-1-1', concepts: ['betrag', 'add-komp'] },
      ],
      concepts: [
        { id: 'kp-vektor',     title: '$\\vec a\\times\\vec b$ liefert einen Vektor (3D), nicht eine Zahl',                   dependsOn: [] },
        { id: 'kp-3d-only',    title: 'Nur in 3D definiert',                                                                  dependsOn: ['kp-vektor'] },
        { id: 'kp-komp',       title: 'Komponentenformel: $(a_y b_z-a_z b_y,\\;a_z b_x-a_x b_z,\\;a_x b_y-a_y b_x)$',         dependsOn: ['kp-3d-only'] },
        { id: 'kp-orthog',     title: 'Ergebnis $\\perp\\vec a$ und $\\perp\\vec b$',                                          dependsOn: ['kp-vektor'] },
        { id: 'kp-betrag',     title: '$|\\vec a\\times\\vec b|=|\\vec a||\\vec b|\\sin\\varphi$ = Parallelogrammfläche',     dependsOn: ['kp-vektor'] },
        { id: 'kp-rh-regel',   title: 'Rechte-Hand-Regel: Zeigefinger $\\vec a$, Mittel $\\vec b$, Daumen Ergebnis',           dependsOn: ['kp-orthog'] },
        { id: 'kp-antikomm',   title: '$\\vec a\\times\\vec b=-(\\vec b\\times\\vec a)$ — antikommutativ',                     dependsOn: ['kp-komp'] },
        { id: 'kp-parallel',   title: 'Parallelitätstest: $\\vec a\\times\\vec b=\\vec 0\\iff\\vec a\\parallel\\vec b$',       dependsOn: ['kp-betrag'] },
        { id: 'kp-vs-sp',      title: 'Skalar- vs. Kreuzprodukt: Zahl vs. Vektor; Winkel vs. Senkrechte',                     dependsOn: ['kp-vektor'] },
      ],
      subGoalConcepts: {
        0: ['kp-vektor', 'kp-orthog', 'kp-vs-sp'],
        1: ['kp-betrag'],
        2: ['kp-rh-regel', 'kp-antikomm', 'kp-parallel'],
        3: ['kp-3d-only', 'kp-komp'],
      },
      taskPlan: [
        // SG 0 — Ergebnis ist Vektor
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kp-vektor', 'kp-vs-sp'],                qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kp-vektor', 'kp-orthog'],               qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['kp-orthog'],                            qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kp-vs-sp'],                             qty: 1, note: 'Distraktor: Skalar- mit Kreuzprodukt verwechselt' },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['kp-vs-sp', 'kp-orthog'],                qty: 1 },
        // SG 1 — Betrag = Fläche
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kp-betrag'],                            qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kp-betrag'],                            qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['kp-betrag'],                            qty: 1, note: 'Parallelogrammfläche' },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kp-betrag'],                            qty: 1, note: 'Distraktor: cos statt sin' },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['kp-betrag', 'kp-komp'],                 qty: 1, note: 'Dreiecksfläche = ½ |a×b|' },
        // SG 2 — Rechte-Hand-Regel & Antikommutativität
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['kp-antikomm'],                          qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kp-rh-regel'],                          qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['kp-parallel', 'kp-betrag'],             qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kp-antikomm'],                          qty: 1, note: 'Distraktor: kommutativ angenommen' },
        { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['kp-rh-regel', 'kp-antikomm'],           qty: 1 },
        // SG 3 — 3D & Komponentenformel
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['kp-3d-only'],                           qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kp-komp'],                              qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['kp-komp'],                              qty: 1, note: 'Resultatkomponente $z$' },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kp-komp'],                              qty: 1, note: 'Distraktor: Vorzeichen vertauscht' },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['kp-komp', 'kp-betrag'],                 qty: 1 },
      ],
    },
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
    subGoals: [
      { label: 'Kraftkomponenten: $F_x = F \\cos\\alpha$, $F_y = F \\sin\\alpha$ (Winkel zur $x$-Achse)', examRelevance: 'hoch' },
      { label: 'Resultierende: $\\vec R = \\sum \\vec F_i$ komponentenweise addieren', examRelevance: 'hoch' },
      { label: 'Gleichgewicht: $\\sum F_x = 0$ UND $\\sum F_y = 0$ UND $\\sum F_z = 0$', examRelevance: 'hoch' },
      { label: 'Einheitsvektor: $\\hat e = \\vec a / |\\vec a|$ (dimensionslos, Länge 1)', examRelevance: 'hoch' },
      { label: 'Betrag und Richtung: $|\\vec R| = \\sqrt{R_x^2 + R_y^2}$, $\\tan\\alpha = R_y/R_x$', examRelevance: 'hoch' },
      { label: 'Plausibilitätscheck: Vorzeichen der Komponenten passt zur Skizze?', examRelevance: 'mittel' },
    ],
    prerequisites: ['vek-1-3'],
    nextLessonId: null,
    blueprint: {
      prerequisites: [
        { lessonId: 'vek-1-1', concepts: ['add-komp', 'betrag', 'einheitsvektor', 'skalar-mul'] },
      ],
      concepts: [
        { id: 'kraft-vektor',     title: 'Kraft $\\vec F$ ist Vektor mit Betrag und Richtung — Einheit Newton',                  dependsOn: [] },
        { id: 'kraft-zerlegung',  title: '$F_x=F\\cos\\alpha,\\;F_y=F\\sin\\alpha$ (Winkel zur $x$-Achse)',                      dependsOn: ['kraft-vektor'] },
        { id: 'resultierende',    title: '$\\vec R=\\sum\\vec F_i$ komponentenweise',                                              dependsOn: ['kraft-zerlegung'] },
        { id: 'gleichgewicht',    title: 'Gleichgewicht $\\sum F_x=0\\wedge\\sum F_y=0\\wedge\\sum F_z=0$',                        dependsOn: ['resultierende'] },
        { id: 'r-betrag-richtung', title: '$|\\vec R|=\\sqrt{R_x^2+R_y^2}$, $\\tan\\alpha=R_y/R_x$',                                dependsOn: ['resultierende'] },
        { id: 'einheits-tech',    title: 'Einheitsvektor $\\hat e=\\vec a/|\\vec a|$ — dimensionslos, Länge 1',                    dependsOn: [] },
        { id: 'plausi-vorzeichen', title: 'Vorzeichen-Check: passt Resultate zur Skizze?',                                          dependsOn: ['kraft-zerlegung'] },
      ],
      subGoalConcepts: {
        0: ['kraft-vektor', 'kraft-zerlegung'],
        1: ['resultierende'],
        2: ['gleichgewicht'],
        3: ['einheits-tech'],
        4: ['r-betrag-richtung'],
        5: ['plausi-vorzeichen'],
      },
      taskPlan: [
        // SG 0 — Komponentenzerlegung
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kraft-zerlegung'],                       qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kraft-zerlegung'],                       qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['kraft-zerlegung'],                       qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kraft-zerlegung'],                       qty: 1, note: 'sin/cos vertauscht' },
        { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['kraft-zerlegung'],                       qty: 1, note: '[PRÜFUNG]' },
        // SG 1 — Resultierende
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['resultierende'],                         qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['resultierende', 'kraft-zerlegung'],      qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['resultierende', 'kraft-zerlegung'],      qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['resultierende'],                         qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['resultierende', 'kraft-zerlegung'],      qty: 1, note: '[PRÜFUNG] 3 Kräfte' },
        // SG 2 — Gleichgewicht
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['gleichgewicht'],                         qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gleichgewicht'],                         qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['gleichgewicht', 'kraft-zerlegung'],      qty: 1, note: 'Unbekannte Seilkraft' },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gleichgewicht'],                         qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['gleichgewicht', 'kraft-zerlegung'],      qty: 1, note: '[PRÜFUNG]' },
        // SG 3 — Einheitsvektor
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['einheits-tech'],                         qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheits-tech'],                         qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['einheits-tech'],                         qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheits-tech'],                         qty: 1, note: 'Länge ≠ 1 als Ergebnis-Falle' },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['einheits-tech'],                         qty: 1 },
        // SG 4 — Betrag & Richtung der Resultierenden
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['r-betrag-richtung'],                     qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['r-betrag-richtung'],                     qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['r-betrag-richtung', 'resultierende'],    qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['r-betrag-richtung'],                     qty: 1, note: 'Quadrant beim arctan' },
        { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['r-betrag-richtung', 'resultierende', 'kraft-zerlegung'], qty: 1, note: '[PRÜFUNG]' },
        // SG 5 — Plausibilitätscheck
        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['plausi-vorzeichen'],                     qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['plausi-vorzeichen'],                     qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'multiple-choice', uses: ['plausi-vorzeichen', 'kraft-zerlegung'],  qty: 1 },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['plausi-vorzeichen'],                     qty: 1 },
        { subGoal: 5, stage: 'transfer',          type: 'sorting',         uses: ['plausi-vorzeichen', 'resultierende'],    qty: 1, note: 'Lösungsstrategie ordnen' },
      ],
    },
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
      {
        id: 'vek-1-4-s2b', type: 'explanation-formal', title: 'Formelübersicht — Kräfte als Vektoren',
        content: `**Alle Standard-Werkzeuge dieser Lektion auf einen Blick.** Die Formeln gelten in 2D; in 3D ergänzen sich $z$-Komponenten analog.

| Konzept | Formel | Beispiel |
|---------|--------|----------|
| Kraft als Vektor | $\\vec{F}=(F_x,\\,F_y)$, Einheit Newton | $\\vec{F}=(50,\\,30)\\,\\text{N}$ |
| Komponentenzerlegung (Winkel $\\alpha$ zur $x$-Achse) | $F_x=F\\cos\\alpha,\\;F_y=F\\sin\\alpha$ | $F=100\\,\\text{N},\\,\\alpha=60°\\Rightarrow(F_x,F_y)=(50,\\,86{,}6)$ |
| Resultierende | $\\vec{R}=\\sum_i\\vec{F}_i$, komponentenweise | $\\vec{F}_1=(3,0),\\vec{F}_2=(0,4)\\Rightarrow\\vec{R}=(3,4)$ |
| Betrag der Resultierenden | $|\\vec{R}|=\\sqrt{R_x^2+R_y^2}$ | $\\vec{R}=(3,4)\\Rightarrow|\\vec{R}|=5$ |
| Richtungswinkel | $\\tan\\alpha=R_y/R_x$ (Quadrant beachten!) | $\\vec{R}=(3,4)\\Rightarrow\\alpha=\\arctan(4/3)\\approx 53{,}1°$ |
| Gleichgewicht | $\\sum F_x=0\\,\\wedge\\,\\sum F_y=0\\,\\wedge\\,\\sum F_z=0$ | je Achse eine Gleichung |
| Einheitsvektor | $\\hat{e}=\\dfrac{\\vec{a}}{|\\vec{a}|}$, $|\\hat{e}|=1$ | $\\vec{a}=(3,4)\\Rightarrow\\hat{e}=(0{,}6;\\,0{,}8)$ |

**Plausibilitäts-Checkliste am Ende jeder Aufgabe:**
- Vorzeichen der Komponenten passen zur Skizze (Q1: $+,+$; Q2: $-,+$; Q3: $-,-$; Q4: $+,-$).
- Einheit konsistent (überall N, m, °).
- $|\\vec{R}|\\le\\sum|\\vec{F}_i|$ (Dreiecksungleichung — Grenzfall: alle parallel).
- Bei Gleichgewicht: jede Achse separat gleich null.

**Quadranten-Falle bei $\\arctan$:** $\\arctan$ liefert nur Werte in $(-90°,\\,90°)$. Bei negativem $R_x$ muss man $180°$ addieren, sonst landet man im falschen Quadranten. Standardlösung: $\\operatorname{atan2}(R_y,R_x)$ verwenden.`,
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
  unitGoals: [
    'Vektoren komponentenweise addieren, subtrahieren und mit Skalaren multiplizieren',
    'Betrag $|\\vec{v}|$ und Einheitsvektor $\\vec{e} = \\vec{v}/|\\vec{v}|$ sicher berechnen',
    'Skalarprodukt zur Winkel- und Orthogonalitätsprüfung sowie Projektion nutzen',
    'Kreuzprodukt für Flächeninhalte, Normalenvektoren und Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ anwenden',
  ],
  lessons: lessons_vek_u1,
  exercises: exercises_vek_u1,
}
