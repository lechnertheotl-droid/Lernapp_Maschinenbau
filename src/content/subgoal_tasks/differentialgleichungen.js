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
  // dgl-2-2 — DGL-Systeme  (6 subGoals)
  // Je 5 Aufgaben = 30 Goal-Tasks
  // ────────────────────────────────────────────────────────────────────────
  'dgl-2-2': {

    // ── [0] Matrixform: y' = A·y ──────────────────────────────────────
    0: [
      mc(
        'Sub-Goal "Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$": Schreibe das System $y_1\' = 2y_1 - y_2$, $y_2\' = y_1 + 3y_2$ in Matrixform. Welche Matrix $A$ gehört zu $\\vec y\' = A \\vec y$?',
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
        'Sub-Goal "Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$": Für das System $y_1\' = 4y_1 - 2y_2$, $y_2\' = 3y_1 - y_2$ — welchen Wert hat der Matrixeintrag $A_{22}$?',
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
        'Sub-Goal "Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$": Für ein homogenes lineares DGL-System 1. Ordnung mit $n$ gekoppelten Unbekannten $y_1,\\ldots,y_n$ ist die Koeffizientenmatrix $A$ quadratisch $n \\times n$.',
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
        'Sub-Goal "Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$": Ordne die Systeme ihrer Matrix $A$ zu.',
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
        'Sub-Goal "Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$": Warum ist die Matrixform $\\vec y\' = A\\vec y$ gegenüber dem expliziten Gleichungssystem *vorteilhaft*?',
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
        'Sub-Goal "Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$": Schreibe die DGL $y\'\' + 4y\' + 3y = 0$ als System 1. Ordnung mit $y_1 = y$, $y_2 = y\'$. Welche Matrix gehört dazu?',
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
        'Sub-Goal "Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$": DGL 3. Ordnung $y\'\'\' = 2y\'\' - y\' + 5y$ wird in ein System 1. Ordnung umgeschrieben. Wie viele Komponenten hat der Vektor $\\vec y$?',
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
        'Sub-Goal "Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$": Welche Substitution gilt bei DGL 4. Ordnung?',
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
        'Sub-Goal "Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$": Die Reduktion einer DGL höherer Ordnung auf ein System 1. Ordnung ändert die Lösungsmenge.',
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
        'Sub-Goal "Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$": Sortiere die Schritte zur Umformung einer DGL höherer Ordnung in ein System 1. Ordnung.',
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
        'Sub-Goal "Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$": Warum liefert der Ansatz $\\vec y = \\vec v \\cdot e^{\\lambda t}$ für das System $\\vec y\' = A \\vec y$ das Eigenwertproblem $A\\vec v = \\lambda \\vec v$?',
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
        'Sub-Goal "Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$": Gegeben $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Welcher Eigenwert gehört zum Eigenvektor $\\vec v = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$?',
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
        'Sub-Goal "Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$": Wie bestimmt man die Eigenwerte einer $n\\times n$-Matrix $A$?',
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
        'Sub-Goal "Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$": Der Eigenvektor $\\vec v$ ist eindeutig — er hängt nicht von Skalierung ab.',
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
        'Sub-Goal "Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$": Für $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ — was ist der Eigenwert $\\lambda_1$ (kleinerer Wert)?',
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
        'Sub-Goal "Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$": System $\\vec y\' = A\\vec y$ mit Eigenwerten $\\lambda_1 = -1$, $\\lambda_2 = -2$ und Eigenvektoren $\\vec v_1 = \\begin{pmatrix}1\\\\1\\end{pmatrix}$, $\\vec v_2 = \\begin{pmatrix}1\\\\2\\end{pmatrix}$. Allgemeine Lösung?',
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
        'Sub-Goal "Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$": AWP $\\vec y\' = A\\vec y$ mit $\\vec y(0) = \\begin{pmatrix}3\\\\5\\end{pmatrix}$. Eigenzerlegung: $\\lambda_1=1$, $\\vec v_1=\\begin{pmatrix}1\\\\1\\end{pmatrix}$; $\\lambda_2=-1$, $\\vec v_2=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$. Welchen Wert hat $C_1$?',
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
        'Sub-Goal "Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$": Eine $n\\times n$-Matrix $A$ mit $n$ verschiedenen Eigenwerten besitzt $n$ linear unabhängige Eigenvektoren, sodass die allgemeine Lösung vollständig durch $\\vec y = \\sum_{i=1}^n C_i \\vec v_i e^{\\lambda_i t}$ beschrieben ist.',
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
        'Sub-Goal "Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$": Wie viele Integrationskonstanten treten in der allgemeinen Lösung eines $3\\times 3$-DGL-Systems $\\vec y\' = A\\vec y$ auf?',
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
        'Sub-Goal "Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$": Ordne jeden Eigenwert-Typ seinem Beitrag zur Lösung zu.',
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
        'Sub-Goal "Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": System mit Eigenwerten $\\lambda_1 = -2$, $\\lambda_2 = -0{,}5$. Wie verhält sich die Lösung für $t \\to \\infty$?',
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
        'Sub-Goal "Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": Ein einziger Eigenwert mit $\\text{Re}(\\lambda) > 0$ reicht aus, um das gesamte System instabil zu machen.',
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
        'Sub-Goal "Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": Welches System ist *grenzstabil* (stabil, aber nicht asymptotisch stabil)?',
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
        'Sub-Goal "Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": Ein $2\\times 2$-System hat Eigenwerte $\\lambda_1 = -3$ und $\\lambda_2 = -0{,}5$. Der *langsamste* Abklingmode dominiert das Langzeitverhalten. Zu welcher Zeit $t$ ist dieser Mode auf $1/e \\approx 0{,}368$ seines Startwerts abgeklungen?',
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
        'Sub-Goal "Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": Ordne jedem Eigenwert-Spektrum den Stabilitätstyp zu.',
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
        'Sub-Goal "Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung": System mit komplex konjugiertem EW-Paar $\\lambda_{1,2} = -1 \\pm 2i$ und (komplexem) Eigenvektor $\\vec v = \\begin{pmatrix}1\\\\i\\end{pmatrix}$ zu $\\lambda_1$. Welche reelle Lösung gehört dazu?',
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
        'Sub-Goal "Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung": Bei einer reellen Matrix $A$ treten komplexe Eigenwerte immer in konjugierten Paaren auf.',
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
        'Sub-Goal "Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung": Ein gedämpftes Schwingungssystem hat Eigenwerte $\\lambda_{1,2} = -2 \\pm 3i$. Welche Schwingungsfrequenz $\\omega$ hat die Lösung?',
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
        'Sub-Goal "Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung": Ein konjugiertes Eigenwert-Paar liefert wie viele reelle linear unabhängige Grundlösungen?',
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
        'Sub-Goal "Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung": Sortiere die Schritte zur Berechnung reeller Lösungen bei komplexen Eigenwerten.',
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
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Welchen Typ hat $y\' + \\frac{y}{x} = x^2 y^3$?',
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
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Ordne jede DGL ihrem Typ zu.',
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
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Die DGL $y\' = y^2 + x$ ist eine Riccati-DGL.',
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
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Welche DGL ist *nicht* trennbar?',
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
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Sortiere die DGL nach dem Grad der $y$-Nichtlinearität (rechts) von linear → quadratisch → kubisch.',
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
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Löse $y\' = \\frac{x}{y}$ allgemein.',
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
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] AWP: $y\' = \\frac{y}{x}$, $y(1) = 4$. Welchen Wert hat $y(2)$?',
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
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Bei der DGL $y\' = g(y)$ (reine $y$-Abhängigkeit) erhält man die Lösung durch $x = \\int \\frac{dy}{g(y)} + C$.',
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
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Welches ist die allgemeine Lösung von $y\' = y \\cdot \\cos x$?',
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
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Löse $y\' = 1 + y^2$, $y(0) = 0$. Welchen Wert hat $y$ bei $x = \\pi/6$? (auf 4 Dezimalstellen)',
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
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Ist $(3x^2 y + 2)\\,dx + (x^3 + 4y)\\,dy = 0$ exakt, und wie lautet die Potentialfunktion $F(x,y)$?',
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
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Wenn $M_y \\neq N_x$, ist die DGL nicht lösbar.',
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
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Für die exakte DGL $(2xy)\\,dx + (x^2 + 1)\\,dy = 0$ mit $y(1) = 2$: Welchen Wert hat die Integrationskonstante $C$ in der impliziten Lösung $x^2 y + y = C$?',
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
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Welche DGL ist *nicht* exakt?',
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
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Sortiere die Lösungs-Schritte einer exakten DGL in die richtige Reihenfolge.',
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
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] AWP $y\' = 2y$, $y(0) = 5$. Welchen Wert hat die Konstante $C$ in der allgemeinen Lösung $y = Ce^{2x}$?',
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
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Für $y\' = y$, $y(1) = e^2$: Welche partikuläre Lösung ergibt sich?',
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
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Ein AWP 1. Ordnung hat genau eine Lösung, wenn $f(x,y)$ und $\\partial f/\\partial y$ in einer Umgebung der Anfangswertstelle stetig sind (Picard-Lindelöf).',
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
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Lineare DGL $y\' + y = 1$ mit $y(0) = 3$. Welchen Wert hat $y(\\ln 2)$?',
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
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Gegeben AWP $y\' = 2xy$, $y(1) = e$. Welche Lösung?',
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
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Welche Substitution linearisiert $y\' + y = y^3$?',
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
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Für Bernoulli $y\' - y = xy^2$ lautet die Substitution $u = y^{-1}$. Welchen Exponenten $m$ hat $y$, wenn $y\'$ in die DGL eingesetzt wird (i.e. $y\' = \\dots \\cdot y^m \\cdot u\'$)?',
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
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Für $n = 0$ oder $n = 1$ ist die Bernoulli-DGL bereits linear, sodass die Substitution $u = y^{1-n}$ überflüssig ist.',
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
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Die Substitution $u = y^{1-n}$ in $y\' + p(x)y = q(x)y^n$ führt auf welche DGL für $u$?',
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
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Sortiere die Bernoulli-Lösungsschritte in die richtige Reihenfolge.',
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
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Wann existiert ein integrierender Faktor $\\mu(x)$ (nur von $x$ abhängig) für $M\\,dx + N\\,dy = 0$?',
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
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Finde den integrierenden Faktor $\\mu(x)$ für $(3x^2 + 2y)\\,dx + (x)\\,dy = 0$. Welchen Wert hat $\\mu$ bei $x = 2$?',
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
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Nach Multiplikation mit dem richtigen integrierenden Faktor $\\mu$ wird eine ursprünglich nicht-exakte DGL exakt, und die Lösungsstruktur der alten DGL bleibt erhalten.',
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
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Welcher integrierende Faktor linearisiert $y\' + p(x)\\,y = q(x)$?',
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
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Ordne jedem Kriterium den passenden integrierenden Faktor zu.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Welcher Ansatz für $y_p$ ist bei $y\'\' - y\' + y = x^2 + 3$ richtig?',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Gegeben $y\'\' + 4y = 8x + 12$. Bestimme im Polynom-Ansatz $y_p = Ax + B$ den Koeffizienten $A$.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Bei $y\'\' + 3y\' + 2y = 5x^3$ ist der passende Partikulär-Ansatz $y_p = Ax^3 + Bx^2 + Cx + D$.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Ordne jeder Störfunktion den passenden Polynom-Ansatz zu (ohne Resonanz).',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Für $y\'\' - y\' = 2x + 1$ ist der Standard-Ansatz $y_p = Ax + B$ falsch — warum?',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Finde $A$ in $y_p = A e^{2x}$ für die DGL $y\'\' - 3y\' + 2y = 4e^{2x}$... Moment, ist der Ansatz überhaupt zulässig? Wenn nicht, schreibe $0$. Wenn ja, gib $A$ an.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Für $y\'\' - 4y\' + 3y = 5e^{-x}$ ist der richtige Ansatz:',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Bei $y\'\' + y = e^{2x}$ ist $c=2$ kein Eigenwert der char. Gleichung, daher ist $y_p = A e^{2x}$ ein gültiger Ansatz.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Sortiere die Schritte zur Bestimmung der partikulären Lösung bei exponentieller Störung.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Berechne $A$ in $y_p = A e^{3x}$ für die DGL $y\'\' - 2y\' - 3y = 8 e^{3x}$... falls zulässig. Falls Resonanz vorliegt, trage $0$ ein.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Welcher Ansatz ist für $y\'\' + 3y\' + 2y = 4\\cos(2x)$ richtig?',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Für $y\'\' + 4y = 6\\sin(x)$ setzt man $y_p = A\\cos(x) + B\\sin(x)$ an. Berechne $B$.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Wenn die Störfunktion nur $\\sin(\\omega x)$ ist, reicht als Ansatz $y_p = B\\sin(\\omega x)$ ohne $\\cos$-Term.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Ordne jeder trigonometrischen Störfunktion den passenden Ansatz zu.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Bei welcher DGL tritt **Resonanz** auf, so dass der Standard-Ansatz $y_p=A\\cos(3x)+B\\sin(3x)$ **NICHT** direkt zulässig ist?',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Wähle den Ansatz für $y\'\' - 4y\' + 4y = e^{2x}$.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Bestimme $A$ in $y_p = Ax e^x$ für die DGL $y\'\' - y = 4 e^x$.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Bei $y\'\' + y = \\sin(x)$ liegt Resonanz vor, weil $\\pm i$ (die Wurzeln der char. Gleichung) auch die Frequenz der Störung ergeben.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Sortiere die Entscheidungslogik beim Resonanzcheck.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Welche Aussage zur Resonanz ist FALSCH?',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Die allgemeine Lösung von $y\'\' - 3y\' + 2y = 6$ lautet:',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Für $y\'\' + y = 2$ lautet $y_h = C_1\\cos x + C_2\\sin x$ und $y_p = 2$. Wie viele freie Konstanten enthält die allgemeine Lösung?',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Wenn $y_{p,1}$ und $y_{p,2}$ zwei verschiedene Partikulärlösungen derselben inhomogenen DGL sind, ist ihre Differenz $y_{p,1}-y_{p,2}$ eine Lösung der homogenen DGL.',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Ordne DGL und allgemeine Lösung zu.',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Sortiere die Schritte zur Bestimmung der allgemeinen Lösung einer inhomogenen linearen DGL 2. Ordnung.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Gegeben $y\'\' - y = 0$ mit $y(0) = 3$ und $y\'(0) = 1$. Berechne $C_1$ in der Lösung $y = C_1 e^{x} + C_2 e^{-x}$.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Welche Aussage zum AWP bei DGL 2. Ordnung ist RICHTIG?',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Die Anfangsbedingungen $y(0)=0$ und $y(1)=1$ reichen ebenfalls aus, um die zwei Konstanten einer DGL 2. Ordnung eindeutig zu bestimmen.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Sortiere die Schritte zur Lösung eines AWP 2. Ordnung.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] AWP: $y\'\' + 4y = 0$, $y(0) = 2$, $y\'(0) = 6$. Berechne $C_2$ in $y = C_1\\cos(2x) + C_2\\sin(2x)$.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Welcher Ansatz für $y_p$ ist bei $y\'\' - y\' + y = x^2 + 3$ richtig?',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Gegeben $y\'\' + 4y = 8x + 12$. Bestimme im Polynom-Ansatz $y_p = Ax + B$ den Koeffizienten $A$.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Bei $y\'\' + 3y\' + 2y = 5x^3$ ist der passende Partikulär-Ansatz $y_p = Ax^3 + Bx^2 + Cx + D$.',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Ordne jeder Störfunktion den passenden Polynom-Ansatz zu (ohne Resonanz).',
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
        'Sub-Goal "Störansatz Polynom: $y_p = $ Polynom gleichen Grades": [PRÜFUNG] Für $y\'\' - y\' = 2x + 1$ ist der Standard-Ansatz $y_p = Ax + B$ falsch — warum?',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Finde $A$ in $y_p = A e^{2x}$ für die DGL $y\'\' - 3y\' + 2y = 4e^{2x}$... Moment, ist der Ansatz überhaupt zulässig? Wenn nicht, schreibe $0$. Wenn ja, gib $A$ an.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Für $y\'\' - 4y\' + 3y = 5e^{-x}$ ist der richtige Ansatz:',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Bei $y\'\' + y = e^{2x}$ ist $c=2$ kein Eigenwert der char. Gleichung, daher ist $y_p = A e^{2x}$ ein gültiger Ansatz.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Sortiere die Schritte zur Bestimmung der partikulären Lösung bei exponentieller Störung.',
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
        'Sub-Goal "Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)": [PRÜFUNG] Berechne $A$ in $y_p = A e^{3x}$ für die DGL $y\'\' - 2y\' - 3y = 8 e^{3x}$... falls zulässig. Falls Resonanz vorliegt, trage $0$ ein.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Welcher Ansatz ist für $y\'\' + 3y\' + 2y = 4\\cos(2x)$ richtig?',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Für $y\'\' + 4y = 6\\sin(x)$ setzt man $y_p = A\\cos(x) + B\\sin(x)$ an. Berechne $B$.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Wenn die Störfunktion nur $\\sin(\\omega x)$ ist, reicht als Ansatz $y_p = B\\sin(\\omega x)$ ohne $\\cos$-Term.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Ordne jeder trigonometrischen Störfunktion den passenden Ansatz zu.',
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
        'Sub-Goal "Störansatz Trig: $y_p = A \\cos\\omega x + B \\sin\\omega x$": [PRÜFUNG] Bei welcher DGL tritt **Resonanz** auf, so dass der Standard-Ansatz $y_p=A\\cos(3x)+B\\sin(3x)$ **NICHT** direkt zulässig ist?',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Wähle den Ansatz für $y\'\' - 4y\' + 4y = e^{2x}$.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Bestimme $A$ in $y_p = Ax e^x$ für die DGL $y\'\' - y = 4 e^x$.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Bei $y\'\' + y = \\sin(x)$ liegt Resonanz vor, weil $\\pm i$ (die Wurzeln der char. Gleichung) auch die Frequenz der Störung ergeben.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Sortiere die Entscheidungslogik beim Resonanzcheck.',
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
        'Sub-Goal "Resonanzfall: Wenn Störung homogene Lösung ist → $\\times x$ (oder $\\times x^2$ bei Doppelwurzel)": [PRÜFUNG] Welche Aussage zur Resonanz ist FALSCH?',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Die allgemeine Lösung von $y\'\' - 3y\' + 2y = 6$ lautet:',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Für $y\'\' + y = 2$ lautet $y_h = C_1\\cos x + C_2\\sin x$ und $y_p = 2$. Wie viele freie Konstanten enthält die allgemeine Lösung?',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Wenn $y_{p,1}$ und $y_{p,2}$ zwei verschiedene Partikulärlösungen derselben inhomogenen DGL sind, ist ihre Differenz $y_{p,1}-y_{p,2}$ eine Lösung der homogenen DGL.',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Ordne DGL und allgemeine Lösung zu.',
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
        'Sub-Goal "Allgemeine Lösung: $y = y_h + y_p$": [PRÜFUNG] Sortiere die Schritte zur Bestimmung der allgemeinen Lösung einer inhomogenen linearen DGL 2. Ordnung.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Gegeben $y\'\' - y = 0$ mit $y(0) = 3$ und $y\'(0) = 1$. Berechne $C_1$ in der Lösung $y = C_1 e^{x} + C_2 e^{-x}$.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Welche Aussage zum AWP bei DGL 2. Ordnung ist RICHTIG?',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Die Anfangsbedingungen $y(0)=0$ und $y(1)=1$ reichen ebenfalls aus, um die zwei Konstanten einer DGL 2. Ordnung eindeutig zu bestimmen.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] Sortiere die Schritte zur Lösung eines AWP 2. Ordnung.',
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
        'Sub-Goal "AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y\'(x_0)$ → zwei Konstanten": [PRÜFUNG] AWP: $y\'\' + 4y = 0$, $y(0) = 2$, $y\'(0) = 6$. Berechne $C_2$ in $y = C_1\\cos(2x) + C_2\\sin(2x)$.',
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
        'Sub-Goal "Euler explizit: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$, Fehler $O(h)$": [PRÜFUNG] Für $\\dot y = y$, $y(0) = 1$, $h = 0{,}5$ — welchen Wert liefert ein Euler-Schritt für $y_1$?',
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
        'Sub-Goal "Euler explizit: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$, Fehler $O(h)$": [PRÜFUNG] Was bedeutet „globaler Fehler $O(h)$" bei Euler?',
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
        'Sub-Goal "Euler explizit: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$, Fehler $O(h)$": [PRÜFUNG] Der explizite Euler ist ein *einschrittiges* Verfahren — zur Berechnung von $y_{n+1}$ genügt ausschließlich die Kenntnis von $y_n$.',
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
        'Sub-Goal "Euler explizit: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$, Fehler $O(h)$": [PRÜFUNG] Ein Kühlturm wird mit $\\dot T = -0{,}4(T-20)$, $T(0)=80$ °C simuliert. Berechne mit Euler und $h=1$ min den Wert $T_1$ (in °C).',
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
        'Sub-Goal "Euler explizit: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$, Fehler $O(h)$": [PRÜFUNG] Bringe die Teilschritte eines einzelnen Euler-Updates in die richtige Reihenfolge.',
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
        'Sub-Goal "Stabilität via Eigenwerte: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": [PRÜFUNG] System $\\dot{\\vec x} = A\\vec x$ mit $A = \\begin{pmatrix} -1 & 2 \\\\ 0 & -3 \\end{pmatrix}$. Ist das System asymptotisch stabil?',
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
        'Sub-Goal "Stabilität via Eigenwerte: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": [PRÜFUNG] System $\\dot{\\vec x} = \\begin{pmatrix} 0 & 1 \\\\ -4 & -2 \\end{pmatrix}\\vec x$ (gedämpfter Oszillator). Berechne den Realteil der Eigenwerte.',
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
        'Sub-Goal "Stabilität via Eigenwerte: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": [PRÜFUNG] Ein System mit rein imaginären Eigenwerten $\\lambda = \\pm i\\omega$ ist asymptotisch stabil, weil die Lösungen beschränkt bleiben.',
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
        'Sub-Goal "Stabilität via Eigenwerte: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": [PRÜFUNG] Ordne Eigenwert-Konfigurationen ihren Stabilitätseigenschaften zu.',
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
        'Sub-Goal "Stabilität via Eigenwerte: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil": [PRÜFUNG] Bringe die Schritte der Stabilitätsanalyse eines linearen DGL-Systems in die richtige Reihenfolge.',
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
        'Sub-Goal "Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz": [PRÜFUNG] Ordne jeder Bilanzart das zugehörige Beispiel und die Leitformel zu.',
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
        'Sub-Goal "Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz": [PRÜFUNG] Ein Kondensator wird über einen Widerstand geladen: Strom $I$, Ladung $q$, Quelle $U_0$. Welche Bilanzgleichung ergibt $\\dot q$?',
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
        'Sub-Goal "Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz": [PRÜFUNG] Wärmetauscher: Zufuhr $\\dot Q_{ein} = 500$ W, Verlust $\\alpha(T-T_U) = 25$ W/K · $(T-T_U)$, $T_U = 20$ °C. Berechne die stationäre Endtemperatur $T_\\infty$ in °C.',
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
        'Sub-Goal "Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz": [PRÜFUNG] Bei der Kräftebilanz eines Feder-Masse-Dämpfer-Systems $m\\ddot x = -kx - d\\dot x + F(t)$ ist das Vorzeichen von $-kx$ rückstellend, weil die Feder der Auslenkung entgegenwirkt.',
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
        'Sub-Goal "Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz": [PRÜFUNG] Bringe die Schritte „Bilanzgleichung aufstellen" in die richtige Reihenfolge.',
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
        'Sub-Goal "Mechanik-Elektrik-Analogie: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $1/k \\leftrightarrow C$, $F \\leftrightarrow U$": [PRÜFUNG] Ordne die mechanischen Größen ihren elektrischen Analoga zu.',
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
        'Sub-Goal "Mechanik-Elektrik-Analogie: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $1/k \\leftrightarrow C$, $F \\leftrightarrow U$": [PRÜFUNG] Ein Feder-Masse-System hat $m=2$ kg, $k=200$ N/m, $d=4$ Ns/m. Welche RLC-Schaltung hat genau dieselbe DGL-Struktur (Eigenfrequenz und Dämpfung)?',
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
        'Sub-Goal "Mechanik-Elektrik-Analogie: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $1/k \\leftrightarrow C$, $F \\leftrightarrow U$": [PRÜFUNG] Ein RLC-Kreis mit $L=0{,}5$ H, $R=2$ Ω, $C=0{,}002$ F wird als mechanisches System interpretiert. Welche Federkonstante $k$ (in N/m) entspricht der Kapazität?',
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
        'Sub-Goal "Mechanik-Elektrik-Analogie: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $1/k \\leftrightarrow C$, $F \\leftrightarrow U$": [PRÜFUNG] In der Mechanik-Elektrik-Analogie entspricht der Dämpfung $d$ eines mechanischen Systems der Induktivität $L$ einer Schaltung.',
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
        'Sub-Goal "Mechanik-Elektrik-Analogie: $m \\leftrightarrow L$, $d \\leftrightarrow R$, $1/k \\leftrightarrow C$, $F \\leftrightarrow U$": [PRÜFUNG] Bringe die Übertragung „mechanisches Modell → elektrisches Analogon" in die richtige Reihenfolge.',
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
        'Sub-Goal "Stationäre Lösung: $\\dot y = 0$ → algebraisches System (Gleichgewicht)": [PRÜFUNG] Wärmeleitung in einem Rohr: $C_W \\dot T = \\dot Q_{ein} - kA(T-T_U)$ mit $\\dot Q_{ein} = 800$ W, $kA = 20$ W/K, $T_U = 15$ °C. Welche Endtemperatur (in °C) stellt sich stationär ein?',
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
        'Sub-Goal "Stationäre Lösung: $\\dot y = 0$ → algebraisches System (Gleichgewicht)": [PRÜFUNG] Welche Aussage zur stationären Lösung eines autonomen Systems $\\dot y = f(y)$ ist richtig?',
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
        'Sub-Goal "Stationäre Lösung: $\\dot y = 0$ → algebraisches System (Gleichgewicht)": [PRÜFUNG] Für ein lineares System $\\dot{\\vec x} = A\\vec x + \\vec b$ mit invertierbarer Matrix $A$ ist die stationäre Lösung eindeutig durch $\\vec x^* = -A^{-1}\\vec b$ gegeben.',
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
        'Sub-Goal "Stationäre Lösung: $\\dot y = 0$ → algebraisches System (Gleichgewicht)": [PRÜFUNG] Ordne Systemen ihre stationären Lösungen zu.',
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
        'Sub-Goal "Stationäre Lösung: $\\dot y = 0$ → algebraisches System (Gleichgewicht)": [PRÜFUNG] Ordne die Schritte „stationäre Lösung bestimmen und interpretieren" in die richtige Reihenfolge.',
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
        'Sub-Goal "Newton\'sches Abkühlungsgesetz: $\\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$": [PRÜFUNG] Ein Kaffee hat $T_0 = 90$ °C und kühlt in $T_U = 20$ °C ab. Nach 5 min misst man $T = 55$ °C. Wie viele Minuten braucht er, um auf $T = 28{,}75$ °C zu fallen?',
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
        'Sub-Goal "Newton\'sches Abkühlungsgesetz: $\\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$": [PRÜFUNG] Welche Eigenschaft hat die Lösung $T(t) = T_U + (T_0-T_U)e^{-kt}$?',
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
        'Sub-Goal "Newton\'sches Abkühlungsgesetz: $\\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$": [PRÜFUNG] Die Zeit, in der sich die Temperaturdifferenz $\\Delta T = T - T_U$ halbiert, hängt bei der Newton-Abkühlung nicht vom Anfangswert $T_0$ ab.',
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
        'Sub-Goal "Newton\'sches Abkühlungsgesetz: $\\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$": [PRÜFUNG] Ordne Situation und Konsequenz für die Newton-Abkühlung zu.',
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
        'Sub-Goal "Newton\'sches Abkühlungsgesetz: $\\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$": [PRÜFUNG] Bringe die Lösungsschritte für ein Newton-Abkühlungs-Anfangswertproblem in die richtige Reihenfolge.',
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
