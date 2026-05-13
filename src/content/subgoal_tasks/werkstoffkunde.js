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

  // ─────────────────────────────────────────────────────────────────────────
  // werk-2-1 — Härteprüfung (HV, HB, HRC)
  //   SG 0: vickers-brinell · SG 1: rockwell
  //   SG 2: haerte-rm       · SG 3: pruefkraft
  // ─────────────────────────────────────────────────────────────────────────
  'werk-2-1': {
    // ───────────── SG 0: Vickers / Brinell ─────────────
    0: [
      tag(
        tf(
          'Bei der Vickers-Härteprüfung dient eine Diamantpyramide als Eindringkörper, bei der Brinell-Härteprüfung eine Hartmetallkugel.',
          true,
          `**Ansatz:** Beide Verfahren unterscheiden sich primär durch die Geometrie des Eindringkörpers — und damit durch ihren Anwendungsbereich.

**Rechnung:** Vickers (DIN EN ISO 6507): Diamantpyramide mit Öffnungswinkel $136°$. Brinell (DIN EN ISO 6506): Hartmetallkugel mit $D = 1$, $2{,}5$, $5$ oder $10\\,\\text{mm}$.

**Probe:** Vickers: gemessen wird die Diagonale $d$ des quadratischen Abdrucks; Brinell: gemessen wird der Durchmesser $d$ des kreisrunden Abdrucks. Geometrie passt zum jeweiligen Eindringkörper. ✓

**Typischer Fehler:** „Eindringkörper austauschbar" — Diamant misst auch sehr harte Werkstoffe (Hartmetall, Keramik), die Hartmetallkugel würde sich dabei selbst verformen.`,
          [
            'Welches Material ist hart genug, um auch in Hartmetall einzudringen, ohne sich selbst zu verformen?',
            'Pyramide vs. Kugel — was wird im Abdruck jeweils gemessen?',
            'Norm-Hinweis: HV nutzt einen Diamanten, HB eine Kugel.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['vickers-brinell'] },
      ),
      tag(
        mc(
          'Welches Härteprüfverfahren ist für die Charakterisierung eines sehr harten Werkstoffs (z. B. Hartmetall mit $\\approx 1500\\,\\text{HV}$) am besten geeignet?',
          [
            'Vickers (HV) mit Diamantpyramide',
            'Brinell (HB) mit Hartmetallkugel $D = 10\\,\\text{mm}$',
            'Brinell (HB) mit Hartmetallkugel $D = 1\\,\\text{mm}$',
            'Keines der Verfahren — bei diesen Härten gibt es keine Prüfung',
          ],
          0,
          `**Ansatz:** Eindringkörper muss härter sein als der zu prüfende Werkstoff, sonst verformt er sich selbst und das Ergebnis ist verfälscht. Diamant ist der härteste verfügbare Werkstoff.

**Rechnung:** Hartmetall: $\\approx 1500\\,\\text{HV}$. Hartmetallkugel: $\\approx 1500$–$1700\\,\\text{HV}$ — also nur knapp härter und unter Prüflast bereits am Limit. Diamant: $\\approx 10\\,000\\,\\text{HV}$ — Reserve groß genug.

**Probe:** Industriestandard für Hartmetall- und Keramik-Werkzeuge: Vickers HV30. ✓

**Typischer Fehler:** Brinell auch auf hartem Material einsetzen — die Kugel wird abgeplattet, der Durchmesser falsch gemessen.`,
          [
            'Welcher Eindringkörper ist überhaupt härter als $1500\\,\\text{HV}$?',
            'Diamant ist quasi-universell verwendbar.',
            'Hartmetallkugel hat nur ca. $1500\\,\\text{HV}$ — keine Reserve gegen Hartmetall.',
          ],
          {
            1: 'Eine $10\\,\\text{mm}$-Hartmetallkugel würde sich beim Eindrücken in Hartmetall selbst verformen — Messung verfälscht.',
            2: 'Auch eine kleinere Kugel besteht aus Hartmetall und ist nicht härter als das zu prüfende Hartmetall.',
            3: 'Hartmetall wird sehr wohl regelmäßig geprüft — mit Vickers oder Rockwell HRA.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['vickers-brinell'] },
      ),
      tag(
        mc(
          'Eine sehr dünne, oberflächlich gehärtete Schicht (Dicke $\\approx 0{,}3\\,\\text{mm}$) auf einem Bauteil soll geprüft werden. Welches Verfahren liefert die zuverlässigste Härte ohne den Grundwerkstoff mitzumessen?',
          [
            'Vickers (HV) mit kleiner Prüfkraft (Mikro-Vickers, $F \\leq 1\\,\\text{N}$)',
            'Brinell (HB) mit $D = 10\\,\\text{mm}$, $F = 29{,}4\\,\\text{kN}$',
            'Brinell (HB) mit $D = 5\\,\\text{mm}$, $F = 7{,}35\\,\\text{kN}$',
            'Rockwell C (HRC) mit Vorlast $98\\,\\text{N}$ + Hauptlast $1373\\,\\text{N}$',
          ],
          0,
          `**Ansatz:** Bei dünnen Schichten muss die Eindringtiefe $h$ deutlich kleiner sein als die Schichtdicke — sonst „spürt" der Eindringkörper den Untergrund mit. Faustregel: $h \\leq \\tfrac{1}{10}$ der Schichtdicke.

**Rechnung:** Mikro-Vickers (HV0,1): Prüfkraft $\\approx 0{,}98\\,\\text{N}$ erzeugt Eindrucks-Diagonalen von wenigen $\\mu\\text{m}$ — Eindringtiefe weit unter $0{,}03\\,\\text{mm}$. Brinell mit $D = 10\\,\\text{mm}$ erzeugt Eindringtiefen von mehreren Zehntelmillimeter — durchdrückt die Schicht.

**Probe:** Mikro-Vickers ist nach DIN EN ISO 6507 die anerkannte Methode für Schicht-Härteprüfung. ✓

**Typischer Fehler:** „Größere Last = genaueres Ergebnis" — bei dünnen Schichten ist genau das Gegenteil richtig.`,
          [
            'Welcher Eindringkörper hinterlässt den kleinsten Abdruck?',
            'Faustregel: $h \\leq \\tfrac{1}{10}$ der Schichtdicke.',
            'Mikro-Vickers ($F < 2\\,\\text{N}$) erzeugt $\\mu\\text{m}$-kleine Abdrücke.',
          ],
          {
            1: 'Brinell mit $10\\,\\text{mm}$-Kugel und $\\approx 30\\,\\text{kN}$ Prüfkraft erzeugt einen sehr großen Abdruck — die $0{,}3\\,\\text{mm}$-Schicht wird komplett durchdrückt.',
            2: 'Auch eine $5\\,\\text{mm}$-Kugel mit mehreren $\\text{kN}$ Prüfkraft hat eine Eindringtiefe von mehreren Zehntelmillimeter und ist für $0{,}3\\,\\text{mm}$-Schichten zu groß.',
            3: 'HRC mit $\\approx 1{,}47\\,\\text{kN}$ Gesamtlast (Diamantkegel) hat eine Eindringtiefe in der Größenordnung von $0{,}1\\,\\text{mm}$ — bei dünnen Schichten ebenfalls grenzwertig.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['vickers-brinell'] },
      ),
      tag(
        mc(
          'Ein Auszubildender misst die Härte eines Hartmetall-Werkzeugs mit Brinell und einer Hartmetallkugel. Das Messergebnis schwankt stark und scheint zu niedrig. Welcher Hauptfehler liegt vor?',
          [
            'Eindringkörper und Werkstoff sind etwa gleich hart — die Kugel verformt sich beim Eindrücken selbst, der gemessene Durchmesser ist verfälscht.',
            'Die Kugel war zu klein gewählt — größere Kugeln liefern bei Hartmetall genauere Werte.',
            'Brinell darf nur bei Raumtemperatur durchgeführt werden — die Werkstatt war zu kalt.',
            'Bei Hartmetall muss die Last verdoppelt werden, sonst dringt die Kugel gar nicht ein.',
          ],
          0,
          `**Ansatz:** Eine Härteprüfung funktioniert nur, wenn der Eindringkörper deutlich härter ist als der Prüfkörper. Bei Hartmetall ist das mit einer Hartmetallkugel nicht gegeben.

**Rechnung:** Hartmetall: $\\approx 1500\\,\\text{HV}$. Hartmetallkugel: $\\approx 1500\\,\\text{HV}$. Verhältnis $\\approx 1$ — die Kugel verformt sich plastisch mit, der Abdruckdurchmesser wird größer als bei einer realen Härte und HB scheint zu niedrig.

**Probe:** Wechsel zu Vickers (Diamant, $\\approx 10\\,000\\,\\text{HV}$): die Messung wird stabil und liefert die korrekte Härte. ✓

**Typischer Fehler:** Die Härtebeschränkung von Brinell (HB $\\leq \\approx 450$) übersehen — oberhalb dieses Bereichs wird die Methode unzuverlässig.`,
          [
            'Welche Härtegrenze hat Brinell typischerweise?',
            'Was passiert mit der Kugel bei einer Härte gleich der Kugelhärte?',
            'Hartmetallkugel ≈ Hartmetallprüfling — kein Härteunterschied.',
          ],
          {
            1: 'Bei einer härteren Probe als der Kugel wäre eine größere Kugel sogar **anfälliger** — Brinell ist auf Härten $\\lesssim 450\\,\\text{HB}$ beschränkt, unabhängig vom Durchmesser.',
            2: 'Härteprüfungen sind bei Raumtemperatur normgerecht; Temperaturschwankungen erklären keine systematisch zu niedrigen Werte.',
            3: 'Eine höhere Last verformt die Hartmetallkugel **noch stärker** und macht das Problem schlimmer, nicht besser.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['vickers-brinell'] },
      ),
      tag(
        matching(
          'Ordne dem Stichwort den korrekten Begriff aus der Vickers/Brinell-Härteprüfung zu.',
          [
            { left: 'Eindringkörper Vickers (HV)',            right: 'Diamantpyramide mit Öffnungswinkel $136°$' },
            { left: 'Eindringkörper Brinell (HB)',            right: 'Hartmetallkugel mit $D = 1$–$10\\,\\text{mm}$' },
            { left: 'Vickers-Anwendung',                       right: 'universell, auch sehr harte Werkstoffe (Hartmetall, Keramik) und dünne Schichten (Mikro-Vickers)' },
            { left: 'Brinell-Anwendung',                       right: 'weichere Metalle bis $\\approx 450\\,\\text{HB}$, große Proben mit inhomogenem Gussgefüge' },
          ],
          `**Ansatz:** Jede Methode hat einen spezifischen Eindringkörper und einen typischen Einsatzbereich, der durch Härtegrenze, Probengröße und Gefügehomogenität bestimmt wird.

**Rechnung:** Diamant (Vickers): hart genug für alles. Hartmetallkugel (Brinell): nur bis $\\approx 450\\,\\text{HB}$. Klein/groß bestimmt die Anwendung: Mikro-Vickers für $\\mu\\text{m}$-Schichten, Brinell mit $10\\,\\text{mm}$ für inhomogenes Gusseisen.

**Probe:** Jede rechte Seite passt zu genau einer Methode (Eindringkörper + Anwendung sind eindeutig). ✓

**Typischer Fehler:** Methoden austauschbar verwenden — z. B. Mikro-Vickers für inhomogenes Gusseisen ist zu lokal, Brinell für dünne Schichten ist zu groß.`,
          [
            'Eindringkörper-Geometrie zuerst zuordnen (Pyramide vs. Kugel).',
            'Größenordnung des Abdrucks → Anwendungsbereich.',
            'Mikro = klein = dünne Schichten; Brinell groß = inhomogenes Gefüge.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['vickers-brinell'] },
      ),
    ],

    // ───────────── SG 1: Rockwell ─────────────
    1: [
      tag(
        tf(
          'Die Rockwell-Härte (HRC) wird direkt am Messgerät als Differenz von Eindringtiefen abgelesen, ohne dass der Abdruck mikroskopisch ausgemessen werden muss.',
          true,
          `**Ansatz:** Rockwell unterscheidet sich grundlegend von Vickers/Brinell: nicht die Abdrucksdiagonale wird gemessen, sondern direkt die Eindringtiefe-Differenz unter Vor- und Hauptlast.

**Rechnung:** HRC $= 100 - h/0{,}002\\,\\text{mm}$. Die Eindringtiefe $h$ wird vom Gerät automatisch erfasst — das Ergebnis steht innerhalb von Sekunden auf der Anzeige.

**Probe:** Industrieller Standard für Serienprüfung gehärteter Stähle: Rockwell C, ein Bediener, ca. 10 Sekunden pro Messung. ✓

**Typischer Fehler:** „Rockwell ist nur eine andere Vickers-Skala" — das Messprinzip ist anders (Tiefe statt Diagonale), die Skala (Zahlenwerte) ist nicht direkt umrechenbar.`,
            [
              'Wie unterscheidet sich Rockwell vom Messprinzip her von Vickers/Brinell?',
              'Was wird beim Rockwell-Messgerät direkt registriert?',
              'Die Maßeinheit „HRC-Punkt" entspricht $0{,}002\\,\\text{mm}$ Eindringtiefe.',
            ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['rockwell'] },
      ),
      tag(
        mc(
          'Welcher Eindringkörper wird bei Rockwell C (HRC) eingesetzt?',
          [
            'Diamantkegel mit $120°$ Spitzenwinkel und abgerundeter Spitze',
            'Diamantpyramide mit $136°$ Öffnungswinkel',
            'Hartmetallkugel mit $D = 1{,}5875\\,\\text{mm}$ ($\\tfrac{1}{16}\\,$"​)',
            'Stahlkegel mit $90°$ Spitzenwinkel',
          ],
          0,
          `**Ansatz:** Jede Rockwell-Skala hat ihren eigenen Eindringkörper. HRC verwendet den Diamantkegel mit $120°$, weil er für gehärtete Stähle (hohe Härte) geeignet ist.

**Rechnung:** Norm DIN EN ISO 6508-1: Skala C → Diamantkegel mit $120°$, Vorlast $98\\,\\text{N}$, Hauptlast $1373\\,\\text{N}$ (Gesamtlast $1471\\,\\text{N}$ = $150\\,\\text{kgf}$).

**Probe:** Auf jedem Rockwell-Härteprüfgerät ist der HRC-Eindringkörper als „Diamond Cone" beschriftet. ✓

**Typischer Fehler:** HRC und HV verwechseln — beide verwenden Diamant, aber Pyramide vs. Kegel.`,
          [
            'Bei welcher Skala kommt eine Kugel zum Einsatz, bei welcher ein Diamant?',
            'HRC = „C-Skala" für harte Werkstoffe → harter Eindringkörper.',
            'Diamantkegel ist Rockwell-spezifisch.',
          ],
          {
            1: 'Die Pyramide ist der Vickers-Eindringkörper. HRC verwendet einen Kegel.',
            2: 'Eine $1{,}5875\\,\\text{mm}$-Hartmetallkugel ist der Eindringkörper für Rockwell B (HRB), nicht HRC.',
            3: 'Stahlkegel sind nicht hart genug, um gehärtete Stähle zuverlässig zu prüfen — bei HRC wird ausschließlich Diamant verwendet.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['rockwell'] },
      ),
      tag(
        mc(
          'In einer Serienfertigung müssen täglich $200$ gehärtete Wellen auf ihre Härte geprüft werden. Welche Methode ist am wirtschaftlichsten?',
          [
            'Rockwell C (HRC) — direkte Anzeige, ca. $10\\,\\text{s}$ pro Messung',
            'Vickers (HV30) — Mikroskop-Auswertung der Diagonale, ca. $1$–$2\\,\\text{min}$ pro Messung',
            'Brinell (HB) — optische Vermessung des Kugelabdrucks',
            'Mikro-Vickers (HV0,1) — sehr kleine Eindrücke, mikroskopische Vermessung',
          ],
          0,
          `**Ansatz:** Wirtschaftlichkeit in Serie = Zeit pro Messung × Stückzahl + Bediener-Aufwand. Rockwell ist gerade hier konkurrenzlos schnell.

**Rechnung:** Rockwell: $10\\,\\text{s}\\cdot 200 \\approx 33\\,\\text{min}$. Vickers: $90\\,\\text{s}\\cdot 200 = 5\\,\\text{h}$. Faktor $\\approx 9$.

**Probe:** Praxis: Wareneingang und 100-%-Prüfung gehärteter Stähle erfolgt fast ausschließlich mit HRC. ✓

**Typischer Fehler:** Genauigkeit über Geschwindigkeit stellen, obwohl die Genauigkeit von HRC für gehärtete Stähle völlig ausreicht.`,
          [
            'Was ist in Serie das Hauptkriterium?',
            'Welches Verfahren braucht KEIN Mikroskop?',
            'Direkte Anzeige am Messgerät → schnellste Methode.',
          ],
          {
            1: 'Vickers braucht Mikroskop-Auswertung der Diagonale — bei $200$ Stück pro Tag wird das ein Vollzeit-Job.',
            2: 'Brinell braucht ebenfalls optische Auswertung des Abdrucks und ist nicht für gehärtete Wellen ($> 450\\,\\text{HB}$) geeignet.',
            3: 'Mikro-Vickers ist noch aufwändiger als HV30 (kleinere Eindrücke, höhere Vergrößerung) — nicht für Serie geeignet.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['rockwell'] },
      ),
      tag(
        mc(
          'Ein Mitarbeiter notiert die Rockwell-Härte als „$60\\,\\text{HRC}$ entspricht $60\\,\\text{HV}$". Wo liegt der Fehler?',
          [
            'Die HRC- und HV-Skalen sind nicht gleich — $60\\,\\text{HRC}$ entsprechen ungefähr $\\approx 700\\,\\text{HV}$. HRC ist eine eigene Skala aus Eindringtiefe-Differenzen, keine HV-Zahl.',
            'Die Aussage ist korrekt — HRC ist nur eine andere Schreibweise für HV.',
            'HRC kann gar nicht gleich HV sein, weil es kein gehärtetes Material mit $60\\,\\text{HV}$ gibt.',
            'HRC misst nur in Pascal und HV in Newton — die Einheiten passen nicht.',
          ],
          0,
          `**Ansatz:** Rockwell-C und Vickers sind zwei unabhängige Härteskalen mit eigenem Messprinzip. Eine direkte Gleichsetzung der Zahlenwerte ist falsch.

**Rechnung:** Vergleich aus DIN-Härteumwerttabelle: $60\\,\\text{HRC} \\approx 700\\,\\text{HV} \\approx 2300\\,\\text{MPa}$ Zugfestigkeit. $40\\,\\text{HRC} \\approx 390\\,\\text{HV}$. Die Skalen verlaufen nichtlinear.

**Probe:** Norm-Umwerttabelle (DIN EN ISO 18265): keine $1{:}1$-Beziehung HRC ↔ HV. ✓

**Typischer Fehler:** Skalenwerte direkt gleichsetzen, statt eine Umwerttabelle zu nutzen.`,
          [
            'Sind alle Härteskalen austauschbar?',
            'Was bedeutet eigentlich der Zahlenwert „$60$" bei Rockwell C?',
            'Umwerttabelle: $60\\,\\text{HRC}$ ist sehr viel mehr als $60\\,\\text{HV}$.',
          ],
          {
            1: 'Genau das ist der Fehler — die Aussage ist falsch. HRC und HV sind völlig verschiedene Skalen.',
            2: 'Die Aussage geht es nicht um die Existenz, sondern um die Skalenidentität — und die ist gerade NICHT gegeben.',
            3: 'Beide Härteskalen sind dimensionslos (Härte ist eine relative Größe). Pascal und Newton kommen hier nicht vor.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['rockwell'] },
      ),
      tag(
        mc(
          'Welche Rockwell-Skala ist für ein **weichgeglühtes** Aluminium-Bauteil ($\\approx 50\\,\\text{HB}$) am besten geeignet?',
          [
            'Rockwell B (HRB) — Hartmetallkugel $\\tfrac{1}{16}\\,$" mit $980\\,\\text{N}$ Hauptlast',
            'Rockwell C (HRC) — Diamantkegel mit $1373\\,\\text{N}$ Hauptlast',
            'Rockwell A (HRA) — Diamantkegel mit $539\\,\\text{N}$ Hauptlast',
            'Eine Rockwell-Skala existiert für so weiche Werkstoffe nicht — nur Brinell',
          ],
          0,
          `**Ansatz:** Rockwell hat mehrere Skalen, jede mit eigenem Eindringkörper und Lastbereich. Für weiche Werkstoffe (NE-Metalle, weiche Stähle) ist HRB Standard.

**Rechnung:** HRB: Kugel + niedrige Last → großer Abdruck → für weiche Werkstoffe ($\\approx 35$–$100\\,\\text{HRB}$). HRC mit Diamant würde komplett durchdrücken (Tiefe weit jenseits des Skalenbereichs). HRA ist für sehr harte und dünne Materialien (z. B. Hartmetall).

**Probe:** Aluminiumlegierungen werden in Norm-Datenblättern oft mit HRB oder HV angegeben. ✓

**Typischer Fehler:** Immer HRC verwenden, weil „die geläufigste Skala" — bei weichen Werkstoffen liefert HRC keinen brauchbaren Wert (Eindringtiefe zu groß, Skala unter $20\\,\\text{HRC}$ nicht definiert).`,
          [
            'Welche Rockwell-Skala nutzt eine Kugel statt eines Kegels?',
            'Weiches Material → großer Abdruck → niedrige Last + Kugel.',
            'HRB ist die Standardskala für weiche Stähle und NE-Metalle.',
          ],
          {
            1: 'HRC ist für gehärtete Stähle ($\\approx 20$–$70\\,\\text{HRC}$). Bei weichem Aluminium würde der Diamant zu tief eindringen — keine sinnvolle Anzeige.',
            2: 'HRA verwendet Diamantkegel mit niedriger Last — für sehr harte, dünne Schichten (z. B. Hartmetall-Beschichtungen) gedacht, nicht für weiches Aluminium.',
            3: 'Es gibt sehr wohl eine geeignete Rockwell-Skala — gerade HRB existiert für genau diesen Härtebereich.',
          },
        ),
        { stage: 'transfer', subGoal: 1, uses: ['rockwell'] },
      ),
    ],

    // ───────────── SG 2: Härte ↔ $R_m$ (haerte-rm) ─────────────
    2: [
      tag(
        tf(
          'Für unlegierte und niedriglegierte Stähle gilt die Faustformel $R_m \\approx 3{,}5 \\cdot HV$ (mit $R_m$ in $\\text{MPa}$ und HV als Vickers-Härte) — die Härte korreliert linear mit der Zugfestigkeit.',
          true,
          `**Ansatz:** Plastische Verformung wird sowohl beim Eindrücken (Härte) als auch beim Zugversuch (Streckgrenze/Festigkeit) durch Versetzungsbewegung bestimmt. Das erklärt die starke Korrelation HV ↔ $R_m$.

**Rechnung:** Faustformel: $R_m\\,[\\text{MPa}] \\approx 3{,}5 \\cdot HV$. Beispiele: S235 mit $\\approx 130\\,\\text{HV}$ → $R_m \\approx 455\\,\\text{MPa}$ (passt zu $360$–$510\\,\\text{MPa}$). Vergütungsstahl 42CrMo4 mit $\\approx 300\\,\\text{HV}$ → $R_m \\approx 1050\\,\\text{MPa}$.

**Probe:** Tabelle DIN EN ISO 18265 bestätigt die Faustformel im Bereich von $\\approx 100$–$650\\,\\text{HV}$ mit Abweichungen unter $\\pm 10\\,\\%$. ✓

**Typischer Fehler:** Faustformel auf Aluminium oder Kunststoffe übertragen — der Faktor $3{,}5$ gilt nur für Stahl. Für Aluminium ist der Korrelationsfaktor anders (typisch $\\approx 3{,}0$–$3{,}3$).`,
          [
            'Welche physikalische Größe verbindet Härte und Festigkeit?',
            'Faktor $3{,}5$ — gilt der für alle Werkstoffe?',
            'Plausibilitäts-Check S235: $130\\,\\text{HV} \\cdot 3{,}5 \\approx 460\\,\\text{MPa}$ — typisch für Baustahl.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['haerte-rm'] },
      ),
      tag(
        mc(
          'Eine Stahlprobe hat eine Härte von $200\\,\\text{HV}$. Welche Zugfestigkeit $R_m$ ist nach der Faustformel zu erwarten?',
          [
            '$\\approx 700\\,\\text{MPa}$',
            '$\\approx 200\\,\\text{MPa}$',
            '$\\approx 350\\,\\text{MPa}$',
            '$\\approx 2000\\,\\text{MPa}$',
          ],
          0,
          `**Ansatz:** Faustformel direkt anwenden: $R_m \\approx 3{,}5 \\cdot HV$.

**Rechnung:** $R_m \\approx 3{,}5 \\cdot 200 = 700\\,\\text{MPa}$.

**Probe:** Vergleich mit Tabellenwerten: $200\\,\\text{HV}$ entspricht etwa einem Vergütungsstahl im niedrigen Festigkeitsbereich (z. B. C45 normalgeglüht), $R_m$ liegt typisch bei $650$–$750\\,\\text{MPa}$ — passt. ✓

**Typischer Fehler:** Den Faktor $3{,}5$ vergessen ($R_m = 200\\,\\text{MPa}$) oder das Doppelte nehmen ($R_m = 1400\\,\\text{MPa}$).`,
          [
            'Welche Faustformel verbindet HV und $R_m$ bei Stählen?',
            'Multiplikation, kein Quotient.',
            'Erwartung: einige hundert MPa für mittelhart.',
          ],
          {
            1: '$200\\,\\text{MPa}$ wäre $R_m = HV$ — das stimmt nicht. Der Faktor $3{,}5$ fehlt.',
            2: '$350\\,\\text{MPa}$ entspräche dem Faktor $1{,}75$ — die Faustformel verwendet $3{,}5$.',
            3: '$2000\\,\\text{MPa}$ wäre $R_m = 10 \\cdot HV$ — viel zu hoch. Die Faustformel ist $\\approx 3{,}5 \\cdot HV$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['haerte-rm'] },
      ),
      tag(
        ni(
          'Ein Vergütungsstahl C45 hat eine Härte von $180\\,\\text{HV}$. Schätze die Zugfestigkeit $R_m$ in $\\text{MPa}$ mit der Stahl-Faustformel ab.',
          630,
          5,
          'MPa',
          `**Ansatz:** Stahl-Faustformel direkt anwenden: $R_m\\,[\\text{MPa}] \\approx 3{,}5 \\cdot HV$.

**Rechnung:** $R_m \\approx 3{,}5 \\cdot 180 = 630\\,\\text{MPa}$.

**Probe:** Tabellenwert C45 normalgeglüht: $R_m \\approx 600$–$700\\,\\text{MPa}$ — passt. ✓ Rückrechnung: $HV \\approx R_m/3{,}5 = 630/3{,}5 = 180$ ✓.

**Typischer Fehler:** Den Faktor invertieren ($R_m = 180/3{,}5 \\approx 51\\,\\text{MPa}$) — sinnlos klein für Stahl.`,
          [
            'Faustformel $R_m \\approx 3{,}5 \\cdot HV$ direkt anwenden.',
            'Multiplikation, nicht Division.',
            'Plausibilitäts-Check: einige hundert MPa, nicht weniger als 100.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['haerte-rm'] },
      ),
      tag(
        mc(
          'Ein Studierender wendet die Faustformel $R_m \\approx 3{,}5 \\cdot HV$ auf eine Aluminium-Legierung an, die mit $90\\,\\text{HV}$ gemessen wurde, und berechnet $R_m \\approx 315\\,\\text{MPa}$. Wo liegt der Hauptfehler?',
          [
            'Die Faustformel mit Faktor $3{,}5$ gilt **nur für Stähle** — bei Aluminium liegt der Korrelationsfaktor niedriger ($\\approx 3{,}0$–$3{,}3$), das Ergebnis $315\\,\\text{MPa}$ ist deshalb tendenziell zu hoch.',
            'Aluminium kann mit Vickers gar nicht geprüft werden — das Verfahren funktioniert nur bei Stahl.',
            'Die Faustformel gibt zwar das richtige Ergebnis, aber die Einheit muss in Pascal sein.',
            'Aluminium hat keine Zugfestigkeit, weil es immer plastisch fließt.',
          ],
          0,
          `**Ansatz:** Die Faustformel-Konstante hängt vom Werkstoff ab. Sie wurde empirisch für Stähle gefittet — bei NE-Metallen weicht sie ab.

**Rechnung:** Reale AlMg- oder AlMgSi-Legierungen mit $90\\,\\text{HV}$ haben $R_m \\approx 270$–$300\\,\\text{MPa}$. Mit Stahl-Faktor errechnet man $315\\,\\text{MPa}$ — schon $5$–$15\\,\\%$ zu hoch.

**Probe:** DIN EN ISO 18265 listet werkstoffspezifische Tabellen — keine universelle Faustformel. ✓

**Typischer Fehler:** Empirische Formeln auf Werkstoffe übertragen, für die sie nicht kalibriert sind.`,
          [
            'Auf welchen Werkstoff bezieht sich die Faustformel ursprünglich?',
            'Was unterscheidet Aluminium grundsätzlich von Stahl?',
            'Der Korrelationsfaktor ist nicht universell.',
          ],
          {
            1: 'Aluminium kann sehr wohl mit Vickers geprüft werden — kleine Pyramide, geringe Last (z. B. HV5).',
            2: 'Die Einheit MPa ist für eine Faustformel mit HV korrekt — Pascal wäre zwar gleichwertig, aber nicht der Fehler.',
            3: 'Aluminium hat eine messbare Zugfestigkeit — die Aussage ist sachlich falsch.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['haerte-rm'] },
      ),
      tag(
        ni(
          'Ein Werker prüft einen gehärteten Wellenzapfen und liest $320\\,\\text{HV}$ ab. Welche Zugfestigkeit $R_m$ in $\\text{MPa}$ ist nach der Stahl-Faustformel zu erwarten?',
          1120,
          10,
          'MPa',
          `**Ansatz:** Faustformel anwenden: $R_m \\approx 3{,}5 \\cdot HV$.

**Rechnung:** $R_m \\approx 3{,}5 \\cdot 320 = 1120\\,\\text{MPa}$.

**Probe:** $320\\,\\text{HV}$ entspricht einem Vergütungsstahl wie 42CrMo4 in vergütetem Zustand — Tabellenwert $R_m \\approx 1100$–$1200\\,\\text{MPa}$. Passt. ✓

**Typischer Fehler:** Faktor $3$ statt $3{,}5$ aus dem Kopf — würde $960\\,\\text{MPa}$ ergeben, also etwa $14\\,\\%$ zu niedrig.`,
          [
            'Faustformel: $R_m\\,[\\text{MPa}] \\approx 3{,}5 \\cdot HV$.',
            'Hier mit $HV = 320$ einsetzen.',
            'Erwartung: ein Vergütungsstahl im 1000-MPa-Bereich.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['haerte-rm'] },
      ),
    ],

    // ───────────── SG 3: Prüfkraft ↔ Probendicke (pruefkraft) ─────────────
    3: [
      tag(
        tf(
          'Bei der Härteprüfung muss die Prüfkraft so gewählt werden, dass die Eindringtiefe deutlich kleiner als die Probendicke (oder Schichtdicke) ist — sonst verfälscht der weichere Untergrund das Ergebnis.',
          true,
          `**Ansatz:** Wenn die Eindringtiefe vergleichbar oder größer als die Probendicke wird, „spürt" der Eindringkörper den Untergrund — die gemessene Härte ist eine Mischung aus Schicht und Untergrund.

**Rechnung:** Faustregel: Eindringtiefe $h \\leq \\tfrac{1}{10}$ der Probendicke (Vickers/Brinell), bzw. Probendicke $\\geq 10\\cdot h$. Bei einer $1\\,\\text{mm}$-Probe darf $h$ also höchstens $0{,}1\\,\\text{mm}$ betragen.

**Probe:** DIN EN ISO 6507 (Vickers) und 6506 (Brinell) verlangen Mindest-Probendicken in Abhängigkeit von Prüfkraft und Eindringkörper. ✓

**Typischer Fehler:** „Mehr Last = besseres Ergebnis" — das Gegenteil bei dünnen Proben oder Schichten. Hohe Last drückt durch.`,
          [
            'Was passiert, wenn der Eindringkörper bis zum Untergrund durchdrückt?',
            'Welche Faustregel verbindet Eindringtiefe und Probendicke?',
            'Eindringtiefe immer deutlich kleiner als Probendicke.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['pruefkraft'] },
      ),
      tag(
        mc(
          'Welcher Schritt ist der **erste** in der Wahl einer korrekten Härteprüf-Konfiguration für ein neues Bauteil?',
          [
            'Probendicke und ungefähre Härte abschätzen, daraus Verfahren und Prüfkraft auswählen',
            'Sofort die größtmögliche Prüfkraft wählen — höhere Last gibt genauere Werte',
            'Brinell mit $D = 10\\,\\text{mm}$ probieren, weil das die Standardprüfung ist',
            'Mit dem Daumennagel über die Oberfläche kratzen, um die Härte abzuschätzen',
          ],
          0,
          `**Ansatz:** Verfahren und Prüfkraft hängen direkt von Härtebereich und Probendicke ab. Eine Konfiguration ohne Vorab-Abschätzung führt fast immer zu falschen Werten.

**Rechnung:** Beispiel: Härteprüfung an einem $0{,}5\\,\\text{mm}$ dünnen Blech mit $\\approx 200\\,\\text{HV}$. Mit HV30 entstehende Eindringtiefe: $h \\approx \\sqrt{0{,}1891 \\cdot 294/200}/7 \\approx 0{,}11\\,\\text{mm}$ — knapp am Limit (Probendicke $\\geq 10h = 1{,}1\\,\\text{mm}$). Besser HV5 oder HV10.

**Probe:** DIN ISO 6507 verlangt explizit eine Mindestprobendicke in Abhängigkeit von Prüfkraft und Härte. ✓

**Typischer Fehler:** Konfiguration „nach Bauchgefühl" — meist mit zu hoher Last, was Schicht- oder Probenuntergrund mitmisst.`,
          [
            'Welche Größen müssen vor der Prüfung bekannt sein?',
            'Härte + Dicke → Methode + Last.',
            'Norm-Tabellen zur Mindestdicke nutzen.',
          ],
          {
            1: 'Hohe Last erzeugt tiefe Eindrücke — bei dünnen Proben durchgedrückt, Ergebnis verfälscht. „Mehr ist besser" ist hier falsch.',
            2: 'Brinell mit $10\\,\\text{mm}$-Kugel passt nur für relativ weiche, dicke Proben. Für eine universelle Standardanwendung ist es nicht geeignet.',
            3: 'Daumennagel-Kratzproben sind keine Härteprüfung — sie liefern keine Zahlenwerte und keine reproduzierbaren Aussagen.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['pruefkraft'] },
      ),
      tag(
        mc(
          'Was passiert, wenn die Prüfkraft bei einer Vickers-Messung **zu hoch** für die gegebene Probendicke gewählt wird?',
          [
            'Der Eindringkörper drückt bis zum härteren oder weicheren Untergrund durch — die gemessene Härte ist eine Mischung aus Schicht- und Untergrund-Härte.',
            'Die Diagonale des Eindrucks wird zu klein — die Härte erscheint zu hoch.',
            'Die Vickers-Pyramide wird beschädigt — sie ist nicht für hohe Lasten zugelassen.',
            'Die Zugfestigkeit nach der Faustformel wird automatisch korrigiert — kein Fehler.',
          ],
          0,
          `**Ansatz:** Bei zu großer Eindringtiefe verteilen sich Spannungsfelder bis in den Untergrund. Die elastisch-plastische Antwort ist dann die Summe von Schicht und Untergrund.

**Rechnung:** Beispiel: Hartchrom-Schicht $0{,}1\\,\\text{mm}$ auf weichem Stahl-Grundkörper. HV30 erzeugt Eindringtiefe $\\approx 0{,}11\\,\\text{mm}$ — drückt durch die Schicht. Die gemessene Härte liegt zwischen Hartchrom ($\\approx 800\\,\\text{HV}$) und Stahl ($\\approx 200\\,\\text{HV}$).

**Probe:** Lösung: Last reduzieren (HV0,5 oder HV1) → Eindringtiefe wenige $\\mu\\text{m}$ → reine Schichtmessung. ✓

**Typischer Fehler:** Annehmen, dass eine größere Last zuverlässigere Mittelwerte liefert. Bei dünnen Schichten und Proben gilt das Gegenteil.`,
          [
            'Was passiert physikalisch, wenn der Eindringkörper bis zum Untergrund vordringt?',
            'Spannungsfeld unter dem Eindringkörper reicht weit über die Eindringtiefe hinaus.',
            'Faustregel: Probendicke mindestens das $10$-fache der Eindringtiefe.',
          ],
          {
            1: 'Die Diagonale wird durch Untergrund-Effekte typischerweise **größer** (weichere Probe drückt nach), nicht kleiner — die Härte erscheint daher meist zu **niedrig**.',
            2: 'Vickers-Diamantpyramiden sind für Lasten bis zu mehreren $\\text{kN}$ zugelassen — eine zu hohe Last beschädigt nicht die Pyramide, sondern verfälscht die Messung.',
            3: 'Es gibt keine automatische Korrektur — der Fehler bleibt unentdeckt, wenn man die Geometrie nicht prüft.',
          },
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['pruefkraft'] },
      ),
      tag(
        mc(
          'Ein Werkstattmitarbeiter prüft ein $1\\,\\text{mm}$ dickes Stahlblech mit Brinell ($D = 10\\,\\text{mm}$, $F = 29{,}4\\,\\text{kN}$) und ist überrascht, dass die Härte deutlich von Tabellenwerten abweicht. Wo liegt der Fehler?',
          [
            'Die $10\\,\\text{mm}$-Brinellkugel mit $29{,}4\\,\\text{kN}$ erzeugt eine Eindringtiefe in der Größenordnung von einigen Zehntelmillimetern — das Blech ist viel zu dünn (Faustregel: Probendicke $\\geq 10\\cdot h$).',
            'Brinell darf bei Stahl nicht angewendet werden — nur Vickers funktioniert für Stahl.',
            'Stahlbleche können nur mit Rockwell-A geprüft werden, weil sie zu weich sind.',
            'Der Mitarbeiter hat die Probe nicht warm genug gemacht — ohne Vorwärmung verfälscht die Spannungsverteilung das Ergebnis.',
          ],
          0,
          `**Ansatz:** Brinell mit $10\\,\\text{mm}$-Kugel und $29{,}4\\,\\text{kN}$ ist die Standardkonfiguration für Stahl ab $\\approx 6\\,\\text{mm}$ Dicke. Bei $1\\,\\text{mm}$ sind Eindringtiefe und Probendicke vergleichbar.

**Rechnung:** Eindringtiefe $h \\approx F/(\\pi\\,D\\,HB)$. Mit $F = 29{,}4\\,\\text{kN}$, $D = 10\\,\\text{mm}$, $HB \\approx 150$: $h \\approx 29400/(\\pi\\cdot 10\\cdot 1{,}5) \\approx 624\\,\\text{N/mm}$ — Größenordnungs-Check zeigt $h$ im Bereich $\\approx 0{,}5\\,\\text{mm}$, also halbe Probendicke. Faustregel ($h \\leq 0{,}1\\,\\text{mm}$ bei $1\\,\\text{mm}$ Probe) verletzt.

**Probe:** Lösung: kleinere Kugel ($D = 1\\,\\text{mm}$) und kleinere Last, oder Wechsel zu Vickers HV5/HV10. ✓

**Typischer Fehler:** Die Norm-Tabelle zur Mindestprobendicke ignorieren und „Standardprüfung" auf jede Probe anwenden.`,
          [
            'Was sagt die Faustregel zur Mindestprobendicke?',
            'Bei welchen Probendicken ist Brinell mit $10\\,\\text{mm}$ zulässig?',
            'Eindringtiefe + Probendicke → Mismatch.',
          ],
          {
            1: 'Brinell ist gerade für (weichere) Stähle das Standardverfahren — nicht „verboten". Der Fehler liegt in der Probendicke, nicht im Verfahren.',
            2: 'HRA ist für sehr harte Schichten gedacht, nicht für allgemeine Bleche. Außerdem hat der Mitarbeiter HRA gar nicht eingesetzt.',
            3: 'Härteprüfungen werden bei Raumtemperatur durchgeführt; Vorwärmung ist normfremd und nicht der Fehlergrund.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['pruefkraft'] },
      ),
      tag(
        mc(
          'Welche Faustregel gibt die Mindestprobendicke $t_\\text{min}$ in Abhängigkeit von der Eindringtiefe $h$ vor (Vickers / Brinell)?',
          [
            '$t_\\text{min} \\geq 10 \\cdot h$',
            '$t_\\text{min} \\geq h$',
            '$t_\\text{min} \\geq 0{,}5 \\cdot h$',
            '$t_\\text{min}$ hängt nur von der Prüfkraft ab, nicht von $h$',
          ],
          0,
          `**Ansatz:** Die plastische Verformungszone unter dem Eindringkörper ist mehrfach so tief wie der Eindruck selbst. Faustregel: Probendicke mindestens das $10$-fache der Eindringtiefe.

**Rechnung:** DIN-Normen verlangen sogar Probendicken $\\geq 8 \\cdot h$ (Brinell) bzw. $\\geq 10 \\cdot d$ (Vickers, $d$ = Diagonale). Die Faustregel $t_\\text{min} \\geq 10 \\cdot h$ deckt beides konservativ ab.

**Probe:** Beispiel HV30 mit Eindringtiefe $h \\approx 0{,}1\\,\\text{mm}$ → $t_\\text{min} \\geq 1\\,\\text{mm}$ Probendicke nötig. ✓

**Typischer Fehler:** Probendicke gleich oder nur geringfügig größer als Eindringtiefe — der Untergrund-Effekt wird unterschätzt.`,
          [
            'Wie tief reicht das Spannungsfeld unter dem Eindringkörper?',
            'Faktor $10$ ist eine konservative Norm-Faustregel.',
            'Probendicke gleich $h$ → durchgedrückt.',
          ],
          {
            1: 'Probendicke nur gleich der Eindringtiefe wäre direkt durchgedrückt — der Untergrund würde voll mitgemessen.',
            2: '$t_\\text{min} = 0{,}5 \\cdot h$ wäre kleiner als die Eindringtiefe — physikalisch unmöglich (Probe zerstört).',
            3: 'Eindringtiefe $h$ ist die zentrale Größe; Prüfkraft beeinflusst $h$, aber die Faustregel bezieht sich auf $h$ und Probendicke.',
          },
        ),
        { stage: 'transfer', subGoal: 3, uses: ['pruefkraft'] },
      ),
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // werk-2-2 — Kerbschlagbiegeversuch (Charpy)
  //   SG 0: charpy         · SG 1: kv-zaeh-sproed
  //   SG 2: grenzwert-27   · SG 3: uebergangstemp  · SG 4: stahl-j-bez
  // ─────────────────────────────────────────────────────────────────────────
  'werk-2-2': {
    // ───────────── SG 0: Charpy-Versuch & KV-Formel ─────────────
    0: [
      tag(
        tf(
          'Beim Charpy-Kerbschlagbiegeversuch wird die Kerbschlagarbeit $KV$ aus der Höhendifferenz des Pendels vor und nach dem Bruch berechnet: $KV = m \\cdot g \\cdot (h_0 - h_1)$.',
          true,
          `**Ansatz:** Energieerhaltung am Pendel: die potentielle Energie, die das Pendel **verliert**, wurde verwendet, um die Probe zu durchschlagen.

**Rechnung:** Vor dem Schlag: $E_0 = m\\,g\\,h_0$. Nach dem Schlag: $E_1 = m\\,g\\,h_1$. Differenz $\\Delta E = m\\,g\\,(h_0 - h_1) = KV$.

**Probe:** Größenordnungs-Check Baustahl: $m \\approx 20\\,\\text{kg}$, $h_0 - h_1 \\approx 0{,}5\\,\\text{m}$ → $KV \\approx 100\\,\\text{J}$. Passt zu Tabellenwerten. ✓

**Typischer Fehler:** $KV = m\\,g\\,h_0$ (ohne Endhöhe) — das wäre die gesamte Anfangsenergie, nicht der von der Probe aufgenommene Anteil.`,
          [
            'Was wird beim Pendel-Schlag energetisch von der Probe „verbraucht"?',
            'Energieerhaltung: $\\Delta E = E_0 - E_1$.',
            'Höhendifferenz $h_0 - h_1$ × Gewicht = Bruchenergie.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['charpy'] },
      ),
      tag(
        mc(
          'Welche Größen müssen am Charpy-Pendel direkt gemessen werden, um die Kerbschlagarbeit zu bestimmen?',
          [
            'Pendelmasse $m$ und Höhendifferenz $h_0 - h_1$ (Anfangs- und Endhöhe)',
            'Nur die Endhöhe $h_1$',
            'Die Probendicke und die Erdbeschleunigung $g$',
            'Die Bruchspannung $\\sigma_B$ der Probe',
          ],
          0,
          `**Ansatz:** Die Formel $KV = m\\,g\\,(h_0 - h_1)$ enthält drei Größen: $m$, $g$ und $h_0 - h_1$. $g$ ist eine Konstante, also müssen $m$ und $h_0 - h_1$ aus dem Versuch kommen.

**Rechnung:** $m$ ist Konstrukteurs-Größe des Pendels (oft auf dem Geräteschild). $h_0$ wird beim Spannen festgelegt, $h_1$ wird nach dem Durchschlagen automatisch abgelesen (Schleppzeiger). Damit ist $KV$ in Joule berechenbar.

**Probe:** Charpy-Maschinen zeigen $KV$ direkt in J — die interne Logik nutzt genau $m\\,g\\,(h_0 - h_1)$. ✓

**Typischer Fehler:** Probendicke als notwendig ansehen — sie geht in die Berechnung nicht ein (nur als normierter Wert in den Vergleichswert KV/Probendicke = $K_c$).`,
          [
            'Welche Größen tauchen in der Formel auf?',
            '$g$ ist eine Naturkonstante, keine Messgröße.',
            'Probendicke geht NICHT in $KV$ ein.',
          ],
          {
            1: 'Nur $h_1$ reicht nicht aus — ohne $h_0$ kennt man die Höhendifferenz nicht und damit nicht die verbrauchte Energie.',
            2: 'Probendicke und $g$: $g$ ist eine Konstante, Probendicke geht **nicht** in $KV$ ein. Sie wird höchstens für den normierten Vergleichswert $K_c = KV/A$ verwendet.',
            3: 'Die Bruchspannung wird nicht gemessen — das wäre ein Zugversuch. Charpy misst Energie, nicht Spannung.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['charpy'] },
      ),
      tag(
        ni(
          'Ein Charpy-Pendel hat eine Masse $m = 20\\,\\text{kg}$. Anfangshöhe $h_0 = 1{,}5\\,\\text{m}$, Endhöhe nach Bruch $h_1 = 0{,}7\\,\\text{m}$. Berechne die Kerbschlagarbeit $KV$ in Joule (mit $g = 9{,}81\\,\\text{m/s}^2$).',
          156.96,
          1,
          'J',
          `**Ansatz:** Formel direkt anwenden: $KV = m\\,g\\,(h_0 - h_1)$.

**Rechnung:** $h_0 - h_1 = 1{,}5 - 0{,}7 = 0{,}8\\,\\text{m}$. Damit $KV = 20\\,\\text{kg} \\cdot 9{,}81\\,\\text{m/s}^2 \\cdot 0{,}8\\,\\text{m} = 156{,}96\\,\\text{J} \\approx 157\\,\\text{J}$.

**Probe:** Dimensionscheck $[KV] = \\text{kg}\\cdot\\text{m/s}^2\\cdot\\text{m} = \\text{N\\,m} = \\text{J}$. ✓ Größenordnung: $157\\,\\text{J}$ liegt im Bereich von zähem Baustahl bei Raumtemperatur — plausibel.

**Typischer Fehler:** $h_0$ und $h_1$ verwechseln (Endhöhe größer als Anfangshöhe annehmen, negative Energie) oder $g$ vergessen.`,
          [
            'Formel $KV = m\\,g\\,(h_0 - h_1)$ — alle drei Faktoren multiplizieren.',
            'Höhendifferenz zuerst ausrechnen: $1{,}5 - 0{,}7 = 0{,}8$.',
            '$20 \\cdot 9{,}81 \\cdot 0{,}8$ einsetzen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['charpy'] },
      ),
      tag(
        mc(
          'Ein Studierender setzt in die Formel ein: $m = 20\\,\\text{kg}$, $h_0 = 1{,}5\\,\\text{m}$, $h_1 = 0{,}7\\,\\text{m}$, **vergisst aber den Faktor $g$**. Er erhält $KV = 20 \\cdot 0{,}8 = 16\\,\\text{J}$. Wo liegt der Fehler?',
          [
            'Faktor $g = 9{,}81\\,\\text{m/s}^2$ fehlt — korrekt: $KV = 20 \\cdot 9{,}81 \\cdot 0{,}8 \\approx 157\\,\\text{J}$.',
            'Höhendifferenz $h_0 - h_1$ wurde falsch ausgerechnet — korrekt ist $0{,}8\\,\\text{m}$.',
            '$h_0$ und $h_1$ wurden vertauscht — das Vorzeichen wäre falsch.',
            'Die Pendelmasse muss in Newton angegeben werden, nicht in Kilogramm.',
          ],
          0,
          `**Ansatz:** Die Formel $KV = m\\,g\\,(h_0 - h_1)$ verbindet Energie mit Masse × Beschleunigung × Höhe. Ohne $g$ stimmt die Dimension nicht — $\\text{kg}\\cdot\\text{m} = $ kein Joule.

**Rechnung:** Korrekt: $20 \\cdot 9{,}81 \\cdot 0{,}8 = 156{,}96\\,\\text{J} \\approx 157\\,\\text{J}$. Ohne $g$: $16\\,\\text{kg\\,m}$ — keine sinnvolle Einheit, etwa um Faktor $\\approx 10$ zu klein.

**Probe:** Dimensionscheck: $[m\\,g\\,h] = \\text{kg}\\cdot\\text{m/s}^2\\cdot\\text{m} = \\text{J}$. ✓ Ohne $g$: $[m\\,h] = \\text{kg\\,m}$ ≠ $\\text{J}$.

**Typischer Fehler:** Genau dieses Vergessen der Erdbeschleunigung. Mnemonik: „$E_\\text{pot} = m\\,g\\,h$, niemals nur $m\\,h$".`,
          [
            'Welche Konstante steht zwischen Masse und Höhe in der Lageenergie?',
            'Dimensionscheck $\\text{kg}\\cdot\\text{m} \\neq \\text{J}$.',
            '$g = 9{,}81\\,\\text{m/s}^2$ ist immer dabei.',
          ],
          {
            1: '$0{,}8\\,\\text{m}$ ist korrekt — der Fehler liegt nicht in der Höhendifferenz.',
            2: 'Bei Vertauschung wäre das Vorzeichen negativ ($-16$), nicht der Betrag falsch.',
            3: 'Die Masse wird in der Formel in Kilogramm verwendet, kombiniert mit $g$ ergibt sich Newton. Die Einheit ist richtig — der Fehler liegt im fehlenden $g$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['charpy'] },
      ),
      tag(
        ni(
          'Eine Charpy-Messung ergibt $KV = 98{,}1\\,\\text{J}$ mit $m = 20\\,\\text{kg}$ und $h_0 = 1{,}2\\,\\text{m}$. Berechne die Endhöhe $h_1$ in Meter ($g = 9{,}81\\,\\text{m/s}^2$).',
          0.7,
          0.02,
          'm',
          `**Ansatz:** Formel nach $h_1$ umstellen. $KV = m\\,g\\,(h_0 - h_1) \\Rightarrow h_0 - h_1 = KV/(m\\,g) \\Rightarrow h_1 = h_0 - KV/(m\\,g)$.

**Rechnung:** $m\\,g = 20 \\cdot 9{,}81 = 196{,}2\\,\\text{N}$. $KV/(m\\,g) = 98{,}1/196{,}2 = 0{,}5\\,\\text{m}$. Damit $h_1 = 1{,}2 - 0{,}5 = 0{,}7\\,\\text{m}$.

**Probe:** Rückrechnung: $KV = 20 \\cdot 9{,}81 \\cdot (1{,}2 - 0{,}7) = 20 \\cdot 9{,}81 \\cdot 0{,}5 = 98{,}1\\,\\text{J}$ ✓.

**Typischer Fehler:** $h_1 = h_0 + KV/(m\\,g)$ — das Vorzeichen verkehrt; das Pendel verliert nach dem Schlag Höhe, nicht umgekehrt.`,
          [
            'Stelle die KV-Formel nach $h_1$ um.',
            'Zuerst $h_0 - h_1 = KV/(m\\,g)$ ausrechnen.',
            'Dann $h_1 = h_0 - \\text{(Höhendifferenz)}$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['charpy'] },
      ),
    ],

    // ───────────── SG 1: KV ↔ zäh/spröde (kv-zaeh-sproed) ─────────────
    1: [
      tag(
        tf(
          'Ein hoher Wert der Kerbschlagarbeit $KV$ deutet auf zähes Bruchverhalten hin, ein niedriger Wert auf sprödes.',
          true,
          `**Ansatz:** $KV$ misst die Energie, die verbraucht wird, um die Probe zu zerbrechen. Zähe Werkstoffe verformen sich plastisch und absorbieren viel Energie; spröde brechen schlagartig mit minimalem Energieverbrauch.

**Rechnung:** Tabellenwerte (Raumtemperatur): Baustahl S235 zäh $\\approx 100\\,\\text{J}$, Grauguss spröde $\\approx 4\\,\\text{J}$ — Faktor $\\approx 25$.

**Probe:** Bruchfläche zäher Proben: matt, faserig, eingeschnürt. Bruchfläche spröder Proben: glatt, kristallin, glänzend. ✓

**Typischer Fehler:** Hohe $KV$ als „hohe Festigkeit" interpretieren. $KV$ misst nur die Zähigkeit, nicht die Festigkeit $R_m$.`,
          [
            'Was kostet mehr Energie — zäher oder spröder Bruch?',
            'Plastische Verformung absorbiert Energie.',
            'Hoher $KV$-Wert = viel Bruchenergie = zäh.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['kv-zaeh-sproed'] },
      ),
      tag(
        mc(
          'Welcher der folgenden Werkstoffe hat bei Raumtemperatur typischerweise den höchsten $KV$-Wert?',
          [
            'Vergütungsstahl 42CrMo4 ($\\approx 80\\,\\text{J}$)',
            'Grauguss GG-25 ($\\approx 4\\,\\text{J}$)',
            'Hartmetall ($< 5\\,\\text{J}$)',
            'Al$_2$O$_3$-Keramik ($\\approx 1\\,\\text{J}$)',
          ],
          0,
          `**Ansatz:** Werkstoffe mit duktilem Metall-Gefüge (Stähle, Kupfer, Aluminium) haben hohe $KV$. Spröde Werkstoffe (Gusseisen mit Graphitlamellen, Hartmetalle, Keramik) haben sehr niedrige $KV$.

**Rechnung:** 42CrMo4 vergütet: typisch $80\\,\\text{J}$ — zäh durch angelassenen Martensit + Karbide. GG-25: Graphitlamellen wirken als innere Kerben → spröde, $\\approx 4\\,\\text{J}$. Hartmetall, Keramik: nahezu keine plastische Verformung.

**Probe:** DIN EN 10083 (Vergütungsstähle) listet $KV \\geq 27\\,\\text{J}$ als Mindestwert; reale 42CrMo4-Proben erreichen oft $50$–$100\\,\\text{J}$. ✓

**Typischer Fehler:** Härte mit Zähigkeit verwechseln — Hartmetall ist sehr hart ($\\approx 1500\\,\\text{HV}$), aber spröde (niedrige $KV$).`,
          [
            'Welche Werkstoffklasse verhält sich zäh, welche spröde?',
            'Stähle haben deutlich höhere $KV$-Werte als Keramik oder Gusseisen.',
            'Vergütung erhöht die Zähigkeit gegenüber rein gehärtetem Stahl.',
          ],
          {
            1: 'Grauguss ist ein klassisches sprödes Material — die Graphitlamellen wirken als innere Kerben und reduzieren $KV$ drastisch.',
            2: 'Hartmetall ist sehr hart, aber extrem spröde — typische $KV$-Werte unter $5\\,\\text{J}$.',
            3: 'Keramik ist der spröde Werkstoff par excellence — nahezu keine plastische Verformung, kleinste $KV$-Werte.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['kv-zaeh-sproed'] },
      ),
      tag(
        mc(
          'Eine Charpy-Messung an einer unbekannten Probe ergibt $KV = 5\\,\\text{J}$. Wie ist das Bruchverhalten einzuschätzen?',
          [
            'Spröder Bruch — die Probe brach mit kaum Energieaufnahme. Werkstoff sprödbruchgefährdet.',
            'Zäher Bruch — der Werkstoff hat viel Energie aufgenommen.',
            'Mittelmäßiges Verhalten — typisch für unlegierten Baustahl bei Raumtemperatur.',
            'Die Probe war nicht ausreichend gekerbt — Messwert nicht aussagekräftig.',
          ],
          0,
          `**Ansatz:** $KV$-Werte einordnen: $< 10\\,\\text{J}$ deutet auf sprödes Verhalten hin, $> 50\\,\\text{J}$ auf zähes.

**Rechnung:** $5\\,\\text{J} \\ll 27\\,\\text{J}$ (Stahlbau-Grenzwert) → sprödbruchgefährdet. Typische Werkstoffe in diesem Bereich: Grauguss, gehärteter Werkzeugstahl bei niedriger Anlasstemperatur, spröde Kunststoffe.

**Probe:** Bruchflächenuntersuchung erwartet: glatte, glänzende Bruchfläche, kein Einschnüren der Probe, kristalline Struktur sichtbar. ✓

**Typischer Fehler:** $5\\,\\text{J}$ als ausreichend ansehen — der Grenzwert für Stahlbau-Anwendungen ist mehr als das Fünffache.`,
          [
            'Vergleiche mit dem 27-J-Grenzwert aus dem Stahlbau.',
            '$5\\,\\text{J}$ ist deutlich darunter — was bedeutet das?',
            'Wenige Joule = wenig Bruchenergie = spröde.',
          ],
          {
            1: '$5\\,\\text{J}$ ist ein typischer Spröde-Wert; ein zäher Bruch hätte $> 50\\,\\text{J}$.',
            2: 'Unlegierter Baustahl S235 hat bei Raumtemperatur typisch $> 60\\,\\text{J}$ — nicht $5\\,\\text{J}$.',
            3: 'Charpy-Proben sind normiert gekerbt (DIN EN ISO 148-1). Der Wert ist aussagekräftig, sofern die Probe normgerecht war.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['kv-zaeh-sproed'] },
      ),
      tag(
        mc(
          'Eine Studentin schließt aus $KV = 120\\,\\text{J}$: „Dieser Werkstoff hat eine höhere Zugfestigkeit $R_m$ als ein Werkstoff mit $KV = 60\\,\\text{J}$." Wo liegt der Fehler?',
          [
            'Kerbschlagarbeit und Zugfestigkeit sind **unabhängige** Kennwerte — ein zäher Werkstoff kann sogar niedrigere $R_m$ haben als ein spröder. $KV$ misst Zähigkeit, nicht Festigkeit.',
            '$KV$ ist immer kleiner als $R_m$ — die Werte sind nicht vergleichbar.',
            '$KV$ und $R_m$ sind dieselbe Größe in anderen Einheiten.',
            'Höhere $KV$ bedeutet automatisch höhere Streckgrenze $R_e$.',
          ],
          0,
          `**Ansatz:** Charpy misst Bruchenergie, Zugversuch misst maximale Spannung — zwei voneinander unabhängige Werkstoffeigenschaften.

**Rechnung:** Gegenbeispiel: Vergütungsstahl 42CrMo4 hat $R_m \\approx 1000\\,\\text{MPa}$ und $KV \\approx 80\\,\\text{J}$. Spröder Gusseisen GG-25 hat $R_m \\approx 250\\,\\text{MPa}$, aber $KV \\approx 4\\,\\text{J}$. Andererseits hat reines Aluminium niedrige $R_m$ und gleichzeitig moderates $KV$.

**Probe:** Werkstoffdatenblatt: $R_m$, $R_e$ und $KV$ werden getrennt ausgewiesen — eindeutig unabhängige Kennwerte. ✓

**Typischer Fehler:** „Mehr Zähigkeit = mehr Festigkeit" als Daumenregel verallgemeinern. Stimmt nur in begrenztem Maße innerhalb einer Werkstoffklasse.`,
          [
            'Welche Werkstoffeigenschaft misst Charpy, welche misst der Zugversuch?',
            'Können zwei unabhängige Größen direkt aufeinander geschlossen werden?',
            'Beispiel: spröder Vergleichsstoff vs. zähes weiches Metall.',
          ],
          {
            1: 'Die Werte können nicht direkt verglichen werden, aber das liegt an der Bedeutung, nicht an der Größenordnung. Ein zäher Werkstoff kann höhere oder niedrigere $R_m$ haben.',
            2: '$KV$ in Joule und $R_m$ in MPa sind völlig verschiedene physikalische Größen — keine Einheitenkonversion möglich.',
            3: 'Streckgrenze $R_e$ und $KV$ sind ebenfalls unabhängig — ein zäher Stahl muss nicht automatisch eine hohe Streckgrenze haben.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['kv-zaeh-sproed'] },
      ),
      tag(
        matching(
          'Ordne den $KV$-Wertebereich dem typischen Werkstoff zu (alle Werte bei Raumtemperatur).',
          [
            { left: 'Grauguss GG-25 (Graphitlamellen wirken als Kerben)',     right: '$\\approx 4\\,\\text{J}$' },
            { left: 'Baustahl S235 bei $+20\\,°\\text{C}$ (zäh)',               right: '$\\approx 100\\,\\text{J}$' },
            { left: 'Baustahl S235 bei $-40\\,°\\text{C}$ (sprödbruch)',         right: '$\\approx 10\\,\\text{J}$' },
            { left: 'Vergüteter 42CrMo4',                                       right: '$\\approx 50\\,\\text{J}$' },
          ],
          `**Ansatz:** $KV$-Werte hängen stark von Werkstoff UND Temperatur ab. Spröde Werkstoffe (Grauguss) haben unter $10\\,\\text{J}$, zähe Stähle bei Raumtemperatur $50$–$200\\,\\text{J}$. Tieftemperatur drückt selbst zähe Stähle in den spröden Bereich.

**Rechnung:** GG-25: $\\approx 4\\,\\text{J}$ (Graphitlamellen-Effekt). S235 bei RT: $\\approx 100\\,\\text{J}$ (sehr zäh). S235 bei $-40\\,°\\text{C}$: Sprödbruchgefahr, deutlicher Abfall auf $\\approx 10\\,\\text{J}$. 42CrMo4: dazwischen, hohe Festigkeit + brauchbare Zähigkeit.

**Probe:** Werte aus DIN-Tabellen und Werkstoffdatenblättern entnommen. Reihenfolge $4 < 10 < 50 < 100\\,\\text{J}$ ist eindeutig — keine Mehrdeutigkeit. ✓

**Typischer Fehler:** Werkstoffe ohne Temperaturangabe vergleichen. Der gleiche S235 hat bei RT und bei $-40\\,°\\text{C}$ völlig unterschiedliche $KV$-Werte.`,
          [
            'Vier verschiedene Größenordnungen: $4 / 10 / 50 / 100\\,\\text{J}$.',
            'Spröde Werkstoffe ganz unten, zäher Baustahl ganz oben.',
            'Temperatur beeinflusst das Verhalten — gleiche Sorte, andere Temp = anderes $KV$.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['kv-zaeh-sproed'] },
      ),
    ],

    // ───────────── SG 2: 27-J-Grenzwert (grenzwert-27) ─────────────
    2: [
      tag(
        tf(
          'Im Stahlbau gilt $KV \\geq 27\\,\\text{J}$ bei Einsatztemperatur als Untergrenze für sprödbruchsichere Konstruktionen.',
          true,
          `**Ansatz:** Der Grenzwert ist in DIN EN 1993 (Eurocode 3) und in den Werkstoffnormen für Baustähle festgelegt. Er trennt zähes von sprödem Versagensverhalten.

**Rechnung:** Stähle mit $KV < 27\\,\\text{J}$ können bei stoßartiger Belastung schlagartig versagen, ohne dass sich vorher Verformung zeigt — gefährlich bei Brücken, Behältern, Kränen.

**Probe:** Stahlsorten-Bezeichnungen (z. B. S235**J2**, S355**K2**) referenzieren genau diesen Wert: J = $27\\,\\text{J}$ bei zugehöriger Prüftemperatur. ✓

**Typischer Fehler:** $27\\,\\text{J}$ als Universal-Grenzwert ohne Temperaturbezug verwenden. Der Grenzwert gilt **bei Einsatztemperatur**.`,
          [
            'Welcher Wert wird in Stahlnormen als Untergrenze festgelegt?',
            'Auf welche Temperatur bezieht sich der Wert?',
            '$J0$, $J2$, $K2$ — was bedeutet das „J"?',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['grenzwert-27'] },
      ),
      tag(
        mc(
          'Welcher der folgenden Werkstoffe erfüllt die $27\\,\\text{J}$-Anforderung für eine Stahlbau-Konstruktion bei Einsatztemperatur **nicht**?',
          [
            'Werkstoff A mit $KV = 15\\,\\text{J}$ bei Einsatztemperatur',
            'Werkstoff B mit $KV = 35\\,\\text{J}$ bei Einsatztemperatur',
            'Werkstoff C mit $KV = 50\\,\\text{J}$ bei Einsatztemperatur',
            'Werkstoff D mit $KV = 100\\,\\text{J}$ bei Einsatztemperatur',
          ],
          0,
          `**Ansatz:** Grenzwert $KV \\geq 27\\,\\text{J}$ vergleichen. Werkstoffe oberhalb sind in Ordnung, darunter nicht.

**Rechnung:** A: $15 < 27$ → erfüllt **nicht**. B, C, D: alle $\\geq 27$, alle erfüllt.

**Probe:** Werkstoff A würde im Stahlbau abgelehnt; eine Vergütung oder ein anderer Stahl wäre nötig. ✓

**Typischer Fehler:** „Werkstoff B mit nur $35\\,\\text{J}$ ist zu knapp" — solange der Wert über $27\\,\\text{J}$ liegt, ist die Anforderung formal erfüllt.`,
          [
            'Liste alle Werte und vergleiche mit dem Grenzwert $27\\,\\text{J}$.',
            'Genau einer der vier Werte ist kleiner.',
            'Werkstoff A liegt unterhalb des Grenzwerts.',
          ],
          {
            1: '$35\\,\\text{J} > 27\\,\\text{J}$ — die Anforderung ist erfüllt, auch wenn die Reserve klein ist.',
            2: '$50\\,\\text{J} > 27\\,\\text{J}$ — gute Reserve, anforderungskonform.',
            3: '$100\\,\\text{J} > 27\\,\\text{J}$ — deutlich über dem Grenzwert, sicher.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['grenzwert-27'] },
      ),
      tag(
        mc(
          'Eine Werkstoffprüfung ergibt für einen Baustahl bei der vorgesehenen Einsatztemperatur $KV = 27\\,\\text{J}$ exakt. Wie ist das Ergebnis im Sinne der Stahlbau-Norm zu bewerten?',
          [
            'Anforderung gerade erfüllt — der Stahl ist **formal** zulässig, jedoch ohne Sicherheitsreserve. In der Praxis wird oft ein höherer Wert verlangt.',
            'Anforderung nicht erfüllt — der Grenzwert muss überschritten werden.',
            'Anforderung deutlich übererfüllt — sehr gut zäher Werkstoff.',
            'Wert nicht aussagekräftig — Charpy-Tests müssen immer drei Proben mitteln.',
          ],
          0,
          `**Ansatz:** Der Norm-Grenzwert ist $KV \\geq 27\\,\\text{J}$ — mit Gleichheitszeichen gerade erfüllt.

**Rechnung:** $KV = 27\\,\\text{J}$ erfüllt die Bedingung $KV \\geq 27\\,\\text{J}$. Allerdings besteht keine Sicherheitsreserve gegen Streuung — in der Praxis verlangt man oft Stahlsorten, die $30$–$50\\,\\text{J}$ erreichen.

**Probe:** In Stahlnormen ist der J-Wert als Mindestwert definiert; eine Charpy-Probe darf exakt diesen Wert erreichen — sie muss ihn nicht überschreiten. ✓

**Typischer Fehler:** „$\\geq$" als „$>$" interpretieren. In Normen schließt das Gleichheitszeichen mit ein.`,
          [
            'Was bedeutet $\\geq$ in einer Norm-Anforderung?',
            'Charpy-Tests werden in der Regel als Mittelwert von 3 Proben angegeben.',
            'Sicherheitsreserve vs. formale Erfüllung.',
          ],
          {
            1: 'Das $\\geq$-Zeichen schließt den Gleichheitsfall ein — der Stahl ist formal zulässig.',
            2: '$27\\,\\text{J}$ entspricht exakt dem Grenzwert — von „deutlich übererfüllt" kann keine Rede sein.',
            3: 'Ja, üblich sind 3 Proben mit Mittelwertbildung — aber das macht den Wert nicht „nicht aussagekräftig", sondern erst belastbar.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['grenzwert-27'] },
      ),
      tag(
        mc(
          'Ein Konstrukteur dokumentiert: „Werkstoff X bestanden — $KV = 27\\,\\text{kg}$." Welcher Fehler liegt vor?',
          [
            'Falsche Einheit: Kerbschlagarbeit hat die Einheit **Joule** (J), nicht Kilogramm — die Aussage ist physikalisch unsinnig.',
            'Der Werkstoff hat nicht bestanden — $27\\,\\text{kg}$ liegt unter dem Grenzwert.',
            '$27$ Kilogramm entsprechen $27 \\cdot 9{,}81 \\approx 265\\,\\text{J}$ — der Werkstoff hat sehr gut bestanden.',
            'Die Werkstoffbezeichnung „X" ist nicht zulässig — es müsste eine Werkstoffnummer angegeben werden.',
          ],
          0,
          `**Ansatz:** Kerbschlagarbeit ist eine Energiegröße — Einheit Joule. „Kilogramm" ist eine Massen-Einheit, dimensionsfremd.

**Rechnung:** $KV$ entsteht aus $m\\,g\\,(h_0 - h_1)$ — Einheit $\\text{kg}\\cdot\\text{m/s}^2\\cdot\\text{m} = \\text{N\\,m} = \\text{J}$. Die Angabe in Kilogramm ist sachlich falsch.

**Probe:** Norm-Notation in DIN-Datenblättern: $KV$ wird ausschließlich in Joule angegeben. ✓

**Typischer Fehler:** Verwechslung mit alter Einheit „kpm" (Kilopondmeter) — historisch genutzt, aber heute durch Joule ersetzt. Auch dabei wird **nicht** „kg" geschrieben.`,
          [
            'Welche physikalische Größe wird bei Charpy gemessen?',
            'Welche Einheit hat eine Energiegröße im SI-System?',
            'Joule = $\\text{N\\,m}$, niemals Kilogramm.',
          ],
          {
            1: 'Der Vergleich ist falsch begründet — die Einheit ist gar nicht vergleichbar, weil $\\text{kg}$ keine Energieeinheit ist.',
            2: 'Es gibt keine direkte Umrechnung „Kilogramm in Joule" für Kerbschlagarbeit — die Einheit ist schlicht falsch.',
            3: 'Werkstoffbezeichnungen sind hier nicht das Problem — der Hauptfehler ist die Einheit.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['grenzwert-27'] },
      ),
      tag(
        mc(
          'Für eine geschweißte Brückenkonstruktion wird im Winter eine Einsatztemperatur von $-20\\,°\\text{C}$ angenommen. Welcher Stahl ist sprödbruchsicher auszuwählen?',
          [
            'Ein Stahl mit garantierter Kerbschlagarbeit $KV \\geq 27\\,\\text{J}$ **bei $-20\\,°\\text{C}$** (z. B. S355J2)',
            'Ein beliebiger S235 — die Norm gilt für jeden Stahl gleich',
            'Ein Stahl mit $KV \\geq 27\\,\\text{J}$ bei Raumtemperatur reicht aus',
            'Ein gehärteter Werkzeugstahl — höhere Härte = besser sprödbruchsicher',
          ],
          0,
          `**Ansatz:** Der Grenzwert $KV \\geq 27\\,\\text{J}$ muss **bei Einsatztemperatur** erfüllt sein, nicht bei Raumtemperatur. Stähle werden mit J-Index (Prüftemperatur) gekennzeichnet.

**Rechnung:** S355J2: $J = 27\\,\\text{J}$ bei $-20\\,°\\text{C}$ garantiert. Für eine Brücke bei $-20\\,°\\text{C}$ ist das die richtige Wahl. Ein S235JR (Raumtemperatur-Prüfung) erfüllt die Anforderung bei $-20\\,°\\text{C}$ **nicht** automatisch — er kann unter die Übergangstemperatur fallen.

**Probe:** Eurocode 3 (DIN EN 1993-1-10) gibt verbindliche Auswahlregeln für sprödbruchsichere Stähle in Abhängigkeit von Bauteildicke, Belastungsart und tiefster Einsatztemperatur. ✓

**Typischer Fehler:** Stahlsorten ohne J-Index für Tieftemperatur einsetzen.`,
          [
            'Bei welcher Temperatur wurde der Stahl geprüft?',
            'J2 = $-20\\,°\\text{C}$, K2 = $-40\\,°\\text{C}$.',
            'Härte und Sprödbruchsicherheit haben nichts miteinander zu tun.',
          ],
          {
            1: 'S235 ohne J-Index (= JR, Raumtemperatur) ist für $-20\\,°\\text{C}$ **nicht** ausgelegt.',
            2: 'Der Grenzwert muss bei der **tatsächlichen** Einsatztemperatur erfüllt sein — bei $-20\\,°\\text{C}$ und nicht bei $+20\\,°\\text{C}$.',
            3: 'Gehärtete Werkzeugstähle sind in der Regel **sprödbruchgefährdet** ($KV \\ll 27\\,\\text{J}$) und damit für Stahlbau ungeeignet.',
          },
        ),
        { stage: 'transfer', subGoal: 2, uses: ['grenzwert-27'] },
      ),
    ],

    // ───────────── SG 3: Übergangstemperatur (uebergangstemp) ─────────────
    3: [
      tag(
        tf(
          'Unterhalb der Übergangstemperatur $T_\\ddot{U}$ fällt die Kerbschlagarbeit eines krz-Stahls (ferritisch-perlitisch) deutlich ab — der Werkstoff verhält sich zunehmend spröde.',
          true,
          `**Ansatz:** Bei krz-Metallen (z. B. unlegierter Baustahl) hängt die Versetzungsmobilität stark von der Temperatur ab. Unterhalb einer kritischen Temperatur reicht die thermische Aktivierung nicht mehr, die Probe bricht spröde.

**Rechnung:** Die typische Charpy-Kurve $KV(T)$ zeigt drei Bereiche: Hochlage (zäh, $KV \\approx 100$–$200\\,\\text{J}$), Übergangsbereich (Steilabfall), Tieflage (spröde, $KV < 20\\,\\text{J}$). Der Übergang liegt bei vielen Baustählen zwischen $-50\\,°\\text{C}$ und $0\\,°\\text{C}$.

**Probe:** Spektakulärer Praxisfall: Titanic-Stahl wies bei den niedrigen Atlantikwassertemperaturen bereits unter die Übergangstemperatur — Sprödbruch trug zum Untergang bei. ✓

**Typischer Fehler:** Übergangstemperatur bei austenitischen Edelstählen (kfz) erwarten — die zeigen keinen ausgeprägten Steilabfall und bleiben auch bei sehr tiefen Temperaturen zäh.`,
          [
            'Wie hängt die Versetzungsbewegung in krz-Metallen von der Temperatur ab?',
            'Was passiert mit $KV$, wenn man die Probe abkühlt?',
            'Krz vs. kfz: nur krz zeigt diesen Effekt.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['uebergangstemp'] },
      ),
      tag(
        mc(
          'Wie ist die Übergangstemperatur $T_\\ddot{U}$ definiert?',
          [
            'Temperatur, bei der die Kerbschlagarbeit von „zäh" auf „spröde" umschlägt (oft fixiert als $KV = 27\\,\\text{J}$- oder $50\\,\\%$-Bruchflächen-Kriterium)',
            'Temperatur, bei der der Werkstoff schmilzt',
            'Temperatur, bei der der Stahl aus Ferrit in Austenit umwandelt ($\\approx 723\\,°\\text{C}$)',
            'Raumtemperatur ($20\\,°\\text{C}$) als Norm-Prüftemperatur',
          ],
          0,
          `**Ansatz:** Es gibt mehrere Kriterien zur Definition von $T_\\ddot{U}$: das $KV$-Energie-Kriterium ($T_{27\\text{J}}$) und das Bruchflächen-Kriterium ($50\\,\\%$ kristalline Bruchfläche, FATT). In der Praxis dominiert die $27\\,\\text{J}$-Definition für Stahlbau.

**Rechnung:** Im $KV(T)$-Diagramm: Steilabfallkurve. $T_\\ddot{U}$ wird dort abgelesen, wo $KV = 27\\,\\text{J}$ (oder $50\\,\\%$ Faseranteil) erreicht wird. Für S235 typisch um $-20\\,°\\text{C}$ bis $0\\,°\\text{C}$.

**Probe:** Werkstoff-Datenblätter geben oft den $27\\,\\text{J}$-Wert für mehrere Temperaturen an — daraus kann $T_\\ddot{U}$ abgelesen werden. ✓

**Typischer Fehler:** Übergangstemperatur mit Phasenumwandlungstemperatur verwechseln (z. B. $A_1 = 723\\,°\\text{C}$ im Fe-C-Diagramm).`,
          [
            'Was wechselt am Übergang — Aggregatzustand, Phase oder Bruchverhalten?',
            'Energiebasiert oder bruchflächenbasiert — beides sind Definitionsvarianten.',
            'Der $27\\,\\text{J}$-Wert ist das übliche Kriterium.',
          ],
          {
            1: 'Schmelzpunkt von Stahl liegt bei $\\approx 1500\\,°\\text{C}$ — das hat mit der Charpy-Übergangstemperatur nichts zu tun.',
            2: '$A_1 = 723\\,°\\text{C}$ ist die Phasenumwandlung Ferrit/Perlit → Austenit (Fe-C-Diagramm) — eine völlig andere Größe.',
            3: 'Raumtemperatur ist nur eine Norm-Prüftemperatur (JR-Stähle), aber nicht die Definition der Übergangstemperatur.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['uebergangstemp'] },
      ),
      tag(
        mc(
          'Ein Baustahl S235 hat $T_\\ddot{U} = -10\\,°\\text{C}$ (definiert über $KV = 27\\,\\text{J}$). Bei welcher Betriebstemperatur ist Sprödbruch nicht mehr ausgeschlossen?',
          [
            'Bei $-30\\,°\\text{C}$ — deutlich unterhalb $T_\\ddot{U}$, Sprödbruchgefahr.',
            'Bei $+20\\,°\\text{C}$ — Raumtemperatur, der Stahl ist sicher zäh.',
            'Bei $+50\\,°\\text{C}$ — oberhalb $T_\\ddot{U}$ ist der Stahl sicher zäh.',
            'Bei $0\\,°\\text{C}$ — nahe $T_\\ddot{U}$, jedoch oberhalb, also noch sicher.',
          ],
          0,
          `**Ansatz:** Sprödbruch droht **unterhalb** der Übergangstemperatur. Vergleich Betriebstemperatur ↔ $T_\\ddot{U}$.

**Rechnung:** $T_\\ddot{U} = -10\\,°\\text{C}$. Bei $-30\\,°\\text{C}$ ist $T < T_\\ddot{U}$ → spröder Bereich → Gefahr. Bei $+20\\,°\\text{C}$ und $+50\\,°\\text{C}$ ist $T > T_\\ddot{U}$ → zäher Bereich.

**Probe:** In Norm-Datenblättern wird auch für $-10\\,°\\text{C}$ und kälter eine zusätzliche Sicherheits-Marge gefordert ($\\Delta T \\geq 10\\,\\text{K}$). $-30\\,°\\text{C}$ liegt $20\\,\\text{K}$ unter $T_\\ddot{U}$ — klare Gefährdung. ✓

**Typischer Fehler:** $0\\,°\\text{C}$ als „nahe an $T_\\ddot{U}$, daher kritisch" einstufen. Tatsächlich ist es noch oberhalb $T_\\ddot{U}$ (formaler Sicherheitsbereich), wenn auch mit knapper Reserve.`,
          [
            'Vergleiche Betriebstemperatur mit $T_\\ddot{U}$.',
            'Unterhalb $T_\\ddot{U}$ ist Sprödbruch wahrscheinlich.',
            'Welche der Temperaturen ist die einzige unter $-10\\,°\\text{C}$?',
          ],
          {
            1: '$+20\\,°\\text{C}$ ist deutlich oberhalb $-10\\,°\\text{C}$ — der Stahl ist im zähen Bereich, kein Sprödbruch zu erwarten.',
            2: '$+50\\,°\\text{C}$ ist noch weiter oberhalb $T_\\ddot{U}$ — sehr sicher im zähen Bereich.',
            3: '$0\\,°\\text{C}$ liegt oberhalb $-10\\,°\\text{C}$ → noch im zähen Bereich. In der Praxis empfiehlt sich allerdings eine $\\Delta T$-Reserve.',
          },
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['uebergangstemp'] },
      ),
      tag(
        mc(
          'Ein Studierender erklärt: „Die Übergangstemperatur ist die Temperatur, bei der ein Stahl schmilzt." Wo liegt der Fehler?',
          [
            'Schmelztemperatur ($\\approx 1500\\,°\\text{C}$ bei Stahl) und Charpy-Übergangstemperatur ($\\approx 0\\,°\\text{C}$ bei Baustahl) sind völlig verschiedene Konzepte. $T_\\ddot{U}$ beschreibt den Wechsel zäh ↔ spröde, kein Aggregatzustand.',
            'Die Übergangstemperatur ist eigentlich die Glühtemperatur bei der Wärmebehandlung.',
            'Die Übergangstemperatur ist die Eutektische Temperatur des Fe-C-Diagramms.',
            'Die Aussage ist korrekt — Schmelz- und Übergangstemperatur sind synonym.',
          ],
          0,
          `**Ansatz:** Bei der Charpy-Übergangstemperatur bleibt der Werkstoff fest — nur das Bruchverhalten wechselt von zäh zu spröde. Schmelzen ist ein Phasenübergang fest → flüssig bei deutlich höherer Temperatur.

**Rechnung:** Stahl schmilzt bei $\\approx 1500\\,°\\text{C}$. Die Charpy-$T_\\ddot{U}$ vieler Baustähle liegt zwischen $-50\\,°\\text{C}$ und $+20\\,°\\text{C}$ — Differenz $\\geq 1450\\,\\text{K}$.

**Probe:** Beim Charpy-Versuch bei $-20\\,°\\text{C}$ ist der Stahl natürlich fest — er bricht nur spröder als bei höheren Temperaturen. ✓

**Typischer Fehler:** Den Begriff „Übergang" zu schnell mit Schmelzen oder Phasenumwandlung verbinden, ohne den Kontext zu prüfen.`,
          [
            'Was passiert bei der Charpy-Übergangstemperatur physikalisch?',
            'Verhältnis $T_\\ddot{U}$ zur Schmelztemperatur in Größenordnung?',
            'Schmelz- und Sprödbruch-Übergang haben ganz andere Größenordnungen.',
          ],
          {
            1: 'Glühtemperaturen liegen je nach Verfahren bei $500$–$900\\,°\\text{C}$ — das ist eine andere Wärmebehandlung, keine Charpy-Größe.',
            2: 'Die eutektoide Temperatur des Fe-C-Systems ist $723\\,°\\text{C}$ — auch eine Phasen-Umwandlung, nicht die Charpy-Übergangstemperatur.',
            3: 'Beide Konzepte sind völlig verschieden — sie haben nicht einmal die gleiche Größenordnung.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['uebergangstemp'] },
      ),
      tag(
        mc(
          'Welche Werkstoffklasse zeigt **keine** ausgeprägte Übergangstemperatur und bleibt auch bei sehr tiefen Temperaturen zäh?',
          [
            'Austenitische Edelstähle (kfz-Gefüge, z. B. X5CrNi18-10)',
            'Unlegierte Baustähle (krz-Gefüge, z. B. S235)',
            'Vergütungsstähle (z. B. 42CrMo4)',
            'Grauguss mit Graphitlamellen',
          ],
          0,
          `**Ansatz:** Krz-Gefüge zeigt einen ausgeprägten Übergang zäh→spröde, kfz-Gefüge nicht. Austenitische Edelstähle sind kfz und behalten ihre Zähigkeit auch bei Kryo-Temperaturen.

**Rechnung:** Tieftemperatur-Anwendungen (LNG-Tanks bei $-160\\,°\\text{C}$, Wasserstoff-Tanks bei $-253\\,°\\text{C}$) werden daher aus austenitischen Stählen gefertigt — Baustähle würden dort sprödbruch-versagen.

**Probe:** $KV$-Diagramme von X5CrNi18-10: $KV$ bleibt von $+100\\,°\\text{C}$ bis $-200\\,°\\text{C}$ nahezu konstant bei $> 100\\,\\text{J}$. ✓

**Typischer Fehler:** „Edelstahl ist immer besser" als Pauschalaussage. Hier geht es um die Kristallstruktur (kfz vs. krz), nicht um die Legierungsbezeichnung.`,
          [
            'Welche Kristallstruktur haben austenitische Edelstähle?',
            'Welche Struktur zeigt den Steilabfall im $KV(T)$-Diagramm?',
            'Tieftemperatur-Anwendungen: welcher Werkstoff?',
          ],
          {
            1: 'Unlegierte Baustähle sind krz und zeigen genau den ausgeprägten Übergang — sie sind das Lehrbuchbeispiel.',
            2: 'Vergütungsstähle sind ebenfalls krz-basiert und haben eine Übergangstemperatur (oft besser als unlegiert, aber existent).',
            3: 'Grauguss ist von vornherein spröde (durch Graphitlamellen) — er hat keine Hochlage, also nicht „bleibt zäh".',
          },
        ),
        { stage: 'transfer', subGoal: 3, uses: ['uebergangstemp'] },
      ),
    ],

    // ───────────── SG 4: J0/J2/K2-Stahlbezeichnungen (stahl-j-bez) ─────────────
    4: [
      tag(
        tf(
          'Die Buchstaben-Ziffer-Kombination im Stahlnamen (z. B. S235**JR**, S355**J0**, S275**J2**, S460**K2**) gibt die Prüftemperatur an, bei der die normierte Kerbschlagarbeit gemessen wird.',
          true,
          `**Ansatz:** In DIN EN 10025 sind diese Zusätze normiert. Das Suffix codiert die **Prüftemperatur** für den Mindest-Kerbschlagwert (typisch $27\\,\\text{J}$): R = $+20\\,°\\text{C}$, 0 = $0\\,°\\text{C}$, 2 = $-20\\,°\\text{C}$, K2 = $-40\\,°\\text{C}$ (bei höherfesten Sorten).

**Rechnung:** Beispiele: S235**JR**: $KV \\geq 27\\,\\text{J}$ bei $+20\\,°\\text{C}$. S355**J2**: $KV \\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$. S460**K2**: Mindest-$KV$ bei $-40\\,°\\text{C}$.

**Probe:** Norm-Liste DIN EN 10025-2: Tabellen-Zuordnung Bezeichnung ↔ Mindestwert ↔ Prüftemperatur. ✓

**Typischer Fehler:** „J" als „Joule" oder „Justierung" interpretieren. Der Buchstabe steht für die Mindestkerbschlagarbeit-**Klasse**, nicht für die Einheit.`,
          [
            'Welche Information codieren der Buchstabe und die Ziffer im Stahlnamen?',
            'Mindestwert vs. Prüftemperatur — welche Komponente codiert was?',
            'JR = Raumtemperatur, K2 = sehr kalt.',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['stahl-j-bez'] },
      ),
      tag(
        mc(
          'Was bedeutet das Suffix „J2" in der Stahlbezeichnung S355J2?',
          [
            'Kerbschlagarbeit $\\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$ garantiert',
            'Kerbschlagarbeit $= 2\\,\\text{Joule}$ (extrem spröde)',
            'Streckgrenze $R_e = 355\\,\\text{MPa} \\cdot 2 = 710\\,\\text{MPa}$',
            'Walzklasse 2 nach DIN — keine Kerbschlag-Angabe',
          ],
          0,
          `**Ansatz:** Code-Schlüssel DIN EN 10025: J = $27\\,\\text{J}$ Mindestwert, Ziffer = Prüftemperatur (0 = $0\\,°\\text{C}$, 2 = $-20\\,°\\text{C}$, 3 = $-30\\,°\\text{C}$).

**Rechnung:** „J2" → $J = 27\\,\\text{J}$ Mindestwert, „2" → Prüftemperatur $-20\\,°\\text{C}$. S355J2 ist also ein Baustahl mit $R_e \\geq 355\\,\\text{MPa}$ und $KV \\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$.

**Probe:** Datenblatt S355J2 (DIN EN 10025-2): exakt diese Werte. ✓

**Typischer Fehler:** „J2" als „2 Joule" lesen — das wäre sprödebruchgefährdet und sinnlos schwach.`,
          [
            'J = ... Mindestkerbschlagarbeit (welcher Wert?).',
            'Ziffer = Prüftemperatur.',
            'Tabelle JR / J0 / J2 = $+20 / 0 / -20\\,°\\text{C}$.',
          ],
          {
            1: '$2\\,\\text{J}$ wäre sprödebruchgefährdet — kein Baustahl würde mit so niedrigem Wert ausgeliefert.',
            2: 'S355 → $R_e = 355\\,\\text{MPa}$ unabhängig vom Suffix. Die Ziffer codiert keine Festigkeit.',
            3: 'Die Walzklasse wird in DIN EN 10025 nicht über das J-Suffix bezeichnet — sie ist eine andere Größe.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['stahl-j-bez'] },
      ),
      tag(
        mc(
          'Für ein Bauteil mit Einsatztemperatur $-10\\,°\\text{C}$ wird Stahl S275J2 gewählt. Ist die Auswahl im Hinblick auf Sprödbruchsicherheit zulässig?',
          [
            'Ja — J2 garantiert $KV \\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$, also auch bei $-10\\,°\\text{C}$ erfüllt.',
            'Nein — J2 gilt nur für Raumtemperatur und ist für $-10\\,°\\text{C}$ unzulässig.',
            'Nein — bei $-10\\,°\\text{C}$ braucht es zwingend K2-Stahl.',
            'Unklar — ohne Charpy-Test bei genau $-10\\,°\\text{C}$ ist keine Aussage möglich.',
          ],
          0,
          `**Ansatz:** Ein Stahl mit zugesicherter Kerbschlagarbeit bei einer **niedrigeren** Prüftemperatur ist bei einer **höheren** Einsatztemperatur erst recht zulässig — die Zähigkeit nimmt mit steigender Temperatur zu.

**Rechnung:** S275J2 → $KV \\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$. Einsatztemperatur $-10\\,°\\text{C}$ liegt $10\\,\\text{K}$ oberhalb der Prüftemperatur → $KV$ ist dort **noch höher**, also sicher über $27\\,\\text{J}$.

**Probe:** Charpy-Hochlage liegt oberhalb der Übergangstemperatur — je wärmer, desto zäher. $KV(-10\\,°\\text{C}) > KV(-20\\,°\\text{C}) \\geq 27\\,\\text{J}$. ✓

**Typischer Fehler:** „Die Prüftemperatur muss exakt mit der Einsatztemperatur übereinstimmen" — falsch. Eine niedrigere Prüftemperatur deckt höhere Einsatztemperaturen automatisch ab.`,
          [
            'Was passiert mit $KV$, wenn man die Probe erwärmt?',
            'Niedrigere Prüftemperatur = stärkere Anforderung = strenger.',
            'Wenn bei $-20\\,°\\text{C}$ erfüllt, dann erst recht bei $-10\\,°\\text{C}$.',
          ],
          {
            1: 'J2 wird bei $-20\\,°\\text{C}$ geprüft (nicht Raumtemperatur) — das ist gerade der Vorteil dieser Sorte.',
            2: 'K2 wäre für Einsatztemperaturen bis $-40\\,°\\text{C}$ erforderlich — bei $-10\\,°\\text{C}$ ist J2 ausreichend.',
            3: 'Norm-Garantie bei $-20\\,°\\text{C}$ deckt höhere Temperaturen ab — kein Charpy-Test bei $-10\\,°\\text{C}$ nötig.',
          },
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['stahl-j-bez'] },
      ),
      tag(
        mc(
          'Ein Konstrukteur schreibt: „Stahl S235J2 mit $KV = 2\\,\\text{J}$". Welcher Fehler liegt vor?',
          [
            'Verwechslung: „J2" ist eine **Norm-Bezeichnung** (Prüftemperatur), kein Messwert — der zugesicherte $KV$-Wert für J2 ist $\\geq 27\\,\\text{J}$.',
            'Die Bezeichnung ist konsistent — J2 bedeutet tatsächlich $2\\,\\text{J}$ Kerbschlagarbeit.',
            'Stahl S235J2 existiert nicht — nur S235JR und S235J0 sind genormt.',
            '$KV = 2\\,\\text{J}$ ist korrekt für S235 bei $-20\\,°\\text{C}$.',
          ],
          0,
          `**Ansatz:** „J2" in der Stahlbezeichnung steht für eine zugesicherte Mindest-Kerbschlagarbeit (J $= 27\\,\\text{J}$) bei der zugehörigen Prüftemperatur (2 = $-20\\,°\\text{C}$).

**Rechnung:** S235J2: $R_e \\geq 235\\,\\text{MPa}$, $KV \\geq 27\\,\\text{J}$ bei $-20\\,°\\text{C}$. Der Wert „$2\\,\\text{J}$" wäre weniger als $1/13$ des garantierten Werts — physikalisch nicht möglich für einen normgerechten J2-Stahl.

**Probe:** Norm DIN EN 10025-2 weist S235J2 explizit aus. Die Norm ist die einzige verlässliche Quelle für die Bedeutung des Suffix. ✓

**Typischer Fehler:** Buchstaben-Ziffer-Code als Einheit oder Messwert lesen.`,
          [
            'Was bedeutet „J" in der Stahlbezeichnung?',
            'Was bedeutet „2" daneben?',
            'Norm vs. Messwert — was ist hier vermischt?',
          ],
          {
            1: '„J2" und „$2\\,\\text{J}$" sind völlig verschiedene Konzepte — die Bezeichnung ist nicht konsistent.',
            2: 'S235J2 ist sehr wohl normiert — DIN EN 10025-2 listet diese Sorte explizit auf.',
            3: 'S235 bei $-20\\,°\\text{C}$ ohne J-Index hätte einen unbestimmten Wert; der J2-Stahl muss aber $\\geq 27\\,\\text{J}$ erreichen.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['stahl-j-bez'] },
      ),
      tag(
        matching(
          'Ordne der Bezeichnung im Stahlnamen die zugehörige Prüftemperatur für die Kerbschlagarbeit $\\geq 27\\,\\text{J}$ zu.',
          [
            { left: 'JR (z. B. S235JR)',  right: '$+20\\,°\\text{C}$ (Raumtemperatur)' },
            { left: 'J0 (z. B. S275J0)',  right: '$0\\,°\\text{C}$' },
            { left: 'J2 (z. B. S355J2)',  right: '$-20\\,°\\text{C}$' },
            { left: 'K2 (z. B. S460K2)',  right: '$-40\\,°\\text{C}$ (Tieftemperatur-Variante höherfester Stähle)' },
          ],
          `**Ansatz:** Norm-Schlüssel DIN EN 10025: das Suffix codiert die Prüftemperatur. R = $+20\\,°\\text{C}$ (Raumtemperatur), 0 = $0\\,°\\text{C}$, 2 = $-20\\,°\\text{C}$, K2 = $-40\\,°\\text{C}$.

**Rechnung:** Beispiele: S235JR → $KV \\geq 27\\,\\text{J}$ bei $+20\\,°\\text{C}$. S275J0 → bei $0\\,°\\text{C}$. S355J2 → bei $-20\\,°\\text{C}$. S460K2 → bei $-40\\,°\\text{C}$.

**Probe:** Reihenfolge der Bezeichnungen entspricht zunehmender Anforderung an die Tieftemperatur-Zähigkeit (JR < J0 < J2 < K2). Jede Prüftemperatur ist eindeutig genau einer Bezeichnung zugeordnet. ✓

**Typischer Fehler:** Die Ziffer „2" als „$-2\\,°\\text{C}$" lesen. Tatsächlich codiert „2" die Prüftemperatur $-20\\,°\\text{C}$.`,
          [
            'Welche Ziffer steht für welche Temperatur?',
            'Welche Buchstaben gibt es und was bedeuten sie?',
            'JR = Raumtemperatur, je höher die Ziffer (0/2/3), desto tiefer die Prüftemperatur.',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['stahl-j-bez'] },
      ),
    ],
  },
}
