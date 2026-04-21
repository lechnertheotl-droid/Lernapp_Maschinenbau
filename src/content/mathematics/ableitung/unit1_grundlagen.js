// ── Ableitung Unit 1: Grundbegriffe der Differentialrechnung ──────────────────

export const exercises_abl_u1 = {
  // ───────────── Lektion 1: Was ist eine Ableitung? ─────────────
  'ex-abl-1-1-a': {
    id: 'ex-abl-1-1-a', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Was beschreibt die Ableitung $f\'(x)$ geometrisch?',
    options: [
      'Die Fläche unter der Kurve',
      'Die Steigung der Tangente an $f(x)$ im Punkt $x$',
      'Den $y$-Achsenabschnitt',
      'Den Scheitelpunkt der Kurve',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Die Fläche unter der Kurve ist das *Integral* $\\int f(x)\\,dx$, nicht die Ableitung. Ableiten und Integrieren sind zueinander inverse Operationen — die Ableitung misst die Steigung, nicht die Fläche.',
      2: 'Der $y$-Achsenabschnitt ist einfach $f(0)$ — ein einzelner Funktionswert, keine Steigung. Die Ableitung $f\'(x)$ ist hingegen die Steigung der Tangente in $x$ und ändert sich im Allgemeinen mit $x$.',
      3: 'Der Scheitelpunkt ist ein spezieller Punkt (z.B. Extremum einer Parabel), aber kein Konzept der Ableitung allgemein. $f\'(x)$ beschreibt an *jeder* Stelle $x$ die Tangentensteigung — am Scheitelpunkt ist diese zufällig $0$, aber das ist nur ein Einzelfall.',
    },
    explanation: `**Ansatz:** Die Ableitung misst die *momentane Änderungsrate* — geometrisch ist das die Steigung der Tangente.

**Rechnung:** $f'(x_0)$ liefert die Steigung der Geraden, die die Kurve $y = f(x)$ im Punkt $(x_0, f(x_0))$ berührt (Tangente). Sie wird über den Grenzwert des Differenzenquotienten definiert: $f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}$.

**Probe:** Für $f(x) = x^{2}$ im Punkt $x_0 = 1$ ist $f'(1) = 2$. Die Tangente lautet $y = 2(x-1) + 1 = 2x - 1$ und berührt die Parabel in $(1,1)$. ✓

**Typischer Fehler:** Verwechslung mit dem Integral (Fläche unter der Kurve) oder mit dem Funktionswert $f(x_0)$ selbst.`,
    hints: [
      'Welcher Begriff beschreibt eine Gerade, die eine Kurve *in einem Punkt* berührt?',
      'Regel: $f\'(x_0)$ ist die Steigung der Tangente in $x_0$ — nicht die Fläche (das wäre das Integral).',
      'Tangentensteigung = $\\lim_{h\\to 0}\\dfrac{f(x_0+h)-f(x_0)}{h}$.',
    ],
  },
  'ex-abl-1-1-b': {
    id: 'ex-abl-1-1-b', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Der Differenzenquotient $\\dfrac{f(x+h) - f(x)}{h}$ beschreibt für $h \\to 0$:',
    options: [
      'Die mittlere Steigung auf $[x, x+h]$',
      'Die momentane Steigung (Ableitung) in $x$',
      'Den Wert von $f$ in $x$',
      'Die Fläche unter $f$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Die mittlere Steigung auf $[x, x+h]$ ist der Differenzenquotient *ohne* Grenzübergang — also für endliches $h$. Der entscheidende Zusatz „für $h \\to 0$" macht aus der Sekantensteigung (mittlere Steigung) die Tangentensteigung (momentane Steigung).',
      2: 'Der Funktionswert $f(x)$ taucht zwar im Zähler auf, wird aber mit $f(x+h)$ verrechnet und durch $h$ geteilt. Der Differenzenquotient misst eine Steigung (Veränderung pro Einheit $x$), nicht den Funktionswert selbst.',
      3: 'Die Fläche unter $f$ ist das Integral $\\int f(x)\\,dx$ und entsteht aus einem Grenzwert von Riemann-*Summen*, nicht aus einem Differenzenquotienten. Differenzen im Zähler $\\Rightarrow$ Steigung, Summen $\\Rightarrow$ Fläche.',
    },
    explanation: `**Ansatz:** Für endliches $h$ ist der Differenzenquotient die *mittlere* Steigung (Sekante). Für $h \\to 0$ werden die beiden Punkte identisch — Sekante wird Tangente.

**Rechnung:** $f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$ (Differentialquotient).

**Probe:** Für $f(x) = x^{2}$: $\\dfrac{(x+h)^{2} - x^{2}}{h} = \\dfrac{2xh + h^{2}}{h} = 2x + h \\to 2x$ für $h \\to 0$. Das ist genau $f'(x) = 2x$. ✓

**Typischer Fehler:** Die Antwort "mittlere Steigung" stimmt nur für *endliches* $h$. Der Grenzübergang macht daraus die momentane Steigung.`,
    hints: [
      'Was passiert geometrisch, wenn die beiden Stützpunkte $x$ und $x+h$ zusammenrücken?',
      'Regel: $\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h} = f\'(x)$ — das ist die Definition der Ableitung.',
      'Sekante wird zur Tangente, Mittelsteigung wird Momentansteigung.',
    ],
  },
  'ex-abl-1-1-c': {
    id: 'ex-abl-1-1-c', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'An welcher Stelle ist $f\'(x) = 0$ eine **notwendige** Bedingung?',
    options: [
      'An Nullstellen von $f$ (also wo $f(x) = 0$)',
      'An lokalen Maxima und Minima von $f$',
      'Überall dort, wo $f$ wächst',
      'An Sprungstellen von $f$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Hier werden Nullstellen ($f(x)=0$) mit Extremstellen ($f\'(x)=0$) verwechselt — zwei verschiedene Bedingungen an zwei verschiedenen Funktionen. Beispiel: $f(x)=x^2-4$ hat Nullstellen bei $x=\\pm 2$ (dort ist $f=0$, aber $f\'=\\pm 4\\ne 0$), und ein Minimum bei $x=0$ (dort ist $f\'=0$, aber $f=-4\\ne 0$).',
      2: 'Dort wo $f$ wächst, ist $f\'(x) > 0$ (positive Steigung), nicht $f\'(x)=0$. Die Ableitung ist nur an den „Umkehrpunkten" $0$ — dort wo Wachstum in Fallen umschlägt oder umgekehrt, also an Extrema.',
      3: 'An Sprungstellen ist $f$ gar nicht differenzierbar — die Ableitung $f\'(x)$ existiert dort nicht, ist also weder $0$ noch sonst eine Zahl. Die Bedingung $f\'(x)=0$ setzt voraus, dass $f\'$ an dieser Stelle überhaupt definiert ist.',
    },
    explanation: `**Ansatz:** An einem lokalen Hoch- oder Tiefpunkt verläuft die Tangente horizontal — also Steigung $0$.

**Rechnung:** $f'(x_0) = 0$ ist die *notwendige* Bedingung für ein lokales Extremum (Satz von Fermat). Umgekehrt gilt nicht jede Stelle mit $f'(x_0)=0$ als Extremum (Sattelpunkte wie bei $f(x) = x^{3}$).

**Probe:** $f(x) = x^{2} - 4$ hat bei $x=0$ ein Minimum. $f'(x) = 2x$, $f'(0) = 0$. ✓

**Typischer Fehler:** Nullstellen ($f(x)=0$) mit Extremstellen ($f'(x)=0$) verwechseln — zwei völlig verschiedene Bedingungen.`,
    hints: [
      'An welcher Stelle verläuft eine Tangente waagerecht?',
      'Regel: Waagerechte Tangente $\\Leftrightarrow$ Steigung $= 0 \\Leftrightarrow f\'(x) = 0$.',
      'Wende dies auf $f(x) = x^{2}$ im Scheitel an.',
    ],
  },
  'ex-abl-1-1-transfer': {
    id: 'ex-abl-1-1-transfer', lessonId: 'abl-1-1', type: 'multiple-choice',
    question: 'Warum ist die Bedingung $f\'(x_0) = 0$ *notwendig*, aber *nicht hinreichend* für ein lokales Extremum?',
    options: [
      'Weil man zusätzlich $f(x_0) = 0$ prüfen muss',
      'Weil es Stellen mit waagerechter Tangente gibt, die keine Extrema sind (Sattelpunkte)',
      'Weil $f\'\'$ immer negativ sein muss',
      'Weil Extrema nur am Rand vorkommen',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: '$f(x_0)=0$ ist die Bedingung für eine *Nullstelle*, nicht für ein Extremum. Eine Funktion kann an einer beliebigen Höhe ein Extremum haben — z.B. hat $f(x)=x^2+5$ ein Minimum bei $x=0$ mit Wert $5$, also $f(0)=5\\ne 0$.',
      2: 'Die zweite Ableitung muss keineswegs „immer negativ" sein. $f\'\'<0$ bedeutet nur Maximum, $f\'\'>0$ Minimum — beide kommen als Extrema vor. Außerdem geht es bei der Frage um die Unterscheidung *notwendig/hinreichend*, nicht um die Art des Extremums.',
      3: 'Extrema können sowohl im Inneren des Definitionsbereichs (dort gilt $f\'(x_0)=0$) als auch am Rand vorkommen — und *innere* Extrema sind der Standardfall. Die Aussage ignoriert den Satz von Fermat, um den es hier geht.',
    },
    explanation: `**Ansatz:** Eine notwendige Bedingung muss erfüllt sein, schließt aber andere Fälle nicht aus. Geometrisch bedeutet $f'(x_0)=0$ nur "waagerechte Tangente" — das kann auch ein Sattelpunkt sein.

**Rechnung:** Gegenbeispiel $f(x) = x^{3}$: $f'(x) = 3x^{2}$, $f'(0) = 0$, aber $f$ wächst streng monoton — also *kein* Extremum. Der Sattelpunkt erfüllt die notwendige Bedingung, ist aber weder Maximum noch Minimum.

**Probe:** $f(x) = x^{3}$ bei $x=0$: $f(-0{,}1) = -0{,}001 < f(0) = 0 < f(0{,}1) = 0{,}001$. Also streng steigend um $0$, kein Extremum. ✓

**Typischer Fehler:** "$f'(x_0) = 0$ $\\Rightarrow$ Extremum" ist falsch. Man braucht eine *hinreichende* Zusatzbedingung — z.B. $f''(x_0) \\neq 0$ oder Vorzeichenwechsel von $f'$.

**Transfer:** Diese Unterscheidung "notwendig vs. hinreichend" ist in der gesamten Kurvendiskussion zentral — sie trennt Kandidaten von echten Lösungen.`,
    hints: [
      'Welche Funktion hat bei $x=0$ die Ableitung $0$, aber kein Extremum?',
      'Denke an $f(x) = x^{3}$ — hier ist $f\'(0)=0$, aber die Funktion steigt durchgehend.',
      'Solche Stellen heißen Sattelpunkte (Terrassenpunkte).',
    ],
  },
  'ex-abl-1-1-mastery': {
    id: 'ex-abl-1-1-mastery', lessonId: 'abl-1-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Für eine Funktion $f$ gilt: $f\'(2) = 0$ und $f\'\'(2) > 0$. Was folgt daraus?',
    options: [
      '$f$ hat bei $x = 2$ ein lokales Minimum',
      '$f$ hat bei $x = 2$ ein lokales Maximum',
      '$f$ hat bei $x = 2$ einen Wendepunkt',
      'Aus diesen Daten folgt nichts',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Vorzeichen verwechselt: $f\'\'(x_0)>0$ heißt Linkskrümmung („Kurve lächelt") $\\Rightarrow$ **Minimum**. Ein Maximum hätte $f\'\'(x_0)<0$ (Rechtskrümmung, „Kurve traurig").',
      2: 'Für einen Wendepunkt wäre $f\'\'(x_0)=0$ mit Vorzeichenwechsel nötig — hier ist aber $f\'\'(2)>0$ gegeben, also liegt *keine* verschwindende zweite Ableitung vor. Die Bedingungen $f\'=0$ und $f\'\'>0$ sind die klassische Min-Diagnose.',
      3: 'Doch, das reicht! Der hinreichende $f\'\'$-Test besagt: $f\'(x_0)=0$ und $f\'\'(x_0)>0$ $\\Rightarrow$ lokales Minimum. Beispiel $f(x)=(x-2)^2$: $f\'(2)=0$, $f\'\'(2)=2>0$, und das Minimum ist eindeutig bei $x=2$.',
    },
    explanation: `**Ansatz:** Zusammenspiel von $f'$ (notwendige Bedingung) und $f''$ (hinreichende Bedingung) für Extrema.

**Regel:**
- $f'(x_0) = 0$: **notwendig** für ein Extremum (waagerechte Tangente, aber auch Sattelpunkt möglich).
- $f''(x_0) > 0$: Funktion ist dort **linksgekrümmt** → die waagerechte Tangente muss ein **Tiefpunkt** sein (Minimum).
- $f''(x_0) < 0$ hingegen → Maximum.
- $f''(x_0) = 0$ → Test versagt, man muss anders prüfen.

**Bildlich:** $f''>0$ heißt, die Kurve „lächelt" — eine waagerechte Tangente im lächelnden Teil ist der Tiefpunkt.

**Probe:** $f(x) = (x-2)^2$ bei $x=2$: $f'(2) = 0$, $f''(2) = 2 > 0$ ✓ — und tatsächlich Minimum.

**Typischer Fehler:** $f''>0$ mit Maximum verwechseln. Merksatz: „$f'' > 0$ $\\Rightarrow$ Minimum" (positive Krümmung $=$ Tal).`,
    hints: [
      'Erst $f\'$: waagerechte Tangente = notwendige Bedingung für Extremum.',
      '$f\'\' > 0$: Krümmung nach oben (Kurve lächelt). Was liegt dann im Tangentenpunkt?',
      'Tiefpunkt! $f\'\'>0$ $\\Rightarrow$ Minimum.',
    ],
  },

  // ───────────── Lektion 2: Potenzregel und Summenregel ─────────────
  'ex-abl-1-2-a': {
    id: 'ex-abl-1-2-a', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: 'Was ist $(x^{n})\'$?',
    options: ['$x^{n-1}$', '$n \\cdot x^{n-1}$', '$(n+1) \\cdot x^{n}$', '$n \\cdot x^{n}$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Der Exponent wurde zwar korrekt um $1$ reduziert, aber der Vorfaktor $n$ fehlt. Die Potenzregel ist „Exponent nach vorn *und* um $1$ reduzieren" — beides gleichzeitig. Test: $(x^3)\' = 3x^2$, nicht $x^2$.',
      2: 'Hier wurde der Exponent nicht reduziert, sondern *erhöht* ($n+1$), und der Vorfaktor stimmt ebenfalls nicht. Das entspricht eher dem Muster einer *Stammfunktion* $\\int x^n\\,dx = \\tfrac{1}{n+1}x^{n+1}$ — also dem Gegenteil der Ableitung.',
      3: 'Klassischer Fehler: Vorfaktor korrekt ($n$), aber der Exponent wurde nicht um $1$ reduziert. Test bei $f(x)=x^3$: richtig ist $3x^2$, nicht $3x^3$ — sonst wäre die Ableitung schneller gewachsen als die Funktion selbst.',
    },
    explanation: `**Ansatz:** Die Potenzregel ist *die* Grundformel der Differentialrechnung für Monome.

**Rechnung:** $(x^{n})' = n \\cdot x^{n-1}$ — der Exponent "wandert nach vorn" (wird zum Vorfaktor), und der neue Exponent ist um $1$ kleiner.

**Probe:** $(x^{3})' = 3x^{2}$. Numerisch bei $x=2$: $f(2) = 8$, $f(2{,}001) \\approx 8{,}0120$, also Sekantensteigung $\\approx 12 = 3 \\cdot 2^{2}$. ✓

**Typischer Fehler:** Exponent unverändert lassen ($x^{n-1}$) oder mit dem alten Exponenten multiplizieren ($n\\cdot x^{n}$).`,
    hints: [
      'Welche Regel beschreibt die Ableitung einer Potenz $x^{n}$?',
      'Regel: $(x^{n})\' = n \\cdot x^{n-1}$ — Exponent nach vorne, dann um 1 reduzieren.',
      'Test: Für $n=3$ muss $(x^{3})\' = 3x^{2}$ herauskommen.',
    ],
  },
  'ex-abl-1-2-b': {
    id: 'ex-abl-1-2-b', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: '$f(x) = 3x^{2} + 5x - 2$. Was ist $f\'(x)$?',
    options: ['$6x + 5$', '$3x + 5$', '$6x^{2} + 5$', '$6x - 2$'],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Bei $(3x^2)\'$ wurde der Exponent nicht durch den Vorfaktor multipliziert: Die Potenzregel liefert $3\\cdot 2x = 6x$, nicht $3x$. Vermutlich wurde nur der Exponent nach unten „geschoben" ohne den $2$ als Faktor einzubeziehen.',
      2: 'Hier wurde der Exponent *nicht reduziert*: $(3x^2)\' = 6x$ (Exponent um $1$ verringert), nicht $6x^2$. Typischer Flüchtigkeitsfehler — Vorfaktor korrekt berechnet, aber das $x^2$ stehen gelassen.',
      3: 'Die Konstante $-2$ wurde nicht abgeleitet — sie muss zu $0$ werden ($(c)\'=0$). Außerdem fehlt der Beitrag $(5x)\'=5$. Richtig: Konstante verschwindet, linearer Term gibt den Vorfaktor $5$, quadratischer Term gibt $6x$.',
    },
    explanation: `**Ansatz:** Summenregel + Faktorregel + Potenzregel: Jeder Summand wird einzeln abgeleitet, konstante Faktoren bleiben, Konstanten fallen weg.

**Rechnung:**
- $(3x^{2})' = 3 \\cdot 2x = 6x$
- $(5x)' = 5$
- $(-2)' = 0$
- Zusammen: $f'(x) = 6x + 5$.

**Probe:** Bei $x = 1$: Sekantensteigung $\\dfrac{f(1{,}001)-f(1)}{0{,}001} \\approx \\dfrac{6{,}011\\ldots - 6}{0{,}001} \\approx 11{,}003 \\approx 11 = 6 \\cdot 1 + 5$. ✓

**Typischer Fehler:** Die Konstante $-2$ wird gelegentlich als $-2$ übernommen statt auf $0$ abzuleiten.`,
    hints: [
      'Welche Regel gilt für Summen? Leite jedes Glied einzeln ab.',
      'Potenzregel: $(3x^{2})\' = 6x$, Faktorregel: $(5x)\' = 5$.',
      'Eine Konstante ($-2$) hat Ableitung $0$.',
    ],
  },
  'ex-abl-1-2-c': {
    id: 'ex-abl-1-2-c', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: '$f(x) = \\sqrt{x} = x^{1/2}$. Was ist $f\'(x)$?',
    options: ['$\\dfrac{1}{2\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\dfrac{\\sqrt{x}}{2}$', '$\\dfrac{1}{\\sqrt{x}}$'],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Das ist die doppelte *Funktion selbst*, nicht die Ableitung. Vermutlich wurde $\\tfrac{1}{2}$ als Vorfaktor übernommen, aber beim Exponenten $\\tfrac{1}{2}-1=-\\tfrac{1}{2}$ falsch gerechnet und $x^{1/2}$ wieder erhalten — statt eines Kehrwerts.',
      2: 'Hier wurde die Wurzel beibehalten statt den Exponenten um $1$ zu reduzieren. Richtig ist $\\tfrac{1}{2}\\cdot x^{1/2-1} = \\tfrac{1}{2}x^{-1/2} = \\tfrac{1}{2\\sqrt{x}}$ — das $x^{-1/2}$ bedeutet $\\sqrt{x}$ muss *in den Nenner* wandern.',
      3: 'Der Vorfaktor $\\tfrac{1}{2}$ aus der Potenzregel wurde vergessen. $(x^{1/2})\' = \\tfrac{1}{2}\\cdot x^{-1/2}$ — der halbe Exponent bleibt als Vorfaktor erhalten. Test bei $x=4$: richtig $\\tfrac{1}{4}$, falsch $\\tfrac{1}{2}$.',
    },
    explanation: `**Ansatz:** Wurzel als Potenz mit gebrochenem Exponenten schreiben, dann Potenzregel.

**Rechnung:** $f(x) = x^{1/2}$. Potenzregel mit $n = \\tfrac{1}{2}$:
$$f'(x) = \\tfrac{1}{2} \\cdot x^{1/2 - 1} = \\tfrac{1}{2} \\cdot x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}.$$

**Probe:** Bei $x = 4$: $f'(4) = \\dfrac{1}{2 \\cdot 2} = \\tfrac{1}{4} = 0{,}25$. Numerisch: $\\dfrac{\\sqrt{4{,}001}-\\sqrt{4}}{0{,}001} \\approx 0{,}25$. ✓

**Typischer Fehler:** Vergessen, dass $\\tfrac{1}{2} - 1 = -\\tfrac{1}{2}$ ist, also Kehrwert-Form entsteht.`,
    hints: [
      'Welche Funktionstyp liegt vor? Schreibe $\\sqrt{x} = x^{1/2}$ und wende die Potenzregel an.',
      'Regel: $(x^{n})\' = n \\cdot x^{n-1}$ mit $n = \\tfrac{1}{2}$.',
      'Vereinfachen: $\\tfrac{1}{2} \\cdot x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}$.',
    ],
  },
  'ex-abl-1-2-d': {
    id: 'ex-abl-1-2-d', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: 'Was ist $\\left(\\dfrac{1}{x}\\right)\' = (x^{-1})\'$?',
    options: ['$-\\dfrac{1}{x}$', '$\\dfrac{1}{x^{2}}$', '$-\\dfrac{1}{x^{2}}$', '$\\ln(x)$'],
    correctIndex: 2,
    wrongAnswerExplanations: {
      0: 'Der Exponent wurde nicht reduziert: $(x^{-1})\' = -1\\cdot x^{-1-1} = -x^{-2}$, nicht $-x^{-1}$. Hier wurde zwar das Vorzeichen korrekt erkannt, aber $x^{-1}$ einfach stehen gelassen — Exponent muss von $-1$ auf $-2$.',
      1: 'Das Minuszeichen fehlt! Der Vorfaktor aus der Potenzregel ist $n=-1$, also negativ. Richtig ist $-\\tfrac{1}{x^2}$ — anschaulich: $\\tfrac{1}{x}$ fällt für $x>0$, die Ableitung muss also negativ sein.',
      3: 'Hier liegt eine Verwechslung mit der Integration vor: $\\int \\tfrac{1}{x}\\,dx = \\ln|x|$ (Stammfunktion), nicht Ableitung. In die andere Richtung gilt $(\\ln x)\' = \\tfrac{1}{x}$ — das ist die *umgekehrte* Zuordnung.',
    },
    explanation: `**Ansatz:** $\\tfrac{1}{x}$ als Potenz schreiben: $x^{-1}$. Dann Potenzregel mit $n = -1$.

**Rechnung:** $(x^{-1})' = -1 \\cdot x^{-1-1} = -x^{-2} = -\\dfrac{1}{x^{2}}$.

**Probe:** Bei $x = 2$: $f(2) = 0{,}5$, $f(2{,}001) \\approx 0{,}49975$, Sekantensteigung $\\approx -0{,}25 = -\\tfrac{1}{4}$. Das stimmt mit $-\\tfrac{1}{2^{2}} = -0{,}25$ überein. ✓

**Typischer Fehler:** Das Minuszeichen vergessen oder $n = -1$ um 1 auf $-0$ reduzieren (richtig ist $-2$!).`,
    hints: [
      'Welcher Funktionstyp liegt vor? Schreibe $\\tfrac{1}{x} = x^{-1}$.',
      'Regel: $(x^{n})\' = n x^{n-1}$ mit $n = -1$.',
      'Rechenschritt: $-1 \\cdot x^{-2} = -\\dfrac{1}{x^{2}}$.',
    ],
  },
  'ex-abl-1-2-transfer': {
    id: 'ex-abl-1-2-transfer', lessonId: 'abl-1-2', type: 'multiple-choice',
    question: 'Warum wirkt die Potenzregel $(x^{n})\' = n x^{n-1}$ auch für negative und gebrochene Exponenten (nicht nur ganzzahlige $n$)?',
    options: [
      'Weil alle Wurzel- und Kehrwert-Funktionen sich als $x^{n}$ schreiben lassen und die Herleitung über Grenzwerte für jedes reelle $n$ gleich verläuft',
      'Weil die Regel nur für $n \\in \\mathbb{N}$ gilt',
      'Weil negative Exponenten gegen $0$ gehen',
      'Weil Wurzelfunktionen gar keine Ableitung haben',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Zu restriktiv: Die Regel gilt für *alle* reellen Exponenten, nicht nur natürliche Zahlen. Die Herleitung über den Differenzenquotienten nutzt den binomischen Lehrsatz (bzw. bei allgemeinem $\\alpha$ die Taylor-Entwicklung), und funktioniert genauso für $n=\\tfrac{1}{2}$ oder $n=-3$.',
      2: 'Das stimmt grenzwerttechnisch ($x^n\\to 0$ für $n<0$ und $x\\to\\infty$), aber mit der *Gültigkeit* der Ableitungsregel hat das nichts zu tun. Die Regel $(x^n)\'=nx^{n-1}$ liefert auch für negative Exponenten konkrete, endliche Ableitungen — z.B. $(x^{-2})\'=-2x^{-3}$.',
      3: 'Falsch: Wurzelfunktionen sind auf ihrem Definitionsbereich ($x>0$) differenzierbar. Beispielsweise ist $(\\sqrt{x})\' = \\tfrac{1}{2\\sqrt{x}}$ wohldefiniert für jedes $x>0$. Nur am Randpunkt $x=0$ wird die Ableitung unendlich (senkrechte Tangente).',
    },
    explanation: `**Ansatz:** Die Potenzregel gilt allgemein für $n \\in \\mathbb{R}$. Wurzel ($n = 1/2$) und Kehrwert ($n = -1$) sind Spezialfälle.

**Rechnung:** Für $f(x) = x^{\\alpha}$ mit beliebigem $\\alpha \\in \\mathbb{R}$ gilt $f'(x) = \\alpha \\cdot x^{\\alpha - 1}$ (auf dem gültigen Definitionsbereich $x > 0$). Beispiele:
- $n = 1/2$: $(\\sqrt{x})' = \\tfrac{1}{2}x^{-1/2}$
- $n = -1$: $(1/x)' = -x^{-2}$
- $n = -3$: $(1/x^{3})' = -3x^{-4}$

**Probe:** Für $f(x) = x^{-2}$ bei $x=1$: Sekantensteigung von $1$ nach $1{,}001$: $\\dfrac{1/1{,}001^{2} - 1}{0{,}001} \\approx -2$. Formel: $-2 \\cdot 1^{-3} = -2$. ✓

**Transfer:** Diese Universalität erlaubt es, fast alle Polynome, Wurzel- und Kehrwertfunktionen mit einer einzigen Regel abzuleiten. Kritische Annahme: $x > 0$ bei nicht-ganzzahligem $n$ (sonst ist $x^{\\alpha}$ nicht mal definiert).

**Typischer Fehler:** Annehmen, man müsse für Wurzeln eine "eigene Regel" lernen — alles folgt aus der Potenzregel.`,
    hints: [
      'Welche Funktionsklasse deckt die Potenzregel ab?',
      'Regel: $(x^{\\alpha})\' = \\alpha \\cdot x^{\\alpha - 1}$ gilt für *jeden* Exponenten $\\alpha \\in \\mathbb{R}$.',
      'Teste die Regel an $\\sqrt{x} = x^{1/2}$ und $1/x = x^{-1}$.',
    ],
  },
  'ex-abl-1-2-mastery': {
    id: 'ex-abl-1-2-mastery', lessonId: 'abl-1-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '$f(x) = 2x^{4} - 3x^{2} + 7$. Berechne $f\'(2)$.',
    options: ['$52$', '$20$', '$40$', '$25$'],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Vermutlich wurde $f\'(x)=8x^2-6x$ statt $8x^3-6x$ gebildet (Exponent bei $(2x^4)\'$ nicht korrekt auf $3$ reduziert). Dann $f\'(2)=8\\cdot 4 - 12 = 32-12=20$. Richtig: $(2x^4)\' = 8x^3$, also $f\'(2)=64-12=52$.',
      2: 'Hier wurde vermutlich $f\'(x)=8x^3-6x^2$ gebildet ($(-3x^2)\'$ falsch als $-6x^2$ statt $-6x$): Dann $f\'(2)=64-24=40$. Beide Potenzregel-Schritte müssen den Exponenten um genau $1$ reduzieren.',
      3: 'Vermutlich wurde die Konstante $7$ fälschlich mit abgeleitet zu $7$ oder ähnlich, oder $f\'(2)=64-12-27$ grob gerechnet. Die Konstante $7$ hat Ableitung $0$, und der korrekte Wert ist $f\'(2)=8\\cdot 2^3 - 6\\cdot 2 = 52$.',
    },
    explanation: `**Ansatz:** Summen-/Faktor-/Potenzregel auf jeden Summanden, dann $x=2$ einsetzen.

**Rechnung:**
- $(2x^{4})' = 8x^{3}$
- $(-3x^{2})' = -6x$
- $(7)' = 0$
- $f'(x) = 8x^{3} - 6x$
- $f'(2) = 8 \\cdot 8 - 6 \\cdot 2 = 64 - 12 = 52$.

**Probe:** Nummerisch mit $h = 0{,}001$: $\\dfrac{f(2{,}001) - f(2)}{0{,}001} \\approx 52{,}05$. ✓

**Typischer Fehler:** $f'(x) = 8x^{3} - 6x^{2}$ durch versehentliche Nicht-Reduktion des Exponenten.`,
    hints: [
      'Welcher Funktionstyp? Polynom — Summen- + Potenzregel.',
      'Regel: $(2x^{4})\' = 8x^{3}$, $(-3x^{2})\' = -6x$, $(7)\' = 0$.',
      'Setze $x=2$ in $f\'(x) = 8x^{3} - 6x$ ein.',
    ],
  },

  // ───────────── Lektion 3: Ableitungen elementarer Funktionen ─────────────
  'ex-abl-1-3-a': {
    id: 'ex-abl-1-3-a', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: 'Was ist $(\\sin x)\'$?',
    options: ['$-\\sin x$', '$\\cos x$', '$-\\cos x$', '$\\tan x$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Das ist $(\\cos x)\'\'$, also die *zweite* Ableitung von $\\sin$ bzw. die Ableitung von $(-\\sin x)$ — nicht die erste Ableitung von $\\sin$. Im Ableitungszyklus $\\sin\\to\\cos\\to-\\sin\\to-\\cos$ steht $-\\sin$ erst an dritter Position.',
      2: 'Vorzeichen falsch und Funktion vertauscht: Das ist eher $(\\sin x)\'\'\'$ (dritte Ableitung). Die *erste* Ableitung von $\\sin x$ ist $\\cos x$ (ohne Minus) — bei $x=0$ hat $\\sin$ die positive Steigung $+1$, nicht $-1$.',
      3: '$\\tan x$ hat mit der Ableitung von $\\sin$ nichts zu tun. $\\tan x = \\tfrac{\\sin x}{\\cos x}$ ist eine *andere* Funktion und entsteht z.B. aus der Quotientenregel — nicht einfach durch Ableiten von $\\sin$.',
    },
    explanation: `**Ansatz:** Eine der Grundableitungen, die du auswendig können musst.

**Rechnung:** $(\\sin x)' = \\cos x$.

**Probe:** Bei $x = 0$: $\\cos 0 = 1$. Die Tangentensteigung der Sinuskurve im Ursprung ist tatsächlich $1$ (Sinus steigt bei $0$ am steilsten). ✓

**Merkhilfe (Ableitungszyklus):** $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin \\to \\ldots$`,
    hints: [
      'Welche elementare Funktion wird abgeleitet? Denk an den Ableitungszyklus der trigonometrischen Funktionen.',
      'Regel: $(\\sin x)\' = \\cos x$.',
      'Merkhilfe: $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$.',
    ],
  },
  'ex-abl-1-3-b': {
    id: 'ex-abl-1-3-b', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: 'Was ist $(\\cos x)\'$?',
    options: ['$\\sin x$', '$\\tan x$', '$-\\sin x$', '$-\\cos x$'],
    correctIndex: 2,
    wrongAnswerExplanations: {
      0: 'Das Minuszeichen fehlt — der klassische Cosinus-Fehler. Bei $x=\\pi/2$ fällt $\\cos$ von $1$ auf $0$ (Steigung negativ), also muss $(\\cos x)\'$ dort *negativ* sein. $\\sin(\\pi/2)=1$ kommt mit dem richtigen Vorzeichen $-1$ heraus.',
      1: '$\\tan x$ taucht beim Ableiten von $\\cos$ nicht auf. Vermutlich Verwechslung mit $\\tan x = \\tfrac{\\sin x}{\\cos x}$, aber das ist eine *Definition*, keine Ableitung. Die Ableitung von $\\cos$ bleibt im sin/cos-Zyklus.',
      3: 'Falsche Funktion im Zyklus: $(\\cos x)\' = -\\sin x$, nicht $-\\cos x$. Der Zyklus lautet $\\cos\\to-\\sin\\to-\\cos\\to\\sin\\to\\cos$ — nach $\\cos$ kommt $-\\sin$. $-\\cos$ würde erst nach *zwei* Ableitungen entstehen.',
    },
    explanation: `**Ansatz:** Zweite Grundableitung aus dem trigonometrischen Zyklus.

**Rechnung:** $(\\cos x)' = -\\sin x$. Das Minuszeichen ist entscheidend!

**Probe:** Bei $x = \\pi/2$: $-\\sin(\\pi/2) = -1$. Cosinus fällt dort mit Steigung $-1$ — passt zum Graphen. ✓

**Typischer Fehler:** Minuszeichen vergessen (klassischer Fehler bei schnellem Rechnen).`,
    hints: [
      'Welche elementare Funktion? Nächster Schritt im Ableitungszyklus nach $\\cos$.',
      'Regel: $(\\cos x)\' = -\\sin x$ — Vorsicht mit dem Vorzeichen!',
      'Zyklus weiter: $\\cos \\to -\\sin \\to -\\cos \\to \\sin \\to \\cos$.',
    ],
  },
  'ex-abl-1-3-c': {
    id: 'ex-abl-1-3-c', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: 'Was ist $(e^{x})\'$?',
    options: ['$x \\cdot e^{x-1}$', '$e^{x}$', '$e \\cdot x$', '$\\dfrac{1}{e^{x}}$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Hier wurde die Potenzregel fälschlich auf eine Exponentialfunktion angewandt: $(x^n)\'=nx^{n-1}$ gilt nur, wenn $x$ die *Basis* ist — bei $e^x$ ist $x$ aber der *Exponent*. Die Regeln für $x^n$ und $a^x$ sind verschieden!',
      2: 'Das entspricht $(ex)\' = e$ für die lineare Funktion $e\\cdot x$, nicht für $e^x$. Verwechslung: $e\\cdot x$ (Produkt) vs. $e^x$ (Exponentialfunktion). Die Exponentialfunktion wächst exponentiell, nicht linear.',
      3: '$\\tfrac{1}{e^x} = e^{-x}$ ist eine *andere* Funktion. Ihre Ableitung wäre $-e^{-x}$ (mit Kettenregel). Die Ableitung von $e^x$ selbst ist $e^x$ — die Funktion ist ihre eigene Ableitung, das ist die definierende Eigenschaft von $e$.',
    },
    explanation: `**Ansatz:** Die Exponentialfunktion $e^{x}$ ist die *einzige* Funktion, die mit ihrer Ableitung übereinstimmt — das macht $e$ zur "natürlichen" Basis.

**Rechnung:** $(e^{x})' = e^{x}$.

**Probe:** Bei $x = 0$: $e^{0} = 1$, Tangentensteigung also $1$. Das ist die Definition von $e$ als "jene Basis, für die die Exponentialfunktion bei $0$ Steigung $1$ hat". ✓

**Typischer Fehler:** Die Potenzregel falsch anwenden ($x \\cdot e^{x-1}$). Aber $e^{x}$ ist *keine* Potenz in $x$, sondern eine Exponentialfunktion — die Regeln sind verschieden.`,
    hints: [
      'Welche Funktion ist ihre eigene Ableitung?',
      'Regel: $(e^{x})\' = e^{x}$ — Exponentialfunktion zur Basis $e$.',
      'Beachte: $e^{x}$ ist keine Potenz $x^{n}$, die Potenzregel gilt hier nicht!',
    ],
  },
  'ex-abl-1-3-d': {
    id: 'ex-abl-1-3-d', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: 'Was ist $(\\ln x)\'$?',
    options: ['$e^{x}$', '$\\dfrac{1}{x}$', '$x \\cdot \\ln x$', '$-\\dfrac{1}{x}$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Verwechslung: $e^x$ ist die *Umkehrfunktion* von $\\ln x$, nicht ihre Ableitung. Umkehrfunktionen sind ein geometrisches Konzept (Spiegelung an der Diagonalen); die Ableitung misst hingegen die Tangentensteigung.',
      2: '$x\\cdot\\ln x$ sieht nach einer Produktregel aus, aber beim Ableiten von $\\ln x$ selbst gibt es kein Produkt. $(x\\cdot\\ln x)\'$ wäre $\\ln x + 1$ — eine ganz andere Funktion. $(\\ln x)\'$ ist einfach $\\tfrac{1}{x}$.',
      3: 'Das Vorzeichen ist falsch: $\\ln x$ *steigt* monoton (für $x>0$), also muss die Ableitung *positiv* sein. Anschaulich: $\\ln 1 = 0$, $\\ln 2\\approx 0{,}69$, $\\ln 3\\approx 1{,}10$ — Werte nehmen zu, Steigung also $>0$, nämlich $+\\tfrac{1}{x}$.',
    },
    explanation: `**Ansatz:** Der natürliche Logarithmus ist die Umkehrfunktion von $e^{x}$. Die Ableitung folgt aus der Umkehrfunktionsregel.

**Rechnung:** $(\\ln x)' = \\dfrac{1}{x}$ für $x > 0$.

**Probe:** Bei $x = 1$: $\\dfrac{1}{1} = 1$. Die Tangente an $\\ln x$ bei $(1,0)$ hat Steigung $1$. ✓

**Typischer Fehler:** Mit $\\log_{10}$ oder $\\log_{a}$ verwechseln — dort gilt $(\\log_{a} x)' = \\dfrac{1}{x \\cdot \\ln a}$, also ein zusätzlicher Faktor $\\ln a$.`,
    hints: [
      'Welche Funktion ist Umkehrung von $e^{x}$?',
      'Regel: $(\\ln x)\' = \\dfrac{1}{x}$ für $x > 0$.',
      'Test: Bei $x = 1$ muss die Ableitung $1$ ergeben.',
    ],
  },
  'ex-abl-1-3-transfer': {
    id: 'ex-abl-1-3-transfer', lessonId: 'abl-1-3', type: 'multiple-choice',
    question: 'Welche Annahme ist kritisch, damit die Formel $(\\ln x)\' = 1/x$ überhaupt Sinn ergibt?',
    options: [
      '$x \\in \\mathbb{Z}$',
      '$x > 0$, denn $\\ln x$ ist sonst gar nicht definiert',
      '$x < 0$',
      'Keine Einschränkung — die Formel gilt immer',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Zu restriktiv: $\\ln x$ (und damit $\\tfrac{1}{x}$) ist für *alle* reellen $x>0$ definiert, nicht nur ganze Zahlen. $\\ln(1{,}5)$, $\\ln(\\pi)$ oder $\\ln(\\sqrt{2})$ sind wohldefiniert — die Einschränkung auf ganze Zahlen gibt es nicht.',
      2: 'Genau das Gegenteil ist der Fall: $\\ln x$ ist für $x<0$ (reell) *nicht* definiert, weil kein reeller Exponent $e^y$ eine negative Zahl liefert. Also kann auch die Ableitung $\\tfrac{1}{x}$ dort nicht aus $\\ln$ stammen (nur über $\\ln|x|$ erweitert).',
      3: 'Doch, eine Einschränkung gibt es: Bei $x=0$ ist sowohl $\\ln x$ als auch $\\tfrac{1}{x}$ nicht definiert (Divergenz), und für $x<0$ existiert $\\ln x$ reell gar nicht. Die Formel braucht den Definitionsbereich $x>0$.',
    },
    explanation: `**Ansatz:** Die Ableitungsformel ist nur dort gültig, wo die Funktion selbst definiert und differenzierbar ist.

**Rechnung:** $\\ln x$ ist (reell) nur für $x > 0$ definiert. Also ist $(\\ln x)' = \\dfrac{1}{x}$ nur für $x > 0$ sinnvoll. Bei $x = 0$ divergiert sowohl $\\ln x \\to -\\infty$ als auch $1/x \\to \\infty$ — kein Grenzwert.

**Probe:** Für negative Argumente nutzt man die erweiterte Formel $(\\ln|x|)' = 1/x$ (für $x \\neq 0$), weil $\\ln|x|$ auch bei $x < 0$ definiert ist.

**Transfer:** *Vor jeder Ableitung den Definitionsbereich klären* — das gilt für $\\ln$, $\\sqrt{\\cdot}$, $1/x$, $\\tan x$ und viele andere. In Prüfungen wird oft "für welche $x$ existiert die Ableitung?" explizit gefragt.

**Typischer Fehler:** Die Formel mechanisch auf Werte anwenden, wo $\\ln x$ gar nicht existiert ($x \\leq 0$).`,
    hints: [
      'Für welche $x$ ist $\\ln x$ überhaupt definiert?',
      'Regel: $\\ln x$ existiert (reell) nur für $x > 0$.',
      'Daher gilt $(\\ln x)\' = 1/x$ ebenfalls nur für $x > 0$.',
    ],
  },
  'ex-abl-1-3-mastery': {
    id: 'ex-abl-1-3-mastery', lessonId: 'abl-1-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '$f(x) = \\sin(x) + e^{x} - 3x^{2}$. Was ist $f\'(x)$?',
    options: [
      '$\\cos(x) + e^{x} - 6x$',
      '$\\cos(x) + e^{x} - 3$',
      '$-\\cos(x) + e^{x} - 6x$',
      '$\\cos(x) - e^{x} - 6x$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Der letzte Summand ist falsch abgeleitet: $(-3x^2)\' = -6x$ (Potenzregel — Exponent reduziert), nicht $-3$ (das wäre der konstante Faktor). Vermutlich wurde $(-3x^2)$ mit $(-3x)$ verwechselt.',
      2: 'Vorzeichenfehler bei $(\\sin x)\'$: Richtig ist $(\\sin x)\' = +\\cos x$ (steigend bei $x=0$), nicht $-\\cos x$. Das Minus gehört zu $(\\cos x)\' = -\\sin x$, nicht umgekehrt.',
      3: 'Vorzeichenfehler bei $(e^x)\'$: Die Exponentialfunktion ist ihre *eigene* Ableitung, also $(e^x)\' = +e^x$, nicht $-e^x$. $e^x$ ist monoton wachsend, die Ableitung muss positiv sein.',
    },
    explanation: `**Ansatz:** Summenregel — jeden Summanden einzeln mit der jeweiligen Grundableitung.

**Rechnung:**
- $(\\sin x)' = \\cos x$
- $(e^{x})' = e^{x}$
- $(-3x^{2})' = -6x$
- Zusammen: $f'(x) = \\cos x + e^{x} - 6x$.

**Probe:** Bei $x=0$: $f'(0) = 1 + 1 - 0 = 2$. Numerisch: $\\dfrac{f(0{,}001) - f(0)}{0{,}001} \\approx 2{,}00$. ✓

**Typischer Fehler:** Vorzeichenfehler bei $(\\cos x)$ statt $(\\sin x)$ (Antwort C) oder $(e^{x})' = -e^{x}$ (Antwort D).`,
    hints: [
      'Welche Regel? Summenregel: jeden Summanden einzeln.',
      'Regel: $(\\sin x)\' = \\cos x$, $(e^{x})\' = e^{x}$, $(-3x^{2})\' = -6x$.',
      'Zusammensetzen mit korrekten Vorzeichen.',
    ],
  },

  // ───────────── Lektion 4: Kettenregel ─────────────
  'ex-abl-1-4-a': {
    id: 'ex-abl-1-4-a', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'Kettenregel: $[f(g(x))]\' = $',
    options: [
      '$f\'(x) \\cdot g\'(x)$',
      '$f\'(g(x)) \\cdot g\'(x)$',
      '$f(g\'(x))$',
      '$f\'(g(x)) + g\'(x)$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Hier wird die *innere Funktion* beim Auswerten der äußeren Ableitung weggelassen. Bei $\\sin(3x)$ hieße das $\\cos x \\cdot 3$ statt $\\cos(3x)\\cdot 3$ — also die Steigung an der *falschen* Stelle ausgewertet. $f\'$ muss bei $g(x)$ ausgewertet werden, nicht bei $x$.',
      2: 'Das wäre „innere Ableitung in die äußere Funktion einsetzen" — aber die Kettenregel ist ein *Produkt*, nicht ein Einsetzen. Man leitet die äußere Funktion mit der inneren als Argument ab *und* multipliziert mit der inneren Ableitung.',
      3: 'Addition statt Multiplikation: Die Kettenregel ist $f\'(g(x)) \\cdot g\'(x)$, kein Summe. Die Addition wäre die Summenregel $(f+g)\'=f\'+g\'$ — aber hier liegt keine Summe vor, sondern eine Verkettung.',
    },
    explanation: `**Ansatz:** Bei verketteten Funktionen (Funktion in Funktion) gilt die Kettenregel.

**Rechnung:** $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$ — äußere Ableitung (mit innerer eingesetzt) mal innere Ableitung.

**Merkhilfe:** "Außen ableiten, innen stehen lassen, dann mal innere Ableitung."

**Typischer Fehler:** $f'(x) \\cdot g'(x)$ (Antwort A) vergisst, dass in der äußeren Ableitung die *innere Funktion eingesetzt* bleiben muss.`,
    hints: [
      'Welche Regel gilt für verkettete Funktionen?',
      'Regel: $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$.',
      'Merke: "Außen ableiten $\\times$ innen ableiten", aber in der äußeren Ableitung bleibt die innere Funktion eingesetzt.',
    ],
  },
  'ex-abl-1-4-b': {
    id: 'ex-abl-1-4-b', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: '$f(x) = \\sin(3x)$. Was ist $f\'(x)$?',
    options: ['$\\cos(3x)$', '$3 \\cdot \\cos(3x)$', '$3 \\cdot \\cos(x)$', '$-3 \\cdot \\cos(3x)$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Klassischer Kettenregel-Fehler: Die innere Ableitung $(3x)\'=3$ wurde vergessen. Nur äußere Ableitung genommen: $\\cos(3x)$. Die Kettenregel verlangt aber das *Produkt* mit der inneren Ableitung — also $\\cos(3x)\\cdot 3$.',
      2: 'Beim Auswerten der äußeren Ableitung wurde die innere Funktion weggelassen: $(\\sin u)\' = \\cos u$ mit $u=3x$ ergibt $\\cos(3x)$, nicht $\\cos(x)$. Das $3x$ muss im Argument des Cosinus stehen bleiben.',
      3: 'Falsches Vorzeichen: $(\\sin)\' = +\\cos$ (ohne Minus). Das Minus gehört zu $(\\cos)\' = -\\sin$ — hier liegt aber $\\sin$ als äußere Funktion vor, also bleibt das Ergebnis positiv: $+3\\cos(3x)$.',
    },
    explanation: `**Ansatz:** Verkettung: außen $\\sin$, innen $3x$. Kettenregel anwenden.

**Rechnung:**
- Äußere: $(\\sin u)' = \\cos u$, also bei $u = 3x$: $\\cos(3x)$.
- Innere: $(3x)' = 3$.
- Kettenregel: $f'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$.

**Probe:** Bei $x = 0$: $3\\cos 0 = 3$. Numerisch $\\dfrac{\\sin(3 \\cdot 0{,}001)}{0{,}001} \\approx 3$. ✓

**Typischer Fehler:** Den Faktor $3$ (innere Ableitung) vergessen — klassischer Kettenregel-Fehler.`,
    hints: [
      'Welche Struktur? Verkettung $\\sin(\\ldots)$ — Kettenregel.',
      'Regel: Äußere $(\\sin u)\' = \\cos u$ mit $u = 3x$, innere $(3x)\' = 3$.',
      'Rechenschritt: $\\cos(3x) \\cdot 3 = 3\\cos(3x)$.',
    ],
  },
  'ex-abl-1-4-c': {
    id: 'ex-abl-1-4-c', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: '$f(x) = e^{x^{2}}$. Was ist $f\'(x)$?',
    options: ['$e^{x^{2}}$', '$2x \\cdot e^{x^{2}}$', '$x^{2} \\cdot e^{x}$', '$2 \\cdot e^{x^{2}}$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Innere Ableitung $(x^2)\'=2x$ vergessen. Die Kettenregel liefert $e^{x^2}\\cdot 2x$, nicht nur $e^{x^2}$. Faustregel: Wenn man $e^{\\text{irgendwas}}$ ableitet, bleibt $e^{\\text{irgendwas}}$ stehen *und* wird mit der Ableitung des Exponenten multipliziert.',
      2: 'Hier wurden $x^2$ und $e^x$ einfach ausgetauscht, als ob Potenz- und Exponentialbasis dasselbe wären. $e^{x^2}$ ist aber *keine* Potenz in $x$ — der Exponent $x^2$ ist variabel, die Basis $e$ ist konstant. Kettenregel, keine Potenzregel.',
      3: 'Statt $(x^2)\'=2x$ wurde $(x^2)\'=2$ gerechnet (Exponent als Vorfaktor, aber $x$ weggelassen). Die Potenzregel reduziert $x^2$ zu $2x$ (nicht $2$): Exponent nach vorn *und* Exponent um $1$ verringern ergibt $2x^1=2x$.',
    },
    explanation: `**Ansatz:** Verkettung: außen $e^{u}$, innen $x^{2}$. Kettenregel.

**Rechnung:**
- Äußere: $(e^{u})' = e^{u}$, also $e^{x^{2}}$.
- Innere: $(x^{2})' = 2x$.
- Kettenregel: $f'(x) = e^{x^{2}} \\cdot 2x = 2x \\cdot e^{x^{2}}$.

**Probe:** Bei $x = 1$: $2 \\cdot 1 \\cdot e^{1} = 2e \\approx 5{,}44$. Numerisch: $\\dfrac{e^{1{,}001^{2}} - e}{0{,}001} \\approx 5{,}44$. ✓

**Typischer Fehler:** $f'(x) = e^{x^{2}}$ (innere Ableitung vergessen) oder Potenzregel falsch anwenden — $e^{x^{2}}$ ist *keine* Potenz in $x$, sondern eine verkettete Exponentialfunktion.`,
    hints: [
      'Welche Struktur? Verkettung $e^{(\\ldots)}$ — Kettenregel.',
      'Regel: $(e^{u})\' = e^{u}$ bleibt formal, mal innere Ableitung $(x^{2})\' = 2x$.',
      'Rechenschritt: $e^{x^{2}} \\cdot 2x$.',
    ],
  },
  'ex-abl-1-4-d': {
    id: 'ex-abl-1-4-d', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: '$f(x) = (2x + 1)^{5}$. Was ist $f\'(x)$?',
    options: [
      '$5 \\cdot (2x+1)^{4}$',
      '$10 \\cdot (2x+1)^{4}$',
      '$5 \\cdot (2x+1)^{5}$',
      '$10 \\cdot (2x+1)^{5}$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Innere Ableitung $(2x+1)\'=2$ vergessen. Nur die äußere Potenzregel angewandt: $5(2x+1)^4$. Richtig muss man noch mit $2$ multiplizieren, ergibt $10(2x+1)^4$.',
      2: 'Der Exponent wurde nicht reduziert: $(u^5)\' = 5u^4$, nicht $5u^5$. Richtig $5(2x+1)^4$ (Exponent um $1$ kleiner), dann mal innere Ableitung $2$ ergibt $10(2x+1)^4$.',
      3: 'Hier sind gleich *beide* Fehler: Exponent nicht reduziert ($u^5$ statt $u^4$) *und* zusätzlich noch mit innerer Ableitung $2$ multipliziert. Richtig ist eines von beiden (Exponent reduzieren) und dann $\\cdot 2$: $5u^4\\cdot 2 = 10(2x+1)^4$.',
    },
    explanation: `**Ansatz:** Verkettung: außen $u^{5}$, innen $2x+1$. Kettenregel.

**Rechnung:**
- Äußere: $(u^{5})' = 5u^{4}$, also $5(2x+1)^{4}$.
- Innere: $(2x+1)' = 2$.
- Kettenregel: $f'(x) = 5(2x+1)^{4} \\cdot 2 = 10(2x+1)^{4}$.

**Probe:** Bei $x = 0$: $10 \\cdot 1 = 10$. Numerisch: $\\dfrac{(2 \\cdot 0{,}001 + 1)^{5} - 1}{0{,}001} \\approx 10{,}02$. ✓

**Typischer Fehler:** Den Faktor $2$ aus der inneren Ableitung vergessen.`,
    hints: [
      'Welche Struktur? Verkettung $u^{5}$ mit $u = 2x+1$ — Kettenregel.',
      'Regel: Äußere $(u^{5})\' = 5u^{4}$, innere $(2x+1)\' = 2$.',
      'Rechenschritt: $5(2x+1)^{4} \\cdot 2 = 10(2x+1)^{4}$.',
    ],
  },
  'ex-abl-1-4-transfer': {
    id: 'ex-abl-1-4-transfer', lessonId: 'abl-1-4', type: 'multiple-choice',
    question: 'Was passiert, wenn man bei $f(x) = \\sin(3x)$ die *innere Ableitung* ($3$) in der Kettenregel weglässt?',
    options: [
      'Das Ergebnis bleibt richtig',
      'Man erhält $\\cos(3x)$ statt $3\\cos(3x)$ — der Faktor $3$ fehlt und das Ergebnis ist um den Faktor der inneren Ableitung falsch',
      'Die Funktion ist dann undefiniert',
      'Die Ableitung wird doppelt so groß',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Genau das stimmt *nicht* — sonst wäre die Kettenregel überflüssig. Bei $x=0$ liefert $3\\cos(0)=3$, aber ohne innere Ableitung nur $\\cos(0)=1$. Numerisch ergibt sich tatsächlich $\\tfrac{\\sin(3\\cdot 0{,}001)}{0{,}001}\\approx 3$, also ist der Faktor $3$ essenziell.',
      2: 'Das Weglassen der inneren Ableitung ist ein *Rechenfehler*, keine Definitionsproblem — die Funktion $\\sin(3x)$ ist überall definiert und überall differenzierbar. Der Fehler betrifft den falschen Zahlenwert, nicht die Existenz der Ableitung.',
      3: 'Genau umgekehrt: *Ohne* die innere Ableitung fehlt der Faktor $3$, die Ableitung ist also um Faktor $3$ zu *klein* (nicht doppelt so groß). Nur ein richtig angewandter Faktor macht sie $3$-fach korrekt.',
    },
    explanation: `**Ansatz:** Die innere Ableitung stellt sicher, dass die "Geschwindigkeit der inneren Veränderung" korrekt einfließt. Ohne sie skaliert das Ergebnis falsch.

**Rechnung:** Korrekt ist $(\\sin(3x))' = 3\\cos(3x)$. Ohne innere Ableitung bekommt man fälschlich $\\cos(3x)$ — das ist um Faktor $1/3$ zu klein.

**Probe:** Bei $x = 0$: richtig $3\\cos 0 = 3$, falsch $\\cos 0 = 1$. Numerisch ist $\\dfrac{\\sin(0{,}003)}{0{,}001} \\approx 3 \\neq 1$. ✓

**Transfer:** Die innere Ableitung erfasst, *wie schnell* sich das Argument verändert. Bei $\\sin(3x)$ "läuft" das Argument dreimal so schnell wie $x$ selbst — die Steigung muss daher mit Faktor $3$ multipliziert werden. Diese Intuition hilft in allen verketteten Situationen (Physik: Kettenregel bei Substitution, Thermodynamik, kinematische Beschleunigung).

**Typischer Fehler:** "Einfach die Grundableitung hinschreiben" — der häufigste Fehler bei Verkettungen.`,
    hints: [
      'Welche Rolle spielt die innere Ableitung bei der Kettenregel?',
      'Regel: Ohne die innere Ableitung ist das Ergebnis um diesen Faktor daneben.',
      'Test bei $x = 0$: $3\\cos 0 = 3$ vs. $\\cos 0 = 1$ — klarer Unterschied.',
    ],
  },
  'ex-abl-1-4-mastery': {
    id: 'ex-abl-1-4-mastery', lessonId: 'abl-1-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\cos(x^{2}+1)$. $f\'(x) = $',
    options: [
      '$-\\sin(x^{2}+1)$',
      '$-2x \\cdot \\sin(x^{2}+1)$',
      '$2x \\cdot \\cos(x^{2}+1)$',
      '$-2x \\cdot \\cos(x^{2}+1)$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Innere Ableitung $(x^2+1)\'=2x$ vergessen. Das Vorzeichen und die Cosinus→Sinus-Umwandlung sind korrekt, aber ohne $2x$ fehlt ein entscheidender Faktor. Bei $x=1$ ergäbe sich $-\\sin(2)$ statt $-2\\sin(2)$.',
      2: 'Vorzeichenfehler *und* falsche Funktion: $(\\cos u)\' = -\\sin u$ (nicht $+\\cos u$). Zum einen wird Cosinus zu $-\\sin$, zum anderen bleibt die Funktion nicht Cosinus. Klassischer trigonometrischer Ableitungsfehler.',
      3: 'Die Funktion wurde nicht gewechselt: Die Ableitung von $\\cos$ muss $\\sin$ liefern (nicht $\\cos$). $(\\cos u)\' = -\\sin u$ — sowohl Vorzeichenwechsel als auch Funktionswechsel gehören dazu.',
    },
    explanation: `**Ansatz:** Verkettung: außen $\\cos u$, innen $x^{2}+1$. Kettenregel.

**Rechnung:**
- Äußere: $(\\cos u)' = -\\sin u$, also $-\\sin(x^{2}+1)$.
- Innere: $(x^{2}+1)' = 2x$.
- Kettenregel: $f'(x) = -\\sin(x^{2}+1) \\cdot 2x = -2x\\sin(x^{2}+1)$.

**Probe:** Bei $x = 0$: $-2 \\cdot 0 \\cdot \\sin 1 = 0$. Tangentensteigung von $\\cos(x^{2}+1)$ im Ursprung ist tatsächlich $0$ — das Minimum der äußeren Verschiebung. ✓

**Typischer Fehler:** Vorzeichen verwechseln (Antwort D) oder innere Ableitung vergessen (Antwort A).`,
    hints: [
      'Welche Struktur? Verkettung $\\cos(\\ldots)$ mit innerer Funktion $x^{2}+1$ — Kettenregel.',
      'Regel: Äußere $(\\cos u)\' = -\\sin u$, innere $(x^{2}+1)\' = 2x$.',
      'Rechenschritt: $-\\sin(x^{2}+1) \\cdot 2x = -2x\\sin(x^{2}+1)$.',
    ],
  },

  // ───────────── Lektion 5: Extremwerte und Kurvendiskussion ─────────────
  'ex-abl-1-5-a': {
    id: 'ex-abl-1-5-a', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: '[PRÜFUNG] Extrema: Notwendige Bedingung für ein lokales Extremum bei $x_{0}$ ist:',
    options: [
      '$f\'\'(x_{0}) = 0$',
      '$f\'(x_{0}) = 0$',
      '$f(x_{0}) = 0$',
      '$f\'(x_{0}) \\neq 0$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: '$f\'\'(x_0)=0$ ist die notwendige Bedingung für *Wendepunkte*, nicht für Extrema. An Extrema kann $f\'\'$ ungleich null sein ($>0$: Min, $<0$: Max) — die Information $f\'\'(x_0)=0$ wäre sogar *schädlich* für den Extrema-Test (Versagen des hinreichenden Kriteriums).',
      2: '$f(x_0)=0$ ist die Bedingung für *Nullstellen*, nicht für Extrema. Eine Funktion kann bei beliebiger Höhe ein Extremum haben — z.B. hat $f(x)=x^2+100$ ein Minimum bei $x=0$ mit Wert $100$, also $f(0)=100\\ne 0$.',
      3: 'Genau umgekehrt: $f\'(x_0)\\ne 0$ *schließt* ein Extremum aus — an einem Extremum muss die Tangente waagerecht sein, also Steigung null. Wo $f\'\\ne 0$, ist die Funktion streng monoton lokal, also dort kein Extremum.',
    },
    explanation: `**Ansatz:** Ein Extremum hat eine waagerechte Tangente — Steigung gleich null.

**Rechnung:** Notwendige Bedingung: $f'(x_{0}) = 0$. Hinreichende Bedingungen: $f''(x_{0}) < 0 \\Rightarrow$ Maximum; $f''(x_{0}) > 0 \\Rightarrow$ Minimum.

**Probe:** $f(x) = x^{2}$ hat Min bei $x=0$. $f'(x) = 2x$, $f'(0) = 0$ ✓. $f''(0) = 2 > 0$ ✓ (Minimum).

**Typischer Fehler:** $f(x_{0}) = 0$ (Nullstelle) oder $f''(x_{0}) = 0$ (Wendepunktbedingung) sind andere Konzepte.`,
    hints: [
      'Geometrisch: Wie verläuft die Tangente an einem Extremum?',
      'Regel: Extremum $\\Rightarrow$ waagerechte Tangente $\\Rightarrow f\'(x_{0}) = 0$.',
      'Notwendig, nicht hinreichend — Sattelpunkte erfüllen die Bedingung auch.',
    ],
  },
  'ex-abl-1-5-b': {
    id: 'ex-abl-1-5-b', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: '$f(x) = x^{2} - 4x + 3$. Wo liegt das Minimum?',
    options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: '$x=1$ ist eine *Nullstelle* von $f$ ($f(1)=1-4+3=0$), aber kein Extremum. Der Fehler entsteht, wenn man $f(x)=0$ statt $f\'(x)=0$ löst. Das sind zwei verschiedene Bedingungen an zwei verschiedenen Funktionen.',
      2: '$x=3$ ist die zweite *Nullstelle* von $f$ ($f(3)=9-12+3=0$), aber ebenfalls kein Extremum. Wieder die Verwechslung $f=0$ vs. $f\'=0$. Zwischen den beiden Nullstellen $x=1$ und $x=3$ liegt das Minimum — genau in der Mitte bei $x=2$.',
      3: 'Vermutlich $f\'(x) = 2x - 4 = 0$ falsch umgeformt: $2x = 4 \\Rightarrow x=2$ (nicht $x=4$). Wahrscheinlich wurde $4$ statt $x=\\tfrac{4}{2}$ notiert — Division durch $2$ vergessen.',
    },
    explanation: `**Ansatz:** Notwendige Bedingung $f'(x) = 0$, dann hinreichende Bedingung $f''$.

**Rechnung:**
- $f'(x) = 2x - 4 = 0 \\Rightarrow x = 2$.
- $f''(x) = 2 > 0 \\Rightarrow$ Minimum bei $x = 2$.
- $f(2) = 4 - 8 + 3 = -1$, also Minimum bei $(2, -1)$.

**Probe:** $f(1) = 0$, $f(2) = -1$, $f(3) = 0$ — passt: $x=2$ ist Minimum. ✓

**Typischer Fehler:** Nullstellen mit Extrema verwechseln — $x=1$ und $x=3$ sind Nullstellen, nicht Extrema.`,
    hints: [
      'Welche Regel? Notwendige Bedingung $f\'(x) = 0$.',
      'Formel: $f\'(x) = 2x - 4$.',
      'Setze $f\'(x) = 0$ und löse nach $x$ auf.',
    ],
  },
  'ex-abl-1-5-c': {
    id: 'ex-abl-1-5-c', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: '[PRÜFUNG] Wendepunkt: $f$ hat einen Wendepunkt bei $x_{0}$, wenn:',
    options: [
      '$f\'(x_{0}) = 0$',
      '$f\'\'(x_{0}) = 0$ und Vorzeichenwechsel von $f\'\'$',
      '$f(x_{0}) = 0$',
      '$f\'\'\'(x_{0}) = 0$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: '$f\'(x_0)=0$ ist die Bedingung für ein *Extremum* (waagerechte Tangente), nicht für einen Wendepunkt. Ein Wendepunkt kann jede Steigung haben — entscheidend ist der Krümmungswechsel, also $f\'\'$, nicht $f\'$.',
      2: '$f(x_0)=0$ ist eine *Nullstelle* von $f$, aber mit dem Wendepunkt-Begriff nicht verwandt. Eine Funktion kann Wendepunkte bei beliebigen Funktionswerten haben — z.B. hat $f(x)=x^3+5$ einen Wendepunkt bei $x=0$ mit $f(0)=5$.',
      3: '$f\'\'\'(x_0)=0$ ist gerade *hinderlich* — für einen Wendepunkt ist $f\'\'\'(x_0)\\ne 0$ (als Alternative zum Vorzeichenwechsel) ausreichend. $f\'\'\'(x_0)=0$ macht den Test hingegen *unbrauchbar*, weil das hinreichende Kriterium versagt.',
    },
    explanation: `**Ansatz:** Ein Wendepunkt ist der Punkt, in dem die Krümmungsrichtung wechselt — mathematisch: Vorzeichenwechsel der zweiten Ableitung.

**Rechnung:** Notwendig: $f''(x_{0}) = 0$. Hinreichend: Vorzeichenwechsel von $f''$ in $x_{0}$ (oder $f'''(x_{0}) \\neq 0$).

**Probe:** $f(x) = x^{3}$: $f''(x) = 6x$, $f''(0) = 0$ und Vorzeichenwechsel (negativ für $x<0$, positiv für $x>0$) → Wendepunkt bei $x=0$. ✓

**Typischer Fehler:** Nur $f''(x_{0}) = 0$ zu fordern reicht nicht (Gegenbeispiel $f(x) = x^{4}$ bei $x=0$).`,
    hints: [
      'Welche Eigenschaft beschreibt eine Wendestelle geometrisch?',
      'Regel: Wendepunkt = Wechsel der Krümmung $\\Rightarrow f\'\'$ wechselt das Vorzeichen.',
      'Notwendig $f\'\'(x_{0}) = 0$, hinreichend + Vorzeichenwechsel (oder $f\'\'\'(x_{0}) \\neq 0$).',
    ],
  },
  'ex-abl-1-5-transfer': {
    id: 'ex-abl-1-5-transfer', lessonId: 'abl-1-5', type: 'multiple-choice',
    question: 'Warum ist der $f\'\'$-Test ($f\'\'(x_0) < 0 \\Rightarrow$ Max, $f\'\'(x_0) > 0 \\Rightarrow$ Min) bei $f\'\'(x_{0}) = 0$ *nicht hinreichend*?',
    options: [
      'Weil $f\'\'$ dann einen Rechenfehler hat',
      'Weil bei $f\'\'(x_0) = 0$ die Krümmung verschwindet und Max, Min oder Sattelpunkt möglich sind — man muss höhere Ableitungen oder den Vorzeichenwechsel von $f\'$ prüfen',
      'Weil die Funktion nicht mehr differenzierbar ist',
      'Weil das Vorzeichen von $f$ entscheidet',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Es gibt keinen Rechenfehler — das Problem ist ein *prinzipielles*. Selbst bei perfekt berechnetem $f\'\'(x_0)=0$ liefert der Test keine Information. Beispiele $x^4$ (Min), $-x^4$ (Max) und $x^3$ (Sattel) zeigen alle drei möglichen Fälle.',
      2: 'Die Funktion ist bei $f\'\'(x_0)=0$ sehr wohl differenzierbar — z.B. ist $f(x)=x^4$ überall beliebig oft differenzierbar, und dort ist $f\'\'(0)=0$ ganz regulär. Das Problem liegt nur am *Testverfahren*, nicht an der Differenzierbarkeit.',
      3: 'Das Vorzeichen von $f(x_0)$ (der Funktionswert selbst) ist für die Extremum-Art irrelevant. Entscheidend sind Steigung ($f\'=0$) und Krümmung ($f\'\'$ — oder höhere Ableitungen, wenn $f\'\'=0$). Nur der *Wert* von $f$ sagt über Extrema nichts aus.',
    },
    explanation: `**Ansatz:** Der $f''$-Test basiert auf der Krümmungsrichtung. Wenn $f''(x_0) = 0$, gibt es keine Krümmungsinformation — weitere Tests nötig.

**Rechnung:** Beispiele für $f'(x_0) = 0$ und $f''(x_0) = 0$:
- $f(x) = x^{4}$ bei $x_0 = 0$: Minimum (erkennbar über $f^{(4)}(0) = 24 > 0$).
- $f(x) = -x^{4}$ bei $x_0 = 0$: Maximum.
- $f(x) = x^{3}$ bei $x_0 = 0$: Sattelpunkt (weder Max noch Min).

Alle drei Funktionen erfüllen $f'(0) = 0$ und $f''(0) = 0$ — der $f''$-Test versagt.

**Probe:** Für $f(x) = x^{4}$: $f'$ wechselt bei $x=0$ von negativ zu positiv $\\Rightarrow$ Minimum (Vorzeichenwechseltest bestätigt es).

**Transfer:** Allgemeiner Satz: Ist $f'(x_0) = f''(x_0) = \\ldots = f^{(n-1)}(x_0) = 0$ und $f^{(n)}(x_0) \\neq 0$, dann ist $x_0$ Extremum, wenn $n$ gerade ist (Max/Min je nach Vorzeichen), und Sattelpunkt, wenn $n$ ungerade ist.

**Typischer Fehler:** In Prüfungen wird oft mechanisch $f''$ eingesetzt, obwohl $f''(x_0) = 0$ vorliegt — man muss dann umschalten auf Vorzeichenwechseltest.`,
    hints: [
      'Welche Information liefert $f\'\'$? Krümmungsrichtung.',
      'Was passiert, wenn die Krümmung bei $x_{0}$ "verschwindet" ($f\'\'(x_{0}) = 0$)?',
      'Beispiele: $x^{4}$ (Min), $-x^{4}$ (Max), $x^{3}$ (Sattel) — alle drei mit $f\' = f\'\' = 0$ bei $0$.',
    ],
  },
  'ex-abl-1-5-mastery': {
    id: 'ex-abl-1-5-mastery', lessonId: 'abl-1-5', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = x^{3} - 3x$. Bestimme alle lokalen Extrema.',
    options: [
      'Maximum bei $x = -1$, Minimum bei $x = 1$',
      'Minimum bei $x = -1$, Maximum bei $x = 1$',
      'Nur ein Extremum bei $x = 0$',
      'Keine Extrema',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Zuordnung vertauscht: $f\'\'(-1) = -6 < 0$ bedeutet Rechtskrümmung $\\Rightarrow$ Maximum (nicht Minimum). Und $f\'\'(1) = +6 > 0$ bedeutet Linkskrümmung $\\Rightarrow$ Minimum. Merke: „$f\'\'>0 \\Rightarrow$ Minimum (Tal)", „$f\'\'<0 \\Rightarrow$ Maximum (Hügel)".',
      2: 'Bei $x=0$ ist $f\'(0)=-3\\ne 0$ — also gar kein Kandidat für ein Extremum. Die Nullstellen von $f\'(x)=3x^2-3$ sind $x=\\pm 1$, nicht $x=0$. Bei $x=0$ ist sogar der Wendepunkt ($f\'\'(0)=0$).',
      3: 'Falsch: $f\'(x) = 3x^2-3 = 3(x^2-1)$ hat Nullstellen bei $x=\\pm 1$, also existieren Extrema. Vielleicht wurde $f\'(x)=3x^2-3$ mit $3x^2=-3$ falsch umgeformt (keine reelle Lösung), aber korrekt ist $3x^2=3 \\Rightarrow x=\\pm 1$.',
    },
    explanation: `**Ansatz:** Vollständiges Extremwertschema: $f'=0$ lösen, dann $f''$ prüfen.

**Rechnung:**
- $f'(x) = 3x^{2} - 3 = 3(x^{2}-1) = 0 \\Rightarrow x = \\pm 1$.
- $f''(x) = 6x$.
- $f''(-1) = -6 < 0 \\Rightarrow$ **Maximum** bei $x = -1$.
- $f''(1) = 6 > 0 \\Rightarrow$ **Minimum** bei $x = 1$.

**Funktionswerte:** $f(-1) = -1 + 3 = 2$; $f(1) = 1 - 3 = -2$.

**Probe:** $f$ ist punktsymmetrisch ($f(-x) = -f(x)$), also muss Max-y-Wert $+2$ zum Min-y-Wert $-2$ passen. ✓

**Typischer Fehler:** Reihenfolge vertauschen (Antwort B) — bei $f'' < 0$ liegt ein *Maximum*, nicht Minimum.`,
    hints: [
      'Welches Vorgehen? $f\'(x) = 0$ lösen, dann $f\'\'$ auswerten.',
      'Formel: $f\'(x) = 3x^{2} - 3$, $f\'\'(x) = 6x$.',
      'Bei $x = -1$: $f\'\' < 0$ $\\Rightarrow$ Max; bei $x = 1$: $f\'\' > 0$ $\\Rightarrow$ Min.',
    ],
  },
}

const lessons_abl_u1 = [
  {
    id: 'abl-1-1', unitId: 'abl-unit-1',
    title: 'Was ist eine Ableitung?',
    order: 1, estimatedMinutes: 12,
    learningGoals: [
      'Ableitung als Steigung der Tangente verstehen',
      'Differenzenquotient interpretieren',
      'Notwendige Bedingung für Extrema erkennen',
    ],
    prerequisites: [],
    nextLessonId: 'abl-1-2',
    steps: [
      {
        id: 'abl-1-1-s1', type: 'explanation-intuitive', title: 'Steigung im Punkt',
        content: `Stell dir vor, du fährst mit dem Auto. Die **Ableitung** ist der **Tacho** — sie zeigt die *momentane* Geschwindigkeit.

Mathematisch: Wenn $f(x)$ die zurückgelegte Strecke beschreibt, dann gibt $f'(x)$ die **momentane Geschwindigkeit** an.

**Geometrisch:** $f'(x_0)$ ist die **Steigung der Tangente** an die Kurve $y = f(x)$ im Punkt $(x_0, f(x_0))$.

| Vorzeichen von $f'(x)$ | Bedeutung |
|------------------------|-----------|
| $f'(x) > 0$ | Funktion steigt |
| $f'(x) < 0$ | Funktion fällt |
| $f'(x) = 0$ | waagerechte Tangente (Extremum oder Sattelpunkt) |

**Merke:** Die Ableitung beschreibt *Änderung*, nicht den *Wert* der Funktion. Eine negative Funktion kann steigen ($f'(x) > 0$), eine positive Funktion kann fallen ($f'(x) < 0$).`,
      },
      {
        id: 'abl-1-1-s2', type: 'visualization', title: 'Tangente an die Kurve',
        visualizationId: 'derivative-graph',
        params: { fn: null, fnName: 'x²', showTangent: true, interactive: true },
      },
      {
        id: 'abl-1-1-s3', type: 'explanation-formal', title: 'Definition über Grenzwert',
        content: `**Definition der Ableitung:**

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Der Bruch $\\dfrac{f(x+h)-f(x)}{h}$ heißt **Differenzenquotient** — er berechnet die *mittlere* Steigung zwischen den Punkten $x$ und $x+h$ (Sekante).

Für $h \\to 0$ rücken die zwei Punkte zusammen, die Sekante wird zur Tangente, und der Differenzenquotient wird zum **Differentialquotienten** $f'(x)$.

**Wichtige Eigenschaft:** Existiert dieser Grenzwert, heißt $f$ an der Stelle $x$ **differenzierbar**. Nicht-differenzierbar sind z.B. Knickstellen (Betrag $|x|$ bei $0$) oder Sprünge.

**Notwendige Bedingung für Extremum:** $f'(x_0) = 0$ (Satz von Fermat). *Nicht hinreichend* — Sattelpunkte erfüllen diese Bedingung auch.`,
      },
      {
        id: 'abl-1-1-s3-limit', type: 'visualization', title: 'Grenzwert numerisch erkunden',
        visualizationId: 'limit-explorer',
        params: { initialFunction: 'removable', initialEpsilon: 0.8 },
      },
      { id: 'abl-1-1-s4', type: 'exercise', title: 'Aufgabe 1 — Geometrische Bedeutung', exerciseRef: 'ex-abl-1-1-a' },
      { id: 'abl-1-1-s5', type: 'exercise', title: 'Aufgabe 2 — Differenzenquotient', exerciseRef: 'ex-abl-1-1-b' },
      { id: 'abl-1-1-s6', type: 'exercise', title: 'Aufgabe 3 — $f\'(x) = 0$', exerciseRef: 'ex-abl-1-1-c' },
      { id: 'abl-1-1-s7', type: 'exercise', title: 'Aufgabe 4 — Transfer: notwendig vs. hinreichend', exerciseRef: 'ex-abl-1-1-transfer' },
      { id: 'abl-1-1-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-1-mastery' },
    ],
  },
  {
    id: 'abl-1-2', unitId: 'abl-unit-1',
    title: 'Potenzregel und Summenregel',
    order: 2, estimatedMinutes: 15,
    learningGoals: [
      'Polynome ableiten',
      'Potenzregel und Summenregel anwenden',
      'Wurzeln und Kehrwerte als Potenzen behandeln',
    ],
    prerequisites: [],
    nextLessonId: 'abl-1-3',
    steps: [
      {
        id: 'abl-1-2-s1', type: 'explanation-formal', title: 'Die Ableitungsregeln',
        content: `**Potenzregel** (wichtigste Regel!):
$$(x^{n})' = n \\cdot x^{n-1}$$

Gilt für *jeden* reellen Exponenten $n$ — auch negativ und gebrochen (auf dem gültigen Definitionsbereich).

**Summenregel:**
$$(f + g)' = f' + g'$$

**Faktorregel:**
$$(c \\cdot f)' = c \\cdot f'$$

**Konstante:**
$$c' = 0$$

**Beispiele:**
- $(x^{3})' = 3x^{2}$
- $(5x^{4})' = 20x^{3}$
- $(x^{-2})' = -2x^{-3} = -\\dfrac{2}{x^{3}}$
- $(\\sqrt{x})' = (x^{1/2})' = \\dfrac{1}{2\\sqrt{x}}$

**Merke:** "Exponent nach vorn, dann um 1 reduzieren." — auch bei negativen Exponenten ($-2 \\to -3$, nicht $-1$).`,
      },
      {
        id: 'abl-1-2-s-herleitung',
        type: 'derivation',
        title: 'Herleitung der Potenzregel für $f(x) = x^{2}$',
        defaultOpen: false,
        steps: [
          {
            explanation: 'Start mit dem Differenzenquotienten für $f(x) = x^{2}$:',
            formula: '\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^{2} - x^{2}}{h}',
          },
          {
            explanation: 'Binomische Formel anwenden und $x^{2}$ kürzen:',
            formula: '\\frac{x^{2} + 2xh + h^{2} - x^{2}}{h} = \\frac{2xh + h^{2}}{h}',
          },
          {
            explanation: '$h$ ausklammern und kürzen (geht, solange $h \\neq 0$):',
            formula: '\\frac{h(2x + h)}{h} = 2x + h',
          },
          {
            explanation: 'Grenzübergang $h \\to 0$:',
            formula: "f'(x) = \\lim_{h \\to 0}(2x + h) = 2x",
          },
          {
            explanation:
              'Das passt zur Potenzregel mit $n=2$: $(x^{2})\' = 2 \\cdot x^{2-1} = 2x$. Für allgemeine $n$ funktioniert die gleiche Idee mit dem binomischen Lehrsatz.',
          },
        ],
      },
      {
        id: 'abl-1-2-s-fehler',
        type: 'typical-error',
        title: 'Typischer Fehler bei negativen Exponenten',
        wrong:
          'Für $f(x) = x^{-2}$ wäre $f\'(x) = -2 \\cdot x^{-1} = -2/x$. (falsch: Exponent nur um 1 reduziert, Regel aber falsch angewandt)',
        right:
          'Richtig ist $f\'(x) = -2 \\cdot x^{-2-1} = -2 \\cdot x^{-3} = -\\dfrac{2}{x^{3}}$. Die Potenzregel gilt auch für negative und gebrochene Exponenten — **Exponent um 1 verringern** bedeutet bei $-2$ nicht $-1$, sondern $-3$.',
        hint: 'Eselsbrücke: „Exponent wandert nach vorne, dann minus eins" — auch wenn der Exponent negativ ist!',
      },
      {
        id: 'abl-1-2-s2', type: 'visualization', title: 'Ableitung von $x^{2}$',
        visualizationId: 'derivative-graph',
        params: { fnName: 'x²', showDerivative: true },
      },
      { id: 'abl-1-2-s3', type: 'exercise', title: 'Aufgabe 1 — Potenzregel', exerciseRef: 'ex-abl-1-2-a' },
      { id: 'abl-1-2-s4', type: 'exercise', title: 'Aufgabe 2 — Polynom', exerciseRef: 'ex-abl-1-2-b' },
      { id: 'abl-1-2-s5', type: 'exercise', title: 'Aufgabe 3 — Wurzel', exerciseRef: 'ex-abl-1-2-c' },
      { id: 'abl-1-2-s6', type: 'exercise', title: 'Aufgabe 4 — Kehrwert', exerciseRef: 'ex-abl-1-2-d' },
      { id: 'abl-1-2-s7', type: 'exercise', title: 'Aufgabe 5 — Transfer: Warum gilt die Regel allgemein?', exerciseRef: 'ex-abl-1-2-transfer' },
      { id: 'abl-1-2-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-2-mastery' },
    ],
  },
  {
    id: 'abl-1-3', unitId: 'abl-unit-1',
    title: 'Ableitungen elementarer Funktionen',
    order: 3, estimatedMinutes: 12,
    learningGoals: [
      'sin, cos, $e^{x}$, ln ableiten',
      'Ableitungstabelle auswendig kennen',
      'Definitionsbereiche beachten',
    ],
    prerequisites: [],
    nextLessonId: 'abl-1-4',
    steps: [
      {
        id: 'abl-1-3-s1', type: 'explanation-formal', title: 'Ableitungstabelle',
        content: `**Auswendig lernen — Prüfungsrelevant:**

| $f(x)$    | $f'(x)$     |
|-----------|-------------|
| $x^{n}$   | $n \\cdot x^{n-1}$ |
| $\\sin(x)$  | $\\cos(x)$    |
| $\\cos(x)$  | $-\\sin(x)$   |
| $\\tan(x)$  | $\\dfrac{1}{\\cos^{2}(x)}$ |
| $e^{x}$    | $e^{x}$        |
| $a^{x}$    | $a^{x} \\cdot \\ln(a)$  |
| $\\ln(x)$  | $\\dfrac{1}{x}$ (nur für $x > 0$) |
| $\\log_{a}(x)$| $\\dfrac{1}{x \\cdot \\ln a}$|

**Merkhilfe Zyklus:** $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin \\to \\ldots$

**Wichtig — Definitionsbereiche:**
- $\\ln(x)$ nur für $x > 0$
- $\\tan(x)$ nicht bei $x = \\pi/2 + k\\pi$ (Nullstellen von $\\cos$)
- $e^{x}$ immer definiert`,
      },
      {
        id: 'abl-1-3-s2', type: 'visualization', title: '$\\sin$ und seine Ableitung $\\cos$',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.sin(x), color: '#3b82f6', label: 'sin(x)' },
            { fn: (x) => Math.cos(x), color: '#ef4444', label: "sin'(x) = cos(x)" },
          ],
          xRange: [-2 * Math.PI, 2 * Math.PI],
          yRange: [-1.5, 1.5],
          showGrid: true,
        },
      },
      { id: 'abl-1-3-s3', type: 'exercise', title: 'Aufgabe 1 — $(\\sin x)\'$', exerciseRef: 'ex-abl-1-3-a' },
      { id: 'abl-1-3-s4', type: 'exercise', title: 'Aufgabe 2 — $(\\cos x)\'$', exerciseRef: 'ex-abl-1-3-b' },
      { id: 'abl-1-3-s5', type: 'exercise', title: 'Aufgabe 3 — $(e^{x})\'$', exerciseRef: 'ex-abl-1-3-c' },
      { id: 'abl-1-3-s6', type: 'exercise', title: 'Aufgabe 4 — $(\\ln x)\'$', exerciseRef: 'ex-abl-1-3-d' },
      { id: 'abl-1-3-s7', type: 'exercise', title: 'Aufgabe 5 — Transfer: Definitionsbereich $\\ln$', exerciseRef: 'ex-abl-1-3-transfer' },
      { id: 'abl-1-3-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-abl-1-3-mastery' },
    ],
  },
  {
    id: 'abl-1-4', unitId: 'abl-unit-1',
    title: 'Kettenregel',
    order: 4, estimatedMinutes: 15,
    learningGoals: [
      'Kettenregel verstehen und anwenden',
      'Verkettete Funktionen ableiten',
      'Rolle der inneren Ableitung verinnerlichen',
    ],
    prerequisites: [],
    nextLessonId: 'abl-1-5',
    steps: [
      {
        id: 'abl-1-4-s1', type: 'explanation-intuitive', title: 'Äußere und innere Funktion',
        content: `Die **Kettenregel** wird benötigt, wenn eine Funktion in einer anderen "steckt" — also eine verkettete Funktion vorliegt.

**Beispiel:** $f(x) = \\sin(x^{2})$ — hier ist $\\sin$ die **äußere** Funktion, $x^{2}$ die **innere**.

**Formel:**
$$[f(g(x))]' = f'(g(x)) \\cdot g'(x)$$

**Eselsbrücke:** "Äußere ableiten (innere einsetzen), mal innere ableiten"

**Schritte:**
1. Äußere Funktion ableiten (innere unverändert einsetzen)
2. Multiplizieren mit der Ableitung der inneren Funktion

**Warum der Faktor $g'$?** Die innere Funktion verändert das Argument mit einer eigenen "Geschwindigkeit". Diese Geschwindigkeit muss in die Gesamtableitung einfließen — sonst ist das Ergebnis um einen Faktor falsch skaliert.`,
      },
      { id: 'abl-1-4-s2', type: 'exercise', title: 'Aufgabe 1 — Formel', exerciseRef: 'ex-abl-1-4-a' },
      { id: 'abl-1-4-s3', type: 'exercise', title: 'Aufgabe 2 — $\\sin(3x)$', exerciseRef: 'ex-abl-1-4-b' },
      { id: 'abl-1-4-s4', type: 'exercise', title: 'Aufgabe 3 — $e^{x^{2}}$', exerciseRef: 'ex-abl-1-4-c' },
      { id: 'abl-1-4-s5', type: 'exercise', title: 'Aufgabe 4 — $(2x+1)^{5}$', exerciseRef: 'ex-abl-1-4-d' },
      { id: 'abl-1-4-s6', type: 'exercise', title: 'Aufgabe 5 — Transfer: Rolle der inneren Ableitung', exerciseRef: 'ex-abl-1-4-transfer' },
      { id: 'abl-1-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-1-4-mastery' },
    ],
  },
  {
    id: 'abl-1-5', unitId: 'abl-unit-1',
    title: 'Extremwerte und Kurvendiskussion',
    order: 5, estimatedMinutes: 20,
    learningGoals: [
      'Extrema mit Ableitungen bestimmen',
      'Wendepunkte identifizieren',
      'Kurvendiskussion durchführen',
      'Notwendige und hinreichende Bedingungen unterscheiden',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-1-5-s1', type: 'explanation-formal', title: 'Systematische Kurvendiskussion',
        content: `**Kurvendiskussion — Prüfungsrelevantes Schema:**

1. **Definitionsbereich** (Wo ist $f$ definiert?)
2. **Nullstellen:** $f(x) = 0$
3. **Extrema:** $f'(x) = 0$ lösen; $f''(x)$ einsetzen für die Art
   - $f''(x_{0}) > 0 \\Rightarrow$ lokales **Minimum**
   - $f''(x_{0}) < 0 \\Rightarrow$ lokales **Maximum**
   - $f''(x_{0}) = 0 \\Rightarrow$ weitere Untersuchung nötig
4. **Wendepunkte:** $f''(x) = 0$ mit Vorzeichenwechsel (oder $f'''(x_{0}) \\neq 0$)
5. **Verhalten für $x \\to \\pm\\infty$**
6. **Skizze**

**Unterscheidung:**
- **Notwendig** = muss erfüllt sein, reicht aber nicht aus
- **Hinreichend** = erfüllt bedeutet Bedingung ist garantiert`,
      },
      {
        id: 'abl-1-5-s2', type: 'visualization', title: 'Extrema von $x^{3} - 3x$',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x * x - 3 * x, color: '#3b82f6', label: 'f(x) = x³−3x' },
            { fn: (x) => 3 * x * x - 3, color: '#ef4444', label: "f'(x) = 3x²−3" },
          ],
          xRange: [-3, 3],
          yRange: [-4, 4],
          showGrid: true,
        },
      },
      { id: 'abl-1-5-s3', type: 'exercise', title: 'Aufgabe 1 — Notwendige Bedingung', exerciseRef: 'ex-abl-1-5-a' },
      { id: 'abl-1-5-s4', type: 'exercise', title: 'Aufgabe 2 — Minimum berechnen', exerciseRef: 'ex-abl-1-5-b' },
      { id: 'abl-1-5-s5', type: 'exercise', title: 'Aufgabe 3 — Wendepunkt', exerciseRef: 'ex-abl-1-5-c' },
      { id: 'abl-1-5-s6', type: 'exercise', title: 'Aufgabe 4 — Transfer: $f\'\'$-Test versagt', exerciseRef: 'ex-abl-1-5-transfer' },
      { id: 'abl-1-5-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-1-5-mastery' },
    ],
  },
]

export const abl_unit1 = {
  id: 'abl-unit-1',
  title: 'Grundlagen der Differentialrechnung',
  order: 1,
  description: 'Ableitungsbegriff, Potenzregel, elementare Ableitungen, Kettenregel',
  lessons: lessons_abl_u1,
  exercises: exercises_abl_u1,
}
