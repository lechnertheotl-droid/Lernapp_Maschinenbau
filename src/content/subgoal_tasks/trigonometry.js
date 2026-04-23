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
  // trig-3-5 — Sinussatz & Cosinussatz  (6 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'trig-3-5': {

    // ── [0] Sinussatz-Formel + Umkreisradius ────────────────────────────
    0: [
      mc(
        'Welcher Ausdruck ist gleich dem Durchmesser $2R$ des Umkreises eines Dreiecks?',
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
        'Ein Dreieck hat $a = 8$ und $\\alpha = 30°$. Wie groß ist der Umkreisradius $R$?',
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
        'Gegeben $a = 7$, $\\alpha = 40°$, $\\beta = 65°$. Berechne die Seite $b$ (auf 2 Nachkommastellen).',
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
        'Wenn in einem Dreieck alle drei Seiten gleich lang sind (gleichseitig), dann ist $R = a/\\sqrt{3}$.',
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
        'Ordne jede Seite ihrem passenden Sinussatz-Paar zu.',
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
        'Gegeben $b = 5$, $c = 7$, $\\alpha = 60°$. Berechne die dritte Seite $a$ (auf 2 Nachkommastellen).',
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
        'Für welchen Wert von $\\alpha$ wird der Korrekturterm $-2bc\\cos\\alpha$ **positiv** (d.h. $a^2 > b^2 + c^2$)?',
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
        'Aus $a=8$, $b=5$, $c=6$ lässt sich der Winkel $\\alpha$ mit $\\cos\\alpha = (b^2+c^2-a^2)/(2bc)$ berechnen.',
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
        'Ein Dreieck hat $a = 10$, $b = 6$, $c = 8$. Wie groß ist der Winkel $\\alpha$ (in Grad, ganzzahlig)?',
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
        'Ordne jeden Winkel seiner Cosinussatz-Gleichung zu.',
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
        'Ordne jede Dreiecks-Konfiguration dem passenden Berechnungsverfahren zu.',
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
        'Gegeben sind die Seiten $a = 4$, $b = 6$ und der Winkel $\\gamma = 55°$ (eingeschlossen zwischen $a$ und $b$). Welcher Satz liefert die Seite $c$ **direkt**?',
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
        'Wenn nur drei Seiten eines Dreiecks bekannt sind, ist der Sinussatz ausreichend, um alle Winkel zu berechnen.',
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
        'Bringe die Schritte zur Lösung eines Dreiecks mit SSS-Konfiguration ($a, b, c$ gegeben) in die richtige Reihenfolge.',
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
        'Gegeben $\\alpha = 35°$, $\\beta = 80°$ und $a = 4$. Welche Seite kannst du in **einem** Schritt direkt berechnen?',
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
        'Der Cosinussatz wird bei $\\alpha = 90°$ zum Satz des Pythagoras mit $a$ als Hypotenuse.',
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
        'Im Dreieck gilt $\\alpha = 90°$, $b = 9$, $c = 12$. Wie lang ist $a$?',
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
        'Warum ist Pythagoras ein Spezialfall des Cosinussatzes und nicht umgekehrt?',
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
        'Ein rechtwinkliges Dreieck hat Katheten $b = 7$ und $c = 24$. Wie lang ist die Hypotenuse?',
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
        'Für ein Dreieck mit $b=5$, $c=12$, $a=13$ gilt der Satz des Pythagoras — also ist das Dreieck rechtwinklig mit $\\alpha = 90°$.',
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
        'In einem Dreieck gilt $\\alpha = 30°$, $\\beta = 80°$, $a = 5$. Welche Gleichung liefert $b$?',
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
        'Ordne jeder Ecke (mit Winkel) die gegenüberliegende Seite zu.',
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
        'Wenn in einem Dreieck $\\alpha < \\beta$, dann ist $a < b$.',
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
        'In einem Dreieck ist $b = 10$, $\\beta = 50°$, $\\gamma = 70°$. Wie lang ist die Seite $c$ (auf 2 Nachkommastellen)?',
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
        'In einem Dreieck sind $a = 8$, $b = 5$, $c = 6$. Welcher Winkel ist der **größte**?',
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
        'Gegeben $a = 10$, $b = 8$, $\\alpha = 40°$ (SSW-Fall). Wie viele Dreiecke erfüllen diese Bedingungen?',
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
        'Bei SSW-Konfigurationen mit $a=7$, $b=10$, $\\alpha=30°$ gibt es zwei geometrisch mögliche Dreiecke.',
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
        'Gegeben $a = 4$, $b = 6$, $\\alpha = 30°$. Wie viele gültige Lösungen für das Dreieck gibt es? (Antwort als ganze Zahl: 0, 1 oder 2)',
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
        'Gegeben $a = 3$, $b = 10$, $\\alpha = 30°$. Wie viele Lösungen?',
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
        'Bringe die Schritte zur Lösung eines SSW-Falls (gegeben: $a, b, \\alpha$) in die richtige Reihenfolge.',
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
