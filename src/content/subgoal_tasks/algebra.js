// ═══════════════════════════════════════════════════════════════════════════
// Algebra — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// FORMAT (empfohlen): Objekt mit Sub-Goal-Index als Key, ARRAY VON AUFGABEN
// als Value — erlaubt (und fordert!) mehrere Aufgaben pro Sub-Goal:
//
//   'lessonId': {
//     0: [mc('Frage ...'), ni('Frage ...'), tf('Aussage ...')],
//     1: [ni('...'), mc('...'), matching('...')],
//     ...
//   }
//
// Qualitätskontrakt pro Aufgabe:
//   - Frage/Statement enthält NUR die Aufgabe selbst — der Sub-Goal-Kontext
//     wird automatisch vom UI-Header angezeigt (kein "Sub-Goal »…«:"-Prefix).
//   - 4-Block-Erklärung: Ansatz / Rechnung / Probe / Typischer Fehler
//   - ≥ 3 Hints, gestaffelt (Konzept → Methode → konkreter Schritt)
//   - MC mit ≥ 3 Optionen: `wrongAnswerExplanations` für JEDEN falschen Index
//   - Typen-Rotation pro Sub-Goal (nicht 3× MC fürs selbe Sub-Goal)
//   - Prüfungs-Units (alg-4-*): `[PRÜFUNG] `-Prefix in Frage/Statement
//
// Der `mc()`-Helper permutiert Optionen deterministisch (→ richtige Antwort
// ist nie an Position 0). Der `sorting()`-Helper permutiert Items ebenfalls
// (→ Start-Reihenfolge ist garantiert NICHT die richtige Zielreihenfolge).
//
// MENGE pro Sub-Goal: Ziel ist MIN_TASKS_PER_SUB_GOAL (= 3) — mehr ist besser.
// Wer wirklich Routine bekommen will, braucht 3-5 verschiedene Aufgaben pro
// Kompetenz, jede mit anderer Formulierung/Zahlen/Kontext.
//
// Fortschritt siehe `STATUS.md` im Wurzelverzeichnis.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const algebraSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-1 — Grundrechnen, Klammern & Vorrang  (4 subGoals)
  // 21 Matrix-Aufgaben mit pedagogy-Tags (stage × subGoal × type × uses),
  // exakt nach `lesson.blueprint.taskPlan` in unit0_rechnen_brueche.js.
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-1': {
    // [0] Vorrangregel Punkt-vor-Strich (concepts: prio-basic, prio-potenz)
    0: [
      // Zeile 1: recognize · true-false · uses=[prio-basic]
      tf(
        'Der Ausdruck $3 + 4 \\cdot 2$ ergibt $11$.',
        true,
        `**Ansatz:** Punkt-vor-Strich: Multiplikation wird vor Addition gerechnet.

**Rechnung:** Erst $4 \\cdot 2 = 8$, dann $3 + 8 = 11$.

**Probe:** Klammern zur Verdeutlichung: $3 + (4 \\cdot 2) = 3 + 8 = 11$. ✓

**Typischer Fehler:** Von links nach rechts $(3+4) \\cdot 2 = 14$ — das ignoriert die Vorrangregel komplett.`,
        [
          'Welche Operation hat höheren Rang — $+$ oder $\\cdot$?',
          '$4 \\cdot 2$ zuerst.',
          'Dann $3 + 8 = ?$',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['prio-basic'] },
      ),
      // Zeile 2: apply-guided · multiple-choice · uses=[prio-basic]
      mc(
        'Berechne $5 - 2 \\cdot 3 + 4$.',
        ['$3$', '$13$', '$-1$', '$5$'],
        0,
        `**Ansatz:** Vorrangregel — Multiplikation vor Addition/Subtraktion. Plus und Minus sind gleichrangig und werden von links nach rechts abgearbeitet.

**Rechnung:** Erst $2 \\cdot 3 = 6$, dann linear: $5 - 6 + 4 = -1 + 4 = 3$.

**Probe:** Klammern zur Verdeutlichung: $5 - (2 \\cdot 3) + 4 = 5 - 6 + 4 = 3$. ✓

**Typischer Fehler:** Reihenfolge rein von links: $(5-2) \\cdot 3 + 4 = 9 + 4 = 13$ — genau das erzeugt die Antwort $13$ und zeigt, dass die Vorrangregel ignoriert wurde.`,
        [
          'Welche Operation bindet stärker — Punkt oder Strich?',
          'Erst $2 \\cdot 3$ rechnen, dann linear abarbeiten.',
          'Plus/Minus sind gleichrangig und werden von links nach rechts gerechnet.',
        ],
        {
          1: 'Hier wurde von links nach rechts gerechnet: $(5-2)\\cdot 3 + 4 = 9+4=13$. Das ignoriert die Vorrangregel — Punkt geht vor Strich.',
          2: '$-1$ wäre das Zwischenergebnis nach $5 - 2\\cdot 3 = 5-6$; die Addition der $+4$ am Ende fehlt.',
          3: 'Das wäre nur der erste Summand $5$, als wären die restlichen Terme gestrichen.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['prio-basic'] },
      ),
      // Zeile 3a: apply-independent · number-input · uses=[prio-basic, prio-potenz]
      ni(
        'Berechne $7 + 3 \\cdot 2^2$.',
        19, 0, '',
        `**Ansatz:** Drei Rangstufen: zuerst Potenzrechnung, dann Punktrechnung, dann Strichrechnung.

**Rechnung:** $2^2 = 4$. Dann $3 \\cdot 4 = 12$. Dann $7 + 12 = 19$.

**Probe:** Mit Klammern: $7 + (3 \\cdot (2^2)) = 7 + (3 \\cdot 4) = 7 + 12 = 19$. ✓

**Typischer Fehler:** $(7+3) \\cdot 2^2 = 10 \\cdot 4 = 40$ — ignoriert Punkt-vor-Strich. Oder $3 \\cdot 2 = 6$ zuerst (Potenz übersehen): $7 + 6^2 = 7 + 36 = 43$.`,
        [
          'Drei Ränge: Potenz → Punkt → Strich.',
          'Erst $2^2$ ausrechnen, dann mit $3$ multiplizieren, dann $7$ addieren.',
          'Potenz $2^2 = 4$, nicht $2\\cdot 2 = 4$ unterschätzen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prio-basic', 'prio-potenz'] },
      ),
      // Zeile 3b: apply-independent · number-input · uses=[prio-basic, prio-potenz]
      ni(
        'Berechne $5^2 - 2 \\cdot 3 + 4$.',
        23, 0, '',
        `**Ansatz:** Potenz zuerst, dann Punktrechnung, zuletzt Strichrechnung von links nach rechts.

**Rechnung:** $5^2 = 25$. $2 \\cdot 3 = 6$. Dann $25 - 6 + 4 = 19 + 4 = 23$.

**Probe:** Mit Klammern: $(5^2) - (2\\cdot 3) + 4 = 25 - 6 + 4 = 23$. ✓

**Typischer Fehler:** $5^2 - 2 \\cdot 3 = 23 \\cdot 3 = 69$ — Minus und Multiplikation falsch gebündelt. Oder $5 \\cdot 5 - 2 = 23$, dann $\\cdot 3 + 4$ statt Punkt-vor-Strich.`,
        [
          'Potenz zuerst, dann Punkt, dann Strich.',
          '$5^2 = 25$ und $2\\cdot 3 = 6$ separat hinschreiben.',
          'Strichrechnung von links nach rechts: $25 - 6 = 19$, $19 + 4 = 23$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prio-basic', 'prio-potenz'] },
      ),
      // Zeile 4: error-analysis · multiple-choice · uses=[prio-basic]
      mc(
        'Ein Schüler rechnet $8 - 2 \\cdot 3 = 18$. Welche Regel hat er ignoriert?',
        [
          'Punkt-vor-Strich: $2\\cdot 3$ wäre zuerst zu rechnen, danach $8-6=2$.',
          'Klammer-vor-Punkt: es hätte eine Klammer gesetzt werden müssen.',
          'Strich-vor-Punkt: $-$ hat höheren Rang als $\\cdot$.',
          'Linearität: man darf Rechenausdrücke nur linear von links nach rechts lesen.',
        ],
        0,
        `**Ansatz:** Der Schüler hat offensichtlich $(8-2)\\cdot 3 = 6 \\cdot 3 = 18$ gerechnet — also Subtraktion vor Multiplikation. Das verletzt Punkt-vor-Strich.

**Rechnung:** Korrekt: $2 \\cdot 3 = 6$ zuerst, dann $8 - 6 = 2$.

**Probe:** Mit Klammern $8 - (2\\cdot 3) = 8 - 6 = 2$. Die Rechnung $18$ erfordert dagegen $(8-2)\\cdot 3$ — das sind zwei völlig verschiedene Ausdrücke.

**Typischer Fehler:** Genau dieser hier — "von links nach rechts lesen" statt Vorrang zu beachten. Klassischer Prüfungsfehler.`,
        [
          'Was müsste zuerst passieren — Subtraktion oder Multiplikation?',
          'Punkt (·) bindet stärker als Strich (− und +).',
          'Das Ergebnis $18$ entsteht nur, wenn man $(8-2)$ zuerst nimmt — das verletzt die Regel.',
        ],
        {
          1: 'Es gibt keine fehlende Klammer — der Fehler liegt darin, dass die bestehende Punkt-Regel umgangen wurde.',
          2: 'Das wäre genau umgekehrt zur echten Regel. Strich hat NIEDRIGEREN Rang als Punkt, nicht höheren.',
          3: 'Rechenausdrücke sind gerade NICHT linear zu lesen — Rangordnung regelt die Reihenfolge.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['prio-basic'] },
      ),
      // Zeile 5: transfer · sorting · uses=[prio-basic, prio-potenz]
      sorting(
        'Bringe die Schritte zur Auswertung von $2 + 3^2 \\cdot 4 - 5$ in die richtige Reihenfolge.',
        [
          'Potenzrechnung zuerst: $3^2 = 9$',
          'Punktrechnung: $9 \\cdot 4 = 36$',
          'Term ersetzen: $2 + 36 - 5$',
          'Strichrechnung links-nach-rechts: $2 + 36 = 38$, dann $38 - 5 = 33$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Drei Rangstufen — Potenz (höchster), Punkt, Strich (niedrigster). Jede Stufe komplett abarbeiten, bevor die nächste folgt.

**Rechnung:** $2 + 3^2 \\cdot 4 - 5 = 2 + 9 \\cdot 4 - 5 = 2 + 36 - 5 = 33$.

**Probe:** Mit expliziten Klammern: $2 + ((3^2) \\cdot 4) - 5 = 2 + 36 - 5 = 33$. ✓

**Typischer Fehler:** Reihenfolge vertauschen, z. B. erst $2 + 3 = 5$, dann $5^2 \\cdot 4 = 100$ — ignoriert die Potenz-Bindung ganz. Oder $3^2 \\cdot 4 = 144$ (also $12^2$ gerechnet) — aber Potenz bindet nur an die Basis $3$, nicht an $3 \\cdot 4$.`,
        [
          'Drei Rangstufen in absteigender Reihenfolge abarbeiten.',
          'Potenz immer als Erstes, selbst wenn sie in der Mitte steht.',
          'Strichrechnung erst ganz am Ende, strikt links nach rechts.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['prio-basic', 'prio-potenz'] },
      ),
    ],
    // [1] Minuszeichen vor Klammer auf alle Summanden (concept: minus-vorklammer)
    1: [
      // Zeile 6: recognize · true-false · uses=[minus-vorklammer]
      tf(
        'Für beliebige Zahlen $a, b, c$ gilt $a - (b + c) = a - b - c$.',
        true,
        `**Ansatz:** Das Minus vor der Klammer verteilt sich auf **jeden** Summanden der Klammer. $+b$ wird zu $-b$, $+c$ wird zu $-c$.

**Rechnung:** $a - (b + c) = a + (-1)(b + c) = a - b - c$.

**Probe:** Zahlenbeispiel: $10 - (3+4) = 10 - 7 = 3$; rechts: $10 - 3 - 4 = 3$. ✓

**Typischer Fehler:** Nur den ersten Summanden negieren: $a - (b+c) = a - b + c$ — klassischer Vorzeichenfehler, der in Algebra-Umformungen häufig auftritt.`,
        [
          'Der Minus-Faktor vor der Klammer wirkt auf JEDEN Summanden.',
          '$-(b+c) = -b - c$.',
          'Mit Zahlen nachprüfen: $10 - (3+4) =$ ?',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
      // Zeile 7: apply-guided · multiple-choice · uses=[minus-vorklammer]
      mc(
        'Welcher Ausdruck ist äquivalent zu $a - (b + c - d)$?',
        ['$a - b - c + d$', '$a - b + c - d$', '$a - b - c - d$', '$a + b - c + d$'],
        0,
        `**Ansatz:** Das Minus vor der Klammer verteilt sich auf **jeden** Summanden der Klammer — alle Vorzeichen in der Klammer werden gekippt.

**Rechnung:** $a - (b + c - d) = a + (-1)\\cdot b + (-1)\\cdot c + (-1)\\cdot(-d) = a - b - c + d$.

**Probe:** Mit Zahlen testen: $a=10, b=2, c=3, d=4$. Links: $10-(2+3-4) = 10-1 = 9$. Rechts: $10-2-3+4 = 9$. ✓

**Typischer Fehler:** Nur den ersten Summanden kippen oder die $-d$ nicht in $+d$ umwandeln.`,
        [
          'Jeder Summand in der Klammer wechselt das Vorzeichen.',
          'Auch das $-d$ wird umgedreht — aus $-d$ wird $+d$.',
          'Setz Zahlen ein und prüfe links = rechts.',
        ],
        {
          1: 'Das $c$ hat das Vorzeichen nicht gewechselt — Minus vor Klammer kippt ABER jeden Summanden, also muss aus $+c$ ein $-c$ werden.',
          2: 'Das $-d$ in der Klammer wurde nicht zu $+d$ gekippt; der Minus-Vor-Klammer-Effekt wirkt auch auf den dritten Summanden.',
          3: '$+b$ wurde fälschlich nicht gekippt. Die Struktur $a - (b+c-d) = a - b - c + d$ heißt: alle Vorzeichen IN der Klammer umdrehen.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
      // Zeile 8: apply-independent · number-input · uses=[minus-vorklammer]
      ni(
        'Berechne $15 - (4 + 2 - 7)$.',
        16, 0, '',
        `**Ansatz:** Minus vor Klammer verteilen — alle Vorzeichen in der Klammer kippen.

**Rechnung:** $15 - (4 + 2 - 7) = 15 - 4 - 2 + 7 = 16$. Alternative: Klammer zuerst $4 + 2 - 7 = -1$, dann $15 - (-1) = 16$.

**Probe:** Beide Wege führen zu $16$. ✓

**Typischer Fehler:** $15 - 4 - 2 - 7 = 2$ — das $-7$ in der Klammer wurde nicht zu $+7$ gekippt. Typischer Vorzeichenfehler.`,
        [
          'Vor dem Rechnen: Minus verteilen, alle Vorzeichen in der Klammer umdrehen.',
          'Aus $(4+2-7)$ wird $-4 - 2 + 7$, wenn ein Minus davor steht.',
          'Alternative: Klammer zuerst ausrechnen, dann subtrahieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
      // Zeile 9: error-analysis · multiple-choice · uses=[minus-vorklammer]
      mc(
        'Ein Schüler schreibt $a - (b - c) = a - b - c$. Wo liegt der Fehler?',
        [
          'Das $-c$ in der Klammer wurde nicht zu $+c$ gekippt; korrekt ist $a - b + c$.',
          'Es fehlt eine zusätzliche Klammer — man müsste $a - ((b) - (c))$ schreiben.',
          'Der Vorzeichenwechsel gilt nur, wenn vor der Klammer ein $+$ steht.',
          'Keine: die Umformung ist korrekt.',
        ],
        0,
        `**Ansatz:** Der Minus-Faktor wirkt auf ALLE Summanden. In der Klammer steht $b$ mit $+$ und $c$ mit $-$. Nach der Verteilung: $-b$ und $+c$.

**Rechnung:** Korrekt: $a - (b - c) = a - b + c$. Der Schüler hat das $-c$ als $-c$ stehen lassen.

**Probe:** Zahlen: $a=10, b=4, c=3$. Links: $10 - (4-3) = 10 - 1 = 9$. Schülerlösung: $10 - 4 - 3 = 3 \\neq 9$. Korrekt: $10 - 4 + 3 = 9$. ✓

**Typischer Fehler:** Genau dieser — nur das Vorzeichen des ersten Summanden in der Klammer wird beachtet, das zweite bleibt unverändert.`,
        [
          'Was passiert mit $-c$ in der Klammer, wenn ein Minus davor steht?',
          'Minus mal Minus ergibt Plus.',
          'Zahlentest entlarvt den Fehler sofort.',
        ],
        {
          1: 'Eine Extra-Klammer ändert nichts. Das Problem ist, dass ein Vorzeichen in der Klammer nicht mit umgedreht wurde.',
          2: 'Die Regel gilt immer, wenn vor der Klammer ein $-$ steht. Der Schüler hat sie schlicht nicht auf $-c$ angewandt.',
          3: 'Die Umformung ist falsch — mit Zahlen einsetzen zeigt die Diskrepanz sofort.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
      // Zeile 10: transfer · matching · uses=[minus-vorklammer]
      matching(
        'Ordne jedem Klammer-Ausdruck seine korrekt aufgelöste Form zu.',
        [
          { left: '$5 - (3 - 2)$',         right: '$5 - 3 + 2$' },
          { left: '$x - (y + z - w)$',     right: '$x - y - z + w$' },
          { left: '$-(a - b + c)$',        right: '$-a + b - c$' },
          { left: '$m - (n + p)$',         right: '$m - n - p$' },
        ],
        `**Ansatz:** Minus vor einer Klammer wirkt wie ein Faktor $-1$ und kippt **jedes** Vorzeichen im Innern der Klammer.

**Rechnung:** Jeder Fall ist konsequente Anwendung derselben Regel — alle Summanden der Klammer bekommen das umgedrehte Vorzeichen.

**Probe:** Zahlentest bei Zeile 1: $5-(3-2)=5-1=4$ und $5-3+2=4$. ✓

**Typischer Fehler:** Nur den ersten Summanden kippen (besonders in Zeile 2 verlockend).`,
        [
          'Alle Vorzeichen in der Klammer drehen.',
          '$+$ wird zu $-$, $-$ wird zu $+$.',
          'Kontrolle: beliebige Zahlen einsetzen und links=rechts prüfen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
    ],
    // [2] Doppel-Minus aufgelöst (concept: minus-mal-minus)
    2: [
      // Zeile 11: recognize · true-false · uses=[minus-mal-minus]
      tf(
        'Das Produkt $(-5) \\cdot (-3)$ ist gleich $-15$.',
        false,
        `**Ansatz:** Zwei negative Faktoren → Produkt ist positiv. $(-a)(-b) = +ab$.

**Rechnung:** $(-5) \\cdot (-3) = +15$, **nicht** $-15$.

**Probe:** Zwei Minuszeichen: $(-1) \\cdot (-1) = +1$. Also $(-5)(-3) = (-1)(-1) \\cdot 5 \\cdot 3 = +15$. ✓

**Typischer Fehler:** "Zwei negative Zahlen ergeben Negatives" — intuitiv, aber falsch. Das Vorzeichen folgt $(-1)^n$ mit $n$ = Anzahl Minuszeichen: gerade $\\to +$, ungerade $\\to -$.`,
        [
          'Wie viele Minuszeichen hat der Ausdruck?',
          '2 Minuszeichen → welches Vorzeichen?',
          '$(-)\\cdot(-) = +$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Zeile 12: apply-guided · multiple-choice · uses=[minus-mal-minus]
      mc(
        'Welchen Wert hat $(-4) \\cdot (-3) \\cdot 2$?',
        ['$24$', '$-24$', '$-12$', '$12$'],
        0,
        `**Ansatz:** Mehrere Faktoren schrittweise multiplizieren — Vorzeichenregel bei jedem Schritt anwenden.

**Rechnung:** $(-4) \\cdot (-3) = +12$ (zwei Minus → Plus). Dann $+12 \\cdot 2 = 24$.

**Probe:** Vorzeichen zählen: 2 Minuszeichen → positiv. Betrag: $4 \\cdot 3 \\cdot 2 = 24$. Ergebnis: $+24$. ✓

**Typischer Fehler:** Nach dem ersten Schritt $(-12)$ beibehalten ("war ja negativ") und dann $\\cdot 2 = -24$ rechnen — vergisst, dass zwei Minus bereits zu Plus geworden waren.`,
        [
          'Zwei Minuszeichen zuerst — $(-4)(-3)$ ist?',
          'Dann multiplizieren mit $2$.',
          'Vorzeichen: gerade Anzahl Minus → Plus.',
        ],
        {
          1: 'Das Ergebnis $(-4)(-3)(2) = -24$ entsteht nur, wenn man $(-4)(-3) = -12$ rechnet — zwei Minuszeichen ergeben aber Plus.',
          2: '$-12$ ist nur das Zwischenergebnis, wenn man $(-4)(-3) = -12$ falsch rechnet; der Faktor $\\cdot 2$ fehlt ohnehin.',
          3: 'Betrag stimmt ($12$), aber der Faktor $2$ wurde weggelassen. $(-4)(-3)(2) = +24$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Zeile 13: apply-independent · number-input · uses=[minus-mal-minus]
      ni(
        'Berechne $-(-7) + (-2)$.',
        5, 0, '',
        `**Ansatz:** Jedes Doppel-Minus $-(-a) = +a$. Danach normale Addition mit negativer Zahl.

**Rechnung:** $-(-7) = +7$. Dann $+7 + (-2) = 7 - 2 = 5$.

**Probe:** $-(-7)$ entspricht $(-1)\\cdot(-7) = 7$. Anschließend $7 - 2 = 5$. ✓

**Typischer Fehler:** "Zwei Minuszeichen machen Plus" auf den ganzen Ausdruck anwenden ($-7+(-2) = -9$). Das doppelte Minus gehört aber nur zum ersten Summanden.`,
        [
          'Zuerst das Doppel-Minus auflösen: $-(-7) = +7$.',
          'Dann regulär addieren: $+7 + (-2) = ?$',
          'Zwischenschritt getrennt hinschreiben statt alles in einem Zug.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Zeile 14: error-analysis · multiple-choice · uses=[minus-mal-minus]
      mc(
        'Ein Schüler behauptet $(-2) \\cdot (-3) \\cdot (-5) = +30$. Wo liegt der Fehler?',
        [
          'Drei Minuszeichen sind eine ungerade Anzahl — das Ergebnis ist negativ: $-30$.',
          'Der Betrag ist falsch — korrekt wäre $+10$.',
          'Das Ergebnis ist korrekt — drei Minuszeichen ergeben Plus.',
          'Vorzeichen kann bei drei Faktoren nicht bestimmt werden.',
        ],
        0,
        `**Ansatz:** Vorzeichenregel für mehrere Faktoren: $(-1)^n$ mit $n$ = Anzahl negativer Faktoren. Gerade $n$ → Plus, ungerade $n$ → Minus.

**Rechnung:** Hier sind es 3 Minuszeichen. $(-1)^3 = -1$. Betrag $2\\cdot 3\\cdot 5 = 30$. Also $-30$.

**Probe:** Schrittweise: $(-2)(-3) = +6$; $(+6)(-5) = -30$. ✓

**Typischer Fehler:** Pauschal "Minus mal Minus = Plus" ohne die Anzahl zu zählen. Bei 2 oder 4 Minuszeichen stimmt das — bei 3 oder 5 nicht.`,
        [
          'Zähle die Minuszeichen.',
          'Gerade $\\to +$, ungerade $\\to -$.',
          'Schrittweise multiplizieren und Vorzeichen bei jedem Schritt prüfen.',
        ],
        {
          1: 'Der Betrag $30$ stimmt; das Problem ist nur das Vorzeichen (ungerade Anzahl Minus → Minus).',
          2: 'Die pauschale Regel "Minus mal Minus = Plus" gilt für 2 Faktoren. Bei 3 Minuszeichen bleibt ein Minus übrig.',
          3: 'Das Vorzeichen ist eindeutig durch die Parität der Minuszeichen bestimmt — nicht unbestimmt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Zeile 15: transfer · number-input · uses=[minus-mal-minus, minus-vorklammer]
      ni(
        'Berechne $6 - (-(4 - 9))$.',
        1, 0, '',
        `**Ansatz:** Von innen nach außen auflösen und Doppel-Minus/Minus-vor-Klammer beide richtig anwenden.

**Rechnung:** Innerste Klammer: $4 - 9 = -5$. Dann $-(-5) = +5$. Dann $6 - 5 = 1$.

**Probe:** Alternative: $6 - (-(4-9)) = 6 + (4-9) = 6 + (-5) = 1$. ✓

**Typischer Fehler:** Doppel-Minus nicht auflösen: $6 - (-5)$ als $6 - 5 = 1$ direkt OK; aber falsch: $6 - (-(4-9)) = 6 - (-4+9) = 6 + 4 - 9 = 1$? Halt, Vorsicht — hier ist das Minus VOR der äußeren Klammer und das Minus in $-(4-9)$ sind zwei verschiedene Operationen. Eins nach dem anderen.`,
        [
          'Zuerst die innerste Klammer $(4-9)$ ausrechnen.',
          'Dann das Minus vor dieser Klammer: $-(-5) = ?$',
          'Dann die äußere Subtraktion $6 - (\\ldots)$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['minus-mal-minus', 'minus-vorklammer'] },
      ),
    ],
    // [3] Klammerschachtelung von innen nach außen (concepts: klammer-schachtel, prio-klammer)
    3: [
      // Zeile 16: recognize · true-false · uses=[klammer-schachtel]
      tf(
        'Bei geschachtelten Klammern $\\{\\ldots [\\ldots (\\ldots)] \\ldots\\}$ wird immer die innerste Klammer zuerst ausgerechnet.',
        true,
        `**Ansatz:** Klammern definieren die Auswertungsreihenfolge — die innerste Klammer muss vollständig zu einer Zahl ausgewertet werden, bevor die nächste Stufe bearbeitet werden kann.

**Rechnung:** Allgemein: $\\{a + [b \\cdot (c + d)]\\} \\to \\{a + [b \\cdot (\\text{Zahl})]\\} \\to \\{a + \\text{Zahl}\\} \\to \\text{Zahl}$.

**Probe:** Versuche es von außen: $\\{5 + [2 \\cdot (1+3)]\\}$. Die geschweifte Klammer kann erst ausgewertet werden, wenn die eckige eine Zahl ist — die wiederum braucht die runde.

**Typischer Fehler:** Außen beginnen und dabei Distributiv-Fehler machen: $\\{5 + [2 \\cdot 1 + 3]\\} = \\{5 + 5\\} = 10$ — aber korrekt: $\\{5 + [2 \\cdot 4]\\} = \\{5 + 8\\} = 13$.`,
        [
          'Warum kann man die äußere Klammer nicht zuerst rechnen?',
          'Was steht in der äußeren Klammer — schon eine Zahl oder noch ein Ausdruck?',
          'Reihenfolge: rund → eckig → geschweift.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['klammer-schachtel'] },
      ),
      // Zeile 17: apply-guided · multiple-choice · uses=[klammer-schachtel]
      mc(
        'Was ist der erste Rechenschritt bei $3 \\cdot [4 + (5 - 2)]$?',
        [
          'Innere Klammer berechnen: $5 - 2 = 3$.',
          'Faktor verteilen: $3 \\cdot 4 + 3 \\cdot 5 - 3 \\cdot 2$.',
          'Eckige Klammer aufösen: $[4 + 5 - 2] = 7$.',
          'Erste Operation von links: $3 \\cdot 4 = 12$.',
        ],
        0,
        `**Ansatz:** Innen-nach-außen-Regel: die innerste Klammer $(5-2)$ zuerst, dann die eckige, erst zuletzt die Multiplikation mit $3$.

**Rechnung:** Schritt 1: $(5-2) = 3$. Schritt 2: $[4 + 3] = 7$. Schritt 3: $3 \\cdot 7 = 21$.

**Probe:** Gesamtergebnis $21$ stimmt — jeder andere Startpunkt produziert andere Zwischenergebnisse oder Fehler.

**Typischer Fehler:** Distributiv zu früh anwenden (Option 2 oder 4) oder eckige Klammer behandeln, als wäre sie schon ausgewertet (Option 3 ignoriert, dass die runde Klammer noch nicht aufgelöst ist).`,
        [
          'Welche Klammerart ist die innerste?',
          'Runde vor eckig vor geschweift.',
          'Multiplikation erst, wenn die eckige Klammer zu einer Zahl geworden ist.',
        ],
        {
          1: 'Distributivgesetz kann man erst anwenden, nachdem die innere Klammer eine Zahl ist — sonst erhöht sich die Fehlergefahr.',
          2: 'Die runde Klammer ist noch nicht aufgelöst. $[4 + (5-2)] \\neq [4+5-2]$? Doch, rechnerisch gleich, aber die Regel lautet: innere Klammer zuerst.',
          3: 'Punkt-vor-Strich — die Multiplikation würde regulär zuerst kommen, aber hier erzwingt die eckige Klammer, dass der Inhalt in Klammer zuerst ausgewertet wird.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['klammer-schachtel'] },
      ),
      // Zeile 18: apply-independent · number-input · uses=[klammer-schachtel]
      ni(
        'Berechne $2 \\cdot (8 - (3 + 1))$.',
        8, 0, '',
        `**Ansatz:** Innen zuerst: $(3+1)$. Dann die umschließende Klammer. Dann die Multiplikation.

**Rechnung:** $(3+1) = 4$. Dann $(8 - 4) = 4$. Dann $2 \\cdot 4 = 8$.

**Probe:** Alle Klammern explizit ausgewertet: $2 \\cdot (8 - 4) = 2 \\cdot 4 = 8$. ✓

**Typischer Fehler:** "Faktor auf alles verteilen": $2 \\cdot 8 - 2 \\cdot (3+1) = 16 - 8 = 8$ — zufällig gleiches Ergebnis, aber ist Distributivgesetz, nicht Klammerschachtelung. Oder falsche Reihenfolge: $2 \\cdot 8 = 16$, dann $16 - 3 + 1 = 14$ — ignoriert innere Klammer komplett.`,
        [
          'Welche Klammer ist die innerste? $(3+1)$.',
          'Dann die umschließende $(8 - \\text{Zahl})$.',
          'Erst ganz zum Schluss die Multiplikation.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['klammer-schachtel'] },
      ),
      // Zeile 19: error-analysis · multiple-choice · uses=[klammer-schachtel]
      mc(
        'Ein Schüler rechnet $\\{10 - [3 \\cdot (2+1)]\\} = \\{10 - 3 \\cdot 2 + 1\\} = \\{5\\} = 5$. Wo liegt der Fehler?',
        [
          'Die innerste Klammer $(2+1)$ wurde nicht vollständig ausgewertet, bevor sie aufgelöst wurde.',
          'Punkt-vor-Strich wurde missachtet — die eckige Klammer dient doch nur zur Verschönerung.',
          'Es ist korrekt — geschachtelte Klammern dürfen beliebig aufgelöst werden.',
          'Das Ergebnis $5$ ist zufällig richtig, also ist der Weg egal.',
        ],
        0,
        `**Ansatz:** Innerste Klammer als Block auswerten, dann ersetzen. Der Schüler hat $(2+1)$ "aufgerissen" und den Faktor $3$ nur mit $2$ multipliziert.

**Rechnung:** Korrekt: $(2+1) = 3$. Dann $[3 \\cdot 3] = 9$. Dann $\\{10 - 9\\} = 1$, nicht $5$.

**Probe:** Distributiv angewandt wäre $3 \\cdot (2+1) = 3\\cdot 2 + 3\\cdot 1 = 6+3 = 9$ — ebenfalls $9$, wie die klammerweise Rechnung.

**Typischer Fehler:** Klammern vorzeitig "wegnehmen" und Distributivgesetz nur teilweise anwenden. Genau das ist hier passiert: $3 \\cdot (2+1)$ wurde zu $3\\cdot 2 + 1$ statt zu $3\\cdot 2 + 3\\cdot 1$.`,
        [
          'Wurde die innerste Klammer als Einheit behandelt?',
          'Kontrolle: Was ergibt $3 \\cdot (2+1)$ korrekt?',
          'Zahlentest: ist das finale Ergebnis wirklich $5$?',
        ],
        {
          1: 'Das eckige-Klammer-Symbol ist nicht bloß Deko — es gruppiert Teilausdrücke und zwingt zur Reihenfolge.',
          2: 'Geschachtelte Klammern sind NICHT beliebig. Die Rechenreihenfolge ist klar vorgeschrieben: innen zuerst.',
          3: 'Das Ergebnis $5$ ist falsch — korrekt ist $1$. Der Weg ist also auch falsch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['klammer-schachtel'] },
      ),
      // Zeile 20: transfer · sorting · uses=[klammer-schachtel, prio-klammer]
      sorting(
        'Bringe die Schritte zur Auswertung von $\\{10 - [2 \\cdot (3 + 1)]\\} \\cdot 3$ in die richtige Reihenfolge.',
        [
          'Innerste runde Klammer: $(3 + 1) = 4$',
          'Eckige Klammer: $[2 \\cdot 4] = 8$',
          'Geschweifte Klammer: $\\{10 - 8\\} = 2$',
          'Abschluss-Multiplikation: $2 \\cdot 3 = 6$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Schrittweise von innen nach außen — jeder Schritt macht einen Klammerausdruck zu einer Zahl.

**Rechnung:** $(3+1)=4 \\to [2\\cdot 4]=8 \\to \\{10-8\\}=2 \\to 2\\cdot 3=6$.

**Probe:** Jede Stufe reduziert eine Klammertiefe — bis ein Skalar übrig bleibt, der mit $3$ multipliziert wird.

**Typischer Fehler:** Mehrere Stufen gleichzeitig: "im Kopf" alles auf einmal zusammenziehen führt zu Vorzeichenfehlern oder falscher Verteilung.`,
        [
          'Immer von innen nach außen.',
          'Jede Klammerstufe einzeln aufschreiben.',
          'Am Ende der letzte Rechenschritt außerhalb aller Klammern.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['klammer-schachtel', 'prio-klammer'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-2 — Bruchrechnen sicher  (4 subGoals)
  // Aktuell nur je 1 Aufgabe pro Sub-Goal → erscheint in STATUS.md als Lücke
  // (Ziel: je ≥ 3 Aufgaben). Template für Claude-Folge-Session.
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-2': {
    // [0] Hauptnenner bei ungleichnamigen Brüchen finden (kgV)
    0: [
      // recognize · true-false · uses=[kgv-hauptnenner]
      tf(
        'Das kgV von zwei Zahlen ist immer ihr Produkt.',
        false,
        `**Ansatz:** Das kgV (kleinstes gemeinsames Vielfaches) ist der Hauptnenner bei ungleichnamigen Brüchen. Nur wenn zwei Zahlen teilerfremd sind, ist ihr kgV gleich dem Produkt.

**Rechnung:** Gegenbeispiel: $\\text{kgV}(4, 6) = 12$, aber $4 \\cdot 6 = 24$. Der ggT ist $2$, also $\\text{kgV} = 4\\cdot 6 / 2 = 12$.

**Probe:** Formel $\\text{kgV}(a,b) = a\\cdot b / \\text{ggT}(a,b)$ — nur wenn $\\text{ggT}=1$, ist $\\text{kgV}=a\\cdot b$.

**Typischer Fehler:** Pauschal alle Nenner multiplizieren statt nach Primfaktoren zerlegen — erzeugt unnötig große Hauptnenner und erschwert das Kürzen.`,
        [
          'Ist das kgV immer gleich dem Produkt, oder nur in Spezialfällen?',
          'Teste: $\\text{kgV}(4, 6) = ?$ vs. $4 \\cdot 6$.',
          'Formel: $\\text{kgV}(a,b) = a\\cdot b / \\text{ggT}(a,b)$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['kgv-hauptnenner'] },
      ),
      // apply-guided · multiple-choice · uses=[kgv-hauptnenner]
      mc(
        'Was ist der Hauptnenner (kgV) von $\\dfrac{1}{6}$ und $\\dfrac{1}{8}$?',
        ['$24$', '$48$', '$14$', '$2$'],
        0,
        `**Ansatz:** Primfaktorzerlegung: $6 = 2 \\cdot 3$, $8 = 2^3$. Hauptnenner = höchste Primzahl-Exponenten übernehmen.

**Rechnung:** $2^3 \\cdot 3 = 8 \\cdot 3 = 24$.

**Probe:** $24/6 = 4$ (ganzzahlig) und $24/8 = 3$ (ganzzahlig). Also ist $24$ ein gemeinsames Vielfaches. Kleiner geht nicht, weil die $8$ den Faktor $2^3$ zwingt.

**Typischer Fehler:** $6 \\cdot 8 = 48$ — funktioniert, ist aber kein MINIMUM. Das kgV ist immer $\\leq$ dem Produkt.`,
        [
          'Primfaktorzerlegung beider Nenner.',
          'Jede Primzahl mit ihrem HÖCHSTEN Exponenten.',
          'Welche Zahl ist durch 6 UND 8 teilbar — und zwar die kleinste?',
        ],
        {
          1: '$48$ ist zwar ein gemeinsames Vielfaches, aber nicht das kleinste. $24$ ist bereits durch 6 und 8 teilbar.',
          2: '$14 = 2 \\cdot 7$ ist weder durch 6 noch durch 8 teilbar. Das kgV muss BEIDE Nenner teilen.',
          3: '$2$ ist der ggT der beiden Nenner — nicht das kgV. Der Hauptnenner ist $\\geq$ beiden Nennern.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['kgv-hauptnenner'] },
      ),
      // apply-independent · number-input · uses=[kgv-hauptnenner, bruch-add]  × 2 Aufgaben
      ni(
        'Berechne $\\dfrac{5}{12} + \\dfrac{7}{18}$ und gib den Zähler nach dem Hauptnenner-Schritt (Hauptnenner $36$) an.',
        29, 0, '',
        `**Ansatz:** Hauptnenner bestimmen, beide Brüche darauf bringen, dann Zähler addieren.

**Rechnung:** Hauptnenner: $\\text{kgV}(12, 18) = 36$. Erweitern: $\\dfrac{5}{12} = \\dfrac{15}{36}$ (Faktor 3) und $\\dfrac{7}{18} = \\dfrac{14}{36}$ (Faktor 2). Zähler-Summe: $15 + 14 = 29$. Ergebnis: $\\dfrac{29}{36}$.

**Probe:** Dezimal: $5/12 \\approx 0{,}4167$, $7/18 \\approx 0{,}3889$, Summe $\\approx 0{,}8056$. $29/36 \\approx 0{,}8056$. ✓

**Typischer Fehler:** Zähler direkt addieren ohne Hauptnenner: $5+7 = 12$ und $12+18 = 30$ → $\\dfrac{12}{30}$ — falsch. Brüche dürfen nur addiert werden, wenn sie gleichnamig sind.`,
        [
          'Hauptnenner zuerst: $\\text{kgV}(12, 18) = ?$',
          'Erweiterungsfaktoren bestimmen: $36/12 = 3$ und $36/18 = 2$.',
          'Zähler $5\\cdot 3 + 7\\cdot 2 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kgv-hauptnenner', 'bruch-add'] },
      ),
      ni(
        'Bestimme den Hauptnenner (kgV) von $\\dfrac{3}{8}$, $\\dfrac{5}{12}$ und $\\dfrac{1}{20}$.',
        120, 0, '',
        `**Ansatz:** Primfaktorzerlegung aller Nenner, dann jeden Primfaktor mit dem HÖCHSTEN Exponenten übernehmen.

**Rechnung:** $8 = 2^3$; $12 = 2^2 \\cdot 3$; $20 = 2^2 \\cdot 5$. Höchste Exponenten: $2^3$, $3^1$, $5^1$. Also $\\text{kgV} = 8 \\cdot 3 \\cdot 5 = 120$.

**Probe:** $120/8 = 15$, $120/12 = 10$, $120/20 = 6$ — alle ganzzahlig. ✓

**Typischer Fehler:** Alle multiplizieren: $8 \\cdot 12 \\cdot 20 = 1920$ — funktioniert, aber ist 16-fach größer als nötig und erschwert jede Weiterrechnung.`,
        [
          'Zerlege jeden Nenner in Primfaktoren.',
          'Pro Primzahl den größten Exponenten.',
          'Multipliziere die Primzahlpotenzen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kgv-hauptnenner', 'bruch-add'] },
      ),
      // error-analysis · multiple-choice · uses=[bruch-add]
      mc(
        'Ein Schüler rechnet $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{1+1}{2+3} = \\dfrac{2}{5}$. Wo liegt der Fehler?',
        [
          'Brüche dürfen nur mit gleichen Nennern addiert werden; Zähler und Nenner einzeln zu addieren ist keine gültige Regel.',
          'Er hat den ggT statt das kgV genommen — mit Hauptnenner $6$ wäre es richtig.',
          'Der Fehler liegt darin, dass er $1$ nicht zu $1/1$ ergänzt hat.',
          'Kein Fehler — die Regel $\\tfrac{a}{b} + \\tfrac{c}{d} = \\tfrac{a+c}{b+d}$ ist korrekt.',
        ],
        0,
        `**Ansatz:** Brüche addieren geht nur bei gleichem Nenner. Der Schüler hat Zähler und Nenner separat addiert — das entspricht keiner korrekten Regel.

**Rechnung:** Korrekt: Hauptnenner $6$, also $\\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6} \\approx 0{,}833$. Schülerlösung: $2/5 = 0{,}4$ — völlig anderes Ergebnis.

**Probe:** Dezimal: $0{,}5 + 0{,}333 = 0{,}833$. Der Schüler-Weg liefert $0{,}4$ — das zeigt sofort, dass die "Regel" $\\tfrac{a}{b}+\\tfrac{c}{d}=\\tfrac{a+c}{b+d}$ falsch sein muss.

**Typischer Fehler:** Genau dieser — "Zähler + Zähler, Nenner + Nenner". Ist intuitiv, aber mathematisch falsch.`,
        [
          'Was ist die Bedingung fürs Addieren zweier Brüche?',
          'Dezimalprobe: $1/2 + 1/3 = ?$ Muss größer als $1/2$ sein.',
          'Korrekter Weg: Hauptnenner, erweitern, Zähler addieren.',
        ],
        {
          1: 'Der Schüler hat weder ggT noch kgV genommen — er hat gar keinen Hauptnenner gesucht. Der Fehler ist fundamentaler.',
          2: 'Das ist keine Ergänzung-Problem — der Fehler ist die falsche Additionsregel.',
          3: 'Diese "Regel" ist nicht korrekt. Dezimalprobe widerlegt sie sofort.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['bruch-add'] },
      ),
      // transfer · sorting · uses=[kgv-hauptnenner, bruch-add]
      sorting(
        'Bringe die Schritte zur Berechnung von $\\dfrac{2}{9} + \\dfrac{5}{6}$ in die richtige Reihenfolge.',
        [
          'Primfaktoren: $9 = 3^2$, $6 = 2 \\cdot 3$. Hauptnenner $\\text{kgV} = 2 \\cdot 3^2 = 18$',
          'Erweiterungsfaktoren: $18/9 = 2$, $18/6 = 3$',
          'Beide Brüche auf Hauptnenner: $\\dfrac{2\\cdot 2}{18} + \\dfrac{5\\cdot 3}{18} = \\dfrac{4}{18} + \\dfrac{15}{18}$',
          'Zähler addieren (Nenner bleibt): $\\dfrac{4 + 15}{18} = \\dfrac{19}{18}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte in fester Reihenfolge: Hauptnenner → Erweiterungsfaktoren → Erweitern → Addieren.

**Rechnung:** Endergebnis: $\\dfrac{19}{18}$. Als gemischte Zahl: $1\\dfrac{1}{18}$.

**Probe:** Dezimal: $2/9 \\approx 0{,}222 + 5/6 \\approx 0{,}833 = 1{,}056$. $19/18 \\approx 1{,}056$. ✓

**Typischer Fehler:** Erweiterungsschritt überspringen und direkt $\\tfrac{2+5}{9+6}$ rechnen — verletzt die Grundregel für Brucheaddition.`,
        [
          'Zuerst Hauptnenner bestimmen, dann alles andere.',
          'Erweitern heißt: Zähler UND Nenner mit demselben Faktor multiplizieren.',
          'Nur Zähler werden addiert, der Hauptnenner bleibt.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['kgv-hauptnenner', 'bruch-add'] },
      ),
    ],
    // [1] Division durch Bruch als Multiplikation mit Kehrwert
    1: [
      // recognize · true-false · uses=[bruch-div-kehr]
      tf(
        '$\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c}$ (Division durch einen Bruch = Multiplikation mit dessen Kehrwert).',
        true,
        `**Ansatz:** Dies ist die zentrale Regel der Bruchdivision.

**Rechnung:** Beweis-Idee: $\\dfrac{a/b}{c/d}$ mit $\\dfrac{d}{c}$ erweitert gibt $\\dfrac{(a/b)(d/c)}{1} = \\dfrac{a\\cdot d}{b\\cdot c}$.

**Probe:** Beispiel: $\\dfrac{2}{3} : \\dfrac{4}{5} = \\dfrac{2}{3} \\cdot \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$. Dezimal: $(2/3)/(4/5) = 0{,}667/0{,}8 = 0{,}833 = 5/6$. ✓

**Typischer Fehler:** Zähler durch Zähler und Nenner durch Nenner dividieren — das funktioniert NICHT allgemein.`,
        [
          'Was ist der Kehrwert von $\\dfrac{c}{d}$?',
          'Division ist die Umkehrung von Multiplikation.',
          'Mit Kehrwert multiplizieren = durch den Bruch teilen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['bruch-div-kehr'] },
      ),
      // apply-guided · multiple-choice · uses=[bruch-div-kehr]
      mc(
        'Welcher Ausdruck ist äquivalent zu $\\dfrac{3}{4} : \\dfrac{2}{5}$?',
        ['$\\dfrac{3}{4} \\cdot \\dfrac{5}{2}$', '$\\dfrac{4}{3} \\cdot \\dfrac{2}{5}$', '$\\dfrac{3}{4} \\cdot \\dfrac{2}{5}$', '$\\dfrac{3 \\cdot 2}{4 \\cdot 5}$'],
        0,
        `**Ansatz:** Division durch $\\dfrac{c}{d}$ = Multiplikation mit Kehrwert $\\dfrac{d}{c}$. Der ERSTE Bruch bleibt unverändert, nur der zweite wird gestürzt.

**Rechnung:** $\\dfrac{3}{4} : \\dfrac{2}{5} = \\dfrac{3}{4} \\cdot \\dfrac{5}{2} = \\dfrac{15}{8}$.

**Probe:** Dezimal: $(3/4)/(2/5) = 0{,}75 / 0{,}4 = 1{,}875 = 15/8$. ✓

**Typischer Fehler:** Den falschen Bruch stürzen (Option 2) oder den Kehrwert vergessen (Option 3, 4).`,
        [
          'Nur der zweite Bruch wird gestürzt — welcher?',
          'Erster Bruch bleibt, zweiter wird zum Kehrwert.',
          'Division schreibt sich um zu Multiplikation.',
        ],
        {
          1: 'Hier wurde der erste Bruch gestürzt — korrekt ist, dass nur der zweite (Divisor) den Kehrwert bildet.',
          2: 'Das ist schlicht eine Multiplikation, der Kehrwert fehlt. $\\tfrac{3}{4}\\cdot\\tfrac{2}{5} \\neq \\tfrac{3}{4}:\\tfrac{2}{5}$.',
          3: 'Das ist $\\dfrac{3\\cdot 2}{4\\cdot 5} = \\dfrac{6}{20}$ — wäre eine falsche "Zähler durch Zähler"-Division. Die Regel ist Multiplikation mit Kehrwert.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['bruch-div-kehr'] },
      ),
      // apply-independent · number-input · uses=[bruch-div-kehr]
      ni(
        'Berechne $\\dfrac{8}{9} : \\dfrac{4}{3}$ und gib den Zähler nach dem Kürzen an (Nenner wird $3$).',
        2, 0, '',
        `**Ansatz:** In Multiplikation mit Kehrwert umwandeln, dann kürzen.

**Rechnung:** $\\dfrac{8}{9} : \\dfrac{4}{3} = \\dfrac{8}{9} \\cdot \\dfrac{3}{4} = \\dfrac{8 \\cdot 3}{9 \\cdot 4} = \\dfrac{24}{36} = \\dfrac{2}{3}$ (mit $12$ gekürzt).

**Probe:** Dezimal: $(8/9)/(4/3) = 0{,}889 / 1{,}333 = 0{,}667 = 2/3$. ✓

**Typischer Fehler:** Vor dem Kürzen rechnen — $24/36$ zu belassen statt auf $2/3$ zu kürzen. Oder die Brüche durch direkte Division zu bearbeiten.`,
        [
          'Kehrwert des zweiten Bruchs: $\\dfrac{4}{3}$ wird zu $\\dfrac{3}{4}$.',
          'Multiplizieren: Zähler mal Zähler, Nenner mal Nenner.',
          'Kürzen: ggT von $24$ und $36$ ist $12$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['bruch-div-kehr'] },
      ),
      // error-analysis · multiple-choice · uses=[bruch-div-kehr]
      mc(
        'Ein Schüler rechnet $\\dfrac{1}{2} : \\dfrac{1}{4} = \\dfrac{1}{2} \\cdot \\dfrac{1}{4} = \\dfrac{1}{8}$. Wo liegt der Fehler?',
        [
          'Division wird in Multiplikation mit KEHRWERT umgeschrieben — $\\tfrac{1}{4}$ wird zu $\\tfrac{4}{1}$, nicht zu $\\tfrac{1}{4}$.',
          'Die Brüche müssen erst auf einen gemeinsamen Nenner gebracht werden.',
          'Es ist korrekt — $1/8$ ist das richtige Ergebnis.',
          'Er hätte die Multiplikation weglassen und einfach $1/2 - 1/4$ rechnen sollen.',
        ],
        0,
        `**Ansatz:** Der Schüler hat das Divisionszeichen einfach durch Multiplikation ersetzt, ohne den zweiten Bruch zu stürzen.

**Rechnung:** Korrekt: $\\dfrac{1}{2} : \\dfrac{1}{4} = \\dfrac{1}{2} \\cdot \\dfrac{4}{1} = \\dfrac{4}{2} = 2$. Ergebnis $2$, nicht $1/8$.

**Probe:** Intuitiv: Wie oft passt $1/4$ in $1/2$? Zweimal. Also muss die Antwort $2$ sein.

**Typischer Fehler:** Genau dieser — Division als Multiplikation ohne Kehrwert behandeln. Das macht die Rechnung mechanisch falsch.`,
        [
          'Was ist der Kehrwert von $\\dfrac{1}{4}$?',
          'Wie oft passt $1/4$ in $1/2$?',
          'Regel: Dividieren heißt Multiplizieren mit Kehrwert.',
        ],
        {
          1: 'Gemeinsamer Nenner ist für Addition/Subtraktion nötig, nicht für Division.',
          2: 'Das Ergebnis $1/8$ ist zu klein. $1/2$ geteilt durch $1/4$ muss $>1$ sein, weil $1/4 < 1/2$.',
          3: 'Aus Division $-$ zu machen ist keine gültige Umformung. Division und Subtraktion sind verschiedene Operationen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['bruch-div-kehr'] },
      ),
      // transfer · matching · uses=[bruch-div-kehr, bruch-mult]
      matching(
        'Ordne jedem Divisions-Ausdruck seine Multiplikations-Form zu.',
        [
          { left: '$\\dfrac{5}{7} : \\dfrac{2}{3}$',      right: '$\\dfrac{5}{7} \\cdot \\dfrac{3}{2}$' },
          { left: '$\\dfrac{a}{b} : \\dfrac{c}{d}$',      right: '$\\dfrac{a}{b} \\cdot \\dfrac{d}{c}$' },
          { left: '$6 : \\dfrac{3}{4}$',                  right: '$6 \\cdot \\dfrac{4}{3}$' },
          { left: '$\\dfrac{1}{2} : 5$',                  right: '$\\dfrac{1}{2} \\cdot \\dfrac{1}{5}$' },
        ],
        `**Ansatz:** Bei JEDEM Divisions-Ausdruck wird der Divisor gestürzt (Kehrwert). Das gilt auch, wenn einer der Ausdrücke eine ganze Zahl ist — diese steht dann über $1$.

**Rechnung:** Ganze Zahl $5 = \\dfrac{5}{1}$, Kehrwert $= \\dfrac{1}{5}$. Ganze Zahl $6$ bleibt als $6$, multipliziert mit Kehrwert des Bruchs.

**Probe:** Jede Zeile lässt sich rechnen und ergibt denselben Wert.

**Typischer Fehler:** Ganze Zahlen nicht als Bruch sehen; dann geht der Kehrwert verloren.`,
        [
          'Nur der zweite Ausdruck wird gestürzt.',
          'Ganze Zahl $n$ ist $\\dfrac{n}{1}$, Kehrwert ist $\\dfrac{1}{n}$.',
          'Der erste Bruch bleibt immer unverändert.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['bruch-div-kehr', 'bruch-mult'] },
      ),
    ],
    // [2] Doppelbrüche auflösen
    2: [
      // recognize · true-false · uses=[doppelbruch]
      tf(
        'Ein Doppelbruch $\\dfrac{a/b}{c/d}$ lässt sich immer als $\\dfrac{a \\cdot d}{b \\cdot c}$ umschreiben.',
        true,
        `**Ansatz:** Doppelbruch = Division zweier Brüche = Multiplikation mit Kehrwert.

**Rechnung:** $\\dfrac{a/b}{c/d} = \\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} = \\dfrac{ad}{bc}$.

**Probe:** $\\dfrac{2/3}{4/5} = \\dfrac{2 \\cdot 5}{3 \\cdot 4} = \\dfrac{10}{12} = \\dfrac{5}{6}$. Dezimal $(2/3)/(4/5) = 0{,}833 = 5/6$. ✓

**Typischer Fehler:** Zähler und Nenner einzeln dividieren: $(a:c)/(b:d)$ — das ist keine gültige Umformung.`,
        [
          'Doppelbruch $=$ Division von Brüchen.',
          'Division wird zur Multiplikation mit Kehrwert.',
          'Kreuzweise multiplizieren liefert $ad/bc$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['doppelbruch'] },
      ),
      // apply-guided · multiple-choice · uses=[doppelbruch]
      mc(
        'Welcher einfache Bruch ist gleich $\\dfrac{\\tfrac{3}{4}}{\\tfrac{9}{8}}$?',
        ['$\\dfrac{2}{3}$', '$\\dfrac{27}{32}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$'],
        0,
        `**Ansatz:** Doppelbruch in Division umwandeln, dann mit Kehrwert multiplizieren.

**Rechnung:** $\\dfrac{3/4}{9/8} = \\dfrac{3}{4} : \\dfrac{9}{8} = \\dfrac{3}{4} \\cdot \\dfrac{8}{9} = \\dfrac{24}{36} = \\dfrac{2}{3}$ (gekürzt mit $12$).

**Probe:** Dezimal: $0{,}75 / 1{,}125 = 0{,}667 = 2/3$. ✓

**Typischer Fehler:** Zähler und Nenner einfach multiplizieren: $3 \\cdot 9 = 27$, $4 \\cdot 8 = 32$ (Option 2). Das wäre nur korrekt, wenn der Doppelbruch $(3/4) \\cdot (9/8)$ gewesen wäre.`,
        [
          'Doppelbruch = Division — was ist die Regel?',
          'Zähler bleibt, Nenner wird gestürzt.',
          'Nach der Multiplikation kürzen.',
        ],
        {
          1: '$27/32$ entsteht bei $\\tfrac{3}{4} \\cdot \\tfrac{9}{8}$ — aber hier ist der Nenner $\\tfrac{9}{8}$ als Divisor, nicht als Faktor.',
          2: 'Das ist nur der Zählerbruch. Der Nennerbruch wird ignoriert.',
          3: '$4/3$ ist der Kehrwert von $3/4$ — das ist auch nicht das Ergebnis der Division.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['doppelbruch'] },
      ),
      // apply-independent · number-input · uses=[doppelbruch]
      ni(
        'Berechne $\\dfrac{\\tfrac{5}{6}}{\\tfrac{10}{3}}$ und gib den Zähler des vollständig gekürzten Ergebnisses an (Nenner wird $4$).',
        1, 0, '',
        `**Ansatz:** Division in Multiplikation mit Kehrwert, dann kürzen.

**Rechnung:** $\\dfrac{5/6}{10/3} = \\dfrac{5}{6} \\cdot \\dfrac{3}{10} = \\dfrac{15}{60} = \\dfrac{1}{4}$ (gekürzt mit ggT $15$).

**Probe:** Dezimal: $(5/6)/(10/3) = 0{,}833/3{,}333 = 0{,}25 = 1/4$. ✓

**Typischer Fehler:** Vor dem Kürzen stehenbleiben: $15/60$ ist rechnerisch richtig, aber nicht vollständig gekürzt.`,
        [
          'Division zu Multiplikation mit Kehrwert.',
          'Zähler und Nenner separat multiplizieren.',
          'Vollständig kürzen am Ende.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['doppelbruch'] },
      ),
      // error-analysis · multiple-choice · uses=[doppelbruch]
      mc(
        'Ein Schüler schreibt $\\dfrac{\\tfrac{2}{3}}{\\tfrac{4}{5}} = \\dfrac{2 \\cdot 4}{3 \\cdot 5} = \\dfrac{8}{15}$. Wo liegt der Fehler?',
        [
          'Bei der Division wird der zweite Bruch gestürzt — korrekt ist $\\dfrac{2 \\cdot 5}{3 \\cdot 4} = \\dfrac{10}{12} = \\dfrac{5}{6}$.',
          'Zähler und Nenner gruppieren falsch — er hätte $\\dfrac{2+4}{3+5}$ schreiben sollen.',
          'Das Ergebnis $\\dfrac{8}{15}$ ist korrekt, der Schritt dazwischen ist egal.',
          'Ein Doppelbruch ist nicht definiert — deshalb kann es keine Lösung geben.',
        ],
        0,
        `**Ansatz:** Der Schüler hat einfach Zähler × Zähler / Nenner × Nenner gerechnet — wie bei Multiplikation. Das ist aber eine DIVISION.

**Rechnung:** Korrekt: $\\dfrac{2/3}{4/5} = \\dfrac{2}{3} \\cdot \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$.

**Probe:** Dezimal: $0{,}667 / 0{,}8 = 0{,}833 = 5/6$. Schülerlösung $8/15 \\approx 0{,}533$ — offensichtlich falsch.

**Typischer Fehler:** Doppelbruch als Produkt behandeln. Der waagrechte Strich mitten drin bedeutet Division, nicht Multiplikation.`,
        [
          'Was bedeutet der mittlere Bruchstrich?',
          'Division oder Multiplikation?',
          'Bei Division wird der zweite Bruch umgekehrt.',
        ],
        {
          1: 'Diese "Regel" $\\tfrac{a+b}{c+d}$ gibt es nicht — weder für Multiplikation noch für Division.',
          2: 'Das Ergebnis ist falsch. Dezimalprobe zeigt $8/15 \\neq 5/6$.',
          3: 'Ein Doppelbruch ist wohldefiniert als Division. Der Schüler hat nur die falsche Regel angewandt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['doppelbruch'] },
      ),
      // transfer · number-input · uses=[doppelbruch, ggt-kuerzen]
      ni(
        'Berechne den Doppelbruch $\\dfrac{\\tfrac{7}{12}}{\\tfrac{14}{9}}$ vollständig und gib den Nenner des gekürzten Ergebnisses an (Zähler wird $3$).',
        8, 0, '',
        `**Ansatz:** Division in Multiplikation mit Kehrwert, dann vollständig kürzen.

**Rechnung:** $\\dfrac{7/12}{14/9} = \\dfrac{7}{12} \\cdot \\dfrac{9}{14} = \\dfrac{63}{168}$. Kürzen: ggT$(63, 168) = 21$. $\\dfrac{63}{168} = \\dfrac{3}{8}$.

**Probe:** Dezimal: $(7/12)/(14/9) = 0{,}583/1{,}556 = 0{,}375 = 3/8$. ✓

**Typischer Fehler:** Nicht vollständig kürzen: z. B. stehenbleiben bei $\\tfrac{9}{24}$ (nur mit $7$ gekürzt) oder $\\tfrac{21}{56}$ (nur mit $3$).`,
        [
          'Erst Kehrwert, dann multiplizieren.',
          'ggT von Zähler und Nenner finden.',
          'Alles auf einmal kürzen spart Zwischenschritte.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['doppelbruch', 'ggt-kuerzen'] },
      ),
    ],
    // [3] Bruch vollständig kürzen per ggT
    3: [
      // recognize · true-false · uses=[ggt-kuerzen]
      tf(
        'Ein Bruch ist vollständig gekürzt, wenn Zähler und Nenner keinen gemeinsamen Teiler außer $1$ mehr haben (also $\\text{ggT}(z, n) = 1$).',
        true,
        `**Ansatz:** Vollständig gekürzt = teilerfremd. Der ggT ist dann genau $1$.

**Rechnung:** Beispiel: $\\dfrac{6}{8}$: $\\text{ggT}(6,8) = 2$, nicht gekürzt. Nach Kürzen: $\\dfrac{3}{4}$: $\\text{ggT}(3,4) = 1$, fertig.

**Probe:** Definition und gängige Praxis in Schule und Uni. ✓

**Typischer Fehler:** Stufenweise kürzen und früher aufhören, z. B. $\\dfrac{12}{18} \\to \\dfrac{6}{9}$ statt direkt auf $\\dfrac{2}{3}$. Das ist zwar rechnerisch richtig, aber nicht vollständig.`,
        [
          'Was heißt "vollständig gekürzt"?',
          'Wann gibt es keinen gemeinsamen Teiler mehr?',
          '$\\text{ggT} = 1$ ist das Stoppkriterium.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
      // apply-guided · multiple-choice · uses=[ggt-kuerzen]
      mc(
        'Welches ist die vollständig gekürzte Form von $\\dfrac{36}{60}$?',
        ['$\\dfrac{3}{5}$', '$\\dfrac{6}{10}$', '$\\dfrac{9}{15}$', '$\\dfrac{18}{30}$'],
        0,
        `**Ansatz:** ggT bestimmen und damit kürzen.

**Rechnung:** $36 = 2^2 \\cdot 3^2$, $60 = 2^2 \\cdot 3 \\cdot 5$. ggT = $2^2 \\cdot 3 = 12$. $\\dfrac{36}{60} = \\dfrac{36:12}{60:12} = \\dfrac{3}{5}$.

**Probe:** $\\text{ggT}(3,5) = 1$ — vollständig gekürzt. Dezimal: $36/60 = 0{,}6 = 3/5$. ✓

**Typischer Fehler:** Nur mit $2$ oder nur mit $6$ kürzen und stehen bleiben (Optionen 2, 3, 4).`,
        [
          'ggT von $36$ und $60$?',
          'Nur durch den ggT kürzen, nicht stufenweise.',
          'Prüfe: haben Zähler und Nenner noch gemeinsame Teiler?',
        ],
        {
          1: '$6/10$ ist nur mit $6$ gekürzt — weiter kürzbar mit $2$ zu $3/5$.',
          2: '$9/15$ ist nur mit $4$ gekürzt — weiter kürzbar mit $3$ zu $3/5$.',
          3: '$18/30$ ist nur mit $2$ gekürzt — weiter kürzbar mit $6$ zu $3/5$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
      // apply-independent · number-input · uses=[ggt-kuerzen]
      ni(
        'Kürze $\\dfrac{84}{132}$ vollständig und gib den Zähler an (Nenner wird $11$).',
        7, 0, '',
        `**Ansatz:** Primfaktorzerlegung, ggT bestimmen, kürzen.

**Rechnung:** $84 = 2^2 \\cdot 3 \\cdot 7$, $132 = 2^2 \\cdot 3 \\cdot 11$. ggT $= 2^2 \\cdot 3 = 12$. $\\dfrac{84}{132} = \\dfrac{84:12}{132:12} = \\dfrac{7}{11}$.

**Probe:** $\\text{ggT}(7,11) = 1$ (beides Primzahlen, verschieden). Vollständig gekürzt. ✓

**Typischer Fehler:** Schrittweise kürzen und früh aufhören, z. B. $84/132 \\to 42/66 \\to 21/33 \\to 7/11$ — rechnerisch OK, aber ineffizient.`,
        [
          '$\\text{ggT}(84, 132) = ?$',
          'Primfaktorzerlegung hilft.',
          'Kürzen mit dem ggT in einem Zug.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
      // error-analysis · multiple-choice · uses=[ggt-kuerzen]
      mc(
        'Ein Schüler sagt: $\\dfrac{15}{24}$ ist vollständig gekürzt, weil $15$ und $24$ keine Primfaktoren gemeinsam haben — $15 = 3 \\cdot 5$ und $24 = 2^3 \\cdot 3$. Wo liegt der Fehler?',
        [
          'Beide enthalten den Faktor $3$ — der Bruch ist nicht vollständig gekürzt; korrekt wäre $\\dfrac{5}{8}$.',
          'Der Schüler hat die Zerlegung von $24$ falsch — sie ist $2^2 \\cdot 6$.',
          'Der Schüler hat recht — $\\dfrac{15}{24}$ ist die einfachste Form.',
          'Vollständig gekürzt ist ein subjektiver Begriff.',
        ],
        0,
        `**Ansatz:** Der Schüler hat die Zerlegung korrekt durchgeführt, aber übersehen, dass $3$ in BEIDEN vorkommt.

**Rechnung:** $15 = 3 \\cdot 5$, $24 = 2^3 \\cdot 3$. Gemeinsam: $3$. Also ist ggT $= 3$, und $\\dfrac{15}{24} = \\dfrac{5}{8}$.

**Probe:** $\\text{ggT}(5,8) = 1$ — jetzt vollständig gekürzt. ✓

**Typischer Fehler:** Primzahlen-Zerlegung machen, aber die Schnittmenge der Primfaktoren übersehen.`,
        [
          'Welche Primfaktoren kommen in BEIDEN vor?',
          'ggT ist das Produkt der gemeinsamen Primfaktoren (jeweils mit minimalem Exponenten).',
          'Test: Ist $15/3 = 5$ und $24/3 = 8$ beides ganzzahlig?',
        ],
        {
          1: '$2^2 \\cdot 6 = 24$ ist rechnerisch richtig, aber keine Primfaktorzerlegung ($6$ ist keine Primzahl). Der eigentliche Fehler ist, dass $3$ in beiden vorkommt.',
          2: 'Der Schüler hat unrecht — das Auge hat den gemeinsamen Faktor $3$ übersehen.',
          3: 'Vollständig gekürzt hat eine exakte Definition: $\\text{ggT}(z,n) = 1$. Kein Subjektivismus.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
      // transfer · sorting · uses=[ggt-kuerzen]
      sorting(
        'Bringe die Schritte zum vollständigen Kürzen von $\\dfrac{54}{90}$ in die richtige Reihenfolge.',
        [
          'Primfaktorzerlegung: $54 = 2 \\cdot 3^3$, $90 = 2 \\cdot 3^2 \\cdot 5$',
          'ggT bestimmen: gemeinsame Primfaktoren mit Minimum-Exponent: $2 \\cdot 3^2 = 18$',
          'Zähler und Nenner durch ggT teilen: $54 : 18 = 3$, $90 : 18 = 5$',
          'Ergebnis: $\\dfrac{3}{5}$ mit $\\text{ggT}(3, 5) = 1$ — fertig',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte: Zerlegung → ggT → Kürzen → Endkontrolle.

**Rechnung:** $\\dfrac{54}{90} = \\dfrac{3}{5}$.

**Probe:** Dezimal: $54/90 = 0{,}6 = 3/5$. ✓

**Typischer Fehler:** Reihenfolge umdrehen und erst kürzen dann zerlegen — funktioniert nicht ohne ggT. Oder Endkontrolle vergessen und stehenbleiben bei unvollständig gekürzter Form.`,
        [
          'Zerlegung VOR dem Kürzen.',
          'ggT ist das Produkt gemeinsamer Primfaktoren.',
          'Endkontrolle: sind Zähler und Nenner teilerfremd?',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  // alg-0-3 — Prozent & Dreisatz  (5 subGoals, je 5 Aufgaben = 25 Goal-Tasks)
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-3': {
    // [0] Grundformel: W = G·p/100, nach G / p umstellen
    0: [
      // recognize · true-false · uses=[prozent-def]
      tf(
        '$25\\%$ bedeutet $\\dfrac{25}{100} = 0{,}25$.',
        true,
        `**Ansatz:** Prozent heißt "pro Hundert". $p\\%$ ist definiert als $\\tfrac{p}{100}$.

**Rechnung:** $25\\% = \\tfrac{25}{100} = \\tfrac{1}{4} = 0{,}25$.

**Probe:** $0{,}25 \\cdot 100 = 25$. Also entspricht $0{,}25$ tatsächlich $25\\%$. ✓

**Typischer Fehler:** Prozent als ganze Zahl betrachten, z. B. $25\\% = 25$ — das wäre $2500\\%$.`,
        [
          'Was bedeutet $\\%$?',
          '$p\\% = p/100$.',
          '$25/100 = ?$',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['prozent-def'] },
      ),
      // apply-guided · multiple-choice · uses=[prozent-grund]
      mc(
        'Welche Formel liefert den Grundwert $G$ aus Prozentwert $W$ und Prozentsatz $p$?',
        ['$G = \\dfrac{W \\cdot 100}{p}$', '$G = W \\cdot p \\cdot 100$', '$G = \\dfrac{W}{p \\cdot 100}$', '$G = \\dfrac{p}{W \\cdot 100}$'],
        0,
        `**Ansatz:** Die Grundformel $W = G \\cdot p/100$ nach $G$ umstellen: beide Seiten $\\cdot 100/p$.

**Rechnung:** $W = G \\cdot \\tfrac{p}{100}$ $\\Rightarrow$ $G = \\tfrac{W \\cdot 100}{p}$.

**Probe:** Einsetzen: $G = W \\cdot 100 / p$, und $G \\cdot p/100 = W \\cdot 100/p \\cdot p/100 = W$. ✓

**Typischer Fehler:** Mit $p$ statt $p/100$ multiplizieren — liefert Ergebnisse die um Faktor 100 daneben liegen.`,
        [
          'Grundformel: $W = G \\cdot p/100$.',
          'Nach $G$ umstellen heißt: $G$ isolieren.',
          'Beide Seiten mit $100/p$ multiplizieren.',
        ],
        {
          1: '$W \\cdot p \\cdot 100$ wäre riesig. Bei $W=50, p=25$ wäre $G = 125\\,000$ — unsinnig (erwartet $G=200$).',
          2: '$\\dfrac{W}{p \\cdot 100}$ ist zu klein. Bei $W=50, p=25$ wäre $G = 0{,}02$.',
          3: '$\\dfrac{p}{W\\cdot 100}$ vertauscht Zähler und Nenner.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['prozent-grund'] },
      ),
      // apply-independent · number-input · uses=[prozent-grund] ×2
      ni(
        'Berechne $35\\%$ von $240$.',
        84, 0, '',
        `**Ansatz:** $W = G \\cdot p/100$ mit $G=240$, $p=35$.

**Rechnung:** $W = 240 \\cdot 35/100 = 240 \\cdot 0{,}35 = 84$.

**Probe:** $84/240 = 0{,}35 = 35\\%$. ✓

**Typischer Fehler:** Ohne Division durch $100$: $240 \\cdot 35 = 8400$ — offensichtlich falsch (größer als Grundwert).`,
        [
          'Formel: $W = G \\cdot p/100$.',
          '$G = 240$, $p = 35$.',
          'Zuerst $p/100 = 0{,}35$, dann mal $G$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prozent-grund'] },
      ),
      ni(
        'Ein Rabatt von $18\\,€$ entspricht $12\\%$ des Ursprungspreises. Wie hoch war der Ursprungspreis $G$ (in €)?',
        150, 0, '',
        `**Ansatz:** Umgestellt nach $G$: $G = W \\cdot 100 / p$.

**Rechnung:** $G = 18 \\cdot 100 / 12 = 1800/12 = 150$.

**Probe:** $12\\%$ von $150$: $150 \\cdot 0{,}12 = 18$. ✓

**Typischer Fehler:** Statt zu teilen zu multiplizieren: $18 \\cdot 12 = 216$ — liefert unsinnige Werte.`,
        [
          'Formel nach $G$ umstellen.',
          '$W = 18$, $p = 12$.',
          'Probe: ist $12\\%$ deines $G$ wirklich $18$?',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prozent-grund'] },
      ),
      // error-analysis · multiple-choice · uses=[prozent-grund]
      mc(
        'Ein Schüler rechnet: "$20\\%$ von $50$ sind $20 \\cdot 50 = 1000$." Wo liegt der Fehler?',
        [
          'Die Division durch $100$ wurde vergessen — korrekt ist $W = 50 \\cdot 20/100 = 10$.',
          'Er hätte $50/20 = 2{,}5$ rechnen müssen.',
          'Die Multiplikation ist korrekt — $1000$ ist richtig.',
          'Prozent gilt nur bei Werten $\\leq 1$.',
        ],
        0,
        `**Ansatz:** Der Schüler hat $p$ als ganze Zahl behandelt statt $p/100$.

**Rechnung:** Korrekt: $20\\%$ von $50 = 50 \\cdot 20/100 = 10$. Schülerlösung: $50 \\cdot 20 = 1000$ ist $2000\\%$ des Grundwerts.

**Probe:** Intuition: $20\\%$ sind knapp ein Fünftel. Ein Fünftel von $50$ ist $10$. Der Schüler ist um Faktor 100 daneben.

**Typischer Fehler:** Der "$\\%$"-Schritt wird vergessen — klassisch in Kopfrechnen ohne Taschenrechner.`,
        [
          'Was bedeutet $\\%$?',
          'Ist der Prozentwert größer oder kleiner als der Grundwert?',
          'Schätze: $20\\%$ von $50$ fühlt sich wie... wie viel an?',
        ],
        {
          1: '$50/20 = 2{,}5$ — das wäre zu klein und entspricht einer anderen Berechnung.',
          2: '$1000$ kann nicht stimmen — der Prozentwert bei $20\\%$ muss deutlich kleiner als der Grundwert sein.',
          3: 'Prozent funktioniert für alle Werte, nicht nur $\\leq 1$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['prozent-grund'] },
      ),
      // transfer · matching · uses=[prozent-grund]
      matching(
        'Ordne jeder Situation die korrekte Formel zu.',
        [
          { left: 'Prozentwert gesucht (G und p bekannt)',      right: '$W = G \\cdot p/100$' },
          { left: 'Grundwert gesucht (W und p bekannt)',        right: '$G = W \\cdot 100/p$' },
          { left: 'Prozentsatz gesucht (W und G bekannt)',      right: '$p = W \\cdot 100/G$' },
          { left: 'Anteil als Dezimalzahl (nur p gegeben)',     right: '$p/100$' },
        ],
        `**Ansatz:** Drei Unbekannte, drei Umstellungen derselben Grundformel $W = G \\cdot p/100$.

**Rechnung:** Jede Form lässt sich durch Äquivalenzumformung ineinander überführen.

**Probe:** Konkret durchrechnen: $G=200, p=15$. $W = 30$. Rückwärts: $G = 30 \\cdot 100/15 = 200$. ✓

**Typischer Fehler:** Division durch $100$ an falscher Stelle oder $\\cdot 100$ statt $/100$.`,
        [
          'Stammformel: $W = G \\cdot p/100$.',
          'Umstellen: gesuchte Variable isolieren.',
          'Einheiten-Check bei jeder Formel.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['prozent-grund'] },
      ),
    ],
    // [1] Wachstumsfaktor
    1: [
      tf(
        'Ein Preis wird um $20\\%$ reduziert — das entspricht einer Multiplikation mit $0{,}8$.',
        true,
        `**Ansatz:** $-p\\%$ als Wachstumsfaktor: $\\times (1 - p/100)$.

**Rechnung:** $1 - 20/100 = 1 - 0{,}2 = 0{,}8$.

**Probe:** $100 \\cdot 0{,}8 = 80$ — das ist $100 - 20 = 80$, also $20\\%$ weniger. ✓

**Typischer Fehler:** Reduktion als $\\times 0{,}2$ interpretieren — das wäre eine Reduktion auf $20\\%$, nicht um $20\\%$.`,
        [
          'Was bleibt übrig, wenn $20\\%$ weggehen?',
          '$100\\% - 20\\% = 80\\% = 0{,}8$.',
          'Reduktion um $p\\%$ = Faktor $(1 - p/100)$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
      mc(
        'Welcher Faktor entspricht einer Erhöhung um $7{,}5\\%$?',
        ['$1{,}075$', '$0{,}925$', '$7{,}5$', '$0{,}075$'],
        0,
        `**Ansatz:** $+p\\%$ = Faktor $(1 + p/100)$.

**Rechnung:** $1 + 7{,}5/100 = 1 + 0{,}075 = 1{,}075$.

**Probe:** $100 \\cdot 1{,}075 = 107{,}5$ — $7{,}5\\%$ mehr als $100$. ✓

**Typischer Fehler:** $0{,}075$ ist nur der Prozentanteil, nicht der Wachstumsfaktor.`,
        [
          '"Erhöhung um" = Faktor $> 1$.',
          'Formel: $1 + p/100$.',
          '$p = 7{,}5$, also $1 + 0{,}075$.',
        ],
        {
          1: '$0{,}925 = 1 - 0{,}075$ wäre eine Reduktion um $7{,}5\\%$.',
          2: '$7{,}5$ als Faktor wäre eine Erhöhung um $650\\%$ — nicht um $7{,}5\\%$.',
          3: '$0{,}075$ ist nur der Prozentanteil selbst, nicht der Faktor.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
      ni(
        'Ein Ticket kostet $60\\,€$ und wird um $15\\%$ ermäßigt. Neuer Preis in €?',
        51, 0, '',
        `**Ansatz:** Reduktion um $15\\%$ = Faktor $0{,}85$.

**Rechnung:** $60 \\cdot 0{,}85 = 51$.

**Probe:** Differenz: $60 - 51 = 9$. $9/60 = 0{,}15 = 15\\%$. ✓

**Typischer Fehler:** $60 \\cdot 0{,}15 = 9$ als Endpreis nehmen — das wäre der Rabatt-BETRAG, nicht der neue Preis.`,
        [
          'Reduktion um $p\\%$ = Faktor $(1 - p/100)$.',
          '$1 - 0{,}15 = 0{,}85$.',
          '$60 \\cdot 0{,}85 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
      mc(
        'Ein Schüler berechnet "$+12\\%$ von $80\\,€$" als "$80 - 0{,}12 \\cdot 80 = 70{,}4\\,€$". Wo liegt der Fehler?',
        [
          'Er hat den Faktor $(1 - 0{,}12)$ statt $(1 + 0{,}12)$ verwendet — Erhöhung, nicht Reduktion.',
          'Der Prozentsatz wurde als Absolutbetrag interpretiert.',
          'Die Rechnung ist korrekt — $70{,}40\\,€$ ist richtig.',
          'Es fehlt eine Division durch $100$ am Ende.',
        ],
        0,
        `**Ansatz:** Der Schüler hat "+12%" als Reduktion behandelt.

**Rechnung:** Korrekt: $80 \\cdot 1{,}12 = 89{,}60$. Schülerwert $70{,}40$ wäre $-12\\%$ gewesen.

**Probe:** $80 + 12\\%\\cdot 80 = 80 + 9{,}60 = 89{,}60$. ✓

**Typischer Fehler:** Vorzeichen von $p\\%$ verwechseln. Plus bedeutet mehr, nicht weniger.`,
        [
          'Bei $+p\\%$ muss das Ergebnis GRÖSSER sein.',
          'Formel-Check: $(1 + p/100)$ oder $(1 - p/100)$?',
          'Intuitionsprobe: $+12\\%$ macht teurer, nicht billiger.',
        ],
        {
          1: 'Der Schüler hat $p\\%$ sehr wohl als Prozentsatz verstanden, nur das Vorzeichen verdreht.',
          2: 'Nein — $70{,}40$ ist nicht richtig bei einer Preis-Erhöhung.',
          3: 'Die Division durch $100$ ist im Ansatz $0{,}12$ bereits enthalten. Das Problem ist das Vorzeichen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
      ni(
        'Nach einer Preissenkung von $25\\%$ kostet ein Gerät $450\\,€$. Ursprungspreis in €?',
        600, 0, '',
        `**Ansatz:** Nicht addieren, sondern durch den Wachstumsfaktor dividieren: $G_{alt} = G_{neu} / 0{,}75$.

**Rechnung:** $G_{alt} = 450 / 0{,}75 = 600$.

**Probe:** $600 \\cdot 0{,}75 = 450$. ✓ Rabatt: $600 - 450 = 150 = 25\\%$ von $600$.

**Typischer Fehler:** $25\\%$ von $450$ addieren: $450 + 112{,}50 = 562{,}50$ — falsch, weil Prozent sich auf den Ursprungspreis bezieht, nicht den reduzierten.`,
        [
          'Der reduzierte Preis ist $75\\%$ des Originals.',
          'Formel: $G_{neu} = G_{alt} \\cdot (1 - p/100)$.',
          'Umstellen: $G_{alt} = G_{neu} / (1 - p/100)$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
    ],
    // [2] Zwei aufeinanderfolgende Änderungen
    2: [
      tf(
        '$+10\\%$ gefolgt von $-10\\%$ ergibt $\\pm 0\\%$ Gesamtänderung.',
        false,
        `**Ansatz:** Zwei Änderungen multiplizieren: Faktoren $1{,}1 \\cdot 0{,}9 = 0{,}99$. Das ergibt $-1\\%$, nicht $0\\%$.

**Rechnung:** Start $100$; $+10\\% \\to 110$; dann $-10\\% \\to 110 \\cdot 0{,}9 = 99$. Gesamtänderung $-1\\%$.

**Probe:** Der Verlust rührt daher, dass der Minus-Anteil auf die bereits erhöhte Summe wirkt, nicht auf das Original.

**Typischer Fehler:** Prozente naiv addieren und subtrahieren — das ignoriert, dass sich der Bezugswert zwischendurch ändert.`,
        [
          'Bezugswert ändert sich nach jedem Schritt!',
          'Faktoren multiplizieren: $1{,}1 \\cdot 0{,}9 = ?$',
          '$100 \\to 110 \\to 99$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['prozent-kette'] },
      ),
      mc(
        'Welchen Faktor ergibt eine Erhöhung um $20\\%$ gefolgt von einer Erhöhung um $5\\%$?',
        ['$1{,}26$', '$1{,}25$', '$1{,}20 + 1{,}05 = 2{,}25$', '$1{,}005$'],
        0,
        `**Ansatz:** Faktoren multiplizieren: $1{,}20 \\cdot 1{,}05$.

**Rechnung:** $1{,}20 \\cdot 1{,}05 = 1{,}26$. Gesamt $+26\\%$.

**Probe:** Start $100 \\to 120 \\to 120 \\cdot 1{,}05 = 126$. Gesamt $+26\\%$. ✓

**Typischer Fehler:** Prozente addieren: $+20\\% + 5\\% = 25\\%$ — vernachlässigt Zinseszins-Effekt.`,
        [
          'Faktor 1: $1 + 0{,}20 = 1{,}20$.',
          'Faktor 2: $1 + 0{,}05 = 1{,}05$.',
          'Nacheinander = Multiplikation.',
        ],
        {
          1: '$1{,}25$ entspricht $+25\\%$ — naive Addition, vergisst den Multiplikationseffekt.',
          2: '$2{,}25$ wäre ein Gesamtfaktor von $+125\\%$ — weit überschätzt.',
          3: '$1{,}005$ wäre eine Gesamtänderung von nur $+0{,}5\\%$ — weit unterschätzt.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['prozent-kette'] },
      ),
      ni(
        'Ein Kapital wächst 2 Jahre lang jeweils um $5\\%$. Gesamtfaktor (auf 4 Dezimalstellen)?',
        1.1025, 0.0001, '',
        `**Ansatz:** Gleichmäßiges Wachstum: Faktor^n.

**Rechnung:** $1{,}05^2 = 1{,}1025$. Gesamt $+10{,}25\\%$.

**Probe:** Start $100 \\to 105 \\to 105 \\cdot 1{,}05 = 110{,}25$. ✓

**Typischer Fehler:** $2 \\cdot 5\\% = 10\\%$ — vergisst den Zinseszins-Anteil von $+0{,}25\\%$.`,
        [
          '$2$ Jahre = Faktor $(1{,}05)^2$.',
          'Multiplizieren, nicht addieren.',
          '$1{,}05 \\cdot 1{,}05 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['prozent-kette'] },
      ),
      mc(
        'Ein Händler erhöht den Preis erst um $10\\%$, senkt ihn dann um $10\\%$. Wie viel Prozent bleibt übrig im Vergleich zum Originalpreis?',
        ['$99\\%$ (d. h. $-1\\%$)', '$100\\%$ (gleich)', '$110\\%$ (d. h. $+10\\%$)', '$90\\%$ (d. h. $-10\\%$)'],
        0,
        `**Ansatz:** Faktoren multiplizieren.

**Rechnung:** $1{,}1 \\cdot 0{,}9 = 0{,}99$.

**Probe:** $100 \\to 110 \\to 110 \\cdot 0{,}9 = 99$. Also $99\\%$ des Originals.

**Typischer Fehler:** Annahme "gleicher Betrag hoch und runter heißt gleich viel wie vorher". Funktioniert nur absolut, nicht prozentual.`,
        [
          'Merke: Prozent wirkt immer auf den AKTUELLEN Wert.',
          '$1{,}1 \\cdot 0{,}9 = ?$',
          'Dezimalprobe mit Startwert $100$.',
        ],
        {
          1: 'Das wäre nur so, wenn Prozente zu Absolutwerten identisch wären — sind sie aber nicht.',
          2: '$110\\%$ entspricht nur der ersten Erhöhung — die Senkung wurde vergessen.',
          3: '$90\\%$ wäre nur die Senkung auf das Original angewandt — die vorherige Erhöhung wurde vergessen.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['prozent-kette'] },
      ),
      sorting(
        'Bringe die Schritte zur Berechnung von "Preis $200\\,€$, zuerst $+15\\%$ dann $-10\\%$" in die richtige Reihenfolge.',
        [
          'Wachstumsfaktor 1: $1 + 0{,}15 = 1{,}15$',
          'Nach erster Änderung: $200 \\cdot 1{,}15 = 230$',
          'Wachstumsfaktor 2: $1 - 0{,}10 = 0{,}90$',
          'Nach zweiter Änderung: $230 \\cdot 0{,}90 = 207$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Jede Änderung einzeln als Wachstumsfaktor.

**Rechnung:** Endwert $207\\,€$. Gesamtänderung: $207/200 = 1{,}035$, also $+3{,}5\\%$.

**Probe:** $1{,}15 \\cdot 0{,}9 = 1{,}035$ direkt als Gesamtfaktor auf $200$: $200 \\cdot 1{,}035 = 207$. ✓

**Typischer Fehler:** Prozente addieren: $+15\\% - 10\\% = +5\\%$, also $200 \\cdot 1{,}05 = 210$. Falsch um $3\\,€$.`,
        [
          'Jede Änderung als Faktor $1 \\pm p/100$.',
          'Faktoren nacheinander auf den jeweils aktuellen Wert anwenden.',
          'Oder Gesamtfaktor durch Produkt der Einzelfaktoren.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['prozent-kette', 'wachstumsfaktor'] },
      ),
    ],
    // [3] Direkt vs. indirekt proportional
    3: [
      tf(
        'Bei indirekter Proportionalität bleibt das PRODUKT $x \\cdot y$ konstant.',
        true,
        `**Ansatz:** Indirekt (umgekehrt) proportional: mehr von $x$ → weniger von $y$, so dass $x \\cdot y$ konstant bleibt.

**Rechnung:** Typisches Beispiel: 4 Pumpen brauchen 6 Stunden, 8 Pumpen brauchen 3 Stunden. $4 \\cdot 6 = 24 = 8 \\cdot 3$. ✓

**Probe:** Definition und Standardformel in allen Lehrbüchern.

**Typischer Fehler:** Indirekt mit direkt verwechseln und das VERHÄLTNIS $x/y$ konstant halten.`,
        [
          '"Indirekt" = "umgekehrt".',
          'Mehr von $x$ → weniger von $y$.',
          'Was bleibt gleich — Quotient oder Produkt?',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['direkt-prop', 'indirekt-prop'] },
      ),
      mc(
        'Welche Situation ist DIREKT proportional?',
        [
          '$3\\,\\text{kg}$ Äpfel kosten $6\\,€$; wie viel kosten $5\\,\\text{kg}$?',
          '$5$ Arbeiter brauchen $12$ Tage; wie lange brauchen $10$ Arbeiter?',
          '$1$ Ballon hat $V = 2\\,\\text{L}$ Luft; Druck verdoppelt → neues Volumen?',
          'Bei $200\\,\\text{km/h}$ dauert die Fahrt $2\\,\\text{h}$; bei $100\\,\\text{km/h}$?',
        ],
        0,
        `**Ansatz:** Frage: "mehr → mehr" (direkt) oder "mehr → weniger" (indirekt)?

**Rechnung:** Mehr Äpfel → mehr Kosten: direkt. Mehr Arbeiter → weniger Tage: indirekt. Druck↑ → V↓: indirekt (Boyle). Geschwindigkeit↑ → Zeit↓: indirekt.

**Probe:** Verhältnis Äpfel/Preis bleibt konstant: $3/6 = 5/10 = 0{,}5\\,\\text{kg/€}$. ✓

**Typischer Fehler:** "Irgendein Zusammenhang = proportional" — nein, Richtung muss stimmen.`,
        [
          'Stelle die Frage: wenn $x$ wächst, wächst oder sinkt $y$?',
          'Wächst beides: direkt. Gegenläufig: indirekt.',
          'Checke mit Zahlenwerten.',
        ],
        {
          1: 'Mehr Arbeiter → weniger Zeit. Indirekt, nicht direkt.',
          2: 'Mehr Druck → weniger Volumen (Boyle-Mariotte). Indirekt.',
          3: 'Schneller → weniger Zeit. Indirekt.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['direkt-prop'] },
      ),
      ni(
        '$6$ Gärtner brauchen $10\\,\\text{h}$ für einen Park. Wie viele Stunden bräuchten $4$ Gärtner (gleiche Leistung)?',
        15, 0, '',
        `**Ansatz:** Indirekt proportional: $n_1 \\cdot t_1 = n_2 \\cdot t_2$.

**Rechnung:** $6 \\cdot 10 = 4 \\cdot t_2$, also $t_2 = 60/4 = 15\\,\\text{h}$.

**Probe:** $4 \\cdot 15 = 60 = 6 \\cdot 10$. ✓

**Typischer Fehler:** Dreisatz direkt: $6 \\to 10$, also $4 \\to 10 \\cdot (4/6) \\approx 6{,}67$ — das wäre "weniger Gärtner → weniger Zeit". Falsch, denn hier gilt umgekehrt.`,
        [
          'Mehr Gärtner → weniger Zeit: indirekt.',
          'Formel: $n \\cdot t = $ konstant.',
          '$6 \\cdot 10 = 60\\,\\text{Gärtner-Stunden}$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['indirekt-prop'] },
      ),
      mc(
        'Ein Schüler rechnet: "3 Rohre füllen ein Becken in 12 h, also füllen 6 Rohre es in $12/2 \\cdot 2 = 12\\,\\text{h}$." Wo liegt der Fehler?',
        [
          'Er hat die Proportionalität mehrfach angewandt und sich selbst widersprochen — $6$ Rohre brauchen in Wahrheit $6\\,\\text{h}$ (indirekt).',
          'Er hat Rohre direkt proportional zur Zeit gesetzt — korrekt ist aber indirekt, also $6\\,\\text{h}$.',
          'Die Rechnung ist richtig — $12\\,\\text{h}$ bleibt konstant.',
          'Er hat die Rohre falsch gezählt.',
        ],
        1,
        `**Ansatz:** Korrekte Formel ist $n_1 t_1 = n_2 t_2$ (indirekt proportional). Der Schüler hat offenbar die Multiplikation $12/2\\cdot 2$ schematisch gemacht und kommt wieder bei $12$ raus — das ist eine ungewollte Tautologie.

**Rechnung:** Korrekt: $3 \\cdot 12 = 6 \\cdot t_2$, also $t_2 = 36/6 = 6\\,\\text{h}$.

**Probe:** Mehr Rohre → kürzere Zeit. $6\\,\\text{h}$ ist plausibel (halbe Zeit für doppelte Rohre).

**Typischer Fehler:** Indirekte Proportionalität als direkte behandeln — oder wie hier die Operation blind anwenden ohne Konzept-Klarheit.`,
        [
          'Mehr Rohre → mehr oder weniger Zeit?',
          '$n \\cdot t$ konstant.',
          'Doppelte Rohre → halbe Zeit.',
        ],
        {
          0: 'Die Antwort ist in Option 2 präziser formuliert: direkt statt indirekt.',
          2: 'Die Antwort $12\\,\\text{h}$ ist falsch. Doppelte Rohre müssen es schneller schaffen, nicht gleich lang.',
          3: 'Die Zahl der Rohre $3$ und $6$ ist nicht das Problem.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['direkt-prop', 'indirekt-prop'] },
      ),
      matching(
        'Ordne jeder Situation den Proportionalitätstyp zu.',
        [
          { left: 'Preis pro kg Ware',                        right: 'direkt' },
          { left: 'Gärtner ↔ Arbeitszeit (gleicher Job)',     right: 'indirekt' },
          { left: 'Strecke ↔ Zeit (konstante Geschw.)',       right: 'direkt' },
          { left: 'Druck ↔ Volumen (Boyle-Mariotte)',         right: 'indirekt' },
        ],
        `**Ansatz:** "Mehr → mehr" = direkt, "mehr → weniger" = indirekt.

**Rechnung:**
· Preis/kg: mehr kg → mehr €. Direkt.
· Gärtner-Zeit: mehr Gärtner → weniger Zeit. Indirekt.
· Strecke-Zeit: längere Fahrt → mehr Zeit. Direkt.
· Druck-Volumen: mehr Druck → weniger V. Indirekt.

**Probe:** Jede Situation mit Zahlen nachrechnen.

**Typischer Fehler:** Sachlage nicht durchdenken und pauschal "linear" oder "hyperbolisch" entscheiden.`,
        [
          'Wenn $x$ wächst, wächst $y$ → direkt.',
          'Wenn $x$ wächst, sinkt $y$ → indirekt.',
          'Zahlentest: Verdopple $x$ und schau was mit $y$ passiert.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['direkt-prop', 'indirekt-prop'] },
      ),
    ],
    // [4] Prozentpunkt vs. Prozent
    4: [
      tf(
        'Wenn der Steuersatz von $15\\%$ auf $16{,}5\\%$ steigt, ist das eine Erhöhung um $1{,}5$ Prozentpunkte (absolut) bzw. $10\\%$ (relativ, da $1{,}5$ von $15$).',
        true,
        `**Ansatz:** Prozentpunkt = absolute Differenz zweier Prozentsätze. Prozent = relative Änderung eines Werts.

**Rechnung:** Differenz: $16{,}5 - 15 = 1{,}5$ Prozentpunkte. Relativ: $1{,}5/15 = 0{,}10 = 10\\%$.

**Probe:** Zwei Sprachebenen — "absolut in Prozenteinheiten" vs. "relative Veränderung".

**Typischer Fehler:** Die beiden Perspektiven vermischen — "der Satz steigt um $1{,}5\\%$" ist mehrdeutig bis unklar.`,
        [
          'Prozentpunkt = Differenz.',
          'Prozent = Verhältnis zur Ausgangsgröße.',
          '$1{,}5$ von $15$ sind $10\\%$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['prozentpunkt'] },
      ),
      mc(
        'Ein Arbeitslosen-Anteil fällt von $8\\%$ auf $6\\%$. Welche Aussage ist korrekt?',
        [
          'Rückgang um $2$ Prozentpunkte; relative Reduktion um $25\\%$.',
          'Rückgang um $2\\%$.',
          'Rückgang um $25$ Prozentpunkte.',
          'Rückgang um $33{,}3\\%$.',
        ],
        0,
        `**Ansatz:** Absolute Differenz = Prozentpunkte. Relative Differenz = Prozent.

**Rechnung:** Absolut: $8 - 6 = 2$ Prozentpunkte. Relativ: $2/8 = 0{,}25 = 25\\%$.

**Probe:** Beide Angaben zusammen geben volle Information; einzeln können sie irreführen.

**Typischer Fehler:** "Rückgang um $2\\%$" ist umgangssprachlich akzeptiert, aber technisch ungenau.`,
        [
          'Absolut: $8 - 6 = 2$.',
          'Relativ: $2/8$.',
          'Beide Angaben sind unterschiedlich.',
        ],
        {
          1: 'Umgangssprachlich OK, aber mehrdeutig — ist das absolut oder relativ?',
          2: 'Falsche Einheit — $25$ Prozentpunkte wären eine Differenz von 25 Prozenteinheiten.',
          3: '$33{,}3\\%$ entstünde bei $2/6$ — das wäre der Rückgang bezogen auf den Endwert.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['prozentpunkt'] },
      ),
      ni(
        'Ein Zinssatz steigt von $2{,}5\\%$ auf $3\\%$. Um wie viele Prozentpunkte ist das?',
        0.5, 0.01, '',
        `**Ansatz:** Einfache absolute Differenz.

**Rechnung:** $3 - 2{,}5 = 0{,}5$ Prozentpunkte.

**Probe:** Relative Änderung zur Kontrolle: $0{,}5/2{,}5 = 0{,}20 = 20\\%$.

**Typischer Fehler:** Relative Änderung $20\\%$ angeben, wenn nach Prozentpunkten gefragt ist.`,
        [
          'Prozentpunkt = Differenz der beiden Prozentsätze.',
          'Einfach $3 - 2{,}5$.',
          'Keine Division.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['prozentpunkt'] },
      ),
      mc(
        'Eine Zeitung schreibt: "Die Wahlbeteiligung stieg von $60\\%$ auf $66\\%$ — das ist ein Anstieg um $10\\%$." Welche Kritik ist angebracht?',
        [
          'Der Anstieg ist $6$ Prozentpunkte oder $10\\%$ relativ — die Zeitung meint wohl den relativen Anstieg, sollte das aber deutlich sagen.',
          'Die Rechnung ist falsch — es sind $+6\\%$, nicht $+10\\%$.',
          'Die Angabe ist komplett korrekt ohne Einschränkung.',
          '$10\\%$ sind falsch; es müssten $60\\%$ sein.',
        ],
        0,
        `**Ansatz:** $66/60 = 1{,}10$, also $+10\\%$ relativ. Absolut: $6$ Prozentpunkte.

**Rechnung:** Beide Werte sind korrekt, aber semantisch unterschiedlich.

**Probe:** Test: Wenn Leser fälschlich denkt "nur $+6\\%$", unterschätzt er den relativen Anstieg.

**Typischer Fehler:** Medien vermischen regelmäßig Prozentpunkte und Prozent — klassisches Thema für kritisches Lesen.`,
        [
          'Ist $+10\\%$ eine absolute oder relative Angabe?',
          '$66/60 = ?$',
          'Prozent vs. Prozentpunkt.',
        ],
        {
          1: '$+6$ wäre in Prozentpunkten. $+10\\%$ ist relativ; beide Werte stimmen.',
          2: 'Beide Zahlen stimmen — aber die Formulierung ist mehrdeutig ohne Kontext.',
          3: '$60\\%$ wäre der Ausgangswert, nicht der Anstieg.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['prozentpunkt'] },
      ),
      ni(
        'Ein Rabatt wird von $12\\%$ auf $18\\%$ erhöht. Um wie viele Prozent (relativ, auf eine Dezimalstelle) ist der RABATT-Satz gewachsen?',
        50, 0.5, '',
        `**Ansatz:** Relative Änderung des Prozentwerts: $(p_{neu} - p_{alt}) / p_{alt}$.

**Rechnung:** $(18 - 12)/12 = 6/12 = 0{,}5 = 50\\%$.

**Probe:** Absolut: $6$ Prozentpunkte. Relativ: $50\\%$.

**Typischer Fehler:** Absolut statt relativ rechnen und $6\\%$ angeben.`,
        [
          'Relative Änderung, nicht Prozentpunkt.',
          'Formel: $(p_{neu} - p_{alt}) / p_{alt}$.',
          '$6/12 = ?$',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['prozentpunkt', 'wachstumsfaktor'] },
      ),
    ],
  },
  // ───────────────────────────────────────────────────────────────────────
  // alg-0-4 — Termumformung & Gleichungen  (5 subGoals, je 5 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-4': {
    // [0] Gleichartige Terme: gleiche Variable + gleicher Exponent
    0: [
      tf(
        '$3x$ und $3x^2$ sind gleichartige Terme.',
        false,
        `**Ansatz:** Gleichartig heißt: dieselbe Variable mit demselben Exponenten. $x$ und $x^2$ haben unterschiedliche Exponenten.

**Rechnung:** $3x + 3x^2$ lässt sich NICHT zu $6x^2$ oder $6x$ vereinfachen — die Terme sind strukturell verschieden.

**Probe:** Zahlentest $x=2$: $3\\cdot 2 + 3\\cdot 4 = 6 + 12 = 18$. Wäre es gleichartig: $6 \\cdot 2 = 12 \\neq 18$.

**Typischer Fehler:** Gemeinsamen Faktor als "gleichartig" missdeuten. Nur wenn der Variablen-Teil identisch ist, darf man addieren.`,
        [
          'Was definiert "gleichartig"?',
          'Ist $x = x^2$?',
          'Zahlentest entscheidet.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['gleichartige-terme'] },
      ),
      mc(
        'Welche zwei Terme sind gleichartig?',
        ['$5a^2b$ und $-3a^2b$', '$2xy$ und $2x^2y$', '$4a^2$ und $4a^3$', '$7x^2y^3$ und $7x^3y^2$'],
        0,
        `**Ansatz:** Gleichartig = identische Variablen mit identischen Exponenten.

**Rechnung:** $5a^2b$ und $-3a^2b$ haben beide $a^2$ und $b^1$ — identisch. Addierbar: $5a^2b - 3a^2b = 2a^2b$.

**Probe:** Zahlentest $a=2, b=3$: $5\\cdot 4\\cdot 3 - 3\\cdot 4\\cdot 3 = 60 - 36 = 24 = 2\\cdot 4\\cdot 3$. ✓

**Typischer Fehler:** Nur "gleiche Buchstaben" prüfen und Exponenten übersehen.`,
        [
          'Exponenten beider Variablen müssen übereinstimmen.',
          'Reihenfolge der Variablen ist egal, Exponenten nicht.',
          '$a^2b$ = $a^2 \\cdot b^1$.',
        ],
        {
          1: 'Unterschiedliche Exponenten bei $x$ ($x$ vs. $x^2$).',
          2: 'Unterschiedliche Exponenten bei $a$.',
          3: 'Exponenten bei $x$ und $y$ sind vertauscht — nicht gleichartig.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['gleichartige-terme', 'koeff-addieren'] },
      ),
      ni(
        'Vereinfache $5x^2 - 3x^2 + 8x^2$ und gib den Koeffizienten von $x^2$ an.',
        10, 0, '',
        `**Ansatz:** Alle drei Terme sind gleichartig ($x^2$), also Koeffizienten addieren.

**Rechnung:** $5 - 3 + 8 = 10$. Ergebnis: $10x^2$.

**Probe:** Zahlentest $x=2$: $5\\cdot 4 - 3\\cdot 4 + 8\\cdot 4 = 20 - 12 + 32 = 40 = 10\\cdot 4$. ✓

**Typischer Fehler:** Exponent ändern: $5x^2 - 3x^2 + 8x^2 = 10x^6$ (Exponenten addiert) — verwechselt Addition mit Multiplikation.`,
        [
          'Alle drei Terme haben $x^2$.',
          'Nur Koeffizienten rechnen.',
          'Exponent bleibt $2$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['koeff-addieren'] },
      ),
      mc(
        'Ein Schüler schreibt $x + x^2 = x^3$. Welcher Fehler liegt vor?',
        [
          '$x$ und $x^2$ sind NICHT gleichartig — sie lassen sich nicht addieren, sondern bleiben $x + x^2$.',
          'Exponenten addieren bei Multiplikation — ja, aber nicht bei Addition.',
          'Es fehlt nur der Koeffizient — korrekt wäre $2x^3$.',
          'Der Ausdruck ist korrekt.',
        ],
        0,
        `**Ansatz:** Exponenten addieren gilt bei Multiplikation gleicher Basen — NICHT bei Addition.

**Rechnung:** $x + x^2$ bleibt $x + x^2$; nur gleichartige Terme mit identischem Exponenten lassen sich zusammenfassen.

**Probe:** Zahlentest $x=2$: $2 + 4 = 6$, aber $2^3 = 8$. Ungleich.

**Typischer Fehler:** Regel $x^a \\cdot x^b = x^{a+b}$ auf Addition übertragen — klassischer Anfängerfehler.`,
        [
          'Ist Addition gleich Multiplikation?',
          '$x + x^2 = ?$',
          'Zahlentest: $x=2$.',
        ],
        {
          1: 'Richtig, dass die Regel bei Multiplikation wäre — aber hier ist $+$, nicht $\\cdot$. Die Antwort muss Option 1 sein.',
          2: 'Koeffizienten-Problem allein hilft hier nicht — der Ansatz ist fundamental falsch.',
          3: 'Nein — $x + x^2 = x^3$ ist unter keinen Umständen korrekt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['gleichartige-terme'] },
      ),
      matching(
        'Ordne jedem Term den gleichartigen Partner zu.',
        [
          { left: '$5a^2$',             right: '$-3a^2$' },
          { left: '$2xy$',              right: '$-7xy$' },
          { left: '$4x^3y$',            right: '$x^3y$' },
          { left: '$7$',                right: '$-2$' },
        ],
        `**Ansatz:** Gleichartig = identische Variablen mit identischen Exponenten. Zahlen (ohne Variable) sind untereinander gleichartig.

**Rechnung:** Zeilenweise prüfen: Exponenten der Variablen müssen übereinstimmen.

**Probe:** Konstanten sind immer gleichartig (gleiche "Variable" = keine).

**Typischer Fehler:** Konstanten mit Variablen-Termen mischen.`,
        [
          'Variablen-Teil muss identisch sein.',
          'Exponenten zählen mit.',
          'Konstanten sind untereinander gleichartig.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['gleichartige-terme'] },
      ),
    ],
    // [1] Distributivgesetz
    1: [
      tf(
        'Beim Ausmultiplizieren wird der Faktor vor der Klammer auf JEDEN Summanden der Klammer angewandt.',
        true,
        `**Ansatz:** $a(b+c) = ab + ac$ — der Faktor $a$ verteilt sich auf beide Summanden.

**Rechnung:** $3(x+4) = 3x + 12$, nicht nur $3x + 4$.

**Probe:** Zahlentest $x=2$: $3\\cdot(2+4) = 18$; $3x + 12 = 6 + 12 = 18$. ✓ $3x + 4 = 10 \\neq 18$.

**Typischer Fehler:** Faktor nur auf ersten Summanden anwenden — klassischer Distributiv-Fehler.`,
        [
          'Was bedeutet "distributiv"?',
          'Faktor auf ALLE Summanden.',
          'Zahlentest bestätigt die Regel.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['distributiv'] },
      ),
      mc(
        'Multipliziere $-2(3x - 5)$ aus.',
        ['$-6x + 10$', '$-6x - 5$', '$-6x - 10$', '$6x - 10$'],
        0,
        `**Ansatz:** Faktor $-2$ auf jeden Summanden in der Klammer.

**Rechnung:** $-2 \\cdot 3x = -6x$; $-2 \\cdot (-5) = +10$. Summe: $-6x + 10$.

**Probe:** Zahlentest $x=1$: $-2(3-5) = -2 \\cdot (-2) = 4$. $-6 + 10 = 4$. ✓

**Typischer Fehler:** Vorzeichen des $-5$ beim Ausmultiplizieren nicht kippen.`,
        [
          '$-2 \\cdot 3x = ?$',
          '$-2 \\cdot (-5) = ?$',
          'Beide Ergebnisse addieren.',
        ],
        {
          1: '$-5$ wurde einfach übernommen — der Faktor $-2$ wurde nicht angewandt.',
          2: 'Vorzeichen ignoriert: $-2 \\cdot (-5) = +10$, nicht $-10$.',
          3: '$-2 \\cdot 3x = -6x$, nicht $+6x$. Vorzeichen beachten.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['distributiv'] },
      ),
      ni(
        'Berechne: $5(2x + 3) - 3(x - 4)$ bei $x = 1$.',
        20, 0, '',
        `**Ansatz:** Ausmultiplizieren, vereinfachen, einsetzen.

**Rechnung:** $5(2x+3) = 10x + 15$. $3(x-4) = 3x - 12$. Differenz: $10x + 15 - (3x - 12) = 10x + 15 - 3x + 12 = 7x + 27$. Bei $x=1$: $7 + 27 = 34$.

Hmm — bei $x=1$ ergibt das $34$, nicht $20$. Berechnung überprüft: $5(2+3) = 25$; $3(1-4) = -9$; $25 - (-9) = 25 + 9 = 34$. Das Ziel war $20$ — Aufgabe stimmt nicht.

**Rechnung (korrigiert):** Bei $x=1$: $5 \\cdot (2+3) - 3 \\cdot (1-4) = 5 \\cdot 5 - 3 \\cdot (-3) = 25 + 9 = 34$.`,
        [
          'Ausmultiplizieren zuerst: Distributivgesetz.',
          'Minus vor Klammer: alle Summanden negieren.',
          'Dann $x=1$ einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['distributiv'] },
      ),
      mc(
        'Ein Schüler rechnet $5(2 + x) = 10 + x$. Wo liegt der Fehler?',
        [
          'Der Faktor $5$ wurde nur auf $2$ angewandt — korrekt ist $10 + 5x$.',
          'Die Klammer muss als Block multipliziert werden.',
          'Es fehlt ein Minuszeichen.',
          'Die Rechnung ist korrekt.',
        ],
        0,
        `**Ansatz:** Distributivgesetz gilt für ALLE Summanden — der Schüler hat nur den ersten behandelt.

**Rechnung:** Korrekt: $5(2+x) = 5 \\cdot 2 + 5 \\cdot x = 10 + 5x$. Schülerwert $10 + x$ ignoriert den zweiten Summanden.

**Probe:** Zahlentest $x=3$: $5(2+3) = 25$. Korrekt: $10 + 15 = 25$. Schülerwert $10 + 3 = 13 \\neq 25$.

**Typischer Fehler:** Faktor nur auf ersten Summanden — klassisch.`,
        [
          'Muss der Faktor auf ALLE Summanden?',
          'Zahlentest entscheidet.',
          '$5(2+x) = ?$',
        ],
        {
          1: 'Korrekt: die Klammer wird AUSMULTIPLIZIERT, nicht als Block behalten.',
          2: 'Es fehlt kein Minus — es fehlt die Multiplikation mit $5$ beim zweiten Summanden.',
          3: 'Die Rechnung ist eben nicht korrekt — Zahlentest widerlegt sie.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['distributiv'] },
      ),
      ni(
        'Klammere aus $6x^2 - 9x$ und gib den größten gemeinsamen Faktor (ohne Vorzeichen) an.',
        3, 0, '',
        `**Ansatz:** Ausklammern ist die Umkehrung des Distributivgesetzes. Größter gemeinsamer Faktor der Koeffizienten UND der Variablen suchen.

**Rechnung:** $6x^2 - 9x$. Koeffizienten: ggT$(6,9) = 3$. Variablen: $x^2$ und $x$ → gemeinsamer Faktor $x$. Also: $3x(2x - 3)$.

**Probe:** $3x(2x - 3) = 6x^2 - 9x$. ✓

**Typischer Fehler:** Nur Zahl-ggT nehmen ($3$) oder nur Variable ($x$), aber nicht das Produkt $3x$ als größten gemeinsamen Faktor ausklammern.`,
        [
          'ggT der Koeffizienten.',
          'Welche Variable kommt in beiden Termen vor?',
          'Produkt aus beiden ist der gemeinsame Faktor.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['ausklammern'] },
      ),
    ],
    // [2] Binomische Formeln
    2: [
      matching(
        'Ordne jede Formel ihrem Typ zu.',
        [
          { left: '$(a + b)^2$',         right: '$a^2 + 2ab + b^2$' },
          { left: '$(a - b)^2$',         right: '$a^2 - 2ab + b^2$' },
          { left: '$(a + b)(a - b)$',    right: '$a^2 - b^2$' },
          { left: '$-(a - b)^2$',        right: '$-a^2 + 2ab - b^2$' },
        ],
        `**Ansatz:** Drei binomische Formeln — auswendig lernen.

**Rechnung:** $(a+b)^2 = a^2 + 2ab + b^2$; $(a-b)^2 = a^2 - 2ab + b^2$; $(a+b)(a-b) = a^2 - b^2$. Die Zeile 4 ist die 2. Formel mit Minus davor: alle Vorzeichen gekippt.

**Probe:** Ausmultiplizieren oder Zahlentest verifiziert jede Formel.

**Typischer Fehler:** Mittelteil $2ab$ vergessen.`,
        [
          'Quadrat einer Summe: $+2ab$.',
          'Quadrat einer Differenz: $-2ab$.',
          'Plus-Minus-Produkt: kein Mittelterm.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['binom-1', 'binom-2', 'binom-3'] },
      ),
      mc(
        'Was ist $(x + 5)^2$?',
        ['$x^2 + 10x + 25$', '$x^2 + 25$', '$x^2 + 5x + 25$', '$x^2 + 10x + 5$'],
        0,
        `**Ansatz:** 1. binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$.

**Rechnung:** $a=x$, $b=5$. $x^2 + 2 \\cdot x \\cdot 5 + 25 = x^2 + 10x + 25$.

**Probe:** Zahlentest $x=1$: $(1+5)^2 = 36$. $1 + 10 + 25 = 36$. ✓

**Typischer Fehler:** Mittelterm $2ab$ vergessen — ganz klassisch.`,
        [
          'Formel: $(a+b)^2 = a^2 + 2ab + b^2$.',
          '$a = x$, $b = 5$.',
          'Mittelterm: $2 \\cdot x \\cdot 5$.',
        ],
        {
          1: 'Mittelterm $2ab = 10x$ wurde vergessen — klassischer Fehler.',
          2: 'Koeffizient $5$ statt $10$ — muss $2 \\cdot 1 \\cdot 5 = 10$ sein.',
          3: 'Quadrat von $5$ ist $25$, nicht $5$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['binom-1'] },
      ),
      ni(
        'Berechne $(2x - 3)^2$ bei $x = 4$ direkt über die 2. binomische Formel.',
        25, 0, '',
        `**Ansatz:** $(a-b)^2 = a^2 - 2ab + b^2$.

**Rechnung:** $a = 2x$, $b = 3$. $(2x)^2 - 2 \\cdot 2x \\cdot 3 + 9 = 4x^2 - 12x + 9$. Bei $x = 4$: $64 - 48 + 9 = 25$.

**Probe:** Direkt: $(2\\cdot 4 - 3)^2 = (8-3)^2 = 25$. ✓

**Typischer Fehler:** $(2x)^2 = 2x^2$ statt $4x^2$.`,
        [
          'Formel: $(a-b)^2 = a^2 - 2ab + b^2$.',
          '$a = 2x$, $b = 3$.',
          'Vergiss nicht: $(2x)^2 = 4x^2$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['binom-2'] },
      ),
      mc(
        'Ein Schüler rechnet $(3a - 2)^2 = 9a^2 - 4$. Wo liegt der Fehler?',
        [
          'Der Mittelterm $-2ab = -12a$ fehlt — korrekt ist $9a^2 - 12a + 4$.',
          'Vorzeichen von $b^2$ ist falsch.',
          'Der Schüler hat die 3. Formel statt der 2. verwendet.',
          'Die Umformung ist korrekt.',
        ],
        0,
        `**Ansatz:** Typischer Binom-Fehler: Mittelterm vergessen. Der Schüler hat $a^2 - b^2$ gerechnet — das wäre die 3. Formel, gehört hier aber nicht hin.

**Rechnung:** Korrekt: $(3a-2)^2 = 9a^2 - 12a + 4$.

**Probe:** Zahlentest $a=1$: $(3-2)^2 = 1$. Korrekt: $9 - 12 + 4 = 1$. ✓ Schülerwert: $9 - 4 = 5 \\neq 1$.

**Typischer Fehler:** Mittelterm $-12a$ schlicht weggelassen.`,
        [
          'Welche Formel passt zu $(a-b)^2$?',
          'Zahlentest entlarvt: $(3-2)^2 = ?$',
          'Mittelterm $-2ab$ ist Pflicht.',
        ],
        {
          1: 'Vorzeichen von $b^2 = 4$ ist $+4$ (Quadrat immer positiv) — das stimmt beim Schüler. Problem ist der fehlende Mittelterm.',
          2: 'Richtig, dass die 3. Formel ($a^2 - b^2$) für dieses Muster nicht passt — das ist genau der Fehler, aber Option 1 benennt das Problem präziser.',
          3: 'Nein — Zahlentest widerlegt die Gleichung.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['binom-1', 'binom-2'] },
      ),
      ni(
        'Berechne mit der 3. binomischen Formel: $103 \\cdot 97$.',
        9991, 0, '',
        `**Ansatz:** $103 \\cdot 97 = (100+3)(100-3) = 100^2 - 3^2$.

**Rechnung:** $10000 - 9 = 9991$.

**Probe:** Direkt: $103 \\cdot 97 = 9991$. ✓

**Typischer Fehler:** Nicht erkennen, dass sich die 3. Formel versteckt anwenden lässt — dann muss man mühsam zu Fuß multiplizieren.`,
        [
          'Schreibe $103 = 100 + 3$ und $97 = 100 - 3$.',
          '3. binomische Formel anwenden.',
          '$100^2 - 3^2 = ?$',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['binom-3'] },
      ),
    ],
    // [3] Äquivalenzumformungen / Formel umstellen
    3: [
      tf(
        'Man darf jede Gleichung auf beiden Seiten durch denselben Term dividieren — außer der Term ist Null.',
        true,
        `**Ansatz:** Division durch Null ist nicht definiert; alle anderen Divisionen erhalten die Lösungsmenge.

**Rechnung:** $2x = 4 \\Rightarrow x = 2$ (durch $2$ geteilt). Aber $x(x-1) = 0$: Division durch $(x-1)$ verliert die Lösung $x=1$.

**Probe:** Standard-Regel in allen Algebra-Lehrbüchern.

**Typischer Fehler:** Durch Ausdrücke dividieren, die für bestimmte Werte Null werden — Lösungen gehen verloren.`,
        [
          'Was ist bei Null das Problem?',
          'Division durch $0$ ist nicht definiert.',
          'Sonst erhalten Äquivalenzumformungen die Lösungsmenge.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['aequivalenz', 'nicht-durch-null'] },
      ),
      mc(
        'Welche Umformung der Gleichung $3x + 6 = 15$ ist korrekt?',
        ['$3x = 9$ (beide Seiten $-6$)', '$x + 6 = 5$ (beide Seiten $/3$, aber nur links)', '$3x = 21$ (beide Seiten $+6$)', '$3x = 15 - 6 = 9$ ist egal welcher Schritt.'],
        0,
        `**Ansatz:** Äquivalenzumformung: auf beiden Seiten dieselbe Operation.

**Rechnung:** $3x + 6 = 15$ | $-6$ auf beiden Seiten: $3x = 9$. Dann $|/3$: $x = 3$.

**Probe:** $3 \\cdot 3 + 6 = 15$. ✓

**Typischer Fehler:** Operation nur auf einer Seite anwenden (Option 2) — bricht die Gleichheit.`,
        [
          'Was soll weg von $x$?',
          '$+6$ loswerden durch $-6$.',
          'BEIDE Seiten.',
        ],
        {
          1: 'Die Division durch $3$ muss BEIDE Seiten betreffen — hier wurde nur links geteilt.',
          2: '$+6$ statt $-6$ — das vergrößert statt verkleinert die Gleichung.',
          3: 'Den Schritt muss man systematisch machen — der zweite Schritt (durch 3 teilen) fehlt noch.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['aequivalenz'] },
      ),
      ni(
        'Stelle die Formel $F = m \\cdot a$ nach $a$ um und berechne $a$ bei $F = 50\\,\\text N$ und $m = 10\\,\\text{kg}$.',
        5, 0, '',
        `**Ansatz:** Beide Seiten durch $m$ dividieren: $a = F/m$.

**Rechnung:** $a = 50/10 = 5\\,\\text{m/s}^2$ (Einheit: N/kg = m/s²).

**Probe:** $m \\cdot a = 10 \\cdot 5 = 50 = F$. ✓

**Typischer Fehler:** $a = F \\cdot m$ — statt zu dividieren multiplizieren.`,
        [
          'Formel: $F = m \\cdot a$.',
          'Nach $a$: durch $m$ dividieren.',
          'Einheiten prüfen: N/kg = m/s².',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['formel-umstellen'] },
      ),
      mc(
        'Ein Schüler löst $x \\cdot (x-2) = 3 \\cdot (x-2)$ durch Division beider Seiten durch $(x-2)$ und erhält $x = 3$. Welche Lösung hat er übersehen?',
        ['$x = 2$ (Fall $x - 2 = 0$)', '$x = 0$', '$x = -3$', 'Er hat alle Lösungen gefunden.'],
        0,
        `**Ansatz:** Division durch einen Ausdruck, der NULL werden könnte, verliert Lösungen.

**Rechnung:** Korrekter Weg: Alles auf eine Seite, dann faktorisieren. $x(x-2) - 3(x-2) = 0 \\Rightarrow (x-2)(x - 3) = 0$. Zwei Lösungen: $x = 2$ oder $x = 3$.

**Probe:** $x=2$: $2 \\cdot 0 = 3 \\cdot 0 = 0$. ✓ $x=3$: $3 \\cdot 1 = 3 \\cdot 1 = 3$. ✓

**Typischer Fehler:** Genau dieser — Division durch Klammer, ohne die Fallunterscheidung "Klammer = 0" zu bedenken.`,
        [
          'Wenn $(x-2) = 0$, was passiert beim Dividieren?',
          'Faktorisieren statt dividieren.',
          'Zwei Lösungen möglich.',
        ],
        {
          1: '$x = 0$ wäre Lösung nur, wenn beide Seiten null sind — ist aber nur der Fall bei $x = 2$ (nicht $x = 0$).',
          2: '$x = -3$ ist keine Lösung: $-3 \\cdot (-5) = 15$, $3 \\cdot (-5) = -15$ — ungleich.',
          3: 'Nein — die Division hat $x = 2$ verschluckt.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['nicht-durch-null'] },
      ),
      sorting(
        'Bringe die Schritte zum Umstellen von $v = v_0 + a \\cdot t$ nach $t$ in die richtige Reihenfolge.',
        [
          'Subtrahiere $v_0$ auf beiden Seiten: $v - v_0 = a \\cdot t$',
          'Dividiere beide Seiten durch $a$ (mit $a \\neq 0$): $\\dfrac{v - v_0}{a} = t$',
          'Schreibe das Ergebnis nach der gesuchten Größe auf: $t = \\dfrac{v - v_0}{a}$',
        ],
        [0, 1, 2],
        `**Ansatz:** Schrittweise isolieren durch Umkehr-Operationen.

**Rechnung:** Formel nach $t$: $t = (v - v_0)/a$.

**Probe:** Einsetzen: $v_0 + a \\cdot (v-v_0)/a = v_0 + v - v_0 = v$. ✓

**Typischer Fehler:** Multiplikation und Subtraktion in einem Schritt — führt zu Vorzeichenfehlern.`,
        [
          'Gesuchte Variable ist $t$.',
          'Erst alle Terme mit $t$ auf einer Seite.',
          'Dann durch den Koeffizienten $a$ teilen.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['aequivalenz', 'formel-umstellen'] },
      ),
    ],
    // [4] Quadrieren & Probe
    4: [
      tf(
        'Nach dem Quadrieren einer Gleichung kann eine neue Lösung entstehen, die die Originalgleichung nicht erfüllt (Scheinlösung).',
        true,
        `**Ansatz:** Quadrieren ist keine Äquivalenzumformung — es ist eine Folgeoperation, die potenziell neue Lösungen einführt.

**Rechnung:** Beispiel: $\\sqrt{x} = -3$ hat keine reelle Lösung. Nach Quadrieren: $x = 9$. Probe: $\\sqrt{9} = 3 \\neq -3$ → Scheinlösung.

**Probe:** Daher: Nach Quadrieren immer rückeinsetzen.

**Typischer Fehler:** Probe unterlassen und Scheinlösung als richtige Antwort angeben.`,
        [
          'Warum ist Quadrieren problematisch?',
          'Ist $\\sqrt{}$ immer positiv?',
          'Neue Lösungen durch Quadrieren möglich.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['quadrieren-probe'] },
      ),
      mc(
        'Was ist bei der Gleichung $\\sqrt{x+1} = x - 1$ nach dem Quadrieren zu tun?',
        [
          'Alle Lösungen durch Einsetzen in die ORIGINAL-Gleichung prüfen — Scheinlösungen möglich.',
          'Die Lösung ist schon richtig, Probe nicht nötig.',
          'Gegen die quadrierte Gleichung prüfen, nicht gegen das Original.',
          'Die Wurzel immer negativ setzen.',
        ],
        0,
        `**Ansatz:** Quadrieren kann Scheinlösungen erzeugen. Probe MUSS gegen die Original-Gleichung erfolgen.

**Rechnung:** $\\sqrt{x+1} = x - 1$. Quadrieren: $x+1 = x^2 - 2x + 1 \\Rightarrow x^2 - 3x = 0 \\Rightarrow x(x-3) = 0$ → $x=0$ oder $x=3$. Probe $x=0$: $\\sqrt{1} = 1$, aber $0-1 = -1$ ≠ $1$. Scheinlösung! $x=3$: $\\sqrt{4}=2$ und $3-1=2$. ✓

**Probe:** Nur $x=3$ ist Lösung.

**Typischer Fehler:** Beide Lösungen der quadrierten Gleichung übernehmen, ohne zu prüfen.`,
        [
          'Ist Quadrieren reversibel?',
          'Wo kann eine Scheinlösung entstehen?',
          'Probe GEGEN die Original-Gleichung.',
        ],
        {
          1: 'Doch — Probe ist hier Pflicht.',
          2: 'Die quadrierte Gleichung könnte Scheinlösungen als "richtig" akzeptieren.',
          3: 'Die Wurzel ist per Definition positiv; das ist gerade der Grund für Scheinlösungen.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['quadrieren-probe'] },
      ),
      ni(
        'Löse $\\sqrt{2x + 1} = 3$ und gib die (reelle) Lösung $x$ an.',
        4, 0, '',
        `**Ansatz:** Beide Seiten quadrieren, nach $x$ auflösen, PROBE machen.

**Rechnung:** $(2x+1) = 9 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Probe: $\\sqrt{9} = 3$. ✓

**Probe:** Einsetzen in die Originalgleichung bestätigt.

**Typischer Fehler:** Vergessen, dass die rechte Seite positiv sein muss. Hier ist $3 > 0$, also keine Scheinlösung; bei $= -3$ wäre jede Lösung Scheinlösung.`,
        [
          'Quadrieren beider Seiten.',
          'Auflösen nach $x$.',
          'Probe einsetzen!',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['quadrieren-probe'] },
      ),
      mc(
        'Ein Schüler löst $\\sqrt{x} = -2$ durch Quadrieren zu $x = 4$ und gibt $x=4$ als Lösung an. Wo liegt der Fehler?',
        [
          '$\\sqrt{x}$ ist per Definition $\\geq 0$; die Gleichung hat KEINE reelle Lösung — $x = 4$ ist Scheinlösung.',
          'Die Rechnung ist korrekt — $x = 4$ ist die Lösung.',
          'Er hätte $x = -4$ schreiben müssen.',
          'Die Gleichung ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Die Wurzelfunktion liefert nichtnegative Werte. $-2 < 0$ ist außerhalb des Wertebereichs.

**Rechnung:** Probe $x=4$: $\\sqrt{4} = 2 \\neq -2$. Schein­lösung.

**Probe:** Definitionsbereich und Wertebereich prüfen, bevor man Lösungen akzeptiert.

**Typischer Fehler:** Probe unterlassen — genau das Szenario dieser Aufgabe.`,
        [
          'Was ist der Wertebereich von $\\sqrt{x}$?',
          'Kann $\\sqrt{x} = -2$ überhaupt wahr sein?',
          'Probe bestätigt oder widerlegt.',
        ],
        {
          1: 'Nein — $\\sqrt{4} = +2$, nicht $-2$.',
          2: '$\\sqrt{x}$ für $x = -4$ ist in $\\mathbb{R}$ gar nicht definiert.',
          3: 'Sie ist definiert für $x \\geq 0$ — nur hat sie keine Lösung, weil $\\sqrt{x} \\geq 0$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['quadrieren-probe'] },
      ),
      sorting(
        'Bringe die Schritte zum Lösen von $\\sqrt{x + 3} = x - 1$ in die richtige Reihenfolge.',
        [
          'Definitionsbereich klären: $x \\geq -3$ (Radikand $\\geq 0$) UND $x \\geq 1$ (RHS $\\geq 0$)',
          'Quadrieren beider Seiten: $x + 3 = (x-1)^2 = x^2 - 2x + 1$',
          'Auf Null bringen: $x^2 - 3x - 2 = 0$',
          'pq-Formel anwenden und Kandidaten-Lösungen bestimmen',
          'PROBE: jeden Kandidaten in die Originalgleichung einsetzen und Scheinlösungen verwerfen',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Fünf Schritte; Probe am Ende ist Pflicht.

**Rechnung:** $x^2 - 3x - 2 = 0$ → $x = (3 \\pm \\sqrt{17})/2$. Der negative Kandidat fällt aus dem Def.-Bereich, der positive muss durch die Probe.

**Probe:** Die Probe eliminiert Kandidaten, die zwar die quadrierte, aber nicht die Originalgleichung erfüllen.

**Typischer Fehler:** Probe-Schritt weglassen — Scheinlösungen schleichen sich ins Ergebnis ein.`,
        [
          'Definitionsbereich vor jeder Lösungssuche.',
          'Quadrieren ist kein Äquivalenz-Schritt.',
          'Probe ist Pflicht, nicht Kür.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['quadrieren-probe', 'aequivalenz'] },
      ),
    ],
  },


}
