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
  // Je 5 Aufgaben = 15 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-0': {

    // ── [0] Winkeltypen: spitz/recht/stumpf/gestreckt/voll ────────────────
    0: [
      mc(
        'Sub-Goal "Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$": Welche Klasse hat der Winkel $135°$?',
        [
          'stumpf',
          'spitz',
          'recht',
          'gestreckt',
        ],
        0,
        `**Ansatz:** Winkelklassen nach Grenzen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$ (exklusive Randpunkte), gestreckt $=180°$.

**Rechnung:** $135°$ liegt echt zwischen $90°$ und $180°$ → **stumpf**.

**Probe:** Am Einheitskreis: $135°$ zeigt in den 2. Quadrant (oben links), zwischen "gerade hoch" ($90°$) und "gerade links" ($180°$).

**Typischer Fehler:** "Stumpf = jeder Winkel größer $90°$" — das stimmt nur bis $180°$. $200°$ wäre bereits *überstumpf* (Vollwinkel-Bereich).`,
        [
          'Grenzen der Winkelklassen auswendig.',
          'Spitz $<90°$, stumpf zwischen $90°$ und $180°$.',
          '$135°$ liegt zwischen welchen Werten?',
        ],
        {
          1: 'Spitz wäre $<90°$. $135°$ ist deutlich größer als $90°$.',
          2: 'Rechter Winkel ist exakt $90°$. $135°$ ist $45°$ mehr.',
          3: 'Gestreckter Winkel ist exakt $180°$. $135°$ ist $45°$ weniger.',
        },
      ),
      ni(
        'Sub-Goal "Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$": Wie viele Grad hat ein rechter Winkel?',
        90, 0, '°',
        `**Ansatz:** Ein rechter Winkel = Viertel einer vollen Drehung.

**Rechnung:** $360° / 4 = 90°$.

**Probe:** Fensterecke, Buchecke, L-Form — alles rechte Winkel, also $90°$.

**Typischer Fehler:** $45°$ (das ist der halbe rechte Winkel) oder $180°$ (gestreckter Winkel) angeben.`,
        [
          'Viertel vom Vollkreis.',
          '$360° / 4 = ?$',
          'Ein rechter Winkel ist am Buchstabe "L" zu sehen.',
        ],
      ),
      tf(
        'Sub-Goal "Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$": Ein Winkel von $89°$ ist stumpf.',
        false,
        `**Ansatz:** Grenze zwischen spitz und stumpf liegt bei $90°$.

**Rechnung:** $89° < 90°$ → **spitz**, nicht stumpf.

**Probe:** Stumpf ist erst $>90°$. Auch $89{,}9°$ ist noch spitz.

**Typischer Fehler:** "Fast rechter Winkel" als stumpf einordnen. Die Grenze ist scharf: $89°$ spitz, $90°$ recht, $91°$ stumpf.`,
        [
          'Grenze ist exakt $90°$.',
          'Alles $<90°$ ist spitz.',
          'Alles $>90°$ (bis $180°$) ist stumpf.',
        ],
      ),
      matching(
        'Sub-Goal "Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$": Ordne jeden Winkel seiner Klasse zu.',
        [
          { left: '$30°$',    right: 'spitz' },
          { left: '$90°$',    right: 'recht' },
          { left: '$120°$',   right: 'stumpf' },
          { left: '$180°$',   right: 'gestreckt' },
        ],
        `**Ansatz:** Standardklassifizierung nach Grenzwerten.

**Rechnung:** $30° < 90°$ spitz. $90° = $ recht. $90° < 120° < 180°$ stumpf. $180° = $ gestreckt.

**Probe:** Von klein nach groß: spitz $\\to$ recht $\\to$ stumpf $\\to$ gestreckt $\\to$ überstumpf $\\to$ voll.

**Typischer Fehler:** Grenzwerte doppelt zählen — $90°$ ist nur recht, nicht spitz und nicht stumpf.`,
        [
          'Vier Hauptklassen: spitz, recht, stumpf, gestreckt.',
          'Grenzen sind exakt: $90°$ und $180°$.',
          '$0°$ ist Sonderfall (kein Winkel).',
        ],
      ),
      sorting(
        'Sub-Goal "Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$": Sortiere die Winkelklassen nach aufsteigender Größe.',
        [
          'spitz ($<90°$)',
          'recht ($=90°$)',
          'stumpf ($90°<x<180°$)',
          'gestreckt ($=180°$)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Klassifikation nach Winkelgröße.

**Rechnung:** $0° \\to 90°$ spitz, $90°$ recht, $90° \\to 180°$ stumpf, $180°$ gestreckt.

**Probe:** Jede Klasse hat einen klaren Bereich und die Reihenfolge folgt dem Winkelwert.

**Typischer Fehler:** "Voll" oder "überstumpf" dazwischen einsortieren — sie kommen erst nach $180°$.`,
        [
          'Aufsteigend nach Winkelwert.',
          'Spitz, recht, stumpf, gestreckt.',
          'Dann käme noch überstumpf ($180°$–$360°$) und voll ($360°$).',
        ],
      ),
    ],

    // ── [1] Innenwinkelsumme im Dreieck = 180° ────────────────────────────
    1: [
      ni(
        'Sub-Goal "Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen": In einem Dreieck ist $\\alpha = 60°$ und $\\beta = 75°$. Wie groß ist $\\gamma$ (in Grad)?',
        45, 0, '°',
        `**Ansatz:** Winkelsumme $\\alpha + \\beta + \\gamma = 180°$.

**Rechnung:** $\\gamma = 180° - 60° - 75° = 45°$.

**Probe:** Einsetzen: $60° + 75° + 45° = 180°$ ✓.

**Typischer Fehler:** Falsche Summe ($90°$ statt $180°$) oder Vorzeichenfehler beim Subtrahieren.`,
        [
          '$\\alpha + \\beta + \\gamma = 180°$.',
          '$\\gamma = 180° - \\alpha - \\beta$.',
          '$180 - 60 - 75 = ?$',
        ],
      ),
      mc(
        'Sub-Goal "Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen": In einem rechtwinkligen Dreieck ist ein nicht-rechter Winkel $35°$. Wie groß ist der andere nicht-rechte Winkel?',
        [
          '$55°$',
          '$145°$',
          '$65°$',
          '$35°$',
        ],
        0,
        `**Ansatz:** Rechtwinkliges Dreieck hat einen $90°$-Winkel. Die anderen zwei summieren sich zu $90°$.

**Rechnung:** $90° - 35° = 55°$.

**Probe:** $90° + 35° + 55° = 180°$ ✓.

**Typischer Fehler:** $180° - 35° = 145°$ rechnen und den rechten Winkel vergessen — das gäbe eine Innenwinkelsumme von $180° + 90° = 270°$, unmöglich.`,
        [
          'Rechter Winkel = $90°$.',
          'Rest zu $180°$: $90°$.',
          '$90° - 35° = ?$',
        ],
        {
          1: '$145°$ allein wäre schon stumpf und zusammen mit dem rechten Winkel über $180°$ — unmöglich im Dreieck.',
          2: '$65°$ würde $90° + 35° + 65° = 190°$ ergeben, zu viel.',
          3: '$35°$ zweimal würde $160°$ ergeben — fehlen $20°$ zur Winkelsumme.',
        },
      ),
      tf(
        'Sub-Goal "Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen": Ein Dreieck kann zwei stumpfe Winkel haben.',
        false,
        `**Ansatz:** Zwei stumpfe Winkel wären jeweils $>90°$, in Summe $>180°$.

**Rechnung:** Innenwinkelsumme im Dreieck ist $180°$. Schon zwei $91°$-Winkel ergeben $182° > 180°$.

**Probe:** Maximal ein Winkel kann stumpf sein (dann ist das Dreieck stumpfwinklig). Die anderen zwei müssen spitz sein.

**Typischer Fehler:** Annehmen, stumpfe Winkel könnten mehrfach auftreten — die Winkelsumme setzt eine harte Grenze.`,
        [
          'Winkelsumme: $180°$.',
          'Stumpf: $>90°$.',
          '$2 \\cdot $ stumpf $> 180°$ unmöglich.',
        ],
      ),
      matching(
        'Sub-Goal "Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen": Ordne jedem Dreieck den fehlenden Winkel $\\gamma$ zu.',
        [
          { left: '$\\alpha = 30°, \\beta = 60°$',    right: '$\\gamma = 90°$' },
          { left: '$\\alpha = 60°, \\beta = 60°$',    right: '$\\gamma = 60°$ (gleichseitig)' },
          { left: '$\\alpha = 90°, \\beta = 45°$',    right: '$\\gamma = 45°$' },
          { left: '$\\alpha = 100°, \\beta = 50°$',   right: '$\\gamma = 30°$' },
        ],
        `**Ansatz:** $\\gamma = 180° - \\alpha - \\beta$.

**Rechnung:**
· $180 - 30 - 60 = 90$
· $180 - 60 - 60 = 60$
· $180 - 90 - 45 = 45$
· $180 - 100 - 50 = 30$

**Probe:** Alle drei Winkel eines Dreiecks summieren sich zu $180°$ ✓.

**Typischer Fehler:** Rechenfehler beim Subtrahieren. Zählen hilft: von $180$ beide bekannten Winkel abziehen.`,
        [
          'Formel: $\\gamma = 180° - \\alpha - \\beta$.',
          'Summe der drei Winkel $= 180°$.',
          'Bei gleichen Winkeln: gleichschenkliges Dreieck.',
        ],
      ),
      sorting(
        'Sub-Goal "Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen": Bringe die Schritte zur Bestimmung des dritten Winkels in $\\alpha = 45°, \\beta = 55°$ in die richtige Reihenfolge.',
        [
          'Winkelsumme notieren: $\\alpha + \\beta + \\gamma = 180°$',
          'Nach $\\gamma$ umstellen: $\\gamma = 180° - \\alpha - \\beta$',
          'Werte einsetzen: $\\gamma = 180° - 45° - 55°$',
          'Ausrechnen: $\\gamma = 80°$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst Formel, dann Umstellung, dann einsetzen, dann rechnen.

**Rechnung:** $\\gamma = 80°$.

**Probe:** $45° + 55° + 80° = 180°$ ✓.

**Typischer Fehler:** Direkt Zahlen rechnen ohne Formel — fehleranfällig.`,
        [
          'Formel zuerst.',
          'Umstellen auf gesuchte Größe.',
          'Dann Zahlen einsetzen.',
        ],
      ),
    ],

    // ── [2] Scheitel-/Nebenwinkel ─────────────────────────────────────────
    2: [
      mc(
        'Sub-Goal "Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$": Zwei Geraden schneiden sich; einer der vier Winkel ist $70°$. Wie groß ist der gegenüberliegende (Scheitel-)Winkel?',
        [
          '$70°$',
          '$110°$',
          '$20°$',
          '$180°$',
        ],
        0,
        `**Ansatz:** **Scheitelwinkel** (gegenüberliegende Winkel an einem Schnittpunkt) sind immer gleich groß.

**Rechnung:** Der gegenüberliegende Winkel zu $70°$ ist ebenfalls $70°$.

**Probe:** Skizze: zwei Geraden bilden vier Winkel, die paarweise gleich sind (zwei zu $70°$, zwei zu $110°$). Summe aller vier = $360°$.

**Typischer Fehler:** Scheitel- und Nebenwinkel verwechseln: Scheitel = gegenüber, Nebenwinkel = direkt daneben.`,
        [
          'Scheitelwinkel = gegenüberliegende Winkel.',
          'Immer gleich groß.',
          'Nebenwinkel ergänzen auf $180°$.',
        ],
        {
          1: '$110°$ ist der **Nebenwinkel** zu $70°$, direkt daneben. Gegenüber liegt ein weiterer Winkel gleicher Größe wie $70°$.',
          2: '$20°$ ist die Komplementärwinkel-Rechnung ($90° - 70°$), hat nichts mit Scheitelwinkeln zu tun.',
          3: '$180°$ wäre nur die Summe von $70°$ und dem Nebenwinkel. Einzelwinkel ist nicht $180°$.',
        },
      ),
      ni(
        'Sub-Goal "Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$": Zwei Geraden schneiden sich. Ein Winkel ist $55°$. Wie groß ist der Nebenwinkel (in Grad)?',
        125, 0, '°',
        `**Ansatz:** Nebenwinkel ergänzen sich auf $180°$ (liegen auf einer geraden Linie).

**Rechnung:** $180° - 55° = 125°$.

**Probe:** Nachbarn auf einer Geraden: $55° + 125° = 180°$ ✓.

**Typischer Fehler:** $90° - 55° = 35°$ rechnen (Komplementärwinkel-Regel, nicht Nebenwinkel).`,
        [
          'Nebenwinkel = $180° - $ Originalwinkel.',
          '$180 - 55 = ?$',
          'Zwei Winkel auf einer Geraden ergeben $180°$.',
        ],
      ),
      tf(
        'Sub-Goal "Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$": Zwei Scheitelwinkel an einem Geradenkreuz sind immer gleich groß.',
        true,
        `**Ansatz:** Geometrische Eigenschaft des Geradenkreuzes.

**Rechnung:** Beide Winkelpaare (Scheitel) sind kongruent, weil sie jeweils den Nebenwinkel zum gleichen "mittleren" Winkel sind: $180° - \\alpha$ auf beiden Seiten.

**Probe:** Skizze: einer der vier Winkel ist $\\alpha$, seine Nachbarn sind $180° - \\alpha$, der gegenüberliegende ist wieder $\\alpha$. Symmetrie am Schnittpunkt.

**Typischer Fehler:** Scheitelwinkel mit Nebenwinkel verwechseln — nur Scheitelwinkel sind gleich, Nebenwinkel ergänzen auf $180°$.`,
        [
          'Scheitelwinkel liegen gegenüber.',
          'Gemeinsamer Scheitelpunkt.',
          'Winkel sind gleich groß (Kongruenz).',
        ],
      ),
      matching(
        'Sub-Goal "Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$": Ordne jedem Paar die Beziehung zu.',
        [
          { left: 'zwei gegenüberliegende Winkel',       right: 'Scheitelwinkel — gleich groß' },
          { left: 'zwei benachbarte Winkel auf Gerade',  right: 'Nebenwinkel — Summe $180°$' },
          { left: 'zwei Winkel im rechtwinkligen Dreieck (nicht rechter W.)', right: 'Summe $90°$ (komplementär)' },
          { left: 'zwei Winkel einer Geraden',           right: 'ergänzen auf $180°$' },
        ],
        `**Ansatz:** Geometrische Beziehungen an Geradenkreuzen und in Dreiecken.

**Rechnung:** Scheitel = gleich, Neben = $180°$, im rechtwinkligen Dreieck = $90°$ für die anderen zwei.

**Probe:** Skizzen erleichtern die Zuordnung.

**Typischer Fehler:** Scheitel- und Nebenwinkel verwechseln — visuell klarer Unterschied: gegenüber vs. nebeneinander.`,
        [
          'Gegenüber = Scheitel (gleich).',
          'Daneben = Neben ($180°$).',
          'Im 90°-Dreieck: Rest = $90°$ insgesamt.',
        ],
      ),
      sorting(
        'Sub-Goal "Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$": Bringe die Schritte zur Bestimmung aller vier Winkel an einem Geradenkreuz mit gegebenem $\\alpha = 40°$ in die richtige Reihenfolge.',
        [
          'Gegebener Winkel: $\\alpha = 40°$',
          'Scheitelwinkel (gegenüber) ist auch $40°$',
          'Nebenwinkel: $180° - 40° = 140°$ (auf beiden Seiten)',
          'Prüfen: Summe aller vier = $40 + 40 + 140 + 140 = 360°$ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Am Geradenkreuz gibt es zwei Paare gleich großer Winkel.

**Rechnung:** Zwei $40°$ und zwei $140°$.

**Probe:** Alle vier summieren sich zu $360°$ (voller Winkel um den Schnittpunkt).

**Typischer Fehler:** Nur zwei der vier Winkel angeben oder Scheitel- und Nebenwinkel vertauschen.`,
        [
          'Gegenüber = gleich.',
          'Daneben = Ergänzung zu $180°$.',
          'Vier Winkel summieren zu $360°$.',
        ],
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-1-4 — Vorzeichen und Quadranten  (3 subGoals)
  // Je 5 Aufgaben = 15 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-1-4': {

    // ── [0] Quadranten I-IV, Vorzeichen von sin (y) und cos (x) ───────────
    0: [
      mc(
        'Sub-Goal "Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen": In welchem Quadranten gilt $\\sin\\alpha < 0$ UND $\\cos\\alpha > 0$?',
        [
          '4. Quadrant ($270°$–$360°$)',
          '1. Quadrant ($0°$–$90°$)',
          '2. Quadrant ($90°$–$180°$)',
          '3. Quadrant ($180°$–$270°$)',
        ],
        0,
        `**Ansatz:** Punktlage am Einheitskreis nach Vorzeichen bestimmen.

**Rechnung:** $\\sin < 0$ heißt $y < 0$ (unterhalb x-Achse); $\\cos > 0$ heißt $x > 0$ (rechts der y-Achse). Beide Bedingungen zusammen: rechts-unten = 4. Quadrant.

**Probe:** $\\alpha = 300°$ (4. Q): $\\sin(300°) = -\\tfrac{\\sqrt{3}}{2} < 0$ ✓; $\\cos(300°) = \\tfrac{1}{2} > 0$ ✓.

**Typischer Fehler:** Die ASTC-Regel falsch interpretieren — im 4. Quadrant ist **nur** $\\cos$ positiv, $\\sin$ und $\\tan$ sind negativ.`,
        [
          '$\\sin = y$-Koordinate; $\\cos = x$-Koordinate.',
          '$y < 0$ (unten), $x > 0$ (rechts): welcher Quadrant?',
          'ASTC: nur Cos positiv = 4. Quadrant.',
        ],
        {
          1: '1. Q: beide positiv (ASTC: All). Hier aber $\\sin < 0$ verlangt.',
          2: '2. Q: nur Sinus positiv. Hier müsste $\\cos > 0$ sein, was im 2. Q aber nicht gilt.',
          3: '3. Q: beide negativ (nur Tangens positiv). Hier ist $\\cos < 0$, nicht $> 0$.',
        },
      ),
      ni(
        'Sub-Goal "Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen": In welchem Quadranten liegt der Winkel $\\alpha = 250°$? (Antwort als Zahl 1, 2, 3 oder 4.)',
        3, 0, '',
        `**Ansatz:** Quadrantengrenzen $0°$–$90°$–$180°$–$270°$–$360°$.

**Rechnung:** $180° < 250° < 270°$ → 3. Quadrant.

**Probe:** $\\sin(250°) \\approx -0{,}94 < 0$; $\\cos(250°) \\approx -0{,}34 < 0$. Beide negativ → 3. Q ✓.

**Typischer Fehler:** Zwischen 2. und 3. Q vertauschen — 2. Q endet bei $180°$, 3. Q beginnt ab $180°$.`,
        [
          '$90°, 180°, 270°, 360°$: Quadrantengrenzen.',
          '$250°$ liegt zwischen $180°$ und $270°$.',
          '3. Quadrant.',
        ],
      ),
      tf(
        'Sub-Goal "Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen": Im 3. Quadrant ist der Tangens positiv.',
        true,
        `**Ansatz:** ASTC-Regel: im 3. Quadrant ist nur **Tangens** positiv.

**Rechnung:** $\\tan = \\sin/\\cos$. Im 3. Q: $\\sin < 0$ und $\\cos < 0$. Ein Bruch aus zwei negativen Zahlen ist **positiv**. Also $\\tan > 0$.

**Probe:** $\\tan(225°) = \\sin(225°)/\\cos(225°) = (-\\tfrac{\\sqrt{2}}{2}) / (-\\tfrac{\\sqrt{2}}{2}) = +1$ ✓.

**Typischer Fehler:** Annehmen, alle Funktionen im 3. Q seien negativ — $\\sin$ und $\\cos$ ja, aber $\\tan$ positiv.`,
        [
          'ASTC: nur T positiv im 3. Q.',
          '$\\tan = \\sin / \\cos$.',
          'Minus durch Minus ist Plus.',
        ],
      ),
      matching(
        'Sub-Goal "Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen": Ordne jeden Quadrant dem Vorzeichenmuster von ($\\sin, \\cos, \\tan$) zu.',
        [
          { left: '1. Quadrant',     right: '$(+, +, +)$' },
          { left: '2. Quadrant',     right: '$(+, -, -)$' },
          { left: '3. Quadrant',     right: '$(-, -, +)$' },
          { left: '4. Quadrant',     right: '$(-, +, -)$' },
        ],
        `**Ansatz:** ASTC-Regel: All, Sin, Tan, Cos positiv.

**Rechnung:** Pro Quadrant welche Funktion(en) positiv:
· 1. Q: alle drei.
· 2. Q: nur Sin.
· 3. Q: nur Tan.
· 4. Q: nur Cos.

Alle anderen Vorzeichen sind negativ.

**Probe:** $\\tan$-Vorzeichen = $\\sin \\cdot \\cos$-Vorzeichenprodukt.

**Typischer Fehler:** Reihenfolge der ASTC-Regel verwechseln.`,
        [
          'ASTC-Merkspruch gegen Uhrzeigersinn.',
          'In jedem Q ist nur die genannte Funktion positiv.',
          'Tan = Sin / Cos.',
        ],
      ),
      sorting(
        'Sub-Goal "Quadranten I–IV durchnummerieren und Vorzeichen von $\\sin$ (y-Koordinate) und $\\cos$ (x-Koordinate) bestimmen": Bringe die Schritte zur Bestimmung der Vorzeichen von $\\sin(200°)$ und $\\cos(200°)$ in die richtige Reihenfolge.',
        [
          'Quadrant identifizieren: $180° < 200° < 270°$ → 3. Quadrant',
          'ASTC-Regel: im 3. Q ist nur Tangens positiv',
          '$\\sin(200°) < 0$ und $\\cos(200°) < 0$',
          'Kontrolle: $200° = 180° + 20°$; $\\sin(200°) = -\\sin(20°) < 0$ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Quadrant → ASTC → Vorzeichen → Kontrolle über Reduktionsformel.

**Rechnung:** Beide negativ.

**Probe:** $\\sin(200°) \\approx -0{,}342$, $\\cos(200°) \\approx -0{,}940$ ✓.

**Typischer Fehler:** ASTC-Regel ohne Quadrantenbestimmung anwenden.`,
        [
          'Quadrant zuerst.',
          'Dann ASTC.',
          'Dann Vorzeichen.',
        ],
      ),
    ],

    // ── [1] Symmetrien: sin(180°-α) = sin α, cos(180°-α) = -cos α ─────────
    1: [
      mc(
        'Sub-Goal "Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$": Welche Identität gilt für jeden Winkel $\\alpha$?',
        [
          '$\\sin(180° - \\alpha) = \\sin\\alpha$',
          '$\\sin(180° - \\alpha) = -\\sin\\alpha$',
          '$\\cos(180° - \\alpha) = \\cos\\alpha$',
          '$\\sin(180° - \\alpha) = \\cos\\alpha$',
        ],
        0,
        `**Ansatz:** Symmetrie des Einheitskreises an der y-Achse.

**Rechnung:** Bei Spiegelung an der y-Achse bleibt die y-Koordinate ($\\sin$) gleich, die x-Koordinate ($\\cos$) wechselt Vorzeichen. Also $\\sin(180° - \\alpha) = \\sin\\alpha$ (positiv bleibt) und $\\cos(180° - \\alpha) = -\\cos\\alpha$ (Vorzeichenwechsel).

**Probe:** $\\sin(180° - 30°) = \\sin(150°) = 0{,}5 = \\sin(30°)$ ✓. $\\cos(150°) = -\\cos(30°) \\approx -0{,}866$ ✓.

**Typischer Fehler:** Supplementsymmetrie bei Kosinus unverändert lassen — das Minuszeichen ist entscheidend.`,
        [
          'Spiegelung an der y-Achse.',
          '$\\sin$ (y-Koordinate) bleibt.',
          '$\\cos$ (x-Koordinate) wechselt Vorzeichen.',
        ],
        {
          1: '$\\sin$ bleibt unverändert bei Spiegelung an y-Achse, keine Vorzeichenwechsel.',
          2: '$\\cos$ wechselt Vorzeichen: $\\cos(180° - \\alpha) = -\\cos\\alpha$, nicht $+\\cos\\alpha$.',
          3: '$\\sin$ und $\\cos$ werden durch Supplementwinkel nicht ineinander überführt — das ist die Kofunktionsregel ($\\sin(90° - \\alpha) = \\cos\\alpha$).',
        },
      ),
      ni(
        'Sub-Goal "Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$": Berechne $\\sin(170°)$ ohne Taschenrechner, indem du die Symmetrie ausnutzt. (Ergebnis auf 4 Nachkommastellen — verwende $\\sin(10°) \\approx 0{,}1736$.)',
        0.1736, 0.001, '',
        `**Ansatz:** Supplementsymmetrie: $\\sin(180° - \\alpha) = \\sin\\alpha$ mit $\\alpha = 10°$.

**Rechnung:** $\\sin(170°) = \\sin(180° - 10°) = \\sin(10°) \\approx 0{,}1736$.

**Probe:** Taschenrechner: $\\sin(170°) \\approx 0{,}1736$ ✓.

**Typischer Fehler:** Minuszeichen wie bei $\\cos$ einfügen — bei $\\sin$ bleibt das Vorzeichen.`,
        [
          'Schreibe $170° = 180° - 10°$.',
          'Formel: $\\sin(180° - \\alpha) = \\sin\\alpha$.',
          'Kein Vorzeichenwechsel bei Sinus.',
        ],
      ),
      tf(
        'Sub-Goal "Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$": Für alle Winkel $\\alpha$ gilt $\\cos(180° - \\alpha) = -\\cos\\alpha$.',
        true,
        `**Ansatz:** Spiegelung des Einheitskreispunkts an der y-Achse.

**Rechnung:** Punkt bei $\\alpha$: $(x, y) = (\\cos\\alpha, \\sin\\alpha)$. Punkt bei $180° - \\alpha$: $(-x, y)$ (y-Achsen-Spiegelung). Also $\\cos(180° - \\alpha) = -x = -\\cos\\alpha$.

**Probe:** $\\cos(120°) = -\\cos(60°) = -0{,}5$ ✓.

**Typischer Fehler:** Minuszeichen bei $\\sin$ statt bei $\\cos$ einfügen.`,
        [
          'Spiegelung an y-Achse.',
          'x-Koordinate wechselt Vorzeichen.',
          '$\\cos$ ist x-Koordinate.',
        ],
      ),
      matching(
        'Sub-Goal "Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$": Ordne jeder Symmetrie den passenden Ausdruck zu.',
        [
          { left: '$\\sin(-\\alpha)$',          right: '$-\\sin\\alpha$ (Punktsymmetrie zu O)' },
          { left: '$\\cos(-\\alpha)$',          right: '$\\cos\\alpha$ (Achsensymmetrie zu x-Achse)' },
          { left: '$\\sin(180° - \\alpha)$',    right: '$\\sin\\alpha$ (Achsensymmetrie zu y-Achse)' },
          { left: '$\\cos(180° - \\alpha)$',    right: '$-\\cos\\alpha$ (Achsensymmetrie zu y-Achse)' },
        ],
        `**Ansatz:** Vier Grund-Symmetrien am Einheitskreis.

**Rechnung:** Jede Symmetrie ist über die Koordinatentransformation erklärbar.

**Probe:** Zahlentest mit $\\alpha = 30°$ für jede Zeile.

**Typischer Fehler:** $\\sin$ und $\\cos$ verwechseln — $\\sin$ ist ungerade (Vorzeichenwechsel bei $-\\alpha$), $\\cos$ ist gerade.`,
        [
          'Negation $-\\alpha$: $\\sin$ ungerade, $\\cos$ gerade.',
          'Supplement $180° - \\alpha$: $\\sin$ bleibt, $\\cos$ kippt.',
          'Spiegelachse ändert jeweils eine Koordinate.',
        ],
      ),
      sorting(
        'Sub-Goal "Symmetrien: $\\sin(180° - \\alpha) = \\sin\\alpha$, $\\cos(180° - \\alpha) = -\\cos\\alpha$": Bringe die Schritte zur Berechnung von $\\cos(150°)$ über Symmetrie in die richtige Reihenfolge.',
        [
          'Schreibe $150° = 180° - 30°$',
          'Formel: $\\cos(180° - \\alpha) = -\\cos\\alpha$',
          'Einsetzen: $\\cos(150°) = -\\cos(30°)$',
          'Grundwert: $\\cos(30°) = \\tfrac{\\sqrt{3}}{2}$, also $\\cos(150°) = -\\tfrac{\\sqrt{3}}{2}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Symmetrie-Formel → Einsetzen → Grundwert.

**Rechnung:** $\\cos(150°) = -\\tfrac{\\sqrt{3}}{2}$.

**Probe:** Taschenrechner: $\\cos(150°) \\approx -0{,}866$ ✓.

**Typischer Fehler:** Vorzeichenwechsel vergessen oder bei $\\sin$ einfügen.`,
        [
          'Supplementdarstellung.',
          'Formel mit Vorzeichenwechsel für $\\cos$.',
          'Grundwert einsetzen.',
        ],
      ),
    ],

    // ── [2] Reduktionsformel: jeden Winkel auf Referenzwinkel 0°-90° ──────
    2: [
      mc(
        'Sub-Goal "Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen": Was ist der Referenzwinkel von $225°$?',
        [
          '$45°$',
          '$135°$',
          '$225°$',
          '$315°$',
        ],
        0,
        `**Ansatz:** Referenzwinkel ist der Abstand zur **nächsten** x-Achse (bei $0°$ oder $180°$).

**Rechnung:** $225°$ liegt im 3. Quadrant. Abstand zur $180°$-Achse: $225° - 180° = 45°$.

**Probe:** $|\\sin(225°)| = \\sin(45°) = \\tfrac{\\sqrt{2}}{2}$ ✓. $|\\cos(225°)| = \\cos(45°)$ ✓.

**Typischer Fehler:** Abstand zur y-Achse nehmen oder die ganze Zahl als Referenz nehmen.`,
        [
          'Abstand zur nächsten x-Achse.',
          'Im 3. Q: Abstand zu $180°$.',
          '$225° - 180° = ?$',
        ],
        {
          1: '$135°$ wäre der Winkel zu y-Achse (270°); falsche Achsenwahl.',
          2: '$225°$ ist der Original-Winkel, nicht der Referenzwinkel.',
          3: '$315°$ wäre der Winkel zur $360°$-Vollumdrehung, nicht zur x-Achse.',
        },
      ),
      ni(
        'Sub-Goal "Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen": Berechne $\\sin(330°)$ mit der Reduktionsformel. Gib das Ergebnis als Dezimalzahl an.',
        -0.5, 0.01, '',
        `**Ansatz:** $330°$ im 4. Q; Referenzwinkel $360° - 330° = 30°$. Im 4. Q: $\\sin < 0$.

**Rechnung:** $\\sin(330°) = -\\sin(30°) = -0{,}5$.

**Probe:** Taschenrechner: $\\sin(330°) = -0{,}5$ ✓.

**Typischer Fehler:** Vorzeichen vergessen — im 4. Q ist $\\sin$ negativ (ASTC).`,
        [
          'Referenzwinkel: $360° - 330° = 30°$.',
          '4. Q: Vorzeichen von $\\sin$ negativ.',
          '$-\\sin(30°) = ?$',
        ],
      ),
      tf(
        'Sub-Goal "Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen": Der Referenzwinkel ist immer positiv und liegt zwischen $0°$ und $90°$.',
        true,
        `**Ansatz:** Definition des Referenzwinkels.

**Rechnung:** Per Konvention ist der Referenzwinkel der **spitzwinklige** Winkel zwischen Schenkel und x-Achse, daher immer $0° \\le \\theta_{\\text{ref}} \\le 90°$.

**Probe:** Egal in welchem Quadrant: $\\theta_{\\text{ref}} \\in [0°, 90°]$ per Konstruktion.

**Typischer Fehler:** Negative oder Winkel $>90°$ als Referenz angeben.`,
        [
          'Referenzwinkel: immer spitz.',
          'Abstand zur nächsten x-Achse.',
          'Zwischen 0° und 90°.',
        ],
      ),
      matching(
        'Sub-Goal "Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen": Ordne jedem Winkel seinen Referenzwinkel zu.',
        [
          { left: '$130°$',    right: '$50°$' },
          { left: '$200°$',    right: '$20°$' },
          { left: '$290°$',    right: '$70°$' },
          { left: '$95°$',     right: '$85°$' },
        ],
        `**Ansatz:** Je nach Quadrant: Abstand zur nächsten x-Achse.

**Rechnung:**
· 2. Q: $180° - $ Winkel.
· 3. Q: Winkel $- 180°$.
· 4. Q: $360° - $ Winkel.
· $130°$: $180 - 130 = 50$.
· $200°$: $200 - 180 = 20$.
· $290°$: $360 - 290 = 70$.
· $95°$: $180 - 95 = 85$.

**Probe:** Alle Referenzwinkel zwischen $0°$ und $90°$.

**Typischer Fehler:** Formel pro Quadrant nicht auseinanderhalten.`,
        [
          'Quadrant identifizieren.',
          'Abstand zur nächsten x-Achse.',
          'Bei 2./3. Q: $180°$ als Bezug; bei 4. Q: $360°$.',
        ],
      ),
      sorting(
        'Sub-Goal "Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen": Bringe die Schritte zur Berechnung von $\\cos(210°)$ in die richtige Reihenfolge.',
        [
          'Quadrant: $180° < 210° < 270°$ → 3. Quadrant',
          'Referenzwinkel: $210° - 180° = 30°$',
          'Vorzeichen im 3. Q: $\\cos < 0$',
          'Ergebnis: $\\cos(210°) = -\\cos(30°) = -\\tfrac{\\sqrt{3}}{2}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Quadrant → Referenzwinkel → Vorzeichen → Grundwert.

**Rechnung:** $\\cos(210°) = -\\tfrac{\\sqrt{3}}{2} \\approx -0{,}866$.

**Probe:** Taschenrechner bestätigt.

**Typischer Fehler:** Vorzeichenschritt überspringen.`,
        [
          'Quadrant zuerst.',
          'Referenzwinkel aus Abstand zur x-Achse.',
          'Vorzeichen per ASTC.',
        ],
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // trig-2-1 — Der Einheitskreis  (4 subGoals)
  // Je 5 Aufgaben = 20 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'trig-2-1': {

    // ── [0] Einheitskreis: r=1, x² + y² = 1 ──────────────────────────────
    0: [
      mc(
        'Sub-Goal "Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$": Welche Gleichung beschreibt den Einheitskreis?',
        [
          '$x^{2} + y^{2} = 1$',
          '$x + y = 1$',
          '$x^{2} + y^{2} = 2$',
          '$x^{2} - y^{2} = 1$',
        ],
        0,
        `**Ansatz:** Kreisgleichung mit Radius $r$: $x^{2} + y^{2} = r^{2}$. Beim Einheitskreis $r = 1$.

**Rechnung:** $x^{2} + y^{2} = 1^{2} = 1$.

**Probe:** Punkt $(1, 0)$: $1 + 0 = 1$ ✓. Punkt $(0, 1)$: $0 + 1 = 1$ ✓. Punkt $(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$: $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$ ✓.

**Typischer Fehler:** Linearer Term $x + y = 1$ statt quadratischer Pythagoras — das wäre eine Gerade, kein Kreis.`,
        [
          'Kreisgleichung: $x^{2} + y^{2} = r^{2}$.',
          'Radius des Einheitskreises.',
          '$r = 1 \\to r^{2} = 1$.',
        ],
        {
          1: '$x + y = 1$ ist eine Gerade, kein Kreis. Kreis braucht quadratische Terme.',
          2: '$x^{2} + y^{2} = 2$ ist Kreis um den Ursprung mit $r = \\sqrt{2}$, nicht Einheitskreis.',
          3: '$x^{2} - y^{2} = 1$ ist eine Hyperbel, kein Kreis. Kreis verlangt Summe, nicht Differenz der Quadrate.',
        },
      ),
      ni(
        'Sub-Goal "Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$": Liegt der Punkt $P = (0{,}6, 0{,}8)$ auf dem Einheitskreis? Antwort: $0{,}6^{2} + 0{,}8^{2} = ?$',
        1, 0.001, '',
        `**Ansatz:** Einheitskreis-Kriterium: $x^{2} + y^{2} = 1$.

**Rechnung:** $0{,}36 + 0{,}64 = 1$ → liegt **auf** dem Einheitskreis.

**Probe:** 3-4-5 Dreieck skaliert auf Hypotenuse 1: $(3/5, 4/5) = (0{,}6, 0{,}8)$.

**Typischer Fehler:** $x + y$ statt $x^{2} + y^{2}$ berechnen und $1{,}4$ als Antwort geben.`,
        [
          'Kriterium: $x^{2} + y^{2} = 1$.',
          '$0{,}6^{2} + 0{,}8^{2}$.',
          '$0{,}36 + 0{,}64 = ?$',
        ],
      ),
      tf(
        'Sub-Goal "Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$": Der Punkt $(1, 1)$ liegt auf dem Einheitskreis.',
        false,
        `**Ansatz:** Einheitskreis-Test.

**Rechnung:** $1^{2} + 1^{2} = 2 \\neq 1$. Punkt liegt **nicht** auf dem Einheitskreis, sondern außerhalb (Distanz $\\sqrt{2}$).

**Probe:** Distanz zum Ursprung $= \\sqrt{2} \\approx 1{,}41 > 1$.

**Typischer Fehler:** "Beide Koordinaten $\\le 1$, also auf dem Kreis" — das ist nicht das Kriterium. Es muss $x^{2} + y^{2} = 1$ exakt gelten.`,
        [
          'Kriterium: $x^{2} + y^{2} = 1$.',
          'Teste $(1, 1)$.',
          'Summe der Quadrate $= ?$',
        ],
      ),
      matching(
        'Sub-Goal "Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$": Ordne jedem Punkt die Lage bezüglich des Einheitskreises zu.',
        [
          { left: '$(1, 0)$',           right: 'auf dem Einheitskreis' },
          { left: '$(0{,}5, 0{,}5)$',   right: 'innerhalb (Abstand $< 1$)' },
          { left: '$(2, 0)$',           right: 'außerhalb (Abstand $> 1$)' },
          { left: '$(-0{,}6, 0{,}8)$',  right: 'auf dem Einheitskreis' },
        ],
        `**Ansatz:** Kriterium $x^{2} + y^{2} \\stackrel{?}{=} 1$.

**Rechnung:** $(1,0)$: $1 = 1$ auf Kreis. $(0{,}5, 0{,}5)$: $0{,}5 < 1$ innerhalb. $(2,0)$: $4 > 1$ außerhalb. $(-0{,}6, 0{,}8)$: $0{,}36 + 0{,}64 = 1$ auf Kreis.

**Probe:** Geometrisch: Einheitskreis hat Radius $1$. Innere Punkte haben Abstand $<1$, äußere $>1$.

**Typischer Fehler:** Vorzeichen spielen keine Rolle beim Abstand (wegen Quadrierung).`,
        [
          'Abstand zum Ursprung $= \\sqrt{x^{2}+y^{2}}$.',
          'Auf Kreis: Abstand $= 1$.',
          'Vorzeichen egal (quadriert).',
        ],
      ),
      sorting(
        'Sub-Goal "Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$": Bringe die Schritte zur Prüfung, ob $(-0{,}8, 0{,}6)$ auf dem Einheitskreis liegt, in die richtige Reihenfolge.',
        [
          'Kriterium notieren: $x^{2} + y^{2} = 1$',
          'Werte einsetzen: $(-0{,}8)^{2} + 0{,}6^{2}$',
          'Quadrate ausrechnen: $0{,}64 + 0{,}36$',
          'Summe: $1{,}00$ → auf dem Einheitskreis',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier saubere Schritte für Einheitskreis-Test.

**Rechnung:** Punkt liegt auf Einheitskreis.

**Probe:** Entspricht Winkel $\\alpha \\approx 143{,}13°$ (2. Quadrant).

**Typischer Fehler:** Vorzeichen vor Quadrierung erhalten — $-0{,}8^{2} = -0{,}64$ statt $+0{,}64$. Quadrieren macht Vorzeichen immer positiv.`,
        [
          'Kriterium als Gleichung.',
          'Quadrate einzeln.',
          'Summe bilden.',
        ],
      ),
    ],

    // ── [1] Punkt auf Kreis P = (cos α, sin α) ────────────────────────────
    1: [
      mc(
        'Sub-Goal "Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn": Wie lauten die Koordinaten des Punkts auf dem Einheitskreis beim Winkel $\\alpha = 60°$?',
        [
          '$(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$',
          '$(\\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2})$',
          '$(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$',
          '$(60°, 60°)$',
        ],
        0,
        `**Ansatz:** $P = (\\cos\\alpha, \\sin\\alpha)$ mit $\\alpha = 60°$.

**Rechnung:** $\\cos(60°) = \\tfrac{1}{2}$, $\\sin(60°) = \\tfrac{\\sqrt{3}}{2}$. Punkt: $(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2})$.

**Probe:** $(\\tfrac{1}{2})^{2} + (\\tfrac{\\sqrt{3}}{2})^{2} = \\tfrac{1}{4} + \\tfrac{3}{4} = 1$ ✓ (auf Einheitskreis).

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen. Im 1. Quadrant (60°) ist $\\cos < \\sin$, weil der Winkel $> 45°$.`,
        [
          'Standardform: $P = (\\cos\\alpha, \\sin\\alpha)$.',
          'Grundwerte bei $60°$ auswendig.',
          'x-Koordinate ist $\\cos$, y ist $\\sin$.',
        ],
        {
          1: '$\\sin$ und $\\cos$ vertauscht — das wäre $\\alpha = 30°$, nicht $60°$.',
          2: 'Das wären die Koordinaten bei $\\alpha = 45°$ (gleichwertige $\\sin = \\cos$).',
          3: 'Koordinaten sind nicht Winkel-Zahlen, sondern $\\sin/\\cos$-Werte.',
        },
      ),
      ni(
        'Sub-Goal "Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn": Berechne die y-Koordinate des Punkts auf dem Einheitskreis bei $\\alpha = 150°$. (Auf 3 Dezimalstellen.)',
        0.5, 0.01, '',
        `**Ansatz:** y-Koordinate = $\\sin\\alpha$.

**Rechnung:** $\\sin(150°) = \\sin(180° - 30°) = \\sin(30°) = 0{,}5$.

**Probe:** $150°$ im 2. Quadrant, $\\sin > 0$ ✓.

**Typischer Fehler:** x-Koordinate berechnen (= $\\cos(150°) \\approx -0{,}866$) statt y.`,
        [
          'y-Koordinate = $\\sin\\alpha$.',
          '$\\sin(150°) = \\sin(30°)$ (Supplement).',
          '$\\sin(30°) = 0{,}5$.',
        ],
      ),
      tf(
        'Sub-Goal "Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn": Der Winkel $\\alpha$ wird vom positiven Teil der x-Achse gegen den Uhrzeigersinn gemessen.',
        true,
        `**Ansatz:** Mathematische Konvention zur Winkelmessung.

**Rechnung:** Ausgangslage: positive x-Achse = $\\alpha = 0°$. Gegen Uhrzeigersinn wächst $\\alpha$. Punkt landet im 1. Q (0-90°), dann 2. Q (90-180°), usw.

**Probe:** Bei $90°$ zeigt der Punkt nach oben = $(0, 1)$ ✓ (positive y-Achse).

**Typischer Fehler:** Mit dem Uhrzeigersinn messen (negative Winkel) oder von der y-Achse statt der x-Achse starten.`,
        [
          'Standard: x-Achse, gegen Uhrzeigersinn.',
          '$0°$ zeigt nach rechts.',
          '$90°$ zeigt nach oben.',
        ],
      ),
      matching(
        'Sub-Goal "Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn": Ordne jedem Winkel die Koordinaten auf dem Einheitskreis zu.',
        [
          { left: '$\\alpha = 0°$',      right: '$(1, 0)$' },
          { left: '$\\alpha = 45°$',     right: '$(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$' },
          { left: '$\\alpha = 90°$',     right: '$(0, 1)$' },
          { left: '$\\alpha = 180°$',    right: '$(-1, 0)$' },
        ],
        `**Ansatz:** Grundwerte auswendig.

**Rechnung:** Standardpositionen:
· $0°$: rechts, $(1, 0)$.
· $45°$: diagonal, beide $\\tfrac{\\sqrt{2}}{2}$.
· $90°$: oben, $(0, 1)$.
· $180°$: links, $(-1, 0)$.

**Probe:** Alle vier Punkte liegen auf Einheitskreis: $x^{2} + y^{2} = 1$ ✓.

**Typischer Fehler:** Bei $45°$ die Werte in Fraktionen vergessen — $(0{,}707, 0{,}707)$ ist äquivalent.`,
        [
          'Grundpunkte am Einheitskreis.',
          '$0°, 90°, 180°, 270°$: Achsenpunkte.',
          '$45°$: Diagonale, $\\sqrt{2}/2$ beidseitig.',
        ],
      ),
      sorting(
        'Sub-Goal "Punkt auf Kreis $P = (\\cos\\alpha, \\sin\\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn": Bringe die Schritte zur Bestimmung des Punkts bei $\\alpha = 135°$ in die richtige Reihenfolge.',
        [
          'Formel: $P = (\\cos\\alpha, \\sin\\alpha)$',
          '$\\cos(135°) = \\cos(180° - 45°) = -\\cos(45°) = -\\tfrac{\\sqrt{2}}{2}$',
          '$\\sin(135°) = \\sin(45°) = \\tfrac{\\sqrt{2}}{2}$',
          'Punkt: $(-\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Formel → $\\cos$ mit Supplement → $\\sin$ mit Supplement → Paar.

**Rechnung:** $(-\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2})$ — 2. Quadrant.

**Probe:** $x^{2} + y^{2} = \\tfrac{1}{2} + \\tfrac{1}{2} = 1$ ✓.

**Typischer Fehler:** Minuszeichen bei $\\sin$ statt $\\cos$ einfügen.`,
        [
          'Formel zuerst.',
          'Supplement für $\\cos$ und $\\sin$.',
          'x, y zusammen als Punkt.',
        ],
      ),
    ],

    // ── [2] Quadrantenpunkte: (1,0), (0,1), (-1,0), (0,-1) ────────────────
    2: [
      mc(
        'Sub-Goal "Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$": Welche Koordinaten hat der Punkt bei $\\alpha = 270°$?',
        [
          '$(0, -1)$',
          '$(-1, 0)$',
          '$(0, 1)$',
          '$(1, 0)$',
        ],
        0,
        `**Ansatz:** $P = (\\cos\\alpha, \\sin\\alpha)$. $\\cos(270°) = 0$, $\\sin(270°) = -1$.

**Rechnung:** Punkt $(0, -1)$ — der "unterste" Punkt des Einheitskreises.

**Probe:** $270°$ = drei Viertel-Drehungen gegen Uhrzeigersinn = zeigt nach unten.

**Typischer Fehler:** $(0, 1)$ wählen — das ist $90°$, nicht $270°$.`,
        [
          '$270°$ zeigt wo hin?',
          '$\\cos(270°) = 0$, $\\sin(270°) = -1$.',
          'Unterer Achsenpunkt.',
        ],
        {
          1: '$(-1, 0)$ ist $180°$, nicht $270°$.',
          2: '$(0, 1)$ ist $90°$, liegt oben. $270°$ ist unten.',
          3: '$(1, 0)$ ist $0°$ (oder $360°$), Ausgangspunkt.',
        },
      ),
      ni(
        'Sub-Goal "Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$": Welche x-Koordinate hat der Punkt bei $\\alpha = 180°$?',
        -1, 0, '',
        `**Ansatz:** $x = \\cos(180°) = -1$.

**Rechnung:** Bei $180°$ zeigt der Punkt auf die negative x-Achse = $(-1, 0)$.

**Probe:** Distanz zum Ursprung: $\\sqrt{1 + 0} = 1$ ✓.

**Typischer Fehler:** $+1$ angeben (das wäre $0°$).`,
        [
          '$\\cos(180°) = ?$',
          '$180°$ liegt auf negativer x-Achse.',
          'x-Koordinate ist $-1$.',
        ],
      ),
      tf(
        'Sub-Goal "Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$": Bei $\\alpha = 360°$ liegt der Punkt am gleichen Ort wie bei $\\alpha = 0°$.',
        true,
        `**Ansatz:** $360°$ ist eine volle Drehung zurück zum Ausgangspunkt.

**Rechnung:** $\\cos(360°) = \\cos(0°) = 1$; $\\sin(360°) = \\sin(0°) = 0$. Beide Punkte sind $(1, 0)$.

**Probe:** Sinus/Kosinus haben Periode $360°$, also wiederholen sich Funktionswerte nach jedem Vollkreis.

**Typischer Fehler:** Annehmen, $360°$ sei ein anderer Punkt — tatsächlich identisch mit $0°$.`,
        [
          'Volle Drehung = $360°$.',
          'Periode von sin/cos ist $360°$.',
          'Landet wieder bei $(1, 0)$.',
        ],
      ),
      matching(
        'Sub-Goal "Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$": Ordne jedem Quadranten-Hauptpunkt den Winkel zu.',
        [
          { left: '$(1, 0)$',    right: '$0°$ (oder $360°$)' },
          { left: '$(0, 1)$',    right: '$90°$' },
          { left: '$(-1, 0)$',   right: '$180°$' },
          { left: '$(0, -1)$',   right: '$270°$' },
        ],
        `**Ansatz:** Vier Hauptpunkte am Einheitskreis auswendig.

**Rechnung:** Start bei $(1,0)$, Viertel-Drehung führt zu $(0,1)$, dann $(-1,0)$, dann $(0,-1)$.

**Probe:** Jede Koordinate entspricht $\\cos/\\sin$ des genannten Winkels.

**Typischer Fehler:** Reihenfolge vertauschen — besonders $(0, -1)$ und $(0, 1)$ verwechseln.`,
        [
          'Gegen Uhrzeigersinn: rechts, oben, links, unten.',
          'Bei jedem Viertelkreis je $90°$.',
          'x-Achse: $y = 0$; y-Achse: $x = 0$.',
        ],
      ),
      sorting(
        'Sub-Goal "Quadrantenpunkte: $0° \\to (1,0)$, $90° \\to (0,1)$, $180° \\to (-1,0)$, $270° \\to (0,-1)$": Sortiere die vier Quadrantenpunkte in aufsteigender Winkelreihenfolge.',
        [
          '$0°: (1, 0)$',
          '$90°: (0, 1)$',
          '$180°: (-1, 0)$',
          '$270°: (0, -1)$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Start bei $0°$, Viertel-Drehung je $90°$.

**Rechnung:** $(1,0) \\to (0,1) \\to (-1,0) \\to (0,-1)$.

**Probe:** Gegen Uhrzeigersinn, entspricht Zeiger-Bewegung bei $+$-Drehsinn.

**Typischer Fehler:** Uhrzeigersinn verwenden → umgekehrte Reihenfolge.`,
        [
          'Gegen Uhrzeigersinn positiv.',
          'Alle $90°$ einen Quadrantenpunkt.',
          'Startet auf der positiven x-Achse.',
        ],
      ),
    ],

    // ── [3] Durchmesser d=2 vs. Radius r=1 nicht verwechseln ──────────────
    3: [
      mc(
        'Sub-Goal "Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln": Wie groß ist der Durchmesser des Einheitskreises?',
        [
          '$2$',
          '$1$',
          '$\\pi$',
          '$2\\pi$',
        ],
        0,
        `**Ansatz:** $d = 2r$. Beim Einheitskreis $r = 1$, also $d = 2$.

**Rechnung:** $d = 2 \\cdot 1 = 2$.

**Probe:** Der Durchmesser geht komplett durch den Kreis von einem Rand zum anderen, vom Punkt $(-1, 0)$ zu $(1, 0)$ — Entfernung $= 2$.

**Typischer Fehler:** $1$ angeben (das ist der Radius) oder $2\\pi$ (das ist der Umfang).`,
        [
          '$d = 2r$.',
          '$r = 1$.',
          '$2 \\cdot 1 = ?$',
        ],
        {
          1: '$1$ ist der **Radius**, nicht der Durchmesser. Durchmesser = $2r$.',
          2: '$\\pi$ ist weder Radius noch Durchmesser — Kreiszahl, Verhältnis Umfang/Durchmesser.',
          3: '$2\\pi$ ist der **Umfang** des Einheitskreises ($U = 2\\pi r = 2\\pi$), nicht der Durchmesser.',
        },
      ),
      ni(
        'Sub-Goal "Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln": Wie groß ist der Umfang des Einheitskreises?',
        6.2832, 0.01, '',
        `**Ansatz:** Kreisumfang $U = 2\\pi r$.

**Rechnung:** $U = 2\\pi \\cdot 1 = 2\\pi \\approx 6{,}2832$.

**Probe:** $\\pi \\approx 3{,}14$; $2\\pi \\approx 6{,}28$ ✓.

**Typischer Fehler:** $\\pi$ als Umfang angeben (das wäre der Halbkreis).`,
        [
          'Umfang = $2\\pi r$.',
          '$r = 1$.',
          '$2\\pi \\approx 6{,}28$.',
        ],
      ),
      tf(
        'Sub-Goal "Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln": Der Durchmesser des Einheitskreises ist doppelt so groß wie der Radius.',
        true,
        `**Ansatz:** Definitionsgemäß gilt für jeden Kreis $d = 2r$.

**Rechnung:** Beim Einheitskreis $r = 1 \\to d = 2$. Faktor $2$.

**Probe:** Geometrie: Durchmesser = Linie durch Mittelpunkt von Rand zu Rand. Radius = halber Durchmesser.

**Typischer Fehler:** Annehmen, beide seien gleich — Verwechslung bei schnellem Lesen.`,
        [
          'Kreisdefinitionen.',
          '$d = 2r$.',
          'Immer Faktor 2.',
        ],
      ),
      matching(
        'Sub-Goal "Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln": Ordne jeder Kreisgröße ihren Wert beim Einheitskreis zu.',
        [
          { left: 'Radius $r$',         right: '$1$' },
          { left: 'Durchmesser $d$',    right: '$2$' },
          { left: 'Umfang $U$',         right: '$2\\pi$' },
          { left: 'Fläche $A$',         right: '$\\pi$' },
        ],
        `**Ansatz:** Standardformeln mit $r = 1$.

**Rechnung:** $r = 1$, $d = 2r = 2$, $U = 2\\pi r = 2\\pi$, $A = \\pi r^{2} = \\pi$.

**Probe:** Faktoren $1, 2, 2\\pi, \\pi$ entsprechen Radius, Durchmesser, Umfang, Fläche.

**Typischer Fehler:** $U$ und $A$ verwechseln — $U$ hat linear $r$, $A$ hat $r^{2}$.`,
        [
          '$d = 2r$, $U = 2\\pi r$, $A = \\pi r^{2}$.',
          'Bei $r=1$ alle direkt ablesbar.',
          'Fläche $= \\pi \\approx 3{,}14$.',
        ],
      ),
      sorting(
        'Sub-Goal "Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln": Sortiere die vier Kreisgrößen des Einheitskreises nach aufsteigendem Zahlenwert.',
        [
          'Radius = $1$',
          'Durchmesser = $2$',
          'Fläche = $\\pi \\approx 3{,}14$',
          'Umfang = $2\\pi \\approx 6{,}28$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Werte vergleichen.

**Rechnung:** $1 < 2 < 3{,}14 < 6{,}28$.

**Probe:** Radius < Durchmesser trivial. Fläche $< $ Umfang bei $r = 1$, weil $\\pi < 2\\pi$.

**Typischer Fehler:** Umfang und Fläche vertauschen.`,
        [
          'Zahlenvergleich.',
          '$1 < 2 < \\pi < 2\\pi$.',
          '$\\pi \\approx 3{,}14$.',
        ],
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
        'Sub-Goal "Pythagoras $\\sin^2+\\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen": [PRÜFUNG] Vereinfache $\\cos^{2}(\\alpha) - \\sin^{2}(\\alpha)$.',
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
        'Sub-Goal "Pythagoras $\\sin^2+\\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen": [PRÜFUNG] Gegeben $\\sin\\alpha = 0{,}6$ und $\\alpha$ im 1. Quadranten. Berechne $\\sin(2\\alpha)$.',
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
        'Sub-Goal "Pythagoras $\\sin^2+\\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen": [PRÜFUNG] Der Ausdruck $1 - 2\\sin^{2}(\\alpha)$ ist gleich $\\cos(2\\alpha)$.',
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
        'Sub-Goal "Pythagoras $\\sin^2+\\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen": [PRÜFUNG] Ordne jedem Ausdruck seine vereinfachte Form zu.',
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
        'Sub-Goal "Pythagoras $\\sin^2+\\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen": [PRÜFUNG] Bringe die Schritte zur Vereinfachung von $\\sin^{2}\\alpha(1 + \\cot^{2}\\alpha)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben": [PRÜFUNG] Wie viele Lösungen hat $\\sin x = \\tfrac{1}{2}$ im Intervall $[0°, 360°)$?',
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
        'Sub-Goal "Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben": [PRÜFUNG] Löse $\\cos x = -\\tfrac{1}{2}$ in $[0°, 360°)$. Gib die kleinere Lösung in Grad an.',
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
        'Sub-Goal "Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben": [PRÜFUNG] Die Gleichung $\\sin x = 1{,}5$ hat in $\\mathbb{R}$ unendlich viele Lösungen.',
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
        'Sub-Goal "Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben": [PRÜFUNG] Ordne jeder Gleichung die Anzahl Lösungen in $[0°, 360°)$ zu.',
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
        'Sub-Goal "Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben": [PRÜFUNG] Bringe die Schritte zur Lösung von $\\sin x = -\\tfrac{\\sqrt{2}}{2}$ in $[0°, 360°)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Substitution $u = \\sin x$ oder $u = \\cos x$ bei quadratischen Gleichungen": [PRÜFUNG] Welche Substitution führt $2\\sin^{2} x - \\sin x - 1 = 0$ direkt auf eine quadratische Gleichung in $u$?',
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
        'Sub-Goal "Substitution $u = \\sin x$ oder $u = \\cos x$ bei quadratischen Gleichungen": [PRÜFUNG] Löse $\\cos^{2} x - \\cos x = 0$ in $[0°, 360°)$. Wie viele Lösungen gibt es?',
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
        'Sub-Goal "Substitution $u = \\sin x$ oder $u = \\cos x$ bei quadratischen Gleichungen": [PRÜFUNG] Die Gleichung $4\\sin^{2} x - 3 = 0$ hat in $[0°, 360°)$ vier Lösungen.',
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
        'Sub-Goal "Substitution $u = \\sin x$ oder $u = \\cos x$ bei quadratischen Gleichungen": [PRÜFUNG] Ordne jeder quadratischen Gleichung in $u$ die Anzahl Lösungen in $[0°, 360°)$ zu (nach Substitution und Rücksubstitution).',
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
        'Sub-Goal "Substitution $u = \\sin x$ oder $u = \\cos x$ bei quadratischen Gleichungen": [PRÜFUNG] Bringe die Schritte zur Lösung von $2\\cos^{2} x + \\cos x - 1 = 0$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Faktorisieren statt durch $\\cos x$ teilen (Nullstellen nicht verlieren)": [PRÜFUNG] Welcher Weg löst $\\sin x \\cos x = 0$ in $[0°, 360°)$ vollständig?',
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
        'Sub-Goal "Faktorisieren statt durch $\\cos x$ teilen (Nullstellen nicht verlieren)": [PRÜFUNG] Löse $\\sin x \\cdot (2\\sin x - 1) = 0$ in $[0°, 360°)$ und zähle alle Lösungen.',
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
        'Sub-Goal "Faktorisieren statt durch $\\cos x$ teilen (Nullstellen nicht verlieren)": [PRÜFUNG] Bei der Gleichung $\\tan x \\cdot \\cos x = 1$ darf man beide Seiten durch $\\cos x$ teilen, ohne Lösungen zu verlieren, weil man nachher die Definitionsmenge von $\\tan x$ berücksichtigen muss.',
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
        'Sub-Goal "Faktorisieren statt durch $\\cos x$ teilen (Nullstellen nicht verlieren)": [PRÜFUNG] Ordne jeder Gleichung die korrekte Strategie zu.',
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
        'Sub-Goal "Faktorisieren statt durch $\\cos x$ teilen (Nullstellen nicht verlieren)": [PRÜFUNG] Bringe die Schritte zur vollständigen Lösung von $\\sin x = \\sin x \\cos x$ in $[0°, 360°)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)": [PRÜFUNG] Welche Vorgehensweise ist für einen korrekten Identitätsnachweis zulässig?',
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
        'Sub-Goal "Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)": [PRÜFUNG] Zeige $\\tfrac{\\sin x}{1 + \\cos x} = \\tfrac{1 - \\cos x}{\\sin x}$ durch Termumformung. Mit wie vielen Rechenschritten (Erweitern + Pythagoras + Kürzen) führt der Standardweg zum Ziel?',
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
        'Sub-Goal "Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)": [PRÜFUNG] Bei einem Identitätsnachweis darf man nur auf einer Seite der Gleichung Umformungen vornehmen, weil die Gleichheit erst bewiesen werden soll.',
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
        'Sub-Goal "Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)": [PRÜFUNG] Ordne jeder Identität den zentralen "Trick" beim Nachweis zu.',
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
        'Sub-Goal "Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)": [PRÜFUNG] Bringe die Schritte zum Nachweis $\\tan x + \\cot x = \\tfrac{1}{\\sin x\\cos x}$ in die richtige Reihenfolge (nur LS umformen).',
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
        'Sub-Goal "Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\\sin$/$\\cos$ richtig zuordnen": [PRÜFUNG] Eine Kraft $F$ wirkt unter dem Winkel $\\alpha$ **zur Horizontalen**. Wie lauten die Komponenten?',
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
        'Sub-Goal "Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\\sin$/$\\cos$ richtig zuordnen": [PRÜFUNG] Eine Seilkraft $F = 200\\,\\text{N}$ wirkt unter $60°$ zur Horizontalen. Berechne die vertikale Komponente in Newton.',
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
        'Sub-Goal "Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\\sin$/$\\cos$ richtig zuordnen": [PRÜFUNG] Wird der Winkel **zur Vertikalen** (statt Horizontalen) gemessen, gilt $F_{x} = F\\sin\\alpha$, $F_{y} = F\\cos\\alpha$.',
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
        'Sub-Goal "Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\\sin$/$\\cos$ richtig zuordnen": [PRÜFUNG] Ordne jeder Kraft-Situation die korrekte Komponentenformel zu.',
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
        'Sub-Goal "Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\\sin$/$\\cos$ richtig zuordnen": [PRÜFUNG] Bringe die Schritte zur Kräftezerlegung von $F = 100\\,\\text{N}$ bei $30°$ zur Horizontalen in die richtige Reihenfolge.',
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
        'Sub-Goal "Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe": [PRÜFUNG] Welche Gleichung ist der Cosinussatz für die Seite $a$ gegenüber dem Winkel $\\alpha$?',
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
        'Sub-Goal "Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe": [PRÜFUNG] Berechne die Seite $a$ in einem Dreieck mit $b = 4$, $c = 6$, $\\alpha = 60°$. (Auf 2 Nachkommastellen genau.)',
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
        'Sub-Goal "Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe": [PRÜFUNG] Der Cosinussatz ist eine Verallgemeinerung des Satzes von Pythagoras: bei $\\alpha = 90°$ reduziert er sich auf $a^{2} = b^{2} + c^{2}$.',
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
        'Sub-Goal "Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe": [PRÜFUNG] Ordne jedem Dreieck die dritte Seite $a$ zu (SWS-Konfiguration).',
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
        'Sub-Goal "Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe": [PRÜFUNG] Bringe die Schritte zur Berechnung von $a$ bei $b = 8$, $c = 6$, $\\alpha = 60°$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Schwingungsgrößen $A, \\omega, T, f, \\varphi$ aus gegebenem $x(t)$ ablesen und umrechnen": [PRÜFUNG] Welche Amplitude und Kreisfrequenz hat $x(t) = 5\\cos(3t + \\pi/6)$?',
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
        'Sub-Goal "Schwingungsgrößen $A, \\omega, T, f, \\varphi$ aus gegebenem $x(t)$ ablesen und umrechnen": [PRÜFUNG] Gegeben $x(t) = 2\\sin(4\\pi t)$. Berechne die Periode $T$ in Sekunden.',
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
        'Sub-Goal "Schwingungsgrößen $A, \\omega, T, f, \\varphi$ aus gegebenem $x(t)$ ablesen und umrechnen": [PRÜFUNG] Für die Netzfrequenz $f = 50\\,\\text{Hz}$ gilt Kreisfrequenz $\\omega = 100\\pi\\,\\text{rad/s}$.',
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
        'Sub-Goal "Schwingungsgrößen $A, \\omega, T, f, \\varphi$ aus gegebenem $x(t)$ ablesen und umrechnen": [PRÜFUNG] Ordne jeder Schwingung ihre Kreisfrequenz $\\omega$ zu.',
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
        'Sub-Goal "Schwingungsgrößen $A, \\omega, T, f, \\varphi$ aus gegebenem $x(t)$ ablesen und umrechnen": [PRÜFUNG] Bringe die Schritte zur Bestimmung aller Schwingungsgrößen für $x(t) = 4\\sin(10t + \\pi/3)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Einheitenkonsistenz: $\\omega t$ in Radiant, Phasenwinkel $\\varphi$ ebenfalls Radiant": [PRÜFUNG] Warum muss das Argument $\\omega t + \\varphi$ dimensional in Radiant vorliegen?',
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
        'Sub-Goal "Einheitenkonsistenz: $\\omega t$ in Radiant, Phasenwinkel $\\varphi$ ebenfalls Radiant": [PRÜFUNG] Rechne $\\varphi = 60°$ in Radiant um (als Bruchteil $\\pi$, d.h. Antwort ist Faktor vor $\\pi$).',
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
        'Sub-Goal "Einheitenkonsistenz: $\\omega t$ in Radiant, Phasenwinkel $\\varphi$ ebenfalls Radiant": [PRÜFUNG] In $x(t) = A\\sin(\\omega t + \\varphi)$ dürfen $\\omega t$ und $\\varphi$ auch in unterschiedlichen Einheiten sein, solange die Summe korrekt ist.',
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
        'Sub-Goal "Einheitenkonsistenz: $\\omega t$ in Radiant, Phasenwinkel $\\varphi$ ebenfalls Radiant": [PRÜFUNG] Ordne jedem Gradwert den entsprechenden Radiantwert zu.',
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
        'Sub-Goal "Einheitenkonsistenz: $\\omega t$ in Radiant, Phasenwinkel $\\varphi$ ebenfalls Radiant": [PRÜFUNG] Bringe die Schritte für eine Schwingung mit $\\omega = 100\\,\\text{rad/s}$, $\\varphi = 90°$, $t = 0{,}01\\,\\text{s}$ in die richtige Reihenfolge (Argument in rad berechnen).',
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
        'Sub-Goal "Plausibilitätscheck: Komponenten $|F_x|, |F_y| \\leq |F|$, Winkelbereich passt zum Quadranten": [PRÜFUNG] Ein Student berechnet $F_{x} = 700\\,\\text{N}$ und $F_{y} = 400\\,\\text{N}$ für eine Kraft $F = 500\\,\\text{N}$. Was ist falsch?',
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
        'Sub-Goal "Plausibilitätscheck: Komponenten $|F_x|, |F_y| \\leq |F|$, Winkelbereich passt zum Quadranten": [PRÜFUNG] Eine Kraft $F = 1000\\,\\text{N}$ zeigt in Richtung $\\alpha = 150°$ gegen die Horizontale. In welchem Quadranten liegt der Kraftvektor (1, 2, 3 oder 4)?',
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
        'Sub-Goal "Plausibilitätscheck: Komponenten $|F_x|, |F_y| \\leq |F|$, Winkelbereich passt zum Quadranten": [PRÜFUNG] Die Gleichung $F_{x}^{2} + F_{y}^{2} = F^{2}$ (Pythagoras) kann immer zum Plausibilitätscheck nach einer Kräftezerlegung genutzt werden.',
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
        'Sub-Goal "Plausibilitätscheck: Komponenten $|F_x|, |F_y| \\leq |F|$, Winkelbereich passt zum Quadranten": [PRÜFUNG] Ordne jedem Winkel (zur positiven x-Achse) den Quadranten und die Vorzeichen von $F_x, F_y$ zu.',
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
        'Sub-Goal "Plausibilitätscheck: Komponenten $|F_x|, |F_y| \\leq |F|$, Winkelbereich passt zum Quadranten": [PRÜFUNG] Bringe die Plausibilitätsschritte nach einer Kräftezerlegung in die richtige Reihenfolge.',
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
        'Sub-Goal "$\\sin x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arcsin a$ und $\\pi - \\arcsin a$": [PRÜFUNG] Wie lauten beide Lösungen von $\\sin x = \\tfrac{\\sqrt{3}}{2}$ in $[0, 2\\pi)$?',
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
        'Sub-Goal "$\\sin x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arcsin a$ und $\\pi - \\arcsin a$": [PRÜFUNG] Gegeben $\\sin x = 0{,}8$ in $[0°, 360°)$. Wie groß ist die zweite Lösung (in Grad, auf 1 Dezimale)?',
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
        'Sub-Goal "$\\sin x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arcsin a$ und $\\pi - \\arcsin a$": [PRÜFUNG] Die Gleichung $\\sin x = -0{,}4$ hat in $[0°, 360°)$ genau zwei Lösungen, beide im 3. und 4. Quadrant.',
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
        'Sub-Goal "$\\sin x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arcsin a$ und $\\pi - \\arcsin a$": [PRÜFUNG] Ordne jeder Gleichung die beiden Lösungen in $[0, 2\\pi)$ zu.',
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
        'Sub-Goal "$\\sin x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arcsin a$ und $\\pi - \\arcsin a$": [PRÜFUNG] Bringe die Schritte zur Lösung $\\sin x = \\tfrac{\\sqrt{2}}{2}$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "$\\cos x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arccos a$ und $2\\pi - \\arccos a$": [PRÜFUNG] Wie lauten beide Lösungen von $\\cos x = \\tfrac{1}{2}$ in $[0, 2\\pi)$?',
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
        'Sub-Goal "$\\cos x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arccos a$ und $2\\pi - \\arccos a$": [PRÜFUNG] Löse $\\cos x = -0{,}5$ in $[0°, 360°)$. Gib die größere Lösung in Grad an.',
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
        'Sub-Goal "$\\cos x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arccos a$ und $2\\pi - \\arccos a$": [PRÜFUNG] Die beiden Lösungen von $\\cos x = a$ (mit $|a| < 1$) in $[0, 2\\pi)$ sind symmetrisch zur Geraden $x = \\pi$.',
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
        'Sub-Goal "$\\cos x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arccos a$ und $2\\pi - \\arccos a$": [PRÜFUNG] Ordne jeder Gleichung die beiden Lösungen zu.',
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
        'Sub-Goal "$\\cos x = a$ hat in $[0, 2\\pi)$ zwei Lösungen: $\\arccos a$ und $2\\pi - \\arccos a$": [PRÜFUNG] Bringe die Schritte zur Lösung von $\\cos x = -\\tfrac{\\sqrt{3}}{2}$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "$\\tan x = a$ hat Periode $\\pi$: $x_k = \\arctan a + k\\pi$, $k \\in \\mathbb{Z}$": [PRÜFUNG] Wie viele Lösungen hat $\\tan x = 1$ in $[0, 2\\pi)$?',
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
        'Sub-Goal "$\\tan x = a$ hat Periode $\\pi$: $x_k = \\arctan a + k\\pi$, $k \\in \\mathbb{Z}$": [PRÜFUNG] Löse $\\tan x = \\sqrt{3}$ in $[0°, 360°)$. Gib die größere Lösung in Grad an.',
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
        'Sub-Goal "$\\tan x = a$ hat Periode $\\pi$: $x_k = \\arctan a + k\\pi$, $k \\in \\mathbb{Z}$": [PRÜFUNG] Die Tangens-Funktion ist bei $x = \\tfrac{\\pi}{2} + k\\pi$ nicht definiert.',
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
        'Sub-Goal "$\\tan x = a$ hat Periode $\\pi$: $x_k = \\arctan a + k\\pi$, $k \\in \\mathbb{Z}$": [PRÜFUNG] Ordne jedem Wert $a$ die beiden Lösungen von $\\tan x = a$ in $[0°, 360°)$ zu.',
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
        'Sub-Goal "$\\tan x = a$ hat Periode $\\pi$: $x_k = \\arctan a + k\\pi$, $k \\in \\mathbb{Z}$": [PRÜFUNG] Bringe die Schritte zur Lösung $\\tan x = -1$ in $[0°, 360°)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Gesamte Lösungsmenge: Hauptwerte + $2\\pi k$ (bzw. $\\pi k$ bei $\\tan$), Intervall berücksichtigen": [PRÜFUNG] Wie viele Lösungen hat $\\sin x = 0$ im Intervall $[-\\pi, 3\\pi]$?',
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
        'Sub-Goal "Gesamte Lösungsmenge: Hauptwerte + $2\\pi k$ (bzw. $\\pi k$ bei $\\tan$), Intervall berücksichtigen": [PRÜFUNG] Wie viele Lösungen hat $\\cos x = 0{,}5$ im Intervall $[0, 6\\pi]$?',
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
        'Sub-Goal "Gesamte Lösungsmenge: Hauptwerte + $2\\pi k$ (bzw. $\\pi k$ bei $\\tan$), Intervall berücksichtigen": [PRÜFUNG] Die allgemeine Lösung von $\\cos x = a$ (mit $|a| < 1$) ist $x = \\pm\\arccos(a) + 2\\pi k, k \\in \\mathbb{Z}$.',
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
        'Sub-Goal "Gesamte Lösungsmenge: Hauptwerte + $2\\pi k$ (bzw. $\\pi k$ bei $\\tan$), Intervall berücksichtigen": [PRÜFUNG] Ordne jeder Gleichung die allgemeine Lösungsformel zu.',
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
        'Sub-Goal "Gesamte Lösungsmenge: Hauptwerte + $2\\pi k$ (bzw. $\\pi k$ bei $\\tan$), Intervall berücksichtigen": [PRÜFUNG] Bringe die Schritte zur Bestimmung aller Lösungen von $\\sin x = 0{,}5$ in $[0, 4\\pi]$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Beim Dividieren durch $\\cos x$: Fall $\\cos x = 0$ separat prüfen, sonst Lösungen verloren": [PRÜFUNG] Welcher Schritt ist bei $\\sin x \\cos x = \\cos x$ **sicher**?',
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
        'Sub-Goal "Beim Dividieren durch $\\cos x$: Fall $\\cos x = 0$ separat prüfen, sonst Lösungen verloren": [PRÜFUNG] Löse $\\sin x \\cos x = \\sin x$ vollständig in $[0°, 360°)$. Wie viele Lösungen gibt es?',
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
        'Sub-Goal "Beim Dividieren durch $\\cos x$: Fall $\\cos x = 0$ separat prüfen, sonst Lösungen verloren": [PRÜFUNG] Bei der Gleichung $2\\sin x = \\tan x$ darf man direkt beide Seiten mit $\\cos x$ multiplizieren, weil $\\tan x = \\sin x / \\cos x$ ohnehin $\\cos x \\neq 0$ voraussetzt.',
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
        'Sub-Goal "Beim Dividieren durch $\\cos x$: Fall $\\cos x = 0$ separat prüfen, sonst Lösungen verloren": [PRÜFUNG] Ordne jedem Fall die richtige Strategie zu.',
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
        'Sub-Goal "Beim Dividieren durch $\\cos x$: Fall $\\cos x = 0$ separat prüfen, sonst Lösungen verloren": [PRÜFUNG] Bringe die Schritte zur vollständigen Lösung von $\\sin x = \\sqrt{3}\\cos x$ in $[0°, 360°)$ in die richtige Reihenfolge.',
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
        'Sub-Goal "Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen": [PRÜFUNG] Wie viele Schnittpunkte hat die waagerechte Linie $y = 0{,}7$ mit dem Einheitskreis?',
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
        'Sub-Goal "Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen": [PRÜFUNG] Wie viele Schnittpunkte hat die senkrechte Linie $x = 1{,}2$ mit dem Einheitskreis?',
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
        'Sub-Goal "Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen": [PRÜFUNG] Die Anzahl Lösungen von $\\sin x = a$ in $[0, 2\\pi)$ entspricht der Anzahl Schnittpunkte der Horizontalen $y = a$ mit dem Einheitskreis.',
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
        'Sub-Goal "Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen": [PRÜFUNG] Ordne jeder Linie die Anzahl Schnittpunkte mit dem Einheitskreis zu.',
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
        'Sub-Goal "Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen": [PRÜFUNG] Bringe die Schritte zur grafischen Kontrolle der Lösungszahl von $2\\cos x = 1$ in $[0, 2\\pi)$ in die richtige Reihenfolge.',
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
