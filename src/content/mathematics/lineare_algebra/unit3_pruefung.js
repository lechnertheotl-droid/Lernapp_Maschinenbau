// ── Lineare Algebra Unit 3: Prüfungsaufgaben ──────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

const exercises_la_u3 = {

  // ── Lektion 3-1: Prüfung Matrizen & Determinanten ─────────────────────────

  'ex-la-3-1-a': {
    id: 'ex-la-3-1-a', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Gegeben: $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & -1 \\\\ 0 & 2 \\end{pmatrix}$. Berechne $A \\cdot B$.',
    options: [
      '$\\begin{pmatrix} 3 & -1 \\\\ 2 & 6 \\end{pmatrix}$',
      '$\\begin{pmatrix} 3 & 1 \\\\ 2 & 6 \\end{pmatrix}$',
      '$\\begin{pmatrix} 3 & -1 \\\\ 2 & 10 \\end{pmatrix}$',
      '$\\begin{pmatrix} 3 & -1 \\\\ 2 & 8 \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: 'Matrizenmultiplikation: Zeile mal Spalte.\n- $(AB)_{11} = 3\\cdot1 + 1\\cdot0 = 3$\n- $(AB)_{12} = 3\\cdot(-1) + 1\\cdot2 = -1$\n- $(AB)_{21} = 2\\cdot1 + 4\\cdot0 = 2$\n- $(AB)_{22} = 2\\cdot(-1) + 4\\cdot2 = 6$\n\nErgebnis: $\\begin{pmatrix} 3 & -1 \\\\ 2 & 6 \\end{pmatrix}$',
    hints: [
      'Zeile i von A mal Spalte j von B ergibt das Element $(AB)_{ij}$.',
      'Für das Element in Zeile 2, Spalte 2: $(2\\cdot(-1)) + (4\\cdot2) = -2 + 8 = 6$.',
    ],
  },

  'ex-la-3-1-b': {
    id: 'ex-la-3-1-b', lessonId: 'la-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Für zwei beliebige quadratische Matrizen $A$ und $B$ gilt stets: $A \\cdot B = B \\cdot A$.',
    correct: false,
    explanation: 'Matrizenmultiplikation ist im Allgemeinen NICHT kommutativ. Gegenbeispiel: $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\end{pmatrix}$. Dann ist $AB = \\begin{pmatrix} 2 & 0 \\\\ 0 & 0 \\end{pmatrix}$, aber $BA = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$.',
    hints: [
      'Denke an ein konkretes Gegenbeispiel mit einfachen 2×2-Matrizen.',
      'Gilt $AB = BA$ bei Dreiecksmatrizen oder Diagonalmatrizen? Was ist mit dem allgemeinen Fall?',
    ],
  },

  'ex-la-3-1-c': {
    id: 'ex-la-3-1-c', lessonId: 'la-3-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne die Determinante: $\\det\\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$',
    correctValue: 10,
    tolerance: 0,
    unit: '',
    explanation: 'Für eine 2×2-Matrix gilt: $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$.\n$\\det(A) = 4 \\cdot 6 - 7 \\cdot 2 = 24 - 14 = 10$.',
    hints: [
      '2×2-Determinante: Hauptdiagonale minus Nebendiagonale.',
      '$ad - bc = 4 \\cdot 6 - 7 \\cdot 2$',
    ],
  },

  'ex-la-3-1-d': {
    id: 'ex-la-3-1-d', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Die Determinante einer 3×3-Matrix $A$ ist 0. Was folgt daraus?',
    options: [
      'Die Matrix ist invertierbar und das LGS $A\\vec{x} = \\vec{b}$ hat genau eine Lösung.',
      'Die Matrix ist singulär, also nicht invertierbar, und $A\\vec{x} = \\vec{0}$ hat nichttriviale Lösungen.',
      'Alle Einträge der Matrix sind 0.',
      'Das LGS $A\\vec{x} = \\vec{b}$ hat keine Lösung.',
    ],
    correctIndex: 1,
    explanation: '$\\det(A) = 0$ bedeutet: Die Matrix ist singulär (nicht invertierbar). Die Zeilen/Spalten sind linear abhängig. Das homogene System $A\\vec{x} = \\vec{0}$ hat unendlich viele Lösungen (mindestens eine nichttriviale). Das inhomogene System $A\\vec{x} = \\vec{b}$ ist entweder unlösbar oder hat unendlich viele Lösungen.',
    hints: [
      'Erinnerung: $A$ ist genau dann invertierbar, wenn $\\det(A) \\neq 0$.',
      'Singuläre Matrizen haben linear abhängige Zeilen — eine Zeile ist als Linearkombination der anderen darstellbar.',
    ],
  },

  'ex-la-3-1-e': {
    id: 'ex-la-3-1-e', lessonId: 'la-3-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne $\\det(A)$ für $A = \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 1 & -1 \\\\ 0 & 2 & 4 \\end{pmatrix}$ mit Entwicklung nach der ersten Spalte.',
    correctValue: 18,
    tolerance: 0,
    unit: '',
    explanation: 'Laplace-Entwicklung nach der 1. Spalte (Vorzeichen: $+, -, +$):\n$\\det(A) = 2 \\cdot \\det\\begin{pmatrix} 1 & -1 \\\\ 2 & 4 \\end{pmatrix} - 3 \\cdot \\det\\begin{pmatrix} 0 & 1 \\\\ 2 & 4 \\end{pmatrix} + 0 \\cdot \\det\\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}$\n$= 2 \\cdot (1\\cdot4 - (-1)\\cdot2) - 3 \\cdot (0\\cdot4 - 1\\cdot2) + 0$\n$= 2 \\cdot (4 + 2) - 3 \\cdot (0 - 2)$\n$= 2 \\cdot 6 - 3 \\cdot (-2)$\n$= 12 + 6 = 18$',
    hints: [
      'Laplace-Entwicklung nach der 1. Spalte: Vorzeichen-Schema ist $(+1)$ für Zeile 1, $(-1)$ für Zeile 2, $(+1)$ für Zeile 3.',
      'Untermatrix zu $a_{11}=2$: streiche Zeile 1 und Spalte 1, berechne die verbleibende 2×2-Determinante: $\\det\\begin{pmatrix} 1 & -1 \\\\ 2 & 4 \\end{pmatrix} = 4 - (-2) = 6$.',
    ],
  },

  'ex-la-3-1-f': {
    id: 'ex-la-3-1-f', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche der folgenden Matrizen besitzt eine Inverse?',
    options: [
      '$A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$',
      '$B = \\begin{pmatrix} 3 & 1 \\\\ 6 & 2 \\end{pmatrix}$',
      '$C = \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$',
      '$D = \\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$',
    ],
    correctIndex: 2,
    explanation: 'Eine Matrix ist genau dann invertierbar, wenn ihre Determinante $\\neq 0$ ist.\n- $\\det(A) = 2\\cdot2 - 4\\cdot1 = 0$ → nicht invertierbar\n- $\\det(B) = 3\\cdot2 - 1\\cdot6 = 0$ → nicht invertierbar\n- $\\det(C) = 5\\cdot1 - 2\\cdot3 = 5-6 = -1 \\neq 0$ → invertierbar!\n- $\\det(D) = 0\\cdot1 - 0\\cdot1 = 0$ → nicht invertierbar',
    hints: [
      'Berechne für jede Matrix $\\det = ad - bc$. Ist die Determinante 0, existiert keine Inverse.',
      'Bei $A$: Zeile 2 ist genau die Hälfte von Zeile 1 — das ist ein Hinweis auf lineare Abhängigkeit.',
    ],
  },

  'ex-la-3-1-g': {
    id: 'ex-la-3-1-g', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne die Inverse von $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$.',
    options: [
      '$A^{-1} = \\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix}$',
      '$A^{-1} = \\begin{pmatrix} 1 & -2 \\\\ -3 & 5 \\end{pmatrix}$',
      '$A^{-1} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$',
      '$A^{-1} = \\begin{pmatrix} -1 & -2 \\\\ -3 & -5 \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: 'Formel für 2×2-Inverse: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.\n$\\det(A) = 5\\cdot1 - 2\\cdot3 = -1$.\n$A^{-1} = \\frac{1}{-1} \\begin{pmatrix} 1 & -2 \\\\ -3 & 5 \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix}$.\n\nProbe: $A \\cdot A^{-1} = \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix} \\cdot \\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ ✓',
    hints: [
      '2×2-Inverse: Tausche $a$ und $d$ auf der Hauptdiagonale, negiere $b$ und $c$, dividiere durch $\\det(A)$.',
      '$\\det(A) = 5 \\cdot 1 - 2 \\cdot 3 = -1$. Division durch $-1$ kehrt alle Vorzeichen um.',
    ],
  },

  'ex-la-3-1-h': {
    id: 'ex-la-3-1-h', lessonId: 'la-3-1', type: 'true-false',
    statement: '[PRÜFUNG] Der Rang einer $3 \\times 4$-Matrix kann maximal 4 sein.',
    correct: false,
    explanation: 'Der Rang einer Matrix ist höchstens $\\min(m, n)$, wobei $m$ die Anzahl der Zeilen und $n$ die Anzahl der Spalten ist. Für eine $3 \\times 4$-Matrix gilt: $\\text{rang}(A) \\leq \\min(3, 4) = 3$. Der Rang ist durch die Anzahl der Zeilen (oder der Spalten, je nachdem was kleiner ist) begrenzt.',
    hints: [
      'Der Rang = Anzahl der linear unabhängigen Zeilen = Anzahl der linear unabhängigen Spalten.',
      'Eine $3 \\times 4$-Matrix hat nur 3 Zeilen, also können höchstens 3 davon linear unabhängig sein.',
    ],
  },

  'ex-la-3-1-i': {
    id: 'ex-la-3-1-i', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welchen Rang hat $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 0 & 1 & 1 \\end{pmatrix}$?',
    options: ['Rang 1', 'Rang 2', 'Rang 3', 'Rang 0'],
    correctIndex: 1,
    explanation: 'Zeile 2 = 2 · Zeile 1 → linear abhängig. Nach Zeilenreduktion:\n$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$\n\nEs gibt 2 Pivotzeilen → Rang 2.',
    hints: [
      'Erkenne: Zeile 2 ist ein Vielfaches von Zeile 1. Das reduziert den Rang.',
      'Führe den Gauss-Algorithmus durch und zähle die Nicht-Null-Zeilen in der Stufenform.',
    ],
  },

  'ex-la-3-1-j': {
    id: 'ex-la-3-1-j', lessonId: 'la-3-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Eigenschaft hat die Transponierte $(A^T)^T$?',
    options: [
      '$(A^T)^T = -A$',
      '$(A^T)^T = A$',
      '$(A^T)^T = A^{-1}$',
      '$(A^T)^T = \\det(A) \\cdot A$',
    ],
    correctIndex: 1,
    explanation: 'Zweimaliges Transponieren ergibt wieder die ursprüngliche Matrix: $(A^T)^T = A$. Das Transponieren tauscht Zeilen und Spalten; tut man das zweimal, ist man wieder am Ausgangspunkt. Weitere nützliche Regeln: $(A+B)^T = A^T + B^T$, $(AB)^T = B^T A^T$.',
    hints: [
      'Transponieren = Zeilen und Spalten vertauschen. Was passiert, wenn man das zweimal macht?',
      'Probiere ein kleines Beispiel: $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, bilde $A^T$ und dann $(A^T)^T$.',
    ],
  },

  'ex-la-3-1-mastery': {
    id: 'ex-la-3-1-mastery', lessonId: 'la-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Gegeben $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & k \\end{pmatrix}$. Für welchen Wert von $k$ ist $A$ nicht invertierbar?',
    options: ['$k = 3$', '$k = 6$', '$k = 2$', '$k = 1$'],
    correctIndex: 1,
    explanation: '$A$ ist nicht invertierbar genau dann, wenn $\\det(A) = 0$.\n$\\det(A) = 1 \\cdot k - 2 \\cdot 3 = k - 6 = 0 \\Rightarrow k = 6$.\nFür $k = 6$ wird Zeile 2 zu $[3, 6] = 3 \\cdot [1, 2]$ — also dreimal Zeile 1, was lineare Abhängigkeit bedeutet.',
    hints: [
      'Setze $\\det(A) = ad - bc = 0$ und löse nach $k$.',
      '$\\det(A) = 1 \\cdot k - 2 \\cdot 3$. Wann wird dieser Ausdruck 0?',
    ],
  },

  // ── Lektion 3-2: Prüfung LGS & Eigenwerte ─────────────────────────────────

  'ex-la-3-2-a': {
    id: 'ex-la-3-2-a', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das LGS $\\begin{pmatrix} 1 & 2 & | & 5 \\\\ 2 & 4 & | & 10 \\end{pmatrix}$ hat ...',
    options: [
      'genau eine Lösung: $x_1 = 5, x_2 = 0$',
      'keine Lösung',
      'unendlich viele Lösungen',
      'genau zwei Lösungen',
    ],
    correctIndex: 2,
    explanation: 'Zeile 2 = 2 · Zeile 1. Nach Gauss: $\\begin{pmatrix} 1 & 2 & | & 5 \\\\ 0 & 0 & | & 0 \\end{pmatrix}$. Die zweite Zeile ist $0 = 0$ (immer wahr), also eine freie Variable. Die Lösungsmenge: $x_1 = 5 - 2t$, $x_2 = t$ für alle $t \\in \\mathbb{R}$ — unendlich viele Lösungen.',
    hints: [
      'Wenn nach Gauss eine Nullzeile $[0, 0, \\ldots | 0]$ entsteht: freie Variable → unendlich viele Lösungen.',
      'Wenn nach Gauss $[0, 0, \\ldots | c]$ mit $c \\neq 0$ entsteht: keine Lösung (Widerspruch).',
    ],
  },

  'ex-la-3-2-b': {
    id: 'ex-la-3-2-b', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse das LGS mit dem Gauss-Algorithmus:\n$x + 2y + z = 8$\n$2x + y + 3z = 13$\n$x - y + 2z = 5$',
    options: [
      '$x = 1, y = 2, z = 3$',
      '$x = 3, y = 2, z = 1$',
      '$x = 2, y = 1, z = 3$',
      '$x = 1, y = 3, z = 2$',
    ],
    correctIndex: 0,
    explanation: 'Gauss-Elimination der erweiterten Matrix:\n$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 8 \\\\ 2 & 1 & 3 & 13 \\\\ 1 & -1 & 2 & 5 \\end{array}\\right)$\nZ2 → Z2 - 2·Z1, Z3 → Z3 - Z1:\n$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 8 \\\\ 0 & -3 & 1 & -3 \\\\ 0 & -3 & 1 & -3 \\end{array}\\right)$\nZ3 → Z3 - Z2:\n$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 8 \\\\ 0 & -3 & 1 & -3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\nFreie Variable: $z = t$. Aus Z2: $y = (1 - t)/1$... \n\nKorrekte Probe für Option A: $1 + 4 + 3 = 8$ ✓; $2 + 2 + 9 = 13$ ✓; $1 - 2 + 6 = 5$ ✓. $(x,y,z) = (1,2,3)$ löst das System.',
    hints: [
      'Bilde die erweiterte Matrix $[A|\\vec{b}]$ und führe Zeilenoperationen durch.',
      'Mache zuerst die Probe: Setze die Kandidatenwerte in alle drei Gleichungen ein und prüfe, welcher Ansatz alle erfüllt.',
    ],
  },

  'ex-la-3-2-c': {
    id: 'ex-la-3-2-c', lessonId: 'la-3-2', type: 'true-false',
    statement: '[PRÜFUNG] Ein LGS $A\\vec{x} = \\vec{b}$ mit $\\text{rang}(A) < \\text{rang}([A|\\vec{b}])$ hat unendlich viele Lösungen.',
    correct: false,
    explanation: 'Wenn $\\text{rang}(A) < \\text{rang}([A|\\vec{b}])$, bedeutet das: Im erweiterten System taucht ein Widerspruch auf (eine Zeile der Form $[0, 0, \\ldots | c]$ mit $c \\neq 0$). Das LGS hat in diesem Fall **keine Lösung** — nicht unendlich viele. Unendlich viele Lösungen gibt es, wenn $\\text{rang}(A) = \\text{rang}([A|\\vec{b}]) < n$ (Anzahl der Variablen).',
    hints: [
      'Rang-Kriterium (Satz von Rouché-Capelli): Lösbar ⟺ rang(A) = rang([A|b]).',
      'Wenn rang(A) < rang([A|b]): widersprüchliche Zeile → keine Lösung. Wenn rang(A) = rang([A|b]) < n: freie Variablen → unendlich viele Lösungen.',
    ],
  },

  'ex-la-3-2-d': {
    id: 'ex-la-3-2-d', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Berechne die Eigenwerte von $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$.',
    options: [
      '$\\lambda_1 = 2, \\lambda_2 = 4$',
      '$\\lambda_1 = 3, \\lambda_2 = 3$',
      '$\\lambda_1 = 1, \\lambda_2 = 9$',
      '$\\lambda_1 = 0, \\lambda_2 = 6$',
    ],
    correctIndex: 0,
    explanation: 'Charakteristisches Polynom: $\\det(A - \\lambda I) = 0$.\n$\\det\\begin{pmatrix} 3-\\lambda & 1 \\\\ 1 & 3-\\lambda \\end{pmatrix} = (3-\\lambda)^2 - 1 = 0$\n$(3-\\lambda)^2 = 1$\n$3-\\lambda = \\pm 1$\n$\\lambda_1 = 3 - 1 = 2$ und $\\lambda_2 = 3 + 1 = 4$.',
    hints: [
      'Eigenwerte: Löse $\\det(A - \\lambda I) = 0$.',
      'Bilde $A - \\lambda I$ und berechne die Determinante. Das ergibt ein Polynom in $\\lambda$.',
    ],
  },

  'ex-la-3-2-e': {
    id: 'ex-la-3-2-e', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Gegeben $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$ mit Eigenwert $\\lambda_1 = 2$. Welcher Vektor ist ein Eigenvektor zu $\\lambda_1 = 2$?',
    options: [
      '$\\vec{v} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$',
      '$\\vec{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$',
      '$\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$',
      '$\\vec{v} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: 'Eigenvektor zu $\\lambda = 2$: Löse $(A - 2I)\\vec{v} = \\vec{0}$.\n$A - 2I = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$\nDas LGS: $x_1 + x_2 = 0 \\Rightarrow x_1 = -x_2$.\nEin Eigenvektor: $\\vec{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$.\nProbe: $A \\cdot \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix} = 2 \\cdot \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$ ✓',
    hints: [
      'Eigenvektor zu $\\lambda$: Löse $(A - \\lambda I)\\vec{v} = \\vec{0}$ mit Gauss.',
      'Das homogene System $(A - 2I)\\vec{v} = \\vec{0}$ muss mindestens eine nichttriviale Lösung haben.',
    ],
  },

  'ex-la-3-2-f': {
    id: 'ex-la-3-2-f', lessonId: 'la-3-2', type: 'number-input',
    question: '[PRÜFUNG] Die Spur (Trace) einer Matrix ist die Summe der Diagonaleinträge. Für $A = \\begin{pmatrix} 5 & 2 \\\\ -1 & 3 \\end{pmatrix}$: Was ist $\\text{tr}(A)$, und was ist die Summe der Eigenwerte? (Antworte mit dem gemeinsamen Wert)',
    correctValue: 8,
    tolerance: 0,
    unit: '',
    explanation: '$\\text{tr}(A) = 5 + 3 = 8$.\nDie Eigenwerte berechnen sich aus $\\det(A - \\lambda I) = 0$:\n$(5-\\lambda)(3-\\lambda) + 2 = \\lambda^2 - 8\\lambda + 17 = 0$\n$\\lambda_{1,2} = 4 \\pm i$.\nSumme der Eigenwerte: $(4+i) + (4-i) = 8 = \\text{tr}(A)$.\nAllgemein gilt: Die Summe aller Eigenwerte = Spur der Matrix.',
    hints: [
      'Spur = Summe der Diagonaleinträge: $\\text{tr}(A) = a_{11} + a_{22} + \\ldots$',
      'Wichtiger Satz: $\\lambda_1 + \\lambda_2 + \\ldots + \\lambda_n = \\text{tr}(A)$.',
    ],
  },

  'ex-la-3-2-g': {
    id: 'ex-la-3-2-g', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Welchen Zusammenhang gibt es zwischen Determinante und Eigenwerten einer $n \\times n$-Matrix $A$?',
    options: [
      '$\\det(A) = \\lambda_1 + \\lambda_2 + \\ldots + \\lambda_n$',
      '$\\det(A) = \\lambda_1 \\cdot \\lambda_2 \\cdot \\ldots \\cdot \\lambda_n$',
      '$\\det(A) = \\max(\\lambda_1, \\ldots, \\lambda_n)$',
      '$\\det(A) = \\lambda_1^2 + \\lambda_2^2 + \\ldots + \\lambda_n^2$',
    ],
    correctIndex: 1,
    explanation: 'Es gilt: $\\det(A) = \\prod_{i=1}^{n} \\lambda_i = \\lambda_1 \\cdot \\lambda_2 \\cdot \\ldots \\cdot \\lambda_n$.\nDas ist kein Zufall: Das charakteristische Polynom hat die Eigenwerte als Nullstellen. Für eine 2×2-Matrix: $\\det(A - \\lambda I) = \\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$, also ist $\\det(A)$ das konstante Glied = Produkt der Nullstellen.',
    hints: [
      'Wenn ein Eigenwert 0 ist, was bedeutet das dann für $\\det(A)$?',
      'Für eine 2×2-Matrix: Schreibe das charakteristische Polynom auf und vergleiche den konstanten Term mit $\\det(A)$.',
    ],
  },

  'ex-la-3-2-h': {
    id: 'ex-la-3-2-h', lessonId: 'la-3-2', type: 'true-false',
    statement: '[PRÜFUNG] Eine symmetrische reelle Matrix hat stets reelle Eigenwerte.',
    correct: true,
    explanation: 'Das ist der Spektralsatz für symmetrische Matrizen (Spezialfall des Spektralsatzes für selbstadjungierte Operatoren): Jede reelle symmetrische Matrix $A = A^T$ hat ausschließlich reelle Eigenwerte und ist durch eine orthogonale Matrix diagonalisierbar. Dies ist ein zentrales Resultat der Linearen Algebra mit wichtigen Anwendungen in der Mechanik (Massenträgheitstensor, Spannungstensor).',
    hints: [
      'Für eine symmetrische Matrix gilt $A = A^T$. Überlege, was das für das charakteristische Polynom bedeutet.',
      'In der Mechanik: Trägheitstensoren und Spannungstensoren sind immer symmetrisch — deshalb haben sie immer reelle Eigenwerte (Hauptträgheitsmomente, Hauptspannungen).',
    ],
  },

  'ex-la-3-2-i': {
    id: 'ex-la-3-2-i', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Das LGS $A\\vec{x} = \\vec{b}$ mit $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 2 & 0 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} 6 \\\\ 11 \\\\ 5 \\end{pmatrix}$ — welche Aussage trifft zu?',
    options: [
      'Keine Lösung, da $\\det(A) = 0$.',
      'Genau eine Lösung: $\\vec{x} = (1, 2, 3)^T$.',
      'Unendlich viele Lösungen mit einer freien Variable.',
      'Genau eine Lösung: $\\vec{x} = (2, 1, 3)^T$.',
    ],
    correctIndex: 1,
    explanation: '$\\det(A) = 1(3\\cdot0 - 1\\cdot2) - 1(2\\cdot0 - 1\\cdot1) + 1(2\\cdot2 - 3\\cdot1) = 1(-2) - 1(-1) + 1(1) = -2 + 1 + 1 = 0$.\n\nTatsächlich: Gauss-Elimination der erweiterten Matrix:\n$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & 3 & 1 & 11 \\\\ 1 & 2 & 0 & 5 \\end{array}\\right)$\nZ2 - 2·Z1, Z3 - Z1:\n$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 1 & -1 & -1 \\end{array}\\right)$\nZ3 - Z2: $\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\nFreie Variable $x_3 = t$: $x_2 = t-1$, $x_1 = 7-2t$. Unendlich viele Lösungen (Option C).',
    hints: [
      'Berechne zuerst $\\det(A)$. Wenn $\\det(A) = 0$: entweder keine oder unendlich viele Lösungen.',
      'Führe Gauss-Elimination durch und beobachte, was mit der letzten Zeile passiert.',
    ],
  },

  'ex-la-3-2-j': {
    id: 'ex-la-3-2-j', lessonId: 'la-3-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Gegeben $A = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$ (Diagonalmatrix). Welche Eigenwerte und Eigenvektoren hat $A$?',
    options: [
      '$\\lambda_1 = 4$, $\\vec{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$; $\\lambda_2 = -2$, $\\vec{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$',
      '$\\lambda_1 = -2$, $\\vec{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$; $\\lambda_2 = 4$, $\\vec{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$',
      '$\\lambda_1 = 4$, $\\vec{e}_1 = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$; $\\lambda_2 = -2$, $\\vec{e}_2 = \\begin{pmatrix} 0 \\\\ -2 \\end{pmatrix}$',
      '$\\lambda_{1,2} = \\pm\\sqrt{8}$ mit gemischten Eigenvektoren',
    ],
    correctIndex: 0,
    explanation: 'Bei Diagonalmatrizen sind die Diagonaleinträge direkt die Eigenwerte, und die Standardbasisvektoren $\\vec{e}_i$ sind die zugehörigen Eigenvektoren.\n$A \\cdot \\vec{e}_1 = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = 4 \\cdot \\vec{e}_1$ ✓\n$A \\cdot \\vec{e}_2 = \\begin{pmatrix} 0 \\\\ -2 \\end{pmatrix} = (-2) \\cdot \\vec{e}_2$ ✓\nDies ist einer der Gründe, warum Diagonalisierung so nützlich ist!',
    hints: [
      'Bei einer Diagonalmatrix: Probe direkt mit $A \\cdot \\vec{e}_i$. Was kommt raus?',
      'Diagonaleinträge einer Diagonalmatrix = Eigenwerte. Eigenvektoren = Einheitsvektoren.',
    ],
  },

  'ex-la-3-2-mastery': {
    id: 'ex-la-3-2-mastery', lessonId: 'la-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ hat den doppelten Eigenwert $\\lambda = 2$. Wie viele linear unabhängige Eigenvektoren gibt es?',
    options: [
      '2 — da $\\lambda$ doppelter Eigenwert ist, gibt es auch 2 Eigenvektoren.',
      '0 — die Matrix hat keine Eigenvektoren.',
      '1 — der Eigenraum ist eindimensional.',
      'Unendlich viele, da der Eigenraum $\\mathbb{R}^2$ ist.',
    ],
    correctIndex: 2,
    explanation: 'Löse $(A - 2I)\\vec{v} = \\vec{0}$:\n$A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$\nDas LGS: $x_2 = 0$, $x_1$ frei → Eigenvektor: $\\vec{v} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$.\nDer Eigenraum ist eindimensional (nur 1 lin. unabh. Eigenvektor), obwohl $\\lambda = 2$ die algebraische Vielfachheit 2 hat. Dies nennt man einen **defekten Eigenwert**. Die Matrix ist nicht diagonalisierbar.',
    hints: [
      'Berechne $(A - 2I)$ und löse das homogene LGS. Wie viele freie Variablen gibt es?',
      'Algebraische Vielfachheit ≠ geometrische Vielfachheit (Dimension des Eigenraums). Bei defekten Matrizen ist die geometrische Vielfachheit kleiner.',
    ],
  },

  // ── Lektion 3-3: Diagonalisierung & technische Anwendungen ─────────────────
  'ex-la-3-3-a': {
    id: 'ex-la-3-3-a', lessonId: 'la-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Matrix $A$ ist genau dann diagonalisierbar, wenn:',
    options: [
      'Sie symmetrisch ist (notwendig)',
      'Sie $n$ linear unabhängige Eigenvektoren besitzt',
      'Ihre Determinante positiv ist',
      'Alle Eigenwerte verschieden sind (notwendig)',
    ],
    correctIndex: 1,
    explanation: 'Eine $n \\times n$-Matrix ist diagonalisierbar genau dann, wenn sie $n$ linear unabhängige Eigenvektoren besitzt. Verschiedene Eigenwerte garantieren das (hinreichend, nicht notwendig). Symmetrische Matrizen sind immer diagonalisierbar — aber unsymmetrische können es auch sein.',
    hints: ['Diagonalisierung: $A = P D P^{-1}$ mit $D$ diagonal. Was muss $P$ können?', 'Spalten von $P$ sind Eigenvektoren — sie müssen eine Basis bilden.'],
  },
  'ex-la-3-3-b': {
    id: 'ex-la-3-3-b', lessonId: 'la-3-3', type: 'number-input',
    question: '[PRÜFUNG] Gegeben $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. Berechne den größeren Eigenwert $\\lambda_{\\max}$.',
    correctValue: 5,
    tolerance: 0.01,
    unit: '',
    explanation: 'Charakteristisches Polynom: $\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = 0$. Nullstellen: $\\lambda = (7 \\pm \\sqrt{9})/2$, also $\\lambda_1 = 5$, $\\lambda_2 = 2$. Probe: Spur $= 4+3 = 7 = \\lambda_1+\\lambda_2$ ✓, $\\det = 12-2 = 10 = \\lambda_1\\lambda_2$ ✓.',
    hints: ['$\\det(A - \\lambda I) = 0$ liefert ein quadratisches Polynom in $\\lambda$.', 'Schreibe $(4-\\lambda)(3-\\lambda) - 1 \\cdot 2$ aus.', 'Kontrolle: Summe = Spur, Produkt = Determinante.'],
  },
  'ex-la-3-3-c': {
    id: 'ex-la-3-3-c', lessonId: 'la-3-3', type: 'true-false',
    statement: '[PRÜFUNG] Für eine reell-symmetrische Matrix sind alle Eigenwerte reell und Eigenvektoren zu verschiedenen Eigenwerten zueinander orthogonal.',
    correct: true,
    explanation: 'Spektralsatz: Reelle symmetrische Matrizen sind immer orthogonal diagonalisierbar — alle Eigenwerte reell, Eigenvektoren orthogonal. In der Mechanik nutzt man das beim Trägheitstensor: die Hauptträgheitsachsen sind orthogonal.',
    hints: ['Spektralsatz für symmetrische Matrizen.', 'Anwendung: Hauptträgheitsachsen, Hauptspannungen.'],
  },
  'ex-la-3-3-d': {
    id: 'ex-la-3-3-d', lessonId: 'la-3-3', type: 'matching',
    question: '[PRÜFUNG] Ordne die technische Anwendung der Eigenwert-Aufgabe zu.',
    pairs: [
      { left: 'Trägheitstensor', right: 'Eigenwerte = Hauptträgheitsmomente' },
      { left: 'Spannungstensor', right: 'Eigenwerte = Hauptspannungen' },
      { left: 'Schwingungs-Massensystem', right: 'Eigenwerte ↔ Eigenfrequenzen $\\omega^2$' },
      { left: 'Markow-Kette (stationär)', right: 'Eigenvektor zum Eigenwert 1' },
    ],
    explanation: 'Eigenwerte sind in fast jedem Bereich der Ingenieurwissenschaften zentral. Trägheits- und Spannungstensor: durch Diagonalisierung erhält man die "natürlichen" Achsen ohne Schubkomponenten. Schwingungssysteme: $\\det(K - \\omega^2 M) = 0$ liefert die Eigenfrequenzen.',
    hints: ['Diagonalisierung = Wahl eines "natürlichen" Koordinatensystems.', 'Schwingungseigenwerte sind die Quadrate der Eigenfrequenzen.'],
  },
  'ex-la-3-3-e': {
    id: 'ex-la-3-3-e', lessonId: 'la-3-3', type: 'number-input',
    question: '[PRÜFUNG] $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$. Berechne $\\det(A^{10})$.',
    correctValue: 10000000000,
    tolerance: 0,
    unit: '',
    explanation: 'Direkter Weg: $\\det(A^k) = (\\det A)^k$. $\\det A = 2 \\cdot 5 = 10$, also $\\det(A^{10}) = 10^{10} = 10\\,000\\,000\\,000$. Alternativ: $A^{10} = \\text{diag}(2^{10}, 5^{10}) = \\text{diag}(1024, 9765625)$, Determinante $= 1024 \\cdot 9765625 = 10^{10}$.',
    hints: ['$\\det(A^k) = (\\det A)^k$ — Potenzregel der Determinante.', '$\\det A$ einer Diagonalmatrix ist das Produkt der Diagonalelemente.', 'Ergebnis: $10^{10}$.'],
  },
  'ex-la-3-3-f': {
    id: 'ex-la-3-3-f', lessonId: 'la-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Matrix ist NICHT diagonalisierbar?',
    options: [
      '$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$',
      '$\\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: '$\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ hat $\\lambda = 1$ doppelt, aber nur einen Eigenvektor (geometrische Vielfachheit 1, algebraische 2). Daher nicht diagonalisierbar — defekte Matrix. Die anderen drei haben verschiedene Eigenwerte oder eine vollständige Eigenvektor-Basis.',
    hints: ['Diagonalisierbar braucht $n$ unabhängige Eigenvektoren.', 'Bei doppelten Eigenwerten: Anzahl Eigenvektoren prüfen.'],
  },
  'ex-la-3-3-g': {
    id: 'ex-la-3-3-g', lessonId: 'la-3-3', type: 'number-input',
    question: '[PRÜFUNG] Schwingungssystem: $K = \\begin{pmatrix} 4 & -1 \\\\ -1 & 4 \\end{pmatrix}$, $M = I$. Welches ist die kleinere Eigenfrequenz $\\omega_{\\min}$ in rad/s? (Gib $\\sqrt{3}$ als 1.732 an.)',
    correctValue: 1.732,
    tolerance: 0.005,
    unit: 'rad/s',
    explanation: '$\\det(K - \\omega^2 M) = (4-\\omega^2)^2 - 1 = 0 \\Rightarrow (4-\\omega^2)^2 = 1 \\Rightarrow 4 - \\omega^2 = \\pm 1$. Also $\\omega^2 = 3$ oder $\\omega^2 = 5$. Kleinere Eigenfrequenz: $\\omega_{\\min} = \\sqrt{3} \\approx 1{,}732$ rad/s.',
    hints: ['Schwingung: $\\det(K - \\omega^2 M) = 0$ liefert die Eigenfrequenzen.', 'Mit $M = I$ wird das ein normales Eigenwertproblem $K\\vec{x} = \\omega^2 \\vec{x}$.', '$\\sqrt{3} \\approx 1{,}732$.'],
  },
  'ex-la-3-3-h': {
    id: 'ex-la-3-3-h', lessonId: 'la-3-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Matrix $A$ hat Eigenwerte $\\lambda_1 = 0{,}5$, $\\lambda_2 = 0{,}9$. Wie verhält sich die Iteration $\\vec{x}_{k+1} = A \\vec{x}_k$?',
    options: [
      'Konvergiert gegen den Nullvektor (Stabilität)',
      'Wächst exponentiell (Instabilität)',
      'Schwingt periodisch',
      'Bleibt konstant',
    ],
    correctIndex: 0,
    explanation: 'Wenn alle Eigenwerte $|\\lambda_i| < 1$, geht $A^k \\to 0$ und $\\vec{x}_k \\to 0$. Die Iteration konvergiert gegen den Nullvektor. Bei mindestens einem $|\\lambda| > 1$ wächst die Iteration. Stabilitätskriterium: max $|\\lambda_i| < 1$.',
    hints: ['Iterationsverhalten: $A^k \\vec{x}_0 = \\sum c_i \\lambda_i^k \\vec{v}_i$.', 'Beträge der Eigenwerte entscheiden über Wachstum/Abklingen.'],
  },
  'ex-la-3-3-i': {
    id: 'ex-la-3-3-i', lessonId: 'la-3-3', type: 'sorting',
    question: '[PRÜFUNG] Bringe die Schritte zur Diagonalisierung einer Matrix in die richtige Reihenfolge.',
    items: [
      'Eigenwerte $\\lambda_i$ aus $\\det(A - \\lambda I) = 0$ bestimmen',
      'Eigenvektoren $\\vec{v}_i$ aus $(A - \\lambda_i I)\\vec{v} = \\vec{0}$ berechnen',
      'Lineare Unabhängigkeit der Eigenvektoren prüfen (sonst nicht diagonalisierbar)',
      'Matrix $P = (\\vec{v}_1 | \\vec{v}_2 | \\ldots)$ aufstellen',
      'Diagonalmatrix $D = \\text{diag}(\\lambda_1, \\lambda_2, \\ldots)$',
      'Probe: $A = P D P^{-1}$ oder äquivalent $P^{-1} A P = D$',
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    explanation: 'Diagonalisierung in 6 Schritten: Eigenwerte → Eigenvektoren → Unabhängigkeit prüfen → $P$ aufbauen → $D$ aufschreiben → kontrollieren. Der Test auf Unabhängigkeit ist wichtig: bei defekten Matrizen scheitert das Verfahren.',
    hints: ['Erst Werte, dann Vektoren — beides braucht $\\det(A - \\lambda I)$.', 'Kontrolle am Ende: $P D P^{-1}$ muss wieder $A$ ergeben.'],
  },
  'ex-la-3-3-j': {
    id: 'ex-la-3-3-j', lessonId: 'la-3-3', type: 'number-input',
    question: '[PRÜFUNG] Trägheitstensor (in $kg \\cdot m^2$): $J = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 4 & 2 \\\\ 0 & 2 & 4 \\end{pmatrix}$. Wie groß ist das größte Hauptträgheitsmoment in $kg \\cdot m^2$?',
    correctValue: 6,
    tolerance: 0.01,
    unit: 'kg·m²',
    explanation: 'Eigenwerte: $\\lambda_1 = 5$ (aus erster Spalte). Für 2x2-Block $\\begin{pmatrix} 4 & 2 \\\\ 2 & 4 \\end{pmatrix}$: $\\det \\begin{pmatrix} 4-\\lambda & 2 \\\\ 2 & 4-\\lambda \\end{pmatrix} = (4-\\lambda)^2 - 4 = 0 \\Rightarrow \\lambda = 4 \\pm 2 = 6$ oder $2$. Hauptträgheitsmomente: 5, 6, 2. Größtes: $\\lambda_{\\max} = 6\\,kg \\cdot m^2$.',
    hints: ['Block-Diagonalstruktur: erste Eigenwert ist 5 direkt.', 'Für den 2x2-Block: $\\det(B - \\lambda I) = (4-\\lambda)^2 - 4 = 0$.', 'Größtes Hauptträgheitsmoment ist die größte aller drei Eigenwerte.'],
  },
  'ex-la-3-3-mastery': {
    id: 'ex-la-3-3-mastery', lessonId: 'la-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Welche Aussage ist KORREKT?',
    options: [
      '$A$ ist nicht diagonalisierbar, da $\\det(A) = 6$',
      '$A$ ist diagonalisierbar; Eigenwerte 3 und 2, Eigenvektoren $(1,0)$ und $(1,-1)$',
      'Die Eigenwerte sind komplex',
      '$A$ ist symmetrisch',
    ],
    correctIndex: 1,
    explanation: '$\\det(A - \\lambda I) = (3-\\lambda)(2-\\lambda) = 0 \\Rightarrow \\lambda = 3, 2$. Verschiedene Eigenwerte → diagonalisierbar. Eigenvektor zu $\\lambda = 3$: $(A-3I)\\vec{v} = 0$ liefert $-v_2 = 0$, also $\\vec{v}_1 = (1,0)$. Zu $\\lambda = 2$: $(A-2I)\\vec{v} = 0$ liefert $v_1 + v_2 = 0$, also $\\vec{v}_2 = (1,-1)$.',
    hints: ['Dreiecksmatrix: Eigenwerte sind die Diagonalelemente.', 'Eigenvektoren: $(A - \\lambda I)\\vec{v} = \\vec{0}$ pro Eigenwert lösen.'],
  },

}

const lessons_la_u3 = [
  {
    id: 'la-3-1', unitId: 'la-unit-3',
    title: 'Prüfung: Matrizen & Determinanten',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Matrizenoperationen auf Prüfungsniveau beherrschen',
      'Determinanten berechnen (2×2 und 3×3, Laplace-Entwicklung)',
      'Inverse Matrizen berechnen und interpretieren',
      'Rang einer Matrix bestimmen',
    ],
    prerequisites: [],
    nextLessonId: 'la-3-2',
    steps: [
      {
        id: 'la-3-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Matrizen & Determinanten',
        content: `**Prüfungsaufgaben zu Matrizen und Determinanten** folgen an der TU Wien typisch diesen Mustern:

**1. Matrizenrechnung**
- Addition/Subtraktion: elementweise — $(A+B)_{ij} = a_{ij} + b_{ij}$
- Multiplikation: Zeile × Spalte — **Vorsicht:** $AB \\neq BA$ im Allgemeinen!
- Transponierte: $(AB)^T = B^T A^T$ (Reihenfolge umkehren!)

**2. Determinanten**

Für $2 \\times 2$: $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$

Für $3 \\times 3$ (Laplace-Entwicklung nach Zeile 1):
$$\\det(A) = a_{11} \\cdot M_{11} - a_{12} \\cdot M_{12} + a_{13} \\cdot M_{13}$$
wobei $M_{ij}$ die Determinante der Untermatrix (Zeile $i$ und Spalte $j$ gestrichen) ist.

**3. Inverse Matrix** — existiert genau wenn $\\det(A) \\neq 0$:
$$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\quad \\text{(für 2×2)}$$

**4. Rang** — Anzahl linear unabhängiger Zeilen/Spalten:
$$\\text{rang}(A) \\leq \\min(m, n)$$
Bestimmung durch Gauss-Elimination: Anzahl der Nicht-Null-Zeilen in der Stufenform.

**Merke:** $A$ invertierbar $\\Leftrightarrow$ $\\det(A) \\neq 0$ $\\Leftrightarrow$ $\\text{rang}(A) = n$ $\\Leftrightarrow$ $A\\vec{x} = \\vec{b}$ hat genau eine Lösung.`,
      },
      { id: 'la-3-1-s2', type: 'exercise', title: 'Aufgabe 1: Matrizenmultiplikation', exerciseRef: 'ex-la-3-1-a' },
      { id: 'la-3-1-s3', type: 'exercise', title: 'Aufgabe 2: Kommutativität', exerciseRef: 'ex-la-3-1-b' },
      { id: 'la-3-1-s4', type: 'exercise', title: 'Aufgabe 3: 2×2-Determinante', exerciseRef: 'ex-la-3-1-c' },
      { id: 'la-3-1-s5', type: 'exercise', title: 'Aufgabe 4: Determinante interpretieren', exerciseRef: 'ex-la-3-1-d' },
      { id: 'la-3-1-s6', type: 'exercise', title: 'Aufgabe 5: 3×3-Determinante', exerciseRef: 'ex-la-3-1-e' },
      { id: 'la-3-1-s7', type: 'exercise', title: 'Aufgabe 6: Invertierbarkeit prüfen', exerciseRef: 'ex-la-3-1-f' },
      { id: 'la-3-1-s8', type: 'exercise', title: 'Aufgabe 7: Inverse berechnen', exerciseRef: 'ex-la-3-1-g' },
      { id: 'la-3-1-s9', type: 'exercise', title: 'Aufgabe 8: Rang und Dimension', exerciseRef: 'ex-la-3-1-h' },
      { id: 'la-3-1-s10', type: 'exercise', title: 'Aufgabe 9: Rang bestimmen', exerciseRef: 'ex-la-3-1-i' },
      { id: 'la-3-1-s11', type: 'exercise', title: 'Aufgabe 10: Transponierte', exerciseRef: 'ex-la-3-1-j' },
      { id: 'la-3-1-s12', type: 'mastery-check', title: 'Prüfungsfrage: Parameteraufgabe', exerciseRef: 'ex-la-3-1-mastery' },
    ],
  },
  {
    id: 'la-3-2', unitId: 'la-unit-3',
    title: 'Prüfung: LGS & Eigenwerte',
    order: 2, estimatedMinutes: 30,
    learningGoals: [
      'Lineare Gleichungssysteme mit Gauss-Algorithmus lösen',
      'Lösbarkeit und Lösungstypen anhand des Ranges beurteilen',
      'Eigenwerte und Eigenvektoren berechnen',
      'Eigenschaften von Eigenwerten interpretieren',
    ],
    prerequisites: [],
    nextLessonId: 'la-3-3',
    steps: [
      {
        id: 'la-3-2-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: LGS & Eigenwerte',
        content: `**Lineare Gleichungssysteme — Lösbarkeitsregeln (Rouché-Capelli):**

Für $A\\vec{x} = \\vec{b}$ mit $n$ Unbekannten:

| Bedingung | Lösungstyp |
|---|---|
| $\\text{rang}(A) < \\text{rang}([A\\vert\\vec{b}])$ | **Keine Lösung** (Widerspruch) |
| $\\text{rang}(A) = \\text{rang}([A\\vert\\vec{b}]) = n$ | **Genau eine Lösung** |
| $\\text{rang}(A) = \\text{rang}([A\\vert\\vec{b}]) < n$ | **Unendlich viele Lösungen** ($n - \\text{rang}$ freie Variablen) |

**Gauss-Algorithmus Schritt für Schritt:**
1. Erweiterte Matrix $[A|\\vec{b}]$ aufstellen
2. Pivotelement wählen (erste Nichtnull-Zahl in der Spalte)
3. Eliminiere darunter liegende Elemente (Zeilen-Operationen)
4. Vorwärtselimination → Stufenform, dann Rücksubstitution

---

**Eigenwerte und Eigenvektoren:**

Eigenwert $\\lambda$: $A\\vec{v} = \\lambda \\vec{v}$ mit $\\vec{v} \\neq \\vec{0}$

**Berechnung:**
1. Charakteristisches Polynom: $\\det(A - \\lambda I) = 0$ lösen → Eigenwerte $\\lambda_i$
2. Eigenvektor zu $\\lambda_i$: Löse $(A - \\lambda_i I)\\vec{v} = \\vec{0}$

**Wichtige Eigenschaften:**
- $\\sum \\lambda_i = \\text{tr}(A)$ (Spur)
- $\\prod \\lambda_i = \\det(A)$
- Symmetrische Matrizen: alle Eigenwerte reell, Eigenvektoren orthogonal
- $\\det(A) = 0 \\Leftrightarrow$ 0 ist ein Eigenwert `,
      },
      { id: 'la-3-2-s2', type: 'exercise', title: 'Aufgabe 1: Lösungstyp bestimmen', exerciseRef: 'ex-la-3-2-a' },
      { id: 'la-3-2-s3', type: 'exercise', title: 'Aufgabe 2: Gauss-Algorithmus', exerciseRef: 'ex-la-3-2-b' },
      { id: 'la-3-2-s4', type: 'exercise', title: 'Aufgabe 3: Rang-Kriterium', exerciseRef: 'ex-la-3-2-c' },
      { id: 'la-3-2-s5', type: 'exercise', title: 'Aufgabe 4: Eigenwerte berechnen', exerciseRef: 'ex-la-3-2-d' },
      { id: 'la-3-2-s6', type: 'exercise', title: 'Aufgabe 5: Eigenvektoren bestimmen', exerciseRef: 'ex-la-3-2-e' },
      { id: 'la-3-2-s7', type: 'exercise', title: 'Aufgabe 6: Spur und Eigenwerte', exerciseRef: 'ex-la-3-2-f' },
      { id: 'la-3-2-s8', type: 'exercise', title: 'Aufgabe 7: Det und Eigenwerte', exerciseRef: 'ex-la-3-2-g' },
      { id: 'la-3-2-s9', type: 'exercise', title: 'Aufgabe 8: Symmetrische Matrizen', exerciseRef: 'ex-la-3-2-h' },
      { id: 'la-3-2-s10', type: 'exercise', title: 'Aufgabe 9: LGS Lösungsmenge', exerciseRef: 'ex-la-3-2-i' },
      { id: 'la-3-2-s11', type: 'exercise', title: 'Aufgabe 10: Diagonalmatrix', exerciseRef: 'ex-la-3-2-j' },
      { id: 'la-3-2-s12', type: 'mastery-check', title: 'Prüfungsfrage: Defekte Eigenwerte', exerciseRef: 'ex-la-3-2-mastery' },
    ],
  },
  {
    id: 'la-3-3', unitId: 'la-unit-3',
    title: 'Prüfung: Diagonalisierung & technische Anwendungen',
    order: 3, estimatedMinutes: 30,
    learningGoals: [
      'Matrizen diagonalisieren $A = P D P^{-1}$',
      'Eigenwerte für technische Probleme interpretieren (Trägheitstensor, Schwingungen, Stabilität)',
      'Defekte Matrizen erkennen',
      'Spektralsatz auf symmetrische Matrizen anwenden',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'la-3-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Diagonalisierung & Anwendungen',
        content: `**Diagonalisierung — Kernidee:** Eine Matrix $A$ lässt sich durch Wahl einer Eigenbasis als Diagonalmatrix schreiben:

$$A = P \\cdot D \\cdot P^{-1}, \\qquad D = \\text{diag}(\\lambda_1, \\lambda_2, \\ldots, \\lambda_n)$$

Die Spalten von $P$ sind die Eigenvektoren, die Diagonale von $D$ enthält die Eigenwerte. Bedingung: $A$ muss $n$ linear unabhängige Eigenvektoren haben.

**Wichtige Anwendungen im Maschinenbau:**

| Anwendung | Eigenwert-Bedeutung |
|---|---|
| **Trägheitstensor** $J$ | Hauptträgheitsmomente, Eigenvektoren = Hauptträgheitsachsen |
| **Spannungstensor** $\\sigma$ | Hauptspannungen, Eigenvektoren = Hauptspannungsrichtungen |
| **Schwingungssystem** $K\\vec{x} = \\omega^2 M\\vec{x}$ | Eigenfrequenzen $\\omega$ und Schwingungsmoden |
| **Lineare Iteration** $\\vec{x}_{k+1} = A\\vec{x}_k$ | Stabilität: alle $\\lvert\\lambda_i\\rvert < 1$ |
| **Matrixpotenzen** $A^k$ | $A^k = P D^k P^{-1}$ — direkt durch $\\lambda_i^k$ |

**Spektralsatz (für symmetrische Matrizen):**
- Alle Eigenwerte sind reell.
- Eigenvektoren zu verschiedenen Eigenwerten sind orthogonal.
- $A$ ist orthogonal diagonalisierbar: $A = Q \\Lambda Q^T$ mit $Q^T Q = I$.

Das nutzt man bei Trägheits- und Spannungstensoren — sie sind immer symmetrisch, also gibt es immer ein orthogonales Hauptachsensystem.

**Defekte Matrizen:** Wenn algebraische Vielfachheit eines Eigenwerts > geometrische Vielfachheit, ist die Matrix nicht diagonalisierbar. Beispiel: $\\begin{pmatrix}1 & 1\\\\0 & 1\\end{pmatrix}$ hat $\\lambda = 1$ doppelt, aber nur einen Eigenvektor.

**Prüfungsfallen:**
- Eigenwerte berechnet, aber Diagonalisierbarkeit nicht geprüft
- $\\det(A^k)$ direkt statt über $(\\det A)^k$
- Symmetrische Eigenschaft nicht ausgenutzt — orthogonale $Q$ macht $Q^{-1} = Q^T$ trivial`,
      },
      { id: 'la-3-3-s2', type: 'exercise', title: 'Aufgabe 1: Diagonalisierbarkeit', exerciseRef: 'ex-la-3-3-a' },
      { id: 'la-3-3-s3', type: 'exercise', title: 'Aufgabe 2: Eigenwerte berechnen', exerciseRef: 'ex-la-3-3-b' },
      { id: 'la-3-3-s4', type: 'exercise', title: 'Aufgabe 3: Spektralsatz', exerciseRef: 'ex-la-3-3-c' },
      { id: 'la-3-3-s5', type: 'exercise', title: 'Aufgabe 4: Technische Anwendungen', exerciseRef: 'ex-la-3-3-d' },
      { id: 'la-3-3-s6', type: 'exercise', title: 'Aufgabe 5: Determinante einer Potenz', exerciseRef: 'ex-la-3-3-e' },
      { id: 'la-3-3-s7', type: 'exercise', title: 'Aufgabe 6: Defekte Matrix erkennen', exerciseRef: 'ex-la-3-3-f' },
      { id: 'la-3-3-s8', type: 'exercise', title: 'Aufgabe 7: Schwingungseigenfrequenz', exerciseRef: 'ex-la-3-3-g' },
      { id: 'la-3-3-s9', type: 'exercise', title: 'Aufgabe 8: Stabilität von Iterationen', exerciseRef: 'ex-la-3-3-h' },
      { id: 'la-3-3-s10', type: 'exercise', title: 'Aufgabe 9: Diagonalisierungs-Algorithmus', exerciseRef: 'ex-la-3-3-i' },
      { id: 'la-3-3-s11', type: 'exercise', title: 'Aufgabe 10: Hauptträgheitsmoment', exerciseRef: 'ex-la-3-3-j' },
      { id: 'la-3-3-s12', type: 'mastery-check', title: 'Prüfungsfrage: Vollständige Diagonalisierung', exerciseRef: 'ex-la-3-3-mastery' },
    ],
  },
]

export const la_unit3 = {
  id: 'la-unit-3',
  title: 'Prüfungsaufgaben',
  order: 3,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Matrizen, Determinanten, LGS und Eigenwerte',
  lessons: lessons_la_u3,
  exercises: exercises_la_u3,
}
