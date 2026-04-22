// Werkstoffkunde — handgeschriebene Vertiefungsaufgaben, lessonspezifisch.
// Jedes Profil liefert per bank() 7 Aufgaben (mc, ni, tf, matching, sorting,
// mc-error, ni-transfer) plus eine Vertiefungs-Erklärung.

function mc(question, options, correctIndex, explanation, hints = [], wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question, options, correctIndex, explanation, hints,
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
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
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  // ────────────────────────────────────────────────────────────────────────
  'werk-1-1': {
    explanation: `**Spannungs-Dehnungs-Diagramm — das Grunddokument der Festigkeitsbewertung.**

**Kernidee:** Beim Zugversuch wird eine Probe mit wachsender Kraft $F$ gezogen und die resultierende Längenänderung $\\Delta L$ gemessen. Daraus entstehen Spannung $\\sigma = F/A_0$ und Dehnung $\\varepsilon = \\Delta L/L_0$. Im Diagramm liest man vier Schlüsselgrößen direkt ab: **Streckgrenze $R_e$** (Übergang elastisch→plastisch), **Zugfestigkeit $R_m$** (Maximum), **Bruchdehnung $A$** (plastische Restverformung) und den **E-Modul** aus der Steigung im Hooke-Bereich.

**Vorgehen:** Kurve lesen → Bereich identifizieren (elastisch/plastisch/einschnürend) → Kennwert ablesen oder berechnen. Einheiten: Spannung immer in $\\text{MPa}=\\text{N/mm}^2$, Dehnung einheitenlos (oder in %).

**Typischer Fehler:** $R_e$ (Streckgrenze) mit $R_m$ (Zugfestigkeit) verwechseln. $R_e$ kommt zuerst (beim Übergang zur plastischen Verformung), $R_m$ danach (Maximalwert).`,
    conceptQuestion: 'Wodurch ist die Streckgrenze $R_e$ im Spannungs-Dehnungs-Diagramm charakterisiert?',
    conceptOptions: [
      'Maximale Spannung, die das Material überhaupt trägt',
      'Spannung, ab der die plastische Verformung beginnt',
      'Spannung am Bruchpunkt',
      'Steigung im elastischen Bereich',
    ],
    conceptCorrect: 1,
    conceptExplanation: '$R_e$ markiert den Übergang vom elastischen (reversiblen) in den plastischen (irreversiblen) Bereich. Danach bleibt auch nach Entlastung eine bleibende Verformung zurück.',
    conceptHints: ['Elastisch = Hooke\'sches Gesetz; plastisch = bleibende Verformung.', 'Zugfestigkeit ist der Maximalwert, nicht der Grenzbeginn.'],
    conceptWrongAnswers: {
      0: 'Das ist $R_m$ (Zugfestigkeit) — der höchste Wert auf der Kurve. $R_e$ liegt früher, beim ersten Übergang in die Plastizität.',
      2: 'Am Bruchpunkt ist die Spannung oft wieder GESUNKEN (Einschnürung). Die Spannung beim Bruch heißt $R_B$ — sie ist weder $R_e$ noch $R_m$.',
      3: 'Die Steigung im elastischen Bereich ist der E-Modul ($\\sigma=E\\varepsilon$), nicht die Streckgrenze.',
    },
    calcQuestion: 'Eine Stahlprobe mit $A_0=100\\,\\text{mm}^2$ fließt bei $F_e=23\\,500\\,\\text{N}$. Wie groß ist die Streckgrenze $R_e$ (in MPa)?',
    calcAnswer: 235,
    calcTolerance: 1,
    calcUnit: 'MPa',
    calcExplanation: '$R_e = F_e/A_0 = 23500/100 = 235\\,\\text{N/mm}^2 = 235\\,\\text{MPa}$. Typischer Wert für Baustahl S235.',
    calcHints: ['Streckgrenze ist die Spannung beim Fließbeginn: $\\sigma = F/A$.', 'Einheit: $1\\,\\text{N/mm}^2 = 1\\,\\text{MPa}$.'],
    trueFalseStatement: 'Der E-Modul ist die Steigung des Spannungs-Dehnungs-Diagramms im elastischen Bereich und hat die Einheit MPa.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Hooke\'sches Gesetz: $\\sigma = E\\varepsilon$. Da $\\varepsilon$ einheitenlos ist, hat $E$ dieselbe Einheit wie $\\sigma$, also MPa (oder GPa). Stahl: $E\\approx 210\\,000\\,\\text{MPa}=210\\,\\text{GPa}$.',
    trueFalseHints: ['Aus $\\sigma=E\\varepsilon$ folgt $[E]=[\\sigma]$.', 'Dehnung ist ein Verhältnis, also einheitenlos.'],
    matchingQuestion: 'Ordne die Kennwerte der zugehörigen Definition zu.',
    matchingPairs: [
      { left: '$R_e$', right: 'Streckgrenze' },
      { left: '$R_m$', right: 'Zugfestigkeit (Maximum der Kurve)' },
      { left: 'E', right: 'Elastizitätsmodul (Steigung im Hooke-Bereich)' },
      { left: 'A', right: 'Bruchdehnung in %' },
    ],
    matchingExplanation: 'Vier Kenngrößen, die sich direkt aus der Zugprüfkurve ablesen lassen — Klausur-Klassiker.',
    matchingHints: ['Reihenfolge im Diagramm: elastisch → Fließen → Maximum → Bruch.'],
    sortingQuestion: 'Bringe die Phasen beim Zugversuch in die richtige zeitliche Reihenfolge.',
    sortingItems: [
      'Elastische Verformung (Hooke-Bereich)',
      'Fließbeginn bei $R_e$',
      'Gleichmäßige plastische Verformung',
      'Einschnürung (lokal) mit $R_m$',
      'Bruch',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Typischer Kurvenverlauf bei zähem Baustahl: Gerade (elastisch) → Knick (Fließen) → flache Steigerung (Verfestigung) → Maximum → Abfall bis Bruch.',
    sortingHints: ['Elastisch immer zuerst, Bruch immer zuletzt.'],
    errorQuestion: 'Jemand behauptet: "Ein Werkstoff mit höherer Zugfestigkeit $R_m$ ist IMMER auch härter und steifer." Welcher Fehler steckt drin?',
    errorOptions: [
      'Härte, Steifigkeit und Festigkeit sind drei verschiedene Eigenschaften und hängen nicht automatisch zusammen',
      'Die Aussage ist vollkommen richtig',
      '$R_m$ heißt gar nicht Zugfestigkeit',
      'Härter bedeutet weniger fest',
    ],
    errorCorrect: 0,
    errorExplanation: 'Steifigkeit = E-Modul (Widerstand gegen elastische Verformung), Härte = Widerstand gegen Eindringen, Festigkeit = Spannung bis zum Versagen. Stahl hat z. B. hohen E-Modul aber kann bei derselben Legierung unterschiedliche Festigkeiten haben (Wärmebehandlung).',
    errorHints: ['Drei verschiedene Messverfahren → drei verschiedene Eigenschaften.'],
    errorWrongAnswers: {
      1: 'Nein — die Aussage verwechselt drei verschiedene Werkstoffeigenschaften. Härte, Steifigkeit und Festigkeit korrelieren oft, sind aber nicht identisch.',
      2: '$R_m$ steht sehr wohl für die Zugfestigkeit (Maximum der Zugprüfkurve).',
      3: 'Nein — härter bedeutet in der Regel höhere Festigkeit, aber verringerte Zähigkeit. "Weniger fest" stimmt nicht.',
    },
    transferQuestion: 'Eine Probe hat $L_0=50\\,\\text{mm}$. Nach dem Bruch misst man $L_u=56{,}5\\,\\text{mm}$. Wie groß ist die Bruchdehnung $A$ (in %)?',
    transferAnswer: 13,
    transferTolerance: 0.2,
    transferUnit: '%',
    transferExplanation: '$A = (L_u-L_0)/L_0\\cdot 100\\,\\% = 6{,}5/50\\cdot 100\\,\\% = 13\\,\\%$. Typischer Wert für unlegierten Baustahl (S235: ca. 25 %).',
    transferHints: ['$A = \\Delta L/L_0$ in Prozent.', '$\\Delta L = L_u - L_0 = 6{,}5\\,\\text{mm}$.'],
  },

  // ────────────────────────────────────────────────────────────────────────
  'werk-1-2': {
    explanation: `**Werkstoffgruppen — Überblick nach Atombindung und Einsatzprofil.**

Ingenieure teilen Werkstoffe meist in vier Gruppen:
- **Metalle** (Eisen, Stahl, NE-Metalle wie Alu, Cu): duktil, leitfähig, hohe Festigkeit und Steifigkeit.
- **Polymere** (Thermoplaste, Duroplaste, Elastomere): leicht, korrosionsbeständig, geringe Steifigkeit, temperaturempfindlich.
- **Keramiken** (Al₂O₃, SiC): hart, spröde, hochtemperaturfest, geringe Zähigkeit.
- **Verbundwerkstoffe** (CFK, GFK, Beton): kombinieren Vorzüge mehrerer Gruppen.

**Merkhilfe:** Metalle führen Strom und sind zäh; Keramiken halten Hitze aus, aber brechen; Polymere sind leicht und elastisch; Composites haben ein Ziel-Eigenschaftsprofil.`,
    conceptQuestion: 'Welche Eigenschaft ist typisch für Keramiken im Vergleich zu Metallen?',
    conceptOptions: [
      'Hoher E-Modul, aber geringe Zähigkeit (sprödes Versagen)',
      'Geringe Härte und hohe Zähigkeit',
      'Geringe Dichte und hohe elektrische Leitfähigkeit',
      'Hohe Bruchdehnung bei Zugbelastung',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Keramiken haben sehr hohe Härten und hohe E-Moduln (z. B. Al₂O₃: 380 GPa), versagen aber spröde ohne plastische Vorverformung. Daher: hoch beansprucht auf Druck/Hitze, nicht auf Zug/Schlag.',
    conceptHints: ['Spröde = kein Fließbereich vor dem Bruch.', 'Keramiken werden selten plastisch verformt.'],
    conceptWrongAnswers: {
      1: 'Genau umgekehrt: Keramiken haben hohe Härten und niedrige Zähigkeiten. Weiche, zähe Werkstoffe sind z. B. Thermoplaste oder Blei.',
      2: 'Keramiken sind typischerweise elektrische Isolatoren. Leitfähigkeit ist eine Metall-Eigenschaft.',
      3: 'Hohe Bruchdehnung ist Metall- oder Polymer-Eigenschaft. Keramik bricht spröde — Bruchdehnung nahe 0 %.',
    },
    calcQuestion: 'Aluminium hat $E_{\\text{Al}}\\approx 70\\,\\text{GPa}$, Stahl $E_{\\text{St}}\\approx 210\\,\\text{GPa}$. Um wie viele Prozent ist Stahl steifer als Aluminium?',
    calcAnswer: 200,
    calcTolerance: 1,
    calcUnit: '%',
    calcExplanation: '$\\Delta E/E_{\\text{Al}} = (210-70)/70\\cdot 100\\,\\% = 140/70 \\cdot 100\\,\\% = 200\\,\\%$. Stahl ist bei gleichem Querschnitt also dreimal so steif wie Alu.',
    calcHints: ['Prozentuale Steigerung: $(E_\\text{neu}-E_\\text{alt})/E_\\text{alt}\\cdot 100\\,\\%$.'],
    trueFalseStatement: 'Duroplaste lassen sich nach dem Aushärten durch Erwärmen erneut plastisch verformen.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Duroplaste sind engmaschig vernetzt — einmal ausgehärtet, können sie nicht mehr aufgeschmolzen werden; nur Thermoplaste sind wiederaufschmelzbar.',
    trueFalseHints: ['Thermo = Wärme formbar, Duro = dauerhaft.'],
    matchingQuestion: 'Ordne den Werkstoffgruppen je ein typisches Beispiel zu.',
    matchingPairs: [
      { left: 'Metall', right: 'Baustahl S235' },
      { left: 'Polymer', right: 'Polyethylen (PE)' },
      { left: 'Keramik', right: 'Aluminiumoxid (Al₂O₃)' },
      { left: 'Verbundwerkstoff', right: 'CFK (kohlefaserverstärkter Kunststoff)' },
    ],
    matchingExplanation: 'Jeder Gruppe ein repräsentatives Beispiel — Grundvokabular für die Werkstoffauswahl.',
    matchingHints: ['Kunststoffe = Polymere; Metalle oft auf -stahl, -guss, -zink, -bronze endend.'],
    sortingQuestion: 'Sortiere nach typischem E-Modul (klein → groß).',
    sortingItems: ['Gummi (Elastomer)', 'Polyethylen (PE)', 'Aluminium', 'Stahl', 'Wolframkarbid (Hartmetall)'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Gummi: ~0,01–0,1 GPa, PE: ~1 GPa, Alu: 70 GPa, Stahl: 210 GPa, Wolframkarbid: 500–700 GPa.',
    sortingHints: ['Elastomere sind am weichsten, Keramiken/Hartmetalle am steifsten.'],
    errorQuestion: 'Ein Konstrukteur wählt einen Duroplast für eine heißgehende Bremsscheibe. Welcher Fehler liegt vor?',
    errorOptions: [
      'Polymere haben grundsätzlich zu geringe Dauertemperaturen und Wärmeleitung für Bremsscheiben',
      'Duroplaste wären ideal — sie sind wärmebeständig',
      'Bremsscheiben sollten aus Blei gemacht sein',
      'Alle Polymere sind elektrisch leitend',
    ],
    errorCorrect: 0,
    errorExplanation: 'Selbst hochtemperatur-Duroplaste liegen deutlich unter 300 °C, Bremsscheiben erreichen 400–700 °C. Dazu ist die Wärmeleitfähigkeit von Polymeren niedrig — gefährliche Lokalüberhitzung. Bremsscheiben sind aus Grauguss oder Keramik-Composites.',
    errorHints: ['Polymere: niedrige Temperaturbeständigkeit.', 'Bremsenergie = Wärme → muss schnell abgeleitet werden.'],
    errorWrongAnswers: {
      1: 'Nein — selbst Hochtemperatur-Duroplaste (Phenolharze ~200 °C) sind für Bremsscheiben viel zu empfindlich.',
      2: 'Blei ist weich, schmilzt niedrig (327 °C) und ist giftig. Untauglich.',
      3: 'Die meisten Polymere sind hervorragende Isolatoren — das Gegenteil ist wahr.',
    },
    transferQuestion: 'Dichte Stahl: $7{,}85\\,\\text{g/cm}^3$, Dichte Alu: $2{,}70\\,\\text{g/cm}^3$. Wie viel Prozent des Stahlgewichts spart man bei Alu (gleiches Volumen)?',
    transferAnswer: 65.6,
    transferTolerance: 0.5,
    transferUnit: '%',
    transferExplanation: '$(7{,}85-2{,}70)/7{,}85\\cdot 100\\,\\% \\approx 65{,}6\\,\\%$. Leichtbauvorteil — aber ACHTUNG: Alu hat nur 1/3 des E-Moduls, braucht also größere Querschnitte bei Steifigkeitsanforderung.',
    transferHints: ['Gewichtsersparnis = $(\\rho_\\text{alt}-\\rho_\\text{neu})/\\rho_\\text{alt}$.'],
  },

  // ────────────────────────────────────────────────────────────────────────
  'werk-2-1': {
    explanation: `**Härteprüfung — schnelle, zerstörungsarme Werkstoffcharakterisierung.**

Drei Hauptverfahren:
- **Brinell (HB):** Kugel (meist Hartmetall) drückt mit Last $F$ in die Oberfläche; gemessen wird der Eindruck-Durchmesser. Für weiche bis mittelharte Werkstoffe.
- **Vickers (HV):** Diamantpyramide (136°-Öffnungswinkel) drückt ein. Gemessen wird die Eindruck-Diagonale. Universell einsetzbar, auch bei sehr dünnen Schichten.
- **Rockwell (HRC/HRB):** Diamantkegel bzw. Stahlkugel, Skala wird aus der bleibenden Eindringtiefe abgeleitet (direkter Anzeige-Wert). Sehr schnell, produktionstauglich.

**Einheit:** HV und HB sind Kraft/Fläche (in $\\text{N/mm}^2$, ältere Tabellen ohne Einheit), HRC ist eine dimensionslose Skala.`,
    conceptQuestion: 'Warum wird bei der Vickers-Härte oft die Diamant-Pyramide verwendet?',
    conceptOptions: [
      'Diamant ist extrem hart und nahezu unabhängig von Prüfkraft eichbar',
      'Diamant leitet Wärme schnell ab',
      'Die Pyramide erzeugt einen runden Eindruck',
      'Weil Diamant günstiger als Stahl ist',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Die Pyramidenform gibt geometrisch ähnliche Eindrücke bei unterschiedlichen Prüfkräften — so ist HV von der Kraft unabhängig. Diamant ist hart genug, um auch sehr harte Werkstoffe ohne eigene Verformung zu prüfen.',
    conceptHints: ['HV-Werte sind über weite Kraftbereiche vergleichbar.'],
    conceptWrongAnswers: {
      1: 'Wärmeleitung spielt bei der statischen Härteprüfung keine Rolle.',
      2: 'Eine Pyramide erzeugt einen QUADRATISCHEN (rautenförmigen) Eindruck, der entlang der Diagonale gemessen wird — genau das ist gewünscht.',
      3: 'Diamant ist teuer, wird aber wegen der extremen Härte eingesetzt. Kosten sind nicht der Grund.',
    },
    calcQuestion: 'Eine Vickers-Prüfung ergibt bei Prüfkraft $F=98{,}1\\,\\text{N}$ eine mittlere Eindruck-Diagonale $d=0{,}300\\,\\text{mm}$. Wie groß ist HV (Faustformel: $HV\\approx 0{,}1891\\,F/d^2$)?',
    calcAnswer: 206,
    calcTolerance: 3,
    calcUnit: 'HV',
    calcExplanation: '$HV = 0{,}1891\\cdot 98{,}1/0{,}300^2 = 18{,}54/0{,}09 \\approx 206\\,\\text{HV}$. Typischer Wert für einen mittelharten Stahl (z. B. C45 vergütet).',
    calcHints: ['$HV = 0{,}1891\\,F/d^2$, $F$ in N, $d$ in mm.', '$d^2 = 0{,}09\\,\\text{mm}^2$.'],
    trueFalseStatement: 'Die HRC-Skala ist eine Kraftdichte in N/mm² und somit direkt mit HV vergleichbar.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. HRC wird aus der bleibenden Eindringtiefe eines Diamant-Kegels abgeleitet und ist eine dimensionslose Skala. Umrechnung zu HV nur über Tabellen, nicht linear.',
    trueFalseHints: ['HRC aus Tiefe, HV aus Diagonalen-Fläche.'],
    matchingQuestion: 'Ordne jedem Härteverfahren seinen typischen Einsatzbereich zu.',
    matchingPairs: [
      { left: 'Brinell (HB)', right: 'Weiche bis mittelharte Werkstoffe, große Proben' },
      { left: 'Vickers (HV)', right: 'Universell, auch dünne Schichten und Mikrohärte' },
      { left: 'Rockwell (HRC)', right: 'Harte Werkstoffe, Serienprüfung in der Fertigung' },
    ],
    matchingExplanation: 'In der Praxis: Brinell für Rohmaterial, Vickers im Labor, Rockwell in der Werkhalle.',
    matchingHints: ['Kugel → weich; Kegel → hart; Pyramide → universell.'],
    sortingQuestion: 'Sortiere typische Werkstoffe nach aufsteigender Härte (HV).',
    sortingItems: ['Reinaluminium (~25 HV)', 'Baustahl S235 (~110 HV)', 'Vergütungsstahl C45 (~220 HV)', 'Einsatzgehärteter Stahl (~750 HV)'],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Typische Spannweite: weiche NE-Metalle → Baustahl → Vergütungsstahl → gehärtet/nitriert.',
    sortingHints: ['Reinmetall < Stahl < Vergütungsstahl < gehärteter Stahl.'],
    errorQuestion: 'Ein Student misst HRC an einem weichen Aluminiumblech und erhält einen Wert "knapp über 0". Was ist der Fehler?',
    errorOptions: [
      'HRC ist für harte Werkstoffe gedacht — bei Alu muss HB oder HRB (Kugel, kleine Last) verwendet werden',
      'HRC geht auch bei Gummi noch',
      'Das Alu wurde falsch bestellt',
      'Die Einheit ist $\\text{N/mm}^2$ und nicht $\\text{kN/mm}^2$',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die HRC-Skala setzt auf gehärtete Stähle (nom. 20–70 HRC). Unter ca. 20 HRC ist die Auflösung schlecht und der Diamantkegel reißt die weiche Oberfläche auf. Für Alu: HRB (Stahlkugel) oder besser Brinell.',
    errorHints: ['Jedes Härteverfahren hat einen Eichbereich.'],
    errorWrongAnswers: {
      1: 'Gummi ist für jede klassische Härteprüfung viel zu weich — dafür gibt es die Shore-Härte.',
      2: 'Die Prüfmethode, nicht das Material, ist das Problem.',
      3: 'HRC ist einheitenlos; die Aussage geht am eigentlichen Fehler vorbei.',
    },
    transferQuestion: 'Eine Brinell-Prüfung ($D=10\\,\\text{mm}$, $F=29\\,430\\,\\text{N}$) erzeugt einen Eindruck mit $d=4\\,\\text{mm}$. HB-Wert (Formel: $HB = 0{,}102\\cdot 2F/[\\pi D(D-\\sqrt{D^2-d^2})]$)?',
    transferAnswer: 229,
    transferTolerance: 3,
    transferUnit: 'HB',
    transferExplanation: '$\\sqrt{D^2-d^2}=\\sqrt{100-16}=\\sqrt{84}\\approx 9{,}17$. Nenner: $\\pi\\cdot 10\\cdot(10-9{,}17)=\\pi\\cdot 8{,}3\\approx 26{,}1$. $HB=0{,}102\\cdot 2\\cdot 29430/26{,}1\\approx 230$. (≈ Vergütungsstahl.)',
    transferHints: ['Faktor $0{,}102$ rechnet N in kgf-äquivalent zur alten HB-Definition um.'],
  },

  // ────────────────────────────────────────────────────────────────────────
  'werk-2-2': {
    explanation: `**Kerbschlagbiegeversuch — Zähigkeitsbewertung bei stoßartiger Belastung.**

Eine gekerbte Probe (Charpy-V-Probe: 10×10×55 mm) wird von einem Pendelhammer durchschlagen. Die von der Probe absorbierte **Schlagarbeit $KV$** (in Joule) ist ein Maß für die Zähigkeit — besonders wichtig bei tiefen Temperaturen und scharfen Kerben.

**Übergangsverhalten:** Unter einer materialabhängigen Übergangstemperatur fällt $KV$ stark ab (Duktil-Spröd-Übergang) — kritisch für Stahlkonstruktionen in der Kälte (Schweißnähte, Pipelines).

**Einheit:** Joule (J). Hochzäher Baustahl: $KV\\geq 40\\,\\text{J}$ bei 20 °C. Spröder Guss: 5–10 J.`,
    conceptQuestion: 'Was misst der Kerbschlagbiegeversuch?',
    conceptOptions: [
      'Die Schlagenergie, die die Probe bis zum Bruch aufnimmt — ein Zähigkeitsmaß',
      'Die maximale Zugspannung bei statischer Belastung',
      'Die Härte des Werkstoffs',
      'Die Dichte des Werkstoffs',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Die absorbierte Schlagarbeit $KV$ in Joule ist der Energieunterschied der Pendelhöhen vor und nach dem Durchschlag.',
    conceptHints: ['Pendel vorher oben, nachher (nach Durchschlag) weniger hoch — Differenz = absorbierte Energie.'],
    conceptWrongAnswers: {
      1: 'Statische Zugspannung misst der Zugversuch, nicht der Kerbschlagversuch. Hier geht es um STOSSARTIGE Belastung.',
      2: 'Härte ist Brinell/Vickers/Rockwell.',
      3: 'Dichte wird per Waage und Volumen bestimmt.',
    },
    calcQuestion: 'Eine Charpy-V-Probe absorbiert bei 20 °C eine Schlagarbeit $KV=32\\,\\text{J}$. Der Nennquerschnitt unter der Kerbe ist $A_n = 80\\,\\text{mm}^2$. Wie groß ist die kerbspezifische Schlagarbeit $KV/A_n$ (in J/cm²)?',
    calcAnswer: 40,
    calcTolerance: 0.5,
    calcUnit: 'J/cm²',
    calcExplanation: '$A_n = 80\\,\\text{mm}^2 = 0{,}8\\,\\text{cm}^2$. $KV/A_n = 32/0{,}8 = 40\\,\\text{J/cm}^2$. Typischer Wert für zähen Baustahl.',
    calcHints: ['Einheitenumrechnung: $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$.'],
    trueFalseStatement: 'Ferritische Stähle zeigen unter der Übergangstemperatur einen drastischen Abfall der Schlagarbeit — bei austenitischen Stählen fehlt dieser Sprung weitgehend.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Kubisch-raumzentrierte Strukturen (Ferrit) versagen bei tiefen Temperaturen spröd; kubisch-flächenzentrierte (Austenit) bleiben zäh bis zu sehr tiefen Temperaturen. Historische Katastrophen (Liberty-Schiffe) basieren auf diesem Effekt.',
    trueFalseHints: ['Kristallstruktur entscheidet über Duktil-Spröd-Übergang.'],
    matchingQuestion: 'Ordne das beobachtete Bruchbild der zugehörigen Bewertung zu.',
    matchingPairs: [
      { left: '100 % Glanzbruch (feinkristallin, matt)', right: 'Sprödbruch → niedrige Schlagarbeit' },
      { left: '100 % Sehnenbruch (faserig, matt-grau)', right: 'Zähbruch → hohe Schlagarbeit' },
      { left: 'Mischbruch', right: 'Übergangsbereich, Schlagarbeit fällt ab' },
    ],
    matchingExplanation: 'Die Bruchfläche zeigt oft direkt, ob spröd, zäh oder im Übergang.',
    matchingHints: ['Glanz = kristallin = spröde; Sehnen = plastisch = zäh.'],
    sortingQuestion: 'Bringe die Prüfschritte des Kerbschlagversuchs in die richtige Reihenfolge.',
    sortingItems: [
      'Probe in die Prüfmaschine einspannen (Kerbe zum Hammer)',
      'Pendelhammer auf Ausgangshöhe anheben und arretieren',
      'Hammer auslösen — Probe wird durchschlagen',
      'Resthöhe ablesen, Energiedifferenz = Schlagarbeit',
    ],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Die Energiedifferenz zwischen Start- und Resthöhe ist die absorbierte Schlagarbeit.',
    sortingHints: ['Energieerhaltung: $E = m g(h_{\\text{Start}}-h_{\\text{Rest}})$.'],
    errorQuestion: 'Für eine Schweißnaht in einer Pipeline wird bei $-40\\,^\\circ\\text{C}$ Einsatztemperatur eine zähigkeits-Prüfung bei Raumtemperatur gemacht. Welcher Fehler liegt vor?',
    errorOptions: [
      'Die Prüftemperatur muss der Einsatztemperatur entsprechen, weil $KV$ stark temperaturabhängig ist',
      'Raumtemperatur-Prüfung ist immer richtig',
      'Charpy-V geht nicht bei $-40\\,^\\circ\\text{C}$',
      'Pipelines brauchen keine Prüfung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Bei ferritischem Stahl fällt $KV$ unterhalb der Übergangstemperatur drastisch ab. Eine RT-Prüfung sagt nichts über das Sprödbruchrisiko bei $-40\\,^\\circ\\text{C}$ aus. Daher: Proben bei Einsatztemperatur prüfen.',
    errorHints: ['Duktil-Spröd-Übergang.'],
    errorWrongAnswers: {
      1: 'Bauteile müssen unter Einsatzbedingungen getestet werden, sonst ist die Sicherheitsbewertung wertlos.',
      2: 'Doch — Charpy-Proben können in Kältebad oder Klimakammer konditioniert und dann geschlagen werden.',
      3: 'Gerade Pipelines sind regulatorisch auf Kerbschlagzähigkeit zu prüfen.',
    },
    transferQuestion: 'Bei einer Messreihe fällt $KV$ von $60\\,\\text{J}$ (20 °C) auf $12\\,\\text{J}$ (−40 °C). Um wie viele Prozent hat sich die Zähigkeit reduziert?',
    transferAnswer: 80,
    transferTolerance: 1,
    transferUnit: '%',
    transferExplanation: '$(60-12)/60 \\cdot 100\\,\\% = 48/60 \\cdot 100\\,\\% = 80\\,\\%$. Klassischer Duktil-Spröd-Übergang.',
    transferHints: ['Prozentualer Abfall: $\\Delta KV/KV_{\\text{Anfang}}$.'],
  },

  // ────────────────────────────────────────────────────────────────────────
  'werk-2-3': {
    explanation: `**Eisen-Kohlenstoff-Diagramm — Fahrplan für Stahl & Gusseisen.**

Das Fe-Fe₃C-Diagramm zeigt, welche Phasen (Ferrit, Austenit, Perlit, Zementit, Ledeburit) bei welchem **C-Gehalt** und welcher **Temperatur** stabil sind. Zentral:
- **Eutektoide Zusammensetzung:** 0,8 % C → bildet bei 723 °C Perlit (Ferrit + Zementit).
- **Unterperlitisch** (<0,8 % C): Ferrit + Perlit. Üblicher Baustahl.
- **Überperlitisch** (0,8–2,06 % C): Perlit + Sekundärzementit. Werkzeugstahl.
- **>2,06 % C:** Gusseisen (eutektisch bei 4,3 % C).

**Wärmebehandlung:**
- **Härten:** Austenitisieren (>723 °C) + rasche Abkühlung → Martensit (hart, spröde).
- **Anlassen:** Martensit bei 150–650 °C → Härte↓, Zähigkeit↑.
- **Vergüten:** Härten + hohes Anlassen → hohe Festigkeit bei brauchbarer Zähigkeit.`,
    conceptQuestion: 'Welche Phase entsteht bei schneller Abschreckung von Austenit?',
    conceptOptions: [
      'Martensit — übersättigt mit Kohlenstoff, tetragonal verzerrt, sehr hart und spröde',
      'Perlit — lamellare Ferrit-Zementit-Struktur',
      'Ferrit — weich und zäh',
      'Ledeburit — eutektische Gusseisenstruktur',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei schneller Abkühlung kann der C nicht diffundieren. Das Ergebnis ist Martensit: zwangsgelöster C in einem verzerrten Kristallgitter. Ohne Anlassen zu spröde.',
    conceptHints: ['Schnell = keine Zeit für Diffusion.'],
    conceptWrongAnswers: {
      1: 'Perlit entsteht bei LANGSAMER Abkühlung — der C hat Zeit zu diffundieren und bildet Lamellen.',
      2: 'Ferrit ist die Grundphase bei Raumtemperatur und ohne Abschreckung — nicht das Produkt des Härtens.',
      3: 'Ledeburit tritt nur bei hohem C-Gehalt (Gusseisen) auf, nicht bei Stahl-Abschreckung.',
    },
    calcQuestion: 'Ein eutektoider Stahl (0,8 % C) enthält nach langsamer Abkühlung vollständig Perlit. Perlit besteht aus Ferrit (max. 0,022 % C) und Zementit (6,67 % C). Welcher Massenanteil Zementit ergibt sich (Hebel-Gesetz, in %)?',
    calcAnswer: 11.7,
    calcTolerance: 0.3,
    calcUnit: '%',
    calcExplanation: 'Hebelgesetz: $m_{\\text{Zem}} = (C-C_{\\text{Fer}})/(C_{\\text{Zem}}-C_{\\text{Fer}}) = (0{,}8-0{,}022)/(6{,}67-0{,}022) \\approx 0{,}117 = 11{,}7\\,\\%$. Rest (88{,}3 %) ist Ferrit.',
    calcHints: ['Hebelgesetz: Abstand zu der einen Grenze, geteilt durch Gesamtintervall.'],
    trueFalseStatement: 'Anlassen reduziert die Härte von gehärtetem Stahl, erhöht aber seine Zähigkeit.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Beim Anlassen zerfällt der tetragonal verzerrte Martensit in kubischen Ferrit + feindispersem Zementit. Ergebnis: weniger hart, aber deutlich weniger spröde.',
    trueFalseHints: ['Vergüten = Härten + Anlassen.'],
    matchingQuestion: 'Ordne jedem Verfahren das Ziel zu.',
    matchingPairs: [
      { left: 'Glühen (spannungsarm)', right: 'Innere Spannungen abbauen' },
      { left: 'Normalisieren', right: 'Feinkörniges, gleichmäßiges Gefüge' },
      { left: 'Härten', right: 'Maximale Härte durch Martensit-Bildung' },
      { left: 'Anlassen', right: 'Härte gezielt reduzieren, Zähigkeit erhöhen' },
    ],
    matchingExplanation: 'Vier Standardverfahren — jedes mit klarem Ziel. Häufige Prüfungsfrage: "Welches Verfahren würden Sie wählen, um …?".',
    matchingHints: ['Glühen senkt Spannung, Härten erhöht Festigkeit.'],
    sortingQuestion: 'Bringe die Schritte einer Vergütung in die richtige Reihenfolge.',
    sortingItems: [
      'Bauteil erwärmen bis über $A_3$ (ca. 850 °C) — Austenitisieren',
      'Schnell abschrecken (Wasser oder Öl) — Martensit-Bildung',
      'Bauteil auf Anlasstemperatur (z. B. 550 °C) erwärmen',
      'Kontrolliert abkühlen — fertiges Vergütungsgefüge',
    ],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Klassischer Vergütungszyklus: Austenitisieren → Abschrecken → Anlassen → Abkühlen.',
    sortingHints: ['Erst aufheizen, dann abschrecken, dann anlassen.'],
    errorQuestion: 'Jemand härtet ein Werkzeug ohne anschließendes Anlassen und klagt über Rissbildung. Welcher Fehler liegt vor?',
    errorOptions: [
      'Ungehärtet ist Martensit zu spröde — Anlassen ist zwingend, damit das Werkzeug Einsatzspannungen aushält',
      'Härten allein genügt immer',
      'Das Material war zu weich',
      'Abschrecken in Öl ist falsch',
    ],
    errorCorrect: 0,
    errorExplanation: 'Unangelassener Martensit enthält hohe innere Spannungen + ist extrem spröde. Selbst kleine Schläge oder Temperatursprünge erzeugen Risse. Anlassen ist deshalb Pflicht nach dem Härten.',
    errorHints: ['Vergüten = Härten + Anlassen.'],
    errorWrongAnswers: {
      1: 'Ohne Anlassen nahezu nie einsatztauglich — zu spröde.',
      2: 'Zu weich wäre ein Rückschluss auf zu wenig Härtung; das Problem hier ist die Rissanfälligkeit, nicht Weichheit.',
      3: 'Öl-Abschreckung ist für mittellegierte Stähle sogar gewünscht — sie ist nicht die Ursache.',
    },
    transferQuestion: 'Ein C45-Stahl wird auf 820 °C austenitisiert und in Öl abgeschreckt. Typische erreichte Härte: ca. 58 HRC. Wie viele HV entspricht das approximativ (Umrechnung: $HV\\approx HRC\\cdot 10 + ~50$)?',
    transferAnswer: 630,
    transferTolerance: 20,
    transferUnit: 'HV',
    transferExplanation: 'Mit der Faustformel $HV \\approx 58\\cdot 10 + 50 = 630\\,\\text{HV}$. (Exakte Umrechnung über DIN-Tabellen, Faustformel reicht für Abschätzungen.)',
    transferHints: ['Faustformel $HV\\approx 10\\cdot\\text{HRC}+50$ im Bereich 20–60 HRC.'],
  },

  // ────────────────────────────────────────────────────────────────────────
  'werk-pruefung-1': {
    exam: true,
    explanation: `**Prüfungsstrategie — Werkstoffwahl & Kennwerte.**

Typische Fragetypen:
1. **Aus Zugversuch Kennwerte ablesen** ($R_e$, $R_m$, $E$, $A$) mit korrekter Einheit.
2. **Zulässige Spannung berechnen** ($\\sigma_{\\text{zul}}=R_e/S$) — Sicherheitszahl ist gegeben oder zu wählen.
3. **Werkstoffauswahl begründen** — Gewichts-/Festigkeits-/Korrosions-Tradeoff.
4. **Prüfverfahren zuordnen** — welches Verfahren für welche Werkstoffklasse?

**Checkliste:** Zuerst die gesuchte Größe identifizieren, Einheiten notieren, Sicherheitszahlen/Faktoren unterscheiden (Streckgrenze ≠ Zugfestigkeit, Härte ≠ Festigkeit), und immer Plausibilität prüfen.`,
    conceptQuestion: 'Welcher der folgenden Werkstoffe ist die BESTE Wahl für eine hochfeste Schraube bei normaler Temperatur?',
    conceptOptions: [
      'Vergütungsstahl (z. B. 42CrMo4) — hohe Festigkeit und brauchbare Zähigkeit',
      'Reines Aluminium — geringe Dichte',
      'Polyethylen — korrosionsbeständig',
      'Grauguss — günstige Kosten',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Hochfeste Schrauben (8.8, 10.9, 12.9) werden aus Vergütungsstählen gefertigt. Alu: zu weich. PE: zu weich + nachgebend. Grauguss: spröde, kein Gewinderollen möglich.',
    conceptHints: ['Hochfest = $R_m \\geq 800\\,\\text{MPa}$ wird i. d. R. nur mit Vergütungsstahl erreicht.'],
    conceptWrongAnswers: {
      1: 'Alu hat nur ~300 MPa $R_m$ und ist zu weich für hochbelastete Schraubverbindungen.',
      2: 'PE nachzulassen unter Last (Kriechen) — Schrauben würden sich lockern.',
      3: 'Grauguss ist spröde und ungeeignet für Zug-Bauteile mit Gewinde.',
    },
    calcQuestion: 'Eine Zugstange aus Baustahl S355 ($R_e=355\\,\\text{MPa}$) wird mit Sicherheitszahl $S=2{,}0$ ausgelegt. Welche zulässige Zugspannung $\\sigma_{\\text{zul}}$ ergibt sich (in MPa)?',
    calcAnswer: 177.5,
    calcTolerance: 1,
    calcUnit: 'MPa',
    calcExplanation: '$\\sigma_{\\text{zul}}=R_e/S=355/2=177{,}5\\,\\text{MPa}$.',
    calcHints: ['Zulässige Spannung immer aus Streckgrenze, geteilt durch Sicherheitszahl.'],
    trueFalseStatement: 'Die Zugfestigkeit $R_m$ ist die maximale Spannung auf der Zugprüfkurve und liegt IMMER oberhalb der Streckgrenze $R_e$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. $R_e$ markiert den Fließbeginn, $R_m$ das Maximum der Kurve — $R_m>R_e$ gilt für alle normalen metallischen Werkstoffe.',
    trueFalseHints: ['Erst fließen, dann verfestigen, dann Maximum.'],
    matchingQuestion: 'Ordne jeder Anwendung das passende Werkstoffprofil zu.',
    matchingPairs: [
      { left: 'Hitzebelastete Turbinenschaufel', right: 'Hochwarmfeste Ni-Basislegierung' },
      { left: 'Leichte Karosserie', right: 'Aluminiumlegierung oder hochfester Stahl' },
      { left: 'Schlagzähe Bohrerspitze', right: 'Hartmetall (WC-Co) oder HSS' },
      { left: 'Korrosionsbeständige Armatur', right: 'Austenitischer Edelstahl (V2A/V4A)' },
    ],
    matchingExplanation: 'Jede Werkstoffklasse hat Anwendungen, die ihre Stärken optimal nutzen.',
    matchingHints: ['Ni-Basis für Hitze, Al für Leichtbau, Hartmetall für Verschleiß, austenitisch für Korrosion.'],
    sortingQuestion: 'Sortiere die Schritte einer Werkstoffauswahl in der richtigen Reihenfolge.',
    sortingItems: [
      'Anforderungsprofil definieren (Last, Temperatur, Umgebung, Kosten)',
      'Kandidaten-Werkstoffe aus Tabellen filtern',
      'Kennwerte vergleichen (Festigkeit, Steifigkeit, Korrosion, Verarbeitbarkeit)',
      'Auswahlentscheidung mit Begründung dokumentieren',
    ],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Ein strukturiertes Vorgehen spart Klausurzeit und vermeidet Fehlentscheidungen.',
    sortingHints: ['Erst Anforderung, dann Kandidaten, dann Vergleich, dann Entscheidung.'],
    errorQuestion: 'Ein Konstrukteur dimensioniert ein Bauteil mit $\\sigma_{\\text{zul}}=R_m/2$ statt $\\sigma_{\\text{zul}}=R_e/S$. Welcher Fehler liegt vor?',
    errorOptions: [
      'Die Zugfestigkeit $R_m$ ist die Bruchspannung und liefert keine Sicherheit gegen bleibende Verformung — korrekt ist $R_e/S$',
      'Die Rechnung ist richtig, weil $R_m>R_e$',
      '$R_m$ und $R_e$ sind identisch',
      'Sicherheitszahl ist überflüssig',
    ],
    errorCorrect: 0,
    errorExplanation: 'Wird das Bauteil über $R_e$ belastet, gibt es plastische Verformung — Funktion und Maßhaltigkeit sind verloren. Sicherheitszahl muss auf $R_e$ bezogen werden, nicht auf $R_m$.',
    errorHints: ['Bauteil soll nicht dauerhaft verformen, daher $R_e$ als Grenze.'],
    errorWrongAnswers: {
      1: 'Höhere Zahl macht die Auslegung unsicherer, nicht sicherer — Argumentation ist verkehrt.',
      2: '$R_m$ liegt über $R_e$ bei allen gebräuchlichen metallischen Werkstoffen.',
      3: 'Sicherheitszahlen sind in der Norm DIN 743 und in jedem Konstrukteurswissen zwingend.',
    },
    transferQuestion: 'Eine Welle ($d=20\\,\\text{mm}$) trägt eine Zugkraft $F=50\\,000\\,\\text{N}$. Wie groß ist die auftretende Zugspannung (in MPa)?',
    transferAnswer: 159.2,
    transferTolerance: 1,
    transferUnit: 'MPa',
    transferExplanation: '$A = \\pi d^2/4 = \\pi\\cdot 400/4 \\approx 314{,}2\\,\\text{mm}^2$. $\\sigma=F/A = 50000/314{,}2 \\approx 159{,}2\\,\\text{MPa}$. Unter $R_e=355\\,\\text{MPa}$ bei S355 — mit $S\\approx 2{,}2$ zulässig.',
    transferHints: ['Kreisquerschnitt $A=\\pi d^2/4$.'],
  },
}

export const werkstoffkundeSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
