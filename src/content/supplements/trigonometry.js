function mc(question, options, correctIndex, explanation, hints = [], wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = []) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints }
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
  const sortingSlot = profile.sortingOverride
    ? mc(profile.sortingOverride.question, profile.sortingOverride.options, profile.sortingOverride.correctIndex, profile.sortingOverride.explanation, profile.sortingOverride.hints, profile.sortingOverride.wrongAnswerExplanations)
    : sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints)

  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sortingSlot,
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'trig-1-1': {
    explanation: String.raw`**Vertiefung Winkelmaß:** Arbeite immer mit der Beziehung $180^\circ = \pi$ rad. Erst klären, ob die Aufgabe Grad oder Radiant erwartet; dann kürzen. In technischen Formeln wie $s=r\alpha$ muss $\alpha$ im Bogenmaß stehen.`,
    conceptQuestion: 'Warum ist das Bogenmaß in technischen Formeln wie s = r·α praktischer als Gradmaß?',
    conceptOptions: ['Weil α dann direkt das Verhältnis Bogenlänge/Radius ist', 'Weil Gradmaß keine Winkel beschreibt', 'Weil π im Gradmaß verboten ist', 'Weil Bogenmaß nur bei 90° funktioniert'],
    conceptCorrect: 0,
    conceptExplanation: 'Im Bogenmaß gilt α = s/r. Bei r = 1 ist der Winkel genau die Bogenlänge. Darum taucht in Ableitungen und Kreisbewegungen kein Zusatzfaktor 180/π auf.',
    conceptHints: ['Denke an den Einheitskreis.', 'Radiant ist dimensionslos: Länge durch Länge.'],
    conceptWrongAnswers: {
      1: 'Gradmaß beschreibt Winkel vollkommen korrekt (seit Jahrtausenden in Navigation, Astronomie, Geodäsie). Der Vorteil von Radiant ist nur die direkte Bedeutung als Bogenlänge-zu-Radius-Verhältnis.',
      2: '$\\pi$ darf in Gradmaß verwendet werden (z.B. $\\pi$ rad $=180°$). Der Vorteil von Radiant liegt in der einheitlichen Verwendung in Ableitungsregeln.',
      3: 'Bogenmaß funktioniert für **alle** Winkel, nicht nur $90°$. Radiant ist sogar für $0$, negative Winkel und Werte größer $2\\pi$ definiert.',
    },
    calcQuestion: 'Rechne 60° ins Bogenmaß um. Gib den Faktor vor π an.',
    calcAnswer: 1 / 3,
    calcTolerance: 0.001,
    calcUnit: 'π rad',
    calcExplanation: '60°·π/180° = π/3. Der Faktor vor π ist also 1/3.',
    calcHints: ['Nutze α_rad = α_Grad · π/180.', '60/180 = 1/3.'],
    trueFalseStatement: 'Bei Kreisweg-Formeln wie s = r·α darf α ohne Umrechnung in Grad eingesetzt werden.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. In s = r·α muss α im Bogenmaß stehen. 90° muss zuerst zu π/2 rad werden.',
    trueFalseHints: ['Prüfe die Einheit der Formel.', 'Bogenlänge entsteht direkt nur mit Radiant.'],
    matchingQuestion: 'Ordne die Standardwinkel ihren Bogenmaßen zu.',
    matchingPairs: [{ left: '30°', right: 'π/6' }, { left: '90°', right: 'π/2' }, { left: '180°', right: 'π' }],
    matchingExplanation: 'Diese drei Werte sind Grundanker: 30° = π/6, 90° = π/2, 180° = π.',
    matchingHints: ['Starte bei 180° = π.', 'Halbieren: 90° = π/2.'],
    sortingQuestion: 'Bringe die Umrechnung von 135° nach Radiant in die richtige Reihenfolge.',
    sortingItems: ['135°·π/180° schreiben', '135/180 kürzen', '3/4 erhalten', 'Ergebnis 3π/4 notieren'],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: '135°·π/180° = (135/180)π = (3/4)π = 3π/4.',
    sortingHints: ['Erst Formel, dann Bruch kürzen.', '135 und 180 durch 45 teilen.'],
    errorQuestion: 'Welcher Fehler erklärt das falsche Ergebnis 90° = 90π rad?',
    errorOptions: ['Es wurde nicht durch 180 dividiert', '90° ist kein Winkel', 'π wurde falsch geschrieben', 'Radiant darf keine Brüche enthalten'],
    errorCorrect: 0,
    errorExplanation: 'Die Formel lautet α_rad = α_Grad·π/180. Der Faktor /180 ist entscheidend.',
    errorHints: ['Vergleiche mit 180° = π.', '90° muss kleiner als π sein.'],
    errorWrongAnswers: {
      1: '$90°$ ist selbstverständlich ein Winkel (rechter Winkel). Das Problem ist die Rechnung: $90 \\cdot \\pi$ ergibt $90\\pi$, weil die Division durch $180$ vergessen wurde.',
      2: '$\\pi$ ist eine fest definierte Konstante $\\approx 3{,}14159$ — sie wurde nicht „falsch geschrieben". Die Umrechnung selbst ist der Fehler.',
      3: 'Radiant ist genau wie Meter oder Sekunden eine reguläre Maßeinheit, die auch Brüche enthalten darf ($\\pi/2$, $\\pi/6$ usw.). Der Fehler ist nur die fehlende Division.',
    },
    transferQuestion: 'Ein Kreis hat r = 2 m und α = π/2 rad. Berechne die Bogenlänge s = r·α als Faktor vor π.',
    transferAnswer: 1,
    transferTolerance: 0.001,
    transferUnit: 'π m',
    transferExplanation: 's = r·α = 2·π/2 = π m. Der Faktor vor π ist 1.',
    transferHints: ['Setze α im Bogenmaß ein.', '2·π/2 kürzt sich zu π.'],
  },
  'trig-1-2': {
    explanation: String.raw`**Vertiefung Dreieck:** Benenne zuerst die Seiten relativ zum Winkel $\alpha$. Gegenkathete, Ankathete und Hypotenuse ändern sich, wenn ein anderer spitzer Winkel betrachtet wird.`,
    conceptQuestion: 'Welche Information musst du kennen, bevor du sin, cos oder tan im rechtwinkligen Dreieck auswählst?',
    conceptOptions: ['Welche Seite relativ zum Winkel gesucht/gegeben ist', 'Nur die Farbe des Dreiecks', 'Nur die längste Seite', 'Nur ob der Winkel in Grad steht'],
    conceptCorrect: 0,
    conceptExplanation: 'Die Wahl hängt davon ab, ob Gegenkathete, Ankathete oder Hypotenuse beteiligt sind: sin = G/H, cos = A/H, tan = G/A.',
    conceptHints: ['SOH-CAH-TOA ist relativ zum Winkel.', 'Gegenkathete liegt gegenüber vom betrachteten Winkel.'],
    conceptWrongAnswers: {
      1: 'Die Farbe ist für die Mathematik irrelevant. Entscheidend ist die **Rolle** der Seiten (Gegenkathete, Ankathete, Hypotenuse) relativ zum betrachteten Winkel.',
      2: 'Die Hypotenuse (längste Seite) allein reicht nicht. Man muss auch wissen, welche der anderen Seiten (Gegen- oder Ankathete) zur Aufgabe passt — erst dann wählt man $\\sin$, $\\cos$ oder $\\tan$.',
      3: 'Das Winkelmaß (Grad vs. Radiant) ist erst bei der Zahleneingabe im Taschenrechner relevant. Die Wahl von $\\sin/\\cos/\\tan$ erfolgt zuvor anhand der Seiten-Situation.',
    },
    calcQuestion: 'Gegenkathete = 6 cm, Hypotenuse = 10 cm. Berechne sin(α).',
    calcAnswer: 0.6,
    calcTolerance: 0.001,
    calcUnit: '',
    calcExplanation: 'sin(α)=G/H=6/10=0,6.',
    calcHints: ['Sinus nutzt Gegenkathete und Hypotenuse.', '6/10 kürzen.'],
    trueFalseStatement: 'Die Hypotenuse liegt immer gegenüber dem rechten Winkel und ist im rechtwinkligen Dreieck die längste Seite.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Die Hypotenuse ist unabhängig vom betrachteten spitzen Winkel immer gegenüber dem 90°-Winkel.',
    trueFalseHints: ['Hypotenuse gehört zum rechten Winkel.', 'Sie ist nicht Gegen- oder Ankathete zu α.'],
    matchingQuestion: 'Ordne SOH-CAH-TOA zu.',
    matchingPairs: [{ left: 'SOH', right: 'sin = Gegenkathete/Hypotenuse' }, { left: 'CAH', right: 'cos = Ankathete/Hypotenuse' }, { left: 'TOA', right: 'tan = Gegenkathete/Ankathete' }],
    matchingExplanation: 'SOH-CAH-TOA ist die wichtigste Merkregel für rechtwinklige Dreiecke.',
    matchingHints: ['S steht für Sinus.', 'T steht für Tangens.'],
    sortingQuestion: 'Ordne den Lösungsweg für eine Seitenberechnung im rechtwinkligen Dreieck.',
    sortingItems: ['Winkel α markieren', 'Gegen-/Ankathete/Hypotenuse benennen', 'passende Funktion wählen', 'Gleichung umstellen', 'Einheit angeben'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Ohne saubere Seitenbenennung wird oft sin mit cos verwechselt.',
    sortingHints: ['Die Funktion kommt erst nach der Seitenbenennung.', 'Die Einheit gehört ans Ende.'],
    errorQuestion: 'Du rechnest cos(α)=G/H. Was ist daran falsch?',
    errorOptions: ['cos nutzt A/H, nicht G/H', 'cos nutzt nie Hypotenuse', 'G/H ist tan', 'Im Dreieck gibt es keinen cos'],
    errorCorrect: 0,
    errorExplanation: 'G/H ist sin(α). cos(α) ist A/H.',
    errorHints: ['CAH: Cos-Ankathete-Hypotenuse.', 'SOH: Sin-Gegenkathete-Hypotenuse.'],
    errorWrongAnswers: {
      1: 'Kosinus nutzt sogar die Hypotenuse zentral: $\\cos = A/H$. Ohne Hypotenuse wäre der Kosinus gar nicht definiert. Der Fehler ist Gegenkathete statt Ankathete im Zähler.',
      2: '$G/H$ ist nicht Tangens, sondern Sinus. Tangens ist $G/A$ (Gegenkathete durch Ankathete, ohne Hypotenuse).',
      3: 'Kosinus gibt es selbstverständlich im rechtwinkligen Dreieck — das ist sogar die historische Definition. Der Fehler liegt konkret im falschen Zähler.',
    },
    transferQuestion: 'Eine Leiter ist 5 m lang und steht unter 60° zum Boden. Wie hoch reicht sie? (sin60°≈0,866)',
    transferAnswer: 4.33,
    transferTolerance: 0.02,
    transferUnit: 'm',
    transferExplanation: 'Die Höhe ist die Gegenkathete: h = 5·sin60° = 5·0,866 = 4,33 m.',
    transferHints: ['Leiter = Hypotenuse.', 'Höhe = Gegenkathete zum Bodenwinkel.'],
  },
  'trig-1-3': {
    explanation: String.raw`**Vertiefung Grundwerte:** Merke Sinus von 0°,30°,45°,60°,90° als $\sqrt{0}/2,\sqrt{1}/2,\sqrt{2}/2,\sqrt{3}/2,\sqrt{4}/2$. Kosinus läuft dieselbe Reihe rückwärts.`,
    conceptQuestion: 'Warum ist cos(30°) gleich sin(60°)?',
    conceptOptions: ['Weil 30° und 60° Komplementwinkel sind', 'Weil alle Sinuswerte gleich sind', 'Weil cos immer sin ist', 'Weil 30+60=180 gilt'],
    conceptCorrect: 0,
    conceptExplanation: 'Für spitze Winkel gilt cos(α)=sin(90°−α). Daher cos(30°)=sin(60°)=√3/2.',
    conceptHints: ['Komplementwinkel ergänzen auf 90°.', 'Dreieck: Gegenkathete des einen ist Ankathete des anderen.'],
    conceptWrongAnswers: {
      1: 'Sinuswerte sind überhaupt nicht alle gleich: $\\sin 0°=0$, $\\sin 30°=0{,}5$, $\\sin 90°=1$. Die Gleichheit gilt nur zwischen Komplementwinkeln: $\\cos\\alpha=\\sin(90°-\\alpha)$.',
      2: '$\\cos$ und $\\sin$ sind unterschiedliche Funktionen. Sie stimmen nur für spezielle Winkelpaare (Komplementwinkel) überein, nicht allgemein.',
      3: '$30°+60°=90°$, nicht $180°$. Komplementwinkel summieren sich zu $90°$. Die Regel $\\cos\\alpha=\\sin(90°-\\alpha)$ erklärt die Gleichheit.',
    },
    calcQuestion: 'Ein Mast wirft bei einem Sonnenstand von 60° einen 3 m langen Schatten. Wie hoch ist der Mast in Metern? (√3≈1,732)',
    calcAnswer: 5.196,
    calcTolerance: 0.03,
    calcUnit: 'm',
    calcExplanation: 'tan60° = Höhe/Schatten, also Höhe = 3·tan60° = 3·√3 ≈ 3·1,732 = 5,196 m.',
    calcHints: ['tan(α) = Gegenkathete/Ankathete.', 'Schatten ist die Ankathete, Mast-Höhe die Gegenkathete.', 'tan(60°) = √3.'],
    trueFalseStatement: 'sin(45°) und cos(45°) sind gleich groß.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Im 45°-45°-90°-Dreieck sind Gegen- und Ankathete gleich lang.',
    trueFalseHints: ['Gleichschenkliges rechtwinkliges Dreieck.', 'Beide Werte sind √2/2.'],
    matchingQuestion: 'Ordne die Grundwerte zu.',
    matchingPairs: [{ left: 'sin30°', right: '1/2' }, { left: 'cos45°', right: '√2/2' }, { left: 'cos60°', right: '1/2' }],
    matchingExplanation: 'Diese Werte müssen abrufbar sein, bevor Additionstheoreme sinnvoll trainiert werden.',
    matchingHints: ['Sinus-Reihe steigt von 0 auf 1.', 'Kosinus-Reihe fällt von 1 auf 0.'],
    sortingOverride: {
      question: 'Welcher der folgenden Sinuswerte ist am größten?',
      options: ['sin0°', 'sin30°', 'sin60°', 'sin90°'],
      correctIndex: 3,
      explanation: 'Sinus steigt im ersten Quadranten monoton von 0 (bei 0°) bis 1 (bei 90°). sin90° = 1 ist der größte Wert.',
      hints: ['Sinus wächst zwischen 0° und 90° monoton.', 'sin90° erreicht das Maximum 1.'],
      wrongAnswerExplanations: {
        0: '$\\sin 0° = 0$ — das ist der **kleinste** Wert auf dem Intervall $[0°,90°]$, nicht der größte. Im ersten Quadranten steigt Sinus von $0$ auf $1$.',
        1: '$\\sin 30° = 0{,}5$ ist zwar größer als $\\sin 0°$, aber deutlich kleiner als $\\sin 90° = 1$. Sinus wächst monoton bis $90°$.',
        2: '$\\sin 60° = \\sqrt{3}/2 \\approx 0{,}866$ liegt knapp unter $\\sin 90° = 1$. Monoton steigend bedeutet: $\\sin 90°$ ist immer noch größer.',
      },
    },
    errorQuestion: 'Welcher Grundwert ist falsch?',
    errorOptions: ['sin30°=1/2', 'cos60°=1/2', 'tan45°=1', 'cos90°=1'],
    errorCorrect: 3,
    errorExplanation: 'cos90°=0, weil die x-Koordinate am oberen Punkt des Einheitskreises 0 ist.',
    errorHints: ['cos ist x-Koordinate.', 'Bei 90° liegt der Punkt bei (0,1).'],
    errorWrongAnswers: {
      0: '$\\sin 30° = 1/2$ ist korrekt — das ist der Standardgrundwert aus dem $30°$-$60°$-$90°$-Dreieck. Kein Fehler.',
      1: '$\\cos 60° = 1/2$ ist korrekt (weil $\\cos 60° = \\sin 30°$ gilt, Komplementwinkel). Kein Fehler.',
      2: '$\\tan 45° = 1$ ist korrekt: im gleichschenkligen rechtwinkligen Dreieck sind Gegen- und Ankathete gleich, also $\\tan = G/A = 1$. Kein Fehler.',
    },
    transferQuestion: 'Berechne 2·sin30° + cos60°.',
    transferAnswer: 1.5,
    transferTolerance: 0.001,
    transferUnit: '',
    transferExplanation: '2·sin30° + cos60° = 2·0,5 + 0,5 = 1,5.',
    transferHints: ['sin30°=1/2.', 'cos60°=1/2.'],
  },
  'trig-1-4': {
    explanation: String.raw`**Vertiefung Quadranten:** Das Vorzeichen ergibt sich aus den Koordinaten am Einheitskreis: $\cos$ ist x, $\sin$ ist y, $\tan=y/x$.`,
    conceptQuestion: 'Warum ist cos(120°) negativ?',
    conceptOptions: ['120° liegt im 2. Quadranten, dort ist x negativ', '120° ist größer als 90°, daher ist alles positiv', 'Sinus und Kosinus sind immer positiv', 'cos hat kein Vorzeichen'],
    conceptCorrect: 0,
    conceptExplanation: 'cos ist die x-Koordinate. Im 2. Quadranten ist x<0, also cos(120°)<0.',
    conceptHints: ['Einheitskreis: cos=x.', '2. Quadrant liegt links der y-Achse.'],
    conceptWrongAnswers: {
      1: 'Umgekehrt: Winkel $>90°$ liegen außerhalb des 1. Quadranten, wo nicht mehr alles positiv ist. Im 2. Quadranten ($90°$ bis $180°$) ist $\\cos$ negativ.',
      2: '$\\sin$ und $\\cos$ sind **nicht** immer positiv. Am Einheitskreis wechseln sie das Vorzeichen je nach Quadrant: $\\cos<0$ im 2. und 3. Quadranten, $\\sin<0$ im 3. und 4. Quadranten.',
      3: '$\\cos$ hat sehr wohl ein Vorzeichen: positiv oder negativ je nach Quadrant. $\\cos 120° = -1/2$ ist ein konkretes negatives Ergebnis.',
    },
    calcQuestion: 'Berechne sin(210°).',
    calcAnswer: -0.5,
    calcTolerance: 0.001,
    calcUnit: '',
    calcExplanation: '210°=180°+30°. Im 3. Quadranten ist sin negativ: sin210°=-sin30°=-0,5.',
    calcHints: ['Referenzwinkel 30°.', 'Sinus im 3. Quadranten ist negativ.'],
    trueFalseStatement: 'Im 3. Quadranten sind sin und cos negativ, tan aber positiv.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig: tan=sin/cos. Negativ durch negativ ergibt positiv.',
    trueFalseHints: ['3. Quadrant: x<0, y<0.', 'tan=y/x.'],
    matchingQuestion: 'Ordne Quadrant und positives Vorzeichen zu.',
    matchingPairs: [{ left: '1. Quadrant', right: 'sin, cos, tan positiv' }, { left: '2. Quadrant', right: 'nur sin positiv' }, { left: '4. Quadrant', right: 'nur cos positiv' }],
    matchingExplanation: 'ASTC: All Students Take Calculus = alle, sin, tan, cos.',
    matchingHints: ['2. Quadrant oben links.', '4. Quadrant unten rechts.'],
    sortingQuestion: 'Löse cos(240°) gedanklich in der richtigen Reihenfolge.',
    sortingItems: ['Quadrant bestimmen', 'Referenzwinkel 60° erkennen', 'Vorzeichen von cos im 3. Quadranten bestimmen', 'cos60° einsetzen', 'Ergebnis -1/2 notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: '240° liegt im 3. Quadranten, Referenzwinkel 60°. cos ist dort negativ, also -1/2.',
    sortingHints: ['240°=180°+60°.', 'cos ist im 3. Quadranten negativ.'],
    errorQuestion: 'Warum ist die Aussage sin(150°)=-1/2 falsch?',
    errorOptions: ['150° liegt im 2. Quadranten, dort ist sin positiv', '150° hat keinen Referenzwinkel', 'sin30° ist negativ', '150° liegt im 4. Quadranten'],
    errorCorrect: 0,
    errorExplanation: '150°=180°-30°. Im 2. Quadranten ist Sinus positiv, also sin150°=+1/2.',
    errorHints: ['2. Quadrant = oben links.', 'y-Koordinate ist positiv.'],
    errorWrongAnswers: {
      1: '$150°$ hat sehr wohl einen Referenzwinkel: $180° - 150° = 30°$. Der Referenzwinkel ist der spitze Winkel zur nächsten x-Achsen-Halbgeraden.',
      2: '$\\sin 30° = +1/2$ ist per Definition positiv (im 1. Quadranten). Der Fehler im ursprünglichen Ergebnis liegt nur im Vorzeichen für $150°$, nicht beim Grundwert selbst.',
      3: '$150°$ liegt zwischen $90°$ und $180°$ — das ist definitionsgemäß der 2. Quadrant, nicht der 4. Quadrant (der liegt zwischen $270°$ und $360°$).',
    },
    transferQuestion: 'Berechne tan(225°).',
    transferAnswer: 1,
    transferTolerance: 0.001,
    transferUnit: '',
    transferExplanation: '225°=180°+45°. tan hat Periode 180° und ist im 3. Quadranten positiv: tan225°=tan45°=1.',
    transferHints: ['Referenzwinkel 45°.', 'tan im 3. Quadranten positiv.'],
  },
}

// Reuse high-quality banks for later lessons with precise lesson profiles.
Object.assign(profiles, {
  'trig-2-1': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Einheitskreis:** Jeder Punkt auf dem Einheitskreis hat die Form $(\cos\alpha,\sin\alpha)$. Der Radius ist 1; deshalb gilt immer $\cos^2\alpha+\sin^2\alpha=1$.`, conceptQuestion: 'Welche Gleichung erfüllt jeder Punkt P=(x,y) auf dem Einheitskreis?', conceptOptions: ['x²+y²=1', 'x+y=1', 'x²-y²=1', 'x/y=1'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Die Addition $x+y=1$ ist die Geradengleichung durch $(1,0)$ und $(0,1)$, nicht der Einheitskreis. Der Kreis ist quadratisch: $x^2+y^2=1$.', 2: '$x^2-y^2=1$ beschreibt eine Hyperbel, nicht den Einheitskreis. Die Summe der Quadrate (nicht Differenz) ergibt den Kreis.', 3: '$x/y=1$ ist die Winkelhalbierende $y=x$ (ohne Ursprung), nicht der Einheitskreis.' }, calcQuestion: 'P=(0,1) liegt auf dem Einheitskreis. Welchem Winkel in Grad entspricht dieser Punkt?', calcAnswer: 90, calcTolerance: 0, calcUnit: '°', calcExplanation: 'P=(0,1) ist der obere Punkt des Einheitskreises, also 90°.', transferQuestion: 'Für α=180°: Welche x-Koordinate hat P=(cosα,sinα)?', transferAnswer: -1, transferTolerance: 0, transferUnit: '', transferExplanation: 'Bei 180° liegt der Punkt links: P=(-1,0), also x=-1.' },
  'trig-2-2': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Koordinaten:** Kosinus ist die horizontale Koordinate, Sinus die vertikale Koordinate. Vorzeichenfehler lassen sich vermeiden, wenn du den Quadranten zuerst einzeichnest.`, conceptQuestion: 'Ein Punkt am Einheitskreis hat P=(-1/2, √3/2). Was ist cos(α)?', conceptOptions: ['-1/2', '√3/2', '1/2', '-√3/2'], conceptCorrect: 0, conceptWrongAnswers: { 1: '$\\sqrt{3}/2$ ist die $y$-Koordinate, also $\\sin\\alpha$. Der Kosinus ist aber die $x$-Koordinate: $\\cos\\alpha=-1/2$.', 2: '$1/2$ hat das falsche Vorzeichen. Der Punkt liegt im 2. Quadranten ($x<0$), daher ist $\\cos\\alpha$ negativ: $-1/2$.', 3: '$-\\sqrt{3}/2$ verwechselt die Koordinate und das Vorzeichen. $\\cos\\alpha$ ist die $x$-Koordinate $-1/2$, nicht die $y$-Koordinate mit falschem Vorzeichen.' }, calcQuestion: 'Für α=270°: Welche y-Koordinate hat P=(cosα,sinα)?', calcAnswer: -1, calcTolerance: 0, calcUnit: '', calcExplanation: 'Bei 270° liegt der Punkt unten: P=(0,-1), also y=-1.', transferQuestion: 'Für P=(√2/2, √2/2): Gib den Winkel in Grad an.', transferAnswer: 45, transferTolerance: 0, transferUnit: '°', transferExplanation: 'Beide Koordinaten sind positiv und gleich: 1. Quadrant mit Referenzwinkel 45°.' },
  'trig-2-3': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Periodizität:** Nach $360^\circ$ bzw. $2\pi$ ist der Punkt wieder gleich. Sinus ist ungerade, Kosinus gerade: $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$.`, conceptQuestion: 'Welche Aussage beschreibt die Periodizität korrekt?', conceptOptions: ['sin(α+360°)=sin(α)', 'sin(α+360°)=-sin(α)', 'cos(α+180°)=cos(α)', 'tan hat Periode 360° und nie 180°'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Nach einer vollen Umdrehung ($360°$) ist der Punkt am Einheitskreis wieder identisch, daher $\\sin(\\alpha+360°)=+\\sin\\alpha$, nicht $-\\sin\\alpha$. Das Minuszeichen gilt bei $\\sin(\\alpha+180°)$.', 2: '$\\cos(\\alpha+180°)=-\\cos\\alpha$, nicht $+\\cos\\alpha$. Nach einer halben Umdrehung spiegelt sich der Punkt am Ursprung, daher Vorzeichenwechsel.', 3: 'Tangens hat tatsächlich Periode $180°$ (nicht $360°$), weil $\\tan=\\sin/\\cos$ bei Punkspiegelung gleich bleibt. Die Aussage ist also falsch.' }, calcQuestion: 'Berechne sin(390°).', calcAnswer: 0.5, calcTolerance: 0.001, calcUnit: '', calcExplanation: '390°=360°+30°, also sin390°=sin30°=0,5.', transferQuestion: 'Berechne cos(-60°).', transferAnswer: 0.5, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'Kosinus ist gerade: cos(-60°)=cos60°=0,5.' },
  'trig-2-4': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Tangens:** $\tan\alpha=\sin\alpha/\cos\alpha=y/x$. Damit ist Tangens die Steigung der Ursprungsgeraden zum Kreispunkt. Bei $x=0$ ist Tangens nicht definiert.`, conceptQuestion: 'Warum ist tan(90°) nicht definiert?', conceptOptions: ['Weil cos(90°)=0 und tan=sin/cos ist', 'Weil sin(90°)=0', 'Weil 90° kein Winkel ist', 'Weil tan nur im Dreieck existiert'], conceptCorrect: 0, conceptWrongAnswers: { 1: '$\\sin 90°=1$, nicht $0$. Der Zähler in $\\tan=\\sin/\\cos$ ist bei $90°$ kein Problem — das Problem ist der Nenner $\\cos 90°=0$.', 2: '$90°$ ist selbstverständlich ein Winkel (rechter Winkel). Der Grund für die Undefiniertheit ist die Division durch Null im Bruch $\\tan=\\sin/\\cos$.', 3: 'Tangens ist über den Einheitskreis für alle Winkel mit $\\cos\\alpha\\neq 0$ definiert, nicht nur im Dreieck. Der Grund für die Lücke bei $90°$ ist $\\cos 90°=0$.' }, calcQuestion: 'Berechne tan(30°) näherungsweise mit √3≈1,732. Verwende tan30°=1/√3.', calcAnswer: 0.577, calcTolerance: 0.01, calcUnit: '', calcExplanation: 'tan30°=1/√3≈1/1,732≈0,577.', transferQuestion: 'Berechne tan(180°).', transferAnswer: 0, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'tan180°=sin180°/cos180°=0/(-1)=0.' },
  'trig-2-5': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung alle Quadranten:** Reduziere jeden Winkel auf einen Referenzwinkel im ersten Quadranten und setze dann das Vorzeichen aus dem Quadranten.`, conceptQuestion: 'Wie lautet der Referenzwinkel zu 330°?', conceptOptions: ['30°', '60°', '150°', '330°'], conceptCorrect: 0, conceptWrongAnswers: { 1: '$60°$ entspräche $330°-270°$, aber der Referenzwinkel wird zur nächsten x-Achse gemessen. $330°$ liegt im 4. Quadranten, nahe $360°$, also $360°-330°=30°$.', 2: '$150°$ ist selbst kein spitzer Winkel. Referenzwinkel liegen immer zwischen $0°$ und $90°$. Die richtige Rechnung ist $360°-330°=30°$.', 3: 'Der Referenzwinkel ist per Definition der spitze Winkel zur x-Achse, nicht der ursprüngliche Winkel selbst. Hier: $360°-330°=30°$.' }, calcQuestion: 'Berechne cos(300°).', calcAnswer: 0.5, calcTolerance: 0.001, calcUnit: '', calcExplanation: '300°=360°-60°. Im 4. Quadranten ist cos positiv: cos300°=cos60°=0,5.', transferQuestion: 'Berechne sin(240°) mit √3≈1,732.', transferAnswer: -0.866, transferTolerance: 0.01, transferUnit: '', transferExplanation: '240°=180°+60°. Im 3. Quadranten ist sin negativ: -√3/2≈-0,866.' },
  'trig-3-1': { ...profiles['trig-1-3'], explanation: String.raw`**Vertiefung Additionstheoreme:** Summen von Winkeln darfst du nicht komponentenweise auswerten. $\sin(\alpha+\beta)$ ist nicht $\sin\alpha+\sin\beta$, sondern $\sin\alpha\cos\beta+\cos\alpha\sin\beta$.`, conceptQuestion: 'Welche Formel ist korrekt?', conceptOptions: ['sin(α+β)=sinα cosβ + cosα sinβ', 'sin(α+β)=sinα+sinβ', 'cos(α+β)=cosα+cosβ', 'cos(α+β)=sinα sinβ'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Sinus ist nicht linear: $\\sin(\\alpha+\\beta)\\neq \\sin\\alpha+\\sin\\beta$. Gegenbeispiel: $\\sin(30°+60°)=\\sin 90°=1$, aber $\\sin 30°+\\sin 60°=0{,}5+0{,}866\\approx 1{,}366$.', 2: 'Auch Kosinus ist nicht linear: $\\cos(\\alpha+\\beta)\\neq \\cos\\alpha+\\cos\\beta$. Die korrekte Formel ist $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$.', 3: '$\\cos(\\alpha+\\beta)=\\sin\\alpha\\sin\\beta$ ist die halbe Formel mit falschem Vorzeichen. Richtig: $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$.' }, calcQuestion: 'Berechne sin(75°) näherungsweise mit sin75°=(√6+√2)/4, √6≈2,449, √2≈1,414.', calcAnswer: 0.966, calcTolerance: 0.01, calcUnit: '', calcExplanation: '(2,449+1,414)/4≈3,863/4≈0,966.', transferQuestion: 'Berechne cos(15°) näherungsweise mit cos(45°-30°)=(√6+√2)/4.', transferAnswer: 0.966, transferTolerance: 0.01, transferUnit: '', transferExplanation: 'cos(15°)=cos(45°-30°)=cos45 cos30 + sin45 sin30=(√6+√2)/4≈0,966.' },
  'trig-3-2': { ...profiles['trig-1-3'], explanation: String.raw`**Vertiefung Identitäten:** Die Gleichung $\sin^2\alpha+\cos^2\alpha=1$ kommt direkt aus dem Einheitskreis. Doppelwinkel entstehen aus Additionstheoremen mit $\beta=\alpha$.`, conceptQuestion: 'Welche Formel ist eine gültige Doppelwinkelformel?', conceptOptions: ['sin(2α)=2sinα cosα', 'sin(2α)=2sinα', 'cos(2α)=2cosα', 'cos(2α)=sin²α+cos²α'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Der Faktor $2$ kommt nicht nach vorne: $\\sin(2\\alpha)\\neq 2\\sin\\alpha$. Gegenbeispiel: $\\sin 90°=1$, aber $2\\sin 45°=\\sqrt{2}\\approx 1{,}414$. Richtig ist $\\sin(2\\alpha)=2\\sin\\alpha\\cos\\alpha$.', 2: 'Auch $\\cos(2\\alpha)\\neq 2\\cos\\alpha$: $\\cos 0°=1$, aber $2\\cos 0°=2$. Die Doppelwinkelformel lautet $\\cos(2\\alpha)=\\cos^2\\alpha-\\sin^2\\alpha$.', 3: '$\\sin^2\\alpha+\\cos^2\\alpha=1$ ist der Satz des Pythagoras am Einheitskreis — unabhängig von $\\alpha$. Damit wäre $\\cos(2\\alpha)=1$ für alle $\\alpha$, was offensichtlich falsch ist.' }, calcQuestion: 'Wenn sinα=0,6 und cosα=0,8: Berechne sin(2α).', calcAnswer: 0.96, calcTolerance: 0.001, calcUnit: '', calcExplanation: 'sin(2α)=2sinαcosα=2·0,6·0,8=0,96.', transferQuestion: 'Wenn sinα=0,6: Berechne cos²α mit sin²α+cos²α=1.', transferAnswer: 0.64, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'cos²α=1-sin²α=1-0,36=0,64.' },
  'trig-3-3': { ...profiles['trig-1-2'], explanation: String.raw`**Vertiefung technische Anwendungen:** Bei Kräften zur Horizontalen gilt meist $F_x=F\cos\alpha$, $F_y=F\sin\alpha$. Bei Schwingungen liest du Amplitude, Kreisfrequenz und Phase aus $x(t)=A\sin(\omega t+\varphi)$ ab.`, conceptQuestion: 'Eine Kraft ist zur Horizontalen gegeben. Welche Komponente nutzt den Kosinus?', conceptOptions: ['horizontale Komponente Fx', 'vertikale Komponente Fy', 'Betrag F', 'Phase φ'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Die vertikale Komponente nutzt den Sinus: $F_y=F\\sin\\alpha$. Der Kosinus gehört zur Ankathete, also zur horizontalen Achse: $F_x=F\\cos\\alpha$.', 2: 'Der Betrag $F$ ist die Hypotenuse und wird direkt angegeben — er braucht keine Winkelfunktion. Kosinus wird nur für die Zerlegung der Komponenten benötigt.', 3: 'Die Phase $\\varphi$ ist ein Winkel in Schwingungsgleichungen, keine Kraftkomponente. Bei der Zerlegung einer Kraft ist $\\cos$ für $F_x$ und $\\sin$ für $F_y$ zuständig.' }, calcQuestion: 'F=100 N, α=60° zur Horizontalen. Berechne Fx.', calcAnswer: 50, calcTolerance: 0.01, calcUnit: 'N', calcExplanation: 'Fx=Fcos60°=100·0,5=50 N.', transferQuestion: 'Schwingung x(t)=4sin(3t+0,2). Welche Amplitude hat sie?', transferAnswer: 4, transferTolerance: 0, transferUnit: '', transferExplanation: 'Die Amplitude ist der Vorfaktor vor dem Sinus: A=4.' },
  'trig-3-4': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung inverse Funktionen:** arcsin, arccos und arctan liefern Hauptwerte. Für vollständige Lösungsmengen musst du zusätzlich Quadranten und Periodizität prüfen.`, conceptQuestion: 'Warum liefert arcsin(1/2) nicht automatisch alle Lösungen von sin(x)=1/2?', conceptOptions: ['Weil arcsin nur den Hauptwert liefert', 'Weil sin keine Umkehrung hat', 'Weil 1/2 außerhalb des Definitionsbereichs liegt', 'Weil arcsin immer 90° liefert'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Sinus hat auf dem eingeschränkten Intervall $[-90°,90°]$ sehr wohl eine Umkehrung — genau das ist $\\arcsin$. Problem ist nur die Einschränkung auf den Hauptwert.', 2: '$1/2$ liegt im Wertebereich $[-1,1]$ des Sinus, also auch im Definitionsbereich $[-1,1]$ von $\\arcsin$. Die Eingabe ist völlig korrekt.', 3: '$\\arcsin(1/2)=30°$, nicht $90°$. $\\arcsin$ liefert $90°$ nur für den Eingabewert $1$. Der eigentliche Punkt ist: es wird nur der Hauptwert geliefert.' }, calcQuestion: 'Berechne arctan(1) in Grad.', calcAnswer: 45, calcTolerance: 0, calcUnit: '°', calcExplanation: 'tan45°=1, also arctan(1)=45°.', transferQuestion: 'Berechne arccos(-1) in Grad.', transferAnswer: 180, transferTolerance: 0, transferUnit: '°', transferExplanation: 'cos180°=-1 und arccos hat Wertebereich [0°,180°].' },
})
Object.assign(profiles, {
  'trig-4-1': { ...profiles['trig-3-2'], exam: true, explanation: String.raw`**Prüfungsvertiefung Identitäten:** Suche zuerst bekannte Muster wie $\sin^2+\cos^2=1$, $2\sin\alpha\cos\alpha=\sin2\alpha$ und Additionstheoreme. Danach erst lösen.`, conceptQuestion: 'Welches Muster steckt in 2sin(α)cos(α)=1?', conceptOptions: ['sin(2α)=1', 'cos(2α)=1', 'tan(2α)=1', 'sin²α+cos²α=1'], conceptCorrect: 0, conceptWrongAnswers: { 1: '$\\cos(2\\alpha)=\\cos^2\\alpha-\\sin^2\\alpha$, also Differenz der Quadrate, nicht $2\\sin\\alpha\\cos\\alpha$. Das genannte Muster ist die Sinus-Doppelwinkelformel $\\sin(2\\alpha)$.', 2: '$\\tan(2\\alpha)$ hat die Form $2\\tan\\alpha/(1-\\tan^2\\alpha)$ — ein Bruch, nicht das Produkt $2\\sin\\alpha\\cos\\alpha$. Das gegebene Muster passt nur zu $\\sin(2\\alpha)$.', 3: '$\\sin^2\\alpha+\\cos^2\\alpha=1$ gilt für jedes $\\alpha$ und ergibt keine lösbare Gleichung. Der Ausdruck $2\\sin\\alpha\\cos\\alpha$ ist hingegen gerade $\\sin(2\\alpha)$.' }, calcQuestion: 'Löse sin(2α)=1 für α im Intervall [0°,180°]. Gib die kleinere Lösung an.', calcAnswer: 45, calcTolerance: 0, calcUnit: '°', calcExplanation: 'sin(2α)=1 -> 2α=90° -> α=45°. Im Intervall folgt zusätzlich α=225° außerhalb von [0°,180°] nicht.', transferQuestion: 'Berechne (sin30°+cos30°)²-1 näherungsweise.', transferAnswer: 0.866, transferTolerance: 0.01, transferUnit: '', transferExplanation: '(sin+cos)²-1=2sin30°cos30°=2·0,5·0,866=0,866.' },
  'trig-4-2': { ...profiles['trig-3-3'], exam: true, explanation: String.raw`**Prüfungsvertiefung Anwendungen:** Zeichne ein kleines rechtwinkliges Dreieck. Entscheide, ob die gesuchte Größe horizontal, vertikal, Höhe, Schatten oder Schwingungsparameter ist.`, conceptQuestion: 'Welche Gleichung passt für die horizontale Kraftkomponente bei Winkel α zur Horizontalen?', conceptOptions: ['Fx=Fcosα', 'Fx=Fsinα', 'Fx=Ftanα', 'Fx=F/α'], conceptCorrect: 0, conceptWrongAnswers: { 1: '$F_x=F\\sin\\alpha$ wäre die vertikale Komponente (Gegenkathete zu $\\alpha$). Horizontal ist die Ankathete, also $F_x=F\\cos\\alpha$.', 2: '$\\tan\\alpha=\\sin\\alpha/\\cos\\alpha$ ist ein Verhältnis ohne Hypotenuse — es kann keine Komponente einer Kraft sein. Richtig: $F_x=F\\cos\\alpha$.', 3: '$F/\\alpha$ teilt eine Kraft (Einheit $\\mathrm{N}$) durch einen Winkel und hat keine physikalische Bedeutung. Die Zerlegung erfolgt immer mit Winkelfunktionen.' }, calcQuestion: 'F=500 N, cos37°≈0,8. Berechne Fx.', calcAnswer: 400, calcTolerance: 1, calcUnit: 'N', calcExplanation: 'Fx=Fcos37°=500·0,8=400 N.', transferQuestion: 'Für x(t)=3sin(2t): Berechne die Periode T=2π/ω als Faktor vor π.', transferAnswer: 1, transferTolerance: 0.001, transferUnit: 'π', transferExplanation: 'ω=2, also T=2π/2=π. Faktor vor π ist 1.' },
  'trig-4-3': { ...profiles['trig-3-4'], exam: true, explanation: String.raw`**Prüfungsvertiefung Gleichungen:** Bei trigonometrischen Gleichungen zählt die komplette Lösungsmenge. Bestimme erst den Hauptwinkel, dann alle Quadranten und Perioden im Intervall.`, conceptQuestion: 'Wie viele Lösungen hat sin(x)=1/2 in [0,2π]?', conceptOptions: ['2', '1', '0', 'unendlich viele'], conceptCorrect: 0, conceptWrongAnswers: { 1: 'Nur $1$ Lösung würde nur den Hauptwert $\\arcsin(1/2)=\\pi/6$ zählen. Sinus ist im 1. und 2. Quadranten positiv, also gibt es eine zweite Lösung: $\\pi-\\pi/6=5\\pi/6$.', 2: '$0$ Lösungen wäre falsch: $1/2$ liegt im Wertebereich $[-1,1]$ des Sinus, und innerhalb einer Periode $[0,2\\pi]$ gibt es daher immer $2$ Lösungen.', 3: 'Unendlich viele Lösungen hätte $\\sin x=1/2$ erst auf $\\mathbb{R}$ (wegen Periode $2\\pi$). Auf dem beschränkten Intervall $[0,2\\pi]$ sind es genau $2$.' }, calcQuestion: 'sin(x)=1/2. Gib die kleinere Lösung in Grad im Intervall [0°,360°] an.', calcAnswer: 30, calcTolerance: 0, calcUnit: '°', calcExplanation: 'Die Hauptlösung ist 30°. Die zweite Lösung ist 150°.', transferQuestion: 'Gib die zweite Lösung von sin(x)=1/2 in [0°,360°] an.', transferAnswer: 150, transferTolerance: 0, transferUnit: '°', transferExplanation: 'Sinus ist im 1. und 2. Quadranten positiv: 30° und 180°-30°=150°.' },
})

export const trigonometrySupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
