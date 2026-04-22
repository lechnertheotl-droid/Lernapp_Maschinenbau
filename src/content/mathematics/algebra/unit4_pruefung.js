// ── Unit 4: Prüfungsaufgaben Algebra ─────────────────────────────────────────
// Aufgaben auf TU Wien Prüfungsniveau

export const exercises_alg_u4 = {

  // ── Lektion 4-1: Prüfung Algebra-Grundlagen ──────────────────────────────
  'ex-alg-4-1-a': {
    id: 'ex-alg-4-1-a', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache vollständig: $(8x^{6}y^{3})^{2/3}$',
    options: ['$4x^{4}y^{2}$', '$4x^{4}y^{3}$', '$8x^{4}y^{2}$', '$2x^{4}y^{2}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Bei $(a \\cdot b \\cdot c)^{n}$ wird jeder Faktor einzeln mit $n$ potenziert. Gebrochene Exponenten = Wurzel hoch Zähler.

**Rechnung — Schritt für Schritt:**
1. Jeden Faktor einzeln potenzieren: $(8x^{6}y^{3})^{2/3} = 8^{2/3} \\cdot (x^{6})^{2/3} \\cdot (y^{3})^{2/3}$
2. Zahl berechnen: $8^{2/3} = (\\sqrt[3]{8})^{2} = 2^{2} = 4$
3. $x$-Teil: $(x^{6})^{2/3} = x^{6 \\cdot 2/3} = x^{4}$
4. $y$-Teil: $(y^{3})^{2/3} = y^{3 \\cdot 2/3} = y^{2}$
5. Zusammen: $4x^{4}y^{2}$

**Probe:** Setze $x=1, y=1$: $(8 \\cdot 1 \\cdot 1)^{2/3} = 8^{2/3} = 4$. Antwort: $4 \\cdot 1 \\cdot 1 = 4$. ✓

**Typischer Fehler:** Die Zahl $8$ unverändert zu lassen ($8x^{4}y^{2}$) oder $8^{2/3}$ als $8 \\cdot 2/3$ zu rechnen. Erst $\\sqrt[3]{\\cdot}$, dann Quadrat — oder umgekehrt.`,
    wrongAnswerExplanations: {
      1: 'Du hast beim $y$-Exponenten gepatzt: $(y^{3})^{2/3} = y^{3 \\cdot 2/3} = y^{2}$, nicht $y^{3}$. Wahrscheinlich hast du dort den Originalexponent $3$ unverändert übernommen. Regel: Bei Klammerpotenz wird *jeder* Exponent mit dem äußeren Exponenten multipliziert — auch der von $y$.',
      2: 'Du hast die Zahl $8$ unverändert gelassen, statt $8^{2/3}$ auszurechnen. Die Klammerpotenz verteilt sich auf *jeden* Faktor, auch auf die Konstante: $8^{2/3} = (\\sqrt[3]{8})^{2} = 2^{2} = 4$. Richtig: $4 x^{4} y^{2}$, nicht $8 x^{4} y^{2}$.',
      3: 'Du hast $8^{2/3}$ mit $\\sqrt[3]{8} = 2$ gleichgesetzt — das ist aber nur $8^{1/3}$, nicht $8^{2/3}$. Die Regel lautet $x^{m/n} = (\\sqrt[n]{x})^{m}$, hier also $(\\sqrt[3]{8})^{2} = 2^{2} = 4$, nicht $2$.',
    },
    hints: [
      'Denkrichtung: Klammerpotenz → jeder Faktor einzeln hoch $2/3$.',
      'Formel: $x^{m/n} = (\\sqrt[n]{x})^{m}$. Also $8^{2/3} = (\\sqrt[3]{8})^{2}$.',
      'Konkret: $\\sqrt[3]{8} = 2$, also $8^{2/3} = 4$. Exponenten von $x$ und $y$ jeweils mit $2/3$ multiplizieren.',
    ],
  },
  'ex-alg-4-1-b': {
    id: 'ex-alg-4-1-b', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse nach $x$ auf: $\\ln(2x - 1) = 3$',
    options: ['$x = (e^{3} + 1)/2$', '$x = e^{3}/2$', '$x = (e^{3} - 1)/2$', '$x = e^{3} + 1$'],
    correctIndex: 0,
    explanation: `**Ansatz:** $\\ln$ auf der linken Seite "entfernen" durch Exponentialfunktion $e^{\\cdot}$ auf beiden Seiten — danach lineare Gleichung lösen.

**Rechnung — Schritt für Schritt:**
1. Exponentieren: $\\ln(2x - 1) = 3 \\Rightarrow e^{\\ln(2x-1)} = e^{3} \\Rightarrow 2x - 1 = e^{3}$
2. Nach $x$ auflösen: $2x = e^{3} + 1$
3. Durch $2$ teilen: $x = (e^{3} + 1)/2 \\approx (20{,}09 + 1)/2 \\approx 10{,}54$

**Probe:** $2 \\cdot 10{,}54 - 1 = 20{,}08 \\approx e^{3}$, also $\\ln(e^{3}) = 3$. ✓

**Definitionsbereich:** $2x - 1 > 0$, d.h. $x > 0{,}5$. Lösung erfüllt das.

**Typischer Fehler:** Antwort C ($x = (e^{3}-1)/2$) entsteht durch Vorzeichenfehler beim Umstellen ($-1$ statt $+1$ auf die andere Seite). Antwort B vergisst die Konstante $-1$ komplett.`,
    wrongAnswerExplanations: {
      1: 'Du hast die Konstante $-1$ beim Umstellen komplett vergessen und direkt $2x = e^{3}$ geschrieben. Beim Lösen von $2x - 1 = e^{3}$ muss aber zuerst $+1$ auf beiden Seiten addiert werden: $2x = e^{3} + 1$, dann $x = (e^{3}+1)/2$.',
      2: 'Du hast beim Umstellen das Vorzeichen vertauscht: aus $2x - 1 = e^{3}$ folgt $2x = e^{3} + 1$ (die $-1$ wird zu $+1$, wenn sie auf die andere Seite kommt), nicht $e^{3} - 1$. Probe mit $x = (e^{3}-1)/2$: $2 \\cdot (e^{3}-1)/2 - 1 = e^{3} - 2$, nicht $e^{3}$ — Widerspruch.',
      3: 'Du hast vergessen, am Ende durch $2$ zu teilen. Aus $2x = e^{3} + 1$ folgt $x = (e^{3}+1)/2$, nicht $e^{3} + 1$. Der letzte Schritt — Koeffizient $2$ wegdividieren — ist entscheidend, sonst ist $x$ doppelt so groß wie der richtige Wert.',
    },
    hints: [
      'Denkrichtung: $\\ln$ rückgängig machen durch $e^{\\cdot}$ auf beiden Seiten.',
      'Formel: $\\ln(A) = B \\Leftrightarrow A = e^{B}$.',
      'Konkret: $2x - 1 = e^{3}$, dann $+1$ auf beide Seiten und durch $2$ teilen.',
    ],
  },
  'ex-alg-4-1-c': {
    id: 'ex-alg-4-1-c', lessonId: 'alg-4-1', type: 'number-input',
    question: '[PRÜFUNG] Berechne: $\\log_{2}(128)$. Gib eine ganze Zahl ein.',
    correctValue: 7,
    tolerance: 0,
    unit: '',
    explanation: `**Ansatz:** $\\log_{2}(128) = y$ bedeutet: $2^{y} = 128$. Also Frage: $2$ hoch wie viel ergibt $128$?

**Rechnung:** Zerlege $128$ in Zweierpotenzen:
- $2^{1}=2$, $2^{2}=4$, $2^{3}=8$, $2^{4}=16$, $2^{5}=32$, $2^{6}=64$, $2^{7}=128$ ✓

Also $\\log_{2}(128) = 7$.

**Allgemeine Regel:** $\\log_{a}(a^{n}) = n$.

**Probe:** $2^{7} = 128$. ✓

**Typischer Fehler:** Das Argument ($128$) mit der Basis ($2$) verwechseln und $\\log_{128}(2) = 1/7$ zu rechnen.`,
    hints: [
      'Denkrichtung: Der Logarithmus fragt "Basis hoch wie viel?".',
      'Formel: $\\log_{b}(x) = y \\Leftrightarrow b^{y} = x$. Hier $2^{y} = 128$.',
      'Konkret: Zähle hoch: $2, 4, 8, 16, 32, 64, 128$ — das ist die 7. Potenz.',
    ],
  },
  'ex-alg-4-1-d': {
    id: 'ex-alg-4-1-d', lessonId: 'alg-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Es gilt: $\\log(a \\cdot b) = \\log(a) \\cdot \\log(b)$.',
    correct: false,
    explanation: `**Ansatz:** Teste die Behauptung mit konkreten Zahlen.

**Rechnung (Gegenbeispiel):** Setze $a = b = 10$:
- Linke Seite: $\\log(10 \\cdot 10) = \\log(100) = 2$
- Rechte Seite: $\\log(10) \\cdot \\log(10) = 1 \\cdot 1 = 1$
- $2 \\neq 1$, also **falsch**.

**Richtige Regel:** $\\log(a \\cdot b) = \\log(a) + \\log(b)$. Der Logarithmus verwandelt Multiplikation in **Addition**, nicht in Multiplikation.

**Probe der korrekten Regel:** $\\log(100) = \\log(10) + \\log(10) = 1 + 1 = 2$. ✓

**Typischer Fehler:** Den Logarithmus als "linear" oder "multiplikativ" anzusehen. Er ist weder linear ($\\log(a+b) \\neq \\log(a) + \\log(b)$) noch multiplikativ — er ist eine spezielle Umformung: Multiplikation $\\to$ Addition.`,
    hints: [
      'Denkrichtung: Teste mit einfachen Zahlen wie $a = b = 10$.',
      'Formel: $\\log(a \\cdot b) = \\log(a) + \\log(b)$ (Produkt wird Summe, nicht Produkt).',
      'Konkret: $\\log(100) = 2$, aber $\\log(10) \\cdot \\log(10) = 1$. Also $2 \\neq 1$ — Behauptung falsch.',
    ],
  },
  'ex-alg-4-1-e': {
    id: 'ex-alg-4-1-e', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Vereinfache: $\\log_{3}(81) - \\log_{3}(3)$',
    options: ['$3$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Zwei Wege — (a) beide Logarithmen einzeln ausrechnen, oder (b) Quotientenregel anwenden.

**Rechnung — Weg (a), direkt:**
1. $\\log_{3}(81) = \\log_{3}(3^{4}) = 4$
2. $\\log_{3}(3) = \\log_{3}(3^{1}) = 1$
3. Differenz: $4 - 1 = 3$

**Rechnung — Weg (b), Quotientenregel:**
1. $\\log_{3}(81) - \\log_{3}(3) = \\log_{3}(81/3) = \\log_{3}(27)$
2. $27 = 3^{3}$, also $\\log_{3}(27) = 3$

**Probe:** $3^{3} = 27 = 81/3$. ✓

**Typischer Fehler:** $\\log_{3}(81 - 3) = \\log_{3}(78)$ zu rechnen — das wäre falsch, Logarithmus ist *nicht* linear. Die Quotientenregel gilt nur für Differenzen **von Logarithmen**, nicht im Argument.`,
    wrongAnswerExplanations: {
      1: 'Du hast $\\log_{3}(3)$ fälschlich als $2$ gerechnet — es ist aber $1$ (da $3 = 3^{1}$). Damit wäre deine Differenz $4 - 2 = 2$ statt $4 - 1 = 3$. Regel: $\\log_{a}(a) = 1$ für jede Basis $a > 0$.',
      2: 'Du hast den ersten Logarithmus falsch gerechnet: $\\log_{3}(81) = 4$ (da $81 = 3^{4}$), nicht $5$. Damit wäre $5 - 1 = 4$. Zähle die Zweierschritte: $3^{1}=3$, $3^{2}=9$, $3^{3}=27$, $3^{4}=81$ — also Exponent $4$.',
      3: 'Du hast die Quotientenregel nicht auf den Logarithmus angewandt, sondern direkt $\\log_{3}(81) - \\log_{3}(3)$ "gegenseitig gekürzt" oder $\\log_{3}(81/27)$ statt $\\log_{3}(81/3) = \\log_{3}(27) = 3$ gerechnet. Regel: $\\log(A) - \\log(B) = \\log(A/B)$. Hier: $81/3 = 27 = 3^{3}$, also $3$.',
    },
    hints: [
      'Denkrichtung: Beide Logarithmen mit Basis $3$ — direkt ausrechnen oder Quotientenregel.',
      'Formel: $\\log(A) - \\log(B) = \\log(A/B)$ und $\\log_{a}(a^{n}) = n$.',
      'Konkret: $81 = 3^{4}$, $3 = 3^{1}$, also $4 - 1 = 3$.',
    ],
  },
  'ex-alg-4-1-f': {
    id: 'ex-alg-4-1-f', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Löse die quadratische Gleichung: $x^{2} - 5x + 6 = 0$',
    options: ['$x_{1} = 2, x_{2} = 3$', '$x_{1} = 1, x_{2} = 6$', '$x_{1} = -2, x_{2} = -3$', '$x_{1} = -1, x_{2} = 6$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Faktorisierung nach Satz von Vieta — suche zwei Zahlen mit Produkt $c = 6$ und Summe $-b = 5$. Oder abc-Formel.

**Rechnung — Weg (a), Vieta:**
1. Produkt $= 6$, Summe $= 5$: Probiere Teiler von $6$: $(1,6), (2,3)$. $2 + 3 = 5$ ✓
2. Also $x^{2} - 5x + 6 = (x - 2)(x - 3) = 0$
3. Nullstellen: $x_{1} = 2, x_{2} = 3$

**Rechnung — Weg (b), abc-Formel:**
$x_{1,2} = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$, also $x_{1} = 3, x_{2} = 2$.

**Probe:**
- $x = 2$: $4 - 10 + 6 = 0$ ✓
- $x = 3$: $9 - 15 + 6 = 0$ ✓

**Typischer Fehler:** Vorzeichen vergessen: bei $(x-2)(x-3) = 0$ sind die Nullstellen $+2$ und $+3$, **nicht** $-2$ und $-3$ (Antwort C).`,
    wrongAnswerExplanations: {
      1: 'Du hast bei Vieta das zweite Zahlenpaar mit Produkt $6$ ausgewählt: $(1, 6)$ hat zwar Produkt $6$, aber Summe $7$, nicht $5$. Beide Bedingungen müssen gleichzeitig erfüllt sein: Produkt $q = 6$ *und* Summe $-p = 5$. Das trifft nur auf $(2, 3)$ zu.',
      2: 'Du hast die Vorzeichen der Nullstellen vertauscht. Aus $(x-2)(x-3) = 0$ folgt $x = +2$ oder $x = +3$ (die Nullstellen sind die Werte, bei denen die Klammern null werden). Negative Werte hätte man bei $(x+2)(x+3) = x^{2} + 5x + 6 = 0$ — das ist aber eine andere Gleichung.',
      3: 'Du hast ein Vorzeichen vertauscht und $(1, -6)$ ausprobiert. Aber $1 \\cdot (-6) = -6$ (nicht $+6$), also erfüllt das Paar die Vieta-Bedingung nicht. Richtig: $2 \\cdot 3 = 6$ und $2 + 3 = 5$ — also Nullstellen $2$ und $3$.',
    },
    hints: [
      'Denkrichtung: Vieta — zwei Zahlen, deren Produkt $6$ und Summe $5$ ergibt.',
      'Formel: $x^{2} + px + q = (x - r_{1})(x - r_{2})$ mit $r_{1} \\cdot r_{2} = q$, $r_{1} + r_{2} = -p$.',
      'Konkret: $2 \\cdot 3 = 6$ und $2 + 3 = 5$. Also $(x-2)(x-3) = 0$.',
    ],
  },
  'ex-alg-4-1-g': {
    id: 'ex-alg-4-1-g', lessonId: 'alg-4-1', type: 'number-input',
    question: '[PRÜFUNG] Die Gleichung $2x^{2} + 4x - 6 = 0$ hat zwei Lösungen. Was ist die größere Lösung?',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Durch Division auf Normalform bringen, dann abc-Formel (oder pq-Formel).

**Rechnung — Schritt für Schritt:**
1. Durch $2$ dividieren: $x^{2} + 2x - 3 = 0$
2. abc-Formel: $x_{1,2} = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$ mit $a=1, b=2, c=-3$
3. Diskriminante: $D = 2^{2} - 4 \\cdot 1 \\cdot (-3) = 4 + 12 = 16$
4. $\\sqrt{D} = 4$
5. $x_{1,2} = \\frac{-2 \\pm 4}{2}$, also $x_{1} = 1, x_{2} = -3$
6. Größere Lösung: $x = 1$

**Probe:** Einsetzen von $x = 1$: $2 \\cdot 1 + 4 \\cdot 1 - 6 = 0$ ✓. Einsetzen von $x = -3$: $2 \\cdot 9 - 12 - 6 = 0$ ✓.

**Typischer Fehler:** Vergessen, die Gleichung zuerst auf $a=1$ zu normieren, oder Vorzeichen bei $b$/$c$ falsch in die Formel einsetzen.`,
    hints: [
      'Denkrichtung: Erst durch $2$ teilen für einfachere Zahlen.',
      'Formel: $x_{1,2} = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$.',
      'Konkret: Mit $a=1, b=2, c=-3$ folgt $D = 16$, also $x_{1,2} = (-2 \\pm 4)/2$. Größere Wurzel: $+1$.',
    ],
  },
  'ex-alg-4-1-h': {
    id: 'ex-alg-4-1-h', lessonId: 'alg-4-1', type: 'true-false',
    statement: '[PRÜFUNG] Die Gleichung $x^{2} + 4 = 0$ hat in $\\mathbb{R}$ keine Lösung.',
    correct: true,
    explanation: `**Ansatz:** Umstellen und Eigenschaft "Quadrat ist nicht-negativ" nutzen.

**Rechnung:**
1. $x^{2} + 4 = 0 \\Rightarrow x^{2} = -4$
2. Aber $x^{2} \\geq 0$ für alle $x \\in \\mathbb{R}$, insbesondere niemals negativ.
3. Also gibt es in $\\mathbb{R}$ keine Lösung.

**Bestätigung über Diskriminante:** $D = b^{2} - 4ac = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. $D < 0$ bedeutet: keine reellen Lösungen.

**In $\\mathbb{C}$ hingegen:** $x = \\pm 2i$ mit $i = \\sqrt{-1}$. In der Ingenieurmathematik (z.B. Schwingungen, Wechselstrom) wichtig, auf TU-Prüfungen aber meist Reellwertigkeit gefragt.

**Typischer Fehler:** $x = \\sqrt{-4}$ als Lösung anzugeben ohne zu prüfen, ob $\\mathbb{R}$ oder $\\mathbb{C}$ gesucht ist. Ohne Angabe ist immer $\\mathbb{R}$ gemeint.`,
    hints: [
      'Denkrichtung: $x^{2} \\geq 0$ für alle reellen $x$ — kann das je $-4$ ergeben?',
      'Formel: Diskriminante $D = b^{2} - 4ac$, $D < 0 \\Rightarrow$ keine reellen Lösungen.',
      'Konkret: $D = 0 - 16 = -16 < 0$ — also in $\\mathbb{R}$ keine Lösung.',
    ],
  },
  'ex-alg-4-1-i': {
    id: 'ex-alg-4-1-i', lessonId: 'alg-4-1', type: 'matching',
    question: '[PRÜFUNG] Ordne jedem Ausdruck das richtige Vereinfachungsergebnis zu:',
    pairs: [
      { left: '$\\log(a^{3})$', right: '$3 \\cdot \\log(a)$' },
      { left: '$\\log(a) + \\log(b)$', right: '$\\log(a \\cdot b)$' },
      { left: '$\\log(a) - \\log(b)$', right: '$\\log(a/b)$' },
      { left: '$e^{\\ln(x)}$', right: '$x$' },
    ],
    explanation: `**Ansatz:** Jedes Paar gehört zu einem der vier Grundgesetze.

**Zuordnung und Begründung:**
1. **Potenzregel:** $\\log(a^{n}) = n \\cdot \\log(a)$ — der Exponent wandert als Faktor vor den Logarithmus.
2. **Produktregel:** $\\log(a) + \\log(b) = \\log(a \\cdot b)$ — Summe von Logarithmen wird Logarithmus eines Produkts.
3. **Quotientenregel:** $\\log(a) - \\log(b) = \\log(a/b)$ — Differenz wird Quotient.
4. **Umkehreigenschaft:** $e^{\\ln(x)} = x$ — $e^{\\cdot}$ und $\\ln$ heben sich gegenseitig auf.

**Probe Regel 1:** $\\log(100^{2}) = \\log(10000) = 4$, $2 \\cdot \\log(100) = 2 \\cdot 2 = 4$. ✓
**Probe Regel 4:** $e^{\\ln(5)} = 5$. ✓

**Typischer Fehler:** Produktregel mit Quotientenregel verwechseln oder $\\log(a+b)$ fälschlich zu $\\log(a) + \\log(b)$ umformen (das gilt **nicht**).`,
    hints: [
      'Denkrichtung: Vier Grundregeln — Produkt, Quotient, Potenz, Umkehr.',
      'Formel: $\\log(a \\cdot b) = \\log a + \\log b$; $\\log(a/b) = \\log a - \\log b$; $\\log(a^{n}) = n \\log a$.',
      'Konkret: $e^{\\ln(x)} = x$, weil $\\ln$ und $e^{\\cdot}$ Umkehrfunktionen sind.',
    ],
  },
  'ex-alg-4-1-j': {
    id: 'ex-alg-4-1-j', lessonId: 'alg-4-1', type: 'multiple-choice',
    question: '[PRÜFUNG] Wie viele reelle Lösungen hat $x^{2} - 6x + 9 = 0$?',
    options: ['$0$', '$1$ (Doppellösung)', '$2$ verschiedene', 'unendlich viele'],
    correctIndex: 1,
    explanation: `**Ansatz:** Diskriminante berechnen; bei $D = 0$ gibt es genau eine (Doppel-)Lösung.

**Rechnung — Schritt für Schritt:**
1. $a = 1, b = -6, c = 9$
2. Diskriminante: $D = b^{2} - 4ac = 36 - 36 = 0$
3. Bei $D = 0$: genau eine reelle Lösung (Doppelnullstelle)
4. Lösung: $x = -b/(2a) = 6/2 = 3$

**Alternative — Faktorisieren:** $x^{2} - 6x + 9 = (x - 3)^{2} = 0$, also $x = 3$ mit Vielfachheit 2.

**Probe:** $(3 - 3)^{2} = 0$ ✓

**Typischer Fehler:** Doppellösung als "zwei Lösungen" zählen (Antwort C). In der Prüfung wird explizit gefragt: "verschiedene" — eine Doppelnullstelle zählt als *eine* Lösung (mit algebraischer Vielfachheit 2).`,
    wrongAnswerExplanations: {
      0: 'Keine Lösung gäbe es nur bei $D < 0$. Hier ist $D = 36 - 36 = 0$, die Parabel berührt die $x$-Achse genau in einem Punkt ($x = 3$). Also existiert eine Lösung — mit Vielfachheit $2$, aber trotzdem genau eine.',
      2: 'Bei $D = 0$ gibt es nur *eine* reelle Lösung, keine zwei verschiedenen. Die Klammerform $x^{2} - 6x + 9 = (x-3)^{2}$ zeigt es: Nullstelle ist $x = 3$ mit Vielfachheit $2$ — aber als *unterschiedliche* Werte gerechnet ist es nur einer. Prüfungen unterscheiden zwischen "Lösungen mit Vielfachheit" und "verschiedenen Lösungen".',
      3: 'Unendlich viele Lösungen gibt es nur bei trivialen Identitäten wie $0 = 0$. Die Gleichung $x^{2} - 6x + 9 = 0$ ist eine echte quadratische Gleichung und hat höchstens zwei Lösungen — bei $D = 0$ genau eine (Doppellösung bei $x = 3$).',
    },
    hints: [
      'Denkrichtung: Diskriminante bestimmt Anzahl der Lösungen.',
      'Formel: $D > 0$ → $2$ verschiedene; $D = 0$ → Doppellösung; $D < 0$ → keine reellen.',
      'Konkret: $D = 36 - 36 = 0$, also Doppellösung bei $x = 3$.',
    ],
  },
  'ex-alg-4-1-mastery': {
    id: 'ex-alg-4-1-mastery', lessonId: 'alg-4-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein Druckbehälter hat Innendruck $p(t) = p_{0} \\cdot e^{-kt}$. Nach $5$ s ist der Druck auf die Hälfte gesunken. Wie groß ist $k$?',
    options: ['$k = \\ln(2)/5$', '$k = 1/5$', '$k = \\ln(5)/2$', '$k = 5/\\ln(2)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Bedingung "halbe Menge nach $5$ s" einsetzen, dann durch Logarithmieren nach $k$ auflösen.

**Rechnung — Schritt für Schritt:**
1. Bedingung: $p(5) = p_{0}/2$, also $p_{0} \\cdot e^{-5k} = p_{0}/2$
2. Durch $p_{0}$ dividieren: $e^{-5k} = 1/2$
3. Beide Seiten logarithmieren: $-5k = \\ln(1/2)$
4. Logarithmus­regel: $\\ln(1/2) = \\ln(1) - \\ln(2) = -\\ln(2)$
5. Also $-5k = -\\ln(2) \\Rightarrow k = \\ln(2)/5 \\approx 0{,}693/5 \\approx 0{,}139$ s$^{-1}$

**Probe:** $p(5) = p_{0} \\cdot e^{-5 \\cdot \\ln(2)/5} = p_{0} \\cdot e^{-\\ln(2)} = p_{0} \\cdot (1/2) = p_{0}/2$ ✓

**Einheitencheck:** $[k] = [1/t] = $ s$^{-1}$. ✓

**Typischer Fehler:** Antwort D ($k = 5/\\ln(2)$) entsteht durch Kehrwertbildung zum falschen Zeitpunkt. Und $k = 1/5$ (Antwort B) ignoriert die exponentielle Natur des Zerfalls — das wäre ein linearer Ansatz.`,
    wrongAnswerExplanations: {
      1: 'Du hast den exponentiellen Zerfall wie einen linearen Abfall behandelt: „Halb nach $5$ s → $k = 1/5$". Bei $e^{-kt}$ kommt aber kein einfacher Quotient heraus — du musst logarithmieren. Aus $e^{-5k} = 1/2$ folgt $k = \\ln(2)/5 \\approx 0{,}139$, nicht $1/5 = 0{,}2$.',
      2: 'Du hast $\\ln(5)$ statt $\\ln(2)$ im Logarithmus-Schritt verwendet und Zähler/Nenner getauscht. Die Halbierung heißt $e^{-5k} = 1/2 = 2^{-1}$, logarithmiert: $-5k = -\\ln(2)$, also $k = \\ln(2)/5$. Die Zahl $5$ ist die Zeit, nicht das Argument des Logarithmus.',
      3: 'Du hast Zähler und Nenner vertauscht. Aus $-5k = -\\ln(2)$ folgt $k = \\ln(2)/5$, nicht $5/\\ln(2)$. Dimensionscheck: $[k] = 1/[t]$, also $1/$s. $\\ln(2)/5 \\approx 0{,}139$ s$^{-1}$ ist plausibel, $5/\\ln(2) \\approx 7{,}21$ s$^{-1}$ wäre zu groß für eine Halbwertszeit von $5$ s.',
    },
    hints: [
      'Denkrichtung: $p_{0}/2$ nach $5$ s → Gleichung aufstellen und logarithmieren.',
      'Formel: $e^{-kt} = 1/2$ bei $t = T_{1/2}$, also $k = \\ln(2)/T_{1/2}$.',
      'Konkret: $-5k = \\ln(1/2) = -\\ln(2)$, also $k = \\ln(2)/5$.',
    ],
  },

  // ── Lektion 4-2: Prüfung Funktionen & Anwendungen ────────────────────────
  'ex-alg-4-2-a': {
    id: 'ex-alg-4-2-a', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] $f(x) = x^{3} - 3x$. An welchen Stellen hat $f$ lokale Extrema?',
    options: ['$x = 1$ und $x = -1$', '$x = 0$ und $x = 3$', '$x = \\sqrt{3}$ und $x = -\\sqrt{3}$', 'keine Extrema'],
    correctIndex: 0,
    explanation: `**Ansatz:** Notwendige Bedingung $f'(x) = 0$, dann hinreichende Bedingung über $f''$ (oder Vorzeichenwechsel von $f'$).

**Rechnung — Schritt für Schritt:**
1. Erste Ableitung: $f'(x) = 3x^{2} - 3$
2. Nullstellen: $3x^{2} - 3 = 0 \\Rightarrow x^{2} = 1 \\Rightarrow x = \\pm 1$
3. Zweite Ableitung: $f''(x) = 6x$
4. $f''(1) = 6 > 0 \\Rightarrow$ lokales Minimum bei $x = 1$ mit $f(1) = 1 - 3 = -2$
5. $f''(-1) = -6 < 0 \\Rightarrow$ lokales Maximum bei $x = -1$ mit $f(-1) = -1 + 3 = 2$

**Probe:** $f(1) = -2, f(-1) = 2$. Zwischen $-1$ und $1$ ist $f$ fallend (z.B. $f(0) = 0$), außerhalb steigend. ✓

**Typischer Fehler:** Antwort C ($x = \\pm\\sqrt{3}$) entsteht durch falsches Wurzelziehen aus $x^{2} = 3$ statt $x^{2} = 1$.`,
    wrongAnswerExplanations: {
      1: 'Du hast die Nullstellen der Funktion mit den Extremstellen verwechselt. $f(x) = x^{3} - 3x = x(x^{2} - 3)$ hat Nullstellen bei $x = 0$, $x = \\pm\\sqrt{3}$ — das sind aber nicht die Extremstellen. Extremstellen findest du durch Nullsetzen der *ersten Ableitung*: $f\'(x) = 3x^{2} - 3 = 0 \\Rightarrow x = \\pm 1$.',
      2: 'Du hast die Ableitung falsch gebildet oder die Konstante $-3$ als Koeffizient stehen lassen. $f\'(x) = 3x^{2} - 3$, und $3x^{2} = 3 \\Rightarrow x^{2} = 1 \\Rightarrow x = \\pm 1$. Die Wurzel aus $1$ ist $\\pm 1$, nicht $\\pm\\sqrt{3}$ — bei $x^{2} = 3$ käme $\\pm\\sqrt{3}$ heraus, das ist hier aber nicht der Fall.',
      3: 'Die Funktion hat Extrema — du hast vermutlich $f\'(x) = 0$ falsch gelöst oder gar nicht erst geprüft. Die Ableitung $f\'(x) = 3x^{2} - 3$ hat Nullstellen $x = \\pm 1$, und $f\'\'(\\pm 1) \\neq 0$ (hinreichende Bedingung erfüllt). Also existieren Extrema bei $x = 1$ (Min) und $x = -1$ (Max).',
    },
    hints: [
      'Denkrichtung: Extrema wo $f\'(x) = 0$, Typ über $f\'\'(x)$.',
      'Formel: $f\'(x) = 3x^{2} - 3$, $f\'\'(x) = 6x$.',
      'Konkret: $3x^{2} - 3 = 0 \\Rightarrow x = \\pm 1$. Vorzeichen von $f\'\'$ prüfen.',
    ],
  },
  'ex-alg-4-2-b': {
    id: 'ex-alg-4-2-b', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Was ist die Umkehrfunktion von $f(x) = 3x - 2$?',
    options: ['$f^{-1}(x) = (x + 2)/3$', '$f^{-1}(x) = (x - 2)/3$', '$f^{-1}(x) = 3x + 2$', '$f^{-1}(x) = 1/(3x - 2)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Standardrezept: (1) $y = f(x)$ schreiben, (2) nach $x$ auflösen, (3) $x$ und $y$ tauschen.

**Rechnung — Schritt für Schritt:**
1. Ansatz: $y = 3x - 2$
2. $+2$ auf beide Seiten: $y + 2 = 3x$
3. Durch $3$ teilen: $x = (y + 2)/3$
4. $x$ und $y$ tauschen: $f^{-1}(x) = (x + 2)/3$

**Probe durch Verkettung:**
- $f(f^{-1}(x)) = 3 \\cdot (x+2)/3 - 2 = x + 2 - 2 = x$ ✓
- $f^{-1}(f(x)) = (3x - 2 + 2)/3 = 3x/3 = x$ ✓

**Definitionsbereich:** $f: \\mathbb{R} \\to \\mathbb{R}$ linear und bijektiv, also $f^{-1}: \\mathbb{R} \\to \\mathbb{R}$.

**Typischer Fehler:** Vorzeichenfehler — bei Antwort B ($(x-2)/3$) hat man vergessen, dass beim Umstellen $-2$ zu $+2$ wird. Antwort D ist der **Kehrwert** $1/f(x)$, nicht die Umkehrfunktion $f^{-1}$.`,
    wrongAnswerExplanations: {
      1: 'Du hast beim Umstellen das Vorzeichen von $-2$ nicht gedreht. Aus $y = 3x - 2$ folgt durch $+2$ auf beiden Seiten $y + 2 = 3x$, also $x = (y+2)/3$, nicht $(y-2)/3$. Probe mit deiner Lösung: $f((x-2)/3) = 3 \\cdot (x-2)/3 - 2 = x - 4 \\neq x$.',
      2: 'Du hast einfach „alle Operationen umgedreht" nach dem Schema $3x - 2 \\to 3x + 2$ — das ist aber nicht die Umkehrfunktion, sondern eine Spiegelung der Konstante. Richtig: Gleichung $y = 3x - 2$ nach $x$ auflösen (nicht Zeichen flippen) und dann Namen vertauschen: $f^{-1}(x) = (x+2)/3$.',
      3: 'Das ist der *Kehrwert* (multiplikative Inverse), nicht die Umkehrfunktion. $1/(3x-2)$ erfüllt $f(x) \\cdot 1/f(x) = 1$, hat aber nichts mit dem Rückgängig-Machen der Operation zu tun. Die Umkehrfunktion $f^{-1}$ erfüllt $f(f^{-1}(x)) = x$.',
    },
    hints: [
      'Denkrichtung: Gleichung nach $x$ umstellen, dann Namen tauschen.',
      'Formel: Bei $y = ax + b$ ist $f^{-1}(x) = (x - b)/a$.',
      'Konkret: $y = 3x - 2 \\Rightarrow x = (y + 2)/3$. Dann $x \\leftrightarrow y$.',
    ],
  },
  'ex-alg-4-2-c': {
    id: 'ex-alg-4-2-c', lessonId: 'alg-4-2', type: 'true-false',
    statement: '[PRÜFUNG] $f(x) = x^{3}$ ist eine bijektive Funktion ($\\mathbb{R} \\to \\mathbb{R}$) und besitzt daher eine Umkehrfunktion.',
    correct: true,
    explanation: `**Ansatz:** Prüfe Injektivität und Surjektivität.

**Rechnung — Bijektivität:**
1. **Injektiv?** $f'(x) = 3x^{2} \\geq 0$ mit $f'(x) = 0$ nur bei $x = 0$. Also ist $f$ streng monoton steigend auf $\\mathbb{R}$, somit injektiv.
2. **Surjektiv?** Für jedes $y \\in \\mathbb{R}$ existiert $x = \\sqrt[3]{y}$ (dritte Wurzel ist auf ganz $\\mathbb{R}$ definiert, auch für negative Zahlen: $\\sqrt[3]{-8} = -2$).
3. Also ist $f$ bijektiv.

**Umkehrfunktion:** $f^{-1}(x) = \\sqrt[3]{x} = x^{1/3}$.

**Probe:** $f(f^{-1}(8)) = (\\sqrt[3]{8})^{3} = 2^{3} = 8$ ✓. $f(f^{-1}(-8)) = (\\sqrt[3]{-8})^{3} = (-2)^{3} = -8$ ✓.

**Typischer Fehler:** Die Funktion $f(x) = x^{2}$ mit $f(x) = x^{3}$ zu verwechseln. Bei $x^{2}$ ist die Umkehrung nur auf eingeschränktem Definitions­bereich möglich ($x \\geq 0$), weil $(-x)^{2} = x^{2}$ — nicht injektiv. Bei $x^{3}$ gibt es dieses Problem nicht (ungerade Potenz).`,
    hints: [
      'Denkrichtung: Bijektiv = injektiv + surjektiv. Prüfe beides.',
      'Formel: Streng monoton $\\Rightarrow$ injektiv; Wertemenge $= \\mathbb{R} \\Rightarrow$ surjektiv.',
      'Konkret: $f\'(x) = 3x^{2} \\geq 0$, also monoton. $\\sqrt[3]{\\cdot}$ ist auf $\\mathbb{R}$ definiert.',
    ],
  },
  'ex-alg-4-2-d': {
    id: 'ex-alg-4-2-d', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Parabel hat die Gleichung $f(x) = 2(x - 3)^{2} + 1$. Was ist der Scheitelpunkt?',
    options: ['$S(3 \\mid 1)$', '$S(-3 \\mid 1)$', '$S(3 \\mid -1)$', '$S(0 \\mid 19)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Die Scheitelform $f(x) = a(x - h)^{2} + k$ zeigt den Scheitelpunkt direkt als $S(h \\mid k)$.

**Rechnung:**
1. Vergleich: $f(x) = 2(x - 3)^{2} + 1$ mit $a(x - h)^{2} + k$
2. Identifikation: $a = 2, h = 3, k = 1$
3. Scheitelpunkt: $S(3 \\mid 1)$
4. Öffnungsrichtung: $a = 2 > 0 \\Rightarrow$ nach oben, Scheitel ist **Minimum**

**Probe:**
- $f(3) = 2 \\cdot 0 + 1 = 1$ ✓ (Scheitel liegt auf der Parabel)
- $f(4) = 2 \\cdot 1 + 1 = 3$, $f(2) = 2 \\cdot 1 + 1 = 3$ (Symmetrie um $x = 3$) ✓

**Typischer Fehler:** Vorzeichenfehler bei $h$ — in $(x - 3)^{2}$ ist $h = +3$ (nicht $-3$!), weil von $x$ die $3$ *subtrahiert* wird. Antwort B ($-3$) ist der klassische Fehler.`,
    wrongAnswerExplanations: {
      1: 'Du hast das Vorzeichen von $h$ aus der Klammer direkt übernommen — das ist der klassische Fehler. In $(x - 3)^{2}$ ist $h = +3$, nicht $-3$. Merke: Der Scheitel liegt dort, wo die Klammer null wird, also bei $x = 3$. Richtig: $S(3 \\mid 1)$.',
      2: 'Du hast das Vorzeichen bei $k$ gedreht. Die konstante $+1$ außen steht genau so in der Form $a(x-h)^{2} + k$ — also $k = +1$, nicht $-1$. Probe: $f(3) = 2 \\cdot 0 + 1 = 1$, also liegt der Scheitel bei $(3, 1)$, nicht bei $(3, -1)$.',
      3: 'Du hast vermutlich $f(0)$ ausgerechnet ($= 2 \\cdot 9 + 1 = 19$) und dies als Scheitel $(0 \\mid 19)$ gedeutet. Der Scheitel liegt aber nicht beim $y$-Achsenabschnitt, sondern beim Minimum/Maximum der Parabel — in Scheitelform direkt ablesbar als $(h, k) = (3, 1)$.',
    },
    hints: [
      'Denkrichtung: Scheitelform $a(x-h)^{2} + k$ zeigt Scheitel direkt.',
      'Formel: $S(h \\mid k)$ — aber Achtung: $h$ ist das, was von $x$ **subtrahiert** wird.',
      'Konkret: $(x - 3)^{2}$ bedeutet $h = 3$, nicht $-3$.',
    ],
  },
  'ex-alg-4-2-e': {
    id: 'ex-alg-4-2-e', lessonId: 'alg-4-2', type: 'number-input',
    question: '[PRÜFUNG] $f(x) = x^{2} - 4x + 3$. An welcher $x$-Stelle liegt der Scheitelpunkt (Minimum)?',
    correctValue: 2,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Scheitelstelle über Formel $x_{S} = -b/(2a)$ oder über quadratische Ergänzung.

**Rechnung — Weg (a), Formel:**
1. $a = 1, b = -4, c = 3$
2. $x_{S} = -b/(2a) = -(-4)/(2 \\cdot 1) = 4/2 = 2$
3. $y_{S} = f(2) = 4 - 8 + 3 = -1$
4. Scheitel: $S(2 \\mid -1)$

**Rechnung — Weg (b), quadratische Ergänzung:**
$x^{2} - 4x + 3 = (x^{2} - 4x + 4) - 4 + 3 = (x - 2)^{2} - 1$
Scheitelform gibt $S(2 \\mid -1)$.

**Rechnung — Weg (c), Ableitung:**
$f'(x) = 2x - 4 = 0 \\Rightarrow x = 2$.

**Probe:** $f(2) = -1$, und $f(1) = 0 > -1$, $f(3) = 0 > -1$ — $x = 2$ ist tatsächlich Minimum. ✓

**Typischer Fehler:** Vorzeichen bei $b$ übersehen: $b = -4$, also $-b = +4$. Wer $b = 4$ einsetzt, erhält $x_{S} = -2$ (falsch).`,
    hints: [
      'Denkrichtung: Scheitel einer Parabel $ax^{2} + bx + c$ liegt bei $x_{S} = -b/(2a)$.',
      'Formel: Oder quadratisch ergänzen: $(x-h)^{2} + k$-Form finden.',
      'Konkret: $a = 1$, $b = -4$, also $x_{S} = 4/2 = 2$.',
    ],
  },
  'ex-alg-4-2-f': {
    id: 'ex-alg-4-2-f', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Funktion hat den Definitionsbereich $D = (0, \\infty)$?',
    options: ['$f(x) = \\ln(x)$', '$f(x) = x^{2}$', '$f(x) = e^{x}$', '$f(x) = \\sin(x)$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Für jeden Funktionstyp den maximalen Definitionsbereich bestimmen und mit $(0, \\infty)$ vergleichen.

**Prüfung der Optionen:**
1. **$\\ln(x)$:** Nur für $x > 0$ definiert (Argument muss positiv sein). $D = (0, \\infty)$ ✓
2. **$x^{2}$:** Polynom, für alle $x \\in \\mathbb{R}$ definiert. $D = \\mathbb{R}$ ✗
3. **$e^{x}$:** Für alle $x \\in \\mathbb{R}$ definiert, Wertemenge ist allerdings $(0, \\infty)$. $D = \\mathbb{R}$ ✗
4. **$\\sin(x)$:** Für alle $x \\in \\mathbb{R}$ definiert. $D = \\mathbb{R}$ ✗

**Antwort: A** — $\\ln(x)$.

**Probe:** $\\ln(-1)$ ist nicht definiert, $\\ln(0)$ divergiert zu $-\\infty$, $\\ln(1) = 0, \\ln(e) = 1$. ✓

**Typischer Fehler:** $e^{x}$ mit $\\ln(x)$ verwechseln — $e^{x}$ hat Definitionsbereich $\\mathbb{R}$, aber Wertebereich $(0, \\infty)$. $\\ln$ ist spiegelbildlich: Definitionsbereich $(0, \\infty)$, Wertebereich $\\mathbb{R}$.`,
    wrongAnswerExplanations: {
      1: '$x^{2}$ ist als Polynom für *alle* reellen Zahlen definiert, also $D = \\mathbb{R}$. Der *Wertebereich* ist $[0, \\infty)$, aber das ist nicht dasselbe wie der Definitionsbereich. Du hast vermutlich Definitions- und Wertebereich verwechselt.',
      2: '$e^{x}$ hat Definitionsbereich $\\mathbb{R}$ (Exponentialfunktion ist überall definiert) — nur der *Wertebereich* ist $(0, \\infty)$. Du hast Definition- und Wertebereich vertauscht. $\\ln(x)$ ist die spiegelbildliche Situation: Definitionsbereich $(0, \\infty)$, Wertebereich $\\mathbb{R}$.',
      3: '$\\sin(x)$ ist eine trigonometrische Funktion, die für *alle* reellen Zahlen definiert ist, also $D = \\mathbb{R}$. Der Wertebereich ist $[-1, 1]$, aber gefragt war der Definitionsbereich. Nur $\\ln(x)$ hat $D = (0, \\infty)$.',
    },
    hints: [
      'Denkrichtung: Welcher Funktionstyp lässt nur positive Argumente zu?',
      'Formel: $\\ln(x)$ ist nur für $x > 0$ definiert. $e^{x}, x^{2}, \\sin(x)$ sind überall definiert.',
      'Konkret: $\\ln(x)$ ist die einzige mit $D = (0, \\infty)$.',
    ],
  },
  'ex-alg-4-2-g': {
    id: 'ex-alg-4-2-g', lessonId: 'alg-4-2', type: 'sorting',
    question: '[PRÜFUNG] Bringe die Schritte zur Bestimmung der Umkehrfunktion von $f(x) = 2e^{x} - 1$ in die richtige Reihenfolge:',
    items: [
      '$y = 2e^{x} - 1$ aufschreiben',
      '$y + 1 = 2e^{x}$ umformen',
      '$(y + 1)/2 = e^{x}$ isolieren',
      '$x = \\ln((y + 1)/2)$ logarithmieren',
      '$x$ und $y$ tauschen: $f^{-1}(x) = \\ln((x + 1)/2)$',
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: `**Ansatz:** Standardrezept — (1) Gleichung $y = f(x)$ hinschreiben, (2)–(4) schrittweise nach $x$ auflösen, (5) $x$ und $y$ tauschen.

**Rechnung — Schritt für Schritt:**
1. $y = 2e^{x} - 1$ (Startgleichung)
2. $+1$ auf beide Seiten: $y + 1 = 2e^{x}$
3. Durch $2$ dividieren: $(y + 1)/2 = e^{x}$
4. Logarithmieren: $\\ln((y+1)/2) = x$
5. Namen tauschen: $f^{-1}(x) = \\ln((x+1)/2)$

**Definitionsbereich von $f^{-1}$:** Nur $(x+1)/2 > 0$, also $x > -1$. Das entspricht dem Wertebereich von $f$: $f(x) > -1$ für alle $x \\in \\mathbb{R}$.

**Probe:** $f^{-1}(f(x)) = \\ln((2e^{x} - 1 + 1)/2) = \\ln(e^{x}) = x$ ✓

**Typischer Fehler:** Das Tauschen von $x$ und $y$ *vor* dem Auflösen — das macht das Umstellen unübersichtlich. Immer erst nach $x$ auflösen, *dann* umbenennen.`,
    hints: [
      'Denkrichtung: Erst nach $x$ auflösen (linke Seite), dann Namen tauschen.',
      'Formel: $\\ln$ ist die Umkehrung von $e^{\\cdot}$ — zuletzt anwenden.',
      'Konkret: Konstanten isolieren → durch Koeffizient teilen → logarithmieren → umbenennen.',
    ],
  },
  'ex-alg-4-2-h': {
    id: 'ex-alg-4-2-h', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Ein Bauteil dehnt sich mit $l(T) = l_{0} \\cdot (1 + \\alpha \\cdot T)$ aus. $l_{0} = 1$ m, $\\alpha = 2 \\cdot 10^{-5}$ K$^{-1}$. Bei $T = 500$ K ist $l = $',
    options: ['$1{,}01$ m', '$1{,}001$ m', '$1{,}1$ m', '$2$ m'],
    correctIndex: 0,
    explanation: `**Ansatz:** Werte in die Formel einsetzen und Zehnerpotenzen sauber zusammenfassen.

**Rechnung — Schritt für Schritt:**
1. Werte einsetzen: $l(500) = 1 \\cdot (1 + 2 \\cdot 10^{-5} \\cdot 500)$
2. Produkt im Argument: $2 \\cdot 10^{-5} \\cdot 500 = 2 \\cdot 500 \\cdot 10^{-5} = 1000 \\cdot 10^{-5} = 10^{3} \\cdot 10^{-5} = 10^{-2} = 0{,}01$
3. In Klammer: $1 + 0{,}01 = 1{,}01$
4. Mit $l_{0} = 1$: $l(500) = 1 \\cdot 1{,}01 = 1{,}01$ m

**Interpretation:** Ausdehnung um $\\Delta l = 1$ cm auf $1$ m — typisch für Stahl bei $500$ K.

**Einheitencheck:** $[\\alpha T] = $ K$^{-1} \\cdot$ K $= 1$ (dimensionslos, wie es sein muss). $[l] = $ m. ✓

**Plausibilitätscheck:** Wärmeausdehnungen bei Metallen liegen typisch bei $10^{-5}$/K, d.h. bei $\\Delta T = 500$ K etwa $0{,}5\\,\\%$ bis $1\\,\\%$ Längenänderung. $1{,}01$ m passt. ✓

**Typischer Fehler:** $2 \\cdot 10^{-5} \\cdot 500$ falsch zu $10^{-3}$ rechnen (Antwort B, $1{,}001$ m) — dabei $10^{3} \\cdot 10^{-5} = 10^{-2}$ richtig.`,
    wrongAnswerExplanations: {
      1: 'Du hast bei den Zehnerpotenzen einen Faktor verloren: $2 \\cdot 10^{-5} \\cdot 500 = 10^{-2} = 0{,}01$, nicht $10^{-3} = 0{,}001$. Rechnung: $500 = 5 \\cdot 10^{2}$, also $2 \\cdot 10^{-5} \\cdot 5 \\cdot 10^{2} = 10 \\cdot 10^{-3} = 10^{-2}$. Richtig: $l = 1{,}01$ m.',
      2: 'Du hast einen Faktor $10$ zu viel angesetzt: $0{,}1$ statt $0{,}01$. Rechne: $2 \\cdot 500 = 1000 = 10^{3}$ und $10^{3} \\cdot 10^{-5} = 10^{-2} = 0{,}01$, nicht $10^{-1} = 0{,}1$. Damit wäre die Längenänderung $10$ cm auf $1$ m — unrealistisch groß für $500$ K.',
      3: 'Du hast den Term $\\alpha T$ komplett weggelassen und direkt $2 \\cdot l_{0} = 2$ m gerechnet, oder du hast $l_{0}$ und $\\alpha$ vertauscht. Die Ausdehnungsformel lautet $l = l_{0}(1 + \\alpha T)$, nicht $l = 2 l_{0}$. Eine Verdoppelung der Länge wäre physikalisch bei Stahl utopisch.',
    },
    hints: [
      'Denkrichtung: Direkt einsetzen und Zehnerpotenzen zusammenfassen.',
      'Formel: $l(T) = l_{0}(1 + \\alpha T)$. Einheit von $\\alpha T$: dimensionslos.',
      'Konkret: $2 \\cdot 10^{-5} \\cdot 500 = 10^{3} \\cdot 10^{-5} = 10^{-2} = 0{,}01$.',
    ],
  },
  'ex-alg-4-2-i': {
    id: 'ex-alg-4-2-i', lessonId: 'alg-4-2', type: 'true-false',
    statement: '[PRÜFUNG] Der Graph von $f^{-1}(x)$ entsteht aus dem Graphen von $f(x)$ durch Spiegelung an der Geraden $y = x$.',
    correct: true,
    explanation: `**Ansatz:** Prüfe, wie Punkte $(a, b)$ auf $f$ zu Punkten auf $f^{-1}$ werden.

**Rechnung:**
- Wenn $(a, b) \\in f$, also $f(a) = b$, dann ist $f^{-1}(b) = a$, also $(b, a) \\in f^{-1}$.
- Geometrisch: Jeder Punkt $(a, b)$ wird zu $(b, a)$ — das ist **die** Spiegelung an der Winkelhalbierenden $y = x$.

**Visueller Check:**
- $f(x) = e^{x}$ geht durch $(0, 1)$ und $(1, e)$.
- $f^{-1}(x) = \\ln(x)$ geht durch $(1, 0)$ und $(e, 1)$ — genau die Spiegelbilder.

**Probe:** Auf der Geraden $y = x$ gilt $f(x) = f^{-1}(x) = x$, d.h. Fixpunkte liegen auf der Spiegelachse.

**Typischer Fehler:** Spiegelung an der $x$-Achse ($y = -x$-Gerade) mit Spiegelung an $y = x$ verwechseln. Erstere bildet $(a, b)$ auf $(a, -b)$ ab — das ergibt den Graphen von $-f(x)$, nicht die Umkehrfunktion.`,
    hints: [
      'Denkrichtung: Punkt $(a, b)$ auf $f$ wird zu welchem Punkt auf $f^{-1}$?',
      'Formel: Umkehrfunktion $=$ Vertauschung von $x$ und $y$.',
      'Konkret: $(a, b) \\to (b, a)$ ist geometrisch Spiegelung an $y = x$.',
    ],
  },
  'ex-alg-4-2-j': {
    id: 'ex-alg-4-2-j', lessonId: 'alg-4-2', type: 'multiple-choice',
    question: '[PRÜFUNG] Polynomdivision: $(x^{3} - 2x^{2} - 5x + 6) \\div (x - 1)$. Das Ergebnis ist:',
    options: ['$x^{2} - x - 6$', '$x^{2} + x - 6$', '$x^{2} - 3x + 6$', '$x^{2} - x + 6$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Polynomdivision wie schriftliche Division — höchste Potenz zuerst, Subtrahieren, wiederholen.

**Rechnung — Schritt für Schritt:**
1. $x^{3} \\div x = x^{2}$. Multiplizieren: $x^{2}(x-1) = x^{3} - x^{2}$. Subtrahieren: $(x^{3} - 2x^{2}) - (x^{3} - x^{2}) = -x^{2}$.
2. Herunterholen $-5x$: $-x^{2} - 5x$. $-x^{2} \\div x = -x$. Multiplizieren: $-x(x-1) = -x^{2} + x$. Subtrahieren: $-5x - x = -6x$.
3. Herunterholen $+6$: $-6x + 6$. $-6x \\div x = -6$. Multiplizieren: $-6(x-1) = -6x + 6$. Subtrahieren: $0$. Rest $= 0$.

**Ergebnis:** $x^{2} - x - 6$.

**Probe (Rücktest):** $(x-1)(x^{2} - x - 6) = x^{3} - x^{2} - 6x - x^{2} + x + 6 = x^{3} - 2x^{2} - 5x + 6$ ✓

**Nullstellen des Quotienten:** $x^{2} - x - 6 = (x - 3)(x + 2) = 0 \\Rightarrow x = 3$ oder $x = -2$. Zusammen mit der ursprünglichen Nullstelle $x = 1$ ergeben sich alle drei Nullstellen: $\\{1, 3, -2\\}$.

**Typischer Fehler:** Vorzeichen bei Subtraktion vergessen — insbesondere der Übergang $(x^{3} - 2x^{2}) - (x^{3} - x^{2}) = -x^{2}$ (nicht $-3x^{2}$).`,
    wrongAnswerExplanations: {
      1: 'Du hast das Vorzeichen beim mittleren Term verwechselt: $+x$ statt $-x$. Der erste Subtraktionsschritt ergibt $-x^{2}$, dann $-x^{2} : x = -x$ (nicht $+x$). Probe: $(x-1)(x^{2} + x - 6) = x^{3} + x^{2} - 6x - x^{2} - x + 6 = x^{3} - 7x + 6 \\neq P(x)$.',
      2: 'Du hast beim ersten Subtraktionsschritt falsch gerechnet: $(x^{3} - 2x^{2}) - (x^{3} - x^{2}) = -x^{2}$, nicht $-3x^{2}$. Der Fehler kommt vom Vergessen der Klammer beim Abziehen — das Minuszeichen vor $-x^{2}$ muss zu $+x^{2}$ werden: $-2x^{2} - (-x^{2}) = -2x^{2} + x^{2} = -x^{2}$.',
      3: 'Du hast das Vorzeichen des konstanten Gliedes vertauscht und $+6$ statt $-6$ im Quotienten gelassen. Der letzte Divisionsschritt lautet $-6x : x = -6$, und die Probe zeigt: $(x-1)(x^{2} - x + 6) = x^{3} - x^{2} + 6x - x^{2} + x - 6 = x^{3} - 2x^{2} + 7x - 6 \\neq P(x)$.',
    },
    hints: [
      'Denkrichtung: Polynomdivision wie schriftliche Zahlendivision, höchste Potenz zuerst.',
      'Formel: Multiplizier und subtrahier, hole nächsten Term herunter, wiederhole.',
      'Konkret: Rücktest: $(x-1) \\cdot$ Ergebnis muss das Originalpolynom geben.',
    ],
  },
  'ex-alg-4-2-mastery': {
    id: 'ex-alg-4-2-mastery', lessonId: 'alg-4-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die Nachfragefunktion eines Produkts lautet $p(x) = 100 - 2x$ (Preis in €, $x = $ Menge). Der Umsatz $U(x) = x \\cdot p(x)$ wird maximal bei $x = $',
    options: ['$x = 25$', '$x = 50$', '$x = 100$', '$x = 10$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Umsatzfunktion aufstellen, erkennen als Parabel, Scheitelpunkt bestimmen.

**Rechnung — Schritt für Schritt:**
1. Umsatz: $U(x) = x \\cdot (100 - 2x) = 100x - 2x^{2}$
2. Das ist eine Parabel in $x$ mit $a = -2, b = 100, c = 0$. Wegen $a < 0$ öffnet sie nach unten $\\Rightarrow$ Scheitel ist **Maximum**.
3. Scheitelstelle: $x_{S} = -b/(2a) = -100/(2 \\cdot (-2)) = -100/(-4) = 25$
4. Umsatzmaximum: $U(25) = 100 \\cdot 25 - 2 \\cdot 625 = 2500 - 1250 = 1250$ €

**Probe mit Ableitung:** $U'(x) = 100 - 4x = 0 \\Rightarrow x = 25$. $U''(x) = -4 < 0 \\Rightarrow$ Maximum ✓.

**Einheitencheck:** $[U] = [x] \\cdot [p] = $ Stück $\\cdot$ €/Stück $=$ €. Stimmt.

**Plausibilität:** Bei $x = 50$ wäre $p = 0$ (kein Preis) $\\Rightarrow U = 0$. Bei $x = 0$ wäre ebenfalls $U = 0$. Dazwischen muss das Maximum liegen — genau in der Mitte bei $x = 25$.

**Typischer Fehler:** Antwort B ($x = 50$) ist die Nullstelle von $p(x)$, nicht die Stelle maximalen Umsatzes.`,
    wrongAnswerExplanations: {
      1: '$x = 50$ ist die Nullstelle der Preisfunktion $p(x) = 100 - 2x$ — dort wäre der Preis $0$ und damit auch der Umsatz $U = x \\cdot 0 = 0$. Das Umsatzmaximum liegt genau zwischen den beiden Nullstellen von $U(x) = 100x - 2x^{2}$ (also zwischen $0$ und $50$): in der Mitte bei $x = 25$.',
      2: '$x = 100$ ist die Konstante $p(0) = 100$ (Höchstpreis bei Menge null), nicht die Stelle des Maximums. Du hast Preis und Menge verwechselt. Das Maximum der Umsatzfunktion $U = x \\cdot p(x) = 100x - 2x^{2}$ liegt beim Scheitel der nach unten geöffneten Parabel: $x_{S} = 25$.',
      3: 'Du hast vermutlich $100/10 = 10$ gerechnet oder eine andere willkürliche Teilung vorgenommen. Der Scheitel einer Parabel $ax^{2} + bx + c$ liegt bei $x_{S} = -b/(2a)$. Hier $a = -2$, $b = 100$, also $x_{S} = -100/(-4) = 25$, nicht $10$.',
    },
    hints: [
      'Denkrichtung: $U(x)$ ist eine nach unten geöffnete Parabel — Maximum am Scheitel.',
      'Formel: $x_{S} = -b/(2a)$ für $U(x) = ax^{2} + bx + c$.',
      'Konkret: $U(x) = -2x^{2} + 100x$, also $x_{S} = -100/(-4) = 25$.',
    ],
  },

  // ── Lektion 4-3: Gleichungssysteme & technische Anwendungen ────────────────
  'ex-alg-4-3-a': {
    id: 'ex-alg-4-3-a', lessonId: 'alg-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Lösungsstrategie ist für das System $2x + 3y = 7$, $x - y = 1$ am effizientesten und was ist die Lösung?',
    options: [
      'Einsetzungsverfahren: $x = 1 + y$ einsetzen $\\Rightarrow x = 2, y = 1$',
      'Nur Multiplizieren beider Gleichungen',
      'Probieren mit ganzen Zahlen ohne System',
      'Matrix transponieren',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Bei einem 2×2-System mit "einfacher" Variable (hier $x$ in Zeile 2) ist Einsetzungsverfahren optimal.

**Rechnung — Schritt für Schritt:**
1. Aus Zeile 2: $x = 1 + y$
2. In Zeile 1 einsetzen: $2(1 + y) + 3y = 7 \\Rightarrow 2 + 2y + 3y = 7 \\Rightarrow 2 + 5y = 7$
3. Nach $y$ auflösen: $5y = 5 \\Rightarrow y = 1$
4. $y$ zurück einsetzen: $x = 1 + 1 = 2$
5. Lösung: $(x, y) = (2, 1)$

**Probe:**
- Zeile 1: $2 \\cdot 2 + 3 \\cdot 1 = 4 + 3 = 7$ ✓
- Zeile 2: $2 - 1 = 1$ ✓

**Alternative — Additions­verfahren:** Zeile 2 mit $3$ multiplizieren: $3x - 3y = 3$. Addieren zu Zeile 1: $5x = 10 \\Rightarrow x = 2$. Dann $y = 1$.

**Typischer Fehler:** Antwort C ("Probieren") scheitert bei nicht-ganzzahligen Lösungen. Bei 2×2-Systemen ist Einsetzen oder Addieren immer zielführend; Matrix-Gauss lohnt sich erst bei $n \\geq 3$.`,
    wrongAnswerExplanations: {
      1: 'Das Multiplizieren einer einzelnen Gleichung mit einer Konstanten ändert nichts an den Lösungen und löst das System nicht. Erst das *Addieren* zweier Gleichungen (eventuell nach Multiplikation mit passenden Faktoren) eliminiert eine Variable. Der vollständige Algorithmus: Zeile 2 mit $3$ multiplizieren, dann zu Zeile 1 addieren: $5x = 10 \\Rightarrow x = 2, y = 1$.',
      2: 'Probieren ohne systematisches Vorgehen funktioniert nur zufällig — bei ganzzahligen, kleinen Lösungen vielleicht, aber schon bei rationalen oder großen Werten scheitert es. Das Einsetzungs- oder Additionsverfahren liefert die Lösung garantiert. Außerdem bekommst du in der Prüfung keine Punkte für „geraten".',
      3: 'Das Transponieren einer Koeffizientenmatrix ist eine Operation aus der linearen Algebra, aber kein Lösungsverfahren für Gleichungssysteme. Es vertauscht Zeilen und Spalten, ändert aber nicht die Lösungen. Für $2 \\times 2$-Systeme verwendet man Einsetzungs- oder Additionsverfahren.',
    },
    hints: [
      'Denkrichtung: Eine Variable aus einer Gleichung isolieren, einsetzen.',
      'Formel: Aus $x - y = 1$ folgt $x = 1 + y$.',
      'Konkret: Einsetzen gibt $5y = 5$, also $y = 1, x = 2$. Probe machen.',
    ],
  },
  'ex-alg-4-3-b': {
    id: 'ex-alg-4-3-b', lessonId: 'alg-4-3', type: 'number-input',
    question: '[PRÜFUNG] Ein Tragwerk hat zwei Stäbe mit Kräften $F_{1}$, $F_{2}$. Gleichgewicht: $F_{1} + 2F_{2} = 12$ kN und $2F_{1} - F_{2} = 4$ kN. Welchen Wert hat $F_{1}$ in kN?',
    correctValue: 4,
    tolerance: 0.01,
    unit: 'kN',
    explanation: `**Ansatz:** 2×2-System — Einsetzungs- oder Additions­verfahren.

**Rechnung — Schritt für Schritt (Einsetzen):**
1. Aus Zeile 1: $F_{1} = 12 - 2F_{2}$
2. In Zeile 2 einsetzen: $2(12 - 2F_{2}) - F_{2} = 4$
3. Auflösen: $24 - 4F_{2} - F_{2} = 4 \\Rightarrow 24 - 5F_{2} = 4 \\Rightarrow 5F_{2} = 20 \\Rightarrow F_{2} = 4$ kN
4. Zurück: $F_{1} = 12 - 2 \\cdot 4 = 12 - 8 = 4$ kN

**Probe:**
- Zeile 1: $4 + 2 \\cdot 4 = 4 + 8 = 12$ kN ✓
- Zeile 2: $2 \\cdot 4 - 4 = 8 - 4 = 4$ kN ✓

**Einheitencheck:** Beide Gleichungen haben kN auf beiden Seiten. ✓

**Plausibilitätscheck:** Bei $F_{1} = F_{2} = 4$ kN sind die Kräfte ausgewogen; typisch für symmetrische Lastfälle.

**Typischer Fehler:** Vorzeichenfehler bei der Substitution — insbesondere bei $-F_{2}$ in Zeile 2.`,
    hints: [
      'Denkrichtung: Aus Zeile 1 folgt $F_{1} = 12 - 2F_{2}$. Einsetzen.',
      'Formel: Standard-Einsetzungs­verfahren für 2×2-Systeme.',
      'Konkret: $24 - 5F_{2} = 4 \\Rightarrow F_{2} = 4$, dann $F_{1} = 4$ kN.',
    ],
  },
  'ex-alg-4-3-c': {
    id: 'ex-alg-4-3-c', lessonId: 'alg-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Eine Wurzelgleichung $\\sqrt{f(x)} = g(x)$ löst man durch Quadrieren beider Seiten — die erhaltene Lösung muss IMMER in die Originalgleichung eingesetzt werden, weil Quadrieren Scheinlösungen erzeugen kann.',
    correct: true,
    explanation: `**Ansatz:** Quadrieren ist **keine** Äquivalenz­umformung, sondern nur eine Implikation ($A = B \\Rightarrow A^{2} = B^{2}$, umgekehrt nicht).

**Erklärung:** Beim Quadrieren geht die Vorzeicheninformation verloren — negative und positive Werte werden "zu einem". Dadurch kann die quadrierte Gleichung mehr Lösungen haben als die ursprüngliche.

**Beispiel (Scheinlösung):**
- Originalgleichung: $\\sqrt{x} = -1$. Das hat **keine** reelle Lösung ($\\sqrt{\\cdot} \\geq 0$).
- Quadriert: $x = 1$. Einsetzen: $\\sqrt{1} = 1 \\neq -1$. Also Scheinlösung!

**Weiteres Beispiel:** $\\sqrt{x + 5} = x - 1$. Quadrieren liefert zwei Kandidaten $x = 4$ und $x = -1$; nur $x = 4$ erfüllt das Original (siehe nächste Aufgabe).

**Merkregel:** Nach Quadrieren immer **Probe** in der Originalgleichung. Zusatz­bedingung: die rechte Seite muss $\\geq 0$ sein (denn $\\sqrt{\\cdot} \\geq 0$).

**Typischer Prüfungsfehler:** Beide Lösungen der quadrierten Gleichung als gültig angeben, ohne Probe.`,
    hints: [
      'Denkrichtung: Ist Quadrieren eine Äquivalenz­umformung?',
      'Formel: $A = B \\Rightarrow A^{2} = B^{2}$, aber nicht umgekehrt.',
      'Konkret: $\\sqrt{x} = -1$ hat keine Lösung, aber quadriert gibt $x = 1$ — das ist eine Scheinlösung.',
    ],
  },
  'ex-alg-4-3-d': {
    id: 'ex-alg-4-3-d', lessonId: 'alg-4-3', type: 'matching',
    question: '[PRÜFUNG] Ordne den Gleichungstypen ihre Standard­lösungsmethode zu.',
    pairs: [
      { left: 'Lineares System $2 \\times 2$', right: 'Einsetzungs-/Additions­verfahren' },
      { left: 'Lineares System $n \\times n$', right: 'Gauß-Verfahren' },
      { left: 'Wurzelgleichung $\\sqrt{f(x)} = g(x)$', right: 'Quadrieren + Probe' },
      { left: 'Betragsgleichung $|f(x)| = c$', right: 'Fallunterscheidung: $f = c$ oder $f = -c$' },
    ],
    explanation: `**Ansatz:** Jeder Gleichungstyp hat eine typische Strategie, die den Term "zerlegt" oder normalisiert.

**Begründungen:**
1. **2×2-System:** Einsetzen/Addieren ist direkt und übersichtlich — Gauß wäre Overkill.
2. **$n \\times n$-System:** Ab $n = 3$ wird Gauß systematisch effizient (Pivotisieren, Dreiecksform).
3. **Wurzelgleichung:** Quadrieren entfernt die Wurzel, aber **keine Äquivalenz** → Probe ist Pflicht.
4. **Betragsgleichung:** $|f| = c$ bedeutet $f = +c$ ODER $f = -c$ — beide Fälle getrennt lösen, dann vereinigen.

**Probe durch Anwenden:**
- $\\sqrt{x} = 2 \\Rightarrow x = 4$ (quadriert), Probe: $\\sqrt{4} = 2$ ✓
- $|x - 1| = 3 \\Rightarrow x - 1 = 3$ oder $x - 1 = -3$, also $x = 4$ oder $x = -2$.

**Typischer Fehler:** Bei Betragsgleichung nur einen Fall betrachten (oft den positiven).`,
    hints: [
      'Denkrichtung: Wurzel → quadrieren; Betrag → Fälle; Linear → Einsetzen/Gauß.',
      'Formel: $|f| = c \\Leftrightarrow f = c \\lor f = -c$; $\\sqrt{f} = g \\Rightarrow f = g^{2}$ (+ Probe).',
      'Konkret: Nicht-äquivalente Umformungen (Quadrieren, Beträge entfernen) brauchen immer Nachprüfung.',
    ],
  },
  'ex-alg-4-3-e': {
    id: 'ex-alg-4-3-e', lessonId: 'alg-4-3', type: 'number-input',
    question: '[PRÜFUNG] Löse $\\sqrt{x + 5} = x - 1$. Gib die gültige Lösung $x$ an.',
    correctValue: 4,
    tolerance: 0.001,
    unit: '',
    explanation: `**Ansatz:** Quadrieren, quadratische Gleichung lösen, Probe machen (Wurzel­gleichung!).

**Rechnung — Schritt für Schritt:**
1. Vorbedingung: Linke Seite $\\sqrt{x+5} \\geq 0$, also muss rechte Seite $x - 1 \\geq 0$ sein, d.h. $x \\geq 1$.
2. Quadrieren: $x + 5 = (x - 1)^{2} = x^{2} - 2x + 1$
3. Umstellen: $0 = x^{2} - 3x - 4$
4. Faktorisieren (Vieta: Produkt $-4$, Summe $-3$): $(x - 4)(x + 1) = 0$
5. Kandidaten: $x = 4$ oder $x = -1$

**Probe in Originalgleichung:**
- $x = 4$: $\\sqrt{9} = 3$, $x - 1 = 3$. $3 = 3$ ✓
- $x = -1$: $\\sqrt{4} = 2$, $x - 1 = -2$. $2 \\neq -2$ ✗ (Scheinlösung!)

**Gültige Lösung:** $x = 4$.

**Warum Scheinlösung?** Für $x = -1$ ist $x - 1 = -2 < 0$, verletzt Vorbedingung. Quadrieren hat das "Vorzeichen vergessen".

**Typischer Fehler:** Beide Kandidaten als Lösung angeben, ohne die Vorbedingung bzw. Probe zu beachten.`,
    hints: [
      'Denkrichtung: Quadrieren, quadratische Gleichung lösen, Probe.',
      'Formel: $\\sqrt{A} = B \\Rightarrow A = B^{2}$ (+ Vorbedingung $B \\geq 0$).',
      'Konkret: $x^{2} - 3x - 4 = 0 \\Rightarrow x = 4$ oder $x = -1$. Probe eliminiert $-1$.',
    ],
  },
  'ex-alg-4-3-f': {
    id: 'ex-alg-4-3-f', lessonId: 'alg-4-3', type: 'multiple-choice',
    question: '[PRÜFUNG] Eine Betragsungleichung $|2x - 3| \\leq 5$ hat welche Lösungsmenge?',
    options: [
      '$-1 \\leq x \\leq 4$',
      '$x \\leq 4$ (nur)',
      '$x \\geq -1$ (nur)',
      '$x = 4$ (Einzellösung)',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** $|u| \\leq c$ mit $c \\geq 0$ ist äquivalent zu $-c \\leq u \\leq c$ (Doppel­ungleichung).

**Rechnung — Schritt für Schritt:**
1. Umformen: $|2x - 3| \\leq 5 \\Leftrightarrow -5 \\leq 2x - 3 \\leq 5$
2. $+3$ auf alle drei Teile: $-2 \\leq 2x \\leq 8$
3. $\\div 2$ (positiv, Richtungen bleiben): $-1 \\leq x \\leq 4$

**Lösungsmenge:** $[-1, 4]$.

**Probe an den Rändern:**
- $x = -1$: $|2 \\cdot (-1) - 3| = |-5| = 5 \\leq 5$ ✓
- $x = 4$: $|2 \\cdot 4 - 3| = |5| = 5 \\leq 5$ ✓
- Mitte $x = 1{,}5$: $|2 \\cdot 1{,}5 - 3| = 0 \\leq 5$ ✓

**Technische Relevanz:** In der Maß- und Toleranz­rechnung sind Bedingungen wie $|x - x_{0}| \\leq \\Delta$ typisch (Sollwert $x_{0}$ mit Toleranz $\\Delta$).

**Typischer Fehler:** $|u| \\leq c$ mit $|u| \\geq c$ verwechseln — Erstere gibt ein **Intervall**, Letztere gibt das **Komplement** ($u \\leq -c$ oder $u \\geq c$).`,
    wrongAnswerExplanations: {
      1: 'Du hast nur die obere Grenze berücksichtigt und die untere vergessen. $|u| \\leq c$ liefert immer beidseitige Schranken: $-c \\leq u \\leq c$. Hier musst du also auch $-5 \\leq 2x - 3$ einbeziehen, was $x \\geq -1$ ergibt. Vollständig: $-1 \\leq x \\leq 4$.',
      2: 'Du hast nur die untere Grenze $x \\geq -1$ behalten und die obere vergessen. Aus $|2x - 3| \\leq 5$ folgen gleichzeitig $2x - 3 \\geq -5$ (→ $x \\geq -1$) *und* $2x - 3 \\leq 5$ (→ $x \\leq 4$). Beide Grenzen gehören zur Lösung.',
      3: 'Du hast die Ungleichung zur Gleichung gemacht. $|2x - 3| \\leq 5$ hat nicht nur einen Punkt als Lösung, sondern ein ganzes Intervall — alle $x$, deren Abstand von $1{,}5$ (Mittelpunkt) kleiner gleich $2{,}5$ ist. Richtig: $-1 \\leq x \\leq 4$.',
    },
    hints: [
      'Denkrichtung: Betrag $\\leq c$ heißt Abstand zu Null kleiner gleich $c$.',
      'Formel: $|u| \\leq c \\Leftrightarrow -c \\leq u \\leq c$.',
      'Konkret: $-5 \\leq 2x - 3 \\leq 5 \\Rightarrow -1 \\leq x \\leq 4$.',
    ],
  },
  'ex-alg-4-3-g': {
    id: 'ex-alg-4-3-g', lessonId: 'alg-4-3', type: 'number-input',
    question: '[PRÜFUNG] Exponential­zerfall: Radioaktive Probe mit Halbwertszeit $T_{1/2} = 10$ min. Wie lange (in min) dauert es, bis nur noch $25\\,\\%$ der ursprünglichen Menge da sind?',
    correctValue: 20,
    tolerance: 0.1,
    unit: 'min',
    explanation: `**Ansatz:** Jede Halbwertszeit halbiert die Menge. $25\\,\\% = 1/4 = (1/2)^{2}$ — also zwei Halbwertszeiten.

**Rechnung — Weg (a), direkt:**
- Nach $1 \\cdot T_{1/2}$: $50\\,\\%$
- Nach $2 \\cdot T_{1/2}$: $25\\,\\%$
- Also $t = 2 \\cdot 10 = 20$ min.

**Rechnung — Weg (b), Formel:**
1. $N(t) = N_{0} \\cdot (1/2)^{t/T_{1/2}}$
2. Bedingung: $N(t)/N_{0} = 0{,}25 \\Rightarrow (1/2)^{t/10} = 1/4 = (1/2)^{2}$
3. Exponenten vergleichen: $t/10 = 2 \\Rightarrow t = 20$ min

**Rechnung — Weg (c), logarithmieren:**
$0{,}25 = (1/2)^{t/10} \\Rightarrow \\ln(0{,}25) = (t/10) \\ln(1/2) \\Rightarrow t = 10 \\cdot \\ln(0{,}25)/\\ln(0{,}5) = 10 \\cdot 2 = 20$ min.

**Probe:** Nach $20$ min: $(1/2)^{2} = 0{,}25$ der Anfangsmenge. ✓

**Einheitencheck:** $[t] = $ min, $[T_{1/2}] = $ min, Quotient $t/T_{1/2}$ dimensionslos. ✓

**Typischer Fehler:** Die $25\\,\\%$ fälschlich als $1/3$ oder $3/4$ lesen und falsche Halbwertszeiten zählen.`,
    hints: [
      'Denkrichtung: $25\\,\\%$ bedeutet zweimal halbiert — also $2$ Halbwertszeiten.',
      'Formel: $N(t) = N_{0} \\cdot (1/2)^{t/T_{1/2}}$.',
      'Konkret: $(1/2)^{t/10} = 1/4 \\Rightarrow t/10 = 2 \\Rightarrow t = 20$ min.',
    ],
  },
  'ex-alg-4-3-h': {
    id: 'ex-alg-4-3-h', lessonId: 'alg-4-3', type: 'sorting',
    question: '[PRÜFUNG] Ordne die Schritte zur Lösung einer Exponential­gleichung $a^{x} = b$.',
    items: [
      'Gleichung in die Form $a^{x} = b$ bringen (alle Exponentialterme isolieren)',
      'Definitionsbereich prüfen: $b > 0$ erforderlich',
      'Beide Seiten logarithmieren: $x \\cdot \\ln(a) = \\ln(b)$',
      'Nach $x$ auflösen: $x = \\ln(b)/\\ln(a)$',
      'Probe durch Einsetzen',
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: `**Ansatz:** Standardrezept für Exponential­gleichungen — isolieren, prüfen, logarithmieren, auflösen, kontrollieren.

**Begründungen Schritt für Schritt:**
1. **Isolieren:** Alles Nicht-Exponentielle auf die rechte Seite, damit eine reine Form $a^{x} = b$ entsteht.
2. **Definitionsbereich:** $a^{x} > 0$ für alle $x$ (wenn $a > 0$). Ist $b \\leq 0$, gibt es **keine** Lösung.
3. **Logarithmieren:** $\\ln(a^{x}) = \\ln(b)$ und Potenzregel $\\Rightarrow x \\cdot \\ln(a) = \\ln(b)$.
4. **Auflösen:** $x = \\ln(b)/\\ln(a)$ (für $a \\neq 1$).
5. **Probe:** Einsetzen, Rundungsfehler erkennen.

**Beispiel:** $2^{x} = 8 \\Rightarrow x \\ln 2 = \\ln 8 \\Rightarrow x = \\ln 8/\\ln 2 = 3$. Probe: $2^{3} = 8$ ✓.

**Typischer Fehler:** Den Schritt "Definitionsbereich prüfen" überspringen — z.B. bei $2^{x} = -4$ blind logarithmieren und dann mit $\\ln(-4)$ arbeiten (undefiniert).`,
    hints: [
      'Denkrichtung: Isolieren → prüfen → logarithmieren → auflösen → Probe.',
      'Formel: $\\ln(a^{x}) = x \\ln(a)$. Gilt nur für $a > 0$.',
      'Konkret: Probe nicht vergessen — vor allem bei gerundeten Ergebnissen.',
    ],
  },
  'ex-alg-4-3-i': {
    id: 'ex-alg-4-3-i', lessonId: 'alg-4-3', type: 'true-false',
    statement: '[PRÜFUNG] Ein überbestimmtes lineares Gleichungssystem (mehr Gleichungen als Unbekannte) hat IMMER keine Lösung.',
    correct: false,
    explanation: `**Ansatz:** Gegenbeispiel finden — ein überbestimmtes System, das trotzdem lösbar ist.

**Rechnung (Gegenbeispiel):**
- System: $x = 2$, $2x = 4$, $3x = 6$ — drei Gleichungen, eine Unbekannte.
- Alle drei sind äquivalent (linear abhängig): $x = 2$ erfüllt alle.
- Also überbestimmt, aber trotzdem eindeutig lösbar.

**Allgemeine Regel:**
- Überbestimmt $\\Rightarrow$ **häufig** (aber nicht immer) keine Lösung.
- Wenn zusätzliche Gleichungen **linear abhängig** von den ersten sind, bleibt das System lösbar.
- Bei inkonsistenten Messdaten (realer Ingenieur­alltag) sucht man mit **Methode der kleinsten Quadrate** eine Näherungs­lösung.

**Technische Relevanz:** Bei Regressions­rechnung werden $n$ Messpunkte an ein $m$-dimensionales Modell ($n > m$) angepasst — ein klassisch überbestimmtes System, das mit kleinsten Quadraten gelöst wird.

**Typischer Fehler:** Die Behauptung als Tatsache hinnehmen. In der Ingenieur­mathematik sind überbestimmte Systeme der Normalfall, nicht die Ausnahme.`,
    hints: [
      'Denkrichtung: Kann ein überbestimmtes System linear abhängige Gleichungen enthalten?',
      'Formel: Lineare Abhängigkeit $\\Rightarrow$ Rang bleibt klein $\\Rightarrow$ Lösbarkeit möglich.',
      'Konkret: $x = 2, 2x = 4, 3x = 6$ ist überbestimmt, aber mit $x = 2$ lösbar.',
    ],
  },
  'ex-alg-4-3-j': {
    id: 'ex-alg-4-3-j', lessonId: 'alg-4-3', type: 'number-input',
    question: '[PRÜFUNG] Zwei Stromquellen laden einen Kondensator. System: $I_{1} + I_{2} = 3$ A und $R_{1} I_{1} - R_{2} I_{2} = 0$ mit $R_{1} = 2\\,\\Omega$, $R_{2} = 4\\,\\Omega$. Welchen Wert hat $I_{1}$ in A?',
    correctValue: 2,
    tolerance: 0.01,
    unit: 'A',
    explanation: `**Ansatz:** 2×2-System mit konkreten Widerstands­werten. Einsetzungs­verfahren.

**Rechnung — Schritt für Schritt:**
1. Werte einsetzen in Zeile 2: $2 I_{1} - 4 I_{2} = 0$, also $I_{1} = 2 I_{2}$
2. In Zeile 1 einsetzen: $2 I_{2} + I_{2} = 3 \\Rightarrow 3 I_{2} = 3 \\Rightarrow I_{2} = 1$ A
3. Zurück: $I_{1} = 2 \\cdot 1 = 2$ A

**Probe:**
- Zeile 1: $2 + 1 = 3$ A ✓
- Zeile 2: $2 \\cdot 2 - 4 \\cdot 1 = 4 - 4 = 0$ ✓

**Einheitencheck:** $[I] = $ A, $[R \\cdot I] = \\Omega \\cdot $ A $=$ V. Beide Seiten der zweiten Gleichung in Volt. ✓

**Plausibilitäts­check:** Die zweite Gleichung drückt aus, dass die Spannungs­abfälle an den beiden Widerständen gleich sind (Knoten- oder Masche­regel). Mit doppeltem Widerstand in Zweig 2 fließt die halbe Stromstärke — passt: $I_{2} = I_{1}/2$. ✓

**Typischer Fehler:** Bei "Verhältnis-Zeilen" wie $R_{1} I_{1} = R_{2} I_{2}$ das Verhältnis umgekehrt ansetzen — also $I_{1} = I_{2}/2$ statt $I_{1} = 2 I_{2}$.`,
    hints: [
      'Denkrichtung: Aus Zeile 2 das Verhältnis $I_{1} : I_{2}$ extrahieren.',
      'Formel: $R_{1} I_{1} = R_{2} I_{2} \\Rightarrow I_{1} = (R_{2}/R_{1}) I_{2} = 2 I_{2}$.',
      'Konkret: Einsetzen gibt $3 I_{2} = 3 \\Rightarrow I_{2} = 1$, also $I_{1} = 2$ A.',
    ],
  },
  'ex-alg-4-3-mastery': {
    id: 'ex-alg-4-3-mastery', lessonId: 'alg-4-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Die pH-Skala: $\\text{pH} = -\\log_{10}[\\text{H}^{+}]$. Eine Säure hat $[\\text{H}^{+}] = 10^{-3}$ mol/L. Welche pH und wie ändert sie sich, wenn die Konzentration verdoppelt wird?',
    options: [
      'pH $= 3$; bei Verdopplung sinkt pH um $\\log_{10}(2) \\approx 0{,}30$',
      'pH $= 3$; bei Verdopplung steigt pH um $2$',
      'pH $= 0{,}3$; bei Verdopplung halbiert sich pH',
      'pH $= -3$; verdoppelt sich zu $-6$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Zwei Teilaufgaben — (1) pH-Wert berechnen, (2) Änderung bei Verdopplung mit Logarithmus­regel.

**Rechnung — Teil 1: pH-Wert**
1. $[\\text{H}^{+}] = 10^{-3}$ mol/L
2. pH $= -\\log_{10}(10^{-3}) = -(-3) = 3$

**Rechnung — Teil 2: Verdopplung**
1. Neue Konzentration: $[\\text{H}^{+}]_{\\text{neu}} = 2 \\cdot 10^{-3}$
2. Neuer pH: pH$_{\\text{neu}} = -\\log_{10}(2 \\cdot 10^{-3})$
3. Logarithmus­regel: $-\\log_{10}(2 \\cdot 10^{-3}) = -(\\log_{10} 2 + \\log_{10} 10^{-3}) = -\\log_{10} 2 + 3 \\approx -0{,}30 + 3 = 2{,}70$
4. Änderung: $\\Delta \\text{pH} = 2{,}70 - 3 = -0{,}30$ (pH **sinkt** um $0{,}30$)

**Probe:** Höhere $[\\text{H}^{+}]$ = saurer = niedrigerer pH. Bei Verdopplung sinkt pH um $\\log_{10}(2) \\approx 0{,}30$. ✓

**Einheitencheck:** pH ist dimensionslos, $[\\text{H}^{+}]$ in mol/L. Log macht nur Sinn für dimensionslose Argumente — hier implizit relativ zu $1$ mol/L.

**Plausibilität:** Eine logarithmische Skala "komprimiert" Verhältnisse. Faktor $2$ in Konzentration $\\to$ $0{,}30$ Einheiten in pH. Faktor $10$ $\\to$ $1$ Einheit pH.

**Typischer Fehler:** Antwort B ("steigt um $2$") entsteht durch Doppelfehler: Vorzeichen vergessen und Faktor $2$ linear zu verstehen (statt logarithmisch). Antwort D ignoriert das Minus in der pH-Definition.`,
    wrongAnswerExplanations: {
      1: 'Der pH-Wert ist korrekt ($3$), aber die Änderung bei Verdopplung der Konzentration ist falsch: Der pH *sinkt* um $\\log_{10}(2) \\approx 0{,}30$, er steigt nicht um $2$. Die logarithmische Skala verwandelt einen Faktor $2$ in eine Differenz von nur $\\approx 0{,}30$, und das Minus in $\\text{pH} = -\\log[\\text{H}^{+}]$ bedeutet: höhere Konzentration → niedrigerer pH.',
      2: '$0{,}3$ ist der Wert $\\log_{10}(2)$, nicht der pH-Wert. Du hast die beiden Größen verwechselt. pH-Wert berechnet: $\\text{pH} = -\\log_{10}(10^{-3}) = 3$. Der Wert $0{,}3$ ist die *Änderung* bei Verdopplung — nicht der pH selbst. Außerdem halbiert sich pH bei Konzentrationsverdopplung nicht, sondern sinkt um $\\log_{10}(2)$.',
      3: 'Du hast das Minus in der Definition $\\text{pH} = -\\log_{10}[\\text{H}^{+}]$ übersehen. $-\\log_{10}(10^{-3}) = -(-3) = +3$, nicht $-3$. Außerdem ist die Änderung bei Verdopplung nicht „verdoppeln", sondern „um $\\log_{10}(2) \\approx 0{,}30$ senken" — logarithmische Skalen arbeiten additiv bei multiplikativen Änderungen.',
    },
    hints: [
      'Denkrichtung: pH direkt aus $[\\text{H}^{+}] = 10^{-3}$ ablesen; dann Verdopplung.',
      'Formel: $-\\log(2 \\cdot 10^{-3}) = -\\log 2 - \\log 10^{-3} = -\\log 2 + 3$.',
      'Konkret: $\\log_{10}(2) \\approx 0{,}30$. Verdopplung senkt pH um $0{,}30$.',
    ],
  },
}

const lessons_alg_u4 = [
  {
    id: 'alg-4-1', unitId: 'alg-unit-4',
    title: 'Prüfung: Algebra-Grundlagen',
    order: 1, estimatedMinutes: 25,
    learningGoals: [
      'Potenzgesetze und Logarithmus­regeln sicher anwenden',
      'Quadratische Gleichungen auf Prüfungsniveau lösen',
      'Exponential­gleichungen durch Logarithmieren lösen',
    ],
    subGoals: [
      { label: 'Diskriminante: $D > 0$ zwei, $D = 0$ eine, $D < 0$ keine reelle Lösung', examRelevance: 'hoch' },
      { label: 'Exponentialgleichung $a^x = b$: durch Logarithmieren $x = \\log_a b = \\ln b / \\ln a$', examRelevance: 'hoch' },
      { label: 'Wurzelgleichung: beide Seiten quadrieren + Probe (Scheinlösungen möglich)', examRelevance: 'hoch' },
      { label: 'Argumente von $\\ln$, $\\log$, $e^{(\\cdot)}$ müssen dimensionslos sein', examRelevance: 'hoch' },
      { label: 'Bei Prüfungsaufgaben Rechenweg sichtbar: jede Umformung nummerieren/benennen', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'alg-4-2',
    steps: [
      {
        id: 'alg-4-1-s0', type: 'explanation-formal', title: 'So gehst du an Prüfungsaufgaben heran',
        content: `**Jede TU-Prüfungsaufgabe hat dieselbe Grundstruktur.** Mit diesem Vorgehen gehst du nichts durch und vermeidest Flüchtigkeits­fehler.

**Schritt 1 — Gegeben/Gesucht markieren**
- Lies die Aufgabe zweimal. Markiere mit **G** die gegebenen Größen (mit Einheiten) und mit **?** die gesuchten Größen.
- Bei Textaufgaben: übersetze jede Angabe in eine Gleichung, bevor du rechnest.

**Schritt 2 — Ansatz wählen**
- Welcher Aufgabentyp ist das? (Potenz, Logarithmus, quadratische Gleichung, lineares System, Wurzel, Betrag, Exponential, ...)
- Welche Standard­methode gehört dazu?

| Typ | Standard­methode |
|---|---|
| $a^{m/n}$ vereinfachen | Erst $\\sqrt[n]{\\cdot}$, dann $(\\cdot)^{m}$ |
| $\\log$-Gleichung | Exponentieren / Logarithmieren |
| Quadratisch | abc-Formel oder Vieta |
| $2\\times 2$-System | Einsetzen/Addieren |
| Wurzelgleichung | Quadrieren **+ Probe** |
| Exponentialgleichung | Logarithmieren |

**Schritt 3 — Einheitencheck**
- Jede Gleichung muss auf beiden Seiten dieselbe Einheit haben.
- Prüfe Argumente von $\\log$, $\\ln$, $e^{\\cdot}$: die müssen **dimensionslos** sein.

**Schritt 4 — Plausibilitäts­check**
- Ist das Ergebnis der Größenordnung nach sinnvoll?
- Bei negativen Lösungen: Sind sie im Definitions­bereich erlaubt?
- Scheinlösungen (z.B. nach Quadrieren) durch Probe eliminieren.

**Schritt 5 — Typische Prüfungs­fallen**
- Vorzeichenfehler bei Umstellungen
- Log von negativem Argument (undefiniert!)
- Wurzelgleichungen ohne Probe
- Betrag: nur einen Fall bedenken
- Scheitelform $(x-h)^{2}$: $h$ hat positives Vorzeichen, obwohl in Klammer ein Minus steht.

**Wenn du diese fünf Schritte immer abarbeitest, wirst du keine Punkte verschenken.**`,
      },
      {
        id: 'alg-4-1-s1', type: 'explanation-intuitive', title: 'Prüfungsstrategie: Algebra-Grundlagen',
        content: `**Prüfungsaufgaben Algebra** an der TU Wien folgen typischerweise diesen Mustern:

1. **Potenzen & Wurzeln** — Vereinfache Ausdrücke mit gebrochenen Exponenten
2. **Logarithmen­gesetze** — Wende Produkt-, Quotienten- und Potenzregel an
3. **Quadratische Gleichungen** — abc-Formel, Faktorisierung, Diskriminante
4. **Exponential­gleichungen** — Logarithmieren auf beiden Seiten

**Wichtigste Formeln für die Prüfung:**

*Potenzgesetze:*
- $x^{a} \\cdot x^{b} = x^{a+b}$, $(x^{a})^{b} = x^{a \\cdot b}$, $x^{-n} = 1/x^{n}$, $x^{1/n} = \\sqrt[n]{x}$

*Logarithmus­gesetze:*
- $\\log(a \\cdot b) = \\log(a) + \\log(b)$
- $\\log(a/b) = \\log(a) - \\log(b)$
- $\\log(a^{n}) = n \\cdot \\log(a)$
- $e^{\\ln(x)} = x$, $\\ln(e^{x}) = x$

*Quadratische Gleichungen:*
$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}, \\quad D = b^{2} - 4ac$$
- $D > 0$: zwei Lösungen, $D = 0$: Doppellösung, $D < 0$: keine reellen Lösungen`,
      },
      { id: 'alg-4-1-s2', type: 'exercise', title: 'Aufgabe 1 (Potenzen)', exerciseRef: 'ex-alg-4-1-a' },
      { id: 'alg-4-1-s3', type: 'exercise', title: 'Aufgabe 2 (Logarithmus­gleichung)', exerciseRef: 'ex-alg-4-1-b' },
      { id: 'alg-4-1-s4', type: 'exercise', title: 'Aufgabe 3 (Logarithmus berechnen)', exerciseRef: 'ex-alg-4-1-c' },
      { id: 'alg-4-1-s5', type: 'exercise', title: 'Aufgabe 4 (wahr oder falsch)', exerciseRef: 'ex-alg-4-1-d' },
      { id: 'alg-4-1-s6', type: 'exercise', title: 'Aufgabe 5 (Logarithmen vereinfachen)', exerciseRef: 'ex-alg-4-1-e' },
      { id: 'alg-4-1-s7', type: 'exercise', title: 'Aufgabe 6 (quadratische Gleichung)', exerciseRef: 'ex-alg-4-1-f' },
      { id: 'alg-4-1-s8', type: 'exercise', title: 'Aufgabe 7 (abc-Formel)', exerciseRef: 'ex-alg-4-1-g' },
      { id: 'alg-4-1-s9', type: 'exercise', title: 'Aufgabe 8 (wahr oder falsch)', exerciseRef: 'ex-alg-4-1-h' },
      { id: 'alg-4-1-s10', type: 'exercise', title: 'Aufgabe 9 (Logarithmusregeln zuordnen)', exerciseRef: 'ex-alg-4-1-i' },
      { id: 'alg-4-1-s11', type: 'exercise', title: 'Aufgabe 10 (Diskriminante)', exerciseRef: 'ex-alg-4-1-j' },
      { id: 'alg-4-1-s12', type: 'mastery-check', title: 'Prüfungsfrage: technische Anwendung', exerciseRef: 'ex-alg-4-1-mastery' },
    ],
  },
  {
    id: 'alg-4-2', unitId: 'alg-unit-4',
    title: 'Prüfung: Funktionen & Anwendungen',
    order: 2, estimatedMinutes: 25,
    learningGoals: [
      'Extrema und Scheitelpunkte von Funktionen bestimmen',
      'Umkehrfunktionen berechnen und interpretieren',
      'Funktionen auf technische Probleme anwenden',
    ],
    subGoals: [
      { label: 'Scheitelpunkt Parabel $ax^2+bx+c$: $x_S = -b/(2a)$, $y_S = f(x_S)$', examRelevance: 'hoch' },
      { label: 'Scheitelform: $f(x) = a(x - x_S)^2 + y_S$ (quadratische Ergänzung)', examRelevance: 'hoch' },
      { label: 'Umkehrfunktion: $y = f(x)$ → nach $x$ auflösen → $x \\leftrightarrow y$ tauschen', examRelevance: 'hoch' },
      { label: 'Anwendung Wärmeausdehnung: $l(T) = l_0(1 + \\alpha T)$', examRelevance: 'mittel' },
      { label: 'Anwendung Abklingen: $p(t) = p_0 e^{-kt}$, Halbwertszeit $t_{1/2} = \\ln 2/k$', examRelevance: 'hoch' },
      { label: 'Anwendung Umsatz: $U(x) = x \\cdot p(x)$, Maximum bei $U\'(x) = 0$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'alg-4-3',
    steps: [
      {
        id: 'alg-4-2-s0', type: 'explanation-formal', title: 'So gehst du an Prüfungsaufgaben heran',
        content: `**Funktionsanalyse-Aufgaben folgen stets diesem Rezept.**

**Schritt 1 — Gegeben/Gesucht markieren**
- Funktions­term $f(x)$ notieren, Definitions- und Wertebereich ablesen.
- Gesucht markieren: Extrema, Scheitelpunkt, Umkehrfunktion, Nullstellen?

**Schritt 2 — Ansatz wählen**

| Frage | Methode |
|---|---|
| Extrema | $f'(x) = 0$, dann $f''$ prüfen |
| Scheitelpunkt | $x_{S} = -b/(2a)$ oder quadratische Ergänzung |
| Umkehrfunktion | $y = f(x)$ → nach $x$ auflösen → Namen tauschen |
| Polynom­division | Schema: hoch, multiplizieren, subtrahieren, wiederholen |
| Bijektiv? | Streng monoton + Wertemenge $=$ Zielmenge |

**Schritt 3 — Einheitencheck**
- Bei Anwendungs­aufgaben (Wärmeausdehnung, Nachfrage, Druck): Jede Einheit muss aufgehen.
- Argumente von $\\ln$, $\\sin$, $e^{\\cdot}$ sind **immer** dimensionslos.

**Schritt 4 — Plausibilitäts­check**
- Definitions- und Wertebereich der Umkehrfunktion beachten!
- Öffnung der Parabel ($a > 0$: Minimum; $a < 0$: Maximum) prüfen.
- Bei Text­aufgaben: Liegt die Lösung im erlaubten Bereich (z.B. $x \\geq 0$ bei Mengen)?

**Schritt 5 — Typische Prüfungs­fallen**
- Scheitelform: Vorzeichen von $h$ in $(x - h)^{2}$
- Umkehrfunktion: Definitions­bereich = Wertebereich der Originalfunktion
- $f(x) = x^{2}$ ist **nicht** bijektiv auf $\\mathbb{R}$, aber $f(x) = x^{3}$ ist es
- Polynom­division: Vorzeichen beim Subtrahieren`,
      },
      {
        id: 'alg-4-2-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Funktionen & Anwendungen',
        content: `**Funktionsanalyse in der TU Wien Prüfung:**

**Scheitelpunkt einer Parabel** $f(x) = ax^{2} + bx + c$:
$$x_{S} = -\\frac{b}{2a}, \\quad y_{S} = f(x_{S})$$
Scheitelform: $f(x) = a(x - x_{S})^{2} + y_{S}$

**Umkehrfunktion berechnen:**
1. $y = f(x)$ aufschreiben
2. Nach $x$ auflösen
3. $x$ und $y$ tauschen → $f^{-1}(x)$
4. Definitionsbereich anpassen!

Geometrisch: Graph von $f^{-1}$ ist Spiegelung von $f$ an $y = x$.

**Technische Anwendungen:**
- Wärmeausdehnung: $l(T) = l_{0} \\cdot (1 + \\alpha T)$
- Abklingprozesse: $p(t) = p_{0} \\cdot e^{-kt}$
- Umsatz­maximierung: $U(x) = x \\cdot p(x)$, Maximum bei $U'(x) = 0$

**Polynome & Nullstellen:**
Wenn $x = r$ eine Nullstelle ist, ist $(x - r)$ ein Teiler des Polynoms.
Polynom­division → restliche Nullstellen bestimmen.`,
      },
      { id: 'alg-4-2-s2', type: 'exercise', title: 'Aufgabe 1 (Extrema)', exerciseRef: 'ex-alg-4-2-a' },
      { id: 'alg-4-2-s3', type: 'exercise', title: 'Aufgabe 2 (Umkehrfunktion)', exerciseRef: 'ex-alg-4-2-b' },
      { id: 'alg-4-2-s4', type: 'exercise', title: 'Aufgabe 3 (wahr oder falsch)', exerciseRef: 'ex-alg-4-2-c' },
      { id: 'alg-4-2-s5', type: 'exercise', title: 'Aufgabe 4 (Scheitelpunkt)', exerciseRef: 'ex-alg-4-2-d' },
      { id: 'alg-4-2-s6', type: 'exercise', title: 'Aufgabe 5 (Scheitelpunkt berechnen)', exerciseRef: 'ex-alg-4-2-e' },
      { id: 'alg-4-2-s7', type: 'exercise', title: 'Aufgabe 6 (Definitionsbereich)', exerciseRef: 'ex-alg-4-2-f' },
      { id: 'alg-4-2-s8', type: 'exercise', title: 'Aufgabe 7 (Schritte sortieren)', exerciseRef: 'ex-alg-4-2-g' },
      { id: 'alg-4-2-s9', type: 'exercise', title: 'Aufgabe 8 (Wärmeausdehnung)', exerciseRef: 'ex-alg-4-2-h' },
      { id: 'alg-4-2-s10', type: 'exercise', title: 'Aufgabe 9 (wahr oder falsch)', exerciseRef: 'ex-alg-4-2-i' },
      { id: 'alg-4-2-s11', type: 'exercise', title: 'Aufgabe 10 (Polynom­division)', exerciseRef: 'ex-alg-4-2-j' },
      { id: 'alg-4-2-s12', type: 'mastery-check', title: 'Prüfungsfrage: Umsatzmaximierung', exerciseRef: 'ex-alg-4-2-mastery' },
    ],
  },
  {
    id: 'alg-4-3', unitId: 'alg-unit-4',
    title: 'Prüfung: Gleichungs­systeme & technische Anwendungen',
    order: 3, estimatedMinutes: 30,
    learningGoals: [
      'Lineare Gleichungs­systeme im Technik-Kontext lösen',
      'Wurzel-, Betrags- und Exponential­gleichungen mit Probe handhaben',
      'Logarithmische Skalen (pH, dB, Bel) verstehen und rechnen',
      'Typische Prüfungsfallen (Scheinlösungen, Definitions­bereiche) erkennen',
    ],
    subGoals: [
      { label: '$2\\times 2$-LGS: Einsetzungs-, Additions-, Gleichsetzungsmethode — alle äquivalent', examRelevance: 'hoch' },
      { label: 'Betrag auflösen: Fallunterscheidung $|x| = x$ für $x \\geq 0$, $|x| = -x$ für $x < 0$', examRelevance: 'hoch' },
      { label: 'pH-Wert: $\\text{pH} = -\\log_{10}[H^+]$ (logarithmische Skala der H⁺-Konzentration)', examRelevance: 'hoch' },
      { label: 'dB-Skala: $L = 10 \\log_{10}(P/P_0)$ (Leistung) bzw. $= 20 \\log_{10}(U/U_0)$ (Amplitude)', examRelevance: 'hoch' },
      { label: 'LGS-Lösungsfälle: eindeutig (det $\\neq 0$), keine Lösung (Widerspruch), unendlich (parallel)', examRelevance: 'hoch' },
      { label: 'Technik-Anwendungen: Kirchhoffsche Maschenregeln, Biegespannung, Mischrechnung', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-4-3-s0', type: 'explanation-formal', title: 'So gehst du an Prüfungsaufgaben heran',
        content: `**Für Gleichungs­systeme und Spezial­gleichungen ist diszipliniertes Vorgehen entscheidend.**

**Schritt 1 — Gegeben/Gesucht markieren**
- Bei Text­aufgaben (Tragwerk, Stromkreis, pH): jede physikalische Größe einer Variablen zuordnen.
- Gesuchte Variable und Einheit fixieren.

**Schritt 2 — Ansatz wählen**

| Gleichungstyp | Methode |
|---|---|
| $2 \\times 2$ linear | Einsetzen oder Addieren |
| $n \\times n$ linear | Gauß-Verfahren |
| Wurzel $\\sqrt{f} = g$ | Quadrieren **+ Probe** |
| Betrag $|f| = c$ | Fall­unterscheidung $f = \\pm c$ |
| Betragsungleichung $|f| \\leq c$ | Umformen $-c \\leq f \\leq c$ |
| Exponential $a^{x} = b$ | Logarithmieren (prüfe $b > 0$) |
| Log­arithmisch $\\log(f) = c$ | Exponentieren (prüfe $f > 0$) |

**Schritt 3 — Einheitencheck**
- Bei physikalischen Gleichungen: Jede Summe muss dimensionsrein sein ($F$ + $F$, nicht $F$ + $F^{2}$).
- Logarithmus­argumente sind dimensionslos (oder implizit normiert auf Einheits­wert).

**Schritt 4 — Plausibilitäts­check**
- **Wurzelgleichungen:** Immer Probe — Scheinlösungen!
- **Log-Gleichungen:** Argument muss positiv sein.
- **Betrag:** Beide Fälle prüfen.
- **LGS:** Lösung in beide(n) Originalgleichungen einsetzen.

**Schritt 5 — Typische Prüfungs­fallen**
- Wurzelgleichung ohne Probe → Scheinlösung nicht eliminiert.
- $\\log(0)$ oder $\\log(\\text{negativ})$ — undefiniert!
- Betragsgleichung: Nur positiven Fall betrachten.
- Exponential­gleichung $a^{x} = b$ mit $b \\leq 0$ — keine reelle Lösung.
- Bei überbestimmten Systemen: Lineare Abhängigkeit prüfen, bevor man "keine Lösung" sagt.`,
      },
      {
        id: 'alg-4-3-s1', type: 'explanation-formal', title: 'Prüfungsstrategie: Gleichungs­systeme & Anwendungen',
        content: `**Lineare Gleichungs­systeme** — zwei Hauptmethoden:

**Einsetzungsverfahren** (bei kleinen Systemen): Eine Gleichung nach einer Variablen auflösen und in die andere einsetzen.

**Additionsverfahren**: Gleichungen so multiplizieren, dass sich eine Variable bei Addition eliminiert.

---

**Spezial­gleichungen — nicht-äquivalente Umformungen:**

| Typ | Methode | Pflicht |
|---|---|---|
| Wurzelgleichung $\\sqrt{f} = g$ | Quadrieren | **Probe**, da Scheinlösungen möglich |
| Betragsgleichung $\\lvert f\\rvert = c$ | Fall­unterscheidung $f = \\pm c$ | Beide Fälle prüfen |
| Betragsungleichung $\\lvert f\\rvert \\leq c$ | Umformen: $-c \\leq f \\leq c$ | Vorzeichen beachten |
| Exponential­gleichung $a^{x} = b$ | Logarithmieren | $b > 0$ erforderlich |

---

**Logarithmische Skalen (technisch wichtig):**

- **pH-Wert:** $\\text{pH} = -\\log_{10}[\\text{H}^{+}]$ — jede Änderung um $1$ entspricht Faktor $10$ in Konzentration
- **Dezibel:** $L = 10 \\log_{10}(P/P_{0})$ — Leistungs­verhältnisse in dB
- **Halbwertszeit:** $N(t) = N_{0} \\cdot (1/2)^{t/T_{1/2}}$ — Zerfall

**Merke:** Verdopplung in linearer Skala $=$ $\\log_{10}(2) \\approx 0{,}30$ Einheiten in logarithmischer Skala.

---

**Überbestimmte & unterbestimmte Systeme:**

- **Unterbestimmt** (weniger Gleichungen als Unbekannte): unendlich viele Lösungen oder keine
- **Überbestimmt**: meist keine exakte Lösung, aber bei konsistenten Gleichungen trotzdem möglich
- **Methode der kleinsten Quadrate**: Näherungs­lösung bei inkonsistenten Messdaten

**Prüfungsfallen:**
- Wurzelgleichung ohne Probe → Scheinlösungen nicht eliminiert
- Logarithmus eines negativen Arguments (undefiniert!)
- Betragsgleichungen: Fall­unterscheidung vergessen
- Exponential­gleichung mit $b \\leq 0$ (keine reelle Lösung)`,
      },
      { id: 'alg-4-3-s2', type: 'exercise', title: 'Aufgabe 1: Lineares 2x2-System', exerciseRef: 'ex-alg-4-3-a' },
      { id: 'alg-4-3-s3', type: 'exercise', title: 'Aufgabe 2: Tragwerk-Stabkräfte', exerciseRef: 'ex-alg-4-3-b' },
      { id: 'alg-4-3-s4', type: 'exercise', title: 'Aufgabe 3: Quadrieren erzeugt Scheinlösungen', exerciseRef: 'ex-alg-4-3-c' },
      { id: 'alg-4-3-s5', type: 'exercise', title: 'Aufgabe 4: Gleichungstypen zuordnen', exerciseRef: 'ex-alg-4-3-d' },
      { id: 'alg-4-3-s6', type: 'exercise', title: 'Aufgabe 5: Wurzelgleichung lösen', exerciseRef: 'ex-alg-4-3-e' },
      { id: 'alg-4-3-s7', type: 'exercise', title: 'Aufgabe 6: Betragsungleichung', exerciseRef: 'ex-alg-4-3-f' },
      { id: 'alg-4-3-s8', type: 'exercise', title: 'Aufgabe 7: Halbwertszeit', exerciseRef: 'ex-alg-4-3-g' },
      { id: 'alg-4-3-s9', type: 'exercise', title: 'Aufgabe 8: Exponential­gleichung', exerciseRef: 'ex-alg-4-3-h' },
      { id: 'alg-4-3-s10', type: 'exercise', title: 'Aufgabe 9: Überbestimmtheit', exerciseRef: 'ex-alg-4-3-i' },
      { id: 'alg-4-3-s11', type: 'exercise', title: 'Aufgabe 10: Stromverzweigung', exerciseRef: 'ex-alg-4-3-j' },
      { id: 'alg-4-3-s12', type: 'mastery-check', title: 'Prüfungsfrage: pH-Skala', exerciseRef: 'ex-alg-4-3-mastery' },
    ],
  },
]

export const alg_unit4 = {
  id: 'alg-unit-4',
  title: 'Prüfungsaufgaben',
  order: 4,
  description: 'Aufgaben auf TU Wien Prüfungsniveau — Potenzen, Logarithmen, Gleichungen, Funktionsanalyse',
  unitGoals: [
    'Mehrschrittige Prüfungsaufgaben aus Algebra, Potenzen, Gleichungen, Funktionen zielsicher lösen',
    'Zeitdruck-tauglich: häufige Tricks und Standardmuster in TU-Wien-Prüfungen erkennen',
    'Eigene Lösungswege durch Probe und Plausibilitätsabschätzung kontrollieren',
  ],
  lessons: lessons_alg_u4,
  exercises: exercises_alg_u4,
}
