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

}
