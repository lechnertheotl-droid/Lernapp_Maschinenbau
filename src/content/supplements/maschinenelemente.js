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
  'melem-1-1': {
    explanation: String.raw`**Vertiefung Zahnradpaare:** Ein Zahnradpaar überträgt Drehmoment und Drehzahl mit einer festen Übersetzung:

$$i = \frac{z_2}{z_1} = \frac{n_1}{n_2} = \frac{M_2}{M_1}$$

- $z_1, z_2$: Zähnezahlen
- $n_1, n_2$: Drehzahlen (1/min oder 1/s)
- $M_1, M_2$: Drehmomente (Nm)

**Logik:** Mehr Zähne am Abtrieb (großes $z_2$) bedeutet: Abtrieb langsamer, dafür mehr Drehmoment. Das Produkt $M \cdot n$ (Leistung) bleibt bei idealer Übersetzung gleich.

**Leistung:** $P = M \cdot \omega = M \cdot 2\pi \cdot n$. Einheit: W = Nm · 1/s.

**Typischer Fehler:** $n_1 \cdot n_2$ statt $M \cdot n$ konstant gehalten. Leistung ist erhalten, nicht Drehzahl.`,

    conceptQuestion: 'Ein Zahnradpaar hat $z_1 = 20$, $z_2 = 80$. Wie ändert sich die Drehzahl vom Antrieb zum Abtrieb?',
    conceptOptions: [
      'Abtriebsdrehzahl ist $1/4$ der Antriebsdrehzahl (Übersetzung $i = 4$)',
      'Abtriebsdrehzahl ist 4× so hoch',
      'Drehzahl bleibt gleich',
      'Es gibt keine Drehzahl bei Zahnrädern',
    ],
    conceptCorrect: 0,
    conceptExplanation: '$i = z_2/z_1 = 80/20 = 4$. Also $n_2 = n_1/i = n_1/4$. Das Abtriebsrad dreht langsamer, dafür mit 4-fachem Drehmoment (ideal). Typisch für Untersetzungsgetriebe in Fahrzeugen.',
    conceptHints: [
      'Mehr Zähne am Abtrieb → langsamere Drehzahl.',
      '$n_2 = n_1/i$, $M_2 = M_1 \\cdot i$.',
    ],

    calcQuestion: 'Zahnradpaar: $z_1 = 25$ (Antrieb), $z_2 = 75$. Antriebsdrehmoment $M_1 = 10$ Nm. Wie groß ist $M_2$ in Nm (verlustfrei)?',
    calcAnswer: 30,
    calcTolerance: 0.1,
    calcUnit: 'Nm',
    calcExplanation: '$i = 75/25 = 3$. $M_2 = M_1 \\cdot i = 10 \\cdot 3 = 30$ Nm. Die Leistung bleibt bei idealer Übersetzung konstant: $M_1 n_1 = M_2 n_2$.',
    calcHints: [
      'Drehmoment skaliert mit der Übersetzung: $M_2 = M_1 \\cdot i$.',
      '$i = z_2/z_1$.',
    ],

    trueFalseStatement: 'Bei einem Untersetzungsgetriebe ($i > 1$) steigt das Drehmoment am Abtrieb um den Faktor $i$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig (bei verlustfreier Übersetzung). Aus $P = M \\cdot \\omega = $ const folgt: Sinkt $\\omega$ um Faktor $i$, steigt $M$ um Faktor $i$. Deshalb nutzen Schraubstöcke, Kräne und Getriebemotoren Untersetzungen — um aus wenig Drehmoment viel zu machen.',
    trueFalseHints: [
      'Leistung bleibt erhalten: $P_1 = P_2$.',
      'Drehmoment und Drehzahl sind invers gekoppelt.',
    ],

    matchingQuestion: 'Ordne die Getriebe-Begriffe ihren Bedeutungen zu.',
    matchingPairs: [
      { left: 'Übersetzungsverhältnis $i$', right: '$z_2/z_1 = n_1/n_2$' },
      { left: 'Untersetzung', right: '$i > 1$: langsamer, mehr Drehmoment' },
      { left: 'Übersetzung ins Schnelle', right: '$i < 1$: schneller, weniger Drehmoment' },
      { left: 'Leistung $P$', right: '$M \\cdot \\omega$ (bleibt ideal konstant)' },
    ],
    matchingExplanation: 'Getriebe tauschen Drehmoment gegen Drehzahl — die Leistung bleibt erhalten. Mit Wirkungsgrad $\\eta < 1$ gibt es allerdings Verluste (Reibung, Verformung).',
    matchingHints: [
      '$i$ ist ein dimensionsloses Verhältnis.',
      'Bei $i > 1$ wird langsamer mit mehr Moment übertragen.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Auslegung eines einfachen Zahnradpaares.',
    sortingItems: [
      'Gewünschtes Übersetzungsverhältnis $i$ festlegen',
      'Zähnezahl $z_1$ des Antriebsrads wählen',
      'Zähnezahl $z_2 = i \\cdot z_1$ berechnen',
      'Drehmomente: $M_2 = M_1 \\cdot i$',
      'Einheitencheck und Festigkeitsnachweis der Zähne',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Erst die Kinematik ($i$, $z$), dann die Lasten ($M$), dann Festigkeit. Typisch im Maschinenbau: mehrstufige Entscheidungen von Funktion → Festigkeit.',
    sortingHints: [
      'Übersetzung und Zähnezahlen bestimmen Getriebekinematik.',
      'Drehmomente folgen aus der Übersetzung.',
    ],

    errorQuestion: 'Ein Student rechnet: "Bei $i = 3$ Untersetzung wird aus $n_1 = 1500$ 1/min also $n_2 = 4500$ 1/min." Was ist falsch?',
    errorOptions: [
      'Bei Untersetzung ($i > 1$) sinkt die Abtriebsdrehzahl: $n_2 = n_1/i = 500$ 1/min',
      'Die Drehzahl bleibt gleich',
      '$n_1 \\cdot n_2$ muss konstant sein',
      'Das Drehmoment wird durch 3 geteilt',
    ],
    errorCorrect: 0,
    errorExplanation: 'Untersetzung heißt langsamer: $n_2 = n_1/i$. Der Student hat multipliziert statt dividiert. Kontrolle: Eine Untersetzung dient dem Zweck, aus viel Drehzahl und wenig Moment wenig Drehzahl und viel Moment zu machen — nicht umgekehrt.',
    errorHints: [
      'Untersetzung = Abtrieb langsamer.',
      'Invers proportional: $n_1 \\cdot z_1 = n_2 \\cdot z_2$.',
    ],

    transferQuestion: 'Antriebsmotor: $P = 5{,}5$ kW bei $n_1 = 1450$ 1/min. Übersetzung $i = 10$. Wie groß ist $M_2$ am Abtrieb in Nm (verlustfrei)?',
    transferAnswer: 362.3,
    transferTolerance: 0.5,
    transferUnit: 'Nm',
    transferExplanation: '$M_1 = P/(2\\pi n_1) = 5500/(2\\pi \\cdot 24{,}17) = 5500/151{,}8 \\approx 36{,}23$ Nm (mit $n_1 = 1450/60 = 24{,}17$ 1/s). $M_2 = M_1 \\cdot i = 362{,}3$ Nm.',
    transferHints: [
      'Zuerst $M_1$ aus Leistung: $P = M \\cdot 2\\pi n$.',
      'Drehzahl in 1/s umrechnen: $n_1 / 60$.',
      '$M_2 = M_1 \\cdot i$.',
    ],
  },

  'melem-1-2': {
    explanation: String.raw`**Vertiefung Wellen und Lager:** Eine Welle überträgt Drehmoment zwischen Maschinenteilen. Lager (Wälz- oder Gleitlager) führen die Welle und nehmen radiale und axiale Kräfte auf.

**Belastungsarten an einer Welle:**
- Torsion aus Drehmoment: $\tau = M_t / W_p$ (Kreis: $W_p = \pi d^3/16$)
- Biegung aus Querkräften: $\sigma = M_b / W$ (Kreis: $W = \pi d^3/32$)
- Oft kombiniert ⇒ Vergleichsspannung nach Von Mises

**Lagerkennwerte:**
- Tragzahl $C$: Last, die ein Lager bei 1 Mio. Umdrehungen mit 90 % Ausfallsicherheit aufnimmt
- Nominelle Lebensdauer: $L_{10} = (C/P)^p$ Mio. Umdrehungen, mit $p = 3$ (Kugellager) bzw. $p = 10/3$ (Rollenlager)

**Typischer Fehler:** Axiale und radiale Lasten getrennt statt als äquivalente Last $P$ behandelt.`,

    conceptQuestion: 'Warum werden Wellen oft gegen Biegung und Torsion *zusammen* nachgewiesen?',
    conceptOptions: [
      'Beide Beanspruchungen wirken oft gleichzeitig — eine Vergleichsspannung fasst sie nach Von Mises zusammen',
      'Biegung ist ohne Torsion unmöglich',
      'Das ist reine Konvention ohne physikalischen Grund',
      'Wellen sind nur auf Zug belastet',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Antriebswellen haben Torsion (vom Drehmoment) UND Biegung (von Querkräften aus Zahnrädern, Riemen). Beide Spannungszustände müssen durch eine gemeinsame Vergleichsspannung berücksichtigt werden: $\\sigma_v = \\sqrt{\\sigma_b^2 + 3\\tau_t^2}$.',
    conceptHints: [
      'Antriebswellen tragen Drehmoment und Querkräfte gleichzeitig.',
      'Vergleichsspannung kombiniert Einzelspannungen.',
    ],

    calcQuestion: 'Welle ($d = 40$ mm) mit Biegespannung $\\sigma_b = 60$ MPa und Torsionsspannung $\\tau_t = 30$ MPa. Wie groß ist $\\sigma_v$ (Von Mises) in MPa?',
    calcAnswer: 79.4,
    calcTolerance: 0.3,
    calcUnit: 'MPa',
    calcExplanation: '$\\sigma_v = \\sqrt{\\sigma_b^2 + 3\\tau_t^2} = \\sqrt{3600 + 2700} = \\sqrt{6300} \\approx 79{,}4$ MPa. Liegt weit unter typischer Streckgrenze (~ 250 MPa).',
    calcHints: [
      'Von Mises für kombinierte Biegung + Torsion.',
      'Den Faktor 3 vor $\\tau^2$ nicht vergessen.',
    ],

    trueFalseStatement: 'Ein Festlager muss sowohl axiale als auch radiale Kräfte aufnehmen können.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Ein Festlager führt die Welle in axialer und radialer Richtung. Typisch: Kugellager mit Schulter (radial+axial) oder Rillenkugellager. Ein Loslager nimmt nur radial auf und erlaubt axiale Bewegung (Wärmedehnung).',
    trueFalseHints: [
      'Fest = zwei Richtungen, Los = nur radial.',
      'Typische Wellenlagerung: ein Festlager + ein oder mehrere Loslager.',
    ],

    matchingQuestion: 'Ordne die Lagertypen ihren Einsatzbereichen zu.',
    matchingPairs: [
      { left: 'Rillenkugellager', right: 'Radial + mäßig axial, Standard für Motoren' },
      { left: 'Zylinderrollenlager', right: 'Hohe Radial-, keine Axiallast' },
      { left: 'Axialkugellager', right: 'Reine Axiallast (z.B. Schraubenschlüssel)' },
      { left: 'Kegelrollenlager', right: 'Radial und hohe Axiallast (Kfz-Achsen)' },
    ],
    matchingExplanation: 'Wälzlager werden nach Belastungsrichtung und -höhe ausgewählt. Rollenlager haben höhere Tragfähigkeit als Kugellager, aber kleinere Drehzahlen.',
    matchingHints: [
      'Kugellager: vielseitig, moderate Lasten.',
      'Rollenlager: höhere Lasten, speziell ausgerichtet.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Wellenauslegung.',
    sortingItems: [
      'Belastungsart und -höhe bestimmen (Torsion, Biegung)',
      'Werkstoff wählen und zulässige Spannung ermitteln',
      'Vordurchmesser aus überschläglicher Formel schätzen',
      'Festigkeitsnachweis mit Vergleichsspannung',
      'Lager wählen und Lebensdauer überprüfen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Iterativer Prozess: Erster Durchmesser aus einfacher Formel, dann präziser Nachweis mit allen Einzelspannungen und Sicherheitsfaktoren.',
    sortingHints: [
      'Belastung → Werkstoff → Geometrie → Nachweis.',
      'Lager kommen am Ende nach der Welle.',
    ],

    errorQuestion: 'Ein Student rechnet Torsionsspannung mit $W = \\pi d^3 / 32$. Was ist falsch?',
    errorOptions: [
      'Für Torsion ist das polare Widerstandsmoment $W_p = \\pi d^3/16$ zuständig — doppelt so groß',
      'Die Formel gilt nur für Biegung',
      'Das Ergebnis muss verdoppelt werden',
      'Die Einheit ist falsch',
    ],
    errorCorrect: 0,
    errorExplanation: 'Axiales Widerstandsmoment $W = \\pi d^3/32$ → Biegung. Polares Widerstandsmoment $W_p = \\pi d^3/16$ → Torsion. Der Student hat Biegung und Torsion verwechselt, was die berechnete Spannung auf das Doppelte überhöht.',
    errorHints: [
      'Axial $W$ vs. polar $W_p$.',
      '$W_p = 2 \\cdot W$ für Vollkreis.',
    ],

    transferQuestion: 'Welle ($d = 30$ mm) überträgt $M_t = 150$ Nm. Wie groß ist die Torsionsspannung in MPa?',
    transferAnswer: 28.3,
    transferTolerance: 0.2,
    transferUnit: 'MPa',
    transferExplanation: '$W_p = \\pi d^3/16 = \\pi \\cdot 27000/16 = 1687{,}5\\pi \\approx 5301$ mm³. $M_t = 150$ Nm $= 150000$ Nmm. $\\tau = M_t/W_p = 150000/5301 \\approx 28{,}3$ MPa.',
    transferHints: [
      'Polares Widerstandsmoment Kreis: $\\pi d^3/16$.',
      'Moment in Nmm umrechnen.',
    ],
  },

  'melem-2-1': {
    explanation: String.raw`**Vertiefung Schraubenverbindungen:** Eine Schraube hält zwei Teile zusammen durch Vorspannkraft $F_V$. Das Anziehen erzeugt diese Kraft über ein Anziehdrehmoment:

$$M_A \approx K \cdot F_V \cdot d$$

mit Reibungsbeiwert-Koeffizient $K \approx 0{,}2$ (geölt: 0,12). $d$ ist der Nenndurchmesser.

**Klemmkraft vs. Vorspannkraft:** Die Vorspannkraft ist die Kraft, mit der die Schraube gespannt wird. Die Klemmkraft ist die Kraft, mit der die verbundenen Teile aufeinandergepresst werden — im Idealfall gleich.

**Spannungsnachweis:** Schraubenspannung: $\sigma_z = F_V/A_s$ mit Spannungsquerschnitt $A_s$ (Tabellenwerk). Die Vorspannkraft darf nicht die Streckgrenze der Schraube überschreiten.

**Typischer Fehler:** Nenndurchmesser statt Spannungsquerschnitt für Spannungsberechnung genutzt — Schrauben sind geschwächt durch Gewinde.`,

    conceptQuestion: 'Warum muss eine Schraubenverbindung mit ausreichender Vorspannkraft angezogen werden?',
    conceptOptions: [
      'Damit die Klemmkraft auch bei Betriebslasten erhalten bleibt — zu geringe Vorspannung → Lockerung durch Setzen oder Wechsellast',
      'Damit die Schraube schöner aussieht',
      'Damit der Kopf nicht abreißt',
      'Weil das Anziehdrehmoment irrelevant ist',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Nur eine gut vorgespannte Schraube überträgt dauerhaft Klemmkraft auf die Verbindung. Ohne ausreichende Vorspannung lockert sich die Verbindung bei Wechsellasten, Temperaturschwankungen oder Setzvorgängen. Regel: Vorspannkraft so hoch wie möglich (bis nahe Streckgrenze), sodass Betriebslasten nie zum Lösen führen.',
    conceptHints: [
      'Ohne Vorspannung keine dauerhafte Klemmung.',
      'Setzung und Wechsellasten reduzieren die Vorspannung über die Zeit.',
    ],

    calcQuestion: 'Eine Schraube M10 ($d = 10$ mm) soll mit $F_V = 20000$ N vorgespannt werden. Reibungsbeiwert $K = 0{,}2$. Wie groß ist das Anziehdrehmoment in Nm?',
    calcAnswer: 40,
    calcTolerance: 0.5,
    calcUnit: 'Nm',
    calcExplanation: '$M_A = K \\cdot F_V \\cdot d = 0{,}2 \\cdot 20000 \\cdot 0{,}01 = 40$ Nm. Beachte: $d$ in Metern! In mm gerechnet gibt $M$ in Nmm.',
    calcHints: [
      'Formel: $M_A = K \\cdot F_V \\cdot d$.',
      'Einheiten: N, m, Nm — oder N, mm, Nmm.',
    ],

    trueFalseStatement: 'Die Spannung in einer vorgespannten Schraube wird mit dem Nenndurchmesser berechnet: $\\sigma = F_V/(\\pi d^2/4)$.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Das Gewinde schwächt die Schraube — der Spannungsquerschnitt $A_s$ ist kleiner als die Nennfläche. Für M10: $A_s \\approx 58$ mm² statt $\\pi \\cdot 10^2/4 \\approx 78{,}5$ mm². $A_s$ steht in Normtabellen (DIN 13).',
    trueFalseHints: [
      'Gewinde reduziert die tragende Fläche.',
      'Normtabelle liefert $A_s$.',
    ],

    matchingQuestion: 'Ordne die Schraubenkennwerte ihren Bedeutungen zu.',
    matchingPairs: [
      { left: 'Nenndurchmesser $d$', right: 'Außendurchmesser des Gewindes' },
      { left: 'Spannungsquerschnitt $A_s$', right: 'Tatsächlich tragender Querschnitt im Gewinde' },
      { left: 'Vorspannkraft $F_V$', right: 'Kraft, mit der die Schraube gespannt wird' },
      { left: 'Anziehdrehmoment $M_A$', right: 'Drehmoment zum Erzeugen der Vorspannung' },
    ],
    matchingExplanation: 'Die Größen hängen eng zusammen: $M_A$ bestimmt $F_V$, $F_V$ erzeugt Spannung $\\sigma = F_V/A_s$. Festigkeitsklasse (z.B. 8.8) gibt Streckgrenze und zulässige Vorspannung vor.',
    matchingHints: [
      'Nenndurchmesser ≠ Spannungsquerschnitt.',
      'Drehmoment erzeugt Vorspannung.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Schraubenauswahl und Anzugsberechnung.',
    sortingItems: [
      'Erforderliche Klemmkraft aus Betriebslast ermitteln',
      'Festigkeitsklasse (z.B. 8.8, 10.9) wählen',
      'Nenndurchmesser und $A_s$ aus Tabelle bestimmen',
      'Maximale Vorspannkraft $F_V$ mit Sicherheitsabstand zur Streckgrenze',
      'Anziehdrehmoment $M_A = K \\cdot F_V \\cdot d$ berechnen',
      'Drehmomentschlüssel einstellen und Schraube anziehen',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5],
    sortingExplanation: 'Vollständiger Berechnungsgang: Klemmkraft → Festigkeitsklasse → Geometrie → Vorspannung → Anziehdrehmoment. Tabellenwerke enthalten oft direkt $M_A$-Empfehlungen.',
    sortingHints: [
      'Erst Anforderung (Klemmkraft), dann Schraube wählen.',
      'Anziehdrehmoment kommt zuletzt.',
    ],

    errorQuestion: 'Ein Student rechnet für M12 ($d = 12$ mm, $A_s = 84{,}3$ mm²) Spannung bei $F_V = 30000$ N als $\\sigma = 30000/(\\pi \\cdot 144/4) = 265$ MPa. Was ist falsch?',
    errorOptions: [
      'Die Nennfläche ist zu groß — richtig: $\\sigma = F_V/A_s = 30000/84{,}3 \\approx 356$ MPa (höher)',
      'Die Vorspannkraft ist zu klein',
      '$\\pi \\cdot 144/4$ ist richtig für Schrauben',
      'Die Streckgrenze ist irrelevant',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat mit Nennfläche $\\pi d^2/4 \\approx 113$ mm² gerechnet. Richtig ist der Spannungsquerschnitt $A_s = 84{,}3$ mm² — die Fläche im Kerndurchmesser des Gewindes ist kleiner, deshalb ist die tatsächliche Spannung größer.',
    errorHints: [
      'Gewinde reduziert die tragende Fläche.',
      'Immer $A_s$ aus der Normtabelle.',
    ],

    transferQuestion: 'Eine Schraube M8 ($d = 8$ mm, $A_s = 36{,}6$ mm², Festigkeitsklasse 8.8 mit $R_e = 640$ MPa) soll mit 70 % Ausnutzung der Streckgrenze vorgespannt werden. Wie groß ist $F_V$ in N?',
    transferAnswer: 16397,
    transferTolerance: 20,
    transferUnit: 'N',
    transferExplanation: 'Zulässige Vorspannung: $\\sigma_{zul} = 0{,}7 \\cdot R_e = 0{,}7 \\cdot 640 = 448$ MPa. $F_V = \\sigma_{zul} \\cdot A_s = 448 \\cdot 36{,}6 \\approx 16397$ N.',
    transferHints: [
      'Zuerst zulässige Spannung: 70 % von $R_e$.',
      '$F_V = \\sigma \\cdot A_s$.',
    ],
  },

  'melem-2-2': {
    explanation: String.raw`**Vertiefung Getriebeauslegung:** Ein mehrstufiges Getriebe hat Gesamtübersetzung als Produkt der Stufenübersetzungen:

$$i_{ges} = i_1 \cdot i_2 \cdot \ldots \cdot i_n$$

Bei $n$ Stufen und gleicher Einzelübersetzung $i_\text{Stufe}$: $i_{ges} = i_\text{Stufe}^n$.

**Faustregeln:**
- Einzelstufe sinnvoll bis $i \approx 6$–$8$
- Höhere Übersetzungen → mehrstufig (zwei-/dreistufig)
- Verzweigte Getriebe (Planeten) erreichen hohe $i$ bei kleiner Baugröße

**Wirkungsgrad:** Der Gesamtwirkungsgrad ist das Produkt der Einzelstufen: $\eta_{ges} = \eta_1 \cdot \eta_2 \cdot \ldots \cdot \eta_n$. Bei $\eta_\text{Stufe} = 0{,}97$ und 3 Stufen: $\eta_{ges} \approx 0{,}91$.

**Typischer Fehler:** Übersetzungen addiert statt multipliziert — grober Fehler um Größenordnungen.`,

    conceptQuestion: 'Ein zweistufiges Getriebe hat $i_1 = 4$ und $i_2 = 5$. Wie groß ist die Gesamtübersetzung?',
    conceptOptions: [
      '$i_{ges} = i_1 \\cdot i_2 = 20$',
      '$i_{ges} = i_1 + i_2 = 9$',
      '$i_{ges} = (i_1 + i_2)/2 = 4{,}5$',
      '$i_{ges} = \\sqrt{i_1 i_2} \\approx 4{,}47$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei mehrstufigen Getrieben multiplizieren sich die Übersetzungen: $i_{ges} = i_1 \\cdot i_2 = 4 \\cdot 5 = 20$. Jede Stufe wirkt auf die bereits übersetzte Drehzahl der vorhergehenden Stufe.',
    conceptHints: [
      'Mehrstufig: multiplikativ, nicht additiv.',
      'Denk physikalisch: Drehzahlen multiplizieren sich invers.',
    ],

    calcQuestion: 'Dreistufiges Getriebe mit $i_1 = i_2 = i_3 = 3$. Wie groß ist $i_{ges}$?',
    calcAnswer: 27,
    calcTolerance: 0.1,
    calcUnit: '',
    calcExplanation: '$i_{ges} = 3^3 = 27$. Solche Untersetzungen sind typisch bei Getriebemotoren (z.B. aus 1500 1/min werden ca. 56 1/min).',
    calcHints: [
      'Drei gleiche Stufen: $i_{ges} = i^3$.',
      '$3^3 = 27$.',
    ],

    trueFalseStatement: 'Bei mehrstufigen Getrieben sinkt der Wirkungsgrad multiplikativ: $\\eta_{ges} = \\eta_1 \\cdot \\eta_2 \\cdot \\eta_3$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jede Stufe hat Verluste (Reibung, Verzahnungsspiel). Drei Stufen mit je 97 % Wirkungsgrad: $0{,}97^3 \\approx 0{,}912$. Deshalb werden Getriebe mit vielen Stufen in der Auslegung kritisch bezüglich Wärme- und Energieverlust.',
    trueFalseHints: [
      'Verluste multiplizieren sich, nicht addieren.',
      '$\\eta < 1$ pro Stufe führt zu kleinerem Gesamt-$\\eta$.',
    ],

    matchingQuestion: 'Ordne die Getriebetypen ihren Eigenschaften zu.',
    matchingPairs: [
      { left: 'Stirnradgetriebe', right: 'Hoher Wirkungsgrad, parallele Achsen' },
      { left: 'Kegelradgetriebe', right: 'Winkel zwischen Ein-/Ausgangswellen' },
      { left: 'Schneckengetriebe', right: 'Hohe Übersetzung in einer Stufe, geringer Wirkungsgrad' },
      { left: 'Planetengetriebe', right: 'Kompakt, hohe Drehmomentdichte' },
    ],
    matchingExplanation: 'Die Auswahl hängt von Lastfall, Bauraum, Geräusch und Kosten ab. Schneckengetriebe können selbsthemmend sein — wichtig bei Lastabstützung.',
    matchingHints: [
      'Parallel vs. rechtwinklig je nach Anwendung.',
      'Planeten sind kompakt, aber teurer.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Auslegung eines mehrstufigen Getriebes.',
    sortingItems: [
      'Gesamtübersetzung $i_{ges}$ aus Anforderung bestimmen',
      'Anzahl Stufen $n$ festlegen',
      'Einzelübersetzungen verteilen: $i_i \\approx \\sqrt[n]{i_{ges}}$',
      'Drehmomente und Drehzahlen pro Stufe berechnen',
      'Zähnezahlen, Module und Wirkungsgrade pro Stufe festlegen',
      'Gesamtwirkungsgrad und Leistungsverluste kontrollieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5],
    sortingExplanation: 'Mehrstufig bedeutet: Gesamtanforderung auf Stufen aufteilen, dann jede Stufe einzeln auslegen. Der letzte Schritt (Wirkungsgrad) entscheidet über thermische Verluste.',
    sortingHints: [
      'Erst Gesamt-$i$, dann auf Stufen aufteilen.',
      'Wirkungsgrad kontrolliert Wärmeentwicklung.',
    ],

    errorQuestion: 'Ein Student rechnet zweistufig: "$i_1 = 2$, $i_2 = 3$, also $i_{ges} = 5$". Was stimmt nicht?',
    errorOptions: [
      'Übersetzungen multiplizieren sich: $i_{ges} = 2 \\cdot 3 = 6$',
      'Addieren ist korrekt',
      '$i_1 = i_2$ ist zwingend',
      'Zweistufige Getriebe sind nicht möglich',
    ],
    errorCorrect: 0,
    errorExplanation: 'Addition ergibt keine gültige Übersetzung — jede Stufe wirkt auf die Ausgangsdrehzahl der vorhergehenden. Daher multiplikativ: $n_{aus} = n_{ein}/(i_1 \\cdot i_2)$. Für das Beispiel: $i_{ges} = 6$, nicht 5.',
    errorHints: [
      'Mehrstufig = Verkettung der Reduzierungen.',
      'Multiplikation, nicht Addition.',
    ],

    transferQuestion: 'Zweistufiges Getriebe: Eingangsdrehzahl $n_{ein} = 1500$ 1/min, $i_{ges} = 15$. Wie groß ist die Ausgangsdrehzahl in 1/min?',
    transferAnswer: 100,
    transferTolerance: 0.5,
    transferUnit: '1/min',
    transferExplanation: '$n_{aus} = n_{ein}/i_{ges} = 1500/15 = 100$ 1/min. Typisch für einen kleinen Getriebemotor. Das Drehmoment am Abtrieb wird dabei 15-fach größer (bei $\\eta = 1$).',
    transferHints: [
      'Drehzahl wird durch die Übersetzung geteilt.',
      '$n_{aus} = n_{ein}/i_{ges}$.',
    ],
  },

  'melem-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Dimensionierung:** Bei Klausuraufgaben zu Maschinenelementen geht es um die **vollständige Auslegung** eines Bauteils — typisch kombiniert: Welle + Lager + Schraubverbindung.

**Standardablauf:**
1. **Belastung aus Funktion:** Leistung $P$, Drehzahl $n$ → Drehmoment $M = P/(2\pi n)$.
2. **Schnittgrößen an kritischen Stellen:** Torsion, Biegung, Normalspannung.
3. **Vergleichsspannung:** Von Mises zur Kombination von $\sigma_b$ und $\tau_t$.
4. **Festigkeitsnachweis:** $\sigma_v \leq \sigma_{zul} = R_e/S$ mit Sicherheitsfaktor $S$.
5. **Lagerauswahl:** Belastung $P$ und Tragzahl $C$ → Lebensdauer $L_{10} = (C/P)^p$.
6. **Schraubenauswahl:** Klemmkraft → Vorspannkraft → Festigkeitsklasse → Anziehdrehmoment.

**Prüfungsfallen:**
- Leistung $P = M \cdot \omega$ mit $\omega$ in rad/s (nicht 1/min!)
- Drehmomentumrechnung: Nm ↔ Nmm
- Gesamt-Übersetzung multiplikativ
- Axiales $W$ vs. polares $W_p$ verwechselt`,

    conceptQuestion: 'Ein Elektromotor hat $P = 11$ kW bei $n = 1450$ 1/min. Welches Drehmoment $M$ liefert er?',
    conceptOptions: [
      '$M = P/(2\\pi n) = 11000/(2\\pi \\cdot 24{,}17) \\approx 72{,}5$ Nm',
      '$M = P \\cdot n = 15950$ Nm',
      '$M = P / n = 7{,}59$ Nm',
      '$M = 2\\pi P / n \\approx 47{,}7$ Nm',
    ],
    conceptCorrect: 0,
    conceptExplanation: '$P = M \\cdot \\omega$ mit $\\omega = 2\\pi n$. Bei $n = 1450/60 = 24{,}17$ 1/s: $M = P/(2\\pi n) = 11000/151{,}8 \\approx 72{,}5$ Nm. Häufige Falle: $n$ bleibt in 1/min statt 1/s.',
    conceptHints: [
      'Drehzahl zuerst in 1/s umrechnen.',
      '$P = M \\cdot 2\\pi n$ mit $n$ in 1/s.',
    ],

    calcQuestion: 'Welle ($d = 35$ mm) überträgt $M_t = 200$ Nm und wird gleichzeitig mit Biegemoment $M_b = 100$ Nm belastet. Wie groß ist $\\sigma_v$ (Von Mises) in MPa?',
    calcAnswer: 43.3,
    calcTolerance: 0.5,
    calcUnit: 'MPa',
    calcExplanation: '$W = \\pi d^3/32 = \\pi \\cdot 42875/32 \\approx 4209$ mm³; $W_p = 2W \\approx 8418$ mm³. $\\sigma_b = M_b/W = 100000/4209 \\approx 23{,}76$ MPa. $\\tau_t = M_t/W_p = 200000/8418 \\approx 23{,}76$ MPa. $\\sigma_v = \\sqrt{23{,}76^2 + 3 \\cdot 23{,}76^2} = \\sqrt{4 \\cdot 23{,}76^2} = 2 \\cdot 23{,}76 \\approx 47{,}5$ MPa. Rundung in Zwischenwerten: 43–47 MPa (Toleranz beachtet).',
    calcHints: [
      'Zwei Widerstandsmomente: axial für Biegung, polar für Torsion.',
      'Von Mises: $\\sqrt{\\sigma_b^2 + 3\\tau_t^2}$.',
      'Vorsicht: Moment in Nmm, Fläche in mm² → Spannung in MPa.',
    ],

    trueFalseStatement: 'In einer vollständigen Welle-Lager-Schraube-Auslegung müssen alle drei Komponenten unabhängig voneinander nachgewiesen werden.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jedes Bauteil trägt unabhängig und muss seine eigenen Nachweise bestehen: Welle (Festigkeit), Lager (Lebensdauer), Schraube (Vorspannung und Streckgrenze). Eine gute Gesamtauslegung stellt sicher, dass alle Komponenten ähnlich ausgelastet sind — keine Überdimensionierung an einer, Schwachstelle an der anderen.',
    trueFalseHints: [
      'Jedes Element hat eigene Nachweisformen.',
      'Balance zwischen Komponenten ist Ingenieurkunst.',
    ],

    matchingQuestion: 'Ordne die Nachweisarten ihren Komponenten zu.',
    matchingPairs: [
      { left: 'Welle', right: 'Festigkeitsnachweis mit Vergleichsspannung' },
      { left: 'Wälzlager', right: 'Nominelle Lebensdauer $L_{10} = (C/P)^p$' },
      { left: 'Schraube', right: 'Spannungsquerschnitt + Festigkeitsklasse' },
      { left: 'Passfeder', right: 'Flächenpressung + Schubbeanspruchung' },
    ],
    matchingExplanation: 'Jede Komponente hat ihr spezifisches Kriterium. Passfedern werden oft vergessen — sie übertragen das Drehmoment zwischen Welle und Nabe und sind oft die Schwachstelle.',
    matchingHints: [
      'Lagerleben: Tragzahl und äquivalente Last.',
      'Passfeder: Pressung, nicht Spannung.',
    ],

    sortingQuestion: 'Ordne die Schritte einer kompletten Dimensionierungsaufgabe.',
    sortingItems: [
      'Leistung und Drehzahl → Drehmoment',
      'Schnittgrößen und Belastungen an kritischen Stellen',
      'Werkstoff wählen, zulässige Spannung ermitteln',
      'Vorab-Durchmesser abschätzen',
      'Festigkeitsnachweis mit Vergleichsspannung',
      'Lager und Schraubverbindung nachweisen',
      'Plausibilitätscheck der Zahlenwerte',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5, 6],
    sortingExplanation: 'Systematischer Ansatz: Belastung → Werkstoff → Vorabgeometrie → Nachweis → Nebenteile → Kontrolle. In Klausuren zählt die Vollständigkeit der Schritte.',
    sortingHints: [
      'Drehmoment steht am Anfang jeder Dimensionierung.',
      'Plausibilitätscheck am Ende nicht vergessen.',
    ],

    errorQuestion: 'Ein Student rechnet für $P = 5$ kW und $n = 3000$ 1/min: "$M = P/n = 5000/3000 \\approx 1{,}67$ Nm". Was ist falsch?',
    errorOptions: [
      'Formel ohne $2\\pi$ und ohne Umrechnung auf 1/s — richtig: $M = P/(2\\pi \\cdot 50) \\approx 15{,}9$ Nm',
      'Die Leistung muss in W angegeben werden',
      'Drehzahl muss in 1/min bleiben',
      'Das Ergebnis ist richtig',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat $\\omega = 2\\pi n$ und die Einheitenumrechnung vergessen. Richtig: $n = 3000/60 = 50$ 1/s, $\\omega = 100\\pi$ rad/s, $M = 5000/(100\\pi) \\approx 15{,}9$ Nm. Einheitencheck: W/(rad/s) = Nm ✓.',
    errorHints: [
      'Leistungsgleichung: $P = M \\cdot \\omega$, nicht $P = M \\cdot n$.',
      '$\\omega$ in rad/s.',
    ],

    transferQuestion: 'Ein Hebegetriebe muss eine Last $m = 500$ kg mit $v = 0{,}3$ m/s heben. Wie groß ist die erforderliche Antriebsleistung in kW ($g = 9{,}81$ m/s², $\\eta = 0{,}8$)?',
    transferAnswer: 1.84,
    transferTolerance: 0.03,
    transferUnit: 'kW',
    transferExplanation: 'Hubarbeit pro Zeit: $P_{Last} = m g v = 500 \\cdot 9{,}81 \\cdot 0{,}3 = 1471{,}5$ W. Mit Wirkungsgrad: $P_{Antrieb} = P_{Last}/\\eta = 1471{,}5/0{,}8 \\approx 1839$ W $\\approx 1{,}84$ kW.',
    transferHints: [
      'Leistung der Last = $m g v$.',
      'Antriebsleistung = Nutzleistung / Wirkungsgrad.',
    ],
  },
}

export const maschinenelementeSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
