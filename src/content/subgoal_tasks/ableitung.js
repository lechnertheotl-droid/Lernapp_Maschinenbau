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
}
