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
    wrongAnswerExplanations: {
      1: 'Hier wurden die Exponenten multipliziert ($3 \\cdot 4 = 12$). Das gilt nur bei Potenz einer Potenz $(x^{a})^{b}$. Bei Multiplikation gleicher Basen werden die Exponenten addiert: $x^{3}\\cdot x^{4} = x^{3+4} = x^{7}$.',
      2: 'Der Faktor $2$ kommt aus dem Nichts. Bei $x^{3} \\cdot x^{4}$ wird kein Vorfaktor erzeugt — es entsteht nur ein höherer Exponent. Korrekt: $x^{7}$ ohne Vorfaktor.',
      3: 'Das wäre $x^{3+4-6}$ oder ähnliches — passt zu keiner Potenzregel. Die Regel lautet: gleiche Basis, Multiplikation → Exponenten addieren, also $x^{3+4}=x^{7}$.',
    },
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
    wrongAnswerExplanations: {
      0: 'Hier wurden die Exponenten addiert ($3+4=7$). Das gilt bei $x^{3}\\cdot x^{4}$, aber nicht bei $(x^{3})^{4}$. Bei Potenz einer Potenz werden die Exponenten multipliziert: $3 \\cdot 4 = 12$.',
      2: '$x^{34}$ entsteht durch Aneinanderhängen der Ziffern — kein Rechenschritt. Korrekt ist $3 \\cdot 4 = 12$, also $x^{12}$.',
      3: 'Hier wurde der äußere Exponent als Vorfaktor gesehen. Aber $(x^{3})^{4}$ bedeutet $x^{3}\\cdot x^{3}\\cdot x^{3}\\cdot x^{3} = x^{12}$, kein $4\\cdot x^{3}$.',
    },
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
    wrongAnswerExplanations: {
      0: 'Der Minus im Exponent wirkt nicht auf das Vorzeichen der Basis, sondern verschiebt die Potenz in den Nenner. $x^{-3}$ ist nicht $-x^{3}$, sondern $1/x^{3}$. Test: $2^{-3} = 1/8$, nicht $-8$.',
      2: '$x^{1/3}$ ist die dritte Wurzel — das entspricht einem *positiven Bruch* als Exponent, nicht einem negativen ganzzahligen. Regel: $x^{-3} = 1/x^{3}$.',
      3: 'Das sieht aus wie Faktor-Zerlegung ($3 \\cdot x$), hat aber nichts mit Exponenten zu tun. Ein negativer Exponent erzeugt einen Kehrwert: $x^{-3} = 1/x^{3}$.',
    },
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
    wrongAnswerExplanations: {
      0: 'Die $2$ wurde unverändert gelassen. Die äußere Potenz wirkt aber auf *jeden* Faktor der Klammer — auch auf die Zahl. Richtig: $2^{3} = 8$, also $8x^{6}y^{3}$.',
      1: 'Hier wurde $2$ mit $3$ *multipliziert* statt *potenziert* — klassischer Fehler. $2^{3}$ ist $8$, nicht $6$. Regel: $(2)^{3} = 2\\cdot 2\\cdot 2 = 8$.',
      3: 'Der Exponent von $x$ ist falsch: $(x^{2})^{3} = x^{2\\cdot 3} = x^{6}$, nicht $x^{5}$. Bei Potenz einer Potenz werden die Exponenten multipliziert, nicht addiert.',
    },
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
    question: '[PRÜFUNG] Vereinfache als einzelnen Bruch mit **positiven Exponenten**: $\\dfrac{x^{4} \\cdot y^{2}}{x^{2} \\cdot y^{5}}$',
    options: ['$\\dfrac{x^{2}}{y^{3}}$', '$x^{2} \\cdot y^{3}$', '$\\dfrac{x^{6}}{y^{7}}$', '$\\dfrac{y^{3}}{x^{2}}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Jede Variable einzeln behandeln, Division gleicher Basen → Exponenten subtrahieren.

**Rechnung:**
- $\\dfrac{x^{4}}{x^{2}} = x^{4-2} = x^{2}$
- $\\dfrac{y^{2}}{y^{5}} = y^{2-5} = y^{-3} = \\dfrac{1}{y^{3}}$
- Zusammen: $x^{2} \\cdot \\dfrac{1}{y^{3}} = \\dfrac{x^{2}}{y^{3}}$.

**Probe:** Setze $x=2, y=2$: Zähler $= 16 \\cdot 4 = 64$, Nenner $= 4 \\cdot 32 = 128$, Bruch $= 1/2$. Ergebnis $x^{2}/y^{3} = 4/8 = 1/2$. ✓

**Typischer Fehler:** Antwort D ($y^3/x^2$) vertauscht Zähler und Nenner — klassischer Vorzeichen-Fehler beim Exponenten-Subtrahieren.`,
    hints: [
      'Getrennt für jede Variable (x und y) arbeiten.',
      'Für $y$ wird der Exponent negativ — schreibe das als Bruch $1/y^{3}$.',
      '$y^{2-5} = y^{-3}$, **nicht** $y^{5-2}$. Reihenfolge: Zähler − Nenner.',
    ],
    wrongAnswerExplanations: {
      1: 'Das wäre das Ergebnis, wenn Zähler und Nenner *multipliziert* würden statt dividiert. Der Bruch verlangt Subtraktion der Exponenten: $y^{2-5} = y^{-3} = 1/y^{3}$, nicht $y^{3}$ im Zähler.',
      2: 'Hier wurden die Exponenten addiert ($4+2=6$, $2+5=7$) statt subtrahiert. Die Regel für Divisionen gleicher Basen lautet $x^{a}/x^{b} = x^{a-b}$, also $x^{4-2}=x^{2}$ und $y^{2-5}=y^{-3}$.',
      3: 'Hier wurde die Subtraktion falsch herum gemacht: $y^{5-2} = y^{3}$ landete im Zähler. Korrekt ist $y^{2-5} = y^{-3}$, was $1/y^{3}$ in den Nenner schiebt. Auch $x$ steht korrekt im Zähler, nicht im Nenner.',
    },
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
    wrongAnswerExplanations: {
      0: '$\\sqrt{x^{2}} = x$ gilt nur, wenn $x \\geq 0$ garantiert ist. Für $x=-3$ ergäbe das $\\sqrt{9} = -3$ — falsch, denn die Wurzel liefert immer ein nicht-negatives Ergebnis. Richtig ist $|x|$.',
      2: '$x^{2}$ wäre das Ergebnis, wenn man die Wurzel *vergessen* hätte. Aber die Wurzel halbiert den Exponenten: $\\sqrt{x^{2}} = x^{2/2} = x^{1}$ — mit Betrag, also $|x|$.',
      3: '$1/x$ ergibt sich nie aus einer Wurzel, sondern aus negativen Exponenten. Hier: $\\sqrt{x^{2}} = x^{2\\cdot 1/2} = x^{1}$ — betragsmäßig, also $|x|$.',
    },
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
    wrongAnswerExplanations: {
      0: 'Die Zerlegung $12 = 4 \\cdot 3$ ist richtig, aber unter der Wurzel muss dann $3$ stehen — nicht $6$. $2\\sqrt{6}$ entspräche $\\sqrt{4\\cdot 6} = \\sqrt{24}$, nicht $\\sqrt{12}$.',
      2: '$3\\sqrt{2}$ würde $\\sqrt{9\\cdot 2} = \\sqrt{18}$ bedeuten — nicht $\\sqrt{12}$. Zerlege $12 = 4 \\cdot 3$: $\\sqrt{12} = 2\\sqrt{3}$.',
      3: '$12 = 4 \\cdot 3$ hat den Quadratzahl-Faktor $4$; der lässt sich herausziehen: $\\sqrt{12} = 2\\sqrt{3}$. Wurzeln mit Quadratzahl-Faktoren müssen immer vereinfacht werden.',
    },
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
    wrongAnswerExplanations: {
      1: 'Hier wurden Zähler und Nenner des Bruchexponenten vertauscht: $\\sqrt{x^{3}} = x^{3/2}$, nicht $x^{2/3}$. Merkregel: *Nenner* des Exponenten = Wurzelgrad, *Zähler* = Potenz im Inneren.',
      2: 'Das ist eine lineare Interpretation ($2x/3$), die der Exponent nicht hat. $x^{2/3}$ ist keine lineare Funktion, sondern eine Wurzel-Potenz.',
      3: '$x^{2}\\cdot x^{3} = x^{5}$ — eine ganz andere Größe. Der Bruchexponent $2/3$ bedeutet *eine* Potenz mit Bruchexponent, nicht das Produkt zweier Potenzen.',
    },
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
    wrongAnswerExplanations: {
      0: 'Der Logarithmus ist *nicht* multiplikativ — er wandelt Multiplikation in Addition um, nicht in Multiplikation. Richtig: $\\ln(a\\cdot b) = \\ln a + \\ln b$.',
      2: 'Subtraktion gehört zur Division: $\\ln(a/b) = \\ln a - \\ln b$. Bei Multiplikation wird addiert.',
      3: 'Der Logarithmus ist nicht linear: $\\ln(a+b) \\neq \\ln a + \\ln b$ (Gegenbeispiel: $\\ln(1+1) = \\ln 2 \\approx 0{,}69$, aber $\\ln 1 + \\ln 1 = 0$). Das hier geht um Multiplikation im Argument — da gilt die Produktregel $\\ln(a\\cdot b) = \\ln a + \\ln b$.',
    },
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
    wrongAnswerExplanations: {
      1: 'Hier wurde der Exponent additiv angehängt. Die Potenzregel des Logarithmus zieht den Exponenten aber als *Faktor* heraus: $\\ln(a^{5}) = 5\\cdot\\ln(a)$, nicht $\\ln(a)+5$.',
      2: '$\\ln(5a) = \\ln 5 + \\ln a$ — das wäre die Produktregel, wenn im Argument $5\\cdot a$ stünde. Hier steht aber $a^{5}$ (Potenz), also gilt $\\ln(a^{5}) = 5\\ln a$.',
      3: 'Hier wurden Basis und Exponent vertauscht: das Ergebnis müsste $5\\cdot\\ln(a)$ sein, nicht $a\\cdot\\ln(5)$. Die Regel: der Exponent $n$ wandert als Vorfaktor vor den Logarithmus, die Basis bleibt im Argument.',
    },
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
    wrongAnswerExplanations: {
      0: 'Mit dem dekadischen $\\log = \\log_{10}$ ergibt sich $\\log(e^{x}) = x\\cdot\\log e \\approx 0{,}434\\,x$ — also $x = \\log(5)/\\log(e) \\approx 0{,}699/0{,}434 \\approx 1{,}609$. Direkt passt nur $\\ln$, da $\\ln(e^{x}) = x$.',
      2: '$5/e$ entsteht, wenn man $e^{x}$ fälschlich wie $e\\cdot x$ liest und durch $e$ teilt. $e^{x}$ ist aber eine Potenz, keine Multiplikation. Nötig ist der Logarithmus: $x = \\ln(5)$.',
      3: '$e^{5}$ wäre die Lösung von $\\ln x = 5$, nicht von $e^{x} = 5$. Hier steht $x$ im Exponenten — also logarithmieren beider Seiten: $x = \\ln(5)$.',
    },
  },
}

const lessons_alg_u1 = [
  {
    id: 'alg-1-1', unitId: 'alg-unit-1',
    title: 'Potenzgesetze',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Alle Potenzregeln kennen und sicher anwenden', 'Terme mit gleichen Basen vereinfachen', 'Typische Fehler (Multiplikation vs. Potenz) vermeiden'],
    subGoals: [
      { label: 'Gleiche Basis: $x^a \\cdot x^b = x^{a+b}$ und $x^a/x^b = x^{a-b}$', examRelevance: 'hoch' },
      { label: 'Potenz einer Potenz: $(x^a)^b = x^{a \\cdot b}$ — niemals mit Multiplikation verwechseln', examRelevance: 'hoch' },
      { label: 'Negativer Exponent $x^{-n} = 1/x^n$ und nullter Exponent $x^0 = 1$ (für $x \\neq 0$)', examRelevance: 'hoch' },
      { label: 'Produkt/Quotient in Klammer: $(xy)^n = x^n y^n$, $(x/y)^n = x^n/y^n$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    blueprint: {
      prerequisites: [
        { lessonId: 'alg-0-4', concepts: ['distributiv', 'aequivalenz'] },
      ],
      concepts: [
        { id: 'potenz-def',       title: '$x^n$ = $n$-fache Multiplikation von $x$',                              dependsOn: [] },
        { id: 'pot-mult',         title: 'Gleiche Basis Multiplikation: $x^a \\cdot x^b = x^{a+b}$',              dependsOn: ['potenz-def'] },
        { id: 'pot-div',          title: 'Gleiche Basis Division: $x^a / x^b = x^{a-b}$',                         dependsOn: ['pot-mult'] },
        { id: 'pot-potenz',       title: 'Potenz einer Potenz: $(x^a)^b = x^{a\\cdot b}$',                        dependsOn: ['potenz-def'] },
        { id: 'pot-produkt',      title: 'Produkt in Klammer: $(xy)^n = x^n y^n$',                                dependsOn: ['potenz-def'] },
        { id: 'pot-quotient',     title: 'Quotient in Klammer: $(x/y)^n = x^n/y^n$',                              dependsOn: ['pot-produkt'] },
        { id: 'pot-null',         title: '$x^0 = 1$ für $x \\neq 0$',                                             dependsOn: ['pot-div'] },
        { id: 'pot-negativ',      title: '$x^{-n} = 1/x^n$',                                                      dependsOn: ['pot-div'] },
      ],
      subGoalConcepts: {
        0: ['pot-mult', 'pot-div'],
        1: ['pot-potenz'],
        2: ['pot-null', 'pot-negativ'],
        3: ['pot-produkt', 'pot-quotient'],
      },
      taskPlan: [
        // SG 0 — Gleiche Basis
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['pot-mult'],                            qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pot-mult', 'pot-div'],                 qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['pot-mult'],                            qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pot-mult'],                            qty: 1, note: 'Distraktor: Exponenten multipliziert statt addiert' },
        { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['pot-mult', 'pot-div'],                 qty: 1 },
        // SG 1 — Potenz einer Potenz
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['pot-potenz'],                          qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pot-potenz'],                          qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['pot-potenz'],                          qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pot-potenz', 'pot-mult'],              qty: 1, note: 'Distraktor: mit Multiplikation-Regel verwechselt' },
        { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['pot-potenz', 'pot-mult'],              qty: 1, note: 'Term ↔ Regel' },
        // SG 2 — Null- und negativer Exponent
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['pot-null', 'pot-negativ'],             qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pot-negativ'],                         qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['pot-negativ'],                         qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pot-null'],                            qty: 1, note: 'Distraktor: $x^0 = 0$' },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['pot-negativ', 'pot-mult'],             qty: 1 },
        // SG 3 — Produkt/Quotient in Klammer
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['pot-produkt'],                         qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pot-produkt'],                         qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['pot-produkt'],                         qty: 1, note: '$(2x)^3$ auflösen' },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pot-produkt'],                         qty: 1, note: 'Distraktor: Exponent nur auf Variable' },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['pot-quotient', 'pot-produkt'],         qty: 1 },
      ],
    },
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
    subGoals: [
      { label: 'Wurzel als Bruchpotenz: $\\sqrt[n]{x} = x^{1/n}$, dadurch gelten alle Potenzgesetze', examRelevance: 'hoch' },
      { label: 'Wurzel des Produkts: $\\sqrt{ab} = \\sqrt a \\cdot \\sqrt b$ — aber $\\sqrt{a+b} \\neq \\sqrt a + \\sqrt b$', examRelevance: 'hoch' },
      { label: 'Nenner rational machen: Erweitern mit passender Wurzel löst Wurzeln aus dem Nenner', examRelevance: 'mittel' },
    ],
    prerequisites: ['alg-1-1'],
    blueprint: {
      prerequisites: [
        { lessonId: 'alg-1-1', concepts: ['pot-potenz', 'pot-mult', 'pot-negativ'] },
        { lessonId: 'alg-0-2', concepts: ['bruch-erweitern'] },
      ],
      concepts: [
        { id: 'wurzel-bruchpot',  title: '$\\sqrt[n]{x} = x^{1/n}$ — Wurzel als Bruchpotenz',                           dependsOn: [] },
        { id: 'wurzel-def-bereich', title: 'Definitionsbereich: $\\sqrt{x}$ nur für $x \\geq 0$ in $\\mathbb R$',       dependsOn: ['wurzel-bruchpot'] },
        { id: 'wurzel-produkt',   title: '$\\sqrt{ab} = \\sqrt a \\cdot \\sqrt b$ (für $a,b \\geq 0$)',                  dependsOn: ['wurzel-bruchpot'] },
        { id: 'wurzel-quotient',  title: '$\\sqrt{a/b} = \\sqrt a/\\sqrt b$',                                            dependsOn: ['wurzel-produkt'] },
        { id: 'wurzel-summe-nein', title: '$\\sqrt{a+b} \\neq \\sqrt a + \\sqrt b$ — nicht linear',                      dependsOn: ['wurzel-produkt'] },
        { id: 'wurzel-vereinfachen', title: 'Quadratzahl-Faktor herausziehen: $\\sqrt{12}=2\\sqrt 3$',                   dependsOn: ['wurzel-produkt'] },
        { id: 'nenner-rational',  title: 'Nenner rational machen durch Erweitern mit $\\sqrt{\\cdots}$',                 dependsOn: ['wurzel-produkt'] },
      ],
      subGoalConcepts: {
        0: ['wurzel-bruchpot', 'wurzel-def-bereich'],
        1: ['wurzel-produkt', 'wurzel-quotient', 'wurzel-summe-nein', 'wurzel-vereinfachen'],
        2: ['nenner-rational'],
      },
      taskPlan: [
        // SG 0 — Wurzel als Bruchpotenz
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['wurzel-bruchpot'],                            qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['wurzel-bruchpot'],                            qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['wurzel-bruchpot'],                            qty: 1 },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['wurzel-def-bereich'],                         qty: 1, note: '$\\sqrt{-4}$ in $\\mathbb R$?' },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['wurzel-bruchpot'],                            qty: 1, note: 'Wurzel ↔ Potenzschreibweise' },
        // SG 1 — Rechenregeln / Summe-Falle / Vereinfachen
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['wurzel-summe-nein'],                          qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['wurzel-produkt'],                             qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['wurzel-vereinfachen'],                        qty: 2, note: '$\\sqrt{50}$, $\\sqrt{72}$ vereinfachen' },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['wurzel-summe-nein'],                          qty: 1, note: 'Distraktor: Wurzel auf Summe verteilt' },
        { subGoal: 1, stage: 'transfer',          type: 'sorting',         uses: ['wurzel-produkt', 'wurzel-vereinfachen'],      qty: 1 },
        // SG 2 — Nenner rational machen
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['nenner-rational'],                            qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['nenner-rational'],                            qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['nenner-rational'],                            qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['nenner-rational'],                            qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['nenner-rational', 'wurzel-vereinfachen'],     qty: 1 },
      ],
    },
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
    subGoals: [
      { label: 'Definition: $\\log_b x = y \\iff b^y = x$ (für $b>0, b\\neq 1, x>0$)', examRelevance: 'hoch' },
      { label: 'Produktregel: $\\ln(ab) = \\ln a + \\ln b$', examRelevance: 'hoch' },
      { label: 'Quotientenregel: $\\ln(a/b) = \\ln a - \\ln b$', examRelevance: 'hoch' },
      { label: 'Potenzregel: $\\ln(a^n) = n \\ln a$', examRelevance: 'hoch' },
      { label: 'Basiswechsel: $\\log_b x = \\ln x / \\ln b$', examRelevance: 'hoch' },
      { label: 'Typische Falle: $\\ln(a+b) \\neq \\ln a + \\ln b$ (kein Logarithmusgesetz für Summen)', examRelevance: 'hoch' },
      { label: 'Exp-Log-Umkehrung: $e^{\\ln x} = x$ (für $x > 0$), $\\ln(e^x) = x$', examRelevance: 'hoch' },
    ],
    prerequisites: ['alg-1-1', 'alg-1-2'],
    blueprint: {
      prerequisites: [
        { lessonId: 'alg-1-1', concepts: ['pot-mult', 'pot-potenz', 'pot-negativ'] },
      ],
      concepts: [
        { id: 'log-def',          title: '$\\log_b(x) = y \\iff b^y = x$ (für $b>0, b\\neq 1, x>0$)',          dependsOn: [] },
        { id: 'log-spezialfaelle', title: '$\\ln$ (Basis $e$), $\\log$ (Basis 10), $\\log_2$ (Bits)',          dependsOn: ['log-def'] },
        { id: 'log-produkt',      title: 'Produktregel $\\ln(ab) = \\ln a + \\ln b$',                          dependsOn: ['log-def'] },
        { id: 'log-quotient',     title: 'Quotientenregel $\\ln(a/b) = \\ln a - \\ln b$',                      dependsOn: ['log-produkt'] },
        { id: 'log-potenz',       title: 'Potenzregel $\\ln(a^n) = n \\ln a$',                                 dependsOn: ['log-produkt'] },
        { id: 'log-basiswechsel', title: 'Basiswechsel $\\log_b x = \\ln x / \\ln b$',                         dependsOn: ['log-def', 'log-potenz'] },
        { id: 'log-summe-nein',   title: '$\\ln(a+b) \\neq \\ln a + \\ln b$ — keine Linearität',               dependsOn: ['log-produkt'] },
        { id: 'log-umkehr',       title: '$e^{\\ln x} = x$ und $\\ln(e^x) = x$ — Umkehrfunktions-Identität',   dependsOn: ['log-def'] },
      ],
      subGoalConcepts: {
        0: ['log-def', 'log-spezialfaelle'],
        1: ['log-produkt'],
        2: ['log-quotient'],
        3: ['log-potenz'],
        4: ['log-basiswechsel'],
        5: ['log-summe-nein'],
        6: ['log-umkehr'],
      },
      taskPlan: [
        // SG 0 — Definition
        { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['log-def'],                              qty: 1 },
        { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-def'],                              qty: 1 },
        { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['log-def'],                              qty: 1, note: '$\\log_2 32$' },
        { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-def'],                              qty: 1 },
        { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['log-spezialfaelle'],                    qty: 1, note: 'Basis ↔ Anwendungskontext' },
        // SG 1 — Produktregel
        { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['log-produkt'],                          qty: 1 },
        { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-produkt'],                          qty: 1 },
        { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['log-produkt'],                          qty: 1 },
        { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-produkt'],                          qty: 1 },
        { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['log-produkt'],                          qty: 1 },
        // SG 2 — Quotientenregel
        { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['log-quotient'],                         qty: 1 },
        { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-quotient'],                         qty: 1 },
        { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['log-quotient', 'log-produkt'],          qty: 1 },
        { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-quotient'],                         qty: 1 },
        { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['log-quotient', 'log-produkt'],          qty: 1 },
        // SG 3 — Potenzregel
        { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['log-potenz'],                           qty: 1 },
        { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-potenz'],                           qty: 1 },
        { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['log-potenz'],                           qty: 1 },
        { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-potenz'],                           qty: 1, note: 'Distraktor: Potenz mit Exponent multipliziert' },
        { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['log-potenz', 'log-produkt'],            qty: 1 },
        // SG 4 — Basiswechsel
        { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['log-basiswechsel'],                     qty: 1 },
        { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-basiswechsel'],                     qty: 1 },
        { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['log-basiswechsel'],                     qty: 1 },
        { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-basiswechsel'],                     qty: 1 },
        { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['log-basiswechsel'],                     qty: 1, note: 'Halbwertszeit / Zinseszins' },
        // SG 5 — Summen-Falle
        { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['log-summe-nein'],                       qty: 1 },
        { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-summe-nein'],                       qty: 1 },
        { subGoal: 5, stage: 'apply-independent', type: 'multiple-choice', uses: ['log-summe-nein'],                       qty: 1, note: 'Aus Alternativ-Umformungen die richtige wählen' },
        { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-summe-nein'],                       qty: 1, note: 'Distraktor: Summe in Produkt zerlegt' },
        { subGoal: 5, stage: 'transfer',          type: 'matching',        uses: ['log-summe-nein', 'log-produkt'],        qty: 1, note: 'Erlaubte vs. verbotene Umformung' },
        // SG 6 — Exp-Log-Umkehrung
        { subGoal: 6, stage: 'recognize',         type: 'true-false',      uses: ['log-umkehr'],                           qty: 1 },
        { subGoal: 6, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-umkehr'],                           qty: 1 },
        { subGoal: 6, stage: 'apply-independent', type: 'number-input',    uses: ['log-umkehr'],                           qty: 1, note: '$e^x = 5$ lösen' },
        { subGoal: 6, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-umkehr'],                           qty: 1 },
        { subGoal: 6, stage: 'transfer',          type: 'number-input',    uses: ['log-umkehr', 'log-potenz'],             qty: 1 },
      ],
    },
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
  unitGoals: [
    'Potenzgesetze $a^m \\cdot a^n = a^{m+n}$, $(a^m)^n = a^{m \\cdot n}$, $a^{-n} = 1/a^n$ sicher anwenden',
    'Wurzeln als Bruchpotenzen lesen: $\\sqrt[n]{a} = a^{1/n}$ und mit Potenzgesetzen rechnen',
    'Logarithmengesetze nutzen, um Produkte/Potenzen in Summen/Vielfache zu zerlegen',
    'Exponentialgleichungen durch Logarithmieren und Logarithmusgleichungen durch Potenzieren lösen',
  ],
  lessons: lessons_alg_u1,
  exercises: exercises_alg_u1,
}
