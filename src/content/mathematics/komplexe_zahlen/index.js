import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

// ── Unit 1: Einführung & kartesische Form ────────────────────────────────
const unit1Lessons = [
  makeLesson({
    id: 'komz-1-1',
    title: 'Imaginäre Einheit & Gaußsche Zahlenebene',
    estimatedMinutes: 12,
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
    masteryQuestion: 'Welchen Imaginärteil hat $z = 3 - 2i$?',
    masteryOptions: ['−2', '2', '3', '−2i'],
    correctIndex: 0,
    masteryExplanation:
      'Der Imaginärteil ist die reelle Zahl $b$ im Ausdruck $a + b\\,i$. Bei $z = 3 - 2i$ ist $a = 3$, $b = -2$. ' +
      'Das $i$ gehört **nicht** zum Imaginärteil.',
    masteryHints: [
      'Im(z) ist eine reelle Zahl — das i gehört nicht dazu.',
      'Achte auf das Vorzeichen vor dem i-Term.',
    ],
    nextLessonId: 'komz-1-2',
  }),

  makeLesson({
    id: 'komz-1-2',
    title: 'Rechnen in kartesischer Form (+, −, ·, :)',
    estimatedMinutes: 15,
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
    masteryQuestion: 'Berechne $(2+i)(1-3i)$.',
    masteryOptions: ['$5 - 5i$', '$2 - 3i$', '$5 + 5i$', '$-1 - 5i$'],
    correctIndex: 0,
    masteryExplanation:
      '$(2+i)(1-3i) = 2 \\cdot 1 + 2\\cdot(-3i) + i\\cdot 1 + i \\cdot (-3i) = 2 - 6i + i - 3i^2 = 2 - 5i + 3 = 5 - 5i$. ' +
      'Entscheidend: $i^2 = -1$, daher $-3i^2 = +3$.',
    masteryHints: [
      'Klammer wie $(a+b)(c+d)$ ausmultiplizieren.',
      'Am Ende alle $i^2$ durch $-1$ ersetzen.',
    ],
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
    estimatedMinutes: 15,
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
    masteryQuestion: 'Welchen Betrag hat $z = 3 + 4i$?',
    masteryOptions: ['5', '7', '$\\sqrt{7}$', '25'],
    correctIndex: 0,
    masteryExplanation: '$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.',
    masteryHints: ['|z| = √(a² + b²).', 'Pythagoras in der Gaußschen Ebene.'],
    prerequisites: ['komz-1-2'],
    nextLessonId: 'komz-2-2',
  }),

  makeLesson({
    id: 'komz-2-2',
    title: 'Euler-Formel & Exponentialdarstellung',
    estimatedMinutes: 15,
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
    masteryQuestion: 'Welchen Wert hat $e^{i\\pi/2}$?',
    masteryOptions: ['$i$', '$1$', '$-1$', '$-i$'],
    correctIndex: 0,
    masteryExplanation:
      '$e^{i\\pi/2} = \\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i\\cdot 1 = i$. Entspricht einer Drehung um 90°.',
    masteryHints: [
      'Euler-Formel: e^(iφ) = cos φ + i·sin φ.',
      'cos(π/2) = 0, sin(π/2) = 1.',
    ],
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
    estimatedMinutes: 15,
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
    masteryQuestion: 'Welchen Wert hat $(1+i)^4$?',
    masteryOptions: ['$-4$', '$4$', '$4i$', '$-4i$'],
    correctIndex: 0,
    masteryExplanation:
      '$z = 1+i$ hat $|z| = \\sqrt{2}$, $\\varphi = \\pi/4$. Damit $z^4 = (\\sqrt{2})^4 \\cdot e^{i\\pi} = 4\\cdot(-1) = -4$.',
    masteryHints: [
      '1+i in Polarform umrechnen (|z|, φ).',
      'Moivre: |z|^n, Argument mal n.',
    ],
    prerequisites: ['komz-2-2'],
    nextLessonId: 'komz-3-2',
  }),

  makeLesson({
    id: 'komz-3-2',
    title: 'Wurzeln — alle n-ten Wurzeln finden',
    estimatedMinutes: 15,
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
    masteryQuestion: 'Wie viele verschiedene kubische Wurzeln hat $8$ in $\\mathbb{C}$?',
    masteryOptions: ['3', '1', '2', 'unendlich viele'],
    correctIndex: 0,
    masteryExplanation:
      'Im Komplexen hat $z^3 = 8$ genau drei Lösungen: $2$, $2e^{2\\pi i/3}$, $2e^{4\\pi i/3}$ — Ecken eines gleichseitigen Dreiecks auf dem Kreis $|z|=2$.',
    masteryHints: [
      'Komplex: n-te Wurzeln haben immer n verschiedene Werte.',
      'Liegen gleichverteilt auf einem Kreis.',
    ],
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
    masteryQuestion:
      '[PRÜFUNG] Eine Impedanz $Z = 3 + 4i\\,\\Omega$. Wie groß ist der **Betrag** $|Z|$ in Ohm?',
    masteryOptions: ['5', '7', '$\\sqrt{7}$', '25'],
    correctIndex: 0,
    masteryExplanation:
      'Der Betrag einer komplexen Impedanz ist der Scheinwiderstand. $|Z| = \\sqrt{3^2 + 4^2} = 5\\,\\Omega$.',
    masteryHints: [
      'Betrag einer komplexen Zahl: √(Re² + Im²).',
      'Bei Impedanzen: |Z| ist der Scheinwiderstand.',
    ],
    prerequisites: ['komz-3-2'],
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
  level: 'vertiefung',
  units: [unit1, unit2, unit3, unit4],
  prerequisites: ['algebra', 'trigonometry'],
}
