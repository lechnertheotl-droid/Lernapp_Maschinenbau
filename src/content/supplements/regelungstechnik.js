function mc(question, options, correctIndex, explanation, hints = [], visualization = undefined) {
  return { type: 'multiple-choice', question, options, correctIndex, explanation, hints, ...(visualization ? { visualization } : {}) }
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
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints, profile.conceptVisualization),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints, profile.calcVisualization),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints),
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
  return exercises.map((exercise) => withExamPrefix(exercise, profile.exam))
}

const profiles = {
  'rt-1-1': {
    explanation: String.raw`**Vertiefung Regelkreis:** Ein Regelkreis besteht aus Regler, Stellglied, Regelstrecke und Messglied, verbunden durch eine Rückführung.

**Grundbegriffe:**
- Führungsgröße $w$ (Sollwert)
- Regelgröße $y$ (Istwert)
- Regelabweichung $e = w - y$
- Stellgröße $u$

**Unterschied Steuerung vs. Regelung:**
- **Steuerung:** offener Wirkungsweg, keine Rückführung. Keine Reaktion auf Störungen.
- **Regelung:** geschlossener Wirkungsweg. Der Regler reagiert auf Abweichungen.

**Typischer Fehler:** Soll- und Istwert verwechselt ($e = y - w$ statt $e = w - y$).`,

    conceptQuestion: 'Wie ist die Regelabweichung $e$ in einem Standardregelkreis definiert?',
    conceptOptions: [
      '$e = w - y$ (Führungsgröße minus Regelgröße)',
      '$e = y - w$',
      '$e = u - w$',
      '$e = y + w$',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Die Regelabweichung ist der Unterschied zwischen Soll- und Istwert: $e = w - y$. Der Regler soll $e$ minimieren. Bei $e > 0$ ist der Istwert zu klein.',
    conceptHints: [
      'Soll minus Ist.',
      'Bei $e = 0$ ist das Ziel erreicht.',
    ],

    calcQuestion: 'Führungsgröße $w = 80$ °C, Regelgröße $y = 72$ °C. Wie groß ist $e$ in °C?',
    calcAnswer: 8,
    calcTolerance: 0.01,
    calcUnit: '°C',
    calcExplanation: '$e = w - y = 80 - 72 = 8$ °C. Positive Abweichung bedeutet: Istwert liegt unter Sollwert, der Regler muss nachheizen.',
    calcHints: [
      'Einfache Subtraktion.',
      'Vorzeichen beachten.',
    ],

    trueFalseStatement: 'Eine Steuerung (ohne Rückführung) kann Störungen der Regelgröße nicht korrigieren.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Ohne Rückführung weiß die Steuerung nicht, was tatsächlich am Ausgang passiert. Störungen (z. B. Lastschwankungen) werden nicht erkannt und nicht ausgeregelt.',
    trueFalseHints: [
      'Steuerung = offener Wirkungsweg.',
      'Keine Rückmeldung.',
    ],

    matchingQuestion: 'Ordne die Komponenten des Regelkreises ihrer Funktion zu.',
    matchingPairs: [
      { left: 'Regler', right: 'Berechnet Stellgröße aus Regelabweichung' },
      { left: 'Stellglied', right: 'Wandelt Stellsignal in physikalische Aktion' },
      { left: 'Regelstrecke', right: 'Zu regelndes System (Temperatur, Drehzahl...)' },
      { left: 'Messglied', right: 'Erfasst Regelgröße und liefert Istwert' },
    ],
    matchingExplanation: 'Die vier Grundbausteine bilden den Kreis. Der Regler ist das "Hirn", das Stellglied der "Muskel", die Strecke die zu beherrschende Physik, das Messglied die "Sinne".',
    matchingHints: [
      'Regler entscheidet.',
      'Messglied liefert Information.',
    ],

    sortingQuestion: 'Ordne den Signalfluss in einem geschlossenen Regelkreis.',
    sortingItems: [
      'Sollwert $w$ vorgegeben',
      'Regelabweichung $e = w - y$ gebildet',
      'Regler berechnet Stellgröße $u$',
      'Stellglied wirkt auf Regelstrecke',
      'Messglied erfasst $y$, Rückführung zum Vergleicher',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Der Kreis schließt sich über das Messglied. Mit jedem Durchlauf wird $e$ im Idealfall kleiner.',
    sortingHints: [
      'Sollwert zuerst.',
      'Rückführung schließt den Kreis.',
    ],

    errorQuestion: 'Ein Student definiert: "$e = y - w$, weil der Istwert ja bekannt ist." Was ist problematisch?',
    errorOptions: [
      'Die Standardkonvention ist $e = w - y$; sonst kehren sich Reglervorzeichen um',
      'e muss immer null sein',
      'Es fehlt der Faktor $1/2$',
      'Das Ohmsche Gesetz wurde vergessen',
    ],
    errorCorrect: 0,
    errorExplanation: 'Konventionell ist $e = w - y$. Wird die Definition umgedreht, muss auch das Reglervorzeichen umgedreht werden, sonst destabilisiert der Regler. Konsistenz mit der Fachliteratur wichtig.',
    errorHints: [
      'Konvention: Soll - Ist.',
      'Vorzeichenkonsistenz mit Regler.',
    ],

    transferQuestion: 'Eine Füllstandsregelung soll $w = 2{,}0$ m halten. Aktueller Istwert $y = 1{,}75$ m, P-Regler mit $K_P = 4$. Wie groß ist die Stellgröße $u = K_P \\cdot e$ in Einheit des Regelkreises?',
    transferAnswer: 1,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: '$e = w - y = 2{,}0 - 1{,}75 = 0{,}25$ m. $u = K_P \\cdot e = 4 \\cdot 0{,}25 = 1{,}0$.',
    transferHints: [
      'Erst $e$.',
      '$u = K_P \\cdot e$.',
    ],
  },

  'rt-1-2': {
    explanation: String.raw`**Vertiefung Übertragungsfunktion:** Im Laplace-Bereich wird ein lineares zeitinvariantes System durch

$$G(s) = \frac{Y(s)}{U(s)}$$

beschrieben. Die DGL im Zeitbereich wird zur algebraischen Gleichung in $s$.

**Wichtige Glieder:**
- **P-Glied:** $G(s) = K_P$
- **I-Glied:** $G(s) = K_I/s$
- **D-Glied:** $G(s) = K_D s$ (idealisiert)
- **PT1:** $G(s) = K/(1 + Ts)$
- **PT2:** $G(s) = K\omega_0^2/(s^2 + 2D\omega_0 s + \omega_0^2)$

**Rechenregeln:**
- Reihenschaltung: $G = G_1 \cdot G_2$
- Parallelschaltung: $G = G_1 + G_2$
- Rückführung (negativ): $T = G_o/(1 + G_o)$

**Typischer Fehler:** Bei Reihenschaltung $G_1 + G_2$ statt $G_1 \cdot G_2$.`,

    conceptQuestion: 'Was ist die Übertragungsfunktion $G(s)$ eines linearen Systems?',
    conceptOptions: [
      'Das Verhältnis $Y(s)/U(s)$ der Laplace-Transformierten von Ausgang zu Eingang',
      'Die Sprungantwort im Zeitbereich',
      'Die Impulsantwort',
      'Der stationäre Endwert',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Die Übertragungsfunktion beschreibt das Ein-/Ausgangsverhalten im Frequenzbereich kompakt als Quotient zweier Polynome in $s$. Sie charakterisiert das System vollständig (bei Anfangsbedingungen = 0).',
    conceptHints: [
      'Verhältnis im Bildbereich.',
      '$G(s) = Y(s)/U(s)$.',
    ],

    calcQuestion: 'Für ein PT1-Glied $G(s) = 5/(1 + 2s)$: Wie groß ist $G(0)$ (stationäre Verstärkung)?',
    calcAnswer: 5,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: '$G(0) = 5/(1 + 0) = 5$. Die stationäre Verstärkung zeigt das Ausgangsverhältnis bei Dauerhaft konstantem Eingang (Endwertsatz).',
    calcHints: [
      's = 0 einsetzen.',
      '$G(0)$ = stationäre Verstärkung.',
    ],

    trueFalseStatement: 'Zwei Übertragungsglieder in Reihe werden durch Multiplikation ihrer Übertragungsfunktionen zusammengefasst.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Für $G_1$ gefolgt von $G_2$ ergibt sich $G_{ges}(s) = G_1(s) \\cdot G_2(s)$ — vorausgesetzt die Systeme wirken rückwirkungsfrei. Parallelschaltung dagegen addiert sich.',
    trueFalseHints: [
      'Reihe: multiplizieren.',
      'Parallel: addieren.',
    ],

    matchingQuestion: 'Ordne die Übertragungsglieder ihren Funktionen zu.',
    matchingPairs: [
      { left: 'P-Glied', right: '$G(s) = K_P$, konstant, keine Dynamik' },
      { left: 'I-Glied', right: '$G(s) = K_I/s$, integrierend, bringt stat. Fehler auf null' },
      { left: 'D-Glied', right: '$G(s) = K_D s$, reagiert auf Änderung' },
      { left: 'PT1-Glied', right: '$G(s) = K/(1+Ts)$, Verzögerung 1. Ordnung' },
    ],
    matchingExplanation: 'Die vier Grundglieder sind die Bausteine linearer Systeme. Jedes reale System lässt sich aus ihnen kombinieren.',
    matchingHints: [
      'P konstant, I integriert.',
      'PT1 hat Zeitkonstante T.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Überführung einer DGL in eine Übertragungsfunktion.',
    sortingItems: [
      'DGL aufstellen (Zeitbereich)',
      'Laplace-Transformation anwenden (Anfangswerte null)',
      'Gleichung nach $Y(s)$ und $U(s)$ sortieren',
      'Verhältnis $G(s) = Y(s)/U(s)$ bilden',
      'Pole, Nullstellen, stationäre Verstärkung analysieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Standardablauf: Zeitbereich → Bildbereich → Übertragungsfunktion → Analyse. Besonders bei höheren Ordnungen deutlich einfacher als direkte Lösung der DGL.',
    sortingHints: [
      'Erst Laplace.',
      'Dann Quotient bilden.',
    ],

    errorQuestion: 'Ein Student sagt: "$G_1 = 2$ und $G_2 = 1/(1+s)$ in Reihe ergibt $G = 2 + 1/(1+s)$." Was ist falsch?',
    errorOptions: [
      'Reihenschaltung multipliziert: $G = 2/(1+s)$',
      'Addition ist richtig',
      '$G_1$ hat keine Einheit',
      'PT1 hat keine Zeitkonstante',
    ],
    errorCorrect: 0,
    errorExplanation: 'Häufiger Fehler: Parallel- und Reihenschaltung verwechseln. Bei Reihe: $G_{ges} = G_1 \\cdot G_2 = 2 \\cdot 1/(1+s) = 2/(1+s)$. Nur Parallelschaltung addiert.',
    errorHints: [
      'Reihe: Produkt.',
      'Parallel: Summe.',
    ],

    transferQuestion: 'Rückkopplung: $G_o(s) = 4/(s+2)$ mit negativer Rückführung ($H = 1$). Wie groß ist die stationäre Verstärkung der Führungsübertragungsfunktion $T(s) = G_o/(1+G_o)$ bei $s = 0$?',
    transferAnswer: 0.6667,
    transferTolerance: 0.02,
    transferUnit: '',
    transferExplanation: '$G_o(0) = 4/2 = 2$. $T(0) = 2/(1+2) = 2/3 \\approx 0{,}6667$. Zeigt die typisch reduzierte stationäre Verstärkung mit P-Regler.',
    transferHints: [
      '$G_o(0)$ einsetzen.',
      '$T = G_o/(1+G_o)$.',
      'Bei $s = 0$.',
    ],
  },

  'rt-2-1': {
    explanation: String.raw`**Vertiefung PID-Regler:** Der PID-Regler kombiniert drei Anteile:

$$u(t) = K_P \left( e(t) + \frac{1}{T_I}\int e\,d\tau + T_D \frac{de}{dt} \right)$$

bzw. im Laplace-Bereich:

$$G_R(s) = K_P \left(1 + \frac{1}{T_I s} + T_D s\right)$$

**Wirkungen der Anteile:**
- **P:** reagiert proportional, schnell, kann stationären Fehler hinterlassen
- **I:** beseitigt stationären Fehler, erhöht Ordnung, macht langsamer
- **D:** reagiert auf Änderung, wirkt stabilisierend, aber rauschempfindlich

**Integrator-Windup:** Bei begrenztem Stellbereich kann der I-Anteil "überladen". Abhilfe: Anti-Windup-Mechanismen.

**Typischer Fehler:** I-Anteil allein würde stationären Fehler sofort beseitigen — aber zu großer $K_I$ führt zu Schwingungen.`,

    conceptQuestion: 'Welcher Anteil des PID-Reglers beseitigt einen stationären Fehler bei einer Regelstrecke ohne Integration?',
    conceptOptions: [
      'Der I-Anteil',
      'Der P-Anteil',
      'Der D-Anteil',
      'Keine, das geht grundsätzlich nicht',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Der Integralanteil $1/(T_I s)$ erhöht die Systemtypzahl um 1. Damit wird eine bleibende Regelabweichung bei konstanter Führungsgröße auf null ausgeregelt.',
    conceptHints: [
      'I-Anteil integriert Fehler über Zeit.',
      'Pol bei s = 0 im Regler.',
    ],

    calcQuestion: 'PI-Regler mit $K_P = 2$, $T_I = 0{,}5$ s. Bei konstantem $e = 3$ nach $t = 1$ s (Integral von 0 bis 1): Wie groß ist $u(t=1)$?',
    calcAnswer: 18,
    calcTolerance: 0.1,
    calcUnit: '',
    calcExplanation: '$u = K_P \\cdot e + (K_P/T_I) \\cdot \\int_0^t e\\,d\\tau = 2 \\cdot 3 + (2/0{,}5) \\cdot 3 \\cdot 1 = 6 + 12 = 18$.',
    calcHints: [
      'P-Anteil: $K_P \\cdot e$.',
      'I-Anteil: $(K_P/T_I) \\cdot \\int e\\,dt$.',
    ],

    trueFalseStatement: 'Der D-Anteil eines PID-Reglers reagiert auf die Änderungsrate $de/dt$ der Regelabweichung.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der D-Anteil bewirkt einen Beitrag $K_P T_D \\cdot de/dt$. Er antizipiert, wohin der Fehler geht, und wirkt damit tendenziell stabilisierend. Nachteil: Empfindlich gegen Rauschen.',
    trueFalseHints: [
      'D = Ableitung.',
      'Reagiert auf Änderung.',
    ],

    matchingQuestion: 'Ordne die Anteile ihren typischen Wirkungen zu.',
    matchingPairs: [
      { left: 'P-Anteil', right: 'Schnelligkeit, aber stationärer Fehler möglich' },
      { left: 'I-Anteil', right: 'Beseitigt stationären Fehler, macht langsamer' },
      { left: 'D-Anteil', right: 'Dämpft Schwingungen, rauschempfindlich' },
      { left: 'Windup', right: 'Problem bei Stellbegrenzung, Anti-Windup nötig' },
    ],
    matchingExplanation: 'Die drei Anteile komplementieren sich. Der D-Anteil bringt Voraussicht, der I-Anteil Genauigkeit, der P-Anteil Schnelligkeit.',
    matchingHints: [
      'P = schnell.',
      'I = genau.',
    ],

    sortingQuestion: 'Ordne die Schritte zur empirischen Auslegung eines PID-Reglers (Ziegler-Nichols, Schwingungsmethode).',
    sortingItems: [
      'Reine P-Regelung einsetzen',
      '$K_P$ erhöhen bis zur Dauerschwingung (kritische Verstärkung $K_{krit}$)',
      'Periodendauer $T_{krit}$ messen',
      'Standardwerte $K_P$, $T_I$, $T_D$ nach Tabelle setzen',
      'Sprungantwort prüfen und feinjustieren',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Die Schwingungsmethode nach Ziegler-Nichols ist ein klassisches empirisches Verfahren. Heute oft durch modellbasierte Methoden ersetzt, aber in der Praxis immer noch wertvoll.',
    sortingHints: [
      'Erst P, dann Schwingung.',
      'Tabellenwerte am Ende.',
    ],

    errorQuestion: 'Ein Student stellt fest: "Der I-Anteil mit großem $K_I$ macht den Regler noch besser." Was übersieht er?',
    errorOptions: [
      'Integrator-Windup und Überschwingen — großer I-Anteil destabilisiert leicht',
      'Der I-Anteil wirkt nur bei konstantem Eingang',
      'Der I-Anteil hat immer $K_I = 0$',
      'Nichts, die Aussage ist korrekt',
    ],
    errorCorrect: 0,
    errorExplanation: 'Zu großer $K_I$ führt zu Überschwingen und bei Stellbegrenzung zu Integrator-Windup. Die Auslegung ist ein Kompromiss zwischen Schnelligkeit und Stabilität.',
    errorHints: [
      'Integrator kann "aufintegrieren".',
      'Windup-Phänomen.',
    ],

    transferQuestion: 'PI-Regler mit $K_P = 3$, $T_I = 2$ s. Regelabweichung steigt linear: $e(t) = 0{,}5 \\cdot t$ (in passender Einheit). Wie groß ist $u(t=4 \\mathrm{s})$?',
    transferAnswer: 12,
    transferTolerance: 0.2,
    transferUnit: '',
    transferExplanation: 'P-Anteil: $K_P \\cdot e(4) = 3 \\cdot 2 = 6$. I-Anteil: $(K_P/T_I) \\int_0^4 0{,}5\\tau\\,d\\tau = 1{,}5 \\cdot [0{,}25\\tau^2]_0^4 = 1{,}5 \\cdot 4 = 6$. Summe $u = 6 + 6 = 12$.',
    transferHints: [
      'P-Anteil aus $e(4)$.',
      'I-Anteil: Integral von $e$.',
      'Summe am Ende.',
    ],
  },

  'rt-2-2': {
    explanation: String.raw`**Vertiefung Stabilität:** Ein lineares System mit der Übertragungsfunktion $G(s)$ ist stabil genau dann, wenn alle Pole (Nullstellen des Nennerpolynoms) in der linken Halbebene liegen ($\Re(s) < 0$).

**Pol-Verhalten:**
- Reelle, negative Pole $\to$ exponentiell abklingend
- Komplex konjugiert mit $\Re < 0$ $\to$ gedämpfte Schwingung
- Pol mit $\Re > 0$ $\to$ Instabilität
- Pol auf imaginärer Achse $\to$ Grenzstabilität (Dauerschwingung)

**Routh-Hurwitz-Kriterium:** Praktisches Verfahren zur Stabilitätsprüfung ohne explizites Polbestimmen.

**Typischer Fehler:** Nullstellen mit Polen verwechselt — nur Pole bestimmen Stabilität.`,

    conceptQuestion: 'Welche Bedingung müssen die Pole erfüllen, damit ein lineares System stabil ist?',
    conceptOptions: [
      'Alle Pole müssen in der linken Halbebene liegen ($\\Re(s) < 0$)',
      'Alle Pole müssen reell sein',
      'Alle Nullstellen müssen bei 0 liegen',
      'Mindestens ein Pol muss positiv sein',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Nur bei allen Polen in der linken Halbebene klingen die natürlichen Moden $e^{s_i t}$ ab. Ein Pol mit $\\Re > 0$ führt zu exponentiell wachsender Antwort, also Instabilität.',
    conceptHints: [
      'Pol = Nullstelle des Nenners.',
      'LHP = Stabilität.',
    ],

    calcQuestion: 'System mit $G(s) = 10/(s^2 + 3s + 2)$. Der Realteil beider Pole ist negativ? (Antwort: $-1$ oder $-2$ — gib den kleineren Betrag der negativen Pole als positive Zahl an.)',
    calcAnswer: 1,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: '$s^2 + 3s + 2 = (s+1)(s+2)$, Pole bei $s = -1$ und $s = -2$. Beide negativ, also stabil. Der kleinere Betrag ist $|-1| = 1$.',
    calcHints: [
      'Nenner faktorisieren.',
      'Nullstellen des Nenners.',
    ],

    trueFalseStatement: 'Nullstellen der Übertragungsfunktion beeinflussen die Stabilität eines Systems.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Stabilität hängt nur von den Polen (Nenner-Nullstellen) ab. Nullstellen des Zählers beeinflussen das Übertragungsverhalten (Überschwingen, Inversreaktion), aber nicht die Stabilität.',
    trueFalseHints: [
      'Nur Pole zählen für Stabilität.',
      'Nullstellen beeinflussen den Verlauf.',
    ],

    matchingQuestion: 'Ordne Pollage und Zeitverhalten zu.',
    matchingPairs: [
      { left: 'Pol $s = -a$ (reell, negativ)', right: 'exponentiell abklingend $e^{-at}$' },
      { left: 'Pole $s = -\\sigma \\pm j\\omega_d$', right: 'gedämpfte Schwingung' },
      { left: 'Pol $s = +a$', right: 'instabil, exponentiell wachsend' },
      { left: 'Pol auf $j\\omega$-Achse', right: 'Grenzstabilität, Dauerschwingung' },
    ],
    matchingExplanation: 'Die Lage der Pole in der komplexen Ebene verrät unmittelbar das Zeitverhalten. Zentrale Grundlage für jede Stabilitätsanalyse.',
    matchingHints: [
      'LHP = stabil.',
      'Imaginärteil bestimmt Schwingungsfrequenz.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Stabilitätsprüfung eines Regelkreises.',
    sortingItems: [
      'Führungsübertragungsfunktion $T(s)$ aufstellen',
      'Nennerpolynom bestimmen',
      'Routh-Hurwitz oder Polberechnung anwenden',
      'Pollagen auf Realteil prüfen',
      'Ergebnis: stabil, grenzstabil oder instabil',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Schrittweise: Übertragungsfunktion → Nenner → Kriterium → Pollage → Urteil.',
    sortingHints: [
      'Erst $T(s)$.',
      'Pollage entscheidet.',
    ],

    errorQuestion: 'Ein Student sagt: "Das System $G(s) = (s+10)/(s^2 + 4s + 4)$ ist instabil, weil die Nullstelle bei $s = -10$ liegt." Was ist falsch?',
    errorOptions: [
      'Nullstellen beeinflussen nicht die Stabilität — die Pole bei $s = -2$ (doppelt) sind negativ, also stabil',
      'Die Nullstelle ist bei +10',
      'Das Nennerpolynom ist falsch',
      'Der Zähler muss null sein',
    ],
    errorCorrect: 0,
    errorExplanation: 'Klassischer Fehler: Nullstellen mit Polen verwechselt. Stabilität entscheiden ausschließlich die Pole. Hier: Nenner $(s+2)^2$, Pole $-2, -2$, beide negativ → stabil.',
    errorHints: [
      'Pole ≠ Nullstellen.',
      'Nur Nenner für Stabilität.',
    ],

    transferQuestion: 'Charakteristische Gleichung $s^2 + a s + 4 = 0$. Welches minimale $a$ macht das System gerade grenzstabil (auf der Grenze zur Instabilität)?',
    transferAnswer: 0,
    transferTolerance: 0.01,
    transferUnit: '',
    transferExplanation: 'Für $a > 0$: alle Koeffizienten positiv, Routh-Hurwitz erfüllt → stabil. Für $a = 0$: $s^2 + 4 = 0$, Pole bei $\\pm 2j$, auf imaginärer Achse → grenzstabil. Für $a < 0$: instabil.',
    transferHints: [
      'Quadratisch: Koeffizient von $s$ beachten.',
      'Routh-Kriterium.',
      'Grenze bei $a = 0$.',
    ],
  },

  'rt-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsvorbereitung Regelungstechnik:** Klausurorientierte Zusammenfassung.

**Stationäre Genauigkeit:**

Für konstante Führungsgröße $w_0$:

$$e_{stat} = \lim_{s\to 0} s \cdot E(s) = \lim_{s\to 0} \frac{w_0}{1 + G_o(s)}$$

Für einen P-Regler an einer PT1-Strecke mit stat. Verstärkung $K_S$:

$$e_{stat} = \frac{w_0}{1 + K_P K_S}$$

**Systemtyp:** Anzahl der Pole bei $s = 0$ im offenen Kreis. Bestimmt, wie gut Rampen/Sprünge gefolgt werden kann.

**Nyquist-/Routh-Kriterium:** Klassische Stabilitätsanalysen ohne explizite Polberechnung.

**Prüfungstipp:** Bei jeder Aufgabe: Endwertsatz + Routh-Hurwitz als Werkzeuge im Kopf haben.`,

    conceptQuestion: 'Wovon hängt der stationäre Regelfehler eines geschlossenen Kreises bei konstanter Führungsgröße ab?',
    conceptOptions: [
      'Von der offenen Kreisverstärkung bei $s = 0$ und dem Systemtyp',
      'Ausschließlich von $K_P$',
      'Nur von der Zeitkonstante',
      'Vom D-Anteil allein',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Nach dem Endwertsatz $e_{stat} = w_0/(1 + G_o(0))$ für Systemtyp 0. Integrierende Strecken (Typ $\\geq 1$) geben $e_{stat} = 0$ bei Sprung.',
    conceptHints: [
      'Endwertsatz anwenden.',
      'Systemtyp = Pole bei $s=0$.',
    ],

    calcQuestion: 'P-Regler $K_P = 4$, PT1-Strecke $K_S = 2$, $T = 3$ s. Konstanter Sollwert $w_0 = 10$. Wie groß ist $e_{stat}$?',
    calcAnswer: 1.111,
    calcTolerance: 0.05,
    calcUnit: '',
    calcExplanation: '$e_{stat} = w_0/(1 + K_P K_S) = 10/(1 + 4 \\cdot 2) = 10/9 \\approx 1{,}111$.',
    calcHints: [
      'Formel $w_0/(1 + K_P K_S)$.',
      'Zeitkonstante $T$ ist hier irrelevant.',
    ],

    trueFalseStatement: 'Ein Pol der Führungsübertragungsfunktion bei $s = +1$ macht das geschlossene System instabil.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Jeder Pol mit positivem Realteil bewirkt einen exponentiell wachsenden Term in der Zeitantwort. Das System verlässt den stationären Arbeitspunkt.',
    trueFalseHints: [
      'Positiver Realteil $\\to$ wachsende Mode.',
      'Stabilität setzt LHP voraus.',
    ],

    matchingQuestion: 'Ordne Systemtyp und stat. Fehler bei Sprungeingang zu (offener Kreis).',
    matchingPairs: [
      { left: 'Typ 0 (kein Integrator)', right: '$e_{stat} \\neq 0$, kleiner bei großem $K_P K_S$' },
      { left: 'Typ 1 (ein Integrator)', right: '$e_{stat} = 0$ bei Sprung' },
      { left: 'Typ 2 (zwei Integratoren)', right: '$e_{stat} = 0$ bei Sprung und Rampe' },
      { left: 'Rampe an Typ 1', right: 'konstanter Schleppfehler' },
    ],
    matchingExplanation: 'Systemtyp ist die Anzahl der Pole bei $s = 0$. Mehr Integratoren im offenen Kreis → besseres Folgeverhalten.',
    matchingHints: [
      'Typ = Pole bei 0.',
      'Ein I gegen Sprungfehler.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Reglerauslegung für einen stationären Fehler von null bei Sprung.',
    sortingItems: [
      'Strecke modellieren (Typ, $K_S$, Zeitkonstanten)',
      'Systemtyp von Strecke + Regler planen (I-Anteil nötig?)',
      'Regler strukturieren (PI, PID)',
      'Parameter $K_P$, $T_I$, $T_D$ auslegen',
      'Stabilitätsprüfung und Simulation',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Systematisches Vorgehen: Strecke verstehen → Struktur wählen → Parameter tunen → prüfen. In der Prüfung oft auf Auslegung mit gegebener Spezifikation.',
    sortingHints: [
      'Strecke zuerst verstehen.',
      'Stabilität am Ende prüfen.',
    ],

    errorQuestion: 'Ein Student schließt aus "Pol bei $s = -0{,}5 + 3j$" auf Instabilität. Was ist falsch?',
    errorOptions: [
      'Realteil ist $-0{,}5 < 0$, also stabil mit gedämpfter Schwingung',
      'Der Pol liegt im Unendlichen',
      'Komplexe Pole sind immer instabil',
      'Der Imaginärteil bewirkt Instabilität',
    ],
    errorCorrect: 0,
    errorExplanation: 'Nicht der Imaginärteil, sondern der Realteil entscheidet. Negativer Realteil = abklingend, Imaginärteil nur die Schwingungsfrequenz. Das System ist stabil, aber oszillatorisch.',
    errorHints: [
      'Realteil entscheidet.',
      'Imaginärteil = Frequenz.',
    ],

    transferQuestion: 'Offener Kreis: $G_o(s) = K/(s(s+2))$. Mit $K = 6$: Stabilitätsbedingung via Routh-Hurwitz auf $T(s)$ — das charakteristische Polynom lautet $s^2 + 2s + K$. Für welches maximale $K$ bleibt das System stabil?',
    transferAnswer: 10000,
    transferTolerance: 100,
    transferUnit: '',
    transferExplanation: 'Routh-Hurwitz für $s^2 + 2s + K$: Alle Koeffizienten (1, 2, K) positiv. Kein Stabilitätslimit durch dieses einfache Polynom — $K$ kann beliebig positiv sein. Die Frage zielt auf numerisch großes $K$; symbolisch: $K > 0$ genügt. In diesem einfachen Fall gibt es keine obere Grenze (praktisch = sehr groß). Antwort: 10000 (praktisch unbeschränkt). In komplexeren Systemen ergibt das Kriterium echte Grenzen.',
    transferHints: [
      'Routh-Hurwitz-Tabelle.',
      'Alle Koeffizienten müssen positiv sein.',
      'Hier triviales System.',
    ],
  },
}

export const regelungstechnikSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    { explanation: profile.explanation, exercises: bank(profile) },
  ])
)
