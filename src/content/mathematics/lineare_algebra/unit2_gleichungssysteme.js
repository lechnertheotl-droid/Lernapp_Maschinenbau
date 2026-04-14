// -- Lineare Algebra Unit 2: Lineare Gleichungssysteme -------------------------

export const exercises_la_u2 = {
  // ── Lesson 1: LGS in Matrixform ────────────────────────────────────────────
  'ex-la-2-1-a': {
    id: 'ex-la-2-1-a', lessonId: 'la-2-1', type: 'multiple-choice',
    question: 'Das Gleichungssystem $2x + 3y = 7$ und $x - y = 1$ kann man schreiben als $A\\vec{x} = \\vec{b}$. Wie sieht die Koeffizientenmatrix $A$ aus?',
    options: [
      '$\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 2 & 1 \\\\ 3 & -1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 7 & 1 \\\\ 2 & 3 \\end{pmatrix}$',
      '$\\begin{pmatrix} x & y \\\\ x & y \\end{pmatrix}$',
    ],
    correctIndex: 0,
    explanation: 'Die Koeffizienten der Variablen werden zeilenweise in die Matrix eingetragen. Gleichung 1: 2x + 3y, also [2, 3]. Gleichung 2: x - y, also [1, -1].',
    hints: ['Jede Zeile der Matrix entspricht einer Gleichung. Die Koeffizienten vor x und y werden der Reihe nach eingetragen.'],
  },
  'ex-la-2-1-b': {
    id: 'ex-la-2-1-b', lessonId: 'la-2-1', type: 'multiple-choice',
    question: 'Was ist die erweiterte Koeffizientenmatrix $[A|\\vec{b}]$ fuer $2x + 3y = 7$ und $x - y = 1$?',
    options: [
      '$\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}$',
      '$\\left(\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right)$',
      '$\\left(\\begin{array}{cc|c} 7 & 3 & 2 \\\\ 1 & -1 & 1 \\end{array}\\right)$',
      '$\\begin{pmatrix} 2 & 3 & 7 \\\\ 1 & -1 & 0 \\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: 'Die erweiterte Koeffizientenmatrix haengt den Vektor $\\vec{b}$ (die rechte Seite) als zusaetzliche Spalte an die Matrix $A$ an. Der Strich | trennt $A$ von $\\vec{b}$.',
    hints: ['Die erweiterte Matrix = Koeffizientenmatrix | rechte Seite. Alle Informationen des LGS in einer Tabelle.'],
  },
  'ex-la-2-1-c': {
    id: 'ex-la-2-1-c', lessonId: 'la-2-1', type: 'multiple-choice',
    question: 'Welchen Vorteil hat die Matrixschreibweise $A\\vec{x} = \\vec{b}$ gegenueber der normalen Schreibweise?',
    options: [
      'Sie ist nur eine andere Notation ohne Vorteil',
      'Man kann systematische Loesungsalgorithmen anwenden und Existenz/Eindeutigkeit der Loesung untersuchen',
      'Sie funktioniert nur fuer 2 Gleichungen',
      'Die Loesung ist immer $\\vec{x} = A \\cdot \\vec{b}$',
    ],
    correctIndex: 1,
    explanation: 'Die Matrixschreibweise erlaubt systematische Algorithmen (Gauss!) und tiefe Einsichten: z.B. ob Loesungen existieren, ob sie eindeutig sind, und wie die Loesungsmenge aussieht.',
    hints: ['Denke an grosse Systeme mit 100 Gleichungen. Wuerdest du die per Hand loesen wollen?'],
  },
  'ex-la-2-1-mastery': {
    id: 'ex-la-2-1-mastery', lessonId: 'la-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRUEFUNG] Das System $3x - 2y + z = 5$, $x + 4y - 2z = 3$, $2x + y + 3z = 8$ hat die erweiterte Matrix...',
    options: [
      '$\\left(\\begin{array}{ccc|c} 3 & -2 & 1 & 5 \\\\ 1 & 4 & -2 & 3 \\\\ 2 & 1 & 3 & 8 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 3 & 1 & 2 & 5 \\\\ -2 & 4 & 1 & 3 \\\\ 1 & -2 & 3 & 8 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 5 & -2 & 1 & 3 \\\\ 3 & 4 & -2 & 1 \\\\ 8 & 1 & 3 & 2 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 3 & -2 & 1 & 0 \\\\ 1 & 4 & -2 & 0 \\\\ 2 & 1 & 3 & 0 \\end{array}\\right)$',
    ],
    correctIndex: 0,
    explanation: 'Jede Zeile entspricht einer Gleichung. Die Koeffizienten kommen in der Reihenfolge x, y, z, und die rechte Seite nach dem Strich.',
    hints: ['Zeile fuer Zeile: Koeffizienten vor x, y, z ablesen und die rechte Seite hinter den Strich schreiben.'],
  },

  // ── Lesson 2: Gauss-Algorithmus ─────────────────────────────────────────────
  'ex-la-2-2-a': {
    id: 'ex-la-2-2-a', lessonId: 'la-2-2', type: 'multiple-choice',
    question: 'Welche der folgenden Operationen ist beim Gauss-Algorithmus NICHT erlaubt?',
    options: [
      'Zwei Zeilen vertauschen',
      'Eine Zeile mit einer Zahl != 0 multiplizieren',
      'Zwei Spalten vertauschen',
      'Ein Vielfaches einer Zeile zu einer anderen addieren',
    ],
    correctIndex: 2,
    explanation: 'Beim Gauss-Algorithmus darf man nur ZEILEN-Operationen durchfuehren: Zeilen vertauschen, Zeilen skalieren, Vielfaches einer Zeile zu einer anderen addieren. Spalten vertauschen wuerde die Variablenzuordnung aendern!',
    hints: ['Spaltenoperationen wuerden die Zuordnung der Variablen (x, y, z, ...) durcheinanderbringen.'],
  },
  'ex-la-2-2-b': {
    id: 'ex-la-2-2-b', lessonId: 'la-2-2', type: 'multiple-choice',
    question: 'Die erweiterte Matrix $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 11 \\end{array}\\right)$. Welche Operation eliminiert die 3 in Zeile 2?',
    options: [
      'Zeile 2 = Zeile 2 - 3 * Zeile 1',
      'Zeile 2 = Zeile 2 + 3 * Zeile 1',
      'Zeile 2 = Zeile 2 / 3',
      'Zeile 1 = Zeile 1 - Zeile 2',
    ],
    correctIndex: 0,
    explanation: 'Um die 3 zu eliminieren: Zeile 2 - 3 * Zeile 1. Dann: [3-3*1, 4-3*2, 11-3*5] = [0, -2, -4]. Die 3 ist weg!',
    hints: ['Um ein Element in Spalte 1 zu eliminieren, subtrahiere ein passendes Vielfaches von Zeile 1. Welches Vielfache ergibt 3?'],
  },
  'ex-la-2-2-c': {
    id: 'ex-la-2-2-c', lessonId: 'la-2-2', type: 'number-input',
    question: 'Nach dem Gauss-Algorithmus erhaelst du $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$. Welchen Wert hat $y$?',
    correctAnswer: 2,
    tolerance: 0.01,
    unit: '',
    explanation: 'Aus Zeile 2: $-2y = -4$, also $y = 2$.',
    hints: ['Zeile 2 lesen: $0 \\cdot x + (-2) \\cdot y = -4$. Nach y aufloesen!'],
  },
  'ex-la-2-2-d': {
    id: 'ex-la-2-2-d', lessonId: 'la-2-2', type: 'number-input',
    question: 'Weiter: $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$ mit $y = 2$. Berechne $x$ durch Rueckeinsetzen.',
    correctAnswer: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Zeile 1: $x + 2y = 5$. Mit $y = 2$: $x + 4 = 5$, also $x = 1$.',
    hints: ['Setze y = 2 in die erste Gleichung ein: x + 2*2 = 5.'],
  },
  'ex-la-2-2-mastery': {
    id: 'ex-la-2-2-mastery', lessonId: 'la-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRUEFUNG] Was ist das Ziel des Gauss-Algorithmus?',
    options: [
      'Die Matrix in Diagonalform bringen',
      'Die Matrix in (reduzierte) Zeilenstufenform bringen',
      'Die Determinante berechnen',
      'Die Eigenwerte finden',
    ],
    correctIndex: 1,
    explanation: 'Das Ziel ist die Zeilenstufenform (obere Dreiecksform): Unter jedem Pivotelement stehen Nullen. Von dort kann man rueckwaerts einsetzen (Ruecksubstitution). Bei der reduzierten Form stehen auch darueber Nullen.',
    hints: ['Gauss bringt das System in eine Form, bei der die letzte Gleichung nur noch eine Unbekannte hat, die vorletzte zwei, usw.'],
  },

  // ── Lesson 3: Loesbarkeit ───────────────────────────────────────────────────
  'ex-la-2-3-a': {
    id: 'ex-la-2-3-a', lessonId: 'la-2-3', type: 'multiple-choice',
    question: 'Nach dem Gauss-Algorithmus steht in der letzten Zeile $0 = 5$. Was bedeutet das?',
    options: [
      'Das System hat unendlich viele Loesungen',
      'Das System hat genau eine Loesung',
      'Das System hat keine Loesung (Widerspruch)',
      'Man muss noch weiter umformen',
    ],
    correctIndex: 2,
    explanation: '$0 = 5$ ist ein Widerspruch -- das ist niemals wahr! Das bedeutet, die Gleichungen widersprechen sich. Das System hat keine Loesung.',
    hints: ['Kann 0 jemals gleich 5 sein? Was sagt das ueber das Gleichungssystem?'],
  },
  'ex-la-2-3-b': {
    id: 'ex-la-2-3-b', lessonId: 'la-2-3', type: 'multiple-choice',
    question: 'Was ist der Rang einer Matrix?',
    options: [
      'Die Anzahl der Zeilen',
      'Die Anzahl der von Null verschiedenen Zeilen in der Stufenform',
      'Die Determinante',
      'Die Anzahl der Spalten',
    ],
    correctIndex: 1,
    explanation: 'Der Rang ist die Anzahl der Pivotelemente (= von Null verschiedene Zeilen in der Stufenform). Er sagt, wie viele "unabhaengige Gleichungen" tatsaechlich im System stecken.',
    hints: ['Bring die Matrix in Stufenform. Zaehle die Zeilen, die nicht komplett aus Nullen bestehen.'],
  },
  'ex-la-2-3-c': {
    id: 'ex-la-2-3-c', lessonId: 'la-2-3', type: 'multiple-choice',
    question: 'Wann hat ein LGS $A\\vec{x} = \\vec{b}$ mit $n$ Unbekannten genau EINE Loesung?',
    options: [
      'Wenn $\\det(A) = 0$',
      'Wenn $\\text{rang}(A) < n$',
      'Wenn $\\text{rang}(A) = \\text{rang}(A|b) = n$',
      'Wenn $\\text{rang}(A) \\neq \\text{rang}(A|b)$',
    ],
    correctIndex: 2,
    explanation: 'Genau eine Loesung gibt es, wenn $\\text{rang}(A) = \\text{rang}(A|b) = n$ (Anzahl der Unbekannten). Das bedeutet: Jede Gleichung bringt neue Information, und es gibt genau so viele "echte" Gleichungen wie Unbekannte.',
    hints: ['Kronecker-Capelli: Loesbar wenn rang(A) = rang(A|b). Eindeutig wenn zusaetzlich Rang = Anzahl Unbekannte.'],
  },
  'ex-la-2-3-mastery': {
    id: 'ex-la-2-3-mastery', lessonId: 'la-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRUEFUNG] Ein LGS mit 3 Unbekannten hat $\\text{rang}(A) = \\text{rang}(A|b) = 2$. Wie viele Loesungen gibt es?',
    options: [
      'Keine Loesung',
      'Genau eine Loesung',
      'Unendlich viele Loesungen (1 freier Parameter)',
      'Unendlich viele Loesungen (2 freie Parameter)',
    ],
    correctIndex: 2,
    explanation: '$\\text{rang}(A) = \\text{rang}(A|b)$: Das System ist loesbar. Aber $\\text{rang} = 2 < 3 = n$: Es gibt $n - \\text{rang} = 3 - 2 = 1$ freien Parameter. Also unendlich viele Loesungen, die von einem Parameter abhaengen.',
    hints: ['Loesbar (gleicher Rang), aber nicht eindeutig (Rang < Anzahl Unbekannte). Wie viele freie Parameter? n - rang.'],
  },

  // ── Lesson 4: Cramersche Regel & Anwendungen ───────────────────────────────
  'ex-la-2-4-a': {
    id: 'ex-la-2-4-a', lessonId: 'la-2-4', type: 'multiple-choice',
    question: 'Wann kann man die Cramersche Regel anwenden?',
    options: [
      'Immer, fuer jedes LGS',
      'Nur wenn $\\det(A) \\neq 0$ (quadratische Matrix, eindeutige Loesung)',
      'Nur fuer 2x2-Systeme',
      'Nur wenn $\\det(A) = 0$',
    ],
    correctIndex: 1,
    explanation: 'Die Cramersche Regel funktioniert nur, wenn $\\det(A) \\neq 0$. Dann hat das System genau eine Loesung, und man kann jede Unbekannte einzeln mit Determinanten berechnen.',
    hints: ['In der Formel $x_i = \\det(A_i)/\\det(A)$ steht $\\det(A)$ im Nenner. Was darf nicht passieren?'],
  },
  'ex-la-2-4-b': {
    id: 'ex-la-2-4-b', lessonId: 'la-2-4', type: 'number-input',
    question: 'Loese mit Cramer: $2x + y = 5$, $x - y = 1$. Berechne $\\det(A)$.',
    correctAnswer: -3,
    tolerance: 0.01,
    unit: '',
    explanation: '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$. $\\det(A) = 2 \\cdot (-1) - 1 \\cdot 1 = -2 - 1 = -3$.',
    hints: ['$A = [[2, 1], [1, -1]]$. Formel: $ad - bc$.'],
  },
  'ex-la-2-4-c': {
    id: 'ex-la-2-4-c', lessonId: 'la-2-4', type: 'number-input',
    question: 'Weiter: $2x + y = 5$, $x - y = 1$. Berechne $x$ mit der Cramerschen Regel: $x = \\det(A_x)/\\det(A)$. ($A_x$ = Spalte 1 durch $\\vec{b}$ ersetzen.)',
    correctAnswer: 2,
    tolerance: 0.01,
    unit: '',
    explanation: '$A_x = \\begin{pmatrix} 5 & 1 \\\\ 1 & -1 \\end{pmatrix}$. $\\det(A_x) = 5 \\cdot (-1) - 1 \\cdot 1 = -6$. Also $x = \\frac{-6}{-3} = 2$.',
    hints: ['$A_x$: Ersetze die erste Spalte von A durch den Vektor b = [5, 1]. Berechne die Determinante und teile durch det(A) = -3.'],
  },
  'ex-la-2-4-mastery': {
    id: 'ex-la-2-4-mastery', lessonId: 'la-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRUEFUNG] In der Statik werden Kraeftegleichgewichte oft als LGS formuliert. Wenn ein Fachwerk 3 unbekannte Stabkraefte $S_1, S_2, S_3$ hat und 3 Gleichgewichtsbedingungen ($\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$), was muss gelten, damit eine eindeutige Loesung existiert?',
    options: [
      'Die Gleichungen muessen linear unabhaengig sein ($\\det(A) \\neq 0$)',
      'Alle Kraefte muessen positiv sein',
      'Die Matrix muss symmetrisch sein',
      'Es muessen mehr Gleichungen als Unbekannte vorhanden sein',
    ],
    correctIndex: 0,
    explanation: 'Damit 3 Gleichungen 3 Unbekannte eindeutig bestimmen, muessen sie linear unabhaengig sein, d.h. $\\det(A) \\neq 0$. Falls $\\det(A) = 0$, ist das System statisch unbestimmt -- es gibt unendlich viele Loesungen oder gar keine.',
    hints: ['Eindeutige Loesung bei n Gleichungen und n Unbekannten genau dann, wenn die Koeffizientenmatrix regulaer ist. Was heisst das fuer die Determinante?'],
  },
}

const lessons_la_u2 = [
  // ── Lesson 1: LGS in Matrixform ────────────────────────────────────────────
  {
    id: 'la-2-1', unitId: 'la-unit-2',
    title: 'LGS in Matrixform',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['LGS in Matrixform $A\\vec{x} = \\vec{b}$ schreiben', 'Erweiterte Koeffizientenmatrix aufstellen'],
    prerequisites: [],
    nextLessonId: 'la-2-2',
    steps: [
      {
        id: 'la-2-1-s1', type: 'explanation-intuitive', title: 'Vom Gleichungssystem zur Matrix',
        content: `Stell dir vor, du hast zwei Gleichungen mit zwei Unbekannten:

$$2x + 3y = 7$$
$$x - y = 1$$

Das loest du in der Schule vielleicht mit Einsetzen oder Gleichsetzen. Aber was, wenn du **100 Gleichungen mit 100 Unbekannten** hast? (Das kommt im Maschinenbau staendig vor -- z.B. bei der Finite-Elemente-Methode!)

Dann schreibst du alles als **Matrix-Gleichung**:

$$\\underbrace{\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}}_{A} \\cdot \\underbrace{\\begin{pmatrix} x \\\\ y \\end{pmatrix}}_{\\vec{x}} = \\underbrace{\\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix}}_{\\vec{b}}$$

Die Matrix $A$ enthaelt die **Koeffizienten** (die Zahlen vor den Variablen). Der Vektor $\\vec{b}$ ist die **rechte Seite**.

**Kurzschreibweise:** $A\\vec{x} = \\vec{b}$

Das sieht aus wie $ax = b$ bei einer normalen Gleichung! Und genauso wie dort $x = b/a$ gilt, koennte man hier formal $\\vec{x} = A^{-1}\\vec{b}$ schreiben (falls $A$ invertierbar ist).`,
      },
      {
        id: 'la-2-1-s2', type: 'explanation-formal', title: 'Die erweiterte Koeffizientenmatrix',
        content: `Fuer den Gauss-Algorithmus brauchen wir die **erweiterte Koeffizientenmatrix** $[A|\\vec{b}]$:

$$\\left(\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right)$$

Wir schreiben einfach $A$ und $\\vec{b}$ nebeneinander, getrennt durch einen Strich. So haben wir alle Informationen des LGS in einer kompakten Tabelle.

**Allgemein fuer $m$ Gleichungen mit $n$ Unbekannten:**

$$\\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)$$

**Tipp:** Achte darauf, dass die Variablen in jeder Gleichung in der gleichen Reihenfolge stehen, bevor du die Matrix aufstellst!`,
      },
      { id: 'la-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-1-a' },
      { id: 'la-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-1-b' },
      { id: 'la-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-1-c' },
      { id: 'la-2-1-s6', type: 'mastery-check', title: 'Pruefungsaufgabe', exerciseRef: 'ex-la-2-1-mastery' },
    ],
  },

  // ── Lesson 2: Gauss-Algorithmus ─────────────────────────────────────────────
  {
    id: 'la-2-2', unitId: 'la-unit-2',
    title: 'Gauss-Algorithmus',
    order: 2, estimatedMinutes: 25,
    learningGoals: ['Die drei erlaubten Zeilenumformungen kennen', 'Ein LGS in Stufenform bringen', 'Ruecksubstitution durchfuehren'],
    prerequisites: [],
    nextLessonId: 'la-2-3',
    steps: [
      {
        id: 'la-2-2-s1', type: 'explanation-intuitive', title: 'Idee des Gauss-Algorithmus',
        content: `Der Gauss-Algorithmus ist wie **Aufraumen**: Du bringst das Gleichungssystem Schritt fuer Schritt in eine einfache Form, aus der du die Loesung direkt ablesen kannst.

**Analogie:** Stell dir vor, du hast ein Chaos aus Gleichungen. Gauss raumt auf:
- Erst loest du die letzte Gleichung (nur eine Unbekannte)
- Dann setzt du ein und loest die vorletzte (zwei Unbekannte, eine schon bekannt)
- Und so weiter, bis alles geloest ist

**Erlaubte Operationen** (aendern die Loesung NICHT):
1. **Zeilen vertauschen** (die Reihenfolge der Gleichungen aendern)
2. **Zeile mit Zahl $\\neq 0$ multiplizieren** (beide Seiten einer Gleichung mal gleiche Zahl)
3. **Vielfaches einer Zeile zu einer anderen addieren** (eine Gleichung zu einer anderen addieren)

**Ziel:** Alle Eintraege **unterhalb** der Diagonale sollen 0 werden!`,
      },
      {
        id: 'la-2-2-s2', type: 'explanation-formal', title: 'Schritt fuer Schritt Beispiel',
        content: `**Beispiel:** Loese $x + 2y = 5$ und $3x + 4y = 11$.

**Schritt 1:** Erweiterte Matrix aufstellen:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 11 \\end{array}\\right)$$

**Schritt 2:** Eliminiere die 3 in Zeile 2 (Zeile 2 - 3 * Zeile 1):
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$$

Das ist die **Stufenform**! Unter der Diagonale stehen nur Nullen.

**Schritt 3: Ruecksubstitution** (von unten nach oben):
- Zeile 2: $-2y = -4 \\Rightarrow y = 2$
- Zeile 1: $x + 2 \\cdot 2 = 5 \\Rightarrow x = 1$

**Loesung:** $x = 1, y = 2$ \\checkmark

**Fuer groessere Systeme** (3x3, 4x4, ...): Das gleiche Prinzip! Erst Spalte 1 "sauber machen" (ueberall 0 unter dem Pivot), dann Spalte 2, usw.`,
      },
      { id: 'la-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-2-a' },
      { id: 'la-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-2-b' },
      { id: 'la-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-2-c' },
      { id: 'la-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-2-2-d' },
      { id: 'la-2-2-s7', type: 'mastery-check', title: 'Pruefungsaufgabe', exerciseRef: 'ex-la-2-2-mastery' },
    ],
  },

  // ── Lesson 3: Loesbarkeit ───────────────────────────────────────────────────
  {
    id: 'la-2-3', unitId: 'la-unit-2',
    title: 'Loesbarkeit von LGS',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Die drei Faelle der Loesbarkeit unterscheiden', 'Rang einer Matrix bestimmen', 'Kronecker-Capelli-Theorem anwenden'],
    prerequisites: [],
    nextLessonId: 'la-2-4',
    steps: [
      {
        id: 'la-2-3-s1', type: 'explanation-intuitive', title: 'Drei moegliche Ergebnisse',
        content: `Wenn du den Gauss-Algorithmus durchfuehrst, gibt es **genau drei moegliche Ergebnisse**:

**Fall 1: Genau eine Loesung** (der Normalfall)
Jede Variable hat einen eindeutigen Wert. Beispiel:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right) \\quad \\Rightarrow \\quad y = 2, \\; x = 1$$

**Fall 2: Unendlich viele Loesungen**
Eine Zeile wird zu $0 = 0$ (wahre Aussage, bringt keine neue Info). Beispiel:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 0 & 0 \\end{array}\\right) \\quad \\Rightarrow \\quad x + 2y = 5$$
Eine Gleichung, zwei Unbekannte: $y$ ist frei waehlbar!

**Fall 3: Keine Loesung** (Widerspruch)
Eine Zeile wird zu $0 = 5$ (falsche Aussage). Die Gleichungen widersprechen sich.

**Geometrische Vorstellung (2D):** Zwei Geraden koennen sich in einem Punkt schneiden (1 Loesung), uebereinanderliegen (unendlich viele) oder parallel sein (keine Loesung).`,
      },
      {
        id: 'la-2-3-s2', type: 'explanation-formal', title: 'Rang und Kronecker-Capelli',
        content: `**Der Rang** einer Matrix ist die Anzahl der Pivotelemente in der Stufenform (= Anzahl der Zeilen, die nicht komplett aus Nullen bestehen).

**Satz von Kronecker-Capelli:**

Sei $A$ eine $m \\times n$-Koeffizientenmatrix und $(A|b)$ die erweiterte Matrix:

| Bedingung | Ergebnis |
|-----------|----------|
| $\\text{rang}(A) \\neq \\text{rang}(A|b)$ | **Keine Loesung** (Widerspruch) |
| $\\text{rang}(A) = \\text{rang}(A|b) = n$ | **Genau eine Loesung** |
| $\\text{rang}(A) = \\text{rang}(A|b) < n$ | **Unendlich viele Loesungen** mit $n - \\text{rang}(A)$ freien Parametern |

Dabei ist $n$ die Anzahl der Unbekannten.

**Merkregel:**
- Gleicher Rang links und rechts: loesbar
- Verschiedener Rang: unloesbarer Widerspruch
- Rang = Anzahl Unbekannte: eindeutig
- Rang < Anzahl Unbekannte: unendlich viele Loesungen`,
      },
      { id: 'la-2-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-3-a' },
      { id: 'la-2-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-3-b' },
      { id: 'la-2-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-3-c' },
      { id: 'la-2-3-s6', type: 'mastery-check', title: 'Pruefungsaufgabe', exerciseRef: 'ex-la-2-3-mastery' },
    ],
  },

  // ── Lesson 4: Cramersche Regel & Anwendungen ───────────────────────────────
  {
    id: 'la-2-4', unitId: 'la-unit-2',
    title: 'Cramersche Regel & Anwendungen',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Cramersche Regel fuer 2x2- und 3x3-Systeme anwenden', 'Technische Probleme als LGS formulieren'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'la-2-4-s1', type: 'explanation-intuitive', title: 'Cramersche Regel: Loesen mit Determinanten',
        content: `Die Cramersche Regel ist eine elegante Methode, um die Loesung eines LGS direkt mit **Determinanten** auszurechnen -- ohne Gauss!

**Idee:** Jede Unbekannte $x_i$ ist ein Bruch aus zwei Determinanten:

$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

Dabei entsteht $A_i$, indem man die **$i$-te Spalte** von $A$ durch den Vektor $\\vec{b}$ ersetzt.

**Schritt fuer Schritt fuer 2x2:**

$$2x + y = 5, \\quad x - y = 1$$

$$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad \\det(A) = -2 - 1 = -3$$

$$x = \\frac{\\det\\begin{pmatrix} 5 & 1 \\\\ 1 & -1 \\end{pmatrix}}{\\det(A)} = \\frac{-5-1}{-3} = \\frac{-6}{-3} = 2$$

$$y = \\frac{\\det\\begin{pmatrix} 2 & 5 \\\\ 1 & 1 \\end{pmatrix}}{\\det(A)} = \\frac{2-5}{-3} = \\frac{-3}{-3} = 1$$

**Vorteil:** Man kann jede Variable **einzeln** berechnen, ohne das ganze System loesen zu muessen.
**Nachteil:** Fuer grosse Systeme (n > 4) ist Gauss effizienter.`,
      },
      {
        id: 'la-2-4-s2', type: 'explanation-formal', title: 'Anwendung: Kraeftegleichgewicht in der Statik',
        content: `**Typische Maschinenbau-Aufgabe:** An einem Knoten greifen drei Stabkraefte an. Bestimme die Kraefte!

Die Gleichgewichtsbedingungen lauten:
$$\\sum F_x = 0: \\quad S_1 \\cos(30°) - S_2 \\cos(45°) = 100 \\text{ N}$$
$$\\sum F_y = 0: \\quad S_1 \\sin(30°) + S_2 \\sin(45°) - S_3 = 0$$
$$\\sum M_A = 0: \\quad 2 \\cdot S_2 \\sin(45°) - 3 \\cdot S_3 = 150 \\text{ Nm}$$

Das ist ein LGS mit 3 Gleichungen und 3 Unbekannten ($S_1, S_2, S_3$)!

$$\\begin{pmatrix} \\cos 30° & -\\cos 45° & 0 \\\\ \\sin 30° & \\sin 45° & -1 \\\\ 0 & 2\\sin 45° & -3 \\end{pmatrix} \\begin{pmatrix} S_1 \\\\ S_2 \\\\ S_3 \\end{pmatrix} = \\begin{pmatrix} 100 \\\\ 0 \\\\ 150 \\end{pmatrix}$$

Falls $\\det(A) \\neq 0$: System ist **statisch bestimmt** -- eindeutige Loesung mit Cramer oder Gauss.

Falls $\\det(A) = 0$: System ist **statisch unbestimmt** -- zusaetzliche Gleichungen (z.B. Verformungen) noetig.`,
      },
      { id: 'la-2-4-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-4-a' },
      { id: 'la-2-4-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-4-b' },
      { id: 'la-2-4-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-4-c' },
      { id: 'la-2-4-s6', type: 'mastery-check', title: 'Pruefungsaufgabe', exerciseRef: 'ex-la-2-4-mastery' },
    ],
  },
]

export const la_unit2 = {
  id: 'la-unit-2',
  title: 'Lineare Gleichungssysteme',
  order: 2,
  description: 'LGS in Matrixform, Gauss-Algorithmus, Loesbarkeit, Cramersche Regel',
  lessons: lessons_la_u2,
  exercises: exercises_la_u2,
}
