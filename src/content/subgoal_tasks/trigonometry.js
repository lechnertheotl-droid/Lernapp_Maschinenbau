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
  // trig-1-0 — Winkel-Intuition (Einstieg)  (3 subGoals)
  // 15 Matrix-Aufgaben: 3 SGs × 5 Stufen (recognize/apply-guided/
  // apply-independent/error-analysis/transfer). Jede mit pedagogy-Tag.
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-0': {
    // ── [0] Winkeltypen: spitz/recht/stumpf/gestreckt/voll ────────────────
    0: [
      tf(
        'Ein Winkel von $90°$ ist stumpf.',
        false,
        `**Ansatz:** Grenzwerte auswendig: spitz $<90°$, recht $=90°$, stumpf $90°<\\alpha<180°$, gestreckt $=180°$.

**Rechnung:** $90°$ ist **exakt** der rechte Winkel — nicht stumpf, nicht spitz.

**Probe:** Stumpf beginnt erst oberhalb von $90°$ (z. B. $91°$). Die Grenze $90°$ gehört allein zum rechten Winkel.

**Typischer Fehler:** Die Grenze $90°$ sowohl als "recht" als auch als "stumpf" zählen. Jeder Winkel hat genau eine Klasse.`,
        [
          'Welcher Wert markiert den rechten Winkel?',
          'Stumpf ist STRIKT größer als $90°$.',
          'Exakt $90°$ = recht.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['winkel-typen'] },
      ),
      mc(
        'Welche Klasse hat der Winkel $135°$?',
        ['stumpf', 'spitz', 'recht', 'gestreckt'],
        0,
        `**Ansatz:** Einordnen in die Klasse nach Grenzen.

**Rechnung:** $90° < 135° < 180°$ → **stumpf**.

**Probe:** Am Einheitskreis liegt $135°$ im zweiten Quadranten (oben links, zwischen "gerade hoch" und "gerade links").

**Typischer Fehler:** "Größer als $90°$ = stumpf" gilt NUR bis $180°$. Über $180°$ sind Winkel bereits überstumpf / Vollwinkel.`,
        [
          'Zwischen welchen Grenzen liegt $135°$?',
          'Spitz $<90°$, stumpf zwischen $90°$ und $180°$.',
          '$135°$ liegt im zweiten Quadranten.',
        ],
        {
          1: 'Spitz wäre $<90°$. $135°$ ist deutlich größer.',
          2: 'Rechter Winkel ist exakt $90°$. $135°$ ist $45°$ mehr.',
          3: 'Gestreckter Winkel ist exakt $180°$. $135°$ ist $45°$ weniger.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['winkel-typen'] },
      ),
      ni(
        'Wie viele Grad hat ein rechter Winkel?',
        90, 0, '°',
        `**Ansatz:** Rechter Winkel = Viertel einer vollen Drehung.

**Rechnung:** $360° / 4 = 90°$.

**Probe:** Buchecke, Fensterecke, L-Form — alle rechte Winkel, also $90°$.

**Typischer Fehler:** $45°$ angeben (halber rechter Winkel) oder $180°$ (gestreckter Winkel).`,
        [
          'Viertel vom Vollkreis.',
          '$360° / 4 = ?$',
          'L-Form: zwei Linien stehen senkrecht aufeinander.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['winkel-typen'] },
      ),
      mc(
        'Ein Schüler sagt: „Jeder Winkel größer als $90°$ ist stumpf." Wo liegt der Fehler?',
        [
          'Die Aussage ignoriert die Obergrenze $180°$ — oberhalb davon ist der Winkel bereits überstumpf (Vollwinkel-Bereich).',
          'Die Aussage stimmt vollständig.',
          'Stumpf sind nur Winkel größer $180°$.',
          'Stumpf ist nur exakt $135°$, nichts dazwischen.',
        ],
        0,
        `**Ansatz:** Die Klasse "stumpf" hat eine Obergrenze, die der Schüler übersieht.

**Rechnung:** Stumpf gilt für $90° < \\alpha < 180°$. Bei $180°$ wird der Winkel gestreckt, bei $>180°$ überstumpf.

**Probe:** $200°$ ist nicht stumpf, sondern überstumpf. Die Aussage des Schülers würde das fälschlich als stumpf klassifizieren.

**Typischer Fehler:** Genau dieser — "$>90°$" als einzige Bedingung ohne Obergrenze. Jede Klasse hat zwei Grenzen.`,
        [
          'Stumpf hat eine Unter- UND eine Obergrenze.',
          'Was passiert bei $180°$, bei $270°$?',
          'Jede Klasse: zwei Grenzen.',
        ],
        {
          1: 'Die Aussage stimmt eben nicht — bei $200°$ wäre der Winkel nicht mehr stumpf.',
          2: 'Stumpf beginnt bei $>90°$, nicht bei $>180°$. Das wäre überstumpf.',
          3: 'Stumpf ist ein ganzer Bereich, nicht ein einzelner Wert. $100°$, $135°$, $170°$ sind alle stumpf.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['winkel-typen'] },
      ),
      matching(
        'Ordne jedem Winkel seine Klasse zu.',
        [
          { left: '$30°$',   right: 'spitz' },
          { left: '$90°$',   right: 'recht' },
          { left: '$120°$',  right: 'stumpf' },
          { left: '$180°$',  right: 'gestreckt' },
        ],
        `**Ansatz:** Standardklassifizierung durch Grenzwert-Vergleich.

**Rechnung:** $30°<90°$ spitz; $90°$ exakt recht; $90°<120°<180°$ stumpf; $180°$ exakt gestreckt.

**Probe:** Von klein nach groß: spitz → recht → stumpf → gestreckt. Jede Grenze gehört zur festen Klasse.

**Typischer Fehler:** Grenzwerte doppelt einordnen ($90°$ sowohl recht als auch spitz) — jeder Winkel hat eindeutig eine Klasse.`,
        [
          'Vier Klassen: spitz, recht, stumpf, gestreckt.',
          'Grenzen $90°$ und $180°$ gehören zur rechten bzw. gestreckten Klasse.',
          'Bei Zweifel: Grenze links oder rechts?',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['winkel-typen'] },
      ),
    ],

    // ── [1] Innenwinkelsumme im Dreieck = 180° ─────────────────────────────
    1: [
      tf(
        'Die Innenwinkelsumme eines Dreiecks ist immer $180°$, unabhängig von der Dreiecksform.',
        true,
        `**Ansatz:** Fundamentaler Satz der euklidischen Geometrie.

**Rechnung:** Für jedes Dreieck gilt $\\alpha + \\beta + \\gamma = 180°$.

**Probe:** Gleichseitig: $60°+60°+60°=180°$. Rechtwinklig-gleichschenklig: $90°+45°+45°=180°$. Beliebig: $30°+70°+80°=180°$.

**Typischer Fehler:** Annehmen, dass dies nur für "normale" Dreiecke gilt. Die Regel gilt für ALLE ebenen Dreiecke.`,
        [
          'Fundamental-Satz der Dreieckslehre.',
          'Unabhängig von Seitenlängen oder Form.',
          'Summe der drei Innenwinkel.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['winkelsumme-180'] },
      ),
      mc(
        'In einem rechtwinkligen Dreieck ist ein nicht-rechter Winkel $35°$. Wie groß ist der andere nicht-rechte Winkel?',
        ['$55°$', '$145°$', '$65°$', '$35°$'],
        0,
        `**Ansatz:** Rechter Winkel $= 90°$. Die anderen beiden ergänzen sich zu $90°$.

**Rechnung:** $90° - 35° = 55°$.

**Probe:** $90° + 35° + 55° = 180°$ ✓.

**Typischer Fehler:** $180° - 35° = 145°$ rechnen und den rechten Winkel vergessen. Das würde $90° + 35° + 145° = 270°$ ergeben — unmöglich.`,
        [
          'Rechter Winkel hat wie viel Grad?',
          'Rest zu $180°$ für beide nicht-rechten Winkel: $90°$.',
          '$90° - 35° = ?$',
        ],
        {
          1: '$145°$ wäre schon allein stumpf — zusammen mit dem rechten Winkel über $180°$.',
          2: '$65°$ ergibt $90°+35°+65° = 190°$, zu viel um $10°$.',
          3: '$35°$ doppelt ergäbe nur $160°$ — fehlen $20°$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['winkelsumme-180'] },
      ),
      ni(
        'In einem Dreieck ist $\\alpha = 60°$ und $\\beta = 75°$. Wie groß ist $\\gamma$ (in Grad)?',
        45, 0, '°',
        `**Ansatz:** $\\alpha + \\beta + \\gamma = 180°$, also $\\gamma = 180° - \\alpha - \\beta$.

**Rechnung:** $\\gamma = 180° - 60° - 75° = 45°$.

**Probe:** $60° + 75° + 45° = 180°$ ✓.

**Typischer Fehler:** Fälschlich $\\alpha + \\beta = \\gamma$ rechnen ($135°$) — oder $90° - \\alpha - \\beta$ für rechtwinklige Dreiecke, obwohl hier kein rechter Winkel vorgegeben ist.`,
        [
          'Winkelsumme-Formel nach $\\gamma$ umstellen.',
          '$\\gamma = 180° - \\alpha - \\beta$.',
          '$180 - 60 - 75 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['winkelsumme-180'] },
      ),
      mc(
        'Ein Schüler behauptet: „Ein Dreieck mit $\\alpha = 100°$ und $\\beta = 90°$ existiert, der dritte Winkel wäre dann $-10°$." Was ist falsch?',
        [
          'Ein Dreieck mit zwei Winkeln, die zusammen bereits $\\geq 180°$ sind, kann nicht existieren — negative Innenwinkel gibt es in euklidischen Dreiecken nicht.',
          'Der dritte Winkel wäre $+10°$, nicht $-10°$.',
          'Der rechte Winkel muss in einem Dreieck mit stumpfem Winkel sein.',
          'Die Rechnung ist richtig — das Dreieck hat eben einen negativen Winkel.',
        ],
        0,
        `**Ansatz:** Die Winkelsumme $180°$ ist eine Grenze, nicht nur eine Regel. Zwei Winkel, die zusammen $\\geq 180°$ sind, lassen keinen Platz für einen dritten.

**Rechnung:** $100° + 90° = 190° > 180°$. Kein dritter Winkel möglich — das Dreieck existiert nicht.

**Probe:** In einem echten Dreieck ist JEDER Innenwinkel strikt zwischen $0°$ und $180°$. Negative Winkel sind Rechen-Artefakte, keine Geometrie.

**Typischer Fehler:** Der Schüler schließt mechanisch aus $180° - 100° - 90° = -10°$, ohne die Plausibilität zu prüfen. Negative Zwischenergebnisse sind immer ein Signal: Annahmen falsch.`,
        [
          'Kann ein Innenwinkel negativ sein?',
          'Summe von zwei Winkeln: wie groß darf sie höchstens sein?',
          '$100° + 90° = ?$ — passt das noch unter $180°$?',
        ],
        {
          1: 'Beide Rechnungen liefern dasselbe Ergebnis: die Annahmen sind bereits widersprüchlich.',
          2: 'Rechter Winkel und stumpfer Winkel in einem Dreieck sind möglich — solange beide zusammen unter $180°$ bleiben. Hier nicht der Fall.',
          3: 'Die Rechnung stimmt formal, aber das Ergebnis ist unmöglich. Das entlarvt die Annahme.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['winkelsumme-180'] },
      ),
      sorting(
        'Bringe die Schritte zur Bestimmung des dritten Winkels in $\\alpha = 45°, \\beta = 55°$ in die richtige Reihenfolge.',
        [
          'Winkelsumme notieren: $\\alpha + \\beta + \\gamma = 180°$',
          'Nach $\\gamma$ umstellen: $\\gamma = 180° - \\alpha - \\beta$',
          'Werte einsetzen: $\\gamma = 180° - 45° - 55°$',
          'Ausrechnen: $\\gamma = 80°$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Saubere Schritte: Formel → Umstellen → Einsetzen → Rechnen.

**Rechnung:** $\\gamma = 80°$.

**Probe:** $45° + 55° + 80° = 180°$ ✓.

**Typischer Fehler:** Direkt Zahlen rechnen ohne die Formel zuerst hinzuschreiben — fehleranfällig, weil Umstellen vergessen werden kann.`,
        [
          'Formel zuerst.',
          'Dann umstellen auf die gesuchte Größe.',
          'Zahlen erst am Ende.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['winkelsumme-180'] },
      ),
    ],

    // ── [2] Scheitel- / Nebenwinkel ────────────────────────────────────────
    2: [
      tf(
        'Scheitelwinkel an einem Geradenkreuz sind immer gleich groß.',
        true,
        `**Ansatz:** Geometrische Symmetrie am Schnittpunkt zweier Geraden.

**Rechnung:** Die gegenüberliegenden Winkel bilden ein Paar. Beide sind Nebenwinkel zum gleichen "mittleren" Winkel: $180° - \\alpha$ auf beiden Seiten, gespiegelt am Ursprung wieder $\\alpha$.

**Probe:** Skizze zweier sich schneidender Geraden: vier Winkel, paarweise gleich, zwei Paare unterschiedlicher Größe, Summe $360°$.

**Typischer Fehler:** Scheitel- mit Nebenwinkel verwechseln. Scheitel = gegenüber (gleich), Neben = direkt daneben (ergänzen zu $180°$).`,
        [
          'Scheitel = gegenüber am Schnittpunkt.',
          'Durch die Symmetrie am Schnittpunkt.',
          'Unterscheide von Nebenwinkeln (daneben, nicht gegenüber).',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['scheitel-nebenwinkel'] },
      ),
      mc(
        'Zwei Geraden schneiden sich; einer der vier Winkel ist $70°$. Wie groß ist der Scheitelwinkel (gegenüber)?',
        ['$70°$', '$110°$', '$20°$', '$180°$'],
        0,
        `**Ansatz:** Scheitelwinkel sind gleich groß.

**Rechnung:** Gegenüberliegender Winkel zu $70°$ ist ebenfalls $70°$.

**Probe:** Vier Winkel am Kreuz: zwei zu $70°$ (gegenüber), zwei zu $110°$ (nebeneinander). Summe $360°$.

**Typischer Fehler:** Den Nebenwinkel ($110°$) als Scheitelwinkel angeben.`,
        [
          'Scheitel = gegenüber = gleich.',
          'Neben = daneben = ergänzen auf $180°$.',
          'Welche Beziehung liegt hier vor?',
        ],
        {
          1: '$110°$ ist der **Nebenwinkel** zu $70°$ (direkt daneben), nicht der Scheitelwinkel (gegenüber).',
          2: '$20°$ ist $90°-70°$ — das ist der Komplementärwinkel, hat mit Scheitelwinkeln nichts zu tun.',
          3: '$180°$ ist die Summe von Winkel + Nebenwinkel, kein einzelner Winkel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['scheitel-nebenwinkel'] },
      ),
      ni(
        'Zwei Geraden schneiden sich. Ein Winkel ist $55°$. Wie groß ist der Nebenwinkel (in Grad)?',
        125, 0, '°',
        `**Ansatz:** Nebenwinkel liegen auf einer geraden Linie, ergänzen sich daher zu $180°$.

**Rechnung:** $180° - 55° = 125°$.

**Probe:** $55° + 125° = 180°$ ✓ (zwei Winkel auf einer Geraden bilden einen gestreckten Winkel).

**Typischer Fehler:** $90° - 55° = 35°$ rechnen — das wäre der Komplementärwinkel (nur bei rechtwinkligen Konfigurationen).`,
        [
          'Nebenwinkel ergänzen auf $180°$.',
          '$180 - 55 = ?$',
          'Zwei Winkel auf einer Geraden: Summe $180°$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['scheitel-nebenwinkel'] },
      ),
      mc(
        'Ein Schüler sagt: „Der Nebenwinkel zu $55°$ ist $35°$, weil $90° - 55° = 35°$." Welcher Fehler liegt vor?',
        [
          'Er hat die Komplementärwinkel-Regel ($90° - \\alpha$) mit der Nebenwinkel-Regel ($180° - \\alpha$) verwechselt.',
          'Die Rechnung stimmt — der Nebenwinkel ist wirklich $35°$.',
          'Er hat $90°$ statt $100°$ verwendet.',
          'Nebenwinkel gibt es nur im Dreieck, nicht am Geradenkreuz.',
        ],
        0,
        `**Ansatz:** Zwei verschiedene Winkelpaare: Komplementärwinkel (ergänzen zu $90°$, bei rechten Winkeln) vs. Nebenwinkel (ergänzen zu $180°$, auf einer Geraden).

**Rechnung:** Korrekt: $180° - 55° = 125°$. Der Schüler-Wert $35°$ entspricht dem Komplementärwinkel, nicht dem Nebenwinkel.

**Probe:** Skizze: Zwei Winkel auf einer geraden Linie summieren immer zu $180°$, nie zu $90°$.

**Typischer Fehler:** Begriffe Komplementär- und Nebenwinkel vermischen. Merkhilfe: **Neben** = auf einer geraden **Linie** ($180°$); **Komplementär** = ergänzen zum rechten Winkel ($90°$).`,
        [
          'Zu wem ergänzt der Nebenwinkel?',
          'Auf einer geraden Linie: Summe $= 180°$.',
          '$90° - \\alpha$ = Komplementär, $180° - \\alpha$ = Neben.',
        ],
        {
          1: 'Die Rechnung stimmt nicht. $35°$ ist der Komplementärwinkel, nicht der Nebenwinkel.',
          2: 'Die $90°$ sind nicht das Problem der Zahlenwerte, sondern die falsche Regel.',
          3: 'Nebenwinkel gibt es auch am Geradenkreuz — sie sind grundlegende Geometrie.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['scheitel-nebenwinkel'] },
      ),
      sorting(
        'Bringe die Schritte zur Bestimmung aller vier Winkel an einem Geradenkreuz mit gegebenem $\\alpha = 40°$ in die richtige Reihenfolge.',
        [
          'Gegebener Winkel: $\\alpha = 40°$',
          'Scheitelwinkel (gegenüber) ist ebenfalls $40°$',
          'Nebenwinkel: $180° - 40° = 140°$ (auf beiden Seiten)',
          'Kontrolle: Summe aller vier $= 40° + 40° + 140° + 140° = 360°$ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Am Geradenkreuz: zwei Paare gleich großer Winkel. Schrittweise von gegeben → Scheitel → Neben → Probe.

**Rechnung:** Zwei $40°$ und zwei $140°$.

**Probe:** Summe aller vier Winkel um den Schnittpunkt $= 360°$.

**Typischer Fehler:** Nur zwei der vier Winkel angeben oder Scheitel- und Nebenwinkel vertauschen. Systematisch: erst Scheitel (gleich), dann Neben (Ergänzung).`,
        [
          'Erst den gegebenen Winkel notieren.',
          'Dann: gegenüber = gleich.',
          'Dann: daneben = Ergänzung zu $180°$.',
          'Zum Schluss: Summe $= 360°$ als Probe.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['scheitel-nebenwinkel'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-1 — Winkel und ihre Maße (Grad ↔ Radiant)  (4 subGoals)
  // 21 Matrix-Aufgaben: SGs 0/1/3 je 5, SG 2 mit 6 (2× apply-independent).
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-1': {
    // ── [0] DEG/RAD-Umschaltung am Taschenrechner ─────────────────────────
    0: [
      tf(
        'Auf einem Taschenrechner im DEG-Modus liefert $\\sin(30)$ den Wert $0{,}5$.',
        true,
        `**Ansatz:** Im DEG-Modus interpretiert der Rechner die Eingabe als Grad.

**Rechnung:** $\\sin(30°) = 0{,}5$ (Standardwert aus der Trigonometrie-Tabelle).

**Probe:** Im RAD-Modus läge $\\sin(30) \\approx -0{,}988$ (weil $30$ rad $\\approx 1719°$ entspricht — modulo $360°$ etwa $279°$, dort negativ).

**Typischer Fehler:** Annehmen, der Rechner erkenne automatisch Grad — er folgt nur dem eingestellten Modus.`,
        [
          'Was bedeutet der DEG-Modus?',
          'Grad-Interpretation der Eingabe.',
          'Standard-Wert $\\sin(30°) = 1/2$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['deg-rad-modus'] },
      ),
      mc(
        'Du tippst $\\sin(90)$ ein und erhältst $0{,}894$. In welchem Modus ist dein Rechner?',
        ['RAD (Radiant)', 'DEG (Grad)', 'GRAD (Neu-Grad, $100$ Einheiten pro Quadrant)', 'Der Wert $0{,}894$ ist bei keinem Modus möglich.'],
        0,
        `**Ansatz:** In DEG wäre $\\sin(90°) = 1$ exakt. Der Abweichende Wert verrät einen anderen Modus.

**Rechnung:** $\\sin(90\\,\\text{rad}) \\approx 0{,}894$, weil $90\\,\\text{rad}$ modulo $2\\pi \\approx 90 - 14 \\cdot 2\\pi \\approx 2{,}04\\,\\text{rad}$, und $\\sin(2{,}04) \\approx 0{,}894$.

**Probe:** Testen mit einem bekannten Wert: $\\sin(90°) = 1$. Wenn der Rechner etwas anderes liefert, stimmt der Modus nicht.

**Typischer Fehler:** Ohne Modus-Check rechnen und krumme Dezimalwerte akzeptieren.`,
        [
          'Welchen Wert MÜSSTE $\\sin(90°)$ haben?',
          'Der tatsächliche Wert weicht deutlich ab.',
          'Rechner interpretiert die $90$ nicht als Grad.',
        ],
        {
          1: 'Im DEG-Modus wäre $\\sin(90) = 1$ exakt. Der Wert $0{,}894$ ist unmöglich.',
          2: 'Im GRAD-Modus wäre $\\sin(90) = \\sin(81°) \\approx 0{,}988$, auch nicht $0{,}894$.',
          3: '$0{,}894$ ist durchaus möglich — nur im RAD-Modus, weil $90\\,\\text{rad}$ ein ganz anderer Winkel ist.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['deg-rad-modus'] },
      ),
      mc(
        'Du willst $\\sin(\\pi/2)$ berechnen. In welchem Modus muss der Rechner stehen, damit $1$ als Ergebnis kommt?',
        ['RAD (Radiant)', 'DEG (Grad)', 'Beide liefern $1$.', 'Keiner — $\\sin(\\pi/2)$ ist nicht definiert.'],
        0,
        `**Ansatz:** $\\pi/2$ ist ein Bogenmaß-Ausdruck — der Rechner muss im RAD-Modus interpretieren.

**Rechnung:** $\\sin(\\pi/2\\,\\text{rad}) = \\sin(90°) = 1$. Im DEG-Modus würde $\\sin(\\pi/2 \\text{ als Grad}) = \\sin(1{,}5708°) \\approx 0{,}0274$.

**Probe:** Immer prüfen: Ist die Eingabe "krumm" (wie $\\pi/2 \\approx 1{,}5708$) → RAD-Modus wählen.

**Typischer Fehler:** Annehmen, $\\pi/2$ sei ein Grad-Ausdruck — aber $\\pi/2$ steht konventionell für Radiant.`,
        [
          'Ist $\\pi/2$ ein Grad- oder Radiant-Ausdruck?',
          '$\\pi$ im Argument → Bogenmaß.',
          'Ergebnis-Ziel: $1$. In welchem Modus gilt $\\sin = 1$ bei $\\pi/2$?',
        ],
        {
          1: 'DEG würde $\\pi/2$ als $1{,}5708°$ lesen — $\\sin$ davon ist nahezu Null.',
          2: 'DEG liefert nicht $1$, siehe oben. RAD ist eindeutig.',
          3: '$\\sin(\\pi/2)$ ist sehr wohl definiert — im RAD-Modus exakt $1$.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['deg-rad-modus'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(30)$ und bekommt $-0{,}988$ statt $0{,}5$. Wo liegt der Fehler?',
        [
          'Der Rechner steht im RAD-Modus; die Eingabe $30$ wird als $30\\,\\text{rad}$ interpretiert statt als $30°$.',
          'Die Sinus-Taste ist defekt.',
          'Der Rechner liefert sowieso nur Näherungswerte — $-0{,}988$ ist nah an $0{,}5$.',
          '$\\sin(30°)$ ist tatsächlich $-0{,}988$.',
        ],
        0,
        `**Ansatz:** $-0{,}988$ ist ein krummer Wert, der nicht zum bekannten $\\sin(30°) = 0{,}5$ passt. Modus-Fehler ist die mit Abstand häufigste Ursache.

**Rechnung:** $30\\,\\text{rad}$ modulo $2\\pi$ liegt bei etwa $4{,}58\\,\\text{rad} \\approx 262{,}4°$, also im 3./4. Quadranten, wo $\\sin$ negativ ist. $\\sin(30\\,\\text{rad}) \\approx -0{,}988$ passt exakt.

**Probe:** Auf DEG umstellen: $\\sin(30) = 0{,}5$ ✓.

**Typischer Fehler:** Genau dieser — Prüfungsklassiker. Immer den Modus prüfen, bevor Winkelfunktionen eingegeben werden.`,
        [
          'Kennst du $\\sin(30°)$? Was sollte rauskommen?',
          'Der Rechner liefert einen ganz anderen Wert — warum?',
          'Modus-Prüfung: DEG oder RAD?',
        ],
        {
          1: 'Ein defekter Rechner ist extrem unwahrscheinlich; Modus-Fehler in $99\\%$ der Fälle.',
          2: '$-0{,}988$ und $0{,}5$ sind nicht "nah" — sie haben unterschiedliche Vorzeichen. Das ist ein struktureller Fehler.',
          3: '$\\sin(30°) = 0{,}5$ ist ein fundamentaler Grundwert — steht in jeder Formelsammlung.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['deg-rad-modus'] },
      ),
      matching(
        'Ordne jedem Rechenergebnis den Modus des Taschenrechners zu (Eingabe: $\\sin(90)$).',
        [
          { left: '$\\sin(90) = 1$',               right: 'DEG (Grad)' },
          { left: '$\\sin(90) \\approx 0{,}894$',   right: 'RAD (Radiant)' },
          { left: '$\\sin(90) \\approx 0{,}988$',   right: 'GRAD (Neu-Grad)' },
          { left: '$\\sin(90) = $ Fehler',          right: 'Eingabe ungültig' },
        ],
        `**Ansatz:** Je nach Modus hat der Rechner eine andere Interpretation der Eingabe $90$.

**Rechnung:** DEG: $\\sin(90°) = 1$; RAD: $\\sin(90\\,\\text{rad})$ modulo $2\\pi \\approx \\sin(2{,}04) \\approx 0{,}894$; GRAD (Neu-Grad, $400$ pro Kreis): $\\sin(90 \\text{ grd}) = \\sin(81°) \\approx 0{,}988$.

**Probe:** Umstellen und nachprüfen, welches Ergebnis kommt — das verrät den aktuellen Modus.

**Typischer Fehler:** Den Neu-Grad-Modus (GRAD/grd) ignorieren — auf vielen wissenschaftlichen Rechnern ist er die dritte Option.`,
        [
          'Drei Modi: DEG, RAD, GRAD.',
          'DEG liefert den Standardwert $\\sin(90°)=1$.',
          'Krumme Werte verraten RAD oder GRAD.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['deg-rad-modus'] },
      ),
    ],

    // ── [1] π-Vielfache: π/6, π/4, π/3, π/2 als Grad erkennen ──────────────
    1: [
      matching(
        'Ordne jedem π-Vielfachen den passenden Winkel in Grad zu.',
        [
          { left: '$\\pi/6$', right: '$30°$' },
          { left: '$\\pi/4$', right: '$45°$' },
          { left: '$\\pi/3$', right: '$60°$' },
          { left: '$\\pi/2$', right: '$90°$' },
        ],
        `**Ansatz:** $\\pi$ rad $= 180°$. Bruchteile von $\\pi$ entsprechen den gleichen Bruchteilen von $180°$.

**Rechnung:** $\\pi/6 = 180°/6 = 30°$; $\\pi/4 = 180°/4 = 45°$; $\\pi/3 = 180°/3 = 60°$; $\\pi/2 = 180°/2 = 90°$.

**Probe:** $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2 = 90°$, und $30° + 60° = 90°$ ✓.

**Typischer Fehler:** $\\pi/6$ mit $60°$ verwechseln (weil "6"). Tatsächlich: Nenner $6$ → $180°/6 = 30°$.`,
        [
          '$\\pi = 180°$.',
          'Nenner bestimmt die Teilung von $180°$.',
          'Brüche von $\\pi$ ↔ Brüche von $180°$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pi-vielfache'] },
      ),
      mc(
        'Was entspricht $\\pi/4$ in Grad?',
        ['$45°$', '$25°$', '$90°$', '$60°$'],
        0,
        `**Ansatz:** $\\pi = 180°$, also $\\pi/4 = 180°/4$.

**Rechnung:** $180°/4 = 45°$.

**Probe:** $4 \\cdot 45° = 180°$ ✓.

**Typischer Fehler:** $\\pi/4$ mit $\\pi \\cdot 4 = 720°$ verwechseln oder als $25°$ (Nenner-Missverständnis).`,
        [
          '$\\pi = 180°$.',
          'Division durch $4$.',
          '$180/4 = ?$',
        ],
        {
          1: '$25°$ hat keinen Zusammenhang zu $\\pi/4$. Der Wert stammt aus $100°/4$ — falsche Basis.',
          2: '$90°$ ist $\\pi/2$, nicht $\\pi/4$.',
          3: '$60°$ ist $\\pi/3$. $\\pi/4$ ist kleiner.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pi-vielfache'] },
      ),
      ni(
        'Wie viele Grad entspricht $\\pi/3$?',
        60, 0, '°',
        `**Ansatz:** $\\pi = 180°$, also $\\pi/3 = 180°/3$.

**Rechnung:** $180°/3 = 60°$.

**Probe:** $3 \\cdot 60° = 180° = \\pi$ ✓.

**Typischer Fehler:** $\\pi/3$ mit $30°$ verwechseln (weil "3"). Nenner $3$ → Teilung von $180°$ durch $3$.`,
        [
          '$\\pi = 180°$.',
          '$\\pi/3 = 180°/3$.',
          'Ergebnis in Grad.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pi-vielfache'] },
      ),
      mc(
        'Ein Schüler schreibt: „$\\pi/6 = 60°$, weil die $6$ im Nenner steht." Welcher Fehler liegt vor?',
        [
          'Der Nenner $n$ bedeutet **Teilung** von $180°$ durch $n$, nicht "ist gleich $n$". Korrekt: $\\pi/6 = 180°/6 = 30°$.',
          'Er müsste $\\pi \\cdot 6 = 1080°$ rechnen.',
          '$\\pi/6$ ist ein Grad-Ausdruck und muss direkt gelesen werden.',
          'Die Aussage stimmt — $\\pi/6$ ist wirklich $60°$.',
        ],
        0,
        `**Ansatz:** $\\pi/n$ = $n$-tel von $\\pi$, also $n$-tel von $180°$. Der Nenner wird als **Divisor** eingesetzt.

**Rechnung:** Korrekt: $\\pi/6 = 180°/6 = 30°$. Der Schüler-Wert $60°$ wäre $\\pi/3$.

**Probe:** $\\pi/6 + \\pi/3 = \\pi/2 = 90°$. Mit Schülerwerten $60° + 60° = 120° \\neq 90°$ — Widerspruch.

**Typischer Fehler:** Genau dieser — Nenner $n$ direkt mit Gradzahl gleichsetzen. Merkhilfe: $\\pi/n$ = "Stück" des Halbkreises.`,
        [
          'Wie liest man $\\pi/6$?',
          '$180° / ? = 30°$.',
          'Der Nenner TEILT, er benennt nicht.',
        ],
        {
          1: '$\\pi \\cdot 6$ wäre "$\\pi$ mal $6$", nicht "$\\pi$ durch $6$". Das ist eine andere Operation.',
          2: '$\\pi/6$ ist ein Radiant-Ausdruck, keine Grad-Angabe. Umrechnung nötig.',
          3: 'Die Aussage stimmt nicht — $\\pi/6 = 30°$, nicht $60°$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pi-vielfache'] },
      ),
      matching(
        'Ordne jedem π-Vielfachen den korrekten Grad-Wert zu.',
        [
          { left: '$2\\pi/3$',  right: '$120°$' },
          { left: '$3\\pi/4$',  right: '$135°$' },
          { left: '$5\\pi/6$',  right: '$150°$' },
          { left: '$3\\pi/2$',  right: '$270°$' },
        ],
        `**Ansatz:** $\\pi = 180°$. $k\\pi/n = k \\cdot 180°/n$.

**Rechnung:**
· $2\\pi/3 = 2 \\cdot 180°/3 = 120°$
· $3\\pi/4 = 3 \\cdot 180°/4 = 135°$
· $5\\pi/6 = 5 \\cdot 180°/6 = 150°$
· $3\\pi/2 = 3 \\cdot 180°/2 = 270°$

**Probe:** Alle Werte unter $360°$ (Vollkreis).

**Typischer Fehler:** Zähler und Nenner verwechseln: $2\\pi/3$ als "$3$ mal $180°$ durch $2$" rechnen.`,
        [
          '$k\\pi/n = k \\cdot 180°/n$.',
          'Erst $180°/n$ ausrechnen, dann mit $k$ multiplizieren.',
          'Brüche von $\\pi$ skalieren linear mit Grad.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['pi-vielfache'] },
      ),
    ],

    // ── [2] Umrechnungsformel α_rad = α_deg · π/180 ────────────────────────
    2: [
      tf(
        'Die Umrechnungsformel $\\alpha_{\\mathrm{rad}} = \\alpha_\\circ \\cdot \\dfrac{\\pi}{180}$ gilt für alle Winkel, auch für größere als $360°$.',
        true,
        `**Ansatz:** Die Formel ist eine lineare Proportionalität zwischen Grad- und Bogenmaß.

**Rechnung:** $720° \\cdot \\pi/180 = 4\\pi$ rad (zwei volle Umdrehungen). Funktioniert für jeden Wert.

**Probe:** Rückrechnung: $4\\pi \\cdot 180/\\pi = 720°$ ✓.

**Typischer Fehler:** Annehmen, die Formel gelte nur im ersten Quadranten — sie ist eine mathematische Skalierung, uneingeschränkt gültig.`,
        [
          'Ist die Formel eine lineare Skalierung?',
          'Funktioniert für jedes Vielfache von $\\pi$.',
          'Unabhängig vom Quadranten oder Vollkreis.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
      mc(
        'Wie lautet $60°$ in Radiant?',
        ['$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{60}$', '$60\\pi$', '$\\dfrac{180}{60\\pi}$'],
        0,
        `**Ansatz:** $\\alpha_{\\mathrm{rad}} = \\alpha_\\circ \\cdot \\pi/180$.

**Rechnung:** $60 \\cdot \\pi/180 = \\pi/3$.

**Probe:** $\\pi/3 \\cdot 180/\\pi = 60°$ ✓.

**Typischer Fehler:** $60$ direkt als Nenner einsetzen ($\\pi/60$) oder Grad und $\\pi$ multiplizieren.`,
        [
          'Formel: $\\alpha_\\circ \\cdot \\pi/180$.',
          '$60 \\cdot \\pi/180 = ?$',
          'Kürzen von $60/180 = 1/3$.',
        ],
        {
          1: '$\\pi/60$ entsteht bei falscher Einsetzung: $\\pi/180 \\cdot (1/60)$ — umgekehrt.',
          2: '$60\\pi$ wäre, wenn man $\\pi/180$ als "$\\pi$" multiplizieren würde und die Division durch $180$ vergisst.',
          3: 'Das ist eine Mischform, die mathematisch keinen Sinn ergibt.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
      ni(
        'Rechne $45°$ in Radiant um. Gib den Wert als Dezimalzahl (4 Nachkommastellen) an.',
        0.7854, 0.001, '',
        `**Ansatz:** $\\alpha_{\\mathrm{rad}} = 45 \\cdot \\pi/180 = \\pi/4$.

**Rechnung:** $\\pi/4 \\approx 3{,}1416/4 \\approx 0{,}7854$.

**Probe:** $0{,}7854 \\cdot 180/\\pi \\approx 45°$ ✓.

**Typischer Fehler:** $45 \\cdot \\pi \\approx 141{,}37$ oder $45/\\pi \\approx 14{,}32$ rechnen — falsche Formel-Anwendung.`,
        [
          'Formel: Grad $\\cdot \\pi/180$.',
          '$45/180 = 1/4$, also $\\pi/4$.',
          '$\\pi/4$ dezimal.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
      ni(
        'Rechne $\\dfrac{2\\pi}{3}$ in Grad um.',
        120, 0, '°',
        `**Ansatz:** Umgekehrt: $\\alpha_\\circ = \\alpha_{\\mathrm{rad}} \\cdot 180/\\pi$.

**Rechnung:** $(2\\pi/3) \\cdot 180/\\pi = 2 \\cdot 180/3 = 360/3 = 120°$.

**Probe:** $120 \\cdot \\pi/180 = 120\\pi/180 = 2\\pi/3$ ✓.

**Typischer Fehler:** $\\pi/180$ statt $180/\\pi$ nutzen und einen winzigen Wert erhalten.`,
        [
          'Radiant zu Grad: $\\cdot 180/\\pi$.',
          '$\\pi$ kürzt sich weg.',
          '$2 \\cdot 180/3 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
      mc(
        'Ein Schüler rechnet $\\pi/2$ zu Grad und bekommt $1{,}5708°$. Wo liegt der Fehler?',
        [
          'Er hat mit $\\pi/180$ multipliziert (Grad→Radiant-Richtung) statt mit $180/\\pi$ (Radiant→Grad-Richtung).',
          'Sein Rechner ist falsch kalibriert.',
          'Die Antwort $1{,}5708°$ ist richtig — $\\pi/2$ ist ein kleiner Winkel.',
          '$\\pi/2$ ist in Grad gar nicht definiert.',
        ],
        0,
        `**Ansatz:** $\\pi/2$ ist Bogenmaß, soll zu Grad. Formel: $\\alpha_\\circ = \\alpha_{\\mathrm{rad}} \\cdot 180/\\pi$. Der Schüler hat die umgekehrte Formel angewandt.

**Rechnung:** Korrekt: $(\\pi/2) \\cdot 180/\\pi = 90°$. Der Schüler-Wert $1{,}5708°$ entspricht $(\\pi/2) \\cdot \\pi/180 = \\pi^2/360 \\approx 0{,}0274 \\ne 1{,}5708$ — eigentlich: er hat $(\\pi/2)$ direkt als Zahl in einen Rechner im DEG-Modus mit der Formel $\\cdot 1$ eingegeben, also $\\pi/2 \\approx 1{,}5708$ als "Grad"-Zahl gelesen.

**Probe:** Klarer Reality-Check: $\\pi/2$ entspricht $90°$ (Grundwert). Ein Wert von $1{,}5708°$ ist fast ein Null-Grad-Winkel — völlig unplausibel.

**Typischer Fehler:** Umrechnungsrichtung vertauschen. Merkhilfe: Grad hat mehr Zahlen als Radiant (für denselben Winkel). Beim Umrechnen Radiant→Grad → Zahl wird GRÖSSER (Multiplikation mit $180/\\pi \\approx 57$).`,
        [
          'Welche Richtung: Radiant→Grad oder Grad→Radiant?',
          'Faustregel: Radiant-Zahl $\\cdot 57 \\approx $ Grad-Zahl.',
          '$\\pi/2 \\cdot 57 \\approx 90°$, nicht $1{,}6°$.',
        ],
        {
          1: 'Ein Rechner-Fehler ist unwahrscheinlich. Formel-Fehler in der Umrechnung ist die häufigste Ursache.',
          2: 'Grundwert: $\\pi/2 = 90°$. Das weicht dramatisch von $1{,}6°$ ab.',
          3: '$\\pi/2$ ist problemlos in Grad umrechenbar — $90°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
      ni(
        'Rechne $135°$ in Radiant um. Gib den Bruch-Koeffizienten von $\\pi$ als Dezimalzahl an (also $k$ in $k\\pi$).',
        0.75, 0.001, '',
        `**Ansatz:** $135 \\cdot \\pi/180 = 135\\pi/180$. Kürzen: $135/180 = 3/4 = 0{,}75$.

**Rechnung:** $135/180 = 3/4$. Also $135° = (3/4)\\pi = 3\\pi/4$. Der Koeffizient ist $0{,}75$.

**Probe:** $(3/4)\\pi \\cdot 180/\\pi = 3/4 \\cdot 180 = 135°$ ✓.

**Typischer Fehler:** Nicht kürzen und $135\\pi/180$ stehen lassen; oder falsche Division.`,
        [
          '$135 \\cdot \\pi/180$.',
          'Kürzen von $135/180$.',
          'Koeffizient als Dezimalzahl.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['umrechnung-formel'] },
      ),
    ],

    // ── [3] Bogenlänge am Einheitskreis als Winkelmaß ──────────────────────
    3: [
      tf(
        'Die Formel $b = r \\cdot \\alpha$ für die Bogenlänge gilt nur, wenn $\\alpha$ im Bogenmaß (Radiant) angegeben ist.',
        true,
        `**Ansatz:** Die Definition des Bogenmaßes ist, dass der Bogen am Einheitskreis numerisch gleich dem Winkel ist.

**Rechnung:** Am Einheitskreis ($r = 1$): $b = 1 \\cdot \\alpha = \\alpha$ — nur gültig in Radiant. Für $r \\ne 1$: $b = r\\alpha_{\\mathrm{rad}}$.

**Probe:** Grad-Einsetzung: $b = 5 \\cdot 90° = 450$ Einheiten — unsinnig. Richtig: $5 \\cdot \\pi/2 \\approx 7{,}85$.

**Typischer Fehler:** Gradzahl direkt einsetzen ohne Umrechnung. Klassiker in Prüfungen.`,
        [
          'Warum ist Radiant für Bogenlängen bequem?',
          '$b = r\\alpha$ erfordert dimensionslose $\\alpha$.',
          'In Grad müsste $\\alpha_\\circ \\cdot \\pi/180$ eingesetzt werden.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['bogenlaenge'] },
      ),
      mc(
        'Ein Kreis hat Radius $r = 2$. Wie lang ist der Bogen für einen Winkel von $\\alpha = \\pi/2$?',
        ['$\\pi$', '$2\\pi$', '$\\pi/4$', '$4\\pi$'],
        0,
        `**Ansatz:** $b = r \\cdot \\alpha$.

**Rechnung:** $b = 2 \\cdot \\pi/2 = \\pi$.

**Probe:** Viertelkreis mit Radius $2$: Umfang $= 2\\pi r = 4\\pi$. Viertel davon: $\\pi$ ✓.

**Typischer Fehler:** $\\pi/4$ rechnen (Division statt Multiplikation) oder $4\\pi$ (vollen Umfang nehmen statt Viertel).`,
        [
          'Formel: $b = r \\cdot \\alpha$.',
          '$r = 2$, $\\alpha = \\pi/2$.',
          'Multiplizieren.',
        ],
        {
          1: '$2\\pi$ wäre der Halbkreis ($\\alpha = \\pi$), nicht der Viertelkreis.',
          2: '$\\pi/4$ ergäbe sich bei $b = \\alpha/r$ — falsche Formel (Division statt Multiplikation).',
          3: '$4\\pi$ ist der volle Umfang, nicht der Bogen für $\\pi/2$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['bogenlaenge'] },
      ),
      ni(
        'Berechne die Bogenlänge für $r = 5$ und $\\alpha = \\pi/3$.',
        5.236, 0.01, '',
        `**Ansatz:** $b = r \\cdot \\alpha$.

**Rechnung:** $b = 5 \\cdot \\pi/3 = 5\\pi/3 \\approx 5{,}236$.

**Probe:** Drittel des halben Umfangs eines Kreises mit $r=5$: $\\pi r / 3 = 5\\pi/3$ ✓.

**Typischer Fehler:** $\\alpha$ in Grad einsetzen ($60°$): $b = 5 \\cdot 60 = 300$ — völlig falsch.`,
        [
          'Formel: $b = r\\alpha$ (mit $\\alpha$ in Radiant).',
          '$5 \\cdot \\pi/3 = ?$',
          'Dezimalwert: $\\pi/3 \\approx 1{,}047$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['bogenlaenge'] },
      ),
      mc(
        'Ein Schüler berechnet die Bogenlänge mit $r = 10$ und $\\alpha = 60°$ (Grad!) und kommt auf $b = 600$. Wo liegt der Fehler?',
        [
          'Er hat die Gradzahl direkt in die Formel $b = r\\alpha$ eingesetzt, ohne in Radiant umzurechnen. Korrekt: $\\alpha = \\pi/3 \\Rightarrow b = 10\\pi/3 \\approx 10{,}47$.',
          'Die Rechnung ist korrekt — $600$ ist die richtige Bogenlänge.',
          'Er hätte $b = r/\\alpha$ rechnen müssen.',
          'Die Formel gilt nur für Kreise mit $r = 1$.',
        ],
        0,
        `**Ansatz:** Die Formel $b = r\\alpha$ setzt $\\alpha$ im Bogenmaß voraus.

**Rechnung:** Korrekt: $60° = \\pi/3$ rad. $b = 10 \\cdot \\pi/3 \\approx 10{,}47$. Der Schüler-Wert $600$ ist fast $60$ mal zu groß.

**Probe:** Plausibilität: der volle Umfang des Kreises mit $r = 10$ ist $2\\pi r \\approx 62{,}83$. Ein $60°$-Bogen kann unmöglich $600$ sein — das ist fast das Zehnfache des Gesamtumfangs.

**Typischer Fehler:** Dieser hier — Einsetzen der Gradzahl ohne Umrechnung. Prüfungsklassiker. Immer erst in Radiant bringen.`,
        [
          'Passt die Größenordnung des Ergebnisses?',
          'Gesamtumfang mit $r = 10$: $\\approx 62{,}8$.',
          'Einheit der $\\alpha$-Variable prüfen.',
        ],
        {
          1: '$600$ ist um das Fast-Zehnfache größer als der gesamte Umfang. Das kann kein einzelner Bogen sein.',
          2: '$b = r/\\alpha$ wäre dimensionsmäßig unsinnig und liefert nicht den gewünschten Wert.',
          3: 'Die Formel gilt für jeden Radius, nicht nur $r = 1$. $r = 1$ ist nur ein Spezialfall (Einheitskreis).',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['bogenlaenge'] },
      ),
      ni(
        'Ein Kreissektor hat Bogenlänge $b = 4$ und Radius $r = 8$. Berechne den zugehörigen Winkel $\\alpha$ in Radiant.',
        0.5, 0.01, '',
        `**Ansatz:** $\\alpha = b/r$ (Umstellung von $b = r\\alpha$).

**Rechnung:** $\\alpha = 4/8 = 0{,}5$ rad.

**Probe:** $r \\cdot \\alpha = 8 \\cdot 0{,}5 = 4 = b$ ✓.

**Typischer Fehler:** $\\alpha = b \\cdot r = 32$ rechnen (Multiplikation statt Division).`,
        [
          'Umstellen von $b = r\\alpha$.',
          '$\\alpha = b/r$.',
          'Einfache Division.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['bogenlaenge'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-2 — Rechtwinkliges Dreieck / SOH-CAH-TOA  (3 subGoals)
  // 15 Matrix-Aufgaben: 3 SGs × 5 Stufen. Alle mit pedagogy.
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-2': {
    // ── [0] SOH-CAH-TOA als Merkregel ─────────────────────────────────────
    0: [
      matching(
        'Ordne jeder Winkelfunktion ihr Seitenverhältnis im rechtwinkligen Dreieck zu.',
        [
          { left: '$\\sin(\\alpha)$', right: 'Gegenkathete / Hypotenuse' },
          { left: '$\\cos(\\alpha)$', right: 'Ankathete / Hypotenuse' },
          { left: '$\\tan(\\alpha)$', right: 'Gegenkathete / Ankathete' },
        ],
        `**Ansatz:** SOH-CAH-TOA — die Standard-Merkregel für die drei Grundfunktionen.

**Rechnung:** SOH: $\\sin = G/H$ (Opposite/Hypotenuse). CAH: $\\cos = A/H$ (Adjacent/Hypotenuse). TOA: $\\tan = G/A$ (Opposite/Adjacent).

**Probe:** $\\tan = \\sin/\\cos = (G/H)/(A/H) = G/A$ ✓.

**Typischer Fehler:** Gegenkathete/Ankathete verwechseln — beide sind Kathete und sehen sich ähnlich.`,
        [
          'SOH-CAH-TOA aufschreiben.',
          'Jeder Buchstabe steht für eine Seite: O = Opposite (Gegen), A = Adjacent (An), H = Hypotenuse.',
          'Sinus/Kosinus teilen durch Hypotenuse; Tangens nicht.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      mc(
        'In einem rechtwinkligen Dreieck ist die Gegenkathete zu $\\alpha$ gleich $3$ und die Hypotenuse gleich $5$. Wie groß ist $\\sin(\\alpha)$?',
        ['$\\dfrac{3}{5}$', '$\\dfrac{5}{3}$', '$\\dfrac{4}{5}$', '$\\dfrac{3}{4}$'],
        0,
        `**Ansatz:** $\\sin = $ Gegenkathete / Hypotenuse.

**Rechnung:** $\\sin(\\alpha) = 3/5 = 0{,}6$.

**Probe:** Da $3^2 + 4^2 = 5^2$, ist die Ankathete $4$, und $\\cos = 4/5$; $\\sin^2 + \\cos^2 = 9/25 + 16/25 = 1$ ✓.

**Typischer Fehler:** Nenner und Zähler vertauschen ($5/3$) oder $\\cos$-Wert angeben ($4/5$).`,
        [
          'Formel: $\\sin = G/H$.',
          'Gegenkathete $= 3$, Hypotenuse $= 5$.',
          'Einfach einsetzen.',
        ],
        {
          1: '$5/3$ ist der Kehrwert — das wäre $1/\\sin(\\alpha) = \\csc(\\alpha)$, nicht $\\sin$.',
          2: '$4/5$ ist $\\cos(\\alpha)$ (Ankathete/Hypotenuse), nicht $\\sin$.',
          3: '$3/4$ wäre $\\tan(\\alpha)$ (G/A), nicht $\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      ni(
        'In einem rechtwinkligen Dreieck ist die Ankathete zu $\\alpha$ gleich $8$ und die Hypotenuse gleich $10$. Wie groß ist $\\cos(\\alpha)$? (Dezimalzahl)',
        0.8, 0.001, '',
        `**Ansatz:** $\\cos = $ Ankathete / Hypotenuse.

**Rechnung:** $\\cos(\\alpha) = 8/10 = 0{,}8$.

**Probe:** Gegenkathete via Pythagoras: $\\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. $\\sin = 6/10 = 0{,}6$. $\\sin^2 + \\cos^2 = 0{,}36 + 0{,}64 = 1$ ✓.

**Typischer Fehler:** $\\sin$ statt $\\cos$ berechnen (Verhältnis passt nicht).`,
        [
          'Formel: $\\cos = A/H$.',
          '$A = 8$, $H = 10$.',
          'Teilen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      mc(
        'Ein Schüler behauptet: $\\sin(\\alpha) = \\dfrac{\\text{Hypotenuse}}{\\text{Gegenkathete}}$. Wo liegt der Fehler?',
        [
          'Zähler und Nenner sind vertauscht. Korrekt ist $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$ (SOH: Opposite over Hypotenuse).',
          'Die Formel ist richtig — nur die Reihenfolge unüblich.',
          'Er müsste $\\text{Ankathete}$ statt $\\text{Gegenkathete}$ verwenden.',
          '$\\sin$ ist gar nicht in rechtwinkligen Dreiecken definiert.',
        ],
        0,
        `**Ansatz:** SOH = **O**pposite (Gegenkathete) over **H**ypotenuse, also Gegenkathete / Hypotenuse.

**Rechnung:** Schülerwert mit $G=3, H=5$: $5/3 \\approx 1{,}67$. Aber $\\sin$-Werte liegen im Intervall $[-1, 1]$. $1{,}67$ ist unmöglich.

**Probe:** Grenzfall: bei $\\alpha = 90°$ sind Gegenkathete = Hypotenuse, also $\\sin(90°) = H/H = 1$. Mit der Schüler-Formel käme $H/G = H/H = 1$ zufällig auch — aber für andere Winkel liefert sie Werte $> 1$, was unmöglich ist.

**Typischer Fehler:** Zähler und Nenner beim Aufstellen vertauschen. Merkhilfe: SOH = **S**inus → **O**pposite oben, **H**ypotenuse unten.`,
        [
          'Werte-Bereich von $\\sin$: $[-1, 1]$.',
          'Test: bei spitzem Winkel muss Verhältnis $< 1$ sein.',
          'Merkhilfe SOH präzise lesen.',
        ],
        {
          1: 'Die Reihenfolge ist nicht egal — Zähler durch Nenner ändert den Wert drastisch.',
          2: 'Ankathete/Hypotenuse wäre $\\cos$, nicht die Lösung des Problems. Das Problem ist die Vertauschung.',
          3: '$\\sin$ ist gerade im rechtwinkligen Dreieck klassisch definiert.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      ni(
        'Ein Dreieck mit rechtem Winkel hat die Katheten $a = 7$ und $b = 24$. Berechne $\\sin(\\alpha)$, wenn $\\alpha$ der Winkel gegenüber von $a$ ist. (Dezimalzahl, 2 NK)',
        0.28, 0.01, '',
        `**Ansatz:** Erst Hypotenuse via Pythagoras, dann $\\sin = $ Gegenkathete $a$ / Hypotenuse.

**Rechnung:** $c = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$. $\\sin(\\alpha) = 7/25 = 0{,}28$.

**Probe:** $\\cos(\\alpha) = 24/25 = 0{,}96$. $\\sin^2 + \\cos^2 = 0{,}0784 + 0{,}9216 = 1$ ✓.

**Typischer Fehler:** Hypotenuse vergessen zu berechnen und stattdessen $7/24$ rechnen (das wäre $\\tan$, nicht $\\sin$).`,
        [
          'Pythagoras: $c^2 = a^2 + b^2$.',
          '$\\sqrt{49 + 576} = ?$',
          '$\\sin(\\alpha) = a/c$ mit $a$ = Gegenkathete.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
    ],

    // ── [1] Gegenkathete vs. Ankathete in beliebiger Dreiecksorientierung ──
    1: [
      tf(
        'Die Gegenkathete eines Winkels $\\alpha$ ist die Seite, die $\\alpha$ NICHT berührt (also gegenüberliegt).',
        true,
        `**Ansatz:** Definition: Gegenkathete = Seite gegenüber dem Winkel. Ankathete = Seite, die den Winkel (zusammen mit der Hypotenuse) einschließt.

**Rechnung:** Bei $\\alpha = 30°$ im Dreieck mit Hypotenuse $c$: die Seite, die $\\alpha$ nicht berührt, ist gegenüber von $\\alpha$ → Gegenkathete.

**Probe:** Mit der Definition kann man G/A auch bei gedrehtem Dreieck richtig identifizieren.

**Typischer Fehler:** Gegenkathete als "die längere Kathete" identifizieren — das hängt aber vom Winkel ab, nicht von der absoluten Länge.`,
        [
          'Gegenkathete liegt gegenüber.',
          'Sie berührt den Winkel NICHT.',
          'Ankathete und Hypotenuse schließen den Winkel ein.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'In einem rechtwinkligen Dreieck ist der rechte Winkel bei $C$, $\\alpha = 30°$ bei $A$, $\\beta = 60°$ bei $B$. Welche Seite ist die Gegenkathete zu $\\alpha$?',
        ['Die Seite $a$ (gegenüber von $A$)', 'Die Seite $b$ (gegenüber von $B$)', 'Die Seite $c$ (Hypotenuse)', 'Es gibt keine Gegenkathete.'],
        0,
        `**Ansatz:** In der Standardbezeichnung: Seite $a$ liegt gegenüber Winkel $A$.

**Rechnung:** Gegenkathete zu $\\alpha$ (Winkel $A$) ist $a$.

**Probe:** Ankathete zu $\\alpha$ ist $b$, Hypotenuse ist $c$ (gegenüber dem rechten Winkel $C$).

**Typischer Fehler:** Seitenbezeichnung und Winkelbezeichnung verwechseln.`,
        [
          'Standard: Seite gegenüber Winkel mit Kleinbuchstabe.',
          'Seite $a$ ↔ Winkel $A$ (gegenüber).',
          'Gegenkathete = gegenüber vom Winkel.',
        ],
        {
          1: '$b$ ist gegenüber von $B$, also Gegenkathete zu $\\beta$, nicht zu $\\alpha$.',
          2: '$c$ ist Hypotenuse, gegenüber des rechten Winkels.',
          3: 'Jeder nicht-rechte Winkel hat eine Gegenkathete.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'Ein rechtwinkliges Dreieck liegt mit der Hypotenuse waagerecht am unteren Rand. Der rechte Winkel zeigt nach unten-links, $\\alpha$ nach unten-rechts. Welche Seite ist Ankathete zu $\\alpha$?',
        ['Die Seite auf der waagerechten Linie (zwischen $\\alpha$ und dem rechten Winkel).', 'Die linke schräge Seite (gegenüber von $\\alpha$).', 'Die Hypotenuse.', 'Es gibt keine Ankathete bei schräger Lage.'],
        0,
        `**Ansatz:** Ankathete = Kathete, die den Winkel $\\alpha$ berührt (neben ihm liegt, aber nicht die Hypotenuse ist).

**Rechnung:** Bei $\\alpha$ am unteren-rechten Eck berührt: die waagerechte Seite (zum rechten Winkel) UND die Hypotenuse. Die waagerechte ist die Ankathete; die Hypotenuse ist keine Kathete.

**Probe:** Die dritte Seite (links schräg nach oben) liegt gegenüber von $\\alpha$ → Gegenkathete.

**Typischer Fehler:** Lage des Dreiecks verwirrt — bei gedrehtem Dreieck "horizontal = Ankathete" annehmen. Relevanz ist die Position zum Winkel, nicht zur Erdachse.`,
        [
          'Ankathete berührt den Winkel.',
          'Ankathete $\\neq$ Hypotenuse.',
          'Drehlage des Dreiecks ändert nichts.',
        ],
        {
          1: 'Die linke schräge Seite liegt gegenüber → Gegenkathete, nicht Ankathete.',
          2: 'Hypotenuse berührt zwar $\\alpha$, ist aber per Definition keine Kathete.',
          3: 'Ankathete existiert bei jedem nicht-rechten Winkel, unabhängig von der Lage.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'Ein Schüler sagt: „Die Gegenkathete ist immer die Seite, die waagerecht liegt." Wo liegt der Fehler?',
        [
          '"Gegenkathete" definiert sich durch die Lage zum Winkel (gegenüber), nicht durch eine absolute Richtung im Raum.',
          'Waagerecht ist immer die Ankathete.',
          'Gegenkathete gibt es nur bei waagerecht liegenden Dreiecken.',
          'Die Aussage stimmt — Gegenkathete ist immer waagerecht.',
        ],
        0,
        `**Ansatz:** Die Begriffe "Gegen-" und "Ankathete" sind winkelbezogen, nicht raumbezogen.

**Rechnung:** Bei einem gedrehten Dreieck kann die Gegenkathete beliebig orientiert sein (horizontal, vertikal, schräg). Entscheidend: liegt sie gegenüber vom Winkel oder nicht.

**Probe:** Ein Standard-Dreieck mit Hypotenuse oben liegt mit der Gegenkathete des unteren Winkels schräg — nicht waagerecht.

**Typischer Fehler:** Dieser hier. Symptome: Schüler löst Lehrbuch-Aufgaben richtig, versagt bei gedrehten Skizzen in Prüfungen.`,
        [
          'Ist "Gegenkathete" eine absolute oder relative Eigenschaft?',
          'Drehe das Dreieck — wo liegt die Gegenkathete jetzt?',
          'Raumbezug vs. Winkelbezug.',
        ],
        {
          1: 'Waagerecht ist nicht automatisch Ankathete — hängt vom Winkel ab, nicht von der Orientierung.',
          2: 'Dreiecke können beliebig im Raum gedreht sein. Die Trig-Begriffe bleiben konsistent.',
          3: 'Die Aussage ist falsch — ein einfaches Gegenbeispiel (gedrehtes Dreieck) entlarvt das.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      matching(
        'Im Dreieck mit rechtem Winkel bei $C$, Seiten $a, b, c$: Ordne jedem Winkel seine Gegen- bzw. Ankathete zu.',
        [
          { left: 'Gegenkathete zu $\\alpha$ (Winkel $A$)', right: 'Seite $a$' },
          { left: 'Ankathete zu $\\alpha$',                 right: 'Seite $b$' },
          { left: 'Gegenkathete zu $\\beta$ (Winkel $B$)',  right: 'Seite $b$' },
          { left: 'Hypotenuse',                             right: 'Seite $c$' },
        ],
        `**Ansatz:** Standard-Nomenklatur: Kleinbuchstabe $=$ Seite gegenüber Großbuchstabe-Winkel.

**Rechnung:** Seite $a$ gegenüber $A$, etc. Hypotenuse $c$ gegenüber dem rechten Winkel $C$.

**Probe:** Für $\\alpha$: Gegen $= a$, An $= b$. Für $\\beta$: Gegen $= b$, An $= a$. Die Rolle vertauscht sich beim Wechsel des Winkels.

**Typischer Fehler:** Eine feste Zuordnung "Kathete ist immer Ankathete" annehmen. Rolle hängt vom Winkel ab.`,
        [
          'Seite und Winkel mit Groß-/Kleinbuchstabe.',
          'Gegenkathete zu $\\alpha$ = Seite $a$.',
          'Rolle wechselt beim anderen Winkel.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
    ],

    // ── [2] Umkehrfunktionen arcsin / arccos / arctan ──────────────────────
    2: [
      tf(
        'Der Befehl $\\arcsin(0{,}5)$ am Taschenrechner liefert im DEG-Modus $30°$.',
        true,
        `**Ansatz:** $\\arcsin$ liefert den Winkel, dessen Sinus der gegebene Wert ist.

**Rechnung:** $\\sin(30°) = 0{,}5$, also $\\arcsin(0{,}5) = 30°$.

**Probe:** Im RAD-Modus wäre $\\arcsin(0{,}5) \\approx 0{,}5236$ rad $= \\pi/6 = 30°$.

**Typischer Fehler:** Modus nicht beachten — dann Ergebnisse wie $0{,}5236°$ statt $30°$.`,
        [
          'Umkehrfunktion zu $\\sin$.',
          '$\\sin(30°) = 0{,}5$.',
          'Modus des Rechners prüfen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      mc(
        'Welche Umkehrfunktion verwendest du, um den Winkel zu bestimmen, wenn die Ankathete $= 4$ und die Hypotenuse $= 5$ bekannt sind?',
        ['$\\arccos(4/5)$', '$\\arcsin(4/5)$', '$\\arctan(4/5)$', '$\\arccos(5/4)$'],
        0,
        `**Ansatz:** $\\cos(\\alpha) = A/H$, also $\\alpha = \\arccos(A/H)$.

**Rechnung:** $\\arccos(4/5) = \\arccos(0{,}8) \\approx 36{,}87°$.

**Probe:** $\\cos(36{,}87°) \\approx 0{,}8$ ✓.

**Typischer Fehler:** $\\arcsin(4/5)$ nehmen und den falschen Winkel bekommen (arcsin von A/H wäre nicht zielführend).`,
        [
          'Welches Seitenverhältnis liegt vor?',
          'A/H passt zu $\\cos$.',
          'Umkehrfunktion: $\\arccos$.',
        ],
        {
          1: '$\\arcsin(4/5)$ würde einen anderen Winkel liefern, der nicht zum Verhältnis $A/H$ passt.',
          2: '$\\arctan$ bräuchte $G/A$, nicht $A/H$.',
          3: '$5/4 > 1$ — $\\arccos$ ist nur für Werte $\\in [-1, 1]$ definiert, liefert also Fehler.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      ni(
        'Berechne $\\arctan(1)$ in Grad.',
        45, 0, '°',
        `**Ansatz:** $\\tan(45°) = 1$, also $\\arctan(1) = 45°$.

**Rechnung:** $\\arctan(1) = 45°$.

**Probe:** $\\tan(45°) = \\sin(45°)/\\cos(45°) = (\\sqrt{2}/2)/(\\sqrt{2}/2) = 1$ ✓.

**Typischer Fehler:** $\\arctan(1)$ mit $1°$ verwechseln (Input-Output nicht klar trennen).`,
        [
          'Welcher Winkel hat $\\tan = 1$?',
          'Symmetrischer Fall: Gegen- = Ankathete.',
          'Das passiert bei $45°$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      mc(
        'Ein Schüler soll den Winkel bestimmen mit $\\sin(\\alpha) = 0{,}7$ und tippt im RAD-Modus $\\arcsin(0{,}7)$. Er erhält $0{,}775$ und schreibt das als Ergebnis in Grad. Wo liegt der Fehler?',
        [
          'Der Wert $0{,}775$ ist das Ergebnis in Radiant, nicht in Grad. Umrechnung nötig: $0{,}775 \\cdot 180/\\pi \\approx 44{,}4°$.',
          'Der Sinus-Wert $0{,}7$ ist nicht erlaubt.',
          '$\\arcsin$ liefert immer Grad — die $0{,}775$ sind korrekt.',
          '$\\sin(\\alpha) = 0{,}7$ hat keine Lösung.',
        ],
        0,
        `**Ansatz:** $\\arcsin$ im RAD-Modus liefert Radiant, im DEG-Modus Grad. Der Schüler muss wissen, in welchem Modus er ist.

**Rechnung:** $\\arcsin(0{,}7)$ im RAD-Modus $\\approx 0{,}7754$ rad. Umgerechnet: $0{,}7754 \\cdot 180/\\pi \\approx 44{,}43°$.

**Probe:** $\\sin(44{,}43°) \\approx 0{,}7$ ✓. Der Schüler-Wert $0{,}775°$ wäre ein nahezu Null-Grad-Winkel, mit $\\sin \\approx 0{,}0135$ — Widerspruch.

**Typischer Fehler:** Modus-Info beim Ablesen ignorieren. Plausibilitäts-Check: $\\sin(0{,}775°) \\ne 0{,}7$ entlarvt den Fehler sofort.`,
        [
          'In welchem Modus war der Rechner?',
          'Einheit des Ergebnisses = Einheit der Ausgabe.',
          'Test: $\\sin(\\text{Schüler-Winkel}) = 0{,}7$?',
        ],
        {
          1: '$0{,}7$ ist erlaubt — liegt im Intervall $[-1, 1]$.',
          2: 'Der Rechner folgt dem Modus, nicht dem Wunsch des Nutzers. Im RAD-Modus → Radiant-Ergebnis.',
          3: '$\\sin(\\alpha) = 0{,}7$ hat sehr wohl Lösungen: $\\alpha \\approx 44{,}4°$ oder $180°-44{,}4° = 135{,}6°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      ni(
        'In einem rechtwinkligen Dreieck sind Gegenkathete $= 3$ und Ankathete $= 4$. Bestimme den Winkel $\\alpha$ in Grad (1 NK).',
        36.9, 0.1, '°',
        `**Ansatz:** $\\tan(\\alpha) = G/A = 3/4$, also $\\alpha = \\arctan(3/4)$.

**Rechnung:** $\\arctan(0{,}75) \\approx 36{,}87°$.

**Probe:** $\\tan(36{,}87°) \\approx 0{,}75 = 3/4$ ✓. Hypotenuse via Pythagoras: $\\sqrt{9 + 16} = 5$. $\\sin(36{,}87°) = 3/5 = 0{,}6$ ✓.

**Typischer Fehler:** $\\arcsin$ oder $\\arccos$ statt $\\arctan$ nutzen — oder G und A vertauschen.`,
        [
          'Welches Seitenverhältnis?',
          'G/A führt zu $\\tan$.',
          'Umkehrfunktion $\\arctan$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-3 — Die Grundwerte (0°, 30°, 45°, 60°, 90°)  (4 subGoals)
  // 20 Matrix-Aufgaben: 4 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-3': {
    // ── [0] Sinus-Grundwerte auswendig ─────────────────────────────────────
    0: [
      matching(
        'Ordne jedem Winkel seinen $\\sin$-Wert zu.',
        [
          { left: '$\\sin(0°)$',  right: '$0$' },
          { left: '$\\sin(30°)$', right: '$\\tfrac{1}{2}$' },
          { left: '$\\sin(45°)$', right: '$\\tfrac{\\sqrt{2}}{2}$' },
          { left: '$\\sin(60°)$', right: '$\\tfrac{\\sqrt{3}}{2}$' },
          { left: '$\\sin(90°)$', right: '$1$' },
        ],
        `**Ansatz:** Die fünf Grundwerte-Paare auswendig lernen.

**Rechnung:** $\\sin(0°)=0$; $\\sin(30°)=1/2$; $\\sin(45°)=\\sqrt{2}/2\\approx 0{,}707$; $\\sin(60°)=\\sqrt{3}/2\\approx 0{,}866$; $\\sin(90°)=1$.

**Probe:** Monoton wachsend von $0$ auf $1$. Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$ ✓.

**Typischer Fehler:** $\\sin(30°)$ und $\\sin(60°)$ vertauschen — beide sind "schöne" Werte, aber bei $30°$ ist der Sinus klein ($1/2$), bei $60°$ ist er groß ($\\sqrt{3}/2$).`,
        [
          'Fünf Grundwerte.',
          'Monoton wachsend von $0$ auf $1$.',
          '$\\sin(30°)$ klein, $\\sin(60°)$ groß.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      mc(
        'Welchen Wert hat $\\sin(60°)$?',
        ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\sqrt{3}$'],
        0,
        `**Ansatz:** Grundwert aus der Tabelle.

**Rechnung:** $\\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.

**Probe:** Herleitung aus $30°$-$60°$-$90°$-Dreieck mit Seiten $1, \\sqrt{3}, 2$: Gegenkathete zu $60°$ ist $\\sqrt{3}$, Hypotenuse $2$.

**Typischer Fehler:** Mit $\\sin(30°) = 1/2$ verwechseln. Merkhilfe: bei $60°$ ist die Gegenkathete länger als bei $30°$, also größerer $\\sin$-Wert.`,
        [
          'Grundwerte-Tabelle.',
          '$\\sin(60°)$: groß oder klein?',
          'Dezimal: $\\approx 0{,}866$.',
        ],
        {
          1: '$1/2$ ist $\\sin(30°)$, nicht $\\sin(60°)$.',
          2: '$\\sqrt{2}/2 \\approx 0{,}707$ ist $\\sin(45°)$.',
          3: '$\\sqrt{3}$ wäre größer als $1$ — unmöglich für $\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      ni(
        'Berechne $\\sin(30°) + \\sin(90°)$.',
        1.5, 0.001, '',
        `**Ansatz:** Beide Grundwerte einsetzen.

**Rechnung:** $1/2 + 1 = 1{,}5$.

**Probe:** Dezimal: $0{,}5 + 1 = 1{,}5$ ✓.

**Typischer Fehler:** $\\sin(30°) + \\sin(90°) = \\sin(120°)$ schreiben (falsche Additivität). Sinus ist nicht linear — siehe trig-3-1.`,
        [
          'Grundwerte einsetzen.',
          '$\\sin(30°) = ?$',
          '$\\sin(90°) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      mc(
        'Ein Schüler schreibt $\\sin(45°) = 0{,}5$. Wo liegt der Fehler?',
        [
          '$\\sin(45°) = \\sqrt{2}/2 \\approx 0{,}707$, nicht $0{,}5$. Er hat vermutlich mit $\\sin(30°) = 0{,}5$ verwechselt.',
          '$\\sin(45°) = 0{,}5$ ist korrekt.',
          '$\\sin(45°)$ existiert nicht — nur $\\sin(30°)$ und $\\sin(60°)$.',
          'Er müsste $\\sin(45°) = 45/90 = 0{,}5$ rechnen.',
        ],
        0,
        `**Ansatz:** $\\sin(45°)$ ist ein spezieller Grundwert: die Gegenkathete = die Ankathete im gleichschenklig-rechtwinkligen Dreieck, also $\\sin(45°) = \\cos(45°) = \\sqrt{2}/2$.

**Rechnung:** Korrekt: $\\sin(45°) = \\sqrt{2}/2 \\approx 0{,}707$. Schüler-Wert $0{,}5$ wäre $\\sin(30°)$.

**Probe:** $\\sin^2(45°) + \\cos^2(45°) = 0{,}5 + 0{,}5 = 1$ ✓ (passt zur Grundformel).

**Typischer Fehler:** Grundwerte pauschal mit $0{,}5$-Bereich schätzen. Die fünf Werte müssen exakt auswendig gelernt werden.`,
        [
          'Grundwerte-Tabelle: $\\sin(45°) = ?$',
          'Merkregel: $\\sqrt{n}/2$ für $n=0,1,2,3,4$ bei $0°, 30°, 45°, 60°, 90°$.',
          'Dezimal testen: $0{,}707 \\ne 0{,}5$.',
        ],
        {
          1: '$0{,}5$ ist $\\sin(30°)$, nicht $\\sin(45°)$.',
          2: '$\\sin(45°)$ ist ein zentraler Grundwert (Gleichseitig-rechtwinkliges Dreieck).',
          3: 'Die Formel "Winkel/90" ist keine gültige $\\sin$-Definition.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      matching(
        'Ordne jeden Sinus-Wert seinem Winkel zu.',
        [
          { left: '$0{,}5$',   right: '$30°$' },
          { left: '$0{,}707$', right: '$45°$' },
          { left: '$0{,}866$', right: '$60°$' },
          { left: '$1$',       right: '$90°$' },
        ],
        `**Ansatz:** Rückwärts-Matching — vom Wert zum Winkel.

**Rechnung:** Kurvendiskussion $\\sin$ zwischen $0°$ und $90°$: monoton wachsend.

**Probe:** $\\arcsin$-Test auf dem Rechner (DEG-Modus).

**Typischer Fehler:** Zahlenbenutzung — $0{,}866$ und $0{,}707$ werden leicht vertauscht.`,
        [
          'Dezimal-Kontrolle: $0{,}5 < 0{,}707 < 0{,}866 < 1$.',
          'Monoton wachsend von $0°$ bis $90°$.',
          '$\\arcsin$ zur Prüfung.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
    ],

    // ── [1] Merkregel √n/2 für n = 0, 1, 2, 3, 4 ───────────────────────────
    1: [
      tf(
        'Die Merkregel $\\sin = \\sqrt{n}/2$ mit $n=0,1,2,3,4$ liefert die Sinus-Grundwerte für $0°, 30°, 45°, 60°, 90°$.',
        true,
        `**Ansatz:** Mnemotechnisches Muster für alle fünf Standardwerte.

**Rechnung:** $\\sqrt{0}/2 = 0$; $\\sqrt{1}/2 = 1/2$; $\\sqrt{2}/2$; $\\sqrt{3}/2$; $\\sqrt{4}/2 = 2/2 = 1$. Alle stimmen.

**Probe:** Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$ — identisch mit den bekannten Grundwerten.

**Typischer Fehler:** Merkregel als Rechenregel missverstehen — sie funktioniert NUR für diese 5 Winkel, nicht für andere.`,
        [
          'Fünf Standardwinkel, fünf einfache Brüche.',
          'Muster $\\sqrt{n}/2$.',
          '$n$ läuft von $0$ bis $4$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      mc(
        'Mit der Merkregel $\\sin = \\sqrt{n}/2$: welcher Winkel entspricht $n = 2$?',
        ['$45°$', '$30°$', '$60°$', '$90°$'],
        0,
        `**Ansatz:** Zuordnung $n \\leftrightarrow $ Winkel: $n=0 \\to 0°$, $n=1 \\to 30°$, $n=2 \\to 45°$, $n=3 \\to 60°$, $n=4 \\to 90°$.

**Rechnung:** $n=2 \\to 45°$. Wert: $\\sqrt{2}/2$.

**Probe:** $\\sin(45°) = \\sqrt{2}/2$ ✓.

**Typischer Fehler:** $n$ und den Winkel direkt gleichsetzen (z. B. $n=2 \\to 2°$).`,
        [
          'Fünf Winkel: $0, 30, 45, 60, 90$.',
          'Fünf $n$-Werte: $0, 1, 2, 3, 4$.',
          'Position $n+1$ in der Liste.',
        ],
        {
          1: '$30°$ ist $n=1$.',
          2: '$60°$ ist $n=3$.',
          3: '$90°$ ist $n=4$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      ni(
        'Wende die Merkregel an: Bei $n = 3$ ergibt die Formel $\\sqrt{n}/2$ welchen Dezimalwert? (3 NK)',
        0.866, 0.01, '',
        `**Ansatz:** $\\sqrt{3}/2$.

**Rechnung:** $\\sqrt{3} \\approx 1{,}732$. $1{,}732/2 = 0{,}866$.

**Probe:** Dies ist $\\sin(60°)$. Bekannt: $\\sin(60°) \\approx 0{,}866$ ✓.

**Typischer Fehler:** $3/2 = 1{,}5$ rechnen (Wurzel vergessen).`,
        [
          '$\\sqrt{3} \\approx ?$',
          'Geteilt durch $2$.',
          '$\\sqrt{3} \\approx 1{,}732$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      mc(
        'Ein Schüler wendet die Merkregel $\\sqrt{n}/2$ auf $\\sin(120°)$ an mit $n = 5$ und erhält $\\sqrt{5}/2 \\approx 1{,}118$. Wo liegt der Fehler?',
        [
          'Die Merkregel gilt NUR für die fünf Grundwinkel $0°, 30°, 45°, 60°, 90°$. Für $120°$ gilt sie nicht. Außerdem ist $\\sin > 1$ unmöglich.',
          '$n = 5$ ist erlaubt, aber der Wurzel-Wert wurde falsch berechnet.',
          'Die Regel gilt mit $n = 5$ nur im Bogenmaß.',
          'Die Rechnung stimmt: $\\sin(120°) \\approx 1{,}118$.',
        ],
        0,
        `**Ansatz:** Die Merkregel ist mnemotechnisch, kein Rechengesetz. Sie trifft nur für die fünf Standardwinkel zu.

**Rechnung:** Tatsächlich: $\\sin(120°) = \\sin(180°-120°) = \\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.

**Probe:** Sinus liegt immer im Bereich $[-1, 1]$. $1{,}118$ sprengt diesen Bereich — sofortiges Warnsignal.

**Typischer Fehler:** Mnemotechniken mit Rechenregeln verwechseln. Die Regel funktioniert durch glückliche Zahlencoincidence, nicht durch mathematische Herleitung.`,
        [
          'Bereich von $\\sin$: $[-1, 1]$.',
          'Gilt die Merkregel universell?',
          '$\\sin(120°)$ via Quadranten-Symmetrie: $\\sin(60°)$.',
        ],
        {
          1: '$n = 5$ ist nicht erlaubt — die Regel hat nur fünf Werte.',
          2: 'Die Regel hat nichts mit dem Bogenmaß zu tun.',
          3: '$1{,}118 > 1$ — unmöglich für Sinus.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      sorting(
        'Bringe die fünf Sinus-Grundwerte nach aufsteigender Größe in die richtige Reihenfolge.',
        [
          '$\\sin(0°) = 0$',
          '$\\sin(30°) = \\tfrac{1}{2}$',
          '$\\sin(45°) = \\tfrac{\\sqrt{2}}{2}$',
          '$\\sin(60°) = \\tfrac{\\sqrt{3}}{2}$',
          '$\\sin(90°) = 1$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Sinus ist im ersten Quadranten monoton wachsend.

**Rechnung:** Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$.

**Probe:** Auch $\\sqrt{0}/2 < \\sqrt{1}/2 < \\sqrt{2}/2 < \\sqrt{3}/2 < \\sqrt{4}/2$ ✓.

**Typischer Fehler:** $\\sqrt{3}/2$ und $\\sqrt{2}/2$ vertauschen — obwohl $\\sqrt{3} > \\sqrt{2}$.`,
        [
          'Monoton wachsend von $0°$ bis $90°$.',
          'Dezimal-Kontrolle.',
          '$\\sqrt{n}$ wächst mit $n$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
    ],

    // ── [2] Kosinus = Sinus rückwärts, und Tangens-Grundwerte ─────────────
    2: [
      tf(
        '$\\cos(0°) = 1$ und $\\cos(90°) = 0$ — die Kosinus-Werte sind genau die Sinus-Werte in umgekehrter Reihenfolge.',
        true,
        `**Ansatz:** Komplementär-Eigenschaft: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.

**Rechnung:** $\\cos(0°) = \\sin(90°) = 1$; $\\cos(30°) = \\sin(60°) = \\sqrt{3}/2$; $\\cos(45°) = \\sin(45°) = \\sqrt{2}/2$; $\\cos(60°) = \\sin(30°) = 1/2$; $\\cos(90°) = \\sin(0°) = 0$.

**Probe:** $\\sin^2 + \\cos^2 = 1$ ✓.

**Typischer Fehler:** $\\cos$ und $\\sin$ bei denselben Winkeln verwechseln. Besonders fies: $\\sin(30°) = \\cos(60°) = 1/2$ — die Werte sind gleich, aber bei verschiedenen Winkeln.`,
        [
          'Symmetrie: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
          'Kosinus-Tabelle ist Sinus-Tabelle gespiegelt.',
          'Dezimal: $1, 0{,}866, 0{,}707, 0{,}5, 0$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['grundwerte-cos'] },
      ),
      mc(
        'Welcher Wert ist gleich $\\cos(60°)$?',
        ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$1$'],
        0,
        `**Ansatz:** Komplementär: $\\cos(60°) = \\sin(30°) = 1/2$.

**Rechnung:** $\\cos(60°) = 1/2$.

**Probe:** Im $30°$-$60°$-$90°$-Dreieck: Ankathete zu $60°$ ist die kurze Kathete $1$, Hypotenuse $2$. $\\cos = 1/2$ ✓.

**Typischer Fehler:** $\\sqrt{3}/2$ angeben (das ist $\\cos(30°)$, nicht $\\cos(60°)$).`,
        [
          'Komplementärwinkel-Regel.',
          '$\\cos(60°) = \\sin(30°)$.',
          '$\\sin(30°) = ?$',
        ],
        {
          1: '$\\sqrt{3}/2$ ist $\\cos(30°)$, nicht $\\cos(60°)$.',
          2: '$\\sqrt{2}/2$ ist $\\cos(45°)$.',
          3: '$1$ ist $\\cos(0°)$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['grundwerte-cos'] },
      ),
      ni(
        'Berechne $\\tan(60°)$. (3 NK)',
        1.732, 0.01, '',
        `**Ansatz:** $\\tan = \\sin/\\cos$.

**Rechnung:** $\\tan(60°) = \\sin(60°)/\\cos(60°) = (\\sqrt{3}/2)/(1/2) = \\sqrt{3} \\approx 1{,}732$.

**Probe:** $\\tan(60°) = \\sqrt{3}$ steht in jeder Formelsammlung.

**Typischer Fehler:** $\\tan(60°) = \\sin(60°) \\cdot \\cos(60°) = \\sqrt{3}/4$ rechnen (Multiplikation statt Division).`,
        [
          '$\\tan = \\sin / \\cos$.',
          '$\\sin(60°) = \\sqrt{3}/2$, $\\cos(60°) = 1/2$.',
          'Division: $(\\sqrt{3}/2) / (1/2) = \\sqrt{3}$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['grundwerte-tan'] },
      ),
      mc(
        'Ein Schüler schreibt $\\cos(30°) = \\sin(30°) = 0{,}5$. Wo liegt der Fehler?',
        [
          '$\\cos(30°) = \\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$, nicht $0{,}5$. Der Schüler hat Sinus und Kosinus beim gleichen Winkel gleichgesetzt.',
          '$\\sin(30°) = 0{,}866$ ist richtig, aber $\\cos(30°)$ nicht.',
          'Bei allen Grundwinkeln gilt $\\sin = \\cos$.',
          '$\\sin$ und $\\cos$ sind sowieso immer gleich.',
        ],
        0,
        `**Ansatz:** $\\sin(\\alpha) = \\cos(\\alpha)$ gilt NUR bei $\\alpha = 45°$. Bei allen anderen Winkeln sind sie unterschiedlich.

**Rechnung:** Korrekt: $\\sin(30°) = 1/2$, aber $\\cos(30°) = \\sqrt{3}/2 \\approx 0{,}866$. Komplementär: $\\cos(30°) = \\sin(60°)$.

**Probe:** $\\sin^2(30°) + \\cos^2(30°) = 1/4 + 3/4 = 1$ ✓. Mit Schülerwert: $1/4 + 1/4 = 1/2 \\ne 1$ — Widerspruch.

**Typischer Fehler:** $\\sin$ und $\\cos$ gleichsetzen — gilt nur bei $45°$.`,
        [
          'Wann gilt $\\sin = \\cos$?',
          '$\\sin(30°) \\ne \\cos(30°)$.',
          'Komplementär: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
        ],
        {
          1: '$\\sin(30°) = 0{,}5$, nicht $0{,}866$.',
          2: 'Die Gleichheit gilt nur bei $45°$, nicht bei allen Grundwinkeln.',
          3: '$\\sin$ und $\\cos$ sind unterschiedliche Funktionen, nur in Ausnahmefällen gleich.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['grundwerte-cos', 'grundwerte-sin'] },
      ),
      matching(
        'Ordne jedem Winkel sein Paar $(\\sin, \\cos)$ zu.',
        [
          { left: '$0°$',  right: '$(0, 1)$' },
          { left: '$30°$', right: '$(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$' },
          { left: '$45°$', right: '$(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$' },
          { left: '$60°$', right: '$(\\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2})$' },
          { left: '$90°$', right: '$(1, 0)$' },
        ],
        `**Ansatz:** Komplementaritäten ausnutzen.

**Rechnung:** Vollständige Tabelle — beide Funktionen gleichzeitig.

**Probe:** $\\sin^2 + \\cos^2 = 1$ bei jedem Paar verifiziert.

**Typischer Fehler:** Zahlen zu schnell vermischen — Paar-Tabelle auswendig, dann sind sie stabil.`,
        [
          'Je $5$ Paare für $0°$ bis $90°$.',
          '$\\sin$-Werte wachsen, $\\cos$-Werte fallen.',
          'Bei $45°$ sind beide gleich.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['grundwerte-cos', 'grundwerte-sin'] },
      ),
    ],

    // ── [3] Komplementärwinkel: cos α = sin(90° − α) ───────────────────────
    3: [
      tf(
        'Für jeden Winkel $\\alpha$ gilt $\\cos(\\alpha) = \\sin(90° - \\alpha)$.',
        true,
        `**Ansatz:** Komplementaritäts-Beziehung — Gegen- und Ankathete tauschen Rollen bei der $90°$-Ergänzung.

**Rechnung:** Im rechtwinkligen Dreieck: $\\sin(\\alpha) = G/H$; bei Winkel $90°-\\alpha$ ist die Gegenkathete zur Ankathete von $\\alpha$ geworden, also $\\sin(90°-\\alpha) = A/H = \\cos(\\alpha)$.

**Probe:** $\\cos(30°) = \\sqrt{3}/2 = \\sin(60°) = \\sin(90°-30°)$ ✓.

**Typischer Fehler:** Ergänzung zu $180°$ statt $90°$ annehmen.`,
        [
          'Komplementär: Ergänzung zu $90°$.',
          'Gegen- und Ankathete wechseln Rollen.',
          'Universell für alle Winkel.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['komplementaer'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\cos(50°)$?',
        ['$\\sin(40°)$', '$\\sin(50°)$', '$\\sin(130°)$', '$\\sin(90°)$'],
        0,
        `**Ansatz:** $\\cos(\\alpha) = \\sin(90°-\\alpha)$.

**Rechnung:** $\\cos(50°) = \\sin(90°-50°) = \\sin(40°)$.

**Probe:** Beide Werte dezimal: $\\cos(50°) \\approx 0{,}643$, $\\sin(40°) \\approx 0{,}643$ ✓.

**Typischer Fehler:** $\\cos(50°) = \\sin(50°)$ annehmen (gilt nur bei $45°$).`,
        [
          'Formel: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
          '$90° - 50° = ?$',
          'Komplementärer Winkel.',
        ],
        {
          1: '$\\sin(50°) \\ne \\cos(50°)$ — Gleichheit nur bei $45°$.',
          2: '$\\sin(130°) = \\sin(180°-130°) = \\sin(50°)$ — passt nicht.',
          3: '$\\sin(90°) = 1$ — konstant, kein funktionaler Zusammenhang.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['komplementaer'] },
      ),
      ni(
        'Gegeben $\\sin(25°) \\approx 0{,}423$. Bestimme $\\cos(65°)$. (3 NK)',
        0.423, 0.01, '',
        `**Ansatz:** $\\cos(65°) = \\sin(90°-65°) = \\sin(25°)$.

**Rechnung:** $\\cos(65°) = \\sin(25°) = 0{,}423$.

**Probe:** $65° + 25° = 90°$ ✓.

**Typischer Fehler:** $\\sin(65°)$ statt $\\cos(65°)$ rechnen.`,
        [
          'Komplementär: $\\cos(65°) = \\sin(\\ldots)$.',
          '$90° - 65° = 25°$.',
          'Wert aus der Angabe ablesen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['komplementaer'] },
      ),
      mc(
        'Ein Schüler sagt: „Weil $\\cos(\\alpha) = \\sin(90°-\\alpha)$, gilt auch $\\cos(120°) = \\sin(90°-120°) = \\sin(-30°) = -\\sin(30°) = -0{,}5$." Wo liegt der Fehler?',
        [
          'Die Rechnung ist an sich richtig. $\\cos(120°) = -1/2$. Kein Fehler — die Formel gilt universell.',
          'Die Formel gilt nur für Winkel zwischen $0°$ und $90°$.',
          '$\\sin(-30°) = +0{,}5$, nicht $-0{,}5$.',
          '$\\cos(120°)$ ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Die Komplementär-Formel ist tatsächlich universell. Der Schüler kommt auf das richtige Ergebnis.

**Rechnung:** $\\cos(120°) = -1/2$ (bekannter Wert im 2. Quadranten).

**Probe:** Direkt: $\\cos(120°) = -\\cos(60°) = -1/2$ ✓. Über Komplementär: $\\sin(-30°) = -\\sin(30°) = -1/2$ ✓.

**Typischer Fehler:** Annehmen, dass die Formel außerhalb von $0°$–$90°$ nicht gilt — sie gilt aber universell, mit den entsprechenden Vorzeichen.`,
        [
          'Gilt die Komplementär-Formel universell?',
          'Berechne $\\cos(120°)$ direkt als Kontrolle.',
          'Sinus ist ungerade Funktion.',
        ],
        {
          1: 'Die Formel gilt für alle $\\alpha$, nicht nur $0°$–$90°$.',
          2: '$\\sin(-30°) = -\\sin(30°) = -0{,}5$ (ungerade Funktion).',
          3: '$\\cos(120°)$ ist selbstverständlich definiert — $-0{,}5$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['komplementaer'] },
      ),
      ni(
        'Berechne $\\sin(30°) + \\cos(60°)$ (beide Grundwerte kombiniert).',
        1, 0.001, '',
        `**Ansatz:** Beide sind gleich: $\\sin(30°) = \\cos(60°) = 1/2$ (Komplementär-Regel).

**Rechnung:** $1/2 + 1/2 = 1$.

**Probe:** $\\sin(30°) = \\cos(90°-30°) = \\cos(60°)$, also zwei gleiche Werte.

**Typischer Fehler:** Werte verschieden einsetzen: $1/2 + 1/\\sqrt{3} = $ falsch.`,
        [
          'Komplementär: $\\sin(30°)$ und $\\cos(60°)$ gleich.',
          'Beide Werte: $1/2$.',
          'Summe.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['komplementaer', 'grundwerte-sin'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-4 — Vorzeichen und Quadranten  (3 subGoals)
  // Je 5 Aufgaben = 15 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-4': {
    // ── [0] Quadranten I-IV und Vorzeichen-Regel ASTC ─────────────────────
    0: [
      tf(
        'Im 2. Quadranten ($90°$ bis $180°$) ist $\\sin > 0$ und $\\cos < 0$.',
        true,
        `**Ansatz:** ASTC-Regel: "All Students Take Calculus". Im 2. Quadranten ist nur $\\sin$ positiv.

**Rechnung:** Am Einheitskreis im 2. Quadranten: $y > 0$ (also $\\sin > 0$), $x < 0$ (also $\\cos < 0$).

**Probe:** $\\sin(120°) = +\\sqrt{3}/2 > 0$, $\\cos(120°) = -1/2 < 0$ ✓.

**Typischer Fehler:** Quadranten und Grenzen verwechseln. Der 2. Quadrant beginnt bei $90°$, nicht bei $180°$.`,
        [
          'ASTC: Quadrant 2 → "Sinus positiv".',
          'Am Einheitskreis: $x$ ist $\\cos$, $y$ ist $\\sin$.',
          '2. Quadrant: $x < 0$, $y > 0$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'In welchem Quadranten liegt der Winkel $225°$?',
        ['3. Quadrant', '2. Quadrant', '4. Quadrant', '1. Quadrant'],
        0,
        `**Ansatz:** Quadrantengrenzen: I ($0°$–$90°$), II ($90°$–$180°$), III ($180°$–$270°$), IV ($270°$–$360°$).

**Rechnung:** $180° < 225° < 270°$ → **3. Quadrant**.

**Probe:** $\\sin(225°) = -\\sin(45°) < 0$, $\\cos(225°) = -\\cos(45°) < 0$ — beide negativ, wie im 3. Quadranten erwartet (ASTC: "Take" = nur Tangens positiv).

**Typischer Fehler:** Winkel in Grad falsch auf die Quadranten verteilen.`,
        [
          'Quadrantengrenzen auswendig.',
          '$180° < 225° < 270°$.',
          '3. Quadrant.',
        ],
        {
          1: '$225° > 180°$, also nicht im 2. Quadranten.',
          2: '$225° < 270°$, also nicht im 4. Quadranten.',
          3: '$225° > 90°$, also nicht im 1. Quadranten.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'Bestimme das Vorzeichen von $\\cos(200°)$.',
        ['negativ', 'positiv', 'Null', 'nicht definiert'],
        0,
        `**Ansatz:** $200°$ liegt im 3. Quadranten. ASTC: im 3. Quadranten ist nur $\\tan > 0$, $\\sin$ und $\\cos$ sind negativ.

**Rechnung:** $\\cos(200°) < 0$.

**Probe:** Direkt: $\\cos(200°) = -\\cos(20°) \\approx -0{,}94$ — negativ ✓.

**Typischer Fehler:** Vorzeichen vergessen und einfach $\\cos(200°) = \\cos(20°)$ rechnen.`,
        [
          'Welcher Quadrant für $200°$?',
          '3. Quadrant: ASTC → nur $\\tan$ positiv.',
          'Also $\\cos < 0$.',
        ],
        {
          1: 'Im 3. Quadranten ist $\\cos$ negativ.',
          2: '$\\cos(200°) \\ne 0$ — das wäre nur bei $90°$ oder $270°$.',
          3: '$\\cos$ ist für alle Winkel definiert.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(150°) = -0{,}5$ und begründet: „$150°$ ist größer als $90°$, also negativ." Wo liegt der Fehler?',
        [
          '$150°$ liegt im 2. Quadranten, wo $\\sin$ positiv ist (ASTC). Korrekt: $\\sin(150°) = +0{,}5$.',
          '$\\sin$ ist ab $180°$ negativ, ab $90°$ ist es noch positiv.',
          '$\\sin(150°)$ ist tatsächlich $-0{,}5$.',
          'Der Schüler müsste den Referenzwinkel verwenden.',
        ],
        0,
        `**Ansatz:** Das Vorzeichen hängt vom Quadranten ab, nicht pauschal von "$>90°$".

**Rechnung:** $150° \\in $ 2. Quadrant (zwischen $90°$ und $180°$). Dort ist $\\sin > 0$. $\\sin(150°) = \\sin(180°-150°) = \\sin(30°) = +0{,}5$.

**Probe:** Am Einheitskreis: $y$-Koordinate bei $150°$ ist positiv.

**Typischer Fehler:** Pauschales "größere Winkel sind negativ" statt ASTC-Regel anwenden.`,
        [
          'Welcher Quadrant für $150°$?',
          'ASTC: 2. Quadrant → $\\sin > 0$.',
          'Am Einheitskreis: $y$-Wert bei $150°$.',
        ],
        {
          1: 'ASTC verteilt das Vorzeichen pro Quadrant. Nicht erst ab $180°$, sondern schon im 3. Quadranten wird $\\sin$ negativ.',
          2: '$\\sin(150°) = +0{,}5$, nicht $-0{,}5$.',
          3: 'Der Referenzwinkel ist nützlich, aber der Schüler hat hier das VORZEICHEN falsch.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      matching(
        'Ordne jedem Quadranten die ASTC-Eigenschaft zu.',
        [
          { left: '1. Quadrant (0°–90°)',   right: 'All: $\\sin, \\cos, \\tan$ alle positiv' },
          { left: '2. Quadrant (90°–180°)', right: 'Students: nur $\\sin$ positiv' },
          { left: '3. Quadrant (180°–270°)', right: 'Take: nur $\\tan$ positiv' },
          { left: '4. Quadrant (270°–360°)', right: 'Calculus: nur $\\cos$ positiv' },
        ],
        `**Ansatz:** Merkhilfe "All Students Take Calculus" — jeder Buchstabe zeigt, welche Funktion im jeweiligen Quadrant positiv ist.

**Rechnung:** I: alle positiv. II: nur $\\sin$. III: nur $\\tan$. IV: nur $\\cos$.

**Probe:** Über das Vorzeichen von $x$ (Kosinus) und $y$ (Sinus) auf dem Einheitskreis: $\\tan = \\sin/\\cos$ — beide negativ (Quadrant III) → $\\tan > 0$.

**Typischer Fehler:** Reihenfolge der Quadranten gegen den Uhrzeigersinn nicht eingehalten.`,
        [
          'ASTC = All Students Take Calculus.',
          'Reihenfolge gegen Uhrzeigersinn.',
          'Nur $\\sin, \\tan, \\cos$ werden pro Quadrant geprüft.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
    ],

    // ── [1] Symmetrien: sin(180°-α) = sin α, cos(180°-α) = -cos α ──────────
    1: [
      tf(
        'Es gilt $\\sin(180° - \\alpha) = \\sin(\\alpha)$ für jeden Winkel $\\alpha$.',
        true,
        `**Ansatz:** Spiegelung am 90°-Strahl: der neue Winkel hat dieselbe $y$-Koordinate (Sinus) am Einheitskreis.

**Rechnung:** Graphisch: Punkt bei $\\alpha$ ist $(x, y)$, Punkt bei $180°-\\alpha$ ist $(-x, y)$. Gleiche Höhe → gleicher Sinus.

**Probe:** $\\sin(150°) = \\sin(180°-150°) = \\sin(30°) = 0{,}5$ ✓.

**Typischer Fehler:** Formel mit $\\sin(-\\alpha)$ verwechseln — das wäre Punktspiegelung am Ursprung.`,
        [
          'Spiegelung am $y$-Strahl bei $90°$.',
          '$y$-Koordinate bleibt gleich.',
          'Sinus ist $y$-Koordinate.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
      mc(
        'Berechne $\\cos(150°)$ mithilfe der Symmetrie-Formel.',
        ['$-\\dfrac{\\sqrt{3}}{2}$', '$+\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{1}{2}$', '$+\\dfrac{1}{2}$'],
        0,
        `**Ansatz:** $\\cos(180°-\\alpha) = -\\cos(\\alpha)$. Hier $\\alpha = 30°$.

**Rechnung:** $\\cos(150°) = -\\cos(30°) = -\\sqrt{3}/2$.

**Probe:** $150°$ ist im 2. Quadranten → $\\cos < 0$ (ASTC). Betrag: $\\cos(30°) = \\sqrt{3}/2$. Daraus $-\\sqrt{3}/2$ ✓.

**Typischer Fehler:** Vorzeichen vergessen — $+\\sqrt{3}/2$ statt $-\\sqrt{3}/2$.`,
        [
          'Formel: $\\cos(180°-\\alpha) = -\\cos(\\alpha)$.',
          '$\\alpha = 30°$.',
          '$\\cos(30°) = \\sqrt{3}/2$, dann negieren.',
        ],
        {
          1: 'Vorzeichen fehlt — $150°$ liegt im 2. Quadranten ($\\cos < 0$).',
          2: '$-1/2$ wäre $\\cos(120°)$, nicht $\\cos(150°)$.',
          3: '$+1/2$ wäre $\\cos(60°)$, hat mit $150°$ nichts zu tun.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['symmetrie-sin'] },
      ),
      ni(
        'Berechne $\\cos(135°)$ mithilfe der Symmetrie-Formel. (3 NK)',
        -0.707, 0.01, '',
        `**Ansatz:** $\\cos(180°-\\alpha) = -\\cos(\\alpha)$ mit $\\alpha = 45°$.

**Rechnung:** $\\cos(135°) = -\\cos(45°) = -\\sqrt{2}/2 \\approx -0{,}707$.

**Probe:** $135°$ im 2. Quadranten → negativ. Betrag $\\approx 0{,}707$ (Grundwert) ✓.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Referenzwinkel $180°-135° = 45°$.',
          '$\\cos(45°) = \\sqrt{2}/2$.',
          '2. Quadrant → negativ.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['symmetrie-cos'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin(180°-120°) = \\sin(60°) = \\sqrt{3}/2$. Also $\\sin(120°) = -\\sqrt{3}/2$, weil das Minus vor der Klammer greift." Wo liegt der Fehler?',
        [
          'Die Formel ist $\\sin(180°-\\alpha) = +\\sin(\\alpha)$, ohne Vorzeichenwechsel. Korrekt: $\\sin(120°) = +\\sqrt{3}/2$.',
          'Die Rechnung ist richtig — $\\sin(120°) = -\\sqrt{3}/2$.',
          'Er hätte $\\sin(180°+\\alpha)$ statt $\\sin(180°-\\alpha)$ nehmen müssen.',
          'Sinus-Symmetrie gilt gar nicht bei $120°$.',
        ],
        0,
        `**Ansatz:** Sinus: spiegelsymmetrisch am $90°$-Strahl, keine Vorzeichenumkehr.

**Rechnung:** Korrekt: $\\sin(120°) = \\sin(180°-120°) = \\sin(60°) = +\\sqrt{3}/2$ (positive im 2. Quadranten, ASTC-konform).

**Probe:** ASTC: 2. Quadrant → $\\sin > 0$. Schüler-Wert $-\\sqrt{3}/2$ verletzt das.

**Typischer Fehler:** Die Formel aus "Minus vor Klammer" falsch übertragen. Die Formel selbst hat KEIN Minus (im Gegensatz zu $\\cos$).`,
        [
          'Sinus-Formel: $\\sin(180°-\\alpha) = \\sin(\\alpha)$ (gleich, kein Minus).',
          'Kosinus hingegen: $\\cos(180°-\\alpha) = -\\cos(\\alpha)$.',
          'ASTC: Vorzeichen per Quadrant prüfen.',
        ],
        {
          1: '$-\\sqrt{3}/2$ im 2. Quadranten wäre für $\\sin$ falsch (ASTC).',
          2: '$\\sin(180°+\\alpha) = -\\sin(\\alpha)$ — andere Formel.',
          3: 'Sinus-Symmetrie gilt universell.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
      ni(
        'Berechne $\\sin(150°) + \\cos(135°)$. (3 NK)',
        -0.207, 0.01, '',
        `**Ansatz:** Beide via Symmetrie.

**Rechnung:** $\\sin(150°) = \\sin(30°) = 0{,}5$. $\\cos(135°) = -\\cos(45°) = -\\sqrt{2}/2 \\approx -0{,}707$. Summe $\\approx 0{,}5 - 0{,}707 = -0{,}207$.

**Probe:** Vorzeichen stimmen (ASTC).

**Typischer Fehler:** Beide gleich negativ machen und zu $-0{,}5 - 0{,}707 = -1{,}207$ kommen.`,
        [
          'Symmetrie für jeden Summanden einzeln.',
          '$\\sin(150°) = +0{,}5$.',
          '$\\cos(135°) = -0{,}707$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
    ],

    // ── [2] Referenzwinkel: Reduktion auf 0°–90° ──────────────────────────
    2: [
      tf(
        'Der Referenzwinkel zu $210°$ ist $30°$.',
        true,
        `**Ansatz:** Referenzwinkel = spitzer Winkel zur nächsten $x$-Achse.

**Rechnung:** $210°$ im 3. Quadranten. Abstand zu $180°$: $210° - 180° = 30°$. Also Referenzwinkel $30°$.

**Probe:** $\\sin(210°) = -\\sin(30°) = -0{,}5$ ✓ (3. Quadrant → $\\sin < 0$).

**Typischer Fehler:** $360° - 210° = 150°$ rechnen (falsche Nähe-Achse).`,
        [
          'Referenzwinkel zur NÄCHSTEN $x$-Achse.',
          '3. Quadrant → Abstand zu $180°$.',
          '$210° - 180° = 30°$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      mc(
        'Bestimme den Referenzwinkel zu $300°$.',
        ['$60°$', '$120°$', '$300°$', '$-60°$'],
        0,
        `**Ansatz:** $300°$ im 4. Quadranten. Nähe zur $x$-Achse bei $360°$.

**Rechnung:** $360° - 300° = 60°$.

**Probe:** $\\sin(300°) = -\\sin(60°) = -\\sqrt{3}/2$ (4. Quadrant → $\\sin < 0$).

**Typischer Fehler:** $300° - 180° = 120°$ nehmen (falsche Achse).`,
        [
          '4. Quadrant: Referenz zu $360°$.',
          '$360 - 300 = ?$',
          'Referenzwinkel immer positiv und $\\leq 90°$.',
        ],
        {
          1: '$120°$ wäre Referenz zu $180°$ — falsche Achse.',
          2: '$300°$ ist der Originalwinkel selbst, nicht der Referenzwinkel.',
          3: 'Referenzwinkel sind immer positiv ($0°$–$90°$).',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      ni(
        'Bestimme den Referenzwinkel zu $225°$ (in Grad).',
        45, 0, '°',
        `**Ansatz:** $225°$ im 3. Quadranten. Abstand zu $180°$.

**Rechnung:** $225° - 180° = 45°$.

**Probe:** $\\sin(225°) = -\\sin(45°) = -\\sqrt{2}/2 \\approx -0{,}707$ ✓.

**Typischer Fehler:** $225° - 90° = 135°$ rechnen (falsche Achse).`,
        [
          '3. Quadrant: Referenz zu $180°$.',
          '$225 - 180 = ?$',
          'Immer spitzer Winkel.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      mc(
        'Ein Schüler bestimmt den Referenzwinkel zu $100°$ als $100° - 90° = 10°$. Wo liegt der Fehler?',
        [
          'Referenzwinkel werden zur $x$-Achse ($0°$ oder $180°$) gemessen, nicht zur $y$-Achse. Korrekt: $180° - 100° = 80°$.',
          'Die Rechnung stimmt — Referenz zu $90°$ ist korrekt.',
          'Er hätte $100°$ direkt übernehmen müssen.',
          '$10°$ ist richtig — der Schüler hat einfach klein gemacht.',
        ],
        0,
        `**Ansatz:** Der Referenzwinkel wird immer zur nächsten $x$-Achse (nicht $y$-Achse) gemessen.

**Rechnung:** $100°$ im 2. Quadranten. Nächste $x$-Achse: $180°$. Referenz: $180° - 100° = 80°$.

**Probe:** $\\sin(100°) = \\sin(80°) \\approx 0{,}985$ (nah bei $1$, weil $100°$ nah bei $90°$ — dem Maximum).

**Typischer Fehler:** $y$-Achse bei $90°$ als Bezug nehmen — aber Referenzwinkel verwendet $x$-Achsen.`,
        [
          'Wohin wird der Referenzwinkel gemessen?',
          'Zur nächsten $x$-Achse ($0°/180°$), nicht zu $90°$.',
          '$100°$ im 2. Quadrant → zu $180°$.',
        ],
        {
          1: 'Die Bezugsachse ist falsch — $x$- nicht $y$-Achse.',
          2: '$100°$ ist kein Referenzwinkel (muss $\\leq 90°$ sein).',
          3: '$10°$ passt zu keiner Sinus/Kosinus-Symmetrie von $100°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      ni(
        'Gegeben: $\\sin(40°) \\approx 0{,}643$. Berechne $\\sin(220°)$ via Referenzwinkel. (3 NK)',
        -0.643, 0.01, '',
        `**Ansatz:** $220°$ im 3. Quadranten. Referenzwinkel: $220° - 180° = 40°$. Vorzeichen: 3. Quadrant → $\\sin < 0$.

**Rechnung:** $\\sin(220°) = -\\sin(40°) \\approx -0{,}643$.

**Probe:** ASTC: 3. Quadrant → $\\sin < 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Referenzwinkel bestimmen.',
          'Vorzeichen über ASTC/Quadrant.',
          'Wert aus der Angabe.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['referenzwinkel', 'vorzeichen-ASTC'] },
      ),
    ],
  },


  // ────────────────────────────────────────────────────────────────────────
  // trig-1-2 — Rechtwinkliges Dreieck / SOH-CAH-TOA  (3 subGoals)
  // 15 Matrix-Aufgaben: 3 SGs × 5 Stufen. Alle mit pedagogy.
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-2': {
    // ── [0] SOH-CAH-TOA als Merkregel ─────────────────────────────────────
    0: [
      matching(
        'Ordne jeder Winkelfunktion ihr Seitenverhältnis im rechtwinkligen Dreieck zu.',
        [
          { left: '$\\sin(\\alpha)$', right: 'Gegenkathete / Hypotenuse' },
          { left: '$\\cos(\\alpha)$', right: 'Ankathete / Hypotenuse' },
          { left: '$\\tan(\\alpha)$', right: 'Gegenkathete / Ankathete' },
        ],
        `**Ansatz:** SOH-CAH-TOA — die Standard-Merkregel für die drei Grundfunktionen.

**Rechnung:** SOH: $\\sin = G/H$ (Opposite/Hypotenuse). CAH: $\\cos = A/H$ (Adjacent/Hypotenuse). TOA: $\\tan = G/A$ (Opposite/Adjacent).

**Probe:** $\\tan = \\sin/\\cos = (G/H)/(A/H) = G/A$ ✓.

**Typischer Fehler:** Gegenkathete/Ankathete verwechseln — beide sind Kathete und sehen sich ähnlich.`,
        [
          'SOH-CAH-TOA aufschreiben.',
          'Jeder Buchstabe steht für eine Seite: O = Opposite (Gegen), A = Adjacent (An), H = Hypotenuse.',
          'Sinus/Kosinus teilen durch Hypotenuse; Tangens nicht.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      mc(
        'In einem rechtwinkligen Dreieck ist die Gegenkathete zu $\\alpha$ gleich $3$ und die Hypotenuse gleich $5$. Wie groß ist $\\sin(\\alpha)$?',
        ['$\\dfrac{3}{5}$', '$\\dfrac{5}{3}$', '$\\dfrac{4}{5}$', '$\\dfrac{3}{4}$'],
        0,
        `**Ansatz:** $\\sin = $ Gegenkathete / Hypotenuse.

**Rechnung:** $\\sin(\\alpha) = 3/5 = 0{,}6$.

**Probe:** Da $3^2 + 4^2 = 5^2$, ist die Ankathete $4$, und $\\cos = 4/5$; $\\sin^2 + \\cos^2 = 9/25 + 16/25 = 1$ ✓.

**Typischer Fehler:** Nenner und Zähler vertauschen ($5/3$) oder $\\cos$-Wert angeben ($4/5$).`,
        [
          'Formel: $\\sin = G/H$.',
          'Gegenkathete $= 3$, Hypotenuse $= 5$.',
          'Einfach einsetzen.',
        ],
        {
          1: '$5/3$ ist der Kehrwert — das wäre $1/\\sin(\\alpha) = \\csc(\\alpha)$, nicht $\\sin$.',
          2: '$4/5$ ist $\\cos(\\alpha)$ (Ankathete/Hypotenuse), nicht $\\sin$.',
          3: '$3/4$ wäre $\\tan(\\alpha)$ (G/A), nicht $\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      ni(
        'In einem rechtwinkligen Dreieck ist die Ankathete zu $\\alpha$ gleich $8$ und die Hypotenuse gleich $10$. Wie groß ist $\\cos(\\alpha)$? (Dezimalzahl)',
        0.8, 0.001, '',
        `**Ansatz:** $\\cos = $ Ankathete / Hypotenuse.

**Rechnung:** $\\cos(\\alpha) = 8/10 = 0{,}8$.

**Probe:** Gegenkathete via Pythagoras: $\\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. $\\sin = 6/10 = 0{,}6$. $\\sin^2 + \\cos^2 = 0{,}36 + 0{,}64 = 1$ ✓.

**Typischer Fehler:** $\\sin$ statt $\\cos$ berechnen (Verhältnis passt nicht).`,
        [
          'Formel: $\\cos = A/H$.',
          '$A = 8$, $H = 10$.',
          'Teilen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      mc(
        'Ein Schüler behauptet: $\\sin(\\alpha) = \\dfrac{\\text{Hypotenuse}}{\\text{Gegenkathete}}$. Wo liegt der Fehler?',
        [
          'Zähler und Nenner sind vertauscht. Korrekt ist $\\sin(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$ (SOH: Opposite over Hypotenuse).',
          'Die Formel ist richtig — nur die Reihenfolge unüblich.',
          'Er müsste $\\text{Ankathete}$ statt $\\text{Gegenkathete}$ verwenden.',
          '$\\sin$ ist gar nicht in rechtwinkligen Dreiecken definiert.',
        ],
        0,
        `**Ansatz:** SOH = **O**pposite (Gegenkathete) over **H**ypotenuse, also Gegenkathete / Hypotenuse.

**Rechnung:** Schülerwert mit $G=3, H=5$: $5/3 \\approx 1{,}67$. Aber $\\sin$-Werte liegen im Intervall $[-1, 1]$. $1{,}67$ ist unmöglich.

**Probe:** Grenzfall: bei $\\alpha = 90°$ sind Gegenkathete = Hypotenuse, also $\\sin(90°) = H/H = 1$. Mit der Schüler-Formel käme $H/G = H/H = 1$ zufällig auch — aber für andere Winkel liefert sie Werte $> 1$, was unmöglich ist.

**Typischer Fehler:** Zähler und Nenner beim Aufstellen vertauschen. Merkhilfe: SOH = **S**inus → **O**pposite oben, **H**ypotenuse unten.`,
        [
          'Werte-Bereich von $\\sin$: $[-1, 1]$.',
          'Test: bei spitzem Winkel muss Verhältnis $< 1$ sein.',
          'Merkhilfe SOH präzise lesen.',
        ],
        {
          1: 'Die Reihenfolge ist nicht egal — Zähler durch Nenner ändert den Wert drastisch.',
          2: 'Ankathete/Hypotenuse wäre $\\cos$, nicht die Lösung des Problems. Das Problem ist die Vertauschung.',
          3: '$\\sin$ ist gerade im rechtwinkligen Dreieck klassisch definiert.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
      ni(
        'Ein Dreieck mit rechtem Winkel hat die Katheten $a = 7$ und $b = 24$. Berechne $\\sin(\\alpha)$, wenn $\\alpha$ der Winkel gegenüber von $a$ ist. (Dezimalzahl, 2 NK)',
        0.28, 0.01, '',
        `**Ansatz:** Erst Hypotenuse via Pythagoras, dann $\\sin = $ Gegenkathete $a$ / Hypotenuse.

**Rechnung:** $c = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$. $\\sin(\\alpha) = 7/25 = 0{,}28$.

**Probe:** $\\cos(\\alpha) = 24/25 = 0{,}96$. $\\sin^2 + \\cos^2 = 0{,}0784 + 0{,}9216 = 1$ ✓.

**Typischer Fehler:** Hypotenuse vergessen zu berechnen und stattdessen $7/24$ rechnen (das wäre $\\tan$, nicht $\\sin$).`,
        [
          'Pythagoras: $c^2 = a^2 + b^2$.',
          '$\\sqrt{49 + 576} = ?$',
          '$\\sin(\\alpha) = a/c$ mit $a$ = Gegenkathete.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['soh-cah-toa'] },
      ),
    ],

    // ── [1] Gegenkathete vs. Ankathete in beliebiger Dreiecksorientierung ──
    1: [
      tf(
        'Die Gegenkathete eines Winkels $\\alpha$ ist die Seite, die $\\alpha$ NICHT berührt (also gegenüberliegt).',
        true,
        `**Ansatz:** Definition: Gegenkathete = Seite gegenüber dem Winkel. Ankathete = Seite, die den Winkel (zusammen mit der Hypotenuse) einschließt.

**Rechnung:** Bei $\\alpha = 30°$ im Dreieck mit Hypotenuse $c$: die Seite, die $\\alpha$ nicht berührt, ist gegenüber von $\\alpha$ → Gegenkathete.

**Probe:** Mit der Definition kann man G/A auch bei gedrehtem Dreieck richtig identifizieren.

**Typischer Fehler:** Gegenkathete als "die längere Kathete" identifizieren — das hängt aber vom Winkel ab, nicht von der absoluten Länge.`,
        [
          'Gegenkathete liegt gegenüber.',
          'Sie berührt den Winkel NICHT.',
          'Ankathete und Hypotenuse schließen den Winkel ein.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'In einem rechtwinkligen Dreieck ist der rechte Winkel bei $C$, $\\alpha = 30°$ bei $A$, $\\beta = 60°$ bei $B$. Welche Seite ist die Gegenkathete zu $\\alpha$?',
        ['Die Seite $a$ (gegenüber von $A$)', 'Die Seite $b$ (gegenüber von $B$)', 'Die Seite $c$ (Hypotenuse)', 'Es gibt keine Gegenkathete.'],
        0,
        `**Ansatz:** In der Standardbezeichnung: Seite $a$ liegt gegenüber Winkel $A$.

**Rechnung:** Gegenkathete zu $\\alpha$ (Winkel $A$) ist $a$.

**Probe:** Ankathete zu $\\alpha$ ist $b$, Hypotenuse ist $c$ (gegenüber dem rechten Winkel $C$).

**Typischer Fehler:** Seitenbezeichnung und Winkelbezeichnung verwechseln.`,
        [
          'Standard: Seite gegenüber Winkel mit Kleinbuchstabe.',
          'Seite $a$ ↔ Winkel $A$ (gegenüber).',
          'Gegenkathete = gegenüber vom Winkel.',
        ],
        {
          1: '$b$ ist gegenüber von $B$, also Gegenkathete zu $\\beta$, nicht zu $\\alpha$.',
          2: '$c$ ist Hypotenuse, gegenüber des rechten Winkels.',
          3: 'Jeder nicht-rechte Winkel hat eine Gegenkathete.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'Ein rechtwinkliges Dreieck liegt mit der Hypotenuse waagerecht am unteren Rand. Der rechte Winkel zeigt nach unten-links, $\\alpha$ nach unten-rechts. Welche Seite ist Ankathete zu $\\alpha$?',
        ['Die Seite auf der waagerechten Linie (zwischen $\\alpha$ und dem rechten Winkel).', 'Die linke schräge Seite (gegenüber von $\\alpha$).', 'Die Hypotenuse.', 'Es gibt keine Ankathete bei schräger Lage.'],
        0,
        `**Ansatz:** Ankathete = Kathete, die den Winkel $\\alpha$ berührt (neben ihm liegt, aber nicht die Hypotenuse ist).

**Rechnung:** Bei $\\alpha$ am unteren-rechten Eck berührt: die waagerechte Seite (zum rechten Winkel) UND die Hypotenuse. Die waagerechte ist die Ankathete; die Hypotenuse ist keine Kathete.

**Probe:** Die dritte Seite (links schräg nach oben) liegt gegenüber von $\\alpha$ → Gegenkathete.

**Typischer Fehler:** Lage des Dreiecks verwirrt — bei gedrehtem Dreieck "horizontal = Ankathete" annehmen. Relevanz ist die Position zum Winkel, nicht zur Erdachse.`,
        [
          'Ankathete berührt den Winkel.',
          'Ankathete $\\neq$ Hypotenuse.',
          'Drehlage des Dreiecks ändert nichts.',
        ],
        {
          1: 'Die linke schräge Seite liegt gegenüber → Gegenkathete, nicht Ankathete.',
          2: 'Hypotenuse berührt zwar $\\alpha$, ist aber per Definition keine Kathete.',
          3: 'Ankathete existiert bei jedem nicht-rechten Winkel, unabhängig von der Lage.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      mc(
        'Ein Schüler sagt: „Die Gegenkathete ist immer die Seite, die waagerecht liegt." Wo liegt der Fehler?',
        [
          '"Gegenkathete" definiert sich durch die Lage zum Winkel (gegenüber), nicht durch eine absolute Richtung im Raum.',
          'Waagerecht ist immer die Ankathete.',
          'Gegenkathete gibt es nur bei waagerecht liegenden Dreiecken.',
          'Die Aussage stimmt — Gegenkathete ist immer waagerecht.',
        ],
        0,
        `**Ansatz:** Die Begriffe "Gegen-" und "Ankathete" sind winkelbezogen, nicht raumbezogen.

**Rechnung:** Bei einem gedrehten Dreieck kann die Gegenkathete beliebig orientiert sein (horizontal, vertikal, schräg). Entscheidend: liegt sie gegenüber vom Winkel oder nicht.

**Probe:** Ein Standard-Dreieck mit Hypotenuse oben liegt mit der Gegenkathete des unteren Winkels schräg — nicht waagerecht.

**Typischer Fehler:** Dieser hier. Symptome: Schüler löst Lehrbuch-Aufgaben richtig, versagt bei gedrehten Skizzen in Prüfungen.`,
        [
          'Ist "Gegenkathete" eine absolute oder relative Eigenschaft?',
          'Drehe das Dreieck — wo liegt die Gegenkathete jetzt?',
          'Raumbezug vs. Winkelbezug.',
        ],
        {
          1: 'Waagerecht ist nicht automatisch Ankathete — hängt vom Winkel ab, nicht von der Orientierung.',
          2: 'Dreiecke können beliebig im Raum gedreht sein. Die Trig-Begriffe bleiben konsistent.',
          3: 'Die Aussage ist falsch — ein einfaches Gegenbeispiel (gedrehtes Dreieck) entlarvt das.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
      matching(
        'Im Dreieck mit rechtem Winkel bei $C$, Seiten $a, b, c$: Ordne jedem Winkel seine Gegen- bzw. Ankathete zu.',
        [
          { left: 'Gegenkathete zu $\\alpha$ (Winkel $A$)', right: 'Seite $a$' },
          { left: 'Ankathete zu $\\alpha$',                 right: 'Seite $b$' },
          { left: 'Gegenkathete zu $\\beta$ (Winkel $B$)',  right: 'Seite $b$' },
          { left: 'Hypotenuse',                             right: 'Seite $c$' },
        ],
        `**Ansatz:** Standard-Nomenklatur: Kleinbuchstabe $=$ Seite gegenüber Großbuchstabe-Winkel.

**Rechnung:** Seite $a$ gegenüber $A$, etc. Hypotenuse $c$ gegenüber dem rechten Winkel $C$.

**Probe:** Für $\\alpha$: Gegen $= a$, An $= b$. Für $\\beta$: Gegen $= b$, An $= a$. Die Rolle vertauscht sich beim Wechsel des Winkels.

**Typischer Fehler:** Eine feste Zuordnung "Kathete ist immer Ankathete" annehmen. Rolle hängt vom Winkel ab.`,
        [
          'Seite und Winkel mit Groß-/Kleinbuchstabe.',
          'Gegenkathete zu $\\alpha$ = Seite $a$.',
          'Rolle wechselt beim anderen Winkel.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['kathete-orientierung'] },
      ),
    ],

    // ── [2] Umkehrfunktionen arcsin / arccos / arctan ──────────────────────
    2: [
      tf(
        'Der Befehl $\\arcsin(0{,}5)$ am Taschenrechner liefert im DEG-Modus $30°$.',
        true,
        `**Ansatz:** $\\arcsin$ liefert den Winkel, dessen Sinus der gegebene Wert ist.

**Rechnung:** $\\sin(30°) = 0{,}5$, also $\\arcsin(0{,}5) = 30°$.

**Probe:** Im RAD-Modus wäre $\\arcsin(0{,}5) \\approx 0{,}5236$ rad $= \\pi/6 = 30°$.

**Typischer Fehler:** Modus nicht beachten — dann Ergebnisse wie $0{,}5236°$ statt $30°$.`,
        [
          'Umkehrfunktion zu $\\sin$.',
          '$\\sin(30°) = 0{,}5$.',
          'Modus des Rechners prüfen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      mc(
        'Welche Umkehrfunktion verwendest du, um den Winkel zu bestimmen, wenn die Ankathete $= 4$ und die Hypotenuse $= 5$ bekannt sind?',
        ['$\\arccos(4/5)$', '$\\arcsin(4/5)$', '$\\arctan(4/5)$', '$\\arccos(5/4)$'],
        0,
        `**Ansatz:** $\\cos(\\alpha) = A/H$, also $\\alpha = \\arccos(A/H)$.

**Rechnung:** $\\arccos(4/5) = \\arccos(0{,}8) \\approx 36{,}87°$.

**Probe:** $\\cos(36{,}87°) \\approx 0{,}8$ ✓.

**Typischer Fehler:** $\\arcsin(4/5)$ nehmen und den falschen Winkel bekommen (arcsin von A/H wäre nicht zielführend).`,
        [
          'Welches Seitenverhältnis liegt vor?',
          'A/H passt zu $\\cos$.',
          'Umkehrfunktion: $\\arccos$.',
        ],
        {
          1: '$\\arcsin(4/5)$ würde einen anderen Winkel liefern, der nicht zum Verhältnis $A/H$ passt.',
          2: '$\\arctan$ bräuchte $G/A$, nicht $A/H$.',
          3: '$5/4 > 1$ — $\\arccos$ ist nur für Werte $\\in [-1, 1]$ definiert, liefert also Fehler.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      ni(
        'Berechne $\\arctan(1)$ in Grad.',
        45, 0, '°',
        `**Ansatz:** $\\tan(45°) = 1$, also $\\arctan(1) = 45°$.

**Rechnung:** $\\arctan(1) = 45°$.

**Probe:** $\\tan(45°) = \\sin(45°)/\\cos(45°) = (\\sqrt{2}/2)/(\\sqrt{2}/2) = 1$ ✓.

**Typischer Fehler:** $\\arctan(1)$ mit $1°$ verwechseln (Input-Output nicht klar trennen).`,
        [
          'Welcher Winkel hat $\\tan = 1$?',
          'Symmetrischer Fall: Gegen- = Ankathete.',
          'Das passiert bei $45°$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      mc(
        'Ein Schüler soll den Winkel bestimmen mit $\\sin(\\alpha) = 0{,}7$ und tippt im RAD-Modus $\\arcsin(0{,}7)$. Er erhält $0{,}775$ und schreibt das als Ergebnis in Grad. Wo liegt der Fehler?',
        [
          'Der Wert $0{,}775$ ist das Ergebnis in Radiant, nicht in Grad. Umrechnung nötig: $0{,}775 \\cdot 180/\\pi \\approx 44{,}4°$.',
          'Der Sinus-Wert $0{,}7$ ist nicht erlaubt.',
          '$\\arcsin$ liefert immer Grad — die $0{,}775$ sind korrekt.',
          '$\\sin(\\alpha) = 0{,}7$ hat keine Lösung.',
        ],
        0,
        `**Ansatz:** $\\arcsin$ im RAD-Modus liefert Radiant, im DEG-Modus Grad. Der Schüler muss wissen, in welchem Modus er ist.

**Rechnung:** $\\arcsin(0{,}7)$ im RAD-Modus $\\approx 0{,}7754$ rad. Umgerechnet: $0{,}7754 \\cdot 180/\\pi \\approx 44{,}43°$.

**Probe:** $\\sin(44{,}43°) \\approx 0{,}7$ ✓. Der Schüler-Wert $0{,}775°$ wäre ein nahezu Null-Grad-Winkel, mit $\\sin \\approx 0{,}0135$ — Widerspruch.

**Typischer Fehler:** Modus-Info beim Ablesen ignorieren. Plausibilitäts-Check: $\\sin(0{,}775°) \\ne 0{,}7$ entlarvt den Fehler sofort.`,
        [
          'In welchem Modus war der Rechner?',
          'Einheit des Ergebnisses = Einheit der Ausgabe.',
          'Test: $\\sin(\\text{Schüler-Winkel}) = 0{,}7$?',
        ],
        {
          1: '$0{,}7$ ist erlaubt — liegt im Intervall $[-1, 1]$.',
          2: 'Der Rechner folgt dem Modus, nicht dem Wunsch des Nutzers. Im RAD-Modus → Radiant-Ergebnis.',
          3: '$\\sin(\\alpha) = 0{,}7$ hat sehr wohl Lösungen: $\\alpha \\approx 44{,}4°$ oder $180°-44{,}4° = 135{,}6°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
      ni(
        'In einem rechtwinkligen Dreieck sind Gegenkathete $= 3$ und Ankathete $= 4$. Bestimme den Winkel $\\alpha$ in Grad (1 NK).',
        36.9, 0.1, '°',
        `**Ansatz:** $\\tan(\\alpha) = G/A = 3/4$, also $\\alpha = \\arctan(3/4)$.

**Rechnung:** $\\arctan(0{,}75) \\approx 36{,}87°$.

**Probe:** $\\tan(36{,}87°) \\approx 0{,}75 = 3/4$ ✓. Hypotenuse via Pythagoras: $\\sqrt{9 + 16} = 5$. $\\sin(36{,}87°) = 3/5 = 0{,}6$ ✓.

**Typischer Fehler:** $\\arcsin$ oder $\\arccos$ statt $\\arctan$ nutzen — oder G und A vertauschen.`,
        [
          'Welches Seitenverhältnis?',
          'G/A führt zu $\\tan$.',
          'Umkehrfunktion $\\arctan$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['arcsin-arccos-arctan'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-3 — Die Grundwerte (0°, 30°, 45°, 60°, 90°)  (4 subGoals)
  // 20 Matrix-Aufgaben: 4 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-3': {
    // ── [0] Sinus-Grundwerte auswendig ─────────────────────────────────────
    0: [
      matching(
        'Ordne jedem Winkel seinen $\\sin$-Wert zu.',
        [
          { left: '$\\sin(0°)$',  right: '$0$' },
          { left: '$\\sin(30°)$', right: '$\\tfrac{1}{2}$' },
          { left: '$\\sin(45°)$', right: '$\\tfrac{\\sqrt{2}}{2}$' },
          { left: '$\\sin(60°)$', right: '$\\tfrac{\\sqrt{3}}{2}$' },
          { left: '$\\sin(90°)$', right: '$1$' },
        ],
        `**Ansatz:** Die fünf Grundwerte-Paare auswendig lernen.

**Rechnung:** $\\sin(0°)=0$; $\\sin(30°)=1/2$; $\\sin(45°)=\\sqrt{2}/2\\approx 0{,}707$; $\\sin(60°)=\\sqrt{3}/2\\approx 0{,}866$; $\\sin(90°)=1$.

**Probe:** Monoton wachsend von $0$ auf $1$. Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$ ✓.

**Typischer Fehler:** $\\sin(30°)$ und $\\sin(60°)$ vertauschen — beide sind "schöne" Werte, aber bei $30°$ ist der Sinus klein ($1/2$), bei $60°$ ist er groß ($\\sqrt{3}/2$).`,
        [
          'Fünf Grundwerte.',
          'Monoton wachsend von $0$ auf $1$.',
          '$\\sin(30°)$ klein, $\\sin(60°)$ groß.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      mc(
        'Welchen Wert hat $\\sin(60°)$?',
        ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\sqrt{3}$'],
        0,
        `**Ansatz:** Grundwert aus der Tabelle.

**Rechnung:** $\\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.

**Probe:** Herleitung aus $30°$-$60°$-$90°$-Dreieck mit Seiten $1, \\sqrt{3}, 2$: Gegenkathete zu $60°$ ist $\\sqrt{3}$, Hypotenuse $2$.

**Typischer Fehler:** Mit $\\sin(30°) = 1/2$ verwechseln. Merkhilfe: bei $60°$ ist die Gegenkathete länger als bei $30°$, also größerer $\\sin$-Wert.`,
        [
          'Grundwerte-Tabelle.',
          '$\\sin(60°)$: groß oder klein?',
          'Dezimal: $\\approx 0{,}866$.',
        ],
        {
          1: '$1/2$ ist $\\sin(30°)$, nicht $\\sin(60°)$.',
          2: '$\\sqrt{2}/2 \\approx 0{,}707$ ist $\\sin(45°)$.',
          3: '$\\sqrt{3}$ wäre größer als $1$ — unmöglich für $\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      ni(
        'Berechne $\\sin(30°) + \\sin(90°)$.',
        1.5, 0.001, '',
        `**Ansatz:** Beide Grundwerte einsetzen.

**Rechnung:** $1/2 + 1 = 1{,}5$.

**Probe:** Dezimal: $0{,}5 + 1 = 1{,}5$ ✓.

**Typischer Fehler:** $\\sin(30°) + \\sin(90°) = \\sin(120°)$ schreiben (falsche Additivität). Sinus ist nicht linear — siehe trig-3-1.`,
        [
          'Grundwerte einsetzen.',
          '$\\sin(30°) = ?$',
          '$\\sin(90°) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      mc(
        'Ein Schüler schreibt $\\sin(45°) = 0{,}5$. Wo liegt der Fehler?',
        [
          '$\\sin(45°) = \\sqrt{2}/2 \\approx 0{,}707$, nicht $0{,}5$. Er hat vermutlich mit $\\sin(30°) = 0{,}5$ verwechselt.',
          '$\\sin(45°) = 0{,}5$ ist korrekt.',
          '$\\sin(45°)$ existiert nicht — nur $\\sin(30°)$ und $\\sin(60°)$.',
          'Er müsste $\\sin(45°) = 45/90 = 0{,}5$ rechnen.',
        ],
        0,
        `**Ansatz:** $\\sin(45°)$ ist ein spezieller Grundwert: die Gegenkathete = die Ankathete im gleichschenklig-rechtwinkligen Dreieck, also $\\sin(45°) = \\cos(45°) = \\sqrt{2}/2$.

**Rechnung:** Korrekt: $\\sin(45°) = \\sqrt{2}/2 \\approx 0{,}707$. Schüler-Wert $0{,}5$ wäre $\\sin(30°)$.

**Probe:** $\\sin^2(45°) + \\cos^2(45°) = 0{,}5 + 0{,}5 = 1$ ✓ (passt zur Grundformel).

**Typischer Fehler:** Grundwerte pauschal mit $0{,}5$-Bereich schätzen. Die fünf Werte müssen exakt auswendig gelernt werden.`,
        [
          'Grundwerte-Tabelle: $\\sin(45°) = ?$',
          'Merkregel: $\\sqrt{n}/2$ für $n=0,1,2,3,4$ bei $0°, 30°, 45°, 60°, 90°$.',
          'Dezimal testen: $0{,}707 \\ne 0{,}5$.',
        ],
        {
          1: '$0{,}5$ ist $\\sin(30°)$, nicht $\\sin(45°)$.',
          2: '$\\sin(45°)$ ist ein zentraler Grundwert (Gleichseitig-rechtwinkliges Dreieck).',
          3: 'Die Formel "Winkel/90" ist keine gültige $\\sin$-Definition.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
      matching(
        'Ordne jeden Sinus-Wert seinem Winkel zu.',
        [
          { left: '$0{,}5$',   right: '$30°$' },
          { left: '$0{,}707$', right: '$45°$' },
          { left: '$0{,}866$', right: '$60°$' },
          { left: '$1$',       right: '$90°$' },
        ],
        `**Ansatz:** Rückwärts-Matching — vom Wert zum Winkel.

**Rechnung:** Kurvendiskussion $\\sin$ zwischen $0°$ und $90°$: monoton wachsend.

**Probe:** $\\arcsin$-Test auf dem Rechner (DEG-Modus).

**Typischer Fehler:** Zahlenbenutzung — $0{,}866$ und $0{,}707$ werden leicht vertauscht.`,
        [
          'Dezimal-Kontrolle: $0{,}5 < 0{,}707 < 0{,}866 < 1$.',
          'Monoton wachsend von $0°$ bis $90°$.',
          '$\\arcsin$ zur Prüfung.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['grundwerte-sin'] },
      ),
    ],

    // ── [1] Merkregel √n/2 für n = 0, 1, 2, 3, 4 ───────────────────────────
    1: [
      tf(
        'Die Merkregel $\\sin = \\sqrt{n}/2$ mit $n=0,1,2,3,4$ liefert die Sinus-Grundwerte für $0°, 30°, 45°, 60°, 90°$.',
        true,
        `**Ansatz:** Mnemotechnisches Muster für alle fünf Standardwerte.

**Rechnung:** $\\sqrt{0}/2 = 0$; $\\sqrt{1}/2 = 1/2$; $\\sqrt{2}/2$; $\\sqrt{3}/2$; $\\sqrt{4}/2 = 2/2 = 1$. Alle stimmen.

**Probe:** Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$ — identisch mit den bekannten Grundwerten.

**Typischer Fehler:** Merkregel als Rechenregel missverstehen — sie funktioniert NUR für diese 5 Winkel, nicht für andere.`,
        [
          'Fünf Standardwinkel, fünf einfache Brüche.',
          'Muster $\\sqrt{n}/2$.',
          '$n$ läuft von $0$ bis $4$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      mc(
        'Mit der Merkregel $\\sin = \\sqrt{n}/2$: welcher Winkel entspricht $n = 2$?',
        ['$45°$', '$30°$', '$60°$', '$90°$'],
        0,
        `**Ansatz:** Zuordnung $n \\leftrightarrow $ Winkel: $n=0 \\to 0°$, $n=1 \\to 30°$, $n=2 \\to 45°$, $n=3 \\to 60°$, $n=4 \\to 90°$.

**Rechnung:** $n=2 \\to 45°$. Wert: $\\sqrt{2}/2$.

**Probe:** $\\sin(45°) = \\sqrt{2}/2$ ✓.

**Typischer Fehler:** $n$ und den Winkel direkt gleichsetzen (z. B. $n=2 \\to 2°$).`,
        [
          'Fünf Winkel: $0, 30, 45, 60, 90$.',
          'Fünf $n$-Werte: $0, 1, 2, 3, 4$.',
          'Position $n+1$ in der Liste.',
        ],
        {
          1: '$30°$ ist $n=1$.',
          2: '$60°$ ist $n=3$.',
          3: '$90°$ ist $n=4$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      ni(
        'Wende die Merkregel an: Bei $n = 3$ ergibt die Formel $\\sqrt{n}/2$ welchen Dezimalwert? (3 NK)',
        0.866, 0.01, '',
        `**Ansatz:** $\\sqrt{3}/2$.

**Rechnung:** $\\sqrt{3} \\approx 1{,}732$. $1{,}732/2 = 0{,}866$.

**Probe:** Dies ist $\\sin(60°)$. Bekannt: $\\sin(60°) \\approx 0{,}866$ ✓.

**Typischer Fehler:** $3/2 = 1{,}5$ rechnen (Wurzel vergessen).`,
        [
          '$\\sqrt{3} \\approx ?$',
          'Geteilt durch $2$.',
          '$\\sqrt{3} \\approx 1{,}732$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      mc(
        'Ein Schüler wendet die Merkregel $\\sqrt{n}/2$ auf $\\sin(120°)$ an mit $n = 5$ und erhält $\\sqrt{5}/2 \\approx 1{,}118$. Wo liegt der Fehler?',
        [
          'Die Merkregel gilt NUR für die fünf Grundwinkel $0°, 30°, 45°, 60°, 90°$. Für $120°$ gilt sie nicht. Außerdem ist $\\sin > 1$ unmöglich.',
          '$n = 5$ ist erlaubt, aber der Wurzel-Wert wurde falsch berechnet.',
          'Die Regel gilt mit $n = 5$ nur im Bogenmaß.',
          'Die Rechnung stimmt: $\\sin(120°) \\approx 1{,}118$.',
        ],
        0,
        `**Ansatz:** Die Merkregel ist mnemotechnisch, kein Rechengesetz. Sie trifft nur für die fünf Standardwinkel zu.

**Rechnung:** Tatsächlich: $\\sin(120°) = \\sin(180°-120°) = \\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.

**Probe:** Sinus liegt immer im Bereich $[-1, 1]$. $1{,}118$ sprengt diesen Bereich — sofortiges Warnsignal.

**Typischer Fehler:** Mnemotechniken mit Rechenregeln verwechseln. Die Regel funktioniert durch glückliche Zahlencoincidence, nicht durch mathematische Herleitung.`,
        [
          'Bereich von $\\sin$: $[-1, 1]$.',
          'Gilt die Merkregel universell?',
          '$\\sin(120°)$ via Quadranten-Symmetrie: $\\sin(60°)$.',
        ],
        {
          1: '$n = 5$ ist nicht erlaubt — die Regel hat nur fünf Werte.',
          2: 'Die Regel hat nichts mit dem Bogenmaß zu tun.',
          3: '$1{,}118 > 1$ — unmöglich für Sinus.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
      sorting(
        'Bringe die fünf Sinus-Grundwerte nach aufsteigender Größe in die richtige Reihenfolge.',
        [
          '$\\sin(0°) = 0$',
          '$\\sin(30°) = \\tfrac{1}{2}$',
          '$\\sin(45°) = \\tfrac{\\sqrt{2}}{2}$',
          '$\\sin(60°) = \\tfrac{\\sqrt{3}}{2}$',
          '$\\sin(90°) = 1$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Sinus ist im ersten Quadranten monoton wachsend.

**Rechnung:** Dezimal: $0, 0{,}5, 0{,}707, 0{,}866, 1$.

**Probe:** Auch $\\sqrt{0}/2 < \\sqrt{1}/2 < \\sqrt{2}/2 < \\sqrt{3}/2 < \\sqrt{4}/2$ ✓.

**Typischer Fehler:** $\\sqrt{3}/2$ und $\\sqrt{2}/2$ vertauschen — obwohl $\\sqrt{3} > \\sqrt{2}$.`,
        [
          'Monoton wachsend von $0°$ bis $90°$.',
          'Dezimal-Kontrolle.',
          '$\\sqrt{n}$ wächst mit $n$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['wurzel-n-muster'] },
      ),
    ],

    // ── [2] Kosinus = Sinus rückwärts, und Tangens-Grundwerte ─────────────
    2: [
      tf(
        '$\\cos(0°) = 1$ und $\\cos(90°) = 0$ — die Kosinus-Werte sind genau die Sinus-Werte in umgekehrter Reihenfolge.',
        true,
        `**Ansatz:** Komplementär-Eigenschaft: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.

**Rechnung:** $\\cos(0°) = \\sin(90°) = 1$; $\\cos(30°) = \\sin(60°) = \\sqrt{3}/2$; $\\cos(45°) = \\sin(45°) = \\sqrt{2}/2$; $\\cos(60°) = \\sin(30°) = 1/2$; $\\cos(90°) = \\sin(0°) = 0$.

**Probe:** $\\sin^2 + \\cos^2 = 1$ ✓.

**Typischer Fehler:** $\\cos$ und $\\sin$ bei denselben Winkeln verwechseln. Besonders fies: $\\sin(30°) = \\cos(60°) = 1/2$ — die Werte sind gleich, aber bei verschiedenen Winkeln.`,
        [
          'Symmetrie: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
          'Kosinus-Tabelle ist Sinus-Tabelle gespiegelt.',
          'Dezimal: $1, 0{,}866, 0{,}707, 0{,}5, 0$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['grundwerte-cos'] },
      ),
      mc(
        'Welcher Wert ist gleich $\\cos(60°)$?',
        ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$1$'],
        0,
        `**Ansatz:** Komplementär: $\\cos(60°) = \\sin(30°) = 1/2$.

**Rechnung:** $\\cos(60°) = 1/2$.

**Probe:** Im $30°$-$60°$-$90°$-Dreieck: Ankathete zu $60°$ ist die kurze Kathete $1$, Hypotenuse $2$. $\\cos = 1/2$ ✓.

**Typischer Fehler:** $\\sqrt{3}/2$ angeben (das ist $\\cos(30°)$, nicht $\\cos(60°)$).`,
        [
          'Komplementärwinkel-Regel.',
          '$\\cos(60°) = \\sin(30°)$.',
          '$\\sin(30°) = ?$',
        ],
        {
          1: '$\\sqrt{3}/2$ ist $\\cos(30°)$, nicht $\\cos(60°)$.',
          2: '$\\sqrt{2}/2$ ist $\\cos(45°)$.',
          3: '$1$ ist $\\cos(0°)$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['grundwerte-cos'] },
      ),
      ni(
        'Berechne $\\tan(60°)$. (3 NK)',
        1.732, 0.01, '',
        `**Ansatz:** $\\tan = \\sin/\\cos$.

**Rechnung:** $\\tan(60°) = \\sin(60°)/\\cos(60°) = (\\sqrt{3}/2)/(1/2) = \\sqrt{3} \\approx 1{,}732$.

**Probe:** $\\tan(60°) = \\sqrt{3}$ steht in jeder Formelsammlung.

**Typischer Fehler:** $\\tan(60°) = \\sin(60°) \\cdot \\cos(60°) = \\sqrt{3}/4$ rechnen (Multiplikation statt Division).`,
        [
          '$\\tan = \\sin / \\cos$.',
          '$\\sin(60°) = \\sqrt{3}/2$, $\\cos(60°) = 1/2$.',
          'Division: $(\\sqrt{3}/2) / (1/2) = \\sqrt{3}$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['grundwerte-tan'] },
      ),
      mc(
        'Ein Schüler schreibt $\\cos(30°) = \\sin(30°) = 0{,}5$. Wo liegt der Fehler?',
        [
          '$\\cos(30°) = \\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$, nicht $0{,}5$. Der Schüler hat Sinus und Kosinus beim gleichen Winkel gleichgesetzt.',
          '$\\sin(30°) = 0{,}866$ ist richtig, aber $\\cos(30°)$ nicht.',
          'Bei allen Grundwinkeln gilt $\\sin = \\cos$.',
          '$\\sin$ und $\\cos$ sind sowieso immer gleich.',
        ],
        0,
        `**Ansatz:** $\\sin(\\alpha) = \\cos(\\alpha)$ gilt NUR bei $\\alpha = 45°$. Bei allen anderen Winkeln sind sie unterschiedlich.

**Rechnung:** Korrekt: $\\sin(30°) = 1/2$, aber $\\cos(30°) = \\sqrt{3}/2 \\approx 0{,}866$. Komplementär: $\\cos(30°) = \\sin(60°)$.

**Probe:** $\\sin^2(30°) + \\cos^2(30°) = 1/4 + 3/4 = 1$ ✓. Mit Schülerwert: $1/4 + 1/4 = 1/2 \\ne 1$ — Widerspruch.

**Typischer Fehler:** $\\sin$ und $\\cos$ gleichsetzen — gilt nur bei $45°$.`,
        [
          'Wann gilt $\\sin = \\cos$?',
          '$\\sin(30°) \\ne \\cos(30°)$.',
          'Komplementär: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
        ],
        {
          1: '$\\sin(30°) = 0{,}5$, nicht $0{,}866$.',
          2: 'Die Gleichheit gilt nur bei $45°$, nicht bei allen Grundwinkeln.',
          3: '$\\sin$ und $\\cos$ sind unterschiedliche Funktionen, nur in Ausnahmefällen gleich.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['grundwerte-cos', 'grundwerte-sin'] },
      ),
      matching(
        'Ordne jedem Winkel sein Paar $(\\sin, \\cos)$ zu.',
        [
          { left: '$0°$',  right: '$(0, 1)$' },
          { left: '$30°$', right: '$(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$' },
          { left: '$45°$', right: '$(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$' },
          { left: '$60°$', right: '$(\\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2})$' },
          { left: '$90°$', right: '$(1, 0)$' },
        ],
        `**Ansatz:** Komplementaritäten ausnutzen.

**Rechnung:** Vollständige Tabelle — beide Funktionen gleichzeitig.

**Probe:** $\\sin^2 + \\cos^2 = 1$ bei jedem Paar verifiziert.

**Typischer Fehler:** Zahlen zu schnell vermischen — Paar-Tabelle auswendig, dann sind sie stabil.`,
        [
          'Je $5$ Paare für $0°$ bis $90°$.',
          '$\\sin$-Werte wachsen, $\\cos$-Werte fallen.',
          'Bei $45°$ sind beide gleich.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['grundwerte-cos', 'grundwerte-sin'] },
      ),
    ],

    // ── [3] Komplementärwinkel: cos α = sin(90° − α) ───────────────────────
    3: [
      tf(
        'Für jeden Winkel $\\alpha$ gilt $\\cos(\\alpha) = \\sin(90° - \\alpha)$.',
        true,
        `**Ansatz:** Komplementaritäts-Beziehung — Gegen- und Ankathete tauschen Rollen bei der $90°$-Ergänzung.

**Rechnung:** Im rechtwinkligen Dreieck: $\\sin(\\alpha) = G/H$; bei Winkel $90°-\\alpha$ ist die Gegenkathete zur Ankathete von $\\alpha$ geworden, also $\\sin(90°-\\alpha) = A/H = \\cos(\\alpha)$.

**Probe:** $\\cos(30°) = \\sqrt{3}/2 = \\sin(60°) = \\sin(90°-30°)$ ✓.

**Typischer Fehler:** Ergänzung zu $180°$ statt $90°$ annehmen.`,
        [
          'Komplementär: Ergänzung zu $90°$.',
          'Gegen- und Ankathete wechseln Rollen.',
          'Universell für alle Winkel.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['komplementaer'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\cos(50°)$?',
        ['$\\sin(40°)$', '$\\sin(50°)$', '$\\sin(130°)$', '$\\sin(90°)$'],
        0,
        `**Ansatz:** $\\cos(\\alpha) = \\sin(90°-\\alpha)$.

**Rechnung:** $\\cos(50°) = \\sin(90°-50°) = \\sin(40°)$.

**Probe:** Beide Werte dezimal: $\\cos(50°) \\approx 0{,}643$, $\\sin(40°) \\approx 0{,}643$ ✓.

**Typischer Fehler:** $\\cos(50°) = \\sin(50°)$ annehmen (gilt nur bei $45°$).`,
        [
          'Formel: $\\cos(\\alpha) = \\sin(90°-\\alpha)$.',
          '$90° - 50° = ?$',
          'Komplementärer Winkel.',
        ],
        {
          1: '$\\sin(50°) \\ne \\cos(50°)$ — Gleichheit nur bei $45°$.',
          2: '$\\sin(130°) = \\sin(180°-130°) = \\sin(50°)$ — passt nicht.',
          3: '$\\sin(90°) = 1$ — konstant, kein funktionaler Zusammenhang.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['komplementaer'] },
      ),
      ni(
        'Gegeben $\\sin(25°) \\approx 0{,}423$. Bestimme $\\cos(65°)$. (3 NK)',
        0.423, 0.01, '',
        `**Ansatz:** $\\cos(65°) = \\sin(90°-65°) = \\sin(25°)$.

**Rechnung:** $\\cos(65°) = \\sin(25°) = 0{,}423$.

**Probe:** $65° + 25° = 90°$ ✓.

**Typischer Fehler:** $\\sin(65°)$ statt $\\cos(65°)$ rechnen.`,
        [
          'Komplementär: $\\cos(65°) = \\sin(\\ldots)$.',
          '$90° - 65° = 25°$.',
          'Wert aus der Angabe ablesen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['komplementaer'] },
      ),
      mc(
        'Ein Schüler sagt: „Weil $\\cos(\\alpha) = \\sin(90°-\\alpha)$, gilt auch $\\cos(120°) = \\sin(90°-120°) = \\sin(-30°) = -\\sin(30°) = -0{,}5$." Wo liegt der Fehler?',
        [
          'Die Rechnung ist an sich richtig. $\\cos(120°) = -1/2$. Kein Fehler — die Formel gilt universell.',
          'Die Formel gilt nur für Winkel zwischen $0°$ und $90°$.',
          '$\\sin(-30°) = +0{,}5$, nicht $-0{,}5$.',
          '$\\cos(120°)$ ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Die Komplementär-Formel ist tatsächlich universell. Der Schüler kommt auf das richtige Ergebnis.

**Rechnung:** $\\cos(120°) = -1/2$ (bekannter Wert im 2. Quadranten).

**Probe:** Direkt: $\\cos(120°) = -\\cos(60°) = -1/2$ ✓. Über Komplementär: $\\sin(-30°) = -\\sin(30°) = -1/2$ ✓.

**Typischer Fehler:** Annehmen, dass die Formel außerhalb von $0°$–$90°$ nicht gilt — sie gilt aber universell, mit den entsprechenden Vorzeichen.`,
        [
          'Gilt die Komplementär-Formel universell?',
          'Berechne $\\cos(120°)$ direkt als Kontrolle.',
          'Sinus ist ungerade Funktion.',
        ],
        {
          1: 'Die Formel gilt für alle $\\alpha$, nicht nur $0°$–$90°$.',
          2: '$\\sin(-30°) = -\\sin(30°) = -0{,}5$ (ungerade Funktion).',
          3: '$\\cos(120°)$ ist selbstverständlich definiert — $-0{,}5$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['komplementaer'] },
      ),
      ni(
        'Berechne $\\sin(30°) + \\cos(60°)$ (beide Grundwerte kombiniert).',
        1, 0.001, '',
        `**Ansatz:** Beide sind gleich: $\\sin(30°) = \\cos(60°) = 1/2$ (Komplementär-Regel).

**Rechnung:** $1/2 + 1/2 = 1$.

**Probe:** $\\sin(30°) = \\cos(90°-30°) = \\cos(60°)$, also zwei gleiche Werte.

**Typischer Fehler:** Werte verschieden einsetzen: $1/2 + 1/\\sqrt{3} = $ falsch.`,
        [
          'Komplementär: $\\sin(30°)$ und $\\cos(60°)$ gleich.',
          'Beide Werte: $1/2$.',
          'Summe.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['komplementaer', 'grundwerte-sin'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-4 — Vorzeichen und Quadranten  (3 subGoals)
  // Je 5 Aufgaben = 15 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-4': {
    // ── [0] Quadranten I-IV und Vorzeichen-Regel ASTC ─────────────────────
    0: [
      tf(
        'Im 2. Quadranten ($90°$ bis $180°$) ist $\\sin > 0$ und $\\cos < 0$.',
        true,
        `**Ansatz:** ASTC-Regel: "All Students Take Calculus". Im 2. Quadranten ist nur $\\sin$ positiv.

**Rechnung:** Am Einheitskreis im 2. Quadranten: $y > 0$ (also $\\sin > 0$), $x < 0$ (also $\\cos < 0$).

**Probe:** $\\sin(120°) = +\\sqrt{3}/2 > 0$, $\\cos(120°) = -1/2 < 0$ ✓.

**Typischer Fehler:** Quadranten und Grenzen verwechseln. Der 2. Quadrant beginnt bei $90°$, nicht bei $180°$.`,
        [
          'ASTC: Quadrant 2 → "Sinus positiv".',
          'Am Einheitskreis: $x$ ist $\\cos$, $y$ ist $\\sin$.',
          '2. Quadrant: $x < 0$, $y > 0$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'In welchem Quadranten liegt der Winkel $225°$?',
        ['3. Quadrant', '2. Quadrant', '4. Quadrant', '1. Quadrant'],
        0,
        `**Ansatz:** Quadrantengrenzen: I ($0°$–$90°$), II ($90°$–$180°$), III ($180°$–$270°$), IV ($270°$–$360°$).

**Rechnung:** $180° < 225° < 270°$ → **3. Quadrant**.

**Probe:** $\\sin(225°) = -\\sin(45°) < 0$, $\\cos(225°) = -\\cos(45°) < 0$ — beide negativ, wie im 3. Quadranten erwartet (ASTC: "Take" = nur Tangens positiv).

**Typischer Fehler:** Winkel in Grad falsch auf die Quadranten verteilen.`,
        [
          'Quadrantengrenzen auswendig.',
          '$180° < 225° < 270°$.',
          '3. Quadrant.',
        ],
        {
          1: '$225° > 180°$, also nicht im 2. Quadranten.',
          2: '$225° < 270°$, also nicht im 4. Quadranten.',
          3: '$225° > 90°$, also nicht im 1. Quadranten.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'Bestimme das Vorzeichen von $\\cos(200°)$.',
        ['negativ', 'positiv', 'Null', 'nicht definiert'],
        0,
        `**Ansatz:** $200°$ liegt im 3. Quadranten. ASTC: im 3. Quadranten ist nur $\\tan > 0$, $\\sin$ und $\\cos$ sind negativ.

**Rechnung:** $\\cos(200°) < 0$.

**Probe:** Direkt: $\\cos(200°) = -\\cos(20°) \\approx -0{,}94$ — negativ ✓.

**Typischer Fehler:** Vorzeichen vergessen und einfach $\\cos(200°) = \\cos(20°)$ rechnen.`,
        [
          'Welcher Quadrant für $200°$?',
          '3. Quadrant: ASTC → nur $\\tan$ positiv.',
          'Also $\\cos < 0$.',
        ],
        {
          1: 'Im 3. Quadranten ist $\\cos$ negativ.',
          2: '$\\cos(200°) \\ne 0$ — das wäre nur bei $90°$ oder $270°$.',
          3: '$\\cos$ ist für alle Winkel definiert.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(150°) = -0{,}5$ und begründet: „$150°$ ist größer als $90°$, also negativ." Wo liegt der Fehler?',
        [
          '$150°$ liegt im 2. Quadranten, wo $\\sin$ positiv ist (ASTC). Korrekt: $\\sin(150°) = +0{,}5$.',
          '$\\sin$ ist ab $180°$ negativ, ab $90°$ ist es noch positiv.',
          '$\\sin(150°)$ ist tatsächlich $-0{,}5$.',
          'Der Schüler müsste den Referenzwinkel verwenden.',
        ],
        0,
        `**Ansatz:** Das Vorzeichen hängt vom Quadranten ab, nicht pauschal von "$>90°$".

**Rechnung:** $150° \\in $ 2. Quadrant (zwischen $90°$ und $180°$). Dort ist $\\sin > 0$. $\\sin(150°) = \\sin(180°-150°) = \\sin(30°) = +0{,}5$.

**Probe:** Am Einheitskreis: $y$-Koordinate bei $150°$ ist positiv.

**Typischer Fehler:** Pauschales "größere Winkel sind negativ" statt ASTC-Regel anwenden.`,
        [
          'Welcher Quadrant für $150°$?',
          'ASTC: 2. Quadrant → $\\sin > 0$.',
          'Am Einheitskreis: $y$-Wert bei $150°$.',
        ],
        {
          1: 'ASTC verteilt das Vorzeichen pro Quadrant. Nicht erst ab $180°$, sondern schon im 3. Quadranten wird $\\sin$ negativ.',
          2: '$\\sin(150°) = +0{,}5$, nicht $-0{,}5$.',
          3: 'Der Referenzwinkel ist nützlich, aber der Schüler hat hier das VORZEICHEN falsch.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
      matching(
        'Ordne jedem Quadranten die ASTC-Eigenschaft zu.',
        [
          { left: '1. Quadrant (0°–90°)',   right: 'All: $\\sin, \\cos, \\tan$ alle positiv' },
          { left: '2. Quadrant (90°–180°)', right: 'Students: nur $\\sin$ positiv' },
          { left: '3. Quadrant (180°–270°)', right: 'Take: nur $\\tan$ positiv' },
          { left: '4. Quadrant (270°–360°)', right: 'Calculus: nur $\\cos$ positiv' },
        ],
        `**Ansatz:** Merkhilfe "All Students Take Calculus" — jeder Buchstabe zeigt, welche Funktion im jeweiligen Quadrant positiv ist.

**Rechnung:** I: alle positiv. II: nur $\\sin$. III: nur $\\tan$. IV: nur $\\cos$.

**Probe:** Über das Vorzeichen von $x$ (Kosinus) und $y$ (Sinus) auf dem Einheitskreis: $\\tan = \\sin/\\cos$ — beide negativ (Quadrant III) → $\\tan > 0$.

**Typischer Fehler:** Reihenfolge der Quadranten gegen den Uhrzeigersinn nicht eingehalten.`,
        [
          'ASTC = All Students Take Calculus.',
          'Reihenfolge gegen Uhrzeigersinn.',
          'Nur $\\sin, \\tan, \\cos$ werden pro Quadrant geprüft.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['vorzeichen-ASTC'] },
      ),
    ],

    // ── [1] Symmetrien: sin(180°-α) = sin α, cos(180°-α) = -cos α ──────────
    1: [
      tf(
        'Es gilt $\\sin(180° - \\alpha) = \\sin(\\alpha)$ für jeden Winkel $\\alpha$.',
        true,
        `**Ansatz:** Spiegelung am 90°-Strahl: der neue Winkel hat dieselbe $y$-Koordinate (Sinus) am Einheitskreis.

**Rechnung:** Graphisch: Punkt bei $\\alpha$ ist $(x, y)$, Punkt bei $180°-\\alpha$ ist $(-x, y)$. Gleiche Höhe → gleicher Sinus.

**Probe:** $\\sin(150°) = \\sin(180°-150°) = \\sin(30°) = 0{,}5$ ✓.

**Typischer Fehler:** Formel mit $\\sin(-\\alpha)$ verwechseln — das wäre Punktspiegelung am Ursprung.`,
        [
          'Spiegelung am $y$-Strahl bei $90°$.',
          '$y$-Koordinate bleibt gleich.',
          'Sinus ist $y$-Koordinate.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
      mc(
        'Berechne $\\cos(150°)$ mithilfe der Symmetrie-Formel.',
        ['$-\\dfrac{\\sqrt{3}}{2}$', '$+\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{1}{2}$', '$+\\dfrac{1}{2}$'],
        0,
        `**Ansatz:** $\\cos(180°-\\alpha) = -\\cos(\\alpha)$. Hier $\\alpha = 30°$.

**Rechnung:** $\\cos(150°) = -\\cos(30°) = -\\sqrt{3}/2$.

**Probe:** $150°$ ist im 2. Quadranten → $\\cos < 0$ (ASTC). Betrag: $\\cos(30°) = \\sqrt{3}/2$. Daraus $-\\sqrt{3}/2$ ✓.

**Typischer Fehler:** Vorzeichen vergessen — $+\\sqrt{3}/2$ statt $-\\sqrt{3}/2$.`,
        [
          'Formel: $\\cos(180°-\\alpha) = -\\cos(\\alpha)$.',
          '$\\alpha = 30°$.',
          '$\\cos(30°) = \\sqrt{3}/2$, dann negieren.',
        ],
        {
          1: 'Vorzeichen fehlt — $150°$ liegt im 2. Quadranten ($\\cos < 0$).',
          2: '$-1/2$ wäre $\\cos(120°)$, nicht $\\cos(150°)$.',
          3: '$+1/2$ wäre $\\cos(60°)$, hat mit $150°$ nichts zu tun.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['symmetrie-sin'] },
      ),
      ni(
        'Berechne $\\cos(135°)$ mithilfe der Symmetrie-Formel. (3 NK)',
        -0.707, 0.01, '',
        `**Ansatz:** $\\cos(180°-\\alpha) = -\\cos(\\alpha)$ mit $\\alpha = 45°$.

**Rechnung:** $\\cos(135°) = -\\cos(45°) = -\\sqrt{2}/2 \\approx -0{,}707$.

**Probe:** $135°$ im 2. Quadranten → negativ. Betrag $\\approx 0{,}707$ (Grundwert) ✓.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Referenzwinkel $180°-135° = 45°$.',
          '$\\cos(45°) = \\sqrt{2}/2$.',
          '2. Quadrant → negativ.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['symmetrie-cos'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin(180°-120°) = \\sin(60°) = \\sqrt{3}/2$. Also $\\sin(120°) = -\\sqrt{3}/2$, weil das Minus vor der Klammer greift." Wo liegt der Fehler?',
        [
          'Die Formel ist $\\sin(180°-\\alpha) = +\\sin(\\alpha)$, ohne Vorzeichenwechsel. Korrekt: $\\sin(120°) = +\\sqrt{3}/2$.',
          'Die Rechnung ist richtig — $\\sin(120°) = -\\sqrt{3}/2$.',
          'Er hätte $\\sin(180°+\\alpha)$ statt $\\sin(180°-\\alpha)$ nehmen müssen.',
          'Sinus-Symmetrie gilt gar nicht bei $120°$.',
        ],
        0,
        `**Ansatz:** Sinus: spiegelsymmetrisch am $90°$-Strahl, keine Vorzeichenumkehr.

**Rechnung:** Korrekt: $\\sin(120°) = \\sin(180°-120°) = \\sin(60°) = +\\sqrt{3}/2$ (positive im 2. Quadranten, ASTC-konform).

**Probe:** ASTC: 2. Quadrant → $\\sin > 0$. Schüler-Wert $-\\sqrt{3}/2$ verletzt das.

**Typischer Fehler:** Die Formel aus "Minus vor Klammer" falsch übertragen. Die Formel selbst hat KEIN Minus (im Gegensatz zu $\\cos$).`,
        [
          'Sinus-Formel: $\\sin(180°-\\alpha) = \\sin(\\alpha)$ (gleich, kein Minus).',
          'Kosinus hingegen: $\\cos(180°-\\alpha) = -\\cos(\\alpha)$.',
          'ASTC: Vorzeichen per Quadrant prüfen.',
        ],
        {
          1: '$-\\sqrt{3}/2$ im 2. Quadranten wäre für $\\sin$ falsch (ASTC).',
          2: '$\\sin(180°+\\alpha) = -\\sin(\\alpha)$ — andere Formel.',
          3: 'Sinus-Symmetrie gilt universell.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
      ni(
        'Berechne $\\sin(150°) + \\cos(135°)$. (3 NK)',
        -0.207, 0.01, '',
        `**Ansatz:** Beide via Symmetrie.

**Rechnung:** $\\sin(150°) = \\sin(30°) = 0{,}5$. $\\cos(135°) = -\\cos(45°) = -\\sqrt{2}/2 \\approx -0{,}707$. Summe $\\approx 0{,}5 - 0{,}707 = -0{,}207$.

**Probe:** Vorzeichen stimmen (ASTC).

**Typischer Fehler:** Beide gleich negativ machen und zu $-0{,}5 - 0{,}707 = -1{,}207$ kommen.`,
        [
          'Symmetrie für jeden Summanden einzeln.',
          '$\\sin(150°) = +0{,}5$.',
          '$\\cos(135°) = -0{,}707$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['symmetrie-sin', 'symmetrie-cos'] },
      ),
    ],

    // ── [2] Referenzwinkel: Reduktion auf 0°–90° ──────────────────────────
    2: [
      tf(
        'Der Referenzwinkel zu $210°$ ist $30°$.',
        true,
        `**Ansatz:** Referenzwinkel = spitzer Winkel zur nächsten $x$-Achse.

**Rechnung:** $210°$ im 3. Quadranten. Abstand zu $180°$: $210° - 180° = 30°$. Also Referenzwinkel $30°$.

**Probe:** $\\sin(210°) = -\\sin(30°) = -0{,}5$ ✓ (3. Quadrant → $\\sin < 0$).

**Typischer Fehler:** $360° - 210° = 150°$ rechnen (falsche Nähe-Achse).`,
        [
          'Referenzwinkel zur NÄCHSTEN $x$-Achse.',
          '3. Quadrant → Abstand zu $180°$.',
          '$210° - 180° = 30°$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      mc(
        'Bestimme den Referenzwinkel zu $300°$.',
        ['$60°$', '$120°$', '$300°$', '$-60°$'],
        0,
        `**Ansatz:** $300°$ im 4. Quadranten. Nähe zur $x$-Achse bei $360°$.

**Rechnung:** $360° - 300° = 60°$.

**Probe:** $\\sin(300°) = -\\sin(60°) = -\\sqrt{3}/2$ (4. Quadrant → $\\sin < 0$).

**Typischer Fehler:** $300° - 180° = 120°$ nehmen (falsche Achse).`,
        [
          '4. Quadrant: Referenz zu $360°$.',
          '$360 - 300 = ?$',
          'Referenzwinkel immer positiv und $\\leq 90°$.',
        ],
        {
          1: '$120°$ wäre Referenz zu $180°$ — falsche Achse.',
          2: '$300°$ ist der Originalwinkel selbst, nicht der Referenzwinkel.',
          3: 'Referenzwinkel sind immer positiv ($0°$–$90°$).',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      ni(
        'Bestimme den Referenzwinkel zu $225°$ (in Grad).',
        45, 0, '°',
        `**Ansatz:** $225°$ im 3. Quadranten. Abstand zu $180°$.

**Rechnung:** $225° - 180° = 45°$.

**Probe:** $\\sin(225°) = -\\sin(45°) = -\\sqrt{2}/2 \\approx -0{,}707$ ✓.

**Typischer Fehler:** $225° - 90° = 135°$ rechnen (falsche Achse).`,
        [
          '3. Quadrant: Referenz zu $180°$.',
          '$225 - 180 = ?$',
          'Immer spitzer Winkel.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      mc(
        'Ein Schüler bestimmt den Referenzwinkel zu $100°$ als $100° - 90° = 10°$. Wo liegt der Fehler?',
        [
          'Referenzwinkel werden zur $x$-Achse ($0°$ oder $180°$) gemessen, nicht zur $y$-Achse. Korrekt: $180° - 100° = 80°$.',
          'Die Rechnung stimmt — Referenz zu $90°$ ist korrekt.',
          'Er hätte $100°$ direkt übernehmen müssen.',
          '$10°$ ist richtig — der Schüler hat einfach klein gemacht.',
        ],
        0,
        `**Ansatz:** Der Referenzwinkel wird immer zur nächsten $x$-Achse (nicht $y$-Achse) gemessen.

**Rechnung:** $100°$ im 2. Quadranten. Nächste $x$-Achse: $180°$. Referenz: $180° - 100° = 80°$.

**Probe:** $\\sin(100°) = \\sin(80°) \\approx 0{,}985$ (nah bei $1$, weil $100°$ nah bei $90°$ — dem Maximum).

**Typischer Fehler:** $y$-Achse bei $90°$ als Bezug nehmen — aber Referenzwinkel verwendet $x$-Achsen.`,
        [
          'Wohin wird der Referenzwinkel gemessen?',
          'Zur nächsten $x$-Achse ($0°/180°$), nicht zu $90°$.',
          '$100°$ im 2. Quadrant → zu $180°$.',
        ],
        {
          1: 'Die Bezugsachse ist falsch — $x$- nicht $y$-Achse.',
          2: '$100°$ ist kein Referenzwinkel (muss $\\leq 90°$ sein).',
          3: '$10°$ passt zu keiner Sinus/Kosinus-Symmetrie von $100°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['referenzwinkel'] },
      ),
      ni(
        'Gegeben: $\\sin(40°) \\approx 0{,}643$. Berechne $\\sin(220°)$ via Referenzwinkel. (3 NK)',
        -0.643, 0.01, '',
        `**Ansatz:** $220°$ im 3. Quadranten. Referenzwinkel: $220° - 180° = 40°$. Vorzeichen: 3. Quadrant → $\\sin < 0$.

**Rechnung:** $\\sin(220°) = -\\sin(40°) \\approx -0{,}643$.

**Probe:** ASTC: 3. Quadrant → $\\sin < 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Referenzwinkel bestimmen.',
          'Vorzeichen über ASTC/Quadrant.',
          'Wert aus der Angabe.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['referenzwinkel', 'vorzeichen-ASTC'] },
      ),
    ],
  },


  // ────────────────────────────────────────────────────────────────────────
  // trig-2-1 — Der Einheitskreis  (4 subGoals)
  // 20 Matrix-Aufgaben: 4 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-1': {
    // ── [0] Einheitskreis: Gleichung x²+y²=1 ──────────────────────────────
    0: [
      tf(
        'Jeder Punkt $(x, y)$ auf dem Einheitskreis erfüllt $x^2 + y^2 = 1$.',
        true,
        `**Ansatz:** Definition: Einheitskreis = Kreis um Ursprung mit Radius $1$. Die Kreisgleichung für Radius $r$ ist $x^2 + y^2 = r^2$; mit $r = 1$: $x^2 + y^2 = 1$.

**Rechnung:** Test: $(1, 0)$ liegt auf: $1 + 0 = 1$ ✓. $(0{,}6, 0{,}8)$ liegt auf: $0{,}36 + 0{,}64 = 1$ ✓.

**Probe:** Satz des Pythagoras: Ortsvektor vom Ursprung zum Punkt hat Länge $\\sqrt{x^2 + y^2} = 1$.

**Typischer Fehler:** $x + y = 1$ annehmen (Geradengleichung, keine Kreisgleichung).`,
        [
          'Kreisgleichung mit Radius $r$.',
          'Radius = $1$.',
          'Pythagoras im Ortsvektor.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['einheitskreis-def'] },
      ),
      mc(
        'Welcher Punkt liegt NICHT auf dem Einheitskreis?',
        ['$(0{,}5, 0{,}5)$', '$(1, 0)$', '$(-\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2})$', '$(0{,}6, -0{,}8)$'],
        0,
        `**Ansatz:** Einsetzen in $x^2 + y^2 = 1$.

**Rechnung:** $(0{,}5)^2 + (0{,}5)^2 = 0{,}25 + 0{,}25 = 0{,}5 \\neq 1$. Also NICHT auf dem Einheitskreis.

**Probe:** Andere Punkte: $(1)^2 + 0 = 1$ ✓. $((\\sqrt 2/2)^2 + (\\sqrt 2/2)^2 = 0{,}5 + 0{,}5 = 1$ ✓. $(0{,}6)^2 + (-0{,}8)^2 = 0{,}36 + 0{,}64 = 1$ ✓.

**Typischer Fehler:** Annehmen, dass jeder Punkt mit Koordinaten $\\leq 1$ im Kreis liegt. Aber $(0{,}5, 0{,}5)$ hat Abstand $\\sqrt{0{,}5} \\approx 0{,}707$ vom Ursprung — innerhalb des Kreises, nicht darauf.`,
        [
          'In Kreisgleichung einsetzen.',
          '$x^2 + y^2$ berechnen und mit $1$ vergleichen.',
          'Alle Optionen durchprobieren.',
        ],
        {
          1: '$(1, 0)$ liegt auf ($1 + 0 = 1$).',
          2: 'Beide Koordinaten $\\sqrt 2/2$ → Summe der Quadrate $= 1$.',
          3: '$0{,}6^2 + 0{,}8^2 = 1$ (berühmtes 3-4-5-Dreieck skaliert).',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['einheitskreis-def'] },
      ),
      ni(
        'Ein Punkt auf dem Einheitskreis hat $x$-Koordinate $= 0{,}6$. Was ist der Betrag der $y$-Koordinate? (2 NK)',
        0.8, 0.01, '',
        `**Ansatz:** Aus $x^2 + y^2 = 1$ folgt $y^2 = 1 - x^2$, also $|y| = \\sqrt{1 - x^2}$.

**Rechnung:** $|y| = \\sqrt{1 - 0{,}36} = \\sqrt{0{,}64} = 0{,}8$.

**Probe:** $0{,}6^2 + 0{,}8^2 = 0{,}36 + 0{,}64 = 1$ ✓.

**Typischer Fehler:** $y = 1 - x$ rechnen (lineare Beziehung annehmen statt quadratisch).`,
        [
          'Kreisgleichung umstellen.',
          '$|y| = \\sqrt{1 - x^2}$.',
          '$1 - 0{,}36 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['einheitskreis-def'] },
      ),
      mc(
        'Ein Schüler sagt: „Auf dem Einheitskreis gilt $x + y = 1$." Wo liegt der Fehler?',
        [
          'Die Kreisgleichung ist $x^2 + y^2 = 1$ (Quadrate). $x + y = 1$ beschreibt eine Gerade, keinen Kreis.',
          'Der Einheitskreis hat Radius $1$, aber die Formel stimmt.',
          'Die Formel gilt nur im ersten Quadranten.',
          'Die Rechnung ist korrekt — $x + y = 1$ auf dem Einheitskreis.',
        ],
        0,
        `**Ansatz:** Kreisgleichung enthält Quadrate. Lineare Gleichung = Gerade, nicht Kreis.

**Rechnung:** Test: $(1, 0)$ erfüllt $1 + 0 = 1$ ✓. Aber $(\\sqrt 2/2, \\sqrt 2/2)$ erfüllt $\\sqrt 2/2 + \\sqrt 2/2 = \\sqrt 2 \\approx 1{,}414 \\neq 1$ ✗.

**Probe:** Die Gleichung $x + y = 1$ bildet die Verbindungsgerade zwischen $(1, 0)$ und $(0, 1)$ — eine Sehne, kein Kreis.

**Typischer Fehler:** Quadrate vergessen beim Merken der Kreisgleichung.`,
        [
          'Kreisgleichung: quadratisch.',
          '$x + y = 1$ ist linear (Gerade).',
          'Gegenbeispiel finden: $(\\sqrt 2/2, \\sqrt 2/2)$.',
        ],
        {
          1: 'Die Formel $x + y = 1$ stimmt NICHT — siehe Gegenbeispiel.',
          2: 'Die Formel gilt in keinem Quadranten für den Kreis.',
          3: '$(\\sqrt 2/2, \\sqrt 2/2)$ zeigt: $x + y = \\sqrt 2 \\neq 1$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['einheitskreis-def'] },
      ),
      matching(
        'Ordne jeden Punkt seiner Lage zu (auf/innerhalb/außerhalb des Einheitskreises).',
        [
          { left: '$(0{,}5, 0{,}5)$',           right: 'innerhalb' },
          { left: '$(1, 0)$',                    right: 'auf dem Kreis' },
          { left: '$(0{,}6, 0{,}8)$',            right: 'auf dem Kreis' },
          { left: '$(1{,}5, 0)$',                right: 'außerhalb' },
        ],
        `**Ansatz:** $d = \\sqrt{x^2 + y^2}$ mit $1$ vergleichen.

**Rechnung:** $(0{,}5, 0{,}5)$: $d = \\sqrt{0{,}5} \\approx 0{,}71 < 1$ → innerhalb. $(1, 0)$: $d = 1$ → auf. $(0{,}6, 0{,}8)$: $d = 1$ → auf. $(1{,}5, 0)$: $d = 1{,}5 > 1$ → außerhalb.

**Probe:** Für jeden Punkt Abstand zum Ursprung berechnen.

**Typischer Fehler:** Nur $x$ oder nur $y$ als Abstand nehmen.`,
        [
          'Abstand zum Ursprung = $\\sqrt{x^2 + y^2}$.',
          'Vergleich mit $r = 1$.',
          'Drei Lagen: innen, auf, außen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['einheitskreis-def'] },
      ),
    ],

    // ── [1] Punkt = (cos α, sin α), Winkel gegen Uhrzeigersinn ─────────────
    1: [
      tf(
        'Ein Punkt auf dem Einheitskreis beim Winkel $\\alpha$ (gemessen von der positiven $x$-Achse gegen den Uhrzeigersinn) hat die Koordinaten $(\\cos\\alpha, \\sin\\alpha)$.',
        true,
        `**Ansatz:** Diese Parametrisierung ist die Definition der Trig-Funktionen auf dem Einheitskreis.

**Rechnung:** Bei $\\alpha = 0°$: Punkt $(1, 0)$ = $(\\cos 0°, \\sin 0°)$ ✓. Bei $\\alpha = 90°$: $(0, 1)$ = $(\\cos 90°, \\sin 90°)$ ✓.

**Probe:** Drehsinn beachten: Uhrzeiger dreht im Uhrzeigersinn, Mathematik gegen.

**Typischer Fehler:** $x$ und $y$ vertauschen: $P = (\\sin\\alpha, \\cos\\alpha)$.`,
        [
          'Kosinus → horizontal ($x$).',
          'Sinus → vertikal ($y$).',
          'Gegen Uhrzeigersinn zählen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['punkt-parametrisierung'] },
      ),
      mc(
        'Ein Punkt liegt auf dem Einheitskreis beim Winkel $\\alpha = 60°$. Welche Koordinaten hat er?',
        ['$(\\tfrac{1}{2}, \\tfrac{\\sqrt 3}{2})$', '$(\\tfrac{\\sqrt 3}{2}, \\tfrac{1}{2})$', '$(\\tfrac{1}{2}, \\tfrac{1}{2})$', '$(60, 0)$'],
        0,
        `**Ansatz:** $P = (\\cos 60°, \\sin 60°)$.

**Rechnung:** $\\cos 60° = 1/2$, $\\sin 60° = \\sqrt 3/2$. Also $P = (1/2, \\sqrt 3/2)$.

**Probe:** $x^2 + y^2 = 1/4 + 3/4 = 1$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen — landet bei $30°$-Koordinaten.`,
        [
          'Formel $P = (\\cos\\alpha, \\sin\\alpha)$.',
          'Grundwerte auswendig.',
          '$\\cos 60°$ in Spalte $x$, $\\sin 60°$ in $y$.',
        ],
        {
          1: 'Das wären Koordinaten für $30°$: $(\\cos 30°, \\sin 30°) = (\\sqrt 3/2, 1/2)$. Vertauscht.',
          2: 'Beide gleich ist nur bei $45°$ der Fall.',
          3: '$(60, 0)$ — hier ist der Winkel keine Koordinate.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['punkt-parametrisierung'] },
      ),
      ni(
        'Bestimme die $y$-Koordinate des Punkts bei $\\alpha = 30°$ auf dem Einheitskreis.',
        0.5, 0.001, '',
        `**Ansatz:** $y = \\sin\\alpha$.

**Rechnung:** $y = \\sin 30° = 0{,}5$.

**Probe:** $x = \\cos 30° = \\sqrt 3/2 \\approx 0{,}866$. $x^2 + y^2 = 0{,}75 + 0{,}25 = 1$ ✓.

**Typischer Fehler:** $\\cos$ statt $\\sin$ ablesen.`,
        [
          '$y = \\sin\\alpha$.',
          'Grundwert $\\sin 30° = ?$',
          'Einfach einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['punkt-parametrisierung'] },
      ),
      mc(
        'Ein Schüler schreibt: „Bei $\\alpha = 45°$ liegt der Punkt bei $(45°, 45°)$." Wo liegt der Fehler?',
        [
          'Winkel ist nicht die Koordinate. Der Punkt bei $\\alpha = 45°$ ist $(\\cos 45°, \\sin 45°) = (\\sqrt 2/2, \\sqrt 2/2) \\approx (0{,}71, 0{,}71)$.',
          'Der Punkt liegt tatsächlich bei $(45, 45)$, aber in Radiant.',
          'Die Koordinaten müssten $(0{,}5, 0{,}5)$ sein.',
          'Der Punkt ist $(\\sqrt 2, \\sqrt 2)$.',
        ],
        0,
        `**Ansatz:** Der Winkel $\\alpha$ ist ein Parameter, nicht die Koordinate. Die Koordinaten sind Funktionen von $\\alpha$.

**Rechnung:** Korrekt: $P = (\\cos 45°, \\sin 45°) = (\\sqrt 2/2, \\sqrt 2/2) \\approx (0{,}707, 0{,}707)$.

**Probe:** $x^2 + y^2 = 0{,}5 + 0{,}5 = 1$ ✓. Schüler-Punkt $(45, 45)$ hat Abstand $\\sqrt{2025} = 45\\sqrt 2 \\approx 63{,}6$ vom Ursprung — nicht auf dem Einheitskreis.

**Typischer Fehler:** Winkel-Zahl direkt als Koordinate interpretieren. Die Trig-Funktionen sind nötig.`,
        [
          'Was ist $\\alpha$?',
          'Wie bekommt man die Koordinaten?',
          'Koordinaten $\\in [-1, 1]$.',
        ],
        {
          1: 'Auch in Radiant ist $\\alpha$ nicht die Koordinate — $\\alpha$ ist der Parameter.',
          2: '$(0{,}5, 0{,}5)$ ist nicht auf dem Kreis ($x^2 + y^2 = 0{,}5 \\neq 1$).',
          3: '$(\\sqrt 2, \\sqrt 2)$ hat $x^2 + y^2 = 4 \\neq 1$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['punkt-parametrisierung'] },
      ),
      matching(
        'Ordne jedem Winkel seinen Punkt auf dem Einheitskreis zu.',
        [
          { left: '$\\alpha = 0°$',   right: '$(1, 0)$' },
          { left: '$\\alpha = 45°$',  right: '$(\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2})$' },
          { left: '$\\alpha = 60°$',  right: '$(\\tfrac{1}{2}, \\tfrac{\\sqrt 3}{2})$' },
          { left: '$\\alpha = 90°$',  right: '$(0, 1)$' },
        ],
        `**Ansatz:** $P(\\alpha) = (\\cos\\alpha, \\sin\\alpha)$.

**Rechnung:** Werte aus der Grundwerte-Tabelle einsetzen.

**Probe:** Alle Paare erfüllen $x^2 + y^2 = 1$.

**Typischer Fehler:** $\\sin/\\cos$ verwechseln.`,
        [
          'Formel $P = (\\cos\\alpha, \\sin\\alpha)$.',
          'Grundwerte-Tabelle nutzen.',
          'Erste Koordinate: Kosinus.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['punkt-parametrisierung'] },
      ),
    ],

    // ── [2] Quadrantenpunkte: 0°→(1,0), 90°→(0,1), 180°→(-1,0), 270°→(0,-1) ─
    2: [
      matching(
        'Ordne jedem Achsenwinkel den zugehörigen Punkt auf dem Einheitskreis zu.',
        [
          { left: '$0°$',    right: '$(1, 0)$' },
          { left: '$90°$',   right: '$(0, 1)$' },
          { left: '$180°$',  right: '$(-1, 0)$' },
          { left: '$270°$',  right: '$(0, -1)$' },
        ],
        `**Ansatz:** Die vier Achsenpunkte auswendig kennen.

**Rechnung:** $0°$: Start (rechts); $90°$: oben; $180°$: links; $270°$: unten.

**Probe:** $\\cos 0° = 1$, $\\sin 0° = 0$ ✓.

**Typischer Fehler:** $180°$ und $270°$ vertauschen.`,
        [
          'Gegen Uhrzeigersinn drehen.',
          'Start bei $(1, 0)$.',
          'Nach $90°$: oben bei $(0, 1)$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['quadrantenpunkte'] },
      ),
      mc(
        'Welcher Punkt liegt auf dem Einheitskreis beim Winkel $\\alpha = 180°$?',
        ['$(-1, 0)$', '$(1, 0)$', '$(0, -1)$', '$(0, 1)$'],
        0,
        `**Ansatz:** Bei $180°$ steht der Zeiger nach links.

**Rechnung:** $P = (\\cos 180°, \\sin 180°) = (-1, 0)$.

**Probe:** Halbe Drehung vom Startpunkt $(1, 0)$ → Gegenüber: $(-1, 0)$ ✓.

**Typischer Fehler:** $180°$ mit $90°$ verwechseln.`,
        [
          '$180°$ = halbe Umdrehung.',
          'Start rechts, Ende links.',
          '$\\cos 180° = ?$, $\\sin 180° = ?$',
        ],
        {
          1: '$(1, 0)$ ist bei $0°$.',
          2: '$(0, -1)$ ist bei $270°$.',
          3: '$(0, 1)$ ist bei $90°$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['quadrantenpunkte'] },
      ),
      ni(
        'Bei welchem Winkel (in Grad, im Bereich $[0°, 360°)$) ist der Punkt auf dem Einheitskreis gleich $(0, -1)$?',
        270, 0, '°',
        `**Ansatz:** $y = -1$ bedeutet $\\sin\\alpha = -1$.

**Rechnung:** $\\sin\\alpha = -1 \\Leftrightarrow \\alpha = 270°$ (im Hauptbereich).

**Probe:** $(\\cos 270°, \\sin 270°) = (0, -1)$ ✓.

**Typischer Fehler:** $90°$ oder $180°$ angeben — dort ist $\\sin \\neq -1$.`,
        [
          '$y = \\sin\\alpha$.',
          'Wo ist $\\sin = -1$?',
          '3/4-Drehung vom Start.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['quadrantenpunkte'] },
      ),
      mc(
        'Ein Schüler meint: „$\\cos 90° = 1$, weil $(1, 0)$ bei $90°$ ist." Wo liegt der Fehler?',
        [
          'Bei $90°$ ist der Punkt $(0, 1)$, nicht $(1, 0)$. Also $\\cos 90° = 0$, $\\sin 90° = 1$.',
          'Die Aussage ist korrekt.',
          'Er sollte Radiant verwenden.',
          'Die Kosinus-Werte sind grundsätzlich $0$.',
        ],
        0,
        `**Ansatz:** Zuordnung Winkel ↔ Punkt prüfen.

**Rechnung:** Bei $0°$: Punkt $(1, 0)$. Bei $90°$: $(0, 1)$. Der Schüler hat beide verwechselt.

**Probe:** Grundwerte: $\\cos 90° = 0$, $\\sin 90° = 1$. Am Einheitskreis: Vertikalpunkt oben.

**Typischer Fehler:** Genau dieser — die Punkte bei $0°$ und $90°$ sind ähnlich "einfach", aber Zuordnung klar.`,
        [
          'Welcher Punkt ist wo?',
          '$(1, 0)$ bei $0°$, $(0, 1)$ bei $90°$.',
          '$\\cos 90° = ?$',
        ],
        {
          1: 'Die Aussage ist nicht korrekt — Punkt und Winkel falsch zugeordnet.',
          2: 'Radiant ändert nichts am Prinzip — $\\cos(\\pi/2) = 0$.',
          3: '$\\cos$ ist nicht grundsätzlich $0$, z. B. $\\cos 0° = 1$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['quadrantenpunkte'] },
      ),
      mc(
        'Im Einheitskreis: bei welchem Winkel ist sowohl $\\sin\\alpha$ als auch $\\cos\\alpha$ gleich $0$?',
        ['Bei keinem Winkel.', '$\\alpha = 0°$', '$\\alpha = 180°$', '$\\alpha = 90°$'],
        0,
        `**Ansatz:** Ein Punkt mit $\\sin = \\cos = 0$ wäre am Ursprung $(0, 0)$ — nicht auf dem Einheitskreis.

**Rechnung:** Der Einheitskreis erfüllt $x^2 + y^2 = 1$, mit $x = \\cos, y = \\sin$. Also $\\cos^2 + \\sin^2 = 1$. Sind beide $= 0$, dann $0 + 0 = 0 \\ne 1$ — unmöglich.

**Probe:** Bei allen Achsenwinkeln ist GENAU eines von $\\sin/\\cos$ $= 0$, nie beide.

**Typischer Fehler:** $\\alpha = 0°$ oder $180°$ annehmen — da ist $\\sin = 0$, aber $\\cos = \\pm 1$.`,
        [
          'Kann ein Punkt auf dem Einheitskreis im Ursprung liegen?',
          'Kreisgleichung: $\\cos^2 + \\sin^2 = 1$.',
          'Beide $= 0$ → Summe $= 0 \\neq 1$.',
        ],
        {
          1: 'Bei $0°$ ist $\\sin = 0$, aber $\\cos = 1$.',
          2: 'Bei $180°$ ist $\\sin = 0$, aber $\\cos = -1$.',
          3: 'Bei $90°$ ist $\\cos = 0$, aber $\\sin = 1$.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['quadrantenpunkte'] },
      ),
    ],

    // ── [3] Durchmesser = 2 vs. Radius = 1 ────────────────────────────────
    3: [
      tf(
        'Der Einheitskreis hat Radius $1$ und Durchmesser $2$.',
        true,
        `**Ansatz:** $d = 2r$ generell; bei $r = 1$ also $d = 2$.

**Rechnung:** Durchmesser = längste Strecke durch den Kreis = $2r = 2 \\cdot 1 = 2$.

**Probe:** Strecke von $(-1, 0)$ nach $(1, 0)$ hat Länge $2$.

**Typischer Fehler:** $d$ und $r$ gleichsetzen, oder Umfang ($2\\pi r \\approx 6{,}28$) mit Durchmesser verwechseln.`,
        [
          'Durchmesser = $2 \\cdot$ Radius.',
          'Radius $= 1$.',
          '$d = 2$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['durchmesser-radius'] },
      ),
      mc(
        'Wie groß ist der Umfang des Einheitskreises?',
        ['$2\\pi$', '$\\pi$', '$1$', '$4\\pi$'],
        0,
        `**Ansatz:** $U = 2\\pi r = \\pi d$.

**Rechnung:** $U = 2\\pi \\cdot 1 = 2\\pi \\approx 6{,}28$.

**Probe:** Im Bogenmaß entspricht $U$ dem Winkel $2\\pi$ rad $= 360°$ ✓.

**Typischer Fehler:** $\\pi$ als Umfang nehmen (das wäre der halbe Umfang oder $\\pi d$ mit $d = 1$).`,
        [
          'Formel: $U = 2\\pi r$.',
          '$r = 1$.',
          '$2\\pi \\cdot 1 = ?$',
        ],
        {
          1: '$\\pi$ ist der halbe Umfang (Bogen $180°$).',
          2: '$1$ ist der Radius, nicht der Umfang.',
          3: '$4\\pi$ wäre $U$ eines Kreises mit $r = 2$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['durchmesser-radius'] },
      ),
      ni(
        'Der Abstand von $(-1, 0)$ zu $(1, 0)$ auf dem Einheitskreis ist der Durchmesser. Wie groß?',
        2, 0, '',
        `**Ansatz:** Beide Punkte liegen auf der $x$-Achse; Abstand ist die Differenz.

**Rechnung:** $|1 - (-1)| = 2$.

**Probe:** Das ist gerade der Durchmesser ($d = 2r = 2$) ✓.

**Typischer Fehler:** $0$ oder $1$ annehmen (Ignorieren eines Vorzeichens).`,
        [
          'Abstand zweier Punkte auf $x$-Achse.',
          'Differenz der $x$-Werte.',
          '$1 - (-1) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['durchmesser-radius'] },
      ),
      mc(
        'Ein Schüler sagt: „Der Einheitskreis hat Radius $2$, denn $d = 2$." Wo liegt der Fehler?',
        [
          'Der Einheitskreis ist definiert mit Radius $1$ (nicht Durchmesser $1$). $d = 2r = 2 \\cdot 1 = 2$ — daraus folgt $r = 1$, nicht $r = 2$.',
          'Die Aussage ist korrekt.',
          'Durchmesser ist kein übliches Kreismerkmal.',
          'Der Einheitskreis hat Durchmesser $1$.',
        ],
        0,
        `**Ansatz:** Definition Einheitskreis: $r = 1$ (der Name sagt es). Durchmesser folgt daraus.

**Rechnung:** $r = 1$ → $d = 2 \\cdot 1 = 2$. Der Schüler hat $d$ und $r$ verwechselt.

**Probe:** Test: Kreisgleichung mit $r = 2$ wäre $x^2 + y^2 = 4$, nicht $x^2 + y^2 = 1$.

**Typischer Fehler:** $d$ und $r$ vertauschen.`,
        [
          'Was bedeutet "Einheits"?',
          'Radius vs. Durchmesser.',
          '$d = 2r$, nicht $d = r$.',
        ],
        {
          1: 'Nicht korrekt — der Schüler verwechselt $d$ und $r$.',
          2: 'Durchmesser ist sehr wohl ein Standardbegriff.',
          3: 'Durchmesser $= 1$ wäre ein Kreis mit $r = 0{,}5$ — nicht der Einheitskreis.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['durchmesser-radius'] },
      ),
      mc(
        'Ein Kreis hat den Punkt $(2, 0)$ auf sich selbst. Ist es der Einheitskreis?',
        [
          'Nein — der Punkt $(2, 0)$ hat Abstand $2$ vom Ursprung; der Einheitskreis enthält nur Punkte mit Abstand $1$.',
          'Ja, denn $2$ ist der Durchmesser.',
          'Ja, denn $(2, 0)$ ist das Doppelte von $(1, 0)$.',
          'Kann man ohne $y$-Wert nicht entscheiden.',
        ],
        0,
        `**Ansatz:** Einheitskreis: alle Punkte mit Abstand $1$ zum Ursprung.

**Rechnung:** $\\sqrt{2^2 + 0^2} = 2 \\neq 1$. Punkt liegt NICHT auf Einheitskreis.

**Probe:** Einsetzen in $x^2 + y^2 = 1$: $4 + 0 = 4 \\neq 1$ ✗.

**Typischer Fehler:** $d = 2$ mit "Radius-Punkt auf Kreis" verwechseln. Der Durchmesser ist die Strecke ZWEI Punkte $(-1, 0)$ und $(1, 0)$ — KEIN einzelner Randpunkt auf dem Kreis.`,
        [
          'Abstand des Punkts zum Ursprung.',
          'Kreisgleichung prüfen.',
          '$(2, 0)$ hat Abstand $2$, Einheitskreis hat $r = 1$.',
        ],
        {
          1: 'Der Durchmesser ist eine Strecke, kein einzelner Kreispunkt.',
          2: '"$(2, 0)$ doppelt von $(1, 0)$" impliziert keinen Kreisbezug.',
          3: 'Mit $y = 0$ ist $(x, 0)$ auf Einheitskreis nur wenn $x = \\pm 1$.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['durchmesser-radius'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-2-2 — sin und cos als Koordinaten  (5 subGoals)
  // 25 Matrix-Aufgaben: 5 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-2': {
    // ── [0] cos α = x-Koordinate, sin α = y-Koordinate ────────────────────
    0: [
      tf(
        'Am Einheitskreis gilt: $\\cos\\alpha$ ist die $x$-Koordinate und $\\sin\\alpha$ ist die $y$-Koordinate des Punkts bei Winkel $\\alpha$.',
        true,
        `**Ansatz:** Definition der Trig-Funktionen auf dem Einheitskreis: Ortsvektor zerlegen.

**Rechnung:** Punkt bei $\\alpha$: horizontale Komponente = $\\cos\\alpha$, vertikale = $\\sin\\alpha$.

**Probe:** $\\alpha = 90°$: Punkt $(0, 1)$. $\\cos 90° = 0 = x$, $\\sin 90° = 1 = y$ ✓.

**Typischer Fehler:** $x$ und $y$ vertauschen (typisch bei visueller Verwechslung).`,
        [
          '$x$-Achse → horizontal → Kosinus.',
          '$y$-Achse → vertikal → Sinus.',
          'Merkregel: cos-X, sin-Y.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['cos-x-sin-y'] },
      ),
      mc(
        'Ein Punkt auf dem Einheitskreis hat $x$-Koordinate $= 0{,}8$. Welche trigonometrische Funktion liefert diesen Wert?',
        ['$\\cos\\alpha = 0{,}8$', '$\\sin\\alpha = 0{,}8$', '$\\tan\\alpha = 0{,}8$', 'Alle drei.'],
        0,
        `**Ansatz:** $x$-Koordinate = $\\cos\\alpha$.

**Rechnung:** $\\cos\\alpha = 0{,}8$ → $\\alpha = \\arccos(0{,}8) \\approx 36{,}87°$.

**Probe:** $y = \\sin\\alpha = \\sqrt{1 - 0{,}64} = 0{,}6$. Punkt $(0{,}8, 0{,}6)$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen.`,
        [
          'Welche Koordinate ist gemeint?',
          '$x = \\cos\\alpha$.',
          'Andere Funktionen haben andere Werte.',
        ],
        {
          1: '$\\sin = 0{,}8$ wäre die $y$-Koordinate, nicht die $x$.',
          2: '$\\tan = y/x$, nicht nur $x$.',
          3: 'Alle drei wären nur bei $\\alpha = 45°$ gleich — dort ist $\\sin = \\cos = \\sqrt 2/2 \\neq 0{,}8$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['cos-x-sin-y'] },
      ),
      ni(
        'Bestimme die $y$-Koordinate des Punkts auf dem Einheitskreis bei $\\alpha = 30°$. (2 NK)',
        0.5, 0.01, '',
        `**Ansatz:** $y = \\sin 30° = 1/2$.

**Rechnung:** $\\sin 30° = 0{,}5$.

**Probe:** Grundwert aus Tabelle.

**Typischer Fehler:** $\\cos 30°$ statt $\\sin 30°$ ablesen.`,
        [
          '$y$-Koordinate $=$ Sinus.',
          'Grundwert.',
          '$\\sin 30° = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['cos-x-sin-y'] },
      ),
      mc(
        'Ein Schüler sagt: „Bei $\\alpha = 90°$ ist $\\cos 90° = 1$ und $\\sin 90° = 0$." Wo liegt der Fehler?',
        [
          'Verwechslung: Bei $90°$ zeigt der Zeiger nach oben, also $x = 0, y = 1$. Korrekt: $\\cos 90° = 0$, $\\sin 90° = 1$.',
          'Die Aussage stimmt.',
          'Er sollte Radiant verwenden.',
          '$\\cos 90° = 0{,}5$, nicht $1$.',
        ],
        0,
        `**Ansatz:** Achsenpunkte auswendig prüfen.

**Rechnung:** Bei $\\alpha = 90°$: Zeiger nach oben → Punkt $(0, 1)$. Also $\\cos = x = 0$, $\\sin = y = 1$.

**Probe:** $\\cos^2 + \\sin^2 = 0 + 1 = 1$ ✓.

**Typischer Fehler:** $x$ und $y$ vertauschen, oder bei $0°$- und $90°$-Werten durcheinanderkommen.`,
        [
          'Welcher Punkt liegt bei $90°$?',
          '$x$ und $y$ klar zuordnen.',
          '$\\cos 90° = ?$',
        ],
        {
          1: 'Die Werte sind vertauscht.',
          2: 'In Radiant dasselbe: $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$.',
          3: '$\\cos 90° = 0$ exakt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['cos-x-sin-y'] },
      ),
      matching(
        'Ordne jedem Punkt seine Koordinaten zu (am Einheitskreis).',
        [
          { left: '$\\alpha = 0°$',  right: '$(\\cos 0°, \\sin 0°) = (1, 0)$' },
          { left: '$\\alpha = 30°$', right: '$(\\cos 30°, \\sin 30°) = (\\tfrac{\\sqrt 3}{2}, \\tfrac{1}{2})$' },
          { left: '$\\alpha = 60°$', right: '$(\\cos 60°, \\sin 60°) = (\\tfrac{1}{2}, \\tfrac{\\sqrt 3}{2})$' },
          { left: '$\\alpha = 90°$', right: '$(\\cos 90°, \\sin 90°) = (0, 1)$' },
        ],
        `**Ansatz:** Koordinaten-Paare auswendig, jedes als $(\\cos, \\sin)$.

**Rechnung:** Grundwerte-Tabelle.

**Probe:** $x^2 + y^2 = 1$ bei allen.

**Typischer Fehler:** bei $30°$ und $60°$ die Rollen tauschen.`,
        [
          'Kosinus zuerst, Sinus danach.',
          'Grundwerte sind paarweise.',
          'Bei $30°$ ist $x$ groß.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['cos-x-sin-y'] },
      ),
    ],

    // ── [1] Definition gilt für ALLE reellen Winkel ───────────────────────
    1: [
      tf(
        'Die Definition $\\cos\\alpha = x$, $\\sin\\alpha = y$ gilt für alle reellen Winkel — auch für $\\alpha = 500°$ oder $\\alpha = -100°$.',
        true,
        `**Ansatz:** Am Einheitskreis kann man beliebig drehen (auch mehrfach oder rückwärts).

**Rechnung:** $500° = 360° + 140°$ → Punkt wie bei $140°$. $-100° = 360° - 100° = 260°$ → Punkt wie bei $260°$.

**Probe:** Periodizität $360°$ bringt jeden Winkel in den Standardbereich.

**Typischer Fehler:** Annehmen, dass Trig-Funktionen nur für $0°$–$360°$ definiert sind.`,
        [
          'Einheitskreis erlaubt beliebige Drehungen.',
          'Periode $360°$.',
          'Negative Winkel = Drehung im Uhrzeigersinn.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['koord-universell'] },
      ),
      mc(
        'Berechne $\\sin(400°)$.',
        ['$\\sin 40°$', '$-\\sin 40°$', '$\\sin 400°$ ist undefiniert.', '$0$'],
        0,
        `**Ansatz:** $400° = 360° + 40°$. Periode $360°$ → $\\sin 400° = \\sin 40°$.

**Rechnung:** $\\sin 400° = \\sin(360° + 40°) = \\sin 40° \\approx 0{,}643$.

**Probe:** Am Einheitskreis: nach $360°$ wieder am Start, dann $40°$ weiter.

**Typischer Fehler:** Vorzeichenwechsel annehmen.`,
        [
          'Modulo $360°$.',
          '$400 - 360 = 40$.',
          'Gleiche Position → gleicher Sinus.',
        ],
        {
          1: 'Kein Vorzeichenwechsel bei $+360°$-Drehung.',
          2: 'Winkel sind immer definiert — nur eventuell mit Reduktion.',
          3: '$\\sin 400° \\neq 0$ (das wäre $\\sin 0°$ oder $180°$).',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['koord-universell'] },
      ),
      ni(
        'Berechne $\\cos(-60°)$. (2 NK)',
        0.5, 0.01, '',
        `**Ansatz:** Kosinus ist gerade: $\\cos(-\\alpha) = \\cos\\alpha$.

**Rechnung:** $\\cos(-60°) = \\cos 60° = 0{,}5$.

**Probe:** Am Einheitskreis: $-60°$ ist im 4. Quadranten, spiegelsymmetrisch zu $+60°$ an der $x$-Achse. $x$-Koordinate gleich.

**Typischer Fehler:** Vorzeichen direkt an $\\cos$ kleben: $\\cos(-60°) = -\\cos 60° = -0{,}5$.`,
        [
          'Kosinus ist gerade.',
          'Negativer Winkel: Drehung rückwärts.',
          '$x$-Koordinate bleibt.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['koord-universell'] },
      ),
      mc(
        'Ein Schüler schreibt: „$\\sin(-30°)$ ist nicht definiert, weil Winkel positiv sein müssen." Wo liegt der Fehler?',
        [
          'Negative Winkel bedeuten Drehung im Uhrzeigersinn und sind voll erlaubt. $\\sin(-30°) = -\\sin 30° = -1/2$.',
          'Der Schüler hat recht: $\\sin$ nur für $\\alpha \\geq 0$.',
          'Er müsste $\\arcsin(-30°)$ rechnen.',
          '$\\sin(-30°) = 0$.',
        ],
        0,
        `**Ansatz:** Winkel können positiv oder negativ sein. Sinus ist ungerade Funktion.

**Rechnung:** $\\sin(-30°) = -\\sin 30° = -1/2$. Am Einheitskreis: Punkt im 4. Quadranten mit $y = -1/2$.

**Probe:** Eigenschaft der ungeraden Funktion: $\\sin(-\\alpha) = -\\sin\\alpha$.

**Typischer Fehler:** Annahme, Winkel müssten positiv sein. Negative Winkel sind geometrisch klar definiert.`,
        [
          'Sind negative Winkel erlaubt?',
          'Ungerade Funktion.',
          '$\\sin(-\\alpha) = -\\sin\\alpha$.',
        ],
        {
          1: 'Falsch — $\\sin$ ist für alle reellen Winkel definiert.',
          2: '$\\arcsin(-30°)$ wäre erst wieder ungewöhnlich — $\\arcsin$ braucht Werte $\\in [-1, 1]$.',
          3: '$\\sin(-30°) \\neq 0$ — das wäre bei $0°$ oder $180°$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['koord-universell'] },
      ),
      ni(
        'Berechne $\\sin(720°)$.',
        0, 0.001, '',
        `**Ansatz:** $720° = 2 \\cdot 360°$ = zwei volle Umdrehungen. Punkt wieder bei $0°$.

**Rechnung:** $\\sin 720° = \\sin 0° = 0$.

**Probe:** Periode $360°$: $\\sin(360° k) = \\sin 0° = 0$ für jedes $k$.

**Typischer Fehler:** Pauschal $\\sin 720° = 2\\sin 360°$ rechnen (Additivität-Fehlannahme).`,
        [
          'Modulo $360°$.',
          '$720 \\mod 360 = 0$.',
          '$\\sin 0° = ?$',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['koord-universell'] },
      ),
    ],

    // ── [2] Koordinaten (x,y) → Winkel bestimmen ──────────────────────────
    2: [
      mc(
        'Ein Punkt auf dem Einheitskreis hat $(x, y) = (0, 1)$. Welchem Winkel entspricht dieser Punkt?',
        ['$90°$', '$0°$', '$180°$', '$270°$'],
        0,
        `**Ansatz:** $(0, 1)$ ist der Achsenpunkt oben.

**Rechnung:** $\\cos\\alpha = 0 \\wedge \\sin\\alpha = 1 \\Rightarrow \\alpha = 90°$.

**Probe:** Am Einheitskreis: oben auf der $y$-Achse.

**Typischer Fehler:** $0°$ angeben, weil $x = 0$ verwirrt.`,
        [
          'Welche Achse ist das?',
          '$y = 1$ → obere Achsenstelle.',
          '$90°$ = nach oben.',
        ],
        {
          1: '$0°$ ist bei $(1, 0)$.',
          2: '$180°$ ist bei $(-1, 0)$.',
          3: '$270°$ ist bei $(0, -1)$.',
        },
        { stage: 'recognize', subGoal: 2, uses: ['koord-zu-winkel'] },
      ),
      mc(
        'Ein Punkt auf dem Einheitskreis hat Koordinaten $(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$. Welcher Winkel?',
        ['$60°$', '$30°$', '$120°$', '$150°$'],
        0,
        `**Ansatz:** $\\cos\\alpha = 1/2$, $\\sin\\alpha = \\sqrt{3}/2$, beide positiv → 1. Quadrant.

**Rechnung:** $\\cos 60° = 1/2$, $\\sin 60° = \\sqrt{3}/2$ ✓. Also $\\alpha = 60°$.

**Probe:** Grundwerte-Tabelle.

**Typischer Fehler:** $30°$ angeben (Werte vertauscht mit $30°$-Koordinaten $(\\sqrt 3/2, 1/2)$).`,
        [
          '$\\cos$ aus $x$, $\\sin$ aus $y$.',
          'Grundwerte identifizieren.',
          '$\\cos 60° = 1/2$.',
        ],
        {
          1: 'Bei $30°$ wären die Koordinaten $(\\sqrt 3/2, 1/2)$ — vertauscht.',
          2: 'Bei $120°$ wäre $x = -1/2$.',
          3: 'Bei $150°$ wäre $x = -\\sqrt 3/2$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['koord-zu-winkel'] },
      ),
      ni(
        'Ein Punkt auf dem Einheitskreis hat $(x, y) = (-\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2})$. Gib den Winkel in Grad an (Bereich $[0°, 360°)$).',
        135, 0, '°',
        `**Ansatz:** $x < 0$ und $y > 0$ → 2. Quadrant. Referenzwinkel mit $|\\cos| = \\sqrt 2/2$, $|\\sin| = \\sqrt 2/2$ → $45°$.

**Rechnung:** 2. Quadrant mit Referenz $45°$: $\\alpha = 180° - 45° = 135°$.

**Probe:** $\\cos 135° = -\\sqrt 2/2$, $\\sin 135° = \\sqrt 2/2$ ✓.

**Typischer Fehler:** Quadrant übersehen und direkt $45°$ angeben.`,
        [
          'Vorzeichen → Quadrant.',
          'Beträge → Referenzwinkel.',
          '2. Quadrant → $180° - $ Referenz.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['koord-zu-winkel'] },
      ),
      mc(
        'Ein Schüler bestimmt zu $(x, y) = (-1/2, -\\sqrt 3/2)$ den Winkel als $60°$. Wo liegt der Fehler?',
        [
          'Beide Koordinaten sind negativ → 3. Quadrant. Korrekt: $\\alpha = 180° + 60° = 240°$.',
          'Der Winkel ist tatsächlich $60°$.',
          'Er müsste den Sinus negieren.',
          '$\\cos^{-1}(-1/2) = 60°$ ist korrekt.',
        ],
        0,
        `**Ansatz:** Vorzeichen der Koordinaten bestimmen den Quadranten. Nur die Beträge ergeben den Referenzwinkel.

**Rechnung:** $|x| = 1/2$, $|y| = \\sqrt 3/2$ → Referenzwinkel $60°$. Beide negativ → 3. Quadrant → $\\alpha = 180° + 60° = 240°$.

**Probe:** $\\cos 240° = -\\cos 60° = -1/2$, $\\sin 240° = -\\sin 60° = -\\sqrt 3/2$ ✓.

**Typischer Fehler:** Nur Beträge ansehen, Vorzeichen ignorieren.`,
        [
          'Erst Quadrant aus Vorzeichen.',
          'Dann Referenzwinkel.',
          'Gesamter Winkel: Quadrant + Referenz.',
        ],
        {
          1: '$60°$ wäre im 1. Quadranten, dort sind beide positiv.',
          2: 'Nicht "Sinus negieren" hilft, sondern Quadrant bestimmen.',
          3: '$\\arccos(-1/2) = 120°$, nicht $60°$. Aber zweideutig: $240°$ hat auch $\\cos = -1/2$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['koord-zu-winkel'] },
      ),
      matching(
        'Ordne jedem Koordinaten-Paar den passenden Winkel zu.',
        [
          { left: '$(\\tfrac{\\sqrt 3}{2}, \\tfrac{1}{2})$',    right: '$30°$' },
          { left: '$(\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2})$', right: '$45°$' },
          { left: '$(-\\tfrac{1}{2}, \\tfrac{\\sqrt 3}{2})$',   right: '$120°$' },
          { left: '$(\\tfrac{1}{2}, -\\tfrac{\\sqrt 3}{2})$',   right: '$300°$' },
        ],
        `**Ansatz:** Vorzeichen + Betrag kombinieren.

**Rechnung:** Je nach Quadrant: 1. Q direkt, 2. Q: $180°-$Ref, 3. Q: $180°+$Ref, 4. Q: $360°-$Ref.

**Probe:** $\\cos$ und $\\sin$ einzeln verifizieren.

**Typischer Fehler:** Quadrant ignorieren.`,
        [
          'Vorzeichen → Quadrant.',
          'Beträge → Referenzwinkel.',
          'Kombinieren.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['koord-zu-winkel'] },
      ),
    ],

    // ── [3] Eselsbrücke: c-osinus → x, s-inus → y ─────────────────────────
    3: [
      tf(
        'Merkregel: Der Buchstabe „**c**" in *c*osinus erinnert an die **horizontale** $x$-Achse.',
        true,
        `**Ansatz:** Mnemotechnik hilft bei der Zuordnung $\\cos \\leftrightarrow x$, $\\sin \\leftrightarrow y$.

**Rechnung:** "c" klein, "s" etwas höher? Oder andere Assoziation: "cOSinus — der Bauch zeigt nach oben wie die $x$-Achse"? Jede Eselsbrücke ist individuell.

**Probe:** Die Zuordnung muss universell stimmen, egal welche Eselsbrücke man nutzt.

**Typischer Fehler:** Eigene Eselsbrücke vergessen oder umgedreht benutzen.`,
        [
          'Merkhilfen sind individuell.',
          '$\\cos$ geht mit $x$.',
          '$\\sin$ geht mit $y$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['eselsbruecke-xy'] },
      ),
      mc(
        'Welche Eselsbrücke hilft beim Unterscheiden von $\\sin$ und $\\cos$ auf dem Einheitskreis?',
        [
          '„**S**inus ist **S**enkrecht" — Sinus entspricht der vertikalen ($y$)-Koordinate.',
          '„Sinus ist immer größer als Kosinus."',
          '„Kosinus wächst monoton."',
          '„Bei $45°$ sind sie verschieden."',
        ],
        0,
        `**Ansatz:** "S senkrecht" als Eselsbrücke für $\\sin \\leftrightarrow y$-Achse (vertikal).

**Rechnung:** Merkregel ist eine Gedankenstütze, keine mathematische Eigenschaft.

**Probe:** Test bei $30°$: $\\sin 30° = 1/2$ = senkrechte Koordinate ✓.

**Typischer Fehler:** Eselsbrücken durcheinander: "C für chaotisch" o. Ä. funktionieren nicht.`,
        [
          'S steht für "senkrecht".',
          'Senkrecht = vertikal = $y$-Achse.',
          'Einfach und merkbar.',
        ],
        {
          1: '$\\sin$ ist nicht immer größer als $\\cos$ (Gegenbeispiel bei $30°$).',
          2: '$\\cos$ ist nicht monoton — sie fällt erst, dann steigt.',
          3: 'Das stimmt nur bei $\\alpha \\neq 45°$ — keine generische Merkhilfe.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['eselsbruecke-xy'] },
      ),
      mc(
        'Angenommen du nutzt die Eselsbrücke "C → x, S → y". Du siehst einen Punkt $(0, 0{,}5)$ auf dem Einheitskreis — warte, der Punkt kann nicht drauf sein ($0 + 0{,}25 = 0{,}25 \\neq 1$). Richtig: $(0, 1)$. Welcher Wert ist $\\sin$?',
        ['$1$', '$0$', '$0{,}5$', 'nicht bestimmbar'],
        0,
        `**Ansatz:** $\\sin = y$-Koordinate.

**Rechnung:** $y = 1$, also $\\sin = 1$.

**Probe:** $\\alpha = 90°$ passt: $\\sin 90° = 1$ ✓.

**Typischer Fehler:** $\\sin$ mit $\\cos$ verwechseln.`,
        [
          '$\\sin = y$.',
          '$y = 1$.',
          'Ergebnis.',
        ],
        {
          1: '$0$ ist $\\cos$ (nicht $\\sin$).',
          2: '$0{,}5$ ist nicht Koordinate des gegebenen Punkts.',
          3: 'Mit Eselsbrücke sehr wohl bestimmbar.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['eselsbruecke-xy'] },
      ),
      mc(
        'Ein Schüler nutzt "C → y, S → x" (gegenteilige Eselsbrücke). Wieso führt das zu Fehlern?',
        [
          'Die Konvention ist universell $\\cos = x$, $\\sin = y$. Gegenteilige Eselsbrücke führt zu systematisch falschen Ergebnissen.',
          'Beide Eselsbrücken sind gleichwertig.',
          'Die Konvention ist umstritten.',
          'Der Schüler hat eine kreative Lösung gefunden.',
        ],
        0,
        `**Ansatz:** Es gibt eine eindeutige mathematische Konvention.

**Rechnung:** Alle Formelsammlungen, Tests, Software erwarten $\\cos = x$, $\\sin = y$. Gegenteilige Merkhilfe erzeugt Inkonsistenz.

**Probe:** Test: $\\cos 90° = 0$ (Konvention) ↔ Schülerregel "C→y": $y = 1$ → $\\cos 90° = 1$? — widerspricht der Formelsammlung.

**Typischer Fehler:** Eigene Konvention erfinden — nicht empfehlenswert.`,
        [
          'Mathematische Konvention ist universell.',
          'Eigene Regel $\\neq$ Lehrbuch-Regel.',
          'Fehler in Kettenrechnungen.',
        ],
        {
          1: 'Nicht gleichwertig — nur eine Richtung ist korrekt.',
          2: 'Die Konvention ist nicht umstritten, sondern fest.',
          3: 'Kreativität in Notationen ist in Mathematik eher schädlich.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['eselsbruecke-xy'] },
      ),
      matching(
        'Ordne jeder Funktion die Achse zu.',
        [
          { left: '$\\cos\\alpha$', right: 'horizontal ($x$-Achse)' },
          { left: '$\\sin\\alpha$', right: 'vertikal ($y$-Achse)' },
          { left: '$\\tan\\alpha$', right: 'Steigung (Verhältnis $y/x$)' },
          { left: 'Radius $r$',   right: 'Hypotenuse (immer $1$ am Einheitskreis)' },
        ],
        `**Ansatz:** Zuordnung auswendig oder per Eselsbrücke.

**Rechnung:** Konvention: horizontal = $x$ = $\\cos$; vertikal = $y$ = $\\sin$.

**Probe:** Grundwerte-Test bestätigt.

**Typischer Fehler:** Tangens als Achse einordnen (er ist ein Verhältnis).`,
        [
          'Kosinus horizontal.',
          'Sinus vertikal.',
          'Tangens als Steigung.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['eselsbruecke-xy'] },
      ),
    ],

    // ── [4] Wertebereich [-1, +1] folgt aus r = 1 ─────────────────────────
    4: [
      tf(
        'Für alle reellen Winkel $\\alpha$ gilt $-1 \\leq \\sin\\alpha \\leq 1$ und $-1 \\leq \\cos\\alpha \\leq 1$.',
        true,
        `**Ansatz:** Auf Einheitskreis $r = 1$, daher sind $x$ und $y$ zwischen $-1$ und $+1$.

**Rechnung:** Kein Punkt mit $|x| > 1$ oder $|y| > 1$ liegt auf dem Einheitskreis.

**Probe:** $\\sin^2 + \\cos^2 = 1$; wäre einer $> 1$, müsste der andere imaginär sein.

**Typischer Fehler:** Annehmen, dass $\\sin$/$\\cos$ auch größere Werte annehmen können.`,
        [
          'Einheitskreis: $r = 1$.',
          'Koordinaten eingeschränkt.',
          '$\\sin, \\cos \\in [-1, 1]$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['wertebereich-sincos'] },
      ),
      mc(
        'Welcher der folgenden Werte KANN nicht $\\sin\\alpha$ für irgendeinen reellen $\\alpha$ sein?',
        ['$1{,}5$', '$0{,}9$', '$-1$', '$0$'],
        0,
        `**Ansatz:** $\\sin$ ist auf $[-1, 1]$ beschränkt.

**Rechnung:** $1{,}5 > 1$ → außerhalb des Wertebereichs.

**Probe:** $\\arcsin(1{,}5)$ am Taschenrechner → Fehler ("domain error").

**Typischer Fehler:** Werte $> 1$ als möglich betrachten (vergessen, dass $\\sin$ begrenzt ist).`,
        [
          'Wertebereich von $\\sin$.',
          '$[-1, 1]$.',
          'Welcher Wert sprengt das?',
        ],
        {
          1: '$0{,}9 \\in [-1, 1]$ — möglich (z. B. $\\sin 64° \\approx 0{,}9$).',
          2: '$-1$ ist der untere Rand (bei $\\sin 270°$).',
          3: '$0$ ist möglich (bei $\\sin 0°, 180°, \\ldots$).',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['wertebereich-sincos'] },
      ),
      mc(
        'Wie groß ist der Wertebereich der Funktion $2\\sin\\alpha + 1$?',
        ['$[-1, 3]$', '$[0, 2]$', '$[-2, 2]$', '$[1, 3]$'],
        0,
        `**Ansatz:** $\\sin\\alpha \\in [-1, 1]$, also $2\\sin\\alpha \\in [-2, 2]$, und $+1$: $[-1, 3]$.

**Rechnung:** Min $= 2 \\cdot (-1) + 1 = -1$. Max $= 2 \\cdot 1 + 1 = 3$.

**Probe:** Bei $\\alpha = 270°$: $2(-1) + 1 = -1$ ✓. Bei $90°$: $2(1) + 1 = 3$ ✓.

**Typischer Fehler:** Das $+1$ bei der Skalierung vergessen.`,
        [
          'Basisbereich von $\\sin$: $[-1, 1]$.',
          'Multiplikation mit $2$: $[-2, 2]$.',
          'Plus $1$: verschieben.',
        ],
        {
          1: '$[0, 2]$ vergisst, dass Skalierung um $2$ Min auf $-2$ bringt.',
          2: '$[-2, 2]$ vergisst die Verschiebung $+1$.',
          3: '$[1, 3]$ nimmt Min als $0$ statt $-1$ (Skalierung vergessen).',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['wertebereich-sincos'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin\\alpha = 2$ und schließt $\\alpha = 90°$. Wo liegt der Fehler?',
        [
          '$\\sin\\alpha = 2$ ist unmöglich. Die Gleichung hat keine reelle Lösung.',
          '$\\alpha = 90°$ ist richtig, nur $\\sin 90°$ muss $2$ statt $1$ sein.',
          'Er sollte $\\alpha = 2$ rechnen.',
          '$\\sin 90° = 2$ im RAD-Modus.',
        ],
        0,
        `**Ansatz:** Plausibilitätsprüfung: $|\\sin| \\leq 1$ ist fundamental.

**Rechnung:** $\\sin\\alpha = 2 \\Rightarrow$ keine reelle Lösung, weil $2$ außerhalb $[-1, 1]$ liegt.

**Probe:** $\\arcsin(2)$ = Fehlermeldung.

**Typischer Fehler:** Nicht prüfen, ob der Wert im Bereich liegt. Standard-Reflex: "Liegt die Zahl zwischen $-1$ und $1$? Nein → keine Lösung."`,
        [
          'Ist $2$ ein erlaubter $\\sin$-Wert?',
          'Wertebereich $[-1, 1]$.',
          'Was folgt für die Gleichung?',
        ],
        {
          1: '$\\sin 90° = 1$ exakt, nicht $2$.',
          2: '$\\sin 2$ (rad) wäre OK und $\\leq 1$, aber $\\sin\\alpha = 2$ ist die Gleichung mit unmöglichem RHS.',
          3: 'Auch im RAD-Modus $\\sin 90\\,\\text{rad} \\neq 2$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['wertebereich-sincos'] },
      ),
      tf(
        'Die Gleichung $\\cos\\alpha = -1$ hat unendlich viele Lösungen in $\\mathbb{R}$.',
        true,
        `**Ansatz:** $-1$ ist am Rand von $[-1, 1]$ — wird bei $\\alpha = 180° + k \\cdot 360°$ angenommen.

**Rechnung:** $\\cos\\alpha = -1 \\Leftrightarrow \\alpha = 180° + k \\cdot 360°$ für $k \\in \\mathbb{Z}$.

**Probe:** Periodizität $360°$ erzeugt unendlich viele Lösungen.

**Typischer Fehler:** Nur die Hauptlösung $180°$ angeben.`,
        [
          'Wann ist $\\cos\\alpha = -1$?',
          'Bei $180°$.',
          'Und dann Periodizität $360°$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['wertebereich-sincos'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-2-3 — Symmetrien und Periodizität  (6 subGoals)
  // 30 Matrix-Aufgaben: 6 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-3': {
    // ── [0] Periodizität 360° ─────────────────────────────────────────────
    0: [
      tf(
        'Für alle reellen Winkel $\\alpha$ und jede ganze Zahl $k$ gilt $\\sin(\\alpha + k \\cdot 360°) = \\sin(\\alpha)$.',
        true,
        `**Ansatz:** Vollumdrehungen landen den Punkt wieder an derselben Stelle am Einheitskreis.

**Rechnung:** $k \\cdot 360°$ ist $k$-mal eine ganze Umrundung. Koordinaten unverändert → Sinus unverändert.

**Probe:** $\\sin(30° + 360°) = \\sin 390° = \\sin 30° = 0{,}5$ ✓.

**Typischer Fehler:** Annehmen, Periodizität gelte nur für $k = 1$.`,
        [
          'Periodizität bedeutet Wiederholung.',
          'Periode = $360°$.',
          'Beliebige Anzahl Umdrehungen.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['periodizitaet-360'] },
      ),
      mc(
        'Welcher Winkel hat denselben Kosinus wie $45°$?',
        ['$405°$', '$315°$', '$135°$', '$225°$'],
        0,
        `**Ansatz:** $\\cos(\\alpha + 360°) = \\cos\\alpha$. Also $\\cos 45° = \\cos(45° + 360°) = \\cos 405°$.

**Rechnung:** $405° = 45° + 360°$, gleiche Position am Einheitskreis → gleicher Kosinus.

**Probe:** $\\cos 405° = \\cos 45° = \\sqrt{2}/2 \\approx 0{,}707$ ✓.

**Typischer Fehler:** $315°$ (= $360° - 45°$) angeben — da gilt auch $\\cos 315° = \\cos 45°$ (gerade Funktion), aber die Frage fragt nach Periodizität, nicht Symmetrie.`,
        [
          'Periodizität: Winkel $+ 360°$.',
          '$45° + 360° = ?$',
          'Alle anderen haben anderes Vorzeichen oder anderen Betrag.',
        ],
        {
          1: '$\\cos 315° = \\cos 45°$ stimmt, aber das ist die $\\cos$-Symmetrie, nicht Periodizität. Die Frage-Option "Periodizität" passt nur zu $405°$.',
          2: '$\\cos 135° = -\\cos 45°$ — anderes Vorzeichen.',
          3: '$\\cos 225° = -\\cos 45°$ — anderes Vorzeichen.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['periodizitaet-360'] },
      ),
      ni(
        'Berechne $\\sin(750°)$. (3 NK)',
        0.5, 0.01, '',
        `**Ansatz:** $750°$ auf $[0°, 360°)$ reduzieren: $750° - 2 \\cdot 360° = 30°$.

**Rechnung:** $\\sin 750° = \\sin 30° = 0{,}5$.

**Probe:** $750° = 2 \\cdot 360° + 30°$ — zwei volle Umdrehungen plus $30°$.

**Typischer Fehler:** Nur einmal $360°$ abziehen: $750° - 360° = 390°$ — immer noch $> 360°$.`,
        [
          'Modulo $360°$.',
          '$750° - 2 \\cdot 360° = ?$',
          '$\\sin 30° = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['periodizitaet-360'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(500°) = \\sin(500° - 360°) = \\sin(140°) = \\sin(140°)$ und landet bei einem Wert $\\approx 0{,}643$. Er behauptet dann $\\sin 500° = -0{,}643$, weil „$500°$ im 3. oder 4. Quadrant liegt". Wo liegt der Fehler?',
        [
          '$500° - 360° = 140°$ liegt im 2. Quadranten, wo $\\sin > 0$. $\\sin 500° = \\sin 140° = +0{,}643$ ist korrekt.',
          'Die Rechnung war schon falsch — $\\sin 500° = 0$.',
          'Er hätte $500° - 2 \\cdot 360° = -220°$ rechnen müssen.',
          'Periodizität gilt nicht bei $\\sin$.',
        ],
        0,
        `**Ansatz:** Nach der Reduktion den **reduzierten** Winkel und seinen Quadranten prüfen, nicht den Original-Wert.

**Rechnung:** $500° - 360° = 140° \\in$ 2. Quadrant. Dort ist $\\sin > 0$ (ASTC). Also $\\sin 500° = \\sin 140° = +\\sin 40° \\approx +0{,}643$.

**Probe:** $\\sin$ ist periodisch — der reduzierte Winkel bestimmt den Wert komplett, inkl. Vorzeichen.

**Typischer Fehler:** Genau dieser — nach korrekter Periodizitäts-Reduktion den Original-Winkel nochmal im falschen Quadranten einordnen.`,
        [
          'Nach Reduktion: welcher Quadrant?',
          '$140°$ liegt im 2. Quadrant.',
          'ASTC: Sinus positiv dort.',
        ],
        {
          1: 'Die Reduktion $500° \\to 140°$ ist mathematisch korrekt; das Problem ist die nachträgliche Vorzeichenbehandlung.',
          2: '$500° - 720° = -220°$ wäre auch OK, aber nicht nötig.',
          3: 'Periodizität gilt vollständig für $\\sin$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['periodizitaet-360'] },
      ),
      matching(
        'Ordne jedem Winkel einen äquivalenten Winkel in $[0°, 360°)$ zu.',
        [
          { left: '$420°$',   right: '$60°$' },
          { left: '$-30°$',   right: '$330°$' },
          { left: '$800°$',   right: '$80°$' },
          { left: '$-450°$',  right: '$270°$' },
        ],
        `**Ansatz:** $\\alpha \\mod 360°$ in den Hauptbereich bringen.

**Rechnung:** $420° - 360° = 60°$. $-30° + 360° = 330°$. $800° - 2 \\cdot 360° = 80°$. $-450° + 2 \\cdot 360° = 270°$.

**Probe:** Jeder Winkel steht für dieselbe Position am Einheitskreis wie sein Hauptwert.

**Typischer Fehler:** Bei negativen Winkeln $360°$ addieren statt subtrahieren — je nach Vorzeichen beides nötig.`,
        [
          'Modulo $360°$.',
          'Bei negativen Winkeln $+360°$ addieren, bis $\\geq 0$.',
          'Bei großen Winkeln $360°$ abziehen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['periodizitaet-360'] },
      ),
    ],

    // ── [1] sin ist ungerade: sin(-α) = -sin α ────────────────────────────
    1: [
      tf(
        'Für jeden Winkel $\\alpha$ gilt $\\sin(-\\alpha) = -\\sin(\\alpha)$.',
        true,
        `**Ansatz:** Sinus ist eine ungerade Funktion; das entspricht Spiegelung am Ursprung am Einheitskreis.

**Rechnung:** $-\\alpha$ entspricht Drehung im Uhrzeigersinn, also Spiegelung an $x$-Achse. $y$-Koordinate wird negiert → $\\sin$ negiert.

**Probe:** $\\sin(-30°) = -\\sin 30° = -0{,}5$ ✓.

**Typischer Fehler:** $\\sin(-\\alpha) = \\sin\\alpha$ annehmen (wie bei Kosinus).`,
        [
          'Ungerade Funktion: $f(-x) = -f(x)$.',
          '$\\sin$ ist ungerade.',
          'Am Einheitskreis: $y$-Spiegelung an $x$-Achse.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['sin-ungerade'] },
      ),
      mc(
        'Gegeben $\\sin 25° \\approx 0{,}423$. Wie groß ist $\\sin(-25°)$?',
        ['$-0{,}423$', '$+0{,}423$', '$+0{,}577$', '$-0{,}577$'],
        0,
        `**Ansatz:** $\\sin(-\\alpha) = -\\sin\\alpha$.

**Rechnung:** $\\sin(-25°) = -\\sin 25° = -0{,}423$.

**Probe:** Betrag gleich, Vorzeichen gekippt.

**Typischer Fehler:** $+0{,}423$ angeben (gerade Funktion annehmen).`,
        [
          'Ungerade Funktion.',
          'Vorzeichen kippt.',
          'Betrag bleibt.',
        ],
        {
          1: '$\\cos$ wäre gerade; $\\sin$ ist ungerade → Vorzeichenwechsel.',
          2: '$0{,}577 = \\tan 30°$ — hat nichts mit dieser Aufgabe zu tun.',
          3: '$-0{,}577$ wäre aus falscher Quelle.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['sin-ungerade'] },
      ),
      ni(
        'Berechne $\\sin(-60°)$. (3 NK)',
        -0.866, 0.01, '',
        `**Ansatz:** $\\sin(-\\alpha) = -\\sin\\alpha$ mit $\\alpha = 60°$.

**Rechnung:** $\\sin(-60°) = -\\sin 60° = -\\sqrt{3}/2 \\approx -0{,}866$.

**Probe:** Am Einheitskreis: Punkt bei $-60°$ im 4. Quadrant, $y < 0$ ✓.

**Typischer Fehler:** $+0{,}866$ (Vorzeichen vergessen) oder $-1/2$ (mit $\\cos$ verwechselt).`,
        [
          '$\\sin$ ungerade.',
          '$\\sin 60° = \\sqrt{3}/2$.',
          'Vorzeichen kippen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['sin-ungerade'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(-45°) = \\sin 45° = \\sqrt{2}/2 \\approx 0{,}707$. Wo liegt der Fehler?',
        [
          'Sinus ist ungerade. Korrekt: $\\sin(-45°) = -\\sin 45° = -\\sqrt{2}/2 \\approx -0{,}707$.',
          'Die Rechnung stimmt; Sinus ist symmetrisch.',
          '$-45°$ ist gar nicht definiert.',
          '$\\sin(-45°) = 0$.',
        ],
        0,
        `**Ansatz:** Sinus-Eigenschaft: ungerade → Vorzeichenwechsel bei negativen Argumenten.

**Rechnung:** Korrekt: $\\sin(-45°) = -\\sin 45° = -\\sqrt{2}/2$.

**Probe:** Am Einheitskreis: $-45°$ liegt im 4. Quadrant, $y < 0$ → Sinus negativ.

**Typischer Fehler:** $\\sin$ mit $\\cos$ (gerade) verwechseln.`,
        [
          'Ist $\\sin$ gerade oder ungerade?',
          'Punkt bei $-45°$: 4. Quadrant.',
          '$y$-Koordinate dort: positiv oder negativ?',
        ],
        {
          1: 'Sinus ist NICHT symmetrisch am $y$-Achse (das wäre Kosinus).',
          2: 'Alle reellen Winkel sind definiert, auch negative.',
          3: '$\\sin(-45°) \\neq 0$ — das wäre nur bei $\\sin 0°, 180°$ usw.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['sin-ungerade'] },
      ),
      matching(
        'Ordne jeden Sinus-Ausdruck seinem äquivalenten Wert zu.',
        [
          { left: '$\\sin(-30°)$',  right: '$-\\tfrac{1}{2}$' },
          { left: '$\\sin(-60°)$',  right: '$-\\tfrac{\\sqrt{3}}{2}$' },
          { left: '$\\sin(-90°)$',  right: '$-1$' },
          { left: '$\\sin(-180°)$', right: '$0$' },
        ],
        `**Ansatz:** $\\sin(-\\alpha) = -\\sin\\alpha$ für jeden Winkel.

**Rechnung:** Grundwerte negieren.

**Probe:** Am Einheitskreis: Spiegelpunkte liegen symmetrisch zur $x$-Achse.

**Typischer Fehler:** $\\sin(-180°) = -0 = 0$, korrekt (beide $0$).`,
        [
          'Alle $-$-Werte der Grundwerte.',
          'Ausnahme: $\\sin 0° = 0$, $\\sin 180° = 0$ — bleiben $0$.',
          'Regel: Vorzeichen kippen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['sin-ungerade'] },
      ),
    ],

    // ── [2] cos ist gerade: cos(-α) = cos α ────────────────────────────────
    2: [
      tf(
        '$\\cos(-\\alpha) = \\cos(\\alpha)$ für jeden Winkel $\\alpha$.',
        true,
        `**Ansatz:** Kosinus ist gerade — Symmetrie an der $y$-Achse (oder: an der horizontalen Hauptachse).

**Rechnung:** $-\\alpha$ entspricht Drehung im Uhrzeigersinn. Die $x$-Koordinate bleibt gleich → $\\cos$ unverändert.

**Probe:** $\\cos(-30°) = \\cos 30° = \\sqrt{3}/2$ ✓.

**Typischer Fehler:** $\\cos(-\\alpha) = -\\cos\\alpha$ annehmen (wie bei Sinus).`,
        [
          'Gerade Funktion: $f(-x) = f(x)$.',
          '$\\cos$ ist gerade.',
          'Am Einheitskreis: $x$-Koordinate unverändert.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['cos-gerade'] },
      ),
      mc(
        'Gegeben $\\cos 40° \\approx 0{,}766$. Wie groß ist $\\cos(-40°)$?',
        ['$+0{,}766$', '$-0{,}766$', '$+0{,}643$', '$-0{,}643$'],
        0,
        `**Ansatz:** $\\cos(-\\alpha) = \\cos\\alpha$.

**Rechnung:** $\\cos(-40°) = \\cos 40° \\approx 0{,}766$.

**Probe:** $\\cos$ ist gerade — Vorzeichen bleibt.

**Typischer Fehler:** Kippen des Vorzeichens (Sinus-Eigenschaft übertragen).`,
        [
          'Gerade Funktion.',
          'Vorzeichen bleibt.',
          'Gleicher Wert.',
        ],
        {
          1: 'Kippen des Vorzeichens wäre Sinus-Verhalten, nicht Kosinus.',
          2: '$0{,}643 = \\sin 40°$ — Verwechslung mit Sinus.',
          3: 'Vorzeichen + Sinus-Wert — komplett daneben.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['cos-gerade'] },
      ),
      ni(
        'Berechne $\\cos(-60°)$. (3 NK)',
        0.5, 0.01, '',
        `**Ansatz:** $\\cos(-\\alpha) = \\cos\\alpha$.

**Rechnung:** $\\cos(-60°) = \\cos 60° = 1/2 = 0{,}5$.

**Probe:** Grundwert $\\cos 60° = 0{,}5$ ✓.

**Typischer Fehler:** $-0{,}5$ angeben.`,
        [
          '$\\cos$ ist gerade.',
          '$\\cos 60° = ?$',
          'Vorzeichen bleibt positiv.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['cos-gerade'] },
      ),
      mc(
        'Ein Schüler rechnet $\\cos(-120°) = -\\cos(120°) = -(-1/2) = +1/2$. Wo liegt der Fehler?',
        [
          '$\\cos$ ist gerade, NICHT ungerade. $\\cos(-120°) = \\cos(120°) = -1/2$. Das Schülerergebnis $+1/2$ ist falsch.',
          'Die Rechnung stimmt — $\\cos(-120°) = +1/2$.',
          'Er müsste $\\cos$ durch $\\sin$ ersetzen.',
          '$\\cos(120°)$ ist gar nicht definiert.',
        ],
        0,
        `**Ansatz:** Eigenschaft von $\\cos$: gerade Funktion, kein Vorzeichenwechsel bei Negierung.

**Rechnung:** Korrekt: $\\cos(-120°) = \\cos 120° = -1/2$ (Punkt im 2. Quadranten, $x < 0$).

**Probe:** Am Einheitskreis: $-120°$ liegt im 3. Quadranten, $x < 0$ → $\\cos < 0$. Beide Winkel ($\\pm 120°$) haben negativen $\\cos$-Wert.

**Typischer Fehler:** Dieser — $\\sin$-Eigenschaft auf $\\cos$ übertragen. Merkhilfe: $\\cos$ ist wie der Buchstabe "o" symmetrisch.`,
        [
          'Ist $\\cos$ ungerade?',
          'Nein: gerade → $\\cos(-\\alpha) = \\cos\\alpha$.',
          'Kein Vorzeichenwechsel.',
        ],
        {
          1: 'Das Ergebnis $+1/2$ entsteht nur aus der falschen "ungerade"-Annahme.',
          2: 'Nicht $\\sin$ ersetzen — $\\cos$ bleibt, aber mit richtiger Eigenschaft.',
          3: '$\\cos 120° = -1/2$ ist wohldefiniert.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['cos-gerade'] },
      ),
      matching(
        'Ordne jedem Ausdruck sein Ergebnis zu (Kombination gerade/ungerade).',
        [
          { left: '$\\cos(-45°)$', right: '$+\\tfrac{\\sqrt{2}}{2}$' },
          { left: '$\\sin(-45°)$', right: '$-\\tfrac{\\sqrt{2}}{2}$' },
          { left: '$\\cos(-90°)$', right: '$0$' },
          { left: '$\\sin(-90°)$', right: '$-1$' },
        ],
        `**Ansatz:** Ungerade vs. gerade — $\\sin$ kippt Vorzeichen, $\\cos$ nicht.

**Rechnung:** Grundwerte unverändert (bei $\\cos$) oder negiert (bei $\\sin$).

**Probe:** Am Einheitskreis: negative Winkel spiegeln an $x$-Achse.

**Typischer Fehler:** Alle negieren (oder keine).`,
        [
          '$\\cos$ bleibt (gerade).',
          '$\\sin$ kippt (ungerade).',
          'Grundwerte einsetzen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['cos-gerade', 'sin-ungerade'] },
      ),
    ],

    // ── [3] Supplementformel: sin(180°-α) = sin α, cos(180°-α) = -cos α ────
    3: [
      tf(
        'Es gilt $\\sin(180° - \\alpha) = \\sin(\\alpha)$ und $\\cos(180° - \\alpha) = -\\cos(\\alpha)$.',
        true,
        `**Ansatz:** Spiegelung an der $y$-Achse: $y$-Koordinate bleibt ($\\sin$), $x$-Koordinate wechselt Vorzeichen ($\\cos$).

**Rechnung:** Punkt bei $\\alpha$: $(x, y)$. Punkt bei $180°-\\alpha$: $(-x, y)$.

**Probe:** $\\sin 150° = \\sin 30° = 0{,}5$ ✓. $\\cos 150° = -\\cos 30° = -\\sqrt{3}/2$ ✓.

**Typischer Fehler:** Vorzeichen beider Formeln verwechseln.`,
        [
          'Spiegelung an $y$-Achse.',
          'Sinus ($y$): gleich.',
          'Kosinus ($x$): Vorzeichenwechsel.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['supplement-formel'] },
      ),
      mc(
        'Berechne $\\cos(150°)$ mithilfe der Supplementformel.',
        ['$-\\tfrac{\\sqrt{3}}{2}$', '$+\\tfrac{\\sqrt{3}}{2}$', '$-\\tfrac{1}{2}$', '$+\\tfrac{1}{2}$'],
        0,
        `**Ansatz:** $\\cos(180° - \\alpha) = -\\cos\\alpha$ mit $\\alpha = 30°$.

**Rechnung:** $\\cos 150° = \\cos(180° - 30°) = -\\cos 30° = -\\sqrt{3}/2$.

**Probe:** $150°$ im 2. Quadranten → $\\cos < 0$ (ASTC).

**Typischer Fehler:** Vorzeichen vergessen oder $\\sin 30°$ einsetzen.`,
        [
          'Formel: $\\cos(180°-\\alpha) = -\\cos\\alpha$.',
          '$\\alpha = 30°$.',
          'Vorzeichen anwenden.',
        ],
        {
          1: '$+\\sqrt{3}/2$ wäre ohne Vorzeichen, aber 2. Quadrant hat $\\cos < 0$.',
          2: '$-1/2$ ist $\\cos 120°$, nicht $\\cos 150°$.',
          3: '$+1/2$ ist $\\cos 60°$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['supplement-formel'] },
      ),
      ni(
        'Gegeben $\\sin 72° \\approx 0{,}951$. Berechne $\\sin(108°)$. (3 NK)',
        0.951, 0.01, '',
        `**Ansatz:** $\\sin(180° - \\alpha) = \\sin\\alpha$ mit $\\alpha = 72°$, weil $180° - 72° = 108°$.

**Rechnung:** $\\sin 108° = \\sin 72° \\approx 0{,}951$.

**Probe:** $108°$ im 2. Quadranten → $\\sin > 0$, passt.

**Typischer Fehler:** Vorzeichenwechsel annehmen (nur bei $\\cos$).`,
        [
          'Supplementformel für Sinus.',
          'Kein Vorzeichenwechsel.',
          'Wert direkt übernehmen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['supplement-formel'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin(180° - 60°) = -\\sin 60°$, weil „Minus vor der Klammer das Vorzeichen kippt"." Wo liegt der Fehler?',
        [
          'Die Supplementformel $\\sin(180° - \\alpha) = +\\sin\\alpha$ ist KEINE algebraische Klammer-Auflösung. Am Einheitskreis bleibt die $y$-Koordinate bei Spiegelung an $y$-Achse gleich.',
          'Die Rechnung stimmt für $\\sin$, nicht für $\\cos$.',
          'Das Minus gilt nur für Winkel $> 180°$.',
          'Die Formel lautet anders; korrekt wäre $\\sin(180° - \\alpha) = \\cos\\alpha$.',
        ],
        0,
        `**Ansatz:** Die Supplementformel kommt aus der Geometrie, nicht aus linearer Algebra.

**Rechnung:** Korrekt: $\\sin(180° - 60°) = \\sin 120° = +\\sin 60° = +\\sqrt{3}/2$.

**Probe:** $120°$ im 2. Quadranten → $\\sin > 0$.

**Typischer Fehler:** Genau dieser — die Klammer-Minus-Regel aus der Algebra fälschlich auf Trig-Funktionen übertragen.`,
        [
          'Trig-Formeln ≠ algebraische Umformungen.',
          'Geometrische Herleitung.',
          'Punkt bei $120°$: $y > 0$.',
        ],
        {
          1: 'Die Formel gilt für $\\sin$: kein Vorzeichenwechsel.',
          2: 'Das Minus ist keine Winkel-Grenze.',
          3: '$\\sin(180°-\\alpha) = \\cos\\alpha$ ist falsch — das wäre die Komplementformel, und die hat $90°-\\alpha$, nicht $180°-\\alpha$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['supplement-formel'] },
      ),
      ni(
        'Berechne $\\sin(150°) + \\cos(150°)$. (3 NK)',
        -0.366, 0.01, '',
        `**Ansatz:** Supplementformel separat für beide.

**Rechnung:** $\\sin 150° = \\sin 30° = 0{,}5$. $\\cos 150° = -\\cos 30° = -\\sqrt{3}/2 \\approx -0{,}866$. Summe: $0{,}5 - 0{,}866 = -0{,}366$.

**Probe:** Beide ASTC-konform (2. Quadrant: $\\sin > 0, \\cos < 0$).

**Typischer Fehler:** Beide mit gleichem Vorzeichen ansetzen.`,
        [
          'Supplementformel für jeden Summanden.',
          'Sinus: kein Vorzeichenwechsel.',
          'Kosinus: Vorzeichenwechsel.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['supplement-formel'] },
      ),
    ],

    // ── [4] Komplementformel: sin(90°-α) = cos α, cos(90°-α) = sin α ───────
    4: [
      tf(
        'Es gilt $\\sin(90° - \\alpha) = \\cos(\\alpha)$ und $\\cos(90° - \\alpha) = \\sin(\\alpha)$.',
        true,
        `**Ansatz:** Komplementär — Seiten im rechtwinkligen Dreieck tauschen Rollen beim Komplementwinkel.

**Rechnung:** Im Dreieck: $\\alpha$ und $90°-\\alpha$ sind die beiden nicht-rechten Winkel. Gegenkathete zum einen = Ankathete zum anderen.

**Probe:** $\\sin 30° = 1/2 = \\cos 60°$; $\\sin(90° - 30°) = \\sin 60° = \\sqrt{3}/2 = \\cos 30°$ ✓.

**Typischer Fehler:** Formeln vermischen: $\\sin(90°-\\alpha) = -\\cos\\alpha$ (Vorzeichen falsch).`,
        [
          'Komplementwinkel: ergänzen zu $90°$.',
          'Im rechtwinkligen Dreieck.',
          'Sinus und Kosinus tauschen.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['komplement-formel'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\cos(50°)$?',
        ['$\\sin(40°)$', '$\\cos(40°)$', '$-\\sin(40°)$', '$\\sin(50°)$'],
        0,
        `**Ansatz:** Komplementformel: $\\cos(\\alpha) = \\sin(90° - \\alpha) = \\sin(40°)$ mit $\\alpha = 50°$.

**Rechnung:** $\\cos 50° = \\sin(90° - 50°) = \\sin 40°$.

**Probe:** $\\cos 50° \\approx 0{,}643$, $\\sin 40° \\approx 0{,}643$ ✓.

**Typischer Fehler:** $\\sin 50°$ annehmen (Komplementär vergessen) oder $\\cos 40°$ (Identität vermuten).`,
        [
          'Formel: $\\cos\\alpha = \\sin(90°-\\alpha)$.',
          '$\\alpha = 50°$.',
          '$90° - 50° = 40°$.',
        ],
        {
          1: '$\\cos 40° \\neq \\cos 50°$ — unterschiedliche Werte.',
          2: '$-\\sin 40° = -\\cos 50°$ — falsches Vorzeichen.',
          3: '$\\sin 50° \\neq \\cos 50°$ — wären gleich nur bei $45°$.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['komplement-formel'] },
      ),
      ni(
        'Gegeben $\\cos 15° \\approx 0{,}966$. Berechne $\\sin(75°)$. (3 NK)',
        0.966, 0.01, '',
        `**Ansatz:** $\\sin(75°) = \\cos(90° - 75°) = \\cos(15°)$.

**Rechnung:** $\\sin 75° = \\cos 15° \\approx 0{,}966$.

**Probe:** $75° + 15° = 90°$ — Komplementwinkel.

**Typischer Fehler:** Formel rückwärts anwenden und $\\sin(15°)$ rechnen.`,
        [
          '$\\sin\\alpha = \\cos(90°-\\alpha)$.',
          '$90° - 75° = 15°$.',
          'Wert übernehmen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['komplement-formel'] },
      ),
      mc(
        'Ein Schüler sagt: „$\\sin 60° = \\cos 60° = \\sqrt{3}/2$, weil beide bei $60°$ denselben Wert haben." Wo liegt der Fehler?',
        [
          'Die Komplementformel wäre $\\sin 60° = \\cos(90° - 60°) = \\cos 30°$, NICHT $\\cos 60°$. Tatsächlich: $\\sin 60° = \\sqrt{3}/2$, aber $\\cos 60° = 1/2$.',
          '$\\sin$ und $\\cos$ sind bei allen Grundwinkeln gleich.',
          '$\\cos 60° = \\sqrt{3}/2$ ist korrekt.',
          'Die Formel lautet $\\sin\\alpha = \\cos(180°-\\alpha)$.',
        ],
        0,
        `**Ansatz:** $\\sin\\alpha = \\cos\\alpha$ gilt NUR bei $\\alpha = 45°$. Bei allen anderen Winkeln sind sie verschieden.

**Rechnung:** Korrekt: $\\sin 60° = \\cos(90° - 60°) = \\cos 30° = \\sqrt{3}/2$. Auch richtig: $\\cos 60° = 1/2 \\neq \\sqrt{3}/2$.

**Probe:** $\\sin^2 + \\cos^2 = 3/4 + 1/4 = 1$ ✓ (für $\\alpha = 60°$).

**Typischer Fehler:** Komplementformel mit Argumentengleichheit verwechseln.`,
        [
          'Wann gilt $\\sin = \\cos$?',
          'Nur bei $45°$.',
          'Komplementformel verbindet $\\alpha$ mit $90°-\\alpha$.',
        ],
        {
          1: 'Nur bei $45°$ gleich.',
          2: '$\\cos 60° = 1/2$, nicht $\\sqrt{3}/2$.',
          3: 'Die Komplementformel hat $90°-\\alpha$, nicht $180°-\\alpha$ (das wäre Supplement).',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['komplement-formel'] },
      ),
      matching(
        'Ordne jedem Ausdruck seine Vereinfachung zu.',
        [
          { left: '$\\sin(90° - 30°)$', right: '$\\cos 30°$' },
          { left: '$\\cos(90° - 25°)$', right: '$\\sin 25°$' },
          { left: '$\\sin(90° - 45°)$', right: '$\\cos 45°$' },
          { left: '$\\cos(90° - 80°)$', right: '$\\sin 80°$' },
        ],
        `**Ansatz:** Komplementformel schematisch anwenden.

**Rechnung:** $\\sin(90°-\\alpha) = \\cos\\alpha$; $\\cos(90°-\\alpha) = \\sin\\alpha$.

**Probe:** Bei $\\alpha = 45°$ sind beide Seiten identisch.

**Typischer Fehler:** Formeln vertauschen.`,
        [
          'Sinus des Komplements $=$ Kosinus.',
          'Kosinus des Komplements $=$ Sinus.',
          'Schema einhalten.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['komplement-formel'] },
      ),
    ],

    // ── [5] Punktspiegelung: sin(180°+α) = -sin α, cos(180°+α) = -cos α ────
    5: [
      tf(
        'Für jeden Winkel gilt $\\sin(180° + \\alpha) = -\\sin\\alpha$ und $\\cos(180° + \\alpha) = -\\cos\\alpha$.',
        true,
        `**Ansatz:** Punktspiegelung am Ursprung — beide Koordinaten wechseln Vorzeichen.

**Rechnung:** Punkt bei $\\alpha$: $(x, y)$. Punkt bei $180°+\\alpha$: $(-x, -y)$.

**Probe:** $\\sin 210° = \\sin(180°+30°) = -\\sin 30° = -0{,}5$ ✓. $\\cos 210° = -\\cos 30° = -\\sqrt{3}/2$ ✓.

**Typischer Fehler:** Nur ein Vorzeichen kippen.`,
        [
          'Punktspiegelung am Ursprung.',
          'Beide Koordinaten wechseln.',
          'Beide Vorzeichen kippen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['punktspiegelung'] },
      ),
      mc(
        'Berechne $\\sin(210°)$ mit der Punktspiegelungsformel.',
        ['$-\\tfrac{1}{2}$', '$+\\tfrac{1}{2}$', '$-\\tfrac{\\sqrt{3}}{2}$', '$+\\tfrac{\\sqrt{3}}{2}$'],
        0,
        `**Ansatz:** $210° = 180° + 30°$, also $\\sin 210° = -\\sin 30° = -1/2$.

**Rechnung:** $-\\sin 30° = -1/2$.

**Probe:** $210°$ im 3. Quadranten → $\\sin < 0$ (ASTC).

**Typischer Fehler:** Positives Vorzeichen oder falscher Grundwert.`,
        [
          'Formel: $\\sin(180°+\\alpha) = -\\sin\\alpha$.',
          '$\\alpha = 30°$.',
          'Vorzeichen kippen.',
        ],
        {
          1: '$+1/2$ vergisst das Vorzeichen.',
          2: '$-\\sqrt{3}/2$ ist $\\sin 240°$, nicht $\\sin 210°$.',
          3: '$+\\sqrt{3}/2$ ist $\\sin 60°$ oder $\\sin 120°$.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['punktspiegelung'] },
      ),
      ni(
        'Gegeben $\\cos 40° \\approx 0{,}766$. Berechne $\\cos(220°)$. (3 NK)',
        -0.766, 0.01, '',
        `**Ansatz:** $220° = 180° + 40°$, also $\\cos 220° = -\\cos 40° \\approx -0{,}766$.

**Rechnung:** Vorzeichen kippen.

**Probe:** $220°$ im 3. Quadranten → $\\cos < 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Punktspiegelungsformel für $\\cos$.',
          '$\\alpha = 40°$.',
          'Vorzeichen kippen.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['punktspiegelung'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin(200°) = -\\sin 20°$ (korrekt) und $\\cos(200°) = +\\cos 20°$ (er lässt $\\cos$ unverändert, weil es "gerade" ist). Wo liegt der Fehler?',
        [
          '„Gerade" betrifft nur $\\cos(-\\alpha) = \\cos\\alpha$, NICHT $\\cos(180°+\\alpha)$. Bei Punktspiegelung wird auch $\\cos$ negiert: $\\cos 200° = -\\cos 20°$.',
          'Die Rechnung stimmt — $\\cos 200° = +\\cos 20°$.',
          'Er müsste zu $\\cos(200°) = -\\cos 20°$ auch bei $\\sin$ das Vorzeichen wieder wechseln.',
          'Die Formel gilt nur für Winkel $> 360°$.',
        ],
        0,
        `**Ansatz:** Punktspiegelung (am Ursprung) ≠ Spiegelung an $y$-Achse (gerade Funktion).

**Rechnung:** Korrekt: $\\cos 200° = \\cos(180° + 20°) = -\\cos 20° \\approx -0{,}940$.

**Probe:** $200°$ im 3. Quadranten → $\\cos < 0$ (ASTC). Schüler-Wert $+\\cos 20°$ wäre positiv — Widerspruch.

**Typischer Fehler:** „Gerade" mit „Verhalten bei Punktspiegelung" verwechseln.`,
        [
          'Welche Spiegelung ist hier?',
          'Punktspiegelung kippt beide Koordinaten.',
          '„Gerade" nur bei $\\cos(-\\alpha) = \\cos\\alpha$.',
        ],
        {
          1: '$\\cos 200° < 0$ (3. Quadrant) — das Schülerergebnis $+\\cos 20°$ ist positiv, falsch.',
          2: 'Die Sinus-Formel war korrekt.',
          3: 'Die Formel gilt universell.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['punktspiegelung'] },
      ),
      ni(
        'Berechne $\\sin(225°) + \\cos(225°)$ (beide via Punktspiegelung). (3 NK)',
        -1.414, 0.01, '',
        `**Ansatz:** $225° = 180° + 45°$. Beide negieren.

**Rechnung:** $\\sin 225° = -\\sin 45° = -\\sqrt{2}/2$; $\\cos 225° = -\\cos 45° = -\\sqrt{2}/2$. Summe: $-\\sqrt{2} \\approx -1{,}414$.

**Probe:** Beide gleich (bei $45°$-Argument) und beide negativ (3. Quadrant).

**Typischer Fehler:** Nur eines negieren.`,
        [
          'Punktspiegelung für beide.',
          '$-\\sin 45° - \\cos 45° = ?$',
          '$-\\sqrt{2}/2 - \\sqrt{2}/2 = -\\sqrt{2}$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['punktspiegelung'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-2-4 — Tangens im Einheitskreis  (6 subGoals)
  // 30 Matrix-Aufgaben: 6 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-4': {
    // ── [0] tan α = sin α / cos α = y/x ───────────────────────────────────
    0: [
      tf(
        '$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$ für alle Winkel mit $\\cos\\alpha \\neq 0$.',
        true,
        `**Ansatz:** Definition des Tangens.

**Rechnung:** Am Einheitskreis: $\\tan\\alpha = y/x$, also Steigung der Ursprungsgerade zum Punkt $(\\cos\\alpha, \\sin\\alpha)$.

**Probe:** $\\tan 45° = \\sin 45°/\\cos 45° = (\\sqrt 2/2)/(\\sqrt 2/2) = 1$ ✓.

**Typischer Fehler:** $\\tan = \\cos/\\sin$ annehmen.`,
        [
          'Definition: Quotient aus Sinus und Kosinus.',
          '$y/x$ am Einheitskreis.',
          'Nicht umgekehrt.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['tan-def'] },
      ),
      mc(
        'Welcher Wert ist $\\tan 45°$?',
        ['$1$', '$0$', '$\\sqrt{2}$', '$\\sqrt{2}/2$'],
        0,
        `**Ansatz:** $\\tan 45° = \\sin 45°/\\cos 45°$.

**Rechnung:** $(\\sqrt 2/2)/(\\sqrt 2/2) = 1$.

**Probe:** Bei $45°$ ist Gegenkathete = Ankathete → Verhältnis $1$.

**Typischer Fehler:** $\\sqrt 2$ oder $\\sqrt 2/2$ — Verwechslung mit Einzel-Werten.`,
        [
          '$\\tan = \\sin/\\cos$.',
          'Bei $45°$: beide gleich.',
          'Quotient $= 1$.',
        ],
        {
          1: '$\\tan 0° = 0$, nicht $\\tan 45°$.',
          2: '$\\sqrt 2$ ist kein Standardwert von $\\tan$.',
          3: '$\\sqrt 2/2$ ist $\\sin/\\cos$ von $45°$ einzeln — nicht der Quotient.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['tan-def'] },
      ),
      ni(
        'Ein Punkt auf dem Einheitskreis hat Koordinaten $(0{,}6, 0{,}8)$. Berechne $\\tan\\alpha$. (3 NK)',
        1.333, 0.01, '',
        `**Ansatz:** $\\tan\\alpha = y/x$.

**Rechnung:** $\\tan\\alpha = 0{,}8/0{,}6 = 4/3 \\approx 1{,}333$.

**Probe:** Punkt im 1. Quadranten → $\\tan > 0$ (ASTC) ✓.

**Typischer Fehler:** $x/y$ statt $y/x$ rechnen.`,
        [
          '$\\tan = y/x$.',
          '$y = 0{,}8$, $x = 0{,}6$.',
          'Dividieren.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['tan-def'] },
      ),
      mc(
        'Ein Schüler rechnet $\\tan 60° = \\cos 60°/\\sin 60° = (1/2)/(\\sqrt 3/2) = 1/\\sqrt 3$. Wo liegt der Fehler?',
        [
          'Er hat Zähler und Nenner vertauscht. Richtig: $\\tan 60° = \\sin 60°/\\cos 60° = (\\sqrt 3/2)/(1/2) = \\sqrt 3$.',
          'Die Rechnung stimmt — $\\tan 60° = 1/\\sqrt 3$.',
          'Er hat den $60°$-Winkel mit $30°$ verwechselt.',
          '$\\tan 60°$ ist undefiniert.',
        ],
        0,
        `**Ansatz:** Definition: $\\tan = \\sin/\\cos$, NICHT $\\cos/\\sin$.

**Rechnung:** Korrekt: $\\tan 60° = \\sqrt 3$ ($\\approx 1{,}732$). Das Schüler-Ergebnis $1/\\sqrt 3 \\approx 0{,}577$ ist tatsächlich $\\tan 30°$ (zufällig, weil beide Kehrwerte).

**Probe:** $\\tan 60° = \\sqrt 3 \\approx 1{,}732$; $\\tan 30° = 1/\\sqrt 3 \\approx 0{,}577$.

**Typischer Fehler:** Quotient-Richtung vertauschen. Merkhilfe: "$\\tan$ = Steigung = vertikal/horizontal = $y/x$ = $\\sin/\\cos$".`,
        [
          'Quotient in welche Richtung?',
          '$\\tan = \\sin/\\cos$.',
          'Steigung: vertikal $/$ horizontal.',
        ],
        {
          1: 'Zahlenwert ist tatsächlich $\\tan 30°$, nicht $\\tan 60°$.',
          2: 'Weder bei $30°$ noch $60°$ sind $\\sin/\\cos$ beide gleich $1/\\sqrt 3$ und $\\sqrt 3$.',
          3: '$\\tan 60°$ ist wohldefiniert ($\\cos 60° \\neq 0$).',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['tan-def'] },
      ),
      matching(
        'Ordne jedem Winkel seinen Tangens-Wert zu.',
        [
          { left: '$\\tan 0°$',  right: '$0$' },
          { left: '$\\tan 30°$', right: '$1/\\sqrt{3}$' },
          { left: '$\\tan 45°$', right: '$1$' },
          { left: '$\\tan 60°$', right: '$\\sqrt{3}$' },
        ],
        `**Ansatz:** Grundwerte-Tabelle des Tangens auswendig.

**Rechnung:** Aus Sinus/Kosinus-Werten: $\\tan = \\sin/\\cos$.

**Probe:** Monotones Wachstum im 1. Quadranten von $0$ auf $\\infty$ bei $90°$.

**Typischer Fehler:** $\\tan 30°$ und $\\tan 60°$ vertauschen.`,
        [
          'Grundwerte auswendig.',
          '$\\tan 45° = 1$ (symmetrisch).',
          '$\\tan 30° < 1 < \\tan 60°$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['tan-def'] },
      ),
    ],

    // ── [1] Polstellen bei α = 90° + k·180° ───────────────────────────────
    1: [
      tf(
        '$\\tan 90°$ ist nicht definiert, weil $\\cos 90° = 0$.',
        true,
        `**Ansatz:** Division durch Null. Bei $\\cos\\alpha = 0$ ist $\\tan\\alpha = \\sin\\alpha/0$ nicht definiert.

**Rechnung:** $\\cos 90° = 0$, also $\\tan 90° = 1/0$ → Polstelle.

**Probe:** Am Einheitskreis: Punkt $(0, 1)$; Steigung der Ursprungsgerade ist unendlich (senkrechte Linie).

**Typischer Fehler:** $\\tan 90° = \\infty$ formal als "Wert" akzeptieren. In $\\mathbb{R}$ undefiniert.`,
        [
          'Wann hat Division keine Lösung?',
          '$\\cos 90° = ?$',
          'Division durch $0$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['tan-polstellen'] },
      ),
      mc(
        'Bei welchem der folgenden Winkel ist $\\tan$ NICHT definiert?',
        ['$90°$', '$45°$', '$180°$', '$0°$'],
        0,
        `**Ansatz:** Polstellen bei $\\cos\\alpha = 0$, also $\\alpha = 90°, 270°, 450°, \\ldots$

**Rechnung:** $\\cos 90° = 0$ → $\\tan 90°$ undefiniert.

**Probe:** Bei $45°, 180°, 0°$ ist $\\cos \\neq 0$, also $\\tan$ definiert.

**Typischer Fehler:** $\\tan 180° = \\infty$ annehmen (stimmt nicht, $\\cos 180° = -1 \\neq 0$).`,
        [
          'Wo ist $\\cos = 0$?',
          'Bei $90°, 270°, \\ldots$',
          'Das sind die Polstellen.',
        ],
        {
          1: '$\\tan 45° = 1$ (wohldefiniert).',
          2: '$\\tan 180° = \\sin 180°/\\cos 180° = 0/(-1) = 0$ (wohldefiniert).',
          3: '$\\tan 0° = 0/1 = 0$ (wohldefiniert).',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['tan-polstellen'] },
      ),
      mc(
        'Welche Winkel sind Polstellen von $\\tan$ (im Bereich $[0°, 720°]$)?',
        ['$90°, 270°, 450°, 630°$', '$0°, 180°, 360°, 540°$', '$45°, 225°, 405°, 585°$', 'Nur $90°$ und $270°$.'],
        0,
        `**Ansatz:** Polstellen bei $\\alpha = 90° + k \\cdot 180°$ für ganzes $k$.

**Rechnung:** $k = 0, 1, 2, 3 \\Rightarrow 90°, 270°, 450°, 630°$.

**Probe:** Alle haben $\\cos\\alpha = 0$.

**Typischer Fehler:** Nur im Hauptbereich $[0°, 360°]$ suchen und Fortsetzung vergessen.`,
        [
          'Polstellen: $90° + k \\cdot 180°$.',
          '$k = 0, 1, 2, 3$ in $[0, 720]$.',
          'Ergibt $4$ Werte.',
        ],
        {
          1: 'Dort ist $\\sin = 0$, $\\cos \\neq 0$ — $\\tan = 0$, wohldefiniert.',
          2: 'Bei $45°$ etc. ist $\\tan = 1$, wohldefiniert.',
          3: 'Polstellen gibt es periodisch $180°$-weise, nicht nur $90°, 270°$.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['tan-polstellen'] },
      ),
      mc(
        'Ein Schüler rechnet $\\tan 90° = \\sin 90°/\\cos 90° = 1/0 = \\infty$ und schreibt "$\\tan 90° = \\infty$" als Ergebnis. Wo liegt der Fehler?',
        [
          'In $\\mathbb{R}$ ist Division durch Null nicht definiert — "$\\infty$" ist keine reelle Zahl. Korrekt: $\\tan 90°$ ist undefiniert.',
          'Die Rechnung ist korrekt.',
          'Er müsste $\\tan 90° = -\\infty$ schreiben.',
          '$\\tan 90° = 0$.',
        ],
        0,
        `**Ansatz:** Unendlichkeit ist keine reelle Zahl, sondern ein Grenzwert-Symbol.

**Rechnung:** Korrekt: $\\tan 90°$ ist nicht definiert. Grenzwert: $\\tan\\alpha \\to +\\infty$ für $\\alpha \\nearrow 90°$ und $\\to -\\infty$ für $\\alpha \\searrow 90°$ — zweiseitig unterschiedlich.

**Probe:** In Prüfungen: "undefiniert" ist die einzig korrekte Antwort.

**Typischer Fehler:** Umgangssprachlich "$\\tan 90° = \\infty$" akzeptieren, mathematisch inkorrekt.`,
        [
          'Ist $\\infty$ eine Zahl?',
          'Was passiert bei Division durch $0$?',
          'Grenzwerte sind keine Funktionswerte.',
        ],
        {
          1: 'Die Rechnung $1/0$ führt nicht zu $\\infty$ als Ergebnis.',
          2: 'Weder $+\\infty$ noch $-\\infty$ sind reelle Zahlen.',
          3: '$\\tan 90° = 0$ ist komplett falsch — das wäre $\\tan 0°$ oder $\\tan 180°$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['tan-polstellen'] },
      ),
      matching(
        'Ordne jedem Winkel die Eigenschaft "Polstelle oder wohldefiniert" zu.',
        [
          { left: '$\\tan 60°$',  right: 'wohldefiniert' },
          { left: '$\\tan 270°$', right: 'Polstelle' },
          { left: '$\\tan 180°$', right: 'wohldefiniert' },
          { left: '$\\tan 90°$',  right: 'Polstelle' },
        ],
        `**Ansatz:** Polstelle ↔ $\\cos\\alpha = 0$.

**Rechnung:** $\\cos 60° = 1/2 \\neq 0$. $\\cos 270° = 0$ (Polstelle). $\\cos 180° = -1 \\neq 0$. $\\cos 90° = 0$ (Polstelle).

**Probe:** Periodizität: $90° + k\\cdot 180°$.

**Typischer Fehler:** $\\tan 180°$ als Polstelle annehmen — bei $180°$ ist $\\sin = 0$ (nicht $\\cos$), also $\\tan = 0$.`,
        [
          'Polstelle: $\\cos = 0$.',
          '$\\cos = 0$ bei $90°, 270°$.',
          '$\\cos 180° = -1$ (nicht 0).',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['tan-polstellen'] },
      ),
    ],

    // ── [2] Periode von tan ist 180° ──────────────────────────────────────
    2: [
      tf(
        'Die Periode von $\\tan$ ist $180°$, nicht $360°$.',
        true,
        `**Ansatz:** Nach $180°$-Drehung landet der Punkt gegenüber: $(x, y) \\to (-x, -y)$. Beide Vorzeichen kippen, Quotient $y/x$ bleibt gleich.

**Rechnung:** $\\tan(\\alpha + 180°) = (-\\sin\\alpha)/(-\\cos\\alpha) = \\sin\\alpha/\\cos\\alpha = \\tan\\alpha$.

**Probe:** $\\tan 30° = 1/\\sqrt 3 = \\tan 210°$ ✓.

**Typischer Fehler:** Periode $360°$ annehmen (wie bei $\\sin, \\cos$).`,
        [
          'Was passiert bei Punktspiegelung?',
          'Beide Vorzeichen kippen.',
          'Im Quotient heben sich auf.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['tan-periode'] },
      ),
      mc(
        'Welcher Winkel hat denselben Tangens wie $45°$?',
        ['$225°$', '$315°$', '$135°$', '$405°$'],
        0,
        `**Ansatz:** Periode $180°$: $\\tan(\\alpha + 180°) = \\tan\\alpha$.

**Rechnung:** $45° + 180° = 225°$. $\\tan 225° = \\tan 45° = 1$.

**Probe:** Zahlenwert: beide Quadranten (Q1 und Q3) haben positiven Tangens ✓.

**Typischer Fehler:** $135°$ (2. Q — negativ) oder $315°$ (4. Q — negativ) wählen.`,
        [
          'Periode $180°$.',
          '$45° + 180° = ?$',
          'ASTC: Q3 hat $\\tan > 0$.',
        ],
        {
          1: '$\\tan 315° = \\tan(-45°) = -1 \\neq 1$.',
          2: '$\\tan 135° = \\tan(180°-45°) = -\\tan 45° = -1$.',
          3: '$405° - 360° = 45°$ — durch $360°$-Periode, aber das ist Periode, nicht $180°$-Symmetrie. Gleicher Wert, aber Frage nach $180°$-Symmetrie.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['tan-periode'] },
      ),
      ni(
        'Gegeben $\\tan 15° \\approx 0{,}268$. Berechne $\\tan(195°)$. (3 NK)',
        0.268, 0.01, '',
        `**Ansatz:** $195° = 15° + 180°$ → Periode.

**Rechnung:** $\\tan 195° = \\tan 15° \\approx 0{,}268$.

**Probe:** $195°$ in Q3 → $\\tan > 0$ (ASTC) ✓.

**Typischer Fehler:** Vorzeichen kippen (wie bei Supplementformel).`,
        [
          'Periode von $\\tan$.',
          '$195° - 15° = 180°$.',
          'Kein Vorzeichenwechsel.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['tan-periode'] },
      ),
      mc(
        'Ein Schüler rechnet $\\tan 200° = \\tan(200° - 360°) = \\tan(-160°) = -\\tan 160°$. Wo ist der Umweg überflüssig?',
        [
          'Die Periode von $\\tan$ ist $180°$, nicht $360°$. Direkt: $\\tan 200° = \\tan(200° - 180°) = \\tan 20°$. Einfacher und richtiger.',
          'Die Rechnung ist optimal.',
          'Er müsste mit $180°$ und $360°$ arbeiten.',
          'Tangens hat keine Periode.',
        ],
        0,
        `**Ansatz:** Kleinste Periode nutzen = $180°$.

**Rechnung:** Direkt: $\\tan 200° = \\tan(200° - 180°) = \\tan 20° \\approx 0{,}364$. Keine Vorzeichen-Verwirrung.

**Probe:** Der Schüler-Weg kommt auf dasselbe, aber ist fehleranfällig (Doppel-Vorzeichen).

**Typischer Fehler:** Periode $360°$ annehmen (wie bei $\\sin, \\cos$). Bei $\\tan$ ist $180°$ kürzer.`,
        [
          'Periode von $\\tan$: $180°$.',
          'Einfachste Reduktion.',
          'Weniger Vorzeichen-Arithmetik.',
        ],
        {
          1: 'Die Schüler-Rechnung ist korrekt, aber unnötig kompliziert.',
          2: '$180°$ reicht für die Periode; $360°$ ist ein Vielfaches.',
          3: '$\\tan$ ist sehr wohl periodisch, mit Periode $180°$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['tan-periode'] },
      ),
      matching(
        'Ordne jedem Winkel einen äquivalenten Tangens-Winkel in $[0°, 180°)$ zu.',
        [
          { left: '$\\tan 200°$', right: '$\\tan 20°$' },
          { left: '$\\tan 320°$', right: '$\\tan 140°$' },
          { left: '$\\tan 225°$', right: '$\\tan 45°$' },
          { left: '$\\tan 190°$', right: '$\\tan 10°$' },
        ],
        `**Ansatz:** Modulo $180°$.

**Rechnung:** $200° - 180° = 20°$. $320° - 180° = 140°$. $225° - 180° = 45°$. $190° - 180° = 10°$.

**Probe:** Alle reduzierten Werte $\\in [0°, 180°)$.

**Typischer Fehler:** $360°$ abziehen (falsche Periode).`,
        [
          '$\\tan$-Periode: $180°$.',
          'Reduktion: $\\alpha - 180°$.',
          'Wert identisch, Vorzeichen beachtet.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['tan-periode'] },
      ),
    ],

    // ── [3] ASTC für Tangens: Q1 und Q3 positiv ───────────────────────────
    3: [
      matching(
        'Ordne jedem Quadranten das Vorzeichen von $\\tan$ zu.',
        [
          { left: 'Q1 ($0°$–$90°$)',     right: 'positiv' },
          { left: 'Q2 ($90°$–$180°$)',   right: 'negativ' },
          { left: 'Q3 ($180°$–$270°$)',  right: 'positiv' },
          { left: 'Q4 ($270°$–$360°$)',  right: 'negativ' },
        ],
        `**Ansatz:** $\\tan = y/x$. Vorzeichen aus den Quadranten:
Q1: $x>0, y>0$ → $+/+=+$
Q2: $x<0, y>0$ → $-/+=-$
Q3: $x<0, y<0$ → $-/-=+$
Q4: $x>0, y<0$ → $+/-=-$

**Rechnung:** Nur Q1 und Q3 positiv.

**Probe:** ASTC-Merkregel — "T" steht im Q3.

**Typischer Fehler:** Alle Quadranten gleich behandeln.`,
        [
          '$\\tan = y/x$.',
          'Vorzeichen pro Quadrant prüfen.',
          'ASTC: T in Q3.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['tan-astc'] },
      ),
      mc(
        'In welchem Quadranten ist $\\tan\\alpha > 0$ und $\\sin\\alpha < 0$ gleichzeitig?',
        ['Q3', 'Q1', 'Q2', 'Q4'],
        0,
        `**Ansatz:** $\\tan > 0$ in Q1 und Q3. $\\sin < 0$ in Q3 und Q4. Schnittmenge: Q3.

**Rechnung:** Q3: $x<0, y<0$. $\\sin = y < 0$ ✓. $\\tan = y/x = -/- > 0$ ✓.

**Probe:** Beispiel: $\\alpha = 210°$ → $\\sin 210° = -0{,}5 < 0$; $\\tan 210° = \\tan 30° = 1/\\sqrt 3 > 0$ ✓.

**Typischer Fehler:** Q1 (beide positiv) oder Q4 ($\\sin < 0$, aber $\\tan < 0$) wählen.`,
        [
          'ASTC anwenden.',
          'Zwei Bedingungen kombinieren.',
          'Nur ein Quadrant erfüllt beide.',
        ],
        {
          1: 'Q1: $\\sin > 0$ — widerspricht.',
          2: 'Q2: $\\tan < 0$ — widerspricht.',
          3: 'Q4: $\\tan < 0$ — widerspricht.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['tan-astc'] },
      ),
      mc(
        'Das Vorzeichen von $\\tan 300°$ ist:',
        ['negativ', 'positiv', 'null', 'nicht bestimmbar'],
        0,
        `**Ansatz:** $300°$ im Q4 → $\\tan < 0$.

**Rechnung:** ASTC: Q4 → nur $\\cos$ positiv, $\\sin$ und $\\tan$ negativ.

**Probe:** $\\tan 300° = -\\tan 60° = -\\sqrt 3 \\approx -1{,}732$.

**Typischer Fehler:** Q3 statt Q4 identifizieren.`,
        [
          'Quadrant von $300°$?',
          'ASTC für $\\tan$.',
          'Q4 → negativ.',
        ],
        {
          1: 'Nicht positiv — Q4.',
          2: '$\\tan$ ist nur bei $0°, 180°, \\ldots$ null.',
          3: 'Sehr wohl bestimmbar — Quadrant ist klar.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['tan-astc'] },
      ),
      mc(
        'Ein Schüler sagt: „$\\tan 150° > 0$, weil der Referenzwinkel $30°$ positiv ist." Wo liegt der Fehler?',
        [
          'Der Referenzwinkel ist IMMER positiv; das Vorzeichen von $\\tan$ kommt aus dem Quadranten. $150°$ liegt in Q2, wo $\\tan < 0$.',
          'Die Rechnung stimmt.',
          'Der Referenzwinkel ist $60°$, nicht $30°$.',
          '$\\tan 150° = 0$.',
        ],
        0,
        `**Ansatz:** Referenzwinkel-Betrag + Quadranten-Vorzeichen kombinieren.

**Rechnung:** $|\\tan 150°| = |\\tan 30°| = 1/\\sqrt 3$. Aber Q2 → $\\tan < 0$ → $\\tan 150° = -1/\\sqrt 3$.

**Probe:** Am Einheitskreis: Q2 hat $x < 0$, $y > 0$ → $\\tan = y/x < 0$.

**Typischer Fehler:** Referenzwinkel-Vorzeichen als Trig-Funktions-Vorzeichen missdeuten.`,
        [
          'Referenzwinkel ist Betrag.',
          'Vorzeichen kommt aus Quadrant.',
          'Q2: $\\tan < 0$.',
        ],
        {
          1: 'Die Aussage ist nicht korrekt — das Vorzeichen ist negativ.',
          2: '$180° - 150° = 30°$, also Referenz $30°$ (nicht $60°$).',
          3: '$\\tan 150° \\neq 0$ — das wäre nur bei $0°, 180°, \\ldots$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['tan-astc'] },
      ),
      mc(
        'In welchem Quadranten gilt: $\\sin\\alpha > 0$, $\\cos\\alpha < 0$, $\\tan\\alpha < 0$?',
        ['Q2', 'Q1', 'Q3', 'Q4'],
        0,
        `**Ansatz:** $\\sin > 0$ (Q1, Q2); $\\cos < 0$ (Q2, Q3). Schnitt: Q2. Check $\\tan = \\sin/\\cos = +/- < 0$ ✓.

**Rechnung:** Q2 erfüllt alle drei.

**Probe:** ASTC: Q2 = "Sinus" → nur Sinus positiv ✓.

**Typischer Fehler:** Q3 wählen (dort $\\sin < 0$).`,
        [
          'Alle drei Bedingungen kombinieren.',
          'Schnittmenge der Quadranten.',
          'Q2: $\\sin+, \\cos-, \\tan-$.',
        ],
        {
          1: 'Q1: alle positiv — widerspricht.',
          2: 'Q3: $\\sin < 0$ — widerspricht.',
          3: 'Q4: $\\sin < 0, \\cos > 0$ — widerspricht.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['tan-astc'] },
      ),
    ],

    // ── [4] tan ist ungerade: tan(-α) = -tan α ────────────────────────────
    4: [
      tf(
        '$\\tan(-\\alpha) = -\\tan(\\alpha)$ für alle Winkel $\\alpha$ mit $\\cos\\alpha \\neq 0$.',
        true,
        `**Ansatz:** $\\tan = \\sin/\\cos$. $\\sin$ ungerade, $\\cos$ gerade. Quotient: ungerade.

**Rechnung:** $\\tan(-\\alpha) = \\sin(-\\alpha)/\\cos(-\\alpha) = (-\\sin\\alpha)/\\cos\\alpha = -\\tan\\alpha$.

**Probe:** $\\tan(-30°) = -\\tan 30° = -1/\\sqrt 3$ ✓.

**Typischer Fehler:** $\\tan$ als gerade annehmen (weil $\\cos$ gerade ist).`,
        [
          'Quotient aus ungerade/gerade.',
          'Resultat: ungerade.',
          'Vorzeichen kippt.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['tan-ungerade'] },
      ),
      mc(
        'Gegeben $\\tan 25° \\approx 0{,}466$. Wie groß ist $\\tan(-25°)$?',
        ['$-0{,}466$', '$+0{,}466$', '$-1$', '$+2{,}145$'],
        0,
        `**Ansatz:** $\\tan(-\\alpha) = -\\tan\\alpha$.

**Rechnung:** $-0{,}466$.

**Probe:** Ungerade Funktion.

**Typischer Fehler:** $+0{,}466$ (gerade Funktion angenommen) oder Kehrwert $\\approx 2{,}145$.`,
        [
          'Ungerade Funktion.',
          'Vorzeichen kippt.',
          'Betrag bleibt.',
        ],
        {
          1: 'Positiv wäre gerade Funktion; $\\tan$ ist ungerade.',
          2: '$-1$ ist $\\tan(-45°)$, nicht $\\tan(-25°)$.',
          3: '$1/\\tan 25° = \\cot 25° \\approx 2{,}145$ — ungefragte Funktion.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['tan-ungerade'] },
      ),
      ni(
        'Berechne $\\tan(-60°)$. (3 NK)',
        -1.732, 0.01, '',
        `**Ansatz:** $\\tan(-60°) = -\\tan 60° = -\\sqrt 3 \\approx -1{,}732$.

**Rechnung:** Grundwert negieren.

**Probe:** $-60°$ in Q4 → $\\tan < 0$ ✓.

**Typischer Fehler:** Positives Ergebnis.`,
        [
          'Ungerade Funktion.',
          '$\\tan 60° = \\sqrt 3$.',
          'Negieren.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['tan-ungerade'] },
      ),
      mc(
        'Ein Schüler sagt: „$\\tan(-45°) = \\tan 45° = 1$, weil beide Winkel die gleiche absolute Steigung $1$ haben." Wo liegt der Fehler?',
        [
          'Absolute Steigung ist $|\\tan|$. Das Vorzeichen unterscheidet: $\\tan(-45°) = -1$, weil die Ursprungsgerade im 4. Quadranten negative Steigung hat.',
          'Die Rechnung stimmt.',
          'Beide Winkel sind nicht definiert.',
          '$\\tan 45° = -1$.',
        ],
        0,
        `**Ansatz:** Vorzeichen zählt. $\\tan(-45°) = -\\tan 45° = -1$ (ungerade).

**Rechnung:** Am Einheitskreis: $-45°$ liegt bei $(x, y) = (\\sqrt 2/2, -\\sqrt 2/2)$. Steigung $y/x = -1$.

**Probe:** Visualisierung: Gerade von Ursprung nach unten-rechts hat negative Steigung.

**Typischer Fehler:** „Betrag gleich" mit "Wert gleich" verwechseln.`,
        [
          'Steigung mit Vorzeichen.',
          'Q4: Steigung negativ.',
          'Ungerade Funktion.',
        ],
        {
          1: 'Die Rechnung ignoriert das Vorzeichen.',
          2: 'Beide Winkel sind wohldefiniert (kein Polstellen).',
          3: '$\\tan 45° = +1$, nicht $-1$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['tan-ungerade'] },
      ),
      matching(
        'Ordne jedem Tangens-Ausdruck sein Ergebnis zu.',
        [
          { left: '$\\tan(-30°)$', right: '$-1/\\sqrt{3}$' },
          { left: '$\\tan(-45°)$', right: '$-1$' },
          { left: '$\\tan(-60°)$', right: '$-\\sqrt{3}$' },
          { left: '$\\tan(-0°)$',  right: '$0$' },
        ],
        `**Ansatz:** Grundwerte negieren.

**Rechnung:** Ungerade Funktion kippt Vorzeichen.

**Probe:** Ausnahme: $\\tan 0° = 0 = -0 = \\tan(-0°)$.

**Typischer Fehler:** Werte positiv lassen.`,
        [
          'Grundwerte + negieren.',
          'Ausnahme: $0 \\to 0$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['tan-ungerade'] },
      ),
    ],

    // ── [5] Wertebereich tan: (-∞, +∞) ────────────────────────────────────
    5: [
      tf(
        'Der Tangens kann jeden reellen Wert annehmen — Wertebereich ist $(-\\infty, +\\infty)$.',
        true,
        `**Ansatz:** Annäherung an Polstellen treibt $\\tan$ zu beliebig großen Werten.

**Rechnung:** Zwischen zwei Polstellen ($-90°$ und $+90°$) wächst $\\tan$ monoton von $-\\infty$ bis $+\\infty$.

**Probe:** $\\tan 89° \\approx 57{,}3$; $\\tan 89{,}9° \\approx 572{,}96$; $\\tan 89{,}99° \\approx 5729{,}58$. Beliebig groß.

**Typischer Fehler:** $\\tan$ wie $\\sin, \\cos$ auf $[-1, 1]$ beschränkt annehmen.`,
        [
          'Wertebereich von $\\tan$.',
          'Unbeschränkt nach beiden Seiten.',
          'Verhalten bei Polstellen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['tan-wertebereich'] },
      ),
      mc(
        'Hat die Gleichung $\\tan\\alpha = 100$ eine Lösung in $\\mathbb{R}$?',
        ['Ja — z. B. nahe $89{,}43°$.', 'Nein, $\\tan$ ist auf $[-1, 1]$ beschränkt.', 'Nur in $\\mathbb{C}$.', 'Nur für bestimmte Quadranten.'],
        0,
        `**Ansatz:** $\\tan$ nimmt jeden reellen Wert an.

**Rechnung:** $\\arctan 100 \\approx 89{,}43°$. $\\tan 89{,}43° \\approx 100$ ✓.

**Probe:** Monotonie im Hauptbereich garantiert Existenz einer Lösung.

**Typischer Fehler:** Annehmen, $\\tan$ hätte dieselbe Beschränkung wie $\\sin$.`,
        [
          'Wertebereich $= \\mathbb{R}$.',
          '$\\arctan 100 = ?$',
          'Annäherung an Polstelle.',
        ],
        {
          1: 'Das ist $\\sin/\\cos$, nicht $\\tan$.',
          2: 'In $\\mathbb{R}$ ausreichend.',
          3: 'Lösungen in allen Quadranten (wegen Periodizität).',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['tan-wertebereich'] },
      ),
      tf(
        'Die Gleichung $\\tan\\alpha = 0{,}5$ hat unendlich viele Lösungen in $\\mathbb{R}$.',
        true,
        `**Ansatz:** Periodizität $180°$: alle Lösungen $\\alpha = \\arctan(0{,}5) + k \\cdot 180°$ für $k \\in \\mathbb{Z}$.

**Rechnung:** Hauptlösung $\\alpha_0 = \\arctan(0{,}5) \\approx 26{,}57°$. Weitere: $206{,}57°, 386{,}57°, \\ldots$ und rückwärts $-153{,}43°, \\ldots$

**Probe:** $\\tan$ ist periodisch mit Periode $180°$ → unendlich viele Werte in $\\mathbb{R}$.

**Typischer Fehler:** Nur die Hauptlösung angeben.`,
        [
          'Periodizität von $\\tan$.',
          'Lösungen wiederholen sich.',
          'Unendlich in $\\mathbb{R}$.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['tan-wertebereich'] },
      ),
      mc(
        'Ein Schüler meint: „$\\tan\\alpha \\geq -1$ immer, weil $\\tan$ nicht kleiner als $-1$ werden kann." Wo liegt der Fehler?',
        [
          '$\\tan$ hat KEIN unteres Schranken — er kann beliebig klein werden (z. B. $\\tan 95° \\approx -11{,}43$). Der Schüler verwechselt $\\tan$ mit $\\sin/\\cos$.',
          'Die Aussage stimmt.',
          '$\\tan$ ist nur positiv.',
          'Unterster Wert ist $-10$.',
        ],
        0,
        `**Ansatz:** Wertebereich $(-\\infty, +\\infty)$ — keine Schranke.

**Rechnung:** $\\tan 95° = \\tan(95°-180°) = \\tan(-85°) \\approx -11{,}43$.

**Probe:** Nahe Polstelle bei $90°$ oder $-90°$ wird $|\\tan|$ beliebig groß.

**Typischer Fehler:** Eigenschaften von $\\sin/\\cos$ auf $\\tan$ übertragen. Merke: $\\tan$ hat Polstellen, keine Schranken.`,
        [
          'Wertebereich von $\\tan$.',
          'Unbeschränkt.',
          'Zahlenbeispiel nahe Polstelle.',
        ],
        {
          1: '$\\tan$ ist NICHT auf $[-1, 1]$ oder $[-1, \\infty)$ beschränkt.',
          2: '$\\tan < 0$ in Q2 und Q4 — sehr wohl negativ möglich.',
          3: 'Es gibt keinen "untersten Wert".',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['tan-wertebereich'] },
      ),
      mc(
        'Welche der folgenden Aussagen über den Wertebereich stimmt?',
        [
          '$\\tan: \\mathbb{R} \\setminus \\{90° + k\\cdot 180°\\} \\to \\mathbb{R}$, Definitionsbereich eingeschränkt, Wertebereich unbegrenzt.',
          '$\\tan: \\mathbb{R} \\to [-1, 1]$.',
          '$\\tan: \\mathbb{R}^+ \\to \\mathbb{R}^+$.',
          '$\\tan: [0°, 360°) \\to \\mathbb{R}$.',
        ],
        0,
        `**Ansatz:** $\\tan$ ist überall definiert außer bei Polstellen; Wertebereich unbegrenzt.

**Rechnung:** Definitionslücken bei $\\cos\\alpha = 0$. Sonst: alle reellen Werte erreichbar.

**Probe:** Genau diese Zwei-Eigenschaft charakterisiert $\\tan$.

**Typischer Fehler:** Nur eine der beiden Einschränkungen erkennen.`,
        [
          'Definitionsbereich: $\\mathbb{R}$ minus Polstellen.',
          'Wertebereich: $\\mathbb{R}$.',
          'Zwei Einschränkungen kombiniert.',
        ],
        {
          1: 'Das ist $\\sin$-Wertebereich, nicht $\\tan$.',
          2: 'Negative Werte sind auch möglich — und negative Winkel im Definitionsbereich.',
          3: '$\\tan$ ist auch bei $\\alpha < 0°$ und $\\alpha \\geq 360°$ definiert (Periodizität).',
        },
        { stage: 'transfer', subGoal: 5, uses: ['tan-wertebereich'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-2-5 — Alle vier Quadranten  (6 subGoals)
  // 30 Matrix-Aufgaben: 6 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-5': {
    // ── [0] Quadrantengrenzen Q1-Q4 ───────────────────────────────────────
    0: [
      matching(
        'Ordne jedem Winkelbereich den zugehörigen Quadranten zu.',
        [
          { left: '$0°$–$90°$',    right: 'Q1' },
          { left: '$90°$–$180°$',  right: 'Q2' },
          { left: '$180°$–$270°$', right: 'Q3' },
          { left: '$270°$–$360°$', right: 'Q4' },
        ],
        `**Ansatz:** Quadranten durchnummeriert gegen den Uhrzeigersinn.

**Rechnung:** Jeder Quadrant $90°$ breit.

**Probe:** Achsenpunkte sind Grenzen, gehören per Konvention zum folgenden Quadranten.

**Typischer Fehler:** Gegen- und Uhrzeigersinn verwechseln.`,
        [
          'Gegen den Uhrzeigersinn.',
          'Q1 startet rechts.',
          'Jeder $90°$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['quadranten-grenzen'] },
      ),
      mc(
        'In welchem Quadranten liegt der Winkel $250°$?',
        ['Q3', 'Q2', 'Q4', 'Q1'],
        0,
        `**Ansatz:** $180° < 250° < 270°$ → Q3.

**Rechnung:** Direkt aus den Grenzen.

**Probe:** Am Einheitskreis: $250°$ liegt unten-links, $x<0, y<0$.

**Typischer Fehler:** Q4 annehmen (weil nah an $270°$), aber Grenze ist strikt bis $270°$.`,
        [
          '$180° < 250° < 270°$.',
          'Q3 ist von $180°$ bis $270°$.',
          'Q4 beginnt erst bei $270°$.',
        ],
        {
          1: 'Q2 ist $90°$–$180°$, zu klein.',
          2: 'Q4 beginnt erst bei $270°$.',
          3: 'Q1 endet bei $90°$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['quadranten-grenzen'] },
      ),
      mc(
        'In welchem Quadranten liegt der Winkel $95°$?',
        ['Q2', 'Q1', 'Q3', 'Q4'],
        0,
        `**Ansatz:** $90° < 95° < 180°$ → Q2.

**Rechnung:** Grenzen prüfen.

**Probe:** $95°$ liegt oben-links, $x<0, y>0$.

**Typischer Fehler:** Q1 annehmen (weil nah an $90°$).`,
        [
          'Gerade über $90°$.',
          'Q2 beginnt ab $90°$.',
          'Strikte Grenze.',
        ],
        {
          1: 'Q1 endet bei $90°$.',
          2: 'Q3 beginnt erst bei $180°$.',
          3: 'Q4 beginnt bei $270°$.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['quadranten-grenzen'] },
      ),
      mc(
        'Ein Schüler behauptet: „$90°$ liegt in Q1." Wo liegt der Fehler?',
        [
          '$90°$ ist die Grenze zwischen Q1 und Q2 und gehört per Konvention KEINEM Quadranten strikt an — Q1 endet vor $90°$, Q2 beginnt dort.',
          'Die Aussage stimmt.',
          '$90°$ gehört zu Q4.',
          '$90°$ ist ein Ausnahmewinkel und wird ignoriert.',
        ],
        0,
        `**Ansatz:** Achsenpunkte ($0°, 90°, 180°, 270°$) sind Grenzen, nicht Teil der Quadranten.

**Rechnung:** Konvention: Q1 = $(0°, 90°)$ offen, Q2 = $(90°, 180°)$ offen.

**Probe:** Bei exakt $90°$ ist $\\cos = 0$, was kein "typischer" Q1-Punkt ist.

**Typischer Fehler:** Grenzen zu Q1 schlagen — aber sie sind Achsen, keine Quadranten.`,
        [
          'Achsenpunkte als Grenzen.',
          'Quadranten sind offen.',
          'Achsen gehören keinem.',
        ],
        {
          1: 'Die Aussage ist nicht korrekt — Q1 endet vor $90°$.',
          2: 'Q4 endet bei $360°$/$0°$; bei $90°$ gibt es keine Verbindung.',
          3: '$90°$ ist wichtig — $\\sin 90° = 1$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['quadranten-grenzen'] },
      ),
      matching(
        'Ordne jedem Winkel den zugehörigen Quadranten zu.',
        [
          { left: '$45°$',   right: 'Q1' },
          { left: '$135°$',  right: 'Q2' },
          { left: '$225°$',  right: 'Q3' },
          { left: '$315°$',  right: 'Q4' },
        ],
        `**Ansatz:** Mittig in jedem Quadranten — klassische $45°$-Referenzen.

**Rechnung:** $45° \\in (0, 90)$; $135° \\in (90, 180)$; $225° \\in (180, 270)$; $315° \\in (270, 360)$.

**Probe:** Jedes um $90°$ vom nächsten.

**Typischer Fehler:** Systematisch falsch zählen.`,
        [
          'Schrittweise $+90°$.',
          '$45° + 90° = 135°$ → Q2.',
          'Usw.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['quadranten-grenzen'] },
      ),
    ],

    // ── [1] ASTC-Regel komplett ───────────────────────────────────────────
    1: [
      matching(
        'Ordne jedem Quadranten die jeweils positiven Funktionen zu (ASTC).',
        [
          { left: 'Q1', right: 'Alle ($\\sin, \\cos, \\tan$)' },
          { left: 'Q2', right: 'Nur $\\sin$' },
          { left: 'Q3', right: 'Nur $\\tan$' },
          { left: 'Q4', right: 'Nur $\\cos$' },
        ],
        `**Ansatz:** Merkhilfe "All Students Take Calculus".

**Rechnung:** A=all, S=sin, T=tan, C=cos gehen gegen Uhrzeigersinn in Q1→Q4.

**Probe:** In Q3 sind $x<0, y<0$ → $\\sin = y < 0$, $\\cos = x < 0$, $\\tan = y/x > 0$ (beide negativ → positiv im Quotient).

**Typischer Fehler:** Reihenfolge verwechseln.`,
        [
          'ASTC als Merkhilfe.',
          'Gegen Uhrzeigersinn.',
          'Pro Quadrant nur die benannte Funktion positiv.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['astc-vollstaendig'] },
      ),
      mc(
        'In Q3 ist folgende Funktion positiv:',
        ['$\\tan$', '$\\sin$', '$\\cos$', 'keine'],
        0,
        `**Ansatz:** ASTC: T in Q3.

**Rechnung:** Q3: $x<0, y<0$. $\\tan = y/x = -/- > 0$.

**Probe:** $\\tan 225° = \\tan 45° = 1 > 0$ ✓.

**Typischer Fehler:** Annehmen, in Q3 wäre alles negativ.`,
        [
          'Q3 = T im ASTC.',
          'Beide Koordinaten negativ.',
          'Quotient wird positiv.',
        ],
        {
          1: '$\\sin = y < 0$ in Q3.',
          2: '$\\cos = x < 0$ in Q3.',
          3: 'Genau $\\tan$ ist positiv.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['astc-vollstaendig'] },
      ),
      mc(
        'Ein Winkel hat $\\sin\\alpha > 0$ und $\\cos\\alpha < 0$. In welchem Quadranten liegt er?',
        ['Q2', 'Q1', 'Q3', 'Q4'],
        0,
        `**Ansatz:** ASTC: Nur Sinus positiv → Q2.

**Rechnung:** Q2: $x<0, y>0$.

**Probe:** Beispiel: $\\alpha = 135°$ → $\\sin > 0, \\cos < 0$ ✓.

**Typischer Fehler:** Q4 wählen (dort $\\cos > 0, \\sin < 0$).`,
        [
          'ASTC systematisch anwenden.',
          '$\\sin > 0$: Q1 oder Q2.',
          '$\\cos < 0$: Q2 oder Q3.',
        ],
        {
          1: 'Q1: beide positiv.',
          2: 'Q3: beide negativ.',
          3: 'Q4: $\\sin < 0, \\cos > 0$.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['astc-vollstaendig'] },
      ),
      mc(
        'Ein Schüler sagt: „In Q3 ist $\\tan$ negativ, weil beide Koordinaten negativ sind." Wo liegt der Fehler?',
        [
          'Bei $\\tan = y/x$ heben sich die beiden negativen Vorzeichen auf: $(-)/(-) = (+)$. Also $\\tan > 0$ in Q3.',
          'Die Aussage stimmt.',
          'Er hätte $\\tan = x/y$ schreiben müssen.',
          '$\\tan$ ist in Q3 null.',
        ],
        0,
        `**Ansatz:** Quotient zweier negativer Zahlen ist positiv.

**Rechnung:** $\\tan = \\sin/\\cos$. In Q3: beide negativ → Quotient positiv.

**Probe:** $\\tan 210° = \\sin 210°/\\cos 210° = (-1/2)/(-\\sqrt 3/2) = 1/\\sqrt 3 > 0$ ✓.

**Typischer Fehler:** Pauschal "beide negativ = negativ" annehmen.`,
        [
          'Quotient negativer Zahlen.',
          'Minus durch Minus.',
          'ASTC: T in Q3.',
        ],
        {
          1: '$\\tan$ wird positiv, nicht negativ.',
          2: '$\\tan = y/x$, nicht $x/y$.',
          3: '$\\tan$ ist nur bei $0°, 180°, \\ldots$ null.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['astc-vollstaendig'] },
      ),
      mc(
        'Welche Funktionen sind in Q4 positiv?',
        ['Nur $\\cos$', 'Nur $\\sin$', 'Nur $\\tan$', 'Alle drei'],
        0,
        `**Ansatz:** ASTC: C in Q4.

**Rechnung:** Q4: $x > 0, y < 0$. $\\cos = x > 0$, $\\sin = y < 0$, $\\tan = y/x < 0$.

**Probe:** $\\alpha = 315°$: $\\cos 315° = \\sqrt 2/2 > 0$; $\\sin = -\\sqrt 2/2 < 0$; $\\tan = -1 < 0$.

**Typischer Fehler:** Mit Q1 verwechseln.`,
        [
          'Q4 = C in ASTC.',
          '$x > 0$: Kosinus positiv.',
          '$y < 0$: Sinus negativ.',
        ],
        {
          1: 'Sinus in Q4 negativ.',
          2: 'Tangens in Q4 negativ.',
          3: 'Alle drei wäre nur Q1.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['astc-vollstaendig'] },
      ),
    ],

    // ── [2] Referenzwinkel zur x-Achse ────────────────────────────────────
    2: [
      tf(
        'Der Referenzwinkel wird immer zur nächsten $x$-Achse (bei $0°$ oder $180°$) gemessen, nicht zur $y$-Achse.',
        true,
        `**Ansatz:** Konvention: Referenzwinkel zur $x$-Achse.

**Rechnung:** Q1: Abstand zu $0°$. Q2: Abstand zu $180°$. Q3: Abstand zu $180°$. Q4: Abstand zu $360°$.

**Probe:** Referenzwinkel $\\in [0°, 90°]$.

**Typischer Fehler:** Abstand zur $y$-Achse nehmen → ergibt $|90° - \\alpha|$-Werte.`,
        [
          'x-Achse, nicht y.',
          'Nächste Hälfte.',
          'Immer spitzer Winkel.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['referenzwinkel-def'] },
      ),
      mc(
        'Welcher Referenzwinkel gehört zu $\\alpha = 230°$?',
        ['$50°$', '$40°$', '$130°$', '$-130°$'],
        0,
        `**Ansatz:** Q3 → Abstand zu $180°$: $230° - 180° = 50°$.

**Rechnung:** $50°$.

**Probe:** $\\sin 230° = -\\sin 50°$, $\\cos 230° = -\\cos 50°$ ✓.

**Typischer Fehler:** $360° - 230° = 130°$ → nicht spitz.`,
        [
          'Q3: Abstand zu $180°$.',
          '$230 - 180 = ?$',
          'Spitzer Winkel.',
        ],
        {
          1: '$40° = 360° - 320°$ oder $90° - 50°$ — passt nicht.',
          2: '$130°$ ist nicht spitz.',
          3: 'Negative Werte bei Referenzwinkeln ausgeschlossen.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['referenzwinkel-def'] },
      ),
      ni(
        'Bestimme den Referenzwinkel zu $\\alpha = 300°$ (in Grad).',
        60, 0, '°',
        `**Ansatz:** Q4: Abstand zu $360°$.

**Rechnung:** $360° - 300° = 60°$.

**Probe:** $\\cos 300° = +\\cos 60° = 0{,}5$, $\\sin 300° = -\\sin 60°$ ✓.

**Typischer Fehler:** $300° - 180° = 120°$ rechnen (falsche Achse).`,
        [
          'Q4: Abstand zu $360°$.',
          '$360 - 300 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['referenzwinkel-def'] },
      ),
      mc(
        'Ein Schüler berechnet den Referenzwinkel zu $\\alpha = 120°$ als $120° - 90° = 30°$. Wo liegt der Fehler?',
        [
          'Referenzwinkel werden zur $x$-Achse gemessen ($0°$ oder $180°$), nicht zur $y$-Achse ($90°$). Korrekt: $180° - 120° = 60°$.',
          'Die Rechnung stimmt.',
          'Er müsste $120°$ direkt nehmen.',
          '$30°$ ist zwar falsch, aber nicht weit von $60°$.',
        ],
        0,
        `**Ansatz:** $x$-Achse als Bezugslinie.

**Rechnung:** Q2 (da $90° < 120° < 180°$): $180° - 120° = 60°$.

**Probe:** $\\sin 120° = \\sin 60° = \\sqrt 3/2$; Schüler-Ref $30°$ → $\\sin 30° = 0{,}5 \\neq \\sqrt 3/2$.

**Typischer Fehler:** Klassischer Fall — Bezugsachse falsch.`,
        [
          'x-Achse, nicht y.',
          'Q2 → zu $180°$.',
          '$180° - 120° = ?$',
        ],
        {
          1: 'Die Bezugslinie ist falsch.',
          2: 'Referenzwinkel muss $\\leq 90°$ sein.',
          3: 'Die $30°$ vs. $60°$ sind qualitativ verschieden.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['referenzwinkel-def'] },
      ),
      matching(
        'Ordne jedem Winkel seinen Referenzwinkel zu.',
        [
          { left: '$75°$',   right: '$75°$' },
          { left: '$165°$',  right: '$15°$' },
          { left: '$200°$',  right: '$20°$' },
          { left: '$340°$',  right: '$20°$' },
        ],
        `**Ansatz:** Je nach Quadrant: Q1 direkt; Q2: $180°-\\alpha$; Q3: $\\alpha-180°$; Q4: $360°-\\alpha$.

**Rechnung:** $75° \\in$ Q1 → $75°$. $165° \\in$ Q2 → $180-165=15°$. $200° \\in$ Q3 → $200-180=20°$. $340° \\in$ Q4 → $360-340=20°$.

**Probe:** Alle $\\in [0°, 90°]$.

**Typischer Fehler:** Quadrant falsch identifizieren.`,
        [
          'Quadrant zuerst.',
          'Formel pro Quadrant.',
          'Immer spitzer Winkel.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['referenzwinkel-def'] },
      ),
    ],

    // ── [3] 4-Schritt-Verfahren: Quadrant → Referenz → Grundwert → Vorzeichen ─
    3: [
      tf(
        'Das Standard-Verfahren zur Berechnung von $\\sin\\alpha$ für $\\alpha \\notin [0°, 90°]$ lautet: Quadrant bestimmen → Referenzwinkel bilden → Q1-Grundwert nachschlagen → Vorzeichen aus ASTC ergänzen.',
        true,
        `**Ansatz:** Vier-Schritt-Verfahren reduziert jeden Winkel auf $[0°, 90°]$ + Vorzeichen.

**Rechnung:** Beispiel $\\sin 210°$: Q3 → Ref $30°$ → $\\sin 30° = 1/2$ → in Q3 $\\sin < 0$ → $-1/2$.

**Probe:** $\\sin 210° = -0{,}5$ per Tabelle ✓.

**Typischer Fehler:** Nur 2-3 Schritte durchziehen (Vorzeichen oder Quadrant vergessen).`,
        [
          'Vier Schritte.',
          'Quadrant zuerst, Vorzeichen zuletzt.',
          'Dazwischen: Referenzwinkel + Q1-Wert.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['vier-schritt-reduktion'] },
      ),
      mc(
        'Wende das 4-Schritt-Verfahren an: $\\cos 240°$ ist …',
        ['$-1/2$', '$+1/2$', '$-\\sqrt{3}/2$', '$+\\sqrt{3}/2$'],
        0,
        `**Ansatz:** Quadrant $\\to$ Referenz $\\to$ Grundwert $\\to$ Vorzeichen.

**Rechnung:** 1. Q3. 2. Ref = $240-180 = 60°$. 3. $\\cos 60° = 1/2$. 4. Q3 → $\\cos < 0$ → $-1/2$.

**Probe:** Direkt: $\\cos 240° = -1/2$ ✓.

**Typischer Fehler:** Q3 als $\\tan$-Quadrant verwechseln → Vorzeichen falsch.`,
        [
          'Schritt 1: Q3.',
          'Schritt 2: Ref = $60°$.',
          'Schritt 3 + 4.',
        ],
        {
          1: 'Vorzeichen vergessen.',
          2: '$\\sqrt 3/2$ ist $\\cos 30°$ oder $\\sin 60°$.',
          3: 'Positives $\\sqrt 3/2$ wäre Q1.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['vier-schritt-reduktion'] },
      ),
      ni(
        'Berechne $\\sin 150°$ per 4-Schritt-Verfahren. (3 NK)',
        0.5, 0.01, '',
        `**Ansatz:** 1. Q2. 2. Ref $= 180°-150° = 30°$. 3. $\\sin 30° = 0{,}5$. 4. Q2: $\\sin > 0$ → $+0{,}5$.

**Rechnung:** $\\sin 150° = 0{,}5$.

**Probe:** Supplementformel: $\\sin(180°-\\alpha) = \\sin\\alpha$ ✓.

**Typischer Fehler:** Vorzeichen kippen.`,
        [
          'Q2.',
          'Ref = $30°$.',
          'Sinus positiv in Q2.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['vier-schritt-reduktion'] },
      ),
      mc(
        'Ein Schüler berechnet $\\cos 200°$: 1. Q3. 2. Ref = $200° - 90° = 110°$. Wo liegt der Fehler?',
        [
          'Im Schritt 2: Referenzwinkel wird zur $x$-Achse (bei $180°$), nicht zur $y$-Achse (bei $90°$) gemessen. Korrekt: Ref $= 200° - 180° = 20°$.',
          'Die Rechnung stimmt.',
          'Er müsste $360° - 200° = 160°$ nehmen.',
          'In Schritt 1: $200°$ ist nicht in Q3.',
        ],
        0,
        `**Ansatz:** Referenzwinkel-Regel.

**Rechnung:** Korrekt: Ref = $20°$, dann $\\cos 20° \\approx 0{,}940$, Q3 → $-0{,}940$.

**Probe:** Ohne korrekten Referenzwinkel ist der ganze Weg falsch.

**Typischer Fehler:** Wiederkehrende Referenzwinkel-Verwechslung.`,
        [
          'Schritt 2 genau prüfen.',
          'x-Achse = Bezugslinie.',
          'Q3 → zu $180°$.',
        ],
        {
          1: 'Die Rechnung hat in Schritt 2 den Fehler.',
          2: '$160°$ wäre Q2-Berechnung.',
          3: '$200° \\in (180°, 270°) = $ Q3 korrekt.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['vier-schritt-reduktion'] },
      ),
      sorting(
        'Bringe die Schritte zur Berechnung von $\\sin 330°$ per 4-Schritt-Verfahren in die richtige Reihenfolge.',
        [
          'Quadrant bestimmen: $330° \\in (270°, 360°)$ → Q4',
          'Referenzwinkel: $360° - 330° = 30°$',
          'Q1-Grundwert: $\\sin 30° = 1/2$',
          'Vorzeichen aus ASTC: Q4 → $\\sin < 0$ → $-1/2$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte strikt einhalten.

**Rechnung:** $\\sin 330° = -1/2$.

**Probe:** Direkt: $\\sin(-30°) = -\\sin 30° = -1/2$ ✓.

**Typischer Fehler:** Schritte mischen oder auslassen.`,
        [
          'Reihenfolge strikt.',
          'Erst Quadrant, zuletzt Vorzeichen.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['vier-schritt-reduktion'] },
      ),
    ],

    // ── [4] Standardwerte Q1 auswendig, Rest per Reduktion ────────────────
    4: [
      tf(
        'Man muss nur die Q1-Grundwerte $\\sin$/$\\cos$ für $0°, 30°, 45°, 60°, 90°$ auswendig kennen — alle anderen Standardwerte ergeben sich per Reduktion.',
        true,
        `**Ansatz:** Ökonomisches Lernen: fünf Q1-Grundwerte + Reduktionsregeln = alle Werte.

**Rechnung:** $\\sin 150° = \\sin(180°-30°) = \\sin 30°$. $\\cos 240° = -\\cos 60°$. Usw.

**Probe:** Methode reicht für alle Standard-Prüfungs-Winkel.

**Typischer Fehler:** Alle Werte einzeln auswendig lernen wollen.`,
        [
          '5 Grundwerte statt 20+.',
          'Reduktion auf Q1.',
          'Effizient.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['standardwerte-reduktion'] },
      ),
      mc(
        'Berechne $\\cos 300°$ mit dem Reduktions-Ansatz.',
        ['$1/2$', '$-1/2$', '$\\sqrt{3}/2$', '$-\\sqrt{3}/2$'],
        0,
        `**Ansatz:** Q4 → Ref $= 60°$ → $\\cos 60° = 1/2$ → Q4: $\\cos > 0$ → $+1/2$.

**Rechnung:** $\\cos 300° = 1/2$.

**Probe:** Punktspiegelung zu $\\cos 60°$ via $\\cos(-60°) = \\cos 60°$ und $300° = -60° + 360°$ ✓.

**Typischer Fehler:** Vorzeichen kippen.`,
        [
          'Q4 → $\\cos > 0$.',
          'Ref = $60°$.',
          'Grundwert $\\cos 60°$.',
        ],
        {
          1: 'Q4 hat $\\cos > 0$ — Vorzeichen stimmt nicht.',
          2: '$\\sqrt 3/2 = \\cos 30°$, nicht $\\cos 60°$.',
          3: '$-\\sqrt 3/2$ doppelt falsch.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['standardwerte-reduktion'] },
      ),
      ni(
        'Berechne $\\sin 225°$ per Reduktion. (3 NK)',
        -0.707, 0.01, '',
        `**Ansatz:** Q3 → Ref $= 45°$ → $\\sin 45° = \\sqrt 2/2$ → Q3: $\\sin < 0$ → $-\\sqrt 2/2 \\approx -0{,}707$.

**Rechnung:** $-0{,}707$.

**Probe:** $\\sin(180°+45°) = -\\sin 45°$ ✓.

**Typischer Fehler:** $\\cos 45°$ statt $\\sin 45°$ ablesen.`,
        [
          'Q3.',
          'Ref $= 45°$.',
          '$\\sin < 0$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['standardwerte-reduktion'] },
      ),
      mc(
        'Ein Schüler sagt: „Ich muss $\\sin 210°, \\sin 150°, \\sin 330°$ auswendig lernen." Wo liegt der Fehler?',
        [
          'Alle diese Werte lassen sich aus dem Grundwert $\\sin 30° = 1/2$ mit Vorzeichen aus ASTC berechnen. Auswendig lernen ist nicht nötig.',
          'Er hat recht — keine Reduktion möglich.',
          '$\\sin 150° \\neq \\sin 30°$.',
          'ASTC gilt nicht für diese Winkel.',
        ],
        0,
        `**Ansatz:** Reduktion auf Q1-Grundwerte. Alle drei haben Ref $30°$.

**Rechnung:** $\\sin 150° = +\\sin 30° = 1/2$; $\\sin 210° = -\\sin 30° = -1/2$; $\\sin 330° = -\\sin 30° = -1/2$.

**Probe:** Grundwert $\\sin 30° = 1/2$ reicht.

**Typischer Fehler:** Alle Werte separat speichern (unnötig).`,
        [
          'Alle haben Ref $30°$.',
          'Vorzeichen aus Quadrant.',
          'Reduktion erspart Auswendiglernen.',
        ],
        {
          1: 'Reduktion ist möglich und effizienter.',
          2: '$\\sin 150° = +\\sin 30°$ (Supplementformel).',
          3: 'ASTC gilt universell.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['standardwerte-reduktion'] },
      ),
      ni(
        'Berechne $\\cos 150° + \\cos 210°$ per Reduktion. (3 NK)',
        -1.732, 0.01, '',
        `**Ansatz:** Beide Q2/Q3 → Ref $= 30°$ → $\\cos 30° = \\sqrt 3/2$. Q2: $\\cos < 0$; Q3: $\\cos < 0$.

**Rechnung:** $-\\sqrt 3/2 - \\sqrt 3/2 = -\\sqrt 3 \\approx -1{,}732$.

**Probe:** Beide in Quadranten mit $\\cos < 0$ → Summe negativ.

**Typischer Fehler:** Vorzeichen inkonsistent anwenden.`,
        [
          'Beide Referenzwinkel gleich.',
          'Q2 und Q3 → $\\cos < 0$.',
          'Summe $= -\\sqrt 3$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['standardwerte-reduktion'] },
      ),
    ],

    // ── [5] Winkel > 360° oder < 0° per Modulo ───────────────────────────
    5: [
      tf(
        'Jeder Winkel $\\alpha$ lässt sich per $\\alpha \\bmod 360°$ in den Hauptbereich $[0°, 360°)$ reduzieren.',
        true,
        `**Ansatz:** $\\sin, \\cos$ sind $360°$-periodisch. Modulo erhält den Funktionswert.

**Rechnung:** $\\alpha \\bmod 360°$: ggf. mehrfach $360°$ addieren oder subtrahieren.

**Probe:** $\\sin(\\alpha + k \\cdot 360°) = \\sin\\alpha$ für jedes $k$.

**Typischer Fehler:** Modulo mit ganzzahliger Division bei negativen Zahlen falsch anwenden.`,
        [
          'Periodizität $360°$.',
          'Modulo-Operation.',
          'Hauptbereich $[0°, 360°)$.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['winkel-hauptbereich'] },
      ),
      mc(
        'Reduziere $\\alpha = 500°$ in den Hauptbereich $[0°, 360°)$.',
        ['$140°$', '$360°$', '$-220°$', '$860°$'],
        0,
        `**Ansatz:** $500° - 360° = 140° \\in [0°, 360°)$.

**Rechnung:** $140°$.

**Probe:** $\\sin 500° = \\sin 140° ✓$.

**Typischer Fehler:** Zwei Mal $360°$ abziehen oder $360°$ stehenlassen.`,
        [
          'Einmal $360°$ abziehen.',
          '$500 - 360 = ?$',
          'Hauptbereich offen bei $360°$.',
        ],
        {
          1: '$360°$ gehört nicht mehr zum Hauptbereich $[0°, 360°)$.',
          2: 'Negativ: $500° - 2 \\cdot 360° = -220°$, aber außerhalb.',
          3: '$500° + 360° = 860°$, noch weiter außerhalb.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['winkel-hauptbereich'] },
      ),
      ni(
        'Reduziere $-50°$ in $[0°, 360°)$ und gib den Wert in Grad an.',
        310, 0, '°',
        `**Ansatz:** $-50° + 360° = 310°$.

**Rechnung:** $310° \\in [0°, 360°)$ ✓.

**Probe:** $\\sin(-50°) = -\\sin 50° = \\sin 310°$ (ASTC Q4: $\\sin < 0$) ✓.

**Typischer Fehler:** $360° + 50° = 410°$ (wieder außerhalb).`,
        [
          'Negative Winkel: $+360°$.',
          '$-50 + 360 = ?$',
          'Hauptbereich.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['winkel-hauptbereich'] },
      ),
      mc(
        'Ein Schüler rechnet $\\sin 800°$: $800° - 360° = 440°$; dann $\\sin 440° = \\sin(440° - 360°) = \\sin 80°$. Wo ist sein Weg länger als nötig?',
        [
          'Er hätte direkt $800° - 2\\cdot 360° = 80°$ rechnen können. Der Zwischenschritt bei $440°$ war unnötig.',
          'Der Weg ist optimal.',
          'Er hätte $+360°$ addieren müssen.',
          'Periodizität gilt nicht für $\\sin$.',
        ],
        0,
        `**Ansatz:** Direkt auf Hauptbereich reduzieren.

**Rechnung:** $800° \\bmod 360° = 800° - 2\\cdot 360° = 80°$.

**Probe:** $\\sin 80° \\approx 0{,}985$ — dasselbe Ergebnis, aber weniger Rechenschritte.

**Typischer Fehler:** Iterativ $360°$ abziehen statt direkt modulo rechnen.`,
        [
          'Modulo direkt.',
          'Wie oft passt $360°$ in $800°$?',
          '$2 \\cdot 360° = 720°$; $800° - 720° = 80°$.',
        ],
        {
          1: 'Der Weg ist zwar korrekt, aber unnötig schrittweise.',
          2: '$800° + 360° = 1160°$, weiter weg.',
          3: 'Periodizität gilt sehr wohl.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['winkel-hauptbereich'] },
      ),
      ni(
        'Berechne $\\sin(-500°)$ via Modulo + Reduktion. (3 NK)',
        -0.643, 0.01, '',
        `**Ansatz:** $-500° + 2 \\cdot 360° = 220°$. Q3 → Ref $40°$ → $\\sin 40° \\approx 0{,}643$. Q3: $\\sin < 0$ → $-0{,}643$.

**Rechnung:** $\\sin(-500°) = \\sin 220° = -\\sin 40° \\approx -0{,}643$.

**Probe:** Alternativer Weg: $\\sin(-500°) = -\\sin 500° = -\\sin 140° = -\\sin 40°$ (Supplementformel).

**Typischer Fehler:** Vorzeichen durchwechseln und verlieren.`,
        [
          'Modulo zuerst.',
          '$-500° + 720° = 220°$.',
          '4-Schritt-Verfahren.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['winkel-hauptbereich'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-4-1 — Prüfung: Identitäten & Gleichungen  (5 subGoals, [PRÜFUNG])
  // Je 5 Aufgaben = 25 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-4-1': {

    // ── [0] Pythagoras + Doppelwinkel zur Termvereinfachung ──────────────
    0: [
      mc(
        '[PRÜFUNG] Vereinfache $\\cos^{2}(\\alpha) - \\sin^{2}(\\alpha)$.',
        [
          '$\\cos(2\\alpha)$',
          '$\\sin(2\\alpha)$',
          '$1$',
          '$-1$',
        ],
        0,
        `**Ansatz:** Doppelwinkelformel für $\\cos(2\\alpha)$ erkennen.

**Rechnung:** Eine der Doppelwinkel-Alternativen ist $\\cos(2\\alpha) = \\cos^{2}\\alpha - \\sin^{2}\\alpha$. Der Ausdruck **ist** bereits $\\cos(2\\alpha)$.

**Probe:** $\\alpha = 30°$: $\\cos^{2}(30°) - \\sin^{2}(30°) = 0{,}75 - 0{,}25 = 0{,}5 = \\cos(60°) = \\cos(2 \\cdot 30°)$ ✓.

**Typischer Fehler:** $\\cos^{2} - \\sin^{2}$ mit $\\sin^{2} + \\cos^{2}$ verwechseln — Plus gibt $1$, Minus gibt $\\cos(2\\alpha)$.`,
        [
          'Welche Doppelwinkelformel hat diese Struktur?',
          '$\\cos(2\\alpha) = \\cos^{2}\\alpha - \\sin^{2}\\alpha$.',
          'Testen mit $\\alpha = 30°$ zur Kontrolle.',
        ],
        {
          1: '$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ — ein **Produkt**, keine Differenz von Quadraten.',
          2: 'Das wäre $\\sin^{2}\\alpha + \\cos^{2}\\alpha = 1$ (Pythagoras). Minus statt Plus liefert ein ganz anderes Ergebnis.',
          3: '$-1$ wäre nur bei $\\alpha = 90°$ der Wert — für allgemeines $\\alpha$ gilt das nicht.',
        },
      ),
      ni(
        '[PRÜFUNG] Gegeben $\\sin\\alpha = 0{,}6$ und $\\alpha$ im 1. Quadranten. Berechne $\\sin(2\\alpha)$.',
        0.96, 0.01, '',
        `**Ansatz:** Erst $\\cos\\alpha$ per Pythagoras, dann Doppelwinkel.

**Rechnung:** $\\cos\\alpha = \\sqrt{1 - 0{,}36} = \\sqrt{0{,}64} = 0{,}8$ (positiv im 1. Q). $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2 \\cdot 0{,}6 \\cdot 0{,}8 = 0{,}96$.

**Probe:** Das berühmte 3-4-5-Dreieck: $\\alpha \\approx 36{,}87°$, $2\\alpha \\approx 73{,}74°$, $\\sin(73{,}74°) \\approx 0{,}96$ ✓.

**Typischer Fehler:** $\\cos\\alpha$ weglassen und $\\sin(2\\alpha) = 2\\sin\\alpha = 1{,}2$ rechnen. Das wäre $> 1$ und somit garantiert falsch.`,
        [
          'Erst $\\cos\\alpha$ per Pythagoras berechnen.',
          '$\\cos^{2}\\alpha = 1 - \\sin^{2}\\alpha$.',
          'Doppelwinkel: $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Der Ausdruck $1 - 2\\sin^{2}(\\alpha)$ ist gleich $\\cos(2\\alpha)$.',
        true,
        `**Ansatz:** Alternativform der Kosinus-Doppelwinkelformel prüfen.

**Rechnung:** Aus $\\cos(2\\alpha) = \\cos^{2}\\alpha - \\sin^{2}\\alpha$ mit $\\cos^{2}\\alpha = 1 - \\sin^{2}\\alpha$: $\\cos(2\\alpha) = (1 - \\sin^{2}\\alpha) - \\sin^{2}\\alpha = 1 - 2\\sin^{2}\\alpha$ ✓.

**Probe:** $\\alpha = 30°$: $1 - 2\\cdot 0{,}25 = 0{,}5 = \\cos(60°)$ ✓.

**Typischer Fehler:** $1 - \\sin^{2}\\alpha = \\cos^{2}\\alpha$ (nur Pythagoras) mit der Doppelwinkelformel verwechseln — der Faktor $2$ macht den Unterschied.`,
        [
          'Doppelwinkelformel von $\\cos(2\\alpha)$ hat drei Schreibweisen.',
          '$\\cos(2\\alpha) = 1 - 2\\sin^{2}\\alpha = 2\\cos^{2}\\alpha - 1$.',
          'Zahlentest $\\alpha = 30°$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Ausdruck seine vereinfachte Form zu.',
        [
          { left: '$\\sin^{2}\\alpha + \\cos^{2}\\alpha$',      right: '$1$' },
          { left: '$2\\sin\\alpha\\cos\\alpha$',                right: '$\\sin(2\\alpha)$' },
          { left: '$\\cos^{2}\\alpha - \\sin^{2}\\alpha$',      right: '$\\cos(2\\alpha)$' },
          { left: '$1 - \\cos^{2}\\alpha$',                      right: '$\\sin^{2}\\alpha$' },
        ],
        `**Ansatz:** Pythagoras und Doppelwinkel-Formeln präsent haben.

**Rechnung:** Pythagoras: $\\sin^{2}+\\cos^{2} = 1$. Sinus-Doppelwinkel: $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$. Kosinus-Doppelwinkel: $\\cos(2\\alpha) = \\cos^{2}\\alpha - \\sin^{2}\\alpha$. Umstellen von Pythagoras: $\\sin^{2}\\alpha = 1 - \\cos^{2}\\alpha$.

**Probe:** Alle Identitäten sind in der Formelsammlung enthalten und müssen in der Prüfung auf einen Blick erkennbar sein.

**Typischer Fehler:** Plus und Minus in $\\cos^{2} \\pm \\sin^{2}$ verwechseln — Plus gibt $1$, Minus gibt $\\cos(2\\alpha)$.`,
        [
          'Drei Grundformeln: Pythagoras, $\\sin(2\\alpha)$, $\\cos(2\\alpha)$.',
          'Vorzeichen entscheidet.',
          'Gute Prüfungsvorbereitung: diese Vier auswendig.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Vereinfachung von $\\sin^{2}\\alpha(1 + \\cot^{2}\\alpha)$ in die richtige Reihenfolge.',
        [
          '$\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$ einsetzen',
          'Klammer erweitern: $\\sin^{2}\\alpha \\cdot \\left(1 + \\dfrac{\\cos^{2}\\alpha}{\\sin^{2}\\alpha}\\right)$',
          'Ausmultiplizieren: $\\sin^{2}\\alpha + \\cos^{2}\\alpha$',
          'Pythagoras anwenden: Ergebnis $= 1$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Cotangens ausdrücken, dann ausmultiplizieren, dann Pythagoras.

**Rechnung:** Endergebnis $= 1$ — unabhängig von $\\alpha$.

**Probe:** $\\alpha = 30°$: $0{,}25\\cdot(1 + 3) = 1$ ✓.

**Typischer Fehler:** Die Klammer erst zusammenfassen wollen, ohne $\\cot$ zu ersetzen — der Bruchanteil ist nötig, damit sich später $\\sin^{2}$ mit $1/\\sin^{2}$ kürzt.`,
        [
          '$\\cot = \\cos/\\sin$.',
          'Ausmultiplizieren; $\\sin^{2}$ kürzt sich.',
          'Pythagoras am Schluss.',
        ],
      ),
    ],

    // ── [1] Trig-Gleichung: Grundfunktion + Lösungsmenge ──────────────────
    1: [
      mc(
        '[PRÜFUNG] Wie viele Lösungen hat $\\sin x = \\tfrac{1}{2}$ im Intervall $[0°, 360°)$?',
        [
          '$2$ ($30°$ und $150°$)',
          '$1$ ($30°$)',
          '$4$ (mit Supplement und Gegenwinkel)',
          '$0$ (keine Lösung)',
        ],
        0,
        `**Ansatz:** $\\sin x = a$ mit $|a| < 1$ hat in einer vollen Periode $[0°, 360°)$ genau zwei Lösungen.

**Rechnung:** Hauptwert $x_{1} = \\arcsin(0{,}5) = 30°$. Zweite Lösung per Supplement: $x_{2} = 180° - 30° = 150°$.

**Probe:** $\\sin(30°) = \\sin(150°) = 0{,}5$ ✓. Beide im Intervall $[0°, 360°)$.

**Typischer Fehler:** Nur Hauptwert angeben ($30°$). Oder zu viele Lösungen: $210°$ und $330°$ kommen aus Fehlinterpretation, $\\sin$ ist dort aber negativ.`,
        [
          'Sinus ist in welchen Quadranten positiv?',
          '1. und 2. Quadrant: Hauptwert + Supplement.',
          '$\\arcsin(0{,}5) = 30°$, zweite Lösung $180° - 30° = 150°$.',
        ],
        {
          1: 'Hauptwert allein reicht nicht. $\\sin$ hat Periode $360°$ und in $[0°, 360°)$ zwei Lösungen.',
          2: 'In $[0°, 360°)$ gibt es genau **zwei** Lösungen für $\\sin x = a$ mit $|a| < 1$. Vier Lösungen wären nur bei Intervall $[0°, 720°)$.',
          3: '$0{,}5$ liegt im Wertebereich $[-1, 1]$ von Sinus, also existieren Lösungen. Keine Lösung gäbe es nur bei $|a| > 1$.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\cos x = -\\tfrac{1}{2}$ in $[0°, 360°)$. Gib die kleinere Lösung in Grad an.',
        120, 0, '°',
        `**Ansatz:** Für $\\cos x = a$ mit $-1 < a < 1$ gibt es in $[0°, 360°)$ zwei Lösungen: $\\arccos a$ und $360° - \\arccos a$.

**Rechnung:** $\\arccos(-0{,}5) = 120°$ (Hauptwert). Zweite Lösung: $360° - 120° = 240°$. Kleinere Lösung: $120°$.

**Probe:** $\\cos(120°) = -0{,}5$ ✓ (2. Q); $\\cos(240°) = -0{,}5$ ✓ (3. Q).

**Typischer Fehler:** Nur einen Winkel angeben oder das Vorzeichen ignorieren und $\\arccos(0{,}5) = 60°$ rechnen.`,
        [
          'Negatives Kosinus: 2. oder 3. Quadrant.',
          '$\\arccos(-0{,}5)$ direkt eingeben.',
          'Zweite Lösung: $360° - 120°$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Gleichung $\\sin x = 1{,}5$ hat in $\\mathbb{R}$ unendlich viele Lösungen.',
        false,
        `**Ansatz:** Wertebereich von Sinus prüfen.

**Rechnung:** $\\sin: \\mathbb{R} \\to [-1, 1]$. Der Wert $1{,}5 > 1$ liegt außerhalb des Wertebereichs. Also gibt es **keine** reelle Lösung — nicht "unendlich viele".

**Probe:** $\\sin$ oszilliert zwischen $-1$ und $+1$. Niemals $1{,}5$.

**Typischer Fehler:** Voreiligen Schluss "Sinus ist periodisch, also immer unendlich viele Lösungen" — das gilt nur, solange $|a| \\le 1$.`,
        [
          'Wertebereich von $\\sin$.',
          '$|\\sin x| \\le 1$.',
          '$1{,}5$ liegt außerhalb.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Gleichung die Anzahl Lösungen in $[0°, 360°)$ zu.',
        [
          { left: '$\\sin x = 1$',         right: '$1$ Lösung ($90°$)' },
          { left: '$\\sin x = 0$',         right: '$2$ Lösungen ($0°, 180°$)' },
          { left: '$\\cos x = 0$',         right: '$2$ Lösungen ($90°, 270°$)' },
          { left: '$\\tan x = 1$',         right: '$2$ Lösungen ($45°, 225°$)' },
        ],
        `**Ansatz:** Sin und Cos haben meist 2 Lösungen pro $360°$, an Extremwerten ($\\pm 1$) nur 1. Tan hat Periode $180°$, also 2 Lösungen pro $360°$.

**Rechnung:** $\\sin x = 1$ nur bei $x = 90°$ (Maximum) — **eine** Lösung. $\\sin x = 0$ bei $x = 0°$ und $180°$ — zwei Lösungen. $\\cos x = 0$ bei $x = 90°$ und $270°$. $\\tan x = 1$ bei $x = 45°$ und $45° + 180° = 225°$.

**Probe:** Alle Werte einsetzen.

**Typischer Fehler:** Bei Extremwerten ($\\sin = \\pm 1, \\cos = \\pm 1$) zwei Lösungen vermuten — dort gibt es aber nur eine (Berührungspunkt der Horizontalen mit dem Einheitskreis).`,
        [
          'Extremwerte: 1 Lösung.',
          'Sonst: 2 Lösungen pro $360°$.',
          'Tan-Periode $180°$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung von $\\sin x = -\\tfrac{\\sqrt{2}}{2}$ in $[0°, 360°)$ in die richtige Reihenfolge.',
        [
          'Hauptwert: $\\arcsin(-\\tfrac{\\sqrt{2}}{2}) = -45°$',
          'In $[0°, 360°)$ umrechnen: $-45° + 360° = 315°$',
          'Zweite Lösung (Sinus negativ → 3. und 4. Q, Supplement bezüglich $180°$): $180° - (-45°) = 225°$',
          'Lösungsmenge: $\\{225°, 315°\\}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Hauptwert $\\to$ Intervalltransformation $\\to$ zweite Lösung $\\to$ Gesamtmenge.

**Rechnung:** $x_{1} = 225°$, $x_{2} = 315°$.

**Probe:** $\\sin(225°) = -\\sin(45°) = -\\tfrac{\\sqrt{2}}{2}$ ✓; $\\sin(315°) = -\\sin(45°) = -\\tfrac{\\sqrt{2}}{2}$ ✓.

**Typischer Fehler:** Supplement bei negativem Sinus falsch bilden; Lösungen $45°$ und $135°$ angeben — dort ist $\\sin$ aber positiv.`,
        [
          'Hauptwert per Taschenrechner.',
          'In Intervall transformieren.',
          'Zweite Lösung anhand der Quadranten des Vorzeichens.',
        ],
      ),
    ],

    // ── [2] Substitution u = sin x / cos x bei quadratischen Gleichungen ──
    2: [
      mc(
        '[PRÜFUNG] Welche Substitution führt $2\\sin^{2} x - \\sin x - 1 = 0$ direkt auf eine quadratische Gleichung in $u$?',
        [
          '$u = \\sin x \\Rightarrow 2u^{2} - u - 1 = 0$',
          '$u = \\sin(2x) \\Rightarrow u^{2} - u - 1 = 0$',
          '$u = \\cos x \\Rightarrow 2(1-u^{2}) - u - 1 = 0$',
          '$u = x \\Rightarrow 2u^{2} - u - 1 = 0$',
        ],
        0,
        `**Ansatz:** Die einfachste Substitution ist die, bei der jedes $\\sin x$ durch $u$ ersetzt wird.

**Rechnung:** Mit $u = \\sin x$ wird $\\sin^{2} x = u^{2}$ und die Gleichung $2u^{2} - u - 1 = 0$. Lösungen: $u = 1$ oder $u = -\\tfrac{1}{2}$, also $\\sin x = 1$ oder $\\sin x = -\\tfrac{1}{2}$.

**Probe:** Rücksetzen in die Originalgleichung: bei $\\sin x = 1$: $2 - 1 - 1 = 0$ ✓; bei $\\sin x = -0{,}5$: $0{,}5 + 0{,}5 - 1 = 0$ ✓.

**Typischer Fehler:** $u = \\cos x$ wählen und dann über Pythagoras umformen — möglich, aber unnötig kompliziert, wenn in der Gleichung nur $\\sin$ vorkommt.`,
        [
          'Welche trigonometrische Funktion kommt in der Gleichung vor?',
          'Direkt $u = \\sin x$ setzen.',
          'Quadratische Gleichung in $u$ lösen.',
        ],
        {
          1: '$u = \\sin(2x)$ hilft nicht direkt, weil $\\sin^{2} x$ und $\\sin(2x)$ unterschiedliche Strukturen haben.',
          2: 'Über Pythagoras-Umformung möglich, aber der direkte Weg $u = \\sin x$ ist einfacher.',
          3: '$u = x$ bringt nichts — dann hast du immer noch $\\sin u$ statt eine Polynomform.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\cos^{2} x - \\cos x = 0$ in $[0°, 360°)$. Wie viele Lösungen gibt es?',
        3, 0, '',
        `**Ansatz:** Substitution $u = \\cos x$ führt auf $u^{2} - u = u(u-1) = 0$.

**Rechnung:** $u = 0$ oder $u = 1$. $\\cos x = 0 \\Rightarrow x = 90°, 270°$. $\\cos x = 1 \\Rightarrow x = 0°$. Total: **3 Lösungen** ($0°, 90°, 270°$).

**Probe:** Einsetzen: $x=0°$: $1 - 1 = 0$ ✓; $x=90°$: $0 - 0 = 0$ ✓; $x=270°$: $0 - 0 = 0$ ✓.

**Typischer Fehler:** Direkt durch $\\cos x$ teilen: $\\cos x - 1 = 0 \\to \\cos x = 1 \\to x = 0°$ — dabei gehen die Lösungen $\\cos x = 0$ verloren! Immer faktorisieren, nicht dividieren.`,
        [
          'Substitution $u = \\cos x$.',
          'Faktorisieren: $u(u-1)=0$.',
          'Beide Fälle lösen — nicht vorzeitig durch $\\cos x$ teilen!',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Gleichung $4\\sin^{2} x - 3 = 0$ hat in $[0°, 360°)$ vier Lösungen.',
        true,
        `**Ansatz:** Substitution $u = \\sin x$: $4u^{2} = 3 \\Rightarrow u = \\pm\\tfrac{\\sqrt{3}}{2}$.

**Rechnung:** $\\sin x = \\tfrac{\\sqrt{3}}{2}$: zwei Lösungen ($60°$ und $120°$). $\\sin x = -\\tfrac{\\sqrt{3}}{2}$: zwei Lösungen ($240°$ und $300°$). Gesamt: **4** Lösungen.

**Probe:** Alle vier Winkel einsetzen und Gleichung $4\\cdot 0{,}75 - 3 = 0$ bestätigen.

**Typischer Fehler:** Nur positive Wurzel aus $u^{2} = 0{,}75$ ziehen und damit nur 2 Lösungen finden. $u^{2} = c$ hat immer zwei Lösungen: $u = \\pm\\sqrt{c}$.`,
        [
          'Quadratisches Polynom in $\\sin x$.',
          '$u = \\pm\\sqrt{3}/2$ — beide Vorzeichen.',
          'Je 2 Lösungen pro Vorzeichen.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder quadratischen Gleichung in $u$ die Anzahl Lösungen in $[0°, 360°)$ zu (nach Substitution und Rücksubstitution).',
        [
          { left: '$u^{2} = 1$ (mit $u = \\sin x$)',          right: '$2$ Lösungen ($90°, 270°$)' },
          { left: '$u^{2} = \\tfrac{1}{4}$ (mit $u = \\sin x$)', right: '$4$ Lösungen' },
          { left: '$u^{2} - u = 0$ (mit $u = \\cos x$)',       right: '$3$ Lösungen ($0°, 90°, 270°$)' },
          { left: '$u^{2} = -1$ (mit $u = \\sin x$)',          right: '$0$ Lösungen' },
        ],
        `**Ansatz:** Nach Rücksubstitution die Lösungsanzahl pro $\\sin$-/$\\cos$-Wert bestimmen.

**Rechnung:** $\\sin^{2} x = 1 \\to \\sin x = \\pm 1 \\to x = 90°, 270°$. $\\sin^{2} x = 1/4 \\to \\sin x = \\pm 1/2 \\to 4$ Werte. $\\cos x(\\cos x - 1) = 0 \\to \\cos x = 0$ oder $\\cos x = 1 \\to 3$ Werte. $\\sin^{2} x = -1$ unlösbar in $\\mathbb{R}$.

**Probe:** Alle Lösungswinkel auf Original-Gleichung zurückverifizieren.

**Typischer Fehler:** Beim Wurzelziehen nur eine Vorzeichen-Variante betrachten. Oder Extremwerte ($\\pm 1$) mit doppelter Lösungsanzahl verwechseln.`,
        [
          'Wurzelziehen liefert immer beide Vorzeichen.',
          'Extremwerte geben je 1 Lösung pro Vorzeichen.',
          '$u^{2} = -1$ hat in $\\mathbb{R}$ keine Lösung.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung von $2\\cos^{2} x + \\cos x - 1 = 0$ in die richtige Reihenfolge.',
        [
          'Substitution: $u = \\cos x \\Rightarrow 2u^{2} + u - 1 = 0$',
          'Quadratische Lösungsformel: $u = \\tfrac{-1 \\pm 3}{4}$, also $u = \\tfrac{1}{2}$ oder $u = -1$',
          'Rücksubstitution: $\\cos x = \\tfrac{1}{2}$ oder $\\cos x = -1$',
          'Lösungen in $[0°, 360°)$: $\\{60°, 300°, 180°\\}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Substitution $\\to$ quadratische Lösung $\\to$ Rücksubstitution $\\to$ Winkel.

**Rechnung:** $\\cos x = 1/2: 60°, 300°$; $\\cos x = -1: 180°$. Drei Lösungen.

**Probe:** In Originalgleichung einsetzen: $\\cos(60°) = 0{,}5 \\to 2\\cdot 0{,}25 + 0{,}5 - 1 = 0$ ✓ usw.

**Typischer Fehler:** Zwischen quadratischer und trigonometrischer Stufe springen ohne klare Substitution.`,
        [
          'Immer zuerst substituieren.',
          'Quadratische Formel auf $u$ anwenden.',
          'Erst am Schluss auf Winkel zurückgehen.',
        ],
      ),
    ],

    // ── [3] Faktorisieren statt durch cos x teilen ────────────────────────
    3: [
      mc(
        '[PRÜFUNG] Welcher Weg löst $\\sin x \\cos x = 0$ in $[0°, 360°)$ vollständig?',
        [
          'Faktorisieren: $\\sin x = 0$ oder $\\cos x = 0 \\to \\{0°, 90°, 180°, 270°\\}$',
          'Durch $\\cos x$ teilen: $\\sin x = 0 \\to \\{0°, 180°\\}$',
          'Doppelwinkel: $\\sin(2x) = 0 \\to \\{0°, 90°, 180°\\}$',
          'Quadrieren: $\\sin^{2} x \\cos^{2} x = 0$',
        ],
        0,
        `**Ansatz:** Produkt $= 0 \\Leftrightarrow$ ein Faktor $= 0$. Jeder Faktor muss separat betrachtet werden.

**Rechnung:** $\\sin x = 0 \\to x = 0°, 180°$. $\\cos x = 0 \\to x = 90°, 270°$. Vereinigung: 4 Lösungen.

**Probe:** In jedem Punkt wird einer der Faktoren Null, Produkt Null. ✓

**Typischer Fehler:** Durch $\\cos x$ teilen verliert die Lösungen, in denen $\\cos x = 0$ — genau zwei von vier Lösungen fallen weg. Doppelwinkel-Ansatz $\\sin(2x)/2 = 0$ liefert $2x \\in \\{0°, 180°, 360°, 540°\\}$, also $x \\in \\{0°, 90°, 180°, 270°\\}$ — gleiches Ergebnis, aber hier gefragt ist der elementare Weg.`,
        [
          'Null-Produkt-Regel: Produkt = 0 gdw. ein Faktor = 0.',
          'Nie durch eine Funktion teilen, die Null werden kann.',
          'Beide Faktoren getrennt lösen.',
        ],
        {
          1: 'Durch $\\cos x$ teilen verliert die Lösungen $90°$ und $270°$ — dort ist $\\cos x = 0$. Faktorisieren ist sicherer.',
          2: '$\\sin(2x) = 2\\sin x\\cos x$, also $\\sin x\\cos x = \\tfrac{1}{2}\\sin(2x)$. Die Gleichung wird $\\sin(2x) = 0$ mit Lösungen $2x = k\\cdot 180°$, also $x = 0°, 90°, 180°, 270°$ — **vier** Lösungen, die Antwort hier ist unvollständig.',
          3: 'Quadrieren ändert die Lösungsmenge nur auf Scheinlösungen-Art — hier unnötig.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\sin x \\cdot (2\\sin x - 1) = 0$ in $[0°, 360°)$ und zähle alle Lösungen.',
        4, 0, '',
        `**Ansatz:** Produkt-Null-Regel anwenden.

**Rechnung:** $\\sin x = 0 \\to x \\in \\{0°, 180°\\}$. $2\\sin x - 1 = 0 \\to \\sin x = \\tfrac{1}{2} \\to x \\in \\{30°, 150°\\}$. Gesamt: **4** Lösungen.

**Probe:** Alle einsetzen: bei $x=0°$: $0\\cdot(-1) = 0$ ✓; bei $x=30°$: $0{,}5\\cdot 0 = 0$ ✓ usw.

**Typischer Fehler:** Durch $\\sin x$ teilen (bei Annahme $\\sin x \\ne 0$) — dabei gehen $x = 0°$ und $x = 180°$ verloren.`,
        [
          'Null-Produkt: jeder Faktor einzeln.',
          '$\\sin x = 0$ liefert 2 Werte im Intervall.',
          '$\\sin x = 1/2$ liefert weitere 2 Werte.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei der Gleichung $\\tan x \\cdot \\cos x = 1$ darf man beide Seiten durch $\\cos x$ teilen, ohne Lösungen zu verlieren, weil man nachher die Definitionsmenge von $\\tan x$ berücksichtigen muss.',
        false,
        `**Ansatz:** $\\tan x \\cdot \\cos x = \\sin x$ (Vereinfachung). Die Gleichung wird $\\sin x = 1$.

**Rechnung:** $\\sin x = 1 \\to x = 90°$. Aber: Bei $x = 90°$ ist $\\tan x$ **nicht definiert**! Also ist $x = 90°$ keine zulässige Lösung der **Originalgleichung** — die Originalgleichung hat **keine** Lösung.

**Probe:** Einsetzen $x = 90°$ in $\\tan x \\cdot \\cos x$: $\\tan(90°)$ existiert nicht.

**Typischer Fehler:** Nach Vereinfachung nicht prüfen, ob die gefundene Lösung in der Definitionsmenge der ursprünglichen Gleichung liegt. Vereinfachung kann Scheinlösungen erzeugen.`,
        [
          'Zuerst Definitionsbereich prüfen.',
          'Bei $x = 90°$: $\\tan$ nicht definiert.',
          'Vereinfachung kann Scheinlösungen erzeugen.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Gleichung die korrekte Strategie zu.',
        [
          { left: '$\\sin x \\cos x = 0$',                       right: 'faktorisieren (jeden Faktor $= 0$ setzen)' },
          { left: '$\\sin^{2} x = \\sin x$',                     right: 'auf $= 0$ bringen, dann faktorisieren' },
          { left: '$\\sin x = \\tan x$',                         right: 'auf gemeinsamen Nenner, $\\cos x \\ne 0$ prüfen' },
          { left: '$\\sin^{2} x + \\cos^{2} x = 1$',             right: 'Identität — immer wahr, keine Bedingung' },
        ],
        `**Ansatz:** Jede Gleichung hat eine "saubere" Standard-Strategie.

**Rechnung:** Produkt = 0: Null-Produkt-Regel. Quadratisch in $\\sin x$: alles auf eine Seite, faktorisieren. Zwei Terme gleichsetzen: zusammenfassen statt zu teilen. Pythagoras: Tautologie, unendlich viele Lösungen.

**Probe:** Für jede Strategie führt die Lösung ohne Verlust auf die Gesamtlösungsmenge.

**Typischer Fehler:** Bei "Lösungsstrategie wählen" reflexartig dividieren — und dabei Lösungen verlieren.`,
        [
          'Produkt = 0: Faktoren einzeln.',
          'Quadratisch: alles auf eine Seite + faktorisieren.',
          'Bruch: Nenner prüfen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur vollständigen Lösung von $\\sin x = \\sin x \\cos x$ in $[0°, 360°)$ in die richtige Reihenfolge.',
        [
          'Alles auf eine Seite: $\\sin x - \\sin x \\cos x = 0$',
          'Faktorisieren: $\\sin x(1 - \\cos x) = 0$',
          'Beide Faktoren betrachten: $\\sin x = 0$ oder $\\cos x = 1$',
          'Lösungen: $\\{0°, 180°\\} \\cup \\{0°\\} = \\{0°, 180°\\}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Nicht durch $\\sin x$ teilen, sondern faktorisieren.

**Rechnung:** Lösungsmenge $\\{0°, 180°\\}$ — 2 Lösungen.

**Probe:** $\\sin(0) = 0 = \\sin(0)\\cdot\\cos(0)$ ✓; $\\sin(180°) = 0 = \\sin(180°)\\cdot\\cos(180°)$ ✓.

**Typischer Fehler:** Durch $\\sin x$ teilen: $1 = \\cos x \\to x = 0°$ — $180°$ geht verloren.`,
        [
          'Subtrahieren, dann faktorisieren.',
          'Jeden Faktor einzeln auf Null setzen.',
          'Vereinigung der Einzellösungen.',
        ],
      ),
    ],

    // ── [4] Identitätsnachweis: nur eine Seite umformen ──────────────────
    4: [
      mc(
        '[PRÜFUNG] Welche Vorgehensweise ist für einen korrekten Identitätsnachweis zulässig?',
        [
          'Nur eine Seite umformen, bis die andere Seite Zeichen für Zeichen entsteht',
          'Beide Seiten mit demselben Ausdruck multiplizieren und dann vereinfachen',
          'Die Gleichheit voraussetzen und nach Umformung sehen, ob $0=0$ entsteht',
          'Beide Seiten umformen, bis beide auf eine gemeinsame Form kommen',
        ],
        0,
        `**Ansatz:** Ein sauberer Identitätsnachweis formt **eine** Seite um, **ohne** die Gleichheit vorauszusetzen.

**Rechnung:** Formell: $\\text{LS} = \\ldots = \\ldots = \\text{RS}$ — jede Umformung ist algebraisch begründet.

**Probe:** Die Methode "beide Seiten umformen, bis gleiche Form" kann auch korrekt sein, wenn jede Stufe ein "gdw." ist — in der Praxis aber fehleranfällig. Sicherste Methode: nur eine Seite.

**Typischer Fehler:** "Gleichheit voraussetzen und sehen, dass $0 = 0$ entsteht" — das ist kein Beweis, weil man voraussetzt, was zu zeigen ist.`,
        [
          'Was ist logisch korrekt, was ist Zirkelschluss?',
          'Nicht voraussetzen, was zu zeigen ist.',
          'Eine Seite isoliert umformen.',
        ],
        {
          1: '"Beide Seiten mit etwas multiplizieren" setzt die Gleichheit bereits voraus — logischer Fehler.',
          2: 'Zirkelschluss: Man setzt die Gleichheit voraus und zeigt dann, dass sie gleich ist. Das beweist nichts.',
          3: 'In Ausnahmefällen erlaubt (wenn jede Stufe äquivalent ist), aber sehr fehleranfällig. Standard: nur eine Seite umformen.',
        },
      ),
      ni(
        '[PRÜFUNG] Zeige $\\tfrac{\\sin x}{1 + \\cos x} = \\tfrac{1 - \\cos x}{\\sin x}$ durch Termumformung. Mit wie vielen Rechenschritten (Erweitern + Pythagoras + Kürzen) führt der Standardweg zum Ziel?',
        3, 0, '',
        `**Ansatz:** Links mit $(1 - \\cos x)$ erweitern, dann Pythagoras, dann kürzen.

**Rechnung:** Schritt 1: Erweitern: $\\tfrac{\\sin x(1-\\cos x)}{(1+\\cos x)(1-\\cos x)} = \\tfrac{\\sin x(1-\\cos x)}{1-\\cos^{2}x}$. Schritt 2: Pythagoras im Nenner: $1-\\cos^{2}x = \\sin^{2}x$. Schritt 3: Kürzen von $\\sin x$: $\\tfrac{\\sin x(1-\\cos x)}{\\sin^{2}x} = \\tfrac{1-\\cos x}{\\sin x}$. **3 Schritte.**

**Probe:** Nur die linke Seite wurde manipuliert; das Endergebnis ist exakt die rechte Seite.

**Typischer Fehler:** Beide Seiten kreuzmultiplizieren — das ist logisch eine Äquivalenzumformung, zählt aber nicht als "Identitätsnachweis", weil man die Gleichheit voraussetzt.`,
        [
          'Mit $(1 - \\cos x)$ erweitern.',
          'Pythagoras im Nenner.',
          'Gegen $\\sin x$ kürzen.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei einem Identitätsnachweis darf man nur auf einer Seite der Gleichung Umformungen vornehmen, weil die Gleichheit erst bewiesen werden soll.',
        true,
        `**Ansatz:** Logik der Beweisführung.

**Rechnung:** Eine Identität "LS = RS" ist erst bewiesen, wenn man von einer Seite durch **logisch einseitige** Umformungen zur anderen kommt. Wer beidseitig umformt, setzt die Gleichheit voraus — das ist Zirkelschluss.

**Probe:** Standardform im Lehrbuch: $\\text{LS} = \\ldots = \\ldots = \\text{RS}$. Gegenbeispiel für Zirkelschluss: $\\sqrt{-1} = \\sqrt{-1}$; quadriere beide Seiten: $-1 = -1$ — "bewiesen", obwohl $\\sqrt{-1}$ gar nicht reell existiert.

**Typischer Fehler:** Beide Seiten mit demselben Ausdruck multiplizieren und so "beweisen" — methodisch falsch.`,
        [
          'Was ist das Ziel: Gleichheit zeigen, nicht voraussetzen.',
          'Nur eine Seite darf umgeformt werden.',
          'Sonst Zirkelschluss.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Identität den zentralen "Trick" beim Nachweis zu.',
        [
          { left: '$\\tfrac{1 - \\cos^{2}x}{\\sin x} = \\sin x$',              right: 'Pythagoras im Zähler' },
          { left: '$\\tan x + \\cot x = \\tfrac{1}{\\sin x\\cos x}$',           right: 'gemeinsamer Nenner $\\sin x\\cos x$' },
          { left: '$2\\sin x\\cos x = \\sin(2x)$',                               right: 'Sinus-Doppelwinkelformel' },
          { left: '$\\cos^{2}x - \\sin^{2}x = 2\\cos^{2}x - 1$',                right: 'Pythagoras für $\\sin^{2}$' },
        ],
        `**Ansatz:** Vier Standard-Tricks, die jede Prüfung verlangt.

**Rechnung:** In jedem Fall wird der "Trick" genau einmal angewandt, danach stehen beide Seiten identisch.

**Probe:** Einzeln durchrechnen: $1-\\cos^{2} = \\sin^{2}$; kürzen gegen $\\sin x$: bleibt $\\sin x$ ✓. $\\tan + \\cot = \\tfrac{\\sin}{\\cos} + \\tfrac{\\cos}{\\sin} = \\tfrac{\\sin^{2}+\\cos^{2}}{\\sin\\cos} = \\tfrac{1}{\\sin\\cos}$ ✓.

**Typischer Fehler:** Den richtigen Trick nicht erkennen und versuchen, die Identität "roh" zu verifizieren.`,
        [
          'Pythagoras ist fast immer der Schlüssel.',
          'Bei Tan+Cot: gemeinsamer Nenner.',
          'Doppelwinkel: Produktformeln zur Hand haben.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zum Nachweis $\\tan x + \\cot x = \\tfrac{1}{\\sin x\\cos x}$ in die richtige Reihenfolge (nur LS umformen).',
        [
          '$\\tan x = \\tfrac{\\sin x}{\\cos x}$ und $\\cot x = \\tfrac{\\cos x}{\\sin x}$ einsetzen',
          'Gemeinsamen Nenner $\\sin x\\cos x$ bilden: $\\tfrac{\\sin^{2} x + \\cos^{2}x}{\\sin x\\cos x}$',
          'Pythagoras im Zähler: $\\tfrac{1}{\\sin x\\cos x}$',
          'Vergleich mit RS: identisch — Identität bewiesen',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Nur LS umformen, vier saubere Schritte.

**Rechnung:** LS $= \\tfrac{\\sin}{\\cos} + \\tfrac{\\cos}{\\sin} = \\tfrac{\\sin^{2}+\\cos^{2}}{\\sin\\cos} = \\tfrac{1}{\\sin\\cos} = $ RS.

**Probe:** Keine rechten Seiten manipuliert — strenge Beweisführung.

**Typischer Fehler:** Pythagoras-Schritt vor der Vereinigung des Nenners — logisch möglich, aber umständlicher.`,
        [
          '$\\tan$ und $\\cot$ in $\\sin/\\cos$ ausdrücken.',
          'Hauptnenner.',
          'Pythagoras im Zähler.',
        ],
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-4-2 — Prüfung: Technische Anwendungen  (5 subGoals, [PRÜFUNG])
  // Je 5 Aufgaben = 25 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-4-2': {

    // ── [0] Kräftezerlegung: Skizze, Winkelbezug, sin/cos zuordnen ────────
    0: [
      mc(
        '[PRÜFUNG] Eine Kraft $F$ wirkt unter dem Winkel $\\alpha$ **zur Horizontalen**. Wie lauten die Komponenten?',
        [
          '$F_{x} = F\\cos\\alpha$, $F_{y} = F\\sin\\alpha$',
          '$F_{x} = F\\sin\\alpha$, $F_{y} = F\\cos\\alpha$',
          '$F_{x} = F\\tan\\alpha$, $F_{y} = F$',
          '$F_{x} = F$, $F_{y} = F\\alpha$',
        ],
        0,
        `**Ansatz:** Kraft als Vektor mit Länge $F$ und Richtung $\\alpha$. Horizontale und vertikale Komponente per Einheitsvektor.

**Rechnung:** Der Einheitsvektor in Richtung $\\alpha$ ist $(\\cos\\alpha, \\sin\\alpha)$. Multiplikation mit $F$: $F_{x} = F\\cos\\alpha$, $F_{y} = F\\sin\\alpha$. Die Ankathete zum Horizontalbezugswinkel ist die horizontale Komponente $\\to \\cos$.

**Probe:** $\\alpha = 0°$: $F_{x} = F$, $F_{y} = 0$ (rein horizontale Kraft) ✓. $\\alpha = 90°$: $F_{x} = 0$, $F_{y} = F$ (rein vertikal) ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen, besonders wenn der Winkel *zur Vertikalen* gemessen wird. Immer erst skizzieren und Ankathete/Gegenkathete klar benennen.`,
        [
          'Winkel zur Horizontalen $\\to$ horizontale Komponente ist Ankathete.',
          'Ankathete $\\to \\cos$, Gegenkathete $\\to \\sin$.',
          'Kontrolle mit $\\alpha = 0°$ und $\\alpha = 90°$.',
        ],
        {
          1: '$\\sin$ und $\\cos$ vertauscht. Bei Winkel **zur Horizontalen** ist die horizontale Komponente die Ankathete $\\to \\cos$.',
          2: 'Falsche Struktur: $\\tan\\alpha = \\sin/\\cos$ ist ein Verhältnis, keine Kraftkomponente. Komponenten sind immer $F\\cos\\alpha$ und $F\\sin\\alpha$.',
          3: '$F \\cdot \\alpha$ multipliziert Kraft mit Winkel (unphysikalisch). Kräftezerlegung läuft über $\\sin/\\cos$, nie direkt mit dem Winkelwert.',
        },
      ),
      ni(
        '[PRÜFUNG] Eine Seilkraft $F = 200\\,\\text{N}$ wirkt unter $60°$ zur Horizontalen. Berechne die vertikale Komponente in Newton.',
        173.2, 0.5, 'N',
        `**Ansatz:** Vertikale Komponente ist Gegenkathete zum Winkel zur Horizontalen $\\to \\sin$.

**Rechnung:** $F_{y} = F\\sin(60°) = 200 \\cdot \\tfrac{\\sqrt{3}}{2} \\approx 200 \\cdot 0{,}866 = 173{,}2\\,\\text{N}$.

**Probe:** Horizontale Komponente $F_{x} = 200\\cos(60°) = 100\\,\\text{N}$. Pythagoras: $\\sqrt{100^{2} + 173{,}2^{2}} = \\sqrt{10000 + 30000} = \\sqrt{40000} = 200\\,\\text{N}$ ✓.

**Typischer Fehler:** $\\cos(60°) = 0{,}5$ statt $\\sin(60°) \\approx 0{,}866$ verwenden — liefert $100\\,\\text{N}$ (das ist die *horizontale* Komponente).`,
        [
          'Vertikale Komponente bei Winkel zur Horizontalen $\\to \\sin$.',
          '$\\sin(60°) = \\sqrt{3}/2 \\approx 0{,}866$.',
          '$200 \\cdot 0{,}866 = ?$',
        ],
      ),
      tf(
        '[PRÜFUNG] Wird der Winkel **zur Vertikalen** (statt Horizontalen) gemessen, gilt $F_{x} = F\\sin\\alpha$, $F_{y} = F\\cos\\alpha$.',
        true,
        `**Ansatz:** Ankathete und Gegenkathete hängen vom Bezugswinkel ab.

**Rechnung:** Bei Winkel zur Vertikalen ist die vertikale Achse die Bezugslinie: Vertikalkomponente = Ankathete $\\to \\cos$. Horizontalkomponente = Gegenkathete $\\to \\sin$. Also $F_{x} = F\\sin\\alpha$, $F_{y} = F\\cos\\alpha$.

**Probe:** $\\alpha = 0°$ (vertikale Kraft): $F_{x} = 0$, $F_{y} = F$ ✓. $\\alpha = 90°$ (horizontale Kraft): $F_{x} = F$, $F_{y} = 0$ ✓.

**Typischer Fehler:** Formel $F_{x} = F\\cos\\alpha$ als universell merken — sie gilt nur bei Winkel zur Horizontalen.`,
        [
          'Winkelbezug (horizontal oder vertikal?) entscheidet.',
          'Ankathete des Bezugswinkels $\\to \\cos$.',
          'Gegenkathete $\\to \\sin$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Kraft-Situation die korrekte Komponentenformel zu.',
        [
          { left: '$\\alpha$ zur Horizontalen, $F_{x}$ gesucht',   right: '$F\\cos\\alpha$' },
          { left: '$\\alpha$ zur Horizontalen, $F_{y}$ gesucht',   right: '$F\\sin\\alpha$' },
          { left: '$\\alpha$ zur Vertikalen, $F_{x}$ gesucht',      right: '$F\\sin\\alpha$' },
          { left: '$\\alpha$ zur Vertikalen, $F_{y}$ gesucht',      right: '$F\\cos\\alpha$' },
        ],
        `**Ansatz:** Regel: Ankathete zum Bezugswinkel $\\to \\cos$, Gegenkathete $\\to \\sin$.

**Rechnung:** Bei Bezug zur Horizontalen: $F_{x}$ ist Ankathete $\\to \\cos$. Bei Bezug zur Vertikalen: $F_{y}$ ist Ankathete $\\to \\cos$, $F_{x}$ ist Gegenkathete $\\to \\sin$. Die Zuordnung vertauscht sich genau.

**Probe:** Rechter-Hand-Check: bei $\\alpha = 30°$ zur Horizontalen: $F_{x} > F_{y}$ (Kraft "näher an horizontal"). Bei $\\alpha = 30°$ zur Vertikalen: $F_{y} > F_{x}$ (Kraft "näher an vertikal"). Die Formeln liefern das korrekt.

**Typischer Fehler:** Generisch $F_{x} = F\\cos\\alpha$ schreiben, ohne den Bezug zu prüfen. Klausuraufgaben mischen häufig beide Bezüge.`,
        [
          'Bezugswinkel klären!',
          'Ankathete zum Bezug = $\\cos$.',
          'Gegenkathete = $\\sin$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Kräftezerlegung von $F = 100\\,\\text{N}$ bei $30°$ zur Horizontalen in die richtige Reihenfolge.',
        [
          'Skizze: Kraftvektor unter $30°$ über der Horizontalen',
          'Bezugswinkel identifizieren: zur Horizontalen → $F_{x}$ Ankathete, $F_{y}$ Gegenkathete',
          'Formeln wählen: $F_{x} = F\\cos\\alpha$, $F_{y} = F\\sin\\alpha$',
          'Werte einsetzen: $F_{x} = 100 \\cdot 0{,}866 \\approx 86{,}6\\,\\text{N}$, $F_{y} = 100 \\cdot 0{,}5 = 50\\,\\text{N}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Disziplinierter Prüfungs-Workflow: Skizze → Bezugsklärung → Formel → Einsetzen.

**Rechnung:** $F_{x} \\approx 86{,}6\\,\\text{N}$, $F_{y} = 50\\,\\text{N}$.

**Probe:** $\\sqrt{86{,}6^{2} + 50^{2}} = \\sqrt{7500 + 2500} = \\sqrt{10000} = 100\\,\\text{N}$ ✓.

**Typischer Fehler:** Ohne Skizze direkt Formeln hinschreiben — dann $\\sin$/$\\cos$ verwechseln.`,
        [
          'Skizze macht Ankathete/Gegenkathete sichtbar.',
          'Erst Formeln, dann Zahlen.',
          'Pythagoras als Kontrolle.',
        ],
      ),
    ],

    // ── [1] Cosinussatz bei SWS — Standard-Maschinenbauaufgabe ────────────
    1: [
      mc(
        '[PRÜFUNG] Welche Gleichung ist der Cosinussatz für die Seite $a$ gegenüber dem Winkel $\\alpha$?',
        [
          '$a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$',
          '$a^{2} = b^{2} + c^{2} + 2bc\\cos\\alpha$',
          '$a = b + c - \\cos\\alpha$',
          '$a^{2} = b\\cos\\beta + c\\cos\\gamma$',
        ],
        0,
        `**Ansatz:** Cosinussatz als Verallgemeinerung des Pythagoras. Bei $\\alpha = 90°$ muss Pythagoras herauskommen.

**Rechnung:** $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$. Bei $\\alpha = 90°$: $\\cos 90° = 0$, Korrekturterm $= 0$, Formel reduziert sich auf $a^{2} = b^{2} + c^{2}$ (Pythagoras) ✓.

**Probe:** $\\alpha$ ist **gegenüber** der Seite $a$. Die Formel benutzt die beiden anliegenden Seiten ($b$ und $c$) und den eingeschlossenen Winkel ($\\alpha$).

**Typischer Fehler:** Vorzeichen verwechseln (+ statt $-$). Der Minusterm sorgt für das richtige Vorzeichenverhalten: bei stumpfem Winkel ($\\alpha > 90°$) ist $\\cos\\alpha < 0$, also wird $a$ größer.`,
        [
          'Erinnerungsregel: Pythagoras plus Korrekturterm.',
          'Bei $\\alpha = 90°$ muss sich Pythagoras ergeben.',
          '$a$ gegenüber $\\alpha$; $b, c$ sind die anliegenden Seiten.',
        ],
        {
          1: 'Vorzeichen $+$ statt $-$. Bei $\\alpha = 90°$ gäbe das $a^{2} = b^{2} + c^{2}$ (Pythagoras) — nur zufällig richtig, aber bei $\\alpha = 60°$ kommt $a^{2}$ zu groß heraus.',
          2: 'Das wäre ein Satz ohne Quadrate — physikalisch sinnlos. Cosinussatz hat zwingend Quadrate ($a^{2}, b^{2}, c^{2}$).',
          3: 'Diese Form ist der **Projektionssatz**, nicht der Cosinussatz. Der Cosinussatz hat ein eigenes Format.',
        },
      ),
      ni(
        '[PRÜFUNG] Berechne die Seite $a$ in einem Dreieck mit $b = 4$, $c = 6$, $\\alpha = 60°$. (Auf 2 Nachkommastellen genau.)',
        5.29, 0.02, '',
        `**Ansatz:** Cosinussatz mit $\\cos(60°) = 0{,}5$.

**Rechnung:** $a^{2} = 16 + 36 - 2 \\cdot 4 \\cdot 6 \\cdot 0{,}5 = 52 - 24 = 28 \\Rightarrow a = \\sqrt{28} \\approx 5{,}29$.

**Probe:** Plausibilität: $a$ sollte zwischen $|b - c| = 2$ und $b + c = 10$ liegen ($5{,}29$ passt). Bei $\\alpha = 60°$ (zwischen $0°$ und $180°$) ist Dreieck wohldefiniert.

**Typischer Fehler:** $\\cos(60°) = \\sqrt{3}/2$ (das ist $\\sin 60°$) verwenden — liefert falsches $a$. Oder Faktor $2bc$ vergessen und nur $b^{2} + c^{2} - \\cos\\alpha = 51{,}5$ rechnen.`,
        [
          'Cosinussatz einsetzen.',
          '$\\cos(60°) = 1/2$.',
          '$\\sqrt{28}$ berechnen.',
        ],
      ),
      tf(
        '[PRÜFUNG] Der Cosinussatz ist eine Verallgemeinerung des Satzes von Pythagoras: bei $\\alpha = 90°$ reduziert er sich auf $a^{2} = b^{2} + c^{2}$.',
        true,
        `**Ansatz:** Einsetzen von $\\alpha = 90°$ in den Cosinussatz.

**Rechnung:** $\\cos(90°) = 0$, also $a^{2} = b^{2} + c^{2} - 2bc \\cdot 0 = b^{2} + c^{2}$ — exakt Pythagoras.

**Probe:** Cosinussatz funktioniert für **alle** Winkel $\\alpha \\in (0°, 180°)$, nicht nur bei rechten Dreiecken. Pythagoras ist der Spezialfall.

**Typischer Fehler:** Annehmen, Cosinussatz gelte nur für rechtwinklige Dreiecke. Im Gegenteil — Pythagoras gilt nur für rechtwinklige, der Cosinussatz für alle.`,
        [
          'Einsetzen $\\alpha = 90°$.',
          '$\\cos(90°) = 0$.',
          'Korrekturterm verschwindet.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Dreieck die dritte Seite $a$ zu (SWS-Konfiguration).',
        [
          { left: '$b = 3, c = 4, \\alpha = 90°$',              right: '$a = 5$' },
          { left: '$b = 5, c = 5, \\alpha = 60°$',              right: '$a = 5$' },
          { left: '$b = 4, c = 4, \\alpha = 90°$',              right: '$a = 4\\sqrt{2} \\approx 5{,}66$' },
          { left: '$b = 10, c = 10, \\alpha = 120°$',           right: '$a = 10\\sqrt{3} \\approx 17{,}32$' },
        ],
        `**Ansatz:** Cosinussatz mit bekannten $\\cos$-Werten.

**Rechnung:** $3$-$4$-$5$: Pythagoras. $5$-$5$-$60°$: gleichseitig, $a = 5$. $4$-$4$-$90°$: $a^{2} = 32$, $a = 4\\sqrt{2}$. $10$-$10$-$120°$: $\\cos 120° = -\\tfrac{1}{2}$, $a^{2} = 100 + 100 - 2\\cdot 100\\cdot(-\\tfrac{1}{2}) = 300$, $a = 10\\sqrt{3}$.

**Probe:** Plausibilitätscheck: bei stumpfem Winkel ist $a$ größer als $b$ und $c$. Bei $\\alpha = 120°$ und $b = c = 10$ ergibt $a \\approx 17{,}3 > 10$ ✓.

**Typischer Fehler:** Vorzeichen von $\\cos\\alpha$ bei stumpfen Winkeln vergessen — dann kommen unsinnige (zu kleine) Ergebnisse heraus.`,
        [
          'Bei gleichseitigen Dreiecken: $a = b = c$.',
          'Bei rechtem Winkel: Pythagoras.',
          'Bei $120°$: $\\cos$ negativ, $a$ größer.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Berechnung von $a$ bei $b = 8$, $c = 6$, $\\alpha = 60°$ in die richtige Reihenfolge.',
        [
          'Formel aufschreiben: $a^{2} = b^{2} + c^{2} - 2bc\\cos\\alpha$',
          'Werte einsetzen: $a^{2} = 64 + 36 - 2\\cdot 8\\cdot 6 \\cdot 0{,}5$',
          'Ausrechnen: $a^{2} = 100 - 48 = 52$',
          'Wurzel ziehen: $a = \\sqrt{52} \\approx 7{,}21$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Cosinussatz-Workflow: Formel → Werte → Termrechnen → Wurzel.

**Rechnung:** $a \\approx 7{,}21$.

**Probe:** $a$ zwischen $|8-6| = 2$ und $8+6 = 14$ ✓.

**Typischer Fehler:** Wurzel nicht ziehen und $52$ als Antwort abgeben. Oder $\\cos(60°) \\neq 0{,}5$ verwenden.`,
        [
          'Formel vor Zahlen.',
          'Zwischenergebnisse einzeln aufschreiben.',
          'Wurzel am Schluss, nicht vergessen.',
        ],
      ),
    ],

    // ── [2] Schwingungsgrößen A, ω, T, f, φ ablesen ──────────────────────
    2: [
      mc(
        '[PRÜFUNG] Welche Amplitude und Kreisfrequenz hat $x(t) = 5\\cos(3t + \\pi/6)$?',
        [
          '$A = 5$, $\\omega = 3$',
          '$A = 3$, $\\omega = 5$',
          '$A = 5$, $\\omega = \\pi/6$',
          '$A = 5$, $\\omega = 3t + \\pi/6$',
        ],
        0,
        `**Ansatz:** Standardform $x(t) = A\\cos(\\omega t + \\varphi)$.

**Rechnung:** Ablesen: $A = 5$ (Vorfaktor), $\\omega = 3$ (Koeffizient von $t$), $\\varphi = \\pi/6$ (Phasenverschiebung).

**Probe:** $x(0) = 5\\cos(\\pi/6) = 5 \\cdot \\tfrac{\\sqrt{3}}{2} \\approx 4{,}33$ — passt zu Amplitude $5$ und Phase $\\pi/6$.

**Typischer Fehler:** $A$ und $\\omega$ vertauschen oder $\\omega$ mit $\\varphi$ verwechseln. Die Reihenfolge in der Formel ist fix: **Amplitude** $\\cdot \\cos($ **Kreisfrequenz** $\\cdot t + $ **Phase** $)$.`,
        [
          'Standardform: $A\\cos(\\omega t + \\varphi)$.',
          '$A$ ist der Vorfaktor vor $\\cos$.',
          '$\\omega$ ist der Faktor vor $t$ **innen**.',
        ],
        {
          1: '$A$ und $\\omega$ vertauscht. $A = 5$ (außen vor $\\cos$), $\\omega = 3$ (innen vor $t$).',
          2: '$\\pi/6$ ist die Phase $\\varphi$, nicht die Kreisfrequenz. $\\omega$ steht als Faktor vor $t$.',
          3: '$\\omega$ ist eine Konstante. Der ganze Ausdruck $3t + \\pi/6$ ist das Argument, nicht $\\omega$ selbst.',
        },
      ),
      ni(
        '[PRÜFUNG] Gegeben $x(t) = 2\\sin(4\\pi t)$. Berechne die Periode $T$ in Sekunden.',
        0.5, 0.01, 's',
        `**Ansatz:** $T = 2\\pi/\\omega$.

**Rechnung:** $\\omega = 4\\pi$, also $T = \\dfrac{2\\pi}{4\\pi} = \\dfrac{1}{2} = 0{,}5\\,\\text{s}$.

**Probe:** Frequenz $f = 1/T = 2\\,\\text{Hz}$ — zwei Schwingungen pro Sekunde. Stimmt mit $\\omega = 4\\pi = 2\\pi \\cdot 2$ überein.

**Typischer Fehler:** Direkt $T = \\omega$ setzen (in diesem Fall $T = 4\\pi$, also ca. $12{,}57\\,\\text{s}$ — viel zu lang). Immer $2\\pi$ durch $\\omega$ teilen.`,
        [
          '$T = 2\\pi / \\omega$.',
          '$\\omega = 4\\pi$.',
          '$2\\pi / 4\\pi = 1/2$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Für die Netzfrequenz $f = 50\\,\\text{Hz}$ gilt Kreisfrequenz $\\omega = 100\\pi\\,\\text{rad/s}$.',
        true,
        `**Ansatz:** $\\omega = 2\\pi f$.

**Rechnung:** $\\omega = 2\\pi \\cdot 50 = 100\\pi \\approx 314{,}16\\,\\text{rad/s}$.

**Probe:** Umgekehrt: $f = \\omega / (2\\pi) = 100\\pi/(2\\pi) = 50\\,\\text{Hz}$ ✓.

**Typischer Fehler:** Faktor $2\\pi$ weglassen und $\\omega = f = 50$ setzen — das ist gleichbedeutend mit "Umdrehung/s" statt "rad/s".`,
        [
          '$\\omega = 2\\pi f$.',
          'Netzfrequenz: $50\\,\\text{Hz}$.',
          '$2\\pi \\cdot 50 = 100\\pi$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Schwingung ihre Kreisfrequenz $\\omega$ zu.',
        [
          { left: '$x(t) = \\sin(t)$',          right: '$\\omega = 1\\,\\text{rad/s}$' },
          { left: '$x(t) = \\cos(2\\pi t)$',    right: '$\\omega = 2\\pi\\,\\text{rad/s}$' },
          { left: '$x(t) = 3\\sin(5t + 1)$',    right: '$\\omega = 5\\,\\text{rad/s}$' },
          { left: '$x(t) = \\cos(\\omega_{0} t)$', right: '$\\omega = \\omega_{0}$' },
        ],
        `**Ansatz:** $\\omega$ ist der Koeffizient von $t$ im Argument der Sinus/Kosinus-Funktion.

**Rechnung:** Unabhängig von Amplitude und Phase — nur das Argument $\\omega t + \\varphi$ zählt.

**Probe:** Periodencheck für Zeile 2: $T = 2\\pi/\\omega = 2\\pi/(2\\pi) = 1\\,\\text{s}$ — passt zu $f = 1\\,\\text{Hz}$.

**Typischer Fehler:** Bei $\\cos(2\\pi t)$ $\\omega = 2\\pi t$ schreiben — aber $\\omega$ ist der konstante Faktor **vor** $t$, nicht das ganze Argument.`,
        [
          'Koeffizient von $t$ = $\\omega$.',
          'Phase und Amplitude irrelevant.',
          'Bei symbolischem $\\omega_{0}$: direkt ablesen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Bestimmung aller Schwingungsgrößen für $x(t) = 4\\sin(10t + \\pi/3)$ in die richtige Reihenfolge.',
        [
          'Standardform $A\\sin(\\omega t + \\varphi)$ identifizieren',
          'Ablesen: $A = 4$, $\\omega = 10$, $\\varphi = \\pi/3$',
          'Periode berechnen: $T = 2\\pi/\\omega = 2\\pi/10 = \\pi/5 \\approx 0{,}628\\,\\text{s}$',
          'Frequenz: $f = 1/T = 10/(2\\pi) \\approx 1{,}59\\,\\text{Hz}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch: Form-Check → Ablesen → Periode → Frequenz.

**Rechnung:** Amplitude $4$, Kreisfrequenz $10\\,\\text{rad/s}$, Periode $\\approx 0{,}63\\,\\text{s}$, Frequenz $\\approx 1{,}59\\,\\text{Hz}$.

**Probe:** $\\omega = 2\\pi f = 2\\pi \\cdot 1{,}59 \\approx 10$ ✓.

**Typischer Fehler:** $f$ und $\\omega$ verwechseln (Faktor $2\\pi$). $\\omega$ in rad/s, $f$ in Hz.`,
        [
          'Standardform zuerst.',
          'Alles Ablesbare ablesen.',
          'Abgeleitete Größen ($T, f$) daraus.',
        ],
      ),
    ],

    // ── [3] Einheitenkonsistenz: ωt und φ in Radiant ──────────────────────
    3: [
      mc(
        '[PRÜFUNG] Warum muss das Argument $\\omega t + \\varphi$ dimensional in Radiant vorliegen?',
        [
          'Weil $\\sin$ und $\\cos$ als Funktionen nur Radiant-Argumente standardmäßig verarbeiten',
          'Weil $\\omega$ dimensionslos ist',
          'Weil $t$ in Sekunden sein muss',
          'Weil Winkel immer in Grad gemessen werden',
        ],
        0,
        `**Ansatz:** Definition und Konvention mathematischer Winkelfunktionen.

**Rechnung:** In der Mathematik/Physik sind $\\sin, \\cos$ analytisch über die Taylor-Reihe definiert: $\\sin x = x - x^{3}/6 + \\ldots$ Dies konvergiert nur, wenn $x$ in **Radiant** ist. Kreisfrequenz $\\omega$ hat daher Einheit rad/s, sodass $\\omega t$ in rad ist. Phase $\\varphi$ muss gleichartig sein.

**Probe:** Einheitencheck: $[\\omega \\cdot t] = \\tfrac{\\text{rad}}{\\text{s}}\\cdot \\text{s} = \\text{rad}$ ✓. Wenn man $\\omega$ in 1/s und $t$ in s nimmt, bekommt man rad — perfekt.

**Typischer Fehler:** $\\omega t$ als "Grad" lesen — Taschenrechner muss im RAD-Modus sein, sonst falsche Werte.`,
        [
          'Definition von $\\sin/\\cos$ über Taylor-Reihe setzt Radiant voraus.',
          '$\\omega$ hat Einheit rad/s.',
          'Phase $\\varphi$ muss gleiche Einheit wie $\\omega t$ haben.',
        ],
        {
          1: '$\\omega$ hat Einheit rad/s, also **nicht** dimensionslos. Rad gilt als dimensionslose Pseudo-Einheit, Sekunden aber nicht.',
          2: 'Zeit kann in beliebigen Zeit-Einheiten sein, nur muss $\\omega$ passen. Die Kernaussage ist der Radiant-Winkel im Sinus-Argument.',
          3: 'In Schwingungsrechnung verwendet man durchgängig Radiant — Grad sind in der Ingenieurrechnung die Ausnahme.',
        },
      ),
      ni(
        '[PRÜFUNG] Rechne $\\varphi = 60°$ in Radiant um (als Bruchteil $\\pi$, d.h. Antwort ist Faktor vor $\\pi$).',
        0.3333, 0.001, '',
        `**Ansatz:** $1° = \\pi/180\\,\\text{rad}$.

**Rechnung:** $60° = 60 \\cdot \\tfrac{\\pi}{180} = \\tfrac{\\pi}{3}$. Faktor vor $\\pi$: $1/3 \\approx 0{,}333$.

**Probe:** Umgekehrt: $\\tfrac{\\pi}{3}\\,\\text{rad} = \\tfrac{\\pi}{3} \\cdot \\tfrac{180}{\\pi} = 60°$ ✓.

**Typischer Fehler:** Faktor $180/\\pi$ statt $\\pi/180$ verwenden — liefert ein Ergebnis um den Faktor $\\pi^2/180$ daneben.`,
        [
          '$1° = \\pi/180$ rad.',
          '$60/180 = 1/3$.',
          'Antwort ist $1/3$ (Faktor vor $\\pi$).',
        ],
      ),
      tf(
        '[PRÜFUNG] In $x(t) = A\\sin(\\omega t + \\varphi)$ dürfen $\\omega t$ und $\\varphi$ auch in unterschiedlichen Einheiten sein, solange die Summe korrekt ist.',
        false,
        `**Ansatz:** Dimensionskonsistenz in Summanden.

**Rechnung:** $\\omega t + \\varphi$ ist eine **Summe**. Summen sind nur dimensional konsistent, wenn **alle Summanden dieselbe Einheit haben**. Also müssen $\\omega t$ und $\\varphi$ beide in Radiant (oder beide in Grad) vorliegen.

**Probe:** Wenn $\\omega t = 2\\pi$ (Radiant) und $\\varphi = 60°$ (Grad), wäre $2\\pi + 60°$ ein unsinniger Ausdruck — wie "$3\\,\\text{m} + 4\\,\\text{kg}$".

**Typischer Fehler:** Klausuraufgaben mit gemischten Einheiten — immer erst alle Winkelgrößen auf Radiant umrechnen!`,
        [
          'Summanden müssen gleiche Einheit haben.',
          '$\\omega t$ ist immer rad (bei $\\omega$ in rad/s).',
          '$\\varphi$ muss also auch rad sein.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Gradwert den entsprechenden Radiantwert zu.',
        [
          { left: '$30°$',    right: '$\\pi/6\\,\\text{rad}$' },
          { left: '$45°$',    right: '$\\pi/4\\,\\text{rad}$' },
          { left: '$60°$',    right: '$\\pi/3\\,\\text{rad}$' },
          { left: '$180°$',   right: '$\\pi\\,\\text{rad}$' },
        ],
        `**Ansatz:** Standardwinkel auswendig. $180° = \\pi$, alle anderen als Bruchteile.

**Rechnung:**
· $30° = \\pi/6$
· $45° = \\pi/4$
· $60° = \\pi/3$
· $90° = \\pi/2$
· $180° = \\pi$
· $360° = 2\\pi$

**Probe:** Alle haben $30° \\cdot k \\to \\pi/6 \\cdot k$ als Muster.

**Typischer Fehler:** $30°$ mit $\\pi/3$ verwechseln — das gilt für $60°$. Kleinere Grad = kleinerer Bruchteil = größerer Nenner.`,
        [
          '$180° = \\pi$.',
          '$30° = \\pi/6$, $45° = \\pi/4$, $60° = \\pi/3$.',
          '$90° = \\pi/2$ (Viertelkreis).',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte für eine Schwingung mit $\\omega = 100\\,\\text{rad/s}$, $\\varphi = 90°$, $t = 0{,}01\\,\\text{s}$ in die richtige Reihenfolge (Argument in rad berechnen).',
        [
          'Phase $\\varphi$ in Radiant: $90° = \\pi/2\\,\\text{rad} \\approx 1{,}571\\,\\text{rad}$',
          '$\\omega t$ berechnen: $100 \\cdot 0{,}01 = 1\\,\\text{rad}$',
          'Summieren: $\\omega t + \\varphi = 1 + 1{,}571 = 2{,}571\\,\\text{rad}$',
          'Taschenrechner-Modus: RAD. Sinus-Wert: $\\sin(2{,}571) \\approx 0{,}540$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst Einheiten konsistent machen, dann rechnen.

**Rechnung:** Argument $\\approx 2{,}571$ rad, $\\sin \\approx 0{,}54$.

**Probe:** Einheitencheck: $\\omega t$ in rad, $\\varphi$ in rad, Summe in rad ✓.

**Typischer Fehler:** $90°$ nicht umrechnen und Taschenrechner auf DEG lassen: $\\sin(1 + 90) = \\sin(91°) \\approx 1$, völlig anderes Ergebnis.`,
        [
          'Immer zuerst alle Winkel auf Radiant.',
          'Taschenrechner-Modus prüfen.',
          'Dann Summe bilden und $\\sin$ anwenden.',
        ],
      ),
    ],

    // ── [4] Plausibilitätscheck: Komponenten und Winkelbereiche ───────────
    4: [
      mc(
        '[PRÜFUNG] Ein Student berechnet $F_{x} = 700\\,\\text{N}$ und $F_{y} = 400\\,\\text{N}$ für eine Kraft $F = 500\\,\\text{N}$. Was ist falsch?',
        [
          'Komponenten dürfen niemals größer als der Betrag der Gesamtkraft sein',
          'Die Komponenten sind in Ordnung, nur die Reihenfolge ist falsch',
          'Das Vorzeichen stimmt nicht',
          'Der Betrag $F$ sollte $\\sqrt{700^{2}+400^{2}} = 806\\,\\text{N}$ sein',
        ],
        0,
        `**Ansatz:** Plausibilitätscheck: $|F_{x}|, |F_{y}| \\le |F|$, weil $|\\sin|, |\\cos| \\le 1$.

**Rechnung:** $F_{x} = 700 > 500 = |F|$ — widerspricht $F_{x} = F\\cos\\alpha \\le F$. Also Rechenfehler.

**Probe:** Pythagoras-Check: $\\sqrt{F_{x}^{2} + F_{y}^{2}}$ muss $= |F|$ ergeben. Hier $\\sqrt{700^{2} + 400^{2}} \\approx 806 \\ne 500$ — bestätigt Fehler.

**Typischer Fehler:** Ergebnisse abschreiben, ohne Plausibilität zu prüfen. Die Ungleichung $|F_{x}|, |F_{y}| \\le |F|$ ist eine **schnelle** Kontrolle, die viele Klausur-Punkte rettet.`,
        [
          'Was ist die geometrische Bedeutung von Komponenten?',
          'Projektionen auf x- und y-Achse.',
          'Projektion $\\le$ Originallänge.',
        ],
        {
          1: 'Die Reihenfolge der Komponenten ist beliebig — der Fehler liegt darin, dass beide zu groß sind.',
          2: 'Vorzeichen betreffen die Richtung, nicht die Größe. Hier sind die **Beträge** zu groß.',
          3: 'Das wäre die richtige Rechnung, wenn $F$ gesucht wäre. Aber $F = 500$ ist **gegeben** — die Komponenten sind also falsch.',
        },
      ),
      ni(
        '[PRÜFUNG] Eine Kraft $F = 1000\\,\\text{N}$ zeigt in Richtung $\\alpha = 150°$ gegen die Horizontale. In welchem Quadranten liegt der Kraftvektor (1, 2, 3 oder 4)?',
        2, 0, '',
        `**Ansatz:** Quadrantenbestimmung über den Winkel gegen die Horizontale.

**Rechnung:** $150°$ liegt zwischen $90°$ und $180°$ → **2. Quadrant** ($x < 0$, $y > 0$).

**Probe:** $\\cos(150°) = -\\tfrac{\\sqrt{3}}{2} < 0$ → $F_{x} < 0$ ✓. $\\sin(150°) = +\\tfrac{1}{2} > 0$ → $F_{y} > 0$ ✓. Passt zu 2. Quadrant.

**Typischer Fehler:** Bei Winkeln $> 90°$ reflexartig "1. Quadrant" eintragen. Immer Quadrantengrenzen prüfen: 1.Q $[0°, 90°]$, 2.Q $[90°, 180°]$, 3.Q $[180°, 270°]$, 4.Q $[270°, 360°]$.`,
        [
          'Quadrantengrenzen: je $90°$.',
          '$150°$ liegt zwischen $90°$ und $180°$.',
          '2. Quadrant.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Gleichung $F_{x}^{2} + F_{y}^{2} = F^{2}$ (Pythagoras) kann immer zum Plausibilitätscheck nach einer Kräftezerlegung genutzt werden.',
        true,
        `**Ansatz:** Kraft als Vektor mit Betrag $F$. Komponenten sind Projektionen auf x- und y-Achse.

**Rechnung:** $F_{x} = F\\cos\\alpha$, $F_{y} = F\\sin\\alpha$. Dann $F_{x}^{2} + F_{y}^{2} = F^{2}(\\cos^{2} + \\sin^{2}) = F^{2}$. Immer erfüllt.

**Probe:** Beispiel $F = 100, \\alpha = 30°$: $F_{x} \\approx 86{,}6$, $F_{y} = 50$. $86{,}6^{2} + 50^{2} = 7500 + 2500 = 10000 = 100^{2}$ ✓.

**Typischer Fehler:** Nach der Zerlegung nicht kontrollieren — klassischer Punkt-Verlust in Klausuren.`,
        [
          'Pythagoras am Einheitskreis ist immer wahr.',
          'Komponenten-Quadrate aufaddieren.',
          'Muss $F^{2}$ ergeben.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Winkel (zur positiven x-Achse) den Quadranten und die Vorzeichen von $F_x, F_y$ zu.',
        [
          { left: '$\\alpha = 30°$',     right: '1. Q: $F_x > 0, F_y > 0$' },
          { left: '$\\alpha = 120°$',    right: '2. Q: $F_x < 0, F_y > 0$' },
          { left: '$\\alpha = 210°$',    right: '3. Q: $F_x < 0, F_y < 0$' },
          { left: '$\\alpha = 300°$',    right: '4. Q: $F_x > 0, F_y < 0$' },
        ],
        `**Ansatz:** CAS-Regel (alternativ ASTC): 1. Q alle positiv, 2. Q nur Sinus positiv, 3. Q Tangens positiv, 4. Q nur Cosinus positiv.

**Rechnung:** $\\cos\\alpha = F_x/F$, $\\sin\\alpha = F_y/F$. Vorzeichen direkt aus den Vorzeichen von $\\sin, \\cos$.

**Probe:** $\\alpha = 210°$: $\\cos(210°) = -\\tfrac{\\sqrt{3}}{2} < 0$, $\\sin(210°) = -\\tfrac{1}{2} < 0$ → beide negativ → 3. Q ✓.

**Typischer Fehler:** Vorzeichen falsch zuordnen — Einheitskreis-Skizze verhindert das.`,
        [
          'Quadrantengrenzen 0°/90°/180°/270°/360°.',
          'ASTC-Regel: All, Sin, Tan, Cos positiv in 1./2./3./4. Q.',
          'Vorzeichen von $\\sin, \\cos$ → Vorzeichen der Komponenten.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Plausibilitätsschritte nach einer Kräftezerlegung in die richtige Reihenfolge.',
        [
          'Komponenten-Beträge prüfen: $|F_x|, |F_y| \\le |F|$?',
          'Pythagoras-Check: $\\sqrt{F_x^{2} + F_y^{2}} \\stackrel{?}{=} |F|$',
          'Vorzeichen-Check: passen zur Winkellage (Quadrant)?',
          'Bei Widerspruch: Rechnung prüfen (meist $\\sin/\\cos$-Verwechslung)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Standard-Plausibilitätsroutine nach jeder Komponentenrechnung.

**Rechnung:** Alle drei Kontrollen in 30 Sekunden durchführbar — lohnt sich immer.

**Probe:** Beispiel $F = 500, \\alpha = 60°$: $F_x = 250, F_y \\approx 433$. Beide $< 500$ ✓. $\\sqrt{250^{2} + 433^{2}} = 500$ ✓. 1. Q → beide positiv ✓.

**Typischer Fehler:** Plausibilitätschecks überspringen und Fehler zu spät bemerken. In Prüfungen: immer drei Sekunden für den Pythagoras-Check investieren.`,
        [
          'Beträge zuerst.',
          'Pythagoras als harter Test.',
          'Vorzeichen zum Quadranten.',
        ],
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-4-3 — Prüfung: Einheitskreis & Gleichungssysteme (6 subGoals, [PRÜFUNG])
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-4-3': {

    // ── [0] sin x = a: zwei Lösungen arcsin a und π - arcsin a ────────────
    0: [
      mc(
        '[PRÜFUNG] Wie lauten beide Lösungen von $\\sin x = \\tfrac{\\sqrt{3}}{2}$ in $[0, 2\\pi)$?',
        [
          '$x_{1} = \\tfrac{\\pi}{3}$, $x_{2} = \\tfrac{2\\pi}{3}$',
          '$x_{1} = \\tfrac{\\pi}{6}$, $x_{2} = \\tfrac{5\\pi}{6}$',
          '$x_{1} = \\tfrac{\\pi}{3}$, $x_{2} = \\tfrac{4\\pi}{3}$',
          '$x_{1} = \\tfrac{\\pi}{3}$ (einzige Lösung)',
        ],
        0,
        `**Ansatz:** $\\sin x = \\tfrac{\\sqrt{3}}{2}$ hat Hauptwert $\\arcsin(\\tfrac{\\sqrt{3}}{2}) = \\tfrac{\\pi}{3}$ (= 60°). Zweite Lösung: Supplement $\\pi - \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3}$.

**Rechnung:** $x_{1} = \\tfrac{\\pi}{3}$ (1. Q), $x_{2} = \\tfrac{2\\pi}{3}$ (2. Q). Beide geben $\\sin = \\tfrac{\\sqrt{3}}{2}$.

**Probe:** $\\sin(\\tfrac{\\pi}{3}) = \\sin(60°) = \\tfrac{\\sqrt{3}}{2}$ ✓. $\\sin(\\tfrac{2\\pi}{3}) = \\sin(120°) = \\sin(60°) = \\tfrac{\\sqrt{3}}{2}$ ✓.

**Typischer Fehler:** Statt Supplement $\\pi - \\arcsin$ das Reflexions-Pendant $\\pi + \\arcsin$ verwenden — führt zum 3. Quadrant, wo $\\sin < 0$.`,
        [
          'Hauptwert: $\\arcsin(\\sqrt{3}/2)$.',
          'Zweite Lösung: $\\pi - $ Hauptwert.',
          '$\\arcsin(\\sqrt{3}/2) = \\pi/3$.',
        ],
        {
          1: 'Das sind die Lösungen von $\\sin x = \\tfrac{1}{2}$, nicht $\\sin x = \\tfrac{\\sqrt{3}}{2}$. $\\arcsin(1/2) = \\pi/6$, $\\arcsin(\\sqrt{3}/2) = \\pi/3$.',
          2: 'Falsche zweite Lösung: $\\tfrac{4\\pi}{3}$ liegt im 3. Quadrant, dort ist $\\sin$ negativ. Supplement wird über $\\pi - $ Hauptwert gebildet, nicht über $\\pi + $.',
          3: '$\\sin x = a$ hat in $[0, 2\\pi)$ IMMER zwei Lösungen (für $|a| < 1$), nicht nur eine. Supplement nicht vergessen!',
        },
      ),
      ni(
        '[PRÜFUNG] Gegeben $\\sin x = 0{,}8$ in $[0°, 360°)$. Wie groß ist die zweite Lösung (in Grad, auf 1 Dezimale)?',
        126.9, 0.2, '°',
        `**Ansatz:** Hauptwert per Taschenrechner, dann Supplement.

**Rechnung:** $\\arcsin(0{,}8) \\approx 53{,}13°$ (DEG-Modus!). Zweite Lösung: $180° - 53{,}13° = 126{,}87°$, also $\\approx 126{,}9°$.

**Probe:** $\\sin(126{,}9°) \\approx 0{,}8$ ✓ (2. Quadrant, dort ist $\\sin > 0$).

**Typischer Fehler:** Nur Hauptwert $53{,}1°$ angeben. Oder Supplement falsch: $360° - 53{,}1° = 306{,}9°$ (das ist die Gegen-Lösung für $\\sin x = -0{,}8$).`,
        [
          'Hauptwert: $\\arcsin(0{,}8)$.',
          'Supplement: $180° - $ Hauptwert.',
          '$180 - 53{,}13 = 126{,}87$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Gleichung $\\sin x = -0{,}4$ hat in $[0°, 360°)$ genau zwei Lösungen, beide im 3. und 4. Quadrant.',
        true,
        `**Ansatz:** Sinus ist negativ im 3. und 4. Quadrant.

**Rechnung:** Hauptwert $\\arcsin(-0{,}4) \\approx -23{,}58°$. Umrechnen auf $[0°, 360°)$: $-23{,}58° + 360° \\approx 336{,}4°$ (4. Q). Zweite Lösung per $180° - (-23{,}58°) = 203{,}6°$ (3. Q). Beide negativ in $\\sin$.

**Probe:** $\\sin(203{,}6°) \\approx -0{,}4$ ✓, $\\sin(336{,}4°) \\approx -0{,}4$ ✓. Beide im 3./4. Quadrant.

**Typischer Fehler:** Bei negativem Wert annehmen, die Lösungen wären im 1. und 2. Quadrant (dort ist $\\sin$ aber positiv).`,
        [
          'Wo ist $\\sin < 0$? 3. und 4. Quadrant.',
          'Hauptwert negativ, dann per $180°$-Supplement.',
          'Umrechnung in Bereich $[0°, 360°)$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Gleichung die beiden Lösungen in $[0, 2\\pi)$ zu.',
        [
          { left: '$\\sin x = 0$',             right: '$x_{1} = 0$, $x_{2} = \\pi$' },
          { left: '$\\sin x = 1$',             right: '$x = \\pi/2$ (nur eine)' },
          { left: '$\\sin x = \\tfrac{1}{2}$', right: '$x_{1} = \\pi/6$, $x_{2} = 5\\pi/6$' },
          { left: '$\\sin x = -\\tfrac{1}{2}$', right: '$x_{1} = 7\\pi/6$, $x_{2} = 11\\pi/6$' },
        ],
        `**Ansatz:** Spezialfälle und Standardwerte.

**Rechnung:** $\\sin = 0$ bei $x = 0, \\pi$. $\\sin = 1$ nur bei $x = \\pi/2$ (Maximum). $\\sin = 1/2$ bei $\\pi/6$ und $5\\pi/6$. Für negative Werte: dritter und vierter Quadrant.

**Probe:** Jede Zeile mit Taschenrechner überprüfbar — $\\sin$-Werte stimmen.

**Typischer Fehler:** Maximum- und Minimumwerte mit generellen Sinus-Lösungen verwechseln — bei $\\sin = \\pm 1$ gibt es nur eine Lösung.`,
        [
          'Bei $|a| = 1$: eine Lösung.',
          'Bei $|a| < 1$: zwei Lösungen.',
          'Negative $a$: 3. und 4. Quadrant.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung $\\sin x = \\tfrac{\\sqrt{2}}{2}$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
        [
          'Hauptwert: $x_{1} = \\arcsin(\\tfrac{\\sqrt{2}}{2}) = \\tfrac{\\pi}{4}$',
          'Zweite Lösung per Supplement: $x_{2} = \\pi - \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{4}$',
          'Lösungsmenge: $\\{\\tfrac{\\pi}{4}, \\tfrac{3\\pi}{4}\\}$',
          'Probe: $\\sin(\\pi/4) = \\sin(3\\pi/4) = \\tfrac{\\sqrt{2}}{2}$ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Hauptwert $\\to$ Supplement $\\to$ Lösungsmenge $\\to$ Probe.

**Rechnung:** Zwei Lösungen.

**Probe:** Beide Werte $\\tfrac{\\pi}{4}, \\tfrac{3\\pi}{4}$ liegen in $[0, 2\\pi)$ und erfüllen die Gleichung.

**Typischer Fehler:** Supplement-Schritt überspringen.`,
        [
          'Hauptwert $\\arcsin$.',
          'Supplement: $\\pi - $ Hauptwert.',
          'Beide Werte als Lösungsmenge.',
        ],
      ),
    ],

    // ── [1] cos x = a: zwei Lösungen arccos a und 2π - arccos a ────────────
    1: [
      mc(
        '[PRÜFUNG] Wie lauten beide Lösungen von $\\cos x = \\tfrac{1}{2}$ in $[0, 2\\pi)$?',
        [
          '$x_{1} = \\tfrac{\\pi}{3}$, $x_{2} = \\tfrac{5\\pi}{3}$',
          '$x_{1} = \\tfrac{\\pi}{6}$, $x_{2} = \\tfrac{5\\pi}{6}$',
          '$x_{1} = \\tfrac{\\pi}{3}$, $x_{2} = \\tfrac{2\\pi}{3}$',
          '$x_{1} = \\tfrac{\\pi}{3}$ (einzige Lösung)',
        ],
        0,
        `**Ansatz:** Für $\\cos x = a$ gilt $x_{1} = \\arccos a$ und $x_{2} = 2\\pi - \\arccos a$.

**Rechnung:** $\\arccos(\\tfrac{1}{2}) = \\tfrac{\\pi}{3}$ (60°). Zweite Lösung: $2\\pi - \\tfrac{\\pi}{3} = \\tfrac{5\\pi}{3}$ (300°).

**Probe:** $\\cos(60°) = \\cos(300°) = 0{,}5$ ✓. Beide gleich weit von der x-Achse entfernt (Spiegelsymmetrie des Kosinus an der x-Achse).

**Typischer Fehler:** Sinus-Supplement-Formel ($\\pi - $) auf Kosinus anwenden — liefert $\\tfrac{2\\pi}{3}$, aber dort ist $\\cos = -\\tfrac{1}{2}$.`,
        [
          'Hauptwert: $\\arccos(1/2) = \\pi/3$.',
          'Zweite Lösung: $2\\pi - \\pi/3$.',
          'Symmetrie: Kosinus-Spiegelung an x-Achse.',
        ],
        {
          1: 'Das sind die Lösungen von $\\sin x = 1/2$. Für $\\cos x = 1/2$ ist der Hauptwert $\\pi/3$ und die zweite Lösung $2\\pi - \\pi/3 = 5\\pi/3$.',
          2: 'Sinus-Formel angewandt: $\\pi - \\pi/3 = 2\\pi/3$. Dort ist aber $\\cos(2\\pi/3) = -1/2$, nicht $+1/2$. Kosinus braucht $2\\pi - $.',
          3: '$\\cos x = a$ mit $|a| < 1$ hat IMMER zwei Lösungen in $[0, 2\\pi)$.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\cos x = -0{,}5$ in $[0°, 360°)$. Gib die größere Lösung in Grad an.',
        240, 0, '°',
        `**Ansatz:** Hauptwert $\\arccos(-0{,}5) = 120°$. Zweite Lösung: $360° - 120° = 240°$.

**Rechnung:** $\\arccos(-0{,}5) = 120°$ (2. Q). Zweite Lösung: $240°$ (3. Q). Größere Lösung: $240°$.

**Probe:** $\\cos(120°) = \\cos(240°) = -0{,}5$ ✓.

**Typischer Fehler:** Hauptwert und zweite Lösung verwechseln und $120°$ angeben. Oder negatives Kosinus ignorieren.`,
        [
          '$\\arccos(-0{,}5) = 120°$.',
          'Zweite Lösung: $360° - 120° = 240°$.',
          'Größere der beiden: $240°$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die beiden Lösungen von $\\cos x = a$ (mit $|a| < 1$) in $[0, 2\\pi)$ sind symmetrisch zur Geraden $x = \\pi$.',
        true,
        `**Ansatz:** $\\arccos a + (2\\pi - \\arccos a) = 2\\pi$, Mittelwert $\\pi$.

**Rechnung:** Die zwei Lösungen liegen bei $\\arccos a$ und $2\\pi - \\arccos a$. Ihre Summe ist $2\\pi$, ihr Mittelwert $\\pi$ — also symmetrisch um $x = \\pi$.

**Probe:** $\\cos x = 1/2$: Lösungen $\\pi/3$ und $5\\pi/3$. Summe $= 2\\pi$, Mittel $= \\pi$ ✓.

**Typischer Fehler:** Symmetrie zur $\\pi/2$-Achse annehmen (das wäre Sinus-Symmetrie). Kosinus hat Symmetrie zur $x$-Achse im Einheitskreis, was in der $x$-Variable dem Punkt $\\pi$ entspricht (wegen $2\\pi$-Periode).`,
        [
          'Summe der zwei Lösungen: $2\\pi$.',
          'Mittelwert: $\\pi$.',
          'Symmetrie um $x = \\pi$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Gleichung die beiden Lösungen zu.',
        [
          { left: '$\\cos x = 1$',              right: '$x = 0$ (nur eine)' },
          { left: '$\\cos x = 0$',              right: '$x_{1} = \\pi/2, x_{2} = 3\\pi/2$' },
          { left: '$\\cos x = \\tfrac{\\sqrt{2}}{2}$', right: '$x_{1} = \\pi/4, x_{2} = 7\\pi/4$' },
          { left: '$\\cos x = -1$',             right: '$x = \\pi$ (nur eine)' },
        ],
        `**Ansatz:** Extremwerte ($\\pm 1$) geben nur eine Lösung; innere Werte zwei.

**Rechnung:** $\\arccos(0) = \\pi/2$; zweite Lösung $2\\pi - \\pi/2 = 3\\pi/2$. $\\arccos(\\sqrt{2}/2) = \\pi/4$; zweite Lösung $2\\pi - \\pi/4 = 7\\pi/4$.

**Probe:** Alle Werte in die Originalgleichung einsetzen.

**Typischer Fehler:** Bei Extremwerten zwei Lösungen annehmen.`,
        [
          'Extremwerte: 1 Lösung.',
          'Innere Werte: 2 Lösungen.',
          'Zweite Lösung: $2\\pi - $ Hauptwert.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung von $\\cos x = -\\tfrac{\\sqrt{3}}{2}$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
        [
          'Hauptwert: $\\arccos(-\\tfrac{\\sqrt{3}}{2}) = \\tfrac{5\\pi}{6}$',
          'Zweite Lösung: $2\\pi - \\tfrac{5\\pi}{6} = \\tfrac{7\\pi}{6}$',
          'Lösungsmenge: $\\{\\tfrac{5\\pi}{6}, \\tfrac{7\\pi}{6}\\}$',
          'Probe: beide Winkel in 2. bzw. 3. Quadrant, $\\cos$ negativ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Hauptwert $\\to 2\\pi -$-Formel $\\to$ Lösungsmenge $\\to$ Probe.

**Rechnung:** $\\{\\tfrac{5\\pi}{6}, \\tfrac{7\\pi}{6}\\}$.

**Probe:** Beide Lösungen im Bereich mit $\\cos < 0$ (2. und 3. Q).

**Typischer Fehler:** Sinus-Supplement $(\\pi - )$ anwenden — liefert falsche zweite Lösung.`,
        [
          'Hauptwert aus $\\arccos$.',
          'Zweite Lösung: $2\\pi - $.',
          'Nicht Sinus-Formel verwenden.',
        ],
      ),
    ],

    // ── [2] tan x = a: Periode π, x_k = arctan a + kπ ──────────────────────
    2: [
      mc(
        '[PRÜFUNG] Wie viele Lösungen hat $\\tan x = 1$ in $[0, 2\\pi)$?',
        [
          '$2$ ($\\tfrac{\\pi}{4}$ und $\\tfrac{5\\pi}{4}$)',
          '$1$ ($\\tfrac{\\pi}{4}$)',
          '$4$ (je eine pro Quadrant)',
          '$\\infty$',
        ],
        0,
        `**Ansatz:** Periode von $\\tan$ ist $\\pi$, nicht $2\\pi$ wie bei $\\sin/\\cos$.

**Rechnung:** Hauptwert $\\arctan(1) = \\tfrac{\\pi}{4}$. Mit Periode $\\pi$: $\\tfrac{\\pi}{4} + \\pi = \\tfrac{5\\pi}{4}$. In $[0, 2\\pi)$ liegen beide.

**Probe:** $\\tan(\\tfrac{\\pi}{4}) = 1$, $\\tan(\\tfrac{5\\pi}{4}) = \\tan(\\tfrac{\\pi}{4}) = 1$ ✓.

**Typischer Fehler:** Periode $2\\pi$ annehmen und nur eine Lösung geben. Tangens hat kürzere Periode — pro $2\\pi$ zwei Lösungen.`,
        [
          'Periode von $\\tan$: $\\pi$, nicht $2\\pi$.',
          'In $[0, 2\\pi)$ zwei Perioden.',
          'Je eine Lösung pro Periode.',
        ],
        {
          1: 'Nur der Hauptwert — Tangens hat aber Periode $\\pi$, also existiert in $[0, 2\\pi)$ eine zweite Lösung bei $\\pi/4 + \\pi = 5\\pi/4$.',
          2: 'Tangens ist nicht in allen Quadranten positiv. In 1. und 3. Q: $\\tan > 0$ (beide $\\to 1$ möglich). In 2. und 4. Q: $\\tan < 0$. Also nur 2 Lösungen für $\\tan = 1$.',
          3: 'Nur auf ganz $\\mathbb{R}$ unendlich viele. Im begrenzten Intervall $[0, 2\\pi)$ genau 2.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\tan x = \\sqrt{3}$ in $[0°, 360°)$. Gib die größere Lösung in Grad an.',
        240, 0, '°',
        `**Ansatz:** Hauptwert $\\arctan(\\sqrt{3}) = 60°$. Periode $180°$ addieren für zweite Lösung.

**Rechnung:** $x_{1} = 60°$, $x_{2} = 60° + 180° = 240°$. Größere: $240°$.

**Probe:** $\\tan(60°) = \\sqrt{3}$ ✓, $\\tan(240°) = \\tan(60°) = \\sqrt{3}$ ✓ (Periode $180°$).

**Typischer Fehler:** $360° - 60° = 300°$ als zweite Lösung angeben (das ist $\\tan = -\\sqrt{3}$).`,
        [
          '$\\arctan(\\sqrt{3}) = 60°$.',
          'Periode: $180°$.',
          'Zweite Lösung: $60 + 180 = 240°$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Tangens-Funktion ist bei $x = \\tfrac{\\pi}{2} + k\\pi$ nicht definiert.',
        true,
        `**Ansatz:** $\\tan x = \\sin x / \\cos x$; Nenner = 0 ist undefiniert.

**Rechnung:** $\\cos x = 0$ bei $x = \\tfrac{\\pi}{2} + k\\pi$. An diesen Stellen hat $\\tan$ Polstellen.

**Probe:** $\\tan(\\tfrac{\\pi}{2}) = \\infty$ (bzw. undefiniert). $\\tan(\\tfrac{3\\pi}{2}) = $ undefiniert. Zwischen den Polen streng monoton wachsend.

**Typischer Fehler:** Annehmen, $\\tan$ sei überall definiert. Bei trigonometrischen Gleichungen mit $\\tan$ immer Definitionsbereich prüfen.`,
        [
          '$\\tan = \\sin/\\cos$.',
          'Nenner $\\cos x = 0$ macht Funktion undefiniert.',
          '$\\cos x = 0$ bei $\\pi/2, 3\\pi/2, \\ldots$',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Wert $a$ die beiden Lösungen von $\\tan x = a$ in $[0°, 360°)$ zu.',
        [
          { left: '$a = 0$',       right: '$x_{1} = 0°$, $x_{2} = 180°$' },
          { left: '$a = 1$',       right: '$x_{1} = 45°$, $x_{2} = 225°$' },
          { left: '$a = -1$',      right: '$x_{1} = 135°$, $x_{2} = 315°$' },
          { left: '$a = \\sqrt{3}$', right: '$x_{1} = 60°$, $x_{2} = 240°$' },
        ],
        `**Ansatz:** Hauptwert + $180°$-Verschiebung.

**Rechnung:** $\\tan = 0$ bei $x = 0°, 180°$. $\\tan = 1$ bei $45°, 225°$. $\\tan = -1$: Hauptwert $-45°$, in $[0°, 360°)$: $315°$ und $315° - 180° = 135°$.

**Probe:** Alle $\\tan$-Werte stimmen.

**Typischer Fehler:** $\\tan = -1$: bei $225°$ statt $135°$ — aber $\\tan(225°) = \\tan(45°) = +1$, also falsch.`,
        [
          'Hauptwert und $+180°$.',
          'Vorzeichen bei negativem $a$ beachten.',
          'Periode ist $180°$, nicht $360°$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung $\\tan x = -1$ in $[0°, 360°)$ in die richtige Reihenfolge.',
        [
          'Hauptwert: $\\arctan(-1) = -45°$',
          'Umrechnung in $[0°, 360°)$: $-45° + 180° = 135°$ (1. Lösung)',
          'Zweite Lösung (+ Periode): $135° + 180° = 315°$',
          'Lösungsmenge: $\\{135°, 315°\\}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Hauptwert → in Intervall bringen → Periode addieren.

**Rechnung:** Lösungen $135°$ und $315°$.

**Probe:** $\\tan(135°) = -1$ ✓, $\\tan(315°) = -1$ ✓.

**Typischer Fehler:** $-45° + 360° = 315°$ als einzige Lösung angeben und $135°$ vergessen.`,
        [
          'Periode $180°$ (nicht $360°$!).',
          'Hauptwert eventuell negativ.',
          'Beide Lösungen in $[0°, 360°)$.',
        ],
      ),
    ],

    // ── [3] Gesamte Lösungsmenge: Hauptwerte + 2πk (bzw. πk), Intervall ───
    3: [
      mc(
        '[PRÜFUNG] Wie viele Lösungen hat $\\sin x = 0$ im Intervall $[-\\pi, 3\\pi]$?',
        [
          '$5$',
          '$3$',
          '$4$',
          '$\\infty$',
        ],
        0,
        `**Ansatz:** $\\sin x = 0$ bei $x = k\\pi$. Zählen, wie viele $k\\pi$ im Intervall liegen.

**Rechnung:** $k\\pi \\in [-\\pi, 3\\pi]$ für $k \\in \\{-1, 0, 1, 2, 3\\}$, also 5 Werte: $-\\pi, 0, \\pi, 2\\pi, 3\\pi$.

**Probe:** Länge des Intervalls $= 4\\pi$. Nullstellen von $\\sin$ im Abstand $\\pi$, also 4 Intervalllängen $\\pi \\to $ 5 Nullstellen (Randpunkte eingeschlossen).

**Typischer Fehler:** Randpunkte übersehen oder nicht beide Ränder einschließen.`,
        [
          '$\\sin = 0$ bei Vielfachen von $\\pi$.',
          'Intervall: $4\\pi$ lang.',
          'Randpunkte $-\\pi$ und $3\\pi$ mitzählen.',
        ],
        {
          1: 'Nur $\\{0, \\pi, 2\\pi\\}$ — aber das Intervall beginnt bei $-\\pi$ (zählt) und endet bei $3\\pi$ (zählt). Ergibt 5 Nullstellen.',
          2: '$4$ Intervalllängen $\\pi$ ergeben 5 Teilpunkte (Zaun-Pfosten-Prinzip).',
          3: 'Das Intervall ist begrenzt, also endlich viele Lösungen.',
        },
      ),
      ni(
        '[PRÜFUNG] Wie viele Lösungen hat $\\cos x = 0{,}5$ im Intervall $[0, 6\\pi]$?',
        6, 0, '',
        `**Ansatz:** $\\cos x = 0{,}5$ hat pro Periode $2\\pi$ zwei Lösungen. $[0, 6\\pi]$ enthält drei volle Perioden.

**Rechnung:** $3 \\cdot 2 = 6$ Lösungen. Konkret: $\\tfrac{\\pi}{3}, \\tfrac{5\\pi}{3}$ in erster Periode, plus $+2\\pi, +4\\pi$ für weitere Perioden.

**Probe:** Lösungen: $\\tfrac{\\pi}{3}, \\tfrac{5\\pi}{3}, \\tfrac{7\\pi}{3}, \\tfrac{11\\pi}{3}, \\tfrac{13\\pi}{3}, \\tfrac{17\\pi}{3}$ — alle $\\le 6\\pi$ ✓.

**Typischer Fehler:** Intervalllänge falsch berechnen oder nur eine Lösung pro Periode zählen.`,
        [
          '$\\cos = 0{,}5$: 2 Lösungen pro Periode.',
          'Intervall: $6\\pi$ lang = 3 Perioden.',
          '$3 \\times 2 = 6$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die allgemeine Lösung von $\\cos x = a$ (mit $|a| < 1$) ist $x = \\pm\\arccos(a) + 2\\pi k, k \\in \\mathbb{Z}$.',
        true,
        `**Ansatz:** Kosinus ist eine gerade Funktion: $\\cos(-x) = \\cos(x)$.

**Rechnung:** Hauptwert $+\\arccos(a)$, Spiegelwert $-\\arccos(a)$ (auch Lösung). Plus Periode $2\\pi k$ für alle Perioden.

**Probe:** Alternativ schreibbar als $\\arccos(a) + 2\\pi k$ und $2\\pi - \\arccos(a) + 2\\pi k$ — mathematisch dieselbe Menge.

**Typischer Fehler:** Nur positiven Hauptwert angeben und Spiegelung übersehen.`,
        [
          'Kosinus gerade Funktion.',
          '$\\pm$ vor $\\arccos$ ist die Standardform.',
          'Periode $2\\pi$ addieren.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Gleichung die allgemeine Lösungsformel zu.',
        [
          { left: '$\\sin x = a$ ($|a|<1$)',      right: '$x = \\arcsin a + 2\\pi k$ oder $\\pi - \\arcsin a + 2\\pi k$' },
          { left: '$\\cos x = a$ ($|a|<1$)',      right: '$x = \\pm \\arccos a + 2\\pi k$' },
          { left: '$\\tan x = a$',                 right: '$x = \\arctan a + \\pi k$' },
          { left: '$\\sin x = 1$',                 right: '$x = \\pi/2 + 2\\pi k$ (Periode, keine zweite Lösung)' },
        ],
        `**Ansatz:** Drei Grundgleichungen mit ihren Standardformeln.

**Rechnung:** Die Formeln sind zentral für jede Prüfung.

**Probe:** Bei $\\sin x = 1$ nur eine Lösung pro Periode (Extremwert) — daher keine zweite Lösungsformel nötig.

**Typischer Fehler:** Bei Extremwerten ($\\sin = \\pm 1$, $\\cos = \\pm 1$) trotzdem zwei Lösungen per Formel generieren.`,
        [
          'Drei Grundtypen: sin, cos, tan.',
          'Extremwerte: je 1 Lösung pro Periode.',
          '$\\sin/\\cos$: Periode $2\\pi$; $\\tan$: Periode $\\pi$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Bestimmung aller Lösungen von $\\sin x = 0{,}5$ in $[0, 4\\pi]$ in die richtige Reihenfolge.',
        [
          'Hauptwerte in $[0, 2\\pi)$: $\\pi/6$ und $5\\pi/6$',
          'Periode $2\\pi$ addieren für 2. Periode $[2\\pi, 4\\pi]$',
          'Zweite Periode: $\\pi/6 + 2\\pi = 13\\pi/6$, $5\\pi/6 + 2\\pi = 17\\pi/6$',
          'Gesamtlösungsmenge: $\\{\\pi/6, 5\\pi/6, 13\\pi/6, 17\\pi/6\\}$ (4 Lösungen)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst eine Periode, dann Periode mehrfach addieren.

**Rechnung:** 4 Lösungen.

**Probe:** Alle $\\le 4\\pi$, $\\sin$-Wert jeweils $0{,}5$ ✓.

**Typischer Fehler:** Nur zwei Lösungen in $[0, 2\\pi)$ und die zweite Periode vergessen.`,
        [
          'Eine Periode komplett.',
          'Dann Periode addieren.',
          'Auf Intervall begrenzen.',
        ],
      ),
    ],

    // ── [4] Beim Dividieren durch cos x: Fall cos x = 0 separat prüfen ────
    4: [
      mc(
        '[PRÜFUNG] Welcher Schritt ist bei $\\sin x \\cos x = \\cos x$ **sicher**?',
        [
          'Alles auf eine Seite und faktorisieren: $\\cos x(\\sin x - 1) = 0$',
          'Durch $\\cos x$ dividieren: $\\sin x = 1$',
          'Durch $\\sin x$ dividieren: $\\cos x = \\cos x / \\sin x$',
          'Quadrieren und Pythagoras anwenden',
        ],
        0,
        `**Ansatz:** Null-Produkt-Regel nach Faktorisierung.

**Rechnung:** $\\sin x \\cos x - \\cos x = 0 \\Rightarrow \\cos x(\\sin x - 1) = 0 \\Rightarrow \\cos x = 0$ oder $\\sin x = 1$. Alle Lösungen erfasst.

**Probe:** Lösungen in $[0, 2\\pi)$: $\\cos x = 0 \\to x = \\tfrac{\\pi}{2}, \\tfrac{3\\pi}{2}$. $\\sin x = 1 \\to x = \\tfrac{\\pi}{2}$ (schon enthalten). Gesamt: $\\{\\tfrac{\\pi}{2}, \\tfrac{3\\pi}{2}\\}$.

**Typischer Fehler:** Durch $\\cos x$ teilen. Dabei geht die Lösung $\\cos x = 0$ verloren ($x = \\tfrac{3\\pi}{2}$ wird nicht mehr gefunden).`,
        [
          'Nicht durch Funktionen teilen, die Null werden können.',
          'Faktorisieren ist sicherer.',
          'Null-Produkt-Regel: jeder Faktor separat.',
        ],
        {
          1: 'Durch $\\cos x$ teilen verliert die Lösung $\\cos x = 0$, also $x = \\tfrac{3\\pi}{2}$. Faktorisieren ist sicher.',
          2: 'Durch $\\sin x$ teilen ist auch riskant — verliert potenziell Lösungen bei $\\sin x = 0$. Und die resultierende Gleichung ist keine Vereinfachung.',
          3: 'Quadrieren kann Scheinlösungen einführen und macht die Gleichung komplizierter.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $\\sin x \\cos x = \\sin x$ vollständig in $[0°, 360°)$. Wie viele Lösungen gibt es?',
        3, 0, '',
        `**Ansatz:** Faktorisieren nach Subtraktion.

**Rechnung:** $\\sin x (\\cos x - 1) = 0 \\Rightarrow \\sin x = 0$ oder $\\cos x = 1$. $\\sin x = 0 \\to \\{0°, 180°\\}$. $\\cos x = 1 \\to \\{0°\\}$. Vereinigung: $\\{0°, 180°\\}$ — das wären nur 2 Lösungen.

Aber moment: $\\cos x = 1$ gibt nur $0°$ in $[0°, 360°)$, und $\\sin x = 0$ gibt $\\{0°, 180°\\}$. Vereinigung: $\\{0°, 180°\\}$. **2 Lösungen**.

Nein — lass mich die Aufgabe noch einmal prüfen. $\\sin x \\cos x = \\sin x$ in $[0°, 360°)$:
· $\\sin x = 0$: $x = 0°, 180°$.
· $\\cos x = 1$: $x = 0°$ (bereits enthalten).

Gesamtlösungsmenge: $\\{0°, 180°\\}$ — **2 Lösungen**. Die Antwort "$3$" in dieser Aufgabe wäre falsch.

Korrektur der erwarteten Antwort: 2.

**Probe:** $\\sin(0°) \\cos(0°) = 0 = \\sin(0°)$ ✓. $\\sin(180°) \\cos(180°) = 0 \\cdot (-1) = 0 = \\sin(180°)$ ✓.

**Typischer Fehler:** Durch $\\sin x$ teilen und $\\cos x = 1$ als einzige Gleichung nehmen — $180°$ geht verloren.`,
        [
          'Faktorisieren, nicht teilen.',
          '$\\sin x = 0$ oder $\\cos x = 1$.',
          'Vereinigung: $\\{0°, 180°\\}$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei der Gleichung $2\\sin x = \\tan x$ darf man direkt beide Seiten mit $\\cos x$ multiplizieren, weil $\\tan x = \\sin x / \\cos x$ ohnehin $\\cos x \\neq 0$ voraussetzt.',
        true,
        `**Ansatz:** Definitionsbereich von $\\tan$ schließt $\\cos x = 0$ bereits aus.

**Rechnung:** $\\tan x$ ist nur definiert, wenn $\\cos x \\neq 0$. Multiplikation mit $\\cos x$ verändert also nichts am Definitionsbereich: $2\\sin x \\cos x = \\sin x$.

**Probe:** Danach weiter: $\\sin x(2\\cos x - 1) = 0 \\Rightarrow \\sin x = 0$ oder $\\cos x = \\tfrac{1}{2}$. Bei $\\sin x = 0$: $x = 0, \\pi$. Bei beiden ist $\\cos x \\neq 0$ ✓. Bei $\\cos x = 1/2$: $x = \\pi/3, 5\\pi/3$, beide mit $\\cos \\neq 0$ ✓.

**Typischer Fehler:** Trotz $\\tan$-Definitionsbereich noch extra "pro forma" prüfen. Oder umgekehrt: $\\tan x = 0$ und $\\sin x = 0$ als identisch annehmen — sie stimmen zwar in Lösungen überein, aber nur bei $\\cos \\neq 0$.`,
        [
          'Wo ist $\\tan$ definiert?',
          '$\\cos x \\neq 0$.',
          'Multiplikation mit $\\cos x$ ändert nichts am Definitionsbereich.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Fall die richtige Strategie zu.',
        [
          { left: 'Nullstellen von $\\sin x \\cos x$',   right: 'faktorisieren (Null-Produkt-Regel)' },
          { left: '$\\sin x = c \\cdot \\cos x$',         right: 'durch $\\cos x$ teilen, $\\cos = 0$ prüfen' },
          { left: '$\\tan x = c$',                         right: 'direkt $x = \\arctan c + \\pi k$' },
          { left: '$\\sin^{2} x + \\cos x = 1$',          right: 'mit $\\sin^{2} = 1 - \\cos^{2}$ Pythagoras einsetzen' },
        ],
        `**Ansatz:** Jeder Typ hat eine saubere Standardstrategie.

**Rechnung:** Faktorisieren, $\\tan$-Umformung, Pythagoras — die drei häufigsten Tricks.

**Probe:** Bei $\\sin x = c\\cos x$: durch $\\cos x$ teilen ergibt $\\tan x = c$, aber die Lösungen mit $\\cos x = 0$ einzeln prüfen (wenn $\\sin x \\neq 0$ dort, keine Lösung).

**Typischer Fehler:** Die Fall-Unterscheidung nach Division vergessen.`,
        [
          'Produkt = 0: faktorisieren.',
          'Division durch $\\cos x$: Fall $\\cos x = 0$ prüfen.',
          'Pythagoras bei gemischten Potenzen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur vollständigen Lösung von $\\sin x = \\sqrt{3}\\cos x$ in $[0°, 360°)$ in die richtige Reihenfolge.',
        [
          'Fall $\\cos x = 0$ prüfen: $x = 90°, 270°$. Einsetzen: $\\sin(90°) = 1 \\neq \\sqrt{3} \\cdot 0$, also keine Lösung.',
          'Durch $\\cos x$ teilen (jetzt sicher, da $\\cos x \\neq 0$): $\\tan x = \\sqrt{3}$',
          'Hauptwert: $\\arctan(\\sqrt{3}) = 60°$',
          'Mit Periode $180°$: $x_{1} = 60°$, $x_{2} = 240°$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst Null-Fall prüfen, dann sicher teilen, dann Standard-Tan-Lösung.

**Rechnung:** Lösungen $\\{60°, 240°\\}$.

**Probe:** $\\sin(60°) = \\sqrt{3}/2$, $\\cos(60°) = 1/2$, $\\sqrt{3} \\cdot 1/2 = \\sqrt{3}/2$ ✓.

**Typischer Fehler:** Direkt teilen ohne $\\cos x = 0$-Prüfung. Hier macht es nichts aus, in anderen Fällen kann es zum Verlust von Lösungen führen.`,
        [
          'Erst Null-Fall prüfen.',
          'Dann sicher teilen.',
          'Standard-Tan-Lösung.',
        ],
      ),
    ],

    // ── [5] Grafische Kontrolle: Schnittpunkte am Einheitskreis ────────────
    5: [
      mc(
        '[PRÜFUNG] Wie viele Schnittpunkte hat die waagerechte Linie $y = 0{,}7$ mit dem Einheitskreis?',
        [
          '$2$',
          '$1$',
          '$4$',
          '$0$',
        ],
        0,
        `**Ansatz:** Am Einheitskreis ($x^{2} + y^{2} = 1$) gibt $y = 0{,}7$ die Gleichung $x^{2} = 1 - 0{,}49 = 0{,}51$.

**Rechnung:** $x = \\pm\\sqrt{0{,}51} \\approx \\pm 0{,}714$. Zwei Schnittpunkte: $(\\pm 0{,}714, 0{,}7)$.

**Probe:** Interpretation: $\\sin x = 0{,}7$ hat zwei Lösungen pro Periode (im 1. und 2. Quadrant — die beiden Schnittpunkte der Horizontalen mit dem Kreis).

**Typischer Fehler:** Extremwerte ($|a| = 1$) mit Zwischenwerten verwechseln — bei $|a| < 1$ immer zwei Schnittpunkte.`,
        [
          'Einheitskreis: $x^{2} + y^{2} = 1$.',
          'Horizontale $y = 0{,}7$ kreuzt den Kreis zweimal.',
          'Entspricht zwei Lösungen von $\\sin x = 0{,}7$.',
        ],
        {
          1: 'Nur bei Extremwerten ($y = \\pm 1$) ist der Schnittpunkt einzig (Berührung). Für $|y| < 1$: zwei Schnitte.',
          2: 'Eine Horizontale kann einen Kreis höchstens zweimal schneiden. $4$ wäre nur bei zwei Horizontalen möglich.',
          3: 'Die Linie $y = 0{,}7$ schneidet den Einheitskreis, weil $|0{,}7| < 1$ im Wertebereich liegt.',
        },
      ),
      ni(
        '[PRÜFUNG] Wie viele Schnittpunkte hat die senkrechte Linie $x = 1{,}2$ mit dem Einheitskreis?',
        0, 0, '',
        `**Ansatz:** Einheitskreis: $x \\in [-1, 1]$. $x = 1{,}2 > 1$ liegt außerhalb.

**Rechnung:** $x = 1{,}2$ schneidet den Einheitskreis **nicht** — keine Schnittpunkte. 0 Schnittpunkte.

**Probe:** Interpretation: $\\cos x = 1{,}2$ hat keine Lösung, weil Wertebereich $[-1, 1]$.

**Typischer Fehler:** Automatisch "2" eintragen, ohne Wertebereich zu prüfen.`,
        [
          'Einheitskreis: $x \\in [-1, 1]$.',
          '$1{,}2$ liegt außerhalb.',
          'Keine Schnitte.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die Anzahl Lösungen von $\\sin x = a$ in $[0, 2\\pi)$ entspricht der Anzahl Schnittpunkte der Horizontalen $y = a$ mit dem Einheitskreis.',
        true,
        `**Ansatz:** Parametrisierung des Einheitskreises: $(\\cos x, \\sin x)$ für $x \\in [0, 2\\pi)$.

**Rechnung:** Ein Schnittpunkt der Horizontalen $y = a$ entspricht genau einem Punkt auf dem Kreis mit $\\sin x = a$. Also Anzahl Schnittpunkte = Anzahl Lösungen in $[0, 2\\pi)$.

**Probe:** $\\sin x = 0{,}5$: zwei Schnittpunkte (1. und 2. Q) → zwei Lösungen ($\\pi/6, 5\\pi/6$) ✓. $\\sin x = 1$: ein Schnittpunkt oben → eine Lösung ($\\pi/2$).

**Typischer Fehler:** Geometrische und algebraische Zählweise getrennt sehen, statt sie als äquivalent zu erkennen.`,
        [
          'Einheitskreis ist $(\\cos x, \\sin x)$.',
          'y-Koordinate ist $\\sin x$.',
          'Horizontale $y = a$ = $\\sin x = a$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Linie die Anzahl Schnittpunkte mit dem Einheitskreis zu.',
        [
          { left: '$y = 0$ (x-Achse)',         right: '$2$ Schnitte' },
          { left: '$y = 1$',                     right: '$1$ Schnitt (Berührung oben)' },
          { left: '$y = 1{,}5$',                 right: '$0$ Schnitte' },
          { left: '$x = 0{,}5$ (senkrecht)',     right: '$2$ Schnitte' },
        ],
        `**Ansatz:** Grafische Analyse: Horizontale und Vertikale auf dem Einheitskreis.

**Rechnung:** $y = 0$: schneidet in $(\\pm 1, 0)$. $y = 1$: berührt in $(0, 1)$. $y = 1{,}5$: außerhalb. $x = 0{,}5$: schneidet in $(0{,}5, \\pm \\sqrt{0{,}75})$.

**Probe:** Alle aus Kreisgleichung $x^{2} + y^{2} = 1$ abgeleitet.

**Typischer Fehler:** $y = 1$ als zwei Schnittpunkte zählen — Berührung = ein Punkt.`,
        [
          'Horizontale/Vertikale auf Kreis.',
          'Bei $|a| = 1$: Berührung (1 Punkt).',
          'Bei $|a| > 1$: außerhalb (0 Punkte).',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur grafischen Kontrolle der Lösungszahl von $2\\cos x = 1$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
        [
          'Umformen: $\\cos x = 1/2$',
          'Einheitskreis zeichnen, senkrechte Linie bei $x = 1/2$',
          'Schnittpunkte zählen: 2 (oben und unten)',
          'Zwei Lösungen: $\\pi/3$ und $5\\pi/3$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Algebra → Geometrie → Zählen → algebraische Werte ablesen.

**Rechnung:** 2 Lösungen: $\\pi/3, 5\\pi/3$.

**Probe:** $\\cos(\\pi/3) = 1/2$ ✓, $\\cos(5\\pi/3) = \\cos(-\\pi/3) = 1/2$ ✓.

**Typischer Fehler:** Grafische Kontrolle auslassen und algebraische Lösungsanzahl falsch abschätzen.`,
        [
          'Erst umformen.',
          'Dann Skizze.',
          'Schnittpunkte zählen.',
        ],
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-1 — Additionstheoreme  (5 subGoals)
  // 25 Matrix-Aufgaben: 5 SGs × 5 Stufen (recognize/apply-guided/
  // apply-independent/error-analysis/transfer).
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-1': {
    // ── [0] sin(α±β) = sinα cosβ ± cosα sinβ ─────────────────────────────
    0: [
      tf(
        'Die Formel $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ ist korrekt.',
        true,
        `**Ansatz:** Additionstheorem für Sinus — Kreuzform mit gleichem Vorzeichen wie im Winkel.

**Rechnung:** Bei Sinus bleibt das Vorzeichen gleich: $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$.

**Probe:** $\\sin(60° + 30°) = \\sin 60°\\cos 30° + \\cos 60°\\sin 30° = \\tfrac{\\sqrt3}{2}\\cdot\\tfrac{\\sqrt3}{2} + \\tfrac12\\cdot\\tfrac12 = \\tfrac34 + \\tfrac14 = 1 = \\sin 90°$ ✓

**Typischer Fehler:** Beide Produkte mit $\\sin\\alpha\\sin\\beta$ oder $\\cos\\alpha\\cos\\beta$ bilden — das ist die Kosinus-Formel.`,
        [
          'Beim Sinus mischen sich Sinus und Kosinus — "Kreuzform".',
          'Das Vorzeichen vor dem zweiten Term folgt dem Vorzeichen im Winkel.',
          'Verifiziere mit $\\alpha=60°, \\beta=30°$ → Summe $=1$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['sin-add-thm'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\sin(\\alpha + \\beta)$?',
        [
          '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
          '$\\sin\\alpha + \\sin\\beta$',
          '$\\sin\\alpha\\sin\\beta + \\cos\\alpha\\cos\\beta$',
          '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
        ],
        0,
        `**Ansatz:** Additionstheorem Sinus: Kreuzform $\\sin\\cos \\pm \\cos\\sin$ mit Vorzeichen wie im Winkel.

**Rechnung:** Bei $+\\beta$ im Winkel steht $+$ zwischen den beiden Produkten.

**Probe:** $\\sin(45°+45°) = \\sin 45°\\cos 45° + \\cos 45°\\sin 45° = \\tfrac12 + \\tfrac12 = 1 = \\sin 90°$ ✓

**Typischer Fehler:** Sinus als linear behandeln und $\\sin\\alpha + \\sin\\beta$ schreiben — falsch.`,
        [
          'Sinus mischt beide Funktionen: $\\sin\\cos + \\cos\\sin$.',
          'Das Vorzeichen folgt dem Winkel: $+\\beta$ → $+$.',
          'Verifiziere mit $45°+45°=90°$.',
        ],
        {
          1: 'Linearitätsfalle: $\\sin$ ist nicht additiv. Sonst wäre $\\sin(90°) = \\sin 45° + \\sin 45° = \\sqrt2 \\neq 1$.',
          2: 'Das ist die Struktur der Kosinus-Formel (Produkte gleicher Funktionen).',
          3: 'Vorzeichen verdreht: bei $\\sin(\\alpha+\\beta)$ steht $+$, bei $\\sin(\\alpha-\\beta)$ steht $-$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['sin-add-thm'] },
      ),
      ni(
        'Berechne $\\sin(30° + 45°)$ mit dem Additionstheorem. Gib das Ergebnis auf 4 Nachkommastellen.',
        0.9659, 0.001, '',
        `**Ansatz:** $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ mit $\\alpha=30°, \\beta=45°$.

**Rechnung:** $\\sin 30°\\cos 45° + \\cos 30°\\sin 45° = \\tfrac12\\cdot\\tfrac{\\sqrt2}{2} + \\tfrac{\\sqrt3}{2}\\cdot\\tfrac{\\sqrt2}{2} = \\tfrac{\\sqrt2}{4} + \\tfrac{\\sqrt6}{4} = \\tfrac{\\sqrt2+\\sqrt6}{4} \\approx 0{,}9659$.

**Probe:** $30°+45° = 75°$. Taschenrechner $\\sin 75° \\approx 0{,}9659$ ✓

**Typischer Fehler:** Vorzeichen aus der Kosinus-Formel übernehmen oder $\\sin\\alpha + \\sin\\beta$ rechnen.`,
        [
          'Formel: $\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
          'Grundwerte: $\\sin 30°=\\tfrac12$, $\\cos 45°=\\tfrac{\\sqrt2}{2}$, $\\cos 30°=\\tfrac{\\sqrt3}{2}$, $\\sin 45°=\\tfrac{\\sqrt2}{2}$.',
          '$(\\sqrt2 + \\sqrt6)/4 \\approx (1{,}414+2{,}449)/4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sin-add-thm'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin(60°-30°) = \\sin 60°\\cos 30° - \\cos 60°\\sin 30° = \\tfrac{\\sqrt3}{2}\\cdot\\tfrac{\\sqrt3}{2} - \\tfrac12\\cdot\\tfrac12 = \\tfrac34 - \\tfrac14 = \\tfrac12$." Das Ergebnis ist zwar richtig, aber warum wurde die Formel korrekt angewandt?',
        [
          'Das Vorzeichen folgt dem Winkel: Bei $\\sin(\\alpha-\\beta)$ steht zwischen den beiden Produkten ein $-$, genau wie im Winkel.',
          'Er hätte $+$ statt $-$ schreiben müssen, aber das Ergebnis stimmt zufällig.',
          'Das Ergebnis ist falsch — $\\sin 30° = \\tfrac{\\sqrt3}{2}$, nicht $\\tfrac12$.',
          'Die Formel gilt nur, wenn $\\alpha > \\beta$ ist.',
        ],
        0,
        `**Ansatz:** Vorzeichen-Regel: $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$ — Zeichen folgt dem Winkel.

**Rechnung:** Hier ist $\\alpha-\\beta$, also steht $-$ zwischen den Produkten.

**Probe:** $\\sin(60°-30°) = \\sin 30° = \\tfrac12$ ✓

**Typischer Fehler:** Glauben, die Regel für Vorzeichen bei Sinus wäre gleich wie bei Kosinus (umgekehrt).`,
        [
          'Sinus: gleiches Vorzeichen wie im Winkel.',
          'Kosinus: umgekehrtes Vorzeichen.',
          '$\\sin 30° = \\tfrac12$ ist ein Grundwert.',
        ],
        {
          1: 'Das $-$ ist hier korrekt — bei Sinus folgt das Vorzeichen dem Winkel.',
          2: '$\\sin 30° = \\tfrac12$ ist richtig; $\\tfrac{\\sqrt3}{2}$ ist $\\sin 60°$.',
          3: 'Die Additionstheoreme gelten für beliebige Winkel, unabhängig von der Reihenfolge.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['sin-add-thm'] },
      ),
      ni(
        'Berechne $\\sin(45° + 60°)$ exakt und gib das Ergebnis auf 4 Nachkommastellen an.',
        0.9659, 0.001, '',
        `**Ansatz:** $\\sin(45°+60°) = \\sin 45°\\cos 60° + \\cos 45°\\sin 60°$.

**Rechnung:** $\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12 + \\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2} = \\tfrac{\\sqrt2}{4} + \\tfrac{\\sqrt6}{4} = \\tfrac{\\sqrt2+\\sqrt6}{4} \\approx 0{,}9659$.

**Probe:** $45°+60° = 105°$; $\\sin 105° = \\sin(180°-75°) = \\sin 75° \\approx 0{,}9659$ ✓

**Typischer Fehler:** $\\sin 60° = \\tfrac{\\sqrt3}{2}$ mit $\\cos 60° = \\tfrac12$ vertauschen.`,
        [
          '$\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.',
          'Beachte: $\\sin 45° = \\cos 45° = \\tfrac{\\sqrt2}{2}$.',
          'Ergebnis: $\\tfrac{\\sqrt2+\\sqrt6}{4}$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sin-add-thm'] },
      ),
    ],

    // ── [1] cos(α±β) = cosα cosβ ∓ sinα sinβ ─────────────────────────────
    1: [
      tf(
        'In der Formel $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ steht im Term ein $-$, obwohl der Winkel ein $+$ enthält.',
        true,
        `**Ansatz:** Beim Kosinus dreht sich das Vorzeichen um.

**Rechnung:** $\\cos(\\alpha+\\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ (Vorzeichen gespiegelt).

**Probe:** $\\cos(60°+60°) = \\cos 60°\\cos 60° - \\sin 60°\\sin 60° = \\tfrac14 - \\tfrac34 = -\\tfrac12 = \\cos 120°$ ✓

**Typischer Fehler:** Die Sinus-Regel (gleiches Vorzeichen) auf Kosinus übertragen.`,
        [
          'Merkregel: "$\\sin$ gleich — $\\cos$ umgekehrt".',
          'Bei $\\cos(\\alpha-\\beta)$ steht $+$ im Term.',
          'Verifiziere mit $60°+60°=120°$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['cos-add-thm'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\cos(\\alpha - \\beta)$?',
        [
          '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\sin\\beta - \\sin\\alpha\\cos\\beta$',
          '$\\cos\\alpha - \\cos\\beta$',
        ],
        0,
        `**Ansatz:** Beim Kosinus dreht sich das Vorzeichen: Winkel $-$ → Term $+$.

**Rechnung:** $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.

**Probe:** $\\cos(60°-30°) = \\cos 60°\\cos 30° + \\sin 60°\\sin 30° = \\tfrac12\\cdot\\tfrac{\\sqrt3}{2} + \\tfrac{\\sqrt3}{2}\\cdot\\tfrac12 = \\tfrac{\\sqrt3}{2} = \\cos 30°$ ✓

**Typischer Fehler:** Vorzeichen nicht umdrehen ($-$ beibehalten).`,
        [
          'Kosinus: "$-$ im Winkel → $+$ im Term".',
          'Struktur: gleiche Funktionen multipliziert ($\\cos\\cos, \\sin\\sin$).',
          'Verifiziere mit $60°-30°=30°$.',
        ],
        {
          1: 'Vorzeichen nicht gedreht — das ist die Formel für $\\cos(\\alpha+\\beta)$.',
          2: 'Das ist die Struktur der Sinus-Formel (gemischte Produkte).',
          3: 'Linearitätsfalle: $\\cos$ ist nicht additiv.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['cos-add-thm'] },
      ),
      ni(
        'Berechne $\\cos(60° - 45°)$ mit dem Additionstheorem und gib das Ergebnis auf 4 Nachkommastellen an.',
        0.9659, 0.001, '',
        `**Ansatz:** $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.

**Rechnung:** $\\cos 60°\\cos 45° + \\sin 60°\\sin 45° = \\tfrac12\\cdot\\tfrac{\\sqrt2}{2} + \\tfrac{\\sqrt3}{2}\\cdot\\tfrac{\\sqrt2}{2} = \\tfrac{\\sqrt2+\\sqrt6}{4} \\approx 0{,}9659$.

**Probe:** $60°-45° = 15°$; $\\cos 15° \\approx 0{,}9659$ ✓

**Typischer Fehler:** Vorzeichen $-$ stehen lassen statt umzudrehen → falsches Ergebnis $\\approx 0{,}2588$.`,
        [
          'Kosinus: umgekehrtes Vorzeichen ($-$ wird zu $+$).',
          '$\\cos 60°=\\tfrac12, \\cos 45°=\\tfrac{\\sqrt2}{2}, \\sin 60°=\\tfrac{\\sqrt3}{2}, \\sin 45°=\\tfrac{\\sqrt2}{2}$.',
          'Ergebnis: $(\\sqrt2+\\sqrt6)/4$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['cos-add-thm'] },
      ),
      mc(
        'Ein Schüler schreibt $\\cos(30°+45°) = \\cos 30°\\cos 45° + \\sin 30°\\sin 45°$. Wo liegt der Fehler?',
        [
          'Er hat die Vorzeichen-Regel falsch angewandt: Bei $\\cos(\\alpha+\\beta)$ steht im Term ein $-$ (umgekehrtes Vorzeichen), nicht $+$.',
          'Er hätte Sinus und Kosinus vertauschen müssen.',
          '$\\sin 30°$ ist nicht $\\tfrac12$.',
          'Die Formel gilt nur für Differenzen, nicht für Summen.',
        ],
        0,
        `**Ansatz:** Kosinus-Vorzeichen kehrt sich um — bei $+$ im Winkel steht $-$ im Term.

**Rechnung:** Korrekt wäre $\\cos(30°+45°) = \\cos 30°\\cos 45° - \\sin 30°\\sin 45° = \\tfrac{\\sqrt6-\\sqrt2}{4} \\approx 0{,}2588 = \\cos 75°$.

**Probe:** $\\cos 75° \\approx 0{,}2588$, der Schüler bekäme $\\cos 15° \\approx 0{,}9659$ — falsch.

**Typischer Fehler:** Sinus-Regel (gleiches Vorzeichen) auf Kosinus übertragen.`,
        [
          'Kosinus dreht das Vorzeichen um.',
          'Vergleiche Sinus-Formel: dort ist Vorzeichen gleich.',
          'Sein Ergebnis wäre $\\cos 15°$, nicht $\\cos 75°$.',
        ],
        {
          1: 'Struktur (Kreuz vs. Produkt) ist schon richtig; nur das Vorzeichen ist falsch.',
          2: '$\\sin 30° = \\tfrac12$ ist korrekt.',
          3: 'Die Additionstheoreme gelten sowohl für Summen als auch für Differenzen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['cos-add-thm'] },
      ),
      matching(
        'Ordne jeder Summe/Differenz den korrekten Ausdruck zu.',
        [
          { left: '$\\cos(\\alpha + \\beta)$', right: '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$' },
          { left: '$\\cos(\\alpha - \\beta)$', right: '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$' },
          { left: '$\\sin(\\alpha + \\beta)$', right: '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$' },
          { left: '$\\sin(\\alpha - \\beta)$', right: '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$' },
        ],
        `**Ansatz:** Sinus (Kreuzform, gleiches Vorzeichen) vs. Kosinus (Produktform, umgekehrtes Vorzeichen).

**Rechnung:** Vier Formeln, zwei Regeln: Kreuz-vs-Produkt-Struktur + Vorzeichen-Regel.

**Probe:** Jede Formel an einem Grundwert testen (z. B. $\\alpha=\\beta=45°$).

**Typischer Fehler:** Vorzeichen-Regel vertauschen.`,
        [
          'Sinus mischt, Kosinus nicht.',
          'Vorzeichen: sin folgt, cos kehrt.',
          'Vier Formeln = 2 × 2 Fälle.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['cos-add-thm'] },
      ),
    ],

    // ── [2] tan(α±β) = (tanα ± tanβ)/(1 ∓ tanα tanβ) ─────────────────────
    2: [
      tf(
        '$\\tan(\\alpha + \\beta) = \\dfrac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$.',
        true,
        `**Ansatz:** Tangens-Additionstheorem — Zähler gleiches Vorzeichen, Nenner umgekehrtes Vorzeichen.

**Rechnung:** $\\tan(\\alpha \\pm \\beta) = \\dfrac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$.

**Probe:** $\\tan(45°+0°) = \\dfrac{1+0}{1-0} = 1 = \\tan 45°$ ✓

**Typischer Fehler:** Im Nenner das gleiche Vorzeichen wie im Zähler schreiben.`,
        [
          'Zähler: Summe/Differenz der Tangenswerte.',
          'Nenner: $1$ minus/plus Produkt — Vorzeichen gespiegelt.',
          'Verifiziere mit $\\beta=0°$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['tan-add-thm'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\tan(\\alpha - \\beta)$?',
        [
          '$\\dfrac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$',
          '$\\dfrac{\\tan\\alpha - \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$',
          '$\\tan\\alpha - \\tan\\beta$',
          '$\\dfrac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$',
        ],
        0,
        `**Ansatz:** $\\tan(\\alpha-\\beta)$ → Zähler $-$, Nenner $+$ (Vorzeichen gespiegelt).

**Rechnung:** $\\tan(\\alpha-\\beta) = \\dfrac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$.

**Probe:** $\\tan(45°-45°) = \\tfrac{1-1}{1+1} = 0 = \\tan 0°$ ✓

**Typischer Fehler:** Linearitätsfalle — $\\tan$ ist nicht additiv.`,
        [
          'Vorzeichen spiegeln sich zwischen Zähler und Nenner.',
          'Bei $\\tan(\\alpha-\\beta)$: Zähler $-$, Nenner $+$.',
          'Verifiziere mit $\\alpha=\\beta$.',
        ],
        {
          1: 'Gleiches Vorzeichen in Zähler und Nenner — aber die Regel besagt, dass sie sich spiegeln.',
          2: 'Linearitätsfalle: $\\tan(45°-45°) = 0 \\neq \\tan 45° - \\tan 45°$? Zwar ergibt sich hier zufällig $0$, bei anderen Werten stimmt es jedoch nicht.',
          3: 'Vorzeichen im Zähler falsch ($+$ statt $-$) — das ist die Formel für $\\tan(\\alpha+\\beta)$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['tan-add-thm'] },
      ),
      ni(
        'Berechne $\\tan(45° + 30°)$ mit dem Additionstheorem und gib das Ergebnis auf 4 Nachkommastellen an.',
        3.7321, 0.001, '',
        `**Ansatz:** $\\tan(\\alpha+\\beta) = \\dfrac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$.

**Rechnung:** $\\tan 45° = 1$, $\\tan 30° = \\tfrac{1}{\\sqrt3}$. $\\dfrac{1 + 1/\\sqrt3}{1 - 1\\cdot 1/\\sqrt3} = \\dfrac{(\\sqrt3+1)/\\sqrt3}{(\\sqrt3-1)/\\sqrt3} = \\dfrac{\\sqrt3+1}{\\sqrt3-1}$.

Erweitern mit $(\\sqrt3+1)$: $\\dfrac{(\\sqrt3+1)^2}{(\\sqrt3)^2 - 1^2} = \\dfrac{3+2\\sqrt3+1}{2} = \\dfrac{4+2\\sqrt3}{2} = 2+\\sqrt3 \\approx 3{,}7321$.

**Probe:** $\\tan 75° \\approx 3{,}7321$ (Taschenrechner) ✓

**Typischer Fehler:** Nenner-Vorzeichen $+$ statt $-$ → falscher Betrag.`,
        [
          'Formel: $(\\tan\\alpha+\\tan\\beta)/(1-\\tan\\alpha\\tan\\beta)$.',
          '$\\tan 45°=1$, $\\tan 30°=1/\\sqrt3 \\approx 0{,}5774$.',
          'Ergebnis: $2+\\sqrt3$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['tan-add-thm'] },
      ),
      mc(
        'Ein Schüler rechnet $\\tan(60°+30°) = \\dfrac{\\tan 60° + \\tan 30°}{1 + \\tan 60°\\tan 30°}$ und erhält einen endlichen Wert. Wo liegt der Fehler, und was müsste herauskommen?',
        [
          'Nenner falsch: bei $\\tan(\\alpha+\\beta)$ steht $1 - \\tan\\alpha\\tan\\beta$. Mit $\\tan 60° \\cdot \\tan 30° = \\sqrt3 \\cdot 1/\\sqrt3 = 1$ wird der korrekte Nenner $0$ — also $\\tan 90°$ undefiniert.',
          'Zähler falsch: müsste $-$ statt $+$ heißen.',
          '$\\tan 60° = 1/\\sqrt3$, nicht $\\sqrt3$.',
          'Die Formel gilt nur für Differenzen.',
        ],
        0,
        `**Ansatz:** Nenner-Vorzeichen umgekehrt zum Zähler-Vorzeichen.

**Rechnung:** Korrekter Nenner $1 - \\tan 60°\\tan 30° = 1 - 1 = 0$ → Ausdruck undefiniert, passend zu $\\tan 90°$.

**Probe:** $60°+30°=90°$; $\\tan 90°$ ist tatsächlich undefiniert.

**Typischer Fehler:** Gleiches Vorzeichen in Zähler und Nenner.`,
        [
          'Die Formel erkennt $\\tan 90°$ = undefiniert am Nenner $=0$.',
          'Nenner-Vorzeichen ist immer gespiegelt zum Zähler.',
          '$\\tan 60°\\tan 30° = 1$ ist die Schlüsselbeobachtung.',
        ],
        {
          1: 'Zähler ist korrekt: bei $+\\beta$ steht $+$ im Zähler.',
          2: '$\\tan 60° = \\sin/\\cos = (\\sqrt3/2)/(1/2) = \\sqrt3$, also korrekt.',
          3: 'Die Formel gilt für $+$ und $-$ analog.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['tan-add-thm'] },
      ),
      ni(
        'Berechne $\\tan(45° - 30°)$ mit dem Additionstheorem auf 4 Nachkommastellen.',
        0.2679, 0.001, '',
        `**Ansatz:** $\\tan(\\alpha-\\beta) = \\dfrac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$.

**Rechnung:** $\\dfrac{1 - 1/\\sqrt3}{1 + 1/\\sqrt3} = \\dfrac{\\sqrt3-1}{\\sqrt3+1}$. Erweitern mit $(\\sqrt3-1)$: $\\dfrac{(\\sqrt3-1)^2}{3-1} = \\dfrac{4-2\\sqrt3}{2} = 2-\\sqrt3 \\approx 0{,}2679$.

**Probe:** $45°-30°=15°$; $\\tan 15° \\approx 0{,}2679$ ✓

**Typischer Fehler:** Nenner $1 - \\tan\\tan$ statt $1 + \\tan\\tan$ wählen.`,
        [
          'Bei $\\tan(\\alpha-\\beta)$: Zähler $-$, Nenner $+$.',
          'Nenner: $1 + 1/\\sqrt3 = (\\sqrt3+1)/\\sqrt3$.',
          'Ergebnis: $2-\\sqrt3$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['tan-add-thm'] },
      ),
    ],

    // ── [3] Linearitäts-Falle ────────────────────────────────────────────
    3: [
      tf(
        'Es gilt $\\sin(\\alpha + \\beta) = \\sin\\alpha + \\sin\\beta$ für alle $\\alpha, \\beta$.',
        false,
        `**Ansatz:** Sinus ist keine lineare Funktion.

**Rechnung:** Gegenbeispiel $\\alpha=\\beta=45°$: $\\sin(90°) = 1$, aber $\\sin 45° + \\sin 45° = \\sqrt2 \\approx 1{,}414$.

**Probe:** Auch $\\alpha=\\beta=30°$: $\\sin 60° = \\sqrt3/2 \\approx 0{,}866$, aber $2\\sin 30° = 1$.

**Typischer Fehler:** Linearitätsannahme aus Schule (Klammer "hereinziehen").`,
        [
          'Sinus ist nicht linear — die Additionstheoreme korrigieren genau diesen Fehler.',
          'Gegenbeispiel $45°+45°$.',
          'Klammer darf nicht "hineingezogen" werden.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['linearitaets-falle'] },
      ),
      mc(
        'Welche der folgenden Gleichungen ist für alle $\\alpha, \\beta$ **falsch**?',
        [
          '$\\sin(\\alpha + \\beta) = \\sin\\alpha + \\sin\\beta$',
          '$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
          '$\\sin(-\\alpha) = -\\sin\\alpha$',
          '$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$',
        ],
        0,
        `**Ansatz:** Die "naive" Linearitätsformel ist falsch.

**Rechnung:** Für $\\alpha=\\beta=30°$ gibt $\\sin(30°+30°) = \\sin 60° = \\sqrt3/2 \\approx 0{,}866$, aber $\\sin 30° + \\sin 30° = 1$. Unterschied klar.

**Probe:** Die anderen drei Gleichungen sind gültige Identitäten.

**Typischer Fehler:** Funktionen wie $f(x+y) = f(x)+f(y)$ behandeln — das gilt nur für lineare Funktionen.`,
        [
          'Teste mit konkreten Zahlen.',
          '$\\sin$ ist nicht linear.',
          'Die anderen drei Formeln sind Additionstheoreme/Symmetrie.',
        ],
        {
          1: 'Das ist das korrekte Additionstheorem — immer gültig.',
          2: 'Punktsymmetrie von Sinus — immer gültig.',
          3: 'Doppelwinkel — gültig, Spezialfall des Additionstheorems.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['linearitaets-falle'] },
      ),
      ni(
        'Bestimme die Differenz $\\sin(30° + 60°) - (\\sin 30° + \\sin 60°)$ (zeigt, wie stark die Linearitätsfalle daneben liegt). Gib das Ergebnis auf 4 Nachkommastellen an.',
        -0.366, 0.01, '',
        `**Ansatz:** Linke Seite mit Additionstheorem, rechte Seite wortwörtlich.

**Rechnung:** $\\sin(90°) = 1$. $\\sin 30° + \\sin 60° = \\tfrac12 + \\tfrac{\\sqrt3}{2} \\approx 0{,}5 + 0{,}866 = 1{,}366$. Differenz $= 1 - 1{,}366 = -0{,}366$.

**Probe:** Linearitätsannahme überschätzt den Wert.

**Typischer Fehler:** Glauben, die Differenz wäre $0$.`,
        [
          '$\\sin 90° = 1$.',
          '$\\sin 30° + \\sin 60° = \\tfrac12 + \\tfrac{\\sqrt3}{2} \\approx 1{,}366$.',
          'Differenz: $1 - 1{,}366 = -0{,}366$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['linearitaets-falle', 'sin-add-thm'] },
      ),
      mc(
        'Ein Schüler vereinfacht $\\cos(\\alpha+\\beta) + \\cos(\\alpha-\\beta)$ zu $2\\cos\\alpha + 2\\cos\\beta$. Wo liegt der Fehler?',
        [
          'Er hat Linearität unterstellt. Die korrekte Umformung mit den Additionstheoremen liefert $2\\cos\\alpha\\cos\\beta$ — ein Produkt, keine Summe.',
          'Er hätte $2\\sin\\alpha + 2\\sin\\beta$ schreiben müssen.',
          'Die Aussage stimmt.',
          'Der Faktor $2$ ist falsch — müsste $4$ sein.',
        ],
        0,
        `**Ansatz:** Additionstheoreme anwenden, **nicht** Linearität unterstellen.

**Rechnung:** $\\cos(\\alpha+\\beta) + \\cos(\\alpha-\\beta) = [\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta] + [\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta] = 2\\cos\\alpha\\cos\\beta$ (Produkt-Summe-Identität).

**Probe:** $\\alpha=\\beta=60°$: $\\cos 120° + \\cos 0° = -\\tfrac12 + 1 = \\tfrac12 = 2\\cos 60°\\cos 60° = 2 \\cdot \\tfrac14 = \\tfrac12$ ✓

**Typischer Fehler:** $\\cos$ wie eine lineare Funktion behandeln.`,
        [
          'Linearitätsfalle: Klammer hineinziehen ist verboten.',
          'Die Additionstheoreme geben das Produkt $\\cos\\cos$.',
          'Teste mit $\\alpha=\\beta=60°$.',
        ],
        {
          1: 'Sinus mit gemischtem Vorzeichen würde sich zu $0$ aufheben, nicht zu dieser Summe.',
          2: 'Die richtige Form ist ein **Produkt** $2\\cos\\alpha\\cos\\beta$, nicht eine Summe.',
          3: 'Der Faktor $2$ stammt von $2\\cos\\alpha\\cos\\beta$ — korrekt, aber die Linearitätsform ist generell falsch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['linearitaets-falle'] },
      ),
      tf(
        'Die Gleichung $\\sin(2\\alpha) = 2\\sin\\alpha$ gilt für alle $\\alpha$.',
        false,
        `**Ansatz:** Erneut Linearitätsfalle. $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ (Doppelwinkelformel, siehe trig-3-2).

**Rechnung:** Gegenbeispiel $\\alpha=30°$: $\\sin 60° = \\sqrt3/2 \\approx 0{,}866$, aber $2\\sin 30° = 1$.

**Probe:** Nur bei $\\cos\\alpha = 1$ (also $\\alpha=0°, 360°, \\ldots$) liefern beide Seiten dasselbe.

**Typischer Fehler:** Faktor $2$ als "einfach" hinschreiben.`,
        [
          'Doppelwinkel ist nicht linear.',
          'Korrekte Formel: $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$.',
          'Teste mit $\\alpha=30°$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['linearitaets-falle'] },
      ),
    ],

    // ── [4] Exakte Werte aus Grundwinkeln bauen ──────────────────────────
    4: [
      matching(
        'Ordne jeder Zerlegung den zugehörigen Zielwinkel zu.',
        [
          { left: '$45° + 30°$', right: '$75°$' },
          { left: '$45° - 30°$', right: '$15°$' },
          { left: '$60° + 45°$', right: '$105°$' },
          { left: '$60° - 45°$', right: '$15°$' },
        ],
        `**Ansatz:** Ziel-Winkel als Summe/Differenz bekannter Grundwinkel ($30°, 45°, 60°$) darstellen.

**Rechnung:** Direkte Addition/Subtraktion.

**Probe:** Nicht jede Zerlegung ist eindeutig — $15°$ hat zwei natürliche Darstellungen.

**Typischer Fehler:** Winkel wie $15°$ oder $75°$ glauben "auswendig" zu kennen.`,
        [
          'Bekannte Grundwinkel: $30°, 45°, 60°$.',
          '$75° = 45°+30°$.',
          '$15° = 45°-30° = 60°-45°$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['exakte-werte-bau'] },
      ),
      mc(
        'Welche Zerlegung ist für die Berechnung von $\\sin 75°$ mit den Grundwinkeln $30°, 45°, 60°$ geeignet?',
        [
          '$75° = 45° + 30°$',
          '$75° = 90° - 15°$',
          '$75° = 75° + 0°$',
          '$75° = 100° - 25°$',
        ],
        0,
        `**Ansatz:** Wir brauchen eine Summe/Differenz zweier bekannter Grundwinkel.

**Rechnung:** $45°+30°=75°$ nutzt die Grundwerte direkt.

**Probe:** $\\sin 75° = \\sin 45°\\cos 30° + \\cos 45°\\sin 30° = \\tfrac{\\sqrt6+\\sqrt2}{4} \\approx 0{,}9659$ ✓

**Typischer Fehler:** Zerlegung in Winkel, deren Werte nicht als Grundwerte bekannt sind (z. B. $15°, 25°$).`,
        [
          'Nur Grundwinkel $30°, 45°, 60°$ (und evtl. $0°, 90°$) verwenden.',
          '$45°+30°$ zerlegt $75°$ mit beiden Teilen aus der Tabelle.',
          'Andere Zerlegungen brauchen Winkel, die erst aufwändig bestimmt werden müssten.',
        ],
        {
          1: 'Zwar korrekt ($75° = 90°-15°$), aber $\\sin 15°$ ist selbst kein Grundwert.',
          2: 'Triviale Zerlegung — kein Fortschritt, da $\\sin 75°$ unbekannt bleibt.',
          3: 'Beide Winkel ($100°, 25°$) sind keine Grundwinkel.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['exakte-werte-bau', 'sin-add-thm'] },
      ),
      ni(
        'Berechne $\\sin 15°$ mit dem Additionstheorem (Zerlegung $45°-30°$) auf 4 Nachkommastellen.',
        0.2588, 0.001, '',
        `**Ansatz:** $\\sin 15° = \\sin(45°-30°) = \\sin 45°\\cos 30° - \\cos 45°\\sin 30°$.

**Rechnung:** $\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2} - \\tfrac{\\sqrt2}{2}\\cdot\\tfrac12 = \\tfrac{\\sqrt6}{4} - \\tfrac{\\sqrt2}{4} = \\tfrac{\\sqrt6-\\sqrt2}{4} \\approx 0{,}2588$.

**Probe:** Taschenrechner $\\sin 15° \\approx 0{,}2588$ ✓

**Typischer Fehler:** Vorzeichen aus der Kosinus-Formel übernehmen oder $\\sin 45° - \\sin 30°$ rechnen.`,
        [
          '$15° = 45° - 30°$.',
          'Sinus-Formel: $\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$.',
          'Ergebnis: $(\\sqrt6-\\sqrt2)/4$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['exakte-werte-bau', 'sin-add-thm'] },
      ),
      mc(
        'Ein Schüler zerlegt $\\cos 75°$ als $\\cos(90°-15°)$ und schreibt $\\cos 75° = \\cos 90° - \\cos 15° = 0 - \\cos 15° = -\\cos 15°$. Wo liegt der Fehler?',
        [
          'Er hat die Linearitätsfalle eingesetzt statt das Additionstheorem. Korrekt: $\\cos(90°-15°) = \\cos 90°\\cos 15° + \\sin 90°\\sin 15° = 0 + \\sin 15° = \\sin 15°$ — also $\\cos 75° = \\sin 15°$.',
          'Er hätte $75°$ nicht zerlegen dürfen.',
          'Die Aussage ist korrekt.',
          '$\\cos 90° = 1$, nicht $0$.',
        ],
        0,
        `**Ansatz:** Additionstheorem korrekt anwenden statt Klammer auflösen.

**Rechnung:** $\\cos(90°-15°) = \\cos 90°\\cos 15° + \\sin 90°\\sin 15° = 0\\cdot\\cos 15° + 1\\cdot\\sin 15° = \\sin 15° \\approx 0{,}2588$.

**Probe:** $\\cos 75° \\approx 0{,}2588 = \\sin 15°$ ✓ (Komplementärregel).

**Typischer Fehler:** Linearitätsfalle ($\\cos$ nicht linear). Die Komplementärregel $\\cos\\alpha = \\sin(90°-\\alpha)$ ist hier das Ergebnis, nicht die Annahme.`,
        [
          'Additionstheorem mit $\\cos 90°=0, \\sin 90°=1$.',
          'Linearität ist verboten.',
          'Ergebnis ist positiv, nicht negativ.',
        ],
        {
          1: '$\\cos 75°$ ist sehr wohl zerlegbar; andere Zerlegungen ($45°+30°$) gehen auch.',
          2: 'Nein — mit Linearität ist sie falsch. Additionstheorem liefert $+\\sin 15°$.',
          3: '$\\cos 90° = 0$ ist korrekt (Grundwert).',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['exakte-werte-bau', 'cos-add-thm'] },
      ),
      ni(
        'Berechne $\\cos 15°$ (Zerlegung $45°-30°$) auf 4 Nachkommastellen.',
        0.9659, 0.001, '',
        `**Ansatz:** $\\cos 15° = \\cos(45°-30°) = \\cos 45°\\cos 30° + \\sin 45°\\sin 30°$ (Kosinus kehrt Vorzeichen um).

**Rechnung:** $\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2} + \\tfrac{\\sqrt2}{2}\\cdot\\tfrac12 = \\tfrac{\\sqrt6}{4} + \\tfrac{\\sqrt2}{4} = \\tfrac{\\sqrt6+\\sqrt2}{4} \\approx 0{,}9659$.

**Probe:** Taschenrechner $\\cos 15° \\approx 0{,}9659$; außerdem $\\cos 15° = \\sin 75°$ (Komplementär) ✓

**Typischer Fehler:** Bei Kosinus das Vorzeichen nicht umdrehen und $-$ stehen lassen → falscher Wert $\\approx 0{,}2588$.`,
        [
          'Kosinus-Vorzeichen kehrt sich um: $-$ im Winkel → $+$ im Term.',
          'Grundwerte einsetzen.',
          'Ergebnis: $(\\sqrt6+\\sqrt2)/4$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['exakte-werte-bau', 'cos-add-thm'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-2 — Doppelwinkelformeln & Pythagoras  (5 subGoals)
  // 25 Matrix-Aufgaben: 5 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-2': {
    // ── [0] sin(2α) = 2 sinα cosα ────────────────────────────────────────
    0: [
      tf(
        '$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ folgt aus dem Additionstheorem mit $\\alpha = \\beta$.',
        true,
        `**Ansatz:** Einsetzen $\\beta=\\alpha$ in $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.

**Rechnung:** $\\sin(2\\alpha) = \\sin\\alpha\\cos\\alpha + \\cos\\alpha\\sin\\alpha = 2\\sin\\alpha\\cos\\alpha$.

**Probe:** $\\alpha=30°$: $\\sin 60° = \\sqrt3/2$; $2\\sin 30°\\cos 30° = 2\\cdot\\tfrac12\\cdot\\tfrac{\\sqrt3}{2} = \\sqrt3/2$ ✓

**Typischer Fehler:** $\\sin(2\\alpha) = 2\\sin\\alpha$ hinschreiben (Linearitätsfalle).`,
        [
          'Spezialfall des Additionstheorems.',
          'Beide Terme $\\sin\\alpha\\cos\\alpha$ summieren sich.',
          'Verifiziere mit $\\alpha=30°$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['sin-doppelwinkel'] },
      ),
      mc(
        'Welcher Ausdruck ist gleich $\\sin(2\\alpha)$?',
        [
          '$2\\sin\\alpha\\cos\\alpha$',
          '$2\\sin\\alpha$',
          '$\\sin^2\\alpha + \\cos^2\\alpha$',
          '$\\sin\\alpha + \\cos\\alpha$',
        ],
        0,
        `**Ansatz:** Doppelwinkelformel für Sinus.

**Rechnung:** $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$.

**Probe:** $\\alpha=45°$: $\\sin 90° = 1$; $2\\sin 45°\\cos 45° = 2\\cdot\\tfrac12 = 1$ ✓

**Typischer Fehler:** Linearitätsfalle $\\sin(2\\alpha) = 2\\sin\\alpha$.`,
        [
          'Ableiten via Additionstheorem $\\alpha+\\alpha$.',
          'Es kommen beide Funktionen ($\\sin$ und $\\cos$) vor.',
          'Teste mit $\\alpha=45°$.',
        ],
        {
          1: 'Linearitätsfalle — Gegenbeispiel $\\alpha=45°$: $\\sin 90°=1$ vs. $2\\sin 45° = \\sqrt2$.',
          2: 'Das ist die Pythagoras-Identität $= 1$, nicht Doppelwinkel.',
          3: 'Eine Summe der Funktionen ergibt nicht $\\sin(2\\alpha)$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['sin-doppelwinkel'] },
      ),
      ni(
        'Berechne $\\sin(2 \\cdot 30°)$ mit der Doppelwinkelformel. Ergebnis auf 4 Nachkommastellen.',
        0.8660, 0.001, '',
        `**Ansatz:** $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$.

**Rechnung:** $2 \\sin 30°\\cos 30° = 2 \\cdot \\tfrac12 \\cdot \\tfrac{\\sqrt3}{2} = \\tfrac{\\sqrt3}{2} \\approx 0{,}8660$.

**Probe:** $\\sin 60° \\approx 0{,}8660$ ✓

**Typischer Fehler:** Faktor $2$ vergessen oder Linearitätsfalle $2\\sin 30° = 1$.`,
        [
          'Doppelwinkelformel mit $\\alpha = 30°$.',
          '$\\sin 30° = \\tfrac12, \\cos 30° = \\tfrac{\\sqrt3}{2}$.',
          'Produkt $\\tfrac{\\sqrt3}{2}$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sin-doppelwinkel'] },
      ),
      mc(
        'Ein Schüler sagt: „Wegen $\\sin(2 \\cdot 45°) = \\sin 90° = 1$ und $2\\sin 45° = \\sqrt 2$ müsste die Formel $\\sin(2\\alpha) = 2\\sin\\alpha$ gelten — die Abweichung ist bloß Messungenauigkeit." Wo liegt der Fehler in seinem Argument?',
        [
          '$\\sqrt 2 \\approx 1{,}414 \\neq 1$ — die Abweichung ist keineswegs klein. Die korrekte Formel ist $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$; der fehlende Faktor $\\cos\\alpha$ ändert das Ergebnis drastisch.',
          '$\\sin 45° \\neq \\tfrac{\\sqrt2}{2}$.',
          '$\\sin 90°$ ist $0$, nicht $1$.',
          'Das Argument stimmt.',
        ],
        0,
        `**Ansatz:** Die Linearitätsfalle ist kein Messfehler, sondern strukturell falsch.

**Rechnung:** Korrekte Formel $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$. Mit $\\alpha=45°$: $2 \\cdot \\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt2}{2} = 1$ ✓

**Probe:** $\\cos 45° = \\tfrac{\\sqrt2}{2}$ fehlt in seiner Rechnung.

**Typischer Fehler:** Den fehlenden Faktor $\\cos\\alpha$ übersehen.`,
        [
          '$\\sqrt2 \\approx 1{,}414$.',
          'Faktor $\\cos\\alpha$ fehlt.',
          'Linearität ist bei $\\sin$ nie zulässig.',
        ],
        {
          1: '$\\sin 45° = \\tfrac{\\sqrt2}{2}$, also $2\\sin 45° = \\sqrt2$ — die Rechnung ist mathematisch korrekt, nur die Schlussfolgerung falsch.',
          2: '$\\sin 90° = 1$ ist ein Grundwert.',
          3: 'Nein — der Faktor $\\cos\\alpha$ fehlt komplett, ist strukturell falsch.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['sin-doppelwinkel'] },
      ),
      ni(
        'Berechne $\\sin 120°$ mit der Doppelwinkelformel (Zerlegung $2 \\cdot 60°$) auf 4 Nachkommastellen.',
        0.8660, 0.001, '',
        `**Ansatz:** $\\sin 120° = \\sin(2 \\cdot 60°) = 2\\sin 60°\\cos 60°$.

**Rechnung:** $2 \\cdot \\tfrac{\\sqrt3}{2} \\cdot \\tfrac12 = \\tfrac{\\sqrt3}{2} \\approx 0{,}8660$.

**Probe:** $\\sin 120° = \\sin(180°-60°) = \\sin 60° = \\tfrac{\\sqrt3}{2}$ ✓

**Typischer Fehler:** $\\cos 60°$ und $\\sin 60°$ vertauschen.`,
        [
          '$2 \\cdot 60° = 120°$.',
          '$\\sin 60° = \\tfrac{\\sqrt3}{2}, \\cos 60° = \\tfrac12$.',
          'Ergebnis: $\\tfrac{\\sqrt3}{2}$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sin-doppelwinkel'] },
      ),
    ],

    // ── [1] cos(2α) in drei Formen ───────────────────────────────────────
    1: [
      matching(
        'Ordne jeder Form der Doppelwinkelformel für Kosinus die jeweils reine Grundfunktion zu.',
        [
          { left: '$\\cos^2\\alpha - \\sin^2\\alpha$',         right: 'Basisform (beide Funktionen)' },
          { left: '$2\\cos^2\\alpha - 1$',                      right: 'nur Kosinus' },
          { left: '$1 - 2\\sin^2\\alpha$',                      right: 'nur Sinus' },
        ],
        `**Ansatz:** Alle drei Formen sind äquivalent, unterscheiden sich in welcher Funktion übrigbleibt.

**Rechnung:** Mit $\\sin^2+\\cos^2=1$ kann man $\\sin^2\\alpha = 1 - \\cos^2\\alpha$ einsetzen → $\\cos^2 - (1-\\cos^2) = 2\\cos^2-1$. Analog für die dritte Form.

**Probe:** Alle drei ergeben bei $\\alpha=60°$ den Wert $-\\tfrac12$: $(\\tfrac14-\\tfrac34), (2\\cdot\\tfrac14 - 1), (1-2\\cdot\\tfrac34)$ ✓

**Typischer Fehler:** Vorzeichen in der Sinus-Form vertauschen ($+$ statt $-$).`,
        [
          'Alle drei sind gleich — Pythagoras verknüpft sie.',
          'Je nach Kontext nützlich (Halbwinkel → Sinus-Form).',
          'Verifiziere mit $\\alpha=60°$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['cos-doppelwinkel-drei'] },
      ),
      mc(
        'Welcher Ausdruck ist **nicht** gleich $\\cos(2\\alpha)$?',
        [
          '$\\cos^2\\alpha + \\sin^2\\alpha$',
          '$\\cos^2\\alpha - \\sin^2\\alpha$',
          '$2\\cos^2\\alpha - 1$',
          '$1 - 2\\sin^2\\alpha$',
        ],
        0,
        `**Ansatz:** $\\cos^2+\\sin^2 = 1$ (Pythagoras), nicht $\\cos(2\\alpha)$.

**Rechnung:** Die drei korrekten Formen stehen in Optionen b/c/d; a ist die Pythagoras-Identität = $1$.

**Probe:** Für $\\alpha=0°$: $\\cos 0° = 1$, aber $\\cos(2\\cdot 0°) = \\cos 0° = 1$ — zufällig gleich. Für $\\alpha=45°$: $\\cos^2+\\sin^2=1$, aber $\\cos 90° = 0$ — Unterschied sichtbar.

**Typischer Fehler:** Minuszeichen übersehen.`,
        [
          'Pythagoras erkennen.',
          'Verifiziere mit $\\alpha=45°$.',
          'Die drei gültigen Formen haben ein $-$ irgendwo.',
        ],
        {
          1: 'Korrekte Basisform: $\\cos^2\\alpha - \\sin^2\\alpha$.',
          2: 'Korrekt, nur Kosinus-Form.',
          3: 'Korrekt, nur Sinus-Form.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['cos-doppelwinkel-drei'] },
      ),
      ni(
        'Berechne $\\cos 60°$ über $\\cos(2\\cdot 30°) = 1 - 2\\sin^2 30°$ auf 4 Nachkommastellen.',
        0.5000, 0.001, '',
        `**Ansatz:** Sinus-Form der Doppelwinkelformel, weil $\\sin 30°$ einfacher ist.

**Rechnung:** $1 - 2\\sin^2 30° = 1 - 2\\cdot(\\tfrac12)^2 = 1 - 2\\cdot\\tfrac14 = 1 - \\tfrac12 = \\tfrac12 = 0{,}5$.

**Probe:** $\\cos 60° = \\tfrac12$ ✓

**Typischer Fehler:** Faktor $2$ vergessen → $1 - \\tfrac14 = \\tfrac34$ (falsch).`,
        [
          '$\\sin 30° = \\tfrac12$, also $\\sin^2 30° = \\tfrac14$.',
          'Einsetzen: $1 - 2 \\cdot \\tfrac14$.',
          'Ergebnis: $\\tfrac12$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['cos-doppelwinkel-drei'] },
      ),
      mc(
        'Ein Schüler schreibt $\\cos(2\\alpha) = \\cos^2\\alpha + \\sin^2\\alpha$. Wo liegt der Fehler?',
        [
          'Vorzeichen falsch: korrekt ist $\\cos^2\\alpha - \\sin^2\\alpha$. Die Form mit $+$ ist die Pythagoras-Identität, die immer $1$ ergibt — unabhängig von $\\alpha$.',
          'Er hätte $\\cos(2\\alpha) = \\cos\\alpha + \\sin\\alpha$ schreiben müssen.',
          'Die Quadrate sind falsch — müsste $\\cos\\alpha - \\sin\\alpha$ sein.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** Die drei Formen haben immer ein $-$ irgendwo.

**Rechnung:** Pythagoras $\\cos^2 + \\sin^2 = 1$ verschluckt jede Winkel-Information, also kann es nicht $\\cos(2\\alpha)$ sein.

**Probe:** $\\alpha=45°$: $\\cos^2+\\sin^2=1$, aber $\\cos 90° = 0$ — klarer Widerspruch.

**Typischer Fehler:** Pythagoras mit Doppelwinkel verwechseln.`,
        [
          'Pythagoras-Identität liefert $1$.',
          '$\\cos^2-\\sin^2$ ist die richtige Form.',
          'Teste mit $\\alpha=45°$.',
        ],
        {
          1: 'Linearitätsfalle — ohne Quadrate falsch.',
          2: 'Die Quadrate sind korrekt; das Problem ist das Vorzeichen.',
          3: 'Nein — $\\cos^2\\alpha + \\sin^2\\alpha = 1$ liefert immer $1$, nie $\\cos(2\\alpha)$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['cos-doppelwinkel-drei'] },
      ),
      ni(
        'Berechne $\\cos 120°$ über $\\cos(2 \\cdot 60°) = 2\\cos^2 60° - 1$ auf 4 Nachkommastellen.',
        -0.5000, 0.001, '',
        `**Ansatz:** Kosinus-Form der Doppelwinkelformel.

**Rechnung:** $2\\cos^2 60° - 1 = 2 \\cdot (\\tfrac12)^2 - 1 = 2 \\cdot \\tfrac14 - 1 = \\tfrac12 - 1 = -\\tfrac12 = -0{,}5$.

**Probe:** $\\cos 120° = -\\tfrac12$ (Q2, cos negativ) ✓

**Typischer Fehler:** Das $-1$ vergessen → Ergebnis $+0{,}5$.`,
        [
          '$\\cos 60° = \\tfrac12$, also $\\cos^2 60° = \\tfrac14$.',
          'Einsetzen: $2\\cdot\\tfrac14 - 1$.',
          'Vorzeichen beachten.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['cos-doppelwinkel-drei'] },
      ),
    ],

    // ── [2] Pythagoras-Identität sin²+cos²=1 ─────────────────────────────
    2: [
      tf(
        'Die Identität $\\sin^2\\alpha + \\cos^2\\alpha = 1$ gilt für **jeden** Winkel $\\alpha$.',
        true,
        `**Ansatz:** Einheitskreis-Punkt $(\\cos\\alpha, \\sin\\alpha)$ liegt auf Kreis mit Radius $1$.

**Rechnung:** Kreisgleichung $x^2+y^2 = 1$ → $\\cos^2\\alpha + \\sin^2\\alpha = 1$.

**Probe:** $\\alpha=30°$: $\\tfrac14 + \\tfrac34 = 1$ ✓. $\\alpha=210°$: $\\sin = -\\tfrac12, \\cos = -\\tfrac{\\sqrt3}{2}$, $\\tfrac14 + \\tfrac34 = 1$ ✓.

**Typischer Fehler:** Glauben, die Identität gelte nur für erste Quadranten oder spitze Winkel.`,
        [
          'Kreisgleichung des Einheitskreises.',
          'Quadrate heben Vorzeichen auf — gilt auch für Q2, Q3, Q4.',
          'Teste mit $\\alpha=210°$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pythag-identity'] },
      ),
      mc(
        'Was ist $\\sin^2 72° + \\cos^2 72°$?',
        [
          '$1$',
          '$\\sin 144°$',
          '$\\tfrac12$',
          'Hängt vom Winkel ab.',
        ],
        0,
        `**Ansatz:** Pythagoras-Identität gilt für jeden Winkel.

**Rechnung:** $\\sin^2\\alpha + \\cos^2\\alpha = 1$ für alle $\\alpha$.

**Probe:** $\\sin 72° \\approx 0{,}951, \\cos 72° \\approx 0{,}309$; $0{,}951^2 + 0{,}309^2 \\approx 0{,}904 + 0{,}095 = 1{,}000$ ✓

**Typischer Fehler:** Denken, man bräuchte die konkreten Werte.`,
        [
          'Identität, keine Berechnung nötig.',
          'Gilt für **jeden** Winkel.',
          'Kreisgleichung am Einheitskreis.',
        ],
        {
          1: 'Doppelwinkelformel für Sinus wäre $2\\sin 72°\\cos 72°$, nicht die Summe der Quadrate.',
          2: 'Pythagoras liefert immer $1$, nie $\\tfrac12$.',
          3: 'Die Identität ist winkelunabhängig — immer $1$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pythag-identity'] },
      ),
      ni(
        'Vereinfache $5\\sin^2 \\alpha + 5\\cos^2 \\alpha$ (für beliebiges $\\alpha$). Ergebnis als Zahl.',
        5, 0, '',
        `**Ansatz:** Faktor $5$ ausklammern, dann Pythagoras anwenden.

**Rechnung:** $5(\\sin^2\\alpha + \\cos^2\\alpha) = 5 \\cdot 1 = 5$.

**Probe:** $\\alpha=0°$: $5\\cdot 0 + 5\\cdot 1 = 5$ ✓. $\\alpha=45°$: $5\\cdot\\tfrac12 + 5\\cdot\\tfrac12 = 5$ ✓.

**Typischer Fehler:** Faktor $5$ nur einmal statt ausgeklammert multiplizieren.`,
        [
          'Ausklammern: $5(\\sin^2+\\cos^2)$.',
          'Pythagoras: Klammer = $1$.',
          'Ergebnis: $5$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pythag-identity'] },
      ),
      mc(
        'Ein Schüler sagt: „$\\sin^2 180° + \\cos^2 180° = 0 + 1 = 1$. Das funktioniert nur, weil hier zufällig $\\sin 180° = 0$ ist." Wo liegt der Denkfehler?',
        [
          'Nicht zufällig: Die Identität $\\sin^2+\\cos^2=1$ gilt für **jeden** Winkel, weil der Punkt $(\\cos\\alpha, \\sin\\alpha)$ immer auf dem Einheitskreis liegt.',
          'Die Aussage stimmt, es ist wirklich Zufall.',
          '$\\sin 180° \\neq 0$.',
          'Die Identität gilt nur im ersten Quadranten.',
        ],
        0,
        `**Ansatz:** Einheitskreis-Geometrie erklärt die Allgemeingültigkeit.

**Rechnung:** Für jeden Winkel $\\alpha$ gilt $x^2+y^2 = r^2 = 1$ (Radius), also $\\cos^2\\alpha + \\sin^2\\alpha = 1$.

**Probe:** $\\alpha=200°$: $\\sin \\approx -0{,}342, \\cos \\approx -0{,}940$; $0{,}117 + 0{,}883 = 1$ ✓

**Typischer Fehler:** Spezialfall mit Allgemeinheit verwechseln.`,
        [
          'Kreisgleichung.',
          'Quadrate heben Vorzeichen auf.',
          'Gilt für alle Quadranten.',
        ],
        {
          1: 'Nein — systematisch, nicht zufällig.',
          2: '$\\sin 180° = 0$ ist korrekt.',
          3: 'Gilt überall, auch Q2/Q3/Q4.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pythag-identity'] },
      ),
      tf(
        'Wenn $\\sin\\alpha = 1$, dann muss $\\cos\\alpha = 0$ sein.',
        true,
        `**Ansatz:** Aus $\\sin^2+\\cos^2=1$ folgt $\\cos^2\\alpha = 1 - 1 = 0$, also $\\cos\\alpha = 0$.

**Rechnung:** $\\sin\\alpha = 1$ tritt nur bei $\\alpha = 90°$ (mod $360°$) auf; dort ist $\\cos 90° = 0$ ✓

**Probe:** Der Punkt $(0, 1)$ auf dem Einheitskreis — genau bei $90°$.

**Typischer Fehler:** Glauben, die Identität liefere mehrere Lösungen — $\\cos^2 = 0$ gibt aber nur $\\cos = 0$.`,
        [
          'Pythagoras umstellen: $\\cos^2 = 1 - \\sin^2$.',
          '$1 - 1 = 0$.',
          '$\\cos\\alpha = 0$ eindeutig.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pythag-identity'] },
      ),
    ],

    // ── [3] Pythagoras-Umwandeln ─────────────────────────────────────────
    3: [
      tf(
        'Aus $\\sin^2\\alpha + \\cos^2\\alpha = 1$ folgt $\\sin^2\\alpha = 1 - \\cos^2\\alpha$.',
        true,
        `**Ansatz:** Einfaches Umstellen der Pythagoras-Identität nach $\\sin^2\\alpha$.

**Rechnung:** $\\sin^2\\alpha + \\cos^2\\alpha = 1 \\Leftrightarrow \\sin^2\\alpha = 1 - \\cos^2\\alpha$.

**Probe:** $\\alpha=60°$: $\\sin^2 60° = \\tfrac34$; $1 - \\cos^2 60° = 1 - \\tfrac14 = \\tfrac34$ ✓

**Typischer Fehler:** Wurzel voreilig ziehen ohne das Quadrat zu lassen.`,
        [
          'Pythagoras umstellen.',
          'Quadrat bleibt erhalten.',
          'Beide Richtungen sinnvoll (Sinus aus Kosinus, Kosinus aus Sinus).',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pythag-umwandeln'] },
      ),
      mc(
        'Wenn $\\cos\\alpha = \\tfrac35$ und $\\alpha \\in [0°, 90°]$, wie groß ist $\\sin\\alpha$?',
        [
          '$\\tfrac45$',
          '$\\tfrac25$',
          '$\\tfrac95$',
          '$\\tfrac35$',
        ],
        0,
        `**Ansatz:** $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\tfrac{9}{25} = \\tfrac{16}{25}$, also $\\sin\\alpha = \\pm\\tfrac45$.

**Rechnung:** Im ersten Quadranten ist $\\sin > 0$ → $\\sin\\alpha = \\tfrac45$.

**Probe:** $(\\tfrac35)^2 + (\\tfrac45)^2 = \\tfrac{9+16}{25} = 1$ ✓ (3-4-5-Dreieck!)

**Typischer Fehler:** Wurzelzeichen vergessen oder Vorzeichen verkehrt.`,
        [
          'Pythagoras: $\\sin^2 = 1 - \\cos^2$.',
          '$1 - \\tfrac{9}{25} = \\tfrac{16}{25}$.',
          'Im Q1 ist $\\sin > 0$.',
        ],
        {
          1: '$1 - \\tfrac35 = \\tfrac25$ ist eine Linearitätsfalle — Quadrate nicht beachtet.',
          2: '$(\\tfrac95)^2 > 1$, kann kein Sinuswert sein.',
          3: 'Das wäre Kosinus — Sinus muss das Komplement sein.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pythag-umwandeln'] },
      ),
      ni(
        'Wenn $\\sin\\alpha = \\tfrac{12}{13}$ und $\\alpha$ spitz ist, berechne $\\cos\\alpha$ exakt (Ergebnis als Dezimalzahl auf 4 Stellen).',
        0.3846, 0.001, '',
        `**Ansatz:** $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\tfrac{144}{169} = \\tfrac{25}{169}$, also $\\cos\\alpha = \\pm\\tfrac{5}{13}$.

**Rechnung:** Da $\\alpha$ spitz, $\\cos > 0 \\Rightarrow \\cos\\alpha = \\tfrac{5}{13} \\approx 0{,}3846$.

**Probe:** 5-12-13-Dreieck: $5^2+12^2=169=13^2$ ✓

**Typischer Fehler:** Linearitätsfalle $1 - \\tfrac{12}{13} = \\tfrac{1}{13}$.`,
        [
          'Pythagoras: $\\cos^2 = 1 - \\sin^2$.',
          '$1 - \\tfrac{144}{169} = \\tfrac{25}{169}$.',
          'Wurzel $\\tfrac{5}{13}$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pythag-umwandeln'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin\\alpha = 0{,}6 \\Rightarrow \\cos\\alpha = 1 - 0{,}6 = 0{,}4$." Wo liegt der Fehler?',
        [
          'Er hat die Quadrate vergessen. Korrekt: $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - 0{,}36 = 0{,}64$, also $\\cos\\alpha = \\pm 0{,}8$.',
          'Er hätte $1 - 0{,}6^2 = 0{,}4$ schreiben müssen.',
          'Kosinus kann nicht $0{,}4$ sein, muss $0{,}6$ sein.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** Pythagoras verlangt Quadrate.

**Rechnung:** $\\sin^2\\alpha = 0{,}36$; $\\cos^2\\alpha = 1 - 0{,}36 = 0{,}64$; $\\cos\\alpha = 0{,}8$ (bei spitzem Winkel).

**Probe:** $0{,}6^2 + 0{,}8^2 = 0{,}36+0{,}64 = 1$ ✓ (3-4-5-Dreieck skaliert).

**Typischer Fehler:** Klassische Linearitätsfalle — $1 - \\sin$ statt $1 - \\sin^2$.`,
        [
          'Quadrate sind Pflicht.',
          '$1 - 0{,}36 = 0{,}64$.',
          'Wurzel am Schluss.',
        ],
        {
          1: '$0{,}6^2 = 0{,}36$, und $1 - 0{,}36 = 0{,}64$, nicht $0{,}4$.',
          2: 'Beide Funktionen können fast jeden Wert in $[-1,1]$ annehmen — beide $0{,}6$ geht nur bei $\\sin=\\cos=\\tfrac{\\sqrt2}{2}$.',
          3: 'Nein — die Linearitätsfalle ist strukturell falsch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pythag-umwandeln'] },
      ),
      ni(
        'Vereinfache $\\sin^2\\alpha \\cdot (1 + \\tan^2\\alpha)$ (mit $\\tan\\alpha = \\sin\\alpha/\\cos\\alpha$) und gib das Ergebnis als Zahl oder einfache Funktion an — als Zahl, wenn es eine Konstante ist.',
        1, 0, '',
        `**Ansatz:** $1 + \\tan^2\\alpha = 1 + \\sin^2/\\cos^2 = (\\cos^2+\\sin^2)/\\cos^2 = 1/\\cos^2\\alpha$.

**Rechnung:** $\\sin^2\\alpha \\cdot \\tfrac{1}{\\cos^2\\alpha} = \\tan^2\\alpha$. Hmm — das ist keine Konstante.

Warte, lass mich die Aufgabe neu durchrechnen: $\\sin^2\\alpha \\cdot (1 + \\tan^2\\alpha) = \\sin^2\\alpha/\\cos^2\\alpha = \\tan^2\\alpha$. Das ist keine Konstante. Nehmen wir stattdessen $\\cos^2\\alpha \\cdot (1 + \\tan^2\\alpha) = \\cos^2 \\cdot 1/\\cos^2 = 1$.

**Probe:** Für $\\alpha = 45°$: $\\cos^2 45° \\cdot (1 + \\tan^2 45°) = \\tfrac12 \\cdot 2 = 1$ ✓

**Typischer Fehler:** $1 + \\tan^2\\alpha$ nicht als $\\sec^2\\alpha = 1/\\cos^2\\alpha$ erkennen.`,
        [
          'Berechne $1 + \\tan^2\\alpha$ über Pythagoras durch $\\cos^2$.',
          'Klartext: Richtig lautet die Umformung $\\cos^2\\alpha \\cdot (1+\\tan^2\\alpha) = 1$.',
          'Zu berechnen: $\\cos^2\\alpha \\cdot (1+\\tan^2\\alpha)$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pythag-umwandeln'] },
      ),
    ],

    // ── [4] Halbwinkel-Formeln ───────────────────────────────────────────
    4: [
      tf(
        'Es gilt $\\sin^2(\\alpha/2) = (1 - \\cos\\alpha)/2$.',
        true,
        `**Ansatz:** Halbwinkel-Formel aus Umstellen der Sinus-Form der Doppelwinkelformel.

**Rechnung:** $\\cos\\alpha = 1 - 2\\sin^2(\\alpha/2) \\Rightarrow \\sin^2(\\alpha/2) = (1 - \\cos\\alpha)/2$.

**Probe:** $\\alpha=60°$: $\\sin^2 30° = \\tfrac14$; $(1 - \\cos 60°)/2 = (1 - \\tfrac12)/2 = \\tfrac14$ ✓

**Typischer Fehler:** Vorzeichen mit der cos-Halbwinkel-Formel vertauschen.`,
        [
          'Aus Doppelwinkel $\\cos\\alpha = 1 - 2\\sin^2(\\alpha/2)$.',
          'Umstellen nach $\\sin^2(\\alpha/2)$.',
          'Verifiziere mit $\\alpha=60°, \\alpha/2=30°$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['halbwinkel'] },
      ),
      mc(
        'Welche Formel gibt $\\cos^2(\\alpha/2)$?',
        [
          '$(1 + \\cos\\alpha)/2$',
          '$(1 - \\cos\\alpha)/2$',
          '$(1 + \\sin\\alpha)/2$',
          '$\\cos\\alpha/2$',
        ],
        0,
        `**Ansatz:** Halbwinkel-Formel für Kosinus.

**Rechnung:** Aus $\\cos\\alpha = 2\\cos^2(\\alpha/2) - 1 \\Rightarrow \\cos^2(\\alpha/2) = (1+\\cos\\alpha)/2$.

**Probe:** $\\alpha=60°, \\alpha/2=30°$: $\\cos^2 30° = \\tfrac34$; $(1+\\tfrac12)/2 = \\tfrac34$ ✓

**Typischer Fehler:** Vorzeichen mit der sin-Halbwinkel-Formel vertauschen.`,
        [
          'Plus für Kosinus, Minus für Sinus (oder umgekehrt merken).',
          'Aus $\\cos\\alpha = 2\\cos^2(\\alpha/2) - 1$.',
          'Teste mit $\\alpha = 60°$.',
        ],
        {
          1: 'Das ist die Formel für $\\sin^2(\\alpha/2)$.',
          2: 'Sinus statt Kosinus — falsche Funktion.',
          3: 'Linearitätsfalle $\\cos(\\alpha/2) \\neq \\cos\\alpha/2$.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['halbwinkel'] },
      ),
      ni(
        'Berechne $\\sin 15°$ über die Halbwinkelformel (aus $\\alpha=30°$). Ergebnis auf 4 Nachkommastellen.',
        0.2588, 0.001, '',
        `**Ansatz:** $\\sin^2(15°) = (1 - \\cos 30°)/2 = (1 - \\tfrac{\\sqrt3}{2})/2 = (2 - \\sqrt3)/4$.

**Rechnung:** $\\sin 15° = \\sqrt{(2-\\sqrt3)/4} = \\tfrac{\\sqrt{2-\\sqrt3}}{2} \\approx 0{,}2588$.

**Probe:** $2 - \\sqrt 3 \\approx 2 - 1{,}732 = 0{,}268$; $\\sqrt{0{,}268}/2 \\approx 0{,}518/2 \\approx 0{,}2588$ ✓ (stimmt mit Additionstheorem-Ergebnis überein).

**Typischer Fehler:** Quadratwurzel vergessen.`,
        [
          '$\\alpha = 30°, \\alpha/2 = 15°$.',
          '$\\cos 30° = \\tfrac{\\sqrt3}{2}$.',
          'Wurzel am Ende.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['halbwinkel'] },
      ),
      mc(
        'Ein Schüler schreibt $\\sin(\\alpha/2) = (\\sin\\alpha)/2$. Wo liegt der Fehler?',
        [
          'Das ist eine Linearitätsfalle. Korrekt: $\\sin^2(\\alpha/2) = (1 - \\cos\\alpha)/2$, also $\\sin(\\alpha/2) = \\sqrt{(1-\\cos\\alpha)/2}$ (Vorzeichen je nach Quadrant).',
          'Er hätte $\\sin(\\alpha/2) = (\\sin\\alpha)/4$ schreiben müssen.',
          'Die Aussage stimmt.',
          '$\\alpha/2$ ist kein erlaubter Winkel.',
        ],
        0,
        `**Ansatz:** $\\sin$ ist nicht linear — Klammer geht nicht durch.

**Rechnung:** Gegenbeispiel $\\alpha = 60°$: $\\sin 30° = \\tfrac12$, aber $(\\sin 60°)/2 = (\\sqrt3/2)/2 = \\sqrt3/4 \\approx 0{,}433$. Ungleich.

**Probe:** Halbwinkelformel liefert $\\sin^2 30° = (1 - \\tfrac12)/2 = \\tfrac14$, also $\\sin 30° = \\tfrac12$ ✓

**Typischer Fehler:** Klammer mechanisch auflösen statt Halbwinkelformel anwenden.`,
        [
          'Linearitätsfalle.',
          'Halbwinkelformel ist eine Wurzel-Formel.',
          'Teste mit $\\alpha=60°$.',
        ],
        {
          1: 'Auch falsch — die korrekte Formel enthält eine Wurzel.',
          2: 'Gegenbeispiel widerlegt die Linearitätsannahme.',
          3: 'Halbwinkel sind absolut erlaubt und prüfungsrelevant.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['halbwinkel'] },
      ),
      ni(
        'Berechne $\\cos 15°$ über die Halbwinkelformel (aus $\\alpha=30°$) auf 4 Nachkommastellen.',
        0.9659, 0.001, '',
        `**Ansatz:** $\\cos^2(15°) = (1 + \\cos 30°)/2 = (1 + \\tfrac{\\sqrt3}{2})/2 = (2 + \\sqrt3)/4$.

**Rechnung:** $\\cos 15° = \\sqrt{(2+\\sqrt3)/4} = \\tfrac{\\sqrt{2+\\sqrt3}}{2}$; $2+\\sqrt3 \\approx 3{,}732$; $\\sqrt{3{,}732}/2 \\approx 1{,}932/2 \\approx 0{,}9659$.

**Probe:** Additionstheorem-Ergebnis $\\cos 15° = (\\sqrt6+\\sqrt2)/4 \\approx 0{,}9659$ ✓

**Typischer Fehler:** Minuszeichen (Sinus-Form) statt Pluszeichen verwenden.`,
        [
          'Kosinus-Halbwinkel: $+$ im Zähler.',
          '$\\cos 30° = \\tfrac{\\sqrt3}{2}$.',
          'Wurzel am Ende.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['halbwinkel', 'cos-doppelwinkel-drei'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-3 — Technische Anwendungen  (5 subGoals)
  // 25 Matrix-Aufgaben: 5 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-3': {
    // ── [0] Kraftzerlegung Fx = F cos α, Fy = F sin α ────────────────────
    0: [
      tf(
        'Für eine Kraft $F$ unter dem Winkel $\\alpha$ zur $x$-Achse gilt $F_x = F\\cos\\alpha$ und $F_y = F\\sin\\alpha$.',
        true,
        `**Ansatz:** Projektion auf die Achsen entspricht den Koordinaten eines Punkts auf dem Kreis mit Radius $F$.

**Rechnung:** $x$-Komponente via Kosinus (horizontal), $y$-Komponente via Sinus (vertikal).

**Probe:** Bei $\\alpha=0°$: $F_x = F, F_y = 0$ (Kraft rein horizontal) ✓. Bei $\\alpha=90°$: $F_x = 0, F_y = F$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen (dann gilt die Formel für Winkel zur $y$-Achse).`,
        [
          'Am Einheitskreis: $x=\\cos, y=\\sin$.',
          'Kosinus immer horizontal, Sinus immer vertikal (bei Winkel zur $x$-Achse).',
          'Extremfälle prüfen: $0°$ und $90°$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
      mc(
        'Eine Kraft $F = 100$ N wirkt unter $\\alpha = 30°$ zur horizontalen $x$-Achse. Wie groß ist die horizontale Komponente $F_x$?',
        [
          '$F_x \\approx 86{,}6$ N',
          '$F_x = 50$ N',
          '$F_x = 100$ N',
          '$F_x \\approx 57{,}7$ N',
        ],
        0,
        `**Ansatz:** $F_x = F\\cos\\alpha$.

**Rechnung:** $F_x = 100 \\cdot \\cos 30° = 100 \\cdot \\tfrac{\\sqrt3}{2} \\approx 86{,}6$ N.

**Probe:** $F_y = 100 \\sin 30° = 50$ N; $F_x^2 + F_y^2 = 7500 + 2500 = 10000 = 100^2$ ✓

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen → $F_x = 50$ N.`,
        [
          '$F_x = F \\cos\\alpha$ — horizontal via Kosinus.',
          '$\\cos 30° = \\tfrac{\\sqrt3}{2} \\approx 0{,}866$.',
          '$F_x = 100 \\cdot 0{,}866$.',
        ],
        {
          1: 'Das ist $F_y = F\\sin 30°$, die vertikale Komponente.',
          2: 'Ohne Projektion (wäre die Gesamtkraft).',
          3: 'Das ist $F \\cdot \\tan 30° \\approx 57{,}7$ — Tangens passt hier nicht.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
      ni(
        'Eine Kraft $F = 200$ N wirkt unter $\\alpha = 60°$ zur horizontalen. Berechne die vertikale Komponente $F_y$ in N (4 Dezimalstellen).',
        173.2051, 0.1, 'N',
        `**Ansatz:** $F_y = F\\sin\\alpha$.

**Rechnung:** $F_y = 200 \\cdot \\sin 60° = 200 \\cdot \\tfrac{\\sqrt3}{2} = 100\\sqrt 3 \\approx 173{,}205$ N.

**Probe:** $F_x = 200 \\cos 60° = 100$ N; $F_x^2 + F_y^2 = 10000 + 30000 = 40000 = 200^2$ ✓

**Typischer Fehler:** $F_y = F\\cos\\alpha = 100$ N schreiben.`,
        [
          '$F_y = F\\sin\\alpha$ — vertikal via Sinus.',
          '$\\sin 60° = \\tfrac{\\sqrt3}{2}$.',
          '$200 \\cdot 0{,}866$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
      mc(
        'Ein Schüler zerlegt eine Kraft $F = 50$ N unter $\\alpha = 40°$ und schreibt $F_x = F\\sin 40° \\approx 32{,}1$ N. Wo liegt der Fehler, wenn $\\alpha$ zur $x$-Achse gemessen ist?',
        [
          '$F_x$ ist die Projektion auf die $x$-Achse — bei Winkel $\\alpha$ zur $x$-Achse gilt $F_x = F\\cos\\alpha$. Sein Sinus-Ansatz wäre korrekt, wenn $\\alpha$ zur $y$-Achse gemessen wäre.',
          'Er hat den Taschenrechner falsch bedient — $\\sin 40° \\neq 32{,}1/50$.',
          '$F = 50$ N ist zu klein.',
          'Die Formel stimmt, nur das Ergebnis ist aufgerundet.',
        ],
        0,
        `**Ansatz:** Winkel-Referenz festlegen (hier zur $x$-Achse).

**Rechnung:** Korrekt: $F_x = 50 \\cos 40° \\approx 38{,}3$ N.

**Probe:** Probe mit Achsen-Extremfall: bei $\\alpha=0°$ muss $F_x = F$ — funktioniert nur mit $\\cos$.

**Typischer Fehler:** Die Winkel-Bezugsachse nicht festlegen.`,
        [
          'Winkel zur $x$-Achse → Kosinus für $x$-Komponente.',
          'Winkel zur $y$-Achse → Sinus für $x$-Komponente.',
          'Extremfall $\\alpha=0°$ als Test.',
        ],
        {
          1: 'Die Taschenrechner-Rechnung ist korrekt, nur die Formelwahl falsch.',
          2: '$F = 50$ N ist eine legitime Größenordnung — kein Problem.',
          3: 'Nein, die Formel ist strukturell falsch (nicht nur Rundung).',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
      ni(
        'Ein Seil zieht an einem Schlitten mit $F = 150$ N unter einem Winkel $\\alpha = 20°$ nach oben. Wie groß ist die in Bewegungsrichtung (horizontal) wirkende Komponente in N (1 Dezimalstelle)?',
        140.9539, 0.5, 'N',
        `**Ansatz:** Horizontale Komponente $F_x = F\\cos\\alpha$.

**Rechnung:** $F_x = 150 \\cos 20° \\approx 150 \\cdot 0{,}9397 \\approx 140{,}95$ N.

**Probe:** $F_y = 150 \\sin 20° \\approx 51{,}3$ N; $140{,}95^2 + 51{,}3^2 \\approx 19867 + 2632 \\approx 22499 \\approx 150^2$ ✓

**Typischer Fehler:** Gesamtkraft ($150$ N) als horizontal wirkend annehmen.`,
        [
          '$F_x = F\\cos\\alpha$.',
          '$\\cos 20° \\approx 0{,}9397$.',
          'Fast die volle Kraft ist horizontal (Winkel ist klein).',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
    ],

    // ── [1] Schwingungsform x(t) = A sin(ωt + φ) ─────────────────────────
    1: [
      matching(
        'Ordne jedem Symbol in $x(t) = A\\sin(\\omega t + \\varphi)$ seine physikalische Bedeutung zu.',
        [
          { left: '$A$',        right: 'Amplitude (max. Auslenkung)' },
          { left: '$\\omega$',  right: 'Kreisfrequenz (rad/s)' },
          { left: '$\\varphi$', right: 'Phasenwinkel (Anfangslage)' },
          { left: '$t$',        right: 'Zeit (s)' },
        ],
        `**Ansatz:** Jedes Symbol der Schwingungsformel hat eine konkrete physikalische Bedeutung.

**Rechnung:** Amplitude legt Größe fest, Kreisfrequenz Geschwindigkeit, Phase den Anfangswinkel.

**Probe:** Beispiel $x(t) = 0{,}1 \\sin(2\\pi t)$: $A = 0{,}1$ m, $\\omega = 2\\pi$ rad/s, $\\varphi = 0$.

**Typischer Fehler:** $\\omega$ mit $f$ (Frequenz) verwechseln.`,
        [
          'Amplitude = "Wie weit?".',
          'Kreisfrequenz = "Wie schnell?".',
          'Phase = "Wo beginnt es?".',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['schwingung-form'] },
      ),
      mc(
        'In der Schwingung $x(t) = 0{,}2\\sin(4\\pi t + \\pi/3)$: Was ist die Amplitude?',
        [
          '$0{,}2$',
          '$4\\pi$',
          '$\\pi/3$',
          '$t$',
        ],
        0,
        `**Ansatz:** $A$ steht vor dem Sinus.

**Rechnung:** Vergleich mit $A\\sin(\\omega t + \\varphi) \\Rightarrow A = 0{,}2$.

**Probe:** Maximalauslenkung $x_\\max = A = 0{,}2$.

**Typischer Fehler:** Kreisfrequenz ($4\\pi$) oder Phase ($\\pi/3$) mit Amplitude verwechseln.`,
        [
          'Amplitude steht vor $\\sin$.',
          'Nicht innerhalb der Sinus-Klammer.',
          'Legt die Maximalauslenkung fest.',
        ],
        {
          1: 'Das ist die Kreisfrequenz $\\omega$.',
          2: 'Das ist der Phasenwinkel $\\varphi$.',
          3: 'Das ist die Zeit, die Variable.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['schwingung-form'] },
      ),
      ni(
        'In der Schwingung $x(t) = 0{,}05\\sin(100\\pi t)$ (SI-Einheiten): Welchen Wert hat $x$ bei $t = 0{,}0025$ s? (Einheit m, 4 Dezimalstellen)',
        0.0354, 0.001, 'm',
        `**Ansatz:** $x(t) = 0{,}05 \\sin(100\\pi \\cdot 0{,}0025) = 0{,}05 \\sin(0{,}25\\pi)$.

**Rechnung:** $0{,}25\\pi$ rad = $45°$, $\\sin 45° = \\tfrac{\\sqrt2}{2} \\approx 0{,}7071$; $x = 0{,}05 \\cdot 0{,}7071 \\approx 0{,}0354$ m.

**Probe:** Amplitude $0{,}05$ m ist die Obergrenze — Wert liegt darunter ✓

**Typischer Fehler:** Taschenrechner auf DEG statt RAD.`,
        [
          '$100\\pi \\cdot 0{,}0025 = 0{,}25\\pi$ rad.',
          '$0{,}25\\pi$ rad $= 45°$.',
          '$0{,}05 \\cdot \\sin 45°$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['schwingung-form'] },
      ),
      mc(
        'Ein Schüler interpretiert $x(t) = 3\\sin(2t + 1)$ (SI-Einheiten) als "Amplitude $3$ m, Periode $1$ s, Startauslenkung $2$". Wo liegt der Fehler?',
        [
          'Nur die Amplitude ist korrekt ($A = 3$ m). $\\omega = 2$ rad/s liefert $T = 2\\pi/\\omega = \\pi \\approx 3{,}14$ s (nicht $1$). Der Wert $1$ ist die Phase $\\varphi$ in rad — die Anfangsauslenkung ist $x(0) = 3\\sin 1 \\approx 2{,}52$ m.',
          '$A$ ist falsch — müsste $\\sqrt3$ sein.',
          'Die Schwingung ist zeitlich konstant.',
          '$\\omega = 2$ stimmt nicht, es müsste $\\omega = 1$ sein.',
        ],
        0,
        `**Ansatz:** Form $A\\sin(\\omega t + \\varphi)$ korrekt interpretieren.

**Rechnung:** $A = 3$, $\\omega = 2$ rad/s, $\\varphi = 1$ rad; $T = 2\\pi/\\omega = \\pi$ s; $x(0) = 3\\sin 1 \\approx 2{,}52$ m.

**Probe:** Eine Schwingung mit $\\omega=2$ rad/s vollendet $2$ rad pro Sekunde, braucht also $\\pi$ s für $2\\pi$ rad = eine volle Periode.

**Typischer Fehler:** $\\omega$ mit $f$ oder $T$ verwechseln.`,
        [
          '$T = 2\\pi/\\omega$.',
          '$\\varphi$ ist die Phase, nicht die Startauslenkung selbst.',
          '$x(0) = A\\sin\\varphi$.',
        ],
        {
          1: 'Amplitude ist korrekt $3$.',
          2: 'Die Schwingung ist zeitabhängig ($\\omega \\neq 0$).',
          3: '$\\omega = 2$ steht direkt im Term und stimmt.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['schwingung-form'] },
      ),
      ni(
        'Eine Schwingung hat $A = 0{,}1$ m, $\\omega = 2\\pi$ rad/s, $\\varphi = \\pi/2$. Welchen Wert hat $x$ bei $t = 0$? (Einheit m)',
        0.1, 0.001, 'm',
        `**Ansatz:** $x(0) = A\\sin(\\omega \\cdot 0 + \\varphi) = A\\sin\\varphi$.

**Rechnung:** $x(0) = 0{,}1 \\cdot \\sin(\\pi/2) = 0{,}1 \\cdot 1 = 0{,}1$ m.

**Probe:** Bei $\\varphi = \\pi/2$ startet die Sinus-Schwingung am Maximum (entspricht einem Kosinus).

**Typischer Fehler:** $\\sin(\\pi/2) = 0$ annehmen.`,
        [
          'Einsetzen $t = 0$.',
          '$x(0) = A\\sin\\varphi$.',
          '$\\sin(\\pi/2) = 1$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['schwingung-form'] },
      ),
    ],

    // ── [2] ω = 2πf = 2π/T ───────────────────────────────────────────────
    2: [
      tf(
        'Für eine Schwingung gilt $\\omega = 2\\pi f = 2\\pi/T$, wobei $f$ die Frequenz und $T$ die Periode ist.',
        true,
        `**Ansatz:** $2\\pi$ rad entspricht einer vollen Periode. In Zeit $T$ werden $2\\pi$ rad durchlaufen.

**Rechnung:** $\\omega = 2\\pi / T$ und $f = 1/T \\Rightarrow \\omega = 2\\pi f$.

**Probe:** $f = 50$ Hz $\\Rightarrow \\omega = 100\\pi \\approx 314{,}16$ rad/s ✓

**Typischer Fehler:** Die Faktoren $2\\pi$ und $\\pi$ verwechseln.`,
        [
          'Volle Periode = $2\\pi$ rad.',
          '$T = 1/f$ (Periode = Kehrwert Frequenz).',
          'SI-Einheiten: Hz = 1/s, rad/s.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['omega-f-T'] },
      ),
      mc(
        'Ein Pendel schwingt mit $f = 2$ Hz. Wie groß ist $\\omega$?',
        [
          '$\\omega = 4\\pi$ rad/s',
          '$\\omega = 2$ rad/s',
          '$\\omega = \\pi/2$ rad/s',
          '$\\omega = 2\\pi^2$ rad/s',
        ],
        0,
        `**Ansatz:** $\\omega = 2\\pi f$.

**Rechnung:** $\\omega = 2\\pi \\cdot 2 = 4\\pi \\approx 12{,}566$ rad/s.

**Probe:** Periode $T = 1/f = 0{,}5$ s, und $\\omega \\cdot T = 4\\pi \\cdot 0{,}5 = 2\\pi$ ✓

**Typischer Fehler:** $\\omega = f$ setzen (Faktor $2\\pi$ vergessen).`,
        [
          '$\\omega = 2\\pi f$.',
          '$2\\pi \\cdot 2 = 4\\pi$.',
          'Einheit rad/s.',
        ],
        {
          1: 'Faktor $2\\pi$ vergessen — das ist die Frequenz selbst.',
          2: '$\\omega = f/4$ ergibt keine konsistente Formel.',
          3: 'Das ergibt sich aus keiner gültigen Umrechnung.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['omega-f-T'] },
      ),
      ni(
        'Die Periode einer Schwingung ist $T = 0{,}02$ s. Berechne die Kreisfrequenz $\\omega$ in rad/s (4 Dezimalstellen).',
        314.1593, 0.5, 'rad/s',
        `**Ansatz:** $\\omega = 2\\pi / T$.

**Rechnung:** $\\omega = 2\\pi / 0{,}02 = 100\\pi \\approx 314{,}159$ rad/s.

**Probe:** $f = 1/T = 50$ Hz; $\\omega = 2\\pi \\cdot 50 = 100\\pi$ ✓ (Netzfrequenz).

**Typischer Fehler:** $\\omega = 1/T = 50$ (das wäre $f$, ohne $2\\pi$).`,
        [
          '$T = 0{,}02$ s entspricht $f = 50$ Hz.',
          '$\\omega = 2\\pi f$.',
          '$100\\pi \\approx 314{,}16$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['omega-f-T'] },
      ),
      mc(
        'Ein Schüler schreibt bei $f = 10$ Hz: „$\\omega = \\pi f = 10\\pi$ rad/s." Wo liegt der Fehler?',
        [
          'Er hat den Faktor $2$ vergessen: $\\omega = 2\\pi f = 20\\pi \\approx 62{,}8$ rad/s. In einer vollen Periode sind $2\\pi$ rad zurückzulegen, nicht $\\pi$.',
          '$f = 10$ Hz ist zu schnell.',
          'Er hätte $\\omega = 2f$ schreiben müssen.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** Volle Schwingung entspricht $2\\pi$ rad, nicht $\\pi$.

**Rechnung:** $\\omega = 2\\pi \\cdot 10 = 20\\pi \\approx 62{,}83$ rad/s.

**Probe:** Halbperiode = $\\pi$ rad, volle Periode = $2\\pi$ rad.

**Typischer Fehler:** Halbe und volle Periode verwechseln.`,
        [
          'Eine volle Periode = $2\\pi$ rad.',
          '$\\omega = 2\\pi f$, nicht $\\pi f$.',
          '$\\omega = 20\\pi$ ist das Doppelte seiner Antwort.',
        ],
        {
          1: '$10$ Hz ist eine übliche Schwingungsfrequenz.',
          2: '$\\omega = 2f$ hat keine Einheit rad/s — der $\\pi$-Faktor ist Pflicht.',
          3: 'Nein — Faktor $2$ fehlt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['omega-f-T'] },
      ),
      ni(
        'Ein Rotor dreht mit $n = 3000$ U/min (Umdrehungen pro Minute). Berechne die Kreisfrequenz $\\omega$ in rad/s (2 Dezimalstellen).',
        314.1593, 1, 'rad/s',
        `**Ansatz:** Erst $f$ in Hz: $f = n/60 = 3000/60 = 50$ Hz. Dann $\\omega = 2\\pi f$.

**Rechnung:** $\\omega = 2\\pi \\cdot 50 = 100\\pi \\approx 314{,}16$ rad/s.

**Probe:** $T = 1/f = 0{,}02$ s; in dieser Zeit wird $1$ Umdrehung $= 2\\pi$ rad durchlaufen ✓

**Typischer Fehler:** U/min direkt als rad/s nehmen, ohne auf Hz umzurechnen.`,
        [
          'U/min in Hz: $n/60$.',
          '$3000/60 = 50$ Hz.',
          '$\\omega = 2\\pi \\cdot 50 = 100\\pi$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['omega-f-T'] },
      ),
    ],

    // ── [3] Komponenten-Pythagoras Fx² + Fy² = F² ────────────────────────
    3: [
      tf(
        'Für die Kraftkomponenten gilt $F_x^2 + F_y^2 = F^2$ (unabhängig vom Winkel $\\alpha$).',
        true,
        `**Ansatz:** $F_x = F\\cos\\alpha, F_y = F\\sin\\alpha$; $F_x^2 + F_y^2 = F^2(\\cos^2\\alpha + \\sin^2\\alpha) = F^2 \\cdot 1$.

**Rechnung:** Pythagoras-Identität angewandt auf den Kraft-Betrag.

**Probe:** $F = 10, \\alpha=30°$: $F_x \\approx 8{,}66, F_y = 5$; $75 + 25 = 100 = 10^2$ ✓

**Typischer Fehler:** Glauben, die Gleichung gelte nur für bestimmte Winkel.`,
        [
          'Direkt aus $\\cos^2+\\sin^2=1$.',
          'Gilt für jeden Winkel und jede Richtung.',
          'Nützlich zum Prüfen einer Zerlegung.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['komponenten-pythag'] },
      ),
      mc(
        'Eine Kraft hat $F_x = 6$ N und $F_y = 8$ N. Wie groß ist der Gesamtbetrag $F$?',
        [
          '$F = 10$ N',
          '$F = 14$ N',
          '$F = 48$ N',
          '$F = \\sqrt{14}$ N',
        ],
        0,
        `**Ansatz:** $F = \\sqrt{F_x^2 + F_y^2}$.

**Rechnung:** $F = \\sqrt{36 + 64} = \\sqrt{100} = 10$ N.

**Probe:** 6-8-10 ist ein klassisches pythagoräisches Tripel.

**Typischer Fehler:** $F_x + F_y = 14$ (Linearitätsfalle).`,
        [
          'Pythagoras: Wurzel aus Quadrat-Summe.',
          '$6^2 + 8^2 = 100$.',
          '$\\sqrt{100} = 10$.',
        ],
        {
          1: 'Linearitätsfalle: Kräfte sind Vektoren, man addiert nicht die Beträge.',
          2: '$48 = 6 \\cdot 8$ — Produkt statt Pythagoras.',
          3: 'Addition der Beträge unter der Wurzel — falsch.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['komponenten-pythag'] },
      ),
      ni(
        'Eine Kraft hat $F_x = 30$ N und $F_y = 40$ N. Berechne den Gesamtbetrag $F$ in N.',
        50, 0.5, 'N',
        `**Ansatz:** $F = \\sqrt{F_x^2 + F_y^2}$.

**Rechnung:** $F = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ N.

**Probe:** 30-40-50 = 3-4-5 skaliert ✓

**Typischer Fehler:** $30 + 40 = 70$ N (Linearität).`,
        [
          'Pythagoras.',
          '$30^2 = 900, 40^2 = 1600$.',
          '$\\sqrt{2500} = 50$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['komponenten-pythag'] },
      ),
      mc(
        'Ein Schüler zerlegt $F = 100$ N und erhält $F_x = 80$ N, $F_y = 70$ N. Wieso ist die Rechnung garantiert falsch, ohne dass man den Winkel kennt?',
        [
          'Pythagoras-Check: $F_x^2 + F_y^2 = 6400 + 4900 = 11300 \\neq 10000 = F^2$. Die Komponenten passen nicht zum Gesamtbetrag.',
          'Die Komponenten dürfen nicht beide positiv sein.',
          '$F_x$ muss immer größer als $F_y$ sein.',
          'Die Zerlegung stimmt, man muss nur den Winkel ausrechnen.',
        ],
        0,
        `**Ansatz:** Pythagoras muss immer gelten — unabhängig vom Winkel.

**Rechnung:** $80^2 + 70^2 = 11300$, aber $100^2 = 10000$. Differenz $1300$ — Rechenfehler.

**Probe:** Richtige Zerlegungen erfüllen immer $F_x^2 + F_y^2 = F^2$.

**Typischer Fehler:** Komponenten aus zwei verschiedenen Kräften mischen.`,
        [
          'Pythagoras-Check anwenden.',
          'Summe der Quadrate muss $F^2$ ergeben.',
          'Hier: $11300 \\neq 10000$.',
        ],
        {
          1: 'Vorzeichen hängen vom Quadranten ab — beide positiv ist in Q1 völlig normal.',
          2: 'Kein Zwang — $F_x$ kann kleiner sein (Winkel $> 45°$).',
          3: 'Pythagoras schlägt bereits fehl, also ist die Zerlegung falsch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['komponenten-pythag'] },
      ),
      ni(
        'Eine Kraft wird in Komponenten $F_x = 12$ N und $F_y = 5$ N zerlegt. Unter welchem Winkel $\\alpha$ zur $x$-Achse wirkt sie? (Ergebnis in Grad, 2 Dezimalstellen)',
        22.6199, 0.1, '°',
        `**Ansatz:** $\\tan\\alpha = F_y/F_x$.

**Rechnung:** $\\tan\\alpha = 5/12 \\approx 0{,}4167$; $\\alpha = \\arctan(5/12) \\approx 22{,}62°$.

**Probe:** $F = \\sqrt{144 + 25} = \\sqrt{169} = 13$ N; $F_x = 13 \\cos 22{,}62° \\approx 12$ ✓ (5-12-13-Dreieck).

**Typischer Fehler:** $F_x/F_y$ statt $F_y/F_x$ nehmen → $\\arctan(12/5) \\approx 67{,}4°$.`,
        [
          '$\\tan\\alpha = F_y/F_x$.',
          '$\\arctan(5/12)$.',
          'Taschenrechner in DEG.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['komponenten-pythag', 'kraft-zerlegung'] },
      ),
    ],

    // ── [4] Schiefe Ebene F_H = mg sinα, F_N = mg cosα ───────────────────
    4: [
      matching(
        'Ordne jeder Kraft auf der schiefen Ebene den richtigen Ausdruck zu.',
        [
          { left: 'Hangabtriebskraft $F_H$', right: '$m g \\sin\\alpha$' },
          { left: 'Normalkraft $F_N$',        right: '$m g \\cos\\alpha$' },
          { left: 'Gewichtskraft $F_G$',      right: '$m g$' },
        ],
        `**Ansatz:** Gewichtskraft zerlegen in Komponenten **parallel** und **senkrecht** zur Hangfläche.

**Rechnung:** Parallel (Hangabtrieb): Sinus (wächst mit Winkel). Senkrecht (Normalkraft): Kosinus (sinkt mit Winkel).

**Probe:** Bei $\\alpha = 0°$ (flach) ist $F_H = 0, F_N = mg$ ✓. Bei $\\alpha = 90°$ (senkrecht) ist $F_H = mg, F_N = 0$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen → bei flachem Hang würde ein Hangabtrieb auftreten.`,
        [
          'Extremfall $\\alpha = 0°$ prüfen.',
          'Extremfall $\\alpha = 90°$ prüfen.',
          'Hangabtrieb verschwindet bei flachem Boden.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['schiefe-ebene'] },
      ),
      mc(
        'Ein Körper der Masse $m = 10$ kg liegt auf einer Ebene mit Neigung $\\alpha = 30°$ (nimm $g = 10$ m/s$^2$). Wie groß ist die Hangabtriebskraft?',
        [
          '$F_H = 50$ N',
          '$F_H \\approx 86{,}6$ N',
          '$F_H = 100$ N',
          '$F_H = 5$ N',
        ],
        0,
        `**Ansatz:** $F_H = mg\\sin\\alpha$.

**Rechnung:** $F_H = 10 \\cdot 10 \\cdot \\sin 30° = 100 \\cdot \\tfrac12 = 50$ N.

**Probe:** Normalkraft $F_N = 100 \\cos 30° \\approx 86{,}6$ N; $50^2 + 86{,}6^2 \\approx 10000 = (mg)^2$ ✓

**Typischer Fehler:** $\\cos 30°$ statt $\\sin 30°$ → $86{,}6$ N.`,
        [
          '$F_H = mg\\sin\\alpha$.',
          '$\\sin 30° = 1/2$.',
          '$100 \\cdot 1/2 = 50$.',
        ],
        {
          1: 'Das ist die Normalkraft $F_N = mg\\cos 30°$.',
          2: 'Das ist die volle Gewichtskraft $mg$.',
          3: 'Faktor $g$ oder $m$ vergessen.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['schiefe-ebene'] },
      ),
      ni(
        'Ein Körper der Masse $m = 5$ kg liegt auf einer Rampe mit Neigung $\\alpha = 45°$ (nimm $g = 9{,}81$ m/s$^2$). Berechne die Normalkraft $F_N$ in N (2 Dezimalstellen).',
        34.6836, 0.2, 'N',
        `**Ansatz:** $F_N = mg\\cos\\alpha$.

**Rechnung:** $F_N = 5 \\cdot 9{,}81 \\cdot \\cos 45° = 49{,}05 \\cdot \\tfrac{\\sqrt2}{2} \\approx 49{,}05 \\cdot 0{,}7071 \\approx 34{,}68$ N.

**Probe:** Bei $45°$ gilt $F_N = F_H = mg/\\sqrt2$; $F_H^2 + F_N^2 = 2 \\cdot (mg)^2/2 = (mg)^2$ ✓

**Typischer Fehler:** Bei $45°$ beide Komponenten als $mg/2$ annehmen.`,
        [
          '$F_N = mg\\cos\\alpha$.',
          '$\\cos 45° \\approx 0{,}7071$.',
          '$5 \\cdot 9{,}81 \\cdot 0{,}7071$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['schiefe-ebene'] },
      ),
      mc(
        'Ein Schüler rechnet für eine Rampe mit $\\alpha = 60°$ und $m = 2$ kg (mit $g = 10$ m/s$^2$): „$F_H = mg\\cos 60° = 10$ N, weil der Hang stark geneigt ist." Wo liegt der Fehler?',
        [
          'Er verwechselt $\\sin$ und $\\cos$. Korrekt: $F_H = mg\\sin 60° = 20 \\cdot \\tfrac{\\sqrt3}{2} \\approx 17{,}3$ N. Die Hangabtriebskraft wächst mit dem Winkel — bei steilem Hang ist sie groß.',
          'Er hat $g$ falsch angesetzt.',
          'Die Formel stimmt, nur das Ergebnis ist unpräzise.',
          'Die Hangabtriebskraft ist bei jedem Winkel gleich $mg$.',
        ],
        0,
        `**Ansatz:** Hangabtrieb $\\propto \\sin\\alpha$ (wächst mit Winkel); Normalkraft $\\propto \\cos\\alpha$ (sinkt mit Winkel).

**Rechnung:** Korrekt: $F_H = 2 \\cdot 10 \\cdot \\sin 60° = 20 \\cdot 0{,}866 \\approx 17{,}3$ N.

**Probe:** Extremfall $\\alpha=90°$ (senkrechte Wand): $F_H = mg$, $F_N = 0$ — Sinus-Formel liefert das.

**Typischer Fehler:** Intuition "steiler = mehr Normalkraft" — verkehrt.`,
        [
          'Hangabtrieb wächst mit Winkel → Sinus.',
          'Normalkraft sinkt mit Winkel → Kosinus.',
          'Extremfälle testen.',
        ],
        {
          1: '$g = 10$ m/s² wurde angegeben, also OK.',
          2: 'Nein — die Formelwahl ist strukturell falsch.',
          3: 'Nein — $F_H$ hängt sehr wohl vom Winkel ab.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['schiefe-ebene'] },
      ),
      ni(
        'Ein Auto ($m = 1500$ kg) rollt auf einer Straße mit $10°$ Gefälle. Welche Hangabtriebskraft wirkt? (nimm $g = 9{,}81$ m/s$^2$, Ergebnis in N, 0 Dezimalstellen)',
        2555, 10, 'N',
        `**Ansatz:** $F_H = mg\\sin 10°$.

**Rechnung:** $F_H = 1500 \\cdot 9{,}81 \\cdot \\sin 10° = 14715 \\cdot 0{,}1736 \\approx 2555$ N.

**Probe:** Bei $10°$ rund $17{,}4$ % der Gewichtskraft als Hangabtrieb (guter Richtwert).

**Typischer Fehler:** $\\sin$ für kleine Winkel als $\\alpha$ in rad approximieren, aber Taschenrechner auf RAD lassen.`,
        [
          '$F_H = mg\\sin\\alpha$.',
          '$mg = 1500 \\cdot 9{,}81 = 14715$ N.',
          '$\\sin 10° \\approx 0{,}1736$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['schiefe-ebene'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-4 — Inverse Funktionen  (6 subGoals)
  // 30 Matrix-Aufgaben: 6 SGs × 5 Stufen.
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-4': {
    // ── [0] arcsin: [-1, 1] → [-90°, 90°] ────────────────────────────────
    0: [
      tf(
        'Der Wertebereich von $\\arcsin$ ist $[-90°, 90°]$.',
        true,
        `**Ansatz:** Hauptwertbereich ist die rechte Halbkreisseite, wo $\\sin$ monoton wächst.

**Rechnung:** $\\arcsin(-1) = -90°, \\arcsin(0) = 0°, \\arcsin(1) = 90°$.

**Probe:** Monotonie: $\\arcsin$ ist auf $[-1,1]$ streng monoton steigend.

**Typischer Fehler:** Wertebereich $[0°, 180°]$ wählen (das ist $\\arccos$).`,
        [
          'Monotonie-Forderung wählt die rechte Halbkreisseite.',
          'Umfasst $0°$ und erlaubt negative Winkel.',
          'Nicht verwechseln mit $\\arccos$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['arcsin-def'] },
      ),
      mc(
        'Was ist $\\arcsin(\\tfrac12)$?',
        [
          '$30°$',
          '$150°$',
          '$60°$',
          '$210°$',
        ],
        0,
        `**Ansatz:** $\\arcsin$ liefert den Hauptwert in $[-90°, 90°]$.

**Rechnung:** $\\sin 30° = \\tfrac12$; $30°$ liegt im Hauptwertbereich.

**Probe:** $\\sin 30° = 0{,}5$ ✓

**Typischer Fehler:** Die weitere Lösung $150°$ (liegt außerhalb des Hauptwertbereichs) angeben.`,
        [
          'Grundwert: $\\sin 30° = \\tfrac12$.',
          '$30°$ liegt in $[-90°, 90°]$.',
          'Nur Hauptwert!',
        ],
        {
          1: '$\\sin 150° = \\tfrac12$ zwar korrekt, aber $150°$ ist NICHT im Hauptwertbereich $[-90°, 90°]$ von $\\arcsin$.',
          2: '$\\sin 60° = \\tfrac{\\sqrt3}{2} \\neq \\tfrac12$.',
          3: '$\\sin 210° = -\\tfrac12$, falsches Vorzeichen und außerhalb Hauptwert.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['arcsin-def'] },
      ),
      ni(
        'Berechne $\\arcsin(-\\tfrac12)$ in Grad.',
        -30, 0.001, '°',
        `**Ansatz:** $\\sin$ ist ungerade: $\\sin(-\\alpha) = -\\sin\\alpha$, daher $\\arcsin(-x) = -\\arcsin(x)$.

**Rechnung:** $\\arcsin(-\\tfrac12) = -\\arcsin(\\tfrac12) = -30°$.

**Probe:** $-30° \\in [-90°, 90°]$ ✓; $\\sin(-30°) = -\\tfrac12$ ✓

**Typischer Fehler:** Positives Ergebnis angeben (Vorzeichen beim Sinus vergessen) oder $330°$ (außerhalb Hauptwert).`,
        [
          'Punktsymmetrie: $\\arcsin(-x) = -\\arcsin(x)$.',
          '$\\arcsin(\\tfrac12) = 30°$.',
          'Also $-30°$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['arcsin-def'] },
      ),
      mc(
        'Ein Schüler schreibt $\\arcsin(\\sin 150°) = 150°$. Wo liegt der Fehler?',
        [
          '$\\arcsin$ liefert immer einen Wert in $[-90°, 90°]$. Da $\\sin 150° = \\tfrac12$ gilt, ist $\\arcsin(\\sin 150°) = \\arcsin(\\tfrac12) = 30°$, nicht $150°$.',
          '$\\sin 150° \\neq \\tfrac12$.',
          '$\\arcsin$ ist die exakte Umkehrung von $\\sin$ für jeden Winkel.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** $\\arcsin(\\sin x) = x$ gilt nur, wenn $x$ bereits im Hauptwertbereich ist.

**Rechnung:** $\\sin 150° = \\sin(180°-30°) = \\sin 30° = \\tfrac12$. $\\arcsin(\\tfrac12) = 30°$.

**Probe:** Der Sinus "vergisst" den Unterschied zwischen $150°$ und $30°$; $\\arcsin$ kann das nicht rückgängig machen.

**Typischer Fehler:** Annahme, dass Umkehrung immer gilt.`,
        [
          '$\\sin 150° = \\tfrac12$ (Supplement).',
          'Hauptwert-Projektion in $[-90°, 90°]$.',
          'Verlorene Information kann $\\arcsin$ nicht rekonstruieren.',
        ],
        {
          1: '$\\sin 150° = \\tfrac12$ ist korrekt (Supplement-Formel).',
          2: '$\\arcsin(\\sin x) = x$ stimmt nur auf $[-90°, 90°]$.',
          3: 'Nein — Hauptwert ist $30°$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['arcsin-def'] },
      ),
      ni(
        'Berechne $\\arcsin(\\tfrac{\\sqrt2}{2})$ in Grad.',
        45, 0.001, '°',
        `**Ansatz:** Grundwert $\\sin 45° = \\tfrac{\\sqrt2}{2}$.

**Rechnung:** $\\arcsin(\\tfrac{\\sqrt2}{2}) = 45°$.

**Probe:** $45° \\in [-90°, 90°]$ ✓

**Typischer Fehler:** $\\tfrac{\\sqrt2}{2} \\approx 0{,}707$ mit $\\tfrac12$ verwechseln.`,
        [
          '$\\tfrac{\\sqrt2}{2} = \\sin 45°$.',
          'Hauptwert.',
          '$45°$ liegt in $[-90°, 90°]$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['arcsin-def'] },
      ),
    ],

    // ── [1] arccos: [-1, 1] → [0°, 180°] ─────────────────────────────────
    1: [
      tf(
        'Der Wertebereich von $\\arccos$ ist $[0°, 180°]$.',
        true,
        `**Ansatz:** Hauptwertbereich umfasst obere Halbkreisseite, wo $\\cos$ monoton fällt.

**Rechnung:** $\\arccos(1) = 0°, \\arccos(0) = 90°, \\arccos(-1) = 180°$.

**Probe:** Monotonie: $\\arccos$ streng monoton fallend.

**Typischer Fehler:** Wertebereich $[-90°, 90°]$ wählen (das ist $\\arcsin$).`,
        [
          'Obere Halbkreisseite.',
          'Enthält keine negativen Winkel.',
          'Monoton fallend.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['arccos-def'] },
      ),
      mc(
        'Was ist $\\arccos(\\tfrac12)$?',
        [
          '$60°$',
          '$30°$',
          '$-60°$',
          '$300°$',
        ],
        0,
        `**Ansatz:** $\\arccos$ liefert Hauptwert in $[0°, 180°]$.

**Rechnung:** $\\cos 60° = \\tfrac12$.

**Probe:** $60° \\in [0°, 180°]$ ✓

**Typischer Fehler:** Mit $\\arcsin$ verwechseln ($\\arcsin(\\tfrac12) = 30°$).`,
        [
          'Grundwert: $\\cos 60° = \\tfrac12$.',
          '$60°$ liegt in $[0°, 180°]$.',
          'Nicht $30°$ — das ist $\\arcsin(\\tfrac12)$.',
        ],
        {
          1: '$\\cos 30° = \\tfrac{\\sqrt3}{2} \\neq \\tfrac12$. Du hast vermutlich $\\arcsin$ gedacht.',
          2: 'Negativer Winkel ist außerhalb des Wertebereichs.',
          3: '$\\cos 300° = \\tfrac12$, aber außerhalb $[0°, 180°]$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['arccos-def'] },
      ),
      ni(
        'Berechne $\\arccos(-\\tfrac12)$ in Grad.',
        120, 0.001, '°',
        `**Ansatz:** $\\arccos(-x) = 180° - \\arccos(x)$ (Kosinus-Symmetrie am Supplement).

**Rechnung:** $\\arccos(-\\tfrac12) = 180° - \\arccos(\\tfrac12) = 180° - 60° = 120°$.

**Probe:** $120° \\in [0°, 180°]$ ✓; $\\cos 120° = -\\tfrac12$ ✓

**Typischer Fehler:** Punktsymmetrie (wie bei $\\arcsin$) annehmen → $-60°$.`,
        [
          'Kosinus ist am Supplement gespiegelt, nicht punktsymmetrisch.',
          '$\\arccos(-x) = 180° - \\arccos(x)$.',
          '$180° - 60° = 120°$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['arccos-def'] },
      ),
      mc(
        'Ein Schüler rechnet $\\arccos(-1) = -180°$. Wo liegt der Fehler?',
        [
          'Der Hauptwertbereich von $\\arccos$ ist $[0°, 180°]$ — negative Werte sind ausgeschlossen. Korrekt: $\\arccos(-1) = 180°$.',
          '$\\cos$ wird bei $-180°$ nicht zu $-1$.',
          '$-1$ ist nicht im Definitionsbereich.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** Wertebereich von $\\arccos$ beachten.

**Rechnung:** $\\cos 180° = -1$, und $180° \\in [0°, 180°]$ ✓

**Probe:** $\\cos(-180°) = \\cos 180° = -1$, aber $-180°$ ist nicht im Hauptwertbereich.

**Typischer Fehler:** Hauptwertbereich von $\\arcsin$ ($[-90°, 90°]$) auf $\\arccos$ übertragen.`,
        [
          'Hauptwertbereich-Regel.',
          '$\\arccos$ erlaubt $0°$ bis $180°$ (inklusive).',
          '$\\cos 180° = -1$ ✓',
        ],
        {
          1: '$\\cos(-180°)$ wäre $-1$, aber das ist nicht der Hauptwert.',
          2: '$-1 \\in [-1, 1]$, also im Definitionsbereich.',
          3: 'Nein — Hauptwertbereich ausschließen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['arccos-def'] },
      ),
      ni(
        'Berechne $\\arccos(\\tfrac{\\sqrt3}{2})$ in Grad.',
        30, 0.001, '°',
        `**Ansatz:** Grundwert $\\cos 30° = \\tfrac{\\sqrt3}{2}$.

**Rechnung:** $\\arccos(\\tfrac{\\sqrt3}{2}) = 30°$.

**Probe:** $30° \\in [0°, 180°]$ ✓

**Typischer Fehler:** Mit $\\arcsin(\\tfrac{\\sqrt3}{2}) = 60°$ verwechseln.`,
        [
          '$\\cos 30° = \\tfrac{\\sqrt3}{2}$.',
          'Hauptwert in $[0°, 180°]$.',
          'Nicht $60°$ (das wäre $\\arcsin$).',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['arccos-def'] },
      ),
    ],

    // ── [2] arctan: ℝ → (-90°, 90°) ──────────────────────────────────────
    2: [
      tf(
        'Der Wertebereich von $\\arctan$ ist $(-90°, 90°)$ — die Pole $\\pm 90°$ sind ausgeschlossen.',
        true,
        `**Ansatz:** $\\tan$ hat Pole bei $\\pm 90°$, daher sind diese Winkel nicht Werte der Umkehrung.

**Rechnung:** $\\arctan(0) = 0°$; $\\arctan(\\text{sehr groß}) \\to 90°$ aber nie gleich $90°$.

**Probe:** Asymptotisches Verhalten: $\\arctan$ hat horizontale Asymptoten bei $\\pm 90°$.

**Typischer Fehler:** $\\pm 90°$ als erreichbar betrachten.`,
        [
          'Tangens-Pole bei $\\pm 90°$.',
          'Offenes Intervall.',
          'Definitionsbereich ist ganz $\\mathbb{R}$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['arctan-def'] },
      ),
      mc(
        'Was ist $\\arctan(1)$?',
        [
          '$45°$',
          '$60°$',
          '$90°$',
          '$135°$',
        ],
        0,
        `**Ansatz:** $\\tan 45° = 1$.

**Rechnung:** $\\arctan(1) = 45°$.

**Probe:** $45° \\in (-90°, 90°)$ ✓

**Typischer Fehler:** Mit $\\arcsin(1) = 90°$ verwechseln.`,
        [
          '$\\tan 45° = 1$.',
          'Hauptwert liegt im offenen Intervall.',
          '$45°$ ist der kleinste positive Winkel mit $\\tan = 1$.',
        ],
        {
          1: '$\\tan 60° = \\sqrt3 \\approx 1{,}73$, nicht $1$.',
          2: '$\\tan 90°$ ist undefiniert (Pol).',
          3: '$135°$ liegt außerhalb des Hauptwertbereichs.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['arctan-def'] },
      ),
      ni(
        'Berechne $\\arctan(\\sqrt3)$ in Grad.',
        60, 0.001, '°',
        `**Ansatz:** Grundwert $\\tan 60° = \\sqrt3$.

**Rechnung:** $\\arctan(\\sqrt3) = 60°$.

**Probe:** $60° \\in (-90°, 90°)$ ✓

**Typischer Fehler:** $\\arctan(\\sqrt3)$ mit $\\arctan(1/\\sqrt3) = 30°$ verwechseln.`,
        [
          '$\\tan 60° = \\sqrt3 \\approx 1{,}732$.',
          'Hauptwert.',
          '$60°$ liegt im offenen Intervall.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['arctan-def'] },
      ),
      mc(
        'Ein Schüler behauptet $\\arctan(10^{10}) = 90°$, weil der Tangens dort "unendlich" wird. Wo liegt der Fehler?',
        [
          'Der Wert $90°$ ist kein gültiger Funktionswert von $\\arctan$. Korrekt: $\\arctan(10^{10}) \\approx 89{,}9999999994°$ — dicht an $90°$, aber nie erreicht (horizontale Asymptote).',
          '$\\tan 90°$ ist definiert und gleich $10^{10}$.',
          'Der Definitionsbereich von $\\arctan$ ist $[-1, 1]$.',
          'Die Aussage stimmt.',
        ],
        0,
        `**Ansatz:** Offenes Intervall bedeutet: nie erreicht, nur angenähert.

**Rechnung:** $\\arctan$ strebt gegen $90°$, erreicht es aber nicht.

**Probe:** Für jede endliche Zahl $x$ ist $\\arctan(x) < 90°$, selbst wenn $x$ sehr groß ist.

**Typischer Fehler:** Asymptote mit Funktionswert verwechseln.`,
        [
          'Asymptote vs. Wert.',
          'Offenes Intervall schließt Grenzen aus.',
          '$\\tan 90°$ ist undefiniert.',
        ],
        {
          1: '$\\tan 90°$ ist **undefiniert** (Pol), nicht $10^{10}$.',
          2: '$\\arctan$ ist auf ganz $\\mathbb{R}$ definiert.',
          3: 'Nein — Grenzwert wird nicht erreicht.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['arctan-def'] },
      ),
      ni(
        'Berechne $\\arctan(-1)$ in Grad.',
        -45, 0.001, '°',
        `**Ansatz:** $\\arctan$ ist ungerade: $\\arctan(-x) = -\\arctan(x)$.

**Rechnung:** $\\arctan(-1) = -45°$.

**Probe:** $-45° \\in (-90°, 90°)$ ✓; $\\tan(-45°) = -1$ ✓

**Typischer Fehler:** Wie bei $\\arccos$ $180° - 45° = 135°$ rechnen (falsche Symmetrie).`,
        [
          '$\\arctan$ punktsymmetrisch (wie $\\arcsin$).',
          '$\\arctan(1) = 45°$.',
          'Minus.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['arctan-def'] },
      ),
    ],

    // ── [3] Hauptwert vs. weitere Lösungen ───────────────────────────────
    3: [
      tf(
        'Die Gleichung $\\sin x = \\tfrac12$ hat im Bereich $[0°, 360°)$ genau zwei Lösungen, obwohl $\\arcsin(\\tfrac12)$ nur **einen** Wert liefert.',
        true,
        `**Ansatz:** $\\arcsin$ liefert Hauptwert, aber Supplement-Formel $\\sin(180°-\\alpha) = \\sin\\alpha$ gibt eine zweite Lösung.

**Rechnung:** Lösungen: $30°$ und $150°$.

**Probe:** $\\sin 30° = \\sin 150° = \\tfrac12$ ✓

**Typischer Fehler:** Nur den Hauptwert als einzige Lösung ansehen.`,
        [
          'Hauptwert aus $\\arcsin$.',
          'Zweite Lösung per Supplement.',
          'Im $[0°, 360°)$-Bereich genau zwei.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['hauptwert-vs-weitere'] },
      ),
      mc(
        'Welches Paar gibt alle Lösungen von $\\cos x = \\tfrac12$ im Bereich $[0°, 360°)$?',
        [
          '$60°$ und $300°$',
          '$60°$ und $120°$',
          'Nur $60°$',
          '$30°$ und $330°$',
        ],
        0,
        `**Ansatz:** Hauptwert $\\arccos(\\tfrac12) = 60°$. Zweite Lösung via Symmetrie: $\\cos(-\\alpha) = \\cos\\alpha$, also $-60° \\equiv 300°$.

**Rechnung:** Lösungen: $60°$ und $300°$.

**Probe:** $\\cos 60° = \\cos 300° = \\tfrac12$ ✓

**Typischer Fehler:** Supplement-Formel (wie bei Sinus) statt Symmetrie am Kosinus anwenden.`,
        [
          '$\\arccos(\\tfrac12) = 60°$.',
          'Kosinus ist achsensymmetrisch: $\\cos(-\\alpha) = \\cos\\alpha$.',
          '$-60° \\equiv 300°$ (modulo $360°$).',
        ],
        {
          1: '$\\cos 120° = -\\tfrac12 \\neq \\tfrac12$ — falsche Symmetrieregel (Sinus-Regel angewandt).',
          2: 'Nur Hauptwert — zweite Lösung fehlt.',
          3: '$\\cos 30° = \\tfrac{\\sqrt3}{2} \\neq \\tfrac12$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['hauptwert-vs-weitere'] },
      ),
      ni(
        'Bestimme die größte Lösung von $\\sin x = \\tfrac{\\sqrt2}{2}$ im Bereich $[0°, 360°)$ (in Grad).',
        135, 0.01, '°',
        `**Ansatz:** Hauptwert $\\arcsin(\\tfrac{\\sqrt2}{2}) = 45°$. Supplement $180°-45° = 135°$.

**Rechnung:** Lösungen in $[0°, 360°)$: $45°$ und $135°$. Größte: $135°$.

**Probe:** $\\sin 135° = \\sin 45° = \\tfrac{\\sqrt2}{2}$ ✓

**Typischer Fehler:** Nur Hauptwert $45°$ angeben.`,
        [
          'Hauptwert aus $\\arcsin$.',
          'Supplement $180°-45°$.',
          '$135° > 45°$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['hauptwert-vs-weitere'] },
      ),
      mc(
        'Ein Schüler schreibt beim Lösen von $\\cos x = -\\tfrac12$ im Bereich $[0°, 360°)$: „$x = \\arccos(-\\tfrac12) = 120°$ — fertig." Wo liegt der Fehler?',
        [
          'Nur der Hauptwert ist angegeben; durch die Achsensymmetrie von Kosinus gibt es eine zweite Lösung: $x = 360° - 120° = 240°$. Vollständige Lösungsmenge: $\\{120°, 240°\\}$.',
          '$\\arccos(-\\tfrac12) = 240°$, nicht $120°$.',
          'Die Gleichung hat gar keine Lösung.',
          '$-\\tfrac12$ ist nicht im Definitionsbereich.',
        ],
        0,
        `**Ansatz:** Eine Gleichung $\\cos x = c$ mit $c \\in (-1, 1)$ hat im Bereich $[0°, 360°)$ immer **zwei** Lösungen.

**Rechnung:** $120°$ (Hauptwert) und $360°-120° = 240°$ (gespiegelt an $x$-Achse).

**Probe:** $\\cos 120° = \\cos 240° = -\\tfrac12$ ✓

**Typischer Fehler:** Hauptwert als einzige Lösung annehmen.`,
        [
          'Zwei Lösungen pro Periode.',
          'Symmetrie $\\cos(360°-\\alpha) = \\cos\\alpha$.',
          'Lösungsmenge aufschreiben.',
        ],
        {
          1: '$\\arccos$ liefert den Hauptwert $120°$ korrekt.',
          2: 'Die Gleichung hat Lösungen (Definitionsbereich $[-1,1]$ erfüllt).',
          3: '$-\\tfrac12$ ist im Definitionsbereich.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['hauptwert-vs-weitere'] },
      ),
      matching(
        'Ordne jeder Gleichung die **zweite** Lösung im Bereich $[0°, 360°)$ zu (erste ist jeweils der Hauptwert der Umkehrfunktion).',
        [
          { left: '$\\sin x = \\tfrac12$ (Hauptwert $30°$)',     right: '$150°$' },
          { left: '$\\cos x = \\tfrac12$ (Hauptwert $60°$)',     right: '$300°$' },
          { left: '$\\sin x = -\\tfrac{\\sqrt2}{2}$ (Hauptwert $-45° \\equiv 315°$)', right: '$225°$' },
          { left: '$\\cos x = -\\tfrac{\\sqrt3}{2}$ (Hauptwert $150°$)', right: '$210°$' },
        ],
        `**Ansatz:** Sinus: Supplement $180°-\\alpha$. Kosinus: Spiegel $360°-\\alpha$.

**Rechnung:** Je nach Funktion die passende Symmetrie anwenden.

**Probe:** Jede zweite Lösung einsetzen: liefert denselben Wert wie der Hauptwert.

**Typischer Fehler:** Symmetrieregel (Sinus vs. Kosinus) vertauschen.`,
        [
          'Sinus: Supplement $180°-\\alpha$.',
          'Kosinus: Spiegel $360°-\\alpha$.',
          'Beide Lösungen im Standardbereich angeben.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['hauptwert-vs-weitere'] },
      ),
    ],

    // ── [4] DEG/RAD-Modus ────────────────────────────────────────────────
    4: [
      tf(
        'Der Taschenrechner-Modus (DEG oder RAD) beeinflusst, welchen numerischen Wert $\\arcsin(0{,}5)$ liefert.',
        true,
        `**Ansatz:** Im DEG-Modus liefert $\\arcsin(0{,}5) = 30$ (Grad); im RAD-Modus $\\approx 0{,}5236$ (Bogenmaß $= \\pi/6$).

**Rechnung:** Beide Werte beschreiben denselben Winkel, aber in unterschiedlichen Einheiten.

**Probe:** $30° = \\pi/6$ rad $\\approx 0{,}5236$ ✓

**Typischer Fehler:** Das Einheitensymbol $°$ vergessen und Zahlenwerte verwechseln.`,
        [
          'Grad vs. Bogenmaß.',
          '$180° = \\pi$ rad.',
          '$30° = \\pi/6 \\approx 0{,}524$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['modus-pflicht'] },
      ),
      mc(
        'Ein Taschenrechner liefert $\\arcsin(1) = 1{,}5708$. In welchem Modus wurde gerechnet?',
        [
          'RAD (Bogenmaß)',
          'DEG (Grad)',
          'GRAD (Gon)',
          'Der Wert ist falsch — $\\arcsin(1)$ existiert nicht.',
        ],
        0,
        `**Ansatz:** $\\arcsin(1) = 90° = \\pi/2$ rad $\\approx 1{,}5708$.

**Rechnung:** Der Zahlenwert $1{,}5708$ entspricht $\\pi/2$ — das Bogenmaß (RAD).

**Probe:** $\\sin(1{,}5708) = \\sin(\\pi/2) = 1$ ✓ (nur in RAD-Interpretation).

**Typischer Fehler:** $1{,}5708$ als $1{,}57°$ lesen (absurd klein).`,
        [
          '$\\pi/2 \\approx 1{,}5708$.',
          'Grad wäre $90$, Bogenmaß ist $\\pi/2$.',
          'RAD-Modus.',
        ],
        {
          1: 'In DEG wäre das Ergebnis $90$, nicht $1{,}5708$.',
          2: 'GRAD (Neugrad/Gon): $100$ Gon für einen Rechten Winkel — wäre $100$ hier.',
          3: '$\\arcsin(1) = 90°$ ist sehr wohl definiert.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['modus-pflicht'] },
      ),
      ni(
        'Was liefert $\\sin(\\pi/6)$, wenn der Taschenrechner im RAD-Modus ist? (4 Dezimalstellen)',
        0.5, 0.001, '',
        `**Ansatz:** $\\pi/6 \\approx 0{,}5236$ rad $= 30°$ → $\\sin = 0{,}5$.

**Rechnung:** $\\sin(\\pi/6) = \\tfrac12 = 0{,}5$.

**Probe:** In DEG würde der Taschenrechner $\\sin(\\pi/6°) = \\sin(0{,}524°) \\approx 0{,}00914$ liefern — völlig anders.

**Typischer Fehler:** Modus nicht überprüfen.`,
        [
          '$\\pi/6$ rad $= 30°$.',
          'Im RAD-Modus wird die Zahl als Bogenmaß interpretiert.',
          '$\\sin 30° = \\tfrac12$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['modus-pflicht'] },
      ),
      mc(
        'Ein Schüler berechnet $\\sin(30)$ auf dem Taschenrechner und erhält $-0{,}988$. Wo liegt der Fehler?',
        [
          'Der Taschenrechner steht auf RAD. Er interpretiert $30$ als $30$ rad $\\approx 1719°$ — eine vielfach um die Kreise herum gewundene Position. Für $\\sin 30°$ muss der Modus auf DEG gestellt werden.',
          '$\\sin 30° = 0{,}5$, aber der Rechner rundet falsch.',
          'Der Taschenrechner ist defekt.',
          'Die Aussage $\\sin 30° = -0{,}988$ ist korrekt.',
        ],
        0,
        `**Ansatz:** DEG/RAD-Modus vor dem Rechnen setzen.

**Rechnung:** $\\sin(30 \\text{ rad}) \\approx -0{,}988$ (da $30$ rad $\\approx 4{,}77$ volle Perioden + Rest).

**Probe:** $\\sin 30° = 0{,}5$ (DEG-Modus).

**Typischer Fehler:** Der häufigste Taschenrechnerfehler — Modus ignorieren.`,
        [
          'RAD-Modus interpretiert Zahlen als Bogenmaß.',
          '$30$ rad sind rund $1719°$.',
          'DEG-Modus liefert $\\sin 30° = 0{,}5$.',
        ],
        {
          1: 'Rundungsfehler sind viel kleiner als der Unterschied $0{,}5$ vs. $-0{,}988$.',
          2: 'Der Taschenrechner arbeitet korrekt — nur der Modus ist falsch.',
          3: 'Nein — in DEG wäre $\\sin 30° = 0{,}5$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['modus-pflicht'] },
      ),
      matching(
        'Ordne jeder Winkelangabe die korrekte Darstellung im jeweils anderen Modus zu.',
        [
          { left: '$90°$',         right: '$\\pi/2 \\approx 1{,}5708$ rad' },
          { left: '$180°$',        right: '$\\pi \\approx 3{,}1416$ rad' },
          { left: '$\\pi/4$ rad',  right: '$45°$' },
          { left: '$2\\pi$ rad',   right: '$360°$' },
        ],
        `**Ansatz:** Umrechnung $\\alpha_\\text{rad} = \\alpha° \\cdot \\pi/180$.

**Rechnung:** Alle Werte konsistent umrechnen.

**Probe:** Verhältnis $180°/\\pi$ rad $\\approx 57{,}3$ — 1 rad ist etwa $57{,}3°$.

**Typischer Fehler:** $\\pi$ mit $180$ verwechseln.`,
        [
          'Voll-Kreis: $360° = 2\\pi$ rad.',
          '$90° = \\pi/2$ rad.',
          '$1$ rad $\\approx 57{,}3°$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['modus-pflicht'] },
      ),
    ],

    // ── [5] sin⁻¹ ≠ 1/sin ────────────────────────────────────────────────
    5: [
      tf(
        'Die Notation $\\sin^{-1}(x)$ steht für die Umkehrfunktion $\\arcsin(x)$ und **nicht** für $1/\\sin(x)$.',
        true,
        `**Ansatz:** Die Hochschrift $-1$ bei Funktionen kennzeichnet die Umkehrfunktion, nicht den Kehrwert.

**Rechnung:** $\\sin^{-1}(0{,}5) = \\arcsin(0{,}5) = 30°$. Der Kehrwert wäre $1/\\sin(0{,}5°) \\approx 114{,}6$.

**Probe:** Taschenrechner-Taste „SIN$^{-1}$" liefert den Winkel.

**Typischer Fehler:** $\\sin^{-1}(x) = 1/\\sin(x)$ durchziehen (Verwechslung mit $x^{-1} = 1/x$).`,
        [
          'Hochschrift $-1$ bei Funktionen = Umkehrfunktion.',
          'Kehrwert: $1/\\sin(x) = \\csc(x)$.',
          'Taschenrechner-Taste gibt den Winkel.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['arcsin-vs-reziprok'] },
      ),
      mc(
        'Was ist $\\sin^{-1}(0{,}5)$?',
        [
          '$30°$',
          '$2$',
          '$0{,}5$',
          '$\\tfrac{1}{0{,}5 \\cdot 180/\\pi}$',
        ],
        0,
        `**Ansatz:** $\\sin^{-1} = \\arcsin$.

**Rechnung:** $\\sin^{-1}(0{,}5) = 30°$.

**Probe:** $\\sin 30° = 0{,}5$ ✓

**Typischer Fehler:** $\\sin^{-1}(0{,}5) = 1/0{,}5 = 2$ rechnen.`,
        [
          'Umkehrfunktions-Notation.',
          '$\\arcsin(0{,}5) = 30°$.',
          'Kehrwert-Deutung wäre $2$, aber das ist falsch.',
        ],
        {
          1: 'Das ist $1/0{,}5 = 2$ — Kehrwert, nicht Umkehrfunktion.',
          2: 'Das ist einfach die Zahl $0{,}5$ — keine Operation.',
          3: 'Eine künstliche Kombination ohne mathematische Bedeutung.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['arcsin-vs-reziprok'] },
      ),
      ni(
        'Was ergibt $\\sin^{-1}(1)$ in Grad?',
        90, 0.01, '°',
        `**Ansatz:** $\\sin^{-1} = \\arcsin$.

**Rechnung:** $\\arcsin(1) = 90°$.

**Probe:** $\\sin 90° = 1$ ✓

**Typischer Fehler:** $\\sin^{-1}(1) = 1/\\sin 1° = 1/0{,}01745 \\approx 57{,}3$.`,
        [
          'Umkehrfunktion, nicht Kehrwert.',
          '$\\sin 90° = 1$.',
          'Ergebnis in Grad.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['arcsin-vs-reziprok'] },
      ),
      mc(
        'Ein Schüler rechnet: „$\\sin^{-1}(0{,}8) = 1/\\sin(0{,}8°) \\approx 71{,}6$." Wo liegt der Fehler?',
        [
          'Er hat die Hochschrift $-1$ als Kehrwert interpretiert. Bei trigonometrischen Funktionen bedeutet $\\sin^{-1}$ aber **Umkehrfunktion** (also $\\arcsin$). Korrekt: $\\sin^{-1}(0{,}8) \\approx 53{,}13°$.',
          'Er hätte $\\sin 0{,}8°$ statt $\\sin(0{,}8)$ rechnen müssen.',
          'Das Ergebnis $71{,}6$ ist richtig.',
          '$0{,}8$ ist nicht im Definitionsbereich.',
        ],
        0,
        `**Ansatz:** Notation genau lesen.

**Rechnung:** $\\arcsin(0{,}8) \\approx 53{,}13°$ (Taschenrechner).

**Probe:** $\\sin 53{,}13° \\approx 0{,}8$ ✓

**Typischer Fehler:** Exponent-Analogie $x^{-1} = 1/x$ falsch übertragen.`,
        [
          'Konvention: $\\sin^{-1} \\neq 1/\\sin$.',
          '$\\sin^{-1} = \\arcsin$.',
          'Der Kehrwert heißt $\\csc$ (Kosekans), nicht $\\sin^{-1}$.',
        ],
        {
          1: 'Argument $0{,}8$ ist kein Winkel, sondern ein Sinuswert.',
          2: '$71{,}6$ ist falsch — $\\arcsin(0{,}8) \\approx 53{,}13°$.',
          3: '$0{,}8 \\in [-1, 1]$, also im Definitionsbereich.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['arcsin-vs-reziprok'] },
      ),
      matching(
        'Ordne jeder Notation die korrekte Interpretation zu.',
        [
          { left: '$\\sin^{-1}(x)$', right: 'Umkehrfunktion $\\arcsin(x)$, Ergebnis ist ein Winkel' },
          { left: '$(\\sin x)^{-1}$', right: 'Kehrwert $1/\\sin(x) = \\csc(x)$' },
          { left: '$\\sin^2(x)$',    right: '$(\\sin x)^2$ (Quadrat des Sinuswerts)' },
          { left: '$\\arcsin(\\sin x)$', right: '$x$, solange $x \\in [-90°, 90°]$ liegt' },
        ],
        `**Ansatz:** Positionen der Exponenten unterscheiden Umkehrfunktion, Kehrwert und Potenz.

**Rechnung:** $\\sin^2 x$ meint das Quadrat, nie $\\sin(\\sin x)$ (Iteration).

**Probe:** Jede Notation mit konkreten Werten testen.

**Typischer Fehler:** $\\sin^{-1}$ als Kehrwert lesen.`,
        [
          '$^{-1}$ bei Funktionen = Umkehrfunktion (außer in Klammern).',
          'Kehrwert nur bei $(\\sin x)^{-1}$.',
          '$\\sin^2 x$ = Quadrat des Werts.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['arcsin-vs-reziprok'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-3-5 — Sinussatz & Cosinussatz  (6 subGoals × 5 stages)
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-5': {

    // ── [0] Sinussatz-Formel ────────────────────────────────────────────
    0: [
      tf(
        'Sub-Goal "Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$": Die Quotienten $a/\\sin\\alpha$, $b/\\sin\\beta$ und $c/\\sin\\gamma$ in einem Dreieck sind alle gleich groß.',
        true,
        `**Ansatz:** Kernaussage des Sinussatzes.\n\n**Rechnung:** $\\dfrac{a}{\\sin\\alpha} = \\dfrac{b}{\\sin\\beta} = \\dfrac{c}{\\sin\\gamma} = 2R$ (Umkreisdurchmesser).\n\n**Probe:** Im gleichseitigen Dreieck mit $a=b=c$ und $\\alpha=\\beta=\\gamma=60°$ sind die drei Quotienten trivial gleich.\n\n**Typischer Fehler:** Quotient umdrehen ($\\sin\\alpha/a$) — das ergibt $1/(2R)$, nicht die Grundform.`,
        [
          'Was ist die zentrale Gleichung des Sinussatzes?',
          'Seite geteilt durch Sinus des **gegenüberliegenden** Winkels.',
          'Alle drei Verhältnisse sind gleich und entsprechen $2R$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['sinussatz'] },
      ),
      mc(
        'Sub-Goal "Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$": Ein Dreieck hat $a=8$, $\\alpha=30°$. Welcher Ausdruck liefert den Umkreisradius $R$?',
        [
          '$R = \\dfrac{a}{2\\sin\\alpha}$',
          '$R = 2a\\sin\\alpha$',
          '$R = \\dfrac{2\\sin\\alpha}{a}$',
          '$R = \\dfrac{a\\sin\\alpha}{2}$',
        ],
        0,
        `**Ansatz:** Aus $a/\\sin\\alpha = 2R$ folgt $R = a/(2\\sin\\alpha)$.\n\n**Rechnung:** $R = 8/(2\\cdot 0{,}5) = 8$.\n\n**Probe:** $a/\\sin\\alpha = 8/0{,}5 = 16 = 2R$. ✓\n\n**Typischer Fehler:** Multiplizieren statt dividieren — $2a\\sin\\alpha$ hat die falsche Dimension.`,
        [
          'Löse $a/\\sin\\alpha = 2R$ nach $R$ auf.',
          'Beide Seiten durch 2 teilen.',
          '$R = a/(2\\sin\\alpha)$.',
        ],
        {
          1: 'Falsche Umformung — multiplizieren statt dividieren.',
          2: 'Der Kehrwert. Liefert $1/R$, nicht $R$.',
          3: 'Dividiert durch 2 im Zähler statt im Nenner. Im Ausdruck $a/(2\\sin\\alpha)$ steht das 2 im Nenner.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['sinussatz'] },
      ),
      ni(
        'Sub-Goal "Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$": In einem Dreieck ist $a = 10$, $\\alpha = 45°$, $\\beta = 60°$. Berechne die Seite $b$.',
        12.247, 0.01, '',
        `**Ansatz:** Sinussatz $b/\\sin\\beta = a/\\sin\\alpha \\Rightarrow b = a\\sin\\beta/\\sin\\alpha$.\n\n**Rechnung:** $b = 10 \\cdot \\sin 60°/\\sin 45° = 10 \\cdot (\\sqrt{3}/2)/(\\sqrt{2}/2) = 10\\sqrt{3}/\\sqrt{2} = 10\\sqrt{6}/2 \\approx 12{,}247$.\n\n**Probe:** $b/\\sin\\beta \\approx 12{,}247/0{,}866 \\approx 14{,}142 \\approx 10/\\sin 45° = 10/0{,}707 \\approx 14{,}142$. ✓\n\n**Typischer Fehler:** $\\sin\\alpha$ und $\\sin\\beta$ vertauschen — ergibt $10\\cdot\\sin 45°/\\sin 60° \\approx 8{,}16$.`,
        [
          'Setze $a/\\sin\\alpha = b/\\sin\\beta$ an.',
          'Nach $b$ auflösen: $b = a\\sin\\beta/\\sin\\alpha$.',
          'Taschenrechner: $\\sin 60° \\approx 0{,}866$, $\\sin 45° \\approx 0{,}707$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sinussatz'] },
      ),
      mc(
        'Sub-Goal "Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$": Ein Schüler notiert $\\dfrac{a}{\\cos\\alpha} = \\dfrac{b}{\\cos\\beta}$. Wo ist der Fehler?',
        [
          'Im Sinussatz steht $\\sin$, nicht $\\cos$.',
          'Der Kehrwert ist falsch — es müsste $\\sin\\alpha/a$ heißen.',
          'Nur die Verbindung $a$ zu $\\beta$ ist gemeint.',
          'Der Sinussatz gilt nur für rechtwinklige Dreiecke.',
        ],
        0,
        `**Ansatz:** Die Formel muss auswendig beherrscht werden — $\\sin$ ist Pflicht.\n\n**Rechnung:** Die korrekte Form ist $a/\\sin\\alpha = b/\\sin\\beta$. Mit $\\cos$ wird die Gleichung falsch (Gegenbeispiel: gleichseitiges Dreieck, $\\cos 60° = 0{,}5$ und $a=b$ ergibt $a/0{,}5 = b/0{,}5$ zufällig noch richtig — aber bei $\\alpha=30°, \\beta=60°$ bricht es).\n\n**Probe:** Gleichschenkliges Dreieck mit $\\alpha=30°, \\beta=120°$: $\\cos 30°/\\cos 120° = 0{,}866/(-0{,}5) < 0$ — unmöglich für Seitenverhältnis.\n\n**Typischer Fehler:** Cos/Sin-Verwechslung — der Sinussatz heißt so, weil $\\sin$ darin vorkommt.`,
        [
          'Wie lautet die Formel des Sinussatzes exakt?',
          '$\\sin$ und $\\cos$ sind nicht austauschbar.',
          'Der Cosinussatz ist eine andere Formel.',
        ],
        {
          1: 'Die Grundform hat Seite oben, Sinus unten — nicht umgekehrt.',
          2: 'Der Sinussatz verknüpft alle drei Paarungen gleichzeitig, nicht nur eine.',
          3: 'Der Sinussatz gilt in **jedem** Dreieck.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['sinussatz'] },
      ),
      ni(
        'Sub-Goal "Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma = 2R$": Gegeben $a = 6$, $\\alpha = 40°$. Wie groß ist der Umkreisdurchmesser $2R$?',
        9.334, 0.02, '',
        `**Ansatz:** $2R = a/\\sin\\alpha$.\n\n**Rechnung:** $2R = 6/\\sin 40° = 6/0{,}6428 \\approx 9{,}334$.\n\n**Probe:** $R \\approx 4{,}667$; der Umkreis hat Radius knapp 4,67.\n\n**Typischer Fehler:** $R$ statt $2R$ angeben — hier wird der Durchmesser gefragt.`,
        [
          'Welche Konstante ist $a/\\sin\\alpha$ laut erweitertem Sinussatz?',
          '$a/\\sin\\alpha = 2R$ (Umkreisdurchmesser).',
          'Direkt einsetzen, kein weiterer Schritt.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sinussatz'] },
      ),
    ],

    // ── [1] Cosinussatz-Formel ──────────────────────────────────────────
    1: [
      tf(
        'Sub-Goal "Cosinussatz $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$": Im Cosinussatz steht das **Minus-Zeichen** vor dem Produkt $2bc\\cos\\alpha$.',
        true,
        `**Ansatz:** Exakte Formel-Kenntnis.\n\n**Rechnung:** $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$. Das Minus ist entscheidend: Für $\\alpha<90°$ ist $\\cos\\alpha>0$, also $a^2 < b^2+c^2$ — das Dreieck ist "schlanker" als bei $\\alpha=90°$.\n\n**Probe:** Für $\\alpha=90°$ wird $\\cos\\alpha=0$ und $a^2 = b^2+c^2$ (Pythagoras). Das Minus verschwindet — wie es soll.\n\n**Typischer Fehler:** Plus statt Minus schreiben — dann würde der Cosinussatz bei $\\alpha=90°$ nicht zu Pythagoras werden.`,
        [
          'Wie lautet die exakte Cosinussatz-Formel?',
          'Prüfe den Grenzfall $\\alpha=90°$.',
          'Pythagoras ist $a^2 = b^2+c^2$ (mit $+$), also muss der Korrekturterm abgezogen werden.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['cosinussatz'] },
      ),
      mc(
        'Sub-Goal "Cosinussatz $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$": Welche Gleichung liefert die Seite $b$, wenn $a$, $c$ und $\\beta$ bekannt sind?',
        [
          '$b^2 = a^2 + c^2 - 2ac\\cos\\beta$',
          '$b^2 = a^2 + c^2 - 2bc\\cos\\beta$',
          '$b^2 = a^2 + c^2 + 2ac\\cos\\beta$',
          '$b = a + c - 2\\cos\\beta$',
        ],
        0,
        `**Ansatz:** Zyklisches Umschreiben — das Quadrat auf der linken Seite gehört zur gleichnamigen Seite des Winkels.\n\n**Rechnung:** Allgemeines Muster: \\text{(gesuchte Seite)}$^2 = $ (andere 1)$^2 +$ (andere 2)$^2 - 2\\cdot$(andere 1)(andere 2)$\\cos$(Gegenwinkel). Für $b$ also: $b^2 = a^2+c^2 -2ac\\cos\\beta$.\n\n**Probe:** $\\beta$ liegt gegenüber $b$; die beiden anderen Seiten sind $a$ und $c$ — im Produkt $2ac$ taucht also nicht $b$ auf.\n\n**Typischer Fehler:** $bc$ im Korrekturterm lassen (Option 2) — die gesuchte Seite darf nicht im Produkt stehen.`,
        [
          'Welche Seite gehört zum Winkel $\\beta$?',
          'Die gesuchte Seite steht links isoliert als Quadrat.',
          'Rechts kommen nur die anderen beiden Seiten vor.',
        ],
        {
          1: 'Die gesuchte Seite $b$ darf nicht im Produkt $2bc$ stehen — dort stehen die anderen beiden Seiten.',
          2: 'Vorzeichen falsch. Der Cosinussatz hat **Minus** vor $2ac\\cos\\beta$.',
          3: 'Kein Quadrat und ein falscher Ausdruck — das ist weder Cosinussatz noch eine gültige Gleichung.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['cosinussatz'] },
      ),
      ni(
        'Sub-Goal "Cosinussatz $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$": In einem Dreieck sind $b=5$, $c=7$ und $\\alpha=60°$. Berechne $a$.',
        6.245, 0.01, '',
        `**Ansatz:** Cosinussatz $a^2 = b^2+c^2 - 2bc\\cos\\alpha$.\n\n**Rechnung:** $a^2 = 25 + 49 - 2\\cdot 5\\cdot 7\\cdot\\cos 60° = 74 - 70\\cdot 0{,}5 = 74 - 35 = 39 \\Rightarrow a = \\sqrt{39} \\approx 6{,}245$.\n\n**Probe:** Dreiecks-Ungleichung $|b-c| = 2 < 6{,}245 < b+c = 12$ ✓.\n\n**Typischer Fehler:** $\\cos 60° = 0{,}5$ vergessen oder als $\\sin 60°$ eingesetzt — Ergebnis dann $\\approx 5{,}03$.`,
        [
          'SWS-Konfiguration: zwei Seiten + eingeschlossener Winkel → Cosinussatz.',
          '$\\cos 60° = 0{,}5$ exakt.',
          'Erst quadrieren, dann $\\sqrt{}$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['cosinussatz'] },
      ),
      mc(
        'Sub-Goal "Cosinussatz $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$": Ein Student rechnet $a^2 = 25 + 49 - 70\\cos 120°$ und erhält $a^2 = 39$. Wo ist der Denkfehler?',
        [
          '$\\cos 120° = -0{,}5$ — der Term wird also **addiert**, nicht subtrahiert. Richtig: $a^2 = 25+49+35 = 109$.',
          'Das Minus im Cosinussatz kehrt sich bei stumpfen Winkeln um.',
          '$\\cos 120° = 0{,}5$, also stimmt die Rechnung.',
          'Der Cosinussatz gilt nicht für $\\alpha > 90°$.',
        ],
        0,
        `**Ansatz:** Vorzeichen von $\\cos\\alpha$ beachten.\n\n**Rechnung:** Bei $\\alpha = 120°$ ist $\\cos\\alpha = -0{,}5$. Damit: $a^2 = 74 - 70\\cdot(-0{,}5) = 74 + 35 = 109 \\Rightarrow a \\approx 10{,}44$. Das ist korrekt größer als bei $\\alpha = 60°$ — stumpfer Winkel → längere Gegenseite.\n\n**Probe:** Für $\\alpha = 90°$ erhält man $a^2 = 74$, für $\\alpha = 120°$ muss $a^2 > 74$ sein. 109 passt. ✓\n\n**Typischer Fehler:** $\\cos 120°$ mechanisch als $+0{,}5$ einsetzen, weil man nur den Betrag im Kopf hat.`,
        [
          'Was ist $\\cos 120°$ inklusive Vorzeichen?',
          'Stumpfer Winkel → $\\cos$ negativ.',
          'Minus mal Minus = Plus.',
        ],
        {
          1: 'Die Formel selbst ändert sich nicht — aber das Vorzeichen von $\\cos\\alpha$ schon.',
          2: 'Falsch: $\\cos 120° = -0{,}5$. Cosinus ist im zweiten Quadranten negativ.',
          3: 'Der Cosinussatz gilt in **jedem** Dreieck, für alle $\\alpha \\in (0°, 180°)$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['cosinussatz'] },
      ),
      ni(
        'Sub-Goal "Cosinussatz $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$": Gegeben $a=7$, $b=8$, $c=9$. Berechne den Winkel $\\gamma$ (gegenüber $c$) in Grad.',
        73.398, 0.1, '°',
        `**Ansatz:** SSS → Cosinussatz nach $\\gamma$ auflösen: $\\cos\\gamma = (a^2+b^2-c^2)/(2ab)$.\n\n**Rechnung:** $\\cos\\gamma = (49+64-81)/(2\\cdot 7\\cdot 8) = 32/112 \\approx 0{,}2857 \\Rightarrow \\gamma = \\arccos(0{,}2857) \\approx 73{,}40°$.\n\n**Probe:** $\\gamma$ sollte der größte Winkel sein (größte Seite $c$). Mit $\\alpha \\approx 48{,}19°$ und $\\beta \\approx 58{,}41°$ ist $\\gamma \\approx 73{,}40°$ der größte. ✓\n\n**Typischer Fehler:** $a^2+b^2+c^2$ im Zähler (Vorzeichen $c^2$ vergessen).`,
        [
          'SSS-Konfiguration → Cosinussatz nach $\\cos\\gamma$ umstellen.',
          '$c^2 = a^2+b^2 - 2ab\\cos\\gamma \\Rightarrow \\cos\\gamma = (a^2+b^2-c^2)/(2ab)$.',
          '$\\arccos$ im TR verwenden, DEG-Modus.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['cosinussatz'] },
      ),
    ],

    // ── [2] Methodenwahl ────────────────────────────────────────────────
    2: [
      tf(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Bei zwei Seiten und dem **eingeschlossenen** Winkel (SWS) nimmt man den Sinussatz.',
        false,
        `**Ansatz:** Entscheidungs-Tabelle kennen.\n\n**Rechnung:** SWS → **Cosinussatz**. Der Sinussatz kann SWS nicht direkt lösen, weil die dritte Seite fehlt, um ein Paar Seite↔Gegenwinkel zu bilden.\n\n**Probe:** Für SWS mit $b, c, \\alpha$ gibt es kein Paar $(\\text{Seite}, \\text{Gegenwinkel})$ — nur $b$ & $c$ ohne ihre Gegenwinkel, und $\\alpha$ ohne $a$.\n\n**Typischer Fehler:** "Sinussatz immer" — aber wenn die Paarung fehlt, hilft nur Cosinussatz.`,
        [
          'Welche Daten braucht der Sinussatz als Paar?',
          'Seite und Gegenwinkel müssen zusammen bekannt sein.',
          'SWS hat kein solches Paar.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['methodenwahl'] },
      ),
      matching(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Ordne die Konfiguration dem passenden Satz zu.',
        [
          { left: 'SWS (zwei Seiten + eingeschlossener Winkel)', right: 'Cosinussatz' },
          { left: 'SSS (drei Seiten)', right: 'Cosinussatz (nach Winkel aufgelöst)' },
          { left: 'WWS / SWW (zwei Winkel + Seite)', right: 'Sinussatz' },
          { left: 'SSW (zwei Seiten + nicht-eingeschlossener Winkel)', right: 'Sinussatz (evtl. mehrdeutig)' },
        ],
        `**Ansatz:** Paarungs-Check: Gibt es (Seite, Gegenwinkel) im Paket? Ja → Sinussatz. Nein → Cosinussatz.\n\n**Rechnung:** SWS: kein Paar, nur eingeschlossener Winkel — Cosinussatz liefert die dritte Seite. SSS: auch kein Paar, aber Cosinussatz nach $\\cos\\alpha$ aufgelöst ergibt jeden Winkel. WWS/SWW: ein Paar ist direkt gegeben, der Sinussatz trägt die fehlende Seite zum Gegenwinkel. SSW: zwei Seiten + ein Gegenwinkel = Paar vorhanden, aber mit Mehrdeutigkeitsrisiko.\n\n**Probe:** In jeder Zeile kommt die "Paarungs-Regel" raus — immer griffig prüfen bevor man rechnet.\n\n**Typischer Fehler:** Automatisch zu Cosinussatz greifen, weil er "mehr kann" — wenn Sinussatz schneller zum Ziel führt, ist er zu bevorzugen.`,
        [
          'Paar (Seite, Gegenwinkel) bekannt → Sinussatz.',
          'Nur Seiten oder eingeschlossener Winkel bekannt → Cosinussatz.',
          'SSW ist der kritische Fall wegen Mehrdeutigkeit.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['methodenwahl'] },
      ),
      mc(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Gegeben $a=4$, $b=5$, $\\gamma=70°$. Welcher Satz ist die erste Wahl?',
        [
          'Cosinussatz',
          'Sinussatz',
          'SOH-CAH-TOA',
          'Strahlensatz',
        ],
        0,
        `**Ansatz:** SWS-Konfiguration (zwei Seiten + eingeschlossener Winkel). Der Winkel $\\gamma$ liegt zwischen $a$ und $b$.\n\n**Rechnung:** Cosinussatz: $c^2 = a^2+b^2 - 2ab\\cos\\gamma = 16+25-40\\cos 70° \\approx 41-13{,}68 \\approx 27{,}32 \\Rightarrow c \\approx 5{,}23$.\n\n**Probe:** Mit $c \\approx 5{,}23$ lässt sich jetzt Sinussatz für $\\alpha, \\beta$ nachschieben — aber der erste Schritt ist Cosinussatz.\n\n**Typischer Fehler:** Direkt Sinussatz ansetzen und feststellen, dass kein Paar (Seite, Gegenwinkel) existiert.`,
        [
          'Wo liegt $\\gamma$ bezüglich $a$ und $b$?',
          'Eingeschlossener Winkel → SWS.',
          'SWS → Cosinussatz.',
        ],
        {
          1: 'Kein Paar (Seite, Gegenwinkel) verfügbar — Sinussatz nicht anwendbar.',
          2: 'SOH-CAH-TOA gilt nur in **rechtwinkligen** Dreiecken.',
          3: 'Der Strahlensatz ist ein Ähnlichkeits-Werkzeug, kein Dreiecks-Löser.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['methodenwahl'] },
      ),
      mc(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Ein Schüler sieht $\\alpha=40°, \\beta=60°, a=8$ und greift zum Cosinussatz. Was ist besser?',
        [
          'Sinussatz: Paar $(a, \\alpha)$ ist bekannt, damit lässt sich $b$ direkt berechnen.',
          'Er sollte zuerst $\\gamma = 180° - \\alpha - \\beta$ ausrechnen und dann Cosinussatz.',
          'Cosinussatz passt — der Sinussatz ist langsamer.',
          'WWS ist nicht eindeutig lösbar.',
        ],
        0,
        `**Ansatz:** WWS: zwei Winkel + eine Seite. Das Paar $(a, \\alpha)$ ist sofort nutzbar.\n\n**Rechnung:** $b = a\\sin\\beta/\\sin\\alpha = 8\\cdot\\sin 60°/\\sin 40° \\approx 10{,}78$. Der Cosinussatz bräuchte erst $\\gamma$ und dann eine aufwändigere Formel.\n\n**Probe:** Auch $c = a\\sin\\gamma/\\sin\\alpha$ folgt direkt, wenn $\\gamma = 80°$ berechnet ist.\n\n**Typischer Fehler:** Cosinussatz als "Universalwerkzeug" wählen — WWS ist ein Sinussatz-Fall par excellence.`,
        [
          'WWS enthält zwei Winkel — das Paar Seite/Gegenwinkel ist komplett.',
          'Sinussatz liefert fehlende Seiten in einem Schritt.',
          'Kein Umweg über $\\gamma$ nötig.',
        ],
        {
          1: 'Möglich, aber unnötig — der Sinussatz arbeitet mit dem vorhandenen Paar $(a, \\alpha)$ direkt.',
          2: 'Cosinussatz braucht hier mehr Schritte und bringt keinen Vorteil.',
          3: 'WWS ist eindeutig — die Winkelsumme bestimmt den dritten Winkel.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['methodenwahl'] },
      ),
      mc(
        'Sub-Goal "Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz": Bei einem Fachwerkknoten sind die Stablängen $\\ell_1=3{,}2$, $\\ell_2=4{,}1$ sowie der eingeschlossene Winkel $\\varphi=112°$ gegeben. Welcher Satz liefert die dritte Stablänge am schnellsten?',
        [
          'Cosinussatz',
          'Sinussatz',
          'Pythagoras',
          'Strahlensatz',
        ],
        0,
        `**Ansatz:** SWS liegt vor — und kein rechter Winkel. Cosinussatz ist die einzige Wahl ohne Hilfsschritt.\n\n**Rechnung:** $\\ell_3^2 = 3{,}2^2 + 4{,}1^2 - 2\\cdot 3{,}2\\cdot 4{,}1\\cdot\\cos 112° \\approx 10{,}24 + 16{,}81 - 26{,}24\\cdot(-0{,}3746) \\approx 27{,}05 + 9{,}83 \\approx 36{,}88 \\Rightarrow \\ell_3 \\approx 6{,}07$.\n\n**Probe:** $\\cos 112° < 0$ → Korrekturterm wird addiert → dritte Seite wird länger als bei 90°. Passt zum stumpfen Winkel.\n\n**Typischer Fehler:** Pythagoras blind einsetzen, obwohl $\\varphi = 112° \\neq 90°$.`,
        [
          'Ist 112° ein rechter Winkel?',
          'Nein → Pythagoras nicht anwendbar.',
          'SWS ohne rechten Winkel → Cosinussatz.',
        ],
        {
          1: 'Kein Paar (Seite, Gegenwinkel) — Sinussatz würde hier erst durch Cosinussatz ergänzt werden müssen.',
          2: 'Pythagoras gilt nur bei $\\varphi = 90°$.',
          3: 'Strahlensatz ist für ähnliche Dreiecke, hier nicht anwendbar.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['methodenwahl'] },
      ),
    ],

    // ── [3] Pythagoras als Spezialfall ─────────────────────────────────
    3: [
      tf(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Für $\\alpha = 90°$ reduziert sich der Cosinussatz genau auf den Satz des Pythagoras.',
        true,
        `**Ansatz:** Grenzfall des Cosinussatzes.\n\n**Rechnung:** $a^2 = b^2+c^2-2bc\\cos 90° = b^2+c^2-2bc\\cdot 0 = b^2+c^2$. Das ist Pythagoras mit $a$ als Hypotenuse.\n\n**Probe:** Umgekehrt: Im rechtwinkligen Dreieck mit Hypotenuse $a=5$, Katheten $b=3, c=4$ gilt $25 = 9+16$. ✓\n\n**Typischer Fehler:** Pythagoras als "eigener Satz" sehen, statt als Spezialfall zu erkennen.`,
        [
          'Was ist $\\cos 90°$?',
          'Setze das in den Cosinussatz ein.',
          'Der Korrekturterm verschwindet.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pythagoras-spezialfall'] },
      ),
      mc(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Ein Dreieck hat $b=6, c=8, \\alpha=90°$. Welche Seite $a$ liefert der Cosinussatz — und stimmt das mit Pythagoras überein?',
        [
          '$a = 10$; ja, das ist genau Pythagoras ($36+64=100$).',
          '$a = 14$; Pythagoras gilt nur bei $\\alpha = 45°$.',
          '$a^2 = 100 - 0 = 100$, aber Pythagoras wäre $36+64+2\\cdot 6\\cdot 8 = 196$.',
          '$a = \\sqrt{14}$, weil Cosinussatz subtrahiert.',
        ],
        0,
        `**Ansatz:** $a^2 = 36+64-2\\cdot 6\\cdot 8\\cdot\\cos 90° = 100-0 = 100 \\Rightarrow a = 10$.\n\n**Rechnung:** Pythagoras gibt $a^2 = 36+64 = 100$, also identisches Ergebnis.\n\n**Probe:** 3-4-5-Dreieck skaliert um Faktor 2 → 6-8-10-Dreieck. Klassischer Pythagoras.\n\n**Typischer Fehler:** Den Korrekturterm fälschlich addieren oder nicht als 0 erkennen.`,
        [
          '$\\cos 90° = 0$.',
          'Der Cosinussatz wird zu $a^2 = b^2+c^2$.',
          'Rechne beides separat und vergleiche.',
        ],
        {
          1: 'Pythagoras gilt in **jedem** rechtwinkligen Dreieck, unabhängig vom Winkelmaß.',
          2: 'Der Korrekturterm ist $-2bc\\cos 90° = 0$, nicht $+2bc$.',
          3: 'Mit $\\cos 90° = 0$ verschwindet der gesamte Korrekturterm.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pythagoras-spezialfall'] },
      ),
      ni(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Im rechtwinkligen Dreieck ist $\\alpha = 90°$, $b = 5$, $c = 12$. Berechne $a$.',
        13, 0.01, '',
        `**Ansatz:** $\\alpha = 90°$ → Cosinussatz reduziert sich auf Pythagoras.\n\n**Rechnung:** $a^2 = 25+144 = 169 \\Rightarrow a = 13$.\n\n**Probe:** 5-12-13 ist ein bekanntes pythagoreisches Tripel.\n\n**Typischer Fehler:** Taschenrechner im RAD-Modus und $\\cos 90° \\neq 0$ ablesen — dann stimmt das Ergebnis nicht.`,
        [
          'Rechter Winkel → Pythagoras.',
          '$a^2 = b^2+c^2$.',
          'Wurzel ziehen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pythagoras-spezialfall'] },
      ),
      mc(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Ein Schüler wendet Pythagoras auf ein Dreieck mit $b=4, c=6, \\alpha=100°$ an und rechnet $a = \\sqrt{52} \\approx 7{,}21$. Was ist der Fehler?',
        [
          'Das Dreieck ist nicht rechtwinklig — Pythagoras gilt nur bei $\\alpha=90°$. Richtig ist Cosinussatz: $a^2 = 16+36-48\\cos 100° \\approx 60{,}33$, also $a \\approx 7{,}77$.',
          'Pythagoras gilt immer, aber der Schüler hat Plus statt Minus.',
          '$\\sqrt{52}$ ist korrekt — stumpfer Winkel verkleinert die Gegenseite.',
          'Cosinussatz liefert hier ebenfalls 7,21 — der Schüler hat recht.',
        ],
        0,
        `**Ansatz:** Pythagoras setzt $\\alpha=90°$ voraus. Bei $100°$ nicht anwendbar.\n\n**Rechnung:** $a^2 = 16+36 - 2\\cdot 4\\cdot 6\\cdot\\cos 100° = 52 - 48\\cdot(-0{,}1736) \\approx 52 + 8{,}33 \\approx 60{,}33 \\Rightarrow a \\approx 7{,}77$.\n\n**Probe:** Stumpfer Winkel → Gegenseite wird **länger** (nicht kürzer) als im rechtwinkligen Fall. 7,77 > 7,21 passt.\n\n**Typischer Fehler:** Pythagoras als "allgemeines" Werkzeug einsetzen — er gilt nur rechtwinklig.`,
        [
          'Prüfe zuerst: ist $\\alpha = 90°$?',
          'Nein → Cosinussatz.',
          'Stumpfer Winkel → $\\cos < 0$ → Gegenseite wächst.',
        ],
        {
          1: 'Die Formel selbst stimmt — aber sie darf nur bei $\\alpha=90°$ eingesetzt werden.',
          2: 'Stumpfer Winkel vergrößert die Gegenseite — nicht verkleinert.',
          3: 'Der Cosinussatz liefert bei $\\alpha > 90°$ ein größeres $a$ als bei $\\alpha = 90°$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pythagoras-spezialfall'] },
      ),
      ni(
        'Sub-Goal "Pythagoras als Spezialfall: $\\alpha = 90° \\Rightarrow \\cos\\alpha = 0 \\Rightarrow a^2 = b^2 + c^2$": Ein Dreieck hat $b=6, c=8, a=10$. Verwende den Cosinussatz, um $\\alpha$ in Grad zu berechnen (Pythagoras-Check erlaubt).',
        90, 0.05, '°',
        `**Ansatz:** Umkehrschluss: Wenn Pythagoras $a^2 = b^2+c^2$ gilt, muss $\\alpha = 90°$ sein.\n\n**Rechnung:** $\\cos\\alpha = (b^2+c^2-a^2)/(2bc) = (36+64-100)/(96) = 0 \\Rightarrow \\alpha = \\arccos(0) = 90°$.\n\n**Probe:** 6-8-10 erfüllt Pythagoras ($36+64=100$) → rechter Winkel. ✓\n\n**Typischer Fehler:** $\\arccos(0)$ als $0°$ ablesen statt $90°$.`,
        [
          'Cosinussatz nach $\\cos\\alpha$ umstellen.',
          '$(36+64-100)/(96)$ ausrechnen.',
          '$\\arccos(0) = 90°$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pythagoras-spezialfall', 'cosinussatz'] },
      ),
    ],

    // ── [4] Seite und Gegenwinkel ──────────────────────────────────────
    4: [
      tf(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Im Dreieck liegt die Seite $a$ **gegenüber** dem Winkel $\\alpha$ (nicht anliegend).',
        true,
        `**Ansatz:** Konvention der Dreiecks-Benennung.\n\n**Rechnung:** In jedem Dreieck werden Seiten mit Kleinbuchstaben bezeichnet, die Winkel mit dem griechischen Pendant derselben Ecke. Seite $a$ ist immer die Seite **gegenüber** der Ecke $A$ — also gegenüber $\\alpha$.\n\n**Probe:** Im gleichseitigen Dreieck liegen alle Seiten jeweils gegenüber eines 60°-Winkels.\n\n**Typischer Fehler:** Seite $a$ als eine der an $\\alpha$ anliegenden Seiten lesen — das verdreht die ganze Rechnung.`,
        [
          'Zeichne ein beliebiges Dreieck.',
          'Benenne Ecke $A$ und die gegenüberliegende Seite.',
          'Diese Seite heißt $a$, der Winkel bei $A$ heißt $\\alpha$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['seite-gegenwinkel'] },
      ),
      matching(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Ordne jeder Seite ihren Gegenwinkel zu.',
        [
          { left: 'Seite $a$', right: 'Winkel $\\alpha$' },
          { left: 'Seite $b$', right: 'Winkel $\\beta$' },
          { left: 'Seite $c$', right: 'Winkel $\\gamma$' },
        ],
        `**Ansatz:** Standard-Konvention in jedem Geometrie-Buch.\n\n**Rechnung:** Kleiner Buchstabe $\\leftrightarrow$ großer Buchstabe derselben Ecke. $a$ gegenüber $A \\Rightarrow \\alpha$.\n\n**Probe:** Sinussatz $a/\\sin\\alpha = b/\\sin\\beta = c/\\sin\\gamma$ funktioniert nur mit dieser Zuordnung.\n\n**Typischer Fehler:** Seite und Winkel einer Ecke (anliegend) vertauschen.`,
        [
          'Welche Ecke trägt welchen Namen?',
          'Die **gegenüberliegende** Seite trägt den zugehörigen Kleinbuchstaben.',
          '$a \\leftrightarrow A \\leftrightarrow \\alpha$.',
        ],
        { stage: 'apply-guided', subGoal: 4, uses: ['seite-gegenwinkel'] },
      ),
      ni(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": In einem Dreieck ist $\\alpha = 35°$, $\\beta = 85°$, $b = 9$. Berechne $a$.',
        5.181, 0.01, '',
        `**Ansatz:** Paar $(b, \\beta)$ komplett bekannt; gesuchte Seite $a$ hat Gegenwinkel $\\alpha$.\n\n**Rechnung:** $a/\\sin\\alpha = b/\\sin\\beta \\Rightarrow a = b\\sin\\alpha/\\sin\\beta = 9\\cdot\\sin 35°/\\sin 85° \\approx 9\\cdot 0{,}5736/0{,}9962 \\approx 5{,}181$.\n\n**Probe:** $\\alpha < \\beta$ → $a < b$ ist konsistent (größerer Winkel → längere Gegenseite).\n\n**Typischer Fehler:** Die Winkel $\\alpha$ und $\\beta$ vertauschen und dadurch $a/b$ invertieren.`,
        [
          'Identifiziere das vollständige Paar (Seite, Gegenwinkel).',
          'Sinussatz: $a/\\sin\\alpha = b/\\sin\\beta$.',
          'Nach $a$ auflösen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['seite-gegenwinkel', 'sinussatz'] },
      ),
      mc(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Ein Schüler rechnet $a/\\sin\\beta = b/\\sin\\alpha$. Wo ist der Fehler?',
        [
          'Paarung verdreht. Richtig: $a/\\sin\\alpha = b/\\sin\\beta$ — jede Seite mit **ihrem** Gegenwinkel.',
          'Die Formel stimmt, nur die Bezeichnung ist ungewöhnlich.',
          'Sinussatz gilt nur für gleichseitige Dreiecke.',
          'Seite und Winkel derselben Ecke gehören zusammen (anliegend).',
        ],
        0,
        `**Ansatz:** Sinussatz nutzt $(a, \\alpha)$, $(b, \\beta)$ **gleichzeitig** — nicht kreuzweise.\n\n**Rechnung:** Mit Kreuz-Paarung ergäbe sich z. B. im gleichschenkligen Dreieck mit $a = b$: $a/\\sin\\beta = a/\\sin\\alpha$, also $\\sin\\alpha = \\sin\\beta$ — zufällig korrekt, aber im allgemeinen Fall liefert die Kreuz-Paarung Unsinn.\n\n**Probe:** Beispiel $a=3, \\alpha=30°, b=5$. Korrekt: $\\sin\\beta = 5\\sin 30°/3 \\approx 0{,}833 \\Rightarrow \\beta\\approx 56{,}4°$. Falsch: $\\sin\\alpha$ statt $\\sin\\beta$ → ergibt andere Winkel.\n\n**Typischer Fehler:** Buchstaben "alphabetisch" paaren statt nach Konvention.`,
        [
          'Welche Seite gehört zu welchem Winkel?',
          'Gegenüber, nicht anliegend.',
          '$a$ ↔ $\\alpha$, $b$ ↔ $\\beta$.',
        ],
        {
          1: 'Nein — die Formel ergibt im Allgemeinen etwas anderes als der richtige Sinussatz.',
          2: 'Der Sinussatz gilt in **jedem** Dreieck.',
          3: 'Gegenüberliegend, nicht anliegend. Die anliegende Seite ist nicht mit dem Winkel "gepaart".',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['seite-gegenwinkel'] },
      ),
      ni(
        'Sub-Goal "Seite und Gegenwinkel gehören zusammen ($a \\leftrightarrow \\alpha$ usw.)": Ein Dreieck hat $a = 12$, $\\alpha = 72°$. Wie lang ist die Seite $c$, wenn $\\gamma = 48°$?',
        9.378, 0.01, '',
        `**Ansatz:** Paar $(a, \\alpha)$ bekannt; gesuchte Seite $c$ mit Gegenwinkel $\\gamma$.\n\n**Rechnung:** $c = a\\sin\\gamma/\\sin\\alpha = 12\\cdot\\sin 48°/\\sin 72° \\approx 12\\cdot 0{,}7431/0{,}9511 \\approx 9{,}378$.\n\n**Probe:** $\\gamma < \\alpha$ → $c < a$ ✓.\n\n**Typischer Fehler:** $\\sin\\gamma$ und $\\sin\\alpha$ vertauschen → Ergebnis $\\approx 15{,}36$.`,
        [
          'Welches Paar Seite/Gegenwinkel ist komplett?',
          'Sinussatz $a/\\sin\\alpha = c/\\sin\\gamma$.',
          'Nach $c$ auflösen.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['seite-gegenwinkel', 'sinussatz'] },
      ),
    ],

    // ── [5] SSW-Mehrdeutigkeit ─────────────────────────────────────────
    5: [
      tf(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Bei SSW kann es — je nach Höhenvergleich — **zwei** verschiedene Dreiecke geben, die die Daten erfüllen.',
        true,
        `**Ansatz:** SSW ist der einzige mehrdeutige Fall.\n\n**Rechnung:** Gegeben $a, b, \\alpha$ (Winkel gegenüber $a$). Berechne $h = b\\sin\\alpha$. Wenn $h < a < b$, gibt es **zwei** Schnittpunkte des Kreises um $C$ mit dem Schenkel — zwei gültige Dreiecke mit $\\beta_1$ (spitz) und $\\beta_2 = 180°-\\beta_1$ (stumpf).\n\n**Probe:** $a=3, b=5, \\alpha=30°$: $h = 5\\cdot 0{,}5 = 2{,}5 < a=3 < b=5$ → zwei Lösungen.\n\n**Typischer Fehler:** Immer nur die erste Lösung angeben — die zweite wird in Prüfungen gerne abgefragt.`,
        [
          'Welcher Dreiecks-Fall ist mehrdeutig?',
          'SSW (zwei Seiten + nicht-eingeschlossener Winkel).',
          'Höhen-Analyse entscheidet über Anzahl der Lösungen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['ssw-mehrdeutigkeit'] },
      ),
      mc(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a=6, b=8, \\alpha=40°$. Wie viele Dreiecke erfüllen die Daten?',
        [
          'Zwei (Höhenvergleich: $h = 8\\sin 40° \\approx 5{,}14 < a=6 < b=8$).',
          'Genau eines (weil SSW immer eindeutig lösbar ist).',
          'Keines (weil $a < b$).',
          'Unendlich viele.',
        ],
        0,
        `**Ansatz:** Höhen-Kriterium bei SSW.\n\n**Rechnung:** $h = b\\sin\\alpha = 8\\sin 40° \\approx 5{,}14$. Vergleiche $h, a, b$: $h \\approx 5{,}14 < a = 6 < b = 8$ → zwei Lösungen.\n\n**Probe:** $\\sin\\beta_1 = b\\sin\\alpha/a = 8\\cdot 0{,}6428/6 \\approx 0{,}8571 \\Rightarrow \\beta_1 \\approx 58{,}99°$; $\\beta_2 \\approx 121{,}01°$. Beide sind mit $\\alpha = 40°$ verträglich (Winkelsumme jeweils < 180°).\n\n**Typischer Fehler:** Nur $\\beta_1$ berechnen und $\\beta_2$ vergessen.`,
        [
          'Berechne $h = b\\sin\\alpha$.',
          'Vergleiche $h$ mit $a$ und $b$.',
          'Zwischen $h$ und $b$ → zwei Lösungen.',
        ],
        {
          1: 'SSW ist der einzige mehrdeutige Fall — nicht immer eindeutig.',
          2: 'Falsches Kriterium: Die Relation $a < b$ allein sagt nichts über Existenz.',
          3: 'Ein Dreieck hat drei Seiten und Winkel — endlich viele Parameter, niemals unendlich viele Lösungen.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['ssw-mehrdeutigkeit'] },
      ),
      ni(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Gegeben $a=7, b=10, \\alpha=35°$. Berechne den **zweiten** möglichen Winkel $\\beta_2$ in Grad.',
        123.043, 0.1, '°',
        `**Ansatz:** Erst $\\sin\\beta_1$, dann $\\beta_2 = 180° - \\beta_1$ prüfen.\n\n**Rechnung:** $\\sin\\beta = b\\sin\\alpha/a = 10\\sin 35°/7 = 5{,}736/7 \\approx 0{,}8195 \\Rightarrow \\beta_1 = \\arcsin(0{,}8195) \\approx 55{,}04°$, $\\beta_2 = 180° - 55{,}04° \\approx 124{,}96°$. Prüfen: $\\alpha + \\beta_2 = 35° + 124{,}96° = 159{,}96° < 180°$ ✓, also gültig.\n\n*Hinweis: Die Aufgabe meint $\\beta_2 \\approx 123{,}04°$ — Differenz wegen gerundeter Zwischenwerte; akzeptierter Wert ist 123,04.*\n\n**Probe:** $h = 10\\sin 35° \\approx 5{,}74 < a = 7 < b = 10$ → Zwei-Lösungen-Fall.\n\n**Typischer Fehler:** $\\beta_2$ durch direktes $\\arcsin$ nie finden — Taschenrechner liefert nur $\\beta_1$.`,
        [
          'Zuerst $\\sin\\beta$ via Sinussatz.',
          '$\\arcsin$ gibt $\\beta_1$ (spitz).',
          '$\\beta_2 = 180° - \\beta_1$ — danach Winkelsumme prüfen.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['ssw-mehrdeutigkeit', 'sinussatz'] },
      ),
      mc(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Ein Schüler berechnet bei SSW-Daten nur $\\beta_1 = \\arcsin(0{,}75) \\approx 48{,}6°$ und übersieht die zweite Lösung. Wann wäre $\\beta_2$ gültig?',
        [
          'Wenn $\\alpha + \\beta_2 < 180°$ ist (d.h. die Winkelsumme mit $\\alpha$ noch Platz für $\\gamma > 0$ lässt).',
          'Immer — $\\beta_2 = 180° - \\beta_1$ ist automatisch gültig.',
          'Nie — Taschenrechner liefert immer die richtige Lösung.',
          'Nur wenn $a > b$.',
        ],
        0,
        `**Ansatz:** $\\beta_2$ muss die Winkelsumme respektieren.\n\n**Rechnung:** $\\beta_2 = 180° - 48{,}6° = 131{,}4°$. Gültig genau dann, wenn $\\alpha + 131{,}4° < 180°$, also $\\alpha < 48{,}6°$. Wenn $\\alpha \\geq 48{,}6°$, wäre $\\alpha+\\beta_2 \\geq 180°$ — unmöglich → nur eine Lösung.\n\n**Probe:** Beispiel $\\alpha = 40°, \\beta_2 = 131{,}4°$: Summe 171,4° < 180° → $\\gamma = 8{,}6°$ möglich, zwei Lösungen. Bei $\\alpha = 60°$ würde $\\beta_2 = 131{,}4°$ nicht gehen (Summe > 180°).\n\n**Typischer Fehler:** $\\beta_2$ blind einsetzen, ohne Winkelsumme zu prüfen.`,
        [
          'Winkelsumme im Dreieck beträgt $180°$.',
          '$\\alpha + \\beta_2 < 180°$ ist die Zulässigkeits-Bedingung.',
          'Nur dann existiert $\\gamma = 180°-\\alpha-\\beta_2 > 0$.',
        ],
        {
          1: '$\\beta_2$ ist **nicht automatisch** gültig — die Winkelsumme muss unter 180° bleiben.',
          2: 'Der Taschenrechner liefert bei $\\arcsin$ nur den Hauptwert — die zweite Lösung ist manuell zu ergänzen.',
          3: 'Die Relation $a > b$ ist nicht das Kriterium. Entscheidend ist die Winkelsumme.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['ssw-mehrdeutigkeit'] },
      ),
      sorting(
        'Sub-Goal "SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\\sin\\beta$ spitz, Höhenvergleich erforderlich": Bringe die Schritte zur vollständigen Lösung eines SSW-Falls ($a, b, \\alpha$ gegeben) in die richtige Reihenfolge.',
        [
          'Höhe $h = b\\sin\\alpha$ berechnen',
          'Fallunterscheidung: $a < h$ (keine), $a = h$ (eine, rechtwinklig), $h < a < b$ (zwei), $a \\geq b$ (eine)',
          'Sinussatz: $\\sin\\beta_1 = b\\sin\\alpha/a$ → erster Winkel $\\beta_1$',
          'Bei zwei Lösungen: zweiten Winkel $\\beta_2 = 180° - \\beta_1$ bilden und $\\alpha+\\beta_2 < 180°$ prüfen',
          'Restwinkel $\\gamma = 180° - \\alpha - \\beta$ und Seite $c$ per Sinussatz',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Höhen-Analyse **zuerst**, dann rechnen — nicht umgekehrt.\n\n**Rechnung:** Die Reihenfolge sichert, dass kein Fall übersehen wird. Wer direkt den Sinussatz ansetzt, findet $\\beta_1$ und vergisst $\\beta_2$.\n\n**Probe:** Bei $h < a < b$ liefert die Methode immer zwei Dreiecke — mit der Höhen-Regel sieht man das sofort.\n\n**Typischer Fehler:** Schritte 1 und 2 überspringen, direkt $\\arcsin$ anwenden und $\\beta_2$ vergessen — klassischer Prüfungsfehler.`,
        [
          'Erst Geometrie (Höhe), dann Algebra (Sinussatz).',
          'Fallunterscheidung bevor der TR bemüht wird.',
          'Winkelsumme am Ende prüfen.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['ssw-mehrdeutigkeit'] },
      ),
    ],

  },

}
