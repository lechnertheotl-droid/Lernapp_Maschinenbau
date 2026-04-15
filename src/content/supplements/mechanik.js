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
  'mech-1-1': {
    explanation: String.raw`**Vertiefung Freikörperbild:** Das Freikörperbild (FKB) isoliert ein Bauteil und ersetzt alle Kontakte — Lager, Seile, andere Körper — durch die entsprechenden Kräfte und Momente.

**Kernidee:** Jeder Kontakt überträgt genau jene Kräfte/Momente, die die zugehörige Lagerung zulässt. Loslager: eine Normalkraft. Festlager: zwei Kraftkomponenten ($F_x$, $F_y$). Einspannung: zwei Kräfte + ein Moment.

**Vorgehen:** 1. Körper freischneiden. 2. Gewichtskraft $G = m \cdot g$ im Schwerpunkt. 3. Lagerreaktionen an jedem Schnitt einzeichnen. 4. Koordinatensystem wählen. 5. Gleichgewicht: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M_A = 0$.

**Typischer Fehler:** Gewichtskraft vergessen oder am falschen Punkt einzeichnen, Richtungspfeile inkonsequent, Lagerart mit den übertragbaren Kräften verwechseln (z.B. Rolle mit Gelenk).`,

    conceptQuestion: 'Ein Balken liegt auf einem Festlager (A) und einem Loslager (B). Wie viele unbekannte Lagerreaktionen hat das System?',
    conceptOptions: [
      '3 (zwei Komponenten am Festlager, eine am Loslager)',
      '2 (je eine Kraft pro Lager)',
      '4 (je zwei Komponenten)',
      '6 (zwei Kräfte und ein Moment pro Lager)',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Festlager A überträgt zwei Kraftkomponenten ($A_x$, $A_y$), Loslager B nur eine Kraft senkrecht zur Rollbahn ($B_y$). Summe: 3 Unbekannte. Genau so viele Gleichgewichtsbedingungen stehen in der Ebene zur Verfügung ($\\sum F_x, \\sum F_y, \\sum M$) — das System ist statisch bestimmt.',
    conceptHints: [
      'Denke daran, welche Verschiebungen jedes Lager verhindert — für jede gesperrte Richtung gibt es eine Kraft.',
      'Festlager = Gelenk (2 Kräfte), Loslager = Rolle (1 Kraft), Einspannung = fest eingebettet (2 Kräfte + 1 Moment).',
    ],

    calcQuestion: 'Ein Seil zieht unter 30° zur Horizontalen mit der Zugkraft $F = 200$ N an einer Kiste. Wie groß ist die horizontale Komponente $F_x$ in N?',
    calcAnswer: 173.2,
    calcTolerance: 1,
    calcUnit: 'N',
    calcExplanation: 'Kräftezerlegung: $F_x = F \\cdot \\cos(30°) = 200 \\cdot 0{,}866 \\approx 173{,}2$ N. Die vertikale Komponente wäre $F_y = F \\cdot \\sin(30°) = 100$ N. Einheitencheck: Kraft bleibt in N.',
    calcHints: [
      'Der Winkel misst zur Horizontalen — entscheide damit, ob cos oder sin für die horizontale Komponente gilt.',
      'Horizontale Komponente = $F \\cdot \\cos(\\alpha)$, wenn $\\alpha$ zur Horizontalen gemessen wird.',
      '$\\cos(30°) \\approx 0{,}866$.',
    ],

    trueFalseStatement: 'Ein Freikörperbild enthält alle äußeren Kräfte inklusive Lagerreaktionen, Gewichtskraft und eingeprägten Lasten — aber keine inneren Kräfte des Körpers.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Das FKB betrachtet den freigeschnittenen Körper als starre Einheit. Nur äußere Wirkungen tauchen auf: Gewicht, äußere Lasten, Lagerreaktionen. Innere Schnittgrößen werden erst sichtbar, wenn man den Körper weiter aufschneidet (z.B. für Biegemomentverlauf).',
    trueFalseHints: [
      'FKB = "was wirkt von außen auf den isolierten Körper?"',
      'Innere Schnittgrößen brauchen einen zusätzlichen Schnitt durch den Körper.',
    ],

    matchingQuestion: 'Ordne jedem Lagertyp die übertragbaren Reaktionen zu.',
    matchingPairs: [
      { left: 'Loslager (Rolle)', right: '1 Kraft senkrecht zur Rollbahn' },
      { left: 'Festlager (Gelenk)', right: '2 Kraftkomponenten, kein Moment' },
      { left: 'Einspannung', right: '2 Kraftkomponenten + 1 Moment' },
      { left: 'Pendelstab', right: 'Kraft nur entlang der Stabachse' },
    ],
    matchingExplanation: 'Je weniger Freiheitsgrade ein Lager zulässt, desto mehr Reaktionen kann es aufnehmen. Eine Einspannung sperrt alle drei ebenen Bewegungen (zwei Translationen und eine Rotation) — deshalb drei Reaktionen.',
    matchingHints: [
      'Zähle die durch das Lager gesperrten Freiheitsgrade.',
      'Ein Pendelstab kann nur Zug oder Druck aufnehmen — reine Normalkraft.',
    ],

    sortingQuestion: 'Bringe die Arbeitsschritte für ein Freikörperbild in die richtige Reihenfolge.',
    sortingItems: [
      'Körper aus dem System freischneiden',
      'Gewichtskraft im Schwerpunkt eintragen',
      'Lagerreaktionen an jedem Schnitt mit Pfeilrichtung eintragen',
      'Koordinatensystem festlegen',
      'Gleichgewichtsbedingungen aufstellen und lösen',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Ohne Skizze keine Rechnung. Zuerst freischneiden, dann alle Kräfte eintragen, erst danach Gleichgewicht ansetzen. Das Koordinatensystem muss vor den Gleichungen stehen, damit Vorzeichen eindeutig sind.',
    sortingHints: [
      'Die Rechnung ist der letzte Schritt — die Skizze kommt zuerst.',
      'Vorzeichen ergeben sich erst, wenn das Koordinatensystem definiert ist.',
    ],

    errorQuestion: 'Welcher Fehler macht ein Freikörperbild ungültig?',
    errorOptions: [
      'Die Gewichtskraft $G = m \\cdot g$ wurde vergessen, weil der Körper "klein" aussieht',
      'Das Koordinatensystem liegt schräg',
      'Der Balken ist mit Hatching (Schraffur) als Festkörper markiert',
      'Es wird ein zweiter Bezugspunkt für das Momentengleichgewicht gewählt',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die Gewichtskraft darf nie weggelassen werden, es sei denn, die Aufgabe setzt sie explizit als vernachlässigbar an. Ein schräges Koordinatensystem ist erlaubt (oft sogar klug bei geneigten Flächen). Mehrere Momentbezugspunkte sind ebenfalls zulässig und ein üblicher Rechentrick zur Reduktion von Unbekannten.',
    errorHints: [
      'Überlege, was die Gleichgewichtsbilanz tatsächlich verletzt.',
      'Koordinatenwahl und Bezugspunkt sind freie Entscheidungen — sie beeinflussen nur die Form der Gleichungen, nicht die Gültigkeit.',
    ],

    transferQuestion: 'Eine Kiste wird mit $F = 500$ N unter 60° zur Horizontalen gezogen. Wie groß ist die vertikale Komponente $F_y$ in N?',
    transferAnswer: 433,
    transferTolerance: 2,
    transferUnit: 'N',
    transferExplanation: '$F_y = F \\cdot \\sin(60°) = 500 \\cdot 0{,}866 = 433{,}0$ N. Diese Komponente entlastet den Boden um genau diesen Betrag — wichtig für die Reibungskraft: $F_R = \\mu (G - F_y)$.',
    transferHints: [
      'Der Winkel zur Horizontalen legt fest: $\\sin(\\alpha)$ für vertikal, $\\cos(\\alpha)$ für horizontal.',
      '$\\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.',
    ],
  },

  'mech-1-2': {
    explanation: String.raw`**Vertiefung Momente und Gleichgewicht:** Das Moment einer Kraft $F$ bezüglich eines Punktes $A$ ist $M_A = F \cdot r_\perp$, wobei $r_\perp$ der senkrechte Hebelarm ist. Richtungskonvention: gegen den Uhrzeigersinn positiv.

**Kernidee:** Im ebenen Gleichgewicht gelten drei unabhängige Bedingungen: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M_A = 0$ (beliebiger Bezugspunkt $A$). Ein klug gewählter Bezugspunkt — z.B. ein Lager, in dem eine Unbekannte angreift — eliminiert diese Unbekannte aus der Momentgleichung.

**Vorgehen:** 1. Freikörperbild. 2. Bezugspunkt für $\sum M = 0$ so wählen, dass möglichst viele Unbekannte "verschwinden". 3. Danach $\sum F_x$ und $\sum F_y$ für die restlichen Unbekannten.

**Typischer Fehler:** Hebelarm nicht senkrecht zur Wirkungslinie gemessen, Vorzeichen des Moments verwechselt, oder Bezugspunkt so gewählt, dass Gleichungen abhängig werden.`,

    conceptQuestion: 'Ein Balken der Länge $L = 4$ m ist bei $A$ (links) fest und bei $B$ (rechts) als Loslager gelagert. Eine Einzelkraft $F = 1000$ N greift in der Mitte an. Welcher Bezugspunkt eliminiert $A_x$, $A_y$ gleichzeitig aus dem Momentengleichgewicht?',
    conceptOptions: [
      'Punkt A — weil $A_x$ und $A_y$ dort keinen Hebelarm haben',
      'Punkt B — denn $B_y$ hat dort keinen Hebelarm',
      'Der Mittelpunkt des Balkens',
      'Ein beliebiger Punkt außerhalb des Balkens',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Kräfte, deren Angriffspunkt auf dem Bezugspunkt liegt, haben Hebelarm null — ihr Moment ist null. Wählt man $A$ als Bezug, verschwinden beide Komponenten $A_x, A_y$ aus $\\sum M_A = 0$. Übrig bleibt eine Gleichung mit nur $B_y$ und der bekannten Last — direkt lösbar.',
    conceptHints: [
      'Was ist der Hebelarm einer Kraft, die genau durch den Bezugspunkt wirkt?',
      'Eine kluge Wahl reduziert die Anzahl Unbekannten in einer einzelnen Gleichung.',
    ],

    calcQuestion: 'Balken der Länge $L = 6$ m, Festlager bei $A$ (links), Loslager bei $B$ (rechts). In der Mitte wirkt senkrecht nach unten $F = 900$ N. Wie groß ist die Lagerkraft $B_y$ in N?',
    calcAnswer: 450,
    calcTolerance: 1,
    calcUnit: 'N',
    calcExplanation: 'Momentengleichgewicht um $A$: $\\sum M_A = 0 \\Rightarrow F \\cdot 3 - B_y \\cdot 6 = 0 \\Rightarrow B_y = F/2 = 450$ N. Bei symmetrischer Last tragen beide Lager gleich viel.',
    calcHints: [
      'Bezugspunkt $A$ wählen — dann fallen $A_x$ und $A_y$ aus der Momentgleichung.',
      'Hebelarm von $F$ zum Punkt $A$: 3 m. Hebelarm von $B_y$: 6 m.',
      'Nach $B_y$ umstellen: $B_y = F \\cdot a / L$ mit $a$ Abstand der Last von A.',
    ],

    trueFalseStatement: 'Das Momentengleichgewicht $\\sum M = 0$ muss für jeden beliebigen Bezugspunkt gelten — nicht nur für einen ausgewählten.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Ist ein starrer Körper im Gleichgewicht, so ist das resultierende Moment bezüglich jedes Punktes null. Man wählt in der Rechnung den Bezugspunkt nur aus praktischen Gründen (Eliminierung von Unbekannten). Für die physikalische Aussage gilt es universell.',
    trueFalseHints: [
      'Gleichgewicht bedeutet: keine resultierende Kraft, kein resultierendes Moment.',
      'Die Wahl des Bezugspunkts ist Rechentechnik, keine Zusatzannahme.',
    ],

    matchingQuestion: 'Ordne die Fälle der Anzahl statisch unabhängiger Gleichgewichtsbedingungen zu.',
    matchingPairs: [
      { left: 'Ebenes Kraftsystem (allgemein)', right: '3 Gleichungen ($\\sum F_x, \\sum F_y, \\sum M$)' },
      { left: 'Zentrales Kraftsystem (eine Wirkungslinie pro Kraft)', right: '2 Gleichungen ($\\sum F_x, \\sum F_y$)' },
      { left: 'Raumkräfte (allgemein)', right: '6 Gleichungen (3 Kräfte + 3 Momente)' },
      { left: 'Eindimensional (Stab auf Zug/Druck)', right: '1 Gleichung ($\\sum F = 0$)' },
    ],
    matchingExplanation: 'Die Anzahl unabhängiger Gleichungen bestimmt, wie viele Unbekannte ohne weitere Annahmen (z.B. Elastizität) lösbar sind. Das ist die Basis der statischen Bestimmtheit.',
    matchingHints: [
      'Zählen: eine Gleichung pro unterdrückter Bewegungsmöglichkeit.',
      'Im Raum gibt es 3 Translationen + 3 Rotationen = 6 Gleichungen.',
    ],

    sortingQuestion: 'Ordne die Arbeitsschritte zur Berechnung von Lagerreaktionen an einem Balken.',
    sortingItems: [
      'Freikörperbild skizzieren mit Gewicht und allen Lasten',
      'Bezugspunkt für $\\sum M = 0$ strategisch wählen',
      '$\\sum M = 0$ aufstellen und erste Unbekannte bestimmen',
      'Mit $\\sum F_x = 0$ und $\\sum F_y = 0$ die übrigen Unbekannten berechnen',
      'Plausibilitätskontrolle: Summe der Lagerlasten = Summe der äußeren Lasten',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Diese Reihenfolge minimiert den Rechenaufwand. Der letzte Schritt (Plausibilitätskontrolle) ist in Klausuren ein häufiger Punktegewinn.',
    sortingHints: [
      'Ohne FKB lässt sich kein Moment korrekt aufstellen.',
      'Kontrolle kommt immer zum Schluss.',
    ],

    errorQuestion: 'Ein Student berechnet für einen eingespannten Balken (Einspannung links, freies Ende rechts) mit Endlast $F$: $A_y = F$, $M_A = 0$. Was ist der Fehler?',
    errorOptions: [
      'Bei einer Einspannung entsteht zusätzlich ein Einspannmoment $M_A = F \\cdot L \\neq 0$',
      '$A_y$ müsste $A_y = 2F$ sein',
      'Einspannungen übertragen keine Vertikalkräfte',
      'Das freie Ende muss gelenkig sein',
    ],
    errorCorrect: 0,
    errorExplanation: 'Eine Einspannung sperrt neben beiden Translationen auch die Rotation — deshalb entsteht ein Einspannmoment. Bei einer Endlast $F$ am freien Ende gilt $\\sum M_A = 0 \\Rightarrow M_A - F \\cdot L = 0 \\Rightarrow M_A = F \\cdot L$. $A_y = F$ ist korrekt, aber $M_A = 0$ ignoriert die Momentenbilanz.',
    errorHints: [
      'Einspannungen haben drei Reaktionsgrößen: zwei Kräfte + ein Moment.',
      'Frage dich: welcher Freiheitsgrad wird zusätzlich gesperrt im Vergleich zum Festlager?',
    ],

    transferQuestion: 'Ein 3 m langer Balken hängt waagrecht an zwei Seilen (Abstand 3 m). Mittig hängt eine Masse $m = 60$ kg. Wie groß ist die Zugkraft pro Seil in N ($g = 9{,}81$ m/s²)?',
    transferAnswer: 294.3,
    transferTolerance: 1,
    transferUnit: 'N',
    transferExplanation: 'Gewicht: $G = m \\cdot g = 60 \\cdot 9{,}81 = 588{,}6$ N. Wegen Symmetrie teilt sich die Last gleichmäßig: $F_{Seil} = G/2 = 294{,}3$ N pro Seil.',
    transferHints: [
      'Zeichne erst das Freikörperbild mit Gewicht und beiden Seilkräften.',
      'Bei symmetrischer Aufhängung sind beide Seilkräfte gleich.',
      'Summenkraft der Seile muss $G$ ausgleichen.',
    ],
  },

  'mech-2-1': {
    explanation: String.raw`**Vertiefung Kinematik:** Kinematik beschreibt Bewegungen rein geometrisch — ohne die Kräfte, die sie auslösen. Zentrale Zusammenhänge:

$$v(t) = \frac{ds}{dt}, \qquad a(t) = \frac{dv}{dt} = \frac{d^2 s}{dt^2}$$

**Bei konstanter Beschleunigung:**
$$v(t) = v_0 + a \cdot t, \qquad s(t) = s_0 + v_0 \cdot t + \tfrac{1}{2} a \cdot t^2, \qquad v^2 = v_0^2 + 2 a (s - s_0)$$

**Einheitencheck:** $[v] = \text{m/s}$, $[a] = \text{m/s}^2$. Achte bei Drehbewegungen auf Winkel in Radiant: $v = r \cdot \omega$, $a = r \cdot \alpha$ (nur so).

**Typischer Fehler:** Mittlere Beschleunigung mit Momentanbeschleunigung verwechseln. Bei nichtkonstantem $a(t)$ sind die obigen Formeln nicht anwendbar — dort muss integriert werden.`,

    conceptQuestion: 'Ein Fahrzeug beschleunigt gleichmäßig von $v_0 = 10$ m/s auf $v = 30$ m/s in $t = 5$ s. Welche Aussage zur Beschleunigung ist korrekt?',
    conceptOptions: [
      '$a = \\frac{v - v_0}{t} = 4$ m/s²',
      '$a = v/t = 6$ m/s²',
      '$a = v_0/t = 2$ m/s²',
      '$a = v - v_0 = 20$ m/s²',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Bei konstanter Beschleunigung ist $a = \\Delta v / \\Delta t = (30 - 10)/5 = 4$ m/s². Die Einheit passt: (m/s)/s = m/s². Option D vergisst die Division durch $t$ — dann stimmt die Einheit nicht.',
    conceptHints: [
      'Beschleunigung ist die Änderungsrate der Geschwindigkeit.',
      'Einheitencheck: (m/s) / s = m/s² — das ist die Probe für deine Formel.',
    ],

    calcQuestion: 'Ein Auto beschleunigt aus dem Stand mit $a = 2{,}5$ m/s² über $t = 8$ s. Welche Geschwindigkeit in m/s erreicht es?',
    calcAnswer: 20,
    calcTolerance: 0.1,
    calcUnit: 'm/s',
    calcExplanation: '$v(t) = v_0 + a \\cdot t = 0 + 2{,}5 \\cdot 8 = 20$ m/s. In km/h: $20 \\cdot 3{,}6 = 72$ km/h — ein realistischer Stadtwert.',
    calcHints: [
      'Aus dem Stand bedeutet $v_0 = 0$.',
      '$v = v_0 + a \\cdot t$ gilt nur bei konstanter Beschleunigung.',
    ],

    trueFalseStatement: 'Wenn ein Körper seine Richtung ändert, aber den Geschwindigkeitsbetrag konstant behält, ist seine Beschleunigung null.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Geschwindigkeit ist ein Vektor — eine Richtungsänderung bedeutet eine Vektoränderung, also eine Beschleunigung. Typisches Beispiel: gleichförmige Kreisbewegung hat die Zentripetalbeschleunigung $a_n = v^2 / r$ senkrecht zur Bahn.',
    trueFalseHints: [
      '$\\vec{v}$ ist ein Vektor mit Betrag UND Richtung.',
      'Beschleunigung = $d\\vec{v}/dt$, nicht nur $d|\\vec{v}|/dt$.',
    ],

    matchingQuestion: 'Ordne den Bewegungstypen die charakteristische Eigenschaft zu.',
    matchingPairs: [
      { left: 'Gleichförmig', right: '$a = 0$, $v = $ const' },
      { left: 'Gleichmäßig beschleunigt', right: '$a = $ const, $v$ linear in $t$' },
      { left: 'Freier Fall', right: '$a = g = 9{,}81$ m/s² nach unten' },
      { left: 'Kreisbewegung mit const. Drehzahl', right: '$|\\vec{v}| = $ const, $\\vec{a} \\neq 0$ (Zentripetal)' },
    ],
    matchingExplanation: 'Diese vier Bewegungsformen decken 90 % der Klausuraufgaben ab. Erkenne zuerst den Typ — dann steht die passende Formel fest.',
    matchingHints: [
      'Gleichförmig = keine Beschleunigung.',
      'Freier Fall ist Spezialfall der gleichmäßig beschleunigten Bewegung.',
    ],

    sortingQuestion: 'Ordne die Schritte zur Berechnung des Bremsweges bei konstanter Verzögerung $a < 0$.',
    sortingItems: [
      'Anfangsgeschwindigkeit $v_0$ und Verzögerung $a$ identifizieren',
      'Endbedingung festlegen: $v = 0$ am Ende des Bremsweges',
      'Formel $v^2 = v_0^2 + 2 a \\cdot s$ mit $v = 0$ einsetzen',
      'Nach $s$ umstellen: $s = -v_0^2 / (2a) = v_0^2 / (2|a|)$',
      'Einheitenkontrolle: $[(m/s)^2 / (m/s^2)] = [m]$',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Die weglose Formel ($v^2 = v_0^2 + 2as$) ist hier effizienter als der Umweg über die Zeit. Endkontrolle der Einheit fängt Vorzeichenfehler ab.',
    sortingHints: [
      'Die weglose Formel vermeidet, dass man die Bremszeit kennen muss.',
      'Vorzeichenkonvention: $a < 0$ entspricht Bremsen.',
    ],

    errorQuestion: 'Ein Student schreibt: "Für freien Fall aus Höhe $h$: $v = g \\cdot h$". Was stimmt nicht?',
    errorOptions: [
      'Die Einheit passt nicht — $g \\cdot h$ hat Einheit $m^2/s^2$, keine Geschwindigkeit. Richtig ist $v = \\sqrt{2gh}$.',
      'Der Faktor 2 fehlt, ansonsten ist die Formel richtig',
      'Die Gravitation muss $g = 10$ m/s² sein, nicht 9,81',
      'Freier Fall ist nicht gleichmäßig beschleunigt',
    ],
    errorCorrect: 0,
    errorExplanation: '$[g \\cdot h] = (m/s^2) \\cdot m = m^2/s^2$, nicht m/s. Aus $v^2 = 2gh$ folgt $v = \\sqrt{2gh}$ — mit Einheit $\\sqrt{m^2/s^2} = m/s$. Ein Einheitencheck entlarvt den Fehler sofort.',
    errorHints: [
      'Einheitencheck vor Zahlenwerten!',
      'Freier Fall ist gleichmäßig beschleunigt mit $a = g$ — dann gilt $v^2 = v_0^2 + 2gh$.',
    ],

    transferQuestion: 'Ein Stein wird aus $h = 20$ m Höhe fallengelassen ($g = 9{,}81$ m/s²). Mit welcher Geschwindigkeit in m/s trifft er auf?',
    transferAnswer: 19.81,
    transferTolerance: 0.1,
    transferUnit: 'm/s',
    transferExplanation: '$v = \\sqrt{2 g h} = \\sqrt{2 \\cdot 9{,}81 \\cdot 20} = \\sqrt{392{,}4} \\approx 19{,}81$ m/s. In km/h ≈ 71 km/h — zeigt, wie schnell ein Gegenstand aus geringer Höhe wird.',
    transferHints: [
      'Freier Fall aus Ruhe: $v_0 = 0$, also $v^2 = 2 g h$.',
      'Wurzel ziehen nicht vergessen.',
    ],
  },

  'mech-2-2': {
    explanation: String.raw`**Vertiefung Newton und Impulssatz:** Das zweite Newtonsche Gesetz sagt: $\vec{F}_{res} = m \cdot \vec{a}$. Die resultierende Kraft ist der Vektorsumme **aller** äußeren Kräfte — nicht einzelner.

**Impuls:** $\vec{p} = m \cdot \vec{v}$. Impulsänderung = Kraft mal Zeit: $\Delta \vec{p} = \int \vec{F} \, dt$. In abgeschlossenen Systemen bleibt der Gesamtimpuls konstant (Impulserhaltung) — zentral bei Stoßvorgängen.

**Vorgehen bei Dynamik-Aufgaben:**
1. FKB zeichnen, alle Kräfte identifizieren.
2. Resultierende Kraft in Bewegungsrichtung bestimmen.
3. $F_{res} = m \cdot a$ ansetzen, nach unbekannter Größe auflösen.
4. Bei Reibung: $F_R = \mu \cdot F_N$ ergänzen.

**Typischer Fehler:** Einzelkraft statt Resultierender verwendet. Reibung in die falsche Richtung eingezeichnet (immer entgegen der Bewegungsrichtung!).`,

    conceptQuestion: 'Eine Masse $m = 5$ kg liegt reibungsfrei auf dem Boden. Eine horizontale Kraft $F = 20$ N zieht an ihr. Wie groß ist die Beschleunigung?',
    conceptOptions: [
      '$a = F/m = 4$ m/s²',
      '$a = F \\cdot m = 100$ m/s²',
      '$a = m/F = 0{,}25$ m/s²',
      '$a = F - m = 15$ m/s²',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Newton 2: $F = m \\cdot a \\Rightarrow a = F/m = 20/5 = 4$ m/s². Einheiten: N/kg = m/s². Reibungsfrei heißt: keine weiteren horizontalen Kräfte, $F$ ist bereits die Resultierende.',
    conceptHints: [
      '$F = m \\cdot a$ — nach $a$ auflösen.',
      'Einheitencheck: $1$ N $= 1$ kg·m/s².',
    ],

    calcQuestion: 'Auf eine Kiste ($m = 20$ kg) wirkt horizontal $F = 100$ N. Gleitreibungskoeffizient $\\mu = 0{,}2$. Wie groß ist die Beschleunigung in m/s² ($g = 9{,}81$ m/s²)?',
    calcAnswer: 3.038,
    calcTolerance: 0.02,
    calcUnit: 'm/s²',
    calcExplanation: 'Normalkraft: $F_N = m g = 20 \\cdot 9{,}81 = 196{,}2$ N. Reibungskraft: $F_R = \\mu F_N = 0{,}2 \\cdot 196{,}2 = 39{,}24$ N. Resultierend: $F_{res} = F - F_R = 100 - 39{,}24 = 60{,}76$ N. Beschleunigung: $a = F_{res}/m = 60{,}76/20 \\approx 3{,}038$ m/s².',
    calcHints: [
      'Zuerst Normalkraft bestimmen — bei ebenem Zug ist $F_N = m \\cdot g$.',
      'Reibung wirkt entgegen der Bewegung: $F_R = \\mu \\cdot F_N$.',
      'Resultierende = Antrieb minus Reibung.',
    ],

    trueFalseStatement: 'In einem abgeschlossenen System bleibt der Gesamtimpuls erhalten — unabhängig davon, ob der Stoß elastisch oder plastisch ist.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Impulserhaltung folgt aus Newton 3 und gilt für jedes abgeschlossene System, egal welcher Stoßtyp. Energieerhaltung dagegen gilt nur beim elastischen Stoß — bei plastischem Stoß geht kinetische Energie in Verformungs- und Wärmeenergie über.',
    trueFalseHints: [
      'Impuls und Energie sind unterschiedliche Erhaltungsgrößen.',
      'Plastisch = Körper bleiben zusammen; elastisch = sie trennen sich ohne Energieverlust.',
    ],

    matchingQuestion: 'Ordne den Stoßtypen die erhaltenen Größen zu.',
    matchingPairs: [
      { left: 'Elastischer Stoß', right: 'Impuls + kinetische Energie' },
      { left: 'Plastischer Stoß', right: 'Nur Impuls (Energie teilweise dissipiert)' },
      { left: 'Freie Bewegung', right: 'Impuls + Energie (keine Kräfte)' },
      { left: 'Reibungsbehafteter Stoß', right: 'Weder Impuls noch Energie vollständig' },
    ],
    matchingExplanation: 'Die letzte Zeile ist streng genommen kein "Stoß" im isolierten System — Reibung ist eine äußere Kraft, die Impuls aus dem System abführt.',
    matchingHints: [
      'Elastisch = "Energie überlebt".',
      'Im isolierten System ist der Impuls immer erhalten.',
    ],

    sortingQuestion: 'Ordne die Arbeitsschritte für eine Dynamikaufgabe mit Reibung.',
    sortingItems: [
      'Freikörperbild mit Antrieb, Gewicht, Normal- und Reibungskraft',
      'Normalkraft $F_N$ aus vertikalem Gleichgewicht bestimmen',
      'Reibungskraft $F_R = \\mu \\cdot F_N$ berechnen',
      'Resultierende horizontale Kraft $F_{res} = F_{an} - F_R$',
      'Beschleunigung $a = F_{res}/m$',
    ],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Die Reibung steht am Ende der Kette — man muss zuerst wissen, wie groß die Normalkraft ist. Bei geneigten Ebenen ist $F_N \\neq m g$, sondern $F_N = m g \\cos(\\alpha)$!',
    sortingHints: [
      'Reibung hängt von $F_N$ ab — $F_N$ ist zuerst zu bestimmen.',
      'Resultierende: Antrieb minus Reibung, dann erst $a$.',
    ],

    errorQuestion: 'Ein Student rechnet für eine Rampe mit Neigung $\\alpha$: $F_N = m g$. Warum ist das falsch?',
    errorOptions: [
      'Auf einer Rampe ist $F_N = m g \\cos(\\alpha)$ — die volle Gewichtskraft wirkt nicht senkrecht zur Fläche',
      'Die Gewichtskraft ist auf Rampen null',
      '$F_N$ ist immer gleich $m g$, nur die Richtung ändert sich',
      '$F_N$ hängt vom Reibungskoeffizienten ab',
    ],
    errorCorrect: 0,
    errorExplanation: 'Die Gewichtskraft $\\vec{G} = m \\vec{g}$ zerlegt sich auf der Rampe in zwei Komponenten: senkrecht zur Rampe $G_\\perp = m g \\cos(\\alpha)$ (wird von Normalkraft getragen) und parallel zur Rampe $G_\\parallel = m g \\sin(\\alpha)$ (erzeugt Hangabtrieb). Daher $F_N = m g \\cos(\\alpha)$, nicht $m g$.',
    errorHints: [
      'Auf geneigten Flächen muss die Gewichtskraft in zwei Komponenten zerlegt werden.',
      'Zeichne die Rampe und markiere den Winkel $\\alpha$ — dann wird $\\cos$ vs. $\\sin$ klar.',
    ],

    transferQuestion: 'Auf einer Rampe mit $\\alpha = 20°$ rutscht ein Körper $m = 4$ kg reibungsfrei ab. Wie groß ist die Hangabtriebskraft in N ($g = 9{,}81$ m/s²)?',
    transferAnswer: 13.42,
    transferTolerance: 0.1,
    transferUnit: 'N',
    transferExplanation: '$F_{an} = m g \\sin(\\alpha) = 4 \\cdot 9{,}81 \\cdot \\sin(20°) = 4 \\cdot 9{,}81 \\cdot 0{,}342 \\approx 13{,}42$ N. Beschleunigung daraus: $a = g \\sin(\\alpha) \\approx 3{,}36$ m/s².',
    transferHints: [
      'Hangabtriebskraft = Gewichtskraftanteil parallel zur Rampe.',
      '$F_{an} = m g \\sin(\\alpha)$ — $\\sin$, nicht $\\cos$, da die Komponente entlang der Rampe gesucht ist.',
      '$\\sin(20°) \\approx 0{,}342$.',
    ],
  },

  'mech-3-1': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Statik:** Klausuraufgaben kombinieren typischerweise Kräftegleichgewicht, Momentengleichgewicht und Reibung. Leitfaden:

1. **Freikörperbild sofort.** 5 Punkte fallen, wenn ein FKB fehlt — auch wenn die Rechnung stimmt.
2. **Gegeben/Gesucht listen** mit Einheiten. SI konsequent (N, m, kg).
3. **Statisch bestimmt?** Ebenes System: 3 Gleichgewichtsgleichungen, also höchstens 3 Unbekannte. Sonst Elastizität nötig.
4. **Bezugspunkt für Momente klug wählen** — möglichst durch ein Lager legen, um Unbekannte zu eliminieren.
5. **Reibung:** nur dann ansetzen, wenn sich der Körper wirklich bewegt oder am Rutschen ist. Bei Haftreibung gilt $|F_R| \leq \mu_H \cdot F_N$.
6. **Plausibilitätscheck:** Summe der Lagerkräfte = Summe der äußeren Lasten? Vorzeichen sinnvoll?

**Typische Prüfungsfallen:**
- Gewicht unterschlagen oder im falschen Schwerpunkt
- Reibung in die falsche Richtung (muss *entgegen* der Bewegungsrichtung zeigen)
- Einspannmoment vergessen
- $\cos$ und $\sin$ verwechselt bei geneigten Flächen`,

    conceptQuestion: 'Ein Balken (2 m) ist links fest eingespannt und trägt am rechten Ende eine Last $F = 500$ N. Welche Reaktionsgrößen entstehen an der Einspannung?',
    conceptOptions: [
      '$A_x = 0$, $A_y = 500$ N, $M_A = 1000$ Nm',
      '$A_x = 500$ N, $A_y = 0$, $M_A = 0$',
      '$A_y = 500$ N, $M_A = 500$ Nm',
      '$A_y = 250$ N, $M_A = 500$ Nm',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Einspannung: 3 Reaktionen. $\\sum F_x = 0 \\Rightarrow A_x = 0$ (keine horizontale Last). $\\sum F_y = 0 \\Rightarrow A_y - 500 = 0 \\Rightarrow A_y = 500$ N. $\\sum M_A = 0 \\Rightarrow M_A - 500 \\cdot 2 = 0 \\Rightarrow M_A = 1000$ Nm.',
    conceptHints: [
      'Einspannung hat drei Reaktionsgrößen: $A_x$, $A_y$, $M_A$.',
      'Momentgleichgewicht um $A$: Last wirkt am Hebelarm $L = 2$ m.',
    ],

    calcQuestion: 'Balken $L = 4$ m, Festlager A links, Loslager B rechts. Streckenlast $q = 300$ N/m über die volle Länge. Wie groß ist $B_y$ in N?',
    calcAnswer: 600,
    calcTolerance: 2,
    calcUnit: 'N',
    calcExplanation: 'Gesamtlast: $F = q \\cdot L = 300 \\cdot 4 = 1200$ N, Angriffspunkt in der Mitte (Schwerpunkt der Gleichlast). Symmetrie: $A_y = B_y = F/2 = 600$ N. Oder formal: $\\sum M_A = 0 \\Rightarrow 1200 \\cdot 2 - B_y \\cdot 4 = 0 \\Rightarrow B_y = 600$ N.',
    calcHints: [
      'Streckenlast durch Ersatzkraft am Schwerpunkt ersetzen: $F = q \\cdot L$ in der Mitte.',
      'Bei Symmetrie: Beide Lager tragen die Hälfte.',
    ],

    trueFalseStatement: 'Haftreibung kann beliebig groß werden — sie erreicht immer genau den Wert, der Gleichgewicht herstellt, bis zum maximalen Wert $\\mu_H \\cdot F_N$.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Haftreibung ist eine Zwangskraft, die sich anpasst, bis die Haftgrenze $F_H^{max} = \\mu_H F_N$ erreicht ist. Erst wenn die äußere Kraft diese Grenze überschreitet, beginnt der Körper zu gleiten und die Gleitreibung $F_G = \\mu_G F_N$ wirkt.',
    trueFalseHints: [
      'Haftreibung hat eine Obergrenze, keine feste Größe.',
      'Gleitreibung ist fest und meist kleiner als die maximale Haftreibung.',
    ],

    matchingQuestion: 'Ordne die Begriffe ihren Definitionen zu.',
    matchingPairs: [
      { left: 'Statische Bestimmtheit', right: 'Anzahl Unbekannte = Anzahl Gleichgewichtsgleichungen' },
      { left: 'Haftreibung', right: '$|F_R| \\leq \\mu_H F_N$' },
      { left: 'Einspannmoment', right: 'Reaktionsgröße einer festen Einspannung' },
      { left: 'Resultierende', right: 'Vektorsumme aller eingeprägten Kräfte' },
    ],
    matchingExplanation: 'Diese vier Begriffe tauchen in nahezu jeder Statik-Klausur auf — klare Abgrenzung verhindert Punkteverlust bei Multiple-Choice-Fragen.',
    matchingHints: [
      'Statisch bestimmt = genau lösbar ohne Elastizität.',
      'Einspannung unterscheidet sich vom Festlager durch das zusätzliche Moment.',
    ],

    sortingQuestion: 'Ordne die Lösungsschritte einer kombinierten Statik-Prüfungsaufgabe.',
    sortingItems: [
      'Freikörperbild mit allen Kräften und Lagerreaktionen',
      'Gegeben/Gesucht samt Einheiten aufschreiben',
      'Statische Bestimmtheit prüfen (Unbekannte vs. Gleichungen)',
      'Momentgleichgewicht um ein Lager $\\rightarrow$ erste Unbekannte',
      'Kraftgleichgewichte $\\sum F_x, \\sum F_y$ für Rest lösen',
      'Plausibilitätskontrolle: Summen und Einheiten',
    ],
    sortingOrder: [0, 1, 2, 3, 4, 5],
    sortingExplanation: 'Reihenfolge optimiert: FKB zuerst (Punkteretter), dann Übersicht, dann Gleichungen, zum Schluss Kontrolle. In Klausuren zählt auch die saubere Dokumentation.',
    sortingHints: [
      'FKB ist der allererste Schritt — ohne ihn keine Punkte.',
      'Statische Bestimmtheit prüfen, bevor du rechnest — sonst läuft die Lösung ins Leere.',
    ],

    errorQuestion: 'Ein Student berechnet für eine Rampe ($\\alpha = 30°$), ob eine Kiste ($m = 10$ kg, $\\mu_H = 0{,}4$) rutscht. Er schreibt: "Hangabtrieb $= 100$ N, Reibung $= 40$ N, also rutscht sie." Welcher Fehler steckt drin?',
    errorOptions: [
      'Hangabtrieb ist $m g \\sin(\\alpha) = 49{,}05$ N, Reibung ist $\\mu_H m g \\cos(\\alpha) = 33{,}97$ N — die Kiste rutscht tatsächlich, aber die Zahlen sind falsch',
      'Der Reibungskoeffizient $\\mu_H = 0{,}4$ ist zu groß',
      'Die Rampe braucht eine Einspannung',
      'Haftreibung wirkt in Bewegungsrichtung',
    ],
    errorCorrect: 0,
    errorExplanation: 'Der Student hat $\\sin(30°) = 1$ und $\\cos(30°) = 1$ genutzt — grober Rechenfehler. Korrekt: $F_{an} = 10 \\cdot 9{,}81 \\cdot \\sin(30°) = 49{,}05$ N; $F_N = 10 \\cdot 9{,}81 \\cdot \\cos(30°) = 84{,}93$ N; $F_H^{max} = 0{,}4 \\cdot 84{,}93 = 33{,}97$ N. Da $F_{an} > F_H^{max}$, rutscht die Kiste.',
    errorHints: [
      'Überprüfe die trigonometrischen Werte: $\\sin(30°) = 0{,}5$, $\\cos(30°) \\approx 0{,}866$.',
      'Normalkraft auf Rampe ist $mg\\cos\\alpha$, nicht $mg$.',
    ],

    transferQuestion: 'Ein Balken (4 m) mit Festlager links, Loslager rechts. Einzelkraft $F_1 = 800$ N wirkt bei $x = 1$ m, $F_2 = 400$ N bei $x = 3$ m. Wie groß ist $A_y$ in N?',
    transferAnswer: 700,
    transferTolerance: 2,
    transferUnit: 'N',
    transferExplanation: '$\\sum M_B = 0$: $A_y \\cdot 4 - F_1 \\cdot 3 - F_2 \\cdot 1 = 0 \\Rightarrow A_y = (800 \\cdot 3 + 400 \\cdot 1)/4 = (2400+400)/4 = 700$ N. Kontrolle: $B_y = F_1 + F_2 - A_y = 800+400-700 = 500$ N; $\\sum F_y = 700+500-800-400 = 0$ ✓.',
    transferHints: [
      'Bezugspunkt $B$ eliminiert $B_y$ aus der Momentgleichung.',
      'Hebelarme: $F_1$ hat $3$ m Abstand zu $B$, $F_2$ hat $1$ m.',
      'Danach $\\sum F_y = 0$ für Kontrolle oder $B_y$.',
    ],
  },

  'mech-3-2': {
    exam: true,
    explanation: String.raw`**Prüfungsstrategie Dynamik:** Klausuraufgaben kombinieren typischerweise Newton 2, Energieerhaltung und Impulserhaltung. Entscheidungshilfe für den Ansatz:

- **Gesucht: Beschleunigung, Zeitpunkt oder Zwischengeschwindigkeit** $\Rightarrow$ $F = m \cdot a$ anwenden.
- **Gesucht: Geschwindigkeit bei Position oder umgekehrt** $\Rightarrow$ Energieerhaltung $\tfrac{1}{2}mv^2 + mgh = $ const (falls reibungsfrei).
- **Gesucht: Endgeschwindigkeit nach Stoß** $\Rightarrow$ Impulserhaltung $\sum m_i \vec{v}_i = $ const.

**Vorgehen:**
1. System und Freikörperbild definieren.
2. Wahl des Ansatzes je nach gesuchter Größe.
3. Reibung und äußere Kräfte prüfen — bei Reibung ist Energie NICHT erhalten.
4. Einheitenkontrolle: J, N·s, kg·m/s usw.

**Typische Prüfungsfallen:**
- Energieerhaltung bei Reibung angewendet $\rightarrow$ falsch
- Impulsrichtung (Vektor!) nicht konsequent $\rightarrow$ Vorzeichenfehler
- Bei schiefer Rampe $\cos/\sin$ verwechselt`,

    conceptQuestion: 'Zwei Wagen ($m_1 = 2$ kg mit $v_1 = 3$ m/s und $m_2 = 1$ kg in Ruhe) stoßen plastisch zusammen. Welche Endgeschwindigkeit haben sie?',
    conceptOptions: [
      '$v = 2$ m/s (Impulserhaltung, gemeinsamer Körper)',
      '$v = 3$ m/s (nichts ändert sich für Wagen 1)',
      '$v = 1{,}5$ m/s (halbe Geschwindigkeit)',
      '$v = 0$ m/s (plastischer Stoß stoppt alles)',
    ],
    conceptCorrect: 0,
    conceptExplanation: 'Plastisch: $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$. Einsetzen: $2 \\cdot 3 + 1 \\cdot 0 = 3 \\cdot v \\Rightarrow v = 2$ m/s. Energie: vorher $\\tfrac{1}{2} \\cdot 2 \\cdot 9 = 9$ J, nachher $\\tfrac{1}{2} \\cdot 3 \\cdot 4 = 6$ J — 3 J sind dissipiert.',
    conceptHints: [
      'Impulserhaltung gilt bei jedem Stoß.',
      'Plastischer Stoß: beide Körper bewegen sich nach dem Stoß gemeinsam.',
    ],

    calcQuestion: 'Ein Körper ($m = 5$ kg) rutscht reibungsfrei eine Rampe von $h = 2$ m Höhe herunter. Wie groß ist seine Geschwindigkeit unten in m/s ($g = 9{,}81$ m/s²)?',
    calcAnswer: 6.264,
    calcTolerance: 0.02,
    calcUnit: 'm/s',
    calcExplanation: 'Energieerhaltung: $\\tfrac{1}{2} m v^2 = m g h \\Rightarrow v = \\sqrt{2 g h} = \\sqrt{2 \\cdot 9{,}81 \\cdot 2} = \\sqrt{39{,}24} \\approx 6{,}264$ m/s. Masse kürzt sich heraus.',
    calcHints: [
      'Energieerhaltung reibungsfrei: potentielle = kinetische Energie.',
      '$v = \\sqrt{2 g h}$ — die Masse spielt keine Rolle.',
    ],

    trueFalseStatement: 'Energieerhaltung gilt auch bei Reibung — die Reibungskraft ist eine innere Kraft und ändert die Gesamtenergie nicht.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. Reibung wandelt mechanische Energie in Wärme um — diese verlässt das mechanische System. Für Prüfungsrechnungen gilt: Bei Reibung ist $\\tfrac{1}{2}mv^2 + mgh + W_R = $ const, wobei $W_R = F_R \\cdot s$ die Reibungsarbeit ist.',
    trueFalseHints: [
      'Reibung ist dissipativ — sie wandelt mechanische Energie um.',
      'Die Gesamtenergie (inkl. Wärme) bleibt erhalten, aber nicht die mechanische.',
    ],

    matchingQuestion: 'Ordne die Größen ihren Einheiten zu.',
    matchingPairs: [
      { left: 'Kraft', right: 'N = kg·m/s²' },
      { left: 'Impuls', right: 'kg·m/s oder N·s' },
      { left: 'Energie/Arbeit', right: 'J = N·m = kg·m²/s²' },
      { left: 'Leistung', right: 'W = J/s' },
    ],
    matchingExplanation: 'Die Grundeinheiten mechanischer Größen lassen sich alle auf kg, m und s zurückführen. Einheitencheck ist in Klausuren oft der erste Hinweis auf Fehler.',
    matchingHints: [
      'Führe jede Einheit auf SI-Basisgrößen zurück.',
      'Arbeit = Kraft · Weg, Leistung = Energie / Zeit.',
    ],

    sortingQuestion: 'Ordne die Schritte für eine kombinierte Dynamikaufgabe (Rampe + Stoß).',
    sortingItems: [
      'System 1 (Rampe): Energieerhaltung $\\rightarrow$ Endgeschwindigkeit $v_1$ am Fuß der Rampe',
      'System 2 (Stoß): Impulserhaltung mit $v_1$ und Massen $\\rightarrow$ gemeinsame Geschwindigkeit',
      'Folgebewegung: Reibung, Energieverlust oder weiterer Stoß',
      'Einheitencheck und Plausibilität (Energiebilanz)',
    ],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Bei mehrstufigen Aufgaben: Jede Teilbewegung braucht den passenden Erhaltungssatz. Energieerhaltung für reibungsfreie Rampen, Impulserhaltung für Stöße, Newton 2 für beschleunigte Bewegungen.',
    sortingHints: [
      'Denke in Teilprozessen — erst Rampe lösen, dann Stoß.',
      'Reibung eventuell zwischen den Teilprozessen einfügen.',
    ],

    errorQuestion: 'Ein Student berechnet die Endgeschwindigkeit nach einer Rampe mit Reibung rein über Energieerhaltung ($v = \\sqrt{2gh}$). Was ist der Fehler?',
    errorOptions: [
      'Die Reibungsarbeit $W_R = F_R \\cdot s$ muss von der potentiellen Energie abgezogen werden: $\\tfrac{1}{2}mv^2 = mgh - W_R$',
      'Reibung spielt bei kurzen Rampen keine Rolle',
      'Energieerhaltung gilt grundsätzlich nicht für Rampen',
      'Der Faktor 2 in $\\sqrt{2gh}$ ist falsch',
    ],
    errorCorrect: 0,
    errorExplanation: 'Bei Reibung wandelt sich ein Teil der potentiellen Energie in Wärme um. Die korrekte Energiebilanz ist $\\tfrac{1}{2}mv^2 = mgh - W_R$ mit $W_R = F_R \\cdot s = \\mu m g \\cos(\\alpha) \\cdot s$. Das Ergebnis ist kleiner als $\\sqrt{2gh}$.',
    errorHints: [
      'Reibungsarbeit ist ein Energieverlust — nicht vergessen.',
      '$W_R = F_R \\cdot s$, wobei $s$ die entlang der Rampe zurückgelegte Strecke ist.',
    ],

    transferQuestion: 'Ein Auto ($m = 1000$ kg) fährt mit $v_0 = 20$ m/s und bremst mit konstanter Verzögerung auf $v = 5$ m/s in $t = 3$ s ab. Welche mittlere Bremskraft wirkt in N?',
    transferAnswer: 5000,
    transferTolerance: 20,
    transferUnit: 'N',
    transferExplanation: 'Impulsänderung: $\\Delta p = m(v - v_0) = 1000 \\cdot (5 - 20) = -15000$ kg·m/s. Kraft: $F = \\Delta p / \\Delta t = -15000/3 = -5000$ N. Betrag: 5000 N (das Minus zeigt, dass die Kraft entgegen der Bewegung wirkt — eine Bremskraft).',
    transferHints: [
      'Kraft = Impulsänderung pro Zeit.',
      'Betrag der Kraft angeben — Vorzeichen zeigt nur die Richtung.',
    ],
  },
}

export const mechanikSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
