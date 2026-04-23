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
}
