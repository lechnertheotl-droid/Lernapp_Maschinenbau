// ═══════════════════════════════════════════════════════════════════════════
// Trigonometrie — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Struktur:  { [lessonId]: [aufgabeZuSubGoal[0], aufgabeZuSubGoal[1], …] }
// Index im Array == Index in `lesson.subGoals` der Lesson.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const trigonometrySubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // Unit 3: Anwendungen und Identitäten
  // ───────────────────────────────────────────────────────────────────────

  // trig-3-5 — Sinussatz & Cosinussatz  (6 subGoals)
  // Typen-Rotation: mc → ni → tf → matching → sorting → mc
  'trig-3-5': [
    // [0] Sinussatz: a/sinα = b/sinβ = c/sinγ = 2R (Umkreisradius)
    mc(
      'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": In einem Dreieck ist $a = 7$ cm und $\\alpha = 35°$. Der Umkreisradius beträgt näherungsweise $R \\approx 6{,}10$ cm. Welche Rechnung prüft diese Beziehung?',
      [
        '$2R = a/\\sin\\alpha \\approx 7/0{,}5736 \\approx 12{,}20$, also $R \\approx 6{,}10$ cm',
        '$2R = a \\cdot \\sin\\alpha \\approx 7 \\cdot 0{,}5736 \\approx 4{,}02$, also $R \\approx 2{,}01$ cm',
        '$R = a/\\sin\\alpha \\approx 7/0{,}5736 \\approx 12{,}20$ cm',
        '$R = \\sin\\alpha/a \\approx 0{,}5736/7 \\approx 0{,}082$ cm',
      ],
      0,
      `**Ansatz:** Der Sinussatz hängt Seite und Gegenwinkel mit dem Umkreisdurchmesser zusammen: $\\dfrac{a}{\\sin\\alpha} = 2R$. Der Quotient **Seite durch Sinus des Gegenwinkels** liefert also direkt $2R$ — und erst danach wird durch $2$ geteilt, um $R$ zu erhalten.

**Rechnung:** $\\sin 35° \\approx 0{,}5736$. Daraus $\\dfrac{a}{\\sin\\alpha} = \\dfrac{7}{0{,}5736} \\approx 12{,}20$ cm $= 2R$. Halbieren: $R \\approx 6{,}10$ cm. ✓

**Probe:** Quer-Check mit einem anderen Seite-Winkel-Paar: Wenn das Dreieck z. B. $\\gamma = 90°$ hätte, wäre $c = 2R$ direkt die Hypotenuse — gleiche Logik, Spezialfall. ✓

**Typischer Fehler:** Nur $\\dfrac{a}{\\sin\\alpha} = R$ (ohne Faktor $2$) — vergisst den Umkreis**durchmesser** und liefert einen doppelt so großen Radius (Option C).`,
      [
        'Welche Größe ist der gemeinsame Wert des Quotienten $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma$?',
        'Es ist nicht $R$ allein, sondern $2R$ — erst durch $2$ teilen.',
        '$\\sin 35° \\approx 0{,}5736$, also $7/0{,}5736 \\approx 12{,}20$.',
      ],
      {
        1: 'Du hast **multipliziert** statt zu dividieren: $a \\cdot \\sin\\alpha$ ergibt eine kleine Zahl und einen falsch winzigen Umkreisradius. Der Sinussatz ist $a/\\sin\\alpha = 2R$, also Quotient.',
        2: 'Der Quotient $a/\\sin\\alpha$ ist $2R$, **nicht** $R$. Der Umkreis**durchmesser** steht rechts, deshalb am Ende halbieren.',
        3: 'Du hast den Quotienten umgekehrt: $\\sin\\alpha/a$ hat kein geometrisches Bedeutung im Sinussatz. Korrekt ist Seite durch Sinus.',
      },
    ),

    // [1] Cosinussatz: a² = b² + c² - 2bc·cosα (verallgemeinerter Pythagoras)
    ni(
      'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": In einem Dreieck sind $b = 5$ cm, $c = 8$ cm und der eingeschlossene Winkel $\\alpha = 60°$. Berechne die Länge der Seite $a$ in cm.',
      7, 0.01, 'cm',
      `**Ansatz:** SWS-Konfiguration (zwei Seiten + eingeschlossener Winkel) → **Cosinussatz**. Seite $a$ liegt $\\alpha$ gegenüber; $b$ und $c$ sind die zwei Seiten, die $\\alpha$ einschließen.

**Rechnung:** $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha = 5^{2} + 8^{2} - 2\\cdot 5\\cdot 8\\cdot\\cos 60° = 25 + 64 - 80\\cdot\\tfrac{1}{2} = 89 - 40 = 49$. Also $a = \\sqrt{49} = 7$ cm.

**Probe:** Sinussatz als Quer-Check: $\\sin\\alpha/a = \\sin 60°/7 \\approx 0{,}1237$. $\\sin\\beta = b \\cdot 0{,}1237 \\approx 0{,}6186$, also $\\beta \\approx 38{,}2°$. Dann $\\gamma \\approx 180° - 60° - 38{,}2° = 81{,}8°$. $\\sin 81{,}8° \\approx 0{,}990$, und $c = \\sin\\gamma/0{,}1237 \\approx 8{,}00$. ✓

**Typischer Fehler:** Vorzeichen vor $2bc\\cos\\alpha$ vergessen (Plus statt Minus): ergäbe $\\sqrt{129} \\approx 11{,}36$ — eine zu lange Seite. Der **Minus-Term zieht ab**, weil der Winkel kleiner als $90°$ ist.`,
      [
        'Welche Konfiguration liegt vor: SWS oder WWS? Welcher Satz passt?',
        'Cosinussatz: $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$. Welche Seite liegt $\\alpha$ gegenüber?',
        '$\\cos 60° = 1/2$, also $2\\cdot 5\\cdot 8\\cdot 1/2 = 40$.',
      ],
    ),

    // [2] Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz
    tf(
      'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": In einem Dreieck sind $a = 6$, $b = 9$ und $\\gamma = 75°$ gegeben. Für die direkte Berechnung der Seite $c$ ist der **Sinussatz** die richtige Wahl.',
      false,
      `**Ansatz:** Methodenwahl nach gegebenen Teilen. Der Sinussatz $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma}$ braucht mindestens **ein bekanntes Seite-Winkel-Paar** $(a,\\alpha)$ oder $(b,\\beta)$ oder $(c,\\gamma)$ — hier kennen wir aber weder $\\alpha$ noch $\\beta$, also kein passendes Paar.

**Rechnung:** Gegeben sind zwei Seiten und der **eingeschlossene** Winkel ($\\gamma$ liegt zwischen $a$ und $b$, gegenüber von $c$). Das ist eine SWS-Konfiguration → **Cosinussatz**: $c^{2} = a^{2} + b^{2} - 2ab\\cos\\gamma = 36 + 81 - 108\\cos 75° \\approx 117 - 27{,}96 \\approx 89{,}04$, also $c \\approx 9{,}44$.

**Probe:** Faustregel: Kenne ich die gegenüberliegenden Paare? Wenn ja → Sinussatz. Wenn nur zwei Seiten + eingeschlossener Winkel → Cosinussatz. Hier: kein Paar bekannt, also Cosinussatz. ✓

**Typischer Fehler:** Immer zuerst an Sinussatz denken, weil er einfacher aussieht — aber ohne bekanntes Seite-Winkel-Paar bleibt man mit zwei Unbekannten im Bruch stecken.`,
      [
        'Welche Paare $(Seite, Gegenwinkel)$ kennst du bereits vollständig?',
        'Sinussatz braucht mindestens ein vollständiges Paar — hier fehlt $\\alpha$ und $\\beta$.',
        '$\\gamma$ liegt zwischen $a$ und $b$: das ist SWS.',
      ],
    ),

    // [3] Pythagoras als Spezialfall: α = 90° ⇒ cosα = 0 ⇒ a² = b² + c²
    matching(
      'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Ordne jedem Wert des eingeschlossenen Winkels $\\alpha$ die passende Form des Cosinussatzes $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$ zu.',
      [
        { left: '$\\alpha = 90°$', right: '$a^{2} = b^{2} + c^{2}$ (Pythagoras, $\\cos 90° = 0$)' },
        { left: '$\\alpha = 60°$', right: '$a^{2} = b^{2} + c^{2} - bc$ (da $2\\cos 60° = 1$)' },
        { left: '$\\alpha = 120°$', right: '$a^{2} = b^{2} + c^{2} + bc$ (da $\\cos 120° = -1/2$, Minus-Minus ergibt Plus)' },
        { left: '$\\alpha = 0°$', right: '$a^{2} = (b - c)^{2}$ (entartetes Dreieck: $\\cos 0° = 1$, $a = |b-c|$)' },
      ],
      `**Ansatz:** Der Cosinussatz $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$ enthält Pythagoras als Grenzfall. Die Werte von $\\cos\\alpha$ an Schlüsselwinkeln steuern, ob der Korrekturterm $-2bc\\cos\\alpha$ **nichts tut**, **abzieht** oder **addiert**.

**Rechnung:**
· $\\alpha = 90°$: $\\cos 90° = 0 \\Rightarrow a^{2} = b^{2} + c^{2}$. Pythagoras.
· $\\alpha = 60°$: $\\cos 60° = 1/2 \\Rightarrow -2bc \\cdot 1/2 = -bc$.
· $\\alpha = 120°$: $\\cos 120° = -1/2 \\Rightarrow -2bc \\cdot (-1/2) = +bc$. Der Minus-Term **addiert**, weil der Winkel stumpf ist.
· $\\alpha = 0°$: $\\cos 0° = 1 \\Rightarrow a^{2} = b^{2} - 2bc + c^{2} = (b-c)^{2}$. Das Dreieck ist entartet — $a$ liegt auf einer Linie.

**Probe:** Monotonie-Check: je größer $\\alpha$, desto größer $a$ bei festem $b, c$. Bei $\\alpha = 0°$ ist $a$ minimal ($= |b-c|$), bei $\\alpha = 180°$ maximal ($a = b + c$). Die Werte im Matching liegen dazwischen und wachsen monoton mit $\\alpha$. ✓

**Typischer Fehler:** Bei $\\alpha > 90°$ das Minus-Zeichen vor $2bc\\cos\\alpha$ nicht mit dem negativen Cosinuswert kombinieren — dann fehlt die Addition und die Gegenseite $a$ kommt zu kurz heraus.`,
      [
        'Welche Werte nehmen $\\cos\\alpha$ bei $0°, 60°, 90°, 120°$ an?',
        'Bei stumpfem Winkel ist $\\cos\\alpha < 0$ — wirkt das noch als "minus"?',
        'Setze jeden Wert direkt in $-2bc\\cos\\alpha$ ein und schaue auf das Vorzeichen.',
      ],
    ),

    // [4] Seite und Gegenwinkel gehören zusammen (a ↔ α usw.)
    sorting(
      'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Ordne die Schritte zur Berechnung des Winkels $\\beta$, wenn $a = 6$, $b = 4$ und $\\alpha = 80°$ gegeben sind.',
      [
        'Sinussatz ansetzen: $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta}$',
        'Nach $\\sin\\beta$ umstellen: $\\sin\\beta = \\dfrac{b \\cdot \\sin\\alpha}{a}$',
        'Werte einsetzen: $\\sin\\beta = \\dfrac{4 \\cdot \\sin 80°}{6} \\approx \\dfrac{4 \\cdot 0{,}9848}{6} \\approx 0{,}6565$',
        '$\\beta = \\arcsin(0{,}6565) \\approx 41{,}0°$',
        'Plausibilitätscheck: $\\beta < \\alpha$ (da $b < a$) — passt zur Regel „kürzere Seite hat kleineren Gegenwinkel".',
      ],
      [0, 1, 2, 3, 4],
      `**Ansatz:** Seite und Gegenwinkel $(a, \\alpha)$, $(b, \\beta)$ gehören im Sinussatz **immer paarweise** zusammen. Nie $a$ mit $\\sin\\beta$ koppeln — das ist der häufigste Indexfehler.

**Rechnung:** Die fünf Schritte in der angegebenen Reihenfolge liefern $\\beta \\approx 41{,}0°$. Der letzte Schritt ist ein **Plausibilitätscheck**: Im Dreieck liegt der größere Gegenwinkel der längeren Seite gegenüber. $b = 4 < a = 6$, also muss $\\beta < \\alpha = 80°$ gelten — $41°$ erfüllt das.

**Probe:** Dritter Winkel $\\gamma = 180° - 80° - 41° = 59°$. Quer-Check mit Sinussatz: $c = \\sin\\gamma \\cdot a/\\sin\\alpha \\approx 0{,}857 \\cdot 6{,}092 \\approx 5{,}22$. Plausibel, weil $4 < 5{,}22 < 6$ in der richtigen Reihenfolge. ✓

**Typischer Fehler:** Paare vertauschen: $\\dfrac{a}{\\sin\\beta} = \\dfrac{b}{\\sin\\alpha}$. Das führt auf $\\sin\\beta = a \\sin\\alpha/b \\approx 1{,}477 > 1$ — unmöglicher Sinuswert. Alarm! Die Unstimmigkeit zeigt sofort, dass Seite und Winkel nicht richtig zugeordnet sind.`,
      [
        'Welche Seite liegt $\\alpha$ gegenüber? Welche liegt $\\beta$ gegenüber?',
        'Im Sinussatz sind $a$ und $\\sin\\alpha$ ein festes Paar — nicht vertauschen.',
        'Am Ende: $\\sin\\beta$ muss zwischen $0$ und $1$ liegen; sonst war die Zuordnung falsch.',
      ],
    ),

    // [5] SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei spitzem sinβ, Höhenvergleich
    mc(
      'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a = 10$, $b = 8$, $\\alpha = 40°$. Nachdem der Sinussatz $\\sin\\beta \\approx 0{,}5142$ liefert: Welche Aussage über die Lösung ist korrekt?',
      [
        'Es gibt genau eine Lösung $\\beta \\approx 30{,}9°$, weil $b < a$ den stumpfen Zweitwinkel ausschließt.',
        'Es gibt zwei Lösungen $\\beta \\approx 30{,}9°$ und $\\beta \\approx 149{,}1°$, beide liefern gültige Dreiecke.',
        'Es gibt keine Lösung, weil $\\sin\\beta < 1$ nicht ausreicht.',
        'Es gibt genau eine Lösung $\\beta \\approx 149{,}1°$, weil Sinus im zweiten Quadranten ebenfalls positiv ist.',
      ],
      0,
      `**Ansatz:** SSW-Konfiguration → Sinussatz liefert $\\sin\\beta$. Weil Sinus im 1. **und** 2. Quadranten positiv ist, gibt es prinzipiell zwei Kandidaten: $\\beta_1 = \\arcsin(0{,}5142) \\approx 30{,}9°$ und $\\beta_2 = 180° - \\beta_1 \\approx 149{,}1°$. Nicht beide müssen gültig sein — das entscheidet der **Vergleich mit $\\alpha$** bzw. $b$ und $a$.

**Rechnung:** Regel: Wenn die Seite **gegenüber** dem bekannten Winkel länger ist als die andere bekannte Seite ($a > b$), dann liegt $\\alpha$ dem längsten der bekannten Stücke gegenüber und muss der größte Winkel im Dreieck sein. Hier $a = 10 > b = 8$, also $\\alpha > \\beta$. $\\alpha = 40°$, also $\\beta < 40°$ — der Kandidat $\\beta_2 = 149{,}1°$ ist damit ausgeschlossen. Einzige Lösung: $\\beta \\approx 30{,}9°$.

**Probe:** Mit $\\beta_2 = 149{,}1°$ ergäbe sich $\\alpha + \\beta = 189{,}1° > 180°$ — Winkelsumme im Dreieck verletzt. Bestätigt den Ausschluss. ✓

**Typischer Fehler:** Beide Sinus-Kandidaten stehen lassen, ohne Höhen-/Seitenvergleich durchzuführen. In einer Prüfung gibt das entweder **zwei Dreiecke** als Lösung an (wenn $a < b$ und $\\alpha$ spitz) oder **gar keine** (wenn $a < b\\sin\\alpha$) — die Fallunterscheidung ist der Kern der SSW-Mehrdeutigkeit.`,
      [
        'Wie viele Winkel $\\beta \\in (0°, 180°)$ erfüllen $\\sin\\beta = 0{,}5142$?',
        'Regel: Die längere Seite liegt dem größeren Winkel gegenüber.',
        'Prüfe: $\\alpha + \\beta_2 < 180°$? Wenn nicht, ist $\\beta_2$ ungültig.',
      ],
      {
        1: 'Der zweite Kandidat $149{,}1°$ würde mit $\\alpha = 40°$ bereits $189°$ ergeben — das verletzt die Winkelsumme $< 180°$. Die längere Seite $a > b$ erzwingt $\\alpha > \\beta$, also ist $\\beta_2$ ausgeschlossen.',
        2: '$\\sin\\beta \\approx 0{,}5142 < 1$ bedeutet **genau**, dass mindestens eine Lösung existiert. Keine Lösung gäbe es nur bei $\\sin\\beta > 1$ (Fall $a < b\\sin\\alpha$).',
        3: 'Die Regel ist umgekehrt: Weil $a > b$, muss $\\alpha > \\beta$ gelten — der **spitze** Kandidat ist richtig. Der stumpfe $149{,}1°$ scheidet aus (Winkelsumme bricht).',
      },
    ),
  ],
}
