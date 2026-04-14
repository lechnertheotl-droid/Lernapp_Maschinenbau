// -- Lineare Algebra Unit 1: Matrizen & Determinanten --------------------------

export const exercises_la_u1 = {
  // ── Lesson 1: Was ist eine Matrix? ──────────────────────────────────────────
  'ex-la-1-1-a': {
    id: 'ex-la-1-1-a', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'Eine Matrix mit 3 Zeilen und 2 Spalten ist eine...',
    options: ['2x3-Matrix', '3x2-Matrix', '3x3-Matrix', '6x1-Matrix'],
    correctIndex: 1,
    explanation: 'Die Dimension einer Matrix wird immer als "Zeilen x Spalten" angegeben. 3 Zeilen und 2 Spalten ergibt eine 3x2-Matrix.',
    hints: ['Merke: Zeilen kommen immer zuerst, dann Spalten (m x n).'],
  },
  'ex-la-1-1-b': {
    id: 'ex-la-1-1-b', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'Welche Matrix ist die 3x3-Einheitsmatrix I?',
    options: [
      '[[1,1,1],[1,1,1],[1,1,1]]',
      '[[1,0,0],[0,1,0],[0,0,1]]',
      '[[0,0,0],[0,0,0],[0,0,0]]',
      '[[3,0,0],[0,3,0],[0,0,3]]',
    ],
    correctIndex: 1,
    explanation: 'Die Einheitsmatrix I hat Einsen auf der Hauptdiagonale und Nullen sonst. Sie ist das "neutrale Element" der Matrizenmultiplikation: A * I = A.',
    hints: ['Die Einheitsmatrix hat nur auf der Diagonale von links oben nach rechts unten den Wert 1.'],
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
    explanation: 'Bei einer Diagonalmatrix sind alle Einträge außerhalb der Hauptdiagonale gleich 0. Beispiel: [[5,0],[0,3]].',
    hints: ['Diagonal = nur auf der Diagonale passiert etwas.'],
  },
  'ex-la-1-1-d': {
    id: 'ex-la-1-1-d', lessonId: 'la-1-1', type: 'multiple-choice',
    question: 'A = [[2,5],[1,3]]. Welches Element ist a_{12}?',
    options: ['2', '5', '1', '3'],
    correctIndex: 1,
    explanation: '$a_{12}$ bedeutet: Zeile 1, Spalte 2. In der ersten Zeile [2,5] ist das zweite Element 5.',
    hints: ['Der erste Index gibt die Zeile an, der zweite die Spalte.'],
  },
  'ex-la-1-1-mastery': {
    id: 'ex-la-1-1-mastery', lessonId: 'la-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Aussage über die Nullmatrix 0 ist korrekt?',
    options: [
      'A + 0 = 0 für jede Matrix A',
      'A * 0 = A für jede Matrix A',
      'A + 0 = A für jede Matrix A gleicher Dimension',
      'Die Nullmatrix hat keine Dimension',
    ],
    correctIndex: 2,
    explanation: 'Die Nullmatrix ist das neutrale Element der Addition: A + 0 = A. Dabei müssen A und 0 die gleiche Dimension haben.',
    hints: ['Die Nullmatrix verhält sich bei der Addition wie die Zahl 0 bei normalen Zahlen.'],
  },

  // ── Lesson 2: Matrizenrechnung ──────────────────────────────────────────────
  'ex-la-1-2-a': {
    id: 'ex-la-1-2-a', lessonId: 'la-1-2', type: 'multiple-choice',
    question: 'A = [[1,2],[3,4]], B = [[5,6],[7,8]]. Was ist A + B?',
    options: [
      '[[6,8],[10,12]]',
      '[[5,12],[21,32]]',
      '[[6,8],[7,8]]',
      '[[1,2],[10,12]]',
    ],
    correctIndex: 0,
    explanation: 'Matrizen werden elementweise addiert: 1+5=6, 2+6=8, 3+7=10, 4+8=12. Also A+B = [[6,8],[10,12]].',
    hints: ['Jedes Element wird einzeln addiert: (A+B)_{ij} = a_{ij} + b_{ij}.'],
  },
  'ex-la-1-2-b': {
    id: 'ex-la-1-2-b', lessonId: 'la-1-2', type: 'multiple-choice',
    question: 'A = [[1,2],[3,4]]. Was ist 3*A?',
    options: [
      '[[3,2],[3,4]]',
      '[[3,6],[9,12]]',
      '[[4,5],[6,7]]',
      '[[1,2],[3,12]]',
    ],
    correctIndex: 1,
    explanation: 'Bei der Skalarmultiplikation wird jedes Element mit dem Skalar multipliziert: 3*1=3, 3*2=6, 3*3=9, 3*4=12.',
    hints: ['Jedes Element der Matrix wird mit der Zahl multipliziert.'],
  },
  'ex-la-1-2-c': {
    id: 'ex-la-1-2-c', lessonId: 'la-1-2', type: 'multiple-choice',
    question: 'Gilt für die Matrizenmultiplikation immer A*B = B*A?',
    options: [
      'Ja, die Multiplikation ist kommutativ',
      'Nein, im Allgemeinen gilt A*B != B*A',
      'Ja, aber nur für quadratische Matrizen',
      'Nein, Matrizen kann man nicht multiplizieren',
    ],
    correctIndex: 1,
    explanation: 'Die Matrizenmultiplikation ist NICHT kommutativ. Im Allgemeinen gilt A*B != B*A. Das ist einer der wichtigsten Unterschiede zu normalen Zahlen!',
    hints: ['Denke an die Reihenfolge: Zeile von A mal Spalte von B. Wenn du A und B vertauschst, ändert sich das Ergebnis.'],
  },
  'ex-la-1-2-d': {
    id: 'ex-la-1-2-d', lessonId: 'la-1-2', type: 'number-input',
    question: 'Berechne das Element $c_{11}$ von $C = A \\cdot B$ mit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$',
    correctAnswer: 19,
    tolerance: 0.01,
    unit: '',
    explanation: '$c_{11}$ = Zeile 1 von A mal Spalte 1 von B = $1 \\cdot 5 + 2 \\cdot 7 = 5 + 14 = 19$.',
    hints: ['Zeile 1 von A ist [1, 2]. Spalte 1 von B ist [5, 7]. Multipliziere paarweise und addiere.'],
  },
  'ex-la-1-2-e': {
    id: 'ex-la-1-2-e', lessonId: 'la-1-2', type: 'number-input',
    question: 'Berechne das Element $c_{22}$ von $C = A \\cdot B$ mit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ und $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$',
    correctAnswer: 50,
    tolerance: 0.01,
    unit: '',
    explanation: '$c_{22}$ = Zeile 2 von A mal Spalte 2 von B = $3 \\cdot 6 + 4 \\cdot 8 = 18 + 32 = 50$.',
    hints: ['Zeile 2 von A ist [3, 4]. Spalte 2 von B ist [6, 8]. Multipliziere paarweise und addiere.'],
  },
  'ex-la-1-2-mastery': {
    id: 'ex-la-1-2-mastery', lessonId: 'la-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] A ist eine 2x3-Matrix, B ist eine 3x4-Matrix. Welche Dimension hat A*B?',
    options: ['2x4', '3x3', '2x3', 'Multiplikation nicht möglich'],
    correctIndex: 0,
    explanation: 'Bei A*B müssen die "inneren" Dimensionen übereinstimmen (3=3, passt!). Das Ergebnis hat die "äußeren" Dimensionen: 2x4.',
    hints: ['(m x n) * (n x p) = (m x p). Die inneren Dimensionen müssen gleich sein.'],
  },

  // ── Lesson 3: Transponierte und Inverse ─────────────────────────────────────
  'ex-la-1-3-a': {
    id: 'ex-la-1-3-a', lessonId: 'la-1-3', type: 'multiple-choice',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Was ist $A^T$?',
    options: [
      '[[1,3],[2,4]]',
      '[[4,2],[3,1]]',
      '[[1,2],[3,4]]',
      '[[-1,-2],[-3,-4]]',
    ],
    correctIndex: 0,
    explanation: 'Beim Transponieren werden Zeilen und Spalten getauscht. Zeile 1 [1,2] wird zu Spalte 1, Zeile 2 [3,4] wird zu Spalte 2. Also $A^T = [[1,3],[2,4]]$.',
    hints: ['Transponieren = Zeilen werden zu Spalten (und umgekehrt). Element $a_{ij}$ wird zu $a_{ji}$.'],
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
    explanation: 'Die inverse Matrix ist das "Gegenstück" bei der Multiplikation: $A \\cdot A^{-1} = A^{-1} \\cdot A = I$ (Einheitsmatrix). Das ist wie $5 \\cdot \\frac{1}{5} = 1$ bei normalen Zahlen.',
    hints: ['Die Inverse "macht die Multiplikation rückgängig". Welches Ergebnis erwartest du, wenn du etwas mit seinem Kehrwert multiplizierst?'],
  },
  'ex-la-1-3-c': {
    id: 'ex-la-1-3-c', lessonId: 'la-1-3', type: 'number-input',
    question: 'Berechne die Determinante von $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$, die du für die Inverse brauchst: $\\det(A) = ad - bc$',
    correctAnswer: 10,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$.',
    hints: ['Für eine 2x2-Matrix [[a,b],[c,d]] ist det = a*d - b*c.'],
  },
  'ex-la-1-3-d': {
    id: 'ex-la-1-3-d', lessonId: 'la-1-3', type: 'multiple-choice',
    question: 'Welche Matrix hat KEINE Inverse?',
    options: [
      'Die Einheitsmatrix I',
      'Eine Matrix mit det(A) = 5',
      'Eine Matrix mit det(A) = 0',
      'Eine Diagonalmatrix mit Einträgen 2 und 3',
    ],
    correctIndex: 2,
    explanation: 'Eine Matrix ist genau dann nicht invertierbar (singulär), wenn ihre Determinante 0 ist. In der Formel $A^{-1} = \\frac{1}{\\det(A)} \\cdot ...$ würde man durch 0 teilen!',
    hints: ['Die Formel für die Inverse enthält $\\frac{1}{\\det(A)}$. Wann gibt es ein Problem?'],
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
    explanation: '$\\det(A) = 3 \\cdot 2 - 1 \\cdot 5 = 1$. Formel: $A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. Man tauscht a und d, und ändert das Vorzeichen von b und c.',
    hints: ['Formel für 2x2: $A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$'],
  },

  // ── Lesson 4: Determinanten ─────────────────────────────────────────────────
  'ex-la-1-4-a': {
    id: 'ex-la-1-4-a', lessonId: 'la-1-4', type: 'number-input',
    question: 'Berechne: $\\det\\begin{pmatrix} 3 & 8 \\\\ 4 & 6 \\end{pmatrix}$',
    correctAnswer: -14,
    tolerance: 0.01,
    unit: '',
    explanation: '$\\det = 3 \\cdot 6 - 8 \\cdot 4 = 18 - 32 = -14$.',
    hints: ['Formel für 2x2: det = a*d - b*c, also obere links mal untere rechts minus obere rechts mal untere links.'],
  },
  'ex-la-1-4-b': {
    id: 'ex-la-1-4-b', lessonId: 'la-1-4', type: 'multiple-choice',
    question: 'Was bedeutet $\\det(A) = 0$ geometrisch (im 2D-Fall)?',
    options: [
      'Die Spalten von A sind senkrecht zueinander',
      'Die Spalten von A sind linear abhängig (zeigen in die gleiche Richtung)',
      'Die Matrix A ist die Einheitsmatrix',
      'A hat nur positive Einträge',
    ],
    correctIndex: 1,
    explanation: 'Wenn $\\det(A) = 0$, sind die Spalten (oder Zeilen) linear abhängig. Geometrisch: Die Fläche/das Volumen wird auf 0 zusammengedrückt. Die Matrix "verliert eine Dimension".',
    hints: ['Die Determinante misst, wie stark eine Matrix Flächen/Volumina skaliert. Was passiert, wenn dieser Faktor 0 ist?'],
  },
  'ex-la-1-4-c': {
    id: 'ex-la-1-4-c', lessonId: 'la-1-4', type: 'number-input',
    question: 'Berechne mit der Regel von Sarrus: $\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$',
    correctAnswer: 0,
    tolerance: 0.01,
    unit: '',
    explanation: 'Sarrus: $(1 \\cdot 5 \\cdot 9 + 2 \\cdot 6 \\cdot 7 + 3 \\cdot 4 \\cdot 8) - (3 \\cdot 5 \\cdot 7 + 2 \\cdot 4 \\cdot 9 + 1 \\cdot 6 \\cdot 8)$ = $(45 + 84 + 96) - (105 + 72 + 48) = 225 - 225 = 0$. Die Zeilen sind linear abhängig!',
    hints: ['Regel von Sarrus: Schreibe die ersten zwei Spalten nochmal rechts daneben. Dann 3 Diagonalen von links oben nach rechts unten (Plus) und 3 Diagonalen von rechts oben nach links unten (Minus).'],
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
    explanation: 'Die Determinante ist multiplikativ: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$. Ausserdem gilt $\\det(A^T) = \\det(A)$.',
    hints: ['Die Determinante ist eine "multiplikative" Funktion. Was passiert bei einem Produkt?'],
  },
  'ex-la-1-4-mastery': {
    id: 'ex-la-1-4-mastery', lessonId: 'la-1-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: $\\det\\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 0 \\\\ 1 & 2 & 3 \\end{pmatrix}$',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Sarrus: $(2 \\cdot 1 \\cdot 3 + 0 \\cdot 0 \\cdot 1 + 1 \\cdot 3 \\cdot 2) - (1 \\cdot 1 \\cdot 1 + 0 \\cdot 3 \\cdot 3 + 2 \\cdot 0 \\cdot 2) = (6 + 0 + 6) - (1 + 0 + 0) = 12 - 11 = 1$.',
    hints: ['Verwende die Regel von Sarrus für 3x3-Determinanten.'],
  },

  // ── Lesson 5: Eigenwerte und Eigenvektoren ──────────────────────────────────
  'ex-la-1-5-a': {
    id: 'ex-la-1-5-a', lessonId: 'la-1-5', type: 'multiple-choice',
    question: 'Was bedeutet die Gleichung $A\\vec{x} = \\lambda\\vec{x}$?',
    options: [
      'Der Vektor $\\vec{x}$ wird durch A auf den Nullvektor abgebildet',
      'Der Vektor $\\vec{x}$ wird durch A nur gestreckt/gestaucht, aber nicht gedreht',
      'Die Matrix A hat keine Inverse',
      'Der Vektor $\\vec{x}$ ist immer der Nullvektor',
    ],
    correctIndex: 1,
    explanation: 'Ein Eigenvektor $\\vec{x}$ behält bei der Multiplikation mit A seine Richtung. Er wird nur um den Faktor $\\lambda$ (den Eigenwert) gestreckt oder gestaucht. Deshalb "eigen" = er bleibt sich selbst treu!',
    hints: ['Auf der linken Seite steht eine Matrix mal Vektor, auf der rechten steht eine Zahl mal der gleiche Vektor. Der Vektor ändert also nur seine Länge, nicht seine Richtung.'],
  },
  'ex-la-1-5-b': {
    id: 'ex-la-1-5-b', lessonId: 'la-1-5', type: 'multiple-choice',
    question: 'Wie findet man die Eigenwerte einer Matrix A?',
    options: [
      'Man berechnet $A^{-1}$',
      'Man löst $\\det(A - \\lambda I) = 0$',
      'Man transponiert A',
      'Man berechnet $\\det(A) = 0$',
    ],
    correctIndex: 1,
    explanation: 'Die Eigenwerte findet man aus dem charakteristischen Polynom: $\\det(A - \\lambda I) = 0$. Die Lösungen dieser Gleichung sind die Eigenwerte $\\lambda$.',
    hints: ['Man bringt die Eigengleichung in die Form $(A - \\lambda I)\\vec{x} = 0$. Damit das eine nichttriviale Lösung hat, muss die Determinante 0 sein.'],
  },
  'ex-la-1-5-c': {
    id: 'ex-la-1-5-c', lessonId: 'la-1-5', type: 'number-input',
    question: 'Berechne die Summe der Eigenwerte von $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. (Tipp: Die Summe der Eigenwerte = Spur der Matrix = Summe der Diagonalelemente)',
    correctAnswer: 7,
    tolerance: 0.01,
    unit: '',
    explanation: 'Die Spur (Summe der Diagonalelemente) ist $4 + 3 = 7$. Man kann auch rechnen: $\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = 0$, also $\\lambda_1 = 5, \\lambda_2 = 2$, Summe $= 7$.',
    hints: ['Die Summe der Eigenwerte ist gleich der Spur der Matrix (Summe der Diagonalelemente). Das ist viel einfacher als das char. Polynom!'],
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
    hints: ['A ist eine obere Dreiecksmatrix. Bei Dreiecksmatrizen sind die Eigenwerte die Diagonalelemente.'],
  },
}

const lessons_la_u1 = [
  // ── Lesson 1: Was ist eine Matrix? ──────────────────────────────────────────
  {
    id: 'la-1-1', unitId: 'la-unit-1',
    title: 'Was ist eine Matrix?',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Matrizen als Zahlentabellen verstehen', 'Dimension und Notation kennen', 'Spezialmatrizen erkennen'],
    prerequisites: [],
    nextLessonId: 'la-1-2',
    steps: [
      {
        id: 'la-1-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Matrix?',
        content: `Stell dir eine **Tabelle mit Zahlen** vor -- das ist im Grunde schon eine Matrix!

**Alltagsbeispiel:** Ein Unternehmen produziert 3 Produkte in 2 Fabriken. Die Produktionszahlen pro Monat:

|  | Produkt 1 | Produkt 2 | Produkt 3 |
|--|-----------|-----------|-----------|
| Fabrik 1 | 100 | 200 | 150 |
| Fabrik 2 | 80 | 300 | 120 |

Diese Tabelle ist eine **2x3-Matrix** (2 Zeilen, 3 Spalten):

$$A = \\begin{pmatrix} 100 & 200 & 150 \\\\ 80 & 300 & 120 \\end{pmatrix}$$

**Warum braucht man Matrizen im Maschinenbau?** Überall! Spannungstensoren, Trägheitsmomente, Steifigkeitsmatrizen in der FEM, Drehmatrizen in der Robotik -- Matrizen sind DAS Werkzeug der Ingenieurmathematik.`,
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
        content: `Die Matrizenmultiplikation ist die wichtigste Operation -- aber auch die ungewöhnlichste!

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
    prerequisites: [],
    nextLessonId: 'la-1-4',
    steps: [
      {
        id: 'la-1-3-s1', type: 'explanation-intuitive', title: 'Transponierte: Zeilen und Spalten tauschen',
        content: `**Die Transponierte $A^T$** einer Matrix entsteht, indem man Zeilen und Spalten vertauscht.

Stell es dir wie ein **Spiegeln an der Diagonale** vor:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

Die erste Zeile [1, 2, 3] wird zur ersten Spalte. Die zweite Zeile [4, 5, 6] wird zur zweiten Spalte.

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
4. Aendere Vorzeichen von $b$ und $c$
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

**Maschinenbau-Bezug:** Wenn bei einer FEM-Berechnung $\\det(A) = 0$ rauskommt, hat das System keine eindeutige Lösung -- z.B. fehlen Randbedingungen!`,
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
    prerequisites: [],
    nextLessonId: 'la-2-1',
    steps: [
      {
        id: 'la-1-5-s1', type: 'explanation-intuitive', title: 'Vektoren, die ihre Richtung behälten',
        content: `Wenn du eine Matrix $A$ auf einen Vektor $\\vec{x}$ anwendest, passiert meistens etwas Kompliziertes: Der Vektor wird gedreht, gestreckt, verzerrt.

Aber es gibt **besondere Vektoren**, die ihre **Richtung behälten**! Sie werden nur gestreckt oder gestaucht:

$$A\\vec{x} = \\lambda\\vec{x}$$

- $\\vec{x}$ heißt **Eigenvektor** ("eigen" = "selbst" -- er bleibt sich selbst treu)
- $\\lambda$ heißt **Eigenwert** (der Streckungsfaktor)

**Analogie:** Stell dir einen Ventilator vor, der Luft in verschiedene Richtungen bläst. Die meisten Papierstreifen flattern wild umher. Aber ein Streifen, der genau in der Rotationsachse hängt, wird nur nach vorne/hinten geblasen -- er behält seine Richtung. Das ist ein "Eigenvektor" des Ventilators!

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
  lessons: lessons_la_u1,
  exercises: exercises_la_u1,
}
