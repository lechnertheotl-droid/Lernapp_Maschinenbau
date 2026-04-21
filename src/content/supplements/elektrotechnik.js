function mc(question, options, correctIndex, explanation, hints = [], visualization = undefined, wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(visualization ? { visualization } : {}),
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = [], visualization = undefined) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints, ...(visualization ? { visualization } : {}) }
}

function tf(statement, correct, explanation, hints = []) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

function matching(question, pairs, explanation, hints = []) {
  return { type: 'matching', question, pairs, explanation, hints }
}

function sorting(question, items, correctOrder, explanation, hints = []) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}

function withExamPrefix(exercise, exam) {
  if (!exam) return exercise
  if (exercise.question && !exercise.question.includes('[PRÜFUNG]')) {
    return { ...exercise, question: `[PRÜFUNG] ${exercise.question}` }
  }
  if (exercise.statement && !exercise.statement.includes('[PRÜFUNG]')) {
    return { ...exercise, statement: `[PRÜFUNG] ${exercise.statement}` }
  }
  return exercise
}

function bank(profile) {
  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptVisualization, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints, profile.calcVisualization),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, undefined, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'et-1-1': {
    explanation: String.raw`**Vertiefung Ohmsches Gesetz:** Das Ohmsche Gesetz verknüpft die drei Grundgrößen eines elektrischen Kreises:

$$U = R \cdot I$$

- $U$: Spannung in Volt (V)
- $R$: Widerstand in Ohm ($\Omega$)
- $I$: Strom in Ampere (A)

**Reihenschaltung:** $R_{ges} = R_1 + R_2 + \dots$ — der Gesamtwiderstand wächst.

**Parallelschaltung:** $\frac{1}{R_{ges}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$ — der Gesamtwiderstand ist stets *kleiner* als der kleinste Einzelwiderstand.

**Typischer Fehler:** $k\Omega$ nicht in $\Omega$ umgerechnet, daher um Faktor 1000 falsch.`,

    conceptQuestion: 'Was beschreibt das Ohmsche Gesetz?',
    conceptOptions: [
      'Den linearen Zusammenhang $U = R \\cdot I$ bei ohmschen Widerständen',
      'Die Leistung jedes beliebigen Bauelements',
      'Die Frequenzabhängigkeit eines Kondensators',
      'Die Induktivität einer Spule',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Das Ohmsche Gesetz gilt für lineare, zeitunabhängige ohmsche Widerstände: $U = R \\cdot I$. Bei Halbleitern (Diode) oder Spulen und Kondensatoren im Wechselstrom ist der Zusammenhang nicht mehr linear bzw. nicht mehr reell.',
    conceptHints: [
      'Ohmsches Gesetz ist streng linear.',
      'Es gilt nur für ideale Widerstände im Gleichstrom.',
    ],
    conceptWrongAnswers: {
      1: 'Die Leistung ist $P = U I$ (universell) — das Ohmsche Gesetz ist spezieller und beschreibt nur $U = R I$. Beide Gesetze getrennt halten.',
      2: 'Die Frequenzabhängigkeit des Kondensators beschreibt der kapazitive Blindwiderstand $X_C = 1/(\\omega C)$, nicht das Ohmsche Gesetz.',
      3: 'Induktivität $L$ ist eine Bauteilgröße, die im Wechselstrom zur Impedanz $X_L = \\omega L$ führt — nicht vom Ohmschen Gesetz beschrieben.',
    },

    calcQuestion: 'Ein Widerstand $R = 50$ $\\Omega$ liegt an $U = 100$ V. Wie groß ist der Strom $I$ in A?',
    calcAnswer: 2,
    calcTolerance: 0.01,
    calcUnit: 'A',
    calcExplanation: '$I = U/R = 100/50 = 2$ A. Einfaches Einsetzen in das Ohmsche Gesetz.',
    calcHints: [
      '$I = U/R$.',
      'Einheit A = V/$\\Omega$.',
    ],

    trueFalseStatement: 'Der Gesamtwiderstand einer Parallelschaltung ist immer kleiner als der kleinste Einzelwiderstand.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Bei Parallelschaltung addieren sich die Leitwerte $G = 1/R$. Da jeder zusätzliche Zweig den Gesamtleitwert vergrößert, wird $R_{ges}$ zwangsläufig kleiner als der kleinste Einzelwiderstand.',
    trueFalseHints: [
      'Parallel: Leitwerte addieren sich.',
      'Zwei gleiche $R$ parallel ergeben $R/2$.',
    ],

    matchingQuestion: 'Ordne die elektrischen Größen ihren SI-Einheiten zu.',
    matchingPairs: [
      { left: 'Spannung $U$', right: 'Volt (V)' },
      { left: 'Strom $I$', right: 'Ampere (A)' },
      { left: 'Widerstand $R$', right: 'Ohm ($\\Omega$)' },
      { left: 'Leistung $P$', right: 'Watt (W)' },
    ],
    matchingExplanation: 'Die vier Grundeinheiten der Elektrotechnik. 1 V = 1 W/A, 1 $\\Omega$ = 1 V/A. Wichtig für den Einheitencheck bei jeder Rechnung.',
    matchingHints: [
      'V = W/A.',
      '$\\Omega$ = V/A.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Analyse eines einfachen Gleichstromkreises.',
    sortingItems: [
      'Schaltplan zeichnen und Knoten/Maschen identifizieren',
      'Gesamtwiderstand $R_{ges}$ berechnen',
      'Gesamtstrom aus $I = U/R_{ges}$',
      'Teilspannungen und -ströme zuordnen',
      'Einheitencheck und Plausibilitätsprüfung',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisches Vorgehen spart Fehler. Erst Struktur (Schaltplan), dann Ersatzwiderstand, dann Ströme/Spannungen, dann Kontrolle.',
    sortingHints: [
      'Erst Struktur, dann Rechnung, dann Kontrolle.',
      '$R_{ges}$ vor den Teilgrößen.',
    ],

    errorQuestion: 'Ein Student rechnet: "$R = 4{,}7$ k$\\Omega$, $U = 12$ V, also $I = 12/4{,}7 \\approx 2{,}55$ A." Was ist falsch?',
    errorOptions: [
      'k$\\Omega$ muss in $\\Omega$ umgerechnet werden: $I = 12/4700 \\approx 2{,}55$ mA',
      'U muss in mV umgerechnet werden',
      'Das Ohmsche Gesetz gilt hier nicht',
      'Strom wird immer in kA angegeben',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Präfix k wurde unterschlagen. $4{,}7$ k$\\Omega = 4700$ $\\Omega$. Richtig: $I = 12/4700 \\approx 2{,}55$ mA. Ein Faktor 1000 Fehler — immer konsistent in Grundeinheiten rechnen.',
    errorHints: [
      'k = 1000.',
      'Immer auf Grundeinheiten umrechnen.',
    ],
    errorWrongAnswers: {
      1: '$U = 12$ V ist konsistent und muss nicht in mV umgerechnet werden. Der Fehler liegt beim Widerstand: 4,7 k$\\Omega$ = 4700 $\\Omega$, nicht 4,7.',
      2: 'Das Ohmsche Gesetz gilt bei konstantem ohmschen Widerstand uneingeschränkt. Das ist hier gegeben. Der Fehler ist die Einheitenumrechnung.',
      3: 'Strom wird nicht generell in kA angegeben — mA, A oder mA, je nach Größenordnung. Hier korrekt: 2,55 mA. Der Fehler ist die unterschlagene k-Vorsilbe beim Widerstand.',
    },

    transferQuestion: 'Drei Widerstände $R_1 = 10$ $\\Omega$, $R_2 = 20$ $\\Omega$, $R_3 = 30$ $\\Omega$ sind parallel geschaltet. Wie groß ist $R_{ges}$ in $\\Omega$?',
    transferAnswer: 5.4545,
    transferTolerance: 0.05,
    transferUnit: '\\Omega',
    transferExplanation: '$1/R_{ges} = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60$. Also $R_{ges} = 60/11 \\approx 5{,}45$ $\\Omega$. Kleiner als jeder Einzelwiderstand — typisch für Parallelschaltung.',
    transferHints: [
      'Leitwerte addieren.',
      'Am Ende Kehrwert bilden.',
      'Kleiner als kleinster Einzelwiderstand.',
    ],
  },

  'et-1-2': {
    explanation: String.raw`**Vertiefung Kirchhoffsche Gesetze:** Grundlage jeder Netzwerkanalyse.

**Knotensatz (KCL):** Die Summe aller zufließenden Ströme in einem Knoten ist gleich der Summe der abfließenden:

$$\sum I_{zu} = \sum I_{ab} \quad\Leftrightarrow\quad \sum I_k = 0$$

**Maschensatz (KVL):** Die Summe aller Spannungen in einer geschlossenen Masche ist null:

$$\sum U_k = 0$$

**Vorzeichenkonvention:** Umlaufsinn festlegen. Spannungen in Richtung des Umlaufs positiv, dagegen negativ. EMK-Quellen werden entsprechend der Pfeilrichtung gezählt.

**Typischer Fehler:** Vorzeichen beim Umlauf verwechselt oder Zählrichtung der Quelle nicht beachtet.`,

    conceptQuestion: 'Was besagt der Kirchhoffsche Knotensatz (KCL)?',
    conceptOptions: [
      'Die Summe aller Ströme an einem Knoten ist null',
      'Die Summe aller Spannungen in einer Masche ist null',
      'Die Ströme sind an jedem Bauteil gleich',
      'Jeder Knoten hat konstantes Potential',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Ladungserhaltung: In einem Knoten kann sich keine Ladung anhäufen. Deshalb muss gelten $\\sum I_k = 0$, wenn die Ströme mit Vorzeichen entsprechend der Richtung gezählt werden.',
    conceptHints: [
      'Folgt aus der Ladungserhaltung.',
      'Zuflüsse und Abflüsse balancieren sich.',
    ],

    calcQuestion: 'An einem Knoten fließen $I_1 = 3$ A und $I_2 = 2$ A zu, $I_3$ fließt ab. Wie groß ist $I_3$ in A?',
    calcAnswer: 5,
    calcTolerance: 0.01,
    calcUnit: 'A',
    calcExplanation: 'Knotensatz: $I_1 + I_2 = I_3$, also $I_3 = 3 + 2 = 5$ A.',
    calcHints: [
      'Zufluss = Abfluss.',
      '$I_1 + I_2 - I_3 = 0$.',
    ],

    trueFalseStatement: 'Beim Maschenumlauf werden Spannungen entgegen der Umlaufrichtung mit negativem Vorzeichen gezählt.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der Umlaufsinn muss konsistent gewählt werden. Spannungen, deren Pfeil in Umlaufrichtung zeigt, werden positiv, alle anderen negativ gezählt — dann $\\sum U_k = 0$.',
    trueFalseHints: [
      'Konsistenter Umlaufsinn wichtig.',
      'Spannungspfeile beachten.',
    ],

    matchingQuestion: 'Ordne die Gesetze ihrer Aussage zu.',
    matchingPairs: [
      { left: 'KCL (Knotensatz)', right: '$\\sum I_k = 0$ an jedem Knoten' },
      { left: 'KVL (Maschensatz)', right: '$\\sum U_k = 0$ in jeder Masche' },
      { left: 'Ohmsches Gesetz', right: '$U = R \\cdot I$ am Widerstand' },
      { left: 'Leistung', right: '$P = U \\cdot I$' },
    ],
    matchingExplanation: 'KCL und KVL sind die beiden Grundlagen der Netzwerkanalyse. Zusammen mit dem Ohmschen Gesetz reichen sie aus, um jeden linearen Gleichstromkreis zu lösen.',
    matchingHints: [
      'KCL ist Ladungserhaltung.',
      'KVL ist Energieerhaltung (bzgl. Potential).',
    ],

    sortingQuestion: 'Ordne die Schritte der Maschenstromanalyse.',
    sortingItems: [
      'Alle Maschen und unabhängige Maschenströme definieren',
      'Umlaufsinn jeder Masche festlegen',
      'KVL in jeder Masche aufstellen',
      'Gleichungssystem lösen',
      'Zweigströme aus Maschenströmen zurückrechnen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Die Maschenstromanalyse ist eine systematische Methode, um lineare Netzwerke zu lösen. Sauberes Vorgehen verhindert Vorzeichenfehler.',
    sortingHints: [
      'Erst Maschen, dann Gleichungen.',
      'Zweigströme am Ende.',
    ],

    errorQuestion: 'Ein Student stellt in einer Masche mit zwei Widerständen und einer Spannungsquelle auf: $U_q + U_{R1} + U_{R2} = 0$. Was ist verdächtig?',
    errorOptions: [
      'Bei konsistenter Zählpfeilwahl muss meist ein Vorzeichen negativ sein — Quelle gegen Verbraucher',
      'Das Ohmsche Gesetz wurde vergessen',
      'Der Knotensatz wurde verletzt',
      'Die Masche ist nicht geschlossen',
    ],
    errorCorrect: 0,
    errorExplanation: 'In einem üblichen Kreis zeigt die Quellspannung gegen die Spannungsabfälle an den Verbrauchern. Bei konsistentem Umlauf erhält man typisch $U_q - U_{R1} - U_{R2} = 0$. Alle positiv zu setzen ist nur bei passender Pfeilwahl korrekt.',
    errorHints: [
      'Zählpfeile konsequent setzen.',
      'Quelle vs. Verbraucher unterscheiden.',
    ],

    transferQuestion: 'In einem Zweimaschennetzwerk gilt: $U_1 = 12$ V, $R_1 = 4$ $\\Omega$ (Masche 1), $R_2 = 6$ $\\Omega$ (Masche 2), gemeinsamer Widerstand $R_3 = 2$ $\\Omega$. Mit $I_1$ und $I_2$ gleichsinnig: KVL Masche 1: $12 - 4I_1 - 2(I_1 - I_2) = 0$. Masche 2: $-6I_2 - 2(I_2 - I_1) = 0$. Wie groß ist $I_1$ in A?',
    transferAnswer: 2.18,
    transferTolerance: 0.1,
    transferUnit: 'A',
    transferExplanation: 'Aus Masche 2: $-6I_2 - 2I_2 + 2I_1 = 0 \\Rightarrow I_2 = I_1/4$. Einsetzen in Masche 1: $12 = 6I_1 - 2I_2 = 6I_1 - I_1/2 = 11I_1/2 \\Rightarrow I_1 = 24/11 \\approx 2{,}18$ A.',
    transferHints: [
      'Beide KVL-Gleichungen aufstellen.',
      'Eine Gleichung nach $I_2$ auflösen.',
      'In die andere einsetzen.',
    ],
  },

  'et-1-3': {
    explanation: String.raw`**Vertiefung elektrische Leistung und Energie:**

$$P = U \cdot I = I^2 \cdot R = \frac{U^2}{R}$$

- $P$ in Watt (W), $U$ in V, $I$ in A, $R$ in $\Omega$.

**Energie:** $W = P \cdot t$ (Einheit: Ws oder kWh). $1\,\text{kWh} = 3{,}6 \cdot 10^6\,\text{Ws}$.

**Wirkungsgrad:**

$$\eta = \frac{P_{ab}}{P_{zu}} < 1$$

bei jeder realen Maschine (Verluste durch Wärme, Reibung, Umwandlung).

**Typischer Fehler:** kW (Leistung) und kWh (Energie) verwechselt.`,

    conceptQuestion: 'Welche Formeln beschreiben alle die elektrische Leistung an einem ohmschen Widerstand?',
    conceptOptions: [
      '$P = U \\cdot I = I^2 R = U^2/R$',
      '$P = U + I$',
      '$P = R/I$',
      '$P = I \\cdot t$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Mit dem Ohmschen Gesetz lässt sich $P = U I$ in jede Kombination der drei Größen umformen. Alle drei Formen sind äquivalent und nützlich je nachdem, welche zwei Größen bekannt sind.',
    conceptHints: [
      'Ohmsches Gesetz einsetzen.',
      'Drei äquivalente Formen.',
    ],

    calcQuestion: 'Ein Verbraucher: $U = 230$ V, $I = 4$ A. Wie groß ist $P$ in W?',
    calcAnswer: 920,
    calcTolerance: 0.1,
    calcUnit: 'W',
    calcExplanation: '$P = U \\cdot I = 230 \\cdot 4 = 920$ W. Typisch für eine Heizung oder einen Staubsauger.',
    calcHints: [
      '$P = U \\cdot I$.',
      'Einheit: W = V $\\cdot$ A.',
    ],

    trueFalseStatement: 'Der Wirkungsgrad einer realen Maschine ist immer kleiner als 1 (bzw. 100 %).',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jede reale Maschine hat Verluste (Wärme, Reibung, elektrische Verluste). Ein Wirkungsgrad $\\eta = 1$ würde dem 2. Hauptsatz der Thermodynamik widersprechen — er ist das unerreichbare Ideal.',
    trueFalseHints: [
      'Keine Maschine ist verlustfrei.',
      'Wärme als Abfallprodukt.',
    ],

    matchingQuestion: 'Ordne Formel und Beschreibung zu.',
    matchingPairs: [
      { left: '$P = U \\cdot I$', right: 'Grundformel Leistung' },
      { left: '$P = I^2 R$', right: 'aus Strom und Widerstand' },
      { left: '$P = U^2/R$', right: 'aus Spannung und Widerstand' },
      { left: '$W = P \\cdot t$', right: 'Energie aus Leistung mal Zeit' },
    ],
    matchingExplanation: 'Vier Varianten derselben Grundbeziehung. Passende Form wählen je nachdem, welche Größen gegeben sind.',
    matchingHints: [
      'Alle über Ohmsches Gesetz verbunden.',
      'Energie = Leistung $\\cdot$ Zeit.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung der jährlichen Stromkosten eines Verbrauchers.',
    sortingItems: [
      'Leistung $P = U \\cdot I$ bestimmen',
      'Betriebszeit $t$ abschätzen',
      'Energie $W = P \\cdot t$ berechnen',
      'Kosten = $W$ in kWh $\\cdot$ Strompreis',
      'Ergebnis prüfen und Einheiten kontrollieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Typische Anwendung im Alltag. Leistung beschreibt den Momentanzustand, Energie die Summe über die Zeit.',
    sortingHints: [
      'Erst Leistung, dann Energie.',
      'Kosten am Ende.',
    ],

    errorQuestion: 'Ein Student schreibt: "Der Föhn hat 2 kWh Leistung." Was ist falsch?',
    errorOptions: [
      'kWh ist Energie, nicht Leistung — gemeint ist 2 kW = 2000 W',
      'Föhne haben keine Leistung',
      'Die Einheit muss MWh sein',
      'Die Aussage ist in Ordnung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Verbreitete Verwechslung: Leistung in Watt (oder kW) — Momentanwert. Energie in Ws oder kWh — Leistung $\\cdot$ Zeit. Ein Föhn mit 2 kW verbraucht in einer Stunde 2 kWh.',
    errorHints: [
      'kW = Leistung.',
      'kWh = Energie.',
    ],

    transferQuestion: 'Ein Elektromotor nimmt $P_{zu} = 2{,}5$ kW auf und gibt $P_{ab} = 2{,}1$ kW mechanisch ab. Wirkungsgrad $\\eta$ in %?',
    transferAnswer: 84,
    transferTolerance: 0.2,
    transferUnit: '%',
    transferExplanation: '$\\eta = P_{ab}/P_{zu} = 2{,}1/2{,}5 = 0{,}84 = 84$ %. Typisch für einen Asynchronmotor mittlerer Leistung.',
    transferHints: [
      '$\\eta = P_{ab}/P_{zu}$.',
      'In Prozent umrechnen.',
    ],
  },

  'et-2-1': {
    explanation: String.raw`**Vertiefung komplexe Impedanz:** Im Wechselstrom werden Widerstand, Spule und Kondensator durch die komplexe Impedanz $Z$ beschrieben:

$$Z_R = R, \quad Z_L = j\omega L, \quad Z_C = \frac{1}{j\omega C} = -\frac{j}{\omega C}$$

mit $\omega = 2\pi f$.

**Beträge:** $|Z_L| = \omega L$, $|Z_C| = 1/(\omega C)$, $|Z_R| = R$.

**Phase:** Der Strom eilt bei C der Spannung um $90°$ voraus, bei L hinterher, bei R in Phase.

**Typischer Fehler:** Mit Momentanwerten statt Effektivwerten rechnen, oder $f$ statt $\omega$ einsetzen.`,

    conceptQuestion: 'Was beschreibt die komplexe Impedanz $Z$?',
    conceptOptions: [
      'Den komplexen Widerstand eines Bauelements im Wechselstrom (Betrag und Phase)',
      'Den Gleichstromwiderstand',
      'Die Induktivität in Henry',
      'Die Resonanzfrequenz',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Die Impedanz $Z = R + jX$ verbindet Amplitudenverhältnis und Phasenverschiebung zwischen $U$ und $I$ im Wechselstrom. Im Sonderfall $\\omega = 0$ (Gleichstrom) reduziert sich $Z$ auf den ohmschen Anteil $R$.',
    conceptHints: [
      'Impedanz ist eine komplexe Zahl.',
      'Real- und Imaginärteil (Resistanz, Reaktanz).',
    ],

    calcQuestion: 'Eine Spule $L = 100$ mH bei $f = 50$ Hz. Wie groß ist $|Z_L|$ in $\\Omega$?',
    calcAnswer: 31.42,
    calcTolerance: 0.2,
    calcUnit: '\\Omega',
    calcExplanation: '$\\omega = 2\\pi f = 2\\pi \\cdot 50 \\approx 314{,}16$ rad/s. $|Z_L| = \\omega L = 314{,}16 \\cdot 0{,}1 \\approx 31{,}42$ $\\Omega$.',
    calcHints: [
      '$\\omega = 2\\pi f$.',
      '$|Z_L| = \\omega L$.',
    ],

    trueFalseStatement: 'Ein idealer Kondensator wirkt für Gleichstrom ($f = 0$) wie ein unendlich großer Widerstand.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. $|Z_C| = 1/(\\omega C) \\to \\infty$ für $\\omega \\to 0$. Deshalb blockiert ein Kondensator Gleichstrom dauerhaft (nach dem kurzen Aufladevorgang).',
    trueFalseHints: [
      'Impedanz $C$ frequenzabhängig.',
      'Bei $f = 0$ ist $1/(\\omega C) = \\infty$.',
    ],

    matchingQuestion: 'Ordne Bauteil und Impedanz zu.',
    matchingPairs: [
      { left: 'Widerstand $R$', right: '$Z_R = R$, Phase $0°$' },
      { left: 'Spule $L$', right: '$Z_L = j\\omega L$, Phase $+90°$' },
      { left: 'Kondensator $C$', right: '$Z_C = 1/(j\\omega C)$, Phase $-90°$' },
      { left: 'RL-Reihe', right: '$Z = R + j\\omega L$' },
    ],
    matchingExplanation: 'Die Phase entscheidet, ob das Bauteil Energie speichert (L, C) oder dissipiert (R). Nur R trägt zur Wirkleistung bei.',
    matchingHints: [
      'R: in Phase.',
      'L und C: $\\pm 90°$.',
    ],

    sortingQuestion: 'Ordne die Schritte der Impedanzberechnung einer RL-Reihenschaltung.',
    sortingItems: [
      'Kreisfrequenz $\\omega = 2\\pi f$ berechnen',
      '$Z_L = j\\omega L$ bestimmen',
      '$Z_{ges} = R + j\\omega L$ aufstellen',
      'Betrag $|Z_{ges}| = \\sqrt{R^2 + (\\omega L)^2}$',
      'Phase $\\varphi = \\arctan(\\omega L/R)$',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisch: Frequenz → Einzelimpedanzen → Gesamtimpedanz → Betrag und Phase. Rechnung immer mit komplexen Zahlen durchführen, erst am Schluss Betrag bilden.',
    sortingHints: [
      '$\\omega$ immer zuerst.',
      'Betrag am Schluss.',
    ],

    errorQuestion: 'Ein Student rechnet: "$Z_L = 2\\pi \\cdot 50 \\cdot 0{,}01 = 3{,}14$ $\\Omega$, $Z_R = 10$ $\\Omega$, also $|Z| = 10 + 3{,}14 = 13{,}14$ $\\Omega$." Was ist falsch?',
    errorOptions: [
      'R und $Z_L$ stehen senkrecht aufeinander — $|Z| = \\sqrt{R^2 + (\\omega L)^2}$',
      '$\\omega$ ist falsch berechnet',
      '$Z_L$ ist negativ',
      'R muss geteilt werden',
    ],
    errorCorrect: 0,
    errorExplanation: 'Widerstand und Spulenreaktanz sind senkrechte Komponenten in der komplexen Ebene. Beträge skalar zu addieren ist falsch. Korrekt: $|Z| = \\sqrt{100 + 9{,}87} \\approx 10{,}49$ $\\Omega$.',
    errorHints: [
      'Komplexe Zahlen: Realteil und Imaginärteil.',
      'Pythagoras für Beträge.',
    ],

    transferQuestion: 'RLC-Reihe: $R = 10$ $\\Omega$, $L = 50$ mH, $C = 100$ $\\mu$F, $f = 50$ Hz. Wie groß ist $|Z|$ in $\\Omega$?',
    transferAnswer: 19.91,
    transferTolerance: 0.5,
    transferUnit: '\\Omega',
    transferExplanation: '$\\omega = 314{,}16$ rad/s. $\\omega L = 15{,}71$ $\\Omega$, $1/(\\omega C) = 31{,}83$ $\\Omega$. Blindwiderstand $X = \\omega L - 1/(\\omega C) = -16{,}12$ $\\Omega$. $|Z| = \\sqrt{10^2 + 16{,}12^2} \\approx 19{,}0$ $\\Omega$.',
    transferHints: [
      'Erst $\\omega L$ und $1/(\\omega C)$.',
      'Blindwiderstand = Differenz.',
      '$|Z| = \\sqrt{R^2 + X^2}$.',
    ],
  },

  'et-2-2': {
    explanation: String.raw`**Vertiefung RC- und RL-Filter:** Einfache Schaltungen mit $R$ und $C$ (bzw. $L$) wirken als Frequenzfilter.

**Tiefpass (RC):** Ausgang parallel zu $C$. Bei niedrigen $f$ wird das Signal durchgelassen, bei hohen abgeschwächt.

**Grenzfrequenz:**

$$f_g = \frac{1}{2\pi R C} \quad\text{bzw.}\quad f_g = \frac{R}{2\pi L}$$

Bei $f_g$ ist $|Z_R| = |Z_C|$ (bzw. $|Z_L|$), Amplitude $-3$ dB.

**Phasenwinkel:**

$$\varphi = \arctan\frac{X}{R}$$

mit $X = \omega L$ bzw. $X = -1/(\omega C)$.

**Typischer Fehler:** $f$ und $\omega$ verwechselt oder $2\pi$ vergessen.`,

    conceptQuestion: 'Was versteht man unter der Grenzfrequenz $f_g$ eines RC-Tiefpasses?',
    conceptOptions: [
      'Die Frequenz, bei der die Ausgangsamplitude um $-3$ dB gedämpft ist ($1/\\sqrt{2}$)',
      'Die höchste mögliche Eingangsfrequenz',
      'Die Resonanzfrequenz',
      'Die Frequenz, bei der der Filter ausgeht',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei $f_g$ sind $|Z_R| = |Z_C|$. Die Amplitudenübertragung beträgt $1/\\sqrt{2} \\approx 0{,}707$ — das entspricht $-3$ dB. Der Phasenwinkel beträgt $-45°$.',
    conceptHints: [
      '-3 dB = $1/\\sqrt{2}$.',
      'R und C gleich groß bei $f_g$.',
    ],

    calcQuestion: 'RC-Tiefpass mit $R = 1$ k$\\Omega$, $C = 1$ $\\mu$F. Wie groß ist $f_g$ in Hz?',
    calcAnswer: 159.15,
    calcTolerance: 0.5,
    calcUnit: 'Hz',
    calcExplanation: '$f_g = 1/(2\\pi R C) = 1/(2\\pi \\cdot 1000 \\cdot 10^{-6}) = 1/(2\\pi \\cdot 10^{-3}) \\approx 159{,}15$ Hz. Typische Audio-Filtergrenze.',
    calcHints: [
      '$f_g = 1/(2\\pi R C)$.',
      'Einheiten: $\\Omega \\cdot$ F = s.',
    ],

    trueFalseStatement: 'Bei reinem ohmschen Verbraucher gilt $\\cos\\varphi = 1$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Am Widerstand sind $U$ und $I$ exakt in Phase ($\\varphi = 0$), also $\\cos\\varphi = 1$. Die gesamte Scheinleistung wird als Wirkleistung umgesetzt.',
    trueFalseHints: [
      'R: Strom und Spannung in Phase.',
      'Leistungsfaktor = $\\cos\\varphi$.',
    ],

    matchingQuestion: 'Ordne Bauelement und Phasenwinkel (zwischen $U$ und $I$) zu.',
    matchingPairs: [
      { left: 'Widerstand', right: '$\\varphi = 0°$' },
      { left: 'Spule (ideal)', right: '$\\varphi = +90°$ (U voraus)' },
      { left: 'Kondensator (ideal)', right: '$\\varphi = -90°$ (I voraus)' },
      { left: 'RL-Reihe', right: '$0 < \\varphi < 90°$' },
    ],
    matchingExplanation: 'Die Phase zwischen Spannung und Strom ist entscheidend für Wirk- und Blindleistung. Energie speichernde Bauelemente verursachen $\\pm 90°$.',
    matchingHints: [
      'L speichert magnetisch.',
      'C speichert elektrisch.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Frequenzgang-Analyse eines RC-Tiefpasses.',
    sortingItems: [
      'Übertragungsfunktion $H(j\\omega) = Z_C/(R + Z_C)$ aufstellen',
      'Betrag $|H|$ berechnen',
      'Phase $\\arg H$ bestimmen',
      'Grenzfrequenz aus $|H| = 1/\\sqrt{2}$',
      'Bode-Diagramm zeichnen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Klassisches Vorgehen: Übertragungsfunktion → Betrag/Phase → Grenzfrequenz → Diagramm. Grundlage jedes Filterdesigns.',
    sortingHints: [
      'Erst $H(j\\omega)$.',
      'Grenzfrequenz aus $|H|$.',
    ],

    errorQuestion: 'Ein Student sagt: "Bei $\\omega = 50$ Hz ist $X_L = 50 \\cdot 0{,}1 = 5$ $\\Omega$." Was ist falsch?',
    errorOptions: [
      'Statt $f$ muss $\\omega = 2\\pi f \\approx 314$ rad/s eingesetzt werden',
      'Die Induktivität muss in mH sein',
      '$X_L$ ist immer negativ',
      'Das ist ohne Fehler',
    ],
    errorCorrect: 0,
    errorExplanation: 'Häufige Verwechslung: $X_L = \\omega L$ mit $\\omega = 2\\pi f$. Also $X_L = 2\\pi \\cdot 50 \\cdot 0{,}1 \\approx 31{,}4$ $\\Omega$ (nicht 5 $\\Omega$). Der Faktor $2\\pi$ ist entscheidend.',
    errorHints: [
      '$\\omega \\neq f$.',
      '$\\omega = 2\\pi f$.',
    ],

    transferQuestion: 'RL-Hochpass: $R = 2$ k$\\Omega$, $L = 10$ mH. Grenzfrequenz $f_g$ in Hz?',
    transferAnswer: 31831,
    transferTolerance: 50,
    transferUnit: 'Hz',
    transferExplanation: '$f_g = R/(2\\pi L) = 2000/(2\\pi \\cdot 0{,}01) = 2000/0{,}0628 \\approx 31831$ Hz $\\approx 31{,}8$ kHz.',
    transferHints: [
      '$f_g = R/(2\\pi L)$.',
      'L in H.',
    ],
  },

  'et-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsvorbereitung Gleichstromnetze:** Wiederholung der Netzwerkanalyse für Klausuraufgaben.

**Spannungsteiler:**

$$U_2 = U \cdot \frac{R_2}{R_1 + R_2}$$

**Stromteiler (zwei Widerstände parallel):**

$$I_1 = I \cdot \frac{R_2}{R_1 + R_2}$$

**Knoten-/Maschenanalyse** systematisch anwenden, Superposition bei mehreren Quellen nutzen.

**Prüfungstipp:** Einheiten immer mitführen, Zählpfeile klar markieren, Ergebnis auf Plausibilität prüfen (Vorzeichen, Größenordnung).`,

    conceptQuestion: 'Welche Methode ist bei einem linearen Gleichstromnetzwerk mit mehreren unabhängigen Quellen am systematischsten?',
    conceptOptions: [
      'Maschenstrom- oder Knotenpotentialanalyse, gegebenenfalls mit Superposition',
      'Nur das Ohmsche Gesetz anwenden',
      'Bauteile der Reihe nach durchmessen',
      'Immer zuerst die kleinste Spannung vernachlässigen',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Maschen- oder Knotenanalyse liefern lineare Gleichungssysteme, die immer lösbar sind. Superposition erlaubt, jede Quelle einzeln zu betrachten und die Wirkungen zu addieren.',
    conceptHints: [
      'Systematische Verfahren.',
      'Linearität erlaubt Superposition.',
    ],

    calcQuestion: 'Spannungsteiler: $U = 24$ V, $R_1 = 1$ k$\\Omega$, $R_2 = 3$ k$\\Omega$. Wie groß ist $U_2$ in V?',
    calcAnswer: 18,
    calcTolerance: 0.1,
    calcUnit: 'V',
    calcExplanation: '$U_2 = U \\cdot R_2/(R_1 + R_2) = 24 \\cdot 3/4 = 18$ V. Klassische Teilerformel.',
    calcHints: [
      'Spannungsteilerformel.',
      '$R_2/(R_1+R_2)$.',
    ],

    trueFalseStatement: 'Die Summe der in einen Knoten hineinfließenden Ströme ist null (unter Beachtung der Vorzeichen).',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Kirchhoffs Knotensatz (KCL) folgt aus der Ladungserhaltung und gilt in jedem Knoten eines Netzwerks — zentral für jede Gleichstromaufgabe.',
    trueFalseHints: [
      'Ladungserhaltung.',
      'Vorzeichen beachten.',
    ],

    matchingQuestion: 'Ordne die Aufgabenart der passenden Methode zu.',
    matchingPairs: [
      { left: 'Reihenschaltung nur mit R', right: '$R_{ges} = \\sum R_k$' },
      { left: 'Parallelschaltung nur mit R', right: '$1/R_{ges} = \\sum 1/R_k$' },
      { left: 'Gemischte Topologie mit mehreren Quellen', right: 'Maschen-/Knotenanalyse, Superposition' },
      { left: 'Quelle mit linear belastetem Zweipol', right: 'Thevenin- oder Norton-Ersatzschaltbild' },
    ],
    matchingExplanation: 'Die passende Methode richtet sich nach der Struktur: Einfache Serien/Parallel → direkte Formel. Komplexere Netze → systematische Verfahren.',
    matchingHints: [
      'Einfach → direkte Formel.',
      'Komplex → systematisch.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Lösung einer Gleichstromaufgabe in der Prüfung.',
    sortingItems: [
      'Schaltplan sauber skizzieren, Zählpfeile definieren',
      'Vereinfachungen (Reihen/Parallel) soweit möglich',
      'Knoten/Maschen für die Restsstruktur aufstellen',
      'Gleichungssystem lösen',
      'Plausibilitätscheck: Einheiten, Größenordnung, Vorzeichen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Struktur gewinnt die Prüfung: Erst Skizze und Vereinfachung, dann Gleichungen, dann Kontrolle. Wer systematisch arbeitet, macht weniger Vorzeichenfehler.',
    sortingHints: [
      'Sauberer Schaltplan zuerst.',
      'Plausibilitätscheck am Ende.',
    ],

    errorQuestion: 'Klausurfehler: "Spannung an $R_2$: $U_2 = U \\cdot R_1/(R_1 + R_2)$." Was ist falsch?',
    errorOptions: [
      'Im Zähler muss $R_2$ stehen, nicht $R_1$ — die Spannung fällt proportional zum eigenen Widerstand ab',
      'Es fehlt der Faktor 2',
      'Der Nenner ist falsch',
      '$U_2$ muss negativ sein',
    ],
    errorCorrect: 0,
    errorExplanation: 'Im Spannungsteiler gilt $U_k = U \\cdot R_k/R_{ges}$: Der größere Widerstand bekommt die größere Teilspannung. Plausibel: Bei $R_1 = R_2$ fällt die Hälfte ab.',
    errorHints: [
      'Zähler = eigener Widerstand.',
      'Plausibilität bei $R_1 = R_2$.',
    ],

    transferQuestion: 'Kombinationsschaltung: $R_1 = 4$ $\\Omega$ in Reihe mit der Parallelschaltung von $R_2 = 6$ $\\Omega$ und $R_3 = 12$ $\\Omega$ an $U = 20$ V. Gesamtstrom $I$ in A?',
    transferAnswer: 2.5,
    transferTolerance: 0.05,
    transferUnit: 'A',
    transferExplanation: '$R_{23} = (6 \\cdot 12)/(6 + 12) = 72/18 = 4$ $\\Omega$. $R_{ges} = R_1 + R_{23} = 4 + 4 = 8$ $\\Omega$. $I = U/R_{ges} = 20/8 = 2{,}5$ A.',
    transferHints: [
      'Parallelschaltung zuerst.',
      'Dann $R_1$ in Reihe addieren.',
      '$I = U/R_{ges}$.',
    ],
  },

  'et-3-2': {
    exam: true,
    explanation: String.raw`**Prüfungsvorbereitung Wechselstromnetze:** Arbeiten mit komplexen Zeigern.

**Resonanz im Reihenschwingkreis:**

$$\omega_0 = \frac{1}{\sqrt{L C}}, \quad f_0 = \frac{1}{2\pi\sqrt{L C}}$$

Bei $\omega_0$ kompensieren sich $X_L$ und $X_C$ — die Impedanz ist rein ohmsch, $|Z| = R$.

**Wirk-, Blind-, Scheinleistung:**

$$P = U \cdot I \cdot \cos\varphi, \quad Q = U \cdot I \cdot \sin\varphi, \quad S = U \cdot I$$

**Leistungsfaktor-Korrektur:** Parallelkondensator gleicht induktive Blindleistung aus.

**Typischer Fehler:** Effektivwerte mit Spitzenwerten verwechselt ($U_{eff} = \hat{U}/\sqrt{2}$).`,

    conceptQuestion: 'Wie berechnet sich die Resonanzfrequenz eines Reihenschwingkreises (RLC)?',
    conceptOptions: [
      '$f_0 = 1/(2\\pi\\sqrt{LC})$',
      '$f_0 = 1/(RC)$',
      '$f_0 = R/(2\\pi L)$',
      '$f_0 = \\sqrt{RC}$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei der Resonanz gilt $\\omega_0 L = 1/(\\omega_0 C)$, daraus $\\omega_0 = 1/\\sqrt{LC}$ und $f_0 = \\omega_0/(2\\pi)$. L und C tauschen Energie periodisch aus.',
    conceptHints: [
      '$X_L = X_C$ bei Resonanz.',
      '$\\omega_0 = 1/\\sqrt{LC}$.',
    ],

    calcQuestion: 'Reihenschwingkreis $L = 10$ mH, $C = 10$ $\\mu$F. Resonanzfrequenz $f_0$ in Hz?',
    calcAnswer: 503.3,
    calcTolerance: 1,
    calcUnit: 'Hz',
    calcExplanation: '$f_0 = 1/(2\\pi\\sqrt{LC}) = 1/(2\\pi\\sqrt{10^{-2} \\cdot 10^{-5}}) = 1/(2\\pi \\cdot 3{,}162 \\cdot 10^{-4}) \\approx 503{,}3$ Hz.',
    calcHints: [
      '$f_0 = 1/(2\\pi\\sqrt{LC})$.',
      'Einheiten: H $\\cdot$ F = s$^2$.',
    ],

    trueFalseStatement: 'Bei der Resonanzfrequenz eines RLC-Reihenschwingkreises ist die Gesamtimpedanz rein ohmsch.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Die Reaktanzen $X_L = \\omega L$ und $X_C = 1/(\\omega C)$ sind gleich groß und kompensieren sich. Übrig bleibt $|Z| = R$, Strom und Spannung sind in Phase.',
    trueFalseHints: [
      '$X_L = X_C$ heben sich auf.',
      'Nur R bleibt.',
    ],

    matchingQuestion: 'Ordne den Frequenzbereich seinem Impedanzverhalten im RLC-Reihenschwingkreis zu.',
    matchingPairs: [
      { left: '$f \\ll f_0$', right: 'kapazitiv dominiert ($|Z_C|$ groß)' },
      { left: '$f = f_0$', right: 'rein ohmsch, $|Z| = R$' },
      { left: '$f \\gg f_0$', right: 'induktiv dominiert ($|Z_L|$ groß)' },
      { left: 'nahe $f_0$', right: 'Strommaximum, schmales Band' },
    ],
    matchingExplanation: 'Die Impedanz wechselt ihren Charakter beim Durchlaufen der Resonanz von kapazitiv nach induktiv. Bei $f_0$ ist das Strommaximum.',
    matchingHints: [
      'Niedrige $f$: C dominiert.',
      'Hohe $f$: L dominiert.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Analyse einer AC-Schaltung.',
    sortingItems: [
      '$\\omega = 2\\pi f$ berechnen',
      'Einzelimpedanzen $Z_R$, $Z_L$, $Z_C$ bestimmen',
      'Gesamtimpedanz nach Topologie berechnen',
      'Strom $\\underline{I} = \\underline{U}/\\underline{Z}$',
      'Wirk-, Blind-, Scheinleistung berechnen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisch: Frequenz → Impedanzen → Gesamtimpedanz → Strom → Leistungen. Alles mit komplexen Zeigern.',
    sortingHints: [
      '$\\omega$ immer zuerst.',
      'Leistungen am Ende.',
    ],

    errorQuestion: 'Ein Student rechnet mit $\\hat{U} = 325$ V und setzt dies in $P = U \\cdot I$ ein. Wo liegt der Fehler?',
    errorOptions: [
      'Für Leistungsrechnung gilt $P = U_{eff} \\cdot I_{eff} \\cdot \\cos\\varphi$ — $U_{eff} = \\hat{U}/\\sqrt{2} \\approx 230$ V',
      'Die Phase wurde vergessen',
      '$\\hat{U} = 325$ V ist zu klein',
      'Im Gleichstrom gibt es keine Leistung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Im Wechselstrom werden Leistungen über Effektivwerte definiert. Für eine Sinusspannung gilt $U_{eff} = \\hat{U}/\\sqrt{2}$. Bei 325 V Spitze ergibt das 230 V eff — die bekannte Netzspannung.',
    errorHints: [
      'Effektivwerte verwenden.',
      '$\\sqrt{2}$-Faktor.',
    ],

    transferQuestion: 'Induktiver Verbraucher: $P = 2$ kW, $U = 230$ V, $\\cos\\varphi = 0{,}7$. Welche parallele Kapazität $C$ in $\\mu$F korrigiert auf $\\cos\\varphi = 1$ bei $f = 50$ Hz?',
    transferAnswer: 123,
    transferTolerance: 3,
    transferUnit: '\\mu F',
    transferExplanation: '$Q_L = P \\cdot \\tan\\varphi = 2000 \\cdot \\tan(\\arccos 0{,}7) \\approx 2000 \\cdot 1{,}02 \\approx 2040$ var. Kompensation durch C: $Q_C = U^2 \\omega C = Q_L \\Rightarrow C = Q_L/(U^2 \\omega) = 2040/(230^2 \\cdot 314{,}16) \\approx 122{,}7$ $\\mu$F.',
    transferHints: [
      '$\\tan\\varphi = \\sqrt{1 - \\cos^2\\varphi}/\\cos\\varphi$.',
      '$Q_C = U^2 \\omega C$.',
      '$C = Q/(U^2 \\omega)$.',
    ],
  },
}

export const elektrotechnikSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    { explanation: profile.explanation, exercises: bank(profile) },
  ])
)
