// ═══════════════════════════════════════════════════════════════════════════
// Technische Mechanik — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { [subGoalIndex]: Exercise[] }
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const technischeMechanikSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-4 — Reibung  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-4': {

    // ── [0] Coulombsches Reibgesetz: $F_R = \mu F_N$ ────────────────────
    0: [
      ni(
        'Sub-Goal "Coulombsches Reibgesetz: $F_R = \\mu F_N$": Eine Kiste (m = 25 kg) wird auf horizontalem Boden mit Gleitreibwert $\\mu = 0{,}25$ gezogen. Wie groß ist die Reibkraft? ($g = 9{,}81\\,\\text{m/s}^2$; auf 2 Nachkommastellen in Newton)',
        61.31, 0.1, 'N',
        `**Ansatz:** Auf horizontalem Boden trägt die Normalkraft das volle Gewicht: $F_N = mg$. Coulombsches Reibgesetz: $F_R = \\mu F_N$.

**Rechnung:** $F_N = 25 \\cdot 9{,}81 = 245{,}25\\,\\text{N}$. $F_R = 0{,}25 \\cdot 245{,}25 \\approx 61{,}31\\,\\text{N}$.

**Probe:** Einheitencheck: $[\\mu] \\cdot \\text{N} = \\text{N}$ (dimensionslos × Kraft). ✓ Größenordnung: Reibkraft $\\approx 1/4$ des Gewichts (da $\\mu = 0{,}25$). ✓

**Typischer Fehler:** $F_R$ direkt aus $\\mu \\cdot m$ ohne $g$ rechnen: $0{,}25 \\cdot 25 = 6{,}25$ — bekommt kg statt N, also einheitlich falsch. Das Reibgesetz braucht die **Kraft** $F_N$, nicht die Masse.`,
        [
          'Was ist die Normalkraft auf horizontalem Boden?',
          '$F_N = m \\cdot g$.',
          'Dann $F_R = \\mu \\cdot F_N$.',
        ],
      ),
      mc(
        'Sub-Goal "Coulombsches Reibgesetz: $F_R = \\mu F_N$": Ein Block liegt auf horizontalem Boden. Eine vertikale Zusatzkraft $F_Z = 50\\,\\text{N}$ drückt ihn **zusätzlich** nach unten. Der Block wiegt $mg = 100\\,\\text{N}$ und $\\mu = 0{,}4$. Wie groß ist die Reibkraft beim Gleiten?',
        ['$40\\,\\text{N}$', '$60\\,\\text{N}$', '$20\\,\\text{N}$', '$100\\,\\text{N}$'],
        1,
        `**Ansatz:** Die Normalkraft setzt sich aus **allen** nach unten wirkenden Kräften zusammen. $F_N = mg + F_Z$ wenn $F_Z$ zusätzlich drückt.

**Rechnung:** $F_N = 100 + 50 = 150\\,\\text{N}$. $F_R = \\mu F_N = 0{,}4 \\cdot 150 = 60\\,\\text{N}$.

**Probe:** Freikörperbild: Gewicht $100\\,\\text{N}$↓, Zusatzkraft $50\\,\\text{N}$↓, Normalkraft $F_N$↑. Vertikales Gleichgewicht: $F_N = 150\\,\\text{N}$. ✓

**Typischer Fehler:** $F_N = mg$ automatisch annehmen, ohne Freikörperbild zu prüfen. Jede vertikale Zusatzkraft (drückend oder ziehend) ändert die Normalkraft.`,
        [
          'Zeichne ein Freikörperbild mit allen vertikalen Kräften.',
          'Normalkraft ist die Reaktion auf alles, was nach unten drückt.',
          '$F_N = mg + F_Z$ (bei drückender Zusatzkraft).',
        ],
        {
          0: '$40\\,\\text{N}$ ergibt sich nur bei $F_N = mg = 100\\,\\text{N}$ (Zusatzkraft ignoriert). Die Zusatzkraft drückt den Block stärker auf den Boden und erhöht $F_N$.',
          2: '$20\\,\\text{N}$ wäre korrekt bei $F_N = 50\\,\\text{N}$ — aber die Summe der drückenden Kräfte ist $150\\,\\text{N}$, nicht $50\\,\\text{N}$.',
          3: 'Das ist das Gewicht selbst ($mg = 100\\,\\text{N}$), keine Reibkraft. Reibkraft folgt aus Coulomb mit Faktor $\\mu = 0{,}4$.',
        },
      ),
      tf(
        'Sub-Goal "Coulombsches Reibgesetz: $F_R = \\mu F_N$": Die Reibkraft $F_R = \\mu F_N$ hängt von der Auflagefläche ab: je größer die Kontaktfläche, desto größer die Reibkraft.',
        false,
        `**Ansatz:** Das Coulombsche Reibgesetz enthält nur Reibwert $\\mu$ und Normalkraft $F_N$ — die Kontaktfläche tritt nicht auf. Die Reibkraft ist **flächenunabhängig**.

**Rechnung:** Mikroskopisch: Die reale Kontaktfläche (Atom-Berührpunkte) ist proportional zum Druck. Bei kleinerer scheinbarer Fläche ist der Druck höher, sodass die reale Berührung gleich bleibt. Netto: $F_R$ hängt nur von $F_N$ und $\\mu$ ab.

**Probe:** Autoreifen-Beispiel: Ein breiter Reifen hat nicht mehr Bremskraft als ein schmaler bei gleicher Last — zumindest nach Coulomb. Praxisabweichungen (Gummi, Temperatur) sind Modellgrenzen.

**Typischer Fehler:** Anschauliche Annahme "größere Fläche = mehr Reibung" — klassischer Alltagsirrtum. Coulomb: nur Normalkraft und Reibwert zählen.`,
        [
          'Schau in die Formel: $F_R = \\mu \\cdot F_N$ — welche Größen stehen drin?',
          'Die Kontaktfläche taucht nicht auf.',
          'Mikroskopisch: reale Kontaktfläche skaliert mit Druck.',
        ],
      ),
      matching(
        'Sub-Goal "Coulombsches Reibgesetz: $F_R = \\mu F_N$": Ordne jedem Materialpaar den typischen Gleitreibwert zu.',
        [
          { left: 'Stahl / Stahl (trocken)', right: '$\\mu \\approx 0{,}15$' },
          { left: 'Stahl / Stahl (geschmiert)', right: '$\\mu \\approx 0{,}05$' },
          { left: 'Gummi / Asphalt (trocken)', right: '$\\mu \\approx 0{,}8$' },
          { left: 'Eis / Stahl', right: '$\\mu \\approx 0{,}02$' },
        ],
        `**Ansatz:** Reibwerte sind materialpaarabhängig — nicht materialspezifisch pro Körper. Schmierung und Oberflächenbeschaffenheit reduzieren $\\mu$ drastisch.

**Rechnung / Erfahrungswerte:** Gummi/Asphalt hoch (gute Traktion für Autos), geschmiertes Stahl-Stahl niedrig (Lagerauslegung), Eis extrem niedrig. Die Werte sind Faustregel; in Prüfungen stehen sie meistens in einer Tabelle oder in der Aufgabe.

**Probe:** Fahrzeugbremsweg $\\propto 1/\\mu$: Auf Eis ($\\mu \\approx 0{,}02$) ist der Bremsweg $\\approx 40 \\times$ länger als auf trockenem Asphalt ($\\mu \\approx 0{,}8$). Konsistent mit Alltagserfahrung.

**Typischer Fehler:** Reibwert nur einer Materialkomponente zuordnen ("Reibwert von Stahl") — $\\mu$ ist eine **Paareigenschaft** beider Oberflächen.`,
        [
          'Gummi auf Asphalt ist das Paar mit hoher Traktion.',
          'Schmierung drückt $\\mu$ stark nach unten.',
          'Eis ist berüchtigt niedrig.',
        ],
      ),
      ni(
        'Sub-Goal "Coulombsches Reibgesetz: $F_R = \\mu F_N$": Ein Werkstück (m = 40 kg) soll auf horizontalem Boden gezogen werden. Welcher **Mindestwert** des Gleitreibwerts $\\mu$ ist mit einer Zugkraft $F_Z = 100\\,\\text{N}$ gerade noch überwindbar? (Antwort auf 3 Nachkommastellen)',
        0.255, 0.002, '',
        `**Ansatz:** Für gleichmäßiges Gleiten: $F_Z = F_R = \\mu F_N$. Auf horizontaler Fläche $F_N = mg$. Nach $\\mu$ auflösen.

**Rechnung:** $\\mu = F_Z / (mg) = 100 / (40 \\cdot 9{,}81) = 100 / 392{,}4 \\approx 0{,}2549$.

**Probe:** Zugkraft-Anteil am Gewicht: $100 / 392{,}4 \\approx 25{,}5\\,\\%$. Bei $\\mu = 0{,}255$ ist genau diese Zugkraft nötig. ✓

**Typischer Fehler:** $\\mu = F_Z / m$ rechnen (Erdbeschleunigung vergessen): $100/40 = 2{,}5$ — unmöglich, weil $\\mu$ in der Praxis fast nie über $1{,}5$ liegt. Immer $F_N = mg$ (mit $g$!) benutzen.`,
        [
          '$F_Z = F_R$ im gerade-noch-überwindbaren Fall.',
          '$F_R = \\mu \\cdot mg$.',
          'Nach $\\mu$ auflösen.',
        ],
      ),
    ],

    // ── [1] Haftreibung > Gleitreibung ──────────────────────────────────
    1: [
      tf(
        'Sub-Goal "Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)": Um einen ruhenden Körper in Bewegung zu setzen, muss die aufgebrachte Kraft die Haftreibung $\\mu_0 F_N$ überschreiten — sobald der Körper gleitet, reicht die geringere Gleitreibung $\\mu F_N$.',
        true,
        `**Ansatz:** Haftreibwert $\\mu_0$ gilt für den ruhenden Körper (bis zum Losreißen). Sobald der Körper gleitet, sinkt der effektive Reibwert auf den Gleitreibwert $\\mu < \\mu_0$.

**Rechnung:** Maximale Haftkraft $F_{H,\\text{max}} = \\mu_0 F_N$ ist die Schwelle. Darüber: Körper löst sich, Reibung fällt auf $\\mu F_N$.

**Probe:** Klassische Erfahrung: Einen schweren Schrank anschieben erfordert zunächst kraftvolles Drücken, dann gleitet er mit weniger Kraft. Genau $\\mu_0 > \\mu$ beschreibt das.

**Typischer Fehler:** Einen einzigen "Reibwert" annehmen. In Prüfungen wird oft **beides** gefragt: Losreißkraft (Haft) und Gleitreibkraft — mit unterschiedlichen $\\mu$-Werten.`,
        [
          'Welcher Reibwert gilt vor, welcher nach dem Losreißen?',
          'Vergleiche $\\mu_0$ und $\\mu$.',
          'Alltagsbeispiel: schwerer Schrank anschieben.',
        ],
      ),
      ni(
        'Sub-Goal "Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)": Ein Block (m = 20 kg) auf horizontalem Boden hat Haftreibwert $\\mu_0 = 0{,}35$ und Gleitreibwert $\\mu = 0{,}25$. Welche Zugkraft ist **minimal nötig**, um den Block in Bewegung zu setzen? ($g = 9{,}81$, auf 1 Nachkommastelle in N)',
        68.7, 0.2, 'N',
        `**Ansatz:** Zum Losreißen muss die Zugkraft die maximale Haftreibung überschreiten: $F_Z > \\mu_0 F_N$. An der Grenze gilt Gleichheit.

**Rechnung:** $F_N = mg = 20 \\cdot 9{,}81 = 196{,}2\\,\\text{N}$. $F_{Z,\\text{min}} = \\mu_0 \\cdot F_N = 0{,}35 \\cdot 196{,}2 \\approx 68{,}67\\,\\text{N}$.

**Probe:** Nach dem Losreißen genügt $\\mu \\cdot F_N = 0{,}25 \\cdot 196{,}2 \\approx 49{,}05\\,\\text{N}$ zum Gleiterhalten — deutlich weniger. Deshalb kann ein Körper ruckartig starten und dann gleichmäßig gleiten.

**Typischer Fehler:** Den Gleitreibwert $\\mu = 0{,}25$ nehmen und $49{,}05\\,\\text{N}$ angeben — das wäre nicht genug, um ihn überhaupt in Bewegung zu bringen. Losreißen braucht **Haftreibwert**.`,
        [
          'Welcher Reibwert gilt für den ruhenden Körper?',
          '$F_{Z,\\text{min}} = \\mu_0 \\cdot F_N$.',
          '$F_N = m \\cdot g$ auf horizontalem Boden.',
        ],
      ),
      mc(
        'Sub-Goal "Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)": Ein Block steht still. Ein waagerechter Zug $F_Z = 30\\,\\text{N}$ wirkt, während die maximale Haftreibung $\\mu_0 F_N = 50\\,\\text{N}$ beträgt. Wie groß ist die Reibkraft gerade jetzt?',
        ['$30\\,\\text{N}$ (entgegen $F_Z$)', '$50\\,\\text{N}$ (maximale Haft)', '$\\mu F_N$ (Gleitreibung)', '$0\\,\\text{N}$ (keine Bewegung)'],
        0,
        `**Ansatz:** Haftreibung ist eine **passive Zwangskraft** — sie stellt sich gerade so ein, dass Gleichgewicht herrscht, **solange** sie nicht ihre Obergrenze $\\mu_0 F_N$ überschreitet.

**Rechnung:** Da $F_Z = 30\\,\\text{N} < 50\\,\\text{N} = F_{H,\\text{max}}$, bleibt der Block stehen. Reibkraft $= F_Z = 30\\,\\text{N}$ (entgegengerichtet). Sie schöpft die maximal mögliche Haftreibung **nicht aus**.

**Probe:** Kräftegleichgewicht horizontal: $F_Z - F_R = 0$. Die Haftreibung passt sich an. Erst bei $F_Z > 50\\,\\text{N}$ setzt Bewegung ein.

**Typischer Fehler:** Annehmen, Reibkraft sei immer $\\mu_0 F_N$ (also $50\\,\\text{N}$). Das ist die **Obergrenze**, nicht der aktuelle Wert. Wenn kein Zug wirkt, ist die Reibkraft $0$, nicht $50\\,\\text{N}$.`,
        [
          'Ist Haftreibung immer maximal, oder situationsabhängig?',
          'Gleichgewichtsbedingung horizontal.',
          'Haftreibung ist passiv: passt sich Zugkraft an, bis die Grenze erreicht ist.',
        ],
        {
          1: '$50\\,\\text{N}$ ist die **Maximalkraft** der Haftreibung. Aktuell wirkt nur $30\\,\\text{N}$ Zug — Reibung gleicht exakt aus, nicht mehr.',
          2: 'Gleitreibung gilt nur, wenn der Körper gleitet. Hier ruht er (weil $F_Z < F_{H,\\text{max}}$).',
          3: 'Ohne Reibung würde der Block schon bei kleinster Kraft rutschen. Die Reibung wirkt aktiv — sie ist $30\\,\\text{N}$, nicht null.',
        },
      ),
      sorting(
        'Sub-Goal "Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)": Bei wachsender Zugkraft $F_Z$ auf einen ruhenden Körper — bringe die Phasen in die richtige Reihenfolge.',
        [
          'Phase 1: $F_Z$ klein — Körper ruht, Haftreibung $F_R = F_Z$ (passive Anpassung)',
          'Phase 2: $F_Z$ erreicht $\\mu_0 F_N$ — Haftreibung am Maximum, Körper steht noch',
          'Phase 3: $F_Z$ überschreitet $\\mu_0 F_N$ — Losreißen, Körper beginnt zu gleiten',
          'Phase 4: Körper gleitet — Reibung fällt auf $\\mu F_N < \\mu_0 F_N$ (Sprung nach unten)',
          'Phase 5: $F_Z - \\mu F_N > 0$ bewirkt Beschleunigung nach Newton: $a = (F_Z - \\mu F_N)/m$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Der Übergang Haft → Gleit ist kein stetiger Prozess: Am Losreißpunkt springt die Reibkraft von $\\mu_0 F_N$ auf $\\mu F_N$.

**Rechnung:** Genau in dem Moment des Losreißens führt der Reibkraftabfall dazu, dass bei gleichbleibender $F_Z$ plötzlich eine Netto-Beschleunigung entsteht — der Körper "springt" los.

**Probe:** Diesen Sprung spürt man beim Anschieben schwerer Möbel: erst widerständig, dann plötzlich leichter. Physikalisch der $\\mu_0 \\to \\mu$-Sprung.

**Typischer Fehler:** Phase 3 als stetigen Übergang zeichnen — falsch. In Realität ist das ein Unstetigkeitssprung in $F_R(t)$.`,
        [
          'Vor Losreißen: Haftreibung $\\leq \\mu_0 F_N$, passt sich an.',
          'Bei Losreißen: Reibwert fällt auf $\\mu < \\mu_0$.',
          'Nach Losreißen: Newton bestimmt Beschleunigung.',
        ],
      ),
      matching(
        'Sub-Goal "Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)": Ordne jedem Zustand den zutreffenden Reibwert zu.',
        [
          { left: 'Ruhender Körper, Zugkraft < Grenzwert', right: 'Haftreibung, aktuell $F_R = F_Z < \\mu_0 F_N$' },
          { left: 'Körper kurz vor Losreißen', right: 'Haftreibung am Maximum: $F_R = \\mu_0 F_N$' },
          { left: 'Körper gleitet bereits', right: 'Gleitreibung: $F_R = \\mu F_N < \\mu_0 F_N$' },
          { left: 'Körper rollt (z.B. Kugel ohne Schlupf)', right: 'Rollreibung: meist deutlich kleiner als Gleitreibung' },
        ],
        `**Ansatz:** Reibungszustände unterscheiden sich qualitativ: Haft (passiv, variable Größe), Haft am Maximum (kritische Kraft), Gleit (kinetisch, fest), Roll (besonderer Fall).

**Rechnung:** Größenordnung $\\mu_{\\text{roll}} \\ll \\mu \\approx \\mu_0$ ist der Grund, weshalb Räder und Kugellager in Maschinen eingesetzt werden — sie eliminieren den Gleitreibungs-Anteil fast vollständig.

**Probe:** Beispiel Autoreifen: Solange Rad nicht blockiert, herrscht Rollreibung; beim Blockieren (ABS-Aus) springt es in Gleitreibung, Bremsweg verlängert sich deutlich.

**Typischer Fehler:** Rollreibung und Gleitreibung verwechseln. Rollreibung gilt nur, wenn kein Schlupf auftritt.`,
        [
          'Vor Losreißen: passive Haft.',
          'Am Losreißpunkt: Haft am Maximum.',
          'Nach Losreißen: Gleitreibung.',
        ],
      ),
    ],

    // ── [2] Geneigte Ebene: $F_N = mg\cos\alpha$, $F_H = mg\sin\alpha$ ──
    2: [
      ni(
        'Sub-Goal "Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$": Ein Körper (m = 10 kg) liegt auf einer geneigten Ebene mit $\\alpha = 20°$. Wie groß ist die Normalkraft? ($g = 9{,}81$, auf 2 Nachkommastellen in N)',
        92.18, 0.1, 'N',
        `**Ansatz:** Zerlegung der Gewichtskraft $mg$ in Komponenten: senkrecht zur Ebene (Normalkraft) und parallel (Hangabtrieb). Normalkraft $F_N = mg\\cos\\alpha$.

**Rechnung:** $F_N = 10 \\cdot 9{,}81 \\cdot \\cos 20° = 98{,}1 \\cdot 0{,}9397 \\approx 92{,}18\\,\\text{N}$.

**Probe:** Grenzfall $\\alpha = 0°$: $\\cos 0° = 1$, $F_N = mg = 98{,}1\\,\\text{N}$ (horizontale Fläche). Grenzfall $\\alpha = 90°$: $\\cos 90° = 0$, $F_N = 0$ (senkrechte Wand, Körper fällt frei). ✓

**Typischer Fehler:** Sinus und Cosinus vertauschen: $mg\\sin\\alpha = 33{,}55\\,\\text{N}$ angeben. Merke: Bei $\\alpha = 0°$ muss $F_N$ maximal sein (= $mg$). Nur $\\cos$ erfüllt das ($\\cos 0° = 1$).`,
        [
          'Zerlege die Gewichtskraft in Komponenten zur Ebene.',
          'Welche Winkelfunktion liefert den senkrechten Anteil?',
          'Merkregel: Bei $\\alpha = 0°$ muss $F_N = mg$ sein → $\\cos$.',
        ],
      ),
      ni(
        'Sub-Goal "Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$": Gleicher Körper (m = 10 kg) auf $\\alpha = 20°$ Ebene. Wie groß ist die Hangabtriebskraft? (auf 2 Nachkommastellen in N)',
        33.55, 0.1, 'N',
        `**Ansatz:** Hangabtrieb $F_H$ = Komponente der Gewichtskraft **entlang** der Ebene abwärts. $F_H = mg\\sin\\alpha$.

**Rechnung:** $F_H = 10 \\cdot 9{,}81 \\cdot \\sin 20° = 98{,}1 \\cdot 0{,}342 \\approx 33{,}55\\,\\text{N}$.

**Probe:** Grenzfall $\\alpha = 0°$: $\\sin 0° = 0$, $F_H = 0$ (horizontale Fläche, kein Hangabtrieb). ✓ Grenzfall $\\alpha = 90°$: $\\sin 90° = 1$, $F_H = mg$ (freier Fall entlang senkrechter Richtung). ✓

**Probe Pythagoras:** $F_H^2 + F_N^2 = 33{,}55^2 + 92{,}18^2 = 1125{,}6 + 8497{,}2 = 9622{,}8 \\approx (mg)^2 = 98{,}1^2 = 9623{,}6$. ✓

**Typischer Fehler:** Den Winkel zwischen Gewichtskraft und Ebene falsch messen. Korrekt: $\\alpha$ ist der Neigungswinkel der Ebene zur Horizontalen — derselbe Winkel taucht im Zerlegungsdreieck wieder auf (Wechselwinkel).`,
        [
          'Welche Richtung hat der Hangabtrieb?',
          '$F_H = mg \\sin\\alpha$.',
          'Bei $\\alpha = 0°$ muss $F_H = 0$ sein → $\\sin$.',
        ],
      ),
      mc(
        'Sub-Goal "Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$": Wieso taucht **derselbe Winkel** $\\alpha$ im Zerlegungsdreieck des Gewichtsvektors auf wie der Neigungswinkel der Ebene?',
        [
          'Wechselwinkel: zwei parallele Linien (Gewichtsrichtung vertikal, Normale zur Ebene) schneiden durch eine dritte Linie (Ebene) — Winkel auf der geneigten Seite sind gleich',
          'Nur Zufall, meistens ist er leicht anders',
          'Weil die Reibung den Winkel fixiert',
          'Weil das Gewicht immer senkrecht zur Ebene wirkt',
        ],
        0,
        `**Ansatz:** Geometrie der parallelen Linien. Die Gewichtsrichtung ist vertikal, die Normale zur Ebene steht senkrecht zur Ebene. Der Winkel zwischen Gewichtsvektor und Normale ist gleich dem Neigungswinkel $\\alpha$ (Wechsel-/Stufenwinkel).

**Rechnung:** Formal: Die Ebene hat Neigung $\\alpha$ zur Horizontalen. Ihre Normale hat dieselbe Neigung $\\alpha$ zur Vertikalen. Gewichtsvektor zeigt entlang der Vertikalen → Winkel zwischen Gewicht und Normale ist $\\alpha$.

**Probe:** Skizze anfertigen: geneigte Ebene, Gewichtsvektor senkrecht nach unten, Normalen-Komponente entlang Normale, Hangabtrieb entlang Ebene. Zerlegungsdreieck zeigt $\\alpha$ am Ausgangspunkt — nicht zufällig, sondern geometrisch notwendig.

**Typischer Fehler:** "Winkel einfach einsetzen" ohne die Geometrie zu verstehen — führt bei komplexeren Szenarien (Schnürung, Rolle auf Ebene) zu Fehlern, weil die Winkelbeziehung nicht richtig abgeleitet wird.`,
        [
          'Zeichne die Ebene, die Vertikale (Gewichtsrichtung) und die Normale.',
          'Betrachte die beiden Dreiecke: geneigte Ebene und Zerlegungsdreieck.',
          'Wechsel-/Stufenwinkel an parallelen Linien.',
        ],
        {
          1: 'Der Winkel ist geometrisch exakt gleich — nicht zufällig, nicht ungefähr.',
          2: 'Reibung hat nichts mit dem Zerlegungsdreieck zu tun — die Zerlegung gilt auch ohne Reibung.',
          3: 'Die **Normalkraft** wirkt senkrecht zur Ebene, nicht die **Gewichtskraft**. Gewicht ist immer vertikal (entlang Schwerkraft).',
        },
      ),
      tf(
        'Sub-Goal "Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$": Für einen reibungsfreien Körper auf geneigter Ebene ergibt sich die Beschleunigung zu $a = g\\sin\\alpha$ — unabhängig von der Masse.',
        true,
        `**Ansatz:** Ohne Reibung wirkt nur der Hangabtrieb $F_H = mg\\sin\\alpha$. Nach Newton: $F = ma$, also $mg\\sin\\alpha = ma \\Rightarrow a = g\\sin\\alpha$.

**Rechnung:** $m$ kürzt sich auf beiden Seiten — die Beschleunigung hängt nicht von der Masse ab. Eine Feder und ein Elefant (ohne Luftwiderstand und Reibung) rutschen gleich schnell eine glatte Rampe hinunter.

**Probe:** Grenzfall $\\alpha = 0°$: $a = 0$ (horizontale Fläche, keine Beschleunigung). ✓ Grenzfall $\\alpha = 90°$: $a = g$ (freier Fall). ✓

**Typischer Fehler:** Masse im Ergebnis stehen lassen. Das verschlingt die wichtige physikalische Aussage "Beschleunigung ist massenunabhängig" (Äquivalenzprinzip).`,
        [
          'Newton: $F_{\\text{net}} = ma$. Ohne Reibung ist $F_{\\text{net}} = F_H$.',
          'Stelle nach $a$ um — was passiert mit $m$?',
          'Wenn $m$ auf beiden Seiten: kürzen.',
        ],
      ),
      sorting(
        'Sub-Goal "Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$": Bringe die Schritte der Reibungs-Analyse auf geneigter Ebene in die richtige Reihenfolge.',
        [
          'Freikörperbild: Körper auf Ebene mit Gewicht, Normalkraft, Reibkraft, evtl. Zugkraft',
          'Koordinatensystem wählen: Achse entlang der Ebene, senkrecht dazu',
          'Gewicht in Komponenten zerlegen: $mg\\sin\\alpha$ (parallel) und $mg\\cos\\alpha$ (senkrecht)',
          'Gleichgewicht senkrecht zur Ebene: $F_N = mg\\cos\\alpha$ bestimmen',
          'Coulomb-Bedingung parallel: $F_H$ mit $\\mu F_N$ vergleichen, entscheiden ob Haft/Gleit',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Strukturiertes Vorgehen: FKB, Koordinaten, Zerlegung, Gleichgewicht, Gleitbedingung.

**Rechnung:** Die Reihenfolge ist essentiell — das Koordinatensystem entlang der Ebene macht die Zerlegung einfach. Ohne diesen Schritt müsste man alle Kräfte im Welt-Koordinatensystem rechnen, was unnötig kompliziert wäre.

**Probe:** Im gedrehten System sind zwei Gleichungen entkoppelt: senkrecht $F_N = mg\\cos\\alpha$ (statisch, liefert $F_N$); parallel $F_H - F_R = ma$ (dynamisch, liefert $a$).

**Typischer Fehler:** Im Welt-Koordinatensystem rechnen und sin/cos permanent vermischen. Oder Reibkraft berechnen, bevor $F_N$ feststeht — dann steht $\\mu F_N$ ohne Zahl da.`,
        [
          'Erst Freikörperbild.',
          'Koordinatensystem entlang Ebene.',
          'Zerlegung, Gleichgewicht, Gleitentscheidung.',
        ],
      ),
    ],

    // ── [3] Selbsthemmung: $\tan\alpha \leq \mu_0$ ──────────────────────
    3: [
      mc(
        'Sub-Goal "Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$": Ein Körper auf einer Ebene mit Haftreibwert $\\mu_0 = 0{,}4$. Bei welcher Neigung beginnt der Körper gerade zu rutschen?',
        ['$\\alpha = 21{,}8°$', '$\\alpha = 40°$', '$\\alpha = 66{,}4°$', '$\\alpha = 90°$'],
        0,
        `**Ansatz:** Selbsthemmung bricht zusammen, wenn $\\tan\\alpha = \\mu_0$. Grenzfall: $\\tan\\alpha_{\\text{krit}} = \\mu_0 \\Rightarrow \\alpha_{\\text{krit}} = \\arctan(\\mu_0)$.

**Rechnung:** $\\alpha = \\arctan(0{,}4) \\approx 21{,}80°$.

**Probe:** Kräftebilanz in der Ebene: $mg\\sin\\alpha \\leq \\mu_0 mg\\cos\\alpha \\Leftrightarrow \\tan\\alpha \\leq \\mu_0$. Bei $\\alpha = 21{,}8°$ gilt Gleichheit — kritischer Grenzfall.

**Typischer Fehler:** $\\mu_0$ direkt als Winkel interpretieren und $\\alpha = 0{,}4 \\cdot 90° = 36°$ rechnen oder $\\alpha = 40°$ (aus $\\mu_0 = 0{,}4$ als Prozent des rechten Winkels) — beides physikalisch sinnlos. Die $\\arctan$-Beziehung ist nötig.`,
        [
          'Stelle die Selbsthemmbedingung $\\tan\\alpha \\leq \\mu_0$ am Grenzfall auf.',
          '$\\tan\\alpha_{\\text{krit}} = \\mu_0$.',
          '$\\alpha_{\\text{krit}} = \\arctan(\\mu_0)$.',
        ],
        {
          1: '$\\alpha = 40°$ entspräche $\\mu_0 = \\tan 40° \\approx 0{,}84$ — doppelt so hoch wie gegeben.',
          2: '$66{,}4°$ wäre der Winkel mit $\\cos 66{,}4° \\approx 0{,}4$ — falscher Bezug. Selbsthemmung nutzt $\\tan$, nicht $\\cos$.',
          3: '$90°$ ist die senkrechte Wand — da rutscht jeder Körper unabhängig von $\\mu_0$.',
        },
      ),
      ni(
        'Sub-Goal "Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$": Ein Keil mit Neigung $\\alpha = 10°$ klemmt ein Werkstück gegen eine Wand. Wie groß muss $\\mu_0$ **mindestens** sein, damit der Keil nicht herausrutscht? (auf 3 Nachkommastellen)',
        0.176, 0.002, '',
        `**Ansatz:** Selbsthemmung am Keil: Der Keil hält nur, wenn die Rückstellkraft die Haftreibung nicht überschreitet. Grenzfall: $\\tan\\alpha \\leq \\mu_0$.

**Rechnung:** $\\mu_{0,\\text{min}} = \\tan 10° = 0{,}17633$. Jeder höhere Haftreibwert reicht aus.

**Probe:** Bei $\\mu_0 = 0{,}2 > 0{,}176$ ist die Selbsthemmung gegeben. Bei $\\mu_0 = 0{,}1 < 0{,}176$ rutscht der Keil heraus — er muss aktiv gehalten werden.

**Typischer Fehler:** $\\sin$ oder $\\cos$ statt $\\tan$ nehmen und $\\mu_0 \\approx 0{,}174$ (sin) oder $\\approx 0{,}985$ (cos) angeben. Die Faustregel ist $\\tan$, weil beide Komponenten $mg\\sin\\alpha$ und $mg\\cos\\alpha$ durcheinander geteilt werden.`,
        [
          '$\\tan\\alpha \\leq \\mu_0$ ist die Selbsthemmbedingung.',
          'Grenzfall: Gleichheit.',
          '$\\mu_0 = \\tan\\alpha = \\tan 10°$.',
        ],
      ),
      tf(
        'Sub-Goal "Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$": Die Selbsthemmung-Grenze ist massenunabhängig: ob ein 1-kg-Block oder ein 1-Tonnen-Block, die kritische Neigung ist dieselbe.',
        true,
        `**Ansatz:** Gleichgewicht parallel zur Ebene: $mg\\sin\\alpha \\leq \\mu_0 mg\\cos\\alpha$. Masse und $g$ kürzen sich. Übrig: $\\tan\\alpha \\leq \\mu_0$.

**Rechnung:** Formal: $\\frac{F_H}{F_N} = \\frac{mg\\sin\\alpha}{mg\\cos\\alpha} = \\tan\\alpha$. Nur Winkel und Reibwert übrig — $m, g$ aus.

**Probe:** Alltagserfahrung: Auf einer eisigen Straße rutscht ein LKW nicht eher als ein Fahrrad-Reifen (bei gleichen Pneumatiken). Rutschwinkel hängt nur vom Material.

**Typischer Fehler:** Meinen, schwere Körper rutschen leichter (wegen "höherer Gewichtskraft"). Die Normalkraft wächst im gleichen Verhältnis — die Selbsthemmung bleibt gleich.`,
        [
          'Stelle Hangabtrieb und maximale Haftkraft gleich.',
          'Was passiert mit $m$ und $g$?',
          'Bleibt eine rein geometrische Bedingung übrig.',
        ],
      ),
      mc(
        'Sub-Goal "Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$": Ein Schraubgewinde ist **selbsthemmend**, wenn der Steigungswinkel kleiner als der Reibwinkel ist. Welches Gewinde garantiert sichere Fixierung ohne Kontermutter?',
        [
          'Steigungswinkel $\\alpha = 3°$, Reibwinkel $\\rho = 8°$ (fest, $\\alpha < \\rho$)',
          'Steigungswinkel $\\alpha = 10°$, Reibwinkel $\\rho = 5°$ (rutscht)',
          'Steigungswinkel $\\alpha = 20°$, Reibwinkel $\\rho = 15°$ (rutscht)',
          'Keines — jedes Gewinde rutscht irgendwann',
        ],
        0,
        `**Ansatz:** Selbsthemmung bei Gewinden: $\\alpha < \\rho$, wobei $\\rho = \\arctan\\mu_0$. Metrische Schrauben sind standardmäßig selbsthemmend ($\\alpha \\approx 2-3°$, $\\rho$ je nach Oberfläche $5-10°$).

**Rechnung:** Option A: $3° < 8°$ ✓ (hält fest). Option B und C: $\\alpha > \\rho$ — kein Selbsthemmen, Schraube dreht sich unter Last auf.

**Probe:** Deshalb sind Befestigungsschrauben flach geschnitten ($\\alpha$ klein), während schnelle Bewegungsschrauben (z.B. Werkzeug-Spindel) steiler sind und zusätzliche Sicherung brauchen.

**Typischer Fehler:** Meinen, jede Schraube hält ohne Sicherung. Unter Vibration (z.B. Motor) kann auch eine selbsthemmende Schraube durch Mikrobewegung aufdrehen — dann helfen Kontermutter, Loctite oder Federring.`,
        [
          'Selbsthemmung: Steigungswinkel $<$ Reibwinkel.',
          'Vergleiche $\\alpha$ und $\\rho$ in jedem Beispiel.',
          'Nur bei $\\alpha < \\rho$ hält die Schraube.',
        ],
        {
          1: '$10° > 5°$ — kein Selbsthemmen, Schraube rutscht auf.',
          2: '$20° > 15°$ — kein Selbsthemmen trotz größerem Reibwinkel, weil der Steigungswinkel noch höher ist.',
          3: 'Doch — bei $\\alpha < \\rho$ ist das Gewinde statisch selbsthemmend. Option A erfüllt das.',
        },
      ),
      sorting(
        'Sub-Goal "Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$": Bringe die Schritte der Selbsthemm-Prüfung für eine Förderband-Neigung in die richtige Reihenfolge.',
        [
          'Reibwerte recherchieren (Riemen / Paket-Oberfläche), besonders $\\mu_0$',
          'Kritische Neigung berechnen: $\\alpha_{\\text{krit}} = \\arctan(\\mu_0)$',
          'Vergleich: Ist Band-Neigung $\\alpha_{\\text{Band}} < \\alpha_{\\text{krit}}$?',
          'Bei Grenzfall: Sicherheitsfaktor einplanen (z.B. $\\alpha_{\\text{Band}} \\leq 0{,}7 \\cdot \\alpha_{\\text{krit}}$)',
          'Bei Überschreitung: Mitnehmer, Noppen-Riemen oder flachere Neigung planen',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Reibprüfung in der Praxis: Tabellenwerte, Grenzwinkel, Vergleich, Sicherheit, Alternative.

**Rechnung:** Sicherheitsfaktor notwendig, weil $\\mu_0$ stark streut (Feuchtigkeit, Staub, Alterung). Regel: 20-30 % Abstand zur Rutschgrenze.

**Probe:** Bei Förderbändern in Bergwerken oder Hafenanlagen werden typisch $15-18°$ verwendet, obwohl $\\mu_0 > 0{,}3$ und $\\alpha_{\\text{krit}} > 17°$ wäre.

**Typischer Fehler:** Nominalreibwerte aus Tabelle 1:1 verwenden ohne Sicherheitsfaktor — Überraschung bei Regen oder Öl.`,
        [
          'Erst Materialwerte, dann Geometrie.',
          'Dann Vergleich.',
          'Sicherheitsfaktor einplanen.',
        ],
      ),
    ],

    // ── [4] Reibwinkel $\rho = \arctan\mu$ ──────────────────────────────
    4: [
      ni(
        'Sub-Goal "Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt": Ein Material hat Haftreibwert $\\mu_0 = 0{,}577$. Wie groß ist der Reibwinkel $\\rho$? (in Grad, auf ganze Zahlen)',
        30, 0.5, '°',
        `**Ansatz:** Reibwinkel $\\rho = \\arctan(\\mu_0)$.

**Rechnung:** $\\rho = \\arctan(0{,}577) \\approx 30{,}0°$ (wegen $\\tan 30° = 1/\\sqrt{3} \\approx 0{,}577$).

**Probe:** Erkennbares Sonderverhältnis: $\\tan 30° = \\sqrt{3}/3 \\approx 0{,}577$. Umgekehrt liefert $\\arctan$ genau $30°$.

**Typischer Fehler:** Gradmodus und Bogenmaß verwechseln — Rechner auf RAD gibt $\\arctan(0{,}577) \\approx 0{,}524\\,\\text{rad}$. Vor dem Ablesen Einheit prüfen.`,
        [
          'Definition Reibwinkel.',
          '$\\rho = \\arctan\\mu_0$.',
          'Rechner auf DEG stellen.',
        ],
      ),
      matching(
        'Sub-Goal "Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt": Ordne jedem Haftreibwert den zugehörigen Reibwinkel zu.',
        [
          { left: '$\\mu_0 = 0{,}2$', right: '$\\rho \\approx 11{,}3°$' },
          { left: '$\\mu_0 = 0{,}5$', right: '$\\rho \\approx 26{,}6°$' },
          { left: '$\\mu_0 = 1{,}0$', right: '$\\rho = 45°$' },
          { left: '$\\mu_0 = \\sqrt{3} \\approx 1{,}73$', right: '$\\rho = 60°$' },
        ],
        `**Ansatz:** $\\rho = \\arctan(\\mu_0)$ — monotone Funktion. Größerer Reibwert ⇔ größerer Reibwinkel.

**Rechnung:** Markante Werte auswendig: $\\tan 30° \\approx 0{,}577$, $\\tan 45° = 1$, $\\tan 60° = \\sqrt{3} \\approx 1{,}73$. Zwischenwerte durch $\\arctan$ mit Rechner.

**Probe:** $\\mu_0 = 1$ entspricht $\\rho = 45°$ — das bedeutet: bei einer Neigung von $45°$ rutscht der Körper gerade dann, wenn Haft- und Hangabtriebskraft gleich groß sind. Anschaulicher Grenzfall.

**Typischer Fehler:** $\\rho$ als linear in $\\mu_0$ annehmen. Die Beziehung ist nichtlinear, aber monoton. Insbesondere: $\\mu_0 \\geq 1$ ist möglich (z.B. Gummi/Gummi) und liefert $\\rho \\geq 45°$.`,
        [
          '$\\rho = \\arctan\\mu_0$.',
          'Auswendige Paare: $(1, 45°)$, $(\\sqrt{3}, 60°)$, $(1/\\sqrt{3}, 30°)$.',
          'Monoton steigend, aber nichtlinear.',
        ],
      ),
      tf(
        'Sub-Goal "Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt": Der Reibwinkel ist genau der Winkel zwischen der Richtung der resultierenden Kontaktkraft (Normal + Reibung) und der Flächennormale.',
        true,
        `**Ansatz:** Die resultierende Kontaktkraft hat Normal-Komponente $F_N$ und maximale Reib-Komponente $\\mu_0 F_N$. Winkel zur Normale: $\\tan\\phi = (\\mu_0 F_N)/F_N = \\mu_0 \\Rightarrow \\phi = \\arctan\\mu_0 = \\rho$.

**Rechnung:** Die resultierende Kontaktkraft zeichnet sich innerhalb eines Kegels mit Öffnungswinkel $\\rho$ um die Flächennormale — das ist der **Reibkegel**. Nur solange die angreifende Kraft innerhalb dieses Kegels liegt, herrscht Haftreibung.

**Probe:** Bei horizontaler Unterlage und senkrechtem Gewicht ist der Kontaktkraft-Vektor rein normal ($\\phi = 0$). Wird der Körper geneigt, wandert der Resultierende in Richtung Reibkegelrand — bis bei $\\phi = \\rho$ das Gleiten einsetzt.

**Typischer Fehler:** Reibwinkel als Neigungswinkel der Ebene sehen. Das stimmt im kritischen Fall, allgemein ist $\\rho$ aber der Winkel in der Kontakt-Statik.`,
        [
          'Zeichne $F_N$ und $F_{R,\\max}$ als Vektoren an der Kontaktfläche.',
          'Welchen Winkel bildet die Resultierende mit der Normale?',
          '$\\tan\\phi = F_R/F_N = \\mu$.',
        ],
      ),
      mc(
        'Sub-Goal "Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt": Wie ist der Reibwinkel in einem **Selbsthemmungskriterium** zu verwenden?',
        [
          'Selbsthemmung genau, wenn Neigungswinkel $\\alpha \\leq \\rho$',
          'Selbsthemmung genau, wenn $\\alpha > \\rho$',
          'Reibwinkel sagt nichts über Selbsthemmung aus',
          'Selbsthemmung genau, wenn $\\alpha = 90° - \\rho$',
        ],
        0,
        `**Ansatz:** Selbsthemmung: $\\tan\\alpha \\leq \\mu_0$. Mit $\\mu_0 = \\tan\\rho$: $\\tan\\alpha \\leq \\tan\\rho$. Da $\\tan$ auf $[0°, 90°)$ monoton steigt: $\\alpha \\leq \\rho$.

**Rechnung:** Anschaulich: $\\rho$ ist die **kritische Neigung**. Alles darunter hält, alles darüber rutscht.

**Probe:** $\\rho = 20°$ (typisch für Holz/Holz). Eine Ebene mit $\\alpha = 15° < 20°$ ist selbsthemmend — Holzblock bleibt liegen. $\\alpha = 25° > 20°$: Holzblock rutscht.

**Typischer Fehler:** Zeichen umdrehen oder $90° - \\rho$ einsetzen — beides führt zu physikalisch falschen Aussagen (z.B. Selbsthemmung nur bei steilen Flächen).`,
        [
          'Vergleiche die Formeln $\\tan\\alpha \\leq \\mu_0$ und $\\mu_0 = \\tan\\rho$.',
          'Was folgt nach $\\arctan$?',
          'Anschaulich: $\\rho$ ist die Rutschgrenze.',
        ],
        {
          1: 'Umgekehrt: Bei $\\alpha > \\rho$ gleitet der Körper — kein Selbsthemmen.',
          2: 'Reibwinkel ist **genau** das Selbsthemmungskriterium in geometrischer Form. Sehr wohl relevant.',
          3: '$90° - \\rho$ wäre der Komplementärwinkel — taucht weder in der Herleitung noch in der Anwendung auf.',
        },
      ),
      ni(
        'Sub-Goal "Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt": Ein Versuchsaufbau: Eine Ebene wird so lange geneigt, bis ein aufgelegter Stahlklotz gerade zu rutschen beginnt — bei $\\alpha = 11{,}31°$. Welcher Haftreibwert $\\mu_0$ lässt sich daraus bestimmen? (auf 2 Nachkommastellen)',
        0.2, 0.005, '',
        `**Ansatz:** Der gemessene Rutschwinkel **ist** per Definition der Reibwinkel $\\rho$. Umgekehrt: $\\mu_0 = \\tan\\rho$.

**Rechnung:** $\\mu_0 = \\tan 11{,}31° \\approx 0{,}2000$.

**Probe:** Rückwärts: $\\arctan(0{,}2) \\approx 11{,}31°$. ✓ Konsistent.

**Typischer Fehler:** Den Winkel direkt als $\\mu_0$ übernehmen ($\\mu_0 = 0{,}113$ oder $\\mu_0 = 11{,}31$) — Reibwert und Reibwinkel sind verschiedene Größen, verknüpft durch $\\tan$.`,
        [
          'Der kritische Neigungswinkel ist der Reibwinkel.',
          '$\\mu_0 = \\tan\\rho$.',
          'Rechner: $\\tan 11{,}31°$.',
        ],
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-1-5 — Schwerpunkt  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-1-5': {

    // ── [0] Diskrete Massen: $x_S = \sum m_i x_i / \sum m_i$ ────────────
    0: [
      ni(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Drei Massen liegen auf einer Stange: $m_1 = 2\\,\\text{kg}$ bei $x_1 = 0\\,\\text{m}$, $m_2 = 3\\,\\text{kg}$ bei $x_2 = 1\\,\\text{m}$, $m_3 = 5\\,\\text{kg}$ bei $x_3 = 4\\,\\text{m}$. Wo liegt der Schwerpunkt? (auf 2 Nachkommastellen)',
        2.3, 0.01, 'm',
        `**Ansatz:** Massengewichtetes Mittel: $x_S = \\sum m_i x_i / \\sum m_i$.

**Rechnung:** Zähler: $2 \\cdot 0 + 3 \\cdot 1 + 5 \\cdot 4 = 0 + 3 + 20 = 23\\,\\text{kg·m}$. Nenner: $2 + 3 + 5 = 10\\,\\text{kg}$. $x_S = 23/10 = 2{,}30\\,\\text{m}$.

**Probe:** Ergebnis liegt zwischen $x_1 = 0$ und $x_3 = 4$. ✓ Näher an $x_3 = 4$, weil dort die größte Masse sitzt. ✓ Hebelcheck: $2 \\cdot 2{,}3 + 3 \\cdot 1{,}3 = 4{,}6 + 3{,}9 = 8{,}5$ (links von $x_S$); $5 \\cdot 1{,}7 = 8{,}5$ (rechts von $x_S$). Momentengleichgewicht erfüllt. ✓

**Typischer Fehler:** Arithmetisches Mittel der Positionen rechnen: $(0+1+4)/3 \\approx 1{,}67\\,\\text{m}$ — ignoriert die Massen. Die Schwerpunkt-Formel gewichtet jeden Beitrag mit **seiner** Masse.`,
        [
          'Schreibe die Formel hin: $x_S = \\sum m_i x_i / \\sum m_i$.',
          'Zähler: jedes $m_i \\cdot x_i$ aufsummieren.',
          'Ergebnis liegt immer zwischen den äußeren Positionen, näher an der größten Masse.',
        ],
      ),
      mc(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Zwei Massen auf einer Stange: $m_1 = 4\\,\\text{kg}$ bei $x_1 = 1\\,\\text{m}$ und $m_2 = 1\\,\\text{kg}$ bei $x_2 = 6\\,\\text{m}$. Wo liegt $x_S$?',
        ['$x_S = 2\\,\\text{m}$', '$x_S = 3{,}5\\,\\text{m}$', '$x_S = 5\\,\\text{m}$', '$x_S = 1{,}4\\,\\text{m}$'],
        0,
        `**Ansatz:** $x_S = (m_1 x_1 + m_2 x_2)/(m_1 + m_2)$.

**Rechnung:** $x_S = (4 \\cdot 1 + 1 \\cdot 6)/(4+1) = (4+6)/5 = 10/5 = 2\\,\\text{m}$.

**Probe:** Schwerpunkt näher an $m_1$ (größere Masse bei $x_1 = 1$). Abstand zu $m_1$: $1\\,\\text{m}$. Abstand zu $m_2$: $4\\,\\text{m}$. Hebelgesetz: $m_1 \\cdot 1 = m_2 \\cdot 4$, also $4 = 4$. ✓

**Typischer Fehler:** Arithmetisches Mittel $(1+6)/2 = 3{,}5\\,\\text{m}$ — ignoriert den Massenunterschied $4:1$.`,
        [
          'Massengewichtetes Mittel, nicht arithmetisches.',
          'Hebelgesetz: Schwerpunkt teilt die Strecke im **umgekehrten** Massenverhältnis.',
          'Bei $4:1$ Masse liegt $x_S$ nahe an $m_1$.',
        ],
        {
          1: '$3{,}5\\,\\text{m}$ ist das arithmetische Mittel der Positionen. Bei ungleichen Massen gewichtet man mit der Masse, nicht mit $1$.',
          2: '$5\\,\\text{m}$ wäre der Schwerpunkt, wenn $m_2$ viermal so schwer wie $m_1$ wäre — Verhältnis umgekehrt.',
          3: '$1{,}4\\,\\text{m}$ stammt aus falscher Zähler-Division: vermutlich $(4 \\cdot 1 + 1 \\cdot 6)/(1 + 6) \\approx 1{,}43$, wobei der Nenner die **Positionen** statt der **Massen** addiert.',
        },
      ),
      ni(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Vier gleich schwere Kugeln ($m = 2\\,\\text{kg}$ jede) liegen bei $x = 0, 2, 5, 9\\,\\text{m}$. Wo ist $x_S$?',
        4, 0.01, 'm',
        `**Ansatz:** Bei gleichen Massen reduziert sich die Formel auf das arithmetische Mittel der Positionen: $x_S = (x_1 + x_2 + \\dots + x_n)/n$.

**Rechnung:** Gesamtmasse $4 \\cdot 2 = 8\\,\\text{kg}$. Zähler: $2(0 + 2 + 5 + 9) = 2 \\cdot 16 = 32\\,\\text{kg·m}$. $x_S = 32/8 = 4\\,\\text{m}$. Schneller: $(0+2+5+9)/4 = 16/4 = 4\\,\\text{m}$.

**Probe:** Ergebnis liegt zwischen $x_{\\min} = 0$ und $x_{\\max} = 9$. ✓ Zwischen den beiden mittleren Positionen $2$ und $5$ liegt $x_S = 4$ — plausibel.

**Typischer Fehler:** Gewichtete Formel benutzen und die gemeinsame Masse $m$ im Zähler **und** Nenner vergessen zu kürzen → unnötig komplizierte Rechnung. Bei gleichen Massen einfach Mittelwert der Positionen.`,
        [
          'Was passiert, wenn alle $m_i$ gleich sind?',
          '$m$ kürzt sich im Zähler und Nenner.',
          'Übrig: arithmetisches Mittel der $x_i$.',
        ],
      ),
      tf(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Die Schwerpunktformel liefert auch für dreidimensionale Massensysteme komponentenweise die Schwerpunktkoordinaten: $x_S, y_S, z_S$ werden mit derselben Formel unabhängig voneinander berechnet.',
        true,
        `**Ansatz:** Vektorwertig: $\\vec r_S = \\sum m_i \\vec r_i / \\sum m_i$. Komponentenweise: $x_S = \\sum m_i x_i / M$, analog $y_S, z_S$. Die drei Gleichungen sind entkoppelt.

**Rechnung:** Bei einem System aus drei Massen im Raum rechnet man drei separate Summen — eine pro Achse. Die Massen bleiben dieselben, nur die Koordinate wechselt.

**Probe:** Beispiel: $m_1 = m_2 = m_3 = 1\\,\\text{kg}$ bei $(0,0,0)$, $(3,0,0)$, $(0,6,9)$. Dann $x_S = (0+3+0)/3 = 1$, $y_S = (0+0+6)/3 = 2$, $z_S = (0+0+9)/3 = 3$. Schwerpunkt: $(1, 2, 3)$.

**Typischer Fehler:** Koordinaten mischen (z.B. $m_i \\cdot y_i$ in der $x_S$-Summe). Die drei Gleichungen sind streng unabhängig.`,
        [
          'Wie sieht die Schwerpunktformel in Vektorform aus?',
          'Komponentenweise lesen: $x_S$ nutzt nur $x_i$.',
          'Drei unabhängige Gleichungen für 3D.',
        ],
      ),
      matching(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Ordne jeder Situation die korrekte Schwerpunkt-Aussage zu.',
        [
          { left: 'Zwei gleiche Massen bei $x_1$ und $x_2$', right: '$x_S = (x_1 + x_2)/2$ (arithm. Mittel)' },
          { left: 'Massen $m$ und $3m$ bei $x=0$ und $x=4$', right: '$x_S = 3$ (näher an der größeren Masse)' },
          { left: 'Eine einzige Masse $m$ bei $x_0$', right: '$x_S = x_0$ (trivial)' },
          { left: 'Zwei Massen, Summe verdoppelt', right: '$x_S$ bleibt gleich (Massen kürzen sich)' },
        ],
        `**Ansatz:** Die Schwerpunktformel ist linear in allen $m_i$ — eine gemeinsame Skalierung aller Massen ändert das Ergebnis nicht. Das Schwerpunkt-Teilverhältnis $(x_S - x_1)/(x_2 - x_S) = m_2/m_1$ ist das umgekehrte Hebelverhältnis.

**Rechnung:** Für Masse $m$ bei $0$ und $3m$ bei $4$: $x_S = (m \\cdot 0 + 3m \\cdot 4)/(m + 3m) = 12m/(4m) = 3$. Schwerpunkt teilt die Strecke im Verhältnis $3:1$ (näher zur $3m$-Masse).

**Probe:** Einzelne Masse: $x_S = m \\cdot x_0 / m = x_0$ — trivial. Gleiche Massen: $x_S = m(x_1+x_2)/(2m) = (x_1+x_2)/2$. Die Skalierung $m \\to 2m$ bei **allen** Massen kürzt sich in Zähler und Nenner.

**Typischer Fehler:** Annehmen, dass der Schwerpunkt immer **in der Mitte** liegt. Der liegt genau im Mittelpunkt nur bei gleichen Massen — bei unterschiedlichen Massen teilt er die Strecke im umgekehrten Massenverhältnis.`,
        [
          'Gleiche Massen: arithmetisches Mittel.',
          'Hebelverhältnis umgekehrt zum Massenverhältnis.',
          'Gemeinsame Skalierung aller Massen ändert $x_S$ nicht.',
        ],
      ),
      ni(
        'Sub-Goal "Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$": Fünf Kugeln: $m_1 = 1\\,\\text{kg}$ bei $x=0$, $m_2 = 2\\,\\text{kg}$ bei $x=1$, $m_3 = 3\\,\\text{kg}$ bei $x=2$, $m_4 = 2\\,\\text{kg}$ bei $x=3$, $m_5 = 1\\,\\text{kg}$ bei $x=4$. Wo liegt der Schwerpunkt? (auf 1 Nachkommastelle)',
        2, 0.05, 'm',
        `**Ansatz:** Die Massenverteilung ist symmetrisch um $x = 2$ (gleiche Massen im gleichen Abstand). Daher muss $x_S$ genau auf der Symmetrieachse liegen.

**Rechnung:** Zähler: $1 \\cdot 0 + 2 \\cdot 1 + 3 \\cdot 2 + 2 \\cdot 3 + 1 \\cdot 4 = 0 + 2 + 6 + 6 + 4 = 18$. Nenner: $1+2+3+2+1 = 9$. $x_S = 18/9 = 2{,}0\\,\\text{m}$.

**Probe:** Durch direkte Ausrechnung und durch Symmetrie bestätigt. Paare $(m_1, m_5)$ und $(m_2, m_4)$ heben sich um $x = 2$ auf; die mittlere Masse $m_3$ sitzt direkt auf der Achse.

**Typischer Fehler:** Symmetrie nicht erkennen und unnötig lange Summen aufsetzen — oder Rechnerfehler beim Summieren. Vor dem Rechnen: auf Symmetrie prüfen.`,
        [
          'Sind die Massen um einen Punkt symmetrisch verteilt?',
          'Symmetrie ⇒ Schwerpunkt liegt auf der Achse.',
          'Auch rechnerisch durchführen: $\\sum m_i x_i / \\sum m_i$.',
        ],
      ),
    ],

    // ── [1] Zusammengesetzte Flächen: Summenregel ───────────────────────
    1: [
      ni(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Ein T-Profil besteht aus einem horizontalen Rechteck $R_1$ ($100 \\times 20\\,\\text{mm}$, $x_{S1} = 50\\,\\text{mm}$, $y_{S1} = 90\\,\\text{mm}$) und einem vertikalen Rechteck $R_2$ ($20 \\times 80\\,\\text{mm}$, $x_{S2} = 50\\,\\text{mm}$, $y_{S2} = 40\\,\\text{mm}$). Berechne $y_S$ des gesamten T-Profils. (auf 1 Nachkommastelle)',
        67.8, 0.2, 'mm',
        `**Ansatz:** Flächengewichtetes Mittel in $y$: $y_S = (A_1 y_{S1} + A_2 y_{S2})/(A_1 + A_2)$. Bei homogenem Material ersetzt $A_i$ die Masse.

**Rechnung:** $A_1 = 100 \\cdot 20 = 2000\\,\\text{mm}^2$, $A_2 = 20 \\cdot 80 = 1600\\,\\text{mm}^2$. $y_S = (2000 \\cdot 90 + 1600 \\cdot 40)/(2000 + 1600) = (180\\,000 + 64\\,000)/3600 = 244\\,000/3600 \\approx 67{,}78\\,\\text{mm}$.

**Probe:** Ergebnis liegt zwischen $y_{S2} = 40$ und $y_{S1} = 90$ — OK. Näher an $y_{S1}$, weil $A_1 > A_2$.

**Typischer Fehler:** Beide Teilschwerpunkte einfach mitteln: $(90+40)/2 = 65\\,\\text{mm}$. Ignoriert den Flächenunterschied.`,
        [
          'Teilflächen berechnen: $A_i = b_i \\cdot h_i$.',
          'Teilschwerpunkte kennst du aus der Aufgabe.',
          'Flächengewichtetes Mittel: $y_S = \\sum A_i y_{S,i} / \\sum A_i$.',
        ],
      ),
      mc(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Bei einem Profil aus zwei Rechtecken (gleiche Fläche $A$, Schwerpunkte $x_{S1}$ und $x_{S2}$) — wo liegt der Gesamtschwerpunkt?',
        [
          'In der Mitte zwischen $x_{S1}$ und $x_{S2}$: $x_S = (x_{S1}+x_{S2})/2$',
          'Beim größeren Teilschwerpunkt',
          'Bei $x_{S1}$ (erstes Teil dominiert)',
          'Immer am linken Rand des Profils',
        ],
        0,
        `**Ansatz:** Gleiche Flächen → Gewichtung gleich → arithmetisches Mittel.

**Rechnung:** $x_S = (A \\cdot x_{S1} + A \\cdot x_{S2})/(A + A) = A(x_{S1}+x_{S2})/(2A) = (x_{S1}+x_{S2})/2$.

**Probe:** Sonderfall der allgemeinen Formel $x_S = \\sum A_i x_{S,i}/\\sum A_i$ bei $A_1 = A_2$. Analog zu zwei gleichen Massen.

**Typischer Fehler:** Die Regel "immer in der Mitte" auf ungleiche Flächen übertragen. Nur bei **gleicher Fläche** ist das Mittel das arithmetische Mittel.`,
        [
          'Setze $A_1 = A_2 = A$ in die Formel ein.',
          'Was passiert mit $A$ in Zähler und Nenner?',
          'Bleibt arithmetisches Mittel übrig.',
        ],
        {
          1: 'Die Formel liefert das gewogene Mittel. "Größerer Teilschwerpunkt" ist keine sinnvolle Größe — $x_{S1}$ und $x_{S2}$ sind Positionen, nicht Größen.',
          2: 'Das zweite Teil hat denselben Flächenanteil, dominiert nicht.',
          3: 'Der linke Rand hängt vom konkreten Aufbau ab — hat nichts mit der Schwerpunktformel zu tun.',
        },
      ),
      ni(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Ein Profil besteht aus einem Quadrat ($100 \\times 100\\,\\text{mm}$, $x_{S1} = 50\\,\\text{mm}$) und einem angesetzten Rechteck ($200 \\times 50\\,\\text{mm}$, Schwerpunkt $x_{S2} = 200\\,\\text{mm}$ rechts vom Quadrat, bezogen auf denselben Ursprung). Wo liegt $x_S$?',
        125, 0.5, 'mm',
        `**Ansatz:** $x_S = (A_1 x_{S1} + A_2 x_{S2})/(A_1 + A_2)$.

**Rechnung:** $A_1 = 100 \\cdot 100 = 10\\,000\\,\\text{mm}^2$. $A_2 = 200 \\cdot 50 = 10\\,000\\,\\text{mm}^2$. Beide gleich → arithmetisches Mittel. $x_S = (50 + 200)/2 = 125\\,\\text{mm}$.

**Probe:** Ergebnis liegt zwischen $50$ und $200$ — OK. Da $A_1 = A_2$, genau in der Mitte.

**Typischer Fehler:** Unterschiedliche Flächen annehmen, ohne die Zahlenwerte zu berechnen. Erst nach Durchrechnen fällt auf, dass $100 \\cdot 100 = 200 \\cdot 50$.`,
        [
          'Flächen $A_i = b_i h_i$ berechnen.',
          'Wenn $A_1 = A_2$, wird die Formel zum arithmetischen Mittel.',
          'Sonst: gewogenes Mittel.',
        ],
      ),
      tf(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Für homogene Platten (konstante Dicke und Dichte) liefert die Flächen-Schwerpunktformel dasselbe Ergebnis wie die Massen-Schwerpunktformel.',
        true,
        `**Ansatz:** Bei homogenem Material gilt $m_i = \\rho \\cdot t \\cdot A_i$ (Dichte $\\rho$, Dicke $t$, Fläche $A_i$). In der Schwerpunktformel kürzen sich $\\rho$ und $t$.

**Rechnung:** $x_S = \\sum m_i x_i / \\sum m_i = \\sum (\\rho t A_i) x_i / \\sum (\\rho t A_i) = \\rho t \\sum A_i x_i / (\\rho t \\sum A_i) = \\sum A_i x_i / \\sum A_i$.

**Probe:** Für ein L-Profil aus Stahl ergibt sich derselbe Schwerpunkt wie aus Aluminium — solange Dicke und Dichte überall gleich sind.

**Typischer Fehler:** Die Regel auch bei inhomogenen Körpern anwenden (verschiedene Materialien, variable Dicke). Dort muss mit der tatsächlichen Masse gewichtet werden — Fläche allein reicht nicht.`,
        [
          'Masse als $m = \\rho \\cdot V = \\rho \\cdot t \\cdot A$ schreiben.',
          'Was kürzt sich in Zähler und Nenner?',
          'Vorsicht bei inhomogenen Körpern.',
        ],
      ),
      sorting(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Bringe die Schritte zur Berechnung des Flächenschwerpunkts eines zusammengesetzten Profils in die richtige Reihenfolge.',
        [
          'Koordinatensystem wählen (Ursprung an markanter Ecke)',
          'Profil in Teilflächen zerlegen (Rechtecke, Dreiecke, Kreissegmente)',
          'Für jede Teilfläche $A_i$ und Teilschwerpunkt ($x_{S,i}$, $y_{S,i}$) bestimmen',
          'Flächengewichtete Summen $\\sum A_i x_{S,i}$ und $\\sum A_i y_{S,i}$ bilden',
          'Durch Gesamtfläche $\\sum A_i$ teilen, um $x_S$ und $y_S$ zu erhalten',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Strukturiertes Vorgehen verhindert Fehler: erst die Geometrie klären (Koordinaten, Zerlegung), dann die Zahlen (Flächen, Teilschwerpunkte), zuletzt die Formel anwenden.

**Rechnung:** Das Koordinatensystem muss **vor** der Zerlegung stehen, damit die Teilschwerpunkte eindeutige Werte haben. Erst Flächen, Teilschwerpunkte — dann Summen, dann Division.

**Probe:** Bei einem L-Profil: (1) Ursprung in der Ecke, (2) Zerlegung in zwei Rechtecke, (3) Flächen und Teilschwerpunkte, (4) Summen, (5) Division. Ergebnis: Gesamtschwerpunkt.

**Typischer Fehler:** Ohne Koordinatensystem starten — dann stehen die $x_{S,i}$ relativ zu verschiedenen Bezugspunkten und werden zu einer sinnlosen Summe addiert.`,
        [
          'Zuerst Geometrie, dann Zahlen.',
          'Koordinatensystem vor der Zerlegung.',
          'Formel am Ende.',
        ],
      ),
      ni(
        'Sub-Goal "Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$": Ein I-Profil (Doppel-T) besteht aus drei Rechtecken: Obergurt ($120 \\times 15\\,\\text{mm}$, $y_S = 142{,}5\\,\\text{mm}$), Steg ($15 \\times 120\\,\\text{mm}$, $y_S = 75\\,\\text{mm}$), Untergurt ($120 \\times 15\\,\\text{mm}$, $y_S = 7{,}5\\,\\text{mm}$). Wo liegt der Schwerpunkt $y_S$? (auf 1 Nachkommastelle)',
        75, 0.5, 'mm',
        `**Ansatz:** Das I-Profil ist **symmetrisch** um die Mittelebene. Der Schwerpunkt muss dort liegen — hier $y_S = 75\\,\\text{mm}$.

**Rechnung:** $A_1 = A_3 = 120 \\cdot 15 = 1800\\,\\text{mm}^2$, $A_2 = 15 \\cdot 120 = 1800\\,\\text{mm}^2$. Zur Bestätigung: $y_S = (1800 \\cdot 142{,}5 + 1800 \\cdot 75 + 1800 \\cdot 7{,}5)/(1800 \\cdot 3) = (142{,}5 + 75 + 7{,}5)/3 = 225/3 = 75\\,\\text{mm}$. ✓

**Probe:** Aufgrund der Symmetrie von Obergurt und Untergurt um die Mittelebene heben sich ihre Abweichungen von $75$ exakt auf. Der Steg sitzt ohnehin in der Mitte.

**Typischer Fehler:** Aufwendig durchrechnen, ohne die Symmetrie zu sehen. Bei jeder zusammengesetzten Fläche zuerst auf Symmetrie prüfen — spart oft die gesamte Rechnung.`,
        [
          'Liegt eine Symmetrieachse vor?',
          'Obergurt und Untergurt: gleiche Fläche, gleicher Abstand zur Mitte.',
          'Symmetrie ⇒ $y_S$ auf der Mittelebene.',
        ],
      ),
    ],

    // ── [2] Loch als negative Fläche ────────────────────────────────────
    2: [
      ni(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Eine quadratische Platte ($200 \\times 200\\,\\text{mm}$) hat ein kreisrundes Loch (Radius $r = 30\\,\\text{mm}$) mit Mittelpunkt bei $x = 60\\,\\text{mm}$, $y = 100\\,\\text{mm}$. Wo liegt $x_S$ der gelochten Platte? (Ursprung in der linken unteren Ecke, auf 2 Nachkommastellen)',
        103.04, 0.2, 'mm',
        `**Ansatz:** Loch behandeln wie negative Fläche: $x_S = (A_\\text{Voll} \\cdot x_\\text{S,Voll} - A_\\text{Loch} \\cdot x_\\text{S,Loch})/(A_\\text{Voll} - A_\\text{Loch})$.

**Rechnung:** $A_\\text{Voll} = 200^2 = 40\\,000\\,\\text{mm}^2$, $x_\\text{S,Voll} = 100\\,\\text{mm}$. $A_\\text{Loch} = \\pi \\cdot 30^2 = 900\\pi \\approx 2827{,}4\\,\\text{mm}^2$, $x_\\text{S,Loch} = 60\\,\\text{mm}$. $x_S = (40\\,000 \\cdot 100 - 2827{,}4 \\cdot 60)/(40\\,000 - 2827{,}4) = (4\\,000\\,000 - 169\\,646)/37\\,172{,}6 \\approx 103{,}04\\,\\text{mm}$.

**Probe:** Das Loch liegt links der Mitte ($x = 60 < 100$). Entfernen verschiebt den Schwerpunkt **nach rechts** (weg vom Loch). Ergebnis $x_S > 100$ ✓.

**Typischer Fehler:** Das Loch **addieren** statt subtrahieren. Oder die Fläche des Kreises vergessen: $\\pi r^2$, nicht $2\\pi r$ oder $\\pi r$.`,
        [
          'Loch = negative Teilfläche.',
          'Formel: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$.',
          'Qualitativ: Schwerpunkt wandert weg vom Loch.',
        ],
      ),
      mc(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Eine symmetrische Scheibe hat ein rundes Loch **oberhalb** der Mitte gebohrt. In welche Richtung verschiebt sich der Schwerpunkt gegenüber der unversehrten Scheibe?',
        [
          'Nach unten (weg vom Loch)',
          'Nach oben (zum Loch hin)',
          'Er bleibt gleich, weil das Loch klein ist',
          'Horizontal nach links',
        ],
        0,
        `**Ansatz:** Das Loch entspricht negativer Fläche. Subtrahieren negativer $y_L > y_\\text{Voll}$-Terme verschiebt $y_S$ nach **unten**.

**Rechnung:** $y_S = (A_V y_V - A_L y_L)/(A_V - A_L)$. Wenn $y_L > y_V$, ist der Zähler kleiner als $y_V \\cdot (A_V - A_L)$, also $y_S < y_V$. Schwerpunkt sinkt.

**Probe:** Anschaulich: Material oberhalb der Mitte wurde entfernt — die verbleibende Masse ist im Durchschnitt weiter unten. Schwerpunkt folgt der verbleibenden Masse.

**Typischer Fehler:** Intuition "Schwerpunkt wandert zum Loch" — falsch. Er wandert **weg** vom Loch, weil das Loch eine Fehl-Fläche ist, nicht eine Zusatz-Fläche.`,
        [
          'Loch = fehlende Masse.',
          'Schwerpunkt folgt der verbleibenden Masse.',
          'Weg vom Loch, nicht zum Loch.',
        ],
        {
          1: 'Das Loch zieht **nichts** an — im Gegenteil, dort fehlt Material. Der Schwerpunkt wandert weg.',
          2: 'Kleine Löcher haben kleinen Effekt, aber nicht null. Jede entfernte Fläche verschiebt den Schwerpunkt.',
          3: 'Das Loch liegt vertikal oberhalb der Mitte — die Verschiebung ist vertikal, nicht horizontal.',
        },
      ),
      ni(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Eine rechteckige Platte ($60 \\times 40\\,\\text{mm}$) hat ein quadratisches Loch ($20 \\times 20\\,\\text{mm}$) mit Mittelpunkt bei $x = 15\\,\\text{mm}$, $y = 20\\,\\text{mm}$ gebohrt (Ursprung in der linken unteren Ecke). Wo liegt $x_S$ der gelochten Platte? (auf 2 Nachkommastellen)',
        33, 0.05, 'mm',
        `**Ansatz:** Negative Fläche: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$.

**Rechnung:** $A_V = 60 \\cdot 40 = 2400\\,\\text{mm}^2$, $x_V = 30\\,\\text{mm}$. $A_L = 20 \\cdot 20 = 400\\,\\text{mm}^2$, $x_L = 15\\,\\text{mm}$. $x_S = (2400 \\cdot 30 - 400 \\cdot 15)/(2400 - 400) = (72\\,000 - 6000)/2000 = 66\\,000/2000 = 33\\,\\text{mm}$.

**Probe:** Loch links der Mitte ($x_L = 15 < 30$) → Schwerpunkt wandert nach rechts ($x_S = 33 > 30$). ✓ Verschiebung: $3\\,\\text{mm}$ — vernünftig für ein Loch mit $400/2400 \\approx 17\\,\\%$ der Fläche.

**Typischer Fehler:** $x_L$ in die Vollplatte-Formel einsetzen ohne Vorzeichenwechsel: das Loch wird dann fälschlich als Zusatzfläche gerechnet.`,
        [
          'Minus statt Plus für das Loch.',
          'Formel: $(A_V x_V - A_L x_L)/(A_V - A_L)$.',
          'Plausibilitätscheck: Schwerpunkt weg vom Loch.',
        ],
      ),
      matching(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Ordne jedem Szenario die richtige Formel zu.',
        [
          { left: 'Platte mit einem Loch', right: '$x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$' },
          { left: 'Zwei angesetzte Flächen', right: '$x_S = (A_1 x_1 + A_2 x_2)/(A_1 + A_2)$' },
          { left: 'Platte mit zwei Löchern', right: '$x_S = (A_V x_V - A_{L1} x_{L1} - A_{L2} x_{L2})/(A_V - A_{L1} - A_{L2})$' },
          { left: 'Platte mit angesetzter Fläche und einem Loch', right: '$x_S = (A_V x_V + A_A x_A - A_L x_L)/(A_V + A_A - A_L)$' },
        ],
        `**Ansatz:** Zusammengesetzte Flächen lassen sich beliebig mischen: addierte Flächen mit Plus, entfernte (Löcher) mit Minus.

**Rechnung:** Jede Teilfläche liefert einen Term $A_i x_{S,i}$ im Zähler und $A_i$ im Nenner — mit passendem Vorzeichen. Zähler und Nenner müssen konsequent mitgezogen werden.

**Probe:** Die Struktur ist additiv-linear. Ein Loch tragt negativ zu **beidem** bei: zum Moment ($A_L x_L$) und zur Gesamtfläche ($A_L$).

**Typischer Fehler:** Nur im Zähler das Minus, im Nenner aber alle Flächen positiv addieren — oder umgekehrt. Das Vorzeichen muss konsistent sein.`,
        [
          'Additiv mit Vorzeichen: Plus für angesetzte, Minus für entfernte Flächen.',
          'Vorzeichen im Zähler und Nenner gleich.',
          'Formel bleibt linear.',
        ],
      ),
      tf(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Wenn ein Loch **im Schwerpunkt** des Vollkörpers liegt, ändert sich die Schwerpunktposition durch das Loch nicht.',
        true,
        `**Ansatz:** $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$. Falls $x_L = x_V$: $x_S = (A_V x_V - A_L x_V)/(A_V - A_L) = x_V (A_V - A_L)/(A_V - A_L) = x_V$.

**Rechnung:** Das Loch zieht zwar Fläche ab, aber auch Moment — und beides im gleichen Verhältnis zu $x_V$. Der Quotient bleibt $x_V$.

**Probe:** Anschaulich: Das entfernte Material hatte selbst $x_\\text{Loch-S} = x_V$. Das verschiebt den Restschwerpunkt nicht.

**Typischer Fehler:** Annehmen, "jedes Loch verändert den Schwerpunkt". Nur Löcher **außerhalb** des ursprünglichen Schwerpunkts verschieben ihn.`,
        [
          'Setze $x_L = x_V$ in die Formel ein.',
          'Was passiert, wenn Zähler und Nenner denselben Faktor haben?',
          'Anschaulich: was hat das entfernte Material zum Schwerpunkt beigetragen?',
        ],
      ),
      sorting(
        'Sub-Goal "Loch als negative Fläche subtrahieren": Bringe die Schritte zur Berechnung des Schwerpunkts einer gelochten Platte in die richtige Reihenfolge.',
        [
          'Vollkörper und Loch getrennt definieren (Geometrie, Lage)',
          'Fläche und Schwerpunkt des Vollkörpers bestimmen: $A_V$, $x_V$',
          'Fläche und Schwerpunkt des Lochs bestimmen: $A_L$, $x_L$',
          'Momentensumme mit Vorzeichen: $A_V x_V - A_L x_L$',
          'Durch Restfläche teilen: $x_S = (A_V x_V - A_L x_L)/(A_V - A_L)$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Das Verfahren entkoppelt Vollkörper und Loch — beide werden separat charakterisiert, dann mit Vorzeichen kombiniert.

**Rechnung:** Im Zähler und Nenner das Minus für das Loch nicht vergessen. In der Formel steht das Loch wie eine "negative Masse".

**Probe:** Plausibilitätscheck: $A_V - A_L$ muss positiv sein (sonst existiert kein Restkörper). Und $x_S$ muss innerhalb des Restkörpers liegen.

**Typischer Fehler:** Den letzten Schritt vergessen und nur den Zähler ausrechnen.`,
        [
          'Erst Geometrie, dann Zahlen.',
          'Loch separat wie ein eigenes Teilkörper behandeln.',
          'Vorzeichen konsistent in Zähler und Nenner.',
        ],
      ),
    ],

    // ── [3] Symmetrie ausnutzen ─────────────────────────────────────────
    3: [
      tf(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Bei einer homogenen Fläche mit zwei zueinander senkrechten Symmetrieachsen liegt der Schwerpunkt exakt im Schnittpunkt beider Achsen.',
        true,
        `**Ansatz:** Jede Symmetrieachse zwingt den Schwerpunkt auf sich. Zwei Achsen → Schnittpunkt ist der einzige Punkt auf beiden.

**Rechnung:** Beispiel Rechteck: horizontale Mittellinie (Symmetrie) zwingt $y_S = h/2$, vertikale Mittellinie zwingt $x_S = b/2$. Schwerpunkt: $(b/2, h/2)$ — Schnittpunkt beider Mittellinien.

**Probe:** Rechteck, Quadrat, Ellipse, Kreis, reguläres Polygon (gerade Eckenzahl) — alle haben mehrere Symmetrieachsen, und der Schwerpunkt ist der Schnittpunkt.

**Typischer Fehler:** Bei einem nicht-homogenen Körper (verschiedene Materialien, Bohrungen) gilt das nicht mehr. Symmetrie der **Form** reicht nicht — es muss Symmetrie der **Massenverteilung** sein.`,
        [
          'Jede Symmetrieachse fixiert eine Koordinate des Schwerpunkts.',
          'Zwei Achsen → beide Koordinaten fixiert.',
          'Vorsicht bei inhomogenen Körpern.',
        ],
      ),
      mc(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Ein gleichseitiges Dreieck (Seitenlänge $a$) ist homogen. Wo liegt der Schwerpunkt?',
        [
          'Im Schnittpunkt der drei Seitenhalbierenden (Schwerpunkt, 1/3 von der Basis)',
          'In der Mitte des Dreiecks (Höhe/2)',
          'Genau in einer der Ecken',
          'Außerhalb des Dreiecks, weil unsymmetrisch',
        ],
        0,
        `**Ansatz:** Ein gleichseitiges Dreieck hat drei Symmetrieachsen — jede Seitenhalbierende. Der Schwerpunkt muss auf **jeder** liegen → Schnittpunkt aller drei.

**Rechnung:** Die Seitenhalbierenden schneiden sich im **Schwerpunkt** (mathematisch bewiesen: Teilungsverhältnis $2:1$ von der Ecke her). Abstand von der Basis: $h/3$ mit $h = a\\sqrt{3}/2$.

**Probe:** Bei symmetrischer Masseverteilung rund um den Schnittpunkt heben sich alle Beiträge paarweise auf.

**Typischer Fehler:** "Mitte des Dreiecks" als Höhe/2 interpretieren — falsch. Der Schwerpunkt liegt bei $h/3$ von der Basis aus, nicht bei $h/2$.`,
        [
          'Wie viele Symmetrieachsen hat ein gleichseitiges Dreieck?',
          'Schwerpunkt muss auf jeder liegen.',
          'Schnittpunkt aller Seitenhalbierenden.',
        ],
        {
          1: '"Mitte" bei $h/2$ wäre beim Rechteck korrekt. Beim Dreieck liegt der Schwerpunkt aber bei $h/3$ von der Basis aus.',
          2: 'Ecken sind Rand- und nicht Schwerpunkte — die Masse verteilt sich ja auf die ganze Fläche.',
          3: 'Bei konvexen Flächen (Dreieck, Rechteck, Kreis) liegt der Schwerpunkt **immer innerhalb**. Nur bei Ringen oder L-Formen kann er außerhalb liegen.',
        },
      ),
      ni(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Ein Kreisring hat Außenradius $R = 50\\,\\text{mm}$ und Innenradius $r = 20\\,\\text{mm}$. Wie weit liegt der Schwerpunkt vom Mittelpunkt entfernt?',
        0, 0.01, 'mm',
        `**Ansatz:** Ein Kreisring ist **zentralsymmetrisch** (unendlich viele Symmetrieachsen durch den Mittelpunkt). Der Schwerpunkt muss auf allen liegen — nur der Mittelpunkt selbst erfüllt das.

**Rechnung:** Keine Rechnung nötig — die Symmetrie liefert die Antwort direkt. Abstand zum Mittelpunkt: $0$.

**Probe:** Auch für einen Halbkreisring bleibt die Symmetrieachse durch den Mittelpunkt und den höchsten Punkt — dort liegt der Schwerpunkt auf dieser Achse, aber **nicht** im Mittelpunkt ($4r/(3\\pi)$-Regel).

**Typischer Fehler:** Die Flächenformel $A_\\text{Ring} = \\pi(R^2 - r^2)$ für nicht-existente Schwerpunktberechnung benutzen. Bei voller Rotationssymmetrie ist der Schwerpunkt immer im Zentrum.`,
        [
          'Wie viele Symmetrieachsen hat ein Kreisring?',
          'Jede Achse enthält den Schwerpunkt.',
          'Zentralsymmetrie ⇒ Schwerpunkt im Zentrum.',
        ],
      ),
      matching(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Ordne jedem Körper die Lage seines Schwerpunkts zu.',
        [
          { left: 'Homogene Kugel', right: 'Kugelmittelpunkt (Zentralsymmetrie)' },
          { left: 'Homogener Zylinder', right: 'Auf der Zylinderachse, auf halber Höhe' },
          { left: 'Gleichschenkliges Dreieck', right: 'Auf der Symmetrieachse (Mittelsenkrechte auf Basis)' },
          { left: 'I-Profil (Doppel-T)', right: 'Auf der Mittelebene (horizontal-vertikale Symmetrie)' },
        ],
        `**Ansatz:** In jedem Fall erzwingt die Symmetrie die Lage des Schwerpunkts. Höhere Symmetrie → mehr Bedingungen → engere Lokalisierung.

**Rechnung:** Kugel: vollständige Symmetrie → Punktfixierung. Zylinder: Rotationssymmetrie + Spiegelsymmetrie → Linie und Ebene → Punkt auf Achse auf halber Höhe. Dreieck (gleichschenklig): **eine** Symmetrieachse → Schwerpunkt auf dieser Achse (aber nicht in der Mitte!). I-Profil: zwei Achsen → Schnittpunkt.

**Probe:** Zeichne die Körper und markiere alle Symmetrieachsen. Der Schwerpunkt muss der gemeinsame Punkt sein.

**Typischer Fehler:** Symmetrieachsen im 3D-Körper nur auf eine Schnittebene projizieren. Bei Kugel und Zylinder muss man auch die anderen Achsen beachten.`,
        [
          'Symmetrieachsen zählen.',
          'Schwerpunkt auf jeder Achse.',
          'Schnittpunkt aller Achsen.',
        ],
      ),
      sorting(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Bringe die Checkliste "Symmetrie vor Rechnung" in die richtige Reihenfolge.',
        [
          'Körper skizzieren und Geometrie klären',
          'Alle Symmetrieachsen / Symmetrieebenen eintragen',
          'Schnittpunkt / Schnittgerade der Achsen identifizieren',
          'Falls eindeutige Lage: Ergebnis direkt angeben (keine Rechnung nötig)',
          'Falls noch mehrdeutig: gewichtete Schwerpunktformel nur für die verbleibende Koordinate anwenden',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Die beste Schwerpunktrechnung ist oft keine — jede Symmetrieachse spart eine Koordinate.

**Rechnung:** Beispiel gleichschenkliges Dreieck: Symmetrieachse liefert $x_S = 0$ sofort. Nur $y_S$ muss gerechnet werden. Aufwand halbiert.

**Probe:** Bei I-Profil: zwei Symmetrieachsen → Ergebnis ohne jede Rechnung. Nur asymmetrische Profile (L, Z) brauchen die volle Formel.

**Typischer Fehler:** Blind die Formel ansetzen, ohne auf Symmetrie zu achten. Ergebnis stimmt, aber der Weg ist unnötig aufwendig und fehleranfällig.`,
        [
          'Symmetrie ist der schnellste Weg zum Schwerpunkt.',
          'Achsen einzeichnen **vor** der Rechnung.',
          'Nur die nicht durch Symmetrie fixierten Koordinaten rechnen.',
        ],
      ),
      ni(
        'Sub-Goal "Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse": Ein symmetrisches T-Profil (Obergurt $100 \\times 10\\,\\text{mm}$ zentriert über Steg $10 \\times 80\\,\\text{mm}$) wird vertikal durch seine Symmetrieachse (Mitte des Stegs) betrachtet. Wie groß ist $x_S$ gemessen vom linken Rand des Obergurts? (auf 1 Nachkommastelle)',
        50, 0.1, 'mm',
        `**Ansatz:** Das T-Profil hat eine **vertikale** Symmetrieachse (Mitte von Obergurt und Steg). Der Schwerpunkt liegt auf dieser Achse.

**Rechnung:** Der Obergurt hat Breite $100\\,\\text{mm}$ → Mitte bei $50\\,\\text{mm}$ vom linken Rand. Die Symmetrieachse des Profils fällt mit $x = 50$ zusammen. Daher $x_S = 50\\,\\text{mm}$.

**Probe:** Alternative Rechnung über die Formel: Obergurt $A_1 = 1000$, $x_{S1} = 50$; Steg $A_2 = 800$, $x_{S2} = 50$ (auch in der Mitte). $x_S = (1000 \\cdot 50 + 800 \\cdot 50)/1800 = 50 \\cdot (1000+800)/1800 = 50$. ✓

**Typischer Fehler:** Über die gewichtete Summe rechnen, obwohl die Symmetrie die Antwort sofort liefert.`,
        [
          'Gibt es eine vertikale Symmetrieachse?',
          'Wo liegt sie relativ zum linken Rand?',
          'Symmetrieachse = $x_S$-Linie.',
        ],
      ),
    ],

    // ── [4] Standardflächen auswendig ───────────────────────────────────
    4: [
      matching(
        'Sub-Goal "Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$": Ordne jeder Standardfläche ihre Schwerpunkt-Position zu (gemessen entlang der Symmetrieachse von der Basis bzw. vom Mittelpunkt aus).',
        [
          { left: 'Rechteck (Basis $b$, Höhe $h$)', right: 'Schwerpunkt in der Mitte: $h/2$ über der Basis' },
          { left: 'Dreieck (Basis $b$, Höhe $h$)', right: 'Schwerpunkt bei $h/3$ über der Basis (nahe der Basis)' },
          { left: 'Halbkreis (Radius $r$)', right: 'Schwerpunkt bei $4r/(3\\pi) \\approx 0{,}424\\,r$ vom Durchmesser' },
          { left: 'Viertelkreis (Radius $r$)', right: 'Schwerpunkt bei $4r/(3\\pi)$ von jedem der beiden Radien' },
        ],
        `**Ansatz:** Diese Werte sind auswendig zu lernen — sie tauchen in jeder Profil- oder Querschnittsaufgabe auf. Herleitung über Integralrechnung, aber im Maschinenbau-Alltag direkt verwendet.

**Rechnung:** Rechteck: $h/2$ (Symmetrie). Dreieck: $h/3$ über der Basis (oder $2h/3$ von der Spitze). Halbkreis: $4r/(3\\pi) \\approx 0{,}424\\,r$ vom Durchmesser weg. Viertelkreis: $4r/(3\\pi)$ von beiden Radien, gemessen entlang der Symmetriediagonale.

**Probe:** Einheiten: alle Werte sind Längen ($\\propto r$ oder $h$). Der Halbkreis-Schwerpunkt liegt **innerhalb** des Halbkreises ($0{,}424 < 1$), was auch anschaulich stimmt.

**Typischer Fehler:** Dreiecksschwerpunkt bei $h/2$ (falsch, das wäre Rechteck). Oder Halbkreis-Schwerpunkt bei $r/2$ (falsch — richtig ist $4r/(3\\pi) \\approx 0{,}424\\,r$, also etwas näher am Durchmesser als $r/2$). Außerdem: Dreiecksschwerpunkt vom falschen Ende (Spitze statt Basis).`,
        [
          'Rechteck: Mitte.',
          'Dreieck: näher an der Basis als an der Spitze.',
          'Halbkreis: knapp unter halbem Radius.',
        ],
      ),
      ni(
        'Sub-Goal "Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$": Wo liegt der Schwerpunkt eines Halbkreises mit Radius $r = 30\\,\\text{mm}$, gemessen vom Durchmesser? (auf 2 Nachkommastellen)',
        12.73, 0.05, 'mm',
        `**Ansatz:** Standardformel: Schwerpunktabstand Halbkreis vom Durchmesser ist $y_S = 4r/(3\\pi)$.

**Rechnung:** $y_S = 4 \\cdot 30/(3 \\pi) = 120/(3\\pi) = 40/\\pi \\approx 12{,}732\\,\\text{mm}$.

**Probe:** Qualitativ: $4/(3\\pi) \\approx 0{,}424$. Schwerpunkt liegt bei $\\approx 42{,}4\\,\\%$ des Radius vom Durchmesser entfernt — etwas weniger als die Hälfte, was zur Masseverteilung (mehr Fläche nahe Durchmesser) passt.

**Typischer Fehler:** $y_S = r/2 = 15\\,\\text{mm}$ annehmen. Das wäre die Mitte eines Rechtecks, kein Halbkreis. Oder $y_S = 2r/(3\\pi)$ (Faktor $2$ vergessen): $\\approx 6{,}37\\,\\text{mm}$.`,
        [
          'Formel auswendig: $y_S = 4r/(3\\pi)$.',
          'Einsetzen: $r = 30$.',
          'Ergebnis: $\\approx 0{,}424\\,r$.',
        ],
      ),
      mc(
        'Sub-Goal "Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$": Ein Dreieck hat Höhe $h = 90\\,\\text{mm}$. Wo liegt der Schwerpunkt gemessen **von der Spitze** aus?',
        ['$y_S = 60\\,\\text{mm}$ (bei $2h/3$ von der Spitze)', '$y_S = 30\\,\\text{mm}$ (bei $h/3$ von der Spitze)', '$y_S = 45\\,\\text{mm}$ (bei $h/2$)', '$y_S = 90\\,\\text{mm}$ (an der Basis)'],
        0,
        `**Ansatz:** Dreiecksschwerpunkt liegt bei $h/3$ **von der Basis** aus — das entspricht $2h/3$ von der Spitze.

**Rechnung:** $h/3 = 30\\,\\text{mm}$ von der Basis. Spitze ist $h = 90\\,\\text{mm}$ entfernt. Vom Spitzen-Ende: $90 - 30 = 60\\,\\text{mm}$, also $2h/3$.

**Probe:** Das Dreieck hat mehr Fläche an der **Basis** (breit) als an der **Spitze** (schmal). Schwerpunkt wandert zur massereicheren Seite — Richtung Basis → $2h/3$ von der Spitze.

**Typischer Fehler:** Die Angabe "$h/3$" unkritisch als Abstand von der Spitze interpretieren. Die Konvention ist: $h/3$ **von der Basis**. Immer Bezugspunkt klären.`,
        [
          'Schwerpunkt ist näher an der breiteren Seite (Basis).',
          'Abstand zur Basis: $h/3$.',
          'Abstand zur Spitze: $h - h/3 = 2h/3$.',
        ],
        {
          1: 'Das ist $h/3 = 30\\,\\text{mm}$ als Abstand **zur Basis** — korrekt, aber die Frage fragt nach dem Abstand **zur Spitze**.',
          2: '$h/2 = 45\\,\\text{mm}$ wäre der Rechteck-Schwerpunkt, nicht Dreieck.',
          3: 'Der Schwerpunkt liegt **nicht an der Basis**, sondern ein Drittel innerhalb des Dreiecks von der Basis aus.',
        },
      ),
      tf(
        'Sub-Goal "Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$": Der Schwerpunkt eines Halbkreises liegt genau in der Mitte seines Radius, also bei $r/2$ vom Durchmesser aus.',
        false,
        `**Ansatz:** Der Halbkreis-Schwerpunkt liegt bei $4r/(3\\pi) \\approx 0{,}4244\\,r$, **nicht** bei $r/2 = 0{,}5\\,r$.

**Rechnung:** $4/(3\\pi) = 4/9{,}4248 \\approx 0{,}4244$. Der wahre Wert ist **kleiner** als $r/2$ — weil der Halbkreis zum Durchmesser hin breiter wird und dort mehr Fläche hat.

**Probe:** Qualitatives Argument: Die Fläche bei kleinen $y$ (nahe Durchmesser) ist breiter als bei großen $y$ (nahe Kreisrand). Mehr Fläche zieht den Schwerpunkt zum Durchmesser → $y_S < r/2$. ✓

**Typischer Fehler:** "Halbkreis-Mitte" intuitiv bei $r/2$ ansetzen. Diese Intuition stimmt nur für Rechtecke. Bei Flächen mit nicht-konstanter Breite kommt der Schwerpunkt aus einem Integral — hier $4r/(3\\pi)$.`,
        [
          'Vergleiche $4/(3\\pi)$ mit $1/2$.',
          '$3\\pi \\approx 9{,}42$, also $4/9{,}42 \\approx 0{,}42 < 0{,}5$.',
          'Der Halbkreis ist am Durchmesser breiter.',
        ],
      ),
      ni(
        'Sub-Goal "Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$": Ein Profil besteht aus einem Rechteck ($60 \\times 40\\,\\text{mm}$) mit einem aufgesetzten Dreieck (Basis $60\\,\\text{mm}$ auf der Oberkante des Rechtecks, Höhe $30\\,\\text{mm}$ nach oben). Wo liegt $y_S$ des Gesamtprofils? (Ursprung in der linken unteren Ecke des Rechtecks, auf 1 Nachkommastelle)',
        28.2, 0.2, 'mm',
        `**Ansatz:** Rechteck-Schwerpunkt $y_{S1} = 20\\,\\text{mm}$ (Mitte). Dreieck-Schwerpunkt $y_{S2} = 40 + h/3 = 40 + 10 = 50\\,\\text{mm}$ (Basis auf Oberkante, $h/3$ darüber). Flächengewichtetes Mittel.

**Rechnung:** $A_1 = 60 \\cdot 40 = 2400\\,\\text{mm}^2$, $y_{S1} = 20\\,\\text{mm}$. $A_2 = \\tfrac{1}{2} \\cdot 60 \\cdot 30 = 900\\,\\text{mm}^2$, $y_{S2} = 50\\,\\text{mm}$. $y_S = (2400 \\cdot 20 + 900 \\cdot 50)/(2400 + 900) = (48\\,000 + 45\\,000)/3300 = 93\\,000/3300 \\approx 28{,}18\\,\\text{mm}$.

**Probe:** Ergebnis $\\approx 28\\,\\text{mm}$ liegt zwischen $20$ und $50$. ✓ Näher an $20$, weil $A_1 > A_2$.

**Typischer Fehler:** Dreieck-Schwerpunkt bei $y = 40 + 15 = 55\\,\\text{mm}$ (mit $h/2$ statt $h/3$). Oder Dreiecksfläche als $b \\cdot h$ statt $\\tfrac{1}{2} b h$.`,
        [
          'Rechteck-Schwerpunkt: Mitte der Höhe.',
          'Dreieck-Schwerpunkt: $h/3$ über der Basis.',
          'Dreiecksfläche: $\\tfrac{1}{2} b h$ — Faktor 1/2 nicht vergessen.',
        ],
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-2-4 — Schwingungen  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-2-4': {

    // ── [0] Eigenkreisfrequenz $\omega_0 = \sqrt{c/m}$, Periode $T = 2\pi/\omega_0$ ─
    0: [
      ni(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": Ein Feder-Masse-System hat $c = 800\\,\\text{N/m}$ und $m = 2\\,\\text{kg}$. Wie groß ist $\\omega_0$?',
        20, 0.05, 'rad/s',
        `**Ansatz:** Eigenkreisfrequenz des ungedämpften Feder-Masse-Systems: $\\omega_0 = \\sqrt{c/m}$.

**Rechnung:** $c/m = 800/2 = 400\\,\\text{s}^{-2}$. $\\omega_0 = \\sqrt{400} = 20\\,\\text{rad/s}$.

**Probe:** Einheiten: $\\sqrt{(\\text{N/m})/\\text{kg}} = \\sqrt{1/\\text{s}^2} = \\text{rad/s}$. ✓ Zahlenwert plausibel (typische Werte liegen zwischen $1$ und $100\\,\\text{rad/s}$ für mechanische Systeme).

**Typischer Fehler:** Quotient $c/m = 400$ direkt als $\\omega_0$ angeben — Wurzel vergessen. Dimension wäre $\\text{s}^{-2}$ statt $\\text{rad/s}$.`,
        [
          'Formel: $\\omega_0 = \\sqrt{c/m}$.',
          'Erst $c/m$ bilden, dann Wurzel.',
          'Einheit Endergebnis: rad/s.',
        ],
      ),
      mc(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": Wie ändert sich $\\omega_0$, wenn die Masse bei gleicher Feder **verdoppelt** wird?',
        [
          '$\\omega_0$ wird um den Faktor $1/\\sqrt{2}$ kleiner',
          '$\\omega_0$ wird halbiert',
          '$\\omega_0$ bleibt gleich',
          '$\\omega_0$ wird um den Faktor $\\sqrt{2}$ größer',
        ],
        0,
        `**Ansatz:** Aus $\\omega_0 = \\sqrt{c/m}$ folgt: wenn $m \\to 2m$, dann $\\omega_{0,\\text{neu}} = \\sqrt{c/(2m)} = \\omega_0/\\sqrt{2}$.

**Rechnung:** Verhältnis $\\omega_{0,\\text{neu}}/\\omega_0 = \\sqrt{1/2} = 1/\\sqrt{2} \\approx 0{,}707$. Also: $\\omega_0$ wird um Faktor $0{,}707$ kleiner.

**Probe:** Anschaulich: schwerere Masse → träger → langsamere Schwingung → kleinere Kreisfrequenz und längere Periode. Periode $T = 2\\pi/\\omega_0$ wächst entsprechend um $\\sqrt{2}$.

**Typischer Fehler:** Die Wurzel vergessen und linear rechnen ($\\omega_0$ halbieren). Oder Richtung umdrehen ($\\omega_0$ größer machen).`,
        [
          '$m$ erscheint **unter** der Wurzel im Nenner.',
          '$\\sqrt{1/2} = 1/\\sqrt{2}$.',
          'Mehr Masse = träger = langsamer.',
        ],
        {
          1: 'Halbieren würde $\\omega_{0,\\text{neu}} = \\omega_0/2$ bedeuten — das ignoriert die Wurzel. Die Abhängigkeit ist quadratwurzelförmig, nicht linear.',
          2: 'Die Eigenfrequenz hängt von der Masse ab — größere Masse verschiebt $\\omega_0$ nach unten. "Bleibt gleich" gilt nur beim mathematischen Pendel.',
          3: 'Die Richtung ist falsch. Größere Masse erhöht die Trägheit, die Frequenz sinkt (nicht steigt).',
        },
      ),
      ni(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": $c = 500\\,\\text{N/m}$, $m = 5\\,\\text{kg}$. Berechne die Schwingungsdauer $T$. (auf 2 Nachkommastellen)',
        0.63, 0.01, 's',
        `**Ansatz:** Erst $\\omega_0 = \\sqrt{c/m}$, dann $T = 2\\pi/\\omega_0$.

**Rechnung:** $\\omega_0 = \\sqrt{500/5} = \\sqrt{100} = 10\\,\\text{rad/s}$. $T = 2\\pi/10 \\approx 0{,}6283\\,\\text{s} \\approx 0{,}63\\,\\text{s}$.

**Probe:** Alternative Formel $T = 2\\pi\\sqrt{m/c} = 2\\pi \\sqrt{0{,}01} = 2\\pi \\cdot 0{,}1 = 0{,}628\\,\\text{s}$. ✓ Einheit: rad/s → $1/\\text{rad/s} \\cdot \\text{rad} = \\text{s}$. ✓

**Typischer Fehler:** $T = 2\\pi \\cdot \\omega_0$ rechnen — liefert $62{,}8\\,\\text{s}$, absurd groß. Oder $T = 1/\\omega_0 = 0{,}1\\,\\text{s}$ (Faktor $2\\pi$ unterschlagen).`,
        [
          '$\\omega_0 = \\sqrt{500/5} = 10\\,\\text{rad/s}$.',
          'Periode: $T = 2\\pi/\\omega_0$ (Division!).',
          '$2\\pi/10 \\approx 0{,}628\\,\\text{s}$.',
        ],
      ),
      tf(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": Wird die Federsteifigkeit $c$ verdoppelt (Masse gleich), verdoppelt sich auch die Eigenkreisfrequenz $\\omega_0$.',
        false,
        `**Ansatz:** $\\omega_0 = \\sqrt{c/m}$ — Abhängigkeit ist $\\sqrt{c}$, nicht linear in $c$.

**Rechnung:** Bei $c \\to 2c$ ergibt sich $\\omega_{0,\\text{neu}} = \\sqrt{2c/m} = \\sqrt{2} \\cdot \\omega_0$. Also Faktor $\\sqrt{2} \\approx 1{,}414$, nicht $2$.

**Probe:** Konkret: $c = 400$, $m = 1$ → $\\omega_0 = 20\\,\\text{rad/s}$. Verdopple $c$ auf $800$: $\\omega_0 = \\sqrt{800} \\approx 28{,}28\\,\\text{rad/s} = \\sqrt{2} \\cdot 20$. ✓

**Typischer Fehler:** Die Wurzel gedanklich weglassen und linear rechnen. Um $\\omega_0$ zu verdoppeln, müsste $c$ **vervierfacht** werden.`,
        [
          '$\\omega_0 = \\sqrt{c/m}$ — Wurzel beachten.',
          '$\\sqrt{2c} = \\sqrt{2}\\sqrt{c}$.',
          '$\\omega_0$ hängt **sub**linear von $c$ ab.',
        ],
      ),
      matching(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": Ordne jeder Änderung am Feder-Masse-System die resultierende Änderung von $\\omega_0$ zu.',
        [
          { left: 'Masse $m$ verdoppeln', right: '$\\omega_0$ um Faktor $1/\\sqrt{2}$ kleiner' },
          { left: 'Masse $m$ halbieren', right: '$\\omega_0$ um Faktor $\\sqrt{2}$ größer' },
          { left: 'Federsteifigkeit $c$ verdoppeln', right: '$\\omega_0$ um Faktor $\\sqrt{2}$ größer' },
          { left: 'Federsteifigkeit $c$ vervierfachen', right: '$\\omega_0$ verdoppelt sich' },
        ],
        `**Ansatz:** Aus $\\omega_0 = \\sqrt{c/m}$ liest man die Skalierungen direkt ab: jede Änderung im Radikanden um Faktor $k$ wirkt als $\\sqrt{k}$ auf $\\omega_0$.

**Rechnung:** $m \\to 2m \\Rightarrow \\omega_0/\\sqrt{2}$. $m \\to m/2 \\Rightarrow \\sqrt{2}\\omega_0$. $c \\to 2c \\Rightarrow \\sqrt{2}\\omega_0$. $c \\to 4c \\Rightarrow 2\\omega_0$.

**Probe:** Merkregel — um $\\omega_0$ zu verdoppeln, reicht entweder $c \\times 4$ oder $m \\div 4$. Diese Asymmetrie zwischen $c$ und $m$ (beide wirken unter der Wurzel) ist prüfungsrelevant.

**Typischer Fehler:** Linear statt $\\sqrt{\\cdot}$ skalieren und z. B. denken, Feder verdoppeln verdopple $\\omega_0$.`,
        [
          '$\\omega_0 = \\sqrt{c/m}$ — Faktor unter der Wurzel wirkt als $\\sqrt{\\cdot}$.',
          '$\\sqrt{2} \\approx 1{,}414$, $1/\\sqrt{2} \\approx 0{,}707$.',
          '$\\sqrt{4} = 2$ — darum braucht es Faktor $4$ in $c$, um $\\omega_0$ zu verdoppeln.',
        ],
      ),
      sorting(
        'Sub-Goal "Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$": Bringe die Schritte zur Berechnung der Schwingungsdauer $T$ aus $c$ und $m$ in die richtige Reihenfolge.',
        [
          '$T$ aus $2\\pi/\\omega_0$ ausrechnen und Einheit (Sekunde) prüfen',
          'Formel notieren: $\\omega_0 = \\sqrt{c/m}$',
          'Quotient $c/m$ mit konsistenten Einheiten (N/m und kg) bilden',
          'Wurzel ziehen: $\\omega_0$ in rad/s',
          'Periodenformel $T = 2\\pi/\\omega_0$ aufschreiben',
        ],
        [1, 2, 3, 4, 0],
        `**Ansatz:** Erst Formel, dann Einsetzen, dann Wurzel, dann Periode — sonst schleichen sich Einheitenfehler ein.

**Rechnung:** Logische Reihenfolge: (1) Formel $\\omega_0 = \\sqrt{c/m}$ hinschreiben, (2) $c/m$ einsetzen, (3) Wurzel ziehen, (4) Periodenformel $T = 2\\pi/\\omega_0$ notieren, (5) $T$ ausrechnen und Einheit prüfen.

**Probe:** Ohne Schritt (2) landet man schnell in einem Einheitensalat ($c$ in N/mm statt N/m ist ein Klassiker). Schritt (5) (Einheitencheck) ist die letzte Versicherung gegen grobe Fehler.

**Typischer Fehler:** Direkt zur Periodenformel $T = 2\\pi\\sqrt{m/c}$ springen und die Einheitenprüfung auslassen — wenn $c$ versehentlich in N/mm angegeben wurde, ist $T$ um Faktor $\\sqrt{1000} \\approx 31{,}6$ falsch.`,
        [
          'Formel zuerst, Zahlen danach.',
          'Einheiten vor dem Wurzelziehen prüfen.',
          'Faktor $2\\pi$ erst am Ende.',
        ],
      ),
    ],

    // ── [1] Harmonische Schwingung: $x(t) = A \sin(\omega_0 t + \varphi)$ ──
    1: [
      mc(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Was bezeichnet der Parameter $A$ in der Schwingungsgleichung?',
        [
          'Die maximale Auslenkung aus der Ruhelage (Amplitude)',
          'Die Kreisfrequenz in rad/s',
          'Die Periodendauer in Sekunden',
          'Den Phasenwinkel zum Zeitpunkt $t = 0$',
        ],
        0,
        `**Ansatz:** In $x(t) = A \\sin(\\omega_0 t + \\varphi)$ hat der Sinus den Wertebereich $[-1, +1]$. $A$ ist der **Vorfaktor**, also der Maximalwert von $|x(t)|$.

**Rechnung:** $x_\\max = A \\cdot 1 = A$, $x_\\min = -A$. $A$ trägt dieselbe Einheit wie $x$ (meist Meter).

**Probe:** Beispiel $A = 0{,}03\\,\\text{m}$: Masse pendelt zwischen $-30\\,\\text{mm}$ und $+30\\,\\text{mm}$ um die Ruhelage.

**Typischer Fehler:** $A$ mit der Kreisfrequenz $\\omega_0$ oder dem Phasenwinkel $\\varphi$ verwechseln. Merkregel: $A$ steht **vor** dem Sinus, $\\omega_0$ und $\\varphi$ stehen **im** Sinus.`,
        [
          'Im Sinus: $\\omega_0$ und $\\varphi$. Vor dem Sinus: $A$.',
          'Sinus hat Wertebereich $[-1, +1]$.',
          'Einheit von $A$ = Einheit von $x$.',
        ],
        {
          1: 'Die Kreisfrequenz ist $\\omega_0$ — sie steht **im** Sinus-Argument, nicht davor.',
          2: 'Die Periodendauer ergibt sich aus $T = 2\\pi/\\omega_0$. Sie ist kein direkter Parameter in der Schwingungsgleichung.',
          3: 'Der Phasenwinkel ist $\\varphi$ — er steht im Argument neben $\\omega_0 t$.',
        },
      ),
      ni(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Gegeben $x(t) = 0{,}05 \\sin(10t + \\pi/6)\\,\\text{m}$. Welche Auslenkung $x(0)$ liegt bei $t = 0$ vor? (auf 3 Nachkommastellen in Meter)',
        0.025, 0.001, 'm',
        `**Ansatz:** $t = 0$ einsetzen: $x(0) = A \\sin(\\varphi)$.

**Rechnung:** $x(0) = 0{,}05 \\cdot \\sin(\\pi/6) = 0{,}05 \\cdot 0{,}5 = 0{,}025\\,\\text{m}$.

**Probe:** $x(0)$ muss im Intervall $[-A, +A] = [-0{,}05; 0{,}05]\\,\\text{m}$ liegen. $0{,}025$ liegt dort. ✓ Außerdem: $\\sin(\\pi/6) = 0{,}5$ ist eine Standardwert-Sicherheit (Prüfungs-Memory).

**Typischer Fehler:** $\\sin(\\pi/6)$ als $\\sqrt{3}/2 \\approx 0{,}866$ (das wäre $\\sin(\\pi/3)$) oder als $\\sqrt{2}/2 \\approx 0{,}707$ (das wäre $\\sin(\\pi/4)$) einsetzen. Oder Winkel im Gradmaß interpretieren statt im Bogenmaß.`,
        [
          '$t = 0$ einsetzen: nur der Phasenterm bleibt.',
          '$\\sin(\\pi/6) = 0{,}5$ (Standardwert!).',
          'Das Argument ist in rad, nicht in Grad.',
        ],
      ),
      tf(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Der Phasenwinkel $\\varphi$ verschiebt die Schwingung entlang der Zeitachse, ohne Amplitude oder Frequenz zu verändern.',
        true,
        `**Ansatz:** Mit $\\sin(\\omega_0 t + \\varphi) = \\sin(\\omega_0 (t + \\varphi/\\omega_0))$ ist $\\varphi$ äquivalent zu einer Zeitverschiebung um $\\Delta t = \\varphi/\\omega_0$.

**Rechnung:** Amplitude $A$ steht **vor** dem Sinus — bleibt unverändert. Frequenz $\\omega_0$ multipliziert mit $t$ — bleibt unverändert. Nur die Nulldurchgänge verschieben sich.

**Probe:** Beispiel: $\\varphi = \\pi/2$ macht aus $\\sin$ einen $\\cos$ — dieselbe Kurve, nur um $T/4$ früher.

**Typischer Fehler:** Glauben, $\\varphi$ ändere die Amplitude (nein — $A$ ist unabhängig) oder die Periode (nein — $T = 2\\pi/\\omega_0$ unabhängig von $\\varphi$).`,
        [
          '$\\varphi$ ist additiv im Sinus-Argument.',
          '$\\sin(\\omega_0 t + \\varphi)$ kann als $\\sin(\\omega_0 (t - t_0))$ geschrieben werden.',
          'Amplitude und Frequenz sind vom Phasenwinkel entkoppelt.',
        ],
      ),
      ni(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Amplitude $A = 0{,}02\\,\\text{m}$, $\\omega_0 = 50\\,\\text{rad/s}$. Wie groß ist die maximale Geschwindigkeit $v_\\max$?',
        1, 0.01, 'm/s',
        `**Ansatz:** $v(t) = \\dot{x}(t) = A \\omega_0 \\cos(\\omega_0 t + \\varphi)$. Maximum bei $\\cos = 1$: $v_\\max = A \\omega_0$.

**Rechnung:** $v_\\max = 0{,}02 \\cdot 50 = 1{,}0\\,\\text{m/s}$.

**Probe:** Einheiten: $\\text{m} \\cdot \\text{rad/s} = \\text{m/s}$ (rad einheitenlos). ✓ Plausibilität: Schwingung mit $2\\,\\text{cm}$ Amplitude und Periode $T = 2\\pi/50 \\approx 0{,}126\\,\\text{s}$ — schnelle Bewegung, $1\\,\\text{m/s}$ ist realistisch.

**Typischer Fehler:** $v_\\max = A$ (ohne $\\omega_0$) rechnen. Oder die maximale Beschleunigung $a_\\max = A\\omega_0^2$ mit der Geschwindigkeit verwechseln.`,
        [
          'Ableitung des Sinus ergibt Kosinus, plus Kettenregel-Faktor $\\omega_0$.',
          'Maximum des Kosinus ist $1$.',
          '$v_\\max = A \\omega_0$.',
        ],
      ),
      matching(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Ordne jedem Parameter die richtige physikalische Bedeutung zu.',
        [
          { left: '$A$', right: 'Amplitude — maximale Auslenkung aus der Ruhelage' },
          { left: '$\\omega_0$', right: 'Eigenkreisfrequenz in rad/s' },
          { left: '$\\varphi$', right: 'Phasenwinkel — Anfangszustand zum Zeitpunkt $t = 0$' },
          { left: '$T = 2\\pi/\\omega_0$', right: 'Periodendauer — Zeit für einen vollen Zyklus' },
        ],
        `**Ansatz:** Jeder Parameter in $x(t) = A\\sin(\\omega_0 t + \\varphi)$ hat genau eine Bedeutung — Standardvokabular der Schwingungslehre.

**Rechnung:** $A$ (Meter) skaliert die Auslenkung. $\\omega_0$ (rad/s) bestimmt, wie schnell die Schwingung "tickt". $\\varphi$ (rad) verschiebt die Nullphase. $T$ ergibt sich abgeleitet aus $\\omega_0$.

**Probe:** Merke: "Amplitude vor dem Sinus, Winkel drinnen" — $A$ außen, $\\omega_0$ und $\\varphi$ innen. Die Periode $T$ ist **kein** Parameter der Gleichung, sondern folgt aus $\\omega_0$.

**Typischer Fehler:** $\\omega_0$ und die technische Frequenz $f_0 = \\omega_0/(2\\pi)$ gleichsetzen. Beide sind "Frequenzen", aber verschiedene Einheiten: rad/s vs. Hz.`,
        [
          'Vor dem Sinus: Amplitude.',
          'Im Sinus-Argument: $\\omega_0 t + \\varphi$ — Frequenz × Zeit plus Phase.',
          'Periode und Kreisfrequenz stehen über $T = 2\\pi/\\omega_0$ in Verbindung.',
        ],
      ),
      mc(
        'Sub-Goal "Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$": Welche Funktion beschreibt die Beschleunigung $a(t) = \\ddot{x}(t)$?',
        [
          '$a(t) = -A \\omega_0^2 \\sin(\\omega_0 t + \\varphi) = -\\omega_0^2 \\, x(t)$',
          '$a(t) = A \\omega_0 \\cos(\\omega_0 t + \\varphi)$',
          '$a(t) = A \\omega_0^2 \\sin(\\omega_0 t + \\varphi)$',
          '$a(t) = -A \\omega_0 \\sin(\\omega_0 t + \\varphi)$',
        ],
        0,
        `**Ansatz:** Zweimal nach $t$ ableiten. $\\dot{x} = A\\omega_0\\cos(\\omega_0 t + \\varphi)$, $\\ddot{x} = -A\\omega_0^2\\sin(\\omega_0 t + \\varphi)$.

**Rechnung:** Jede Ableitung zieht einen Faktor $\\omega_0$ (Kettenregel) und dreht $\\sin \\to \\cos \\to -\\sin$. Nach zweimaliger Ableitung: Vorzeichen negativ, Faktor $\\omega_0^2$.

**Probe:** Setze ein in die DGL: $\\ddot{x} + \\omega_0^2 x = -\\omega_0^2 x + \\omega_0^2 x = 0$ ✓. Das ist genau die ungedämpfte Schwingungsgleichung. $a(t) = -\\omega_0^2 x(t)$ ist eine kompakte Merkregel.

**Typischer Fehler:** Das Vorzeichen vergessen oder nur einen Faktor $\\omega_0$ statt $\\omega_0^2$ herausziehen. Oder die Geschwindigkeit mit der Beschleunigung verwechseln.`,
        [
          'Ableiten: Sinus → Kosinus, Faktor $\\omega_0$ aus Kettenregel.',
          'Zweite Ableitung: Kosinus → –Sinus, weiterer Faktor $\\omega_0$.',
          'Endergebnis enthält $\\omega_0^2$ und Vorzeichenwechsel.',
        ],
        {
          1: 'Das ist die **Geschwindigkeit** $v(t) = \\dot{x}(t)$. Beschleunigung braucht zweite Ableitung.',
          2: 'Der Betrag stimmt, aber das Vorzeichen ist falsch. Zweimal Sinus ableiten ergibt $-\\sin$, nicht $+\\sin$.',
          3: 'Nur ein Faktor $\\omega_0$ — das ist die Geschwindigkeit (mit falschem Vorzeichen). Zweimal ableiten gibt $\\omega_0^2$.',
        },
      ),
    ],

    // ── [2] Resonanz bei $\Omega = \omega_0$ ─────────────────────────────
    2: [
      mc(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Wann tritt Resonanz bei einem schwingungsfähigen System auf?',
        [
          'Wenn die Erregerfrequenz $\\Omega$ mit der Eigenfrequenz $\\omega_0$ übereinstimmt',
          'Wenn die Erregerfrequenz $\\Omega$ viel größer als $\\omega_0$ ist',
          'Wenn die Erregerfrequenz $\\Omega$ null ist',
          'Wenn die Masse gegen null geht',
        ],
        0,
        `**Ansatz:** Resonanz ist der Fall, in dem die äußere Anregung phasenrichtig in jeder Periode Energie einspeist — nur möglich, wenn beide Frequenzen übereinstimmen.

**Rechnung:** In der Bewegungsgleichung $\\ddot{x} + \\omega_0^2 x = (F_0/m)\\sin(\\Omega t)$ enthält die partikuläre Lösung einen Faktor $1/(\\omega_0^2 - \\Omega^2)$. Dieser Term divergiert bei $\\Omega \\to \\omega_0$.

**Probe:** Alltag: eine Schaukel im richtigen Takt anschubsen — Amplitude wächst. Zu schnell oder zu langsam: Energie verpufft.

**Typischer Fehler:** Glauben, "hohe Frequenz = Resonanz". Resonanz hängt vom Verhältnis $\\Omega/\\omega_0$ ab, nicht vom Absolutwert.`,
        [
          'Resonanzbedingung: $\\Omega = \\omega_0$.',
          'Schaukel-Analogie: Takt treffen.',
          'Nicht die Absolutfrequenz, sondern das Verhältnis zählt.',
        ],
        {
          1: 'Bei $\\Omega \\gg \\omega_0$ wird die Amplitude sogar **klein**, da die Masse der schnellen Anregung nicht mehr folgen kann.',
          2: '$\\Omega = 0$ entspricht einer statischen Kraft — keine periodische Anregung, keine Resonanz.',
          3: 'Masse nahe null würde $\\omega_0 \\to \\infty$ bedeuten — keine Resonanzbedingung, sondern ein Grenzfall des Systems selbst.',
        },
      ),
      tf(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Bei einem vollständig ungedämpften System wächst die Amplitude im Resonanzfall rechnerisch unbegrenzt an.',
        true,
        `**Ansatz:** Im ungedämpften Resonanzfall $\\Omega = \\omega_0$ versagt der Ansatz mit einfacher sinusförmiger partikulärer Lösung — es entsteht ein Term $\\propto t \\cdot \\cos(\\omega_0 t)$, der mit der Zeit linear wächst.

**Rechnung:** Die Lösung ist $x_p(t) = -(F_0/(2 m \\omega_0)) \\cdot t \\cdot \\cos(\\omega_0 t)$ — Amplitude steigt linear mit $t$ an.

**Probe:** In der Realität verhindern Dämpfung, Nichtlinearitäten oder Bauteilbruch das unbegrenzte Anwachsen (Tacoma-Narrows-Brücke, Weinglas zerspringen lassen).

**Typischer Fehler:** Die Linearität in $t$ übersehen und einen stationären Zustand mit großer, aber endlicher Amplitude annehmen. Ohne Dämpfung gibt es diesen stationären Zustand nicht.`,
        [
          'Ungedämpft heißt: keine Energiedissipation.',
          'Die partikuläre Lösung bekommt einen $t$-Faktor.',
          'In der Praxis bremsen Dämpfung, Bruch oder Nichtlinearität.',
        ],
      ),
      ni(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Ein Motor hat die Eigenkreisfrequenz $\\omega_0 = 50\\,\\text{rad/s}$. Bei welcher Drehzahl $n$ (in U/min) tritt Resonanz auf? (auf 1 Nachkommastelle)',
        477.5, 1, 'U/min',
        `**Ansatz:** Drehzahl und Kreisfrequenz verknüpft über $\\omega = 2\\pi n/60$. Resonanz bei $\\omega = \\omega_0$.

**Rechnung:** $n = 60 \\omega_0/(2\\pi) = 60 \\cdot 50/(2\\pi) = 3000/(2\\pi) \\approx 477{,}46\\,\\text{U/min}$.

**Probe:** Frequenz $f_0 = \\omega_0/(2\\pi) = 50/(6{,}2832) \\approx 7{,}958\\,\\text{Hz}$. In U/min: $f_0 \\cdot 60 \\approx 477{,}5$. ✓

**Typischer Fehler:** $n = \\omega_0 \\cdot 60 = 3000\\,\\text{U/min}$ rechnen (Faktor $2\\pi$ vergessen). Oder $\\omega_0$ direkt als Drehzahl $n$ ansetzen — unterschiedliche Einheiten (rad/s vs. U/min).`,
        [
          'Einheit: $n$ in U/min, $\\omega_0$ in rad/s.',
          '$\\omega_0 = 2\\pi \\cdot n/60$.',
          '$n = 60 \\omega_0/(2\\pi)$.',
        ],
      ),
      mc(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Welche Maßnahme wirkt am **direktesten** gegen Resonanzschäden in einem Maschinengestell?',
        [
          'Betriebsdrehzahl (Erregerfrequenz $\\Omega$) deutlich weg von $\\omega_0$ verlegen',
          'Betriebsdrehzahl exakt auf $\\omega_0$ einstellen',
          'Federsteifigkeit auf null reduzieren',
          'Die Masse des Systems vollständig entfernen',
        ],
        0,
        `**Ansatz:** Resonanz ist an die Koinzidenz $\\Omega = \\omega_0$ gebunden. Die einfachste Gegenmaßnahme: Abstand zur Resonanzfrequenz schaffen.

**Rechnung:** Typische Regel im Maschinenbau: Betriebsfrequenz mindestens $20$–$30\\,\\%$ oberhalb oder unterhalb von $\\omega_0$ wählen. Alternativ: Dämpfer einbauen, um die Resonanzamplitude zu begrenzen — aber die Frequenzlage ist die erste Wahl.

**Probe:** Beispiel: Eine Waschmaschine durchfährt beim Schleudern die Resonanzfrequenz schnell, um sie gar nicht erst stationär anregen zu können.

**Typischer Fehler:** Die Masse "einfach weglassen" — ohne Masse kein System. Oder die Federsteifigkeit reduzieren, was $\\omega_0$ **noch tiefer** legt und oft neue Resonanzen eröffnet.`,
        [
          'Resonanz = $\\Omega \\approx \\omega_0$.',
          'Abstand zur Eigenfrequenz schaffen.',
          'Zweitbeste Option: Dämpfung erhöhen.',
        ],
        {
          1: 'Das **verursacht** die Resonanz — genau das Gegenteil von dem, was gewünscht ist.',
          2: '$c = 0$ bedeutet: keine Rückstellkraft, also kein schwingungsfähiges System mehr — aber auch keine tragfähige Konstruktion.',
          3: '"Masse entfernen" ist im Maschinenbau selten machbar. Abstimmung auf $\\omega_0 \\neq \\Omega$ ist der pragmatische Weg.',
        },
      ),
      sorting(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Bringe die physikalischen Phasen beim Aufbau einer Resonanz in die richtige Reihenfolge.',
        [
          'Erregerfrequenz $\\Omega$ nähert sich der Eigenfrequenz $\\omega_0$ an',
          'Externe Kraft speist pro Periode phasenrichtig Energie in das System ein',
          'Amplitude wächst mit der Zeit (bei ungedämpftem System linear in $t$)',
          'Ohne Dämpfung: Bauteilversagen durch Überdehnung, Bruch oder Kontaktverlust',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Resonanz ist ein Prozess über die Zeit, keine Momentaufnahme.

**Rechnung:** Kausalkette: (1) Frequenzanpassung, (2) Phasenrichtige Energiezufuhr, (3) Amplitudenwachstum, (4) im schlimmsten Fall Versagen. Jeder Schritt ist Bedingung für den nächsten.

**Probe:** Tacoma Narrows Bridge (1940): Wind erzeugte aeroelastische Schwingung mit Frequenz nahe Eigenmode → Energieeinkopplung → Amplitudenwachstum → Einsturz. Klassisches Lehrbuchbeispiel.

**Typischer Fehler:** Resonanz als "Moment" betrachten — dabei ist gerade das **zeitliche Aufschwingen** das Wesensmerkmal.`,
        [
          'Resonanz baut sich über Zeit auf.',
          'Zuerst Frequenz, dann Energie, dann Amplitude.',
          'Versagen ist die (mögliche) Konsequenz.',
        ],
      ),
      ni(
        'Sub-Goal "Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)": Ein System hat $\\omega_0 = 40\\,\\text{rad/s}$. Zur sicheren Resonanzvermeidung soll die Erregerfrequenz mindestens $30\\,\\%$ oberhalb von $\\omega_0$ liegen. Welche Mindestfrequenz $\\Omega_\\min$ (in rad/s)?',
        52, 0.1, 'rad/s',
        `**Ansatz:** $30\\,\\%$ Abstand nach oben: $\\Omega_\\min = 1{,}3 \\cdot \\omega_0$.

**Rechnung:** $\\Omega_\\min = 1{,}3 \\cdot 40 = 52\\,\\text{rad/s}$.

**Probe:** Verhältnis $\\Omega/\\omega_0 = 52/40 = 1{,}3$. ✓ Bei schwacher Dämpfung gelten $20$–$30\\,\\%$ Abstand als Daumenregel — darunter wächst der Vergrößerungsfaktor $V = 1/\\sqrt{(1-\\eta^2)^2 + (2D\\eta)^2}$ stark an, wobei $\\eta = \\Omega/\\omega_0$.

**Typischer Fehler:** $30\\,\\%$ **addieren** statt **multiplizieren**: $\\omega_0 + 30 = 70\\,\\text{rad/s}$. Prozent heißt "von welcher Basis" — $30\\,\\%$ von $\\omega_0$ ist $12\\,\\text{rad/s}$.`,
        [
          '$30\\,\\% = 0{,}3$, der Gesamtfaktor ist $1{,}3$.',
          '$\\Omega_\\min = 1{,}3 \\cdot \\omega_0$.',
          'Prozent ist relativ zur Basis, nicht absolut.',
        ],
      ),
    ],

    // ── [3] Dämpfungsgrad $D = d/(2\sqrt{cm})$ ──────────────────────────
    3: [
      ni(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": System mit $c = 1000\\,\\text{N/m}$, $m = 10\\,\\text{kg}$, $d = 40\\,\\text{Ns/m}$. Berechne $D$. (dimensionslos)',
        0.2, 0.005, '',
        `**Ansatz:** Lehrsches Dämpfungsmaß: $D = d/(2\\sqrt{cm})$.

**Rechnung:** $c \\cdot m = 1000 \\cdot 10 = 10\\,000$. $\\sqrt{10\\,000} = 100$. $D = 40/(2 \\cdot 100) = 40/200 = 0{,}2$.

**Probe:** Einheitencheck: Zähler $\\text{Ns/m} = \\text{kg/s}$. Nenner $\\sqrt{(\\text{N/m})(\\text{kg})} = \\sqrt{(\\text{kg/s}^2)(\\text{kg})} = \\text{kg/s}$. Quotient: dimensionslos. ✓ $D = 0{,}2 < 1$ → schwach gedämpft, System schwingt weiter.

**Typischer Fehler:** Den Faktor $2$ im Nenner vergessen ($D = 40/100 = 0{,}4$). Oder $\\sqrt{c + m}$ statt $\\sqrt{cm}$ (Summe statt Produkt).`,
        [
          'Formel: $D = d/(2\\sqrt{cm})$.',
          '$c \\cdot m$ bilden, dann Wurzel.',
          'Faktor $2$ im Nenner nicht vergessen.',
        ],
      ),
      tf(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": Für $D < 1$ ist das System schwach (unterkritisch) gedämpft und schwingt mit abnehmender Amplitude weiter.',
        true,
        `**Ansatz:** Lösungsstruktur der gedämpften DGL $m\\ddot{x} + d\\dot{x} + cx = 0$ hängt vom Verhältnis $D$ ab.

**Rechnung:** Charakteristische Gleichung $m\\lambda^2 + d\\lambda + c = 0$. Diskriminante: $d^2 - 4cm = 4cm(D^2 - 1)$. Für $D < 1$ ist die Diskriminante negativ → komplexe Wurzeln → gedämpfte Schwingung $x(t) = A e^{-\\delta t} \\cos(\\omega_d t + \\varphi)$ mit $\\delta = D\\omega_0$, $\\omega_d = \\omega_0\\sqrt{1 - D^2}$.

**Probe:** Im Grenzfall $D = 0$ (keine Dämpfung): ungedämpfte Sinus-Schwingung. Mit wachsendem $D < 1$: Einhüllende $e^{-\\delta t}$ klingt immer schneller ab, aber das System oszilliert noch.

**Typischer Fehler:** $D < 1$ mit aperiodischem Verhalten verwechseln. Aperiodisch beginnt erst bei $D \\geq 1$.`,
        [
          '$D < 1$: komplexe Eigenwerte → Schwingung.',
          '$D = 1$: aperiodischer Grenzfall.',
          '$D > 1$: überkritisch, kriechend.',
        ],
      ),
      mc(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": Was bedeutet $D = 1$ physikalisch?',
        [
          'Aperiodischer Grenzfall — schnellste Rückkehr zur Ruhelage ohne Überschwingen',
          'Resonanz mit unbegrenzt wachsender Amplitude',
          'Keine Dämpfung — dauerhafte Schwingung mit konstanter Amplitude',
          'Starke Anregung — Amplitude verdoppelt sich pro Periode',
        ],
        0,
        `**Ansatz:** $D = 1$ ist die Grenze zwischen oszillatorisch ($D < 1$) und kriechend ($D > 1$).

**Rechnung:** Charakteristische Gleichung hat bei $D = 1$ eine **doppelte reelle** Wurzel $\\lambda = -\\omega_0$. Lösung: $x(t) = (A + Bt)e^{-\\omega_0 t}$ — keine Schwingung, aber die schnellste Rückkehr zur Nulllage.

**Probe:** Industrieanwendung: präzise Mess- und Waagensysteme werden auf $D \\approx 0{,}7$–$1{,}0$ ausgelegt — kurz genug für Lesbarkeit, ohne Überschwingen.

**Typischer Fehler:** $D = 1$ mit Resonanz verwechseln (Resonanz ist $\\Omega = \\omega_0$ — eine **Frequenz**bedingung, nicht eine **Dämpfungs**bedingung).`,
        [
          '$D = 1$ ist die Grenze zwischen Schwingen und Kriechen.',
          'Aperiodischer Grenzfall: schnellste Beruhigung.',
          'Resonanz ist etwas anderes — hat mit $\\Omega$, nicht mit $D$ zu tun.',
        ],
        {
          1: 'Resonanz betrifft die **Erreger**frequenz $\\Omega$ relativ zu $\\omega_0$, nicht den Dämpfungsgrad. $D = 1$ ist ein rein dämpfungsbezogenes Phänomen.',
          2: 'Keine Dämpfung entspricht $D = 0$, nicht $D = 1$.',
          3: 'Amplitudenwachstum wäre das Gegenteil einer Dämpfung — $D$ beschreibt die Energiedissipation.',
        },
      ),
      matching(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": Ordne jedem Bereich von $D$ das richtige Systemverhalten zu.',
        [
          { left: '$D = 0$', right: 'Ungedämpft — Amplitude bleibt ewig konstant' },
          { left: '$0 < D < 1$', right: 'Unterkritisch gedämpft — Schwingung klingt exponentiell ab' },
          { left: '$D = 1$', right: 'Aperiodischer Grenzfall — schnellste Rückkehr ohne Schwingen' },
          { left: '$D > 1$', right: 'Überkritisch gedämpft — kriecht langsam zur Ruhelage' },
        ],
        `**Ansatz:** Das Verhalten der Lösung $x(t)$ hängt qualitativ vom Dämpfungsgrad ab — vier klar abgegrenzte Regime.

**Rechnung:** $D = 0$: reine Oszillation. $D < 1$: exponentiell gedämpfte Oszillation mit $\\omega_d = \\omega_0\\sqrt{1 - D^2}$. $D = 1$: Doppelwurzel, keine Oszillation, schnellste Rückkehr. $D > 1$: zwei reelle negative Wurzeln, reines Kriechen.

**Probe:** Praxis-Design: Stoßdämpfer $D \\approx 0{,}2$–$0{,}4$ (Federeigenschaft bleibt spürbar), Messgeräte $D \\approx 0{,}7$ (kein Überschwingen), Türschließer $D \\geq 1$ (sicher geschlossen ohne Zuschlagen).

**Typischer Fehler:** Alle $D > 0$-Werte als "gut gedämpft" zusammenfassen. Die Grenze bei $D = 1$ ist fundamental — sie trennt schwingende von kriechenden Lösungen.`,
        [
          'Grenzen: $0$, $1$ sind die Schlüsselwerte.',
          'Unter $1$: Schwingung noch vorhanden.',
          'Ab $1$: Rückkehr ohne Oszillation.',
        ],
      ),
      ni(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": Geforderter Dämpfungsgrad $D = 0{,}05$ bei $c = 400\\,\\text{N/m}$ und $m = 1\\,\\text{kg}$. Welchen Dämpfungskoeffizienten $d$ muss der Dämpfer bringen?',
        2, 0.05, 'Ns/m',
        `**Ansatz:** Formel umstellen: $d = 2 D \\sqrt{cm}$.

**Rechnung:** $\\sqrt{cm} = \\sqrt{400 \\cdot 1} = 20$. $d = 2 \\cdot 0{,}05 \\cdot 20 = 2\\,\\text{Ns/m}$.

**Probe:** Einsetzen: $D = 2/(2 \\cdot 20) = 2/40 = 0{,}05$ ✓. Einheit Ns/m = kg/s (aus $F = d\\dot{x}$). $D = 0{,}05$ ist sehr leicht gedämpft — passt zu dieser kleinen $d$-Zahl.

**Typischer Fehler:** Faktor $2$ unterschlagen und $d = D\\sqrt{cm} = 1$ rechnen. Oder $\\sqrt{cm}$ als $\\sqrt{c + m}$ lesen.`,
        [
          'Nach $d$ umstellen: $d = 2D\\sqrt{cm}$.',
          '$\\sqrt{cm} = 20$.',
          'Faktor 2 nicht vergessen.',
        ],
      ),
      mc(
        'Sub-Goal "Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$": Welcher Dämpfungsgrad $D$ ist beim Auto-Stoßdämpfer typischerweise gewünscht?',
        [
          '$D \\approx 0{,}3$–$0{,}4$ — Federverhalten spürbar, aber Schwingungen klingen schnell ab',
          '$D = 0$ — Insassen sollen frei mitschwingen',
          '$D = 2$ — möglichst starre Rückkopplung für sicheres Fahrwerk',
          '$D \\approx 1{,}5$ — sehr langsames Abklingen gewünscht',
        ],
        0,
        `**Ansatz:** Stoßdämpfer-Auslegung balanciert Komfort (Federweg bleibt nutzbar) und Sicherheit (Schwingung klingt ab, bevor die nächste Fahrbahnunebenheit trifft).

**Rechnung:** Typische PKW-Auslegung: $D \\approx 0{,}2$–$0{,}4$. Mehr Dämpfung macht das Fahrwerk "bretthart" (unkomfortabel), weniger lässt das Auto nach Bodenwellen nachschwingen.

**Probe:** Messgeräte werden auf $D \\approx 0{,}7$ getrimmt (kein Überschwingen der Anzeige). Tür-Schließer auf $D \\geq 1$ (aperiodisch, sicher geschlossen). Autos bleiben bei $0{,}2$–$0{,}4$.

**Typischer Fehler:** $D = 1$ als "perfekt" annehmen — das ist der aperiodische Grenzfall, aber im Fahrwerk unerwünscht (kein Federverhalten mehr spürbar).`,
        [
          'Komfort vs. Sicherheit.',
          'PKW-Design: $D \\in [0{,}2; 0{,}4]$.',
          'Messgeräte: $D \\approx 0{,}7$.',
        ],
        {
          1: 'Ohne Dämpfung schwingt das Auto nach jeder Unebenheit lange nach — im Extremfall Kontrollverlust.',
          2: '$D = 2$ macht das Fahrwerk so hart, dass kaum noch Federwirkung bleibt. Unbequem und für die Fahrdynamik schädlich.',
          3: '$D > 1$ bedeutet langsames Kriechen zur Ruhelage — im Fahrwerk unerwünscht, typisch für Türschließer.',
        },
      ),
    ],

    // ── [4] Mathematisches Pendel $\omega_0 = \sqrt{g/l}$ ────────────────
    4: [
      ni(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Ein mathematisches Pendel hat die Länge $l = 1\\,\\text{m}$ ($g = 9{,}81\\,\\text{m/s}^2$). Berechne die Periodendauer $T$. (auf 2 Nachkommastellen)',
        2.01, 0.02, 's',
        `**Ansatz:** $\\omega_0 = \\sqrt{g/l}$, dann $T = 2\\pi/\\omega_0 = 2\\pi\\sqrt{l/g}$.

**Rechnung:** $\\omega_0 = \\sqrt{9{,}81/1} = \\sqrt{9{,}81} \\approx 3{,}132\\,\\text{rad/s}$. $T = 2\\pi/3{,}132 \\approx 2{,}006\\,\\text{s} \\approx 2{,}01\\,\\text{s}$.

**Probe:** Direkt: $T = 2\\pi\\sqrt{1/9{,}81} = 2\\pi \\cdot 0{,}3193 \\approx 2{,}006\\,\\text{s}$. ✓ Merke: Pendel mit $l \\approx 1\\,\\text{m}$ hat $T \\approx 2\\,\\text{s}$ — Sekundenpendel!

**Typischer Fehler:** $T = 2\\pi\\sqrt{g/l}$ rechnen (Bruch falsch herum). Oder Wurzel vergessen. Oder mit Gradmaß statt Bogenmaß arbeiten.`,
        [
          '$\\omega_0 = \\sqrt{g/l}$ (Pendel: $g$ oben, $l$ unten).',
          '$T = 2\\pi\\sqrt{l/g}$.',
          'Merke: $l \\approx 1\\,\\text{m}$ → $T \\approx 2\\,\\text{s}$.',
        ],
      ),
      mc(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Dasselbe Pendel wird auf den Mond ($g_\\text{Mond} \\approx 1{,}62\\,\\text{m/s}^2$) gebracht. Wie ändert sich die Periodendauer $T$?',
        [
          '$T$ wird länger (Faktor $\\sqrt{g_\\text{Erde}/g_\\text{Mond}} \\approx 2{,}46$)',
          '$T$ wird kürzer (Faktor ~1/6)',
          '$T$ bleibt gleich — Pendelperiode ist ortsunabhängig',
          'Das Pendel schwingt nicht mehr, weil $g$ zu klein ist',
        ],
        0,
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ — $g$ steht **im Nenner** unter der Wurzel. Kleinere Gravitation → längere Periode.

**Rechnung:** $T_\\text{Mond}/T_\\text{Erde} = \\sqrt{g_\\text{Erde}/g_\\text{Mond}} = \\sqrt{9{,}81/1{,}62} \\approx \\sqrt{6{,}056} \\approx 2{,}46$. Also: Pendel schwingt auf dem Mond ca. $2{,}46$-mal langsamer.

**Probe:** Konkret bei $l = 1\\,\\text{m}$: $T_\\text{Mond} = 2\\pi\\sqrt{1/1{,}62} \\approx 4{,}93\\,\\text{s}$ vs. $T_\\text{Erde} \\approx 2{,}01\\,\\text{s}$. Verhältnis: $4{,}93/2{,}01 \\approx 2{,}45$. ✓

**Typischer Fehler:** Richtung verwechseln ("weniger Gravitation → schnellere Schwingung"). Gravitation ist die rücktreibende Kraft — weniger davon macht die Bewegung **träger**.`,
        [
          '$T \\propto 1/\\sqrt{g}$.',
          'Weniger $g$ → größeres $T$.',
          'Wurzelmäßig, nicht linear.',
        ],
        {
          1: 'Die Richtung ist falsch. Kleinere Gravitation verlangsamt die Schwingung (schwächere Rückstellung → träger).',
          2: 'Das Pendel schwingt durchaus, nur langsamer. Auf Apollo-Missionen wurden Pendelversuche tatsächlich durchgeführt.',
          3: 'Eine genügend kleine Auslenkung genügt immer für eine Schwingung, solange $g > 0$. Auch Astronauten-Videos zeigen das.',
        },
      ),
      tf(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Die Periodendauer eines mathematischen Pendels hängt bei kleinen Auslenkungen von der Pendelmasse ab.',
        false,
        `**Ansatz:** In $\\omega_0 = \\sqrt{g/l}$ kommt **keine Masse** vor.

**Rechnung:** Die Masse kürzt sich in der Bewegungsgleichung heraus: $m l \\ddot{\\varphi} = -m g \\sin\\varphi \\approx -m g \\varphi$ liefert $\\ddot{\\varphi} + (g/l)\\varphi = 0$. $m$ steht auf beiden Seiten und verschwindet.

**Probe:** Berühmtes Galilei-Experiment: zwei verschieden schwere Pendel gleicher Länge schwingen synchron. Nur die Länge und die lokale Schwerebeschleunigung zählen.

**Typischer Fehler:** Intuition "schwer = langsam" übertragen. Das gilt beim Feder-Masse-System ($\\omega_0 = \\sqrt{c/m}$), **nicht** beim mathematischen Pendel.`,
        [
          'Bewegungsgleichung aufstellen und Masse kürzen.',
          'Nur $g$ und $l$ bleiben übrig.',
          'Galilei: gleiche Länge → gleiche Periode.',
        ],
      ),
      ni(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Ein Pendel soll eine Periodendauer von exakt $T = 1{,}0\\,\\text{s}$ haben ($g = 9{,}81\\,\\text{m/s}^2$). Welche Länge $l$ ist nötig? (auf 3 Nachkommastellen in Meter)',
        0.248, 0.003, 'm',
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ → nach $l$ umstellen: $l = g T^2/(4\\pi^2)$.

**Rechnung:** $l = 9{,}81 \\cdot 1^2/(4\\pi^2) = 9{,}81/39{,}478 \\approx 0{,}2485\\,\\text{m}$.

**Probe:** Einsetzen: $T = 2\\pi\\sqrt{0{,}2485/9{,}81} = 2\\pi\\sqrt{0{,}02534} = 2\\pi \\cdot 0{,}1592 \\approx 1{,}000\\,\\text{s}$. ✓

**Typischer Fehler:** Quadrat vergessen: $l = gT/(4\\pi^2)$ ist dimensional falsch. Oder Faktor $4$ unterschlagen: $l = gT^2/\\pi^2 \\approx 0{,}994\\,\\text{m}$ wäre viermal zu groß.`,
        [
          '$T = 2\\pi\\sqrt{l/g}$.',
          'Nach $l$ auflösen: $l = g T^2/(4\\pi^2)$.',
          '$4\\pi^2 \\approx 39{,}48$.',
        ],
      ),
      sorting(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Bringe die Herleitungsschritte für $\\omega_0 = \\sqrt{g/l}$ in die richtige Reihenfolge.',
        [
          'Kleinwinkelnäherung $\\sin\\varphi \\approx \\varphi$ für kleine Auslenkungen',
          'Rücktreibende Kraft: $F_r = -m g \\sin\\varphi$ (Tangentialkomponente der Gewichtskraft)',
          'Bogenlänge und Winkelbeschleunigung: $\\ddot{s} = l\\ddot{\\varphi}$',
          'Newton: $m l \\ddot{\\varphi} = -m g \\sin\\varphi$, $m$ kürzen',
          'Vereinfachte DGL: $\\ddot{\\varphi} + (g/l)\\varphi = 0$ → $\\omega_0^2 = g/l$',
        ],
        [1, 2, 3, 0, 4],
        `**Ansatz:** Physik des Pendels Schritt für Schritt: Kraft, Bewegung, Kürzen, Linearisieren, DGL lesen.

**Rechnung:** (1) Tangentialkomponente der Gewichtskraft liefert die rücktreibende Kraft. (2) Bahnbewegung auf Kreisbogen: $\\ddot{s} = l\\ddot{\\varphi}$. (3) Newton einsetzen und $m$ kürzen. (4) Kleinwinkelnäherung anwenden. (5) Standardform $\\ddot{\\varphi} + \\omega_0^2\\varphi = 0$ ablesen.

**Probe:** Nur die Standardform erlaubt den direkten Vergleich mit $\\ddot{x} + \\omega_0^2 x = 0$ — daraus folgt $\\omega_0 = \\sqrt{g/l}$ ohne weitere Rechnung.

**Typischer Fehler:** Kleinwinkelnäherung **vor** dem Aufstellen der Bewegungsgleichung machen — Risiko, den nichtlinearen Charakter des echten Pendels unbemerkt zu verlieren. Oder $m$ nicht kürzen und dann glauben, die Masse stecke noch im Ergebnis.`,
        [
          'Erst Kraft, dann Kinematik, dann Newton.',
          'Linearisierung ist ein **Näherungsschritt** — erst wenn die Form steht.',
          'Standardform der DGL offenbart $\\omega_0^2$.',
        ],
      ),
      matching(
        'Sub-Goal "Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)": Ordne jeder Pendellänge die zugehörige Periodendauer zu ($g = 9{,}81\\,\\text{m/s}^2$).',
        [
          { left: '$l = 0{,}10\\,\\text{m}$', right: '$T \\approx 0{,}63\\,\\text{s}$' },
          { left: '$l = 0{,}25\\,\\text{m}$', right: '$T \\approx 1{,}00\\,\\text{s}$' },
          { left: '$l = 1{,}00\\,\\text{m}$', right: '$T \\approx 2{,}01\\,\\text{s}$' },
          { left: '$l = 4{,}00\\,\\text{m}$', right: '$T \\approx 4{,}01\\,\\text{s}$' },
        ],
        `**Ansatz:** $T = 2\\pi\\sqrt{l/g}$ — Periode skaliert mit $\\sqrt{l}$.

**Rechnung:** $l = 0{,}1$: $T = 2\\pi\\sqrt{0{,}0102} \\approx 0{,}634\\,\\text{s}$. $l = 0{,}25$: $T = 2\\pi\\sqrt{0{,}0255} \\approx 1{,}003\\,\\text{s}$. $l = 1$: $T \\approx 2{,}006\\,\\text{s}$. $l = 4$: $T = 2\\pi\\sqrt{0{,}408} \\approx 4{,}012\\,\\text{s}$.

**Probe:** $l$ um Faktor $4$ erhöhen verdoppelt $T$ (wegen Wurzel). Check: $l$ von $0{,}25 \\to 1\\,\\text{m}$ ist Faktor $4$, $T$ wächst von $1{,}00$ auf $2{,}01\\,\\text{s}$. ✓

**Typischer Fehler:** Lineare Skalierung annehmen: $l$ verzehnfachen würde $T$ verzehnfachen. Tatsächlich: $T$ wächst nur um $\\sqrt{10} \\approx 3{,}16$-fach.`,
        [
          'Wurzel-Skalierung: $T \\propto \\sqrt{l}$.',
          '$l = 0{,}25\\,\\text{m}$ liefert fast genau $T = 1\\,\\text{s}$.',
          'Länge $\\times 4$ → Periode $\\times 2$.',
        ],
      ),
    ],

  },

  // ────────────────────────────────────────────────────────────────────────
  // mech-2-5 — Dynamik starrer Körper  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'mech-2-5': {

    // ── [0] Drallsatz: M = J·α (Rotationsanalog zu F = ma) ─────────────
    0: [
      ni(
        'Sub-Goal "Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)": Ein Elektromotor übt an seiner Welle ein Drehmoment $M = 40\\,\\text{Nm}$ aus. Die Welle hat $J = 0{,}8\\,\\text{kg}\\cdot\\text{m}^2$. Wie groß ist die Winkelbeschleunigung $\\alpha$?',
        50, 0.1, 'rad/s²',
        `**Ansatz:** Drallsatz — das Rotationsanalog zu $F = ma$ — lautet $M = J\\alpha$. Umgestellt: $\\alpha = M/J$.

**Rechnung:** $\\alpha = 40/0{,}8 = 50\\,\\text{rad/s}^2$.

**Probe:** Einheiten: $\\text{Nm}/(\\text{kg}\\cdot\\text{m}^2) = (\\text{kg}\\cdot\\text{m}^2/\\text{s}^2)/(\\text{kg}\\cdot\\text{m}^2) = \\text{s}^{-2} = \\text{rad/s}^2$. ✓ Plausibel: Motorwellen beschleunigen typisch mit $10$–$1000\\,\\text{rad/s}^2$.

**Typischer Fehler:** $\\alpha = M \\cdot J$ rechnen (Produktzustand) — liefert $32$ und die falsche Dimension. Merksatz: $J$ steht **im Nenner**, ganz analog zur Masse bei $a = F/m$.`,
        [
          'Rotationsanalog: $M$ ↔ $F$, $J$ ↔ $m$, $\\alpha$ ↔ $a$.',
          'Drallsatz nach $\\alpha$ umstellen.',
          '$\\alpha = M/J$.',
        ],
      ),
      mc(
        'Sub-Goal "Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)": Bei gleichbleibendem Trägheitsmoment wird das angreifende Moment **verdreifacht**. Wie ändert sich die Winkelbeschleunigung?',
        [
          '$\\alpha$ bleibt gleich',
          '$\\alpha$ wird dreimal so groß',
          '$\\alpha$ wird neunmal so groß',
          '$\\alpha$ wird um den Faktor $\\sqrt{3}$ größer',
        ],
        1,
        `**Ansatz:** $\\alpha = M/J$ ist **linear** im Moment: $M \\to 3M$ ⇒ $\\alpha \\to 3\\alpha$.

**Rechnung:** $\\alpha_\\text{neu}/\\alpha_\\text{alt} = (3M)/J \\cdot J/M = 3$.

**Probe:** Der Drallsatz ist eine lineare Beziehung zwischen $M$ und $\\alpha$ (genau wie $F = ma$). Keine Potenz, keine Wurzel.

**Typischer Fehler:** Quadratischen Zusammenhang annehmen (wie bei Rotationsenergie $E \\propto \\omega^2$) und mit $9$ oder $\\sqrt{3}$ rechnen. Drallsatz ≠ Energiesatz.`,
        [
          'Drallsatz: $\\alpha = M/J$ — wie verhält sich $\\alpha$ zu $M$?',
          'Linear oder quadratisch?',
          'Verdoppelt $M$ ⇒ verdoppelt $\\alpha$.',
        ],
        {
          0: 'Das Moment ist die **Ursache** der Winkelbeschleunigung. Mehr $M$ ⇒ größeres $\\alpha$. „Bleibt gleich" widerspricht direkt dem Drallsatz.',
          2: 'Faktor $9$ entspräche einem quadratischen Gesetz ($\\alpha \\propto M^2$). Der Drallsatz ist jedoch linear.',
          3: '$\\sqrt{3}$ taucht bei Wurzel-Zusammenhängen auf (z. B. $\\omega_0 \\propto \\sqrt{c/m}$). Für $\\alpha(M)$ ist die Abhängigkeit linear.',
        },
      ),
      ni(
        'Sub-Goal "Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)": Eine Schwungscheibe ($J = 2{,}5\\,\\text{kg}\\cdot\\text{m}^2$) wird aus der Ruhe in $t = 4\\,\\text{s}$ auf $n = 600\\,\\text{U/min}$ gebracht. Welches konstante Drehmoment ist dafür nötig? (auf ganze Nm)',
        39, 1, 'Nm',
        `**Ansatz:** Konstantes Moment ⇒ konstante Winkelbeschleunigung. Erst $\\omega_\\text{end}$ in rad/s umrechnen, dann $\\alpha = \\Delta\\omega/\\Delta t$, dann $M = J\\alpha$.

**Rechnung:** $\\omega = 2\\pi n/60 = 2\\pi\\cdot 600/60 = 20\\pi \\approx 62{,}83\\,\\text{rad/s}$. $\\alpha = 62{,}83/4 \\approx 15{,}71\\,\\text{rad/s}^2$. $M = 2{,}5 \\cdot 15{,}71 \\approx 39{,}27\\,\\text{Nm} \\approx 39\\,\\text{Nm}$.

**Probe:** Umgekehrt: Bei $M = 39{,}27$ Nm ist $\\alpha = 39{,}27/2{,}5 = 15{,}71\\,\\text{rad/s}^2$ und nach 4 s ist $\\omega = 4\\cdot 15{,}71 = 62{,}83\\,\\text{rad/s}$ = 600 U/min. ✓

**Typischer Fehler:** $n$ in U/min direkt in den Drallsatz einsetzen — Faktor $2\\pi/60$ zur Umrechnung in rad/s vergessen. Dann wäre $M$ um Faktor $\\approx 9{,}55$ zu klein.`,
        [
          'Drehzahl in rad/s: $\\omega = 2\\pi n/60$.',
          'Gleichförmige Winkelbeschleunigung: $\\alpha = \\Delta\\omega/\\Delta t$.',
          'Drallsatz: $M = J\\alpha$.',
        ],
      ),
      tf(
        'Sub-Goal "Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)": Im Drallsatz $M = J\\alpha$ entspricht das Trägheitsmoment $J$ dem Rotationsanalog zur **Masse** $m$ aus $F = ma$.',
        true,
        `**Ansatz:** Die Gegenüberstellung Translation ↔ Rotation: $F \\leftrightarrow M$, $m \\leftrightarrow J$, $a \\leftrightarrow \\alpha$, $v \\leftrightarrow \\omega$, $p = mv \\leftrightarrow L = J\\omega$.

**Rechnung:** Die Masse misst Translationsträgheit (Widerstand gegen lineare Beschleunigung), das Trägheitsmoment misst Rotationsträgheit (Widerstand gegen Winkelbeschleunigung). Beide stehen an derselben Stelle in ihren Bewegungsgesetzen.

**Probe:** Beispiel: Zwei Scheiben gleicher Masse, eine mit konzentrierter Masse (klein $J$), eine mit Masse am Rand (groß $J$). Bei gleichem Moment wird die mit großem $J$ langsamer beschleunigt — wie die schwerere Masse bei $F = ma$.

**Typischer Fehler:** $J$ mit der Masse gleichsetzen — ist nicht dasselbe. $J$ hängt zusätzlich von der Massenverteilung (Abstand zur Drehachse) ab: $J = \\sum m_i r_i^2$.`,
        [
          'Schreibe beide Gesetze untereinander: $F = ma$ und $M = J\\alpha$.',
          'Welche Größen stehen an den gleichen Plätzen?',
          '$F$↔$M$, $m$↔$J$, $a$↔$\\alpha$.',
        ],
      ),
      matching(
        'Sub-Goal "Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)": Ordne jeder Translationsgröße das passende Rotationsanalog zu.',
        [
          { left: 'Masse $m$', right: 'Trägheitsmoment $J$' },
          { left: 'Kraft $F$', right: 'Drehmoment $M$' },
          { left: 'Beschleunigung $a$', right: 'Winkelbeschleunigung $\\alpha$' },
          { left: 'Impuls $p = mv$', right: 'Drehimpuls $L = J\\omega$' },
          { left: 'kinetische Energie $\\tfrac{1}{2}mv^2$', right: 'Rotationsenergie $\\tfrac{1}{2}J\\omega^2$' },
        ],
        `**Ansatz:** Die Translations-/Rotations-Analogie ist direkt und systematisch: alles mit Masse wird zu Trägheitsmoment, alles mit Geschwindigkeit zu Winkelgeschwindigkeit, Kraft zu Moment.

**Rechnung:** $F = ma \\leftrightarrow M = J\\alpha$. $p = mv \\leftrightarrow L = J\\omega$. $E_\\text{kin} = \\tfrac{1}{2}mv^2 \\leftrightarrow E_\\text{rot} = \\tfrac{1}{2}J\\omega^2$. $W = Fs \\leftrightarrow W = M\\varphi$.

**Probe:** Jede Gleichung auf der rechten Seite lässt sich durch Einsetzen der linken Analoga wiederherstellen — die Struktur ist identisch.

**Typischer Fehler:** $L = m\\omega$ (Masse statt Trägheitsmoment) oder $E_\\text{rot} = \\tfrac{1}{2}J\\alpha^2$ (Winkelbeschleunigung statt -geschwindigkeit). Die Analogie $a \\leftrightarrow \\alpha$ ist nur für die Bewegungsgleichung, **nicht** für Energie oder Impuls.`,
        [
          'Translation hat: $m$, $v$, $a$, $F$, $p = mv$.',
          'Rotation hat die gleichen Rollen mit: $J$, $\\omega$, $\\alpha$, $M$, $L$.',
          'Bei Energie/Impuls steht die **Geschwindigkeit** drin, nicht die Beschleunigung.',
        ],
      ),
    ],

    // ── [1] Standardträgheitsmomente: Vollzylinder ½mR², Stab mL²/12 ──
    1: [
      ni(
        'Sub-Goal "Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$": Vollzylinder, $m = 4\\,\\text{kg}$, $R = 0{,}2\\,\\text{m}$. Bestimme das Massenträgheitsmoment um die Längsachse.',
        0.08, 0.001, 'kg·m²',
        `**Ansatz:** Vollzylinder um die eigene Längsachse (Symmetrieachse): $J = \\tfrac{1}{2}mR^2$.

**Rechnung:** $R^2 = 0{,}04\\,\\text{m}^2$. $J = \\tfrac{1}{2}\\cdot 4 \\cdot 0{,}04 = 2 \\cdot 0{,}04 = 0{,}08\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Einheiten: $\\text{kg} \\cdot \\text{m}^2$. ✓ Größenordnung plausibel (kleine Rolle mit 4 kg und 20 cm Radius).

**Typischer Fehler:** $R$ statt $R^2$ einsetzen: $\\tfrac{1}{2}\\cdot 4\\cdot 0{,}2 = 0{,}4$ — Faktor $5$ zu groß, Einheit fehlerhaft. Oder Faktor $\\tfrac{1}{2}$ vergessen (Hohlzylinder-Formel $mR^2$ angewandt).`,
        [
          'Vollzylinder: $J = \\tfrac{1}{2}mR^2$.',
          'Quadriere zuerst den Radius.',
          '$\\tfrac{1}{2}\\cdot 4 \\cdot 0{,}04$.',
        ],
      ),
      mc(
        'Sub-Goal "Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$": Ein Vollzylinder wird bei gleicher Masse mit **doppeltem** Radius gefertigt. Um welchen Faktor ändert sich $J$?',
        [
          'Faktor $2$',
          'Faktor $4$',
          'Faktor $\\sqrt{2}$',
          'Faktor $8$',
        ],
        1,
        `**Ansatz:** $J = \\tfrac{1}{2}mR^2$ hängt **quadratisch** von $R$ ab (bei festem $m$).

**Rechnung:** $R \\to 2R$ ⇒ $R^2 \\to 4R^2$ ⇒ $J \\to 4J$.

**Probe:** Anschaulich: Die Masse liegt im Mittel weiter außen — jedes Teilchen trägt mit $r^2$ zur Trägheit bei, also dominiert der quadratische Effekt des Radius.

**Typischer Fehler:** Linear rechnen (Faktor 2) oder mit Volumen argumentieren ($V \\propto R^2$, aber hier ist $m$ fest, also greift die Volumenänderung nicht).`,
        [
          '$J = \\tfrac{1}{2}mR^2$ — welche Potenz steht bei $R$?',
          'Quadratische Abhängigkeit.',
          '$R \\to 2R$ ⇒ $R^2 \\to 4R^2$.',
        ],
        {
          0: 'Linear wäre es, wenn $J \\propto R$. Die Formel enthält aber $R^2$ — die Abhängigkeit ist quadratisch.',
          2: '$\\sqrt{2}$ erscheint bei Wurzelzusammenhängen (etwa bei $\\omega_0 \\propto \\sqrt{1/m}$). Hier ist $J$ eine Potenz, keine Wurzel.',
          3: 'Faktor $8$ entspricht $R^3$ (Volumen bei festem Material). $J$ skaliert nur mit $R^2$, weil $m$ laut Aufgabe konstant ist.',
        },
      ),
      ni(
        'Sub-Goal "Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$": Dünner Stab, $m = 6\\,\\text{kg}$, $L = 2\\,\\text{m}$. Trägheitsmoment **um die Schwerpunktachse** senkrecht zum Stab?',
        2, 0.01, 'kg·m²',
        `**Ansatz:** Stab um Schwerpunkt-Querachse: $J_S = \\tfrac{1}{12}mL^2$. Der Faktor $\\tfrac{1}{12}$ unterscheidet sich vom Stab-am-Ende-Wert $\\tfrac{1}{3}mL^2$.

**Rechnung:** $L^2 = 4\\,\\text{m}^2$. $J_S = \\tfrac{1}{12}\\cdot 6 \\cdot 4 = 24/12 = 2\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Stab am Ende wäre $J_E = \\tfrac{1}{3}mL^2 = 8\\,\\text{kg}\\cdot\\text{m}^2$ — also $4\\times$ größer. Konsistent mit Steiner: $J_E = J_S + m(L/2)^2 = 2 + 6 = 8$. ✓

**Typischer Fehler:** Formel für Stab-am-Ende ($\\tfrac{1}{3}mL^2$) benutzen statt Schwerpunktformel ($\\tfrac{1}{12}mL^2$). Ergebnis wäre um Faktor $4$ zu groß.`,
        [
          'Stab um Schwerpunkt: Faktor $\\tfrac{1}{12}$.',
          'Stab am Ende: Faktor $\\tfrac{1}{3}$ — hier nicht gefragt.',
          '$\\tfrac{1}{12}\\cdot 6 \\cdot 4$.',
        ],
      ),
      tf(
        'Sub-Goal "Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$": Bei **gleicher** Masse und gleichem Außenradius hat ein **Hohlzylinder** (dünne Schale) das gleiche Trägheitsmoment um die Längsachse wie ein **Vollzylinder**.',
        false,
        `**Ansatz:** Vollzylinder: $J = \\tfrac{1}{2}mR^2$. Dünner Hohlzylinder (Masse am Radius $R$): $J = mR^2$. Verhältnis $2:1$.

**Rechnung:** Bei gleicher Masse trägt im Vollzylinder ein Teil der Masse bei kleinem $r$ (geringer Beitrag $r^2$), im Hohlzylinder liegt die gesamte Masse bei $r = R$ (maximaler Beitrag).

**Probe:** $J_\\text{Voll}/J_\\text{Hohl} = \\tfrac{1}{2}$ — Vollzylinder hat halb so großes $J$ wie die dünne Hohlzylinderschale.

**Typischer Fehler:** Den Faktor $\\tfrac{1}{2}$ pauschal auf "zylindrische Körper" übertragen. Der Faktor kommt aus der Integration über die radiale Massenverteilung und gilt nur für den Vollzylinder.`,
        [
          'Vollzylinder: $\\tfrac{1}{2}mR^2$. Dünner Hohlzylinder: $mR^2$.',
          'Masse nahe Achse trägt weniger zu $J$ bei.',
          'Hohlzylinder hat Masse am Rand — maximaler Hebel.',
        ],
      ),
      matching(
        'Sub-Goal "Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$": Ordne jedem Körper die richtige Formel für das Massenträgheitsmoment um die angegebene Achse zu.',
        [
          { left: 'Vollzylinder, Längsachse', right: '$\\tfrac{1}{2}mR^2$' },
          { left: 'Dünner Hohlzylinder (Schale), Längsachse', right: '$mR^2$' },
          { left: 'Stab, Querachse durch Schwerpunkt', right: '$\\tfrac{1}{12}mL^2$' },
          { left: 'Stab, Querachse am Ende', right: '$\\tfrac{1}{3}mL^2$' },
          { left: 'Vollkugel, Achse durch Schwerpunkt', right: '$\\tfrac{2}{5}mR^2$' },
        ],
        `**Ansatz:** Standardträgheitsmomente aus der Formelsammlung abrufen. Die Vorfaktoren sind verteilungsabhängig (wie liegt die Masse relativ zur Achse).

**Rechnung:** Herleitung per Integration $J = \\int r^2\\,dm$. Vollzylinder hat Faktor $\\tfrac{1}{2}$, dünner Hohlzylinder $1$ (ganze Masse auf $r = R$), Stab am Schwerpunkt $\\tfrac{1}{12}$, am Ende $\\tfrac{1}{3}$ (Steiner-Differenz $m(L/2)^2 = \\tfrac{1}{4}mL^2$), Vollkugel $\\tfrac{2}{5}$.

**Probe:** Je weiter die Masse im Mittel von der Achse entfernt liegt, desto größer der Vorfaktor. Vollkugel $\\tfrac{2}{5} = 0{,}4$, Vollzylinder $0{,}5$, Hohlzylinder $1$. ✓

**Typischer Fehler:** Stab-Formel verwechseln ($\\tfrac{1}{12}$ vs. $\\tfrac{1}{3}$) oder den Faktor bei der Kugel mit dem Zylinderfaktor verwechseln. Immer fragen: **welche Achse?**`,
        [
          'Jede Formel hat einen geometrischen Vorfaktor.',
          'Stab am Schwerpunkt vs. am Ende unterscheiden.',
          'Vollkugel $\\tfrac{2}{5}$ — kleinster Vorfaktor.',
        ],
      ),
    ],

    // ── [2] Steiner: J_A = J_S + m·d² ──────────────────────────────────
    2: [
      ni(
        'Sub-Goal "Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)": Ein dünner Stab ($m = 4\\,\\text{kg}$, $L = 1\\,\\text{m}$) rotiert um eine Querachse am **Stabende**. Wie groß ist das Trägheitsmoment? (auf 3 Nachkommastellen)',
        1.333, 0.005, 'kg·m²',
        `**Ansatz:** Schwerpunktträgheitsmoment + Steinerscher Anteil. $J_S = \\tfrac{1}{12}mL^2$, Abstand Schwerpunkt–Endachse: $d = L/2$.

**Rechnung:** $J_S = \\tfrac{1}{12}\\cdot 4 \\cdot 1 = 0{,}333\\,\\text{kg}\\cdot\\text{m}^2$. $d^2 = 0{,}25\\,\\text{m}^2$. Steineranteil $m d^2 = 4 \\cdot 0{,}25 = 1{,}0\\,\\text{kg}\\cdot\\text{m}^2$. $J_E = 0{,}333 + 1{,}0 = 1{,}333\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Die Standardformel für Stab am Ende ist $J_E = \\tfrac{1}{3}mL^2 = 4/3 \\approx 1{,}333\\,\\text{kg}\\cdot\\text{m}^2$. ✓ Identisch — Steiner liefert die Formel automatisch.

**Typischer Fehler:** $d = L$ statt $d = L/2$ einsetzen — der Abstand läuft vom **Schwerpunkt** zur Parallelachse, nicht von Ende zu Ende.`,
        [
          'Schwerpunkt liegt in der Stabmitte: $d = L/2$.',
          'Steiner: $J_A = J_S + m d^2$.',
          'Zur Kontrolle: Stab am Ende $= \\tfrac{1}{3}mL^2$.',
        ],
      ),
      mc(
        'Sub-Goal "Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)": Welche Voraussetzung muss erfüllt sein, damit man den Satz von Steiner $J_A = J_S + m d^2$ anwenden darf?',
        [
          'Die Drehachse $A$ muss durch den Schwerpunkt verlaufen.',
          'Die Drehachse $A$ muss **parallel** zur Schwerpunktachse sein.',
          'Der Körper muss rotationssymmetrisch sein.',
          'Die Achse $A$ muss senkrecht zur Schwerpunktachse stehen.',
        ],
        1,
        `**Ansatz:** Steiner verschiebt das Trägheitsmoment von einer Achse durch den Schwerpunkt zu einer **parallelen** Achse im Abstand $d$. Die Parallelität ist die zentrale Bedingung.

**Rechnung:** Herleitung aus $J_A = \\int r_A^2\\,dm$ mit $\\vec{r}_A = \\vec{r}_S + \\vec{d}$ und $\\vec{d}$ konstant (Parallelverschiebung). Nur dann zerfällt der Integrand in $r_S^2 + 2\\vec{r}_S\\cdot\\vec{d} + d^2$, wobei das Mischglied wegen $\\int \\vec{r}_S\\,dm = 0$ (Schwerpunktdefinition) verschwindet.

**Probe:** Für nicht-parallele Achsen gilt der Satz nicht — dort müsste man über den Trägheitstensor und Drehung gehen.

**Typischer Fehler:** Denken, Steiner helfe bei **jeder** Achsverschiebung. Er verschiebt nur parallel — eine Drehung der Achse erfordert den Trägheitstensor.`,
        [
          'In $J_A = J_S + md^2$ taucht nur ein Abstand auf, keine Winkel.',
          'Parallel vs. senkrecht — welche Geometrie?',
          'Steiner wird oft als "Parallelachsensatz" bezeichnet.',
        ],
        {
          0: 'Dann wären $A$ und die Schwerpunktachse identisch, $d = 0$ und $J_A = J_S$ — es gäbe nichts zu verschieben. Steiner ist für **andere** parallele Achsen gedacht.',
          2: 'Rotationssymmetrie ist für Standardformeln ($\\tfrac{1}{2}mR^2$ etc.) praktisch, aber keine Voraussetzung für Steiner. Steiner gilt für beliebige starre Körper, sofern die Achsen parallel sind.',
          3: 'Bei senkrechten Achsen liefert Steiner keine korrekte Aussage — man bräuchte eine vollständige Trägheitstensor-Transformation.',
        },
      ),
      ni(
        'Sub-Goal "Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)": Ein Vollzylinder ($m = 3\\,\\text{kg}$, $R = 0{,}1\\,\\text{m}$) rotiert um eine Achse, die **parallel** zur Zylinderlängsachse verläuft und im Abstand $d = 0{,}1\\,\\text{m}$ zu dieser liegt. Wie groß ist $J_A$? (auf 4 Nachkommastellen)',
        0.045, 0.001, 'kg·m²',
        `**Ansatz:** $J_S$ = Zylinder um Längsachse = $\\tfrac{1}{2}mR^2$. Dann Steiner: $J_A = J_S + m d^2$.

**Rechnung:** $J_S = \\tfrac{1}{2}\\cdot 3 \\cdot 0{,}01 = 0{,}015\\,\\text{kg}\\cdot\\text{m}^2$. Steineranteil: $m d^2 = 3 \\cdot 0{,}01 = 0{,}03\\,\\text{kg}\\cdot\\text{m}^2$. $J_A = 0{,}015 + 0{,}03 = 0{,}045\\,\\text{kg}\\cdot\\text{m}^2$.

**Probe:** Hier ist $d = R$ (Achse tangential am Mantel). Der Steineranteil $mR^2$ ist doppelt so groß wie $J_S = \\tfrac{1}{2}mR^2$. Gesamt: $J_A = \\tfrac{3}{2}mR^2 = 0{,}045$. ✓

**Typischer Fehler:** $d^2$ mit $R^2$ vergessen zu addieren ($J_A = J_S$ → $0{,}015$, Steineranteil ignoriert). Oder $d$ linear statt quadratisch eingehen lassen.`,
        [
          'Erst $J_S$ (Vollzylinder): $\\tfrac{1}{2}mR^2$.',
          'Steiner: $+ m d^2$.',
          '$0{,}015 + 0{,}03$.',
        ],
      ),
      tf(
        'Sub-Goal "Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)": Das Trägheitsmoment um eine beliebige Achse parallel zur Schwerpunktachse ist **immer mindestens so groß** wie das Trägheitsmoment um die Schwerpunktachse selbst.',
        true,
        `**Ansatz:** $J_A = J_S + m d^2$. Da $m > 0$ und $d^2 \\geq 0$ gilt $m d^2 \\geq 0$. Also $J_A \\geq J_S$, mit Gleichheit nur bei $d = 0$.

**Rechnung:** $J_A - J_S = m d^2 \\geq 0$. Strikte Ungleichheit, sobald die Achse nicht durch den Schwerpunkt geht.

**Probe:** Anschaulich: Je weiter die Drehachse vom Schwerpunkt weg liegt, desto mehr Masse "weit draußen" und umso träger die Rotation. Schwerpunktachse ist das **Minimum** aller parallelen Trägheitsmomente.

**Typischer Fehler:** Denken, eine andere Achse könne die Rotation "leichter" machen. Nein — die Schwerpunktachse ist unter allen Parallelachsen die günstigste.`,
        [
          'Steiner addiert $m d^2 \\geq 0$.',
          'Also $J_A \\geq J_S$.',
          'Gleichheit nur bei $d = 0$ (Achse durch Schwerpunkt).',
        ],
      ),
      sorting(
        'Sub-Goal "Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)": Bringe die Rechenschritte zur Berechnung des Trägheitsmoments um eine Parallelachse in die richtige Reihenfolge.',
        [
          'Massenträgheitsmoment um Schwerpunktachse $J_S$ aus der Formelsammlung nachschlagen',
          'Prüfen: Ist die gesuchte Achse parallel zur Schwerpunktachse?',
          'Abstand $d$ zwischen beiden Achsen bestimmen',
          'Steineranteil $m d^2$ berechnen',
          'Trägheitsmoment addieren: $J_A = J_S + m d^2$',
        ],
        [1, 0, 2, 3, 4],
        `**Ansatz:** Reihenfolge: **erst** Parallelität prüfen (Voraussetzung), **dann** $J_S$ und Geometrie, **dann** Rechnung.

**Rechnung:** (1) Parallelitätscheck — sonst gilt Steiner nicht. (2) $J_S$ nachschlagen. (3) Abstand $d$ zwischen den Achsen. (4) Produkt $m d^2$. (5) Summe.

**Probe:** Wenn Schritt 1 fehlschlägt (Achsen nicht parallel), darf man den Satz nicht anwenden und müsste den Trägheitstensor bemühen. Deshalb steht er ganz vorn.

**Typischer Fehler:** Direkt ohne Prüfung rechnen und $J_A$ auch für schräge Achsen mit Steiner berechnen.`,
        [
          'Voraussetzungen kommen vor der Rechnung.',
          'Formelsammlung und Geometrie sind separate Schritte.',
          'Ganz am Ende: addieren.',
        ],
      ),
    ],

    // ── [3] Rotationsenergie E_rot = ½ J ω² ────────────────────────────
    3: [
      ni(
        'Sub-Goal "Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$": Ein Rotor mit $J = 0{,}5\\,\\text{kg}\\cdot\\text{m}^2$ dreht sich mit $\\omega = 10\\,\\text{rad/s}$. Wie groß ist die Rotationsenergie?',
        25, 0.1, 'J',
        `**Ansatz:** $E_\\text{rot} = \\tfrac{1}{2} J \\omega^2$ — formal identisch zu $E_\\text{kin} = \\tfrac{1}{2} m v^2$.

**Rechnung:** $\\omega^2 = 100\\,\\text{rad}^2/\\text{s}^2$. $E = 0{,}5 \\cdot 0{,}5 \\cdot 100 = 25\\,\\text{J}$.

**Probe:** Einheiten: $\\text{kg}\\cdot\\text{m}^2 \\cdot (1/\\text{s})^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$. ✓

**Typischer Fehler:** $\\omega$ linear einsetzen ($E = \\tfrac{1}{2}J\\omega = 2{,}5$) — Quadratvergessen. Oder Faktor $\\tfrac{1}{2}$ vergessen.`,
        [
          'Rotationsenergie: $\\tfrac{1}{2}J\\omega^2$.',
          'Zuerst $\\omega$ quadrieren.',
          '$0{,}5 \\cdot 0{,}5 \\cdot 100 = 25$ J.',
        ],
      ),
      mc(
        'Sub-Goal "Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$": Die Winkelgeschwindigkeit eines Schwungrads wird **verdoppelt**. Wie ändert sich seine Rotationsenergie?',
        [
          'verdoppelt sich',
          'vervierfacht sich',
          'bleibt gleich',
          'wird um $\\sqrt{2}$ größer',
        ],
        1,
        `**Ansatz:** $E_\\text{rot} = \\tfrac{1}{2}J\\omega^2$ — Energie hängt **quadratisch** von $\\omega$ ab.

**Rechnung:** $\\omega \\to 2\\omega$ ⇒ $\\omega^2 \\to 4\\omega^2$ ⇒ $E \\to 4E$.

**Probe:** Anschaulich — gleicher Effekt wie beim Auto: doppelte Geschwindigkeit → vierfache kinetische Energie → vierfacher Bremsweg.

**Typischer Fehler:** Linear rechnen (Faktor 2) oder mit Drehimpuls verwechseln — $L = J\\omega$ skaliert tatsächlich linear.`,
        [
          'In $\\tfrac{1}{2}J\\omega^2$ steht $\\omega$ in welcher Potenz?',
          'Quadratisch!',
          '$(2\\omega)^2 = 4\\omega^2$.',
        ],
        {
          0: 'Linear wäre es bei $L = J\\omega$ (Drehimpuls). Bei Energie steckt $\\omega$ im Quadrat.',
          2: 'Die Aufgabe ändert aktiv $\\omega$ — die Energie ändert sich entsprechend quadratisch. „Bleibt gleich" würde $\\omega$-Unabhängigkeit voraussetzen.',
          3: '$\\sqrt{2}$ wäre der Effekt bei $\\omega \\to \\sqrt{2}\\omega$. Die Aufgabe verdoppelt $\\omega$ direkt.',
        },
      ),
      ni(
        'Sub-Goal "Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$": Ein Schwungrad (Vollzylinder, $m = 10\\,\\text{kg}$, $R = 0{,}3\\,\\text{m}$) rotiert mit $n = 3000\\,\\text{U/min}$. Wieviel Energie ist gespeichert? (auf ganze J)',
        22207, 50, 'J',
        `**Ansatz:** Erst $J = \\tfrac{1}{2}mR^2$, dann $\\omega = 2\\pi n/60$, dann $E = \\tfrac{1}{2}J\\omega^2$.

**Rechnung:** $J = \\tfrac{1}{2}\\cdot 10 \\cdot 0{,}09 = 0{,}45\\,\\text{kg}\\cdot\\text{m}^2$. $\\omega = 2\\pi\\cdot 3000/60 = 100\\pi \\approx 314{,}159\\,\\text{rad/s}$. $\\omega^2 \\approx 98\\,696$. $E = \\tfrac{1}{2}\\cdot 0{,}45 \\cdot 98\\,696 \\approx 22\\,207\\,\\text{J}$.

**Probe:** Überschlag: $\\omega \\approx 300\\,\\text{rad/s}$, $\\omega^2 \\approx 9\\cdot 10^4$, $E \\approx 0{,}5 \\cdot 0{,}45 \\cdot 9\\cdot 10^4 \\approx 2{,}0\\cdot 10^4\\,\\text{J}$. ✓ Energie reicht für starken elektrischen Impuls.

**Typischer Fehler:** Drehzahl $n$ direkt statt $\\omega$ einsetzen — Ergebnis wäre Faktor $(2\\pi/60)^2 \\approx 0{,}011$ zu klein. Oder den Faktor $\\tfrac{1}{2}$ zweimal ($J$ und $E$) zusammenziehen und durcheinanderbringen.`,
        [
          'Vollzylinder: $J = \\tfrac{1}{2}mR^2$.',
          '$\\omega = 2\\pi n/60$ (Umrechnung U/min → rad/s).',
          '$E = \\tfrac{1}{2}J\\omega^2$.',
        ],
      ),
      tf(
        'Sub-Goal "Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$": Bei einem reinen Rollvorgang (Zylinder rollt schlupffrei eine Ebene hinunter) wandelt sich die potenzielle Energie **ausschließlich** in translatorische kinetische Energie $\\tfrac{1}{2}mv^2$ um.',
        false,
        `**Ansatz:** Ein rollender Körper besitzt sowohl Translations- als auch Rotationsenergie: $E_\\text{kin,ges} = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}J\\omega^2$. Beim schlupffreien Rollen ist $v = R\\omega$.

**Rechnung:** Für den Vollzylinder ($J = \\tfrac{1}{2}mR^2$): $E_\\text{rot} = \\tfrac{1}{2}\\cdot\\tfrac{1}{2}mR^2\\cdot(v/R)^2 = \\tfrac{1}{4}mv^2$. Gesamt $\\tfrac{3}{4}mv^2$, davon ein Drittel Rotationsenergie — **nicht** vernachlässigbar.

**Probe:** Rollt ein Zylinder aus Höhe $h$: $mgh = \\tfrac{3}{4}mv^2$ ⇒ $v = \\sqrt{4gh/3}$ — langsamer als der freie Fall $\\sqrt{2gh}$. Die Differenz steckt in der Rotation.

**Typischer Fehler:** Ausschließlich $mgh = \\tfrac{1}{2}mv^2$ ansetzen und Rotation ignorieren — liefert eine zu hohe Endgeschwindigkeit.`,
        [
          'Ein rollender Körper hat zwei kinetische Energien.',
          'Koppelung: $v = R\\omega$.',
          'Energieerhaltung: $mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}J\\omega^2$.',
        ],
      ),
      sorting(
        'Sub-Goal "Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$": Bringe die Schritte zur Berechnung der Rotationsenergie eines Schwungrads (gegeben: $m$, $R$, $n$) in die richtige Reihenfolge.',
        [
          'Trägheitsmoment berechnen: $J = \\tfrac{1}{2}mR^2$ (Vollzylinder)',
          'Drehzahl $n$ in rad/s umrechnen: $\\omega = 2\\pi n/60$',
          '$\\omega$ quadrieren',
          'Rotationsenergie: $E = \\tfrac{1}{2} J \\omega^2$',
          'Einheiten prüfen: Ergebnis in Joule',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Aufbau von innen nach außen. Zuerst die physikalischen Größen, dann der Ausdruck, zuletzt die Prüfung.

**Rechnung:** (1) $J$ aus Geometrie/Masse. (2) $\\omega$ aus Drehzahl. (3) $\\omega^2$ als Zwischenergebnis — oft Quelle von Fehlern, daher eigener Schritt. (4) Einsetzen. (5) Einheiten-Check.

**Probe:** Jeder Zwischenschritt ist numerisch prüfbar: $J$ in $\\text{kg}\\cdot\\text{m}^2$, $\\omega$ in rad/s, $\\omega^2$ in $\\text{rad}^2/\\text{s}^2$, $E$ in $\\text{J} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$. ✓

**Typischer Fehler:** Einheiten-Check vergessen oder direkt mit U/min arbeiten.`,
        [
          'Physikalische Größen (J und ω) zuerst.',
          'Einheitenumrechnung vor der Endrechnung.',
          'Prüfung am Schluss.',
        ],
      ),
    ],

    // ── [4] Drehimpuls L = J ω, Erhaltung bei M_ext = 0 ────────────────
    4: [
      ni(
        'Sub-Goal "Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$": Eine Schwungscheibe hat $J = 2\\,\\text{kg}\\cdot\\text{m}^2$ und dreht sich mit $\\omega = 15\\,\\text{rad/s}$. Wie groß ist der Drehimpuls?',
        30, 0.1, 'kg·m²/s',
        `**Ansatz:** Drehimpuls: $L = J\\omega$ (Rotationsanalog zu $p = mv$).

**Rechnung:** $L = 2 \\cdot 15 = 30\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.

**Probe:** Einheiten: $\\text{kg}\\cdot\\text{m}^2 \\cdot \\text{s}^{-1} = \\text{kg}\\cdot\\text{m}^2/\\text{s}$ = $\\text{N}\\cdot\\text{m}\\cdot\\text{s}$. ✓

**Typischer Fehler:** Rotationsenergie $\\tfrac{1}{2}J\\omega^2 = 225\\,\\text{J}$ statt Drehimpuls ausrechnen. $L$ ist **linear** in $\\omega$, $E_\\text{rot}$ ist **quadratisch**.`,
        [
          '$L = J\\omega$.',
          'Direkte Multiplikation, kein Quadrat.',
          '$2 \\cdot 15 = 30$.',
        ],
      ),
      mc(
        'Sub-Goal "Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$": Eine Eiskunstläuferin dreht mit $\\omega_1 = 2\\,\\text{rad/s}$ und $J_1 = 6\\,\\text{kg}\\cdot\\text{m}^2$ (ausgestreckte Arme). Sie zieht die Arme an, neues $J_2 = 2\\,\\text{kg}\\cdot\\text{m}^2$. Mit welcher Winkelgeschwindigkeit dreht sie dann?',
        [
          '$2\\,\\text{rad/s}$',
          '$6\\,\\text{rad/s}$',
          '$12\\,\\text{rad/s}$',
          '$\\tfrac{2}{3}\\,\\text{rad/s}$',
        ],
        1,
        `**Ansatz:** Ohne äußeres Moment (Reibung auf dem Eis gering) bleibt der Drehimpuls erhalten: $J_1\\omega_1 = J_2\\omega_2$.

**Rechnung:** $\\omega_2 = J_1\\omega_1/J_2 = 6\\cdot 2/2 = 6\\,\\text{rad/s}$.

**Probe:** Drehimpuls vorher: $L_1 = 12$. Drehimpuls nachher: $L_2 = 2 \\cdot 6 = 12$. ✓ Energie dagegen steigt: $E_1 = \\tfrac{1}{2}\\cdot 6\\cdot 4 = 12\\,\\text{J}$, $E_2 = \\tfrac{1}{2}\\cdot 2\\cdot 36 = 36\\,\\text{J}$ — die zusätzliche Energie kommt aus der Muskelarbeit beim Arme-Anziehen.

**Typischer Fehler:** $\\omega_2 = \\omega_1$ (Denken, dass Winkelgeschwindigkeit konstant bleibt) oder $\\omega_2 = J_2\\omega_1/J_1$ (Verhältnis umgedreht). Merksatz: **kleineres** $J$ ⇒ **größeres** $\\omega$.`,
        [
          'Bei $M_\\text{ext} = 0$ gilt $L = \\text{const}$.',
          '$J_1\\omega_1 = J_2\\omega_2$.',
          'Verhältnis $J_1/J_2 = 3$ ⇒ $\\omega$ wird $3\\times$ größer.',
        ],
        {
          0: 'Wenn sich $J$ ändert, ändert sich auch $\\omega$ — sonst wäre der Drehimpuls nicht erhalten.',
          2: 'Faktor $6$ wäre richtig, wenn $J_1 \\cdot \\omega_1 = 12$ und $J_2 = 1$. Hier ist $J_2 = 2$, also $\\omega_2 = 12/2 = 6$, nicht $12$.',
          3: 'Das Verhältnis ist vertauscht — man hat $J_2/J_1$ statt $J_1/J_2$ gerechnet. Kleineres $J$ muss größeres $\\omega$ erzeugen.',
        },
      ),
      tf(
        'Sub-Goal "Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$": Wenn die Summe aller äußeren Drehmomente null ist, bleibt der Drehimpuls eines Systems **betrags- und richtungsmäßig** konstant.',
        true,
        `**Ansatz:** Drallsatz in Vektorform: $\\vec{M}_\\text{ext} = d\\vec{L}/dt$. Aus $\\vec{M}_\\text{ext} = \\vec{0}$ folgt $d\\vec{L}/dt = \\vec{0}$, also $\\vec{L} = \\text{const}$.

**Rechnung:** Beides, Betrag $|L|$ und Richtung $\\vec{L}/|L|$, bleiben erhalten — deshalb taumelt ein freier Kreisel stabil um seine Drehachse.

**Probe:** Anwendungsbeispiele: Eiskunstläuferin (Betragserhalt bei wechselndem $J$), Kreiselkompass (Richtungserhalt), Planetenbahnen (Flächensatz folgt aus $L$-Erhaltung).

**Typischer Fehler:** Nur den **Betrag** als erhalten ansehen. Drehimpuls ist ein Vektor — die Richtung ist ebenfalls fixiert (bei $M_\\text{ext} = 0$).`,
        [
          'Drehimpuls ist eine **vektorielle** Erhaltungsgröße.',
          'Drallsatz: $d\\vec{L}/dt = \\vec{M}_\\text{ext}$.',
          'Null Moment ⇒ $\\vec{L}$ konstant (Betrag und Richtung).',
        ],
      ),
      ni(
        'Sub-Goal "Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$": Zwei Drehplattformen: Plattform 1 ($J_1 = 4\\,\\text{kg}\\cdot\\text{m}^2$, $\\omega_1 = 5\\,\\text{rad/s}$) wird auf Plattform 2 ($J_2 = 1\\,\\text{kg}\\cdot\\text{m}^2$, anfangs in Ruhe) abgesetzt und koppelt reibungsschlüssig. Welche gemeinsame Winkelgeschwindigkeit stellt sich ein?',
        4, 0.01, 'rad/s',
        `**Ansatz:** Inelastischer „Rotationsstoß" — Drehimpuls ist erhalten ($M_\\text{ext} = 0$, reine innere Reibung): $J_1\\omega_1 + J_2\\cdot 0 = (J_1 + J_2)\\omega$.

**Rechnung:** $L_\\text{vor} = 4 \\cdot 5 = 20\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$. Gesamttrageisheit: $J_\\text{ges} = 5\\,\\text{kg}\\cdot\\text{m}^2$. $\\omega = 20/5 = 4\\,\\text{rad/s}$.

**Probe:** $L_\\text{nach} = 5 \\cdot 4 = 20$. ✓ Die Rotationsenergie sinkt dagegen: $E_\\text{vor} = \\tfrac{1}{2}\\cdot 4\\cdot 25 = 50\\,\\text{J}$, $E_\\text{nach} = \\tfrac{1}{2}\\cdot 5\\cdot 16 = 40\\,\\text{J}$. Die $10\\,\\text{J}$ Energieverlust stecken in der Reibungswärme beim Koppeln.

**Typischer Fehler:** Energieerhaltung ansetzen statt Drehimpulserhaltung — liefert eine falsche gemeinsame $\\omega$, weil Energie bei inelastischer Kopplung **nicht** erhalten ist.`,
        [
          'Inelastischer Rotationsstoß: $L$ erhalten, $E$ nicht.',
          '$J_1\\omega_1 = (J_1 + J_2)\\omega$.',
          '$\\omega = L_\\text{vor}/J_\\text{ges}$.',
        ],
      ),
      matching(
        'Sub-Goal "Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$": Ordne jedem Translationsbegriff sein Rotationsanalog zu.',
        [
          { left: 'Impuls $p = m v$', right: 'Drehimpuls $L = J \\omega$' },
          { left: 'Impulserhaltung bei $\\vec{F}_\\text{ext} = 0$', right: 'Drehimpulserhaltung bei $\\vec{M}_\\text{ext} = 0$' },
          { left: 'Kraft $\\vec{F} = d\\vec{p}/dt$', right: 'Drehmoment $\\vec{M} = d\\vec{L}/dt$' },
          { left: 'Inelastischer Stoß: gemeinsame Geschwindigkeit', right: 'Rotationskopplung: gemeinsame Winkelgeschwindigkeit' },
        ],
        `**Ansatz:** Für jede translatorische Impulsaussage gibt es das Drehimpulspendant — mit $m \\to J$, $\\vec{v} \\to \\vec{\\omega}$, $\\vec{F} \\to \\vec{M}$.

**Rechnung:** (1) $p = mv \\leftrightarrow L = J\\omega$. (2) $\\sum\\vec{F}_\\text{ext} = 0 \\Rightarrow \\vec{p} = \\text{const}$ analog zu $\\sum\\vec{M}_\\text{ext} = 0 \\Rightarrow \\vec{L} = \\text{const}$. (3) Dynamische Grundgleichung $\\vec{F} = d\\vec{p}/dt \\leftrightarrow \\vec{M} = d\\vec{L}/dt$. (4) Inelastischer Stoß $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_\\text{end}$ analog zu $J_1\\omega_1 + J_2\\omega_2 = (J_1 + J_2)\\omega_\\text{end}$.

**Probe:** Alle Rotationsformeln entstehen durch systematisches Ersetzen — man muss sie nicht separat lernen, nur die Translation sicher beherrschen.

**Typischer Fehler:** Bei $L = J\\omega$ die Masse stehen lassen und $L = m\\omega$ schreiben. Oder im inelastischen Rotationsfall die Energieerhaltung anwenden (bei inelastischem Translationsstoß ginge man ja auch über Impuls).`,
        [
          'Alles mit $m$ wird zu etwas mit $J$.',
          'Alles mit $\\vec{v}$ wird zu etwas mit $\\vec{\\omega}$.',
          'Erhaltungssätze haben dieselbe Struktur.',
        ],
      ),
    ],

  },

}
