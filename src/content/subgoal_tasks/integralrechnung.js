// ═══════════════════════════════════════════════════════════════════════════
// Integralrechnung — Zielaufgaben pro Sub-Goal
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

export const integralrechnungSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // int-1-1 — Stammfunktion: das Umkehren der Ableitung  (3 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'int-1-1': {

    // ── [0] Stammfunktion durch „Rückwärts-Ableiten" erkennen ──────────────
    0: [
      // Matrix-Zeile 1: SG 0 · recognize · true-false · uses=[stammfunktion]
      tf(
        'Eine Funktion $F$ heißt Stammfunktion von $f$, wenn $F\'(x) = f(x)$ für alle $x$ im Definitionsbereich gilt.',
        true,
        `**Ansatz:** Die Definition der Stammfunktion direkt prüfen.

**Rechnung:** Genau diese Bedingung — $F'(x) = f(x)$ — definiert die Stammfunktion. Integration ist die Umkehrung der Differentiation.

**Probe:** Für $f(x) = 2x$ ist $F(x) = x^{2}$ Stammfunktion, denn $(x^{2})' = 2x$. ✓

**Typischer Fehler:** Richtung der Ableitung verwechseln — gefordert ist $F'(x) = f(x)$, NICHT $f'(x) = F(x)$.`,
        [
          'Was ist die Umkehrung der Ableitung?',
          'Definition: $F$ ist Stammfunktion von $f$, wenn ein bestimmter Ableitungs-Zusammenhang gilt.',
          'Schau die Ableitung von $F$ an — was muss sie laut Definition ergeben?',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['stammfunktion'] },
      ),

      // Matrix-Zeile 2: SG 0 · apply-guided · multiple-choice · uses=[rueckwaerts]
      mc(
        'Welche Funktion $F$ ist eine Stammfunktion von $f(x) = 4x^{3}$ — gefunden durch Rückwärts-Ableiten?',
        [
          '$F(x) = x^{4}$',
          '$F(x) = 12x^{2}$',
          '$F(x) = 4x^{4}$',
          '$F(x) = \\frac{x^{4}}{4}$',
        ],
        0,
        `**Ansatz:** Rückwärts-Ableiten — welcher Term ergibt beim Ableiten $4x^{3}$?

**Rechnung:** $(x^{4})' = 4 \\cdot x^{4-1} = 4x^{3} = f(x)$ ✓ (Potenzregel: Exponent kommt nach vorn, neuer Exponent ist um 1 kleiner).

**Probe:** $\\frac{d}{dx}(x^{4}) = 4x^{3}$. ✓

**Typischer Fehler:** Statt $x^{4}$ wird $4x^{4}$ angegeben — der Faktor $4$ wurde nicht durch den neuen Exponenten geteilt.`,
        [
          'Welche Operation kehrt das Ableiten um? Suche die Funktion, deren Ableitung $4x^{3}$ ergibt.',
          'Potenzregel rückwärts: aus $x^{n}$ wird beim Integrieren $\\frac{x^{n+1}}{n+1}$.',
          'Für $f(x) = 4x^{3}$: Exponent um $1$ erhöhen → $x^{4}$. Den Faktor $4$ durch den neuen Exponenten $4$ teilen — also $4 \\cdot \\frac{x^{4}}{4} = x^{4}$.',
        ],
        {
          1: 'Du hast $4x^{3}$ abgeleitet statt eine Stammfunktion gesucht — falsche Richtung. $\\frac{d}{dx}(4x^{3}) = 12x^{2}$, aber die Probe verlangt das Umgekehrte: $F(x) = x^{4}$ mit $F\'(x) = 4x^{3}$.',
          2: 'Beim Integrieren von $4x^{3}$ muss der Faktor durch den neuen Exponenten geteilt werden: $\\int 4x^{3}\\,dx = 4 \\cdot \\frac{x^{4}}{4} = x^{4}$. Probe: $(4x^{4})\' = 16x^{3} \\neq 4x^{3}$.',
          3: 'Du hast $\\int x^{3}\\,dx = \\frac{x^{4}}{4}$ gerechnet — den Faktor $4$ aber vergessen. Korrekt: $\\int 4x^{3}\\,dx = 4 \\cdot \\frac{x^{4}}{4} = x^{4}$, nicht $\\frac{x^{4}}{4}$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['rueckwaerts'] },
      ),

      // Matrix-Zeile 3: SG 0 · apply-independent · multiple-choice · uses=[rueckwaerts, stammfunktion]
      mc(
        'Welche der folgenden Funktionen ist eine Stammfunktion von $f(x) = 6x^{2} + 4$?',
        [
          '$F(x) = 2x^{3} + 4x$',
          '$F(x) = 12x$',
          '$F(x) = 6x^{3} + 4x$',
          '$F(x) = 2x^{3} + 4$',
        ],
        0,
        `**Ansatz:** Gliedweise integrieren — Potenzregel rückwärts auf jeden Summanden.

**Rechnung:** $\\int 6x^{2}\\,dx = 6 \\cdot \\frac{x^{3}}{3} = 2x^{3}$. $\\int 4\\,dx = 4x$. Summe: $F(x) = 2x^{3} + 4x$.

**Probe:** $F'(x) = 6x^{2} + 4 = f(x)$. ✓

**Typischer Fehler:** Konstante $4$ vergessen zu integrieren — $\\int 4\\,dx = 4x$ (nicht $4$), denn $(4x)' = 4$.`,
        [
          'Setze die Potenzregel gliedweise an: für jedes $a x^{n}$ ist die Stammfunktion $a \\cdot \\frac{x^{n+1}}{n+1}$.',
          'Konstante $4$ ist $4 \\cdot x^{0}$ — Stammfunktion: $4 \\cdot \\frac{x^{1}}{1} = 4x$.',
          'Probe: leite dein Ergebnis ab und prüfe, ob $6x^{2} + 4$ herauskommt.',
        ],
        {
          1: 'Du hast $f(x) = 6x^{2} + 4$ abgeleitet statt eine Stammfunktion gesucht: $f\'(x) = 12x + 0 = 12x$. Gesucht ist die Umkehrung. Korrekt: $F(x) = 2x^{3} + 4x$, denn $F\'(x) = 6x^{2} + 4$.',
          2: 'Beim Integrieren von $6x^{2}$ muss der Faktor durch den neuen Exponenten ($3$) geteilt werden: $\\int 6x^{2}\\,dx = 2x^{3}$, nicht $6x^{3}$. Probe: $(6x^{3})\' = 18x^{2} \\neq 6x^{2}$.',
          3: 'Der konstante Summand $4$ in $f(x)$ wurde nicht integriert — $\\int 4\\,dx = 4x$, nicht $4$. Probe: $(2x^{3} + 4)\' = 6x^{2} + 0 \\neq 6x^{2} + 4$.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['rueckwaerts', 'stammfunktion'] },
      ),

      // Matrix-Zeile 4: SG 0 · error-analysis · multiple-choice · uses=[stammfunktion]
      mc(
        'Eine Studentin soll eine Stammfunktion von $f(x) = 3x^{2}$ angeben und schreibt $F(x) = 6x$. Was ist der Fehler?',
        [
          'Sie hat $f$ abgeleitet statt eine Stammfunktion gesucht — Stammfunktion und Ableitung sind invers, sie ist in die falsche Richtung gelaufen. Korrekt: $F(x) = x^{3}$, denn $(x^{3})\' = 3x^{2}$.',
          'Nichts — $F(x) = 6x$ ist korrekt, denn $(3x^{2})\' = 6x$.',
          'Sie hat den Faktor $3$ nicht durch den neuen Exponenten geteilt — korrekt wäre $F(x) = x^{2}$.',
          'Sie hat zu weit integriert — korrekt wäre $F(x) = 3x^{3}$.',
        ],
        0,
        `**Ansatz:** Probe — das behauptete $F$ ableiten und mit $f$ vergleichen.

**Rechnung:** $(6x)' = 6$, aber $f(x) = 3x^{2}$. Mismatch: $6 \\neq 3x^{2}$. Beobachtung: $(3x^{2})' = 6x$ — die Studentin hat genau $f(x)$ abgeleitet, statt eine Stammfunktion zu finden.

**Probe:** Korrekte Stammfunktion ist $F(x) = x^{3}$ — denn $F'(x) = 3x^{2} = f(x)$. ✓

**Typischer Fehler:** Stammfunktion und Ableitung verwechseln — wer in die falsche Richtung rechnet, bekommt $f'$ statt $F$.`,
        [
          'Mache die Probe: leite ihr $F$ ab und schaue, ob $f$ herauskommt.',
          '$(6x)\' = ?$ — vergleiche mit $f(x) = 3x^{2}$.',
          'Schau in die andere Richtung: $(3x^{2})\' = ?$ — vielleicht hat sie genau das berechnet.',
        ],
        {
          1: 'Probe widerlegt das sofort: $(6x)\' = 6 \\neq 3x^{2}$. Wer hier "korrekt" sagt, hat die Probe nicht durchgeführt.',
          2: '$F(x) = x^{2}$ wäre auch falsch: $(x^{2})\' = 2x \\neq 3x^{2}$. Korrekt: Exponent von $3x^{2}$ um $1$ erhöhen ($x^{3}$) und den Faktor $3$ durch den neuen Exponenten $3$ teilen — $\\frac{3x^{3}}{3} = x^{3}$.',
          3: '$F(x) = 3x^{3}$ wäre auch falsch: $(3x^{3})\' = 9x^{2} \\neq 3x^{2}$. Hier wurde nicht "zu weit integriert", sondern schlicht abgeleitet — die Studentin lief in die umgekehrte Richtung.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['stammfunktion'] },
      ),

      // Matrix-Zeile 5: SG 0 · transfer · matching · uses=[stammfunktion, rueckwaerts]
      matching(
        'Ordne jeder Funktion $f(x)$ eine korrekte Stammfunktion $F(x)$ zu (Probe: $F\'(x) = f(x)$).',
        [
          { left: '$f(x) = 4x$',     right: '$F(x) = 2x^{2}$' },
          { left: '$f(x) = 5x^{4}$', right: '$F(x) = x^{5}$' },
          { left: '$f(x) = 12x^{2}$', right: '$F(x) = 4x^{3}$' },
          { left: '$f(x) = 7$',      right: '$F(x) = 7x$' },
        ],
        `**Ansatz:** Leite jede rechte Seite ab und vergleiche mit der linken.

**Rechnung:**
- $(2x^{2})' = 4x$ ✓
- $(x^{5})' = 5x^{4}$ ✓
- $(4x^{3})' = 12x^{2}$ ✓
- $(7x)' = 7$ ✓

**Probe:** Alle vier Ableitungen reproduzieren die zugehörige linke Spalte eindeutig.

**Typischer Fehler:** Faktor und Exponent vertauschen — z. B. $5x^{5}$ statt $x^{5}$ als Stammfunktion von $5x^{4}$.`,
        [
          'Leite jede rechte Seite ab — das Ergebnis muss die zugeordnete linke Seite ergeben.',
          'Potenzregel: $(x^{n})\' = n \\cdot x^{n-1}$.',
          'Konstante mal $x$: $(c \\cdot x)\' = c$. Konstante allein: $(c)\' = 0$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['stammfunktion', 'rueckwaerts'] },
      ),
    ],

    // ── [1] Integrationskonstante $+C$ nicht vergessen ──────────────────────
    1: [
      // Matrix-Zeile 6: SG 1 · recognize · true-false · uses=[plus-c]
      tf(
        'Wenn $F(x) = x^{2}$ Stammfunktion von $f(x) = 2x$ ist, dann ist auch $G(x) = x^{2} + 17$ Stammfunktion von $f(x) = 2x$.',
        true,
        `**Ansatz:** Probe — beide Funktionen ableiten und mit $f$ vergleichen.

**Rechnung:** $F'(x) = 2x$ ✓. $G'(x) = (x^{2} + 17)' = 2x + 0 = 2x$ ✓. Beide sind Stammfunktionen.

**Probe:** Konstanten verschwinden beim Ableiten — egal welcher Wert addiert wird, die Ableitung bleibt gleich.

**Typischer Fehler:** Glauben, "die" Stammfunktion sei eindeutig. Tatsächlich gibt es eine ganze Familie $F + C$ mit identischer Ableitung.`,
        [
          'Was passiert beim Ableiten mit einer additiven Konstanten?',
          '$(x^{2} + 17)\' = ?$',
          'Vergleiche das Ergebnis mit $f(x) = 2x$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['plus-c'] },
      ),

      // Matrix-Zeile 7: SG 1 · apply-guided · multiple-choice · uses=[plus-c]
      mc(
        '$F(x) = x^{3}$ ist eine Stammfunktion von $f(x) = 3x^{2}$. Welche der folgenden Funktionen ist EBENFALLS eine Stammfunktion von $f(x) = 3x^{2}$?',
        [
          '$F(x) = x^{3} - 12$',
          '$F(x) = 3x^{3}$',
          '$F(x) = x^{3} + 3x^{2}$',
          '$F(x) = 3x^{2} + C$',
        ],
        0,
        `**Ansatz:** Stammfunktionen unterscheiden sich nur um eine additive Konstante: $F + C$ ist auch Stammfunktion.

**Rechnung:** Mit $C = -12$ ergibt $F(x) = x^{3} - 12$. Probe: $(x^{3} - 12)' = 3x^{2} - 0 = 3x^{2} = f(x)$. ✓

**Probe:** Alle Familienmitglieder $x^{3} + C$ haben dieselbe Ableitung $3x^{2}$.

**Typischer Fehler:** Den Funktionsterm $f$ selbst zur Stammfunktion addieren — $f$ und $F$ stehen im Ableitungs-Verhältnis, nicht im Additionsverhältnis.`,
        [
          'Welche zusätzliche Operation darf man auf $F$ anwenden, ohne die Ableitung zu verändern?',
          'Konstante addieren — Wert beliebig.',
          'Suche die Option, die genau "$x^{3}$ + Konstante" ist.',
        ],
        {
          1: 'Du hast den Faktor $3$ multipliziert statt eine Konstante addiert. Probe: $(3x^{3})\' = 9x^{2} \\neq 3x^{2}$. Stammfunktionen unterscheiden sich nur additiv um eine Konstante, nicht multiplikativ.',
          2: 'Du hast $f(x)$ zu $F(x)$ addiert — das ist keine Konstante, sondern ein Funktionsterm. Probe: $(x^{3} + 3x^{2})\' = 3x^{2} + 6x \\neq 3x^{2}$. Erlaubt ist nur das Addieren einer reinen Zahl.',
          3: 'Du hast $f$ und $F$ verwechselt: $f(x) = 3x^{2}$ ist die zu integrierende Funktion, $F(x) = x^{3}$ ist die Stammfunktion. Probe: $(3x^{2} + C)\' = 6x \\neq 3x^{2}$ — also keine Stammfunktion.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['plus-c'] },
      ),

      // Matrix-Zeile 8: SG 1 · apply-independent · multiple-choice · uses=[plus-c]
      mc(
        'Schreibe das unbestimmte Integral $\\int 8x^{3}\\,dx$ vollständig — inklusive Integrationskonstante.',
        [
          '$2x^{4} + C$',
          '$2x^{4}$',
          '$8x^{4} + C$',
          '$24x^{2} + C$',
        ],
        0,
        `**Ansatz:** Potenzregel rückwärts plus Integrationskonstante.

**Rechnung:** $\\int 8x^{3}\\,dx = 8 \\cdot \\frac{x^{4}}{4} + C = 2x^{4} + C$.

**Probe:** $(2x^{4} + C)' = 8x^{3} + 0 = 8x^{3} = f(x)$. ✓

**Typischer Fehler:** $+C$ weglassen — bei unbestimmten Integralen ist das ein Standardpunktabzug in Prüfungen.`,
        [
          'Potenzregel: $\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C$ für $n \\neq -1$.',
          'Faktor $8$ darf vor das Integral gezogen werden — und dann durch den neuen Exponenten geteilt.',
          'Vergiss das $+C$ nicht!',
        ],
        {
          1: 'Der Funktionsterm $2x^{4}$ ist richtig, aber die Integrationskonstante $+C$ fehlt. Beim unbestimmten Integral ist die Stammfunktion nur bis auf eine Konstante bestimmt — $C$ MUSS mitgeschrieben werden.',
          2: 'Der Faktor $8$ wurde nicht durch den neuen Exponenten $4$ geteilt: $\\int 8x^{3}\\,dx = 8 \\cdot \\frac{x^{4}}{4} = 2x^{4}$, nicht $8x^{4}$. Probe: $(8x^{4})\' = 32x^{3} \\neq 8x^{3}$.',
          3: 'Du hast $8x^{3}$ abgeleitet ($24x^{2}$) statt zu integrieren — falsche Richtung. Probe: $(24x^{2} + C)\' = 48x \\neq 8x^{3}$. Korrekt: Exponent erhöhen, nicht absenken.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['plus-c'] },
      ),

      // Matrix-Zeile 9: SG 1 · error-analysis · multiple-choice · uses=[plus-c]
      mc(
        'Tom rechnet $\\int (4x + 6)\\,dx = 2x^{2} + 6x$ und gibt das als Endergebnis ab. Was ist der Fehler?',
        [
          'Die Integrationskonstante $+C$ fehlt — bei unbestimmten Integralen ist die Stammfunktion nur bis auf eine additive Konstante bestimmt. Korrekt: $2x^{2} + 6x + C$.',
          'Der Funktionsterm ist falsch — korrekt wäre $4x^{2} + 6$.',
          '$\\int 6\\,dx = 0$, weil $6$ konstant ist — die $6x$ darf nicht auftauchen.',
          'Tom hätte den Faktor $4$ nicht durch den neuen Exponenten teilen dürfen — korrekt wäre $4x^{2} + 6x$.',
        ],
        0,
        `**Ansatz:** Regel des unbestimmten Integrals — Stammfunktion plus Integrationskonstante.

**Rechnung:** $\\int 4x\\,dx = 2x^{2}$, $\\int 6\\,dx = 6x$, also $\\int (4x + 6)\\,dx = 2x^{2} + 6x + C$. Toms Funktionsterm ist korrekt — ihm fehlt nur das $+C$.

**Probe:** $(2x^{2} + 6x + C)' = 4x + 6 + 0 = 4x + 6 = f(x)$. ✓

**Typischer Fehler:** Beim unbestimmten Integral wird $+C$ erfahrungsgemäß bei jedem zweiten Studenten-Ergebnis vergessen — Standardpunktabzug.`,
        [
          'Was verlangt das *unbestimmte* Integral, was das bestimmte nicht braucht?',
          'Familie aller Stammfunktionen — wie kennzeichnet man sie?',
          'Schau auf das Endergebnis: fehlt etwas Wichtiges am Schluss?',
        ],
        {
          1: 'Toms Funktionsterm ist korrekt: $\\int 4x\\,dx = 4 \\cdot \\frac{x^{2}}{2} = 2x^{2}$ (Faktor $4$ durch neuen Exponenten $2$ geteilt). $4x^{2} + 6$ wäre die Ableitung von $\\frac{4}{3}x^{3} + 6x$ — das passt nicht zur Aufgabe.',
          2: 'Falsch — eine Konstante hat NICHT das Integral $0$. $\\int 6\\,dx = 6x + C$, denn $(6x)\' = 6$. Toms $6x$ ist genau richtig.',
          3: 'Falsch — Toms $2x^{2}$ ist genau richtig: $\\int 4x\\,dx = 4 \\cdot \\frac{x^{2}}{2} = 2x^{2}$. Den Faktor durch den neuen Exponenten zu teilen ist die korrekte Anwendung der Potenzregel.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['plus-c'] },
      ),

      // Matrix-Zeile 10 (Zusatz, da ex-int-1-1-d schon Zeile 10 deckt): SG 1 · transfer · multiple-choice · uses=[plus-c]
      mc(
        'Welche Aussage über die Funktion $h(x) = x^{4} + 5x + 9$ ist korrekt?',
        [
          '$h$ ist eine von unendlich vielen Stammfunktionen von $f(x) = 4x^{3} + 5$ — sie unterscheiden sich nur um eine additive Konstante.',
          '$h$ ist die einzige Stammfunktion von $f(x) = 4x^{3} + 5$, weil die $9$ den Anfangswert eindeutig festlegt.',
          '$h$ ist gar keine Stammfunktion, weil eine Konstante wie $9$ in einer Stammfunktion nicht vorkommen darf.',
          '$h$ ist Stammfunktion von $f(x) = h\'(x) + C$ — die Konstante $C$ ist wesentlicher Teil von $f$.',
        ],
        0,
        `**Ansatz:** Probe — $h$ ableiten, $f$ identifizieren; dann reflektieren, ob $h$ eindeutig ist.

**Rechnung:** $h'(x) = 4x^{3} + 5 + 0 = 4x^{3} + 5$. Also ist $h$ Stammfunktion von $f(x) = 4x^{3} + 5$. Auch $h(x) - 9 = x^{4} + 5x$ oder $h(x) + 100 = x^{4} + 5x + 109$ wären Stammfunktionen — Familie $\\{x^{4} + 5x + C : C \\in \\mathbb{R}\\}$.

**Probe:** $(x^{4} + 5x + C)' = 4x^{3} + 5$ unabhängig vom Wert von $C$. Die $9$ verschwindet beim Ableiten.

**Typischer Fehler:** Glauben, eine konkrete Konstante in der Stammfunktion legt sie fest. Tatsächlich verschwindet die Konstante beim Ableiten — die Familie bleibt unendlich, solange keine Anfangsbedingung dazukommt.`,
        [
          'Leite $h$ ab und finde so $f$.',
          'Wie viele Funktionen haben dieselbe Ableitung wie $h$?',
          'Was passiert, wenn du in $h$ die $9$ durch $4$ oder $-100$ ersetzt? Bleibt die Ableitung gleich?',
        ],
        {
          1: 'Falsch — die $9$ ist nur ein bestimmter Wert von $C$. $x^{4} + 5x + 100$ ist genauso eine Stammfunktion. Eindeutigkeit bekommt man erst durch eine Anfangsbedingung wie $h(0) = 9$.',
          2: 'Probe widerlegt: $h\'(x) = 4x^{3} + 5$, also IST $h$ Stammfunktion. Konstanten gehören selbstverständlich in Stammfunktionen — sie sind das $+C$ der Familie.',
          3: 'Falsch — die Integrationskonstante steht in $F$, nicht in $f$. $f$ ist die zu integrierende Funktion und hat per Definition keinen $+C$-Anhang.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['plus-c'] },
      ),

      // Bonus (Mengen-Regel): SG 1 · ni · uses=[plus-c]
      ni(
        'Eine Funktion $F$ erfüllt $F\'(x) = 6x^{2}$ und die Anfangsbedingung $F(1) = 4$. Allgemeine Stammfunktion: $F(x) = 2x^{3} + C$. Bestimme den Wert von $C$.',
        2,
        0,
        '',
        `**Ansatz:** Allgemeine Stammfunktion ansetzen, dann Anfangsbedingung einsetzen, um $C$ festzulegen.

**Rechnung:** $F(x) = 2x^{3} + C$. Einsetzen: $F(1) = 2 \\cdot 1^{3} + C = 2 + C$. Bedingung: $2 + C = 4 \\Rightarrow C = 2$.

**Probe:** Mit $C = 2$ gilt $F(x) = 2x^{3} + 2$, $F(1) = 2 + 2 = 4$ ✓ und $F'(x) = 6x^{2}$ ✓.

**Typischer Fehler:** $C = 4$ einsetzen, weil rechts der Wert $4$ steht — vergisst, dass $2x^{3}$ bei $x = 1$ schon einen Beitrag von $2$ liefert.`,
        [
          'Forme die Anfangsbedingung in eine Gleichung für $C$ um.',
          'Berechne $F(1) = 2 \\cdot 1^{3} + C$ und setze gleich $4$.',
          'Löse die entstandene Gleichung $2 + C = 4$ nach $C$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['plus-c'] },
      ),
    ],

    // ── [2] Probe durch Ableiten der gefundenen Stammfunktion ───────────────
    2: [
      // Matrix-Zeile 11: SG 2 · recognize · true-false · uses=[probe-ableiten]
      tf(
        'Um zu prüfen, ob $F(x) = x^{4} + 2$ eine Stammfunktion von $f(x) = 4x^{3}$ ist, leitet man $F$ ab und vergleicht das Ergebnis mit $f$.',
        true,
        `**Ansatz:** Definition der Probe — Ableitung von $F$ muss $f$ ergeben.

**Rechnung:** $F'(x) = (x^{4} + 2)' = 4x^{3} + 0 = 4x^{3} = f(x)$. ✓ Probe erfolgreich.

**Probe:** Genau dies IST die Probe — Ableiten und mit $f$ vergleichen.

**Typischer Fehler:** Statt $F$ ableiten, $f$ erneut integrieren wollen — das ist nur eine "Lösung", nicht die Probe.`,
        [
          'Was ist die Definition einer Stammfunktion? $F\'(x) = ?$',
          'Probe = Anwendung der Definition auf das konkrete Paar $(F, f)$.',
          'Hier: $F$ ableiten und mit $f$ vergleichen — passt die Aussage zu dieser Methode?',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['probe-ableiten'] },
      ),

      // Matrix-Zeile 12: SG 2 · apply-guided · multiple-choice · uses=[probe-ableiten]
      mc(
        'Behauptung: $F(x) = \\tfrac{1}{2}x^{4} + x$ ist Stammfunktion von $f(x) = 2x^{3} + 1$. Welche Rechnung ist die korrekte Probe?',
        [
          '$F\'(x) = 2x^{3} + 1$ — stimmt mit $f$ überein, also ist $F$ Stammfunktion.',
          '$\\int F(x)\\,dx = \\tfrac{1}{10}x^{5} + \\tfrac{1}{2}x^{2}$ — und dann mit $f$ vergleichen.',
          '$f\'(x) = 6x^{2}$ — und dann mit $F$ vergleichen.',
          'Setze $x = 1$: $F(1) = 1{,}5$ und $f(1) = 3$ — die Werte unterscheiden sich, also keine Probe nötig.',
        ],
        0,
        `**Ansatz:** Probe einer behaupteten Stammfunktion = $F$ ableiten und mit $f$ vergleichen.

**Rechnung:** $F'(x) = (\\tfrac{1}{2}x^{4})' + (x)' = \\tfrac{1}{2} \\cdot 4x^{3} + 1 = 2x^{3} + 1 = f(x)$. ✓

**Probe:** Identität gilt für alle $x$ — die Probe bestätigt: $F$ ist Stammfunktion.

**Typischer Fehler:** $F$ erneut integrieren oder $f$ ableiten — beides ist die falsche Operation für die Probe.`,
        [
          'Definition Stammfunktion: $F\'(x) = f(x)$. Womit fängt die Probe an?',
          '$F$ ableiten — gliedweise.',
          'Vergleiche das Ergebnis mit $f(x) = 2x^{3} + 1$.',
        ],
        {
          1: 'Du integrierst die Stammfunktion — dabei kommst du zu noch höheren Stammfunktionen, nicht zu $f$. Die Probe verlangt den umgekehrten Weg: $F$ ableiten, nicht erneut integrieren.',
          2: 'Du leitest $f$ ab statt $F$. Die Probe verlangt die Ableitung der *behaupteten Stammfunktion* — also $F\'$, nicht $f\'$. Hier wäre $f\'(x) = 6x^{2}$, das hilft beim Beweisen nicht.',
          3: 'Punktweises Vergleichen reicht nicht — $F$ und $f$ stehen NICHT im Werte-Verhältnis, sondern im Ableitungs-Verhältnis. Probe heißt $F\'(x) = f(x)$ für ALLE $x$, nicht nur an einem Einzelpunkt.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['probe-ableiten'] },
      ),

      // Matrix-Zeile 13 (Zusatz, da ex-int-1-1-mastery schon Zeile 13 deckt): SG 2 · apply-independent · multiple-choice · uses=[probe-ableiten, rueckwaerts]
      mc(
        'Du sollst eine Stammfunktion von $f(x) = 5x^{4} + 6x$ finden und durch Probe verifizieren. Welche Funktion besteht die Probe?',
        [
          '$F(x) = x^{5} + 3x^{2}$',
          '$F(x) = 5x^{5} + 6x^{2}$',
          '$F(x) = x^{5} + 6x$',
          '$F(x) = 20x^{3} + 6$',
        ],
        0,
        `**Ansatz:** Stammfunktion gliedweise ansetzen, dann Probe durch Ableiten.

**Rechnung:** $\\int 5x^{4}\\,dx = 5 \\cdot \\frac{x^{5}}{5} = x^{5}$. $\\int 6x\\,dx = 6 \\cdot \\frac{x^{2}}{2} = 3x^{2}$. Also $F(x) = x^{5} + 3x^{2}$.

**Probe:** $F'(x) = 5x^{4} + 6x = f(x)$. ✓ Identität für alle $x$.

**Typischer Fehler:** Faktor und Exponent vertauschen — $5x^{5}$ statt $x^{5}$ entsteht, wenn man den Faktor $5$ stehen lässt, statt durch den neuen Exponenten zu teilen.`,
        [
          'Zwei Glieder einzeln integrieren.',
          'Potenzregel: Exponent erhöhen, dann Faktor durch neuen Exponenten teilen.',
          'Probe: ableiten und mit $f(x) = 5x^{4} + 6x$ vergleichen.',
        ],
        {
          1: 'Der Faktor $5$ wurde nicht durch den neuen Exponenten $5$ geteilt: $\\int 5x^{4}\\,dx = 5 \\cdot \\frac{x^{5}}{5} = x^{5}$, nicht $5x^{5}$. Probe: $(5x^{5})\' = 25x^{4} \\neq 5x^{4}$.',
          2: 'Du hast $\\int 6x\\,dx = 6x$ angenommen — aber $\\int 6x\\,dx = 6 \\cdot \\frac{x^{2}}{2} = 3x^{2}$. Probe: $(x^{5} + 6x)\' = 5x^{4} + 6 \\neq 5x^{4} + 6x$.',
          3: 'Du hast $f(x)$ abgeleitet statt eine Stammfunktion gesucht: $f\'(x) = 20x^{3} + 6$. Falsche Richtung. Probe: $(20x^{3} + 6)\' = 60x^{2} \\neq 5x^{4} + 6x$.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['probe-ableiten', 'rueckwaerts'] },
      ),

      // Matrix-Zeile 14: SG 2 · error-analysis · multiple-choice · uses=[probe-ableiten]
      mc(
        'Lina behauptet: $F(x) = x^{3} + 5$ ist Stammfunktion von $f(x) = 3x^{2} + 5$. Sie schreibt als Probe: „$F$ und $f$ enthalten beide den Term $+5$, also stimmt es." Was ist der Fehler ihrer Probe?',
        [
          'Probe heißt Ableiten — Linas $F$ liefert $F\'(x) = 3x^{2}$, nicht $3x^{2} + 5$. Die $5$ in $F$ verschwindet beim Ableiten und kann den $+5$-Term in $f$ nicht erzeugen. Korrekt: $F(x) = x^{3} + 5x + C$.',
          'Lina hat richtig — der gemeinsame Term $+5$ beweist, dass $F$ Stammfunktion von $f$ ist.',
          'Lina hätte die Konstante $5$ in $F$ als $C$ schreiben müssen — sonst ist es nur eine spezielle Stammfunktion und keine vollständige.',
          'Linas $F$ ist falsch, weil die korrekte Stammfunktion $F(x) = \\tfrac{1}{3}x^{3} + \\tfrac{5}{2}x^{2}$ wäre.',
        ],
        0,
        `**Ansatz:** Probe = Ableitung von $F$ mit $f$ vergleichen, nicht oberflächlich Terme abgleichen.

**Rechnung:** $F'(x) = (x^{3})' + (5)' = 3x^{2} + 0 = 3x^{2}$. Aber $f(x) = 3x^{2} + 5$. Differenz: $5 \\neq 0$ — Linas $F$ ist KEINE Stammfunktion. Korrekte Stammfunktion: $\\int (3x^{2} + 5)\\,dx = x^{3} + 5x + C$.

**Probe:** Mit der Korrektur $F(x) = x^{3} + 5x$ gilt $F'(x) = 3x^{2} + 5 = f(x)$. ✓

**Typischer Fehler:** Konstanten in $F$ und $f$ "kompensieren" sich nicht — die Konstante in $F$ verschwindet beim Ableiten, der Term $+5$ in $f$ muss durch $+5x$ in $F$ erzeugt werden.`,
        [
          'Mache die Probe sorgfältig: leite Linas $F$ Glied für Glied ab.',
          'Was passiert mit der $5$ in $x^{3} + 5$ beim Ableiten?',
          'Vergleiche dein Ergebnis mit $f(x) = 3x^{2} + 5$ — fehlt etwas?',
        ],
        {
          1: 'Probe widerlegt das sofort: $F\'(x) = 3x^{2} \\neq 3x^{2} + 5$. Gemeinsame Terme zwischen $F$ und $f$ sind kein Beweis — Probe ist Ableitungs-Vergleich, nicht Term-Abgleich.',
          2: 'Auch wenn man die $5$ als spezielles $C$ liest, bleibt $F\'(x) = 3x^{2} \\neq 3x^{2} + 5$. Das eigentliche Problem: der Term $+5$ in $f$ muss zu $+5x$ in $F$ integriert werden, er kann nicht in der Konstanten von $F$ versteckt sein.',
          3: 'Das ist die Stammfunktion von $x^{2} + 5x$, nicht von $3x^{2} + 5$. Probe widerlegt: $(\\tfrac{1}{3}x^{3} + \\tfrac{5}{2}x^{2})\' = x^{2} + 5x \\neq 3x^{2} + 5$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['probe-ableiten'] },
      ),

      // Matrix-Zeile 15: SG 2 · transfer · sorting · uses=[probe-ableiten, rueckwaerts]
      sorting(
        'Bringe die Schritte zur Verifikation, dass $F(x) = \\tfrac{1}{4}x^{4} - x^{2}$ Stammfunktion von $f(x) = x^{3} - 2x$ ist, in die richtige Reihenfolge.',
        [
          'Behauptung notieren: $F(x) = \\tfrac{1}{4}x^{4} - x^{2}$ soll Stammfunktion von $f(x) = x^{3} - 2x$ sein.',
          '$F$ gliedweise ableiten: $F\'(x) = \\tfrac{1}{4} \\cdot 4x^{3} - 2x = x^{3} - 2x$.',
          'Mit $f$ vergleichen: $x^{3} - 2x = f(x)$ — Identität für alle $x$.',
          'Schluss: $F\'(x) = f(x)$ ist erfüllt — $F$ ist Stammfunktion von $f$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Probe = kanonische Vier-Schritt-Sequenz: Behauptung formulieren, Ableitung berechnen, Vergleich, Schlussfolgerung.

**Rechnung:** $F'(x) = \\tfrac{1}{4} \\cdot 4 \\cdot x^{4-1} - 2 \\cdot x^{2-1} = x^{3} - 2x$. Stimmt exakt mit $f$ überein.

**Probe:** Schritt 3 zeigt: Identität gilt für alle $x$. Schritt 4 ist die formale Schlussfolgerung — daher gehört er ans Ende.

**Typischer Fehler:** Vergleich vor Ableitung — man kann $F$ und $f$ erst gegenüberstellen, NACHDEM die Ableitung berechnet ist. Ohne Ableitung wäre der Vergleich sinnlos.`,
        [
          'Was steht am Anfang einer Probe — Behauptung oder Schluss?',
          'Kannst du $F$ und $f$ vergleichen, BEVOR du $F$ abgeleitet hast?',
          'Den Schluss zieht man am Ende — nicht zwischen den Rechenschritten.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['probe-ableiten', 'rueckwaerts'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // int-1-2 — Grundintegrale  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'int-1-2': {

    // ── [0] Potenzregel $\int x^n\,dx = x^{n+1}/(n+1) + C$ für $n\neq -1$ ──
    0: [
      // Matrix-Zeile 1: SG 0 · recognize · true-false · uses=[int-pot-regel]
      tf(
        'Die Potenzregel $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ gilt für jedes ganze $n \\in \\mathbb{Z}$.',
        false,
        `**Ansatz:** Die Formel an der Stelle prüfen, an der sie problematisch werden könnte — beim Wert $n = -1$.

**Rechnung:** Für $n = -1$ wird der Nenner $n + 1 = 0$. Die Formel liefert $\\dfrac{x^{0}}{0}$ — Division durch Null, undefiniert. Daher gilt die Potenzregel nur für $n \\neq -1$.

**Probe:** Sonderfall: $\\int x^{-1}\\,dx = \\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ (separate Regel, nicht aus der Potenzregel ableitbar).

**Typischer Fehler:** Die Bedingung "$n \\neq -1$" überlesen und für alle $n$ einsetzen — gibt bei $n = -1$ einen Nullnenner.`,
        [
          'Probiere $n = -1$ — was wird im Nenner $n + 1$?',
          'Welcher Wert macht die Formel $\\dfrac{x^{n+1}}{n+1}$ undefiniert?',
          'Für $n = -1$: $\\dfrac{x^{0}}{0}$ — geht das?',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['int-pot-regel'] },
      ),

      // Matrix-Zeile 3: SG 0 · apply-independent · number-input · uses=[int-pot-regel]
      ni(
        'Berechne $\\int x^{4}\\,dx = \\dfrac{x^{5}}{a} + C$. Bestimme den Wert von $a$.',
        5,
        0,
        '',
        `**Ansatz:** Potenzregel — Exponent um $1$ erhöhen, dann durch den neuen Exponenten teilen.

**Rechnung:** $\\int x^{4}\\,dx = \\dfrac{x^{4+1}}{4+1} + C = \\dfrac{x^{5}}{5} + C$. Also $a = 5$.

**Probe:** $\\left(\\dfrac{x^{5}}{5}\\right)' = \\dfrac{5x^{4}}{5} = x^{4}$. ✓

**Typischer Fehler:** Durch den ALTEN Exponenten $4$ teilen statt durch den neuen $5$ — gibt fälschlich $\\dfrac{x^{5}}{4}$.`,
        [
          'Potenzregel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$.',
          'Für $n = 4$ wird der neue Exponent $n + 1 = 5$.',
          'Im Nenner steht der NEUE Exponent (also $5$), nicht der alte.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['int-pot-regel'] },
      ),

      // Matrix-Zeile 4: SG 0 · error-analysis · multiple-choice · uses=[int-pot-regel] ($n=-1$ falsch behandelt)
      mc(
        'Anna soll $\\int x^{-1}\\,dx$ berechnen und schreibt mit der Potenzregel: $\\int x^{-1}\\,dx = \\dfrac{x^{-1+1}}{-1+1} + C = \\dfrac{x^{0}}{0} + C$. Wo liegt der Fehler?',
        [
          'Die Potenzregel $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ gilt nur für $n \\neq -1$ — bei $n = -1$ entsteht eine Division durch Null. Der Sonderfall lautet $\\int x^{-1}\\,dx = \\ln|x| + C$.',
          'Anna hat den Exponenten falsch erhöht — $-1 + 1 = 1$ (nicht $0$), also $\\int x^{-1}\\,dx = x + C$.',
          'Der Term $x^{0} = 0$ — daher kann man die Potenzregel nicht anwenden.',
          'Sie hätte den Faktor $-1$ vor das Integral ziehen müssen: $\\int x^{-1}\\,dx = -\\int x\\,dx = -\\dfrac{x^{2}}{2} + C$.',
        ],
        0,
        `**Ansatz:** Untersuchen, wo die Potenzregel an Grenzen stößt.

**Rechnung:** $-1 + 1 = 0$ — der Nenner wird Null, die Formel ist hier nicht definiert. Daher die Bedingung "$n \\neq -1$" in der Potenzregel. Für genau $n = -1$ gibt es eine eigene Regel: $\\int x^{-1}\\,dx = \\ln|x| + C$.

**Probe:** $(\\ln|x|)' = \\dfrac{1}{x} = x^{-1}$. ✓

**Typischer Fehler:** Die Ausnahme "$n \\neq -1$" überlesen und stur die Formel anwenden — landet bei einem Nullnenner.`,
        [
          'Welche Voraussetzung hat die Potenzregel?',
          'Was passiert mit dem Nenner $n + 1$, wenn $n = -1$ ist?',
          'Für $n = -1$ existiert ein anderer Stammfunktions-Typ — welcher?',
        ],
        {
          1: 'Anna hat $-1 + 1 = 0$ tatsächlich richtig gerechnet ($x^{-1+1} = x^{0} = 1$) — der Nenner $0$ ist das echte Problem. $\\int x^{-1}\\,dx = x + C$ wäre falsch: Probe $(x)\' = 1 \\neq x^{-1}$.',
          2: '$x^{0} = 1$, nicht $0$. Das eigentliche Problem ist der Nenner: $-1 + 1 = 0$ — Division durch Null, deshalb ist die Potenzregel hier ungültig.',
          3: 'Die Faktorregel $\\int c \\cdot f\\,dx = c \\int f\\,dx$ greift nur bei einem konstanten Vorfaktor — $x^{-1} = \\dfrac{1}{x}$ ist KEIN Faktor, sondern eine ganze Funktion. Probe der vorgeschlagenen Lösung: $\\left(-\\dfrac{x^{2}}{2}\\right)\' = -x \\neq x^{-1}$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['int-pot-regel'] },
      ),

      // Matrix-Zeile 5: SG 0 · transfer · number-input · uses=[int-pot-regel]
      ni(
        'Berechne $\\int 12\\,x^{2}\\,dx$ und gib den Wert der Stammfunktion $F$ bei $x = 2$ an (für die spezielle Wahl $C = 0$).',
        32,
        0,
        '',
        `**Ansatz:** Faktor vor das Integral ziehen, dann Potenzregel auf $x^{2}$ anwenden, am Ende einsetzen.

**Rechnung:** $\\int 12 x^{2}\\,dx = 12 \\cdot \\dfrac{x^{3}}{3} + C = 4x^{3} + C$. Mit $C = 0$: $F(x) = 4x^{3}$. Bei $x = 2$: $F(2) = 4 \\cdot 8 = 32$.

**Probe:** $F'(x) = 12 x^{2} = f(x)$ ✓. Einsetzen: $F(2) = 4 \\cdot 2^{3} = 32$.

**Typischer Fehler:** Den Faktor $12$ NICHT durch den neuen Exponenten $3$ teilen — würde zu $12 x^{3}$ führen, $F(2) = 96$.`,
        [
          'Konstante darf vor das Integral: $\\int 12 x^{2}\\,dx = 12 \\int x^{2}\\,dx$.',
          '$\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}$ — also $12 \\cdot \\dfrac{x^{3}}{3} = 4 x^{3}$.',
          'Einsetzen: $F(2) = 4 \\cdot 2^{3} = 4 \\cdot 8$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['int-pot-regel'] },
      ),

      // Bonus (Mengen-Regel + Typen-Variation): SG 0 · matching · uses=[int-pot-regel]
      matching(
        'Ordne jedem Integral seine korrekte Stammfunktion zu (jeweils ohne Integrationskonstante).',
        [
          { left: '$\\int x^{4}\\,dx$',     right: '$\\dfrac{x^{5}}{5}$' },
          { left: '$\\int x^{1/2}\\,dx$',   right: '$\\dfrac{2}{3} x^{3/2}$' },
          { left: '$\\int x^{-2}\\,dx$',    right: '$-\\dfrac{1}{x}$' },
          { left: '$\\int 1\\,dx$',         right: '$x$' },
        ],
        `**Ansatz:** Potenzregel $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (für $n \\neq -1$) auf jeden Fall einzeln anwenden.

**Rechnung:**
- $\\int x^{4}\\,dx = \\dfrac{x^{5}}{5} + C$.
- $\\int x^{1/2}\\,dx = \\dfrac{x^{3/2}}{3/2} + C = \\dfrac{2}{3} x^{3/2} + C$.
- $\\int x^{-2}\\,dx = \\dfrac{x^{-1}}{-1} + C = -\\dfrac{1}{x} + C$.
- $\\int 1\\,dx = \\int x^{0}\\,dx = \\dfrac{x^{1}}{1} + C = x + C$.

**Probe:** Jede rechte Seite ableiten und mit dem Integranden vergleichen — alle vier Identitäten gelten.

**Typischer Fehler:** Bei Bruch-Exponenten ($n = 1/2$) den Bruch $1/(n+1) = 1/(3/2) = 2/3$ falsch berechnen oder bei $n = -2$ das Vorzeichen vergessen.`,
        [
          'Wende auf jeden Integranden die Potenzregel an: Exponent +1, dann teilen.',
          'Bruchexponent $n = 1/2$: neuer Exponent $3/2$, Faktor $1/(3/2) = 2/3$.',
          'Negativer Exponent $n = -2$: neuer Exponent $-1$, Faktor $1/(-1) = -1$ → $-x^{-1} = -1/x$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['int-pot-regel'] },
      ),
    ],

    // ── [1] Sonderfall $\int 1/x\,dx = \ln|x| + C$ ──────────────────────────
    1: [
      // Matrix-Zeile 6: SG 1 · recognize · true-false · uses=[int-1-x]
      tf(
        'Die Stammfunktion $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ gilt für alle $x \\neq 0$ — der Betrag ist nötig, weil $\\ln$ nur für positive Argumente definiert ist, $\\dfrac{1}{x}$ aber auch für $x < 0$ existiert.',
        true,
        `**Ansatz:** Definitionsbereiche von $\\ln$ und $\\dfrac{1}{x}$ vergleichen.

**Rechnung:** $\\dfrac{1}{x}$ ist definiert für alle $x \\neq 0$ (also auch negative $x$). $\\ln(x)$ aber nur für $x > 0$. Damit die Stammfunktion auf dem ganzen Definitionsbereich von $\\dfrac{1}{x}$ gilt, schreibt man $\\ln|x|$.

**Probe:** $(\\ln|x|)' = \\dfrac{1}{x}$ — sowohl für $x > 0$ als auch für $x < 0$. ✓

**Typischer Fehler:** Den Betrag weglassen und $\\ln(x)$ schreiben — geht nur für $x > 0$ und ist auf $x < 0$ schlicht nicht definiert.`,
        [
          'Für welche $x$ ist $\\ln(x)$ definiert? Für welche $\\dfrac{1}{x}$?',
          'Was passiert mit $\\ln(x)$, wenn $x = -2$?',
          'Der Betrag macht das Argument positiv — und damit erlaubt für $\\ln$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['int-1-x'] },
      ),

      // Matrix-Zeile 8: SG 1 · apply-independent · multiple-choice · uses=[int-1-x]
      mc(
        'Welche Stammfunktion hat $f(x) = \\dfrac{4}{x}$?',
        [
          '$F(x) = 4 \\ln|x| + C$',
          '$F(x) = \\tfrac{1}{4} \\ln|x| + C$',
          '$F(x) = 4 \\ln(x) + C$',
          '$F(x) = \\dfrac{4}{\\ln|x|} + C$',
        ],
        0,
        `**Ansatz:** Faktorregel — den konstanten Faktor $4$ vor das Integral ziehen, dann Sonderfall $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ anwenden.

**Rechnung:** $\\int \\dfrac{4}{x}\\,dx = 4 \\int \\dfrac{1}{x}\\,dx = 4 \\ln|x| + C$.

**Probe:** $(4 \\ln|x|)' = 4 \\cdot \\dfrac{1}{x} = \\dfrac{4}{x} = f(x)$. ✓

**Typischer Fehler:** Den Betrag weglassen oder den Faktor $4$ in den Nenner schreiben — beides verändert den Definitionsbereich oder die Funktion.`,
        [
          'Wie behandelt man den konstanten Faktor $4$ vor $\\dfrac{1}{x}$?',
          'Faktorregel: $\\int c \\cdot f\\,dx = c \\int f\\,dx$.',
          'Die innere Stammfunktion ist der Sonderfall $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$.',
        ],
        {
          1: 'Du hast den Faktor $4$ in den Kehrwert geschoben statt ihn als Multiplikator vor $\\ln|x|$ zu behalten. Faktorregel: $\\int 4 \\cdot \\dfrac{1}{x}\\,dx = 4 \\int \\dfrac{1}{x}\\,dx = 4 \\ln|x| + C$. Probe der falschen Antwort: $\\left(\\tfrac{1}{4} \\ln|x|\\right)\' = \\tfrac{1}{4x} \\neq \\dfrac{4}{x}$.',
          2: 'Der Funktionsterm ist fast richtig, aber der Betrag fehlt — $\\ln(x)$ ist nur für $x > 0$ definiert, $\\dfrac{4}{x}$ aber auch für $x < 0$. Korrekt mit Betrag: $4 \\ln|x| + C$.',
          3: 'Du hast $\\ln$ in den Nenner gesetzt — das ist eine ganz andere Funktion. Faktorregel verlangt einfache Multiplikation: $4 \\cdot \\ln|x|$. Probe der falschen Antwort: $\\left(\\dfrac{4}{\\ln|x|}\\right)\' = -\\dfrac{4}{x \\ln^{2}|x|} \\neq \\dfrac{4}{x}$.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['int-1-x'] },
      ),

      // Matrix-Zeile 9: SG 1 · error-analysis · multiple-choice · uses=[int-1-x, int-pot-regel]
      mc(
        'Lukas berechnet $\\int \\dfrac{1}{x}\\,dx$ mit der Potenzregel: $\\int x^{-1}\\,dx = \\dfrac{x^{-1+1}}{-1+1} + C = \\dfrac{x^{0}}{0} + C$. Was ist hier der Fehler?',
        [
          'Die Potenzregel $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ ist für $n = -1$ nicht definiert (Division durch Null im Nenner). Der Sonderfall lautet $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$.',
          'Lukas hat $-1 + 1 = 0$ falsch gerechnet — korrekt wäre $-1 + 1 = 1$, also $\\int x^{-1}\\,dx = x + C$.',
          '$x^{0} = 0$, also kann man die Formel nicht anwenden.',
          'Bei Brüchen muss man immer mit Substitution $u = \\ln(x)$ arbeiten — die Potenzregel funktioniert grundsätzlich nicht für $\\dfrac{1}{x}$.',
        ],
        0,
        `**Ansatz:** Erkennen, dass $n = -1$ in der Potenzregel ausdrücklich ausgeschlossen ist.

**Rechnung:** Die Bedingung "$n \\neq -1$" wurde übersehen. Für $n = -1$ wird der Nenner $n + 1 = 0$ — Division durch Null, undefiniert. Stattdessen gilt: $\\int x^{-1}\\,dx = \\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$ (separater Sonderfall).

**Probe:** $(\\ln|x|)' = \\dfrac{1}{x}$ ✓ — die Sonderfall-Stammfunktion ist korrekt.

**Typischer Fehler:** Die Bedingung "$n \\neq -1$" der Potenzregel überlesen und auch für $n = -1$ einsetzen — der Nullnenner zeigt sofort, dass die Formel hier nicht greift.`,
        [
          'Welche Voraussetzung hat die Potenzregel? Steht da etwas zu $n$?',
          '$-1 + 1 = ?$ und ist das ein gültiger Nenner?',
          'Welche eigene Regel gibt es speziell für $\\dfrac{1}{x} = x^{-1}$?',
        ],
        {
          1: '$-1 + 1 = 0$ ist arithmetisch korrekt, das hat Lukas richtig gemacht. $x^{-1+1} = x^{0} = 1$. Das echte Problem ist der Nenner: $0$. $\\int x^{-1}\\,dx = x + C$ wäre falsch — Probe: $(x)\' = 1 \\neq \\dfrac{1}{x}$.',
          2: '$x^{0} = 1$, nicht $0$. Lukas\' Schritt $x^{0} = 1$ wäre rechnerisch okay — der Fehler liegt im Nenner: $-1 + 1 = 0$, also $\\dfrac{1}{0}$, undefiniert.',
          3: 'Die Potenzregel funktioniert sehr wohl für andere Brüche wie $\\dfrac{1}{x^{2}} = x^{-2}$ ($\\int x^{-2}\\,dx = -\\dfrac{1}{x} + C$). Nur der Spezialfall $n = -1$ ist ausgeschlossen — und dafür gibt es die Regel $\\ln|x| + C$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['int-1-x', 'int-pot-regel'] },
      ),

      // Matrix-Zeile 10: SG 1 · transfer · multiple-choice · uses=[int-1-x]
      mc(
        'Eine Funktion $F$ erfüllt $F\'(x) = \\dfrac{6}{x}$ für $x > 0$ und die Anfangsbedingung $F(1) = 0$. Welche Funktion ist $F$?',
        [
          '$F(x) = 6 \\ln(x)$',
          '$F(x) = 6 \\ln(x) + 6$',
          '$F(x) = -\\dfrac{6}{x^{2}}$',
          '$F(x) = \\dfrac{6}{\\ln(x)}$',
        ],
        0,
        `**Ansatz:** Allgemeine Stammfunktion ansetzen, dann Anfangsbedingung einsetzen.

**Rechnung:** $\\int \\dfrac{6}{x}\\,dx = 6 \\ln|x| + C$. Für $x > 0$ ist $\\ln|x| = \\ln(x)$. Also $F(x) = 6 \\ln(x) + C$. Einsetzen: $F(1) = 6 \\ln(1) + C = 6 \\cdot 0 + C = C$. Bedingung $F(1) = 0$ liefert $C = 0$. Damit $F(x) = 6 \\ln(x)$.

**Probe:** $F'(x) = 6 \\cdot \\dfrac{1}{x} = \\dfrac{6}{x}$ ✓ und $F(1) = 6 \\ln 1 = 0$ ✓.

**Typischer Fehler:** $C = F(1) = 0$ verwechseln mit $C = 0 + 6 = 6$ — vergisst, dass $6 \\ln 1 = 0$ und nicht $6$ ist.`,
        [
          'Schritt 1: allgemeine Stammfunktion mit Faktorregel und $\\int \\dfrac{1}{x}\\,dx$.',
          'Schritt 2: Anfangsbedingung einsetzen — $\\ln 1 = 0$.',
          'Schritt 3: $C$ aus der Bedingung bestimmen.',
        ],
        {
          1: '$C = 6$ entsteht, wenn man $F(1) = 6 + C = 0$ rechnet — aber $6 \\ln(1) = 6 \\cdot 0 = 0$, nicht $6$. Mit $F(1) = 0 + C = 0$ folgt $C = 0$, also $F(x) = 6 \\ln(x)$.',
          2: 'Du hast $\\dfrac{6}{x}$ abgeleitet ($-\\dfrac{6}{x^{2}}$) statt zu integrieren. Probe: $\\left(-\\dfrac{6}{x^{2}}\\right)\' = \\dfrac{12}{x^{3}} \\neq \\dfrac{6}{x}$. Korrekt: integrieren liefert $6 \\ln(x) + C$.',
          3: 'Du hast den Logarithmus in den Nenner gesetzt — das ist eine andere Funktion. Probe: $\\left(\\dfrac{6}{\\ln(x)}\\right)\' = -\\dfrac{6}{x \\ln^{2}(x)} \\neq \\dfrac{6}{x}$. Korrekt: $6 \\ln(x)$ als Multiplikator.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['int-1-x'] },
      ),

      // Bonus (Mengen-Regel + Typen-Variation): SG 1 · ni · uses=[int-1-x]
      ni(
        'Berechne $\\int \\dfrac{2}{x}\\,dx$ und gib den Wert der Stammfunktion $F$ bei $x = e$ an (für $C = 0$).',
        2,
        0.001,
        '',
        `**Ansatz:** Faktorregel ($2$ vor das Integral) plus Sonderfall $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$, dann einsetzen.

**Rechnung:** $\\int \\dfrac{2}{x}\\,dx = 2 \\ln|x| + C$. Mit $C = 0$: $F(x) = 2 \\ln|x|$. Bei $x = e$ (positiv): $F(e) = 2 \\ln(e) = 2 \\cdot 1 = 2$.

**Probe:** $F'(x) = 2 \\cdot \\dfrac{1}{x} = \\dfrac{2}{x}$ ✓. Einsetzen: $F(e) = 2 \\ln e = 2$.

**Typischer Fehler:** $\\ln(e) = e$ statt $\\ln(e) = 1$ einsetzen — Definition: $\\ln$ ist Umkehrfunktion zu $e^{x}$, also $\\ln(e^{1}) = 1$.`,
        [
          'Konstanter Faktor $2$ darf vor das Integral.',
          'Sonderfall: $\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$.',
          'Wert von $\\ln(e)$? Definition: $\\ln(e^{x}) = x$, also $\\ln(e) = \\ln(e^{1}) = 1$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['int-1-x'] },
      ),
    ],

    // ── [2] Stammfunktionen von $e^x$, $\sin x$, $\cos x$ auswendig ─────────
    2: [
      // Matrix-Zeile 11: SG 2 · recognize · true-false · uses=[int-exp-trig]
      tf(
        'Es gilt $\\int \\sin(x)\\,dx = -\\cos(x) + C$ und $\\int \\cos(x)\\,dx = +\\sin(x) + C$ — nur das $\\sin$-Integral bekommt das Minus.',
        true,
        `**Ansatz:** Beide Stammfunktionen durch Probe verifizieren.

**Rechnung:**
- $(-\\cos(x))' = -(-\\sin(x)) = \\sin(x)$ ✓ → $\\int \\sin(x)\\,dx = -\\cos(x) + C$.
- $(\\sin(x))' = \\cos(x)$ ✓ → $\\int \\cos(x)\\,dx = \\sin(x) + C$.

**Probe:** Beide Identitäten reproduzieren beim Ableiten den Integranden.

**Typischer Fehler:** Vorzeichen vertauschen — $\\int \\sin\\,dx = +\\cos$ ist eine der häufigsten Klausurfehler.`,
        [
          'Was ist $(\\cos x)\'$? Was ist $(-\\cos x)\'$?',
          'Welcher der beiden Integranden bekommt das Minus?',
          'Probe: leite beide rechte Seiten ab und vergleiche.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['int-exp-trig'] },
      ),

      // Matrix-Zeile 13: SG 2 · apply-independent · number-input · uses=[int-exp-trig]
      ni(
        'Eine Stammfunktion $F$ von $f(x) = \\sin(x)$ erfüllt die Anfangsbedingung $F(0) = 0$. Berechne $F(\\pi/2)$.',
        1,
        0.001,
        '',
        `**Ansatz:** Allgemeine Stammfunktion bestimmen, $C$ aus Anfangsbedingung, dann einsetzen.

**Rechnung:** $\\int \\sin(x)\\,dx = -\\cos(x) + C$. Bedingung: $F(0) = -\\cos(0) + C = -1 + C = 0 \\Rightarrow C = 1$. Damit $F(x) = -\\cos(x) + 1$. Einsetzen: $F(\\pi/2) = -\\cos(\\pi/2) + 1 = -0 + 1 = 1$.

**Probe:** $F'(x) = \\sin(x)$ ✓ und $F(0) = -1 + 1 = 0$ ✓.

**Typischer Fehler:** $\\cos(0) = 0$ statt $\\cos(0) = 1$ einsetzen — gibt $C = 0$ und damit $F(\\pi/2) = 0$.`,
        [
          'Schritt 1: $\\int \\sin(x)\\,dx = ?$ — Vorzeichen beachten.',
          'Schritt 2: Anfangsbedingung — was ist $\\cos(0)$?',
          'Schritt 3: einsetzen, $\\cos(\\pi/2) = 0$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['int-exp-trig'] },
      ),

      // Matrix-Zeile 14: SG 2 · error-analysis · multiple-choice · uses=[int-exp-trig] (Vorzeichen sin/cos)
      mc(
        'Tim schreibt $\\int \\sin(x)\\,dx = \\cos(x) + C$. Was ist der Fehler?',
        [
          'Es fehlt das Minuszeichen — korrekt: $\\int \\sin(x)\\,dx = -\\cos(x) + C$. Probe: $(\\cos x)\' = -\\sin x \\neq \\sin x$, aber $(-\\cos x)\' = \\sin x$ ✓.',
          'Der Funktionsterm ist falsch — $\\sin$ ist seine eigene Stammfunktion, also $\\int \\sin(x)\\,dx = \\sin(x) + C$.',
          'Tim hat zu wenig integriert — korrekt wäre $-\\tfrac{1}{2} \\cos^{2}(x) + C$.',
          'Bei trigonometrischen Funktionen muss vor dem Integrieren das Argument $x$ durch eine Variable substituiert werden.',
        ],
        0,
        `**Ansatz:** Probe — $(\\cos x)' = -\\sin x$, also kann $\\cos x$ Stammfunktion von $-\\sin x$ sein, NICHT von $+\\sin x$.

**Rechnung:** Es gilt $(\\cos x)' = -\\sin x$. Daraus folgt $(-\\cos x)' = -(-\\sin x) = +\\sin x$. Also $\\int \\sin(x)\\,dx = -\\cos(x) + C$ (mit Minus).

**Probe:** $(-\\cos(x) + C)' = \\sin(x) + 0 = \\sin(x)$ ✓.

**Typischer Fehler:** Tim hat das Vorzeichen der Ableitung von $\\cos$ vergessen — $(\\cos)' = -\\sin$, deshalb braucht $\\int \\sin$ ein Minus.`,
        [
          'Mache Tims Probe: leite $\\cos x$ ab — was kommt raus?',
          '$(\\cos x)\' = -\\sin x$. Dann ist $\\cos x$ Stammfunktion wovon?',
          'Mit dem Minus davor ($-\\cos x$) verschwindet das negative Vorzeichen beim Ableiten.',
        ],
        {
          1: 'Falsch — $\\sin$ ist nicht seine eigene Stammfunktion. Probe: $(\\sin x)\' = \\cos x \\neq \\sin x$. Eigene Stammfunktion ist nur $e^{x}$.',
          2: '$-\\tfrac{1}{2} \\cos^{2}(x)$ ist die Stammfunktion von $\\sin x \\cos x$ (Kettenregel rückwärts), nicht von $\\sin x$. Probe: $\\left(-\\tfrac{1}{2}\\cos^{2}x\\right)\' = \\sin x \\cos x \\neq \\sin x$.',
          3: 'Bei $\\int \\sin(x)\\,dx$ ist keine Substitution nötig — $\\sin x$ ist ein Standard-Grundintegral. Substitutionsregel braucht man nur bei verketteten Argumenten wie $\\sin(2x)$ oder $\\sin(x^{2})$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['int-exp-trig'] },
      ),

      // Bonus 1 (Mengen-Regel): SG 2 · ni · uses=[int-exp-trig]
      ni(
        'Eine Stammfunktion $F$ von $f(x) = e^{x}$ erfüllt die Anfangsbedingung $F(0) = 5$. Bestimme den Wert der Integrationskonstante $C$ in $F(x) = e^{x} + C$.',
        4,
        0,
        '',
        `**Ansatz:** Allgemeine Stammfunktion ansetzen, Anfangsbedingung einsetzen.

**Rechnung:** $\\int e^{x}\\,dx = e^{x} + C$. Bedingung: $F(0) = e^{0} + C = 1 + C = 5 \\Rightarrow C = 4$.

**Probe:** Mit $C = 4$ gilt $F(x) = e^{x} + 4$, $F(0) = 1 + 4 = 5$ ✓ und $F'(x) = e^{x}$ ✓.

**Typischer Fehler:** $e^{0} = 0$ einsetzen statt $e^{0} = 1$ — gibt fälschlich $C = 5$.`,
        [
          'Allgemeine Stammfunktion: $F(x) = e^{x} + C$.',
          'Bei $x = 0$: was ist $e^{0}$?',
          '$1 + C = 5$ — löse nach $C$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['int-exp-trig'] },
      ),

      // Bonus 2 (Mengen-Regel + matching-Variation): SG 2 · matching · uses=[int-exp-trig]
      matching(
        'Ordne jedem Integral seine korrekte Stammfunktion zu (jeweils ohne Integrationskonstante).',
        [
          { left: '$\\int 2\\sin(x)\\,dx$',  right: '$-2\\cos(x)$' },
          { left: '$\\int 3\\cos(x)\\,dx$',  right: '$3\\sin(x)$' },
          { left: '$\\int 5e^{x}\\,dx$',     right: '$5e^{x}$' },
          { left: '$\\int (-\\sin(x))\\,dx$', right: '$\\cos(x)$' },
        ],
        `**Ansatz:** Faktorregel + Grundintegrale gliedweise. Beim Vorzeichen vor $\\sin/\\cos$ sorgfältig sein.

**Rechnung:**
- $\\int 2\\sin x\\,dx = 2 \\cdot (-\\cos x) = -2\\cos x$.
- $\\int 3\\cos x\\,dx = 3 \\sin x$.
- $\\int 5 e^{x}\\,dx = 5 e^{x}$.
- $\\int -\\sin x\\,dx = -(-\\cos x) = +\\cos x$.

**Probe:** Jede rechte Seite ableiten und mit dem Integranden vergleichen — alle vier Identitäten gelten.

**Typischer Fehler:** Bei $\\int (-\\sin x)\\,dx$ das doppelte Minus vergessen — Probe: $(\\cos x)' = -\\sin x$, also $\\int -\\sin x\\,dx = +\\cos x$.`,
        [
          'Konstanten dürfen vor das Integral.',
          'Welche Grundintegrale gelten für $\\sin$, $\\cos$, $e^{x}$? Vorzeichen merken.',
          'Bei $\\int -\\sin x\\,dx$: zwei Minuszeichen heben sich auf.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['int-exp-trig'] },
      ),
    ],

    // ── [3] Summen- und Faktorregel beim Integrieren ───────────────────────
    3: [
      // Matrix-Zeile 16: SG 3 · recognize · true-false · uses=[int-summe]
      tf(
        'Die Summenregel der Integration besagt: $\\int (f(x) + g(x))\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$ — Summen werden gliedweise integriert.',
        true,
        `**Ansatz:** Linearität des Integrals — Integration vertauscht mit Addition.

**Rechnung:** Per Definition (Linearität): $\\int (f + g)\\,dx = \\int f\\,dx + \\int g\\,dx$. Beweis über die Linearität der Ableitung: $(F + G)' = F' + G' = f + g$, also ist $F + G$ Stammfunktion von $f + g$.

**Probe:** Beispiel $\\int (x^{2} + \\cos x)\\,dx = \\dfrac{x^{3}}{3} + \\sin x + C$. Probe: $\\left(\\dfrac{x^{3}}{3} + \\sin x\\right)' = x^{2} + \\cos x$. ✓

**Typischer Fehler:** Die Summenregel auf PRODUKTE übertragen — $\\int (f \\cdot g)\\,dx \\neq \\int f\\,dx \\cdot \\int g\\,dx$ (für Produkte braucht man partielle Integration).`,
        [
          'Wie hängt die Linearität der Ableitung mit der Integration zusammen?',
          'Was ist $(F + G)\'$ in Termen von $F\'$ und $G\'$?',
          'Aus $(F + G)\' = f + g$ folgt $\\int (f + g) = F + G + C = \\int f + \\int g$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['int-summe'] },
      ),

      // Matrix-Zeile 17: SG 3 · apply-guided · multiple-choice · uses=[int-summe, int-pot-regel]
      mc(
        'Welches Ergebnis liefert $\\int (3x^{2} + 4x)\\,dx$ mit Summen- und Faktorregel?',
        [
          '$x^{3} + 2x^{2} + C$',
          '$3x^{3} + 4x^{2} + C$',
          '$6x + 4 + C$',
          '$\\dfrac{3x^{3}}{3} + \\dfrac{4x^{2}}{2}$',
        ],
        0,
        `**Ansatz:** Summenregel — beide Glieder einzeln integrieren. Faktorregel — Konstante vor das Integral.

**Rechnung:** $\\int (3x^{2} + 4x)\\,dx = 3 \\int x^{2}\\,dx + 4 \\int x\\,dx = 3 \\cdot \\dfrac{x^{3}}{3} + 4 \\cdot \\dfrac{x^{2}}{2} + C = x^{3} + 2x^{2} + C$.

**Probe:** $(x^{3} + 2x^{2})' = 3x^{2} + 4x = f(x)$ ✓.

**Typischer Fehler:** Die Faktoren $3$ und $4$ stehen lassen, statt sie durch die neuen Exponenten $3$ und $2$ zu teilen — gibt fälschlich $3x^{3} + 4x^{2}$.`,
        [
          'Glied für Glied: $\\int 3x^{2}\\,dx = ?$, $\\int 4x\\,dx = ?$.',
          'Faktor durch neuen Exponenten teilen — $3 / 3 = 1$, $4 / 2 = 2$.',
          'Vereinfache: $\\dfrac{3x^{3}}{3} = x^{3}$, $\\dfrac{4x^{2}}{2} = 2x^{2}$.',
        ],
        {
          1: 'Du hast die Faktoren $3$ und $4$ stehen gelassen, ohne durch den neuen Exponenten zu teilen. Probe: $(3x^{3})\' = 9x^{2} \\neq 3x^{2}$. Korrekt: $3 \\cdot \\dfrac{x^{3}}{3} = x^{3}$.',
          2: 'Du hast abgeleitet statt integriert: $(3x^{2})\' = 6x$, $(4x)\' = 4$. Beim Integrieren wird der Exponent erhöht, nicht abgesenkt.',
          3: 'Der Funktionsterm ist mathematisch gleich richtig, aber unvereinfacht UND ohne $+C$. In Prüfungen kürzt man $\\dfrac{3x^{3}}{3} = x^{3}$ und schreibt zwingend $+C$ — sonst Punktabzug.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['int-summe', 'int-pot-regel'] },
      ),

      // Matrix-Zeile 18: SG 3 · apply-independent · number-input · uses=[int-summe, int-pot-regel]
      ni(
        'Berechne $\\int (4x^{3} + 6x^{2})\\,dx$. Welcher konstante Vorfaktor steht in der Stammfunktion vor $x^{3}$?',
        2,
        0,
        '',
        `**Ansatz:** Summenregel — beide Glieder einzeln integrieren.

**Rechnung:** $\\int 4x^{3}\\,dx = 4 \\cdot \\dfrac{x^{4}}{4} = x^{4}$. $\\int 6x^{2}\\,dx = 6 \\cdot \\dfrac{x^{3}}{3} = 2x^{3}$. Stammfunktion: $F(x) = x^{4} + 2x^{3} + C$. Vorfaktor von $x^{3}$ ist $2$.

**Probe:** $F'(x) = 4x^{3} + 6x^{2} = f(x)$ ✓.

**Typischer Fehler:** Den Vorfaktor von $x^{4}$ mit dem Vorfaktor von $x^{3}$ verwechseln — gefragt ist $x^{3}$, nicht $x^{4}$.`,
        [
          'Integriere $4x^{3}$ und $6x^{2}$ einzeln.',
          '$\\int 6x^{2}\\,dx = 6 \\cdot \\dfrac{x^{3}}{3}$ — vereinfache.',
          'Welcher Faktor steht jetzt direkt vor $x^{3}$?',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['int-summe', 'int-pot-regel'] },
      ),

      // Matrix-Zeile 19: SG 3 · error-analysis · multiple-choice · uses=[int-summe]
      mc(
        'Maja schreibt $\\int (x^{2} \\cdot \\sin x)\\,dx = \\dfrac{x^{3}}{3} \\cdot (-\\cos x) + C$ — sie hat einfach die beiden Stammfunktionen multipliziert. Was ist der Fehler?',
        [
          'Für ein PRODUKT $f \\cdot g$ gibt es KEINE einfache "Produktregel der Integration" — $\\int f \\cdot g\\,dx \\neq \\left(\\int f\\,dx\\right) \\cdot \\left(\\int g\\,dx\\right)$. Hier braucht es partielle Integration.',
          'Die Reihenfolge der Faktoren ist falsch — korrekt wäre $(-\\cos x) \\cdot \\dfrac{x^{3}}{3} + C$.',
          'Sie hat $\\sin$ falsch integriert — korrekt: $\\int \\sin x\\,dx = +\\cos x + C$ (kein Minus).',
          'Die Summenregel verlangt, dass man die Funktionen ADDIERT statt multipliziert; richtig wäre $\\dfrac{x^{3}}{3} - \\cos x + C$.',
        ],
        0,
        `**Ansatz:** Probe durch Ableiten — die Produktregel der DIFFERENTIATION zeigt sofort, dass eine analoge Regel beim Integrieren NICHT gilt.

**Rechnung:** $\\left(\\dfrac{x^{3}}{3} \\cdot (-\\cos x)\\right)' = x^{2} \\cdot (-\\cos x) + \\dfrac{x^{3}}{3} \\cdot \\sin x \\neq x^{2} \\sin x$. Die Summenregel gilt nur für Summen $f + g$, nicht für Produkte $f \\cdot g$.

**Probe:** Korrekt löst man $\\int x^{2} \\sin x\\,dx$ mit partieller Integration: $u = x^{2}$, $v' = \\sin x$ → ergibt $-x^{2} \\cos x + 2x \\sin x + 2 \\cos x + C$ (siehe spätere Lesson).

**Typischer Fehler:** Die Linearität (Summen-/Faktorregel) auf Produkte übertragen. Merksatz: Integration eines Produkts braucht IMMER partielle Integration oder Substitution.`,
        [
          'Wende die Produktregel der Ableitung auf Majas Ergebnis an.',
          'Stimmt die Probe für ein Produkt $f \\cdot g$, wenn man die Stammfunktionen multipliziert?',
          'Welche Methode ist nötig für $\\int f \\cdot g\\,dx$?',
        ],
        {
          1: 'Multiplikation ist kommutativ — Reihenfolge ist hier irrelevant. Das echte Problem: man darf die beiden Stammfunktionen überhaupt nicht multiplizieren, denn das ist nicht Stammfunktion des Produkts der Integranden.',
          2: 'Falsch — $\\int \\sin x\\,dx = -\\cos x + C$ (mit Minus, denn $(\\cos x)\' = -\\sin x$). Maja hat das Minus korrekt geschrieben. Der Fehler liegt im Multiplizieren der Stammfunktionen.',
          3: 'Die Summenregel gilt für SUMMEN — der Integrand ist hier aber ein PRODUKT $x^{2} \\cdot \\sin x$. $\\dfrac{x^{3}}{3} - \\cos x$ wäre die Stammfunktion von $x^{2} - \\sin x$ (Summe), nicht von $x^{2} \\sin x$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['int-summe'] },
      ),

      // Matrix-Zeile 20: SG 3 · transfer · number-input · uses=[int-summe, int-pot-regel]
      ni(
        'Eine Stammfunktion $F$ von $f(x) = 3x^{2} - 8x + 5$ erfüllt $F(0) = 7$. Berechne $F(1)$.',
        9,
        0,
        '',
        `**Ansatz:** Allgemeine Stammfunktion mit Summenregel, $C$ aus $F(0) = 7$, dann $F(1)$ einsetzen.

**Rechnung:** $\\int (3x^{2} - 8x + 5)\\,dx = x^{3} - 4x^{2} + 5x + C$. $F(0) = 0 - 0 + 0 + C = C = 7$. Also $F(x) = x^{3} - 4x^{2} + 5x + 7$. Einsetzen: $F(1) = 1 - 4 + 5 + 7 = 9$.

**Probe:** $F'(x) = 3x^{2} - 8x + 5 = f(x)$ ✓ und $F(0) = 7$ ✓.

**Typischer Fehler:** $C = 0$ annehmen, statt aus der Anfangsbedingung zu bestimmen — landet bei $F(1) = 1 - 4 + 5 = 2$.`,
        [
          'Schritt 1: gliedweise integrieren mit Summen- und Faktorregel.',
          'Schritt 2: Anfangsbedingung $F(0) = 7$ nutzen — bei $x = 0$ verschwinden alle $x$-Terme.',
          'Schritt 3: $F(1) = 1 - 4 + 5 + C$, mit $C$ aus Schritt 2.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['int-summe', 'int-pot-regel'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // int-1-3 — Summenregel & Faktorregel  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'int-1-3': {

    // ── [0] Summenregel: gliedweise integrieren ───────────────────────────
    0: [
      // Matrix-Zeile 1: SG 0 · recognize · true-false · uses=[sum-regel-int]
      tf(
        'Die Summenregel der Integration $\\int (f(x) + g(x))\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$ gilt auch für Differenzen — denn $f - g = f + (-1) \\cdot g$ kombiniert mit der Faktorregel ergibt $\\int (f - g)\\,dx = \\int f\\,dx - \\int g\\,dx$.',
        true,
        `**Ansatz:** Die Differenz $f - g$ als Summe $f + (-1) \\cdot g$ schreiben und Linearität (Summen- + Faktorregel) anwenden.

**Rechnung:** $\\int (f - g)\\,dx = \\int (f + (-1) \\cdot g)\\,dx = \\int f\\,dx + (-1) \\int g\\,dx = \\int f\\,dx - \\int g\\,dx$.

**Probe:** Beispiel $\\int (x^{2} - x)\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2} + C$. Probe: $\\left(\\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2}\\right)' = x^{2} - x$. ✓

**Typischer Fehler:** Glauben, eine Differenz brauche eine eigene Regel — sie folgt direkt aus Summen- und Faktorregel.`,
        [
          'Wie kann man $f - g$ als Summe schreiben?',
          'Faktorregel mit $c = -1$ liefert $\\int -g\\,dx = -\\int g\\,dx$.',
          'Kombinierte Anwendung: $\\int (f + (-g))\\,dx = \\int f\\,dx + \\int -g\\,dx = \\int f\\,dx - \\int g\\,dx$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['sum-regel-int'] },
      ),

      // Matrix-Zeile 3: SG 0 · apply-independent · number-input · uses=[sum-regel-int]
      ni(
        'Berechne $\\int (3x^{2} + 8x)\\,dx$ und gib den Wert der Stammfunktion bei $x = 2$ an, mit $C = 0$.',
        24,
        0,
        '',
        `**Ansatz:** Summenregel — beide Glieder einzeln integrieren, dann einsetzen.

**Rechnung:** $\\int 3x^{2}\\,dx = x^{3}$, $\\int 8x\\,dx = 4x^{2}$. Stammfunktion: $F(x) = x^{3} + 4x^{2} + C$. Mit $C = 0$: $F(2) = 8 + 16 = 24$.

**Probe:** $F'(x) = 3x^{2} + 8x$ ✓. Einsetzen: $F(2) = 2^{3} + 4 \\cdot 2^{2} = 8 + 16 = 24$.

**Typischer Fehler:** $4 \\cdot 2^{2}$ als $(4 \\cdot 2)^{2} = 64$ falsch ausrechnen — Punkt vor Strich, also $4 \\cdot 4 = 16$.`,
        [
          'Beide Glieder einzeln integrieren mit Potenzregel.',
          'Faktor durch neuen Exponenten teilen: $\\int 3x^{2}\\,dx = x^{3}$, $\\int 8x\\,dx = 4x^{2}$.',
          'Einsetzen: $F(2) = 2^{3} + 4 \\cdot 2^{2}$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['sum-regel-int'] },
      ),

      // Matrix-Zeile 4: SG 0 · error-analysis · multiple-choice · uses=[sum-regel-int]
      mc(
        'Markus berechnet $\\int (x^{2} - 4)\\,dx$ und schreibt: $\\dfrac{x^{3}}{3} - 4 + C$. Wo liegt der Fehler?',
        [
          'Der konstante Summand $-4$ wurde nicht integriert — $\\int -4\\,dx = -4x$ (nicht $-4$). Korrekt: $\\dfrac{x^{3}}{3} - 4x + C$.',
          'Markus hat richtig gerechnet — die Konstante $-4$ darf so stehen bleiben.',
          '$\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}$ ist falsch — korrekt wäre $\\dfrac{x^{3}}{2}$.',
          'Konstanten dürfen bei der Summenregel weggelassen werden, weil sie zum $+C$-Anteil gehören.',
        ],
        0,
        `**Ansatz:** Probe — Markus' Ergebnis ableiten und mit dem Integrand vergleichen.

**Rechnung:** $\\left(\\dfrac{x^{3}}{3} - 4\\right)' = x^{2} - 0 = x^{2}$. Aber der Integrand ist $x^{2} - 4$. Differenz: $-4 \\neq 0$ — Markus' $F$ ist keine Stammfunktion. Korrektur: $\\int -4\\,dx = -4x$, also $F(x) = \\dfrac{x^{3}}{3} - 4x + C$.

**Probe:** $\\left(\\dfrac{x^{3}}{3} - 4x\\right)' = x^{2} - 4$ ✓.

**Typischer Fehler:** Konstante stehenlassen statt zu integrieren — $\\int c\\,dx = cx$ (denn $(cx)' = c$).`,
        [
          'Mache die Probe: leite Markus\' Ergebnis ab.',
          'Was ist $\\int -4\\,dx$? Erinnere dich: $(-4x)\' = -4$.',
          'Vergleiche dein Ergebnis mit dem Integrand $x^{2} - 4$.',
        ],
        {
          1: 'Probe widerlegt: $\\left(\\dfrac{x^{3}}{3} - 4\\right)\' = x^{2}$, nicht $x^{2} - 4$. Konstanten verschwinden beim Ableiten — also muss die $-4$ im Integrand zu $-4x$ in der Stammfunktion werden.',
          2: '$\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}$ ist korrekt (Potenzregel: Exponent +1, durch neuen Exponenten teilen). $\\dfrac{x^{3}}{2}$ wäre Stammfunktion von $\\dfrac{3x^{2}}{2}$, nicht von $x^{2}$.',
          3: 'Konstanten gehören NICHT zum $+C$-Anteil — sie müssen integriert werden zu $cx$. $+C$ ist die Integrationskonstante aus der Familie aller Stammfunktionen, nicht der konstante Summand des Integrands.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['sum-regel-int'] },
      ),

      // Bonus 1 (Mengen-Regel + Variation): SG 0 · apply-guided · multiple-choice
      mc(
        'Welches Ergebnis liefert $\\int (\\cos(x) + 2x)\\,dx$?',
        [
          '$\\sin(x) + x^{2} + C$',
          '$-\\sin(x) + x^{2} + C$',
          '$\\sin(x) + 2x + C$',
          '$\\sin(x) + 2 + C$',
        ],
        0,
        `**Ansatz:** Summenregel — beide Glieder einzeln integrieren mit den Grundintegralen für $\\cos$ und der Potenzregel.

**Rechnung:** $\\int \\cos(x)\\,dx = \\sin(x)$, $\\int 2x\\,dx = 2 \\cdot \\dfrac{x^{2}}{2} = x^{2}$. Zusammen: $F(x) = \\sin(x) + x^{2} + C$.

**Probe:** $F'(x) = \\cos(x) + 2x$ ✓.

**Typischer Fehler:** Vorzeichen bei $\\int \\cos$ vertauschen oder $\\int 2x$ als $2x$ stehenlassen statt zu $x^{2}$ zu integrieren.`,
        [
          'Beide Glieder einzeln integrieren.',
          '$\\int \\cos(x)\\,dx = \\sin(x)$ — kein Minus!',
          '$\\int 2x\\,dx = x^{2}$ (Potenzregel: Faktor $2$ durch neuen Exponenten $2$ geteilt).',
        ],
        {
          1: 'Du hast das Vorzeichen-Muster von $\\int \\sin(x)\\,dx = -\\cos(x)$ auf $\\cos$ übertragen. Aber $\\int \\cos(x)\\,dx = +\\sin(x)$ (kein Minus): nur $\\sin$ bekommt das Minus beim Integrieren.',
          2: 'Du hast $\\int 2x\\,dx$ als $2x$ stehengelassen, aber $\\int 2x\\,dx = 2 \\cdot \\dfrac{x^{2}}{2} = x^{2}$. Probe: $(2x)\' = 2 \\neq 2x$.',
          3: 'Du hast $2x$ abgeleitet ($= 2$) statt zu integrieren. Beim Integrieren wird der Exponent erhöht: $\\int 2x\\,dx = x^{2}$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['sum-regel-int'] },
      ),

      // Matrix-Zeile 5 ist von ex-int-1-3-c (LP) bereits abgedeckt. Bonus 2 — sorting transfer.
      sorting(
        'Bringe die Schritte zur Berechnung von $\\int (x^{3} + 2x^{2} - 5)\\,dx$ in die richtige Reihenfolge.',
        [
          'Summenregel anwenden: jedes Glied einzeln integrieren.',
          'Potenzregel auf jedes Glied: $\\int x^{3}\\,dx = \\dfrac{x^{4}}{4}$, $\\int 2x^{2}\\,dx = \\dfrac{2x^{3}}{3}$, $\\int -5\\,dx = -5x$.',
          'Ergebnisse zusammensetzen: $\\dfrac{x^{4}}{4} + \\dfrac{2x^{3}}{3} - 5x$.',
          'Integrationskonstante $+C$ ergänzen: $\\dfrac{x^{4}}{4} + \\dfrac{2x^{3}}{3} - 5x + C$.',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Strukturierte Anwendung der Linearität — Summenregel zerlegt, Potenzregel löst jedes Glied, Zusammensetzen, $+C$ am Ende.

**Rechnung:** $F(x) = \\dfrac{x^{4}}{4} + \\dfrac{2x^{3}}{3} - 5x + C$.

**Probe:** $F'(x) = x^{3} + 2x^{2} - 5$ ✓.

**Typischer Fehler:** Das $+C$ vor dem Zusammensetzen einfügen oder ganz weglassen — Konvention: $+C$ am Schluss als letzter Schritt.`,
        [
          'Womit beginnt man bei einer Summe — Zerlegung oder Endergebnis?',
          'Wann wird die Potenzregel auf die einzelnen Glieder angewandt?',
          'Wo gehört die Integrationskonstante hin — am Anfang, während des Rechnens oder am Schluss?',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['sum-regel-int'] },
      ),
    ],

    // ── [1] Faktorregel: konstante Faktor vor das Integral ────────────────
    1: [
      // Matrix-Zeile 6: SG 1 · recognize · true-false · uses=[faktor-regel-int]
      tf(
        'Eine konstante Zahl $c \\in \\mathbb{R}$ darf vor das Integral gezogen werden: $\\int c \\cdot f(x)\\,dx = c \\cdot \\int f(x)\\,dx$.',
        true,
        `**Ansatz:** Definition der Faktorregel — gilt für beliebige reelle Konstanten.

**Rechnung:** Beweis über die Linearität der Ableitung: $(c \\cdot F(x))' = c \\cdot F'(x) = c \\cdot f(x)$, also ist $c \\cdot F(x)$ Stammfunktion von $c \\cdot f(x)$, und $\\int c \\cdot f(x)\\,dx = c \\cdot F(x) + C = c \\cdot \\int f(x)\\,dx$.

**Probe:** Beispiel $\\int 5\\cos(x)\\,dx = 5\\sin(x) + C$. Probe: $(5\\sin(x))' = 5\\cos(x)$ ✓.

**Typischer Fehler:** Die Regel auch auf VARIABLE "Faktoren" wie $x$ oder $\\sin(x)$ anwenden — dort gilt sie NICHT. Faktorregel verlangt eine echte Konstante.`,
        [
          'Was bedeutet "konstanter Faktor"?',
          'Beweis über Linearität der Ableitung: $(c F)\' = c F\'$.',
          'Beispiel: $\\int 7 x^{2}\\,dx = 7 \\int x^{2}\\,dx = 7 \\cdot \\dfrac{x^{3}}{3} + C$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['faktor-regel-int'] },
      ),

      // Matrix-Zeile 8: SG 1 · apply-independent · number-input · uses=[faktor-regel-int]
      ni(
        'Berechne $\\int (-3) \\sin(x)\\,dx = a \\cdot \\cos(x) + C$. Bestimme den Wert von $a$.',
        3,
        0,
        '',
        `**Ansatz:** Faktorregel: $-3$ vor das Integral ziehen, dann Grundintegral $\\int \\sin(x)\\,dx = -\\cos(x) + C$.

**Rechnung:** $\\int (-3)\\sin(x)\\,dx = -3 \\cdot \\int \\sin(x)\\,dx = -3 \\cdot (-\\cos(x)) + C = 3\\cos(x) + C$. Also $a = 3$.

**Probe:** $(3\\cos(x))' = -3\\sin(x)$ ✓.

**Typischer Fehler:** Das doppelte Minus übersehen — $-3 \\cdot (-\\cos x) = +3\\cos x$, nicht $-3\\cos x$.`,
        [
          'Faktorregel: $-3$ vor das Integral ziehen.',
          '$\\int \\sin(x)\\,dx = -\\cos(x) + C$ (mit Minus).',
          'Doppeltes Minus: $-3 \\cdot (-\\cos x) = +3\\cos x$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['faktor-regel-int'] },
      ),

      // Matrix-Zeile 9: SG 1 · error-analysis · multiple-choice · uses=[faktor-regel-int] ($x$ als Konstante behandelt)
      mc(
        'Anna berechnet $\\int x \\cdot \\cos(x)\\,dx$ und schreibt: $x \\cdot \\sin(x) + C$ — sie hat $x$ als Faktor vor das Integral gezogen ($x \\cdot \\int \\cos x\\,dx = x \\sin x$). Was ist der Fehler?',
        [
          '$x$ ist KEINE Konstante, sondern eine Variable. Die Faktorregel $\\int c \\cdot f\\,dx = c \\int f\\,dx$ gilt nur für *konstante* $c$. Probe: $(x \\sin x)\' = \\sin x + x \\cos x \\neq x \\cos x$. Für $\\int x \\cos x\\,dx$ braucht man partielle Integration.',
          'Anna hat richtig gerechnet — die Faktorregel erlaubt jeden Faktor.',
          'Anna hätte $\\sin(x)$ als $-\\sin(x)$ schreiben müssen — das Vorzeichen ist falsch.',
          'Anna hätte $x$ vor das Integral als $1$ ziehen müssen, also $1 \\cdot \\int \\cos x\\,dx = \\sin x + C$.',
        ],
        0,
        `**Ansatz:** Definition der Faktorregel prüfen — gilt nur für konstante Faktoren, nicht für Variable.

**Rechnung:** Probe an Annas Ergebnis: $(x \\sin(x))' = 1 \\cdot \\sin(x) + x \\cdot \\cos(x) = \\sin(x) + x\\cos(x) \\neq x\\cos(x)$ (Produktregel der Ableitung). Annas $F$ ist keine Stammfunktion.

**Probe:** Korrekt löst man $\\int x \\cos x\\,dx$ mit partieller Integration: $u = x$, $v' = \\cos x$ → $u v - \\int u'v\\,dx = x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$. Probe: $(x\\sin x + \\cos x)' = \\sin x + x\\cos x - \\sin x = x\\cos x$ ✓.

**Typischer Fehler:** Variable wie $x$ als "Faktor" missverstehen — die Faktorregel verlangt eine reelle Zahl, keine $x$-abhängige Größe.`,
        [
          'Wende die Produktregel der Ableitung auf Annas Ergebnis $x \\sin x$ an.',
          'Was verlangt die Faktorregel — was darf vor das Integral?',
          '$x$ ist eine Variable, keine Konstante. Welche Methode braucht man für Produkte?',
        ],
        {
          1: 'Probe widerlegt: $(x\\sin x)\' = \\sin x + x\\cos x \\neq x\\cos x$. Die Faktorregel erlaubt nur KONSTANTE Faktoren ($c \\in \\mathbb{R}$), nicht Variable.',
          2: 'Annas $\\sin(x)$ ist korrekt: $\\int \\cos x\\,dx = +\\sin x$ (ohne Minus). Der eigentliche Fehler liegt darin, dass $x$ überhaupt vor das Integral gezogen wurde.',
          3: 'Du kannst $x$ nicht durch $1$ "ersetzen" — der $x$-Faktor ändert das Integral substantiell. $\\int x \\cos x\\,dx \\neq \\int \\cos x\\,dx$. Korrekt: partielle Integration.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['faktor-regel-int'] },
      ),

      // Matrix-Zeile 10: SG 1 · transfer · matching · uses=[faktor-regel-int, sum-regel-int]
      matching(
        'Ordne jedem Integral seine korrekte Stammfunktion zu (jeweils ohne Integrationskonstante).',
        [
          { left: '$\\int 4x\\,dx$',         right: '$2x^{2}$' },
          { left: '$\\int (-3)\\sin(x)\\,dx$', right: '$3\\cos(x)$' },
          { left: '$\\int 5e^{x}\\,dx$',     right: '$5e^{x}$' },
          { left: '$\\int 2\\cos(x)\\,dx$',  right: '$2\\sin(x)$' },
        ],
        `**Ansatz:** Faktorregel — Konstante vor das Integral, dann Grundintegral; Vorzeichen sorgfältig prüfen.

**Rechnung:**
- $\\int 4x\\,dx = 4 \\cdot \\dfrac{x^{2}}{2} = 2x^{2}$.
- $\\int -3\\sin x\\,dx = -3 \\cdot (-\\cos x) = 3\\cos x$.
- $\\int 5e^{x}\\,dx = 5 e^{x}$.
- $\\int 2\\cos x\\,dx = 2 \\sin x$.

**Probe:** Jede rechte Seite ableiten und mit dem Integrand vergleichen — alle vier Identitäten gelten.

**Typischer Fehler:** Bei $\\int -3\\sin x\\,dx$ das doppelte Minus vergessen oder $\\int -3\\sin x\\,dx = -3\\cos x$ schreiben (richtig: $+3\\cos x$).`,
        [
          'Konstante darf vor das Integral.',
          'Grundintegrale für $\\sin$, $\\cos$, $e^{x}$ — Vorzeichen merken.',
          'Bei $-3\\sin x$: zwei Minuszeichen heben sich auf zu $+3\\cos x$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['faktor-regel-int', 'sum-regel-int'] },
      ),

      // Bonus (Mengen-Regel + Variation): SG 1 · apply-guided · multiple-choice
      mc(
        'Berechne $\\int -7 x^{4}\\,dx$.',
        [
          '$-\\dfrac{7}{5} x^{5} + C$',
          '$-7 x^{5} + C$',
          '$-\\dfrac{7}{4} x^{5} + C$',
          '$-\\dfrac{7}{4} x^{4} + C$',
        ],
        0,
        `**Ansatz:** Faktorregel — $-7$ vor das Integral, dann Potenzregel auf $x^{4}$.

**Rechnung:** $\\int -7 x^{4}\\,dx = -7 \\int x^{4}\\,dx = -7 \\cdot \\dfrac{x^{5}}{5} + C = -\\dfrac{7}{5} x^{5} + C$.

**Probe:** $\\left(-\\dfrac{7}{5} x^{5}\\right)' = -\\dfrac{7}{5} \\cdot 5 x^{4} = -7 x^{4}$ ✓.

**Typischer Fehler:** Den Faktor $-7$ unverändert vor $x^{5}$ schreiben, statt durch den neuen Exponenten $5$ zu teilen.`,
        [
          '$-7$ ist konstanter Faktor — vor das Integral.',
          'Potenzregel: Exponent $4 \\to 5$, dann durch $5$ teilen.',
          'Faktor $-7$ durch $5$: $-\\dfrac{7}{5}$.',
        ],
        {
          1: 'Du hast den Faktor $-7$ stehen gelassen, ohne durch den neuen Exponenten $5$ zu teilen. Probe: $(-7 x^{5})\' = -35 x^{4} \\neq -7 x^{4}$. Korrekt: $-7 \\cdot \\dfrac{x^{5}}{5} = -\\dfrac{7}{5} x^{5}$.',
          2: 'Du hast durch den ALTEN Exponenten $4$ geteilt statt durch den neuen Exponenten $5$. Potenzregel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1}$ — der Nenner ist $n + 1$, nicht $n$. Probe: $\\left(-\\dfrac{7}{4} x^{5}\\right)\' = -\\dfrac{35}{4} x^{4} \\neq -7 x^{4}$.',
          3: 'Du hast den Exponenten gar nicht erhöht. Beim Integrieren wird der Exponent um $1$ erhöht: $x^{4} \\to x^{5}$. Probe: $\\left(-\\dfrac{7}{4} x^{4}\\right)\' = -7 x^{3} \\neq -7 x^{4}$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['faktor-regel-int'] },
      ),
    ],

    // ── [2] Keine Produktregel der Integration ────────────────────────────
    2: [
      // Matrix-Zeile 11: SG 2 · recognize · true-false · uses=[kein-prod-regel]
      tf(
        'Für ein Produkt von Funktionen gilt: $\\int f(x) \\cdot g(x)\\,dx = \\left(\\int f(x)\\,dx\\right) \\cdot \\left(\\int g(x)\\,dx\\right)$.',
        false,
        `**Ansatz:** Probe an einem Gegenbeispiel — wenn die Aussage stimmen würde, müsste sie für jedes Paar $f, g$ gelten.

**Rechnung:** Test mit $f(x) = x$, $g(x) = x$, also $f \\cdot g = x^{2}$.
- Linke Seite: $\\int x^{2}\\,dx = \\dfrac{x^{3}}{3} + C$.
- Rechte Seite: $\\left(\\int x\\,dx\\right) \\cdot \\left(\\int x\\,dx\\right) = \\dfrac{x^{2}}{2} \\cdot \\dfrac{x^{2}}{2} = \\dfrac{x^{4}}{4}$.

$\\dfrac{x^{3}}{3} \\neq \\dfrac{x^{4}}{4}$ — die Aussage ist falsch.

**Probe:** Eine echte "Produktregel der Integration" gibt es NICHT. Stattdessen partielle Integration (Umkehrung der Produktregel der Ableitung): $\\int u v'\\,dx = uv - \\int u'v\\,dx$.

**Typischer Fehler:** Aus der Existenz der Summenregel $\\int (f+g) = \\int f + \\int g$ auf eine analoge Produktregel schließen — beide Operationen verhalten sich bei Integration sehr unterschiedlich.`,
        [
          'Probiere ein konkretes Beispiel: $f(x) = g(x) = x$.',
          'Linke und rechte Seite einzeln berechnen.',
          'Stimmen die Ergebnisse überein? Wenn nicht, ist die Aussage falsch.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['kein-prod-regel'] },
      ),

      // Matrix-Zeile 12: SG 2 · apply-guided · multiple-choice · uses=[kein-prod-regel]
      mc(
        'Welche Aussage über das Integral $\\int x \\cdot e^{x}\\,dx$ ist korrekt?',
        [
          'Für ein Produkt zweier Funktionen gibt es KEINE einfache Stammfunktions-Multiplikation; man braucht partielle Integration ($\\int u v\'\\,dx = uv - \\int u\'v\\,dx$). Resultat: $(x - 1)e^{x} + C$.',
          '$\\int x \\cdot e^{x}\\,dx = \\left(\\int x\\,dx\\right) \\cdot \\left(\\int e^{x}\\,dx\\right) = \\dfrac{x^{2}}{2} \\cdot e^{x} + C$.',
          '$\\int x \\cdot e^{x}\\,dx = x \\cdot e^{x} + C$, weil $x$ als Faktor vor das Integral gezogen werden darf.',
          'Der Integrand $x \\cdot e^{x}$ besitzt keine elementare Stammfunktion.',
        ],
        0,
        `**Ansatz:** Erkennen, dass ein PRODUKT keine einfache Stammfunktions-Regel hat, sondern partielle Integration verlangt.

**Rechnung:** Partielle Integration mit $u = x$, $v' = e^{x}$ (also $u' = 1$, $v = e^{x}$): $\\int x e^{x}\\,dx = u v - \\int u' v\\,dx = x e^{x} - \\int e^{x}\\,dx = x e^{x} - e^{x} + C = (x - 1) e^{x} + C$.

**Probe:** $((x-1)e^{x})' = e^{x} + (x-1)e^{x} = e^{x}(1 + x - 1) = x e^{x}$ ✓.

**Typischer Fehler:** Die Stammfunktionen $\\dfrac{x^{2}}{2}$ und $e^{x}$ einfach multiplizieren — würde $\\dfrac{x^{2}}{2} e^{x}$ liefern, das aber abgeleitet $x e^{x} + \\dfrac{x^{2}}{2} e^{x}$ ergibt (Produktregel der Ableitung), nicht $x e^{x}$.`,
        [
          'Ist $x \\cdot e^{x}$ eine Summe oder ein Produkt?',
          'Welche Methode löst Integrale von Produkten zweier Funktionen?',
          'Partielle Integration: $\\int u v\'\\,dx = uv - \\int u\'v\\,dx$. Setze $u = x$, $v\' = e^{x}$.',
        ],
        {
          1: 'Stammfunktionen darf man NICHT einfach multiplizieren — es gibt keine Produktregel der Integration. Probe: $\\left(\\dfrac{x^{2}}{2} e^{x}\\right)\' = x e^{x} + \\dfrac{x^{2}}{2} e^{x} \\neq x e^{x}$.',
          2: '$x$ ist eine VARIABLE, keine Konstante — die Faktorregel gilt nur für konstante Faktoren ($c \\in \\mathbb{R}$). Probe: $(x e^{x})\' = e^{x} + x e^{x} \\neq x e^{x}$.',
          3: 'Falsch — $x e^{x}$ besitzt sehr wohl eine elementare Stammfunktion, nämlich $(x - 1)e^{x} + C$. Sie wird durch partielle Integration gefunden.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['kein-prod-regel'] },
      ),

      // Matrix-Zeile 13: SG 2 · apply-independent · multiple-choice · uses=[kein-prod-regel]
      mc(
        'Welches der folgenden Integrale kann NICHT mit Summen- und Faktorregel allein gelöst werden, sondern verlangt eine spezielle Technik (z. B. partielle Integration)?',
        [
          '$\\int x \\cdot \\sin(x)\\,dx$',
          '$\\int (x + \\sin(x))\\,dx$',
          '$\\int 5\\sin(x)\\,dx$',
          '$\\int 3 x^{2}\\,dx$',
        ],
        0,
        `**Ansatz:** Die Linearität (Summen- + Faktorregel) löst nur Summen einfacher Terme oder konstante Faktoren — Produkte von zwei x-abhängigen Funktionen brauchen mehr.

**Rechnung:** $x \\cdot \\sin(x)$ ist ein PRODUKT zweier x-abhängiger Funktionen ($x$ und $\\sin x$). Hier scheitert die Linearität — partielle Integration mit $u = x$, $v' = \\sin x$ liefert $\\int x \\sin x\\,dx = -x\\cos x + \\sin x + C$.

**Probe:** $(-x\\cos x + \\sin x)' = -\\cos x + x\\sin x + \\cos x = x\\sin x$ ✓. Die anderen drei Integrale: $\\int (x + \\sin x)\\,dx = \\dfrac{x^{2}}{2} - \\cos x + C$ (Summe), $\\int 5\\sin x\\,dx = -5\\cos x + C$ (konstanter Faktor), $\\int 3x^{2}\\,dx = x^{3} + C$ (Potenzregel mit Faktor) — alle mit Linearität allein.

**Typischer Fehler:** Ein Produkt $x \\cdot f(x)$ mit einer Summe $x + f(x)$ verwechseln — das mathematische "+" und "·" sind völlig unterschiedlich behandelt.`,
        [
          'Was unterscheidet Produkt von Summe?',
          'Linearität (Summen-/Faktorregel) zerlegt Summen — was zerlegt sie nicht?',
          'Welche Methode für Produkte zweier x-abhängiger Funktionen?',
        ],
        {
          1: '$x + \\sin(x)$ ist eine SUMME — die Summenregel zerlegt sie: $\\int (x + \\sin x)\\,dx = \\dfrac{x^{2}}{2} + (-\\cos x) + C$. Linearität ausreichend.',
          2: '$5\\sin(x)$ hat einen KONSTANTEN Faktor $5$ vor $\\sin x$ — Faktorregel: $\\int 5\\sin x\\,dx = 5 \\cdot (-\\cos x) + C = -5\\cos x + C$. Linearität ausreichend.',
          3: '$3 x^{2}$ ist konstanter Faktor mal Potenz — Faktorregel + Potenzregel reichen: $\\int 3 x^{2}\\,dx = 3 \\cdot \\dfrac{x^{3}}{3} = x^{3} + C$.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['kein-prod-regel'] },
      ),

      // Matrix-Zeile 14: SG 2 · error-analysis · multiple-choice · uses=[kein-prod-regel]
      mc(
        'Lukas schreibt: $\\int x \\cdot \\cos(x)\\,dx = \\dfrac{x^{2}}{2} \\cdot \\sin(x) + C$ — er hat die Stammfunktion von $x$ und die Stammfunktion von $\\cos(x)$ multipliziert. Wo liegt der Fehler?',
        [
          'Es gibt keine Produktregel der Integration: $\\int f \\cdot g\\,dx \\neq \\left(\\int f\\,dx\\right)\\left(\\int g\\,dx\\right)$. Probe: $\\left(\\dfrac{x^{2}}{2} \\sin x\\right)\' = x \\sin x + \\dfrac{x^{2}}{2} \\cos x \\neq x \\cos x$. Hier braucht es partielle Integration (Resultat: $x \\sin x + \\cos x + C$).',
          'Lukas hat richtig gerechnet — Stammfunktionen darf man immer multiplizieren.',
          'Lukas hätte $\\sin(x)$ als $-\\sin(x)$ schreiben müssen — das Vorzeichen ist falsch.',
          'Lukas hätte die Reihenfolge umkehren müssen: erst $\\cos x$ integrieren, dann $x$ — das gibt das richtige Ergebnis.',
        ],
        0,
        `**Ansatz:** Probe — Lukas' Ergebnis ableiten und mit dem Integrand vergleichen.

**Rechnung:** $\\left(\\dfrac{x^{2}}{2} \\sin(x)\\right)' = x \\sin(x) + \\dfrac{x^{2}}{2} \\cos(x)$ (Produktregel der Ableitung). Das ist NICHT $x \\cos(x)$ — Lukas' $F$ ist keine Stammfunktion.

Korrekt: partielle Integration mit $u = x$, $v' = \\cos x$ (also $u' = 1$, $v = \\sin x$): $\\int x \\cos x\\,dx = u v - \\int u' v\\,dx = x \\sin x - \\int \\sin x\\,dx = x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C$.

**Probe:** $(x \\sin x + \\cos x)' = \\sin x + x \\cos x - \\sin x = x \\cos x$ ✓.

**Typischer Fehler:** Stammfunktionen multiplizieren — die analog zur Summenregel "Produktregel" existiert NICHT für Integrale.`,
        [
          'Wende die Produktregel der ABLEITUNG auf Lukas\' Ergebnis an.',
          'Erhältst du den Integrand $x \\cos x$ zurück?',
          'Welche Methode löst $\\int x \\cdot \\cos x\\,dx$ tatsächlich?',
        ],
        {
          1: 'Probe widerlegt: $\\left(\\dfrac{x^{2}}{2} \\sin x\\right)\' = x \\sin x + \\dfrac{x^{2}}{2} \\cos x \\neq x \\cos x$. Die Multiplikation der Stammfunktionen ergibt nicht die Stammfunktion des Produkts.',
          2: 'Lukas\' $\\sin(x)$ ist korrekt: $\\int \\cos x\\,dx = +\\sin x$ (ohne Minus). Der eigentliche Fehler ist die unzulässige Multiplikation der Stammfunktionen.',
          3: 'Multiplikation ist kommutativ — die Reihenfolge ist irrelevant. Das echte Problem: Stammfunktionen multiplizieren ist KEINE gültige Operation, egal in welcher Reihenfolge.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['kein-prod-regel'] },
      ),

      // Matrix-Zeile 15: SG 2 · transfer · multiple-choice · uses=[kein-prod-regel]
      mc(
        'Welches der folgenden Integrale erlaubt eine Lösung MIT Summen- und Faktorregel allein (ohne partielle Integration oder Substitution)?',
        [
          '$\\int (3 x^{2} + \\sin x)\\,dx$',
          '$\\int x \\cdot \\sin(x)\\,dx$',
          '$\\int e^{x} \\cdot \\cos(x)\\,dx$',
          '$\\int x^{2} \\cdot \\ln(x)\\,dx$',
        ],
        0,
        `**Ansatz:** Linearität greift bei Summen einfacher Terme und konstanten Faktoren — bei Produkten zweier x-abhängiger Funktionen scheitert sie.

**Rechnung:** $\\int (3x^{2} + \\sin x)\\,dx = \\int 3x^{2}\\,dx + \\int \\sin x\\,dx = x^{3} - \\cos x + C$. Reine Summenregel + Faktorregel + Grundintegrale.

**Probe:** $(x^{3} - \\cos x)' = 3x^{2} + \\sin x$ ✓. Die anderen drei Integrale enthalten alle Produkte zweier x-abhängiger Funktionen ($x \\cdot \\sin x$, $e^{x} \\cdot \\cos x$, $x^{2} \\cdot \\ln x$) — da reicht Linearität nicht.

**Typischer Fehler:** Produkt mit Summe verwechseln — $x \\cdot \\sin x$ und $x + \\sin x$ sehen ähnlich aus, sind aber mathematisch grundverschieden.`,
        [
          'Welches Integral ist eine Summe, welches ein Produkt?',
          'Linearität löst Summen einfacher Terme — passt zu welchem Integral?',
          'Produkte zweier x-abhängiger Funktionen brauchen partielle Integration.',
        ],
        {
          1: '$x \\cdot \\sin(x)$ ist ein Produkt zweier x-abhängiger Funktionen — partielle Integration nötig. Mit Linearität allein nicht lösbar.',
          2: '$e^{x} \\cdot \\cos(x)$ ist ein Produkt — partielle Integration (sogar zweimal mit "Trick", da das Ausgangsintegral wiederkehrt). Linearität reicht nicht.',
          3: '$x^{2} \\cdot \\ln(x)$ ist ein Produkt — partielle Integration mit $u = \\ln x$, $v\' = x^{2}$. Linearität reicht nicht.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['kein-prod-regel'] },
      ),
    ],

    // ── [3] Integrationskonstante $+C$ konsequent mitschreiben ─────────────
    3: [
      // Matrix-Zeile 16: SG 3 · recognize · true-false · uses=[plus-c-konsequent]
      tf(
        'Bei einem unbestimmten Integral darf die Integrationskonstante $+C$ nur dann mitgeschrieben werden, wenn der Integrand selbst eine konstante Komponente enthält.',
        false,
        `**Ansatz:** Definition des unbestimmten Integrals prüfen — woher kommt $+C$ überhaupt?

**Rechnung:** Das unbestimmte Integral $\\int f(x)\\,dx = F(x) + C$ verlangt $+C$ UNABHÄNGIG vom Integrand. Beispiel ohne Konstante im Integrand: $\\int 2x\\,dx = x^{2} + C$. Die $C$ kommt nicht aus einer Konstante in $f$, sondern aus der Tatsache, dass die Stammfunktion nur bis auf eine additive Konstante eindeutig ist (jede Konstante verschwindet beim Ableiten).

**Probe:** $(x^{2} + C)' = 2x + 0 = 2x = f(x)$ — funktioniert für JEDES $C \\in \\mathbb{R}$. Die ganze Familie $\\{x^{2} + C : C \\in \\mathbb{R}\\}$ besteht aus Stammfunktionen.

**Typischer Fehler:** $+C$ als "Stellvertreter für Konstante im Integrand" missverstehen. Tatsächlich ist $+C$ Teil der unbestimmten Integration selbst — egal welcher Integrand.`,
        [
          'Woher kommt das $+C$ — vom Integrand oder von der Definition des unbestimmten Integrals?',
          'Beispiel: $\\int 2x\\,dx$ — keine Konstante im Integrand. Trotzdem $+C$?',
          'Probe: $(x^{2} + 7)\' = 2x$, $(x^{2} - 100)\' = 2x$ — alle Stammfunktionen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['plus-c-konsequent'] },
      ),

      // Matrix-Zeile 17: SG 3 · apply-guided · multiple-choice · uses=[plus-c-konsequent]
      mc(
        'Welches der folgenden Ergebnisse ist KORREKT geschrieben — inklusive Integrationskonstante?',
        [
          '$\\int 4x\\,dx = 2x^{2} + C$',
          '$\\int 4x\\,dx = 2x^{2}$',
          '$\\int 4x\\,dx = 2x^{2} + 5$',
          '$\\int 4x\\,dx = 2x^{2} + C \\cdot x$',
        ],
        0,
        `**Ansatz:** Vollständiges unbestimmtes Integral = Stammfunktion + freie Integrationskonstante $+C$.

**Rechnung:** $\\int 4x\\,dx = 4 \\cdot \\dfrac{x^{2}}{2} + C = 2x^{2} + C$. Die Integrationskonstante $C$ steht für eine BELIEBIGE reelle Zahl, nicht für einen festen Wert wie $5$ oder einen $x$-abhängigen Term.

**Probe:** $(2x^{2} + C)' = 4x$ für jedes $C$ ✓.

**Typischer Fehler:** $+C$ weglassen (Standard-Punktabzug) oder durch eine konkrete Zahl ersetzen — letzteres engt die Stammfunktionsfamilie unzulässig ein.`,
        [
          'Was bedeutet "+C" — eine konkrete Zahl oder ein Platzhalter für jede beliebige Konstante?',
          'Schau dir jede Option an — welche enthält genau ein Symbol "$+C$" am Ende?',
          'Probe: leite das vermeintliche $F$ ab. Ergibt es $4x$ für JEDE Wahl von $C$?',
        ],
        {
          1: 'Die Stammfunktion $2x^{2}$ ist richtig, aber die Integrationskonstante $+C$ fehlt. Bei unbestimmten Integralen ist die Stammfunktion nur bis auf eine additive Konstante bestimmt — $+C$ ist Pflicht.',
          2: '$+5$ ist eine SPEZIELLE Wahl von $C$ — engt die Stammfunktionsfamilie unzulässig ein. Das unbestimmte Integral steht für ALLE Stammfunktionen, also $+C$ mit beliebigem $C \\in \\mathbb{R}$.',
          3: '$C \\cdot x$ ist KEINE Konstante, sondern eine $x$-abhängige Funktion. Probe: $(2x^{2} + Cx)\' = 4x + C \\neq 4x$ (außer $C = 0$). Die Integrationskonstante muss konstant sein.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['plus-c-konsequent'] },
      ),

      // Matrix-Zeile 18: SG 3 · apply-independent · multiple-choice · uses=[plus-c-konsequent]
      mc(
        'Welche der folgenden Funktionen ist KEINE Stammfunktion von $f(x) = 2x$?',
        [
          '$F(x) = 2x$',
          '$F(x) = x^{2} + 7$',
          '$F(x) = x^{2} - 100$',
          '$F(x) = x^{2}$',
        ],
        0,
        `**Ansatz:** Probe — jeden Kandidaten ableiten und mit $f(x) = 2x$ vergleichen.

**Rechnung:**
- $(2x)' = 2 \\neq 2x$ ✗ — also KEINE Stammfunktion.
- $(x^{2} + 7)' = 2x$ ✓
- $(x^{2} - 100)' = 2x$ ✓
- $(x^{2})' = 2x$ ✓

**Probe:** Drei der vier Kandidaten sind Mitglieder der Familie $\\{x^{2} + C : C \\in \\mathbb{R}\\}$ (mit $C = 7$, $C = -100$, $C = 0$). Nur $2x$ liegt nicht in dieser Familie.

**Typischer Fehler:** $f(x) = 2x$ und $F(x) = 2x$ verwechseln — sie heißen ähnlich, sind aber Integrand bzw. (vermeintliche) Stammfunktion. Hier ist $2x$ aber nur der Integrand selbst, kein Stammfunktion.`,
        [
          'Stammfunktion $F$ erfüllt $F\'(x) = f(x)$.',
          'Leite jede Option ab und prüfe, ob $2x$ herauskommt.',
          'Achte auf den Sonderfall, wo $F = f$ ist — ist das automatisch eine Stammfunktion?',
        ],
        {
          1: '$(x^{2} + 7)\' = 2x + 0 = 2x = f(x)$ ✓ — die $7$ verschwindet beim Ableiten. Das ist eine korrekte Stammfunktion (mit $C = 7$).',
          2: '$(x^{2} - 100)\' = 2x = f(x)$ ✓ — auch mit großen negativen Konstanten bleibt die Ableitung gleich. Korrekte Stammfunktion (mit $C = -100$).',
          3: '$(x^{2})\' = 2x = f(x)$ ✓ — die einfachste Stammfunktion (mit $C = 0$). Auch korrekt.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['plus-c-konsequent'] },
      ),

      // Matrix-Zeile 19: SG 3 · error-analysis · multiple-choice · uses=[plus-c-konsequent]
      mc(
        'Tom schreibt: $\\int (3x^{2} + 2)\\,dx = x^{3} + 2x$. Was ist der Fehler?',
        [
          'Es fehlt die Integrationskonstante $+C$ — bei unbestimmten Integralen ist die Stammfunktion nur bis auf eine additive Konstante bestimmt. Korrekt: $x^{3} + 2x + C$.',
          'Der konstante Term $2$ darf nicht integriert werden, weil er konstant ist.',
          'Der Faktor $3$ in $3x^{2}$ wurde nicht durch den Exponenten geteilt — korrekt wäre $\\dfrac{x^{3}}{3}$.',
          'Tom hätte zwei Konstanten benötigt: $x^{3} + C_{1} + 2x + C_{2}$.',
        ],
        0,
        `**Ansatz:** Probe — $F(x) = x^{3} + 2x$ ableiten und mit dem Integrand vergleichen.

**Rechnung:** $F'(x) = (x^{3} + 2x)' = 3x^{2} + 2 = f(x)$ ✓ — der Funktionsterm ist KORREKT! Es fehlt nur das $+C$. Korrekt: $x^{3} + 2x + C$.

**Probe:** $(x^{3} + 2x + C)' = 3x^{2} + 2$ für jedes $C \\in \\mathbb{R}$ — ganze Familie an Stammfunktionen.

**Typischer Fehler:** $+C$ vergessen ist der häufigste Punktabzug bei unbestimmten Integralen — selbst wenn die Stammfunktion sonst stimmt.`,
        [
          'Mache die Probe: leite Toms $F$ ab.',
          'Stimmt der Funktionsterm? Wenn ja, was fehlt am Endergebnis?',
          'Bei unbestimmten Integralen ist EIN bestimmter Zusatz immer Pflicht.',
        ],
        {
          1: '$\\int 2\\,dx = 2x$ — Konstanten werden integriert, sie verschwinden NICHT. Toms $2x$ ist genau richtig: $(2x)\' = 2$ ✓.',
          2: '$\\int 3x^{2}\\,dx = 3 \\cdot \\dfrac{x^{3}}{3} = x^{3}$ — der Faktor $3$ wurde durch den neuen Exponenten geteilt, korrekt vereinfacht. Toms $x^{3}$ ist richtig.',
          3: 'Mehrere Konstanten in der Stammfunktion lassen sich immer zu EINER Konstante zusammenfassen ($C = C_{1} + C_{2}$). Standardform ist deshalb genau ein $+C$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['plus-c-konsequent'] },
      ),

      // Matrix-Zeile 20: SG 3 · transfer · matching · uses=[plus-c-konsequent]
      matching(
        'Ordne jedem unbestimmten Integral das KORREKT geschriebene Ergebnis (inklusive $+C$) zu.',
        [
          { left: '$\\int 6x\\,dx$',     right: '$3x^{2} + C$' },
          { left: '$\\int e^{x}\\,dx$',  right: '$e^{x} + C$' },
          { left: '$\\int \\sin(x)\\,dx$', right: '$-\\cos(x) + C$' },
          { left: '$\\int 4\\,dx$',      right: '$4x + C$' },
        ],
        `**Ansatz:** Für jedes Integral die Stammfunktion finden und das verpflichtende $+C$ ergänzen.

**Rechnung:**
- $\\int 6x\\,dx = 3x^{2} + C$ (Probe: $(3x^{2})' = 6x$ ✓).
- $\\int e^{x}\\,dx = e^{x} + C$ (Probe: $(e^{x})' = e^{x}$ ✓).
- $\\int \\sin(x)\\,dx = -\\cos(x) + C$ (Probe: $(-\\cos x)' = \\sin x$ ✓).
- $\\int 4\\,dx = 4x + C$ (Probe: $(4x)' = 4$ ✓).

**Probe:** Vier verschiedene Integrale, vier verschiedene Stammfunktionen — alle mit $+C$ vollständig.

**Typischer Fehler:** $+C$ weglassen oder das falsche Vorzeichen bei $\\int \\sin(x)\\,dx$ schreiben (richtig: $-\\cos(x)$, mit Minus).`,
        [
          'Berechne jeweils die Stammfunktion mit Faktor- und/oder Grundintegralen.',
          'Vergiss das $+C$ am Ende NICHT.',
          'Bei $\\int \\sin x\\,dx$: Vorzeichen prüfen — wo kommt das Minus her?',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['plus-c-konsequent'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // int-1-4 — Das bestimmte Integral  (4 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'int-1-4': {

    // ── [0] Hauptsatz: $\int_a^b f(x)dx = F(b) - F(a)$ ────────────────────
    0: [
      // Matrix-Zeile 1: SG 0 · recognize · true-false · uses=[hauptsatz-12]
      tf(
        'Für eine beliebige Stammfunktion $F$ von $f$ gilt der Hauptsatz: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$.',
        true,
        `**Ansatz:** Definition des Hauptsatzes der Differential- und Integralrechnung (Teil 2).

**Rechnung:** Per Hauptsatz: $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$ für jede Stammfunktion $F$ mit $F'(x) = f(x)$. Die Wahl der Stammfunktion (mit oder ohne $+C$) ist egal — Konstanten kürzen sich.

**Probe:** $\\int_{0}^{2} 2x\\,dx$ mit $F(x) = x^{2}$: $F(2) - F(0) = 4 - 0 = 4$. ✓ (Geometrisch: Dreieck mit Grundseite $2$, Höhe $4$, Fläche $= 4$.)

**Typischer Fehler:** Reihenfolge $F(a) - F(b)$ statt $F(b) - F(a)$ — gibt das negative Ergebnis.`,
        [
          'Was ist die Aussage des Hauptsatzes?',
          'Welche Reihenfolge bei der Differenz: $F(b) - F(a)$ oder $F(a) - F(b)$?',
          'Probe: $\\int_{0}^{1} 2x\\,dx = 1 - 0 = 1$ — passt das zum Dreieck mit Fläche $1$?',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['hauptsatz-12'] },
      ),

      // Matrix-Zeile 2: SG 0 · apply-guided · multiple-choice · uses=[hauptsatz-12]
      mc(
        'Berechne $\\int_{1}^{2} (4x + 3)\\,dx$.',
        [
          '$9$',
          '$14$',
          '$5$',
          '$-9$',
        ],
        0,
        `**Ansatz:** Stammfunktion mit Summen-/Faktorregel, dann Hauptsatz: $F(b) - F(a)$.

**Rechnung:** $\\int (4x + 3)\\,dx = 2x^{2} + 3x + C$, also $F(x) = 2x^{2} + 3x$. $F(2) = 8 + 6 = 14$. $F(1) = 2 + 3 = 5$. $\\int_{1}^{2} = F(2) - F(1) = 14 - 5 = 9$.

**Probe:** $F'(x) = 4x + 3$ ✓ (Integrand zurückgewonnen).

**Typischer Fehler:** Nur $F(2) = 14$ als Ergebnis nehmen statt der Differenz $F(b) - F(a)$.`,
        [
          'Stammfunktion gliedweise: $\\int 4x\\,dx = 2x^{2}$, $\\int 3\\,dx = 3x$.',
          '$F(2) = 14$, $F(1) = 5$ — beides berechnen.',
          'Hauptsatz: $F(2) - F(1)$.',
        ],
        {
          1: 'Du hast nur den Wert an der oberen Grenze $F(2) = 14$ verwendet und vergessen, $F(1) = 5$ abzuziehen. Hauptsatz verlangt die Differenz: $F(b) - F(a) = 14 - 5 = 9$.',
          2: 'Du hast nur den Wert an der unteren Grenze $F(1) = 5$ angegeben statt der Differenz. Hauptsatz: $\\int_{a}^{b} f\\,dx = F(b) - F(a) = 14 - 5 = 9$.',
          3: 'Du hast die Grenzen vertauscht: $F(1) - F(2) = 5 - 14 = -9$. Korrekt ist $F(b) - F(a) = F(2) - F(1) = 9$ (obere Grenze minus untere).',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['hauptsatz-12'] },
      ),

      // Bonus zu Matrix-Zeile 3 (LP-a + LP-b decken bereits Z3): SG 0 · apply-independent · number-input
      ni(
        'Berechne $\\int_{-1}^{2} 3x^{2}\\,dx$.',
        9,
        0,
        '',
        `**Ansatz:** Potenzregel: $\\int 3x^{2}\\,dx = x^{3}$, dann Hauptsatz mit negativer unterer Grenze.

**Rechnung:** $F(x) = x^{3}$. $F(2) = 8$. $F(-1) = (-1)^{3} = -1$. $\\int_{-1}^{2} 3x^{2}\\,dx = F(2) - F(-1) = 8 - (-1) = 9$.

**Probe:** $F'(x) = 3x^{2}$ ✓. Geometrisch: $3x^{2} \\geq 0$, also Integral positiv und gleich der Gesamtfläche unter der Parabel auf $[-1, 2]$.

**Typischer Fehler:** Bei $F(-1) = (-1)^{3}$ das Vorzeichen vergessen — $(-1)^{3} = -1$ (ungerader Exponent), und in der Differenz wird daraus $- (-1) = +1$.`,
        [
          'Stammfunktion: $\\int 3x^{2}\\,dx = x^{3}$ (Faktor $3$ durch neuen Exponenten $3$ geteilt).',
          'Bei der unteren Grenze: $(-1)^{3} = -1$ (ungerade Potenz behält Vorzeichen).',
          'Differenz: $8 - (-1) = 8 + 1 = 9$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['hauptsatz-12'] },
      ),

      // Matrix-Zeile 4: SG 0 · error-analysis · multiple-choice · uses=[hauptsatz-12]
      mc(
        'Tom berechnet $\\int_{1}^{4} x^{2}\\,dx$ als $\\dfrac{1}{3}(4^{2} - 1^{2}) = \\dfrac{15}{3} = 5$. Wo liegt der Fehler?',
        [
          'Tom hat den Hauptsatz mit dem ALTEN Exponenten $2$ angewandt — er hat $b^{2} - a^{2}$ statt $b^{3} - a^{3}$ benutzt. Korrekt: Stammfunktion $F(x) = \\dfrac{x^{3}}{3}$ (Exponent +1), dann $F(4) - F(1) = \\dfrac{64}{3} - \\dfrac{1}{3} = 21$.',
          'Tom hat richtig gerechnet — $\\dfrac{15}{3} = 5$ ist das korrekte Integral.',
          'Tom hat das Vorzeichen vergessen — korrekt wäre $-5$.',
          'Tom hätte die Konstante $C = 0$ am Ende addieren müssen.',
        ],
        0,
        `**Ansatz:** Hauptsatz korrekt anwenden — erst Stammfunktion (Potenzregel: Exponent +1, dann durch neuen Exponenten teilen), dann $F(b) - F(a)$.

**Rechnung:** Tom hat den Schritt "Exponent erhöhen" vergessen: $\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}$, nicht $\\dfrac{x^{2}}{3}$. Korrekt: $F(x) = \\dfrac{x^{3}}{3}$. $F(4) = \\dfrac{64}{3}$, $F(1) = \\dfrac{1}{3}$. $\\int_{1}^{4} x^{2}\\,dx = \\dfrac{64 - 1}{3} = \\dfrac{63}{3} = 21$.

**Probe:** $F'(x) = \\dfrac{3x^{2}}{3} = x^{2}$ ✓.

**Typischer Fehler:** Den Exponenten beim Integrieren NICHT um $1$ erhöhen — man landet dann auf der Stelle, wo $x^{n}$ "scheinbar" abgeleitet wurde.`,
        [
          'Schau Toms Stammfunktion an: hat er $x^{2}$ oder $x^{3}$?',
          'Potenzregel: $\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1}$ — der NEUE Exponent ist $n+1$.',
          'Korrekt: $F(x) = \\dfrac{x^{3}}{3}$. Nun $F(4) - F(1)$ richtig.',
        ],
        {
          1: 'Probe widerlegt: $5 \\neq 21$. Mit Toms Methode wäre $F\'(x) = \\dfrac{2x}{3}$, das ist nicht $x^{2}$.',
          2: 'Das Integral ist $+21$ (Funktion ist auf $[1, 4]$ positiv). Toms Fehler liegt an der Stammfunktion, nicht am Vorzeichen.',
          3: 'Das $C$ kürzt sich beim bestimmten Integral immer raus: $(F + C)(b) - (F + C)(a) = F(b) - F(a)$. Toms eigentliches Problem ist der falsche Exponent in der Stammfunktion.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['hauptsatz-12'] },
      ),

      // Bonus zu Matrix-Zeile 5 (LP-d + LP-mastery decken bereits Z5): SG 0 · transfer · number-input
      ni(
        'Berechne $\\int_{0}^{\\pi/2} \\cos(x)\\,dx$.',
        1,
        0.001,
        '',
        `**Ansatz:** Grundintegral $\\int \\cos(x)\\,dx = \\sin(x) + C$, dann Hauptsatz mit den Werten von $\\sin$ an $0$ und $\\pi/2$.

**Rechnung:** $F(x) = \\sin(x)$. $F(\\pi/2) = \\sin(\\pi/2) = 1$. $F(0) = \\sin(0) = 0$. $\\int_{0}^{\\pi/2} \\cos(x)\\,dx = F(\\pi/2) - F(0) = 1 - 0 = 1$.

**Probe:** $F'(x) = \\cos(x)$ ✓. Geometrisch: Fläche unter $\\cos$ von $0$ bis $\\pi/2$ ist genau $1$ (kein $\\pi$!).

**Typischer Fehler:** Stammfunktion als $-\\sin(x)$ schreiben (falsches Vorzeichen) — korrekt ist $\\int \\cos = +\\sin$ (kein Minus, denn $(\\sin)' = \\cos$).`,
        [
          'Stammfunktion: $\\int \\cos(x)\\,dx = \\sin(x) + C$ (kein Minus).',
          '$\\sin(\\pi/2) = 1$ und $\\sin(0) = 0$.',
          'Hauptsatz: $\\sin(\\pi/2) - \\sin(0) = 1 - 0$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['hauptsatz-12'] },
      ),
    ],

    // ── [1] Geometrische Fläche — unterhalb der x-Achse zählt negativ ──────
    1: [
      // Matrix-Zeile 6: SG 1 · recognize · true-false · uses=[geom-flaeche]
      tf(
        'Wenn $f(x) < 0$ auf einem Intervall $[a, b]$, dann ist $\\int_{a}^{b} f(x)\\,dx$ negativ — er misst die geometrische Fläche unter der x-Achse mit negativem Vorzeichen.',
        true,
        `**Ansatz:** Geometrische Deutung des bestimmten Integrals — Vorzeichen folgt aus dem Vorzeichen von $f$.

**Rechnung:** Für $f < 0$ liegt der Graph unterhalb der x-Achse. Die Riemann-Summe $\\sum f(x_{i}) \\Delta x$ besteht aus negativen Summanden, also ist das Integral negativ. Geometrisch wird die Fläche zwischen Kurve und x-Achse mit NEGATIVEM Vorzeichen "gezählt".

**Probe:** $\\int_{0}^{1} (-x)\\,dx = -\\dfrac{1}{2}$ ($F = -\\dfrac{x^{2}}{2}$, $F(1) - F(0) = -\\dfrac{1}{2}$). Negativ, weil $-x < 0$ auf $(0, 1]$.

**Typischer Fehler:** Geometrische Fläche (immer $\\geq 0$) und Integralwert (kann negativ sein) verwechseln. Geometrische Fläche ist $|{\\int}|$.`,
        [
          'Was ist das Vorzeichen der Riemann-Summe, wenn $f < 0$?',
          'Beispiel: $\\int_{0}^{1} (-1)\\,dx = ?$',
          'Erinnere dich: Integral $\\neq$ geometrische Fläche, wenn $f < 0$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['geom-flaeche'] },
      ),

      // Bonus zu Matrix-Zeile 7 (LP-c deckt Z7): SG 1 · apply-guided · multiple-choice
      mc(
        'Welche geometrische Bedeutung hat $\\int_{a}^{b} f(x)\\,dx$, wenn $f(x) < 0$ für alle $x \\in [a, b]$?',
        [
          'Der Wert ist NEGATIV — er entspricht dem negativen Inhalt der Fläche zwischen Kurve und x-Achse. Die geometrische Fläche selbst ist $|{\\int_{a}^{b} f\\,dx}|$.',
          'Der Wert ist positiv — Flächen sind in der Geometrie immer positiv, unabhängig davon, ob die Kurve unter oder über der x-Achse liegt.',
          'Der Wert ist null — eine negative Funktion integriert sich zu null.',
          'Der Wert ist nicht definiert, weil Integration nur für $f \\geq 0$ sinnvoll ist.',
        ],
        0,
        `**Ansatz:** Riemann-Summen-Definition prüfen — Vorzeichen folgt direkt aus $f < 0$.

**Rechnung:** $\\int_{a}^{b} f(x)\\,dx$ ist Grenzwert von $\\sum f(x_{i}) \\Delta x$. Wenn alle $f(x_{i}) < 0$ und $\\Delta x > 0$, sind alle Summanden negativ — das Integral ist negativ. Beispiel: $\\int_{0}^{1} (-2x)\\,dx = -1$.

**Probe:** $F(x) = -x^{2}$. $F(1) - F(0) = -1 - 0 = -1$. ✓

**Typischer Fehler:** Glauben, das Integral mache automatisch eine "Fläche" und sei deshalb $\\geq 0$. Tatsächlich misst das Integral SIGNIERTE Flächen — Vorzeichen kommt aus dem Vorzeichen von $f$.`,
        [
          'Schau in die Riemann-Summe: $\\sum f(x_{i}) \\Delta x$ — was passiert, wenn alle $f(x_{i})$ negativ sind?',
          'Beispiel: $\\int_{0}^{1} (-1)\\,dx = ?$',
          'Geometrische Fläche und Integralwert sind nicht dasselbe.',
        ],
        {
          1: 'Geometrische Flächen sind in der Schulgeometrie tatsächlich $\\geq 0$, aber das *bestimmte Integral* misst eine SIGNIERTE Fläche — mit Vorzeichen. Deshalb $\\int_{0}^{1} (-1)\\,dx = -1$, nicht $+1$.',
          2: '$f(x) < 0$ für alle $x$ heißt nicht, dass das Integral null ist. Beispiel: $\\int_{0}^{1} (-1)\\,dx = -1 \\neq 0$. Null kommt nur bei symmetrischen positiv-/negativ-Anteilen.',
          3: 'Integration ist für *jede* integrierbare Funktion definiert — nicht nur für $f \\geq 0$. Negative Funktionen liefern negative Integrale.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['geom-flaeche'] },
      ),

      // Matrix-Zeile 8: SG 1 · apply-independent · number-input · uses=[geom-flaeche, hauptsatz-12]
      ni(
        'Berechne $\\int_{0}^{2} (-x)\\,dx$. Achte auf das Vorzeichen.',
        -2,
        0.001,
        '',
        `**Ansatz:** Hauptsatz mit Stammfunktion $-\\dfrac{x^{2}}{2}$ — Vorzeichen verfolgen.

**Rechnung:** $F(x) = -\\dfrac{x^{2}}{2}$. $F(2) = -2$. $F(0) = 0$. $\\int_{0}^{2} (-x)\\,dx = F(2) - F(0) = -2 - 0 = -2$.

**Probe:** $F'(x) = -x$ ✓. Geometrisch: $-x < 0$ auf $(0, 2]$ — Integral muss negativ sein. ✓ Geometrische Fläche $= |{-2}| = 2$.

**Typischer Fehler:** Betrag nehmen "weil Flächen positiv sind" — das *Integral* einer negativen Funktion ist aber negativ.`,
        [
          'Stammfunktion: $\\int -x\\,dx = -\\dfrac{x^{2}}{2}$.',
          '$F(2) = -2$, $F(0) = 0$.',
          'Differenz: $-2 - 0 = -2$ (negativ, weil $-x < 0$).',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['geom-flaeche', 'hauptsatz-12'] },
      ),

      // Matrix-Zeile 9: SG 1 · error-analysis · multiple-choice · uses=[geom-flaeche]
      mc(
        'Lisa berechnet $\\int_{-2}^{0} x^{3}\\,dx$ und kommt auf $-4$. Sie schreibt: „Die Fläche ist also $-4$." Was ist der Fehler in ihrer Aussage?',
        [
          'Das Integral ist $-4$ (korrekt berechnet), aber die FLÄCHE im geometrischen Sinn ist $|{-4}| = 4$. Lisa verwechselt den Integralwert (mit Vorzeichen) mit dem Flächeninhalt (immer $\\geq 0$).',
          'Lisa hat das Integral falsch berechnet — korrekt wäre $+4$, also auch die Fläche $4$.',
          'Die Stammfunktion $\\dfrac{x^{4}}{4}$ ist falsch — korrekt wäre $\\dfrac{x^{4}}{3}$.',
          'Bei negativen Grenzen darf man nicht integrieren, daher ist die Antwort $-4$ ohnehin nicht aussagekräftig.',
        ],
        0,
        `**Ansatz:** Integralwert und geometrische Fläche unterscheiden — das Integral ist signiert, die Fläche nicht.

**Rechnung:** $F(x) = \\dfrac{x^{4}}{4}$. $F(0) = 0$, $F(-2) = \\dfrac{16}{4} = 4$. $\\int_{-2}^{0} x^{3}\\,dx = F(0) - F(-2) = 0 - 4 = -4$. Lisas Rechnung ist korrekt.

**Probe:** Geometrisch ist $x^{3} < 0$ auf $[-2, 0)$ — also Integral negativ. ✓ Aber die FLÄCHE zwischen Kurve und x-Achse auf $[-2, 0]$ ist $|{-4}| = 4$ (positiver Wert).

**Typischer Fehler:** "Fläche = Integral" gilt nur für $f \\geq 0$. Bei $f < 0$ ist Fläche $= |\\text{Integral}|$.`,
        [
          'Lisas Rechnung ist mathematisch okay — was stimmt mit ihrem WORT "Fläche" nicht?',
          'Was ist das Vorzeichen einer geometrischen Fläche?',
          'Der Integralwert kann negativ sein, die geometrische Fläche nicht.',
        ],
        {
          1: 'Lisas Rechnung ist richtig: $F(0) - F(-2) = 0 - 4 = -4$. Das Integral ist tatsächlich $-4$, nicht $+4$. Der Fehler liegt nicht in der Berechnung, sondern in der Interpretation.',
          2: 'Die Stammfunktion $\\dfrac{x^{4}}{4}$ ist KORREKT (Potenzregel: Exponent $3 \\to 4$, Faktor $1/4$). Probe: $\\left(\\dfrac{x^{4}}{4}\\right)\' = x^{3}$ ✓.',
          3: 'Integration funktioniert für jedes Intervall — auch mit negativen Grenzen. Die Aussage "$-4$ aussagekräftig" ist sehr wohl gerechtfertigt: das Integral hat Vorzeichen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['geom-flaeche'] },
      ),

      // Matrix-Zeile 10: SG 1 · transfer · multiple-choice · uses=[geom-flaeche]
      mc(
        'Eine Funktion $f$ erfüllt $f(x) > 0$ für $x \\in [0, 1]$ und $f(x) < 0$ für $x \\in [1, 2]$. Was bedeutet $\\int_{0}^{2} f(x)\\,dx = 0$ geometrisch?',
        [
          'Die Fläche oberhalb der x-Achse ($[0,1]$) und die Fläche unterhalb ($[1,2]$) sind betragsmäßig gleich groß — das Integral zählt sie mit umgekehrten Vorzeichen, sodass sich der Wert zu null aufhebt. Die geometrischen Flächen heben sich NICHT auf, sie sind nur gleich.',
          '$f$ ist konstant null auf $[0, 2]$.',
          '$f$ ist nicht integrierbar — null ist ein Hinweis auf Divergenz.',
          'Das Integral kann nie null sein, wenn $f$ nicht überall null ist — die Aufgabe enthält einen Widerspruch.',
        ],
        0,
        `**Ansatz:** Signiertheit des Integrals — positive und negative Anteile addieren sich.

**Rechnung:** $\\int_{0}^{2} f\\,dx = \\int_{0}^{1} f\\,dx + \\int_{1}^{2} f\\,dx = A_{+} + (-A_{-})$, wobei $A_{+} > 0$ (Fläche oberhalb) und $A_{-} > 0$ (Fläche unterhalb, aber mit Minus, weil $f < 0$). Die Summe ist null, also $A_{+} = A_{-}$ — die geometrischen Flächen sind betragsmäßig gleich.

**Probe:** Beispiel: $f(x) = \\sin(\\pi x)$ auf $[0, 2]$. $\\int_{0}^{2} \\sin(\\pi x)\\,dx = 0$, weil die positive Halbwelle und die negative Halbwelle gleich große Flächen einschließen.

**Typischer Fehler:** Annehmen, "Integral $= 0$" heißt "$f \\equiv 0$". Tatsächlich kann das Integral null sein, wenn sich Flächen mit umgekehrten Vorzeichen aufheben.`,
        [
          'Was passiert, wenn ein Teil von $f$ positiv und ein Teil negativ ist?',
          'Riemann-Summe: positive Summanden $+$ negative Summanden = ?',
          'Beispiel: $\\sin(x)$ auf $[0, 2\\pi]$ — was ergibt $\\int$?',
        ],
        {
          1: '$f$ ist nach Annahme NICHT null: positiv auf $[0,1]$, negativ auf $[1,2]$. Das Integral kann trotzdem null sein, wenn sich positive und negative Anteile aufheben.',
          2: 'Integrierbarkeit hat nichts mit dem Wert null zu tun. Ein Integral kann sehr wohl exakt null werden, ohne dass die Funktion divergiert.',
          3: 'Doch — siehe das Beispiel $\\sin(x)$ auf $[0, 2\\pi]$: $\\int = 0$, obwohl $\\sin$ nicht überall null ist. Vorzeichenwechsel macht die Aufhebung möglich.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['geom-flaeche'] },
      ),
    ],

    // ── [2] Grenzen vertauschen dreht das Vorzeichen ──────────────────────
    2: [
      // Matrix-Zeile 11: SG 2 · recognize · true-false · uses=[grenzen-tausch]
      tf(
        'Wenn man die Integrationsgrenzen vertauscht, ändert sich das Vorzeichen des Integrals: $\\int_{a}^{b} f(x)\\,dx = -\\int_{b}^{a} f(x)\\,dx$.',
        true,
        `**Ansatz:** Folgt direkt aus dem Hauptsatz: $\\int_{a}^{b} f\\,dx = F(b) - F(a) = -(F(a) - F(b)) = -\\int_{b}^{a} f\\,dx$.

**Rechnung:** Beispiel $\\int_{1}^{4} 2x\\,dx = 16 - 1 = 15$ und $\\int_{4}^{1} 2x\\,dx = 1 - 16 = -15$. Vorzeichen ist tatsächlich umgedreht.

**Probe:** Konsistenz mit Additivität: $\\int_{a}^{a} f\\,dx = 0 = \\int_{a}^{b} f\\,dx + \\int_{b}^{a} f\\,dx$, also $\\int_{a}^{b} = -\\int_{b}^{a}$. ✓

**Typischer Fehler:** Beim Vertauschen der Grenzen das Vorzeichen vergessen — gibt das negative Endergebnis.`,
        [
          'Hauptsatz: $\\int_{a}^{b} = F(b) - F(a)$. Was ist $\\int_{b}^{a}$?',
          'Algebra: $F(a) - F(b) = -(F(b) - F(a))$.',
          'Probe an einem konkreten Beispiel: $\\int_{0}^{2} 2x\\,dx = 4$ und $\\int_{2}^{0} 2x\\,dx = -4$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['grenzen-tausch'] },
      ),

      // Matrix-Zeile 12: SG 2 · apply-guided · multiple-choice · uses=[grenzen-tausch]
      mc(
        'Bekannt: $\\int_{1}^{4} f(x)\\,dx = 7$. Was ist $\\int_{4}^{1} f(x)\\,dx$?',
        [
          '$-7$',
          '$7$',
          '$0$',
          '$14$',
        ],
        0,
        `**Ansatz:** Regel "Grenzen vertauschen → Vorzeichen drehen": $\\int_{a}^{b} = -\\int_{b}^{a}$.

**Rechnung:** $\\int_{4}^{1} f(x)\\,dx = -\\int_{1}^{4} f(x)\\,dx = -7$.

**Probe:** Summe der beiden ergibt null: $\\int_{1}^{4} + \\int_{4}^{1} = 7 + (-7) = 0 = \\int_{1}^{1} f\\,dx$. ✓

**Typischer Fehler:** Glauben, das Integral hängt nicht von der Reihenfolge der Grenzen ab — falsch, weil $F(b) - F(a) \\neq F(a) - F(b)$ im Allgemeinen.`,
        [
          'Regel: $\\int_{a}^{b} = -\\int_{b}^{a}$ — wie ändert sich der Wert beim Vertauschen?',
          '$\\int_{4}^{1} = -\\int_{1}^{4}$.',
          'Wenn $\\int_{1}^{4} = 7$, dann $\\int_{4}^{1} = -7$.',
        ],
        {
          1: 'Du hast die Reihenfolge ignoriert — Vertauschen ändert das Vorzeichen. Hauptsatz: $F(1) - F(4) = -(F(4) - F(1)) = -7$.',
          2: '$\\int_{4}^{1} = 0$ wäre nur wahr, wenn die Grenzen gleich wären ($\\int_{a}^{a} = 0$). Hier sind $4 \\neq 1$, also Vorzeichen-Drehung: $\\int_{4}^{1} = -7$.',
          3: '$14 = 2 \\cdot 7$ kommt nicht aus dem Vertauschen der Grenzen. Korrekt ist NEGATION: $\\int_{4}^{1} = -7$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['grenzen-tausch'] },
      ),

      // Matrix-Zeile 13: SG 2 · apply-independent · number-input · uses=[grenzen-tausch]
      ni(
        'Bekannt: $\\int_{0}^{3} f(x)\\,dx = 12$. Berechne $\\int_{3}^{0} f(x)\\,dx + \\int_{0}^{3} f(x)\\,dx$.',
        0,
        0,
        '',
        `**Ansatz:** Grenzen-Tausch-Regel anwenden: $\\int_{3}^{0} = -\\int_{0}^{3}$.

**Rechnung:** $\\int_{3}^{0} f\\,dx = -\\int_{0}^{3} f\\,dx = -12$. Summe: $-12 + 12 = 0$.

**Probe:** Allgemein gilt $\\int_{a}^{b} f\\,dx + \\int_{b}^{a} f\\,dx = 0$ für jede integrierbare Funktion (folgt aus dem Hauptsatz oder aus Additivität mit gleichen Grenzen).

**Typischer Fehler:** $\\int_{3}^{0} + \\int_{0}^{3} = 24$ rechnen — Grenzen-Tausch-Regel ignoriert.`,
        [
          'Was ist $\\int_{3}^{0} f\\,dx$ in Termen von $\\int_{0}^{3} f\\,dx$?',
          'Grenzen-Tausch-Regel: $\\int_{3}^{0} = -\\int_{0}^{3} = -12$.',
          'Summe: $-12 + 12$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['grenzen-tausch'] },
      ),

      // Matrix-Zeile 14: SG 2 · error-analysis · multiple-choice · uses=[grenzen-tausch]
      mc(
        'Tim soll $\\int_{5}^{2} (2x)\\,dx$ berechnen. Er sagt: „Die untere Grenze muss kleiner sein als die obere, also schreibe ich um zu $\\int_{2}^{5} (2x)\\,dx = F(5) - F(2) = 25 - 4 = 21$." Was ist der Fehler?',
        [
          'Tim hat einfach die Grenzen getauscht, ohne das Vorzeichen zu drehen. Die Regel lautet $\\int_{a}^{b} = -\\int_{b}^{a}$. Korrekt: $\\int_{5}^{2} (2x)\\,dx = -\\int_{2}^{5} (2x)\\,dx = -21$ (mit Minus, nicht $+21$).',
          'Tim hat richtig — die Reihenfolge der Grenzen ist im Integral egal, also $\\int_{5}^{2} = \\int_{2}^{5} = 21$.',
          'Tim hat $F(5) - F(2)$ falsch ausgewertet — korrekt wäre $F(2) - F(5) = -21$, weil Stammfunktionen rückwärts gelesen werden müssen.',
          'Bei Polynomen gilt eine Sonderregel: Grenzen dürfen ohne Vorzeichenwechsel vertauscht werden.',
        ],
        0,
        `**Ansatz:** Anwenden der Grenzen-Tausch-Regel — beim Umschreiben muss das Vorzeichen drehen.

**Rechnung:** $\\int_{5}^{2} (2x)\\,dx = -\\int_{2}^{5} (2x)\\,dx$. Letzteres mit Hauptsatz: $F(x) = x^{2}$, $F(5) - F(2) = 25 - 4 = 21$. Also $\\int_{5}^{2} (2x)\\,dx = -21$ (mit Minus).

**Probe:** Direkter Hauptsatz: $\\int_{5}^{2} (2x)\\,dx = F(2) - F(5) = 4 - 25 = -21$. ✓ Konsistent mit Grenzen-Tausch-Regel.

**Typischer Fehler:** Glauben, "Reihenfolge ist egal, weil ich integrieren kann" — das Integral selbst hängt sehr wohl von der Reihenfolge ab, sogar im Vorzeichen.`,
        [
          'Wie muss Tim das Vorzeichen anpassen, wenn er die Grenzen tauscht?',
          'Regel: $\\int_{a}^{b} = -\\int_{b}^{a}$ — minus, nicht gleich.',
          'Direkte Probe: $\\int_{5}^{2} (2x)\\,dx = F(2) - F(5) = -21$.',
        ],
        {
          1: 'Reihenfolge der Grenzen IST relevant — das Vorzeichen ändert sich. $\\int_{5}^{2} \\neq \\int_{2}^{5}$, sondern $\\int_{5}^{2} = -\\int_{2}^{5}$.',
          2: '$F(5) - F(2) = 21$ ist die korrekte Auswertung von $\\int_{2}^{5} (2x)\\,dx$ — Hauptsatz mit oberer Grenze minus untere. Tims Fehler liegt im VORZEICHEN beim Umschreiben.',
          3: 'Es gibt keine "Polynom-Sonderregel". Die Grenzen-Tausch-Regel gilt für ALLE integrierbaren Funktionen — und sie verlangt immer einen Vorzeichenwechsel.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['grenzen-tausch'] },
      ),

      // Matrix-Zeile 15: SG 2 · transfer · matching · uses=[grenzen-tausch]
      matching(
        'Gegeben: $\\int_{0}^{2} f(x)\\,dx = 5$ und $\\int_{2}^{7} f(x)\\,dx = 3$. Ordne jedem Integral seinen Wert zu.',
        [
          { left: '$\\int_{0}^{7} f(x)\\,dx$',   right: '$8$' },
          { left: '$\\int_{2}^{0} f(x)\\,dx$',   right: '$-5$' },
          { left: '$\\int_{7}^{2} f(x)\\,dx$',   right: '$-3$' },
          { left: '$\\int_{7}^{0} f(x)\\,dx$',   right: '$-8$' },
        ],
        `**Ansatz:** Additivität ($\\int_{a}^{c} = \\int_{a}^{b} + \\int_{b}^{c}$) und Grenzen-Tausch-Regel kombinieren.

**Rechnung:**
- $\\int_{0}^{7} f\\,dx = \\int_{0}^{2} + \\int_{2}^{7} = 5 + 3 = 8$.
- $\\int_{2}^{0} f\\,dx = -\\int_{0}^{2} = -5$.
- $\\int_{7}^{2} f\\,dx = -\\int_{2}^{7} = -3$.
- $\\int_{7}^{0} f\\,dx = -\\int_{0}^{7} = -8$.

**Probe:** Konsistenz: $\\int_{0}^{7} + \\int_{7}^{0} = 8 + (-8) = 0$ ✓. Vier verschiedene Werte ($8, -5, -3, -8$) — Zuordnung eindeutig.

**Typischer Fehler:** Bei $\\int_{7}^{0}$ einfach $\\int_{0}^{7} = 8$ schreiben — Grenzen-Tausch-Regel vergessen.`,
        [
          'Wende Additivität für $\\int_{0}^{7}$ an.',
          'Wende Grenzen-Tausch-Regel für $\\int_{2}^{0}$ und $\\int_{7}^{2}$ an.',
          'Kombiniere beide Regeln für $\\int_{7}^{0}$ — Tausch und Zerlegung.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['grenzen-tausch'] },
      ),
    ],

    // ── [3] Integrationskonstante $C$ kürzt sich beim bestimmten Integral ──
    3: [
      // Matrix-Zeile 16: SG 3 · recognize · true-false · uses=[c-faellt-weg]
      tf(
        'Beim bestimmten Integral fällt die Integrationskonstante $C$ heraus, weil sie sich beim Bilden der Differenz $F(b) - F(a)$ aufhebt: $(F(b) + C) - (F(a) + C) = F(b) - F(a)$.',
        true,
        `**Ansatz:** Algebraische Auswertung der Differenz.

**Rechnung:** Sei $\\tilde{F}(x) = F(x) + C$ (alternative Stammfunktion). Dann $\\tilde{F}(b) - \\tilde{F}(a) = (F(b) + C) - (F(a) + C) = F(b) + C - F(a) - C = F(b) - F(a)$. Das Ergebnis ist UNABHÄNGIG von $C$.

**Probe:** Konkret: $\\int_{1}^{3} 2x\\,dx$ mit $F(x) = x^{2}$ liefert $9 - 1 = 8$. Mit $\\tilde{F}(x) = x^{2} + 100$ liefert $\\tilde{F}(3) - \\tilde{F}(1) = 109 - 101 = 8$. ✓ Gleich.

**Typischer Fehler:** Bei der Berechnung künstlich ein $+C$ am Ende anhängen — beim bestimmten Integral ist die Antwort eine Zahl, kein Funktionsterm.`,
        [
          'Was passiert mit $C$ in der Differenz $(F(b) + C) - (F(a) + C)$?',
          'Algebraisch: $C$ kürzt sich heraus.',
          'Beispiel: probiere die Berechnung mit $F(x) = x^{2}$ und mit $F(x) = x^{2} + 50$ — gleicher Endwert?',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['c-faellt-weg'] },
      ),

      // Matrix-Zeile 17: SG 3 · apply-guided · multiple-choice · uses=[c-faellt-weg]
      mc(
        'Welche Aussage über das bestimmte Integral $\\int_{1}^{4} 2x\\,dx$ ist korrekt?',
        [
          'Egal welche Stammfunktion $F$ man wählt (z. B. $x^{2}$, $x^{2} + 7$, $x^{2} - 100$), das Ergebnis $F(4) - F(1)$ ist immer $15$, weil sich die Konstante herauskürzt.',
          'Man muss IMMER $C = 0$ wählen, sonst ergibt sich ein anderes Ergebnis.',
          'Die Wahl von $C$ verändert das Ergebnis um genau $C \\cdot (b - a)$.',
          'Das bestimmte Integral hängt von $C$ ab — Standardkonvention ist $C = 0$.',
        ],
        0,
        `**Ansatz:** Beweis über $\\tilde{F}(x) = F(x) + C$ — Differenz auswerten.

**Rechnung:** $\\tilde{F}(b) - \\tilde{F}(a) = F(b) + C - F(a) - C = F(b) - F(a)$. Bei $\\int_{1}^{4} 2x\\,dx$ mit $F(x) = x^{2} + C$: $(16 + C) - (1 + C) = 15$ — unabhängig von $C$.

**Probe:** Drei Versuche mit verschiedenen $C$: $C = 0$ → $16 - 1 = 15$; $C = 7$ → $23 - 8 = 15$; $C = -100$ → $-84 - (-99) = 15$. ✓ Alle gleich.

**Typischer Fehler:** Bei bestimmten Integralen wird oft "$+C$" am Ende geschrieben — falsch, das Ergebnis ist eine konkrete Zahl, kein Funktionsterm.`,
        [
          'Was passiert, wenn man $F(x) + C$ statt $F(x)$ nutzt — verändert das die Differenz $F(b) - F(a)$?',
          'Konkret: rechne $\\int_{1}^{4} 2x\\,dx$ mit $F(x) = x^{2}$ und mit $F(x) = x^{2} + 1000$.',
          'Verglichen: gleicher Wert?',
        ],
        {
          1: '$C = 0$ ist nur eine bequeme Wahl — JEDER Wert von $C$ liefert dasselbe Ergebnis. Probe: $\\int_{1}^{4} 2x\\,dx$ mit $C = 7$: $(16 + 7) - (1 + 7) = 23 - 8 = 15$, also gleich.',
          2: '$C \\cdot (b - a)$ würde gelten, wenn $\\tilde{F}(x) = F(x) + C \\cdot x$ wäre — das ist aber nicht die Form einer Stammfunktion. Bei $\\tilde{F}(x) = F(x) + C$ kürzt sich $C$ vollständig.',
          3: 'Falsch — das bestimmte Integral ist UNABHÄNGIG von der Wahl der Stammfunktion (also von $C$). Es gibt keine Standardkonvention $C = 0$, weil $C$ immer wegfällt.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['c-faellt-weg'] },
      ),

      // Matrix-Zeile 18: SG 3 · apply-independent · multiple-choice · uses=[c-faellt-weg]
      mc(
        'Eine Stammfunktion von $f(x) = 4x$ ist $F(x) = 2x^{2} + 7$ (mit $C = 7$). Berechne $\\int_{0}^{3} 4x\\,dx$ unter Verwendung genau dieser Stammfunktion.',
        [
          '$F(3) - F(0) = (18 + 7) - (0 + 7) = 25 - 7 = 18$',
          '$F(3) + F(0) = (18 + 7) + (0 + 7) = 32$',
          '$F(3) = 18 + 7 = 25$',
          '$F(3) - F(0) - C = 25 - 7 - 7 = 11$',
        ],
        0,
        `**Ansatz:** Hauptsatz mit der konkreten Stammfunktion: $\\int_{0}^{3} 4x\\,dx = F(3) - F(0)$.

**Rechnung:** $F(3) = 2 \\cdot 9 + 7 = 25$. $F(0) = 0 + 7 = 7$. Differenz: $25 - 7 = 18$. Die $7$ kürzt sich gegen die $7$ (denn beide haben dasselbe $C$).

**Probe:** Mit $F(x) = 2x^{2}$ ($C = 0$): $F(3) - F(0) = 18 - 0 = 18$. ✓ Gleich. Direkt: $\\int_{0}^{3} 4x\\,dx = 2x^{2} \\big|_{0}^{3} = 18$.

**Typischer Fehler:** $C$ vom Endergebnis abziehen — das passiert bereits automatisch bei der Differenz $F(b) - F(a)$.`,
        [
          'Hauptsatz: $\\int_{a}^{b} f\\,dx = F(b) - F(a)$.',
          'Setze $F(x) = 2x^{2} + 7$ ein — bei $x = 0$ und $x = 3$ je den $7$-Anteil.',
          'Differenz bilden: die $7$ aus $F(3)$ und die $7$ aus $F(0)$ heben sich auf.',
        ],
        {
          1: 'Hauptsatz verlangt DIFFERENZ, nicht Summe. $F(3) + F(0)$ hätte keinen Bezug zum bestimmten Integral. Korrekt: $F(3) - F(0) = 18$.',
          2: 'Du hast nur den oberen Wert eingesetzt, aber den Hauptsatz nicht zu Ende geführt. Es muss $F(3) - F(0)$ sein, nicht $F(3)$ allein. Damit wird auch das $+7$ aus der unteren Grenze wegsubtrahiert.',
          3: 'Die Konstante $C = 7$ kürzt sich BEREITS in der Differenz $F(3) - F(0)$ raus — sie noch einmal abzuziehen ist doppelt gemoppelt. Korrekt: einfach $25 - 7 = 18$.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['c-faellt-weg'] },
      ),

      // Matrix-Zeile 19: SG 3 · error-analysis · multiple-choice · uses=[c-faellt-weg]
      mc(
        'Lukas behauptet: „Wenn ich beim bestimmten Integral $\\int_{1}^{3} 2x\\,dx$ statt der Stammfunktion $F(x) = x^{2}$ die Stammfunktion $\\tilde{F}(x) = x^{2} + 5$ verwende, bekomme ich ein anderes Ergebnis." Was ist der Fehler in seiner Behauptung?',
        [
          'Stammfunktionen unterscheiden sich nur um eine additive Konstante, die sich beim Bilden der Differenz $\\tilde{F}(b) - \\tilde{F}(a)$ wegkürzt: $(9 + 5) - (1 + 5) = 8 = 9 - 1$. Das bestimmte Integral ist UNABHÄNGIG von der Wahl der Stammfunktion.',
          'Lukas hat richtig — verschiedene Stammfunktionen liefern verschiedene bestimmte Integrale.',
          'Lukas muss am Ende noch $+C$ addieren, dann stimmt es.',
          '$\\tilde{F}(x) = x^{2} + 5$ ist keine Stammfunktion von $2x$, daher die Diskrepanz.',
        ],
        0,
        `**Ansatz:** Differenz $\\tilde{F}(b) - \\tilde{F}(a)$ explizit berechnen.

**Rechnung:** $\\tilde{F}(3) - \\tilde{F}(1) = (9 + 5) - (1 + 5) = 14 - 6 = 8$. Mit $F(x) = x^{2}$: $F(3) - F(1) = 9 - 1 = 8$. ✓ Gleich.

**Probe:** Allgemein: $\\tilde{F}(b) - \\tilde{F}(a) = (F(b) + C) - (F(a) + C) = F(b) - F(a)$. Konstante kürzt sich, egal welcher Wert.

**Typischer Fehler:** Glauben, das bestimmte Integral hänge von der Wahl der Stammfunktion ab — tatsächlich ist es DER Wert, der unabhängig von $C$ ist.`,
        [
          'Rechne $\\tilde{F}(3) - \\tilde{F}(1)$ explizit aus.',
          'Vergleiche mit $F(3) - F(1) = 9 - 1 = 8$.',
          'Was passiert mit der $5$ in der Differenz?',
        ],
        {
          1: 'Falsch — verschiedene Stammfunktionen liefern IMMER dasselbe bestimmte Integral, weil sich Konstanten wegkürzen. Probe: mit $\\tilde{F} = x^{2} + 5$ ist $\\tilde{F}(3) - \\tilde{F}(1) = 14 - 6 = 8 = F(3) - F(1)$.',
          2: 'Beim bestimmten Integral wird $+C$ NICHT addiert — das Ergebnis ist eine Zahl, kein Funktionsterm. Die $C$-Frage erledigt sich durch das Wegkürzen automatisch.',
          3: 'Probe: $(\\tilde{F})\'(x) = (x^{2} + 5)\' = 2x$ ✓. $\\tilde{F}$ IST eine Stammfunktion von $2x$. Lukas\' Fehler ist NICHT die Wahl der Stammfunktion, sondern das Glauben, dass sie das Ergebnis ändert.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['c-faellt-weg'] },
      ),

      // Matrix-Zeile 20: SG 3 · transfer · multiple-choice · uses=[c-faellt-weg, hauptsatz-12]
      mc(
        'Sei $F$ eine BELIEBIGE Stammfunktion von $f$ und es gelte $\\int_{0}^{5} f(x)\\,dx = 12$. Was ergibt $F(5) - F(0)$?',
        [
          '$12$ — per Hauptsatz, unabhängig von der konkreten Wahl von $F$ (also unabhängig von $C$).',
          '$0$ — die Konstante $C$ kürzt sich raus, also bleibt nichts.',
          '$-12$ — Differenzen drehen das Vorzeichen.',
          'Hängt von $F$ ab — verschiedene Stammfunktionen liefern verschiedene Werte.',
        ],
        0,
        `**Ansatz:** Hauptsatz Teil 2: $\\int_{a}^{b} f\\,dx = F(b) - F(a)$ — und dieses Ergebnis ist unabhängig von der Wahl der Stammfunktion.

**Rechnung:** Per Definition ist $\\int_{0}^{5} f(x)\\,dx = F(5) - F(0)$ für jede Stammfunktion $F$. Da $\\int_{0}^{5} f\\,dx = 12$, folgt direkt $F(5) - F(0) = 12$.

**Probe:** Wenn $F$ und $\\tilde{F}$ zwei Stammfunktionen sind, unterscheiden sie sich nur um $C$. Differenzen heben das $C$ auf: $(F + C)(5) - (F + C)(0) = F(5) - F(0) = 12$. ✓

**Typischer Fehler:** Glauben, "$C$ kürzt sich" bedeute "$F(b) - F(a) = 0$" — tatsächlich kürzt sich nur die Konstante, das echte $f$-abhängige Ergebnis bleibt.`,
        [
          'Was ist die Aussage des Hauptsatzes?',
          'Hängt $F(b) - F(a)$ von $C$ ab oder nicht?',
          'Gegeben $\\int_{0}^{5} f\\,dx = 12$ — was sagt der Hauptsatz direkt über $F(5) - F(0)$?',
        ],
        {
          1: 'Falsch — "$C$ kürzt sich" bedeutet, dass die Differenz nicht von $C$ abhängt, NICHT dass die Differenz null wird. Beispiel: $\\int_{0}^{2} 2x\\,dx = 4$, also $F(2) - F(0) = 4$, nicht $0$.',
          2: 'Falsch — Hauptsatz definiert $\\int_{a}^{b} = F(b) - F(a)$, nicht $-(F(b) - F(a))$. Vorzeichen passt zur Reihenfolge der Grenzen, hier $0 < 5$, also positiv.',
          3: 'Falsch — gerade die Eleganz des Hauptsatzes ist, dass $F(b) - F(a)$ UNABHÄNGIG von der Wahl der Stammfunktion ist (denn $C$ kürzt sich raus). Gleicher Wert für jede Stammfunktion.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['c-faellt-weg', 'hauptsatz-12'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // int-3-4 — Bogenlänge & Durchschnittswert  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'int-3-4': {

    // ── [0] Bogenlänge $L = \int \sqrt{1 + [f'(x)]^2}\,dx$ ──────────────
    0: [
      mc(
        'Woher kommt die Wurzel $\\sqrt{1 + [f\'(x)]^2}$ in der Bogenlängen-Formel?',
        [
          'Aus Pythagoras: $ds^2 = dx^2 + dy^2$, und $dy = f\'(x)\\,dx$',
          'Aus der Kettenregel: $d/dx\\,[f(x)^2] = 2f(x)f\'(x)$',
          'Aus dem Mittelwertsatz: $f(b)-f(a) = f\'(\\xi)(b-a)$',
          'Aus der Linearität des Integrals',
        ],
        0,
        `**Ansatz:** Am differentiellen Dreieck mit horizontaler Seite $dx$ und vertikaler Seite $dy$ folgt mit Pythagoras das Bogenelement $ds = \\sqrt{(dx)^2 + (dy)^2}$.

**Rechnung:** $dy = f\'(x)\\,dx$ einsetzen: $ds = \\sqrt{(dx)^2 + (f\'(x)\\,dx)^2} = \\sqrt{1 + [f\'(x)]^2}\\,dx$. Integration liefert $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx$.

**Probe:** Gerade $y = x$ auf $[0,3]$ mit $f\'(x) = 1$: $L = \\int_0^3 \\sqrt{2}\\,dx = 3\\sqrt{2} \\approx 4{,}24$. Geometrie-Check: Gerade von $(0,0)$ nach $(3,3)$ hat Länge $\\sqrt{18} = 3\\sqrt{2}$. ✓

**Typischer Fehler:** "Die 1 ist ein Tippfehler" — nein, sie ist der unvermeidliche $dx$-Anteil. Ohne die 1 würde eine horizontale Linie ($f\' = 0$) Länge 0 bekommen.`,
        [
          'Wie lang ist ein kleines Kurvenstück $ds$ geometrisch?',
          'Pythagoras am Dreieck mit Katheten $dx$ und $dy$.',
          '$dy = f\'(x)\\,dx$ — also $ds = \\sqrt{1 + f\'^2}\\,dx$.',
        ],
        {
          1: 'Kettenregel ist die Ableitung verketteter Funktionen — hat nichts mit Bogenlänge zu tun.',
          2: 'Der Mittelwertsatz der Differentialrechnung liefert keine Bogenlänge — er ist eine Aussage über Existenz einer Zwischenstelle.',
          3: 'Linearität des Integrals erklärt, warum $\\int(f+g) = \\int f + \\int g$ — aber nicht, warum die Wurzel auftaucht.',
        },
      ),
      ni(
        'Berechne die Bogenlänge der Geraden $f(x) = 2x + 1$ auf $[0, 4]$ (auf 2 Nachkommastellen).',
        8.94, 0.02, '',
        `**Ansatz:** Für jede Gerade $f(x) = mx + c$ ist $f\'(x) = m$ konstant, also ist der Integrand konstant und das Integral trivial.

**Rechnung:** $f\'(x) = 2 \\Rightarrow L = \\int_0^4 \\sqrt{1 + 4}\\,dx = \\sqrt{5} \\cdot 4 \\approx 2{,}2361 \\cdot 4 \\approx 8{,}94$.

**Probe:** Startpunkt $(0, 1)$, Endpunkt $(4, 9)$. Direkte Entfernung $\\sqrt{4^2 + 8^2} = \\sqrt{80} = 4\\sqrt{5} \\approx 8{,}94$. ✓ (Bei Geraden ist Bogenlänge = direkte Entfernung.)

**Typischer Fehler:** $\\int (1 + f\'^2)\\,dx$ statt $\\int \\sqrt{1 + f\'^2}\\,dx$ — ohne Wurzel bekommst du $5 \\cdot 4 = 20$, also das Quadrat der richtigen Antwort mal der Intervallbreite.`,
        [
          'Ableitung $f\'(x) = ?$',
          'Integrand ist konstant — also Integral = Konstante · Intervallbreite.',
          '$L = \\sqrt{1 + m^2} \\cdot (b - a)$.',
        ],
      ),
      tf(
        'Für jede stetig differenzierbare Funktion gilt $L \\geq b - a$, mit Gleichheit genau für horizontale Geraden.',
        true,
        `**Ansatz:** Der Integrand $\\sqrt{1 + [f\'(x)]^2} \\geq \\sqrt{1} = 1$ für alle $x$, mit Gleichheit genau wenn $f\'(x) = 0$.

**Rechnung:** $L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx \\geq \\int_a^b 1\\,dx = b-a$. Gleichheit genau wenn $f\' \\equiv 0$ auf $[a,b]$, also $f$ konstant.

**Probe:** $f(x) = c$ (Konstante) → $f\' = 0$ → $L = b-a$. Für jede nicht-konstante Funktion ist die Kurve irgendwo nicht horizontal, dort $f\'^2 > 0$, und der Integrand $> 1$. Dann $L > b-a$.

**Typischer Fehler:** Annehmen, die Aussage gelte auch für schräge Geraden. Eine schräge Gerade ($m \\neq 0$) hat $L = \\sqrt{1+m^2}(b-a) > b-a$. Nur horizontale Geraden ($m=0$) haben $L = b-a$.`,
        [
          'Was ist der kleinstmögliche Wert des Integranden?',
          '$1 + [f\'(x)]^2 \\geq 1$, also Wurzel $\\geq 1$.',
          'Gleichheit nur bei $f\' \\equiv 0$.',
        ],
      ),
      ni(
        'Berechne die Bogenlänge der Kurve $f(x) = \\dfrac{x^2}{4} - \\dfrac{\\ln x}{2}$ auf $[1, e]$ (auf 3 Nachkommastellen).',
        2.097, 0.01, '',
        `**Ansatz:** Die Funktion ist bewusst so konstruiert, dass $1 + [f\'(x)]^2$ ein **vollständiges Quadrat** ergibt — die Wurzel lässt sich dann ohne Mühe ziehen.

**Rechnung:** $f\'(x) = \\dfrac{x}{2} - \\dfrac{1}{2x}$. Dann $[f\'(x)]^2 = \\dfrac{x^2}{4} - \\dfrac{1}{2} + \\dfrac{1}{4x^2}$, also $1 + [f\'(x)]^2 = \\dfrac{x^2}{4} + \\dfrac{1}{2} + \\dfrac{1}{4x^2} = \\left(\\dfrac{x}{2} + \\dfrac{1}{2x}\\right)^2$.

Wurzel auf $[1,e]$ (beide Summanden positiv): $\\sqrt{1 + [f\'(x)]^2} = \\dfrac{x}{2} + \\dfrac{1}{2x}$.

$L = \\int_1^e \\left(\\dfrac{x}{2} + \\dfrac{1}{2x}\\right)dx = \\left[\\dfrac{x^2}{4} + \\dfrac{\\ln x}{2}\\right]_1^e = \\left(\\dfrac{e^2}{4} + \\dfrac{1}{2}\\right) - \\left(\\dfrac{1}{4} + 0\\right) = \\dfrac{e^2 + 1}{4}$.

Numerisch: $e^2 \\approx 7{,}389$, also $L \\approx 8{,}389/4 \\approx 2{,}097$.

**Probe:** Endpunkt $f(e) \\approx 1{,}347$, Startpunkt $f(1) = 0{,}25$. Direkter Abstand $\\sqrt{(e-1)^2 + (1{,}097)^2} \\approx 2{,}039$. Bogenlänge $2{,}097 > 2{,}039$ — plausibel. ✓

**Typischer Fehler:** Wurzel nicht als Binom erkennen und versuchen, numerisch zu integrieren, ohne die Struktur zu nutzen. Bei Bogenlängen-Aufgaben: immer prüfen, ob $1 + [f\']^2$ ein Quadrat ist.`,
        [
          'Berechne $f\'(x)$ und quadriere.',
          'Prüfe: Ist $1 + [f\'(x)]^2$ ein vollständiges Quadrat $(A + B)^2$?',
          'Wenn ja, wird die Wurzel einfach $A+B$ (bei positivem Inhalt).',
        ],
      ),
      matching(
        'Ordne jeder Funktion die Bogenlänge auf dem gegebenen Intervall zu.',
        [
          { left: '$f(x) = 3$ auf $[0, 5]$ (horizontale Gerade)', right: '$L = 5$' },
          { left: '$f(x) = x$ auf $[0, 1]$', right: '$L = \\sqrt{2}$' },
          { left: '$f(x) = 4x + 7$ auf $[0, 2]$', right: '$L = 2\\sqrt{17}$' },
          { left: '$f(x) = c$ konstant auf $[a, b]$', right: '$L = b - a$' },
        ],
        `**Ansatz:** Für Geraden $f(x) = mx + c$ ist $L = \\sqrt{1+m^2} \\cdot (b-a)$. Für Konstanten ($m=0$) reduziert sich das zu $b-a$.

**Rechnung:**
- $f(x) = 3$, $m=0$: $L = 1 \\cdot 5 = 5$.
- $f(x) = x$, $m=1$: $L = \\sqrt{2} \\cdot 1 = \\sqrt{2}$.
- $f(x) = 4x+7$, $m=4$: $L = \\sqrt{17} \\cdot 2 = 2\\sqrt{17}$.
- $f = c$: wie Fall 1 auf beliebigem $[a,b]$.

**Probe:** Jede Gerade $(x_1, y_1) \\to (x_2, y_2)$ hat Bogenlänge = direkter Abstand. Case 3: $\\sqrt{(2-0)^2 + (15-7)^2} = \\sqrt{4+64} = \\sqrt{68} = 2\\sqrt{17}$. ✓

**Typischer Fehler:** Konstante Funktionen ($m=0$) verwechseln mit $L=0$ — gerade horizontal hat $L = b-a$, nicht null. Die Länge ist die **horizontale Strecke**.`,
        [
          'Formel für Geraden: $L = \\sqrt{1+m^2}(b-a)$.',
          'Konstante Funktion: $m = 0$, $L = b-a$.',
          'Bogenlänge = geometrische Länge der Geraden.',
        ],
      ),
    ],

    // ── [1] Durchschnittswert $\bar f = \frac{1}{b-a}\int f\,dx$ ─────────
    1: [
      ni(
        'Berechne den Durchschnittswert von $f(x) = \\sin x$ auf $[0, \\pi]$ (auf 3 Nachkommastellen).',
        0.637, 0.005, '',
        `**Ansatz:** Durchschnittswert-Formel: $\\bar{f} = \\dfrac{1}{b-a}\\int_a^b f\\,dx$.

**Rechnung:** $\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$. $\\bar{f} = \\dfrac{1}{\\pi - 0} \\cdot 2 = \\dfrac{2}{\\pi} \\approx 0{,}637$.

**Probe:** $\\sin x$ ist auf $[0,\\pi]$ positiv, max $= 1$ (bei $\\pi/2$), min $= 0$ (an den Rändern). Ein Mittelwert von $\\approx 0{,}64$ liegt plausibel zwischen 0 und 1 und unterhalb von $0{,}5$-naher "reiner Rechteck-Näherung" wäre überraschend, aber $2/\\pi$ ist exakt richtig.

**Typischer Fehler:** $\\dfrac{\\sin 0 + \\sin\\pi}{2} = 0$ rechnen (arithmetisches Mittel der Randwerte) statt Integralmittel — das ignoriert die Funktionsform komplett.`,
        [
          'Integriere $\\sin x$ auf $[0, \\pi]$.',
          '$\\int_0^\\pi \\sin x\\,dx = 2$.',
          'Durch $\\pi$ teilen: $2/\\pi \\approx 0{,}637$.',
        ],
      ),
      mc(
        'Warum teilt man durch $(b-a)$?',
        [
          'Damit das Ergebnis die Dimension von $f$ hat (nicht Dimension Fläche)',
          'Damit das Integral konvergiert',
          'Weil die Ableitung sonst falsch wäre',
          'Damit die Funktion differenzierbar wird',
        ],
        0,
        `**Ansatz:** Das Integral $\\int_a^b f(x)\\,dx$ hat Dimension $[f] \\cdot [x]$ (Fläche). Der Mittelwert soll aber die Dimension von $f$ selbst haben (z.B. Temperatur in °C, nicht °C·s).

**Rechnung:** Dimensionsanalyse: $\\bar{f} = \\dfrac{\\int f\\,dx}{b-a}$ hat $[f][x]/[x] = [f]$. ✓ Geometrische Deutung: Höhe des flächengleichen Rechtecks über $[a,b]$.

**Probe:** Für konstante Funktion $f(x) = c$: $\\int_a^b c\\,dx = c(b-a)$, geteilt durch $(b-a)$ gibt $c$ — der Durchschnitt einer Konstanten ist die Konstante selbst. ✓

**Typischer Fehler:** Die Normierung für "bloße Konvention" halten. Sie ist zwingend für Dimensions- und Wertebereich-Konsistenz.`,
        [
          'Welche Einheit hat $\\int_a^b f\\,dx$?',
          'Vergleiche mit der Einheit von $f$ selbst.',
          'Geometrisch: Rechteckfläche = Fläche unter der Kurve.',
        ],
        {
          1: 'Bei beschränktem Integrationsintervall und stetigem $f$ konvergiert das Integral immer. Die Normierung dient nicht der Konvergenz.',
          2: 'Die Ableitung spielt hier keine Rolle — $\\bar f$ ist eine Zahl, keine Funktion, die man ableitet.',
          3: 'Differenzierbarkeit wird durch Division nicht beeinflusst.',
        },
      ),
      tf(
        'Der Durchschnittswert einer nicht-konstanten Funktion kann mit dem arithmetischen Mittel der Randwerte $(f(a)+f(b))/2$ übereinstimmen, muss es aber nicht.',
        true,
        `**Ansatz:** Das arithmetische Mittel der Randwerte ist die Trapezregel-Näherung — sie stimmt mit dem Integralmittel nur für bestimmte Funktionen exakt überein (z.B. lineare Funktionen).

**Rechnung:** Lineare Funktion $f(x) = mx + c$: $\\int_a^b f\\,dx = \\tfrac{m}{2}(b^2-a^2) + c(b-a) = \\tfrac{m}{2}(a+b)(b-a) + c(b-a)$. Geteilt durch $(b-a)$: $\\bar{f} = \\tfrac{m(a+b)}{2} + c = \\tfrac{(ma+c)+(mb+c)}{2} = \\tfrac{f(a)+f(b)}{2}$. ✓ Genau der Randwert-Durchschnitt.

Gegenbeispiel: $f(x) = x^2$ auf $[0,2]$: $\\bar{f} = \\tfrac{1}{2}\\int_0^2 x^2\\,dx = \\tfrac{1}{2} \\cdot \\tfrac{8}{3} = \\tfrac{4}{3} \\approx 1{,}33$. Randmittel: $(0+4)/2 = 2$. Unterschiedlich.

**Probe:** Parabel liegt unterhalb der Sekante, also Integralmittel $<$ Randmittel — passt.

**Typischer Fehler:** Glauben, $\\bar f = (f(a)+f(b))/2$ gelte immer. Das ist nur für lineare Funktionen exakt.`,
        [
          'Für welche Funktionsklasse stimmen Randmittel und Integralmittel überein?',
          'Probiere eine Parabel — meistens unterscheiden sich die Werte.',
          'Lineare Funktionen: Randmittel = Integralmittel (exakte Trapezregel).',
        ],
      ),
      ni(
        'Ein Strom $i(t) = I_0 \\sin(\\omega t)$ mit $I_0 = 10\\,\\text{A}$. Wie groß ist der **Gleichrichtwert** (Durchschnitt des Absolutbetrags) über eine volle Periode $T = 2\\pi/\\omega$? (auf 3 Nachkommastellen in Ampere)',
        6.366, 0.01, 'A',
        `**Ansatz:** Gleichrichtwert $\\bar{|i|} = \\dfrac{1}{T}\\int_0^T |I_0 \\sin(\\omega t)|\\,dt$. Wegen Symmetrie: $\\bar{|i|} = \\dfrac{2}{T}\\int_0^{T/2} I_0 \\sin(\\omega t)\\,dt$.

**Rechnung:** Substitution $u = \\omega t$, $du = \\omega\\,dt$. Halbperiode entspricht $u \\in [0, \\pi]$. $\\int_0^{T/2} \\sin(\\omega t)\\,dt = \\dfrac{1}{\\omega}\\int_0^\\pi \\sin u\\,du = \\dfrac{2}{\\omega}$. Mit $T = 2\\pi/\\omega$: $\\bar{|i|} = \\dfrac{2}{2\\pi/\\omega} \\cdot \\dfrac{2 I_0}{\\omega} = \\dfrac{2 I_0}{\\pi} = \\dfrac{20}{\\pi} \\approx 6{,}366\\,\\text{A}$.

**Probe:** Einprägsame Formel aus der Elektrotechnik: $\\bar{|i|} = \\dfrac{2}{\\pi}I_0 \\approx 0{,}637 \\cdot I_0$. Effektivwert wäre $I_0/\\sqrt{2} \\approx 7{,}07\\,\\text{A}$ (größer, weil RMS quadratisch mittelt). ✓

**Typischer Fehler:** Ohne Betrag mitteln: $\\bar i = \\tfrac{1}{T}\\int_0^T I_0 \\sin(\\omega t)\\,dt = 0$ (positive und negative Halbwelle löschen sich aus). Gleichrichtwert braucht den Absolutbetrag.`,
        [
          'Gleichrichtwert = Mittelwert von $|i(t)|$, nicht von $i(t)$.',
          'Betrag aufheben durch Verdoppelung über eine Halbwelle.',
          'Ergebnis: $2 I_0 / \\pi$.',
        ],
      ),
      sorting(
        'Bringe die Schritte zur Berechnung des Durchschnittswerts von $f(x) = 4 - x^2$ auf $[-2, 2]$ in die richtige Reihenfolge.',
        [
          'Intervallbreite $b - a$ bestimmen ($= 4$)',
          'Stammfunktion $F(x) = 4x - x^3/3$ bilden',
          'Bestimmtes Integral $\\int_{-2}^{2} f\\,dx = F(2) - F(-2) = 32/3$ berechnen',
          'Durch Intervallbreite teilen: $\\bar f = (32/3)/4 = 8/3$',
          'Plausibilitäts-Check: Maximum $f(0) = 4$, Randwerte $0$, Mittelwert $8/3 \\approx 2{,}67$ — zwischen 0 und 4',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Immer Intervallbreite separat hinschreiben und ganz am Ende dividieren — dann verwechselt man die Normierung nicht.

**Rechnung:** $F(x) = 4x - x^3/3$. $F(2) = 8 - 8/3 = 16/3$, $F(-2) = -8 + 8/3 = -16/3$. Integral: $16/3 - (-16/3) = 32/3$. Durch 4: $\\bar f = 8/3$.

**Probe:** Parabel nach unten geöffnet, Scheitel $(0, 4)$, Nullstellen $\\pm 2$. Bekanntes Ergebnis: mittlere Höhe einer Parabel auf ihrem Null-zu-Null-Intervall ist $2/3$ der Höhe. $2/3 \\cdot 4 = 8/3$. ✓

**Typischer Fehler:** Schritt 4 vergessen und $32/3$ als Mittelwert angeben. Das ist das Integral (Fläche), nicht der Durchschnitt.`,
        [
          'Erst Intervallbreite merken.',
          'Integral sauber berechnen.',
          'Zum Schluss Normierung.',
        ],
      ),
    ],

    // ── [2] Parametrisierte Kurve $(x(t), y(t))$: $L = \int \sqrt{x'^2+y'^2}dt$
    2: [
      ni(
        'Bogenlänge der Kurve $x(t) = \\cos t$, $y(t) = \\sin t$ auf $t \\in [0, 2\\pi]$ (auf 3 Nachkommastellen).',
        6.283, 0.002, '',
        `**Ansatz:** Formel für parametrisierte Kurven: $L = \\int_{t_1}^{t_2} \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$.

**Rechnung:** $x\'(t) = -\\sin t$, $y\'(t) = \\cos t$. $x\'^2 + y\'^2 = \\sin^2 t + \\cos^2 t = 1$. $L = \\int_0^{2\\pi} 1\\,dt = 2\\pi \\approx 6{,}283$.

**Probe:** Die Kurve ist der Einheitskreis. Umfang $= 2\\pi r = 2\\pi$. ✓

**Typischer Fehler:** Die Bogenlängen-Formel für explizite Funktionen $\\sqrt{1+f\'^2}$ einsetzen wollen — aber ein voller Kreis ist keine Funktion $y = f(x)$ (nicht eindeutig). Nur die parametrisierte Form erfasst die Kurve komplett.`,
        [
          'Parametrisierung ist ein Kreis — welche Länge hat er?',
          'Pythagoras-Identität: $\\sin^2 + \\cos^2 = 1$.',
          'Integrand ist konstant 1.',
        ],
      ),
      mc(
        'Warum ist die parametrisierte Form **allgemeiner** als die explizite Formel $L = \\int\\sqrt{1 + f\'(x)^2}\\,dx$?',
        [
          'Sie funktioniert auch für Kurven, die keine Funktion $y = f(x)$ sind (z.B. Kreis, Schleifen)',
          'Sie liefert kürzere Ergebnisse',
          'Sie ist nur für Polarkoordinaten definiert',
          'Sie ignoriert die Richtung der Kurve',
        ],
        0,
        `**Ansatz:** Funktionsgraphen $y = f(x)$ müssen **eindeutig** sein (eine $y$-Wert pro $x$). Kurven wie Kreise oder Schleifen haben aber pro $x$-Wert mehrere $y$-Werte.

**Rechnung:** Die Parametrisierung $(x(t), y(t))$ erlaubt beliebige Kurven: der Kreis $(\\cos t, \\sin t)$ liefert für $t=\\pi/2$ und $t = 3\\pi/2$ zwei verschiedene $y$-Werte bei $x=0$. Die explizite Formel schafft das nicht.

**Probe:** Der Einheitskreis lässt sich oberhalb als $y = \\sqrt{1-x^2}$, unterhalb als $y = -\\sqrt{1-x^2}$ schreiben — zwei Funktionen. Parametrisch: eine einzige Formel deckt beides ab.

**Typischer Fehler:** Annahme, beide Formeln seien äquivalent. Die explizite Formel ist nur ein Spezialfall der parametrisierten mit $x(t) = t, y(t) = f(t)$ (dann $x\'=1$, $y\' = f\'$, und die Parametrisierung reduziert zu $\\sqrt{1+f\'^2}$).`,
        [
          'Ist ein Kreis der Graph einer Funktion $y = f(x)$?',
          'Wie viele $y$-Werte hat ein Kreis pro $x$?',
          'Parametrisierung erlaubt beliebige Bahnen.',
        ],
        {
          1: 'Die Länge einer Kurve hängt nicht von der Darstellungsform ab — beide Formeln liefern dasselbe Ergebnis, wo beide anwendbar sind.',
          2: 'Die parametrisierte Form gilt nicht nur für Polarkoordinaten; Polar ist ein Spezialfall.',
          3: 'Die Richtung (Orientierung) beeinflusst die Parametrisierung, aber beide Formeln sind auf Orientierung angewiesen (Integrationsgrenzen).',
        },
      ),
      ni(
        'Die Zykloidkurve $x(t) = t - \\sin t$, $y(t) = 1 - \\cos t$ beschreibt ein Punkt auf einem rollenden Einheitsrad. Berechne die Bogenlänge einer vollen Umdrehung ($t \\in [0, 2\\pi]$).',
        8, 0.01, '',
        `**Ansatz:** $x\'(t) = 1 - \\cos t$, $y\'(t) = \\sin t$. $(x\')^2 + (y\')^2 = (1-\\cos t)^2 + \\sin^2 t = 1 - 2\\cos t + \\cos^2 t + \\sin^2 t = 2 - 2\\cos t = 2(1-\\cos t)$.

Halbwinkel-Identität: $1 - \\cos t = 2\\sin^2(t/2)$. Also $(x\')^2+(y\')^2 = 4\\sin^2(t/2)$, Wurzel: $2|\\sin(t/2)| = 2\\sin(t/2)$ für $t \\in [0, 2\\pi]$ (dort $\\sin(t/2) \\geq 0$).

**Rechnung:** $L = \\int_0^{2\\pi} 2\\sin(t/2)\\,dt$. Substitution $u = t/2$, $du = dt/2$: $L = \\int_0^\\pi 2\\sin u \\cdot 2\\,du = 4\\int_0^\\pi \\sin u\\,du = 4 \\cdot 2 = 8$.

**Probe:** Eine volle Zykloide hat Bogenlänge $8R$ (für Kreisradius $R$). Bei $R=1$ also $L=8$. ✓ Bemerkenswert: $8 > 2\\pi R \\approx 6{,}28$, also länger als der Kreisumfang selbst.

**Typischer Fehler:** Die Halbwinkel-Identität nicht erkennen und numerisch statt analytisch integrieren. Ohne die Identität bleibt $\\sqrt{2-2\\cos t}$ sperrig.`,
        [
          'Berechne $(x\')^2 + (y\')^2$ und vereinfache.',
          'Halbwinkelformel: $1 - \\cos t = 2\\sin^2(t/2)$.',
          'Die berühmte Zykloide-Bogenlänge ist $8R$.',
        ],
      ),
      tf(
        'Die parametrisierte Bogenlängenformel ist geschwindigkeitsbasiert: $\\sqrt{x\'(t)^2 + y\'(t)^2}$ ist der Betrag des Geschwindigkeitsvektors $\\vec{v}(t)$.',
        true,
        `**Ansatz:** In der Mechanik ist $(x\'(t), y\'(t))$ der Geschwindigkeitsvektor $\\vec{v}$ eines Punkts auf der Bahn. Sein Betrag $|\\vec v| = \\sqrt{x\'^2 + y\'^2}$ ist die skalare Geschwindigkeit.

**Rechnung:** Weg $=$ Geschwindigkeit $\\cdot$ Zeit → differentiell: $ds = |\\vec v|\\,dt$. Integration: $L = \\int |\\vec v|\\,dt = \\int \\sqrt{x\'^2+y\'^2}\\,dt$.

**Probe:** Für gleichförmige Kreisbewegung $(\\cos t, \\sin t)$: $|\\vec v| = 1$ (Einheitsgeschwindigkeit), $L = t_2 - t_1$ = Dauer. Eine volle Umdrehung $2\\pi$-Zeitspanne entspricht $2\\pi$-Weg. ✓

**Typischer Fehler:** Denken, $t$ sei zwingend die physikalische Zeit. $t$ ist ein mathematischer Parameter — kann aber geometrisch als Zeit interpretiert werden, was die Formel intuitiv macht.`,
        [
          'Was ist $(x\'(t), y\'(t))$ geometrisch?',
          'In der Physik heißt $\\sqrt{v_x^2 + v_y^2}$ ...?',
          'Weg = Geschwindigkeit · Zeit (differentiell).',
        ],
      ),
      matching(
        'Ordne jeder Parametrisierung die Kurve zu.',
        [
          { left: '$x = \\cos t$, $y = \\sin t$, $t \\in [0, 2\\pi]$', right: 'Einheitskreis (einmal gegen den Uhrzeigersinn)' },
          { left: '$x = R\\cos t$, $y = R\\sin t$', right: 'Kreis mit Radius $R$ um den Ursprung' },
          { left: '$x = a\\cos t$, $y = b\\sin t$', right: 'Ellipse mit Halbachsen $a$ und $b$' },
          { left: '$x = t$, $y = f(t)$', right: 'Graph der Funktion $f$ (explizit)' },
        ],
        `**Ansatz:** Die Parametrisierung $(\\cos, \\sin)$ beschreibt Kreisbewegung; Skalierungen vor die Winkelfunktionen erzeugen Kreise/Ellipsen; $x = t$ liefert Funktionsgraphen.

**Rechnung:** Bei $(R\\cos t, R\\sin t)$: $x^2+y^2 = R^2$ — Kreis. Bei $(a\\cos t, b\\sin t)$: $(x/a)^2 + (y/b)^2 = 1$ — Ellipse. Bei $x=t, y=f(t)$: jeder Wert $t$ liefert Punkt $(t, f(t))$ — Funktionsgraph.

**Probe:** Die parametrisierte Bogenlängenformel funktioniert auf allen vier: Kreis $\\to 2\\pi$, Kreis Radius $R \\to 2\\pi R$, Ellipse $\\to$ elliptisches Integral (kein geschlossener Ausdruck), Funktionsgraph $\\to$ reduziert zu $\\sqrt{1+f\'^2}$.

**Typischer Fehler:** Ellipse mit "Standardkreis skaliert" verwechseln — die Bogenlänge einer Ellipse ist kein elementares Integral und wird historisch als "elliptisches Integral" bezeichnet.`,
        [
          '$(\\cos, \\sin)$ ist der Einheitskreis.',
          'Skalierungsfaktoren vor cos/sin geben Radien/Halbachsen.',
          '$x = t$ liefert Funktionsgraph (explizite Form).',
        ],
      ),
    ],

    // ── [3] Mittelwertsatz der Integralrechnung: $\exists \xi$ ──────────
    3: [
      tf(
        'Für jede stetige Funktion $f$ auf $[a,b]$ existiert mindestens ein Punkt $\\xi$ im Intervall, an dem $f(\\xi)$ gleich dem Durchschnittswert ist.',
        true,
        `**Ansatz:** Der Mittelwertsatz der Integralrechnung besagt: Ist $f$ stetig auf $[a,b]$, so existiert ein $\\xi \\in [a,b]$ mit $\\int_a^b f\\,dx = f(\\xi)(b-a)$, also $f(\\xi) = \\bar f$.

**Rechnung:** Beweisidee per Zwischenwertsatz: $f$ nimmt auf $[a,b]$ Minimum $m$ und Maximum $M$ an. Also $m \\leq \\bar f \\leq M$. Da $f$ stetig und zwischen $m$ und $M$ jeden Wert annimmt (Zwischenwertsatz), wird auch $\\bar f$ angenommen.

**Probe:** $f(x) = x^2$ auf $[0, 3]$: $\\bar f = \\tfrac{1}{3}\\int_0^3 x^2\\,dx = 3$. Gesucht: $\\xi$ mit $\\xi^2 = 3 \\Rightarrow \\xi = \\sqrt{3} \\approx 1{,}73 \\in [0,3]$. ✓

**Typischer Fehler:** Stetigkeit übersehen. Für unstetige Funktionen (z.B. Sprungfunktion) kann der Durchschnittswert **nicht** angenommen werden — der Satz braucht Stetigkeit zwingend.`,
        [
          'Was sagt der Zwischenwertsatz?',
          'Kombiniere mit Minimum/Maximum-Eigenschaft stetiger Funktionen.',
          'Stetigkeit ist wesentlich — bei Sprüngen scheitert der Satz.',
        ],
      ),
      ni(
        'Finde $\\xi \\in [0, 2]$ mit $f(\\xi) = \\bar f$ für $f(x) = x^2$ (auf 3 Nachkommastellen).',
        1.155, 0.01, '',
        `**Ansatz:** Erst Durchschnittswert berechnen, dann Gleichung $f(\\xi) = \\bar f$ nach $\\xi$ lösen.

**Rechnung:** $\\bar f = \\dfrac{1}{2}\\int_0^2 x^2\\,dx = \\dfrac{1}{2} \\cdot \\dfrac{8}{3} = \\dfrac{4}{3}$. Gleichung: $\\xi^2 = 4/3 \\Rightarrow \\xi = 2/\\sqrt{3} = 2\\sqrt{3}/3 \\approx 1{,}155$.

**Probe:** $\\xi \\approx 1{,}155 \\in [0, 2]$ ✓. $f(\\xi) = 4/3 \\approx 1{,}333 = \\bar f$ ✓.

**Typischer Fehler:** $\\xi = $ Intervallmitte $= 1$ annehmen. Das gälte nur bei linearer Funktion; bei Parabeln liegt $\\xi$ verschoben Richtung Seite mit größerer Steigung.`,
        [
          'Erst $\\bar f$ berechnen (Integral / Intervallbreite).',
          'Dann Gleichung $f(\\xi) = \\bar f$ lösen.',
          '$\\xi = \\sqrt{4/3}$.',
        ],
      ),
      mc(
        'Was garantiert der Mittelwertsatz **nicht**?',
        [
          'Eindeutigkeit des Punkts $\\xi$',
          'Existenz mindestens eines Punkts $\\xi$',
          'Dass $\\xi$ zwischen Minimum und Maximum von $f$ liegt',
          'Dass $\\bar f$ einen konkreten Wert hat',
        ],
        0,
        `**Ansatz:** Der Mittelwertsatz garantiert **Existenz**, nicht Eindeutigkeit. Bei oszillierenden oder nicht-monotonen Funktionen kann es mehrere $\\xi$ geben.

**Rechnung:** Beispiel $f(x) = \\sin x$ auf $[0, 2\\pi]$: $\\bar f = 0$. Gleichung $\\sin\\xi = 0$ hat auf $[0, 2\\pi]$ **drei** Lösungen: $\\xi = 0, \\pi, 2\\pi$. Mehrere Punkte erfüllen die Bedingung.

**Probe:** Bei monotoner Funktion (z.B. $f(x) = x$ oder $f(x) = x^2$ auf $[0,2]$) ist $\\xi$ eindeutig, aber das ist keine Garantie des Satzes.

**Typischer Fehler:** "Der Mittelwertsatz garantiert einen eindeutigen $\\xi$" — stimmt nicht. Existenz ja, Eindeutigkeit nur unter Zusatzbedingungen (z.B. strenge Monotonie).`,
        [
          'Welche Art von Aussage macht der Mittelwertsatz — Existenz oder Eindeutigkeit?',
          'Probiere $\\sin x$ auf einer vollen Periode.',
          'Nicht-monotone Funktionen können mehrere $\\xi$ haben.',
        ],
        {
          1: 'Die Existenz **ist** Kerngarantie des Satzes — sie ist genau das, was der Satz garantiert.',
          2: 'Das wird garantiert: $\\min f \\leq \\bar f \\leq \\max f$, also liegt $\\xi$ (als Argument des Mittelwerts) im gleichen Wertbereich.',
          3: 'Das Integral einer stetigen Funktion auf abgeschlossenem Intervall liefert immer eine Zahl; $\\bar f$ existiert.',
        },
      ),
      matching(
        'Ordne jeder Funktion den Mittelwert-Punkt $\\xi$ auf dem Intervall zu.',
        [
          { left: '$f(x) = x$ auf $[0, 4]$', right: '$\\xi = 2$ (Intervallmitte)' },
          { left: '$f(x) = 3$ (Konstante) auf $[a, b]$', right: 'jeder Punkt in $[a,b]$ erfüllt $f(\\xi) = \\bar f$' },
          { left: '$f(x) = x^3$ auf $[0, 2]$', right: '$\\xi = \\sqrt[3]{2} \\approx 1{,}26$' },
          { left: '$f(x) = e^x$ auf $[0, 1]$', right: '$\\xi = \\ln(e - 1) \\approx 0{,}541$' },
        ],
        `**Ansatz:** Pro Funktion Integral berechnen, durch Intervallbreite teilen, dann $f(\\xi) = \\bar f$ nach $\\xi$ auflösen.

**Rechnung:**
- $f=x$ auf $[0,4]$: $\\bar f = \\tfrac{1}{4}\\cdot 8 = 2 \\Rightarrow \\xi = 2$.
- $f=3$: $\\bar f = 3$, jeder Punkt erfüllt trivial $f(\\xi)=3$.
- $f=x^3$ auf $[0,2]$: $\\bar f = \\tfrac{1}{2}\\cdot 4 = 2 \\Rightarrow \\xi = \\sqrt[3]{2}$.
- $f=e^x$ auf $[0,1]$: $\\bar f = e - 1 \\approx 1{,}718 \\Rightarrow \\xi = \\ln(e-1) \\approx 0{,}541$.

**Probe:** Jede gefundene $\\xi$ liegt im jeweiligen Intervall. ✓ Bei Konstante ist $\\xi$ mehrdeutig — das ist der entartete Fall.

**Typischer Fehler:** Für konstante Funktion spezielles $\\xi$ angeben (z.B. Mitte) — alle Punkte erfüllen die Gleichung trivialerweise.`,
        [
          'Berechne $\\bar f$.',
          'Löse $f(\\xi) = \\bar f$ nach $\\xi$.',
          'Bei Konstanten: jeder Punkt passt.',
        ],
      ),
      ni(
        'Ein Auto fährt $t = 0$ bis $t = 10\\,\\text{s}$ mit $v(t) = t + 2\\,\\text{m/s}$. Zu welcher Zeit $\\xi$ hat das Auto seine Durchschnittsgeschwindigkeit? (in Sekunden)',
        5, 0.05, 's',
        `**Ansatz:** Mittelwertsatz: $v(\\xi) = \\bar v$ für ein $\\xi \\in [0, 10]$.

**Rechnung:** $\\bar v = \\dfrac{1}{10}\\int_0^{10}(t+2)\\,dt = \\dfrac{1}{10} \\cdot [t^2/2 + 2t]_0^{10} = \\dfrac{1}{10}(50 + 20) = 7$ m/s. Gleichung $v(\\xi) = \\xi + 2 = 7 \\Rightarrow \\xi = 5$ s.

**Probe:** $\\xi = 5$ liegt mittig in $[0, 10]$ — das ist bei linearer Funktion zu erwarten (Durchschnitt = Wert in der Mitte). ✓

**Typischer Fehler:** Durchschnittsgeschwindigkeit als $(v(0)+v(10))/2 = (2 + 12)/2 = 7$ rechnen — bei linearer Funktion zufällig korrekt, allgemein aber falsche Methode.`,
        [
          'Berechne $\\bar v$ als Integralmittel.',
          'Löse $v(\\xi) = \\bar v$ nach $\\xi$.',
          'Bei linearem $v$ ist $\\xi$ genau die Intervallmitte.',
        ],
      ),
    ],

    // ── [4] Anwendung Maschinenbau: Zahnrad-Evolventen, Rohre, Seile ────
    4: [
      ni(
        'Ein Rohr folgt der Parabel $y(x) = 0{,}1\\,x^2$ zwischen $x = 0$ und $x = 10\\,\\text{m}$. Wie viele Meter Rohrmaterial werden benötigt? (auf 2 Nachkommastellen)',
        14.79, 0.05, 'm',
        `**Ansatz:** Benötigtes Material = Bogenlänge der Kurve, nicht horizontale Projektion.

**Rechnung:** $y\'(x) = 0{,}2 x$, also $L = \\int_0^{10} \\sqrt{1 + 0{,}04 x^2}\\,dx$. Substitution $u = 0{,}2 x$, $du = 0{,}2\\,dx$ (also $dx = 5\\,du$, Grenzen $0 \\to 2$):
$$L = 5\\int_0^{2} \\sqrt{1 + u^2}\\,du.$$
Standardintegral $\\int \\sqrt{1+u^2}\\,du = \\tfrac{1}{2}\\left[u\\sqrt{1+u^2} + \\ln(u+\\sqrt{1+u^2})\\right]$. Einsetzen bei $u=2$: $\\tfrac{1}{2}[2\\sqrt{5} + \\ln(2+\\sqrt{5})] \\approx \\tfrac{1}{2}[4{,}4721 + 1{,}4436] = 2{,}9579$.

$L = 5 \\cdot 2{,}9579 \\approx 14{,}79$ m.

**Probe:** Sehnenlänge $\\sqrt{10^2 + 10^2} = 10\\sqrt{2} \\approx 14{,}14$. Bogenlänge $14{,}79 > 14{,}14$, weil die Kurve nicht gerade ist. Überschuss $\\approx 4{,}6\\%$. ✓

**Typischer Fehler:** Horizontale Länge $10$ m oder Sehnenlänge $14{,}14$ m bestellen statt Bogenlänge $\\approx 14{,}79$ m — Material würde fehlen.`,
        [
          '$y\'(x) = 0{,}2 x$.',
          'Integrand $\\sqrt{1 + 0{,}04 x^2}$.',
          'Substitution $u = 0{,}2 x$ gibt Standardintegral $\\int \\sqrt{1+u^2}\\,du$.',
        ],
      ),
      mc(
        'Ein frei hängendes Seil bildet eine Kettenlinie $y(x) = a\\cosh(x/a)$. Warum NICHT einfach mit der Sekantenlänge rechnen?',
        [
          'Die Bogenlänge ist systematisch größer als die Sekante (Materialunterschätzung)',
          'Die Sekante liegt über der Kurve, nicht darunter',
          'Die Sekante hängt nicht von $a$ ab',
          'Kosinus-Hyperbolikus hat keine Ableitung',
        ],
        0,
        `**Ansatz:** Geometrisch liegt die Sekante (gerade Verbindung Endpunkt-zu-Endpunkt) immer **unterhalb** der Kurvenlänge, weil die Kurve "durchhängt". Seile in der Praxis müssen länger zugeschnitten werden als der direkte Abstand zwischen Aufhängepunkten.

**Rechnung:** Für die Kettenlinie ist der Integrand $\\sqrt{1 + \\sinh^2(x/a)} = \\cosh(x/a)$, also $L = \\int_{-b}^{b} \\cosh(x/a)\\,dx = 2a\\sinh(b/a)$. Das ist echt größer als die Sekante $2b$ für $b > 0$.

**Probe:** Zahlenbeispiel $a = 10$, $b = 10$: $L = 20\\sinh(1) \\approx 20 \\cdot 1{,}175 = 23{,}5$. Sekante $= 20$. Unterschied: $3{,}5$ m = $17\\%$ zusätzliches Seil.

**Typischer Fehler:** Bau-Budget nur nach Sekantenabstand kalkulieren — Seil zu kurz gekauft.`,
        [
          'Hängt das Seil durch? Wie liegt die Sekante relativ zum Seil?',
          'Integrand für Kettenlinie vereinfacht sich zu $\\cosh$.',
          'Durchhang bedeutet: Bogenlänge $>$ Sekante.',
        ],
        {
          1: 'Die Sekante liegt bei hängenden Seilen **über** der Kurve (Aufhängepunkte sind oben, Seil hängt nach unten durch). Trotzdem ist die Sekante kürzer als der Bogen, weil sie gerade ist.',
          2: 'Die Sekante von $(-b, y(-b))$ nach $(b, y(b))$ hängt sehr wohl von $a$ ab (durch die Endpunkt-Höhen).',
          3: '$\\cosh$ hat natürlich eine Ableitung: $(\\cosh x)\' = \\sinh x$. Kein mathematisches Problem.',
        },
      ),
      tf(
        'Die Evolvente eines Kreises mit Radius $R$ hat die Parametrisierung $x(t) = R(\\cos t + t \\sin t)$, $y(t) = R(\\sin t - t\\cos t)$, und ihre Bogenlänge von $t=0$ bis $t=T$ ist $L = R T^2/2$.',
        true,
        `**Ansatz:** Ableitungen berechnen, Integrand vereinfachen, integrieren.

**Rechnung:** $x\'(t) = R(-\\sin t + \\sin t + t\\cos t) = R t\\cos t$. $y\'(t) = R(\\cos t - \\cos t + t\\sin t) = R t\\sin t$. $(x\')^2 + (y\')^2 = R^2 t^2(\\cos^2 t + \\sin^2 t) = R^2 t^2$. Wurzel: $Rt$ (für $t\\geq 0$).

$L = \\int_0^T Rt\\,dt = R \\cdot T^2/2$.

**Probe:** Für $T = 2\\pi$ (eine volle Umwicklung): $L = R \\cdot 4\\pi^2/2 = 2\\pi^2 R$. Für $R=1$: $L \\approx 19{,}74$.

**Typischer Fehler:** Die Produktregel bei den Ableitungen falsch anwenden und $x\'(t)$ nicht korrekt vereinfachen — dann bleibt ein sperriger Ausdruck, der das elegante Ergebnis $L = RT^2/2$ verdeckt. Evolventen sind genau wegen ihrer einfachen Bogenlänge im Getriebebau so beliebt.`,
        [
          'Berechne $x\'(t)$ und $y\'(t)$ — Produktregel!',
          'Viele Terme kürzen sich. Am Ende bleibt $Rt\\cos t$ bzw. $Rt\\sin t$.',
          'Wurzel: $Rt$; dann $\\int_0^T Rt\\,dt$.',
        ],
      ),
      sorting(
        'Bringe die Schritte einer Material-Berechnung für ein gekrümmtes Rohr in die richtige Reihenfolge.',
        [
          'Geometrie der Rohrführung als Kurve $y = f(x)$ oder parametrisiert aufschreiben',
          'Ableitung(en) bilden und Integrand $\\sqrt{1+[f\'(x)]^2}$ oder $\\sqrt{x\'^2+y\'^2}$ aufstellen',
          'Bogenlängen-Integral analytisch oder numerisch berechnen',
          'Fertigungszuschlag (Biegungen, Muffen, Verschnitt) addieren',
          'Gesamtbestellmenge auf verfügbare Stangenlängen aufrunden',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Reine Bogenlänge ist nur das mathematische Minimum. In der Fertigung kommen Zuschläge dazu; am Ende wird auf Standard-Rohrlängen aufgerundet.

**Rechnung:** Bei komplizierten Profilen (z.B. Dampfleitung mit Expansions-U-Bögen) kann der Verschnitt 10-20 % betragen. Numerische Integration (Simpson, Gauß-Legendre) ist oft schneller als analytische Lösung.

**Probe:** Dokumentiere jeden Schritt in der Prüfstatik — spätere Prüfer müssen die Kalkulation nachvollziehen können.

**Typischer Fehler:** Fertigungszuschlag vergessen → "Rohr zu kurz" auf Baustelle. Oder: Zuschläge vor der geometrischen Länge addieren → chaotisch.`,
        [
          'Erst Geometrie, dann Ableitung, dann Integral.',
          'Praxis-Zuschläge erst nach geometrischer Länge.',
          'Rundung zum Schluss.',
        ],
      ),
      matching(
        'Ordne jeder Maschinenbau-Anwendung die relevante Integralformel zu.',
        [
          { left: 'Seillänge einer Hochspannungsleitung (Kettenlinie)', right: 'Bogenlängen-Integral $\\int\\sqrt{1+y\'^2}\\,dx$' },
          { left: 'Mittlere Temperatur in einem Wärmetauscher entlang $[L_1, L_2]$', right: 'Mittelwertsatz: $\\bar T = \\tfrac{1}{L_2-L_1}\\int T(x)\\,dx$' },
          { left: 'Zahnflanken-Profilmaß einer Evolventenverzahnung', right: 'Parametrisiertes Bogenlängen-Integral $\\int\\sqrt{x\'^2+y\'^2}\\,dt$' },
          { left: 'Effektive Arbeit eines ortsabhängigen Moments pro Umdrehung', right: 'Mittelwert über Drehwinkel: $\\bar M = \\tfrac{1}{2\\pi}\\int_0^{2\\pi} M(\\varphi)\\,d\\varphi$' },
        ],
        `**Ansatz:** Jede Anwendung passt zu einem bestimmten Integraltyp — Bogenlänge für geometrische Längen, Mittelwert für repräsentative Mittelgrößen.

**Rechnung:** Kettenlinie = explizite Funktion, Evolvente = parametrisiert (kein expliziter $y(x)$-Ausdruck sinnvoll), Wärme/Moment = Mittelwerte.

**Probe:** Dimensionen prüfen! Bogenlänge in Metern, mittlere Temperatur in Kelvin, Effektivmoment in Nm. Jedes Integral bewahrt die Einheiten der zugrundeliegenden Größe.

**Typischer Fehler:** Bogenlänge und Mittelwert verwechseln. Bogenlänge **summiert** Kurvenstücke auf — Ergebnis hat Einheit Länge. Mittelwert **normalisiert** durch Intervall — Ergebnis hat dieselbe Einheit wie die Funktion.`,
        [
          'Länge = Summe kleiner Bogen-Stücke.',
          'Mittelwert = Integral / Intervallbreite.',
          'Parametrisiert wenn Kurve keine Funktion $y=f(x)$ ist.',
        ],
      ),
    ],

  },

}
