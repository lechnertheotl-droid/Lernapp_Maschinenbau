// ═══════════════════════════════════════════════════════════════════════════
// Werkstoffkunde — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { 'lessonId': { subGoalIdx: [Aufgabe, …] } }
// Pedagogy-Tags `{ stage, subGoal, uses }` decken die Matrix-Card aus STATUS.md ab.

import { mc, ni, tf, matching, tag } from './_helpers'

export const werkstoffkundeSubGoalTasks = {
  // ─────────────────────────────────────────────────────────────────────────
  // werk-1-1 — Spannungs-Dehnungs-Diagramm
  //   SG 0: re-rm        · SG 1: rp02     · SG 2: e-modul
  //   SG 3: bruchdehnung · SG 4: sicherheit
  // ─────────────────────────────────────────────────────────────────────────
  'werk-1-1': {
    // ───────────── SG 0: $R_e$ vs. $R_m$ ─────────────
    0: [
      tag(
        tf(
          'Im Spannungs-Dehnungs-Diagramm liegt $R_e$ stets unterhalb (oder höchstens auf Höhe) von $R_m$.',
          true,
          `**Ansatz:** $R_e$ markiert das Ende des elastischen Bereichs; $R_m$ ist die höchste im Versuch erreichte Spannung.

**Rechnung:** Nach Erreichen von $R_e$ verfestigt sich der Werkstoff durch plastische Verformung — die Spannung steigt also weiter, bis sie bei $R_m$ ihr Maximum erreicht. Damit ist $R_e \\leq R_m$ immer erfüllt.

**Probe:** S235: $R_e \\approx 235\\,\\text{MPa}$, $R_m \\approx 360\\,\\text{MPa}$ — passt zu $R_e \\leq R_m$. ✓

**Typischer Fehler:** $R_m$ als Synonym für die Streckgrenze ansehen. $R_m$ kommt **nach** dem Fließen, $R_e$ markiert dessen Beginn.`,
          [
            'Was passiert nach Erreichen der Streckgrenze? Bricht das Material sofort?',
            'Plastische Verfestigung erhöht die Spannung weiter bis zum Maximum.',
            'Vergleiche die Position auf der σ-Achse: $R_e$ liegt links/tiefer als $R_m$.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['re-rm'] },
      ),
      tag(
        mc(
          'Eine Stahlprobe S235 zeigt $R_e = 235\\,\\text{MPa}$ und $R_m = 410\\,\\text{MPa}$. Welcher Wert markiert den Beginn der bleibenden (plastischen) Verformung?',
          [
            '$235\\,\\text{MPa}$ — die Streckgrenze',
            '$410\\,\\text{MPa}$ — die Zugfestigkeit',
            '$322{,}5\\,\\text{MPa}$ — der Mittelwert',
            '$0\\,\\text{MPa}$ — bereits unbelastet bleibt Verformung zurück',
          ],
          0,
          `**Ansatz:** Bleibende Verformung beginnt am Übergang elastisch → plastisch — also bei der Streckgrenze $R_e$.

**Rechnung:** $R_e = 235\\,\\text{MPa}$ ist genau dieser Übergang. Unterhalb federt die Probe vollständig zurück, oberhalb bleibt eine Restdehnung.

**Probe:** $\\sigma < 235\\,\\text{MPa}$ → $\\varepsilon_\\text{plast} = 0$; $\\sigma = 235\\,\\text{MPa}$ → erstes Fließen einsetzt. ✓

**Typischer Fehler:** $R_m$ als Übergang nehmen — das wäre erst bei 410 MPa, also weit nach Beginn der plastischen Verformung.`,
          [
            'Welcher der Buchstaben (e/m) steht für „Ende elastisch"?',
            'Streckgrenze = Beginn der bleibenden Verformung.',
            'Zugfestigkeit liegt deutlich höher und kommt erst nach dem Fließen.',
          ],
          {
            1: '$R_m = 410\\,\\text{MPa}$ ist die höchste Spannung im Zugversuch — sie liegt weit nach Beginn des Fließens. Verwechslung der Indizes ist häufig: $e$ wie „elastisch-Ende", $m$ wie „Maximum".',
            2: 'Der arithmetische Mittelwert hat keine physikalische Bedeutung — die Übergangsspannung wird durch die Werkstoffstruktur (Versetzungsbewegung) festgelegt, nicht durch eine Mittelung.',
            3: 'Bei $\\sigma = 0$ herrscht keine Belastung — natürlich auch keine Verformung. Erst ab $R_e$ bleibt nach Entlastung etwas zurück.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['re-rm'] },
      ),
      tag(
        mc(
          'Eine Stahlprobe wird im Zugversuch belastet, $R_e = 280\\,\\text{MPa}$, $R_m = 450\\,\\text{MPa}$. Bei welcher der folgenden Spannungen kehrt die Probe nach Entlastung **nicht** mehr in ihre Ausgangsform zurück?',
          [
            '$\\sigma = 350\\,\\text{MPa}$',
            '$\\sigma = 200\\,\\text{MPa}$',
            '$\\sigma = 0\\,\\text{MPa}$',
            '$\\sigma = 100\\,\\text{MPa}$',
          ],
          0,
          `**Ansatz:** Die Probe federt nur zurück, solange $\\sigma \\leq R_e = 280\\,\\text{MPa}$. Sobald $\\sigma > R_e$, bleibt eine plastische Verformung.

**Rechnung:** $350\\,\\text{MPa} > 280\\,\\text{MPa}$ → plastischer Bereich, keine vollständige Rückverformung. $200\\,\\text{MPa}$ und $100\\,\\text{MPa}$ liegen unterhalb $R_e$ → rein elastisch.

**Probe:** Entlastet man von $\\sigma = 350\\,\\text{MPa}$ aus, bleibt eine Restdehnung $\\varepsilon_\\text{plast} > 0$. Bei $\\sigma = 200\\,\\text{MPa}$ ist nach Entlastung $\\varepsilon = 0$. ✓

**Typischer Fehler:** Den Wert $R_e$ als „beim genauen Erreichen sofort plastisch" missverstehen — es muss $\\sigma > R_e$ gelten, damit nennenswert plastische Verformung zurückbleibt.`,
          [
            'Vergleiche jede Spannung mit $R_e = 280\\,\\text{MPa}$.',
            'Oberhalb $R_e$ → plastisch, unterhalb $R_e$ → elastisch.',
            'Welcher Wert ist der einzige, der $> 280\\,\\text{MPa}$ ist?',
          ],
          {
            1: '$200\\,\\text{MPa} < R_e$ — die Probe ist noch elastisch und federt vollständig zurück.',
            2: 'Ohne Belastung gibt es überhaupt keine Verformung — weder elastisch noch plastisch.',
            3: '$100\\,\\text{MPa}$ liegt deutlich unter $R_e = 280\\,\\text{MPa}$, also klar im elastischen Bereich.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['re-rm'] },
      ),
      tag(
        mc(
          'Auf einem Werkstattmesszettel für einen Baustahl steht: $R_e = 510\\,\\text{MPa}$, $R_m = 360\\,\\text{MPa}$. Wo liegt der Fehler?',
          [
            'Es muss $R_m \\geq R_e$ gelten — die Werte wurden vertauscht.',
            'Die Werte sind plausibel: $R_e$ darf größer sein als $R_m$.',
            '$R_e$ und $R_m$ müssen für Baustahl identisch sein.',
            '$R_e$ und $R_m$ haben unterschiedliche Einheiten und sind nicht vergleichbar.',
          ],
          0,
          `**Ansatz:** Per Definition ist $R_m$ das **Maximum** der Spannungs-Dehnungs-Kurve und $R_e$ liegt **vor** diesem Maximum (am Ende des elastischen Bereichs). Daraus folgt $R_e \\leq R_m$.

**Rechnung:** $510 > 360$ verletzt diese Ordnung — die beiden Werte wurden auf dem Zettel vertauscht. Ein typischer Baustahl hat $R_e \\approx 360\\,\\text{MPa}$ und $R_m \\approx 510\\,\\text{MPa}$ (z. B. S355).

**Probe:** Plausibilitäts-Check mit Tabellenwerten S355: $R_e \\approx 355\\,\\text{MPa}$, $R_m \\approx 510\\,\\text{MPa}$ — die getauschten Werte passen. ✓

**Typischer Fehler:** „$R_e$ wirkt höher, weil es zuerst kommt" — Reihenfolge im Diagramm hat nichts mit der Größe zu tun. $R_m$ kommt zeitlich später, ist aber höher.`,
          [
            'Welche Größe ist per Definition das Maximum der Kurve?',
            'Kann eine Streckgrenze über der Zugfestigkeit liegen?',
            'Vergleiche mit Tabellenwerten z. B. für S355.',
          ],
          {
            1: 'Per Definition ist $R_m$ das Maximum — kein Wert nach $R_e$ kann darüber liegen, also auch $R_e$ nicht.',
            2: 'Beide Größen werden in MPa = $\\text{N/mm}^2$ gemessen — die Einheiten sind identisch.',
            3: 'Bei einem realen Baustahl unterscheiden sich $R_e$ und $R_m$ durch die Verfestigung — sie sind nicht gleich.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['re-rm'] },
      ),
      tag(
        matching(
          'Ordne den Begriffen die korrekte Beschreibung im Spannungs-Dehnungs-Diagramm zu.',
          [
            { left: '$R_e$ — Streckgrenze',          right: 'Spannung am Übergang elastisch → plastisch' },
            { left: '$R_m$ — Zugfestigkeit',         right: 'höchste Spannung im Zugversuch (Kurvenmaximum)' },
            { left: 'Hookescher Bereich',            right: 'linear-elastische Anfangsgerade vor $R_e$' },
            { left: 'Einschnürbereich',              right: 'fallender Kurvenast nach $R_m$ bis zum Bruch' },
          ],
          `**Ansatz:** Im Spannungs-Dehnungs-Diagramm hat jede Phase einen klaren Bereich: erst die Hookesche Gerade, dann das Fließen ab $R_e$, dann Verfestigung bis zum Maximum $R_m$, danach Einschnürung bis zum Bruch.

**Rechnung:** Die Reihenfolge auf der Kurve lautet: Hooke-Gerade → $R_e$ → Verfestigung → $R_m$ → Einschnürung → Bruch.

**Probe:** Jede Beschreibung passt zu genau einem Begriff (eindeutige Zuordnung). ✓

**Typischer Fehler:** „Einschnürbereich = vor $R_m$" — die Einschnürung beginnt erst **nach** dem Maximum, weil dort die Querschnittsverkleinerung dominiert.`,
          [
            'Sortiere die Bereiche in der Reihenfolge, in der die Probe sie durchläuft.',
            '$R_e$ ist der Punkt, an dem die Hooke-Gerade endet.',
            'Nach $R_m$ fällt die nominelle Spannung — das ist die Einschnürphase.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['re-rm'] },
      ),
    ],

    // ───────────── SG 1: $R_{p0,2}$ — 0,2-%-Dehngrenze ─────────────
    1: [
      tag(
        tf(
          'Die 0,2-%-Dehngrenze $R_{p0{,}2}$ wird als Ersatz-Kennwert für $R_e$ verwendet, wenn ein Werkstoff (z. B. Aluminium) keine ausgeprägte Streckgrenze zeigt.',
          true,
          `**Ansatz:** Bei manchen Werkstoffen geht die Spannungs-Dehnungs-Kurve fließend in den plastischen Bereich über — ohne deutlichen Knick. Eine Streckgrenze $R_e$ ist dann nicht eindeutig ablesbar.

**Rechnung:** Definitionsgemäß wird $R_{p0{,}2}$ als die Spannung festgelegt, bei der nach Entlastung eine **bleibende** Dehnung von $0{,}2\\,\\%$ verbleibt. Konstruktion: Parallele zur Hookeschen Geraden im Abstand $\\varepsilon = 0{,}002$.

**Probe:** Aluminium-Legierungen, austenitische Edelstähle, Kupferlegierungen — alle ohne klares $R_e$, alle mit $R_{p0{,}2}$ in der Werkstoffnorm. ✓

**Typischer Fehler:** $R_{p0{,}2}$ und $R_e$ als identisch ansehen. Beide sind Fließgrenzen, aber für unterschiedliche Werkstoffklassen.`,
          [
            'Welche Werkstoffe haben eine ausgeprägte Streckgrenze, welche nicht?',
            'Wofür braucht man eine Ersatzdefinition?',
            'Aluminium hat keinen Knick in der Kurve — ein anderer Wert muss übernehmen.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['rp02'] },
      ),
      tag(
        mc(
          'Welcher Kennwert wird im Spannungs-Dehnungs-Diagramm einer Aluminiumlegierung anstelle von $R_e$ verwendet?',
          [
            '$R_{p0{,}2}$ — Spannung bei $0{,}2\\,\\%$ bleibender Dehnung',
            '$R_m$ — die Zugfestigkeit',
            '$E$ — der Elastizitätsmodul',
            '$A$ — die Bruchdehnung',
          ],
          0,
          `**Ansatz:** Aluminium hat keinen markanten Fließknick. Die Norm legt deshalb $R_{p0{,}2}$ als Ersatz-Fließgrenze fest.

**Rechnung:** Konstruktiv: Parallele zur Hookeschen Geraden bei $\\varepsilon = 0{,}002$ ($= 0{,}2\\,\\%$). Schnittpunkt mit der Kurve = $R_{p0{,}2}$.

**Probe:** Werkstoffdatenblatt einer AlMgSi-Legierung listet $R_{p0{,}2}$ in MPa, kein $R_e$. ✓

**Typischer Fehler:** $R_m$ als Ersatz nehmen — $R_m$ ist die Zugfestigkeit (Maximum), nicht die Fließgrenze.`,
          [
            'Welche Größe markiert üblicherweise das Ende des elastischen Bereichs?',
            'Wenn diese Größe nicht eindeutig ist — wie wird sie ersetzt?',
            'Der Index „p0,2" steht für „plastisch 0,2 %".',
          ],
          {
            1: '$R_m$ ist die höchste Spannung im Versuch — sie liegt weit nach dem Beginn des Fließens und ersetzt nicht die Streckgrenze.',
            2: '$E$ ist die Steigung im elastischen Bereich (eine andere Größe), keine Spannung an einer Fließ-Grenze.',
            3: '$A$ ist die Bruchdehnung am Ende des Versuchs — sie markiert den Bruch, nicht den Fließbeginn.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['rp02'] },
      ),
      tag(
        mc(
          'Wie wird $R_{p0{,}2}$ grafisch im Spannungs-Dehnungs-Diagramm konstruiert?',
          [
            'Parallele zur Hookeschen Geraden bei $\\varepsilon = 0{,}2\\,\\%$ einzeichnen — Schnittpunkt mit der Kurve gibt $R_{p0{,}2}$.',
            'Senkrechte bei $\\varepsilon = 0{,}2\\,\\%$ — Schnittpunkt mit der Kurve gibt direkt $R_{p0{,}2}$.',
            'Tangente an das Maximum der Kurve, dann Schnittpunkt mit $\\varepsilon = 0{,}2\\,\\%$.',
            'Mittelwert aus $R_e$ und $R_m$ bei $\\varepsilon = 0{,}2\\,\\%$.',
          ],
          0,
          `**Ansatz:** $R_{p0{,}2}$ ist die Spannung, bei der nach Entlastung **bleibende** $0{,}2\\,\\%$ Dehnung übrigbleiben. Der elastische Anteil wird durch die parallele Konstruktion automatisch abgezogen.

**Rechnung:** Hookesche Gerade hat Steigung $E$. Eine zu ihr parallele Gerade durch $\\varepsilon = 0{,}002$ schneidet die Spannungs-Dehnungs-Kurve dort, wo $\\varepsilon_\\text{plast} = 0{,}002$ — exakt die definierte 0,2-%-Dehngrenze.

**Probe:** Die Konstruktion liefert für AlMgSi typische Werte um $R_{p0{,}2} \\approx 200$–$250\\,\\text{MPa}$ — passt zu Werkstoffnormen. ✓

**Typischer Fehler:** Senkrechte statt Parallele zeichnen — dann zählt man die elastische Dehnung mit, der Wert ist zu hoch und entspricht nicht $0{,}2\\,\\%$ **bleibender** Dehnung.`,
          [
            'Was unterscheidet bleibende von gesamter Dehnung?',
            'Wie wird der elastische Anteil grafisch abgezogen?',
            'Eine Parallele zur Anfangsgeraden „verschiebt" die Achse um $0{,}002$ nach rechts.',
          ],
          {
            1: 'Eine reine Senkrechte zählt die elastische Dehnung mit — der Wert wäre größer als $R_{p0{,}2}$ und nicht normgerecht.',
            2: 'Die Tangente an das Maximum hat keine definierte physikalische Bedeutung für die 0,2-%-Grenze.',
            3: 'Aluminium hat oft kein definiertes $R_e$ — ein Mittelwert mit nicht existierender Größe geht nicht.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['rp02'] },
      ),
      tag(
        mc(
          'Eine Studierende behauptet: „$R_{p0{,}2}$ ist die Spannung, bei der die **Gesamtdehnung** genau $0{,}2\\,\\%$ beträgt." Wo liegt der Fehler?',
          [
            'Die $0{,}2\\,\\%$ beziehen sich auf die **bleibende** (plastische) Dehnung nach Entlastung — der elastische Anteil wird abgezogen.',
            'Die $0{,}2\\,\\%$ beziehen sich nur auf die rein **elastische** Dehnung.',
            'Die Aussage stimmt — bleibende und Gesamtdehnung sind hier dasselbe.',
            'Es sind nicht $0{,}2\\,\\%$, sondern $2\\,\\%$ Gesamtdehnung.',
          ],
          0,
          `**Ansatz:** Definitionsgemäß ist $R_{p0{,}2}$ die Spannung, bei der **nach Entlastung** $0{,}2\\,\\%$ Dehnung **zurückbleiben**. Die Gesamtdehnung im belasteten Zustand ist größer (sie enthält zusätzlich den elastischen Anteil).

**Rechnung:** Bei $R_{p0{,}2} \\approx 250\\,\\text{MPa}$ und $E \\approx 70\\,000\\,\\text{MPa}$ wäre die elastische Dehnung $\\varepsilon_\\text{el} = 250/70000 \\approx 0{,}36\\,\\%$. Gesamt: $\\varepsilon_\\text{ges} \\approx 0{,}36 + 0{,}2 = 0{,}56\\,\\%$ — also klar **mehr** als $0{,}2\\,\\%$.

**Probe:** Die Konstruktion über die parallele Gerade entzieht der Kurve genau den elastischen Anteil — das Resultat ist bleibende Dehnung, nicht Gesamtdehnung. ✓

**Typischer Fehler:** Nicht zwischen $\\varepsilon_\\text{el}$, $\\varepsilon_\\text{plast}$ und $\\varepsilon_\\text{ges} = \\varepsilon_\\text{el} + \\varepsilon_\\text{plast}$ unterscheiden.`,
          [
            'Bleibende vs. Gesamtdehnung — was ist der Unterschied?',
            'Warum konstruiert man $R_{p0{,}2}$ über eine Parallele, nicht über eine Senkrechte?',
            'Welcher Anteil verschwindet nach Entlastung — elastisch oder plastisch?',
          ],
          {
            1: 'Genau das Gegenteil: die elastische Dehnung wird gerade NICHT mitgerechnet, weil sie nach Entlastung verschwindet.',
            2: 'Die Aussage des Studierenden vermischt zwei verschiedene Größen — sie sind nicht identisch.',
            3: 'Die Norm definiert exakt $0{,}2\\,\\%$, nicht $2\\,\\%$ — das wäre eine andere Dehngrenze ($R_{p2}$).',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['rp02'] },
      ),
      tag(
        mc(
          'Welche Werkstoffe haben **typischerweise** keine ausgeprägte Streckgrenze und werden über $R_{p0{,}2}$ charakterisiert?',
          [
            'Aluminiumlegierungen, Kupferlegierungen, austenitische Edelstähle',
            'Baustahl S235 und S355 (ferritisch-perlitisch)',
            'Reines $\\alpha$-Eisen',
            'Alle Stähle, unabhängig vom Gefüge',
          ],
          0,
          `**Ansatz:** Eine ausgeprägte Streckgrenze („Lüders-Effekt") tritt bei kfz-Aluminium **nicht** auf, ebenso wenig bei austenitischen Edelstählen oder Cu-Legierungen. Bei diesen Werkstoffen ist $R_{p0{,}2}$ Standard.

**Rechnung:** Die Streckgrenze ist eine Folge der freien Versetzungsbewegung und der Wechselwirkung mit Kohlenstoff-Atomen. In Aluminium und austenitischen Edelstählen fehlt diese typische C-C-Wechselwirkung — keine Lüders-Bänder, keine Knick.

**Probe:** Datenblätter: AlMgSi → $R_{p0{,}2}$, Cu-Sn → $R_{p0{,}2}$, X5CrNi18-10 → $R_{p0{,}2}$. ✓

**Typischer Fehler:** Annehmen, alle Stähle hätten dieselbe Charakteristik. Tatsächlich hängt das Streck-Verhalten stark vom Gefüge ab.`,
          [
            'Welche Stahlsorten haben einen Knick im Spannungs-Dehnungs-Diagramm?',
            'Was unterscheidet austenitisches von ferritischem Gefüge?',
            'Aluminium ist generell weicher und hat keine Lüders-Bänder.',
          ],
          {
            1: 'Baustähle (S235, S355) sind das **klassische** Beispiel für eine ausgeprägte Streckgrenze — sie werden über $R_e$ charakterisiert.',
            2: 'Reines $\\alpha$-Eisen zeigt — wie Baustähle — eine Streckgrenze (durch Lüders-Effekt).',
            3: 'Austenitische Stähle (z. B. X5CrNi18-10) haben keine ausgeprägte Streckgrenze — die Aussage „alle Stähle gleich" stimmt also nicht.',
          },
        ),
        { stage: 'transfer', subGoal: 1, uses: ['rp02'] },
      ),
    ],

    // ───────────── SG 2: E-Modul ─────────────
    2: [
      tag(
        tf(
          'Der Elastizitätsmodul $E$ ist die Steigung der Spannungs-Dehnungs-Kurve im linearen (Hookeschen) Bereich.',
          true,
          `**Ansatz:** Im elastischen Anfangsbereich gilt $\\sigma = E \\cdot \\varepsilon$ (Hookesches Gesetz). $E$ ist damit das Verhältnis von Spannungs-Zuwachs zu Dehnungs-Zuwachs — also die Steigung der Geraden.

**Rechnung:** Steigung einer Geraden = $\\Delta y / \\Delta x = \\Delta\\sigma / \\Delta\\varepsilon = E$.

**Probe:** Stahl: $E \\approx 210\\,000\\,\\text{MPa}$, Aluminium: $E \\approx 70\\,000\\,\\text{MPa}$ — Stahlkurve steiler. ✓

**Typischer Fehler:** $E$ als Spannungswert (in MPa an einem Punkt) verwechseln. $E$ ist eine Steigung, kein einzelner Spannungswert.`,
          [
            'Was beschreibt eine Steigung in einem Diagramm?',
            'Welcher Buchstabe steht im Hookeschen Gesetz vor $\\varepsilon$?',
            'Vergleiche zwei Werkstoffe: weicher (Alu) und steifer (Stahl) — welche Kurve ist steiler?',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['e-modul'] },
      ),
      tag(
        mc(
          'Welche Formel beschreibt das Hookesche Gesetz für einachsigen Zug korrekt?',
          [
            '$\\sigma = E \\cdot \\varepsilon$',
            '$\\sigma = E / \\varepsilon$',
            '$\\varepsilon = E \\cdot \\sigma$',
            '$E = \\sigma + \\varepsilon$',
          ],
          0,
          `**Ansatz:** Linearer Zusammenhang Spannung ↔ Dehnung mit dem Proportionalitätsfaktor $E$.

**Rechnung:** Spannung $\\sigma$ wächst proportional zur Dehnung $\\varepsilon$: $\\sigma = E\\cdot\\varepsilon$. Dimensionscheck: $[E] = \\text{MPa}$, $[\\varepsilon]$ dimensionslos → $[\\sigma] = \\text{MPa}$ ✓.

**Probe:** Mit $E = 210\\,000\\,\\text{MPa}$, $\\varepsilon = 0{,}001$ folgt $\\sigma = 210\\,\\text{MPa}$ — realistischer Wert. ✓

**Typischer Fehler:** Verwechslung von Multiplikation und Division. $\\sigma/\\varepsilon = E$ ist äquivalent — aber niemals $\\sigma = E/\\varepsilon$.`,
          [
            'Spannung steigt **mit** der Dehnung, nicht umgekehrt.',
            'Welcher Faktor verbindet zwei proportionale Größen?',
            'Die Einheiten müssen passen: MPa = MPa · (dimensionslos).',
          ],
          {
            1: 'Bei $\\varepsilon \\to 0$ würde $\\sigma \\to \\infty$ — physikalisch unsinnig. Außerdem stimmen die Einheiten nicht.',
            2: 'Hier wären die beiden Seiten vertauscht — und die Einheit links wäre dimensionslos statt MPa.',
            3: 'Spannung und Dehnung haben unterschiedliche Einheiten — eine Summe ergibt keinen sinnvollen $E$-Wert.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['e-modul'] },
      ),
      tag(
        ni(
          'Eine Stahlprobe wird unter $\\sigma = 100\\,\\text{MPa}$ rein elastisch belastet und dehnt sich dabei um $\\varepsilon = 0{,}05\\,\\%$. Bestimme den Elastizitätsmodul $E$ in MPa.',
          200000,
          1000,
          'MPa',
          `**Ansatz:** Hooke umgeformt: $E = \\sigma / \\varepsilon$. Vorsicht: Prozent in dimensionslose Dehnung umrechnen.

**Rechnung:** $\\varepsilon = 0{,}05\\,\\% = 5 \\cdot 10^{-4} = 0{,}0005$. Damit $E = 100\\,\\text{MPa} / 0{,}0005 = 200\\,000\\,\\text{MPa}$.

**Probe:** Realistischer Wert für Stahl ($\\approx 210\\,000\\,\\text{MPa}$). ✓ Rückrechnung: $\\sigma = E \\cdot \\varepsilon = 200\\,000 \\cdot 0{,}0005 = 100\\,\\text{MPa}$ ✓.

**Typischer Fehler:** Prozent direkt einsetzen ($\\varepsilon = 0{,}05$) ergibt $E = 2000\\,\\text{MPa}$ — viel zu klein für Stahl, plausibel nur für Kunststoffe.`,
          [
            '$E = \\sigma / \\varepsilon$ — direkte Anwendung des Hooke-Gesetzes.',
            'Achte auf die Einheit: $0{,}05\\,\\%$ ist nicht $0{,}05$.',
            '$0{,}05\\,\\% = 0{,}05/100 = 0{,}0005$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['e-modul'] },
      ),
      tag(
        mc(
          'Ein Studierender berechnet aus $\\sigma = 50\\,\\text{MPa}$ und $\\varepsilon = 0{,}025\\,\\%$: $E = 50 / 0{,}025 = 2000\\,\\text{MPa}$. Wo liegt der Fehler?',
          [
            'Prozent nicht in dimensionslose Dehnung umgerechnet — korrekt: $\\varepsilon = 2{,}5 \\cdot 10^{-4}$ und damit $E = 200\\,000\\,\\text{MPa}$.',
            '$\\sigma$ und $\\varepsilon$ wurden vertauscht — der Quotient muss umgekehrt sein.',
            'Die Einheit der Spannung ist falsch — MPa hätten N/mm² werden müssen.',
            '$E$ kann mit dem Hookeschen Gesetz gar nicht berechnet werden — man braucht $R_m$.',
          ],
          0,
          `**Ansatz:** $E = \\sigma/\\varepsilon$ — aber $\\varepsilon$ in dimensionsloser Form, nicht in Prozent.

**Rechnung:** Korrekt: $\\varepsilon = 0{,}025\\,\\% = 2{,}5 \\cdot 10^{-4}$. Dann $E = 50\\,\\text{MPa} / 2{,}5 \\cdot 10^{-4} = 200\\,000\\,\\text{MPa}$. Der Studierende hat das Prozent-Zeichen ignoriert — sein Ergebnis ist um Faktor 100 zu klein.

**Probe:** $200\\,000\\,\\text{MPa}$ ist ein typischer Stahlwert. $2000\\,\\text{MPa}$ wäre eher ein weicher Kunststoff. ✓

**Typischer Fehler:** Genau dieses Vergessen der $/100$-Umrechnung — passiert oft, wenn man Prozent als „normale Zahl" behandelt.`,
          [
            'Was bedeutet $\\%$ rechnerisch?',
            '$0{,}025\\,\\%$ in dimensionsloser Form — wo ist das Komma?',
            'Vergleiche das Ergebnis mit Tabellenwerten für Stahl.',
          ],
          {
            1: 'Reihenfolge stimmt: $E=\\sigma/\\varepsilon$. Ein Vertauschen würde $E = 0{,}0005\\,\\text{MPa}^{-1}$ ergeben — sinnlose Einheit.',
            2: 'MPa = $\\text{N/mm}^2$ — beide Einheiten sind identisch und beide gültig.',
            3: 'Im rein elastischen Bereich reicht das Hookesche Gesetz vollständig aus; $R_m$ wird hier nicht gebraucht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['e-modul'] },
      ),
      tag(
        ni(
          'Eine Aluminiumstange ($E = 70\\,000\\,\\text{MPa}$) der Ausgangslänge $l_0 = 500\\,\\text{mm}$ wird mit $\\sigma = 140\\,\\text{MPa}$ rein elastisch belastet. Berechne die Längenänderung $\\Delta l$ in mm.',
          1.0,
          0.05,
          'mm',
          `**Ansatz:** Hooke umgestellt liefert die Dehnung $\\varepsilon = \\sigma / E$. Die Längenänderung folgt aus $\\Delta l = \\varepsilon \\cdot l_0$.

**Rechnung:** $\\varepsilon = 140\\,\\text{MPa} / 70\\,000\\,\\text{MPa} = 0{,}002 = 0{,}2\\,\\%$. Dann $\\Delta l = 0{,}002 \\cdot 500\\,\\text{mm} = 1{,}0\\,\\text{mm}$.

**Probe:** Rückrechnung: $\\sigma = E \\cdot \\Delta l / l_0 = 70\\,000 \\cdot 1/500 = 140\\,\\text{MPa}$ ✓.

**Typischer Fehler:** $\\Delta l = \\sigma \\cdot l_0 / E^2$ oder Einheiten-Wirrwarr. Nur sauber ableiten: erst $\\varepsilon$ aus Hooke, dann $\\Delta l = \\varepsilon \\cdot l_0$.`,
          [
            'Welche Größe verbindet $\\sigma$ und $E$ über das Hooke-Gesetz?',
            'Ist die Dehnung dimensionslos? Wie groß ist sie hier?',
            '$\\Delta l$ folgt aus $\\varepsilon \\cdot l_0$.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['e-modul'] },
      ),
    ],

    // ───────────── SG 3: Bruchdehnung $A$ ─────────────
    3: [
      tag(
        tf(
          'Die Bruchdehnung $A$ wird als prozentuale **bleibende** Längenänderung **nach** dem Bruch berechnet: $A = (l_u - l_0)/l_0 \\cdot 100\\,\\%$, wobei $l_u$ die zusammengefügte Messlänge nach dem Bruch ist.',
          true,
          `**Ansatz:** Die Bruchdehnung beschreibt, wie stark sich die Probe insgesamt plastisch verlängert hat. Gemessen wird **nach** dem Bruch durch Zusammenfügen der Bruchstücke.

**Rechnung:** Formel: $A = \\dfrac{l_u - l_0}{l_0} \\cdot 100\\,\\%$. $l_u$ wird gemessen, indem die Bruchstücke aneinandergelegt und die Messlänge erneut bestimmt wird.

**Probe:** Bei Baustahl S235: $l_0 = 50\\,\\text{mm}$, $l_u \\approx 62{,}5\\,\\text{mm}$ → $A = 25\\,\\%$ — passt zu Tabellenwerten. ✓

**Typischer Fehler:** $l_u$ als Länge **während** der Belastung (mit Einschnürung) annehmen oder auf $l_u$ statt $l_0$ beziehen.`,
          [
            'Wann wird $l_u$ gemessen — während des Versuchs oder danach?',
            'Welche Länge steht im Nenner der Formel?',
            'Was passiert mit der Probe nach dem Bruch — wie misst man sie?',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['bruchdehnung'] },
      ),
      tag(
        mc(
          'Welche Aussage charakterisiert einen **zähen** Werkstoff im Vergleich zu einem spröden?',
          [
            'Hohe Bruchdehnung $A$ (z. B. $\\geq 20\\,\\%$ wie bei Baustahl S235).',
            'Sehr niedrige Bruchdehnung (typisch $A < 1\\,\\%$).',
            'Bruchdehnung exakt gleich null.',
            'Bruchdehnung $A$ ist nicht messbar bei zähen Werkstoffen.',
          ],
          0,
          `**Ansatz:** Zähigkeit = Fähigkeit, vor dem Bruch viel plastische Verformung aufzunehmen. Hohe Bruchdehnung ⇔ zäh, niedrige Bruchdehnung ⇔ spröde.

**Rechnung:** Tabellenwerte: Baustahl S235: $A \\approx 25\\,\\%$. Gusseisen GG-25 (spröde): $A \\approx 0{,}5\\,\\%$. Klare Trennung.

**Probe:** Crash-Bauteile aus zähem Baustahl absorbieren Energie durch große plastische Dehnung — direkter Effekt von hoher Bruchdehnung. ✓

**Typischer Fehler:** Zähigkeit und Festigkeit verwechseln. Festigkeit = Spannungsniveau ($R_m$), Zähigkeit = Dehnung bei Bruch ($A$).`,
          [
            'Was unterscheidet zäh von spröde — die Spannung oder die Dehnung?',
            'Vergleiche: Stahl-Reißnagel verbiegt sich, Glas-Splitter brechen.',
            'Hohe Bruchdehnung ⇒ viel plastisches Fließen vor dem Bruch.',
          ],
          {
            1: 'Niedrige Bruchdehnung ist die Definition eines **spröden** Werkstoffs (z. B. Gusseisen), nicht eines zähen.',
            2: 'Auch spröde Werkstoffe haben eine kleine Bruchdehnung ($\\approx 0{,}5\\,\\%$ bei GG-25). Null wäre nur ein theoretisches Extrem.',
            3: 'Bruchdehnung ist im Standard-Zugversuch routinemäßig messbar — bei zähen Werkstoffen sogar besonders gut.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['bruchdehnung'] },
      ),
      tag(
        ni(
          'Eine Zugprobe hat die Ausgangsmesslänge $l_0 = 100\\,\\text{mm}$. Nach dem Bruch werden die Bruchstücke zusammengefügt und ergeben $l_u = 130\\,\\text{mm}$. Wie groß ist die Bruchdehnung $A$ in %?',
          30,
          0.5,
          '%',
          `**Ansatz:** Direktes Einsetzen in die Formel $A = (l_u - l_0)/l_0 \\cdot 100\\,\\%$.

**Rechnung:** $A = (130 - 100)/100 \\cdot 100\\,\\% = 30/100 \\cdot 100\\,\\% = 30\\,\\%$.

**Probe:** $l_u = l_0 \\cdot (1 + A/100) = 100 \\cdot 1{,}3 = 130\\,\\text{mm}$ ✓.

**Typischer Fehler:** Durch $l_u$ statt $l_0$ teilen ($30/130 \\cdot 100\\,\\% \\approx 23\\,\\%$). Bezugsgröße ist immer $l_0$.`,
          [
            'Welche Formel definiert die Bruchdehnung?',
            'Welcher Wert kommt in den Nenner — Ausgangs- oder Endlänge?',
            'Differenz im Zähler, Ausgangslänge im Nenner.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['bruchdehnung'] },
      ),
      tag(
        mc(
          'Ein Studierender rechnet für $l_0 = 80\\,\\text{mm}$ und $l_u = 96\\,\\text{mm}$: $A = (96 - 80)/96 \\cdot 100\\,\\% \\approx 16{,}67\\,\\%$. Wo liegt der Fehler?',
          [
            'Es muss durch $l_0$ (Ausgangslänge) geteilt werden, nicht durch $l_u$ — korrekt: $A = 16/80 \\cdot 100\\,\\% = 20\\,\\%$.',
            'Im Nenner muss die Summe $l_0 + l_u$ stehen.',
            'Die Differenz $(l_u - l_0)$ ist verkehrt — sie muss negativ sein.',
            'Bruchdehnung wird in Pascal angegeben, die Einheit $\\%$ ist falsch.',
          ],
          0,
          `**Ansatz:** Definitionsgemäß ist die Bezugsgröße die **Ausgangslänge** $l_0$, nicht die Endlänge $l_u$. Sonst würde die Bruchdehnung systematisch zu klein.

**Rechnung:** Korrekt: $A = (l_u - l_0)/l_0 \\cdot 100\\,\\% = 16/80 \\cdot 100\\,\\% = 20\\,\\%$. Der Studierende hat $16/96 \\approx 0{,}1667 = 16{,}67\\,\\%$ gerechnet.

**Probe:** $l_u/l_0 = 96/80 = 1{,}2$ → 20 % Verlängerung — passt zu $A = 20\\,\\%$. ✓

**Typischer Fehler:** Genau diese Verwechslung Nenner-Größe — analog zu Prozent-Aufgaben, bei denen „auf was bezogen?" geklärt werden muss.`,
          [
            'Lies die Formel sorgfältig: welche Länge steht im Nenner?',
            'Bezugsgröße = die Größe **vor** der Veränderung.',
            'Probe: $l_u = l_0 \\cdot (1 + A/100)$.',
          ],
          {
            1: 'Eine Summe als Nenner gibt es in der Formel nicht — das wäre ein anderer Kennwert (z. B. „relative" Größen in der Statistik).',
            2: '$l_u > l_0$, also positive Differenz — das passt zur Verlängerung der Probe im Zugversuch.',
            3: '$A$ ist dimensionslos und wird in % angegeben, nicht in Pa — Pascal ist eine Spannungs-Einheit.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['bruchdehnung'] },
      ),
      tag(
        mc(
          'Welche Werkstoffeigenschaft ist für die Konstruktion eines **crashabsorbierenden** Bauteils (z. B. Knautschzone im PKW) entscheidend?',
          [
            'Hohe Bruchdehnung $A$ — Energie wird durch große plastische Verformung aufgenommen.',
            'Niedrige Bruchdehnung — das Material soll möglichst spröde brechen.',
            'Hoher Elastizitätsmodul $E$ — das Material soll möglichst steif sein.',
            'Hohe Dichte — schweres Material absorbiert mehr Energie.',
          ],
          0,
          `**Ansatz:** Energieaufnahme im Crash $W = \\int F\\,\\text{d}s$ — proportional zum Verformungsweg. Lange Wege bedeuten viel plastische Dehnung — also hohe Bruchdehnung.

**Rechnung:** Crash-Stahl hat typischerweise $A \\geq 20\\,\\%$ und moderate Festigkeit, damit der Werkstoff über einen langen Weg fließt, ohne sofort zu brechen.

**Probe:** Reale Knautschzonen aus weichem, zähem Tiefzieh-Stahl ($A \\approx 30\\,\\%$). ✓

**Typischer Fehler:** „Festigkeit = Sicherheit" annehmen. Im Crash zählt Energieaufnahme = $\\sigma \\cdot \\varepsilon$ über den Verformungsweg, nicht maximale $\\sigma$ allein.`,
          [
            'Was passiert physikalisch im Crash — elastisch oder plastisch?',
            'Energieaufnahme = Kraft × Weg.',
            'Welche Kennzahl beschreibt den Verformungsweg vor dem Bruch?',
          ],
          {
            1: 'Spröder Bruch nimmt **kaum** Energie auf — ungeeignet für Crash-Anwendungen.',
            2: 'Ein hoher $E$-Modul macht das Material **steif**, nicht energieabsorbierend. Steife Bauteile sind oft Tabu in Knautschzonen.',
            3: 'Dichte allein ist für die Energieaufnahme im Crash irrelevant — sie beeinflusst die Trägheit, aber nicht die plastische Energieaufnahme pro Volumen.',
          },
        ),
        { stage: 'transfer', subGoal: 3, uses: ['bruchdehnung'] },
      ),
    ],

    // ───────────── SG 4: Sicherheitszahl ─────────────
    4: [
      tag(
        tf(
          'Bei einem zähen Werkstoff wird die zulässige Spannung $\\sigma_\\text{zul}$ üblicherweise gegen die Streckgrenze $R_e$ ausgelegt; bei einem spröden Werkstoff (kein klares $R_e$) gegen die Zugfestigkeit $R_m$.',
          true,
          `**Ansatz:** Zähe Werkstoffe versagen durch plastisches Fließen — kritisch ist deshalb $R_e$. Spröde Werkstoffe brechen ohne nennenswertes Fließen — kritisch ist $R_m$.

**Rechnung:** Sicherheitszahl: zäh $S = R_e/\\sigma_\\text{zul}$, spröde $S = R_m/\\sigma_\\text{zul}$. Auflösung: $\\sigma_\\text{zul} = R_e/S$ bzw. $R_m/S$.

**Probe:** S235 (zäh): Auslegung gegen $R_e = 235\\,\\text{MPa}$. GG-25 (spröde): Auslegung gegen $R_m \\approx 250\\,\\text{MPa}$ — beides Standard-Praxis. ✓

**Typischer Fehler:** Bei zähem Werkstoff $R_m$ als Auslegungsgrenze nehmen — dann tritt unter Last bereits plastische Verformung auf, obwohl die Sicherheit angeblich noch erfüllt ist.`,
          [
            'Was ist das **Versagenskriterium** bei einem zähen Werkstoff?',
            'Was ist es bei einem spröden?',
            'Welcher Kennwert markiert den Beginn des Fließens?',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['sicherheit'] },
      ),
      tag(
        mc(
          'Wie ist die Sicherheitszahl $S$ für einen zähen Werkstoff (mit Streckgrenze $R_e$) gegen plastische Verformung definiert?',
          [
            '$S = R_e / \\sigma_\\text{zul}$',
            '$S = \\sigma_\\text{zul} / R_e$',
            '$S = R_e \\cdot \\sigma_\\text{zul}$',
            '$S = R_e + \\sigma_\\text{zul}$',
          ],
          0,
          `**Ansatz:** Sicherheit = Verhältnis Versagensgrenze zu Betriebsspannung. Versagensgrenze für zähen Werkstoff ist $R_e$, also $S = R_e/\\sigma_\\text{zul}$.

**Rechnung:** Damit das Bauteil sicher ist, muss $\\sigma_\\text{zul} \\ll R_e$ sein, also $S > 1$ — typische Werte $S = 1{,}5$ bis $3$ je nach Anwendung.

**Probe:** Mit $R_e = 235\\,\\text{MPa}$ und $S = 1{,}5$: $\\sigma_\\text{zul} = R_e/S \\approx 157\\,\\text{MPa}$ — plausibel und sicher unter $R_e$. ✓

**Typischer Fehler:** $S$ als Kehrwert oder als Summe definieren. Sicherheit ist immer „wieviel Reserve habe ich?" → Quotient.`,
          [
            'Welche Größe muss größer als die Betriebsspannung sein?',
            'Verhältnis groß / klein → Quotient.',
            'Sicherheit „1,5" bedeutet: 50 % Reserve über die Betriebsspannung.',
          ],
          {
            1: 'Der Kehrwert ergäbe $S < 1$ für sichere Auslegung — physikalisch sinnlos. Standard: $S \\geq 1$.',
            2: 'Multiplikation hat keine sinnvolle Einheit ($\\text{MPa}^2$) und keine konstruktive Bedeutung.',
            3: 'Eine Summe zweier Spannungen liefert keine dimensionslose Sicherheitszahl.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['sicherheit'] },
      ),
      tag(
        ni(
          'Ein Bauteil aus Stahl S235 ($R_e = 235\\,\\text{MPa}$) soll mit einer Sicherheitszahl $S = 1{,}5$ gegen plastische Verformung ausgelegt werden. Berechne die zulässige Spannung $\\sigma_\\text{zul}$ in MPa (auf eine Nachkommastelle).',
          156.7,
          1,
          'MPa',
          `**Ansatz:** Aus $S = R_e / \\sigma_\\text{zul}$ folgt $\\sigma_\\text{zul} = R_e / S$.

**Rechnung:** $\\sigma_\\text{zul} = 235\\,\\text{MPa} / 1{,}5 = 156{,}\\overline{6}\\,\\text{MPa} \\approx 156{,}7\\,\\text{MPa}$.

**Probe:** Sicherheits-Check: $S = R_e/\\sigma_\\text{zul} = 235/156{,}67 = 1{,}5$ ✓. $\\sigma_\\text{zul} < R_e$ — keine plastische Verformung erwartet.

**Typischer Fehler:** Multiplizieren statt dividieren ($235 \\cdot 1{,}5 = 352{,}5\\,\\text{MPa}$) — dann liegt die zulässige Spannung weit über $R_e$, das Bauteil würde beim Betrieb fließen.`,
          [
            'Welche Operation verkleinert die Belastung gegenüber der Versagensgrenze?',
            'Stelle $S = R_e/\\sigma_\\text{zul}$ nach $\\sigma_\\text{zul}$ um.',
            'Sicherheit > 1 ⇒ zulässige Spannung < Streckgrenze.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['sicherheit'] },
      ),
      tag(
        mc(
          'Eine Studentin rechnet für einen spröden Werkstoff mit $R_m = 600\\,\\text{MPa}$ und $S = 3$: $\\sigma_\\text{zul} = R_m \\cdot S = 1800\\,\\text{MPa}$. Wo liegt der Fehler?',
          [
            'Sicherheit muss dividiert werden, nicht multipliziert — korrekt: $\\sigma_\\text{zul} = R_m / S = 200\\,\\text{MPa}$.',
            '$S$ ist immer kleiner als 1, deshalb ist das Ergebnis zu groß.',
            'Bei spröden Werkstoffen muss $R_e$ statt $R_m$ verwendet werden.',
            'Die Einheit MPa ist falsch — es muss $\\text{N/mm}^2$ werden.',
          ],
          0,
          `**Ansatz:** Aus $S = R_m/\\sigma_\\text{zul}$ folgt durch Umstellen $\\sigma_\\text{zul} = R_m/S$ — Division, **nicht** Multiplikation.

**Rechnung:** Korrekt: $\\sigma_\\text{zul} = 600/3 = 200\\,\\text{MPa}$. Die Studentin hat das Ergebnis um den Faktor $S^2 = 9$ überschätzt.

**Probe:** Sicherheits-Check: $S = R_m/\\sigma_\\text{zul} = 600/200 = 3$ ✓. Bei $1800\\,\\text{MPa}$ wäre $S = 600/1800 = 1/3$ — also weniger als 1, also unsicher.

**Typischer Fehler:** Verwechseln von „Sicherheit erhöhen" mit „Wert vergrößern". Sicherheit erhöht man, indem man die zulässige Spannung **verkleinert**.`,
          [
            'Stelle die Definitionsgleichung von $S$ nach $\\sigma_\\text{zul}$ um.',
            'Sicherheit > 1 ⇒ zulässige Spannung kleiner als Versagensgrenze.',
            'Plausibilitätscheck: kann $\\sigma_\\text{zul}$ größer als $R_m$ sein?',
          ],
          {
            1: '$S$ ist meistens $1{,}5$ bis $4$ — also $\\geq 1$. Wäre $S < 1$, wäre die Auslegung gar nicht sicher.',
            2: 'Bei spröden Werkstoffen ist $R_m$ der korrekte Bezug, weil keine ausgeprägte Streckgrenze existiert. Die Größe ist hier richtig gewählt.',
            3: 'MPa und $\\text{N/mm}^2$ sind identisch ($1\\,\\text{MPa} = 1\\,\\text{N/mm}^2$) — das ist nicht der Fehler.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['sicherheit'] },
      ),
      tag(
        ni(
          'Ein Zugstab aus Stahl wird im Betrieb mit $\\sigma = 80\\,\\text{MPa}$ belastet. Der Werkstoff hat $R_e = 280\\,\\text{MPa}$. Berechne die vorhandene Sicherheit $S$ gegen plastische Verformung (dimensionslos, eine Nachkommastelle).',
          3.5,
          0.05,
          '',
          `**Ansatz:** Sicherheit = Verhältnis Versagensgrenze zu Betriebsspannung: $S = R_e / \\sigma$.

**Rechnung:** $S = 280\\,\\text{MPa} / 80\\,\\text{MPa} = 3{,}5$ (dimensionslos).

**Probe:** Probe per Umkehrung: $\\sigma_\\text{zul} = R_e / S = 280/3{,}5 = 80\\,\\text{MPa}$ ✓ — passt zur Betriebsspannung.

**Typischer Fehler:** Kehrwert bilden ($S = 80/280 \\approx 0{,}29$) — Sicherheit < 1 wäre unsicher; das passt nicht zur Stabilität des Zugstabs.`,
          [
            'Welche Größe muss im Zähler stehen — der größere oder kleinere Wert?',
            'Stelle die Definition von $S$ auf.',
            'Eine Sicherheit $S = 3{,}5$ bedeutet: $250\\,\\%$ Reserve über die Betriebsspannung.',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['sicherheit'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // werk-1-2 — Werkstoffgruppen
  //   SG 0: metalle    · SG 1: keramik  · SG 2: kunststoffe
  //   SG 3: verbunde   · SG 4: leichtbau
  // ─────────────────────────────────────────────────────────────────────────
  'werk-1-2': {
    // ───────────── SG 0: Metalle (zäh, umformbar, wärmeleitend) ─────────────
    0: [
      tag(
        tf(
          'Metalle (z. B. Stahl, Aluminium, Kupfer) sind in der Regel zäh, gut umformbar und gut wärmeleitend — typische Werkstoffe für tragende Konstruktionen.',
          true,
          `**Ansatz:** Metalle haben eine kristalline Bindung mit freien Elektronen — das ergibt typische Metalleigenschaften: plastische Verformbarkeit (zäh), gute elektrische und Wärmeleitung, hohe Festigkeit.

**Rechnung:** Baustahl S235: $A \\approx 25\\,\\%$ (sehr zäh), $\\lambda \\approx 50\\,\\text{W/(m·K)}$ (gut wärmeleitend), $R_m \\approx 360\\,\\text{MPa}$ (tragfähig).

**Probe:** Anwendungs-Check: Stahlträger im Hochbau, Kupferdraht in der Elektrik, Alu-Felgen im Fahrzeug — alle drei Eigenschaften werden direkt genutzt. ✓

**Typischer Fehler:** „Alle Metalle sind hart" — viele Metalle (Cu, Al-Reinmetall, Pb) sind sogar sehr weich. Hart und zäh sind verschiedene Eigenschaften.`,
          [
            'Was unterscheidet Metalle physikalisch von Kunststoffen oder Keramik?',
            'Welche drei Hauptmerkmale werden in tragenden Bauteilen genutzt?',
            'Beispiel: Warum sind Kupfer-Stromschienen aus Cu und nicht aus Al₂O₃?',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['metalle'] },
      ),
      tag(
        mc(
          'Welcher Werkstoff ist die klassische Wahl für einen tragenden Stahlträger im Hochbau?',
          [
            'Baustahl S235',
            'Polyamid (PA6)',
            'Aluminiumoxid-Keramik (Al₂O₃)',
            'Magnesium AZ91',
          ],
          0,
          `**Ansatz:** Tragender Träger braucht: hohe Festigkeit, Zähigkeit (kein Sprödbruch), gute Schweißbarkeit, niedriger Preis. Genau das Profil eines Baustahls.

**Rechnung:** S235 hat $R_m \\approx 360\\,\\text{MPa}$, $A \\approx 25\\,\\%$, ist gut schweißbar und kostet ca. $1\\,\\text{€/kg}$ — Standardwerkstoff im Stahlbau.

**Probe:** Reale Hochbauträger (HEA, IPE) sind aus S235 oder S355 — passt. ✓

**Typischer Fehler:** Werkstoff allein nach „Festigkeit" auswählen. Verarbeitbarkeit, Kosten und Zähigkeit zählen genauso.`,
          [
            'Welche Werkstoffgruppe wird im Stahlbau standardmäßig eingesetzt?',
            'Welche Eigenschaften muss ein tragender Träger haben?',
            'Schweißbarkeit + Zähigkeit + Festigkeit → Metall.',
          ],
          {
            1: 'Polyamid hat $E \\approx 3\\,\\text{GPa}$ — viel zu nachgiebig für tragende Konstruktionen. Ein Träger aus PA würde sich unter Eigengewicht schon stark durchbiegen.',
            2: 'Al₂O₃ ist sehr fest auf Druck, aber spröde — bei Biegezug eines Trägers würde es ohne Vorwarnung brechen. Tragende Träger erfordern Zähigkeit.',
            3: 'Magnesium ist zwar Metall, aber teurer und schwer schweißbar. Im allgemeinen Hochbau wird es nicht verwendet — Spezialwerkstoff für Leichtbau im Fahrzeug.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['metalle'] },
      ),
      tag(
        mc(
          'Für eine Stromschiene in einem Schaltschrank wird ein Werkstoff mit hoher elektrischer **und** thermischer Leitfähigkeit gesucht. Welcher Metall-Werkstoff ist die beste Wahl?',
          [
            'Kupfer (Cu, $\\lambda \\approx 400\\,\\text{W/(m·K)}$)',
            'Stahl S235 ($\\lambda \\approx 50\\,\\text{W/(m·K)}$)',
            'Aluminium-Bronze (Cu-Al-Legierung)',
            'Nichtrostender austenitischer Stahl X5CrNi18-10',
          ],
          0,
          `**Ansatz:** Stromschiene = elektrische Leitfähigkeit zentral, hohe Wärmeleitung leitet Verlustwärme ab. Reines Kupfer ist hier Spitzenreiter unter den gängigen technischen Metallen.

**Rechnung:** Kupfer: $\\sigma_\\text{el} \\approx 58\\cdot 10^6\\,\\text{S/m}$, $\\lambda \\approx 400\\,\\text{W/(m·K)}$. Stahl liegt um Faktor $\\approx 8$ darunter. Cu-Bronzen liegen wegen der Legierungselemente klar unter reinem Cu.

**Probe:** Industriestandard: Kupfer-Stromschienen E-Cu58 in Schaltanlagen. ✓

**Typischer Fehler:** „Edelstahl ist edler, also leitet er besser" — das Gegenteil ist der Fall. Austenitische Stähle haben sogar besonders niedrige Leitfähigkeit.`,
          [
            'Welches Metall ist Standard im Elektromaschinenbau?',
            'Hohe elektrische Leitfähigkeit ⇒ hohe Wärmeleitfähigkeit (Wiedemann-Franz).',
            'Reines Cu ist deutlich leitfähiger als jede Cu-Legierung.',
          ],
          {
            1: 'Stahl ist mechanisch tragfähig, aber elektrisch und thermisch deutlich schlechter als Cu — als Stromschiene unwirtschaftlich (große Querschnitte oder hohe Verluste nötig).',
            2: 'Cu-Al-Bronzen sind mechanisch fest, aber durch die Legierungs-Atome streuen Elektronen stärker — Leitfähigkeit deutlich unter reinem Cu.',
            3: 'Austenitische Edelstähle haben sehr **niedrige** Leitfähigkeiten ($\\lambda \\approx 15\\,\\text{W/(m·K)}$) — das Gegenteil dessen, was hier gebraucht wird.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['metalle'] },
      ),
      tag(
        mc(
          'Ein Konstrukteur tauscht in einem stark belasteten tragenden Bauteil Stahl S235 ($R_m \\approx 360\\,\\text{MPa}$) gegen reines Aluminium ($R_m \\approx 70\\,\\text{MPa}$) aus, "weil Alu auch Metall ist und leichter". Wo liegt der Hauptfehler?',
          [
            'Reines Aluminium hat eine **viel niedrigere** Festigkeit als S235 — der Querschnitt müsste vervielfacht werden, sonst versagt das Bauteil.',
            '"Reines Aluminium" gibt es nicht — Alu ist immer eine Legierung.',
            'Aluminium ist nicht zäh und bricht spröde — der Tausch ist deshalb gefährlich.',
            'Aluminium hat einen niedrigeren E-Modul, also eine **höhere** Festigkeit als Stahl.',
          ],
          0,
          `**Ansatz:** Festigkeit bestimmt, welche Last ein Bauteil tragen kann. Ein Werkstoff-Tausch ohne Querschnitts-Anpassung kann das Bauteil unbrauchbar machen.

**Rechnung:** $\\sigma = F/A$. Bei gleicher Last und gleichem Querschnitt sinkt der Sicherheitsfaktor von $S_\\text{Stahl} = 360/\\sigma$ auf $S_\\text{Al} = 70/\\sigma$ — also auf etwa $1/5$. Um die gleiche Sicherheit zu halten, müsste der Querschnitt grob verfünffacht werden.

**Probe:** Tatsächlich werden im Alu-Bau höherfeste Legierungen wie EN AW-7075 eingesetzt ($R_m \\approx 500\\,\\text{MPa}$) und meist trotzdem mit größerem Querschnitt. ✓

**Typischer Fehler:** „Leichter = besser" — ohne Vergleich der spezifischen Steifigkeit/Festigkeit ist das eine Fehleinschätzung.`,
          [
            'Welcher Kennwert sagt aus, wie viel Last ein Bauteil pro Querschnitt tragen kann?',
            'Was passiert bei gleichem Querschnitt, wenn $R_m$ kleiner wird?',
            'Vergleich der Sicherheitsfaktoren: $S = R_m/\\sigma$.',
          ],
          {
            1: 'Reines Aluminium gibt es technisch durchaus (Al99,5) — die Aussage stimmt nicht. Der Punkt ist die Festigkeit, nicht die Reinheit.',
            2: 'Aluminium ist im Gegenteil sehr zäh ($A > 30\\,\\%$) — das ist nicht der Fehler. Der Fehler liegt bei der Festigkeit.',
            3: 'E-Modul und Festigkeit sind verschiedene Größen. Niedrigerer E-Modul macht Alu **weicher**, nicht fester. Aluminium hat geringere Festigkeit als Stahl.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['metalle'] },
      ),
      tag(
        matching(
          'Ordne dem Metall die typische Anwendung zu, bei der seine charakteristische Eigenschaft zentral genutzt wird.',
          [
            { left: 'Kupfer (E-Cu)',         right: 'Stromschiene in einer Schaltanlage (hohe elektrische Leitfähigkeit)' },
            { left: 'Aluminium-Legierung',   right: 'Karosseriestruktur im Fahrzeug (geringe Dichte für Leichtbau)' },
            { left: 'Baustahl S235',         right: 'tragender HEA-Träger im Hochbau (hohe Festigkeit, gut schweißbar)' },
            { left: 'Blei (Pb)',             right: 'Strahlenschutz in der Medizintechnik (hohe Dichte)' },
          ],
          `**Ansatz:** Jede Metall-Anwendung wird primär durch eine Eigenschaft bestimmt — Leitfähigkeit (Cu), Dichte (Al, Pb) oder Festigkeit + Verarbeitbarkeit (Stahl).

**Rechnung:** Cu für Strom (geringer Widerstand → wenig Verlust), Al im Fahrzeug (geringes Gewicht → geringer Verbrauch), Stahl im Hochbau (Festigkeit + Schweißbarkeit), Pb im Strahlenschutz ($\\rho \\approx 11{,}3\\,\\text{g/cm}^3$).

**Probe:** Jede rechte Seite passt zu genau einem Metall — keine Mehrdeutigkeit. ✓

**Typischer Fehler:** Metalle nur nach Festigkeit beurteilen. In der Praxis entscheidet die jeweils kritische Eigenschaft (oft Leitfähigkeit oder Dichte).`,
          [
            'Welche Eigenschaft ist bei Stromschienen kritisch?',
            'Welche Metalle sind besonders dicht — und wofür wird das genutzt?',
            'Schweißbarkeit + Festigkeit + Preis → Stahl.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['metalle'] },
      ),
    ],

    // ───────────── SG 1: Keramik (hart, hitzebeständig, spröde) ─────────────
    1: [
      tag(
        tf(
          'Technische Keramiken (z. B. Al₂O₃, SiC) sind sehr hart und hitzebeständig, aber spröde — sie sollten daher nicht auf Zug, sondern auf Druck belastet werden.',
          true,
          `**Ansatz:** Keramiken haben eine ionisch/kovalente Bindung ohne freie Versetzungsbewegung. Folge: hoher Schmelzpunkt, hohe Härte, **kaum** plastische Verformung — Bruch ohne Vorwarnung.

**Rechnung:** Al₂O₃: Härte $\\approx 2000\\,\\text{HV}$, Druckfestigkeit $\\approx 2000\\,\\text{MPa}$, Zugfestigkeit nur $\\approx 200\\,\\text{MPa}$ (Faktor 10 Unterschied!). Bruchdehnung $A < 0{,}1\\,\\%$.

**Probe:** Industriestandard: Keramik-Lager, Gleitringe, Schneidplatten — alle auf Druck/Verschleiß ausgelegt, nie auf Zug. ✓

**Typischer Fehler:** Keramik wie Metall behandeln und mit Sicherheit auf Zug auslegen — ein einziger Riss reicht für sofortigen Bruch.`,
          [
            'Wovon hängt die Festigkeit einer Keramik im Zug ab?',
            'Bei welcher Belastungsart können Keramiken ihre Stärken ausspielen?',
            'Druckkräfte schließen Risse — Zugkräfte öffnen sie.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['keramik'] },
      ),
      tag(
        mc(
          'Welcher Werkstoff ist am besten für die Wendeplatte (Schneidkante) eines Drehmeißels für hochfeste Stähle geeignet?',
          [
            'Hartmetall oder Schneidkeramik (Al₂O₃, $\\text{Si}_3\\text{N}_4$)',
            'Polyamid (PA6)',
            'Aluminium 6060',
            'Baustahl S235',
          ],
          0,
          `**Ansatz:** Eine Schneidkante muss härter sein als der bearbeitete Werkstoff und unter Bearbeitungstemperatur (mehrere hundert °C) formstabil bleiben. Genau das Profil von Hartmetall + Schneidkeramik.

**Rechnung:** Schneidkeramik: Härte $\\approx 1800$–$2200\\,\\text{HV}$, hitzebeständig bis $\\approx 1200\\,°\\text{C}$. Schneidet Stähle mit Härten bis $\\approx 600\\,\\text{HV}$ problemlos.

**Probe:** ISO-Wendeplatten K10, K20 (Hartmetall) und Cermet/Keramik werden in der Zerspanung von Stahl serienmäßig eingesetzt. ✓

**Typischer Fehler:** Werkstoff der Schneide weicher als der bearbeitete Werkstoff wählen — die Schneide stumpft sofort ab.`,
          [
            'Schneidkante muss härter sein als der zu bearbeitende Werkstoff.',
            'Welche Werkstoffgruppe erreicht Härten über $1500\\,\\text{HV}$?',
            'Hochtemperatur + Härte → Hartmetall/Keramik.',
          ],
          {
            1: 'PA6 hat eine sehr geringe Härte (ca. $20\\,\\text{HV}$) und schmilzt unter Schneidtemperatur (Stahl: $\\geq 500\\,°\\text{C}$).',
            2: 'Aluminium ist viel zu weich ($\\approx 30\\,\\text{HV}$) — würde sich beim ersten Schnitt verformen.',
            3: 'S235 hat $\\approx 130\\,\\text{HV}$ — niedriger als der zu bearbeitende harte Stahl. Die Schneide würde abnutzen, bevor sie schneidet.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['keramik'] },
      ),
      tag(
        mc(
          'Welche Belastung sollte ein Bauteil aus Aluminiumoxid-Keramik (Al₂O₃) **nicht** tragen?',
          [
            'Reine Zugbelastung mit Spannungsspitzen oder Kerben',
            'Reine Druckbelastung mit gleichmäßiger Lasteinleitung',
            'Verschleißbelastung an einer Gleitfläche',
            'Hohe Temperatur (z. B. $800\\,°\\text{C}$) bei statischer Druckbelastung',
          ],
          0,
          `**Ansatz:** Spröde Werkstoffe wie Al₂O₃ versagen schlagartig durch Risswachstum, sobald lokal die kritische Zugspannung überschritten wird. Kerben und Spannungsspitzen sind besonders kritisch.

**Rechnung:** Spannungsüberhöhung an Kerben: $\\sigma_\\text{max} = \\sigma_\\text{nom} \\cdot K_t$ (bei scharfer Kerbe $K_t > 3$). Bei spröden Werkstoffen ohne Plastifizierung gibt es keine Reserve — die Spannungsspitze führt direkt zum Bruch.

**Probe:** Reale Keramik-Bauteile (Lagerkugeln, Schneidplatten, Dichtringe) sind alle unter Druck oder Reibung belastet, nie unter reiner Zugkraft. ✓

**Typischer Fehler:** Keramik wie ein zähes Metall einsetzen und Sicherheits-Faktoren wie für Stahl wählen — bei spröden Werkstoffen sind viel höhere Sicherheiten ($S = 5$–$10$) nötig.`,
          [
            'Was passiert mit einem Riss in einem spröden Werkstoff unter Zug?',
            'Druck schließt Risse, Zug öffnet sie.',
            'Keramik = hart, aber kein plastisches Fließen vor dem Bruch.',
          ],
          {
            1: 'Druckbelastung ist gerade die **Stärke** von Keramik — Druckfestigkeiten bis $2000\\,\\text{MPa}$ sind Standard.',
            2: 'Verschleißbelastung gehört zu den klassischen Anwendungen von Keramik (Lagerkugeln, Gleitringe) — sie sind extrem verschleißarm.',
            3: 'Auch bei $800\\,°\\text{C}$ ist Keramik formstabil — solange die Belastung **Druck** ist, ist das eine Standardanwendung.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['keramik'] },
      ),
      tag(
        mc(
          'Eine Studierende plant einen Pendel-Aufhänger aus Al₂O₃-Keramik. Sie argumentiert: „Keramik ist superhart, also kann sie auch hohe Zugkräfte tragen." Wo liegt der Fehler?',
          [
            'Hart bedeutet **nicht** zugfest — Keramik hat eine $\\approx 10$-mal kleinere Zug- als Druckfestigkeit und versagt durch Risswachstum schlagartig.',
            'Härte und Festigkeit sind dasselbe — die Argumentation stimmt grundsätzlich.',
            'Al₂O₃ ist gar nicht hart — Härte ist nur eine PR-Behauptung der Hersteller.',
            'Keramik kann zwar Zug tragen, aber nicht bei niedrigen Temperaturen.',
          ],
          0,
          `**Ansatz:** Härte und Festigkeit sind verschiedene Eigenschaften. Härte = Widerstand gegen Eindringen; Festigkeit = ertragbare Spannung. Bei spröden Werkstoffen klafft eine große Lücke zwischen Druck- und Zugfestigkeit.

**Rechnung:** Al₂O₃: Druckfestigkeit $\\approx 2000\\,\\text{MPa}$, Zugfestigkeit $\\approx 200\\,\\text{MPa}$, Härte $\\approx 2000\\,\\text{HV}$. Im Pendel-Aufhänger wirkt **Zug** — also nur das schwächste Glied gilt.

**Probe:** Aufhänger werden in der Praxis aus zähen Stählen (oder Seilen) gemacht, nicht aus Keramik. ✓

**Typischer Fehler:** Eigenschaften pauschal gleichsetzen. Keramik IST hart und hitzebeständig — aber **gerade nicht** zugfest.`,
          [
            'Was unterscheidet Härte von Festigkeit?',
            'Welche Belastungsart wirkt im Aufhänger?',
            'Risse in spröden Werkstoffen unter Zug → Sprödbruch.',
          ],
          {
            1: 'Härte (HV) und Festigkeit ($R_m$) sind **verschiedene** Größen — bei Keramik klaffen sie weit auseinander. Die Argumentation ist genau deshalb falsch.',
            2: 'Härte ist eine objektiv messbare Größe (Vickers, Rockwell), keine Marketing-Aussage — der Fehler liegt nicht hier.',
            3: 'Keramik ist gerade bei hohen Temperaturen sehr stabil — das wäre ein **Vorteil**, nicht der Fehler.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['keramik'] },
      ),
      tag(
        mc(
          'Welche der folgenden Anwendungen passt **am besten** zu einer Siliziumkarbid-Keramik (SiC)?',
          [
            'Verschleißfeste Gleitringe in einer Hochtemperatur-Pumpe',
            'Tragender Hauptträger einer Brücke',
            'Korrosionsfester Tank für Salzlösung (zäh, schweißbar)',
            'Crash-Träger in einer Pkw-Knautschzone',
          ],
          0,
          `**Ansatz:** SiC kombiniert hohe Härte, Hitzebeständigkeit (bis $\\approx 1500\\,°\\text{C}$) und Korrosionsbeständigkeit — perfekt für Gleitringe in heißen, korrosiven Medien.

**Rechnung:** SiC-Gleitringe in Pumpen für $200\\,°\\text{C}$-Säuren erreichen Standzeiten, die metallische Werkstoffe nicht halten — Verschleiß und Korrosion sind die Hauptkriterien.

**Probe:** Praxis: Gleitring-Dichtungen in Chemiepumpen werden serienmäßig aus SiC oder Al₂O₃ gefertigt. ✓

**Typischer Fehler:** Stoßartige (Crash) oder zugbelastete Anwendungen mit Keramik bauen — Sprödbruch garantiert.`,
          [
            'Welche Belastung ist günstig für Keramik (Druck/Reibung) und welche tabu (Schlag/Zug)?',
            'Wozu passen extreme Härte + Hitzebeständigkeit + Korrosionsfestigkeit?',
            'Hochtemperatur + Verschleiß = Lehrbuchfall für SiC.',
          ],
          {
            1: 'Brückenträger sind biegezug-belastet und müssen zäh sein — das schließt SiC aus.',
            2: 'Keramik ist nicht schweißbar; ein großer Tank wäre nicht herstellbar. Hier wären Edelstahl oder Kunststoff besser.',
            3: 'Crash = Schlagbelastung = Sprödbruch bei Keramik. SiC würde sofort zerspringen, statt Energie zu absorbieren.',
          },
        ),
        { stage: 'transfer', subGoal: 1, uses: ['keramik'] },
      ),
    ],

    // ───────────── SG 2: Kunststoffe (leicht, korrosionsfest, niedriger E) ─
    2: [
      tag(
        tf(
          'Kunststoffe wie PA, POM oder PTFE sind leicht und korrosionsbeständig, haben aber einen deutlich niedrigeren E-Modul als Stahl oder Aluminium.',
          true,
          `**Ansatz:** Kunststoffe basieren auf langen Polymerketten — Bindungen zwischen den Ketten sind schwach (van-der-Waals). Folge: niedriger E-Modul, aber chemisch beständig.

**Rechnung:** PA6: $E \\approx 3\\,\\text{GPa}$, $\\rho \\approx 1{,}14\\,\\text{g/cm}^3$. Stahl: $E \\approx 210\\,\\text{GPa}$. Faktor $\\approx 70\\times$ Unterschied im E-Modul.

**Probe:** Anwendungen: Pumpengehäuse, Gleitlager, Korrosionsverkleidungen — überall dort, wo Steifigkeit zweitrangig ist und Korrosion das Hauptproblem. ✓

**Typischer Fehler:** Kunststoff für hochbelastete tragende Bauteile einsetzen — bei gleichem Querschnitt biegt sich Kunststoff um Faktor 70 stärker durch.`,
          [
            'Welche Bindungsart dominiert in Polymeren?',
            'Welche Eigenschaften folgen aus schwachen Bindungen?',
            'Vergleiche E-Modul: Kunststoff vs. Metall — Größenordnungen.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['kunststoffe'] },
      ),
      tag(
        mc(
          'In einer chemischen Anlage wird ein Bauteil benötigt, das gegen verdünnte Säure korrosionsbeständig ist und mäßig belastet wird. Welcher Werkstoff ist hier sinnvoll?',
          [
            'Polyethylen (PE) oder PTFE (Teflon)',
            'Stahl S235 (unbeschichtet)',
            'Aluminium 6060 (unbeschichtet)',
            'Magnesium AZ91',
          ],
          0,
          `**Ansatz:** Korrosionsbeständigkeit gegen Säure ist die Standardstärke von PE und PTFE — sie sind chemisch praktisch inert.

**Rechnung:** PTFE widersteht fast allen Säuren und Laugen bis $\\approx 250\\,°\\text{C}$. PE bis $\\approx 60\\,°\\text{C}$ ebenfalls. Metalle (Stahl, Al, Mg) korrodieren in Säuren.

**Probe:** Industriestandard: Säuretanks und Rohre aus PE oder PTFE-ausgekleidetem Stahl. ✓

**Typischer Fehler:** Unbeschichtete Metalle in Säure einsetzen — Lochfraß und Wasserstoff-Versprödung folgen.`,
          [
            'Welche Werkstoffgruppe ist chemisch inert?',
            'Was passiert mit Metallen in Säuren?',
            'Beispiel: PE-Tanks für Salzsäure-Lagerung in der Industrie.',
          ],
          {
            1: 'Stahl S235 würde sofort von Säure angegriffen — Wasserstoff-Versprödung und Korrosionsabtrag. Ohne Beschichtung ungeeignet.',
            2: 'Aluminium ist gegen viele Säuren ebenfalls anfällig (besonders Salzsäure) — nicht die erste Wahl.',
            3: 'Magnesium ist sogar besonders korrosionsanfällig, vor allem in saurer Umgebung — würde sich auflösen.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['kunststoffe'] },
      ),
      tag(
        mc(
          'Welcher Werkstoff ist die typische Wahl für ein leichtes, kostengünstiges Gehäuse eines Haushaltsgeräts (z. B. Wasserkocher-Sockel)?',
          [
            'Polypropylen (PP) oder ABS',
            'Aluminium 6060 (extrudiert)',
            'Edelstahl X5CrNi18-10',
            'Aluminiumoxid-Keramik',
          ],
          0,
          `**Ansatz:** Gehäuse braucht: gering belastet, leicht, isolierend (elektrische Sicherheit), kostengünstig in Großserie. Spritzgießfähige Thermoplaste sind hier die Standardlösung.

**Rechnung:** PP/ABS-Spritzgießteile haben Stückkosten von Cent-Beträgen, Wandstärken um $1{,}5$–$3\\,\\text{mm}$ reichen. Elektrisch isolierend → keine Erdung nötig.

**Probe:** Praxis: praktisch alle Haushaltsgeräte-Gehäuse sind aus PP oder ABS. ✓

**Typischer Fehler:** Metallgehäuse für ein gering belastetes Gehäuse vorschlagen — teuer, schwer, elektrisch leitend (Erdung nötig).`,
          [
            'Welche Anforderungen hat ein Gehäuse?',
            'Was lässt sich in Großserie am günstigsten herstellen?',
            'Spritzguss = Polymer-Standardverfahren.',
          ],
          {
            1: 'Aluminium-Gehäuse sind teurer (Strangpressen + Lackieren) und elektrisch leitend — für ein Haushaltsgerät überdimensioniert.',
            2: 'Edelstahl ist deutlich teurer und schwer — passt zu Premium-Geräten, nicht zur Standard-Massenanwendung.',
            3: 'Keramik ist nicht spritzgießbar und sehr teuer — als Gehäuse-Werkstoff praxisfern.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['kunststoffe'] },
      ),
      tag(
        mc(
          'Ein Konstrukteur ersetzt einen Stahl-Hebel durch einen formgleichen aus Polyamid (PA6, $E \\approx 3\\,\\text{GPa}$). Bei der Belastung biegt sich der Hebel deutlich stärker als der Stahl-Hebel. Wo liegt der Hauptgrund?',
          [
            'PA6 hat einen $\\approx 70$-mal kleineren E-Modul als Stahl — die Durchbiegung ist proportional zu $1/E$.',
            'PA6 hat eine höhere Dichte als Stahl, deshalb hängt der Hebel durch.',
            'PA6 ist leichter — deshalb ist die Belastung höher.',
            'PA6 ist spröde und reißt — deshalb biegt es sich.',
          ],
          0,
          `**Ansatz:** Durchbiegung eines Biegebalkens: $w = F\\,l^3/(3\\,E\\,I)$. Bei gleicher Geometrie und Last ist $w \\propto 1/E$.

**Rechnung:** $w_\\text{PA6}/w_\\text{Stahl} = E_\\text{Stahl}/E_\\text{PA6} = 210/3 \\approx 70$. Der PA-Hebel biegt sich also $\\approx 70$-mal stärker.

**Probe:** Kunststoff-Hebel sind in der Praxis nur dann einsetzbar, wenn die Steifigkeit nicht das Auslegungskriterium ist — sonst Querschnitt drastisch vergrößern oder Werkstoff wechseln. ✓

**Typischer Fehler:** Kunststoffe wegen Festigkeit ($R_m$) auswählen, ohne den E-Modul zu prüfen — Bauteile werden steifigkeits-, nicht festigkeits-bestimmt.`,
          [
            'Welche Größe bestimmt die Durchbiegung eines Biegebalkens?',
            'Vergleiche die E-Moduln: Stahl vs. PA6.',
            '$w \\propto 1/E$ bei gleicher Geometrie.',
          ],
          {
            1: 'PA6 hat eine deutlich **niedrigere** Dichte als Stahl ($1{,}14$ vs. $7{,}85\\,\\text{g/cm}^3$) — der Hebel ist leichter, die Aussage ist sachlich falsch.',
            2: 'Wenn das Eigengewicht eines Hebels überhaupt eine Rolle spielt, wäre es bei PA6 eher kleiner — und die Durchbiegung der Bauteilbelastung ist davon weitgehend unabhängig.',
            3: 'PA6 ist nicht spröde, sondern zäh ($A > 50\\,\\%$). Reißen ist nicht das Phänomen — es ist eine elastische Durchbiegung wegen niedrigem $E$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['kunststoffe'] },
      ),
      tag(
        mc(
          'PTFE (Teflon) wird häufig für Gleitlager und Dichtungen eingesetzt. Welche Eigenschaft ist dabei der **entscheidende** Vorteil gegenüber Metall-Lagern?',
          [
            'Sehr niedriger Reibwert ($\\mu \\approx 0{,}05$ trocken, ohne Schmiermittel) und chemische Inertheit',
            'Hoher E-Modul, der die Last flächig verteilt',
            'Hohe Härte gegen Verschleiß durch Späne',
            'Gute elektrische Leitfähigkeit für Erdung',
          ],
          0,
          `**Ansatz:** PTFE-Lager funktionieren ohne Schmierung — der Reibwert ist von Natur aus extrem niedrig. Das ist in der Lebensmitteltechnik und Chemie ein Killer-Argument (kein Schmierstoff nötig).

**Rechnung:** PTFE-Stahl-Reibwert $\\mu \\approx 0{,}04$–$0{,}1$. Stahl-Stahl ohne Schmierung: $\\mu \\approx 0{,}5$–$0{,}8$. Faktor $\\approx 10$.

**Probe:** Anwendung: Lebensmittel- und Pharmamaschinen, Trockenlager. ✓

**Typischer Fehler:** Mit Kunststoffen tragende Lager bauen, die hohe Lasten aushalten müssen — der niedrige E-Modul ist hier kein Vorteil, sondern eine Einschränkung.`,
          [
            'Was zeichnet PTFE im Vergleich zu Metallen besonders aus?',
            'Welcher Reibungs-Effekt nutzt das Polymer-Gleiten?',
            'PTFE = "der Werkstoff, an dem nichts kleben bleibt".',
          ],
          {
            1: 'PTFE hat einen **niedrigen** E-Modul (ca. $0{,}5\\,\\text{GPa}$) — die Aussage stimmt nicht.',
            2: 'PTFE ist eher weich (Härte $\\approx 5\\,\\text{HV}$) — Härte ist nicht der Vorteil.',
            3: 'PTFE ist ein hervorragender elektrischer **Isolator** — das Gegenteil einer Erdung.',
          },
        ),
        { stage: 'transfer', subGoal: 2, uses: ['kunststoffe'] },
      ),
    ],

    // ───────────── SG 3: Verbunde (CFK / GFK, hohe E/ρ) ─────────────
    3: [
      tag(
        tf(
          'Faserverbundwerkstoffe wie CFK (Kohlenstofffaser) oder GFK (Glasfaser) kombinieren eine geringe Dichte mit hoher Steifigkeit — daraus folgt eine sehr hohe spezifische Steifigkeit $E/\\rho$.',
          true,
          `**Ansatz:** Im Verbund tragen die Fasern (hohe Steifigkeit) die Last in Faserrichtung; die Matrix (Harz) hält die Fasern zusammen und überträgt Schubspannungen. Das Resultat: hohe Steifigkeit bei geringer Dichte.

**Rechnung:** CFK uni: $E \\approx 130\\,\\text{GPa}$, $\\rho \\approx 1{,}6\\,\\text{g/cm}^3$ → $E/\\rho \\approx 80\\,\\text{GPa}/(\\text{g/cm}^3)$. Stahl: $\\approx 27$. Faktor $\\approx 3$.

**Probe:** Anwendungen wie Flugzeugflügel, Sportwagen-Monocoque, Rotorblätter — alle nutzen genau diese Eigenschaft. ✓

**Typischer Fehler:** CFK auch quer zur Faserrichtung als „steif" annehmen. Quer ist nur die Matrix wirksam — dann ist CFK weicher als Aluminium.`,
          [
            'Was ist die Aufgabe der Faser im Verbund? Was die der Matrix?',
            'Wovon hängt die spezifische Steifigkeit ab?',
            'Vergleich CFK vs. Stahl: Warum ist $E/\\rho$ so unterschiedlich?',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['verbunde'] },
      ),
      tag(
        mc(
          'Welcher Werkstoff wird typischerweise für die Tragflächen-Längsträger eines modernen Verkehrsflugzeugs (z. B. Boeing 787) verwendet?',
          [
            'Kohlenstofffaser-Verbund (CFK)',
            'Massivstahl (S235)',
            'Reines Aluminium (Al99,5)',
            'Polyamid-Spritzguss (PA6)',
          ],
          0,
          `**Ansatz:** Flugzeug = Leichtbau auf höchstem Niveau. Werkstoff mit höchster spezifischer Steifigkeit gewinnt. CFK schlägt Aluminium um Faktor $\\approx 3$.

**Rechnung:** CFK uni ($E/\\rho \\approx 80$) vs. Alu-Legierungen ($E/\\rho \\approx 26$) → CFK liefert die gleiche Steifigkeit bei nur einem Drittel der Masse.

**Probe:** Boeing 787 Dreamliner und Airbus A350 sind zu mehr als $50\\,\\%$ aus CFK gebaut. ✓

**Typischer Fehler:** Stahl als „klassisch fest" wählen — viel zu schwer; Reinstaluminium als „leicht" — zu weich.`,
          [
            'Was ist im Flugzeugbau das Hauptkriterium?',
            'Welcher Werkstoff hat die höchste spezifische Steifigkeit?',
            'Moderne Verkehrsflugzeuge verwenden seit 2010 zunehmend CFK.',
          ],
          {
            1: 'Stahl ist zwar fest, aber zu schwer — bei einem Flugzeug zählt Masse linear in den Treibstoffverbrauch.',
            2: 'Reines Aluminium ist viel zu weich — selbst hochfeste Alu-Legierungen erreichen nicht die spezifische Steifigkeit von CFK.',
            3: 'PA6 hat einen viel zu niedrigen E-Modul für tragende Strukturen — kommt im Flugzeug nur in Innenausstattung vor.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['verbunde'] },
      ),
      tag(
        mc(
          'Ein Boots-Hersteller sucht einen Werkstoff für den Rumpf einer Sportyacht — Anforderungen: korrosionsfest gegen Salzwasser, mittlere Steifigkeit, gute Verarbeitbarkeit, moderater Preis. Welche Wahl ist sinnvoll?',
          [
            'GFK (Glasfaser-verstärkter Kunststoff)',
            'CFK (Kohlenstofffaser-verstärkter Kunststoff)',
            'Stahlblech S235',
            'Aluminiumoxid-Keramik (Al₂O₃)',
          ],
          0,
          `**Ansatz:** GFK ist der Standardwerkstoff im Bootsbau: korrosionsfrei in Salzwasser, in beliebigen Formen herstellbar, deutlich günstiger als CFK, und mit ausreichender Steifigkeit für Bootsrümpfe.

**Rechnung:** GFK: $E \\approx 30$–$45\\,\\text{GPa}$, $\\rho \\approx 1{,}8\\,\\text{g/cm}^3$ → $E/\\rho \\approx 17$–$25$. Preis pro $\\text{kg}$ ca. $1/5$–$1/10$ von CFK.

**Probe:** Sportyachten-Rümpfe sind seit Jahrzehnten typischerweise aus GFK. ✓

**Typischer Fehler:** Immer „CFK = beste Wahl" — bei mittleren Steifigkeitsanforderungen und Großflächen ist GFK preislich klar im Vorteil.`,
          [
            'Welcher Werkstoff ist günstig **und** korrosionsfest?',
            'Wofür reicht mittlere Steifigkeit?',
            'CFK ist zwar besser, aber teuer — wann lohnt sich das?',
          ],
          {
            1: 'CFK ist deutlich teurer und für mittlere Steifigkeit überdimensioniert. Bei Sportyachten ist GFK Standard.',
            2: 'Stahl korrodiert in Salzwasser stark — Beschichtungen sind nötig, aber nie zu 100 % zuverlässig. Wartungsintensiv.',
            3: 'Keramik ist nicht in den nötigen Größen (Bootsrumpf) herstellbar und wäre spröde — bei Stoßbelastung gefährlich.',
          },
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['verbunde'] },
      ),
      tag(
        mc(
          'Ein Konstrukteur lobt CFK als „universell besten Werkstoff" und schlägt es für einen Behälter mit Wasserstoff bei niedrigem Druck vor. Welcher Vorbehalt ist sachlich richtig?',
          [
            'Quer zur Faser ist CFK kaum steifer als der Matrix-Kunststoff — und Wasserstoff diffundiert durch das Polymer-Matrixsystem; das Bauteil braucht eine Diffusions-Sperrschicht.',
            'CFK kann nur in der Luftfahrt eingesetzt werden — alle anderen Anwendungen sind verboten.',
            'CFK leitet Strom und ist deshalb für Wasserstoff explosiv.',
            'CFK ist immer schwerer als Aluminium und damit ungeeignet.',
          ],
          0,
          `**Ansatz:** CFK ist anisotrop (richtungsabhängig) und die Polymermatrix ist gasdurchlässig. Beides muss bei Druckbehältern bedacht werden.

**Rechnung:** Quer zur Faserrichtung dominiert die Matrix: $E_\\perp \\approx 8$–$10\\,\\text{GPa}$ (Größenordnung Polymer), während $E_\\parallel \\approx 130\\,\\text{GPa}$. Wasserstoff ist sehr klein und permeiert durch Epoxidharz — kommerzielle H₂-Behälter haben deshalb eine Innenliner aus Polyamid oder Aluminium.

**Probe:** Reale Wasserstoff-Druckbehälter (Typ IV) bestehen aus CFK-Wicklung **mit** Kunststoff-Liner — genau aus diesem Grund. ✓

**Typischer Fehler:** Verbundwerkstoffe als isotrop und gasdicht annehmen — sie sind weder noch.`,
          [
            'In welche Richtung ist CFK steif, in welche nicht?',
            'Warum brauchen Wasserstoff-Behälter eine Innenbeschichtung?',
            'Verbund = Faser + Matrix → Eigenschaften richtungsabhängig.',
          ],
          {
            1: 'CFK wird breit eingesetzt (Sport, Auto, Wind, Boot) — der Vorbehalt ist nicht „verbotene Anwendung".',
            2: 'CFK leitet zwar Strom durch die Carbon-Fasern, ist aber nicht „explosiv mit H₂" — der Punkt ist die Diffusion und Anisotropie.',
            3: 'CFK ist gerade leichter als Aluminium ($\\rho_\\text{CFK} \\approx 1{,}6$ vs. $\\rho_\\text{Al} \\approx 2{,}7\\,\\text{g/cm}^3$) — die Aussage ist sachlich falsch.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['verbunde'] },
      ),
      tag(
        mc(
          'Wann ist GFK gegenüber CFK die wirtschaftlich bessere Wahl?',
          [
            'Bei großen Flächen mit mittlerer Steifigkeitsanforderung und engem Budget (z. B. Bootsrumpf, Windkraft-Rotorblatt-Schale, Behälter)',
            'Immer dann, wenn höchste spezifische Steifigkeit gefragt ist',
            'In der Luftfahrt für Tragflächen-Längsträger',
            'Wenn das Bauteil elektrisch leiten soll',
          ],
          0,
          `**Ansatz:** GFK kostet deutlich weniger als CFK und liefert für viele Anwendungen ausreichend Steifigkeit. Wo das Budget eng oder die Anforderung mittel ist, schlägt GFK das CFK.

**Rechnung:** GFK: $\\approx 3$–$10\\,\\text{€/kg}$. CFK: $\\approx 30$–$80\\,\\text{€/kg}$. Bei einem $40\\,\\text{m}$-Rotorblatt mit mehreren Tonnen Materialeinsatz wird der Preisunterschied entscheidend.

**Probe:** Reale Windkraft-Rotorblätter: Schale aus GFK, nur die hochbelasteten Hauptgurte aus CFK — genau diese Wirtschaftlichkeits-Logik. ✓

**Typischer Fehler:** „Mehr Steifigkeit = immer besser" — überdimensionierte Werkstoffe verteuern unnötig.`,
          [
            'Was unterscheidet GFK von CFK preislich und mechanisch?',
            'Wofür reicht mittlere Steifigkeit?',
            'Bei großen Flächen wird der Preis pro $\\text{kg}$ entscheidend.',
          ],
          {
            1: 'Höchste Steifigkeit liefert CFK, nicht GFK — die Aussage ist falsch. GFK lohnt sich gerade bei MITTLERER Anforderung.',
            2: 'Im hochbelasteten Hauptträger eines Verkehrsflugzeugs ist CFK Standard — GFK reicht dort nicht.',
            3: 'CFK ist elektrisch leitend (Carbon), GFK ist isolierend — wer leiten will, nimmt CFK, nicht GFK.',
          },
        ),
        { stage: 'transfer', subGoal: 3, uses: ['verbunde'] },
      ),
    ],

    // ───────────── SG 4: Leichtbau ($E/\rho$) ─────────────
    4: [
      tag(
        tf(
          'Die spezifische Steifigkeit $E/\\rho$ ist eine zentrale Leichtbau-Kennzahl: bei gleicher Dehnsteifigkeit hat der Werkstoff mit höherem $E/\\rho$ die geringere Masse.',
          true,
          `**Ansatz:** Bei einem Zugstab gilt $\\Delta l = F\\,l/(E\\,A)$. Soll die Steifigkeit $F/\\Delta l = E\\,A/l$ unabhängig vom Werkstoff gleich sein, muss bei kleinerem $E$ der Querschnitt $A$ größer werden. Die Masse ist $m = \\rho\\,A\\,l$, also bei gleicher Steifigkeit $m \\propto \\rho/E = 1/(E/\\rho)$.

**Rechnung:** Hohes $E/\\rho$ ⇒ kleine Masse für vorgegebene Steifigkeit. Stahl ($\\approx 27$) und Aluminium ($\\approx 26$) sind erstaunlich gleich — der Sprung kommt erst mit CFK ($\\approx 80$).

**Probe:** Aluminium ist nur deshalb „leichter" als Stahl, weil bei gleicher Festigkeit mit größerem Querschnitt gerechnet wird — die Massenersparnis ist NICHT durch $E/\\rho$ allein erklärbar. ✓

**Typischer Fehler:** $E/\\rho$ und $R_m/\\rho$ verwechseln — das eine ist Steifigkeit, das andere Festigkeit. Beides sind Leichtbau-Kennzahlen, aber für verschiedene Probleme.`,
          [
            'Was bedeutet "spezifisch" in der Materialwissenschaft?',
            'Welche Größe wird durch die Dichte geteilt?',
            'Stahl und Alu sind in $E/\\rho$ etwa gleich — überraschend?',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['leichtbau'] },
      ),
      tag(
        mc(
          'Welcher Werkstoff hat die **höchste** spezifische Steifigkeit $E/\\rho$ unter den folgenden?',
          [
            'CFK unidirektional ($E \\approx 130\\,\\text{GPa}$, $\\rho \\approx 1{,}6\\,\\text{g/cm}^3$)',
            'Stahl S235 ($E \\approx 210\\,\\text{GPa}$, $\\rho \\approx 7{,}85\\,\\text{g/cm}^3$)',
            'Aluminium 6060 ($E \\approx 70\\,\\text{GPa}$, $\\rho \\approx 2{,}7\\,\\text{g/cm}^3$)',
            'Polyamid PA6 ($E \\approx 3\\,\\text{GPa}$, $\\rho \\approx 1{,}14\\,\\text{g/cm}^3$)',
          ],
          0,
          `**Ansatz:** $E/\\rho$ jeweils ausrechnen und vergleichen.

**Rechnung:** CFK: $130/1{,}6 \\approx 81$. Stahl: $210/7{,}85 \\approx 27$. Alu: $70/2{,}7 \\approx 26$. PA6: $3/1{,}14 \\approx 2{,}6$. Einheit jeweils $\\text{GPa}/(\\text{g/cm}^3)$.

**Probe:** CFK hat den höchsten Wert — passt zu seinem Einsatz im Flugzeugbau. ✓

**Typischer Fehler:** Stahl wegen seines hohen E-Moduls für besonders steifigkeits-dicht halten — die hohe Dichte macht den Vorteil zunichte.`,
          [
            '$E/\\rho$ jeweils berechnen.',
            'Welche Werkstoffe haben gleichzeitig hohe $E$ **und** niedrige $\\rho$?',
            'CFK schlägt Metalle bei Steifigkeit/Masse um Faktor $\\approx 3$.',
          ],
          {
            1: 'Stahl hat zwar das höchste absolute $E$, aber die hohe Dichte zieht $E/\\rho$ stark nach unten (auf $\\approx 27$) — niedriger als CFK.',
            2: 'Aluminium liegt mit $\\approx 26$ erstaunlich nahe an Stahl — der Leichtbau-Vorteil von Alu ist also NICHT durch die spezifische Steifigkeit gegeben, sondern durch andere Effekte.',
            3: 'PA6 hat einen sehr niedrigen E-Modul — selbst die geringe Dichte rettet den Wert nicht ($\\approx 2{,}6$).',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['leichtbau'] },
      ),
      tag(
        ni(
          'Berechne die spezifische Steifigkeit $E/\\rho$ für Stahl S235 ($E = 210\\,\\text{GPa}$, $\\rho = 7{,}85\\,\\text{g/cm}^3$). Gib das Ergebnis in $\\text{GPa}/(\\text{g/cm}^3)$ auf eine Nachkommastelle an.',
          26.8,
          0.5,
          'GPa/(g/cm³)',
          `**Ansatz:** Direkt einsetzen: $E/\\rho = 210\\,\\text{GPa} / 7{,}85\\,\\text{g/cm}^3$.

**Rechnung:** $210 / 7{,}85 = 26{,}752\\ldots \\approx 26{,}8\\,\\text{GPa}/(\\text{g/cm}^3)$.

**Probe:** Standardwert für Stahl in Werkstoff-Tabellen ist $\\approx 27\\,\\text{GPa}/(\\text{g/cm}^3)$ — passt. ✓

**Typischer Fehler:** Einheiten-Wirrwarr (GPa vs. MPa) oder Dichte falsch in $\\text{kg/m}^3$ umrechnen, ohne die Spannung anzupassen. Hier reicht die direkte Division mit GPa und $\\text{g/cm}^3$.`,
          [
            'Formel: $E/\\rho$ direkt anwenden.',
            'Achte auf konsistente Einheiten — GPa und $\\text{g/cm}^3$ direkt teilbar.',
            'Erwartung: typischer Stahl-Wert um $27$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['leichtbau'] },
      ),
      tag(
        mc(
          'Ein Studierender folgert aus „Aluminium hat eine niedrigere Dichte als Stahl": „Aluminium hat damit auch eine viel höhere spezifische Steifigkeit $E/\\rho$." Wo liegt der Denkfehler?',
          [
            'Aluminium hat zwar geringere Dichte, aber auch geringeren E-Modul — die spezifische Steifigkeit $E/\\rho$ ist mit $\\approx 26$ sogar fast gleich wie bei Stahl ($\\approx 27$).',
            'Aluminium hat tatsächlich höhere spezifische Steifigkeit — der Studierende hat recht.',
            'E-Modul und Dichte sind unabhängig — daraus folgt gar keine Aussage.',
            'Die Dichte von Aluminium ist gleich der von Stahl.',
          ],
          0,
          `**Ansatz:** $E/\\rho$ ist ein Quotient — sowohl Zähler als auch Nenner ändern sich beim Werkstoff-Wechsel.

**Rechnung:** Stahl: $210/7{,}85 \\approx 27$. Aluminium: $70/2{,}7 \\approx 26$. Praktisch identisch. Nur CFK ($\\approx 80$) bringt einen echten Sprung.

**Probe:** Wer ein gleich steifes Bauteil aus Alu statt Stahl baut, spart bei gleicher Geometrie KEINE Masse — er muss den Querschnitt vergrößern, das gleicht die Massenersparnis ungefähr aus. ✓

**Typischer Fehler:** Nur eine der beiden Größen betrachten und auf den Quotienten schließen — erst beide ausrechnen.`,
          [
            'Was passiert mit $E$, wenn man von Stahl auf Alu wechselt?',
            'Quotient: Zähler UND Nenner berücksichtigen.',
            '$E_\\text{Alu}/E_\\text{Stahl} \\approx \\rho_\\text{Alu}/\\rho_\\text{Stahl}$ — Zufall?',
          ],
          {
            1: 'Stahl hat $E/\\rho \\approx 27$, Alu $\\approx 26$ — fast gleich. Die Aussage des Studierenden ist nicht haltbar.',
            2: 'Aus zwei zusammenhängenden Größen folgt sehr wohl etwas — der Quotient ist berechenbar. Diese Antwort ist zu pauschal.',
            3: 'Aluminium hat $\\rho \\approx 2{,}7$, Stahl $\\rho \\approx 7{,}85\\,\\text{g/cm}^3$ — also klar unterschiedlich.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['leichtbau'] },
      ),
      tag(
        matching(
          'Ordne den Werkstoffen die zugehörige spezifische Steifigkeit $E/\\rho$ in $\\text{GPa}/(\\text{g/cm}^3)$ zu (gerundet).',
          [
            { left: 'CFK unidirektional ($E = 130$, $\\rho = 1{,}6$)',  right: '$\\approx 81$' },
            { left: 'Glas-Float ($E = 70$, $\\rho = 2{,}5$)',             right: '$\\approx 28$' },
            { left: 'Beton C25 ($E = 30$, $\\rho = 2{,}4$)',              right: '$\\approx 12{,}5$' },
            { left: 'PA6 / Polyamid ($E = 3$, $\\rho = 1{,}14$)',         right: '$\\approx 2{,}6$' },
          ],
          `**Ansatz:** Für jeden Werkstoff $E/\\rho$ ausrechnen.

**Rechnung:** CFK: $130/1{,}6 \\approx 81$. Glas: $70/2{,}5 = 28$. Beton: $30/2{,}4 = 12{,}5$. PA6: $3/1{,}14 \\approx 2{,}6$.

**Probe:** Größenordnungs-Check: CFK $\\gg$ Glas $\\gg$ Beton $\\gg$ Polymer — passt zur Werkstoff-Hierarchie. ✓

**Typischer Fehler:** Werkstoff allein nach $E$ einsortieren ($\\text{Glas} > \\text{Beton}$, weil $E$ höher) — bei der spezifischen Steifigkeit zählt der Quotient.`,
          [
            'Pro Werkstoff $E/\\rho$ ausrechnen.',
            'Größenordnungs-Check: drei Werte sind klar unterschiedlich.',
            'CFK liegt deutlich vorne, PA6 weit hinten.',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['leichtbau'] },
      ),
    ],
  },
}
