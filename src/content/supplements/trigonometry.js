function mc(question, options, correctIndex, explanation, hints = []) {
  return { type: 'multiple-choice', question, options, correctIndex, explanation, hints }
}

function ni(question, correctAnswer, tolerance, unit, explanation, hints = []) {
  return { type: 'number-input', question, correctAnswer, tolerance, unit, explanation, hints }
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
    ? mc(profile.sortingOverride.question, profile.sortingOverride.options, profile.sortingOverride.correctIndex, profile.sortingOverride.explanation, profile.sortingOverride.hints)
    : sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints)

  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sortingSlot,
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints),
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
    calcQuestion: 'Berechne tan(60°) als Dezimalzahl mit √3≈1,732.',
    calcAnswer: 1.732,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: 'tan60° = √3 ≈ 1,732.',
    calcHints: ['tan = sin/cos.', '(√3/2)/(1/2)=√3.'],
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
    },
    errorQuestion: 'Welcher Grundwert ist falsch?',
    errorOptions: ['sin30°=1/2', 'cos60°=1/2', 'tan45°=1', 'cos90°=1'],
    errorCorrect: 3,
    errorExplanation: 'cos90°=0, weil die x-Koordinate am oberen Punkt des Einheitskreises 0 ist.',
    errorHints: ['cos ist x-Koordinate.', 'Bei 90° liegt der Punkt bei (0,1).'],
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
  'trig-2-1': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Einheitskreis:** Jeder Punkt auf dem Einheitskreis hat die Form $(\cos\alpha,\sin\alpha)$. Der Radius ist 1; deshalb gilt immer $\cos^2\alpha+\sin^2\alpha=1$.`, conceptQuestion: 'Welche Gleichung erfüllt jeder Punkt P=(x,y) auf dem Einheitskreis?', conceptOptions: ['x²+y²=1', 'x+y=1', 'x²-y²=1', 'x/y=1'], conceptCorrect: 0, calcQuestion: 'P=(0,1) liegt auf dem Einheitskreis. Welchem Winkel in Grad entspricht dieser Punkt?', calcAnswer: 90, calcTolerance: 0, calcUnit: '°', calcExplanation: 'P=(0,1) ist der obere Punkt des Einheitskreises, also 90°.', transferQuestion: 'Für α=180°: Welche x-Koordinate hat P=(cosα,sinα)?', transferAnswer: -1, transferTolerance: 0, transferUnit: '', transferExplanation: 'Bei 180° liegt der Punkt links: P=(-1,0), also x=-1.' },
  'trig-2-2': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Koordinaten:** Kosinus ist die horizontale Koordinate, Sinus die vertikale Koordinate. Vorzeichenfehler lassen sich vermeiden, wenn du den Quadranten zuerst einzeichnest.`, conceptQuestion: 'Ein Punkt am Einheitskreis hat P=(-1/2, √3/2). Was ist cos(α)?', conceptOptions: ['-1/2', '√3/2', '1/2', '-√3/2'], conceptCorrect: 0, calcQuestion: 'Für α=270°: Welche y-Koordinate hat P=(cosα,sinα)?', calcAnswer: -1, calcTolerance: 0, calcUnit: '', calcExplanation: 'Bei 270° liegt der Punkt unten: P=(0,-1), also y=-1.', transferQuestion: 'Für P=(√2/2, √2/2): Gib den Winkel in Grad an.', transferAnswer: 45, transferTolerance: 0, transferUnit: '°', transferExplanation: 'Beide Koordinaten sind positiv und gleich: 1. Quadrant mit Referenzwinkel 45°.' },
  'trig-2-3': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Periodizität:** Nach $360^\circ$ bzw. $2\pi$ ist der Punkt wieder gleich. Sinus ist ungerade, Kosinus gerade: $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$.`, conceptQuestion: 'Welche Aussage beschreibt die Periodizität korrekt?', conceptOptions: ['sin(α+360°)=sin(α)', 'sin(α+360°)=-sin(α)', 'cos(α+180°)=cos(α)', 'tan hat Periode 360° und nie 180°'], conceptCorrect: 0, calcQuestion: 'Berechne sin(390°).', calcAnswer: 0.5, calcTolerance: 0.001, calcUnit: '', calcExplanation: '390°=360°+30°, also sin390°=sin30°=0,5.', transferQuestion: 'Berechne cos(-60°).', transferAnswer: 0.5, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'Kosinus ist gerade: cos(-60°)=cos60°=0,5.' },
  'trig-2-4': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung Tangens:** $\tan\alpha=\sin\alpha/\cos\alpha=y/x$. Damit ist Tangens die Steigung der Ursprungsgeraden zum Kreispunkt. Bei $x=0$ ist Tangens nicht definiert.`, conceptQuestion: 'Warum ist tan(90°) nicht definiert?', conceptOptions: ['Weil cos(90°)=0 und tan=sin/cos ist', 'Weil sin(90°)=0', 'Weil 90° kein Winkel ist', 'Weil tan nur im Dreieck existiert'], conceptCorrect: 0, calcQuestion: 'Berechne tan(30°) näherungsweise mit √3≈1,732. Verwende tan30°=1/√3.', calcAnswer: 0.577, calcTolerance: 0.01, calcUnit: '', calcExplanation: 'tan30°=1/√3≈1/1,732≈0,577.', transferQuestion: 'Berechne tan(180°).', transferAnswer: 0, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'tan180°=sin180°/cos180°=0/(-1)=0.' },
  'trig-2-5': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung alle Quadranten:** Reduziere jeden Winkel auf einen Referenzwinkel im ersten Quadranten und setze dann das Vorzeichen aus dem Quadranten.`, conceptQuestion: 'Wie lautet der Referenzwinkel zu 330°?', conceptOptions: ['30°', '60°', '150°', '330°'], conceptCorrect: 0, calcQuestion: 'Berechne cos(300°).', calcAnswer: 0.5, calcTolerance: 0.001, calcUnit: '', calcExplanation: '300°=360°-60°. Im 4. Quadranten ist cos positiv: cos300°=cos60°=0,5.', transferQuestion: 'Berechne sin(240°) mit √3≈1,732.', transferAnswer: -0.866, transferTolerance: 0.01, transferUnit: '', transferExplanation: '240°=180°+60°. Im 3. Quadranten ist sin negativ: -√3/2≈-0,866.' },
  'trig-3-1': { ...profiles['trig-1-3'], explanation: String.raw`**Vertiefung Additionstheoreme:** Summen von Winkeln darfst du nicht komponentenweise auswerten. $\sin(\alpha+\beta)$ ist nicht $\sin\alpha+\sin\beta$, sondern $\sin\alpha\cos\beta+\cos\alpha\sin\beta$.`, conceptQuestion: 'Welche Formel ist korrekt?', conceptOptions: ['sin(α+β)=sinα cosβ + cosα sinβ', 'sin(α+β)=sinα+sinβ', 'cos(α+β)=cosα+cosβ', 'cos(α+β)=sinα sinβ'], conceptCorrect: 0, calcQuestion: 'Berechne sin(75°) näherungsweise mit sin75°=(√6+√2)/4, √6≈2,449, √2≈1,414.', calcAnswer: 0.966, calcTolerance: 0.01, calcUnit: '', calcExplanation: '(2,449+1,414)/4≈3,863/4≈0,966.', transferQuestion: 'Berechne cos(15°) näherungsweise mit cos(45°-30°)=(√6+√2)/4.', transferAnswer: 0.966, transferTolerance: 0.01, transferUnit: '', transferExplanation: 'cos(15°)=cos(45°-30°)=cos45 cos30 + sin45 sin30=(√6+√2)/4≈0,966.' },
  'trig-3-2': { ...profiles['trig-1-3'], explanation: String.raw`**Vertiefung Identitäten:** Die Gleichung $\sin^2\alpha+\cos^2\alpha=1$ kommt direkt aus dem Einheitskreis. Doppelwinkel entstehen aus Additionstheoremen mit $\beta=\alpha$.`, conceptQuestion: 'Welche Formel ist eine gültige Doppelwinkelformel?', conceptOptions: ['sin(2α)=2sinα cosα', 'sin(2α)=2sinα', 'cos(2α)=2cosα', 'cos(2α)=sin²α+cos²α'], conceptCorrect: 0, calcQuestion: 'Wenn sinα=0,6 und cosα=0,8: Berechne sin(2α).', calcAnswer: 0.96, calcTolerance: 0.001, calcUnit: '', calcExplanation: 'sin(2α)=2sinαcosα=2·0,6·0,8=0,96.', transferQuestion: 'Wenn sinα=0,6: Berechne cos²α mit sin²α+cos²α=1.', transferAnswer: 0.64, transferTolerance: 0.001, transferUnit: '', transferExplanation: 'cos²α=1-sin²α=1-0,36=0,64.' },
  'trig-3-3': { ...profiles['trig-1-2'], explanation: String.raw`**Vertiefung technische Anwendungen:** Bei Kräften zur Horizontalen gilt meist $F_x=F\cos\alpha$, $F_y=F\sin\alpha$. Bei Schwingungen liest du Amplitude, Kreisfrequenz und Phase aus $x(t)=A\sin(\omega t+\varphi)$ ab.`, conceptQuestion: 'Eine Kraft ist zur Horizontalen gegeben. Welche Komponente nutzt den Kosinus?', conceptOptions: ['horizontale Komponente Fx', 'vertikale Komponente Fy', 'Betrag F', 'Phase φ'], conceptCorrect: 0, calcQuestion: 'F=100 N, α=60° zur Horizontalen. Berechne Fx.', calcAnswer: 50, calcTolerance: 0.01, calcUnit: 'N', calcExplanation: 'Fx=Fcos60°=100·0,5=50 N.', transferQuestion: 'Schwingung x(t)=4sin(3t+0,2). Welche Amplitude hat sie?', transferAnswer: 4, transferTolerance: 0, transferUnit: '', transferExplanation: 'Die Amplitude ist der Vorfaktor vor dem Sinus: A=4.' },
  'trig-3-4': { ...profiles['trig-1-4'], explanation: String.raw`**Vertiefung inverse Funktionen:** arcsin, arccos und arctan liefern Hauptwerte. Für vollständige Lösungsmengen musst du zusätzlich Quadranten und Periodizität prüfen.`, conceptQuestion: 'Warum liefert arcsin(1/2) nicht automatisch alle Lösungen von sin(x)=1/2?', conceptOptions: ['Weil arcsin nur den Hauptwert liefert', 'Weil sin keine Umkehrung hat', 'Weil 1/2 außerhalb des Definitionsbereichs liegt', 'Weil arcsin immer 90° liefert'], conceptCorrect: 0, calcQuestion: 'Berechne arctan(1) in Grad.', calcAnswer: 45, calcTolerance: 0, calcUnit: '°', calcExplanation: 'tan45°=1, also arctan(1)=45°.', transferQuestion: 'Berechne arccos(-1) in Grad.', transferAnswer: 180, transferTolerance: 0, transferUnit: '°', transferExplanation: 'cos180°=-1 und arccos hat Wertebereich [0°,180°].' },
})
Object.assign(profiles, {
  'trig-4-1': { ...profiles['trig-3-2'], exam: true, explanation: String.raw`**Prüfungsvertiefung Identitäten:** Suche zuerst bekannte Muster wie $\sin^2+\cos^2=1$, $2\sin\alpha\cos\alpha=\sin2\alpha$ und Additionstheoreme. Danach erst lösen.`, conceptQuestion: 'Welches Muster steckt in 2sin(α)cos(α)=1?', conceptOptions: ['sin(2α)=1', 'cos(2α)=1', 'tan(2α)=1', 'sin²α+cos²α=1'], conceptCorrect: 0, calcQuestion: 'Löse sin(2α)=1 für α im Intervall [0°,180°]. Gib die kleinere Lösung an.', calcAnswer: 45, calcTolerance: 0, calcUnit: '°', calcExplanation: 'sin(2α)=1 -> 2α=90° -> α=45°. Im Intervall folgt zusätzlich α=225° außerhalb von [0°,180°] nicht.', transferQuestion: 'Berechne (sin30°+cos30°)²-1 näherungsweise.', transferAnswer: 0.866, transferTolerance: 0.01, transferUnit: '', transferExplanation: '(sin+cos)²-1=2sin30°cos30°=2·0,5·0,866=0,866.' },
  'trig-4-2': { ...profiles['trig-3-3'], exam: true, explanation: String.raw`**Prüfungsvertiefung Anwendungen:** Zeichne ein kleines rechtwinkliges Dreieck. Entscheide, ob die gesuchte Größe horizontal, vertikal, Höhe, Schatten oder Schwingungsparameter ist.`, conceptQuestion: 'Welche Gleichung passt für die horizontale Kraftkomponente bei Winkel α zur Horizontalen?', conceptOptions: ['Fx=Fcosα', 'Fx=Fsinα', 'Fx=Ftanα', 'Fx=F/α'], conceptCorrect: 0, calcQuestion: 'F=500 N, cos37°≈0,8. Berechne Fx.', calcAnswer: 400, calcTolerance: 1, calcUnit: 'N', calcExplanation: 'Fx=Fcos37°=500·0,8=400 N.', transferQuestion: 'Für x(t)=3sin(2t): Berechne die Periode T=2π/ω als Faktor vor π.', transferAnswer: 1, transferTolerance: 0.001, transferUnit: 'π', transferExplanation: 'ω=2, also T=2π/2=π. Faktor vor π ist 1.' },
  'trig-4-3': { ...profiles['trig-3-4'], exam: true, explanation: String.raw`**Prüfungsvertiefung Gleichungen:** Bei trigonometrischen Gleichungen zählt die komplette Lösungsmenge. Bestimme erst den Hauptwinkel, dann alle Quadranten und Perioden im Intervall.`, conceptQuestion: 'Wie viele Lösungen hat sin(x)=1/2 in [0,2π]?', conceptOptions: ['2', '1', '0', 'unendlich viele'], conceptCorrect: 0, calcQuestion: 'sin(x)=1/2. Gib die kleinere Lösung in Grad im Intervall [0°,360°] an.', calcAnswer: 30, calcTolerance: 0, calcUnit: '°', calcExplanation: 'Die Hauptlösung ist 30°. Die zweite Lösung ist 150°.', transferQuestion: 'Gib die zweite Lösung von sin(x)=1/2 in [0°,360°] an.', transferAnswer: 150, transferTolerance: 0, transferUnit: '°', transferExplanation: 'Sinus ist im 1. und 2. Quadranten positiv: 30° und 180°-30°=150°.' },
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
