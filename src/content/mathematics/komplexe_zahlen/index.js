import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

// ── Unit 1: Einführung & kartesische Form ────────────────────────────────
const unit1Lessons = [
  makeLesson({
    id: 'komz-1-1',
    title: 'Imaginäre Einheit & Gaußsche Zahlenebene',
    estimatedMinutes: 14,
    learningGoals: [
      'i² = −1 als definierende Eigenschaft verstehen',
      'Komplexe Zahlen als Punkte in der Gaußschen Ebene darstellen',
      'Real- und Imaginärteil ablesen',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Warum braucht es komplexe Zahlen?',
    intuitionContent:
      'Die Gleichung $x^2 = -1$ hat keine reelle Lösung — es gibt keine reelle Zahl, die quadriert $-1$ ergibt. ' +
      'Deshalb führt man die **imaginäre Einheit** $i$ ein mit der definierenden Eigenschaft $i^2 = -1$.\n\n' +
      'Eine **komplexe Zahl** $z$ hat die Form $z = a + b\\,i$ mit $a,b \\in \\mathbb{R}$. ' +
      'Man zeichnet $z$ als Punkt $(a,b)$ in der **Gaußschen Zahlenebene**: ' +
      'die x-Achse heißt reelle Achse, die y-Achse imaginäre Achse. ' +
      'Alltags-Analogie: wie eine Adresse mit Straße (reell) und Hausnummer (imaginär).',
    formulaTitle: 'Kartesische Darstellung',
    formulaContent:
      '$$z = a + b\\,i \\qquad a = \\operatorname{Re}(z),\\; b = \\operatorname{Im}(z)$$\n\n' +
      '- **Realteil** $\\operatorname{Re}(z) = a$, reelle Komponente.\n' +
      '- **Imaginärteil** $\\operatorname{Im}(z) = b$ (ohne das $i$!), reelle Zahl.\n' +
      '- **Konjugierte** $\\bar z = a - b\\,i$ spiegelt $z$ an der reellen Achse.\n' +
      '- $\\mathbb{R} \\subset \\mathbb{C}$: jede reelle Zahl ist komplex mit $\\operatorname{Im}=0$.',
    visualization: { visualizationId: 'complex-plane', title: 'Gaußsche Ebene — ziehe z₁' },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Aussage über die imaginäre Einheit $i$ ist **richtig**?',
        options: ['$i^2 = -1$', '$i^2 = -i$', '$i^3 = 1$', '$i^2 = \\sqrt{-1}$'],
        correctIndex: 0,
        explanation:
          'Die imaginäre Einheit ist **definitorisch** so festgelegt, dass $i^2 = -1$ gilt. ' +
          'Daraus folgen $i^3 = i^2 \\cdot i = -i$, $i^4 = 1$. Verwechsel nicht $i = \\sqrt{-1}$ mit $i^2 = \\sqrt{-1}$!',
        hints: [
          'Wie wird $i$ eingeführt? Als Lösung welcher Gleichung?',
          'Quadrierst du $i$, was kommt heraus?',
          'Die Definition lautet $i^2 = -1$.',
        ],
        wrongAnswerExplanations: {
          1: 'Hier wurden $i^2$ und $i^3$ verwechselt. $i^3 = i \\cdot i^2 = i \\cdot (-1) = -i$ — das ist die Formel mit $-i$. $i^2$ selbst ist aber $-1$ (reelle Zahl, kein $i$).',
          2: 'Vorzeichen vergessen. $i^3 = i^2 \\cdot i = -1 \\cdot i = -i$, nicht $+1$. Der Zyklus ist $i, -1, -i, 1, i, \\ldots$ — $i^4=1$, aber $i^3=-i$.',
          3: 'Konfusion zwischen Definition und Rechenregel: die Schreibweise $i=\\sqrt{-1}$ wird manchmal informell benutzt, aber $i^2$ *ist* $-1$ (reelle Zahl), nicht $\\sqrt{-1}$. Quadrieren eliminiert die Wurzel.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Welchen **Realteil** hat $z = -5 + 7i$?',
        options: ['$-5$', '$5$', '$7$', '$-5 + 7i$'],
        correctIndex: 0,
        explanation:
          'Der Realteil ist der Summand ohne $i$: $\\operatorname{Re}(z) = -5$. Vorzeichen übernehmen! ' +
          'Der Imaginärteil ist $\\operatorname{Im}(z) = 7$.',
        hints: [
          'Form vergleichen: $z = a + b\\,i$.',
          'Welcher der beiden Summanden steht ohne $i$?',
          'Vergiss das Vorzeichen nicht.',
        ],
        wrongAnswerExplanations: {
          1: 'Vorzeichen vergessen. Der Realteil ist $a$ aus $z=a+bi$, *inklusive* Vorzeichen. Hier: $a = -5$, nicht $+5$. Der Betrag von $a$ ist zwar $5$, aber $\\operatorname{Re}(z)$ ist die *signierte* reelle Zahl.',
          2: 'Real- und Imaginärteil verwechselt. $\\operatorname{Re}(z)$ ist der Summand *ohne* $i$ ($-5$), $\\operatorname{Im}(z)$ ist der Koeffizient *vor* $i$ ($+7$). Hier wurde der Imaginärteil statt des Realteils genommen.',
          3: 'Das ist die komplette komplexe Zahl $z$ selbst, nicht der Realteil. $\\operatorname{Re}(z)$ extrahiert nur den reellen Summanden; $z$ dagegen hat sowohl Real- als auch Imaginärteil.',
        },
      },
      {
        type: 'true-false',
        statement: 'Für $z = 4 - 7i$ ist $\\operatorname{Im}(z) = -7i$.',
        correct: false,
        explanation:
          'Falsch! $\\operatorname{Im}(4 - 7i) = -7$ (ohne $i$). Der Imaginärteil ist immer eine **reelle** Zahl — das $i$ gehört nicht dazu. ' +
          'Häufiger Flüchtigkeitsfehler in Prüfungen.',
        hints: [
          'Vergleiche mit $a + b\\,i$: was genau ist $b$?',
          'Der Imaginärteil ist ein Zahlwert ohne $i$.',
          '$\\operatorname{Im}(4 - 7i) = -7$, **nicht** $-7i$.',
        ],
      },
      {
        type: 'number-input',
        question: 'Berechne $i^{4}$.',
        correctValue: 1,
        tolerance: 0,
        unit: '',
        explanation:
          '$i^2 = -1$, also $i^4 = (i^2)^2 = (-1)^2 = 1$. Merkregel: $i$-Potenzen sind zyklisch mit Periode 4: ' +
          '$i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$.',
        hints: [
          'Zerlege in Quadrate: $i^4 = (i^2)^2$.',
          '$i^2 = -1$, also $i^4 = (-1)^2$.',
          '$(-1)^2 = 1$.',
        ],
      },
      {
        type: 'matching',
        question: 'Ordne jede Potenz dem korrekten Wert zu.',
        pairs: [
          { left: '$i^1$', right: '$i$' },
          { left: '$i^2$', right: '$-1$' },
          { left: '$i^3$', right: '$-i$' },
          { left: '$i^4$', right: '$1$' },
        ],
        explanation:
          'Die Potenzen von $i$ wiederholen sich zyklisch alle 4 Schritte: $i, -1, -i, 1, i, -1, \\ldots$ ' +
          'Für beliebiges $n$ bestimmt man $i^n$ über den Rest $n \\bmod 4$.',
        hints: [
          'Aus $i^2 = -1$ folgt $i^3 = i \\cdot i^2 = -i$ und $i^4 = i^2 \\cdot i^2 = 1$.',
          'Nach vier Potenzen wiederholt sich das Muster.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welche komplexe Zahl liegt auf der **imaginären Achse** der Gaußschen Ebene?',
        options: ['$-3i$', '$-3$', '$-3 + i$', '$3 - 3i$'],
        correctIndex: 0,
        explanation:
          'Die imaginäre Achse ist die y-Achse — dort liegen genau die Punkte mit $\\operatorname{Re}(z) = 0$. ' +
          '$-3i = 0 - 3i$ hat Realteil 0. $-3$ liegt auf der reellen Achse, $-3+i$ und $3-3i$ liegen im Inneren der Ebene.',
        hints: [
          'Imaginäre Achse = y-Achse. Welche Koordinate muss 0 sein?',
          '$\\operatorname{Re}(z) = 0$ bedeutet $z = b\\,i$ (rein imaginär).',
        ],
        wrongAnswerExplanations: {
          1: 'Achsen verwechselt: $-3$ hat $\\operatorname{Re}=-3$, $\\operatorname{Im}=0$ — das liegt auf der *reellen* Achse (x-Achse), nicht auf der imaginären. Auf der imaginären Achse muss $\\operatorname{Re}=0$ sein.',
          2: '$-3+i$ hat $\\operatorname{Re}=-3 \\neq 0$ und $\\operatorname{Im}=1 \\neq 0$ — das liegt im zweiten Quadranten (Inneres der Ebene), nicht auf der Achse. Nur Zahlen mit Realteil $0$ liegen auf der imaginären Achse.',
          3: '$3-3i$ hat $\\operatorname{Re}=3$ und $\\operatorname{Im}=-3$, liegt also im vierten Quadranten. Für einen Punkt auf der imaginären Achse muss der Realteil exakt $0$ sein — hier ist er $3$.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Was ist die **Konjugierte** von $z = -2 + 5i$?',
        options: ['$-2 - 5i$', '$2 - 5i$', '$-2 + 5i$', '$2 + 5i$'],
        correctIndex: 0,
        explanation:
          'Die Konjugierte $\\bar z$ spiegelt $z$ an der reellen Achse: $\\operatorname{Im}$ wechselt das Vorzeichen, ' +
          'Realteil bleibt. Also $\\overline{-2 + 5i} = -2 - 5i$.',
        hints: [
          'Konjugieren = Imaginärteil negieren.',
          'Realteil bleibt unverändert.',
          'Nur das Vorzeichen vor $i$ kippen.',
        ],
        wrongAnswerExplanations: {
          1: 'Hier wurden *beide* Vorzeichen gekippt — das wäre $-z$, nicht $\\bar z$. Konjugation spiegelt nur an der reellen Achse: *nur* der Imaginärteil wechselt das Vorzeichen, der Realteil bleibt.',
          2: 'Das ist $z$ selbst, unverändert. Konjugation muss das Vorzeichen vor $i$ kippen: aus $+5i$ wird $-5i$. $\\bar z = z$ gilt nur für reelle Zahlen.',
          3: 'Hier wurde nur der Realteil negiert, aber der Imaginärteil beibehalten — das ist $-\\bar z$ (oder die Konjugation plus Negation). Konjugation betrifft *ausschließlich* den Imaginärteil.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zum Ablesen von $\\operatorname{Re}(z)$ und $\\operatorname{Im}(z)$ in die richtige Reihenfolge.',
        items: [
          'z in die Form $a + b\\,i$ bringen (ggf. Klammern auflösen)',
          'Den Summanden ohne $i$ identifizieren → Realteil $a$',
          'Den Faktor vor $i$ identifizieren → Imaginärteil $b$',
          'Vorzeichen sorgfältig übertragen',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Reihenfolge: erst Standardform herstellen, dann beide Komponenten identifizieren, am Ende Vorzeichen kontrollieren. ' +
          'Ohne Standardform läuft man Gefahr, Klammer-Terme falsch zuzuordnen.',
        hints: [
          'Zuerst die Form vereinfachen.',
          'Vorzeichen sind oft die Fehlerquelle — am Ende nochmal prüfen.',
        ],
      },
    ],
    masteryQuestion: 'Welchen Imaginärteil hat $z = 3 - 2i$?',
    masteryOptions: ['−2', '2', '3', '−2i'],
    correctIndex: 0,
    masteryExplanation:
      'Der Imaginärteil ist die reelle Zahl $b$ im Ausdruck $a + b\\,i$. Bei $z = 3 - 2i$ ist $a = 3$, $b = -2$. ' +
      'Das $i$ gehört **nicht** zum Imaginärteil.',
    masteryHints: [
      'Im(z) ist eine reelle Zahl — das i gehört nicht dazu.',
      'Achte auf das Vorzeichen vor dem i-Term.',
      '$z = 3 - 2i$: Vergleiche mit $a + bi$, also $a=3$, $b=-2$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Vorzeichen vergessen. $z=3-2i$ heißt $b=-2$, also $\\operatorname{Im}(z)=-2$, nicht $+2$. Das Vorzeichen vor dem $i$-Term gehört mit zum Imaginärteil.',
      2: 'Real- und Imaginärteil verwechselt. $\\operatorname{Re}(z)=3$ ist der Summand ohne $i$, $\\operatorname{Im}(z)=-2$ der Koeffizient vor $i$. Hier wurde der Realteil statt des Imaginärteils genommen.',
      3: 'Das $i$ gehört *nicht* zum Imaginärteil. $\\operatorname{Im}(z)$ ist definitorisch die *reelle* Zahl $b$ aus $z=a+bi$. Also $\\operatorname{Im}(3-2i)=-2$ (ohne $i$), nicht $-2i$.',
    },
    masteryVisualization: {
      id: 'complex-plane',
      params: { initialZ1: { a: 3, b: -2 }, range: 4 },
      caption: 'Punkt z in der Gaußschen Ebene: Re(z)=3, Im(z)=−2',
      alt: 'Komplexe Zahl 3 − 2i in der Gaußschen Ebene.',
    },
    nextLessonId: 'komz-1-2',
  }),

  makeLesson({
    id: 'komz-1-2',
    title: 'Rechnen in kartesischer Form (+, −, ·, :)',
    estimatedMinutes: 18,
    learningGoals: [
      'Komplexe Zahlen addieren und subtrahieren',
      'Multiplikation mit i² = −1 anwenden',
      'Division via Erweitern mit dem konjugierten Nenner',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Rechnen wie mit Klammer-Termen',
    intuitionContent:
      'Komplexe Zahlen addiert man **komponentenweise** (wie Vektoren in der Ebene). ' +
      'Bei der Multiplikation multipliziert man aus wie $(a+b)(c+d)$ und nutzt dann $i^2 = -1$. ' +
      'Division durch $c+d\\,i$ wird zur Multiplikation: **Zähler und Nenner mit dem konjugierten Nenner** $c-d\\,i$ erweitern — ' +
      'der Nenner wird dadurch reell.',
    formulaTitle: 'Vier Grundrechenarten',
    formulaContent:
      '**Addition/Subtraktion:**\n$$(a+b\\,i) \\pm (c+d\\,i) = (a \\pm c) + (b \\pm d)\\,i$$\n\n' +
      '**Multiplikation:**\n$$(a+b\\,i)(c+d\\,i) = (ac-bd) + (ad+bc)\\,i$$\n\n' +
      '**Division** (erweitern mit $\\bar w$):\n' +
      '$$\\frac{z}{w} = \\frac{z\\,\\bar w}{w\\,\\bar w} = \\frac{(a+b\\,i)(c-d\\,i)}{c^2+d^2}$$\n\n' +
      '**Kontrolle:** Der Nenner $c^2+d^2 = |w|^2$ ist stets reell und positiv (außer $w=0$).',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Berechne $(2 + 3i) + (4 - i)$.',
        options: ['$6 + 2i$', '$6 + 4i$', '$-2 + 4i$', '$8 - 3i$'],
        correctIndex: 0,
        explanation:
          'Komponentenweise addieren: Realteile $2 + 4 = 6$, Imaginärteile $3 + (-1) = 2$. Ergebnis: $6 + 2i$.',
        hints: [
          'Addition erfolgt **komponentenweise**.',
          'Realteile zusammen: $2 + 4$. Imaginärteile zusammen: $3 + (-1)$.',
          'Achtung auf Vorzeichen bei $-i$.',
        ],
        wrongAnswerExplanations: {
          1: 'Vorzeichenfehler bei $-i$: der Imaginärteil von $4-i$ ist $-1$, nicht $+1$. Korrekt: $3 + (-1) = 2$, nicht $3 + 1 = 4$.',
          2: 'Subtraktion statt Addition beim Realteil: $2-4=-2$ ergäbe den Realteil, gefragt ist aber die Addition $2+4=6$. Bei $+$ addiert man beide Komponenten; das $-$ vor $i$ gehört nur zum Imaginärteil von $z_2$.',
          3: 'Fehler bei beiden Komponenten: $2+4 \\neq 8$ (das wäre $4+4$) und der Imaginärteil $-3$ statt $+2$ entsteht, wenn man $3$ und $-1$ multipliziert statt addiert. Addition heißt komponentenweise Summe.',
        },
      },
      {
        type: 'number-input',
        question: 'Gegeben $z_1 = 5 - 2i$, $z_2 = 3 + 4i$. Welchen **Realteil** hat $z_1 - z_2$?',
        correctValue: 2,
        tolerance: 0,
        unit: '',
        explanation:
          '$z_1 - z_2 = (5-3) + (-2-4)i = 2 - 6i$. Realteil $= 2$.',
        hints: [
          'Subtraktion komponentenweise.',
          'Realteile: $5 - 3$.',
          'Achtung: Minus verteilt sich auf beide Teile.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Berechne $(1 + 2i) \\cdot (3 - i)$.',
        options: ['$5 + 5i$', '$3 - 2i$', '$1 + 6i$', '$3 + 7i$'],
        correctIndex: 0,
        explanation:
          'Ausmultiplizieren: $1\\cdot 3 + 1\\cdot(-i) + 2i\\cdot 3 + 2i\\cdot(-i) = 3 - i + 6i - 2i^2$. ' +
          'Mit $i^2 = -1$: $-2i^2 = +2$, also $3 + 2 + (-1 + 6)i = 5 + 5i$.',
        hints: [
          'Klammer wie $(a+b)(c+d)$ distributiv ausmultiplizieren.',
          'Sammle Terme: reelle Teile separat, $i$-Teile separat.',
          'Wichtig: $i^2 = -1$, also $-2i^2 = +2$.',
        ],
        wrongAnswerExplanations: {
          1: 'Hier wurden die Komponenten nur paarweise multipliziert ($1 \\cdot 3 = 3$, $2i \\cdot (-i) = -2i^2 = 2$?) — komplexe Multiplikation ist aber *kein* komponentenweises Produkt. Man muss *alle vier* Produkte ausmultiplizieren: $(1+2i)(3-i) = 3 - i + 6i + 2 = 5 + 5i$.',
          2: 'Die Gemischtterme $1 \\cdot (-i)$ und $2i \\cdot 3$ wurden vergessen. Volles Ausmultiplizieren: $3 + (-i) + 6i + (-2i^2) = 3 + 5i + 2 = 5 + 5i$, nicht $1 + 6i$.',
          3: '$i^2$ wurde nicht durch $-1$ ersetzt. Beim Ausmultiplizieren kommt $2i \\cdot (-i) = -2i^2 = +2$ (nicht $0$). Der Realteil ist also $3+2=5$, nicht $3$. Der Imaginärteil $-1+6=5$ (nicht $7$).',
        },
      },
      {
        type: 'true-false',
        statement: 'Für jede komplexe Zahl $z$ gilt $z \\cdot \\bar z = |z|^2$, also reell und nicht-negativ.',
        correct: true,
        explanation:
          'Richtig. $z \\cdot \\bar z = (a+bi)(a-bi) = a^2 - (bi)^2 = a^2 + b^2 = |z|^2 \\geq 0$. ' +
          'Genau diese Eigenschaft nutzen wir, um bei der Division den Nenner reell zu machen.',
        hints: [
          'Multipliziere $(a+bi)(a-bi)$ aus.',
          'Binomische Formel: $a^2 - (bi)^2 = a^2 + b^2$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welchen Nenner erhältst du, wenn du $\\dfrac{1}{2+3i}$ mit $\\overline{2+3i}$ erweiterst?',
        options: ['$13$', '$-5$', '$4-9$', '$4+9i$'],
        correctIndex: 0,
        explanation:
          'Konjugierte ist $2 - 3i$. Nenner: $(2+3i)(2-3i) = 2^2 - (3i)^2 = 4 - 9i^2 = 4 + 9 = 13$. ' +
          'Der Nenner wird dadurch **reell**.',
        hints: [
          'Konjugierte: Vorzeichen vor $i$ kippen, also $2 - 3i$.',
          'Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$.',
          '$(2)^2 - (3i)^2 = 4 - 9i^2 = 4 + 9 = 13$.',
        ],
        wrongAnswerExplanations: {
          1: '$i^2=-1$ wurde ignoriert. $(3i)^2 = 9i^2 = -9$, daher ist $2^2 - (3i)^2 = 4 - (-9) = 4+9 = 13$, nicht $4-9=-5$. Das Minuszeichen von $i^2$ verwandelt die Subtraktion in eine Addition.',
          2: '$(3i)^2$ wurde als $9$ berechnet, aber $(3i)^2 = 9i^2 = -9$. Also $4-(-9)=13$, nicht $4-9=-5$. Der Wert $4-9$ ist der Zwischenschritt *ohne* Berücksichtigung von $i^2=-1$.',
          3: 'Ein Nenner, der nach Erweiterung mit der Konjugierten *nicht* reell ist, zeigt einen Fehler an: gerade der Sinn der Erweiterung ist, dass das $i$ verschwindet. $(2+3i)(2-3i)$ ist via dritter binomischer Formel $2^2-(3i)^2=13$ — rein reell.',
        },
      },
      {
        type: 'number-input',
        question: 'Berechne den **Realteil** von $\\dfrac{1+i}{1-i}$.',
        correctValue: 0,
        tolerance: 0,
        unit: '',
        explanation:
          'Erweitern mit $1+i$: $\\frac{(1+i)(1+i)}{(1-i)(1+i)} = \\frac{1 + 2i + i^2}{1 - i^2} = \\frac{2i}{2} = i$. ' +
          'Also $\\operatorname{Re}(z) = 0$, $\\operatorname{Im}(z) = 1$.',
        hints: [
          'Erweitern mit der Konjugierten des Nenners: $1+i$.',
          'Zähler: $(1+i)^2 = 1 + 2i + i^2 = 2i$. Nenner: $1 - i^2 = 2$.',
          'Ergebnis ist $i$, also Realteil $0$.',
        ],
      },
      {
        type: 'matching',
        question: 'Ordne jeder Operation das richtige Ergebnis zu. Alle mit $z_1 = 1+2i$, $z_2 = 3-i$.',
        pairs: [
          { left: '$z_1 + z_2$', right: '$4 + i$' },
          { left: '$z_1 - z_2$', right: '$-2 + 3i$' },
          { left: '$z_1 \\cdot z_2$', right: '$5 + 5i$' },
          { left: '$\\bar{z_1}$', right: '$1 - 2i$' },
        ],
        explanation:
          'Addition/Subtraktion: komponentenweise. Multiplikation: ausmultiplizieren + $i^2 = -1$. ' +
          'Konjugation: Vorzeichen des Imaginärteils kippen.',
        hints: [
          'Addition: Realteile und Imaginärteile getrennt addieren.',
          'Multiplikation: ausmultiplizieren, $i^2$ substituieren.',
          'Konjugation betrifft nur den Imaginärteil.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Schritt ist bei der Division $\\dfrac{z}{w}$ der **wichtigste**?',
        options: [
          'Zähler und Nenner mit $\\bar w$ erweitern',
          'Zähler und Nenner mit $w$ multiplizieren',
          '$z$ durch $|w|$ dividieren',
          '$z$ und $w$ konjugieren',
        ],
        correctIndex: 0,
        explanation:
          'Erweitern mit $\\bar w$ macht den Nenner reell ($w\\bar w = |w|^2$). Danach ist die Division einfach: ' +
          'reelle Zahl teilt Zähler komponentenweise.',
        hints: [
          'Ziel: Nenner soll reell werden.',
          'Welches Produkt ergibt $|w|^2$?',
          '$w \\cdot \\bar w = |w|^2$ — reell und nicht-negativ.',
        ],
        wrongAnswerExplanations: {
          1: 'Mit $w$ erweitert wird der Nenner $w^2$ — immer noch komplex ($w^2$ hat im Allgemeinen einen Imaginärteil). Nur das Produkt $w \\cdot \\bar w = |w|^2$ ist reell. Also muss mit $\\bar w$ erweitert werden, nicht mit $w$.',
          2: '$z/|w|$ liefert nicht $z/w$: $|w|$ ist eine reelle Zahl, aber $w$ im Nenner ist komplex. Nur das *Erweitern mit $\\bar w$* schafft den reellen Nenner $|w|^2$, der dann skalare Division erlaubt.',
          3: 'Beide zu konjugieren ändert den Quotienten: $\\bar z / \\bar w = \\overline{z/w}$, nicht $z/w$. Gefordert ist *Erweitern* (Multiplizieren von Zähler und Nenner mit derselben Zahl $\\bar w$), nicht Umformung beider Zahlen.',
        },
      },
    ],
    masteryQuestion: 'Berechne $(2+i)(1-3i)$.',
    masteryOptions: ['$5 - 5i$', '$2 - 3i$', '$5 + 5i$', '$-1 - 5i$'],
    correctIndex: 0,
    masteryExplanation:
      '$(2+i)(1-3i) = 2 \\cdot 1 + 2\\cdot(-3i) + i\\cdot 1 + i \\cdot (-3i) = 2 - 6i + i - 3i^2 = 2 - 5i + 3 = 5 - 5i$. ' +
      'Entscheidend: $i^2 = -1$, daher $-3i^2 = +3$.',
    masteryHints: [
      'Klammer wie $(a+b)(c+d)$ ausmultiplizieren.',
      'Am Ende alle $i^2$ durch $-1$ ersetzen.',
      '$2\\cdot1 - 6i + i + 3 = 5 - 5i$ — Real- und Imaginärteil zusammenfassen.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Gemischtterme vergessen. Nur $2 \\cdot 1 = 2$ und $i \\cdot (-3i) = -3i^2 = 3$ genommen, aber $2 \\cdot (-3i) = -6i$ und $i \\cdot 1 = i$ übersehen. Vollständig: $2 + 3 + (-6+1)i = 5-5i$, nicht $2-3i$.',
      2: 'Vorzeichen des Imaginärteils falsch. $2 \\cdot (-3i) = -6i$ und $i \\cdot 1 = +i$, Summe $-5i$. Mit $+5i$ hätte man das Vorzeichen von $-3i$ übersehen oder $(-6)+1=-5$ als $+5$ gerechnet.',
      3: '$i^2$ nicht durch $-1$ ersetzt, und ein Vorzeichenfehler. Realteil: $2 + \\underbrace{i \\cdot (-3i)}_{=3} = 5$, nicht $-1$. Wichtig: $-3i^2 = +3$, also kommt $+3$ zum Realteil hinzu.',
    },
    prerequisites: ['komz-1-1'],
    nextLessonId: 'komz-2-1',
  }),
]

const unit1 = makeUnit({
  id: 'komz-unit-1',
  title: 'Kartesische Form',
  order: 1,
  lessons: unit1Lessons,
})

// ── Unit 2: Polarform & Euler ────────────────────────────────────────────
const unit2Lessons = [
  makeLesson({
    id: 'komz-2-1',
    title: 'Betrag, Argument, Polarform',
    estimatedMinutes: 18,
    learningGoals: [
      'Betrag |z| als Abstand zum Ursprung berechnen',
      'Argument arg(z) als Winkel zur reellen Achse bestimmen',
      'Zwischen kartesisch und polar umrechnen',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Länge + Winkel statt x + y',
    intuitionContent:
      'Statt $z$ mit den Koordinaten $(a,b)$ zu beschreiben, kann man **Länge und Winkel** angeben: ' +
      'den **Betrag** $|z|$ (Abstand zum Ursprung) und das **Argument** $\\varphi = \\arg(z)$ (Winkel zur positiven reellen Achse, gemessen gegen den Uhrzeigersinn). ' +
      'Analog zu Polarkoordinaten in der Ebene.',
    formulaTitle: 'Kartesisch ↔ Polar',
    formulaContent:
      '**Von kartesisch nach polar:**\n' +
      '$$|z| = \\sqrt{a^2+b^2}, \\qquad \\varphi = \\operatorname{atan2}(b,a)$$\n\n' +
      '**Von polar nach kartesisch:**\n' +
      '$$a = |z|\\cos\\varphi, \\qquad b = |z|\\sin\\varphi$$\n\n' +
      '**Polarform:**\n' +
      '$$z = |z|\\,(\\cos\\varphi + i\\sin\\varphi)$$\n\n' +
      '**Typische Fehler:** Quadrant falsch (nur atan statt atan2), oder $\\varphi$ nicht im Hauptwert $(-\\pi, \\pi]$.',
    exercises: [
      {
        type: 'number-input',
        question: 'Berechne den Betrag von $z = 6 + 8i$.',
        correctValue: 10,
        tolerance: 0.01,
        unit: '',
        explanation:
          '$|z| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Ein 3-4-5-Tripel skaliert mit 2.',
        hints: [
          'Pythagoras: $|z| = \\sqrt{a^2 + b^2}$.',
          '$6^2 + 8^2 = 36 + 64$.',
          '$\\sqrt{100} = 10$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'In welchem **Quadranten** der Gaußschen Ebene liegt $z = -3 + 2i$?',
        options: ['2. Quadrant', '1. Quadrant', '3. Quadrant', '4. Quadrant'],
        correctIndex: 0,
        explanation:
          'Realteil $-3 < 0$ (links), Imaginärteil $+2 > 0$ (oben) → **2. Quadrant** (links oben). ' +
          'Das Argument liegt dort zwischen $\\pi/2$ und $\\pi$.',
        hints: [
          'Quadranten werden wie in der Ebene gezählt — gegen den Uhrzeigersinn.',
          'Realteil = x-Koordinate, Imaginärteil = y-Koordinate.',
          'Re < 0, Im > 0 → links oben.',
        ],
        wrongAnswerExplanations: {
          1: '1. Quadrant bedeutet $\\operatorname{Re}>0$ und $\\operatorname{Im}>0$ (rechts oben). Hier ist $\\operatorname{Re}=-3<0$, also *links*. Wer nur den Betrag $|{-3}|=3$ betrachtet, übersieht das Vorzeichen.',
          2: '3. Quadrant bedeutet $\\operatorname{Re}<0$ und $\\operatorname{Im}<0$ (links unten). Hier ist $\\operatorname{Im}=+2>0$, also *oben*. Vermutlich wurde das Vorzeichen von $b$ übersehen.',
          3: '4. Quadrant bedeutet $\\operatorname{Re}>0$ und $\\operatorname{Im}<0$ (rechts unten). Hier sind aber beide Vorzeichen vertauscht: $\\operatorname{Re}=-3<0$, $\\operatorname{Im}=+2>0$, also 2. Quadrant.',
        },
      },
      {
        type: 'true-false',
        statement: 'Der Betrag $|z|$ ist immer eine nicht-negative reelle Zahl.',
        correct: true,
        explanation:
          'Richtig. $|z| = \\sqrt{a^2 + b^2}$ — eine Summe von Quadraten ist stets $\\geq 0$, die Wurzel ebenso. ' +
          'Nur $z = 0$ hat Betrag $0$.',
        hints: [
          'Betrag ist als Abstand definiert — kann Abstand negativ sein?',
          '$a^2$ und $b^2$ sind stets $\\geq 0$.',
        ],
      },
      {
        type: 'number-input',
        question: 'Welches Argument $\\varphi$ (in $\\pi$) hat $z = -2$? Gib den Faktor vor $\\pi$ an.',
        correctValue: 1,
        tolerance: 0.001,
        unit: 'π',
        explanation:
          '$-2$ liegt auf der **negativen reellen Achse**: Winkel zur positiven reellen Achse = $\\pi$ (180°). ' +
          'Also $\\varphi = \\pi$, Faktor vor $\\pi$ ist $1$.',
        hints: [
          'Auf welcher Achse liegt $-2$?',
          'Winkel zwischen positiver und negativer reeller Achse?',
          '$\\varphi = \\pi$ entspricht 180°.',
        ],
      },
      {
        type: 'matching',
        question: 'Ordne jede komplexe Zahl ihrem Argument (im Hauptwert) zu.',
        pairs: [
          { left: '$z = 1$', right: '$0$' },
          { left: '$z = i$', right: '$\\pi/2$' },
          { left: '$z = -1$', right: '$\\pi$' },
          { left: '$z = -i$', right: '$-\\pi/2$' },
        ],
        explanation:
          'Die vier Einheitspunkte liegen genau auf den Achsen — ihre Argumente sind Vielfache von $\\pi/2$. ' +
          '$z = -i$ liegt auf der negativen imaginären Achse: Hauptwert $-\\pi/2$ (nicht $3\\pi/2$!).',
        hints: [
          'Hauptwert: $\\varphi \\in (-\\pi, \\pi]$.',
          '$i$ steht auf der positiven imaginären Achse — 90°.',
          'Unterhalb der x-Achse wird $\\varphi$ negativ.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welche kartesische Form hat $z = 2\\,(\\cos\\tfrac{\\pi}{3} + i\\sin\\tfrac{\\pi}{3})$?',
        options: ['$1 + \\sqrt{3}\\,i$', '$\\sqrt{3} + i$', '$2 + 2i$', '$\\sqrt{3}/2 + i/2$'],
        correctIndex: 0,
        explanation:
          '$\\cos(\\pi/3) = 1/2$, $\\sin(\\pi/3) = \\sqrt{3}/2$. Also $z = 2\\cdot(1/2) + 2\\cdot(\\sqrt{3}/2)i = 1 + \\sqrt{3}\\,i$.',
        hints: [
          'Polar → kartesisch: $a = r\\cos\\varphi$, $b = r\\sin\\varphi$.',
          '$\\cos(60°) = 1/2$, $\\sin(60°) = \\sqrt{3}/2$.',
          '$r = 2$: $a = 1$, $b = \\sqrt{3}$.',
        ],
        wrongAnswerExplanations: {
          1: '$\\cos(\\pi/3)$ und $\\sin(\\pi/3)$ wurden vertauscht: $\\cos(\\pi/3)=1/2$ (nicht $\\sqrt{3}/2$), $\\sin(\\pi/3)=\\sqrt{3}/2$ (nicht $1/2$). Merke: der Kosinus von $60°$ ist der kleinere Wert $1/2$.',
          2: 'Werte falsch: $\\cos(\\pi/3) \\neq 1$ und $\\sin(\\pi/3) \\neq 1$. Das wäre $\\cos(0)=1$ und $\\sin(\\pi/2)=1$. Bei $\\pi/3=60°$ sind die Werte $1/2$ und $\\sqrt{3}/2$.',
          3: 'Faktor $r=2$ wurde vergessen. Die Formel lautet $a=r\\cos\\varphi$, $b=r\\sin\\varphi$. Mit $r=2$: $a = 2 \\cdot 1/2 = 1$, $b = 2 \\cdot \\sqrt{3}/2 = \\sqrt{3}$ — nicht die halbierten Werte.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Warum reicht **atan(b/a)** oft nicht, um $\\arg(z)$ zu bestimmen?',
        options: [
          'atan liefert nur Werte in $(-\\pi/2, \\pi/2)$ — es fehlt die Quadranten-Information',
          'atan existiert nicht für negative Argumente',
          'atan liefert immer positive Werte',
          'atan gilt nur für ganzzahlige Argumente',
        ],
        correctIndex: 0,
        explanation:
          'Der Hauptast von atan liegt in $(-\\pi/2, \\pi/2)$ und kann den 2. und 3. Quadranten nicht treffen. ' +
          'Die Funktion **atan2(b,a)** verwendet die Vorzeichen von $a$ und $b$, um den korrekten Quadranten zu wählen.',
        hints: [
          'Welchen Wertebereich hat die arctan-Funktion?',
          'Kann arctan unterscheiden, ob wir im 1. oder 3. Quadranten sind?',
          'atan2 braucht beide Komponenten, nicht nur den Quotienten.',
        ],
        wrongAnswerExplanations: {
          1: 'Falsch — atan ist für alle reellen Argumente (inkl. negative) definiert und liefert Werte in $(-\\pi/2, \\pi/2)$. Das eigentliche Problem ist nicht die Definiertheit, sondern dass $b/a$ (z.B. $2/(-3)$ und $-2/3$) dasselbe Ergebnis liefern — und damit keine Quadranten-Unterscheidung.',
          2: 'Falsch — atan liefert auch negative Werte (im 4. Quadranten, wenn $b/a<0$). Der Wertebereich ist $(-\\pi/2, \\pi/2)$, symmetrisch um $0$. Das Kernproblem bleibt die fehlende Quadranten-Information.',
          3: 'atan ist für alle reellen Zahlen definiert (ganz, rational, irrational). Das ist keine Einschränkung. Problem: $\\operatorname{atan}(b/a)$ verliert Information, weil der Quotient die Vorzeichen von $a$ und $b$ mischt.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zum Umrechnen **kartesisch → polar** in die richtige Reihenfolge.',
        items: [
          'Realteil $a$ und Imaginärteil $b$ ablesen',
          'Betrag berechnen: $r = \\sqrt{a^2 + b^2}$',
          'Quadrant aus Vorzeichen von $a, b$ bestimmen',
          'Argument $\\varphi = \\operatorname{atan2}(b, a)$ im Hauptwert angeben',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Robuste Reihenfolge: erst Komponenten, dann Betrag (einfach), dann Quadrant (Vorzeichen-Check), zuletzt Argument. ' +
          'Der Quadrant-Check VOR der Argument-Berechnung verhindert Vorzeichen- und Achterfehler.',
        hints: [
          'Was ist leichter: Betrag oder Argument?',
          'Den Quadranten klärst du vor der Winkelrechnung — das erspart Korrektur-Arbeit.',
        ],
      },
    ],
    masteryQuestion: 'Welchen Betrag hat $z = 3 + 4i$?',
    masteryOptions: ['5', '7', '$\\sqrt{7}$', '25'],
    correctIndex: 0,
    masteryExplanation: '$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.',
    masteryHints: [
      '|z| = √(a² + b²) — Pythagoras in der Gaußschen Ebene.',
      'Einsetzen: $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16}$.',
      '$\\sqrt{25} = 5$ — ein pythagoreisches Tripel (3-4-5).',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Hier wurden die Komponenten einfach addiert: $3+4=7$. Korrekt wäre aber Pythagoras: $\\sqrt{a^2+b^2}$, also $\\sqrt{9+16}=\\sqrt{25}=5$. Der Betrag ist kein lineares Maß, sondern der euklidische Abstand.',
      2: '$a+b$ unter der Wurzel gerechnet: $\\sqrt{3+4}=\\sqrt{7}$. Die Formel verlangt aber *Quadrate* unter der Wurzel: $\\sqrt{a^2+b^2}=\\sqrt{9+16}=\\sqrt{25}=5$.',
      3: 'Die Wurzel vergessen: $a^2+b^2=9+16=25$ ist nur der Radikand, nicht der Betrag. $|z|=\\sqrt{25}=5$.',
    },
    masteryVisualization: {
      id: 'complex-plane',
      params: { initialZ1: { a: 3, b: 4 }, range: 5 },
      caption: 'Betrag |z| = Abstand zum Ursprung (Pythagoras)',
      alt: 'Komplexe Zahl 3+4i mit Abstand 5 zum Ursprung.',
    },
    prerequisites: ['komz-1-2'],
    nextLessonId: 'komz-2-2',
  }),

  makeLesson({
    id: 'komz-2-2',
    title: 'Euler-Formel & Exponentialdarstellung',
    estimatedMinutes: 18,
    learningGoals: [
      'Die Euler-Formel $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$ kennen',
      'Komplexe Zahlen in der Form $z = |z| \\cdot e^{i\\varphi}$ schreiben',
      'Vorteile der Exponentialform für Multiplikation erkennen',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Die schönste Formel der Mathematik',
    intuitionContent:
      'Setzt man in die Taylor-Reihe von $e^x$ einen rein imaginären Exponenten $i\\varphi$ ein und trennt Real- und Imaginärteil, ' +
      'bekommt man **genau** die Taylor-Reihen von $\\cos$ und $\\sin$. Daraus folgt die **Eulersche Formel**. ' +
      'Sie verbindet die fünf wichtigsten Konstanten der Mathematik: $e^{i\\pi} + 1 = 0$.',
    formulaTitle: 'Euler + Exponentialform',
    formulaContent:
      '$$e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$$\n\n' +
      'Eine komplexe Zahl $z$ mit Betrag $r = |z|$ und Argument $\\varphi$ lässt sich schreiben als\n' +
      '$$z = r\\,e^{i\\varphi}$$\n\n' +
      '**Warum nützlich?** Multiplikation wird zur Addition der Exponenten:\n' +
      '$$z_1 \\cdot z_2 = r_1 r_2 \\, e^{i(\\varphi_1+\\varphi_2)}$$\n\n' +
      '— Beträge multiplizieren, Argumente addieren. Ideal für Rotationen und Potenzen.',
    visualization: {
      visualizationId: 'complex-plane',
      title: 'Multiplikation in der Gaußschen Ebene',
      params: { initialZ1: { a: 1, b: 1 }, initialZ2: { a: 1, b: 0.5 } },
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Wert hat $e^{i\\pi}$?',
        options: ['$-1$', '$1$', '$i$', '$-i$'],
        correctIndex: 0,
        explanation:
          '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$. Aus dieser Gleichheit folgt die berühmte Identität ' +
          '$e^{i\\pi} + 1 = 0$ — sie verbindet $e$, $i$, $\\pi$, $1$ und $0$.',
        hints: [
          'Euler-Formel: $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$.',
          '$\\cos\\pi = -1$, $\\sin\\pi = 0$.',
          'Also $e^{i\\pi} = -1$.',
        ],
        wrongAnswerExplanations: {
          1: 'Das ist $e^{i \\cdot 0}=\\cos 0+i\\sin 0=1$ oder $e^{i \\cdot 2\\pi}$. Bei $\\varphi=\\pi$ (180°) ist $\\cos\\pi=-1$, nicht $+1$. Kontrolliere die Kosinuswerte bei ganzzahligen Vielfachen von $\\pi$: $\\cos 0=1$, $\\cos\\pi=-1$, $\\cos 2\\pi=1$.',
          2: 'Das wäre $e^{i\\pi/2} = \\cos(\\pi/2)+i\\sin(\\pi/2)=0+i=i$. Bei $\\varphi=\\pi$ ist das *doppelte* dieses Winkels, also eine halbe volle Umdrehung weiter: Punkt $-1$, nicht $i$.',
          3: 'Das wäre $e^{-i\\pi/2}=e^{i \\cdot 3\\pi/2}=\\cos(3\\pi/2)+i\\sin(3\\pi/2)=0-i=-i$. Bei $\\varphi=\\pi$ (nicht $3\\pi/2$) landen wir aber auf der negativen reellen Achse: $-1$, nicht $-i$.',
        },
      },
      {
        type: 'true-false',
        statement: 'Für jeden reellen Winkel $\\varphi$ gilt $|e^{i\\varphi}| = 1$.',
        correct: true,
        explanation:
          'Richtig. $|e^{i\\varphi}| = |\\cos\\varphi + i\\sin\\varphi| = \\sqrt{\\cos^2\\varphi + \\sin^2\\varphi} = \\sqrt{1} = 1$. ' +
          'Alle $e^{i\\varphi}$ liegen also auf dem **Einheitskreis** in der Gaußschen Ebene.',
        hints: [
          'Setze die Euler-Formel ein.',
          'Betrag: $\\sqrt{\\cos^2 + \\sin^2}$ — kennst du diese Identität?',
          '$\\sin^2 + \\cos^2 = 1$.',
        ],
      },
      {
        type: 'number-input',
        question: 'Berechne den Betrag von $z = 5\\,e^{i\\pi/4}$.',
        correctValue: 5,
        tolerance: 0,
        unit: '',
        explanation:
          'In $z = r\\,e^{i\\varphi}$ ist $r$ der Betrag. Hier $r = 5$, also $|z| = 5$. ' +
          'Das Argument $\\pi/4$ gibt nur die Richtung an.',
        hints: [
          'Welche Rolle spielen $r$ und $\\varphi$ in $r\\,e^{i\\varphi}$?',
          '$|e^{i\\varphi}| = 1$, also $|z| = r \\cdot 1 = r$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Schreibe $z = 1 + i$ in Exponentialform.',
        options: [
          '$\\sqrt{2}\\,e^{i\\pi/4}$',
          '$2\\,e^{i\\pi/4}$',
          '$\\sqrt{2}\\,e^{i\\pi/2}$',
          '$e^{i\\pi/4}$',
        ],
        correctIndex: 0,
        explanation:
          'Betrag: $|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Argument: $\\arg(1+i) = \\pi/4$ (1. Quadrant, $b=a$ → 45°). ' +
          'Also $z = \\sqrt{2}\\,e^{i\\pi/4}$.',
        hints: [
          'Erst Betrag: $r = \\sqrt{a^2 + b^2}$.',
          'Dann Argument: $\\arg = \\operatorname{atan2}(1, 1)$.',
          '1. Quadrant mit $a = b$ → Winkel $\\pi/4$.',
        ],
        wrongAnswerExplanations: {
          1: 'Betrag falsch: $|1+i|=\\sqrt{1^2+1^2}=\\sqrt{2}$, nicht $2$. $2$ wäre $1+1$ ohne Wurzel — aber der Betrag verlangt *Wurzel aus Summe der Quadrate*.',
          2: 'Argument falsch: $\\arg(1+i)=\\pi/4$ (45°), nicht $\\pi/2$ (90°). Bei $\\pi/2$ läge $z$ auf der positiven imaginären Achse ($z=i$), aber $1+i$ liegt auf der Winkelhalbierenden des 1. Quadranten.',
          3: 'Betrag vergessen. Ein Vorfaktor fehlt: $e^{i\\pi/4}$ hat Betrag $1$, aber $|1+i|=\\sqrt{2} \\neq 1$. Die Exponentialform lautet $r \\cdot e^{i\\varphi}$ mit $r=\\sqrt{2}$.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Berechne $e^{i\\pi/3} \\cdot e^{i\\pi/6}$.',
        options: ['$e^{i\\pi/2} = i$', '$e^{i\\pi/18}$', '$e^{i\\pi/9}$', '$2e^{i\\pi/2}$'],
        correctIndex: 0,
        explanation:
          'Multiplikation in Exponentialform: Argumente **addieren**. $\\pi/3 + \\pi/6 = 2\\pi/6 + \\pi/6 = 3\\pi/6 = \\pi/2$. ' +
          'Beträge beide 1, also Produkt-Betrag 1. Ergebnis: $e^{i\\pi/2} = i$.',
        hints: [
          'Gleiche Basen: Exponenten addieren.',
          'Rechne $\\pi/3 + \\pi/6$ auf gemeinsamen Nenner $6$.',
          '$e^{i\\pi/2} = i$ per Euler.',
        ],
        wrongAnswerExplanations: {
          1: 'Multipliziert statt addiert. Bei gleicher Basis $e$ werden die Exponenten *addiert*, nicht multipliziert: $\\frac{\\pi}{3} \\cdot \\frac{\\pi}{6} = \\frac{\\pi^2}{18}$ wäre nicht einmal von der Einheit her sinnvoll. Korrekt: $\\frac{\\pi}{3}+\\frac{\\pi}{6}=\\frac{\\pi}{2}$.',
          2: 'Rechenfehler bei der Bruchaddition: $\\frac{\\pi}{3}+\\frac{\\pi}{6}=\\frac{2\\pi+\\pi}{6}=\\frac{3\\pi}{6}=\\frac{\\pi}{2}$, nicht $\\frac{\\pi}{9}$. Gemeinsamer Nenner ist $6$, nicht das Produkt der Nenner.',
          3: 'Vorfaktor $2$ ist überflüssig. Beide Faktoren haben Betrag $1$, das Produkt also auch: $1 \\cdot 1 = 1$, kein $2$. Der korrekte Exponent $\\pi/2$ stimmt, aber der Vorfaktor sollte weggelassen werden.',
        },
      },
      {
        type: 'matching',
        question: 'Ordne jeden Wert seinem Euler-Ausdruck zu.',
        pairs: [
          { left: '$1$', right: '$e^{i\\cdot 0}$' },
          { left: '$i$', right: '$e^{i\\pi/2}$' },
          { left: '$-1$', right: '$e^{i\\pi}$' },
          { left: '$-i$', right: '$e^{-i\\pi/2}$' },
        ],
        explanation:
          'Die vier Einheitspunkte lassen sich als Exponenten von $e$ mit Winkeln $0, \\pi/2, \\pi, -\\pi/2$ schreiben. ' +
          'Das ist das Herz der Exponentialform: jede Drehung um 90° entspricht Multiplikation mit $i = e^{i\\pi/2}$.',
        hints: [
          'Euler: $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$.',
          'Welcher Winkel gehört zur Position auf dem Einheitskreis?',
        ],
      },
      {
        type: 'number-input',
        question:
          'Berechne $\\dfrac{e^{i\\pi}}{e^{i\\pi/3}}$. Gib das Ergebnis als Faktor $k$ an, wobei das Ergebnis $e^{ik\\pi}$ lautet.',
        correctValue: 0.666666667,
        tolerance: 0.01,
        unit: '',
        explanation:
          'Division: Exponenten subtrahieren. $\\pi - \\pi/3 = 3\\pi/3 - \\pi/3 = 2\\pi/3$. Als Faktor vor $\\pi$: $2/3 \\approx 0{,}667$.',
        hints: [
          'Bei Division gleicher Basen: Exponenten subtrahieren.',
          '$\\pi - \\pi/3$ auf gemeinsamen Nenner bringen.',
          '$3\\pi/3 - \\pi/3 = 2\\pi/3$.',
        ],
      },
      {
        type: 'multiple-choice',
        question:
          'Warum ist die Exponentialform $z = r\\,e^{i\\varphi}$ für **Multiplikation** besonders praktisch?',
        options: [
          'Weil man nur Beträge multipliziert und Argumente addiert',
          'Weil sie immer reelle Zahlen liefert',
          'Weil sie dieselbe Form wie die kartesische hat',
          'Weil $\\varphi$ immer im Hauptwert liegt',
        ],
        correctIndex: 0,
        explanation:
          'In Exponentialform wird Multiplikation zur **Addition der Exponenten** (und Multiplikation der Vorfaktoren): ' +
          '$r_1 e^{i\\varphi_1} \\cdot r_2 e^{i\\varphi_2} = r_1 r_2 \\, e^{i(\\varphi_1 + \\varphi_2)}$. ' +
          'Kein Ausmultiplizieren mehr — besonders hilfreich für Potenzen und Drehungen.',
        hints: [
          'Welche Rechenregel gilt für $e^a \\cdot e^b$?',
          'Potenzgesetz: gleiche Basis → Exponenten addieren.',
          'Geometrisch: Drehstreckung (drehen + skalieren).',
        ],
        wrongAnswerExplanations: {
          1: 'Falsch: Die Exponentialform liefert im Allgemeinen keine reellen Zahlen — $r \\cdot e^{i\\varphi}$ ist genau dann reell, wenn $\\varphi$ ein Vielfaches von $\\pi$ ist. Der Vorteil liegt in der einfachen Multiplikationsregel, nicht in Realität.',
          2: 'Die Exponentialform hat eine *andere* Struktur als die kartesische ($a+bi$ vs. $r \\cdot e^{i\\varphi}$). Gerade die andere Form ist der Vorteil: Multiplikation wird einfacher, weil Exponenten addiert werden.',
          3: 'Das ist kein Vorteil für die Multiplikation — $\\varphi$ kann bei Multiplikation sogar aus dem Hauptwert herausfallen (z.B. $\\pi/2+\\pi/2=\\pi$, bei weiterer Multiplikation $>\\pi$). Man muss ggf. am Ende zurück in den Hauptwert $(-\\pi,\\pi]$.',
        },
      },
    ],
    masteryQuestion: 'Welchen Wert hat $e^{i\\pi/2}$?',
    masteryOptions: ['$i$', '$1$', '$-1$', '$-i$'],
    correctIndex: 0,
    masteryExplanation:
      '$e^{i\\pi/2} = \\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i\\cdot 1 = i$. Entspricht einer Drehung um 90°.',
    masteryHints: [
      'Euler-Formel anwenden: $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$.',
      'Einsetzen: $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$.',
      '$0 + i \\cdot 1 = i$ — eine Drehung um 90° auf dem Einheitskreis.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Das wäre $e^{i \\cdot 0}=1$ oder $e^{i \\cdot 2\\pi}=1$. Bei $\\varphi=\\pi/2$ (90°) drehen wir um eine Vierteldrehung vom Punkt $1$ aus gegen den Uhrzeigersinn — und landen bei $i$, nicht bei $1$.',
      2: 'Das wäre $e^{i\\pi}=-1$ (180°-Drehung). Bei $\\varphi=\\pi/2$ drehen wir nur die Hälfte davon, also 90°, und landen beim Punkt $i$.',
      3: 'Richtung verwechselt: $-i$ entspricht $e^{-i\\pi/2}$ oder $e^{i \\cdot 3\\pi/2}$ (270°). Bei $+\\pi/2$ drehen wir gegen den Uhrzeigersinn und landen bei $+i$, nicht $-i$.',
    },
    masteryVisualization: {
      id: 'complex-plane',
      params: { initialZ1: { a: 0, b: 1 }, range: 2 },
      caption: 'e^(iφ) entspricht einem Punkt auf dem Einheitskreis beim Winkel φ',
      alt: 'Komplexe Zahl i in der Gaußschen Ebene.',
    },
    prerequisites: ['komz-2-1'],
    nextLessonId: 'komz-3-1',
  }),
]

const unit2 = makeUnit({
  id: 'komz-unit-2',
  title: 'Polarform, Euler & Rechnen',
  order: 2,
  lessons: unit2Lessons,
})

// ── Unit 3: Potenzen, Wurzeln (Moivre) ───────────────────────────────────
const unit3Lessons = [
  makeLesson({
    id: 'komz-3-1',
    title: 'Potenzen — Formel von de Moivre',
    estimatedMinutes: 18,
    learningGoals: [
      'Potenzen komplexer Zahlen mit der Moivreschen Formel berechnen',
      'Argumentvervielfachung verstehen',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Potenzieren = Argument mal n',
    intuitionContent:
      'Multiplikation in Polarform: Beträge multiplizieren, Argumente addieren. ' +
      'Bei $n$-facher Multiplikation mit sich selbst (= Potenz $z^n$) heißt das: ' +
      'Betrag hoch $n$, Argument mal $n$.',
    formulaTitle: 'Moivre-Formel',
    formulaContent:
      '$$z^n = |z|^n\\,e^{i\\,n\\varphi} = |z|^n\\,(\\cos(n\\varphi) + i\\sin(n\\varphi))$$\n\n' +
      '**Geometrisch:** $z^n$ entsteht aus $z$ durch **Streckung** (Faktor $|z|^{n-1}$) und **Drehung** um das $(n-1)$-fache des Arguments.',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Gegeben $z = 2e^{i\\pi/4}$. Was ist $z^2$?',
        options: [
          '$4e^{i\\pi/2}$',
          '$4e^{i\\pi/8}$',
          '$2e^{i\\pi/2}$',
          '$2e^{i\\pi/4}$',
        ],
        correctIndex: 0,
        explanation:
          'Moivre: Betrag hoch 2, Argument mal 2. Also $|z|^2 = 4$, $\\arg = 2 \\cdot \\pi/4 = \\pi/2$. ' +
          'Ergebnis: $4e^{i\\pi/2}$.',
        hints: [
          'Moivre: $z^n = |z|^n \\, e^{i n\\varphi}$.',
          'Betrag: $2^2 = 4$.',
          'Argument: $2 \\cdot \\pi/4 = \\pi/2$.',
        ],
        wrongAnswerExplanations: {
          1: 'Argument dividiert statt multipliziert. Moivre: $z^n=|z|^n e^{in\\varphi}$, also bei $n=2$ Argument *verdoppeln*: $2 \\cdot \\pi/4 = \\pi/2$. Geteilt durch $2$ gäbe $\\pi/8$.',
          2: 'Betrag nicht quadriert. $|z^n|=|z|^n$, also $|z^2|=2^2=4$, nicht $2$. Der Exponent $2$ wirkt sowohl auf Betrag *als auch* auf das Argument.',
          3: 'Das ist $z$ selbst, nicht $z^2$. Beim Quadrieren werden beide Komponenten (Betrag und Argument) verändert: Betrag quadriert, Argument verdoppelt. Ohne Veränderung kann nichts entstehen.',
        },
      },
      {
        type: 'number-input',
        question: 'Berechne $|z^5|$ für $z = 3e^{i\\pi/7}$.',
        correctValue: 243,
        tolerance: 0,
        unit: '',
        explanation:
          '$|z^5| = |z|^5 = 3^5 = 243$. Das Argument ist für den Betrag irrelevant.',
        hints: [
          'Nur der Betrag zählt: $|z^n| = |z|^n$.',
          '$3^5 = 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3$.',
          '$3^5 = 243$.',
        ],
      },
      {
        type: 'true-false',
        statement: 'Die Moivre-Formel gilt für alle reellen Exponenten $n$, auch negative.',
        correct: true,
        explanation:
          'Richtig. $z^{-1} = |z|^{-1} e^{-i\\varphi}$ (Betrag kehren, Argument negieren) — ebenfalls eine Drehstreckung. ' +
          'Auch für rationale $n$ gilt die Formel, liefert dann aber mehrere Werte (→ Wurzeln).',
        hints: [
          'Mit Eulerform ist $z^{-1}$ einfach $e$ hoch negativem Exponent.',
          '$z^{-1} = 1/z$: welche Polarform hat das?',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Was ist $i^{10}$?',
        options: ['$-1$', '$1$', '$i$', '$-i$'],
        correctIndex: 0,
        explanation:
          '$i = e^{i\\pi/2}$, also $i^{10} = e^{i \\cdot 10 \\cdot \\pi/2} = e^{i\\cdot 5\\pi}$. ' +
          'Weil $e^{i \\cdot 2\\pi} = 1$ ist, reduziere: $5\\pi - 2 \\cdot 2\\pi = \\pi$. Also $e^{i\\pi} = -1$. ' +
          'Alternative (Periode 4): $10 \\bmod 4 = 2$, also $i^{10} = i^2 = -1$.',
        hints: [
          '$i$-Potenzen haben Periode 4.',
          '$10 \\bmod 4 = ?$',
          'Zyklus: $i, -1, -i, 1$. Nach Rest 2 landest du bei $-1$.',
        ],
        wrongAnswerExplanations: {
          1: 'Das wäre $i^{4k}$ (z.B. $i^4, i^8, i^{12}$). $10 \\bmod 4 = 2$, nicht $0$ — daher ergibt sich $i^2=-1$, nicht $i^4=1$. Kontrolliere Rest mod 4.',
          2: 'Das wäre $i^{4k+1}$ (z.B. $i^1, i^5, i^9$). $10 \\bmod 4 = 2$, nicht $1$, also $i^{10}=i^2=-1$, nicht $i$.',
          3: 'Das wäre $i^{4k+3}$ (z.B. $i^3, i^7, i^{11}$). $10 \\bmod 4 = 2$, nicht $3$, also $i^{10}=i^2=-1$, nicht $-i$.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert **geometrisch** bei der Abbildung $z \\mapsto z^2$ auf dem Einheitskreis?',
        options: [
          'Das Argument verdoppelt sich — der Punkt wandert doppelt so weit entlang des Kreises',
          'Der Punkt rutscht zum Ursprung',
          'Der Punkt wird an der reellen Achse gespiegelt',
          'Nichts, der Punkt bleibt fixiert',
        ],
        correctIndex: 0,
        explanation:
          'Auf dem Einheitskreis ist $|z| = 1$, also bleibt der Radius $1$. Nur das Argument wird verdoppelt. ' +
          'Beispiel: $e^{i\\pi/4} \\mapsto e^{i\\pi/2} = i$ — Winkel von 45° auf 90°.',
        hints: [
          'Auf dem Einheitskreis: $|z|^n = 1^n = 1$.',
          'Moivre sagt: Argument wird ver-$n$-facht.',
          '$n = 2$: Winkel verdoppeln.',
        ],
        wrongAnswerExplanations: {
          1: 'Das würde nur passieren, wenn $|z|<1$ — für Zahlen *im Inneren* des Einheitskreises schrumpft der Betrag beim Potenzieren. Auf dem Einheitskreis ($|z|=1$) bleibt $|z^2|=1^2=1$, der Punkt verlässt den Kreis nicht.',
          2: 'Spiegelung an der reellen Achse entspricht der *Konjugation* $z \\mapsto \\bar z$ (Vorzeichen von $\\operatorname{Im}$ kippen), nicht dem Quadrieren. $z \\mapsto z^2$ verdoppelt das Argument, was nur im speziellen Fall $\\varphi=\\pi$ auf Spiegelung hinausläuft.',
          3: 'Nur $z=1$ und $z=0$ sind Fixpunkte von $z \\mapsto z^2$. Für alle anderen Punkte auf dem Einheitskreis (z.B. $z=i$) ändert sich das Argument: $i^2=-1$, also wandert der Punkt tatsächlich.',
        },
      },
      {
        type: 'matching',
        question: 'Ordne jeder Potenz von $z = e^{i\\pi/6}$ ihren Wert zu.',
        pairs: [
          { left: '$z^0$', right: '$1$' },
          { left: '$z^3$', right: '$e^{i\\pi/2} = i$' },
          { left: '$z^6$', right: '$e^{i\\pi} = -1$' },
          { left: '$z^{12}$', right: '$e^{i 2\\pi} = 1$' },
        ],
        explanation:
          'Mit $\\varphi = \\pi/6$ (= 30°) ergeben die Potenzen Drehungen um Vielfache von 30°. ' +
          'Nach 12 Schritten ist eine volle Umdrehung erreicht.',
        hints: [
          '$z^n$: Argument wird $n\\cdot \\pi/6$.',
          '$z^6$ → Winkel $\\pi$ → $-1$.',
          '$z^{12}$ → Winkel $2\\pi$ → $1$ (Ausgangspunkt).',
        ],
      },
      {
        type: 'number-input',
        question:
          'Berechne den **Realteil** von $(1+i)^3$.',
        correctValue: -2,
        tolerance: 0,
        unit: '',
        explanation:
          '$1 + i = \\sqrt{2}\\,e^{i\\pi/4}$. Potenz: $(1+i)^3 = (\\sqrt{2})^3 e^{i 3\\pi/4} = 2\\sqrt{2}\\,e^{i 3\\pi/4}$. ' +
          '$\\cos(3\\pi/4) = -\\sqrt{2}/2$. Realteil = $2\\sqrt{2} \\cdot (-\\sqrt{2}/2) = -2$.',
        hints: [
          'Erst Polarform: $|1+i| = \\sqrt{2}$, $\\arg = \\pi/4$.',
          'Moivre: $(1+i)^3 = (\\sqrt{2})^3 \\cdot e^{i\\cdot 3\\pi/4}$.',
          '$\\cos(3\\pi/4) = -\\sqrt{2}/2$, einsetzen ergibt $-2$.',
        ],
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zur Berechnung von $z^n$ (für $z$ in kartesischer Form) in die richtige Reihenfolge.',
        items: [
          'Realteil $a$ und Imaginärteil $b$ ablesen',
          'Polarform bestimmen: $r = |z|$, $\\varphi = \\arg(z)$',
          'Moivre anwenden: $r^n$ und $n\\varphi$ bilden',
          'Zurück in kartesische Form umrechnen (falls gefordert)',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Der Gewinn durch Moivre kommt über den Umweg Polarform: dort ist Potenzieren trivial. ' +
          'Der letzte Schritt (zurück in kartesisch) ist optional — je nach Prüfungs-Angabe.',
        hints: [
          'In kartesischer Form direkt potenzieren ist aufwendig.',
          'In Polarform: Betrag hoch $n$, Argument mal $n$.',
        ],
      },
    ],
    masteryQuestion: 'Welchen Wert hat $(1+i)^4$?',
    masteryOptions: ['$-4$', '$4$', '$4i$', '$-4i$'],
    correctIndex: 0,
    masteryExplanation:
      '$z = 1+i$ hat $|z| = \\sqrt{2}$, $\\varphi = \\pi/4$. Damit $z^4 = (\\sqrt{2})^4 \\cdot e^{i\\pi} = 4\\cdot(-1) = -4$.',
    masteryHints: [
      '$1+i$ in Polarform: $|z| = \\sqrt{2}$, $\\varphi = \\pi/4$.',
      'Moivre: $z^4 = (\\sqrt{2})^4 \\cdot e^{i \\cdot 4 \\cdot \\pi/4} = 4 \\cdot e^{i\\pi}$.',
      '$e^{i\\pi} = -1$, also $z^4 = 4 \\cdot (-1) = -4$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Vorzeichen vergessen. Der Betrag $(\\sqrt{2})^4=4$ stimmt, aber das neue Argument ist $4 \\cdot \\pi/4=\\pi$ — das entspricht $e^{i\\pi}=-1$, nicht $+1$. Ergebnis: $4 \\cdot (-1)=-4$.',
      2: 'Das wäre $z^2=(1+i)^2=2i$ (Argument $\\pi/2$, Betrag $2$). Für $z^4$ wird das Argument *vier*fach, also $4 \\cdot \\pi/4=\\pi$ (negative reelle Achse), nicht $\\pi/2$.',
      3: 'Das wäre $z^6$ oder $z^{-2}$: $6 \\cdot \\pi/4 = 3\\pi/2$, $e^{i \\cdot 3\\pi/2}=-i$. Bei $z^4$ landet man aber bei $4 \\cdot \\pi/4=\\pi$, nicht $3\\pi/2$. Also $-4$, nicht $-4i$.',
    },
    prerequisites: ['komz-2-2'],
    nextLessonId: 'komz-3-2',
  }),

  makeLesson({
    id: 'komz-3-2',
    title: 'Wurzeln — alle n-ten Wurzeln finden',
    estimatedMinutes: 18,
    learningGoals: [
      'Alle $n$ verschiedenen $n$-ten Wurzeln einer komplexen Zahl bestimmen',
      'Einheitswurzeln auf einem Kreis visualisieren',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'n verschiedene Wurzeln — im Kreis',
    intuitionContent:
      'Im Reellen hat $x^n = a$ maximal 2 Lösungen. Im Komplexen hat $z^n = w$ immer **genau $n$** Lösungen ' +
      '(Fundamentalsatz der Algebra). Sie liegen gleichmäßig verteilt auf einem Kreis um den Ursprung mit Radius $|w|^{1/n}$.',
    formulaTitle: 'n-te Wurzeln',
    formulaContent:
      'Die $n$ Lösungen von $z^n = w$ (mit $w = |w|\\,e^{i\\varphi}$) sind:\n' +
      '$$z_k = |w|^{1/n}\\,e^{i(\\varphi + 2\\pi k)/n} \\qquad k = 0, 1, \\dots, n-1$$\n\n' +
      '**Geometrisch:** die $n$ Wurzeln bilden die Ecken eines regelmäßigen $n$-Ecks auf dem Kreis.',
    exercises: [
      {
        type: 'number-input',
        question: 'Wie viele verschiedene vierte Wurzeln hat $16$ in $\\mathbb{C}$?',
        correctValue: 4,
        tolerance: 0,
        unit: '',
        explanation:
          'Im Komplexen hat die Gleichung $z^n = w$ (mit $w \\neq 0$) **immer genau $n$ Lösungen** — ein Eckpfeiler des Fundamentalsatzes der Algebra.',
        hints: [
          'Wie viele Lösungen hat $z^n = w$ in $\\mathbb{C}$ allgemein?',
          'Antwort: $n$ — unabhängig von $w$ (außer $w = 0$).',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welchen **Radius** haben alle vier vierten Wurzeln von $16$?',
        options: ['$2$', '$4$', '$16$', '$\\sqrt{2}$'],
        correctIndex: 0,
        explanation:
          'Radius = $|w|^{1/n} = 16^{1/4} = 2$. Alle Wurzeln liegen auf dem Kreis $|z| = 2$.',
        hints: [
          'Radius der Wurzel-Kreise: $|w|^{1/n}$.',
          '$16^{1/4}$ = vierte Wurzel aus $16$.',
          '$2^4 = 16$, also $16^{1/4} = 2$.',
        ],
        wrongAnswerExplanations: {
          1: 'Das wäre die *Quadratwurzel* $16^{1/2}=4$, nicht die *vierte* Wurzel. Vierte Wurzel bedeutet Exponent $1/4$: $16^{1/4}=2$, weil $2^4=16$.',
          2: 'Das ist $|w|=16$ selbst, nicht die vierte Wurzel daraus. Die $n$-ten Wurzeln liegen auf einem Kreis mit Radius $|w|^{1/n}$, nicht $|w|$.',
          3: '$\\sqrt{2}$ wäre $16^{1/8}$ oder $2^{1/2}$ — zu kleine Exponenten. Richtig: $16^{1/4}=2$, denn $2^4=2 \\cdot 2 \\cdot 2 \\cdot 2=16$.',
        },
      },
      {
        type: 'true-false',
        statement:
          'Die $n$ n-ten Wurzeln einer komplexen Zahl bilden in der Gaußschen Ebene die Ecken eines regelmäßigen $n$-Ecks.',
        correct: true,
        explanation:
          'Richtig. Die Argumente der Wurzeln sind gleichmäßig um $2\\pi/n$ beabstandet, die Beträge gleich. ' +
          'Das ergibt eine **regelmäßige** $n$-Eck-Anordnung auf einem Kreis.',
        hints: [
          'Alle Wurzeln haben denselben Betrag → gleicher Kreis.',
          'Winkelabstand zwischen benachbarten Wurzeln = $2\\pi/n$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welche sind die drei **dritten Einheitswurzeln** (Lösungen von $z^3 = 1$)?',
        options: [
          '$1, \\; e^{i 2\\pi/3}, \\; e^{i 4\\pi/3}$',
          '$1, \\; -1, \\; i$',
          '$e^{i\\pi/3}, \\; e^{i 2\\pi/3}, \\; e^{i\\pi}$',
          '$1, \\; i, \\; -i$',
        ],
        correctIndex: 0,
        explanation:
          '$1 = e^{i \\cdot 0}$, also Wurzeln $z_k = e^{i \\cdot 2\\pi k/3}$ für $k = 0, 1, 2$: ' +
          '$1, \\; e^{i 2\\pi/3}, \\; e^{i 4\\pi/3}$. Gleichseitiges Dreieck auf dem Einheitskreis.',
        hints: [
          'Einheitswurzeln: Radius $1$, Winkel $2\\pi k / n$.',
          '$n = 3$: Winkel $0, 2\\pi/3, 4\\pi/3$.',
          'Also $e^{i \\cdot 0}, e^{i 2\\pi/3}, e^{i 4\\pi/3}$.',
        ],
        wrongAnswerExplanations: {
          1: 'Test: $(-1)^3=-1 \\neq 1$, also ist $-1$ keine dritte Einheitswurzel. Ebenso $i^3=-i \\neq 1$. Die Winkelabstände müssen $2\\pi/3=120°$ sein, nicht beliebig.',
          2: 'Winkelabstände ungleich: $\\pi/3, \\pi/3, \\pi/3$ ergeben keine *gleichmäßige* Verteilung auf dem Einheitskreis. Dritte Einheitswurzeln haben Winkel $0, 2\\pi/3, 4\\pi/3$ — Abstand $2\\pi/3$, nicht $\\pi/3$.',
          3: 'Das sind die vierten Einheitswurzeln (Lösungen von $z^4=1$): vier Punkte mit Abstand $\\pi/2=90°$. Für $z^3=1$ brauchen wir drei Punkte mit Abstand $2\\pi/3=120°$.',
        },
      },
      {
        type: 'number-input',
        question:
          'Die 6. Einheitswurzeln sind gleichmäßig auf dem Einheitskreis verteilt. Wie groß ist der **Winkelabstand** zwischen zwei benachbarten Wurzeln (in Grad)?',
        correctValue: 60,
        tolerance: 0.01,
        unit: '°',
        explanation:
          'Winkelabstand $= 2\\pi/n = 2\\pi/6 = \\pi/3 = 60°$. Die sechs Wurzeln bilden ein regelmäßiges Sechseck.',
        hints: [
          'Winkelabstand = $2\\pi / n$.',
          '$2\\pi / 6 = \\pi/3$.',
          '$\\pi/3$ in Grad: $180°/3 = 60°$.',
        ],
      },
      {
        type: 'matching',
        question: 'Ordne jeder Gleichung die Anzahl ihrer Lösungen in $\\mathbb{C}$ zu.',
        pairs: [
          { left: '$z^2 = 1$', right: '$2$' },
          { left: '$z^3 = 8$', right: '$3$' },
          { left: '$z^5 = -1$', right: '$5$' },
          { left: '$z^{10} = i$', right: '$10$' },
        ],
        explanation:
          'Für jede Gleichung $z^n = w$ mit $w \\neq 0$ gibt es genau $n$ komplexe Lösungen. ' +
          'Anders als in $\\mathbb{R}$, wo es je nach $n$ und Vorzeichen $0$, $1$ oder $2$ Lösungen gibt.',
        hints: [
          'Einzige relevante Größe ist der Exponent $n$.',
          'Reelle Gleichungen haben oft weniger Lösungen — in $\\mathbb{C}$ genau $n$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: 'Welche Aussage über die n-ten Einheitswurzeln ist **falsch**?',
        options: [
          'Eine der Wurzeln ist immer $0$',
          'Alle haben Betrag $1$',
          'Die Summe aller n-ten Einheitswurzeln ist $0$ (für $n \\geq 2$)',
          'Sie bilden die Ecken eines regelmäßigen $n$-Ecks',
        ],
        correctIndex: 0,
        explanation:
          'Falsch: Keine Einheitswurzel ist $0$ (denn $0^n = 0 \\neq 1$). Richtig wäre: **Eine** der Wurzeln ist immer $1$ ($k=0$).',
        hints: [
          'Einheitswurzeln erfüllen $z^n = 1$.',
          'Kann $0$ eine Lösung sein?',
          '$0^n = 0$, aber wir brauchen $1$.',
        ],
        wrongAnswerExplanations: {
          1: 'Diese Aussage ist *richtig* (und damit keine falsche Antwort). Einheitswurzeln erfüllen $z^n=1$, also $|z|^n=1$, d.h. $|z|=1$. Gefragt ist aber die *falsche* Aussage — das ist „Eine Wurzel ist $0$".',
          2: 'Diese Aussage ist *richtig* — die Summe aller $n$-ten Einheitswurzeln ist für $n \\geq 2$ tatsächlich $0$ (Folge der Vieta-Formeln angewendet auf $z^n-1=0$). Gefragt ist die *falsche* Aussage.',
          3: 'Diese Aussage ist *richtig* — die $n$ Einheitswurzeln bilden genau die Ecken eines regelmäßigen $n$-Ecks auf dem Einheitskreis, mit Winkelabstand $2\\pi/n$. Gefragt ist die *falsche* Aussage.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zum Lösen von $z^n = w$ in die richtige Reihenfolge.',
        items: [
          '$w$ in Polarform schreiben: $w = |w|\\,e^{i\\varphi}$',
          'Radius bestimmen: $r = |w|^{1/n}$',
          'Basis-Argument: $\\varphi/n$',
          'Alle $n$ Lösungen bilden: $z_k = r\\,e^{i(\\varphi + 2\\pi k)/n}$ mit $k = 0, \\ldots, n-1$',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Reihenfolge: erst $w$ in Polarform, dann Radius und Basis-Argument, zuletzt alle $n$ Wurzeln aufzählen. ' +
          'Jeder Schritt $k = 0, 1, \\ldots, n-1$ dreht das Argument um $2\\pi/n$ weiter.',
        hints: [
          'Ohne Polarform kommt man nicht an die Wurzelformel.',
          'Der Summand $2\\pi k$ verteilt die Wurzeln gleichmäßig.',
        ],
      },
    ],
    masteryQuestion: 'Wie viele verschiedene kubische Wurzeln hat $8$ in $\\mathbb{C}$?',
    masteryOptions: ['3', '1', '2', 'unendlich viele'],
    correctIndex: 0,
    masteryExplanation:
      'Im Komplexen hat $z^3 = 8$ genau drei Lösungen: $2$, $2e^{2\\pi i/3}$, $2e^{4\\pi i/3}$ — Ecken eines gleichseitigen Dreiecks auf dem Kreis $|z|=2$.',
    masteryHints: [
      'Im Komplexen hat $z^n = w$ immer genau $n$ Lösungen.',
      'Formel: $z_k = |w|^{1/n} e^{i(\\varphi + 2\\pi k)/n}$, $k = 0, 1, \\ldots, n-1$.',
      '$8 = 8 e^{i \\cdot 0}$: drei Wurzeln mit $k=0,1,2$, gleichverteilt auf dem Kreis $|z|=2$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Nur im Reellen hat $z^3=8$ eine Lösung ($z=2$). Im Komplexen liefert der Fundamentalsatz der Algebra *genau* $3$ Lösungen — die reelle $2$ plus zwei komplex-konjugierte Wurzeln $2e^{\\pm 2\\pi i/3}$.',
      2: 'Das wäre bei $z^2=w$. Bei dritten Wurzeln ($n=3$) gibt es *drei* Lösungen, nicht zwei. Die Anzahl der Wurzeln entspricht immer dem Exponenten $n$.',
      3: 'Endlich viele! Eine Polynomgleichung $z^n-w=0$ vom Grad $n$ hat in $\\mathbb{C}$ *höchstens* $n$ Lösungen (Fundamentalsatz). Für $w \\neq 0$ sind es genau $n$, hier also $3$.',
    },
    prerequisites: ['komz-3-1'],
    nextLessonId: 'komz-pruefung-1',
    isExam: false,
  }),
]

const unit3 = makeUnit({
  id: 'komz-unit-3',
  title: 'Potenzen & Wurzeln',
  order: 3,
  lessons: unit3Lessons,
})

// ── Unit 4: Prüfung ──────────────────────────────────────────────────────
const unit4Lessons = [
  makeLesson({
    id: 'komz-pruefung-1',
    title: 'Prüfung: Anwendungen & Gesamtaufgaben',
    estimatedMinutes: 25,
    isExam: true,
    learningGoals: [
      'Komplexe Rechnung auf Prüfungsniveau kombinieren',
      'Form je nach Operation geschickt wählen',
      'Anwendung in Schwingungen und Impedanz verstehen',
    ],
    createdAt: '2026-04-14',
    intuitionTitle: 'Prüfungs-Strategie',
    intuitionContent:
      '**Gegeben/Gesucht:** Was ist reell, was komplex? Welche Form des Ergebnisses ist verlangt — kartesisch oder polar?\n\n' +
      '**Formwahl:**\n' +
      '- $+$ und $-$ → kartesisch\n' +
      '- $\\cdot$ und $\\div$ → Polar/Exponential\n' +
      '- $z^n$ oder $\\sqrt[n]{z}$ → Polar/Exponential (Moivre, Wurzelformel)\n\n' +
      '**Kontrolle:** $|z^n| = |z|^n$. Argument im Hauptwert. Bei Wurzeln: alle $n$ Lösungen angeben.',
    formulaTitle: 'Merkformeln für die Prüfung',
    formulaContent:
      '- $|z| = \\sqrt{a^2 + b^2}$, $\\arg(z) = \\operatorname{atan2}(b,a)$\n' +
      '- $z\\cdot\\bar z = |z|^2$\n' +
      '- $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$\n' +
      '- $(r_1 e^{i\\varphi_1})(r_2 e^{i\\varphi_2}) = r_1 r_2\\,e^{i(\\varphi_1+\\varphi_2)}$\n' +
      '- $n$-te Wurzeln: $z_k = r^{1/n} e^{i(\\varphi + 2\\pi k)/n}$',
    exercises: [
      {
        type: 'number-input',
        question: '[PRÜFUNG] Aufwärmaufgabe: Wie groß ist $|1 - i|$?',
        correctValue: 1.41421356,
        tolerance: 0.01,
        unit: '',
        explanation:
          '$|1 - i| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2} \\approx 1{,}414$.',
        hints: [
          'Betrag: $\\sqrt{a^2 + b^2}$.',
          '$\\sqrt{1 + 1} = \\sqrt{2}$.',
          '$\\sqrt{2} \\approx 1{,}414$.',
        ],
      },
      {
        type: 'number-input',
        question:
          '[PRÜFUNG] Eine RL-Reihenschaltung hat Widerstand $R = 30\\,\\Omega$ und Blindwiderstand $\\omega L = 40\\,\\Omega$. ' +
          'Die Impedanz lautet $Z = R + i\\omega L$. Berechne den Scheinwiderstand $|Z|$ in Ohm.',
        correctValue: 50,
        tolerance: 0.1,
        unit: 'Ω',
        explanation:
          '$|Z| = \\sqrt{R^2 + (\\omega L)^2} = \\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50\\,\\Omega$. ' +
          'Klassisches 3-4-5-Pythagoras-Tripel, skaliert mit 10.',
        hints: [
          'Impedanz in komplexer Form: $Z = R + i\\omega L$.',
          'Scheinwiderstand = Betrag: $|Z| = \\sqrt{R^2 + (\\omega L)^2}$.',
          '$\\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50$.',
        ],
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Gleiche RL-Schaltung ($R = 30$, $\\omega L = 40$). Welcher **Phasenwinkel** $\\varphi = \\arg Z$ liegt vor?',
        options: [
          '$\\arctan(40/30) \\approx 53{,}1°$',
          '$\\arctan(30/40) \\approx 36{,}9°$',
          '$90°$',
          '$0°$',
        ],
        correctIndex: 0,
        explanation:
          'Phasenwinkel: $\\varphi = \\operatorname{atan2}(\\omega L, R) = \\arctan(40/30) \\approx 53{,}1°$. ' +
          'Strom eilt der Spannung bei induktiver Last um diesen Winkel **nach**.',
        hints: [
          'Phasenwinkel $= \\arg Z$, Verhältnis Im/Re.',
          'Zähler = Imaginärteil (40), Nenner = Realteil (30).',
          '$\\arctan(4/3) \\approx 53{,}1°$.',
        ],
        wrongAnswerExplanations: {
          1: 'Zähler und Nenner vertauscht: Phasenwinkel ist $\\arctan(\\operatorname{Im}/\\operatorname{Re})=\\arctan(40/30)$, nicht $\\arctan(30/40)$. Der Imaginärteil steht oben, der Realteil unten.',
          2: '$90°$ entspräche einer reinen Induktivität ($R=0$). Hier ist $R=30 \\neq 0$, also liegt der Phasenwinkel zwischen $0°$ (rein ohmisch) und $90°$ (rein induktiv). Konkret $\\arctan(40/30) \\approx 53{,}1°$.',
          3: '$0°$ entspräche einem rein ohmschen Widerstand ($\\omega L=0$). Hier ist aber $\\omega L=40 \\neq 0$, also gibt es eine Phasenverschiebung. Konkret $\\arctan(40/30) \\approx 53{,}1°$.',
        },
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Die Amplitude einer harmonischen Schwingung wird als $\\hat{u}(t) = \\operatorname{Re}(U_0\\,e^{i\\omega t})$ ' +
          'geschrieben mit $U_0 = 10 \\cdot e^{i\\pi/3}$. Welchen Maximalwert nimmt $\\hat{u}(t)$ an?',
        options: ['$10$', '$10\\cos(\\pi/3) = 5$', '$\\sqrt{10}$', '$10 i$'],
        correctIndex: 0,
        explanation:
          '$\\hat{u}(t) = \\operatorname{Re}(10\\,e^{i(\\omega t + \\pi/3)}) = 10\\cos(\\omega t + \\pi/3)$. ' +
          'Der Maximalwert ist $10$ — der **Betrag** von $U_0$. Die Phase $\\pi/3$ verschiebt nur die zeitliche Lage.',
        hints: [
          'Realteil einer Exponentialfunktion ist ein Kosinus.',
          '$\\max |\\cos(\\cdot)| = 1$.',
          'Amplitude = $|U_0| = 10$, unabhängig von der Phase.',
        ],
        wrongAnswerExplanations: {
          1: '$10\\cos(\\pi/3)=5$ ist der Wert bei $t=0$, *nicht* das Maximum. Das Maximum von $10\\cos(\\omega t+\\pi/3)$ über alle $t$ ist $10$ (wenn $\\omega t + \\pi/3 = 0$ modulo $2\\pi$). Die Phase verschiebt nur, sie reduziert die Amplitude nicht.',
          2: 'Der Betrag wurde nicht quadriert/korrekt berechnet. $|U_0|=|10 \\cdot e^{i\\pi/3}|=10 \\cdot |e^{i\\pi/3}|=10 \\cdot 1=10$, nicht $\\sqrt{10}$. Die Exponentialfunktion hat Betrag $1$.',
          3: 'Das ist ein imaginärer Wert — aber $\\hat u(t)$ ist per Definition als $\\operatorname{Re}(\\cdot)$ *reell*. Die Amplitude einer reellen Schwingung ist eine reelle Zahl, nicht $10i$.',
        },
      },
      {
        type: 'true-false',
        statement:
          '[PRÜFUNG] Bei einer Reihenschaltung $R + i\\omega L - i/(\\omega C)$ kann der Scheinwiderstand $|Z|$ **null** werden, wenn $\\omega L = 1/(\\omega C)$ (Resonanzbedingung).',
        correct: false,
        explanation:
          'Bei Resonanz ($\\omega L = 1/(\\omega C)$) wird der **Imaginärteil** null, aber der Realteil bleibt $R$. ' +
          'Also $|Z| = R$ (Minimum), nicht null. Null wäre nur möglich, wenn $R = 0$ (ideale Serienresonanz).',
        hints: [
          'Schreibe $Z = R + i(\\omega L - 1/(\\omega C))$.',
          'Bei Resonanz verschwindet die Klammer — was bleibt?',
          'Der reelle Teil $R$ bleibt; $|Z| = R$ ist dann das Minimum.',
        ],
      },
      {
        type: 'number-input',
        question:
          '[PRÜFUNG] Eine Schwingung hat die komplexe Amplitude $\\underline{U} = 4 + 3i$. ' +
          'Gib die reale Amplitude (Maximalwert von $\\operatorname{Re}(\\underline U \\, e^{i\\omega t})$) an.',
        correctValue: 5,
        tolerance: 0.01,
        unit: '',
        explanation:
          'Die reale Amplitude ist $|\\underline U| = \\sqrt{4^2 + 3^2} = 5$. Real- und Imaginärteil ergeben zusammen eine Gesamt-Amplitude $5$.',
        hints: [
          'Reale Amplitude = Betrag der komplexen Amplitude.',
          '$\\sqrt{4^2 + 3^2}$.',
          'Wieder ein 3-4-5-Tripel.',
        ],
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Zwei Impedanzen sind parallel geschaltet: $Z_1 = 2 + 2i\\,\\Omega$, $Z_2 = 2 - 2i\\,\\Omega$. ' +
          'Berechne die Gesamt-Impedanz $Z_{ges} = \\frac{Z_1 \\cdot Z_2}{Z_1 + Z_2}$.',
        options: ['$2\\,\\Omega$', '$4\\,\\Omega$', '$\\sqrt{2}\\,\\Omega$', '$0\\,\\Omega$'],
        correctIndex: 0,
        explanation:
          'Zähler: $Z_1 Z_2 = (2+2i)(2-2i) = 4 - (2i)^2 = 4 + 4 = 8$. ' +
          'Nenner: $Z_1 + Z_2 = 4$. Also $Z_{ges} = 8/4 = 2\\,\\Omega$ (rein reell).',
        hints: [
          'Zähler mit dritter binomischer Formel.',
          '$(2+2i)(2-2i) = 2^2 - (2i)^2 = 4 + 4 = 8$.',
          'Nenner: $2+2i + 2-2i = 4$.',
        ],
        wrongAnswerExplanations: {
          1: '$(2i)^2$ wurde als $+4$ gerechnet (Vorzeichen vergessen). Richtig: $(2i)^2=4i^2=-4$, also $(2+2i)(2-2i)=4-(-4)=8$. Dann $Z_{ges}=8/4=2\\,\\Omega$, nicht $4\\,\\Omega$.',
          2: '$\\sqrt{2}\\,\\Omega$ wäre der Wurzelwert einer anderen Rechnung. Die Parallelschaltung von $Z_1$ und $Z_2$ ist direkt $Z_1 Z_2/(Z_1+Z_2)=8/4=2\\,\\Omega$ — keine Wurzel nötig.',
          3: 'Nenner wurde als $0$ gerechnet. $Z_1+Z_2=(2+2i)+(2-2i)=4$ (nicht $0$). Imaginärteile heben sich weg, aber $4+0i=4$, nicht $0$. Teilen durch $0$ wäre hier auch nicht sinnvoll.',
        },
      },
      {
        type: 'sorting',
        question:
          '[PRÜFUNG] Berechne $|Z|$ und $\\arg Z$ für $Z = 1 + i\\sqrt{3}$. Bringe die Schritte in die richtige Reihenfolge.',
        items: [
          'Realteil $a = 1$, Imaginärteil $b = \\sqrt{3}$ identifizieren',
          'Betrag: $|Z| = \\sqrt{1 + 3} = 2$',
          'Quadrant prüfen (beide positiv → 1. Quadrant)',
          'Argument: $\\arg Z = \\arctan(\\sqrt{3}/1) = \\pi/3$',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Robuste Prüfungsreihenfolge: zuerst Komponenten, dann **Betrag** (einfacher), dann **Quadrant** vor Argument. ' +
          'Quadrant-Check erspart Vorzeichenfehler — gerade bei $\\arg(-1 + i)$ oder $\\arg(-1 - i)$ kritisch.',
        hints: [
          'Welche Größe ist leichter — Betrag oder Argument?',
          'Quadrant vor Argument: Vorzeichen-Check.',
          'Erst Komponenten ablesen, dann rechnen.',
        ],
      },
    ],
    masteryQuestion:
      '[PRÜFUNG] Eine Impedanz $Z = 3 + 4i\\,\\Omega$. Wie groß ist der **Betrag** $|Z|$ in Ohm?',
    masteryOptions: ['5', '7', '$\\sqrt{7}$', '25'],
    correctIndex: 0,
    masteryExplanation:
      'Der Betrag einer komplexen Impedanz ist der Scheinwiderstand. $|Z| = \\sqrt{3^2 + 4^2} = 5\\,\\Omega$.',
    masteryHints: [
      'Betrag einer komplexen Zahl: $|Z| = \\sqrt{\\operatorname{Re}^2 + \\operatorname{Im}^2}$.',
      'Bei Impedanzen ist $|Z|$ der Scheinwiderstand in Ohm.',
      '$\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Komponenten addiert statt Pythagoras. $3+4=7$ ist linear, aber der Betrag ist der euklidische Abstand: $\\sqrt{9+16}=\\sqrt{25}=5$.',
      2: 'Wurzel über die Summe ohne Quadrierung: $\\sqrt{3+4}=\\sqrt{7}$. Korrekt ist aber $\\sqrt{a^2+b^2}=\\sqrt{9+16}=\\sqrt{25}=5$ — die Komponenten müssen *zuerst* quadriert werden.',
      3: 'Das ist $a^2+b^2=9+16=25$ ohne Wurzel. $|Z|$ ist die *Wurzel* aus der Summe der Quadrate: $\\sqrt{25}=5$, nicht $25$.',
    },
    prerequisites: ['komz-3-2'],
    nextLessonId: 'komz-pruefung-2',
  }),

  makeLesson({
    id: 'komz-pruefung-2',
    title: 'Prüfung: Polarform & Multiplikation',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      '[PRÜFUNG] Komplexe Zahlen in Polarform umrechnen',
      '[PRÜFUNG] Multiplikation und Division in Exponentialform',
      '[PRÜFUNG] Argument im Hauptwert angeben',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Drehen und Strecken',
    intuitionContent:
      'Multiplikation komplexer Zahlen in Polarform: Beträge multiplizieren, Argumente addieren. ' +
      '$z_1 \\cdot z_2 = r_1 r_2 \\, e^{i(\\varphi_1 + \\varphi_2)}$. ' +
      'Das ist geometrisch eine **Drehstreckung**.\n\n' +
      '**Umrechnung kartesisch → polar:** $r = \\sqrt{a^2+b^2}$, $\\varphi = \\operatorname{atan2}(b,a)$. ' +
      'Hauptwert: $\\varphi \\in (-\\pi, \\pi]$.',
    formulaTitle: 'Polarform-Regeln',
    formulaContent:
      '**Kartesisch → Polar:**\n' +
      '$$r = |z| = \\sqrt{a^2+b^2}, \\quad \\varphi = \\arg(z) \\in (-\\pi, \\pi]$$\n\n' +
      '**Multiplikation:** $|z_1 z_2| = |z_1||z_2|$, $\\arg(z_1 z_2) = \\arg z_1 + \\arg z_2 \\pmod{2\\pi}$\n\n' +
      '**Division:** $|z_1/z_2| = |z_1|/|z_2|$, $\\arg(z_1/z_2) = \\arg z_1 - \\arg z_2$\n\n' +
      '**Euler:** $r e^{i\\varphi} = r(\\cos\\varphi + i\\sin\\varphi)$',
    exercises: [
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] Aufwärmaufgabe: Welche Polarform hat $z = -i$?',
        options: [
          '$1 \\cdot e^{-i\\pi/2}$',
          '$1 \\cdot e^{i\\pi/2}$',
          '$-1 \\cdot e^{i\\pi/2}$',
          '$1 \\cdot e^{i\\pi}$',
        ],
        correctIndex: 0,
        explanation:
          '$-i$ liegt auf der **negativen imaginären Achse**. Betrag $|-i| = 1$, Argument im Hauptwert $= -\\pi/2$. ' +
          'Also $-i = e^{-i\\pi/2}$.',
        hints: [
          'Betrag: $\\sqrt{0^2 + (-1)^2} = 1$.',
          'Hauptwert: $\\varphi \\in (-\\pi, \\pi]$.',
          'Negative imaginäre Achse → Winkel $-\\pi/2$.',
        ],
        wrongAnswerExplanations: {
          1: 'Vorzeichen des Arguments falsch: $-i$ liegt auf der *negativen* imaginären Achse (unterhalb der reellen Achse), also $\\varphi=-\\pi/2$, nicht $+\\pi/2$. $e^{+i\\pi/2}=+i$ wäre oben.',
          2: 'Betrag $-1$ ist unmöglich — ein Betrag ist per Definition nichtnegativ. $|-i|=|{-i}|=\\sqrt{0^2+(-1)^2}=+1$, also Vorfaktor $+1$, nicht $-1$.',
          3: '$e^{i\\pi}=-1$, liegt auf der *negativen reellen* Achse. $-i$ liegt aber auf der *negativen imaginären* Achse mit Winkel $-\\pi/2$, nicht $\\pi$.',
        },
      },
      {
        type: 'number-input',
        question:
          '[PRÜFUNG] Gegeben $z_1 = 4 e^{i\\pi/6}$ und $z_2 = 5 e^{i\\pi/3}$. ' +
          'Wie groß ist $|z_1 \\cdot z_2|$?',
        correctValue: 20,
        tolerance: 0,
        unit: '',
        explanation:
          'Bei Multiplikation: **Beträge multiplizieren**. $|z_1 z_2| = 4 \\cdot 5 = 20$. ' +
          'Das Argument wäre $\\pi/6 + \\pi/3 = \\pi/2$, aber danach wird nicht gefragt.',
        hints: [
          'Polarform: $|z_1 z_2| = |z_1| \\cdot |z_2|$.',
          '$4 \\cdot 5 = 20$.',
          'Das Argument spielt für den Betrag keine Rolle.',
        ],
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Berechne $\\dfrac{12\\,e^{i 5\\pi/6}}{3\\,e^{i\\pi/3}}$.',
        options: [
          '$4\\,e^{i\\pi/2}$',
          '$4\\,e^{i 7\\pi/6}$',
          '$4\\,e^{i 5\\pi/18}$',
          '$9\\,e^{i\\pi/2}$',
        ],
        correctIndex: 0,
        explanation:
          'Division: Beträge dividieren, Argumente subtrahieren. ' +
          '$|z_1/z_2| = 12/3 = 4$. Argument: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$. ' +
          'Also $4\\,e^{i\\pi/2} = 4i$.',
        hints: [
          'Bei gleicher Basis: Exponenten subtrahieren.',
          '$5\\pi/6 - \\pi/3$ auf gemeinsamen Nenner (6).',
          '$5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.',
        ],
        wrongAnswerExplanations: {
          1: 'Addition statt Subtraktion der Argumente. Bei Division werden die Argumente *subtrahiert*: $5\\pi/6 - \\pi/3 = \\pi/2$, nicht addiert ($5\\pi/6 + \\pi/3 = 7\\pi/6$).',
          2: 'Argumente dividiert statt subtrahiert: $(5\\pi/6)/( \\pi/3)= 5/2$ oder ähnlich ergäbe nie $5\\pi/18$. Bei Division *mit gleicher Basis e* werden *Exponenten subtrahiert*: $5\\pi/6-\\pi/3=\\pi/2$.',
          3: 'Beträge addiert statt dividiert: $12/3=4$, nicht $12 \\cdot 3/?=9$. Der Betrag ist Quotient $r_1/r_2=4$. Argument stimmt, aber Vorfaktor falsch.',
        },
      },
      {
        type: 'true-false',
        statement:
          '[PRÜFUNG] Das Argument $\\arg(z_1/z_2)$ liegt immer im Hauptwert-Intervall $(-\\pi, \\pi]$, auch wenn $\\arg z_1 - \\arg z_2$ außerhalb liegt.',
        correct: true,
        explanation:
          'Richtig. Nach Subtraktion muss ggf. $\\pm 2\\pi$ addiert werden, um im Hauptwert zu landen. ' +
          'Beispiel: $\\arg z_1 = 3\\pi/4$, $\\arg z_2 = -3\\pi/4$ → Differenz $3\\pi/2 \\notin (-\\pi, \\pi]$, also subtrahiere $2\\pi$: $-\\pi/2$.',
        hints: [
          'Per Konvention: Hauptwert $\\in (-\\pi, \\pi]$.',
          'Summen/Differenzen können übersteigen — dann normalisieren mit $\\pm 2\\pi$.',
        ],
      },
      {
        type: 'number-input',
        question:
          '[PRÜFUNG] Gegeben $z = -1 + \\sqrt{3}\\,i$. Wie groß ist $\\arg(z)$ im Hauptwert, als Faktor vor $\\pi$?',
        correctValue: 0.666666667,
        tolerance: 0.01,
        unit: 'π',
        explanation:
          '$z$ liegt im **2. Quadranten** (Re $<0$, Im $>0$). $|z| = \\sqrt{1 + 3} = 2$. Winkel zur positiven reellen Achse: ' +
          '$\\arctan(-\\sqrt{3}/1) = -\\pi/3$, aber wegen 2. Quadrant addieren: $-\\pi/3 + \\pi = 2\\pi/3$. Faktor: $2/3 \\approx 0{,}667$.',
        hints: [
          'Erst Quadranten prüfen: Re $=-1<0$, Im $=\\sqrt{3}>0$ → 2. Quadrant.',
          'Reiner arctan liefert hier falschen Quadranten.',
          '$\\arg = \\pi - \\arctan(\\sqrt{3}) = \\pi - \\pi/3 = 2\\pi/3$.',
        ],
      },
      {
        type: 'matching',
        question:
          '[PRÜFUNG] Ordne jede Operation auf $z_1 \\cdot z_2$ der richtigen Berechnung zu. ' +
          '$z_1 = r_1 e^{i\\varphi_1}$, $z_2 = r_2 e^{i\\varphi_2}$.',
        pairs: [
          { left: '$|z_1 z_2|$',  right: '$r_1 \\cdot r_2$' },
          { left: '$\\arg(z_1 z_2)$', right: '$\\varphi_1 + \\varphi_2$' },
          { left: '$|z_1/z_2|$',  right: '$r_1 / r_2$' },
          { left: '$\\arg(z_1/z_2)$', right: '$\\varphi_1 - \\varphi_2$' },
        ],
        explanation:
          'Bei Polarform werden Beträge multipliziert/dividiert und Argumente addiert/subtrahiert. ' +
          'Diese Regel ist der Hauptgrund, warum Polarform für Produkte und Quotienten vorgezogen wird.',
        hints: [
          'Potenzgesetz: $e^a \\cdot e^b = e^{a+b}$.',
          'Division: gleiche Basis → Exponenten subtrahieren.',
        ],
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Student rechnet: „$z = -1 - i$ liegt im 3. Quadranten. $\\arg z = \\arctan(1) = \\pi/4$." ' +
          'Wo ist der Fehler?',
        options: [
          'arctan liefert einen Winkel im 1. oder 4. Quadranten — für 3. Quadrant muss $\\pi$ addiert oder subtrahiert werden',
          'arctan existiert nicht für negative Argumente',
          'Der Betrag wurde vergessen',
          'Kein Fehler — die Lösung ist korrekt',
        ],
        correctIndex: 0,
        explanation:
          'Korrekt: für $z = -1 - i$ im 3. Quadrant gilt $\\arg z = \\arctan(1) - \\pi = \\pi/4 - \\pi = -3\\pi/4$ (oder äquivalent $+5\\pi/4$, aber Hauptwert $-3\\pi/4$). ' +
          'Die reine arctan-Funktion unterscheidet 1. und 3. Quadrant nicht — **atan2** oder Quadranten-Korrektur nötig.',
        hints: [
          'arctan-Wertebereich: $(-\\pi/2, \\pi/2)$ — also 1. oder 4. Quadrant.',
          'Im 3. Quadrant muss das Argument im Hauptwert zwischen $-\\pi$ und $-\\pi/2$ liegen.',
          'Korrektur: $\\arctan(b/a) \\pm \\pi$ je nach Quadrant.',
        ],
        wrongAnswerExplanations: {
          1: 'Falsch — arctan ist für alle reellen Argumente (inkl. negative) definiert, liefert aber Werte in $(-\\pi/2,\\pi/2)$. Das Kernproblem ist die eingeschränkte Bildmenge, nicht die Definiertheit.',
          2: 'Betrag und Argument sind unabhängige Größen. $\\arg z$ hängt nur vom Verhältnis der Komponenten und deren Vorzeichen ab, nicht vom Betrag. Der Fehler liegt bei der Quadranten-Behandlung von arctan.',
          3: 'Die Lösung ist falsch: $z=-1-i$ liegt im 3. Quadrant, Winkel muss also $\\in (-\\pi,-\\pi/2)$ liegen. Der Wert $\\pi/4$ läge im 1. Quadrant. Richtig: $\\arg(-1-i) = -3\\pi/4$.',
        },
      },
      {
        type: 'sorting',
        question:
          '[PRÜFUNG] Aufgabe: „Berechne $(-2 + 2i) \\cdot (1 + i)$ und gib das Ergebnis in **kartesischer** Form an." Bringe die Schritte in die effiziente Reihenfolge.',
        items: [
          'Polarform bilden: $-2 + 2i = 2\\sqrt{2}\\,e^{i 3\\pi/4}$; $1 + i = \\sqrt{2}\\,e^{i\\pi/4}$',
          'Multiplikation: $|z_1 z_2| = 2\\sqrt{2} \\cdot \\sqrt{2} = 4$, Argument: $3\\pi/4 + \\pi/4 = \\pi$',
          'Ergebnis polar: $4\\,e^{i\\pi}$',
          'Zurück in kartesisch: $4\\cos\\pi + 4i\\sin\\pi = -4$',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Polar-Umweg lohnt sich: direkte Multiplikation gäbe $(-2 + 2i)(1+i) = -2 - 2i + 2i + 2i^2 = -2 - 2 = -4$. ' +
          'Gleiches Ergebnis, aber über Polarform geometrisch nachvollziehbar: Drehstreckung.',
        hints: [
          'Polar erst, dann multiplizieren ist bei komplexen Winkeln klarer.',
          'Zurück in kartesisch nur, wenn gefordert.',
          '$\\cos\\pi = -1$, $\\sin\\pi = 0$.',
        ],
      },
    ],
    masteryQuestion: '[PRÜFUNG] $z_1 = 2e^{i\\pi/3}$, $z_2 = 3e^{i\\pi/6}$. Berechne $z_1 \\cdot z_2$.',
    masteryOptions: [
      '$6e^{i\\pi/2}$',
      '$6e^{i\\pi/4}$',
      '$5e^{i\\pi/2}$',
      '$6e^{i\\pi/9}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Beträge multiplizieren: $2 \\cdot 3 = 6$. Argumente addieren: $\\pi/3 + \\pi/6 = 2\\pi/6 + \\pi/6 = 3\\pi/6 = \\pi/2$. ' +
      'Ergebnis: $6e^{i\\pi/2}$.',
    masteryHints: [
      'Exponentialform: Beträge multiplizieren, Argumente addieren.',
      'Argumente: $\\pi/3 + \\pi/6$ — auf gleichen Nenner bringen.',
      '$\\pi/3 = 2\\pi/6$, also $2\\pi/6 + \\pi/6 = 3\\pi/6 = \\pi/2$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Argumente falsch addiert. $\\pi/3+\\pi/6$ auf gemeinsamen Nenner 6: $2\\pi/6+\\pi/6=3\\pi/6=\\pi/2$, nicht $\\pi/4$. $\\pi/4$ wäre der Durchschnitt, aber bei Multiplikation werden Argumente *addiert*.',
      2: 'Beträge addiert statt multipliziert: $2+3=5$. Bei Multiplikation komplexer Zahlen werden die Beträge *multipliziert*: $2 \\cdot 3=6$, nicht $5$.',
      3: 'Argumente multipliziert statt addiert: $(\\pi/3) \\cdot (\\pi/6)=\\pi^2/18$. Bei gleicher Basis $e$ werden *Exponenten addiert*: $\\pi/3+\\pi/6=\\pi/2$.',
    },
    masteryVisualization: {
      id: 'complex-plane',
      params: { initialZ1: { a: 1, b: Math.sqrt(3) }, range: 7 },
      caption: 'Multiplikation in der Gaußschen Ebene: Drehstreckung',
      alt: 'Komplexe Ebene mit Darstellung der Multiplikation als Drehstreckung',
    },
    prerequisites: ['komz-pruefung-1'],
    nextLessonId: 'komz-pruefung-3',
  }),

  makeLesson({
    id: 'komz-pruefung-3',
    title: 'Prüfung: Wurzeln & Gleichungen',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      '[PRÜFUNG] Alle n-ten Wurzeln einer komplexen Zahl berechnen',
      '[PRÜFUNG] Komplexe Gleichungen (z.B. $z^n = a$) lösen',
      '[PRÜFUNG] Impedanz-Berechnungen in der Elektrotechnik',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'n-te Wurzeln sind n gleichmäßig verteilte Punkte',
    intuitionContent:
      'Die n-ten Wurzeln einer komplexen Zahl $w = re^{i\\varphi}$ liegen auf einem **Kreis** mit Radius $r^{1/n}$ ' +
      'und sind gleichmäßig im Winkelabstand $2\\pi/n$ verteilt:\n\n' +
      '$$z_k = r^{1/n}\\,e^{i(\\varphi + 2\\pi k)/n}, \\quad k = 0, 1, \\ldots, n-1$$\n\n' +
      '**Merke:** Es gibt immer genau $n$ verschiedene n-te Wurzeln.',
    formulaTitle: 'Wurzelformel & Impedanz',
    formulaContent:
      '**n-te Wurzeln** von $w = re^{i\\varphi}$:\n' +
      '$$z_k = \\sqrt[n]{r}\\,e^{i(\\varphi + 2\\pi k)/n}, \\quad k = 0,1,\\ldots,n-1$$\n\n' +
      '**Impedanz** in Reihenschaltung: $Z = R + i\\omega L - \\frac{i}{\\omega C}$\n\n' +
      '**Betrag** (Scheinwiderstand): $|Z| = \\sqrt{R^2 + (\\omega L - 1/(\\omega C))^2}$',
    exercises: [
      {
        type: 'number-input',
        question: '[PRÜFUNG] Aufwärmaufgabe: Wie viele Lösungen hat $z^5 = 32$ in $\\mathbb{C}$?',
        correctValue: 5,
        tolerance: 0,
        unit: '',
        explanation:
          'Fundamentalsatz der Algebra: $z^n = w$ hat in $\\mathbb{C}$ **genau $n$** Lösungen (für $w \\neq 0$). Hier $n = 5$.',
        hints: [
          'Fundamentalsatz: $z^n = w$ hat genau $n$ Lösungen.',
          'Exponent bei der Gleichung?',
          'Antwort: so viele wie $n$.',
        ],
      },
      {
        type: 'number-input',
        question: '[PRÜFUNG] Welchen **Radius** haben alle fünf Lösungen von $z^5 = 32$?',
        correctValue: 2,
        tolerance: 0,
        unit: '',
        explanation:
          'Radius $= |w|^{1/n} = 32^{1/5} = 2$ (denn $2^5 = 32$). Alle Lösungen liegen auf dem Kreis $|z| = 2$.',
        hints: [
          'Radius: $|w|^{1/n}$.',
          '$32^{1/5}$ = fünfte Wurzel aus 32.',
          '$2^5 = 32$, also $32^{1/5} = 2$.',
        ],
      },
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] Welche komplexe Zahl ist **nicht** Lösung von $z^4 = 1$?',
        options: ['$\\sqrt{2}/2 + i\\sqrt{2}/2$', '$1$', '$-1$', '$i$'],
        correctIndex: 0,
        explanation:
          'Vierte Einheitswurzeln: $1, i, -1, -i$ — Ecken eines Quadrats auf dem Einheitskreis. ' +
          '$\\sqrt{2}/2 + i\\sqrt{2}/2 = e^{i\\pi/4}$ ist eine **achte** Einheitswurzel, keine vierte ($e^{i\\pi/4})^4 = e^{i\\pi} = -1 \\neq 1$).',
        hints: [
          'Vierte Einheitswurzeln liegen bei $\\varphi = 0, \\pi/2, \\pi, 3\\pi/2$.',
          'Das sind $1, i, -1, -i$.',
          'Die Zahl $e^{i\\pi/4}$ liegt **zwischen** zwei vierten Einheitswurzeln.',
        ],
        wrongAnswerExplanations: {
          1: '$1^4=1$ ✓ — also *ist* $1$ eine Lösung. Die Frage verlangt eine Zahl, die *nicht* Lösung ist. $1$ ist die erste Einheitswurzel ($k=0$).',
          2: '$(-1)^4=1$ ✓ — also *ist* $-1$ eine Lösung (vierte Einheitswurzel mit $\\varphi=\\pi$). Die Frage verlangt eine Zahl, die *nicht* Lösung ist.',
          3: '$i^4=1$ ✓ — also *ist* $i$ eine Lösung (vierte Einheitswurzel mit $\\varphi=\\pi/2$). Die Frage verlangt eine Zahl, die *nicht* Lösung ist.',
        },
      },
      {
        type: 'multiple-choice',
        question:
          '[PRÜFUNG] Student soll $z^3 = -8$ lösen. Er schreibt $z = \\sqrt[3]{-8} = -2$. Wie viele Lösungen fehlen ihm?',
        options: ['$2$', '$0$', '$1$', '$3$'],
        correctIndex: 0,
        explanation:
          'In $\\mathbb{C}$ gibt es drei Lösungen. $-8 = 8\\,e^{i\\pi}$, also $z_k = 2\\,e^{i(\\pi + 2\\pi k)/3}$. ' +
          '$z_0 = 2\\,e^{i\\pi/3} = 1 + i\\sqrt{3}$, $z_1 = 2\\,e^{i\\pi} = -2$ (hat der Student), ' +
          '$z_2 = 2\\,e^{i 5\\pi/3} = 1 - i\\sqrt{3}$. Zwei fehlen.',
        hints: [
          'Fundamentalsatz: $z^n = w$ hat $n$ Lösungen.',
          'Er hat nur eine reelle Lösung — die anderen sind komplex.',
          'Drei Wurzeln gleichmäßig auf dem Kreis $|z| = 2$ verteilt.',
        ],
        wrongAnswerExplanations: {
          1: 'Der Student denkt, er hat alle Lösungen — aber er hat nur eine. Der Fundamentalsatz liefert drei: zwei davon sind komplex-konjugiert und fehlen bei naiver reeller Wurzelziehung.',
          2: 'Nur eine Lösung fehlt? Nein — der Student hat eine reelle Lösung ($-2$), aber es fehlen *beide* komplexen Wurzeln $1 \\pm i\\sqrt{3}$. Das sind zwei fehlende Lösungen.',
          3: 'Drei Lösungen fehlen wäre der Fall, wenn der Student *keine* Lösung gefunden hätte. Er hat $-2$ korrekt identifiziert — es fehlen nur die zwei komplexen Partner. Insgesamt drei Lösungen, davon hat er eine.',
        },
      },
      {
        type: 'true-false',
        statement:
          '[PRÜFUNG] Für **ungerades** $n$ gilt: Wenn $z_0$ Lösung von $z^n = w$ ist, dann ist auch $-z_0$ Lösung.',
        correct: false,
        explanation:
          'Falsch. Für ungerades $n$ gilt $(-z_0)^n = -z_0^n$, also $(-z_0)^n = -w \\neq w$. ' +
          'Beispiel: $z^3 = 8$ hat Lösung $z_0 = 2$, aber $-2$ erfüllt $(-2)^3 = -8 \\neq 8$. ' +
          'Nur für **gerades** $n$ gilt $(-z_0)^n = z_0^n$, also gleiches Ergebnis.',
        hints: [
          'Rechne $(-z_0)^n$ aus.',
          'Für ungerades $n$: $(-z)^n = -z^n$.',
          'Gegenbeispiel: $z^3 = 8$, $z_0 = 2$, $(-2)^3 = -8 \\neq 8$.',
        ],
      },
      {
        type: 'matching',
        question:
          '[PRÜFUNG] Impedanz-Rechnung. Ordne jeden Ausdruck seinem physikalischen Namen zu.',
        pairs: [
          { left: '$|Z|$', right: 'Scheinwiderstand' },
          { left: '$\\operatorname{Re}(Z)$', right: 'Wirkwiderstand' },
          { left: '$\\operatorname{Im}(Z)$', right: 'Blindwiderstand' },
          { left: '$\\arg Z$', right: 'Phasenwinkel' },
        ],
        explanation:
          'In der E-Technik entsprechen Teile der komplexen Impedanz physikalischen Begriffen: ' +
          'Betrag = Scheinwiderstand (Wechselstrom-„Gesamtwiderstand"), Realteil = Wirkwiderstand (ohmisch), ' +
          'Imaginärteil = Blindwiderstand (Spulen + Kondensatoren), Argument = Phasenverschiebung zwischen U und I.',
        hints: [
          'Im Gleichstromkreis nur R = reell; im Wechselstromkreis kommen imaginäre Anteile dazu.',
          'Wirk-/Blind-/Schein-Leistung: Real-/Imaginär-/Betrag-Teile.',
        ],
      },
      {
        type: 'number-input',
        question:
          '[PRÜFUNG] Eine RLC-Reihenschaltung hat $R = 50\\,\\Omega$, $\\omega L = 100\\,\\Omega$, $1/(\\omega C) = 140\\,\\Omega$. ' +
          'Berechne den Scheinwiderstand $|Z|$ in Ohm.',
        correctValue: 64.03,
        tolerance: 0.5,
        unit: 'Ω',
        explanation:
          '$Z = R + i(\\omega L - 1/(\\omega C)) = 50 + i(100 - 140) = 50 - 40i$. ' +
          '$|Z| = \\sqrt{50^2 + 40^2} = \\sqrt{2500 + 1600} = \\sqrt{4100} \\approx 64{,}03\\,\\Omega$.',
        hints: [
          'Impedanz einer Reihenschaltung: $Z = R + i(\\omega L - 1/(\\omega C))$.',
          'Imaginärteil: $100 - 140 = -40$. Kapazität dominiert.',
          '$|Z| = \\sqrt{50^2 + 40^2} = \\sqrt{4100}$.',
        ],
      },
      {
        type: 'sorting',
        question:
          '[PRÜFUNG] Strategie zum Lösen von $z^n = w$ in der Prüfung. Bringe die Schritte in die richtige Reihenfolge.',
        items: [
          '$w$ in Polarform: $w = r\\,e^{i\\varphi}$ mit Hauptwert-Argument',
          'Radius der Wurzeln: $\\rho = r^{1/n}$',
          'Argumente aller Lösungen: $\\varphi_k = (\\varphi + 2\\pi k)/n$ für $k = 0, 1, \\ldots, n-1$',
          'Alle $n$ Wurzeln auflisten: $z_k = \\rho\\,e^{i\\varphi_k}$ (in der verlangten Form)',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation:
          'Systematik: Polarform → Radius → alle Argumente → alle Wurzeln. Jeder Schritt baut auf dem vorherigen auf. ' +
          '**Kontrolle:** Summe aller Wurzeln ist 0 für $n \\geq 2$ (bei Einheitswurzeln), Winkelabstand $2\\pi/n$.',
        hints: [
          'Ohne Polarform läuft nichts.',
          '$k = 0, 1, \\ldots, n-1$: keine Wurzel vergessen.',
        ],
      },
    ],
    masteryQuestion: '[PRÜFUNG] Alle Lösungen von $z^2 = i$ ($= e^{i\\pi/2}$)?',
    masteryOptions: [
      '$z_0 = e^{i\\pi/4}$, $z_1 = e^{i5\\pi/4}$',
      '$z_0 = e^{i\\pi/2}$, $z_1 = e^{i\\pi}$',
      '$z_0 = e^{i\\pi/4}$, $z_1 = e^{i3\\pi/4}$',
      '$z_0 = e^{i\\pi/4}$ (nur eine Lösung)',
    ],
    correctIndex: 0,
    masteryExplanation:
      '$i = e^{i\\pi/2}$, also $r=1$, $\\varphi=\\pi/2$. Wurzeln: $z_k = e^{i(\\pi/2 + 2\\pi k)/2}$. ' +
      '$k=0$: $e^{i\\pi/4}$. $k=1$: $e^{i(\\pi/2 + 2\\pi)/2} = e^{i5\\pi/4}$.',
    masteryHints: [
      '$i = e^{i\\pi/2}$: Betrag 1, Argument $\\pi/2$.',
      'Wurzelformel: $z_k = 1^{1/2} \\cdot e^{i(\\pi/2 + 2\\pi k)/2}$, $k=0,1$.',
      '$k=0$: Exponent $\\pi/4$. $k=1$: Exponent $(\\pi/2+2\\pi)/2 = 5\\pi/4$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Das wären $z^1=i$ und $z^2=-1$, nicht die beiden Quadratwurzeln. Bei Wurzeln *halbiert* sich das Argument: $z_0^2=e^{i\\pi/2}=i$ verlangt $z_0=e^{i\\pi/4}$.',
      2: 'Winkelabstand falsch. Zwei Quadratwurzeln müssen Winkelabstand $2\\pi/2=\\pi$ haben (gegenüberliegende Punkte auf dem Kreis). $\\pi/4$ und $3\\pi/4$ haben nur Abstand $\\pi/2$ — das wären vierte Wurzeln.',
      3: 'Wegen des Fundamentalsatzes hat $z^n=w$ *genau* $n$ Lösungen — hier also $2$. Die zweite Wurzel ist $-e^{i\\pi/4}=e^{i(\\pi/4+\\pi)}=e^{i5\\pi/4}$.',
    },
    prerequisites: ['komz-pruefung-2'],
    nextLessonId: null,
  }),
]

const unit4 = makeUnit({
  id: 'komz-unit-4',
  title: 'Prüfung',
  order: 4,
  lessons: unit4Lessons,
})

export const komplexeZahlenTopic = {
  id: 'komplexe-zahlen',
  title: 'Komplexe Zahlen',
  description: 'Imaginäre Einheit, Gaußsche Ebene, Euler-Formel und Moivre — Grundlage für DGL, Elektrotechnik, Schwingungen',
  subject: 'mathematics',
  icon: 'ℂ',
  color: 'purple',
  estimatedHours: 3,
  difficulty: 3,
  level: 'grundlagen',
  units: [unit1, unit2, unit3, unit4],
  prerequisites: ['algebra', 'trigonometry'],
}
