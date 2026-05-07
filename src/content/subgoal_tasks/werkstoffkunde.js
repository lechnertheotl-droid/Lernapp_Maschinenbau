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
}
