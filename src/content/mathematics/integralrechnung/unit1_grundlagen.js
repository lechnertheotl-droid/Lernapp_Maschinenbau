// ── Integralrechnung Unit 1: Stammfunktionen & Grundintegrale ─────────────────

export const exercises_int_u1 = {
  // ── Lesson 1: Stammfunktion — das Umkehren der Ableitung ──────────────────
  'ex-int-1-1-a': {
    id: 'ex-int-1-1-a', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Was ist eine Stammfunktion $F(x)$ von $f(x)$?',
    options: [
      'Eine Funktion, deren Ableitung $f(x)$ ergibt: $F\'(x) = f(x)$',
      'Die Ableitung von $f(x)$',
      'Der Kehrwert von $f(x)$',
      'Die Nullstelle von $f(x)$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Definition nachschlagen — Stammfunktion und Ableitung hängen über die Umkehrbeziehung zusammen.

**Rechnung:** Eine Stammfunktion $F(x)$ erfüllt $F'(x) = f(x)$. Integration ist genau die Umkehrung der Differentiation.

**Probe:** Für $f(x) = 2x$ ist $F(x) = x^{2}$ eine Stammfunktion, denn $(x^{2})' = 2x$. ✓

**Typischer Fehler:** Stammfunktion mit Ableitung verwechseln — die Ableitung von $f$ wäre $f'(x)$, nicht $F(x)$.`,
    hints: [
      'Welche Operation ist die Umkehrung des Ableitens?',
      'Definition: $F$ heißt Stammfunktion von $f$, wenn $F\'(x) = f(x)$.',
      'Teste: Wenn du $F(x) = x^{2}$ ableitest, was bekommst du?',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast Stammfunktion und Ableitung verwechselt — das ist genau die umgekehrte Richtung. Die Ableitung von $f(x)$ ist $f\'(x)$; die Stammfunktion $F(x)$ erfüllt dagegen $F\'(x) = f(x)$. Beispiel: Für $f(x) = 2x$ ist $f\'(x) = 2$, aber $F(x) = x^{2}$.',
      '2': 'Der Kehrwert $\\frac{1}{f(x)}$ ist eine rein algebraische Operation, die mit Integration nichts zu tun hat. Die Stammfunktion kommt aus dem Umkehren des Ableitens: $F\'(x) = f(x)$. Beispiel: Kehrwert von $f(x) = 2x$ ist $\\frac{1}{2x}$, aber die Stammfunktion ist $x^{2}$.',
      '3': 'Die Nullstelle ist ein $x$-Wert, an dem $f(x) = 0$ ist — eine Zahl, keine Funktion. Die Stammfunktion ist dagegen eine ganze Funktion $F(x)$ mit $F\'(x) = f(x)$. Beispiel: $f(x) = 2x$ hat die Nullstelle $x = 0$, aber die Stammfunktion $F(x) = x^{2}$.',
    },
  },
  'ex-int-1-1-b': {
    id: 'ex-int-1-1-b', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Warum schreibt man bei unbestimmten Integralen immer "$+C$"?',
    options: [
      '$C$ steht für "Cosinus"',
      'Weil die Integrationskonstante beliebig ist — jede Konstante fällt beim Ableiten weg',
      '$C$ ist immer gleich $0$',
      '$C$ ist der Anfangswert der Funktion',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Frage rückwärts — was passiert beim Ableiten mit einer Konstanten?

**Rechnung:** Für jede Konstante $C \\in \\mathbb{R}$ gilt $(F(x) + C)' = F'(x) + 0 = f(x)$. Es gibt also unendlich viele Stammfunktionen, die sich nur um eine additive Konstante unterscheiden.

**Probe:** $F_{1}(x) = x^{2}$, $F_{2}(x) = x^{2} + 7$ liefern beide $F'(x) = 2x$. ✓

**Typischer Fehler:** "$+C$" weglassen — das ist in Prüfungen ein Standardpunktabzug bei unbestimmten Integralen!`,
    hints: [
      'Was passiert beim Ableiten mit einer Konstanten?',
      'Denke an: $(F(x) + 7)\' = F\'(x) + 0 = f(x)$.',
      'Die Stammfunktion ist nicht eindeutig — die Familie $F(x) + C$ hat dieselbe Ableitung.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das $C$ ist nur ein Buchstabe für eine beliebige reelle Konstante (von engl. "constant"), nicht für "Cosinus". Es steht, weil jede Konstante beim Ableiten verschwindet: $(F(x) + C)\' = F\'(x)$, also sind unendlich viele Stammfunktionen möglich.',
      '2': '$C$ ist gerade nicht fest auf $0$ gesetzt, sondern steht stellvertretend für jede beliebige reelle Konstante. Würde $C = 0$ gelten, wäre $x^{2}$ die einzige Stammfunktion von $2x$ — aber auch $x^{2} + 5$ oder $x^{2} - 7$ haben die Ableitung $2x$.',
      '3': 'Ein Anfangswert $F(x_{0}) = y_{0}$ legt $C$ erst bei zusätzlicher Bedingung fest — ohne Randbedingung bleibt $C$ beliebig. Die Grundaussage ist: $(F(x) + C)\' = f(x)$ für jedes $C$, deshalb muss man $C$ mitschreiben.',
    },
  },
  'ex-int-1-1-c': {
    id: 'ex-int-1-1-c', lessonId: 'int-1-1', type: 'matching',
    question: 'Ordne jeder Funktion $f(x)$ eine Stammfunktion $F(x)$ zu:',
    pairs: [
      { left: '$f(x) = 2x$', right: '$F(x) = x^{2}$' },
      { left: '$f(x) = 3x^{2}$', right: '$F(x) = x^{3}$' },
      { left: '$f(x) = 1$', right: '$F(x) = x$' },
      { left: '$f(x) = 0$', right: '$F(x) = C$ (Konstante)' },
    ],
    explanation: `**Ansatz:** Teste in jeder Zeile, ob $F'(x) = f(x)$ gilt.

**Rechnung:**
- $(x^{2})' = 2x$ ✓
- $(x^{3})' = 3x^{2}$ ✓
- $(x)' = 1$ ✓
- $(C)' = 0$ ✓

**Probe:** Alles ableiten → linke Spalte reproduziert.

**Typischer Fehler:** Bei $f(x) = 0$ versuchen, die Null zu "integrieren" — jede konstante Funktion hat Ableitung $0$.`,
    hints: [
      'Leite jede rechte Seite ab und prüfe, ob die linke herauskommt.',
      'Die Potenzregel der Ableitung rückwärts: aus $x^{n}$ wird $n \\cdot x^{n-1}$.',
      'Zur Kontrolle: $(x^{n+1}/(n+1))\' = x^{n}$.',
    ],
  },
  'ex-int-1-1-d': {
    id: 'ex-int-1-1-d', lessonId: 'int-1-1', type: 'multiple-choice',
    question: 'Welche Aussage über Stammfunktionen von $f(x) = 6x$ ist korrekt?',
    options: [
      'Nur $F(x) = 3x^{2}$ ist eine Stammfunktion',
      '$F(x) = 6x^{2}$ ist eine Stammfunktion',
      '$F(x) = x^{3}$ ist eine Stammfunktion',
      'Sowohl $F(x) = 3x^{2}$ als auch $F(x) = 3x^{2} + 5$ sind Stammfunktionen',
    ],
    correctIndex: 3,
    explanation: `**Ansatz:** Alle Kandidaten ableiten und prüfen, welche $f(x) = 6x$ ergeben.

**Rechnung:**
- $(3x^{2})' = 6x$ ✓
- $(3x^{2} + 5)' = 6x + 0 = 6x$ ✓
- $(6x^{2})' = 12x$ ✗

Beide $3x^{2}$ und $3x^{2} + 5$ sind Stammfunktionen — sie unterscheiden sich nur um $C = 5$.

**Probe:** $\\int 6x\\,dx = 3x^{2} + C$, wobei $C$ beliebig ist.

**Typischer Fehler:** Denken, es gäbe *die eine* Stammfunktion — es gibt unendlich viele (Familie).`,
    hints: [
      'Leite jede Option ab und vergleiche mit $6x$.',
      'Vergiss nicht: die Integrationskonstante $C$ kann jeden Wert annehmen.',
      'Hinweis: $3x^{2}$ und $3x^{2} + 5$ sind beide korrekt.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast übersehen, dass die Stammfunktion nie eindeutig ist — jede Konstante fällt beim Ableiten weg, also ist auch $3x^{2} + 5$ eine Stammfunktion. Allgemein: $\\int 6x\\,dx = 3x^{2} + C$ mit beliebigem $C \\in \\mathbb{R}$.',
      '1': 'Beim Ableiten von $6x^{2}$ erhält man $12x$, nicht $6x$ — der Koeffizient wurde beim Integrieren nicht durch den neuen Exponenten geteilt. Potenzregel: $\\int 6x\\,dx = 6 \\cdot \\frac{x^{2}}{2} = 3x^{2} + C$.',
      '2': 'Abgeleitet ergibt $x^{3}$ den Wert $3x^{2}$, nicht $6x$ — das wäre eine Stammfunktion von $3x^{2}$, nicht von $6x$. Richtig: Exponent von $6x^{1}$ auf $x^{2}$ erhöhen und durch $2$ teilen, also $3x^{2} + C$.',
    },
  },
  'ex-int-1-1-mastery': {
    id: 'ex-int-1-1-mastery', lessonId: 'int-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $F(x) = x^{4} + 2x + 7$ ist Stammfunktion von:',
    options: ['$f(x) = 4x^{3} + 2$', '$f(x) = x^{5}/5 + x^{2} + 7x$', '$f(x) = 4x^{4} + 2$', '$f(x) = 4x^{3} + 2x$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Stammfunktion $\\to$ Funktion: einmal ableiten.

**Rechnung:**
$$F'(x) = (x^{4})' + (2x)' + (7)' = 4x^{3} + 2 + 0 = 4x^{3} + 2.$$

**Probe:** Integriere $4x^{3} + 2$: $\\int (4x^{3} + 2)\\,dx = x^{4} + 2x + C$. Für $C = 7$ ergibt das genau $F(x)$. ✓

**Typischer Fehler:** Option B ist die falsche Richtung — jemand hat integriert statt abgeleitet. Option C entsteht aus $(x^{4})' = 4x^{4}$ (Exponent falsch nicht um 1 reduziert).`,
    hints: [
      'Stammfunktion → $f$ bekommst du durch Ableiten.',
      'Leite jedes Glied einzeln: $(x^{n})\' = n \\cdot x^{n-1}$.',
      'Konstante $7$ fällt weg, $2x$ wird zu $2$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast $F$ integriert statt abgeleitet — genau die falsche Richtung. Aus einer Stammfunktion $F$ erhält man $f$ durch einmaliges Ableiten: $(x^{4})\' = 4x^{3}$, $(2x)\' = 2$, $(7)\' = 0$, also $f(x) = 4x^{3} + 2$.',
      '2': 'Bei $(x^{4})\' = 4x^{4}$ hast du den Exponenten nicht um $1$ reduziert. Ableitungs-Potenzregel: $(x^{n})\' = n \\cdot x^{n-1}$, also $(x^{4})\' = 4x^{3}$ (nicht $4x^{4}$). Richtiges Ergebnis: $4x^{3} + 2$.',
      '3': 'Die Konstante $7$ hast du korrekt weggelassen, aber $(2x)\' = 2$ — nicht $2x$. Merke: $(c \\cdot x)\' = c$, der Faktor bleibt, $x$ verschwindet. Richtig: $4x^{3} + 2$.',
    },
  },

  // ── Lesson 2: Grundintegrale ──────────────────────────────────────────────
  'ex-int-1-2-a': {
    id: 'ex-int-1-2-a', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '$\\int x^{3}\\,dx = ?$',
    options: ['$x^{4} + C$', '$\\dfrac{x^{4}}{4} + C$', '$3x^{2} + C$', '$\\dfrac{x^{4}}{3} + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Potenzregel der Integration: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (für $n \\neq -1$).

**Rechnung:** Mit $n = 3$: $\\int x^{3}\\,dx = \\dfrac{x^{4}}{4} + C$.

**Probe:** $\\left(\\dfrac{x^{4}}{4}\\right)' = \\dfrac{4x^{3}}{4} = x^{3}$. ✓

**Typischer Fehler:** Exponenten um $1$ erhöhen, aber vergessen, durch den neuen Exponenten zu teilen → falsch $x^{4} + C$.`,
    hints: [
      'Welche Regel nutzt du für $\\int x^{n}\\,dx$?',
      'Potenzregel: Exponent um $1$ erhöhen, dann durch den neuen Exponenten teilen.',
      'Formel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast zwar den Exponenten korrekt auf $4$ erhöht, aber vergessen, durch den neuen Exponenten zu teilen. Potenzregel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$, also $\\int x^{3}\\,dx = \\dfrac{x^{4}}{4} + C$ (nicht $x^{4} + C$).',
      '2': 'Du hast abgeleitet statt integriert — $(x^{3})\' = 3x^{2}$. Beim Integrieren wird der Exponent aber um $1$ erhöht, nicht reduziert: $\\int x^{3}\\,dx = \\dfrac{x^{4}}{4} + C$.',
      '3': 'Du hast durch den alten Exponenten $3$ geteilt statt durch den neuen Exponenten $n+1 = 4$. Regel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$, also hier $\\dfrac{x^{4}}{4} + C$.',
    },
  },
  'ex-int-1-2-b': {
    id: 'ex-int-1-2-b', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '$\\int \\cos(x)\\,dx = ?$',
    options: ['$\\sin(x) + C$', '$-\\sin(x) + C$', '$-\\cos(x) + C$', '$\\tan(x) + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Grundintegral — rückwärts die Ableitung von $\\sin$ nutzen.

**Rechnung:** Da $(\\sin(x))' = \\cos(x)$, folgt $\\int \\cos(x)\\,dx = \\sin(x) + C$.

**Probe:** $(\\sin(x) + C)' = \\cos(x) + 0 = \\cos(x)$. ✓

**Typischer Fehler:** Minuszeichen erfinden (wie bei $\\int \\sin(x)\\,dx = -\\cos(x)$). Merksatz: $\\sin$ und $\\cos$ tauschen sich mit Vorzeichenwechsel — aber nur $\\sin$ bekommt das Minus beim Integrieren.`,
    hints: [
      'Welche Funktion hat als Ableitung $\\cos(x)$?',
      'Erinnere dich: $(\\sin(x))\' = \\cos(x)$.',
      'Also ist $\\sin(x)$ Stammfunktion von $\\cos(x)$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das Vorzeichen-Muster mit $\\int \\sin(x)\\,dx = -\\cos(x) + C$ vertauscht. Das Minus bekommt nur $\\int \\sin$, denn $(\\sin)\' = \\cos$ (ohne Vorzeichenwechsel), während $(\\cos)\' = -\\sin$. Richtig: $\\int \\cos(x)\\,dx = +\\sin(x) + C$.',
      '2': 'Du hast abgeleitet ($(\\sin)\' = \\cos$, dann $(\\cos)\' = -\\sin$) — aber nicht $\\cos$ selbst hat als Stammfunktion $-\\cos$. Beim Integrieren von $\\cos$ gehst du zu der Funktion, deren Ableitung $\\cos$ ist: $(\\sin)\' = \\cos$, also $\\int \\cos(x)\\,dx = \\sin(x) + C$.',
      '3': '$\\tan(x)$ ist keine Stammfunktion von $\\cos(x)$, sondern von $\\frac{1}{\\cos^{2}(x)}$ (da $(\\tan)\' = \\sec^{2}$). Die Stammfunktion von $\\cos$ findest du über $(\\sin)\' = \\cos$, also $\\int \\cos(x)\\,dx = \\sin(x) + C$.',
    },
  },
  'ex-int-1-2-c': {
    id: 'ex-int-1-2-c', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '$\\int e^{x}\\,dx = ?$',
    options: ['$x \\cdot e^{x} + C$', '$e^{x} + C$', '$\\dfrac{e^{x}}{x} + C$', '$\\ln(e^{x}) + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** $e^{x}$ ist die Funktion, die gleich ihrer eigenen Ableitung ist — also auch gleich ihrer eigenen Stammfunktion.

**Rechnung:** $(e^{x})' = e^{x}$, daher $\\int e^{x}\\,dx = e^{x} + C$.

**Probe:** $(e^{x} + C)' = e^{x}$. ✓

**Merke:** Diese Besonderheit macht $e^{x}$ zur wichtigsten Funktion in Analysis und Technik (DGL, Wachstum, RC-Glied).`,
    hints: [
      '$e^{x}$ ist die einzige Funktion, die ihre eigene Ableitung ist.',
      'Was ist dann ihre Stammfunktion?',
      'Probe: $(e^{x})\' = e^{x}$ — wende das rückwärts an.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast die Potenzregel auf einen Exponentialausdruck angewendet — die gilt aber nur für $x^{n}$ (fester Exponent, variable Basis), nicht für $e^{x}$ (feste Basis, variabler Exponent). Für $e^{x}$ gilt $(e^{x})\' = e^{x}$, also $\\int e^{x}\\,dx = e^{x} + C$.',
      '2': 'Durch $x$ dividieren entsteht hier aus falsch angewandter Potenzregel — die gilt aber nicht für $e^{x}$. Die Ableitung bzw. Stammfunktion der Exponentialfunktion ist die Funktion selbst: $\\int e^{x}\\,dx = e^{x} + C$.',
      '3': 'Du hast den Logarithmus als "Umkehroperation" eingebracht — $\\ln(e^{x}) = x$ ist zwar eine Vereinfachung, hat aber nichts mit Integration zu tun. Richtig: $(e^{x})\' = e^{x}$, also $\\int e^{x}\\,dx = e^{x} + C$.',
    },
  },
  'ex-int-1-2-d': {
    id: 'ex-int-1-2-d', lessonId: 'int-1-2', type: 'multiple-choice',
    question: '$\\int \\dfrac{1}{x}\\,dx = ?$',
    options: ['$x^{0} + C$', '$\\ln(x) + C$', '$\\ln|x| + C$', '$-\\dfrac{1}{x^{2}} + C$'],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\dfrac{1}{x}$ ist der Sonderfall der Potenzregel ($n = -1$, wo die normale Formel $\\dfrac{x^{n+1}}{n+1}$ nicht funktioniert, da $1/0$ undefiniert).

**Rechnung:** $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$. Der Betrag ist wichtig, weil $\\ln$ nur für positive Argumente definiert ist, aber $1/x$ auch für $x < 0$ existiert.

**Probe:** $(\\ln|x|)' = \\dfrac{1}{x}$ (für $x \\neq 0$). ✓

**Typischer Fehler:** Betrag weglassen — für $x < 0$ ist $\\ln(x)$ nicht reell definiert!`,
    hints: [
      'Welche Funktion hat die Ableitung $1/x$?',
      'Sonderfall der Potenzregel — $n = -1$ geht nicht über $x^{n+1}/(n+1)$.',
      'Warum braucht man den Betrag? Damit es auch für negative $x$ gilt.',
    ],
    wrongAnswerExplanations: {
      '0': 'Mit der Potenzregel würde $\\int x^{-1}\\,dx = \\dfrac{x^{0}}{0}$ entstehen — das ist undefiniert, weil man nicht durch $0$ teilen darf. Genau deshalb ist $n = -1$ der Sonderfall, und es gilt $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$.',
      '1': 'Die Stammfunktion $\\ln(x)$ ist nur für $x > 0$ definiert, aber $\\frac{1}{x}$ existiert auch für $x < 0$. Deshalb braucht man den Betrag: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ für alle $x \\neq 0$.',
      '3': 'Du hast abgeleitet statt integriert: $\\left(\\frac{1}{x}\\right)\' = -\\frac{1}{x^{2}}$. Beim Integrieren brauchst du die Funktion, deren Ableitung $\\frac{1}{x}$ ist — das ist $\\ln|x|$, also $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$.',
    },
  },
  'ex-int-1-2-e': {
    id: 'ex-int-1-2-e', lessonId: 'int-1-2', type: 'matching',
    question: 'Ordne jeder Funktion ihr unbestimmtes Integral zu:',
    pairs: [
      { left: '$\\int \\sin(x)\\,dx$', right: '$-\\cos(x) + C$' },
      { left: '$\\int \\cos(x)\\,dx$', right: '$\\sin(x) + C$' },
      { left: '$\\int e^{x}\\,dx$', right: '$e^{x} + C$' },
      { left: '$\\int x^{2}\\,dx$', right: '$\\dfrac{x^{3}}{3} + C$' },
    ],
    explanation: `**Ansatz:** Rückwärts die Ableitungen der Standardfunktionen nutzen.

**Rechnung:**
- $(-\\cos(x))' = \\sin(x) \\Rightarrow \\int \\sin(x)\\,dx = -\\cos(x) + C$.
- $(\\sin(x))' = \\cos(x) \\Rightarrow \\int \\cos(x)\\,dx = \\sin(x) + C$.
- $(e^{x})' = e^{x} \\Rightarrow \\int e^{x}\\,dx = e^{x} + C$.
- Potenzregel: $\\int x^{2}\\,dx = \\dfrac{x^{3}}{3} + C$.

**Typischer Fehler:** Vorzeichen bei $\\sin/\\cos$ vertauschen. Merksatz: Beim Integrieren von $\\sin$ bekommst du das Minus.`,
    hints: [
      'Welche Funktion ergibt abgeleitet den Integranden?',
      'Vorzeichen bei $\\sin / \\cos$: nur $\\int \\sin(x)\\,dx$ hat ein Minus.',
      'Potenzregel für $x^{2}$: Exponent $+1$, dann teilen.',
    ],
  },
  'ex-int-1-2-mastery': {
    id: 'ex-int-1-2-mastery', lessonId: 'int-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '$\\int \\sin(x)\\,dx = ?$',
    options: ['$\\cos(x) + C$', '$-\\cos(x) + C$', '$\\sin(x) + C$', '$-\\sin(x) + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Rückwärts die Ableitung des Kosinus lesen: $(\\cos(x))' = -\\sin(x)$, also $(-\\cos(x))' = \\sin(x)$.

**Rechnung:** $\\int \\sin(x)\\,dx = -\\cos(x) + C$.

**Probe:** $(-\\cos(x))' = -(-\\sin(x)) = \\sin(x)$. ✓

**Typischer Fehler:** Das Minus vergessen — klassischer Prüfungs-Fallensteller! Unbedingt merken: $\\int \\sin = -\\cos$, $\\int \\cos = +\\sin$.`,
    hints: [
      'Welche Funktion hat als Ableitung $\\sin(x)$?',
      '$(\\cos(x))\' = -\\sin(x)$, also muss ein Minuszeichen her.',
      'Probe: $(-\\cos(x))\' = \\sin(x)$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast das Minuszeichen vergessen: $(\\cos(x))\' = -\\sin(x)$, also ist $\\cos(x)$ eine Stammfunktion von $-\\sin(x)$, nicht von $+\\sin(x)$. Richtig: $\\int \\sin(x)\\,dx = -\\cos(x) + C$.',
      '2': 'Du hast $\\sin$ mit sich selbst als Stammfunktion genommen — das wäre nur richtig, wenn $(\\sin)\' = \\sin$ wäre, aber tatsächlich ist $(\\sin)\' = \\cos$. Richtig: $\\int \\sin(x)\\,dx = -\\cos(x) + C$.',
      '3': '$(-\\sin(x))\' = -\\cos(x)$, nicht $\\sin(x)$ — also ist $-\\sin$ keine Stammfunktion von $\\sin$. Man braucht die Funktion, deren Ableitung $\\sin$ ergibt: $(-\\cos)\' = -(-\\sin) = \\sin$, also $\\int \\sin(x)\\,dx = -\\cos(x) + C$.',
    },
  },

  // ── Lesson 3: Summenregel & Faktorregel ───────────────────────────────────
  'ex-int-1-3-a': {
    id: 'ex-int-1-3-a', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '$\\int (3x^{2} + 2x)\\,dx = ?$',
    options: ['$3x^{3} + 2x^{2} + C$', '$x^{3} + x^{2} + C$', '$6x + 2 + C$', '$\\dfrac{3x^{3}}{3} + \\dfrac{2x^{2}}{2} + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Summenregel — jedes Glied einzeln integrieren. Faktorregel — Konstanten vor das Integral ziehen.

**Rechnung:**
$$\\int (3x^{2} + 2x)\\,dx = 3 \\cdot \\frac{x^{3}}{3} + 2 \\cdot \\frac{x^{2}}{2} + C = x^{3} + x^{2} + C.$$

**Probe:** $(x^{3} + x^{2})' = 3x^{2} + 2x$. ✓

**Typischer Fehler:** Die Formel $\\dfrac{3x^{3}}{3} + \\dfrac{2x^{2}}{2}$ ist mathematisch gleich, aber unvereinfacht — in der Prüfung muss man kürzen.`,
    hints: [
      'Summenregel: jeden Summanden einzeln integrieren.',
      'Faktorregel: $\\int c \\cdot f(x)\\,dx = c \\cdot \\int f(x)\\,dx$.',
      'Danach kürzen: $3 \\cdot x^{3}/3 = x^{3}$, $2 \\cdot x^{2}/2 = x^{2}$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast nur den Exponenten erhöht, aber nicht durch den neuen Exponenten geteilt. Potenzregel: $\\int 3x^{2}\\,dx = 3 \\cdot \\frac{x^{3}}{3} = x^{3}$ (nicht $3x^{3}$) und $\\int 2x\\,dx = 2 \\cdot \\frac{x^{2}}{2} = x^{2}$ (nicht $2x^{2}$).',
      '2': 'Du hast abgeleitet statt integriert: $(3x^{2})\' = 6x$, $(2x)\' = 2$. Beim Integrieren wird der Exponent aber um $1$ erhöht, nicht reduziert: $\\int (3x^{2} + 2x)\\,dx = x^{3} + x^{2} + C$.',
      '3': 'Rechnerisch ist $\\dfrac{3x^{3}}{3} + \\dfrac{2x^{2}}{2} = x^{3} + x^{2}$ gleich — aber Ergebnisse müssen vereinfacht werden (in Prüfungen Punktabzug). Kürze die Koeffizienten: $\\dfrac{3}{3} = 1$, $\\dfrac{2}{2} = 1$.',
    },
  },
  'ex-int-1-3-b': {
    id: 'ex-int-1-3-b', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '$\\int 5\\cos(x)\\,dx = ?$',
    options: ['$5\\sin(x) + C$', '$-5\\sin(x) + C$', '$5\\cos(x) + C$', '$\\sin(5x) + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Faktorregel — konstanten Faktor $5$ vor das Integral ziehen.

**Rechnung:** $\\int 5\\cos(x)\\,dx = 5 \\cdot \\int \\cos(x)\\,dx = 5\\sin(x) + C$.

**Probe:** $(5\\sin(x))' = 5\\cos(x)$. ✓

**Typischer Fehler:** $\\sin(5x) + C$ kommt von einer falschen "Substitution" — das gilt nur, wenn $5x$ im Argument stünde, nicht als Faktor vor $\\cos(x)$.`,
    hints: [
      'Darf man die $5$ aus dem Integral herausziehen? Ja — Faktorregel.',
      'Formel: $\\int c \\cdot f(x)\\,dx = c \\cdot \\int f(x)\\,dx$.',
      'Dann: $\\int \\cos(x)\\,dx = \\sin(x) + C$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das Vorzeichen-Muster von $\\int \\sin(x)\\,dx = -\\cos(x) + C$ auf $\\cos$ übertragen. Aber nur beim Integrieren von $\\sin$ kommt ein Minus hinzu; $\\int \\cos(x)\\,dx = +\\sin(x)$, also $\\int 5\\cos(x)\\,dx = +5\\sin(x) + C$.',
      '2': 'Du hast $\\cos$ unverändert gelassen — das wäre, als ob Integration nichts an $\\cos$ ändert. Tatsächlich ist $\\int \\cos(x)\\,dx = \\sin(x)$, mit Faktor: $\\int 5\\cos(x)\\,dx = 5\\sin(x) + C$.',
      '3': 'Du hast den Faktor $5$ ins Argument von $\\sin$ verschoben — aber $5\\cos(x) \\neq \\cos(5x)$. Die $5$ ist konstanter Vorfaktor (Faktorregel): $\\int 5\\cos(x)\\,dx = 5 \\cdot \\int \\cos(x)\\,dx = 5\\sin(x) + C$.',
    },
  },
  'ex-int-1-3-c': {
    id: 'ex-int-1-3-c', lessonId: 'int-1-3', type: 'number-input',
    question: 'Gegeben: $\\int (4x^{3} - 6x + 1)\\,dx = x^{4} - 3x^{2} + x + C$. Berechne $F(2)$ für $C = 0$, also mit $F(x) = x^{4} - 3x^{2} + x$.',
    correctValue: 6,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Stammfunktion gegeben, einfach $x = 2$ einsetzen.

**Rechnung:**
$$F(2) = 2^{4} - 3 \\cdot 2^{2} + 2 = 16 - 12 + 2 = 6.$$

**Probe:** Ableitung von $F$: $F'(x) = 4x^{3} - 6x + 1$. Bei $x = 2$: $32 - 12 + 1 = 21$ (das ist $f(2)$, nicht relevant für $F(2)$).

**Typischer Fehler:** $3 \\cdot 2^{2}$ mit $(3 \\cdot 2)^{2} = 36$ verwechseln — hier gilt Punkt-vor-Strich: $3 \\cdot 4 = 12$.`,
    hints: [
      'Setze $x = 2$ in $F(x) = x^{4} - 3x^{2} + x$ ein.',
      '$2^{4} = 16$ und $3 \\cdot 2^{2} = 12$.',
      'Dann $16 - 12 + 2$.',
    ],
  },
  'ex-int-1-3-d': {
    id: 'ex-int-1-3-d', lessonId: 'int-1-3', type: 'multiple-choice',
    question: '$\\int (e^{x} - 2\\sin(x) + 3)\\,dx = ?$',
    options: [
      '$e^{x} + 2\\cos(x) + 3x + C$',
      '$e^{x} - 2\\cos(x) + 3x + C$',
      '$e^{x} + 2\\cos(x) - 3x + C$',
      '$xe^{x} - 2\\cos(x) + 3x + C$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Summenregel + Grundintegrale, Vorzeichen beim $\\sin$ beachten!

**Rechnung:**
- $\\int e^{x}\\,dx = e^{x}$
- $\\int (-2\\sin(x))\\,dx = -2 \\cdot (-\\cos(x)) = +2\\cos(x)$
- $\\int 3\\,dx = 3x$

Zusammen: $e^{x} + 2\\cos(x) + 3x + C$.

**Probe:** Ableiten ergibt $e^{x} - 2\\sin(x) + 3$. ✓

**Typischer Fehler:** Bei $-2\\sin(x)$ das doppelte Minus übersehen (Integration $\\sin \\to -\\cos$, dann mit $-2$ multipliziert $\\to +2\\cos$).`,
    hints: [
      'Integriere jeden Summanden einzeln.',
      '$\\int \\sin(x)\\,dx = -\\cos(x)$, also $\\int (-2\\sin(x))\\,dx = +2\\cos(x)$.',
      '$\\int 3\\,dx = 3x$, nicht $3$ alleine.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das doppelte Minuszeichen übersehen: $\\int \\sin(x)\\,dx = -\\cos(x)$, also $\\int (-2\\sin(x))\\,dx = -2 \\cdot (-\\cos(x)) = +2\\cos(x)$. Das Vorzeichen vor $\\cos$ muss $+$ sein, nicht $-$.',
      '2': 'Du hast $\\int 3\\,dx$ als $-3x$ gerechnet — aber $\\int 3\\,dx = 3x + C$ (Konstante mal $x$, kein Vorzeichenwechsel). Außerdem scheint das Vorzeichen bei $\\cos$ korrekt zu sein; der Fehler liegt beim letzten Term.',
      '3': 'Du hast $\\int e^{x}\\,dx = xe^{x}$ verwendet — das ist falsch ($xe^{x}$ ist Ergebnis einer partiellen Integration von $x \\cdot e^{x}$). Für $e^{x}$ selbst gilt $\\int e^{x}\\,dx = e^{x}$, also insgesamt $e^{x} + 2\\cos(x) + 3x + C$.',
    },
  },
  'ex-int-1-3-mastery': {
    id: 'ex-int-1-3-mastery', lessonId: 'int-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '$\\int (6x^{2} - 4x + e^{x})\\,dx = ?$',
    options: ['$2x^{3} - 2x^{2} + e^{x} + C$', '$12x - 4 + e^{x} + C$', '$2x^{3} - 4x^{2} + e^{x} + C$', '$6x^{3} - 2x^{2} + e^{x} + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Summen- und Faktorregel anwenden, Potenzregel und Grundintegral für $e^{x}$.

**Rechnung:**
- $\\int 6x^{2}\\,dx = 6 \\cdot \\dfrac{x^{3}}{3} = 2x^{3}$
- $\\int (-4x)\\,dx = -4 \\cdot \\dfrac{x^{2}}{2} = -2x^{2}$
- $\\int e^{x}\\,dx = e^{x}$

Zusammen: $2x^{3} - 2x^{2} + e^{x} + C$.

**Probe:** $(2x^{3} - 2x^{2} + e^{x})' = 6x^{2} - 4x + e^{x}$. ✓

**Typischer Fehler:** Option B ist abgeleitet statt integriert. Option D: Koeffizient $6$ nicht durch $3$ geteilt.`,
    hints: [
      'Jedes Glied einzeln integrieren.',
      'Potenzregel: $\\int x^{n}\\,dx = x^{n+1}/(n+1)$. Für $6x^{2}$: $6/3 = 2$ als neuer Koeffizient.',
      'Für $-4x$: $-4/2 = -2$. Und $\\int e^{x}\\,dx = e^{x}$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast abgeleitet statt integriert: $(6x^{2})\' = 12x$, $(-4x)\' = -4$. Beim Integrieren wird der Exponent aber um $1$ erhöht und durch den neuen Exponenten geteilt, nicht reduziert. Richtig: $2x^{3} - 2x^{2} + e^{x} + C$.',
      '2': 'Bei $-4x$ hast du nicht korrekt durch den neuen Exponenten $2$ geteilt: $\\int (-4x)\\,dx = -4 \\cdot \\dfrac{x^{2}}{2} = -2x^{2}$ (nicht $-4x^{2}$). Richtig: $2x^{3} - 2x^{2} + e^{x} + C$.',
      '3': 'Bei $6x^{2}$ hast du nicht durch den neuen Exponenten $3$ geteilt: $\\int 6x^{2}\\,dx = 6 \\cdot \\dfrac{x^{3}}{3} = 2x^{3}$ (nicht $6x^{3}$). Richtig: $2x^{3} - 2x^{2} + e^{x} + C$.',
    },
  },

  // ── Lesson 4: Das bestimmte Integral ──────────────────────────────────────
  'ex-int-1-4-a': {
    id: 'ex-int-1-4-a', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: $\\int_{0}^{2} 2x\\,dx$',
    correctValue: 4,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Hauptsatz: Stammfunktion finden, dann Grenzen einsetzen.

**Rechnung:**
- Stammfunktion: $F(x) = x^{2}$.
- $F(2) - F(0) = 4 - 0 = 4$.

**Probe (geometrisch):** Der Graph $y = 2x$ bildet mit der $x$-Achse auf $[0, 2]$ ein rechtwinkliges Dreieck mit Grundseite $2$ und Höhe $4$. Fläche $= \\dfrac{2 \\cdot 4}{2} = 4$. ✓

**Typischer Fehler:** Konstante $C$ "vergessen einzusetzen" — bei bestimmten Integralen ist $C$ egal (kürzt sich weg).`,
    hints: [
      'Finde zuerst die Stammfunktion von $2x$.',
      'Mit Potenzregel: $\\int 2x\\,dx = x^{2} + C$.',
      'Dann Hauptsatz: $F(2) - F(0)$.',
    ],
  },
  'ex-int-1-4-b': {
    id: 'ex-int-1-4-b', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: $\\int_{1}^{3} x^{2}\\,dx$ (Ergebnis als Dezimalzahl, auf 2 Nachkommastellen gerundet)',
    correctValue: 8.67,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Potenzregel + Hauptsatz.

**Rechnung:**
- Stammfunktion: $F(x) = \\dfrac{x^{3}}{3}$.
- $F(3) = \\dfrac{27}{3} = 9$.
- $F(1) = \\dfrac{1}{3}$.
- $F(3) - F(1) = 9 - \\dfrac{1}{3} = \\dfrac{26}{3} \\approx 8{,}67$.

**Probe:** Numerisch $8{,}67$ passt — die Fläche unter $y = x^{2}$ auf $[1, 3]$ ist positiv und vergrößert sich schnell.

**Typischer Fehler:** Exponent $2$ statt $3$ in Stammfunktion — Potenzregel richtig: Exponent $+1$.`,
    hints: [
      'Potenzregel: $\\int x^{2}\\,dx = \\dfrac{x^{3}}{3} + C$.',
      '$F(3) = 27/3 = 9$, $F(1) = 1/3$.',
      'Differenz: $9 - 1/3 = 26/3 \\approx 8{,}67$.',
    ],
  },
  'ex-int-1-4-c': {
    id: 'ex-int-1-4-c', lessonId: 'int-1-4', type: 'multiple-choice',
    question: 'Was beschreibt $\\int_{a}^{b} f(x)\\,dx$ geometrisch, wenn $f(x) \\geq 0$ auf $[a,b]$?',
    options: [
      'Die Steigung von $f$',
      'Die Fläche zwischen der Kurve $f(x)$ und der $x$-Achse von $a$ bis $b$',
      'Den Mittelwert von $f$',
      'Die Länge der Kurve',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Geometrische Deutung des bestimmten Integrals.

**Rechnung:** Für $f(x) \\geq 0$ entspricht $\\int_{a}^{b} f(x)\\,dx$ der Fläche zwischen Graph und $x$-Achse auf $[a, b]$. Grund: Riemann-Summe $\\sum f(x_{i}) \\cdot \\Delta x$ ist eine Summe aus Rechtecksflächen, die im Grenzwert zur exakten Fläche wird.

**Probe:** Testbeispiel: $\\int_{0}^{1} 1\\,dx = 1$ — Fläche des Quadrats mit Seite $1$ ist $1$. ✓

**Typischer Fehler:** Steigung und Fläche verwechseln. Steigung = Ableitung, Fläche = Integral.`,
    hints: [
      'Denke an die Riemann-Summe: Rechtecke unter der Kurve.',
      'Im Grenzwert ergibt die Summe die genaue Fläche.',
      'Integration $\\leftrightarrow$ Fläche (für $f \\geq 0$).',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast Steigung und Fläche verwechselt — Steigung ist die Ableitung $f\'(x)$ (gibt, wie schnell $f$ wächst), Fläche ist das Integral $\\int_{a}^{b} f(x)\\,dx$. Geometrisch misst das Integral die Fläche zwischen Graph und $x$-Achse.',
      '2': 'Der Mittelwert von $f$ auf $[a,b]$ ist $\\dfrac{1}{b-a}\\int_{a}^{b} f(x)\\,dx$ — das Integral wird also noch durch die Intervalllänge geteilt. Das bloße Integral $\\int_{a}^{b} f(x)\\,dx$ ist die Fläche, nicht der Mittelwert.',
      '3': 'Die Kurvenlänge hat eine eigene Formel: $L = \\int_{a}^{b}\\sqrt{1 + (f\'(x))^{2}}\\,dx$ (Bogenlängenintegral). Das reine Integral $\\int_{a}^{b} f(x)\\,dx$ misst dagegen die Fläche unter der Kurve.',
    },
  },
  'ex-int-1-4-d': {
    id: 'ex-int-1-4-d', lessonId: 'int-1-4', type: 'number-input',
    question: 'Berechne: $\\int_{0}^{\\pi} \\sin(x)\\,dx$ (ganzzahliges Ergebnis)',
    correctValue: 2,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Grundintegral $\\int \\sin(x)\\,dx = -\\cos(x)$ + Hauptsatz.

**Rechnung:**
- Stammfunktion: $F(x) = -\\cos(x)$.
- $F(\\pi) = -\\cos(\\pi) = -(-1) = 1$.
- $F(0) = -\\cos(0) = -1$.
- $F(\\pi) - F(0) = 1 - (-1) = 2$.

**Probe (geometrisch):** Die Fläche unter einer halben Sinuswelle ist genau $2$. Auffällig: die Fläche ist *nicht* $\\pi$!

**Typischer Fehler:** Vorzeichen beim $-\\cos$ falsch behandeln. Klar rechnen: $-\\cos(\\pi) = -(-1) = +1$.`,
    hints: [
      'Stammfunktion: $\\int \\sin(x)\\,dx = -\\cos(x) + C$.',
      '$\\cos(\\pi) = -1$ und $\\cos(0) = 1$.',
      'Dann $-\\cos(\\pi) - (-\\cos(0)) = 1 - (-1) = 2$.',
    ],
  },
  'ex-int-1-4-mastery': {
    id: 'ex-int-1-4-mastery', lessonId: 'int-1-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: $\\int_{1}^{2} (3x^{2} + 1)\\,dx$',
    correctValue: 8,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Summen- und Faktorregel, dann Hauptsatz anwenden.

**Rechnung:**
- Stammfunktion: $F(x) = x^{3} + x$.
- $F(2) = 8 + 2 = 10$.
- $F(1) = 1 + 1 = 2$.
- $F(2) - F(1) = 10 - 2 = 8$.

**Probe:** $F'(x) = 3x^{2} + 1$ — stimmt mit Integrand überein. ✓

**Typischer Fehler:** Integrationskonstante $C$ einsetzen (unnötig, kürzt sich) oder $\\int 1\\,dx = 1$ statt $x$.`,
    hints: [
      'Jedes Glied einzeln integrieren: $\\int 3x^{2}\\,dx = x^{3}$, $\\int 1\\,dx = x$.',
      'Stammfunktion: $F(x) = x^{3} + x$.',
      'Hauptsatz: $F(2) - F(1) = 10 - 2 = 8$.',
    ],
  },

  // ── Lesson 5: Hauptsatz der Differential- und Integralrechnung ────────────
  'ex-int-1-5-a': {
    id: 'ex-int-1-5-a', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Der Hauptsatz der Differential- und Integralrechnung besagt:',
    options: [
      'Jede Funktion hat eine Ableitung',
      'Wenn $F$ eine Stammfunktion von $f$ ist, dann gilt $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$',
      'Die Ableitung ist immer positiv',
      'Jedes Integral kann exakt berechnet werden',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Formulierung des Hauptsatzes erinnern — er verbindet Stammfunktion und bestimmtes Integral.

**Rechnung:** Kernaussage: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$, wobei $F$ eine beliebige Stammfunktion von $f$ ist.

**Probe:** Beispiel $f(x) = 2x$, $F(x) = x^{2}$: $\\int_{0}^{3} 2x\\,dx = 3^{2} - 0^{2} = 9$. ✓

**Typischer Fehler:** Option D ist falsch — nicht jedes Integral ist exakt lösbar (z.B. $\\int e^{-x^{2}}\\,dx$ hat keine elementare Stammfunktion).`,
    hints: [
      'Der Hauptsatz verbindet die zwei Grundoperationen der Analysis.',
      'Welche Operationen? Ableiten und Integrieren.',
      'Formel: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Das ist keine Aussage des Hauptsatzes, und außerdem nicht allgemein wahr — nur differenzierbare Funktionen haben eine Ableitung. Der Hauptsatz besagt: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$ mit Stammfunktion $F$.',
      '2': 'Das ist falsch — Ableitungen können negativ oder null sein (z.B. bei fallenden Funktionen). Der Hauptsatz trifft eine ganz andere Aussage: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$.',
      '3': 'Nicht jedes Integral ist elementar berechenbar — z.B. $\\int e^{-x^{2}}\\,dx$ hat keine elementare Stammfunktion. Der Hauptsatz besagt lediglich die Formel $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$, sofern $F$ bekannt ist.',
    },
  },
  'ex-int-1-5-b': {
    id: 'ex-int-1-5-b', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Sei $F(x) = \\int_{0}^{x} t^{2}\\,dt$. Was ist $F\'(x)$?',
    options: ['$x^{2}$', '$\\dfrac{x^{3}}{3}$', '$2x$', '$0$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Teil 1 des Hauptsatzes — Ableitung eines Integrals nach der oberen Grenze ist der Integrand.

**Rechnung:** Nach Hauptsatz: $\\dfrac{d}{dx}\\int_{0}^{x} f(t)\\,dt = f(x)$. Hier ist $f(t) = t^{2}$, also $F'(x) = x^{2}$.

**Probe (explizit):** $F(x) = \\dfrac{x^{3}}{3}$, $F'(x) = x^{2}$. ✓

**Typischer Fehler:** Option B ist $F(x)$ selbst, nicht $F'(x)$. Option C wäre die Ableitung der falschen Funktion.`,
    hints: [
      'Teil 1 des Hauptsatzes: $\\dfrac{d}{dx}\\int_{0}^{x} f(t)\\,dt = f(x)$.',
      'Hier ist $f(t) = t^{2}$. Was ist also $F\'(x)$?',
      'Kontrolle: Zuerst integrieren, dann ableiten — beide Operationen heben sich auf.',
    ],
    wrongAnswerExplanations: {
      '1': 'Das ist $F(x)$ selbst (die Stammfunktion), nicht $F\'(x)$. Teil 1 des Hauptsatzes sagt: Ableitung und Integral heben sich auf, also $F\'(x) = f(x) = x^{2}$. Du hast einen Schritt zu wenig gemacht.',
      '2': '$2x$ wäre $F\'\'(x)$, also die zweite Ableitung: Aus $F(x) = \\frac{x^{3}}{3}$ ergibt $F\'(x) = x^{2}$ und erst $F\'\'(x) = 2x$. Die Frage ist aber nach $F\'$, also $x^{2}$.',
      '3': 'Die Ableitung $F\'(x) = 0$ würde bedeuten, dass $F$ konstant ist — aber $F(x) = \\int_{0}^{x} t^{2}\\,dt = \\frac{x^{3}}{3}$ ist nicht konstant. Nach dem Hauptsatz ist $F\'(x) = f(x) = x^{2}$.',
    },
  },
  'ex-int-1-5-c': {
    id: 'ex-int-1-5-c', lessonId: 'int-1-5', type: 'multiple-choice',
    question: 'Welche Aussage folgt aus dem Hauptsatz?',
    options: [
      'Integration und Differentiation sind unabhängige Operationen',
      'Integration und Differentiation sind zueinander inverse Operationen',
      'Jede Funktion ist integrierbar',
      'Jede stetige Funktion hat keine Stammfunktion',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Kernaussage des Hauptsatzes: Integration und Ableitung sind Umkehroperationen.

**Rechnung:** $\\dfrac{d}{dx}\\int_{a}^{x} f(t)\\,dt = f(x)$ (zuerst integrieren, dann ableiten) und $\\int_{a}^{x} f'(t)\\,dt = f(x) - f(a)$ (zuerst ableiten, dann integrieren).

**Probe:** Wenn $f(x) = x^{3}$: $f'(x) = 3x^{2}$, $\\int_{0}^{x} 3t^{2}\\,dt = x^{3} - 0 = f(x)$. ✓

**Typischer Fehler:** Option D ist das Gegenteil — stetige Funktionen haben *immer* eine Stammfunktion (das ist Teil 1 des Hauptsatzes).`,
    hints: [
      'Was passiert, wenn man zuerst integriert und dann ableitet?',
      'Das Ergebnis ist die Ausgangsfunktion — beide Operationen heben sich auf.',
      'Also sind sie Umkehroperationen (invers).',
    ],
    wrongAnswerExplanations: {
      '0': 'Das ist gerade das Gegenteil der Aussage des Hauptsatzes: Die beiden Operationen sind eng verknüpft, nicht unabhängig. Es gilt $\\dfrac{d}{dx}\\int_{a}^{x} f(t)\\,dt = f(x)$ — Ableitung und Integration heben sich gegenseitig auf.',
      '2': 'Nicht jede Funktion ist integrierbar (z.B. nicht-messbare Funktionen sind es nicht), das folgt nicht aus dem Hauptsatz. Der Hauptsatz liefert nur: Für stetige $f$ gilt $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$, und Integration + Differentiation sind Umkehroperationen.',
      '3': 'Gerade das Gegenteil ist richtig: Teil 1 des Hauptsatzes garantiert, dass jede stetige Funktion eine Stammfunktion $F(x) = \\int_{a}^{x} f(t)\\,dt$ besitzt. Kernaussage: Integration und Differentiation sind invers zueinander.',
    },
  },
  'ex-int-1-5-mastery': {
    id: 'ex-int-1-5-mastery', lessonId: 'int-1-5', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne mit dem Hauptsatz: $\\int_{0}^{1} (e^{x} + 2x)\\,dx$ (Ergebnis auf 2 Nachkommastellen)',
    correctValue: 2.72,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Summenregel + Grundintegrale + Hauptsatz.

**Rechnung:**
- Stammfunktion: $F(x) = e^{x} + x^{2}$.
- $F(1) = e^{1} + 1^{2} = e + 1$.
- $F(0) = e^{0} + 0 = 1$.
- $F(1) - F(0) = (e + 1) - 1 = e \\approx 2{,}718 \\approx 2{,}72$.

**Probe:** $F'(x) = e^{x} + 2x$ — stimmt mit Integrand. ✓

**Typischer Fehler:** $e^{0} = 0$ setzen (falsch, $e^{0} = 1$). Oder vergessen, dass $\\int 2x\\,dx = x^{2}$ (nicht $2x$ nochmal).`,
    hints: [
      '$\\int e^{x}\\,dx = e^{x}$, $\\int 2x\\,dx = x^{2}$.',
      'Stammfunktion: $F(x) = e^{x} + x^{2}$.',
      '$F(1) - F(0) = (e + 1) - 1 = e \\approx 2{,}72$.',
    ],
  },
}

const lessons_int_u1 = [
  {
    id: 'int-1-1', unitId: 'int-unit-1',
    title: 'Stammfunktion — das Umkehren der Ableitung',
    order: 1, estimatedMinutes: 15,
    learningGoals: ['Stammfunktion als Umkehrung der Ableitung verstehen', 'Integrationskonstante C erklären können'],
    subGoals: [
      { label: 'Stammfunktion durch „Rückwärts-Ableiten" erkennen', examRelevance: 'hoch' },
      { label: 'Integrationskonstante $+C$ nicht vergessen', examRelevance: 'hoch' },
      { label: 'Probe durch Ableiten der gefundenen Stammfunktion', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'int-1-2',
    steps: [
      {
        id: 'int-1-1-s1', type: 'explanation-intuitive', title: 'Was ist Integration?',
        content: `Stell dir vor, du kennst die **Geschwindigkeit** eines Autos zu jedem Zeitpunkt. Jetzt willst du wissen, wie weit es insgesamt gefahren ist.

Dazu musst du die Geschwindigkeit über die Zeit "aufaddieren" — und genau das ist **Integration**.

Bei der Ableitung haben wir gelernt: Aus der Strecke berechnet man die Geschwindigkeit.
Bei der Integration gehen wir den **umgekehrten Weg**: Aus der Geschwindigkeit berechnet man die Strecke.

**Integration ist die Umkehrung der Differentiation.**

Wenn $f(x)$ gegeben ist und wir eine Funktion $F(x)$ suchen, deren Ableitung $f(x)$ ergibt, dann nennen wir $F(x)$ eine **Stammfunktion** von $f(x)$.

$$F'(x) = f(x) \\quad \\Longleftrightarrow \\quad \\int f(x)\\,dx = F(x) + C$$

Das Symbol $\\int$ heißt **Integralzeichen** und $dx$ zeigt an, nach welcher Variable wir integrieren.`,
      },
      {
        id: 'int-1-1-s2', type: 'explanation-formal', title: 'Die Integrationskonstante C',
        content: `**Warum steht da immer "$+C$"?**

Beim Ableiten verschwindet jede Konstante:
$$(F(x) + 5)' = F'(x) + 0 = f(x)$$
$$(F(x) - 3)' = F'(x) + 0 = f(x)$$
$$(F(x) + 42)' = F'(x) + 0 = f(x)$$

Alle Funktionen $F(x) + C$ (mit beliebigem $C \\in \\mathbb{R}$) haben die **gleiche Ableitung** $f(x)$.

Daher ist die Stammfunktion **nicht eindeutig**, sondern eine ganze **Familie von Funktionen**, die sich nur durch eine Konstante unterscheiden.

**Schreibweise des unbestimmten Integrals:**
$$\\int f(x)\\,dx = F(x) + C$$

Die Konstante $C$ heißt **Integrationskonstante**.

**Beispiel:**
$$\\int 2x\\,dx = x^{2} + C$$

Probe: $(x^{2} + C)' = 2x + 0 = 2x$. ✓

**Prüfungsfalle:** Bei unbestimmten Integralen *niemals* das $+C$ vergessen — das ist ein Standardpunktabzug!`,
      },
      {
        id: 'int-1-1-s3', type: 'visualization', title: 'Ableitung und Stammfunktion',
        visualizationId: 'derivative-graph',
        params: { fnName: 'x²', showDerivative: true, showTangent: true, interactive: true },
      },
      { id: 'int-1-1-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-1-a' },
      { id: 'int-1-1-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-1-b' },
      { id: 'int-1-1-s6', type: 'exercise', title: 'Aufgabe 3 — Zuordnung', exerciseRef: 'ex-int-1-1-c' },
      { id: 'int-1-1-s7', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-1-d' },
      { id: 'int-1-1-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-1-mastery' },
    ],
  },
  {
    id: 'int-1-2', unitId: 'int-unit-1',
    title: 'Grundintegrale',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['Grundintegrale auswendig kennen', 'Potenzregel für Integration anwenden'],
    subGoals: [
      { label: 'Potenzregel $\\int x^n dx = x^{n+1}/(n+1)+C$ für $n\\neq-1$', examRelevance: 'hoch' },
      { label: 'Sonderfall $\\int \\frac{1}{x}dx = \\ln|x|+C$', examRelevance: 'hoch' },
      { label: 'Stammfunktionen von $e^x$, $\\sin x$, $\\cos x$ auswendig', examRelevance: 'hoch' },
      { label: 'Summen- und Faktorregel beim Integrieren', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'int-1-3',
    steps: [
      {
        id: 'int-1-2-s1', type: 'explanation-formal', title: 'Tabelle der Grundintegrale',
        content: `**Auswendig lernen — prüfungsrelevant!**

Die folgenden Integrale sind die Bausteine für alles Weitere. Man erhält sie, indem man die bekannten Ableitungen "rückwärts liest".

| $f(x)$ (Integrand)  | $\\int f(x)\\,dx$ (Stammfunktion) |
|----------------------|----------------------------------|
| $x^{n}$ $(n \\neq -1)$ | $\\dfrac{x^{n+1}}{n+1} + C$       |
| $\\dfrac{1}{x}$      | $\\ln\\lvert x\\rvert + C$         |
| $e^{x}$             | $e^{x} + C$                      |
| $\\sin(x)$           | $-\\cos(x) + C$                   |
| $\\cos(x)$           | $\\sin(x) + C$                    |

**Die Potenzregel im Detail:**

$$\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

Merke: **Exponent um 1 erhöhen**, dann durch den **neuen Exponenten teilen**.

**Beispiele:**
- $\\int x^{4}\\,dx = \\dfrac{x^{5}}{5} + C$
- $\\int x^{-2}\\,dx = \\dfrac{x^{-1}}{-1} + C = -\\dfrac{1}{x} + C$
- $\\int \\sqrt{x}\\,dx = \\int x^{1/2}\\,dx = \\dfrac{x^{3/2}}{3/2} + C = \\dfrac{2}{3}x^{3/2} + C$

**Warum gilt die Potenzregel nicht für $n = -1$?**
Weil $\\dfrac{x^{0}}{0}$ nicht definiert ist! Für $n = -1$ gilt stattdessen: $\\int x^{-1}\\,dx = \\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$.`,
      },
      { id: 'int-1-2-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-2-a' },
      { id: 'int-1-2-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-2-b' },
      { id: 'int-1-2-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-2-c' },
      { id: 'int-1-2-s5', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-2-d' },
      { id: 'int-1-2-s6', type: 'exercise', title: 'Aufgabe 5 — Zuordnung', exerciseRef: 'ex-int-1-2-e' },
      { id: 'int-1-2-s7', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-2-mastery' },
    ],
  },
  {
    id: 'int-1-3', unitId: 'int-unit-1',
    title: 'Summenregel & Faktorregel',
    order: 3, estimatedMinutes: 12,
    learningGoals: ['Summenregel für Integration anwenden', 'Konstantenfaktor vor das Integral ziehen'],
    subGoals: [
      { label: 'Summenregel: $\\int (f + g) dx = \\int f\\,dx + \\int g\\,dx$ — gliedweise integrieren', examRelevance: 'hoch' },
      { label: 'Faktorregel: $\\int c f(x) dx = c \\int f(x) dx$ — Konstante vors Integral ziehen', examRelevance: 'hoch' },
      { label: 'Für Produkt $f(x) \\cdot g(x)$ gilt KEIN analoges Produktrecht — dort partielle Integration nötig', examRelevance: 'hoch' },
      { label: 'Integrationskonstante $C$ bei unbestimmten Integralen konsequent mitschreiben', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'int-1-4',
    steps: [
      {
        id: 'int-1-3-s1', type: 'explanation-formal', title: 'Rechenregeln für Integrale',
        content: `Genau wie bei der Ableitung darf man Summen **gliedweise** integrieren und konstante Faktoren **vor das Integral** ziehen.

**Summenregel:**
$$\\int \\bigl[f(x) + g(x)\\bigr]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$$

Man integriert jeden Summanden einzeln.

**Faktorregel (Konstantenfaktor):**
$$\\int c \\cdot f(x)\\,dx = c \\cdot \\int f(x)\\,dx \\quad (c \\in \\mathbb{R})$$

Einen konstanten Faktor darf man vor das Integral ziehen.

**Achtung:** Diese Regeln gelten **nur** für Summen und konstante Faktoren! Für Produkte $\\int f(x) \\cdot g(x)\\,dx$ gibt es **keine** einfache Regel — dafür braucht man spezielle Techniken (partielle Integration, Substitution).

**Beispiel Schritt für Schritt:**
$$\\int (6x^{2} - 4x + 3)\\,dx$$
$$= \\int 6x^{2}\\,dx - \\int 4x\\,dx + \\int 3\\,dx$$
$$= 6 \\cdot \\frac{x^{3}}{3} - 4 \\cdot \\frac{x^{2}}{2} + 3x + C$$
$$= 2x^{3} - 2x^{2} + 3x + C$$`,
      },
      { id: 'int-1-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-3-a' },
      { id: 'int-1-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-3-b' },
      { id: 'int-1-3-s4', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-int-1-3-c' },
      { id: 'int-1-3-s5', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-3-d' },
      { id: 'int-1-3-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-3-mastery' },
    ],
  },
  {
    id: 'int-1-4', unitId: 'int-unit-1',
    title: 'Das bestimmte Integral',
    order: 4, estimatedMinutes: 18,
    learningGoals: ['Bestimmtes Integral berechnen', 'Geometrische Deutung als Fläche verstehen'],
    subGoals: [
      { label: 'Hauptsatz: $\\int_a^b f(x) dx = F(b) - F(a)$ mit beliebiger Stammfunktion $F$', examRelevance: 'hoch' },
      { label: 'Geometrisch: Fläche *zwischen* Kurve und x-Achse — unterhalb wird NEGATIV gezählt', examRelevance: 'hoch' },
      { label: 'Vertauschen der Grenzen dreht das Vorzeichen: $\\int_a^b = -\\int_b^a$', examRelevance: 'mittel' },
      { label: 'Bei bestimmtem Integral fällt die Integrationskonstante $C$ weg (kürzt sich raus)', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'int-1-5',
    steps: [
      {
        id: 'int-1-4-s1', type: 'explanation-intuitive', title: 'Fläche unter einer Kurve',
        content: `Bisher haben wir **unbestimmte** Integrale berechnet — das Ergebnis war eine Funktion ($+C$).

Jetzt kommt das **bestimmte Integral**: Hier berechnen wir eine **Zahl**, nämlich die **Fläche** unter einer Kurve.

Stell dir vor, du hast den Graphen einer Funktion $f(x)$ und willst die Fläche zwischen der Kurve und der $x$-Achse von $x = a$ bis $x = b$ wissen.

Die Idee: Teile die Fläche in viele schmale Rechtecke auf. Jedes Rechteck hat die Breite $\\Delta x$ und die Höhe $f(x_{i})$. Die Gesamtfläche ist ungefähr:

$$A \\approx \\sum_{i=1}^{n} f(x_{i}) \\cdot \\Delta x$$

Je mehr Rechtecke (je schmaler), desto genauer wird die Fläche. Im Grenzwert (unendlich viele, unendlich schmale Rechtecke) erhalten wir das bestimmte Integral:

$$A = \\int_{a}^{b} f(x)\\,dx$$

Dabei heißen $a$ die **untere** und $b$ die **obere Integrationsgrenze**.`,
      },
      {
        id: 'int-1-4-s2', type: 'explanation-formal', title: 'Berechnung mit dem Hauptsatz',
        content: `**Das bestimmte Integral berechnen:**

$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a) = \\bigl[F(x)\\bigr]_{a}^{b}$$

Dabei ist $F(x)$ eine beliebige Stammfunktion von $f(x)$.

**Schreibweise:** $\\bigl[F(x)\\bigr]_{a}^{b}$ bedeutet: "$F(x)$ ausgewertet von $a$ bis $b$", also $F(b) - F(a)$.

**Beachte:** Die Integrationskonstante $C$ fällt beim bestimmten Integral weg, denn:
$$\\bigl[F(x) + C\\bigr]_{a}^{b} = (F(b) + C) - (F(a) + C) = F(b) - F(a)$$

**Schritt-für-Schritt-Beispiel:**
$$\\int_{1}^{3} x^{2}\\,dx$$
1. Stammfunktion: $F(x) = \\dfrac{x^{3}}{3}$
2. Obere Grenze einsetzen: $F(3) = \\dfrac{27}{3} = 9$
3. Untere Grenze einsetzen: $F(1) = \\dfrac{1}{3}$
4. Differenz bilden: $9 - \\dfrac{1}{3} = \\dfrac{26}{3} \\approx 8{,}67$

**Wichtig:** Wenn $f(x) < 0$ im Intervall $[a,b]$, ist das Integral **negativ** — es misst dann die Fläche mit negativem Vorzeichen.`,
      },
      {
        id: 'int-1-4-s3', type: 'visualization', title: 'Fläche unter $f(x) = x^{2}$',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'f(x) = x²' },
          ],
          xRange: [-1, 4],
          yRange: [-1, 10],
          showGrid: true,
          shadedArea: { from: 1, to: 3, color: 'rgba(59, 130, 246, 0.3)' },
        },
      },
      { id: 'int-1-4-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-4-a' },
      { id: 'int-1-4-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-4-b' },
      { id: 'int-1-4-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-4-c' },
      { id: 'int-1-4-s7', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-1-4-d' },
      { id: 'int-1-4-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-4-mastery' },
    ],
  },
  {
    id: 'int-1-5', unitId: 'int-unit-1',
    title: 'Hauptsatz der Differential- und Integralrechnung',
    order: 5, estimatedMinutes: 14,
    learningGoals: ['Hauptsatz der Analysis formulieren können', 'Zusammenhang Ableitung ↔ Integral verstehen'],
    prerequisites: [],
    nextLessonId: 'int-2-1',
    steps: [
      {
        id: 'int-1-5-s1', type: 'explanation-intuitive', title: 'Die Brücke zwischen Ableitung und Integral',
        content: `Der **Hauptsatz der Differential- und Integralrechnung** (auch: Fundamentalsatz der Analysis) ist einer der wichtigsten Sätze der gesamten Mathematik.

Er sagt im Wesentlichen:

**Ableitung und Integration sind Umkehroperationen.**

Stell dir einen Wasserhahn vor:
- Die **Flussrate** (Liter pro Sekunde) $= f(t)$
- Die **Gesamtmenge** Wasser im Eimer $= F(t)$

Die Flussrate ist die Ableitung der Gesamtmenge: $F'(t) = f(t)$.
Die Gesamtmenge ist das Integral der Flussrate: $F(t) = \\int_{0}^{t} f(s)\\,ds$.

Wenn du die Flussrate kennst und die Gesamtmenge willst $\\to$ **integrieren**.
Wenn du die Gesamtmenge kennst und die Flussrate willst $\\to$ **ableiten**.`,
      },
      {
        id: 'int-1-5-s2', type: 'explanation-formal', title: 'Formale Formulierung',
        content: `**Hauptsatz der Differential- und Integralrechnung:**

Sei $f$ eine stetige Funktion auf $[a, b]$.

**Teil 1:** Die Funktion $F(x) = \\int_{a}^{x} f(t)\\,dt$ ist differenzierbar und es gilt:
$$F'(x) = f(x)$$

Das heißt: Wenn man das Integral als Funktion der oberen Grenze betrachtet und ableitet, erhält man den Integranden zurück.

**Teil 2:** Wenn $F$ eine beliebige Stammfunktion von $f$ ist (also $F' = f$), dann gilt:
$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$$

**Zusammenfassung:**
- Integration $\\to$ Ableitung $\\to$ zurück zur Ausgangsfunktion: $\\dfrac{d}{dx}\\int_{a}^{x} f(t)\\,dt = f(x)$
- Ableitung $\\to$ Integration $\\to$ zurück (bis auf Konstante): $\\int_{a}^{x} f'(t)\\,dt = f(x) - f(a)$

Diesen Satz haben wir bereits in Lektion 4 zum Berechnen bestimmter Integrale benutzt — jetzt kennen wir seine vollständige Formulierung.`,
      },
      { id: 'int-1-5-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-1-5-a' },
      { id: 'int-1-5-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-1-5-b' },
      { id: 'int-1-5-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-1-5-c' },
      { id: 'int-1-5-s6', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-int-1-5-mastery' },
    ],
  },
]

export const int_unit1 = {
  id: 'int-unit-1',
  title: 'Stammfunktionen & Grundintegrale',
  order: 1,
  description: 'Stammfunktionen, Grundintegrale, Rechenregeln, bestimmtes Integral und Hauptsatz',
  unitGoals: [
    'Stammfunktion als Umkehrung der Ableitung verstehen: $F\'(x) = f(x)$',
    'Grundintegrale (Potenz, $e^x$, $1/x$, $\\sin x$, $\\cos x$) sicher aus dem Kopf abrufen',
    'Linearitäts- und Faktorregel des Integrals sinnvoll einsetzen',
    'Hauptsatz der Differential- und Integralrechnung $\\int_a^b f(x)dx = F(b) - F(a)$ korrekt anwenden',
    'Integrationskonstante $C$ bei unbestimmten Integralen niemals vergessen',
  ],
  lessons: lessons_int_u1,
  exercises: exercises_int_u1,
}
