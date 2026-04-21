function mc(question, options, correctIndex, explanation, hints = [], visualization = undefined, wrongAnswerExplanations = undefined) {
  return {
    type: 'multiple-choice',
    question,
    options,
    correctIndex,
    explanation,
    hints,
    ...(visualization ? { visualization } : {}),
    ...(wrongAnswerExplanations ? { wrongAnswerExplanations } : {}),
  }
}

function ni(question, correctValue, tolerance, unit, explanation, hints = [], visualization = undefined) {
  return { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints, ...(visualization ? { visualization } : {}) }
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
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptVisualization, profile.conceptWrongAnswers),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints, profile.calcVisualization),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints, undefined, profile.errorWrongAnswers),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'thermo-1-1': {
    explanation: String.raw`**Vertiefung Ideales Gas:** Die ideale Gasgleichung verknüpft Druck, Volumen, Stoffmenge und Temperatur:

$$p \cdot V = n \cdot R \cdot T$$

- $p$: Druck in Pa
- $V$: Volumen in m³
- $n$: Stoffmenge in mol
- $R = 8{,}314$ J/(mol·K): universelle Gaskonstante
- $T$: **absolute Temperatur in Kelvin**

**Temperaturumrechnung:** $T \, [\text{K}] = \vartheta \, [\text{°C}] + 273{,}15$. Das ist der Knackpunkt: In allen Gasgleichungen MUSS Kelvin verwendet werden, niemals Celsius.

**Massespezifisch:** Mit Molmasse $M$ und Masse $m$: $n = m/M$, und mit spezifischer Gaskonstante $R_s = R/M$ folgt $pV = m R_s T$.

**Typischer Fehler:** Celsius statt Kelvin verwendet (bei $t=0$ °C wird sonst $pV = 0$) oder Normalvolumen/Literatur-Werte ohne Kontext eingesetzt.`,

    conceptQuestion: 'Warum muss in der Gasgleichung $pV = nRT$ zwingend Kelvin verwendet werden?',
    conceptOptions: [
      'Weil die absolute Temperatur gebraucht wird — bei $T = 0$ K ist auch die mittlere kinetische Energie der Teilchen null',
      'Weil Celsius nur positive Werte zulässt',
      'Weil Kelvin eine Kraft misst',
      'Aus historischen Gründen',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Kelvin ist eine absolute Temperaturskala: $T = 0$ K entspricht dem absoluten Nullpunkt, bei dem die Teilchenbewegung zum Erliegen kommt. Bei Celsius-Nullpunkt ($T = 273{,}15$ K) ist noch reichlich kinetische Energie da. Die Gasgleichung beschreibt genau diese Proportionalität zur absoluten Temperatur.',
    conceptHints: [
      'Denk an die molekulare Interpretation: Temperatur ∝ mittlere kinetische Energie.',
      'Celsius hat einen willkürlichen Nullpunkt (Eispunkt).',
    ],
    conceptWrongAnswers: {
      1: 'Auch Kelvin kann negative Differenzen haben (bei Abkühlung). Der Unterschied ist der Nullpunkt: Kelvin startet am absoluten Nullpunkt, Celsius am Eispunkt. Die Gasgleichung braucht den absoluten Bezug.',
      2: 'Kelvin misst Temperatur, keine Kraft. Temperatureinheiten sind anderer Natur als Krafteinheiten (N). Der Grund für Kelvin liegt im absoluten Nullpunkt-Bezug.',
      3: 'Nicht historisch, sondern physikalisch zwingend: Die ideale Gasgleichung $pV = nRT$ wurde direkt aus der absoluten Temperatur abgeleitet. Mit Celsius entstehen physikalisch unsinnige Ergebnisse.',
    },
    conceptVisualization: {
      id: 'pv-diagram',
      params: { mode: 'static' },
      caption: 'p-V-Diagramm: isotherme Kurven (T₁ < T₂) — pV = nRT = const',
      alt: 'p-V-Diagramm mit isothermen Kurven für verschiedene Temperaturen',
    },

    calcQuestion: 'Ein Gas wird von $t_1 = 20$ °C auf $t_2 = 100$ °C bei konstantem Druck erwärmt. Das Anfangsvolumen ist $V_1 = 1$ $m^3$. Wie groß ist $V_2$ in $m^3$?',
    calcAnswer: 1.273,
    calcTolerance: 0.005,
    calcUnit: 'm^3',
    calcExplanation: 'Isobar: $V_1/T_1 = V_2/T_2$. Umrechnen: $T_1 = 293{,}15$ K, $T_2 = 373{,}15$ K. $V_2 = V_1 \\cdot T_2/T_1 = 1 \\cdot 373{,}15/293{,}15 \\approx 1{,}273$ $m^3$. Das Volumen wächst um ca. 27 %.',
    calcHints: [
      'Bei konstantem Druck: $V/T = $ const.',
      'Temperaturen in Kelvin umrechnen (addiere 273,15).',
      '$V_2 = V_1 \\cdot T_2/T_1$.',
    ],

    trueFalseStatement: 'Der Absolute Nullpunkt liegt bei $-273{,}15$ °C und entspricht $0$ K.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der absolute Nullpunkt ist der tiefste thermodynamisch mögliche Zustand. Er ist praktisch unerreichbar (dritter Hauptsatz), kann aber auf Millikelvin angenähert werden. Die Kelvin-Skala wurde so definiert, dass ihr Nullpunkt genau dort liegt und die Einheitslänge derer des Celsius entspricht.',
    trueFalseHints: [
      'Kelvin-Differenz = Celsius-Differenz, aber Nullpunkt anders.',
      'Umrechnung: $T$ [K] = $\\vartheta$ [°C] + 273,15.',
    ],

    matchingQuestion: 'Ordne die Zustandsgrößen ihren SI-Einheiten zu.',
    matchingPairs: [
      { left: 'Druck $p$', right: '$Pa = N/m^2$' },
      { left: 'Volumen $V$', right: '$m^3$' },
      { left: 'Stoffmenge $n$', right: 'mol' },
      { left: 'Temperatur $T$', right: 'K (Kelvin)' },
    ],
    matchingExplanation: 'In der Gasgleichung passen diese Einheiten mit der Gaskonstanten $R = 8{,}314$ J/(mol·K) zusammen. Bei technischen Rechnungen wird oft die spezifische Gaskonstante $R_s = R/M$ genutzt.',
    matchingHints: [
      'SI-Druck: Pa. Bar und Atm sind abgeleitete Einheiten.',
      'Stoffmenge wird in mol gemessen, nicht kg.',
    ],

    sortingQuestion: 'Ordne die Schritte für eine Gasgleichungsaufgabe.',
    sortingItems: [
      'Gegeben/Gesucht auflisten mit Einheiten',
      'Celsius in Kelvin umrechnen: $T = \\vartheta + 273{,}15$',
      'Prozesstyp identifizieren (isotherm/isobar/isochor/adiabat)',
      'Passende Zustandsgleichung aufstellen',
      'Nach gesuchter Größe auflösen und einsetzen',
      'Einheitencheck des Ergebnisses',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5],
    sortingExplanation: 'Die Kelvin-Umrechnung ist der zweite Schritt — direkt nach dem Listen der gegebenen Werte. Damit ist sichergestellt, dass keine Celsius-Werte in Formeln hineinrutschen.',
    sortingHints: [
      'Kelvin-Umrechnung immer vor der Rechnung.',
      'Einheitencheck am Ende fängt Rechenfehler.',
    ],

    errorQuestion: 'Ein Student rechnet: "Gas bei $p_1 = 1$ bar, $T_1 = 20$ °C wird isobar auf $T_2 = 40$ °C erwärmt. $V_2/V_1 = T_2/T_1 = 40/20 = 2$." Was stimmt nicht?',
    errorOptions: [
      'Temperaturen müssen in Kelvin: $T_1 = 293{,}15$ K, $T_2 = 313{,}15$ K, also $V_2/V_1 \\approx 1{,}068$',
      'Der Druck ist nicht konstant',
      'Die Formel gilt nur bei konstantem Volumen',
      'Bei 20 °C ist das Gas flüssig',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat Celsius direkt eingesetzt. Das doppelte Volumen bei 40 °C gegenüber 20 °C wäre physikalisch absurd — Temperaturverdopplung in Kelvin bedeutet mehrere hundert Grad. Die richtige Rechnung gibt nur 6,8 % Volumenzunahme.',
    errorHints: [
      'Gasgleichungen brauchen absolute Temperaturen.',
      'Plausibilitätscheck: Ist der Effekt bei 20 °C → 40 °C wirklich eine Verdopplung?',
    ],
    errorWrongAnswers: {
      1: 'Isobar ist per Aufgabenstellung vorausgesetzt — der Druck ändert sich nicht. Der Fehler liegt bei der Temperatureinheit, nicht bei einer Druckänderung.',
      2: 'Die Formel $V/T = $ const gilt gerade bei konstantem Druck (isobar) — nicht bei konstantem Volumen. Bei konstantem Volumen gilt $p/T = $ const.',
      3: 'Bei 20 °C ist Luft definitiv gasförmig — erst bei $-196$ °C wird sie flüssig. Der Fehler liegt bei Celsius statt Kelvin in der Gasgleichung.',
    },

    transferQuestion: 'Ein Gasbehälter (starr, $V = $ const) wird von $t_1 = 27$ °C auf $t_2 = 127$ °C erwärmt. Anfangsdruck $p_1 = 1$ bar. Wie groß ist $p_2$ in bar?',
    transferAnswer: 1.333,
    transferTolerance: 0.005,
    transferUnit: 'bar',
    transferExplanation: 'Isochor: $p_1/T_1 = p_2/T_2$. $T_1 = 300{,}15$ K, $T_2 = 400{,}15$ K. $p_2 = p_1 \\cdot T_2/T_1 = 1 \\cdot 400{,}15/300{,}15 \\approx 1{,}333$ bar.',
    transferHints: [
      'Bei konstantem Volumen: $p/T = $ const.',
      'Kelvin umrechnen nicht vergessen.',
      '$p_2 = p_1 \\cdot T_2/T_1$.',
    ],
  },

  'thermo-1-2': {
    explanation: String.raw`**Vertiefung Zustandsänderungen:** Vier idealisierte Prozesse beim idealen Gas:

| Prozess | konst. | Beziehung |
|---|---|---|
| Isotherm | $T$ | $pV = $ const → Hyperbel |
| Isobar | $p$ | $V/T = $ const |
| Isochor | $V$ | $p/T = $ const |
| Adiabat | kein Wärmeaustausch | $pV^\kappa = $ const |

mit Adiabatenexponent $\kappa = c_p/c_v$ (Luft: $\kappa \approx 1{,}4$).

**Arbeit bei reversiblen Prozessen:**
- Isotherm: $W = n R T \ln(V_2/V_1)$
- Isobar: $W = p (V_2 - V_1)$
- Isochor: $W = 0$

**Typischer Fehler:** Falsche Formel, weil Prozesstyp falsch identifiziert wurde. Bei adiabatischer Kompression steigt die Temperatur deutlich — das ist oft Klausurfalle.`,

    conceptQuestion: 'Welche Zustandsänderung läuft so schnell ab, dass kein Wärmeaustausch mit der Umgebung stattfindet?',
    conceptOptions: [
      'Adiabate Zustandsänderung ($Q = 0$)',
      'Isotherme Zustandsänderung',
      'Isobare Zustandsänderung',
      'Isochore Zustandsänderung',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Adiabatisch heißt "ohne Wärmedurchgang". Typisch bei schnellen Verdichtungen (Motor-Kolben, Schallausbreitung). Die Temperatur ändert sich dabei dennoch — durch die Arbeit, die am Gas verrichtet wird.',
    conceptHints: [
      '"Adiabat" = griechisch: "nicht hindurchgehend" — für Wärme.',
      'Schnelle Prozesse ≈ adiabat, langsame ≈ isotherm.',
    ],
    conceptWrongAnswers: {
      1: 'Isotherm bedeutet konstante Temperatur ($T = $ const), nicht kein Wärmeaustausch. Tatsächlich muss hier sogar viel Wärme ausgetauscht werden, damit $T$ konstant bleibt.',
      2: 'Isobar bedeutet konstanter Druck ($p = $ const), nicht kein Wärmeaustausch. Isobare Prozesse haben sehr wohl Wärmeaustausch (z.B. Kochen auf offenem Topf).',
      3: 'Isochor bedeutet konstantes Volumen ($V = $ const). Auch hier findet Wärmeaustausch statt, die Arbeit ist nur null. Adiabat = $Q = 0$, nicht $W = 0$.',
    },

    calcQuestion: 'Ein Gas ($n = 2$ mol) wird isotherm bei $T = 300$ K von $V_1 = 1$ $m^3$ auf $V_2 = 2$ $m^3$ expandiert. Wie viel Arbeit leistet es in kJ (Gaskonstante $R = 8{,}314$ J/(mol·K))?',
    calcAnswer: 3.457,
    calcTolerance: 0.02,
    calcUnit: 'kJ',
    calcExplanation: 'Isotherme Arbeit: $W = n R T \\ln(V_2/V_1) = 2 \\cdot 8{,}314 \\cdot 300 \\cdot \\ln(2) = 4988{,}4 \\cdot 0{,}6931 \\approx 3458$ J $\\approx 3{,}46$ kJ. Das Gas leistet Arbeit an der Umgebung.',
    calcHints: [
      'Isotherme Arbeit hat $\\ln(V_2/V_1)$ als Faktor.',
      '$\\ln(2) \\approx 0{,}693$.',
      'In kJ: durch 1000 teilen.',
    ],

    trueFalseStatement: 'Bei einer adiabaten Kompression eines idealen Gases bleibt die Temperatur konstant.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Bei Adiabaten wird am Gas verrichtete Arbeit vollständig in innere Energie umgewandelt (da $Q = 0$), die Temperatur steigt. Bei adiabater Expansion ist es umgekehrt — das Gas kühlt ab. Deshalb heizt sich ein Dieselmotor bei der Verdichtung stark auf.',
    trueFalseHints: [
      'Isotherm = konstante Temperatur, nicht adiabat.',
      '1. Hauptsatz: $\\Delta U = Q - W$. Bei $Q = 0$: $\\Delta U = -W$.',
    ],

    matchingQuestion: 'Ordne jedem Prozesstyp die charakteristische Beziehung zu.',
    matchingPairs: [
      { left: 'Isotherm', right: '$pV = $ const' },
      { left: 'Isobar', right: '$V/T = $ const' },
      { left: 'Isochor', right: '$p/T = $ const' },
      { left: 'Adiabat', right: '$pV^\\kappa = $ const' },
    ],
    matchingExplanation: 'Diese vier Kennlinien im p-V-Diagramm sind die Basis der meisten Kreisprozesse (Otto, Diesel, Carnot). Erkennt man den Prozess, steht die Formel sofort fest.',
    matchingHints: [
      'Isotherm im p-V-Diagramm: Hyperbel.',
      'Adiabat ist "steiler" als Isotherm.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Arbeitsberechnung bei einer isobaren Expansion.',
    sortingItems: [
      'Prozesstyp identifizieren: isobar ($p = $ const)',
      'Anfangs- und Endvolumen bestimmen ($V_1, V_2$)',
      'Formel wählen: $W = p (V_2 - V_1)$',
      'Einheitencheck: $Pa \\cdot m^3 = J$',
      'Vorzeichen interpretieren: positiv = Gas leistet Arbeit',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Prozesstyp zuerst — dann Volumenänderung, dann Formel. Der Einheitencheck $Pa \\cdot m^3 = J$ ist ein häufiger Zwischencheck.',
    sortingHints: [
      'Ohne Prozesstyp keine Formelwahl.',
      '$Pa \\cdot m^3$: erweitere $Pa = N/m^2$ → $N \\cdot m = J$.',
    ],

    errorQuestion: 'Ein Student rechnet für eine adiabate Zustandsänderung: "$p_1 V_1 = p_2 V_2$". Was ist der Fehler?',
    errorOptions: [
      'Das ist das Gesetz für isotherme Änderung. Adiabat: $p_1 V_1^\\kappa = p_2 V_2^\\kappa$ mit $\\kappa > 1$',
      'Die Gasgleichung ist generell falsch',
      'Bei Adiabaten gilt $V = $ const',
      'Der Fehler liegt beim Druck',
    ],
    errorCorrect: 0,
    errorExplanation: '$pV = $ const gilt nur isotherm. Bei Adiabat kommt der Adiabatenexponent $\\kappa$ ins Spiel: $pV^\\kappa = $ const. Für Luft $\\kappa \\approx 1{,}4$. Deshalb fallen Adiabaten im p-V-Diagramm steiler als Isothermen.',
    errorHints: [
      '$pV = $ const ist Boyle-Mariotte — isotherm.',
      'Adiabat: $pV^\\kappa = $ const mit $\\kappa > 1$.',
    ],
    errorWrongAnswers: {
      1: 'Die ideale Gasgleichung $pV = nRT$ ist generell gültig für ideale Gase in jedem Zustand. Der Fehler liegt bei der Prozessgleichung: $pV = $ const gilt nur isotherm.',
      2: 'Adiabat bedeutet $Q = 0$, nicht $V = $ const. Letzteres wäre isochor. Bei adiabatischer Kompression ändert sich $V$ sehr wohl — sonst wäre keine Arbeit möglich.',
      3: 'Nicht der Druck ist das Problem, sondern der fehlende Adiabatenexponent. Die Gleichung müsste $pV^\\kappa = $ const lauten, mit $\\kappa > 1$.',
    },

    transferQuestion: 'Luft ($\\kappa = 1{,}4$) wird adiabat von $p_1 = 1$ bar, $V_1 = 1$ L auf $V_2 = 0{,}5$ L komprimiert. Wie groß ist $p_2$ in bar?',
    transferAnswer: 2.639,
    transferTolerance: 0.02,
    transferUnit: 'bar',
    transferExplanation: 'Adiabat: $p_1 V_1^\\kappa = p_2 V_2^\\kappa \\Rightarrow p_2 = p_1 (V_1/V_2)^\\kappa = 1 \\cdot 2^{1{,}4} \\approx 2{,}639$ bar. Der Druck steigt deutlich stärker als bei einer isothermen Kompression (wo er auf 2 bar steigen würde).',
    transferHints: [
      'Adiabat: $pV^\\kappa = $ const.',
      '$p_2 = p_1 \\cdot (V_1/V_2)^\\kappa$.',
      '$2^{1{,}4} \\approx 2{,}639$.',
    ],
  },

  'thermo-2-1': {
    explanation: String.raw`**Vertiefung Erster Hauptsatz:** Der 1. Hauptsatz ist die Energiebilanz eines thermodynamischen Systems:

$$\Delta U = Q - W$$

- $\Delta U$: Änderung der inneren Energie des Systems
- $Q$: zugeführte Wärme (positiv, wenn das System Wärme aufnimmt)
- $W$: vom System geleistete Arbeit (positiv, wenn das System Arbeit abgibt)

**Vorzeichenkonvention (Maschinenbau):**
- $Q > 0$: Wärme ins System hinein
- $W > 0$: Arbeit vom System nach außen

**Spezialfälle:**
- Isochor: $W = 0$ → $\Delta U = Q$
- Adiabat: $Q = 0$ → $\Delta U = -W$
- Isotherm beim idealen Gas: $\Delta U = 0$ → $Q = W$

**Typischer Fehler:** Vorzeichen verwechselt oder $\Delta U$ mit $Q$ gleichgesetzt (gilt nur isochor).`,

    conceptQuestion: 'Ein ideales Gas wird isotherm komprimiert. Welche Beziehung gilt?',
    conceptOptions: [
      '$\\Delta U = 0$ und $Q = W$ (bei Kompression $W < 0$, also auch $Q < 0$: das Gas gibt Wärme ab)',
      '$\\Delta U = Q$, weil $W = 0$',
      '$Q = 0$',
      '$\\Delta U = W$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei idealem Gas hängt $U$ nur von $T$ ab; isotherm heißt $T = $ const, also $\\Delta U = 0$. Der 1. Hauptsatz reduziert sich zu $Q = W$. Bei Kompression wird am Gas Arbeit verrichtet ($W < 0$ in der System-Konvention), und das Gas muss genau so viel Wärme abgeben, damit $T$ konstant bleibt.',
    conceptHints: [
      'Bei idealem Gas: $U$ hängt nur von $T$ ab.',
      'Isotherm $\\Rightarrow \\Delta U = 0$.',
    ],
    conceptWrongAnswers: {
      1: '$W = 0$ gilt isochor (bei $V = $ const), nicht isotherm. Bei isothermer Kompression ändert sich $V$ sehr wohl, also $W \\neq 0$. Die Beziehung $\\Delta U = Q$ ist das Isochoren-Prinzip.',
      2: '$Q = 0$ wäre adiabat. Bei isothermer Kompression wird sogar Wärme abgegeben — das ist der definierende Unterschied zwischen isotherm und adiabat.',
      3: '$\\Delta U = W$ (ohne Minus) widerspricht dem 1. Hauptsatz $\\Delta U = Q - W$. Zudem ist $\\Delta U = 0$ isotherm, nicht gleich $W$.',
    },

    calcQuestion: 'Einem Gas wird $Q = 500$ J Wärme zugeführt, während es $W = 200$ J Arbeit leistet. Wie groß ist $\\Delta U$ in J?',
    calcAnswer: 300,
    calcTolerance: 1,
    calcUnit: 'J',
    calcExplanation: '1. Hauptsatz: $\\Delta U = Q - W = 500 - 200 = 300$ J. Die innere Energie steigt — das Gas wird wärmer (bei idealem Gas: $T$ steigt).',
    calcHints: [
      '$\\Delta U = Q - W$.',
      'Beide Größen in J, Vorzeichen beachten.',
    ],

    trueFalseStatement: 'Bei einem adiabaten Prozess ($Q = 0$) wird die am Gas verrichtete Arbeit vollständig in innere Energie umgewandelt.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Aus $\\Delta U = Q - W$ folgt mit $Q = 0$: $\\Delta U = -W$. Wird am Gas Arbeit verrichtet ($W < 0$ in System-Konvention), steigt $U$. Das erklärt die Erwärmung bei adiabater Kompression.',
    trueFalseHints: [
      '1. Hauptsatz: $\\Delta U = Q - W$.',
      'Bei $Q = 0$: $\\Delta U$ und $-W$ sind gleich.',
    ],

    matchingQuestion: 'Ordne jedem Prozesstyp die Spezialform des 1. Hauptsatzes zu.',
    matchingPairs: [
      { left: 'Isochor', right: '$\\Delta U = Q$ (kein Arbeitseintrag)' },
      { left: 'Isobar', right: '$\\Delta U = Q - p \\Delta V$' },
      { left: 'Isotherm (ideales Gas)', right: '$Q = W$ ($\\Delta U = 0$)' },
      { left: 'Adiabat', right: '$\\Delta U = -W$ ($Q = 0$)' },
    ],
    matchingExplanation: 'Die Spezialisierungen ergeben sich durch die jeweils konstante Größe. Merke: Isochor = keine Arbeit, Isotherm = keine $U$-Änderung, Adiabat = keine Wärme.',
    matchingHints: [
      'Isochor: $V = $ const $\\Rightarrow W = 0$.',
      'Adiabat: $Q = 0$ per Definition.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Anwendung des 1. Hauptsatzes.',
    sortingItems: [
      'Systemgrenze festlegen: Was ist Gas, was Umgebung?',
      'Vorzeichenkonvention festlegen ($Q>0$ rein, $W>0$ raus)',
      'Prozesstyp identifizieren für Spezialform',
      'Werte einsetzen: $\\Delta U = Q - W$',
      'Konsistenzcheck mit den Zustandsänderungen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systemgrenze und Vorzeichenkonvention kommen vor der Rechnung — sonst verwechselt man schnell Vorzeichen. Der 1. Hauptsatz ist universell; die Spezialform erleichtert nur das Einsetzen.',
    sortingHints: [
      'Ohne Systemgrenze keine klare Bilanz.',
      'Vorzeichenkonvention explizit festhalten.',
    ],

    errorQuestion: 'Ein Student rechnet: "Isochore Erwärmung: $W = p \\Delta V$, also $W > 0$." Was ist der Fehler?',
    errorOptions: [
      'Bei isochorer Zustandsänderung ist $\\Delta V = 0$, also $W = 0$',
      'Der Druck ist falsch',
      'Bei Isochoren gilt $\\Delta U = 0$',
      'Die Formel für $W$ existiert nicht',
    ],
    errorCorrect: 0,
    errorExplanation: 'Isochor bedeutet $V = $ const, also $\\Delta V = 0$. Damit verschwindet die Arbeit. Die gesamte zugeführte Wärme wird in innere Energie umgewandelt: $\\Delta U = Q$. Die Formel $W = p \\Delta V$ gilt nur isobar.',
    errorHints: [
      '"Iso-chor" = gleiches Volumen.',
      '$W = p \\Delta V$ ist isobar, nicht isochor.',
    ],
    errorWrongAnswers: {
      1: 'Nicht der Druck ist das Problem, sondern dass $\\Delta V = 0$ bei isochorer Erwärmung. Dadurch $W = p \\cdot 0 = 0$, unabhängig vom Druckwert.',
      2: 'Umgekehrt: bei Isochoren gilt $\\Delta U = Q$ (nicht $\\Delta U = 0$). Nur isotherm (ideales Gas) gilt $\\Delta U = 0$.',
      3: 'Die Formel $W = p \\Delta V$ existiert sehr wohl — sie gilt bei isobarer Zustandsänderung. Der Fehler ist nur die Anwendung im falschen Prozesstyp.',
    },

    transferQuestion: 'Ein Gas ($c_v = 717$ J/(kg·K), $m = 2$ kg) wird isochor von $T_1 = 300$ K auf $T_2 = 400$ K erwärmt. Wie viel Wärme $Q$ muss zugeführt werden in kJ?',
    transferAnswer: 143.4,
    transferTolerance: 0.5,
    transferUnit: 'kJ',
    transferExplanation: 'Isochor: $W = 0$, also $Q = \\Delta U = m c_v \\Delta T = 2 \\cdot 717 \\cdot 100 = 143400$ J $= 143{,}4$ kJ. Die gesamte Wärme erhöht die innere Energie.',
    transferHints: [
      'Isochor: $Q = \\Delta U$.',
      '$\\Delta U = m c_v \\Delta T$ für ideales Gas.',
      '$\\Delta T$ ist in Kelvin (= Celsius-Differenz).',
    ],
  },

  'thermo-2-2': {
    explanation: String.raw`**Vertiefung Carnot und 2. Hauptsatz:** Der Carnot-Wirkungsgrad ist die obere Grenze jeder Wärmekraftmaschine:

$$\eta_{C} = 1 - \frac{T_{kalt}}{T_{warm}}$$

mit absoluten Temperaturen in Kelvin. Kein realer Prozess erreicht $\eta_C$ — reale Wirkungsgrade sind kleiner.

**2. Hauptsatz (Clausius):** Wärme fließt von selbst nur von warm nach kalt.

**2. Hauptsatz (Kelvin-Planck):** Es gibt keine Maschine, die ausschließlich aus einem Wärmereservoir Arbeit gewinnt.

**Maschinen-Typen:**
- Wärmekraftmaschine: $\eta = W_{ab}/Q_{zu}$
- Wärmepumpe: COP$_{WP} = Q_{ab}/W_{zu}$ (typisch 3–5)
- Kältemaschine: COP$_{K} = Q_{zu}/W_{zu}$

**Typischer Fehler:** Celsius statt Kelvin — führt zu physikalisch unsinnigen (oft negativen) Wirkungsgraden.`,

    conceptQuestion: 'Eine Wärmekraftmaschine arbeitet zwischen $T_{warm} = 600$ K und $T_{kalt} = 300$ K. Welcher Wirkungsgrad ist theoretisch möglich?',
    conceptOptions: [
      '$\\eta_C = 1 - 300/600 = 0{,}5 = 50 \\%$',
      '$\\eta = 100 \\%$',
      '$\\eta = 200 \\%$',
      '$\\eta = 0 \\%$, da die Maschine immer verliert',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Carnot-Wirkungsgrad: $\\eta_C = 1 - T_{kalt}/T_{warm} = 1 - 0{,}5 = 50 \\%$. Das ist die obere Grenze. Reale Maschinen erreichen ca. 40–60 % dieses Wertes, also hier etwa 20–30 %.',
    conceptHints: [
      'Carnot-Formel mit Kelvin-Temperaturen.',
      'Der Kehrwert steht im Bruch.',
    ],
    conceptWrongAnswers: {
      1: '100 % Wirkungsgrad ist ein Verstoß gegen den 2. Hauptsatz — eine Maschine kann nie die gesamte Wärme in Arbeit umwandeln. Maximal möglich: $\\eta_C = 1 - T_{kalt}/T_{warm} = 50\\%$.',
      2: '200 % Wirkungsgrad würde Energie erzeugen — ein Perpetuum mobile. Verstößt gegen den 1. und 2. Hauptsatz. Wirkungsgrade sind stets $\\leq 1$.',
      3: 'Wirkungsgrad 0 % würde heißen: gar keine Arbeit aus Wärme. Die Carnot-Grenze liegt bei 50 % — ein realer Wert, der theoretisch erreichbar ist.',
    },

    calcQuestion: 'Kraftwerk: $T_{warm} = 800$ K, $T_{kalt} = 320$ K. Wie groß ist $\\eta_C$ in Prozent?',
    calcAnswer: 60,
    calcTolerance: 0.5,
    calcUnit: '%',
    calcExplanation: '$\\eta_C = 1 - 320/800 = 1 - 0{,}4 = 0{,}6 = 60 \\%$. Das ist typisch für moderne Dampfkraftwerke (theoretische Grenze).',
    calcHints: [
      'Kalt durch Warm, dann von 1 abziehen.',
      'Ergebnis mit 100 multiplizieren für Prozent.',
    ],

    trueFalseStatement: 'Der Wirkungsgrad einer realen Wärmekraftmaschine ist immer kleiner als der Carnot-Wirkungsgrad zwischen denselben Temperaturen.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der 2. Hauptsatz garantiert: kein realer Prozess erreicht $\\eta_C$, da Irreversibilitäten (Reibung, Wärmeleitung) immer Energie dissipieren. Carnot ist das obere Limit — nur reversible Prozesse erreichen es.',
    trueFalseHints: [
      'Carnot ist die theoretische Obergrenze.',
      'Irreversibilitäten senken den Wirkungsgrad.',
    ],

    matchingQuestion: 'Ordne die Maschinen-Kennwerte ihren Definitionen zu.',
    matchingPairs: [
      { left: 'Wirkungsgrad Wärmekraftmaschine', right: '$\\eta = W_{ab}/Q_{zu}$' },
      { left: 'Carnot-Wirkungsgrad', right: '$\\eta_C = 1 - T_{kalt}/T_{warm}$' },
      { left: 'COP Wärmepumpe', right: '$\\text{COP}_{WP} = Q_{ab}/W_{zu}$' },
      { left: 'COP Kältemaschine', right: '$\\text{COP}_{K} = Q_{zu}/W_{zu}$' },
    ],
    matchingExplanation: 'Wärmepumpen und Kältemaschinen haben COP $> 1$ — sie pumpen Wärme, statt sie zu erzeugen. Der Carnot-Wirkungsgrad ist die obere Grenze für $\\eta$ einer Wärmekraftmaschine.',
    matchingHints: [
      'COP > 1 ist kein Widerspruch zur Energieerhaltung.',
      'Wärmekraftmaschine: Wärme rein, Arbeit raus.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung des Carnot-Wirkungsgrades.',
    sortingItems: [
      'Warme und kalte Reservoirtemperaturen identifizieren',
      'Celsius in Kelvin umrechnen',
      'Verhältnis $T_{kalt}/T_{warm}$ bilden',
      '$\\eta_C = 1 - T_{kalt}/T_{warm}$',
      'In Prozent angeben',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Kelvin-Umrechnung zwingend — sonst werden Wirkungsgrade falsch oder gar negativ. In Prozent umzurechnen ist die übliche Darstellung.',
    sortingHints: [
      'Kelvin vor der Division.',
      '$1 - x$ nicht mit $x - 1$ verwechseln.',
    ],

    errorQuestion: 'Ein Student rechnet für Carnot: $\\eta_C = 1 - (200 \\text{ °C})/(500 \\text{ °C}) = 0{,}6 = 60 \\%$. Was ist der Fehler?',
    errorOptions: [
      'Celsius ist falsch — richtig mit Kelvin: $\\eta_C = 1 - 473{,}15/773{,}15 \\approx 38{,}8 \\%$',
      'Der Student hat $T_{warm}$ und $T_{kalt}$ vertauscht',
      'Das Ergebnis ist in Watt statt Prozent',
      'Der Carnot-Wirkungsgrad ist immer 100 %',
    ],
    errorCorrect: 0,
    errorExplanation: 'Absolute Temperaturen werden gefordert. Mit Kelvin: $T_{warm} = 773{,}15$ K, $T_{kalt} = 473{,}15$ K, $\\eta_C = 1 - 473{,}15/773{,}15 \\approx 0{,}388 = 38{,}8 \\%$. Mit Celsius entstehen physikalisch unsinnige Werte (bei $T_{kalt} = 0$ °C würde man $\\eta_C = 100 \\%$ erhalten — Unsinn).',
    errorHints: [
      'Carnot-Formel mit Kelvin-Temperaturen.',
      'Celsius hat willkürlichen Nullpunkt — führt zu Unsinn bei Quotienten.',
    ],
    errorWrongAnswers: {
      1: '$T_{warm}$ und $T_{kalt}$ sind korrekt zugeordnet (200 < 500). Der eigentliche Fehler ist Celsius statt Kelvin. Vertauschte Temperaturen würden einen negativen Wert liefern.',
      2: 'Wirkungsgrad ist dimensionslos (Prozent oder als Dezimalzahl). Watt ist eine Leistungseinheit und hat hier nichts zu suchen. Der echte Fehler ist Celsius statt Kelvin.',
      3: 'Der Carnot-Wirkungsgrad ist nie 100 % (außer bei $T_{kalt} = 0$ K, was unerreichbar ist). Das wäre Verstoß gegen den 2. Hauptsatz. Der Fehler ist die Verwendung von Celsius.',
    },

    transferQuestion: 'Wärmepumpe arbeitet zwischen $T_{kalt} = 0$ °C und $T_{warm} = 40$ °C. Wie groß ist der maximal mögliche COP?',
    transferAnswer: 7.83,
    transferTolerance: 0.05,
    transferUnit: '',
    transferExplanation: '$T_{kalt} = 273{,}15$ K, $T_{warm} = 313{,}15$ K. $\\text{COP}_{WP,max} = T_{warm}/(T_{warm} - T_{kalt}) = 313{,}15/40 \\approx 7{,}83$. Reale Wärmepumpen erreichen ca. 3–5 — Reibung und Wärmeübertragung reduzieren den Wert.',
    transferHints: [
      'Carnot-COP für Wärmepumpe: $\\text{COP} = T_{warm}/\\Delta T$.',
      'Kelvin umrechnen, dann dividieren.',
      'Die Differenz $T_{warm} - T_{kalt}$ ist in K identisch mit der °C-Differenz.',
    ],
  },

  'thermo-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Kreisprozesse:** Kreisprozesse (Otto, Diesel, Stirling, Carnot) kombinieren mehrere Zustandsänderungen zu einem geschlossenen Zyklus. Für jeden Teilprozess gelten eigene Formeln.

**Arbeits- und Wärmeverlauf:** In einem vollständigen Zyklus ist $\oint dU = 0$, also $\oint \delta Q = \oint \delta W$ — die gesamte zugeführte Wärme wird in Arbeit umgesetzt (minus abgeführte Wärme).

**Otto-Prozess (Benzinmotor):** Zwei Adiabaten (Kompression, Expansion) + zwei Isochoren (Wärmezufuhr, -abfuhr). Wirkungsgrad:

$$\eta_{Otto} = 1 - \frac{1}{\epsilon^{\kappa-1}}$$

mit Verdichtungsverhältnis $\epsilon = V_1/V_2$.

**Diesel-Prozess:** Wie Otto, aber Wärmezufuhr isobar.

**Prüfungsfallen:**
- Teilprozesse falsch identifiziert ⇒ falsche Formeln
- Kelvin-Umrechnung vergessen
- $\eta_{Carnot}$ mit realem Prozess verwechselt`,

    conceptQuestion: 'Welche Zustandsänderungen bilden den idealisierten Otto-Kreisprozess?',
    conceptOptions: [
      '2 Adiabaten + 2 Isochoren',
      '2 Isothermen + 2 Adiabaten (das wäre Carnot)',
      '2 Isobaren + 2 Isochoren',
      '4 Adiabaten',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Der Otto-Prozess: adiabat komprimieren → isochor Wärme zuführen (Zündung) → adiabat expandieren → isochor Wärme abführen. Kennzeichen: die Wärmezufuhr erfolgt bei konstantem Volumen.',
    conceptHints: [
      'Benzinmotor zündet bei nahezu konstantem Volumen (OT).',
      'Carnot ist $2 \\times$ isotherm $+ 2 \\times$ adiabat.',
    ],
    conceptWrongAnswers: {
      1: 'Das ist gerade die Carnot-Kennlinie — zwei Isothermen und zwei Adiabaten. Otto-Motoren verwenden stattdessen Isochoren (für Zündung/Auslass) kombiniert mit Adiabaten.',
      2: 'Zwei Isobaren wären typisch für einen Joule-Prozess (Gasturbine), nicht Otto. Otto hat zwei Adiabaten und zwei Isochoren.',
      3: 'Vier Adiabaten schließen keinen Kreisprozess — es braucht Zustandsänderungen mit Wärmeaustausch (für $Q_{zu}$ und $Q_{ab}$). Otto verwendet Isochoren dafür.',
    },

    calcQuestion: 'Otto-Prozess mit Verdichtung $\\epsilon = 10$ und $\\kappa = 1{,}4$. Wie groß ist der theoretische Wirkungsgrad $\\eta$ in Prozent?',
    calcAnswer: 60.2,
    calcTolerance: 0.5,
    calcUnit: '%',
    calcExplanation: '$\\eta = 1 - 1/\\epsilon^{\\kappa-1} = 1 - 1/10^{0{,}4} = 1 - 1/2{,}512 = 1 - 0{,}398 = 0{,}602 = 60{,}2 \\%$. Reale Ottomotoren erreichen ca. 25–35 % — deutlich weniger durch Reibung und Wärmeverluste.',
    calcHints: [
      'Otto-Formel: $\\eta = 1 - 1/\\epsilon^{\\kappa-1}$.',
      '$\\kappa - 1 = 0{,}4$ für Luft.',
      '$10^{0{,}4} \\approx 2{,}512$.',
    ],

    trueFalseStatement: 'In einem geschlossenen Kreisprozess ist die Summe aller inneren Energieänderungen null.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Das System kehrt zum Anfangszustand zurück, also $\\Delta U_{Zyklus} = 0$. Aus $\\oint dU = 0$ folgt $\\oint \\delta Q = \\oint \\delta W$ — die gesamte Netto-Wärme wird in Netto-Arbeit umgewandelt.',
    trueFalseHints: [
      '$U$ ist eine Zustandsgröße — hängt nur vom Zustand ab.',
      'Nach einem Zyklus ist der Zustand identisch zum Start.',
    ],

    matchingQuestion: 'Ordne die Kreisprozesse ihren charakteristischen Kennlinien zu.',
    matchingPairs: [
      { left: 'Carnot', right: '2 Isothermen + 2 Adiabaten' },
      { left: 'Otto', right: '2 Adiabaten + 2 Isochoren' },
      { left: 'Diesel', right: '2 Adiabaten + 1 Isobare + 1 Isochore' },
      { left: 'Stirling', right: '2 Isothermen + 2 Isochoren' },
    ],
    matchingExplanation: 'Carnot hat den höchsten theoretischen Wirkungsgrad zwischen zwei festen Temperaturen. Diesel und Stirling haben in der Realität oft höhere Wirkungsgrade als Otto, weil sie höhere Verdichtungen oder Regeneration nutzen.',
    matchingHints: [
      'Benzinmotor ≈ Otto, Dieselmotor ≈ Diesel.',
      'Carnot ist rein theoretisch, nie als realer Motor gebaut.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung des Otto-Wirkungsgrades.',
    sortingItems: [
      'Verdichtungsverhältnis $\\epsilon$ aus Geometrie ermitteln',
      'Adiabatenexponent $\\kappa$ der Arbeitsmischung (Luft: 1,4)',
      '$\\eta = 1 - 1/\\epsilon^{\\kappa-1}$ berechnen',
      'In Prozent umrechnen',
      'Vergleich mit Carnot-Wirkungsgrad zwischen den Extremtemperaturen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Für den Otto-Wirkungsgrad reichen zwei Größen: $\\epsilon$ und $\\kappa$. Der Vergleich mit Carnot zeigt, wie nah der Prozess dem theoretischen Optimum kommt.',
    sortingHints: [
      '$\\epsilon$ ist eine dimensionslose Geometriegröße.',
      '$\\kappa$ hängt vom Gas ab.',
    ],

    errorQuestion: 'Ein Student berechnet Carnot-Wirkungsgrad für einen Ottomotor ($T_{min} = 300$ K, $T_{max} = 2000$ K) als $\\eta_C = 0{,}85$. Für den realen Otto-Prozess mit $\\epsilon = 8$ und $\\kappa = 1{,}4$ erhält er $\\eta = 0{,}565$. Welche Aussage ist richtig?',
    errorOptions: [
      'Otto-Wirkungsgrad < Carnot — das ist korrekt, da Carnot die obere Grenze ist',
      'Die Zahlenwerte sind vertauscht: Otto müsste > Carnot sein',
      'Carnot gilt nur für Wärmepumpen',
      'Der Otto-Wirkungsgrad kann 100 % erreichen',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Carnot-Wirkungsgrad ist die thermodynamische Obergrenze jeder Maschine zwischen den Temperaturextremen. Kein realer oder idealisierter Kreisprozess kann diesen Wert überschreiten. Otto hat $\\eta < \\eta_C$, weil die Wärmezufuhr nicht isotherm (sondern isochor) erfolgt.',
    errorHints: [
      'Carnot ist die Obergrenze.',
      'Otto-Wirkungsgrad ist immer kleiner als Carnot zwischen denselben Extrema.',
    ],
    errorWrongAnswers: {
      1: 'Das Verhältnis ist nicht vertauschbar: Otto < Carnot ist thermodynamisch zwingend. Bei Otto > Carnot wäre der 2. Hauptsatz verletzt.',
      2: 'Carnot gilt für alle Wärmekraftmaschinen (und als inverse Form auch für Wärmepumpen/Kältemaschinen). Nicht auf eine Maschinenart beschränkt.',
      3: '100 % Wirkungsgrad verletzt den 2. Hauptsatz — gilt für keinen realen Prozess, einschließlich Otto. Otto bleibt stets unter $\\eta_C$.',
    },

    transferQuestion: 'Ein Dieselmotor hat Verdichtung $\\epsilon = 16$ und Einspritzverhältnis $\\varphi = 2$. Mit $\\kappa = 1{,}4$ ergibt die Formel $\\eta_{Diesel} = 1 - \\frac{1}{\\epsilon^{\\kappa-1}} \\cdot \\frac{\\varphi^\\kappa - 1}{\\kappa(\\varphi - 1)}$. Berechne $\\eta$ in Prozent.',
    transferAnswer: 61.4,
    transferTolerance: 0.8,
    transferUnit: '%',
    transferExplanation: '$\\epsilon^{\\kappa-1} = 16^{0{,}4} \\approx 3{,}031$. $\\varphi^\\kappa - 1 = 2^{1{,}4} - 1 \\approx 2{,}639 - 1 = 1{,}639$. $\\kappa(\\varphi - 1) = 1{,}4 \\cdot 1 = 1{,}4$. Zweiter Faktor: $1{,}639/1{,}4 \\approx 1{,}171$. Gesamt: $\\eta = 1 - (1/3{,}031) \\cdot 1{,}171 = 1 - 0{,}386 = 0{,}614 = 61{,}4 \\%$.',
    transferHints: [
      'Die Formel hat zwei Faktoren — einzeln berechnen.',
      'Mit $\\kappa = 1{,}4$, $\\epsilon = 16$ und $\\varphi = 2$ einsetzen.',
      '$16^{0{,}4}$ via $(4^2)^{0{,}4} = 4^{0{,}8}$ oder Taschenrechner.',
    ],
  },
}

export const thermodynamikSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
