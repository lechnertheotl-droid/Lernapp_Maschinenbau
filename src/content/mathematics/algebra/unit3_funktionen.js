// ── Algebra Unit 3: Funktionen ───────────────────────────────────────────────

export const exercises_alg_u3 = {
  // ── Lesson 1: Funktionsbegriff ──
  'ex-alg-3-1-a': {
    id: 'ex-alg-3-1-a', lessonId: 'alg-3-1', type: 'multiple-choice',
    question: 'Was ist eine Funktion $f: A \\to B$?',
    options: [
      'Jedem Element aus $A$ wird genau ein Element aus $B$ zugeordnet',
      'Jedem Element aus $A$ werden mehrere Elemente aus $B$ zugeordnet',
      'Nur manche Elemente aus $A$ haben ein Bild in $B$',
      '$A$ und $B$ müssen gleich sein',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Die Funktionsdefinition ist der Kern — ohne sie kein Definitions- oder Wertebereich, keine Umkehrfunktion, keine Analysis.

**Definition:** Eine Funktion $f: A \\to B$ ordnet **jedem** Element $x \\in A$ **genau ein** Element $y = f(x) \\in B$ zu. Zwei Bedingungen müssen gelten:
- **Existenz:** Jedes $x \\in A$ hat ein Bild (darf nicht "leer" sein).
- **Eindeutigkeit:** Zu jedem $x$ gehört nur *ein* einziges $y$.

**Grafische Kontrolle:** *Vertikaler Linientest* — jede Senkrechte $x = x_{0}$ darf den Graphen höchstens einmal schneiden. Ein Kreis $x^{2} + y^{2} = 1$ ist also *keine* Funktion (zwei Schnittpunkte).

**Typischer Fehler:** "Jedem $y$ genau ein $x$" verwechseln — das ist *Injektivität* und etwas anderes.`,
    hints: [
      'Jedem Input genau ein Output — aber dürfen zwei Inputs denselben Output haben?',
      'Ja, zwei verschiedene $x$ dürfen dasselbe $f(x)$ liefern (das wäre nur bei Injektivität verboten).',
      'Grafisch: Eine Senkrechte $x = x_{0}$ darf den Graphen höchstens einmal schneiden (Vertikaler Linientest).',
    ],
  },
  'ex-alg-3-1-b': {
    id: 'ex-alg-3-1-b', lessonId: 'alg-3-1', type: 'multiple-choice',
    question: '$f(x) = x^{2}$. Was ist der Definitionsbereich $D$ und der Wertebereich $W$?',
    options: [
      '$D = \\mathbb{R}, \\; W = \\mathbb{R}$',
      '$D = \\mathbb{R}, \\; W = [0, \\infty)$',
      '$D = [0, \\infty), \\; W = [0, \\infty)$',
      '$D = \\mathbb{R}, \\; W = (-\\infty, 0]$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Zwei Fragen getrennt stellen: (1) Welche $x$ darf ich einsetzen? (2) Welche $y$ können herauskommen?

**Definitionsbereich $D$:** Quadrieren ist für *jede* reelle Zahl erlaubt, also $D = \\mathbb{R}$.

**Wertebereich $W$:** Für jedes $x$ gilt $x^{2} \\geq 0$, und jede nicht-negative Zahl $y \\geq 0$ lässt sich als $(\\sqrt{y})^{2}$ schreiben. Also $W = [0, \\infty)$.

**Probe:** $f(-3) = 9 \\geq 0$. $f(0) = 0$. Negative Werte kommen *nie* vor.

**Typischer Fehler:** $W = \\mathbb{R}$ — nur dann richtig, wenn man Ausgaben *zulassen* würde, die nie auftreten. Wertebereich muss *exakt* die tatsächlich angenommenen Werte enthalten.`,
    hints: [
      'Fragen zu $D$: Für welche $x$ ist die Formel $x^{2}$ sinnvoll definiert?',
      'Fragen zu $W$: Kann $x^{2}$ negativ werden? Und wird jede nicht-negative Zahl getroffen?',
      'Quadrat einer reellen Zahl ist immer $\\geq 0$.',
    ],
  },
  'ex-alg-3-1-c': {
    id: 'ex-alg-3-1-c', lessonId: 'alg-3-1', type: 'true-false',
    statement: '$f(x) = x^{2}$ (mit $D = \\mathbb{R}$) ist injektiv (verschiedene $x$-Werte haben verschiedene $y$-Werte).',
    correct: false,
    explanation: `**Falsch.** Die Funktion $f(x) = x^{2}$ ist auf $\\mathbb{R}$ *nicht* injektiv.

**Gegenbeispiel:** $f(2) = 4$ und $f(-2) = 4$. Zwei verschiedene Eingaben liefern denselben Ausgangswert — das verletzt die Injektivitätsbedingung $f(x_{1}) = f(x_{2}) \\Rightarrow x_{1} = x_{2}$.

**Grafisch:** Der *horizontale* Linientest schlägt fehl — die Gerade $y = 4$ schneidet die Parabel in zwei Punkten.

**Einschränkung hilft:** Beschränkt man $f$ auf $D = [0, \\infty)$, wird sie streng monoton steigend und damit injektiv. Genau darum gibt es $\\sqrt{\\cdot}$ nur für $x \\geq 0$ als Umkehrung.

**Typischer Fehler:** Injektivität mit "Funktion" verwechseln — jede Funktion ist eindeutig in Vorwärtsrichtung, aber nicht jede ist injektiv (eindeutig rückwärts).`,
    hints: [
      'Injektiv prüft: Gibt es zwei verschiedene $x_{1} \\neq x_{2}$ mit $f(x_{1}) = f(x_{2})$?',
      'Probiere Gegenbeispiele mit betragsgleichen, aber verschieden vorzeichigen Zahlen.',
      '$f(2) = 4$ — gibt es noch eine andere Zahl mit demselben Bild?',
    ],
  },
  'ex-alg-3-1-mastery': {
    id: 'ex-alg-3-1-mastery', lessonId: 'alg-3-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Welche Eigenschaft muss eine Funktion haben, damit ihre Umkehrfunktion (auf dem gesamten Wertebereich) existiert?',
    options: ['Stetig', 'Differenzierbar', 'Bijektiv (injektiv + surjektiv)', 'Monoton fallend'],
    correctIndex: 2,
    explanation: `**Ansatz:** Umkehren heißt: zu jedem $y \\in W$ eindeutig das $x \\in D$ finden, das auf $y$ abbildet. Dafür braucht es beides — Existenz und Eindeutigkeit.

**Bedingung: Bijektivität.**
- **Injektiv:** Verschiedene $x$ geben verschiedene $y$. Dann gibt es zu jedem $y$ höchstens ein $x$. (Eindeutigkeit der Rückwärtsrichtung.)
- **Surjektiv:** Jedes $y$ im Zielbereich wird *wirklich* getroffen. (Damit man überhaupt etwas umkehren kann.)

**Rechnung/Beispiel:** $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^{3}$ ist bijektiv — Umkehrfunktion $f^{-1}(x) = \\sqrt[3]{x}$ existiert.

**Trick bei Einschränkung:** Nicht-bijektive Funktionen wie $x^{2}$ oder $\\sin(x)$ werden durch Einschränkung des Definitionsbereichs künstlich bijektiv gemacht — so entstehen $\\sqrt{x}$ (auf $[0, \\infty)$) und $\\arcsin(x)$ (auf $[-\\pi/2, \\pi/2]$).

**Typischer Fehler:** Stetigkeit oder Differenzierbarkeit mit Umkehrbarkeit verwechseln — die garantieren keine Umkehrung (z.B. $\\sin(x)$ ist stetig und differenzierbar, aber nicht bijektiv auf $\\mathbb{R}$).`,
    hints: [
      'Zwei Voraussetzungen: (a) jedes $y$ wird getroffen, (b) jedes $y$ wird nur einmal getroffen.',
      '(a) heißt surjektiv, (b) heißt injektiv — zusammen: bijektiv.',
      'Stetigkeit reicht *nicht*: $\\sin(x)$ ist stetig, aber nicht umkehrbar auf ganz $\\mathbb{R}$.',
    ],
  },

  // ── Lesson 2: Elementare Funktionen ──
  'ex-alg-3-2-a': {
    id: 'ex-alg-3-2-a', lessonId: 'alg-3-2', type: 'matching',
    question: 'Ordne die Funktionen ihrem Typ zu:',
    pairs: [
      { left: '$f(x) = x^{3}$', right: 'Potenzfunktion' },
      { left: '$f(x) = 2^{x}$', right: 'Exponentialfunktion' },
      { left: '$f(x) = \\ln(x)$', right: 'Logarithmusfunktion' },
      { left: '$f(x) = \\sin(x)$', right: 'Trigonometrische Funktion' },
    ],
    explanation: `**Ansatz:** Unterscheidungsmerkmal ist die *Position der Variablen $x$* in der Formel.

**Die vier Grundtypen:**
- **Potenzfunktion $x^{n}$:** $x$ in der **Basis**, Exponent $n$ ist konstant. Beispiel: $x^{2}, x^{3}, x^{-1}, x^{1/2}$.
- **Exponentialfunktion $a^{x}$:** $x$ im **Exponenten**, Basis $a > 0$ ist konstant. Beispiel: $2^{x}, e^{x}, 10^{x}$.
- **Logarithmusfunktion $\\log_{a}(x)$:** Umkehrung der Exponentialfunktion. Beispiel: $\\ln(x), \\log_{10}(x)$.
- **Trigonometrische Funktion:** $\\sin, \\cos, \\tan$ und ihre Umkehrungen — periodisch.

**Typischer Fehler:** $x^{2}$ und $2^{x}$ verwechseln — völlig unterschiedliches Wachstum! $x^{2}$ ist polynomial, $2^{x}$ exponentiell.

**Hierarchie für große $x$:** $\\ln(x) \\ll x^{n} \\ll a^{x}$.`,
    hints: [
      'Sieh genau hin: Steht $x$ *unten* (in der Basis) oder *oben* (im Exponenten)?',
      '$x^{n}$ = Potenz, $a^{x}$ = Exponential. $\\log$ ist die Umkehrung von $a^{x}$.',
      '$\\sin, \\cos, \\tan$ sind immer trigonometrisch — periodisch.',
    ],
  },
  'ex-alg-3-2-b': {
    id: 'ex-alg-3-2-b', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Welche Aussage über $f(x) = e^{x}$ ist FALSCH?',
    options: [
      '$f(x) > 0$ für alle $x \\in \\mathbb{R}$',
      '$f(0) = 1$',
      '$f$ ist streng monoton steigend',
      '$f$ hat eine Nullstelle bei $x = 0$',
    ],
    correctIndex: 3,
    explanation: `**Ansatz:** Die Exponentialfunktion $e^{x}$ hat charakteristische Eigenschaften, die man auswendig kennen muss.

**Prüfen aller Aussagen:**
- A: $e^{x} > 0$ für alle reellen $x$ — **richtig** (Wertebereich $(0, \\infty)$).
- B: $f(0) = e^{0} = 1$ — **richtig** (Potenzgesetz $a^{0} = 1$).
- C: Streng monoton steigend, da $f'(x) = e^{x} > 0$ — **richtig**.
- D: Nullstelle bei $x = 0$? $f(0) = 1 \\neq 0$ — **falsch**! $e^{x}$ hat **überhaupt keine** Nullstelle, weil $e^{x} > 0$ stets gilt.

**Grafisch:** Der Graph von $e^{x}$ liegt komplett über der $x$-Achse, nähert sich ihr für $x \\to -\\infty$ asymptotisch ($\\lim_{x \\to -\\infty} e^{x} = 0$), berührt sie aber nie.

**Typischer Fehler:** Die Nullstelle mit dem $y$-Achsenabschnitt verwechseln — der *Schnittpunkt mit der y-Achse* ist bei $y = 1$, aber der Schnittpunkt mit der $x$-Achse (Nullstelle) existiert *nicht*.`,
    hints: [
      'Gehe jede Aussage einzeln durch und prüfe.',
      'Kann $e^{x} = 0$ für irgendein $x$ jemals passieren?',
      '$e^{x}$ ist *immer positiv* — damit kann es keine Nullstelle haben.',
    ],
  },
  'ex-alg-3-2-c': {
    id: 'ex-alg-3-2-c', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Was ist der Definitionsbereich von $f(x) = \\ln(x)$?',
    options: ['$\\mathbb{R}$', '$(0, \\infty)$', '$[0, \\infty)$', '$(-\\infty, 0)$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Der natürliche Logarithmus ist über die Umkehrung von $e^{x}$ definiert — und $e^{x}$ nimmt nur positive Werte an.

**Regel:** $\\ln(x)$ ist nur für $x > 0$ definiert. $D = (0, \\infty)$ — offenes Intervall, da $x = 0$ nicht erlaubt ist.

**Warum nicht $x = 0$?** $\\ln(0)$ würde bedeuten: "$e$ hoch wie viel ergibt $0$?" — aber $e^{y} > 0$ für *alle* $y$, also gibt es kein solches $y$. Grenzwert: $\\lim_{x \\to 0^{+}} \\ln(x) = -\\infty$.

**Warum nicht $x < 0$?** Analog: $e^{y}$ wird nie negativ.

**Typischer Fehler:** $[0, \\infty)$ wählen — das $0$ gehört aber *nicht* zu $D$, da $\\ln(0)$ undefiniert (divergent) ist. Die Klammer ist eine runde Klammer.`,
    hints: [
      '$\\ln(x) = y$ bedeutet $e^{y} = x$. Welche $x$ sind so überhaupt erreichbar?',
      '$e^{y}$ ist stets positiv — also kann $\\ln$ nur positive Zahlen als Argument nehmen.',
      'Achtung bei der Klammer: Ist $x = 0$ erlaubt oder ausgeschlossen?',
    ],
  },
  'ex-alg-3-2-d': {
    id: 'ex-alg-3-2-d', lessonId: 'alg-3-2', type: 'multiple-choice',
    question: 'Welche Funktion wächst für große $x$ am schnellsten?',
    options: ['$x^{10}$', '$10^{x}$', '$\\ln(x)$', '$1000 \\cdot x$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Für große $x$ ("im Unendlichen") gibt es eine feste Wachstumshierarchie.

**Die Wachstumshierarchie:**
$$\\ln(x) \\ll x \\ll x^{n} \\ll a^{x} \\quad (\\text{für } a > 1, \\; x \\to \\infty)$$

Exponentialfunktionen wachsen schneller als jede Potenzfunktion, die schneller als der Logarithmus.

**Vergleich an konkreten Werten ($x = 100$):**
- $\\ln(100) \\approx 4{,}6$
- $1000 \\cdot 100 = 100\\,000 = 10^{5}$
- $100^{10} = 10^{20}$
- $10^{100}$ (gigantisch! Googol)

**Probe mit Grenzwert:** $\\lim_{x \\to \\infty} \\dfrac{10^{x}}{x^{10}} = \\infty$ — die Exponentialfunktion "überholt" jede Potenz.

**Typischer Fehler:** Sich vom riesigen Exponenten "$10$" in $x^{10}$ blenden lassen. Die *Struktur* entscheidet (Exponent bzw. Basis), nicht die Größe der Konstanten.`,
    hints: [
      'Wer gewinnt langfristig: Polynom, Logarithmus oder Exponential?',
      'Exponentielles Wachstum schlägt *jedes* polynomiale Wachstum — egal wie groß der Exponent.',
      'Merke die Hierarchie: $\\ln(x) \\ll x^{n} \\ll a^{x}$.',
    ],
  },
  'ex-alg-3-2-mastery': {
    id: 'ex-alg-3-2-mastery', lessonId: 'alg-3-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = 2 \\cdot e^{x} - 1$. Was ist $f(0)$?',
    options: ['$0$', '$1$', '$-1$', '$2$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Einsetzen von $x = 0$ und die Potenz-Grundregel $a^{0} = 1$ verwenden.

**Rechnung:**
$$f(0) = 2 \\cdot e^{0} - 1 = 2 \\cdot 1 - 1 = 2 - 1 = 1.$$

**Kernregel:** $e^{0} = 1$ — wie bei jeder Basis: $a^{0} = 1$ (für $a \\neq 0$).

**Probe:** Mit dem Taschenrechner $e^{0} \\cdot 2 - 1 = 2 - 1 = 1$. ✓

**Typischer Fehler:**
- $f(0) = 2 - 1 = 1$ — richtig.
- $e^{0} = 0$ annehmen und $f(0) = -1$ rechnen — klassisch falsch.
- Punkt-vor-Strich vergessen: erst $2 \\cdot e^{0} = 2$, dann $-1$.`,
    hints: [
      'Setze $x = 0$ ein und erinnere dich an die Potenz-Regel $a^{0} = 1$.',
      'Also $e^{0} = 1$, damit wird aus $2 \\cdot e^{0}$ einfach $2$.',
      'Dann $2 - 1$ rechnen.',
    ],
  },

  // ── Lesson 3: Funktionsoperationen ──
  'ex-alg-3-3-a': {
    id: 'ex-alg-3-3-a', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: 'Der Graph von $f(x) = x^{2}$ wird um $3$ nach rechts und $2$ nach oben verschoben. Wie lautet die neue Funktion?',
    options: ['$g(x) = (x-3)^{2} + 2$', '$g(x) = (x+3)^{2} + 2$', '$g(x) = (x-3)^{2} - 2$', '$g(x) = (x+2)^{2} + 3$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Zwei getrennte Transformationen — horizontale Verschiebung (im Argument) und vertikale Verschiebung (außen).

**Regeln:**
- Um $a$ nach **rechts** verschieben: $x$ durch $(x - a)$ ersetzen. (Merksatz: *Minus → Rechts!*)
- Um $b$ nach **oben** verschieben: $+b$ am Ende addieren.

**Rechnung:**
$$g(x) = f(x - 3) + 2 = (x - 3)^{2} + 2.$$

**Probe:** Der Scheitelpunkt der ursprünglichen Parabel $f(x) = x^{2}$ liegt bei $(0, 0)$. Nach Verschiebung um $+3$ rechts und $+2$ hoch sollte er bei $(3, 2)$ liegen. Einsetzen: $g(3) = (3-3)^{2} + 2 = 0 + 2 = 2$. ✓

**Warum Minus = Rechts?** Intuitiv widersprüchlich, aber: Der *neue Graph* erreicht den alten Wert $f(0)$ bei $x = 3$, da $x - 3 = 0$. Der Graph zieht also den Wert von "links" nach rechts nach.

**Typischer Fehler:** $(x + 3)^{2} + 2$ — das wäre Verschiebung nach *links*. Und $(x - 3)^{2} - 2$ wäre Verschiebung nach unten.`,
    hints: [
      'Horizontal (links/rechts) wirkt *im Argument*, vertikal (oben/unten) *außen*.',
      'Merke: Rechts-Verschiebung um $a$ → $x$ durch $(x-a)$ ersetzen. Oben um $b$ → $+b$ anhängen.',
      'Form: $g(x) = f(x - a) + b = (x - a)^{2} + b$.',
    ],
  },
  'ex-alg-3-3-b': {
    id: 'ex-alg-3-3-b', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: '$f(x) = \\sin(x)$ wird an der $x$-Achse gespiegelt. Wie lautet die neue Funktion?',
    options: ['$g(x) = \\sin(-x)$', '$g(x) = -\\sin(x)$', '$g(x) = \\sin(x + \\pi)$', '$g(x) = |\\sin(x)|$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Spiegelung an der $x$-Achse bedeutet: Jeder Punkt $(x, y)$ wird zu $(x, -y)$ — die $y$-Werte werden negiert, $x$ bleibt gleich.

**Regel:**
- Spiegelung an der **$x$-Achse**: $g(x) = -f(x)$ (Minus **vor** die Funktion).
- Spiegelung an der **$y$-Achse**: $g(x) = f(-x)$ (Minus **ins Argument**).

**Rechnung:** $g(x) = -f(x) = -\\sin(x)$.

**Interessant:** Tatsächlich gilt zufällig auch $-\\sin(x) = \\sin(-x)$ (Sinus ist ungerade!), aber die *Frage* war nach der *Spiegelung an der x-Achse*, nicht an der $y$-Achse. Die Antwort $-\\sin(x)$ drückt die geforderte Operation direkt aus.

**Probe:** $\\sin(\\pi/2) = 1$, gespiegelt $(π/2, -1)$. Mit $g(π/2) = -\\sin(π/2) = -1$. ✓

**Typischer Fehler:**
- $|\\sin(x)|$: Das klappt die negativen Halbwellen nach *oben*, aber spiegelt die positiven nicht — ist also keine Spiegelung.
- $\\sin(x + \\pi)$: Das ist eine Phasenverschiebung (die zufällig auch $-\\sin(x)$ ergibt), aber keine direkte Spiegelung.`,
    hints: [
      'Spiegelung an der $x$-Achse: $(x, y) \\to (x, -y)$. Was passiert mit $y = f(x)$?',
      'Minus kommt *vor* die Funktion (außen), nicht ins Argument.',
      'Regel: $g(x) = -f(x)$.',
    ],
  },
  'ex-alg-3-3-c': {
    id: 'ex-alg-3-3-c', lessonId: 'alg-3-3', type: 'multiple-choice',
    question: '$f(x) = x^{2}$ wird vertikal um Faktor $3$ gestreckt. Wie lautet $g(x)$?',
    options: ['$g(x) = x^{6}$', '$g(x) = 3x^{2}$', '$g(x) = (3x)^{2}$', '$g(x) = x^{2} + 3$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Vertikale Streckung um Faktor $c$ multipliziert alle $y$-Werte mit $c$ — das heißt: $c$ kommt *vor* die Funktion.

**Regel:** $g(x) = c \\cdot f(x)$. Hier $c = 3$, also $g(x) = 3 \\cdot x^{2} = 3x^{2}$.

**Rechnung:** Aus $f(1) = 1$ wird $g(1) = 3$, aus $f(2) = 4$ wird $g(2) = 12$ — alle $y$-Werte verdreifacht.

**Abgrenzung — $(3x)^{2}$:** Das wäre eine *horizontale* Stauchung (um Faktor $1/3$). Ausrechnen: $(3x)^{2} = 9x^{2}$, also andere Funktion.

**Typischer Fehler:**
- $x^{6}$: Verwechselt "Potenz der Potenz" mit Streckung.
- $(3x)^{2}$: $3$ wirkt hier *im Argument*, also horizontal statt vertikal.
- $x^{2} + 3$: Das ist Verschiebung, keine Streckung.

**Merke:** Streckung/Stauchung = *multiplikativ*, Verschiebung = *additiv*.`,
    hints: [
      'Vertikal strecken bedeutet: Alle $y$-Werte werden mit dem Streckfaktor multipliziert.',
      'Wo muss der Faktor $3$ also hin — ins Argument oder außen vor $f$?',
      'Regel: $g(x) = c \\cdot f(x)$. Setze $c = 3$ und $f(x) = x^{2}$ ein.',
    ],
  },
  'ex-alg-3-3-mastery': {
    id: 'ex-alg-3-3-mastery', lessonId: 'alg-3-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = e^{x}$. Welche Transformation ergibt $g(x) = e^{x-2} + 1$?',
    options: [
      'Verschiebung um $2$ nach rechts und $1$ nach oben',
      'Verschiebung um $2$ nach links und $1$ nach oben',
      'Streckung um $2$ und Verschiebung um $1$',
      'Spiegelung und Verschiebung',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** $g(x)$ in die Standardform $f(x - a) + b$ bringen und die Parameter $a, b$ ablesen.

**Analyse der Formel:** $g(x) = e^{x-2} + 1 = f(x - 2) + 1$ mit $f(x) = e^{x}$.
- $(x - 2)$ im Argument → Verschiebung um $a = 2$ nach **rechts** (Merksatz: *Minus → Rechts*).
- $+1$ außen → Verschiebung um $b = 1$ nach **oben**.

**Probe:** Der Graph von $e^{x}$ geht durch $(0, 1)$. Nach der Transformation sollte er durch $(0 + 2, 1 + 1) = (2, 2)$ gehen. Einsetzen: $g(2) = e^{2-2} + 1 = e^{0} + 1 = 1 + 1 = 2$. ✓

**Asymptote:** $e^{x}$ hat $y = 0$ als waagrechte Asymptote. Nach Verschiebung um $+1$ wird daraus $y = 1$. Das ist ein guter Kontrollmechanismus.

**Typischer Fehler:**
- *Links* statt rechts bei $(x - 2)$ — Minus im Argument heißt *rechts*.
- Das "$+1$" als Streckung fehldeuten — Streckung wäre ein multiplikativer Faktor, kein additiver.`,
    hints: [
      'Bring $g$ in die Form $f(x - a) + b$: $g(x) = e^{x-2} + 1 = f(x - 2) + 1$.',
      'Lese $a$ und $b$ ab: $a = 2, b = 1$.',
      '$(x - a)$ heißt Verschiebung um $a$ nach rechts. $+b$ heißt Verschiebung um $b$ nach oben.',
    ],
  },

  // ── Lesson 4: Umkehrfunktionen ──
  'ex-alg-3-4-a': {
    id: 'ex-alg-3-4-a', lessonId: 'alg-3-4', type: 'multiple-choice',
    question: 'Was ist die Umkehrfunktion von $f(x) = 2x + 3$?',
    options: ['$f^{-1}(x) = \\dfrac{x-3}{2}$', '$f^{-1}(x) = 2x - 3$', '$f^{-1}(x) = \\dfrac{1}{2x+3}$', '$f^{-1}(x) = \\dfrac{x+3}{2}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Umkehrfunktion — Dreischritt-Verfahren: (1) $y = f(x)$, (2) nach $x$ auflösen, (3) $x$ und $y$ vertauschen.

**Rechnung:**
1. Ansatz: $y = 2x + 3$.
2. Nach $x$ auflösen: $y - 3 = 2x \\Rightarrow x = \\dfrac{y - 3}{2}$.
3. Vertauschen: $f^{-1}(x) = \\dfrac{x - 3}{2}$.

**Alternativer Denkweg:** $f$ verdoppelt und addiert $3$. Die Umkehrung macht es *rückwärts*: erst $3$ abziehen, dann halbieren — genau $(x - 3)/2$.

**Probe (Verkettung):** $f(f^{-1}(x)) = 2 \\cdot \\dfrac{x - 3}{2} + 3 = (x - 3) + 3 = x$. ✓

**Typischer Fehler:**
- $2x - 3$: Nur "invertierte" Koeffizienten — funktioniert nicht.
- $\\dfrac{x + 3}{2}$: Vorzeichenfehler beim Umstellen.
- $\\dfrac{1}{2x + 3}$: *Kehrwert* statt Umkehrfunktion — das sind zwei völlig verschiedene Dinge!`,
    hints: [
      'Setze $y = f(x)$ und löse die Gleichung nach $x$ auf.',
      'Dreischritt: (1) $y = 2x + 3$, (2) $x = ?$, (3) $x \\leftrightarrow y$ tauschen.',
      'Prüfe mit der Verkettung: $f(f^{-1}(x))$ muss $x$ ergeben.',
    ],
  },
  'ex-alg-3-4-b': {
    id: 'ex-alg-3-4-b', lessonId: 'alg-3-4', type: 'multiple-choice',
    question: 'Die Umkehrfunktion von $f(x) = e^{x}$ ist:',
    options: ['$f^{-1}(x) = \\dfrac{1}{e^{x}}$', '$f^{-1}(x) = \\ln(x)$', '$f^{-1}(x) = e^{-x}$', '$f^{-1}(x) = 10^{x}$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Umkehrfunktion der Exponentialfunktion zur Basis $e$ — das ist per Definition der natürliche Logarithmus.

**Regel:** $f(x) = e^{x}$ und $f^{-1}(x) = \\ln(x)$ sind Umkehrfunktionen.

**Herleitung:**
1. $y = e^{x}$.
2. Nach $x$ auflösen: $\\ln(y) = \\ln(e^{x}) = x$.
3. Tauschen: $f^{-1}(x) = \\ln(x)$.

**Probe:** $\\ln(e^{x}) = x$ und $e^{\\ln(x)} = x$. ✓

**Achtung bei Kehrwert vs. Umkehrung:**
- **Kehrwert:** $\\dfrac{1}{e^{x}} = e^{-x}$ — multiplikative Inverse, $f(x) \\cdot \\dfrac{1}{f(x)} = 1$.
- **Umkehrfunktion:** $\\ln(x)$ — macht die Operation rückgängig, $f(f^{-1}(x)) = x$.

**Typischer Fehler:**
- $e^{-x}$ als Umkehrfunktion — das ist der Kehrwert, nicht die Umkehrung.
- $10^{x}$: Das ist die Exponentialfunktion zu einer *anderen* Basis, keine Umkehrung.`,
    hints: [
      'Welche Funktion "kürzt" $e^{x}$ heraus, also was ist die Umkehrung?',
      '$\\ln$ ist *definiert* als Umkehrung von $e^{x}$.',
      'Prüfe die Verkettung: $\\ln(e^{x}) = ?$ und $e^{\\ln(x)} = ?$.',
    ],
  },
  'ex-alg-3-4-c': {
    id: 'ex-alg-3-4-c', lessonId: 'alg-3-4', type: 'true-false',
    statement: 'Der Graph einer Umkehrfunktion $f^{-1}$ entsteht durch Spiegelung des Graphen von $f$ an der Geraden $y = x$.',
    correct: true,
    explanation: `**Wahr.** Das ist eine der schönsten geometrischen Eigenschaften der Umkehrfunktion.

**Warum?** Bei der Umkehrung werden $x$ und $y$ vertauscht. Ein Punkt $(a, b)$ auf dem Graphen von $f$ (also $b = f(a)$) wird damit zum Punkt $(b, a)$ auf dem Graphen von $f^{-1}$ (da $a = f^{-1}(b)$). Die Abbildung $(a, b) \\to (b, a)$ ist geometrisch genau die *Spiegelung an der Geraden $y = x$*.

**Beispiel:** $f(x) = e^{x}$ und $f^{-1}(x) = \\ln(x)$ — die beiden Graphen sind spiegelsymmetrisch zu $y = x$. Der Schnittpunkt ihrer Tangenten mit $y = x$ liegt genau auf dieser Geraden.

**Probe mit konkretem Punkt:** $(0, 1)$ liegt auf $e^{x}$ (da $e^{0} = 1$). Gespiegelt an $y = x$ ergibt $(1, 0)$, und tatsächlich: $\\ln(1) = 0$. ✓

**Nützlich:** In Prüfungen kannst du den Graphen einer Umkehrfunktion schnell skizzieren, indem du den Originalgraphen an $y = x$ spiegelst — ohne die Formel zu kennen.`,
    hints: [
      'Was passiert mit einem Punkt $(a, b)$, wenn man Definitions- und Wertebereich vertauscht?',
      '$(a, b) \\to (b, a)$ — welche geometrische Operation ist das?',
      'Die Spiegelung an $y = x$ genau: jeder Punkt wechselt $x$- und $y$-Koordinate.',
    ],
  },
  'ex-alg-3-4-mastery': {
    id: 'ex-alg-3-4-mastery', lessonId: 'alg-3-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = x^{2}$ (für $x \\geq 0$). Was ist $f^{-1}(x)$?',
    options: ['$f^{-1}(x) = \\sqrt{x}$', '$f^{-1}(x) = \\pm\\sqrt{x}$', '$f^{-1}(x) = x^{1/2}$ für alle $x \\in \\mathbb{R}$', 'Existiert nicht'],
    correctIndex: 0,
    explanation: `**Ansatz:** Existenzprüfung — ist $f$ bijektiv? Wenn ja: Umkehrung berechnen.

**Einschränkung prüfen:** Auf $D = [0, \\infty)$ ist $f(x) = x^{2}$ streng monoton steigend (Ableitung $f'(x) = 2x \\geq 0$). Bild ist $W = [0, \\infty)$. Damit ist $f: [0, \\infty) \\to [0, \\infty)$ bijektiv.

**Rechnung:**
1. $y = x^{2}$ mit $x \\geq 0$.
2. Nach $x$ auflösen: $x = +\\sqrt{y}$ (positive Wurzel, da $x \\geq 0$).
3. Tauschen: $f^{-1}(x) = \\sqrt{x}$.

**Warum nicht $\\pm\\sqrt{x}$?** Die Doppelwurzel $\\pm\\sqrt{x}$ wäre *keine Funktion* (zwei $y$-Werte pro $x$). Die Einschränkung $x \\geq 0$ im Urbild wählt genau den positiven Ast.

**Warum nicht ohne Einschränkung?** Ohne $x \\geq 0$ wäre $f(2) = f(-2) = 4$, also $f$ nicht injektiv, und eine Umkehrung existiert *nicht* als Funktion.

**Probe:** $f(f^{-1}(x)) = (\\sqrt{x})^{2} = x$ für $x \\geq 0$. ✓ Und $f^{-1}(f(x)) = \\sqrt{x^{2}} = |x| = x$ für $x \\geq 0$. ✓

**Typischer Fehler:**
- $\\pm\\sqrt{x}$: Verletzt Funktionsbedingung (Eindeutigkeit).
- "Existiert nicht": Falsch — die Einschränkung macht $f$ bijektiv.
- $x^{1/2}$ für alle $x \\in \\mathbb{R}$: Für negative $x$ nicht reell definiert.`,
    hints: [
      'Prüfe zuerst: Ist $f$ auf $[0, \\infty)$ injektiv und surjektiv?',
      'Streng monoton steigend → injektiv. Bild $[0, \\infty)$ wird komplett erreicht → surjektiv.',
      'Dann $y = x^{2}$ nach $x$ auflösen und beachten: nur die *positive* Wurzel, da $x \\geq 0$ gefordert ist.',
    ],
  },
}

const lessons_alg_u3 = [
  {
    id: 'alg-3-1', unitId: 'alg-unit-3',
    title: 'Funktionsbegriff',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Definition einer Funktion kennen', 'Definitions- und Wertebereich bestimmen', 'Injektiv, surjektiv, bijektiv unterscheiden'],
    prerequisites: [],
    nextLessonId: 'alg-3-2',
    steps: [
      {
        id: 'alg-3-1-s1', type: 'explanation-intuitive', title: 'Was ist eine Funktion?',
        content: `Stell dir eine **Maschine** vor: Du wirfst eine Zahl rein ($x$), und es kommt genau eine Zahl raus ($y = f(x)$).

**Beispiel:** Die "Quadrier-Maschine" $f(x) = x^{2}$.
- Rein: $3$ → Raus: $9$
- Rein: $-2$ → Raus: $4$
- Rein: $0$ → Raus: $0$

**Wichtig:** Für jedes $x$ kommt **genau ein** $y$ raus. Nie null, nie zwei verschiedene!

**Grundbegriffe:**
- **Definitionsbereich $D$:** Alle erlaubten Eingaben (z.B. bei $\\sqrt{x}$ nur $x \\geq 0$).
- **Wertebereich $W$:** Alle tatsächlich auftretenden Ausgaben (z.B. bei $x^{2}$ nur $y \\geq 0$).
- **Graph:** Alle Punkte $(x, f(x))$ in der Ebene.

**Vertikaler Linientest:** Eine Kurve ist genau dann Graph einer Funktion, wenn jede Senkrechte $x = x_{0}$ sie höchstens einmal schneidet. Ein Kreis verletzt das.`,
      },
      {
        id: 'alg-3-1-s2', type: 'explanation-formal', title: 'Injektiv, Surjektiv, Bijektiv',
        content: `Drei wichtige Eigenschaften von Funktionen $f: A \\to B$:

**Injektiv** (eindeutig, 1-zu-1):
Verschiedene Eingaben → verschiedene Ausgaben.
$$f(x_{1}) = f(x_{2}) \\Rightarrow x_{1} = x_{2}$$
Beispiel: $f(x) = 2x$ ist injektiv. $f(x) = x^{2}$ ist NICHT injektiv (da $f(2) = f(-2) = 4$).

**Surjektiv** (auf):
Jedes Element in $B$ wird getroffen (hat ein Urbild).
Beispiel: $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^{3}$ ist surjektiv. $f(x) = x^{2}$ (als $\\mathbb{R} \\to \\mathbb{R}$) ist NICHT surjektiv ($-1$ wird nie erreicht).

**Bijektiv** = injektiv + surjektiv:
Perfekte 1-zu-1-Zuordnung. **Nur bijektive Funktionen haben eine Umkehrfunktion!**
Beispiel: $f(x) = 2x + 1$ ist bijektiv (als $\\mathbb{R} \\to \\mathbb{R}$).

**Horizontaler Linientest:** Schneidet jede Waagrechte den Graphen genau einmal → bijektiv (auf passendem Bildbereich).`,
      },
      {
        id: 'alg-3-1-s3', type: 'visualization', title: 'Funktionsgraph',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'x²' },
          ],
          xRange: [-3, 3],
          yRange: [-1, 9],
          showGrid: true,
        },
      },
      { id: 'alg-3-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-1-a' },
      { id: 'alg-3-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-1-b' },
      { id: 'alg-3-1-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-1-c' },
      { id: 'alg-3-1-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-3-1-mastery' },
    ],
  },
  {
    id: 'alg-3-2', unitId: 'alg-unit-3',
    title: 'Elementare Funktionen',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Potenz-, Exponential- und Logarithmusfunktionen unterscheiden', 'Wachstumsverhalten vergleichen', 'Definitionsbereiche kennen'],
    prerequisites: [],
    nextLessonId: 'alg-3-3',
    steps: [
      {
        id: 'alg-3-2-s1', type: 'explanation-formal', title: 'Die wichtigsten Funktionstypen',
        content: `**Potenzfunktionen:** $f(x) = x^{n}$
- $n$ gerade: U-Form (Parabel), achsensymmetrisch zur $y$-Achse
- $n$ ungerade: S-Form, punktsymmetrisch zum Ursprung
- Definitionsbereich: $\\mathbb{R}$ (für ganzzahlige $n \\geq 0$)

**Exponentialfunktionen:** $f(x) = a^{x}$ (mit $a > 0, a \\neq 1$)
- Wächst ($a > 1$) oder fällt ($0 < a < 1$) **extrem schnell**
- Immer positiv: $f(x) > 0$
- Definitionsbereich: $\\mathbb{R}$, Wertebereich: $(0, \\infty)$
- Wichtigste: $e^{x}$ (Basis $e \\approx 2{,}718$)

**Logarithmusfunktionen:** $f(x) = \\log_{a}(x)$
- Umkehrung der Exponentialfunktion
- Definitionsbereich: $(0, \\infty)$
- Wächst langsam (langsamer als jede Potenz!)
- Wichtigste: $\\ln(x) = \\log_{e}(x)$

**Trigonometrische Funktionen:** $\\sin(x), \\cos(x), \\tan(x)$
- Periodisch (wiederholen sich)
- Details im Thema "Trigonometrie"

**Wachstumshierarchie:** $\\ln(x) \\ll x^{n} \\ll a^{x}$ für große $x$ (und $a > 1$).`,
      },
      {
        id: 'alg-3-2-s2', type: 'visualization', title: 'Elementare Funktionen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'x²' },
            { fn: (x) => Math.exp(x), color: '#ef4444', label: 'eˣ' },
            { fn: (x) => (x > 0 ? Math.log(x) : NaN), color: '#22c55e', label: 'ln(x)' },
            { fn: (x) => Math.sqrt(Math.abs(x)), color: '#f59e0b', label: '√|x|' },
          ],
          xRange: [-3, 4],
          yRange: [-3, 8],
          showGrid: true,
        },
      },
      { id: 'alg-3-2-s3', type: 'exercise', title: 'Aufgabe 1 (Zuordnung)', exerciseRef: 'ex-alg-3-2-a' },
      { id: 'alg-3-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-2-b' },
      { id: 'alg-3-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-2-c' },
      { id: 'alg-3-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-alg-3-2-d' },
      { id: 'alg-3-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-2-mastery' },
    ],
  },
  {
    id: 'alg-3-3', unitId: 'alg-unit-3',
    title: 'Funktionsoperationen',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Verschiebung, Streckung, Spiegelung anwenden', 'Transformationsregeln sicher beherrschen'],
    prerequisites: [],
    nextLessonId: 'alg-3-4',
    steps: [
      {
        id: 'alg-3-3-s1', type: 'explanation-intuitive', title: 'Graphen verändern — die Regeln',
        content: `Man kann jeden Funktionsgraphen verschieben, strecken und spiegeln. Die Regeln sind immer gleich!

**Verschiebung:**
- $f(x - a)$: um $a$ nach **rechts** (Minus → rechts, Achtung: kontraintuitiv!)
- $f(x) + b$: um $b$ nach **oben**
- Zusammen: $f(x - a) + b$ → $a$ rechts, $b$ hoch

**Streckung/Stauchung:**
- $c \\cdot f(x)$: vertikal um Faktor $c$ ($c > 1$: strecken, $0 < c < 1$: stauchen)
- $f(c \\cdot x)$: horizontal um Faktor $1/c$ ($c > 1$: stauchen, kontraintuitiv!)

**Spiegelung:**
- $-f(x)$: an der **$x$-Achse** (alle $y$-Werte umkehren)
- $f(-x)$: an der **$y$-Achse** (Graph links-rechts spiegeln)

**Merkregel:** Alles, was "im $x$ passiert" (im Argument), wirkt **horizontal und umgekehrt**. Alles, was "außen passiert" (vor oder nach $f$), wirkt **vertikal und wie erwartet**.

**Standardform:** $g(x) = c \\cdot f(x - a) + b$ — mit Streckfaktor $c$, Horizontalverschiebung $a$ und Vertikalverschiebung $b$.`,
      },
      { id: 'alg-3-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-3-a' },
      { id: 'alg-3-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-3-b' },
      { id: 'alg-3-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-3-c' },
      { id: 'alg-3-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-3-mastery' },
    ],
  },
  {
    id: 'alg-3-4', unitId: 'alg-unit-3',
    title: 'Umkehrfunktionen',
    order: 4, estimatedMinutes: 12,
    learningGoals: ['Umkehrfunktion berechnen', 'Bedingung für Existenz kennen', 'Graphische Interpretation verstehen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-3-4-s1', type: 'explanation-intuitive', title: 'Umkehrfunktionen — die "Rückwärts-Maschine"',
        content: `Stell dir wieder die Maschine vor: $f$ verwandelt $x$ in $y$. Die **Umkehrfunktion** $f^{-1}$ macht das rückgängig: sie verwandelt $y$ zurück in $x$.

**Beispiel:**
- $f(x) = 2x + 3$ (verdoppeln und $3$ addieren)
- $f^{-1}(x) = \\dfrac{x - 3}{2}$ ($3$ abziehen und halbieren — genau rückwärts!)

**Berechnung — Dreischritt:**
1. Schreibe $y = f(x)$.
2. Löse die Gleichung nach $x$ auf.
3. Tausche $x$ und $y$ → $f^{-1}(x)$.

**Wann existiert $f^{-1}$?**
Nur wenn $f$ **bijektiv** ist. Also: Verschiedene Eingaben müssen verschiedene Ausgaben haben (injektiv), und jeder $y$-Wert muss vorkommen (surjektiv).

**Einschränkung als Trick:** Nicht-bijektive Funktionen wie $x^{2}$ werden durch Einschränkung ($x \\geq 0$) künstlich bijektiv — so entsteht $\\sqrt{x}$.

**Graphisch:** Der Graph von $f^{-1}$ entsteht durch **Spiegelung an $y = x$**. Punkt $(a, b)$ wird zu $(b, a)$.

**Kontrolle:** $f(f^{-1}(x)) = x$ und $f^{-1}(f(x)) = x$ — das sind die Defining-Identitäten.`,
      },
      {
        id: 'alg-3-4-s2', type: 'explanation-formal', title: 'Wichtige Umkehrpaare',
        content: `**Wichtige Umkehrfunktionspaare:**

| Funktion $f(x)$ | Umkehrfunktion $f^{-1}(x)$ | Bedingung |
|---------------|----------------------|-----------|
| $x^{2}$ | $\\sqrt{x}$ | $x \\geq 0$ |
| $x^{3}$ | $\\sqrt[3]{x}$ | $\\mathbb{R} \\to \\mathbb{R}$ |
| $e^{x}$ | $\\ln(x)$ | $\\mathbb{R} \\to (0, \\infty)$ |
| $a^{x}$ | $\\log_{a}(x)$ | $\\mathbb{R} \\to (0, \\infty)$ |
| $\\sin(x)$ | $\\arcsin(x)$ | $[-\\pi/2, \\pi/2] \\to [-1, 1]$ |

**Wichtige Eigenschaft:**
$$f(f^{-1}(x)) = x \\quad \\text{und} \\quad f^{-1}(f(x)) = x$$

Beispiel: $e^{\\ln(x)} = x$ (für $x > 0$) und $\\ln(e^{x}) = x$ (für alle $x \\in \\mathbb{R}$).

**Achtung:** Umkehrfunktion $\\neq$ Kehrwert. $\\dfrac{1}{f(x)}$ ist der *multiplikative* Kehrwert, $f^{-1}(x)$ macht die Operation *rückgängig*.`,
      },
      { id: 'alg-3-4-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-3-4-a' },
      { id: 'alg-3-4-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-3-4-b' },
      { id: 'alg-3-4-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-3-4-c' },
      { id: 'alg-3-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-3-4-mastery' },
    ],
  },
]

export const alg_unit3 = {
  id: 'alg-unit-3',
  title: 'Funktionen',
  order: 3,
  description: 'Funktionsbegriff, elementare Funktionen, Transformationen, Umkehrfunktionen',
  lessons: lessons_alg_u3,
  exercises: exercises_alg_u3,
}
