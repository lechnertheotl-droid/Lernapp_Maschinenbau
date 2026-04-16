// ── Algebra Unit 1: Potenzen, Wurzeln & Logarithmen ──────────────────────────

export const exercises_alg_u1 = {
  // ───────────── Lektion 1: Potenzgesetze ─────────────
  'ex-alg-1-1-a': {
    id: 'ex-alg-1-1-a', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'Vereinfache: $x^{3} \\cdot x^{4}$',
    options: ['$x^{7}$', '$x^{12}$', '$2x^{7}$', '$x$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Gleiche Basis $x$, Multiplikation → Exponenten addieren.

**Rechnung:** $x^{3} \\cdot x^{4} = x^{3+4} = x^{7}$.

**Probe:** Setze $x=2$ ein: $2^{3} \\cdot 2^{4} = 8 \\cdot 16 = 128 = 2^{7}$. ✓

**Typischer Fehler:** $x^{12}$ entsteht, wenn man versehentlich die Exponenten multipliziert — das gilt nur bei Potenz einer Potenz $(x^{a})^{b}$.`,
    hints: [
      'Welche Operation steht zwischen den Faktoren? Multiplikation.',
      'Bei gleicher Basis und Multiplikation: Exponenten addieren, nicht multiplizieren.',
      'Rechne den Exponenten: $3 + 4 = ?$',
    ],
  },
  'ex-alg-1-1-b': {
    id: 'ex-alg-1-1-b', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'Vereinfache: $(x^{3})^{4}$',
    options: ['$x^{7}$', '$x^{12}$', '$x^{34}$', '$4x^{3}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Potenz einer Potenz → Exponenten multiplizieren.

**Rechnung:** $(x^{3})^{4} = x^{3 \\cdot 4} = x^{12}$.

**Warum?** $(x^{3})^{4}$ bedeutet $x^{3} \\cdot x^{3} \\cdot x^{3} \\cdot x^{3}$. Addierst du alle Exponenten: $3+3+3+3 = 12$.

**Typischer Fehler:** $x^{7}$ kommt heraus, wenn man die Multiplikation mit der Potenz verwechselt — dort addierst du.`,
    hints: [
      'Die Klammer steckt selbst in einer Potenz — das ist nicht dasselbe wie zwei Faktoren.',
      'Regel: $(x^{a})^{b} = x^{a \\cdot b}$. Hier: $a=3$, $b=4$.',
      'Rechne $3 \\cdot 4$.',
    ],
  },
  'ex-alg-1-1-c': {
    id: 'ex-alg-1-1-c', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'Schreibe ohne negativen Exponenten: $x^{-3}$',
    options: ['$-x^{3}$', '$\\dfrac{1}{x^{3}}$', '$x^{1/3}$', '$3 \\cdot x$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Ein negativer Exponent bedeutet *Kehrwert*, nicht negatives Vorzeichen.

**Regel:** $x^{-n} = \\dfrac{1}{x^{n}}$ für $x \\neq 0$.

**Rechnung:** $x^{-3} = \\dfrac{1}{x^{3}}$.

**Probe:** Setze $x=2$: $2^{-3} = 1/8 = 1/2^{3}$. ✓

**Typischer Fehler:** $-x^{3}$ ist falsch — ein Minus im Exponenten wirkt auf die Stellung (Nenner), nicht auf das Vorzeichen der Zahl.`,
    hints: [
      'Minus im Exponent heißt nicht, dass die Zahl negativ wird.',
      'Schieb die Basis mit umgekehrtem Vorzeichen des Exponenten in den Nenner.',
      'Regel: $x^{-n} = 1/x^{n}$.',
    ],
  },
  'ex-alg-1-1-d': {
    id: 'ex-alg-1-1-d', lessonId: 'alg-1-1', type: 'multiple-choice',
    question: 'Vereinfache: $(2x^{2}y)^{3}$',
    options: ['$2x^{6}y^{3}$', '$6x^{6}y^{3}$', '$8x^{6}y^{3}$', '$8x^{5}y^{3}$'],
    correctIndex: 2,
    explanation: `**Ansatz:** Bei $(a \\cdot b \\cdot c)^{n}$ wird *jeder* Faktor einzeln potenziert.

**Rechnung:** $(2x^{2}y)^{3} = 2^{3} \\cdot (x^{2})^{3} \\cdot y^{3} = 8 \\cdot x^{6} \\cdot y^{3}$.

- $2^{3} = 8$
- $(x^{2})^{3} = x^{2 \\cdot 3} = x^{6}$
- $y^{3} = y^{3}$

**Typischer Fehler:** Die Zahl 2 unverändert lassen ($2x^{6}y^{3}$) oder mit 3 multiplizieren ($6x^{6}y^{3}$). Die äußere Potenz wirkt auf *alles* in der Klammer.`,
    hints: [
      'Die Klammer enthält drei Faktoren: $2$, $x^{2}$, $y$. Jeder wird mit $3$ potenziert.',
      'Achte darauf, dass $2^{3}$ (die Zahl selbst!) zum Ergebnis gehört.',
      'Für $(x^{2})^{3}$ multiplizierst du die Exponenten.',
    ],
  },
  'ex-alg-1-1-e': {
    id: 'ex-alg-1-1-e', lessonId: 'alg-1-1', type: 'number-input',
    question: 'Berechne: $\\dfrac{2^{10}}{2^{7}}$',
    correctValue: 8, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Gleiche Basis $2$, Division → Exponenten subtrahieren.

**Rechnung:** $\\dfrac{2^{10}}{2^{7}} = 2^{10-7} = 2^{3} = 8$.

**Probe:** $2^{10} = 1024$, $2^{7} = 128$, und $1024/128 = 8$. ✓`,
    hints: [
      'Division gleicher Basen → Exponenten subtrahieren.',
      'Regel: $x^{a}/x^{b} = x^{a-b}$.',
      'Rechne $10-7$ und dann $2$ hoch dieses Ergebnis.',
    ],
  },
  'ex-alg-1-1-mastery': {
    id: 'ex-alg-1-1-mastery', lessonId: 'alg-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Vereinfache vollständig: $\\dfrac{x^{4} \\cdot y^{2}}{x^{2} \\cdot y^{5}}$',
    options: ['$\\dfrac{x^{2}}{y^{3}}$', '$x^{2} \\cdot y^{3}$', '$\\dfrac{x^{6}}{y^{7}}$', '$x^{2} \\cdot y^{-3}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Jede Variable einzeln behandeln, Division gleicher Basen → Exponenten subtrahieren.

**Rechnung:**
- $\\dfrac{x^{4}}{x^{2}} = x^{4-2} = x^{2}$
- $\\dfrac{y^{2}}{y^{5}} = y^{2-5} = y^{-3} = \\dfrac{1}{y^{3}}$
- Zusammen: $x^{2} \\cdot \\dfrac{1}{y^{3}} = \\dfrac{x^{2}}{y^{3}}$.

**Probe:** Setze $x=2, y=2$: Zähler $= 16 \\cdot 4 = 64$, Nenner $= 4 \\cdot 32 = 128$, Bruch $= 1/2$. Ergebnis $x^{2}/y^{3} = 4/8 = 1/2$. ✓

**Typischer Fehler:** Antwort D $x^{2} \\cdot y^{-3}$ ist zwar mathematisch gleich, aber die Prüfungsform verlangt positive Exponenten in Zähler und Nenner.`,
    hints: [
      'Getrennt für jede Variable (x und y) arbeiten.',
      'Für $y$ wird der Exponent negativ — schreibe das als Bruch $1/y^{3}$.',
      'Die Prüfungsform ist ein einziger Bruch mit positiven Exponenten.',
    ],
  },

  // ───────────── Lektion 2: Wurzeln & gebrochene Exponenten ─────────────
  'ex-alg-1-2-a': {
    id: 'ex-alg-1-2-a', lessonId: 'alg-1-2', type: 'multiple-choice',
    question: 'Was ist $\\sqrt{x^{2}}$?',
    options: ['$x$', '$|x|$', '$x^{2}$', '$\\dfrac{1}{x}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Eine Quadratwurzel liefert per Definition immer ein nicht-negatives Ergebnis.

**Warum?** Für $x = -3$ ist $x^{2} = 9$ und $\\sqrt{9} = 3 = |-3|$. Die Wurzel "vergisst" das Vorzeichen.

**Regel:** $\\sqrt{x^{2}} = |x|$ (Betrag von $x$). Für $x \\geq 0$ gilt $|x| = x$.

**Typischer Fehler:** $\\sqrt{x^{2}} = x$ ist nur richtig, wenn $x \\geq 0$ *bekannt* ist. Ohne diese Zusatzinfo muss der Betrag stehen.`,
    hints: [
      'Gilt $\\sqrt{(-3)^{2}} = -3$ oder $= 3$?',
      'Die Wurzel ist definiert als nicht-negative Zahl.',
      'Wie schreibt man "positive Version von $x$" mathematisch?',
    ],
  },
  'ex-alg-1-2-b': {
    id: 'ex-alg-1-2-b', lessonId: 'alg-1-2', type: 'number-input',
    question: 'Berechne: $\\sqrt[3]{8}$',
    correctValue: 2, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Dritte Wurzel suchen — welche Zahl hoch 3 ergibt 8?

**Rechnung:** $\\sqrt[3]{8} = 8^{1/3}$. Da $2^{3} = 8$, folgt $\\sqrt[3]{8} = 2$.

**Alternative Schreibweise:** $\\sqrt[3]{x} = x^{1/3}$.`,
    hints: [
      'Welche Zahl hoch $3$ ergibt $8$?',
      '$2^{3} = 8$. Also ist $\\sqrt[3]{8} = 2$.',
      'Die dritte Wurzel ist die Umkehrung der dritten Potenz.',
    ],
  },
  'ex-alg-1-2-c': {
    id: 'ex-alg-1-2-c', lessonId: 'alg-1-2', type: 'multiple-choice',
    question: 'Vereinfache: $\\sqrt{12}$',
    options: ['$2\\sqrt{6}$', '$2\\sqrt{3}$', '$3\\sqrt{2}$', '$\\sqrt{12}$ (nicht vereinfachbar)'],
    correctIndex: 1,
    explanation: `**Ansatz:** Suche einen *quadratischen* Teiler von 12, den du aus der Wurzel ziehen kannst.

**Rechnung:** $12 = 4 \\cdot 3$. Da $4 = 2^{2}$ eine Quadratzahl ist:
$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}.$$

**Probe:** $(2\\sqrt{3})^{2} = 4 \\cdot 3 = 12$. ✓

**Typischer Fehler:** $3\\sqrt{2}$ setzt $12 = 9 \\cdot 4/3$ voraus — Unsinn. Achte auf ganzzahlige Faktor­zerlegungen.`,
    hints: [
      'Zerlege 12 in einen Quadratzahl-Faktor $\\cdot$ Rest: $12 = ? \\cdot ?$',
      'Welche Quadratzahl passt: $4$, $9$ oder $16$?',
      '$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ — ziehe die Quadratwurzel aus dem Quadratzahl-Faktor.',
    ],
  },
  'ex-alg-1-2-d': {
    id: 'ex-alg-1-2-d', lessonId: 'alg-1-2', type: 'true-false',
    statement: 'Für alle reellen Zahlen $a, b \\geq 0$ gilt: $\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$.',
    correct: false,
    explanation: `**Falsch.** Die Wurzel ist *nicht* linear — sie darf **nicht** einfach auf jeden Summanden verteilt werden.

**Gegenbeispiel:** $\\sqrt{9+16} = \\sqrt{25} = 5$, aber $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. $5 \\neq 7$.

**Was gilt dagegen:** $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ (Produkt, nicht Summe!).

**Merke:** Wurzel von Summe ≠ Summe der Wurzeln. Typischer Schulfehler in Prüfungen!`,
    hints: [
      'Teste mit einfachen Zahlen: $a=9$, $b=16$.',
      'Rechne beide Seiten der Gleichung aus und vergleiche.',
      'Die Produktregel gilt — die Summenregel *nicht*.',
    ],
  },
  'ex-alg-1-2-mastery': {
    id: 'ex-alg-1-2-mastery', lessonId: 'alg-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Zu welchem Ausdruck ist $x^{2/3}$ äquivalent?',
    options: ['$(\\sqrt[3]{x})^{2}$', '$\\sqrt{x^{3}}$', '$\\dfrac{2x}{3}$', '$x^{2} \\cdot x^{3}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Ein Bruchexponent $m/n$ bedeutet: $n$-te Wurzel ziehen, dann mit $m$ potenzieren.

**Regel:** $x^{m/n} = \\sqrt[n]{x^{m}} = (\\sqrt[n]{x})^{m}$.

**Rechnung:** $x^{2/3} = \\sqrt[3]{x^{2}} = (\\sqrt[3]{x})^{2}$. Beide Schreibweisen sind gleichwertig.

**Warum nicht B?** $\\sqrt{x^{3}} = x^{3/2}$, nicht $x^{2/3}$.

**Typischer Fehler:** Zähler und Nenner des Bruchexponenten verwechseln.`,
    hints: [
      'Schreibe den Bruchexponenten als Wurzel: $x^{m/n} = \\sqrt[n]{x^{m}}$.',
      'Hier: $m=2$ (Potenz), $n=3$ (Wurzelgrad).',
      'Also dritte Wurzel, dann hoch 2 — oder umgekehrt (beides äquivalent).',
    ],
  },

  // ───────────── Lektion 3: Logarithmen ─────────────
  'ex-alg-1-3-a': {
    id: 'ex-alg-1-3-a', lessonId: 'alg-1-3', type: 'number-input',
    question: 'Berechne: $\\log_{2}(8)$',
    correctValue: 3, tolerance: 0, unit: '',
    explanation: `**Ansatz:** $\\log_{2}(8) = y$ bedeutet: "$2$ hoch wie viel ergibt $8$?"

**Rechnung:** $2^{y} = 8 = 2^{3} \\Rightarrow y = 3$.

**Definition:** $\\log_{b}(x) = y \\Leftrightarrow b^{y} = x$.`,
    hints: [
      'Der Logarithmus fragt: "$\\text{Basis}^{?} = \\text{Argument}$".',
      'Hier: $2^{?} = 8$.',
      'Probiere kleine Werte: $2^{1}=2$, $2^{2}=4$, $2^{3}=8$.',
    ],
  },
  'ex-alg-1-3-b': {
    id: 'ex-alg-1-3-b', lessonId: 'alg-1-3', type: 'number-input',
    question: 'Berechne: $\\ln(e^{3})$',
    correctValue: 3, tolerance: 0, unit: '',
    explanation: `**Ansatz:** $\\ln$ und $e^{x}$ sind Umkehrfunktionen voneinander.

**Regel:** $\\ln(e^{x}) = x$ für alle reellen $x$.

**Rechnung:** $\\ln(e^{3}) = 3$.

**Merke:** Das ist die wichtigste Eigenschaft des natürlichen Logarithmus — sie macht $e^{x}$ und $\\ln$ zu einem Werkzeug für Wachstums- und Abklingprozesse (DGL, Radioaktivität, RC-Glied).`,
    hints: [
      '$\\ln$ ist der Logarithmus zur Basis $e$.',
      'Welche Zahl muss $e$ hoch stehen, um $e^{3}$ zu ergeben?',
      'Regel: $\\ln(e^{x}) = x$.',
    ],
  },
  'ex-alg-1-3-c': {
    id: 'ex-alg-1-3-c', lessonId: 'alg-1-3', type: 'multiple-choice',
    question: 'Was ist $\\ln(a \\cdot b)$ laut Logarithmusgesetz?',
    options: ['$\\ln(a) \\cdot \\ln(b)$', '$\\ln(a) + \\ln(b)$', '$\\ln(a) - \\ln(b)$', '$\\ln(a+b)$'],
    correctIndex: 1,
    explanation: `**Regel:** $\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ (für $a, b > 0$).

**Warum?** Der Logarithmus verwandelt Multiplikation in Addition — das ist der Kerngedanke. Historisch war das vor Taschenrechnern essenziell für schnelles Rechnen.

**Herleitung:** Mit $a = e^{u}$, $b = e^{v}$ ist $a \\cdot b = e^{u+v}$, also $\\ln(ab) = u+v = \\ln(a) + \\ln(b)$.

**Typischer Fehler:** $\\ln(a) \\cdot \\ln(b)$ oder $\\ln(a+b)$ sind *beide* falsch — der Logarithmus ist weder multiplikativ noch linear.`,
    hints: [
      'Was macht der Logarithmus mit einer Multiplikation?',
      'Er wandelt sie in eine *einfachere* Operation um.',
      'Regel: $\\log(a \\cdot b) = \\log(a) + \\log(b)$ — für alle Basen.',
    ],
  },
  'ex-alg-1-3-d': {
    id: 'ex-alg-1-3-d', lessonId: 'alg-1-3', type: 'multiple-choice',
    question: 'Vereinfache: $\\ln(a^{5})$',
    options: ['$5 \\cdot \\ln(a)$', '$\\ln(a) + 5$', '$\\ln(5a)$', '$a \\cdot \\ln(5)$'],
    correctIndex: 0,
    explanation: `**Regel:** $\\ln(a^{n}) = n \\cdot \\ln(a)$.

**Warum?** $a^{5} = a \\cdot a \\cdot a \\cdot a \\cdot a$. Mit dem Produkt-Gesetz: $\\ln(a \\cdot a \\cdot \\ldots) = \\ln(a) + \\ln(a) + \\ldots = 5 \\cdot \\ln(a)$.

**Nützlich für Umformungen:** $\\ln(100^{3}) = 3 \\cdot \\ln(100) \\approx 3 \\cdot 4{,}605 \\approx 13{,}82$ — statt $100^{3}$ auszurechnen.`,
    hints: [
      'Potenz im Logarithmus-Argument → wohin wandert der Exponent?',
      'Regel: $\\ln(a^{n}) = n \\cdot \\ln(a)$.',
      'Der Exponent $n$ wird zum Vorfaktor.',
    ],
  },
  'ex-alg-1-3-mastery': {
    id: 'ex-alg-1-3-mastery', lessonId: 'alg-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse nach $x$ auf: $e^{x} = 5$',
    options: ['$x = \\log(5)$', '$x = \\ln(5)$', '$x = 5/e$', '$x = e^{5}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** $x$ steht im Exponenten — um es "herunterzuholen", logarithmiere beide Seiten zur passenden Basis.

**Rechnung:**
$$e^{x} = 5 \\quad \\Big| \\ln(\\ldots) \\\\ \\ln(e^{x}) = \\ln(5) \\\\ x = \\ln(5) \\approx 1{,}609.$$

**Warum $\\ln$ und nicht $\\log$?** Die Basis der Potenz ist $e$, also ist der natürliche Logarithmus ($\\ln = \\log_{e}$) der Partner, der $e^{x}$ kürzt.

**Typischer Fehler:** $x = \\log(5)$ (dekadischer Log) gibt einen *anderen* Wert ($\\approx 0{,}699$) und löst die Gleichung nicht.`,
    hints: [
      'Wende auf beide Seiten einen Logarithmus an — welche Basis passt zu $e^{x}$?',
      '$\\ln(e^{x}) = x$ — das ist der Trick.',
      'Also $x = \\ln(\\ldots)$ auf der rechten Seite.',
    ],
  },
}

const lessons_alg_u1 = [
  {
    id: 'alg-1-1', unitId: 'alg-unit-1',
    title: 'Potenzgesetze',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Alle Potenzregeln kennen und sicher anwenden', 'Terme mit gleichen Basen vereinfachen', 'Typische Fehler (Multiplikation vs. Potenz) vermeiden'],
    prerequisites: [],
    nextLessonId: 'alg-1-2',
    steps: [
      {
        id: 'alg-1-1-s1', type: 'explanation-formal', title: 'Potenzregeln im Überblick',
        content: `**Was ist eine Potenz?** $x^{n}$ bedeutet: Basis $x$ wird $n$-mal mit sich selbst multipliziert. Beispiel: $2^{4} = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$.

**Die sieben Potenzgesetze (unbedingt sicher beherrschen!):**

| Regel | Formel | Beispiel |
|-------|--------|---------|
| Gleiche Basis · | $x^{a} \\cdot x^{b} = x^{a+b}$ | $x^{2} \\cdot x^{3} = x^{5}$ |
| Gleiche Basis ÷ | $\\dfrac{x^{a}}{x^{b}} = x^{a-b}$ | $\\dfrac{x^{5}}{x^{2}} = x^{3}$ |
| Potenz der Potenz | $(x^{a})^{b} = x^{a \\cdot b}$ | $(x^{2})^{3} = x^{6}$ |
| Produkt in Klammer | $(x \\cdot y)^{n} = x^{n} \\cdot y^{n}$ | $(2x)^{3} = 8x^{3}$ |
| Quotient in Klammer | $\\left(\\dfrac{x}{y}\\right)^{n} = \\dfrac{x^{n}}{y^{n}}$ | $\\left(\\dfrac{2}{3}\\right)^{2} = \\dfrac{4}{9}$ |
| Negativer Exponent | $x^{-n} = \\dfrac{1}{x^{n}}$ | $x^{-2} = \\dfrac{1}{x^{2}}$ |
| Nullter Exponent | $x^{0} = 1$ (für $x \\neq 0$) | $5^{0} = 1$ |

**Warum ist $x^{0} = 1$?** Aus $x^{a}/x^{a} = x^{a-a} = x^{0}$ und gleichzeitig $x^{a}/x^{a} = 1$. Also muss $x^{0} = 1$ sein.

**Merke:** Die Regeln gelten *nur*, wenn die Basen gleich sind. $2^{3} \\cdot 5^{4}$ lässt sich **nicht** zu $10^{7}$ vereinfachen!`,
      },
      {
        id: 'alg-1-1-s2', type: 'explanation-intuitive', title: 'Prüfungsfalle: Multiplikation vs. Potenz',
        content: `Der häufigste Fehler bei Potenzen — und eine beliebte Prüfungsfalle — ist die Verwechslung zweier Regeln:

- $x^{3} \\cdot x^{4} = x^{7}$ (**Exponenten addieren**) — weil Multiplikation
- $(x^{3})^{4} = x^{12}$ (**Exponenten multiplizieren**) — weil Potenz einer Potenz

**Test an dir selbst:** Welche Regel gilt für $(2x)^{3}$? — Es ist $2^{3} \\cdot x^{3} = 8x^{3}$ (Produkt-Regel), *nicht* $2 \\cdot x^{3}$.

**Strategie in der Prüfung:**
1. Klammer ansehen: Steht eine Potenz *außen*? Dann Regel "Potenz der Potenz" oder "Produkt in Klammer".
2. Stehen zwei Potenzen *nebeneinander*? Dann addieren bei Multiplikation, subtrahieren bei Division.
3. Negative Exponenten zuletzt in Kehrwerte umschreiben — sauberere Endform.`,
      },
      { id: 'alg-1-1-s3', type: 'exercise', title: 'Aufgabe 1 — Multiplikation', exerciseRef: 'ex-alg-1-1-a' },
      { id: 'alg-1-1-s4', type: 'exercise', title: 'Aufgabe 2 — Potenz einer Potenz', exerciseRef: 'ex-alg-1-1-b' },
      { id: 'alg-1-1-s5', type: 'exercise', title: 'Aufgabe 3 — Negativer Exponent', exerciseRef: 'ex-alg-1-1-c' },
      { id: 'alg-1-1-s6', type: 'exercise', title: 'Aufgabe 4 — Produkt-Klammer', exerciseRef: 'ex-alg-1-1-d' },
      { id: 'alg-1-1-s7', type: 'exercise', title: 'Aufgabe 5 — Division', exerciseRef: 'ex-alg-1-1-e' },
      { id: 'alg-1-1-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-1-mastery' },
    ],
  },
  {
    id: 'alg-1-2', unitId: 'alg-unit-1',
    title: 'Wurzeln und gebrochene Exponenten',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Wurzeln als gebrochene Potenzen verstehen', 'Wurzelterme vereinfachen', 'Typische Fehler (Wurzel von Summe) vermeiden'],
    prerequisites: ['alg-1-1'],
    nextLessonId: 'alg-1-3',
    steps: [
      {
        id: 'alg-1-2-s1', type: 'explanation-formal', title: 'Wurzeln als Potenzen',
        content: `**Kernidee:** Jede Wurzel lässt sich als *gebrochener Exponent* schreiben. Dadurch gelten alle Potenzgesetze auch für Wurzeln.

$$\\sqrt{x} = x^{1/2}, \\quad \\sqrt[3]{x} = x^{1/3}, \\quad \\sqrt[n]{x} = x^{1/n}$$

**Rechenregeln (nur für $a, b \\geq 0$):**

| Regel | Formel |
|-------|--------|
| Produkt unter der Wurzel | $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ |
| Quotient unter der Wurzel | $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}$ |
| Potenz unter der Wurzel | $\\sqrt{a^{n}} = a^{n/2}$ (für $a \\geq 0$) |
| Gebrochener Exponent | $a^{m/n} = \\sqrt[n]{a^{m}} = (\\sqrt[n]{a})^{m}$ |

**Vereinfachen ist Pflicht:** Quadratzahl-Faktoren immer aus der Wurzel herausziehen.

$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$$
$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$

**Vorsicht — keine Linearität:** $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Diese Regel gibt es *nicht*. Test: $\\sqrt{9+16} = 5$, aber $\\sqrt{9}+\\sqrt{16} = 7$.`,
      },
      {
        id: 'alg-1-2-s2', type: 'explanation-intuitive', title: 'Strategie: Wurzeln vereinfachen',
        content: `**So gehst du in Prüfungen vor:**

1. **Faktorzerlegung** der Zahl unter der Wurzel: Suche Quadratzahlen als Faktoren (4, 9, 16, 25, 36, 49, 64, 81, 100).
2. **Wurzel aufteilen** mit der Produktregel: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$.
3. **Quadratzahl-Wurzel ziehen** und davor schreiben.

**Beispiel $\\sqrt{72}$:**
- $72 = 36 \\cdot 2$ (36 ist Quadratzahl!)
- $\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.

**Merke — Definitionsbereich:** Die Quadratwurzel ist nur für $x \\geq 0$ in ℝ definiert. Ungerade Wurzeln ($\\sqrt[3]{\\ldots}$) gibt's auch für negative Zahlen: $\\sqrt[3]{-8} = -2$.`,
      },
      { id: 'alg-1-2-s3', type: 'exercise', title: 'Aufgabe 1 — Quadratwurzel von $x^2$', exerciseRef: 'ex-alg-1-2-a' },
      { id: 'alg-1-2-s4', type: 'exercise', title: 'Aufgabe 2 — Dritte Wurzel', exerciseRef: 'ex-alg-1-2-b' },
      { id: 'alg-1-2-s5', type: 'exercise', title: 'Aufgabe 3 — Vereinfachen', exerciseRef: 'ex-alg-1-2-c' },
      { id: 'alg-1-2-s6', type: 'exercise', title: 'Aufgabe 4 — Wurzel von Summe?', exerciseRef: 'ex-alg-1-2-d' },
      { id: 'alg-1-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-2-mastery' },
    ],
  },
  {
    id: 'alg-1-3', unitId: 'alg-unit-1',
    title: 'Logarithmen',
    order: 3, estimatedMinutes: 18,
    learningGoals: ['Logarithmus als Umkehrfunktion der Exponentialfunktion verstehen', 'Logarithmusgesetze anwenden', 'Gleichungen mit $e^{x}$ und $\\ln$ lösen'],
    prerequisites: ['alg-1-1', 'alg-1-2'],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-1-3-s1', type: 'explanation-intuitive', title: 'Logarithmus — die Umkehrung',
        content: `Der **Logarithmus** beantwortet die Frage: *"Basis hoch wie viel ergibt Argument?"*

$$2^{?} = 8 \\quad \\Rightarrow \\quad ? = \\log_{2}(8) = 3$$

**Definition:** $\\log_{b}(x) = y \\iff b^{y} = x$ (für $b > 0, b \\neq 1, x > 0$).

**Wichtige Spezialfälle:**
- **$\\ln(x) = \\log_{e}(x)$** — natürlicher Logarithmus, Basis $e \\approx 2{,}718$. Standard in Naturwissenschaft & Technik.
- **$\\log(x) = \\log_{10}(x)$** — dekadischer Logarithmus, Basis 10. Üblich in Technik (dB) und Chemie (pH).
- **$\\log_{2}(x)$** — Informatik (Bits, Algorithmenlaufzeit).

**Warum heißt $\\ln$ "natürlich"?** Die Funktion $e^{x}$ ist die einzige, die mit ihrer eigenen Ableitung übereinstimmt: $\\left(e^{x}\\right)' = e^{x}$. Das macht $\\ln$ zum natürlichen Partner bei DGL und Wachstumsprozessen.`,
      },
      {
        id: 'alg-1-3-s2', type: 'explanation-formal', title: 'Logarithmusgesetze',
        content: `**Die drei zentralen Gesetze** (für $a, b > 0$):

| Regel | Formel | In Worten |
|-------|--------|-----------|
| Produkt | $\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ | Multiplikation → Addition |
| Quotient | $\\ln\\!\\left(\\dfrac{a}{b}\\right) = \\ln(a) - \\ln(b)$ | Division → Subtraktion |
| Potenz | $\\ln(a^{n}) = n \\cdot \\ln(a)$ | Exponent → Vorfaktor |

**Basiswechsel:** $\\log_{b}(x) = \\dfrac{\\ln(x)}{\\ln(b)}$ — nützlich, wenn der Taschenrechner nur $\\ln$ und $\\log_{10}$ hat.

**Umkehr­eigenschaften (sehr wichtig!):**
$$\\ln(e^{x}) = x \\quad \\text{und} \\quad e^{\\ln(x)} = x$$

Diese Identitäten nutzt du, um Gleichungen zu lösen, in denen $x$ im Exponenten steht (z.B. $e^{x} = 5$).`,
      },
      {
        id: 'alg-1-3-s3', type: 'visualization', title: '$e^{x}$ und $\\ln(x)$ im Bild',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.exp(x), color: '#3b82f6', label: 'e^x' },
            { fn: (x) => (x > 0 ? Math.log(x) : NaN), color: '#ef4444', label: 'ln(x)' },
          ],
          xRange: [-2, 3],
          yRange: [-2, 5],
          showGrid: true,
        },
      },
      { id: 'alg-1-3-s4', type: 'exercise', title: 'Aufgabe 1 — Logarithmus berechnen', exerciseRef: 'ex-alg-1-3-a' },
      { id: 'alg-1-3-s5', type: 'exercise', title: 'Aufgabe 2 — ln und e', exerciseRef: 'ex-alg-1-3-b' },
      { id: 'alg-1-3-s6', type: 'exercise', title: 'Aufgabe 3 — Produkt-Gesetz', exerciseRef: 'ex-alg-1-3-c' },
      { id: 'alg-1-3-s7', type: 'exercise', title: 'Aufgabe 4 — Potenz-Gesetz', exerciseRef: 'ex-alg-1-3-d' },
      { id: 'alg-1-3-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-1-3-mastery' },
    ],
  },
]

export const alg_unit1 = {
  id: 'alg-unit-1',
  title: 'Potenzen, Wurzeln & Logarithmen',
  order: 1,
  description: 'Potenzgesetze, Wurzeln als Potenzen, natürlicher Logarithmus',
  lessons: lessons_alg_u1,
  exercises: exercises_alg_u1,
}
