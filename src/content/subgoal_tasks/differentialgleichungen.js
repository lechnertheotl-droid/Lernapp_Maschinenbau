// ═══════════════════════════════════════════════════════════════════════════
// Differentialgleichungen — Zielaufgaben pro Sub-Goal
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

export const differentialgleichungenSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // dgl-1-1 — Was ist eine Differentialgleichung?  (5 subGoals)
  // Je ≥ 5 Aufgaben = mind. 25 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-1-1': {

    // ── [0] Ordnung = höchste vorkommende Ableitung ──────────────────────
    0: [
      tf(
        'Die DGL $y\'\' + 4y = 0$ hat Ordnung $2$.',
        true,
        `**Ansatz:** Ordnung = höchste in der DGL vorkommende Ableitung.

**Rechnung:** Die Striche zählen: $y\'\'$ steht für die zweite Ableitung. Niedrigere Ableitungen ($y\'$, $y$) erscheinen ggf. zusätzlich, ändern aber die Ordnung nicht.

**Probe:** Eine Lösung wie $y(x)=\\sin(2x)$ hat $y\'\'=-4\\sin(2x)$ — also wirklich zweite Ableitung nötig, um die DGL auszuwerten.

**Typischer Fehler:** Den Vorfaktor $4$ als Ordnung lesen. Vorfaktoren sind Koeffizienten, nicht Ableitungsstufen.`,
        [
          'Wie viele Striche hat die höchste Ableitung?',
          '$y\'\'$ heißt zweite Ableitung.',
          'Vorfaktoren wie $4$ haben mit der Ordnung nichts zu tun.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dgl-ordnung'] },
      ),
      mc(
        'Welche Ordnung hat die DGL $y\'\'\' - 2y\' + y = \\sin x$?',
        ['Ordnung 1', 'Ordnung 2', 'Ordnung 3', 'Ordnung 4'],
        2,
        `**Ansatz:** Höchste Ableitung suchen — die Anzahl der Striche entscheidet.

**Rechnung:** $y\'\'\'$ hat drei Striche → dritte Ableitung. $y\'$ und $y$ sind niedriger. Höchste = $y\'\'\'$ → Ordnung **3**.

**Probe:** Die Stör­funktion $\\sin x$ rechts ändert nichts an der Ordnung — die Ordnung wird nur von den Ableitungen der Unbekannten $y$ bestimmt.

**Typischer Fehler:** Nur die Anzahl der unterschiedlichen Ableitungs­arten zählen ($y\'\'\', y\', y$ → 3 verschiedene), das ergibt zufällig dasselbe — aber bei $y^{(4)} - y = 0$ wären es nur 2 unterschiedliche, die Ordnung aber 4.`,
        [
          'Striche zählen: $y\'$ ist 1, $y\'\'$ ist 2, $y\'\'\'$ ist 3.',
          'Die rechte Seite (Störfunktion) zählt nicht für die Ordnung.',
          'Welche Ableitung von $y$ hat die meisten Striche?',
        ],
        {
          0: 'Du hast nur den Term $-2y\'$ angeschaut. Es gibt aber auch $y\'\'\'$ mit drei Strichen — und die höchste Ableitung zählt, nicht die niedrigste.',
          1: 'Es gibt $y\'\'\'$ in der Gleichung (drei Striche). Du hast vermutlich nur bis zur zweiten Ableitung gezählt oder $y\'\'\'$ als $y\'\'$ verlesen.',
          3: 'Eine vierte Ableitung ($y^{(4)}$) kommt in der DGL nicht vor. Die höchste sichtbare Ableitung ist $y\'\'\'$ (drei Striche), also Ordnung 3.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['dgl-ordnung'] },
      ),
      mc(
        'Welche Ordnung hat die DGL $(y\'\')^2 + y\' = x$?',
        ['Ordnung 1', 'Ordnung 2', 'Ordnung 4', 'Keine Ordnung definiert, weil nichtlinear'],
        1,
        `**Ansatz:** Ordnung wird *nur* durch die höchste Ableitungsstufe bestimmt — Potenzen oder Produkte verändern Linearität, aber nicht die Ordnung.

**Rechnung:** Höchste Ableitung in $(y\'\')^2$ ist $y\'\'$ (zwei Striche). Daneben kommt $y\'$ vor, das ist niedriger. → Ordnung $2$.

**Probe:** Test mit $y=x^3$: $y\'=3x^2$, $y\'\'=6x$. $(y\'\')^2 + y\' = 36x^2 + 3x^2 = 39x^2$ — alle Ableitungen erscheinen, die zweite ist die höchste.

**Typischer Fehler:** Den Exponenten $2$ in $(y\'\')^2$ als „Ordnung 4" interpretieren. Das wäre der *Grad* oder die *Linearität* — die Ordnung schaut nur auf die Anzahl der Striche an der höchsten Ableitung.`,
        [
          'Die Ordnung schaut auf die *Striche*, nicht auf den Exponenten der Ableitung.',
          '$(y\'\')^2$ enthält $y\'\'$ — also zweite Ableitung.',
          'Nichtlinear ≠ ohne Ordnung. Auch nichtlineare DGL haben eine wohldefinierte Ordnung.',
        ],
        {
          0: 'Du hast nur $y\'$ als höchste Ableitung gewertet — aber $(y\'\')^2$ enthält $y\'\'$, das ist Ordnung 2.',
          2: 'Der Exponent $2$ in $(y\'\')^2$ macht die DGL *nichtlinear*, ändert aber nicht die Ordnung. Striche zählen: $y\'\'$ → 2.',
          3: 'Die Ordnung ist auch bei nichtlinearen DGL eindeutig definiert — sie ist die höchste Ableitung. Nur die Lösungstheorie wird komplizierter.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['dgl-ordnung'] },
      ),
      mc(
        'Ein Lerner sagt: „Bei $5\\,y\'\' + 2y = 0$ ist die Ordnung gleich $5$, weil $5$ vor $y\'\'$ steht." Welcher Hinweis ist korrekt?',
        [
          'Stimmt — der Vorfaktor entscheidet über die Ordnung.',
          'Vorfaktoren sind Koeffizienten und ändern die Ordnung nicht. Die Ordnung folgt aus den *Strichen* der höchsten Ableitung; hier ist $y\'\'$ → Ordnung 2.',
          'Falsch — die Ordnung ist die *Summe* aller Koeffizienten ($5 + 2 = 7$).',
          'Falsch — die Ordnung ist immer doppelt so groß wie die höchste Ableitung; hier also 4.',
        ],
        1,
        `**Ansatz:** Ordnung ist eine rein strukturelle Eigenschaft: die Anzahl der Striche an der höchsten Ableitung. Koeffizienten (vor den Ableitungen) gehen nicht ein.

**Rechnung:** $5y\'\'$ enthält die Ableitung $y\'\'$ — zweite Ableitung. Der Vorfaktor $5$ ist nur ein Skalar. Höchste Ableitung in $5y\'\' + 2y$ ist $y\'\'$ → Ordnung **2**.

**Probe:** Die DGL $5y\'\' + 2y = 0$ ist äquivalent zu $y\'\' + \\tfrac{2}{5}y = 0$ (durch 5 dividieren). Die Lösungen ändern sich nicht durch Skalierung der DGL; die Ordnung bleibt 2.

**Typischer Fehler:** Vorfaktoren mit Ableitungs­ordnungen vermischen. Ordnung ist *unabhängig* davon, ob die Koeffizienten $1$, $5$, oder $\\sin x$ sind.`,
        [
          'Was passiert, wenn man die ganze DGL durch $5$ teilt? Ändert sich die Ordnung?',
          'Die Ordnung ist die Anzahl der Striche an der höchsten Ableitung.',
          'Koeffizienten vor den Ableitungen sind irrelevant für die Ordnung.',
        ],
        {
          0: 'Vorfaktoren sind nur Skalierungen — sie verändern weder Linearität noch Ordnung. Wenn man die DGL durch $5$ dividiert, steht keine $5$ mehr da, die Ordnung bleibt aber gleich.',
          2: 'Die Ordnung ist nicht die Summe von Koeffizienten — das wäre eine fast zufällige Größe. Definition: höchste *Ableitung*, gemessen an Strichen.',
          3: 'Es gibt keine „Verdopplungsregel" für die Ordnung. Sie ist genau die höchste vorkommende Ableitungsstufe — bei $y\'\'$ also $2$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['dgl-ordnung'] },
      ),
      matching(
        'Ordne jeder DGL ihre Ordnung zu.',
        [
          { left: '$y\' + 3y = x^2$', right: 'Ordnung 1' },
          { left: '$y\'\' - 2y\' + y = 0$', right: 'Ordnung 2' },
          { left: '$y\'\'\' = e^x$', right: 'Ordnung 3' },
          { left: '$y^{(4)} + y = \\sin x$', right: 'Ordnung 4' },
        ],
        `**Ansatz:** Striche an der höchsten Ableitung zählen — niedrigere Ableitungen und Störfunktionen ignorieren.

**Rechnung:** (1) $y\'$ → 1 Strich → Ordnung 1. (2) $y\'\'$ → 2 Striche → Ordnung 2. (3) $y\'\'\'$ → 3 Striche → Ordnung 3. (4) $y^{(4)}$ → vierte Ableitung → Ordnung 4.

**Probe:** Bei jeder DGL kann die *niedrigere* Ordnung auch vorkommen ($y$ in (2), $y$ in (4)) — entscheidend ist die *höchste*.

**Typischer Fehler:** Bei (4) wegen $y^{(4)}$-Notation die Vier nicht erkennen oder die Störfunktion $\\sin x$ in die Ordnung einrechnen. Klammer-Notation $(4)$ heißt: vierte Ableitung.`,
        [
          'Wie viele Striche hat die höchste Ableitung?',
          '$y^{(4)}$ ist die Klammer-Schreibweise für die vierte Ableitung.',
          'Die Ordnung hängt nicht von der rechten Seite der DGL ab.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['dgl-ordnung'] },
      ),
    ],

    // ── [1] Linear ⇔ y und Ableitungen nur in 1. Potenz ──────────────────
    1: [
      tf(
        'Die DGL $y\' + 2x\\,y = e^x$ ist linear.',
        true,
        `**Ansatz:** Linear-Test: $y$ und alle Ableitungen kommen nur in 1. Potenz vor — keine Produkte $y\\cdot y\'$, keine Funktionen wie $\\sin(y)$, $y^2$, $e^y$. Die Koeffizienten und die rechte Seite dürfen beliebige Funktionen von $x$ sein.

**Rechnung:** In $y\' + 2x\\,y = e^x$: $y\'$ in 1. Potenz ✓, $y$ in 1. Potenz ✓, kein Produkt $y\\cdot y\'$ ✓. Koeffizient $2x$ und rechte Seite $e^x$ sind Funktionen von $x$ — erlaubt.

**Probe:** Standardform $y\' + p(x)\\,y = q(x)$ mit $p(x) = 2x$ und $q(x) = e^x$ — exakt die Form einer linearen DGL 1. Ordnung.

**Typischer Fehler:** „$2x$ steht vor $y$ — also nichtlinear" denken. *Koeffizienten* dürfen $x$-abhängig sein; nichtlinear wird die DGL erst, wenn $y$ selbst nichtlinear (Potenz, Funktion) auftritt.`,
        [
          'In welcher Potenz kommen $y$ und $y\'$ vor?',
          'Erlaubt sind beliebige Funktionen von $x$ als Koeffizient — das ändert die Linearität nicht.',
          'Nur Produkte $y\\cdot y\'$, Potenzen $y^2$ oder Funktionen $\\sin(y)$ machen nichtlinear.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['dgl-linear'] },
      ),
      mc(
        'Welche der folgenden DGL ist *linear*?',
        [
          '$y\' + x\\,y = e^x$',
          '$y\' = y^2 + x$',
          '$y\\cdot y\' = 1$',
          '$\\sin(y) + y\' = 0$',
        ],
        0,
        `**Ansatz:** Pro Option prüfen, ob $y$ und Ableitungen nur in 1. Potenz und ohne Produkte/Funktionen vorkommen.

**Rechnung:**
- $y\' + x\\,y = e^x$: $y$ und $y\'$ jeweils 1. Potenz, Koeffizienten $x$ und $e^x$ sind reine $x$-Funktionen → **linear** ✓.
- $y\' = y^2 + x$: $y^2$ ist 2. Potenz → nichtlinear.
- $y\\cdot y\' = 1$: Produkt $y\\cdot y\'$ → nichtlinear.
- $\\sin(y) + y\' = 0$: $\\sin(y)$ ist eine nichtlineare Funktion von $y$ → nichtlinear.

**Probe:** Die lineare Option lässt sich in Standardform $y\' + p(x)\\,y = q(x)$ bringen mit $p(x)=x$, $q(x)=e^x$ ✓.

**Typischer Fehler:** Koeffizienten, die von $x$ abhängen ($x$, $e^x$, $\\sin x$) als „kompliziert" missdeuten und für nichtlinear halten. Nichtlinearität entsteht *nur* durch nichtlineare Vorkommen von $y$ oder seinen Ableitungen.`,
        [
          'Pro Option fragen: kommen $y, y\'$ in höherer Potenz vor?',
          'Produkte $y\\cdot y\'$ oder Funktionen $\\sin(y)$, $e^y$ machen die DGL nichtlinear.',
          'Beliebige $x$-Funktionen als Koeffizient sind erlaubt.',
        ],
        {
          1: '$y^2$ ist eine 2. Potenz von $y$ — Linearität verlangt, dass $y$ nur in 1. Potenz auftritt. Daher nichtlinear.',
          2: 'Hier multiplizieren sich $y$ und $y\'$ — solche Produkte machen die DGL nichtlinear (man könnte z. B. nicht nach $y\'$ allein auflösen, ohne durch $y$ zu dividieren).',
          3: '$\\sin(y)$ ist eine nichtlineare Funktion *von $y$* — bei einer linearen DGL dürften nur Vielfache von $y$, nicht Funktionen davon auftreten.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['dgl-linear'] },
      ),
      mc(
        'Ist die DGL $y\' + \\sin(y) = 0$ linear oder nichtlinear — und warum?',
        [
          'Linear, weil $y$ und $y\'$ jeweils nur einmal vorkommen.',
          'Nichtlinear, weil $\\sin(y)$ keine 1. Potenz von $y$ ist (nichtlineare Funktion *von* $y$).',
          'Linear, weil keine Produkte $y\\cdot y\'$ vorkommen.',
          'Nichtlinear, weil die rechte Seite $0$ ist.',
        ],
        1,
        `**Ansatz:** Linear-Test: $y$ und alle Ableitungen *nur* in 1. Potenz — also höchstens als $a(x)\\cdot y$ oder $a(x)\\cdot y^{(k)}$.

**Rechnung:** $\\sin(y)$ ist keine 1. Potenz von $y$. Die Reihenentwicklung $\\sin(y) = y - \\tfrac{y^3}{6} + \\ldots$ enthält $y^3$ und höher — eindeutig nichtlinear.

**Probe:** Versuche, in Standardform $y\' + p(x)\\,y = q(x)$ zu bringen: das gelingt nicht, weil $\\sin(y)$ nicht als $p(x)\\cdot y$ darstellbar ist. → DGL ist nicht linear.

**Typischer Fehler:** „Einmal-Vorkommen" mit „1. Potenz" verwechseln. Auch wenn $y$ nur an einer Stelle steht, kann der Term ($\\sin(y)$, $e^y$, $y^2$) nichtlinear sein.`,
        [
          'In welcher Potenz steht $y$ in $\\sin(y)$?',
          '$\\sin(y) = y - y^3/6 + \\ldots$ — schon das $y^3$ verletzt Linearität.',
          'Linear bedeutet: Ausdruck der Form $p(x)\\cdot y + q(x)\\cdot y\' + \\ldots = r(x)$.',
        ],
        {
          0: '„Nur einmal vorkommen" reicht nicht — entscheidend ist, in welcher *Potenz/Funktion*. $\\sin(y)$ ist nichtlinear, auch wenn $y$ darin nur einmal vorkommt.',
          2: 'Stimmt: kein Produkt $y\\cdot y\'$. Aber $\\sin(y)$ allein verletzt schon die Linearität — Funktionen *von $y$* (außer dem reinen $a(x)\\cdot y$) sind verboten.',
          3: 'Die rechte Seite $0$ macht die DGL höchstens *homogen*, nicht nichtlinear. Linearität betrifft die Struktur in $y$ — nicht die rechte Seite.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['dgl-linear'] },
      ),
      mc(
        'Ein Lerner sagt: „$y\'\' + 3y\' - 2y = x^3 + 5\\sin x$ ist nichtlinear, weil $x^3$ und $\\sin x$ vorkommen." Was ist der entscheidende Fehler?',
        [
          'Stimmt — $x^3$ macht die DGL nichtlinear.',
          'Linearität bezieht sich auf $y$ und seine Ableitungen, nicht auf die unabhängige Variable $x$ oder die rechte Seite. $x^3$ und $\\sin x$ sind erlaubt.',
          'Linearität wird nur durch Produkte $y\\cdot y\'$ verletzt — Potenzen sind kein Problem.',
          'Nichtlinear ist es, aber aus einem anderen Grund: die Ordnung 2 macht jede DGL nichtlinear.',
        ],
        1,
        `**Ansatz:** Erinnere die Linear-Definition: $y$ und alle Ableitungen müssen in 1. Potenz und ohne nichtlineare Funktionen auftreten. Die *unabhängige Variable* $x$ und die *rechte Seite* (Stör­funktion) sind beliebig.

**Rechnung:** In $y\'\' + 3y\' - 2y = x^3 + 5\\sin x$: $y\'\', y\', y$ jeweils 1. Potenz, keine Produkte → **linear**. Die rechte Seite $x^3 + 5\\sin x$ ist eine reine $x$-Funktion → erlaubt; sie macht die DGL nur *inhomogen*, nicht nichtlinear.

**Probe:** Standardform $y\'\' + p_1(x)\\,y\' + p_0(x)\\,y = q(x)$ mit $p_1(x) = 3$, $p_0(x) = -2$, $q(x) = x^3 + 5\\sin x$ — passt exakt zur linearen DGL 2. Ordnung.

**Typischer Fehler:** Linear/nichtlinear mit „enthält Funktionen" verwechseln. Funktionen *von $x$* sind erlaubt, Funktionen *von $y$* nicht.`,
        [
          'Wo „lebt" die Linearitätsbedingung — bei $y$ oder bei $x$?',
          'Beliebige $x$-Funktionen sind als Koeffizient und als Stör­funktion erlaubt.',
          'Linear ≠ konstante Koeffizienten. Auch $y\' + \\sin(x)\\,y = e^x$ ist linear.',
        ],
        {
          0: 'Genau das ist der Irrtum: $x^3$ ist eine Funktion von $x$, nicht von $y$. Damit ändert sie nichts an der Linearität in $y$.',
          2: 'Auch Potenzen $y^2$ machen die DGL nichtlinear — nicht nur Produkte $y\\cdot y\'$. Aber Potenzen *von $x$* sind als rechte Seite erlaubt.',
          3: 'Es gibt keinen Zusammenhang zwischen Ordnung und Linearität. Lineare DGL können beliebig hohe Ordnung haben.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['dgl-linear'] },
      ),
      matching(
        'Ordne jeder DGL die korrekte Linearitäts-Klassifikation zu.',
        [
          { left: '$y\' + 3y = 0$', right: 'linear, homogen' },
          { left: '$y\'\' = y^2 + x$', right: 'nichtlinear (Potenz $y^2$)' },
          { left: '$y\'\\cdot y = 1$', right: 'nichtlinear (Produkt $y\'\\cdot y$)' },
          { left: '$e^x\\,y\' + 2y = \\tan x$', right: 'linear, inhomogen' },
        ],
        `**Ansatz:** Pro DGL prüfen: (1) sind $y$ und Ableitungen nur in 1. Potenz? (2) Falls ja → linear; sonst nichtlinear mit Begründung. (3) Rechte Seite $=0$ → homogen, sonst inhomogen.

**Rechnung:**
- $y\' + 3y = 0$: $y, y\'$ in 1. Potenz; rechte Seite $0$ → linear, homogen.
- $y\'\' = y^2 + x$: $y^2$ ist 2. Potenz → nichtlinear.
- $y\'\\cdot y = 1$: Produkt von Ableitung und Funktion → nichtlinear.
- $e^x\\,y\' + 2y = \\tan x$: $e^x$ ist Koeffizient (in $x$ → erlaubt), $\\tan x$ ist Stör­funktion → linear, inhomogen.

**Probe:** Bei den linearen DGL kann man die Standardform $y^{(n)} + p_{n-1}(x)\\,y^{(n-1)} + \\ldots + p_0(x)\\,y = q(x)$ herstellen. Bei den nichtlinearen DGL klappt das nicht.

**Typischer Fehler:** $e^x$ als Koeffizient vor $y\'$ als nichtlinear werten. Funktionen *von $x$* als Koeffizient sind erlaubt — Linearität bezieht sich auf $y$.`,
        [
          'Erst Linearität, dann Homogenität prüfen.',
          '$y^2$, $y\\cdot y\'$, $\\sin(y)$ → nichtlinear.',
          'Rechte Seite $\\neq 0$ und linear → inhomogen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['dgl-linear'] },
      ),
    ],

    // ── [2] Homogen ⇔ rechte Seite = 0; sonst inhomogen ─────────────────
    2: [
      tf(
        'Die DGL $y\' + 3y = 0$ ist homogen.',
        true,
        `**Ansatz:** Eine lineare DGL ist *homogen*, wenn sie sich in Standardform $y^{(n)} + \\ldots + p_0(x)\\,y = q(x)$ mit $q(x) = 0$ schreiben lässt.

**Rechnung:** In $y\' + 3y = 0$ ist die rechte Seite explizit $0$ — Standardform ist erfüllt mit $q(x)=0$ → **homogen**.

**Probe:** Eigenschaft homogener linearer DGL: jede Lösung lässt sich beliebig skalieren ($\\lambda\\cdot y$ ist auch Lösung). Hier z. B. $y(x)=Ce^{-3x}$ — passt für jedes $C$.

**Typischer Fehler:** „Homogen" mit der homogenen Funktion (vom Grad-Argument) aus der Bruchrechnung oder Mehrdim-Analysis verwechseln. Bei DGL heißt homogen einfach: rechte Seite $=0$.`,
        [
          'Was steht rechts vom Gleichheitszeichen?',
          'Homogen ⇔ $q(x) = 0$ in Standardform.',
          '$y\' + 3y = 0$ → $q(x) = 0$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['dgl-homogen'] },
      ),
      mc(
        'Welche der folgenden DGL ist *homogen*?',
        [
          '$y\'\' + 2y = 5$',
          '$y\'\' + 2y\' + y = 0$',
          '$y\'\' = x$',
          '$y\' = 3$',
        ],
        1,
        `**Ansatz:** Pro DGL in Standardform bringen ($\\ldots = q(x)$) und prüfen, ob $q(x) = 0$.

**Rechnung:**
- $y\'\' + 2y = 5$: $q(x) = 5 \\neq 0$ → inhomogen.
- $y\'\' + 2y\' + y = 0$: $q(x) = 0$ → **homogen** ✓.
- $y\'\' = x$: $q(x) = x \\neq 0$ → inhomogen.
- $y\' = 3$: $q(x) = 3 \\neq 0$ → inhomogen.

**Probe:** Bei der homogenen Option ist $y \\equiv 0$ trivial Lösung — das ist ein Erkennungsmerkmal. Bei den anderen scheitert $y \\equiv 0$ (z. B. $0 \\neq 5$).

**Typischer Fehler:** Konstante Stör­funktionen ($5$, $3$) als „nichts Wichtiges" abtun und als homogen markieren — sie sind aber Stör­funktion ungleich Null, also inhomogen.`,
        [
          'Erst alle $y$-Terme nach links bringen; was bleibt rechts?',
          'Homogen ⇔ rechte Seite $= 0$, auch keine Konstante!',
          'Test: ist $y \\equiv 0$ eine Lösung?',
        ],
        {
          0: 'Rechte Seite ist $5 \\neq 0$ → inhomogen. Auch konstante Stör­funktionen zählen als „ungleich Null".',
          2: 'Rechte Seite ist $x \\neq 0$ → inhomogen. Stör­funktion $q(x) = x$.',
          3: 'Rechte Seite ist $3 \\neq 0$ → inhomogen, auch wenn nur eine Konstante ohne $y$ links steht.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['dgl-homogen'] },
      ),
      mc(
        'Klassifiziere $y\'\' - 2y\' + y = \\cos x$.',
        [
          'Homogen, weil $\\cos x$ periodisch ist und im Mittel $0$ ergibt.',
          'Inhomogen, weil rechte Seite $\\cos x \\neq 0$ ist.',
          'Homogen, weil alle Terme links auf $y$ wirken.',
          'Weder homogen noch inhomogen — die Klassifikation gilt nur für DGL 1. Ordnung.',
        ],
        1,
        `**Ansatz:** Standardform: $y\'\' - 2y\' + y = q(x)$. Identifiziere $q(x)$ und prüfe, ob $q(x) \\equiv 0$.

**Rechnung:** $q(x) = \\cos x$. Da $\\cos x$ nicht überall $0$ ist (z. B. $\\cos 0 = 1 \\neq 0$), ist $q(x) \\not\\equiv 0$ → DGL ist **inhomogen**.

**Probe:** Setze $y \\equiv 0$ ein: linke Seite $= 0$, rechte Seite $= \\cos x$. Gleichheit nur, wenn $\\cos x = 0$ — gilt nicht überall. Also ist $y \\equiv 0$ keine Lösung → kein homogenes System.

**Typischer Fehler:** „Mittelwert $0$" als Homogenität deuten. Homogen heißt $q(x) = 0$ als Funktion (für *alle* $x$), nicht „im Schnitt $0$".`,
        [
          'Wie lautet $q(x)$?',
          '$\\cos x$ ist nirgends identisch null — z. B. $\\cos(0) = 1$.',
          'Homogen ⇔ $q(x) = 0$ für *alle* $x$, nicht nur im Mittel.',
        ],
        {
          0: 'Periodizität oder Mittelwert ändern nichts. Homogen heißt: $q(x)$ ist die Nullfunktion. $\\cos x$ ist es nicht.',
          2: 'Stimmt nicht — die rechte Seite $\\cos x$ wirkt als Stör­funktion. Wenn da etwas $\\neq 0$ steht, ist die DGL inhomogen.',
          3: 'Die Begriffe homogen/inhomogen gelten für *alle* Ordnungen. Z. B. ist $y\'\' + y = 0$ homogen, $y\'\' + y = \\cos x$ inhomogen.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['dgl-homogen'] },
      ),
      mc(
        'Ein Lerner sagt: „$y\' = -y$ ist *inhomogen*, weil rechts $-y$ steht und nicht die Zahl $0$." Was ist der Fehler?',
        [
          'Stimmt: rechts steht $-y$, nicht $0$ → inhomogen.',
          'Erst in Standardform $y\' + p(x)\\,y = q(x)$ bringen: $y\' + y = 0$ → $q(x) = 0$ → **homogen**.',
          'Es ist keine DGL, weil rechts kein $x$ vorkommt.',
          'Es ist nichtlinear, weil $-y$ rechts und $y\'$ links nicht gleichgewichtig sind.',
        ],
        1,
        `**Ansatz:** Homogenität wird *nach* dem Sortieren in Standardform geprüft: alle $y$- und Ableitungs­terme nach links, $q(x)$ steht alleine rechts.

**Rechnung:** $y\' = -y$ → $y\' + y = 0$. Standardform $y\' + p(x)\\,y = q(x)$ mit $p(x) = 1$ und $q(x) = 0$ → **homogen**.

**Probe:** Allgemeine Lösung $y(x) = Ce^{-x}$ — jedes Vielfache einer Lösung ist wieder Lösung (Skalierungs­eigenschaft homogener DGL).

**Typischer Fehler:** Die DGL „so wie sie dasteht" lesen, ohne in Standardform zu bringen. Auch $y\' = -y$ und $y\' + y = 0$ und $\\frac{y\'}{y} = -1$ sind dieselbe DGL — alle homogen.`,
        [
          'Was ist die Standardform einer linearen DGL 1. Ordnung?',
          'Bringe alle $y$-Terme auf eine Seite.',
          'Frage: was bleibt dann allein rechts vom $=$?',
        ],
        {
          0: 'Erst sortieren: $y\' = -y \\Leftrightarrow y\' + y = 0$. Dann ist die rechte Seite explizit $0$ → homogen.',
          2: 'Eine DGL muss nicht $x$ explizit enthalten — autonome DGL sind völlig normal. $y\' = -y$ ist eine lineare, homogene DGL 1. Ordnung.',
          3: '$y\'$ und $-y$ sind in 1. Potenz und ohne Produkte vorhanden → linear. Außerdem hat das nichts mit „Gleichgewicht der Seiten" zu tun.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['dgl-homogen'] },
      ),
      matching(
        'Ordne jeder DGL die richtige Klassifikation (Linearität + Homogenität) zu.',
        [
          { left: '$\\ddot x + 4x = 0$', right: 'linear, homogen' },
          { left: '$\\ddot x + 4x = \\sin t$', right: 'linear, inhomogen' },
          { left: '$\\ddot x + x^3 = 0$', right: 'nichtlinear, homogen' },
          { left: '$\\ddot x + x\\cdot \\dot x = e^t$', right: 'nichtlinear, inhomogen' },
        ],
        `**Ansatz:** Erst Linearität (kommen $x, \\dot x, \\ddot x$ nur in 1. Potenz und ohne Produkte vor?), dann Homogenität (rechte Seite $= 0$?).

**Rechnung:**
- $\\ddot x + 4x = 0$: linear (1. Potenz), homogen (rechts $0$).
- $\\ddot x + 4x = \\sin t$: linear, aber inhomogen (rechts $\\sin t \\neq 0$).
- $\\ddot x + x^3 = 0$: nichtlinear ($x^3$ ist 3. Potenz), aber rechte Seite $= 0$ → homogen.
- $\\ddot x + x \\dot x = e^t$: nichtlinear (Produkt $x \\dot x$), und inhomogen (rechts $e^t \\neq 0$).

**Probe:** Bei den linearen DGL kann man Standardform $\\ddot x + p_1\\,\\dot x + p_0\\,x = q(t)$ herstellen. Bei den nichtlinearen DGL nicht — sie haben Potenzen oder Produkte der Unbekannten.

**Typischer Fehler:** Annehmen „nichtlinear ⇒ inhomogen". Beide Eigenschaften sind unabhängig — eine DGL kann nichtlinear *und* homogen sein (3. Beispiel).`,
        [
          'Zwei separate Fragen: linear/nichtlinear und homogen/inhomogen.',
          'Beide Eigenschaften sind unabhängig voneinander.',
          'Linear bezieht sich auf $x, \\dot x, \\ddot x$; homogen auf die rechte Seite.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['dgl-homogen', 'dgl-linear'] },
      ),
    ],

    // ── [3] Anfangswertproblem (AWP) ────────────────────────────────────
    3: [
      tf(
        'Ohne Anfangsbedingung hat die DGL $y\' = ky$ im Allgemeinen unendlich viele Lösungen, mit Anfangsbedingung dagegen typischerweise genau eine.',
        true,
        `**Ansatz:** Die allgemeine Lösung einer DGL 1. Ordnung enthält genau eine Integrations­konstante $C$ — erst eine Anfangsbedingung legt sie fest.

**Rechnung:** $y\' = ky$ hat die Lösungsfamilie $y(x) = C\\,e^{kx}$ — für jedes $C \\in \\mathbb{R}$ eine eigene Lösung. Eine Anfangsbedingung $y(x_0) = y_0$ liefert $C = y_0\\,e^{-k x_0}$ → eindeutige Lösung.

**Probe:** Zeichne mehrere $C$-Werte: man sieht eine Kurvenschar (Lösungs­schar). Jede Anfangsbedingung wählt genau eine Kurve aus.

**Typischer Fehler:** Glauben, jede DGL habe ohne Bedingung „die" Lösung. Es gibt unendlich viele — die Anfangsbedingung wählt eine konkrete aus.`,
        [
          'Wie sieht die allgemeine Lösung von $y\' = ky$ aus?',
          'Wie viele freie Konstanten enthält sie?',
          'Wie viele Bedingungen braucht man zur eindeutigen Festlegung einer DGL Ordnung $n$?',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['awp'] },
      ),
      mc(
        'Welche Funktion löst das AWP $y\' = y$, $y(0) = 5$?',
        [
          '$y(x) = 5\\,e^x$',
          '$y(x) = e^x + 5$',
          '$y(x) = 5\\,e^{5x}$',
          '$y(x) = 5x + 1$',
        ],
        0,
        `**Ansatz:** AWP-Lösung in zwei Schritten: (1) allgemeine Lösung der DGL bestimmen, (2) $C$ aus Anfangsbedingung fixieren.

**Rechnung:** Allgemeine Lösung von $y\' = y$ ist $y(x) = C\\,e^x$. Anfangsbedingung $y(0) = 5$: $C\\,e^{0} = C = 5$. Damit $y(x) = 5\\,e^x$.

**Probe:** Ableiten: $y\'(x) = 5\\,e^x = y(x)$ ✓. Anfangswert: $y(0) = 5\\,e^{0} = 5$ ✓.

**Typischer Fehler:** Anfangsbedingung *additiv* einbauen ($e^x + 5$ statt $5\\,e^x$). Bei $y\'=ky$ gehört die Konstante als *Vorfaktor* vor die e-Funktion, nicht als Summand.`,
        [
          'Allgemeine Lösung: $y = C\\,e^x$.',
          'Setze $x = 0$ ein, um $C$ zu finden.',
          'Vorfaktor $C$ — nicht Summand.',
        ],
        {
          1: 'Hier wurde $C$ additiv angesetzt: $y(0) = e^{0} + 5 = 6 \\neq 5$ — und die DGL stimmt auch nicht ($y\' = e^x \\neq e^x + 5 = y$).',
          2: 'Der Exponent $5$ wurde aus der Anfangsbedingung übernommen — falsch. Der Exponent kommt aus dem Koeffizienten in $y\' = ky$ (hier $k = 1$). Probe: $y\' = 25\\,e^{5x} \\neq 5\\,e^{5x} = y$.',
          3: 'Die DGL $y\'=y$ verlangt $y\'$ proportional zu $y$ — bei $y = 5x + 1$ ist $y\' = 5 = $ const, aber $y$ wächst linear. Die Lösung muss exponentiell sein.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['awp'] },
      ),
      mc(
        'Welche Funktion löst das AWP $y\' = 2x$, $y(1) = 4$?',
        [
          '$y(x) = x^2 + 3$',
          '$y(x) = x^2 + 4$',
          '$y(x) = 2x + 2$',
          '$y(x) = x^2 - 3$',
        ],
        0,
        `**Ansatz:** Hier ist $y\'$ direkt eine Funktion von $x$ — also einmal integrieren und Anfangsbedingung einsetzen.

**Rechnung:** $y(x) = \\int 2x\\,dx = x^2 + C$. Anfangsbedingung $y(1) = 4$: $1^2 + C = 4 \\Rightarrow C = 3$. Damit $y(x) = x^2 + 3$.

**Probe:** Ableiten: $y\'(x) = 2x$ ✓. Anfangswert: $y(1) = 1 + 3 = 4$ ✓.

**Typischer Fehler:** $C$ einfach gleich dem Anfangswert setzen ($C = 4$, also $y = x^2 + 4$) — das ignoriert, dass an der Stelle $x_0 = 1$ schon ein Beitrag $1^2 = 1$ aus der Stamm­funktion kommt.`,
        [
          'Stamm­funktion von $2x$ ist $x^2$ (plus $C$).',
          'Setze $x = 1$ in $y(x) = x^2 + C$ und löse nach $C$.',
          'Anfangs­stelle $x_0 = 1$, nicht $0$ — daran denken!',
        ],
        {
          1: 'Du hast $C = 4$ gesetzt, weil $y(1) = 4$. Aber $y(1) = 1 + C = 4$ ergibt $C = 3$, nicht $4$. Probe: $y(1) = 1 + 4 = 5 \\neq 4$.',
          2: 'Das wäre die Lösung von $y\' = 2$ (Konstante), nicht $y\' = 2x$. Bei $y = 2x + 2$ ist $y\' = 2$, nicht $2x$.',
          3: 'Vorzeichen­fehler: $y(1) = 1 - 3 = -2 \\neq 4$. Du hast vermutlich $C$ subtrahiert statt addiert.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['awp'] },
      ),
      mc(
        'Ein Lerner schreibt: „Lösung des AWP $y\' = 2y$, $y(0) = 5$ ist $y(x) = e^{2x}$." Welcher Fehler liegt vor?',
        [
          'DGL ist nicht erfüllt — $e^{2x}$ ist keine Lösung von $y\' = 2y$.',
          'Anfangs­bedingung wurde ignoriert: $e^{2x}$ liefert $y(0) = 1 \\neq 5$. Korrekt: $y(x) = 5\\,e^{2x}$.',
          'Vorzeichen falsch — die richtige Lösung ist $-5\\,e^{2x}$.',
          'Die Lösung ist nicht eindeutig, ohne Zusatz­bedingung gibt es mehrere.',
        ],
        1,
        `**Ansatz:** Zwei Bedingungen prüfen: (1) DGL, (2) Anfangs­bedingung. Beide *müssen* gleichzeitig erfüllt sein.

**Rechnung:** $y(x) = e^{2x}$: $y\'(x) = 2 e^{2x} = 2y$ ✓ (DGL erfüllt), aber $y(0) = e^{0} = 1 \\neq 5$ ✗ (Anfangs­bedingung verletzt). Korrekt: $y(x) = C\\,e^{2x}$ mit $C = y(0) = 5$ → $y(x) = 5\\,e^{2x}$.

**Probe:** Test der korrekten Lösung: $y\' = 10\\,e^{2x} = 2 \\cdot 5\\,e^{2x} = 2y$ ✓ und $y(0) = 5\\,e^0 = 5$ ✓.

**Typischer Fehler:** Nur die DGL prüfen und die Anfangsbedingung übersehen. Beim AWP gehören *beide* zur Lösung dazu — die DGL liefert die Lösungs­schar, die Anfangsbedingung wählt ein Mitglied aus.`,
        [
          'DGL erfüllt, Anfangs­bedingung erfüllt? Beides prüfen.',
          'Was liefert $y(x) = e^{2x}$ an $x = 0$?',
          'Die Konstante $C$ skaliert die Lösung, ohne die DGL zu verletzen.',
        ],
        {
          0: 'DGL ist erfüllt: $y\' = 2 e^{2x} = 2y$. Das Problem liegt in der Anfangsbedingung, nicht in der DGL selbst.',
          2: 'Vorzeichen ist nicht das Problem — $-5e^{2x}$ erfüllt zwar die DGL, gibt aber $y(0) = -5 \\neq 5$. Korrekt ist $+5e^{2x}$.',
          3: 'Die Lösung *ist* eindeutig — die DGL hat eine Lösungs­schar, und genau ein Mitglied erfüllt die Anfangsbedingung. Die Eindeutigkeit ist gegeben (Picard-Lindelöf).',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['awp'] },
      ),
      mc(
        '[PRÜFUNG] Newton\'sches Abkühlungs­gesetz: ein Kaffee mit $T(0) = 90\\,°\\mathrm{C}$ kühlt nach $T\'(t) = -0{,}1\\,(T - 20)$ ab (Umgebungs­temperatur $20\\,°\\mathrm{C}$, Zeit in Minuten). Welche Funktion löst das AWP?',
        [
          '$T(t) = 70\\,e^{-0{,}1\\,t} + 20$',
          '$T(t) = 90\\,e^{-0{,}1\\,t}$',
          '$T(t) = 20\\,e^{-0{,}1\\,t} + 70$',
          '$T(t) = 90 - 7t$',
        ],
        0,
        `**Ansatz:** Substitution $u(t) = T(t) - 20$ verwandelt das AWP in $u\' = -0{,}1\\,u$, $u(0) = 70$ — und das ist eine homogene lineare DGL 1. Ordnung.

**Rechnung:** $u\' = -0{,}1\\,u$ → $u(t) = C\\,e^{-0{,}1\\,t}$. AB: $u(0) = C = 70$. Damit $u(t) = 70\\,e^{-0{,}1\\,t}$ und $T(t) = u(t) + 20 = 70\\,e^{-0{,}1\\,t} + 20$.

**Probe:** $T\'(t) = 70 \\cdot (-0{,}1)\\,e^{-0{,}1\\,t} = -7\\,e^{-0{,}1\\,t}$. Auf der anderen Seite: $-0{,}1\\,(T - 20) = -0{,}1 \\cdot 70\\,e^{-0{,}1\\,t} = -7\\,e^{-0{,}1\\,t}$ ✓. Anfangswert: $T(0) = 70 + 20 = 90$ ✓. Grenzwert: $\\lim_{t\\to\\infty} T(t) = 20$ — Kaffee kühlt auf Umgebungs­temperatur ab ✓.

**Typischer Fehler:** Direkt $T(t) = 90\\,e^{-0{,}1\\,t}$ ansetzen — das gibt zwar $T(0)=90$, aber $\\lim T = 0\\,°\\mathrm{C}$ statt $20\\,°\\mathrm{C}$, und die DGL stimmt nicht.`,
        [
          'Verschiebe: $u = T - 20$ → $u\' = T\'$ und die DGL für $u$ wird homogen.',
          'Allgemeine Lösung von $u\' = -ku$ ist $u = C e^{-kt}$.',
          'Am Ende $u$ in $T$ zurücktransformieren: $T = u + 20$.',
        ],
        {
          1: '$T(0) = 90$ stimmt, aber Probe der DGL: $T\' = -9\\,e^{-0{,}1t}$, dagegen $-0{,}1(T - 20) = -0{,}1(90 e^{-0{,}1t} - 20) = -9 e^{-0{,}1t} + 2 \\neq T\'$. Außerdem geht $T \\to 0$ statt $20$ — physikalisch falsch.',
          2: '$T(0) = 90$ stimmt, aber $T \\to 70$ statt $20$ und Probe scheitert: $T\' = -2 e^{-0{,}1t}$, $-0{,}1(T - 20) = -0{,}1(20 e^{-0{,}1t} + 50) = -2 e^{-0{,}1t} - 5 \\neq T\'$.',
          3: 'Lineare Abkühlung passt nicht — die Steigung müsste mit dem aktuellen $T$ skalieren, nicht konstant sein. Probe: $T\' = -7$, aber $-0{,}1(T - 20) = -0{,}1(70 - 7t) = -7 + 0{,}7\\,t$ — stimmt nur bei $t = 0$.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['awp'] },
      ),
    ],

    // ── [4] ODE vs. PDE ─────────────────────────────────────────────────
    4: [
      tf(
        'Eine Differentialgleichung, in der die gesuchte Funktion nur von einer einzigen unabhängigen Variablen abhängt, heißt gewöhnliche Differentialgleichung (ODE).',
        true,
        `**Ansatz:** Klassifizierung nach Anzahl der unabhängigen Variablen der gesuchten Funktion.

**Rechnung:** Eine Funktion $y(x)$ oder $y(t)$ hat *eine* unabhängige Variable → DGL heißt *gewöhnlich* (engl. *ordinary differential equation*, ODE). Beispiele: $y\'+ y = 0$, $\\ddot x + \\omega^2 x = 0$.

**Probe:** Eine Funktion $u(x, t)$ — z. B. Temperatur in einem Stab über Zeit und Ort — hat zwei unabhängige Variablen → die DGL wäre eine *partielle DGL* (PDE), z. B. $u_t = u_{xx}$.

**Typischer Fehler:** „Gewöhnlich" mit „einfach" gleichsetzen. Auch hochkomplizierte DGL (z. B. $y^{(8)} + \\sinh(y)\\cdot y\' = e^{x^2}$) bleiben gewöhnlich, solange nur eine unabh. Variable im Spiel ist.`,
        [
          'Zähle die unabhängigen Variablen der gesuchten Funktion.',
          '$y(x)$ → eine Variable; $u(x, t)$ → zwei Variablen.',
          'ODE = ordinary differential equation — eine Variable.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['ode-vs-pde'] },
      ),
      mc(
        'Welche der folgenden Gleichungen ist eine *partielle* Differentialgleichung (PDE)?',
        [
          '$y\'\' + y = \\sin x$',
          '$\\dfrac{\\partial u}{\\partial t} = \\alpha\\,\\dfrac{\\partial^2 u}{\\partial x^2}$',
          '$y\' = x\\,y$',
          '$\\ddot s + 2\\dot s = g$',
        ],
        1,
        `**Ansatz:** PDE erkennen an *partiellen* Ableitungen $\\partial/\\partial x$, $\\partial/\\partial t$ — und an einer gesuchten Funktion mit *mehreren* unabhängigen Variablen.

**Rechnung:**
- $y\'\' + y = \\sin x$: $y(x)$ — eine Variable → ODE.
- $u_t = \\alpha\\,u_{xx}$: $u(x, t)$ — zwei Variablen → **PDE** ✓ (Wärme­leitungs­gleichung).
- $y\' = xy$: $y(x)$ → ODE.
- $\\ddot s + 2\\dot s = g$: $s(t)$ → ODE.

**Probe:** PDE-Schreibweise: $\\partial$-Symbol oder Indizes $u_x, u_t$ statt der einfachen Strich-Notation $y\'$. Hier eindeutig: $\\partial u / \\partial t$, $\\partial^2 u / \\partial x^2$ → zwei verschiedene Ableitungs­variablen.

**Typischer Fehler:** Höhere Ordnung mit PDE verwechseln. Auch $y^{(4)} + y = 0$ bleibt eine ODE — die Ableitungs­ordnung sagt nichts über die Anzahl der unabh. Variablen.`,
        [
          'Suchst du nach $\\partial$-Symbolen oder Indizes wie $u_x$?',
          'Wie viele unabhängige Variablen hat die gesuchte Funktion?',
          'PDE = partial differential equation = partielle Ableitungen.',
        ],
        {
          0: '$y\'\' + y = \\sin x$ hat $y(x)$ — eine Variable. Die zweite Ableitung ist nur höhere Ordnung, nicht „partiell".',
          2: '$y\' = xy$ — gesuchte Funktion $y(x)$, eine Variable. Auch wenn $x$ als Koeffizient auftritt, bleibt es eine ODE.',
          3: '$s(t)$ ist eine Funktion einer Variablen ($t$ = Zeit). Das ist eine ODE 2. Ordnung — typische Bewegungs­gleichung in der Mechanik.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['ode-vs-pde'] },
      ),
      mc(
        'Die Wellengleichung $u_{tt} = c^2\\,u_{xx}$ für $u(x, t)$ ist:',
        [
          'eine ODE — sie hat ja nur eine unabhängige Variable.',
          'eine algebraische Gleichung, weil keine Ableitungen vorkommen.',
          'eine PDE — die gesuchte Funktion $u(x, t)$ hängt von zwei unabh. Variablen ab, und es treten partielle Ableitungen nach $x$ und $t$ auf.',
          'ein System gewöhnlicher DGL.',
        ],
        2,
        `**Ansatz:** Anzahl der unabhängigen Variablen der gesuchten Funktion zählen — und prüfen, ob partielle Ableitungen auftreten.

**Rechnung:** $u(x, t)$ hängt von $x$ (Ort) und $t$ (Zeit) ab. Die Notation $u_{tt}$ steht für $\\partial^2 u / \\partial t^2$, $u_{xx}$ für $\\partial^2 u / \\partial x^2$ — also partielle Ableitungen. → **PDE**.

**Probe:** Lösungen der Wellen­gleichung sind Funktionen wie $u(x, t) = f(x - ct) + g(x + ct)$ — sie hängen explizit von beiden Variablen ab.

**Typischer Fehler:** Den Index $tt$ als „zweite Ableitung in $t$" lesen, ohne die *Partialität* zu erkennen. Bei nur einer Variablen wäre die Notation $u\'\'$ oder $\\ddot u$ — der Index $u_{tt}$ deutet auf partielle Ableitungen.`,
        [
          'Wie viele unabhängige Variablen hat $u(x, t)$?',
          'Indices $u_{tt}, u_{xx}$ stehen für $\\partial^2 u/\\partial t^2$ und $\\partial^2 u/\\partial x^2$.',
          'Beide Ableitungen treten gleichzeitig auf — typisches PDE-Merkmal.',
        ],
        {
          0: '$u(x, t)$ hat *zwei* unabh. Variablen ($x$ und $t$) — also keine ODE.',
          1: 'Indizes $u_{tt}, u_{xx}$ sind eine Kurzschreib­weise für partielle Ableitungen, nicht für Indizierte Variablen. Es kommen sehr wohl Ableitungen vor.',
          3: 'Ein System gewöhnlicher DGL bestünde aus mehreren *Funktionen* einer einzigen Variablen, z. B. $y_1\'(t)$ und $y_2\'(t)$. Hier ist es eine *einzelne* Funktion zweier Variablen — also eine PDE.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['ode-vs-pde'] },
      ),
      mc(
        'Ein Lerner sagt: „Das System $y_1\'(t) = 2y_2$, $y_2\'(t) = -y_1$ ist eine PDE, weil zwei Funktionen $y_1, y_2$ vorkommen." Welcher Hinweis trifft zu?',
        [
          'Stimmt — sobald mehr als eine Funktion vorkommt, spricht man von PDE.',
          'Mehrere Funktionen $\\neq$ PDE. Eine PDE hat *eine* Funktion mit *mehreren* unabhängigen Variablen. Hier hängen $y_1, y_2$ beide nur von $t$ ab → ODE-System.',
          'Es ist gar keine DGL, weil zwei Gleichungen statt einer da stehen.',
          'Es ist eine PDE, aber nur, wenn man sie als Vektorfunktion $\\vec y(t)$ schreibt.',
        ],
        1,
        `**Ansatz:** Klassifizierung nach: *eine* Funktion mit *mehreren* unabh. Variablen → PDE; *eine oder mehrere* Funktionen mit jeweils *einer* unabh. Variablen → ODE (ggf. ODE-System).

**Rechnung:** $y_1(t)$ und $y_2(t)$ sind beides Funktionen *einer* Variablen ($t$). Es kommt keine partielle Ableitung vor (nur $\\dot y_1, \\dot y_2$). → **System gewöhnlicher DGL** (ODE-System), keine PDE.

**Probe:** In Matrixform $\\vec y\'(t) = A\\,\\vec y(t)$ — nach wie vor nur $t$ als unabh. Variable; alle Ableitungen sind $\\frac{d}{dt}$, nicht $\\partial/\\partial t$ und $\\partial/\\partial x$ gleichzeitig.

**Typischer Fehler:** „Mehrere Variablen" mit „mehrere Funktionen" verwechseln. Anzahl der *Funktionen* macht aus der DGL ein *System*; Anzahl der *unabhängigen Variablen* entscheidet zwischen ODE und PDE.`,
        [
          '*Funktionen* zählen vs. *unabhängige Variablen* zählen.',
          'PDE-Indikator: $\\partial/\\partial x$ UND $\\partial/\\partial t$ in derselben Gleichung.',
          'Hier nur $\\dot y_1, \\dot y_2$ → ein gemeinsamer Ableitungs­operator $d/dt$.',
        ],
        {
          0: 'Das ist genau der Irrtum — die Anzahl der Funktionen ist irrelevant. PDE braucht *mehrere unabh. Variablen* in *einer* Funktion.',
          2: 'Doch — Systeme gewöhnlicher DGL sind völlig normal und werden gemeinsam gelöst (z. B. Eigenwert­methode). Mehrere Gleichungen schließen DGL nicht aus.',
          3: 'Die Vektor­schreibweise $\\vec y(t) = (y_1, y_2)^T$ ändert nichts an der Klassifikation. $\\vec y$ hängt von einer Variablen $t$ ab → bleibt ein ODE-System.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['ode-vs-pde'] },
      ),
      matching(
        'Ordne jede Gleichung der korrekten Klassifikation zu.',
        [
          { left: '$y\'(x) = 2y$', right: 'ODE 1. Ordnung' },
          { left: '$\\ddot x + \\omega^2 x = 0$', right: 'ODE 2. Ordnung' },
          { left: '$u_t = \\alpha\\,u_{xx}$', right: 'PDE 2. Ordnung' },
          { left: '$u_t + u\\,u_x + u_{xxx} = 0$', right: 'PDE 3. Ordnung (Korteweg-de Vries)' },
        ],
        `**Ansatz:** Erst nach Anzahl der unabh. Variablen klassifizieren (ODE/PDE), dann nach höchster Ableitung (Ordnung).

**Rechnung:**
- $y\'(x) = 2y$: $y(x)$, höchste $y\'$ → ODE 1. Ordnung.
- $\\ddot x + \\omega^2 x = 0$: $x(t)$, höchste $\\ddot x$ → ODE 2. Ordnung (harmonischer Oszillator).
- $u_t = \\alpha\\,u_{xx}$: $u(x, t)$, höchste $u_{xx}$ → PDE 2. Ordnung (Wärme­leitung).
- $u_t + u\\,u_x + u_{xxx} = 0$: $u(x, t)$, höchste $u_{xxx}$ → PDE 3. Ordnung (KdV-Gleichung).

**Probe:** Test pro Eintrag: Anzahl Variablen der gesuchten Funktion zählen — und Striche/Indizes der höchsten Ableitung.

**Typischer Fehler:** Bei der KdV-Gleichung wegen $u\\cdot u_x$ als „nichtlinear" abstempeln und vergessen, die Ordnung zu bestimmen. Nichtlinearität und Ordnung sind unabhängige Kategorien.`,
        [
          'Erst ODE/PDE (eine vs. mehrere unabh. Variablen).',
          'Dann Ordnung (höchste Ableitung).',
          'Indizes wie $u_{xxx}$ heißen drei partielle Ableitungen nach $x$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['ode-vs-pde'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // dgl-1-2 — Trennung der Variablen  (5 subGoals)
  // Je ≥ 5 Aufgaben = mind. 25 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-1-2': {

    // ── [0] Anwendbarkeit erkennen: y' = f(x)·g(y) ──────────────────────
    0: [
      tf(
        'Die DGL $y\' = x\\cdot y^2$ lässt sich mit Trennung der Variablen lösen.',
        true,
        `**Ansatz:** TdV ist anwendbar, sobald die rechte Seite ein *Produkt* aus reiner $x$- und reiner $y$-Funktion ist: $y\' = f(x)\\cdot g(y)$.

**Rechnung:** Hier $f(x) = x$ und $g(y) = y^2$. Trennung: $\\frac{dy}{y^2} = x\\,dx$ — beide Seiten getrennt integrierbar.

**Probe:** $\\int \\frac{dy}{y^2} = -\\frac{1}{y}$, $\\int x\\,dx = \\frac{x^2}{2}+C_1$. Das gibt $-1/y = x^2/2 + C_1$ → $y = -1/(x^2/2 + C_1)$ — wohldefinierte Lösungs­schar.

**Typischer Fehler:** Annehmen, $y^2$ schließe TdV aus — tatsächlich ist *jede* Funktion von $y$ als $g(y)$ erlaubt, solange $y$ und $x$ in der DGL nicht *summiert* oder *verschachtelt* sind.`,
        [
          'Lässt sich die rechte Seite als Produkt $f(x)\\cdot g(y)$ schreiben?',
          'Hier: $x\\cdot y^2$ — der erste Faktor enthält nur $x$, der zweite nur $y$.',
          'TdV verlangt Produktstruktur, nicht Linearität in $y$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['tdv-erkennen'] },
      ),
      mc(
        'Welche der folgenden DGL ist *nicht* mit Trennung der Variablen lösbar?',
        [
          '$y\' = x\\cdot y$',
          '$y\' = x + y$',
          '$y\' = e^x \\cdot \\sin(y)$',
          '$y\' = \\frac{y}{x}$',
        ],
        1,
        `**Ansatz:** Pro Option prüfen: lässt sich die rechte Seite als Produkt $f(x)\\cdot g(y)$ schreiben? Eine Summe oder eine verschachtelte Funktion zerstört die Produktstruktur.

**Rechnung:**
- $y\' = xy$: Produkt mit $f(x)=x, g(y)=y$ → TdV-lösbar.
- $y\' = x + y$: *Summe* — keine Produkt­struktur ($\\frac{dy}{x+y}$ enthält links $x$ und $y$ gemeinsam) → **nicht TdV-lösbar**.
- $y\' = e^x \\sin(y)$: Produkt mit $f(x)=e^x, g(y)=\\sin(y)$ → TdV-lösbar.
- $y\' = y/x$: Produkt mit $f(x)=1/x, g(y)=y$ → TdV-lösbar.

**Probe:** Versuch der Trennung bei $y\' = x+y$: $\\frac{dy}{x+y} = dx$ — die linke Seite enthält weiterhin $x$, also nicht in reinen $y$-Faktor isoliert. Die DGL braucht andere Methoden (z. B. Substitution $u = x+y$ oder lineare DGL 1. Ordnung).

**Typischer Fehler:** Quotienten als „nicht trennbar" abstempeln — $y/x$ ist ein Produkt $(1/x)\\cdot y$ und damit klassisch trennbar.`,
        [
          'Pro Option fragen: rechte Seite = $f(x)\\cdot g(y)$?',
          'Eine *Summe* aus $x$ und $y$ ist nie ein reines Produkt.',
          'Quotienten und Produkte aus $x$- und $y$-Funktionen sind erlaubt.',
        ],
        {
          0: 'Klassisches TdV-Beispiel: $f(x)=x, g(y)=y$. Trennung $\\frac{dy}{y}=x\\,dx$ funktioniert.',
          2: 'Auch wenn $\\sin(y)$ kompliziert aussieht — als $g(y)$ ist es erlaubt. Trennung: $\\frac{dy}{\\sin y} = e^x\\,dx$ → integrierbar.',
          3: 'Quotient ≠ nicht trennbar. $y/x = (1/x)\\cdot y$ ist ein Produkt aus reiner $x$-Funktion und reiner $y$-Funktion.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['tdv-erkennen'] },
      ),
      mc(
        'Ist die DGL $y\' = x + y$ mit Trennung der Variablen lösbar?',
        [
          'Ja, weil $x$ und $y$ vorkommen.',
          'Nein, weil sich die rechte Seite nicht als Produkt $f(x)\\cdot g(y)$, sondern nur als Summe schreiben lässt.',
          'Ja, weil man die Gleichung in $\\frac{dy}{x+y} = dx$ umstellen kann.',
          'Ja, weil sowohl $x$ als auch $y$ auf der rechten Seite getrennt voneinander stehen.',
        ],
        1,
        `**Ansatz:** Voraussetzung für TdV: die rechte Seite muss faktorisierbar in eine reine $x$- und eine reine $y$-Funktion sein.

**Rechnung:** $x+y$ ist eine Summe. Es gibt *keine* Funktionen $f(x)$ und $g(y)$ mit $f(x)\\cdot g(y) = x+y$ für alle $(x,y)$ (formaler Beweis: betrachte verschiedene $x$-Werte — die Abhängigkeit von $y$ wäre nicht konsistent). → DGL ist *nicht* TdV-lösbar.

**Probe:** Diese DGL ist eine *lineare DGL 1. Ordnung* ($y\' - y = x$) und wird mit dem integrierenden Faktor $\\mu = e^{-x}$ gelöst — eine andere Methode.

**Typischer Fehler:** Die formale Umstellung $\\frac{dy}{x+y} = dx$ als „erfolgreich getrennt" deuten. Auf der linken Seite steht aber immer noch $x$ — die Trennung in $x$- und $y$-Hälften ist *nicht* gelungen.`,
        [
          'Was unterscheidet ein Produkt von einer Summe?',
          'Produkt: $f(x)\\cdot g(y)$ — jeder Faktor nur eine Variable.',
          'Versuch der Trennung: bleibt $x$ auf der $y$-Seite stehen → keine echte Trennung.',
        ],
        {
          0: 'Beim TdV reicht „kommen $x$ und $y$ vor" nicht — sie müssen *multiplikativ* getrennt sein, nicht additiv.',
          2: 'Die Umstellung sieht aus wie Trennung, aber $x+y$ im Nenner enthält weiterhin $x$ — also ist nichts wirklich getrennt. Beide Seiten sind nicht unabhängig integrierbar.',
          3: '„Getrennt voneinander" auf derselben Seite reicht nicht — sie müssen multiplikativ verbunden sein. Eine Summe trennt sich nicht in reine $x$- und $y$-Anteile.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['tdv-erkennen'] },
      ),
      mc(
        'Ein Lerner sagt: „$y\' = x+y$ ist mit TdV lösbar — ich schreibe einfach $\\frac{dy}{x+y} = dx$, das ist doch getrennt." Welcher Hinweis ist korrekt?',
        [
          'Stimmt — das ist eine valide Trennung der Variablen.',
          'Falsch: in $\\frac{dy}{x+y}$ steht *links* sowohl $x$ als auch $y$ — keine reine $y$-Funktion. TdV verlangt $\\frac{dy}{g(y)}=f(x)\\,dx$, also rein-$y$ links und rein-$x$ rechts.',
          'Falsch: die rechte Seite müsste $\\,dy$ statt $\\,dx$ heißen.',
          'Falsch: man muss erst durch $x$ dividieren, dann ist die DGL trennbar.',
        ],
        1,
        `**Ansatz:** Zentraler Test der TdV: nach dem Sortieren steht *links* nur $y$ (mit $dy$), *rechts* nur $x$ (mit $dx$). Mischterme sind nicht erlaubt.

**Rechnung:** $\\frac{dy}{x+y} = dx$ — der Nenner $x+y$ ist eine *gemischte* Funktion in $x$ und $y$. Die linke Seite ist also keine reine $y$-Funktion. → Trennung ist *nicht* gelungen, auch wenn die Schreib­weise so aussieht.

**Probe:** Funktionierende Trennung wäre z. B. bei $y\' = xy$: $\\frac{dy}{y} = x\\,dx$ — Nenner links nur $y$, Faktor rechts nur $x$ ✓.

**Typischer Fehler:** Das Vorhandensein eines Bruchs mit $dy$/$dx$ als „Trennung" werten, ohne den Inhalt der jeweiligen Seite zu prüfen. Trennung ist *inhaltlich* gemeint — $x$- und $y$-Variablen müssen physisch getrennt vorliegen.`,
        [
          'Was steht im Nenner der linken Seite?',
          'Ist das eine reine $y$-Funktion oder gemischt?',
          'TdV-Voraussetzung: rechte Seite = $f(x)\\cdot g(y)$. Eine Summe lässt sich nicht so faktorisieren.',
        ],
        {
          0: 'Keine valide Trennung — der Nenner $x+y$ enthält weiterhin $x$. Nach „Trennung" muss $x$ vollständig auf der $dx$-Seite stehen.',
          2: 'Das ist nicht das Problem — Differentiale stehen schon korrekt. Das Problem ist die *Mischung* von $x$ und $y$ im Nenner links.',
          3: 'Division durch $x$ hilft nicht: $y\' = x+y$ wird zu $y\'/x = 1 + y/x$ — immer noch keine TdV-Form. Diese DGL braucht den integrierenden Faktor (lineare DGL 1. Ordnung).',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['tdv-erkennen'] },
      ),
      matching(
        'Ordne jeder DGL die korrekte TdV-Klassifikation zu.',
        [
          { left: '$y\' = x\\cdot y$', right: 'TdV-lösbar mit $f(x)=x$, $g(y)=y$' },
          { left: '$y\' = e^x\\cdot y^2$', right: 'TdV-lösbar mit $f(x)=e^x$, $g(y)=y^2$' },
          { left: '$y\' = x + y$', right: 'Nicht TdV-lösbar (Summe statt Produkt)' },
          { left: '$y\' = \\sin(x+y)$', right: 'Nicht TdV-lösbar (Argument der Funktion ist gemischt)' },
        ],
        `**Ansatz:** Pro DGL prüfen, ob die rechte Seite als $f(x)\\cdot g(y)$ schreibbar ist — und falls ja, $f$ und $g$ konkret benennen.

**Rechnung:**
- $y\' = xy$: Klares Produkt $f(x)=x$, $g(y)=y$.
- $y\' = e^x y^2$: Produkt $f(x)=e^x$, $g(y)=y^2$.
- $y\' = x+y$: Summe — keine Produkt­struktur möglich.
- $y\' = \\sin(x+y)$: Funktion mit gemischtem Argument — $\\sin$ lässt sich nicht in $f(x)\\cdot g(y)$ faktorisieren.

**Probe:** Trennung der zwei TdV-Beispiele: $\\frac{dy}{y} = x\\,dx$ bzw. $\\frac{dy}{y^2} = e^x\\,dx$ — beide Seiten unabhängig integrierbar.

**Typischer Fehler:** $\\sin(x+y)$ wegen „enthält $\\sin$" als TdV-lösbar einordnen — das Argument $x+y$ ist verschachtelt. TdV-lösbar wäre $\\sin(x)\\cdot \\sin(y)$, aber nicht $\\sin(x+y)$.`,
        [
          'Erst Produkt­struktur prüfen, dann $f$ und $g$ benennen.',
          'Summen oder verschachtelte Funktionen brechen die Trennung.',
          '$\\sin(x+y) \\neq \\sin(x)\\cdot \\sin(y)$ — Argument muss eine reine Variable sein.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['tdv-erkennen'] },
      ),
    ],

    // ── [1] Trennen: dy/g(y) = f(x)·dx ──────────────────────────────────
    1: [
      tf(
        'Aus $y\' = xy$ folgt nach Trennung der Variablen $\\frac{dy}{y} = x\\,dx$.',
        true,
        `**Ansatz:** Multiplikation mit $dx$ und Division durch $y$ — beides algebraisch erlaubt, solange $y \\neq 0$.

**Rechnung:** $\\frac{dy}{dx} = xy$ → mit $dx$ multiplizieren: $dy = xy\\,dx$ → durch $y$ dividieren: $\\frac{dy}{y} = x\\,dx$.

**Probe:** Beide Seiten haben jetzt nur eine Variable: links $y$ und $dy$, rechts $x$ und $dx$. Bereit zum Integrieren.

**Typischer Fehler:** Statt durch $y$ zu dividieren mit $y$ multiplizieren ($y\\,dy = x\\,dx$ wäre für $y\' = x/y$ richtig). Die Operation richtet sich danach, ob $y$ im *Zähler* oder *Nenner* der Produktstruktur sitzt.`,
        [
          'Welche algebraische Operation trennt die Variablen?',
          '$y$ im Produkt mit $dx$ → durch $y$ dividieren.',
          'Test: stehen $y, dy$ allein links und $x, dx$ allein rechts?',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['tdv-trennen'] },
      ),
      mc(
        'Trenne die Variablen in $y\' = \\frac{x}{y}$. Welche getrennte Form ist korrekt?',
        [
          '$y\\,dy = x\\,dx$',
          '$\\frac{dy}{y} = x\\,dx$',
          '$\\frac{dy}{x} = y\\,dx$',
          '$dy = \\frac{x}{y}\\,dx$',
        ],
        0,
        `**Ansatz:** $y$ steht im *Nenner* der rechten Seite ($\\frac{x}{y} = x\\cdot y^{-1}$). Beim Trennen wandert $y^{-1}$ als $y^{+1}$ auf die linke Seite zu $dy$.

**Rechnung:** $\\frac{dy}{dx} = \\frac{x}{y}$. Mit $dx$ multiplizieren: $dy = \\frac{x}{y}\\,dx$. Mit $y$ multiplizieren: $y\\,dy = x\\,dx$. Beide Seiten getrennt ✓.

**Probe:** Integration ergibt $\\frac{y^2}{2} = \\frac{x^2}{2} + C_1$ → $y^2 = x^2 + C$ — Hyperbel-Schar als Lösung.

**Typischer Fehler:** Reflexartig durch $y$ dividieren statt mit $y$ multiplizieren. Nur wenn $y$ im *Zähler* steht ($y\' = xy$), wird durch $y$ dividiert.`,
        [
          'Wo steht $y$ in $\\frac{x}{y}$ — Zähler oder Nenner?',
          'Ist $y$ im Nenner, multipliziere mit $y$ (statt zu dividieren).',
          'Test: hat die linke Seite nur $y$ und $dy$? Hat die rechte Seite nur $x$ und $dx$?',
        ],
        {
          1: 'Falsche Operation: $\\frac{x}{y}$ enthält $y$ im *Nenner*. Du müsstest mit $y$ multiplizieren, nicht durch $y$ dividieren.',
          2: 'Hier wurden $x$ und $y$ vertauscht — links steht $dy/x$, das ist gemischt. Korrekt: links nur $y$, rechts nur $x$.',
          3: 'Die rechte Seite enthält weiterhin $y$ ($x/y$). Die Trennung ist nicht abgeschlossen — eine Form, in der $y$ und $x$ noch gemischt sind, hilft nicht.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['tdv-trennen'] },
      ),
      mc(
        'Trenne die Variablen in $y\' = e^{x-y}$. Welche getrennte Form ist korrekt?',
        [
          '$e^{y}\\,dy = e^{x}\\,dx$',
          '$\\frac{dy}{e^x} = e^{-y}\\,dx$',
          '$\\frac{dy}{y} = e^x\\,dx$',
          '$e^{x-y}\\,dy = dx$',
        ],
        0,
        `**Ansatz:** Die Exponentialfunktion $e^{x-y}$ zerlegt sich mit dem Potenzgesetz: $e^{x-y} = e^x \\cdot e^{-y}$ — also Produkt aus reiner $x$- und reiner $y$-Funktion.

**Rechnung:** $\\frac{dy}{dx} = e^x\\cdot e^{-y}$. Mit $dx$ multiplizieren: $dy = e^x\\cdot e^{-y}\\,dx$. Durch $e^{-y}$ dividieren (= mit $e^{y}$ multiplizieren): $e^{y}\\,dy = e^{x}\\,dx$.

**Probe:** Integration: $e^{y} = e^{x} + C_1$ → $y(x) = \\ln(e^{x} + C)$.

**Typischer Fehler:** Das Potenzgesetz $e^{x-y} = e^x/e^y$ vergessen und stattdessen die DGL mit $e^x$ statt mit $e^{y}$ trennen.`,
        [
          'Potenzgesetz: $e^{x-y} = e^x \\cdot e^{-y}$.',
          'Wo steht $e^{-y}$ — und auf welche Seite muss es?',
          'Multiplikation mit $e^{y}$ ist die Inverse von $e^{-y}$.',
        ],
        {
          1: 'Hier wurde $e^x$ unter den $dy$-Bruch geschoben — das vermischt $x$ und $y$ wieder. Korrekt: $e^{y}\\,dy = e^{x}\\,dx$, beide Seiten klar getrennt.',
          2: 'Du hast $e^{-y}$ als $1/y$ gelesen — das ist falsch. $e^{-y} \\neq 1/y$. Das Inverse von $e^{-y}$ ist $e^{+y}$, nicht $y$.',
          3: 'Hier ist $e^{x-y}$ noch links als Faktor zu $dy$ — die Trennung ist nicht erfolgt. Du musst $e^{x-y}$ erst zerlegen ($=e^x e^{-y}$) und dann sortieren.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['tdv-trennen'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\' = \\frac{x^2}{y}$ die Trennung als $\\frac{dy}{y} = x^2\\,dx$. Was ist der entscheidende Fehler?',
        [
          'Korrekt — das ist die Standard­trennung.',
          'Falsch: $y$ steht im Nenner der rechten Seite, also muss man mit $y$ *multiplizieren*, nicht dividieren. Korrekt: $y\\,dy = x^2\\,dx$.',
          'Falsch: $x^2$ darf bei TdV nicht vorkommen, nur $x$.',
          'Falsch: rechte Seite müsste $x^2/y\\,dx$ heißen.',
        ],
        1,
        `**Ansatz:** Vor dem Trennen die Position von $y$ in der rechten Seite prüfen — Zähler oder Nenner entscheidet, ob multipliziert oder dividiert wird.

**Rechnung:** $y\' = \\frac{x^2}{y} = x^2 \\cdot \\frac{1}{y}$. Multipliziere mit $y$ und $dx$: $y\\,dy = x^2\\,dx$. Lerner-Form $\\frac{dy}{y} = x^2\\,dx$ entspräche $y\' = \\frac{x^2}{1/y} \\cdot y = x^2 \\cdot y^2$ — falsche DGL.

**Probe:** Korrekte Integration $\\frac{y^2}{2} = \\frac{x^3}{3} + C_1$ → $y^2 = \\frac{2x^3}{3} + C$. Lerner-Variante $\\ln|y| = x^3/3 + C_1$ → $y = C\\,e^{x^3/3}$ ist Lösung der falschen DGL $y\' = x^2 y$.

**Typischer Fehler:** Die Form $\\frac{dy}{y}$ als „Standard­form für TdV" verallgemeinern. Tatsächlich entsteht $\\frac{dy}{y}$ nur, wenn $y$ im Zähler der rechten Seite steht ($y\' = f(x)\\cdot y$), nicht im Nenner.`,
        [
          'Welche Operation überführt $y\' = x^2/y$ korrekt in getrennte Form?',
          '$y$ im Nenner → mit $y$ multiplizieren, nicht durch $y$ dividieren.',
          'Test: einsetzen der Lerner-Form in die DGL — passt es zur ursprünglichen?',
        ],
        {
          0: 'Die Form $\\frac{dy}{y} = x^2\\,dx$ stammt aus der DGL $y\' = x^2 \\cdot y$, *nicht* $y\' = x^2/y$. Der Unterschied: $y$ im Zähler vs. Nenner.',
          2: 'Doch — beliebige Funktionen von $x$ sind als $f(x)$ erlaubt. $x^2$ ist als $f(x)=x^2$ kein Problem.',
          3: 'Die rechte Seite war ja in der Frage schon $\\frac{x^2}{y}$. Nach dem Trennen muss $y$ aber von rechts verschwinden — nur $x^2\\,dx$ steht dann rechts.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['tdv-trennen'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $y\' = xy$ mit Trennung der Variablen in die richtige Reihenfolge.',
        [
          'Erkennen: rechte Seite ist Produkt $f(x)\\cdot g(y) = x \\cdot y$ — TdV anwendbar.',
          'Trennen: $\\frac{dy}{y} = x\\,dx$.',
          'Beide Seiten integrieren: $\\ln|y| = \\frac{x^2}{2} + C_1$.',
          'Auflösen nach $y$: $y(x) = C\\,e^{x^2/2}$ mit $C = \\pm e^{C_1}$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Standard-Rezept der TdV: erkennen → trennen → integrieren → auflösen. Jeder Schritt setzt den vorherigen voraus.

**Rechnung:** Schritt 1 ist die Voraussetzung (Produktstruktur). Schritt 2 sortiert algebraisch. Schritt 3 wendet Stamm­funktionen auf beide Seiten an. Schritt 4 löst nach $y$ auf — erst hier wird die explizite Form sichtbar.

**Probe:** Resultat $y = C\\,e^{x^2/2}$. Test: $y\' = C\\cdot x\\cdot e^{x^2/2} = x\\cdot y$ ✓.

**Typischer Fehler:** Vor dem Trennen direkt integrieren ($\\int y\'\\,dx = \\int xy\\,dx$ — geht nicht, weil $y$ unbekannt von $x$ abhängt). Oder vor dem Erkennen schon umformen — ohne Produktstruktur scheitert TdV.`,
        [
          'Welcher Schritt ist überhaupt die Voraussetzung?',
          'Trennen kommt vor Integrieren — sonst kann man nicht beide Seiten unabhängig integrieren.',
          'Auflösen nach $y$ ist der letzte Schritt; davor steht die implizite Form $\\ln|y| = \\ldots$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['tdv-trennen', 'tdv-integrieren'] },
      ),
    ],

    // ── [2] Beide Seiten integrieren, C einmal ──────────────────────────
    2: [
      tf(
        'Bei $\\int \\frac{dy}{y} = \\int x\\,dx$ schreibt man die Integrationskonstante $C$ üblicherweise nur einmal — formal entstünde links $C_1$ und rechts $C_2$, aber $C := C_2 - C_1$ fasst beide zusammen.',
        true,
        `**Ansatz:** Beim unbestimmten Integral entsteht prinzipiell auf jeder Seite eine eigene Konstante. Diese werden zu *einer* Konstante zusammengefasst, die auf einer Seite steht.

**Rechnung:** $\\int \\frac{dy}{y} = \\ln|y| + C_1$ und $\\int x\\,dx = \\frac{x^2}{2} + C_2$. Gleichsetzen: $\\ln|y| + C_1 = \\frac{x^2}{2} + C_2$ → $\\ln|y| = \\frac{x^2}{2} + (C_2 - C_1)$. Mit $C := C_2 - C_1$: $\\ln|y| = \\frac{x^2}{2} + C$ — eine Konstante reicht.

**Probe:** Die Lösungsschar $y = C\\,e^{x^2/2}$ enthält *eine* Familienparameter $C \\in \\mathbb{R}$ — passt zum AWP, das genau eine zusätzliche Bedingung liefert.

**Typischer Fehler:** Beide Konstanten konsequent stehen lassen ($C_1$, $C_2$). Das verkompliziert die Formeln, ohne mehr Information zu enthalten — die Differenz reicht.`,
        [
          'Wie viele Konstanten erwartet man bei einer DGL 1. Ordnung?',
          'Eine — passend zur einen Anfangsbedingung.',
          'Differenz $C_2 - C_1$ ist wieder eine Konstante.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['tdv-integrieren'] },
      ),
      mc(
        'Integriere $\\int \\frac{dy}{y} = \\int 2x\\,dx$. Welche allgemeine Lösung folgt für $y$?',
        [
          '$y = C\\,e^{x^2}$',
          '$y = x^2 + C$',
          '$y = e^{x^2/2} + C$',
          '$y = \\ln(x^2 + C)$',
        ],
        0,
        `**Ansatz:** Beide Seiten mit Stammfunktionen versehen, dann nach $y$ auflösen.

**Rechnung:** Links $\\int dy/y = \\ln|y|$, rechts $\\int 2x\\,dx = x^2 + C_1$. Also $\\ln|y| = x^2 + C_1$. Exponieren: $|y| = e^{C_1}\\,e^{x^2}$ → $y = C\\,e^{x^2}$ mit $C = \\pm e^{C_1} \\in \\mathbb{R}$.

**Probe:** $y\' = C\\cdot 2x\\cdot e^{x^2} = 2x\\cdot(C\\,e^{x^2}) = 2x\\,y$ ✓ (löst die DGL $y\' = 2xy$).

**Typischer Fehler:** Vergessen zu exponieren — dann bleibt $\\ln|y|$ stehen und man lässt die Auflösung weg ($y = \\ldots$). Oder die Konstante additiv im Argument der e-Funktion lassen statt sie als Vorfaktor zu schreiben.`,
        [
          'Erst integrieren, dann zur Form $y = \\ldots$ auflösen.',
          'Aus $\\ln|y|$ wird beim Exponieren $|y|$, mit Vorzeichen-Trick zu $C\\,e^{\\ldots}$.',
          'Das $C$ wandert vor die e-Funktion, nicht hinein.',
        ],
        {
          1: 'Du hast die linke Seite $\\int dy/y$ als $\\int 1\\,dy = y$ behandelt — das ist der Sonderfall $y = x^2 + C$, der die DGL $y\' = 2x$ löst, nicht $y\' = 2xy$.',
          2: 'Hier wurde die Konstante additiv außerhalb der e-Funktion plaziert. Tatsächlich ergibt das Exponieren $|y| = e^{C_1}\\,e^{x^2}$, also $C$ als Vorfaktor: $y = C\\,e^{x^2}$.',
          3: 'Vermischung: $\\ln$ wurde nicht aufgelöst, sondern auf die rechte Seite geschoben. Die Form $y = \\ln(\\ldots)$ ist Lösung einer ganz anderen DGL.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['tdv-integrieren'] },
      ),
      ni(
        'Die allgemeine Lösung der DGL $y\' = xy$ lautet $y(x) = C\\,e^{x^2/2}$. Wie groß ist $y(2)$ für $C = 3$ (auf 2 Dezimalstellen)?',
        22.17, 0.1, '',
        `**Ansatz:** Allgemeine Lösung kennen, $C$ und $x$ einsetzen, ausrechnen.

**Rechnung:** $y(2) = 3\\,e^{2^2/2} = 3\\,e^{2} \\approx 3 \\cdot 7{,}389 \\approx 22{,}17$.

**Probe:** Der Faktor $C=3$ skaliert die Lösung linear; bei $C=1$ wäre $y(2) = e^2 \\approx 7{,}39$. Verdreifacht: $\\approx 22{,}17$ ✓. Außerdem: $y\' = 3\\cdot x\\cdot e^{x^2/2}$ und $xy = 3x\\cdot e^{x^2/2}$ → DGL erfüllt.

**Typischer Fehler:** Den Exponenten $x^2/2$ als $x^2$ oder $x/2$ verlesen. Bei $x=2$: $4/2 = 2$, daher $e^2$ — *nicht* $e^4$ und auch nicht $e^1$.`,
        [
          'Setze $C=3$ und $x=2$ in $y = C\\,e^{x^2/2}$ ein.',
          'Berechne erst den Exponenten: $2^2/2 = 2$.',
          '$3\\,e^2 \\approx 3 \\cdot 7{,}389$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['tdv-integrieren'] },
      ),
      mc(
        'Ein Lerner schreibt nach Integration von $\\int dy/y = \\int x\\,dx$: „$\\ln|y| + C_1 = \\frac{x^2}{2} + C_2$" und behält beide Konstanten bis zum Schluss. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — jede Seite muss ihre eigene Integrationskonstante behalten.',
          'Die zwei Konstanten lassen sich zu einer einzigen $C := C_2 - C_1$ zusammenfassen — bei der TdV schreibt man traditionell *eine* Konstante auf der rechten Seite.',
          'Falsch — beim unbestimmten Integral darf gar keine Konstante auftreten.',
          'Falsch — man muss $C_1 + C_2$ schreiben statt der Differenz.',
        ],
        1,
        `**Ansatz:** Beide Konstanten sind frei — ihre Differenz $C_2 - C_1$ ist wieder beliebig und übernimmt die Rolle der einen Familien­konstante.

**Rechnung:** $\\ln|y| + C_1 = \\frac{x^2}{2} + C_2$ → $\\ln|y| = \\frac{x^2}{2} + (C_2 - C_1) = \\frac{x^2}{2} + C$. Aus beiden wird *eine* Konstante.

**Probe:** Die Lösungsschar einer DGL 1. Ordnung enthält immer *einen* Parameter. Zwei verschiedene Konstanten würden überzählige Freiheiten suggerieren — sie wären redundant.

**Typischer Fehler:** Beide Konstanten nebeneinander stehen lassen und den Eindruck erwecken, die Lösungsschar habe zwei freie Parameter. Tatsächlich gibt es nur eine effektive Konstante.`,
        [
          'Wie viele freie Parameter hat die Lösung einer DGL 1. Ordnung?',
          'Differenz zweier Konstanten = wieder eine Konstante.',
          'Schreibkonvention: alle Konstanten zu einer auf der rechten Seite zusammenfassen.',
        ],
        {
          0: 'Formell entstehen zwei Konstanten — aber *eine* davon ist redundant. Bei DGL 1. Ordnung bleibt am Ende genau ein freier Parameter.',
          2: 'Beim unbestimmten Integral *muss* eine Konstante mit. Erst beim bestimmten Integral entfällt sie durch Differenz­bildung der Grenzen.',
          3: 'Es ist die Differenz, nicht die Summe — denn $C_1$ wandert von links auf rechts (Vorzeichen­wechsel beim Subtrahieren auf die andere Seite).',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['tdv-integrieren'] },
      ),
      ni(
        'Die allgemeine Lösung der DGL $y\' = 2y$ lautet $y(x) = C\\,e^{2x}$. Wie groß ist $y(1)$ für $C = 4$ (auf 2 Dezimalstellen)?',
        29.56, 0.1, '',
        `**Ansatz:** Konstante $C$ und Argument $x=1$ einsetzen, e-Funktion auswerten.

**Rechnung:** $y(1) = 4\\,e^{2\\cdot 1} = 4\\,e^{2} \\approx 4 \\cdot 7{,}389 \\approx 29{,}56$.

**Probe:** Lösungs­charakter: $C$ skaliert linear, $e^2 \\approx 7{,}39$. Vierfach: $\\approx 29{,}56$ ✓. DGL-Probe: $y\' = 4\\cdot 2\\,e^{2x} = 8\\,e^{2x} = 2\\cdot 4\\,e^{2x} = 2y$ ✓.

**Typischer Fehler:** Faktor $2$ im Exponenten vergessen ($e^1$ statt $e^2$) oder $C$ als Summand statt Faktor verwenden ($e^2 + 4 \\approx 11{,}39$ statt $4\\,e^2 \\approx 29{,}56$).`,
        [
          'In $y = C\\,e^{2x}$ ist $C$ ein *Faktor*, kein Summand.',
          'Berechne erst den Exponenten: $2 \\cdot 1 = 2$, also $e^2$.',
          '$4\\,e^2 \\approx 4 \\cdot 7{,}389$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['tdv-integrieren'] },
      ),
    ],

    // ── [3] Anfangsbedingung einsetzen — vor Auflösen nach y ────────────
    3: [
      tf(
        'Bei einem AWP bestimmt man $C$ am sichersten *vor* dem endgültigen Auflösen nach $y$ — also auf der Stufe $\\ln|y| = \\ldots + C$ statt erst nach Exponieren.',
        true,
        `**Ansatz:** Beim Auflösen $\\ln|y| \\to y$ tauchen Beträge und Vorzeichen­auswahl auf. Wenn $C$ schon vorher fixiert ist, vereinfacht das die Vorzeichen-Diskussion erheblich.

**Rechnung:** Beispiel $y\' = -y$, $y(0) = -2$. Aus $\\ln|y| = -x + C$: bei $x=0$, $|y|=2$ → $\\ln 2 = C$ → $\\ln|y| = -x + \\ln 2$. Da $y(0)=-2 < 0$, wählt man den negativen Zweig: $y = -2\\,e^{-x}$. Hätte man erst aufgelöst, würde der Vorzeichen­fall $y = \\pm 2\\,e^{-x}$ zwei Lösungen erlauben.

**Probe:** Direkter Test: $y(0) = -2$ ✓; $y\' = +2\\,e^{-x} = -(-2\\,e^{-x}) = -y$ ✓.

**Typischer Fehler:** Erst $y = C\\,e^{\\ldots}$ aufschreiben und dann blindlings $C = y_0 \\cdot e^{-\\ldots}$ — bei negativem $y_0$ vergisst man den Vorzeichen­zweig.`,
        [
          'Wann tauchen Vorzeichen-Probleme auf?',
          'Beim Exponieren von $\\ln|y|$ — vorher ist $C$ noch eindeutig.',
          'Vor dem Auflösen einsetzen vereinfacht die Diskussion.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['tdv-awp'] },
      ),
      mc(
        'Löse das AWP $y\' = y$, $y(0) = 7$. Welche Funktion ist die Lösung?',
        [
          '$y(x) = 7\\,e^{x}$',
          '$y(x) = e^{x} + 7$',
          '$y(x) = 7\\,x + 1$',
          '$y(x) = e^{7x}$',
        ],
        0,
        `**Ansatz:** Allgemeine Lösung über TdV bestimmen, dann $C$ aus der AB fixieren.

**Rechnung:** $\\frac{dy}{y} = dx$ → $\\ln|y| = x + C_1$ → $y = C\\,e^x$. AB: $y(0) = C = 7$. Damit $y(x) = 7\\,e^x$.

**Probe:** $y\'(x) = 7\\,e^x = y$ ✓; $y(0) = 7\\,e^0 = 7$ ✓.

**Typischer Fehler:** Anfangsbedingung additiv einbauen ($e^x + 7$) — gibt $y(0) = 8 \\neq 7$ und verletzt die DGL ($y\' = e^x \\neq e^x+7$). Oder die AB in den Exponenten schreiben ($e^{7x}$) — passt zur DGL $y\' = 7y$, nicht $y\' = y$.`,
        [
          'Allgemeine Lösung: $y = C\\,e^x$.',
          'Setze $x=0$: $y(0) = C\\,e^0 = C$.',
          'Aus $y(0) = 7$ folgt $C = 7$.',
        ],
        {
          1: 'Hier wurde $C$ additiv angesetzt: $y(0) = e^0 + 7 = 8 \\neq 7$. Außerdem: $y\' = e^x$, aber $y = e^x + 7$ → DGL $y\' = y$ wird verletzt (rechte Seite ist $e^x + 7$).',
          2: 'Lineare Funktion mit Steigung $7$ — passt zur DGL $y\' = 7$ (Konstante), nicht zu $y\'=y$ (proportional zu $y$). Probe: $y(0)=1 \\neq 7$.',
          3: 'Die Anfangsbedingung wurde in den Exponenten geschoben. Test: $y = e^{7x}$ → $y\' = 7\\,e^{7x} = 7y \\neq y$ — DGL verletzt. Korrekt: $C$ als Vorfaktor, Koeffizient im Exponenten kommt aus der DGL.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['tdv-awp'] },
      ),
      ni(
        'Löse das AWP $y\' = 2xy$, $y(0) = 1$ und berechne $y(2)$ (auf 2 Dezimalstellen).',
        54.6, 0.2, '',
        `**Ansatz:** TdV anwenden, $C$ aus AB fixieren, an $x = 2$ auswerten.

**Rechnung:** $\\frac{dy}{y} = 2x\\,dx$ → $\\ln|y| = x^2 + C_1$ → $y(x) = C\\,e^{x^2}$. AB: $y(0) = C = 1$. Damit $y(x) = e^{x^2}$ und $y(2) = e^{4} \\approx 54{,}598$.

**Probe:** $y\'(x) = 2x\\,e^{x^2} = 2x\\cdot y$ ✓; $y(0) = e^0 = 1$ ✓.

**Typischer Fehler:** Den Exponenten als $2x^2/2 = x^2$ statt $x^2$ rechnen (Faktor $2$ doppelt eingebaut → $e^{2x^2}$, falsch). Oder $\\int 2x\\,dx = 2x$ statt $x^2$ schreiben — Stammfunktion vergessen.`,
        [
          'Trennung: $\\frac{dy}{y} = 2x\\,dx$.',
          'Integration: links $\\ln|y|$, rechts $\\int 2x\\,dx = x^2$.',
          'AB liefert $C = 1$, dann $y(2) = e^{4}$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['tdv-awp', 'tdv-integrieren'] },
      ),
      mc(
        'Ein Lerner löst das AWP $y\' = 3y$, $y(0) = 5$ und behauptet, die Lösung sei $y(x) = 15\\,e^{x}$. Welcher Fehler liegt vor?',
        [
          'Vorfaktor $3$ wurde mit dem Anfangswert $5$ multipliziert — korrekt ist $y(x) = 5\\,e^{3x}$ (Anfangswert als Vorfaktor, DGL-Koeffizient im Exponenten).',
          'Der Lerner hat richtig gerechnet — die Lösung passt.',
          'Der Faktor $15$ ist richtig, aber der Exponent muss $5x$ statt $x$ sein.',
          'Die Anfangsbedingung passt nicht zur DGL — es gibt keine Lösung.',
        ],
        0,
        `**Ansatz:** Trennung der Variablen sauber durchführen — Vorfaktor und Exponent­koeffizient sind verschiedene Größen.

**Rechnung:** $\\frac{dy}{y} = 3\\,dx$ → $\\ln|y| = 3x + C_1$ → $y = C\\,e^{3x}$. AB: $y(0) = C = 5$. Damit $y(x) = 5\\,e^{3x}$.

**Probe:** $y\'(x) = 5\\cdot 3\\,e^{3x} = 15\\,e^{3x} = 3\\cdot 5\\,e^{3x} = 3y$ ✓; $y(0) = 5$ ✓. Die Lerner-Form $15\\,e^{x}$ liefert $y\' = 15\\,e^x$, aber $3y = 45\\,e^x$ — DGL verletzt.

**Typischer Fehler:** Vorfaktor und Exponentkoeffizient verschmelzen ($3 \\cdot 5 = 15$ und Exponent $= x$). Beide gehören aber an verschiedene Stellen: $C=5$ kommt vor die e-Funktion, $k=3$ in den Exponenten.`,
        [
          'Welcher Wert kommt aus der DGL, welcher aus der AB?',
          'DGL-Koeffizient $\\to$ Exponent; AB-Wert $\\to$ Vorfaktor.',
          'Probe: $y\'$ und $3y$ vergleichen.',
        ],
        {
          1: 'Probe scheitert: $y(x)=15\\,e^x$ → $y\' = 15\\,e^x$, aber $3y = 45\\,e^x$. Die DGL ist also nicht erfüllt — die Lösung kann nicht stimmen.',
          2: 'Der Faktor $15$ ist falsch — er entstand aus $3\\cdot 5$, aber der Exponent $5x$ wäre auch falsch. Die AB liefert *direkt* den Vorfaktor $C = y(0) = 5$, ohne mit dem DGL-Koeffizienten verknüpft zu werden.',
          3: 'Die DGL ist linear-homogen mit konstantem Koeffizienten — solche Probleme haben *immer* eine eindeutige Lösung. Das Problem ist nicht die Existenz, sondern der Lerner-Fehler beim Ansatz.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['tdv-awp'] },
      ),
      ni(
        'Löse das AWP $y\' = -y$, $y(0) = 10$ und berechne $y(1)$ (auf 2 Dezimalstellen).',
        3.68, 0.05, '',
        `**Ansatz:** Standard­schema TdV → $C$ aus AB → an Zielstelle einsetzen.

**Rechnung:** $\\frac{dy}{y} = -dx$ → $\\ln|y| = -x + C_1$ → $y = C\\,e^{-x}$. AB: $y(0) = C = 10$. Also $y(x) = 10\\,e^{-x}$ und $y(1) = 10/e \\approx 10/2{,}71828 \\approx 3{,}679$.

**Probe:** $y\'(x) = -10\\,e^{-x} = -y$ ✓; $y(0) = 10$ ✓. Verhalten: exponentieller Zerfall, Halbwertszeit $\\ln 2 \\approx 0{,}693$.

**Typischer Fehler:** Vorzeichen vergessen und $y(1) = 10\\,e \\approx 27{,}18$ ausrechnen — das wäre die Lösung von $y\'=+y$, nicht $y\'=-y$. Oder $1/e$ als $e$ verwechseln.`,
        [
          'DGL-Koeffizient $-1$ → Exponent $-x$.',
          'AB liefert Vorfaktor $C = 10$.',
          '$y(1) = 10/e$ — bekanntes $e \\approx 2{,}718$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['tdv-awp'] },
      ),
    ],

    // ── [4] Beträge bei ln|y| und Fallunterscheidung ────────────────────
    4: [
      tf(
        '$\\int \\frac{dy}{y} = \\ln|y| + C$ — die Beträge sind nötig, weil der Integrand $1/y$ auch für $y < 0$ eine wohldefinierte Stamm­funktion haben soll.',
        true,
        `**Ansatz:** Stammfunktion von $1/y$: für $y > 0$ ist es $\\ln(y)$, für $y < 0$ ist es $\\ln(-y)$. Beides zusammen schreibt man als $\\ln|y|$.

**Rechnung:** Ableitung prüfen: $\\frac{d}{dy}\\ln|y| = \\frac{1}{y}$ für alle $y \\neq 0$ — egal welches Vorzeichen. Ohne Beträge ($\\ln(y)$) wäre die Stamm­funktion nur für $y > 0$ definiert.

**Probe:** Test $y = -3$: $\\ln|-3| = \\ln 3$, Ableitung $\\frac{d}{dy}\\ln(-y) = \\frac{-1}{-y} = \\frac{1}{y}$ ✓.

**Typischer Fehler:** Beträge weglassen und sich auf $y > 0$ beschränken — dann verliert man die Hälfte der Lösungsschar (alle Lösungen mit negativem Vorzeichen).`,
        [
          'Wo ist $\\ln(y)$ definiert?',
          'Was ist die Stamm­funktion von $1/y$ für $y < 0$?',
          'Beträge erfassen beide Fälle in einer Formel.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['tdv-betrag'] },
      ),
      mc(
        'Aus $\\ln|y| = x + C_1$ folgt nach Auflösen für $y$:',
        [
          '$y = C\\,e^{x}$ mit $C = \\pm e^{C_1} \\in \\mathbb{R} \\setminus \\{0\\}$',
          '$y = \\ln(x + C_1)$',
          '$y = e^{x} + C_1$',
          '$y = x + e^{C_1}$',
        ],
        0,
        `**Ansatz:** Beide Seiten exponieren, Beträge auflösen — Vorzeichen werden in die Konstante absorbiert.

**Rechnung:** $\\ln|y| = x + C_1$ → $|y| = e^{x + C_1} = e^{C_1}\\cdot e^{x}$ → $y = \\pm e^{C_1}\\cdot e^{x} = C\\,e^{x}$ mit $C = \\pm e^{C_1}$.

**Probe:** Werte $C \\in \\mathbb{R}\\setminus\\{0\\}$ — Vorzeichen wird über $\\pm$ erfasst, $C = 0$ ist die zusätzliche Lösung $y \\equiv 0$ (separat).

**Typischer Fehler:** Den Logarithmus auf die rechte Seite schreiben („zurückwürfeln"), statt die e-Funktion auf beide Seiten anzuwenden. Oder $e^{C_1}$ stehen lassen und nicht als neue Konstante $C$ umbenennen.`,
        [
          'Was ist die Umkehrung von $\\ln$?',
          'Wende sie auf beide Seiten an.',
          '$e^{x+C_1} = e^{C_1}\\cdot e^x$ — Konstante als Vorfaktor.',
        ],
        {
          1: 'Hier wurde $\\ln$ auf die rechte Seite verschoben — das ist algebraisch falsch. Korrekt ist Exponieren *beider* Seiten.',
          2: 'Additiv falsch: aus $\\ln|y| = x + C_1$ wird beim Exponieren ein Produkt $e^x \\cdot e^{C_1}$, nicht eine Summe $e^x + C_1$.',
          3: '$\\ln$ auf beiden Seiten ignoriert — die linke Seite enthält $\\ln$, also muss man exponieren, um $y$ zu isolieren.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['tdv-betrag'] },
      ),
      mc(
        'In welchem Schritt der Trennung der Variablen werden Beträge nötig?',
        [
          'Beim Trennen — sonst ist die Form $\\frac{dy}{g(y)}$ nicht eindeutig.',
          'Beim Integrieren von $\\int \\frac{dy}{y}$ — die Stamm­funktion $\\ln|y|$ braucht Beträge, damit sie auch für $y < 0$ definiert ist.',
          'Beim Einsetzen der Anfangsbedingung — wegen Mehrdeutigkeit von $C$.',
          'Beim Auflösen nach $y$ — $|y|$ wird zu $\\pm y$.',
        ],
        1,
        `**Ansatz:** Beträge entstehen genau dort, wo die Stamm­funktion sonst nicht überall definiert wäre.

**Rechnung:** Bei $\\int dy/y$ liefert die formale Anti-Ableitung $\\ln(y)$, aber das ist nur für $y > 0$ definiert. Korrekt: $\\ln|y|$, das auch negative Werte abdeckt. Andere Schritte (Trennen, AB einsetzen) erzeugen *keine* zusätzlichen Beträge.

**Probe:** Beim Auflösen $|y| = e^{\\ldots}$ tauchen die Beträge wieder auf — aber sie waren schon beim Integrieren entstanden, nicht erst dort.

**Typischer Fehler:** Beträge erst beim Auflösen einbauen und so tun, als wären sie Teil der Lösungs­auswahl. Tatsächlich gehören sie schon in die Stamm­funktion.`,
        [
          'In welchem Schritt entsteht $\\ln(\\ldots)$ in der Rechnung?',
          'Bei welchem Integrand braucht die Stammfunktion einen Definitions­bereichs-Fix?',
          '$\\int dy/y$ — und das ist beim Integrieren.',
        ],
        {
          0: 'Beim Trennen werden algebraische Operationen ausgeführt (Multiplikation, Division). Beträge entstehen erst beim *Integrieren*.',
          2: 'Die AB liefert nur einen Zahlenwert für $C$. Beträge entstehen davor — beim Integrieren von $1/y$.',
          3: 'Beim Auflösen ist der Betrag *bereits* da (aus dem Integrieren). Hier wird er nur „aufgelöst" zu $\\pm$, aber er entsteht nicht erst.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['tdv-betrag'] },
      ),
      mc(
        'Ein Lerner schreibt $\\int \\frac{dy}{y} = \\ln(y) + C$ (ohne Beträge). Welche Lösungen der DGL $y\' = y$ gehen dadurch verloren?',
        [
          'Keine — $\\ln(y)$ und $\\ln|y|$ sind dieselbe Funktion.',
          'Die mit $y < 0$, denn $\\ln(y)$ ist für negative $y$ nicht definiert. $\\ln|y|$ erfasst auch die negativen Lösungs­zweige (z. B. $y(x) = -e^x$).',
          'Die mit $y = 0$, denn dort ist der Integrand $1/y$ singulär.',
          'Die mit $y > 1$, denn dort wächst $\\ln$ schneller als linear.',
        ],
        1,
        `**Ansatz:** Definitionsbereich der Stamm­funktion prüfen — und mit der vollständigen Lösungs­schar abgleichen.

**Rechnung:** $\\ln(y)$ ist nur für $y > 0$ definiert. $\\ln|y|$ deckt $y > 0$ und $y < 0$ ab. DGL $y\' = y$ hat als allgemeine Lösung $y = C\\,e^x$ mit $C \\in \\mathbb{R}$ — auch negative $C$. Wer ohne Beträge rechnet, schließt $C < 0$ aus.

**Probe:** Test mit $y(0) = -2$: korrekte Lösung $y = -2\\,e^x$. Mit $\\ln(y)$ (ohne Beträge) wäre $\\ln(y(0)) = \\ln(-2)$ nicht definiert — der Lerner steht ratlos vor der Anfangs­bedingung.

**Typischer Fehler:** Negative Anfangswerte ignorieren und bei jedem AWP automatisch $y > 0$ annehmen. Bei DGL kann die gesuchte Funktion durchaus negative Werte annehmen.`,
        [
          'Für welche $y$ ist $\\ln(y)$ definiert?',
          'Welche Lösungen schließt das aus?',
          'Beispiel: $y(0) = -3$ — passt das zu $\\ln(y)$?',
        ],
        {
          0: 'Sie unterscheiden sich im Definitionsbereich: $\\ln(y)$ nur für $y > 0$, $\\ln|y|$ für $y \\neq 0$. Das ist ein wesentlicher Unterschied bei Lösungen mit negativem Anfangswert.',
          2: '$y = 0$ ist tatsächlich problematisch (Integrand singulär), aber es ist eine *zusätzliche* triviale Lösung ($y \\equiv 0$). Die negativen Zweige sind die hauptsächlichen verlorenen Lösungen.',
          3: 'Das ist kein Definitions-Problem — $\\ln(y)$ ist auch für $y > 1$ wohldefiniert. Es geht um $y < 0$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['tdv-betrag'] },
      ),
      mc(
        '[PRÜFUNG] Wann darf man bei einem AWP $\\ln|y| = \\ldots$ vereinfacht zu $\\ln(y) = \\ldots$ schreiben?',
        [
          'Niemals — Beträge sind formell immer nötig.',
          'Wenn aus der Anfangsbedingung $y(x_0) = y_0 > 0$ und der Stetigkeit der Lösung folgt, dass $y(x) > 0$ im gesamten Lösungsbereich gilt — dann ist $|y| = y$ und die Beträge entfallen.',
          'Wenn $y(x_0) = 0$ ist — dann ist alles automatisch nicht-negativ.',
          'Nur bei linearen DGL — bei nichtlinearen muss man Beträge behalten.',
        ],
        1,
        `**Ansatz:** Eindeutigkeitssatz: Hat die DGL eindeutige Lösungen, kann ein Lösungszweig nicht $y = 0$ kreuzen, ohne die Eindeutigkeit zu verletzen — also bleibt das Vorzeichen von $y$ konstant.

**Rechnung:** Bei $y\' = ky$ mit AB $y(x_0) = y_0 > 0$: die Lösung $y(x) = y_0\\,e^{k(x-x_0)}$ ist überall positiv → $|y| = y$ → der Betrag ist überflüssig. Bei $y_0 < 0$ wäre $y(x) < 0$ überall → $|y| = -y$, also Vorzeichenkorrektur. Bei $y_0 = 0$ ist die einzige Lösung $y \\equiv 0$ — weder positiver noch negativer Zweig.

**Probe:** AWP $y\' = 2y$, $y(0) = 3$: $y(x) = 3\\,e^{2x} > 0$ für alle $x$ — Beträge können weggelassen werden, weil das Vorzeichen klar ist.

**Typischer Fehler:** Auch bei klar positiven Anfangs­werten formell die Beträge weiterschleppen — unnötige Komplikation. Oder umgekehrt: bei negativem $y_0$ die Beträge weglassen und das Vorzeichen vergessen → falsche Lösung.`,
        [
          'Was sagt der Eindeutigkeits­satz über das Vorzeichen einer Lösung?',
          'Kann eine eindeutige Lösung von $y > 0$ zu $y < 0$ wechseln, ohne $y = 0$ zu treffen?',
          'AWP mit $y_0 > 0$ → Lösung bleibt positiv → $|y| = y$.',
        ],
        {
          0: '„Niemals" ist zu streng — wenn das Vorzeichen aus AB und Eindeutigkeit klar ist, sind Beträge redundant. Sie schaden zwar nicht, aber sie sind nicht nötig.',
          2: 'Bei $y(x_0) = 0$ ist die Standard-DGL meist die *Triviallösung* $y \\equiv 0$ — dort ist der Integrand $1/y$ gar nicht definiert, die Trennung führt zu einer Singularität.',
          3: 'Linearität ist irrelevant — auch nichtlineare DGL mit eindeutiger Lösung erlauben das Weglassen, sobald das Vorzeichen klar ist.',
        },
        { stage: 'transfer', subGoal: 4, uses: ['tdv-betrag'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // dgl-1-3 — Lineare DGL 1. Ordnung  (6 subGoals)
  // Je ≥ 5 Aufgaben = mind. 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-1-3': {

    // ── [0] Standardform y' + p(x)·y = q(x) ─────────────────────────────
    0: [
      tf(
        'Die DGL $y\' + 3y = \\cos x$ ist in Standardform; dabei sind $p(x)=3$ und $q(x)=\\cos x$.',
        true,
        `**Ansatz:** Standardform einer linearen DGL 1. Ordnung: $y\' + p(x)\\,y = q(x)$. Identifiziere den Koeffizienten $p$ vor $y$ (links) und die Stör­funktion $q$ (rechts).

**Rechnung:** In $y\' + 3y = \\cos x$: vor $y$ steht $3$ → $p(x) = 3$ (konstant). Rechts steht $\\cos x$ → $q(x) = \\cos x$.

**Probe:** Einsetzen: $y\' + 3\\,y = \\cos x$ ist exakt die Form $y\' + p(x)\\,y = q(x)$ — passt.

**Typischer Fehler:** $p$ und $q$ vertauschen oder Vorzeichen vergessen. $p$ steht vor $y$, $q$ ist die rechte Seite.`,
        [
          'Standardform: $y\' + p(x)\\cdot y = q(x)$.',
          '$p$ = Koeffizient vor $y$.',
          '$q$ = rechte Seite (Stör­funktion).',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['lin1-standardform'] },
      ),
      mc(
        'Welche der folgenden DGL liegt bereits in Standardform $y\' + p(x)\\,y = q(x)$ vor?',
        [
          '$y\' + 3x\\,y = e^x$',
          '$2y\' + 4y = 6$',
          '$y\'\\cdot y = x$',
          '$y\'\' + 2y = 0$',
        ],
        0,
        `**Ansatz:** Standardform verlangt: höchste Ableitung $y\'$ mit Koeffizient *exakt $1$*, lineare Form (keine Produkte $y\\cdot y\'$, keine höheren Potenzen), Ordnung 1.

**Rechnung:**
- $y\' + 3x\\,y = e^x$: Koeffizient von $y\'$ ist $1$, $p(x)=3x$, $q(x)=e^x$ → **Standardform** ✓.
- $2y\' + 4y = 6$: Koeffizient $2$ vor $y\'$ → erst durch $2$ teilen ($y\' + 2y = 3$).
- $y\'\\cdot y = x$: Produkt $y\'\\cdot y$ → nichtlinear, keine lineare DGL.
- $y\'\' + 2y = 0$: Ordnung 2, nicht 1.

**Probe:** Form-Test: ist die linke Seite $y\' + (\\text{etwas})\\cdot y$? Hier ja: $y\' + 3x\\,y$.

**Typischer Fehler:** Annehmen, „in Standardform" heißt einfach „linear". Es heißt zusätzlich: Koeffizient vor $y\'$ muss $1$ sein; sonst muss man erst teilen.`,
        [
          'Welcher Koeffizient steht vor $y\'$?',
          'Standardform verlangt Koeffizient $1$ vor $y\'$.',
          'Nichtlinearität (Produkte, Potenzen) und Ordnung $> 1$ ausschließen.',
        ],
        {
          1: 'Koeffizient $2$ vor $y\'$ — noch nicht Standardform. Teile durch $2$: $y\' + 2y = 3$ ist die Standardform.',
          2: 'Produkt $y\'\\cdot y$ → nichtlinear. Standardform verlangt $y$ und $y\'$ jeweils nur in 1. Potenz und ohne Produkt miteinander.',
          3: 'Hier steht $y\'\'$ — das ist eine DGL 2. Ordnung. Standardform 1. Ordnung verlangt $y\'$ als höchste Ableitung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['lin1-standardform'] },
      ),
      mc(
        'Bringe $2y\' = 4xy + 6$ in Standardform. Welcher Koeffizient $p(x)$ steht dann vor $y$?',
        [
          '$p(x) = -2x$',
          '$p(x) = 4x$',
          '$p(x) = 2x$',
          '$p(x) = -4x$',
        ],
        0,
        `**Ansatz:** Standardform $y\' + p(x)\\,y = q(x)$ erreicht man durch (1) alle $y$-Terme nach links, (2) durch den Koeffizienten von $y\'$ teilen.

**Rechnung:** $2y\' = 4xy + 6$ → $2y\' - 4xy = 6$ (alle $y$-Terme links) → $y\' - 2xy = 3$ (durch $2$ geteilt). Damit $p(x) = -2x$, $q(x) = 3$.

**Probe:** Einsetzen: $y\' + (-2x)\\,y = 3$ ✓ — Standardform mit korrektem Vorzeichen.

**Typischer Fehler:** Vorzeichen vergessen ($p = +2x$): vergisst, dass beim Sortieren $4xy$ auf die andere Seite wandert und Vorzeichen wechselt. Oder Division vergessen ($p = -4x$): teilt die rechte Seite nicht durch $2$.`,
        [
          'Erst alle $y$-Terme auf eine Seite — mit Vorzeichen­wechsel beim Wandern.',
          'Dann durch den Koeffizienten von $y\'$ teilen.',
          'Test am Ende: Form $y\' + p(x)\\,y = q(x)$?',
        ],
        {
          1: 'Vorzeichen vergessen. $4xy$ wandert von rechts nach links → Vorzeichen­wechsel zu $-4xy$. Nach Division durch $2$: $-2xy$, also $p = -2x$.',
          2: 'Vorzeichen umgekehrt. Beim Sortieren $2y\' = 4xy + 6$ → $2y\' - 4xy = 6$ — also negatives Vorzeichen vor $4xy$.',
          3: 'Division durch $2$ vergessen. Du hast nur sortiert ($2y\' - 4xy = 6$), aber $p$ ist der Koeffizient nach Normierung — Standardform verlangt Koeffizient $1$ vor $y\'$.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['lin1-standardform'] },
      ),
      mc(
        'Ein Lerner schreibt $3y\' + 6y = 9$ als Standardform mit $p(x) = 6$, $q(x) = 9$. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — die Koeffizienten sind direkt ablesbar.',
          'Falsch: Standardform verlangt Koeffizient $1$ vor $y\'$. Erst durch $3$ teilen: $y\' + 2y = 3$, dann ist $p = 2$, $q = 3$.',
          'Falsch: $p$ und $q$ wurden vertauscht.',
          'Falsch: bei konstanten Koeffizienten ist die Standardform nicht definiert.',
        ],
        1,
        `**Ansatz:** Standardform­definition: Koeffizient vor $y\'$ muss $1$ sein. Vor dem Identifizieren von $p$ und $q$ also normieren.

**Rechnung:** $3y\' + 6y = 9$ → durch $3$ teilen → $y\' + 2y = 3$. Hier sind $p(x) = 2$ und $q(x) = 3$ — *nicht* $p = 6$ und $q = 9$.

**Probe:** Test mit $\\mu = e^{2x}$ (richtiges $p$): $(e^{2x} y)\' = 3\\,e^{2x}$. Hätte man $p = 6$ angenommen, wäre $\\mu = e^{6x}$ — und die Methode würde scheitern.

**Typischer Fehler:** Den Faktor vor $y\'$ ignorieren und „Koeffizient = was vor $y$ steht" lesen, ohne vorher zu normieren. Bei nicht-konstanten Faktoren (z. B. $\\sin(x)\\,y\'$) wäre das besonders verheerend.`,
        [
          'Wie lautet die Definition der Standardform — was muss vor $y\'$ stehen?',
          'Was passiert, wenn man die DGL durch den Koeffizienten von $y\'$ teilt?',
          'Probe: Berechne $\\mu$ mit $p = 6$ und $p = 2$ — welches passt zur original DGL?',
        ],
        {
          0: 'Nicht direkt — Standardform verlangt Koeffizient $1$ vor $y\'$. $3y\'$ ist nicht normiert.',
          2: '$p$ und $q$ sind nicht vertauscht — $p$ ist links bei $y$, $q$ rechts. Aber beide Werte sind $\\times 3$ zu groß, weil nicht durch $3$ geteilt wurde.',
          3: 'Doch — Standardform ist auch bei konstanten Koeffizienten wohldefiniert. Sie ist sogar besonders einfach: $p$ und $q$ sind direkt Konstanten.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['lin1-standardform'] },
      ),
      matching(
        'Bringe jede DGL in Standardform $y\' + p(x)\\,y = q(x)$ und ordne das richtige $(p,q)$-Paar zu.',
        [
          { left: '$y\' + 5y = 7$', right: '$p = 5$, $q = 7$' },
          { left: '$3y\' + 6xy = 9$', right: '$p = 2x$, $q = 3$' },
          { left: '$y\' = 4y + e^x$', right: '$p = -4$, $q = e^x$' },
          { left: '$xy\' + y = \\sin x$ (für $x>0$)', right: '$p = 1/x$, $q = \\sin(x)/x$' },
        ],
        `**Ansatz:** Pro DGL (1) $y$-Terme nach links, (2) durch den Koeffizienten von $y\'$ teilen, (3) $p$ (links bei $y$) und $q$ (rechts) ablesen.

**Rechnung:**
- $y\' + 5y = 7$: bereits Standardform → $p=5$, $q=7$.
- $3y\' + 6xy = 9$: durch $3$ → $y\' + 2x\\,y = 3$ → $p=2x$, $q=3$.
- $y\' = 4y + e^x$: sortieren → $y\' - 4y = e^x$ → $p=-4$, $q=e^x$.
- $xy\' + y = \\sin x$: durch $x$ → $y\' + (1/x)y = \\sin(x)/x$ → $p=1/x$, $q=\\sin(x)/x$.

**Probe:** Test je DGL: einsetzen in $y\' + p\\,y$ ergibt die ursprüngliche linke Seite (nach Normierung).

**Typischer Fehler:** Bei der dritten DGL das Vorzeichen vergessen — beim Sortieren wandert $4y$ von rechts nach links und wird $-4y$.`,
        [
          'Erst sortieren ($y$ nach links), dann durch Koeffizient von $y\'$ teilen.',
          'Vorzeichen­wechsel beim Sortieren beachten.',
          'Auch nicht-konstante Koeffizienten ($1/x$, $\\sin x$) sind erlaubt.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['lin1-standardform'] },
      ),
    ],

    // ── [1] Integrierender Faktor μ = e^∫p dx ────────────────────────────
    1: [
      tf(
        'Für die DGL $y\' + 2y = q(x)$ lautet der integrierende Faktor $\\mu(x) = e^{2x}$.',
        true,
        `**Ansatz:** Formel $\\mu(x) = e^{\\int p(x)\\,dx}$. Mit konstantem $p$ wird der Exponent linear in $x$.

**Rechnung:** $p(x) = 2$ → $\\int 2\\,dx = 2x$ (Konstante weggelassen, weil $\\mu$ nur bis auf Vorfaktor eindeutig) → $\\mu = e^{2x}$.

**Probe:** Test: $\\mu\' = 2\\,e^{2x} = p\\cdot \\mu$ ✓ — die definierende Eigenschaft des integrierenden Faktors.

**Typischer Fehler:** Vorzeichen­fehler ($\\mu = e^{-2x}$, das wäre für $p = -2$) oder Integral vergessen ($\\mu = e^p = e^2$, eine Konstante — die hilft nichts).`,
        [
          '$\\mu = e^{\\int p\\,dx}$.',
          'Konstantes $p$ → linearer Exponent.',
          'Test: $\\mu\' = p\\,\\mu$?',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['lin1-mu'] },
      ),
      mc(
        'Berechne den integrierenden Faktor $\\mu(x)$ für $y\' + 5y = e^x$.',
        [
          '$\\mu = e^{5x}$',
          '$\\mu = e^x$',
          '$\\mu = e^{x/5}$',
          '$\\mu = 5x$',
        ],
        0,
        `**Ansatz:** Identifiziere $p(x) = 5$, integriere, in den Exponenten der e-Funktion.

**Rechnung:** $\\int 5\\,dx = 5x$ → $\\mu(x) = e^{5x}$.

**Probe:** Test: $\\mu\' = 5\\,e^{5x} = 5\\,\\mu = p\\,\\mu$ ✓.

**Typischer Fehler:** Mit dem Stör­funktions-Exponenten verwechseln ($q = e^x$ → $\\mu = e^x$, falsch — $\\mu$ folgt nur aus $p$, nicht aus $q$).`,
        [
          'Identifiziere $p(x)$ — der Koeffizient bei $y$ in Standardform.',
          'Bilde Stamm­funktion $\\int p\\,dx$.',
          'Setze sie in den Exponenten der e-Funktion ein.',
        ],
        {
          1: '$p$ und Stör­funktion verwechselt: rechts steht $e^x$ (das ist $q$), aber für $\\mu$ braucht man $p = 5$. → $\\mu = e^{5x}$.',
          2: 'Falsche Operation auf $p = 5$: nicht $\\int 5/5\\,dx = x/5$, sondern $\\int 5\\,dx = 5x$.',
          3: 'Die e-Funktion fehlt komplett: $\\mu = e^{\\int p\\,dx}$, nicht $\\mu = \\int p\\,dx$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['lin1-mu'] },
      ),
      ni(
        'Berechne $\\mu(1)$ für die DGL $y\' + 2x\\,y = q(x)$ (auf 2 Dezimalstellen).',
        2.72, 0.05, '',
        `**Ansatz:** $p(x) = 2x$ → Stamm­funktion bilden, $\\mu = e^{\\int p\\,dx}$ aufstellen, an $x=1$ auswerten.

**Rechnung:** $\\int 2x\\,dx = x^2$ → $\\mu(x) = e^{x^2}$. Bei $x = 1$: $\\mu(1) = e^{1} = e \\approx 2{,}718$.

**Probe:** Test: $\\mu\' = 2x\\,e^{x^2} = p\\cdot \\mu$ ✓. Allgemein steigt $\\mu$ bei $x>0$ stark an, weil der Exponent quadratisch wächst.

**Typischer Fehler:** $\\int 2x\\,dx$ als $2$ (Ableitung statt Stamm­funktion) oder als $2x^2$ (Faktor $1/2$ aus der Potenz vergessen). Korrekt: $\\int 2x\\,dx = x^2$.`,
        [
          '$p(x) = 2x$. Stamm­funktion?',
          '$\\int 2x\\,dx = x^2$ — Potenzregel rückwärts.',
          'Bei $x = 1$: $e^{1} = e$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['lin1-mu'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\' + p(x)\\,y = q(x)$ den Faktor $\\mu = e^{p(x)}$. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — der Faktor enthält direkt $p(x)$ im Exponenten.',
          'Falsch: korrekt ist $\\mu = e^{\\int p(x)\\,dx}$ — der Exponent ist die *Stamm­funktion* von $p$, nicht $p$ selbst. Probe: für $p = x$ wäre $\\mu = e^{x^2/2}$, nicht $\\mu = e^x$.',
          'Falsch: $\\mu$ muss eine Linearkombination aus $p$ und $q$ sein.',
          'Falsch: $\\mu = e^{p(x)}$ funktioniert nur, wenn $p$ konstant ist.',
        ],
        1,
        `**Ansatz:** Definitions­bedingung des integrierenden Faktors: $\\mu\' = p\\cdot \\mu$.

**Rechnung:** Mit $\\mu = e^{p(x)}$ folgt $\\mu\' = p\'(x)\\cdot e^{p(x)} = p\'\\cdot \\mu$ — die Bedingung wäre $\\mu\' = p\\,\\mu$, nicht $\\mu\' = p\'\\,\\mu$. Daher passt $\\mu = e^{p}$ *nicht*. Korrekt: $\\mu = e^{\\int p\\,dx}$, dann ist nach Hauptsatz der Differential­rechnung $\\mu\' = p\\cdot \\mu$ ✓.

**Probe:** Spezial­fall $p(x) = x$: Lerner-Form $\\mu = e^x$ → $\\mu\' = e^x \\neq x\\cdot e^x = p\\,\\mu$. Korrekte Form $\\mu = e^{x^2/2}$ → $\\mu\' = x\\,e^{x^2/2} = p\\,\\mu$ ✓.

**Typischer Fehler:** Die Notation $\\int$ als „nichts machen, einfach $p$ nehmen" interpretieren — gerade bei nicht-konstantem $p$ ist die Stamm­funktion eine andere Funktion als $p$ selbst.`,
        [
          'Definitions­bedingung: $\\mu\' = p\\,\\mu$.',
          'Was ist $\\mu\'$, wenn $\\mu = e^{p(x)}$ (Kettenregel)?',
          'Vergleich mit $\\mu = e^{\\int p\\,dx}$ — was ist da $\\mu\'$?',
        ],
        {
          0: 'Genau das ist der Irrtum — der Exponent muss die *Stamm­funktion* sein. Bei konstantem $p$ wäre der Unterschied unsichtbar (Stamm­funktion $= p\\cdot x$), aber bei variablem $p$ entscheidend.',
          2: '$\\mu$ hängt überhaupt nicht von $q$ ab — der integrierende Faktor wird allein aus $p$ gewonnen. $q$ kommt erst in der Lösungsformel ins Spiel.',
          3: 'Bei konstantem $p = a$ wäre $\\int a\\,dx = a\\,x$ — der korrekte $\\mu = e^{ax}$ und der Lerner-$\\mu = e^a$ sind nicht gleich. Nur bei $a = 0$ stimmen beide trivial überein.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['lin1-mu'] },
      ),
      ni(
        'Bestimme $\\mu(2)$ für die DGL $y\' + (1/x)\\,y = q(x)$ im Bereich $x > 0$.',
        2, 0.05, '',
        `**Ansatz:** $p(x) = 1/x$ → Stamm­funktion ist $\\ln|x|$, der integrierende Faktor wird zu einer Potenz von $x$.

**Rechnung:** $\\int (1/x)\\,dx = \\ln|x|$. Für $x > 0$ also $\\ln x$. $\\mu(x) = e^{\\ln x} = x$. Bei $x=2$: $\\mu(2) = 2$.

**Probe:** Test: $\\mu\' = 1$, $p\\,\\mu = (1/x)\\cdot x = 1$ ✓.

**Typischer Fehler:** $\\int 1/x\\,dx$ als $1/x^2$ oder $-1/x^2$ (Ableitung statt Stamm­funktion) oder die e-Funktion stehen lassen ($\\mu = e^{\\ln x}$) statt zu $x$ zu vereinfachen.`,
        [
          'Stamm­funktion von $1/x$ ist $\\ln|x|$.',
          '$e^{\\ln x} = x$ (für $x > 0$).',
          'Bei $x=2$: $\\mu(2) = 2$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['lin1-mu'] },
      ),
    ],

    // ── [2] Lösungsformel y = (1/μ)·[∫μ·q dx + C] ───────────────────────
    2: [
      tf(
        'Die Lösungsformel $y = (1/\\mu)\\,(\\int \\mu\\cdot q\\,dx + C)$ liefert die *allgemeine* Lösung — sie enthält die homogene Lösung (über $C/\\mu$) und eine partikuläre Lösung in einem.',
        true,
        `**Ansatz:** Formel zerlegen: $y = (1/\\mu)\\,\\int \\mu\\,q\\,dx + C/\\mu$. Der erste Summand ist eine Partikulär­lösung, der zweite die homogene Lösung mit Vorfaktor $C$.

**Rechnung:** Bei der homogenen Lösung gilt $y_h = C/\\mu = C\\,e^{-\\int p\\,dx}$ — passt zur Standard­form für homogene Lösungen.

**Probe:** Beispiel $y\' + 2y = e^x$: $\\mu = e^{2x}$, $\\int e^{2x}\\,e^x\\,dx = e^{3x}/3$. Damit $y = e^{-2x}\\,(e^{3x}/3 + C) = e^x/3 + C\\,e^{-2x}$ — homogen ($C\\,e^{-2x}$) plus partikulär ($e^x/3$).

**Typischer Fehler:** Glauben, die Formel liefere nur die partikuläre Lösung. Tatsächlich enthält das $C$ im Inneren die ganze Lösungs­schar.`,
        [
          'Was ist $y_h$ in Bezug auf $\\mu$?',
          '$y_h = C/\\mu$ — der zweite Summand der Formel.',
          'Erster Summand $(1/\\mu)\\,\\int \\mu\\,q$: partikulär.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['lin1-formel'] },
      ),
      mc(
        'Bestimme die allgemeine Lösung von $y\' + 2y = e^x$.',
        [
          '$y = \\tfrac{1}{3}\\,e^x + C\\,e^{-2x}$',
          '$y = e^x + C\\,e^{-2x}$',
          '$y = \\tfrac{1}{3}\\,e^x - C\\,e^{-2x}$',
          '$y = \\tfrac{1}{3}\\,e^{2x} + C\\,e^x$',
        ],
        0,
        `**Ansatz:** Lösungsformel anwenden: $\\mu$ bestimmen, $\\int \\mu\\,q\\,dx$ ausrechnen, mit $1/\\mu$ multiplizieren.

**Rechnung:** $p=2$, $q=e^x$. $\\mu = e^{2x}$. $\\int e^{2x}\\cdot e^x\\,dx = \\int e^{3x}\\,dx = \\tfrac{1}{3}\\,e^{3x}$. $y = e^{-2x}\\cdot(\\tfrac{1}{3}\\,e^{3x} + C) = \\tfrac{1}{3}\\,e^{x} + C\\,e^{-2x}$.

**Probe:** $y\' = \\tfrac{1}{3}\\,e^x - 2C\\,e^{-2x}$. $y\' + 2y = \\tfrac{1}{3}\\,e^x - 2C\\,e^{-2x} + \\tfrac{2}{3}\\,e^x + 2C\\,e^{-2x} = e^x$ ✓.

**Typischer Fehler:** $\\int e^{2x}\\cdot e^x = \\int e^{2x+x}$ vergessen ($e^{2x}\\cdot e^x = e^{3x}$, nicht $e^{2x}\\cdot e^x = e^{2x}$). Oder Vorfaktor $\\tfrac{1}{3}$ aus $\\int e^{3x}\\,dx$ vergessen.`,
        [
          '$\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
          '$\\int e^{2x}\\cdot e^x\\,dx = \\int e^{3x}\\,dx = \\tfrac{1}{3}\\,e^{3x}$.',
          'Mit $1/\\mu = e^{-2x}$ multiplizieren — bei $C$ wird daraus $C\\,e^{-2x}$.',
        ],
        {
          1: 'Vorfaktor $\\tfrac{1}{3}$ vergessen: $\\int e^{3x}\\,dx = \\tfrac{1}{3}\\,e^{3x}$, nicht $e^{3x}$.',
          2: 'Vorzeichen­fehler: $C$ soll *zu* der Stamm­funktion addiert werden, nicht subtrahiert. Auch das Vorzeichen vor $C\\,e^{-2x}$ wäre dann falsch.',
          3: 'Exponenten-Addition vergessen: $e^{2x}\\cdot e^x = e^{3x}$, nicht $e^{2x}$. Außerdem ist $C\\,e^{-2x}$ die homogene Lösung, nicht $C\\,e^{x}$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['lin1-formel'] },
      ),
      ni(
        'Löse das AWP $y\' + y = 2$, $y(0) = 0$ und berechne $y(1)$ (auf 2 Dezimalstellen).',
        1.26, 0.05, '',
        `**Ansatz:** Lösungsformel mit AB anwenden — $\\mu$ bestimmen, integrieren, $C$ aus AB fixieren, an $x=1$ auswerten.

**Rechnung:** $p = 1$, $q = 2$. $\\mu = e^x$. $(e^x y)\' = 2\\,e^x$ → $e^x y = 2\\,e^x + C$ → $y(x) = 2 + C\\,e^{-x}$. AB: $y(0) = 2 + C = 0 \\Rightarrow C = -2$. Damit $y(x) = 2 - 2\\,e^{-x}$ und $y(1) = 2 - 2/e \\approx 2 - 0{,}7358 \\approx 1{,}264$.

**Probe:** $y\'(x) = 2\\,e^{-x}$; $y\' + y = 2\\,e^{-x} + 2 - 2\\,e^{-x} = 2$ ✓; $y(0) = 0$ ✓; Asymptotik: $y \\to 2$ für $x \\to \\infty$.

**Typischer Fehler:** Vorzeichen im Exponenten ($Ce^{+x}$ statt $Ce^{-x}$ — beim Multiplizieren mit $1/\\mu = e^{-x}$ entsteht $e^{-x}$, nicht $e^{+x}$) oder Partikulär­lösung als $y_p = 2x$ statt Konstante $2$ ansetzen.`,
        [
          '$\\mu = e^{\\int 1\\,dx} = e^x$.',
          'Partikulär: $y_p = 2$ (Konstante, weil rechte Seite konstant).',
          'AB: $y(0) = 0$ liefert $C = -2$, dann $y(1) = 2 - 2/e$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['lin1-formel'] },
      ),
      mc(
        'Ein Lerner berechnet bei $y\' + 2y = e^x$ den integrierenden Faktor $\\mu = e^{2x}$ korrekt, vergisst dann aber die Multiplikation mit $1/\\mu$ am Ende. Er schreibt $y = \\tfrac{1}{3}\\,e^{3x} + C$. Welcher Fehler liegt vor?',
        [
          'Korrekt — die Stamm­funktion liefert direkt $y$.',
          'Multiplikation mit $1/\\mu = e^{-2x}$ vergessen. Korrekt: $y = e^{-2x}(\\tfrac{1}{3}\\,e^{3x} + C) = \\tfrac{1}{3}\\,e^x + C\\,e^{-2x}$.',
          'Falsche Konstante — $C$ muss durch $\\mu$ geteilt werden, $C/\\mu \\neq C$.',
          'Falsch — der Faktor $\\mu$ darf nur auf der linken Seite multipliziert werden, nicht auf der rechten.',
        ],
        1,
        `**Ansatz:** Nach $\\mu\\cdot y = \\int \\mu\\,q\\,dx + C$ folgt der finale Schritt: durch $\\mu$ teilen, um $y$ allein zu isolieren.

**Rechnung:** $\\mu y = \\tfrac{1}{3}\\,e^{3x} + C$. Beide Seiten durch $\\mu = e^{2x}$ teilen: $y = (1/e^{2x})\\,(\\tfrac{1}{3}\\,e^{3x} + C) = \\tfrac{1}{3}\\,e^{x} + C\\,e^{-2x}$.

**Probe:** Test der Lerner-Form $y = \\tfrac{1}{3}\\,e^{3x} + C$: $y\' = e^{3x}$. Soll: $y\' + 2y = e^{3x} + \\tfrac{2}{3}\\,e^{3x} + 2C = \\tfrac{5}{3}\\,e^{3x} + 2C \\neq e^x$ — DGL verletzt.

**Typischer Fehler:** Den Schritt „$\\mu\\,y$ aus dem Integral isolieren" mit „$y$ ist gleich Integral" verwechseln. Solange $\\mu \\neq 1$ ist, muss man am Ende noch durch $\\mu$ teilen.`,
        [
          'Was bleibt nach dem Integrieren auf der linken Seite?',
          '$\\mu y = \\ldots$ — durch $\\mu$ teilen!',
          'Probe: einsetzen der vermeintlichen Lösung in die DGL.',
        ],
        {
          0: 'Probe scheitert: $y = \\tfrac{1}{3}\\,e^{3x} + C$ erfüllt die DGL nicht. Es fehlt der entscheidende Divisions­schritt.',
          2: 'Doch — $C$ wird genauso durch $\\mu$ geteilt: $C/\\mu = C\\,e^{-2x}$. Die Konstante ist nicht ausgenommen.',
          3: 'Die Multiplikation mit $\\mu$ erfolgt auf *beiden* Seiten der DGL — sonst wäre die Gleichung nicht erhalten. Das ist nicht der Fehler.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['lin1-formel'] },
      ),
      ni(
        'Löse das AWP $y\' - y = e^{2x}$, $y(0) = 0$ und berechne $y(1)$ (auf 2 Dezimalstellen).',
        4.67, 0.05, '',
        `**Ansatz:** Lösungsformel mit $p = -1$, $q = e^{2x}$ und AB anwenden.

**Rechnung:** $\\mu = e^{-x}$. $(e^{-x} y)\' = e^{-x}\\cdot e^{2x} = e^{x}$ → $e^{-x} y = e^{x} + C$ → $y(x) = e^{2x} + C\\,e^{x}$. AB: $y(0) = 1 + C = 0 \\Rightarrow C = -1$. Damit $y(x) = e^{2x} - e^x$ und $y(1) = e^2 - e \\approx 7{,}389 - 2{,}718 \\approx 4{,}671$.

**Probe:** $y\'(x) = 2\\,e^{2x} - e^x$; $y\' - y = 2\\,e^{2x} - e^x - e^{2x} + e^x = e^{2x}$ ✓; $y(0) = 1 - 1 = 0$ ✓.

**Typischer Fehler:** Bei $p = -1$ den integrierenden Faktor als $\\mu = e^{x}$ statt $e^{-x}$ — Vorzeichen vergessen. Oder $\\int e^{-x}\\cdot e^{2x}\\,dx$ als $e^{2x}$ (statt $e^x$) verrechnen.`,
        [
          'Standardform: $y\' + (-1)\\,y = e^{2x}$ → $p = -1$.',
          '$\\mu = e^{-x}$.',
          '$\\int e^{-x}\\cdot e^{2x}\\,dx = \\int e^x\\,dx = e^x$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['lin1-formel'] },
      ),
    ],

    // ── [3] Variation der Konstanten ────────────────────────────────────
    3: [
      tf(
        'Variation der Konstanten heißt: man ersetzt die Konstante $C$ in der homogenen Lösung $y_h = C\\,e^{-\\int p\\,dx}$ durch eine Funktion $C(x)$ und sucht damit eine partikuläre Lösung.',
        true,
        `**Ansatz:** VdK-Idee: aus $y_h = C\\cdot u(x)$ wird $y_p = C(x)\\cdot u(x)$. Setzt man diesen Ansatz in die inhomogene DGL ein, erhält man eine DGL für $C(x)$.

**Rechnung:** Mit $u(x) = e^{-\\int p\\,dx}$ und $y_p = C(x)\\,u(x)$ folgt $y_p\' = C\'\\,u + C\\,u\' = C\'\\,u - C\\,p\\,u$. In $y\' + p\\,y = q$ einsetzen: $C\'\\,u - C\\,p\\,u + p\\,C\\,u = q \\Rightarrow C\'\\,u = q \\Rightarrow C\'(x) = q(x)/u(x)$.

**Probe:** Beispiel $y\' + y = 2$: $u = e^{-x}$, $C\'(x) = 2/e^{-x} = 2\\,e^x$, $C(x) = 2\\,e^x$. $y_p = 2\\,e^x\\cdot e^{-x} = 2$ ✓ — Partikulär­lösung passt.

**Typischer Fehler:** „Variation" mit „Verändern" gleichsetzen und glauben, man tausche überall $C$ durch $C(x)$ aus. Tatsächlich nur in $y_p$, parallel bleibt $y_h$ mit konstantem $C$.`,
        [
          'Welche Funktion ersetzt die Konstante?',
          '$C \\to C(x)$, dann einsetzen in die inhomogene DGL.',
          'Daraus entsteht eine direkte DGL für $C\'(x)$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['lin1-vdk'] },
      ),
      mc(
        'Welcher Schritt steht bei Variation der Konstanten am Anfang?',
        [
          'Die homogene Lösung $y_h = C\\,e^{-\\int p\\,dx}$ bestimmen — sie liefert die Form, in der $C$ später zu $C(x)$ wird.',
          'Den integrierenden Faktor $\\mu = e^{\\int p\\,dx}$ bestimmen.',
          'Eine Partikulär­lösung in der Form der Stör­funktion ansetzen.',
          'Die Anfangs­bedingung in die inhomogene DGL einsetzen.',
        ],
        0,
        `**Ansatz:** VdK braucht die *Form* der homogenen Lösung als Basis — die Konstante darin wird zur Funktion $C(x)$.

**Rechnung:** Standard­ablauf VdK: (1) $y_h$ bestimmen → liefert Basis $u(x) = e^{-\\int p\\,dx}$. (2) Ansatz $y_p = C(x)\\cdot u(x)$. (3) Einsetzen in die DGL und nach $C\'(x)$ auflösen. (4) $C(x)$ integrieren. (5) $y = y_h + y_p$.

**Probe:** Ohne $y_h$ als Basis hätte VdK keine Struktur — der Name „Variation der *Konstanten*" weist direkt darauf hin: die Konstante stammt aus $y_h$.

**Typischer Fehler:** Den integrierenden Faktor als VdK-Schritt missdeuten — das ist die *alternative* Methode (Methode des integrierenden Faktors), keine VdK. Oder mit der Anfangs­bedingung anfangen, bevor die allgemeine Lösung steht.`,
        [
          'Was wird bei VdK „variiert"?',
          'Die Konstante in der homogenen Lösung.',
          'Also muss zuerst $y_h$ stehen.',
        ],
        {
          1: '$\\mu$ ist die *alternative* Lösungs­methode (integrierender Faktor) — VdK ist eine andere Methode, die mit der homogenen Lösung beginnt.',
          2: 'Das ist die Methode des *unbestimmten Ansatzes* (für spezielle Stör­funktionen). Bei VdK setzt man $y_p = C(x)\\cdot y_h(x)$, nicht eine Form der Stör­funktion.',
          3: 'Anfangs­bedingung kommt am Schluss, nach Bestimmung der allgemeinen Lösung. Erst die Form, dann die Bedingung.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['lin1-vdk'] },
      ),
      mc(
        'Wende Variation der Konstanten auf $y\' + 2y = e^x$ an: was ist $C\'(x)$ im Ansatz $y_p = C(x)\\,e^{-2x}$?',
        [
          '$C\'(x) = e^{3x}$',
          '$C\'(x) = e^{x}$',
          '$C\'(x) = e^{-x}$',
          '$C\'(x) = e^{-3x}$',
        ],
        0,
        `**Ansatz:** Aus dem Ansatz $y_p = C(x)\\,u(x)$ mit $u(x) = e^{-2x}$ folgt durch Einsetzen in die DGL eine direkte DGL für $C\'(x)$.

**Rechnung:** $y_p\' = C\'\\,e^{-2x} + C\\,(-2)\\,e^{-2x} = C\'\\,e^{-2x} - 2C\\,e^{-2x}$. In $y\' + 2y = e^x$ einsetzen: $C\'\\,e^{-2x} - 2C\\,e^{-2x} + 2\\,C\\,e^{-2x} = e^x \\Rightarrow C\'\\,e^{-2x} = e^x \\Rightarrow C\'(x) = e^x/e^{-2x} = e^{3x}$.

**Probe:** Integration: $C(x) = \\tfrac{1}{3}\\,e^{3x}$ → $y_p = \\tfrac{1}{3}\\,e^{3x}\\cdot e^{-2x} = \\tfrac{1}{3}\\,e^x$ ✓ (passt zur Methode des integrierenden Faktors).

**Typischer Fehler:** Vorzeichen in $u(x)$ vergessen ($u = e^{+2x}$ — falsch) oder die Subtraktions­glieder $-2C\\,e^{-2x}$ nicht mit $+2y_p = +2\\,C\\,e^{-2x}$ wegheben — dann kürzt sich die DGL nicht zur reinen $C\'$-Gleichung.`,
        [
          '$y_p = C(x)\\,e^{-2x}$, $y_p\' = C\'\\,e^{-2x} - 2C\\,e^{-2x}$.',
          'In DGL einsetzen — $C$-Terme heben sich raus.',
          'Es bleibt $C\'\\,e^{-2x} = e^x$, also $C\'(x) = e^{3x}$.',
        ],
        {
          1: 'Du hast $1/e^{-2x}$ als $1/e^{2x} = e^{-2x}$ gerechnet — also $e^x \\cdot e^{-2x} = e^{-x}$? Nein, korrekt ist $e^x / e^{-2x} = e^{x-(-2x)} = e^{3x}$.',
          2: 'Hier wurde $1/e^{-2x}$ als $e^{-2x}$ statt $e^{2x}$ behandelt — Vorzeichen­fehler. Richtig: $e^x \\cdot e^{2x} = e^{3x}$.',
          3: 'Vorzeichen sowohl bei $u$ als auch beim Quotienten falsch. Doppelter Vorzeichen­fehler bringt $e^{-3x}$ statt $e^{3x}$.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['lin1-vdk'] },
      ),
      mc(
        'Ein Lerner setzt bei VdK $y_p = C(x)\\,e^{-2x}$ an, vergisst aber die Produktregel und schreibt $y_p\' = C\\,e^{-2x}$. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — bei konstantem $C$ stimmt das.',
          'Bei VdK ist $C(x)$ aber eine *Funktion* von $x$. Die Produkt­regel liefert $y_p\' = C\'\\,e^{-2x} - 2C\\,e^{-2x}$ — der Term $C\'\\,e^{-2x}$ ist genau der, aus dem $C\'(x)$ bestimmt wird.',
          'Falsch — bei VdK darf man die Produkt­regel komplett weglassen.',
          'Falsch — $y_p\' = -2\\,e^{-2x}$ ist der korrekte Ausdruck.',
        ],
        1,
        `**Ansatz:** Wenn $C$ eine Funktion ist, gilt die Produkt­regel: $(C\\cdot u)\' = C\'\\,u + C\\,u\'$. Genau das ist der Punkt von VdK — der zusätzliche Term $C\'\\,u$ erlaubt das Konstruieren einer Partikulär­lösung.

**Rechnung:** $y_p = C(x)\\,e^{-2x}$. Mit Produkt­regel: $y_p\' = C\'\\,e^{-2x} + C\\,(-2)\\,e^{-2x} = C\'\\,e^{-2x} - 2C\\,e^{-2x}$. Wenn $C\'$ wegfiele, wäre $y_p\' = -2y_p$, also wäre $y_p$ wieder eine homogene Lösung — keine Partikulär­lösung.

**Probe:** Setze $y_p\' = -2y_p$ in $y\' + 2y = q$: $-2y_p + 2y_p = 0 \\neq q$ (außer bei $q \\equiv 0$). Daher *muss* der $C\'$-Term mit, sonst funktioniert VdK nicht.

**Typischer Fehler:** Bei einer „Konstante" automatisch denken, ihre Ableitung sei null. Bei VdK ist sie aber explizit eine Funktion von $x$, also hat sie eine Ableitung.`,
        [
          'Was sagt die Produkt­regel für $(C(x)\\cdot u(x))\'$?',
          '$C(x)$ ist hier eine Funktion, nicht konstant.',
          'Ohne $C\'$-Term wäre $y_p$ wieder homogen — kein Mehrwert.',
        ],
        {
          0: 'Bei *konstantem* $C$ stimmt $y_p\' = C\\cdot u\'$ — aber bei VdK ist $C$ ja gerade *keine* Konstante, sondern variiert mit $x$.',
          2: 'Im Gegenteil — gerade die Produkt­regel ist der Kern von VdK. Sie liefert den $C\'$-Term, aus dem die Partikulär­lösung folgt.',
          3: 'Das wäre nur die Ableitung von $u(x) = e^{-2x}$ ohne den Vorfaktor. Die ganze Funktion $y_p = C(x)\\,e^{-2x}$ hat zwei Beiträge: $C\'\\,u + C\\,u\'$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['lin1-vdk'] },
      ),
      sorting(
        'Bringe die Schritte der Variation der Konstanten in die richtige Reihenfolge.',
        [
          'Homogene Lösung $y_h = C\\,e^{-\\int p\\,dx}$ bestimmen.',
          'Partikulär­ansatz $y_p = C(x)\\cdot e^{-\\int p\\,dx}$ aufstellen — Konstante zur Funktion machen.',
          '$y_p$ in die inhomogene DGL einsetzen, $C(x)$-Terme heben sich → DGL für $C\'(x)$.',
          '$C\'(x)$ integrieren zu $C(x)$, daraus $y_p$.',
          'Allgemeine Lösung als $y = y_h + y_p$ zusammensetzen.',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** VdK ist ein 5-Schritte-Rezept: erst die homogene Form, dann VdK-Ansatz, einsetzen, integrieren, kombinieren.

**Rechnung:** Schritt 1 liefert $u(x) = e^{-\\int p\\,dx}$. Schritt 2 ersetzt $C \\to C(x)$. Schritt 3 reduziert auf eine direkte Gleichung für $C\'$. Schritt 4 liefert $C(x)$ durch Integration. Schritt 5 ergibt die allgemeine Lösung.

**Probe:** Ohne Schritt 1 kennt man die Form von $u(x)$ nicht. Ohne Schritt 3 fehlt die Gleichung für $C\'$. Ohne Schritt 4 bleibt $C(x)$ unbekannt. Ohne Schritt 5 hat man nur die partikuläre, nicht die allgemeine Lösung.

**Typischer Fehler:** $C(x)$ direkt durch Inspektion erraten wollen, ohne den $C\'$-Schritt sauber durchzuführen — funktioniert nur in Trivialfällen.`,
        [
          'Was ist die *Basis* der Variation?',
          'Erst $y_h$, dann variieren.',
          '$y = y_h + y_p$ ist erst nach Integration der gesamte Aufbau.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['lin1-vdk'] },
      ),
    ],

    // ── [4] Homogene Lösung y_h = C·e^{-∫p dx} ──────────────────────────
    4: [
      tf(
        'Für die DGL $y\' + 3y = q(x)$ ist die homogene Lösung $y_h = C\\,e^{-3x}$.',
        true,
        `**Ansatz:** Homogene Lösung erfüllt $y_h\' + p\\,y_h = 0$. Lösung über Trennung der Variablen oder direkt aus $y_h = C\\,e^{-\\int p\\,dx}$.

**Rechnung:** $p(x) = 3$ → $\\int p\\,dx = 3x$ → $y_h = C\\,e^{-3x}$. Wichtig: das *negative* Vorzeichen im Exponenten ist Standard für die homogene Lösung.

**Probe:** $y_h\' = -3C\\,e^{-3x} = -3\\,y_h$; $y_h\' + 3y_h = -3y_h + 3y_h = 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen — $y_h = Ce^{+3x}$ wäre Lösung von $y\' = +3y$, also $y\' - 3y = 0$, nicht $y\' + 3y = 0$.`,
        [
          'Formel: $y_h = C\\,e^{-\\int p\\,dx}$.',
          'Achtung: *negatives* Vorzeichen vor dem Integral.',
          'Test: $y_h\' + p\\,y_h = 0$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['lin1-yh'] },
      ),
      mc(
        'Bestimme die homogene Lösung $y_h$ der DGL $y\' - 4y = q(x)$.',
        [
          '$y_h = C\\,e^{4x}$',
          '$y_h = C\\,e^{-4x}$',
          '$y_h = C\\,e^{4}\\cdot x$',
          '$y_h = -4\\,C\\,e^{x}$',
        ],
        0,
        `**Ansatz:** Standardform $y\' + (-4)\\,y = q(x)$ → $p = -4$, daher Exponent $-\\int p\\,dx = -(-4x) = +4x$.

**Rechnung:** $y_h = C\\,e^{-\\int p\\,dx} = C\\,e^{-(-4x)} = C\\,e^{+4x}$.

**Probe:** $y_h\' = 4C\\,e^{4x} = 4\\,y_h$; $y_h\' - 4y_h = 4y_h - 4y_h = 0$ ✓.

**Typischer Fehler:** Doppeltes Vorzeichen vergessen — beide negativen Vorzeichen heben sich. Ergebnis ist $e^{+4x}$, nicht $e^{-4x}$.`,
        [
          'Standardform: $y\' + p\\,y = q$. Was ist $p$, wenn ursprünglich $y\' - 4y$ steht?',
          '$p = -4$, also $-\\int p\\,dx = +4x$.',
          'Vorzeichen $\\times$ Vorzeichen = $+$.',
        ],
        {
          1: 'Vorzeichen falsch zugeordnet: $y\' - 4y$ heißt $p = -4$, nicht $p = +4$. Dann ist $-\\int p\\,dx = +4x$, nicht $-4x$.',
          2: 'Polynomial statt exponentiell — passt zu DGL $y\' = 4$ (konstante Steigung), nicht zu $y\' - 4y = 0$ (proportional).',
          3: '$y\'$ und $y$ wurden vertauscht oder $-4$ als Vorfaktor von $y_h$ eingebaut. Die Konstante $C$ ist beliebig — sie wird aus AB bestimmt, nicht aus dem DGL-Koeffizienten.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['lin1-yh'] },
      ),
      ni(
        'Bestimme die homogene Lösung von $y\' + 2y = 0$ mit AB $y(0) = 5$ und berechne $y(1)$ (auf 2 Dezimalstellen).',
        0.68, 0.02, '',
        `**Ansatz:** Homogene Lösung $y_h = C\\,e^{-2x}$ → AB $\\to C$ → an $x=1$ auswerten.

**Rechnung:** $y_h(0) = C\\,e^{0} = C = 5$. Damit $y(x) = 5\\,e^{-2x}$ und $y(1) = 5\\,e^{-2} = 5/e^2 \\approx 5/7{,}389 \\approx 0{,}677$.

**Probe:** $y\'(x) = -10\\,e^{-2x}$; $y\' + 2y = -10\\,e^{-2x} + 10\\,e^{-2x} = 0$ ✓. AB: $y(0) = 5$ ✓.

**Typischer Fehler:** Vorzeichen vergessen ($y(1) = 5e^2 \\approx 36{,}9$, falsch — passt zu $y\' = +2y$, nicht $y\' + 2y = 0$). Oder $5/e^2$ als $5/e \\approx 1{,}84$ verrechnen.`,
        [
          'Form: $y_h = C\\,e^{-2x}$.',
          'AB liefert $C = 5$.',
          'Bei $x = 1$: $5/e^2$. Bekannt: $e^2 \\approx 7{,}39$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['lin1-yh'] },
      ),
      mc(
        'Ein Lerner schreibt für die homogene Lösung von $y\' - 5y = 0$ den Ausdruck $y_h = C\\,e^{-5x}$. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — der Vorfaktor $-5$ landet im Exponenten.',
          'Falsch: aus $y\' - 5y = 0$ folgt $y\' = 5y$, also $y_h = C\\,e^{+5x}$. Das negative Vorzeichen im Exponenten passt zu $y\' + 5y = 0$, nicht zu $y\' - 5y = 0$.',
          'Falsch: bei homogenen DGL ist $C = 0$, also $y_h \\equiv 0$.',
          'Falsch: das Vorzeichen muss umgekehrt werden, weil $y_h$ immer abklingen muss.',
        ],
        1,
        `**Ansatz:** Standardform $y\' + p\\,y = 0$ identifizieren — bei $y\' - 5y$ ist $p = -5$, nicht $+5$.

**Rechnung:** $p = -5$ → $y_h = C\\,e^{-\\int p\\,dx} = C\\,e^{-(-5x)} = C\\,e^{+5x}$.

**Probe:** Test mit $y_h = C\\,e^{5x}$: $y_h\' = 5C\\,e^{5x} = 5\\,y_h$; $y_h\' - 5y_h = 0$ ✓. Test der Lerner-Form $y_h = C\\,e^{-5x}$: $y_h\' = -5y_h$; $y_h\' - 5y_h = -10y_h \\neq 0$ — falsch.

**Typischer Fehler:** Sich nur am Vorzeichen vor $y$ in der DGL orientieren ohne in Standardform zu bringen. Es kommt auf das Vorzeichen von $p$ in der Form $y\' + p\\,y$ an, nicht auf das Vorzeichen, wie es ursprünglich vor $y$ steht.`,
        [
          'Standardform: $y\' + p\\,y = 0$. Was ist $p$ bei $y\' - 5y$?',
          '$p = -5$ → $-\\int p\\,dx = +5x$.',
          'Probe: einsetzen der Lerner-Form in die DGL.',
        ],
        {
          0: 'Genau das ist das Missverständnis — der Vorfaktor wandert *nicht 1:1* in den Exponenten. Erst Standardform, dann Vorzeichen­wechsel beim $-\\int p\\,dx$.',
          2: '$C$ ist beliebig — die *triviale* Lösung $y \\equiv 0$ entspricht $C = 0$, ist aber nicht die einzige. Allgemeine homogene Lösung hat $C \\neq 0$.',
          3: 'Es gibt keine universelle „muss abklingen"-Regel. Bei $y\' - 5y = 0$ wächst die Lösung ($e^{+5x}$) — das ist exakt das, was die DGL vorgibt.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['lin1-yh'] },
      ),
      ni(
        'Bestimme die homogene Lösung von $y\' + (1/x)\\,y = 0$ ($x > 0$) mit AB $y(1) = 4$ und berechne $y(2)$ (auf 2 Dezimalstellen).',
        2, 0.05, '',
        `**Ansatz:** Bei nicht-konstantem $p$ erst Stamm­funktion bilden, dann homogene Lösung als $C\\,e^{-\\int p\\,dx}$ aufschreiben.

**Rechnung:** $\\int (1/x)\\,dx = \\ln x$ (für $x > 0$). $y_h = C\\,e^{-\\ln x} = C\\cdot e^{\\ln(1/x)} = C/x$. AB: $y_h(1) = C/1 = 4 \\Rightarrow C = 4$. Damit $y(x) = 4/x$ und $y(2) = 4/2 = 2$.

**Probe:** $y\'(x) = -4/x^2$; $y\' + (1/x)\\,y = -4/x^2 + (1/x)\\cdot 4/x = -4/x^2 + 4/x^2 = 0$ ✓; $y(1) = 4$ ✓.

**Typischer Fehler:** $e^{-\\ln x}$ als $-\\ln x$ stehen lassen oder als $e^{-x} \\cdot x$ verrechnen. Korrekt: $e^{-\\ln x} = 1/e^{\\ln x} = 1/x$.`,
        [
          'Stamm­funktion von $1/x$ ist $\\ln x$.',
          '$y_h = C\\,e^{-\\ln x} = C/x$.',
          'AB liefert $C$, dann an $x=2$ auswerten.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['lin1-yh'] },
      ),
    ],

    // ── [5] RC-Kreis $\dot U + U/(RC) = U_0/(RC)$ ───────────────────────
    5: [
      tf(
        'Beim RC-Lade­kreis $\\dot U + U/(RC) = U_0/(RC)$ ist die Zeitkonstante $\\tau = RC$.',
        true,
        `**Ansatz:** Standardform-Vergleich: $\\dot U + p\\,U = q$ mit $p = 1/(RC)$. Zeitkonstante $\\tau = 1/p$, also $\\tau = RC$.

**Rechnung:** $\\tau = RC$ ist die charakteristische Zeit, in der sich die Spannung um den Faktor $1 - 1/e \\approx 63{,}2\\,\\%$ dem End­wert annähert. $U(t) = U_0(1 - e^{-t/\\tau})$.

**Probe:** Bei $t = \\tau$: $U(\\tau) = U_0(1 - 1/e) \\approx 0{,}632\\,U_0$ — typische Faustformel für RC-Kreise.

**Typischer Fehler:** $\\tau = R/C$ oder $\\tau = 1/(RC)$ angeben — beides hat falsche Einheit oder falsche Größenordnung. Einheits­check: $[R]\\cdot[C] = \\Omega \\cdot \\mathrm{F} = \\mathrm{V/A} \\cdot \\mathrm{As/V} = \\mathrm{s}$ ✓.`,
        [
          'Vergleich mit Standardform: was ist $p$?',
          '$p = 1/(RC)$ → $\\tau = 1/p = RC$.',
          'Einheits­check: $\\Omega \\cdot \\mathrm{F} = \\mathrm{s}$.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['lin1-rc'] },
      ),
      mc(
        'Welche Funktion löst das RC-Aufladungs-AWP $\\dot U + U/(RC) = U_0/(RC)$ mit $U(0) = 0$?',
        [
          '$U(t) = U_0\\,(1 - e^{-t/(RC)})$',
          '$U(t) = U_0\\,e^{-t/(RC)}$',
          '$U(t) = U_0\\,(1 - e^{-RC\\cdot t})$',
          '$U(t) = U_0\\cdot t/(RC)$',
        ],
        0,
        `**Ansatz:** Inhomogene lineare DGL 1. Ordnung mit konstanter Stör­funktion. Lösung: $U_h + U_p$ mit $U_p = U_0$ (konstant, Gleich­gewicht) und $U_h = C\\,e^{-t/(RC)}$. AB liefert $C$.

**Rechnung:** $U(t) = U_0 + C\\,e^{-t/(RC)}$. AB: $U(0) = U_0 + C = 0 \\Rightarrow C = -U_0$. Damit $U(t) = U_0 - U_0\\,e^{-t/(RC)} = U_0(1 - e^{-t/(RC)})$.

**Probe:** $U(0) = U_0(1 - 1) = 0$ ✓; $\\lim_{t\\to\\infty} U(t) = U_0$ ✓ (Endwert = Speise­spannung); $\\dot U = (U_0/(RC))\\,e^{-t/(RC)}$, einsetzen: $\\dot U + U/(RC) = (U_0/(RC))\\,e^{-t/(RC)} + (U_0/(RC))(1 - e^{-t/(RC)}) = U_0/(RC)$ ✓.

**Typischer Fehler:** Entladungs­lösung statt Aufladungs­lösung wählen ($U_0\\,e^{-t/(RC)}$ — passt zur DGL $\\dot U + U/(RC) = 0$, also Entladen). Oder $RC$ und $1/(RC)$ verwechseln im Exponenten.`,
        [
          'Endwert $U(\\infty) = U_0$ → $U_p = U_0$.',
          'Homogen: $U_h = C\\,e^{-t/(RC)}$.',
          'AB $U(0) = 0$ liefert $C = -U_0$.',
        ],
        {
          1: 'Das ist die *Entladungs*-Lösung (DGL $\\dot U + U/(RC) = 0$, also rechte Seite Null). Hier wird der Konden­sator aber *aufgeladen* (rechte Seite $U_0/(RC) \\neq 0$) — Endwert $U_0$, nicht $0$.',
          2: 'Im Exponenten steht $RC\\cdot t$ statt $t/(RC)$ — das ist dimensions­los falsch. $RC$ hat Einheit Sekunden, also gehört es als Nenner unter $t$.',
          3: 'Lineare Aufladung passt zu konstanter Strom­quelle, nicht zur RC-DGL. Mit dieser Form wäre $\\dot U = U_0/(RC)$ (konstant), aber die DGL hat zusätzlich den Term $U/(RC)$, der die Ladung verlangsamt.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['lin1-rc'] },
      ),
      ni(
        'Ein RC-Lade­kreis hat $R = 1\\,\\mathrm{k\\Omega}$, $C = 1\\,\\mathrm{mF}$, $U_0 = 10\\,\\mathrm{V}$ und $U(0) = 0$. Welche Spannung liegt nach $t = 2\\,\\mathrm{s}$ am Konden­sator (auf 2 Dezimal­stellen, in V)?',
        8.65, 0.05, 'V',
        `**Ansatz:** Lösungs­formel $U(t) = U_0(1 - e^{-t/\\tau})$ mit $\\tau = RC$. Werte einsetzen.

**Rechnung:** $\\tau = R\\cdot C = 10^3\\,\\Omega \\cdot 10^{-3}\\,\\mathrm{F} = 1\\,\\mathrm{s}$. $U(2) = 10\\,(1 - e^{-2/1}) = 10\\,(1 - e^{-2}) \\approx 10\\,(1 - 0{,}1353) \\approx 8{,}647\\,\\mathrm{V}$.

**Probe:** Bei $t = \\tau = 1\\,\\mathrm{s}$: $U(1) = 10\\,(1 - 1/e) \\approx 6{,}32\\,\\mathrm{V}$ — die berühmten 63 % nach einer Zeit­konstante. Bei $t = 2\\tau$ etwa $86{,}5\\,\\%$ ✓.

**Typischer Fehler:** Einheits­fehler bei $RC$: $1\\,\\mathrm{k\\Omega}\\cdot 1\\,\\mathrm{mF} = 1\\,\\mathrm{s}$ (nicht $1\\,\\mathrm{ms}$ oder $1\\,\\mu\\mathrm{s}$). Oder $e^{-2}$ als $-e^2$ oder $e^2 \\approx 7{,}39$ verrechnen.`,
        [
          '$\\tau = RC = 1\\,\\mathrm{s}$ (Einheits­produkt).',
          'Lösung: $U(t) = 10\\,(1 - e^{-t/\\tau})$.',
          '$e^{-2} \\approx 0{,}135$, also $U(2) \\approx 10\\cdot 0{,}865$.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['lin1-rc'] },
      ),
      mc(
        'Ein Lerner gibt für $R = 100\\,\\Omega$, $C = 10\\,\\mu\\mathrm{F}$ die Zeitkonstante als $\\tau = 1000\\,\\mathrm{s}$ an. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — $\\tau = R\\cdot C = 100\\cdot 10 = 1000\\,\\mathrm{s}$.',
          'Einheits­fehler: $\\mu\\mathrm{F} = 10^{-6}\\,\\mathrm{F}$. $\\tau = 100\\,\\Omega\\cdot 10^{-5}\\,\\mathrm{F} = 10^{-3}\\,\\mathrm{s} = 1\\,\\mathrm{ms}$ — drei Größen­ordnungen kleiner.',
          'Falsch — $\\tau = R/C$, nicht $R\\cdot C$.',
          'Falsch — $\\tau$ hat Einheit V, nicht s.',
        ],
        1,
        `**Ansatz:** Bei Größen mit SI-Vorsätzen ($\\mu$, m, k, M) immer in Basis­einheiten umrechnen, *bevor* man multipliziert.

**Rechnung:** $C = 10\\,\\mu\\mathrm{F} = 10\\cdot 10^{-6}\\,\\mathrm{F} = 10^{-5}\\,\\mathrm{F}$. $\\tau = R\\cdot C = 100\\,\\Omega \\cdot 10^{-5}\\,\\mathrm{F} = 10^{-3}\\,\\mathrm{s} = 1\\,\\mathrm{ms}$.

**Probe:** Einheits­check: $\\Omega\\cdot \\mathrm{F} = \\mathrm{V/A} \\cdot \\mathrm{C/V} = \\mathrm{C/A} = \\mathrm{s}$ ✓. Größen­ordnung: für typische Elektronik liegt $\\tau$ im Mikro- bis Millisekunden-Bereich, $1000\\,\\mathrm{s}$ ($\\approx 17\\,\\mathrm{min}$) wäre für solche Bauteil­werte unrealistisch.

**Typischer Fehler:** $\\mu$-Vorsatz vergessen oder mit $\\mathrm{m}$ verwechseln. $\\mu = 10^{-6}$, $\\mathrm{m} = 10^{-3}$, $\\mathrm{k} = 10^3$ — drei Größen­ordnungen Unterschied pro Stufe.`,
        [
          'SI-Vorsatz $\\mu$ steht für $10^{-6}$.',
          'Erst in Basis­einheiten, dann multiplizieren.',
          'Größen­ordnungs­check: $1000\\,\\mathrm{s}$ ist physikalisch unrealistisch.',
        ],
        {
          0: 'Hier wurde der Vorsatz $\\mu$ ignoriert: $10\\,\\mu\\mathrm{F}$ heißt $10^{-5}\\,\\mathrm{F}$, nicht $10\\,\\mathrm{F}$. Drei Zehner­potenzen zu groß macht $1000$ statt $0{,}001$.',
          2: '$\\tau = R\\cdot C$, nicht $R/C$. Ohne $C$ als Faktor wäre die Einheit $\\Omega/\\mathrm{F} = 1/\\mathrm{s}^2$ — falsche Dimension.',
          3: '$\\tau$ ist eine Zeit­konstante, also Einheit Sekunden. Volt wäre falsch — die Spannung $U_0$ hat Volt, aber $\\tau$ nicht.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['lin1-rc'] },
      ),
      ni(
        'Ein RC-Konden­sator entlädt sich gemäß $\\dot U + U/\\tau = 0$ mit $U(0) = U_0$ und $\\tau = 2\\,\\mathrm{s}$. Nach welcher Zeit ist die Spannung auf die Hälfte gefallen (auf 2 Dezimal­stellen, in s)?',
        1.39, 0.02, 's',
        `**Ansatz:** Entladungs-Lösung $U(t) = U_0\\,e^{-t/\\tau}$. Halbwertszeit $t_{1/2}$ mit $U(t_{1/2}) = U_0/2$ ansetzen.

**Rechnung:** $U_0\\,e^{-t/\\tau} = U_0/2 \\Rightarrow e^{-t/\\tau} = 1/2 \\Rightarrow -t/\\tau = \\ln(1/2) = -\\ln 2 \\Rightarrow t = \\tau\\cdot \\ln 2$. Mit $\\tau = 2\\,\\mathrm{s}$: $t_{1/2} = 2\\cdot \\ln 2 \\approx 2\\cdot 0{,}6931 \\approx 1{,}386\\,\\mathrm{s}$.

**Probe:** Test: $U(1{,}386) = U_0\\,e^{-1{,}386/2} = U_0\\,e^{-0{,}693} \\approx U_0\\cdot 0{,}5 = U_0/2$ ✓. Allgemeine Regel: Halbwertszeit = $\\tau\\cdot \\ln 2 \\approx 0{,}693\\,\\tau$.

**Typischer Fehler:** $t_{1/2} = \\tau/2$ ansetzen — das ist die Faust­formel für *lineare* Abnahme, gilt aber nicht für exponentielle Entladung. Oder $\\ln 2$ mit $\\log_{10} 2 \\approx 0{,}301$ verwechseln.`,
        [
          '$U(t) = U_0\\,e^{-t/\\tau}$.',
          'Setze $U(t_{1/2}) = U_0/2$, löse nach $t_{1/2}$.',
          '$t_{1/2} = \\tau\\,\\ln 2$. $\\ln 2 \\approx 0{,}693$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['lin1-rc'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // dgl-1-4 — DGL 2. Ordnung mit konstanten Koeffizienten  (6 subGoals)
  // Je ≥ 5 Aufgaben = mind. 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-1-4': {

    // ── [0] Char. Gleichung über Ansatz y = e^(λx) ──────────────────────
    0: [
      tf(
        'Aus dem Ansatz $y = e^{\\lambda x}$ folgt für die DGL $y\'\' - 3y\' + 2y = 0$ die charakteristische Gleichung $\\lambda^2 - 3\\lambda + 2 = 0$.',
        true,
        `**Ansatz:** Exponential­ansatz einsetzen, $e^{\\lambda x}$ ausklammern, kürzen — übrig bleibt eine Polynom­gleichung.

**Rechnung:** $y = e^{\\lambda x}$, $y\' = \\lambda\\,e^{\\lambda x}$, $y\'\' = \\lambda^2\\,e^{\\lambda x}$. Einsetzen: $\\lambda^2\\,e^{\\lambda x} - 3\\lambda\\,e^{\\lambda x} + 2\\,e^{\\lambda x} = 0$. Faktor $e^{\\lambda x}$ raus → $\\lambda^2 - 3\\lambda + 2 = 0$.

**Probe:** Wurzeln $(\\lambda-1)(\\lambda-2) = 0$ → $\\lambda_1 = 1, \\lambda_2 = 2$. Test: $y = e^x$ → $y\'\' - 3y\' + 2y = e^x - 3e^x + 2e^x = 0$ ✓.

**Typischer Fehler:** Beim Einsetzen die Ableitungs­potenzen vergessen — jede Ableitung von $e^{\\lambda x}$ liefert einen Faktor $\\lambda$, also $y\'\\to \\lambda$, $y\'\'\\to \\lambda^2$.`,
        [
          '$y = e^{\\lambda x}$ → $y\' = \\lambda e^{\\lambda x}$, $y\'\' = \\lambda^2 e^{\\lambda x}$.',
          'Einsetzen und gemeinsamen Faktor $e^{\\lambda x}$ ausklammern.',
          'Übrig bleibt das Polynom in $\\lambda$ mit den Koeffizienten der DGL.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['char-gleichung'] },
      ),
      mc(
        'Wie lautet die charakteristische Gleichung der DGL $2y\'\' + 5y\' - 3y = 0$?',
        [
          '$2\\lambda^2 + 5\\lambda - 3 = 0$',
          '$\\lambda^2 + 5\\lambda - 3 = 0$',
          '$2\\lambda + 5 - 3 = 0$',
          '$2\\lambda^2 + 5\\lambda + 3 = 0$',
        ],
        0,
        `**Ansatz:** Koeffizienten der DGL direkt in das Polynom übertragen — der Koeffizient vor $y\'\'$ wird Koeffizient von $\\lambda^2$, vor $y\'$ von $\\lambda$, vor $y$ konstant.

**Rechnung:** Aus $2y\'\' + 5y\' + (-3)y = 0$ wird $2\\lambda^2 + 5\\lambda - 3 = 0$. Vorzeichen mit übertragen!

**Probe:** Diskriminante $D = 25 - 4\\cdot 2\\cdot (-3) = 25 + 24 = 49$ → $\\lambda = (-5\\pm 7)/4$, also $\\lambda_1 = 1/2, \\lambda_2 = -3$. Test mit $y = e^{x/2}$: $y\'\' = e^{x/2}/4$, $2y\'\' + 5y\' - 3y = 2/4 + 5/2 - 3 = 0{,}5 + 2{,}5 - 3 = 0$ ✓.

**Typischer Fehler:** Den Koeffizienten $a = 2$ vor $\\lambda^2$ vergessen oder das Vorzeichen vor $-3$ verschlucken (so wird aus $-3$ ein $+3$).`,
        [
          'Welcher Koeffizient steht vor $y\'\'$? Das wird der Koeffizient von $\\lambda^2$.',
          'Vorzeichen unbedingt mitnehmen — $-3y$ wird zu $-3$ als Konstante.',
          'Char. Gleichung hat dieselbe Form wie die DGL, nur mit $\\lambda^k$ statt $y^{(k)}$.',
        ],
        {
          1: 'Den Koeffizienten $a=2$ vor $y\'\'$ ignoriert. Char. Gleichung übernimmt alle Koeffizienten der DGL — nicht nur die einsen.',
          2: 'Den $\\lambda^2$-Term komplett weggelassen — das wäre Ordnung 1. Ordnung 2 verlangt einen $\\lambda^2$-Term.',
          3: 'Vorzeichen­fehler: aus $-3y$ wird $-3$ in der char. Gleichung, nicht $+3$. Vorzeichen werden 1:1 übernommen.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['char-gleichung'] },
      ),
      ni(
        'Welcher positive Wert von $\\lambda$ erfüllt die charakteristische Gleichung $\\lambda^2 - \\lambda - 6 = 0$?',
        3, 0.05, '',
        `**Ansatz:** Quadratische Gleichung über pq-Formel oder Faktorisieren lösen, beide Wurzeln vergleichen, die positive auswählen.

**Rechnung:** $\\lambda^2 - \\lambda - 6 = 0$. Diskriminante $D = 1 + 24 = 25$. $\\lambda = (1 \\pm 5)/2$ → $\\lambda_1 = 3$, $\\lambda_2 = -2$. Positive Wurzel: $\\lambda = 3$.

**Probe:** $\\lambda = 3$: $9 - 3 - 6 = 0$ ✓. Faktorisieren: $(\\lambda - 3)(\\lambda + 2) = \\lambda^2 - \\lambda - 6$ ✓.

**Typischer Fehler:** pq-Formel mit $p = -1$, $q = -6$ verwenden und Vorzeichen­fehler beim Quadrieren machen ($(-1/2)^2 = 1/4$, nicht $-1/4$). Oder die Diskriminante als $1 - 24 = -23$ rechnen (Vorzeichen vergessen).`,
        [
          'pq-Formel: $\\lambda = -p/2 \\pm \\sqrt{(p/2)^2 - q}$ mit $p = -1, q = -6$.',
          'Diskriminante $= 1 + 24 = 25$.',
          'Beide Wurzeln berechnen, positive auswählen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['char-gleichung'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\'\' + 2y\' + y = 0$ die charakteristische Gleichung $\\lambda + 2\\lambda + 1 = 0$. Welcher Hinweis ist korrekt?',
        [
          'Stimmt — die Koeffizienten sind direkt übernommen.',
          'Der quadratische Term $\\lambda^2$ aus $y\'\'$ wurde vergessen. Korrekt: $\\lambda^2 + 2\\lambda + 1 = 0$, faktorisiert $(\\lambda+1)^2$ → Doppelwurzel $\\lambda = -1$.',
          'Falsch: das mittlere $\\lambda$ muss $\\lambda^2$ heißen.',
          'Falsch: char. Gleichungen haben immer Diskriminante $\\geq 0$.',
        ],
        1,
        `**Ansatz:** Beim Übersetzen $y^{(k)} \\to \\lambda^k$ darf keine Potenz fehlen — jede Ableitungs­ordnung wird zur entsprechenden $\\lambda$-Potenz.

**Rechnung:** $y\'\' + 2y\' + y = 0$ → $\\lambda^2 + 2\\lambda + 1 = 0$. Diskriminante $D = 4 - 4 = 0$ → Doppelwurzel. $(\\lambda + 1)^2 = 0 \\Rightarrow \\lambda = -1$ doppelt.

**Probe:** Lösung $y = (C_1 + C_2 x)\\,e^{-x}$. Test mit $y = e^{-x}$: $y\'\' = e^{-x}$, $y\' = -e^{-x}$. $y\'\' + 2y\' + y = e^{-x} - 2e^{-x} + e^{-x} = 0$ ✓.

**Typischer Fehler:** Genau das, was der Lerner macht — alle Ableitungen werden naiv zu $\\lambda$, ohne Potenz. Dann erhält man fälschlich eine lineare Gleichung statt einer quadratischen.`,
        [
          'Welche Potenz von $\\lambda$ kommt aus $y\'\'$?',
          '$y\'\' \\to \\lambda^2$, $y\' \\to \\lambda$, $y \\to 1$.',
          'Die Ordnung der DGL = Grad der char. Gleichung.',
        ],
        {
          0: 'Genau das ist der Fehler — der Lerner hat $\\lambda^2$ als $\\lambda$ geschrieben. Dadurch wird die Gleichung linear statt quadratisch.',
          2: 'Der Hinweis ist im Prinzip korrekt, aber die Erklärung wäre besser, wenn sie die Lösung gleich nennt: Doppelwurzel $\\lambda = -1$ liefert $y = (C_1 + C_2 x)e^{-x}$.',
          3: 'Char. Gleichungen können sehr wohl negative Diskriminante haben — das ist der Fall *komplexer* Wurzeln (Schwingung). Beispiel: $\\lambda^2 + 1 = 0$, $D = -4$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['char-gleichung'] },
      ),
      mc(
        'Welche DGL führt auf die charakteristische Gleichung $\\lambda^2 + 4 = 0$?',
        [
          '$y\'\' + 4y = 0$',
          '$y\'\' - 4y = 0$',
          '$y\'\' + 4y\' = 0$',
          '$4y\'\' + y = 0$',
        ],
        0,
        `**Ansatz:** Rückwärts­abbildung: $\\lambda^2 \\to y\'\'$, konstante $\\to y$, $\\lambda \\to y\'$. Vorzeichen 1:1 mit übernehmen.

**Rechnung:** $\\lambda^2 + 4 = 0$ → $y\'\' + 4\\cdot y = 0$ → $y\'\' + 4y = 0$.

**Probe:** Mit $y = e^{\\lambda x}$ in $y\'\' + 4y = 0$ einsetzen: $\\lambda^2 e^{\\lambda x} + 4 e^{\\lambda x} = (\\lambda^2 + 4)e^{\\lambda x}$ → char. Gleichung $\\lambda^2 + 4 = 0$ ✓.

**Typischer Fehler:** Die Konstante $4$ als Koeffizient vor $y\'$ statt vor $y$ einbauen ($y\'\' + 4y\' = 0$ würde zu char. Gl. $\\lambda^2 + 4\\lambda = 0$ führen). Oder Vorzeichen umkehren.`,
        [
          'Welcher Term in der char. Gleichung kommt aus $y$ (ohne Strich)?',
          'Konstante in char. Gleichung ↔ Koeffizient vor $y$.',
          '$\\lambda^k$ ↔ $y^{(k)}$, $\\lambda^0 = 1$ ↔ $y$.',
        ],
        {
          1: 'Vorzeichen umgekehrt: $y\'\' - 4y = 0$ führt auf $\\lambda^2 - 4 = 0$, das hat reelle Wurzeln $\\pm 2$. Wir suchen aber $+4$ als konstanten Term.',
          2: 'Das wäre $\\lambda^2 + 4\\lambda = 0$ — der konstante Term fehlt komplett, dafür kommt ein linearer Term hinzu. Falsche Position.',
          3: 'Hier ist der Vorfaktor $4$ vor $y\'\'$, nicht vor $y$. Char. Gleichung wäre $4\\lambda^2 + 1 = 0$, also $\\lambda^2 = -1/4$.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['char-gleichung'] },
      ),
    ],

    // ── [1] D > 0 (zwei reelle Wurzeln) ─────────────────────────────────
    1: [
      tf(
        'Hat die charakteristische Gleichung zwei verschiedene reelle Wurzeln $\\lambda_1 \\neq \\lambda_2$, ist die allgemeine Lösung $y(x) = C_1\\,e^{\\lambda_1 x} + C_2\\,e^{\\lambda_2 x}$.',
        true,
        `**Ansatz:** Bei zwei verschiedenen reellen Wurzeln liefert jeder Exponential­ansatz $e^{\\lambda_i x}$ eine linear unabhängige Lösung. Die Linearkombination ist die allgemeine Lösung.

**Rechnung:** Beide Lösungen $y_1 = e^{\\lambda_1 x}$ und $y_2 = e^{\\lambda_2 x}$ erfüllen die DGL. Linear unabhängig (Wronski-Determinante $\\neq 0$ für $\\lambda_1 \\neq \\lambda_2$). Allgemeine Lösung: $y = C_1 y_1 + C_2 y_2$.

**Probe:** Beispiel $y\'\' - 5y\' + 6y = 0$: $\\lambda^2 - 5\\lambda + 6 = (\\lambda-2)(\\lambda-3)$ → $\\lambda_1 = 2, \\lambda_2 = 3$. Lösung $y = C_1 e^{2x} + C_2 e^{3x}$ ✓.

**Typischer Fehler:** Bei zwei verschiedenen Wurzeln Doppelwurzel-Form $(C_1 + C_2 x)e^{\\lambda x}$ ansetzen — das gilt nur, wenn $\\lambda_1 = \\lambda_2$.`,
        [
          'Wie sieht eine Lösung der DGL bei reellen, verschiedenen Wurzeln aus?',
          'Linear unabhängig: $e^{\\lambda_1 x}$ und $e^{\\lambda_2 x}$.',
          'Allgemeine Lösung = Linearkombination beider.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['fall-d-pos'] },
      ),
      mc(
        'Bestimme die allgemeine Lösung von $y\'\' - 5y\' + 6y = 0$.',
        [
          '$y = C_1\\,e^{2x} + C_2\\,e^{3x}$',
          '$y = C_1\\,e^{-2x} + C_2\\,e^{-3x}$',
          '$y = (C_1 + C_2 x)\\,e^{5x/2}$',
          '$y = e^{2{,}5x}(C_1\\cos(0{,}5 x) + C_2\\sin(0{,}5 x))$',
        ],
        0,
        `**Ansatz:** Char. Gleichung lösen, Diskriminante prüfen, passende Form anwenden.

**Rechnung:** $\\lambda^2 - 5\\lambda + 6 = 0$ → $D = 25 - 24 = 1 > 0$ → zwei verschiedene reelle Wurzeln. $(\\lambda-2)(\\lambda-3) = 0 \\Rightarrow \\lambda_1 = 2, \\lambda_2 = 3$. Lösung: $y = C_1 e^{2x} + C_2 e^{3x}$.

**Probe:** Vieta: $\\lambda_1 + \\lambda_2 = 5$ ✓, $\\lambda_1 \\cdot \\lambda_2 = 6$ ✓. Test mit $y = e^{2x}$: $y\'\'-5y\'+6y = 4 - 10 + 6 = 0$ ✓.

**Typischer Fehler:** Vorzeichen­fehler bei den Wurzeln (Vieta: Summe = $-(-5)/1 = +5$, also beide Wurzeln $> 0$, nicht $<0$). Oder Doppelwurzel-Form ansetzen, obwohl $D > 0$.`,
        [
          'Diskriminante: $D = 25 - 24 = 1 > 0$.',
          'Wurzeln: $\\lambda_{1,2} = (5 \\pm 1)/2$.',
          'Form für $D > 0$: $C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$.',
        ],
        {
          1: 'Vorzeichen falsch: Vieta sagt $\\lambda_1 + \\lambda_2 = +5$ (Koeffizient von $\\lambda$ mit umgekehrten Vorzeichen). Wenn beide Wurzeln negativ wären, wäre die Summe negativ.',
          2: 'Doppelwurzel-Form passt nur bei $D = 0$. Hier ist $D = 1 \\neq 0$, also zwei verschiedene Wurzeln.',
          3: 'Komplexe Form für $D < 0$. Hier ist $D = 1 > 0$, also reelle Wurzeln, kein Schwingungs­verhalten.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['fall-d-pos'] },
      ),
      ni(
        'Bei der DGL $y\'\' - 7y\' + 12y = 0$ hat die char. Gleichung zwei reelle Wurzeln. Wie groß ist das Produkt $\\lambda_1 \\cdot \\lambda_2$?',
        12, 0.05, '',
        `**Ansatz:** Vieta-Satz: für $\\lambda^2 + p\\lambda + q = 0$ ist $\\lambda_1 + \\lambda_2 = -p$ und $\\lambda_1 \\cdot \\lambda_2 = q$. Direkt aus den Koeffizienten ablesen.

**Rechnung:** $\\lambda^2 - 7\\lambda + 12 = 0$ → $p = -7$, $q = 12$ → Produkt $= q = 12$. Faktorisieren: $(\\lambda - 3)(\\lambda - 4) = 0 \\Rightarrow \\lambda_1 = 3, \\lambda_2 = 4$. Probe: $3\\cdot 4 = 12$ ✓.

**Probe:** Summe: $\\lambda_1 + \\lambda_2 = 3 + 4 = 7 = -p$ ✓. Beide Vieta-Beziehungen erfüllt.

**Typischer Fehler:** $\\lambda_1$ und $\\lambda_2$ einzeln berechnen wollen und dann multiplizieren — funktioniert auch, ist aber Umweg. Vieta liefert das Produkt direkt aus dem konstanten Term.`,
        [
          'Vieta: für $\\lambda^2 + p\\lambda + q = 0$ ist $\\lambda_1\\cdot\\lambda_2 = q$.',
          'Konstanter Term der char. Gleichung ist $12$.',
          'Optional verifizieren: $(\\lambda-3)(\\lambda-4) = \\lambda^2 - 7\\lambda + 12$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['fall-d-pos', 'char-gleichung'] },
      ),
      mc(
        'Ein Lerner gibt für $y\'\' + 5y\' + 6y = 0$ die Lösung $y = C_1 e^{2x} + C_2 e^{3x}$ an. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — die Wurzeln $2$ und $3$ erfüllen $\\lambda^2 + 5\\lambda + 6 = 0$.',
          'Vorzeichen­fehler: $\\lambda^2 + 5\\lambda + 6 = (\\lambda + 2)(\\lambda + 3) = 0 \\Rightarrow \\lambda = -2, -3$. Korrekt: $y = C_1 e^{-2x} + C_2 e^{-3x}$.',
          'Falsch: bei DGL 2. Ordnung gibt es immer drei Wurzeln.',
          'Falsch: $C_1, C_2$ müssen beide gleich sein.',
        ],
        1,
        `**Ansatz:** Vieta-Probe: für $\\lambda^2 + p\\lambda + q = 0$ ist $\\lambda_1 + \\lambda_2 = -p$ (Summe = *negativer* Koeffizient von $\\lambda$).

**Rechnung:** Hier $p = +5$, $q = +6$. Summe der Wurzeln $= -5$, Produkt $= +6$. Beide Wurzeln müssen also negativ sein und das Produkt positiv. → $\\lambda = -2, -3$ (denn $-2 + -3 = -5$ ✓, $(-2)\\cdot(-3) = 6$ ✓).

**Probe:** Test mit $y = e^{-2x}$: $y\'\' = 4e^{-2x}$, $y\' = -2e^{-2x}$. $y\'\' + 5y\' + 6y = 4 - 10 + 6 = 0$ ✓. Lerner-Form $y = e^{2x}$: $y\'\' + 5y\' + 6y = 4 + 10 + 6 = 20 \\neq 0$ — DGL nicht erfüllt.

**Typischer Fehler:** Bei $(\\lambda - a)(\\lambda - b) = \\lambda^2 - (a+b)\\lambda + ab$ vergessen, dass das mittlere Vorzeichen *negativ* die Summe ist. Bei $+5\\lambda$ ist $-(a+b) = +5$, also $a+b = -5$, also Wurzeln negativ.`,
        [
          'Vieta: bei $\\lambda^2 + p\\lambda + q$ ist Summe $= -p$, Produkt $= q$.',
          'Vorzeichen vor $5\\lambda$ ist $+$ → Summe der Wurzeln $= -5$.',
          'Probe: einsetzen der Lerner-Lösung in die DGL.',
        ],
        {
          0: 'Lerner-Lösung scheitert bei der Probe: $y = e^{2x}$ gibt $4 + 10 + 6 = 20$, nicht $0$. Vorzeichen verwechselt.',
          2: 'DGL 2. Ordnung hat immer *zwei* Wurzeln (mit Vielfachheit), nie drei. Drei wäre Ordnung 3.',
          3: '$C_1$ und $C_2$ sind beliebig wählbar (durch AB), keine Gleichheits­bedingung. Sie sind die zwei freien Parameter der Lösungs­schar.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['fall-d-pos'] },
      ),
      matching(
        'Ordne jeder DGL ihr Wurzelpaar $(\\lambda_1, \\lambda_2)$ zu (alle haben $D > 0$).',
        [
          { left: '$y\'\' - 5y\' + 6y = 0$', right: '$\\lambda_1 = 2, \\lambda_2 = 3$' },
          { left: '$y\'\' + 3y\' + 2y = 0$', right: '$\\lambda_1 = -1, \\lambda_2 = -2$' },
          { left: '$y\'\' - y\' - 6y = 0$', right: '$\\lambda_1 = 3, \\lambda_2 = -2$' },
          { left: '$y\'\' - 9y = 0$', right: '$\\lambda_1 = 3, \\lambda_2 = -3$' },
        ],
        `**Ansatz:** Jede char. Gleichung über pq-Formel oder Vieta lösen — Vorzeichen sorgfältig.

**Rechnung:**
- $\\lambda^2 - 5\\lambda + 6 = (\\lambda-2)(\\lambda-3)$ → $\\lambda = 2, 3$.
- $\\lambda^2 + 3\\lambda + 2 = (\\lambda+1)(\\lambda+2)$ → $\\lambda = -1, -2$.
- $\\lambda^2 - \\lambda - 6 = (\\lambda-3)(\\lambda+2)$ → $\\lambda = 3, -2$.
- $\\lambda^2 - 9 = (\\lambda-3)(\\lambda+3)$ → $\\lambda = 3, -3$.

**Probe:** Vieta für jedes Paar: Summe und Produkt mit den Koeffizienten der jeweiligen char. Gleichung vergleichen.

**Typischer Fehler:** Bei (3) und (4) gleichgesetzte Wurzel­paare verwechseln — beide enthalten ein $\\lambda = 3$, aber unterschiedliche Partner ($-2$ vs. $-3$). Vieta-Probe entscheidet: Produkt $-6$ vs. $-9$.`,
        [
          'Pro DGL char. Gleichung aufstellen.',
          'Faktorisieren oder pq-Formel.',
          'Vorzeichen­bilanz prüfen: Summe und Produkt der Wurzeln.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['fall-d-pos'] },
      ),
    ],

    // ── [2] D = 0 (Doppelwurzel) ────────────────────────────────────────
    2: [
      tf(
        'Bei einer Doppelwurzel $\\lambda$ der char. Gleichung lautet die allgemeine Lösung $y(x) = (C_1 + C_2 x)\\,e^{\\lambda x}$.',
        true,
        `**Ansatz:** Bei Doppelwurzel liefert $e^{\\lambda x}$ allein nur *eine* Lösung. Die zweite linear unabhängige Lösung ist $x\\,e^{\\lambda x}$ — der Vorfaktor $x$ ist nötig.

**Rechnung:** Mit $\\lambda$ doppelt: erste Lösung $y_1 = e^{\\lambda x}$, zweite Lösung $y_2 = x\\,e^{\\lambda x}$. Allgemeine Lösung: $y = C_1\\,e^{\\lambda x} + C_2\\,x\\,e^{\\lambda x} = (C_1 + C_2 x)\\,e^{\\lambda x}$.

**Probe:** Beispiel $y\'\' - 4y\' + 4y = 0$: $\\lambda = 2$ doppelt. Test mit $y_2 = x\\,e^{2x}$: $y_2\' = e^{2x} + 2x\\,e^{2x}$, $y_2\'\' = 4e^{2x} + 4x\\,e^{2x}$. Einsetzen: $4e^{2x} + 4x e^{2x} - 4(e^{2x} + 2x e^{2x}) + 4x e^{2x} = 4e^{2x}(1 + x - 1 - 2x + x) = 0$ ✓.

**Typischer Fehler:** Bei Doppelwurzel den $x$-Vorfaktor vergessen — dann hat man nur *eine* Lösung statt zwei und kann keine zweite AB erfüllen.`,
        [
          'Wie viele linear unabhängige Lösungen braucht eine DGL 2. Ordnung?',
          'Bei Doppelwurzel: $e^{\\lambda x}$ und $x\\,e^{\\lambda x}$.',
          'Allgemein: $(C_1 + C_2 x)\\,e^{\\lambda x}$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['fall-d-null'] },
      ),
      mc(
        'Welche der folgenden DGL hat eine *Doppelwurzel* in ihrer char. Gleichung?',
        [
          '$y\'\' - 4y\' + 4y = 0$',
          '$y\'\' - 5y\' + 6y = 0$',
          '$y\'\' + y = 0$',
          '$y\'\' - 4y = 0$',
        ],
        0,
        `**Ansatz:** Diskriminante prüfen: $D = b^2 - 4ac = 0$ → Doppelwurzel.

**Rechnung:**
- $\\lambda^2 - 4\\lambda + 4$: $D = 16 - 16 = 0$ → **Doppelwurzel** $\\lambda = 2$ ✓.
- $\\lambda^2 - 5\\lambda + 6$: $D = 25 - 24 = 1 > 0$ → zwei reelle Wurzeln (2 und 3).
- $\\lambda^2 + 1$: $D = -4 < 0$ → komplexe Wurzeln $\\pm i$.
- $\\lambda^2 - 4$: $D = 16 > 0$ → zwei reelle Wurzeln $\\pm 2$.

**Probe:** Faktorisieren: $\\lambda^2 - 4\\lambda + 4 = (\\lambda - 2)^2$ — Doppelwurzel $\\lambda = 2$ klar erkennbar.

**Typischer Fehler:** $D = 0$ mit $D < 0$ verwechseln — bei $D < 0$ entsteht Schwingung, bei $D = 0$ der „Grenzfall" mit linearem Vorfaktor $x$.`,
        [
          'Diskriminante $D = b^2 - 4ac$ pro DGL berechnen.',
          'Doppelwurzel ⇔ $D = 0$.',
          'Faktorisierungs-Test: $(\\lambda - r)^2 = \\lambda^2 - 2r\\lambda + r^2$.',
        ],
        {
          1: '$D = 25 - 24 = 1 \\neq 0$ → zwei verschiedene reelle Wurzeln, keine Doppelwurzel.',
          2: '$D = 0 - 4 = -4 < 0$ → komplexe Wurzeln (Schwingung), keine Doppelwurzel.',
          3: '$D = 0 - 4\\cdot 1\\cdot(-4) = +16 > 0$ → zwei reelle Wurzeln $\\pm 2$, keine Doppelwurzel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['fall-d-null'] },
      ),
      ni(
        'Welche Doppelwurzel hat die char. Gleichung von $y\'\' - 6y\' + 9y = 0$?',
        3, 0.05, '',
        `**Ansatz:** Char. Gleichung aufstellen, $D = 0$ verifizieren, dann Wurzel über $\\lambda = -b/(2a)$ ablesen.

**Rechnung:** $\\lambda^2 - 6\\lambda + 9 = 0$. $D = 36 - 36 = 0$ → Doppelwurzel. $\\lambda = -(-6)/(2\\cdot 1) = 3$. Faktorisierung: $(\\lambda - 3)^2 = \\lambda^2 - 6\\lambda + 9$ ✓.

**Probe:** Allgemeine Lösung: $y = (C_1 + C_2 x)\\,e^{3x}$. Test mit $y_2 = x\\,e^{3x}$: $y_2\' = e^{3x} + 3x e^{3x}$, $y_2\'\' = 6e^{3x} + 9x e^{3x}$. Einsetzen: $6e^{3x} + 9x e^{3x} - 6(e^{3x} + 3x e^{3x}) + 9x e^{3x} = e^{3x}(6 + 9x - 6 - 18x + 9x) = 0$ ✓.

**Typischer Fehler:** Wurzel als $-3$ ansetzen (Vorzeichen­fehler beim $-b/(2a)$) oder als $9$ direkt vom konstanten Term übernehmen ($9$ ist $\\lambda^2$, nicht $\\lambda$).`,
        [
          '$D = 36 - 36 = 0$ → Doppelwurzel.',
          'Doppelwurzel-Formel: $\\lambda = -b/(2a)$.',
          'Hier: $\\lambda = -(-6)/2 = 3$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['fall-d-null'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\'\' - 4y\' + 4y = 0$ die Lösung $y(x) = C\\,e^{2x}$. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — bei Doppelwurzel reicht eine e-Funktion mit einer Konstante.',
          'Bei Doppelwurzel braucht man eine *zweite* linear unabhängige Lösung. Korrekt: $y = (C_1 + C_2 x)\\,e^{2x}$ — der Faktor $x$ liefert die fehlende Lösung.',
          'Die Lösung müsste $y = C\\,e^{4x}$ heißen.',
          'DGL 2. Ordnung haben nur dann eine eindeutige Lösung, wenn alle Konstanten gleich sind.',
        ],
        1,
        `**Ansatz:** Eine DGL 2. Ordnung verlangt zwei freie Konstanten (zwei Anfangs­bedingungen). Eine einzelne $e$-Funktion liefert nur einen Parameter — die zweite linear unabhängige Lösung muss ergänzt werden.

**Rechnung:** Char. Gleichung $\\lambda^2 - 4\\lambda + 4 = (\\lambda - 2)^2$ → $\\lambda = 2$ doppelt. Erste Lösung: $y_1 = e^{2x}$. Zweite linear unabhängige Lösung: $y_2 = x\\,e^{2x}$ (Reduktion der Ordnung oder allgemeine Theorie). Allgemein: $y = (C_1 + C_2 x)\\,e^{2x}$.

**Probe:** Mit $y_2 = x\\,e^{2x}$: $y_2\' = e^{2x} + 2x e^{2x}$, $y_2\'\' = 4e^{2x} + 4x e^{2x}$. Einsetzen: $4e^{2x} + 4x e^{2x} - 4(e^{2x} + 2x e^{2x}) + 4x e^{2x} = e^{2x}(4 + 4x - 4 - 8x + 4x) = 0$ ✓.

**Typischer Fehler:** Beim Auswendiglernen nur den Standardfall ($D > 0$, zwei e-Funktionen) im Kopf haben und bei Doppelwurzel automatisch $C\\,e^{\\lambda x}$ ansetzen — der $x$-Faktor wird übersehen.`,
        [
          'Eine DGL 2. Ordnung braucht *zwei* Lösungs­konstanten — wo ist die zweite?',
          'Bei Doppelwurzel reicht $e^{\\lambda x}$ allein nicht.',
          'Faktor $x$ liefert die zweite linear unabhängige Lösung.',
        ],
        {
          0: 'Eine DGL 2. Ordnung benötigt *zwei* freie Konstanten — eine reicht nicht, sonst ließe sich kein AWP mit zwei Anfangs­bedingungen lösen.',
          2: 'Doppelwurzel ist $\\lambda = 2$ (aus $-b/(2a) = 4/2 = 2$), nicht $\\lambda = 4$. Konstanter Term $4$ ist $\\lambda^2$, nicht $\\lambda$.',
          3: 'Es gibt keine „alle Konstanten gleich"-Bedingung. $C_1$ und $C_2$ sind unabhängige Parameter, durch zwei AB festzulegen.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['fall-d-null'] },
      ),
      mc(
        'Ein Auto stößt gegen einen Stoßdämpfer; die Bewegung folgt der DGL $\\ddot x + 2\\dot x + x = 0$. Welche Lösungsform passt — und wie heißt das Verhalten?',
        [
          '$x(t) = (C_1 + C_2 t)\\,e^{-t}$ — *kritisch gedämpfte* Bewegung (Doppelwurzel $\\lambda = -1$).',
          '$x(t) = C_1\\,e^{-t} + C_2\\,e^{-2t}$ — gewöhnliche Dämpfung (zwei reelle Wurzeln).',
          '$x(t) = e^{-t}(C_1 \\cos t + C_2 \\sin t)$ — schwach gedämpfte Schwingung.',
          '$x(t) = C_1\\,e^{t} + C_2\\,t\\,e^{t}$ — instabil (positive Wurzel).',
        ],
        0,
        `**Ansatz:** Char. Gleichung lösen, Diskriminante prüfen, Lösungsform und physikalisches Verhalten daraus ableiten.

**Rechnung:** $\\lambda^2 + 2\\lambda + 1 = 0$. $D = 4 - 4 = 0$ → Doppelwurzel. $\\lambda = -2/2 = -1$. Lösungsform: $x(t) = (C_1 + C_2 t)\\,e^{-t}$.

**Probe:** Verhalten: für $t \\to \\infty$ geht $e^{-t} \\to 0$ schneller als $t$ wächst → $x(t) \\to 0$ ohne Über­schwinger. Das ist *kritische Dämpfung* — der Grenzfall zwischen schwacher Dämpfung (Schwingung) und Über­dämpfung (zwei reelle Wurzeln, langsamere Rückkehr).

**Typischer Fehler:** Bei $D = 0$ direkt zur komplexen Form springen ($e^{-t}\\cos t$ — falsch, das ist $D < 0$) oder Vorzeichen verwechseln (positive Wurzel, instabil — falsch, $\\lambda = -1 < 0$).`,
        [
          'Diskriminante prüfen: $4 - 4 = 0$ → Doppelwurzel.',
          'Doppelwurzel-Lösung: $(C_1 + C_2 t)\\,e^{\\lambda t}$.',
          'Verhalten bei $\\lambda < 0$ und Doppelwurzel: kritisch gedämpft.',
        ],
        {
          1: '$D = 0$, also Doppelwurzel — *zwei verschiedene* Wurzeln gibt es hier nicht. Form $C_1 e^{\\lambda_1 t} + C_2 e^{\\lambda_2 t}$ passt nur bei $D > 0$.',
          2: 'Schwingungs­lösung erfordert $D < 0$ (komplexe Wurzeln). Hier $D = 0$ — Grenzfall ohne Schwingung.',
          3: '$\\lambda = -1$, also negative Wurzel → abklingende, nicht aufklingende Bewegung. Außerdem: die Form $e^t + t\\,e^t$ wäre für $\\lambda = +1$.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['fall-d-null'] },
      ),
    ],

    // ── [3] D < 0 (komplexe Wurzeln, Schwingung) ────────────────────────
    3: [
      tf(
        'Komplexe Wurzeln $\\lambda = \\alpha \\pm i\\beta$ der char. Gleichung führen auf die reelle Lösung $y(x) = e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x))$ — eine Schwingung mit Dämpfung $e^{\\alpha x}$.',
        true,
        `**Ansatz:** Komplexe Wurzeln treten als konjugierte Paare auf. Über Eulerformel werden $e^{(\\alpha\\pm i\\beta)x}$ in reelle $\\cos$/$\\sin$-Linearkombinationen umgeschrieben.

**Rechnung:** $e^{\\lambda x} = e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos(\\beta x) \\pm i\\sin(\\beta x))$. Reelle Linearkombination: $y = e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x))$. Realteil $\\alpha$ → exponentielle Dämpfung, Imaginärteil $\\beta$ → Kreisfrequenz.

**Probe:** Beispiel $y\'\' + 4y = 0$: $\\lambda = \\pm 2i$, $\\alpha = 0$, $\\beta = 2$. Lösung $y = C_1\\cos 2x + C_2\\sin 2x$ — ungedämpfte Schwingung mit Frequenz 2.

**Typischer Fehler:** $\\alpha$ und $\\beta$ in der Lösungs­form vertauschen — der *Real*teil $\\alpha$ gehört in den Vorfaktor $e^{\\alpha x}$, der *Imaginär*teil $\\beta$ in $\\cos$ und $\\sin$.`,
        [
          'Eulerformel: $e^{i\\beta x} = \\cos(\\beta x) + i\\sin(\\beta x)$.',
          'Realteil $\\alpha$ → Dämpfung im e-Faktor.',
          'Imaginärteil $\\beta$ → Frequenz in $\\cos/\\sin$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['fall-d-neg'] },
      ),
      mc(
        'Bestimme die allgemeine Lösung von $y\'\' + 9y = 0$.',
        [
          '$y = C_1 \\cos(3x) + C_2 \\sin(3x)$',
          '$y = C_1 \\cos(9x) + C_2 \\sin(9x)$',
          '$y = e^{3x}(C_1\\cos x + C_2\\sin x)$',
          '$y = C_1 e^{3x} + C_2 e^{-3x}$',
        ],
        0,
        `**Ansatz:** Char. Gleichung aufstellen, Wurzeln klassifizieren, korrekte Lösungsform.

**Rechnung:** $\\lambda^2 + 9 = 0$ → $\\lambda^2 = -9$ → $\\lambda = \\pm 3i$. Also $\\alpha = 0$, $\\beta = 3$. Lösung: $y = e^{0}(C_1\\cos(3x) + C_2\\sin(3x)) = C_1\\cos(3x) + C_2\\sin(3x)$.

**Probe:** $y\'\' = -9C_1\\cos(3x) - 9C_2\\sin(3x) = -9y$ → $y\'\' + 9y = 0$ ✓. Ungedämpfte Schwingung mit Frequenz $\\beta = 3$ (Periode $T = 2\\pi/3$).

**Typischer Fehler:** $\\beta = 9$ statt $\\beta = \\sqrt{9} = 3$ ansetzen — die Frequenz ist die Wurzel des konstanten Terms, nicht der Term selbst. Oder reelle Form ($e^{\\pm 3x}$) ansetzen, weil das Vorzeichen in $\\lambda^2 = -9$ vergessen wurde.`,
        [
          'Wurzel: $\\lambda^2 = -9 \\Rightarrow \\lambda = \\pm 3i$.',
          'Imaginärteil $\\beta = 3$ → Frequenz im $\\cos/\\sin$.',
          'Realteil $\\alpha = 0$ → kein Dämpfungs­faktor.',
        ],
        {
          1: '$\\beta = \\sqrt{9} = 3$, nicht $9$. Die Frequenz ist die Wurzel des konstanten Terms.',
          2: 'Hier wurde $\\alpha = 3$ angenommen — falsch. Aus $\\lambda^2 + 9 = 0$ folgt $\\alpha = 0$ (kein linearer Term in $\\lambda$). Wäre $\\alpha \\neq 0$, müsste die char. Gleichung einen $\\lambda$-Term haben.',
          3: 'Reelle Form gilt bei $D > 0$. Hier $D = -36 < 0$ → komplex, also $\\cos/\\sin$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['fall-d-neg'] },
      ),
      ni(
        'Die DGL $y\'\' + 2y\' + 5y = 0$ hat komplexe Wurzeln $\\alpha \\pm i\\beta$. Wie groß ist $\\beta$?',
        2, 0.05, '',
        `**Ansatz:** Char. Gleichung aufstellen, Diskriminante berechnen, $\\alpha$ und $\\beta$ über $\\lambda = -b/(2a) \\pm i\\sqrt{|D|}/(2a)$ bestimmen.

**Rechnung:** $\\lambda^2 + 2\\lambda + 5 = 0$. $D = 4 - 20 = -16 < 0$ → komplex. $\\lambda = (-2 \\pm \\sqrt{-16})/2 = (-2 \\pm 4i)/2 = -1 \\pm 2i$. Also $\\alpha = -1$, $\\beta = 2$.

**Probe:** Lösung $y = e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$. Test mit $y_1 = e^{-x}\\cos 2x$: $y_1\' = -e^{-x}\\cos 2x - 2e^{-x}\\sin 2x$, $y_1\'\' = e^{-x}\\cos 2x + 2e^{-x}\\sin 2x + 2e^{-x}\\sin 2x - 4e^{-x}\\cos 2x = -3e^{-x}\\cos 2x + 4e^{-x}\\sin 2x$. Einsetzen: $y_1\'\' + 2y_1\' + 5y_1 = e^{-x}[(-3 + 4\\sin/\\cos) + 2(-1 - 2\\sin/\\cos) + 5]\\cos 2x$ → $(-3 - 2 + 5)\\cos 2x + (4 - 4)\\sin 2x = 0$ ✓.

**Typischer Fehler:** $\\beta = \\sqrt{|D|} = 4$ statt $\\beta = \\sqrt{|D|}/(2a) = 4/2 = 2$. Der Faktor $1/(2a)$ aus der pq-Formel wird oft vergessen.`,
        [
          '$D = b^2 - 4ac = 4 - 20 = -16$.',
          '$\\lambda = -b/(2a) \\pm i\\,\\sqrt{|D|}/(2a)$.',
          '$\\beta = \\sqrt{16}/2 = 2$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['fall-d-neg'] },
      ),
      mc(
        'Ein Lerner gibt für $y\'\' + 4y\' + 13y = 0$ die Lösung $y = e^{2x}(C_1\\cos(3x) + C_2\\sin(3x))$ an. Welcher Hinweis ist korrekt?',
        [
          'Korrekt — die Wurzeln sind $2 \\pm 3i$.',
          'Vorzeichen­fehler bei $\\alpha$: $\\lambda = (-4 \\pm \\sqrt{16-52})/2 = -2 \\pm 3i$. Also $\\alpha = -2$ (negativ), nicht $+2$. Korrekt: $y = e^{-2x}(C_1\\cos(3x) + C_2\\sin(3x))$.',
          'Falsch: bei DGL 2. Ordnung gibt es keine komplexen Wurzeln.',
          'Falsch: $\\beta$ muss positiv und kleiner als $\\alpha$ sein.',
        ],
        1,
        `**Ansatz:** $\\alpha = -b/(2a)$ — Vorzeichen wird vom $b$-Term übernommen. Bei positivem $b$ (also $+4y\'$) ist $\\alpha$ negativ.

**Rechnung:** $\\lambda^2 + 4\\lambda + 13 = 0$. $D = 16 - 52 = -36$. $\\lambda = (-4 \\pm 6i)/2 = -2 \\pm 3i$. Also $\\alpha = -2$, $\\beta = 3$. Lösung $y = e^{-2x}(C_1\\cos 3x + C_2\\sin 3x)$ — gedämpfte Schwingung.

**Probe:** Test der Lerner-Form $y = e^{2x}\\cos 3x$: $y\' = 2e^{2x}\\cos 3x - 3e^{2x}\\sin 3x$, $y\'\' = 4e^{2x}\\cos 3x - 6e^{2x}\\sin 3x - 6e^{2x}\\sin 3x - 9e^{2x}\\cos 3x = -5e^{2x}\\cos 3x - 12e^{2x}\\sin 3x$. $y\'\' + 4y\' + 13y = e^{2x}[(-5 + 8 + 13)\\cos 3x + (-12 - 12)\\sin 3x] = e^{2x}(16\\cos 3x - 24\\sin 3x) \\neq 0$ — DGL nicht erfüllt.

**Typischer Fehler:** Vorzeichen von $\\alpha$ aus dem $-b/(2a)$-Term verwechseln. Wenn $b > 0$ in $\\lambda^2 + b\\lambda + c$, ist $\\alpha = -b/2 < 0$ (Dämpfung). Wenn $b < 0$, ist $\\alpha > 0$ (instabil).`,
        [
          '$\\alpha = -b/(2a)$ — Vorzeichen aus $b$ ablesen.',
          'In $y\'\' + 4y\' + 13y$: $b = +4$ → $\\alpha = -2$.',
          'Probe: einsetzen der Lerner-Form in die DGL.',
        ],
        {
          0: 'Lerner-Form scheitert in der Probe ($16\\cos 3x - 24\\sin 3x \\neq 0$). Vorzeichen von $\\alpha$ falsch.',
          2: 'Doch — wenn $D < 0$, sind die Wurzeln zwingend komplex. Das ist der dritte Fall der Klassifikation.',
          3: 'Es gibt keine Größen­ordnungs­bedingung zwischen $\\alpha$ und $\\beta$. Beide hängen unabhängig vom $b$- und $D$-Anteil ab.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['fall-d-neg'] },
      ),
      ni(
        'Löse das AWP $y\'\' + 9y = 0$, $y(0) = 2$, $y\'(0) = 3$ und berechne $y(\\pi/6)$ (auf 2 Dezimal­stellen).',
        1, 0.05, '',
        `**Ansatz:** Allgemeine Lösung über char. Gleichung, $C_1$ und $C_2$ aus den beiden AB bestimmen, an Zielstelle auswerten.

**Rechnung:** $\\lambda^2 + 9 = 0 \\Rightarrow \\lambda = \\pm 3i$ → $y = C_1\\cos 3x + C_2\\sin 3x$. AB: $y(0) = C_1 = 2$. $y\'(x) = -3C_1\\sin 3x + 3C_2\\cos 3x$, $y\'(0) = 3C_2 = 3 \\Rightarrow C_2 = 1$. Damit $y(x) = 2\\cos 3x + \\sin 3x$. Bei $x = \\pi/6$: $3x = \\pi/2$, $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$. $y(\\pi/6) = 2\\cdot 0 + 1 = 1$.

**Probe:** $y(0) = 2\\cdot 1 + 0 = 2$ ✓. $y\'(0) = -3\\cdot 2\\cdot 0 + 3\\cdot 1\\cdot 1 = 3$ ✓. Lösung erfüllt beide AB.

**Typischer Fehler:** Den Vorfaktor $3$ in der Ableitung vergessen ($y\'(0) = C_2$ statt $3C_2$). Oder bei der Auswertung $\\sin/\\cos$ vertauschen.`,
        [
          'Allgemein: $y = C_1\\cos 3x + C_2\\sin 3x$.',
          'AB: $y(0) = C_1 = 2$; $y\'(0) = 3C_2 = 3 \\Rightarrow C_2 = 1$.',
          'Bei $3x = \\pi/2$: $\\cos = 0$, $\\sin = 1$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['fall-d-neg'] },
      ),
    ],

    // ── [4] Dämpfung: α<0/0/>0 ──────────────────────────────────────────
    4: [
      tf(
        'Bei der DGL $y\'\' + 2y\' + 10y = 0$ ist der Real­teil der komplexen Wurzeln $\\alpha = -1 < 0$ — die Schwingung klingt also ab (gedämpfte Schwingung).',
        true,
        `**Ansatz:** Realteil aus $\\lambda = -b/(2a) \\pm i\\beta$ ablesen, Vorzeichen für Verhalten interpretieren.

**Rechnung:** $\\lambda^2 + 2\\lambda + 10 = 0$. $D = 4 - 40 = -36 < 0$. $\\lambda = -1 \\pm 3i$. $\\alpha = -1$, $\\beta = 3$. $\\alpha < 0$ → exponentielles Abklingen.

**Probe:** Lösung $y = e^{-x}(C_1\\cos 3x + C_2\\sin 3x)$. Für $x \\to \\infty$: $e^{-x} \\to 0$, also Amplitude geht gegen $0$ — gedämpfte Schwingung.

**Typischer Fehler:** $\\alpha$ als positiv interpretieren, weil $b = +2$ in der DGL steht — tatsächlich ist $\\alpha = -b/(2a)$, also negativ bei positivem $b$.`,
        [
          '$\\alpha = -b/(2a)$ aus den Koeffizienten der DGL.',
          '$b = 2 > 0 \\Rightarrow \\alpha = -1 < 0$.',
          '$\\alpha < 0$ → Amplitude $e^{\\alpha x} \\to 0$ → abklingend.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['daempfung'] },
      ),
      mc(
        'Welche der folgenden DGL beschreibt eine *ungedämpfte* Schwingung?',
        [
          '$y\'\' + y = 0$',
          '$y\'\' + 2y\' + y = 0$',
          '$y\'\' - 2y\' + 5y = 0$',
          '$y\'\' + 4y\' + 5y = 0$',
        ],
        0,
        `**Ansatz:** „Ungedämpft" bedeutet $\\alpha = 0$, also kein $y\'$-Term in der DGL (oder ein $y\'$-Term mit Koeffizient $0$).

**Rechnung:**
- $y\'\' + y = 0$: $\\lambda^2 + 1 = 0 \\Rightarrow \\lambda = \\pm i$, $\\alpha = 0$, $\\beta = 1$ → **ungedämpft** ✓.
- $y\'\' + 2y\' + y = 0$: $D = 4-4 = 0$, Doppelwurzel — keine Schwingung, sondern kritisch gedämpft.
- $y\'\' - 2y\' + 5y = 0$: $\\lambda = 1 \\pm 2i$, $\\alpha = +1 > 0$ — *aufklingende* Schwingung (instabil).
- $y\'\' + 4y\' + 5y = 0$: $\\lambda = -2 \\pm i$, $\\alpha = -2 < 0$ — gedämpfte Schwingung.

**Probe:** Lösung von $y\'\' + y = 0$: $y = C_1\\cos x + C_2\\sin x$ — Amplitude konstant für alle $x$, kein Abklingen.

**Typischer Fehler:** „Doppelwurzel" mit „ungedämpft" verwechseln — Doppelwurzel ist der *Grenzfall* zwischen gedämpfter Schwingung und reiner Exponential­abnahme, kein Schwingungs­fall.`,
        [
          'Ungedämpft ⇔ $\\alpha = 0$ ⇔ kein $y\'$-Term.',
          'Test: ist die DGL der Form $y\'\' + c\\,y = 0$ mit $c > 0$?',
          'Klassifikation der anderen Optionen über char. Gleichung.',
        ],
        {
          1: '$D = 0$ → Doppelwurzel → kritisch gedämpft, *keine* Schwingung. Es bleibt nur exponentielle Abnahme mit linearem Vorfaktor.',
          2: '$\\alpha = +1 > 0$ → die „Schwingung" wächst — eine *instabile* Schwingung, keine ungedämpfte.',
          3: '$\\alpha = -2 < 0$ → gedämpft (Amplitude klingt ab), nicht ungedämpft.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['daempfung'] },
      ),
      mc(
        'Welches Verhalten zeigt die Lösung von $y\'\' + 4y\' + 5y = 0$?',
        [
          'Gedämpfte Schwingung mit $\\alpha = -2$, $\\beta = 1$ — die Amplitude klingt mit $e^{-2x}$ ab.',
          'Ungedämpfte Schwingung mit Frequenz $\\beta = 5$.',
          'Aufklingende Schwingung — Amplitude wächst exponentiell.',
          'Kritische Dämpfung ohne Schwingung.',
        ],
        0,
        `**Ansatz:** Char. Gleichung lösen, $\\alpha$ und $\\beta$ identifizieren, Vorzeichen von $\\alpha$ bestimmen.

**Rechnung:** $\\lambda^2 + 4\\lambda + 5 = 0$. $D = 16 - 20 = -4 < 0$. $\\lambda = (-4 \\pm 2i)/2 = -2 \\pm i$. $\\alpha = -2$, $\\beta = 1$. Lösung: $y = e^{-2x}(C_1\\cos x + C_2\\sin x)$ — gedämpfte Schwingung.

**Probe:** Verhalten: bei $x \\to \\infty$ geht $e^{-2x}\\cos x \\to 0$ — Amplitude klingt mit Faktor $e^{-2}$ pro Zeiteinheit ab.

**Typischer Fehler:** $\\beta$ aus dem konstanten Term direkt ablesen ($\\beta = 5$ statt $\\beta = \\sqrt{|D|}/(2a) = 1$). Oder Vorzeichen von $\\alpha$ verwechseln.`,
        [
          '$D = 16 - 20 = -4 < 0$ → komplexe Wurzeln, also Schwingung.',
          '$\\alpha = -b/(2a) = -2$.',
          '$\\beta = \\sqrt{|D|}/(2a) = 2/2 = 1$.',
        ],
        {
          1: 'Ungedämpft hieße $\\alpha = 0$ — hier ist $\\alpha = -2$. Außerdem: $\\beta = 1$, nicht $5$ (der konstante Term ist nicht direkt $\\beta$).',
          2: 'Aufklingend wäre $\\alpha > 0$ — hier ist $\\alpha = -2 < 0$, also Dämpfung.',
          3: 'Kritische Dämpfung wäre $D = 0$. Hier $D = -4 < 0$ → komplexe Wurzeln, also Schwingungs­fall.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['daempfung'] },
      ),
      mc(
        'Ein Lerner sagt: „Eine DGL $y\'\' + 2y\' + 2y = 0$ ist instabil, weil der Koeffizient $+2$ vor $y\'$ steht." Welcher Hinweis ist korrekt?',
        [
          'Stimmt — positiver Vorfaktor vor $y\'$ heißt instabil.',
          'Falsch: $\\alpha = -b/(2a)$, also bei $b = +2$ ist $\\alpha = -1 < 0$ — die Schwingung ist *abklingend*, nicht instabil. Ein positiver Vorfaktor vor $y\'$ wirkt als Dämpfung.',
          'Falsch — die Stabilität hängt nur vom konstanten Term $c$ ab.',
          'Falsch — DGL 2. Ordnung sind immer instabil.',
        ],
        1,
        `**Ansatz:** Stabilitätskriterium über das Vorzeichen von $\\alpha$, nicht über die Vorzeichen der DGL-Koeffizienten direkt.

**Rechnung:** $\\lambda^2 + 2\\lambda + 2 = 0$. $D = 4 - 8 = -4 < 0$. $\\lambda = -1 \\pm i$. $\\alpha = -1 < 0$ → gedämpft, *stabil*.

**Probe:** Lösung $y = e^{-x}(C_1\\cos x + C_2\\sin x) \\to 0$ für $x \\to \\infty$ — Amplitude klingt ab. Würde der $y\'$-Term mit *negativem* Vorfaktor stehen ($y\'\' - 2y\' + 2y$), wäre $\\alpha = +1 > 0$ → instabil.

**Typischer Fehler:** Positiven Koeffizienten vor $y\'$ als „antreibend" lesen — physikalisch wirkt er aber wie eine Reibungs­kraft (proportional zur Geschwindigkeit, der Bewegung entgegen­gesetzt). Das Minus­zeichen in $\\alpha = -b/(2a)$ kehrt das Vorzeichen um.`,
        [
          'Was sagt das Vorzeichen von $\\alpha$?',
          '$\\alpha = -b/(2a)$ — Vorzeichen­wechsel beim Übergang DGL → $\\alpha$.',
          '$b = +2$, $a = +1$ → $\\alpha = -1 < 0$ → stabil (gedämpft).',
        ],
        {
          0: 'Genau das ist der Trugschluss — physikalisch wirkt $y\'$ mit positivem Vorfaktor als Reibung. Die Vorzeichen­umkehr in $\\alpha = -b/(2a)$ macht es zu einer Dämpfung.',
          2: 'Stabilität hängt vom *Realteil* der Wurzeln ab — $\\alpha$ folgt aus $b$ (über $-b/(2a)$), nicht direkt aus $c$. Der konstante Term $c$ steuert primär die Frequenz und ob überhaupt Schwingung auftritt.',
          3: 'Ist falsch — viele DGL 2. Ordnung sind stabil. Klassisch: gedämpfte Pendel, RLC-Kreise mit Widerstand. Stabilität hängt ab von den Wurzeln, nicht von der Ordnung.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['daempfung'] },
      ),
      matching(
        'Ordne jeder DGL ihr Schwingungs­verhalten zu (alle haben komplexe oder Doppel­wurzeln).',
        [
          { left: '$y\'\' + 9y = 0$', right: 'Ungedämpfte Schwingung ($\\alpha = 0$, $\\beta = 3$)' },
          { left: '$y\'\' + 2y\' + 10y = 0$', right: 'Abklingende Schwingung ($\\alpha = -1$, $\\beta = 3$)' },
          { left: '$y\'\' - 2y\' + 5y = 0$', right: 'Aufklingende Schwingung ($\\alpha = +1$, $\\beta = 2$)' },
          { left: '$y\'\' + 4y\' + 4y = 0$', right: 'Kritisch gedämpft (Doppelwurzel $\\lambda = -2$)' },
        ],
        `**Ansatz:** Pro DGL char. Gleichung lösen, Diskriminante prüfen, $\\alpha$ und $\\beta$ ablesen, Verhalten klassifizieren.

**Rechnung:**
- $\\lambda^2 + 9 = 0 \\Rightarrow \\pm 3i$ → $\\alpha = 0$, $\\beta = 3$, ungedämpft.
- $\\lambda^2 + 2\\lambda + 10 = 0 \\Rightarrow -1 \\pm 3i$ → abklingend.
- $\\lambda^2 - 2\\lambda + 5 = 0 \\Rightarrow 1 \\pm 2i$ → aufklingend ($\\alpha > 0$).
- $\\lambda^2 + 4\\lambda + 4 = (\\lambda + 2)^2 \\Rightarrow$ Doppelwurzel $\\lambda = -2$ → kritisch gedämpft.

**Probe:** Vorzeichen von $\\alpha$: Term $+y\'$ → $\\alpha < 0$ (Dämpfung); Term $-y\'$ → $\\alpha > 0$ (Anfachung); kein $y\'$-Term → $\\alpha = 0$ (ungedämpft).

**Typischer Fehler:** Aufklingend mit Doppelwurzel verwechseln — beide haben kein „Schwingungs"-Charakter im engen Sinne, aber aufklingend ist Schwingung mit wachsender Amplitude, Doppelwurzel hat keine Schwingung.`,
        [
          'Pro DGL: Diskriminante, Wurzeln, Vorzeichen von $\\alpha$.',
          '$\\alpha = 0$ → ungedämpft; $\\alpha < 0$ → abklingend; $\\alpha > 0$ → aufklingend.',
          '$D = 0$ → kritische Dämpfung (kein Schwingungs­charakter).',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['daempfung', 'fall-d-neg'] },
      ),
    ],

    // ── [5] Feder-Masse-System ──────────────────────────────────────────
    5: [
      tf(
        'Für eine ungedämpfte Feder mit Masse $m = 2\\,\\mathrm{kg}$ und Federsteifigkeit $k = 8\\,\\mathrm{N/m}$ ist die Eigenkreisfrequenz $\\omega_0 = 2\\,\\mathrm{rad/s}$.',
        true,
        `**Ansatz:** Eigenkreisfrequenz nach Newton: $m\\ddot x + k x = 0$ → $\\ddot x + (k/m) x = 0$ → char. Gleichung $\\lambda^2 + k/m = 0$ → $\\omega_0 = \\sqrt{k/m}$.

**Rechnung:** $\\omega_0 = \\sqrt{k/m} = \\sqrt{8/2} = \\sqrt{4} = 2\\,\\mathrm{rad/s}$.

**Probe:** Einheits­check: $[k/m] = \\mathrm{(N/m)/kg} = \\mathrm{(kg\\,m/s^2)/(m\\,kg)} = 1/\\mathrm{s^2}$ → $\\sqrt{1/\\mathrm{s^2}} = 1/\\mathrm{s} = \\mathrm{rad/s}$ ✓.

**Typischer Fehler:** Quadrat­wurzel vergessen ($\\omega_0 = k/m = 4$ statt $\\omega_0 = 2$). Oder $k$ und $m$ vertauschen.`,
        [
          'Eigenkreisfrequenz: $\\omega_0 = \\sqrt{k/m}$.',
          '$k = 8$, $m = 2$ → $k/m = 4$.',
          '$\\sqrt{4} = 2$.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['feder-masse'] },
      ),
      mc(
        'Eine Feder hat $m = 4\\,\\mathrm{kg}$, $k = 16\\,\\mathrm{N/m}$, keine Dämpfung. Welche Eigenkreisfrequenz $\\omega_0$ resultiert?',
        [
          '$\\omega_0 = 2\\,\\mathrm{rad/s}$',
          '$\\omega_0 = 4\\,\\mathrm{rad/s}$',
          '$\\omega_0 = 64\\,\\mathrm{rad/s}$',
          '$\\omega_0 = 0{,}25\\,\\mathrm{rad/s}$',
        ],
        0,
        `**Ansatz:** Standardformel $\\omega_0 = \\sqrt{k/m}$ anwenden.

**Rechnung:** $\\omega_0 = \\sqrt{16/4} = \\sqrt{4} = 2\\,\\mathrm{rad/s}$.

**Probe:** DGL $4\\ddot x + 16 x = 0$ → $\\ddot x + 4 x = 0$ → $\\lambda^2 + 4 = 0$ → $\\lambda = \\pm 2i$. Lösung $x(t) = C_1\\cos(2t) + C_2\\sin(2t)$ — Frequenz $2$, also $\\omega_0 = 2$.

**Typischer Fehler:** Wurzel vergessen ($\\omega_0 = k/m = 4$). Oder $k\\cdot m$ statt $k/m$ rechnen ($\\omega_0 = \\sqrt{16\\cdot 4} = 8$, falsch).`,
        [
          '$\\omega_0 = \\sqrt{k/m}$.',
          '$k/m = 16/4 = 4$.',
          'Wurzel: $\\sqrt{4} = 2$.',
        ],
        {
          1: 'Wurzel vergessen: $k/m = 4$, aber $\\omega_0 = \\sqrt{4} = 2$, nicht $4$.',
          2: 'Hier wurde $k\\cdot m$ statt $k/m$ gerechnet ($16\\cdot 4 = 64$). Formel: $\\omega_0 = \\sqrt{k/m}$ — Quotient, nicht Produkt.',
          3: '$m/k$ statt $k/m$ — Reziproke verwechselt. $\\omega_0 = \\sqrt{4/16} = 0{,}5$ wäre, oder $\\sqrt{1/16}\\approx 0{,}25$, beides falsch.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['feder-masse'] },
      ),
      ni(
        'Eine ungedämpfte Feder­masse hat $m = 1\\,\\mathrm{kg}$ und $k = 4\\,\\mathrm{N/m}$. Wie groß ist die Schwingungsperiode $T$ (auf 2 Dezimal­stellen, in s)?',
        3.14, 0.05, 's',
        `**Ansatz:** Eigenkreisfrequenz $\\omega_0$ berechnen, dann $T = 2\\pi/\\omega_0$.

**Rechnung:** $\\omega_0 = \\sqrt{k/m} = \\sqrt{4/1} = 2\\,\\mathrm{rad/s}$. $T = 2\\pi/\\omega_0 = 2\\pi/2 = \\pi \\approx 3{,}14\\,\\mathrm{s}$.

**Probe:** DGL $\\ddot x + 4 x = 0$, Lösung $x(t) = A\\cos(2t + \\varphi)$. Periode: $\\cos$ wiederholt sich nach $2\\pi/\\omega_0 = \\pi$ → die Schwingung dauert $\\pi$ Sekunden für eine volle Schwingung.

**Typischer Fehler:** $T = \\omega_0 = 2\\,\\mathrm{s}$ ansetzen — verwechselt Frequenz und Periode. Oder $T = 1/\\omega_0 = 0{,}5\\,\\mathrm{s}$ (das wäre $1/$Kreisfrequenz, nicht $T$).`,
        [
          '$\\omega_0 = \\sqrt{k/m} = 2\\,\\mathrm{rad/s}$.',
          'Periode: $T = 2\\pi/\\omega_0$.',
          '$T = \\pi \\approx 3{,}14\\,\\mathrm{s}$.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['feder-masse'] },
      ),
      mc(
        'Ein Lerner setzt für eine Feder mit $m = 0{,}5\\,\\mathrm{kg}$, $k = 2\\,\\mathrm{N/m}$ die Eigenkreisfrequenz als $\\omega_0 = k/m = 4\\,\\mathrm{rad/s}$ an. Welcher Hinweis ist korrekt?',
        [
          'Stimmt — $\\omega_0 = k/m = 4\\,\\mathrm{rad/s}$.',
          'Wurzel vergessen: $\\omega_0 = \\sqrt{k/m} = \\sqrt{4} = 2\\,\\mathrm{rad/s}$. Einheits­check: $\\sqrt{(N/m)/kg} = 1/s$ — die Wurzel ist nötig, sonst stimmt die Einheit nicht.',
          'Falsch — $\\omega_0$ hängt nur von $m$ ab.',
          'Falsch — Eigenfrequenz ist immer $1\\,\\mathrm{rad/s}$.',
        ],
        1,
        `**Ansatz:** Ergebnis dimensions­geprüft: $[k/m] = \\mathrm{N/(m\\cdot kg)} = 1/\\mathrm{s^2}$. Daher *muss* eine Wurzel gezogen werden, um auf Einheit Sekunde$^{-1}$ zu kommen.

**Rechnung:** $\\omega_0 = \\sqrt{k/m} = \\sqrt{2/0{,}5} = \\sqrt{4} = 2\\,\\mathrm{rad/s}$. Die Lerner-Variante $\\omega_0 = 4$ hat Einheit $1/\\mathrm{s^2}$, nicht $\\mathrm{rad/s}$.

**Probe:** DGL: $0{,}5\\,\\ddot x + 2 x = 0$ → $\\ddot x + 4 x = 0$ → $\\lambda^2 + 4 = 0$ → $\\lambda = \\pm 2i$. Frequenz $\\beta = 2$, also $\\omega_0 = 2$, nicht $4$.

**Typischer Fehler:** Die Formel $k/m$ direkt mit $\\omega_0$ identifizieren, ohne die Wurzel. Tatsächlich ist $k/m = \\omega_0^2$, also $\\omega_0 = \\sqrt{k/m}$.`,
        [
          'Formel: $\\omega_0 = \\sqrt{k/m}$, nicht $k/m$.',
          'Einheits­check: $\\sqrt{[k/m]} = 1/\\mathrm{s} = \\mathrm{rad/s}$.',
          'Für die DGL: $\\omega_0$ ist die Wurzel des konstanten Terms.',
        ],
        {
          0: 'Genau das ist der Fehler — die Wurzel fehlt. Einheits­check: $k/m$ hat Einheit $1/\\mathrm{s^2}$, nicht $1/\\mathrm{s}$.',
          2: '$\\omega_0$ hängt vom *Quotienten* $k/m$ ab — beide Größen wirken zusammen. Doppelte $m$ → halbe $\\omega_0^2$, doppelte $k$ → doppelte $\\omega_0^2$.',
          3: 'Eigenfrequenz hängt von Bauteil­werten ab und ist im Allgemeinen nicht $1\\,\\mathrm{rad/s}$. Beispiel: Pendel mit $l=1\\,\\mathrm{m}$ → $\\omega_0 = \\sqrt{g/l} \\approx 3{,}13\\,\\mathrm{rad/s}$.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['feder-masse'] },
      ),
      ni(
        'Eine Feder mit $m = 1\\,\\mathrm{kg}$, $d = 2\\,\\mathrm{Ns/m}$, $k = 10\\,\\mathrm{N/m}$ schwingt gedämpft gemäß $m\\ddot x + d\\dot x + kx = 0$. Welche Kreisfrequenz $\\omega_d$ hat die gedämpfte Schwingung (in rad/s)?',
        3, 0.05, 'rad/s',
        `**Ansatz:** Char. Gleichung lösen, $\\beta$ identifizieren — $\\beta = \\omega_d$ ist die Frequenz der gedämpften Schwingung.

**Rechnung:** $\\ddot x + 2\\dot x + 10 x = 0$ (durch $m=1$ teilen). $\\lambda^2 + 2\\lambda + 10 = 0$. $D = 4 - 40 = -36$. $\\lambda = (-2 \\pm 6i)/2 = -1 \\pm 3i$. Also $\\alpha = -1$ (Dämpfungs­rate), $\\beta = \\omega_d = 3\\,\\mathrm{rad/s}$.

**Probe:** $\\omega_d^2 = \\omega_0^2 - \\alpha^2$ (Allgemein­formel der gedämpften Schwingung). Hier $\\omega_0 = \\sqrt{k/m} = \\sqrt{10}$, $\\alpha = d/(2m) = 1$, also $\\omega_d^2 = 10 - 1 = 9$ → $\\omega_d = 3$ ✓.

**Typischer Fehler:** $\\omega_d = \\omega_0 = \\sqrt{10} \\approx 3{,}16$ statt $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2} = 3$. Bei schwacher Dämpfung sind beide nah beieinander, aber nicht identisch.`,
        [
          'Char. Gleichung: $\\lambda^2 + 2\\lambda + 10 = 0$.',
          'Wurzeln: $\\lambda = -1 \\pm 3i$.',
          '$\\omega_d = \\beta = 3\\,\\mathrm{rad/s}$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['feder-masse'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // dgl-2-1 — Variation der Konstanten  (5 subGoals)
  // Je ≥ 5 Aufgaben = mind. 25 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-2-1': {

    // ── [0] Ansatz: C → C(x) im VdK-Verfahren ──────────────────────────
    0: [
      tf(
        'Beim Verfahren *Variation der Konstanten* wird die Konstante $C$ in der homogenen Lösung $y_h = C\\,e^{-P(x)}$ durch eine unbekannte Funktion $C(x)$ ersetzt.',
        true,
        `**Ansatz:** Der Name sagt es: die Konstante $C$ *variiert* — sie wird zur $x$-abhängigen Funktion $C(x)$.

**Rechnung:** Aus $y_h = C\\,e^{-P(x)}$ wird $y = C(x)\\,e^{-P(x)}$. Einsetzen in die inhomogene DGL liefert eine Bestimmungs­gleichung für $C(x)$.

**Probe:** Mit konstantem $C$ erfüllt $y$ nur die homogene Gleichung ($y\' + p y = 0$). Erst $C(x)$ kann die rechte Seite $q(x) \\neq 0$ ausgleichen.

**Typischer Fehler:** „Variation der Konstanten" als bloße Umbenennung $C \\to D$ missverstehen — gemeint ist die Aufhebung der Konstanten­natur.`,
        [
          'Was bedeutet „variieren"?',
          'Aus konstantem $C$ wird die Funktion $C(x)$.',
          'Die $e^{-P(x)}$-Struktur der homogenen Lösung bleibt erhalten.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['vdk-ansatz'] },
      ),
      mc(
        'Für die DGL $y\' + 2y = q(x)$ ist die homogene Lösung $y_h = C\\,e^{-2x}$. Wie lautet der VdK-Ansatz für die inhomogene DGL?',
        [
          '$y = C(x)\\,e^{-2x}$',
          '$y = C(x)\\,e^{+2x}$',
          '$y = C\\,e^{-2x} + D(x)$',
          '$y = e^{-2x}$',
        ],
        0,
        `**Ansatz:** Den $e$-Faktor der homogenen Lösung beibehalten und nur die Konstante $C$ zur Funktion $C(x)$ machen.

**Rechnung:** Homogene Lösung $y_h = C\\,e^{-2x}$ → VdK-Ansatz $y = C(x)\\,e^{-2x}$. Die Exponential­struktur bleibt unverändert; nur die Konstante variiert.

**Probe:** $y\' = C\'\\,e^{-2x} - 2C\\,e^{-2x}$. Einsetzen in $y\' + 2y$: $C\'\\,e^{-2x} - 2C\\,e^{-2x} + 2C\\,e^{-2x} = C\'\\,e^{-2x} \\stackrel{!}{=} q(x)$ → $C\'(x) = q(x)\\,e^{2x}$. Die $C$-Terme heben sich heraus — das ist genau der Zweck.

**Typischer Fehler:** Den $e$-Faktor weglassen oder das Vorzeichen umkehren — dann kürzen sich die $C$-Terme nicht heraus und die Methode bricht zusammen.`,
        [
          'Welche Struktur hat die homogene Lösung?',
          'Welcher Teil wird zur Funktion gemacht?',
          'Der $e^{-2x}$-Faktor bleibt unverändert.',
        ],
        {
          1: 'Vorzeichen im Exponenten umgekehrt. Die homogene Lösung von $y\'+2y=0$ ist $e^{-2x}$ (negativer Exponent), nicht $e^{+2x}$. Die VdK übernimmt den Exponenten 1:1.',
          2: 'Hier wurde additiv ein $D(x)$ angehängt — das ist nicht die Idee. VdK ersetzt $C$ multiplikativ durch $C(x)$, addiert nichts.',
          3: 'Hier fehlt die zu bestimmende Funktion $C(x)$ — der Ansatz wäre dann gar nicht $x$-abhängig genug, um die Störung auszugleichen.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['vdk-ansatz'] },
      ),
      mc(
        'Für die DGL $y\' + x\\,y = q(x)$ ist $P(x) = \\int x\\,dx = x^2/2$. Wie lautet der VdK-Ansatz?',
        [
          '$y = C(x)\\,e^{-x^2/2}$',
          '$y = C(x)\\,e^{-x}$',
          '$y = C(x)\\,e^{+x^2/2}$',
          '$y = C(x)\\,x$',
        ],
        0,
        `**Ansatz:** Erst homogene Lösung über Trennung der Variablen oder integrierenden Faktor bestimmen, dann $C$ zur Funktion $C(x)$ machen.

**Rechnung:** $y\' + x y = 0 \\Rightarrow dy/y = -x\\,dx \\Rightarrow \\ln|y| = -x^2/2 + C_1 \\Rightarrow y_h = C\\,e^{-x^2/2}$. VdK-Ansatz: $y = C(x)\\,e^{-x^2/2}$.

**Probe:** $P(x) = \\int p\\,dx = \\int x\\,dx = x^2/2$, also $y_h = C\\,e^{-P(x)} = C\\,e^{-x^2/2}$ ✓.

**Typischer Fehler:** $P(x)$ als $x$ statt $x^2/2$ ansetzen (Stamm­funktion von $x$ ist $x^2/2$, nicht $x$). Oder Vorzeichen im Exponenten umkehren.`,
        [
          'Erst $P(x) = \\int p(x)\\,dx$ berechnen.',
          '$\\int x\\,dx = x^2/2 + \\text{const}$.',
          'Vorzeichen im Exponenten: $-P(x)$, also $-x^2/2$.',
        ],
        {
          1: '$P(x) = \\int x\\,dx = x^2/2$, nicht $x$. Die Stamm­funktion von $x$ ist $x^2/2$, also kommt ein quadratischer Term in den Exponenten.',
          2: 'Vorzeichen falsch. $y_h = C\\,e^{-P(x)}$ — der Exponent ist negativ.',
          3: 'Kein $e$-Faktor — die homogene Lösung einer linearen DGL 1. Ordnung ist immer von der Form $e^{-P(x)}$, nie eine reine Potenz $x$.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['vdk-ansatz'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\' + p(x)\\,y = q(x)$ den VdK-Ansatz als $y = C(x)$ (ohne $e^{-P(x)}$-Faktor). Welcher Hinweis ist korrekt?',
        [
          'Stimmt — der $e$-Faktor ist nur Schmuck.',
          'Falsch: der VdK-Ansatz multipliziert die *homogene Lösung* mit der variablen Funktion. Mit $y = C(x)\\,e^{-P(x)}$ heben sich die $C\\,p\\,e^{-P}$-Terme heraus — das macht die Methode überhaupt erst lösbar.',
          'Stimmt, weil $y = C(x)$ allgemein genug ist.',
          'Falsch: der Ansatz sollte $y = C(x) / e^{-P(x)}$ heißen.',
        ],
        1,
        `**Ansatz:** VdK lebt davon, dass beim Einsetzen die $C$-Terme heraus­fallen und nur $C\'(x)$ stehen bleibt. Das geht *nur* mit dem $e^{-P(x)}$-Faktor.

**Rechnung:** Mit $y = C(x)\\,e^{-P}$: $y\' = C\'\\,e^{-P} - C\\,p\\,e^{-P}$. Einsetzen: $C\'\\,e^{-P} - C\\,p\\,e^{-P} + p\\,C\\,e^{-P} = C\'\\,e^{-P}$ → $C\'(x) = q\\,e^{+P}$. Klare Differenzial­gleichung erster Ordnung für $C$, durch Integration lösbar. Mit $y = C(x)$: $y\' = C\'(x)$ → $C\' + p\\,C = q$ — derselbe DGL-Typ wie vorher, keine Vereinfachung.

**Probe:** Mit $e^{-P}$-Faktor reduziert sich der Schritt 3 auf eine einfache Integration. Ohne diesen Faktor entsteht eine neue lineare DGL — der Vorteil verpufft.

**Typischer Fehler:** Die Methode als „mach die Konstante zur Funktion" auswendig lernen und den e-Faktor übersehen. Tatsächlich ist *die ganze homogene Lösung* (inkl. $e$-Faktor) der Ausgangs­punkt.`,
        [
          'Warum entsteht überhaupt eine einfache Bestimmungs­gleichung für $C(x)$?',
          'Welche Terme heben sich beim Einsetzen heraus?',
          'Ohne $e^{-P}$-Faktor entsteht dieselbe DGL nochmal.',
        ],
        {
          0: 'Der $e$-Faktor ist *essenziell* — ohne ihn würde sich beim Einsetzen nichts vereinfachen, und die Methode hätte keinen Mehrwert gegenüber dem direkten Lösen.',
          2: 'Eine Funktion $C(x)$ allein ohne Rahmen $e^{-P}$ produziert beim Einsetzen wieder die ursprüngliche DGL — der ganze Trick der VdK entfällt.',
          3: '$y = C/e^{-P} = C\\,e^{+P}$ wäre die *Inverse* der homogenen Lösung — das ist nicht die VdK-Idee. Standard: multiplikativ mit $e^{-P}$, nicht dividiert.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['vdk-ansatz'] },
      ),
      sorting(
        'Bringe die Schritte des Variation-der-Konstanten-Verfahrens in die richtige Reihenfolge.',
        [
          'Homogene Lösung $y_h = C\\,e^{-P(x)}$ mit $P(x) = \\int p(x)\\,dx$ bestimmen.',
          'Konstante variieren: $C \\to C(x)$ — Ansatz $y = C(x)\\,e^{-P(x)}$.',
          'Ansatz in die DGL einsetzen — die $C(x)$-Terme heben sich heraus, übrig bleibt $C\'(x)\\,e^{-P(x)} = q(x)$.',
          'Nach $C\'(x)$ auflösen: $C\'(x) = q(x)\\,e^{P(x)}$ und integrieren: $C(x) = \\int q(x)\\,e^{P(x)}\\,dx + \\tilde C$.',
          '$C(x)$ in den Ansatz zurücksetzen: $y(x) = C(x)\\,e^{-P(x)}$.',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Die Schritte bauen aufeinander auf — vorherige Lösung wird in den nächsten Schritt eingespeist.

**Rechnung:** (1) ist Voraussetzung (homogene Lösung). (2) macht $C$ variabel. (3) ist der mechanische Einsetz-Schritt, der erst nach (1) und (2) möglich ist. (4) extrahiert $C\'$ und integriert — ohne (3) gibt es keinen Ausdruck für $C\'$. (5) setzt das fertige $C(x)$ zurück in den Ansatz aus (2).

**Probe:** Beispiel $y\' + y = e^x$. (1) $y_h = C\\,e^{-x}$. (2) $y = C(x)\\,e^{-x}$. (3) Einsetzen: $C\'\\,e^{-x} - C\\,e^{-x} + C\\,e^{-x} = C\'\\,e^{-x} = e^x$. (4) $C\'(x) = e^{2x}$ → $C(x) = e^{2x}/2 + \\tilde C$. (5) $y = (e^{2x}/2 + \\tilde C)\\,e^{-x} = e^x/2 + \\tilde C\\,e^{-x}$.

**Typischer Fehler:** Vor dem Einsetzen die Integration versuchen — ohne den expliziten Ausdruck für $C\'(x)$ ist nicht klar, was zu integrieren ist.`,
        [
          'Worauf basiert der VdK-Ansatz?',
          'Was muss zuerst da sein, bevor man variieren kann?',
          'Integration kommt nach dem Einsetzen — vorher kennt man $C\'(x)$ noch nicht.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['vdk-ansatz'] },
      ),
    ],

    // ── [1] Einsetzen liefert C'(x) = q(x) e^{P(x)} ─────────────────────
    1: [
      tf(
        'Nach Einsetzen des VdK-Ansatzes $y = C(x)\\,e^{-P(x)}$ in $y\' + p(x)\\,y = q(x)$ verbleibt die Bestimmungs­gleichung $C\'(x) = q(x)\\,e^{P(x)}$.',
        true,
        `**Ansatz:** Produktregel auf $y = C(x)\\,e^{-P}$ anwenden, in die DGL einsetzen, $C$-Terme verschwinden.

**Rechnung:** $y\' = C\'\\,e^{-P} - C\\,p\\,e^{-P}$. $y\' + p\\,y = C\'\\,e^{-P} - C\\,p\\,e^{-P} + p\\,C\\,e^{-P} = C\'\\,e^{-P} = q(x)$. Mit $e^{+P}$ multiplizieren: $C\'(x) = q(x)\\,e^{P(x)}$.

**Probe:** Wäre da noch ein $C(x)$-Term übrig, hätte man wieder eine vollständige DGL für $C$ — der Sinn der Methode wäre verfehlt. Das saubere Aufheben ist das Kennzeichen.

**Typischer Fehler:** Vorzeichen im Exponenten verwechseln — $e^{+P}$ statt $e^{-P}$ multiplizieren (oder umgekehrt).`,
        [
          'Wie sieht $y\'$ aus dem Ansatz aus?',
          'Welche Terme verschwinden beim Einsetzen?',
          'Übrig bleibt eine reine Gleichung in $C\'(x)$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['vdk-cprime'] },
      ),
      mc(
        'Für die DGL $y\' + y = x$ ergibt VdK die Bestimmungs­gleichung für $C\'(x)$. Was ist $C\'(x)$?',
        [
          '$C\'(x) = x\\,e^{x}$',
          '$C\'(x) = x\\,e^{-x}$',
          '$C\'(x) = x$',
          '$C\'(x) = e^{x}$',
        ],
        0,
        `**Ansatz:** Formel $C\'(x) = q(x)\\,e^{P(x)}$ anwenden. $p$ und $q$ identifizieren, $P(x)$ berechnen, einsetzen.

**Rechnung:** Hier $p(x) = 1$, $q(x) = x$. $P(x) = \\int p\\,dx = x$. Damit $C\'(x) = q(x)\\,e^{P(x)} = x\\,e^{x}$.

**Probe:** Ansatz $y = C(x)\\,e^{-x}$. $y\' = C\'\\,e^{-x} - C\\,e^{-x}$. $y\' + y = C\'\\,e^{-x} = x$ → $C\'(x) = x\\,e^{x}$ ✓.

**Typischer Fehler:** Vorzeichen im Exponenten verwechseln ($e^{-P}$ statt $e^{+P}$), oder den Faktor $q(x)$ vergessen.`,
        [
          'Formel: $C\'(x) = q(x)\\,e^{P(x)}$.',
          'Hier $q(x) = x$, $p(x) = 1$, $P(x) = x$.',
          'Daraus folgt $C\'(x) = x\\,e^{x}$.',
        ],
        {
          1: 'Vorzeichen im Exponenten umgekehrt. Die Formel ist $C\' = q\\,e^{+P}$, nicht $e^{-P}$. Mit $e^{-P}$ würden sich die $C$-Terme nicht heraus­heben.',
          2: 'Der $e$-Faktor fehlt. Ohne ihn wäre $C\'$ einfach $q(x)$ — das wäre nur richtig, wenn $P(x) = 0$, also $p \\equiv 0$. Hier ist $p = 1 \\neq 0$.',
          3: 'Der Faktor $q(x) = x$ wurde übersehen. $C\'$ ist das *Produkt* von $q$ und $e^{P}$, nicht nur $e^{P}$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['vdk-cprime'] },
      ),
      ni(
        'Für die DGL $y\' + y = e^{x}$ ist $C\'(x) = q(x)\\,e^{P(x)}$. Wie groß ist $C\'(1)$ (auf 2 Dezimal­stellen)?',
        7.39, 0.05, '',
        `**Ansatz:** $C\'(x) = q(x)\\,e^{P(x)}$ aufstellen, dann an $x = 1$ auswerten.

**Rechnung:** $p(x) = 1$, $q(x) = e^x$, $P(x) = x$. $C\'(x) = e^x \\cdot e^x = e^{2x}$. $C\'(1) = e^{2} \\approx 7{,}389$.

**Probe:** Ansatz $y = C(x)\\,e^{-x}$. Einsetzen: $C\'\\,e^{-x} - C\\,e^{-x} + C\\,e^{-x} = C\'\\,e^{-x} = e^x$. Multiplikation mit $e^x$: $C\'(x) = e^{2x}$ ✓. An $x=1$: $e^2 = 7{,}3891$.

**Typischer Fehler:** Den Exponenten $x + x = 2x$ als $x^2$ rechnen (Quadrat statt Faktor 2). Oder das Produkt $e^x \\cdot e^x$ als $e^x$ stehen lassen.`,
        [
          '$p(x) = 1$, $q(x) = e^x$, $P(x) = x$.',
          '$C\'(x) = q\\,e^{P} = e^x \\cdot e^x = e^{2x}$.',
          '$C\'(1) = e^2 \\approx 7{,}39$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['vdk-cprime'] },
      ),
      mc(
        'Ein Lerner schreibt für $y\' + 2y = q(x)$: $C\'(x) = q(x)\\,e^{-2x}$. Welcher Hinweis ist korrekt?',
        [
          'Stimmt — der Exponent kommt aus der homogenen Lösung $e^{-2x}$.',
          'Vorzeichen­fehler im Exponenten: das Multiplizieren der gekürzten Gleichung $C\'\\,e^{-P} = q$ mit $e^{+P}$ liefert $C\'(x) = q(x)\\,e^{+P(x)} = q(x)\\,e^{+2x}$, nicht $e^{-2x}$.',
          'Falsch: $C\'$ ist immer $q(x)$ allein.',
          'Falsch: $C\'(x)$ braucht den Faktor $p(x)$, nicht $e^{P(x)}$.',
        ],
        1,
        `**Ansatz:** Den Aufhebungs­prozess gedanklich durchgehen: nach Einsetzen bleibt $C\'\\,e^{-P} = q$. Um $C\'$ allein zu isolieren, mit $e^{+P}$ multiplizieren — beide Seiten.

**Rechnung:** $p = 2$, $P = 2x$. Nach Einsetzen: $C\'(x)\\,e^{-2x} = q(x)$. Beide Seiten mit $e^{+2x}$ multiplizieren: $C\'(x) = q(x)\\,e^{+2x}$. Der positive Exponent ist der Kern der Methode.

**Probe:** Beispiel $q(x) = e^{2x}$ (Resonanz!): $C\'(x) = e^{2x}\\,e^{2x} = e^{4x}$ — sinnvoll. Mit Lerner-Variante: $C\'(x) = e^{2x}\\,e^{-2x} = 1$ — würde die Integration trivial machen, aber das ist nicht der richtige Wert.

**Typischer Fehler:** Den Exponenten der homogenen Lösung 1:1 in $C\'$ übernehmen. Tatsächlich entsteht $C\'$ aus dem *Aufheben* dieses Exponenten — das Vorzeichen kehrt sich um.`,
        [
          'Wie isoliert man $C\'(x)$ aus $C\'\\,e^{-P} = q$?',
          'Multiplikation mit $e^{+P}$ hebt $e^{-P}$ links auf.',
          'Folge: rechts steht $q \\cdot e^{+P}$, nicht $q \\cdot e^{-P}$.',
        ],
        {
          0: 'Der Exponent der homogenen Lösung ist $-P$, aber der Exponent in der Bestimmungs­gleichung für $C\'$ ist $+P$ — das *Aufheben* des $-P$-Faktors kehrt das Vorzeichen um.',
          2: '$C\' = q$ wäre nur richtig, wenn $p \\equiv 0$, also $P \\equiv 0$. Bei nicht-trivialem $p$ ist der $e^{P}$-Faktor essentiell.',
          3: 'Der Faktor $p(x)$ taucht *im Exponenten* auf, nicht direkt als Faktor. $P = \\int p\\,dx$ — die Stamm­funktion, nicht $p$ selbst, geht in $e^{P}$ ein.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['vdk-cprime'] },
      ),
      ni(
        'Für die DGL $y\' + 2y = e^{-2x}$ ist $C\'(x) = q(x)\\,e^{P(x)}$. Wie groß ist $C\'(2)$ (auf 2 Dezimal­stellen)?',
        1, 0.01, '',
        `**Ansatz:** Bei Resonanz (Störung = homogene Form) vereinfacht sich das Produkt $q\\,e^{P}$ zu einer Konstanten.

**Rechnung:** $p = 2$, $q = e^{-2x}$, $P = 2x$. $C\'(x) = e^{-2x} \\cdot e^{+2x} = e^{0} = 1$. Für alle $x$: $C\'(x) = 1$, also auch $C\'(2) = 1$.

**Probe:** Integration: $C(x) = x + \\tilde C$. Vollständig: $y = (x + \\tilde C)\\,e^{-2x} = x\\,e^{-2x} + \\tilde C\\,e^{-2x}$. Genau die Resonanz-Form $y_p = x\\,e^{-2x}$ ✓.

**Typischer Fehler:** Die Exponenten als $e^{-2x \\cdot 2x} = e^{-4x^2}$ multiplizieren (Potenzgesetz falsch). Korrekt: $e^a \\cdot e^b = e^{a+b}$, nicht $e^{a\\cdot b}$.`,
        [
          'Potenzgesetz: $e^a \\cdot e^b = e^{a+b}$.',
          'Hier $a = -2x$, $b = +2x$ → $a+b = 0$.',
          '$e^{0} = 1$ — konstant für alle $x$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['vdk-cprime'] },
      ),
    ],

    // ── [2] Allgemeine Lösung = y_h + y_p ───────────────────────────────
    2: [
      tf(
        'Die allgemeine Lösung einer inhomogenen linearen DGL ist die Summe aus homogener Lösung und einer beliebigen partikulären Lösung: $y = y_h + y_p$.',
        true,
        `**Ansatz:** Linearität: ist $y_p$ eine spezielle Lösung der inhomogenen DGL und $y_h$ die allgemeine Lösung der homogenen DGL, dann erfüllt $y_p + y_h$ wieder die inhomogene DGL.

**Rechnung:** $L[y_p + y_h] = L[y_p] + L[y_h] = q + 0 = q$. Die freie Konstante in $y_h$ liefert die einparametrige Lösungs­schar; die spezielle Lösung $y_p$ verschiebt diese Schar nur.

**Probe:** Beispiel $y\' - y = e^{2x}$. $y_h = C\\,e^x$, $y_p = e^{2x}$ (eine spezielle Lösung). $y = C\\,e^x + e^{2x}$. Test: $y\' - y = (C\\,e^x + 2e^{2x}) - (C\\,e^x + e^{2x}) = e^{2x}$ ✓.

**Typischer Fehler:** Nur $y_p$ angeben und $y_h$ vergessen — dann kann kein AWP mit beliebiger Anfangs­bedingung erfüllt werden.`,
        [
          'Was sagt der Superpositions­satz für lineare DGL?',
          '$L[y_h] = 0$ und $L[y_p] = q$ — summieren liefert $q$.',
          'Vollständige Lösungs­schar braucht *beide* Anteile.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['vdk-allg-loesung'] },
      ),
      mc(
        'Wie lautet die allgemeine Lösung der DGL $y\' - y = e^{2x}$?',
        [
          '$y = C\\,e^{x} + e^{2x}$',
          '$y = e^{2x}$',
          '$y = C\\,e^{x}$',
          '$y = C\\,e^{2x} + e^{x}$',
        ],
        0,
        `**Ansatz:** $y_h$ aus der homogenen DGL, $y_p$ über Standard­ansatz $A\\,e^{2x}$ — dann summieren.

**Rechnung:** Homogen $y\' - y = 0$ → $y_h = C\\,e^{x}$. Partikulär mit $y_p = A\\,e^{2x}$: $y_p\' - y_p = 2A\\,e^{2x} - A\\,e^{2x} = A\\,e^{2x} \\stackrel{!}{=} e^{2x}$ → $A = 1$, also $y_p = e^{2x}$. Allgemein: $y = C\\,e^x + e^{2x}$.

**Probe:** $y\' - y = (C\\,e^x + 2\\,e^{2x}) - (C\\,e^x + e^{2x}) = e^{2x}$ ✓.

**Typischer Fehler:** Nur $y_p$ angeben (Option B) und $y_h$ vergessen, oder die Rollen von $y_h$ und $y_p$ vertauschen (Option D — falscher Exponent in beiden Anteilen).`,
        [
          'Homogen: $y\' = y \\Rightarrow y_h = C\\,e^x$.',
          'Partikulär: Ansatz $A\\,e^{2x}$, in DGL einsetzen.',
          '$A\\,e^{2x} = e^{2x}$ → $A = 1$, dann summieren.',
        ],
        {
          1: 'Hier fehlt die homogene Lösung $C\\,e^x$ — ohne die einparametrige $C$-Schar ist kein AWP mit beliebiger Anfangs­bedingung erfüllbar.',
          2: 'Hier fehlt die partikuläre Lösung. Probe: $y = C\\,e^x$, $y\' - y = C\\,e^x - C\\,e^x = 0 \\neq e^{2x}$ — die rechte Seite wird nicht erreicht.',
          3: 'Die Rollen sind vertauscht. Die homogene Lösung hat Exponent $+1$ (aus $\\lambda - 1 = 0$), die partikuläre Lösung hat Exponent $+2$ (aus der Störung $e^{2x}$). Beide gehören an andere Stellen.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['vdk-allg-loesung'] },
      ),
      ni(
        'Löse das AWP $y\' - y = e^{2x}$, $y(0) = 3$ und berechne $y(1)$ (auf 2 Dezimal­stellen).',
        12.83, 0.05, '',
        `**Ansatz:** Allgemeine Lösung aufschreiben, $C$ aus AB bestimmen, an Zielstelle auswerten.

**Rechnung:** Allgemein: $y(x) = C\\,e^x + e^{2x}$. AB: $y(0) = C + 1 = 3 \\Rightarrow C = 2$. Damit $y(x) = 2\\,e^x + e^{2x}$, und $y(1) = 2e + e^2 \\approx 5{,}4366 + 7{,}3891 \\approx 12{,}826$.

**Probe:** $y\'(1) - y(1) = (2e + 2e^2) - (2e + e^2) = e^2 \\approx 7{,}389$. Die DGL verlangt $y\'-y = e^{2x}\\big|_{x=1} = e^2$ ✓.

**Typischer Fehler:** $C$ direkt gleich $y(0) = 3$ setzen — Achtung: $y_p(0) = e^0 = 1$ ist nicht null, also $C = y(0) - y_p(0) = 3 - 1 = 2$.`,
        [
          'Allgemein: $y = C\\,e^x + e^{2x}$.',
          'AB: $y(0) = C + 1 = 3 \\Rightarrow C = 2$.',
          '$y(1) = 2e + e^2 \\approx 12{,}83$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['vdk-allg-loesung'] },
      ),
      mc(
        'Ein Lerner gibt für $y\' + y = 2$ als „Lösung" $y = 2$ an. Welcher Hinweis ist korrekt?',
        [
          'Stimmt — die partikuläre Lösung allein reicht.',
          'Unvollständig: $y = 2$ ist eine *partikuläre* Lösung, aber die allgemeine Lösung verlangt auch den homogenen Anteil: $y = C\\,e^{-x} + 2$. Sonst kann keine AB außer $y(0) = 2$ erfüllt werden.',
          'Falsch: $y = 2$ erfüllt die DGL gar nicht.',
          'Falsch: die Lösung müsste $y = 2x$ heißen.',
        ],
        1,
        `**Ansatz:** Eine inhomogene lineare DGL 1. Ordnung hat eine einparametrige Lösungs­schar. Die spezielle Lösung allein ist nur *ein* Mitglied dieser Schar.

**Rechnung:** $y = 2$: $y\' + y = 0 + 2 = 2$ ✓ — die DGL ist erfüllt. Aber: AB-Erfüllung verlangt einen Freiheits­grad. $y \\equiv 2$ liefert $y(0) = 2$ und sonst nichts. Allgemein: $y = C\\,e^{-x} + 2$. Test: $y\' + y = -C\\,e^{-x} + C\\,e^{-x} + 2 = 2$ ✓.

**Probe:** Für $y(0) = 5$ würde der Lerner-Ansatz scheitern (er liefert nur $y(0) = 2$). Mit $C\\,e^{-x} + 2$: $y(0) = C + 2 = 5 \\Rightarrow C = 3$. ✓

**Typischer Fehler:** Eine spezielle Lösung als „die" Lösung interpretieren. Tatsächlich ist sie nur eine *von vielen* — der homogene Anteil unterscheidet sie alle.`,
        [
          'Welche Lösungs­schar gehört zur DGL 1. Ordnung?',
          'Wie viele Freiheits­grade braucht man, um eine AB zu erfüllen?',
          'Test: könnte die Lerner-Lösung jede AB $y(0) = y_0$ treffen?',
        ],
        {
          0: 'Die Partikulärlösung allein hat keinen Freiheits­grad — sie kann keine beliebige AB erfüllen. Nur die einparametrige Schar $y_h + y_p$ kann das.',
          2: 'Doch — $y \\equiv 2$ erfüllt $y\'+y=0+2=2$ ✓. Das Problem ist nicht die DGL-Erfüllung, sondern die fehlende $C$-Konstante.',
          3: '$y = 2x$ erfüllt die DGL nicht: $y\' + y = 2 + 2x$, das ist nicht konstant $= 2$ — passt nur bei $x = 0$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['vdk-allg-loesung'] },
      ),
      ni(
        'Löse das AWP $y\' + y = 2$, $y(0) = 5$ und berechne $y(2)$ (auf 2 Dezimal­stellen).',
        2.41, 0.05, '',
        `**Ansatz:** Allgemeine Lösung über Superposition: $y = y_h + y_p$. $C$ aus AB fixieren.

**Rechnung:** Homogen: $y\' + y = 0 \\Rightarrow y_h = C\\,e^{-x}$. Partikulär (konstante Störung): Ansatz $y_p = A$ konstant, $y_p\' + y_p = 0 + A = 2 \\Rightarrow A = 2$. Allgemein: $y = C\\,e^{-x} + 2$. AB: $y(0) = C + 2 = 5 \\Rightarrow C = 3$. Damit $y(x) = 3\\,e^{-x} + 2$, und $y(2) = 3\\,e^{-2} + 2 \\approx 3 \\cdot 0{,}1353 + 2 \\approx 2{,}406$.

**Probe:** $y\'(x) = -3\\,e^{-x}$. $y\' + y = -3\\,e^{-x} + 3\\,e^{-x} + 2 = 2$ ✓. AB: $y(0) = 3 + 2 = 5$ ✓.

**Typischer Fehler:** $C = y(0) = 5$ ohne Korrektur durch $y_p(0) = 2$. Tatsächlich gilt $y(0) = C + 2$, also $C = 3$.`,
        [
          '$y_h = C\\,e^{-x}$, $y_p = 2$.',
          'AB: $y(0) = C + 2 = 5 \\Rightarrow C = 3$.',
          '$y(2) = 3\\,e^{-2} + 2 \\approx 2{,}41$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['vdk-allg-loesung'] },
      ),
    ],

    // ── [3] Störansatz: Polynom/Exp/Trig direkte Vermutung ──────────────
    3: [
      tf(
        'Bei einer Stör­funktion $q(x) = e^{\\alpha x}$ (und $\\alpha$ keine Wurzel der charakteristischen Gleichung) ist der passende Stör­ansatz $y_p = A\\,e^{\\alpha x}$.',
        true,
        `**Ansatz:** Bei einfachen Stör­funktionen rät man die Form der partikulären Lösung — mit unbekannten Koeffizienten, die durch Einsetzen bestimmt werden.

**Rechnung:** Beispiel $y\' - y = e^{2x}$: Ansatz $y_p = A\\,e^{2x}$ (nicht-resonant, denn $2$ ist nicht Wurzel von $\\lambda - 1 = 0$). Einsetzen: $2A\\,e^{2x} - A\\,e^{2x} = A\\,e^{2x} = e^{2x}$ → $A = 1$.

**Probe:** Die Stör­ansatz-Tabelle ordnet jeder Stör­funktion eine passende Ansatz-Form zu: Polynom → Polynom, Exp → Exp, Trig → Trig-Kombination, Konstante → Konstante.

**Typischer Fehler:** Der „kein Resonanzfall"-Vorbehalt wird übersehen. Wenn $\\alpha$ Wurzel der char. Gleichung ist (also $e^{\\alpha x}$ schon homogene Lösung), muss der Ansatz mit $x$ multipliziert werden.`,
        [
          'Welche Form hat $q(x)$?',
          'Welcher Ansatz reproduziert nach Ableiten und Einsetzen dieselbe Form?',
          'Bei reinem Exponential: $A\\,e^{\\alpha x}$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['stoeransatz'] },
      ),
      mc(
        'Welcher Stör­ansatz passt zur DGL $y\' + y = x^2 + 1$?',
        [
          '$y_p = A x^2 + B x + C$',
          '$y_p = A x^2$',
          '$y_p = A$ (Konstante)',
          '$y_p = A\\,e^{x^2+1}$',
        ],
        0,
        `**Ansatz:** Bei Polynom-Störung vom Grad $n$ ist der Ansatz ein vollständiges Polynom vom Grad $n$ — alle Koeffizienten von $x^0$ bis $x^n$ sind unbekannte Parameter.

**Rechnung:** $q(x) = x^2 + 1$ ist Polynom vom Grad 2. Ansatz: $y_p = A x^2 + B x + C$. Einsetzen: $y_p\' + y_p = 2Ax + B + A x^2 + B x + C = A x^2 + (2A+B)x + (B+C) \\stackrel{!}{=} x^2 + 0\\cdot x + 1$. Koeffizienten­vergleich: $A = 1$, $2A+B = 0 \\Rightarrow B = -2$, $B+C = 1 \\Rightarrow C = 3$. Also $y_p = x^2 - 2x + 3$.

**Probe:** $y_p\' + y_p = (2x - 2) + (x^2 - 2x + 3) = x^2 + 1$ ✓.

**Typischer Fehler:** Nur die höchste Potenz im Ansatz ($A x^2$) — die Ableitung erzeugt niedrigere Potenzen, die im Ansatz schon vorhanden sein müssen. Konstanter Ansatz reicht erst recht nicht.`,
        [
          'Welcher Grad hat $q(x) = x^2 + 1$?',
          'Ansatz muss alle Koeffizienten von $x^0$ bis $x^n$ enthalten.',
          'Auch wenn die Stör­funktion lückenhaft ist (z. B. kein $x$-Term), bleibt der Ansatz vollständig.',
        ],
        {
          1: 'Unvollständiges Polynom: die Ableitung von $A x^2$ ist $2Ax$, das erzeugt einen $x$-Term. Ohne $B x$-Term im Ansatz lässt sich der Koeffizienten­vergleich nicht erfüllen.',
          2: 'Konstanter Ansatz $y_p = A$: $y_p\' + y_p = A = x^2 + 1$ — geht nur, wenn $x^2 + 1$ konstant wäre. Ist es nicht.',
          3: 'Wilde Mischform: $e^{x^2+1}$ ist keine sinnvolle Ansatz-Funktion für Polynom-Störung. Stör­ansätze richten sich nach der Form der Störung, nicht nach „irgendetwas Exponential".',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['stoeransatz'] },
      ),
      mc(
        'Welcher Stör­ansatz passt zur DGL $y\' - 2y = \\cos(3x)$?',
        [
          '$y_p = A\\cos(3x) + B\\sin(3x)$',
          '$y_p = A\\cos(3x)$',
          '$y_p = A\\sin(3x)$',
          '$y_p = A\\cos(3x) \\cdot B\\sin(3x)$',
        ],
        0,
        `**Ansatz:** Bei trigonometrischer Stör­funktion *immer* beide trigonometrischen Funktionen im Ansatz — Ableiten mischt sin und cos.

**Rechnung:** $y_p = A\\cos(3x) + B\\sin(3x)$. $y_p\' = -3A\\sin(3x) + 3B\\cos(3x)$. Einsetzen: $y_p\' - 2y_p = (-3A\\sin - 3A\\cdot 0)\\ldots$ — vorsichtig: $y_p\' - 2y_p = (-3A\\sin(3x) + 3B\\cos(3x)) - 2(A\\cos(3x) + B\\sin(3x)) = (3B - 2A)\\cos(3x) + (-3A - 2B)\\sin(3x) \\stackrel{!}{=} \\cos(3x) + 0\\sin(3x)$. Koeffizienten­vergleich: $3B - 2A = 1$, $-3A - 2B = 0$. Aus der zweiten Gleichung: $B = -3A/2$. Einsetzen: $3(-3A/2) - 2A = -9A/2 - 2A = -13A/2 = 1 \\Rightarrow A = -2/13$, $B = 3/13$. → $y_p = -\\tfrac{2}{13}\\cos(3x) + \\tfrac{3}{13}\\sin(3x)$.

**Probe:** Mit nur $A\\cos(3x)$ allein scheitert der Ansatz, weil die Ableitung einen $\\sin$-Term erzeugt, der nirgendwo angepasst werden kann.

**Typischer Fehler:** Nur eine der beiden Trig-Funktionen im Ansatz — Ableiten mischt sin↔cos, daher *beide* nötig.`,
        [
          'Was passiert beim Ableiten von $\\cos$?',
          '$\\cos \\to -\\sin$, $\\sin \\to +\\cos$ — beide Funktionen entstehen.',
          'Ansatz braucht *beide*, sonst Koeffizienten­vergleich unlösbar.',
        ],
        {
          1: 'Nur $\\cos(3x)$ im Ansatz — Ableiten erzeugt aber $-3A\\sin(3x)$. Ohne $B\\sin(3x)$-Term im Ansatz kann der Koeffizienten­vergleich nicht erfüllt werden.',
          2: 'Spiegelfehler: nur $\\sin(3x)$ im Ansatz hat dasselbe Problem — Ableiten erzeugt einen $\\cos$-Term ohne Gegenstück.',
          3: 'Das *Produkt* $\\cos \\cdot \\sin$ wäre weder Stör­funktion-Form noch sinnvolle Lösungs­vermutung. Die Stör­funktion ist additiv aus sin und cos zusammenzusetzen.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['stoeransatz'] },
      ),
      mc(
        'Ein Lerner setzt für $y\' + y = \\cos(2x)$ den Stör­ansatz $y_p = A\\cos(2x)$ (nur Cosinus). Welcher Hinweis ist korrekt?',
        [
          'Stimmt — Cosinus reicht, weil die Stör­funktion nur Cosinus enthält.',
          'Unvollständig: $y_p\' = -2A\\sin(2x)$ erzeugt einen $\\sin$-Term. Beim Koeffizienten­vergleich bleibt dieser sin-Term übrig und lässt sich nicht ausgleichen. Korrekt: $y_p = A\\cos(2x) + B\\sin(2x)$.',
          'Falsch: bei Cosinus-Störung muss der Ansatz immer $A x \\cos(2x)$ heißen.',
          'Falsch: trigonometrische DGL hat keine partikulären Lösungen.',
        ],
        1,
        `**Ansatz:** Beim Ableiten von $\\cos$ entsteht $-\\sin$, beim Ableiten von $\\sin$ entsteht $+\\cos$. Daher *beide* Trig-Funktionen im Ansatz nötig.

**Rechnung:** Lerner-Ansatz $y_p = A\\cos(2x)$: $y_p\' = -2A\\sin(2x)$. $y_p\' + y_p = -2A\\sin(2x) + A\\cos(2x) \\stackrel{!}{=} \\cos(2x)$. Koeffizienten­vergleich: $-2A = 0$ (sin) und $A = 1$ (cos). Widerspruch: $A$ kann nicht gleichzeitig $0$ und $1$ sein. → Ansatz unlösbar.

**Probe:** Korrekter Ansatz $y_p = A\\cos(2x) + B\\sin(2x)$: $y_p\' + y_p = (A + 2B)\\cos(2x) + (B - 2A)\\sin(2x) = \\cos(2x)$. → $A + 2B = 1$, $B - 2A = 0$ → $B = 2A$, $A + 4A = 1 \\Rightarrow A = 1/5$, $B = 2/5$.

**Typischer Fehler:** Den Ansatz an der *Form der Stör­funktion* festmachen, ohne zu berücksichtigen, dass die Ableitung neue Funktions­typen erzeugt.`,
        [
          'Was erzeugt die Ableitung des Cosinus?',
          'Wenn im Ansatz nur eine der beiden Trig-Funktionen steht — bleibt nach Einsetzen ein nicht-ausgleichbarer Term?',
          'Test: Koeffizienten­vergleich durchführen, Widerspruch zeigen.',
        ],
        {
          0: 'Genau das ist der Trugschluss — die *Stör­funktion* enthält nur Cosinus, aber die *Ableitung* der Ansatz-Funktion erzeugt Sinus. Daher muss auch Sinus im Ansatz stehen.',
          2: 'Das wäre der Resonanz-Fall — der gilt aber nur, wenn $\\cos(2x)$ bereits Lösung der homogenen DGL ist. Hier ist die homogene Lösung $e^{-x}$, also kein Resonanzfall.',
          3: 'Trigonometrische DGL haben sehr wohl partikuläre Lösungen — die Stör­ansatz-Methode ist Standard für solche Probleme.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['stoeransatz'] },
      ),
      matching(
        'Ordne jeder Stör­funktion den passenden Stör­ansatz zu (keine Resonanz).',
        [
          { left: '$q(x) = e^{2x}$', right: '$y_p = A\\,e^{2x}$' },
          { left: '$q(x) = \\cos(2x)$', right: '$y_p = A\\cos(2x) + B\\sin(2x)$' },
          { left: '$q(x) = x^2$', right: '$y_p = A x^2 + B x + C$' },
          { left: '$q(x) = 5$', right: '$y_p = A$ (Konstante)' },
        ],
        `**Ansatz:** Tabellen­ansatz: für jede Stör­funktions­art gibt es einen passenden Standard­ansatz. Form der Stör­funktion → Form des Ansatzes.

**Rechnung:**
- Exponential $e^{\\alpha x}$ → Ansatz $A\\,e^{\\alpha x}$ (eine Konstante).
- Trigonometrisch $\\cos(\\omega x)$ oder $\\sin(\\omega x)$ → Ansatz mit *beiden* Trig-Funktionen.
- Polynom Grad $n$ → vollständiges Polynom Grad $n$ ($n+1$ Konstanten).
- Konstante (Grad-0-Polynom) → konstanter Ansatz.

**Probe:** Pro Ansatz nach Einsetzen Koeffizienten­vergleich durchführen — Anzahl Gleichungen = Anzahl Unbekannte → eindeutige Lösung (außer Resonanz).

**Typischer Fehler:** Polynom-Ansatz unvollständig (nur höchste Potenz) oder Trig-Ansatz mit nur einer Funktion — beide Fälle scheitern beim Koeffizienten­vergleich.`,
        [
          'Form der Stör­funktion identifizieren.',
          'Standard­ansatz nach Tabelle wählen.',
          'Polynome: vollständig; Trig: beide Funktionen; Exp: eine Konstante.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['stoeransatz'] },
      ),
    ],

    // ── [4] Resonanz-Fall: Ansatz × x ───────────────────────────────────
    4: [
      tf(
        'Ist die Stör­funktion $q(x) = e^{\\alpha x}$ bereits Lösung der homogenen DGL (Resonanzfall), multipliziert man den Stör­ansatz mit $x$: $y_p = A\\,x\\,e^{\\alpha x}$.',
        true,
        `**Ansatz:** Bei Resonanz versagt der Standard­ansatz $A\\,e^{\\alpha x}$, weil er die homogene DGL erfüllt und nicht zur Störung beiträgt. Multiplikation mit $x$ liefert eine linear unabhängige Funktion.

**Rechnung:** Beispiel $y\' - 2y = e^{2x}$: homogene Lösung $C\\,e^{2x}$. Standard­ansatz $A\\,e^{2x}$ in DGL: $2A\\,e^{2x} - 2A\\,e^{2x} = 0 \\neq e^{2x}$ — scheitert. Resonanz-Ansatz $A\\,x\\,e^{2x}$: $y_p\' = A\\,e^{2x} + 2A\\,x\\,e^{2x}$. $y_p\' - 2y_p = A\\,e^{2x} + 2A\\,x\\,e^{2x} - 2A\\,x\\,e^{2x} = A\\,e^{2x} \\stackrel{!}{=} e^{2x}$ → $A = 1$. ✓

**Probe:** Mit $A = 1$: $y_p = x\\,e^{2x}$. $y_p\' = e^{2x} + 2x\\,e^{2x}$. $y_p\' - 2y_p = e^{2x} + 2x\\,e^{2x} - 2x\\,e^{2x} = e^{2x}$ ✓.

**Typischer Fehler:** Den Resonanzfall nicht erkennen und am Standard­ansatz festhalten — Folge: $A$ lässt sich nicht bestimmen ($0 = q$ ist widersprüchlich).`,
        [
          'Wann ist der Standard­ansatz $A\\,e^{\\alpha x}$ nicht ausreichend?',
          'Wenn $e^{\\alpha x}$ schon homogene Lösung ist, fällt der Ansatz „durch".',
          'Reparatur: Multiplikation mit $x$ — Ansatz wird linear unabhängig.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['resonanz-ansatz'] },
      ),
      mc(
        'Welcher Stör­ansatz ist für $y\' - 2y = e^{2x}$ korrekt?',
        [
          '$y_p = A\\,x\\,e^{2x}$',
          '$y_p = A\\,e^{2x}$',
          '$y_p = A\\,x^2\\,e^{2x}$',
          '$y_p = A\\,x\\,e^{-2x}$',
        ],
        0,
        `**Ansatz:** Resonanz-Check: ist $e^{2x}$ Lösung der homogenen DGL? Wenn ja → mit $x$ multiplizieren.

**Rechnung:** Homogen: $y\' - 2y = 0 \\Rightarrow y_h = C\\,e^{2x}$. Stör­funktion $e^{2x}$ = homogene Form → **Resonanz**. Standard­ansatz $A\\,e^{2x}$ versagt (würde $0 = e^{2x}$ liefern). Resonanz-Ansatz: $y_p = A\\,x\\,e^{2x}$.

**Probe:** $y_p\' = A\\,e^{2x} + 2A\\,x\\,e^{2x}$. $y_p\' - 2y_p = A\\,e^{2x} + 2A\\,x\\,e^{2x} - 2A\\,x\\,e^{2x} = A\\,e^{2x} = e^{2x}$ → $A = 1$.

**Typischer Fehler:** Standard­ansatz versuchen, ohne Resonanz zu prüfen. Oder gleich $x^2$ multiplizieren (das ist erst bei DGL 2. Ordnung mit doppelter Resonanz nötig).`,
        [
          'Test: ist $e^{2x}$ Lösung der homogenen DGL?',
          'Wenn ja → Ansatz mit $x$ multiplizieren.',
          '$y_p = A\\,x\\,e^{2x}$ statt $A\\,e^{2x}$.',
        ],
        {
          1: 'Standard­ansatz scheitert: $A\\,e^{2x}$ erfüllt die homogene DGL → $y_p\' - 2y_p = 0 \\neq e^{2x}$. Resonanz nicht erkannt.',
          2: 'Bei DGL 1. Ordnung reicht eine Multiplikation mit $x$. Doppelte Multiplikation ($x^2$) ist erst bei Doppelwurzel der charakteristischen Gleichung (DGL 2. Ordnung) nötig.',
          3: 'Vorzeichen im Exponenten falsch. Die homogene Lösung ist $e^{+2x}$ (aus $y\'=2y$), nicht $e^{-2x}$. Resonanz-Ansatz übernimmt den Exponenten der homogenen Lösung.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['resonanz-ansatz'] },
      ),
      mc(
        'Welcher Stör­ansatz ist für $y\' + y = e^{-x}$ korrekt?',
        [
          '$y_p = A\\,x\\,e^{-x}$',
          '$y_p = A\\,e^{-x}$',
          '$y_p = A\\,x\\,e^{x}$',
          '$y_p = A\\,\\cos(-x)$',
        ],
        0,
        `**Ansatz:** Erst die homogene Lösung bestimmen, dann auf Resonanz prüfen.

**Rechnung:** Homogen: $y\' + y = 0 \\Rightarrow y_h = C\\,e^{-x}$. Stör­funktion $e^{-x}$ = $y_h$-Form → Resonanz. Standard­ansatz scheitert. Resonanz-Ansatz: $y_p = A\\,x\\,e^{-x}$.

**Probe:** $y_p\' = A\\,e^{-x} - A\\,x\\,e^{-x}$. $y_p\' + y_p = A\\,e^{-x} - A\\,x\\,e^{-x} + A\\,x\\,e^{-x} = A\\,e^{-x} = e^{-x}$ → $A = 1$. ✓

**Typischer Fehler:** Falsches Vorzeichen im Exponenten (Optionen 3, 4) oder Resonanz nicht erkennen (Option 2).`,
        [
          'Homogen: $y\' = -y$ → $y_h = C\\,e^{-x}$.',
          'Stör­funktion = $e^{-x}$ = homogene Form → Resonanz.',
          'Ansatz mit Faktor $x$.',
        ],
        {
          1: 'Standard­ansatz: $A\\,e^{-x}$ ist aber selbst homogene Lösung — $y_p\' + y_p = -A\\,e^{-x} + A\\,e^{-x} = 0 \\neq e^{-x}$. Resonanz nicht erkannt.',
          2: 'Vorzeichen im Exponenten umgekehrt. Die homogene Lösung ist $e^{-x}$ (aus $y\' = -y$), nicht $e^{+x}$. Der Ansatz übernimmt den Exponenten der Stör­funktion und ergänzt $x$.',
          3: 'Cosinus passt zu trigonometrischen Stör­funktionen, nicht zu exponentiellen. $\\cos(-x) = \\cos(x)$ — wohldefiniert, aber falscher Ansatz­typ.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['resonanz-ansatz'] },
      ),
      mc(
        'Ein Lerner setzt für $y\' + y = e^{-x}$ den Stör­ansatz $y_p = A\\,e^{-x}$ an. Welcher Fehler liegt vor?',
        [
          'Resonanz nicht erkannt: $e^{-x}$ ist Lösung der homogenen DGL $y\' + y = 0$. Einsetzen liefert $y_p\' + y_p = -A\\,e^{-x} + A\\,e^{-x} = 0 \\neq e^{-x}$, also unmöglich $A$ zu bestimmen. Korrekt: $y_p = A\\,x\\,e^{-x}$.',
          'Stimmt — Standard­ansatz reicht immer.',
          'Falsch — der Ansatz müsste $y_p = -A\\,e^{-x}$ heißen.',
          'Falsch — bei exponentieller Stör­funktion gibt es keine Partikulärlösung.',
        ],
        0,
        `**Ansatz:** Resonanz-Test vor jedem Stör­ansatz: ist die Stör­funktion bereits Lösung der homogenen DGL?

**Rechnung:** Homogen: $y\' + y = 0 \\Rightarrow y_h = C\\,e^{-x}$. Stör­funktion $e^{-x}$ stimmt mit $y_h$-Form überein (mit $C = 1$). → Resonanz! Lerner-Ansatz $A\\,e^{-x}$ erfüllt die homogene DGL: $y_p\' + y_p = -A\\,e^{-x} + A\\,e^{-x} = 0$. Aber gefordert: $= e^{-x}$. Widerspruch — $A$ existiert nicht.

**Probe:** Korrekter Ansatz $y_p = A\\,x\\,e^{-x}$: $y_p\' = A\\,e^{-x} - A\\,x\\,e^{-x}$. $y_p\' + y_p = A\\,e^{-x} - A\\,x\\,e^{-x} + A\\,x\\,e^{-x} = A\\,e^{-x} = e^{-x}$ → $A = 1$, also $y_p = x\\,e^{-x}$.

**Typischer Fehler:** Standard­ansatz mechanisch anwenden, ohne homogene Lösung zu prüfen. Resonanz tritt häufig auf, wenn die Stör­funktion zufällig den Eigenwert der DGL trifft.`,
        [
          'Was ist die homogene Lösung von $y\' + y = 0$?',
          'Hat die Stör­funktion dieselbe Form?',
          'Wenn ja → mit $x$ multiplizieren.',
        ],
        {
          1: 'Standard­ansatz reicht *nicht* immer — bei Resonanz versagt er. Resonanz tritt auf, wenn die Stör­funktion bereits Lösung der homogenen DGL ist.',
          2: 'Vorzeichen ist nicht das Problem. $y_p = -A\\,e^{-x}$ ist genauso homogene Lösung wie $+A\\,e^{-x}$ — eingesetzt ergibt sich wieder $0 = e^{-x}$.',
          3: 'Doch, es gibt eine Partikulärlösung — sie heißt nur nicht $A\\,e^{-x}$, sondern $x\\,e^{-x}$. Der $x$-Faktor ist der Schlüssel.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['resonanz-ansatz'] },
      ),
      mc(
        'Bei welcher der folgenden DGL liegt ein *Resonanz-Fall* vor?',
        [
          '$y\' - 3y = e^{3x}$',
          '$y\' + 3y = e^{3x}$',
          '$y\' - 3y = e^{-3x}$',
          '$y\' - 3y = \\cos(3x)$',
        ],
        0,
        `**Ansatz:** Pro DGL homogene Lösung bestimmen, dann prüfen, ob die Stör­funktion mit der homogenen Form übereinstimmt.

**Rechnung:**
- $y\' - 3y = e^{3x}$: $y_h = C\\,e^{3x}$, Stör­funktion $e^{3x}$ → **Resonanz** ✓.
- $y\' + 3y = e^{3x}$: $y_h = C\\,e^{-3x}$, Stör­funktion $e^{3x}$ ≠ $y_h$-Form → keine Resonanz.
- $y\' - 3y = e^{-3x}$: $y_h = C\\,e^{3x}$, Stör­funktion $e^{-3x}$ → keine Resonanz.
- $y\' - 3y = \\cos(3x)$: $y_h = C\\,e^{3x}$, Stör­funktion $\\cos(3x)$ → keine Resonanz (andere Funktions­typen).

**Probe:** Der Resonanz-Fall liegt vor, wenn der Eigenwert $\\lambda$ der homogenen DGL mit dem Exponenten der Stör­funktion übereinstimmt.

**Typischer Fehler:** Bei Option 2 die Vorzeichen verwechseln und meinen, $e^{3x}$ stimme mit $e^{-3x}$ überein. Oder bei Option 4 wegen der gleichen Frequenz $3$ Resonanz vermuten — aber Cosinus und Exponential sind verschiedene Funktions­typen.`,
        [
          'Wie sieht die homogene Lösung der DGL aus?',
          'Stimmt der Exponent mit dem der Stör­funktion überein?',
          'Resonanz nur, wenn beide Funktions­typen *und* Exponenten gleich sind.',
        ],
        {
          1: 'Hier ist $y_h = C\\,e^{-3x}$, die Stör­funktion ist $e^{+3x}$. Verschiedene Exponenten → keine Resonanz, Standard­ansatz $A\\,e^{3x}$ funktioniert.',
          2: 'Vorzeichen wichtig: $y_h = C\\,e^{+3x}$ stimmt nicht mit $e^{-3x}$ überein. Keine Resonanz.',
          3: 'Trotz gleicher Frequenz $3$ ist Cosinus kein Exponential — die Funktions­typen sind verschieden. Daher keine Resonanz (Standard­ansatz $A\\cos + B\\sin$ funktioniert).',
        },
        { stage: 'transfer', subGoal: 4, uses: ['resonanz-ansatz'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // dgl-2-2 — DGL-Systeme  (6 subGoals)
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-2-2': {

    // ── [0] Matrixform: y' = A·y ──────────────────────────────────────
    0: [
      mc(
        'Schreibe das System $y_1\' = 2y_1 - y_2$, $y_2\' = y_1 + 3y_2$ in Matrixform. Welche Matrix $A$ gehört zu $\\vec y\' = A \\vec y$?',
        [
          '$A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} -1 & 2 \\\\ 3 & 1 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} 2 & 3 \\\\ -1 & 1 \\end{pmatrix}$',
        ],
        0,
        `**Ansatz:** Zeile $i$ der Matrix $A$ enthält die Koeffizienten in der Gleichung für $y_i\'$: $y_i\' = A_{i1}\\,y_1 + A_{i2}\\,y_2$.

**Rechnung:** Zeile 1 aus $y_1\' = 2y_1 - y_2$: $(A_{11}, A_{12}) = (2, -1)$. Zeile 2 aus $y_2\' = y_1 + 3y_2$: $(A_{21}, A_{22}) = (1, 3)$.

**Probe:** $A\\vec y = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} 2y_1 - y_2 \\\\ y_1 + 3y_2 \\end{pmatrix}$ ✓.

**Typischer Fehler:** Spalten mit Zeilen verwechselt. Spalte $j$ multipliziert mit $y_j$, Zeile $i$ liefert $y_i\'$ — nicht umgekehrt.`,
        [
          'Zeile $i$ enthält die Koeffizienten der Gleichung für $y_i\'$.',
          'Zeile 1 kommt aus der ersten Gleichung ($y_1\'$).',
          'Vorzeichen der Koeffizienten genau übernehmen.',
        ],
        {
          1: 'Hier wurde transponiert: du hast $A^T$ geschrieben. Zeile 1 enthält $(2, 1)$ — aber in der ersten Gleichung steht $-y_2$, also muss Zeile 1 ein $-1$ an zweiter Stelle haben.',
          2: 'Die Zeilen wurden vertauscht. Zeile 1 gehört zur Gleichung für $y_1\'$, nicht für $y_2\'$.',
          3: 'Vermischte Einträge. Tipp: Notiere zuerst die Zeilen einzeln, dann in die Matrix einsortieren.',
        },
      ),
      ni(
        'Für das System $y_1\' = 4y_1 - 2y_2$, $y_2\' = 3y_1 - y_2$ — welchen Wert hat der Matrixeintrag $A_{22}$?',
        -1, 0.001, '',
        `**Ansatz:** $A_{22}$ ist der Koeffizient vor $y_2$ in der Gleichung für $y_2\'$.

**Rechnung:** Aus $y_2\' = 3y_1 - y_2$ lese ab: Koeffizient vor $y_2$ ist $-1$. Also $A_{22} = -1$.

**Probe:** $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & -1 \\end{pmatrix}$, und zweite Komponente von $A\\vec y$ ist $3y_1 + (-1)y_2$ ✓.

**Typischer Fehler:** Vorzeichen vergessen: der Koeffizient ist $-1$, nicht $+1$, wegen des Minuszeichens vor $y_2$.`,
        [
          'Notation: $A_{ij}$ = Eintrag in Zeile $i$, Spalte $j$.',
          '$A_{22}$ = Koeffizient von $y_2$ in der Gleichung für $y_2\'$.',
          'Vorzeichen aus dem Text übernehmen.',
        ],
      ),
      tf(
        'Für ein homogenes lineares DGL-System 1. Ordnung mit $n$ gekoppelten Unbekannten $y_1,\\ldots,y_n$ ist die Koeffizientenmatrix $A$ quadratisch $n \\times n$.',
        true,
        `**Ansatz:** Dimensionen auf beiden Seiten vergleichen.

**Rechnung:** $\\vec y \\in \\mathbb{R}^n$, $\\vec y\' \\in \\mathbb{R}^n$. Damit $A\\vec y$ ein $n$-Vektor wird, muss $A$ $n$ Spalten haben; damit das Ergebnis $n$-dimensional ist, muss $A$ $n$ Zeilen haben. Also $A \\in \\mathbb{R}^{n\\times n}$.

**Probe:** Bei $n=2$: $2\\times 2$ Matrix, bei $n=3$: $3\\times 3$. Eindeutig gesetzt durch die Anzahl der Gleichungen.

**Typischer Fehler:** $A$ als rechteckige Matrix anzusetzen. Für ein geschlossenes System mit gleicher Ein- und Ausgangsdimension muss $A$ quadratisch sein.`,
        [
          'Dimensionscheck: $A \\vec y$ liefert einen Vektor gleicher Dimension wie $\\vec y\'$.',
          'Anzahl Zeilen = Anzahl DGL; Anzahl Spalten = Anzahl Unbekannte.',
          'Für geschlossene Systeme sind beide gleich $n$.',
        ],
      ),
      matching(
        'Ordne die Systeme ihrer Matrix $A$ zu.',
        [
          { left: '$y_1\' = y_2$, $y_2\' = -y_1$', right: '$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$' },
          { left: '$y_1\' = 3y_1$, $y_2\' = -2y_2$ (entkoppelt)', right: '$\\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}$' },
          { left: '$y_1\' = y_1 + y_2$, $y_2\' = y_1 + y_2$', right: '$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$' },
          { left: '$y_1\' = 2y_1$, $y_2\' = y_1 + 2y_2$', right: '$\\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$' },
        ],
        `**Ansatz:** Zeilenweise Koeffizienten in die Matrix eintragen.

**Rechnung:** (1) Rotation: Nullen auf Diagonale, Off-Diagonalen $+1$ und $-1$. (2) Entkoppelt: Diagonalmatrix. (3) Alle Einträge gleich → Rang 1. (4) Untere Dreiecksmatrix (Jordan-artig mit doppelter Wurzel $\\lambda=2$).

**Probe:** Jede Matrix mit $\\vec y$ multiplizieren und vergleichen.

**Typischer Fehler:** Bei entkoppelten Systemen Nullen auf den Off-Diagonalen vergessen.`,
        [
          'Ohne $y_j$-Term in Zeile $i$ → $A_{ij} = 0$.',
          'Entkoppelte Systeme haben Diagonalmatrizen.',
          'Rotation hat antisymmetrische Off-Diagonalen.',
        ],
      ),
      mc(
        'Warum ist die Matrixform $\\vec y\' = A\\vec y$ gegenüber dem expliziten Gleichungssystem *vorteilhaft*?',
        [
          'Man kann Eigenwerte/Eigenvektoren von $A$ berechnen und bekommt daraus direkt die allgemeine Lösung.',
          'Die Matrixform reduziert die Ordnung der DGL.',
          'Sie erlaubt die Anwendung der Trennung der Variablen.',
          'Matrixform vermeidet die Notwendigkeit von Anfangsbedingungen.',
        ],
        0,
        `**Ansatz:** Nach Nutzen der Matrixform fragen: warum sie die Lösung *systematisch* ermöglicht.

**Rechnung:** Der Ansatz $\\vec y = \\vec v e^{\\lambda t}$ reduziert die DGL auf das lineare Eigenwertproblem $A\\vec v = \\lambda \\vec v$ — ein rein algebraisches Problem, mit gut etablierten Werkzeugen (charakteristisches Polynom, Diagonalisierung).

**Probe:** Ohne Matrixform müsste man das gekoppelte System von Hand entkoppeln (z.B. durch Substitution), was bei $n>2$ schnell unübersichtlich wird.

**Typischer Fehler:** Matrixform mit „einfacherer DGL" gleichsetzen — die DGL wird nicht einfacher, sondern in eine Form gebracht, die lineare Algebra zugänglich macht.`,
        [
          'Matrixform wandelt das DGL-Problem in lineare Algebra um.',
          'Eigenwertgleichung $A\\vec v = \\lambda \\vec v$ ist rein algebraisch.',
          'Anfangsbedingungen sind weiterhin nötig.',
        ],
        {
          1: 'Die Ordnung wird nicht reduziert. DGL 1. Ordnung bleibt 1. Ordnung — nur in vektorieller Form.',
          2: 'Trennung der Variablen funktioniert bei gekoppelten Systemen *nicht* direkt, weil die Gleichungen in $y_1, y_2, \\ldots$ verkoppelt sind.',
          3: 'AWP bleibt AWP — Anfangsbedingungen werden für die $n$ unbekannten Konstanten $C_1, \\ldots, C_n$ benötigt.',
        },
      ),
    ],

    // ── [1] Reduktion höherer Ordnung: y_1=y, y_2=y', ... ────────────
    1: [
      mc(
        'Schreibe die DGL $y\'\' + 4y\' + 3y = 0$ als System 1. Ordnung mit $y_1 = y$, $y_2 = y\'$. Welche Matrix gehört dazu?',
        [
          '$A = \\begin{pmatrix} 0 & 1 \\\\ -3 & -4 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} 0 & 1 \\\\ 3 & 4 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} 0 & 1 \\\\ -4 & -3 \\end{pmatrix}$',
          '$A = \\begin{pmatrix} 1 & 0 \\\\ -3 & -4 \\end{pmatrix}$',
        ],
        0,
        `**Ansatz:** Standard-Substitution: $y_1 = y$, $y_2 = y\'$. Dann $y_1\' = y_2$ und $y_2\' = y\'\' = -4y\' - 3y = -3y_1 - 4y_2$.

**Rechnung:** Zeile 1: $(0, 1)$ (aus $y_1\' = 0\\cdot y_1 + 1\\cdot y_2$). Zeile 2: $(-3, -4)$ (aus $y_2\' = -3y_1 - 4y_2$). Companion-Matrix: 1er auf der Superdiagonale und die negierten DGL-Koeffizienten in der letzten Zeile.

**Probe:** Ansatz $y=e^{\\lambda t}$ in $y\'\'+4y\'+3y=0$ → $\\lambda^2+4\\lambda+3=(\\lambda+1)(\\lambda+3)=0$. Charakteristisches Polynom von $A$: $\\det(A-\\lambda I) = \\lambda(\\lambda+4)+3 = \\lambda^2+4\\lambda+3$ ✓.

**Typischer Fehler:** Koeffizienten ohne Vorzeichenwechsel übertragen. Aus $y\'\'=-4y\'-3y$ müssen die Vorzeichen in $A$ negativ sein.`,
        [
          'Standard: $y_1 = y$, $y_2 = y\'$, also $y_1\' = y_2$.',
          '$y_2\' = y\'\' = -$(Koeffizient $y\'$)$\\cdot y_2 -$(Koeffizient $y$)$\\cdot y_1$.',
          'Achtung: Vorzeichen drehen sich beim Umstellen nach $y\'\'$.',
        ],
        {
          1: 'Vorzeichen fehlen: Aus $y\'\'=-4y\'-3y$ folgt Zeile 2 $(-3,-4)$, nicht $(+3,+4)$.',
          2: 'Reihenfolge der Koeffizienten vertauscht: Spalte 1 = Koeffizient von $y_1 = y$, also $-3$; Spalte 2 = Koeffizient von $y_2 = y\'$, also $-4$.',
          3: 'Zeile 1 falsch: $y_1\' = y\' = y_2$, also Zeile 1 $(0,1)$, nicht $(1,0)$.',
        },
      ),
      ni(
        'DGL 3. Ordnung $y\'\'\' = 2y\'\' - y\' + 5y$ wird in ein System 1. Ordnung umgeschrieben. Wie viele Komponenten hat der Vektor $\\vec y$?',
        3, 0.001, '',
        `**Ansatz:** Eine DGL $n$-ter Ordnung wird zu einem System aus $n$ DGL 1. Ordnung mit $n$ Unbekannten.

**Rechnung:** Hier $n=3$ (dritte Ableitung). Substitution: $y_1=y$, $y_2=y\'$, $y_3=y\'\'$. Also $\\vec y\\in\\mathbb{R}^3$.

**Probe:** $y_1\'=y_2$, $y_2\'=y_3$, $y_3\'=y\'\'\'=2y_3-y_2+5y_1$ — drei Gleichungen.

**Typischer Fehler:** $n-1$ Komponenten annehmen (oft bei erstem Versuch). Tatsächlich braucht man eine Komponente *pro Ableitungsordnung bis $n-1$*, d.h. $n$ insgesamt.`,
        [
          'Eine DGL $n$-ter Ordnung wird zu $n$ DGL 1. Ordnung.',
          'Neue Variablen: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
          '$y^{(n-1)} = y^{(3-1)} = y\'\'$ ist das höchste verwendete.',
        ],
      ),
      mc(
        'Welche Substitution gilt bei DGL 4. Ordnung?',
        [
          '$y_1 = y,\\ y_2 = y\',\\ y_3 = y\'\',\\ y_4 = y\'\'\'$',
          '$y_1 = y\',\\ y_2 = y\'\',\\ y_3 = y\'\'\',\\ y_4 = y^{(4)}$',
          '$y_1 = y,\\ y_2 = y\',\\ y_3 = y\'\',\\ y_4 = y^{(4)}$',
          '$y_1 = y,\\ y_2 = y^{(4)}$',
        ],
        0,
        `**Ansatz:** Jede Zwischenableitung bis inklusive Ordnung $n-1$ als eigene Variable.

**Rechnung:** $n=4$: Variablen $y_1=y^{(0)}$, $y_2=y^{(1)}$, $y_3=y^{(2)}$, $y_4=y^{(3)}$. Die höchste Ableitung $y^{(4)}$ steht auf der rechten Seite der letzten DGL.

**Probe:** $y_1\'=y_2$, $y_2\'=y_3$, $y_3\'=y_4$, $y_4\'=y^{(4)}$ — Kette von DGL 1. Ordnung.

**Typischer Fehler:** $y^{(4)}$ als eigene Variable einführen wollen. Es ist aber keine „neue" Unbekannte, sondern durch die DGL selbst festgelegt.`,
        [
          'Variablen für Ordnungen 0 bis $n-1$.',
          'Die höchste Ableitung $y^{(n)}$ selbst wird durch die DGL ausgedrückt.',
          'Insgesamt $n$ Variablen.',
        ],
        {
          1: 'Beginnt bei $y\'$ statt $y$ — dann fehlt die $y$-Variable. Man braucht $y$ selbst als $y_1$.',
          2: 'Falscher Sprung: $y_4 = y^{(4)}$ überspringt $y\'\'\'$. Die Variablen müssen lückenlos sein.',
          3: 'Viel zu wenige Variablen: bei 4. Ordnung brauchst du *vier* Komponenten.',
        },
      ),
      tf(
        'Die Reduktion einer DGL höherer Ordnung auf ein System 1. Ordnung ändert die Lösungsmenge.',
        false,
        `**Ansatz:** Äquivalenz von DGL $n$-ter Ordnung und System $n$-ter Größe.

**Rechnung:** Jede Lösung $y(t)$ der DGL liefert direkt $(y(t), y\'(t), \\ldots, y^{(n-1)}(t))^T$ — eine Lösung des Systems. Umgekehrt erfüllt die erste Komponente des Systems genau die ursprüngliche DGL. Damit sind die Lösungsmengen bijektiv verwandt.

**Probe:** Dimension des Lösungsraums: DGL $n$-ter Ordnung hat $n$ linear unabhängige Lösungen; das System hat auch $n$ linear unabhängige Lösungen. Dimensionsgleich.

**Typischer Fehler:** Glauben, durch Reduktion werde die Lösung „einfacher" im Sinne *weniger* Lösungen. Nein — Lösungsmenge bleibt identisch, nur die *Darstellung* ändert sich.`,
        [
          'Bijektion zwischen Skalarlösungen und Vektorlösungen.',
          'Dimension des Lösungsraums bleibt $n$.',
          'Reduktion ist nur Umformulierung, keine Einschränkung.',
        ],
      ),
      sorting(
        'Sortiere die Schritte zur Umformung einer DGL höherer Ordnung in ein System 1. Ordnung.',
        [
          'Ordnung $n$ der DGL bestimmen.',
          'Variablen $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$ einführen.',
          'DGL nach $y^{(n)}$ auflösen und als $y_n\' = \\ldots$ schreiben.',
          'System in Matrixform $\\vec y\' = A \\vec y$ bringen.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Klar strukturierter Algorithmus.

**Rechnung:** (1) Ordnung = Anzahl der neuen Variablen. (2) Neue Variablen = Ableitungen. (3) Die höchste Ableitung liefert die letzte Gleichung. (4) Koeffizienten in Companion-Matrix organisieren.

**Probe:** Companion-Matrix hat Einsen über der Diagonale (oder unter, je nach Konvention) und die negierten DGL-Koeffizienten in der letzten Zeile.

**Typischer Fehler:** Schritt 3 vergessen und die DGL nicht nach $y^{(n)}$ aufgelöst haben — dann fehlt die letzte Gleichung des Systems.`,
        [
          'Zuerst die Ordnung, dann die Variablen.',
          'Die DGL nach der höchsten Ableitung auflösen.',
          'Matrixform erleichtert die spätere Eigenwert-Analyse.',
        ],
      ),
    ],

    // ── [2] Eigenwertansatz: A·v = λ·v ────────────────────────────────
    2: [
      mc(
        'Warum liefert der Ansatz $\\vec y = \\vec v \\cdot e^{\\lambda t}$ für das System $\\vec y\' = A \\vec y$ das Eigenwertproblem $A\\vec v = \\lambda \\vec v$?',
        [
          'Weil $\\vec y\' = \\lambda \\vec v e^{\\lambda t}$ und $A\\vec y = A\\vec v e^{\\lambda t}$ — nach Kürzen von $e^{\\lambda t}$ bleibt $\\lambda\\vec v = A\\vec v$.',
          'Weil $\\vec v$ per Definition ein Eigenvektor ist.',
          'Weil der Ansatz $A$ diagonalisiert.',
          'Weil die Exponentialfunktion selbst ein Eigenvektor ist.',
        ],
        0,
        `**Ansatz:** Ableitung des Ansatzes und Einsetzen.

**Rechnung:** $\\vec y = \\vec v e^{\\lambda t}$ → $\\vec y\' = \\vec v \\lambda e^{\\lambda t}$ (da $\\vec v$ konstant). Einsetzen in DGL: $\\vec v \\lambda e^{\\lambda t} = A\\vec v e^{\\lambda t}$. Division durch $e^{\\lambda t}\\neq 0$: $\\lambda \\vec v = A\\vec v$ — genau die Eigenwertgleichung.

**Probe:** Umgekehrt: Wenn $A\\vec v = \\lambda\\vec v$, dann erfüllt $\\vec y = \\vec v e^{\\lambda t}$ die DGL.

**Typischer Fehler:** Die Kettenregel bei der Ableitung vergessen: $\\frac{d}{dt}(\\vec v e^{\\lambda t}) = \\vec v \\cdot \\lambda e^{\\lambda t}$, nicht $\\vec v \\cdot e^{\\lambda t}$.`,
        [
          'Ableiten, einsetzen, vergleichen.',
          '$e^{\\lambda t}$ auf beiden Seiten kürzt sich heraus.',
          'Das reine Matrix-Vektor-Problem $A\\vec v = \\lambda\\vec v$ bleibt übrig.',
        ],
        {
          1: 'Das ist *nachträglich* richtig (am Ende sind $\\vec v$ Eigenvektoren), aber keine Begründung *warum* der Ansatz darauf führt. Die Rechnung erklärt es konkret.',
          2: 'Die Matrixform wird diagonalisiert, wenn genügend linear unabhängige Eigenvektoren existieren — aber das ist eine *Folge* des Ansatzes, nicht der Grund.',
          3: 'Die Exponentialfunktion ist im skalaren Fall Eigenfunktion des Ableitungsoperators, aber das ist eine andere Struktur. Bei Vektoren kommt erst durch $A\\vec v$ der Eigenvektor ins Spiel.',
        },
      ),
      ni(
        'Gegeben $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Welcher Eigenwert gehört zum Eigenvektor $\\vec v = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$?',
        3, 0.001, '',
        `**Ansatz:** Direkt $A\\vec v$ berechnen und mit $\\lambda\\vec v$ vergleichen.

**Rechnung:** $A\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}3\\\\0\\end{pmatrix} = 3\\cdot\\begin{pmatrix}1\\\\0\\end{pmatrix}$. Also $\\lambda = 3$.

**Probe:** $A\\vec v = 3\\vec v$ ✓ — Eigenwertgleichung erfüllt.

**Typischer Fehler:** Diagonalmatrix mit anderen Einträgen verwechselt. Achtung: Der Eigenwert entspricht der Zeile, zu der der Eigenvektor „gehört" (hier Zeile 1, also $A_{11} = 3$).`,
        [
          'Berechne $A\\vec v$ direkt.',
          'Für Diagonalmatrix: $A \\vec e_i = A_{ii} \\vec e_i$.',
          '$\\vec v = \\vec e_1$ liefert $\\lambda = A_{11}$.',
        ],
      ),
      mc(
        'Wie bestimmt man die Eigenwerte einer $n\\times n$-Matrix $A$?',
        [
          'Löse $\\det(A - \\lambda I) = 0$ (charakteristisches Polynom in $\\lambda$).',
          'Löse $\\det(A) = \\lambda$.',
          'Berechne den Rang von $A$.',
          'Setze $A\\vec v = \\vec 0$ und löse.',
        ],
        0,
        `**Ansatz:** Die Eigenwertgleichung $A\\vec v = \\lambda\\vec v$ → $(A - \\lambda I)\\vec v = \\vec 0$. Für nicht-triviale $\\vec v$: $\\det(A-\\lambda I) = 0$.

**Rechnung:** Das charakteristische Polynom ist Polynom vom Grad $n$ in $\\lambda$; seine $n$ Wurzeln (mit Vielfachheit) sind die Eigenwerte.

**Probe:** $2\\times 2$: $\\det\\begin{pmatrix} a-\\lambda & b \\\\ c & d-\\lambda \\end{pmatrix} = (a-\\lambda)(d-\\lambda) - bc = \\lambda^2 - (a+d)\\lambda + (ad-bc)$.

**Typischer Fehler:** $(A-\\lambda I)\\vec v = \\vec 0$ direkt durch Gauss-Elimination lösen, obwohl $\\lambda$ noch unbekannt ist. Erst Determinante = 0 zur Bestimmung von $\\lambda$, dann Eigenvektor.`,
        [
          'Eigenwertgleichung umschreiben: $(A-\\lambda I)\\vec v = \\vec 0$.',
          'Nicht-triviale Lösungen gibt es nur bei $\\det(A-\\lambda I) = 0$.',
          'Das charakteristische Polynom hat Grad $n$.',
        ],
        {
          1: 'Das ist falsch dimensioniert: $\\det(A)$ ist eine Zahl, $\\lambda$ auch — aber die Gleichung $\\det(A) = \\lambda$ würde nur einen Wert liefern, nicht die $n$ Eigenwerte.',
          2: 'Der Rang liefert die Dimension des Bildes (nicht des Kerns). Die geometrische Vielfachheit des Eigenwerts $0$ ist die Nullität $n - \\text{rank}(A) = \\dim(\\ker A)$, aber auch die gibt nur den Eigenraum zu $\\lambda=0$ — nicht die Eigenwerte selbst.',
          3: 'Das sucht nur Eigenvektoren zum Eigenwert $\\lambda = 0$. Alle anderen Eigenwerte gehen verloren.',
        },
      ),
      tf(
        'Der Eigenvektor $\\vec v$ ist eindeutig — er hängt nicht von Skalierung ab.',
        false,
        `**Ansatz:** Eigenvektoren bilden einen Unterraum — $\\vec v$ und $c\\vec v$ sind beide Eigenvektoren zum selben $\\lambda$.

**Rechnung:** $A(c\\vec v) = c(A\\vec v) = c(\\lambda \\vec v) = \\lambda(c\\vec v)$. Also ist jede Skalierung ebenfalls Eigenvektor.

**Probe:** Für die Lösung $\\vec y = \\vec v e^{\\lambda t}$ ist die Skalierung unkritisch, weil sie in der Integrationskonstante $C_1$ aufgeht: $\\vec y = C_1 (c\\vec v) e^{\\lambda t} = (C_1 c)\\vec v e^{\\lambda t}$.

**Typischer Fehler:** In der Klausur zwei „unterschiedliche" Eigenvektoren zum gleichen Eigenwert angeben, die sich nur in Skalierung unterscheiden — das sind dieselben.`,
        [
          'Vielfache eines Eigenvektors sind ebenfalls Eigenvektoren.',
          'Der Eigenraum zu $\\lambda$ ist mindestens 1-dimensional.',
          'Üblicherweise wählt man „einfache" Form (z.B. ganzzahlige Einträge).',
        ],
      ),
      ni(
        'Für $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ — was ist der Eigenwert $\\lambda_1$ (kleinerer Wert)?',
        2, 0.001, '',
        `**Ansatz:** Obere Dreiecksmatrix — Eigenwerte stehen auf der Diagonale.

**Rechnung:** $\\det(A-\\lambda I) = (2-\\lambda)(3-\\lambda) - 0 = 0$ → $\\lambda = 2$ oder $\\lambda = 3$. Kleinerer Wert: $\\lambda_1 = 2$.

**Probe:** Eigenvektor zu $\\lambda_1 = 2$: aus $(A-2I)\\vec v = \\begin{pmatrix} 0 & 1 \\\\ 0 & 1 \\end{pmatrix}\\vec v = \\vec 0$ → $v_2 = 0$, $v_1$ beliebig → $\\vec v_1 = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.

**Typischer Fehler:** Den Eintrag $A_{12} = 1$ in die Eigenwertrechnung einbeziehen. Bei Dreiecksmatrizen verschwindet dieser in $\\det(A-\\lambda I)$ — nur die Diagonalelemente zählen.`,
        [
          'Dreiecksmatrix: Eigenwerte = Diagonale.',
          '$\\lambda_1 = 2$, $\\lambda_2 = 3$.',
          'Off-Diagonal-Element beeinflusst Eigenvektor, nicht Eigenwert.',
        ],
      ),
    ],

    // ── [3] Allgemeine Lösung: y = Σ C_i·v_i·e^{λ_i·t} ────────────────
    3: [
      mc(
        'System $\\vec y\' = A\\vec y$ mit Eigenwerten $\\lambda_1 = -1$, $\\lambda_2 = -2$ und Eigenvektoren $\\vec v_1 = \\begin{pmatrix}1\\\\1\\end{pmatrix}$, $\\vec v_2 = \\begin{pmatrix}1\\\\2\\end{pmatrix}$. Allgemeine Lösung?',
        [
          '$\\vec y = C_1 \\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-t} + C_2 \\begin{pmatrix}1\\\\2\\end{pmatrix} e^{-2t}$',
          '$\\vec y = C_1 \\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-2t} + C_2 \\begin{pmatrix}1\\\\2\\end{pmatrix} e^{-t}$',
          '$\\vec y = (C_1 + C_2)\\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-t}$',
          '$\\vec y = \\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-t} + \\begin{pmatrix}1\\\\2\\end{pmatrix} e^{-2t}$',
        ],
        0,
        `**Ansatz:** Linearkombination der Grundlösungen $\\vec v_i e^{\\lambda_i t}$ mit freien Konstanten.

**Rechnung:** $\\vec y = C_1 \\vec v_1 e^{\\lambda_1 t} + C_2 \\vec v_2 e^{\\lambda_2 t} = C_1 \\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-t} + C_2 \\begin{pmatrix}1\\\\2\\end{pmatrix} e^{-2t}$.

**Probe:** Ableiten und einsetzen: $\\vec y\' = -C_1\\begin{pmatrix}1\\\\1\\end{pmatrix} e^{-t} - 2C_2\\begin{pmatrix}1\\\\2\\end{pmatrix} e^{-2t}$. Die Eigenwert-Beziehung $A\\vec v_i = \\lambda_i \\vec v_i$ sichert die Übereinstimmung mit $A\\vec y$.

**Typischer Fehler:** Eigenwerte mit falschen Eigenvektoren koppeln — bei gemischter Paarung ist die Lösung nicht mehr korrekt.`,
        [
          'Zu jedem Paar $(\\lambda_i, \\vec v_i)$ gehört eine Grundlösung.',
          'Allgemeine Lösung: Linearkombination der Grundlösungen.',
          'Je eine Konstante $C_i$ pro Eigenpaar.',
        ],
        {
          1: 'Die Eigenvektoren sind den falschen Eigenwerten zugeordnet. $\\vec v_1$ gehört zu $\\lambda_1 = -1$, nicht zu $\\lambda_2 = -2$.',
          2: 'Konstanten $C_1 + C_2$ zusammenzufassen funktioniert nur, wenn die Grundlösungen proportional sind — hier sind sie linear unabhängig.',
          3: 'Konstanten fehlen. Eine allgemeine Lösung muss freie Parameter für die $n$ Anfangsbedingungen enthalten — ohne $C_1, C_2$ ist das eine spezielle (partikuläre) Lösung.',
        },
      ),
      ni(
        'AWP $\\vec y\' = A\\vec y$ mit $\\vec y(0) = \\begin{pmatrix}3\\\\5\\end{pmatrix}$. Eigenzerlegung: $\\lambda_1=1$, $\\vec v_1=\\begin{pmatrix}1\\\\1\\end{pmatrix}$; $\\lambda_2=-1$, $\\vec v_2=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$. Welchen Wert hat $C_1$?',
        4, 0.001, '',
        `**Ansatz:** Anfangsbedingung: $\\vec y(0) = C_1 \\vec v_1 + C_2 \\vec v_2 = \\begin{pmatrix}3\\\\5\\end{pmatrix}$.

**Rechnung:** Komponenten: $C_1 + C_2 = 3$, $C_1 - C_2 = 5$. Addieren: $2C_1 = 8 \\Rightarrow C_1 = 4$. Subtrahieren: $2C_2 = -2 \\Rightarrow C_2 = -1$.

**Probe:** $C_1 \\vec v_1 + C_2 \\vec v_2 = 4\\begin{pmatrix}1\\\\1\\end{pmatrix} - \\begin{pmatrix}1\\\\-1\\end{pmatrix} = \\begin{pmatrix}3\\\\5\\end{pmatrix}$ ✓.

**Typischer Fehler:** AWP bei $t=0$ einsetzen und $e^0 = 0$ rechnen (statt $1$). Dann verschwindet die rechte Seite und das System ist ungelöst.`,
        [
          '$\\vec y(0) = C_1 \\vec v_1 + C_2 \\vec v_2$ (da $e^0 = 1$).',
          'Komponentenweises $2\\times 2$-LGS für $C_1, C_2$.',
          'Addition/Subtraktion der beiden Gleichungen entkoppelt das System.',
        ],
      ),
      tf(
        'Eine $n\\times n$-Matrix $A$ mit $n$ verschiedenen Eigenwerten besitzt $n$ linear unabhängige Eigenvektoren, sodass die allgemeine Lösung vollständig durch $\\vec y = \\sum_{i=1}^n C_i \\vec v_i e^{\\lambda_i t}$ beschrieben ist.',
        true,
        `**Ansatz:** Satz aus der linearen Algebra: Eigenvektoren zu paarweise verschiedenen Eigenwerten sind linear unabhängig.

**Rechnung:** $n$ linear unabhängige Eigenvektoren $\\Rightarrow$ $A$ diagonalisierbar $\\Rightarrow$ Lösungsraum wird von $\\{\\vec v_i e^{\\lambda_i t}\\}_{i=1..n}$ aufgespannt.

**Probe:** Dimension des Lösungsraums = $n$, übereinstimmend mit $n$ Anfangsbedingungen.

**Typischer Fehler:** Bei mehrfachen Eigenwerten auf diese Aussage zu bauen. Dann kann die Anzahl linear unabhängiger Eigenvektoren *weniger* als $n$ sein (Jordan-Ketten nötig).`,
        [
          'Verschiedene Eigenwerte → Eigenvektoren linear unabhängig.',
          '$n$ Paare $(\\lambda_i, \\vec v_i)$ spannen den Lösungsraum auf.',
          'Gilt *nicht* automatisch bei mehrfachen Eigenwerten.',
        ],
      ),
      mc(
        'Wie viele Integrationskonstanten treten in der allgemeinen Lösung eines $3\\times 3$-DGL-Systems $\\vec y\' = A\\vec y$ auf?',
        [
          '$3$',
          '$2$',
          '$6$',
          '$9$',
        ],
        0,
        `**Ansatz:** Eine Konstante pro linear unabhängiger Grundlösung.

**Rechnung:** Eine $3\\times 3$-Matrix liefert (bei halbwegs-nichtausgeartetem Spektrum) 3 Grundlösungen $\\vec v_i e^{\\lambda_i t}$. Die allgemeine Lösung $\\vec y = C_1\\vec v_1 e^{\\lambda_1 t} + C_2\\vec v_2 e^{\\lambda_2 t} + C_3\\vec v_3 e^{\\lambda_3 t}$ hat 3 freie Parameter.

**Probe:** 3 AWP-Gleichungen (eine pro Komponente $y_i(0)$) legen 3 Unbekannte $C_i$ fest — konsistent.

**Typischer Fehler:** Komponentenzahl mit Systemdimension verwechseln und $n^2$ oder $2n$ Konstanten erwarten.`,
        [
          'Eine Konstante pro Grundlösung.',
          '$n$ Grundlösungen bei $n\\times n$-System.',
          '$n$ AWP-Komponenten legen $n$ Konstanten fest.',
        ],
        {
          1: 'Zu wenige Freiheitsgrade. Ein $3\\times 3$-System hat Lösungsraum-Dimension 3, nicht 2.',
          2: 'Das wäre bei DGL 6. Ordnung. Hier geht es um ein $3\\times 3$-System 1. Ordnung.',
          3: '$n^2 = 9$ wäre die Anzahl Matrixelemente, nicht Konstanten. Richtige Anzahl ist $n = 3$.',
        },
      ),
      matching(
        'Ordne jeden Eigenwert-Typ seinem Beitrag zur Lösung zu.',
        [
          { left: 'Reeller Eigenwert $\\lambda < 0$', right: 'Exponentielles Abklingen: $\\vec v e^{\\lambda t} \\to \\vec 0$' },
          { left: 'Reeller Eigenwert $\\lambda > 0$', right: 'Exponentielles Wachstum: $|\\vec v e^{\\lambda t}| \\to \\infty$' },
          { left: 'Imaginäres Paar $\\pm i\\omega$', right: 'Reine Schwingung mit Kreisfrequenz $\\omega$' },
          { left: 'Komplexes Paar $\\alpha \\pm i\\omega$ mit $\\alpha<0$', right: 'Gedämpfte Schwingung: $e^{\\alpha t}$ umhüllt Oszillation' },
        ],
        `**Ansatz:** Vorzeichen von $\\text{Re}(\\lambda)$ gibt die Zeitentwicklung vor; Imaginärteil gibt Oszillationsfrequenz.

**Rechnung:** Lösung proportional zu $e^{\\lambda t} = e^{\\alpha t}(\\cos\\omega t + i\\sin\\omega t)$ bei $\\lambda = \\alpha + i\\omega$. Realteil von $\\lambda$ steuert Exponentialhülle, Imaginärteil die Oszillation.

**Probe:** Feder-Masse-Dämpfer: kritische Dämpfung → doppelte Wurzel; unterdämpft → komplexes Paar mit $\\alpha < 0$; überdämpft → zwei reelle negative Wurzeln.

**Typischer Fehler:** Imaginärteil mit Dämpfung verwechseln. Dämpfung steckt im *Realteil*, Oszillationsfrequenz im *Imaginärteil*.`,
        [
          '$\\text{Re}(\\lambda)$ steuert Wachstum/Abklingen.',
          '$\\text{Im}(\\lambda)$ steuert Oszillation.',
          '$\\alpha = 0$ → reine Schwingung.',
        ],
      ),
    ],

    // ── [4] Stabilität: alle Re(λ_i) < 0 → asymptotisch stabil ────────
    4: [
      mc(
        'System mit Eigenwerten $\\lambda_1 = -2$, $\\lambda_2 = -0{,}5$. Wie verhält sich die Lösung für $t \\to \\infty$?',
        [
          '$\\vec y(t) \\to \\vec 0$ (asymptotisch stabil)',
          '$\\vec y(t)$ wächst unbeschränkt',
          '$\\vec y(t)$ schwingt mit konstanter Amplitude',
          'Nicht bestimmbar aus Eigenwerten allein',
        ],
        0,
        `**Ansatz:** Alle Eigenwerte haben $\\text{Re}(\\lambda_i) < 0$ — Definition asymptotischer Stabilität.

**Rechnung:** $\\vec y = C_1 \\vec v_1 e^{-2t} + C_2 \\vec v_2 e^{-0{,}5 t}$. Beide $e^{\\lambda t} \\to 0$ für $t \\to \\infty$. Damit $\\vec y \\to \\vec 0$ unabhängig von den Konstanten.

**Probe:** Langsamstes Abklingen dominiert: $e^{-0{,}5t}$ bleibt länger endlich. Nach $t = 10$: $e^{-5} \\approx 0{,}007$ — praktisch null.

**Typischer Fehler:** $\\lambda = -0{,}5$ als „fast null" interpretieren und Instabilität vermuten. Auch kleine negative Werte sichern Stabilität, nur langsamer.`,
        [
          'Kriterium: alle $\\text{Re}(\\lambda_i) < 0$.',
          'Hier beide Eigenwerte reell und negativ → stabil.',
          'Langsamster Eigenwert (betragsmäßig kleinster) bestimmt Dominanzrate.',
        ],
        {
          1: 'Wachstum würde einen Eigenwert mit $\\text{Re}(\\lambda) > 0$ erfordern. Alle hier sind negativ.',
          2: 'Konstante Schwingung entspricht $\\text{Re}(\\lambda) = 0$ (imaginär). Hier ist nicht-null.',
          3: 'Nur aus Eigenwerten folgt bereits Stabilität: Satz aus DGL-Theorie für lineare Systeme mit konstanten Koeffizienten.',
        },
      ),
      tf(
        'Ein einziger Eigenwert mit $\\text{Re}(\\lambda) > 0$ reicht aus, um das gesamte System instabil zu machen.',
        true,
        `**Ansatz:** Jede Grundlösung $\\vec v_i e^{\\lambda_i t}$ mit $\\text{Re}(\\lambda_i) > 0$ wächst unbeschränkt. Auch wenn andere Moden gedämpft sind, dominiert der wachsende.

**Rechnung:** Für eine generische Anfangsbedingung ist $C_i \\neq 0$ für den instabilen Mode — dann divergiert der Beitrag $C_i \\vec v_i e^{\\lambda_i t}$.

**Probe:** Nur spezielle AWP (orthogonal zum instabilen Eigenvektor) bleiben beschränkt — diese Menge hat Maß null.

**Typischer Fehler:** Nur den größten Eigenwert betrachten und dessen Kollegen ignorieren. Für Stabilität müssen *alle* Eigenwerte $\\text{Re}(\\lambda) < 0$ erfüllen.`,
        [
          'Stabilität: *alle* Eigenwerte $\\text{Re}(\\lambda) < 0$.',
          'Ein einziger „schlechter" Eigenwert reicht zur Instabilität.',
          'Formal: maximaler Realteil = Stabilitätsrate.',
        ],
      ),
      mc(
        'Welches System ist *grenzstabil* (stabil, aber nicht asymptotisch stabil)?',
        [
          'Eigenwerte $\\lambda_{1,2} = \\pm 2i$',
          'Eigenwerte $\\lambda_1 = -1$, $\\lambda_2 = -3$',
          'Eigenwerte $\\lambda_1 = 2$, $\\lambda_2 = -1$',
          'Eigenwerte $\\lambda_{1,2} = -1 \\pm i$',
        ],
        0,
        `**Ansatz:** Grenzstabil = alle Eigenwerte haben $\\text{Re}(\\lambda) \\leq 0$ und mindestens einer hat $\\text{Re}(\\lambda) = 0$, wobei dieser einfach ist.

**Rechnung:** Rein imaginäre Eigenwerte $\\pm 2i$: $\\text{Re}(\\lambda) = 0$. Lösung ist reine Schwingung (beschränkt, aber klingt nicht ab).

**Probe:** $\\vec y = C_1\\vec v_1 \\cos(2t) + C_2\\vec v_2 \\sin(2t)$ — bleibt beschränkt, aber $\\vec y \\not\\to \\vec 0$.

**Typischer Fehler:** Grenzstabil mit asymptotisch stabil gleichsetzen. Grenzstabil bedeutet *beschränkt*, nicht *abklingend*.`,
        [
          'Asymptotisch stabil: $\\text{Re}(\\lambda) < 0$ strikt.',
          'Grenzstabil: $\\text{Re}(\\lambda) \\leq 0$ mit Gleichheit bei einfachen Eigenwerten.',
          'Instabil: irgendein $\\text{Re}(\\lambda) > 0$.',
        ],
        {
          1: 'Alle negativ → asymptotisch stabil, nicht nur grenzstabil. Beide klingen ab.',
          2: '$\\lambda_1 = 2 > 0$ → instabil, nicht (grenz-)stabil.',
          3: 'Realteil $-1 < 0$ → asymptotisch stabil (gedämpfte Schwingung).',
        },
      ),
      ni(
        'Ein $2\\times 2$-System hat Eigenwerte $\\lambda_1 = -3$ und $\\lambda_2 = -0{,}5$. Der *langsamste* Abklingmode dominiert das Langzeitverhalten. Zu welcher Zeit $t$ ist dieser Mode auf $1/e \\approx 0{,}368$ seines Startwerts abgeklungen?',
        2, 0.01, '',
        `**Ansatz:** Zeitkonstante $\\tau = 1/|\\lambda|$ für Mode mit kleinstem $|\\lambda|$.

**Rechnung:** Langsamster Mode: $\\lambda_2 = -0{,}5$, $\\tau = 1/0{,}5 = 2$. Nach $t=2$ ist $e^{-0{,}5\\cdot 2} = e^{-1} \\approx 0{,}368$.

**Probe:** Faktor $1/e$ erreicht nach genau einer Zeitkonstanten, definitionsgemäß.

**Typischer Fehler:** Falsche Zuordnung: „schnellster Abklingmode" statt „langsamster". Für das Langzeitverhalten dominiert der langsamste.`,
        [
          'Zeitkonstante $\\tau = 1/|\\text{Re}(\\lambda)|$.',
          'Langsamster Mode hat das kleinste $|\\lambda|$.',
          'Nach $\\tau$ Sekunden: Signal auf $1/e$ abgeklungen.',
        ],
      ),
      matching(
        'Ordne jedem Eigenwert-Spektrum den Stabilitätstyp zu.',
        [
          { left: 'Alle $\\text{Re}(\\lambda_i) < 0$', right: 'Asymptotisch stabil: $\\vec y \\to \\vec 0$' },
          { left: 'Ein $\\text{Re}(\\lambda_i) > 0$', right: 'Instabil: $\\vec y$ wächst unbeschränkt' },
          { left: 'Nur $\\text{Re}(\\lambda_i) \\leq 0$, einfache am Rand', right: 'Grenzstabil: beschränkt, aber nicht abklingend' },
          { left: 'Alle $\\text{Re}(\\lambda_i) = 0$, linear unabhängige Eigenvektoren', right: 'Reine Schwingung (Zentrumstyp)' },
        ],
        `**Ansatz:** Klassifikation nach Realteil des Eigenwertspektrums.

**Rechnung:** Kriterien aus der Theorie dynamischer Systeme. Doppelte Eigenwerte mit $\\text{Re}(\\lambda) = 0$ sind potenziell instabil (polynomielles Wachstum, z.B. $t\\cdot e^{0\\cdot t} = t$).

**Probe:** Im Phasenporträt sichtbar: Knoten (asymp.), Sattel (inst.), Zentrum (grenzstabil), Spirale (asymp. oder inst. je nach Realteil).

**Typischer Fehler:** Grenzstabilität mit asymptotischer Stabilität vermengen. Nur Abklingmoden (strikt negativ) sind asymptotisch stabil.`,
        [
          'Klassifizierung rein über $\\text{Re}(\\lambda)$.',
          'Rand-Eigenwerte ($\\text{Re} = 0$) nur bei einfacher Vielfachheit harmlos.',
          'Mehrfache Eigenwerte am Rand → polynomielles Wachstum.',
        ],
      ),
    ],

    // ── [5] Komplexe EW: α ± iβ → Real-/Imaginärteil nehmen ───────────
    5: [
      mc(
        'System mit komplex konjugiertem EW-Paar $\\lambda_{1,2} = -1 \\pm 2i$ und (komplexem) Eigenvektor $\\vec v = \\begin{pmatrix}1\\\\i\\end{pmatrix}$ zu $\\lambda_1$. Welche reelle Lösung gehört dazu?',
        [
          '$\\vec y = C_1 e^{-t}\\begin{pmatrix}\\cos 2t \\\\ -\\sin 2t\\end{pmatrix} + C_2 e^{-t}\\begin{pmatrix}\\sin 2t \\\\ \\cos 2t\\end{pmatrix}$',
          '$\\vec y = C_1 e^{-t}\\begin{pmatrix}1\\\\i\\end{pmatrix} + C_2 e^{-t}\\begin{pmatrix}1\\\\-i\\end{pmatrix}$',
          '$\\vec y = e^{-t}\\begin{pmatrix}\\cos 2t \\\\ \\sin 2t\\end{pmatrix}$',
          '$\\vec y = C_1\\cos 2t \\begin{pmatrix}1\\\\1\\end{pmatrix} + C_2\\sin 2t \\begin{pmatrix}1\\\\-1\\end{pmatrix}$',
        ],
        0,
        `**Ansatz:** Reelle Grundlösungen aus Real- und Imaginärteil von $\\vec v e^{\\lambda_1 t}$ extrahieren.

**Rechnung:** $\\vec v e^{\\lambda_1 t} = \\begin{pmatrix}1\\\\i\\end{pmatrix} e^{(-1+2i)t} = e^{-t}\\begin{pmatrix}1\\\\i\\end{pmatrix}(\\cos 2t + i\\sin 2t) = e^{-t}\\begin{pmatrix}\\cos 2t + i\\sin 2t\\\\ i\\cos 2t - \\sin 2t\\end{pmatrix}$. Realteil: $e^{-t}\\begin{pmatrix}\\cos 2t\\\\-\\sin 2t\\end{pmatrix}$; Imaginärteil: $e^{-t}\\begin{pmatrix}\\sin 2t\\\\\\cos 2t\\end{pmatrix}$.

**Probe:** Beide erfüllen das reelle System — lineare Kombination ergibt die allgemeine reelle Lösung.

**Typischer Fehler:** Komplexe Lösung $\\vec v e^{\\lambda t}$ direkt als reelle Lösung nehmen. Sie ist komplex; nur Real- und Imaginärteil sind reell.`,
        [
          'Eine komplexe Grundlösung $\\vec v e^{\\lambda_1 t}$ liefert zwei reelle: Re und Im.',
          'Multiplikation $\\vec v \\cdot e^{\\lambda t}$ mit $\\lambda = \\alpha + i\\beta$ und Euler-Formel.',
          'Die zweite konjugierte Grundlösung bringt keine neue Information.',
        ],
        {
          1: 'Die komplexe Form ist korrekt, aber nicht reell. Für eine reelle Lösung muss man Real- und Imaginärteil trennen.',
          2: 'Das ist nur eine partikuläre Lösung mit bestimmter Konstante; die allgemeine Lösung hat 2 freie Parameter.',
          3: 'Eigenvektor nicht aus der Rechnung, sondern geraten. Die Komponenten $(\\cos, \\sin)$ und $(\\sin, \\cos)$ tauchen *gemischt* aus $\\vec v$ und $e^{i\\beta t}$ auf.',
        },
      ),
      tf(
        'Bei einer reellen Matrix $A$ treten komplexe Eigenwerte immer in konjugierten Paaren auf.',
        true,
        `**Ansatz:** Charakteristisches Polynom $p(\\lambda) = \\det(A - \\lambda I)$ hat *reelle* Koeffizienten, weil $A$ reell ist.

**Rechnung:** Fundamentalsatz der Algebra + reelle Koeffizienten: nicht-reelle Nullstellen kommen als komplex konjugierte Paare.

**Probe:** $2\\times 2$-Beispiel: $A = \\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ → $\\lambda^2+1=0$ → $\\lambda = \\pm i$. Konjugiertes Paar.

**Typischer Fehler:** Einen einzelnen komplexen Eigenwert als korrekt akzeptieren. Bei reeller Matrix gibt's *immer* das konjugierte Pendant.`,
        [
          'Reelle Koeffizienten im charakteristischen Polynom.',
          'Komplexe Nullstellen treten paarweise konjugiert auf.',
          'Aus $\\lambda = \\alpha + i\\beta$ folgt auch $\\bar\\lambda = \\alpha - i\\beta$.',
        ],
      ),
      ni(
        'Ein gedämpftes Schwingungssystem hat Eigenwerte $\\lambda_{1,2} = -2 \\pm 3i$. Welche Schwingungsfrequenz $\\omega$ hat die Lösung?',
        3, 0.001, '',
        `**Ansatz:** Imaginärteil der Eigenwerte = Kreisfrequenz $\\omega$.

**Rechnung:** $\\lambda = \\alpha + i\\omega$ mit $\\alpha = -2$, $\\omega = 3$. Die Lösung enthält Terme $e^{-2t}\\cos(3t)$ und $e^{-2t}\\sin(3t)$.

**Probe:** Dämpfungsrate $|\\alpha| = 2$ (Hüllkurve klingt ab), Schwingungskreisfrequenz $\\omega = 3$ rad/s.

**Typischer Fehler:** Realteil und Imaginärteil verwechseln. Kreisfrequenz ist *immer* der Imaginärteil.`,
        [
          'Lösung $\\propto e^{\\alpha t}(\\cos\\omega t + i\\sin\\omega t)$.',
          'Imaginärteil von $\\lambda$ = Kreisfrequenz $\\omega$.',
          'Hier: $\\omega = 3$ rad/s.',
        ],
      ),
      mc(
        'Ein konjugiertes Eigenwert-Paar liefert wie viele reelle linear unabhängige Grundlösungen?',
        [
          '2 (Realteil und Imaginärteil)',
          '1 (nur eine komplexe Lösung)',
          '4 (zwei pro Eigenwert)',
          '0 (komplexe Eigenwerte liefern keine reelle Lösung)',
        ],
        0,
        `**Ansatz:** Eine komplexe Grundlösung $\\vec v e^{\\lambda t}$ zerlegt sich in Realteil + $i\\cdot$ Imaginärteil.

**Rechnung:** Realteil und Imaginärteil sind beide reelle Lösungen der DGL (da die Operation linear ist und $A$ reell). Sie sind außerdem linear unabhängig, weil die komplexe Lösung auf die zwei Funktionen projiziert wird.

**Probe:** Konjugierter Partner $\\overline{\\vec v e^{\\lambda t}} = \\bar{\\vec v} e^{\\bar\\lambda t}$ liefert dieselben zwei reellen Funktionen (Real- und negativer Imaginärteil), also nichts Neues.

**Typischer Fehler:** Von 4 reellen Lösungen ausgehen, weil 2 komplexe Eigenwerte vorliegen. Korrekter Zähltrick: jedes Paar zählt *einmal* und liefert 2 reelle.`,
        [
          'Komplexe Grundlösung = Realteil + $i\\cdot$ Imaginärteil.',
          'Beide Teile sind reelle Lösungen, linear unabhängig.',
          'Konjugierter Eigenwert liefert dieselben Informationen.',
        ],
        {
          1: 'Die komplexe Lösung allein ist nicht reell, aber aus ihr lassen sich zwei reelle extrahieren.',
          2: 'Das würde zu $2n$ Konstanten bei $n$-dim-System führen — zu viele. Jedes Paar liefert 2, nicht 4.',
          3: 'Falsch: aus komplexen Eigenwerten lassen sich reelle Lösungen per Euler-Formel gewinnen. Gerade das ist der Standardweg.',
        },
      ),
      sorting(
        'Sortiere die Schritte zur Berechnung reeller Lösungen bei komplexen Eigenwerten.',
        [
          'Charakteristisches Polynom lösen; komplexes Paar $\\lambda = \\alpha \\pm i\\beta$ identifizieren.',
          'Komplexen Eigenvektor $\\vec v$ zu $\\lambda_1 = \\alpha + i\\beta$ berechnen.',
          'Komplexe Grundlösung $\\vec v e^{\\lambda_1 t}$ aufstellen und per Euler-Formel expandieren.',
          'Real- und Imaginärteil als zwei reelle linear unabhängige Grundlösungen extrahieren.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Standardablauf für reelle Lösungen bei komplexem EW-Paar.

**Rechnung:** Eigenwerte → Eigenvektor → Ausdruck → Re/Im-Trennung. Der zweite Eigenwert $\\lambda_2 = \\bar\\lambda_1$ wird nicht separat gebraucht — sein Beitrag wird durch Re/Im abgedeckt.

**Probe:** Sanity-Check: Zwei reelle Grundlösungen pro konjugiertem Paar — stimmt mit der Dimensionsrechnung.

**Typischer Fehler:** Schritt 4 vergessen und mit komplexen Funktionen weiterrechnen, obwohl reelle AWP vorliegen. Die Lösung muss am Ende reell sein.`,
        [
          'Nur einen der beiden konjugierten Eigenwerte bearbeiten.',
          'Euler-Formel $e^{i\\beta t} = \\cos\\beta t + i\\sin\\beta t$ verwenden.',
          'Realteil und Imaginärteil → zwei reelle Grundlösungen.',
        ],
      ),
    ],
  },


  // ────────────────────────────────────────────────────────────────────────
  // dgl-3-1 — Prüfung: DGL 1. Ordnung  (6 subGoals)
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-3-1': {

    // ── [0] Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati? ──
    0: [
      mc(
        '[PRÜFUNG] Welchen Typ hat $y\' + \\frac{y}{x} = x^2 y^3$?',
        [
          'Bernoulli-DGL (mit $n = 3$)',
          'Lineare DGL 1. Ordnung',
          'Exakte DGL',
          'Riccati-DGL',
        ],
        0,
        `**Ansatz:** Vergleiche die Struktur mit den Standardformen. Bernoulli hat die Form $y\' + p(x)\\,y = q(x)\\,y^n$ mit $n\\neq 0,1$; linear ist $y\'+p(x)y=q(x)$; Riccati hat zusätzlich einen $y^2$-Term und einen freien Summanden: $y\'=a(x)y^2+b(x)y+c(x)$.

**Rechnung:** Hier: $y\' + \\frac{1}{x}y = x^2 \\cdot y^3$. Die rechte Seite enthält $y^3$, also nichtlinear in $y$, aber strukturgleich zu Bernoulli mit $p(x)=1/x$, $q(x)=x^2$, $n=3$. Substitution $u = y^{1-n} = y^{-2}$ linearisiert.

**Probe:** Test-Matching: Linear bräuchte $y^1$ rechts — fällt weg, da $y^3$ auftaucht. Exakt bräuchte Form $M\\,dx+N\\,dy=0$ mit $M_y=N_x$ — hier erst umzuschreiben. Riccati bräuchte $y^2$, nicht $y^3$. Bernoulli passt eindeutig.

**Typischer Fehler:** Alles, was in $y$ nichtlinear ist, reflexartig als „nichtlinear, also nicht lösbar" einordnen. Bernoulli ist der klassische Fall, der über Substitution doch linear wird.`,
        [
          'Stell die DGL in Standardform und schau auf den Potenz-Exponenten von $y$ auf der rechten Seite.',
          'Bernoulli: $y\' + p(x)\\,y = q(x)\\,y^n$ mit $n\\neq 0,1$.',
          'Riccati hätte auch $y^2$ und einen freien Summanden.',
        ],
        {
          1: 'Linear hieße $y\' + p(x)y = q(x)$ — also $y$ nur in 1. Potenz, keine $y^n$-Faktoren rechts. Der Term $x^2 y^3$ macht die DGL aber nichtlinear in $y$.',
          2: 'Exakt bezieht sich auf die Differentialform $M(x,y)\\,dx + N(x,y)\\,dy = 0$ mit $M_y = N_x$. Die DGL ist in $y\'$-Form gegeben, und selbst nach Umschreiben fehlt die Integrabilitätsbedingung.',
          3: 'Riccati hätte die Form $y\' = a(x)y^2 + b(x)y + c(x)$ (Polynom in $y$ bis Grad 2). Hier steckt $y^3$, nicht $y^2$, und auch kein freier Absolutterm — also Bernoulli.',
        },
      ),
      matching(
        '[PRÜFUNG] Ordne jede DGL ihrem Typ zu.',
        [
          { left: '$y\' = x \\cdot (1 + y^2)$', right: 'Trennbar' },
          { left: '$y\' + x y = \\sin x$', right: 'Lineare DGL 1. Ordnung' },
          { left: '$(2xy)\\,dx + (x^2 + \\cos y)\\,dy = 0$', right: 'Exakte DGL' },
          { left: '$y\' + 2y = y^2 \\cdot e^x$', right: 'Bernoulli-DGL ($n = 2$)' },
        ],
        `**Ansatz:** Strukturtest Punkt für Punkt.

**Rechnung:** (1) $y\'=f(x)\\,g(y)$ mit $f=x$, $g=1+y^2$ — trennbar. (2) $y\'+p(x)y=q(x)$ mit $p=x$, $q=\\sin x$ — linear. (3) $M=2xy$, $N=x^2+\\cos y$, $M_y=2x$, $N_x=2x$ — exakt. (4) $y\'+2y=e^x \\cdot y^2$ — Bernoulli mit $n=2$.

**Probe:** Jeder Typ wird mit seiner Methode gelöst — Trennung, int. Faktor, Potentialfunktion, Substitution $u=y^{-1}$.

**Typischer Fehler:** Trennbare DGL nicht als solche erkannt, weil die rechte Seite als ein Block $x(1+y^2)$ wahrgenommen wird. Formal trennbar ist sie, sobald man sie als Produkt $f(x)\\cdot g(y)$ schreiben kann.`,
        [
          'Trennbar = faktorisierbar in $f(x) \\cdot g(y)$.',
          'Linear in $y$ und $y\'$ mit getrennter Inhomogenität $q(x)$?',
          'Bei $M\\,dx + N\\,dy = 0$: $M_y = N_x$ testen.',
        ],
      ),
      tf(
        '[PRÜFUNG] Die DGL $y\' = y^2 + x$ ist eine Riccati-DGL.',
        true,
        `**Ansatz:** Riccati: $y\'=a(x)y^2+b(x)y+c(x)$. Hier $a=1$, $b=0$, $c=x$.

**Rechnung:** Alle Komponenten passen in das Riccati-Schema; fehlende $y$-Terme sind mit Koeffizient $0$ zulässig. Bernoulli wäre nur, wenn kein freier Summand $c(x)$ vorhanden wäre.

**Probe:** $y=y_p$ einsetzen, dann $u=1/(y-y_p)$ → lineare DGL für $u$. Das ist die Standard-Riccati-Methode und funktioniert hier.

**Typischer Fehler:** Weil $y^1$-Term fehlt, wird die DGL nicht als Riccati erkannt. Der $y^1$-Term darf aber mit Koeffizient $0$ auftreten.`,
        [
          'Riccati erlaubt $y^2$-Term *und* freien $c(x)$-Summanden.',
          'Fehlende Terme haben Koeffizient $0$ — sind aber formal vorhanden.',
          'Bernoulli hätte $c(x) = 0$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche DGL ist *nicht* trennbar?',
        [
          '$y\' = x + y$',
          '$y\' = x \\cdot e^y$',
          '$y\' = \\frac{\\sin x}{y}$',
          '$y\' = \\sqrt{x}\\cdot(1+y)$',
        ],
        0,
        `**Ansatz:** Trennbar bedeutet $y\' = f(x)\\cdot g(y)$. Eine *Summe* $x+y$ ist nicht als Produkt einer reinen $x$- und einer reinen $y$-Funktion schreibbar.

**Rechnung:** (a) $y\'=x+y$ — Summe, nicht faktorisierbar (aber *linear*, mit int. Faktor $e^{-x}$). (b) $x\\cdot e^y$ — trennbar. (c) $\\sin x \\cdot \\tfrac{1}{y}$ — trennbar. (d) $\\sqrt{x}\\cdot(1+y)$ — trennbar.

**Probe:** Test: Lässt sich $\\frac{dy}{dx}=\\dots$ nach Variablen trennen? Bei $x+y$ nein — beim Dividieren durch $y$ bleibt $x/y$ stehen, das ist kein Produkt.

**Typischer Fehler:** $y\'=x+y$ als „trennbar durch $\\frac{dy}{x+y}=dx$" behandeln. Aber $\\int \\frac{dy}{x+y}$ hängt von $x$ ab — das ist keine reine $y$-Stammfunktion.`,
        [
          'Trennbar = Produkt $f(x)\\cdot g(y)$, nicht Summe $f(x)+g(y)$.',
          'Ein Summenterm $x+y$ lässt sich nicht faktorisieren.',
          '$y\'=x+y$ ist aber linear: $y\'-y=x$.',
        ],
        {
          1: 'Trennbar: $\\frac{dy}{e^y}=x\\,dx$, also $-e^{-y}=\\tfrac{x^2}{2}+C$. Das klappt, weil $e^y$ als reiner $y$-Faktor separierbar ist.',
          2: 'Trennbar: $y\\,dy=\\sin x\\,dx$, also $\\tfrac{y^2}{2}=-\\cos x+C$.',
          3: 'Trennbar: $\\frac{dy}{1+y}=\\sqrt{x}\\,dx$, also $\\ln|1+y|=\\tfrac{2}{3}x^{3/2}+C$.',
        },
      ),
      sorting(
        '[PRÜFUNG] Sortiere die DGL nach dem Grad der $y$-Nichtlinearität (rechts) von linear → quadratisch → kubisch.',
        [
          '$y\' + 2y = \\cos x$',
          '$y\' = x y^2 + 1$',
          '$y\' + y = y^3 \\cdot e^x$',
        ],
        [0, 1, 2],
        `**Ansatz:** $y$-Exponent auf der rechten Seite zählen.

**Rechnung:** (a) $y^1$ → linear. (b) $y^2$ → Riccati (quadratisch in $y$). (c) $y^3$ → Bernoulli mit $n=3$ (kubisch in $y$).

**Probe:** Lösungsmethoden passen zur Komplexität: linear mit int. Faktor, Riccati über Substitution $u=1/(y-y_p)$, Bernoulli über $u=y^{1-n}$ — mit steigendem Aufwand.

**Typischer Fehler:** Die Ordnung der DGL (hier überall 1. Ordnung) mit der $y$-Nichtlinearität verwechseln. „1. Ordnung" bezieht sich auf die höchste Ableitung, nicht auf die Potenz von $y$.`,
        [
          'Potenz von $y$ auf der rechten Seite ist das Kriterium.',
          'Linear = $y^1$, Riccati = $y^2 + $ freier Term, Bernoulli = $y^n$.',
          'Ordnung der DGL ≠ Grad in $y$.',
        ],
      ),
    ],

    // ── [1] Trennbar: ∫dy/g(y) = ∫f(x)dx + C ──────────────────────────
    1: [
      mc(
        '[PRÜFUNG] Löse $y\' = \\frac{x}{y}$ allgemein.',
        [
          '$y^2 = x^2 + C$',
          '$y = x + C$',
          '$y^2 = 2x + C$',
          '$y^2 = \\frac{x^2}{2} + C$',
        ],
        0,
        `**Ansatz:** Trennen: $y\\,dy = x\\,dx$.

**Rechnung:** Integrieren beider Seiten: $\\int y\\,dy = \\tfrac{y^2}{2}$, $\\int x\\,dx = \\tfrac{x^2}{2}$. Also $\\tfrac{y^2}{2}=\\tfrac{x^2}{2}+K$. Mal $2$: $y^2=x^2+C$ (mit $C=2K$).

**Probe:** Implizit ableiten: $2y\\,y\'=2x$, also $y\'=x/y$ ✓.

**Typischer Fehler:** Faktor $\\tfrac{1}{2}$ auf beiden Seiten vergessen und dadurch Koeffizient auf einer Seite vergessen mitzuziehen — weil beide Seiten denselben Faktor haben, kürzt er sich heraus.`,
        [
          'Bring alle $y$ nach links, alle $x$ nach rechts.',
          'Integriere: $\\int y\\,dy = y^2/2$, $\\int x\\,dx = x^2/2$.',
          'Mal $2$ beide Seiten: $y^2 = x^2 + C$.',
        ],
        {
          1: 'Das ist die Lösung von $y\'=1$, nicht von $y\'=x/y$. Der $y$-Faktor im Nenner darf nicht ignoriert werden.',
          2: 'Faktor $\\tfrac12$ wurde nur auf einer Seite verrechnet. Integriere $\\int x\\,dx = \\tfrac{x^2}{2}$, nicht $x$ — sonst bleibt nach Multiplikation mit $2$ ein Faktor $2$ übrig.',
          3: 'Faktor auf der falschen Seite gekürzt. Nach $\\tfrac{y^2}{2}=\\tfrac{x^2}{2}+K$ ergibt Mal-$2$ die Form $y^2=x^2+C$, *nicht* $y^2=\\tfrac{x^2}{2}$.',
        },
      ),
      ni(
        '[PRÜFUNG] AWP: $y\' = \\frac{y}{x}$, $y(1) = 4$. Welchen Wert hat $y(2)$?',
        8, 0.01, '',
        `**Ansatz:** Trennen: $\\frac{dy}{y}=\\frac{dx}{x}$.

**Rechnung:** $\\ln|y|=\\ln|x|+K$, also $|y|=e^K\\cdot|x|=A|x|$. Allgemein $y=Ax$. AWP: $4=A\\cdot 1$ → $A=4$, also $y=4x$. Bei $x=2$: $y(2)=8$.

**Probe:** $y=4x$: $y\'=4=\\frac{4x}{x}=\\frac{y}{x}$ ✓; $y(1)=4$ ✓.

**Typischer Fehler:** Die Konstante nach Integration vergessen oder das Vorzeichen von $\\ln|y|$ anders als $\\ln|x|$ behandeln. Beide Seiten haben denselben Logarithmus-Aufbau, also auch vergleichbare Konstante.`,
        [
          '$\\frac{dy}{y}=\\frac{dx}{x}$ integrieren.',
          '$\\ln|y|=\\ln|x|+K$ in $y = A\\cdot x$ umschreiben.',
          'Anfangsbedingung $y(1)=4$ → $A=4$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei der DGL $y\' = g(y)$ (reine $y$-Abhängigkeit) erhält man die Lösung durch $x = \\int \\frac{dy}{g(y)} + C$.',
        true,
        `**Ansatz:** $\\frac{dy}{dx}=g(y)$ → $\\frac{dy}{g(y)}=dx$ → beide Seiten integrieren.

**Rechnung:** $\\int\\frac{dy}{g(y)}=\\int 1\\,dx = x + C$. Also $x$ ausgedrückt als Funktion von $y$ — die Rollen von abhängiger und unabhängiger Variable sind vertauscht, aber die Lösung ist korrekt.

**Probe:** Beispiel $y\'=y$: $\\int\\frac{dy}{y}=\\ln|y|=x+C$ → $y=e^{x+C}$ ✓.

**Typischer Fehler:** $\\int 1\\,dx$ weglassen und statt $x+C$ nur $C$ schreiben — dann verschwindet die $x$-Abhängigkeit.`,
        [
          'Autonome DGL: rechte Seite nur von $y$ abhängig.',
          'Trennung wie gewohnt: $\\int\\frac{dy}{g(y)}=\\int 1\\,dx = x+C$.',
          'Die Lösung ist meist in *impliziter* Form.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welches ist die allgemeine Lösung von $y\' = y \\cdot \\cos x$?',
        [
          '$y = C \\cdot e^{\\sin x}$',
          '$y = C \\cdot \\sin x$',
          '$y = e^{\\cos x} + C$',
          '$y = C \\cdot e^{-\\sin x}$',
        ],
        0,
        `**Ansatz:** Trennen: $\\frac{dy}{y}=\\cos x\\,dx$.

**Rechnung:** $\\ln|y|=\\sin x+K$ → $|y|=e^K\\cdot e^{\\sin x}=C\\cdot e^{\\sin x}$ (mit $C>0$; negatives Vorzeichen erlaubt, wenn man $C\\in\\mathbb{R}$ zulässt). Lösung: $y=C\\cdot e^{\\sin x}$.

**Probe:** $y\'=C\\cdot\\cos x\\cdot e^{\\sin x}=y\\cdot\\cos x$ ✓.

**Typischer Fehler:** $\\int\\cos x\\,dx=\\sin x$ mit $-\\sin x$ oder mit $\\cos x$ verwechselt. Ableitung: $(\\sin x)\'=\\cos x$, daher Stammfunktion $\\sin x$.`,
        [
          'Trennen und integrieren.',
          '$\\int\\cos x\\,dx=\\sin x$ (nicht $\\cos x$!).',
          '$\\ln|y|=\\sin x+K$ → $y=C\\cdot e^{\\sin x}$.',
        ],
        {
          1: 'Hier wurde Integration mit Multiplikation verwechselt. $\\int \\frac{dy}{y} = \\ln|y|$, also muss am Ende $e^{\\dots}$ stehen — keine reine Sinusfunktion.',
          2: 'Vorzeichenfehler und fehlendes $e$: $\\int\\cos x\\,dx=+\\sin x$ und die Konstante tritt *multiplikativ* nach Exponentiation auf, nicht additiv.',
          3: 'Vorzeichenfehler bei der Integration von $\\cos x$: Das richtige Ergebnis ist $+\\sin x$, nicht $-\\sin x$. $-\\sin x$ wäre die Stammfunktion von $-\\cos x$.',
        },
      ),
      ni(
        '[PRÜFUNG] Löse $y\' = 1 + y^2$, $y(0) = 0$. Welchen Wert hat $y$ bei $x = \\pi/6$? (auf 4 Dezimalstellen)',
        0.5774, 0.001, '',
        `**Ansatz:** Trennbar: $\\frac{dy}{1+y^2}=dx$.

**Rechnung:** $\\arctan y = x + C$. AWP $y(0)=0$: $\\arctan 0 = 0 = 0 + C$ → $C=0$. Lösung: $y = \\tan x$. Bei $x=\\pi/6$: $y=\\tan(\\pi/6)=1/\\sqrt{3}\\approx 0{,}5774$.

**Probe:** $y=\\tan x$: $y\'=\\sec^2 x = 1+\\tan^2 x = 1+y^2$ ✓; $y(0)=0$ ✓.

**Typischer Fehler:** $\\int\\frac{dy}{1+y^2}$ als $\\ln(1+y^2)$ statt $\\arctan y$ — das wäre $\\int\\frac{2y\\,dy}{1+y^2}$. Der Zähler ist hier aber $1$, nicht $2y$.`,
        [
          'Integration: $\\int \\frac{dy}{1+y^2} = \\arctan y$ (nicht $\\ln$!).',
          'Löse nach $y$ auf: $y = \\tan(x + C)$.',
          '$\\tan(\\pi/6) = 1/\\sqrt{3}$.',
        ],
      ),
    ],

    // ── [2] Exakte DGL: M_y = N_x, Potentialfunktion F ────────────────
    2: [
      mc(
        '[PRÜFUNG] Ist $(3x^2 y + 2)\\,dx + (x^3 + 4y)\\,dy = 0$ exakt, und wie lautet die Potentialfunktion $F(x,y)$?',
        [
          'Ja exakt, $F = x^3 y + 2x + 2y^2$',
          'Ja exakt, $F = x^3 y + 2x$',
          'Nicht exakt',
          'Ja exakt, $F = 3x^2 y^2 + 2xy + 4y$',
        ],
        0,
        `**Ansatz:** $M=3x^2y+2$, $N=x^3+4y$. Exaktheit: $M_y\\stackrel{?}{=}N_x$.

**Rechnung:** $M_y=3x^2$, $N_x=3x^2$ ✓ exakt. Potential: $F_x=M=3x^2y+2$ → $F=\\int(3x^2y+2)\\,dx=x^3y+2x+h(y)$. Dann $F_y=x^3+h\'(y)\\stackrel{!}{=}N=x^3+4y$, also $h\'(y)=4y$ → $h(y)=2y^2$. Ergebnis: $F=x^3y+2x+2y^2$.

**Probe:** $F_x=3x^2y+2=M$ ✓, $F_y=x^3+4y=N$ ✓. Lösung: $x^3y+2x+2y^2=C$.

**Typischer Fehler:** Beim Nachziehen von $h(y)$ nur den ursprünglichen $y$-Anteil kopieren, den $\\int 4y\\,dy = 2y^2$ aber vergessen.`,
        [
          'Erst Exaktheit testen ($M_y = N_x$).',
          'Dann $F = \\int M\\,dx + h(y)$ ansetzen.',
          '$h\'(y)$ aus $F_y = N$ bestimmen.',
        ],
        {
          1: 'Der $y$-Anteil $h(y) = 2y^2$ wurde vergessen. Ohne ihn ist $F_y = x^3 \\neq N = x^3 + 4y$.',
          2: '$M_y = 3x^2$ und $N_x = 3x^2$ sind identisch — also *ist* die DGL exakt.',
          3: 'Falsche Potentialfunktion. Überprüfe durch Ableiten: $F_x$ sollte $M$ ergeben, $F_y$ sollte $N$ ergeben. Hier: $(3x^2y^2+2xy+4y)_x = 6xy^2+2y \\neq M = 3x^2y+2$.',
        },
      ),
      tf(
        '[PRÜFUNG] Wenn $M_y \\neq N_x$, ist die DGL nicht lösbar.',
        false,
        `**Ansatz:** „Nicht exakt" $\\neq$ „nicht lösbar".

**Rechnung:** Bei $M_y\\neq N_x$ kann man oft einen integrierenden Faktor $\\mu(x)$ oder $\\mu(y)$ finden, sodass $\\mu M\\,dx+\\mu N\\,dy=0$ exakt wird. Typische Kriterien: $(M_y-N_x)/N$ hängt nur von $x$ ab → $\\mu(x)$; $(N_x-M_y)/M$ nur von $y$ → $\\mu(y)$.

**Probe:** Beispiel $y\\,dx+(2x-ye^y)\\,dy=0$: $M_y=1$, $N_x=2$, nicht exakt. Aber $\\mu(y)=y$ macht's exakt.

**Typischer Fehler:** Vorschnell aufgeben, wenn die Exaktheitsbedingung scheitert. Integrierender Faktor ist oft noch ein Weg.`,
        [
          'Exaktheit ist nur *eine* Methode — andere Methoden bleiben möglich.',
          'Integrierender Faktor $\\mu$ kann nicht-exakt → exakt machen.',
          'Auch Trennung oder Linearität kann funktionieren.',
        ],
      ),
      ni(
        '[PRÜFUNG] Für die exakte DGL $(2xy)\\,dx + (x^2 + 1)\\,dy = 0$ mit $y(1) = 2$: Welchen Wert hat die Integrationskonstante $C$ in der impliziten Lösung $x^2 y + y = C$?',
        4, 0.001, '',
        `**Ansatz:** Exaktheit prüfen, Potential $F$ aufstellen, AWP einsetzen.

**Rechnung:** $M_y=2x=N_x$ ✓ exakt. $F=\\int 2xy\\,dx=x^2y+h(y)$; $F_y=x^2+h\'(y)=x^2+1$ → $h\'(y)=1$ → $h(y)=y$. Also $F=x^2y+y$. AWP: $F(1,2)=1\\cdot 2+2=4$ → $C=4$.

**Probe:** Lösung $x^2y+y=4$ bei $(1,2)$: $1\\cdot 2+2=4$ ✓.

**Typischer Fehler:** $h(y)$ beim Aufintegrieren vergessen — dann fehlt am Ende der Term $+y$ und $C=2$ (falsch).`,
        [
          'Potential: $F = x^2 y + y$ (Herleitung über $F_x = M$, $F_y = N$).',
          'Einsetzen $x = 1$, $y = 2$ in $F$ liefert $C$.',
          '$F(1,2) = 1 \\cdot 2 + 2 = 4$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche DGL ist *nicht* exakt?',
        [
          '$(y + 2x)\\,dx + (2y)\\,dy = 0$',
          '$(2xy)\\,dx + (x^2)\\,dy = 0$',
          '$(y\\cos x)\\,dx + (\\sin x)\\,dy = 0$',
          '$(e^y)\\,dx + (x e^y)\\,dy = 0$',
        ],
        0,
        `**Ansatz:** Für jede DGL $M_y$ und $N_x$ vergleichen.

**Rechnung:** (a) $M=y+2x$, $M_y=1$; $N=2y$, $N_x=0$. $1\\neq 0$ → *nicht* exakt. (b) $M_y=2x$, $N_x=2x$ ✓ exakt. (c) $M_y=\\cos x$, $N_x=\\cos x$ ✓ exakt. (d) $M_y=e^y$, $N_x=e^y$ ✓ exakt.

**Probe:** Bei (a) könnte man integrierenden Faktor $\\mu(y)$ suchen: $(N_x-M_y)/M = -1/(y+2x)$ hängt noch von $x$ ab → auch $\\mu(y)$ scheitert. Andere Methoden nötig.

**Typischer Fehler:** Automatisch annehmen, dass DGL mit „schlichter" rechter Seite exakt sind. Erst $M_y$ und $N_x$ rechnen, dann urteilen.`,
        [
          'Partielle Ableitung nur nach der Zielvariable bilden.',
          '$M_y = \\partial_y M$ — alle anderen Variablen konstant halten.',
          'Bei konstantem $N$ (hier $2y$ hat $N_x = 0$) ist Exaktheit oft verletzt.',
        ],
        {
          1: 'Exakt: $M_y = 2x = N_x$. Das ist ein klassisches Beispiel einer exakten DGL.',
          2: 'Exakt: $M_y = \\cos x = N_x$. Ableitungen stimmen überein.',
          3: 'Exakt: $M_y = e^y$, $N_x = e^y$.',
        },
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Lösungs-Schritte einer exakten DGL in die richtige Reihenfolge.',
        [
          'Exaktheit prüfen: $M_y \\stackrel{?}{=} N_x$.',
          'Ansatz $F(x,y) = \\int M\\,dx + h(y)$.',
          'Aus $F_y = N$ die Funktion $h(y)$ bestimmen.',
          'Implizite Lösung $F(x,y) = C$ hinschreiben.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Standard-Kochrezept: Test → Ansatz → ergänzen → Lösung.

**Rechnung:** (1) Ohne Exaktheit keine Potentialfunktion. (2) Integriere $M$ nach $x$; Integrationskonstante ist eine Funktion $h(y)$. (3) Setze die $y$-Ableitung gleich $N$, integriere $h\'(y)$ nach $y$. (4) Ergebnis ist implizite Lösung.

**Probe:** Schritt 1 und 2 klassifizieren und vorbereiten; Schritt 3 schließt die Parametrisierung; Schritt 4 fixiert Konstante per AWP.

**Typischer Fehler:** Schritt 1 überspringen und direkt integrieren — wenn die DGL nicht exakt ist, führt die Methode zu einer falschen „Lösung".`,
        [
          'Ohne Exaktheitstest keine gültige Methode.',
          'Integrationskonstante von $\\int M\\,dx$ ist Funktion $h(y)$.',
          '$F_y = N$ fixiert $h\'(y)$.',
        ],
      ),
    ],

    // ── [3] AWP: Konstante C aus y(x₀) = y₀ bestimmen ─────────────────
    3: [
      ni(
        '[PRÜFUNG] AWP $y\' = 2y$, $y(0) = 5$. Welchen Wert hat die Konstante $C$ in der allgemeinen Lösung $y = Ce^{2x}$?',
        5, 0.001, '',
        `**Ansatz:** Allgemeine Lösung ist bekannt; AWP einsetzen.

**Rechnung:** $y(0)=C\\cdot e^0=C\\cdot 1=C$. Gleichsetzen: $C=5$.

**Probe:** $y=5e^{2x}$: $y(0)=5$ ✓, $y\'=10e^{2x}=2y$ ✓.

**Typischer Fehler:** Exponent $e^{2\\cdot 0}=e^0=1$ nicht sauber ausgewertet — mit $e^0 = 0$ (statt $1$) käme $C=\\infty$ oder ein Absurditätsresultat heraus.`,
        [
          '$y(0) = Ce^{0} = C$ — also direkt ablesbar.',
          'Setze $y_0 = 5$ in $y(x_0)$ ein.',
          '$e^0 = 1$ (nicht $0$!).',
        ],
      ),
      mc(
        '[PRÜFUNG] Für $y\' = y$, $y(1) = e^2$: Welche partikuläre Lösung ergibt sich?',
        [
          '$y = e^{x+1}$',
          '$y = e^x$',
          '$y = e^{2x}$',
          '$y = 2e^x$',
        ],
        0,
        `**Ansatz:** Allgemeine Lösung $y=Ce^x$, $C$ aus AWP.

**Rechnung:** $y(1)=Ce^1=e^2$ → $C=e^2/e=e$. Lösung: $y=e\\cdot e^x=e^{x+1}$.

**Probe:** $y(1)=e^{1+1}=e^2$ ✓; $y\'=e^{x+1}=y$ ✓.

**Typischer Fehler:** $C$ als $e^2$ stehen lassen, weil $e^1$ im Nenner übersehen wird. Merke: $e^2/e^1=e^{2-1}=e^1$.`,
        [
          'Allgemeine Lösung: $y = Ce^x$.',
          '$y(1) = Ce$, gleichsetzen mit $e^2$.',
          'Exponentenregel: $e^2 / e = e$.',
        ],
        {
          1: 'Das löst zwar $y\' = y$, erfüllt aber $y(1) = e \\neq e^2$ nicht.',
          2: 'Das löst $y\' = 2y$, nicht $y\' = y$. Ableiten: $(e^{2x})\' = 2e^{2x} = 2y$.',
          3: '$y = 2e^x$: $y(1) = 2e \\neq e^2$ (da $2 \\neq e \\approx 2{,}718$).',
        },
      ),
      tf(
        '[PRÜFUNG] Ein AWP 1. Ordnung hat genau eine Lösung, wenn $f(x,y)$ und $\\partial f/\\partial y$ in einer Umgebung der Anfangswertstelle stetig sind (Picard-Lindelöf).',
        true,
        `**Ansatz:** Existenz- und Eindeutigkeitssatz von Picard-Lindelöf.

**Rechnung:** Stetigkeit von $f$ sichert *Existenz*, Stetigkeit (sogar Lipschitz-Bedingung) von $\\partial f/\\partial y$ sichert *Eindeutigkeit*. Zusammen → genau eine lokale Lösung in einer offenen Umgebung.

**Probe:** Gegenbeispiel-Kontrolle: $y\' = \\sqrt{y}$, $y(0)=0$ hat $\\partial f/\\partial y = 1/(2\\sqrt{y})$, singulär bei $y=0$ — daher mehrere Lösungen ($y=0$ und $y=x^2/4$), was genau die Regel bestätigt.

**Typischer Fehler:** Stetigkeit von $f$ allein als ausreichend ansehen. Für *Eindeutigkeit* muss zusätzlich $\\partial f/\\partial y$ stetig sein (oder Lipschitz).`,
        [
          'Picard-Lindelöf: stetig + Lipschitz → Existenz und Eindeutigkeit.',
          'Nur stetig → nur Existenz (Peano).',
          'Gegenbeispiel: $y\' = \\sqrt{y}$ hat zwei Lösungen für $y(0) = 0$.',
        ],
      ),
      ni(
        '[PRÜFUNG] Lineare DGL $y\' + y = 1$ mit $y(0) = 3$. Welchen Wert hat $y(\\ln 2)$?',
        2, 0.01, '',
        `**Ansatz:** Homogene Lösung + Partikulärlösung, dann AWP einsetzen.

**Rechnung:** $y_h=Ce^{-x}$, $y_p=1$ (Ansatz Konstante: $0+A=1\\Rightarrow A=1$). Allgemein $y=Ce^{-x}+1$. AWP: $C+1=3\\Rightarrow C=2$. Also $y=2e^{-x}+1$. $y(\\ln 2)=2e^{-\\ln 2}+1=2\\cdot\\tfrac{1}{2}+1=1+1=2$.

**Probe:** $y\'(\\ln 2)=-2e^{-\\ln 2}=-1$, $y\'+y=-1+2=1$ ✓; AWP $y(0)=2+1=3$ ✓.

**Typischer Fehler:** $e^{-\\ln 2}=\\tfrac12$ ausmultipliziert als $-2\\ln 2$ oder falsch. Merke: $e^{-\\ln a}=1/a$.`,
        [
          'Allgemeine Lösung: $y = Ce^{-x} + 1$.',
          '$C = 2$ aus AWP.',
          '$e^{-\\ln 2} = 1/2$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Gegeben AWP $y\' = 2xy$, $y(1) = e$. Welche Lösung?',
        [
          '$y = e^{x^2}$',
          '$y = e^{x^2 - 1}$',
          '$y = e^{x^2 + 1}$',
          '$y = e \\cdot x^2$',
        ],
        0,
        `**Ansatz:** Trennen: $\\frac{dy}{y}=2x\\,dx$.

**Rechnung:** $\\ln|y|=x^2+K$ → $y=Ae^{x^2}$. AWP $y(1)=Ae=e$ → $A=1$. Lösung: $y=e^{x^2}$.

**Probe:** $y(1)=e^1=e$ ✓; $y\'=2xe^{x^2}=2xy$ ✓.

**Typischer Fehler:** $A$ durch $-1$ oder $+1$ verschoben behandeln: Aus $Ae^1=e^1$ folgt $A=1$, nicht $A=e^{-1}$ (was $y=e^{x^2-1}$ ergäbe, aber bei $x=1$ den Wert $1\\neq e$ liefert).`,
        [
          'Allgemeine Lösung: $y = Ae^{x^2}$.',
          'Einsetzen $x = 1$: $y(1) = Ae = e$ → $A = 1$.',
          'Keine Verschiebung im Exponenten nötig.',
        ],
        {
          1: '$e^{x^2-1}$: bei $x=1$ ist $y=e^0=1 \\neq e$. Die Konstante $A$ wurde in den Exponenten verschoben, was den Wert falsch macht.',
          2: '$e^{x^2+1}$: bei $x=1$ ist $y=e^2 \\neq e$. Auch hier falsche Platzierung der Konstante.',
          3: 'Das ist eine *Polynom*-Lösung, aber die Trennung liefert eine *Exponentialfunktion*. Ableitung: $(ex^2)\' = 2ex = 2x \\cdot y/x$ — stimmt nicht mit $y\' = 2xy$ überein.',
        },
      ),
    ],

    // ── [4] Bernoulli: Substitution u = y^{1-n} linearisiert ─────────
    4: [
      mc(
        '[PRÜFUNG] Welche Substitution linearisiert $y\' + y = y^3$?',
        [
          '$u = y^{-2}$',
          '$u = y^{2}$',
          '$u = y^{-3}$',
          '$u = \\ln y$',
        ],
        0,
        `**Ansatz:** Bernoulli-Standardsubstitution $u=y^{1-n}$ für DGL der Form $y\'+py=qy^n$.

**Rechnung:** Hier $n=3$, also $u=y^{1-3}=y^{-2}$. Ableitung: $u\'=-2y^{-3}\\,y\'$. Einsetzen: $y\'+y=y^3$ mit $y\'=-\\tfrac{y^3}{2}u\'$ → nach Umformung $u\' - 2u = -2$ (linear in $u$).

**Probe:** Die linearisierte DGL $u\'-2u=-2$ löst sich mit int. Faktor $\\mu=e^{-2x}$: $(ue^{-2x})\'=-2e^{-2x}$, $ue^{-2x}=e^{-2x}+K$, $u=1+Ke^{2x}$. Rückweg: $y^{-2}=1+Ke^{2x}$.

**Typischer Fehler:** $u=y^n$ statt $u=y^{1-n}$. Dann wird die DGL noch nichtlinearer.`,
        [
          'Merke: $u = y^{1-n}$.',
          'Für $n = 3$: $u = y^{1-3} = y^{-2}$.',
          'Ableiten $u\'$ ersetzt $y\'$ implizit.',
        ],
        {
          1: '$u = y^{1+n} = y^4$ — das ist keine Bernoulli-Formel. Die Standardsubstitution ist $u = y^{1-n}$.',
          2: '$u = y^{-n} = y^{-3}$ — auch falsch. Die Formel lautet $1 - n$, nicht $-n$.',
          3: '$u = \\ln y$ funktioniert nur beim Spezialfall $n = 1$ (separierbar). Für allgemeines $n$ brauchen wir Potenzsubstitution.',
        },
      ),
      ni(
        '[PRÜFUNG] Für Bernoulli $y\' - y = xy^2$ lautet die Substitution $u = y^{-1}$. Welchen Exponenten $m$ hat $y$, wenn $y\'$ in die DGL eingesetzt wird (i.e. $y\' = \\dots \\cdot y^m \\cdot u\'$)?',
        2, 0.001, '',
        `**Ansatz:** Mit $u=y^{-1}$: $u\'=-y^{-2}y\'$, also $y\'=-y^2 u\'$.

**Rechnung:** Es erscheint $y^m$ mit $m=2$ als Vorfaktor bei $u\'$.

**Probe:** Einsetzen in die Original-DGL: $-y^2 u\'-y=xy^2$, durch $-y^2$ teilen: $u\'+y^{-1}=-x$, und $y^{-1}=u$ → $u\'+u=-x$ (linear).

**Typischer Fehler:** $m=1$ angeben, weil man „eins ableitet". Aber die Kettenregel liefert $y^{-2}$ im Ergebnis von $u\'$, entsprechend $+2$ beim Auflösen nach $y\'$.`,
        [
          '$u = y^{-1}$, also $u\' = -y^{-2} \\cdot y\'$.',
          'Nach $y\'$ umstellen: $y\' = -y^2 u\'$.',
          'Der Exponent am $y$ ist $m = 2$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Für $n = 0$ oder $n = 1$ ist die Bernoulli-DGL bereits linear, sodass die Substitution $u = y^{1-n}$ überflüssig ist.',
        true,
        `**Ansatz:** Testen: bei $n=0$ wird $y^n=1$, bei $n=1$ wird $y^n=y$.

**Rechnung:** (i) $n=0$: $y\'+py=q$ — linear in Standardform. (ii) $n=1$: $y\'+py=qy$ → $y\'+(p-q)y=0$ — linear homogen.

**Probe:** Substitution $u=y^{1-0}=y^1=y$ (identisch) oder $u=y^{1-1}=y^0=1$ (konstant, informationslos) — tatsächlich überflüssig.

**Typischer Fehler:** Trotzdem blind die Substitution ansetzen und sich selbst Nebenrechnung produzieren. Erst Bernoulli-Test ($n\\neq 0,1$), dann substituieren.`,
        [
          '$n = 0$: $y^0 = 1$ → linear.',
          '$n = 1$: $y^1 = y$ → linear.',
          'Bernoulli-Substitution nur für $n \\neq 0, 1$ nötig.',
        ],
      ),
      mc(
        '[PRÜFUNG] Die Substitution $u = y^{1-n}$ in $y\' + p(x)y = q(x)y^n$ führt auf welche DGL für $u$?',
        [
          '$u\' + (1-n)\\,p(x)\\,u = (1-n)\\,q(x)$',
          '$u\' + p(x)\\,u = q(x)$',
          '$u\' + n\\,p(x)\\,u = n\\,q(x)$',
          '$u\' = (1-n)\\,(q - p\\,u)$',
        ],
        0,
        `**Ansatz:** $u=y^{1-n}$, $u\'=(1-n)y^{-n}y\'$.

**Rechnung:** Aus $y\'=\\frac{y^n}{1-n}u\'$ in $y\'+py=qy^n$ einsetzen: $\\frac{y^n}{1-n}u\'+py=qy^n$. Mal $(1-n)y^{-n}$ und mit $u=y^{1-n}$: $u\'+(1-n)p\\,u=(1-n)q$.

**Probe:** Verifikation: $n=2$, $p=1$, $q=1$ → $u\'-u=-1$; das ist tatsächlich linear.

**Typischer Fehler:** Faktor $(1-n)$ auf der linken Seite vergessen, nur rechts ansetzen. Er gehört *zu beiden* Koeffizienten.`,
        [
          'Produktregel: $u\' = (1-n) \\cdot y^{-n} \\cdot y\'$.',
          'Nach $y\'$ auflösen, in DGL einsetzen.',
          'Beide Koeffizienten multiplizieren sich mit $(1-n)$.',
        ],
        {
          1: 'Das wäre unveränderte Koeffizienten — aber $(1-n)$ taucht bei der Umrechnung auf beiden Seiten auf und darf nicht unterschlagen werden.',
          2: 'Falscher Faktor: der Exponent in der Substitution ist $1-n$, nicht $n$. Bei $n = 2$ ergibt das Vorzeichenwechsel.',
          3: 'Vorzeichenrichtig, aber falsche Form: die lineare DGL ist $u\' + (1-n)p u = (1-n)q$ und nicht explizit als Inhomogenität in Produkt-Form.',
        },
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Bernoulli-Lösungsschritte in die richtige Reihenfolge.',
        [
          'Bernoulli-Form erkennen: $y\' + p(x)y = q(x)y^n$ mit $n \\neq 0, 1$.',
          'Substituiere $u = y^{1-n}$, berechne $u\'$.',
          'Linearisierte DGL $u\' + (1-n)pu = (1-n)q$ mit int. Faktor lösen.',
          'Rücksubstitution $y = u^{1/(1-n)}$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Kochrezept.

**Rechnung:** (1) Typ identifizieren. (2) Substitution durchführen. (3) Lineare DGL mit Standardmethode lösen. (4) Rück zu $y$.

**Probe:** Bei jedem Schritt sollte die DGL einfacher werden; Fehler bei Schritt 2 propagieren sich durch.

**Typischer Fehler:** Die Rücksubstitution vergessen — Lösung steht für $u$, nicht für $y$.`,
        [
          'Erst klassifizieren, dann substituieren.',
          'Nach Linearisierung wie gewohnt lösen.',
          'Rückweg nicht vergessen.',
        ],
      ),
    ],

    // ── [5] Integrierender Faktor bei nicht-exakter DGL ───────────────
    5: [
      mc(
        '[PRÜFUNG] Wann existiert ein integrierender Faktor $\\mu(x)$ (nur von $x$ abhängig) für $M\\,dx + N\\,dy = 0$?',
        [
          'Wenn $(M_y - N_x)/N$ nur von $x$ abhängt',
          'Wenn $(M_y - N_x)/M$ nur von $y$ abhängt',
          'Immer, bei jeder nicht-exakten DGL',
          'Nie — nur $\\mu(x,y)$ ist allgemein',
        ],
        0,
        `**Ansatz:** Bedingung herleiten aus $(\\mu M)_y=(\\mu N)_x$ mit $\\mu=\\mu(x)$: $\\mu M_y=\\mu N_x+\\mu\' N$. Auflösen: $\\mu\'/\\mu=(M_y-N_x)/N$. Damit das eine ODE in $x$ ist, darf die rechte Seite nur von $x$ abhängen.

**Rechnung:** Bedingung: $(M_y-N_x)/N=f(x)$ — dann $\\mu=e^{\\int f(x)\\,dx}$.

**Probe:** Beispiel $y\\,dx+(2x-ye^y)\\,dy=0$: $M_y=1$, $N_x=2$, $(M_y-N_x)/N=-1/(2x-ye^y)$ hängt von $y$ ab — *kein* $\\mu(x)$. Dafür $(N_x-M_y)/M=1/y$, nur $y$ → $\\mu(y)=y$.

**Typischer Fehler:** Zähler und Nenner vertauschen: Für $\\mu(x)$ steht $N$ im Nenner, nicht $M$.`,
        [
          'Aus $(\\mu M)_y = (\\mu N)_x$ herleiten.',
          'Für $\\mu(x)$: $(M_y - N_x)/N$ muss nur von $x$ abhängen.',
          'Für $\\mu(y)$: $(N_x - M_y)/M$ muss nur von $y$ abhängen.',
        ],
        {
          1: 'Das ist das Kriterium für $\\mu(y)$, nicht für $\\mu(x)$. Der Nenner bei $\\mu(x)$ ist $N$.',
          2: 'Nicht immer existiert ein nur-von-$x$-abhängiger Faktor. Die Gleichung $(M_y-N_x)/N = f(x)$ kann von $y$ abhängen — dann gibt es nur $\\mu(x,y)$.',
          3: 'In vielen Fällen reicht $\\mu(x)$ oder $\\mu(y)$. Nur wenn beide scheitern, muss man allgemeiner suchen.',
        },
      ),
      ni(
        '[PRÜFUNG] Finde den integrierenden Faktor $\\mu(x)$ für $(3x^2 + 2y)\\,dx + (x)\\,dy = 0$. Welchen Wert hat $\\mu$ bei $x = 2$?',
        2, 0.01, '',
        `**Ansatz:** $M=3x^2+2y$, $N=x$. $M_y=2$, $N_x=1$, nicht exakt. Test: $(M_y-N_x)/N=(2-1)/x=1/x$ — nur $x$, also existiert $\\mu(x)$.

**Rechnung:** $\\mu\'/\\mu=1/x$ → $\\ln\\mu=\\ln x$ → $\\mu(x)=x$. Bei $x=2$: $\\mu(2)=2$.

**Probe:** $\\mu M=3x^3+2xy$, $(\\mu M)_y=2x$; $\\mu N=x^2$, $(\\mu N)_x=2x$ ✓ exakt.

**Typischer Fehler:** $\\mu=e^{1/x}$ statt $\\mu=x$. Verwechselt mit $\\mu=e^{\\int f\\,dx}$ — aber $\\int \\frac{1}{x}dx=\\ln x$, also $\\mu=e^{\\ln x}=x$, *nicht* $e^{1/x}$.`,
        [
          '$(M_y - N_x)/N = 1/x$ nur von $x$ abhängig.',
          '$\\mu = e^{\\int 1/x\\,dx} = e^{\\ln x} = x$.',
          'Bei $x = 2$: $\\mu = 2$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Nach Multiplikation mit dem richtigen integrierenden Faktor $\\mu$ wird eine ursprünglich nicht-exakte DGL exakt, und die Lösungsstruktur der alten DGL bleibt erhalten.',
        true,
        `**Ansatz:** $\\mu$ ist nullstellenfrei (sonst multiplizieren wir mit $0$), daher ändert sich die Lösungsmenge nicht.

**Rechnung:** Lösung von $M\\,dx+N\\,dy=0$ erfüllt $dy/dx=-M/N$ — dieselbe Bedingung für $\\mu M\\,dx+\\mu N\\,dy=0$, weil $\\mu$ sich im Quotienten kürzt.

**Probe:** Hier steckt die Gefahr: Wenn $\\mu(x,y)=0$ für gewisse Punkte, können neue oder verlorene Lösungen entstehen. Die Regel gilt nur bei nullstellenfreiem $\\mu$.

**Typischer Fehler:** „Nach Multiplikation bekomme ich eine neue DGL" — ja, aber mit *denselben* Lösungen, solange $\\mu\\neq 0$.`,
        [
          'Multiplikation mit $\\mu \\neq 0$ ändert die Lösungsmenge nicht.',
          'Die neue DGL ist exakt, also über Potentialfunktion lösbar.',
          'Vorsicht bei Nullstellen von $\\mu$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welcher integrierende Faktor linearisiert $y\' + p(x)\\,y = q(x)$?',
        [
          '$\\mu(x) = e^{\\int p(x)\\,dx}$',
          '$\\mu(x) = e^{-\\int p(x)\\,dx}$',
          '$\\mu(x) = e^{\\int q(x)\\,dx}$',
          '$\\mu(x) = p(x) \\cdot q(x)$',
        ],
        0,
        `**Ansatz:** Linear 1. Ordnung — Standardkonstruktion. Wir wollen $(\\mu y)\'=\\mu y\'+\\mu\' y$ als linke Seite der DGL identifizieren, d.h. $\\mu\'=\\mu p$.

**Rechnung:** $\\frac{\\mu\'}{\\mu}=p \\Rightarrow \\mu=e^{\\int p\\,dx}$. Multiplikation mit $\\mu$: $(\\mu y)\'=\\mu q$, also $y=\\tfrac{1}{\\mu}\\int \\mu q\\,dx + C/\\mu$.

**Probe:** $p=1$: $\\mu=e^x$. DGL $y\'+y=e^{-x}$: $(e^x y)\'=1$, $e^x y=x+C$, $y=e^{-x}(x+C)$ — stimmt.

**Typischer Fehler:** Vorzeichen $-\\int p$ im Exponenten. Dann wäre $\\mu\'=-p\\mu$ und die linke Seite passt nicht zu $(\\mu y)\'$.`,
        [
          'Produktregel: $(\\mu y)\' = \\mu y\' + \\mu\' y$.',
          'Vergleich mit $\\mu y\' + \\mu p y$: $\\mu\' = \\mu p$.',
          'Löse: $\\mu = e^{\\int p\\,dx}$.',
        ],
        {
          1: 'Vorzeichen falsch: Aus $\\mu\' = \\mu p$ folgt $\\mu = e^{+\\int p}$, nicht $e^{-\\int p}$.',
          2: '$q$ ist die Inhomogenität und kommt nicht in den integrierenden Faktor. Nur $p$ zählt.',
          3: 'Keine Exponentialfunktion — erfüllt $\\mu\' = \\mu p$ nicht.',
        },
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Kriterium den passenden integrierenden Faktor zu.',
        [
          { left: '$(M_y - N_x)/N$ hängt nur von $x$ ab', right: '$\\mu(x) = e^{\\int (M_y - N_x)/N\\,dx}$' },
          { left: '$(N_x - M_y)/M$ hängt nur von $y$ ab', right: '$\\mu(y) = e^{\\int (N_x - M_y)/M\\,dy}$' },
          { left: 'Lineare DGL $y\' + p y = q$', right: '$\\mu(x) = e^{\\int p(x)\\,dx}$' },
          { left: 'Keines der obigen Kriterien erfüllt', right: 'Allgemeiner Ansatz $\\mu(x,y)$ oder andere Methode' },
        ],
        `**Ansatz:** Zuordnung nach Strukturtest.

**Rechnung:** Jeder Eintrag ergibt sich aus $(\\mu M)_y=(\\mu N)_x$ mit entsprechender Einschränkung auf $\\mu(x)$, $\\mu(y)$ oder allgemeiner.

**Probe:** Alle Faktoren machen ursprüngliche DGL exakt; bei linearer Spezialform reduziert sich alles auf Standard-int-Faktor.

**Typischer Fehler:** Nenner $M$ vs $N$ verwechseln — fataler Vorzeichen- und Abhängigkeitsfehler.`,
        [
          'Zähler: immer Differenz der partiellen Ableitungen.',
          'Nenner: abhängig von der Variable, die übrig bleiben soll.',
          'Für linear: $p(x)$ direkt im Exponenten.',
        ],
      ),
    ],
  },


  // ────────────────────────────────────────────────────────────────────────
  // dgl-3-2 — Prüfung: DGL 2. Ordnung & Anwendungen  (6 subGoals)
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-3-2': {

    // ── [0] Störansatz Polynom ────────────────────────────────────────────
    0: [
      mc(
        '[PRÜFUNG] Welcher Ansatz für $y_p$ ist bei $y\'\' - y\' + y = x^2 + 3$ richtig?',
        [
          '$y_p = Ax^2 + Bx + C$',
          '$y_p = Ax^2$',
          '$y_p = Ax^2 + Bx$',
          '$y_p = A\\cdot(x^2+3)$',
        ],
        0,
        `**Ansatz:** Ist die Störfunktion ein Polynom $P_n(x)$ vom Grad $n$ und $\\lambda=0$ keine Wurzel der char. Gleichung, wählt man als Partikulärlösung ein vollständiges Polynom $Q_n(x)$ gleichen Grades mit allen Koeffizienten $A,B,C,\\dots$.

**Rechnung:** Hier $n=2$, char. Gleichung $\\lambda^2-\\lambda+1=0$ hat $\\lambda=\\tfrac{1\\pm i\\sqrt{3}}{2}\\neq 0$, kein Resonanzfall. Also $y_p=Ax^2+Bx+C$. Einsetzen ergibt $2A-(2Ax+B)+Ax^2+Bx+C=x^2+3$, Koeffizientenvergleich: $A=1$, $-2A+B=0\\Rightarrow B=2$, $2A-B+C=3\\Rightarrow C=3$.

**Probe:** Mit $y_p=x^2+2x+3$: $y_p'=2x+2$, $y_p''=2$. $y_p''-y_p'+y_p=2-(2x+2)+x^2+2x+3=x^2+3$ ✓.

**Typischer Fehler:** Nur das Monom höchsten Grades ansetzen (z. B. $Ax^2$). Dann bleibt beim Einsetzen $3$ auf der rechten Seite übrig und es findet sich kein passender Koeffizient — der Koeffizientenvergleich scheitert.`,
        [
          'Welchen Grad hat die Störfunktion?',
          'Faustregel: Polynom-Ansatz = vollständiges Polynom gleichen Grades.',
          'Koeffizientenvergleich braucht ALLE Monome ($x^2, x^1, x^0$).',
        ],
        {
          1: 'Ein Ansatz mit nur $Ax^2$ lässt die Terme $Bx$ und $C$ fehlen. Beim Einsetzen tauchen jedoch $x^1$- und $x^0$-Beiträge auf — ohne die restlichen Koeffizienten kannst du das System $Ax^2+3$ nicht erfüllen.',
          2: "Fehlt der konstante Term $C$. Bei $y_p=Ax^2+Bx$ liefert $y_p''-y_p'$ einen konstanten Beitrag $2A-B$, aber es gibt keinen freien Parameter, um die $+3$ auf der rechten Seite zu matchen.",
          3: 'Das ist kein allgemeiner Polynom-Ansatz, sondern nur eine Skalierung der rechten Seite. Bei linearen DGL mit konstanten Koeffizienten muss man unabhängige Koeffizienten für jede Potenz einführen — sonst zu wenige Freiheitsgrade.',
        },
      ),
      ni(
        '[PRÜFUNG] Gegeben $y\'\' + 4y = 8x + 12$. Bestimme im Polynom-Ansatz $y_p = Ax + B$ den Koeffizienten $A$.',
        2, 0.001, '',
        `**Ansatz:** Störfunktion ist linear (Grad 1), char. Gl. $\\lambda^2+4=0$ hat $\\lambda=\\pm 2i\\neq 0$ — kein Resonanzfall. Ansatz $y_p=Ax+B$.

**Rechnung:** $y_p'=A$, $y_p''=0$. Einsetzen: $0+4(Ax+B)=8x+12$, also $4Ax+4B=8x+12$. Koeffizientenvergleich: $4A=8\\Rightarrow A=2$, $4B=12\\Rightarrow B=3$.

**Probe:** $y_p=2x+3$: $y_p''+4y_p=0+4(2x+3)=8x+12$ ✓.

**Typischer Fehler:** $y_p'$ oder $y_p''$ falsch gebildet — bei linearem Ansatz ist $y_p''=0$ und nicht etwa $A$. Dann würde $A$ zusätzlich auf der linken Seite auftauchen und das Ergebnis verfälschen.`,
        [
          "Ansatz $y_p=Ax+B$, dann $y_p'$ und $y_p''$ bilden.",
          'In DGL einsetzen und nach Potenzen von $x$ sortieren.',
          'Koeffizient vor $x$ vergleichen: $4A=8$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + 3y\' + 2y = 5x^3$ ist der passende Partikulär-Ansatz $y_p = Ax^3 + Bx^2 + Cx + D$.',
        true,
        `**Ansatz:** Polynom-Störfunktion vom Grad $n$ → Ansatz ist vollständiges Polynom gleichen Grades, sofern $\\lambda=0$ keine Wurzel der char. Gleichung ist.

**Rechnung:** $\\lambda^2+3\\lambda+2=(\\lambda+1)(\\lambda+2)=0$ liefert $\\lambda=-1,-2$. $\\lambda=0$ ist keine Wurzel. Daher kein Resonanzfall, und der vollständige Polynom-Ansatz $y_p=Ax^3+Bx^2+Cx+D$ ist korrekt.

**Probe:** Einsetzen erzeugt beim Differenzieren Terme bis Grad 3 ($y_p''$: Grad 1, $y_p'$: Grad 2, $y_p$: Grad 3). Der Koeffizientenvergleich liefert 4 Gleichungen für 4 Unbekannte — das System ist eindeutig lösbar.

**Typischer Fehler:** Nur $y_p=Ax^3$ ansetzen und dann das Koeffizientensystem nicht schließen können. Beim Ableiten von $Ax^3$ entstehen auch $x^2$- und $x^1$-Terme — diese brauchen eigene Koeffizienten.`,
        [
          'Stell fest, ob $\\lambda=0$ Wurzel der char. Gl. ist.',
          'Faktorisiere $\\lambda^2+3\\lambda+2$.',
          'Kein Resonanzfall → vollständiges Polynom gleichen Grades.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Störfunktion den passenden Polynom-Ansatz zu (ohne Resonanz).',
        [
          { left: '$q(x)=7$ (Konstante)', right: '$y_p = A$' },
          { left: '$q(x)=3x-2$', right: '$y_p = Ax + B$' },
          { left: '$q(x)=x^2$', right: '$y_p = Ax^2 + Bx + C$' },
          { left: '$q(x)=5x^3 - x + 4$', right: '$y_p = Ax^3 + Bx^2 + Cx + D$' },
        ],
        `**Ansatz:** Der Grad des Ansatzes richtet sich nach dem **höchsten** Grad in $q(x)$. Unabhängig von der konkreten Form (fehlende Zwischenglieder wie bei $5x^3-x+4$ ohne $x^2$) wird immer das **vollständige** Polynom dieses Grades angesetzt.

**Rechnung:** Ableitungen mischen die Potenzen — alle Koeffizienten werden benötigt. Der Koeffizientenvergleich löst dann ein $(n+1)\\times(n+1)$-System.

**Probe:** Jede Wahl muss beim Einsetzen Koeffizientenvergleich erlauben. Fehlende Grade im Ansatz blockieren einzelne Gleichungen.

**Typischer Fehler:** Bei $q(x)=5x^3-x+4$ nur $Ax^3+Cx+D$ ansetzen (weil $x^2$ fehlt). Falsch — die Ableitungen erzeugen $x^2$-Terme, die sonst nicht gematcht werden können.`,
        [
          'Höchster Grad von $q(x)$ bestimmt Grad des Ansatzes.',
          'Immer vollständiges Polynom — auch wenn Zwischenglieder in $q$ fehlen.',
          'Konstante Störfunktion → konstanter Ansatz.',
        ],
      ),
      mc(
        '[PRÜFUNG] Für $y\'\' - y\' = 2x + 1$ ist der Standard-Ansatz $y_p = Ax + B$ falsch — warum?',
        [
          '$\\lambda=0$ ist Wurzel der char. Gleichung — Resonanz, Ansatz muss $\\cdot x$ werden',
          'Der Ansatz ist korrekt — das System ist einfach lösbar',
          'Der Ansatz hat zu viele Parameter',
          'Polynom-Störfunktionen erlauben keine Konstante im Ansatz',
        ],
        0,
        `**Ansatz:** Bei Polynom-Störansatz muss man prüfen, ob $\\lambda=0$ Wurzel der charakteristischen Gleichung ist. Ist ja — weil Konstanten bereits zur homogenen Lösung gehören — so tritt Resonanz auf und der Ansatz wird mit $x$ multipliziert.

**Rechnung:** Char. Gleichung: $\\lambda^2-\\lambda=\\lambda(\\lambda-1)=0$ → $\\lambda=0,1$. Da $\\lambda=0$ Wurzel ist, steckt in $y_h=C_1+C_2 e^x$ bereits die Konstante $C_1$. Der Ansatz $Ax+B$ enthält $B$ (Konstante) — das ist die homogene Lösung und bringt nichts. Korrektur: $y_p=x(Ax+B)=Ax^2+Bx$.

**Probe:** Mit $y_p=Ax^2+Bx$: $y_p'=2Ax+B$, $y_p''=2A$. $y_p''-y_p'=2A-2Ax-B=-2Ax+(2A-B)=2x+1$ → $-2A=2\\Rightarrow A=-1$, $2A-B=1\\Rightarrow B=-3$. Also $y_p=-x^2-3x$.

**Typischer Fehler:** Resonanzprüfung vergessen. Das passiert besonders bei Polynom-Störungen, weil Konstanten nicht als "Exponential mit $\\lambda=0$" gesehen werden. Faustregel: fehlt der Term $y$ (also $q=0$) in der DGL, ist $\\lambda=0$ immer Wurzel.`,
        [
          'Char. Gleichung $\\lambda^2-\\lambda=0$ faktorisieren.',
          'Welche Wurzeln? Ist $\\lambda=0$ darunter?',
          'Wenn ja: Resonanz — Polynom-Ansatz $\\cdot x$.',
        ],
        {
          1: 'Der Ansatz $Ax+B$ enthält $B$ als Konstante — das ist aber bereits Teil der homogenen Lösung ($y_h=C_1+C_2e^x$). Resonanz muss berücksichtigt werden, sonst scheitert der Koeffizientenvergleich.',
          2: 'Die Anzahl der Parameter passt zum Grad der Störfunktion. Das Problem ist nicht Überparametrisierung, sondern dass ein Teil des Ansatzes bereits die homogene DGL löst (→ Resonanz).',
          3: 'Polynom-Ansätze dürfen konstante Terme enthalten (sonst könnte man $q(x)=7$ nie treffen). Das Problem ist hier speziell, dass in dieser DGL der Term $y$ fehlt — dadurch wird $\\lambda=0$ zur Wurzel.',
        },
      ),
    ],

    // ── [1] Störansatz Exponential ────────────────────────────────────────
    1: [
      ni(
        '[PRÜFUNG] Finde $A$ in $y_p = A e^{2x}$ für die DGL $y\'\' - 3y\' + 2y = 4e^{2x}$... Moment, ist der Ansatz überhaupt zulässig? Wenn nicht, schreibe $0$. Wenn ja, gib $A$ an.',
        0, 0.001, '',
        `**Ansatz:** Vor dem Einsetzen prüfen, ob $c=2$ Wurzel der charakteristischen Gleichung ist. Nur wenn nicht, ist der Ansatz $Ae^{cx}$ zulässig.

**Rechnung:** Char. Gl.: $\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)=0$ → $\\lambda=1,2$. Da $c=2$ **Wurzel** ist, liegt Resonanz vor. Der Ansatz $Ae^{2x}$ ist **nicht** zulässig und muss zu $Axe^{2x}$ modifiziert werden. Antwort für $A$ im Standard-Ansatz: **0** (nicht zulässig).

**Probe:** Einsetzen von $y_p=Ae^{2x}$ liefert $(4A-6A+2A)e^{2x}=0\\neq 4e^{2x}$ — Ansatz ergibt Widerspruch, genau weil $e^{2x}$ homogene Lösung ist.

**Typischer Fehler:** Direkt einsetzen, ohne Resonanzcheck. Dann steht plötzlich $0=4e^{2x}$ und der Rechnende ist verwirrt. Regel: vor jedem $Ae^{cx}$-Ansatz kurz die char. Gleichung faktorisieren.`,
        [
          'Bestimme die Wurzeln der charakteristischen Gleichung.',
          'Liegt $c=2$ unter den Wurzeln?',
          'Falls ja: Ansatz unzulässig → $A=0$ eintragen.',
        ],
      ),
      mc(
        '[PRÜFUNG] Für $y\'\' - 4y\' + 3y = 5e^{-x}$ ist der richtige Ansatz:',
        [
          '$y_p = A e^{-x}$',
          '$y_p = A x e^{-x}$',
          '$y_p = A e^{x}$',
          '$y_p = (Ax + B) e^{-x}$',
        ],
        0,
        `**Ansatz:** Ansatz $Ae^{cx}$ mit $c=-1$. Resonanz prüfen: char. Gleichung $\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)=0$ → $\\lambda=1,3$. $c=-1$ ist **keine** Wurzel → Ansatz $Ae^{-x}$ zulässig.

**Rechnung:** $y_p=Ae^{-x}$, $y_p'=-Ae^{-x}$, $y_p''=Ae^{-x}$. Einsetzen: $Ae^{-x}-4(-Ae^{-x})+3Ae^{-x}=(1+4+3)Ae^{-x}=8Ae^{-x}=5e^{-x}$ → $A=\\tfrac{5}{8}$.

**Probe:** Mit $y_p=\\tfrac{5}{8}e^{-x}$: $y_p''-4y_p'+3y_p=\\tfrac{5}{8}e^{-x}(1+4+3)=\\tfrac{5}{8}\\cdot 8\\cdot e^{-x}=5e^{-x}$ ✓.

**Typischer Fehler:** $c$ vorschnell mit einer Wurzel verwechseln (z. B. $c=-1$ mit $\\lambda=1$). Vorzeichen zählen — nur wenn $c$ exakt mit einem $\\lambda$ übereinstimmt, liegt Resonanz vor.`,
        [
          'Char. Gleichung: $\\lambda^2-4\\lambda+3=0$.',
          'Wurzeln $\\lambda=1, 3$. Ist $c=-1$ dabei?',
          'Nein → Standard-Ansatz $Ae^{-x}$.',
        ],
        {
          1: 'Das wäre der Resonanzansatz. Hier liegt aber keine Resonanz vor: $c=-1$ ist keine Wurzel der char. Gleichung ($\\lambda=1, 3$). Ohne Resonanz bleibt der Ansatz im Standard-Format $Ae^{cx}$.',
          2: 'Vorzeichen verwechselt: die Störfunktion ist $e^{-x}$, nicht $e^{x}$. Der Ansatz muss denselben Exponenten tragen wie die rechte Seite.',
          3: 'Dieser Ansatz passt zu einer Störfunktion der Form $P_1(x)\\cdot e^{-x}=(ax+b)e^{-x}$. Hier ist aber $q(x)=5e^{-x}$ (nur Exponential, kein Polynomfaktor). Daher genügt $Ae^{-x}$.',
        },
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + y = e^{2x}$ ist $c=2$ kein Eigenwert der char. Gleichung, daher ist $y_p = A e^{2x}$ ein gültiger Ansatz.',
        true,
        `**Ansatz:** Resonanzcheck: Eigenwerte aus char. Gl. Wenn $c$ keiner davon ist → Standard-Exponentialansatz erlaubt.

**Rechnung:** Char. Gl.: $\\lambda^2+1=0$ → $\\lambda=\\pm i$. $c=2$ ist weder $+i$ noch $-i$ (und auch nicht rein reell wie $i$). Ansatz zulässig: $y_p=Ae^{2x}$, $y_p''=4Ae^{2x}$. $y_p''+y_p=5Ae^{2x}=e^{2x}$ → $A=1/5$.

**Probe:** $y_p=\\tfrac{1}{5}e^{2x}$: $y_p''+y_p=\\tfrac{1}{5}(4e^{2x}+e^{2x})=\\tfrac{1}{5}\\cdot 5e^{2x}=e^{2x}$ ✓.

**Typischer Fehler:** Komplexe Eigenwerte mit beliebigen reellen $c$ verwechseln. Nur wenn $c$ **exakt** einer der (ggf. komplexen) Wurzeln ist, liegt Resonanz vor — $c=2$ ist ein völlig anderer Wert als $\\pm i$.`,
        [
          'Wurzeln von $\\lambda^2+1=0$?',
          'Vergleiche $c=2$ mit diesen Wurzeln.',
          'Keine Übereinstimmung → kein Resonanzfall.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Bestimmung der partikulären Lösung bei exponentieller Störung.',
        [
          'Charakteristische Gleichung $\\lambda^2+p\\lambda+q=0$ aufstellen und Wurzeln bestimmen',
          'Prüfen, ob $c$ eine Wurzel ist (Resonanzcheck)',
          'Ansatz wählen: $Ae^{cx}$ (ohne Resonanz) oder $Axe^{cx}$ / $Ax^2e^{cx}$ (mit Resonanz)',
          'Ansatz zweimal ableiten und in die DGL einsetzen',
          'Koeffizient $A$ durch Koeffizientenvergleich berechnen',
          'Probe: $y_p$ in die ursprüngliche DGL einsetzen',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Der Resonanzcheck steht vor der Ansatzwahl — sonst riskiert man Widersprüche.

**Rechnung:** Reihenfolge logisch: 1) homogen analysieren, 2) $c$ mit Wurzeln vergleichen, 3) Ansatz, 4) Einsetzen, 5) Koeffizienten, 6) Probe.

**Probe:** Das Ergebnis muss die ursprüngliche DGL Punkt für Punkt erfüllen — nicht nur die homogene.

**Typischer Fehler:** Sofort einsetzen ohne Resonanzcheck. Kommt dann $0=\\text{etwas}$ heraus, muss man zurück zum Anfang.`,
        [
          'Zuerst Wissen über die homogene DGL aufbauen.',
          'Resonanzcheck bestimmt die Ansatz-Form.',
          'Probe am Ende absichert die Lösung.',
        ],
      ),
      ni(
        '[PRÜFUNG] Berechne $A$ in $y_p = A e^{3x}$ für die DGL $y\'\' - 2y\' - 3y = 8 e^{3x}$... falls zulässig. Falls Resonanz vorliegt, trage $0$ ein.',
        0, 0.001, '',
        `**Ansatz:** Resonanzcheck! Char. Gleichung: $\\lambda^2-2\\lambda-3=(\\lambda-3)(\\lambda+1)=0$ → $\\lambda=3,-1$. $c=3$ ist Wurzel → Resonanz → Standard-Ansatz $Ae^{3x}$ ist **nicht** zulässig.

**Rechnung:** Zum Nachweis: mit $y_p=Ae^{3x}$: $y_p''-2y_p'-3y_p=(9-6-3)Ae^{3x}=0\\cdot Ae^{3x}=0\\neq 8e^{3x}$. Der Ansatz kann niemals die rechte Seite erzeugen. Antwort für $A$ im gefragten Ansatz: **0**.

**Probe:** Der korrekte Ansatz wäre $y_p=Axe^{3x}$: $y_p'=A(1+3x)e^{3x}$, $y_p''=A(6+9x)e^{3x}$. Einsetzen: $[A(6+9x)-2A(1+3x)-3Ax]e^{3x}=[6A+9Ax-2A-6Ax-3Ax]e^{3x}=4Ae^{3x}=8e^{3x}$ → $A=2$. Also $y_p=2xe^{3x}$ ist die richtige Partikulärlösung.

**Typischer Fehler:** Resonanzcheck weglassen, Ansatz $Ae^{3x}$ einsetzen, auf $0=8e^{3x}$ stoßen und dann fälschlich schließen, die DGL habe keine Lösung. Die DGL hat sehr wohl eine Lösung — nur der naive Ansatz versagt.`,
        [
          'Faktorisiere $\\lambda^2-2\\lambda-3$.',
          'Wurzeln $\\lambda=3, -1$. $c=3$ dabei?',
          'Ja → Resonanz → $A=0$ im Standard-Ansatz.',
        ],
      ),
    ],

    // ── [2] Störansatz Trig ───────────────────────────────────────────────
    2: [
      mc(
        '[PRÜFUNG] Welcher Ansatz ist für $y\'\' + 3y\' + 2y = 4\\cos(2x)$ richtig?',
        [
          '$y_p = A\\cos(2x) + B\\sin(2x)$',
          '$y_p = A\\cos(2x)$',
          '$y_p = A\\sin(2x)$',
          '$y_p = A e^{2ix}$',
        ],
        0,
        `**Ansatz:** Bei trigonometrischer Störung $q(x)=a\\cos(\\omega x)+b\\sin(\\omega x)$ (ein Summand genügt) lautet der vollständige Ansatz **immer** $y_p=A\\cos(\\omega x)+B\\sin(\\omega x)$ mit **beiden** Funktionen — auch wenn nur eine in $q$ auftritt. Grund: Ableiten wechselt zwischen $\\cos$ und $\\sin$. Vorab Resonanzcheck: ist $\\pm i\\omega$ Wurzel der char. Gl.?

**Rechnung:** Char. Gl.: $\\lambda^2+3\\lambda+2=(\\lambda+1)(\\lambda+2)=0$ → $\\lambda=-1,-2$. $\\pm 2i$ ist **nicht** darunter → kein Resonanzfall. Ansatz: $y_p=A\\cos 2x+B\\sin 2x$. Einsetzen liefert $(-2A+6B)\\cos 2x+(-6A-2B)\\sin 2x=4\\cos 2x$, also $-2A+6B=4$ und $-6A-2B=0$, Lösung $A=-\\tfrac{1}{5}$, $B=\\tfrac{3}{5}$.

**Probe:** $y_p=-\\tfrac{1}{5}\\cos 2x+\\tfrac{3}{5}\\sin 2x$ in die DGL eingesetzt ergibt exakt $4\\cos 2x$.

**Typischer Fehler:** Nur $A\\cos(2x)$ ansetzen, weil in $q$ nur $\\cos$ steht. Aber $y_p'$ erzeugt $\\sin$, $y_p''$ wieder $\\cos$ — ohne $\\sin$-Anteil im Ansatz bleibt ein Rest, der nicht gematcht werden kann.`,
        [
          'Erzeugt Ableiten von $\\cos(2x)$ einen $\\sin$-Beitrag?',
          'Beide Funktionen müssen im Ansatz stehen.',
          'Resonanz nur bei $\\pm i\\omega$ als Wurzel der char. Gl.',
        ],
        {
          1: 'Der Ansatz $A\\cos(2x)$ allein reicht nicht. Ableiten bringt $\\sin(2x)$-Terme ins Spiel, die keinen Matching-Partner haben. Der Koeffizientenvergleich bricht zusammen.',
          2: 'Gleicher Fehler wie bei $\\cos$ allein: Ableitung von $A\\sin(2x)$ liefert $\\cos(2x)$-Anteile, die nicht aufgefangen werden können. Beide Funktionen sind nötig.',
          3: 'Komplexer Ansatz ist theoretisch möglich, aber bei reellen Koeffizienten und reeller rechter Seite ist der reelle Ansatz $A\\cos+B\\sin$ Standard. Außerdem würde $Ae^{2ix}$ hier Resonanzcheck mit $\\lambda=2i$ erfordern.',
        },
      ),
      ni(
        '[PRÜFUNG] Für $y\'\' + 4y = 6\\sin(x)$ setzt man $y_p = A\\cos(x) + B\\sin(x)$ an. Berechne $B$.',
        2, 0.001, '',
        `**Ansatz:** Trigonometrische Störung mit $\\omega=1$. Resonanzcheck: $\\lambda^2+4=0$ → $\\lambda=\\pm 2i$, also $\\pm i\\omega=\\pm i$ ist **keine** Wurzel → Standard-Ansatz.

**Rechnung:** $y_p=A\\cos x+B\\sin x$, $y_p''=-A\\cos x-B\\sin x$. Einsetzen: $(-A+4A)\\cos x+(-B+4B)\\sin x=3A\\cos x+3B\\sin x=6\\sin x$. Koeffizientenvergleich: $3A=0\\Rightarrow A=0$, $3B=6\\Rightarrow B=2$.

**Probe:** $y_p=2\\sin x$: $y_p''+4y_p=-2\\sin x+8\\sin x=6\\sin x$ ✓.

**Typischer Fehler:** Vergessen, dass $y_p''$ das Vorzeichen wechselt ($-A\\cos x$, nicht $+A\\cos x$). Dann Koeffizienten falsch.`,
        [
          "Zweite Ableitung: $y_p''=-A\\cos x-B\\sin x$.",
          'In die DGL einsetzen und nach $\\cos, \\sin$ sortieren.',
          'Koeffizient vor $\\sin x$: $(-B+4B)=3B=6$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Wenn die Störfunktion nur $\\sin(\\omega x)$ ist, reicht als Ansatz $y_p = B\\sin(\\omega x)$ ohne $\\cos$-Term.',
        false,
        `**Ansatz:** Falsch. Auch bei reinem $\\sin$ (oder reinem $\\cos$) in der Störung braucht man **beide** Anteile im Ansatz, sobald die DGL einen Term mit **erster Ableitung** ($y'$) enthält.

**Rechnung:** Beispiel $y'+y=\\sin x$: mit $y_p=B\\sin x$ erhält man $B\\cos x+B\\sin x=\\sin x$ — das geht nicht, weil links $\\cos x$ auftaucht, rechts aber nicht. Der Koeffizientenvergleich liefert $B=0$ (aus $\\cos$-Anteil) und $B=1$ (aus $\\sin$-Anteil) — Widerspruch. Also braucht es $y_p=A\\cos x+B\\sin x$.

**Probe:** Nur wenn die DGL keinen $y'$-Term hat (z. B. $y''+\\omega_0^2 y=\\sin\\omega x$ mit $\\omega\\neq\\omega_0$), kommt man ausnahmsweise mit einem einzigen trig-Term aus. Generell-Regel: **beide** Terme ansetzen.

**Typischer Fehler:** "$q$ enthält nur $\\sin$, also brauche ich nur $B\\sin$". Funktioniert manchmal zufällig, versagt aber sobald $y'$ im Spiel ist.`,
        [
          "Wirkt $y'$ auf $B\\sin x$? Was entsteht?",
          'Reine $\\sin$-Ansätze versagen, sobald $\\cos$ aus Ableitung kommt.',
          'Im Zweifel immer beide Funktionen ansetzen.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder trigonometrischen Störfunktion den passenden Ansatz zu.',
        [
          { left: '$q(x)=3\\cos(2x)$', right: '$y_p=A\\cos(2x)+B\\sin(2x)$' },
          { left: '$q(x)=\\sin(5x)-2\\cos(5x)$', right: '$y_p=A\\cos(5x)+B\\sin(5x)$' },
          { left: '$q(x)=e^{x}\\cos(3x)$', right: '$y_p=e^{x}(A\\cos(3x)+B\\sin(3x))$' },
          { left: '$q(x)=x\\sin(2x)$', right: '$y_p=(Ax+B)\\cos(2x)+(Cx+D)\\sin(2x)$' },
        ],
        `**Ansatz:** Trig-Ansatz = **vollständige Form** mit $\\cos$ und $\\sin$, bei gleicher Frequenz $\\omega$. Produkte mit $e^{\\alpha x}$ oder Polynomen werden entsprechend multipliziert bzw. in Polynomen-Ansatz ausgeschrieben.

**Rechnung:** - $e^{\\alpha x}\\cos\\omega x$: Ansatz $e^{\\alpha x}(A\\cos+B\\sin)$, Resonanz bei $\\alpha\\pm i\\omega$ Wurzel. - $x^n\\cos\\omega x$: Ansatz mit Polynomfaktor $(Ax^n+\\dots)\\cos+(Cx^n+\\dots)\\sin$.

**Probe:** Beim Einsetzen müssen alle Terme $x^k\\cdot \\cos\\omega x$ und $x^k\\cdot \\sin\\omega x$ gematcht werden — dafür ist der vollständige Ansatz nötig.

**Typischer Fehler:** Bei $x\\sin(2x)$ nur $Cx\\sin(2x)$ ansetzen. Ableiten bringt aber auch Terme ohne $x$ (nur $\\sin$, $\\cos$) und $\\cos$-Terme — alle Freiheitsgrade müssen rein.`,
        [
          'Frequenz $\\omega$ aus der Störung übernehmen.',
          'Bei Produktstörungen (z. B. mit $e^{\\alpha x}$ oder $x^n$) den Ansatz entsprechend erweitern.',
          'Immer $\\cos$ UND $\\sin$ im Ansatz.',
        ],
      ),
      mc(
        '[PRÜFUNG] Bei welcher DGL tritt **Resonanz** auf, so dass der Standard-Ansatz $y_p=A\\cos(3x)+B\\sin(3x)$ **NICHT** direkt zulässig ist?',
        [
          '$y\'\' + 9y = \\cos(3x)$',
          '$y\'\' + 4y = \\cos(3x)$',
          '$y\'\' + 16y = \\cos(3x)$',
          '$y\'\' + y = \\cos(3x)$',
        ],
        0,
        `**Ansatz:** Resonanzcheck bei Trig-Störung: Tritt $\\pm i\\omega$ (mit $\\omega$ = Störfrequenz) als Wurzel der charakteristischen Gleichung auf? Nur dann liegt Resonanz vor und der Standard-Ansatz scheitert.

**Rechnung:** - A: $\\lambda^2+9=0$ → $\\lambda=\\pm 3i$ = $\\pm i\\omega$ mit $\\omega=3$ → **Resonanz**. Ansatz muss $\\cdot x$: $y_p=x(A\\cos 3x+B\\sin 3x)$. - B: $\\lambda=\\pm 2i \\neq \\pm 3i$, kein Resonanzfall. - C: $\\lambda=\\pm 4i \\neq \\pm 3i$, kein Resonanzfall. - D: $\\lambda=\\pm i \\neq \\pm 3i$, kein Resonanzfall.

**Probe:** In A mit Standard-Ansatz $y_p=A\\cos 3x+B\\sin 3x$: $y_p''+9y_p=-9A\\cos-9B\\sin+9A\\cos+9B\\sin=0 \\neq \\cos 3x$. Das zeigt: der Standard-Ansatz kann die rechte Seite niemals erzeugen → Resonanz bestätigt.

**Typischer Fehler:** Resonanz nur bei exakter Frequenz-Übereinstimmung $\\pm i\\omega$ = Wurzel. In A ist $\\omega_0=\\sqrt{9}=3=\\omega$ → Eigenfrequenz = Störfrequenz → klassische mechanische Resonanz.`,
        [
          'Eigenfrequenz aus $\\lambda^2+q=0$: $\\omega_0=\\sqrt{q}$.',
          'Störfrequenz hier $\\omega=3$. Wo ist $\\omega_0=\\omega$?',
          'A: $q=9$, $\\omega_0=3=\\omega$ → Resonanz.',
        ],
        {
          1: 'Hier ist $\\omega_0=\\sqrt{4}=2\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz $A\\cos 3x+B\\sin 3x$ ist zulässig und liefert $A=-\\tfrac{1}{5}, B=0$.',
          2: '$\\omega_0=\\sqrt{16}=4\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz funktioniert: $y_p=\\tfrac{1}{7}\\cos 3x$.',
          3: '$\\omega_0=1\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz ist zulässig: $y_p=-\\tfrac{1}{8}\\cos 3x$.',
        },
      ),
    ],

    // ── [3] Resonanzfall ──────────────────────────────────────────────────
    3: [
      mc(
        '[PRÜFUNG] Wähle den Ansatz für $y\'\' - 4y\' + 4y = e^{2x}$.',
        [
          '$y_p = A x^2 e^{2x}$',
          '$y_p = A e^{2x}$',
          '$y_p = A x e^{2x}$',
          '$y_p = (Ax + B) e^{2x}$',
        ],
        0,
        `**Ansatz:** Char. Gleichung $\\lambda^2-4\\lambda+4=(\\lambda-2)^2=0$ hat die **Doppelwurzel** $\\lambda=2$. Störexponent $c=2$ stimmt damit überein → Resonanz. Bei Doppelwurzel multipliziert man mit $x^2$ (bei einfacher Wurzel nur mit $x$).

**Rechnung:** Ansatz $y_p=Ax^2e^{2x}$. Ableitungen: $y_p'=A(2x+2x^2)e^{2x}=2A(x+x^2)e^{2x}$, $y_p''=2A(1+2x)e^{2x}+4A(x+x^2)e^{2x}=2A(1+4x+2x^2)e^{2x}$. Einsetzen und Sortieren (Koeffizienten $x^0, x^1, x^2$) ergibt $2A e^{2x}=e^{2x}$ → $A=\\tfrac{1}{2}$. Also $y_p=\\tfrac{1}{2}x^2e^{2x}$.

**Probe:** $y_h=(C_1+C_2x)e^{2x}$. Beim Einsetzen von $y_p=Axe^{2x}$ würde man $0=e^{2x}$ erhalten — der Ansatz mit $x$ versagt (ist auch homogene Lösung!), erst $x^2$ bricht die Resonanz.

**Typischer Fehler:** Nur mit $x$ multiplizieren, wenn eine Doppelwurzel vorliegt. Dann rechnet man lange, bis plötzlich $A=0\\cdot\\text{etwas}$ herauskommt und spürt den Fehler zu spät.`,
        [
          'Char. Gl.: $(\\lambda-2)^2=0$ — doppelte Wurzel.',
          '$c=2$ ist diese Wurzel → Resonanz mit Multiplizität 2.',
          'Multiplikation mit $x^2$ (nicht nur $x$).',
        ],
        {
          1: 'Ohne Resonanzbehandlung. Aber $e^{2x}$ ist Teil der homogenen Lösung (sogar doppelt), daher liefert $Ae^{2x}$ beim Einsetzen $0\\neq e^{2x}$. Ansatz unbrauchbar.',
          2: 'Nur ein $x$-Faktor. Das bricht die Resonanz bei *einfacher* Wurzel, nicht bei *doppelter*. Hier ist $\\lambda=2$ doppelt, daher ist auch $xe^{2x}$ schon homogene Lösung. Man braucht $x^2$.',
          3: 'Dieser Ansatz passt zu einer Störung der Form $(ax+b)e^{2x}$, also einem Polynomfaktor. Hier ist die Störung aber nur $e^{2x}$ (konstanter Faktor) → Ansatz wäre überparametrisiert und die Lösung des Koeffizientensystems würde $A=0$, $B$ frei ergeben — ungeeignet.',
        },
      ),
      ni(
        '[PRÜFUNG] Bestimme $A$ in $y_p = Ax e^x$ für die DGL $y\'\' - y = 4 e^x$.',
        2, 0.001, '',
        `**Ansatz:** Char. Gl. $\\lambda^2-1=0$ → $\\lambda=\\pm 1$. Störexponent $c=1$ ist *einfache* Wurzel → Resonanz, Multiplizität 1, Ansatz $Axe^x$.

**Rechnung:** $y_p=Axe^x$, $y_p'=A(1+x)e^x$, $y_p''=A(2+x)e^x$. $y_p''-y_p=A(2+x)e^x-Axe^x=2Ae^x=4e^x$ → $A=2$.

**Probe:** $y_p=2xe^x$: $y_p''-y_p=2(2+x)e^x-2xe^x=4e^x$ ✓.

**Typischer Fehler:** Produktregel beim Ableiten vergessen. Dann kommt $y_p'=Ae^x$ (statt $A(1+x)e^x$) heraus und $A$ ist falsch.`,
        [
          'Char. Gl.: $\\lambda^2-1=(\\lambda-1)(\\lambda+1)=0$ → $\\lambda=\\pm 1$.',
          '$c=1$ ist *einfache* Wurzel → Ansatz $\\cdot x$.',
          "Produktregel: $(xe^x)'=(1+x)e^x$.",
        ],
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + y = \\sin(x)$ liegt Resonanz vor, weil $\\pm i$ (die Wurzeln der char. Gleichung) auch die Frequenz der Störung ergeben.',
        true,
        `**Ansatz:** Bei trigonometrischer Störung liegt Resonanz vor, wenn $\\pm i\\omega$ (mit $\\omega$ = Störfrequenz) eine Wurzel der char. Gleichung ist.

**Rechnung:** Char. Gl.: $\\lambda^2+1=0$ → $\\lambda=\\pm i$. Störung $\\sin(x)$ hat $\\omega=1$, also $\\pm i\\omega=\\pm i$ — exakt die Wurzeln. Also Resonanz. Ansatz: $y_p=x(A\\cos x+B\\sin x)$. Einsetzen liefert $A=-\\tfrac{1}{2}$, $B=0$.

**Probe:** $y_p=-\\tfrac{1}{2}x\\cos x$: $y_p'=-\\tfrac{1}{2}\\cos x+\\tfrac{1}{2}x\\sin x$, $y_p''=\\sin x+\\tfrac{1}{2}x\\cos x$. $y_p''+y_p=\\sin x+\\tfrac{1}{2}x\\cos x-\\tfrac{1}{2}x\\cos x=\\sin x$ ✓.

**Typischer Fehler:** Bei Trig-Resonanz denken, man müsse mit $x^2$ multiplizieren. Nein — $\\pm i$ ist nur *einfache* Wurzel, daher reicht $x$. $x^2$ bräuchte man bei Doppelwurzel (was bei rein imaginären Wurzeln selten ist).`,
        [
          'Stör­frequenz $\\omega=1$. Vergleiche mit den char. Wurzeln.',
          'Wurzeln $\\pm i$, also $\\pm i\\cdot 1$ → Resonanzfall.',
          'Einfache Wurzel → Ansatz $\\cdot x$, nicht $\\cdot x^2$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Entscheidungslogik beim Resonanzcheck.',
        [
          'Charakteristische Gleichung aufstellen und Wurzeln $\\lambda_{1,2}$ bestimmen',
          'Aus der Störfunktion den "Prüf-Exponenten" $c$ bestimmen ($c$ direkt bei $e^{cx}$; $c=\\pm i\\omega$ bei $\\sin/\\cos$)',
          'Vergleichen: stimmt $c$ mit einer Wurzel überein?',
          'Nein → Standard-Ansatz ohne $x$-Faktor',
          'Ja, einfache Wurzel → Ansatz mit $x$ multiplizieren',
          'Ja, Doppelwurzel → Ansatz mit $x^2$ multiplizieren',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Der Resonanzcheck ist entscheidend für den Erfolg des Ansatzes. Reihenfolge: erst homogene Analyse, dann Störanalyse, dann Vergleich, dann Ansatzwahl nach Multiplizität.

**Rechnung:** Die Multiplizität der Wurzel entscheidet über die Potenz des $x$-Faktors. Faustregel: "$x^{\\text{Multiplizität}}$".

**Probe:** Wenn nach dem Einsetzen $0=\\text{etwas}$ steht, ist der $x$-Faktor zu klein gewählt — höhere Potenz probieren.

**Typischer Fehler:** Direkt Standard-Ansatz, ohne Resonanzcheck. Besonders gefährlich bei Doppelwurzel.`,
        [
          'Homogene Lösung zuerst — sie sagt, was bereits „belegt" ist.',
          'Prüf-Exponent: bei $\\sin(\\omega x)$ ist $c=\\pm i\\omega$.',
          'Multiplizität bestimmt die Potenz des $x$-Faktors.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Aussage zur Resonanz ist FALSCH?',
        [
          'Resonanz tritt nur bei exponentieller Störung auf, nie bei trigonometrischer.',
          'Bei Doppelwurzel als Resonanzursache wird mit $x^2$ multipliziert.',
          'Resonanz bedeutet: die Störfunktion ist bereits homogene Lösung.',
          'Bei einfacher Wurzel reicht Multiplikation mit $x$.',
        ],
        0,
        `**Ansatz:** Resonanz kann bei jeder Störform auftreten, bei der der „Prüf-Exponent" $c$ (reell bei $e^{cx}$, komplex $\\pm i\\omega$ bei $\\sin/\\cos$) mit einer Wurzel der char. Gleichung übereinstimmt.

**Rechnung:** Trigonometrische Resonanz ist der wichtigste Fall in der Technik: Erreger-Frequenz = Eigenfrequenz → Amplitudenaufschaukelung. Beispiel: $y''+\\omega_0^2 y=\\sin(\\omega_0 x)$ — resonanzverstärkte Schwingung.

**Probe:** A ist genau deshalb falsch. B, C, D stimmen: Multiplizität → $x$-Potenz; Resonanz = Störung ist homogene Lösung; einfache Wurzel → $\\cdot x$.

**Typischer Fehler:** Resonanz nur mit „Schwingung" oder nur mit $e^{cx}$ assoziieren. In Wahrheit ist sie ein allgemeines Phänomen, sobald der Ansatz-Exponent eine Wurzel der char. Gleichung trifft — egal ob reell oder komplex.`,
        [
          'Suche die falsche Aussage.',
          'Kann Resonanz auch bei $\\sin/\\cos$-Störung auftreten?',
          'Klassisches Beispiel: Schwingung im Gleichklang.',
        ],
        {
          1: 'Diese Aussage ist *richtig*: bei Doppelwurzel braucht man $x^2$, um aus der zweifach-homogenen Lösung herauszukommen. Sie ist also nicht die gesuchte falsche Aussage.',
          2: 'Richtig: das ist genau die Definition von Resonanz. Wenn die Störfunktion selbst homogene Lösung ist, dann erzeugt der Standard-Ansatz eine $0$ auf der linken Seite.',
          3: 'Richtig — einfache Wurzel, Multiplizität 1, Ansatz $\\cdot x^1$. Die Regel ist konsistent mit $x^{\\text{Multiplizität}}$.',
        },
      ),
    ],

    // ── [4] Allgemeine Lösung ──────────────────────────────────────────────
    4: [
      mc(
        '[PRÜFUNG] Die allgemeine Lösung von $y\'\' - 3y\' + 2y = 6$ lautet:',
        [
          '$y = C_1 e^{x} + C_2 e^{2x} + 3$',
          '$y = C_1 e^{x} + C_2 e^{2x}$',
          '$y = 3$',
          '$y = C_1 e^{-x} + C_2 e^{-2x} + 3$',
        ],
        0,
        `**Ansatz:** Allgemeine Lösung = homogene Lösung $y_h$ + beliebige Partikulärlösung $y_p$.

**Rechnung:** - Homogen: $\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)=0$ → $\\lambda=1,2$ → $y_h=C_1e^x+C_2e^{2x}$. - Partikulär: Störung konstant, Ansatz $y_p=A$ (da $\\lambda=0$ keine Wurzel). $0+0+2A=6$ → $A=3$, also $y_p=3$. - Gesamt: $y=C_1e^x+C_2e^{2x}+3$.

**Probe:** $y'=C_1e^x+2C_2e^{2x}$, $y''=C_1e^x+4C_2e^{2x}$. $y''-3y'+2y=(1-3+2)C_1e^x+(4-6+2)C_2e^{2x}+0-0+6=0+0+6=6$ ✓.

**Typischer Fehler:** Partikulärlösung weglassen und nur $y_h$ angeben. Dann erfüllt $y$ die homogene DGL, nicht die inhomogene — die rechte Seite 6 fehlt völlig.`,
        [
          'Homogene Lösung bestimmen.',
          'Partikulärlösung für konstante Störung: $y_p=A$.',
          'Gesamt: $y=y_h+y_p$.',
        ],
        {
          1: "Die Partikulärlösung fehlt. Diese Form löst nur die homogene DGL $y''-3y'+2y=0$, nicht die inhomogene mit rechter Seite $6$. Bei $y=y_h$ ergibt das Einsetzen $0$, nicht $6$.",
          2: 'Das ist nur die Partikulärlösung allein, ohne die zwei Integrationskonstanten der homogenen Lösung. Eine DGL 2. Ordnung braucht **zwei** freie Konstanten für die Anfangsbedingungen.',
          3: 'Falsche Vorzeichen im Exponenten. Aus $(\\lambda-1)(\\lambda-2)=0$ folgt $\\lambda=+1, +2$, nicht $-1, -2$. Prüfe die Faktorisierung.',
        },
      ),
      ni(
        '[PRÜFUNG] Für $y\'\' + y = 2$ lautet $y_h = C_1\\cos x + C_2\\sin x$ und $y_p = 2$. Wie viele freie Konstanten enthält die allgemeine Lösung?',
        2, 0, '',
        `**Ansatz:** Die Anzahl freier Konstanten in der allgemeinen Lösung einer linearen DGL n-ter Ordnung ist immer $n$ — unabhängig davon, ob die DGL homogen oder inhomogen ist. Die Partikulärlösung bringt keine zusätzlichen Konstanten, weil sie fest gewählt ist.

**Rechnung:** DGL ist 2. Ordnung → genau 2 Konstanten in $y_h$, keine in $y_p$. Also $y=C_1\\cos x+C_2\\sin x+2$ hat **2** freie Konstanten ($C_1, C_2$).

**Probe:** Ein AWP mit $y(0)$ und $y'(0)$ liefert genau 2 Bedingungen, passend zu 2 Konstanten — eindeutig lösbar.

**Typischer Fehler:** Die Partikulärlösung als weitere Konstante zählen ("2 aus $y_h$ + 1 aus $y_p = 3$"). Falsch: $y_p=2$ ist ein fester Zahlenwert, keine freie Konstante.`,
        [
          'Ordnung der DGL bestimmt die Anzahl freier Konstanten.',
          'Partikulärlösung enthält keine freien Konstanten.',
          'Zähle nur $C_1, C_2, \\dots$ in $y_h$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Wenn $y_{p,1}$ und $y_{p,2}$ zwei verschiedene Partikulärlösungen derselben inhomogenen DGL sind, ist ihre Differenz $y_{p,1}-y_{p,2}$ eine Lösung der homogenen DGL.',
        true,
        `**Ansatz:** Linearität: Für linearen Differentialoperator $L$ gilt $L[y_1-y_2]=L[y_1]-L[y_2]$.

**Rechnung:** Aus $L[y_{p,1}]=q$ und $L[y_{p,2}]=q$ folgt $L[y_{p,1}-y_{p,2}]=q-q=0$. Also ist $y_{p,1}-y_{p,2}$ Lösung der homogenen Gleichung. Konsequenz: Jede weitere Partikulärlösung unterscheidet sich von einer gegebenen nur durch einen homogenen Anteil — und kann daher durch Neubelegung von $C_1, C_2$ absorbiert werden. Die allgemeine Lösung $y=y_h+y_p$ ist eindeutig (im Sinne der Lösungsmenge), auch wenn $y_p$ nicht eindeutig ist.

**Probe:** Beispiel $y''+y=2$: $y_{p,1}=2$ und $y_{p,2}=2+\\cos x$ sind beide partikulär (da $\\cos x$ homogene Lösung). Differenz: $-\\cos x$ — homogene Lösung ✓.

**Typischer Fehler:** Glauben, es gäbe genau eine Partikulärlösung. In Wahrheit ist $y_p$ nur bis auf eine homogene Lösung bestimmt — daher wählt man den *einfachsten* Ansatz-Typ.`,
        [
          'Linearität von $L$.',
          '$L[y_1-y_2]=L[y_1]-L[y_2]$.',
          'Wenn $L[y_1]=L[y_2]=q$, dann $L[y_1-y_2]=0$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne DGL und allgemeine Lösung zu.',
        [
          { left: '$y\'\' + y = 0$', right: '$y = C_1\\cos x + C_2\\sin x$' },
          { left: '$y\'\' + y = 4$', right: '$y = C_1\\cos x + C_2\\sin x + 4$' },
          { left: '$y\'\' - y = e^{2x}$', right: '$y = C_1 e^{x} + C_2 e^{-x} + \\tfrac{1}{3}e^{2x}$' },
          { left: '$y\'\' - 2y\' + y = 0$', right: '$y = (C_1 + C_2 x) e^{x}$' },
        ],
        `**Ansatz:** Für jede DGL: homogene Lösung bestimmen (Char. Gl.), partikuläre Lösung per Ansatz finden, dann $y_h+y_p$.

**Rechnung:** - $y''+y=0$: $\\lambda=\\pm i$ → $y_h$. - $y''+y=4$: wie oben, $y_p=4$ (Konstante). - $y''-y=e^{2x}$: $\\lambda=\\pm 1$, $y_p=Ae^{2x}$, $4A-A=1\\cdot e^{2x}$ aus Koeffizienten → $3A=1$ → $A=\\tfrac{1}{3}$. - $y''-2y'+y=0$: $\\lambda=1$ doppelt → $(C_1+C_2x)e^x$.

**Probe:** Jede Lösung erfüllt die DGL, was man durch Einsetzen prüfen kann.

**Typischer Fehler:** Bei Doppelwurzel den $x$-Faktor vergessen: $y=(C_1+C_2)e^x$ statt $(C_1+C_2x)e^x$. Dann nur eine effektive Konstante — die zweite Bedingung im AWP ist nicht erfüllbar.`,
        [
          'Homogene Lösung zuerst.',
          'Bei Doppelwurzel: $x$-Faktor.',
          'Partikulärlösung je nach Störterm.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Bestimmung der allgemeinen Lösung einer inhomogenen linearen DGL 2. Ordnung.',
        [
          'Charakteristische Gleichung $\\lambda^2+p\\lambda+q=0$ aufstellen',
          'Wurzeln $\\lambda_1, \\lambda_2$ bestimmen und homogene Lösung $y_h$ aufschreiben',
          'Ansatz für partikuläre Lösung $y_p$ nach Typ der Störfunktion wählen',
          'Resonanz prüfen und Ansatz ggf. mit $x$ oder $x^2$ multiplizieren',
          'Ansatz einsetzen und Koeffizienten berechnen',
          'Allgemeine Lösung zusammensetzen: $y = y_h + y_p$',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Standard-Workflow: homogen zuerst, dann partikulär mit Resonanzcheck, dann summieren. Diese Reihenfolge ist prüfungskritisch.

**Rechnung:** - Schritt 1–2: homogen. - Schritt 3–4: Ansatzwahl mit Resonanzcheck. - Schritt 5: Koeffizienten. - Schritt 6: Summe.

**Probe:** Am Ende durch Einsetzen verifizieren, dass $y$ die DGL erfüllt.

**Typischer Fehler:** Resonanzcheck nach hinten schieben oder vergessen. Das erzeugt später Widersprüche beim Koeffizientenvergleich.`,
        [
          'Homogene Lösung baut das Fundament.',
          'Resonanzcheck ist Teil der Ansatzwahl.',
          'Zum Schluss summieren.',
        ],
      ),
    ],

    // ── [5] AWP bei 2. Ordnung ────────────────────────────────────────────
    5: [
      ni(
        '[PRÜFUNG] Gegeben $y\'\' - y = 0$ mit $y(0) = 3$ und $y\'(0) = 1$. Berechne $C_1$ in der Lösung $y = C_1 e^{x} + C_2 e^{-x}$.',
        2, 0.001, '',
        `**Ansatz:** Zwei Bedingungen für zwei Konstanten. System aus $y(0)$ und $y'(0)$ aufstellen, lösen.

**Rechnung:** $y(0)=C_1+C_2=3$. $y'(x)=C_1e^x-C_2e^{-x}$, $y'(0)=C_1-C_2=1$. Addition: $2C_1=4$ → $C_1=2$, dann $C_2=1$.

**Probe:** $y=2e^x+e^{-x}$: $y(0)=2+1=3$ ✓, $y'(0)=2-1=1$ ✓.

**Typischer Fehler:** Das Gleichungssystem falsch aufstellen, etwa $y'(0)=C_1+C_2$ statt $C_1-C_2$. Ableitung sauber: $\\frac{d}{dx}e^{-x}=-e^{-x}$ beachten!`,
        [
          "$y(0)=C_1+C_2$ und $y'(0)=C_1-C_2$.",
          'Zwei Gleichungen für zwei Unbekannte.',
          'Addition eliminiert $C_2$: $2C_1=4$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Aussage zum AWP bei DGL 2. Ordnung ist RICHTIG?',
        [
          'Zwei Anfangsbedingungen sind nötig, um beide Konstanten $C_1, C_2$ eindeutig zu bestimmen.',
          'Eine einzige Anfangsbedingung $y(0)$ reicht immer aus.',
          'Die Anfangsbedingungen werden auf die Partikulärlösung angewendet, nicht auf die Gesamtlösung.',
          'Bei Doppelwurzel reicht eine Anfangsbedingung.',
        ],
        0,
        `**Ansatz:** Eine lineare DGL $n$-ter Ordnung hat $n$ freie Konstanten, benötigt also $n$ Bedingungen. Bei 2. Ordnung: genau **zwei** Bedingungen, typisch $y(x_0)$ und $y'(x_0)$.

**Rechnung:** Die Bedingungen werden auf die **Gesamtlösung** $y=y_h+y_p$ angewandt, nicht nur auf $y_h$ oder $y_p$. Grund: nur die Gesamtlösung beschreibt den realen Verlauf; $y_h$ hätte falsche Anfangswerte.

**Probe:** Standardbeispiel: Feder-Masse-System mit Anfangsauslenkung $y(0)=y_0$ und Anfangsgeschwindigkeit $y'(0)=v_0$ — zwei physikalische Messgrößen, zwei mathematische Bedingungen.

**Typischer Fehler:** Bedingungen nur auf $y_h$ anwenden und $y_p$ dabei vergessen. Dann passt der Funktionswert bei $x=0$ nicht zur Realität.`,
        [
          'Ordnung der DGL = Anzahl nötiger Bedingungen.',
          'Hier 2. Ordnung → 2 Bedingungen.',
          'Anwendung auf Gesamtlösung $y=y_h+y_p$.',
        ],
        {
          1: 'Eine einzige Bedingung lässt die zweite Konstante unbestimmt — die Lösung ist dann nicht eindeutig. Auch bei 1. Ordnung braucht man *eine* Bedingung (passend zur Ordnung); bei 2. Ordnung sind es *zwei*.',
          2: 'Die Bedingungen müssen auf die Gesamtlösung $y=y_h+y_p$ angewandt werden. Die Partikulärlösung allein enthält keine freien Konstanten, sodass das Einsetzen keinen Parameter festlegt.',
          3: 'Auch bei Doppelwurzel hat die Lösung $(C_1+C_2 x)e^{\\lambda x}$ zwei freie Konstanten. Entsprechend sind zwei Bedingungen nötig, auch hier.',
        },
      ),
      tf(
        '[PRÜFUNG] Die Anfangsbedingungen $y(0)=0$ und $y(1)=1$ reichen ebenfalls aus, um die zwei Konstanten einer DGL 2. Ordnung eindeutig zu bestimmen.',
        false,
        `**Ansatz:** Unterscheide **Anfangswertproblem (AWP)** und **Randwertproblem (RWP)**. AWP: beide Bedingungen am gleichen $x_0$, meist $y(x_0)$ und $y'(x_0)$. RWP: Bedingungen an zwei verschiedenen Stellen.

**Rechnung:** $y(0)=0$ und $y(1)=1$ ist ein **Randwertproblem** (zwei verschiedene $x$-Werte, beide am Funktionswert, nicht an der Ableitung). RWP sind lösbar oder auch nicht — nicht immer eindeutig. Beispiel: $y''+\\pi^2 y=0$ mit $y(0)=0$, $y(1)=0$ hat unendlich viele Lösungen ($y=C\\sin(\\pi x)$ für beliebiges $C$). Die Aussage „reichen ebenfalls aus" ist also falsch — RWP sind keine direkten AWP-Ersatz.

**Probe:** Standard-AWP: $y(0)=a$, $y'(0)=b$ — immer eindeutig lösbar (Existenz- und Eindeutigkeitssatz). RWP: Abhängig von Eigenwerten der DGL.

**Typischer Fehler:** Zwei Bedingungen sofort als "reicht aus" werten, ohne zu prüfen, an welchen Stellen sie gelten. An **gleicher** Stelle (eine Funktionswert, eine Ableitung) = AWP, eindeutig. An **verschiedenen** Stellen = RWP, nicht immer eindeutig.`,
        [
          'AWP vs. RWP unterscheiden.',
          'AWP: beide Bedingungen bei $x_0$, eine Funktionswert, eine Ableitung.',
          'RWP: Bedingungen an zwei verschiedenen Stellen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Lösung eines AWP 2. Ordnung.',
        [
          'Allgemeine Lösung bestimmen: $y(x) = y_h(x) + y_p(x)$',
          'Ableitung $y\'(x)$ bilden',
          'Anfangswerte $y(x_0)$ und $y\'(x_0)$ einsetzen — zwei Gleichungen entstehen',
          'Das $2 \\times 2$-Gleichungssystem nach $C_1$ und $C_2$ auflösen',
          'Lösung mit konkreten Werten für $C_1, C_2$ angeben',
          'Probe: Anfangswerte einsetzen und DGL verifizieren',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Standard-Workflow AWP: erst allgemein, dann Bedingungen einsetzen, dann auflösen.

**Rechnung:** - Schritt 1: $y=y_h+y_p$. - Schritt 2: Ableitung. - Schritt 3: Bedingungen einsetzen → 2 Gleichungen. - Schritt 4: $2\\times 2$-LGS lösen. - Schritt 5: konkrete Lösung. - Schritt 6: Probe.

**Probe:** Am Ende sowohl $y(x_0)$ als auch $y'(x_0)$ prüfen, zusätzlich die DGL selbst.

**Typischer Fehler:** Bedingungen einsetzen vor $y_p$ dazuaddiert — dann ist das System falsch parametrisiert.`,
        [
          'Allgemeine Lösung inkl. $y_p$ ist die Basis.',
          "Ableitung $y'$ für die zweite Bedingung nötig.",
          'Probe absichert die Konstanten.',
        ],
      ),
      ni(
        '[PRÜFUNG] AWP: $y\'\' + 4y = 0$, $y(0) = 2$, $y\'(0) = 6$. Berechne $C_2$ in $y = C_1\\cos(2x) + C_2\\sin(2x)$.',
        3, 0.001, '',
        `**Ansatz:** Zwei Bedingungen aufstellen, dann auflösen.

**Rechnung:** $y(0)=C_1\\cdot 1+C_2\\cdot 0=C_1=2$ → $C_1=2$. $y'(x)=-2C_1\\sin(2x)+2C_2\\cos(2x)$, $y'(0)=2C_2=6$ → $C_2=3$.

**Probe:** $y=2\\cos(2x)+3\\sin(2x)$: $y(0)=2$ ✓, $y'(x)=-4\\sin(2x)+6\\cos(2x)$, $y'(0)=6$ ✓. Auch DGL: $y''=-8\\cos(2x)-12\\sin(2x)$, $y''+4y=-8\\cos-12\\sin+8\\cos+12\\sin=0$ ✓.

**Typischer Fehler:** Faktor $2$ beim Ableiten von $\\sin(2x)$ vergessen. Dann $y'(0)=C_2$ statt $2C_2$ und $C_2=6$ (falsch).`,
        [
          'Kettenregel: $\\frac{d}{dx}\\sin(2x)=2\\cos(2x)$.',
          "$y'(0)=2C_2$, da $\\cos(0)=1$, $\\sin(0)=0$.",
          '$2C_2=6$ → $C_2=3$.',
        ],
      ),
    ],
  },

  // dgl-3-2 — Prüfung: DGL 2. Ordnung & Anwendungen  (6 subGoals)
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-3-2': {

    // ── [0] Störansatz Polynom ────────────────────────────────────────────
    0: [
      mc(
        '[PRÜFUNG] Welcher Ansatz für $y_p$ ist bei $y\'\' - y\' + y = x^2 + 3$ richtig?',
        [
          '$y_p = Ax^2 + Bx + C$',
          '$y_p = Ax^2$',
          '$y_p = Ax^2 + Bx$',
          '$y_p = A\\cdot(x^2+3)$',
        ],
        0,
        `**Ansatz:** Ist die Störfunktion ein Polynom $P_n(x)$ vom Grad $n$ und $\\lambda=0$ keine Wurzel der char. Gleichung, wählt man als Partikulärlösung ein vollständiges Polynom $Q_n(x)$ gleichen Grades mit allen Koeffizienten $A,B,C,\\dots$.

**Rechnung:** Hier $n=2$, char. Gleichung $\\lambda^2-\\lambda+1=0$ hat $\\lambda=\\tfrac{1\\pm i\\sqrt{3}}{2}\\neq 0$, kein Resonanzfall. Also $y_p=Ax^2+Bx+C$. Einsetzen ergibt $2A-(2Ax+B)+Ax^2+Bx+C=x^2+3$, Koeffizientenvergleich: $A=1$, $-2A+B=0\\Rightarrow B=2$, $2A-B+C=3\\Rightarrow C=3$.

**Probe:** Mit $y_p=x^2+2x+3$: $y_p'=2x+2$, $y_p''=2$. $y_p''-y_p'+y_p=2-(2x+2)+x^2+2x+3=x^2+3$ ✓.

**Typischer Fehler:** Nur das Monom höchsten Grades ansetzen (z. B. $Ax^2$). Dann bleibt beim Einsetzen $3$ auf der rechten Seite übrig und es findet sich kein passender Koeffizient — der Koeffizientenvergleich scheitert.`,
        [
          'Welchen Grad hat die Störfunktion?',
          'Faustregel: Polynom-Ansatz = vollständiges Polynom gleichen Grades.',
          'Koeffizientenvergleich braucht ALLE Monome ($x^2, x^1, x^0$).',
        ],
        {
          1: 'Ein Ansatz mit nur $Ax^2$ lässt die Terme $Bx$ und $C$ fehlen. Beim Einsetzen tauchen jedoch $x^1$- und $x^0$-Beiträge auf — ohne die restlichen Koeffizienten kannst du das System $Ax^2+3$ nicht erfüllen.',
          2: "Fehlt der konstante Term $C$. Bei $y_p=Ax^2+Bx$ liefert $y_p''-y_p'$ einen konstanten Beitrag $2A-B$, aber es gibt keinen freien Parameter, um die $+3$ auf der rechten Seite zu matchen.",
          3: 'Das ist kein allgemeiner Polynom-Ansatz, sondern nur eine Skalierung der rechten Seite. Bei linearen DGL mit konstanten Koeffizienten muss man unabhängige Koeffizienten für jede Potenz einführen — sonst zu wenige Freiheitsgrade.',
        },
      ),
      ni(
        '[PRÜFUNG] Gegeben $y\'\' + 4y = 8x + 12$. Bestimme im Polynom-Ansatz $y_p = Ax + B$ den Koeffizienten $A$.',
        2, 0.001, '',
        `**Ansatz:** Störfunktion ist linear (Grad 1), char. Gl. $\\lambda^2+4=0$ hat $\\lambda=\\pm 2i\\neq 0$ — kein Resonanzfall. Ansatz $y_p=Ax+B$.

**Rechnung:** $y_p'=A$, $y_p''=0$. Einsetzen: $0+4(Ax+B)=8x+12$, also $4Ax+4B=8x+12$. Koeffizientenvergleich: $4A=8\\Rightarrow A=2$, $4B=12\\Rightarrow B=3$.

**Probe:** $y_p=2x+3$: $y_p''+4y_p=0+4(2x+3)=8x+12$ ✓.

**Typischer Fehler:** $y_p'$ oder $y_p''$ falsch gebildet — bei linearem Ansatz ist $y_p''=0$ und nicht etwa $A$. Dann würde $A$ zusätzlich auf der linken Seite auftauchen und das Ergebnis verfälschen.`,
        [
          "Ansatz $y_p=Ax+B$, dann $y_p'$ und $y_p''$ bilden.",
          'In DGL einsetzen und nach Potenzen von $x$ sortieren.',
          'Koeffizient vor $x$ vergleichen: $4A=8$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + 3y\' + 2y = 5x^3$ ist der passende Partikulär-Ansatz $y_p = Ax^3 + Bx^2 + Cx + D$.',
        true,
        `**Ansatz:** Polynom-Störfunktion vom Grad $n$ → Ansatz ist vollständiges Polynom gleichen Grades, sofern $\\lambda=0$ keine Wurzel der char. Gleichung ist.

**Rechnung:** $\\lambda^2+3\\lambda+2=(\\lambda+1)(\\lambda+2)=0$ liefert $\\lambda=-1,-2$. $\\lambda=0$ ist keine Wurzel. Daher kein Resonanzfall, und der vollständige Polynom-Ansatz $y_p=Ax^3+Bx^2+Cx+D$ ist korrekt.

**Probe:** Einsetzen erzeugt beim Differenzieren Terme bis Grad 3 ($y_p''$: Grad 1, $y_p'$: Grad 2, $y_p$: Grad 3). Der Koeffizientenvergleich liefert 4 Gleichungen für 4 Unbekannte — das System ist eindeutig lösbar.

**Typischer Fehler:** Nur $y_p=Ax^3$ ansetzen und dann das Koeffizientensystem nicht schließen können. Beim Ableiten von $Ax^3$ entstehen auch $x^2$- und $x^1$-Terme — diese brauchen eigene Koeffizienten.`,
        [
          'Stell fest, ob $\\lambda=0$ Wurzel der char. Gl. ist.',
          'Faktorisiere $\\lambda^2+3\\lambda+2$.',
          'Kein Resonanzfall → vollständiges Polynom gleichen Grades.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Störfunktion den passenden Polynom-Ansatz zu (ohne Resonanz).',
        [
          { left: '$q(x)=7$ (Konstante)', right: '$y_p = A$' },
          { left: '$q(x)=3x-2$', right: '$y_p = Ax + B$' },
          { left: '$q(x)=x^2$', right: '$y_p = Ax^2 + Bx + C$' },
          { left: '$q(x)=5x^3 - x + 4$', right: '$y_p = Ax^3 + Bx^2 + Cx + D$' },
        ],
        `**Ansatz:** Der Grad des Ansatzes richtet sich nach dem **höchsten** Grad in $q(x)$. Unabhängig von der konkreten Form (fehlende Zwischenglieder wie bei $5x^3-x+4$ ohne $x^2$) wird immer das **vollständige** Polynom dieses Grades angesetzt.

**Rechnung:** Ableitungen mischen die Potenzen — alle Koeffizienten werden benötigt. Der Koeffizientenvergleich löst dann ein $(n+1)\\times(n+1)$-System.

**Probe:** Jede Wahl muss beim Einsetzen Koeffizientenvergleich erlauben. Fehlende Grade im Ansatz blockieren einzelne Gleichungen.

**Typischer Fehler:** Bei $q(x)=5x^3-x+4$ nur $Ax^3+Cx+D$ ansetzen (weil $x^2$ fehlt). Falsch — die Ableitungen erzeugen $x^2$-Terme, die sonst nicht gematcht werden können.`,
        [
          'Höchster Grad von $q(x)$ bestimmt Grad des Ansatzes.',
          'Immer vollständiges Polynom — auch wenn Zwischenglieder in $q$ fehlen.',
          'Konstante Störfunktion → konstanter Ansatz.',
        ],
      ),
      mc(
        '[PRÜFUNG] Für $y\'\' - y\' = 2x + 1$ ist der Standard-Ansatz $y_p = Ax + B$ falsch — warum?',
        [
          '$\\lambda=0$ ist Wurzel der char. Gleichung — Resonanz, Ansatz muss $\\cdot x$ werden',
          'Der Ansatz ist korrekt — das System ist einfach lösbar',
          'Der Ansatz hat zu viele Parameter',
          'Polynom-Störfunktionen erlauben keine Konstante im Ansatz',
        ],
        0,
        `**Ansatz:** Bei Polynom-Störansatz muss man prüfen, ob $\\lambda=0$ Wurzel der charakteristischen Gleichung ist. Ist ja — weil Konstanten bereits zur homogenen Lösung gehören — so tritt Resonanz auf und der Ansatz wird mit $x$ multipliziert.

**Rechnung:** Char. Gleichung: $\\lambda^2-\\lambda=\\lambda(\\lambda-1)=0$ → $\\lambda=0,1$. Da $\\lambda=0$ Wurzel ist, steckt in $y_h=C_1+C_2 e^x$ bereits die Konstante $C_1$. Der Ansatz $Ax+B$ enthält $B$ (Konstante) — das ist die homogene Lösung und bringt nichts. Korrektur: $y_p=x(Ax+B)=Ax^2+Bx$.

**Probe:** Mit $y_p=Ax^2+Bx$: $y_p'=2Ax+B$, $y_p''=2A$. $y_p''-y_p'=2A-2Ax-B=-2Ax+(2A-B)=2x+1$ → $-2A=2\\Rightarrow A=-1$, $2A-B=1\\Rightarrow B=-3$. Also $y_p=-x^2-3x$.

**Typischer Fehler:** Resonanzprüfung vergessen. Das passiert besonders bei Polynom-Störungen, weil Konstanten nicht als "Exponential mit $\\lambda=0$" gesehen werden. Faustregel: fehlt der Term $y$ (also $q=0$) in der DGL, ist $\\lambda=0$ immer Wurzel.`,
        [
          'Char. Gleichung $\\lambda^2-\\lambda=0$ faktorisieren.',
          'Welche Wurzeln? Ist $\\lambda=0$ darunter?',
          'Wenn ja: Resonanz — Polynom-Ansatz $\\cdot x$.',
        ],
        {
          1: 'Der Ansatz $Ax+B$ enthält $B$ als Konstante — das ist aber bereits Teil der homogenen Lösung ($y_h=C_1+C_2e^x$). Resonanz muss berücksichtigt werden, sonst scheitert der Koeffizientenvergleich.',
          2: 'Die Anzahl der Parameter passt zum Grad der Störfunktion. Das Problem ist nicht Überparametrisierung, sondern dass ein Teil des Ansatzes bereits die homogene DGL löst (→ Resonanz).',
          3: 'Polynom-Ansätze dürfen konstante Terme enthalten (sonst könnte man $q(x)=7$ nie treffen). Das Problem ist hier speziell, dass in dieser DGL der Term $y$ fehlt — dadurch wird $\\lambda=0$ zur Wurzel.',
        },
      ),
    ],

    // ── [1] Störansatz Exponential ────────────────────────────────────────
    1: [
      ni(
        '[PRÜFUNG] Finde $A$ in $y_p = A e^{2x}$ für die DGL $y\'\' - 3y\' + 2y = 4e^{2x}$... Moment, ist der Ansatz überhaupt zulässig? Wenn nicht, schreibe $0$. Wenn ja, gib $A$ an.',
        0, 0.001, '',
        `**Ansatz:** Vor dem Einsetzen prüfen, ob $c=2$ Wurzel der charakteristischen Gleichung ist. Nur wenn nicht, ist der Ansatz $Ae^{cx}$ zulässig.

**Rechnung:** Char. Gl.: $\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)=0$ → $\\lambda=1,2$. Da $c=2$ **Wurzel** ist, liegt Resonanz vor. Der Ansatz $Ae^{2x}$ ist **nicht** zulässig und muss zu $Axe^{2x}$ modifiziert werden. Antwort für $A$ im Standard-Ansatz: **0** (nicht zulässig).

**Probe:** Einsetzen von $y_p=Ae^{2x}$ liefert $(4A-6A+2A)e^{2x}=0\\neq 4e^{2x}$ — Ansatz ergibt Widerspruch, genau weil $e^{2x}$ homogene Lösung ist.

**Typischer Fehler:** Direkt einsetzen, ohne Resonanzcheck. Dann steht plötzlich $0=4e^{2x}$ und der Rechnende ist verwirrt. Regel: vor jedem $Ae^{cx}$-Ansatz kurz die char. Gleichung faktorisieren.`,
        [
          'Bestimme die Wurzeln der charakteristischen Gleichung.',
          'Liegt $c=2$ unter den Wurzeln?',
          'Falls ja: Ansatz unzulässig → $A=0$ eintragen.',
        ],
      ),
      mc(
        '[PRÜFUNG] Für $y\'\' - 4y\' + 3y = 5e^{-x}$ ist der richtige Ansatz:',
        [
          '$y_p = A e^{-x}$',
          '$y_p = A x e^{-x}$',
          '$y_p = A e^{x}$',
          '$y_p = (Ax + B) e^{-x}$',
        ],
        0,
        `**Ansatz:** Ansatz $Ae^{cx}$ mit $c=-1$. Resonanz prüfen: char. Gleichung $\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)=0$ → $\\lambda=1,3$. $c=-1$ ist **keine** Wurzel → Ansatz $Ae^{-x}$ zulässig.

**Rechnung:** $y_p=Ae^{-x}$, $y_p'=-Ae^{-x}$, $y_p''=Ae^{-x}$. Einsetzen: $Ae^{-x}-4(-Ae^{-x})+3Ae^{-x}=(1+4+3)Ae^{-x}=8Ae^{-x}=5e^{-x}$ → $A=\\tfrac{5}{8}$.

**Probe:** Mit $y_p=\\tfrac{5}{8}e^{-x}$: $y_p''-4y_p'+3y_p=\\tfrac{5}{8}e^{-x}(1+4+3)=\\tfrac{5}{8}\\cdot 8\\cdot e^{-x}=5e^{-x}$ ✓.

**Typischer Fehler:** $c$ vorschnell mit einer Wurzel verwechseln (z. B. $c=-1$ mit $\\lambda=1$). Vorzeichen zählen — nur wenn $c$ exakt mit einem $\\lambda$ übereinstimmt, liegt Resonanz vor.`,
        [
          'Char. Gleichung: $\\lambda^2-4\\lambda+3=0$.',
          'Wurzeln $\\lambda=1, 3$. Ist $c=-1$ dabei?',
          'Nein → Standard-Ansatz $Ae^{-x}$.',
        ],
        {
          1: 'Das wäre der Resonanzansatz. Hier liegt aber keine Resonanz vor: $c=-1$ ist keine Wurzel der char. Gleichung ($\\lambda=1, 3$). Ohne Resonanz bleibt der Ansatz im Standard-Format $Ae^{cx}$.',
          2: 'Vorzeichen verwechselt: die Störfunktion ist $e^{-x}$, nicht $e^{x}$. Der Ansatz muss denselben Exponenten tragen wie die rechte Seite.',
          3: 'Dieser Ansatz passt zu einer Störfunktion der Form $P_1(x)\\cdot e^{-x}=(ax+b)e^{-x}$. Hier ist aber $q(x)=5e^{-x}$ (nur Exponential, kein Polynomfaktor). Daher genügt $Ae^{-x}$.',
        },
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + y = e^{2x}$ ist $c=2$ kein Eigenwert der char. Gleichung, daher ist $y_p = A e^{2x}$ ein gültiger Ansatz.',
        true,
        `**Ansatz:** Resonanzcheck: Eigenwerte aus char. Gl. Wenn $c$ keiner davon ist → Standard-Exponentialansatz erlaubt.

**Rechnung:** Char. Gl.: $\\lambda^2+1=0$ → $\\lambda=\\pm i$. $c=2$ ist weder $+i$ noch $-i$ (und auch nicht rein reell wie $i$). Ansatz zulässig: $y_p=Ae^{2x}$, $y_p''=4Ae^{2x}$. $y_p''+y_p=5Ae^{2x}=e^{2x}$ → $A=1/5$.

**Probe:** $y_p=\\tfrac{1}{5}e^{2x}$: $y_p''+y_p=\\tfrac{1}{5}(4e^{2x}+e^{2x})=\\tfrac{1}{5}\\cdot 5e^{2x}=e^{2x}$ ✓.

**Typischer Fehler:** Komplexe Eigenwerte mit beliebigen reellen $c$ verwechseln. Nur wenn $c$ **exakt** einer der (ggf. komplexen) Wurzeln ist, liegt Resonanz vor — $c=2$ ist ein völlig anderer Wert als $\\pm i$.`,
        [
          'Wurzeln von $\\lambda^2+1=0$?',
          'Vergleiche $c=2$ mit diesen Wurzeln.',
          'Keine Übereinstimmung → kein Resonanzfall.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Bestimmung der partikulären Lösung bei exponentieller Störung.',
        [
          'Charakteristische Gleichung $\\lambda^2+p\\lambda+q=0$ aufstellen und Wurzeln bestimmen',
          'Prüfen, ob $c$ eine Wurzel ist (Resonanzcheck)',
          'Ansatz wählen: $Ae^{cx}$ (ohne Resonanz) oder $Axe^{cx}$ / $Ax^2e^{cx}$ (mit Resonanz)',
          'Ansatz zweimal ableiten und in die DGL einsetzen',
          'Koeffizient $A$ durch Koeffizientenvergleich berechnen',
          'Probe: $y_p$ in die ursprüngliche DGL einsetzen',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Der Resonanzcheck steht vor der Ansatzwahl — sonst riskiert man Widersprüche.

**Rechnung:** Reihenfolge logisch: 1) homogen analysieren, 2) $c$ mit Wurzeln vergleichen, 3) Ansatz, 4) Einsetzen, 5) Koeffizienten, 6) Probe.

**Probe:** Das Ergebnis muss die ursprüngliche DGL Punkt für Punkt erfüllen — nicht nur die homogene.

**Typischer Fehler:** Sofort einsetzen ohne Resonanzcheck. Kommt dann $0=\\text{etwas}$ heraus, muss man zurück zum Anfang.`,
        [
          'Zuerst Wissen über die homogene DGL aufbauen.',
          'Resonanzcheck bestimmt die Ansatz-Form.',
          'Probe am Ende absichert die Lösung.',
        ],
      ),
      ni(
        '[PRÜFUNG] Berechne $A$ in $y_p = A e^{3x}$ für die DGL $y\'\' - 2y\' - 3y = 8 e^{3x}$... falls zulässig. Falls Resonanz vorliegt, trage $0$ ein.',
        0, 0.001, '',
        `**Ansatz:** Resonanzcheck! Char. Gleichung: $\\lambda^2-2\\lambda-3=(\\lambda-3)(\\lambda+1)=0$ → $\\lambda=3,-1$. $c=3$ ist Wurzel → Resonanz → Standard-Ansatz $Ae^{3x}$ ist **nicht** zulässig.

**Rechnung:** Zum Nachweis: mit $y_p=Ae^{3x}$: $y_p''-2y_p'-3y_p=(9-6-3)Ae^{3x}=0\\cdot Ae^{3x}=0\\neq 8e^{3x}$. Der Ansatz kann niemals die rechte Seite erzeugen. Antwort für $A$ im gefragten Ansatz: **0**.

**Probe:** Der korrekte Ansatz wäre $y_p=Axe^{3x}$: $y_p'=A(1+3x)e^{3x}$, $y_p''=A(6+9x)e^{3x}$. Einsetzen: $[A(6+9x)-2A(1+3x)-3Ax]e^{3x}=[6A+9Ax-2A-6Ax-3Ax]e^{3x}=4Ae^{3x}=8e^{3x}$ → $A=2$. Also $y_p=2xe^{3x}$ ist die richtige Partikulärlösung.

**Typischer Fehler:** Resonanzcheck weglassen, Ansatz $Ae^{3x}$ einsetzen, auf $0=8e^{3x}$ stoßen und dann fälschlich schließen, die DGL habe keine Lösung. Die DGL hat sehr wohl eine Lösung — nur der naive Ansatz versagt.`,
        [
          'Faktorisiere $\\lambda^2-2\\lambda-3$.',
          'Wurzeln $\\lambda=3, -1$. $c=3$ dabei?',
          'Ja → Resonanz → $A=0$ im Standard-Ansatz.',
        ],
      ),
    ],

    // ── [2] Störansatz Trig ───────────────────────────────────────────────
    2: [
      mc(
        '[PRÜFUNG] Welcher Ansatz ist für $y\'\' + 3y\' + 2y = 4\\cos(2x)$ richtig?',
        [
          '$y_p = A\\cos(2x) + B\\sin(2x)$',
          '$y_p = A\\cos(2x)$',
          '$y_p = A\\sin(2x)$',
          '$y_p = A e^{2ix}$',
        ],
        0,
        `**Ansatz:** Bei trigonometrischer Störung $q(x)=a\\cos(\\omega x)+b\\sin(\\omega x)$ (ein Summand genügt) lautet der vollständige Ansatz **immer** $y_p=A\\cos(\\omega x)+B\\sin(\\omega x)$ mit **beiden** Funktionen — auch wenn nur eine in $q$ auftritt. Grund: Ableiten wechselt zwischen $\\cos$ und $\\sin$. Vorab Resonanzcheck: ist $\\pm i\\omega$ Wurzel der char. Gl.?

**Rechnung:** Char. Gl.: $\\lambda^2+3\\lambda+2=(\\lambda+1)(\\lambda+2)=0$ → $\\lambda=-1,-2$. $\\pm 2i$ ist **nicht** darunter → kein Resonanzfall. Ansatz: $y_p=A\\cos 2x+B\\sin 2x$. Einsetzen liefert $(-2A+6B)\\cos 2x+(-6A-2B)\\sin 2x=4\\cos 2x$, also $-2A+6B=4$ und $-6A-2B=0$, Lösung $A=-\\tfrac{1}{5}$, $B=\\tfrac{3}{5}$.

**Probe:** $y_p=-\\tfrac{1}{5}\\cos 2x+\\tfrac{3}{5}\\sin 2x$ in die DGL eingesetzt ergibt exakt $4\\cos 2x$.

**Typischer Fehler:** Nur $A\\cos(2x)$ ansetzen, weil in $q$ nur $\\cos$ steht. Aber $y_p'$ erzeugt $\\sin$, $y_p''$ wieder $\\cos$ — ohne $\\sin$-Anteil im Ansatz bleibt ein Rest, der nicht gematcht werden kann.`,
        [
          'Erzeugt Ableiten von $\\cos(2x)$ einen $\\sin$-Beitrag?',
          'Beide Funktionen müssen im Ansatz stehen.',
          'Resonanz nur bei $\\pm i\\omega$ als Wurzel der char. Gl.',
        ],
        {
          1: 'Der Ansatz $A\\cos(2x)$ allein reicht nicht. Ableiten bringt $\\sin(2x)$-Terme ins Spiel, die keinen Matching-Partner haben. Der Koeffizientenvergleich bricht zusammen.',
          2: 'Gleicher Fehler wie bei $\\cos$ allein: Ableitung von $A\\sin(2x)$ liefert $\\cos(2x)$-Anteile, die nicht aufgefangen werden können. Beide Funktionen sind nötig.',
          3: 'Komplexer Ansatz ist theoretisch möglich, aber bei reellen Koeffizienten und reeller rechter Seite ist der reelle Ansatz $A\\cos+B\\sin$ Standard. Außerdem würde $Ae^{2ix}$ hier Resonanzcheck mit $\\lambda=2i$ erfordern.',
        },
      ),
      ni(
        '[PRÜFUNG] Für $y\'\' + 4y = 6\\sin(x)$ setzt man $y_p = A\\cos(x) + B\\sin(x)$ an. Berechne $B$.',
        2, 0.001, '',
        `**Ansatz:** Trigonometrische Störung mit $\\omega=1$. Resonanzcheck: $\\lambda^2+4=0$ → $\\lambda=\\pm 2i$, also $\\pm i\\omega=\\pm i$ ist **keine** Wurzel → Standard-Ansatz.

**Rechnung:** $y_p=A\\cos x+B\\sin x$, $y_p''=-A\\cos x-B\\sin x$. Einsetzen: $(-A+4A)\\cos x+(-B+4B)\\sin x=3A\\cos x+3B\\sin x=6\\sin x$. Koeffizientenvergleich: $3A=0\\Rightarrow A=0$, $3B=6\\Rightarrow B=2$.

**Probe:** $y_p=2\\sin x$: $y_p''+4y_p=-2\\sin x+8\\sin x=6\\sin x$ ✓.

**Typischer Fehler:** Vergessen, dass $y_p''$ das Vorzeichen wechselt ($-A\\cos x$, nicht $+A\\cos x$). Dann Koeffizienten falsch.`,
        [
          "Zweite Ableitung: $y_p''=-A\\cos x-B\\sin x$.",
          'In die DGL einsetzen und nach $\\cos, \\sin$ sortieren.',
          'Koeffizient vor $\\sin x$: $(-B+4B)=3B=6$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Wenn die Störfunktion nur $\\sin(\\omega x)$ ist, reicht als Ansatz $y_p = B\\sin(\\omega x)$ ohne $\\cos$-Term.',
        false,
        `**Ansatz:** Falsch. Auch bei reinem $\\sin$ (oder reinem $\\cos$) in der Störung braucht man **beide** Anteile im Ansatz, sobald die DGL einen Term mit **erster Ableitung** ($y'$) enthält.

**Rechnung:** Beispiel $y'+y=\\sin x$: mit $y_p=B\\sin x$ erhält man $B\\cos x+B\\sin x=\\sin x$ — das geht nicht, weil links $\\cos x$ auftaucht, rechts aber nicht. Der Koeffizientenvergleich liefert $B=0$ (aus $\\cos$-Anteil) und $B=1$ (aus $\\sin$-Anteil) — Widerspruch. Also braucht es $y_p=A\\cos x+B\\sin x$.

**Probe:** Nur wenn die DGL keinen $y'$-Term hat (z. B. $y''+\\omega_0^2 y=\\sin\\omega x$ mit $\\omega\\neq\\omega_0$), kommt man ausnahmsweise mit einem einzigen trig-Term aus. Generell-Regel: **beide** Terme ansetzen.

**Typischer Fehler:** "$q$ enthält nur $\\sin$, also brauche ich nur $B\\sin$". Funktioniert manchmal zufällig, versagt aber sobald $y'$ im Spiel ist.`,
        [
          "Wirkt $y'$ auf $B\\sin x$? Was entsteht?",
          'Reine $\\sin$-Ansätze versagen, sobald $\\cos$ aus Ableitung kommt.',
          'Im Zweifel immer beide Funktionen ansetzen.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne jeder trigonometrischen Störfunktion den passenden Ansatz zu.',
        [
          { left: '$q(x)=3\\cos(2x)$', right: '$y_p=A\\cos(2x)+B\\sin(2x)$' },
          { left: '$q(x)=\\sin(5x)-2\\cos(5x)$', right: '$y_p=A\\cos(5x)+B\\sin(5x)$' },
          { left: '$q(x)=e^{x}\\cos(3x)$', right: '$y_p=e^{x}(A\\cos(3x)+B\\sin(3x))$' },
          { left: '$q(x)=x\\sin(2x)$', right: '$y_p=(Ax+B)\\cos(2x)+(Cx+D)\\sin(2x)$' },
        ],
        `**Ansatz:** Trig-Ansatz = **vollständige Form** mit $\\cos$ und $\\sin$, bei gleicher Frequenz $\\omega$. Produkte mit $e^{\\alpha x}$ oder Polynomen werden entsprechend multipliziert bzw. in Polynomen-Ansatz ausgeschrieben.

**Rechnung:** - $e^{\\alpha x}\\cos\\omega x$: Ansatz $e^{\\alpha x}(A\\cos+B\\sin)$, Resonanz bei $\\alpha\\pm i\\omega$ Wurzel. - $x^n\\cos\\omega x$: Ansatz mit Polynomfaktor $(Ax^n+\\dots)\\cos+(Cx^n+\\dots)\\sin$.

**Probe:** Beim Einsetzen müssen alle Terme $x^k\\cdot \\cos\\omega x$ und $x^k\\cdot \\sin\\omega x$ gematcht werden — dafür ist der vollständige Ansatz nötig.

**Typischer Fehler:** Bei $x\\sin(2x)$ nur $Cx\\sin(2x)$ ansetzen. Ableiten bringt aber auch Terme ohne $x$ (nur $\\sin$, $\\cos$) und $\\cos$-Terme — alle Freiheitsgrade müssen rein.`,
        [
          'Frequenz $\\omega$ aus der Störung übernehmen.',
          'Bei Produktstörungen (z. B. mit $e^{\\alpha x}$ oder $x^n$) den Ansatz entsprechend erweitern.',
          'Immer $\\cos$ UND $\\sin$ im Ansatz.',
        ],
      ),
      mc(
        '[PRÜFUNG] Bei welcher DGL tritt **Resonanz** auf, so dass der Standard-Ansatz $y_p=A\\cos(3x)+B\\sin(3x)$ **NICHT** direkt zulässig ist?',
        [
          '$y\'\' + 9y = \\cos(3x)$',
          '$y\'\' + 4y = \\cos(3x)$',
          '$y\'\' + 16y = \\cos(3x)$',
          '$y\'\' + y = \\cos(3x)$',
        ],
        0,
        `**Ansatz:** Resonanzcheck bei Trig-Störung: Tritt $\\pm i\\omega$ (mit $\\omega$ = Störfrequenz) als Wurzel der charakteristischen Gleichung auf? Nur dann liegt Resonanz vor und der Standard-Ansatz scheitert.

**Rechnung:** - A: $\\lambda^2+9=0$ → $\\lambda=\\pm 3i$ = $\\pm i\\omega$ mit $\\omega=3$ → **Resonanz**. Ansatz muss $\\cdot x$: $y_p=x(A\\cos 3x+B\\sin 3x)$. - B: $\\lambda=\\pm 2i \\neq \\pm 3i$, kein Resonanzfall. - C: $\\lambda=\\pm 4i \\neq \\pm 3i$, kein Resonanzfall. - D: $\\lambda=\\pm i \\neq \\pm 3i$, kein Resonanzfall.

**Probe:** In A mit Standard-Ansatz $y_p=A\\cos 3x+B\\sin 3x$: $y_p''+9y_p=-9A\\cos-9B\\sin+9A\\cos+9B\\sin=0 \\neq \\cos 3x$. Das zeigt: der Standard-Ansatz kann die rechte Seite niemals erzeugen → Resonanz bestätigt.

**Typischer Fehler:** Resonanz nur bei exakter Frequenz-Übereinstimmung $\\pm i\\omega$ = Wurzel. In A ist $\\omega_0=\\sqrt{9}=3=\\omega$ → Eigenfrequenz = Störfrequenz → klassische mechanische Resonanz.`,
        [
          'Eigenfrequenz aus $\\lambda^2+q=0$: $\\omega_0=\\sqrt{q}$.',
          'Störfrequenz hier $\\omega=3$. Wo ist $\\omega_0=\\omega$?',
          'A: $q=9$, $\\omega_0=3=\\omega$ → Resonanz.',
        ],
        {
          1: 'Hier ist $\\omega_0=\\sqrt{4}=2\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz $A\\cos 3x+B\\sin 3x$ ist zulässig und liefert $A=-\\tfrac{1}{5}, B=0$.',
          2: '$\\omega_0=\\sqrt{16}=4\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz funktioniert: $y_p=\\tfrac{1}{7}\\cos 3x$.',
          3: '$\\omega_0=1\\neq 3=\\omega$, also kein Resonanzfall. Der Standard-Ansatz ist zulässig: $y_p=-\\tfrac{1}{8}\\cos 3x$.',
        },
      ),
    ],

    // ── [3] Resonanzfall ──────────────────────────────────────────────────
    3: [
      mc(
        '[PRÜFUNG] Wähle den Ansatz für $y\'\' - 4y\' + 4y = e^{2x}$.',
        [
          '$y_p = A x^2 e^{2x}$',
          '$y_p = A e^{2x}$',
          '$y_p = A x e^{2x}$',
          '$y_p = (Ax + B) e^{2x}$',
        ],
        0,
        `**Ansatz:** Char. Gleichung $\\lambda^2-4\\lambda+4=(\\lambda-2)^2=0$ hat die **Doppelwurzel** $\\lambda=2$. Störexponent $c=2$ stimmt damit überein → Resonanz. Bei Doppelwurzel multipliziert man mit $x^2$ (bei einfacher Wurzel nur mit $x$).

**Rechnung:** Ansatz $y_p=Ax^2e^{2x}$. Ableitungen: $y_p'=A(2x+2x^2)e^{2x}=2A(x+x^2)e^{2x}$, $y_p''=2A(1+2x)e^{2x}+4A(x+x^2)e^{2x}=2A(1+4x+2x^2)e^{2x}$. Einsetzen und Sortieren (Koeffizienten $x^0, x^1, x^2$) ergibt $2A e^{2x}=e^{2x}$ → $A=\\tfrac{1}{2}$. Also $y_p=\\tfrac{1}{2}x^2e^{2x}$.

**Probe:** $y_h=(C_1+C_2x)e^{2x}$. Beim Einsetzen von $y_p=Axe^{2x}$ würde man $0=e^{2x}$ erhalten — der Ansatz mit $x$ versagt (ist auch homogene Lösung!), erst $x^2$ bricht die Resonanz.

**Typischer Fehler:** Nur mit $x$ multiplizieren, wenn eine Doppelwurzel vorliegt. Dann rechnet man lange, bis plötzlich $A=0\\cdot\\text{etwas}$ herauskommt und spürt den Fehler zu spät.`,
        [
          'Char. Gl.: $(\\lambda-2)^2=0$ — doppelte Wurzel.',
          '$c=2$ ist diese Wurzel → Resonanz mit Multiplizität 2.',
          'Multiplikation mit $x^2$ (nicht nur $x$).',
        ],
        {
          1: 'Ohne Resonanzbehandlung. Aber $e^{2x}$ ist Teil der homogenen Lösung (sogar doppelt), daher liefert $Ae^{2x}$ beim Einsetzen $0\\neq e^{2x}$. Ansatz unbrauchbar.',
          2: 'Nur ein $x$-Faktor. Das bricht die Resonanz bei *einfacher* Wurzel, nicht bei *doppelter*. Hier ist $\\lambda=2$ doppelt, daher ist auch $xe^{2x}$ schon homogene Lösung. Man braucht $x^2$.',
          3: 'Dieser Ansatz passt zu einer Störung der Form $(ax+b)e^{2x}$, also einem Polynomfaktor. Hier ist die Störung aber nur $e^{2x}$ (konstanter Faktor) → Ansatz wäre überparametrisiert und die Lösung des Koeffizientensystems würde $A=0$, $B$ frei ergeben — ungeeignet.',
        },
      ),
      ni(
        '[PRÜFUNG] Bestimme $A$ in $y_p = Ax e^x$ für die DGL $y\'\' - y = 4 e^x$.',
        2, 0.001, '',
        `**Ansatz:** Char. Gl. $\\lambda^2-1=0$ → $\\lambda=\\pm 1$. Störexponent $c=1$ ist *einfache* Wurzel → Resonanz, Multiplizität 1, Ansatz $Axe^x$.

**Rechnung:** $y_p=Axe^x$, $y_p'=A(1+x)e^x$, $y_p''=A(2+x)e^x$. $y_p''-y_p=A(2+x)e^x-Axe^x=2Ae^x=4e^x$ → $A=2$.

**Probe:** $y_p=2xe^x$: $y_p''-y_p=2(2+x)e^x-2xe^x=4e^x$ ✓.

**Typischer Fehler:** Produktregel beim Ableiten vergessen. Dann kommt $y_p'=Ae^x$ (statt $A(1+x)e^x$) heraus und $A$ ist falsch.`,
        [
          'Char. Gl.: $\\lambda^2-1=(\\lambda-1)(\\lambda+1)=0$ → $\\lambda=\\pm 1$.',
          '$c=1$ ist *einfache* Wurzel → Ansatz $\\cdot x$.',
          "Produktregel: $(xe^x)'=(1+x)e^x$.",
        ],
      ),
      tf(
        '[PRÜFUNG] Bei $y\'\' + y = \\sin(x)$ liegt Resonanz vor, weil $\\pm i$ (die Wurzeln der char. Gleichung) auch die Frequenz der Störung ergeben.',
        true,
        `**Ansatz:** Bei trigonometrischer Störung liegt Resonanz vor, wenn $\\pm i\\omega$ (mit $\\omega$ = Störfrequenz) eine Wurzel der char. Gleichung ist.

**Rechnung:** Char. Gl.: $\\lambda^2+1=0$ → $\\lambda=\\pm i$. Störung $\\sin(x)$ hat $\\omega=1$, also $\\pm i\\omega=\\pm i$ — exakt die Wurzeln. Also Resonanz. Ansatz: $y_p=x(A\\cos x+B\\sin x)$. Einsetzen liefert $A=-\\tfrac{1}{2}$, $B=0$.

**Probe:** $y_p=-\\tfrac{1}{2}x\\cos x$: $y_p'=-\\tfrac{1}{2}\\cos x+\\tfrac{1}{2}x\\sin x$, $y_p''=\\sin x+\\tfrac{1}{2}x\\cos x$. $y_p''+y_p=\\sin x+\\tfrac{1}{2}x\\cos x-\\tfrac{1}{2}x\\cos x=\\sin x$ ✓.

**Typischer Fehler:** Bei Trig-Resonanz denken, man müsse mit $x^2$ multiplizieren. Nein — $\\pm i$ ist nur *einfache* Wurzel, daher reicht $x$. $x^2$ bräuchte man bei Doppelwurzel (was bei rein imaginären Wurzeln selten ist).`,
        [
          'Stör­frequenz $\\omega=1$. Vergleiche mit den char. Wurzeln.',
          'Wurzeln $\\pm i$, also $\\pm i\\cdot 1$ → Resonanzfall.',
          'Einfache Wurzel → Ansatz $\\cdot x$, nicht $\\cdot x^2$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Entscheidungslogik beim Resonanzcheck.',
        [
          'Charakteristische Gleichung aufstellen und Wurzeln $\\lambda_{1,2}$ bestimmen',
          'Aus der Störfunktion den "Prüf-Exponenten" $c$ bestimmen ($c$ direkt bei $e^{cx}$; $c=\\pm i\\omega$ bei $\\sin/\\cos$)',
          'Vergleichen: stimmt $c$ mit einer Wurzel überein?',
          'Nein → Standard-Ansatz ohne $x$-Faktor',
          'Ja, einfache Wurzel → Ansatz mit $x$ multiplizieren',
          'Ja, Doppelwurzel → Ansatz mit $x^2$ multiplizieren',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Der Resonanzcheck ist entscheidend für den Erfolg des Ansatzes. Reihenfolge: erst homogene Analyse, dann Störanalyse, dann Vergleich, dann Ansatzwahl nach Multiplizität.

**Rechnung:** Die Multiplizität der Wurzel entscheidet über die Potenz des $x$-Faktors. Faustregel: "$x^{\\text{Multiplizität}}$".

**Probe:** Wenn nach dem Einsetzen $0=\\text{etwas}$ steht, ist der $x$-Faktor zu klein gewählt — höhere Potenz probieren.

**Typischer Fehler:** Direkt Standard-Ansatz, ohne Resonanzcheck. Besonders gefährlich bei Doppelwurzel.`,
        [
          'Homogene Lösung zuerst — sie sagt, was bereits „belegt" ist.',
          'Prüf-Exponent: bei $\\sin(\\omega x)$ ist $c=\\pm i\\omega$.',
          'Multiplizität bestimmt die Potenz des $x$-Faktors.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Aussage zur Resonanz ist FALSCH?',
        [
          'Resonanz tritt nur bei exponentieller Störung auf, nie bei trigonometrischer.',
          'Bei Doppelwurzel als Resonanzursache wird mit $x^2$ multipliziert.',
          'Resonanz bedeutet: die Störfunktion ist bereits homogene Lösung.',
          'Bei einfacher Wurzel reicht Multiplikation mit $x$.',
        ],
        0,
        `**Ansatz:** Resonanz kann bei jeder Störform auftreten, bei der der „Prüf-Exponent" $c$ (reell bei $e^{cx}$, komplex $\\pm i\\omega$ bei $\\sin/\\cos$) mit einer Wurzel der char. Gleichung übereinstimmt.

**Rechnung:** Trigonometrische Resonanz ist der wichtigste Fall in der Technik: Erreger-Frequenz = Eigenfrequenz → Amplitudenaufschaukelung. Beispiel: $y''+\\omega_0^2 y=\\sin(\\omega_0 x)$ — resonanzverstärkte Schwingung.

**Probe:** A ist genau deshalb falsch. B, C, D stimmen: Multiplizität → $x$-Potenz; Resonanz = Störung ist homogene Lösung; einfache Wurzel → $\\cdot x$.

**Typischer Fehler:** Resonanz nur mit „Schwingung" oder nur mit $e^{cx}$ assoziieren. In Wahrheit ist sie ein allgemeines Phänomen, sobald der Ansatz-Exponent eine Wurzel der char. Gleichung trifft — egal ob reell oder komplex.`,
        [
          'Suche die falsche Aussage.',
          'Kann Resonanz auch bei $\\sin/\\cos$-Störung auftreten?',
          'Klassisches Beispiel: Schwingung im Gleichklang.',
        ],
        {
          1: 'Diese Aussage ist *richtig*: bei Doppelwurzel braucht man $x^2$, um aus der zweifach-homogenen Lösung herauszukommen. Sie ist also nicht die gesuchte falsche Aussage.',
          2: 'Richtig: das ist genau die Definition von Resonanz. Wenn die Störfunktion selbst homogene Lösung ist, dann erzeugt der Standard-Ansatz eine $0$ auf der linken Seite.',
          3: 'Richtig — einfache Wurzel, Multiplizität 1, Ansatz $\\cdot x^1$. Die Regel ist konsistent mit $x^{\\text{Multiplizität}}$.',
        },
      ),
    ],

    // ── [4] Allgemeine Lösung ──────────────────────────────────────────────
    4: [
      mc(
        '[PRÜFUNG] Die allgemeine Lösung von $y\'\' - 3y\' + 2y = 6$ lautet:',
        [
          '$y = C_1 e^{x} + C_2 e^{2x} + 3$',
          '$y = C_1 e^{x} + C_2 e^{2x}$',
          '$y = 3$',
          '$y = C_1 e^{-x} + C_2 e^{-2x} + 3$',
        ],
        0,
        `**Ansatz:** Allgemeine Lösung = homogene Lösung $y_h$ + beliebige Partikulärlösung $y_p$.

**Rechnung:** - Homogen: $\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)=0$ → $\\lambda=1,2$ → $y_h=C_1e^x+C_2e^{2x}$. - Partikulär: Störung konstant, Ansatz $y_p=A$ (da $\\lambda=0$ keine Wurzel). $0+0+2A=6$ → $A=3$, also $y_p=3$. - Gesamt: $y=C_1e^x+C_2e^{2x}+3$.

**Probe:** $y'=C_1e^x+2C_2e^{2x}$, $y''=C_1e^x+4C_2e^{2x}$. $y''-3y'+2y=(1-3+2)C_1e^x+(4-6+2)C_2e^{2x}+0-0+6=0+0+6=6$ ✓.

**Typischer Fehler:** Partikulärlösung weglassen und nur $y_h$ angeben. Dann erfüllt $y$ die homogene DGL, nicht die inhomogene — die rechte Seite 6 fehlt völlig.`,
        [
          'Homogene Lösung bestimmen.',
          'Partikulärlösung für konstante Störung: $y_p=A$.',
          'Gesamt: $y=y_h+y_p$.',
        ],
        {
          1: "Die Partikulärlösung fehlt. Diese Form löst nur die homogene DGL $y''-3y'+2y=0$, nicht die inhomogene mit rechter Seite $6$. Bei $y=y_h$ ergibt das Einsetzen $0$, nicht $6$.",
          2: 'Das ist nur die Partikulärlösung allein, ohne die zwei Integrationskonstanten der homogenen Lösung. Eine DGL 2. Ordnung braucht **zwei** freie Konstanten für die Anfangsbedingungen.',
          3: 'Falsche Vorzeichen im Exponenten. Aus $(\\lambda-1)(\\lambda-2)=0$ folgt $\\lambda=+1, +2$, nicht $-1, -2$. Prüfe die Faktorisierung.',
        },
      ),
      ni(
        '[PRÜFUNG] Für $y\'\' + y = 2$ lautet $y_h = C_1\\cos x + C_2\\sin x$ und $y_p = 2$. Wie viele freie Konstanten enthält die allgemeine Lösung?',
        2, 0, '',
        `**Ansatz:** Die Anzahl freier Konstanten in der allgemeinen Lösung einer linearen DGL n-ter Ordnung ist immer $n$ — unabhängig davon, ob die DGL homogen oder inhomogen ist. Die Partikulärlösung bringt keine zusätzlichen Konstanten, weil sie fest gewählt ist.

**Rechnung:** DGL ist 2. Ordnung → genau 2 Konstanten in $y_h$, keine in $y_p$. Also $y=C_1\\cos x+C_2\\sin x+2$ hat **2** freie Konstanten ($C_1, C_2$).

**Probe:** Ein AWP mit $y(0)$ und $y'(0)$ liefert genau 2 Bedingungen, passend zu 2 Konstanten — eindeutig lösbar.

**Typischer Fehler:** Die Partikulärlösung als weitere Konstante zählen ("2 aus $y_h$ + 1 aus $y_p = 3$"). Falsch: $y_p=2$ ist ein fester Zahlenwert, keine freie Konstante.`,
        [
          'Ordnung der DGL bestimmt die Anzahl freier Konstanten.',
          'Partikulärlösung enthält keine freien Konstanten.',
          'Zähle nur $C_1, C_2, \\dots$ in $y_h$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Wenn $y_{p,1}$ und $y_{p,2}$ zwei verschiedene Partikulärlösungen derselben inhomogenen DGL sind, ist ihre Differenz $y_{p,1}-y_{p,2}$ eine Lösung der homogenen DGL.',
        true,
        `**Ansatz:** Linearität: Für linearen Differentialoperator $L$ gilt $L[y_1-y_2]=L[y_1]-L[y_2]$.

**Rechnung:** Aus $L[y_{p,1}]=q$ und $L[y_{p,2}]=q$ folgt $L[y_{p,1}-y_{p,2}]=q-q=0$. Also ist $y_{p,1}-y_{p,2}$ Lösung der homogenen Gleichung. Konsequenz: Jede weitere Partikulärlösung unterscheidet sich von einer gegebenen nur durch einen homogenen Anteil — und kann daher durch Neubelegung von $C_1, C_2$ absorbiert werden. Die allgemeine Lösung $y=y_h+y_p$ ist eindeutig (im Sinne der Lösungsmenge), auch wenn $y_p$ nicht eindeutig ist.

**Probe:** Beispiel $y''+y=2$: $y_{p,1}=2$ und $y_{p,2}=2+\\cos x$ sind beide partikulär (da $\\cos x$ homogene Lösung). Differenz: $-\\cos x$ — homogene Lösung ✓.

**Typischer Fehler:** Glauben, es gäbe genau eine Partikulärlösung. In Wahrheit ist $y_p$ nur bis auf eine homogene Lösung bestimmt — daher wählt man den *einfachsten* Ansatz-Typ.`,
        [
          'Linearität von $L$.',
          '$L[y_1-y_2]=L[y_1]-L[y_2]$.',
          'Wenn $L[y_1]=L[y_2]=q$, dann $L[y_1-y_2]=0$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne DGL und allgemeine Lösung zu.',
        [
          { left: '$y\'\' + y = 0$', right: '$y = C_1\\cos x + C_2\\sin x$' },
          { left: '$y\'\' + y = 4$', right: '$y = C_1\\cos x + C_2\\sin x + 4$' },
          { left: '$y\'\' - y = e^{2x}$', right: '$y = C_1 e^{x} + C_2 e^{-x} + \\tfrac{1}{3}e^{2x}$' },
          { left: '$y\'\' - 2y\' + y = 0$', right: '$y = (C_1 + C_2 x) e^{x}$' },
        ],
        `**Ansatz:** Für jede DGL: homogene Lösung bestimmen (Char. Gl.), partikuläre Lösung per Ansatz finden, dann $y_h+y_p$.

**Rechnung:** - $y''+y=0$: $\\lambda=\\pm i$ → $y_h$. - $y''+y=4$: wie oben, $y_p=4$ (Konstante). - $y''-y=e^{2x}$: $\\lambda=\\pm 1$, $y_p=Ae^{2x}$, $4A-A=1\\cdot e^{2x}$ aus Koeffizienten → $3A=1$ → $A=\\tfrac{1}{3}$. - $y''-2y'+y=0$: $\\lambda=1$ doppelt → $(C_1+C_2x)e^x$.

**Probe:** Jede Lösung erfüllt die DGL, was man durch Einsetzen prüfen kann.

**Typischer Fehler:** Bei Doppelwurzel den $x$-Faktor vergessen: $y=(C_1+C_2)e^x$ statt $(C_1+C_2x)e^x$. Dann nur eine effektive Konstante — die zweite Bedingung im AWP ist nicht erfüllbar.`,
        [
          'Homogene Lösung zuerst.',
          'Bei Doppelwurzel: $x$-Faktor.',
          'Partikulärlösung je nach Störterm.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Bestimmung der allgemeinen Lösung einer inhomogenen linearen DGL 2. Ordnung.',
        [
          'Charakteristische Gleichung $\\lambda^2+p\\lambda+q=0$ aufstellen',
          'Wurzeln $\\lambda_1, \\lambda_2$ bestimmen und homogene Lösung $y_h$ aufschreiben',
          'Ansatz für partikuläre Lösung $y_p$ nach Typ der Störfunktion wählen',
          'Resonanz prüfen und Ansatz ggf. mit $x$ oder $x^2$ multiplizieren',
          'Ansatz einsetzen und Koeffizienten berechnen',
          'Allgemeine Lösung zusammensetzen: $y = y_h + y_p$',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Standard-Workflow: homogen zuerst, dann partikulär mit Resonanzcheck, dann summieren. Diese Reihenfolge ist prüfungskritisch.

**Rechnung:** - Schritt 1–2: homogen. - Schritt 3–4: Ansatzwahl mit Resonanzcheck. - Schritt 5: Koeffizienten. - Schritt 6: Summe.

**Probe:** Am Ende durch Einsetzen verifizieren, dass $y$ die DGL erfüllt.

**Typischer Fehler:** Resonanzcheck nach hinten schieben oder vergessen. Das erzeugt später Widersprüche beim Koeffizientenvergleich.`,
        [
          'Homogene Lösung baut das Fundament.',
          'Resonanzcheck ist Teil der Ansatzwahl.',
          'Zum Schluss summieren.',
        ],
      ),
    ],

    // ── [5] AWP bei 2. Ordnung ────────────────────────────────────────────
    5: [
      ni(
        '[PRÜFUNG] Gegeben $y\'\' - y = 0$ mit $y(0) = 3$ und $y\'(0) = 1$. Berechne $C_1$ in der Lösung $y = C_1 e^{x} + C_2 e^{-x}$.',
        2, 0.001, '',
        `**Ansatz:** Zwei Bedingungen für zwei Konstanten. System aus $y(0)$ und $y'(0)$ aufstellen, lösen.

**Rechnung:** $y(0)=C_1+C_2=3$. $y'(x)=C_1e^x-C_2e^{-x}$, $y'(0)=C_1-C_2=1$. Addition: $2C_1=4$ → $C_1=2$, dann $C_2=1$.

**Probe:** $y=2e^x+e^{-x}$: $y(0)=2+1=3$ ✓, $y'(0)=2-1=1$ ✓.

**Typischer Fehler:** Das Gleichungssystem falsch aufstellen, etwa $y'(0)=C_1+C_2$ statt $C_1-C_2$. Ableitung sauber: $\\frac{d}{dx}e^{-x}=-e^{-x}$ beachten!`,
        [
          "$y(0)=C_1+C_2$ und $y'(0)=C_1-C_2$.",
          'Zwei Gleichungen für zwei Unbekannte.',
          'Addition eliminiert $C_2$: $2C_1=4$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Aussage zum AWP bei DGL 2. Ordnung ist RICHTIG?',
        [
          'Zwei Anfangsbedingungen sind nötig, um beide Konstanten $C_1, C_2$ eindeutig zu bestimmen.',
          'Eine einzige Anfangsbedingung $y(0)$ reicht immer aus.',
          'Die Anfangsbedingungen werden auf die Partikulärlösung angewendet, nicht auf die Gesamtlösung.',
          'Bei Doppelwurzel reicht eine Anfangsbedingung.',
        ],
        0,
        `**Ansatz:** Eine lineare DGL $n$-ter Ordnung hat $n$ freie Konstanten, benötigt also $n$ Bedingungen. Bei 2. Ordnung: genau **zwei** Bedingungen, typisch $y(x_0)$ und $y'(x_0)$.

**Rechnung:** Die Bedingungen werden auf die **Gesamtlösung** $y=y_h+y_p$ angewandt, nicht nur auf $y_h$ oder $y_p$. Grund: nur die Gesamtlösung beschreibt den realen Verlauf; $y_h$ hätte falsche Anfangswerte.

**Probe:** Standardbeispiel: Feder-Masse-System mit Anfangsauslenkung $y(0)=y_0$ und Anfangsgeschwindigkeit $y'(0)=v_0$ — zwei physikalische Messgrößen, zwei mathematische Bedingungen.

**Typischer Fehler:** Bedingungen nur auf $y_h$ anwenden und $y_p$ dabei vergessen. Dann passt der Funktionswert bei $x=0$ nicht zur Realität.`,
        [
          'Ordnung der DGL = Anzahl nötiger Bedingungen.',
          'Hier 2. Ordnung → 2 Bedingungen.',
          'Anwendung auf Gesamtlösung $y=y_h+y_p$.',
        ],
        {
          1: 'Eine einzige Bedingung lässt die zweite Konstante unbestimmt — die Lösung ist dann nicht eindeutig. Auch bei 1. Ordnung braucht man *eine* Bedingung (passend zur Ordnung); bei 2. Ordnung sind es *zwei*.',
          2: 'Die Bedingungen müssen auf die Gesamtlösung $y=y_h+y_p$ angewandt werden. Die Partikulärlösung allein enthält keine freien Konstanten, sodass das Einsetzen keinen Parameter festlegt.',
          3: 'Auch bei Doppelwurzel hat die Lösung $(C_1+C_2 x)e^{\\lambda x}$ zwei freie Konstanten. Entsprechend sind zwei Bedingungen nötig, auch hier.',
        },
      ),
      tf(
        '[PRÜFUNG] Die Anfangsbedingungen $y(0)=0$ und $y(1)=1$ reichen ebenfalls aus, um die zwei Konstanten einer DGL 2. Ordnung eindeutig zu bestimmen.',
        false,
        `**Ansatz:** Unterscheide **Anfangswertproblem (AWP)** und **Randwertproblem (RWP)**. AWP: beide Bedingungen am gleichen $x_0$, meist $y(x_0)$ und $y'(x_0)$. RWP: Bedingungen an zwei verschiedenen Stellen.

**Rechnung:** $y(0)=0$ und $y(1)=1$ ist ein **Randwertproblem** (zwei verschiedene $x$-Werte, beide am Funktionswert, nicht an der Ableitung). RWP sind lösbar oder auch nicht — nicht immer eindeutig. Beispiel: $y''+\\pi^2 y=0$ mit $y(0)=0$, $y(1)=0$ hat unendlich viele Lösungen ($y=C\\sin(\\pi x)$ für beliebiges $C$). Die Aussage „reichen ebenfalls aus" ist also falsch — RWP sind keine direkten AWP-Ersatz.

**Probe:** Standard-AWP: $y(0)=a$, $y'(0)=b$ — immer eindeutig lösbar (Existenz- und Eindeutigkeitssatz). RWP: Abhängig von Eigenwerten der DGL.

**Typischer Fehler:** Zwei Bedingungen sofort als "reicht aus" werten, ohne zu prüfen, an welchen Stellen sie gelten. An **gleicher** Stelle (eine Funktionswert, eine Ableitung) = AWP, eindeutig. An **verschiedenen** Stellen = RWP, nicht immer eindeutig.`,
        [
          'AWP vs. RWP unterscheiden.',
          'AWP: beide Bedingungen bei $x_0$, eine Funktionswert, eine Ableitung.',
          'RWP: Bedingungen an zwei verschiedenen Stellen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Sortiere die Schritte zur Lösung eines AWP 2. Ordnung.',
        [
          'Allgemeine Lösung bestimmen: $y(x) = y_h(x) + y_p(x)$',
          'Ableitung $y\'(x)$ bilden',
          'Anfangswerte $y(x_0)$ und $y\'(x_0)$ einsetzen — zwei Gleichungen entstehen',
          'Das $2 \\times 2$-Gleichungssystem nach $C_1$ und $C_2$ auflösen',
          'Lösung mit konkreten Werten für $C_1, C_2$ angeben',
          'Probe: Anfangswerte einsetzen und DGL verifizieren',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Standard-Workflow AWP: erst allgemein, dann Bedingungen einsetzen, dann auflösen.

**Rechnung:** - Schritt 1: $y=y_h+y_p$. - Schritt 2: Ableitung. - Schritt 3: Bedingungen einsetzen → 2 Gleichungen. - Schritt 4: $2\\times 2$-LGS lösen. - Schritt 5: konkrete Lösung. - Schritt 6: Probe.

**Probe:** Am Ende sowohl $y(x_0)$ als auch $y'(x_0)$ prüfen, zusätzlich die DGL selbst.

**Typischer Fehler:** Bedingungen einsetzen vor $y_p$ dazuaddiert — dann ist das System falsch parametrisiert.`,
        [
          'Allgemeine Lösung inkl. $y_p$ ist die Basis.',
          "Ableitung $y'$ für die zweite Bedingung nötig.",
          'Probe absichert die Konstanten.',
        ],
      ),
      ni(
        '[PRÜFUNG] AWP: $y\'\' + 4y = 0$, $y(0) = 2$, $y\'(0) = 6$. Berechne $C_2$ in $y = C_1\\cos(2x) + C_2\\sin(2x)$.',
        3, 0.001, '',
        `**Ansatz:** Zwei Bedingungen aufstellen, dann auflösen.

**Rechnung:** $y(0)=C_1\\cdot 1+C_2\\cdot 0=C_1=2$ → $C_1=2$. $y'(x)=-2C_1\\sin(2x)+2C_2\\cos(2x)$, $y'(0)=2C_2=6$ → $C_2=3$.

**Probe:** $y=2\\cos(2x)+3\\sin(2x)$: $y(0)=2$ ✓, $y'(x)=-4\\sin(2x)+6\\cos(2x)$, $y'(0)=6$ ✓. Auch DGL: $y''=-8\\cos(2x)-12\\sin(2x)$, $y''+4y=-8\\cos-12\\sin+8\\cos+12\\sin=0$ ✓.

**Typischer Fehler:** Faktor $2$ beim Ableiten von $\\sin(2x)$ vergessen. Dann $y'(0)=C_2$ statt $2C_2$ und $C_2=6$ (falsch).`,
        [
          'Kettenregel: $\\frac{d}{dx}\\sin(2x)=2\\cos(2x)$.',
          "$y'(0)=2C_2$, da $\\cos(0)=1$, $\\sin(0)=0$.",
          '$2C_2=6$ → $C_2=3$.',
        ],
      ),
    ],
  },


  // ──────────────────────────────────────────────────────────────────────
  // dgl-3-3 — Prüfung: Systeme & technische Modellbildung  (6 subGoals × 5)
  // ──────────────────────────────────────────────────────────────────────
  'dgl-3-3': {

    // ── [0] Euler explizit: y_{n+1} = y_n + h·f(x_n, y_n), Fehler O(h) ──
    0: [
      ni(
        '[PRÜFUNG] Für $\\dot y = y$, $y(0) = 1$, $h = 0{,}5$ — welchen Wert liefert ein Euler-Schritt für $y_1$?',
        1.5, 0.001, '',
        `**Ansatz:** Euler-Formel einmal anwenden: $y_1 = y_0 + h \\cdot f(x_0, y_0)$ mit $f(x,y) = y$.

**Rechnung:** $y_1 = 1 + 0{,}5 \\cdot 1 = 1{,}5$.

**Probe:** Exakte Lösung $y(t) = e^t$, also $y(0{,}5) = e^{0{,}5} \\approx 1{,}649$ — Euler unterschätzt, was bei $\\dot y = +y$ und einem Einzelschritt typisch ist.

**Typischer Fehler:** Schrittweite $h$ mit der Variablen $y_0$ zu multiplizieren statt mit $f(x_0,y_0)$ — bei $f(x,y)=y$ fällt der Unterschied hier nicht auf, rächt sich aber bei $f(x,y)=-2y$.`,
        [
          'Euler-Schritt ist eine Tangentenfortsetzung vom aktuellen Punkt aus.',
          'Setze $y_0=1$, $h=0{,}5$ und $f(x_0,y_0)=y_0$ in die Formel ein.',
          '$y_1 = 1 + 0{,}5 \\cdot 1 = ?$',
        ],
      ),
      mc(
        '[PRÜFUNG] Was bedeutet „globaler Fehler $O(h)$" bei Euler?',
        [
          'Halbieren von $h$ halbiert (ungefähr) den Gesamtfehler am Endzeitpunkt.',
          'Der Fehler pro Schritt halbiert sich nur, der Gesamtfehler bleibt gleich.',
          'Der Fehler wächst quadratisch mit $h$.',
          'Der Fehler verschwindet für beliebiges $h$ nach endlich vielen Schritten.',
        ],
        0,
        `**Ansatz:** „Globaler Fehler $O(h)$" heißt: die maximale Abweichung von der exakten Lösung auf $[0,T]$ skaliert linear mit $h$.

**Rechnung:** Lokal ist der Fehler pro Schritt $O(h^2)$. Es gibt $N = T/h$ Schritte, also summiert sich der Fehler zu $N \\cdot O(h^2) = T/h \\cdot O(h^2) = O(h)$.

**Probe:** Test: $\\dot y = -y$ mit $h=0{,}1$ gibt bei $t=1$ ca. 5% Fehler, mit $h=0{,}05$ ca. 2{,}5% — halbiert sich wie vorhergesagt.

**Typischer Fehler:** Lokalen und globalen Fehler verwechseln — lokaler Fehler ist $O(h^2)$, das ist *nicht* die Aussage des Konvergenzordnung-Begriffs.`,
        [
          'Fehlerordnung beschreibt, wie der Fehler mit $h$ skaliert.',
          'Ordnung 1 heißt: Fehler proportional zu $h$.',
          'Test: Wenn $h$ halbiert wird, was passiert mit dem Gesamtfehler?',
        ],
        {
          1: 'Das widerspricht der Konvergenzordnung — mehr Schritte mit kleinerem $h$ verbessern den globalen Fehler. Sonst wäre numerische Integration sinnlos.',
          2: 'Quadratisch $(O(h^2))$ wäre Konvergenzordnung 2 — das leisten Verfahren wie Heun oder RK2, nicht der explizite Euler.',
          3: 'Nein, bei positivem $h$ bleibt ein endlicher Fehler. Nur im Grenzwert $h\\to 0$ konvergiert Euler gegen die exakte Lösung.',
        },
      ),
      tf(
        '[PRÜFUNG] Der explizite Euler ist ein *einschrittiges* Verfahren — zur Berechnung von $y_{n+1}$ genügt ausschließlich die Kenntnis von $y_n$.',
        true,
        `**Ansatz:** „Einschrittig" heißt: pro Update-Formel wird nur der letzte Zustand benötigt, keine älteren Werte $y_{n-1}, y_{n-2}, \\dots$.

**Rechnung:** $y_{n+1} = y_n + h\\cdot f(x_n,y_n)$ — rechts steht nur $y_n$ (und $x_n = x_0 + nh$, aber das ist ein Zeitstempel, kein Lösungswert).

**Probe:** Zum Start braucht man nur die Anfangsbedingung $y_0$. Bei Mehrschrittverfahren wie Adams-Bashforth bräuchte man dagegen $y_0, y_1, \\dots$ für den Start.

**Typischer Fehler:** Einschritt-Verfahren mit niedriger Ordnung verwechseln — „einschrittig" bezieht sich auf die Anzahl verwendeter Vorgänger, nicht auf die Genauigkeit.`,
        [
          'Einschritt vs. Mehrschritt: wie viele vergangene Werte fließen pro Update ein?',
          'Schau auf die rechte Seite der Euler-Formel.',
          'Im Startup braucht Euler nur $y_0$, Mehrschritt-Methoden mehrere Startwerte.',
        ],
      ),
      ni(
        '[PRÜFUNG] Ein Kühlturm wird mit $\\dot T = -0{,}4(T-20)$, $T(0)=80$ °C simuliert. Berechne mit Euler und $h=1$ min den Wert $T_1$ (in °C).',
        56, 0.1, '°C',
        `**Ansatz:** Einmal Euler-Schritt auf $f(t,T) = -0{,}4(T-20)$ anwenden.

**Rechnung:** $T_1 = T_0 + h\\cdot f(0,T_0) = 80 + 1\\cdot(-0{,}4\\cdot(80-20)) = 80 - 24 = 56$ °C.

**Probe:** Exakt: $T(1) = 20 + 60\\cdot e^{-0{,}4} \\approx 20 + 60 \\cdot 0{,}670 \\approx 60{,}2$ °C. Euler unterschätzt um ~4 K — akzeptabel, aber bei $h=1$ schon spürbar.

**Typischer Fehler:** $(T-20)$ weglassen und $\\dot T = -0{,}4\\,T$ rechnen: $T_1 = 80 + 1\\cdot(-0{,}4\\cdot 80) = 48$ °C — Newton-Abkühlung bezieht sich aber auf die Differenz zur Umgebung, nicht auf $T$ allein.`,
        [
          'Zuerst $f(t,T)$ am Startpunkt auswerten.',
          'Hier: $f(0,80) = -0{,}4 \\cdot (80-20) = -24$.',
          'Dann $T_1 = T_0 + h\\cdot f$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Teilschritte eines einzelnen Euler-Updates in die richtige Reihenfolge.',
        [
          'Aktuellen Zustand $y_n$ und Zeit $x_n$ bereitstellen',
          'Steigung $f(x_n, y_n)$ an dieser Stelle auswerten',
          'Schrittgröße $h$ mit der Steigung multiplizieren',
          'Zum aktuellen $y_n$ addieren: $y_{n+1} = y_n + h\\cdot f$',
          'Zeit fortschreiben: $x_{n+1} = x_n + h$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Euler folgt dem Prinzip „aktueller Punkt → Tangente → Fortschritt entlang der Tangente → neuer Punkt".

**Rechnung:** Reihenfolge: (1) Ausgangslage $y_n,x_n$ haben, (2) $f$ auswerten = Steigung bestimmen, (3) Steigung mit $h$ skalieren = Zuwachs, (4) Zuwachs addieren = $y_{n+1}$, (5) Zeit weiterzählen.

**Probe:** An $\\dot y = y$, $y_0=1$, $h=0{,}5$: Schritt 1: $y_0=1, x_0=0$. Schritt 2: $f=1$. Schritt 3: $0{,}5\\cdot 1=0{,}5$. Schritt 4: $y_1=1{,}5$. Schritt 5: $x_1=0{,}5$. ✓

**Typischer Fehler:** Zeit *vor* der Zustandsberechnung fortschreiben und dann $f$ an der neuen Zeit auswerten — das ist schon ein Mittelpunkt-Schritt (RK2), nicht mehr Euler.`,
        [
          'Wo braucht man die Steigung, wo den Zuwachs?',
          'Zuerst Steigung, dann Zuwachs, dann Update.',
          'Zeit wird am Ende fortgeschrieben.',
        ],
      ),
    ],

    // ── [1] Stabilität via Eigenwerte: alle Re(λ_i)<0 → asymptotisch stabil ──
    1: [
      mc(
        '[PRÜFUNG] System $\\dot{\\vec x} = A\\vec x$ mit $A = \\begin{pmatrix} -1 & 2 \\\\ 0 & -3 \\end{pmatrix}$. Ist das System asymptotisch stabil?',
        [
          'Ja — beide Eigenwerte sind reell und negativ.',
          'Nein — einer der Einträge in $A$ ist positiv.',
          'Nein — obere Dreiecksmatrizen sind nie stabil.',
          'Nur grenzstabil, da $A$ nicht symmetrisch ist.',
        ],
        0,
        `**Ansatz:** Bei oberer/unterer Dreiecksmatrix stehen die Eigenwerte direkt auf der Diagonalen.

**Rechnung:** $\\lambda_1 = -1$, $\\lambda_2 = -3$, beide reell mit $\\text{Re}(\\lambda_i) < 0$. Damit ist das System asymptotisch stabil.

**Probe:** Lösung: $x_2(t) = c_2 e^{-3t}$, einsetzen in $\\dot x_1 = -x_1 + 2x_2$ gibt beschränkte, abklingende Dynamik in beiden Komponenten.

**Typischer Fehler:** Einzelne Matrix-Einträge (z.B. die $+2$) mit Stabilität verwechseln — entscheidend sind die Eigenwerte, nicht die Koeffizienten direkt.`,
        [
          'Dreiecksmatrix → Eigenwerte auf der Diagonalen.',
          'Stabilitätskriterium: alle $\\text{Re}(\\lambda_i) < 0$.',
          'Einzelne positive Einträge dürfen sein, solange die Eigenwerte negativ sind.',
        ],
        {
          1: 'Positive Einträge in $A$ sind OK — das Spektrum ist entscheidend, nicht die einzelnen Einträge. Hier sind beide Eigenwerte ($-1$ und $-3$) negativ.',
          2: 'Falsch — Dreiecksmatrizen können stabil oder instabil sein. Die Aussage wäre richtig, wenn mindestens ein Diagonalelement $\\geq 0$ wäre.',
          3: 'Symmetrie ist für Stabilität nicht nötig. Nur die Vorzeichen der Realteile der Eigenwerte zählen.',
        },
      ),
      ni(
        '[PRÜFUNG] System $\\dot{\\vec x} = \\begin{pmatrix} 0 & 1 \\\\ -4 & -2 \\end{pmatrix}\\vec x$ (gedämpfter Oszillator). Berechne den Realteil der Eigenwerte.',
        -1, 0.001, '',
        `**Ansatz:** Eigenwerte einer $2\\times 2$-Matrix aus $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.

**Rechnung:** $\\text{tr}(A) = 0 + (-2) = -2$, $\\det(A) = 0\\cdot(-2) - 1\\cdot(-4) = 4$. Charakteristisches Polynom: $\\lambda^2 + 2\\lambda + 4 = 0 \\Rightarrow \\lambda = -1 \\pm \\sqrt{1-4} = -1 \\pm i\\sqrt 3$. Realteil: $-1$.

**Probe:** Diskriminante $<0$ → komplexe Eigenwerte → Schwingung. $\\text{Re}=-1<0$ → gedämpft (asymptotisch stabil). Passt zum physikalischen Bild eines gedämpften Oszillators $\\ddot x + 2\\dot x + 4x = 0$.

**Typischer Fehler:** Nur $\\lambda^2 = -4$ lesen und $\\pm 2i$ annehmen — der Term $+2\\lambda$ wurde vergessen, der genau den Dämpfungsterm codiert.`,
        [
          '$2\\times 2$: $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.',
          'Diskriminante $< 0$ → komplexe Eigenwerte $\\alpha \\pm i\\beta$.',
          'Realteil ist $\\alpha = \\text{tr}(A)/2$.',
        ],
      ),
      tf(
        '[PRÜFUNG] Ein System mit rein imaginären Eigenwerten $\\lambda = \\pm i\\omega$ ist asymptotisch stabil, weil die Lösungen beschränkt bleiben.',
        false,
        `**Ansatz:** Asymptotische Stabilität verlangt $\\text{Re}(\\lambda_i) < 0$ — also *strenge* Negativität, nicht bloß beschränkte Lösungen.

**Rechnung:** $\\text{Re}(\\pm i\\omega) = 0$. Lösung: $x(t) = A\\cos(\\omega t) + B\\sin(\\omega t)$ — oszilliert dauerhaft mit konstanter Amplitude, klingt *nicht* ab. Das nennt man *grenzstabil* oder *marginal stabil*.

**Probe:** Ungedämpfter Feder-Masse-Schwinger $\\ddot x + \\omega^2 x = 0$ hat Eigenwerte $\\pm i\\omega$ und schwingt ewig — Asymptote existiert nicht.

**Typischer Fehler:** „Beschränkt = stabil" — im strengeren Sinn (Lyapunov) ist Beschränktheit tatsächlich Stabilität, aber *asymptotisch* stabil verlangt zusätzlich Abklingen gegen 0.`,
        [
          'Asymptotisch stabil = Lösung konvergiert gegen 0.',
          'Rein imaginäre Eigenwerte → ungedämpfte Schwingung.',
          'Das ist „grenzstabil", nicht „asymptotisch stabil".',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne Eigenwert-Konfigurationen ihren Stabilitätseigenschaften zu.',
        [
          { left: '$\\lambda_1 = -2$, $\\lambda_2 = -5$', right: 'asymptotisch stabil (rein abklingend)' },
          { left: '$\\lambda_{1,2} = -1 \\pm 3i$', right: 'asymptotisch stabil (gedämpfte Schwingung)' },
          { left: '$\\lambda_{1,2} = \\pm 2i$', right: 'grenzstabil (ungedämpfte Schwingung)' },
          { left: '$\\lambda_1 = 1$, $\\lambda_2 = -3$', right: 'instabil (Sattelpunkt)' },
        ],
        `**Ansatz:** Klassifikation nach Vorzeichen des Realteils und Existenz von Imaginärteil.

**Rechnung:** Reell negativ → reines Abklingen. Komplex mit negativem Realteil → gedämpfte Schwingung. Rein imaginär → ungedämpfte Schwingung (grenzstabil). Mindestens ein Realteil positiv → instabil.

**Probe:** Sattelpunkt: eine Richtung zieht zum Ursprung ($\\lambda_2=-3$), die andere stößt ab ($\\lambda_1=+1$). Trajektorien entweichen fast immer ins Unendliche.

**Typischer Fehler:** „Wenn *einer* negativ ist, ist alles stabil" — bei Instabilität reicht *ein* Eigenwert mit $\\text{Re}>0$, um das System zu zerstören.`,
        [
          'Reell vs. komplex: bestimmt Schwingungsverhalten.',
          'Realteil-Vorzeichen: bestimmt Abklingen/Wachsen.',
          'Instabil genügt: ein Eigenwert mit $\\text{Re}>0$.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte der Stabilitätsanalyse eines linearen DGL-Systems in die richtige Reihenfolge.',
        [
          'Systemmatrix $A$ aus den Koeffizienten der DGL extrahieren',
          'Charakteristisches Polynom $\\det(A - \\lambda I) = 0$ aufstellen',
          'Nullstellen (Eigenwerte $\\lambda_i$) berechnen',
          'Realteile $\\text{Re}(\\lambda_i)$ bestimmen',
          'Prüfen: sind alle Realteile $< 0$?',
          'Schlussfolgerung ziehen (asymptotisch stabil, grenzstabil oder instabil)',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Stabilitätsanalyse folgt dem Rezept „System → Matrix → Polynom → Eigenwerte → Vorzeichen → Urteil".

**Rechnung:** Ohne $A$ gibt es kein Polynom; ohne Eigenwerte keine Realteile; ohne Realteile kein Urteil. Die Ordnung ist strikt.

**Probe:** Am Kühlturm-System $\\dot T = -0{,}4(T-20)$ ist $A = (-0{,}4)$, Polynom $\\lambda + 0{,}4 = 0$, $\\lambda = -0{,}4$, $\\text{Re}(\\lambda)=-0{,}4 < 0$ → asymptotisch stabil ✓.

**Typischer Fehler:** Diagonalelemente direkt als Eigenwerte nehmen — das klappt nur bei (oberer/unterer) Dreiecksmatrix, sonst muss man wirklich das Polynom lösen.`,
        [
          'Ohne Matrix kein Polynom, ohne Polynom keine Eigenwerte.',
          'Eigenwerte → Realteile → Stabilitäts-Urteil.',
          'Dreiecksmatrizen sind Ausnahme: Eigenwerte stehen direkt auf der Diagonalen.',
        ],
      ),
    ],

    // ── [2] Bilanzgleichungen: Masse, Energie, Kraft, Ladung ──────────────
    2: [
      matching(
        '[PRÜFUNG] Ordne jeder Bilanzart das zugehörige Beispiel und die Leitformel zu.',
        [
          { left: 'Massenbilanz', right: 'Tank: $\\dot V = q_{ein} - q_{aus}$' },
          { left: 'Energiebilanz', right: 'Kühlkörper: $C_W \\dot T = \\dot Q_{ein} - \\alpha(T-T_U)$' },
          { left: 'Kräftebilanz', right: 'Feder-Masse: $m\\ddot x = -kx - d\\dot x + F$' },
          { left: 'Ladungsbilanz', right: 'RLC-Kreis: $L\\ddot q + R\\dot q + q/C = u(t)$' },
        ],
        `**Ansatz:** Jede Bilanz beschreibt: „Änderungsrate einer Erhaltungsgröße = Zuflüsse − Abflüsse" in einer spezifischen Domäne.

**Rechnung:** Massenbilanz: kg/s. Energiebilanz: J/s = W. Kräftebilanz: Impuls pro Zeit = N (Newton II). Ladungsbilanz: C/s = A.

**Probe:** Stationär setzt jeweils die linke Seite auf 0: Tank → $V_\\infty$; Kühlkörper → $T_\\infty$; Feder-Masse → $x_{eq}=F/k$; RLC → stationärer DC-Zustand.

**Typischer Fehler:** Kräftebilanz mit Energiebilanz verwechseln — beide sehen nach „Arbeits-Rechnung" aus, aber Kräftebilanz ist Newton II (Zeitableitung des Impulses), nicht Leistungsbilanz.`,
        [
          'Jede Bilanz gehört zu einer Erhaltungsgröße (Masse, Energie, Impuls, Ladung).',
          'Suche die Variable, die abgeleitet wird — die gibt die Bilanzart vor.',
          'Einheiten der linken Seite identifizieren die Domäne.',
        ],
      ),
      mc(
        '[PRÜFUNG] Ein Kondensator wird über einen Widerstand geladen: Strom $I$, Ladung $q$, Quelle $U_0$. Welche Bilanzgleichung ergibt $\\dot q$?',
        [
          '$R\\dot q + q/C = U_0$',
          '$\\dot q = U_0 - R \\cdot q$',
          '$\\dot q + q = U_0/C$',
          '$U_0 = R\\ddot q + \\dot q / C$',
        ],
        0,
        `**Ansatz:** Ladungsbilanz (Kirchhoff-Spannungsregel) über RC-Serienschaltung: $U_0 = U_R + U_C$. Mit $U_R = R I = R\\dot q$ und $U_C = q/C$.

**Rechnung:** $U_0 = R\\dot q + q/C$. Umgestellt: $R\\dot q + q/C = U_0$. Das ist eine lineare DGL 1. Ordnung in $q$.

**Probe:** Stationär $\\dot q = 0 \\Rightarrow q_\\infty = C\\cdot U_0$ — Kondensator lädt auf $U_0$ auf ✓. Zeitkonstante $\\tau = RC$.

**Typischer Fehler:** Kondensator-Spannung als $C\\cdot q$ statt $q/C$ schreiben — die Kapazität steht im Nenner, weil $U = q/C$.`,
        [
          'Kirchhoff: Summe der Spannungen im Masche = 0 bzw. = Quelle.',
          '$U_R = R I$, $I = \\dot q$, $U_C = q/C$.',
          'Aus $U_0 = U_R + U_C$ folgt direkt die DGL für $q$.',
        ],
        {
          1: 'Hier wurde $q/C$ durch $R\\cdot q$ ersetzt — das mischt Widerstand und Kapazität. $R$ steht zu $\\dot q$ (Strom), $1/C$ zu $q$ (Ladung auf dem Kondensator).',
          2: 'Fehlt der Faktor $R$: Widerstandsspannung ist $R\\dot q$, nicht einfach $\\dot q$. Zudem ist der Kapazitätsterm falsch dimensioniert.',
          3: 'Das wäre eine DGL 2. Ordnung mit $\\ddot q$ — passt zu einem RLC-Kreis mit Spule, nicht zum reinen RC-Kreis.',
        },
      ),
      ni(
        '[PRÜFUNG] Wärmetauscher: Zufuhr $\\dot Q_{ein} = 500$ W, Verlust $\\alpha(T-T_U) = 25$ W/K · $(T-T_U)$, $T_U = 20$ °C. Berechne die stationäre Endtemperatur $T_\\infty$ in °C.',
        40, 0.1, '°C',
        `**Ansatz:** Energiebilanz am Wärmetauscher: $C_W \\dot T = \\dot Q_{ein} - \\alpha(T-T_U)$. Stationär setze $\\dot T = 0$.

**Rechnung:** $0 = 500 - 25\\cdot(T_\\infty - 20) \\Rightarrow T_\\infty - 20 = 500/25 = 20 \\Rightarrow T_\\infty = 40$ °C.

**Probe:** Verlust bei $T_\\infty$: $25\\cdot(40-20) = 500$ W = Zufuhr ✓. Einheiten: W = (W/K)·K ✓.

**Typischer Fehler:** $T_\\infty = \\dot Q_{ein}/\\alpha = 20$ °C — Bezugspunkt $T_U$ vergessen. Die Temperaturdifferenz zur Umgebung ist 20 K, die absolute Temperatur ergibt sich durch Addition von $T_U$.`,
        [
          'Stationär: $\\dot T = 0$ gibt algebraische Gleichung.',
          'Aus $\\dot Q_{ein} = \\alpha(T_\\infty - T_U)$ folgt $T_\\infty$.',
          'Vergiss nicht, $T_U$ hinzuzuaddieren — Newton-Abkühlung arbeitet mit Differenzen.',
        ],
      ),
      tf(
        '[PRÜFUNG] Bei der Kräftebilanz eines Feder-Masse-Dämpfer-Systems $m\\ddot x = -kx - d\\dot x + F(t)$ ist das Vorzeichen von $-kx$ rückstellend, weil die Feder der Auslenkung entgegenwirkt.',
        true,
        `**Ansatz:** Federkraft nach Hooke: $F_{Feder} = -kx$, d.h. bei positiver Auslenkung zieht die Feder zurück in Richtung Ursprung.

**Rechnung:** Bei $x>0$ ist $-kx<0$ (Kraft in $-x$-Richtung). Bei $x<0$ ist $-kx>0$ (Kraft in $+x$-Richtung). Immer gegen die Auslenkung.

**Probe:** Ohne Dämpfung und Antrieb: $m\\ddot x = -kx \\Rightarrow \\ddot x = -(k/m) x$ — Schwingungs-DGL mit Eigenkreisfrequenz $\\omega_0 = \\sqrt{k/m}$ ✓.

**Typischer Fehler:** Vorzeichen $+kx$ schreiben und dann wundern, warum „Auslenkung explodiert" — mathematisch gäbe das $\\ddot x = +(k/m)x$ mit Lösungen $e^{\\pm\\omega_0 t}$ (instabil, Sattelpunkt statt Schwingung).`,
        [
          'Hooke: Kraft ist der Auslenkung *entgegengerichtet*.',
          'Das liefert das Minuszeichen vor $kx$.',
          'Bei falschem Vorzeichen hätte das System Lösungen, die exponentiell wachsen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte „Bilanzgleichung aufstellen" in die richtige Reihenfolge.',
        [
          'Kontrollvolumen / Bilanzraum festlegen',
          'Erhaltungsgröße wählen (Masse, Energie, Impuls, Ladung)',
          'Zuflüsse und Abflüsse durch die Systemgrenze auflisten',
          'Quellen/Senken innerhalb des Kontrollvolumens identifizieren',
          'Änderungsrate = Zufluss − Abfluss + Quellen − Senken ansetzen',
          'Konstitutive Gesetze einsetzen (Hooke, Fourier, Ohm, …)',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Bilanzen brauchen Raum, Größe, Flüsse, Quellen und Gesetze — in dieser Reihenfolge.

**Rechnung:** Ohne Kontrollvolumen ist keine Bilanzgrenze da; ohne Erhaltungsgröße ist nicht klar, was bilanziert wird; ohne Flüsse/Quellen keine Terme; ohne konstitutive Gesetze (die materialspezifisch sind) lassen sich die Terme nicht konkretisieren.

**Probe:** Feder-Masse: (1) Masse als Bilanzraum, (2) Impuls, (3) keine Ein-/Ausflüsse, (4) Federkraft und Dämpfung als Quellen/Senken, (5) $m\\ddot x = \\sum F$, (6) Hooke $F_{Feder}=-kx$, Dämpferkraft $-d\\dot x$.

**Typischer Fehler:** Konstitutive Gesetze vorab einsetzen, bevor die Bilanz vollständig steht — führt oft zu doppelt gezählten Termen.`,
        [
          'Zuerst „wo" und „was" klären, dann „wie rein/raus".',
          'Konstitutive Gesetze kommen zum Schluss.',
          'Hooke, Fourier, Ohm sind materialspezifische Relationen, keine Bilanzen.',
        ],
      ),
    ],

    // ── [3] Mechanik-Elektrik-Analogie ────────────────────────────────────
    3: [
      matching(
        '[PRÜFUNG] Ordne die mechanischen Größen ihren elektrischen Analoga zu.',
        [
          { left: 'Masse $m$', right: 'Induktivität $L$' },
          { left: 'Dämpfung $d$', right: 'Widerstand $R$' },
          { left: 'Federnachgiebigkeit $1/k$', right: 'Kapazität $C$' },
          { left: 'Kraft $F$', right: 'Spannung $U$' },
        ],
        `**Ansatz:** Vergleich der DGL $m\\ddot x + d\\dot x + kx = F$ und $L\\ddot q + R\\dot q + q/C = U$ — gleiche Struktur, andere Variablen.

**Rechnung:** $m\\leftrightarrow L$ (Trägheit / elektrische Trägheit), $d\\leftrightarrow R$ (Dissipation), $k\\leftrightarrow 1/C$, also $1/k \\leftrightarrow C$ (Nachgiebigkeit / Speicherfähigkeit), $F\\leftrightarrow U$ (Antrieb).

**Probe:** Energiespeicher analog: kinetische Energie $\\tfrac12 m\\dot x^2$ ↔ magnetische $\\tfrac12 L\\dot q^2 = \\tfrac12 L I^2$. Federenergie $\\tfrac12 kx^2$ ↔ Kondensatorenergie $\\tfrac12 q^2/C$.

**Typischer Fehler:** $k \\leftrightarrow C$ annehmen (statt $1/k \\leftrightarrow C$) — ist die häufigste Verwechslung, weil die Federsteifigkeit „hart" und die Kapazität „speichernd" wirkt, aber die Position im Koeffizienten-Vergleich ist $k \\leftrightarrow 1/C$.`,
        [
          'Stelle beide DGL nebeneinander.',
          'Welcher Term wirkt wie welcher?',
          'Achtung: $k\\leftrightarrow 1/C$, nicht $k\\leftrightarrow C$.',
        ],
      ),
      mc(
        '[PRÜFUNG] Ein Feder-Masse-System hat $m=2$ kg, $k=200$ N/m, $d=4$ Ns/m. Welche RLC-Schaltung hat genau dieselbe DGL-Struktur (Eigenfrequenz und Dämpfung)?',
        [
          '$L=2$ H, $R=4$ Ω, $C=1/200$ F',
          '$L=2$ H, $R=4$ Ω, $C=200$ F',
          '$L=1/2$ H, $R=1/4$ Ω, $C=200$ F',
          '$L=200$ H, $R=4$ Ω, $C=2$ F',
        ],
        0,
        `**Ansatz:** Analogie: $m\\leftrightarrow L$, $d\\leftrightarrow R$, $k\\leftrightarrow 1/C$.

**Rechnung:** $L = 2$ H, $R = 4$ Ω, und aus $k = 1/C$: $C = 1/k = 1/200$ F. Eigenfrequenz: $\\omega_0^{mech} = \\sqrt{k/m} = \\sqrt{100} = 10$ rad/s; elektrisch $\\omega_0^{el} = 1/\\sqrt{LC} = 1/\\sqrt{2\\cdot 1/200} = 1/\\sqrt{0{,}01} = 10$ rad/s ✓.

**Probe:** Dämpfungsmaß mechanisch $D = d/(2\\sqrt{mk}) = 4/(2\\sqrt{400}) = 0{,}1$; elektrisch $D_{el} = (R/2)\\sqrt{C/L} = 2\\cdot\\sqrt{(1/200)/2} = 2\\cdot\\sqrt{1/400} = 2\\cdot 0{,}05 = 0{,}1$ ✓ — identisches Dämpfungsmaß.

**Typischer Fehler:** $C = k$ ansetzen — häufigste Verwechslung, Ergebnis $\\omega_0 = 1/\\sqrt{2\\cdot 200} = 1/20$ ist dann um Faktor 200 zu klein.`,
        [
          'Analogie-Tabelle durchgehen: welche Größen tauschen?',
          '$k \\leftrightarrow 1/C$, also $C = 1/k$.',
          'Plausibilisiere am Ende mit $\\omega_0$ und Dämpfungsmaß.',
        ],
        {
          1: '$C = 200$ F wäre $C = k$ — die Analogie ist aber $C = 1/k = 0{,}005$ F. Mit $200$ F wäre $\\omega_0 = 1/\\sqrt{2\\cdot 200} = 1/20$ rad/s, also völlig anderes System.',
          2: '$L = 1/m$ und $R = 1/d$ wären Antreiber, nicht Analoga. Die Analogie geht zu den *linearen Koeffizienten direkt*: $L=m$, $R=d$.',
          3: '$L=200$ und $C=2$ wäre fast wie „Masse und Feder tauschen" — das System hätte eine ganz andere Eigenfrequenz $\\omega_0 = 1/\\sqrt{400} = 0{,}05$ rad/s.',
        },
      ),
      ni(
        '[PRÜFUNG] Ein RLC-Kreis mit $L=0{,}5$ H, $R=2$ Ω, $C=0{,}002$ F wird als mechanisches System interpretiert. Welche Federkonstante $k$ (in N/m) entspricht der Kapazität?',
        500, 1, 'N/m',
        `**Ansatz:** $k \\leftrightarrow 1/C$, also $k = 1/C$ (sofern Einheiten nur Proportionalitäten widerspiegeln).

**Rechnung:** $k = 1/C = 1/0{,}002 = 500$ N/m.

**Probe:** $\\omega_0^{el} = 1/\\sqrt{LC} = 1/\\sqrt{0{,}001} \\approx 31{,}6$ rad/s. Mit $m \\leftrightarrow L = 0{,}5$ kg: $\\omega_0^{mech} = \\sqrt{k/m} = \\sqrt{500/0{,}5} = \\sqrt{1000} \\approx 31{,}6$ rad/s ✓.

**Typischer Fehler:** Direkt $k = C$ setzen — das ergibt $k = 0{,}002$ N/m (weiche Feder) und eine völlig andere Eigenfrequenz.`,
        [
          'Analogie: $k \\leftrightarrow 1/C$.',
          'Einfach reziprok nehmen.',
          'Plausibilisiere mit $\\omega_0$.',
        ],
      ),
      tf(
        '[PRÜFUNG] In der Mechanik-Elektrik-Analogie entspricht der Dämpfung $d$ eines mechanischen Systems der Induktivität $L$ einer Schaltung.',
        false,
        `**Ansatz:** Prüfe die Analogie-Zuordnung: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $k \\leftrightarrow 1/C$.

**Rechnung:** Dämpfung $d$ entspricht dem *Widerstand* $R$, weil beide Energie dissipieren (Reibungswärme ↔ Joulesche Wärme) und in der DGL vor der ersten Ableitung stehen ($d\\dot x$ ↔ $R\\dot q = RI$).

**Probe:** Einheitenvergleich: $[d] = $ Ns/m = kg/s (mechanische Dissipation); $[R] = $ V/A = Ω = kg·m²/(A²·s³). Beide sind Dissipationsparameter in ihren Domänen.

**Typischer Fehler:** „$L$ ist ein Spule, Spulen bremsen Strom" — stimmt nicht: Spulen speichern magnetische Energie (wie Massen kinetische), sie dissipieren nicht. Dissipation passiert ausschließlich im Widerstand.`,
        [
          'Welche Rolle spielt $L$ in der DGL — vor welcher Ableitung?',
          'Welche Rolle spielt $d$ — vor welcher Ableitung?',
          'Beide müssen an derselben Stelle der DGL stehen, um Analoga zu sein.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Übertragung „mechanisches Modell → elektrisches Analogon" in die richtige Reihenfolge.',
        [
          'Mechanische DGL $m\\ddot x + d\\dot x + kx = F$ aufschreiben',
          'Koeffizienten identifizieren: $m, d, k, F$',
          'Analogie-Tabelle anwenden: $m\\to L$, $d\\to R$, $k\\to 1/C$, $F\\to U$',
          'Elektrische DGL $L\\ddot q + R\\dot q + q/C = U$ aufschreiben',
          'Überprüfen: Eigenfrequenz und Dämpfung beider Systeme identisch?',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Erst die mechanische DGL sauber aufschreiben, dann Koeffizient für Koeffizient übersetzen.

**Rechnung:** Die Analogie ist eine *strukturelle Übertragung*: gleiche DGL-Form, nur mit Elektrik-Symbolen. Plausibilitätscheck über $\\omega_0$ und Dämpfungsmaß.

**Probe:** Am Ende müssen $\\omega_0^{mech} = \\sqrt{k/m}$ und $\\omega_0^{el} = 1/\\sqrt{LC}$ denselben Zahlenwert liefern, sonst wurde die Analogie falsch angewandt.

**Typischer Fehler:** Schritt 3 und 4 vertauschen — „ich schreib schon die elektrische DGL auf und passe später die Koeffizienten an" — führt oft zu vergessenen Termen.`,
        [
          'Strukturelle Übertragung: Form bleibt gleich, Symbole ändern sich.',
          'Analogie-Tabelle als Nachschlagewerk.',
          'Am Ende immer mit $\\omega_0$ und Dämpfung plausibilisieren.',
        ],
      ),
    ],

    // ── [4] Stationäre Lösung: ẏ = 0 → algebraisches System ───────────────
    4: [
      ni(
        '[PRÜFUNG] Wärmeleitung in einem Rohr: $C_W \\dot T = \\dot Q_{ein} - kA(T-T_U)$ mit $\\dot Q_{ein} = 800$ W, $kA = 20$ W/K, $T_U = 15$ °C. Welche Endtemperatur (in °C) stellt sich stationär ein?',
        55, 0.1, '°C',
        `**Ansatz:** Stationär $\\dot T = 0 \\Rightarrow$ algebraische Gleichung nach $T_\\infty$.

**Rechnung:** $0 = 800 - 20\\cdot(T_\\infty - 15) \\Rightarrow T_\\infty - 15 = 40 \\Rightarrow T_\\infty = 55$ °C.

**Probe:** Leistungsbilanz bei $T_\\infty$: Verlust $= 20\\cdot 40 = 800$ W $=$ Zufuhr ✓. Das Verhältnis $\\dot Q_{ein}/(kA) = 40$ K ist genau die Übertemperatur.

**Typischer Fehler:** $T_\\infty = 800/20 = 40$ °C — Bezugspunkt $T_U = 15$ °C vergessen. Der Quotient $\\dot Q_{ein}/(kA)$ gibt die *Differenz* zur Umgebung, nicht die Absoluttemperatur.`,
        [
          'Stationär: zeitliche Ableitung auf null setzen.',
          'Übriggebliebene Gleichung algebraisch nach $T_\\infty$ auflösen.',
          'Umgebungstemperatur hinzuaddieren.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Aussage zur stationären Lösung eines autonomen Systems $\\dot y = f(y)$ ist richtig?',
        [
          'Stationäre Lösungen sind genau die Nullstellen von $f$: $f(y^*) = 0$.',
          'Stationäre Lösungen sind die Nullstellen von $f$ und zusätzlich alle Wendepunkte von $y(t)$.',
          'Stationäre Lösungen sind die Punkte, in denen $y$ Null ist.',
          'Es gibt immer genau eine stationäre Lösung pro DGL.',
        ],
        0,
        `**Ansatz:** „Stationär" heißt $\\dot y = 0$, das heißt bei autonomen Systemen $f(y) = 0$. Das ist die *Definition*.

**Rechnung:** Aus $\\dot y = f(y) = 0$ folgt, dass $y(t) = y^*$ konstant bleibt. Jede Nullstelle von $f$ ist ein solches Gleichgewicht.

**Probe:** Beispiel Logistik $\\dot y = y(1-y)$: Nullstellen $y=0$ und $y=1$ — das sind genau die beiden Gleichgewichte.

**Typischer Fehler:** „Stationär" mit „$y=0$" verwechseln — stationär bedeutet konstant, nicht null. $y^*$ kann jeden Wert haben, solange $f(y^*)=0$.`,
        [
          'Stationär $\\Leftrightarrow$ keine Änderung.',
          'Bei autonomen DGL $\\dot y = f(y)$ heißt das $f(y)=0$.',
          'Mehrere Nullstellen = mehrere Gleichgewichte.',
        ],
        {
          1: 'Wendepunkte sind Nullstellen der *zweiten* Ableitung von $y(t)$, nicht stationäre Punkte. Für stationär reicht $\\dot y = 0$.',
          2: 'Nein — stationär bedeutet $\\dot y = 0$, nicht $y = 0$. Beispiel: Tank füllt sich stationär auf $V_\\infty = 50$ L, das ist nicht 0.',
          3: 'Nichtlineare DGL haben oft mehrere Gleichgewichte (z.B. Logistik: $y^*=0$ und $y^*=1$). Lineare homogene haben meist nur $y^*=0$.',
        },
      ),
      tf(
        '[PRÜFUNG] Für ein lineares System $\\dot{\\vec x} = A\\vec x + \\vec b$ mit invertierbarer Matrix $A$ ist die stationäre Lösung eindeutig durch $\\vec x^* = -A^{-1}\\vec b$ gegeben.',
        true,
        `**Ansatz:** Stationär $\\dot{\\vec x} = 0$ → $A\\vec x^* + \\vec b = 0$ → lineares Gleichungssystem.

**Rechnung:** $A\\vec x^* = -\\vec b \\Rightarrow \\vec x^* = -A^{-1}\\vec b$, sofern $A$ invertierbar ist (also $\\det(A)\\neq 0$).

**Probe:** Falls $A$ singulär ist, hat das System entweder keine Lösung (inkonsistent) oder einen ganzen Unterraum stationärer Lösungen.

**Typischer Fehler:** $\\vec x^* = A^{-1}\\vec b$ ohne Minuszeichen — das passiert, wenn man $A\\vec x^* = \\vec b$ statt $A\\vec x^* = -\\vec b$ aufschreibt.`,
        [
          '$\\dot{\\vec x} = 0$ gibt die algebraische Bedingung.',
          'Lineares Gleichungssystem nach $\\vec x^*$ auflösen.',
          'Minuszeichen nicht vergessen: $A\\vec x^* = -\\vec b$.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne Systemen ihre stationären Lösungen zu.',
        [
          { left: '$\\dot V = 10 - 0{,}2 V$ (Tank)', right: '$V^* = 50$' },
          { left: '$\\dot T = -k(T - 25)$, $k>0$', right: '$T^* = 25$' },
          { left: '$\\dot y = y(y-3)$ (logistisch)', right: '$y^* \\in \\{0,\\,3\\}$' },
          { left: '$\\dot x = -x + 4\\sin t$ (nicht autonom)', right: 'kein konstantes $x^*$ — Zwangsschwingung' },
        ],
        `**Ansatz:** Für autonome DGL stationäre Punkte aus $f(y)=0$. Bei nicht-autonomen Systemen (Zeit explizit) gibt es meist kein konstantes Gleichgewicht, sondern ein *eingeschwungenes* Zeitsignal.

**Rechnung:** (1) $0 = 10 - 0{,}2 V^* \\Rightarrow V^* = 50$. (2) $0 = -k(T^* - 25) \\Rightarrow T^* = 25$. (3) $0 = y(y-3) \\Rightarrow y^* \\in\\{0,3\\}$. (4) Rechte Seite hängt explizit von $t$ ab → keine Konstante kann alle Zeitpunkte erfüllen.

**Probe:** Bei (4) existiert stattdessen eine *partikuläre Lösung* $x_p(t) = A\\sin(t-\\varphi)$ — eingeschwungener Zustand.

**Typischer Fehler:** Bei Zwangsschwingung einen „stationären Wert" suchen — stattdessen nach dem Zeitverlauf der partikulären Lösung fragen.`,
        [
          'Autonom: $f(y)=0$ direkt lösen.',
          'Nicht-autonom: kein konstantes Gleichgewicht möglich.',
          'Nichtlinear oft: mehrere Gleichgewichte.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Ordne die Schritte „stationäre Lösung bestimmen und interpretieren" in die richtige Reihenfolge.',
        [
          'DGL aufstellen: $\\dot y = f(y, u)$',
          'Ableitungsterm auf null setzen: $\\dot y = 0$',
          'Algebraisches System $f(y^*, u)=0$ nach $y^*$ auflösen',
          'Eindeutigkeit prüfen (eine oder mehrere Lösungen?)',
          'Stabilität des Gleichgewichts analysieren (Linearisierung)',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Stationäre Analyse: DGL → Nullsetzen → Auflösen → Eindeutigkeit → Stabilität.

**Rechnung:** Erst bei bekanntem $y^*$ macht Stabilität Sinn (linearisieren um $y^*$). Mehrfach-Gleichgewichte erfordern individuelle Stabilitätsanalyse pro Punkt.

**Probe:** Am logistischen System $\\dot y = y(1-y)$: (1) DGL klar, (2) Nullsetzen, (3) $y^*\\in\\{0,1\\}$, (4) zwei Punkte, (5) $y^*=0$ instabil (kleine $y$ wachsen), $y^*=1$ stabil (kleine Abweichungen klingen ab).

**Typischer Fehler:** Stabilitätsanalyse überspringen — stationäre Lösung ohne Stabilitätsurteil ist oft praktisch nutzlos (ein instabiler Gleichgewichtspunkt wird nie beobachtet).`,
        [
          'Zuerst Lösung finden, dann Eigenschaften untersuchen.',
          'Stabilität folgt aus Linearisierung um $y^*$.',
          'Bei mehreren Gleichgewichten jedes einzeln prüfen.',
        ],
      ),
    ],

    // ── [5] Newton'sches Abkühlungsgesetz ─────────────────────────────────
    5: [
      ni(
        '[PRÜFUNG] Ein Kaffee hat $T_0 = 90$ °C und kühlt in $T_U = 20$ °C ab. Nach 5 min misst man $T = 55$ °C. Wie viele Minuten braucht er, um auf $T = 28{,}75$ °C zu fallen?',
        15, 0.1, 'min',
        `**Ansatz:** Newton-Abkühlung $T(t) = T_U + (T_0 - T_U)e^{-kt}$. Erst $k$ aus der Messung bestimmen, dann nach $t$ auflösen.

**Rechnung:** $(T-T_U)/(T_0-T_U) = e^{-kt}$. Bei $t=5$: $(55-20)/70 = 0{,}5 = e^{-5k} \\Rightarrow k = \\ln 2/5 \\approx 0{,}1386$ 1/min. Ziel $T=28{,}75$ °C: $\\Delta T = 8{,}75$ K, also $8{,}75/70 = 1/8 = e^{-kt} \\Rightarrow kt = 3\\ln 2 \\Rightarrow t = 3\\cdot 5 = 15$ min.

**Probe:** Jede Halbierung der Temperaturdifferenz braucht $t_{1/2}=5$ min. $\\Delta T$: $70\\to 35\\to 17{,}5\\to 8{,}75$ K nach $5,10,15$ min, also $T = 20 + 8{,}75 = 28{,}75$ °C ✓.

**Typischer Fehler:** Mit $T$ statt $(T-T_U)$ rechnen: $28{,}75/90 \\approx 0{,}32$ gibt völlig andere Zeit, weil die Asymptote bei $T_U\\neq 0$ ignoriert wird.`,
        [
          'Immer mit der Temperaturdifferenz $\\Delta T = T - T_U$ arbeiten.',
          'Aus der ersten Messung $k = \\ln 2 / 5$ bestimmen.',
          'Ziel-$\\Delta T = 8{,}75$ K ist $1/8$ des Anfangswerts → drei Halbwertszeiten.',
        ],
      ),
      mc(
        '[PRÜFUNG] Welche Eigenschaft hat die Lösung $T(t) = T_U + (T_0-T_U)e^{-kt}$?',
        [
          'Exponentieller Zerfall der Temperaturdifferenz, Asymptote $T_U$.',
          'Linearer Zerfall, $T$ trifft $T_U$ nach endlicher Zeit.',
          'Exponentielles Wachstum, $T$ steigt über alle Grenzen.',
          'Periodische Oszillation um $T_U$.',
        ],
        0,
        `**Ansatz:** Untersuche das qualitative Verhalten der Lösungsformel für $t\\to\\infty$ und $t=0$.

**Rechnung:** Bei $t=0$: $T(0) = T_U + (T_0-T_U) = T_0$ ✓. Bei $t\\to\\infty$: $e^{-kt}\\to 0$ (da $k>0$), also $T(t)\\to T_U$ — exponentielle Annäherung. Differenz $T-T_U = (T_0-T_U)e^{-kt}$ zerfällt exponentiell.

**Probe:** Halbwertszeit der Temperaturdifferenz: $t_{1/2} = \\ln 2 / k$, unabhängig vom Anfangswert — klassisches Merkmal exponentiellen Zerfalls.

**Typischer Fehler:** „$T$ erreicht $T_U$ nach endlicher Zeit" — exponentiell bleibt immer *über* $T_U$ (asymptotisch). In der Praxis ist die Differenz nach $5\\cdot t_{1/2}$ nur noch ~3% — vernachlässigbar, aber nicht exakt null.`,
        [
          'Verhalten bei $t=0$ und $t\\to\\infty$ beurteilen.',
          '$e^{-kt}$ ist monotone fallende Exponentialfunktion.',
          'Asymptote der Lösung suchen.',
        ],
        {
          1: 'Linearer Zerfall hätte die Form $T = T_0 - m\\cdot t$ — dort würde $T$ tatsächlich negative Werte erreichen. Newton liefert aber Exponentialform und Asymptote.',
          2: 'Wachstum würde aus positiven Exponenten $e^{+kt}$ kommen — dann wäre die DGL $\\dot T = +k(T-T_U)$, nicht die Newton-Abkühlung.',
          3: 'Oszillation bräuchte komplexe Eigenwerte $\\pm i\\omega$ — Newton hat einen reellen Eigenwert $-k<0$, also kein Schwingen.',
        },
      ),
      tf(
        '[PRÜFUNG] Die Zeit, in der sich die Temperaturdifferenz $\\Delta T = T - T_U$ halbiert, hängt bei der Newton-Abkühlung nicht vom Anfangswert $T_0$ ab.',
        true,
        `**Ansatz:** Halbierungsbedingung: $\\Delta T(t_{1/2}) = \\tfrac12 \\Delta T(0)$.

**Rechnung:** $(T_0-T_U)e^{-k t_{1/2}} = \\tfrac12 (T_0-T_U) \\Rightarrow e^{-k t_{1/2}} = \\tfrac12 \\Rightarrow t_{1/2} = \\ln 2 / k$. Keine Abhängigkeit von $T_0$.

**Probe:** Egal ob $T_0=100$ °C oder $T_0=40$ °C: die *Differenz* halbiert sich in derselben Zeit, weil der Zerfallsfaktor $k$ Materialeigenschaft ist.

**Typischer Fehler:** „Heißere Objekte kühlen schneller ab" — stimmt nur absolut (mehr K/min), aber *relativ* (halbe Differenz) ist die Zeitskala dieselbe.`,
        [
          '$\\Delta T = (T_0-T_U)e^{-kt}$.',
          'Halbierung: $e^{-kt_{1/2}} = 1/2$.',
          'Löse nach $t_{1/2}$ und prüfe, ob $T_0$ vorkommt.',
        ],
      ),
      matching(
        '[PRÜFUNG] Ordne Situation und Konsequenz für die Newton-Abkühlung zu.',
        [
          { left: '$k$ wird größer (bessere Isolierung umgekehrt, schlechte Isolierung)', right: 'Abkühlung läuft schneller, kürzere Halbwertszeit' },
          { left: '$T_U$ wird höher', right: 'Endtemperatur $T_\\infty$ höher, Zeitverlauf verschoben' },
          { left: '$T_0 = T_U$', right: 'Lösung ist konstant $T(t) = T_U$, kein Temperaturausgleich nötig' },
          { left: '$T_0 < T_U$ (Objekt kälter als Umgebung)', right: 'Objekt erwärmt sich exponentiell auf $T_U$' },
        ],
        `**Ansatz:** Parameter-Einfluss auf die Lösung systematisch: $k$ steuert Zeitskala, $T_U$ steuert Asymptote, $T_0$ steuert Amplitude und Vorzeichen der Differenz.

**Rechnung:** (1) $t_{1/2}=\\ln 2/k$: $k\\uparrow\\Rightarrow t_{1/2}\\downarrow$. (2) $T_\\infty = T_U$. (3) $T_0 = T_U \\Rightarrow \\Delta T = 0 \\Rightarrow T(t) = T_U$. (4) $T_0-T_U < 0 \\Rightarrow$ Differenz negativ, wächst gegen 0 → Objekt nähert sich $T_U$ von unten (Aufwärmen).

**Probe:** Wärmetauscher-Anwendung: Durch Erhöhen von $k$ (größerer Wärmeübertragungskoeffizient) verkürzt sich die Anpassungszeit — deshalb Rippen an Kühlkörpern.

**Typischer Fehler:** „Newton gilt nur für Abkühlung" — gilt genauso für Erwärmung. Das Vorzeichen von $(T_0-T_U)$ bestimmt die Richtung, die Mathematik ist identisch.`,
        [
          'Parameter einzeln variieren, Rest konstant lassen.',
          '$k$ verändert Geschwindigkeit, $T_U$ die Asymptote.',
          'Newton gilt bidirektional: Abkühlen und Erwärmen.',
        ],
      ),
      sorting(
        '[PRÜFUNG] Bringe die Lösungsschritte für ein Newton-Abkühlungs-Anfangswertproblem in die richtige Reihenfolge.',
        [
          'DGL identifizieren: $\\dot T = -k(T - T_U)$',
          'Substitution $\\Delta T = T - T_U$ → $\\dot{\\Delta T} = -k \\Delta T$',
          'Lösung der homogenen DGL: $\\Delta T(t) = C \\cdot e^{-kt}$',
          'Anfangsbedingung $\\Delta T(0) = T_0 - T_U$ einsetzen → $C = T_0 - T_U$',
          'Rücksubstitution: $T(t) = T_U + (T_0 - T_U) e^{-kt}$',
          'Plausibilitätscheck: $T(0) = T_0$ ✓, $T(\\infty) = T_U$ ✓',
        ],
        [0, 1, 2, 3, 4, 5],
        `**Ansatz:** Struktur „DGL → Substitution → Homogene Lösung → Konstante → Rück → Check".

**Rechnung:** Die Substitution $\\Delta T = T - T_U$ macht die DGL homogen (keine $T_U$-Verschiebung mehr). Dann ist es nur noch die Standard-DGL $\\dot u = -ku$ mit Lösung $u = C e^{-kt}$.

**Probe:** Werkstück $T_0=200$ °C, $T_U=20$ °C, $k=0{,}0693$: $T(t) = 20 + 180 e^{-0{,}0693 t}$. $T(0)=200$ ✓, $T(\\infty)=20$ ✓.

**Typischer Fehler:** Ohne Substitution direkt lösen: $T(t) = Ce^{-kt}$ ansetzen (Asymptote wäre $0$, nicht $T_U$) — Verschiebung ignoriert.`,
        [
          'Substitution macht die DGL homogen.',
          'Dann Standard-Exponential-Lösung.',
          'Am Ende Rücksubstitution und Plausibilitätscheck.',
        ],
      ),
    ],
  },
}
