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
    explanation: 'Die Koeffizienten der Variablen werden zeilenweise in die Matrix eingetragen. Gleichung 1: $2x + 3y$, also $[2, 3]$. Gleichung 2: $x - y$, also $[1, -1]$.',
    hints: [
      'Was steht in den Zeilen, was in den Spalten der Koeffizientenmatrix?',
      'Jede Zeile = eine Gleichung; Spalten = Reihenfolge der Variablen ($x$, $y$).',
      'Schreibe für Zeile 1 die Koeffizienten von $x$ und $y$ aus $2x + 3y = 7$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Das ist die TRANSPONIERTE Matrix $A^T$. Du hast Zeilen und Spalten vertauscht. Konvention: Eine Zeile = eine Gleichung; die Spalten entsprechen den Variablen $x, y$ in fester Reihenfolge.',
      '2': 'Du hast die rechte Seite ($\\vec{b} = (7, 1)^T$) in die Koeffizientenmatrix eingebaut. Die Koeffizientenmatrix $A$ enthält NUR die Koeffizienten vor $x, y$, nicht die rechten Seiten.',
      '3': 'Platzhalter $x, y$ gehören nicht in die Matrix, sondern in den Vektor $\\vec{x} = (x, y)^T$. In $A$ stehen nur die Koeffizienten (die Zahlen) der Gleichungen.',
    },
  },
  'ex-la-2-1-b': {
    id: 'ex-la-2-1-b', lessonId: 'la-2-1', type: 'multiple-choice',
    question: 'Was ist die erweiterte Koeffizientenmatrix $[A|\\vec{b}]$ für $2x + 3y = 7$ und $x - y = 1$?',
    options: [
      '$\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}$',
      '$\\left(\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right)$',
      '$\\left(\\begin{array}{cc|c} 7 & 3 & 2 \\\\ 1 & -1 & 1 \\end{array}\\right)$',
      '$\\begin{pmatrix} 2 & 3 & 7 \\\\ 1 & -1 & 0 \\end{pmatrix}$',
    ],
    correctIndex: 1,
    explanation: 'Die erweiterte Koeffizientenmatrix hängt den Vektor $\\vec{b}$ (die rechte Seite) als zusätzliche Spalte an die Matrix $A$ an. Der Strich $|$ trennt $A$ von $\\vec{b}$.',
    hints: [
      'Welche Information fehlt in $A$ allein?',
      'Erweitert = Koeffizientenmatrix + rechte Seite, getrennt durch einen vertikalen Strich.',
      'Anhängen, nicht ersetzen — die ursprünglichen Spalten bleiben unverändert.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das ist nur $A$ ohne $\\vec{b}$. "Erweitert" heißt: die rechte Seite $\\vec{b}$ wird als zusätzliche Spalte angehängt, getrennt durch den Strich $|$.',
      '2': 'Du hast die Einträge durcheinander geschrieben: Die erste Spalte sollte die Koeffizienten von $x$ enthalten ($2$ und $1$), nicht $7$ und $3$. Erweiterte Matrix: links $A$ unverändert, dann $|$, dann $\\vec{b}$.',
      '3': 'Der zweite Eintrag von $\\vec{b}$ ist $1$ (aus $x - y = 1$), nicht $0$. Die erweiterte Matrix muss die rechten Seiten exakt übernehmen; außerdem fehlt der Trennstrich $|$.',
    },
  },
  'ex-la-2-1-c': {
    id: 'ex-la-2-1-c', lessonId: 'la-2-1', type: 'multiple-choice',
    question: 'Welchen Vorteil hat die Matrixschreibweise $A\\vec{x} = \\vec{b}$ gegenüber der normalen Schreibweise?',
    options: [
      'Sie ist nur eine andere Notation ohne Vorteil',
      'Man kann systematische Lösungsalgorithmen anwenden und Existenz/Eindeutigkeit der Lösung untersuchen',
      'Sie funktioniert nur für 2 Gleichungen',
      'Die Lösung ist immer $\\vec{x} = A \\cdot \\vec{b}$',
    ],
    correctIndex: 1,
    explanation: 'Die Matrixschreibweise erlaubt systematische Algorithmen (Gauss!) und tiefe Einsichten: z.B. ob Lösungen existieren, ob sie eindeutig sind, und wie die Lösungsmenge aussieht.',
    hints: [
      'Warum nutzen Ingenieure Matrizen statt verschachtelte Gleichungen?',
      'Denke an FEM: 10 000 Gleichungen — Hand-Lösen unmöglich.',
      'Mit Matrizen werden systematische Algorithmen wie Gauss möglich.',
    ],
    wrongAnswerExplanations: {
      '0': 'Die Matrixform bringt sehr wohl Vorteile: systematische Algorithmen, Rang-Analyse, Lösbarkeitskriterien (Kronecker-Capelli). FEM und Computer-Programme funktionieren nur mit Matrixform.',
      '2': 'Die Matrixschreibweise funktioniert für beliebig viele Gleichungen und Unbekannte. Für $n$ Gleichungen: $A$ ist eine $m \\times n$-Matrix. Keine Beschränkung auf $n = 2$.',
      '3': 'Die Formel $\\vec{x} = A \\cdot \\vec{b}$ ist FALSCH. Richtig wäre $\\vec{x} = A^{-1} \\cdot \\vec{b}$ (falls $A$ invertierbar ist). Die normale Multiplikation liefert keine Lösung — man braucht die Inverse.',
    },
  },
  'ex-la-2-1-mastery': {
    id: 'ex-la-2-1-mastery', lessonId: 'la-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Das System $3x - 2y + z = 5$, $x + 4y - 2z = 3$, $2x + y + 3z = 8$ hat die erweiterte Matrix...',
    options: [
      '$\\left(\\begin{array}{ccc|c} 3 & -2 & 1 & 5 \\\\ 1 & 4 & -2 & 3 \\\\ 2 & 1 & 3 & 8 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 3 & 1 & 2 & 5 \\\\ -2 & 4 & 1 & 3 \\\\ 1 & -2 & 3 & 8 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 5 & -2 & 1 & 3 \\\\ 3 & 4 & -2 & 1 \\\\ 8 & 1 & 3 & 2 \\end{array}\\right)$',
      '$\\left(\\begin{array}{ccc|c} 3 & -2 & 1 & 0 \\\\ 1 & 4 & -2 & 0 \\\\ 2 & 1 & 3 & 0 \\end{array}\\right)$',
    ],
    correctIndex: 0,
    explanation: 'Jede Zeile entspricht einer Gleichung. Die Koeffizienten kommen in der Reihenfolge $x$, $y$, $z$, und die rechte Seite nach dem Strich.',
    hints: [
      'Pro Gleichung eine Zeile — wie ist die Reihenfolge der Variablen?',
      'Spaltenreihenfolge: $x$, $y$, $z$, dann Strich, dann $b$.',
      'Achtung: Antwort B ist die transponierte (verwechselt Zeilen/Spalten).',
    ],
    wrongAnswerExplanations: {
      '1': 'Das ist die transponierte Matrix: Du hast Zeilen und Spalten vertauscht. Konvention ist: eine Zeile = eine Gleichung, eine Spalte = eine Variable (in Reihenfolge $x, y, z$).',
      '2': 'Du hast die rechten Seiten ($5, 3, 8$) in die erste Spalte geschrieben. Der Vektor $\\vec{b}$ gehört RECHTS vom Trennstrich, nicht als erste Spalte der Koeffizientenmatrix.',
      '3': 'Die rechte Seite darf nicht durch Null ersetzt werden. Die $b$-Einträge sind $5, 3, 8$ (wie im Gleichungssystem gegeben), nicht $0$. $\\vec{b} = \\vec{0}$ würde ein homogenes System ergeben.',
    },
  },

  // ── Lesson 2: Gauss-Algorithmus ─────────────────────────────────────────────
  'ex-la-2-2-a': {
    id: 'ex-la-2-2-a', lessonId: 'la-2-2', type: 'multiple-choice',
    question: 'Welche der folgenden Operationen ist beim Gauss-Algorithmus NICHT erlaubt?',
    options: [
      'Zwei Zeilen vertauschen',
      'Eine Zeile mit einer Zahl $\\neq 0$ multiplizieren',
      'Zwei Spalten vertauschen',
      'Ein Vielfaches einer Zeile zu einer anderen addieren',
    ],
    correctIndex: 2,
    explanation: 'Beim Gauss-Algorithmus darf man nur ZEILEN-Operationen durchführen: Zeilen vertauschen, Zeilen skalieren, Vielfaches einer Zeile zu einer anderen addieren. Spalten vertauschen würde die Variablenzuordnung ändern!',
    hints: [
      'Was würde ein Spaltentausch in der zugrundeliegenden Gleichung bedeuten?',
      'Spalten = Variablen ($x$, $y$, $z$). Tauschen = Variablen verwechseln.',
      'Erlaubt sind nur Operationen, die die Lösungsmenge nicht verändern.',
    ],
    wrongAnswerExplanations: {
      '0': 'Zeilen vertauschen IST erlaubt — nur die Reihenfolge der Gleichungen ändert sich, die Lösungsmenge bleibt gleich. Das ist eine der drei zulässigen Zeilenoperationen.',
      '1': 'Eine Zeile mit einer Zahl $\\neq 0$ multiplizieren IST erlaubt. Die Lösung ändert sich nicht, da man beide Seiten einer Gleichung mit derselben Zahl multipliziert. Wichtig: nicht mit $0$!',
      '3': 'Ein Vielfaches einer Zeile zu einer anderen addieren IST die Kern-Operation des Gauss-Algorithmus. Sie entspricht der "Addition zweier Gleichungen" und ändert die Lösungsmenge nicht.',
    },
  },
  'ex-la-2-2-b': {
    id: 'ex-la-2-2-b', lessonId: 'la-2-2', type: 'multiple-choice',
    question: 'Die erweiterte Matrix $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 11 \\end{array}\\right)$. Welche Operation eliminiert die $3$ in Zeile 2?',
    options: [
      'Zeile 2 = Zeile 2 $-$ 3 $\\cdot$ Zeile 1',
      'Zeile 2 = Zeile 2 $+$ 3 $\\cdot$ Zeile 1',
      'Zeile 2 = Zeile 2 $/$ 3',
      'Zeile 1 = Zeile 1 $-$ Zeile 2',
    ],
    correctIndex: 0,
    explanation: 'Um die $3$ zu eliminieren: Zeile 2 $-$ 3 $\\cdot$ Zeile 1. Dann: $[3 - 3 \\cdot 1, \\; 4 - 3 \\cdot 2, \\; 11 - 3 \\cdot 5] = [0, -2, -4]$. Die $3$ ist weg!',
    hints: [
      'Welches Vielfache von Zeile 1 muss man von Zeile 2 abziehen, damit der erste Eintrag $3$ verschwindet?',
      'Pivotelement in Zeile 1: $1$. Faktor: $3 / 1 = 3$.',
      'Operation: Zeile 2 $-$ (Faktor) $\\cdot$ Zeile 1 $=$ Zeile 2 $-$ 3 $\\cdot$ Zeile 1.',
    ],
    wrongAnswerExplanations: {
      '1': 'Mit $+$ statt $-$ bekommst du $3 + 3 \\cdot 1 = 6$ in Position (2,1), nicht $0$. Zum ELIMINIEREN muss man SUBTRAHIEREN (Vorzeichen umgekehrt zum Eliminationsziel).',
      '2': 'Dividieren durch $3$ ergibt in Zeile 2: $[1, 4/3, 11/3]$. Die erste Position ist dann $1$, nicht $0$ — die $3$ ist also nicht eliminiert. Man braucht Subtraktion von $3 \\cdot$ Zeile 1.',
      '3': 'Damit würdest du das Pivot in Zeile 1 zerstören und Zeile 2 nicht verändern. Eliminationsrichtung: die $3$ in Zeile 2 soll verschwinden, daher Operation auf Zeile 2 (unten) mit Hilfe von Zeile 1 (oben) — nicht umgekehrt.',
    },
  },
  'ex-la-2-2-c': {
    id: 'ex-la-2-2-c', lessonId: 'la-2-2', type: 'number-input',
    question: 'Nach dem Gauss-Algorithmus erhältst du $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$. Welchen Wert hat $y$?',
    correctValue: 2,
    tolerance: 0.01,
    unit: '',
    explanation: 'Aus Zeile 2: $-2y = -4$, also $y = 2$.',
    hints: [
      'Welche Gleichung versteckt sich in Zeile 2?',
      'Lies Zeile 2 zurück: $0 \\cdot x + (-2) \\cdot y = -4$.',
      'Vereinfacht: $-2y = -4 \\Rightarrow y = ?$',
    ],
  },
  'ex-la-2-2-d': {
    id: 'ex-la-2-2-d', lessonId: 'la-2-2', type: 'number-input',
    question: 'Weiter: $\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$ mit $y = 2$. Berechne $x$ durch Rückeinsetzen.',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: 'Zeile 1: $x + 2y = 5$. Mit $y = 2$: $x + 4 = 5$, also $x = 1$.',
    hints: [
      'Wie heißt der zweite Schritt nach Gauss-Vorwärts? Genau — Rücksubstitution.',
      'Setze $y = 2$ in Zeile 1 ein: $x + 2 \\cdot 2 = 5$.',
      'Löse nach $x$ auf.',
    ],
  },
  'ex-la-2-2-mastery': {
    id: 'ex-la-2-2-mastery', lessonId: 'la-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Was ist das Ziel des Gauss-Algorithmus?',
    options: [
      'Die Matrix in Diagonalform bringen',
      'Die Matrix in (reduzierte) Zeilenstufenform bringen',
      'Die Determinante berechnen',
      'Die Eigenwerte finden',
    ],
    correctIndex: 1,
    explanation: 'Das Ziel ist die Zeilenstufenform (obere Dreiecksform): Unter jedem Pivotelement stehen Nullen. Von dort kann man rückwärts einsetzen (Rücksubstitution). Bei der reduzierten Form stehen auch darüber Nullen.',
    hints: [
      'Welche Form hat die Matrix nach Gauss-Vorwärtselimination?',
      'Ein Trapez/Dreieck mit Nullen unter den Pivots.',
      'Diese Form heißt "Zeilenstufenform" — daraus rücksubstituieren.',
    ],
    wrongAnswerExplanations: {
      '0': 'Die echte Diagonalform (nur Diagonalelemente $\\neq 0$) ist erst bei Gauss-JORDAN das Ziel, nicht beim normalen Gauss. Der klassische Gauss-Algorithmus stoppt bei der (oberen) Stufenform.',
      '2': 'Die Determinante ist ein NEBENEFFEKT (sie lässt sich aus der Stufenform ablesen als Produkt der Diagonalelemente), aber nicht das eigentliche Ziel. Ziel ist das Lösen des LGS über die Stufenform.',
      '3': 'Eigenwerte findet man mit $\\det(A - \\lambda I) = 0$ — das ist ein ganz anderes Verfahren. Der Gauss-Algorithmus löst $A\\vec{x} = \\vec{b}$ und hat mit Eigenwerten nichts zu tun.',
    },
  },

  // ── Lesson 3: Lösbarkeit ───────────────────────────────────────────────────
  'ex-la-2-3-a': {
    id: 'ex-la-2-3-a', lessonId: 'la-2-3', type: 'multiple-choice',
    question: 'Nach dem Gauss-Algorithmus steht in der letzten Zeile $0 = 5$. Was bedeutet das?',
    options: [
      'Das System hat unendlich viele Lösungen',
      'Das System hat genau eine Lösung',
      'Das System hat keine Lösung (Widerspruch)',
      'Man muss noch weiter umformen',
    ],
    correctIndex: 2,
    explanation: '$0 = 5$ ist ein Widerspruch — das ist niemals wahr! Das bedeutet, die Gleichungen widersprechen sich. Das System hat keine Lösung.',
    hints: [
      'Lies die letzte Zeile als Gleichung — kann sie jemals stimmen?',
      'Eine Gleichung wie "Null gleich Fünf" hat keine erfüllende Belegung.',
      'Das nennt man "inkonsistent" oder "widersprüchlich".',
    ],
    wrongAnswerExplanations: {
      '0': 'Unendlich viele Lösungen entstehen bei einer Nullzeile $0 = 0$ (wahre Aussage, keine neue Info). $0 = 5$ hingegen ist FALSCH — hier gibt es keine Lösung, nicht unendlich viele.',
      '1': 'Genau eine Lösung erkennt man an einer Stufenform, in der die Anzahl der Nicht-Null-Zeilen gleich der Anzahl der Unbekannten ist. $0 = 5$ ist ein Widerspruch — die Lösungsmenge ist leer.',
      '3': 'Keine weiteren Umformungen helfen: $0 = 5$ ist unabänderlich falsch. Der Widerspruch ist endgültig — das System ist nachweislich unlösbar.',
    },
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
    explanation: 'Der Rang ist die Anzahl der Pivotelemente (= von Null verschiedene Zeilen in der Stufenform). Er sagt, wie viele "unabhängige Gleichungen" tatsächlich im System stecken.',
    hints: [
      'Wie misst man, wie viele "echte" Informationen ein LGS enthält?',
      'Bringe die Matrix in Stufenform und zähle die Pivot-Zeilen.',
      'Nullzeilen tragen nichts bei — sie zählen nicht zum Rang.',
    ],
    wrongAnswerExplanations: {
      '0': 'Einfach die Anzahl aller Zeilen zu nehmen ignoriert lineare Abhängigkeit. Der Rang zählt nur UNABHÄNGIGE Zeilen; Nullzeilen in der Stufenform (abhängige Zeilen) werden nicht mitgezählt.',
      '2': 'Die Determinante ist eine Zahl (kann positiv, negativ oder Null sein), der Rang ist ein Ganzzahl zwischen $0$ und $\\min(m, n)$. Zusammenhang: $\\det A \\neq 0 \\Leftrightarrow \\text{rang}(A) = n$ (für quadratische Matrizen) — aber keine Gleichsetzung.',
      '3': 'Die Spaltenanzahl ist nur eine OBERE Schranke: $\\text{rang}(A) \\leq \\min(m, n)$. Der tatsächliche Rang kann kleiner sein, wenn Spalten linear abhängig sind.',
    },
  },
  'ex-la-2-3-c': {
    id: 'ex-la-2-3-c', lessonId: 'la-2-3', type: 'multiple-choice',
    question: 'Wann hat ein LGS $A\\vec{x} = \\vec{b}$ mit $n$ Unbekannten genau EINE Lösung?',
    options: [
      'Wenn $\\det(A) = 0$',
      'Wenn $\\text{rang}(A) < n$',
      'Wenn $\\text{rang}(A) = \\text{rang}(A|b) = n$',
      'Wenn $\\text{rang}(A) \\neq \\text{rang}(A|b)$',
    ],
    correctIndex: 2,
    explanation: 'Genau eine Lösung gibt es, wenn $\\text{rang}(A) = \\text{rang}(A|b) = n$ (Anzahl der Unbekannten). Das bedeutet: Jede Gleichung bringt neue Information, und es gibt genau so viele "echte" Gleichungen wie Unbekannte.',
    hints: [
      'Welcher Satz beschreibt die Lösbarkeit von LGS?',
      'Kronecker-Capelli: Lösbar wenn $\\text{rang}(A) = \\text{rang}(A|b)$.',
      'Eindeutig wenn dieser Rang zusätzlich gleich $n$ (Anzahl Unbekannte) ist.',
    ],
    wrongAnswerExplanations: {
      '0': '$\\det(A) = 0$ bedeutet das GEGENTEIL: die Matrix ist singulär, es gibt entweder keine oder unendlich viele Lösungen. Eindeutigkeit braucht $\\det(A) \\neq 0$ (bei quadratischen Systemen).',
      '1': '$\\text{rang}(A) < n$ bedeutet: Es gibt freie Parameter. Wenn das System überhaupt lösbar ist, hat es dann UNENDLICH VIELE Lösungen, nicht genau eine.',
      '3': 'Wenn $\\text{rang}(A) \\neq \\text{rang}(A|b)$, widersprechen sich die Gleichungen: KEINE Lösung (nicht genau eine). Für Eindeutigkeit müssen die Ränge gleich $n$ sein.',
    },
  },
  'ex-la-2-3-mastery': {
    id: 'ex-la-2-3-mastery', lessonId: 'la-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein LGS mit 3 Unbekannten hat $\\text{rang}(A) = \\text{rang}(A|b) = 2$. Wie viele Lösungen gibt es?',
    options: [
      'Keine Lösung',
      'Genau eine Lösung',
      'Unendlich viele Lösungen (1 freier Parameter)',
      'Unendlich viele Lösungen (2 freie Parameter)',
    ],
    correctIndex: 2,
    explanation: '$\\text{rang}(A) = \\text{rang}(A|b)$: Das System ist lösbar. Aber $\\text{rang} = 2 < 3 = n$: Es gibt $n - \\text{rang} = 3 - 2 = 1$ freien Parameter. Also unendlich viele Lösungen, die von einem Parameter abhängen.',
    hints: [
      'Erst Lösbarkeit prüfen: $\\text{rang}(A) = \\text{rang}(A|b)$?',
      'Dann Eindeutigkeit: ist Rang gleich der Anzahl Unbekannten?',
      'Anzahl freier Parameter $= n - \\text{rang}(A)$. Hier: $3 - 2 = 1$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Keine Lösung würde $\\text{rang}(A) < \\text{rang}(A|b)$ verlangen. Hier sind die Ränge aber GLEICH ($=2$), das System ist also lösbar.',
      '1': 'Genau eine Lösung braucht $\\text{rang} = n = 3$. Hier ist $\\text{rang} = 2 < 3$, also gibt es freie Parameter und damit mehr als eine Lösung.',
      '3': 'Die Anzahl freier Parameter ist $n - \\text{rang}(A) = 3 - 2 = 1$, nicht $2$. Zwei freie Parameter hätte man bei $\\text{rang} = 1$.',
    },
  },

  // ── Lesson 4: Cramersche Regel & Anwendungen ───────────────────────────────
  'ex-la-2-4-a': {
    id: 'ex-la-2-4-a', lessonId: 'la-2-4', type: 'multiple-choice',
    question: 'Wann kann man die Cramersche Regel anwenden?',
    options: [
      'Immer, für jedes LGS',
      'Nur wenn $\\det(A) \\neq 0$ (quadratische Matrix, eindeutige Lösung)',
      'Nur für 2x2-Systeme',
      'Nur wenn $\\det(A) = 0$',
    ],
    correctIndex: 1,
    explanation: 'Die Cramersche Regel funktioniert nur, wenn $\\det(A) \\neq 0$. Dann hat das System genau eine Lösung, und man kann jede Unbekannte einzeln mit Determinanten berechnen.',
    hints: [
      'In welcher Position der Cramer-Formel steht $\\det(A)$?',
      'Formel: $x_i = \\det(A_i) / \\det(A)$ — Determinante steht im Nenner.',
      'Was darf nie im Nenner stehen?',
    ],
    wrongAnswerExplanations: {
      '0': 'Cramer benötigt $\\det(A) \\neq 0$ und eine quadratische Matrix. Bei $\\det(A) = 0$ oder bei nicht-quadratischen Systemen versagt die Regel, weil im Nenner durch $0$ geteilt würde.',
      '2': 'Cramer funktioniert für jedes $n \\times n$-System mit $\\det(A) \\neq 0$, nicht nur $2 \\times 2$. Für größere Systeme wird der Rechenaufwand aber sehr groß — dann ist Gauss meist effizienter.',
      '3': '$\\det(A) = 0$ würde eine Division durch $0$ in der Formel $x_i = \\det(A_i)/\\det(A)$ bedeuten. Cramer setzt daher explizit $\\det(A) \\neq 0$ voraus.',
    },
  },
  'ex-la-2-4-b': {
    id: 'ex-la-2-4-b', lessonId: 'la-2-4', type: 'number-input',
    question: 'Löse mit Cramer: $2x + y = 5$, $x - y = 1$. Berechne $\\det(A)$.',
    correctValue: -3,
    tolerance: 0.01,
    unit: '',
    explanation: '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$. $\\det(A) = 2 \\cdot (-1) - 1 \\cdot 1 = -2 - 1 = -3$.',
    hints: [
      'Erst die Koeffizientenmatrix $A$ aus den Gleichungen ablesen.',
      '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$ — 2×2-Determinante: $ad - bc$.',
      'Achte auf das Vorzeichen: $2 \\cdot (-1) - 1 \\cdot 1 = ?$',
    ],
  },
  'ex-la-2-4-c': {
    id: 'ex-la-2-4-c', lessonId: 'la-2-4', type: 'number-input',
    question: 'Weiter: $2x + y = 5$, $x - y = 1$. Berechne $x$ mit der Cramerschen Regel: $x = \\det(A_x)/\\det(A)$. ($A_x$ = Spalte 1 durch $\\vec{b}$ ersetzen.)',
    correctValue: 2,
    tolerance: 0.01,
    unit: '',
    explanation: '$A_x = \\begin{pmatrix} 5 & 1 \\\\ 1 & -1 \\end{pmatrix}$. $\\det(A_x) = 5 \\cdot (-1) - 1 \\cdot 1 = -6$. Also $x = \\frac{-6}{-3} = 2$.',
    hints: [
      'Wie konstruiert man $A_x$ aus $A$?',
      'Spalte 1 von $A$ durch $\\vec{b} = \\begin{pmatrix}5\\\\1\\end{pmatrix}$ ersetzen.',
      'Dann $\\det(A_x) = -6$, geteilt durch $\\det(A) = -3$.',
    ],
  },
  'ex-la-2-4-mastery': {
    id: 'ex-la-2-4-mastery', lessonId: 'la-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] In der Statik werden Kräftegleichgewichte oft als LGS formuliert. Wenn ein Fachwerk 3 unbekannte Stabkräfte $S_1, S_2, S_3$ hat und 3 Gleichgewichtsbedingungen ($\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$), was muss gelten, damit eine eindeutige Lösung existiert?',
    options: [
      'Die Gleichungen müssen linear unabhängig sein ($\\det(A) \\neq 0$)',
      'Alle Kräfte müssen positiv sein',
      'Die Matrix muss symmetrisch sein',
      'Es müssen mehr Gleichungen als Unbekannte vorhanden sein',
    ],
    correctIndex: 0,
    explanation: 'Damit 3 Gleichungen 3 Unbekannte eindeutig bestimmen, müssen sie linear unabhängig sein, d.h. $\\det(A) \\neq 0$. Falls $\\det(A) = 0$, ist das System statisch unbestimmt — es gibt unendlich viele Lösungen oder gar keine.',
    hints: [
      'Wann liefern 3 Gleichungen mit 3 Unbekannten genau eine Lösung?',
      'Die Gleichungen müssen linear unabhängig sein — keine darf aus den anderen folgen.',
      'Mathematisch: $\\det(A) \\neq 0$. Sonst: statisch unbestimmt → zusätzliche Bedingungen nötig.',
    ],
    wrongAnswerExplanations: {
      '1': 'Das Vorzeichen der Kräfte ist Ergebnis der Rechnung, nicht Voraussetzung. Druck-/Zugkräfte können durchaus negativ herauskommen und das System ist trotzdem eindeutig lösbar, solange $\\det(A) \\neq 0$.',
      '2': 'Symmetrie ($A = A^T$) ist für die Eindeutigkeit NICHT erforderlich. Entscheidend ist die lineare Unabhängigkeit der Gleichungen, also $\\det(A) \\neq 0$.',
      '3': 'Mehr Gleichungen als Unbekannte führt zu einem überbestimmten System, das meistens KEINE Lösung hat. Für Eindeutigkeit braucht man genauso viele unabhängige Gleichungen wie Unbekannte.',
    },
  },
}

const lessons_la_u2 = [
  // ── Lesson 1: LGS in Matrixform ────────────────────────────────────────────
  {
    id: 'la-2-1', unitId: 'la-unit-2',
    title: 'LGS in Matrixform',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['LGS in Matrixform $A\\vec{x} = \\vec{b}$ schreiben', 'Erweiterte Koeffizientenmatrix aufstellen'],
    subGoals: [
      { label: 'Matrixform: $A\\vec x = \\vec b$ (Koeffizienten $A$, Unbekannte $\\vec x$, rechte Seite $\\vec b$)', examRelevance: 'hoch' },
      { label: 'Erweiterte Koeffizientenmatrix $[A|\\vec b]$ mit Trennstrich', examRelevance: 'hoch' },
      { label: 'Variablen in jeder Gleichung in gleicher Reihenfolge (sonst Koeffizienten falsch!)', examRelevance: 'hoch' },
      { label: 'Dimensionen: $A$ ist $m \\times n$, $\\vec x \\in \\mathbb{R}^n$, $\\vec b \\in \\mathbb{R}^m$', examRelevance: 'mittel' },
      { label: 'Homogenes LGS: $\\vec b = \\vec 0$, triviale Lösung $\\vec x = \\vec 0$ existiert immer', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-2-2',
    steps: [
      {
        id: 'la-2-1-s1', type: 'explanation-intuitive', title: 'Vom Gleichungssystem zur Matrix',
        content: `Stell dir vor, du hast zwei Gleichungen mit zwei Unbekannten:

$$2x + 3y = 7$$
$$x - y = 1$$

Das löst du in der Schule vielleicht mit Einsetzen oder Gleichsetzen. Aber was, wenn du **100 Gleichungen mit 100 Unbekannten** hast? (Das kommt im Maschinenbau ständig vor — z.B. bei der Finite-Elemente-Methode!)

Dann schreibst du alles als **Matrix-Gleichung**:

$$\\underbrace{\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix}}_{A} \\cdot \\underbrace{\\begin{pmatrix} x \\\\ y \\end{pmatrix}}_{\\vec{x}} = \\underbrace{\\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix}}_{\\vec{b}}$$

Die Matrix $A$ enthält die **Koeffizienten** (die Zahlen vor den Variablen). Der Vektor $\\vec{b}$ ist die **rechte Seite**.

**Kurzschreibweise:** $A\\vec{x} = \\vec{b}$

Das sieht aus wie $ax = b$ bei einer normalen Gleichung! Und genauso wie dort $x = b/a$ gilt, könnte man hier formal $\\vec{x} = A^{-1}\\vec{b}$ schreiben (falls $A$ invertierbar ist).`,
      },
      {
        id: 'la-2-1-s2', type: 'explanation-formal', title: 'Die erweiterte Koeffizientenmatrix',
        content: `Für den Gauss-Algorithmus brauchen wir die **erweiterte Koeffizientenmatrix** $[A|\\vec{b}]$:

$$\\left(\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right)$$

Wir schreiben einfach $A$ und $\\vec{b}$ nebeneinander, getrennt durch einen Strich. So haben wir alle Informationen des LGS in einer kompakten Tabelle.

**Allgemein für $m$ Gleichungen mit $n$ Unbekannten:**

$$\\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)$$

**Tipp:** Achte darauf, dass die Variablen in jeder Gleichung in der gleichen Reihenfolge stehen, bevor du die Matrix aufstellst!`,
      },
      { id: 'la-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-1-a' },
      { id: 'la-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-1-b' },
      { id: 'la-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-1-c' },
      { id: 'la-2-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-2-1-mastery' },
    ],
  },

  // ── Lesson 2: Gauss-Algorithmus ─────────────────────────────────────────────
  {
    id: 'la-2-2', unitId: 'la-unit-2',
    title: 'Gauss-Algorithmus',
    order: 2, estimatedMinutes: 25,
    learningGoals: ['Die drei erlaubten Zeilenumformungen kennen', 'Ein LGS in Stufenform bringen', 'Rücksubstitution durchführen'],
    subGoals: [
      { label: 'Drei erlaubte Zeilenumformungen: Vertauschen, Skalieren (≠0), Addieren eines Vielfachen', examRelevance: 'hoch' },
      { label: 'Ziel: Obere Dreiecksform / Stufenform (alle Einträge unter Pivot = 0)', examRelevance: 'hoch' },
      { label: 'Rücksubstitution: von unten nach oben, Variable nach Variable auflösen', examRelevance: 'hoch' },
      { label: 'Pivotierung: bei $a_{ii} = 0$ Zeile tauschen, sonst Division durch 0', examRelevance: 'hoch' },
      { label: 'Gauss-Jordan: zusätzlich auch über Pivots nullen → reduzierte Stufenform', examRelevance: 'mittel' },
      { label: 'Matrix-Inversion mit Gauss: $[A | I] \\to [I | A^{-1}]$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-2-3',
    steps: [
      {
        id: 'la-2-2-s1', type: 'explanation-intuitive', title: 'Idee des Gauss-Algorithmus',
        content: `Der Gauss-Algorithmus ist wie **Aufräumen**: Du bringst das Gleichungssystem Schritt für Schritt in eine einfache Form, aus der du die Lösung direkt ablesen kannst.

**Analogie:** Stell dir vor, du hast ein Chaos aus Gleichungen. Gauss räumt auf:
- Erst löst du die letzte Gleichung (nur eine Unbekannte)
- Dann setzt du ein und löst die vorletzte (zwei Unbekannte, eine schon bekannt)
- Und so weiter, bis alles gelöst ist

**Erlaubte Operationen** (ändern die Lösung NICHT):
1. **Zeilen vertauschen** (die Reihenfolge der Gleichungen ändern)
2. **Zeile mit Zahl $\\neq 0$ multiplizieren** (beide Seiten einer Gleichung mal gleiche Zahl)
3. **Vielfaches einer Zeile zu einer anderen addieren** (eine Gleichung zu einer anderen addieren)

**Ziel:** Alle Einträge **unterhalb** der Diagonale sollen 0 werden!`,
      },
      {
        id: 'la-2-2-s2', type: 'explanation-formal', title: 'Schritt für Schritt Beispiel',
        content: `**Beispiel:** Löse $x + 2y = 5$ und $3x + 4y = 11$.

**Schritt 1:** Erweiterte Matrix aufstellen:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 11 \\end{array}\\right)$$

**Schritt 2:** Eliminiere die 3 in Zeile 2 (Zeile 2 $-$ 3 $\\cdot$ Zeile 1):
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right)$$

Das ist die **Stufenform**! Unter der Diagonale stehen nur Nullen.

**Schritt 3: Rücksubstitution** (von unten nach oben):
- Zeile 2: $-2y = -4 \\Rightarrow y = 2$
- Zeile 1: $x + 2 \\cdot 2 = 5 \\Rightarrow x = 1$

**Lösung:** $x = 1, y = 2$ ✓

**Für größere Systeme** (3x3, 4x4, ...): Das gleiche Prinzip! Erst Spalte 1 "sauber machen" (überall 0 unter dem Pivot), dann Spalte 2, usw.`,
      },
      { id: 'la-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-2-a' },
      { id: 'la-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-2-b' },
      { id: 'la-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-2-c' },
      { id: 'la-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-la-2-2-d' },
      { id: 'la-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-2-2-mastery' },
    ],
  },

  // ── Lesson 3: Lösbarkeit ───────────────────────────────────────────────────
  {
    id: 'la-2-3', unitId: 'la-unit-2',
    title: 'Lösbarkeit von LGS',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Die drei Fälle der Lösbarkeit unterscheiden', 'Rang einer Matrix bestimmen', 'Kronecker-Capelli-Theorem anwenden'],
    subGoals: [
      { label: 'Drei Fälle: eindeutig / unendlich / keine Lösung (Widerspruch)', examRelevance: 'hoch' },
      { label: 'Rang = Anzahl Pivots in Stufenform', examRelevance: 'hoch' },
      { label: 'Kronecker-Capelli: $\\text{rg}(A) \\neq \\text{rg}([A|b])$ → keine Lösung', examRelevance: 'hoch' },
      { label: 'Eindeutig: $\\text{rg}(A) = \\text{rg}([A|b]) = n$ (Anzahl Unbekannte)', examRelevance: 'hoch' },
      { label: 'Unendlich: $\\text{rg}(A) = \\text{rg}([A|b]) < n$, freie Parameter = $n - \\text{rg}(A)$', examRelevance: 'hoch' },
      { label: 'Geometrisch (2D): Geraden schneidend / identisch / parallel', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'la-2-4',
    steps: [
      {
        id: 'la-2-3-s1', type: 'explanation-intuitive', title: 'Drei mögliche Ergebnisse',
        content: `Wenn du den Gauss-Algorithmus durchführst, gibt es **genau drei mögliche Ergebnisse**:

**Fall 1: Genau eine Lösung** (der Normalfall)
Jede Variable hat einen eindeutigen Wert. Beispiel:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right) \\quad \\Rightarrow \\quad y = 2, \\; x = 1$$

**Fall 2: Unendlich viele Lösungen**
Eine Zeile wird zu $0 = 0$ (wahre Aussage, bringt keine neue Info). Beispiel:
$$\\left(\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 0 & 0 \\end{array}\\right) \\quad \\Rightarrow \\quad x + 2y = 5$$
Eine Gleichung, zwei Unbekannte: $y$ ist frei wählbar!

**Fall 3: Keine Lösung** (Widerspruch)
Eine Zeile wird zu $0 = 5$ (falsche Aussage). Die Gleichungen widersprechen sich.

**Geometrische Vorstellung (2D):** Zwei Geraden können sich in einem Punkt schneiden (1 Lösung), übereinanderliegen (unendlich viele) oder parallel sein (keine Lösung).`,
      },
      {
        id: 'la-2-3-s2', type: 'explanation-formal', title: 'Rang und Kronecker-Capelli',
        content: `**Der Rang** einer Matrix ist die Anzahl der Pivotelemente in der Stufenform (= Anzahl der Zeilen, die nicht komplett aus Nullen bestehen).

**Satz von Kronecker-Capelli:**

Sei $A$ eine $m \\times n$-Koeffizientenmatrix und $(A|b)$ die erweiterte Matrix:

| Bedingung | Ergebnis |
|-----------|----------|
| $\\text{rang}(A) \\neq \\text{rang}(A\\vert b)$ | **Keine Lösung** (Widerspruch) |
| $\\text{rang}(A) = \\text{rang}(A\\vert b) = n$ | **Genau eine Lösung** |
| $\\text{rang}(A) = \\text{rang}(A\\vert b) < n$ | **Unendlich viele Lösungen** mit $n - \\text{rang}(A)$ freien Parametern |

Dabei ist $n$ die Anzahl der Unbekannten.

**Merkregel:**
- Gleicher Rang links und rechts: lösbar
- Verschiedener Rang: unlösbarer Widerspruch
- Rang = Anzahl Unbekannte: eindeutig
- Rang < Anzahl Unbekannte: unendlich viele Lösungen`,
      },
      { id: 'la-2-3-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-3-a' },
      { id: 'la-2-3-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-3-b' },
      { id: 'la-2-3-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-3-c' },
      { id: 'la-2-3-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-2-3-mastery' },
    ],
  },

  // ── Lesson 4: Cramersche Regel & Anwendungen ───────────────────────────────
  {
    id: 'la-2-4', unitId: 'la-unit-2',
    title: 'Cramersche Regel & Anwendungen',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Cramersche Regel für 2x2- und 3x3-Systeme anwenden', 'Technische Probleme als LGS formulieren'],
    subGoals: [
      { label: 'Cramer: $x_i = \\det(A_i)/\\det(A)$, wobei $A_i$ = $A$ mit $i$-ter Spalte durch $\\vec b$ ersetzt', examRelevance: 'hoch' },
      { label: 'Voraussetzung: $\\det(A) \\neq 0$ (nicht anwendbar bei singulärer Matrix)', examRelevance: 'hoch' },
      { label: 'Nur für **quadratische** Systeme mit eindeutiger Lösung sinnvoll', examRelevance: 'hoch' },
      { label: 'Ab $n > 4$ ist Gauss effizienter (Cramer = $O(n!)$ mit Sarrus, $n!$ Determinanten)', examRelevance: 'mittel' },
      { label: 'Technik-Anwendung: Kräftegleichgewicht, Knotenspannungsanalyse (Kirchhoff)', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'la-2-4-s1', type: 'explanation-intuitive', title: 'Cramersche Regel: Lösen mit Determinanten',
        content: `Die Cramersche Regel ist eine elegante Methode, um die Lösung eines LGS direkt mit **Determinanten** auszurechnen — ohne Gauss!

**Idee:** Jede Unbekannte $x_i$ ist ein Bruch aus zwei Determinanten:

$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

Dabei entsteht $A_i$, indem man die **$i$-te Spalte** von $A$ durch den Vektor $\\vec{b}$ ersetzt.

**Schritt für Schritt für 2x2:**

$$2x + y = 5, \\quad x - y = 1$$

$$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad \\det(A) = -2 - 1 = -3$$

$$x = \\frac{\\det\\begin{pmatrix} 5 & 1 \\\\ 1 & -1 \\end{pmatrix}}{\\det(A)} = \\frac{-5-1}{-3} = \\frac{-6}{-3} = 2$$

$$y = \\frac{\\det\\begin{pmatrix} 2 & 5 \\\\ 1 & 1 \\end{pmatrix}}{\\det(A)} = \\frac{2-5}{-3} = \\frac{-3}{-3} = 1$$

**Vorteil:** Man kann jede Variable **einzeln** berechnen, ohne das ganze System lösen zu müssen.
**Nachteil:** Für grosse Systeme ($n > 4$) ist Gauss effizienter.`,
      },
      {
        id: 'la-2-4-s2', type: 'explanation-formal', title: 'Anwendung: Kräftegleichgewicht in der Statik',
        content: `**Typische Maschinenbau-Aufgabe:** An einem Knoten greifen drei Stabkräfte an. Bestimme die Kräfte!

Die Gleichgewichtsbedingungen lauten:
$$\\sum F_x = 0: \\quad S_1 \\cos(30°) - S_2 \\cos(45°) = 100 \\text{ N}$$
$$\\sum F_y = 0: \\quad S_1 \\sin(30°) + S_2 \\sin(45°) - S_3 = 0$$
$$\\sum M_A = 0: \\quad 2 \\cdot S_2 \\sin(45°) - 3 \\cdot S_3 = 150 \\text{ Nm}$$

Das ist ein LGS mit 3 Gleichungen und 3 Unbekannten ($S_1, S_2, S_3$)!

$$\\begin{pmatrix} \\cos 30° & -\\cos 45° & 0 \\\\ \\sin 30° & \\sin 45° & -1 \\\\ 0 & 2\\sin 45° & -3 \\end{pmatrix} \\begin{pmatrix} S_1 \\\\ S_2 \\\\ S_3 \\end{pmatrix} = \\begin{pmatrix} 100 \\\\ 0 \\\\ 150 \\end{pmatrix}$$

Falls $\\det(A) \\neq 0$: System ist **statisch bestimmt** — eindeutige Lösung mit Cramer oder Gauss.

Falls $\\det(A) = 0$: System ist **statisch unbestimmt** — zusätzliche Gleichungen (z.B. Verformungen) nötig.`,
      },
      { id: 'la-2-4-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-la-2-4-a' },
      { id: 'la-2-4-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-la-2-4-b' },
      { id: 'la-2-4-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-la-2-4-c' },
      { id: 'la-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-la-2-4-mastery' },
    ],
  },
]

export const la_unit2 = {
  id: 'la-unit-2',
  title: 'Lineare Gleichungssysteme',
  order: 2,
  description: 'LGS in Matrixform, Gauss-Algorithmus, Lösbarkeit, Cramersche Regel',
  unitGoals: [
    'LGS als erweiterte Matrix $(A | \\vec{b})$ darstellen und mit Gauß-Eliminination in Stufenform bringen',
    'Lösbarkeit am Rang entscheiden: $\\text{rg}(A) = \\text{rg}(A|\\vec{b})$ = # Unbekannte $\\Rightarrow$ eindeutig',
    'Unterbestimmte Systeme parametrisieren und Lösungsraum als Vektoren angeben',
    'Cramersche Regel $x_i = \\det(A_i)/\\det(A)$ bei kleinen quadratischen Systemen anwenden',
  ],
  lessons: lessons_la_u2,
  exercises: exercises_la_u2,
}
