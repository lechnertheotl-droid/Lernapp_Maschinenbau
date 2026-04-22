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

}
