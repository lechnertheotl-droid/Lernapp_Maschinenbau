function mc(question, options, correctIndex, explanation, hints = []) {
  return { type: 'multiple-choice', question, options, correctIndex, explanation, hints }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = []) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints }
}

function tf(statement, correct, explanation, hints = []) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

function matching(question, pairs, explanation, hints = []) {
  return { type: 'matching', question, pairs, explanation, hints }
}

function sorting(question, items, correctOrder, explanation, hints = []) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}

function withExamPrefix(exercise, exam) {
  if (!exam) return exercise
  if (exercise.question && !exercise.question.includes('[PRÜFUNG]')) {
    return { ...exercise, question: `[PRÜFUNG] ${exercise.question}` }
  }
  if (exercise.statement && !exercise.statement.includes('[PRÜFUNG]')) {
    return { ...exercise, statement: `[PRÜFUNG] ${exercise.statement}` }
  }
  return exercise
}

function bank(profile) {
  const exercises = [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'fest-1-1': {
    explanation: String.raw`**Vertiefung Normalspannung und Dehnung:** Normalspannung ist die auf die Querschnittsfläche bezogene Normalkraft:

$$\sigma = \frac{F}{A} \qquad [\sigma] = \frac{\text{N}}{\text{mm}^2} = \text{MPa}$$

Dehnung ist die relative Längenänderung:

$$\varepsilon = \frac{\Delta l}{l_0} \qquad [\varepsilon] = \text{dimensionslos}$$

**Einheitenkonvertierung (kritisch):**
- $1 \text{ MPa} = 1 \text{ N/mm}^2 = 10^6 \text{ Pa}$
- $1 \text{ GPa} = 10^3 \text{ MPa} = 10^9 \text{ Pa}$

**Typischer Fehler:** Fläche in m² einsetzen und dann in MPa rechnen wollen. Immer entweder konsequent SI (N, m, Pa) oder technisch (N, mm, MPa).`,

    conceptQuestion: 'Welche Aussage zur Normalspannung $\\sigma = F/A$ ist korrekt?',
    conceptOptions: [
      'Je größer $A$, desto kleiner $\\sigma$ bei fester Kraft — deshalb werden belastete Stäbe dicker dimensioniert',
      'Die Normalspannung ist unabhängig vom Querschnitt',
      'Normalspannung hat Einheit N — es ist eine Kraft',
      '$\\sigma = F \\cdot A$ — je größer die Fläche, desto größer die Spannung',
    ],
    conceptCorrect: 0,
    conceptExplanation: '$\\sigma = F/A$: Bei fester Kraft sinkt die Spannung mit wachsender Querschnittsfläche. Deshalb werden Stahlseile oder Säulen bei höherer Last dicker ausgeführt. Einheit: N/mm² = MPa.',
    conceptHints: [
      'Denk an Druck in einer Spritze: gleiche Kraft, kleinere Fläche → mehr Druck.',
      'Spannung ist Kraft pro Fläche, nicht Kraft mal Fläche.',
    ],

    calcQuestion: 'Ein Stab wird mit $F = 5000$ N auf Zug belastet. Querschnittsfläche $A = 50$ mm². Wie groß ist $\\sigma$ in MPa?',
    calcAnswer: 100,
    calcTolerance: 0.1,
    calcUnit: 'MPa',
    calcExplanation: '$\\sigma = F/A = 5000 \\text{ N} / 50 \\text{ mm}^2 = 100 \\text{ N/mm}^2 = 100$ MPa. Dieser Wert liegt deutlich unter der Streckgrenze typischer Baustähle (~235 MPa), der Stab ist also sicher belastet.',
    calcHints: [
      'Einheiten so wählen, dass das Ergebnis direkt in MPa herauskommt: N und mm² zusammen → MPa.',
      '$5000 / 50 = 100$.',
    ],

    trueFalseStatement: 'Die Dehnung $\\varepsilon$ ist eine dimensionslose Größe — sie hat keine Einheit.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. $\\varepsilon = \\Delta l / l_0$ ist ein Quotient zweier Längen — die Einheit m/m = 1 ist dimensionslos. Häufig wird sie in Promille oder Prozent angegeben: $1 \\text{ \\textperthousand} = 10^{-3}$.',
    trueFalseHints: [
      'Einheit einer relativen Größe: Zähler- und Nennereinheit heben sich auf.',
      'Dehnung in Prozent: $\\varepsilon = 0{,}001 \\equiv 0{,}1 \\%$.',
    ],

    matchingQuestion: 'Ordne die Belastungsarten ihren charakteristischen Spannungen zu.',
    matchingPairs: [
      { left: 'Zugstab', right: '$\\sigma = F/A$ (positiv)' },
      { left: 'Druckstab', right: '$\\sigma = -F/A$ (negativ, Druck)' },
      { left: 'Schubbeanspruchung', right: '$\\tau = F/A$ (parallel zur Fläche)' },
      { left: 'Biegung (Randfaser)', right: '$\\sigma = M/W$' },
    ],
    matchingExplanation: 'Normalspannung $\\sigma$ wirkt senkrecht zur Fläche (Zug/Druck), Schubspannung $\\tau$ parallel. Bei Biegung wird das Widerstandsmoment $W$ verwendet.',
    matchingHints: [
      'Vorzeichenkonvention: Zug positiv, Druck negativ.',
      'Griechisch: $\\sigma$ = sigma für Normal, $\\tau$ = tau für Schub.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Bestimmung der Zugspannung in einem Stab.',
    sortingItems: [
      'Freikörperbild und Belastung identifizieren',
      'Querschnittsfläche $A$ bestimmen (Kreis: $\\pi d^2 / 4$, Rechteck: $b \\cdot h$)',
      'Kraft $F$ aus dem Lastfall ablesen oder berechnen',
      'Spannung berechnen: $\\sigma = F/A$',
      'Einheitencheck und Vergleich mit zulässiger Spannung',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Querschnittsfläche und Kraft unabhängig bestimmen, dann einsetzen. Der letzte Schritt — Vergleich mit $\\sigma_{zul}$ — entscheidet, ob der Nachweis erfüllt ist.',
    sortingHints: [
      'Erst Geometrie ($A$), dann Belastung ($F$), dann Spannung.',
      'Kontrolle durch Vergleich mit zulässiger Spannung.',
    ],

    errorQuestion: 'Ein Student rechnet $\\sigma = 10000$ N $/ 0{,}01$ m² $= 1 \\cdot 10^6$ MPa. Was ist der Fehler?',
    errorOptions: [
      'Das Ergebnis ist in Pa, nicht MPa. Umrechnung: $1 \\cdot 10^6$ Pa $= 1$ MPa',
      'Die Kraft ist zu groß',
      'Die Fläche muss in cm² angegeben sein',
      '$\\sigma$ ist immer negativ',
    ],
    errorCorrect: 0,
    errorExplanation: 'Bei N und m² ergibt sich Pa als Einheit: $\\sigma = 10^4 / 10^{-2}$ N/m² = $10^6$ Pa = 1 MPa. Der Student hat die Einheit nicht umgerechnet. Technische Rechnung empfiehlt: N und mm² verwenden — dann ergibt sich direkt MPa.',
    errorHints: [
      'N/m² = Pa, nicht MPa.',
      '$1$ MPa $= 10^6$ Pa.',
    ],

    transferQuestion: 'Ein Stab ($l_0 = 500$ mm) dehnt sich unter Zuglast um $\\Delta l = 0{,}5$ mm. Wie groß ist die Dehnung $\\varepsilon$ in ‰ (Promille)?',
    transferAnswer: 1,
    transferTolerance: 0.01,
    transferUnit: '‰',
    transferExplanation: '$\\varepsilon = \\Delta l / l_0 = 0{,}5 / 500 = 0{,}001 = 1$ ‰. Das ist ein typischer Wert für Stahl im elastischen Bereich (bei ca. 200 MPa).',
    transferHints: [
      'Dehnung als Verhältnis: $\\Delta l / l_0$.',
      'In Promille: Wert $\\times 1000$.',
    ],
  },

  'fest-1-2': {
    explanation: String.raw`**Vertiefung Hookesches Gesetz:** Im elastischen Bereich sind Spannung und Dehnung proportional:

$$\sigma = E \cdot \varepsilon$$

mit dem **Elastizitätsmodul** $E$ (Materialkennwert): typische Werte

- Stahl: $E \approx 210$ GPa
- Aluminium: $E \approx 70$ GPa
- Beton: $E \approx 30$ GPa
- Gummi: $E \approx 0{,}01$ GPa

**Längenänderung:** Aus $\sigma = F/A$ und $\varepsilon = \Delta l / l_0$ folgt:

$$\Delta l = \frac{F \cdot l_0}{E \cdot A}$$

**Typischer Fehler:** Inkonsistente Einheiten — $E$ in GPa, $\sigma$ in MPa, $l_0$ in mm. Tipp: Alles in N, mm, MPa halten, dann passt alles.`,

    conceptQuestion: 'Ein Stahlstab ($E = 210$ GPa) wird elastisch gedehnt. Eine Verdoppelung der Zugkraft verdoppelt die Dehnung. Welches Gesetz beschreibt das?',
    conceptOptions: [
      'Hookesches Gesetz: $\\sigma = E \\cdot \\varepsilon$ — linearer Zusammenhang im elastischen Bereich',
      'Newtonsches Gesetz: $F = m \\cdot a$',
      'Coulombsches Reibungsgesetz',
      'Archimedes-Prinzip',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Das Hookesche Gesetz $\\sigma = E \\cdot \\varepsilon$ beschreibt die lineare Elastizität: doppelte Spannung → doppelte Dehnung. $E$ ist materialspezifisch und ein Maß für die Steifigkeit. Oberhalb der Streckgrenze verlässt das Material diesen linearen Bereich (plastische Verformung).',
    conceptHints: [
      'Im elastischen Bereich: Spannung ∝ Dehnung.',
      'Der Proportionalitätsfaktor ist der E-Modul $E$.',
    ],

    calcQuestion: 'Ein Stahlstab ($E = 210$ GPa, $A = 100$ mm², $l_0 = 2$ m) wird mit $F = 21000$ N belastet. Wie groß ist $\\Delta l$ in mm?',
    calcAnswer: 2,
    calcTolerance: 0.02,
    calcUnit: 'mm',
    calcExplanation: '$\\Delta l = \\frac{F \\cdot l_0}{E \\cdot A}$. Mit $E = 210000$ MPa (GPa $\\to$ MPa), $l_0 = 2000$ mm: $\\Delta l = \\frac{21000 \\cdot 2000}{210000 \\cdot 100} = \\frac{4{,}2 \\cdot 10^7}{2{,}1 \\cdot 10^7} = 2$ mm.',
    calcHints: [
      'Einheiten konsistent machen: $E$ in MPa, $l_0$ in mm, $A$ in mm², $F$ in N.',
      '$1$ GPa $= 1000$ MPa.',
      'Formel: $\\Delta l = F l_0 / (E A)$.',
    ],

    trueFalseStatement: 'Das Hookesche Gesetz gilt für alle Materialien bei allen Belastungen.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Hooke gilt nur im linear-elastischen Bereich, unterhalb der Streckgrenze $R_e$ (bzw. $R_{p0,2}$). Oberhalb tritt plastische Verformung ein — $\\sigma$ und $\\varepsilon$ sind dann nichtlinear verknüpft. Manche Materialien wie Gummi zeigen nie ein reines Hooke-Verhalten.',
    trueFalseHints: [
      'Jedes Material hat einen begrenzten linear-elastischen Bereich.',
      'Ab der Streckgrenze wird das Verhalten plastisch und nichtlinear.',
    ],

    matchingQuestion: 'Ordne die Materialien ihren E-Moduln zu.',
    matchingPairs: [
      { left: 'Stahl', right: '$E \\approx 210$ GPa' },
      { left: 'Aluminium', right: '$E \\approx 70$ GPa' },
      { left: 'Beton', right: '$E \\approx 30$ GPa' },
      { left: 'Gummi', right: '$E \\approx 0{,}01$ GPa' },
    ],
    matchingExplanation: 'Der E-Modul misst die Steifigkeit: Je größer, desto weniger verformt sich das Material bei gleicher Spannung. Stahl ist etwa 3× steifer als Aluminium — wichtig bei Leichtbau-Entscheidungen.',
    matchingHints: [
      'Stahl ist mit 210 GPa die Referenz.',
      'Aluminium liegt bei etwa einem Drittel davon.',
    ],

    sortingQuestion: 'Ordne die Berechnungsschritte für die Längenänderung eines Zugstabes.',
    sortingItems: [
      'Material wählen und E-Modul nachschlagen',
      'Querschnittsfläche $A$ aus Geometrie berechnen',
      'Spannung $\\sigma = F/A$ ermitteln',
      'Dehnung $\\varepsilon = \\sigma / E$ ermitteln',
      'Längenänderung $\\Delta l = \\varepsilon \\cdot l_0$',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Der Rechenweg folgt der Logik: Material → Geometrie → Spannung → Dehnung → Verformung. Alternative Direktformel: $\\Delta l = F l_0 / (E A)$.',
    sortingHints: [
      'Zuerst Materialkennwert, dann Geometrie, dann Belastung.',
      'Aus Spannung wird Dehnung, aus Dehnung Längenänderung.',
    ],

    errorQuestion: 'Ein Student rechnet $\\Delta l = F l_0 / (E A) = (1000 \\text{ N} \\cdot 1 \\text{ m}) / (210 \\text{ GPa} \\cdot 100 \\text{ mm}^2) = 0{,}0476$ m. Was stimmt nicht?',
    errorOptions: [
      'Einheiten nicht konsistent: Entweder alles in SI (m, Pa) oder technisch (mm, MPa, N)',
      'Die Formel ist falsch',
      'Der E-Modul ist zu klein',
      'Es fehlt der Faktor 2',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student mischt SI und technische Einheiten: $l_0$ in m, $A$ in mm², $E$ in GPa. Richtig: entweder $l_0 = 1000$ mm, $A = 100$ mm², $E = 210000$ MPa → $\\Delta l = 1000 \\cdot 1000 / (210000 \\cdot 100) = 0{,}0476$ mm. Oder in SI: $l_0 = 1$ m, $A = 10^{-4}$ m², $E = 2{,}1 \\cdot 10^{11}$ Pa.',
    errorHints: [
      'Immer ein einheitliches Einheitensystem wählen.',
      'Technisch: N, mm, MPa. SI: N, m, Pa.',
    ],

    transferQuestion: 'Ein Aluminiumstab ($E = 70$ GPa, $A = 200$ mm², $l_0 = 1{,}5$ m) wird mit $\\sigma = 140$ MPa belastet. Wie groß ist $\\Delta l$ in mm?',
    transferAnswer: 3,
    transferTolerance: 0.02,
    transferUnit: 'mm',
    transferExplanation: '$\\varepsilon = \\sigma / E = 140 / 70000 = 0{,}002$. $\\Delta l = \\varepsilon \\cdot l_0 = 0{,}002 \\cdot 1500 = 3$ mm.',
    transferHints: [
      'Zuerst Dehnung: $\\varepsilon = \\sigma / E$.',
      'Dann $\\Delta l = \\varepsilon \\cdot l_0$.',
      'Konvertiere $E$ von GPa in MPa für einheitliche Einheiten.',
    ],
  },

  'fest-2-1': {
    explanation: String.raw`**Vertiefung Biegung:** Biegung tritt auf, wenn an einem Balken ein Moment $M$ wirkt. Die Randfaserspannung ist:

$$\sigma_b = \frac{M}{W}$$

wobei $W$ das **Widerstandsmoment** des Querschnitts ist. Typische Werte:

- Rechteck ($b \times h$): $W = \frac{b \cdot h^2}{6}$
- Kreis ($d$): $W = \frac{\pi d^3}{32}$
- Doppel-T (IPE/HEA): Tabellenwerk, z.B. IPE 200: $W \approx 194$ cm³

**Wichtig:** $W$ hängt quadratisch bzw. kubisch von der Höhe/Durchmesser ab. Deshalb sind hohe Querschnitte biegesteifer.

**Typischer Fehler:** Flächenträgheitsmoment $I$ mit Widerstandsmoment $W$ verwechselt. Es gilt $W = I/e$ mit $e =$ Randfaserabstand.`,

    conceptQuestion: 'Warum hat ein Doppel-T-Träger im Vergleich zu einem massiven Rechteck gleicher Masse ein höheres Widerstandsmoment?',
    conceptOptions: [
      'Weil das Material weit vom Schwerpunkt entfernt ist — das vergrößert $W$ stark',
      'Weil Doppel-T aus Aluminium ist',
      'Weil die Dichte geringer ist',
      'Weil die Länge größer ist',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Das Widerstandsmoment ist $W = I/e$. Das Flächenträgheitsmoment $I$ wächst mit dem Abstand² zur neutralen Achse. Deshalb ist es materialsparend, Flanschen (Material) weit von der Mitte wegzuverteilen, wie beim Doppel-T.',
    conceptHints: [
      'Denk an $W$ als Maß für Biegesteifigkeit bei gleicher Masse.',
      'Material weit von der neutralen Achse entfernt = großes $I$.',
    ],

    calcQuestion: 'Ein rechteckiger Balken ($b = 20$ mm, $h = 60$ mm) wird mit Biegemoment $M = 1200$ Nm belastet. Wie groß ist die Randfaserspannung $\\sigma_b$ in MPa?',
    calcAnswer: 100,
    calcTolerance: 0.5,
    calcUnit: 'MPa',
    calcExplanation: '$W = b h^2 / 6 = 20 \\cdot 60^2 / 6 = 20 \\cdot 3600 / 6 = 12000$ mm³. $M$ in Nmm: $1200$ Nm $= 1{,}2 \\cdot 10^6$ Nmm. $\\sigma_b = M/W = 1{,}2 \\cdot 10^6 / 12000 = 100$ MPa.',
    calcHints: [
      'Widerstandsmoment eines Rechtecks: $W = b h^2/6$.',
      'Moment $M$ in Nmm umrechnen, wenn $W$ in mm³ und $\\sigma$ in MPa gesucht.',
      '$1$ Nm $= 1000$ Nmm.',
    ],

    trueFalseStatement: 'Bei einem Rechteckquerschnitt verdoppelt sich das Widerstandsmoment, wenn die Höhe verdoppelt wird.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. $W = b h^2/6$ hängt *quadratisch* von $h$ ab. Verdopplung von $h$ vervierfacht $W$. Deshalb sind schlanke hohe Querschnitte biegesteifer als breite flache gleicher Fläche.',
    trueFalseHints: [
      'Schau auf die Potenz von $h$ in der Formel.',
      'Quadratisch = $h^2$ = Verdopplung führt zu Vervierfachung.',
    ],

    matchingQuestion: 'Ordne die Querschnitte ihren Widerstandsmomenten zu.',
    matchingPairs: [
      { left: 'Rechteck $b \\times h$', right: '$W = bh^2/6$' },
      { left: 'Kreis (Durchmesser $d$)', right: '$W = \\pi d^3 / 32$' },
      { left: 'Quadrat (Seite $a$)', right: '$W = a^3/6$' },
      { left: 'Kreisrohr ($D$ außen, $d$ innen)', right: '$W = \\pi (D^4 - d^4)/(32 D)$' },
    ],
    matchingExplanation: 'Die Formeln für $W$ folgen aus $W = I/e$. Bei symmetrischen Querschnitten ist der Randfaserabstand $e = h/2$ bzw. $D/2$.',
    matchingHints: [
      'Rechteck: Fläche $bh$, Höhe² im Zähler.',
      'Kreis: $d^3$ mit Faktor $\\pi/32$.',
    ],

    sortingQuestion: 'Ordne die Schritte für einen Biegespannungsnachweis.',
    sortingItems: [
      'Belastung und Lagerart identifizieren',
      'Maximales Biegemoment $M_{max}$ berechnen (Momentenverlauf)',
      'Querschnitt wählen und $W$ bestimmen',
      'Spannung $\\sigma_b = M_{max}/W$ berechnen',
      'Vergleich mit zulässiger Biegespannung: $\\sigma_b \\leq \\sigma_{zul}$',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Der Momentenverlauf liefert das maximale Biegemoment — die Spannung ist an dieser Stelle am größten. Der letzte Schritt (Nachweis) ist die Ingenieurentscheidung.',
    sortingHints: [
      'Ohne $M_{max}$ kein Spannungsnachweis.',
      'Nachweis durch Vergleich mit zulässiger Spannung.',
    ],

    errorQuestion: 'Ein Student berechnet das Widerstandsmoment eines Kreises mit $W = \\pi d^4 / 32$. Was ist der Fehler?',
    errorOptions: [
      'Das ist das Flächenträgheitsmoment $I$, nicht $W$. Für Kreis: $W = I/e = (\\pi d^4/64)/(d/2) = \\pi d^3/32$',
      'Der Faktor muss 16 sein, nicht 32',
      'Die Formel gilt nur für Rohre',
      'Kreise haben kein Widerstandsmoment',
    ],
    errorCorrect: 0,
    errorExplanation: 'Flächenträgheitsmoment Kreis: $I = \\pi d^4/64$. Widerstandsmoment $W = I/e$ mit $e = d/2$: $W = (\\pi d^4/64)/(d/2) = \\pi d^3/32$. Die Formel $\\pi d^4/32$ ist falsch — die Einheit wäre mm⁴, also ein $I$, nicht ein $W$ (mm³).',
    errorHints: [
      'Einheitencheck: $W$ hat mm³, $I$ hat mm⁴.',
      '$W = I/e$, mit $e$ = Randfaserabstand.',
    ],

    transferQuestion: 'Welle (Kreisquerschnitt, $d = 40$ mm) wird mit Biegemoment $M = 502$ Nm belastet. Wie groß ist $\\sigma_b$ in MPa?',
    transferAnswer: 80,
    transferTolerance: 1,
    transferUnit: 'MPa',
    transferExplanation: '$W = \\pi d^3/32 = \\pi \\cdot 40^3 / 32 = \\pi \\cdot 64000/32 = 2000\\pi \\approx 6283$ mm³. $M = 502$ Nm $= 502000$ Nmm. $\\sigma_b = 502000/6283 \\approx 80$ MPa.',
    transferHints: [
      'Widerstandsmoment Kreis: $W = \\pi d^3/32$.',
      'Moment in Nmm für konsistente Einheiten.',
      '$W$ in mm³, $M$ in Nmm → $\\sigma$ in MPa.',
    ],
  },

  'fest-2-2': {
    explanation: String.raw`**Vertiefung Zusammengesetzte Belastung:** In der Praxis wirken oft mehrere Spannungszustände gleichzeitig: Normalspannung + Biegespannung, oder Normalspannung + Schubspannung aus Torsion. Der Nachweis erfolgt über eine **Vergleichsspannung**, die auf die einachsige Zugprobe normiert wird.

**Von-Mises-Hypothese** (zäher Stahl):

$$\sigma_v = \sqrt{\sigma^2 + 3 \tau^2}$$

für kombinierten Zug + Torsion. Bei zweiachsiger Spannung $(\sigma_x, \sigma_y, \tau_{xy})$:

$$\sigma_v = \sqrt{\sigma_x^2 - \sigma_x \sigma_y + \sigma_y^2 + 3 \tau_{xy}^2}$$

**Tresca-Hypothese** (spröder Stahl): $\sigma_v = \sigma_{max} - \sigma_{min}$.

**Nachweis:** $\sigma_v \leq \sigma_{zul} = R_e / S$ (mit Sicherheitszahl $S$).

**Typischer Fehler:** Spannungen vorzeichenbehaftet vergessen, Torsion vergessen, falsche Hypothese gewählt.`,

    conceptQuestion: 'Wann wird die Von-Mises-Hypothese bevorzugt gegenüber Tresca?',
    conceptOptions: [
      'Bei zähen Werkstoffen wie Baustahl — Von Mises gibt realistischere Werte bei Kombination von Schub und Normalspannung',
      'Immer — Tresca ist veraltet',
      'Nur bei einachsiger Belastung',
      'Nur bei sprödem Material wie Gusseisen',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Von Mises (Gestaltänderungsenergie) beschreibt das Fließverhalten zäher Metalle präzise. Tresca (Schubspannung) ist konservativ und wird bei spröden Werkstoffen oder aus Sicherheitsgründen bevorzugt. Bei reiner Normalspannung fallen beide zusammen.',
    conceptHints: [
      'Zäher Werkstoff = Fließen, bevor er bricht.',
      'Von Mises ist im Maschinenbau Standard.',
    ],

    calcQuestion: 'Ein Stab wird gleichzeitig mit $\\sigma = 120$ MPa (Zug) und $\\tau = 50$ MPa (Torsion) belastet. Wie groß ist die Von-Mises-Vergleichsspannung $\\sigma_v$ in MPa?',
    calcAnswer: 148.3,
    calcTolerance: 0.5,
    calcUnit: 'MPa',
    calcExplanation: '$\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2} = \\sqrt{120^2 + 3 \\cdot 50^2} = \\sqrt{14400 + 7500} = \\sqrt{21900} \\approx 148{,}3$ MPa.',
    calcHints: [
      'Formel Von Mises für Zug + Torsion: $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$.',
      'Der Faktor 3 vor $\\tau^2$ nicht vergessen — sonst unterschätzt man die Spannung.',
      '$\\sqrt{21900} \\approx 148{,}3$.',
    ],

    trueFalseStatement: 'Bei reiner Normalspannung ($\\tau = 0$) stimmen Von-Mises- und Tresca-Vergleichsspannung überein und sind gleich $|\\sigma|$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Bei einachsiger Beanspruchung ($\\sigma_1 = \\sigma$, $\\sigma_2 = \\sigma_3 = 0$, $\\tau = 0$) gilt: Von Mises $\\sigma_v = \\sqrt{\\sigma^2} = |\\sigma|$ und Tresca $\\sigma_v = \\sigma_1 - \\sigma_3 = \\sigma$. Beide Hypothesen geben denselben Wert — bei Kombinationen weichen sie jedoch ab.',
    trueFalseHints: [
      'Einachsig: nur eine Hauptspannung ungleich null.',
      'Die Hypothesen unterscheiden sich nur bei mehrachsiger Beanspruchung.',
    ],

    matchingQuestion: 'Ordne die Konzepte ihren Bedeutungen zu.',
    matchingPairs: [
      { left: 'Von-Mises-Vergleichsspannung', right: '$\\sqrt{\\sigma^2 + 3\\tau^2}$' },
      { left: 'Tresca-Vergleichsspannung', right: '$\\sigma_{max} - \\sigma_{min}$' },
      { left: 'Sicherheitszahl $S$', right: 'Verhältnis $R_e / \\sigma_v$' },
      { left: 'Zulässige Spannung $\\sigma_{zul}$', right: '$R_e / S$' },
    ],
    matchingExplanation: 'Vergleichsspannungen reduzieren einen mehrachsigen Spannungszustand auf einen einachsigen äquivalenten Wert, der mit der Werkstoffkennlinie verglichen werden kann.',
    matchingHints: [
      'Von Mises nutzt $\\sqrt{\\,\\cdot\\,}$, Tresca eine einfache Differenz.',
      'Sicherheitszahl: wie viel Reserve gegenüber Fließgrenze.',
    ],

    sortingQuestion: 'Ordne die Schritte für einen Festigkeitsnachweis bei zusammengesetzter Belastung.',
    sortingItems: [
      'Alle Teilspannungen separat bestimmen: $\\sigma$ (Zug/Biegung), $\\tau$ (Schub/Torsion)',
      'Hypothese wählen (Von Mises für zähe, Tresca für spröde Werkstoffe)',
      'Vergleichsspannung $\\sigma_v$ berechnen',
      'Zulässige Spannung $\\sigma_{zul} = R_e/S$ bestimmen',
      'Nachweis: $\\sigma_v \\leq \\sigma_{zul}$?',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Der Nachweis folgt der Logik: Teilbelastungen trennen, kombinieren, Material-Grenze vergleichen. Der letzte Schritt entscheidet, ob das Bauteil hält.',
    sortingHints: [
      'Jede Teilbelastung getrennt, dann kombinieren.',
      'Zulässige Spannung ist die Grenze, Vergleichsspannung der Ist-Wert.',
    ],

    errorQuestion: 'Ein Student berechnet bei kombiniertem Zug ($\\sigma = 150$ MPa) und Schub ($\\tau = 80$ MPa): "$\\sigma_v = \\sigma + \\tau = 230$ MPa". Was stimmt nicht?',
    errorOptions: [
      'Vergleichsspannungen addieren sich nicht linear. Richtig: $\\sigma_v = \\sqrt{150^2 + 3 \\cdot 80^2} \\approx 210$ MPa',
      'Die Zahlenwerte sind zu groß',
      'Schubspannung wird subtrahiert, nicht addiert',
      '$\\sigma_v$ gibt es nur bei reiner Normalspannung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Spannungen sind Tensor-Komponenten, keine Skalare — sie addieren sich nicht einfach. Die Hypothesen (Von Mises, Tresca) definieren, wie aus mehreren Komponenten eine skalare Vergleichsspannung wird.',
    errorHints: [
      'Spannungen haben Richtungen und Tensorstruktur.',
      'Die Hypothese gibt die richtige Kombinationsregel.',
    ],

    transferQuestion: 'Ein Stab wird mit $\\sigma = 100$ MPa und $\\tau = 60$ MPa belastet. Streckgrenze $R_e = 240$ MPa. Wie groß ist die Sicherheitszahl $S = R_e / \\sigma_v$ (Von Mises)?',
    transferAnswer: 1.6,
    transferTolerance: 0.02,
    transferUnit: '',
    transferExplanation: '$\\sigma_v = \\sqrt{100^2 + 3 \\cdot 60^2} = \\sqrt{10000 + 10800} = \\sqrt{20800} \\approx 144{,}22$ MPa. $S = R_e/\\sigma_v = 240/144{,}22 \\approx 1{,}6$. Eine Sicherheit von 1,6 ist bei dynamischen Lasten im üblichen Rahmen.',
    transferHints: [
      'Zuerst $\\sigma_v$ mit Von Mises.',
      'Sicherheitszahl = Streckgrenze geteilt durch Vergleichsspannung.',
      '$S > 1$ bedeutet Reserve vorhanden.',
    ],
  },

  'fest-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Festigkeitsnachweis:** Ein vollständiger Nachweis umfasst typischerweise:

1. **Belastungsanalyse:** Welche Kräfte/Momente wirken? Freikörperbild.
2. **Schnittgrößen bestimmen:** $N$ (Normal), $Q$ (Schub), $M$ (Biege), $M_t$ (Torsion).
3. **Spannungsberechnung:**
   - Zug/Druck: $\sigma = N/A$
   - Biegung: $\sigma_b = M/W$
   - Torsion: $\tau_t = M_t/W_p$
4. **Vergleichsspannung (wenn mehrachsig):** z.B. Von Mises.
5. **Nachweis:** $\sigma_v \leq \sigma_{zul} = R_e/S$.

**Wichtige Widerstandsmomente (polar, für Torsion):** Kreis: $W_p = \pi d^3/16$. Das ist die Hälfte von $\pi d^3/32 \cdot 2$ — nicht verwechseln mit dem axialen $W$.

**Prüfungsfallen:**
- Axiales $W$ vs. polares $W_p$ verwechselt
- Sicherheitszahl $S$ falsch herum berechnet (soll $>1$ sein!)
- Einheiten: $M$ in Nmm, $W$ in mm³, $\sigma$ in MPa`,

    conceptQuestion: 'Eine Welle wird durch ein Torsionsmoment $M_t$ belastet. Welche Formel liefert die maximale Schubspannung?',
    conceptOptions: [
      '$\\tau_{max} = M_t / W_p$ mit $W_p = \\pi d^3/16$ für Vollkreis',
      '$\\tau_{max} = M_t \\cdot W_p$',
      '$\\tau_{max} = M_t / A$',
      '$\\tau_{max} = M_t / I$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Torsionsspannung: $\\tau_t = M_t/W_p$ mit polarem Widerstandsmoment. Für Vollkreis $W_p = \\pi d^3/16$ — doppelt so groß wie das axiale $W = \\pi d^3/32$, weil die gesamte Querschnittsumfangsfläche zur Torsionsaufnahme beiträgt.',
    conceptHints: [
      'Torsion nutzt das polare Widerstandsmoment $W_p$.',
      'Für Kreisquerschnitt: $W_p = \\pi d^3/16$.',
    ],

    calcQuestion: 'Welle (Kreis, $d = 50$ mm) wird mit $M_t = 1000$ Nm belastet. Wie groß ist die maximale Schubspannung $\\tau_{max}$ in MPa?',
    calcAnswer: 40.74,
    calcTolerance: 0.2,
    calcUnit: 'MPa',
    calcExplanation: '$W_p = \\pi d^3/16 = \\pi \\cdot 125000/16 = 7812{,}5\\pi \\approx 24544$ mm³. $M_t = 1000$ Nm $= 10^6$ Nmm. $\\tau = M_t/W_p = 10^6 / 24544 \\approx 40{,}74$ MPa.',
    calcHints: [
      'Polares Widerstandsmoment Kreis: $\\pi d^3/16$.',
      'Einheiten: $M_t$ in Nmm, $W_p$ in mm³ → $\\tau$ in MPa.',
    ],

    trueFalseStatement: 'Die Sicherheitszahl $S$ muss für einen sicheren Nachweis größer als 1 sein, typisch 1,5 bis 3 bei statischen Lasten.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. $S = R_e/\\sigma_v > 1$ heißt: Die Beanspruchung bleibt unterhalb der Fließgrenze. Übliche Werte: 1,5 bei Maschinenbauteilen mit statischer Last, 2–3 bei dynamischen Lasten oder Unsicherheiten, 4+ bei kritischen Anwendungen (Luftfahrt, Aufzüge).',
    trueFalseHints: [
      'Sicherheitszahl zeigt den Abstand zur Fließgrenze.',
      '$S = 1$ wäre gerade der Grenzfall — zu wenig Reserve.',
    ],

    matchingQuestion: 'Ordne die Formeln ihren Belastungsarten zu.',
    matchingPairs: [
      { left: 'Zug/Druck', right: '$\\sigma = N/A$' },
      { left: 'Biegung', right: '$\\sigma_b = M/W$' },
      { left: 'Torsion (Kreis)', right: '$\\tau_t = M_t/W_p$ mit $W_p = \\pi d^3/16$' },
      { left: 'Abscherung', right: '$\\tau = F/A$' },
    ],
    matchingExplanation: 'Die vier Grundbeanspruchungen der Festigkeitslehre — jede mit eigener Kenngröße im Nenner ($A$, $W$, $W_p$).',
    matchingHints: [
      'Normalspannung nutzt Fläche, Biegung das axiale Widerstandsmoment.',
      'Torsion unterscheidet sich durch $W_p$ (polar).',
    ],

    sortingQuestion: 'Ordne die Schritte eines kompletten Festigkeitsnachweises.',
    sortingItems: [
      'Freikörperbild und Belastungen identifizieren',
      'Schnittgrößen $N, Q, M, M_t$ berechnen',
      'Einzelspannungen $\\sigma$ und $\\tau$ mit passenden Formeln',
      'Vergleichsspannung $\\sigma_v$ (Von Mises)',
      'Zulässige Spannung $\\sigma_{zul} = R_e/S$ mit Sicherheitsfaktor',
      'Nachweis: $\\sigma_v \\leq \\sigma_{zul}$',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5],
    sortingExplanation: 'Die Logik: Belastung → Schnittgrößen → Spannungen → Vergleich → Nachweis. Ein fehlender Schritt macht den Nachweis unvollständig — in Klausuren ein häufiger Punktabzug.',
    sortingHints: [
      'Vollständiger Nachweis braucht alle 6 Schritte.',
      'Schnittgrößen kommen vor den Spannungen.',
    ],

    errorQuestion: 'Ein Student rechnet: "Welle mit $M_t = 500$ Nm, $d = 30$ mm. $W = \\pi d^3/32 = 2650$ mm³. $\\tau = M_t/W = 189$ MPa." Was ist falsch?',
    errorOptions: [
      'Für Torsion ist das polare $W_p = \\pi d^3/16 = 5300$ mm³ zu nutzen — korrekt: $\\tau = 94{,}3$ MPa',
      'Die Einheiten sind falsch',
      '$M_t$ muss in Nm bleiben, nicht Nmm',
      'Torsion gibt Normalspannung, nicht Schubspannung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat das axiale Widerstandsmoment $W = \\pi d^3/32$ genutzt — das gilt für Biegung, nicht für Torsion. Für Torsion: $W_p = \\pi d^3/16 = 2 \\cdot W$. Deshalb ist die berechnete Spannung doppelt so groß wie tatsächlich.',
    errorHints: [
      'Axiales $W$ ≠ polares $W_p$.',
      '$W_p$ ist doppelt so groß wie $W$ bei Kreisquerschnitt.',
    ],

    transferQuestion: 'Welle ($d = 60$ mm) wird mit $\\sigma = 40$ MPa (Biegung) und $\\tau = 30$ MPa (Torsion) belastet. Streckgrenze $R_e = 300$ MPa. Sicherheitszahl $S$ (Von Mises)?',
    transferAnswer: 4.4,
    transferTolerance: 0.1,
    transferUnit: '',
    transferExplanation: '$\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2} = \\sqrt{1600 + 2700} = \\sqrt{4300} \\approx 65{,}57$ MPa. $S = R_e/\\sigma_v = 300/65{,}57 \\approx 4{,}57$. Mit kleineren Rundungen: 4,4–4,6. Dieser Bauteilbereich ist deutlich übersichert.',
    transferHints: [
      'Von Mises: $\\sqrt{\\sigma^2 + 3\\tau^2}$.',
      'Sicherheitszahl = Streckgrenze / Vergleichsspannung.',
    ],
  },
}

export const festigkeitSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
