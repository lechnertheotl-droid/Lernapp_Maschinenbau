function mc(question, options, correctIndex, explanation, hints = []) {
  return { type: 'multiple-choice', question, options, correctIndex, explanation, hints }
}

function ni(question, correctAnswer, tolerance, unit, explanation, hints = []) {
  return { type: 'number-input', question, correctAnswer, tolerance, unit, explanation, hints }
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
  'fluid-1-1': {
    explanation: String.raw`**Vertiefung Hydrostatischer Druck:** In einer ruhenden Flüssigkeit wächst der Druck linear mit der Tiefe:

$$p(h) = p_0 + \rho \cdot g \cdot h$$

- $p_0$: Druck an der Oberfläche (oft atmosphärisch, $p_{atm} \approx 101325$ Pa)
- $\rho$: Dichte der Flüssigkeit (Wasser: $\rho = 1000$ kg/m³)
- $g$: Erdbeschleunigung $\approx 9{,}81$ m/s²
- $h$: Tiefe unter der Oberfläche in m

**Einheitencheck:** $[\rho g h] = \frac{\text{kg}}{\text{m}^3} \cdot \frac{\text{m}}{\text{s}^2} \cdot \text{m} = \frac{\text{kg}}{\text{m} \cdot \text{s}^2} = \text{Pa}$

**Praktische Regel für Wasser:** Pro 10 m Tiefe steigt der Druck um ca. 1 bar ($10^5$ Pa).

**Typischer Fehler:** Höhe und Tiefe verwechselt — der Druck steigt mit der Tiefe, nicht mit der Höhe. Oder Pa mit bar verwechselt.`,

    conceptQuestion: 'Warum hängt der hydrostatische Druck nicht von der Form des Behälters ab?',
    conceptOptions: [
      'Weil der Druck nur von der Tiefe $h$, Dichte $\\rho$ und $g$ abhängt — die Form spielt keine Rolle (hydrostatisches Paradoxon)',
      'Weil Flüssigkeiten inkompressibel sind',
      'Weil der Luftdruck alles ausgleicht',
      'Weil Wasser immer 1000 kg/m³ hat',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Das hydrostatische Paradoxon: Der Bodendruck in einem breiten See, einem schmalen Rohr und einem Kegel mit gleicher Höhe ist identisch — sofern gleiche Flüssigkeit. Nur die Höhe entscheidet. Die Bodenkraft hängt über $F = p \\cdot A$ dann von der Bodenfläche ab.',
    conceptHints: [
      'Die Formel $p = \\rho g h$ enthält keine Formgröße.',
      'Druck ist Kraft pro Fläche — die gesamte Gewichtslast wird über die Flächen verteilt.',
    ],

    calcQuestion: 'In einem Wasserbecken ($\\rho = 1000$ kg/m³) in Tiefe $h = 5$ m. Wie groß ist der hydrostatische Druck $\\rho g h$ (ohne Luftdruck) in kPa?',
    calcAnswer: 49.05,
    calcTolerance: 0.1,
    calcUnit: 'kPa',
    calcExplanation: '$p = \\rho g h = 1000 \\cdot 9{,}81 \\cdot 5 = 49050$ Pa $= 49{,}05$ kPa. Etwa die Hälfte eines Atmosphärendrucks (~ 101,3 kPa).',
    calcHints: [
      'Formel: $p = \\rho g h$.',
      'Ergebnis in Pa, umrechnen in kPa (durch 1000).',
    ],

    trueFalseStatement: 'Der Luftdruck $p_{atm}$ an der Wasseroberfläche muss zum hydrostatischen Druck addiert werden, wenn der absolute Druck gesucht ist.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. $p_{absolut} = p_{atm} + \\rho g h$. Der absolute Druck schließt den Luftdruck ein. Oft interessiert nur der Überdruck $\\Delta p = \\rho g h$ — dann fällt $p_{atm}$ weg. In Aufgaben genau lesen: "hydrostatisch" vs. "absolut".',
    trueFalseHints: [
      'Absolut = Gesamtdruck inkl. Atmosphäre.',
      'Überdruck = nur der hydrostatische Anteil.',
    ],

    matchingQuestion: 'Ordne die Dichten ihren Materialien zu.',
    matchingPairs: [
      { left: 'Wasser', right: '$\\rho \\approx 1000$ kg/m³' },
      { left: 'Luft (Normbedingungen)', right: '$\\rho \\approx 1{,}2$ kg/m³' },
      { left: 'Quecksilber', right: '$\\rho \\approx 13600$ kg/m³' },
      { left: 'Stahl', right: '$\\rho \\approx 7850$ kg/m³' },
    ],
    matchingExplanation: 'Dichten sind die Basis aller Strömungsrechnungen. Quecksilber wurde historisch für Barometer genutzt, weil seine hohe Dichte kompakte Säulen ermöglicht.',
    matchingHints: [
      'Wasser: 1000 kg/m³ (Basis).',
      'Luft ist 800× weniger dicht als Wasser.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung des Drucks auf einen Tauchkörper in Tiefe $h$.',
    sortingItems: [
      'Flüssigkeit identifizieren und Dichte $\\rho$ nachschlagen',
      'Tiefe $h$ unter der Oberfläche ermitteln',
      'Hydrostatischen Druck $p_h = \\rho g h$ berechnen',
      'Absoluter Druck: $p_{abs} = p_{atm} + p_h$',
      'Einheitencheck (Pa, kPa oder bar)',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Dichte und Tiefe bestimmen alles. Die Unterscheidung zwischen Überdruck ($p_h$) und Absolutdruck ($p_{abs}$) ist in Klausuren entscheidend.',
    sortingHints: [
      'Erst die Einzelgrößen, dann zusammensetzen.',
      'Absolut vs. Überdruck klar unterscheiden.',
    ],

    errorQuestion: 'Ein Student rechnet: "Tauchtiefe 30 m, $p = \\rho g h = 1000 \\cdot 9{,}81 \\cdot 30 = 294{,}3$ kPa $\\approx 3$ bar." Was ist richtig?',
    errorOptions: [
      'Das Ergebnis ist korrekt — nur der hydrostatische Anteil, Luftdruck käme zusätzlich hinzu ($p_{abs} \\approx 4$ bar)',
      'Der Druck ist zu hoch — Wasser kann nie 3 bar erreichen',
      'Die Dichte von Wasser ist 1',
      'Tauchtiefe geht nur bis 10 m',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die Rechnung stimmt: 30 m $\\cdot$ 0,1 bar/m = 3 bar hydrostatischer Überdruck. Absolut kommt der Atmosphärendruck (~1 bar) dazu — also etwa 4 bar in 30 m Tiefe. Taucher merken diesen enormen Druckanstieg deutlich.',
    errorHints: [
      'Merkregel: 10 m Wasser ≈ 1 bar.',
      'Überdruck und Absolutdruck unterscheiden.',
    ],

    transferQuestion: 'In einer Zisterne steht Öl ($\\rho_{Öl} = 800$ kg/m³) 4 m hoch, darunter 2 m Wasser. Wie groß ist der Überdruck am Boden in kPa?',
    transferAnswer: 51.0,
    transferTolerance: 0.3,
    transferUnit: 'kPa',
    transferExplanation: 'Öl-Druck: $p_1 = 800 \\cdot 9{,}81 \\cdot 4 = 31392$ Pa. Wasser-Druck: $p_2 = 1000 \\cdot 9{,}81 \\cdot 2 = 19620$ Pa. Gesamt: $p_{ges} = 31392 + 19620 = 51012$ Pa $\\approx 51{,}0$ kPa.',
    transferHints: [
      'Jede Schicht einzeln: $p_i = \\rho_i g h_i$.',
      'Drücke addieren sich in Schichten.',
      'Öl ist leichter als Wasser, schwimmt oben.',
    ],
  },

  'fluid-1-2': {
    explanation: String.raw`**Vertiefung Auftrieb:** Ein Körper verdrängt ein Volumen $V_v$ einer Flüssigkeit mit Dichte $\rho_f$. Die verdrängte Flüssigkeit hätte das Gewicht $G_v = \rho_f \cdot V_v \cdot g$. Diese Größe ist die Auftriebskraft (Archimedes):

$$F_A = \rho_f \cdot V_v \cdot g$$

**Schwimmen/Sinken:**
- $\rho_{Körper} < \rho_f$: Körper schwimmt, nur teilweise getaucht
- $\rho_{Körper} = \rho_f$: Schwebezustand
- $\rho_{Körper} > \rho_f$: Körper sinkt

**Schwimmgleichgewicht:** Ein schwimmender Körper verdrängt genau sein eigenes Gewicht an Flüssigkeit.

**Typischer Fehler:** Körpervolumen statt verdrängtes Volumen — bei nur teilweise getauchten Körpern unterschiedlich.`,

    conceptQuestion: 'Ein Holzblock schwimmt in Wasser. Wodurch ist das Gleichgewicht bestimmt?',
    conceptOptions: [
      'Auftriebskraft = Gewichtskraft: $\\rho_W V_v g = \\rho_H V g$ ⇒ $V_v/V = \\rho_H/\\rho_W$',
      'Holz schwimmt immer ganz oben',
      'Holz hat kein Gewicht',
      'Die Dichte ist unwichtig',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Im Schwimmgleichgewicht gilt Auftrieb = Gewicht. Daraus folgt: $V_v/V = \\rho_H/\\rho_W$. Ein Holzblock mit Dichte 500 kg/m³ taucht genau zur Hälfte ein (V_v/V = 0,5). Eisberg (900 kg/m³ in 1000 kg/m³ Salzwasser): 90 % unter Wasser.',
    conceptHints: [
      'Im Gleichgewicht heben sich Auftrieb und Gewicht auf.',
      'Dichteverhältnis = Eintauchverhältnis.',
    ],

    calcQuestion: 'Ein Würfel ($V = 0{,}001$ m³, Masse $m = 0{,}6$ kg) wird in Wasser ($\\rho_W = 1000$ kg/m³) getaucht. Wie groß ist die Auftriebskraft, wenn er voll getaucht ist, in N?',
    calcAnswer: 9.81,
    calcTolerance: 0.02,
    calcUnit: 'N',
    calcExplanation: '$F_A = \\rho_W V g = 1000 \\cdot 0{,}001 \\cdot 9{,}81 = 9{,}81$ N. Gewicht des Würfels: $G = m g = 0{,}6 \\cdot 9{,}81 = 5{,}886$ N. Da $F_A > G$, steigt der Würfel auf und schwimmt teilweise untergetaucht.',
    calcHints: [
      '$F_A = \\rho_f V_v g$ mit $V_v = $ verdrängtes Volumen.',
      'Voll getaucht: $V_v = V$.',
    ],

    trueFalseStatement: 'Ein schwimmender Körper verdrängt genau sein eigenes Gewicht an Flüssigkeit.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig — das ist das Archimedische Prinzip in der Schwimmform. Daraus folgt: Je dichter die Flüssigkeit, desto weniger Volumen muss verdrängt werden. Deshalb schwimmen Schiffe in Salzwasser höher als in Süßwasser.',
    trueFalseHints: [
      'Archimedes: verdrängtes Gewicht = Auftrieb.',
      'Im Schwimmgleichgewicht: Auftrieb = Gewicht des Körpers.',
    ],

    matchingQuestion: 'Ordne Zustand und Dichteverhältnis.',
    matchingPairs: [
      { left: '$\\rho_{Körper} < \\rho_{Flüssigkeit}$', right: 'Schwimmt (teilweise getaucht)' },
      { left: '$\\rho_{Körper} = \\rho_{Flüssigkeit}$', right: 'Schwebt (vollständig getaucht, aber kein Auftrieb/Absinken)' },
      { left: '$\\rho_{Körper} > \\rho_{Flüssigkeit}$', right: 'Sinkt bis zum Boden' },
      { left: 'Hohlkörper mit $\\bar{\\rho} < \\rho_{Flüssigkeit}$', right: 'Schwimmt wie U-Boot/Schiff' },
    ],
    matchingExplanation: 'Entscheidend ist die mittlere Dichte des Körpers (inkl. Luft im Hohlraum). Deshalb schwimmen Stahlschiffe — die mittlere Dichte inklusive Luftraum liegt unter 1000 kg/m³.',
    matchingHints: [
      'Mittlere Dichte zählt, nicht Materialdichte.',
      'Schweben = Grenzfall.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung der Eintauchtiefe eines schwimmenden Körpers.',
    sortingItems: [
      'Masse $m$ und Volumen $V$ des Körpers bestimmen',
      'Mittlere Dichte $\\bar{\\rho} = m/V$',
      'Dichte der Flüssigkeit $\\rho_f$ ermitteln',
      'Verhältnis $V_v/V = \\bar{\\rho}/\\rho_f$',
      'Aus Geometrie (Höhe, Fläche) die Eintauchtiefe ableiten',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Im Schwimmgleichgewicht bestimmt allein das Dichteverhältnis den Eintauchanteil. Die Geometrie wandelt den Anteil in eine konkrete Tiefe um.',
    sortingHints: [
      'Dichteverhältnis liefert Volumenverhältnis.',
      'Erst dann die konkrete Geometrie nutzen.',
    ],

    errorQuestion: 'Ein Student rechnet $F_A = \\rho_{Körper} V g$ für einen in Wasser getauchten Körper. Was ist der Fehler?',
    errorOptions: [
      'Die Auftriebskraft hängt von der Dichte der Flüssigkeit ab, nicht des Körpers: $F_A = \\rho_f V_v g$',
      'Die Formel ist richtig',
      'Das Volumen ist falsch',
      'Der Körper muss zylindrisch sein',
    ],
    errorCorrect: 0,
    errorExplanation: 'Auftrieb ist eine Eigenschaft der Flüssigkeit: Die verdrängte Flüssigkeitsmenge erzeugt die Auftriebskraft. Die Körperdichte bestimmt nur, ob der Körper schwimmt, schwebt oder sinkt — sie tritt nicht in $F_A$ auf.',
    errorHints: [
      'Das "verdrängte Wasser" = Flüssigkeit, nicht Körper.',
      '$F_A$ hängt nur von Flüssigkeitseigenschaften und verdrängtem Volumen ab.',
    ],

    transferQuestion: 'Ein Holzbalken ($\\rho_H = 600$ kg/m³, Volumen $V = 0{,}02$ m³) schwimmt in Wasser ($\\rho_W = 1000$ kg/m³). Welcher Anteil des Volumens ist getaucht, in Prozent?',
    transferAnswer: 60,
    transferTolerance: 0.5,
    transferUnit: '%',
    transferExplanation: 'Im Schwimmgleichgewicht: $V_v/V = \\rho_H/\\rho_W = 600/1000 = 0{,}6 = 60 \\%$. 60 % des Balkens sind unter Wasser, 40 % über der Oberfläche.',
    transferHints: [
      'Dichteverhältnis bestimmt Eintauchverhältnis.',
      'In Prozent: Verhältnis $\\times 100$.',
    ],
  },

  'fluid-2-1': {
    explanation: String.raw`**Vertiefung Kontinuitätsgleichung:** In einer stationären, inkompressiblen Strömung ist der Volumenstrom an jeder Stelle gleich:

$$\dot{V} = A_1 \cdot v_1 = A_2 \cdot v_2 = \text{const}$$

**Folge:** Verengt sich der Querschnitt (z.B. Düse), wächst die Geschwindigkeit. Das ist keine Beschleunigung durch "Pressen" — es ist Massenerhaltung.

**Massenstrom (auch kompressibel):** $\dot{m} = \rho A v$.

**Einheiten:**
- $A$ in m²
- $v$ in m/s
- $\dot{V}$ in m³/s
- $\dot{m}$ in kg/s

**Typischer Fehler:** Kreisfläche mit Durchmesser statt Radius berechnet. $A = \pi d^2/4$, nicht $\pi d^2$.`,

    conceptQuestion: 'Wasser strömt durch ein Rohr. Bei Verengung von $A_1$ auf $A_2 = A_1/2$ verhält sich die Geschwindigkeit wie?',
    conceptOptions: [
      '$v_2 = 2 v_1$ — halbe Fläche, doppelte Geschwindigkeit',
      '$v_2 = v_1/2$',
      '$v_2 = v_1$ (Geschwindigkeit ändert sich nicht)',
      '$v_2 = 4 v_1$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Kontinuität: $A_1 v_1 = A_2 v_2$. Halbiert sich $A$, verdoppelt sich $v$, weil dieselbe Wassermenge pro Zeit durch den kleineren Querschnitt muss. Dieses Prinzip nutzen Venturidüsen zur Messung.',
    conceptHints: [
      'Kontinuitätsgleichung: $A v = $ const.',
      'Geschwindigkeit ist invers proportional zur Querschnittsfläche.',
    ],

    calcQuestion: 'In einem Rohr ($A_1 = 0{,}01$ m²) fließt Wasser mit $v_1 = 2$ m/s. An einer Verengung ist $A_2 = 0{,}004$ m². Wie groß ist $v_2$ in m/s?',
    calcAnswer: 5,
    calcTolerance: 0.02,
    calcUnit: 'm/s',
    calcExplanation: 'Kontinuität: $v_2 = v_1 \\cdot A_1/A_2 = 2 \\cdot 0{,}01/0{,}004 = 5$ m/s. Die Geschwindigkeit steigt um den Faktor $A_1/A_2 = 2{,}5$.',
    calcHints: [
      '$A_1 v_1 = A_2 v_2$ umstellen nach $v_2$.',
      'Kürzen: die Einheiten (m²/m²) heben sich auf.',
    ],

    trueFalseStatement: 'Die Kontinuitätsgleichung $A_1 v_1 = A_2 v_2$ gilt auch für kompressible Gase.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch — bei kompressiblen Fluiden ändert sich die Dichte. Korrekt ist dann $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$ (Massenstrom konstant). Für Flüssigkeiten ist $\\rho \\approx$ const, und die einfachere Form funktioniert.',
    trueFalseHints: [
      'Kompressibel = Dichte ändert sich.',
      'Massenstrom $\\dot{m} = \\rho A v$ bleibt immer konstant.',
    ],

    matchingQuestion: 'Ordne die Größen ihren Einheiten zu.',
    matchingPairs: [
      { left: 'Volumenstrom $\\dot{V}$', right: 'm³/s' },
      { left: 'Massenstrom $\\dot{m}$', right: 'kg/s' },
      { left: 'Querschnittsfläche $A$', right: 'm²' },
      { left: 'Geschwindigkeit $v$', right: 'm/s' },
    ],
    matchingExplanation: 'Die Einheiten passen direkt zusammen: $\\dot{V} = A \\cdot v$ hat Einheit m² · m/s = m³/s. Massenstrom: $\\rho \\cdot \\dot{V}$ = kg/m³ · m³/s = kg/s.',
    matchingHints: [
      'Einheitencheck: Produkt der Einheiten muss passen.',
      'Strom = pro Zeit, also immer /s.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung der Geschwindigkeit in einer Verengung.',
    sortingItems: [
      'Rohrdurchmesser $d_1, d_2$ ablesen',
      'Querschnittsflächen $A_i = \\pi d_i^2/4$',
      'Bekannte Geschwindigkeit $v_1$ identifizieren',
      'Kontinuitätsgleichung: $v_2 = v_1 \\cdot A_1/A_2$',
      'Plausibilitätscheck: Bei Verengung muss $v$ steigen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Erst die Geometrie ($A$), dann die Strömungsgröße. Der Plausibilitätscheck verhindert, dass man das Verhältnis verkehrt nutzt.',
    sortingHints: [
      'Kreisfläche: $\\pi d^2/4$, nicht $\\pi d^2$.',
      'Bei Verengung: $v$ steigt, bei Erweiterung fällt $v$.',
    ],

    errorQuestion: 'Ein Student berechnet Kreisfläche bei $d = 20$ mm als $A = \\pi \\cdot 20^2 = 1257$ mm². Was ist falsch?',
    errorOptions: [
      'Richtig wäre $A = \\pi d^2/4 = \\pi \\cdot 400/4 = 314$ mm² — Faktor 4 fehlt',
      'Kreisflächen haben keinen $\\pi$',
      'Die Formel gilt nur im Quadrat',
      'Der Durchmesser ist zu klein',
    ],
    errorCorrect: 0,
    errorExplanation: '$A_{Kreis} = \\pi r^2 = \\pi (d/2)^2 = \\pi d^2/4$. Der Student hat den Faktor 4 vergessen und rechnet damit die Fläche um den Faktor 4 zu groß. Einheitencheck hätte geholfen: $\\pi \\cdot d^2$ liefert zwar mm², ist aber physikalisch falsch.',
    errorHints: [
      'Kreisformel: $A = \\pi r^2 = \\pi d^2/4$.',
      'Immer mit $r$, nicht $d$ rechnen — oder Faktor 1/4 nicht vergessen.',
    ],

    transferQuestion: 'Wasser strömt durch Rohr mit $d_1 = 100$ mm und $v_1 = 1$ m/s in eine Verengung $d_2 = 50$ mm. Wie groß ist $v_2$ in m/s?',
    transferAnswer: 4,
    transferTolerance: 0.05,
    transferUnit: 'm/s',
    transferExplanation: 'Verhältnis $A_1/A_2 = (d_1/d_2)^2 = (100/50)^2 = 4$. Damit $v_2 = v_1 \\cdot 4 = 4$ m/s. Die Geschwindigkeit steigt quadratisch mit dem Durchmesserverhältnis.',
    transferHints: [
      'Bei Kreisquerschnitt: $A \\propto d^2$.',
      'Verhältnis der Flächen: $(d_1/d_2)^2$.',
      'Bei Halbierung von $d$: $v$ vervierfacht sich.',
    ],
  },

  'fluid-2-2': {
    explanation: String.raw`**Vertiefung Bernoulli-Gleichung:** In einer stationären, reibungsfreien, inkompressiblen Strömung gilt entlang einer Stromlinie:

$$p + \tfrac{1}{2} \rho v^2 + \rho g h = \text{const}$$

Die drei Terme:
- $p$: statischer Druck (Pa)
- $\tfrac{1}{2} \rho v^2$: dynamischer Druck (Staudruck)
- $\rho g h$: hydrostatischer Druck (geodätische Höhe)

**Summe aller Drücke = konstant entlang der Stromlinie.** Steigt $v$, fällt $p$. Das ist der Grund für das Auftriebsphänomen an Tragflächen, die Funktion von Venturidüsen, die Torricelli-Ausflussformel.

**Torricelli:** Ausfluss aus Tank in Tiefe $h$: $v = \sqrt{2 g h}$.

**Typischer Fehler:** Bernoulli bei Reibung anwenden — falsch. Reibung wandelt Druckenergie in Wärme um.`,

    conceptQuestion: 'In einer Rohrverengung steigt die Strömungsgeschwindigkeit. Was passiert mit dem statischen Druck nach Bernoulli?',
    conceptOptions: [
      'Er fällt — die Summe aus statischem und dynamischem Druck bleibt konstant',
      'Er steigt zusammen mit der Geschwindigkeit',
      'Er bleibt konstant',
      'Er wird null',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bernoulli: $p + \\frac{1}{2}\\rho v^2 + \\rho g h = $ const. Steigt $v$ (Verengung), muss $p$ sinken. Dieser Effekt erklärt Tragflächen-Auftrieb (Luft oben schneller → Druck geringer → Auftrieb nach oben).',
    conceptHints: [
      'Energiebilanz der Strömung.',
      'Eine Komponente wächst, eine andere schrumpft.',
    ],

    calcQuestion: 'Aus einem Tank mit Füllhöhe $h = 2$ m strömt Wasser am Boden aus. Welche Ausflussgeschwindigkeit in m/s ergibt sich nach Torricelli?',
    calcAnswer: 6.264,
    calcTolerance: 0.02,
    calcUnit: 'm/s',
    calcExplanation: 'Torricelli: $v = \\sqrt{2 g h} = \\sqrt{2 \\cdot 9{,}81 \\cdot 2} = \\sqrt{39{,}24} \\approx 6{,}264$ m/s. Gleiche Formel wie beim freien Fall — die potentielle Druckhöhe wird in kinetische Energie umgewandelt.',
    calcHints: [
      'Torricelli: $v = \\sqrt{2gh}$.',
      'Gleiche Form wie Fallgesetz.',
    ],

    trueFalseStatement: 'Die Bernoulli-Gleichung gilt auch bei Reibung.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Bernoulli setzt verlustfreie Strömung voraus. Bei Reibung (Rohrreibung, Umlenkungen) geht Druckenergie in Wärme über, und entlang der Stromlinie nimmt die Gesamtdruckhöhe ab. Die erweiterte Bernoulli-Gleichung enthält einen Verlustterm: $p_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = p_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 + \\Delta p_V$.',
    trueFalseHints: [
      'Bernoulli = reibungsfrei, stationär, inkompressibel.',
      'Reibung wandelt mechanische Energie in Wärme um.',
    ],

    matchingQuestion: 'Ordne die Terme ihrer Bedeutung zu.',
    matchingPairs: [
      { left: '$p$', right: 'Statischer Druck' },
      { left: '$\\tfrac{1}{2} \\rho v^2$', right: 'Dynamischer Druck (Staudruck)' },
      { left: '$\\rho g h$', right: 'Hydrostatischer Druck (Höhenterm)' },
      { left: '$p_t = p + \\tfrac{1}{2}\\rho v^2$', right: 'Totaldruck (bei $h$ = const)' },
    ],
    matchingExplanation: 'Alle drei Terme haben Druck-Dimension (Pa). Die Summe ist der Totaldruck. Dieser bleibt entlang reibungsfreier Stromlinien konstant.',
    matchingHints: [
      'Drei Arten von "Druck" — alle in Pa.',
      'Statisch = ohne Bewegung, dynamisch = durch Bewegung.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Anwendung der Bernoulli-Gleichung.',
    sortingItems: [
      'Stromlinie und zwei Punkte 1, 2 festlegen',
      'Statischen Druck, Geschwindigkeit und Höhe an beiden Punkten identifizieren',
      'Bernoulli aufstellen: $p_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g h_1 = p_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g h_2$',
      'Eventuell Kontinuitätsgleichung ergänzen: $A_1 v_1 = A_2 v_2$',
      'Nach gesuchter Größe auflösen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Bernoulli und Kontinuität werden oft zusammen genutzt — z.B. bei Venturi-Rohren. Der erste Schritt (Stromlinie) ist entscheidend, da die Gleichung nur entlang einer Stromlinie gilt.',
    sortingHints: [
      'Bernoulli nur entlang einer Stromlinie!',
      'Kontinuität verknüpft zwei Geschwindigkeiten über die Flächen.',
    ],

    errorQuestion: 'Ein Student rechnet mit Bernoulli bei langem Rohr mit Reibung und wundert sich, dass Ein- und Ausgangsdruck gleich sind. Warum stimmt das nicht?',
    errorOptions: [
      'Bei Reibung ist $p_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g h_1 > p_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g h_2$, die Differenz ist Druckverlust',
      'Bernoulli gilt für Rohre nicht',
      'Reibung hilft der Strömung',
      'Die Höhen heben sich auf',
    ],
    errorCorrect: 0,
    errorExplanation: 'Reibung verursacht Druckverlust $\\Delta p_V = \\lambda \\frac{L}{d} \\frac{\\rho v^2}{2}$ (Darcy). Der Druck am Ausgang ist bei langen Rohren messbar geringer als der Eingangsdruck — Pumpen müssen diesen Verlust ausgleichen.',
    errorHints: [
      'Rohrreibung erzeugt Druckverlust.',
      'Der erweiterte Bernoulli enthält einen Verlustterm.',
    ],

    transferQuestion: 'Aus einem Wassertank (Füllhöhe $h = 10$ m) strömt Wasser durch eine Öffnung ins Freie. Welche Ausflussgeschwindigkeit in m/s ergibt sich nach Torricelli?',
    transferAnswer: 14.01,
    transferTolerance: 0.05,
    transferUnit: 'm/s',
    transferExplanation: '$v = \\sqrt{2 g h} = \\sqrt{2 \\cdot 9{,}81 \\cdot 10} = \\sqrt{196{,}2} \\approx 14{,}01$ m/s. In km/h: $\\approx 50$ km/h — deshalb gefährlich, wenn ein Drucktank leck wird.',
    transferHints: [
      'Torricelli: $v = \\sqrt{2gh}$.',
      'Masse und Dichte fallen heraus.',
    ],
  },

  'fluid-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Strömungsrechnung:** Klausuraufgaben kombinieren Kontinuität, Bernoulli und Hydrostatik. Standard-Setup:

1. **Zeichne Skizze:** Stromlinie markieren, Punkte 1 und 2 benennen.
2. **Bekannte und gesuchte Größen listen:** $p_1, p_2, v_1, v_2, h_1, h_2$.
3. **Kontinuität:** $A_1 v_1 = A_2 v_2$ oder $\dot V = Av$ = const.
4. **Bernoulli** (reibungsfrei): $p_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$.
5. Mit beiden Gleichungen lassen sich meist alle Unbekannten bestimmen.

**Venturi-Düse:** Misst Volumenstrom aus der Druckdifferenz zwischen Messstellen. Aus der Kombination: $\dot V = A_2 \sqrt{\frac{2 \Delta p}{\rho (1 - (A_2/A_1)^2)}}$.

**Prüfungsfallen:**
- Gleiche Höhe angenommen, wenn sie unterschiedlich ist
- Reibung vergessen (erweiterter Bernoulli nötig)
- Einheiten vermischt (Pa, kPa, bar)
- $v_1$ bei großem Tank als $\approx 0$ nicht erkannt`,

    conceptQuestion: 'Bei einem großen Tank mit kleinem Auslauf wird $v_1 \\approx 0$ gesetzt. Warum?',
    conceptOptions: [
      'Wegen der Kontinuität: $A_{Tank} \\gg A_{Auslauf}$, also $v_{Tank} \\ll v_{Auslauf}$ — Anfangsgeschwindigkeit vernachlässigbar',
      'Weil Tanks nie fließen',
      'Weil $h$ unendlich ist',
      'Weil Reibung dominiert',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Aus $A_{Tank} v_{Tank} = A_{Auslauf} v_{Auslauf}$ folgt bei $A_{Tank} \\gg A_{Auslauf}$, dass $v_{Tank}$ verschwindend klein ist. Diese Vereinfachung macht Torricelli direkt anwendbar: $v_{Auslauf} = \\sqrt{2gh}$.',
    conceptHints: [
      'Kontinuität: Große Fläche → kleine Geschwindigkeit.',
      'Die Spiegelhöhe sinkt langsam — daher $v_{Tank} \\approx 0$.',
    ],

    calcQuestion: 'Durch eine Venturi-Düse ($A_1 = 0{,}01$ m², $A_2 = 0{,}002$ m²) strömt Wasser. Druckdifferenz $\\Delta p = p_1 - p_2 = 4800$ Pa. Wie groß ist $v_2$ in m/s ($\\rho = 1000$ kg/m³)?',
    calcAnswer: 3.162,
    calcTolerance: 0.05,
    calcUnit: 'm/s',
    calcExplanation: 'Aus Bernoulli + Kontinuität: $v_2 = \\sqrt{\\frac{2 \\Delta p}{\\rho (1 - (A_2/A_1)^2)}} = \\sqrt{\\frac{2 \\cdot 4800}{1000 \\cdot (1 - 0{,}04)}} = \\sqrt{\\frac{9600}{960}} = \\sqrt{10} \\approx 3{,}162$ m/s.',
    calcHints: [
      'Kombiniere Bernoulli und Kontinuität zu einer Gleichung für $v_2$.',
      '$(A_2/A_1)^2 = 0{,}04$.',
      '$\\sqrt{10} \\approx 3{,}16$.',
    ],

    trueFalseStatement: 'Für die praktische Rohrströmung in Maschinenbau-Aufgaben kann Bernoulli oft nur bis zum nächsten Rohrbogen oder Ventil direkt angewendet werden.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jeder Einbau (Bogen, Ventil, Durchmessersprung) erzeugt lokale Druckverluste, die Bernoulli nicht abbildet. Für industrielle Auslegung wird entweder der erweiterte Bernoulli mit Verlustbeiwerten genutzt oder empirische Formeln wie Darcy-Weisbach.',
    trueFalseHints: [
      'Bernoulli ist ideal — Einbauten sind reale Störungen.',
      'Verlustbeiwerte $\\zeta$ sind in Tabellenwerken zu finden.',
    ],

    matchingQuestion: 'Ordne die Strömungskonzepte ihren Formeln zu.',
    matchingPairs: [
      { left: 'Kontinuität', right: '$A_1 v_1 = A_2 v_2$' },
      { left: 'Bernoulli (ideal)', right: '$p + \\tfrac{1}{2}\\rho v^2 + \\rho g h = $ const' },
      { left: 'Torricelli', right: '$v = \\sqrt{2 g h}$' },
      { left: 'Darcy-Weisbach (Reibung)', right: '$\\Delta p_V = \\lambda \\frac{L}{d} \\frac{\\rho v^2}{2}$' },
    ],
    matchingExplanation: 'Die vier Formeln decken fast alle Klausurfälle ab. Darcy-Weisbach ist die Standardformel für Reibungsdruckverluste in Rohren.',
    matchingHints: [
      'Reibungsformeln enthalten einen Beiwert ($\\lambda$ oder $\\zeta$).',
      'Torricelli ist Spezialfall von Bernoulli.',
    ],

    sortingQuestion: 'Ordne die Schritte einer kompletten Strömungsaufgabe mit Venturi.',
    sortingItems: [
      'Skizze mit Messstellen 1 und 2 und Stromlinie',
      'Kontinuität: $A_1 v_1 = A_2 v_2$',
      'Bernoulli: $p_1 + \\tfrac{1}{2}\\rho v_1^2 = p_2 + \\tfrac{1}{2}\\rho v_2^2$ (bei $h$ = const)',
      'Eine Unbekannte durch die andere ausdrücken',
      'Gesuchte Größe berechnen und Einheitencheck',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Kontinuität + Bernoulli: zwei Gleichungen, zwei Unbekannte ($v_1, v_2$). Eliminieren, einsetzen, lösen. Klassisches Prüfungsschema.',
    sortingHints: [
      'Zwei Gleichungen, zwei Unbekannte.',
      'Skizze erspart Einheitenfehler.',
    ],

    errorQuestion: 'Ein Student rechnet für einen Wassertank mit Auslauf 3 m unter dem Spiegel: "$v = g h = 29{,}4$ m²/s²". Was stimmt nicht?',
    errorOptions: [
      'Die Einheit ist m²/s² — das ist Energie pro Masse, keine Geschwindigkeit. Richtig: $v = \\sqrt{2gh} = 7{,}67$ m/s',
      'Die Höhe ist zu klein',
      'Torricelli gilt nur für Luft',
      'Wasser fließt nicht aus Tanks',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat die Wurzel und den Faktor 2 vergessen. Torricelli: $v = \\sqrt{2gh}$. Ohne Wurzel erhält man die spezifische kinetische Energie ($v^2/2$), nicht die Geschwindigkeit. Einheitencheck fängt das sofort auf.',
    errorHints: [
      'Einheitencheck: m²/s² ≠ m/s.',
      'Torricelli enthält $\\sqrt{\\cdot}$ und Faktor 2.',
    ],

    transferQuestion: 'In einem horizontalen Rohr ($\\rho = 1000$ kg/m³) misst man $p_1 = 200$ kPa bei $v_1 = 2$ m/s und $p_2 = ?$ bei $v_2 = 5$ m/s. Wie groß ist $p_2$ in kPa?',
    transferAnswer: 189.5,
    transferTolerance: 0.2,
    transferUnit: 'kPa',
    transferExplanation: 'Bernoulli ($h_1 = h_2$): $p_1 + \\frac{1}{2}\\rho v_1^2 = p_2 + \\frac{1}{2}\\rho v_2^2 \\Rightarrow p_2 = p_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2) = 200000 + \\frac{1}{2} \\cdot 1000 \\cdot (4 - 25) = 200000 - 10500 = 189500$ Pa $= 189{,}5$ kPa.',
    transferHints: [
      'Horizontales Rohr: keine Höhenterme.',
      'Bernoulli: $p$ und $\\frac{1}{2}\\rho v^2$ tauschen sich.',
      'Schnelleres Wasser → niedrigerer statischer Druck.',
    ],
  },
}

export const fluidmechanikSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
