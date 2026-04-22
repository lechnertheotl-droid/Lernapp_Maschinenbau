// ── Integralrechnung Unit 2: Integrationstechniken ────────────────────────────

export const exercises_int_u2 = {
  // ── Lesson 1: Substitution ────────────────────────────────────────────────
  'ex-int-2-1-a': {
    id: 'ex-int-2-1-a', lessonId: 'int-2-1', type: 'multiple-choice',
    question: 'Was ist der erste Schritt bei der Substitutionsmethode?',
    options: [
      'Die Funktion ableiten',
      'Einen geeigneten Teil des Integranden als $u = g(x)$ setzen',
      'Partielle Integration anwenden',
      'Die Funktion in Partialbrüche zerlegen',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Substitution = Kettenregel rückwärts. Erst muss man den geeigneten inneren Ausdruck identifizieren.

**Rechnung:** Schritt 1: $u = g(x)$ wählen, wobei $g(x)$ typischerweise ein innerer Ausdruck ist, dessen Ableitung $g'(x)$ als Faktor im Integral steht. Schritt 2: $du = g'(x)\\,dx$ berechnen. Schritt 3: Alles in $u$ umschreiben.

**Probe:** Bei $\\int 2x \\cdot e^{x^{2}}\\,dx$: $u = x^{2}$, $du = 2x\\,dx$ — passt perfekt.

**Typischer Fehler:** Substitution erzwingen, wo es nicht passt — wenn $g'(x)$ nicht als Faktor vorhanden ist, funktioniert es nicht direkt.`,
    hints: [
      'Denke an die Kettenregel "rückwärts": $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$.',
      'Wir brauchen einen inneren Ausdruck $g(x)$, dessen Ableitung auch im Integral steht.',
      'Das ist Substitution: ersetze $g(x)$ durch ein einziges Symbol $u$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Ableiten hilft nicht beim Integrieren — Substitution ist die Umkehrung der Kettenregel beim Integrieren. Erster Schritt ist die Wahl eines geeigneten inneren Ausdrucks $u = g(x)$, dessen Ableitung $g\'(x)\\,dx = du$ bereits im Integrand auftaucht.',
      '2': 'Partielle Integration ist eine eigene, andere Technik (Umkehrung der Produktregel). Die Substitutionsmethode beginnt mit der Wahl $u = g(x)$ — typischerweise eines inneren Ausdrucks, dessen Ableitung als Faktor im Integrand vorkommt.',
      '3': 'Partialbruchzerlegung ist eine dritte, unabhängige Technik (nur für rationale Funktionen). Die Substitutionsmethode beginnt mit $u = g(x)$ und $du = g\'(x)\\,dx$ — Umkehrung der Kettenregel.',
    },
  },
  'ex-int-2-1-b': {
    id: 'ex-int-2-1-b', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '$\\int 2x \\cdot e^{x^{2}}\\,dx = ?$ (Tipp: $u = x^{2}$)',
    options: ['$x^{2} \\cdot e^{x^{2}} + C$', '$e^{x^{2}} + C$', '$2 e^{x^{2}} + C$', '$\\dfrac{e^{x^{2}}}{2} + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Substitution $u = x^{2}$, Ableitung $du = 2x\\,dx$ passt genau.

**Rechnung:**
- $u = x^{2} \\Rightarrow du = 2x\\,dx$
- Integral: $\\int e^{u}\\,du = e^{u} + C$
- Rücksubstitution: $e^{x^{2}} + C$

**Probe:** $(e^{x^{2}})' = e^{x^{2}} \\cdot 2x$. ✓

**Typischer Fehler:** Den Faktor $2x$ nicht als $du$ erkennen und stehen lassen.`,
    hints: [
      'Setze $u = x^{2}$. Was ist $du$?',
      '$du = 2x\\,dx$ — genau der Faktor vor $e^{x^{2}}$!',
      'Dann wird das Integral $\\int e^{u}\\,du = e^{u} + C$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast die Produktregel rückwärts "erfunden", die es so nicht gibt. Korrekt: Nach der Substitution $u = x^{2}$ wird $2x\\,dx = du$, das Integral reduziert sich zu $\\int e^{u}\\,du = e^{u} + C = e^{x^{2}} + C$. Der Faktor $x^{2}$ taucht im Ergebnis nicht mehr auf.',
      '2': 'Du hast den Faktor $2$ aus $du = 2x\\,dx$ als zusätzlichen Vorfaktor vor das Ergebnis gezogen — er ist aber bereits aufgebraucht, weil $2x\\,dx$ genau $du$ ersetzt. Richtig: $\\int 2x\\,e^{x^{2}}\\,dx = \\int e^{u}\\,du = e^{x^{2}} + C$ (ohne Faktor $2$).',
      '3': 'Du hast zusätzlich durch $2$ geteilt — aber $du = 2x\\,dx$ stimmt ohne Umstellen genau mit dem $2x\\,dx$ im Integrand überein. Es gibt keinen Korrekturfaktor: $\\int 2x\\,e^{x^{2}}\\,dx = \\int e^{u}\\,du = e^{x^{2}} + C$.',
    },
  },
  'ex-int-2-1-c': {
    id: 'ex-int-2-1-c', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '$\\int \\cos(3x)\\,dx = ?$ (Tipp: $u = 3x$)',
    options: ['$\\sin(3x) + C$', '$\\dfrac{\\sin(3x)}{3} + C$', '$3\\sin(3x) + C$', '$-\\dfrac{\\sin(3x)}{3} + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Substitution $u = 3x$, Ableitung $du = 3\\,dx$, also $dx = du/3$.

**Rechnung:**
- $\\int \\cos(u) \\cdot \\dfrac{du}{3} = \\dfrac{1}{3} \\int \\cos(u)\\,du = \\dfrac{\\sin(u)}{3} + C$
- Rücksubstitution: $\\dfrac{\\sin(3x)}{3} + C$

**Probe:** $\\left(\\dfrac{\\sin(3x)}{3}\\right)' = \\dfrac{\\cos(3x) \\cdot 3}{3} = \\cos(3x)$. ✓

**Typischer Fehler:** Faktor $1/3$ vergessen — klassische Prüfungsfalle bei linearer Substitution $u = ax$.`,
    hints: [
      'Setze $u = 3x$. Was ist $du$?',
      '$du = 3\\,dx \\Rightarrow dx = du/3$.',
      'Vergiss nicht, durch $3$ zu teilen!',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast die Kettenregel-Korrektur $\\dfrac{1}{3}$ vergessen: Ableitung ergibt $(\\sin(3x))\' = 3\\cos(3x)$, nicht $\\cos(3x)$. Mit $u = 3x$ ist $dx = du/3$, also $\\int \\cos(3x)\\,dx = \\dfrac{1}{3}\\sin(3x) + C$.',
      '2': 'Du hast mit $3$ multipliziert statt durch $3$ zu teilen — Vorzeichen/Richtung vertauscht. Aus $du = 3\\,dx$ folgt $dx = du/3$, also wird ein Faktor $\\dfrac{1}{3}$ vor das Integral gezogen: $\\int \\cos(3x)\\,dx = \\dfrac{\\sin(3x)}{3} + C$.',
      '3': 'Du hast ein Minuszeichen erfunden, das hier nicht vorkommt. $\\int \\cos\\,du = +\\sin$ (ohne Minus). Mit dem Faktor $\\dfrac{1}{3}$ aus der linearen Substitution: $\\int \\cos(3x)\\,dx = +\\dfrac{\\sin(3x)}{3} + C$.',
    },
  },
  'ex-int-2-1-d': {
    id: 'ex-int-2-1-d', lessonId: 'int-2-1', type: 'multiple-choice',
    question: '$\\int x \\cdot (x^{2} + 1)^{4}\\,dx = ?$',
    options: ['$\\dfrac{(x^{2} + 1)^{5}}{10} + C$', '$\\dfrac{(x^{2} + 1)^{5}}{5} + C$', '$\\dfrac{x^{2}(x^{2} + 1)^{4}}{2} + C$', '$(x^{2} + 1)^{5} + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Innerer Ausdruck $x^{2} + 1$, seine Ableitung $2x$ ist bis auf Faktor $1/2$ als $x$ im Integral.

**Rechnung:**
- $u = x^{2} + 1 \\Rightarrow du = 2x\\,dx \\Rightarrow x\\,dx = \\dfrac{du}{2}$
- $\\int u^{4} \\cdot \\dfrac{du}{2} = \\dfrac{1}{2} \\cdot \\dfrac{u^{5}}{5} + C = \\dfrac{u^{5}}{10} + C$
- Rücksubstitution: $\\dfrac{(x^{2} + 1)^{5}}{10} + C$

**Probe:** $\\left(\\dfrac{(x^{2}+1)^{5}}{10}\\right)' = \\dfrac{5(x^{2}+1)^{4} \\cdot 2x}{10} = x(x^{2}+1)^{4}$. ✓

**Typischer Fehler:** $1/10$ falsch ($1/5$ vergessen den Faktor $1/2$ einzuarbeiten, oder umgekehrt).`,
    hints: [
      'Setze $u = x^{2} + 1$.',
      '$du = 2x\\,dx \\Rightarrow x\\,dx = du/2$. Dann hast du $\\dfrac{1}{2}\\int u^{4}\\,du$.',
      'Potenzregel: $\\int u^{4}\\,du = u^{5}/5$, also gesamt $u^{5}/10$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast den Faktor $\\dfrac{1}{2}$ aus $x\\,dx = \\dfrac{du}{2}$ übersehen. Mit $u = x^{2}+1$ wird $du = 2x\\,dx$, also $x\\,dx = du/2$. Die $\\dfrac{1}{2}$ geht vor das Integral und führt zu $\\dfrac{u^{5}}{10}$, nicht $\\dfrac{u^{5}}{5}$.',
      '2': 'Du hast die Produktregel rückwärts erfunden — Integration eines Produkts ist nicht das Produkt der Integrale. Die Substitution $u = x^{2}+1$ absorbiert den $x$-Faktor: $\\int u^{4} \\cdot \\dfrac{du}{2} = \\dfrac{u^{5}}{10} + C$.',
      '3': 'Du hast sowohl den Faktor $\\dfrac{1}{2}$ aus $x\\,dx = du/2$ als auch den Teilen-durch-$5$-Schritt aus der Potenzregel vergessen. Korrekt: $\\int u^{4}\\,du = \\dfrac{u^{5}}{5}$, mal $\\dfrac{1}{2}$ ergibt $\\dfrac{u^{5}}{10}$.',
    },
  },
  'ex-int-2-1-mastery': {
    id: 'ex-int-2-1-mastery', lessonId: 'int-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\int \\sin(x) \\cdot \\cos(x)\\,dx = ?$ (Tipp: $u = \\sin(x)$)',
    options: ['$\\dfrac{\\sin^{2}(x)}{2} + C$', '$-\\dfrac{\\cos^{2}(x)}{2} + C$', '$\\sin(x) \\cdot \\cos(x) + C$', 'Sowohl $\\dfrac{\\sin^{2}(x)}{2} + C$ als auch $-\\dfrac{\\cos^{2}(x)}{2} + C$ sind korrekt'],
    correctIndex: 3,
    explanation: `**Ansatz:** Zwei mögliche Substitutionen — beide führen zu einem Ergebnis, das sich nur um eine Konstante unterscheidet.

**Rechnung 1:** $u = \\sin(x) \\Rightarrow du = \\cos(x)\\,dx$: $\\int u\\,du = \\dfrac{u^{2}}{2} + C = \\dfrac{\\sin^{2}(x)}{2} + C$.

**Rechnung 2:** $u = \\cos(x) \\Rightarrow du = -\\sin(x)\\,dx$: $-\\int u\\,du = -\\dfrac{u^{2}}{2} + C = -\\dfrac{\\cos^{2}(x)}{2} + C$.

**Probe — beide äquivalent?** $\\dfrac{\\sin^{2}(x)}{2} = \\dfrac{1 - \\cos^{2}(x)}{2} = \\dfrac{1}{2} - \\dfrac{\\cos^{2}(x)}{2}$. Beide Ergebnisse unterscheiden sich nur um $\\dfrac{1}{2}$ — steckt im $C$!

**Typischer Fehler:** Denken, nur eine Substitution sei "die richtige" — beide sind gültig.`,
    hints: [
      'Es gibt zwei mögliche Substitutionen: $u = \\sin(x)$ oder $u = \\cos(x)$.',
      'Mit $u = \\sin(x)$: $du = \\cos(x)\\,dx$, Integral wird $\\int u\\,du$.',
      'Beide Ergebnisse unterscheiden sich nur um eine Konstante (versteckt im $C$).',
    ],
    wrongAnswerExplanations: {
      '0': 'Die Antwort ist rechnerisch richtig ($u = \\sin(x)$-Substitution), aber unvollständig: Auch Option B ($u = \\cos(x)$) ist korrekt. Beide unterscheiden sich nur um $\\dfrac{1}{2}$, was im $C$ aufgeht — deshalb sind sie beide gültig.',
      '1': 'Die Antwort ist rechnerisch richtig ($u = \\cos(x)$-Substitution, $du = -\\sin(x)\\,dx$), aber unvollständig: Auch Option A ($u = \\sin(x)$) ist korrekt. Wegen $\\sin^{2}(x) = 1 - \\cos^{2}(x)$ unterscheiden sich die Ergebnisse nur um $\\dfrac{1}{2}$ — beide gültig.',
      '2': 'Du hast den Integrand unverändert stehen gelassen — Integration eines Produkts ist aber nicht das Produkt selbst. Mit $u = \\sin(x)$, $du = \\cos(x)\\,dx$ wird das Integral $\\int u\\,du = \\dfrac{\\sin^{2}(x)}{2} + C$.',
    },
  },

  // ── Lesson 2: Partielle Integration ───────────────────────────────────────
  'ex-int-2-2-a': {
    id: 'ex-int-2-2-a', lessonId: 'int-2-2', type: 'multiple-choice',
    question: 'Die Formel für partielle Integration lautet:',
    options: [
      '$\\int u \\cdot v\'\\,dx = u \\cdot v - \\int u\' \\cdot v\\,dx$',
      '$\\int u \\cdot v\'\\,dx = u \\cdot v + \\int u\' \\cdot v\\,dx$',
      '$\\int u \\cdot v\'\\,dx = u\' \\cdot v - \\int u \\cdot v\'\\,dx$',
      '$\\int u \\cdot v\'\\,dx = u \\cdot v$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Partielle Integration folgt aus der Produktregel der Ableitung.

**Rechnung:** Produktregel: $(u \\cdot v)' = u'v + uv'$. Integrieren beider Seiten:
$$u \\cdot v = \\int u'v\\,dx + \\int uv'\\,dx.$$
Umstellen liefert: $\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$.

**Probe:** Teste $\\int x \\cdot e^{x}\\,dx$ mit $u=x, v'=e^{x}$: $xe^{x} - \\int e^{x}\\,dx = xe^{x} - e^{x} + C$. Ableitung: $e^{x} + xe^{x} - e^{x} = xe^{x}$. ✓

**Typischer Fehler:** Pluszeichen statt Minuszeichen — klassisch bei Prüfungen.`,
    hints: [
      'Die Formel kommt aus der Produktregel der Ableitung.',
      'Produktregel: $(uv)\' = u\'v + uv\'$. Integriere und stelle um.',
      'Minuszeichen beachten!',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das Vorzeichen falsch: Aus der Produktregel $(uv)\' = u\'v + uv\'$ ergibt sich nach Integration $uv = \\int u\'v\\,dx + \\int uv\'\\,dx$. Umstellen ergibt ein Minus: $\\int u \\cdot v\'\\,dx = u \\cdot v - \\int u\' \\cdot v\\,dx$.',
      '2': 'Du hast $u$ und $u\'$ im ersten Term vertauscht: Es muss $u \\cdot v$ dort stehen (nicht $u\' \\cdot v$). Richtige Formel: $\\int u \\cdot v\'\\,dx = u \\cdot v - \\int u\' \\cdot v\\,dx$.',
      '3': 'Das Restintegral fehlt komplett — die partielle Integration löst das ursprüngliche Integral nicht auf, sondern tauscht es gegen ein (hoffentlich einfacheres) neues aus: $\\int u \\cdot v\'\\,dx = u \\cdot v - \\int u\' \\cdot v\\,dx$.',
    },
  },
  'ex-int-2-2-b': {
    id: 'ex-int-2-2-b', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '$\\int x \\cdot e^{x}\\,dx = ?$ (partielle Integration mit $u = x$, $v\' = e^{x}$)',
    options: ['$x \\cdot e^{x} - e^{x} + C$', '$x \\cdot e^{x} + e^{x} + C$', '$\\dfrac{x^{2} \\cdot e^{x}}{2} + C$', '$e^{x}(x - 1) + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** LIATE — Polynom vor Exponential: $u = x$ (algebraisch), $v' = e^{x}$ (exponentiell).

**Rechnung:**
- $u = x \\Rightarrow u' = 1$
- $v' = e^{x} \\Rightarrow v = e^{x}$
- Einsetzen: $\\int x \\cdot e^{x}\\,dx = x \\cdot e^{x} - \\int 1 \\cdot e^{x}\\,dx = xe^{x} - e^{x} + C$.

**Probe:** $(xe^{x} - e^{x})' = e^{x} + xe^{x} - e^{x} = xe^{x}$. ✓

**Anmerkung:** Option A und D sind äquivalent ($xe^{x} - e^{x} = e^{x}(x-1)$), aber A ist die direkte Anwendung der Formel.`,
    hints: [
      'Wähle $u = x$ (wird beim Ableiten einfacher: $u\' = 1$).',
      '$v\' = e^{x} \\Rightarrow v = e^{x}$.',
      'Einsetzen: $u \\cdot v - \\int u\' \\cdot v\\,dx = xe^{x} - \\int e^{x}\\,dx$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das Minuszeichen aus der Formel $\\int uv\'\\,dx = uv - \\int u\'v\\,dx$ zu einem Plus gemacht. Mit $u=x, v=e^{x}$: $xe^{x} - \\int e^{x}\\,dx = xe^{x} - e^{x} + C$, nicht $+e^{x}$.',
      '2': 'Du hast die Potenzregel auf $x \\cdot e^{x}$ angewendet — die funktioniert nur für $x^{n}$, nicht für Produkte. Hier braucht es partielle Integration: $\\int xe^{x}\\,dx = xe^{x} - e^{x} + C$.',
      '3': 'Das Ergebnis $e^{x}(x - 1) + C$ ist mathematisch gleich zu $xe^{x} - e^{x} + C$, aber anders geschrieben. Die direkte Anwendung der Formel $uv - \\int u\'v\\,dx$ ergibt aber genau die Form in Option A: $xe^{x} - e^{x} + C$.',
    },
  },
  'ex-int-2-2-c': {
    id: 'ex-int-2-2-c', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '$\\int x \\cdot \\cos(x)\\,dx = ?$',
    options: ['$x\\sin(x) + \\cos(x) + C$', '$x\\sin(x) - \\cos(x) + C$', '$x\\cos(x) + \\sin(x) + C$', '$-x\\sin(x) + \\cos(x) + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** LIATE — $u = x$ (algebraisch), $v' = \\cos(x)$ (trigonometrisch).

**Rechnung:**
- $u = x \\Rightarrow u' = 1$
- $v' = \\cos(x) \\Rightarrow v = \\sin(x)$
- $\\int x\\cos(x)\\,dx = x\\sin(x) - \\int 1 \\cdot \\sin(x)\\,dx = x\\sin(x) - (-\\cos(x)) + C = x\\sin(x) + \\cos(x) + C$.

**Probe:** $(x\\sin(x) + \\cos(x))' = \\sin(x) + x\\cos(x) - \\sin(x) = x\\cos(x)$. ✓

**Typischer Fehler:** Doppel-Minus bei $\\int \\sin(x)\\,dx = -\\cos(x)$ übersehen — $-(-\\cos(x)) = +\\cos(x)$.`,
    hints: [
      '$u = x$, $v\' = \\cos(x)$.',
      '$v = \\sin(x)$, $u\' = 1$.',
      '$\\int \\sin(x)\\,dx = -\\cos(x)$, also $- \\int \\sin(x)\\,dx = +\\cos(x)$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast das doppelte Minus verloren: $\\int \\sin(x)\\,dx = -\\cos(x)$, und davor steht noch ein Minus aus der Formel, also $-\\int \\sin(x)\\,dx = +\\cos(x)$. Richtig: $x\\sin(x) + \\cos(x) + C$.',
      '2': 'Du hast $v$ falsch gesetzt: Aus $v\' = \\cos(x)$ folgt $v = \\sin(x)$ (nicht $\\cos(x)$). Richtig: $\\int x\\cos(x)\\,dx = x\\sin(x) + \\cos(x) + C$.',
      '3': 'Vorzeichenfehler: Aus $v\' = \\cos(x)$ ergibt sich $v = +\\sin(x)$, nicht $-\\sin(x)$. Richtig: $\\int x\\cos(x)\\,dx = x\\sin(x) - \\int \\sin(x)\\,dx = x\\sin(x) + \\cos(x) + C$.',
    },
  },
  'ex-int-2-2-d': {
    id: 'ex-int-2-2-d', lessonId: 'int-2-2', type: 'multiple-choice',
    question: '$\\int \\ln(x)\\,dx = ?$ (Tipp: Setze $u = \\ln(x)$, $v\' = 1$)',
    options: ['$\\dfrac{1}{x} + C$', '$x \\cdot \\ln(x) - x + C$', '$x \\cdot \\ln(x) + C$', '$x \\cdot \\ln(x) + x + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Trick — $v' = 1$ setzen, um $\\ln(x)$ überhaupt partiell integrieren zu können.

**Rechnung:**
- $u = \\ln(x) \\Rightarrow u' = 1/x$
- $v' = 1 \\Rightarrow v = x$
- $\\int \\ln(x)\\,dx = x \\cdot \\ln(x) - \\int x \\cdot \\dfrac{1}{x}\\,dx = x\\ln(x) - \\int 1\\,dx = x\\ln(x) - x + C$.

**Probe:** $(x\\ln(x) - x)' = \\ln(x) + x \\cdot \\dfrac{1}{x} - 1 = \\ln(x) + 1 - 1 = \\ln(x)$. ✓

**Typischer Fehler:** $\\int \\ln(x)\\,dx = 1/x + C$ denken (verwechselt mit Ableitung).`,
    hints: [
      'Trick: $v\' = 1$ setzen, damit $\\ln(x)$ partiell integriert wird.',
      '$v\' = 1 \\Rightarrow v = x$. Und $u\' = 1/x$.',
      'Einsetzen: $x \\cdot \\ln(x) - \\int x \\cdot (1/x)\\,dx = x\\ln(x) - \\int 1\\,dx = x\\ln(x) - x + C$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast die Ableitung von $\\ln(x)$ angegeben, nicht die Stammfunktion: $(\\ln(x))\' = 1/x$, aber gefragt ist $\\int \\ln(x)\\,dx$. Richtig per partieller Integration: $x\\ln(x) - x + C$.',
      '2': 'Du hast den Rest-Term $-\\int x \\cdot (1/x)\\,dx = -\\int 1\\,dx = -x$ vergessen. Richtig: $\\int \\ln(x)\\,dx = x\\ln(x) - x + C$, das $-x$ gehört dazu.',
      '3': 'Vorzeichenfehler im Restterm: Aus $-\\int x \\cdot (1/x)\\,dx = -\\int 1\\,dx = -x$ (mit Minus), nicht $+x$. Richtig: $\\int \\ln(x)\\,dx = x\\ln(x) - x + C$.',
    },
  },
  'ex-int-2-2-mastery': {
    id: 'ex-int-2-2-mastery', lessonId: 'int-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\int x^{2} \\cdot e^{x}\\,dx$ erfordert partielle Integration — wie oft?',
    options: ['Einmal', 'Zweimal', 'Dreimal', 'Es ist nicht mit partieller Integration lösbar'],
    correctIndex: 1,
    explanation: `**Ansatz:** Pro Durchlauf sinkt der Polynomgrad um 1. Startgrad $2 \\to 1 \\to 0$ (fertig).

**Rechnung:**
- Runde 1: $u = x^{2}$, $v' = e^{x}$, $u' = 2x$, $v = e^{x}$: $x^{2}e^{x} - \\int 2xe^{x}\\,dx$.
- Runde 2: für $\\int 2xe^{x}\\,dx$ nochmal partiell mit $u = 2x$, $v' = e^{x}$: $2xe^{x} - \\int 2e^{x}\\,dx = 2xe^{x} - 2e^{x}$.
- Gesamt: $x^{2}e^{x} - (2xe^{x} - 2e^{x}) + C = e^{x}(x^{2} - 2x + 2) + C$.

**Probe:** $(e^{x}(x^{2}-2x+2))' = e^{x}(x^{2}-2x+2) + e^{x}(2x-2) = e^{x}(x^{2}-2x+2+2x-2) = x^{2}e^{x}$. ✓

**Typischer Fehler:** Minuszeichen bei der Kombination beider Runden vergessen.`,
    hints: [
      'Bei jedem Durchlauf sinkt die Potenz von $x$ um $1$.',
      '$x^{2} \\to x \\to 1$ (konstant) $\\to$ fertig. Also $2$ Schritte.',
      'Immer Produkt $\\text{Polynom} \\cdot e^{x}$ mit $u = $ Polynom.',
    ],
    wrongAnswerExplanations: {
      '0': 'Einmal reicht nicht: Nach dem ersten Durchlauf mit $u = x^{2}$ bleibt $\\int 2xe^{x}\\,dx$ übrig — das ist immer noch ein Produkt Polynom · $e^{x}$, also braucht es eine zweite partielle Integration. Insgesamt zwei Schritte, bis der Polynomgrad $0$ ist.',
      '2': 'Dreimal ist einer zu viel: Nach zwei Durchläufen ist der Polynomgrad von $2$ auf $0$ gefallen und es bleibt $\\int 2e^{x}\\,dx$ — ein Grundintegral, keine weitere partielle Integration nötig.',
      '3': 'Das Integral ist sehr wohl mit partieller Integration lösbar — jeder Durchlauf senkt den Polynomgrad um $1$. Nach $2$ Durchläufen: $\\int x^{2}e^{x}\\,dx = e^{x}(x^{2} - 2x + 2) + C$.',
    },
  },

  // ── Lesson 3: Partialbruchzerlegung ───────────────────────────────────────
  'ex-int-2-3-a': {
    id: 'ex-int-2-3-a', lessonId: 'int-2-3', type: 'multiple-choice',
    question: 'Wann verwendet man die Partialbruchzerlegung?',
    options: [
      'Wenn man trigonometrische Funktionen integriert',
      'Wenn man gebrochen-rationale Funktionen integriert (Polynom/Polynom)',
      'Wenn man Exponentialfunktionen integriert',
      'Immer als ersten Schritt',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Methodenwahl — Partialbruchzerlegung ist spezifisch für rationale Funktionen.

**Rechnung:** Voraussetzung: Integrand der Form $\\dfrac{P(x)}{Q(x)}$ mit $\\deg(P) < \\deg(Q)$. Falls nicht, erst Polynomdivision. Der Bruch wird in einfachere Teilbrüche zerlegt, die einzeln integrierbar sind (meist $\\ln$-Funktionen).

**Probe:** Beispiel $\\dfrac{1}{(x-1)(x+2)}$ — typisches Szenario.

**Typischer Fehler:** Polynomdivision vergessen, wenn $\\deg(P) \\geq \\deg(Q)$.`,
    hints: [
      'Denke an Brüche mit Polynom im Zähler und Nenner.',
      'Bei $\\dfrac{1}{(x-1)(x+2)}$ etwa — wie integriert man das?',
      'Zerlegung in einfachere Teilbrüche der Form $\\dfrac{A}{x-a} + \\dfrac{B}{x-b}$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Für trigonometrische Funktionen gibt es eigene Techniken (Grundintegrale, Halbwinkelformeln, Substitution). Partialbruchzerlegung ist dagegen spezifisch für rationale Funktionen $\\dfrac{P(x)}{Q(x)}$ mit $\\deg(P) < \\deg(Q)$.',
      '2': 'Für $\\int e^{x}\\,dx$ oder $\\int e^{ax}\\,dx$ genügt das Grundintegral bzw. lineare Substitution. Partialbruchzerlegung ist die passende Methode für rationale Funktionen $\\dfrac{P(x)}{Q(x)}$.',
      '3': 'Nicht immer — sie ist nur sinnvoll, wenn der Integrand eine rationale Funktion $\\dfrac{P(x)}{Q(x)}$ ist. Für andere Formen (Produkte, Trigonometrie, Exponentialfunktionen) gibt es bessere Methoden.',
    },
  },
  'ex-int-2-3-b': {
    id: 'ex-int-2-3-b', lessonId: 'int-2-3', type: 'multiple-choice',
    question: '$\\int \\dfrac{1}{x^{2} - 1}\\,dx = \\int \\dfrac{1}{(x-1)(x+1)}\\,dx$. Welcher Ansatz ist korrekt?',
    options: [
      '$\\dfrac{1}{(x-1)(x+1)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}$',
      '$\\dfrac{1}{(x-1)(x+1)} = \\dfrac{A \\cdot x}{x-1} + \\dfrac{B \\cdot x}{x+1}$',
      '$\\dfrac{1}{(x-1)(x+1)} = \\dfrac{Ax + B}{x^{2} - 1}$',
      '$\\dfrac{1}{(x-1)(x+1)} = \\dfrac{A}{x^{2} - 1}$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Bei verschiedenen reellen Linearfaktoren im Nenner: ein Bruch pro Faktor, Zähler jeweils Konstante.

**Rechnung:**
- Ansatz: $\\dfrac{A}{x-1} + \\dfrac{B}{x+1}$.
- Multiplikation mit $(x-1)(x+1)$: $1 = A(x+1) + B(x-1)$.
- $x = 1$: $1 = 2A \\Rightarrow A = 1/2$.
- $x = -1$: $1 = -2B \\Rightarrow B = -1/2$.
- Integration: $\\dfrac{1}{2}\\ln|x-1| - \\dfrac{1}{2}\\ln|x+1| + C$.

**Probe:** $\\left(\\dfrac{1}{2}\\ln|x-1| - \\dfrac{1}{2}\\ln|x+1|\\right)' = \\dfrac{1}{2(x-1)} - \\dfrac{1}{2(x+1)} = \\dfrac{1}{x^{2}-1}$. ✓

**Typischer Fehler:** Ansatz $\\dfrac{Ax+B}{x^{2}-1}$ ist nur für irreduzible quadratische Faktoren richtig — hier ist $x^{2}-1$ aber reduzierbar!`,
    hints: [
      'Verschiedene Linearfaktoren $\\to$ ein Bruch pro Faktor.',
      'Zähler bei Linearfaktor: Konstante (nicht $Ax$).',
      'Ansatz: $\\dfrac{A}{x-1} + \\dfrac{B}{x+1}$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Bei Linearfaktoren im Nenner muss der Zähler eine Konstante sein — nicht $Ax$. Der Ansatz $\\dfrac{Ax}{x-1}$ ist unterbestimmt und ließe sich wieder kürzen. Richtig: $\\dfrac{A}{x-1} + \\dfrac{B}{x+1}$ mit Konstanten $A, B$.',
      '2': 'Der Ansatz $\\dfrac{Ax+B}{x^{2}-1}$ gilt nur für irreduzible quadratische Faktoren, also $x^{2}+px+q$ ohne reelle Nullstellen. $x^{2}-1 = (x-1)(x+1)$ ist aber zerlegbar — daher zwei einzelne Linearfaktoren.',
      '3': 'Der Ansatz $\\dfrac{A}{x^{2}-1}$ vereinfacht nichts — es wäre derselbe Nenner wie vorher, nur mit Konstante $A$. Partialbruchzerlegung zerlegt gerade den Nenner in seine Linearfaktoren: $\\dfrac{A}{x-1} + \\dfrac{B}{x+1}$.',
    },
  },
  'ex-int-2-3-c': {
    id: 'ex-int-2-3-c', lessonId: 'int-2-3', type: 'number-input',
    question: 'Partialbruchzerlegung: $\\dfrac{1}{(x-1)(x+1)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}$. Bestimme $A$. (Tipp: Setze $x = 1$ ein)',
    correctValue: 0.5,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Einsetzmethode — $x$ so wählen, dass einer der Koeffizienten wegfällt.

**Rechnung:**
- Multipliziere beide Seiten mit $(x-1)(x+1)$: $1 = A(x+1) + B(x-1)$.
- Setze $x = 1$: $1 = A \\cdot 2 + B \\cdot 0 = 2A \\Rightarrow A = 1/2 = 0{,}5$.
- Zur Kontrolle: Setze $x = -1$: $1 = A \\cdot 0 + B \\cdot (-2) = -2B \\Rightarrow B = -1/2$.

**Probe:** $\\dfrac{1/2}{x-1} + \\dfrac{-1/2}{x+1} = \\dfrac{(1/2)(x+1) + (-1/2)(x-1)}{(x-1)(x+1)} = \\dfrac{1}{(x-1)(x+1)}$. ✓

**Typischer Fehler:** Linke Seite $1 \\cdot (x-1)(x+1)$ multiplizieren — Aufpassen: links steht Bruch mit $1$ im Zähler, nach Multiplikation mit Hauptnenner bleibt nur die $1$ stehen.`,
    hints: [
      'Multipliziere beide Seiten mit dem Hauptnenner $(x-1)(x+1)$.',
      'Ergebnis: $1 = A(x+1) + B(x-1)$.',
      'Setze $x = 1$ ein, damit $B$ wegfällt: $1 = 2A \\Rightarrow A = 1/2$.',
    ],
  },
  'ex-int-2-3-mastery': {
    id: 'ex-int-2-3-mastery', lessonId: 'int-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $\\int \\dfrac{1}{x(x+1)}\\,dx = ?$',
    options: [
      '$\\ln|x| - \\ln|x+1| + C$',
      '$\\ln|x| + \\ln|x+1| + C$',
      '$\\ln|x \\cdot (x+1)| + C$',
      '$\\dfrac{1}{x} - \\dfrac{1}{x+1} + C$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Partialbruchzerlegung für Nenner $x(x+1)$.

**Rechnung:**
- Ansatz: $\\dfrac{1}{x(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x+1}$.
- Multiplizieren: $1 = A(x+1) + Bx$.
- $x = 0$: $1 = A \\Rightarrow A = 1$.
- $x = -1$: $1 = -B \\Rightarrow B = -1$.
- Integration: $\\int \\dfrac{1}{x}\\,dx - \\int \\dfrac{1}{x+1}\\,dx = \\ln|x| - \\ln|x+1| + C$.

**Probe:** Ableiten: $\\dfrac{1}{x} - \\dfrac{1}{x+1} = \\dfrac{x+1 - x}{x(x+1)} = \\dfrac{1}{x(x+1)}$. ✓

**Typischer Fehler:** Option D verwechselt Partialbruchzerlegung mit dem endgültigen Integrationsergebnis.`,
    hints: [
      'Ansatz: $\\dfrac{A}{x} + \\dfrac{B}{x+1}$. Bestimme $A$ und $B$.',
      'Einsetzen: $x = 0 \\Rightarrow A = 1$; $x = -1 \\Rightarrow B = -1$.',
      'Integration jedes Teilbruchs ergibt $\\ln$-Funktion.',
    ],
    wrongAnswerExplanations: {
      '1': 'Vorzeichenfehler: Aus $1 = A(x+1) + Bx$ folgt mit $x = -1$: $1 = -B$, also $B = -1$ (negativ). Damit ist $\\int -\\dfrac{1}{x+1}\\,dx = -\\ln|x+1|$, also insgesamt $\\ln|x| - \\ln|x+1| + C$.',
      '2': 'Logarithmenregel falsch angewendet: $\\ln|x| - \\ln|x+1| = \\ln\\left|\\dfrac{x}{x+1}\\right|$, nicht $\\ln|x(x+1)|$ (das wäre die Summe $\\ln|x| + \\ln|x+1|$). Richtig: $\\ln|x| - \\ln|x+1| + C$.',
      '3': 'Du hast die Partialbruchzerlegung nicht integriert, sondern stehen gelassen. Aus $\\int \\dfrac{1}{x}\\,dx = \\ln|x|$ und $\\int \\dfrac{1}{x+1}\\,dx = \\ln|x+1|$ ergibt sich $\\ln|x| - \\ln|x+1| + C$.',
    },
  },

  // ── Lesson 4: Gemischte Übungen ───────────────────────────────────────────
  'ex-int-2-4-a': {
    id: 'ex-int-2-4-a', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\int x \\cdot \\sin(x)\\,dx = ?$',
    options: ['$-x\\cos(x) + \\sin(x) + C$', '$x\\cos(x) - \\sin(x) + C$', '$-x\\cos(x) - \\sin(x) + C$', '$x\\sin(x) - \\cos(x) + C$'],
    correctIndex: 0,
    explanation: `**Ansatz:** LIATE — $u = x$ (A), $v' = \\sin(x)$ (T).

**Rechnung:**
- $u = x \\Rightarrow u' = 1$
- $v' = \\sin(x) \\Rightarrow v = -\\cos(x)$
- $\\int x\\sin(x)\\,dx = x \\cdot (-\\cos(x)) - \\int 1 \\cdot (-\\cos(x))\\,dx = -x\\cos(x) + \\int \\cos(x)\\,dx = -x\\cos(x) + \\sin(x) + C$.

**Probe:** $(-x\\cos(x) + \\sin(x))' = -\\cos(x) + x\\sin(x) + \\cos(x) = x\\sin(x)$. ✓

**Typischer Fehler:** Vorzeichenkette bei $v = -\\cos(x)$ — am besten explizit $\\int 1 \\cdot (-\\cos(x))\\,dx = -\\int \\cos(x)\\,dx$ rechnen.`,
    hints: [
      'Partielle Integration: $u = x$, $v\' = \\sin(x)$.',
      '$v = -\\cos(x)$. Dann: $-x\\cos(x) - \\int (-\\cos(x))\\,dx$.',
      '$- \\int -\\cos(x)\\,dx = +\\int \\cos(x)\\,dx = \\sin(x)$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast bei $v = -\\cos(x)$ das Minus vergessen (erster Term) und im zweiten Term das Vorzeichen falsch. Mit $v\' = \\sin(x) \\Rightarrow v = -\\cos(x)$: $x(-\\cos(x)) - \\int (-\\cos(x))\\,dx = -x\\cos(x) + \\sin(x) + C$.',
      '2': 'Die Vorzeichenkette stimmt nicht: Aus $-x\\cos(x) - \\int (-\\cos(x))\\,dx = -x\\cos(x) + \\int \\cos(x)\\,dx = -x\\cos(x) + \\sin(x) + C$. Der letzte Term ist $+\\sin$, nicht $-\\sin$.',
      '3': 'Du hast $v$ falsch gesetzt: $v\' = \\sin(x)$ ergibt $v = -\\cos(x)$, nicht $\\sin(x)$. Richtig: $-x\\cos(x) + \\sin(x) + C$.',
    },
  },
  'ex-int-2-4-b': {
    id: 'ex-int-2-4-b', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\int e^{2x}\\,dx = ?$',
    options: ['$e^{2x} + C$', '$\\dfrac{e^{2x}}{2} + C$', '$2 e^{2x} + C$', '$\\dfrac{e^{2x}}{x} + C$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Lineare Substitution $u = 2x$.

**Rechnung:**
- $u = 2x \\Rightarrow du = 2\\,dx \\Rightarrow dx = du/2$.
- $\\int e^{u} \\cdot \\dfrac{du}{2} = \\dfrac{1}{2}\\int e^{u}\\,du = \\dfrac{e^{u}}{2} + C = \\dfrac{e^{2x}}{2} + C$.

**Probe:** $\\left(\\dfrac{e^{2x}}{2}\\right)' = \\dfrac{e^{2x} \\cdot 2}{2} = e^{2x}$. ✓

**Typischer Fehler:** $e^{2x} + C$ (Faktor $1/2$ vergessen) oder $2e^{2x}$ (Faktor verkehrt herum — das wäre die Ableitung!).`,
    hints: [
      'Substitution $u = 2x$.',
      '$du = 2\\,dx \\Rightarrow dx = du/2$. Also Faktor $1/2$.',
      'Grundintegral: $\\int e^{u}\\,du = e^{u}$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Du hast den Faktor $\\dfrac{1}{2}$ aus $dx = du/2$ vergessen. Ableitung als Probe: $(e^{2x})\' = 2e^{2x}$, nicht $e^{2x}$. Mit $u = 2x$: $\\int e^{2x}\\,dx = \\dfrac{1}{2}\\int e^{u}\\,du = \\dfrac{e^{2x}}{2} + C$.',
      '2': 'Du hast abgeleitet statt integriert: $(e^{2x})\' = 2e^{2x}$, aber wir suchen die Stammfunktion. Mit $u = 2x$, $dx = du/2$: $\\int e^{2x}\\,dx = \\dfrac{e^{2x}}{2} + C$ (durch $2$ teilen, nicht mal $2$).',
      '3': 'Durch $x$ zu teilen gibt es keine Regel für — das kommt aus einer falsch erinnerten Potenzregel. Korrekt per Substitution $u = 2x$: $\\int e^{2x}\\,dx = \\dfrac{e^{2x}}{2} + C$.',
    },
  },
  'ex-int-2-4-c': {
    id: 'ex-int-2-4-c', lessonId: 'int-2-4', type: 'number-input',
    question: '[PRÜFUNG] Berechne: $\\int_{0}^{1} x \\cdot e^{x}\\,dx$ (Ergebnis auf 2 Nachkommastellen)',
    correctValue: 1.00,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Partielle Integration, dann Grenzen einsetzen.

**Rechnung:**
- $u = x$, $v' = e^{x}$, $u' = 1$, $v = e^{x}$.
- Stammfunktion: $xe^{x} - e^{x} = e^{x}(x - 1)$.
- $\\int_{0}^{1} xe^{x}\\,dx = [e^{x}(x-1)]_{0}^{1} = e^{1}(1-1) - e^{0}(0-1) = 0 - (-1) = 1$.

**Probe:** $F'(x) = (e^{x}(x-1))' = e^{x}(x-1) + e^{x} = xe^{x}$. ✓

**Typischer Fehler:** Grenzen mit $C$ einsetzen (unnötig) oder Vorzeichen bei $0 - (-1)$ verhauen.`,
    hints: [
      'Partielle Integration: $u = x$, $v\' = e^{x}$. Stammfunktion: $e^{x}(x-1)$.',
      'Grenzen einsetzen: $[e^{x}(x-1)]_{0}^{1} = e \\cdot 0 - 1 \\cdot (-1) = 1$.',
      'Achte auf das doppelte Minus: $0 - (-1) = 1$.',
    ],
  },
  'ex-int-2-4-d': {
    id: 'ex-int-2-4-d', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] Welche Methode ist am besten geeignet für $\\int \\sin^{2}(x)\\,dx$?',
    options: [
      'Substitution',
      'Partialbruchzerlegung',
      'Trigonometrische Identität: $\\sin^{2}(x) = \\dfrac{1 - \\cos(2x)}{2}$',
      'Direkte Integration mit Grundintegral',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** $\\sin^{2}(x)$ hat kein direktes Grundintegral — Halbwinkelformel nutzen.

**Rechnung:**
- Identität: $\\sin^{2}(x) = \\dfrac{1 - \\cos(2x)}{2}$.
- $\\int \\dfrac{1 - \\cos(2x)}{2}\\,dx = \\dfrac{x}{2} - \\dfrac{\\sin(2x)}{4} + C$.

**Probe:** $\\left(\\dfrac{x}{2} - \\dfrac{\\sin(2x)}{4}\\right)' = \\dfrac{1}{2} - \\dfrac{2\\cos(2x)}{4} = \\dfrac{1 - \\cos(2x)}{2} = \\sin^{2}(x)$. ✓

**Typischer Fehler:** Versuchen, $\\sin^{2}(x) = (\\sin(x))^{2}$ per Potenzregel zu integrieren — die gilt nur für $x^{n}$, nicht für Funktions-Potenzen!`,
    hints: [
      '$\\sin^{2}(x)$ hat kein direktes Grundintegral.',
      'Verwende eine Halbwinkel-Identität, um die Potenz loszuwerden.',
      '$\\sin^{2}(x) = (1 - \\cos(2x))/2$.',
    ],
    wrongAnswerExplanations: {
      '0': 'Substitution alleine hilft nicht: Weder $u = \\sin(x)$ noch $u = \\cos(x)$ führen zu einer sauberen Form (kein $\\cos(x)\\,dx$ oder $-\\sin(x)\\,dx$ als Faktor). Besser ist die Halbwinkelformel $\\sin^{2}(x) = \\dfrac{1 - \\cos(2x)}{2}$.',
      '1': 'Partialbruchzerlegung ist nur für rationale Funktionen $\\dfrac{P(x)}{Q(x)}$ gedacht — $\\sin^{2}(x)$ ist keine rationale Funktion. Stattdessen eignet sich die Halbwinkelformel $\\sin^{2}(x) = \\dfrac{1 - \\cos(2x)}{2}$.',
      '3': '$\\sin^{2}(x)$ hat kein direktes Grundintegral — die Potenzregel gilt nur für $x^{n}$, nicht für Funktionspotenzen. Man muss die Potenz erst per Halbwinkelformel $\\sin^{2}(x) = \\dfrac{1 - \\cos(2x)}{2}$ auflösen.',
    },
  },
  'ex-int-2-4-e': {
    id: 'ex-int-2-4-e', lessonId: 'int-2-4', type: 'multiple-choice',
    question: '[PRÜFUNG] $\\int \\dfrac{2x + 3}{x^{2} + 3x + 1}\\,dx = ?$ (Tipp: Zähler ist Ableitung des Nenners)',
    options: [
      '$\\ln|x^{2} + 3x + 1| + C$',
      '$(x^{2} + 3x + 1)^{2} + C$',
      '$\\dfrac{1}{x^{2} + 3x + 1} + C$',
      '$\\ln|2x + 3| + C$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Spezialfall der Substitution — wenn $\\text{Zähler} = \\dfrac{d}{dx}\\text{Nenner}$, dann ist das Integral $\\ln|\\text{Nenner}|$.

**Rechnung:**
- Ableitung des Nenners: $(x^{2} + 3x + 1)' = 2x + 3$ = Zähler! ✓
- Regel: $\\int \\dfrac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$.
- Ergebnis: $\\ln|x^{2} + 3x + 1| + C$.

**Probe:** $(\\ln|x^{2} + 3x + 1|)' = \\dfrac{2x + 3}{x^{2} + 3x + 1}$. ✓

**Typischer Fehler:** Partialbruchzerlegung versuchen (unnötig, wenn die $f'/f$-Struktur erkannt wird).`,
    hints: [
      'Berechne die Ableitung des Nenners: $(x^{2} + 3x + 1)\' = 2x + 3$.',
      'Das ist genau der Zähler — also Spezialfall $\\int f\'/f\\,dx$.',
      'Regel: $\\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$.',
    ],
    wrongAnswerExplanations: {
      '1': 'Du hast mit der Potenzregel multipliziert statt mit $\\ln$-Regel: Aus $\\int \\dfrac{f\'(x)}{f(x)}\\,dx$ wird $\\ln|f(x)| + C$, nicht $f(x)^{2}$. Ableitung von $(x^{2}+3x+1)^{2}$ wäre $2(x^{2}+3x+1)(2x+3)$, nicht das Gesuchte.',
      '2': 'Du hast die Substitution $u = f(x)$ falsch ausgewertet: $\\int \\dfrac{du}{u} = \\ln|u|$, nicht $\\dfrac{1}{u}$. Richtig: $\\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$.',
      '3': 'Du hast den Zähler direkt integriert, aber die Bruchstruktur ignoriert. Das Integral ist nicht $\\int (2x+3)\\,dx$, sondern $\\int \\dfrac{2x+3}{x^{2}+3x+1}\\,dx = \\ln|x^{2}+3x+1| + C$ (wegen $f\'/f$-Struktur).',
    },
  },
  'ex-int-2-4-mastery': {
    id: 'ex-int-2-4-mastery', lessonId: 'int-2-4', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Berechne: $\\int_{0}^{\\pi/2} x \\cdot \\cos(x)\\,dx$ (Ergebnis auf 2 Nachkommastellen)',
    correctValue: 0.57,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Partielle Integration mit $u = x$, $v' = \\cos(x)$. Danach Grenzen einsetzen.

**Rechnung:**
- $u = x$, $v' = \\cos(x)$, $u' = 1$, $v = \\sin(x)$.
- Stammfunktion: $x\\sin(x) - \\int \\sin(x)\\,dx = x\\sin(x) + \\cos(x)$.
- Grenzen: $[x\\sin(x) + \\cos(x)]_{0}^{\\pi/2}$.
- Bei $\\pi/2$: $(\\pi/2) \\cdot 1 + 0 = \\pi/2$.
- Bei $0$: $0 \\cdot 0 + 1 = 1$.
- Differenz: $\\pi/2 - 1 \\approx 1{,}5708 - 1 = 0{,}5708 \\approx 0{,}57$.

**Probe:** $(x\\sin(x) + \\cos(x))' = \\sin(x) + x\\cos(x) - \\sin(x) = x\\cos(x)$. ✓

**Typischer Fehler:** $\\sin(\\pi/2) = 0$ denken (falsch, es ist $1$) oder $\\cos(\\pi/2) = 1$ (falsch, es ist $0$).`,
    hints: [
      'Partielle Integration: $u = x$, $v\' = \\cos(x)$.',
      'Stammfunktion: $x\\sin(x) + \\cos(x)$.',
      'Bei $x = \\pi/2$: $\\sin = 1$, $\\cos = 0$. Ergebnis: $\\pi/2 - 1 \\approx 0{,}57$.',
    ],
  },
}

const lessons_int_u2 = [
  {
    id: 'int-2-1', unitId: 'int-unit-2',
    title: 'Substitution',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Substitutionsmethode verstehen und anwenden', 'Geeignete Substitution wählen'],
    subGoals: [
      { label: 'Formel: $\\int f(g(x)) g\'(x) dx = \\int f(u) du$ mit $u = g(x)$', examRelevance: 'hoch' },
      { label: 'Substitution wählen, wenn Ableitung $g\'(x)$ (bis auf Konstante) als Faktor im Integrand vorkommt', examRelevance: 'hoch' },
      { label: 'Bei bestimmtem Integral Grenzen mit substituieren: $x = a \\to u = g(a)$, analog $b$', examRelevance: 'hoch' },
      { label: 'Lineare Substitution $u = ax + b$: $du = a\\, dx$, sehr häufig in Prüfungen', examRelevance: 'hoch' },
      { label: 'Trigonometrische Substitution $x = \\sin u$ für $\\sqrt{1-x^2}$, $x = \\tan u$ für $1+x^2$', examRelevance: 'mittel' },
      { label: 'Standardformen: $\\int f\'(x)/f(x) dx = \\ln|f(x)| + C$ (logarithmische Ableitung)', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: 'int-2-2',
    steps: [
      {
        id: 'int-2-1-s1', type: 'explanation-intuitive', title: 'Substitution — die Kettenregel rückwärts',
        content: `Die **Substitution** ist die wichtigste Integrationstechnik. Sie ist die Umkehrung der **Kettenregel**.

**Analogie:** Stell dir vor, du hast eine Zwiebel. Die Kettenregel schält die Zwiebel Schicht für Schicht ab (äußere Ableitung · innere Ableitung). Die Substitution baut die Zwiebel wieder zusammen.

Bei der Kettenregel gilt: $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$

"Rückwärts gelesen" (= Integration): $\\int f'(g(x)) \\cdot g'(x)\\,dx = f(g(x)) + C$

Die Idee: Wenn im Integral ein Ausdruck $g(x)$ und gleichzeitig seine Ableitung $g'(x)$ vorkommt, können wir substituieren.`,
      },
      {
        id: 'int-2-1-s2', type: 'explanation-formal', title: 'Schritt-für-Schritt-Anleitung',
        content: `**Substitutionsregel:**

$$\\int f(g(x)) \\cdot g'(x)\\,dx \\;\\overset{u=g(x)}{=}\\; \\int f(u)\\,du$$

**Schritte:**

1. **Substitution wählen:** Setze $u = g(x)$ (ein geeigneter innerer Ausdruck)
2. **Ableitung berechnen:** $\\dfrac{du}{dx} = g'(x) \\;\\Rightarrow\\; du = g'(x)\\,dx$
3. **Ersetzen:** Schreibe das gesamte Integral nur in $u$ und $du$ um
4. **Integrieren:** Berechne $\\int f(u)\\,du$
5. **Rücksubstitution:** Ersetze $u$ wieder durch $g(x)$

**Beispiel:** $\\int 2x \\cdot e^{x^{2}}\\,dx$

1. $u = x^{2}$
2. $du = 2x\\,dx$ — perfekt, $2x\\,dx$ steht schon da!
3. $\\int e^{u}\\,du$
4. $= e^{u} + C$
5. $= e^{x^{2}} + C$

**Tipp:** Die Substitution funktioniert am besten, wenn die Ableitung des gewählten $u$ bereits als Faktor im Integral vorkommt (eventuell bis auf eine Konstante).`,
      },
      { id: 'int-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-1-a' },
      { id: 'int-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-1-b' },
      { id: 'int-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-2-1-c' },
      { id: 'int-2-1-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-2-1-d' },
      { id: 'int-2-1-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-1-mastery' },
    ],
  },
  {
    id: 'int-2-2', unitId: 'int-unit-2',
    title: 'Partielle Integration',
    order: 2, estimatedMinutes: 18,
    learningGoals: ['Partielle Integration anwenden', 'LIATE-Regel für die Wahl von u kennen'],
    subGoals: [
      { label: 'Formel: $\\int u v\' dx = uv - \\int u\' v dx$ (aus Produktregel hergeleitet)', examRelevance: 'hoch' },
      { label: 'LIATE-Regel: **L**og, **I**nv.Trig, **A**lgebr., **T**rig, **E**xp — davor stehende wird $u$', examRelevance: 'hoch' },
      { label: 'Spezialtrick $\\int \\ln x\\, dx$: setze $u = \\ln x$, $v\' = 1$', examRelevance: 'hoch' },
      { label: 'Mehrfache Anwendung bei $\\int x^n e^x dx$ (Grad halbieren pro Schritt)', examRelevance: 'mittel' },
      { label: 'Kreisintegrale $\\int e^x \\sin x\\, dx$: nach 2 Anwendungen nach Originalintegral auflösen', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'int-2-3',
    steps: [
      {
        id: 'int-2-2-s1', type: 'explanation-intuitive', title: 'Produkte integrieren',
        content: `Was tun, wenn ein **Produkt zweier Funktionen** integriert werden soll? Zum Beispiel $\\int x \\cdot e^{x}\\,dx$?

Hier hilft weder Substitution noch ein Grundintegral. Wir brauchen die **partielle Integration** (auch: Produktintegration).

Die Idee: Wir kennen die Produktregel der Ableitung:
$$(u \\cdot v)' = u' \\cdot v + u \\cdot v'$$

Integrieren wir beide Seiten:
$$u \\cdot v = \\int u' \\cdot v\\,dx + \\int u \\cdot v'\\,dx$$

Umgestellt:
$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$

**Ziel:** Wir tauschen ein "schwieriges" Integral gegen ein "einfacheres" ein.`,
      },
      {
        id: 'int-2-2-s2', type: 'explanation-formal', title: 'LIATE-Regel und Formel',
        content: `**Formel der partiellen Integration:**

$$\\int u \\cdot v'\\,dx = u \\cdot v - \\int u' \\cdot v\\,dx$$

**Die LIATE-Regel** hilft bei der Wahl von $u$:

Wähle als $u$ die Funktion, die in der folgenden Liste **zuerst** vorkommt:
- **L** = Logarithmische Funktionen ($\\ln x$, $\\log x$)
- **I** = Inverse trigonometrische Funktionen ($\\arcsin x$, $\\arctan x$)
- **A** = Algebraische Funktionen ($x$, $x^{2}$, $x^{3}$, ...)
- **T** = Trigonometrische Funktionen ($\\sin x$, $\\cos x$)
- **E** = Exponentialfunktionen ($e^{x}$, $2^{x}$)

**Beispiel:** $\\int x \\cdot e^{x}\\,dx$
- $x$ ist algebraisch (A), $e^{x}$ ist exponentiell (E)
- A kommt vor E $\\to$ wähle $u = x$, $v' = e^{x}$
- $u' = 1$, $v = e^{x}$
- $= x \\cdot e^{x} - \\int 1 \\cdot e^{x}\\,dx = x \\cdot e^{x} - e^{x} + C = e^{x}(x - 1) + C$

**Beispiel:** $\\int \\ln(x)\\,dx$
- Setze $u = \\ln(x)$, $v' = 1$
- $u' = 1/x$, $v = x$
- $= x \\cdot \\ln(x) - \\int x \\cdot (1/x)\\,dx = x\\ln(x) - x + C$`,
      },
      { id: 'int-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-2-a' },
      { id: 'int-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-2-b' },
      { id: 'int-2-2-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-int-2-2-c' },
      { id: 'int-2-2-s6', type: 'exercise', title: 'Aufgabe 4', exerciseRef: 'ex-int-2-2-d' },
      { id: 'int-2-2-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-2-mastery' },
    ],
  },
  {
    id: 'int-2-3', unitId: 'int-unit-2',
    title: 'Partialbruchzerlegung',
    order: 3, estimatedMinutes: 16,
    learningGoals: ['Gebrochen-rationale Funktionen integrieren', 'Partialbruchzerlegung aufstellen'],
    subGoals: [
      { label: 'Voraussetzung: $\\deg(\\text{Zähler}) < \\deg(\\text{Nenner})$ (sonst Polynomdivision zuerst)', examRelevance: 'hoch' },
      { label: 'Einfacher Linearfaktor $(x-a)$: Ansatz $A/(x-a)$', examRelevance: 'hoch' },
      { label: 'Doppelter Linearfaktor $(x-a)^2$: Ansatz $A/(x-a) + B/(x-a)^2$', examRelevance: 'hoch' },
      { label: 'Irreduzibler quadr. Faktor $x^2+px+q$: Ansatz $(Ax+B)/(x^2+px+q)$', examRelevance: 'hoch' },
      { label: 'Koeffizienten via Einsetzmethode (Nullstellen) oder Koeffizientenvergleich', examRelevance: 'hoch' },
      { label: 'Integration: $\\int dx/(x-a) = \\ln|x-a|$, $\\int dx/(x-a)^n = -1/((n-1)(x-a)^{n-1})$', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: 'int-2-4',
    steps: [
      {
        id: 'int-2-3-s1', type: 'explanation-formal', title: 'Integration rationaler Funktionen',
        content: `**Problem:** Wie integriert man einen Bruch wie $\\dfrac{1}{x^{2} - 1}$?

**Idee:** Zerlege den Bruch in einfachere Teilbrüche, die man einzeln integrieren kann.

**Voraussetzung:** Der Grad des Zählers muss **kleiner** sein als der Grad des Nenners. Falls nicht: zuerst Polynomdivision durchführen.

**Schritt 1 — Nenner faktorisieren:**
$$x^{2} - 1 = (x-1)(x+1)$$

**Schritt 2 — Ansatz aufstellen:**
$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

**Schritt 3 — Koeffizienten bestimmen:**
Multipliziere beide Seiten mit $(x-1)(x+1)$:
$$1 = A(x+1) + B(x-1)$$

Einsetzmethode:
- $x = 1$: $1 = 2A \\Rightarrow A = \\dfrac{1}{2}$
- $x = -1$: $1 = -2B \\Rightarrow B = -\\dfrac{1}{2}$

**Schritt 4 — Integrieren:**
$$\\int \\frac{dx}{x^{2}-1} = \\frac{1}{2}\\int \\frac{dx}{x-1} - \\frac{1}{2}\\int \\frac{dx}{x+1} = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$

**Ansätze für verschiedene Nennertypen:**
- Verschiedene Linearfaktoren $(x-a)(x-b)$: $\\dfrac{A}{x-a} + \\dfrac{B}{x-b}$
- Doppelter Linearfaktor $(x-a)^{2}$: $\\dfrac{A}{x-a} + \\dfrac{B}{(x-a)^{2}}$
- Irreduzibler quadratischer Faktor $x^{2}+px+q$: $\\dfrac{Ax+B}{x^{2}+px+q}$`,
      },
      { id: 'int-2-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-int-2-3-a' },
      { id: 'int-2-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-int-2-3-b' },
      { id: 'int-2-3-s4', type: 'exercise', title: 'Aufgabe 3 — Zahleneingabe', exerciseRef: 'ex-int-2-3-c' },
      { id: 'int-2-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-3-mastery' },
    ],
  },
  {
    id: 'int-2-4', unitId: 'int-unit-2',
    title: 'Gemischte Übungen',
    order: 4, estimatedMinutes: 20,
    learningGoals: ['Integrationstechnik selbständig erkennen und anwenden', 'Prüfungsaufgaben lösen'],
    subGoals: [
      { label: 'Zähler = Ableitung des Nenners → direkte Stammfunktion $\\ln|f|$ (ohne Substitution)', examRelevance: 'hoch' },
      { label: 'Halbwinkelformeln für $\\sin^2 x = (1 - \\cos 2x)/2$, $\\cos^2 x = (1 + \\cos 2x)/2$', examRelevance: 'hoch' },
      { label: 'Substitutionen $t = \\tan(x/2)$ (Weierstraß) für rationale trigonometrische Ausdrücke', examRelevance: 'niedrig' },
      { label: 'Fourier-Orthogonalität: $\\int_0^{2\\pi} \\sin(nx) \\cos(mx) dx = 0$, nützliche Muster', examRelevance: 'mittel' },
      { label: 'Integrationsstrategie wählen **vor** dem Rechnen — 10 s nachdenken spart 10 Minuten', examRelevance: 'hoch' },
    ],
    prerequisites: [],
    nextLessonId: 'int-3-1',
    steps: [
      {
        id: 'int-2-4-s1', type: 'explanation-formal', title: 'Strategie: Welche Methode wann?',
        content: `**Erkennungsmuster in Prüfungen:**

| Muster | Methode |
|--------|---------|
| Innerer Ausdruck, dessen Ableitung im Integral steht | **Substitution** |
| Produkt Polynom · $e^{x}$ / $\\sin/\\cos$ / $\\ln$ | **Partielle Integration** (LIATE) |
| Bruch mit Polynom/Polynom, $\\deg(Z) < \\deg(N)$ | **Partialbruchzerlegung** |
| $\\sin^{2}(x)$ oder $\\cos^{2}(x)$ | **Halbwinkelformel** |
| Zähler = Ableitung des Nenners | $\\int \\dfrac{f'}{f}\\,dx = \\ln\\lvert f\\rvert + C$ |
| Linearer Ausdruck im Argument ($\\cos(3x)$, $e^{2x}$) | **Lineare Substitution** $u = ax+b$ |

**Prüfungsfalle:** Immer erst kurz überlegen *welche* Methode passt — nicht sofort anfangen zu rechnen!`,
      },
      { id: 'int-2-4-s2', type: 'exercise', title: 'Aufgabe 1 — Partielle Integration', exerciseRef: 'ex-int-2-4-a' },
      { id: 'int-2-4-s3', type: 'exercise', title: 'Aufgabe 2 — Substitution', exerciseRef: 'ex-int-2-4-b' },
      { id: 'int-2-4-s4', type: 'exercise', title: 'Aufgabe 3 — Bestimmtes Integral', exerciseRef: 'ex-int-2-4-c' },
      { id: 'int-2-4-s5', type: 'exercise', title: 'Aufgabe 4 — Strategie', exerciseRef: 'ex-int-2-4-d' },
      { id: 'int-2-4-s6', type: 'exercise', title: 'Aufgabe 5 — Erkennen', exerciseRef: 'ex-int-2-4-e' },
      { id: 'int-2-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-int-2-4-mastery' },
    ],
  },
]

export const int_unit2 = {
  id: 'int-unit-2',
  title: 'Integrationstechniken',
  order: 2,
  description: 'Substitution, partielle Integration, Partialbruchzerlegung und gemischte Übungen',
  unitGoals: [
    'Substitutionsregel — innere Funktion $u = g(x)$ identifizieren und $du = g\'(x) dx$ ersetzen',
    'Partielle Integration $\\int u\'v = uv - \\int u v\'$ — strategisch $u\'$ und $v$ wählen (Merkhilfe: LIATE)',
    'Partialbruchzerlegung bei rationalen Funktionen: echte Brüche auftrennen, einfache Stammfunktionen integrieren',
    'Bei geschachtelten Integralen die passende Technik in 1–2 Sekunden erkennen',
  ],
  lessons: lessons_int_u2,
  exercises: exercises_int_u2,
}
