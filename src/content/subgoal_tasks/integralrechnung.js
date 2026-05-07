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
