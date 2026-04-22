// ═══════════════════════════════════════════════════════════════════════════
// Trigonometrie — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: Objekt mit Sub-Goal-Index als Key, ARRAY von Aufgaben als Value.
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const trigonometrySubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-5 — Sinussatz & Cosinussatz  (6 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-5': {

    // ── [0] Sinussatz-Formel + Umkreisradius ────────────────────────────
    0: [
      mc(
        'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": Welcher Ausdruck ist gleich dem Durchmesser $2R$ des Umkreises eines Dreiecks?',
        [
          '$\\dfrac{a}{\\sin\\alpha}$',
          '$\\dfrac{\\sin\\alpha}{a}$',
          '$a \\cdot \\sin\\alpha$',
          '$\\dfrac{a + b + c}{\\sin\\alpha + \\sin\\beta + \\sin\\gamma}$',
        ],
        0,
        `**Ansatz:** Erweiterter Sinussatz: $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma} = 2R$, wobei $R$ der Umkreisradius ist.

**Rechnung:** Die Konstante des Sinussatzes ist genau der Umkreisdurchmesser. Für **jede** Seite gilt Seite/Sinus(Gegenwinkel) $= 2R$.

**Probe:** Im rechtwinkligen Dreieck mit $\\gamma = 90°$ ist $\\dfrac{c}{\\sin 90°} = c = 2R$ — die Hypotenuse ist tatsächlich der Umkreisdurchmesser (Satz des Thales). ✓

**Typischer Fehler:** Das Verhältnis umdrehen ($\\sin\\alpha / a$) oder multiplizieren statt dividieren. Merke: Seite oben, Sinus unten.`,
        [
          'Der Sinussatz liefert eine **Konstante** — hat sie eine geometrische Bedeutung?',
          'Betrachte ein rechtwinkliges Dreieck: dort ist die Hypotenuse der Umkreisdurchmesser.',
          'Für $\\gamma = 90°$ gilt $\\sin\\gamma = 1$ und $c/1 = c = 2R$.',
        ],
        {
          1: 'Kehrwert. Das Verhältnis **Seite durch Sinus** ergibt $2R$, nicht **Sinus durch Seite**. $\\sin\\alpha / a = 1/(2R)$.',
          2: 'Multiplikation statt Division. Der Sinussatz ist ein Quotient — Seite **geteilt durch** Sinus des Gegenwinkels.',
          3: 'Es ist zwar $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma}$, aber man darf Zähler und Nenner nicht einfach summieren (das würde $2R$ nur zufällig ergeben). Jedes einzelne Verhältnis ist $2R$, nicht die Summe.',
        },
      ),
      ni(
        'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": Ein Dreieck hat $a = 8$ und $\\alpha = 30°$. Wie groß ist der Umkreisradius $R$?',
        8, 0.05, '',
        `**Ansatz:** Aus dem erweiterten Sinussatz: $\\dfrac{a}{\\sin\\alpha} = 2R \\Rightarrow R = \\dfrac{a}{2\\sin\\alpha}$.

**Rechnung:** $R = \\dfrac{8}{2 \\cdot \\sin 30°} = \\dfrac{8}{2 \\cdot 0{,}5} = \\dfrac{8}{1} = 8$.

**Probe:** Rückwärts: $2R = 16$, also $a/\\sin\\alpha = 8/0{,}5 = 16 = 2R$. ✓

**Typischer Fehler:** Faktor $2$ vergessen und $R = a/\\sin\\alpha = 16$ angeben — das ist der **Durchmesser**, nicht der Radius.`,
        [
          'Welche geometrische Größe ist die Konstante $a/\\sin\\alpha$ im Sinussatz?',
          '$a/\\sin\\alpha = 2R$ — löse nach $R$ auf.',
          '$\\sin 30° = 0{,}5$; $R = a/(2\\sin\\alpha)$.',
        ],
      ),
      ni(
        'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": Gegeben $a = 7$, $\\alpha = 40°$, $\\beta = 65°$. Berechne die Seite $b$ (auf 2 Nachkommastellen).',
        9.87, 0.05, '',
        `**Ansatz:** Zwei Winkel + eine Seite → Sinussatz mit der bekannten Seite und ihrem Gegenwinkel als "Anker".

**Rechnung:** $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} \\Rightarrow b = a \\cdot \\dfrac{\\sin\\beta}{\\sin\\alpha} = 7 \\cdot \\dfrac{\\sin 65°}{\\sin 40°} = 7 \\cdot \\dfrac{0{,}9063}{0{,}6428} \\approx 7 \\cdot 1{,}4099 \\approx 9{,}87$.

**Probe:** $b > a$ muss gelten, weil $\\beta > \\alpha$ (größerer Gegenwinkel → größere Seite). Tatsächlich $9{,}87 > 7$. ✓

**Typischer Fehler:** Rechner auf RAD statt DEG → ergibt Unsinn (ca. $0{,}73$ statt $9{,}87$). Vor der Rechnung Modus prüfen.`,
        [
          'Bekannt sind $a, \\alpha, \\beta$ — welche Unbekannte hängt an $\\beta$?',
          'Setze $a/\\sin\\alpha = b/\\sin\\beta$ und löse nach $b$.',
          'Rechner auf DEG! $\\sin 40° \\approx 0{,}643$, $\\sin 65° \\approx 0{,}906$.',
        ],
      ),
      tf(
        'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": Wenn in einem Dreieck alle drei Seiten gleich lang sind (gleichseitig), dann ist $R = a/\\sqrt{3}$.',
        true,
        `**Ansatz:** Im gleichseitigen Dreieck ist $\\alpha = \\beta = \\gamma = 60°$ und $\\sin 60° = \\sqrt{3}/2$.

**Rechnung:** $2R = \\dfrac{a}{\\sin 60°} = \\dfrac{a}{\\sqrt{3}/2} = \\dfrac{2a}{\\sqrt{3}} \\Rightarrow R = \\dfrac{a}{\\sqrt{3}} = \\dfrac{a\\sqrt{3}}{3}$.

**Probe:** Für $a = \\sqrt{3}$ folgt $R = 1$. Check: Einheitskreis mit drei Punkten bei $0°, 120°, 240°$ — Sehnenlänge $\\sqrt{3}$. ✓

**Typischer Fehler:** $R = a/2$ annehmen (wie bei rechtwinkligem Dreieck mit Hypotenuse $a$). Das gilt nur, wenn $a$ Hypotenuse ist — nicht im gleichseitigen Dreieck.`,
        [
          'Welchen Winkel hat das gleichseitige Dreieck an jeder Ecke?',
          'Setze $\\alpha = 60°$ in $a/\\sin\\alpha = 2R$ ein.',
          '$\\sin 60° = \\sqrt{3}/2$ auswendig lernen.',
        ],
      ),
      matching(
        'Sub-Goal "Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$ (Umkreisradius)": Ordne jede Seite ihrem passenden Sinussatz-Paar zu.',
        [
          { left: 'Seite $a$', right: '$a/\\sin\\alpha$' },
          { left: 'Seite $b$', right: '$b/\\sin\\beta$' },
          { left: 'Seite $c$', right: '$c/\\sin\\gamma$' },
          { left: 'Gemeinsame Konstante aller drei Verhältnisse', right: '$2R$ (Umkreisdurchmesser)' },
        ],
        `**Ansatz:** Seite und Gegenwinkel tragen denselben Buchstaben (griechisch ↔ lateinisch). Alle drei Verhältnisse liefern dieselbe Konstante — den Umkreisdurchmesser.

**Rechnung:** $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma} = 2R$.

**Probe:** Die Zuordnung $a \\leftrightarrow \\alpha$ ist geometrisch eindeutig: Seite $a$ liegt **der Ecke** $A$ (mit Winkel $\\alpha$) **gegenüber**.

**Typischer Fehler:** $a$ mit dem *anliegenden* Winkel paaren statt mit dem Gegenwinkel — das liefert völlig falsche Seitenlängen.`,
        [
          'Welcher Winkel liegt einer Seite **gegenüber**?',
          'Buchstabe-Paare: $a \\leftrightarrow \\alpha$, $b \\leftrightarrow \\beta$, $c \\leftrightarrow \\gamma$.',
          'Die Konstante $2R$ ist für alle drei Paare gleich — das ist genau die Aussage des Sinussatzes.',
        ],
      ),
    ],

    // ── [1] Cosinussatz $a^2 = b^2 + c^2 - 2bc\cos\alpha$ ───────────────
    1: [
      ni(
        'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": Gegeben $b = 5$, $c = 7$, $\\alpha = 60°$. Berechne die dritte Seite $a$ (auf 2 Nachkommastellen).',
        6.24, 0.02, '',
        `**Ansatz:** SWS-Konfiguration (zwei Seiten + eingeschlossener Winkel) → Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$.

**Rechnung:** $a^2 = 5^2 + 7^2 - 2 \\cdot 5 \\cdot 7 \\cdot \\cos 60° = 25 + 49 - 70 \\cdot 0{,}5 = 74 - 35 = 39$. Also $a = \\sqrt{39} \\approx 6{,}24$.

**Probe:** Dreiecks­ungleichung: $|b - c| < a < b + c$, also $2 < a < 12$. ✓ Weiter: Da $\\alpha = 60° < 90°$, ist $a < \\sqrt{b^2+c^2} = \\sqrt{74} \\approx 8{,}60$. Ebenfalls ✓.

**Typischer Fehler:** Vorzeichen falsch: $a^2 = b^2 + c^2 + 2bc\\cos\\alpha$ ansetzen — das Minus in der Formel ist das Entscheidende. Bei $\\alpha < 90°$ muss $a < \\sqrt{b^2+c^2}$ sein, weil $\\cos\\alpha > 0$ die Seite verkürzt.`,
        [
          'SWS-Konfiguration — welcher Satz?',
          'Formel: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$.',
          '$\\cos 60° = 1/2$ auswendig; $2 \\cdot 5 \\cdot 7 \\cdot 0{,}5 = 35$.',
        ],
      ),
      mc(
        'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": Für welchen Wert von $\\alpha$ wird der Korrekturterm $-2bc\\cos\\alpha$ **positiv** (d.h. $a^2 > b^2 + c^2$)?',
        ['$\\alpha < 90°$', '$\\alpha = 90°$', '$\\alpha > 90°$', 'Der Term kann nie positiv werden'],
        2,
        `**Ansatz:** $-2bc\\cos\\alpha$ ist positiv, wenn $\\cos\\alpha < 0$. Aus dem Einheitskreis: $\\cos\\alpha < 0$ für $\\alpha \\in (90°, 180°)$.

**Rechnung:** Für $\\alpha > 90°$ (stumpfwinklig) ist $\\cos\\alpha < 0$, also $-2bc\\cos\\alpha > 0$, also $a^2 > b^2 + c^2$ — die dem stumpfen Winkel gegenüberliegende Seite ist **länger** als die Pythagoras-Diagonale.

**Probe:** Grenzfall $\\alpha = 180°$ (entartetes Dreieck, $b, c$ kollinear): $\\cos 180° = -1$, $a^2 = b^2 + c^2 + 2bc = (b+c)^2 \\Rightarrow a = b + c$. Geometrisch korrekt. ✓

**Typischer Fehler:** Nur ans rechtwinklige Dreieck denken. Der Cosinussatz sagt: die Seite gegenüber dem **größten** Winkel ist die längste.`,
        [
          'Wann ist $\\cos\\alpha$ **negativ**?',
          'Am Einheitskreis: x-Koordinate $< 0$ im 2. Quadranten.',
          'Für $\\alpha > 90°$ sind wir im stumpfwinkligen Fall.',
        ],
        {
          0: 'Bei $\\alpha < 90°$ ist $\\cos\\alpha > 0$, also $-2bc\\cos\\alpha < 0$ — der Term **verkürzt** $a$ gegenüber $\\sqrt{b^2+c^2}$.',
          1: 'Bei $\\alpha = 90°$ ist $\\cos\\alpha = 0$, der Korrekturterm verschwindet — das ist genau Pythagoras. Kein positiver Beitrag.',
          3: 'Doch — für $\\alpha > 90°$ wird $\\cos\\alpha < 0$, und das Minus in der Formel dreht das Vorzeichen. Beispiel: $\\alpha = 120°$, $\\cos\\alpha = -0{,}5$, Term $= +bc > 0$.',
        },
      ),
      tf(
        'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": Aus $a=8$, $b=5$, $c=6$ lässt sich der Winkel $\\alpha$ mit $\\cos\\alpha = (b^2+c^2-a^2)/(2bc)$ berechnen.',
        true,
        `**Ansatz:** SSS-Konfiguration — drei Seiten bekannt. Cosinussatz nach $\\cos\\alpha$ umstellen.

**Rechnung:** $a^2 = b^2 + c^2 - 2bc\\cos\\alpha \\Rightarrow \\cos\\alpha = \\dfrac{b^2 + c^2 - a^2}{2bc}$.

Numerisch: $\\cos\\alpha = (25 + 36 - 64)/(60) = -3/60 = -0{,}05$, also $\\alpha \\approx 92{,}9°$ (leicht stumpf — passt, $a=8$ ist die längste Seite).

**Probe:** Längste Seite gegenüber dem größten Winkel: $a = 8$ ist am längsten, und $\\alpha \\approx 93°$ ist tatsächlich der größte Winkel. ✓

**Typischer Fehler:** Zähler verkehrt: $(a^2 - b^2 - c^2)/(2bc)$ — dann ist das Vorzeichen falsch. Merke: Der Gegenwinkel **subtrahiert** sein eigenes Quadrat.`,
        [
          'Welche Konfiguration liegt bei SSS vor?',
          'Stelle den Cosinussatz nach $\\cos\\alpha$ um.',
          '$\\cos\\alpha = (b^2+c^2-a^2)/(2bc)$ — Quadrat der Gegenseite $a$ wird abgezogen.',
        ],
      ),
      ni(
        'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": Ein Dreieck hat $a = 10$, $b = 6$, $c = 8$. Wie groß ist der Winkel $\\alpha$ (in Grad, ganzzahlig)?',
        90, 0.5, '°',
        `**Ansatz:** SSS → Cosinussatz nach $\\cos\\alpha$ auflösen.

**Rechnung:** $\\cos\\alpha = \\dfrac{b^2 + c^2 - a^2}{2bc} = \\dfrac{36 + 64 - 100}{96} = \\dfrac{0}{96} = 0 \\Rightarrow \\alpha = 90°$.

**Probe:** $6^2 + 8^2 = 100 = 10^2$ — pythagoreisches Tripel $(6, 8, 10)$, Dreieck ist rechtwinklig mit Hypotenuse $a$. ✓

**Typischer Fehler:** Sofort Pythagoras ansetzen und prüfen, ob $a^2 = b^2 + c^2$, statt den allgemeinen Weg über Cosinussatz zu gehen — das funktioniert hier, wäre aber bei nicht-rechtwinkligen Dreiecken eine Sackgasse.`,
        [
          'Drei Seiten → welcher Satz?',
          'Ist $6, 8, 10$ ein bekanntes Zahlentripel?',
          '$\\cos\\alpha = 0 \\Rightarrow \\alpha = 90°$.',
        ],
      ),
      matching(
        'Sub-Goal "Cosinussatz: $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$ (verallgemeinerter Pythagoras)": Ordne jeden Winkel seiner Cosinussatz-Gleichung zu.',
        [
          { left: 'Winkel $\\alpha$ (gegenüber $a$)', right: '$a^2 = b^2 + c^2 - 2bc\\cos\\alpha$' },
          { left: 'Winkel $\\beta$ (gegenüber $b$)', right: '$b^2 = a^2 + c^2 - 2ac\\cos\\beta$' },
          { left: 'Winkel $\\gamma$ (gegenüber $c$)', right: '$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$' },
        ],
        `**Ansatz:** Der Cosinussatz ist **zyklisch**: die Seite auf der linken Seite ist immer die **Gegenseite** des Winkels. Die anderen beiden Seiten bilden das Produkt, das mit dem Cosinus des Gegenwinkels multipliziert wird.

**Rechnung:** Muster: (Gegenseite)² = (Summe der Quadrate der anderen zwei) − 2·(Produkt der anderen zwei)·cos(eigener Winkel).

**Probe:** Summe über alle drei Gleichungen: linke Seite $a^2 + b^2 + c^2$, rechts das Doppelte der Quadratsumme minus $2(bc\\cos\\alpha + ac\\cos\\beta + ab\\cos\\gamma)$. Daraus folgt die Projektionsformel $a^2+b^2+c^2 = 2(bc\\cos\\alpha + ac\\cos\\beta + ab\\cos\\gamma)$. ✓

**Typischer Fehler:** Den Winkel an die falsche Seite koppeln. Immer fragen: Welche Seite ist die Gegenseite zum gesuchten Winkel?`,
        [
          'Welche Seite steht bei $\\cos\\alpha$ links vom Gleichheitszeichen?',
          'Zyklische Permutation: $(a,\\alpha), (b,\\beta), (c,\\gamma)$.',
          'Die auf der linken Seite quadrierte Seite ist immer die Gegenseite des verwendeten Winkels.',
        ],
      ),
    ],

    // ── [2] Methodenwahl: SWS/SSS → Cosinus; WWS/SWW/SSW → Sinus ────────
    2: [
      matching(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Ordne jede Dreiecks-Konfiguration dem passenden Berechnungsverfahren zu.',
        [
          { left: 'SWS: $b=5$, $\\alpha=40°$, $c=7$', right: 'Cosinussatz (dritte Seite $a$ direkt berechenbar)' },
          { left: 'SSS: $a=6$, $b=5$, $c=7$', right: 'Cosinussatz (jeden Winkel einzeln berechnen)' },
          { left: 'WWS: $a=4$, $\\alpha=30°$, $\\beta=70°$', right: 'Sinussatz (direkt $b$ aus $a, \\alpha, \\beta$)' },
          { left: 'SSW: $a=5$, $b=6$, $\\alpha=40°$', right: 'Sinussatz (auf Mehrdeutigkeit achten!)' },
        ],
        `**Ansatz:** Der Winkel entscheidet, welcher Satz funktioniert. Sinussatz braucht **immer** ein Seite-Gegenwinkel-Paar als Anker. Cosinussatz braucht **immer** einen Winkel **zwischen** zwei bekannten Seiten — oder drei Seiten ohne Winkel.

**Rechnung:** Faustregel zur Methodenwahl:
- Drei Seiten (SSS) oder Seite-Winkel-Seite mit **eingeschlossenem** Winkel (SWS) → **Cosinus­satz**.
- Zwei Winkel + Seite (WWS/SWW) oder zwei Seiten + **nicht-eingeschlossener** Winkel (SSW) → **Sinus­satz**.

**Probe:** Bei SWS ist die Gegenseite des bekannten Winkels noch unbekannt — Sinussatz hätte also zwei Unbekannte in einer Gleichung und geht nicht direkt. Cosinussatz dagegen liefert die fehlende Seite in einer Zeile.

**Typischer Fehler:** SSW als "sicher eindeutig" behandeln. Die Seite liegt nicht zwischen den Partnern — das erzeugt die berüchtigte SSW-Mehrdeutigkeit.`,
        [
          'Liegt der bekannte Winkel **zwischen** zwei bekannten Seiten?',
          'Sinussatz braucht ein Seite↔Gegenwinkel-Paar.',
          'SSS = drei Seiten, SWS = Seite-Winkel-Seite, WWS = Winkel-Winkel-Seite, SSW = Seite-Seite-nicht-eingeschlossener-Winkel.',
        ],
      ),
      mc(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Gegeben sind die Seiten $a = 4$, $b = 6$ und der Winkel $\\gamma = 55°$ (eingeschlossen zwischen $a$ und $b$). Welcher Satz liefert die Seite $c$ **direkt**?',
        ['Cosinussatz', 'Sinussatz', 'Pythagoras', 'Additionstheorem'],
        0,
        `**Ansatz:** Zwei Seiten $a$ und $b$ plus der **eingeschlossene** Winkel $\\gamma$ → SWS → Cosinussatz.

**Rechnung:** $c^2 = a^2 + b^2 - 2ab\\cos\\gamma = 16 + 36 - 48 \\cos 55° \\approx 52 - 27{,}53 \\approx 24{,}47$. Also $c \\approx 4{,}95$.

**Probe:** Sinussatz würde $c/\\sin\\gamma = a/\\sin\\alpha$ benötigen — aber $\\alpha$ ist unbekannt. Also zwei Unbekannte, keine Lösung ohne Umweg.

**Typischer Fehler:** Nicht prüfen, ob der bekannte Winkel **zwischen** den bekannten Seiten liegt. Nur dann funktioniert Cosinussatz direkt.`,
        [
          'Welche Größen sind gegeben — Seiten, Winkel, Kombination?',
          'Liegt $\\gamma$ zwischen $a$ und $b$?',
          'SWS mit eingeschlossenem Winkel → Cosinussatz.',
        ],
        {
          1: 'Sinussatz bräuchte ein Seite↔Gegenwinkel-Paar. Hier kennst du zwar $\\gamma$, aber die gegenüberliegende Seite $c$ ist gerade gesucht. Zwei Unbekannte in einer Gleichung.',
          2: 'Pythagoras gilt nur bei $\\gamma = 90°$. Hier ist $\\gamma = 55°$.',
          3: 'Additionstheoreme sind für Summen/Differenzen **von Winkelargumenten** $\\sin(\\alpha \\pm \\beta)$ — nicht für Dreiecks­berechnung.',
        },
      ),
      tf(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Wenn nur drei Seiten eines Dreiecks bekannt sind, ist der Sinussatz ausreichend, um alle Winkel zu berechnen.',
        false,
        `**Ansatz:** Der Sinussatz koppelt **Seite und Gegenwinkel**. Bei reiner SSS-Konfiguration kennst du keinen einzigen Winkel — du hast also keinen Anker für den Sinussatz.

**Rechnung:** Cosinussatz nach $\\cos\\alpha = (b^2+c^2-a^2)/(2bc)$ umstellen → liefert einen Winkel. Danach kann der Sinussatz für die übrigen Winkel eingesetzt werden.

**Probe:** SSS-Beispiel $a=7, b=5, c=6$: Cosinussatz gibt $\\cos\\alpha = (25+36-49)/60 = 0{,}2 \\Rightarrow \\alpha \\approx 78{,}5°$. Erst **danach** wäre Sinussatz für $\\beta$ möglich.

**Typischer Fehler:** "Ein Satz reicht immer" — nein. SSS braucht zwingend den Cosinussatz als Einstieg; der Sinussatz ohne jeden bekannten Winkel läuft leer.`,
        [
          'Welche Größen braucht der Sinussatz als Ausgangspunkt?',
          'Ohne bekannten Winkel fehlt der Anker.',
          'Bei SSS beginnt man immer mit Cosinussatz, erst danach Sinussatz.',
        ],
      ),
      sorting(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Bringe die Schritte zur Lösung eines Dreiecks mit SSS-Konfiguration ($a, b, c$ gegeben) in die richtige Reihenfolge.',
        [
          'Dreiecksungleichung prüfen: $|b-c| < a < b+c$ (Existenz)',
          'Einen Winkel (z.B. $\\alpha$) mit Cosinussatz: $\\cos\\alpha = (b^2+c^2-a^2)/(2bc)$',
          'Zweiten Winkel mit Sinussatz: $\\sin\\beta = b\\sin\\alpha/a$',
          'Dritten Winkel aus Winkelsumme: $\\gamma = 180° - \\alpha - \\beta$',
          'Kontrolle: Liegt der größte Winkel wirklich der längsten Seite gegenüber?',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Bei SSS zuerst Existenz prüfen (Dreiecksungleichung). Dann einen Winkel per Cosinussatz knacken — erst das schafft den Anker für den schnelleren Sinussatz. Der dritte Winkel ist gratis aus $180°$-Summe.

**Rechnung:** Schritt 2 ist unvermeidlich per Cosinussatz. Schritt 3 und 4 wären auch beide per Cosinussatz möglich, sind aber per Sinussatz + Winkelsumme effizienter.

**Probe:** Kontrolle im letzten Schritt — Konsistenzcheck: größte Seite ↔ größter Winkel. Wenn das nicht passt, ist irgendwo ein Rechenfehler.

**Typischer Fehler:** Direkt mit Sinussatz starten — geht nicht, weil kein Winkel bekannt. Oder: Dreiecksungleichung überspringen, dann erhältst du eventuell $\\cos\\alpha > 1$ (entartetes Dreieck).`,
        [
          'Was prüft man immer zuerst bei reinen Seitendaten?',
          'Sinussatz braucht mindestens einen bekannten Winkel — also zuerst einen erzeugen.',
          'Winkelsumme $180°$ ist die gratis Abkürzung am Ende.',
        ],
      ),
      mc(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Gegeben $\\alpha = 35°$, $\\beta = 80°$ und $a = 4$. Welche Seite kannst du in **einem** Schritt direkt berechnen?',
        [
          '$b$ (mit Sinussatz $b = a \\sin\\beta / \\sin\\alpha$)',
          '$c$ (mit Cosinussatz)',
          'Keine — zwei Winkel reichen nicht',
          '$b$, aber nur mit Cosinussatz',
        ],
        0,
        `**Ansatz:** WWS-Konfiguration (Winkel-Winkel-Seite). Für den Sinussatz reicht ein Seite↔Gegenwinkel-Paar als Anker — $a$ mit $\\alpha$ erfüllt das. Die zweite Gleichung mit $b$ und $\\beta$ liefert $b$ direkt.

**Rechnung:** $b = a \\cdot \\sin\\beta / \\sin\\alpha = 4 \\cdot \\sin 80° / \\sin 35° \\approx 4 \\cdot 0{,}9848 / 0{,}5736 \\approx 6{,}87$.

**Probe:** $\\gamma = 180° - 35° - 80° = 65°$. Dann $c = a \\sin\\gamma / \\sin\\alpha \\approx 4 \\cdot 0{,}9063 / 0{,}5736 \\approx 6{,}32$. Plausibel: $b > c > a$ entspricht $\\beta > \\gamma > \\alpha$. ✓

**Typischer Fehler:** An WWS und sofort Cosinussatz denken — geht nicht ohne dritte Seite oder Produkt zweier Seiten mit eingeschlossenem Winkel. Sinussatz ist hier der Weg.`,
        [
          'Wie viele Winkel und wie viele Seiten sind bekannt?',
          'Sinussatz braucht ein Seite-Gegenwinkel-Paar — hast du eins?',
          'WWS-Fall: Sinussatz liefert die zweite Seite direkt.',
        ],
        {
          1: 'Cosinussatz braucht **zwei** bekannte Seiten (SWS) oder **drei** Seiten (SSS). Hier ist nur eine Seite bekannt — Cosinussatz scheitert.',
          2: 'Doch: Mit $\\alpha + \\beta + \\gamma = 180°$ kennst du aus zwei Winkeln den dritten, und der Sinussatz liefert jede fehlende Seite.',
          3: 'Cosinussatz bräuchte zwei Seiten — die hast du nicht. Sinussatz ist der richtige Weg.',
        },
      ),
    ],

    // ── [3] Pythagoras als Spezialfall ──────────────────────────────────
    3: [
      tf(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Der Cosinussatz wird bei $\\alpha = 90°$ zum Satz des Pythagoras mit $a$ als Hypotenuse.',
        true,
        `**Ansatz:** $\\cos 90° = 0$ in die Cosinussatz-Formel einsetzen.

**Rechnung:** $a^2 = b^2 + c^2 - 2bc\\cos 90° = b^2 + c^2 - 2bc \\cdot 0 = b^2 + c^2$.

**Probe:** Im rechtwinkligen Dreieck liegt die Hypotenuse dem rechten Winkel gegenüber. Da $\\alpha = 90°$ der rechte Winkel ist, ist $a$ seine Gegenseite — also die Hypotenuse. ✓

**Typischer Fehler:** Annehmen, dass die Hypotenuse immer $c$ heißt (wie in manchen Schulbüchern). Im Cosinussatz heißt die Hypotenuse die Seite, die dem $90°$-Winkel gegenüberliegt — welcher Buchstabe das ist, hängt von der Beschriftung ab.`,
        [
          'Was ergibt $\\cos 90°$?',
          'Setze in die Cosinussatz-Formel ein.',
          'Welche Seite liegt $\\alpha$ gegenüber? — Genau: $a$.',
        ],
      ),
      ni(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Im Dreieck gilt $\\alpha = 90°$, $b = 9$, $c = 12$. Wie lang ist $a$?',
        15, 0.01, '',
        `**Ansatz:** Cosinussatz mit $\\cos 90° = 0$ reduziert zu Pythagoras: $a^2 = b^2 + c^2$.

**Rechnung:** $a^2 = 81 + 144 = 225 \\Rightarrow a = 15$.

**Probe:** $(9, 12, 15) = 3 \\cdot (3, 4, 5)$ — bekanntes pythagoreisches Tripel. ✓

**Typischer Fehler:** $a = b + c = 21$ rechnen (lineare statt quadratische Addition). Pythagoras addiert **Quadrate**, nicht Längen.`,
        [
          'Welcher Winkel ist rechtwinklig? Welche Seite ist dann die Hypotenuse?',
          'Pythagoras: Quadrat der Hypotenuse = Summe der Katheten-Quadrate.',
          '$(3, 4, 5)$-Tripel erkennen: hier ist das $3 \\cdot (3,4,5)$.',
        ],
      ),
      mc(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Warum ist Pythagoras ein Spezialfall des Cosinussatzes und nicht umgekehrt?',
        [
          'Cosinussatz gilt für jedes Dreieck; der Korrekturterm $-2bc\\cos\\alpha$ verschwindet nur bei $\\alpha=90°$',
          'Pythagoras wurde zuerst entdeckt, Cosinussatz kam historisch später',
          'Pythagoras gilt auch für stumpfwinklige Dreiecke, Cosinussatz nicht',
          'Beide Sätze sind gleich allgemein — die Bezeichnung "Spezialfall" ist willkürlich',
        ],
        0,
        `**Ansatz:** Ein Gesetz $G$ ist der Spezialfall eines allgemeineren Gesetzes $A$, wenn $G$ aus $A$ durch Setzen einer Bedingung (hier $\\alpha = 90°$) folgt — nicht umgekehrt.

**Rechnung:** Aus dem Cosinussatz $a^2 = b^2+c^2 - 2bc\\cos\\alpha$ folgt durch Einsetzen $\\alpha = 90°$ der Pythagoras. Aus Pythagoras allein folgt aber der Cosinussatz nicht; er beschreibt nur rechtwinklige Dreiecke.

**Probe:** Für $\\alpha = 60°$ ist $a^2 = b^2+c^2 - bc$ (Cosinussatz), aber Pythagoras $a^2 = b^2 + c^2$ stimmt hier nicht. Also ist Pythagoras enger.

**Typischer Fehler:** Verwechseln, welches Gesetz aus welchem folgt. Merke: der allgemeinere Satz enthält den speziellen — hier Cosinussatz ⊃ Pythagoras.`,
        [
          'Welches Gesetz gilt für **jedes** Dreieck?',
          'Welche Zusatzbedingung engt den Cosinussatz auf Pythagoras ein?',
          'Der Korrekturterm $-2bc\\cos\\alpha$ verschwindet genau bei $\\alpha = 90°$.',
        ],
        {
          1: 'Historische Reihenfolge ist für die mathematische Hierarchie irrelevant. Mathematisch folgt Pythagoras aus dem Cosinussatz durch Einsetzen $\\alpha = 90°$.',
          2: 'Falsch herum: **Cosinussatz** gilt für stumpfwinklige Dreiecke, Pythagoras **nicht** (er verlangt einen rechten Winkel).',
          3: 'Es gibt eine echte Hierarchie: Cosinussatz ⊃ Pythagoras. Die Bedingung $\\alpha = 90°$ schränkt streng ein.',
        },
      ),
      ni(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Ein rechtwinkliges Dreieck hat Katheten $b = 7$ und $c = 24$. Wie lang ist die Hypotenuse?',
        25, 0.01, '',
        `**Ansatz:** Rechter Winkel zwischen $b$ und $c$ → Gegenseite $a$ ist Hypotenuse → $a^2 = b^2 + c^2$.

**Rechnung:** $a^2 = 49 + 576 = 625 \\Rightarrow a = 25$.

**Probe:** $(7, 24, 25)$ ist ein pythagoreisches Tripel. ✓

**Typischer Fehler:** Hypotenuse und Kathete verwechseln — dann rechnet man versehentlich $a = \\sqrt{c^2 - b^2} = \\sqrt{527} \\approx 22{,}96$. Merke: Hypotenuse **ist länger** als jede Kathete.`,
        [
          'Welche Seite liegt dem rechten Winkel gegenüber?',
          'Pythagoras: Hypotenuse² = Kathete₁² + Kathete₂².',
          '$(7, 24, 25)$ — bekanntes Tripel auswendig?',
        ],
      ),
      tf(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Für ein Dreieck mit $b=5$, $c=12$, $a=13$ gilt der Satz des Pythagoras — also ist das Dreieck rechtwinklig mit $\\alpha = 90°$.',
        true,
        `**Ansatz:** Umkehrung des Pythagoras: gilt $a^2 = b^2+c^2$, so ist das Dreieck rechtwinklig, und der rechte Winkel liegt gegenüber der Seite $a$.

**Rechnung:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. ✓ Also $\\alpha = 90°$ (weil $a$ die Gegenseite von $\\alpha$ ist).

**Probe:** Cosinussatz check: $\\cos\\alpha = (25+144-169)/(2 \\cdot 5 \\cdot 12) = 0/120 = 0 \\Rightarrow \\alpha = 90°$. ✓

**Typischer Fehler:** Umkehrung vergessen. Pythagoras "vorwärts" sagt: rechtwinklig → $a^2=b^2+c^2$. Umkehrung sagt: $a^2=b^2+c^2$ → rechtwinklig. Beide Richtungen sind wahr, aber Schüler kennen oft nur die Hin-Richtung.`,
        [
          'Prüfe $5^2 + 12^2$ gegen $13^2$.',
          'Umkehrung von Pythagoras: Wenn $a^2 = b^2+c^2$, dann ist $\\alpha = 90°$.',
          'Cosinussatz liefert $\\cos\\alpha = 0 \\Rightarrow \\alpha = 90°$.',
        ],
      ),
    ],

    // ── [4] Seite und Gegenwinkel gehören zusammen ──────────────────────
    4: [
      mc(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": In einem Dreieck gilt $\\alpha = 30°$, $\\beta = 80°$, $a = 5$. Welche Gleichung liefert $b$?',
        [
          '$\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta}$',
          '$\\dfrac{a}{\\sin\\beta} = \\dfrac{b}{\\sin\\alpha}$',
          '$\\dfrac{a}{\\cos\\alpha} = \\dfrac{b}{\\cos\\beta}$',
          '$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$',
        ],
        0,
        `**Ansatz:** Sinussatz paart jede Seite mit ihrem **Gegen**winkel. Seite $a$ gehört zu $\\alpha$, Seite $b$ zu $\\beta$.

**Rechnung:** $b = a \\cdot \\dfrac{\\sin\\beta}{\\sin\\alpha} = 5 \\cdot \\dfrac{\\sin 80°}{\\sin 30°} = 5 \\cdot \\dfrac{0{,}9848}{0{,}5} \\approx 9{,}85$.

**Probe:** $\\beta > \\alpha \\Rightarrow b > a$ — passt: $9{,}85 > 5$. ✓

**Typischer Fehler:** Indexe tauschen (Option B) — das führt zu $b = a\\sin\\alpha/\\sin\\beta = 5 \\cdot 0{,}5/0{,}9848 \\approx 2{,}54$. Widerspricht "größerer Gegenwinkel → größere Seite".`,
        [
          'Welcher Winkel liegt der Seite $a$ gegenüber?',
          'Sinussatz: Seite / Sinus(Gegenwinkel) = konstant.',
          'Seite $a$ gegenüber $\\alpha$, Seite $b$ gegenüber $\\beta$ — niemals kreuzen.',
        ],
        {
          1: 'Indexe vertauscht. Beim Sinussatz muss Seite mit ihrem **eigenen** Gegenwinkel gepaart werden. Sonst invertierst du das Verhältnis und bekommst den Kehrwert.',
          2: 'Das wäre ein "Cosinussatz"-Quotient, den es nicht gibt. Der Sinussatz arbeitet mit Sinus, nicht Cosinus.',
          3: 'Multiplikation statt Division. Sinussatz ist ein Quotient: Seite **durch** Sinus.',
        },
      ),
      matching(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Ordne jeder Ecke (mit Winkel) die gegenüberliegende Seite zu.',
        [
          { left: 'Ecke $A$ (Winkel $\\alpha$)', right: 'Seite $a$' },
          { left: 'Ecke $B$ (Winkel $\\beta$)', right: 'Seite $b$' },
          { left: 'Ecke $C$ (Winkel $\\gamma$)', right: 'Seite $c$' },
        ],
        `**Ansatz:** Standardbenennung: Ecke $A$ hat Winkel $\\alpha$, die gegenüberliegende Seite (zwischen $B$ und $C$) heißt $a$. Analog für $B/\\beta/b$ und $C/\\gamma/c$.

**Rechnung:** Die Seite $a$ ist die Verbindung der beiden **anderen** Ecken $B$ und $C$ — die Seite, die $A$ nicht berührt.

**Probe:** Geometrisch liegt Seite $a$ dem Eckpunkt $A$ gegenüber (sie hat keine gemeinsame Ecke mit $A$). Also: $A/\\alpha \\leftrightarrow a$.

**Typischer Fehler:** Die Seite zwischen $A$ und $B$ wäre nicht $a$, nicht $b$ — sondern $c$ (sie liegt gegenüber $C$). Visualisieren hilft!`,
        [
          'Welche Seite berührt Ecke $A$ **nicht**?',
          'Großbuchstaben = Ecken (+ griechischer Winkel). Kleinbuchstaben = gegenüberliegende Seiten.',
          'Skizze anfertigen: dreieck zeichnen und Seiten mit Kleinbuchstaben beschriften, die gegenüberliegen.',
        ],
      ),
      tf(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Wenn in einem Dreieck $\\alpha < \\beta$, dann ist $a < b$.',
        true,
        `**Ansatz:** Aus dem Sinussatz $a/\\sin\\alpha = b/\\sin\\beta$ folgt $a/b = \\sin\\alpha/\\sin\\beta$. Für Winkel im Bereich $0° < \\alpha < \\beta < 180°$ (innerhalb eines Dreiecks, mit $\\alpha+\\beta<180°$) ist $\\sin$ strikt bis $90°$ monoton steigend, und bei stumpfen Winkeln gilt weiterhin $\\sin\\beta > \\sin\\alpha$, solange beide Winkel **in einem Dreieck** sind.

**Rechnung:** $\\sin 30° = 0{,}5 < \\sin 80° \\approx 0{,}985$, also $a/b \\approx 0{,}508$, also $a < b$.

**Probe:** Aussage "Gegenüber dem größeren Winkel liegt die längere Seite" — Schulsatz, gilt in jedem Dreieck.

**Typischer Fehler:** Meinen, dass $\\sin$ auf $[0°, 180°]$ monoton sei. $\\sin$ ist auf $[0°, 180°]$ **nicht** monoton (steigt bis $90°$, fällt dann), aber im Dreieck ist die Aussage trotzdem wahr — Beweis aus dem Sinussatz und der Winkelsummenbeschränkung $\\alpha+\\beta<180°$.`,
        [
          'Sinussatz liefert ein Verhältnis $a/b$.',
          '"Größerer Gegenwinkel, größere Seite" — Schulfaustregel.',
          'Beachte: $\\sin$ ist **nicht** auf $[0°,180°]$ monoton, aber im Dreieck kombiniert mit der Winkelsumme schon.',
        ],
      ),
      ni(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": In einem Dreieck ist $b = 10$, $\\beta = 50°$, $\\gamma = 70°$. Wie lang ist die Seite $c$ (auf 2 Nachkommastellen)?',
        12.27, 0.05, '',
        `**Ansatz:** Bekannt: Seite $b$ mit Gegenwinkel $\\beta$, und Winkel $\\gamma$. Gesucht: Seite $c$ (Gegenseite zu $\\gamma$) → Sinussatz.

**Rechnung:** $\\dfrac{c}{\\sin\\gamma} = \\dfrac{b}{\\sin\\beta} \\Rightarrow c = b \\cdot \\dfrac{\\sin\\gamma}{\\sin\\beta} = 10 \\cdot \\dfrac{\\sin 70°}{\\sin 50°} = 10 \\cdot \\dfrac{0{,}9397}{0{,}7660} \\approx 12{,}27$.

**Probe:** $\\gamma > \\beta \\Rightarrow c > b$: $12{,}27 > 10$. ✓

**Typischer Fehler:** Winkelpaar falsch zuordnen, also $c/\\sin\\beta = b/\\sin\\gamma$ — dann ergibt sich $c \\approx 8{,}15$, also fälschlich $c < b$, obwohl $\\gamma$ der größere Winkel ist.`,
        [
          'Welcher Winkel liegt $c$ gegenüber?',
          'Sinussatz: $c/\\sin\\gamma = b/\\sin\\beta$.',
          'Rechner auf DEG; $\\sin 50° \\approx 0{,}766$, $\\sin 70° \\approx 0{,}940$.',
        ],
      ),
      mc(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": In einem Dreieck sind $a = 8$, $b = 5$, $c = 6$. Welcher Winkel ist der **größte**?',
        ['$\\alpha$ (gegenüber $a$)', '$\\beta$ (gegenüber $b$)', '$\\gamma$ (gegenüber $c$)', 'Alle gleich'],
        0,
        `**Ansatz:** Gegenüber der längsten Seite liegt der größte Winkel. Die längste Seite ist $a = 8$, also ist $\\alpha$ der größte Winkel.

**Rechnung:** Verifikation per Cosinussatz. $\\cos\\alpha = (25+36-64)/(2 \\cdot 5 \\cdot 6) = -3/60 = -0{,}05 \\Rightarrow \\alpha \\approx 92{,}9°$ (stumpf).
$\\cos\\beta = (64+36-25)/96 = 75/96 \\approx 0{,}781 \\Rightarrow \\beta \\approx 38{,}6°$.
$\\cos\\gamma = (64+25-36)/80 = 53/80 = 0{,}6625 \\Rightarrow \\gamma \\approx 48{,}5°$.

**Probe:** Summe: $92{,}9 + 38{,}6 + 48{,}5 = 180{,}0$. ✓ $\\alpha$ ist der größte.

**Typischer Fehler:** "Kürzeste Seite → größter Winkel" annehmen — genau umgekehrt! Die Sinussatz-Beziehung Seite∝Sinus(Gegenwinkel) verdreht man leicht.`,
        [
          'Welche Seite ist am längsten?',
          'Regel: größte Seite ↔ größter Gegenwinkel.',
          'Wer möchte, kann mit dem Cosinussatz verifizieren.',
        ],
        {
          1: '$b = 5$ ist die **kürzeste** Seite — also liegt ihr der **kleinste** Winkel gegenüber. Umgekehrte Zuordnung.',
          2: '$c = 6$ ist mittlere Länge, also ist $\\gamma$ mittlerer Winkel, nicht der größte.',
          3: 'Nur im gleichseitigen Dreieck gleich. Hier sind die Seiten verschieden, also auch die Winkel.',
        },
      ),
    ],

    // ── [5] SSW-Mehrdeutigkeit ──────────────────────────────────────────
    5: [
      mc(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a = 10$, $b = 8$, $\\alpha = 40°$ (SSW-Fall). Wie viele Dreiecke erfüllen diese Bedingungen?',
        ['Genau eines', 'Zwei verschiedene', 'Keines', 'Unendlich viele'],
        0,
        `**Ansatz:** SSW-Mehrdeutigkeit tritt nur auf, wenn die Seite **gegenüber** dem bekannten Winkel kürzer ist als die andere bekannte Seite. Hier: Gegenseite zu $\\alpha$ ist $a = 10$, andere Seite $b = 8$. Da $a > b$, ist die Situation **eindeutig**.

**Rechnung:** Sinussatz: $\\sin\\beta = b \\sin\\alpha / a = 8 \\cdot \\sin 40° / 10 = 8 \\cdot 0{,}6428 / 10 \\approx 0{,}5142 \\Rightarrow \\beta \\approx 30{,}95°$. Ein zweiter Wert $\\beta_2 = 180° - 30{,}95° = 149{,}05°$ würde $\\alpha + \\beta_2 = 189° > 180°$ ergeben — geometrisch unmöglich. Nur eine Lösung.

**Probe:** Faustregel: Wenn die bekannte Seite **gegenüber** dem Winkel die **längere** ist, gibt es immer genau eine Lösung. Das ist hier gegeben ($a > b$).

**Typischer Fehler:** Automatisch annehmen, SSW gibt immer zwei Dreiecke. Der Mehrdeutigkeits-Fall tritt nur auf, wenn die Gegenseite zum bekannten Winkel **kürzer** als die andere bekannte Seite ist.`,
        [
          'Welche Seite liegt dem bekannten Winkel gegenüber — $a$ oder $b$?',
          'Faustregel: Ist die Gegenseite länger als die Partner-Seite?',
          'Berechne $\\beta$, prüfe $\\alpha + \\beta_2 < 180°$ für eine zweite Lösung.',
        ],
        {
          1: 'Nur, wenn die Gegenseite zum Winkel **kürzer** wäre. Hier ist $a = 10 > 8 = b$, also eindeutig. $\\beta_2 = 180° - \\beta_1$ wäre zusammen mit $\\alpha$ über $180°$.',
          2: '$\\sin\\beta = 0{,}514 < 1$ — existiert. Dreieck existiert. Nur bei $\\sin\\beta > 1$ gäbe es keine Lösung.',
          3: 'Drei feste Größen bestimmen das Dreieck bis auf endliche Alternativen. Unendlich wäre nur bei rein Winkeln (ähnliche Dreiecke).',
        },
      ),
      tf(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Bei SSW-Konfigurationen mit $a=7$, $b=10$, $\\alpha=30°$ gibt es zwei geometrisch mögliche Dreiecke.',
        true,
        `**Ansatz:** Gegenseite zu $\\alpha$ ist $a = 7$, Partner-Seite $b = 10$. Da $a < b$, ist SSW mehrdeutig — **wenn** die Höhe $h = b\\sin\\alpha < a$ ist.

**Rechnung:** $h = b \\sin\\alpha = 10 \\cdot 0{,}5 = 5$. Da $5 < 7 < 10$ (also $h < a < b$), existieren zwei Dreiecke.

Beide Lösungen: $\\sin\\beta = b\\sin\\alpha/a = 10 \\cdot 0{,}5/7 \\approx 0{,}714 \\Rightarrow \\beta_1 \\approx 45{,}6°$ oder $\\beta_2 = 180° - 45{,}6° \\approx 134{,}4°$. Beide mit $\\alpha = 30°$ zulässig (Summen $75{,}6°$ bzw. $164{,}4°$, beide $< 180°$).

**Probe:** Skizze: Zeichne $\\alpha$ an Ecke $A$, markiere $b = 10$ auf dem einen Schenkel. Ein Kreis mit Radius $a=7$ um das andere Ende schneidet den zweiten Schenkel **zweimal**, weil der Radius größer als die Höhe ist.

**Typischer Fehler:** Nur die erste Lösung $\\beta_1$ angeben und die stumpfe zweite vergessen. Faustregel für SSW: Immer prüfen, ob $\\beta_2 = 180° - \\beta_1$ zusammen mit $\\alpha$ unter $180°$ bleibt.`,
        [
          'Wie groß ist die Höhe $h = b\\sin\\alpha$?',
          'Vergleiche $h$, $a$ und $b$.',
          'Für zwei Lösungen muss $h < a < b$ gelten.',
        ],
      ),
      ni(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a = 4$, $b = 6$, $\\alpha = 30°$. Wie viele gültige Lösungen für das Dreieck gibt es? (Antwort als ganze Zahl: 0, 1 oder 2)',
        2, 0, '',
        `**Ansatz:** Höhenvergleich: $h = b\\sin\\alpha = 6 \\cdot 0{,}5 = 3$. Da $h = 3 < 4 = a < 6 = b$, gibt es zwei Lösungen.

**Rechnung:** $\\sin\\beta = b\\sin\\alpha/a = 6 \\cdot 0{,}5/4 = 0{,}75 \\Rightarrow \\beta_1 \\approx 48{,}59°$, $\\beta_2 = 180° - 48{,}59° \\approx 131{,}41°$. Beide kombiniert mit $\\alpha = 30°$ ergeben Summen $< 180°$.

**Probe:** Für $\\beta_1$: $\\gamma_1 \\approx 101{,}41°$. Für $\\beta_2$: $\\gamma_2 \\approx 18{,}59°$. Beide geometrisch realisierbar. ✓

**Typischer Fehler:** $h$ nicht berechnen und einfach Sinussatz ansetzen — dann bekommt man $\\sin\\beta = 0{,}75$ und denkt, es gibt nur eine Lösung, weil der Rechner nur $\\beta_1$ liefert.`,
        [
          'Berechne $h = b\\sin\\alpha$.',
          'Fälle: $h > a$ → 0 Lösungen; $h = a$ → 1 (rechtwinklig); $h < a < b$ → 2; $a \\geq b$ → 1.',
          'Hier: $h = 3, a = 4, b = 6$.',
        ],
      ),
      mc(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a = 3$, $b = 10$, $\\alpha = 30°$. Wie viele Lösungen?',
        ['Keine', 'Genau eine', 'Genau zwei', 'Unendlich viele'],
        0,
        `**Ansatz:** Höhe $h = b\\sin\\alpha = 10 \\cdot 0{,}5 = 5$. Da $a = 3 < 5 = h$, erreicht der Kreis mit Radius $a$ den Zielschenkel **nicht** — kein Schnittpunkt, also kein Dreieck.

**Rechnung:** Alternativ per Sinussatz: $\\sin\\beta = b\\sin\\alpha/a = 10 \\cdot 0{,}5/3 \\approx 1{,}667 > 1$ — unmöglich, weil $|\\sin\\beta| \\leq 1$.

**Probe:** Geometrische Skizze: Öffne $\\alpha = 30°$ an Ecke $A$. Auf einem Schenkel liegt $b=10$. Ein Kreis mit Radius $a = 3$ um das Ende von $b$ reicht nicht bis zum anderen Schenkel. Kein Dreieck möglich.

**Typischer Fehler:** Beim Rechner $\\arcsin(1{,}667)$ eingeben und eine Fehlermeldung bekommen — ohne zu merken, dass das bedeutet: kein Dreieck.`,
        [
          'Berechne die Höhe $h = b\\sin\\alpha$.',
          'Vergleiche $h$ mit $a$.',
          'Wenn $a < h$: Kreis erreicht Zielschenkel nicht — keine Lösung.',
        ],
        {
          1: '$\\sin\\beta = 1{,}667 > 1$ ist unmöglich. Es gibt auch keine einzelne rechtwinklige Lösung — dafür müsste $a = h = 5$ sein.',
          2: 'Zwei Lösungen gibt es nur, wenn $h < a < b$. Hier ist $a < h$, also keine.',
          3: 'Bei festen $a, b, \\alpha$ ist das Dreieck diskret bestimmt (0, 1 oder 2 Lösungen), nie unendlich.',
        },
      ),
      sorting(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Bringe die Schritte zur Lösung eines SSW-Falls (gegeben: $a, b, \\alpha$) in die richtige Reihenfolge.',
        [
          'Höhe $h = b\\sin\\alpha$ berechnen',
          'Fallunterscheidung: $a < h$ (keine), $a = h$ (eine, rechtwinklig), $h < a < b$ (zwei), $a \\geq b$ (eine)',
          'Sinussatz: $\\sin\\beta_1 = b\\sin\\alpha/a$ → erster Winkel $\\beta_1$',
          'Wenn zwei Lösungen erwartet: zweiten Winkel $\\beta_2 = 180° - \\beta_1$ bilden und Winkelsumme prüfen',
          'Restwinkel $\\gamma = 180° - \\alpha - \\beta$ und Seite $c$ per Sinussatz',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** SSW ist der einzige Dreiecks-Fall mit möglicher Mehrdeutigkeit. Die Höhe $h$ ist das entscheidende Maß — sie trennt die Fälle.

**Rechnung:** $h = b\\sin\\alpha$ ist die Länge der Senkrechten von der Ecke $C$ auf den Schenkel von $\\alpha$. Wenn $a$ (der Radius des "Trefferkreises" um die Endecke von $b$) kleiner als $h$ ist, erreicht er den Zielschenkel nicht. Gleich $h$: tangentiale Berührung = 1 rechtwinkliges Dreieck. Zwischen $h$ und $b$: zwei Schnittpunkte. Ab $a \\geq b$: liegt nur **ein** Schnittpunkt auf dem "vorderen" Halbstrahl.

**Probe:** Bei $a \\geq b$ ist $\\sin\\beta_2 = 180° - \\beta_1$ mit $\\alpha$ immer über $180°$ — deshalb fällt die zweite Lösung weg.

**Typischer Fehler:** Schritt 1+2 überspringen, direkt den Sinussatz ansetzen, zweiten Winkel $\\beta_2$ vergessen — klassischer Prüfungsfehler bei SSW.`,
        [
          'Was ist die "Höhen-Analyse" bei SSW?',
          'Erst Fälle klären, dann rechnen — nicht umgekehrt.',
          'Zweite Lösung $\\beta_2 = 180° - \\beta_1$ nur zulassen, wenn $\\alpha+\\beta_2 < 180°$.',
        ],
      ),
    ],

  },

}
