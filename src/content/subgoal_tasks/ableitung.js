// ═══════════════════════════════════════════════════════════════════════════
// Ableitung — Zielaufgaben pro Sub-Goal (handgeschrieben, ein Konzept je Task)
// ═══════════════════════════════════════════════════════════════════════════
//
// Jede Aufgabe trägt einen `pedagogy`-Tag `{ stage, subGoal, uses }`, damit die
// STATUS-Matrix die Coverage zählen kann. `uses` ist eine Obermenge der in der
// Matrix-Zeile geforderten Konzepte und referenziert nur Konzepte, die in
// `lesson.blueprint.concepts` (oder `prerequisites`) eingeführt sind.

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const ableitungSubGoalTasks = {
  // ─────────────────────────────────────────────────────────────────────────
  // abl-1-1 · Was ist eine Ableitung?
  // ─────────────────────────────────────────────────────────────────────────
  'abl-1-1': {
    // [0] Differenzenquotient → Differentialquotient als Grenzübergang
    0: [
      // Zeile 1: recognize · true-false · uses=[diff-quotient, sek-steigung]
      tf(
        'Für $h \\neq 0$ ist der Differenzenquotient $\\dfrac{f(x_0+h)-f(x_0)}{h}$ die Steigung der Sekante durch $(x_0, f(x_0))$ und $(x_0+h, f(x_0+h))$.',
        true,
        `**Ansatz:** Zwei Punkte auf einer Kurve bestimmen eindeutig eine Gerade (Sekante). Ihre Steigung ist $\\Delta y / \\Delta x$.

**Rechnung:** $\\Delta y = f(x_0+h) - f(x_0)$ und $\\Delta x = (x_0+h) - x_0 = h$. Steigung $= \\Delta y/\\Delta x = \\dfrac{f(x_0+h)-f(x_0)}{h}$ — das ist genau der Differenzenquotient.

**Probe:** $f(x) = x^2$, $x_0 = 1$, $h = 2$: Sekante durch $(1,1)$ und $(3,9)$ hat Steigung $(9-1)/(3-1) = 4$. Differenzenquotient $\\dfrac{(1+2)^2 - 1^2}{2} = \\dfrac{8}{2} = 4$ ✓.

**Typischer Fehler:** Differenzenquotient mit Tangentensteigung gleichsetzen — die Tangente entsteht erst durch den Grenzübergang $h \\to 0$.`,
        [
          'Sekante = Gerade durch zwei Punkte der Kurve.',
          'Steigung einer Geraden $= \\dfrac{\\Delta y}{\\Delta x}$.',
          'Setze $\\Delta x = h$ und $\\Delta y = f(x_0+h) - f(x_0)$ ein.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['diff-quotient', 'sek-steigung'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[diff-quotient]
      mc(
        'Welcher Ausdruck berechnet $f\'(2)$ für $f(x) = x^2$ als Grenzwert?',
        [
          '$\\lim_{h \\to 0} \\dfrac{(2+h)^2 - 4}{h}$',
          '$\\lim_{h \\to 0} \\dfrac{(2+h)^2 - 4}{2}$',
          '$\\lim_{h \\to 0} \\dfrac{(2+h)^2}{h}$',
          '$\\dfrac{(2+h)^2 - 4}{h}$',
        ],
        0,
        `**Ansatz:** Definition des Differentialquotienten: $f'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0+h) - f(x_0)}{h}$. Hier $x_0 = 2$ und $f(x_0) = 2^2 = 4$.

**Rechnung:** Einsetzen liefert $\\lim_{h \\to 0} \\dfrac{(2+h)^2 - 4}{h}$. Mit Vereinfachung: $(2+h)^2 - 4 = 4 + 4h + h^2 - 4 = 4h + h^2$, also $\\lim_{h \\to 0} (4 + h) = 4$ — und tatsächlich $f'(x) = 2x$, $f'(2) = 4$.

**Probe:** $f'(x) = 2x$, $f'(2) = 4$ ✓ — passt zum Grenzwert.

**Typischer Fehler:** Im Nenner $x_0$ statt $h$ schreiben, die Subtraktion $-f(x_0)$ vergessen oder den Grenzwert weglassen.`,
        [
          'Welche Stelle ist gemeint? Schreibe $x_0 = 2$ in die Definition.',
          'Berechne zuerst $f(x_0) = f(2)$ und setze ein.',
          'Im Nenner steht immer $h$, nicht $x_0$.',
        ],
        {
          1: 'Im Nenner steht $h$ (die Änderung der $x$-Koordinate), nicht $x_0 = 2$. Für $h \\to 0$ würde dieser Ausdruck gegen 0 streben statt gegen $f\'(2) = 4$.',
          2: 'Hier wurde die Subtraktion $- f(x_0) = -4$ im Zähler vergessen. Dadurch entsteht kein Differenzenquotient, sondern ein Bruch, der für $h \\to 0$ gegen $\\infty$ geht.',
          3: 'Das ist der Differenzenquotient *ohne* Grenzübergang — also nur die Sekantensteigung für ein festes $h$. Erst $\\lim_{h \\to 0}$ macht daraus die Tangentensteigung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['diff-quotient'] },
      ),
      // Zeile 3: apply-independent · number-input · uses=[diff-quotient]
      ni(
        'Berechne $f\'(3)$ für $f(x) = x^2$ über den Grenzwert des Differenzenquotienten.',
        6,
        0,
        '',
        `**Ansatz:** $f'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0+h) - f(x_0)}{h}$, hier $x_0 = 3$ und $f(3) = 9$.

**Rechnung:** $\\dfrac{(3+h)^2 - 9}{h} = \\dfrac{9 + 6h + h^2 - 9}{h} = \\dfrac{6h + h^2}{h} = 6 + h$. Grenzübergang $h \\to 0$ liefert $f'(3) = 6$.

**Probe:** Allgemein $f'(x) = 2x$, also $f'(3) = 2 \\cdot 3 = 6$ ✓.

**Typischer Fehler:** $h^2$ im Zähler vergessen (ändert das Endergebnis hier nicht, weil $h\\to 0$, aber das Kürzen durch $h$ wird unsauber). Oder den Grenzübergang vergessen und nur die Sekantensteigung für $h=1$ angeben (= 7).`,
        [
          'Setze $f(x_0+h) = (3+h)^2$ und $f(x_0) = 9$ in den Differenzenquotient ein.',
          'Multipliziere die binomische Formel aus: $(3+h)^2 = 9 + 6h + h^2$.',
          'Kürze $h$ aus dem Zähler heraus und lasse $h \\to 0$ laufen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['diff-quotient', 'grenzuebergang'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[grenzuebergang]
      mc(
        'Mara soll $f\'(2)$ für $f(x) = x^2$ berechnen. Sie rechnet $\\dfrac{f(2+1) - f(2)}{1} = \\dfrac{9 - 4}{1} = 5$ und gibt $f\'(2) = 5$ an. Was ist ihr Fehler?',
        [
          'Sie hat $f$ und $f^2$ verwechselt.',
          'Sie hat den Grenzübergang $h \\to 0$ vergessen und nur die Sekantensteigung für $h = 1$ ausgerechnet — der korrekte Wert $f\'(2) = 4$ entsteht erst im Grenzwert.',
          'Sie hat das Vorzeichen vertauscht; richtig wäre $-5$.',
          'Sie hat $f(2+1)$ falsch berechnet, $3^2$ ist nicht $9$.',
        ],
        1,
        `**Ansatz:** Der Differenzenquotient *ohne* Grenzwert ist die mittlere Steigung (Sekante) zwischen $x_0$ und $x_0+h$. Erst $h \\to 0$ macht daraus die momentane Steigung (Tangente).

**Rechnung:** Maras Wert 5 ist die Sekantensteigung auf $[2; 3]$: $(9-4)/(3-2) = 5$. Der korrekte Grenzwert $\\lim_{h \\to 0} (4 + h) = 4$ ergibt $f'(2) = 4$ — die Sekantensteigung 5 ist nur eine grobe Näherung für ein endliches $h = 1$.

**Probe:** $f'(x) = 2x$, $f'(2) = 4 \\neq 5$ ✓ — Maras Ergebnis stimmt nicht mit der Ableitung überein.

**Typischer Fehler:** Den Grenzübergang vergessen und mit endlichem $h$ rechnen. Für kleine $h$ ist man dem korrekten Wert näher: $h = 0{,}01$ liefert $4{,}01$.`,
        [
          'Welcher Wert wäre $f\'(2)$ exakt? Vergleiche mit Maras Ergebnis.',
          'Was hat Mara für $h$ eingesetzt? Was passiert, wenn $h$ kleiner wird?',
          'Sekante wird Tangente erst im Limes — $h$ muss gegen $0$ laufen.',
        ],
        {
          0: 'Es gibt keine Funktion "$f^2$" in diesem Kontext — der Schreibfehler liegt nicht im Symbol, sondern in der fehlenden Grenzwertbildung.',
          2: 'Das Vorzeichen ist nicht das Problem. $f(x) = x^2$ ist bei $x = 2$ steigend, also ist $f\'(2) > 0$. Maras Fehler liegt im Verfahren, nicht im Vorzeichen.',
          3: '$3^2 = 9$ ist korrekt. Mara hat den Differenzenquotient richtig berechnet — aber nur für $h = 1$ statt im Grenzwert $h \\to 0$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['grenzuebergang', 'diff-quotient', 'sek-steigung'] },
      ),
      // Zeile 5: transfer · sorting · uses=[sek-steigung, grenzuebergang, diff-quotient]
      sorting(
        'Sortiere die Schritte, die vom anschaulichen Bild der Sekante zur formalen Definition $f\'(x_0)$ führen.',
        [
          'Zwei Punkte $(x_0, f(x_0))$ und $(x_0+h, f(x_0+h))$ auf dem Funktionsgraphen wählen.',
          'Steigung der Sekante zwischen beiden Punkten aufstellen: $\\dfrac{f(x_0+h)-f(x_0)}{h}$ (Differenzenquotient).',
          'Grenzübergang $h \\to 0$ durchführen — die Sekante schmiegt sich an die Tangente an.',
          '$f\'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}$ ist die Tangentensteigung (Differentialquotient).',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vom geometrischen Bild (zwei Punkte → Sekante) zur Ableitung als Grenzwert. Sekante und Tangente werden durch den Grenzübergang verbunden.

**Rechnung:** Erst zwei Punkte fixieren, daraus Sekantensteigung bilden (mittlere Änderung), dann Grenzübergang $h\\to 0$, was die Tangentensteigung (momentane Änderung) liefert — der Differentialquotient.

**Probe:** Für $f(x) = x^2$, $x_0 = 1$, $h = 0{,}1$: Sekantensteigung $\\dfrac{1{,}21 - 1}{0{,}1} = 2{,}1$. Mit $h \\to 0$ konvergiert das gegen $2 = f'(1)$ ✓.

**Typischer Fehler:** Schritt 3 (Grenzübergang) vergessen — dann bleibt man bei der mittleren Steigung der Sekante.`,
        [
          'Erst geometrische Konstruktion (zwei Punkte), dann algebraische Formel.',
          'Differenzenquotient ist ein Bruch über $h$ — entsteht aus den zwei Punkten.',
          'Grenzwert macht aus „mittlerer Steigung" die „momentane Steigung".',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sek-steigung', 'grenzuebergang', 'diff-quotient'] },
      ),
      // Bonus SG 0: apply-independent · number-input · alternative Funktion
      ni(
        'Berechne $f\'(1)$ für $f(x) = 2x^2$ über den Grenzwert des Differenzenquotienten.',
        4,
        0,
        '',
        `**Ansatz:** $f'(1) = \\lim_{h \\to 0} \\dfrac{f(1+h) - f(1)}{h}$, hier $f(1) = 2$.

**Rechnung:** $\\dfrac{2(1+h)^2 - 2}{h} = \\dfrac{2(1 + 2h + h^2) - 2}{h} = \\dfrac{4h + 2h^2}{h} = 4 + 2h$. Für $h \\to 0$ wird daraus $f'(1) = 4$.

**Probe:** Allgemein $f'(x) = 4x$, $f'(1) = 4$ ✓.

**Typischer Fehler:** Den Vorfaktor $2$ beim Ausmultiplizieren vergessen ($2(1+h)^2 \\neq (1+h)^2$).`,
        [
          'Faktor $2$ steht vor dem Quadrat — beide Summanden $4h$ und $2h^2$ tragen ihn.',
          'Zähler nach dem Ausmultiplizieren faktorisieren: $h$ ausklammern.',
          'Kürzen $h$, dann $h \\to 0$ einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['diff-quotient', 'grenzuebergang'] },
      ),
    ],

    // [1] Tangentensteigung aus f'(x_0) ablesen
    1: [
      // Zeile 6: recognize · true-false · uses=[tangenten-steigung, vorzeichen-fprime]
      tf(
        'Wenn $f\'(x_0) < 0$, dann ist die Tangente an den Graphen von $f$ in $x_0$ eine fallende Gerade (negative Steigung).',
        true,
        `**Ansatz:** $f'(x_0)$ ist die Steigung der Tangente in $x_0$. Vorzeichen von $f'$ entscheidet über fallend/steigend.

**Rechnung:** $f'(x_0) < 0 \\Leftrightarrow$ Tangentensteigung negativ $\\Leftrightarrow$ Tangentengerade fällt von links nach rechts. Lokal ist die Funktion in $x_0$ deshalb auch fallend.

**Probe:** $f(x) = -x^2$, $x_0 = 1$: $f'(x) = -2x$, $f'(1) = -2 < 0$. Tangente $y = -2(x-1) - 1 = -2x + 1$ — fallend ✓.

**Typischer Fehler:** Vorzeichen mit dem Funktionswert $f(x_0)$ verwechseln. Eine negative Funktion ($f(x_0)<0$) kann trotzdem steigen ($f'(x_0)>0$).`,
        [
          'Ableitung = Tangentensteigung. Welches Vorzeichen hat eine fallende Gerade?',
          'Regel: $f\'(x_0) < 0 \\Rightarrow$ fallend, $f\'(x_0) > 0 \\Rightarrow$ steigend.',
          'Nicht verwechseln: $f(x_0)$ (Wert) vs. $f\'(x_0)$ (Steigung).',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['tangenten-steigung', 'vorzeichen-fprime'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[tangenten-steigung]
      mc(
        'Für $f(x) = x^2 - 4x$ ist $f\'(x) = 2x - 4$. Welche Steigung hat die Tangente an $f$ im Punkt mit $x_0 = 3$?',
        ['$2$', '$-3$', '$6$', '$-4$'],
        0,
        `**Ansatz:** Tangentensteigung in $x_0$ ist $f'(x_0)$. Einfach $x_0 = 3$ in die Ableitung einsetzen.

**Rechnung:** $f'(3) = 2 \\cdot 3 - 4 = 6 - 4 = 2$. Tangentensteigung $= 2$.

**Probe:** Bei $x_0 = 3$ liegt der Punkt rechts vom Scheitel der Parabel — dort steigt sie. Steigung positiv ✓. (Scheitel bei $x = 2$ mit $f'(2) = 0$.)

**Typischer Fehler:** Konstante $-4$ vergessen ($2 \\cdot 3 = 6$) oder mit dem Funktionswert $f(3) = 9 - 12 = -3$ verwechseln.`,
        [
          'Tangentensteigung in $x_0$ $=$ Wert von $f\'$ an dieser Stelle.',
          'Setze $x_0 = 3$ in $f\'(x) = 2x - 4$ ein.',
          'Erst multiplizieren, dann subtrahieren.',
        ],
        {
          1: 'Das ist $f(3) = 9 - 12 = -3$ — der Funktionswert, nicht die Steigung. Tangentensteigung $\\neq$ Funktionswert.',
          2: 'Hier wurde nur $2 \\cdot 3 = 6$ gerechnet und die $-4$ vergessen. $f\'(x) = 2x - 4$ enthält den Summanden $-4$ für alle $x$.',
          3: 'Das wäre $f\'(0) = -4$ — der $y$-Achsenabschnitt der Ableitungsgeraden, nicht $f\'(3)$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['tangenten-steigung'] },
      ),
      // Zeile 8: apply-independent · number-input · uses=[tangenten-steigung]
      ni(
        'Die Funktion $f(x) = -\\tfrac{1}{2}x^2 + 3x$ hat die Ableitung $f\'(x) = -x + 3$. Welche Tangentensteigung hat $f$ in $x_0 = 5$?',
        -2,
        0,
        '',
        `**Ansatz:** Tangentensteigung in $x_0$ $= f'(x_0)$.

**Rechnung:** $f'(5) = -5 + 3 = -2$.

**Probe:** Der Scheitel der nach unten offenen Parabel $f$ liegt bei $f'(x) = 0 \\Rightarrow x = 3$. Bei $x_0 = 5$ ist man rechts davon, dort fällt $f$. Steigung negativ ✓.

**Typischer Fehler:** Vorzeichen vergessen oder $f(5) = -12{,}5 + 15 = 2{,}5$ statt $f'(5)$ angeben.`,
        [
          'Einfach $x_0 = 5$ in $f\'$ einsetzen.',
          '$-1 \\cdot 5 = -5$, dann $+3$ addieren.',
          'Vorzeichen sauber führen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['tangenten-steigung'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[vorzeichen-fprime]
      mc(
        'Für eine Funktion $f$ wurde berechnet: $f(2) = -1$ und $f\'(2) = 4$. Lisa folgert: „Die Funktion fällt in $x_0 = 2$, weil $f(2) < 0$." Was ist der Fehler?',
        [
          'Sie verwechselt Funktionswert und Steigung — entscheidend für steigend/fallend ist das Vorzeichen von $f\'(x_0)$, nicht von $f(x_0)$. Mit $f\'(2) = 4 > 0$ steigt $f$ in $x_0 = 2$.',
          'Sie hat $f(2) = -1$ falsch berechnet; richtig wäre $+1$.',
          'Lisa hat recht — wenn $f(x_0) < 0$ ist, fällt die Funktion immer.',
          'Sie hätte $f\'\'(2)$ berechnen müssen, um die Frage zu beantworten.',
        ],
        0,
        `**Ansatz:** Ob $f$ in $x_0$ steigt oder fällt, entscheidet allein das Vorzeichen von $f'(x_0)$. Der Funktionswert $f(x_0)$ sagt nur, *auf welcher Höhe* die Kurve liegt — nicht, wohin sie geht.

**Rechnung:** $f'(2) = 4 > 0 \\Rightarrow$ Tangente steigt $\\Rightarrow$ $f$ ist in $x_0 = 2$ lokal steigend. Dass $f(2) = -1 < 0$ ist, betrifft nur die Höhe (unter der $x$-Achse), nicht die Richtung der Änderung.

**Probe:** Beispiel $f(x) = 4(x-2) - 1$: $f(2) = -1$, $f'(x) = 4 > 0$. Die Gerade steigt sichtbar, obwohl sie bei $x = 2$ negative Werte hat ✓.

**Typischer Fehler:** „Negative Werte $\\Rightarrow$ fällt" — falsch. $f$ und $f'$ sind unabhängige Informationen: Wert vs. Änderungsrate.`,
        [
          'Welche Information sagt etwas über die Richtung — Wert oder Steigung?',
          'Regel: $f\'(x_0) > 0 \\Rightarrow$ steigt, $f\'(x_0) < 0 \\Rightarrow$ fällt.',
          'Vergleiche mit einer Geraden: $y = 4x - 9$ ist bei $x = 2$ negativ und steigt trotzdem.',
        ],
        {
          1: 'Der Wert $f(2) = -1$ ist als gegeben hinzunehmen — er ist keine Berechnung der Aufgabenstellung, sondern Voraussetzung. Der Fehler liegt nicht in der Zahl, sondern in der Logik.',
          2: 'Das ist genau Lisas Fehlschluss. Eine Funktion kann negative Werte haben und trotzdem steigen — z.B. $y = 4x - 9$ ist bei $x = 2$ negativ ($-1$), aber überall steigend.',
          3: 'Für die Frage nach steigend/fallend genügt $f\'$ — $f\'\'$ würde Auskunft über die Krümmung geben (Linkskrümmung vs. Rechtskrümmung), nicht über die Monotonie.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['vorzeichen-fprime', 'tangenten-steigung'] },
      ),
      // Zeile 10: transfer · number-input · uses=[tangenten-gleichung, tangenten-steigung]
      ni(
        'Für $f(x) = x^3$ ist $f\'(x) = 3x^2$. Die Tangente an $f$ in $x_0 = 1$ hat die Form $y = mx + n$. Bestimme den $y$-Achsenabschnitt $n$.',
        -2,
        0,
        '',
        `**Ansatz:** Tangentengleichung in $x_0$: $y = f'(x_0)(x - x_0) + f(x_0)$. Diese Form in $y = mx + n$ umschreiben.

**Rechnung:** $f(1) = 1$, $f'(1) = 3 \\cdot 1^2 = 3$. Tangente: $y = 3(x - 1) + 1 = 3x - 3 + 1 = 3x - 2$. Also $m = 3$, $n = -2$.

**Probe:** Setze $x = 1$ ein: $3 \\cdot 1 - 2 = 1 = f(1)$ ✓ — die Tangente berührt den Graphen tatsächlich in $(1, 1)$.

**Typischer Fehler:** $f'(x_0) \\cdot x_0$ nicht abziehen — also $n = f(x_0) = 1$ angeben statt $n = f(x_0) - f'(x_0) \\cdot x_0 = 1 - 3 = -2$.`,
        [
          'Tangentengleichung: $y = f\'(x_0)(x - x_0) + f(x_0)$.',
          'Klammern auflösen und die Konstanten zu $n$ zusammenfassen.',
          'Probe: setze $x = x_0$ ein und prüfe, ob $y = f(x_0)$ herauskommt.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['tangenten-gleichung', 'tangenten-steigung'] },
      ),
      // Bonus SG 1: transfer · multiple-choice · uses=[tangenten-gleichung, tangenten-steigung]
      mc(
        'Für $f(x) = \\sqrt{x}$ ist $f\'(x) = \\dfrac{1}{2\\sqrt{x}}$. Welche Tangentengleichung hat $f$ in $x_0 = 4$?',
        [
          '$y = \\tfrac{1}{4}x + 1$',
          '$y = \\tfrac{1}{4}x + 2$',
          '$y = 4x - 14$',
          '$y = \\tfrac{1}{4}(x - 4)$',
        ],
        0,
        `**Ansatz:** Tangentengleichung $y = f'(x_0)(x - x_0) + f(x_0)$ mit $x_0 = 4$.

**Rechnung:** $f(4) = 2$, $f'(4) = \\dfrac{1}{2\\sqrt{4}} = \\dfrac{1}{4}$. Tangente: $y = \\dfrac{1}{4}(x - 4) + 2 = \\dfrac{1}{4}x - 1 + 2 = \\dfrac{1}{4}x + 1$.

**Probe:** $x = 4$: $\\tfrac{1}{4} \\cdot 4 + 1 = 2 = \\sqrt{4}$ ✓.

**Typischer Fehler:** Den Beitrag $-f'(x_0) \\cdot x_0 = -1$ vergessen und $n = f(x_0) = 2$ angeben.`,
        [
          'Tangentengleichung: Steigung $\\cdot$ $(x - x_0)$ plus Funktionswert.',
          '$f\'(4) = \\dfrac{1}{2 \\cdot 2} = \\dfrac{1}{4}$.',
          'Konstanten zusammenfassen und Probe in $x_0$ machen.',
        ],
        {
          1: '$+2$ ist $f(4)$, aber der Term $-f\'(4) \\cdot 4 = -1$ wurde nicht subtrahiert. Korrekt: $-1 + 2 = +1$.',
          2: 'Steigung $4$ statt $\\tfrac{1}{4}$ — der Kehrwert wurde vertauscht. $f\'(4) = \\dfrac{1}{2\\sqrt{4}} = \\dfrac{1}{4}$, nicht $2\\sqrt{4} = 4$.',
          3: 'Hier fehlt der Summand $+f(x_0) = +2$. Die reine Form $f\'(x_0)(x - x_0)$ ist eine Tangente *durch den Ursprung in den $x_0$-verschobenen Koordinaten* — der Funktionswert muss noch addiert werden.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['tangenten-gleichung', 'tangenten-steigung'] },
      ),
    ],

    // [2] Notwendige Extremum-Bedingung f'(x_0) = 0
    2: [
      // Zeile 11: recognize · true-false · uses=[extr-notwendig, extr-nicht-hin]
      tf(
        'Aus $f\'(x_0) = 0$ folgt zwingend, dass $f$ in $x_0$ ein lokales Maximum oder Minimum hat.',
        false,
        `**Ansatz:** $f'(x_0) = 0$ ist *notwendig*, nicht *hinreichend*. Sattelpunkte erfüllen die Bedingung auch, ohne Extrema zu sein.

**Rechnung:** Gegenbeispiel $f(x) = x^3$: $f'(x) = 3x^2$, $f'(0) = 0$, aber $f$ steigt überall streng monoton — kein Extremum.

**Probe:** $f(-0{,}1) = -0{,}001 < 0 < 0{,}001 = f(0{,}1)$ — keine Höhe wird über- oder unterschritten ✓.

**Typischer Fehler:** Die Umkehrung „waagerechte Tangente $\\Rightarrow$ Extremum" annehmen. Richtig: jedes Extremum hat waagerechte Tangente, aber nicht jede waagerechte Tangente ist Extremum.`,
        [
          'Welche bekannte Funktion hat $f\'(0) = 0$, aber kein Extremum bei $0$?',
          'Sattelpunkt = waagerechte Tangente ohne Vorzeichenwechsel von $f\'$.',
          '„Notwendig" $\\neq$ „hinreichend" — bei Extrema entscheidet sich das hier.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['extr-notwendig', 'extr-nicht-hin'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[extr-notwendig]
      mc(
        'An welcher Stelle $x_0$ hat die Funktion $f(x) = x^2 - 6x + 4$ wegen $f\'(x_0) = 0$ einen Extremum-Kandidaten?',
        ['$x_0 = 3$', '$x_0 = -3$', '$x_0 = 6$', '$x_0 = 0$'],
        0,
        `**Ansatz:** Extremum-Kandidaten erfüllen die notwendige Bedingung $f'(x_0) = 0$. Erst ableiten, dann Nullstelle der Ableitung suchen.

**Rechnung:** $f'(x) = 2x - 6$. Setze $2x - 6 = 0 \\Leftrightarrow x = 3$. Also $x_0 = 3$.

**Probe:** $f(x) = x^2 - 6x + 4 = (x - 3)^2 - 5$ — Scheitel bei $x = 3$, $y = -5$ ✓ (Minimum).

**Typischer Fehler:** Vorzeichen falsch lösen ($-3$) oder die Ableitung „$2x - 6 = 0 \\Rightarrow x = 6$" rechnen (Faktor $2$ ignoriert).`,
        [
          'Erst $f\'(x)$ bilden.',
          'Setze $f\'(x) = 0$ und löse nach $x$.',
          'Beim Auflösen Vorzeichen beachten: $2x - 6 = 0 \\Rightarrow x = +3$.',
        ],
        {
          1: 'Vorzeichen-Fehler: $2x - 6 = 0$ liefert $x = +3$, nicht $-3$. Die Konstante wandert mit umgekehrtem Vorzeichen auf die andere Seite.',
          2: 'Hier wurde durch $1$ statt durch $2$ geteilt. Aus $2x = 6$ folgt $x = 3$, nicht $x = 6$.',
          3: '$f\'(0) = -6 \\neq 0$ — bei $x = 0$ ist die Tangente nicht waagerecht.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['extr-notwendig'] },
      ),
      // Zeile 13: apply-independent · multiple-choice · uses=[extr-notwendig]
      mc(
        'Die Ableitung einer Funktion $g$ lautet $g\'(x) = x^2 - 9$. An welchen Stellen liegen die Extremum-Kandidaten (notwendige Bedingung)?',
        ['$x = 3$ und $x = -3$', 'nur $x = 3$', 'nur $x = 9$', '$x = 0$'],
        0,
        `**Ansatz:** Notwendige Bedingung: $g'(x) = 0$. Quadratische Gleichung in $x$ lösen.

**Rechnung:** $x^2 - 9 = 0 \\Leftrightarrow x^2 = 9 \\Leftrightarrow x = \\pm 3$. Zwei Kandidaten: $x = 3$ und $x = -3$.

**Probe:** $g'(3) = 9 - 9 = 0$ ✓ und $g'(-3) = 9 - 9 = 0$ ✓.

**Typischer Fehler:** Wurzel nur positiv ziehen ($x = 3$) und die negative Lösung vergessen — typischer Fehler bei $x^2 = a$.`,
        [
          'Setze $g\'(x) = 0$ und isoliere $x^2$.',
          'Wurzelziehen aus $x^2 = 9$ liefert ZWEI Lösungen.',
          '$\\sqrt{9}$ ist $3$, aber $(-3)^2$ ist auch $9$.',
        ],
        {
          1: 'Die negative Lösung wurde vergessen. $x^2 = 9$ hat die zwei Lösungen $x = +3$ und $x = -3$, da auch $(-3)^2 = 9$.',
          2: '$x^2 = 9$ heißt nicht $x = 9$ — beim Wurzelziehen wird der Exponent halbiert. $\\sqrt{9} = 3$, nicht $9$.',
          3: '$g\'(0) = -9 \\neq 0$ — bei $x = 0$ ist die Tangente nicht waagerecht.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['extr-notwendig'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[extr-nicht-hin]
      mc(
        'Lukas berechnet für $f(x) = x^3$: $f\'(x) = 3x^2$, $f\'(0) = 0$. Er folgert: „Bei $x = 0$ liegt ein lokales Minimum von $f$." Was ist sein Fehler?',
        [
          'Er hat die hinreichende Bedingung nicht geprüft — bei $f(x) = x^3$ ist $x = 0$ ein Sattelpunkt: $f\'$ wechselt das Vorzeichen *nicht*, sondern bleibt $\\geq 0$.',
          '$f\'(0)$ ist nicht wirklich $0$, sondern $3$.',
          'Er hätte $f\'(x) = x^3$ statt $3x^2$ schreiben müssen.',
          'Er hätte den Funktionswert $f(0)$ in die Bedingung einsetzen müssen.',
        ],
        0,
        `**Ansatz:** $f'(x_0) = 0$ ist *notwendig*, aber nicht *hinreichend*. Erst der Test auf Vorzeichenwechsel von $f'$ (oder höhere Ableitungen) entscheidet, ob wirklich ein Extremum vorliegt.

**Rechnung:** $f'(x) = 3x^2 \\geq 0$ für alle $x$. Links von $0$ und rechts von $0$ ist $f'$ positiv — *kein* Vorzeichenwechsel. Bei $x = 0$ ist die Tangente waagerecht, aber $f$ steigt durch diesen Punkt durch (Sattelpunkt / Terrassenpunkt).

**Probe:** $f(-0{,}1) = -0{,}001 < f(0) = 0 < f(0{,}1) = 0{,}001$ — kein lokales Min/Max ✓.

**Typischer Fehler:** „$f' = 0$ $\\Rightarrow$ Extremum" wie in der Aufgabe. Immer die hinreichende Bedingung prüfen: Vorzeichenwechsel von $f'$ oder $f''(x_0) \\neq 0$.`,
        [
          'Welche Bedingung ist *notwendig*, welche *hinreichend* für ein Extremum?',
          'Was passiert mit $f\'(x) = 3x^2$ links und rechts von $0$? Vergleiche die Vorzeichen.',
          'Wenn $f\'$ das Vorzeichen *nicht* wechselt, kann es kein Extremum sein — es ist ein Sattelpunkt.',
        ],
        {
          1: '$f\'(x) = 3x^2$ ist eine korrekte Ableitung, und $f\'(0) = 3 \\cdot 0^2 = 0$. Die Berechnung stimmt — der Fehler liegt in der Schlussfolgerung.',
          2: 'Die Ableitung von $x^3$ ist nach der Potenzregel $3x^2$, nicht $x^3$. Lukas\' Ableitung ist korrekt.',
          3: '$f(0)$ ist nicht Teil der notwendigen oder hinreichenden Bedingung. Entscheidend sind $f\'(x_0)$ und das Verhalten von $f\'$ um $x_0$ herum.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['extr-nicht-hin', 'extr-notwendig'] },
      ),
      // Zeile 15: transfer · matching · uses=[extr-notwendig, vorzeichen-fprime]
      matching(
        'Ordne dem Vorzeichenverhalten von $f\'$ links/rechts von $x_0$ (mit $f\'(x_0) = 0$ wo zutreffend) den richtigen Punkttyp zu.',
        [
          { left: '$f\'$ wechselt von $+$ nach $-$ in $x_0$', right: 'lokales Maximum' },
          { left: '$f\'$ wechselt von $-$ nach $+$ in $x_0$', right: 'lokales Minimum' },
          { left: '$f\'(x_0) = 0$, aber $f\'$ wechselt das Vorzeichen NICHT', right: 'Sattelpunkt (Terrassenpunkt)' },
          { left: '$f\'(x_0) > 0$ und $f\'$ bleibt um $x_0$ positiv', right: 'streng monoton steigend, kein Extremum bei $x_0$' },
        ],
        `**Ansatz:** Vorzeichenwechsel-Kriterium (VZW-Test): das Vorzeichen von $f'$ links/rechts von der Kandidatenstelle entscheidet über den Typ.

**Rechnung:** Steigend ($f' > 0$) gefolgt von fallend ($f' < 0$) bildet ein Maximum (Berg). Fallend gefolgt von steigend bildet ein Minimum (Tal). $f'(x_0) = 0$ ohne VZW heißt Sattelpunkt ($x^3$ bei 0). Wenn $f'$ überhaupt nicht $0$ wird, kein Extremum.

**Probe:** $f(x) = -x^2 + 4$: $f'(x) = -2x$, $f'(0) = 0$, $f'$ wechselt von $+$ (für $x<0$) nach $-$ (für $x>0$) $\\Rightarrow$ Maximum bei $x = 0$ ✓.

**Typischer Fehler:** Vorzeichen-Reihenfolge verwechseln ($-$ nach $+$ = Min, nicht Max).`,
        [
          'Welches Vorzeichen hat $f\'$ links/rechts eines Maximums? Eines Minimums?',
          'Sattel: $f\'$ berührt die Null, kreuzt sie aber nicht.',
          'Merksatz: „$+/-$ = Max, $-/+$ = Min" (Vorzeichenfolge von links nach rechts).',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['extr-notwendig', 'vorzeichen-fprime'] },
      ),
      // Bonus SG 2: recognize · true-false · uses=[extr-notwendig]
      tf(
        'Die Bedingung $f\'(x_0) = 0$ ist eine *hinreichende* Bedingung für ein lokales Extremum bei $x_0$.',
        false,
        `**Ansatz:** Begriffe „notwendig" und „hinreichend" sauber trennen. $f'(x_0) = 0$ ist *notwendig*, aber nicht hinreichend.

**Rechnung:** Hinreichend wäre z.B. $f'(x_0) = 0$ UND Vorzeichenwechsel von $f'$, oder $f'(x_0) = 0$ UND $f''(x_0) \\neq 0$. Allein $f'(x_0) = 0$ lässt Sattelpunkte zu.

**Probe:** $f(x) = x^3$ bei $x_0 = 0$: $f'(0) = 0$, aber kein Extremum ✓ — Gegenbeispiel zur Behauptung.

**Typischer Fehler:** Logische Begriffe „notwendig" und „hinreichend" verwechseln. Notwendig = muss erfüllt sein (sonst kein Extremum). Hinreichend = wenn erfüllt, dann garantiert Extremum.`,
        [
          'Welcher Begriff garantiert die Folgerung? Notwendig oder hinreichend?',
          'Kann man ein Gegenbeispiel finden, bei dem $f\'(x_0) = 0$ ohne Extremum?',
          'Sattelpunkt $x^3$ zeigt: $f\'(0) = 0$ allein reicht nicht.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['extr-notwendig', 'extr-nicht-hin'] },
      ),
    ],

    // [3] Ableitung als Momentan-Änderungsrate (Physik)
    3: [
      // Zeile 16: recognize · true-false · uses=[aenderungsrate]
      tf(
        'Wenn $s(t)$ die Position eines Körpers zur Zeit $t$ angibt, dann ist $v(t) = s\'(t)$ die momentane Geschwindigkeit zur Zeit $t$.',
        true,
        `**Ansatz:** Ableitung = momentane Änderungsrate. Position über Zeit abgeleitet ist Geschwindigkeit — Standard-Definition der Kinematik.

**Rechnung:** $v(t) = \\dfrac{ds}{dt} = s'(t)$. Der Differenzenquotient $\\dfrac{s(t+h) - s(t)}{h}$ ist die mittlere Geschwindigkeit, der Grenzwert für $h \\to 0$ die momentane.

**Probe:** $s(t) = \\tfrac{1}{2} g t^2$ (freier Fall): $v(t) = s'(t) = g t$ — bekannt aus der Physik ✓.

**Typischer Fehler:** $v = s/t$ (mittlere Geschwindigkeit ab Start) mit der momentanen Geschwindigkeit verwechseln. Erst der Grenzübergang $h \\to 0$ liefert momentane Werte.`,
        [
          'Welche Ableitung liefert die Geschwindigkeit aus der Position?',
          'Differenzenquotient von $s$ ist die mittlere Geschwindigkeit — Grenzwert liefert momentane.',
          'Physik-Konvention: $v = \\dot{s} = ds/dt = s\'$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['aenderungsrate'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[aenderungsrate]
      mc(
        'Wenn $s(t)$ die Position eines Körpers angibt, durch welche Ableitung ist die Beschleunigung $a(t)$ definiert?',
        ['$a(t) = s\'\'(t)$', '$a(t) = s\'(t)$', '$a(t) = \\int s(t)\\,dt$', '$a(t) = s(t) \\cdot t$'],
        0,
        `**Ansatz:** Geschwindigkeit ist erste Ableitung der Position ($v = s'$). Beschleunigung ist Änderungsrate der Geschwindigkeit ($a = v'$). Verkettet: $a = (s')' = s''$.

**Rechnung:** $a(t) = \\dfrac{dv}{dt} = \\dfrac{d^2 s}{dt^2} = s''(t)$.

**Probe:** $s(t) = \\tfrac{1}{2} g t^2$: $s'(t) = g t = v(t)$, $s''(t) = g = a(t)$ — konstante Beschleunigung beim freien Fall ✓.

**Typischer Fehler:** Beschleunigung mit Geschwindigkeit verwechseln ($a = s'$ statt $s''$). Oder Integral statt Ableitung — Integral wäre der Weg aus der Geschwindigkeit.`,
        [
          'Welche „Stufe" von Änderungsrate ist die Beschleunigung — erste oder zweite?',
          'Beschleunigung = Änderung der Geschwindigkeit pro Zeit.',
          'Verkette zwei Ableitungen: $a = (s\')\' = s\'\'$.',
        ],
        {
          1: 'Das ist die Geschwindigkeit $v(t)$, nicht die Beschleunigung. Beschleunigung ist die Änderungsrate der Geschwindigkeit, also eine *weitere* Ableitung.',
          2: 'Integration ist die Umkehrung der Ableitung. $\\int s\\,dt$ liefert nichts physikalisch Sinnvolles — Beschleunigung entsteht aus *Ableiten*, nicht aus Integrieren.',
          3: 'Das ist eine reine Produktbildung ohne Bezug zur Ableitung. Beschleunigung hat die Einheit $\\text{m/s}^2$ und entsteht aus der zweiten Ableitung von $s$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['aenderungsrate'] },
      ),
      // Zeile 18: apply-independent · number-input · uses=[aenderungsrate]
      ni(
        'Ein Fahrzeug bewegt sich gemäß $s(t) = 4 t^2$ (Strecke in $\\text{m}$, Zeit in $\\text{s}$). Die momentane Geschwindigkeit ist $v(t) = s\'(t) = 8 t$. Welchen Wert hat $v$ zur Zeit $t = 3\\,\\text{s}$?',
        24,
        0,
        'm/s',
        `**Ansatz:** Momentane Geschwindigkeit $v(t) = s'(t)$. Einfach $t = 3$ in $v(t) = 8t$ einsetzen.

**Rechnung:** $v(3) = 8 \\cdot 3 = 24\\,\\text{m/s}$.

**Probe:** Einheiten: $s$ in $\\text{m}$, $t$ in $\\text{s}$, also $v$ in $\\text{m/s}$ ✓. Größenordnung: nach $3\\,\\text{s}$ bei Beschleunigung $a = s''(t) = 8\\,\\text{m/s}^2$ kommt der Körper aus dem Stand auf $a \\cdot t = 8 \\cdot 3 = 24\\,\\text{m/s}$ ✓.

**Typischer Fehler:** $s(3) = 4 \\cdot 9 = 36\\,\\text{m}$ statt $v(3)$ angeben — Position statt Geschwindigkeit verwechseln.`,
        [
          'Geschwindigkeit zur Zeit $t = 3\\,\\text{s}$ ist $v(3)$, nicht $s(3)$.',
          'Setze $t = 3$ in $v(t) = 8t$ ein.',
          'Einheit am Ende mitschreiben: $\\text{m/s}$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['aenderungsrate'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[aenderungsrate]
      mc(
        'Tom liest aus einer Tabelle: $s(2\\,\\text{s}) = 12\\,\\text{m}$ und $s(2{,}1\\,\\text{s}) = 13{,}5\\,\\text{m}$. Er rechnet $\\dfrac{13{,}5 - 12}{0{,}1} = 15$ und behauptet: „Die momentane Geschwindigkeit zur Zeit $t = 2\\,\\text{s}$ ist genau $15\\,\\text{m/s}$." Was ist Toms Fehler?',
        [
          'Er hat nur die mittlere Geschwindigkeit auf dem Intervall $[2\\,\\text{s};\\,2{,}1\\,\\text{s}]$ berechnet (Differenzenquotient) — die momentane Geschwindigkeit wäre der Grenzwert für $h \\to 0$ und kann von $15\\,\\text{m/s}$ abweichen.',
          'Er hätte mit $0{,}01$ statt $0{,}1$ teilen müssen.',
          'Er hat das Vorzeichen vergessen — richtig wäre $-15\\,\\text{m/s}$.',
          'Das Ergebnis $15$ ist exakt korrekt, kein Fehler.',
        ],
        0,
        `**Ansatz:** Ein Differenzenquotient *ohne* Grenzübergang ist die *mittlere* Geschwindigkeit auf dem Zeitintervall, nicht die *momentane* Geschwindigkeit am Anfangspunkt.

**Rechnung:** Toms Wert $\\dfrac{s(2{,}1) - s(2)}{0{,}1} = \\dfrac{1{,}5}{0{,}1} = 15\\,\\text{m/s}$ ist die mittlere Geschwindigkeit auf $[2;\\,2{,}1]$. Die momentane Geschwindigkeit $v(2) = s'(2)$ entsteht erst im Grenzwert $h \\to 0$ und kann von $15$ abweichen, wenn die Bewegung nicht gleichförmig beschleunigt ist.

**Probe:** Beispielfunktion $s(t) = 3 t^2$: $s(2) = 12$, $s(2{,}1) = 3 \\cdot 4{,}41 = 13{,}23 \\approx 13{,}5$. Momentangeschw. $v(t) = 6t$, $v(2) = 12\\,\\text{m/s}$ — nicht $15$. Die Sekanten-Mittelung überschätzt hier ✗.

**Typischer Fehler:** Mittlere und momentane Geschwindigkeit gleichsetzen. Erst $h \\to 0$ macht aus „mittlerer" eine „momentane" Größe.`,
        [
          'Was ist der Unterschied zwischen mittlerer und momentaner Geschwindigkeit?',
          'Der Differenzenquotient ohne Grenzwert ist eine *Sekanten*-Geschwindigkeit.',
          'Erst $h \\to 0$ macht aus der Sekante eine Tangente — und aus der Mittel- die Momentangeschwindigkeit.',
        ],
        {
          1: 'Der Nenner ist korrekt: $h = 2{,}1 - 2 = 0{,}1\\,\\text{s}$. Tom hat richtig durch $0{,}1$ geteilt — der Fehler liegt nicht im Nenner, sondern darin, dass er $h \\to 0$ nicht durchgeführt hat.',
          2: 'Es gibt kein negatives Vorzeichen — die Strecke wächst von $12$ auf $13{,}5\\,\\text{m}$ (positive Bewegung).',
          3: 'Doch, es ist ein Fehler: $15\\,\\text{m/s}$ ist die *mittlere* Geschwindigkeit, nicht die momentane. Diese können nur dann übereinstimmen, wenn die Bewegung gleichförmig ist (lineare $s(t)$).',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['aenderungsrate', 'grenzuebergang'] },
      ),
      // Zeile 20: transfer · matching · uses=[aenderungsrate]
      matching(
        'Ordne jeder physikalischen Größe die korrekte Ableitungs-Bedeutung zu.',
        [
          { left: '$s\'(t)$, wenn $s$ die Position ist', right: 'momentane Geschwindigkeit $v(t)$ (in $\\text{m/s}$)' },
          { left: '$v\'(t)$, wenn $v$ die Geschwindigkeit ist', right: 'momentane Beschleunigung $a(t)$ (in $\\text{m/s}^2$)' },
          { left: '$Q\'(t)$, wenn $Q$ die elektrische Ladung ist', right: 'momentane Stromstärke $I(t)$ (in $\\text{A}$)' },
          { left: '$T\'(t)$, wenn $T$ die Temperatur ist', right: 'momentane Erwärmungsrate (in $\\text{K/s}$)' },
        ],
        `**Ansatz:** Jede Ableitung nach der Zeit liefert eine momentane Änderungsrate der zugrundeliegenden Größe. Einheit der Ableitung = Einheit der Ausgangsgröße / Zeiteinheit.

**Rechnung:** $s$ in $\\text{m}$ → $s'$ in $\\text{m/s}$ (Geschwindigkeit). $v$ in $\\text{m/s}$ → $v'$ in $\\text{m/s}^2$ (Beschleunigung). $Q$ in $\\text{C}$ → $Q'$ in $\\text{C/s} = \\text{A}$ (Stromstärke). $T$ in $\\text{K}$ → $T'$ in $\\text{K/s}$ (Erwärmungsrate).

**Probe:** $Q(t) = 2 t$, $Q'(t) = 2$: $2\\,\\text{C/s} = 2\\,\\text{A}$ ✓. Definition: $I = dQ/dt$.

**Typischer Fehler:** Einheit der Ableitung vergessen oder Begriffe verwechseln (z.B. $v$ und $a$).`,
        [
          'Welche Einheit hat die Ableitung im Vergleich zur Ausgangsgröße?',
          'Position → Geschwindigkeit → Beschleunigung sind drei „Stufen" in der Mechanik.',
          'In der Elektrotechnik: $I = dQ/dt$ — Strom ist die zeitliche Änderungsrate der Ladung.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['aenderungsrate'] },
      ),
      // Bonus SG 3: apply-independent · number-input · andere physikalische Größe
      ni(
        'Die elektrische Ladung an einem Bauteil ist $Q(t) = 3 t^2 + 2 t$ (in Coulomb, $t$ in Sekunden). Die Stromstärke ist $I(t) = Q\'(t) = 6 t + 2$. Welchen Wert hat $I$ zur Zeit $t = 1\\,\\text{s}$?',
        8,
        0,
        'A',
        `**Ansatz:** $I(t) = Q'(t)$ ist die momentane Stromstärke. Einsetzen von $t = 1\\,\\text{s}$.

**Rechnung:** $I(1) = 6 \\cdot 1 + 2 = 8\\,\\text{A}$.

**Probe:** Einheit: $Q$ in $\\text{C}$, $t$ in $\\text{s}$, also $I$ in $\\text{C/s} = \\text{A}$ ✓. Größenordnung: bei $t = 0$ ist $I(0) = 2\\,\\text{A}$, bei $t = 1$ wegen wachsendem $6t$-Term auf $8\\,\\text{A}$ angestiegen.

**Typischer Fehler:** $Q(1) = 5\\,\\text{C}$ statt $I(1)$ angeben — Ladung statt Stromstärke verwechseln.`,
        [
          'Stromstärke = Ableitung der Ladung nach der Zeit.',
          'Setze $t = 1\\,\\text{s}$ in $I(t) = 6t + 2$ ein.',
          'Endergebnis in Ampere.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['aenderungsrate'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // abl-1-2 · Potenzregel und Summenregel
  // ─────────────────────────────────────────────────────────────────────────
  'abl-1-2': {
    // [0] Potenzregel (x^n)' = n x^{n-1}
    0: [
      // Zeile 1: recognize · true-false · uses=[pot-regel]
      tf(
        'Die Potenzregel lautet $(x^n)\' = n \\cdot x^{n-1}$. Speziell gilt damit $(x^5)\' = 5 x^4$.',
        true,
        `**Ansatz:** Die Potenzregel ist die Grundregel für Monome $x^n$: Der Exponent wandert als Vorfaktor nach vorn, der neue Exponent ist um $1$ kleiner.

**Rechnung:** Mit $n = 5$: $(x^5)' = 5 \\cdot x^{5-1} = 5 x^4$. Allgemein: jeder Exponent wird mit dem alten Exponenten als Vorfaktor multipliziert und der Exponent um $1$ reduziert.

**Probe:** Numerisch bei $x = 2$: $f'(2) = 5 \\cdot 16 = 80$. Sekantensteigung $\\dfrac{2{,}001^5 - 2^5}{0{,}001} \\approx 80{,}04$ ✓.

**Typischer Fehler:** Vorfaktor vergessen ($x^4$ statt $5x^4$) oder Exponent nicht reduzieren ($5x^5$).`,
        [
          'Wie lautet die Standard-Form der Potenzregel?',
          'Exponent zuerst als Vorfaktor nach vorn, dann um $1$ verringern.',
          'Setze $n = 5$ in $(x^n)\' = n x^{n-1}$ ein.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['pot-regel'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[pot-regel]
      mc(
        'Welche Ableitung hat $f(x) = x^7$?',
        ['$7 x^6$', '$7 x^7$', '$x^6$', '$6 x^7$'],
        0,
        `**Ansatz:** Potenzregel mit $n = 7$: Exponent als Vorfaktor, neuer Exponent um $1$ kleiner.

**Rechnung:** $(x^7)' = 7 \\cdot x^{7-1} = 7 x^6$.

**Probe:** Bei $x = 1$: $f'(1) = 7 \\cdot 1 = 7$. Sekantensteigung $\\dfrac{1{,}001^7 - 1}{0{,}001} \\approx 7{,}02$ ✓.

**Typischer Fehler:** Exponent nicht reduzieren ($7x^7$) oder Vorfaktor weglassen ($x^6$).`,
        [
          'Potenzregel: $(x^n)\' = n \\cdot x^{n-1}$.',
          'Hier $n = 7$. Wandert nach vorn, dann minus $1$.',
          'Endergebnis muss niedrigeren Exponenten als $x^7$ haben.',
        ],
        {
          1: 'Exponent nicht reduziert. Die Potenzregel hat zwei Schritte: Vorfaktor *und* Exponent um $1$ kleiner. Hier wurde nur der Vorfaktor gesetzt.',
          2: 'Vorfaktor vergessen. Der alte Exponent $n = 7$ muss als Vorfaktor erscheinen — $1 \\cdot x^6$ wäre $(x \\cdot \\text{etwas})\'$, aber nicht $(x^7)\'$.',
          3: 'Verwechslung: Es muss der ALTE Exponent ($7$) als Vorfaktor stehen, nicht der neue ($6$). Außerdem wurde der Exponent nicht reduziert.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pot-regel'] },
      ),
      // Zeile 3: apply-independent · number-input · uses=[pot-regel]
      ni(
        'Berechne $f\'(2)$ für $f(x) = x^4$.',
        32,
        0,
        '',
        `**Ansatz:** Erst Potenzregel anwenden, dann $x_0 = 2$ einsetzen.

**Rechnung:** $f'(x) = 4 x^3$. $f'(2) = 4 \\cdot 2^3 = 4 \\cdot 8 = 32$.

**Probe:** Sekantensteigung $\\dfrac{2{,}001^4 - 2^4}{0{,}001} = \\dfrac{16{,}0320\\ldots - 16}{0{,}001} \\approx 32{,}02$ ✓.

**Typischer Fehler:** $f(2) = 16$ statt $f'(2)$ angeben. Oder $2^4 = 8$ falsch berechnen.`,
        [
          'Erst die Ableitungsfunktion bilden.',
          'Dann $x_0 = 2$ in $f\'(x)$ einsetzen — nicht in $f(x)$.',
          '$2^3 = 8$, dann mit $4$ multiplizieren.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pot-regel'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[pot-regel]
      mc(
        'Anna berechnet $(x^6)\' = x^5$. Was ist ihr Fehler?',
        [
          'Sie hat den Exponenten korrekt um $1$ reduziert, aber den Vorfaktor $n = 6$ vergessen — richtig ist $(x^6)\' = 6 x^5$.',
          'Die Funktion $x^6$ ist nicht ableitbar.',
          'Der Exponent muss erhöht werden, nicht reduziert.',
          'Sie hätte zuerst den Logarithmus bilden müssen.',
        ],
        0,
        `**Ansatz:** Die Potenzregel besteht aus zwei Schritten: (1) Exponent als Vorfaktor nach vorn, (2) neuen Exponenten um $1$ verringern. Anna macht nur (2).

**Rechnung:** Korrekt: $(x^6)' = 6 \\cdot x^{6-1} = 6 x^5$. Annas Ergebnis $x^5$ wäre die Ableitung von $\\tfrac{1}{6}x^6$ — also nur des Bruchteils.

**Probe:** Bei $x = 1$: korrektes $f'(1) = 6$, Annas Ergebnis $1^5 = 1$ — Faktor $6$ fehlt.

**Typischer Fehler:** Genau dieser — den Vorfaktor "übersehen", weil er nur eine "kleine" Zahl ist. Hilft: mit $n = 6$ konkret anschreiben.`,
        [
          'Welche zwei Schritte hat die Potenzregel?',
          'Vergleiche Annas Lösung mit $(x^n)\' = n x^{n-1}$ für $n = 6$.',
          'Fehlt da was vor dem $x^5$?',
        ],
        {
          1: '$x^6$ ist ein Polynom — alle Polynome sind beliebig oft differenzierbar. Annas Problem ist nicht die Existenz der Ableitung, sondern die Anwendung der Regel.',
          2: 'Falsch: Die Potenzregel REDUZIERT den Exponenten um $1$. Eine Erhöhung wäre die Integration ($\\int x^n dx$), nicht die Ableitung.',
          3: 'Logarithmen kommen bei der logarithmischen Ableitung von Produkten zum Einsatz, nicht bei einfachen Potenzen. Die Potenzregel ist direkt anwendbar.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['pot-regel'] },
      ),
      // Zeile 5: transfer · multiple-choice · uses=[pot-regel]
      mc(
        'Was ist die Ableitung von $f(x) = x^{100}$?',
        ['$100 x^{99}$', '$100 x^{100}$', '$99 x^{100}$', '$x^{99}$'],
        0,
        `**Ansatz:** Die Potenzregel funktioniert für jeden Exponenten gleich — auch für große Zahlen wie $n = 100$. Keine Sonderbehandlung nötig.

**Rechnung:** $(x^{100})' = 100 \\cdot x^{100 - 1} = 100 x^{99}$.

**Probe:** Allgemeines Schema: alter Exponent als Vorfaktor, neuer um $1$ kleiner. Hier $100 \\to 100$ als Faktor, $100 - 1 = 99$ als neuer Exponent.

**Typischer Fehler:** Bei großen Exponenten Angst vor „Sonderfällen" — gibt es nicht. Die Regel ist universell.`,
        [
          'Die Potenzregel hat keine Größenbeschränkung am Exponenten.',
          'Welchen Vorfaktor und welchen neuen Exponenten erwartet die Regel?',
          '$n = 100$: Vorfaktor $100$, neuer Exponent $99$.',
        ],
        {
          1: 'Exponent nicht reduziert. Auch bei großem $n$ muss der neue Exponent um genau $1$ kleiner sein.',
          2: 'Vorfaktor und neuer Exponent vertauscht. Vorfaktor = alter Exponent ($100$), neuer Exponent = alter minus $1$ ($99$) — nicht umgekehrt.',
          3: 'Vorfaktor fehlt. Ohne $100$ vor $x^{99}$ wäre das die Ableitung von $\\tfrac{1}{100} x^{100}$, nicht von $x^{100}$.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['pot-regel'] },
      ),
      // Bonus SG 0: apply-independent · number-input · uses=[pot-regel]
      ni(
        'Berechne $f\'(2)$ für $f(x) = x^5$.',
        80,
        0,
        '',
        `**Ansatz:** Potenzregel: $f'(x) = 5 x^4$. Einsetzen $x_0 = 2$.

**Rechnung:** $f'(2) = 5 \\cdot 2^4 = 5 \\cdot 16 = 80$.

**Probe:** Sekantensteigung $\\dfrac{2{,}001^5 - 2^5}{0{,}001} \\approx 80{,}04$ ✓.

**Typischer Fehler:** $2^4$ als $8$ statt $16$ rechnen (mit $2^3$ verwechselt).`,
        [
          'Ableitung mit Potenzregel: Exponent vor, dann minus $1$.',
          'Setze $x_0 = 2$ in $f\'(x) = 5 x^4$ ein.',
          '$2^4 = 16$, dann $\\cdot 5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pot-regel'] },
      ),
    ],

    // [1] Summenregel / Polynome
    1: [
      // Zeile 6: recognize · true-false · uses=[summen-regel]
      tf(
        'Für jede Summe gilt $(f(x) + g(x))\' = f\'(x) + g\'(x)$. Man darf also jeden Summanden einzeln ableiten und die Ergebnisse addieren.',
        true,
        `**Ansatz:** Summenregel der Differentiation: Ableitung verteilt sich linear über Summen.

**Rechnung:** $(f + g)' = f' + g'$ folgt direkt aus der Definition des Differentialquotienten, da Grenzwerte ebenfalls linear sind: $\\lim(a + b) = \\lim a + \\lim b$.

**Probe:** $(x^2 + x)' = (x^2)' + (x)' = 2x + 1$. Numerisch bei $x = 1$: $\\dfrac{(1{,}001^2 + 1{,}001) - 2}{0{,}001} \\approx 3 = 2 \\cdot 1 + 1$ ✓.

**Typischer Fehler:** Summenregel mit Produktregel verwechseln. Für Produkte gilt $(f \\cdot g)' \\neq f' \\cdot g'$.`,
        [
          'Wie verteilt sich die Ableitung über Summen?',
          'Summen und Differenzen darf man Summand für Summand ableiten.',
          'Aber Vorsicht bei Produkten — dort gilt eine andere Regel.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['summen-regel'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[summen-regel, polynom-abl]
      mc(
        'Was ist die Ableitung von $f(x) = x^4 + x^2$?',
        ['$4 x^3 + 2 x$', '$x^3 + x$', '$4 x^3 \\cdot 2 x = 8 x^4$', '$6 x^6$'],
        0,
        `**Ansatz:** Summenregel: jeden Summanden mit der Potenzregel einzeln ableiten, dann addieren.

**Rechnung:** $(x^4)' = 4 x^3$ und $(x^2)' = 2 x$. Damit $f'(x) = 4 x^3 + 2 x$.

**Probe:** Bei $x = 1$: $f'(1) = 4 + 2 = 6$. Sekantensteigung $\\dfrac{(1{,}001^4 + 1{,}001^2) - 2}{0{,}001} \\approx 6{,}01$ ✓.

**Typischer Fehler:** Summe mit Produkt verwechseln ($\\cdot$ statt $+$) oder Exponenten unverändert lassen.`,
        [
          'Summenregel: $(f + g)\' = f\' + g\'$.',
          'Jeden Summanden mit der Potenzregel ableiten.',
          'Am Ende mit $+$ verbinden, nicht mit $\\cdot$.',
        ],
        {
          1: 'Vorfaktoren der Potenzregel vergessen. $(x^4)\' = 4 x^3$ (mit Faktor $4$), nicht $x^3$. Ebenso $(x^2)\' = 2 x$, nicht $x$.',
          2: 'Summenregel mit Produktregel verwechselt. Bei *Summen* werden die Ableitungen ADDIERT, nicht multipliziert. Multiplikation gäbe das Produkt der Ableitungen, was eine andere Funktion ist.',
          3: 'Exponenten addiert statt einzeln zu reduzieren. Die Potenzregel reduziert *jeden* Exponenten um $1$ — sie addiert keine.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['summen-regel', 'polynom-abl', 'pot-regel'] },
      ),
      // Zeile 8: apply-independent · number-input · uses=[polynom-abl]
      ni(
        'Berechne $f\'(3)$ für $f(x) = x^3 + x^2 - 7 x$.',
        26,
        0,
        '',
        `**Ansatz:** Polynom: Summen-, Faktor- und Potenzregel kombinieren.

**Rechnung:** $f'(x) = 3 x^2 + 2 x - 7$. Einsetzen $x_0 = 3$: $f'(3) = 3 \\cdot 9 + 2 \\cdot 3 - 7 = 27 + 6 - 7 = 26$.

**Probe:** Sekantensteigung $\\dfrac{f(3{,}001) - f(3)}{0{,}001} \\approx 26{,}03$ ✓.

**Typischer Fehler:** $(-7x)' = 0$ statt $-7$ (linearen Faktor mit Konstanten verwechselt). Oder $f(3) = 27 + 9 - 21 = 15$ statt $f'(3)$ angeben.`,
        [
          'Erst die komplette Ableitung als neues Polynom.',
          '$(x^3)\' = 3 x^2$, $(x^2)\' = 2 x$, $(-7 x)\' = -7$.',
          'Dann $x_0 = 3$ einsetzen — nicht in $f(x)$, sondern in $f\'(x)$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['polynom-abl', 'summen-regel', 'pot-regel', 'faktor-regel'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[summen-regel]
      mc(
        'Tom soll $(x^3 + x^5)\'$ berechnen. Er schreibt $(x^3 + x^5)\' = (x^3)\' \\cdot (x^5)\' = 3 x^2 \\cdot 5 x^4 = 15 x^6$. Was ist sein Fehler?',
        [
          'Er hat die Produktregel statt der Summenregel angewendet — bei Summen werden die Ableitungen *addiert*, nicht multipliziert. Richtig: $(x^3 + x^5)\' = 3 x^2 + 5 x^4$.',
          'Die Einzelableitungen $(x^3)\'$ und $(x^5)\'$ sind falsch.',
          '$3 x^2 \\cdot 5 x^4 = 15 x^6$ ist nicht korrekt ausmultipliziert.',
          'Toms Ergebnis ist eigentlich korrekt, da $f$ ein Produkt ist.',
        ],
        0,
        `**Ansatz:** Summenregel $(f + g)' = f' + g'$ — Verknüpfungs-OPERATION zwischen den Einzelableitungen ist Addition, nicht Multiplikation.

**Rechnung:** Korrekt: $(x^3 + x^5)' = 3 x^2 + 5 x^4$. Toms Ergebnis $15 x^6$ wäre die Ableitung des PRODUKTS $x^3 \\cdot x^5 = x^8$, deren Ableitung ist aber $8 x^7$ — also nicht einmal das.

**Probe:** Bei $x = 1$: korrektes $f'(1) = 3 + 5 = 8$. Toms Ergebnis $15$ — deutlich daneben.

**Typischer Fehler:** Genau das — die Verknüpfungs-Operation kopieren ($+$ rein, $+$ raus). Hier hat Tom Multiplikation $\\cdot$ verwendet, obwohl in der Ausgangsfunktion ein $+$ steht.`,
        [
          'Welche Operation verbindet $x^3$ und $x^5$ in der ursprünglichen Funktion?',
          'Die Summenregel sagt: dieselbe Operation gilt für die Einzelableitungen.',
          'Tom hat $\\cdot$ verwendet, obwohl in $f$ ein $+$ steht — das ist die Produktregel.',
        ],
        {
          1: '$(x^3)\' = 3 x^2$ und $(x^5)\' = 5 x^4$ sind beide korrekt (Potenzregel angewandt). Toms Fehler liegt nicht in den Einzelableitungen, sondern im Verknüpfen.',
          2: '$3 x^2 \\cdot 5 x^4 = 15 x^{2+4} = 15 x^6$ ist arithmetisch korrekt — der Fehler ist, dass diese Multiplikation überhaupt durchgeführt wurde. Bei Summen wird ADDIERT.',
          3: '$f(x) = x^3 + x^5$ ist eine SUMME, kein Produkt. Daher gilt die Summenregel, nicht die Produktregel.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['summen-regel', 'pot-regel'] },
      ),
      // Zeile 10: transfer · number-input · uses=[polynom-abl]
      ni(
        'Für das Polynom $f(x) = \\tfrac{1}{3} x^3 - x$ gilt $f\'(x) = x^2 - 1$. Bestimme den größten $x$-Wert, an dem die Tangente an $f$ waagerecht verläuft.',
        1,
        0,
        '',
        `**Ansatz:** Tangente waagerecht $\\Leftrightarrow$ $f'(x) = 0$. Nullstellen von $f'$ suchen, dann den größten $x$-Wert nehmen.

**Rechnung:** $f'(x) = x^2 - 1 = 0 \\Leftrightarrow x^2 = 1 \\Leftrightarrow x = \\pm 1$. Größter Wert: $x = +1$.

**Probe:** $f'(1) = 1 - 1 = 0$ ✓. Und $f'(-1) = 1 - 1 = 0$, aber $-1 < 1$. Also ist $x = 1$ der größte.

**Typischer Fehler:** Negative Lösung vergessen und gar nicht erst überprüfen, ob es eine größere gibt. Oder fälschlich $x = \\sqrt{1} = 1$ als einzige Lösung angeben (Wurzel hat IMMER auch eine negative Lösung).`,
        [
          'Waagerechte Tangente bedeutet $f\'(x) = 0$.',
          'Quadratische Gleichung $x^2 = 1$ hat ZWEI Lösungen.',
          'Größter Wert von $\\{-1, +1\\}$ ist $+1$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['polynom-abl', 'summen-regel', 'pot-regel'] },
      ),
      // Bonus SG 1: recognize · true-false · uses=[summen-regel, polynom-abl]
      tf(
        'Die Differenzenregel folgt aus der Summenregel: $(f - g)\' = f\' - g\'$. So gilt $(x^3 - x^2)\' = 3 x^2 - 2 x$.',
        true,
        `**Ansatz:** Differenzen sind Summen mit negativem Vorzeichen ($f - g = f + (-g)$). Die Summenregel + Faktorregel ($(-g)' = -g'$) ergibt die Differenzenregel.

**Rechnung:** $(f - g)' = (f + (-g))' = f' + (-g)' = f' - g'$. Konkret: $(x^3 - x^2)' = 3 x^2 - 2 x$.

**Probe:** Bei $x = 1$: $f'(1) = 3 - 2 = 1$. Sekantensteigung $\\dfrac{(1{,}001^3 - 1{,}001^2) - 0}{0{,}001} \\approx 1{,}00$ ✓.

**Typischer Fehler:** Vorzeichen beim zweiten Summanden vergessen — also $(x^3 - x^2)' = 3 x^2 + 2 x$ schreiben statt mit Minus.`,
        [
          'Differenz = Summe mit negativem Summanden.',
          'Faktorregel: konstante Vorfaktoren (auch $-1$) bleiben erhalten.',
          'Die Vorzeichen werden NICHT durch Ableiten umgekehrt — sie wandern mit.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['summen-regel', 'polynom-abl', 'pot-regel'] },
      ),
    ],

    // [2] Wurzeln und Kehrwerte als Potenzen
    2: [
      // Zeile 11: recognize · true-false · uses=[pot-negativ, pot-gebrochen]
      tf(
        'Vor dem Ableiten kann man $\\sqrt[3]{x}$ als $x^{1/3}$ und $\\dfrac{1}{x^2}$ als $x^{-2}$ umschreiben. Anschließend wird die Potenzregel ganz normal angewandt.',
        true,
        `**Ansatz:** Wurzeln und Kehrwerte sind in Wahrheit Potenzen mit rationalen oder negativen Exponenten. Dadurch wird die Potenzregel universell anwendbar.

**Rechnung:** $\\sqrt[n]{x} = x^{1/n}$ und $\\dfrac{1}{x^n} = x^{-n}$. Nach dem Umschreiben gilt $(x^\\alpha)' = \\alpha x^{\\alpha - 1}$ für jeden reellen Exponenten $\\alpha$.

**Probe:** $(\\sqrt[3]{x})' = (x^{1/3})' = \\tfrac{1}{3} x^{-2/3} = \\dfrac{1}{3 \\sqrt[3]{x^2}}$ — funktioniert sauber.

**Typischer Fehler:** Die Wurzel oder den Bruch nicht umschreiben und dann mit „eigenen Regeln" rechnen, die meist falsch sind. Erst umschreiben, dann ableiten.`,
        [
          'Welche Schreibweise hat die Potenzregel als Eingabe nötig?',
          'Wurzel = Potenz mit Bruch im Exponent ($\\sqrt[n]{x} = x^{1/n}$).',
          'Bruch = Potenz mit negativem Exponent ($1/x^n = x^{-n}$).',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pot-negativ', 'pot-gebrochen', 'pot-regel'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[pot-gebrochen]
      mc(
        'Was ist die Ableitung von $f(x) = \\sqrt[3]{x} = x^{1/3}$?',
        [
          '$\\dfrac{1}{3} x^{-2/3}$',
          '$3 x^{2/3}$',
          '$\\dfrac{1}{3} x^{4/3}$',
          '$x^{-2/3}$',
        ],
        0,
        `**Ansatz:** Potenzregel mit $n = \\tfrac{1}{3}$. Vorfaktor $\\tfrac{1}{3}$, neuer Exponent $\\tfrac{1}{3} - 1 = -\\tfrac{2}{3}$.

**Rechnung:** $(x^{1/3})' = \\tfrac{1}{3} \\cdot x^{1/3 - 1} = \\tfrac{1}{3} \\cdot x^{-2/3} = \\dfrac{1}{3 \\sqrt[3]{x^2}}$.

**Probe:** Bei $x = 1$: $f'(1) = \\tfrac{1}{3}$. Sekantensteigung $\\dfrac{1{,}001^{1/3} - 1}{0{,}001} \\approx 0{,}333$ ✓.

**Typischer Fehler:** $\\tfrac{1}{3} - 1 = -\\tfrac{2}{3}$ falsch rechnen ($-\\tfrac{1}{3}$ oder $+\\tfrac{2}{3}$). Oder Kehrwert beim Vorfaktor bilden ($3$ statt $\\tfrac{1}{3}$).`,
        [
          'Schreibe die Wurzel als Potenz: $\\sqrt[3]{x} = x^{1/3}$.',
          'Potenzregel mit $n = \\tfrac{1}{3}$: Vorfaktor = $\\tfrac{1}{3}$, neuer Exponent = $\\tfrac{1}{3} - 1$.',
          '$\\tfrac{1}{3} - 1 = \\tfrac{1}{3} - \\tfrac{3}{3} = -\\tfrac{2}{3}$.',
        ],
        {
          1: 'Vorfaktor falsch (Kehrwert): $n = \\tfrac{1}{3}$ steht als Vorfaktor, nicht $\\tfrac{1}{n} = 3$. Außerdem ist der Exponent $\\tfrac{1}{3} - 1 = -\\tfrac{2}{3}$ negativ, nicht positiv $\\tfrac{2}{3}$.',
          2: 'Exponent falsch berechnet: $\\tfrac{1}{3} - 1 = -\\tfrac{2}{3}$, nicht $+\\tfrac{4}{3}$. Beim "minus eins" wird der Exponent KLEINER, hier sogar negativ.',
          3: 'Vorfaktor $\\tfrac{1}{3}$ vergessen. Die Potenzregel hat den ALTEN Exponenten als Vorfaktor — bei gebrochenen Exponenten ist das ein Bruch.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pot-gebrochen', 'pot-regel'] },
      ),
      // Zeile 13: apply-independent · number-input · uses=[pot-negativ, pot-regel]
      ni(
        'Berechne $f\'(2)$ für $f(x) = \\dfrac{1}{x^3} = x^{-3}$. Gib das Ergebnis als Dezimalzahl an.',
        -0.1875,
        0.001,
        '',
        `**Ansatz:** Erst als Potenz schreiben, dann Potenzregel mit $n = -3$, dann $x_0 = 2$ einsetzen.

**Rechnung:** $f'(x) = -3 \\cdot x^{-3-1} = -3 x^{-4} = -\\dfrac{3}{x^4}$. Bei $x_0 = 2$: $f'(2) = -\\dfrac{3}{2^4} = -\\dfrac{3}{16} = -0{,}1875$.

**Probe:** Sekantensteigung $\\dfrac{1/2{,}001^3 - 1/2^3}{0{,}001} \\approx -0{,}1875$ ✓.

**Typischer Fehler:** Vorzeichen vergessen (positiv statt negativ). Oder $-3 - 1 = -2$ rechnen statt $-4$.`,
        [
          'Schreibe $1/x^3$ als $x^{-3}$.',
          'Potenzregel: Vorfaktor $-3$, neuer Exponent $-3 - 1 = -4$.',
          '$2^4 = 16$, dann $-3/16 = -0{,}1875$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pot-negativ', 'pot-regel'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[pot-negativ]
      mc(
        'Lina berechnet $(x^{-4})\' = 4 x^{-5}$. Was ist ihr Fehler?',
        [
          'Sie hat das Vorzeichen verloren — bei negativen Exponenten wandert der NEGATIVE Wert als Vorfaktor nach vorn. Richtig: $(x^{-4})\' = -4 x^{-5}$.',
          'Bei negativen Exponenten gilt die Potenzregel nicht.',
          'Der neue Exponent muss $-3$ sein, nicht $-5$.',
          '$x^{-4}$ ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Die Potenzregel $(x^n)' = n x^{n-1}$ gilt für JEDES reelle $n$ — der Vorfaktor übernimmt aber auch das VORZEICHEN von $n$.

**Rechnung:** Mit $n = -4$: Vorfaktor $-4$, neuer Exponent $-4 - 1 = -5$. Also $(x^{-4})' = -4 x^{-5} = -\\dfrac{4}{x^5}$.

**Probe:** $f(x) = 1/x^4$ ist eine fallende Funktion für $x > 0$ — Ableitung muss negativ sein, also Vorzeichen $-$ ✓.

**Typischer Fehler:** Genau dieser — den Betrag des Exponenten als Vorfaktor schreiben statt den Exponenten selbst (mit Vorzeichen).`,
        [
          'Welches Vorzeichen hat $-4$ als Vorfaktor?',
          '$n$ wandert MIT Vorzeichen nach vorn — der Vorfaktor ist $-4$, nicht $4$.',
          'Vergleiche mit der Funktion: $1/x^4$ fällt für $x>0$, also $f\' < 0$.',
        ],
        {
          1: 'Doch, die Potenzregel gilt für alle reellen Exponenten — auch negative und gebrochene. Linas Berechnung wäre fast korrekt, ihr fehlt nur das Vorzeichen.',
          2: 'Der neue Exponent $-5$ ist korrekt: $-4 - 1 = -5$. Linas Fehler liegt im Vorfaktor, nicht im neuen Exponenten.',
          3: '$x^{-4} = 1/x^4$ ist für $x \\neq 0$ definiert und differenzierbar. Es gibt keinen Grund, die Funktion abzuweisen.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pot-negativ', 'pot-regel'] },
      ),
      // Zeile 15: transfer · number-input · uses=[pot-gebrochen]
      ni(
        'Berechne $f\'(4)$ für $f(x) = \\sqrt{x}$. Gib das Ergebnis als Dezimalzahl an.',
        0.25,
        0.001,
        '',
        `**Ansatz:** $\\sqrt{x} = x^{1/2}$. Potenzregel mit $n = \\tfrac{1}{2}$, dann $x_0 = 4$ einsetzen.

**Rechnung:** $f'(x) = \\tfrac{1}{2} x^{-1/2} = \\dfrac{1}{2 \\sqrt{x}}$. Bei $x_0 = 4$: $f'(4) = \\dfrac{1}{2 \\cdot 2} = \\dfrac{1}{4} = 0{,}25$.

**Probe:** Sekantensteigung $\\dfrac{\\sqrt{4{,}001} - 2}{0{,}001} \\approx 0{,}2500$ ✓.

**Typischer Fehler:** Vorfaktor $\\tfrac{1}{2}$ vergessen oder $\\sqrt{4} = 4$ rechnen.`,
        [
          'Schreibe $\\sqrt{x} = x^{1/2}$.',
          'Potenzregel mit $n = \\tfrac{1}{2}$: $f\'(x) = \\tfrac{1}{2} x^{-1/2} = \\dfrac{1}{2 \\sqrt{x}}$.',
          '$\\sqrt{4} = 2$, dann $\\dfrac{1}{2 \\cdot 2} = \\dfrac{1}{4}$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pot-gebrochen', 'pot-regel'] },
      ),
      // Bonus SG 2: apply-guided · multiple-choice · uses=[pot-gebrochen]
      mc(
        'Was ist die Ableitung von $f(x) = x^{3/2}$ (= $\\sqrt{x^3}$)?',
        [
          '$\\tfrac{3}{2} x^{1/2}$',
          '$\\tfrac{3}{2} x^{3/2}$',
          '$\\tfrac{2}{3} x^{1/2}$',
          '$\\tfrac{3}{2} x^{5/2}$',
        ],
        0,
        `**Ansatz:** Potenzregel mit $n = \\tfrac{3}{2}$. Vorfaktor $\\tfrac{3}{2}$, neuer Exponent $\\tfrac{3}{2} - 1 = \\tfrac{1}{2}$.

**Rechnung:** $(x^{3/2})' = \\tfrac{3}{2} x^{1/2} = \\tfrac{3}{2} \\sqrt{x}$.

**Probe:** Bei $x = 1$: $f'(1) = \\tfrac{3}{2} = 1{,}5$. Sekantensteigung $\\dfrac{1{,}001^{3/2} - 1}{0{,}001} \\approx 1{,}50$ ✓.

**Typischer Fehler:** Den Exponenten nicht um $1$ reduzieren oder den Kehrwert nehmen.`,
        [
          'Potenzregel mit $n = \\tfrac{3}{2}$.',
          '$\\tfrac{3}{2} - 1 = \\tfrac{1}{2}$ — den Exponenten subtrahieren, nicht den Bruch invertieren.',
          'Neuer Vorfaktor = alter Exponent = $\\tfrac{3}{2}$.',
        ],
        {
          1: 'Exponent nicht reduziert. $\\tfrac{3}{2} - 1 = \\tfrac{1}{2}$, nicht $\\tfrac{3}{2}$. Die Potenzregel verlangt IMMER „minus $1$".',
          2: 'Vorfaktor invertiert. $n = \\tfrac{3}{2}$ wandert UNVERÄNDERT nach vorn — nicht als Kehrwert $\\tfrac{2}{3}$.',
          3: 'Exponent in falsche Richtung verändert: $\\tfrac{3}{2} - 1 = \\tfrac{1}{2}$, nicht $\\tfrac{5}{2}$. Die Regel zieht ab, addiert nicht.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pot-gebrochen', 'pot-regel'] },
      ),
    ],

    // [3] Konstanten und Konstante Faktoren
    3: [
      // Zeile 16: recognize · true-false · uses=[konst-regel]
      tf(
        'Die Ableitung einer Konstanten ist null: $(c)\' = 0$ für jede reelle Zahl $c$. Damit gilt z. B. $(42)\' = 0$ und $(\\pi)\' = 0$.',
        true,
        `**Ansatz:** Eine Konstante ändert sich nicht — also ist ihre Änderungsrate null.

**Rechnung:** $(c)' = \\lim_{h \\to 0} \\dfrac{c - c}{h} = \\lim_{h \\to 0} \\dfrac{0}{h} = 0$. Funktioniert für jede reelle Konstante.

**Probe:** $(42)' = 0$, $(\\pi)' = 0$, $(\\sqrt{2})' = 0$ — alles korrekt, weil keine $x$-Abhängigkeit.

**Typischer Fehler:** Konstanten wie Variablen behandeln (z.B. $(42)' = 42$). Aber $42$ hat keine $x$-Abhängigkeit, also keine Steigung.`,
        [
          'Was passiert mit dem Funktionswert, wenn $x$ sich verändert, aber $f(x) = 42$?',
          'Konstanter Wert $\\Rightarrow$ keine Veränderung $\\Rightarrow$ Steigung $0$.',
          'Anschaulich: $f(x) = 42$ ist eine waagerechte Gerade, deren Tangente überall Steigung $0$ hat.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['konst-regel'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[faktor-regel, konst-regel]
      mc(
        'Was ist die Ableitung von $f(x) = 7 x^3 + 12$?',
        ['$21 x^2$', '$21 x^2 + 12$', '$7 x^2 + 12$', '$21 x^3$'],
        0,
        `**Ansatz:** Summenregel + Faktorregel + Konstantenregel: $(7x^3)' = 7 \\cdot 3 x^2 = 21 x^2$, $(12)' = 0$.

**Rechnung:** $f'(x) = 21 x^2 + 0 = 21 x^2$.

**Probe:** Bei $x = 1$: $f'(1) = 21$. Sekantensteigung $\\dfrac{(7 \\cdot 1{,}001^3 + 12) - 19}{0{,}001} \\approx 21{,}02$ ✓.

**Typischer Fehler:** Konstante $12$ stehen lassen (mitgeschleppt) statt auf $0$ abzuleiten.`,
        [
          'Summen: jeden Summanden einzeln.',
          'Konstante: $(12)\' = 0$ — verschwindet komplett.',
          'Faktorregel: Vorfaktor $7$ bleibt, Exponent wird reduziert.',
        ],
        {
          1: 'Konstante $12$ wurde mitgeschleppt — sie hat aber Ableitung $0$. Korrekt: nur der $x$-abhängige Teil bleibt übrig.',
          2: 'Faktorregel falsch: $(7 x^3)\' = 7 \\cdot (x^3)\' = 7 \\cdot 3 x^2 = 21 x^2$ (nicht $7 x^2$). Der $3$ aus der Potenzregel wurde vergessen. Außerdem wurde die Konstante $12$ wieder mitgeschleppt.',
          3: 'Exponent nicht reduziert. Korrekt ist $(7 x^3)\' = 21 x^2$ (Exponent $3 \\to 2$), nicht $21 x^3$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['faktor-regel', 'konst-regel', 'pot-regel'] },
      ),
      // Zeile 18: apply-independent · number-input · uses=[faktor-regel, pot-regel]
      ni(
        'Berechne $f\'(1)$ für $f(x) = 5 x^4$.',
        20,
        0,
        '',
        `**Ansatz:** Faktorregel + Potenzregel: konstanter Faktor $5$ bleibt, $(x^4)' = 4 x^3$.

**Rechnung:** $f'(x) = 5 \\cdot 4 x^3 = 20 x^3$. Bei $x_0 = 1$: $f'(1) = 20 \\cdot 1 = 20$.

**Probe:** Sekantensteigung $\\dfrac{5 \\cdot 1{,}001^4 - 5}{0{,}001} \\approx 20{,}03$ ✓.

**Typischer Fehler:** Vorfaktor $5$ vergessen ($4 x^3$ statt $20 x^3$) oder $1^3 = 0$ statt $1$ rechnen.`,
        [
          'Faktorregel: konstanter Vorfaktor bleibt erhalten.',
          'Potenzregel auf $x^4$: $(x^4)\' = 4 x^3$.',
          'Vorfaktoren multiplizieren: $5 \\cdot 4 = 20$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['faktor-regel', 'pot-regel'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[konst-regel]
      mc(
        'Max berechnet $f(x) = 4 x^2 + 9$. Er gibt als Ableitung $f\'(x) = 8 x + 9$ an. Was ist sein Fehler?',
        [
          'Er hat die Konstante $9$ wie eine Variable behandelt — Konstanten haben Ableitung $0$. Richtig: $f\'(x) = 8 x$.',
          '$(4 x^2)\' = 8 x$ ist falsch berechnet.',
          'Er hätte zuerst die Konstante isolieren müssen.',
          'Bei Polynomen müssen alle Summanden gleich behandelt werden.',
        ],
        0,
        `**Ansatz:** Konstantenregel $(c)' = 0$ konsequent anwenden. Jeder Summand ohne $x$-Abhängigkeit verschwindet.

**Rechnung:** Korrekt: $f'(x) = (4 x^2)' + (9)' = 8 x + 0 = 8 x$. Max hat die $9$ unverändert "abgeschrieben".

**Probe:** Bei $x = 1$: korrektes $f'(1) = 8$. Sekantensteigung $\\dfrac{(4 \\cdot 1{,}001^2 + 9) - 13}{0{,}001} \\approx 8{,}00$ ✓.

**Typischer Fehler:** Genau dieser — konstante Summanden „mitschleppen". Oft passiert, wenn man die Funktion einfach mit gleichem Aufbau abschreibt und nur Exponenten ändert.`,
        [
          'Welche Ableitungsregel gilt für Konstanten?',
          '$(c)\' = 0$ — Konstanten verschwinden komplett, nicht nur teilweise.',
          'Prüfe Max\'s zweiten Summanden mit der Konstantenregel.',
        ],
        {
          1: '$(4 x^2)\' = 4 \\cdot 2 x = 8 x$ ist korrekt. Faktorregel + Potenzregel sauber angewandt. Max\' Fehler liegt nur beim konstanten Summanden.',
          2: 'Konstanten müssen nicht isoliert werden — die Summenregel erlaubt das Ableiten Summand für Summand. Das eigentliche Problem ist die FALSCHE Ableitung der Konstante, nicht ihre Handhabung im Ausdruck.',
          3: 'Im Gegenteil: bei der Summenregel werden Summanden VERSCHIEDEN behandelt — variable Summanden mit Potenzregel, Konstanten mit Konstantenregel. „Gleich behandeln" wäre der falsche Ansatz.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['konst-regel'] },
      ),
      // Zeile 20: transfer · matching · uses=[konst-regel, faktor-regel]
      matching(
        'Ordne jeder Funktion ihre Ableitung zu.',
        [
          { left: '$f(x) = 100$', right: '$f\'(x) = 0$' },
          { left: '$f(x) = 5 x$', right: '$f\'(x) = 5$' },
          { left: '$f(x) = 7 x^2$', right: '$f\'(x) = 14 x$' },
          { left: '$f(x) = -3 x^4$', right: '$f\'(x) = -12 x^3$' },
        ],
        `**Ansatz:** Vier Bauteile der Ableitungsregeln: Konstante (=0), linearer Term (=Vorfaktor), Faktorregel + Potenzregel.

**Rechnung:**
- $(100)' = 0$ (Konstantenregel)
- $(5 x)' = 5 \\cdot (x)' = 5 \\cdot 1 = 5$ (Faktor + Potenzregel mit $n = 1$)
- $(7 x^2)' = 7 \\cdot 2 x = 14 x$
- $(-3 x^4)' = -3 \\cdot 4 x^3 = -12 x^3$ (Vorzeichen wird mitgenommen)

**Probe:** Vier verschiedene Vorfaktoren und Exponenten — jede Ableitung hat eine eindeutige Struktur. Z.B. nur $f = 5 x$ hat eine *konstante* Ableitung; nur $f = 100$ wird zu $0$.

**Typischer Fehler:** $(5 x)'$ als $5 x^0 = 5$ richtig erkennen, aber bei $(7 x^2)'$ den Faktor $2$ aus der Potenzregel vergessen ($7 x$ statt $14 x$).`,
        [
          'Konstante: Ableitung $= 0$.',
          'Linearer Term $c x$: Ableitung $= c$.',
          'Faktorregel $\\cdot$ Potenzregel: Vorfaktoren multiplizieren, Exponent minus $1$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['konst-regel', 'faktor-regel', 'pot-regel'] },
      ),
      // Bonus SG 3: apply-independent · number-input · uses=[faktor-regel, pot-regel]
      ni(
        'Berechne $f\'(3)$ für $f(x) = 6 x^2 + 8$.',
        36,
        0,
        '',
        `**Ansatz:** Konstante verschwindet, Faktorregel + Potenzregel auf $6 x^2$.

**Rechnung:** $f'(x) = 12 x + 0 = 12 x$. Bei $x_0 = 3$: $f'(3) = 36$.

**Probe:** Sekantensteigung $\\dfrac{(6 \\cdot 3{,}001^2 + 8) - 62}{0{,}001} \\approx 36{,}01$ ✓.

**Typischer Fehler:** Konstante $8$ mitnehmen oder Vorfaktor $6 \\cdot 2 = 12$ vergessen.`,
        [
          'Konstante $8$ hat Ableitung $0$ — wird komplett gestrichen.',
          'Faktor $6$ bleibt, Potenzregel auf $x^2$: $6 \\cdot 2 x = 12 x$.',
          'Bei $x_0 = 3$: $12 \\cdot 3 = 36$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['faktor-regel', 'konst-regel', 'pot-regel'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // abl-1-3 · Ableitungen elementarer Funktionen
  // ─────────────────────────────────────────────────────────────────────────
  'abl-1-3': {
    // [0] sin/cos/tan
    0: [
      // Zeile 1: recognize · true-false · uses=[abl-sin, abl-cos]
      tf(
        'Es gilt $(\\sin x)\' = \\cos x$ und $(\\cos x)\' = -\\sin x$. Das Minuszeichen entsteht beim Ableiten des KOSINUS — nicht des Sinus.',
        true,
        `**Ansatz:** Der trigonometrische Ableitungszyklus $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$ zeigt: das Vorzeichen wechselt erst beim zweiten Schritt (von $\\cos$ zu $-\\sin$).

**Rechnung:** $(\\sin x)' = +\\cos x$ (Sinus steigt bei $x = 0$, Steigung $+1$). $(\\cos x)' = -\\sin x$ (Kosinus fällt bei $x = \\pi/2$ von $0$ ab, Steigung $-\\sin(\\pi/2) = -1$).

**Probe:** Bei $x = 0$: $\\sin'(0) = \\cos 0 = +1$, $\\cos'(0) = -\\sin 0 = 0$ — beide Vorzeichen passen zur Anschauung des Graphen.

**Typischer Fehler:** Minuszeichen falsch zuordnen — z. B. $(\\sin x)' = -\\cos x$ schreiben. Merksatz: „Cosinus kriegt das Minus."`,
        [
          'Welche Funktion bekommt im Ableitungszyklus das Minuszeichen?',
          'Skizziere $\\sin$ und $\\cos$ und prüfe die Steigung bei $x = 0$.',
          'Sinus steigt bei $0$ (Steigung $+1$), Kosinus fällt bei $\\pi/2$ (Steigung $-1$).',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['abl-sin', 'abl-cos'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[abl-sin, abl-cos]
      mc(
        'Was ist die Ableitung von $f(x) = \\sin x - \\cos x$?',
        ['$\\cos x + \\sin x$', '$\\cos x - \\sin x$', '$-\\sin x - \\cos x$', '$\\sin x - \\cos x$'],
        0,
        `**Ansatz:** Summenregel: $(\\sin x - \\cos x)' = (\\sin x)' - (\\cos x)'$. Wichtig: das Minuszeichen vor $\\cos x$ bleibt, und zusätzlich kommt aus $(\\cos x)' = -\\sin x$ ein zweites Minus dazu.

**Rechnung:** $(\\sin x)' = \\cos x$. $(\\cos x)' = -\\sin x$. Damit $f'(x) = \\cos x - (-\\sin x) = \\cos x + \\sin x$.

**Probe:** Bei $x = 0$: $f'(0) = \\cos 0 + \\sin 0 = 1 + 0 = 1$. Numerisch $\\dfrac{f(0{,}001) - f(0)}{0{,}001} \\approx 1{,}00$ ✓.

**Typischer Fehler:** Das Doppel-Minus übersehen: $- (-\\sin x) = +\\sin x$.`,
        [
          'Summenregel: jeden Summanden einzeln ableiten.',
          '$(\\cos x)\' = -\\sin x$. Was ergibt $- \\cdot (-\\sin x)$?',
          'Vorzeichen sauber führen: $-1 \\cdot -1 = +1$.',
        ],
        {
          1: 'Doppelminus übersehen: aus $- \\cos x$ wird beim Ableiten $- (-\\sin x) = + \\sin x$, nicht $- \\sin x$.',
          2: 'Beide Vorzeichen falsch. Sinus wird zu $+\\cos$ (nicht $-\\sin$), Kosinus zu $-\\sin$. Hier wurden offensichtlich falsche Ableitungen verwendet.',
          3: 'Funktion wurde nicht abgeleitet — das ist immer noch $f(x)$ selbst.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['abl-sin', 'abl-cos', 'summen-regel'] },
      ),
      // Zeile 3: apply-independent · number-input · uses=[abl-sin, abl-cos]
      ni(
        'Berechne $f\'(\\pi)$ für $f(x) = \\sin x$.',
        -1,
        0,
        '',
        `**Ansatz:** $f'(x) = \\cos x$ (Grundableitung), dann $x_0 = \\pi$ einsetzen.

**Rechnung:** $f'(\\pi) = \\cos \\pi = -1$.

**Probe:** Bei $x = \\pi$ hat $\\sin x$ den Wert $0$ und fällt steil — die Steigung ist negativ und beträgt $-1$, was zur Grafik passt.

**Typischer Fehler:** $\\sin(\\pi) = 0$ statt $\\cos(\\pi)$ angeben — Funktionswert statt Ableitung.`,
        [
          'Erst die Ableitung: $(\\sin x)\' = \\cos x$.',
          'Dann $x_0 = \\pi$ in $\\cos$ einsetzen.',
          '$\\cos \\pi = -1$ aus dem Einheitskreis.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['abl-sin', 'abl-cos'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[abl-cos]
      mc(
        'Anna schreibt $(\\cos x)\' = \\sin x$. Was ist ihr Fehler?',
        [
          'Sie hat das Minuszeichen vergessen — richtig ist $(\\cos x)\' = -\\sin x$. Bei $x = \\pi/2$ fällt $\\cos$ von $1$ auf $0$, also muss die Ableitung dort negativ sein.',
          'Sie hätte stattdessen $\\cos x$ schreiben müssen, da Kosinus seine eigene Ableitung ist.',
          'Sinus und Kosinus haben dieselbe Ableitung, also ist ihre Antwort egal.',
          '$\\cos x$ ist nicht differenzierbar.',
        ],
        0,
        `**Ansatz:** Im Ableitungszyklus $\\sin \\to \\cos \\to -\\sin \\to -\\cos$ bekommt der Kosinus das Minuszeichen — nicht der Sinus.

**Rechnung:** Korrekt: $(\\cos x)' = -\\sin x$. Annas Ergebnis $+\\sin x$ hat das falsche Vorzeichen — der „klassische Cosinus-Fehler".

**Probe:** Bei $x = \\pi/2$: korrektes $f'(\\pi/2) = -\\sin(\\pi/2) = -1$. Annas Ergebnis $+\\sin(\\pi/2) = +1$ — falsches Vorzeichen.

**Typischer Fehler:** Genau dieser — beim schnellen Rechnen das Minuszeichen vergessen oder zum Sinus statt zum Kosinus tippen.`,
        [
          'Welches Vorzeichen erwartet man bei $(\\cos x)\'$?',
          'Zeichne $\\cos x$ bei $\\pi/2$: fällt oder steigt?',
          'Fallender Kosinus $\\Rightarrow$ negative Ableitung $\\Rightarrow$ Minus muss da sein.',
        ],
        {
          1: 'Nur $e^x$ ist seine eigene Ableitung — $\\cos x$ ist es nicht. Annas Fehler liegt nicht in der Funktion, sondern im Vorzeichen.',
          2: '$\\sin$ und $\\cos$ haben VERSCHIEDENE Ableitungen: $(\\sin x)\' = +\\cos x$ und $(\\cos x)\' = -\\sin x$. Die Vorzeichen unterscheiden sich.',
          3: '$\\cos x$ ist auf ganz $\\mathbb{R}$ differenzierbar. Annas Aufgabe ist nicht die Differenzierbarkeit, sondern die korrekte Ableitung.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['abl-cos', 'abl-sin'] },
      ),
      // Zeile 5: transfer · matching · uses=[abl-sin, abl-cos, abl-tan]
      matching(
        'Ordne jeder trigonometrischen Funktion ihre Ableitung zu.',
        [
          { left: '$(\\sin x)\'$', right: '$\\cos x$' },
          { left: '$(\\cos x)\'$', right: '$-\\sin x$' },
          { left: '$(-\\sin x)\'$', right: '$-\\cos x$' },
          { left: '$(\\tan x)\'$', right: '$\\dfrac{1}{\\cos^2 x}$' },
        ],
        `**Ansatz:** Der trigonometrische Ableitungszyklus $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$ liefert die ersten drei Zuordnungen. $(\\tan x)'$ folgt aus der Quotientenregel.

**Rechnung:**
- $(\\sin x)' = \\cos x$ (Zyklus-Schritt 1)
- $(\\cos x)' = -\\sin x$ (Zyklus-Schritt 2 — Minuszeichen!)
- $(-\\sin x)' = -\\cos x$ (Faktorregel: $-1 \\cdot \\cos x$)
- $(\\tan x)' = \\dfrac{1}{\\cos^2 x}$, herleitbar aus $\\tan = \\sin / \\cos$ + Quotientenregel.

**Probe:** Bei $x = 0$: $\\sin'(0) = 1$, $\\cos'(0) = 0$, $(-\\sin)'(0) = -1$, $\\tan'(0) = 1/\\cos^2 0 = 1$ — alle Werte passen zu den Graphen.

**Typischer Fehler:** $(\\cos x)'$ und $(-\\sin x)'$ verwechseln — beide haben ein Minus, aber an unterschiedlicher Stelle (vor $\\sin$ bzw. vor $\\cos$).`,
        [
          'Im Zyklus wandert das Vorzeichen mit der Ableitung mit.',
          'Faktorregel: konstante Vorfaktoren (auch $-1$) bleiben erhalten.',
          'Tangens ist Spezialfall — aus Quotientenregel oder Tabelle.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['abl-sin', 'abl-cos', 'abl-tan'] },
      ),
      // Bonus SG 0: recognize · true-false · uses=[abl-tan]
      tf(
        'Die Ableitung des Tangens lässt sich gleichwertig als $(\\tan x)\' = 1 + \\tan^2 x$ schreiben — äquivalent zu $1/\\cos^2 x$.',
        true,
        `**Ansatz:** $\\tan x = \\sin x / \\cos x$. Quotientenregel ergibt $\\dfrac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$.

**Rechnung:** Mit dem Pythagoras-Trigo $\\sin^2 + \\cos^2 = 1$ ist der Zähler $= 1$, also $(\\tan x)' = \\dfrac{1}{\\cos^2 x}$. Alternativ: $\\dfrac{\\cos^2 + \\sin^2}{\\cos^2} = 1 + \\dfrac{\\sin^2}{\\cos^2} = 1 + \\tan^2 x$. Beide Formen sind gleichwertig.

**Probe:** Bei $x = 0$: $1/\\cos^2 0 = 1/1 = 1$ und $1 + \\tan^2 0 = 1 + 0 = 1$ ✓.

**Typischer Fehler:** $(\\tan x)' = 1/\\sin^2 x$ schreiben (Sinus mit Kosinus verwechselt — der Nenner muss $\\cos^2 x$ sein, weil der ursprüngliche Quotient Kosinus im Nenner hat).`,
        [
          'Welche trigonometrische Identität verknüpft $\\sin^2$ und $\\cos^2$?',
          'Pythagoras-Trigo: $\\sin^2 + \\cos^2 = 1$.',
          'Damit lassen sich beide Formen ineinander überführen.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['abl-tan', 'abl-sin', 'abl-cos'] },
      ),
    ],

    // [1] e^x und ln x
    1: [
      // Zeile 6: recognize · true-false · uses=[abl-exp, abl-ln]
      tf(
        'Die Exponentialfunktion $e^x$ ist (bis auf konstante Faktoren) die einzige Funktion, die mit ihrer eigenen Ableitung übereinstimmt: $(e^x)\' = e^x$. Für den natürlichen Logarithmus gilt zudem $(\\ln x)\' = 1/x$ (für $x > 0$).',
        true,
        `**Ansatz:** Zwei zentrale Grundableitungen, die in jeder Prüfung vorkommen.

**Rechnung:** $(e^x)' = e^x$ — das macht $e \\approx 2{,}71828$ zur „natürlichen" Basis. $(\\ln x)' = 1/x$ folgt aus der Umkehrfunktionsregel und ist nur für $x > 0$ definiert.

**Probe:** Bei $x = 0$: $(e^x)'(0) = e^0 = 1$ — Tangentensteigung von $e^x$ im Ursprung ist $1$. Bei $x = 1$: $(\\ln x)'(1) = 1/1 = 1$ — Tangente an $\\ln x$ im Punkt $(1, 0)$ hat Steigung $1$.

**Typischer Fehler:** $e^x$ wie eine Potenz $x^e$ behandeln (Variable statt Konstante im Exponent verwechselt). $(x^e)' = e \\cdot x^{e-1}$, aber $(e^x)' = e^x$ — völlig verschieden.`,
        [
          'Welche Funktion ist ihre eigene Ableitung?',
          'Welche Ableitung hat der natürliche Logarithmus?',
          '$e^x$ und $\\ln x$ sind Umkehrfunktionen voneinander.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['abl-exp', 'abl-ln'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[abl-exp]
      mc(
        'Was ist die Ableitung von $f(x) = 2 e^x$?',
        ['$2 e^x$', '$e^x$', '$2 x e^{x-1}$', '$2 e^{x-1}$'],
        0,
        `**Ansatz:** Faktorregel: konstanter Vorfaktor $2$ bleibt. $(e^x)' = e^x$.

**Rechnung:** $f'(x) = 2 \\cdot (e^x)' = 2 \\cdot e^x = 2 e^x$.

**Probe:** Bei $x = 0$: $f'(0) = 2 \\cdot 1 = 2$. Sekantensteigung $\\dfrac{2 e^{0{,}001} - 2}{0{,}001} \\approx 2{,}001$ ✓.

**Typischer Fehler:** Faktor $2$ vergessen oder die Potenzregel auf $e^x$ anwenden (Variable ist hier der Exponent, nicht die Basis).`,
        [
          'Faktorregel: konstante Vorfaktoren bleiben.',
          '$(e^x)\' = e^x$ — die Funktion ist ihre eigene Ableitung.',
          'Beachte: $e$ ist eine KONSTANTE im Exponenten, $x$ ist die Variable.',
        ],
        {
          1: 'Faktor $2$ vergessen — die Faktorregel sagt: $(c \\cdot f)\' = c \\cdot f\'$, also bleibt der $2$ vor der Ableitung stehen.',
          2: 'Potenzregel falsch angewandt. $(e^x)\' \\neq x \\cdot e^{x-1}$ — die Potenzregel gilt nur, wenn die Variable die BASIS ist (wie bei $x^n$), nicht der EXPONENT.',
          3: 'Hier wurde der Exponent um $1$ reduziert — wieder die Potenzregel auf falscher Stelle. $e^x$ behält den Exponenten $x$, der Vorfaktor $2$ bleibt, fertig.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['abl-exp', 'faktor-regel'] },
      ),
      // Zeile 8: apply-independent · number-input · uses=[abl-exp, abl-ln]
      ni(
        'Berechne $f\'(1)$ für $f(x) = e^x + \\ln x$. Gib das Ergebnis auf 4 Dezimalstellen an.',
        3.7183,
        0.001,
        '',
        `**Ansatz:** Summenregel mit beiden Grundableitungen: $(e^x)' = e^x$ und $(\\ln x)' = 1/x$.

**Rechnung:** $f'(x) = e^x + \\dfrac{1}{x}$. Bei $x_0 = 1$: $f'(1) = e^1 + 1/1 = e + 1 \\approx 2{,}7183 + 1 = 3{,}7183$.

**Probe:** Numerisch: $\\dfrac{(e^{1{,}001} + \\ln 1{,}001) - (e + 0)}{0{,}001} \\approx 3{,}7187$ ✓.

**Typischer Fehler:** $\\ln(1) = 0$ als Ableitungswert verwenden (statt $1/1 = 1$). Oder $e$ mit $e^1 \\approx 2{,}718$ falsch numerisch eintippen.`,
        [
          'Summenregel: jeden Summanden einzeln ableiten.',
          '$(e^x)\' = e^x$, $(\\ln x)\' = 1/x$.',
          'Bei $x = 1$: $e^1 = e \\approx 2{,}7183$, $1/1 = 1$. Addieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['abl-exp', 'abl-ln', 'summen-regel'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[abl-exp]
      mc(
        'Tim berechnet $(e^x)\' = x \\cdot e^{x-1}$. Was ist sein Fehler?',
        [
          'Er hat die Potenzregel auf eine Exponentialfunktion angewandt — die Potenzregel $(x^n)\' = n x^{n-1}$ gilt nur, wenn die VARIABLE die Basis ist. Bei $e^x$ steht die Variable im EXPONENTEN, dort gilt $(e^x)\' = e^x$.',
          '$e^x$ ist nicht differenzierbar.',
          'Er hätte zuerst den Logarithmus bilden müssen.',
          'Sein Ergebnis ist eigentlich richtig, da $e \\approx x$.',
        ],
        0,
        `**Ansatz:** Zwei verschiedene Regeln NICHT verwechseln: Potenzregel $(x^n)' = n x^{n-1}$ vs. Exponentialregel $(a^x)' = a^x \\ln a$. Bei $e^x$ ist Letzteres mit $\\ln e = 1$ einschlägig.

**Rechnung:** Korrekt: $(e^x)' = e^x \\cdot \\ln e = e^x \\cdot 1 = e^x$. Tims Ergebnis $x \\cdot e^{x-1}$ wäre die Ableitung der ganz anderen Funktion $g(x) = x^e$.

**Probe:** Bei $x = 1$: korrektes $f'(1) = e \\approx 2{,}718$. Tims Ergebnis $1 \\cdot e^0 = 1$ — deutlich daneben.

**Typischer Fehler:** Genau dieser — die zwei „Potenz"-Schreibweisen verwechseln. Merksatz: Variable als BASIS $\\Rightarrow$ Potenzregel; Variable als EXPONENT $\\Rightarrow$ Exponentialregel.`,
        [
          'Welche Variable steht in $e^x$ wo — Basis oder Exponent?',
          'Welche Regel gilt für die Variable im Exponenten?',
          'Tim hat die Potenzregel statt der Exponentialregel verwendet.',
        ],
        {
          1: '$e^x$ ist auf ganz $\\mathbb{R}$ differenzierbar — sogar beliebig oft. Tims Problem ist nicht die Differenzierbarkeit, sondern die FALSCHE Regel.',
          2: 'Logarithmieren ist eine Umformung, keine Ableitung. Auch nach $\\ln$-Anwendung müsste die richtige Ableitungsregel angewandt werden. Der direkte Weg $(e^x)\' = e^x$ ist unkomplizierter.',
          3: 'Das ist eine numerische Falle: $e \\approx 2{,}718$, aber $e \\neq x$ als Variable. Die Konstante $e$ und die Variable $x$ sind grundsätzlich verschiedene Objekte.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['abl-exp', 'pot-regel'] },
      ),
      // Zeile 10: transfer · matching · uses=[abl-exp, abl-ln]
      matching(
        'Ordne jeder Funktion ihre Ableitung zu.',
        [
          { left: '$(e^x)\'$', right: '$e^x$' },
          { left: '$(2 e^x)\'$', right: '$2 e^x$' },
          { left: '$(\\ln x)\'$', right: '$\\dfrac{1}{x}$' },
          { left: '$(5 \\ln x)\'$', right: '$\\dfrac{5}{x}$' },
        ],
        `**Ansatz:** Zwei Grundableitungen ($e^x$ und $\\ln x$) jeweils mit und ohne konstantem Vorfaktor. Die Faktorregel zieht den Faktor durch.

**Rechnung:**
- $(e^x)' = e^x$ (Grundableitung)
- $(2 e^x)' = 2 \\cdot e^x = 2 e^x$ (Faktorregel)
- $(\\ln x)' = 1/x$ (Grundableitung, $x > 0$)
- $(5 \\ln x)' = 5 \\cdot 1/x = 5/x$ (Faktorregel)

**Probe:** Bei $x = 1$: alle vier Ableitungen liefern $e$, $2e$, $1$, $5$ — deutlich verschieden.

**Typischer Fehler:** Faktor in den Exponenten oder den Bruch falsch hineinziehen — $(2 e^x)' \\neq e^{2x}$ und $(5 \\ln x)' \\neq \\ln(5x)$.`,
        [
          'Faktorregel: konstanter Vorfaktor bleibt VOR der Ableitung.',
          'Konstanten kommen NICHT in den Exponenten oder den Bruch.',
          'Vergleiche die vier Ergebnisse — alle haben dieselbe Struktur wie ihre Ausgangsfunktion mit demselben Vorfaktor.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['abl-exp', 'abl-ln', 'faktor-regel'] },
      ),
      // Bonus SG 1: apply-independent · number-input · uses=[abl-ln]
      ni(
        'Berechne $f\'(e)$ für $f(x) = \\ln x$. Gib das Ergebnis auf 4 Dezimalstellen an.',
        0.3679,
        0.001,
        '',
        `**Ansatz:** Grundableitung $(\\ln x)' = 1/x$, dann $x_0 = e$ einsetzen.

**Rechnung:** $f'(e) = 1/e \\approx 1/2{,}71828 \\approx 0{,}3679$.

**Probe:** Sekantensteigung $\\dfrac{\\ln(e + 0{,}001) - \\ln e}{0{,}001} = \\dfrac{\\ln(e(1 + 0{,}001/e)) - 1}{0{,}001} \\approx 0{,}368$ ✓.

**Typischer Fehler:** $\\ln(e) = 1$ als Ableitungswert verwenden (das ist der Funktionswert, nicht die Steigung).`,
        [
          '$(\\ln x)\' = 1/x$.',
          'Bei $x = e$: $1/e$.',
          '$e \\approx 2{,}71828$, also $1/e \\approx 0{,}3679$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['abl-ln'] },
      ),
    ],

    // [2] a^x und log_a x
    2: [
      // Zeile 11: recognize · true-false · uses=[abl-ax]
      tf(
        'Die Ableitung der allgemeinen Exponentialfunktion ist $(a^x)\' = a^x \\cdot \\ln a$. Speziell für $a = e$ wird $\\ln a = \\ln e = 1$, sodass sich daraus $(e^x)\' = e^x$ ergibt.',
        true,
        `**Ansatz:** Die Formel $(a^x)' = a^x \\ln a$ verallgemeinert die Spezialregel $(e^x)' = e^x$ auf beliebige Basen $a > 0$.

**Rechnung:** $(a^x)' = a^x \\ln a$. Für $a = e$: $\\ln e = 1$, daher $(e^x)' = e^x \\cdot 1 = e^x$ — die Spezialregel.

**Probe:** Für $a = 2$, $x = 0$: $f'(0) = 2^0 \\cdot \\ln 2 = \\ln 2 \\approx 0{,}693$. Sekantensteigung $\\dfrac{2^{0{,}001} - 1}{0{,}001} \\approx 0{,}693$ ✓.

**Typischer Fehler:** Faktor $\\ln a$ vergessen und $(a^x)' = a^x$ schreiben — diese Falschformel funktioniert nur für $a = e$.`,
        [
          'Welcher Faktor unterscheidet $(a^x)\'$ von $(e^x)\'$?',
          'Für welche Basis $a$ wird der Faktor zu $1$?',
          '$\\ln e = 1$ — daher ist $e$ die „natürliche" Basis.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['abl-ax', 'abl-exp'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[abl-ax, abl-loga]
      mc(
        'Was ist die Ableitung von $f(x) = 2^x$?',
        ['$2^x \\cdot \\ln 2$', '$2^x$', '$x \\cdot 2^{x-1}$', '$\\ln 2$'],
        0,
        `**Ansatz:** Allgemeine Exponentialregel: $(a^x)' = a^x \\cdot \\ln a$ mit $a = 2$.

**Rechnung:** $(2^x)' = 2^x \\cdot \\ln 2 \\approx 2^x \\cdot 0{,}693$.

**Probe:** Bei $x = 0$: $f'(0) = 1 \\cdot \\ln 2 \\approx 0{,}693$. Sekantensteigung $\\dfrac{2^{0{,}001} - 1}{0{,}001} \\approx 0{,}693$ ✓.

**Typischer Fehler:** $\\ln 2$-Faktor vergessen ($(2^x)' = 2^x$) — das gilt nur für $e^x$, nicht für andere Basen.`,
        [
          'Verwende die Regel für allgemeine Basen: $(a^x)\' = a^x \\ln a$.',
          'Hier ist $a = 2$.',
          'Faktor $\\ln 2$ NICHT vergessen — das ist der Unterschied zur $e^x$-Regel.',
        ],
        {
          1: '$\\ln a$ vergessen. Das funktioniert NUR für die Basis $e$, weil $\\ln e = 1$. Für andere Basen muss der Faktor $\\ln a$ stehen bleiben.',
          2: 'Potenzregel falsch angewandt — die Variable ist der EXPONENT, nicht die Basis. $(2^x)\' \\neq x \\cdot 2^{x-1}$. Vergleichbar mit $(e^x)\'$, nur mit anderer Basis.',
          3: '$x$-Anteil vergessen. $(2^x)\' = 2^x \\cdot \\ln 2$, nicht nur die Konstante $\\ln 2$. Die Funktion bleibt im Ergebnis als Faktor stehen.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['abl-ax'] },
      ),
      // Zeile 13: apply-independent · number-input · uses=[abl-ax]
      ni(
        'Berechne $f\'(0)$ für $f(x) = 3^x$. Gib das Ergebnis auf 4 Dezimalstellen an.',
        1.0986,
        0.001,
        '',
        `**Ansatz:** $(a^x)' = a^x \\cdot \\ln a$ mit $a = 3$, dann $x_0 = 0$ einsetzen.

**Rechnung:** $f'(x) = 3^x \\cdot \\ln 3$. Bei $x_0 = 0$: $f'(0) = 3^0 \\cdot \\ln 3 = 1 \\cdot \\ln 3 \\approx 1{,}0986$.

**Probe:** Sekantensteigung $\\dfrac{3^{0{,}001} - 1}{0{,}001} \\approx 1{,}099$ ✓ (entspricht $\\ln 3$).

**Typischer Fehler:** Faktor $\\ln 3$ vergessen und $f'(0) = 3^0 = 1$ angeben.`,
        [
          'Allgemeine Exponentialregel anwenden.',
          '$3^0 = 1$, dann mit $\\ln 3$ multiplizieren.',
          '$\\ln 3 \\approx 1{,}0986$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['abl-ax'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[abl-ax]
      mc(
        'Lina berechnet $(5^x)\' = 5^x$. Was ist ihr Fehler?',
        [
          'Sie hat den Faktor $\\ln 5$ vergessen — die Regel ist $(a^x)\' = a^x \\cdot \\ln a$. Für $a = 5$ heißt das: $(5^x)\' = 5^x \\cdot \\ln 5$. Die einzige Basis, bei der der Faktor entfällt, ist $a = e$.',
          '$5^x$ ist eine konstante Funktion.',
          'Sie hätte die Potenzregel anwenden müssen.',
          '$5^x$ ist nicht differenzierbar.',
        ],
        0,
        `**Ansatz:** Linas Fehler ist ein klassischer Übertragungs-Fehler: Sie verwendet die Regel $(e^x)' = e^x$ für eine andere Basis.

**Rechnung:** Korrekt: $(5^x)' = 5^x \\cdot \\ln 5$. Linas Ergebnis $5^x$ wäre nur für $a = e$ richtig — $\\ln e = 1$ macht den Faktor unsichtbar, $\\ln 5 \\approx 1{,}609 \\neq 1$.

**Probe:** Bei $x = 0$: korrektes $f'(0) = 1 \\cdot \\ln 5 \\approx 1{,}609$. Linas Ergebnis $5^0 = 1$ — Faktor $\\ln 5$ fehlt.

**Typischer Fehler:** Genau dieser — die Regel für $e^x$ auf $a^x$ kopieren, ohne den Basiswechsel-Faktor mitzunehmen.`,
        [
          'Welche Regel gilt für $(a^x)\'$ bei beliebiger Basis $a > 0$?',
          'Wann verschwindet der Faktor $\\ln a$?',
          'Nur für $a = e$ — bei $a = 5$ muss $\\ln 5$ stehen bleiben.',
        ],
        {
          1: '$5^x$ ist eine wachsende Exponentialfunktion — nicht konstant. $5^0 = 1$, $5^1 = 5$, $5^2 = 25$ — alles verschiedene Werte.',
          2: 'Die Potenzregel $(x^n)\'$ gilt nur bei VARIABLER Basis und KONSTANTEM Exponenten. Hier ist die Basis $5$ konstant und der Exponent $x$ variabel — also Exponentialregel.',
          3: '$5^x$ ist auf ganz $\\mathbb{R}$ differenzierbar (sogar beliebig oft). Linas Problem ist die falsche Formel, nicht die Existenz der Ableitung.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['abl-ax', 'abl-exp'] },
      ),
      // Zeile 15: transfer · number-input · uses=[abl-loga]
      ni(
        'Berechne $f\'(2)$ für $f(x) = \\log_2 x$. Gib das Ergebnis auf 4 Dezimalstellen an.',
        0.7213,
        0.001,
        '',
        `**Ansatz:** $(\\log_a x)' = \\dfrac{1}{x \\ln a}$ mit $a = 2$.

**Rechnung:** $f'(x) = \\dfrac{1}{x \\ln 2}$. Bei $x_0 = 2$: $f'(2) = \\dfrac{1}{2 \\ln 2} \\approx \\dfrac{1}{2 \\cdot 0{,}6931} \\approx \\dfrac{1}{1{,}3863} \\approx 0{,}7213$.

**Probe:** Sekantensteigung $\\dfrac{\\log_2(2{,}001) - 1}{0{,}001} \\approx 0{,}7213$ ✓.

**Typischer Fehler:** Faktor $\\ln 2$ vergessen und $f'(2) = 1/2 = 0{,}5$ angeben. Oder $\\log_2(2) = 1$ als Ableitungswert nehmen (Funktionswert statt Steigung).`,
        [
          'Allgemeine Logarithmusregel: $(\\log_a x)\' = 1/(x \\ln a)$.',
          'Setze $a = 2$ und $x = 2$ ein.',
          '$2 \\cdot \\ln 2 \\approx 1{,}386$, dann Kehrwert.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['abl-loga'] },
      ),
      // Bonus SG 2: apply-guided · multiple-choice · uses=[abl-loga]
      mc(
        'Was ist die Ableitung von $f(x) = \\log_5 x$?',
        ['$\\dfrac{1}{x \\ln 5}$', '$\\dfrac{1}{x}$', '$\\dfrac{5}{x}$', '$\\dfrac{\\ln 5}{x}$'],
        0,
        `**Ansatz:** Allgemeine Logarithmusregel: $(\\log_a x)' = \\dfrac{1}{x \\ln a}$ mit $a = 5$.

**Rechnung:** $(\\log_5 x)' = \\dfrac{1}{x \\ln 5}$.

**Probe:** Bei $x = 1$: $f'(1) = \\dfrac{1}{\\ln 5} \\approx 0{,}621$ — passt zum Tangentensteigungs-Graph von $\\log_5 x$ in $(1, 0)$.

**Typischer Fehler:** Faktor $\\ln 5$ vergessen oder den Faktor in den Zähler statt in den Nenner schreiben.`,
        [
          'Allgemeine Regel: $(\\log_a x)\' = \\dfrac{1}{x \\ln a}$.',
          'Hier ist $a = 5$, also steht $\\ln 5$ im NENNER.',
          'Spezialfall $a = e$: $\\ln e = 1$, daher $(\\ln x)\' = 1/x$ ohne zusätzlichen Faktor.',
        ],
        {
          1: 'Faktor $\\ln 5$ im Nenner vergessen — das gilt nur für den natürlichen Logarithmus ($a = e$). Bei allgemeiner Basis $a$ muss $\\ln a$ stehen.',
          2: 'Falscher Faktor: weder Basis noch Vorfaktor. Die Formel hat $\\ln a$, nicht $a$ selbst. $(\\log_5 x)\' \\neq 5/x$.',
          3: '$\\ln 5$ steht im NENNER, nicht im Zähler. $\\dfrac{1}{x \\ln a}$ — der Logarithmus der Basis wird MITGETEILT, nicht aufmultipliziert.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['abl-loga'] },
      ),
    ],

    // [3] Definitionsbereich
    3: [
      // Zeile 16: recognize · true-false · uses=[def-bereich]
      tf(
        'Die Formel $(\\ln x)\' = 1/x$ gilt nur für $x > 0$, weil der natürliche Logarithmus $\\ln x$ für $x \\le 0$ (reell) gar nicht definiert ist.',
        true,
        `**Ansatz:** Ableitungsformeln gelten nur dort, wo die Funktion selbst definiert und differenzierbar ist. Definitionsbereich vor dem Anwenden klären.

**Rechnung:** $\\ln x = y \\Leftrightarrow e^y = x$. Da $e^y > 0$ für alle reellen $y$, kann $\\ln$ keine negative Zahl als Argument haben. Bei $x = 0$ wird $\\ln x \\to -\\infty$ (Singularität). Also: $\\ln x$ existiert nur für $x > 0$, und auch die Ableitung $(\\ln x)' = 1/x$ ist dort definiert.

**Probe:** $\\ln(-1)$ oder $\\ln 0$ — beides reell nicht definiert. Erweiterung $\\ln |x|$ wäre eine andere Funktion mit erweitertem Definitionsbereich.

**Typischer Fehler:** Die Formel $(\\ln x)' = 1/x$ mechanisch in negative Werte einsetzen und ein „Ergebnis" angeben.`,
        [
          'Für welche $x$ ist $\\ln x$ überhaupt definiert?',
          'Die Ableitung kann nicht weiter definiert sein als die Funktion selbst.',
          '$\\ln$: nur positive Argumente — also $x > 0$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['def-bereich', 'abl-ln'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[def-bereich]
      mc(
        'Für welche $x$ gilt die Ableitungsformel $(\\ln x)\' = 1/x$ uneingeschränkt?',
        ['$x > 0$', '$x \\neq 0$', 'alle reellen $x$', '$x \\geq 0$'],
        0,
        `**Ansatz:** Die Formel ist genau dort gültig, wo $\\ln x$ selbst reell und differenzierbar ist.

**Rechnung:** $\\ln x$ ist (reell) nur für $x > 0$ definiert. Bei $x = 0$ divergiert sowohl $\\ln x \\to -\\infty$ als auch die Ableitung $1/x \\to +\\infty$. Für $x < 0$ existiert $\\ln x$ reell gar nicht.

**Probe:** $\\ln(-1)$ ist reell nicht definiert; $\\ln(0)$ ist nicht definiert; $\\ln(1) = 0$, $\\ln(2) \\approx 0{,}693$ — beide positiv und mit Ableitung $1$ bzw. $0{,}5$ wohldefiniert.

**Typischer Fehler:** $x \\neq 0$ oder $x \\geq 0$ angeben — beide schließen negative Werte zu sehr ein bzw. den Randpunkt $0$ falsch. Auch bei $x = 0$ ist $\\ln$ nicht definiert (kein Funktionswert).`,
        [
          'Wo ist $\\ln x$ reell definiert?',
          'Bei $x = 0$: $\\ln 0 = ?$ — existiert nicht, divergiert.',
          'Nur strikt positive $x$ funktionieren — $x = 0$ NICHT inklusive.',
        ],
        {
          1: 'Schließt negative Werte EIN — aber $\\ln(-1)$ ist reell nicht definiert. Die Bedingung $x \\neq 0$ erlaubt $-1$, $-2$ usw., die alle nicht im Definitionsbereich liegen.',
          2: '$\\ln(-1)$ existiert reell nicht. Auch $\\ln(0)$ ist nicht definiert. Die Formel gilt also NICHT für alle reellen $x$.',
          3: 'Bei $x = 0$ ist $\\ln(0) = -\\infty$ (nicht definiert), und auch $1/x$ divergiert. Der Randpunkt $0$ muss ausgeschlossen werden: $x > 0$, nicht $x \\geq 0$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['def-bereich', 'abl-ln'] },
      ),
      // Zeile 18: apply-independent · multiple-choice · uses=[def-bereich, abl-ln]
      mc(
        'Welche der folgenden Ableitungs-Anwendungen ist für $x = -2$ sinnvoll definiert?',
        [
          '$f(x) = x^4 \\Rightarrow f\'(-2) = 4 \\cdot (-2)^3 = -32$',
          '$f(x) = \\ln x \\Rightarrow f\'(-2) = 1/(-2) = -0{,}5$',
          '$f(x) = \\sqrt{x} \\Rightarrow f\'(-2) = 1/(2\\sqrt{-2})$',
          '$f(x) = \\log_5 x \\Rightarrow f\'(-2) = 1/(-2 \\cdot \\ln 5)$',
        ],
        0,
        `**Ansatz:** Vor jeder Auswertung den Definitionsbereich prüfen. Polynome sind überall definiert, $\\ln$, $\\sqrt{\\cdot}$, $\\log_a$ nicht für $x \\le 0$.

**Rechnung:** Nur $f(x) = x^4$ (Polynom) ist bei $x = -2$ wohldefiniert: $f(-2) = 16$, $f'(-2) = 4 \\cdot (-2)^3 = -32$. Alle anderen drei Funktionen haben Definitionsbereich $x > 0$ und können bei $x = -2$ NICHT ausgewertet werden — Formel-Anwendung wäre Unsinn.

**Probe:** Sekantensteigung von $x^4$ bei $x = -2$: $\\dfrac{(-1{,}999)^4 - 16}{0{,}001} \\approx -32{,}0$ ✓ (negativ, weil $x^4$ bei $x = -2$ fällt).

**Typischer Fehler:** Formeln mechanisch auf negative Werte anwenden, ohne den Definitionsbereich zu prüfen. Das liefert oft eine Zahl — aber keine korrekte Ableitung.`,
        [
          'Welche Funktionen erlauben negative $x$-Werte?',
          'Polynome sind überall definiert.',
          '$\\ln$, $\\sqrt{\\cdot}$, $\\log_a$ haben Definitionsbereich $x > 0$ (bzw. $x \\ge 0$ für die Wurzel).',
        ],
        {
          1: '$\\ln(-2)$ ist reell nicht definiert — also kann auch die Ableitung dort nicht ausgewertet werden. Die Rechnung $1/(-2) = -0{,}5$ ist arithmetisch korrekt, aber inhaltlich sinnlos.',
          2: '$\\sqrt{-2}$ ist reell nicht definiert. Der Ausdruck $1/(2\\sqrt{-2})$ ist ohne komplexe Erweiterung sinnlos.',
          3: '$\\log_5(-2)$ ist reell nicht definiert (alle Logarithmen brauchen positives Argument). Die Rechnung wäre ohne sinnvolle Basis.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['def-bereich', 'abl-ln', 'pot-regel'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[def-bereich]
      mc(
        'Max berechnet die Ableitung von $f(x) = \\ln x$ bei $x_0 = -1$ und gibt $f\'(-1) = 1/(-1) = -1$ an. Was ist sein Fehler?',
        [
          'Er hat den Definitionsbereich missachtet — $\\ln x$ ist für $x \\le 0$ reell nicht definiert. Bei $x = -1$ gibt es weder einen Funktionswert noch eine Ableitung, also ist der Ausdruck inhaltlich leer.',
          'Vorzeichen falsch — richtig wäre $+1$, weil $\\ln$ überall positiv ist.',
          'Er hätte die Potenzregel anwenden müssen.',
          '$\\ln x$ ist immer mit $1/x$ ableitbar, sein Ergebnis ist also korrekt.',
        ],
        0,
        `**Ansatz:** Bei jeder Ableitung erst den Definitionsbereich der Funktion klären. Außerhalb davon ist die Ableitung schlicht nicht definiert — egal, wie sauber die Formel arithmetisch wirkt.

**Rechnung:** $\\ln(-1)$ existiert reell nicht (da kein reeller Exponent $e^y$ den Wert $-1$ ergibt). Damit ist auch $f'(-1)$ nicht definiert. Max' Rechnung $1/(-1) = -1$ ist eine reine FORMEL-Anwendung ohne semantischen Inhalt.

**Probe:** $f(x) = \\ln x$ ist im Graphen nur für $x > 0$ überhaupt sichtbar — links der $y$-Achse existiert die Funktion nicht.

**Typischer Fehler:** Max — die Formel mechanisch auf den unerlaubten Wert anwenden. Korrekt wäre: „Bei $x = -1$ existiert $f'(x)$ nicht, weil $f$ nicht definiert ist."`,
        [
          'Wo ist $\\ln x$ überhaupt definiert?',
          'Kann die Ableitung an einer Stelle existieren, wo die Funktion nicht definiert ist?',
          'Erst Definitionsbereich, dann Formel — niemals umgekehrt.',
        ],
        {
          1: '$\\ln$ ist auf seinem Definitionsbereich ($x > 0$) immer positiv für $x > 1$ und negativ für $0 < x < 1$. Diese Aussage ist falsch — und das Vorzeichen ist nicht das Hauptproblem von Max.',
          2: 'Die Potenzregel wäre hier ohnehin falsch (gilt nicht für $\\ln$). Max\' Problem ist nicht die Wahl der Regel, sondern dass er einen außerhalb des Definitionsbereichs liegenden Wert benutzt.',
          3: 'Genau das ist das Missverständnis. Die Ableitung $1/x$ ist nur dort gültig, wo $\\ln x$ definiert ist — also für $x > 0$. Bei $x < 0$ ist alles offen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['def-bereich', 'abl-ln'] },
      ),
      // Zeile 20: transfer · matching · uses=[def-bereich]
      matching(
        'Ordne jeder Funktion ihren Definitionsbereich zu.',
        [
          { left: '$\\ln x$', right: '$x > 0$' },
          { left: '$\\sqrt{x}$', right: '$x \\ge 0$' },
          { left: '$\\tan x$', right: 'alle $x$ außer $\\pi/2 + k \\pi$ mit $k \\in \\mathbb{Z}$' },
          { left: '$\\dfrac{1}{x}$', right: '$x \\neq 0$' },
        ],
        `**Ansatz:** Jede elementare Funktion hat ihren typischen Definitionsbereich, der vor jeder Ableitung beachtet werden muss.

**Rechnung:**
- $\\ln x$ nur für $x > 0$ (Argument muss strikt positiv sein)
- $\\sqrt{x}$ für $x \\ge 0$ (Argument darf $\\ge 0$ sein, bei $x = 0$ Wert $0$)
- $\\tan x = \\sin x / \\cos x$ undefiniert dort, wo $\\cos x = 0$, also bei $x = \\pi/2 + k\\pi$
- $1/x$ überall außer bei $x = 0$ (Division durch null)

**Probe:** $\\ln(0)$ ✗, $\\sqrt{0} = 0$ ✓, $\\tan(\\pi/2)$ ✗, $1/0$ ✗ — Randpunkte konsistent mit den vier Bereichen.

**Typischer Fehler:** $\\sqrt{x}$ und $\\ln x$ verwechseln ($\\sqrt{}$ erlaubt $x = 0$, $\\ln$ nicht). Oder bei $\\tan$ nur die einzelne Stelle $\\pi/2$ ausschließen statt der gesamten Familie $\\pi/2 + k\\pi$.`,
        [
          'Welche Funktionen verlangen positive Argumente?',
          '$\\sqrt{0} = 0$ ist definiert, $\\ln 0$ nicht.',
          'Tangens hat Pole bei den Nullstellen des Kosinus.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['def-bereich'] },
      ),
      // Bonus SG 3: apply-guided · multiple-choice · uses=[def-bereich]
      mc(
        'Für welche $x$ ist die Ableitungsformel $(\\sqrt{x})\' = \\dfrac{1}{2\\sqrt{x}}$ wohldefiniert?',
        ['$x > 0$', '$x \\ge 0$', '$x \\neq 0$', 'alle reellen $x$'],
        0,
        `**Ansatz:** Funktion $\\sqrt{x}$ ist für $x \\ge 0$ definiert, ABER bei $x = 0$ divergiert die Ableitung $\\dfrac{1}{2 \\sqrt{0}} \\to \\infty$ — der Graph hat dort eine senkrechte Tangente.

**Rechnung:** Bei $x = 0$: $\\dfrac{1}{2 \\sqrt{0}} = \\dfrac{1}{0}$ ist nicht definiert. Erst für $x > 0$ liefert die Formel einen endlichen Wert. Funktion existiert zwar in $0$, Ableitung dort nicht.

**Probe:** Bei $x = 4$: $1/(2 \\cdot 2) = 0{,}25$ wohldefiniert. Bei $x = 0$: Sekantensteigung $(\\sqrt{0{,}001} - 0)/0{,}001 \\approx 31{,}6$ — und wird beliebig groß für kleinere $h$. Senkrechte Tangente, also keine endliche Ableitung.

**Typischer Fehler:** Annahme, dass Definitionsbereich von $f$ und $f'$ identisch sind. Bei $\\sqrt{x}$ existiert $f(0) = 0$, aber $f'(0)$ NICHT.`,
        [
          'Wo ist die FUNKTION definiert? Wo ist die ABLEITUNG definiert?',
          'Bei $x = 0$: $1/(2\\sqrt{0}) = ?$',
          'Senkrechte Tangenten haben keine endliche Steigung.',
        ],
        {
          1: 'Das ist der Definitionsbereich der FUNKTION $\\sqrt{x}$ — aber die ABLEITUNG ist bei $x = 0$ NICHT definiert (Nenner wird null). Die Randpunkt-Unterscheidung ist hier zentral.',
          2: 'Schließt negative Werte ein, was bei $\\sqrt{x}$ nicht definiert ist. $\\sqrt{-1}$ existiert reell nicht.',
          3: 'Negative Argumente sind ausgeschlossen ($\\sqrt{-1}$ existiert nicht reell). Die Wurzel funktioniert nicht für alle reellen $x$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['def-bereich', 'pot-gebrochen'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // abl-1-4 · Kettenregel
  // ─────────────────────────────────────────────────────────────────────────
  'abl-1-4': {
    // [0] Kettenregel allgemein
    0: [
      // Zeile 1: recognize · true-false · uses=[kettenregel]
      tf(
        'Die Kettenregel lautet $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$: Die äußere Ableitung wird AN DER INNEREN FUNKTION ausgewertet (innere bleibt als Argument stehen) und mit der inneren Ableitung multipliziert.',
        true,
        `**Ansatz:** Die Kettenregel kombiniert zwei Schritte zu einem Produkt: äußere Ableitung an $g(x)$, multipliziert mit innerer Ableitung $g'(x)$.

**Rechnung:** $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$. WICHTIG: $f'$ wird an $g(x)$ ausgewertet — nicht an $x$ — und der Faktor $g'(x)$ wird mitmultipliziert.

**Probe:** Für $\\sin(3x)$ ist $f(u) = \\sin u$ und $g(x) = 3x$. Daraus $f'(g(x)) = \\cos(3x)$ und $g'(x) = 3$. Kettenregel: $\\cos(3x) \\cdot 3 = 3\\cos(3x)$. Bei $x = 0$: $3 \\cdot 1 = 3$ — Tangentensteigung im Ursprung ✓.

**Typischer Fehler:** $f'(x) \\cdot g'(x)$ statt $f'(g(x)) \\cdot g'(x)$ — die innere Funktion fehlt als Argument der äußeren Ableitung.`,
        [
          'Wie verknüpft die Kettenregel die zwei Ableitungen?',
          'Wo wird die äußere Ableitung $f\'$ ausgewertet?',
          'Eselsbrücke: „äußere ableiten — innere stehen lassen — mal innere Ableitung".',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['kettenregel'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[kettenregel]
      mc(
        'Was ist die Ableitung von $f(x) = \\sin(5x)$?',
        ['$5 \\cos(5x)$', '$\\cos(5x)$', '$5 \\cos x$', '$-5 \\cos(5x)$'],
        0,
        `**Ansatz:** Verkettung: außen $\\sin u$, innen $5x$. Kettenregel anwenden.

**Rechnung:** Äußere Ableitung: $(\\sin u)' = \\cos u$, also $\\cos(5x)$. Innere Ableitung: $(5x)' = 5$. Kettenregel: $f'(x) = \\cos(5x) \\cdot 5 = 5 \\cos(5x)$.

**Probe:** Bei $x = 0$: $5 \\cos 0 = 5$. Sekantensteigung $\\dfrac{\\sin(5 \\cdot 0{,}001)}{0{,}001} \\approx 5{,}00$ ✓.

**Typischer Fehler:** Innere Ableitung vergessen (nur $\\cos(5x)$) oder innere Funktion im Argument weglassen ($\\cos x$ statt $\\cos(5x)$).`,
        [
          'Welche Funktion ist außen, welche innen?',
          'Äußere $(\\sin u)\' = \\cos u$ mit $u = 5x$ stehen lassen.',
          'Innere $(5x)\' = 5$ — Faktor nicht vergessen.',
        ],
        {
          1: 'Innere Ableitung $5$ vergessen. Die Kettenregel verlangt das PRODUKT äußere · innere Ableitung — ohne den Faktor $5$ ist das Ergebnis um diesen Faktor zu klein.',
          2: 'Die innere Funktion $5x$ wurde im Argument der äußeren Ableitung weggelassen. $(\\sin u)\' = \\cos u$ — wenn $u = 5x$, dann ist die Auswertung $\\cos(5x)$, nicht $\\cos x$.',
          3: 'Vorzeichen falsch: $(\\sin u)\' = +\\cos u$ (Plus). Das Minus gehört zu $(\\cos u)\' = -\\sin u$. Hier ist die äußere Funktion $\\sin$, also bleibt das Vorzeichen positiv.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['kettenregel', 'abl-sin'] },
      ),
      // Zeile 3: apply-independent · number-input · uses=[kettenregel]
      ni(
        'Berechne $f\'(0)$ für $f(x) = (2x + 1)^3$.',
        6,
        0,
        '',
        `**Ansatz:** Verkettung: außen $u^3$, innen $2x + 1$. Kettenregel (Potenz-Kettenregel) anwenden, dann $x_0 = 0$ einsetzen.

**Rechnung:** Äußere Ableitung: $(u^3)' = 3u^2$, also $3(2x+1)^2$. Innere Ableitung: $(2x+1)' = 2$. Kettenregel: $f'(x) = 3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$. Bei $x_0 = 0$: $f'(0) = 6 \\cdot 1^2 = 6$.

**Probe:** $f(0) = 1$, $f(0{,}001) = (1{,}002)^3 \\approx 1{,}006012$. Sekantensteigung $\\approx 6{,}012$ ✓.

**Typischer Fehler:** Innere Ableitung $2$ vergessen (Ergebnis: $3 \\cdot 1 = 3$). Oder Exponent $3$ nicht reduzieren ($3(2x+1)^3$ statt $3(2x+1)^2$).`,
        [
          'Potenz-Kettenregel: $(u^n)\' = n \\cdot u^{n-1} \\cdot u\'$.',
          'Äußere $(u^3)\' = 3 u^2$, innere $(2x+1)\' = 2$.',
          'Bei $x = 0$ ist $2 \\cdot 0 + 1 = 1$, $1^2 = 1$, dann $\\cdot 6$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kettenregel', 'pot-regel'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[kettenregel]
      mc(
        'Lara berechnet $(e^{4x})\' = e^{4x}$. Was ist ihr Fehler?',
        [
          'Sie hat die innere Ableitung $(4x)\' = 4$ vergessen. Standardregel: $(e^{u(x)})\' = e^{u(x)} \\cdot u\'(x)$. Korrekt: $(e^{4x})\' = e^{4x} \\cdot 4 = 4 e^{4x}$.',
          'Bei $e$-Funktionen gilt die Kettenregel nicht.',
          '$e^{4x}$ ist konstant.',
          'Sie hätte die Potenzregel $(x^n)\'$ anwenden müssen.',
        ],
        0,
        `**Ansatz:** $(e^x)' = e^x$ ist eine Spezialformel — bei VERKETTUNG $e^{u(x)}$ braucht es die Kettenregel mit innerer Ableitung.

**Rechnung:** Korrekt: $(e^{4x})' = e^{4x} \\cdot (4x)' = e^{4x} \\cdot 4 = 4 e^{4x}$. Laras Ergebnis $e^{4x}$ wäre nur richtig, wenn $u = x$ wäre — bei $u = 4x$ fehlt der Faktor $4$.

**Probe:** Bei $x = 0$: korrektes $f'(0) = 4 \\cdot 1 = 4$. Laras Ergebnis $f'(0) = 1$ — Faktor $4$ daneben. Sekantensteigung $(e^{4 \\cdot 0{,}001} - 1)/0{,}001 \\approx 4{,}008$ bestätigt $f'(0) = 4$.

**Typischer Fehler:** Genau dieser — die Grundregel $(e^x)' = e^x$ wird mechanisch übertragen, OHNE die Kettenregel anzuwenden. Faustregel: Steht im Exponenten etwas, das NICHT nur $x$ ist, dann Kettenregel.`,
        [
          'Sieht $e^{4x}$ aus wie $e^x$ — oder ist da eine Verkettung?',
          'Wenn der Exponent nicht nur „$x$" ist: Kettenregel.',
          'Standardfall: $(e^{u(x)})\' = e^{u(x)} \\cdot u\'(x)$.',
        ],
        {
          1: 'Doch, die Kettenregel gilt auch für $e$-Funktionen — sie ist genau der Grund, warum bei $e^{u(x)}$ der Faktor $u\'(x)$ entsteht.',
          2: '$e^{4x}$ ist eine wachsende Exponentialfunktion, nicht konstant. $e^0 = 1$, $e^4 \\approx 54{,}6$, $e^{8} \\approx 2981$ — Werte ändern sich stark.',
          3: 'Die Potenzregel $(x^n)\'$ gilt nur, wenn die Variable die BASIS ist (wie bei $x^4$). Bei $e^{4x}$ ist die Variable im EXPONENTEN — Exponentialregel + Kettenregel.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['kettenregel', 'abl-exp'] },
      ),
      // Zeile 5: transfer · multiple-choice · uses=[kettenregel]
      mc(
        'Was ist die Ableitung von $f(x) = \\cos(7x - 2)$?',
        [
          '$-7 \\sin(7x - 2)$',
          '$-\\sin(7x - 2)$',
          '$7 \\sin(7x - 2)$',
          '$7 \\cos(7x - 2)$',
        ],
        0,
        `**Ansatz:** Verkettung: außen $\\cos u$, innen $7x - 2$. Kettenregel: $-\\sin(\\text{innen}) \\cdot \\text{innere Ableitung}$.

**Rechnung:** Äußere Ableitung: $(\\cos u)' = -\\sin u$, also $-\\sin(7x-2)$. Innere Ableitung: $(7x-2)' = 7$. Kettenregel: $f'(x) = -\\sin(7x-2) \\cdot 7 = -7 \\sin(7x-2)$.

**Probe:** Bei $x = 2/7$ ist $7x - 2 = 0$, also $\\sin(7x-2) = 0$ und $f'(2/7) = 0$. Tatsächlich hat $\\cos$ bei Argument $0$ ein Maximum (waagerechte Tangente) ✓.

**Typischer Fehler:** Innere Ableitung $7$ vergessen (Antwort B) oder Vorzeichen bei $(\\cos u)' = -\\sin u$ falsch setzen.`,
        [
          'Welche zwei Bausteine bringt die Kettenregel: äußere und innere Ableitung.',
          '$(\\cos u)\' = -\\sin u$ — Minuszeichen aus dem Zyklus.',
          '$(7x - 2)\' = 7$ — die Konstante $-2$ verschwindet beim Ableiten.',
        ],
        {
          1: 'Innere Ableitung $7$ vergessen. Bei Kettenregel: äußere Ableitung MAL innere Ableitung. Ohne $7$ ist das Ergebnis um Faktor $7$ zu klein.',
          2: 'Vorzeichen falsch: $(\\cos u)\' = -\\sin u$ hat ein MINUS — der Kosinus „bekommt" beim Ableiten das Minuszeichen, nicht der Sinus.',
          3: 'Funktion nicht gewechselt: Die Ableitung von $\\cos$ ist $-\\sin$, nicht wieder $\\cos$. Vergleichbar mit dem Ableitungszyklus: $\\cos \\to -\\sin$, nicht $\\cos \\to \\cos$.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['kettenregel', 'abl-cos'] },
      ),
      // Bonus SG 0: apply-independent · number-input · uses=[kettenregel]
      ni(
        'Berechne $f\'(1)$ für $f(x) = (x^3 + 1)^2$.',
        12,
        0,
        '',
        `**Ansatz:** Verkettung: außen $u^2$, innen $x^3 + 1$. Potenz-Kettenregel.

**Rechnung:** $f'(x) = 2(x^3 + 1) \\cdot (x^3 + 1)' = 2(x^3 + 1) \\cdot 3x^2 = 6x^2(x^3 + 1)$. Bei $x_0 = 1$: $f'(1) = 6 \\cdot 1 \\cdot 2 = 12$.

**Probe:** $f(1) = 4$, $f(1{,}001) \\approx (1{,}003003 + 1)^2 \\approx 4{,}012$. Sekantensteigung $\\approx 12{,}02$ ✓.

**Typischer Fehler:** Innere Ableitung $(x^3 + 1)' = 3x^2$ vergessen oder $(u^2)' = u^2$ rechnen (Exponent nicht reduziert).`,
        [
          '$(u^2)\' = 2 u \\cdot u\'$ — Potenz-Kettenregel.',
          'Innere Ableitung: $(x^3 + 1)\' = 3 x^2$ (Konstante $+1$ verschwindet).',
          'Bei $x = 1$: innere Funktion = $2$, innere Ableitung = $3$, dann $2 \\cdot 2 \\cdot 3 = 12$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kettenregel', 'pot-regel'] },
      ),
    ],

    // [1] Verkettung / Äußere finden
    1: [
      // Zeile 6: recognize · true-false · uses=[verkettung, aussere-finden]
      tf(
        'Bei einer Verkettung $f(g(x))$ wird die INNERE Funktion $g$ zuerst auf $x$ angewandt, das Ergebnis dann an die ÄUßERE Funktion $f$ weitergegeben.',
        true,
        `**Ansatz:** Verkettung als „Funktionsmaschine": $x \\xrightarrow{g} g(x) \\xrightarrow{f} f(g(x))$. Innere Funktion zuerst, äußere zuletzt.

**Rechnung:** Beispiel $\\sin(x^2)$ in $x = 3$ auswerten: erst $g(3) = 9$ (Quadrieren), dann $f(9) = \\sin(9) \\approx 0{,}412$. Erst innen, dann außen.

**Probe:** Für die Identifikation: Stelle dir das mechanische Ablesen vor: „Was passiert ZUERST mit $x$?" → das ist die innere Funktion. „Was kommt ZULETZT?" → äußere.

**Typischer Fehler:** Innen/außen verwechseln. Häufig bei $e^{2x}$: außen = $e^u$, innen = $2x$ (nicht umgekehrt).`,
        [
          'Was passiert mit $x$ zuerst — innere oder äußere Funktion?',
          'Bei $\\sin(x^2)$: erst quadrieren, dann sin.',
          'Auswertung ist „von innen nach außen" — Ableitung mit Kettenregel ebenso.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['verkettung', 'aussere-finden'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[aussere-finden]
      mc(
        'Welche ist die äußere Funktion in $h(x) = (3 x^2 + 5)^4$?',
        [
          '$f(u) = u^4$ (Potenzieren mit $4$)',
          '$g(x) = 3 x^2 + 5$',
          '$3 x^2$',
          'die Konstante $5$',
        ],
        0,
        `**Ansatz:** Die äußere Funktion ist die, die ZULETZT angewandt wird — also die „Hülle" um die innere Konstruktion.

**Rechnung:** Bei $(3 x^2 + 5)^4$ wird zuerst der Ausdruck $3 x^2 + 5$ gebildet (innere Funktion $g$), dann wird das Ergebnis mit $4$ potenziert (äußere Funktion $f(u) = u^4$).

**Probe:** Bei $x = 1$: erst $g(1) = 3 + 5 = 8$, dann $f(8) = 8^4 = 4096$. Auch numerisch: $(3 \\cdot 1 + 5)^4 = 8^4 = 4096$ ✓.

**Typischer Fehler:** Innen/außen verwechseln und $g$ als äußere ansehen. Faustregel: Was steht „rund herum" um den Rest? Hier die Potenz $u^4$.`,
        [
          'Stelle dir vor: $x$ wird Schritt für Schritt durch Funktionen geschickt — was kommt zuletzt?',
          'Außen = die Operation, die man ZULETZT ausführt.',
          'Bei $(\\ldots)^4$ steht das Potenzieren ganz außen.',
        ],
        {
          1: 'Das ist die INNERE Funktion — $3 x^2 + 5$ wird zuerst gebildet, bevor die Potenz $u^4$ angewandt wird.',
          2: 'Das ist nur ein TEIL der inneren Funktion. Die gesamte innere Funktion lautet $g(x) = 3 x^2 + 5$. Außerdem wird die äußere Funktion (Potenzieren) gefragt.',
          3: 'Eine Konstante ist keine Funktion in dem Sinne — sie ist Teil der inneren Konstruktion $3 x^2 + 5$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['aussere-finden', 'verkettung'] },
      ),
      // Zeile 8: apply-independent · matching · uses=[aussere-finden, verkettung]
      matching(
        'Identifiziere für jede Verkettung die äußere und innere Funktion.',
        [
          { left: '$\\sin(x^2)$', right: 'äußere $\\sin u$ — innere $x^2$' },
          { left: '$(2x + 3)^5$', right: 'äußere $u^5$ — innere $2x + 3$' },
          { left: '$e^{\\ln x}$', right: 'äußere $e^u$ — innere $\\ln x$' },
          { left: '$\\sqrt{x^3 + 1}$', right: 'äußere $\\sqrt{u}$ — innere $x^3 + 1$' },
        ],
        `**Ansatz:** Bei jeder Verkettung fragen: „Was passiert zuletzt?" (= äußere Funktion) und „Welcher Term sitzt im Argument?" (= innere Funktion).

**Rechnung:** Vier Standardstrukturen — jeweils die Form $f(g(x))$:
- $\\sin(x^2)$: Argument von $\\sin$ ist $x^2 \\Rightarrow$ innen $x^2$, außen $\\sin$
- $(2x+3)^5$: Basis der Potenz ist $2x+3 \\Rightarrow$ innen $2x+3$, außen $u^5$
- $e^{\\ln x}$: Exponent von $e$ ist $\\ln x \\Rightarrow$ innen $\\ln x$, außen $e^u$
- $\\sqrt{x^3+1}$: Argument der Wurzel ist $x^3+1 \\Rightarrow$ innen $x^3+1$, außen $\\sqrt{u}$

**Probe:** Numerisch bei $x = 1$ jeweils einsetzen: $\\sin 1 \\approx 0{,}841$, $5^5 = 3125$, $e^0 = 1$, $\\sqrt 2 \\approx 1{,}414$ — alle Werte ergeben sich aus „innen auswerten, dann außen".

**Typischer Fehler:** Bei $e^{\\ln x}$: Verwechslung — innen ist $\\ln x$ (das Argument), außen ist $e^u$. Übrigens kürzt sich $e^{\\ln x} = x$ für $x > 0$.`,
        [
          'Was steht „rund um" den Rest — Potenz, Sinus, Wurzel, Exponential?',
          'Was steht im Argument dieser Außenhülle?',
          'Auswertung von innen nach außen: erst innere Funktion, dann äußere.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['aussere-finden', 'verkettung'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[aussere-finden]
      mc(
        'Bei $f(x) = \\sin(2x)$ behauptet Lukas: „Hier ist $2x$ die äußere und $\\sin$ die innere Funktion." Was ist sein Fehler?',
        [
          'Er hat innen und außen vertauscht. Äußere = die, die ZULETZT angewandt wird → hier $\\sin u$. Innere = die, die ZUERST auf $x$ wirkt → hier $u = 2x$.',
          'Bei trigonometrischen Funktionen darf man nicht von innen/außen sprechen.',
          'In dieser Funktion gibt es keine Verkettung.',
          'Lukas hat recht, weil $\\sin$ als „kleinere" Funktion zählt.',
        ],
        0,
        `**Ansatz:** Reihenfolge der Auswertung: bei $\\sin(2x)$ wird zuerst $2x$ berechnet, dann darauf $\\sin$ angewandt. Was zuletzt kommt, ist außen.

**Rechnung:** Korrekt: außen $\\sin u$, innen $2x$. Lukas' Vertauschung würde bedeuten: zuerst „den Sinus" anwenden (auf was?), dann mit $2x$ multiplizieren — das macht keinen Sinn.

**Probe:** Auswertung bei $x = \\pi/4$: erst $2 \\cdot \\pi/4 = \\pi/2$ (innere), dann $\\sin(\\pi/2) = 1$ (äußere). Wäre $\\sin$ innen, dann wäre die Reihenfolge unsinnig.

**Typischer Fehler:** Lukas verwechselt „auffälliger" mit „außen". Trigonometrische Funktionen wirken oft prominent, sind aber bei Verkettung meistens die ÄUSSERE Funktion (das Argument steht in der Klammer).`,
        [
          'In welcher Reihenfolge wird $f(x) = \\sin(2x)$ ausgewertet?',
          '„Außen" = die letzte Operation auf dem Weg von $x$ zum Funktionswert.',
          'Was steht „rund um" den Rest? $\\sin(\\ldots)$ ist die Hülle, $2x$ steht im Argument.',
        ],
        {
          1: 'Doch — die Begriffe innen/außen sind allgemein anwendbar und gelten auch für trigonometrische Verkettungen. Sonst könnte man Kettenregel hier gar nicht systematisch nutzen.',
          2: '$\\sin(2x)$ IST eine Verkettung — Argument $2x$ ist nicht einfach $x$, also wird zuerst $2x$ gebildet, dann $\\sin$ angewandt. Genau das ist eine Verkettung.',
          3: '„Größe" oder „Auffälligkeit" entscheidet nicht. Was zählt ist die REIHENFOLGE der Operationen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['aussere-finden', 'verkettung'] },
      ),
      // Zeile 10: transfer · sorting · uses=[verkettung, aussere-finden, kettenregel]
      sorting(
        'Sortiere die Schritte zur Ableitung von $f(x) = \\cos(x^3)$ in didaktisch richtiger Reihenfolge.',
        [
          'Verkettung identifizieren: äußere Funktion $f(u) = \\cos u$, innere Funktion $g(x) = x^3$.',
          'Äußere Ableitung bilden — innere als Argument stehen lassen: $(\\cos u)\' = -\\sin u \\Rightarrow -\\sin(x^3)$.',
          'Innere Ableitung bilden: $(x^3)\' = 3 x^2$.',
          'Kettenregel anwenden — die zwei Ableitungen multiplizieren: $f\'(x) = -\\sin(x^3) \\cdot 3 x^2 = -3 x^2 \\sin(x^3)$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Kettenregel-Workflow: erst Verkettung erkennen, dann äußere und innere getrennt ableiten, am Ende multiplizieren.

**Rechnung:** Genau in dieser Reihenfolge: Strukturanalyse $\\to$ äußere Ableitung (mit innerer im Argument) $\\to$ innere Ableitung $\\to$ Produkt.

**Probe:** Bei $x = 1$: $-3 \\cdot 1 \\cdot \\sin 1 \\approx -2{,}524$. Sekantensteigung $\\dfrac{\\cos(1{,}001^3) - \\cos 1}{0{,}001} \\approx -2{,}53$ ✓.

**Typischer Fehler:** Schritt 2 vergessen ($\\cos u$ als $-\\sin u$ ableiten, aber das Argument $x^3$ durch $x$ ersetzen). Oder die innere Ableitung am Ende einfach addieren statt multiplizieren.`,
        [
          'Erst die Struktur klären, dann Ableitungen — am Ende verbinden.',
          'Äußere Ableitung enthält die INNERE Funktion als Argument.',
          'Letzter Schritt ist das PRODUKT der zwei Ableitungen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['verkettung', 'aussere-finden', 'kettenregel', 'abl-cos'] },
      ),
      // Bonus SG 1: apply-guided · multiple-choice · uses=[aussere-finden]
      mc(
        'Welche ist die äußere Funktion in $h(x) = \\sqrt{1 - x^2}$?',
        [
          '$f(u) = \\sqrt{u}$',
          '$g(x) = 1 - x^2$',
          '$-x^2$',
          '$1$',
        ],
        0,
        `**Ansatz:** Was passiert mit $x$ zuletzt? Erst $1 - x^2$ ausrechnen, dann die Wurzel ziehen — also ist $\\sqrt{u}$ die äußere Funktion.

**Rechnung:** Auswertungsreihenfolge: $x \\to x^2 \\to 1 - x^2 \\to \\sqrt{1 - x^2}$. Die Wurzel-Operation ist die ZULETZTE — also außen.

**Probe:** Bei $x = 0$: innen $1 - 0 = 1$, außen $\\sqrt{1} = 1$. Erst innere Berechnung, dann äußere Wurzel.

**Typischer Fehler:** Innen/außen verwechseln. Hilft: bei Wurzeln, Logarithmen und trigonometrischen Hüllen ist meist die offensichtliche „Außenfunktion" die richtige.`,
        [
          'Was steht „rund um" den Rest?',
          'Welche Operation kommt als letzte vor dem Ergebnis?',
          'Die Wurzel ist die äußere Hülle, der polynomiale Ausdruck steckt im Argument.',
        ],
        {
          1: 'Das ist die INNERE Funktion — $1 - x^2$ wird zuerst berechnet, dann darauf die Wurzel.',
          2: 'Das ist nur EIN TEIL der inneren Funktion. Die vollständige Innere ist $1 - x^2$, nicht nur $-x^2$.',
          3: 'Eine Konstante ist keine Funktion und auch nicht „die äußere". Gefragt ist der Funktions-Wrapper um die innere Berechnung herum.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['aussere-finden', 'verkettung'] },
      ),
    ],

    // [2] Standardfälle: (e^u)', (sin u)', (cos u)', (ln u)'
    2: [
      // Zeile 11: recognize · true-false · uses=[std-exp-u, std-sin-u]
      tf(
        'Für die Verkettungen mit elementaren Funktionen gilt $(\\sin u)\' = \\cos u \\cdot u\'$ und $(e^u)\' = e^u \\cdot u\'$. In beiden Fällen wird die INNERE Ableitung $u\' = u\'(x)$ mitgenommen.',
        true,
        `**Ansatz:** Die Kettenregel verwandelt jede Grundformel in einen Standard-Fall: äußere Ableitung mit innerer als Argument, multipliziert mit der inneren Ableitung.

**Rechnung:** $(\\sin u)' = (\\sin)'(u) \\cdot u' = \\cos u \\cdot u'$. Analog $(e^u)' = (e^u)' \\cdot u' = e^u \\cdot u'$ — bei $u = x$ entfällt $u'$ (weil $x' = 1$), bei $u \\neq x$ MUSS er mitgenommen werden.

**Probe:** $\\sin(3x)$: $u = 3x$, $u' = 3$, also $(\\sin(3x))' = \\cos(3x) \\cdot 3 = 3 \\cos(3x)$. Bei $x = 0$: $3$ ✓.

**Typischer Fehler:** $(\\sin u)' = \\cos u$ schreiben (ohne $u'$) — gilt nur bei $u = x$. Bei $u = 3x$, $u = x^2$ etc. MUSS $u'$ stehen.`,
        [
          'Was passiert in der Kettenregel mit der inneren Ableitung?',
          'Standardform: $(\\sin u)\' = \\cos u \\cdot u\'$.',
          'Wenn $u = x$ ist, wird $u\' = 1$ — und der Faktor wird unsichtbar.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['std-exp-u', 'std-sin-u', 'kettenregel'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[std-sin-u, std-exp-u]
      mc(
        'Was ist die Ableitung von $f(x) = \\sin(x^2)$?',
        [
          '$2 x \\cos(x^2)$',
          '$\\cos(x^2)$',
          '$2 x \\sin(x^2)$',
          '$-2 x \\cos(x^2)$',
        ],
        0,
        `**Ansatz:** Standardfall $(\\sin u)' = \\cos u \\cdot u'$ mit $u(x) = x^2$ und $u'(x) = 2x$.

**Rechnung:** $f'(x) = \\cos(x^2) \\cdot 2 x = 2 x \\cos(x^2)$.

**Probe:** Bei $x = 1$: $2 \\cdot 1 \\cdot \\cos(1) \\approx 2 \\cdot 0{,}5403 = 1{,}0806$. Sekantensteigung $(\\sin(1{,}001^2) - \\sin 1)/0{,}001 \\approx 1{,}08$ ✓.

**Typischer Fehler:** Innere Ableitung $2x$ vergessen (nur $\\cos(x^2)$) oder Funktion nicht wechseln ($\\sin$ bleibt statt $\\cos$).`,
        [
          'Standardfall: $(\\sin u)\' = \\cos u \\cdot u\'$.',
          'Hier $u = x^2$, $u\' = 2 x$.',
          'Funktion wechselt: $\\sin \\to \\cos$, plus innere Ableitung.',
        ],
        {
          1: 'Innere Ableitung $2 x$ vergessen. Die Kettenregel verlangt $\\cos u \\cdot u\'$ — ohne den Faktor $2 x$ ist das Ergebnis um diesen Faktor falsch.',
          2: 'Funktion nicht gewechselt. $(\\sin)\' = \\cos$, nicht wieder $\\sin$. Das wäre $\\sin(x^2)$ selbst, mit innerer Ableitung dranmultipliziert — aber dann fehlt der Wechsel zur Ableitungsfunktion.',
          3: 'Vorzeichen falsch: $(\\sin)\' = +\\cos$. Das Minuszeichen gehört zu $(\\cos)\' = -\\sin$, hier ist die äußere Funktion aber $\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['std-sin-u', 'kettenregel'] },
      ),
      // Zeile 13: apply-independent · number-input · uses=[std-ln-u]
      ni(
        'Berechne $f\'(2)$ für $f(x) = \\ln(x^2 + 1)$. Gib das Ergebnis als Dezimalzahl an.',
        0.8,
        0.001,
        '',
        `**Ansatz:** Logarithmische Ableitung als Standardfall: $(\\ln u)' = u'/u$ mit $u(x) = x^2 + 1$.

**Rechnung:** $u'(x) = 2 x$, also $f'(x) = \\dfrac{2 x}{x^2 + 1}$. Bei $x_0 = 2$: $f'(2) = \\dfrac{4}{5} = 0{,}8$.

**Probe:** Sekantensteigung $(\\ln(5{,}004) - \\ln 5)/0{,}001 \\approx 0{,}8$ ✓.

**Typischer Fehler:** Innere Ableitung $u' = 2x$ vergessen und $f'(x) = 1/(x^2+1)$ schreiben — der Standardfall ist $u'/u$, nicht $1/u$.`,
        [
          'Logarithmische Ableitung: $(\\ln u)\' = u\'/u$.',
          'Innere Funktion $u = x^2 + 1$, innere Ableitung $u\' = 2 x$.',
          'Bei $x = 2$: $u = 5$, $u\' = 4$, also $4/5 = 0{,}8$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['std-ln-u', 'kettenregel'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[std-ln-u]
      mc(
        'Mara berechnet $(\\ln(3 x^2))\' = \\dfrac{1}{3 x^2}$. Was ist ihr Fehler?',
        [
          'Sie hat $(\\ln u)\' = 1/u$ statt der korrekten Standardform $(\\ln u)\' = u\'/u$ verwendet — der Zähler $u\'$ fehlt. Korrekt: $\\dfrac{(3 x^2)\'}{3 x^2} = \\dfrac{6 x}{3 x^2} = \\dfrac{2}{x}$.',
          'Sie hätte den Vorfaktor $3$ aus dem Logarithmus ziehen müssen.',
          '$\\ln(3 x^2)$ ist nicht differenzierbar.',
          'Der Nenner ist falsch — er müsste $3 x$ sein.',
        ],
        0,
        `**Ansatz:** Standardfall: $(\\ln u)' = u'/u$. Bei VERKETTUNGEN MUSS die innere Ableitung im Zähler stehen — sonst entsteht die häufige Fehlformel $1/u$.

**Rechnung:** Korrekt: $u(x) = 3 x^2$, $u'(x) = 6 x$. $(\\ln(3 x^2))' = \\dfrac{6 x}{3 x^2} = \\dfrac{2}{x}$. Maras Ergebnis $1/(3 x^2)$ wäre nur richtig, wenn $u(x) = x$ — was hier nicht der Fall ist.

**Probe:** Bei $x = 1$: korrektes $f'(1) = 2$. Maras Ergebnis $1/3 \\approx 0{,}33$ — Faktor $6$ daneben.

**Typischer Fehler:** Bei $\\ln$-Verkettungen die Formel $1/u$ statt $u'/u$ anwenden. Merksatz: „Logarithmische Ableitung = innere Ableitung GETEILT durch inneres Argument."`,
        [
          'Was ist die korrekte Standardform $(\\ln u)\'$?',
          'Welcher Faktor steht im ZÄHLER der logarithmischen Ableitung?',
          'Innere Ableitung $(3 x^2)\' = 6 x$ — fehlt in Maras Ergebnis.',
        ],
        {
          1: 'Mara hätte auch $\\ln(3 x^2) = \\ln 3 + 2 \\ln x$ umformen können (Log-Gesetz), dann wäre die Ableitung $0 + 2/x = 2/x$. Aber das ist eine ALTERNATIVE Methode, nicht die Erklärung des konkreten Fehlers in ihrer Rechnung.',
          2: '$\\ln(3 x^2)$ ist auf seinem Definitionsbereich ($x \\neq 0$) überall differenzierbar. Das Problem ist die FALSCHE Anwendung der Standardform, nicht die Existenz der Ableitung.',
          3: 'Der Nenner $3 x^2$ ist tatsächlich korrekt — das ist die innere Funktion $u$. Maras Fehler liegt im fehlenden Zähler $u\'$, nicht im falschen Nenner.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['std-ln-u', 'kettenregel'] },
      ),
      // Zeile 15: transfer · matching · uses=[std-exp-u, std-sin-u, std-ln-u]
      matching(
        'Ordne jeder verketteten Funktion ihre Ableitung zu — die innere Ableitung ist überall mitgenommen.',
        [
          { left: '$\\sin(2 x)$', right: '$2 \\cos(2 x)$' },
          { left: '$e^{3 x}$', right: '$3 e^{3 x}$' },
          { left: '$\\ln(x^2)$', right: '$\\dfrac{2}{x}$' },
          { left: '$\\cos(5 x)$', right: '$-5 \\sin(5 x)$' },
        ],
        `**Ansatz:** Jeweils Standardfall + innere Ableitung. Innere Funktion $u(x)$ ist hier immer ein Vielfaches oder eine Potenz von $x$.

**Rechnung:**
- $(\\sin(2 x))' = \\cos(2 x) \\cdot 2 = 2 \\cos(2 x)$
- $(e^{3 x})' = e^{3 x} \\cdot 3 = 3 e^{3 x}$
- $(\\ln(x^2))' = \\dfrac{(x^2)'}{x^2} = \\dfrac{2 x}{x^2} = \\dfrac{2}{x}$
- $(\\cos(5 x))' = -\\sin(5 x) \\cdot 5 = -5 \\sin(5 x)$

**Probe:** Bei $x = 1$: $2 \\cos 2 \\approx -0{,}832$, $3 e^3 \\approx 60{,}26$, $2/1 = 2$, $-5 \\sin 5 \\approx 4{,}795$ — vier sehr verschiedene Werte, also keine Verwechslung möglich.

**Typischer Fehler:** Innere Ableitung weglassen (z.B. $\\cos(2 x)$ statt $2 \\cos(2 x)$) oder Vorzeichen bei $\\cos$ vergessen.`,
        [
          'Standardfälle: $(\\sin u)\' = \\cos u \\cdot u\'$, $(e^u)\' = e^u \\cdot u\'$, $(\\ln u)\' = u\'/u$, $(\\cos u)\' = -\\sin u \\cdot u\'$.',
          'Innere Ableitung ist hier jeweils die Konstante vor $x$ oder $2x$ bei $x^2$.',
          'Vorzeichen bei $\\cos$ NICHT vergessen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['std-exp-u', 'std-sin-u', 'std-ln-u', 'kettenregel'] },
      ),
      // Bonus SG 2: apply-guided · multiple-choice · uses=[std-exp-u]
      mc(
        'Was ist die Ableitung von $f(x) = e^{-x}$?',
        ['$-e^{-x}$', '$e^{-x}$', '$-e^{-x-1}$', '$-x \\cdot e^{-x-1}$'],
        0,
        `**Ansatz:** Standardfall $(e^u)' = e^u \\cdot u'$ mit $u = -x$ und $u' = -1$.

**Rechnung:** $f'(x) = e^{-x} \\cdot (-1) = -e^{-x}$.

**Probe:** $e^{-x}$ ist monoton fallend (für wachsendes $x$ wird der Wert kleiner) — also muss die Ableitung negativ sein. $-e^{-x} < 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen ($e^{-x}$) oder Potenzregel falsch anwenden.`,
        [
          'Was ist die innere Funktion $u$ und ihre Ableitung?',
          '$u = -x$, $u\' = -1$.',
          '$(e^u)\' = e^u \\cdot u\' = e^{-x} \\cdot (-1) = -e^{-x}$.',
        ],
        {
          1: 'Vorzeichen vergessen — die innere Ableitung $u\' = -1$ wurde ausgelassen. $e^{-x}$ allein wäre nur die unveränderte Funktion.',
          2: 'Hier wurde die Potenzregel $(x^n)\' = n x^{n-1}$ auf eine Exponentialfunktion angewandt — falsch. Bei $e^{-x}$ ist die Variable im EXPONENTEN, nicht in der Basis.',
          3: 'Wieder Potenzregel-Fehler, zusätzlich Vorzeichen falsch. Bei Exponentialfunktionen gilt der Standardfall $(e^u)\' = e^u \\cdot u\'$, KEINE Potenzregel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['std-exp-u', 'kettenregel'] },
      ),
    ],

    // [3] Mehrfachverkettung
    3: [
      // Zeile 16: recognize · true-false · uses=[mehrfach-kette]
      tf(
        'Bei dreifach verketteten Funktionen $f(g(h(x)))$ multipliziert die Kettenregel ALLE DREI Ableitungen: $f\'(g(h(x))) \\cdot g\'(h(x)) \\cdot h\'(x)$.',
        true,
        `**Ansatz:** Die Kettenregel wird bei jeder zusätzlichen Schale ein weiteres Mal angewandt — jede Schicht trägt einen Faktor zum Produkt bei.

**Rechnung:** Für $f(g(h(x)))$: erst $h$ auf $x$ angewandt, dann $g$, dann $f$. Beim Ableiten in umgekehrter Reihenfolge: $f'(g(h(x))) \\cdot [g(h(x))]' = f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)$. DREI Faktoren.

**Probe:** Für $f(x) = e^{\\sin(2x)}$: außen $e^u$, mittel $\\sin v$, innen $2x$. Ableitung $f'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2$ — drei Faktoren ✓.

**Typischer Fehler:** Nur zwei Faktoren bilden (mittlere Schicht vergessen) oder die Auswertungsstellen verwechseln.`,
        [
          'Wie viele Schichten hat $f(g(h(x)))$?',
          'Pro Schicht kommt ein Faktor in das Produkt der Kettenregel.',
          'Innerste Schicht: nur $h\'(x)$. Mittlere: $g\'(h(x))$. Äußerste: $f\'(g(h(x)))$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['mehrfach-kette', 'kettenregel'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[mehrfach-kette]
      mc(
        'Was ist die Ableitung von $f(x) = e^{\\sin x}$?',
        [
          '$\\cos x \\cdot e^{\\sin x}$',
          '$e^{\\sin x}$',
          '$e^{\\cos x}$',
          '$\\sin x \\cdot e^{\\sin x}$',
        ],
        0,
        `**Ansatz:** Standardfall $(e^u)' = e^u \\cdot u'$ mit $u(x) = \\sin x$ und $u'(x) = \\cos x$.

**Rechnung:** $f'(x) = e^{\\sin x} \\cdot \\cos x = \\cos x \\cdot e^{\\sin x}$.

**Probe:** Bei $x = 0$: $\\cos 0 \\cdot e^0 = 1 \\cdot 1 = 1$. Sekantensteigung $\\dfrac{e^{\\sin 0{,}001} - e^0}{0{,}001} \\approx 1{,}0005$ ✓.

**Typischer Fehler:** Innere Ableitung $\\cos x$ vergessen (Antwort B) oder Funktionsnamen $\\sin/\\cos$ im Exponenten austauschen (Antwort C).`,
        [
          'Standardfall $(e^u)\' = e^u \\cdot u\'$.',
          'Hier $u = \\sin x$, also $u\' = \\cos x$.',
          '$e^{\\sin x}$ bleibt unverändert, der Faktor $\\cos x$ kommt vor (Kettenregel).',
        ],
        {
          1: 'Innere Ableitung $\\cos x$ vergessen — die häufigste Falle bei $e^u$-Verkettungen. Das Ergebnis $e^{\\sin x}$ wäre nur richtig, wenn $u = x$.',
          2: 'Funktion im Exponenten ausgetauscht — das ist nicht erlaubt. Ableiten ändert die Funktion $\\sin \\to \\cos$ NUR im FAKTOR-Term, nicht im Exponenten. $e^{\\sin x}$ behält den Sinus.',
          3: 'Innere Ableitung falsch: $(\\sin x)\' = \\cos x$, nicht $\\sin x$. Hier wurde die Funktion nicht abgeleitet, sondern unverändert mitgenommen.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['mehrfach-kette', 'std-exp-u', 'kettenregel'] },
      ),
      // Zeile 18: apply-independent · number-input · uses=[mehrfach-kette]
      ni(
        'Berechne $f\'(0)$ für $f(x) = e^{\\sin(2x)}$.',
        2,
        0,
        '',
        `**Ansatz:** Dreifach verkettet: außen $e^u$, mittel $\\sin v$, innen $2x$. Drei Faktoren multiplizieren.

**Rechnung:** $f'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2$. Bei $x_0 = 0$: $\\sin(0) = 0$, also $e^0 = 1$ · $\\cos 0 = 1$ · $2$ = $2$.

**Probe:** Sekantensteigung $\\dfrac{e^{\\sin(0{,}002)} - 1}{0{,}001} \\approx 2{,}00$ ✓.

**Typischer Fehler:** Eine der drei Ableitungs-Stufen vergessen — z. B. nur $e^{\\sin(2x)} \\cdot \\cos(2x)$ ohne den $\\cdot 2$ aus der innersten Schicht.`,
        [
          'Wie viele Schichten hat $e^{\\sin(2x)}$?',
          'Drei Schichten: $e^u$, $\\sin v$, $2x$.',
          'Drei Ableitungen multiplizieren: $e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['mehrfach-kette', 'std-exp-u', 'std-sin-u', 'kettenregel'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[mehrfach-kette]
      mc(
        'Tom berechnet $(\\sin(e^x))\' = \\cos(e^x)$. Was ist sein Fehler?',
        [
          'Er hat die innere Ableitung $(e^x)\' = e^x$ vergessen. Standardfall: $(\\sin u)\' = \\cos u \\cdot u\'$. Korrekt: $\\cos(e^x) \\cdot e^x$.',
          'Bei mehrfach verketteten Funktionen gilt die Kettenregel nicht.',
          '$\\sin(e^x)$ ist nicht definiert.',
          'Er hätte $\\sin$ und $e^x$ tauschen müssen.',
        ],
        0,
        `**Ansatz:** Bei Verkettung muss die innere Ableitung IMMER mitgenommen werden. Innere Funktion hier: $u(x) = e^x$, innere Ableitung $u' = e^x$.

**Rechnung:** Korrekt: $(\\sin(e^x))' = \\cos(e^x) \\cdot e^x$. Toms Ergebnis $\\cos(e^x)$ wäre nur richtig, wenn $u = x$ — hier ist $u = e^x$ aber gerade nicht die Identität.

**Probe:** Bei $x = 0$: korrektes $f'(0) = \\cos(1) \\cdot 1 \\approx 0{,}540$. Toms Ergebnis $\\cos(1) \\approx 0{,}540$ wäre numerisch zufällig hier dasselbe ($e^0 = 1$), aber bei $x = 1$: korrekt $\\cos(e) \\cdot e \\approx -0{,}911 \\cdot 2{,}718 \\approx -2{,}477$ vs. Tom $\\cos(e) \\approx -0{,}911$ — Faktor $e \\approx 2{,}72$ daneben.

**Typischer Fehler:** Genau dieser — die Kettenregel bei „nicht offensichtlichen" inneren Funktionen vergessen. Speziell bei $e^x$ als innere Funktion ist es leicht, „nur $\\cos$" zu schreiben, weil man die Standardformel auswendig hat.`,
        [
          'Welcher Standardfall gilt für $(\\sin u)\'$?',
          'Was ist die innere Ableitung von $e^x$?',
          'Der Faktor $u\' = e^x$ darf NICHT fehlen.',
        ],
        {
          1: 'Doch — die Kettenregel ist universell. Bei jeder Verkettung gilt sie, auch bei doppelten oder mehrfachen Schichten.',
          2: '$\\sin(e^x)$ ist auf ganz $\\mathbb{R}$ definiert und differenzierbar. Toms Fehler ist die fehlerhafte Anwendung der Kettenregel, nicht ein Definitionsproblem.',
          3: 'Innen und außen tauschen würde eine ganz ANDERE Funktion ergeben: $e^{\\sin x}$. Das ist nicht $\\sin(e^x)$. Toms Fehler liegt in der fehlenden inneren Ableitung, nicht in der Reihenfolge der Funktionen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['mehrfach-kette', 'std-sin-u', 'kettenregel'] },
      ),
      // Zeile 20: transfer · sorting · uses=[mehrfach-kette, aussere-finden]
      sorting(
        'Sortiere die Schalen-Ableitungen für $f(x) = e^{\\sin(2 x)}$ von ÄUSSERSTER zu INNERSTER Schicht.',
        [
          'Äußerste Schale — $(e^u)\' = e^u$: ergibt $e^{\\sin(2x)}$.',
          'Mittlere Schale — $(\\sin v)\' = \\cos v$: ergibt $\\cos(2x)$.',
          'Innerste Schale — $(2x)\' = 2$: ergibt $2$.',
          'Drei Faktoren multiplizieren: $f\'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2 e^{\\sin(2x)} \\cos(2x)$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Bei Mehrfachverkettung Schicht für Schicht von außen nach innen ableiten, dann alle Faktoren multiplizieren.

**Rechnung:** Drei Schalen, drei Ableitungen, drei Faktoren. Jeder Faktor enthält die jeweils inneren Schichten als Argument; die Ableitung wird auf die eigene Schicht angewandt.

**Probe:** Bei $x = 0$: alle drei Faktoren $e^0 = 1$, $\\cos 0 = 1$, $2$. Produkt = $2$ ✓ (passt zur Aufgabe Zeile 18).

**Typischer Fehler:** Reihenfolge verwechseln (innerste zuerst statt äußerste) oder eine Schale vergessen.`,
        [
          'Wie viele Schalen hat $e^{\\sin(2x)}$? Was ist die äußerste?',
          'Pro Schicht ein Faktor in das Produkt.',
          'Innerste Schicht ist meistens die einfachste — hier nur $(2x)\' = 2$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['mehrfach-kette', 'aussere-finden', 'kettenregel', 'std-exp-u', 'std-sin-u'] },
      ),
      // Bonus SG 3: recognize · true-false · uses=[mehrfach-kette]
      tf(
        'Die Funktion $f(x) = \\sqrt{\\cos(x^2)}$ besteht aus drei Schalen — äußere $\\sqrt{\\cdot}$, mittlere $\\cos$, innerste $x^2$ — und benötigt die Kettenregel dreifach.',
        true,
        `**Ansatz:** Schalen abzählen: Was passiert mit $x$ in welcher Reihenfolge? Erst $x^2$ bilden, dann Kosinus darauf anwenden, dann die Wurzel.

**Rechnung:** Drei Schichten: innerste $h(x) = x^2$, mittlere $g(u) = \\cos u$, äußerste $f(v) = \\sqrt{v}$. Ableitung: $f'(x) = \\dfrac{1}{2\\sqrt{\\cos(x^2)}} \\cdot (-\\sin(x^2)) \\cdot 2x = \\dfrac{-2x \\sin(x^2)}{2\\sqrt{\\cos(x^2)}} = \\dfrac{-x \\sin(x^2)}{\\sqrt{\\cos(x^2)}}$.

**Probe:** Bei $x = 0$: alle drei Faktoren ergeben $\\dfrac{1}{2 \\cdot 1} \\cdot 0 \\cdot 0 = 0$. Tatsächlich hat $\\sqrt{\\cos(x^2)}$ bei $x = 0$ den Wert $1$ und ein lokales Maximum (waagerechte Tangente).

**Typischer Fehler:** Nur zwei Schalen sehen ($\\sqrt{\\cos(\\cdot)}$ als „eine Schale") und die innere $x^2$ ignorieren.`,
        [
          'Welche Operationen werden auf $x$ nacheinander angewandt?',
          'Bei $\\sqrt{\\cos(x^2)}$: erst quadrieren, dann Kosinus, dann Wurzel.',
          'Jede einzelne Operation ist eine eigene Schale.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['mehrfach-kette', 'aussere-finden'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // abl-1-5 · Extremwerte und Kurvendiskussion
  // ─────────────────────────────────────────────────────────────────────────
  'abl-1-5': {
    // [0] Notwendige Bedingung: f'(x_0) = 0
    0: [
      // Zeile 1: recognize · true-false · uses=[fprime-null]
      tf(
        'Wenn $f$ in $x_0$ ein lokales Extremum hat (und dort differenzierbar ist), dann muss $f\'(x_0) = 0$ gelten — die Tangente verläuft waagerecht.',
        true,
        `**Ansatz:** Notwendige Bedingung für lokales Extremum: waagerechte Tangente. Satz von Fermat.

**Rechnung:** Ist $x_0$ ein inneres lokales Maximum, dann ist $f'(x_0) = 0$ (analog Minimum). Geometrisch: am Gipfel/Tal verläuft die Tangente waagerecht.

**Probe:** $f(x) = x^2 + 5$ hat Minimum bei $x = 0$. $f'(x) = 2x$, $f'(0) = 0$ ✓.

**Typischer Fehler:** Die Umkehrung „$f'(x_0) = 0 \\Rightarrow$ Extremum" annehmen. Gegenbeispiel: $f(x) = x^3$ mit $f'(0) = 0$ ist Sattelpunkt, kein Extremum.`,
        [
          'Welche Steigung hat eine Tangente an einem Hügel oder Tal?',
          'Notwendige Bedingung = was bei jedem Extremum gilt.',
          'Vorsicht: notwendig $\\neq$ hinreichend — $x^3$ erfüllt sie auch ohne Extremum.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['fprime-null'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[fprime-null]
      mc(
        'Für $f(x) = x^2 - 6 x + 5$ ist $f\'(x) = 2 x - 6$. An welcher Stelle $x_0$ kann ein Extremum vorliegen?',
        ['$x_0 = 3$', '$x_0 = -3$', '$x_0 = 6$', '$x_0 = 0$'],
        0,
        `**Ansatz:** Notwendige Bedingung: $f'(x_0) = 0$ — Nullstelle der Ableitung suchen.

**Rechnung:** $2 x - 6 = 0 \\Leftrightarrow x = 3$. Einziger Kandidat: $x_0 = 3$.

**Probe:** $f''(x) = 2 > 0$, also bei $x_0 = 3$ tatsächlich ein lokales Minimum. $f(3) = 9 - 18 + 5 = -4$.

**Typischer Fehler:** Vorzeichen falsch lösen ($-3$) oder durch falsche Konstante teilen ($6$).`,
        [
          'Setze $f\'(x) = 0$ und löse nach $x$.',
          '$2 x - 6 = 0 \\Rightarrow 2 x = 6 \\Rightarrow x = ?$',
          'Vorzeichen beachten: $-6$ wandert nach rechts und wird $+6$.',
        ],
        {
          1: 'Vorzeichen falsch — aus $2 x - 6 = 0$ folgt $2 x = +6$, also $x = +3$, nicht $-3$.',
          2: 'Durch $2$ nicht geteilt — $2 x = 6$ liefert $x = 3$, nicht $x = 6$. Der Faktor $2$ vor $x$ muss noch durchdividiert werden.',
          3: '$f\'(0) = -6 \\neq 0$ — bei $x = 0$ ist die Tangente nicht waagerecht. Die Funktion hat dort keine waagerechte Tangente und damit kein Extremum.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['fprime-null'] },
      ),
      // Zeile 3: apply-independent · number-input · uses=[fprime-null]
      ni(
        'Die Funktion $f(x) = x^3 - 12 x + 1$ hat zwei Extremum-Kandidaten (Nullstellen von $f\'$). Bestimme den POSITIVEN.',
        2,
        0,
        '',
        `**Ansatz:** Notwendige Bedingung: $f'(x) = 0$. Quadratische Gleichung lösen, positive Lösung wählen.

**Rechnung:** $f'(x) = 3 x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2) = 0 \\Leftrightarrow x = \\pm 2$. Positiv: $x = 2$.

**Probe:** $f'(2) = 12 - 12 = 0$ ✓. $f''(x) = 6 x$, $f''(2) = 12 > 0$ → lokales Minimum bei $x = 2$.

**Typischer Fehler:** Nur positive Wurzel ziehen und die negative übersehen — bei dieser Aufgabe ist die negative gerade nicht gesucht, aber beim Auflisten ALLER Kandidaten muss man beide bedenken.`,
        [
          'Bilde $f\'(x)$ und setze gleich $0$.',
          'Quadratische Gleichung $x^2 = 4$ hat ZWEI Lösungen.',
          'Aus $\\pm 2$ den positiven Wert wählen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['fprime-null'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[fprime-null]
      mc(
        'Tim behauptet: „Weil $f\'(0) = 0$ bei $f(x) = x^3$, hat $f$ bei $x = 0$ ein lokales Extremum." Was ist sein Fehler?',
        [
          'Er hat „notwendig" mit „hinreichend" verwechselt — $f\'(x_0) = 0$ ist NOTWENDIG, aber nicht hinreichend. Bei $f(x) = x^3$ ist $x = 0$ ein Sattelpunkt (kein Extremum), weil $f\'$ kein Vorzeichen wechselt.',
          '$f\'(0) = 0$ stimmt gar nicht für $f(x) = x^3$.',
          'Bei Polynomen dritten Grades gibt es nie Extrema.',
          'Er hätte den Definitionsbereich angeben müssen.',
        ],
        0,
        `**Ansatz:** „Notwendig" heißt: Bedingung MUSS erfüllt sein (sonst kein Extremum). „Hinreichend" heißt: Bedingung erfüllt ⇒ garantiert Extremum. Tim setzt notwendig = hinreichend.

**Rechnung:** $f(x) = x^3$: $f'(x) = 3 x^2$, $f'(0) = 0$ ✓ (notwendige Bedingung erfüllt). Aber $f$ ist überall streng monoton wachsend, also kein Extremum bei $x = 0$ — Sattelpunkt.

**Probe:** $f(-0{,}1) = -0{,}001 < f(0) = 0 < f(0{,}1) = 0{,}001$ — kein Tal, kein Berg. ✓

**Typischer Fehler:** Genau dieser — die Umkehrung des Satzes von Fermat fälschlich annehmen. Hilft: immer hinreichende Bedingung ($f''$-Test oder VZW von $f'$) zusätzlich prüfen.`,
        [
          'Was bedeutet „notwendige Bedingung"?',
          'Erfüllt $f(x) = x^3$ bei $x = 0$ wirklich ein Extremum?',
          'Vorzeichen von $f\' = 3 x^2$ links und rechts von $0$ — wechselt es?',
        ],
        {
          1: '$(x^3)\' = 3 x^2$, bei $x = 0$: $3 \\cdot 0 = 0$. Die notwendige Bedingung IST erfüllt — Tims Fehler liegt nicht hier.',
          2: 'Polynome dritten Grades können sehr wohl Extrema haben — z.B. $f(x) = x^3 - 3 x$ hat Max bei $x = -1$ und Min bei $x = 1$. Tims Fehler ist die fehlende hinreichende Prüfung im konkreten Fall, nicht eine grundsätzliche Aussage über Polynome.',
          3: '$f(x) = x^3$ ist auf ganz $\\mathbb{R}$ definiert und differenzierbar. Der Definitionsbereich ist hier kein Problem.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['fprime-null'] },
      ),
      // Zeile 5: transfer · multiple-choice · uses=[fprime-null]
      mc(
        'Welche der folgenden Funktionen erfüllt die notwendige Bedingung $f\'(x_0) = 0$ in $x_0 = 1$ (also: hat dort waagerechte Tangente)?',
        [
          '$f(x) = (x - 1)^2$',
          '$f(x) = x^2 - 1$',
          '$f(x) = x^3 + 1$',
          '$f(x) = e^x$',
        ],
        0,
        `**Ansatz:** Für jede Funktion $f'(1)$ ausrechnen und prüfen, ob das Ergebnis $0$ ist.

**Rechnung:**
- $f(x) = (x-1)^2$: $f'(x) = 2(x-1)$, $f'(1) = 0$ ✓
- $f(x) = x^2 - 1$: $f'(x) = 2 x$, $f'(1) = 2 \\neq 0$
- $f(x) = x^3 + 1$: $f'(x) = 3 x^2$, $f'(1) = 3 \\neq 0$
- $f(x) = e^x$: $f'(x) = e^x$, $f'(1) = e \\approx 2{,}72 \\neq 0$

**Probe:** $f(x) = (x-1)^2$ hat bei $x = 1$ tatsächlich ein Minimum (Scheitelpunkt der nach oben offenen Parabel) — passt zur Aussage „waagerechte Tangente bei $x = 1$".

**Typischer Fehler:** Die Funktionen ohne Ableitung anschauen und nur Funktionswerte einsetzen. Notwendige Bedingung verlangt $f'$ auswerten, nicht $f$.`,
        [
          'Was muss $f\'(1)$ ergeben, damit die notwendige Bedingung erfüllt ist?',
          'Berechne $f\'(x)$ für jede Option und werte bei $x = 1$ aus.',
          'Bei einer verschobenen Parabel $(x - a)^2$ liegt der Scheitel bei $x = a$.',
        ],
        {
          1: '$f\'(x) = 2 x$, bei $x = 1$: $f\'(1) = 2 \\neq 0$. Die einfache Parabel $x^2 - 1$ hat ihren Scheitel bei $x = 0$, nicht bei $x = 1$.',
          2: '$f\'(x) = 3 x^2$, $f\'(1) = 3 \\neq 0$. Die Kurve $x^3$ ist bei $x = 1$ streng wachsend mit Steigung $3$ — keine waagerechte Tangente.',
          3: '$f\'(x) = e^x$, $f\'(1) = e \\approx 2{,}72 \\neq 0$. Die Exponentialfunktion hat nirgendwo waagerechte Tangente, weil $e^x > 0$ überall ist.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['fprime-null', 'pot-regel'] },
      ),
    ],

    // [1] Hinreichend: f''-Test (Min/Max)
    1: [
      // Zeile 6: recognize · true-false · uses=[hin-min-max, f2prime]
      tf(
        'Wenn $f\'(x_0) = 0$ und $f\'\'(x_0) > 0$, liegt bei $x_0$ ein lokales Minimum. Bei $f\'\'(x_0) < 0$ entsprechend ein lokales Maximum.',
        true,
        `**Ansatz:** $f''$-Test als hinreichende Bedingung. Vorzeichen von $f''$ entscheidet Min/Max.

**Rechnung:** $f''(x_0) > 0$ heißt linksgekrümmt (Kurve „lächelt") — die waagerechte Tangente liegt im Tal $\\Rightarrow$ Minimum. $f''(x_0) < 0$ heißt rechtsgekrümmt (Kurve „traurig") — Tangente am Gipfel $\\Rightarrow$ Maximum.

**Probe:** $f(x) = x^2$ bei $x = 0$: $f''(0) = 2 > 0$ ✓ Min. $f(x) = -x^2$ bei $x = 0$: $f''(0) = -2 < 0$ ✓ Max.

**Typischer Fehler:** Vorzeichen Min/Max verwechseln. Merksatz: „positives $f''$ = lächelnde Kurve = Tal = Minimum".`,
        [
          'Was bedeutet Linkskrümmung geometrisch?',
          '$f\'\' > 0$ entspricht einer „Lächel-Kurve", $f\'\' < 0$ einer „Traurig-Kurve".',
          'Tal = Minimum, Gipfel = Maximum.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['hin-min-max', 'f2prime', 'fprime-null'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[hin-min-max]
      mc(
        'Für eine Funktion $f$ gilt $f\'(2) = 0$ und $f\'\'(2) = -3$. Welcher Typ Stelle liegt bei $x = 2$ vor?',
        ['lokales Maximum', 'lokales Minimum', 'Wendepunkt', 'Sattelpunkt'],
        0,
        `**Ansatz:** $f''$-Test mit gegebenen Werten anwenden.

**Rechnung:** $f'(2) = 0$: notwendige Bedingung erfüllt. $f''(2) = -3 < 0$: Rechtskrümmung an dieser Stelle. Hinreichende Bedingung für Maximum.

**Probe:** Bei $f''(x_0) < 0$ ist die Kurve nach unten geöffnet (Gipfel-Form), die waagerechte Tangente liegt also an einem lokalen Hochpunkt.

**Typischer Fehler:** $f''<0$ mit Minimum verwechseln (Vorzeichen vertauscht). Merksatz: negatives $f''$ = traurige Kurve = Gipfel = Maximum.`,
        [
          'Was sagt das Vorzeichen von $f\'\'$ über die Krümmung?',
          '$f\'\' < 0$: Rechtskrümmung → Tangente am Gipfel.',
          'Gipfel = Maximum.',
        ],
        {
          1: '$f\'\' < 0$ steht für Maximum (Gipfel), nicht Minimum. Bei Minimum wäre $f\'\' > 0$ erforderlich. Merksatz: positives $f\'\'$ → Tal → Min, negatives → Gipfel → Max.',
          2: 'Ein Wendepunkt erfordert $f\'\'(x_0) = 0$ mit VZW — hier ist $f\'\'(2) = -3 \\neq 0$, also gerade KEIN Wendepunkt-Kandidat.',
          3: 'Sattelpunkt verlangt $f\'(x_0) = 0$ UND $f\'\'(x_0) = 0$ — die zweite Bedingung ist hier nicht erfüllt ($f\'\'(2) = -3$). Mit eindeutigem Vorzeichen von $f\'\'$ ist es ein gewöhnliches Extremum.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['hin-min-max', 'f2prime'] },
      ),
      // Zeile 8: apply-independent · number-input · uses=[hin-min-max, fprime-null]
      ni(
        'Bestimme die $x$-Koordinate des lokalen Minimums von $f(x) = \\tfrac{1}{3} x^3 - x^2 + 1$.',
        2,
        0,
        '',
        `**Ansatz:** Vollständiges Extremum-Schema: $f'(x) = 0$ lösen, $f''$-Test für jede Lösung.

**Rechnung:** $f'(x) = x^2 - 2 x = x(x - 2) = 0 \\Rightarrow x = 0$ oder $x = 2$. $f''(x) = 2 x - 2$. $f''(0) = -2 < 0$ → Max bei $x = 0$. $f''(2) = 2 > 0$ → **Minimum** bei $x = 2$.

**Probe:** $f(0) = 1$, $f(2) = 8/3 - 4 + 1 = -1/3$. Tatsächlich $f(2) < f(0)$ und in der Mitte sollte Funktion fallen — passt zu „Max bei 0, Min bei 2".

**Typischer Fehler:** Nur eine der beiden Lösungen von $f'(x) = 0$ als Minimum identifizieren ohne $f''$-Test.`,
        [
          'Erst alle Nullstellen von $f\'$ finden.',
          '$x^2 - 2 x = x(x - 2)$ — zwei Lösungen.',
          '$f\'\'$-Test entscheidet, welche davon Minimum ist.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['hin-min-max', 'fprime-null', 'f2prime'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[hin-min-max]
      mc(
        'Hans hat für eine Funktion $f$ berechnet: $f\'(3) = 0$ und $f\'\'(3) = 5 > 0$. Er folgert: „Dort liegt ein Maximum." Was ist sein Fehler?',
        [
          'Er hat das Vorzeichen Min/Max getauscht. $f\'\'(x_0) > 0$ heißt Linkskrümmung (Tal) $\\Rightarrow$ **Minimum**. Maximum wäre $f\'\'(x_0) < 0$.',
          'Er hätte $f\'\'\'(3)$ prüfen müssen.',
          '$f\'\'(3) = 5$ kann nicht stimmen, weil $f\'$ schon $0$ ist.',
          'Bei $f\' = 0$ liegt nie ein Maximum.',
        ],
        0,
        `**Ansatz:** $f''$-Vorzeichen-Konvention: positiv ⇒ Min, negativ ⇒ Max. Hans hat sie verwechselt.

**Rechnung:** Korrekt: $f''(3) = 5 > 0$ heißt Linkskrümmung — die waagerechte Tangente liegt im „lächelnden" Teil der Kurve, also im **Tal** (Minimum). Maximum verlangt $f''<0$ (rechtsgekrümmt, „traurige" Kurve).

**Probe:** Beispiel $f(x) = (x - 3)^2 + 7$: $f'(x) = 2(x-3)$, $f'(3) = 0$. $f''(x) = 2 > 0$. Die Funktion hat hier ein Minimum (Scheitel der nach oben offenen Parabel) ✓.

**Typischer Fehler:** Genau dieser — Vorzeichenkonvention verdrehen. Merksatz: „positiv = Tal = Min", „negativ = Gipfel = Max".`,
        [
          'Welche Krümmung gehört zu welchem Extremum?',
          'Linkskrümmung („Lächeln") $\\Rightarrow$ wo liegt die Tangente?',
          '$f\'\' > 0$ steht für Min, nicht Max.',
        ],
        {
          1: '$f\'\'\'$ braucht man nur, wenn $f\'\' = 0$ und der $f\'\'$-Test versagt. Hier ist $f\'\'(3) = 5 \\neq 0$ — der $f\'\'$-Test gibt eindeutige Auskunft, nur das Vorzeichen wurde falsch interpretiert.',
          2: 'Doch, $f\'$ und $f\'\'$ können unabhängig voneinander Werte haben. Beispiel $f(x) = x^2 - 6x + 16$: $f\'(3) = 0$ UND $f\'\'(3) = 2 > 0$ — beide Werte konsistent. Es gibt keinen Widerspruch.',
          3: 'Doch — Maxima haben $f\'(x_0) = 0$ (waagerechte Tangente am Gipfel). Hans\' Fehler ist die FALSCHE Diagnose Min/Max, nicht die grundsätzliche Existenz von Maxima.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['hin-min-max'] },
      ),
      // Zeile 10: transfer · matching · uses=[hin-min-max]
      matching(
        'Ordne dem Vorzeichen von $f\'\'(x_0)$ (mit $f\'(x_0) = 0$) den richtigen Stellentyp zu.',
        [
          { left: '$f\'\'(x_0) > 0$', right: 'lokales Minimum (Tal — Linkskrümmung)' },
          { left: '$f\'\'(x_0) < 0$', right: 'lokales Maximum (Gipfel — Rechtskrümmung)' },
          { left: '$f\'\'(x_0) = 0$', right: '$f\'\'$-Test versagt — höhere Ableitungen oder VZW-Test nötig' },
          { left: '$f\'\'$ existiert nicht in $x_0$', right: 'Test nicht anwendbar (z. B. Knick wie $|x|$ bei $0$)' },
        ],
        `**Ansatz:** Vier Fälle des $f''$-Tests bei $f'(x_0) = 0$.

**Rechnung:**
- $f''(x_0) > 0$: Linkskrümmung, „lächelnde" Kurve $\\Rightarrow$ Tal $\\Rightarrow$ Minimum
- $f''(x_0) < 0$: Rechtskrümmung, „traurige" Kurve $\\Rightarrow$ Gipfel $\\Rightarrow$ Maximum
- $f''(x_0) = 0$: keine Krümmungsinformation — Test versagt
- $f''$ existiert nicht: z.B. Knickstellen, der Test ist nicht anwendbar

**Probe:** Vier verschiedene Funktionen exemplifizieren jeden Fall: $x^2$ (Min), $-x^2$ (Max), $x^4$ ($f''=0$), $|x|$ (kein $f''$).

**Typischer Fehler:** Drei mögliche Fälle, aber nur Min/Max erinnern und die anderen zwei vergessen — gerade $f''(x_0) = 0$ erfordert Aufmerksamkeit.`,
        [
          'Krümmung links/rechts entscheidet Min vs. Max.',
          'Bei verschwindender $f\'\'$ ist der Test unbrauchbar.',
          'An Knickstellen existiert $f\'$ nicht einmal stetig, $f\'\'$ erst recht nicht.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['hin-min-max', 'f2prime'] },
      ),
    ],

    // [2] f''(x_0) = 0: Vorzeichenwechsel-Test
    2: [
      // Zeile 11: recognize · true-false · uses=[f2-null-vzw]
      tf(
        'Wenn $f\'(x_0) = 0$ UND $f\'\'(x_0) = 0$, gibt der $f\'\'$-Test allein KEINE Auskunft über die Art der Stelle — man muss den Vorzeichenwechsel von $f\'$ oder höhere Ableitungen prüfen.',
        true,
        `**Ansatz:** $f''(x_0) = 0$ bedeutet: an dieser Stelle ist die Krümmung „neutral" — der Test versagt. Drei Fälle bleiben möglich: Min, Max, Sattel.

**Rechnung:** Drei Beispiele mit $f'(0) = f''(0) = 0$: $x^4$ (Min, $f'$ wechselt $-\\to+$), $-x^4$ (Max, $f'$ wechselt $+\\to-$), $x^3$ (Sattel, kein VZW).

**Probe:** Vorzeichenwechsel-Test für $x^4$: $f'(x) = 4 x^3$, $f'(-0{,}1) < 0$, $f'(0{,}1) > 0$ — VZW $-\\to+$ ⇒ Min ✓.

**Typischer Fehler:** Bei $f''(x_0) = 0$ vorschnell „Sattelpunkt" oder „Wendepunkt" diagnostizieren — auch Min/Max sind möglich.`,
        [
          'Was sagt $f\'\'(x_0) = 0$ über die Krümmungsrichtung aus?',
          'Welche Beispiele kennt man mit $f\' = f\'\' = 0$ und Min/Max/Sattel?',
          'Vorzeichenwechsel-Test oder höhere Ableitungen entscheiden.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['f2-null-vzw', 'hin-min-max'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[f2-null-vzw]
      mc(
        'Bei $f(x) = x^4$ gilt $f\'(0) = 0$ und $f\'\'(0) = 0$. Welche Methode liefert ein eindeutiges Ergebnis über die Art der Stelle?',
        [
          'Vorzeichenwechsel von $f\' = 4 x^3$ links und rechts von $0$ prüfen (oder $f^{(4)}(0) = 24 > 0$ ⇒ Min)',
          '$f\'\'$ erneut anwenden — das Ergebnis bleibt $0$.',
          'Funktionswert $f(0) = 0$ einsetzen — der entscheidet.',
          'Aufgabe abbrechen — es kann kein Extremum existieren.',
        ],
        0,
        `**Ansatz:** Bei $f''(x_0) = 0$ braucht es ein anderes Kriterium. Erste Wahl: Vorzeichenwechsel von $f'$. Alternativ: höhere Ableitungen.

**Rechnung:** $f'(x) = 4 x^3$. Links von $0$ (z.B. $x = -0{,}1$): $f' = -0{,}004 < 0$. Rechts von $0$ (z.B. $x = 0{,}1$): $f' = 0{,}004 > 0$. VZW $-\\to+$ ⇒ **Minimum**. Alternativ: $f^{(4)}(0) = 24 > 0$ → ebenfalls Minimum.

**Probe:** $x^4$ hat den Wert $0$ bei $x = 0$ und ist sonst überall positiv — also ist $x = 0$ tatsächlich das globale Minimum ✓.

**Typischer Fehler:** $f''$ wiederholt anwenden — bringt nichts neues. Stattdessen Vorzeichen von $f'$ in Umgebung untersuchen.`,
        [
          'Welcher Test funktioniert, wenn $f\'\'$ versagt?',
          'Vorzeichenwechsel von $f\'$ um den Kandidaten herum prüfen.',
          'Bei $f(x) = x^4$: $f\'(x) = 4 x^3$ — Vorzeichenwechsel bei $0$?',
        ],
        {
          1: '$f\'\'$ erneut auswerten gibt wieder $0$ (für $f(x) = x^4$ ist $f\'\'(x) = 12 x^2$, $f\'\'(0) = 0$). Keine neue Information — Test versagt.',
          2: 'Der Funktionswert $f(x_0)$ sagt nichts über die ART des Extremums aus, nur die HÖHE. $f(0) = 0$ wäre der Wert AM EXTREMUM, nicht das Kriterium dafür.',
          3: 'Doch, $f(x) = x^4$ hat ein eindeutiges Minimum bei $x = 0$ — sichtbar im Graphen (überall $\\geq 0$, mit Wert $0$ nur bei $x = 0$). Aufgabe abbrechen wäre Aufgeben statt Methodenwechsel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['f2-null-vzw'] },
      ),
      // Zeile 13: apply-independent · multiple-choice · uses=[f2-null-vzw, fprime-null]
      mc(
        'Welche Aussage trifft auf $f(x) = x^4$ bei $x_0 = 0$ zu?',
        [
          'Lokales Minimum (Vorzeichenwechsel von $f\'$ von $-$ nach $+$)',
          'Lokales Maximum',
          'Sattelpunkt',
          'Weder Min, Max noch Sattel — die Funktion ist dort nicht definiert',
        ],
        0,
        `**Ansatz:** $f'$ und $f''$ in $0$ auswerten, dann VZW oder höhere Ableitungen.

**Rechnung:** $f'(x) = 4 x^3$, $f'(0) = 0$ (notwendige Bed.). $f''(x) = 12 x^2$, $f''(0) = 0$ (Test versagt). VZW-Test: $f'(-1) = -4 < 0$, $f'(1) = 4 > 0$ → VZW $-\\to+$ ⇒ **lokales Minimum**.

**Probe:** $f(x) = x^4 \\geq 0$ für alle $x$, $f(0) = 0$ — also ist $x = 0$ global das niedrigste — passt zur Diagnose Minimum ✓.

**Typischer Fehler:** Bei $f'' = 0$ vorschnell „Sattelpunkt" sagen — gilt nur, wenn $f'$ KEINEN Vorzeichenwechsel hat. Bei $x^4$ wechselt $f'$ sehr wohl ($-\\to+$), also Minimum.`,
        [
          '$f\'$ und $f\'\'$ bei $0$ ergeben beide $0$ — Standard-Test versagt.',
          'Welche Methode liefert dennoch ein Ergebnis?',
          'Vorzeichenwechsel von $f\'(x) = 4 x^3$: links negativ, rechts positiv.',
        ],
        {
          1: 'Bei einem Maximum müsste $f\'$ von $+$ nach $-$ wechseln. Hier ist $f\'(x) = 4 x^3$ links negativ und rechts positiv — also $-\\to+$, ein Minimum.',
          2: 'Sattelpunkt verlangt KEINEN Vorzeichenwechsel von $f\'$. Bei $x^4$ wechselt $f\'$ aber sehr wohl das Vorzeichen, also kein Sattelpunkt — sondern ein echtes Extremum.',
          3: '$f(x) = x^4$ ist ein Polynom — auf ganz $\\mathbb{R}$ definiert und differenzierbar. Definitionsbereich ist hier kein Problem.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['f2-null-vzw', 'fprime-null'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[f2-null-vzw]
      mc(
        'Lukas behauptet: „Bei $f(x) = x^4$ ist $f\'\'(0) = 0$, also liegt dort ein Sattelpunkt." Was ist sein Fehler?',
        [
          'Aus $f\'\'(x_0) = 0$ folgt NICHT automatisch ein Sattelpunkt — man muss den Vorzeichenwechsel von $f\'$ prüfen. Bei $x^4$ wechselt $f\'$ von $-$ nach $+$ ⇒ Minimum, kein Sattel.',
          'Er hat $f\'\'$ falsch berechnet — $(x^4)\'\' = 24 x^2$, nicht $12 x^2$.',
          '$x^4$ ist keine ableitbare Funktion bei $x = 0$.',
          'Er hätte zuerst $f\'(0)$ prüfen müssen.',
        ],
        0,
        `**Ansatz:** Lukas verwechselt notwendige mit hinreichender Bedingung des Sattelpunkts. $f''(x_0) = 0$ ist nur ein NOTWENDIGES Indiz, dass etwas Besonderes passiert — nicht automatisch ein Sattelpunkt.

**Rechnung:** Für Sattelpunkt braucht es: $f'(x_0) = 0$ UND KEIN VZW von $f'$. Bei $x^4$ wechselt $f'(x) = 4 x^3$ sehr wohl das Vorzeichen ($-\\to+$ bei $0$) — also kein Sattelpunkt, sondern Minimum.

**Probe:** Sattelpunkt-Beispiel: $f(x) = x^3$ bei $0$ — hier wechselt $f'(x) = 3 x^2 \\geq 0$ KEIN Vorzeichen. $f(x) = x^4$ ist anders: $f'(x) = 4 x^3$ DURCHWECHSELT $0$.

**Typischer Fehler:** Bei $f'' = 0$ reflexartig „Sattel" sagen, ohne den VZW-Test zu machen. Hilfsmittel: einen Wert links und rechts vom Kandidaten einsetzen.`,
        [
          'Welche zwei Bedingungen muss ein Sattelpunkt erfüllen?',
          'Sattelpunkt: $f\' = 0$, $f\'\' = 0$ UND $f\'$ wechselt NICHT das Vorzeichen.',
          'Bei $x^4$: wechselt $f\'$ das Vorzeichen oder nicht?',
        ],
        {
          1: '$(x^4)\'\' = (4 x^3)\' = 12 x^2$ — Lukas\' Wert (implizit) ist korrekt. Sein Fehler ist die FALSCHE Schlussfolgerung aus $f\'\'(0) = 0$, nicht die Berechnung.',
          2: '$f(x) = x^4$ ist überall beliebig oft differenzierbar — es gibt keinen Differenzierbarkeits-Engpass bei $x = 0$.',
          3: '$f\'(0) = 0$ ist Voraussetzung, die hier erfüllt ist. Lukas\' Problem liegt nicht im Versäumen dieses Tests, sondern in der falschen Diagnose nachher.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['f2-null-vzw'] },
      ),
      // Zeile 15: transfer · sorting · uses=[f2-null-vzw, hin-min-max]
      sorting(
        'Sortiere die Schritte zur Klassifikation einer Stelle $x_0$ mit $f\'(x_0) = 0$ und $f\'\'(x_0) = 0$.',
        [
          'Notwendige Bedingung: $f\'(x_0) = 0$ — als Voraussetzung gegeben.',
          'Versuche $f\'\'$-Test: $f\'\'(x_0)$ einsetzen. Falls $\\neq 0$, Art ablesen (Min/Max).',
          'Bei $f\'\'(x_0) = 0$: alternativer Test — Vorzeichenwechsel von $f\'$ in einer Umgebung links/rechts.',
          'Bei VZW $-\\to+$: Min. Bei $+\\to-$: Max. Bei KEINEM VZW: Sattelpunkt.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Entscheidungsbaum für Extremum-Klassifikation. Erst die einfachsten Tests, dann ausweichen auf VZW-Test bei Versagen.

**Rechnung:** Reihenfolge: (1) $f' = 0$ prüfen, (2) $f''$-Test versuchen, (3) bei $f'' = 0$ auf VZW-Test ausweichen, (4) Klassifikation anhand der VZW-Struktur.

**Probe:** Für $x^4$ bei $0$: (1) $f'(0) = 0$ ✓, (2) $f''(0) = 0$ — Test versagt, (3) VZW prüfen: $f'(-1) < 0$, $f'(1) > 0$, (4) VZW $-\\to+$ ⇒ Min ✓.

**Typischer Fehler:** Den VZW-Test überspringen und vorschnell „Sattel" diagnostizieren bei $f'' = 0$.`,
        [
          'Erst notwendige Bedingung, dann hinreichende Tests.',
          'Standard-Test ist $f\'\'$ — wenn er versagt, ausweichen.',
          'Alternativtest: Vorzeichen von $f\'$ links/rechts vom Kandidaten.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['f2-null-vzw', 'hin-min-max', 'fprime-null'] },
      ),
    ],

    // [3] Wendepunkt
    3: [
      // Zeile 16: recognize · true-false · uses=[wendepunkt]
      tf(
        'Ein Wendepunkt ist eine Stelle, an der die Krümmung wechselt — formal: $f\'\'(x_0) = 0$ MIT Vorzeichenwechsel (oder äquivalent $f\'\'\'(x_0) \\neq 0$).',
        true,
        `**Ansatz:** Wendepunkt = Krümmungswechsel. Notwendig $f''(x_0) = 0$, hinreichend VZW oder $f'''(x_0) \\neq 0$.

**Rechnung:** Bei einem Wendepunkt wechselt $f''$ das Vorzeichen — die Kurve geht von Rechtskrümmung zu Linkskrümmung (oder umgekehrt). Ohne VZW wäre $x_0$ kein Wendepunkt.

**Probe:** $f(x) = x^3$: $f''(x) = 6 x$, $f''(0) = 0$, VZW von $-$ (für $x<0$) nach $+$ (für $x>0$) ✓ Wendepunkt bei $x = 0$.

**Typischer Fehler:** Annehmen, dass $f''(x_0) = 0$ automatisch Wendepunkt heißt. Gegenbeispiel: $f(x) = x^4$, $f''(0) = 0$ aber kein VZW — kein Wendepunkt.`,
        [
          'Was ist die geometrische Bedeutung eines Wendepunkts?',
          'Krümmung wechselt = $f\'\'$ wechselt Vorzeichen.',
          'Notwendige Bedingung allein reicht nicht — VZW (oder $f\'\'\'\\neq 0$) muss dazu.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['wendepunkt', 'f2prime'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[wendepunkt]
      mc(
        'Bei welcher Funktion liegt ein Wendepunkt bei $x_0 = 0$?',
        [
          '$f(x) = x^3$',
          '$f(x) = x^2$',
          '$f(x) = x^4$',
          '$f(x) = e^x$',
        ],
        0,
        `**Ansatz:** Für jede Option $f''(0)$ und VZW von $f''$ prüfen.

**Rechnung:**
- $f(x) = x^3$: $f''(x) = 6 x$, $f''(0) = 0$ ✓. VZW: für $x < 0$ ist $f'' < 0$, für $x > 0$ ist $f'' > 0$ — VZW vorhanden ⇒ Wendepunkt
- $f(x) = x^2$: $f''(x) = 2 > 0$ konstant — nirgends $0$, kein Wendepunkt
- $f(x) = x^4$: $f''(x) = 12 x^2$, $f''(0) = 0$, aber $f''(x) \\geq 0$ überall — KEIN VZW, kein Wendepunkt
- $f(x) = e^x$: $f''(x) = e^x > 0$ überall, nirgends $0$ — kein Wendepunkt

**Probe:** Beim Plotten von $x^3$ sieht man bei $x = 0$ den klassischen „S-Kurven"-Wechsel: konvex → konkav (oder umgekehrt). Genau das Wendepunkt-Muster.

**Typischer Fehler:** Bei $x^4$ vorschnell „Wendepunkt" diagnostizieren, weil $f''(0) = 0$ — der fehlende Vorzeichenwechsel macht es zu KEINEM Wendepunkt.`,
        [
          'Bei welcher Funktion wechselt $f\'\'$ das Vorzeichen bei $x = 0$?',
          '$f\'\'(x) = 6 x$ für $f(x) = x^3$ — wie sieht das Vorzeichen links/rechts von $0$ aus?',
          'Vorzeichenwechsel ist entscheidend, nicht nur die Nullstelle von $f\'\'$.',
        ],
        {
          1: '$f(x) = x^2$ hat $f\'\'(x) = 2 > 0$ konstant — die Krümmung wechselt nie, also kein Wendepunkt.',
          2: '$f(x) = x^4$ hat zwar $f\'\'(0) = 0$ (notwendige Bedingung erfüllt), aber $f\'\'(x) = 12 x^2 \\geq 0$ überall — KEIN Vorzeichenwechsel. Bei $x = 0$ liegt ein Minimum, kein Wendepunkt.',
          3: '$f(x) = e^x$ hat $f\'\'(x) = e^x > 0$ überall — die Krümmung wechselt nie, kein Wendepunkt.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['wendepunkt', 'f2prime'] },
      ),
      // Zeile 18: apply-independent · number-input · uses=[wendepunkt]
      ni(
        'Bestimme die $x$-Koordinate des Wendepunkts von $f(x) = x^3 - 6 x^2 + 9 x + 1$.',
        2,
        0,
        '',
        `**Ansatz:** Notwendige Bedingung: $f''(x) = 0$. Anschließend VZW prüfen.

**Rechnung:** $f'(x) = 3 x^2 - 12 x + 9$, $f''(x) = 6 x - 12 = 0 \\Rightarrow x = 2$. VZW-Probe: $f''(1{,}9) = -0{,}6 < 0$, $f''(2{,}1) = 0{,}6 > 0$ → VZW von $-$ nach $+$ ⇒ Wendepunkt bei $x = 2$.

**Probe:** Bei kubischen Funktionen ist der Wendepunkt immer das „Inflexionsmaß" zwischen Min und Max. $f'(x) = 0 \\Rightarrow 3 x^2 - 12 x + 9 = 0 \\Rightarrow x^2 - 4 x + 3 = 0 \\Rightarrow x = 1, 3$. Mittelwert: $(1 + 3)/2 = 2$ — passt zum Wendepunkt ✓.

**Typischer Fehler:** $f'(x) = 0$ statt $f''(x) = 0$ lösen — das gibt Extremum-Kandidaten, nicht Wendepunkt-Kandidaten.`,
        [
          'Welche Ableitung muss $0$ werden für einen Wendepunkt?',
          'Bilde $f\'\'(x)$ und löse $f\'\'(x) = 0$.',
          'VZW-Test verifizieren: links und rechts von $x = 2$ Werte einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['wendepunkt', 'polynom-abl'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[wendepunkt]
      mc(
        'Mara berechnet für $f(x) = x^3 - 3 x^2$ den Wendepunkt. Sie kommt korrekt auf $x = 1$ und gibt als Antwort „Wendepunkt bei $x = 1$" an. Was fehlt in ihrer Antwort?',
        [
          'Die $y$-Koordinate. Ein Wendepunkt ist ein PUNKT $(x, y)$ in der Ebene, nicht nur eine $x$-Stelle. Hier: $f(1) = 1 - 3 = -2$, also Wendepunkt $(1, -2)$.',
          'Sie hätte $f\'(1)$ prüfen müssen.',
          'Sie hätte $f\'\'\'(1)$ explizit angeben müssen.',
          'Sie hätte den Definitionsbereich angeben müssen.',
        ],
        0,
        `**Ansatz:** Ein Punkt im 2D-Sinne hat IMMER zwei Koordinaten: $x$ UND $y$. Wendepunkt = $(x_0, f(x_0))$.

**Rechnung:** Aus $x_0 = 1$ und $f(1) = 1 - 3 = -2$ folgt: Wendepunkt $(1, -2)$. Maras Angabe „bei $x = 1$" ist UNVOLLSTÄNDIG — sie nennt nur die Stelle, nicht den vollständigen Punkt.

**Probe:** $f''(x) = 6 x - 6 = 0 \\Rightarrow x = 1$ ✓. $f''(0{,}9) = -0{,}6$, $f''(1{,}1) = 0{,}6$ — VZW vorhanden ✓. $y$-Wert: $f(1) = 1 - 3 = -2$.

**Typischer Fehler:** Maras Fehler — beim Wendepunkt (und auch beim Extremum) wird oft nur die $x$-Koordinate angegeben. In der Prüfung gibt das Punktabzug, weil der vollständige Punkt $(x, y)$ verlangt ist.`,
        [
          'Was ist die mathematische Definition eines „Punkts" in der $xy$-Ebene?',
          'Reicht eine $x$-Koordinate, um den Punkt eindeutig anzugeben?',
          'Berechne $f(1)$ für den $y$-Wert.',
        ],
        {
          1: '$f\'(1)$ ist nicht Teil der Wendepunkt-Bedingung — Wendepunkte können beliebige Steigungen haben (außer im Sattelpunkt-Spezialfall mit $f\'(x_0) = 0$). Maras Fehler liegt nicht hier.',
          2: '$f\'\'\'(1)$ ist nicht zwingend explizit nötig, wenn der Vorzeichenwechsel direkt geprüft wird. Maras Fehler ist die UNVOLLSTÄNDIGE Punktangabe, nicht ein fehlender Beweis.',
          3: '$x^3 - 3 x^2$ ist ein Polynom — überall definiert. Der Definitionsbereich ist hier nicht das Problem.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['wendepunkt'] },
      ),
      // Zeile 20: transfer · number-input · uses=[wendepunkt]
      ni(
        'Bestimme die $y$-Koordinate des Wendepunkts von $f(x) = x^3 - 6 x^2 + 9 x + 1$.',
        3,
        0,
        '',
        `**Ansatz:** Erst $x$-Koordinate des Wendepunkts ($f''(x) = 0$), dann $y = f(x)$ ausrechnen.

**Rechnung:** $f''(x) = 6 x - 12 = 0 \\Rightarrow x = 2$. $f(2) = 2^3 - 6 \\cdot 4 + 9 \\cdot 2 + 1 = 8 - 24 + 18 + 1 = 3$.

**Probe:** Wendepunkt-Koordinaten: $(2, 3)$. Numerisches Einsetzen bestätigt $f(2) = 8 - 24 + 18 + 1 = 3$ ✓.

**Typischer Fehler:** $x$-Koordinate ($= 2$) statt $y$-Koordinate angeben. Oder $f''(2)$ statt $f(2)$ einsetzen.`,
        [
          'Erst $x$-Koordinate suchen (wie in Zeile 18).',
          'Dann den $x$-Wert in das ORIGINAL $f(x)$ einsetzen — nicht in $f\'\'$.',
          '$f(2) = 8 - 24 + 18 + 1$ — Vorzeichen sauber!',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['wendepunkt', 'polynom-abl'] },
      ),
    ],

    // [4] Randextrema
    4: [
      // Zeile 21: recognize · true-false · uses=[rand-extrema]
      tf(
        'Auf einem abgeschlossenen Intervall $[a, b]$ können globale Extrema von $f$ sowohl im Inneren (wo $f\'(x) = 0$) als auch an den Randpunkten $x = a$ oder $x = b$ auftreten.',
        true,
        `**Ansatz:** Globales Maximum/Minimum auf $[a, b]$: Vergleich von INNEREN Kandidaten und Randwerten.

**Rechnung:** Satz vom Maximum/Minimum: Eine stetige Funktion auf $[a, b]$ nimmt ihre Extrema an — entweder im Inneren bei $f'(x) = 0$ (notwendig differenzierbar) oder an den Randpunkten $a, b$.

**Probe:** $f(x) = x^2$ auf $[-2, 1]$: innerer Kandidat $x = 0$ mit $f(0) = 0$. Randwerte $f(-2) = 4$, $f(1) = 1$. Globales Max = $4$ am LINKEN Rand ✓ (nicht innen).

**Typischer Fehler:** Nur die inneren Kandidaten ($f' = 0$) prüfen und die Randwerte vergessen. Auf beschränkten Intervallen liegen die globalen Extrema oft am Rand.`,
        [
          'Wo kann ein globales Extremum auf $[a, b]$ liegen?',
          'Innere Kandidaten (Notwendige Bedingung) UND Randwerte vergleichen.',
          'Manchmal liegt das globale Max nur am Rand — kein innerer Kandidat ist erforderlich.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['rand-extrema'] },
      ),
      // Zeile 22: apply-guided · multiple-choice · uses=[rand-extrema]
      mc(
        'Um das globale Maximum von $f$ auf einem abgeschlossenen Intervall $[a, b]$ zu bestimmen, vergleicht man:',
        [
          'Die Funktionswerte an ALLEN inneren Extremum-Kandidaten ($f\'(x) = 0$) UND die Randwerte $f(a)$ und $f(b)$.',
          'Nur die inneren Kandidaten (wo $f\'(x) = 0$).',
          'Nur die Randwerte $f(a)$ und $f(b)$.',
          'Nur die Werte von $f\'\'$ an den inneren Kandidaten.',
        ],
        0,
        `**Ansatz:** Standardverfahren für globale Extrema auf $[a, b]$.

**Rechnung:** Vier Schritte:
1. Innere Kandidaten: $x_0 \\in (a, b)$ mit $f'(x_0) = 0$
2. Funktionswerte berechnen: $f(x_0)$ für alle Kandidaten
3. Randwerte berechnen: $f(a)$, $f(b)$
4. Maximum/Minimum aus der gesamten Werte-Sammlung wählen

**Probe:** Beispiel $f(x) = x^2$ auf $[-2, 1]$: innerer Kandidat $x = 0$ mit $f(0) = 0$, Randwerte $f(-2) = 4$, $f(1) = 1$. Max = $\\max(0, 4, 1) = 4$, am Rand $x = -2$ ✓.

**Typischer Fehler:** Die Randpunkte vergessen — dann übersieht man möglicherweise das wahre Maximum.`,
        [
          'Welche möglichen Stellen für globale Extrema gibt es?',
          'Innere Kandidaten UND Randpunkte zusammen.',
          'Nur Vergleich aller Werte liefert das globale Extremum.',
        ],
        {
          1: 'Wenn nur die inneren Kandidaten betrachtet werden, kann das globale Extremum übersehen werden. Beispiel: $f(x) = x$ auf $[0, 1]$ hat keinen inneren Kandidaten ($f\'(x) = 1 \\neq 0$), aber die Extrema sind an den Rändern.',
          2: 'Nur die Randwerte zu betrachten kann ebenfalls Extrema übersehen. Beispiel: $f(x) = -x^2$ auf $[-1, 1]$ hat ein Maximum INNEN bei $x = 0$ mit $f(0) = 0$, größer als die Randwerte $f(\\pm 1) = -1$.',
          3: '$f\'\'$ klassifiziert die Art (Min/Max) der inneren Kandidaten, beantwortet aber nicht die Frage nach dem GLOBALEN Extremum. Dafür braucht man die Funktionswerte selbst.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['rand-extrema', 'fprime-null'] },
      ),
      // Zeile 23: apply-independent · number-input · uses=[rand-extrema]
      ni(
        'Bestimme das globale Maximum von $f(x) = x^2 - 4 x$ auf dem Intervall $[0, 3]$.',
        0,
        0,
        '',
        `**Ansatz:** Innere Kandidaten + Randwerte vergleichen.

**Rechnung:**
- Innerer Kandidat: $f'(x) = 2 x - 4 = 0 \\Rightarrow x = 2 \\in (0, 3)$ ✓. $f(2) = 4 - 8 = -4$.
- Randwerte: $f(0) = 0$, $f(3) = 9 - 12 = -3$.
- Vergleich: $\\{-4, 0, -3\\}$. Maximum = $\\max = 0$ (am linken Rand $x = 0$).

**Probe:** $f$ ist nach oben geöffnete Parabel mit Scheitel bei $x = 2$ (Minimum). Auf $[0, 3]$ liegt das Maximum am Rand, der weiter vom Scheitel entfernt ist — hier $x = 0$ (Abstand $2$) gegenüber $x = 3$ (Abstand $1$). $f(0) > f(3)$ ✓.

**Typischer Fehler:** Den Wert $f(2) = -4$ als Maximum nehmen (ist aber MINIMUM). Oder nur $f'(x) = 0$ lösen, ohne Randwerte zu vergleichen.`,
        [
          'Drei Kandidaten: $x = 0$, $x = 2$, $x = 3$.',
          'Funktionswerte: $f(0) = 0$, $f(2) = -4$, $f(3) = -3$.',
          'Maximum = größter der drei Werte.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['rand-extrema', 'fprime-null'] },
      ),
      // Zeile 24: error-analysis · multiple-choice · uses=[rand-extrema]
      mc(
        'Anna soll das globale Maximum von $f(x) = x^2 - 4 x$ auf dem Intervall $[-1, 1]$ bestimmen. Sie löst $f\'(x) = 2 x - 4 = 0 \\Rightarrow x = 2$ und sagt: „Kein Maximum existiert, weil $x = 2$ außerhalb des Intervalls liegt." Was ist ihr Fehler?',
        [
          'Sie hat die Randextrema vergessen. Am linken Rand $x = -1$ ist $f(-1) = 1 + 4 = 5$ das globale Maximum — auch ohne inneren Kandidat existiert es immer (Satz vom Max/Min für stetige Funktionen auf $[a, b]$).',
          '$x = 2$ liegt tatsächlich im Intervall $[-1, 1]$.',
          '$f\'(x) = 2 x - 4$ ist falsch.',
          'Auf beschränkten Intervallen gibt es nie Maxima.',
        ],
        0,
        `**Ansatz:** Stetige Funktion auf abgeschlossenem Intervall hat IMMER Maximum und Minimum (Satz von Weierstraß). Wenn kein innerer Kandidat existiert, dann liegen sie an den Rändern.

**Rechnung:** Annas innerer Kandidat $x = 2$ liegt korrekt außerhalb von $[-1, 1]$ — aber das heißt nicht, dass es kein Maximum gibt! Vergleich der Randwerte: $f(-1) = 1 + 4 = 5$, $f(1) = 1 - 4 = -3$. Globales Maximum = $f(-1) = 5$.

**Probe:** $f(x) = x^2 - 4x$ ist auf $[-1, 1]$ überall fallend (Scheitel bei $x = 2$, also rechts vom Intervall — auf $[-1, 1]$ kommt die Funktion von links absteigend). Daher liegt das Max links: $f(-1) = 5$.

**Typischer Fehler:** Wenn der innere Kandidat außerhalb des Intervalls liegt, „aufgeben" statt die Randwerte zu prüfen.`,
        [
          'Existiert nach dem Satz von Weierstraß immer ein Max auf $[a, b]$?',
          'Wo könnte das Max liegen, wenn kein innerer Kandidat im Intervall ist?',
          'Berechne $f(-1)$ und $f(1)$ und vergleiche.',
        ],
        {
          1: '$x = 2$ liegt AUSSERHALB von $[-1, 1]$ — das Intervall reicht nur bis $1$. Annas Beobachtung ist richtig; ihr Fehler liegt in der Schlussfolgerung daraus.',
          2: '$(x^2 - 4 x)\' = 2 x - 4$ ist korrekt. Annas Berechnung der Ableitung stimmt — sie übersieht nur die Randextrema-Möglichkeit.',
          3: 'Doch — der Satz von Weierstraß garantiert auf jedem abgeschlossenen, beschränkten Intervall die Existenz von Max und Min für stetige Funktionen.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['rand-extrema'] },
      ),
      // Zeile 25: transfer · number-input · uses=[rand-extrema]
      ni(
        'Bestimme das globale MINIMUM von $f(x) = x^3 - 6 x^2 + 9 x$ auf dem Intervall $[0, 4]$.',
        0,
        0,
        '',
        `**Ansatz:** Innere Kandidaten + Randwerte. Mehrere innere Kandidaten möglich.

**Rechnung:**
- $f'(x) = 3 x^2 - 12 x + 9 = 3(x - 1)(x - 3) = 0 \\Rightarrow x = 1, 3$ (beide im Intervall)
- $f''(x) = 6 x - 12$: $f''(1) = -6 < 0$ → Max bei $1$, $f''(3) = 6 > 0$ → Min bei $3$
- Werte: $f(0) = 0$, $f(1) = 1 - 6 + 9 = 4$, $f(3) = 27 - 54 + 27 = 0$, $f(4) = 64 - 96 + 36 = 4$
- Minimum: $\\min(0, 4, 0, 4) = 0$ (am Rand $x = 0$ UND beim inneren Minimum $x = 3$)

**Probe:** Werte konsistent: globales Min = $0$, wird sowohl bei $x = 0$ als auch bei $x = 3$ angenommen.

**Typischer Fehler:** Nur die innerern Werte vergleichen — dann gibt man $f(3) = 0$ an und übersieht, dass auch $f(0) = 0$ denselben Wert hat. Das Ergebnis stimmt zwar, aber die Vollständigkeit der Argumentation fehlt.`,
        [
          'Vier Kandidaten: $x = 0, 1, 3, 4$.',
          'Funktionswerte: $0, 4, 0, 4$.',
          'Min = kleinster Wert.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['rand-extrema', 'fprime-null', 'hin-min-max'] },
      ),
    ],

    // [5] Sattelpunkt
    5: [
      // Zeile 26: recognize · true-false · uses=[sattel-1-5]
      tf(
        'Bei einem Sattelpunkt gilt $f\'(x_0) = 0$ UND $f\'\'(x_0) = 0$, der Graph hat dort eine WAAGERECHTE Tangente, aber KEIN Extremum — weil $f\'$ kein Vorzeichen wechselt. Beispiel: $f(x) = x^3$ bei $x_0 = 0$.',
        true,
        `**Ansatz:** Sattelpunkt = Wendepunkt MIT waagerechter Tangente (Terrassenpunkt). Sowohl $f' = 0$ als auch $f'' = 0$, aber kein Vorzeichenwechsel von $f'$.

**Rechnung:** Für $f(x) = x^3$: $f'(x) = 3 x^2$, $f'(0) = 0$ ✓. $f''(x) = 6 x$, $f''(0) = 0$ ✓. VZW von $f'$? $f'(x) = 3 x^2 \\geq 0$ für alle $x$ — KEIN VZW ⇒ Sattelpunkt.

**Probe:** $f(-0{,}1) = -0{,}001$, $f(0) = 0$, $f(0{,}1) = 0{,}001$ — streng monoton wachsend durch den Punkt $(0,0)$, kein Tal/Berg ✓.

**Typischer Fehler:** Sattelpunkt mit Extremum verwechseln, weil beide bei $f'(x_0) = 0$ auftreten. Unterscheidung: VZW vorhanden = Extremum, kein VZW = Sattel.`,
        [
          'Welche zwei Bedingungen müssen für einen Sattelpunkt gelten?',
          '$f\'(x_0) = 0$ UND $f\'\'(x_0) = 0$.',
          'Zusätzlich: $f\'$ wechselt KEIN Vorzeichen — sonst Extremum.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['sattel-1-5', 'fprime-null', 'f2-null-vzw'] },
      ),
      // Zeile 27: apply-guided · multiple-choice · uses=[sattel-1-5]
      mc(
        'Welche Funktion hat bei $x_0 = 0$ einen Sattelpunkt?',
        [
          '$f(x) = x^3$',
          '$f(x) = x^2$',
          '$f(x) = x$',
          '$f(x) = |x|$',
        ],
        0,
        `**Ansatz:** Sattelpunkt verlangt $f'(0) = 0$ UND $f''(0) = 0$ UND keinen VZW von $f'$ bei $0$.

**Rechnung:**
- $f(x) = x^3$: $f'(0) = 0$, $f''(0) = 0$, $f' \\geq 0$ überall — KEIN VZW ⇒ Sattelpunkt ✓
- $f(x) = x^2$: $f'(0) = 0$, ABER $f''(0) = 2 > 0$ ⇒ Minimum, kein Sattel
- $f(x) = x$: $f'(0) = 1 \\neq 0$ — nicht einmal Extremum-Kandidat
- $f(x) = |x|$: bei $x = 0$ NICHT differenzierbar (Knick) — Sattel-Begriff nicht anwendbar

**Probe:** Bei $x^3$ ist $x = 0$ ein klassischer Sattelpunkt: waagerechte Tangente, aber Funktion läuft glatt durch — kein Tal, kein Berg.

**Typischer Fehler:** $x^2$ als Sattel diagnostizieren, weil sie eine waagerechte Tangente bei $0$ hat — aber $x^2$ hat dort ein klares Minimum.`,
        [
          'Welche Funktion erfüllt $f\'(0) = 0$ UND $f\'\'(0) = 0$?',
          'Bei $x^3$ sind beide null. Bei $x^2$ ist $f\'\'(0) = 2 \\neq 0$.',
          'Bei $|x|$ ist $f$ nicht differenzierbar bei $0$.',
        ],
        {
          1: '$f(x) = x^2$ hat bei $x = 0$ ein lokales Minimum (Scheitel der nach oben offenen Parabel) — $f\'\'(0) = 2 > 0$ klassifiziert es als Min, nicht Sattel.',
          2: '$f(x) = x$ hat $f\'(x) = 1$ überall — nirgendwo waagerechte Tangente. Damit auch kein Sattelpunkt (und kein Extremum-Kandidat).',
          3: '$f(x) = |x|$ ist bei $x = 0$ nicht differenzierbar (Knick). Sattelpunkt-Begriff verlangt Differenzierbarkeit (sogar $f\'\' = 0$), passt hier nicht.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['sattel-1-5'] },
      ),
      // Zeile 28: apply-independent · multiple-choice · uses=[sattel-1-5]
      mc(
        'Welcher Stellentyp liegt bei $f(x) = x^5$ in $x_0 = 0$ vor?',
        [
          'Sattelpunkt (höhere ungerade Ableitung als erste nicht-null: $f^{(5)}(0) = 120 \\neq 0$)',
          'Lokales Minimum',
          'Lokales Maximum',
          'Wendepunkt mit nicht-waagerechter Tangente',
        ],
        0,
        `**Ansatz:** Wenn $f'(x_0) = 0 = f''(x_0)$, höhere Ableitungen bemühen. Die erste nicht-null Ableitung $f^{(n)}(x_0)$ entscheidet: $n$ gerade ⇒ Extremum, $n$ ungerade ⇒ Sattelpunkt.

**Rechnung:** $f(x) = x^5$. $f'(x) = 5 x^4$, $f'(0) = 0$. $f''(x) = 20 x^3$, $f''(0) = 0$. $f'''(x) = 60 x^2$, $f'''(0) = 0$. $f^{(4)}(x) = 120 x$, $f^{(4)}(0) = 0$. $f^{(5)}(x) = 120 \\neq 0$. Erste nicht-null Ableitung ist die 5. (UNGERADE) → Sattelpunkt.

**Probe:** $f(x) = x^5$ ist monoton wachsend ($x < 0 \\Rightarrow f < 0$, $x > 0 \\Rightarrow f > 0$, $f(0) = 0$). Kein Extremum, sondern Sattel mit waagerechter Tangente bei $0$.

**Typischer Fehler:** Bei verschwindenden höheren Ableitungen vorschnell „kein Extremum" oder „Wendepunkt" sagen, ohne die ungerade/gerade-Unterscheidung zu beachten.`,
        [
          'Welche Ableitungen sind bei $f(x) = x^5$ in $x = 0$ alle null?',
          'Was ist die erste nicht-null Ableitung — und welcher Ordnung?',
          'Ungerade Ordnung ⇒ Sattelpunkt; gerade Ordnung ⇒ Extremum.',
        ],
        {
          1: 'Für ein lokales Minimum müsste die erste nicht-null höhere Ableitung GERADE Ordnung mit positivem Vorzeichen sein. Hier ist sie 5. (ungerade) — also kein Min.',
          2: 'Maximum verlangt gerade Ordnung mit negativem Vorzeichen. 5. Ordnung ist ungerade — kein Max.',
          3: 'Bei „nicht-waagerechter Tangente"-Wendepunkt wäre $f\'(x_0) \\neq 0$. Hier ist $f\'(0) = 0$ aber — die Tangente IST waagerecht. Der spezielle Fall heißt Sattelpunkt (oder Terrassenpunkt).',
        },
        { stage: 'apply-independent', subGoal: 5, uses: ['sattel-1-5'] },
      ),
      // Zeile 29: error-analysis · multiple-choice · uses=[sattel-1-5]
      mc(
        'Tom rechnet: bei $f(x) = x^3$ ist $f\'(0) = 0$, also liegt bei $x = 0$ ein lokales Minimum. Was ist sein Fehler?',
        [
          '$f\'(x_0) = 0$ allein ist NUR notwendig, nicht hinreichend. Bei $f(x) = x^3$ wechselt $f\'(x) = 3 x^2$ KEIN Vorzeichen — es liegt ein Sattelpunkt vor, kein Extremum.',
          'Er hätte zuerst die Nullstellen suchen müssen.',
          '$f\'(0) = 0$ stimmt nicht — bei $f(x) = x^3$ ist $f\'(0) = 1$.',
          'Bei Polynomen dritten Grades sind alle Stellen Minima.',
        ],
        0,
        `**Ansatz:** Tom verwechselt notwendige mit hinreichender Bedingung. Bei $x^3$ ist die notwendige Bedingung erfüllt, aber die hinreichende NICHT.

**Rechnung:** Korrekt: $f'(x) = 3 x^2 \\geq 0$ für alle $x$ — kein Vorzeichenwechsel. Damit ist $x = 0$ KEIN Extremum, sondern Sattelpunkt (waagerechte Tangente, Funktion läuft glatt durch).

**Probe:** Bei einem Minimum wäre $f(x) > f(0) = 0$ für $x \\neq 0$ in einer Umgebung. Aber $f(-0{,}1) = -0{,}001 < 0 = f(0)$ — also gerade KEIN Minimum.

**Typischer Fehler:** Genau dieser — die notwendige Bedingung mit der hinreichenden gleichsetzen. Hilft: zusätzlich Vorzeichenwechsel oder höhere Ableitungen prüfen.`,
        [
          'Was bedeutet „notwendige Bedingung" konkret bei Extrema?',
          'Wechselt $f\' = 3 x^2$ bei $x = 0$ das Vorzeichen?',
          'Ohne Vorzeichenwechsel kein Extremum — sondern was?',
        ],
        {
          1: 'Nullstellen von $f$ ($f = 0$) haben mit Extrema ($f\' = 0$) erst einmal nichts zu tun. Toms Fehler ist nicht das Vergessen von Nullstellen, sondern die Fehl-Diagnose des Sattels.',
          2: '$f\'(x) = 3 x^2$, $f\'(0) = 3 \\cdot 0 = 0$ ✓. Toms Berechnung ist korrekt — der Fehler liegt in der Schlussfolgerung.',
          3: 'Polynome dritten Grades können Min, Max, Sattel ODER überhaupt kein Extremum haben — je nach Koeffizienten. Diese pauschale Aussage ist falsch.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['sattel-1-5', 'fprime-null'] },
      ),
      // Zeile 30: transfer · matching · uses=[sattel-1-5, fprime-null]
      matching(
        'Ordne jeder Stelle den richtigen Typ zu (basierend auf $f\'(x_0)$ und $f\'\'(x_0)$ in Kombination mit VZW-Verhalten).',
        [
          { left: '$f\'(x_0) = 0$ und $f\'\'(x_0) > 0$', right: 'lokales Minimum' },
          { left: '$f\'(x_0) = 0$ und $f\'\'(x_0) < 0$', right: 'lokales Maximum' },
          { left: '$f\'(x_0) \\neq 0$ und $f\'\'(x_0) = 0$ mit VZW von $f\'\'$', right: 'Wendepunkt (mit nicht-waagerechter Tangente)' },
          { left: '$f\'(x_0) = 0$ UND $f\'\'(x_0) = 0$ ohne VZW von $f\'$', right: 'Sattelpunkt (Terrassenpunkt — Wendepunkt mit waagerechter Tangente)' },
        ],
        `**Ansatz:** Klassifikation einer Stelle anhand des Vorzeichens von $f'$ und $f''$.

**Rechnung:**
- $f' = 0$, $f'' > 0$: klassisches Minimum (z.B. $x^2$ bei $0$)
- $f' = 0$, $f'' < 0$: klassisches Maximum (z.B. $-x^2$ bei $0$)
- $f' \\neq 0$, $f'' = 0$ mit VZW: Wendepunkt im Inneren der Kurve (z.B. $x^3 + x$ bei $0$)
- $f' = 0$, $f'' = 0$, KEIN VZW von $f'$: Sattelpunkt (z.B. $x^3$ bei $0$)

**Probe:** Vier verschiedene Funktionen exemplifizieren jeden Fall: $x^2$, $-x^2$, $x^3 + x$, $x^3$.

**Typischer Fehler:** Sattelpunkt mit Wendepunkt verwechseln — beide haben $f'' = 0$ mit VZW von $f''$, aber Sattelpunkt zusätzlich $f' = 0$ ohne VZW von $f'$.`,
        [
          '$f\'$ und $f\'\'$ in Kombination unterscheiden 4 Fälle.',
          'Vorzeichen von $f\'\'$ entscheidet Min vs. Max.',
          'Wendepunkt mit waagerechter Tangente = Sattelpunkt.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['sattel-1-5', 'fprime-null', 'hin-min-max', 'wendepunkt'] },
      ),
    ],
  },
}
