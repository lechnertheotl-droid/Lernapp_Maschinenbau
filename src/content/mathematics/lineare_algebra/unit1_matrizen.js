// -- Lineare Algebra Unit 1: Matrizen & Determinanten --------------------------

export const exercises_la_u1 = {
  // ── Lesson 1: Was ist eine Matrix? ──────────────────────────────────────────
  'ex-la-1-1-a': {
    id: 'ex-la-1-1-a', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'Eine Matrix mit 3 Zeilen und 2 Spalten ist eine...',
    options: ['2x3-Matrix', '3x2-Matrix', '3x3-Matrix', '6x1-Matrix'],
    correctIndex: 1,
    explanation: 'Die Dimension einer Matrix wird immer als "Zeilen × Spalten" angegeben. 3 Zeilen und 2 Spalten ergibt eine 3×2-Matrix.',
    hints: [
      'Welche Reihenfolge gilt bei der Notation: Zeilen oder Spalten zuerst?',
      'Merke: $m \\times n$ bedeutet "$m$ Zeilen, $n$ Spalten".',
      'Setze $m = 3$ und $n = 2$ ein.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast Zeilen und Spalten vertauscht. $2 \\times 3$ würde 2 Zeilen und 3 Spalten bedeuten. Die Konvention lautet $m \\times n$ mit $m$ = Zeilen zuerst, $n$ = Spalten.',
      '2': 'Eine $3 \\times 3$-Matrix hätte 3 Zeilen und 3 Spalten (quadratisch). Hier sind aber nur 2 Spalten gegeben. Die korrekte Dimension ist Zeilen $\\times$ Spalten $= 3 \\times 2$.',
      '3': 'Du hast die Einträge gezählt ($3 \\cdot 2 = 6$) und daraus $6 \\times 1$ gemacht. Die Dimension beschreibt aber die Struktur (Zeilen $\\times$ Spalten), nicht die Gesamtzahl der Elemente.',
    },
  },
  'ex-la-1-1-b': {
    id: 'ex-la-1-1-b', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'Welche Matrix ist die 3×3-Einheitsmatrix $I$?',
    options: [
      '$\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}$',
      '$\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$',
      '$\\begin{pmatrix}0&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}$',
      '$\\begin{pmatrix}3&0&0\\\\0&3&0\\\\0&0&3\\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: 'Die Einheitsmatrix $I$ hat Einsen auf der Hauptdiagonale und Nullen sonst. Sie ist das "neutrale Element" der Matrizenmultiplikation: $A \\cdot I = A$.',
    hints: [
      'Was ist das "neutrale Element" der Multiplikation für Matrizen?',
      'Es muss gelten: $A \\cdot I = A$ für jede passende Matrix $A$.',
      'Nur die Hauptdiagonale ist mit Einsen besetzt, alle anderen Einträge sind 0.',
    ],
    wrongAnswerExplanations: {
      '0': 'Die $1$-Matrix (alle Einträge $1$) ist nicht die Einheitsmatrix. Probe: $A \\cdot \\text{(1-Matrix)}$ ergibt nicht $A$, sondern vermischt alle Zeilen. Die Einheitsmatrix hat Einsen nur auf der Hauptdiagonale.',
      '2': 'Das ist die Nullmatrix $0$ — sie ist das neutrale Element der Addition ($A + 0 = A$), nicht der Multiplikation. Es gilt $A \\cdot 0 = 0$, also bleibt $A$ nicht erhalten.',
      '3': 'Das ist $3 \\cdot I$, also die Einheitsmatrix skaliert um Faktor 3. Hier gilt $A \\cdot (3I) = 3A \\neq A$. Die Einheitsmatrix muss exakt Einsen (nicht Dreien) auf der Diagonale haben.',
    },
  },
  'ex-la-1-1-c': {
    id: 'ex-la-1-1-c', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'Was ist eine Diagonalmatrix?',
    options: [
      'Eine Matrix, bei der alle Einträge gleich sind',
      'Eine Matrix, bei der nur die Hauptdiagonale Einträge ungleich 0 hat',
      'Eine Matrix mit nur einer Zeile',
      'Eine Matrix, bei der alle Einträge auf der Diagonale 0 sind',
    ],
    correctIndex: 1,
    explanation: 'Bei einer Diagonalmatrix sind alle Einträge außerhalb der Hauptdiagonale gleich 0. Beispiel: $\\begin{pmatrix} 5 & 0 \\\\ 0 & 3 \\end{pmatrix}$.',
    hints: [
      'Wo sitzen die nicht-trivialen Einträge bei einer Diagonalmatrix?',
      'Außerhalb der Hauptdiagonale: nur Nullen.',
      'Die Einheitsmatrix ist ein Spezialfall einer Diagonalmatrix.',
    ],
    wrongAnswerExplanations: {
      '0': 'Eine Matrix mit lauter gleichen Einträgen ist keine Diagonalmatrix — sie hat überall Einträge, nicht nur auf der Diagonale. Definition: Eine Diagonalmatrix hat $a_{ij} = 0$ für $i \\neq j$.',
      '2': 'Eine Matrix mit nur einer Zeile ist ein Zeilenvektor ($1 \\times n$-Matrix), hat aber nichts mit "Diagonalmatrix" zu tun. Eine Diagonalmatrix ist stets quadratisch.',
      '3': 'Du hast die Definition umgekehrt: Bei einer Diagonalmatrix sind die Einträge AUSSERHALB der Diagonale gleich $0$, nicht ON der Diagonale. Auf der Hauptdiagonale dürfen beliebige Werte stehen.',
    },
  },
  'ex-la-1-1-d': {
    id: 'ex-la-1-1-d', lessonId: 'la-1-1', type: 'multiple-choice',
    question: '$A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$. Welches Element ist $a_{12}$?',
    options: ['$2$', '$5$', '$1$', '$3$'],
    correctIndex: 1,
    explanation: '$a_{12}$ bedeutet: Zeile 1, Spalte 2. In der ersten Zeile $[2, 5]$ ist das zweite Element $5$.',
    hints: [
      'Welcher Index steht für die Zeile, welcher für die Spalte?',
      'Konvention: $a_{ij}$ — erst Zeile $i$, dann Spalte $j$.',
      'Hier: Zeile 1 ist $[2, 5]$. Davon das zweite Element nehmen.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das ist $a_{11}$ (Zeile 1, Spalte 1), nicht $a_{12}$. Der zweite Index $j = 2$ bedeutet Spalte 2, nicht Spalte 1. In Zeile 1 ist Spalte 2 der Wert $5$.',
      '2': 'Das ist $a_{21}$ (Zeile 2, Spalte 1). Du hast die Indizes vertauscht: $a_{ij}$ = Zeile $i$, Spalte $j$ — erst Zeile, dann Spalte.',
      '3': 'Das ist $a_{22}$ (Zeile 2, Spalte 2). Hier gesucht war aber $a_{12}$: erster Index $1$ = Zeile 1, nicht Zeile 2.',
    },
  },
  'ex-la-1-1-mastery': {
    id: 'ex-la-1-1-mastery', lessonId: 'la-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Für $A = \\begin{pmatrix} 2 & 5 & 7 \\\\ 1 & 3 & 9 \\end{pmatrix}$: Welche Dimension hat $A$, und welchen Wert hat $a_{23}$?',
    options: [
      'Dimension $2 \\times 3$, $a_{23} = 9$',
      'Dimension $3 \\times 2$, $a_{23} = 9$',
      'Dimension $2 \\times 3$, $a_{23} = 3$',
      'Dimension $3 \\times 2$, $a_{23} = 7$',
    ],
    correctIndex: 0,
    explanation: `**Dimension:** $2$ Zeilen $\\times$ $3$ Spalten $= 2 \\times 3$ (immer **Zeilen $\\times$ Spalten**).

**$a_{23}$:** Der Index $a_{ij}$ bedeutet Zeile $i$, Spalte $j$. Also Zeile 2, Spalte 3 → Element $9$.

**Typischer Fehler:** Dimension als „Spalten × Zeilen" angeben ($3\\times 2$); $a_{23}$ mit $a_{32}$ verwechseln (letzteres existiert hier gar nicht, da nur 2 Zeilen).`,
    hints: [
      'Dimension = Zeilen × Spalten — in dieser Reihenfolge.',
      '$a_{ij}$: erster Index = Zeile, zweiter = Spalte.',
      '$a_{23}$ = Zeile 2, Spalte 3. Zeile 2 ist $[1, 3, 9]$ — das 3. Element ist $9$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast Zeilen und Spalten vertauscht: $A$ hat 2 Zeilen und 3 Spalten, also $2 \\times 3$ (nicht $3 \\times 2$). Die Konvention lautet immer Zeilen zuerst.',
      '2': 'Dimension stimmt, aber $a_{23} = 3$ ist Spalte 2 (nicht Spalte 3) von Zeile 2. In Zeile 2 $[1, 3, 9]$ ist Spalte 3 der Wert $9$, nicht $3$.',
      '3': 'Beide Angaben falsch: Dimension $3 \\times 2$ vertauscht Zeilen/Spalten (korrekt: $2 \\times 3$), und $a_{23} = 7$ wäre Zeile 1 Spalte 3, nicht Zeile 2 Spalte 3. Die Indizes $a_{ij}$ bedeuten Zeile $i$, Spalte $j$.',
    },
  },

  // ── Lesson 2: Matrizenrechnung ──────────────────────────────────────────────
  'ex-la-1-2-a': {
    id: 'ex-la-1-2-a', lessonId: 'la-1-2', type: 'multiple-choice',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$. Was ist $A + B$?',
    options: [
      '$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$',
      '$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$',
      '$\\begin{pmatrix} 6 & 8 \\\\ 7 & 8 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & 2 \\\\ 10 & 12 \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: 'Matrizen werden elementweise addiert: $1+5=6$, $2+6=8$, $3+7=10$, $4+8=12$. Also $A+B = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$.',
    hints: [
      'Wie geht die Addition für Matrizen?',
      'Regel: $(A+B)_{ij} = a_{ij} + b_{ij}$ — jedes Element einzeln.',
      'Berechne alle vier Einträge separat und vergleiche mit den Optionen.',
    ],
    wrongAnswerExplanations: {
      '1': 'Das ist elementweise Multiplikation ($1 \\cdot 5, 2 \\cdot 6, 3 \\cdot 7, 4 \\cdot 8$), nicht Addition. Bei $A + B$ addiert man elementweise: $(A+B)_{ij} = a_{ij} + b_{ij}$.',
      '2': 'Du hast nur die erste Zeile korrekt addiert ($1+5=6$, $2+6=8$), dann aber Zeile 2 von $B$ kopiert statt zu addieren. Auch Zeile 2 muss elementweise addiert werden: $3+7=10$, $4+8=12$.',
      '3': 'Du hast nur die zweite Zeile addiert und die erste von $A$ kopiert. Matrixaddition muss ALLE Elemente addieren: $(A+B)_{ij} = a_{ij} + b_{ij}$ für alle $i, j$.',
    },
  },
  'ex-la-1-2-b': {
    id: 'ex-la-1-2-b', lessonId: 'la-1-2', type: 'multiple-choice',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Was ist $3 \\cdot A$?',
    options: [
      '$\\begin{pmatrix} 3 & 2 \\\\ 3 & 4 \\end{pmatrix}$',
      '$\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$',
      '$\\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 12 \\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: 'Bei der Skalarmultiplikation wird jedes Element mit dem Skalar multipliziert: $3 \\cdot 1 = 3$, $3 \\cdot 2 = 6$, $3 \\cdot 3 = 9$, $3 \\cdot 4 = 12$.',
    hints: [
      'Was passiert bei einer Skalarmultiplikation?',
      'Regel: $(c \\cdot A)_{ij} = c \\cdot a_{ij}$ — jedes Element mit dem Skalar.',
      'Multipliziere alle vier Einträge mit $3$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast nur das erste Element mit $3$ multipliziert und die anderen unverändert gelassen. Bei Skalarmultiplikation wird JEDES Element mit dem Skalar multipliziert: $(c \\cdot A)_{ij} = c \\cdot a_{ij}$.',
      '2': 'Du hast $3$ zu jedem Element ADDIERT ($1+3, 2+3, 3+3, 4+3$) statt zu multiplizieren. $3 \\cdot A$ bedeutet Multiplikation, nicht Addition.',
      '3': 'Nur das Element $a_{22}$ mit $3$ multipliziert, der Rest unverändert. Bei Skalarmultiplikation muss jeder Eintrag der Matrix mit dem Skalar multipliziert werden.',
    },
  },
  'ex-la-1-2-c': {
    id: 'ex-la-1-2-c', lessonId: 'la-1-2', type: 'multiple-choice',
    question: 'Gilt für die Matrizenmultiplikation immer $A \\cdot B = B \\cdot A$?',
    options: [
      'Ja, die Multiplikation ist kommutativ',
      'Nein, im Allgemeinen gilt $A \\cdot B \\neq B \\cdot A$',
      'Ja, aber nur für quadratische Matrizen',
      'Nein, Matrizen kann man nicht multiplizieren',
    ],
    correctIndex: 1,
    explanation: 'Die Matrizenmultiplikation ist NICHT kommutativ. Im Allgemeinen gilt $A \\cdot B \\neq B \\cdot A$. Das ist einer der wichtigsten Unterschiede zu normalen Zahlen!',
    hints: [
      'Vertausche bei einem 2×2-Beispiel mal die Reihenfolge und rechne nach.',
      'Sogar bei Drehmatrizen im Raum gilt: erst $A$ dann $B$ ist anders als erst $B$ dann $A$.',
      'Gegenbeispiel reicht: ein einzelnes Paar $(A, B)$ mit $AB \\neq BA$ widerlegt die Kommutativität.',
    ],
    wrongAnswerExplanations: {
      '0': 'Kommutativ-Trugschluss: Matrizen sind keine gewöhnlichen Zahlen — das Kommutativgesetz $AB = BA$ gilt NICHT allgemein. Ein einfaches Gegenbeispiel mit $2\\times 2$-Matrizen widerlegt das sofort.',
      '2': 'Auch für quadratische Matrizen gilt $AB \\neq BA$ im Allgemeinen. Quadratische Form bedeutet nur, dass beide Produkte existieren — nicht, dass sie gleich sind. Beispiel: Drehmatrizen im 3D.',
      '3': 'Matrizen kann man sehr wohl multiplizieren — vorausgesetzt die inneren Dimensionen stimmen ($m \\times n$ mal $n \\times p$ ergibt $m \\times p$). Was nicht gilt, ist die Kommutativität.',
    },
  },
  'ex-la-1-2-d': {
    id: 'ex-la-1-2-d', lessonId: 'la-1-2', type: 'number-input',
    question: 'Berechne das Element $c_{11}$ von $C = A \\cdot B$ mit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.',
    correctValue: 19,
    tolerance: 0.01,
    unit: '',
    explanation: '$c_{11}$ = Zeile 1 von $A$ mal Spalte 1 von $B$ = $1 \\cdot 5 + 2 \\cdot 7 = 5 + 14 = 19$.',
    hints: [
      'Welche Zeile und Spalte brauchst du für $c_{11}$?',
      'Zeile 1 von $A$ ist $[1, 2]$. Spalte 1 von $B$ ist $\\begin{pmatrix}5\\\\7\\end{pmatrix}$.',
      'Multipliziere paarweise und addiere: $1 \\cdot 5 + 2 \\cdot 7$.',
    ],
  },
  'ex-la-1-2-e': {
    id: 'ex-la-1-2-e', lessonId: 'la-1-2', type: 'number-input',
    question: 'Berechne das Element $c_{22}$ von $C = A \\cdot B$ mit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.',
    correctValue: 50,
    tolerance: 0.01,
    unit: '',
    explanation: '$c_{22}$ = Zeile 2 von $A$ mal Spalte 2 von $B$ = $3 \\cdot 6 + 4 \\cdot 8 = 18 + 32 = 50$.',
    hints: [
      'Index $c_{22}$: Zeile 2 von $A$, Spalte 2 von $B$.',
      'Zeile 2 von $A$ ist $[3, 4]$. Spalte 2 von $B$ ist $\\begin{pmatrix}6\\\\8\\end{pmatrix}$.',
      'Skalarprodukt bilden: $3 \\cdot 6 + 4 \\cdot 8$.',
    ],
  },
  'ex-la-1-2-mastery': {
    id: 'ex-la-1-2-mastery', lessonId: 'la-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $A$ ist eine $2 \\times 3$-Matrix, $B$ ist eine $3 \\times 4$-Matrix. Welche Dimension hat $A \\cdot B$?',
    options: ['$2 \\times 4$', '$3 \\times 3$', '$2 \\times 3$', 'Multiplikation nicht möglich'],
    correctIndex: 0,
    explanation: 'Bei $A \\cdot B$ müssen die "inneren" Dimensionen übereinstimmen ($3 = 3$, passt!). Das Ergebnis hat die "äußeren" Dimensionen: $2 \\times 4$.',
    hints: [
      'Wie lautet die Dimensionsregel für Matrizenmultiplikation?',
      '$(m \\times n) \\cdot (n \\times p) = (m \\times p)$ — die inneren Dimensionen müssen gleich sein.',
      'Hier: $A = (2 \\times 3)$, $B = (3 \\times 4)$. Innere Dimensionen $3 = 3$ ✓, Ergebnis $(2 \\times 4)$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast die inneren statt der äußeren Dimensionen als Ergebnis genommen. Regel: $(m \\times n) \\cdot (n \\times p) = (m \\times p)$. Die inneren ($n = 3$) müssen nur übereinstimmen; das Ergebnis hat die äußeren Dimensionen $m \\times p = 2 \\times 4$.',
      '2': 'Das ist die Dimension von $A$ selbst. Die Multiplikation $A \\cdot B$ ergibt eine neue Matrix der Größe $m \\times p$ ($m$ von $A$, $p$ von $B$), nicht einfach die Dimension von $A$.',
      '3': 'Die Multiplikation ist sehr wohl möglich: die inneren Dimensionen sind $3 = 3$, also passen sie zusammen. Nur wenn die inneren Dimensionen ungleich wären ($m \\times n$ mal $k \\times p$ mit $n \\neq k$), wäre das Produkt undefiniert.',
    },
  },

  // ── Lesson 3: Transponierte und Inverse ─────────────────────────────────────
  'ex-la-1-3-a': {
    id: 'ex-la-1-3-a', lessonId: 'la-1-3', type: 'multiple-choice',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Was ist $A^T$?',
    options: [
      '$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$',
      '$\\begin{pmatrix} 4 & 2 \\\\ 3 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$',
      '$\\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: 'Beim Transponieren werden Zeilen und Spalten getauscht. Zeile 1 $[1, 2]$ wird zu Spalte 1, Zeile 2 $[3, 4]$ wird zu Spalte 2. Also $A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.',
    hints: [
      'Was bedeutet "transponieren" geometrisch?',
      'Spiegelung an der Hauptdiagonale — Zeilen werden zu Spalten.',
      'Element-Regel: $(A^T)_{ij} = a_{ji}$ — Indizes vertauschen.',
    ],
    wrongAnswerExplanations: {
      '1': 'Das ist eine Drehung um 180° (Antidiagonal-Spiegelung), nicht die Transponierte. $A^T$ spiegelt an der HAUPT-Diagonale (oben-links nach unten-rechts), nicht an der Nebendiagonale.',
      '2': 'Das ist $A$ selbst, unverändert. Das Transponieren tauscht Zeilen und Spalten: $(A^T)_{ij} = a_{ji}$. Nur symmetrische Matrizen ($A = A^T$) würden unverändert bleiben — $A$ hier ist aber nicht symmetrisch.',
      '3': 'Das ist $-A$ (Vorzeichen aller Einträge umgedreht). Transponieren hat nichts mit Vorzeichen zu tun, sondern tauscht Zeilen und Spalten.',
    },
  },
  'ex-la-1-3-b': {
    id: 'ex-la-1-3-b', lessonId: 'la-1-3', type: 'multiple-choice',
    question: 'Was gilt für die inverse Matrix $A^{-1}$?',
    options: [
      '$A \\cdot A^{-1} = 0$',
      '$A + A^{-1} = I$',
      '$A \\cdot A^{-1} = I$',
      '$A^{-1} = -A$',
    ],
    correctIndex: 2,
    explanation: 'Die inverse Matrix ist das "Gegenstück" bei der Multiplikation: $A \\cdot A^{-1} = A^{-1} \\cdot A = I$ (Einheitsmatrix). Das ist analog zu $5 \\cdot \\frac{1}{5} = 1$ bei normalen Zahlen.',
    hints: [
      'Welche Eigenschaft definiert den Kehrwert bei Zahlen ($5 \\cdot 1/5 = 1$)?',
      'Übertrage das auf Matrizen — was ist die "Eins" der Matrizenmultiplikation?',
      'Die Eins ist die Einheitsmatrix $I$, also $A \\cdot A^{-1} = I$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das wäre die Definition eines "Nullteilers" — das neutrale Element der Multiplikation ist aber die Einheitsmatrix $I$, nicht die Nullmatrix. Analog zu $5 \\cdot \\frac{1}{5} = 1$ (nicht $= 0$).',
      '1': 'Die Inverse ist über die Multiplikation definiert, nicht über die Addition. Bei Zahlen ist $\\frac{1}{5}$ nicht $1 - 5 = -4$, sondern das multiplikative Inverse. Richtig: $A \\cdot A^{-1} = I$.',
      '3': '$-A$ ist das additive Inverse ($A + (-A) = 0$), aber nicht das multiplikative. Die Inverse $A^{-1}$ ist so definiert, dass $A \\cdot A^{-1} = I$ ergibt — das entspricht dem Kehrwert bei Zahlen.',
    },
  },
  'ex-la-1-3-c': {
    id: 'ex-la-1-3-c', lessonId: 'la-1-3', type: 'number-input',
    question: 'Berechne die Determinante von $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$, die du für die Inverse brauchst: $\\det(A) = ad - bc$.',
    correctValue: 10,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$.',
    hints: [
      'Welche Formel gilt für $\\det$ einer 2×2-Matrix?',
      '$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$.',
      'Hier $a=4, b=7, c=2, d=6$. Setze ein.',
    ],
  },
  'ex-la-1-3-d': {
    id: 'ex-la-1-3-d', lessonId: 'la-1-3', type: 'multiple-choice',
    question: 'Welche Matrix hat KEINE Inverse?',
    options: [
      'Die Einheitsmatrix $I$',
      'Eine Matrix mit $\\det(A) = 5$',
      'Eine Matrix mit $\\det(A) = 0$',
      'Eine Diagonalmatrix mit Einträgen $2$ und $3$',
    ],
    correctIndex: 2,
    explanation: 'Eine Matrix ist genau dann nicht invertierbar (singulär), wenn ihre Determinante $0$ ist. In der Formel $A^{-1} = \\frac{1}{\\det(A)} \\cdot \\ldots$ würde man durch $0$ teilen!',
    hints: [
      'Wo taucht $\\det(A)$ in der Formel für $A^{-1}$ auf?',
      'Im Nenner: $A^{-1} = \\frac{1}{\\det(A)} \\cdot (\\ldots)$.',
      'Welcher Wert von $\\det(A)$ macht das undefiniert?',
    ],
    wrongAnswerExplanations: {
      '0': 'Die Einheitsmatrix $I$ ist ihre eigene Inverse: $I^{-1} = I$. Es gilt $\\det(I) = 1 \\neq 0$, also ist $I$ invertierbar.',
      '1': '$\\det(A) = 5 \\neq 0$ bedeutet: Matrix ist invertierbar! Die Formel $A^{-1} = \\frac{1}{\\det A} \\cdot \\text{adj}(A)$ funktioniert, solange $\\det A \\neq 0$.',
      '3': 'Eine Diagonalmatrix mit Einträgen $2$ und $3$ hat $\\det = 2 \\cdot 3 = 6 \\neq 0$, ist also invertierbar. Die Inverse ist $\\text{diag}(1/2, 1/3)$.',
    },
  },
  'ex-la-1-3-mastery': {
    id: 'ex-la-1-3-mastery', lessonId: 'la-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$. Was ist $A^{-1}$?',
    options: [
      '$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$',
      '$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$',
      '$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$',
      '$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: '$\\det(A) = 3 \\cdot 2 - 1 \\cdot 5 = 1$. Formel: $A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Man tauscht $a$ und $d$, und ändert das Vorzeichen von $b$ und $c$.',
    hints: [
      'Erst $\\det(A) = ad - bc$ ausrechnen.',
      'Formel für 2×2-Inverse: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
      'Tausche die Diagonalelemente, kehre die Vorzeichen der Nebendiagonale um, teile durch $\\det$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast die Diagonalelemente $a, d$ NICHT getauscht, nur die Vorzeichen der Nebendiagonale gedreht. Formel: $A^{-1} = \\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ — erst TAUSCHEN, dann Nebendiagonale negieren.',
      '2': 'Du hast nur $a$ und $d$ getauscht, aber die Vorzeichen der Nebendiagonale NICHT umgedreht. Die Formel erfordert beides: Diagonale tauschen UND Nebendiagonale negieren.',
      '3': 'Du hast alle Vorzeichen umgedreht (wie bei $-A$). Die Formel: $A^{-1} = \\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ — nur $b$ und $c$ bekommen ein Minus, nicht $a$ und $d$.',
    },
  },

  // ── Lesson 4: Determinanten ─────────────────────────────────────────────────
  'ex-la-1-4-a': {
    id: 'ex-la-1-4-a', lessonId: 'la-1-4', type: 'number-input',
    question: 'Berechne: $\\det \\begin{pmatrix} 3 & 8 \\\\ 4 & 6 \\end{pmatrix}$',
    correctValue: -14,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\det = 3 \\cdot 6 - 8 \\cdot 4 = 18 - 32 = -14$.',
    hints: [
      'Welche Formel passt zur 2×2-Determinante?',
      '$\\det = a \\cdot d - b \\cdot c$ (Hauptdiagonale minus Nebendiagonale).',
      'Hier: $3 \\cdot 6 - 8 \\cdot 4$. Vorsicht — Ergebnis ist negativ!',
    ],
  },
  'ex-la-1-4-b': {
    id: 'ex-la-1-4-b', lessonId: 'la-1-4', type: 'multiple-choice',
    question: 'Was bedeutet $\\det(A) = 0$ geometrisch (im 2D-Fall)?',
    options: [
      'Die Spalten von $A$ sind senkrecht zueinander',
      'Die Spalten von $A$ sind linear abhängig (zeigen in die gleiche Richtung)',
      'Die Matrix $A$ ist die Einheitsmatrix',
      '$A$ hat nur positive Einträge',
    ],
    correctIndex: 1,
    explanation: 'Wenn $\\det(A) = 0$, sind die Spalten (oder Zeilen) linear abhängig. Geometrisch: Die Fläche/das Volumen wird auf $0$ zusammengedrückt. Die Matrix "verliert eine Dimension".',
    hints: [
      'Welche geometrische Größe misst die Determinante?',
      'Die Determinante = Flächeninhalt des Parallelogramms aus den Spaltenvektoren.',
      'Wann hat ein Parallelogramm Fläche $0$?',
    ],
    wrongAnswerExplanations: {
      '0': 'Senkrechte Spalten (orthogonal) ergeben ein maximales Parallelogramm und $\\det \\neq 0$. Beispiel: Einheitsmatrix hat orthogonale Spalten und $\\det = 1$. $\\det = 0$ heißt im Gegenteil, dass die Spalten linear abhängig sind.',
      '2': '$A = I$ hat $\\det(I) = 1 \\neq 0$, nicht $0$. Die Einheitsmatrix ist invertierbar und bildet das Einheitsquadrat unverändert ab.',
      '3': 'Das Vorzeichen der Einträge hat nichts mit $\\det = 0$ zu tun. Zum Beispiel hat $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ nur positive Einträge, aber $\\det = 0$ wegen linearer Abhängigkeit.',
    },
  },
  'ex-la-1-4-c': {
    id: 'ex-la-1-4-c', lessonId: 'la-1-4', type: 'number-input',
    question: 'Berechne mit der Regel von Sarrus: $\\det \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$',
    correctValue: 0,
    tolerance: 0.01,
    unit: '',
    explanation: 'Sarrus: $(1 \\cdot 5 \\cdot 9 + 2 \\cdot 6 \\cdot 7 + 3 \\cdot 4 \\cdot 8) - (3 \\cdot 5 \\cdot 7 + 2 \\cdot 4 \\cdot 9 + 1 \\cdot 6 \\cdot 8) = (45 + 84 + 96) - (105 + 72 + 48) = 225 - 225 = 0$. Die Zeilen sind linear abhängig!',
    hints: [
      'Wie funktioniert die Regel von Sarrus?',
      'Schreibe die ersten zwei Spalten rechts daneben — dann 3 Plus-Diagonalen (oben links → unten rechts) und 3 Minus-Diagonalen (oben rechts → unten links).',
      'Hier sind die Zeilen linear abhängig (Zeile 2 = Mittelwert von Zeile 1 und 3) — das Ergebnis muss $0$ sein.',
    ],
  },
  'ex-la-1-4-d': {
    id: 'ex-la-1-4-d', lessonId: 'la-1-4', type: 'multiple-choice',
    question: 'Welche Aussage ist korrekt?',
    options: [
      '$\\det(A \\cdot B) = \\det(A) + \\det(B)$',
      '$\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$',
      '$\\det(A + B) = \\det(A) \\cdot \\det(B)$',
      '$\\det(A^T) = -\\det(A)$',
    ],
    correctIndex: 1,
    explanation: 'Die Determinante ist multiplikativ: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$. Außerdem gilt $\\det(A^T) = \\det(A)$.',
    hints: [
      'Wie verhält sich die Determinante bei einem Produkt von Matrizen?',
      'Sie ist multiplikativ — was bedeutet das genau?',
      'Bei der Summe gilt KEINE einfache Regel — daher Vorsicht mit Antworten zu $A + B$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Additivität gilt NICHT für die Determinante. Bei einem Produkt $A \\cdot B$ ist die Determinante multiplikativ: $\\det(AB) = \\det A \\cdot \\det B$, nicht $\\det A + \\det B$.',
      '2': 'Für eine SUMME gibt es keine einfache Regel: $\\det(A + B) \\neq \\det A \\cdot \\det B$ und $\\neq \\det A + \\det B$. Multiplikativität gilt nur für das Produkt $A \\cdot B$.',
      '3': 'Falsches Vorzeichen: $\\det(A^T) = +\\det(A)$, nicht $-\\det(A)$. Transponieren lässt die Determinante unverändert (das Minus-Zeichen kommt bei Zeilenvertauschung, nicht bei Transposition).',
    },
  },
  'ex-la-1-4-mastery': {
    id: 'ex-la-1-4-mastery', lessonId: 'la-1-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: $\\det \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 0 \\\\ 1 & 2 & 3 \\end{pmatrix}$',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Sarrus: $(2 \\cdot 1 \\cdot 3 + 0 \\cdot 0 \\cdot 1 + 1 \\cdot 3 \\cdot 2) - (1 \\cdot 1 \\cdot 1 + 0 \\cdot 3 \\cdot 3 + 2 \\cdot 0 \\cdot 2) = (6 + 0 + 6) - (1 + 0 + 0) = 12 - 11 = 1$.',
    hints: [
      'Verwende die Regel von Sarrus für 3×3-Determinanten.',
      'Plus-Diagonalen ergeben $6 + 0 + 6 = 12$, Minus-Diagonalen $1 + 0 + 0 = 1$.',
      'Tipp: Bei Nullen kann man die Entwicklung nach Zeile/Spalte mit den meisten Nullen oft schneller machen — hier z.B. nach Spalte 2 entwickeln.',
    ],
  },

  // ── Lesson 5: Eigenwerte und Eigenvektoren ──────────────────────────────────
  'ex-la-1-5-a': {
    id: 'ex-la-1-5-a', lessonId: 'la-1-5', type: 'multiple-choice',
    question: 'Was bedeutet die Gleichung $A \\vec{x} = \\lambda \\vec{x}$?',
    options: [
      'Der Vektor $\\vec{x}$ wird durch $A$ auf den Nullvektor abgebildet',
      'Der Vektor $\\vec{x}$ wird durch $A$ nur gestreckt/gestaucht, aber nicht gedreht',
      'Die Matrix $A$ hat keine Inverse',
      'Der Vektor $\\vec{x}$ ist immer der Nullvektor',
    ],
    correctIndex: 1,
    explanation: 'Ein Eigenvektor $\\vec{x}$ behält bei der Multiplikation mit $A$ seine Richtung. Er wird nur um den Faktor $\\lambda$ (den Eigenwert) gestreckt oder gestaucht. Deshalb "eigen" — er bleibt sich selbst treu!',
    hints: [
      'Auf der rechten Seite steht $\\lambda \\cdot \\vec{x}$ — was bedeutet das geometrisch?',
      'Multiplikation mit einem Skalar $\\lambda$ ändert nur die Länge, nicht die Richtung.',
      'Also bleibt der Vektor in Richtung gleich — und $\\lambda$ ist der Streckfaktor.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das wäre $A \\vec{x} = \\vec{0}$, also $\\lambda = 0$. Die allgemeine Eigenwertgleichung erlaubt aber beliebige $\\lambda$ (nicht nur $0$). $\\lambda = 0$ ist ein Spezialfall (singuläre Matrix), nicht die allgemeine Bedeutung.',
      '2': 'Die Gleichung $A\\vec{x} = \\lambda \\vec{x}$ sagt nichts direkt über Invertierbarkeit. $A$ kann durchaus invertierbar sein und trotzdem Eigenvektoren haben — die meisten Matrizen haben beides.',
      '3': '$\\vec{x} = \\vec{0}$ erfüllt die Gleichung trivial für jedes $\\lambda$ und wird deshalb per Definition AUSGESCHLOSSEN. Eigenvektoren müssen $\\vec{x} \\neq \\vec{0}$ sein — sonst wäre jede Matrix trivial "eigen".',
    },
  },
  'ex-la-1-5-b': {
    id: 'ex-la-1-5-b', lessonId: 'la-1-5', type: 'multiple-choice',
    question: 'Wie findet man die Eigenwerte einer Matrix $A$?',
    options: [
      'Man berechnet $A^{-1}$',
      'Man löst $\\det(A - \\lambda I) = 0$',
      'Man transponiert $A$',
      'Man berechnet $\\det(A) = 0$',
    ],
    correctIndex: 1,
    explanation: 'Die Eigenwerte findet man aus dem charakteristischen Polynom: $\\det(A - \\lambda I) = 0$. Die Lösungen dieser Gleichung sind die Eigenwerte $\\lambda$.',
    hints: [
      'Schreibe $A \\vec{x} = \\lambda \\vec{x}$ um zu $(A - \\lambda I) \\vec{x} = \\vec{0}$.',
      'Damit es eine nicht-triviale Lösung $\\vec{x} \\neq \\vec{0}$ gibt, muss $(A - \\lambda I)$ singulär sein.',
      'Singulär $\\Leftrightarrow \\det(A - \\lambda I) = 0$ — das charakteristische Polynom.',
    ],
    wrongAnswerExplanations: {
      '0': '$A^{-1}$ allein liefert keine Eigenwerte direkt. Zwar gilt: Wenn $\\lambda$ Eigenwert von $A$ ist, dann $1/\\lambda$ von $A^{-1}$. Aber das Rezept zum Berechnen ist $\\det(A - \\lambda I) = 0$, nicht die Inverse.',
      '2': 'Transponieren ist nicht die Standardmethode. $A$ und $A^T$ haben zwar dieselben Eigenwerte (weil $\\det A = \\det A^T$), aber gelöst wird die Gleichung $\\det(A - \\lambda I) = 0$.',
      '3': '$\\det(A) = 0$ sagt nur, ob $0$ ein Eigenwert ist — nicht welche anderen Eigenwerte existieren. Für ALLE Eigenwerte braucht man $\\det(A - \\lambda I) = 0$, das charakteristische Polynom in $\\lambda$.',
    },
  },
  'ex-la-1-5-c': {
    id: 'ex-la-1-5-c', lessonId: 'la-1-5', type: 'number-input',
    question: 'Berechne die Summe der Eigenwerte von $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. (Tipp: Die Summe der Eigenwerte = Spur der Matrix = Summe der Diagonalelemente)',
    correctValue: 7,
    tolerance: 0.01,
    unit: '',
    explanation: 'Die Spur (Summe der Diagonalelemente) ist $4 + 3 = 7$. Verifikation: $\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = 0$, also $\\lambda_1 = 5, \\lambda_2 = 2$, Summe $= 7$. ✓',
    hints: [
      'Welche Abkürzung für die Summe der Eigenwerte gibt es?',
      'Spur = Summe der Diagonalelemente = Summe der Eigenwerte.',
      'Hier: $4 + 3 = ?$',
    ],
  },
  'ex-la-1-5-mastery': {
    id: 'ex-la-1-5-mastery', lessonId: 'la-1-5', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Was sind die Eigenwerte?',
    options: [
      '$\\lambda_1 = 2, \\lambda_2 = 3$',
      '$\\lambda_1 = 1, \\lambda_2 = 6$',
      '$\\lambda_1 = 0, \\lambda_2 = 5$',
      '$\\lambda_1 = -2, \\lambda_2 = -3$',
    ],
    correctIndex: 0,
    explanation: '$\\det(A - \\lambda I) = (2-\\lambda)(3-\\lambda) - 0 = 0$. Also $\\lambda_1 = 2$ und $\\lambda_2 = 3$. Bei einer Dreiecksmatrix stehen die Eigenwerte direkt auf der Diagonale!',
    hints: [
      'Welche besondere Form hat $A$?',
      '$A$ ist obere Dreiecksmatrix — was bedeutet das für die Eigenwerte?',
      'Bei Dreiecksmatrizen sind die Diagonalelemente direkt die Eigenwerte (ohne Rechnung).',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast vermutlich den Off-Diagonal-Eintrag $1$ mit den Eigenwerten verwechselt und $2 \\cdot 3 = 6$ als zweiten Eigenwert genommen. Bei Dreiecksmatrizen stehen die Eigenwerte DIREKT auf der Hauptdiagonale: $\\lambda_1 = 2$, $\\lambda_2 = 3$.',
      '2': 'Summe $0 + 5 = 5$ ist nicht die Spur $2 + 3 = 5$ — aber die einzelnen Eigenwerte sind nicht $0$ und $5$. Bei der oberen Dreiecksmatrix $A$ sind die Eigenwerte gleich den Diagonalelementen.',
      '3': 'Du hast die Vorzeichen der Eigenwerte umgedreht. $\\det(A - \\lambda I) = 0$ liefert positive Werte $\\lambda = 2, 3$, nicht $-2, -3$. Das Minus kommt nur in der Klammer $(2 - \\lambda)$ vor, nicht im Endergebnis.',
    },
  },
}

const lessons_la_u1 = [
  // ── Lesson 1: Was ist eine Matrix? ──────────────────────────────────────────
  {
    id: 'la-1-1', unitId: 'la-unit-1',
    title: 'Was ist eine Matrix?',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Matrizen als Zahlentabellen verstehen', 'Dimension und Notation kennen', 'Spezialmatrizen erkennen'],
    subGoals: [
      { label: 'Dimension $m \\times n$ als „Zeilen $\\times$ Spalten" lesen (Reihenfolge nicht tauschen)', examRelevance: 'hoch' },
      { label: 'Element $a_{ij}$: erster Index = Zeile, zweiter = Spalte', examRelevance: 'hoch' },
      { label: 'Einheitsmatrix, Nullmatrix, Diagonalmatrix, quadratische Matrix auf einen Blick unterscheiden', examRelevance: 'mittel' },
      { label: 'Transponierte $A^T$: Zeilen werden Spalten — praktisch für Dimensionscheck', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-1-2',
    steps: [
      {
        id: 'la-1-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Matrix?',
        content: `Stell dir eine **Tabelle mit Zahlen** vor — das ist im Grunde schon eine Matrix!

**Alltagsbeispiel:** Ein Unternehmen produziert 3 Produkte in 2 Fabriken. Die Produktionszahlen pro Monat:

|  | Produkt 1 | Produkt 2 | Produkt 3 |
|--|-----------|-----------|-----------|
| Fabrik 1 | 100 | 200 | 150 |
| Fabrik 2 | 80 | 300 | 120 |

Diese Tabelle ist eine **2×3-Matrix** (2 Zeilen, 3 Spalten):

$$A = \\begin{pmatrix} 100 & 200 & 150 \\\\ 80 & 300 & 120 \\end{pmatrix}$$

**Warum braucht man Matrizen im Maschinenbau?** Überall! Spannungstensoren, Trägheitsmomente, Steifigkeitsmatrizen in der FEM, Drehmatrizen in der Robotik — Matrizen sind DAS Werkzeug der Ingenieurmathematik.`,
      },
      {
        id: 'la-1-1-s2', type: 'explanation-formal', title: 'Formale Notation',
        content: `**Definition:** Eine $m \\times n$-Matrix ist eine rechteckige Anordnung von Zahlen mit $m$ Zeilen und $n$ Spalten:

$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$

Das Element $a_{ij}$ steht in **Zeile $i$** und **Spalte $j$**.

**Spezialmatrizen:**
- **Einheitsmatrix** $I$: Einsen auf der Diagonale, sonst Nullen. $A \\cdot I = A$.
- **Nullmatrix** $0$: Alle Einträge sind 0. $A + 0 = A$.
- **Diagonalmatrix**: Nur auf der Hauptdiagonale stehen Zahlen $\\neq 0$.
- **Quadratische Matrix**: Gleich viele Zeilen und Spalten ($m = n$).`,
      },
      { id: 'la-1-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-1-1-a' },
      { id: 'la-1-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-1-1-b' },
      { id: 'la-1-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-1-1-c' },
      { id: 'la-1-1-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-1-1-d' },
      { id: 'la-1-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-1-1-mastery' },
    ],
  },

  // ── Lesson 2: Matrizenrechnung ──────────────────────────────────────────────
  {
    id: 'la-1-2', unitId: 'la-unit-1',
    title: 'Matrizenrechnung',
    order: 2, estimatedMinutes: 20,
    learningGoals: ['Matrizen addieren und skalar multiplizieren', 'Matrizenmultiplikation beherrschen', 'Nicht-Kommutativität verstehen'],
    subGoals: [
      { label: 'Addition nur bei identischer Dimension — elementweise', examRelevance: 'hoch' },
      { label: 'Matrizenmultiplikation: „Zeile mal Spalte" — Innen-Dimensionen müssen passen ($m\\!\\times\\!k$ · $k\\!\\times\\!n$)', examRelevance: 'hoch' },
      { label: '$A\\,B \\neq B\\,A$ im Allgemeinen — Reihenfolge wichtig', examRelevance: 'hoch' },
      { label: 'Rechenregeln: $(A\\,B)^T = B^T A^T$ (Reihenfolge dreht sich um)', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-1-3',
    steps: [
      {
        id: 'la-1-2-s1', type: 'explanation-formal', title: 'Addition und Skalarmultiplikation',
        content: `**Addition:** Zwei Matrizen gleicher Dimension werden **elementweise** addiert:

$$(A + B)_{ij} = a_{ij} + b_{ij}$$

**Beispiel:**
$$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$$

**Skalarmultiplikation:** Jedes Element wird mit dem Skalar $c$ multipliziert:

$$(c \\cdot A)_{ij} = c \\cdot a_{ij}$$

**Beispiel:**
$$3 \\cdot \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}$$

**Wichtig:** Matrizen können nur addiert werden, wenn sie die **gleiche Dimension** haben!`,
      },
      {
        id: 'la-1-2-s2', type: 'explanation-intuitive', title: 'Matrizenmultiplikation: Zeile mal Spalte',
        content: `Die Matrizenmultiplikation ist die wichtigste Operation — aber auch die ungewöhnlichste!

**Rezept "Zeile mal Spalte":**
Um das Element $c_{ij}$ von $C = A \\cdot B$ zu berechnen:
1. Nimm die **Zeile $i$** von $A$
2. Nimm die **Spalte $j$** von $B$
3. Multipliziere paarweise und addiere alles

**Schritt für Schritt:**
$$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$$

$c_{11}$: Zeile 1 von A $\\cdot$ Spalte 1 von B = $1 \\cdot 5 + 2 \\cdot 7 = 19$
$c_{12}$: Zeile 1 von A $\\cdot$ Spalte 2 von B = $1 \\cdot 6 + 2 \\cdot 8 = 22$
$c_{21}$: Zeile 2 von A $\\cdot$ Spalte 1 von B = $3 \\cdot 5 + 4 \\cdot 7 = 43$
$c_{22}$: Zeile 2 von A $\\cdot$ Spalte 2 von B = $3 \\cdot 6 + 4 \\cdot 8 = 50$

$$C = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$$

**Dimensionsregel:** $(m \\times n) \\cdot (n \\times p) = (m \\times p)$. Die "inneren" Dimensionen müssen gleich sein!

**ACHTUNG:** $A \\cdot B \\neq B \\cdot A$ im Allgemeinen! Die Matrizenmultiplikation ist **nicht kommutativ**.`,
      },
      { id: 'la-1-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-1-2-a' },
      { id: 'la-1-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-1-2-b' },
      { id: 'la-1-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-1-2-c' },
      { id: 'la-1-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-1-2-d' },
      { id: 'la-1-2-s7', type: 'exercise', title: 'Aufgabe 5', exerciseRef: 'ex-la-1-2-e' },
      { id: 'la-1-2-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-1-2-mastery' },
    ],
  },

  // ── Lesson 3: Transponierte und Inverse ─────────────────────────────────────
  {
    id: 'la-1-3', unitId: 'la-unit-1',
    title: 'Transponierte und Inverse',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Transponierte einer Matrix berechnen', 'Inverse einer 2x2-Matrix berechnen', 'Zusammenhang zwischen Invertierbarkeit und Determinante verstehen'],
    subGoals: [
      { label: 'Transponierte: $(A^T)_{ij} = A_{ji}$ (Zeilen/Spalten tauschen), Dimensionen $m \\times n \\to n \\times m$', examRelevance: 'hoch' },
      { label: 'Transponierten-Regeln: $(A+B)^T = A^T + B^T$, $(AB)^T = B^T A^T$ (Reihenfolge dreht!)', examRelevance: 'hoch' },
      { label: '2x2-Inverse: $A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$', examRelevance: 'hoch' },
      { label: 'Invertierbarkeit: $A^{-1}$ existiert $\\iff \\det A \\neq 0$', examRelevance: 'hoch' },
      { label: 'Eigenschaft: $AA^{-1} = A^{-1}A = I$ (Einheitsmatrix)', examRelevance: 'hoch' },
      { label: 'Symmetrische Matrix: $A^T = A$; orthogonale Matrix: $A^T = A^{-1}$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-1-4',
    steps: [
      {
        id: 'la-1-3-s1', type: 'explanation-intuitive', title: 'Transponierte: Zeilen und Spalten tauschen',
        content: `**Die Transponierte $A^T$** einer Matrix entsteht, indem man Zeilen und Spalten vertauscht.

Stell es dir wie ein **Spiegeln an der Diagonale** vor:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

Die erste Zeile $[1, 2, 3]$ wird zur ersten Spalte. Die zweite Zeile $[4, 5, 6]$ wird zur zweiten Spalte.

**Formal:** $(A^T)_{ij} = a_{ji}$

Eine $m \\times n$-Matrix wird zu einer $n \\times m$-Matrix.

**Wichtige Regeln:**
- $(A^T)^T = A$ (zweimal transponieren = zurück)
- $(A + B)^T = A^T + B^T$
- $(A \\cdot B)^T = B^T \\cdot A^T$ (Achtung: Reihenfolge dreht sich um!)`,
      },
      {
        id: 'la-1-3-s2', type: 'explanation-formal', title: 'Die inverse Matrix',
        content: `**Die Inverse $A^{-1}$** ist das Gegenstück einer Matrix bei der Multiplikation:

$$A \\cdot A^{-1} = A^{-1} \\cdot A = I$$

Wie $5 \\cdot \\frac{1}{5} = 1$, aber für Matrizen!

**Formel für 2x2-Matrizen:**

$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\quad \\Rightarrow \\quad A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

**Rezept:**
1. Berechne $\\det(A) = ad - bc$
2. Falls $\\det(A) = 0$: **keine Inverse!** (Matrix ist "singulär")
3. Tausche $a$ und $d$
4. Ändere Vorzeichen von $b$ und $c$
5. Teile alles durch $\\det(A)$

**Beispiel:** $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$

$\\det(A) = 24 - 14 = 10$

$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 0{,}6 & -0{,}7 \\\\ -0{,}2 & 0{,}4 \\end{pmatrix}$`,
      },
      { id: 'la-1-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-1-3-a' },
      { id: 'la-1-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-1-3-b' },
      { id: 'la-1-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-1-3-c' },
      { id: 'la-1-3-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-1-3-d' },
      { id: 'la-1-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-1-3-mastery' },
    ],
  },

  // ── Lesson 4: Determinanten ─────────────────────────────────────────────────
  {
    id: 'la-1-4', unitId: 'la-unit-1',
    title: 'Determinanten',
    order: 4, estimatedMinutes: 20,
    learningGoals: ['2x2- und 3x3-Determinanten berechnen', 'Regel von Sarrus anwenden', 'Geometrische Bedeutung der Determinante verstehen'],
    subGoals: [
      { label: '2x2: $\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$', examRelevance: 'hoch' },
      { label: '3x3 Regel von Sarrus: Haupt- minus Nebendiagonalen (nur 3x3!)', examRelevance: 'hoch' },
      { label: 'Laplace-Entwicklung: nach einer Zeile/Spalte, Vorzeichen-Schachbrett $(-1)^{i+j}$', examRelevance: 'hoch' },
      { label: 'Determinanten-Regeln: $\\det(AB) = \\det A \\cdot \\det B$, $\\det A^T = \\det A$', examRelevance: 'hoch' },
      { label: 'Geometrisch: $|\\det A|$ = Flächen-/Volumen-Skalierungsfaktor', examRelevance: 'hoch' },
      { label: '$\\det A = 0 \\iff$ Spalten linear abhängig, $A$ singulär, kein $A^{-1}$', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: 'la-1-5',
    steps: [
      {
        id: 'la-1-4-s1', type: 'explanation-intuitive', title: 'Was ist eine Determinante?',
        content: `Die Determinante ist eine **einzelne Zahl**, die man aus einer quadratischen Matrix berechnet. Aber was bedeutet sie?

**Geometrische Vorstellung:** Die Determinante misst, wie stark eine Matrix **Flächen** (2D) oder **Volumina** (3D) skaliert.

Stell dir das **Einheitsquadrat** vor (Seitenlängen 1, Fläche = 1). Wenn du es mit einer Matrix $A$ transformierst, hat das neue Parallelogramm die Fläche $|\\det(A)|$.

- $\\det(A) > 0$: Fläche wird skaliert, Orientierung bleibt gleich
- $\\det(A) < 0$: Fläche wird skaliert, Orientierung wird **umgekehrt** (gespiegelt)
- $\\det(A) = 0$: Alles wird auf eine Linie (oder einen Punkt) zusammengequetscht! Die Matrix ist **singulär** (nicht invertierbar).

**Maschinenbau-Bezug:** Wenn bei einer FEM-Berechnung $\\det(A) = 0$ rauskommt, hat das System keine eindeutige Lösung — z.B. fehlen Randbedingungen!`,
      },
      {
        id: 'la-1-4-s2', type: 'explanation-formal', title: 'Berechnung: 2x2 und 3x3',
        content: `**2x2-Determinante:**

$$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$

Merke: **Hauptdiagonale minus Nebendiagonale**.

**3x3-Determinante (Regel von Sarrus):**

$$\\det\\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix}$$

**Schritt 1:** Schreibe die ersten zwei Spalten nochmal rechts daneben.

**Schritt 2:** Bilde 3 Produkte entlang der Diagonalen von links oben nach rechts unten (Plus):
$+ a_1 b_2 c_3 + a_2 b_3 c_1 + a_3 b_1 c_2$

**Schritt 3:** Bilde 3 Produkte entlang der Diagonalen von rechts oben nach links unten (Minus):
$- a_3 b_2 c_1 - a_2 b_1 c_3 - a_1 b_3 c_2$

**Wichtige Eigenschaften:**
- $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$
- $\\det(A^T) = \\det(A)$
- $\\det(A) = 0 \\Leftrightarrow A$ ist singulär (nicht invertierbar)`,
      },
      { id: 'la-1-4-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-1-4-a' },
      { id: 'la-1-4-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-1-4-b' },
      { id: 'la-1-4-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-1-4-c' },
      { id: 'la-1-4-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-1-4-d' },
      { id: 'la-1-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-1-4-mastery' },
    ],
  },

  // ── Lesson 5: Eigenwerte und Eigenvektoren ──────────────────────────────────
  {
    id: 'la-1-5', unitId: 'la-unit-1',
    title: 'Eigenwerte und Eigenvektoren',
    order: 5, estimatedMinutes: 20,
    learningGoals: ['Eigenwertgleichung verstehen', 'Charakteristisches Polynom aufstellen', 'Eigenwerte für 2x2-Matrizen berechnen'],
    subGoals: [
      { label: 'Eigenwertgleichung: $A \\vec v = \\lambda \\vec v$ (Vektor bleibt in Richtung, nur gestreckt)', examRelevance: 'hoch' },
      { label: 'Charakteristisches Polynom: $\\det(A - \\lambda I) = 0$ → Eigenwerte $\\lambda_i$', examRelevance: 'hoch' },
      { label: 'Eigenvektor zu $\\lambda_i$: $(A - \\lambda_i I)\\vec v = 0$ lösen (Kern)', examRelevance: 'hoch' },
      { label: 'Spur und Determinante: $\\text{tr}(A) = \\sum \\lambda_i$, $\\det A = \\prod \\lambda_i$', examRelevance: 'mittel' },
      { label: 'Symmetrische Matrix: Eigenwerte reell, Eigenvektoren orthogonal (Hauptachsentransformation)', examRelevance: 'mittel' },
      { label: 'Technik-Anwendung: Eigenfrequenzen (Schwingungen), Hauptspannungen (Festigkeit)', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: 'la-2-1',
    steps: [
      {
        id: 'la-1-5-s1', type: 'explanation-intuitive', title: 'Vektoren, die ihre Richtung behalten',
        content: `Wenn du eine Matrix $A$ auf einen Vektor $\\vec{x}$ anwendest, passiert meistens etwas Kompliziertes: Der Vektor wird gedreht, gestreckt, verzerrt.

Aber es gibt **besondere Vektoren**, die ihre **Richtung behalten**! Sie werden nur gestreckt oder gestaucht:

$$A\\vec{x} = \\lambda\\vec{x}$$

- $\\vec{x}$ heißt **Eigenvektor** ("eigen" = "selbst" — er bleibt sich selbst treu)
- $\\lambda$ heißt **Eigenwert** (der Streckungsfaktor)

**Analogie:** Stell dir einen Ventilator vor, der Luft in verschiedene Richtungen bläst. Die meisten Papierstreifen flattern wild umher. Aber ein Streifen, der genau in der Rotationsachse hängt, wird nur nach vorne/hinten geblasen — er behält seine Richtung. Das ist ein "Eigenvektor" des Ventilators!

**Wozu?** Eigenwerte bestimmen:
- Ob eine Brücke schwingt (Eigenfrequenzen!)
- Ob ein Regelkreis stabil ist
- Die Hauptspannungsrichtungen eines Bauteils`,
      },
      {
        id: 'la-1-5-s2', type: 'explanation-formal', title: 'Berechnung der Eigenwerte',
        content: `**Schritt 1:** Eigengleichung umformen:
$$A\\vec{x} = \\lambda\\vec{x} \\quad \\Rightarrow \\quad (A - \\lambda I)\\vec{x} = \\vec{0}$$

**Schritt 2:** Damit $\\vec{x} \\neq \\vec{0}$ eine Lösung ist, muss gelten:
$$\\det(A - \\lambda I) = 0$$

Das ist das **charakteristische Polynom**.

**Schritt 3:** Beispiel für $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$:

$$\\det\\begin{pmatrix} 4-\\lambda & 1 \\\\ 2 & 3-\\lambda \\end{pmatrix} = (4-\\lambda)(3-\\lambda) - 2 = 0$$

$$\\lambda^2 - 7\\lambda + 10 = 0$$

$$\\lambda_{1,2} = \\frac{7 \\pm \\sqrt{49 - 40}}{2} = \\frac{7 \\pm 3}{2}$$

$$\\lambda_1 = 5, \\quad \\lambda_2 = 2$$

**Schritt 4: Eigenvektoren** bestimmen: Für jeden Eigenwert $\\lambda_i$ löse $(A - \\lambda_i I)\\vec{x} = \\vec{0}$.

**Nützliche Abkürzungen:**
- Summe der Eigenwerte = **Spur** der Matrix ($a_{11} + a_{22} + ...$)
- Produkt der Eigenwerte = **Determinante** der Matrix`,
      },
      {
        id: 'la-1-5-s-viz',
        type: 'visualization',
        title: 'Eigenvektoren geometrisch — gestrichelte Linien bleiben gleich',
        visualizationId: 'eigenvector-viz',
        params: {},
      },
      { id: 'la-1-5-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-1-5-a' },
      { id: 'la-1-5-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-1-5-b' },
      { id: 'la-1-5-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-1-5-c' },
      { id: 'la-1-5-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-1-5-mastery' },
    ],
  },
]

export const la_unit1 = {
  id: 'la-unit-1',
  title: 'Matrizen & Determinanten',
  order: 1,
  description: 'Matrizenrechnung, Transponierte, Inverse, Determinanten, Eigenwerte',
  unitGoals: [
    'Matrizen addieren, mit Skalaren multiplizieren und Produkt $A \\cdot B$ bilden (Dimensions-Check $m \\times n$ mal $n \\times p$)',
    'Transponierte $A^T$ und (falls existent) Inverse $A^{-1}$ für $2 \\times 2$-Matrizen direkt berechnen',
    'Determinanten mit Sarrus-Regel (3×3) und Entwicklungssatz nach Zeile/Spalte bestimmen',
    'Eigenwerte aus $\\det(A - \\lambda I) = 0$ und zugehörige Eigenvektoren aus $(A - \\lambda I)\\vec{v} = 0$ finden',
  ],
  lessons: lessons_la_u1,
  exercises: exercises_la_u1,
}
