// ── festigkeitslehre — Topic-Definition (kompakter Scaffold) ─────────────────

export const festigkeitslehreTopicDef = 
{
  topic: {
    id: 'festigkeitslehre',
    title: 'Festigkeitslehre',
    description: 'Spannung, Dehnung, Biegung und Sicherheitsnachweise.',
    subject: 'engineering',
    icon: 'FES',
    color: 'purple',
    estimatedHours: 7,
    difficulty: 4,
    level: 'vertiefung',
    prerequisites: ['technische-mechanik'],
    phase: 'semester-2',
    examRelevance: 'pflicht',
    topicGoals: [
      'Normal- und Schubspannung $\\sigma = F/A$, $\\tau = F/A$ aus Schnittkräften korrekt ableiten',
      'Hooke-Gesetz $\\sigma = E\\,\\varepsilon$ samt Querkontraktion und thermischer Dehnung anwenden',
      'Schnittgrößenverläufe $N(x)$, $Q(x)$, $M(x)$ für Balken mit Einzel- und Streckenlasten zeichnen',
      'Biegespannung $\\sigma_b = M_b / W$ an Querschnitten bestimmen und kritische Fasern erkennen',
      'Zulässige Spannung via Sicherheitsbeiwert $\\nu = R_e / \\sigma_{\\text{zul}}$ nachweisen',
      'Spannungsspitzen an Kerben, Bohrungen und Absätzen über Kerbfaktor $\\alpha_k$ qualitativ einordnen',
    ],
  },
  units: [
    {
      id: 'fest-unit-1',
      title: 'Spannung und Dehnung',
      description: 'Normalspannung, Hooke und Kennwerte.',
      lessons: [
        {
          id: 'fest-1-1',
          title: 'Normalspannung',
          learningGoals: ['Spannung als Kraft pro Fläche verstehen', 'Einheiten korrekt umrechnen'],
          subGoals: [
            { label: '$\\sigma = F/A$ — Kraft normal zur Fläche, Einheit $\\mathrm{N/mm^2 = MPa}$', examRelevance: 'hoch' },
            { label: '1 MPa = 1 N/mm² = $10^6$ Pa: Einheiten-Umrechnung ohne Rechenfehler', examRelevance: 'hoch' },
            { label: 'Zug vs. Druck: Vorzeichenkonvention (+Zug, −Druck) klar halten', examRelevance: 'mittel' },
            { label: 'Querschnittsfläche: bei Kreis $A = \\pi d^2/4$, nicht $\\pi d^2$', examRelevance: 'hoch' },
          ],
          content: String.raw`Die **Normalspannung** ist Kraft pro Querschnittsfläche:

$$\sigma = \frac{F}{A}$$

1 MPa entspricht 1 N/mm². Diese Einheit ist in der Konstruktion sehr praktisch.`,
          visualization: {
            title: 'Spannungs-Dehnungs-Diagramm', visualizationId: 'stress-strain', params: {},
          },
          exercises: [
            { type: 'number-input', question: 'F = 1000 N, A = 100 $mm^2$. Spannung in $N/mm^2$?', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: 'σ = F/A = 1000/100 = 10 $N/mm^2$ = 10 MPa.', hints: ['σ = F/A', 'Einheit: N/mm² = MPa', '1000/100 = 10'] },
            { type: 'multiple-choice', question: 'Welche Einheit passt zu Spannung?', options: ['N', 'Nm', 'Pa', '$m/s^2$'], correctIndex: 2, explanation: 'Spannung ist Kraft pro Fläche, also $N/m^2$ = Pa.', hints: ['Spannung = Kraft pro Fläche: σ = F/A', 'SI-Einheit: N/m² = Pa', 'In der Praxis: N/mm² = MPa'], wrongAnswerExplanations: { 0: 'Newton ist die Einheit der Kraft, nicht der Spannung. Spannung ist Kraft pro Fläche: $\\sigma = F/A$ mit Einheit $\\mathrm{N/m^2} = \\mathrm{Pa}$.', 1: 'Nm ist die Einheit von Moment oder Energie, nicht von Spannung. Spannung hat die Einheit $\\mathrm{N/m^2}$.', 3: '$\\mathrm{m/s^2}$ ist die Einheit der Beschleunigung. Spannung ist $\\sigma = F/A$ in $\\mathrm{Pa} = \\mathrm{N/m^2}$.' } },
            { type: 'true-false', statement: 'Bei gleicher Kraft sinkt die Spannung, wenn die Fläche größer wird.', correct: true, explanation: 'σ = F/A; größere Fläche bedeutet kleinere Spannung.', hints: ['σ = F/A — A im Nenner.', 'Größere Fläche → kleinere Spannung bei gleicher Kraft.', 'σ ∝ 1/A'] },
          ],
        },
        {
          id: 'fest-1-2',
          title: 'Hookesches Gesetz',
          learningGoals: ['Linearen elastischen Bereich erkennen', 'E-Modul interpretieren'],
          subGoals: [
            { label: '$\\sigma = E\\,\\varepsilon$ im linear-elastischen Bereich — nur hier gilt Hooke', examRelevance: 'hoch' },
            { label: 'Dehnung $\\varepsilon = \\Delta l / l_0$ dimensionslos; oft in ‰ oder %', examRelevance: 'hoch' },
            { label: 'E-Modul ist **Material-Konstante**, unabhängig von Geometrie (Stahl $\\approx 210\\,\\mathrm{GPa}$)', examRelevance: 'hoch' },
            { label: 'Querkontraktion $\\varepsilon_q = -\\nu\\,\\varepsilon$ mit Poisson-Zahl $\\nu \\approx 0{,}3$ (Stahl)', examRelevance: 'mittel' },
          ],
          content: String.raw`Im linear-elastischen Bereich gilt:

$$\sigma = E \cdot \varepsilon$$

Der E-Modul beschreibt die Steifigkeit des Materials. Stahl hat ungefähr $E = 210000$ MPa.`,
          visualization: { title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {} },
          exercises: [
            { type: 'number-input', question: 'Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ.', correctValue: 200, tolerance: 0.01, unit: 'MPa', explanation: 'σ = E·ε = 200000·0,001 = 200 MPa.', hints: ['Hookesches Gesetz: σ = E · ε', 'ε ist dimensionslos (Längenänderung / Ausgangslänge).', '200000 · 0,001 = 200 MPa'] },
            { type: 'multiple-choice', question: 'Ein größerer E-Modul bedeutet:', options: ['geringere Steifigkeit', 'höhere Steifigkeit', 'immer höhere Dichte', 'keine elastische Verformung'], correctIndex: 1, explanation: 'Je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig.', hints: ['E-Modul = Steigung im σ-ε-Diagramm im elastischen Bereich.', 'Größeres E → mehr Spannung für gleiche Dehnung.', 'E ↑ bedeutet: steiferes Material.'], wrongAnswerExplanations: { 0: 'Umgekehrte Deutung: Aus $\\sigma = E \\cdot \\varepsilon$ folgt $\\varepsilon = \\sigma/E$ — großes $E$ heißt kleine Dehnung bei gleicher Spannung, also höhere Steifigkeit, nicht geringere.', 2: 'E-Modul und Dichte sind unabhängig. Beispiel: Stahl $E \\approx 210\\,000$ MPa, $\\rho \\approx 7{,}85\\,\\mathrm{g/cm^3}$; Beryllium hat höheres $E/\\rho$.', 3: 'Elastische Verformung folgt dem Hookeschen Gesetz $\\sigma = E \\cdot \\varepsilon$. Auch bei großem $E$ gibt es Verformung — sie ist nur kleiner.' } },
            { type: 'true-false', statement: 'Hooke gilt uneingeschränkt bis zum Bruch.', correct: false, explanation: 'Hooke gilt nur im linear-elastischen Bereich.', hints: ['Hooke gilt nur im linear-elastischen Bereich.', 'Ab der Streckgrenze Re beginnt plastische Verformung.', 'Hooke ≠ gültig bis zum Bruch!'] },
          ],
        },
        {
          id: 'fest-1-3',
          title: 'Schubspannung und Torsion',
          learningGoals: ['Torsionswiderstandsmoment berechnen', 'Maximale Schubspannung einer Welle bestimmen'],
          subGoals: [
            { label: 'Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$', examRelevance: 'hoch' },
            { label: 'Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$', examRelevance: 'hoch' },
            { label: 'Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$', examRelevance: 'hoch' },
            { label: 'Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)', examRelevance: 'mittel' },
            { label: 'Reiner Schub (Niet, Bolzen): $\\tau = F/A$', examRelevance: 'hoch' },
          ],
          content: String.raw`**Torsion** eines Kreisquerschnitt-Stabes (Durchmesser $d$, Länge $L$):

$$\tau_{\max} = \frac{M_T}{W_p}, \qquad W_p = \frac{\pi d^3}{16}$$

$$\varphi = \frac{M_T \cdot L}{G \cdot I_p}, \qquad I_p = \frac{\pi d^4}{32}$$

$G$ ist der **Schubmodul** (Stahl: $G \approx 80000$ MPa). Bei reiner Schubspannung (z.B. Niet, Bolzen):

$$\tau = \frac{F}{A}$$`,
          visualization: {
            title: 'Mohr\'scher Kreis: Schubspannungszustand visualisieren',
            visualizationId: 'mohr-circle',
            params: {},
          },
          exercises: [
            {
              type: 'number-input',
              question: 'Berechne das Torsionswiderstandsmoment $W_p$ für eine Welle mit $d = 40$ mm.',
              correctValue: 12566,
              tolerance: 100,
              unit: 'mm³',
              explanation: '**Ansatz:** Vollkreis-Welle: $W_p = \\pi d^3/16$.\n\n**Rechnung:** $d^3 = 40^3 = 64\\,000\\,\\text{mm}^3$. $W_p = \\pi\\cdot 64\\,000/16 = \\pi\\cdot 4\\,000 \\approx 12\\,566\\,\\text{mm}^3$.\n\n**Probe:** Faktor $\\pi/16 \\approx 0{,}1963$, also $W_p \\approx 0{,}1963\\cdot 64\\,000 \\approx 12\\,566$. ✓ Einheit $\\text{mm}^3$ passt zum Widerstandsmoment.\n\n**Typischer Fehler:** Formel mit $/32$ verwechseln (das ist das **Flächenträgheits**moment $I_p = \\pi d^4/32$, nicht $W_p$) oder $d^2$ statt $d^3$ einsetzen.',
              hints: ['$W_p = \\pi\\cdot d^3/16$ (Widerstandsmoment, nicht Trägheitsmoment)', '$d^3 = 40^3 = 64\\,000\\,\\text{mm}^3$', '$\\pi\\cdot 64\\,000/16 \\approx 12\\,566\\,\\text{mm}^3$'],
            },
            {
              type: 'number-input',
              question: 'Welle mit $d = 40$ mm und Torsionsmoment $M_T = 200$ Nm. Berechne die maximale Schubspannung $\\tau_{\\max}$ in N/mm².',
              correctValue: 15.9,
              tolerance: 0.5,
              unit: 'N/mm²',
              explanation: '**Ansatz:** $\\tau_\\text{max} = M_T/W_p$. Einheiten konsistent: $M_T$ in Nmm, $W_p$ in mm³ ⇒ $\\tau$ in N/mm².\n\n**Rechnung:** $M_T = 200\\,\\text{Nm} = 200\\,000\\,\\text{Nmm}$. $W_p = \\pi\\cdot 40^3/16 \\approx 12\\,566\\,\\text{mm}^3$. $\\tau_\\text{max} = 200\\,000/12\\,566 \\approx 15{,}9\\,\\text{N/mm}^2$.\n\n**Probe:** Einheit $\\text{Nmm}/\\text{mm}^3 = \\text{N/mm}^2 = \\text{MPa}$. ✓ Weit unter $\\tau_\\text{zul}$ von Baustahl ($\\approx 85\\,\\text{MPa}$) ⇒ hohe Sicherheit.\n\n**Typischer Fehler:** $M_T$ in Nm belassen — Ergebnis um Faktor $1000$ zu klein ($0{,}016\\,\\text{N/mm}^2$). Oder $I_p$ statt $W_p$ in den Nenner setzen ⇒ Spannung halb so groß.',
              hints: ['$\\tau_\\text{max} = M_T/W_p$', '$M_T$ in Nmm: $200 \\cdot 1000 = 200\\,000\\,\\text{Nmm}$', '$W_p \\approx 12\\,566\\,\\text{mm}^3$'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Eine Welle mit $d = 30$ mm wird mit $M_T = 100$ Nm belastet. Welcher Wert für $\\tau_{\\max}$ ist am nächsten?',
              options: ['12 N/mm²', '19 N/mm²', '30 N/mm²', '50 N/mm²'],
              correctIndex: 1,
              explanation: '**Ansatz:** Zuerst $W_p = \\pi d^3/16$, dann $\\tau_\\text{max} = M_T/W_p$. Einheitenumrechnung Nm → Nmm nicht vergessen.\n\n**Rechnung:** $W_p = \\pi\\cdot 27\\,000/16 \\approx 5\\,301\\,\\text{mm}^3$. $M_T = 100\\,000\\,\\text{Nmm}$. $\\tau_\\text{max} = 100\\,000/5\\,301 \\approx 18{,}9\\,\\text{N/mm}^2 \\approx 19\\,\\text{N/mm}^2$.\n\n**Probe:** Überschlag ohne Taschenrechner: $\\pi/16 \\approx 0{,}2$, $W_p \\approx 0{,}2\\cdot 27\\,000 = 5\\,400$. $\\tau \\approx 100\\,000/5\\,400 \\approx 18{,}5 \\approx 19$. ✓\n\n**Typischer Fehler:** $W_p$ mit Flächenträgheitsmoment verwechseln oder $M_T$ nicht in Nmm konvertieren — beide Fehler führen zu einer um Faktor 2 bzw. 1000 daneben liegenden Zahl.',
              hints: ['$W_p = \\pi\\cdot d^3/16$', '$M_T$ in Nmm umrechnen: $\\cdot 1000$', '$\\tau = M_T/W_p$'],
              wrongAnswerExplanations: {
                0: 'Vermutlich $W_p = \\pi\\cdot d^3/8$ statt $/16$ verwendet ($\\approx 10\\,600\\,\\text{mm}^3$) — das ergäbe $\\tau \\approx 9{,}4\\,\\text{N/mm}^2$. Korrekt: $W_p = \\pi d^3/16$.',
                2: '$M_T$ nicht in Nmm umgerechnet oder Durchmesser mit Radius verwechselt. Korrekt: $\\tau = 100\\,000/5\\,301 \\approx 19\\,\\text{N/mm}^2$.',
                3: 'Das wäre bei $d \\approx 20\\,\\text{mm}$ statt $30\\,\\text{mm}$ ($W_p \\approx 1\\,571$, $\\tau \\approx 64$). Mit $d = 30$ liegt $\\tau_\\text{max}$ bei rund $19\\,\\text{N/mm}^2$.',
              },
            },
          ],
        },
        {
          id: 'fest-1-4',
          title: 'Knicken',
          learningGoals: ['Eulersche Knicklast berechnen', 'Einspannbeiwert β anwenden'],
          subGoals: [
            { label: 'Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$', examRelevance: 'hoch' },
            { label: 'Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt', examRelevance: 'hoch' },
            { label: 'Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)', examRelevance: 'hoch' },
            { label: 'Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$', examRelevance: 'mittel' },
            { label: 'Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson', examRelevance: 'mittel' },
          ],
          content: String.raw`**Eulersches Knicken** — kritische Last für einen Druckstab:

$$F_{ki} = \frac{\pi^2 \cdot E \cdot I}{(\beta L)^2}$$

$\beta$ ist der **Einspannbeiwert** (abhängig von Lagerungsart):
| Lagerungsfall | $\beta$ |
|---|---|
| beidseitig gelenkig | 1 |
| einseitig eingespannt, freies Ende | 2 |
| beidseitig eingespannt | 0,5 |

Das **Flächenträgheitsmoment** $I$ bestimmt die Knicklast maßgeblich (schwächste Achse!).`,
          exercises: [
            {
              type: 'number-input',
              question: 'Gelenkig-gelenkig gelagerter Stab: $E = 210000$ MPa, $I = 1 \\times 10^4$ mm⁴, $L = 1000$ mm. Berechne die Knicklast $F_{ki}$.',
              correctValue: 20708,
              tolerance: 200,
              unit: 'N',
              explanation: `**Ansatz:** Euler-Knicklast $F_{ki} = \\pi^2 E I / (\\beta L)^2$. Beidseitig gelenkig → $\\beta = 1$, Ersatzlänge $\\beta L = L = 1000$ mm.

**Rechnung:** $F_{ki} = \\pi^2 \\cdot 210\\,000 \\cdot 10\\,000 / (1 \\cdot 1\\,000)^2 = \\pi^2 \\cdot 2{,}1 \\cdot 10^9 / 10^6 = \\pi^2 \\cdot 2\\,100 \\approx 9{,}87 \\cdot 2\\,100 \\approx 20\\,708$ N.

**Probe:** Einheiten: $\\text{MPa} \\cdot \\text{mm}^4 / \\text{mm}^2 = \\text{N/mm}^2 \\cdot \\text{mm}^2 = \\text{N}$ ✓. Etwa 20 kN klingt plausibel für einen 1 m langen dünnen Stahlstab.

**Typischer Fehler:** $\\beta L$ nicht quadrieren, dann kommt ein viel zu großer Wert heraus. Oder $L$ in Meter einsetzen und Einheiten-Chaos produzieren.`,
              hints: ['$F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 1$ für beidseitig gelenkig', '$\\pi^2 \\approx 9{,}87$'],
            },
            {
              type: 'true-false',
              statement: 'Bei einseitig eingespanntem, freiem Ende ist die Knicklast am kleinsten (β = 2).',
              correct: true,
              explanation: `**Ansatz:** $F_{ki} \\propto 1/(\\beta L)^2$ — großes $\\beta$ bedeutet kleines $F_{ki}$.

**Rechnung:** Standardfälle im Vergleich: $\\beta = 0{,}5$ (beidseitig eingespannt), $\\beta = 1$ (gelenkig), $\\beta \\approx 0{,}7$ (eingespannt/gelenkig), $\\beta = 2$ (Kragstab). Maximum bei Kragstab → kleinste Knicklast.

**Probe:** Kragstab hat Ersatzlänge $2L$ — das Quadrat gibt Faktor 4 weniger als der gelenkige Fall und Faktor 16 weniger als beidseitig eingespannt.

**Typischer Fehler:** Intuitiv "Einspannung = Stabil" gleichsetzen und daraus schließen, dass $\\beta = 2$ besonders stabil wäre. $\\beta$ ist aber der **Ersatzlängenfaktor** — je größer, desto weicher.`,
              hints: ['Je größer β, desto kleiner $F_{ki}$', 'β = 2 → $(\\beta L)^2 = 4L^2$', 'Vergleiche mit β = 1: gleicher Nenner, 4-facher Unterschied'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Gleicher Stab wie oben ($E = 210000$ MPa, $I = 10000$ mm⁴, $L = 1000$ mm), aber nun einseitig eingespannt ($\\beta = 2$). Knicklast $F_{ki}$?',
              correctValue: 5177,
              tolerance: 100,
              unit: 'N',
              explanation: `**Ansatz:** Gleicher Stab, nur $\\beta = 2$ statt 1. Ersatzlänge vervierfacht ($\\beta L = 2 \\cdot 1\\,000$), damit $(\\beta L)^2$ vierfach.

**Rechnung:** $F_{ki} = \\pi^2 \\cdot 210\\,000 \\cdot 10\\,000 / (2 \\cdot 1\\,000)^2 = \\pi^2 \\cdot 2{,}1 \\cdot 10^9 / 4 \\cdot 10^6 = \\pi^2 \\cdot 525 \\approx 5\\,177$ N.

**Probe:** Exakt ein Viertel des gelenkigen Falls (20\\,708/4 = 5\\,177) ✓. Das ist die typische Faustzahl: Kragstab hat nur ein Viertel der Knicklast des beidseitig gelenkigen Stabs.

**Typischer Fehler:** $\\beta = 2$ in den Zähler setzen (dann wäre $F_{ki}$ vier**fach** statt einviertel). Oder $\\beta$ vergessen und wieder 20\\,708 N ausgeben.`,
              hints: ['Euler: $F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 2 \\Rightarrow (\\beta L)^2 = (2 \\cdot 1000)^2 = 4 \\cdot 10^6$', '$\\pi^2 \\cdot 210000 \\cdot 10000 / 4 \\cdot 10^6$'],
            },
          ],
        },
      ],
    },
    {
      id: 'fest-unit-2',
      title: 'Biegung und Torsion',
      description: 'Grundformeln für beanspruchte Bauteile.',
      lessons: [
        {
          id: 'fest-2-1',
          title: 'Biegespannung',
          learningGoals: ['Biegemoment und Widerstandsmoment verbinden', 'Kritische Randfaser erkennen'],
          subGoals: [
            { label: 'Biegespannung: $\\sigma_b = M_b/W_b$', examRelevance: 'hoch' },
            { label: 'Axiales Widerstandsmoment Rechteck: $W_b = bh^2/6$', examRelevance: 'hoch' },
            { label: 'Kreisquerschnitt: $W_b = \\pi d^3/32$', examRelevance: 'hoch' },
            { label: 'Spannungsverteilung linear im Querschnitt: Null in neutraler Faser, max. am Rand', examRelevance: 'hoch' },
            { label: '$\\sigma_b = M_b y/I$ für beliebige Stelle $y$ von neutraler Faser', examRelevance: 'mittel' },
          ],
          content: String.raw`Bei reiner Biegung wird die maximale Normalspannung abgeschätzt mit:

$$\sigma_b = \frac{M_b}{W_b}$$

Das Widerstandsmoment $W_b$ hängt stark von der Querschnittsform ab.`,
          exercises: [
            { type: 'number-input', question: 'Gegeben sind $M_b$ = 200 Nm und $W_b$ = 20 $cm^3$. Mit 1 Nm = 1000 Nmm und 1 $cm^3$ = 1000 $mm^3$: Berechne $\\sigma_b$.', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: '200 Nm = 200000 Nmm, 20 $cm^3$ = 20000 $mm^3$, $\\sigma$ = 10 $N/mm^2$.', hints: ['σ_b = M_b / W_b', 'Einheiten angleichen: M in Nmm, W in mm³', '200000 Nmm / 20000 mm³ = 10 N/mm²'] },
            { type: 'multiple-choice', question: 'Biegespannung ist bei symmetrischem Balken maximal ...', options: ['in der neutralen Faser', 'an der Randfaser', 'immer in der Mitte', 'außerhalb des Balkens'], correctIndex: 1, explanation: 'Die Spannung steigt mit dem Abstand von der neutralen Faser und ist an der Randfaser maximal.', hints: ['Biegespannung wächst linear mit Abstand y von Neutralfaser.', 'Maximum an der Randfaser (y = max).', 'σ_b = M·y/I → σ_max = M/W_b'], wrongAnswerExplanations: { 0: 'In der neutralen Faser ist $y = 0$, also $\\sigma_b = M \\cdot 0/I = 0$ — dort ist die Spannung minimal (null), nicht maximal.', 2: 'Die Höhenlage im Querschnitt (Randfaser) ist entscheidend, nicht die Längsposition. „Mitte“ ist unklar — gemeint könnte die neutrale Faser sein, wo $\\sigma = 0$.', 3: 'Spannung existiert nur im Material. Außerhalb des Balkens gibt es keinen Querschnitt, also keine Spannung — das ist kein sinnvoller Ort.' } },
            { type: 'true-false', statement: 'Das Widerstandsmoment hat Einfluss auf die Biegespannung.', correct: true, explanation: 'σ_b = M_b/W_b.', hints: ['σ_b = M_b / W_b', 'W_b im Nenner: größeres W → kleinere Spannung.', 'W_b beeinflusst maßgeblich die Biegespannung.'] },
          ],
        },
        {
          id: 'fest-2-2',
          title: 'Sicherheitszahl',
          learningGoals: ['Zulässige Spannung berechnen', 'Nachweis gegen Versagen formulieren'],
          subGoals: [
            { label: 'Zulässige Spannung: $\\sigma_\\text{zul} = R/S$', examRelevance: 'hoch' },
            { label: 'Festigkeitsnachweis: $\\sigma_\\text{vorh} \\leq \\sigma_\\text{zul}$', examRelevance: 'hoch' },
            { label: 'Typische Sicherheitszahlen: $S = 1{,}5$ (zäh, statisch) bis $S = 4$ (dynamisch, spröde)', examRelevance: 'mittel' },
            { label: 'Referenz-Kennwerte: $R_e$ (Streckgrenze, zäh), $R_m$ (Zugfestigkeit, spröde)', examRelevance: 'hoch' },
            { label: 'Größeres $S$ → kleineres $\\sigma_\\text{zul}$ (mehr Sicherheit = weniger Auslastung erlaubt)', examRelevance: 'hoch' },
          ],
          content: String.raw`Ein einfacher Festigkeitsnachweis lautet:

$$\sigma_\text{vorh} \le \sigma_\text{zul} = \frac{R}{S}$$

$R$ ist eine Materialkennzahl, $S$ die Sicherheitszahl.`,
          exercises: [
            { type: 'number-input', question: 'Für eine Materialkennzahl R = 300 MPa und Sicherheitszahl S = 2: Berechne die zulässige Spannung.', correctValue: 150, tolerance: 0.01, unit: 'MPa', explanation: 'σ_zul = R/S = 300/2 = 150 MPa.', hints: ['σ_zul = R/S', 'S (Sicherheitszahl) steht im Nenner.', '300/2 = 150 MPa'] },
            { type: 'true-false', statement: 'Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist.', correct: true, explanation: 'Dann bleibt die vorhandene Beanspruchung unter der zulässigen Grenze.', hints: ['Nachweis: σ_vorh ≤ σ_zul', 'σ_zul = R/S ist die Grenze.', 'Wenn σ_vorh < σ_zul → Nachweis erfüllt.'] },
            { type: 'multiple-choice', question: 'Wenn S größer gewählt wird, wird σ_zul ...', options: ['größer', 'kleiner', 'unverändert', 'negativ'], correctIndex: 1, explanation: 'σ_zul = R/S; größere Sicherheit senkt die zulässige Spannung.', hints: ['σ_zul = R/S', 'Größeres S → kleineres σ_zul (konservativer).', 'S im Nenner → σ_zul sinkt.'], wrongAnswerExplanations: { 0: '$S$ steht im Nenner: $\\sigma_\\text{zul} = R/S$. Größerer Nenner macht den Bruch kleiner. Vorsicht: „mehr Sicherheit“ heißt nicht „mehr erlaubte Spannung“, sondern weniger.', 2: 'Aus $\\sigma_\\text{zul} = R/S$ folgt direkt: Änderung von $S$ ändert $\\sigma_\\text{zul}$ — es ist keine feste Größe.', 3: 'Beide Größen $R > 0$ und $S > 0$ sind positiv (Materialkennwert und Sicherheitsfaktor). Der Bruch bleibt positiv.' } },
          ],
        },
        {
          id: 'fest-2-3',
          title: "Mohr'scher Spannungskreis",
          learningGoals: ['Mittelpunkt und Radius des Mohr-Kreises berechnen', 'Hauptspannungen aus dem Mohr-Kreis ablesen'],
          subGoals: [
            { label: 'Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$', examRelevance: 'hoch' },
            { label: 'Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$', examRelevance: 'hoch' },
            { label: 'Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$', examRelevance: 'hoch' },
            { label: 'Max. Schubspannung: $\\tau_\\text{max} = R$', examRelevance: 'hoch' },
            { label: 'Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$', examRelevance: 'mittel' },
            { label: 'Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)', examRelevance: 'mittel' },
          ],
          content: String.raw`Der **Mohr'sche Spannungskreis** visualisiert Spannungszustände bei Schnittwinkel-Variation.

Gegeben: Normalspannungen $\sigma_x$, $\sigma_y$ und Schubspannung $\tau_{xy}$. Der Kreis hat:

$$\text{Mittelpunkt: } \sigma_M = \frac{\sigma_x + \sigma_y}{2}$$
$$\text{Radius: } R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$

**Hauptspannungen:**
$$\sigma_{1/2} = \sigma_M \pm R$$

**Maximale Schubspannung:** $\tau_{\max} = R$`,
          visualization: { title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {} },
          exercises: [
            {
              type: 'number-input',
              question: 'Gegeben: $\\sigma_x = 70$ MPa, $\\sigma_y = 30$ MPa, $\\tau_{xy} = 30$ MPa. Berechne die größte Hauptspannung $\\sigma_1$.',
              correctValue: 86.1,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: `**Ansatz:** Hauptspannungen über den Mohr-Kreis: Erst Mittelpunkt $\\sigma_M = (\\sigma_x+\\sigma_y)/2$, dann Radius $R = \\sqrt{((\\sigma_x-\\sigma_y)/2)^2 + \\tau_{xy}^2}$, dann $\\sigma_1 = \\sigma_M + R$.

**Rechnung:** $\\sigma_M = (70+30)/2 = 50$ MPa. $R = \\sqrt{20^2 + 30^2} = \\sqrt{1300} \\approx 36{,}06$ MPa. $\\sigma_1 = 50 + 36{,}06 \\approx 86{,}1$ MPa.

**Probe:** Invariantencheck: $\\sigma_1 + \\sigma_2 = 86{,}1 + 13{,}9 = 100 = \\sigma_x + \\sigma_y$ ✓.

**Typischer Fehler:** $(\\sigma_x - \\sigma_y)$ direkt ohne Halbierung quadrieren ($40^2 = 1600$ statt $20^2 = 400$) — ergibt viel zu großen Radius.`,
              hints: ['$\\sigma_M = (\\sigma_x + \\sigma_y)/2 = 50$', '$R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2} = \\sqrt{400+900}$', '$\\sigma_1 = \\sigma_M + R$'],
            },
            {
              type: 'number-input',
              question: 'Gleiche Werte ($\\sigma_x = 70$ MPa, $\\sigma_y = 30$ MPa, $\\tau_{xy} = 30$ MPa). Maximale Schubspannung $\\tau_{\\max}$?',
              correctValue: 36.1,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: `**Ansatz:** Die maximale Schubspannung im Bauteil entspricht dem **Radius** des Mohr-Kreises: $\\tau_\\text{max} = R$.

**Rechnung:** $R = \\sqrt{((70-30)/2)^2 + 30^2} = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36{,}1$ MPa.

**Probe:** Alternativ aus Hauptspannungen: $\\tau_\\text{max} = (\\sigma_1 - \\sigma_2)/2 = (86{,}1 - 13{,}9)/2 = 36{,}1$ ✓. $\\tau_\\text{max}$ tritt unter $45°$ zu den Hauptachsen auf.

**Typischer Fehler:** $\\tau_\\text{max} = \\tau_{xy} = 30$ setzen (das ist nur der Schub in der $x,y$-Ebene, nicht das Maximum über alle Schnitte).`,
              hints: ['$\\tau_{\\max}$ = Radius des Mohr-Kreises', '$R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$', '$\\sqrt{1300} \\approx 36{,}1$'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] $\\sigma_x = 100$ MPa, $\\sigma_y = 0$ MPa, $\\tau_{xy} = 0$ MPa. Was ist die kleinere Hauptspannung $\\sigma_2$?',
              options: ['0 MPa', '50 MPa', '100 MPa', '−50 MPa'],
              correctIndex: 0,
              explanation: `**Ansatz:** Bei $\\tau_{xy} = 0$ sind $x, y$ bereits Hauptachsen — $\\sigma_1, \\sigma_2 \\in \\{\\sigma_x, \\sigma_y\\}$. Formal über Mohr: $\\sigma_{1,2} = \\sigma_M \\pm R$.

**Rechnung:** $\\sigma_M = (100 + 0)/2 = 50$ MPa. $R = \\sqrt{50^2 + 0^2} = 50$ MPa. $\\sigma_2 = 50 - 50 = 0$ MPa, $\\sigma_1 = 50 + 50 = 100$ MPa.

**Probe:** Erwartungsgemäß $\\sigma_1 = \\sigma_x = 100$ und $\\sigma_2 = \\sigma_y = 0$ — bei $\\tau = 0$ sind die Achsenwerte direkt die Hauptwerte.

**Typischer Fehler:** Den Mittelpunkt $\\sigma_M = 50$ als Hauptspannung interpretieren (Option 50 MPa). $\\sigma_M$ ist die Lage des Kreismittelpunkts, nicht ein Wert **auf** dem Kreis.`,
              hints: ['$\\sigma_M = (\\sigma_x + \\sigma_y)/2$', '$R = (\\sigma_x - \\sigma_y)/2$ bei $\\tau = 0$', '$\\sigma_2 = \\sigma_M - R$'],
              wrongAnswerExplanations: {
                1: '50 MPa ist der Mittelpunkt $\\sigma_M = (100+0)/2$ — noch nicht die Hauptspannung. $\\sigma_2 = \\sigma_M - R = 50 - 50 = 0$ MPa.',
                2: '100 MPa wäre $\\sigma_1 = \\sigma_M + R = 50+50$ (die größere Hauptspannung), nicht $\\sigma_2$.',
                3: '$-50$ MPa entspricht fälschlich $\\sigma_M - 2R$ oder Vorzeichenfehler. Mit $\\tau = 0$ ist $R = |\\sigma_x - \\sigma_y|/2 = 50$, also $\\sigma_2 = 0$.',
              },
            },
          ],
        },
        {
          id: 'fest-2-4',
          title: 'Wechselfestigkeit und Betriebsfestigkeit',
          learningGoals: ['Mittel- und Ausschlagspannung berechnen', 'Goodman-Nachweis anwenden'],
          subGoals: [
            { label: 'Mittelspannung: $\\sigma_m = (\\sigma_\\text{max} + \\sigma_\\text{min})/2$', examRelevance: 'hoch' },
            { label: 'Ausschlagspannung: $\\sigma_a = (\\sigma_\\text{max} - \\sigma_\\text{min})/2$', examRelevance: 'hoch' },
            { label: 'Goodman-Kriterium: $\\sigma_a/\\sigma_W + \\sigma_m/R_m \\leq 1$', examRelevance: 'hoch' },
            { label: 'Wechselfestigkeit $\\sigma_W$: Amplitudengrenze bei $\\sigma_m = 0$', examRelevance: 'hoch' },
            { label: 'Schwingfestigkeit: Dauerfestigkeit, Zeitfestigkeit, Wöhlerlinie (N > 10⁶)', examRelevance: 'mittel' },
          ],
          content: String.raw`**Wechselfestigkeit** beschreibt die ertragbare Spannung bei schwingender Beanspruchung.

**Mittelspannung:** $\sigma_m = (\sigma_{\max} + \sigma_{\min})/2$

**Ausschlagspannung:** $\sigma_a = (\sigma_{\max} - \sigma_{\min})/2$

**Smith-Diagramm / Haigh-Diagramm:** Zulässiges $\sigma_a$ sinkt linear mit steigendem $\sigma_m$.

**Einfache Abschätzung (Goodman-Gerade):**
$$\frac{\sigma_a}{\sigma_W} + \frac{\sigma_m}{R_m} \le 1$$

$\sigma_W$ = Wechselfestigkeit, $R_m$ = Zugfestigkeit. Sicherheit $S > 1$ erforderlich.`,
          exercises: [
            {
              type: 'number-input',
              question: '$\\sigma_{\\max} = 200$ MPa, $\\sigma_{\\min} = 100$ MPa. Berechne die Ausschlagspannung $\\sigma_a$.',
              correctValue: 50,
              tolerance: 0.01,
              unit: 'MPa',
              explanation: '$\\sigma_a = (\\sigma_{\\max} - \\sigma_{\\min})/2 = (200 - 100)/2 = 50$ MPa.',
              hints: ['$\\sigma_a = (\\sigma_{\\max} - \\sigma_{\\min})/2$', '$(200 - 100)/2$', 'Einheit: MPa'],
            },
            {
              type: 'true-false',
              statement: 'Eine höhere Mittelspannung reduziert die zulässige Ausschlagspannung.',
              correct: true,
              explanation: 'Die Goodman-Gerade zeigt: mit steigendem $\\sigma_m$ sinkt das zulässige $\\sigma_a$.',
              hints: ['Goodman: $\\sigma_a/\\sigma_W + \\sigma_m/R_m \\le 1$', 'Terme addieren sich auf', 'Steigt $\\sigma_m$, muss $\\sigma_a$ sinken, damit die Summe ≤ 1 bleibt'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Goodman-Nachweis: $\\sigma_W = 200$ MPa, $R_m = 400$ MPa, $\\sigma_m = 100$ MPa. Maximales zulässiges $\\sigma_a$?',
              correctValue: 150,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: '$\\sigma_a/200 + 100/400 \\le 1 \\Rightarrow \\sigma_a/200 \\le 0{,}75 \\Rightarrow \\sigma_a \\le 150$ MPa.',
              hints: ['Goodman: $\\sigma_a/\\sigma_W + \\sigma_m/R_m = 1$ (Grenze)', '$\\sigma_a = \\sigma_W \\cdot (1 - \\sigma_m/R_m)$', '$200 \\cdot (1 - 100/400) = 200 \\cdot 0{,}75$'],
            },
          ],
        },
        {
          id: 'fest-2-5',
          title: 'Kerbspannungen & Formzahl',
          estimatedMinutes: 14,
          learningGoals: [
            'Formzahl $\\alpha_K$ als Verhältnis $\\sigma_\\text{max}/\\sigma_\\text{nenn}$ verstehen',
            'Typische Kerben (Bohrung, Absatz, Gewindegrund) einordnen',
            'Einfluss von Kerbwirkung auf die Dauerfestigkeit einschätzen',
          ],
          subGoals: [
            { label: 'Formzahl: $\\alpha_K = \\sigma_\\text{max}/\\sigma_\\text{nenn}$ (rein geometrisch)', examRelevance: 'hoch' },
            { label: 'Kerbwirkungszahl $\\beta_K \\leq \\alpha_K$ (werkstoffabhängig, bei zähen kleiner)', examRelevance: 'hoch' },
            { label: 'Typische Werte: Welleabsatz scharf $\\alpha_K = 2$–3, Gewindegrund $\\alpha_K = 3$–5', examRelevance: 'mittel' },
            { label: 'Maßnahmen: Verrundung ($r \\uparrow$), Oberflächengüte, Druckeigenspannungen', examRelevance: 'hoch' },
            { label: 'Dauerfestigkeit mit Kerbe: $\\sigma_{W,K} = \\sigma_W/\\beta_K$', examRelevance: 'hoch' },
          ],
          content: String.raw`**Kerbspannung** — wenn die Geometrie einer Welle, Platte oder eines Bauteils **springt** (Bohrung, Absatz, Gewindegrund), konzentrieren sich die Spannungen lokal. Das Verhältnis der maximalen zur nominellen Spannung heißt **Formzahl** $\alpha_K$:

$$\alpha_K = \frac{\sigma_\text{max}}{\sigma_\text{nenn}}$$

- $\sigma_\text{nenn}$: Spannung aus der einfachen Formel $F/A$ oder $M/W$ (ohne Kerbe)
- $\sigma_\text{max}$: tatsächliche Spitzenspannung im Kerbgrund

**Typische Werte** für $\alpha_K$:

| Kerbe | $\alpha_K$ |
|---|---|
| Absatz Welle, scharf | 2–3 |
| Absatz Welle, verrundet ($r/d = 0{,}1$) | 1,5–1,8 |
| Querbohrung in Welle | 2–3 |
| Gewindegrund (metrisch) | 3–5 |

**Dauerfestigkeit mit Kerbwirkung:**
$$\sigma_{W,K} = \frac{\sigma_W}{\beta_K}$$

mit **Kerbwirkungszahl** $\beta_K \le \alpha_K$ (Kerbempfindlichkeit des Werkstoffs). Für spröde Werkstoffe ist $\beta_K \approx \alpha_K$, für zähe Werkstoffe deutlich kleiner (sie „entschärfen" Spitzen durch lokale Plastifizierung).

**Gegenmaßnahmen:**
- Übergänge großzügig verrunden ($r \uparrow \Rightarrow \alpha_K \downarrow$)
- Oberflächenrauheit senken (Schleifen, Polieren)
- Druckeigenspannungen einbringen (Kugelstrahlen, Festwalzen)

Auch die **Oberflächengüte** beeinflusst die Dauerfestigkeit stark: geschliffene Proben halten deutlich länger als gedrehte mit Rillen, die selbst kleine Kerben bilden.`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Eine Welle hat einen Absatz mit Formzahl $\\alpha_K = 2$. Was bedeutet das?',
              options: [
                'Die maximale Spannung im Kerbgrund ist doppelt so groß wie die Nennspannung',
                'Der Bauteil hält nur die halbe Last aus wie ohne Kerbe',
                'Die Dauerfestigkeit ist genau halbiert',
                'Die Fläche am Absatz ist halbiert',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** Die Formzahl $\\alpha_K$ ist als Verhältnis $\\sigma_\\text{max}/\\sigma_\\text{nenn}$ definiert.

**Rechnung:** $\\alpha_K = 2 \\Rightarrow \\sigma_\\text{max} = 2 \\cdot \\sigma_\\text{nenn}$.

**Probe:** Nennspannung z.B. $100$ MPa, dann ist im Kerbgrund lokal $200$ MPa — mehr als am ungestörten Querschnitt.

**Typischer Fehler:** $\\alpha_K$ mit der Kerbwirkungszahl $\\beta_K$ (Einfluss auf Dauerfestigkeit) oder mit der Lastkapazität verwechseln.`,
              hints: [
                'Definition: $\\alpha_K = \\sigma_\\text{max} / \\sigma_\\text{nenn}$.',
                '$\\alpha_K = 2$ heißt: die Spitze ist um Faktor 2 höher als die mittlere Spannung.',
                'Nicht dasselbe wie „hält nur halbe Last" — das wäre die Kerbwirkung auf Dauerfestigkeit.',
              ],
              wrongAnswerExplanations: {
                1: 'Die Formzahl $\\alpha_K$ beschreibt die lokale Spannungsspitze, nicht direkt die Tragfähigkeit. Bei statischer Last und zähem Werkstoff plastifiziert die Kerbstelle und die Gesamttragfähigkeit kann fast unverändert bleiben. Für dynamische Last zählt $\\beta_K \\le \\alpha_K$.',
                2: 'Halbierte Dauerfestigkeit gilt nur, wenn $\\beta_K = 2$ ist — und $\\beta_K$ ist meist kleiner als $\\alpha_K$, weil zähe Werkstoffe Spannungsspitzen lokal abbauen. Die Formzahl allein liefert die Dauerfestigkeit nicht.',
                3: 'Die Formzahl ist ein **Spannungs**-Verhältnis, kein Flächen-Verhältnis. Sie hängt von der Geometrie der Kerbe (Radius/Durchmesser) ab, nicht von einer Flächenhalbierung.',
              },
            },
            {
              type: 'number-input',
              question: 'Nennspannung $\\sigma_\\text{nenn} = 100$ MPa an einem Wellenabsatz mit Kerbformzahl $\\alpha_K = 2{,}5$. Wie groß ist die maximale Spannung $\\sigma_\\text{max}$ im Kerbgrund?',
              correctValue: 250,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: `**Ansatz:** $\\sigma_\\text{max} = \\alpha_K \\cdot \\sigma_\\text{nenn}$.

**Rechnung:** $\\sigma_\\text{max} = 2{,}5 \\cdot 100 = 250$ MPa.

**Probe:** Vergleich: ohne Kerbe wäre nur $100$ MPa vorhanden. Die Kerbe erzeugt eine Spannungsspitze von $250$ MPa — kritisch für Dauerfestigkeit.

**Typischer Fehler:** Dividieren statt multiplizieren ($100 / 2{,}5 = 40$ MPa) oder $\\alpha_K$ mit Sicherheitsfaktor $S$ verwechseln.`,
              hints: [
                'Formel: $\\sigma_\\text{max} = \\alpha_K \\cdot \\sigma_\\text{nenn}$.',
                'Einsetzen: $2{,}5 \\cdot 100$.',
                '$\\alpha_K$ verstärkt die Spannung — nicht abschwächen!',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Zwei gleiche Wellen aus demselben Stahl werden auf Dauer beansprucht. Welle A ist fein geschliffen ($R_a = 0{,}8\\,\\mu\\text{m}$), Welle B grob gedreht ($R_a = 6{,}3\\,\\mu\\text{m}$). Wie wirkt sich die Oberflächengüte auf die Dauerfestigkeit aus?',
              options: [
                'Welle A hat höhere Dauerfestigkeit — raue Oberflächen enthalten Mikrokerben',
                'Welle B hat höhere Dauerfestigkeit — raue Oberfläche verteilt die Last besser',
                'Beide gleich — Dauerfestigkeit hängt nur vom Werkstoff ab',
                'Nur die statische Festigkeit ändert sich, nicht die Dauerfestigkeit',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** Jede Rille in der Oberfläche wirkt wie eine winzige Kerbe und erzeugt eine Spannungsspitze.

**Rechnung:** Der Oberflächenbeiwert $C_O$ reduziert die Dauerfestigkeit: $\\sigma_{W,\\text{real}} = C_O \\cdot \\sigma_W$. Typische Werte: poliert $C_O \\approx 1{,}0$; fein geschliffen $\\approx 0{,}9$; grob gedreht $\\approx 0{,}7$–$0{,}8$.

**Probe:** Bei $\\sigma_W = 300$ MPa: geschliffen $\\approx 270$ MPa, gedreht $\\approx 225$ MPa — deutlicher Unterschied.

**Typischer Fehler:** Glauben, Rauheit spiele nur im Aussehen eine Rolle. Gerade bei schwingender Last sind Mikrokerben Auslöser für Dauerbrüche.`,
              hints: [
                'Raue Oberfläche = viele kleine Kerben.',
                'Kerben → Spannungsspitzen → frühere Rissinitiierung bei Wechsellast.',
                'Oberflächenbeiwert $C_O < 1$ bei rauen Oberflächen.',
              ],
              wrongAnswerExplanations: {
                1: 'Genau umgekehrt: Raue Oberflächen enthalten Rillen, die wie Mikrokerben wirken. Dort entstehen Spannungsspitzen, und der Dauerbruch beginnt bevorzugt an der Oberfläche.',
                2: 'Die Dauerfestigkeit hängt stark von Oberflächenzustand, Kerben, Eigenspannungen und Probengröße ab — nicht nur vom Grundwerkstoff. Deshalb gibt es in Normen die Beiwerte $C_O$, $C_G$, $\\beta_K$.',
                3: 'Die statische Zugfestigkeit $R_m$ ist praktisch unempfindlich gegen Oberflächenrauheit, aber die **Dauerfestigkeit** $\\sigma_W$ sehr wohl — Dauerbrüche starten fast immer an der Oberfläche.',
              },
            },
          ],
        },
      ],
    },
    // ── Unit 3: Prüfungsaufgaben Festigkeit ──────────────────────────
    {
      id: 'fest-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Festigkeitsberechnungen.',
      lessons: [
        {
          id: 'fest-3-1',
          title: 'Festigkeit: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Kombinierte Beanspruchung berechnen', 'Sicherheitsnachweis durchführen'],
          subGoals: [
            { label: 'Kombinierte Beanspruchung: Vergleichsspannung nach GEH (Mises) oder NH', examRelevance: 'hoch' },
            { label: 'Mises: $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$ für Zug+Torsion', examRelevance: 'hoch' },
            { label: 'Nachweis: $\\sigma_v \\leq R_e/S$ bzw. $R_m/S$', examRelevance: 'hoch' },
            { label: 'Querschnitts-Design: Welle dimensionieren aus gegebenen $M_b$, $M_T$', examRelevance: 'hoch' },
            { label: 'Sicherheit $S = R/\\sigma_v \\geq S_\\text{soll}$ als Ergebnis angeben', examRelevance: 'hoch' },
          ],
          content: String.raw`**[PRÜFUNG] Typische Festigkeits-Klausuraufgaben**

**Schritt 1:** Schnittgrößen bestimmen (aus Statik: N, Q, M)
**Schritt 2:** Spannungen berechnen (σ = N/A, σ_b = M/W, τ = Q·S/(I·b))
**Schritt 3:** Vergleichsspannung (z.B. v. Mises: $\sigma_v = \sqrt{\sigma^2 + 3\tau^2}$)
**Schritt 4:** Nachweis: $\sigma_v \leq \sigma_{zul} = R_e / S$

**Wichtige Querschnittswerte:**
| Querschnitt | I | W |
|---|---|---|
| Rechteck (b×h) | $bh^3/12$ | $bh^2/6$ |
| Kreis (d) | $\pi d^4/64$ | $\pi d^3/32$ |
| Rohr (D, d) | $\pi(D^4-d^4)/64$ | $\pi(D^4-d^4)/(32D)$ |`,
          visualization: {
            title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {},
          },
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Rundstab d = 20 mm, Zugkraft F = 15 kN. Normalspannung σ in MPa?', correctValue: 47.75, tolerance: 0.5, unit: 'MPa', explanation: 'A = $\\pi \\cdot 20^2/4$ = 314,16 $mm^2$. σ = 15000/314,16 ≈ 47,7 MPa.', hints: ['$A = \\pi \\cdot d^2/4$', 'F in N umrechnen: 15 kN = 15000 N', 'σ = F/A = 15000 / 314,16 ≈ 47,7 MPa'] },
            { type: 'number-input', question: '[PRÜFUNG] Rechteckbalken b = 40 mm, h = 80 mm. Biegemoment M = 800 Nm. Maximale Biegespannung?', correctValue: 18.75, tolerance: 0.2, unit: 'MPa', explanation: '$W = bh^2/6$ = $40 \\cdot 80^2/6$ = 42667 $mm^3$. σ = 800000/42667 ≈ 18,8 MPa.', hints: ['$W = bh^2/6$', 'M in Nmm: 800·1000 = 800000 Nmm', 'σ = 800000 / 42667 ≈ 18,8 MPa'] },
            { type: 'number-input', question: '[PRÜFUNG] σ = 120 MPa und τ = 60 MPa wirken gleichzeitig. Berechne die Von-Mises-Vergleichsspannung auf eine Dezimalstelle.', correctValue: 158.7, tolerance: 1, unit: 'MPa', explanation: 'Für Normalspannung plus Schubspannung gilt $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$. Einsetzen: $\\sigma_v = \\sqrt{120^2 + 3 \\cdot 60^2}$ = $\\sqrt{14400 + 10800}$ = $\\sqrt{25200}$ ≈ 158,7 MPa. Typischer Fehler: den Faktor 3 vor $\\tau^2$ wegzulassen.', hints: ['Nutze $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$.', 'Berechne zuerst $120^2$ und $3 \\cdot 60^2$.', 'Ziehe am Ende die Wurzel aus 25200.'] },
            { type: 'true-false', statement: '[PRÜFUNG] Die Streckgrenze Re von S235 beträgt mindestens 235 MPa.', correct: true, explanation: 'S235 bedeutet: Mindeststreckgrenze 235 MPa (daher der Name).', hints: ['Die Zahl im Werkstoffnamen S235 = Mindeststreckgrenze 235 MPa.', 'Streckgrenze Re: ab hier beginnt plastische Verformung.', 'S235 bedeutet: Re_min = 235 MPa (bei Dicke ≤ 16 mm).'] },
          ],
        },
        {
          id: 'fest-3-2',
          title: 'Torsion, Knicken & Wechselfestigkeit',
          type: 'explanation-intuitive',
          learningGoals: ['Torsions- und Knickberechnung kombinieren', 'Goodman-Nachweis mit Sicherheit durchführen'],
          subGoals: [
            { label: 'Torsionsspannung in Welle: $\\tau = M_T/W_p$, $W_p = \\pi d^3/16$', examRelevance: 'hoch' },
            { label: 'Knickung: Euler $F_{ki} = \\pi^2 EI/(\\beta L)^2$, $\\beta$ aus Lagerung', examRelevance: 'hoch' },
            { label: 'Goodman: $\\sigma_a/\\sigma_W + \\sigma_m/R_m \\leq 1/S$', examRelevance: 'hoch' },
            { label: 'Werkstoff S235: Mindeststreckgrenze $R_e = 235$ MPa', examRelevance: 'hoch' },
            { label: 'Schlankheitsgrad prüfen vor Euler: $\\lambda > \\lambda_0$ sonst Tetmajer/Johnson', examRelevance: 'mittel' },
          ],
          content: String.raw`**[PRÜFUNG] Torsion, Knicken & Wechselfestigkeit**

**Torsion:**
- $W_p = \pi d^3/16$ (Kreis), $\tau = M_T/W_p$
- Verdrehwinkel: $\varphi = M_T \cdot L/(G \cdot I_p)$, $I_p = \pi d^4/32$

**Knicken (Euler):**
- $F_{ki} = \pi^2 \cdot E \cdot I/(\beta L)^2$
- $\beta$: 1 (gel.-gel.), 0,5 (beidseitig eingespannt), 2 (Kragstab)

**Goodman (Wechselfestigkeit):**
- $\sigma_a/\sigma_W + \sigma_m/R_m \le 1/S$`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Welle mit $d = 50$ mm wird mit $M_T = 500$ Nm belastet. Maximale Schubspannung $\\tau_{\\max}$ in MPa?',
              correctValue: 20.4,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: '$W_p = \\pi \\cdot 50^3 / 16 = \\pi \\cdot 125000 / 16 \\approx 24544$ mm³. $\\tau = 500000 / 24544 \\approx 20{,}4$ MPa.',
              hints: ['$W_p = \\pi \\cdot d^3 / 16$', '$d = 50$ mm → $d^3 = 125000$', '$\\tau = M_T\\text{(Nmm)} / W_p$'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Stab beidseitig gelenkig: $E = 210000$ MPa, $I = 5000$ mm⁴, $L = 500$ mm. Knicklast $F_{ki}$?',
              correctValue: 41425,
              tolerance: 500,
              unit: 'N',
              explanation: '$F_{ki} = \\pi^2 \\cdot 210000 \\cdot 5000 / (1 \\cdot 500)^2 = \\pi^2 \\cdot 4200 \\approx 41425$ N.',
              hints: ['$F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 1$, $(\\beta L)^2 = 250000$', '$\\pi^2 \\cdot 210000 \\cdot 5000 / 250000$'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Goodman mit Sicherheit: $\\sigma_W = 180$ MPa, $R_m = 360$ MPa, $\\sigma_m = 60$ MPa, $S = 1{,}5$. Zulässiges $\\sigma_a$?',
              correctValue: 100,
              tolerance: 0.5,
              unit: 'MPa',
              explanation: '$\\sigma_a = (\\sigma_W / S) \\cdot (1 - \\sigma_m/R_m) = (180/1{,}5) \\cdot (1 - 60/360) = 120 \\cdot 5/6 = 100$ MPa.',
              hints: ['Goodman mit Sicherheit: $\\sigma_a \\le (\\sigma_W/S) \\cdot (1 - \\sigma_m/R_m)$', '$180/1{,}5 = 120$ MPa', '$1 - 60/360 = 5/6$'],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] Knicken ist ein Stabilitätsversagen, das auch unterhalb der Streckgrenze auftreten kann.',
              correct: true,
              explanation: 'Knicken ist ein geometrisches Stabilitätsproblem. Die kritische Last kann weit unterhalb der Druckfestigkeit liegen.',
              hints: ['Euler-Knicklast hängt von $E \\cdot I / L^2$ ab', 'Nicht von der Streckgrenze $R_e$', 'Bei schlanken Stäben tritt Knicken vor Quetschung auf'],
            },
          ],
        },
      ],
    },
  ],
}

