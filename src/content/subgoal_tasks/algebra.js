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
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[prio-basic, prio-potenz]
      // Variation mit Division im Nenner — testet Punkt-Bindung in beiden Richtungen.
      ni(
        'Berechne $20 - 6 / 2 \\cdot 3 + 4$.',
        15, 0, '',
        `**Ansatz:** Division und Multiplikation sind beide „Punkt"-Operationen mit gleichem Rang — strikt von links nach rechts.

**Rechnung:** $6 / 2 = 3$, dann $3 \\cdot 3 = 9$. Danach Strichrechnung: $20 - 9 + 4 = 15$.

**Probe:** Mit Klammern: $20 - ((6/2)\\cdot 3) + 4 = 20 - 9 + 4 = 15$. ✓

**Typischer Fehler:** $6 / (2 \\cdot 3) = 6/6 = 1$ — fälschlich erst die Multiplikation rechnen, weil sie „rechts vom Bruchstrich steht". Bei gleichem Rang gilt: links zuerst.`,
        [
          '$/$ und $\\cdot$ haben denselben Rang.',
          'Bei Gleichrang: strikt links nach rechts.',
          'Erst $6/2$, dann $\\cdot 3$ — nicht erst $2\\cdot 3$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prio-basic'] },
      ),
      // Bonus SG 0: apply-independent · number-input · uses=[prio-basic, prio-potenz]
      // Vier-Operationen-Term mit Potenz — testet die volle Hierarchie kompakt.
      ni(
        'Berechne $4^2 - 5 \\cdot 2 + 3$.',
        9, 0, '',
        `**Ansatz:** Drei Rangstufen — Potenz, Punkt, Strich. Jede Stufe komplett, bevor die nächste folgt.

**Rechnung:** $4^2 = 16$ (Potenz). $5 \\cdot 2 = 10$ (Punkt). Strich links→rechts: $16 - 10 + 3 = 6 + 3 = 9$.

**Probe:** Mit Klammern explizit: $(4^2) - (5 \\cdot 2) + 3 = 16 - 10 + 3 = 9$. ✓

**Typischer Fehler:** Strich vor Punkt: $4^2 - 5 = 11$, dann $11 \\cdot 2 + 3 = 25$. Oder $4^2 - 5 \\cdot 2 = 11 \\cdot 2 = 22$ — Subtraktion vor Multiplikation gewertet.`,
        [
          'Welche Operation hat den höchsten Rang — Potenz, Punkt oder Strich?',
          '$4^2$ und $5\\cdot 2$ separat ausrechnen, bevor du Plus/Minus anfasst.',
          'Strichrechnung am Ende: $16 - 10 + 3$ von links nach rechts.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prio-basic', 'prio-potenz'] },
      ),
      // Bonus SG 0: transfer · matching · uses=[prio-basic, prio-potenz]
      // Vier verschiedene Vorrang-Konstellationen ↔ Werte — Trainings-Sammlung.
      matching(
        'Ordne jedem Term seinen korrekten Wert zu.',
        [
          { left: '$10 - 2 \\cdot 3$',     right: '$4$' },
          { left: '$2 + 3 \\cdot 4$',      right: '$14$' },
          { left: '$3^2 + 1$',             right: '$10$' },
          { left: '$20 - 6 / 2$',          right: '$17$' },
        ],
        `**Ansatz:** Jeden Term separat nach Vorrangregel auswerten — Potenz vor Punkt vor Strich.

**Rechnung:**
- $10 - 2 \\cdot 3 = 10 - 6 = 4$
- $2 + 3 \\cdot 4 = 2 + 12 = 14$
- $3^2 + 1 = 9 + 1 = 10$
- $20 - 6 / 2 = 20 - 3 = 17$

**Probe:** Alle vier Werte sind verschieden — die Zuordnung ist eindeutig.

**Typischer Fehler:** Bei $3^2 + 1$ als $3 \\cdot (2+1) = 9$ lesen — Potenz $3^2$ greift nur auf die Basis $3$, nicht auf $(2+1)$.`,
        [
          'Pro Term: Potenz zuerst, dann Punkt, dann Strich.',
          'Erst innerhalb jedes Terms rechnen, dann zuordnen.',
          'Achtung: $20 - 6/2$ ist $20 - 3$, nicht $14/2$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['prio-basic', 'prio-potenz'] },
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
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[minus-vorklammer]
      // Längere Kette mit zwei Minus-Klammern — testet Vorzeichen-Konsequenz mehrfach.
      ni(
        'Berechne $20 - (5 - 3) - (8 - 6 + 1)$.',
        15, 0, '',
        `**Ansatz:** Beide Minus-Klammern getrennt auflösen — alle Vorzeichen in jeder Klammer kippen.

**Rechnung:** $20 - (5-3) - (8-6+1) = 20 - 5 + 3 - 8 + 6 - 1 = 15$. Alternative: Klammern zuerst $20 - 2 - 3 = 15$.

**Probe:** Beide Wege liefern $15$. ✓

**Typischer Fehler:** Bei der zweiten Klammer das $+1$ nicht zu $-1$ kippen: $20 - 5 + 3 - 8 + 6 + 1 = 17$. Häufig, wenn die Klammer drei Summanden hat und der dritte „vergessen" wird.`,
        [
          'Beide Klammern haben ein Minus davor — beide komplett kippen.',
          'Aus $-(5-3)$ wird $-5+3$. Aus $-(8-6+1)$ wird $-8+6-1$.',
          'Alternativer Weg: erst jede Klammer separat ausrechnen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['minus-vorklammer'] },
      ),
      // Bonus SG 1: apply-independent · number-input · uses=[minus-vorklammer]
      // Drei Klammern hintereinander — testet konsequente Vorzeichen-Ausführung.
      ni(
        'Berechne $50 - (10 + 5 - 8) - (3 + 2)$.',
        38, 0, '',
        `**Ansatz:** Beide Minus-Klammern separat auflösen — alle Vorzeichen jeder Klammer kippen.

**Rechnung:** $50 - (10 + 5 - 8) - (3 + 2) = 50 - 10 - 5 + 8 - 3 - 2 = 38$. Alternative: Klammern zuerst — $10+5-8 = 7$, $3+2 = 5$, dann $50 - 7 - 5 = 38$.

**Probe:** Beide Wege liefern $38$. ✓

**Typischer Fehler:** Bei der ersten Klammer das $-8$ nicht zu $+8$ kippen: $50 - 10 - 5 - 8 - 3 - 2 = 22$. Klassischer Vorzeichenfehler beim dritten Summanden.`,
        [
          'Beide Klammern haben ein Minus davor — beide vollständig kippen.',
          'Aus $-(10+5-8)$ wird $-10-5+8$. Aus $-(3+2)$ wird $-3-2$.',
          'Alternative: erst Klammern auswerten, dann subtrahieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['minus-vorklammer'] },
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
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[minus-mal-minus]
      // Vier Faktoren — testet Paritätsregel bei größerer Anzahl Minuszeichen.
      ni(
        'Berechne $(-2) \\cdot (-3) \\cdot (-1) \\cdot (-5)$.',
        30, 0, '',
        `**Ansatz:** Anzahl Minuszeichen zählen — gerade $\\to +$, ungerade $\\to -$. Beträge separat multiplizieren.

**Rechnung:** Vier Minuszeichen $\\to (-1)^4 = +1$. Beträge: $2 \\cdot 3 \\cdot 1 \\cdot 5 = 30$. Ergebnis: $+30$.

**Probe:** Schrittweise: $(-2)(-3) = +6$; $+6 \\cdot (-1) = -6$; $-6 \\cdot (-5) = +30$. ✓

**Typischer Fehler:** Vorzeichen erst am Ende anhängen, ohne wirklich zu zählen — bei vier Faktoren leicht zu verzählen. Sicherer: Vorzeichen jedes Schritts neu bestimmen oder Paritätsregel.`,
        [
          'Zähl die Minuszeichen — gerade oder ungerade?',
          'Gerade Anzahl $\\Rightarrow$ positives Ergebnis.',
          'Beträge multiplizieren: $2 \\cdot 3 \\cdot 1 \\cdot 5$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Bonus SG 2: transfer · matching · uses=[minus-mal-minus]
      // Vorzeichen-Sammlung: 2/3/4 Minuszeichen — Paritätsregel im Bild.
      matching(
        'Ordne jedem Produkt sein korrektes Ergebnis zu.',
        [
          { left: '$(-3) \\cdot (-4)$',                         right: '$+12$' },
          { left: '$(-2) \\cdot 5$',                            right: '$-10$' },
          { left: '$(-1) \\cdot (-2) \\cdot (-3)$',             right: '$-6$' },
          { left: '$(-1) \\cdot (-2) \\cdot (-3) \\cdot (-4)$', right: '$+24$' },
        ],
        `**Ansatz:** Vorzeichenregel über Parität der Minuszeichen — gerade Anzahl $\\to +$, ungerade $\\to -$. Beträge separat multiplizieren.

**Rechnung:**
- $(-3)(-4)$: 2 Minus → $+$, Betrag $12$ → $+12$.
- $(-2) \\cdot 5$: 1 Minus → $-$, Betrag $10$ → $-10$.
- $(-1)(-2)(-3)$: 3 Minus → $-$, Betrag $6$ → $-6$.
- $(-1)(-2)(-3)(-4)$: 4 Minus → $+$, Betrag $24$ → $+24$.

**Probe:** Schrittweise bei der dritten Zeile: $(-1)(-2) = +2$; $+2 \\cdot (-3) = -6$. ✓

**Typischer Fehler:** Pauschal "Minus mal Minus = Plus" auf 3 Faktoren übertragen — bei ungerader Anzahl bleibt ein Minus übrig.`,
        [
          'Zähle bei jedem Produkt die Minuszeichen.',
          'Gerade Anzahl Minus → $+$, ungerade → $-$.',
          'Beträge separat multiplizieren, dann Vorzeichen davorsetzen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['minus-mal-minus'] },
      ),
      // Zeile 15: transfer · number-input · uses=[minus-mal-minus, minus-vorklammer]
      ni(
        'Berechne $6 - (-(4 - 9))$.',
        1, 0, '',
        `**Ansatz:** Von innen nach außen auflösen und Doppel-Minus/Minus-vor-Klammer beide richtig anwenden.

**Rechnung:** Innerste Klammer: $4 - 9 = -5$. Dann $-(-5) = +5$. Dann $6 - 5 = 1$.

**Probe:** Alternative: $6 - (-(4-9)) = 6 + (4-9) = 6 + (-5) = 1$. ✓

**Typischer Fehler:** Eines der beiden Minuszeichen vor der inneren Klammer übersehen, etwa $6 - (-(4-9)) = 6 - (4-9) = 6 - (-5) = 11$. Das äußere Minus wird einfach gestrichen, ohne dass die Doppel-Negation $-(-(\\ldots)) = +(\\ldots)$ angewendet wird.`,
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
          'Eckige Klammer auflösen: $[4 + 5 - 2] = 7$.',
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
          1: 'Distributiv ist zwar mathematisch gültig, aber kein elementarer „Rechenschritt" — die Aufgabe fragt nach der Reihenfolge der Auswertung. Standard ist: innerste Klammer zuerst.',
          2: 'Die runde Klammer wurde stillschweigend weggelassen, ohne sie auszurechnen. Erlaubt ist nur, eine Klammer aufzulösen, nachdem ihr Inhalt zu einer Zahl ($5-2=3$) reduziert wurde.',
          3: 'Punkt-vor-Strich gilt nur, wenn keine Klammer erzwingt, was zuerst auszuwerten ist. Hier umfasst die eckige Klammer den Faktor $4$, also muss ihr Inhalt vor der Multiplikation eine Zahl sein.',
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
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[klammer-schachtel, prio-klammer]
      // Drei verschachtelte Klammern mit Vorzeichen — testet alle drei Konzepte zusammen.
      ni(
        'Berechne $5 \\cdot [3 + (10 - 2 \\cdot (1 + 3))]$.',
        25, 0, '',
        `**Ansatz:** Strikt von innen nach außen. Innerhalb der inneren Klammer wieder Punkt vor Strich.

**Rechnung:** Innerste $(1+3) = 4$. Dann $2 \\cdot 4 = 8$. Dann $10 - 8 = 2$. Dann $[3 + 2] = 5$. Zuletzt $5 \\cdot 5 = 25$.

**Probe:** Mit allen Klammern explizit: $5 \\cdot [3 + (10 - (2 \\cdot 4))] = 5 \\cdot [3 + 2] = 5 \\cdot 5 = 25$. ✓

**Typischer Fehler:** Faktor $2$ falsch zuordnen, z. B. $2 \\cdot 1 + 3 = 5$ statt $2 \\cdot (1+3) = 8$ — die Klammer um $(1+3)$ wird ignoriert und $2$ nur auf den ersten Summanden multipliziert.`,
        [
          'Innerste Klammer ist $(1+3)$ — diese als Erstes.',
          'Innerhalb der mittleren Klammer dann Punkt vor Strich: $2 \\cdot 4$ vor $10 - \\ldots$.',
          'Erst ganz zum Schluss die Multiplikation mit $5$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['klammer-schachtel', 'prio-klammer'] },
      ),
      // Bonus SG 3: apply-independent · number-input · uses=[klammer-schachtel, prio-klammer]
      // Drei-Ebenen-Schachtelung mit Subtraktion — testet strikte Innen-zuerst-Disziplin.
      ni(
        'Berechne $40 - [2 \\cdot (10 - (1 + 4))]$.',
        30, 0, '',
        `**Ansatz:** Innerste Klammer zuerst, dann eine Schale nach außen — drei Stufen.

**Rechnung:** Innerste $(1+4) = 5$. Mitte $(10 - 5) = 5$. Eckig $[2 \\cdot 5] = 10$. Außen $40 - 10 = 30$.

**Probe:** Mit allen Klammern explizit: $40 - [2 \\cdot (10 - 5)] = 40 - [2 \\cdot 5] = 40 - 10 = 30$. ✓

**Typischer Fehler:** Ein "Vorzeichensprung": $40 - 2 \\cdot 10 - 1 - 4 = 40 - 20 - 1 - 4 = 15$ — alle Klammern weggelassen und die $2$ nur auf die $10$ multipliziert. Oder $10 - 1 + 4 = 13$ statt $10 - (1+4) = 5$ — die Klammer um $1+4$ ignoriert.`,
        [
          'Innerste Klammer ist $(1 + 4)$ — diese als Erstes.',
          'Dann die mittlere $(10 - \\text{Zahl})$.',
          'Erst ganz zum Schluss die Subtraktion $40 - \\text{Zahl}$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['klammer-schachtel', 'prio-klammer'] },
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
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[kgv-hauptnenner, bruch-add]
      // Subtraktion mit drei Brüchen — testet Vorzeichen + kgV-Bestimmung in Kombination.
      ni(
        'Berechne $\\dfrac{7}{10} - \\dfrac{1}{4} + \\dfrac{1}{5}$ und gib den Zähler über dem Hauptnenner $20$ an.',
        13, 0, '',
        `**Ansatz:** Hauptnenner aller Nenner bestimmen, alle Brüche darauf erweitern, dann Zähler mit Vorzeichen addieren/subtrahieren.

**Rechnung:** $10 = 2 \\cdot 5$, $4 = 2^2$, $5 = 5$. Hauptnenner $= 2^2 \\cdot 5 = 20$. Erweitern: $\\tfrac{7}{10} = \\tfrac{14}{20}$, $\\tfrac{1}{4} = \\tfrac{5}{20}$, $\\tfrac{1}{5} = \\tfrac{4}{20}$. Zähler: $14 - 5 + 4 = 13$. Ergebnis $\\tfrac{13}{20}$.

**Probe:** Dezimal: $0{,}7 - 0{,}25 + 0{,}2 = 0{,}65 = 13/20$. ✓

**Typischer Fehler:** Vorzeichen verschlucken: $14 - 5 + 4$ als $14 - 9 = 5$ rechnen — Subtraktion vor Addition gemacht. Strichrechnung ist gleichrangig und geht streng von links nach rechts.`,
        [
          'Hauptnenner: $\\text{kgV}(10, 4, 5) = ?$',
          'Erweitern: $20/10=2$, $20/4=5$, $20/5=4$. Damit Zähler bestimmen.',
          'Strichrechnung links nach rechts: $14 - 5 = 9$, dann $+4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kgv-hauptnenner', 'bruch-add'] },
      ),
      // Bonus SG 0: transfer · matching · uses=[kgv-hauptnenner]
      // Vier verschiedene Bruchpaare ↔ ihre Hauptnenner — Trainings-Set für kgV-Routine.
      matching(
        'Ordne jedem Bruchpaar seinen Hauptnenner (kgV der Nenner) zu.',
        [
          { left: '$\\dfrac{1}{4}$ und $\\dfrac{1}{6}$',  right: '$12$' },
          { left: '$\\dfrac{1}{3}$ und $\\dfrac{1}{5}$',  right: '$15$' },
          { left: '$\\dfrac{1}{8}$ und $\\dfrac{1}{12}$', right: '$24$' },
          { left: '$\\dfrac{1}{2}$ und $\\dfrac{1}{9}$',  right: '$18$' },
        ],
        `**Ansatz:** Pro Paar Primfaktorzerlegung der Nenner, dann jede Primzahl mit höchstem Exponenten übernehmen.

**Rechnung:**
- $4 = 2^2$, $6 = 2 \\cdot 3 \\Rightarrow \\text{kgV} = 2^2 \\cdot 3 = 12$.
- $3$ und $5$ teilerfremd $\\Rightarrow \\text{kgV} = 3 \\cdot 5 = 15$.
- $8 = 2^3$, $12 = 2^2 \\cdot 3 \\Rightarrow \\text{kgV} = 2^3 \\cdot 3 = 24$.
- $2$ und $9 = 3^2$ teilerfremd $\\Rightarrow \\text{kgV} = 2 \\cdot 9 = 18$.

**Probe:** Jeder Hauptnenner ist durch BEIDE Einzelnenner ohne Rest teilbar.

**Typischer Fehler:** Pauschal $b \\cdot d$ nehmen — funktioniert, ist aber nur dann minimal, wenn die Nenner teilerfremd sind ($\\text{ggT} = 1$).`,
        [
          'Pro Paar: Primfaktoren beider Nenner.',
          'Höchster Exponent jeder Primzahl gewinnt.',
          'Bei teilerfremden Nennern ist Hauptnenner $= b \\cdot d$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['kgv-hauptnenner'] },
      ),
      // Bonus SG 0: apply-independent · number-input · uses=[kgv-hauptnenner, bruch-add]
      // Drei Brüche addieren/subtrahieren — Vorzeichen + kgV in Kombination.
      ni(
        'Berechne $\\dfrac{1}{3} + \\dfrac{2}{5} - \\dfrac{1}{15}$ und gib den Zähler über dem Hauptnenner $15$ an.',
        10, 0, '',
        `**Ansatz:** Hauptnenner aller drei Brüche bestimmen, alle erweitern, dann Zähler mit Vorzeichen verrechnen.

**Rechnung:** $3, 5, 15$ — alle Teiler von $15$, also $\\text{kgV} = 15$. Erweitern: $\\tfrac{1}{3} = \\tfrac{5}{15}$, $\\tfrac{2}{5} = \\tfrac{6}{15}$, $\\tfrac{1}{15} = \\tfrac{1}{15}$. Zähler: $5 + 6 - 1 = 10$. Ergebnis $\\tfrac{10}{15}$.

**Probe:** Dezimal: $0{,}333 + 0{,}4 - 0{,}067 = 0{,}667 = 10/15$. ✓

**Typischer Fehler:** Vorzeichen verlieren: $5 + 6 - 1 = 12$ rechnen (Subtraktion vergessen) oder $5 + 6 + 1 = 12$ (Vorzeichen ignoriert). Strichrechnung links nach rechts: $5 + 6 = 11$, dann $-1 = 10$.`,
        [
          'Hauptnenner: alle drei Nenner gehen in $15$ auf.',
          'Erweiterungsfaktoren: $15/3=5$, $15/5=3$, $15/15=1$.',
          'Zähler $1\\cdot 5 + 2\\cdot 3 - 1\\cdot 1 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['kgv-hauptnenner', 'bruch-add'] },
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
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[bruch-div-kehr, bruch-mult]
      // Ganze Zahl geteilt durch Bruch — testet Verständnis "Ganzzahl als n/1".
      ni(
        'Berechne $6 : \\dfrac{3}{4}$.',
        8, 0, '',
        `**Ansatz:** Ganze Zahl $6$ als $\\dfrac{6}{1}$ schreiben. Dann Division als Multiplikation mit Kehrwert.

**Rechnung:** $6 : \\dfrac{3}{4} = \\dfrac{6}{1} \\cdot \\dfrac{4}{3} = \\dfrac{24}{3} = 8$.

**Probe:** Wie oft passt $\\tfrac{3}{4}$ in $6$? In $1$ passt $\\tfrac{3}{4}$ etwas mehr als $1{,}33$-mal, in $6$ also $\\approx 8$-mal. ✓

**Typischer Fehler:** $6$ einfach durch $3/4$ als „$6/3 \\cdot 4 = 8$" rechnen — gibt zwar zufällig dasselbe, ist aber unsystematisch. Häufiger: $6 \\cdot \\tfrac{3}{4} = 4{,}5$ — Kehrwert vergessen.`,
        [
          'Schreibe $6$ als Bruch: $\\dfrac{6}{1}$.',
          'Kehrwert von $\\dfrac{3}{4}$ ist $\\dfrac{4}{3}$.',
          'Multiplizieren: $\\dfrac{6}{1} \\cdot \\dfrac{4}{3} = \\dfrac{24}{3}$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['bruch-div-kehr', 'bruch-mult'] },
      ),
      // Bonus SG 1: apply-independent · sorting · uses=[bruch-div-kehr, bruch-mult]
      // Schritt-für-Schritt-Ablauf einer Bruchdivision — testet die Reihenfolge der Methode.
      sorting(
        'Bringe die Schritte zur Berechnung von $\\dfrac{7}{8} : \\dfrac{3}{5}$ in die richtige Reihenfolge.',
        [
          'Divisor identifizieren: zweiter Bruch ist $\\dfrac{3}{5}$',
          'Kehrwert des Divisors bilden: $\\dfrac{5}{3}$',
          'Division zur Multiplikation umschreiben: $\\dfrac{7}{8} \\cdot \\dfrac{5}{3}$',
          'Zähler $\\cdot$ Zähler, Nenner $\\cdot$ Nenner: $\\dfrac{35}{24}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte in fester Reihenfolge: Divisor erkennen → Kehrwert → Multiplikation → Ausrechnen.

**Rechnung:** $\\dfrac{7}{8} : \\dfrac{3}{5} = \\dfrac{7}{8} \\cdot \\dfrac{5}{3} = \\dfrac{35}{24}$. ggT$(35, 24) = 1$ — bereits vollständig gekürzt.

**Probe:** Dezimal: $(7/8)/(3/5) = 0{,}875/0{,}6 \\approx 1{,}458 = 35/24$. ✓

**Typischer Fehler:** Schritt 2 überspringen — Division einfach durch Multiplikation ersetzen ohne Kehrwert. Oder den ersten Bruch stürzen statt den zweiten.`,
        [
          'Welcher Bruch ist der Divisor — der erste oder der zweite?',
          'Nur der Divisor wird gestürzt.',
          'Erst nach dem Stürzen multiplizieren — nie davor.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['bruch-div-kehr', 'bruch-mult'] },
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
      // Zusatz-Aufgabe SG 2: apply-guided · multiple-choice · uses=[doppelbruch]
      // Doppelbruch mit ganzer Zahl im Zähler oder Nenner — testet Erweiterung "Ganzzahl/1".
      mc(
        'Welcher Bruch ist gleich $\\dfrac{4}{\\tfrac{2}{5}}$?',
        ['$10$', '$\\dfrac{8}{5}$', '$\\dfrac{2}{5}$', '$\\dfrac{4}{10}$'],
        0,
        `**Ansatz:** Ganze Zahl $4$ als $\\dfrac{4}{1}$ schreiben, dann Doppelbruch als Division.

**Rechnung:** $\\dfrac{4}{2/5} = 4 : \\dfrac{2}{5} = \\dfrac{4}{1} \\cdot \\dfrac{5}{2} = \\dfrac{20}{2} = 10$.

**Probe:** Dezimal: $4 / 0{,}4 = 10$. ✓

**Typischer Fehler:** Statt zu stürzen einfach multiplizieren: $4 \\cdot \\tfrac{2}{5} = \\tfrac{8}{5}$ (Option 2). Genau das passiert, wenn man den Doppelbruch als „Produkt" liest.`,
        [
          'Doppelbruch = Division. Hier $4$ geteilt durch $\\tfrac{2}{5}$.',
          'Kehrwert von $\\tfrac{2}{5}$ ist $\\tfrac{5}{2}$.',
          'Mit Dezimalprobe gegenchecken: $4 / 0{,}4$.',
        ],
        {
          1: '$\\tfrac{8}{5}$ entsteht bei $4 \\cdot \\tfrac{2}{5}$ — Multiplikation statt Division. Den Bruch im Nenner muss man stürzen.',
          2: '$\\tfrac{2}{5}$ ist nur der Nenner-Bruch — die $4$ wurde komplett ignoriert.',
          3: '$\\tfrac{4}{10}$ entsteht durch falsche Erweiterung: $\\tfrac{4 \\cdot 1}{1 \\cdot 10}$ ohne Verständnis der Doppelbruch-Regel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['doppelbruch'] },
      ),
      // Bonus SG 2: transfer · matching · uses=[doppelbruch]
      // Vier Doppelbrüche ↔ einfache Form — verschiedene Konstellationen (Ganzzahl im Zähler/Nenner).
      matching(
        'Ordne jedem Doppelbruch seine einfache Form zu.',
        [
          { left: '$\\dfrac{\\tfrac{1}{2}}{\\tfrac{1}{4}}$', right: '$2$' },
          { left: '$\\dfrac{\\tfrac{3}{5}}{\\tfrac{6}{5}}$', right: '$\\dfrac{1}{2}$' },
          { left: '$\\dfrac{\\tfrac{2}{3}}{\\tfrac{1}{6}}$', right: '$4$' },
          { left: '$\\dfrac{1}{\\tfrac{2}{3}}$',             right: '$\\dfrac{3}{2}$' },
        ],
        `**Ansatz:** Doppelbruch = obere Bruch geteilt durch untere Bruch = obere mal Kehrwert der unteren. Ganzzahlen über $1$ schreiben.

**Rechnung:**
- $\\tfrac{1/2}{1/4} = \\tfrac{1}{2} \\cdot \\tfrac{4}{1} = \\tfrac{4}{2} = 2$.
- $\\tfrac{3/5}{6/5} = \\tfrac{3}{5} \\cdot \\tfrac{5}{6} = \\tfrac{15}{30} = \\tfrac{1}{2}$.
- $\\tfrac{2/3}{1/6} = \\tfrac{2}{3} \\cdot \\tfrac{6}{1} = \\tfrac{12}{3} = 4$.
- $\\tfrac{1}{2/3} = \\tfrac{1}{1} \\cdot \\tfrac{3}{2} = \\tfrac{3}{2}$.

**Probe:** Dezimal: $0{,}5/0{,}25 = 2$, $0{,}6/1{,}2 = 0{,}5$, $0{,}667/0{,}167 = 4$, $1/0{,}667 = 1{,}5$. Alles passt. ✓

**Typischer Fehler:** Doppelbruch als Multiplikation lesen — etwa $\\tfrac{1/2}{1/4}$ als $\\tfrac{1 \\cdot 1}{2 \\cdot 4} = \\tfrac{1}{8}$. Der mittlere Bruchstrich heißt Division, nicht Multiplikation.`,
        [
          'Doppelbruch = oberer Bruch geteilt durch unteren.',
          'Nur den unteren stürzen, dann multiplizieren.',
          'Ganzzahl $n$ als $\\tfrac{n}{1}$ schreiben — ihr Kehrwert ist $\\tfrac{1}{n}$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['doppelbruch'] },
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
        { stage: 'transfer', subGoal: 2, uses: ['doppelbruch'] },
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
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[ggt-kuerzen]
      // Größere Zahlen mit gemeinsamen Faktoren — testet ggT-Bestimmung mit Primfaktoren.
      ni(
        'Kürze $\\dfrac{210}{462}$ vollständig und gib den Zähler des Ergebnisses an (Nenner wird $11$).',
        5, 0, '',
        `**Ansatz:** Beide Zahlen in Primfaktoren zerlegen, ggT als Produkt der gemeinsamen Primfaktoren mit Minimum-Exponent bestimmen.

**Rechnung:** $210 = 2 \\cdot 3 \\cdot 5 \\cdot 7$. $462 = 2 \\cdot 3 \\cdot 7 \\cdot 11$. Gemeinsam: $2 \\cdot 3 \\cdot 7 = 42$. Also $\\dfrac{210}{462} = \\dfrac{210/42}{462/42} = \\dfrac{5}{11}$.

**Probe:** $\\text{ggT}(5, 11) = 1$ (beides Primzahlen, verschieden) — vollständig gekürzt. Dezimal: $210/462 \\approx 0{,}4545 = 5/11$. ✓

**Typischer Fehler:** Stufenweise mit kleinen Faktoren (z. B. nur durch $2$): $\\tfrac{210}{462} \\to \\tfrac{105}{231}$ — rechnerisch richtig, aber nicht fertig. Oder gemeinsame Primfaktoren übersehen, etwa die $7$ vergessen.`,
        [
          'Primfaktorzerlegung beider Zahlen.',
          'ggT = Produkt der gemeinsamen Primzahlen.',
          'Sind $5$ und $11$ teilerfremd? — Endkontrolle.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['ggt-kuerzen'] },
      ),
      // Bonus SG 3: transfer · matching · uses=[ggt-kuerzen]
      // Vier Brüche ↔ vollständig gekürzte Form — Trainings-Set für ggT-Routine.
      matching(
        'Ordne jedem Bruch seine vollständig gekürzte Form zu.',
        [
          { left: '$\\dfrac{60}{72}$',  right: '$\\dfrac{5}{6}$' },
          { left: '$\\dfrac{45}{63}$',  right: '$\\dfrac{5}{7}$' },
          { left: '$\\dfrac{48}{64}$',  right: '$\\dfrac{3}{4}$' },
          { left: '$\\dfrac{70}{105}$', right: '$\\dfrac{2}{3}$' },
        ],
        `**Ansatz:** Pro Bruch ggT bestimmen, Zähler und Nenner durch ggT teilen.

**Rechnung:**
- $60 = 2^2 \\cdot 3 \\cdot 5$, $72 = 2^3 \\cdot 3^2$ $\\Rightarrow$ ggT $= 2^2 \\cdot 3 = 12$. $60/12 = 5$, $72/12 = 6$.
- $45 = 3^2 \\cdot 5$, $63 = 3^2 \\cdot 7$ $\\Rightarrow$ ggT $= 9$. $45/9 = 5$, $63/9 = 7$.
- $48 = 2^4 \\cdot 3$, $64 = 2^6$ $\\Rightarrow$ ggT $= 2^4 = 16$. $48/16 = 3$, $64/16 = 4$.
- $70 = 2 \\cdot 5 \\cdot 7$, $105 = 3 \\cdot 5 \\cdot 7$ $\\Rightarrow$ ggT $= 5 \\cdot 7 = 35$. $70/35 = 2$, $105/35 = 3$.

**Probe:** In jedem Endbruch sind Zähler und Nenner teilerfremd ($\\text{ggT} = 1$). ✓

**Typischer Fehler:** Stufenweise mit kleinem Faktor kürzen und früh aufhören — z. B. $\\tfrac{48}{64}$ nur durch $4$ kürzen $\\to \\tfrac{12}{16}$ statt direkt $\\tfrac{3}{4}$. Rechnerisch korrekt, aber nicht vollständig gekürzt.`,
        [
          'Pro Bruch ggT von Zähler und Nenner finden.',
          'Primfaktorzerlegung beider Zahlen, gemeinsame Primfaktoren mit Minimum-Exponenten.',
          'Endkontrolle: ggT der Endform muss $1$ sein.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['ggt-kuerzen'] },
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
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[prozent-grund]
      // Prozentsatz p gesucht — die seltenste Umstellung, kommt im Studium oft als „Anteil bestimmen" vor.
      ni(
        'In einer Stahllegierung von $640\\,\\text{kg}$ sind $48\\,\\text{kg}$ Chrom enthalten. Wie hoch ist der Chrom-Anteil in Prozent?',
        7.5, 0.05, '%',
        `**Ansatz:** Formel nach $p$ umstellen: $p = \\dfrac{W \\cdot 100}{G}$.

**Rechnung:** $p = \\dfrac{48 \\cdot 100}{640} = \\dfrac{4800}{640} = 7{,}5$. Also $7{,}5\\,\\%$.

**Probe:** $7{,}5\\%$ von $640\\,\\text{kg}$: $640 \\cdot 0{,}075 = 48\\,\\text{kg}$. ✓

**Typischer Fehler:** Das $\\cdot 100$ vergessen: $48/640 = 0{,}075$ als Antwort hinschreiben, ohne in Prozent umzurechnen — die Antwort wäre dann der Dezimalanteil, nicht der Prozentsatz.`,
        [
          'Welche Größe ist gesucht — $W$, $G$ oder $p$?',
          'Formel nach $p$ umstellen: $p = W \\cdot 100 / G$.',
          'Probe: $p\\%$ von $640$ muss $48$ ergeben.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prozent-grund'] },
      ),
      // Bonus SG 0: apply-independent · number-input · uses=[prozent-grund]
      // Anteilsrechnung im Fertigungs-Kontext (Ausschuss-Quote) — nach p umgestellt.
      ni(
        'Eine Maschine produziert $720$ Teile pro Schicht, davon sind $18$ Ausschuss. Wie hoch ist die Ausschuss-Quote in Prozent?',
        2.5, 0.05, '%',
        `**Ansatz:** Anteil bestimmen — Formel nach $p$ umgestellt: $p = W \\cdot 100 / G$.

**Rechnung:** $p = \\dfrac{18 \\cdot 100}{720} = \\dfrac{1800}{720} = 2{,}5$. Ausschuss-Quote: $2{,}5\\,\\%$.

**Probe:** $2{,}5\\%$ von $720$: $720 \\cdot 0{,}025 = 18$ Teile. ✓

**Typischer Fehler:** $18/720 = 0{,}025$ als Antwort hinschreiben (Dezimalzahl statt Prozent). Das $\\cdot 100$ vergessen.`,
        [
          'Welche Größe ist gesucht — $W$, $G$ oder $p$?',
          'Formel nach $p$ umstellen: $p = W \\cdot 100/G$.',
          'Probe: ergibt deine Quote, multipliziert mit $720$, wirklich $18$?',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['prozent-grund'] },
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
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[wachstumsfaktor]
      // Aufschlag (MwSt) statt Reduktion — testet Faktor (1+p/100) explizit, nicht (1-p/100).
      ni(
        'Auf einen Nettopreis von $250\\,€$ werden $20\\%$ Mehrwertsteuer aufgeschlagen. Brutto-Preis in €?',
        300, 0, '',
        `**Ansatz:** Aufschlag um $p\\%$ = Faktor $(1 + p/100)$.

**Rechnung:** $1 + 20/100 = 1{,}20$. $250 \\cdot 1{,}20 = 300$.

**Probe:** Differenz: $300 - 250 = 50$. $50/250 = 0{,}20 = 20\\%$. ✓

**Typischer Fehler:** Den MwSt-Betrag $50\\,€$ als Brutto-Preis lesen — der ist nur der Aufschlag, der Brutto-Preis ist $\\text{Netto} + \\text{MwSt}$.`,
        [
          'Aufschlag um $p\\%$ = Faktor $(1 + p/100)$.',
          '$1 + 0{,}20 = 1{,}20$.',
          '$250 \\cdot 1{,}20 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wachstumsfaktor'] },
      ),
      // Bonus SG 1: apply-independent · number-input · uses=[wachstumsfaktor, prozent-grund]
      // Netto aus Brutto rechnen — typische MwSt-Rückrechnung.
      ni(
        'Eine Maschine kostet brutto $1\\,190\\,€$ inkl. $19\\,\\%$ Mehrwertsteuer. Wie hoch ist der Nettopreis (in €)?',
        1000, 0, '',
        `**Ansatz:** Brutto $=$ Netto $\\cdot (1 + p/100)$. Nach Netto umstellen: $\\text{Netto} = \\text{Brutto}/(1 + p/100)$.

**Rechnung:** $\\text{Netto} = 1190 / 1{,}19 = 1000$.

**Probe:** $1000 \\cdot 1{,}19 = 1190\\,€$. ✓ Differenz $190\\,€$ ist genau $19\\%$ von $1000$.

**Typischer Fehler:** $19\\%$ vom Brutto abziehen: $1190 \\cdot 0{,}19 = 226{,}10$, dann $1190 - 226{,}10 = 963{,}90$ — falsch, weil die MwSt sich auf das Netto bezieht, nicht das Brutto.`,
        [
          'Brutto enthält bereits die MwSt — welcher Faktor wurde aufs Netto angewandt?',
          'Wachstumsfaktor: $1 + 0{,}19 = 1{,}19$.',
          'Umstellen: Brutto durch Faktor teilen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wachstumsfaktor', 'prozent-grund'] },
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
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[prozent-kette, wachstumsfaktor]
      // Drei Änderungen in Folge — Verallgemeinerung der 2-Schritt-Kette auf n Schritte.
      ni(
        'Eine Aktie verliert in drei Quartalen jeweils $4\\%$. Welcher Anteil (in Prozent, eine Dezimalstelle) bleibt vom Ausgangskurs übrig?',
        88.5, 0.1, '%',
        `**Ansatz:** Drei aufeinanderfolgende Änderungen $\\to$ Faktoren multiplizieren.

**Rechnung:** Jeder Faktor: $1 - 0{,}04 = 0{,}96$. Gesamt: $0{,}96^3 = 0{,}884736 \\approx 0{,}885 = 88{,}5\\%$.

**Probe:** Schrittweise: $100 \\to 96 \\to 92{,}16 \\to 88{,}47$. Anteil $88{,}47/100 \\approx 88{,}5\\%$. ✓

**Typischer Fehler:** $3 \\cdot 4\\% = 12\\%$ Verlust annehmen → $88\\%$ — der wahre Verlust ist etwas kleiner als die Summe, weil jeder Folge-Verlust auf einen kleineren Bezugswert wirkt.`,
        [
          'Drei Quartale = drei Faktoren multiplizieren.',
          'Jeder Faktor: $1 - 0{,}04 = 0{,}96$.',
          '$0{,}96 \\cdot 0{,}96 \\cdot 0{,}96 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['prozent-kette', 'wachstumsfaktor'] },
      ),
      // Bonus SG 2: apply-guided · multiple-choice · uses=[prozent-kette, wachstumsfaktor]
      // Extreme Asymmetrie: +50%/-50% — illustriert die Multiplikativität besonders deutlich.
      mc(
        'Ein Aktienkurs steigt um $50\\%$ und fällt anschließend um $50\\%$. Welcher Anteil bleibt vom Originalkurs übrig?',
        ['$75\\%$', '$100\\%$', '$50\\%$', '$25\\%$'],
        0,
        `**Ansatz:** Faktoren nacheinander multiplizieren — Prozente NIE addieren.

**Rechnung:** $1{,}50 \\cdot 0{,}50 = 0{,}75$. Es bleiben $75\\%$ des Originalkurses, also ein Verlust von $25$ Prozentpunkten.

**Probe:** Start $100$. $+50\\% \\to 150$. $-50\\%$ von $150$: $150 \\cdot 0{,}5 = 75$. Kontrolle: $75/100 = 0{,}75 = 75\\%$. ✓

**Typischer Fehler:** „$+50$ und $-50$ heben sich auf $\\to 100\\%$" — die naive Addition ignoriert, dass der zweite Faktor auf einen größeren Bezugswert wirkt. Je extremer die Prozentsätze, desto deutlicher der Effekt.`,
        [
          'Bezugswert ändert sich nach der ersten Änderung!',
          'Zwei Wachstumsfaktoren: $1 + 0{,}5$ und $1 - 0{,}5$.',
          'Multiplizieren, nicht addieren.',
        ],
        {
          1: '$100\\%$ wäre korrekt, wenn Prozente sich additiv verhalten würden — tun sie nicht. Faktoren multiplizieren: $1{,}5 \\cdot 0{,}5 = 0{,}75$.',
          2: '$50\\%$ entspräche nur dem zweiten Schritt ($-50\\%$), die vorherige Erhöhung fehlt. $50/100 \\neq 50/150$.',
          3: '$25\\%$ wäre $1{,}5 \\cdot 0{,}5^2$ oder Ähnliches — keine sinnvolle Konstellation der zwei Schritte.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['prozent-kette', 'wachstumsfaktor'] },
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
          0: 'Diese Antwort beschreibt das Symptom („Tautologie"), trifft aber nicht den Konzeptfehler. Der eigentliche Fehler ist die Verwechslung direkt ↔ indirekt — siehe Vergleichsantwort.',
          2: 'Die Antwort $12\\,\\text{h}$ ist falsch. Doppelte Rohre müssen es schneller schaffen, nicht gleich lang.',
          3: 'Die Zahl der Rohre $3$ und $6$ ist nicht das Problem — die Anwendung der Proportionalitätsformel ist es.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['direkt-prop', 'indirekt-prop'] },
      ),
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[direkt-prop]
      // Direkter Dreisatz mit nicht-runden Zahlen — testet sauberes Aufstellen der Proportion.
      ni(
        'Ein Auto verbraucht $42\\,\\text{L}$ Diesel auf $560\\,\\text{km}$. Wie viel verbraucht es auf $750\\,\\text{km}$ (in L, eine Dezimalstelle)?',
        56.3, 0.05, 'L',
        `**Ansatz:** Direkt proportional: längere Strecke $\\to$ mehr Verbrauch. Verhältnis $V/s$ konstant.

**Rechnung:** $\\dfrac{42}{560} = \\dfrac{V_2}{750}$. Also $V_2 = \\dfrac{42 \\cdot 750}{560} = \\dfrac{31\\,500}{560} = 56{,}25\\,\\text{L} \\approx 56{,}3\\,\\text{L}$.

**Probe:** Verbrauch pro km: $42/560 = 0{,}075\\,\\text{L/km}$. Auf $750\\,\\text{km}$: $750 \\cdot 0{,}075 = 56{,}25\\,\\text{L}$. ✓

**Typischer Fehler:** Indirekt rechnen ($42 \\cdot 560 / 750 = 31{,}4\\,\\text{L}$) — funktioniert nur bei Größen wie „Pumpen × Zeit", nicht bei „Verbrauch × Strecke".`,
        [
          'Mehr km → mehr Verbrauch: direkt proportional.',
          'Verhältnis $V/s$ konstant: $42/560 = V_2/750$.',
          'Oder Stückwert: $V$ pro km berechnen, dann $\\times 750$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['direkt-prop'] },
      ),
      // Bonus SG 3: transfer · sorting · uses=[indirekt-prop]
      // Standard-Workflow eines indirekten Dreisatzes — Reihenfolge der Schritte.
      sorting(
        'Bringe die Schritte zur Lösung der Aufgabe „$5$ Bagger graben in $12$ Tagen einen Graben — wie lange brauchen $8$ Bagger?" in die richtige Reihenfolge.',
        [
          'Typ erkennen: mehr Bagger $\\to$ weniger Zeit, also indirekt proportional',
          'Erhaltungsgröße aufstellen: $n_1 \\cdot t_1 = n_2 \\cdot t_2$',
          'Bekannte Werte einsetzen: $5 \\cdot 12 = 8 \\cdot t_2$, also $60 = 8 \\cdot t_2$',
          'Nach $t_2$ auflösen: $t_2 = 60/8 = 7{,}5\\,\\text{Tage}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte in fester Reihenfolge: Typ erkennen $\\to$ Erhaltungsgröße $\\to$ Einsetzen $\\to$ Auflösen.

**Rechnung:** Endwert: $7{,}5\\,\\text{Tage}$. Plausibilität: weniger als $12$ Tage, weil mehr Bagger.

**Probe:** $8 \\cdot 7{,}5 = 60 = 5 \\cdot 12$ — Bagger-Tage konstant. ✓

**Typischer Fehler:** Schritt 1 überspringen und schematisch mit Verhältnissen rechnen ($5/12 = 8/t$), das ergäbe $t = 19{,}2$ — direkt-proportional gerechnet. Mehr Bagger müssen aber kürzer arbeiten, nicht länger.`,
        [
          'Erst Typ klären — direkt oder indirekt?',
          'Bei indirekt ist das Produkt der Konstante.',
          'Erst nach dem Einsetzen Werte auflösen.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['indirekt-prop'] },
      ),
      matching(
        'Ordne jeder Situation die korrekte Erhaltungsgröße (was bleibt konstant?) zu.',
        [
          { left: 'Preis pro kg Ware',                        right: 'Verhältnis $\\text{€}/\\text{kg}$ konstant (direkt)' },
          { left: 'Gärtner ↔ Arbeitszeit (gleicher Job)',     right: 'Produkt $n \\cdot t$ konstant (indirekt)' },
          { left: 'Strecke ↔ Zeit (konstante Geschw.)',       right: 'Verhältnis $s/t = v$ konstant (direkt)' },
          { left: 'Druck ↔ Volumen (Boyle-Mariotte)',         right: 'Produkt $p \\cdot V$ konstant (indirekt)' },
        ],
        `**Ansatz:** Jeder Proportionalitätstyp hat eine charakteristische Erhaltungsgröße — bei direkter ein konstantes VERHÄLTNIS, bei indirekter ein konstantes PRODUKT.

**Rechnung:**
- Preis/kg: $\\text{€}/\\text{kg}$ konstant $\\Rightarrow$ direkt.
- Gärtner $\\cdot$ Zeit: Personenstunden konstant $\\Rightarrow$ indirekt.
- Strecke/Zeit: Geschwindigkeit konstant $\\Rightarrow$ direkt.
- Druck $\\cdot$ Volumen: Boyle, $pV$ konstant $\\Rightarrow$ indirekt.

**Probe:** Bei direkter Proportionalität lässt sich die Konstante als „Stückwert" lesen (Preis pro Stück, Geschwindigkeit). Bei indirekter Proportionalität als „Gesamtarbeit/Gesamtmenge" (Personenstunden, Gas-Energie).

**Typischer Fehler:** Bei „mehr Pumpen, weniger Zeit" sofort an direkte Proportionalität denken — der Test ist immer: ist Verhältnis ODER Produkt invariant?`,
        [
          'Direkt: Verhältnis $x/y$ konstant. Indirekt: Produkt $x \\cdot y$ konstant.',
          'Pro Situation: Was kannst du als Stückwert lesen, was als Gesamtmenge?',
          'Zahlentest: Verdopple $x$, was passiert mit $y$? (verdoppelt $\\to$ direkt; halbiert $\\to$ indirekt)',
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
      // Zusatz-Aufgabe SG 4: apply-independent · number-input · uses=[prozentpunkt]
      // Rückwärts: aus relativer Änderung den absoluten Endwert in Prozentpunkten berechnen.
      ni(
        'Ein Aktien-Anteil von ursprünglich $40\\%$ steigt um $25\\%$ (relativ). Wie hoch ist der neue Anteil in Prozent?',
        50, 0.05, '%',
        `**Ansatz:** Relative Erhöhung $25\\%$ wirkt auf den Ausgangswert $40\\%$. Also Wachstumsfaktor $\\times 1{,}25$ — Ergebnis bleibt aber eine Prozentzahl (kein Doppelprozent).

**Rechnung:** $40 \\cdot 1{,}25 = 50$. Neuer Anteil: $50\\,\\%$. Absolut: $+10$ Prozentpunkte.

**Probe:** $50/40 = 1{,}25$ — relative Erhöhung um $25\\%$. ✓ Differenz $50 - 40 = 10$ Prozentpunkte.

**Typischer Fehler:** $40\\% + 25\\% = 65\\%$ rechnen — vermischt Prozentpunkte (additiv) mit Prozent (multiplikativ).`,
        [
          'Relative Erhöhung wirkt auf den Ausgangswert.',
          'Wachstumsfaktor $1{,}25$ angewandt auf $40$.',
          'Antwort bleibt in Prozenteinheiten — Aktien-Anteil.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['prozentpunkt', 'wachstumsfaktor'] },
      ),
      // Bonus SG 4: apply-guided · multiple-choice · uses=[prozentpunkt, wachstumsfaktor]
      // Ökonomie-Beispiel mit beiden Sichtweisen — testet Disambiguation.
      mc(
        'Die Inflationsrate steigt von $2\\,\\%$ auf $3{,}5\\,\\%$. Welche Aussage ist mathematisch eindeutig korrekt?',
        [
          'Anstieg um $1{,}5$ Prozentpunkte (absolut) bzw. um $75\\%$ (relativ).',
          'Anstieg um $1{,}5\\%$.',
          'Anstieg um $1{,}5$ Prozentpunkte und gleichzeitig um $1{,}5\\%$ — beides synonym.',
          'Anstieg um $75$ Prozentpunkte.',
        ],
        0,
        `**Ansatz:** Zwei verschiedene Größen sauber trennen — absolute Differenz vs. relative Änderung.

**Rechnung:** Absolut: $3{,}5 - 2 = 1{,}5$ Prozentpunkte. Relativ: $\\dfrac{3{,}5 - 2}{2} = \\dfrac{1{,}5}{2} = 0{,}75 = 75\\%$.

**Probe:** Wachstumsfaktor zur Kontrolle: $3{,}5/2 = 1{,}75 \\Rightarrow$ relativer Anstieg $+75\\%$. Differenz $1{,}5$ ist die Prozentpunkt-Angabe.

**Typischer Fehler:** Das mehrdeutige „Anstieg um $1{,}5\\%$" — meinen Medien meist Prozentpunkte, mathematisch heißt $\\%$ aber relative Änderung. Ohne Kontext mehrdeutig.`,
        [
          'Was ist der Unterschied zwischen Prozent und Prozentpunkt?',
          'Absolut: Differenz der Sätze. Relativ: Differenz $/$ Ausgangswert.',
          'Verhältnis $3{,}5 / 2 = ?$',
        ],
        {
          1: 'Diese Formulierung ist umgangssprachlich, aber mehrdeutig. „$1{,}5\\%$" könnte sowohl $+1{,}5$ Prozentpunkte als auch $+1{,}5\\%$ relativ ($\\to 2{,}03\\%$) heißen.',
          2: 'Prozentpunkte und Prozent sind NICHT synonym — das eine ist absolut, das andere relativ. Hier $1{,}5$ Prozentpunkte $\\neq 1{,}5\\%$ relativ.',
          3: '$75$ Prozentpunkte wären eine Differenz von $75$ Prozenteinheiten ($2\\% \\to 77\\%$). Hier sind es nur $1{,}5$.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['prozentpunkt', 'wachstumsfaktor'] },
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
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[koeff-addieren]
      // Mehrere Variablen mit unterschiedlichen Termen — testet Trennung in zwei Sammelgruppen.
      ni(
        'Vereinfache $4a + 7b - 2a + 3b - a$ und gib den Koeffizienten von $a$ im Ergebnis an.',
        1, 0, '',
        `**Ansatz:** Zwei Sammelgruppen — alles mit $a$ und alles mit $b$ getrennt zusammenfassen.

**Rechnung:** $a$-Terme: $4a - 2a - a = (4 - 2 - 1)a = a$ (Koeffizient $1$). $b$-Terme: $7b + 3b = 10b$. Ergebnis: $a + 10b$.

**Probe:** Zahlentest $a = 1, b = 1$: Original $4 + 7 - 2 + 3 - 1 = 11$. Ergebnis $1 + 10 = 11$. ✓

**Typischer Fehler:** $a$- und $b$-Terme mischen: $4a + 7b - 2a + 3b - a$ als $(4+7-2+3-1)\\cdot ab = 11ab$ — das setzt $a = b$ voraus, was nicht gegeben ist.`,
        [
          'Ungleiche Variablen $\\to$ getrennte Sammelgruppen.',
          'Erst alle $a$-Terme zusammenfassen, dann alle $b$-Terme.',
          'Vorzeichen sorgfältig: $4a - 2a - a = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['koeff-addieren'] },
      ),
      // Bonus SG 0: transfer · sorting · uses=[gleichartige-terme, koeff-addieren]
      // Kompletter Ablauf zum Sortieren mehrerer Sammelgruppen — Strukturlernen.
      sorting(
        'Bringe die Schritte zum Vereinfachen von $4x + 3y - 2x + y - x$ in die richtige Reihenfolge.',
        [
          'Sammelgruppen identifizieren: $x$-Terme und $y$-Terme getrennt',
          '$x$-Terme zusammenfassen: $4x - 2x - x = (4 - 2 - 1) x = x$',
          '$y$-Terme zusammenfassen: $3y + y = 4y$',
          'Endausdruck: $x + 4y$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte: Sammelgruppen erkennen $\\to$ jede Gruppe einzeln zusammenfassen $\\to$ Endausdruck.

**Rechnung:** $4x + 3y - 2x + y - x = (4 - 2 - 1)x + (3 + 1)y = x + 4y$.

**Probe:** Zahlentest $x = 1, y = 1$: Original $4 + 3 - 2 + 1 - 1 = 5$. Endausdruck $1 + 4 = 5$. ✓

**Typischer Fehler:** Alle Koeffizienten in einen Topf werfen: $4 + 3 - 2 + 1 - 1 = 5$ und schreiben „$5xy$" oder „$5(x+y)$" — ungleiche Variablen lassen sich nicht zusammenwerfen.`,
        [
          'Ungleiche Variablen $\\to$ getrennte Sammelgruppen.',
          'Pro Gruppe: nur Koeffizienten verrechnen.',
          'Variablen-Teil bleibt unverändert.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['gleichartige-terme', 'koeff-addieren'] },
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
        34, 0, '',
        `**Ansatz:** Beide Klammern ausmultiplizieren (Distributivgesetz), Vorzeichen vor der zweiten Klammer beachten, vereinfachen, einsetzen.

**Rechnung:** $5(2x+3) = 10x + 15$. $-3(x-4) = -3x + 12$ (Minus auf beide Summanden). Summe: $10x + 15 - 3x + 12 = 7x + 27$. Bei $x = 1$: $7 \\cdot 1 + 27 = 34$.

**Probe:** Direkt einsetzen vor dem Vereinfachen: $5 \\cdot (2+3) - 3 \\cdot (1-4) = 5 \\cdot 5 - 3 \\cdot (-3) = 25 + 9 = 34$. ✓

**Typischer Fehler:** Das Minus vor der zweiten Klammer nur auf das $x$ anwenden, nicht auf $-4$: $10x + 15 - 3x - 12 = 7x + 3 \\Rightarrow 10$ bei $x=1$ — Vorzeichen-Fehler beim zweiten Summanden.`,
        [
          'Beide Klammern ausmultiplizieren — Distributivgesetz.',
          'Minus vor der zweiten Klammer: alle Summanden negieren.',
          'Erst vereinfachen, dann $x = 1$ einsetzen — oder umgekehrt zur Probe.',
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
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[distributiv]
      // Doppel-Distributiv (FOIL) ohne binomische Formel — testet systematisches Ausmultiplizieren.
      ni(
        'Multipliziere $(2x + 3)(x - 5)$ aus und gib den Koeffizienten von $x$ im Ergebnis an.',
        -7, 0, '',
        `**Ansatz:** Jeder Summand der ersten Klammer mit jedem Summanden der zweiten — vier Produkte.

**Rechnung:** $(2x)(x) + (2x)(-5) + 3 \\cdot x + 3 \\cdot (-5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$. Koeffizient von $x$: $-7$.

**Probe:** Zahlentest $x = 2$: $(4+3)(2-5) = 7 \\cdot (-3) = -21$. Ergebnis: $2 \\cdot 4 - 7 \\cdot 2 - 15 = 8 - 14 - 15 = -21$. ✓

**Typischer Fehler:** Nur „erstes mit erstem, zweites mit zweitem" rechnen: $(2x)(x) + (3)(-5) = 2x^2 - 15$ — die gemischten Produkte $(2x)(-5)$ und $3 \\cdot x$ fehlen. Ohne diese fehlt der lineare Term ganz.`,
        [
          'Vier Produkte: jeder Summand der einen Klammer mit jedem der anderen.',
          '$(2x)(x), (2x)(-5), (3)(x), (3)(-5)$ — alle vier hinschreiben.',
          'Linearer Koeffizient = $-10 + 3$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['distributiv'] },
      ),
      // Bonus SG 1: transfer · matching · uses=[distributiv, ausklammern]
      // Bidirektional: ausgeklammerte Form ↔ ausmultiplizierte Form.
      matching(
        'Ordne jeder ausgeklammerten Form ihre ausmultiplizierte Form zu.',
        [
          { left: '$3x(x + 2)$',          right: '$3x^2 + 6x$' },
          { left: '$2(a - b)$',           right: '$2a - 2b$' },
          { left: '$x(x^2 + 1)$',         right: '$x^3 + x$' },
          { left: '$5(2y - 3)$',          right: '$10y - 15$' },
        ],
        `**Ansatz:** Distributivgesetz $a(b + c) = ab + ac$ in Aktion. Faktor wirkt auf JEDEN Summanden.

**Rechnung:**
- $3x(x + 2) = 3x \\cdot x + 3x \\cdot 2 = 3x^2 + 6x$
- $2(a - b) = 2a - 2b$
- $x(x^2 + 1) = x \\cdot x^2 + x \\cdot 1 = x^3 + x$
- $5(2y - 3) = 10y - 15$

**Probe:** Jede Zeile lässt sich rückwärts wieder ausklammern $\\Rightarrow$ Originalform.

**Typischer Fehler:** Faktor nur auf den ersten Summanden — $3x(x+2) = 3x^2 + 2$ wäre falsch. Auch bei Variablen-Faktoren gilt das Distributivgesetz vollständig.`,
        [
          'Faktor auf JEDEN Summanden in der Klammer.',
          'Bei Variablen: Exponenten gleicher Basen addieren ($x \\cdot x^2 = x^3$).',
          'Vorzeichen mitnehmen: $-b$ wird $-ab$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['distributiv', 'ausklammern'] },
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
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[binom-1]
      // Faktorisieren rückwärts — testet Erkennen einer binomischen Formel im Termmuster.
      ni(
        'Faktorisiere $x^2 + 14x + 49$ als $(x + b)^2$ und gib $b$ an.',
        7, 0, '',
        `**Ansatz:** Muster der 1. binomischen Formel rückwärts: $a^2 + 2ab + b^2 = (a+b)^2$. Mit $a = x$ stimmt $b^2 = 49$ und $2ab = 14x$.

**Rechnung:** $b^2 = 49 \\Rightarrow b = 7$ (positiv, weil mittlerer Term positiv). Probe: $2 \\cdot x \\cdot 7 = 14x$. ✓ Faktorisierung: $(x + 7)^2$.

**Probe:** Ausmultiplizieren: $(x+7)^2 = x^2 + 14x + 49$. ✓

**Typischer Fehler:** $b = \\sqrt{49} = 7$ erkennen, aber nicht prüfen, ob der mittlere Term zur Wahl passt. Bei z. B. $x^2 + 10x + 49$ gäbe es kein passendes $b$ (es wäre weder die 1. noch die 2. binomische Formel).`,
        [
          'Welche binomische Formel hat das Muster $? + ?\\cdot x + ?$ mit beiden Vorzeichen positiv?',
          '$b^2 = 49 \\Rightarrow b = ?$',
          'Probe: $2 \\cdot x \\cdot b$ muss den mittleren Term geben.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['binom-1'] },
      ),
      // Bonus SG 2: apply-independent · number-input · uses=[binom-2]
      // Faktorisieren mit 2. binomischer Formel — testet Erkennen + Ausnahmefall (a > 1).
      ni(
        'Faktorisiere $9x^2 - 24x + 16$ als $(ax - b)^2$ mit positiven $a, b$ und gib $a + b$ an.',
        7, 0, '',
        `**Ansatz:** Muster der 2. binomischen Formel rückwärts. Für $(ax - b)^2 = a^2 x^2 - 2abx + b^2$ müssen $a^2 = 9$ und $b^2 = 16$ gelten, plus Mittelterm-Probe.

**Rechnung:** $a^2 = 9 \\Rightarrow a = 3$. $b^2 = 16 \\Rightarrow b = 4$. Probe Mittelterm: $-2ab = -2 \\cdot 3 \\cdot 4 = -24$. ✓ Faktorisierung: $(3x - 4)^2$. Gefragt: $a + b = 3 + 4 = 7$.

**Probe:** Ausmultiplizieren: $(3x - 4)^2 = 9x^2 - 24x + 16$. ✓

**Typischer Fehler:** $a = 1$ annehmen, also $a^2 = 1 \\neq 9$. Oder $b = -4$ (Vorzeichen falsch zugeordnet). Wichtig: die 2. binomische Formel hat Form $(ax - b)^2$ mit BEIDEN positiven Vorzeichen in der Wurzel — das Minus steht in der Klammer.`,
        [
          'Welche binomische Formel passt — $(a-b)^2$ oder $(a+b)^2$?',
          '$a^2 = 9$ und $b^2 = 16$ — was sind $a$, $b$?',
          'Mittelterm-Probe: $-2ab$ muss zu $-24x$ passen.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['binom-2'] },
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
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[formel-umstellen]
      // Formel mit Quotient — testet Multiplikation mit dem Nenner als ersten Schritt.
      ni(
        'Stelle $\\rho = \\dfrac{m}{V}$ nach dem Volumen $V$ um und berechne $V$ bei $m = 240\\,\\text{g}$ und $\\rho = 8\\,\\text{g/cm}^3$ in $\\text{cm}^3$.',
        30, 0, '',
        `**Ansatz:** Bruchgleichung: zuerst beide Seiten mit dem Nenner $V$ multiplizieren, dann durch $\\rho$ dividieren.

**Rechnung:** $\\rho = m/V \\;|\\; \\cdot V \\Rightarrow \\rho \\cdot V = m \\;|\\; / \\rho \\Rightarrow V = m/\\rho$. Einsetzen: $V = 240/8 = 30\\,\\text{cm}^3$.

**Probe:** $\\rho = m/V = 240/30 = 8\\,\\text{g/cm}^3$. ✓ Einheiten: $\\text{g}/(\\text{g/cm}^3) = \\text{cm}^3$.

**Typischer Fehler:** Direkt $V = \\rho \\cdot m = 8 \\cdot 240 = 1920\\,\\text{cm}^3$ — Multiplikation statt Division (Formel falsch umgestellt).`,
        [
          'Erst Nenner weg: beide Seiten mit $V$ multiplizieren.',
          'Dann durch $\\rho$ teilen: $V = m/\\rho$.',
          'Einheiten-Check: $\\text{g}/(\\text{g/cm}^3) = \\text{cm}^3$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['formel-umstellen'] },
      ),
      // Bonus SG 3: apply-guided · multiple-choice · uses=[formel-umstellen]
      // Quadratische Variable in Formel — Wurzel als Umkehrung.
      mc(
        'Stelle die Energieformel $E = \\dfrac{1}{2} m v^2$ nach $v$ um (für $v > 0$).',
        ['$v = \\sqrt{\\dfrac{2E}{m}}$', '$v = \\dfrac{2E}{m}$', '$v = \\dfrac{E}{2m}$', '$v = \\sqrt{\\dfrac{E}{2m}}$'],
        0,
        `**Ansatz:** Schrittweise: erst $v^2$ isolieren, dann Wurzel ziehen.

**Rechnung:** $E = \\tfrac{1}{2} m v^2 \\;|\\; \\cdot 2 \\Rightarrow 2E = m v^2 \\;|\\; / m \\Rightarrow v^2 = \\tfrac{2E}{m} \\;|\\; \\sqrt{} \\Rightarrow v = \\sqrt{\\tfrac{2E}{m}}$.

**Probe:** Einheiten-Check: $E$ in J $= \\text{kg} \\cdot \\text{m}^2/\\text{s}^2$, $m$ in kg $\\Rightarrow$ $v = \\sqrt{\\text{m}^2/\\text{s}^2} = \\text{m/s}$. ✓ Konkret bei $E = 50\\,\\text{J}$, $m = 4\\,\\text{kg}$: $v = \\sqrt{25} = 5\\,\\text{m/s}$, und $\\tfrac{1}{2} \\cdot 4 \\cdot 25 = 50$. ✓

**Typischer Fehler:** Wurzel vergessen (Option 2 oder 3) — $v^2$ und $v$ verwechseln.`,
        [
          'Beide Seiten mit $2$ multiplizieren, dann durch $m$ teilen.',
          'Übrig bleibt $v^2 = 2E/m$.',
          'Wurzel ziehen — die ist die Umkehr-Operation des Quadrats.',
        ],
        {
          1: 'Das ist $v^2 = 2E/m$ ohne Wurzel — das wäre eine Geschwindigkeit zum Quadrat, keine Geschwindigkeit. Einheiten-Check zeigt es: $\\text{J/kg} = \\text{m}^2/\\text{s}^2 \\neq \\text{m/s}$.',
          2: '$E/(2m)$ ist um Faktor $4$ falsch (zwei mal vergessen, Wurzel zu ziehen) und hat ohnehin nicht die Einheit einer Geschwindigkeit.',
          3: '$\\sqrt{E/(2m)}$ ist auch um Faktor $\\sqrt{4}=2$ daneben. Korrekt: erst $\\cdot 2$, dann $:m$, dann $\\sqrt{}$ — nicht $:2$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['formel-umstellen'] },
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
      // Zusatz-Aufgabe SG 4: apply-independent · number-input · uses=[quadrieren-probe]
      // Wurzelgleichung mit zwei Kandidaten — beide Werte testen, einer ist Scheinlösung.
      ni(
        'Löse $\\sqrt{x + 5} = x - 1$ und gib die EINZIGE reelle Lösung $x$ an.',
        4, 0, '',
        `**Ansatz:** Definitionsbereich klären (RHS $\\geq 0 \\Rightarrow x \\geq 1$), quadrieren, Kandidaten finden, Probe in Originalgleichung.

**Rechnung:** Quadrieren: $x + 5 = (x-1)^2 = x^2 - 2x + 1 \\Rightarrow x^2 - 3x - 4 = 0 \\Rightarrow (x-4)(x+1) = 0$. Kandidaten: $x = 4$ oder $x = -1$.

**Probe:** $x = 4$: $\\sqrt{9} = 3$ und $4 - 1 = 3$. ✓ $x = -1$: $\\sqrt{4} = 2$, aber $-1 - 1 = -2 \\neq 2$. Scheinlösung. Einzige Lösung: $x = 4$.

**Typischer Fehler:** Beide Kandidaten ($4$ und $-1$) als Lösungen angeben, ohne in die Originalgleichung einzusetzen — die Wurzel ist per Definition $\\geq 0$, aber das Quadrieren akzeptiert auch negative rechte Seiten.`,
        [
          'Definitionsbereich: rechte Seite $x - 1 \\geq 0 \\Rightarrow x \\geq 1$.',
          'Quadrieren $\\to$ quadratische Gleichung $\\to$ zwei Kandidaten.',
          'PROBE in der Originalgleichung — Scheinlösung verwerfen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['quadrieren-probe'] },
      ),
      // Bonus SG 4: apply-independent · number-input · uses=[quadrieren-probe]
      // Wurzelgleichung mit zwei Kandidaten, einer Scheinlösung — strikte Probe nötig.
      ni(
        'Löse $\\sqrt{3x - 2} = x - 2$ und gib die einzige reelle Lösung an.',
        6, 0, '',
        `**Ansatz:** Definitionsbereich (RHS $x - 2 \\geq 0 \\Rightarrow x \\geq 2$), quadrieren, Kandidaten, Probe.

**Rechnung:** Quadrieren: $3x - 2 = (x-2)^2 = x^2 - 4x + 4 \\Rightarrow x^2 - 7x + 6 = 0 \\Rightarrow (x-1)(x-6) = 0$. Kandidaten: $x = 1$ und $x = 6$.

**Probe:** $x = 1$: liegt außerhalb $x \\geq 2$, sofort verworfen. Außerdem $\\sqrt{1} = 1$, aber $1 - 2 = -1 \\neq 1$. $x = 6$: $\\sqrt{16} = 4$ und $6 - 2 = 4$. ✓ Einzige Lösung: $x = 6$.

**Typischer Fehler:** Beide Kandidaten als Lösungen angeben, ohne Probe oder Definitionsbereich zu prüfen — $x = 1$ ist Scheinlösung, weil das Quadrat einer negativen Zahl positiv wird und die Originalgleichung „verfälscht".`,
        [
          'Definitionsbereich: $x - 2 \\geq 0 \\Rightarrow x \\geq 2$.',
          'Quadrieren beider Seiten $\\to$ quadratische Gleichung.',
          'Probe: jeder Kandidat in Originalgleichung.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['quadrieren-probe'] },
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


  // ───────────────────────────────────────────────────────────────────────
  // alg-1-1 — Potenzgesetze (4 SGs, 20 Matrix-Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-1-1': {
    // [0] Gleiche Basis: x^a · x^b und x^a / x^b
    0: [
      tf(
        'Das Produkt $x^3 \\cdot x^5$ kann als $x^8$ geschrieben werden.',
        true,
        `**Ansatz:** Gleiche Basis bei Multiplikation: Exponenten addieren.

**Rechnung:** $x^3 \\cdot x^5 = x^{3+5} = x^8$.

**Probe:** $x=2$: $8 \\cdot 32 = 256 = 2^8$. ✓

**Typischer Fehler:** Exponenten multiplizieren: $x^3 \\cdot x^5 = x^{15}$ — Regel für Potenz-der-Potenz, nicht für Multiplikation gleicher Basen.`,
        [
          'Gleiche Basis — welche Regel gilt?',
          '$x^a \\cdot x^b = x^{a+b}$.',
          '$3 + 5 = ?$',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['pot-mult'] },
      ),
      mc(
        'Vereinfache $\\dfrac{a^7}{a^3}$.',
        ['$a^4$', '$a^{10}$', '$a^{21}$', '$a^{7/3}$'],
        0,
        `**Ansatz:** Gleiche Basis bei Division: Exponenten subtrahieren.

**Rechnung:** $a^7 / a^3 = a^{7-3} = a^4$.

**Probe:** $a=2$: $128/8 = 16 = 2^4$. ✓

**Typischer Fehler:** Addieren ($a^{10}$) oder dividieren des Exponenten ($a^{7/3}$).`,
        [
          'Division gleicher Basis — welche Regel?',
          '$a^m/a^n = a^{m-n}$.',
          '$7 - 3 = ?$',
        ],
        {
          1: '$a^{10}$ entsteht durch $a^{7+3}$ — das wäre Multiplikation, nicht Division.',
          2: '$a^{21}$ wäre $(a^7)^3$ — also Potenz einer Potenz. Auch nicht zutreffend.',
          3: 'Exponenten werden bei Division SUBTRAHIERT, nicht dividiert.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pot-mult', 'pot-div'] },
      ),
      ni(
        'Berechne $\\dfrac{2^{10}}{2^7}$.',
        8, 0, '',
        `**Ansatz:** Gleiche Basis, also Exponenten subtrahieren.

**Rechnung:** $2^{10}/2^7 = 2^{10-7} = 2^3 = 8$.

**Probe:** $1024/128 = 8$. ✓

**Typischer Fehler:** $1024 - 128 = 896$ — Subtraktion der Werte statt der Exponenten.`,
        [
          'Gleiche Basis $2$ — Exponenten subtrahieren.',
          '$2^{10-7} = ?$',
          '$2^3 = 8$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pot-mult'] },
      ),
      mc(
        'Ein Schüler schreibt $x^2 \\cdot x^3 = x^6$. Wo liegt der Fehler?',
        [
          'Er hat die Exponenten multipliziert — bei Multiplikation gleicher Basen werden sie ADDIERT: $x^5$.',
          'Die Basis müsste verdoppelt werden: $(2x)^5$.',
          'Der Ausdruck ist korrekt.',
          'Die Exponenten müssen dividiert werden: $x^{2/3}$.',
        ],
        0,
        `**Ansatz:** $x^a \\cdot x^b = x^{a+b}$, NICHT $x^{a \\cdot b}$. Die Regel $x^{a\\cdot b}$ gilt bei Potenz einer Potenz $(x^a)^b$.

**Rechnung:** Korrekt: $x^2 \\cdot x^3 = x^{2+3} = x^5$.

**Probe:** $x=2$: $4 \\cdot 8 = 32 = 2^5$ ✓. Schüler: $x^6 = 64 \\neq 32$.

**Typischer Fehler:** Multiplikationsregel mit Potenz-der-Potenz-Regel verwechseln.`,
        [
          'Welche Operation steht zwischen den Potenzen?',
          'Multiplikation gleicher Basen → Exponenten $+$.',
          'Potenz einer Potenz → Exponenten $\\cdot$.',
        ],
        {
          1: 'Die Basis bleibt gleich — $(2x)^5$ wäre eine ganz andere Aufgabe.',
          2: 'Nein, $x^6 \\neq x^5$ bei Zahlentests.',
          3: 'Exponenten werden bei Multiplikation addiert, nicht dividiert.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['pot-mult'] },
      ),
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[pot-mult, pot-div]
      // Zwei verschiedene Basen mischen — testet Trennung der Potenzgesetze pro Basis.
      ni(
        'Vereinfache $\\dfrac{2^5 \\cdot 5^3}{2^3 \\cdot 5}$ und gib den Wert als ganze Zahl an.',
        100, 0, '',
        `**Ansatz:** Potenzgesetze gelten pro Basis. Also $2$-Potenzen separat von $5$-Potenzen behandeln.

**Rechnung:** $2^5 / 2^3 = 2^2 = 4$. $5^3 / 5^1 = 5^2 = 25$. Produkt: $4 \\cdot 25 = 100$.

**Probe:** Direkt: $2^5 \\cdot 5^3 = 32 \\cdot 125 = 4000$; $2^3 \\cdot 5 = 8 \\cdot 5 = 40$; $4000/40 = 100$. ✓

**Typischer Fehler:** Exponenten unabhängig von der Basis zusammenrechnen, etwa $5+3-3-1 = 4$ und Antwort $2^4 = 16$ — die Basen $2$ und $5$ dürfen aber nicht „zusammengeworfen" werden, weil $x^a/x^b = x^{a-b}$ nur bei gleicher Basis gilt.`,
        [
          'Verschiedene Basen $\\to$ getrennte Behandlung.',
          '$2$-Anteil: $2^5/2^3 = 2^2$. $5$-Anteil: $5^3/5^1 = 5^2$.',
          '$2^2 \\cdot 5^2 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pot-mult', 'pot-div'] },
      ),
      ni(
        'Vereinfache $\\dfrac{3^4 \\cdot 3^6}{3^5}$ und gib den Wert als ganze Zahl an.',
        243, 0, '',
        `**Ansatz:** Erst Zähler zusammenfassen (Mult. gleicher Basis), dann mit Nenner verrechnen (Div. gleicher Basis).

**Rechnung:** $3^4 \\cdot 3^6 = 3^{10}$. $3^{10} / 3^5 = 3^5 = 243$.

**Probe:** Alternativ: $3^{4+6-5} = 3^5 = 243$. ✓

**Typischer Fehler:** Unterschiedliche Operationen vermischen.`,
        [
          'Zähler: Exponenten addieren.',
          'Dann durch Nenner: Exponenten subtrahieren.',
          '$3^5 = 243$.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['pot-mult', 'pot-div'] },
      ),
    ],
    // [1] Potenz einer Potenz: (x^a)^b
    1: [
      tf(
        'Der Ausdruck $(y^3)^4$ ist gleich $y^7$.',
        false,
        `**Ansatz:** Potenz einer Potenz: Exponenten MULTIPLIZIEREN.

**Rechnung:** $(y^3)^4 = y^{3 \\cdot 4} = y^{12}$, nicht $y^7$.

**Probe:** $y=2$: $(2^3)^4 = 8^4 = 4096 = 2^{12}$. $2^7 = 128$. ✓

**Typischer Fehler:** Multiplikation mit Addition verwechseln.`,
        [
          'Welche Regel gilt bei Potenz einer Potenz?',
          '$(y^a)^b = y^{a \\cdot b}$.',
          '$3 \\cdot 4 = ?$',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pot-potenz'] },
      ),
      mc(
        'Vereinfache $(x^4)^5$.',
        ['$x^{20}$', '$x^9$', '$x^{4 + 5}$', '$5x^4$'],
        0,
        `**Ansatz:** Potenz einer Potenz: Exponenten multiplizieren.

**Rechnung:** $(x^4)^5 = x^{4 \\cdot 5} = x^{20}$.

**Probe:** $x=2$: $(2^4)^5 = 16^5 = 1\\,048\\,576 = 2^{20}$. ✓

**Typischer Fehler:** Exponenten addieren statt multiplizieren.`,
        [
          'Äußere Klammer — welche Regel?',
          'Exponenten multiplizieren.',
          '$4 \\cdot 5 = ?$',
        ],
        {
          1: 'Das wäre $x^4 \\cdot x^5$ (Multiplikation gleicher Basen). Hier ist aber die äußere Potenz, also $\\cdot$.',
          2: 'Addition ist die Regel bei Mult. gleicher Basen, nicht bei Potenz einer Potenz.',
          3: '$5x^4$ wäre $5 \\cdot x^4$, nicht $(x^4)^5$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pot-potenz'] },
      ),
      ni(
        'Berechne $(2^3)^2$.',
        64, 0, '',
        `**Ansatz:** Potenz einer Potenz: Exponenten multiplizieren, dann ausrechnen.

**Rechnung:** $(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64$.

**Probe:** $2^3 = 8$, $8^2 = 64$. ✓

**Typischer Fehler:** $2^{3+2} = 2^5 = 32$.`,
        [
          'Exponenten multiplizieren.',
          '$3 \\cdot 2 = 6$.',
          '$2^6 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-potenz'] },
      ),
      mc(
        'Ein Schüler rechnet $(a^3)^4 = a^7$. Wo liegt der Fehler?',
        [
          'Bei Potenz einer Potenz werden Exponenten MULTIPLIZIERT — korrekt ist $a^{12}$.',
          'Die Basis müsste gekürzt werden: $a^4$.',
          'Der Ausdruck ist korrekt.',
          'Exponenten müssten voneinander abgezogen werden: $a^{-1}$.',
        ],
        0,
        `**Ansatz:** Der Schüler hat die Additions-Regel (gleiche Basis $\\cdot$) mit der Potenz-der-Potenz-Regel ($\\cdot$) verwechselt.

**Rechnung:** Korrekt: $(a^3)^4 = a^{3 \\cdot 4} = a^{12}$.

**Probe:** $a=2$: $(2^3)^4 = 8^4 = 4096 = 2^{12}$. Schüler: $2^7 = 128 \\neq 4096$.

**Typischer Fehler:** Genau dieser — Verwechslung der beiden Potenzregeln.`,
        [
          'Was ist die ÄUSSERE Operation hier?',
          'Potenz einer Potenz: $\\cdot$.',
          'Zahlentest: $(2^3)^4 = ?$',
        ],
        {
          1: 'Basen werden bei Potenzen nicht "gekürzt" — das ist keine Regel.',
          2: 'Zahlentest widerlegt den Schüler.',
          3: 'Subtraktion gilt bei Division gleicher Basen — nicht hier.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pot-potenz', 'pot-mult'] },
      ),
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[pot-potenz]
      // Doppelte Schachtelung — testet Anwendung der Potenz-der-Potenz-Regel mehrfach.
      ni(
        'Vereinfache $\\left((x^2)^3\\right)^4$ und gib den resultierenden Exponenten an.',
        24, 0, '',
        `**Ansatz:** Bei mehrfach geschachtelten Potenzen wird die Regel $(x^a)^b = x^{a \\cdot b}$ einfach mehrmals angewandt — alle Exponenten multiplizieren.

**Rechnung:** $\\left((x^2)^3\\right)^4 = (x^{2 \\cdot 3})^4 = (x^6)^4 = x^{6 \\cdot 4} = x^{24}$. Oder direkt: $x^{2 \\cdot 3 \\cdot 4} = x^{24}$.

**Probe:** Setze $x = 2$: Innerstes $2^2 = 4$, dann $4^3 = 64$, dann $64^4 = 16\\,777\\,216 = 2^{24}$. ✓

**Typischer Fehler:** Exponenten addieren statt multiplizieren: $2 + 3 + 4 = 9 \\Rightarrow x^9$ — verwechselt die Regel mit der Multiplikations-Regel gleicher Basen.`,
        [
          'Geschachtelt $\\to$ mehrfach Potenz-der-Potenz.',
          'Alle Exponenten miteinander multiplizieren.',
          '$2 \\cdot 3 \\cdot 4 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-potenz'] },
      ),
      matching(
        'Ordne jedem Ausdruck seine vereinfachte Form zu.',
        [
          { left: '$x^2 \\cdot x^3$',   right: '$x^5$' },
          { left: '$(x^2)^3$',          right: '$x^6$' },
          { left: '$x^5 / x^2$',        right: '$x^3$' },
          { left: '$(x^3)^2 \\cdot x$', right: '$x^7$' },
        ],
        `**Ansatz:** Richtige Regel pro Operation wählen.

**Rechnung:**
· $x^2 \\cdot x^3 = x^{2+3} = x^5$ (Addition)
· $(x^2)^3 = x^{2 \\cdot 3} = x^6$ (Multiplikation)
· $x^5/x^2 = x^{5-2} = x^3$ (Subtraktion)
· $(x^3)^2 \\cdot x = x^6 \\cdot x^1 = x^7$ (Kombination)

**Probe:** Jeder Fall mit Zahlen testbar.

**Typischer Fehler:** Multiplikations- und Potenz-Regel vermischen.`,
        [
          'Erst Operation erkennen, dann Regel.',
          'Addition bei $\\cdot$, Multiplikation bei Potenz der Potenz.',
          'Kombinierte Ausdrücke schrittweise vereinfachen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['pot-potenz', 'pot-mult'] },
      ),
    ],
    // [2] Negativer und Null-Exponent
    2: [
      tf(
        'Es gilt $5^0 = 1$ (für $x \\neq 0$ ist $x^0 = 1$).',
        true,
        `**Ansatz:** Konvention + Herleitung: $x^a/x^a = x^{a-a} = x^0$ und gleichzeitig $= 1$.

**Rechnung:** $5^0 = 1$.

**Probe:** $5^3/5^3 = 125/125 = 1 = 5^0$. ✓

**Typischer Fehler:** $x^0 = 0$ annehmen ("alles hoch 0 ist 0") — falsch.`,
        [
          '$x^a/x^a = ?$',
          'Exponentenregel: $x^{a-a} = x^0$.',
          'Konvention: $x^0 = 1$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pot-null', 'pot-negativ'] },
      ),
      mc(
        'Welcher Wert hat $3^{-2}$?',
        ['$\\dfrac{1}{9}$', '$-9$', '$-6$', '$\\dfrac{1}{-9}$'],
        0,
        `**Ansatz:** Negativer Exponent: Kehrwert. $x^{-n} = 1/x^n$.

**Rechnung:** $3^{-2} = 1/3^2 = 1/9$.

**Probe:** $3^{-2} \\cdot 3^2 = 3^0 = 1$. Also $1/9 \\cdot 9 = 1$. ✓

**Typischer Fehler:** Das Vorzeichen auf die Basis schreiben: $(-3)^2 = 9$ und davon $-9$.`,
        [
          'Negativer Exponent → Kehrwert.',
          '$x^{-n} = 1/x^n$.',
          '$3^2 = 9$.',
        ],
        {
          1: 'Das Vorzeichen wirkt NICHT auf die Basis, sondern kippt in Kehrwert um.',
          2: 'Ebenso falsch — der Exponent beschreibt den Kehrwert, nicht eine Subtraktion.',
          3: 'Das Vorzeichen kippt in den Kehrwert, nicht in einen negativen Bruch.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pot-negativ'] },
      ),
      ni(
        'Schreibe $\\dfrac{1}{2^4}$ als Potenz mit negativem Exponent und gib den Wert an (Dezimalzahl).',
        0.0625, 0.0001, '',
        `**Ansatz:** $1/x^n = x^{-n}$. Danach ausrechnen.

**Rechnung:** $1/2^4 = 2^{-4}$. $2^4 = 16$, also $1/16 = 0{,}0625$.

**Probe:** $0{,}0625 \\cdot 16 = 1$. ✓

**Typischer Fehler:** $-2^4 = -16$ schreiben — das ist nicht der Kehrwert.`,
        [
          'Negativer Exponent ist der Kehrwert.',
          '$2^{-4} = 1/2^4 = 1/16$.',
          '$1/16 = 0{,}0625$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pot-negativ'] },
      ),
      mc(
        'Ein Schüler sagt: "$x^0 = 0$, weil man die Basis mit nichts multipliziert." Wo liegt der Fehler?',
        [
          'Per Konvention ist $x^0 = 1$ (für $x \\neq 0$) — aus $x^a/x^a = x^{a-a} = x^0 = 1$.',
          'Er hat recht — $x^0 = 0$ für alle $x$.',
          'Nur $0^0 = 1$; alle anderen Basen haben $x^0 = x$.',
          'Exponent $0$ ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Aus der Division-Regel folgt zwingend $x^0 = 1$.

**Rechnung:** $x^2/x^2 = x^{2-2} = x^0$ UND $x^2/x^2 = 1$. Also $x^0 = 1$.

**Probe:** $5^0 = 1$, $2{,}718^0 = 1$, $x^0 = 1$ für alle $x \\neq 0$.

**Typischer Fehler:** "Hoch 0 heißt gar nicht multipliziert, also 0" — verwechselt Multiplikation mit einem leeren Produkt (das per Konvention 1 ist).`,
        [
          '$x^3/x^3 = ?$',
          'Was muss $x^0$ sein, damit die Regel stimmt?',
          '$1$, nicht $0$.',
        ],
        {
          1: 'Nein, $x^0 = 1$ ist überall Konvention und logisch herleitbar.',
          2: '$0^0$ ist ein Sonderfall (oft als $1$ definiert in Kombinatorik, unbestimmt in Analysis).',
          3: 'Exponent $0$ ist sehr wohl definiert: $x^0 = 1$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pot-null'] },
      ),
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[pot-negativ, pot-mult]
      // Bruch mit gemischten Vorzeichen-Exponenten — testet Mehrfach-Anwendung der Negativ-Regel.
      ni(
        'Berechne $4^{-2} \\cdot 4^3$ und gib den Wert als Dezimalzahl an.',
        4, 0.001, '',
        `**Ansatz:** Gleiche Basis $\\to$ Exponenten addieren. Negative Exponenten zählen ganz normal mit.

**Rechnung:** $4^{-2} \\cdot 4^3 = 4^{-2+3} = 4^1 = 4$.

**Probe:** Direkt: $4^{-2} = 1/16 = 0{,}0625$ und $4^3 = 64$. Produkt: $0{,}0625 \\cdot 64 = 4$. ✓

**Typischer Fehler:** Negativen Exponenten als Subtraktion bei der Multiplikation interpretieren: $4^3 - 4^2 = 64 - 16 = 48$ — verwechselt Multiplikation gleicher Basen mit Subtraktion der Werte.`,
        [
          'Gleiche Basis bei Multiplikation $\\to$ Exponenten addieren.',
          '$-2 + 3 = ?$',
          '$4^1 = 4$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pot-negativ', 'pot-mult'] },
      ),
      ni(
        'Vereinfache $\\dfrac{x^{-3} \\cdot x^5}{x^{-1}}$ und gib den Exponenten an.',
        3, 0, '',
        `**Ansatz:** Mit Potenzgesetzen kombinieren. Zähler: Exponenten addieren. Dann durch Nenner.

**Rechnung:** Zähler $x^{-3+5} = x^2$. Durch $x^{-1}$: $x^{2-(-1)} = x^{2+1} = x^3$.

**Probe:** $x=2$: Zähler $1/8 \\cdot 32 = 4$. Nenner $1/2$. $4/(1/2) = 8 = 2^3$. ✓

**Typischer Fehler:** Vorzeichen des negativen Exponenten vergessen beim Subtrahieren.`,
        [
          'Zähler zusammenfassen: $-3 + 5 = 2$.',
          'Durch Nenner: $2 - (-1) = 3$.',
          '$x^3$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pot-negativ', 'pot-mult'] },
      ),
    ],
    // [3] Produkt/Quotient in Klammer
    3: [
      tf(
        'Es gilt $(xy)^3 = x^3 y^3$.',
        true,
        `**Ansatz:** Produkt in Klammer: Exponent auf jeden Faktor verteilen.

**Rechnung:** $(xy)^3 = (xy)(xy)(xy) = x^3 y^3$.

**Probe:** $x=2, y=3$: $(6)^3 = 216 = 8 \\cdot 27$. ✓

**Typischer Fehler:** Exponent nur auf eine Variable anwenden: $xy^3$.`,
        [
          'Klammer mit Produkt hoch $n$.',
          'Exponent verteilt sich auf jeden Faktor.',
          'Merke: $(xy)^n = x^n \\cdot y^n$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pot-produkt'] },
      ),
      mc(
        'Vereinfache $(2x)^3$.',
        ['$8x^3$', '$2x^3$', '$6x^3$', '$2x \\cdot 3$'],
        0,
        `**Ansatz:** $(2x)^3 = 2^3 \\cdot x^3$.

**Rechnung:** $2^3 = 8$. Also $8x^3$.

**Probe:** $x=1$: $(2 \\cdot 1)^3 = 8$. $8 \\cdot 1^3 = 8$. ✓

**Typischer Fehler:** Exponent nur auf $x$: $2x^3$.`,
        [
          'Exponent auf JEDEN Faktor.',
          '$2^3 = 8$ und $x^3$.',
          'Ergebnis: $8x^3$.',
        ],
        {
          1: 'Der Exponent wurde nur auf $x$ angewandt, nicht auf den Faktor $2$.',
          2: '$6 = 2 \\cdot 3$ — das wäre $2$ multipliziert mit dem Exponenten, kein korrektes Gesetz.',
          3: '$(2x)^3 \\neq 2x \\cdot 3$. Die Klammer-hoch-$n$-Regel gilt multiplikativ.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pot-produkt'] },
      ),
      ni(
        'Berechne $(3a^2)^2$ bei $a=2$.',
        144, 0, '',
        `**Ansatz:** Jeden Faktor hoch 2: $(3a^2)^2 = 3^2 \\cdot (a^2)^2 = 9a^4$. Dann einsetzen.

**Rechnung:** $9 \\cdot a^4$ bei $a=2$: $9 \\cdot 16 = 144$.

**Probe:** $(3 \\cdot 4)^2 = 12^2 = 144$. ✓

**Typischer Fehler:** $(a^2)^2 = a^4$ vergessen; stattdessen $a^2$ belassen.`,
        [
          '$3^2 = 9$, $(a^2)^2 = a^4$.',
          'Ergebnis: $9a^4$.',
          'Einsetzen: $9 \\cdot 16$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pot-produkt'] },
      ),
      mc(
        'Ein Schüler schreibt $(3x)^2 = 3x^2$. Wo liegt der Fehler?',
        [
          'Der Exponent $2$ muss auf JEDEN Faktor in der Klammer: korrekt ist $9x^2$.',
          'Die Klammer müsste weg: $3x^2$.',
          'Der Schüler hat recht.',
          'Der Exponent gilt nur für Variablen.',
        ],
        0,
        `**Ansatz:** Produkt-in-Klammer-Regel: Exponent auf alle Faktoren verteilen.

**Rechnung:** $(3x)^2 = 3^2 \\cdot x^2 = 9x^2$, nicht $3x^2$.

**Probe:** $x=2$: $(3 \\cdot 2)^2 = 36$. Korrekt: $9 \\cdot 4 = 36$. Schüler: $3 \\cdot 4 = 12 \\neq 36$.

**Typischer Fehler:** Der Schüler hat den Exponent nur auf $x$ angewandt, den Faktor $3$ ignoriert.`,
        [
          'Was passiert mit $3$ in $(3x)^2$?',
          'Exponent auf JEDEN Faktor.',
          '$3^2 = 9$.',
        ],
        {
          1: 'Die Klammer ist hier essentiell — sie sagt, dass der Exponent auf das gesamte Produkt wirkt.',
          2: 'Zahlentest widerlegt die Schülerrechnung.',
          3: 'Nein, der Exponent gilt für ALLE Faktoren in der Klammer — Zahlen und Variablen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pot-produkt'] },
      ),
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[pot-quotient]
      // Quotient mit Variablen + Zahlenbeispiel — testet pot-quotient mit konkretem Endwert.
      ni(
        'Berechne $\\left(\\dfrac{6}{2}\\right)^4$ direkt über die Quotientenregel.',
        81, 0, '',
        `**Ansatz:** Quotient-in-Klammer-Regel: $(a/b)^n = a^n/b^n$. Beide Faktoren einzeln potenzieren.

**Rechnung:** $\\left(\\dfrac{6}{2}\\right)^4 = \\dfrac{6^4}{2^4} = \\dfrac{1296}{16} = 81$. Direkter Weg: erst kürzen $6/2 = 3$, dann $3^4 = 81$.

**Probe:** $3^4 = 81$. ✓ Beide Wege liefern dasselbe Ergebnis.

**Typischer Fehler:** $(6/2)^4 = 6^4 / 2 = 1296/2 = 648$ — Exponent nur auf Zähler angewandt, nicht auf Nenner.`,
        [
          'Quotient-in-Klammer: jeden Faktor hoch $n$.',
          '$6^4 = 1296$ und $2^4 = 16$.',
          'Kürzen-Trick: $6/2 = 3$, dann $3^4$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pot-quotient'] },
      ),
      ni(
        'Vereinfache $\\left(\\dfrac{2x^2}{y}\\right)^3$ und gib den Exponenten von $x$ an.',
        6, 0, '',
        `**Ansatz:** Quotient-in-Klammer-Regel: jeden Faktor einzeln hochnehmen.

**Rechnung:** $\\left(\\dfrac{2x^2}{y}\\right)^3 = \\dfrac{(2x^2)^3}{y^3} = \\dfrac{8x^6}{y^3}$. Exponent von $x$ ist $6$.

**Probe:** $(2 \\cdot 1^2/1)^3 = 8$; $8 \\cdot 1^6/1^3 = 8$. ✓

**Typischer Fehler:** $(x^2)^3 = x^5$ statt $x^6$.`,
        [
          'Quotient-in-Klammer: jeden Faktor hoch $3$.',
          '$(x^2)^3 = x^{2\\cdot 3} = x^6$.',
          'Exponent $6$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pot-quotient', 'pot-produkt'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-1-2 — Wurzeln & gebrochene Exponenten (3 SGs, 16 Matrix-Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-1-2': {
    // [0] Wurzel als Bruchpotenz
    0: [
      tf(
        'Es gilt $\\sqrt[n]{x} = x^{1/n}$.',
        true,
        `**Ansatz:** Wurzel als Bruchpotenz — dadurch gelten alle Potenzgesetze.

**Rechnung:** $\\sqrt[3]{x} = x^{1/3}$, $\\sqrt{x} = x^{1/2}$.

**Probe:** $(\\sqrt{4})^2 = 4 = 4^1 = (4^{1/2})^2 = 4^{2 \\cdot 1/2} = 4^1$. ✓

**Typischer Fehler:** $\\sqrt[n]{x} = x^n$ annehmen — vertauscht die Bedeutung.`,
        [
          'Wurzel ist der Kehrwert der Potenz.',
          '$\\sqrt[n]{x} = x^{1/n}$.',
          'Nicht $x^n$ verwechseln.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['wurzel-bruchpot'] },
      ),
      mc(
        'Welche Potenzschreibweise entspricht $\\sqrt[4]{x^3}$?',
        ['$x^{3/4}$', '$x^{4/3}$', '$x^{3 \\cdot 4}$', '$x^{3-4}$'],
        0,
        `**Ansatz:** $\\sqrt[n]{x^m} = x^{m/n}$.

**Rechnung:** $\\sqrt[4]{x^3} = x^{3/4}$.

**Probe:** $x=16$: $\\sqrt[4]{16^3} = \\sqrt[4]{4096} = 8$. $16^{3/4} = (16^{1/4})^3 = 2^3 = 8$. ✓

**Typischer Fehler:** Exponenten vertauschen.`,
        [
          'Wurzelgrad im Nenner.',
          'Exponent im Zähler.',
          '$\\sqrt[n]{x^m} = x^{m/n}$.',
        ],
        {
          1: 'Das wäre die Inversion — $n$ und $m$ vertauscht.',
          2: 'Multiplikation gilt bei Potenz einer Potenz, nicht hier.',
          3: 'Subtraktion gilt bei Division gleicher Basen.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['wurzel-bruchpot'] },
      ),
      ni(
        'Berechne $\\sqrt[3]{8^2}$.',
        4, 0, '',
        `**Ansatz:** Als Bruchpotenz: $8^{2/3}$.

**Rechnung:** $8^{2/3} = (8^{1/3})^2 = 2^2 = 4$.

**Probe:** $\\sqrt[3]{64} = 4$. ✓

**Typischer Fehler:** $\\sqrt[3]{8^2}$ als $(\\sqrt[3]{8})^2$ rechnen ist richtig; aber $2^3 = 8$ für $\\sqrt[3]{8}$ nicht vergessen.`,
        [
          'Als $8^{2/3}$ schreiben.',
          'Erst Wurzel, dann Potenz: $\\sqrt[3]{8} = 2$.',
          '$2^2 = 4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['wurzel-bruchpot'] },
      ),
      mc(
        'Warum ist $\\sqrt{-4}$ in $\\mathbb{R}$ NICHT definiert?',
        [
          'Das Quadrat jeder reellen Zahl ist $\\geq 0$ — es gibt keine reelle Zahl $y$ mit $y^2 = -4$.',
          'Die Wurzel ist $-2$, aber negativ.',
          'Die Wurzel ist $2i$, aber das ist auch reell.',
          'Der Radikand muss eine Quadratzahl sein.',
        ],
        0,
        `**Ansatz:** $\\sqrt{x}$ ist in $\\mathbb{R}$ nur für $x \\geq 0$ definiert.

**Rechnung:** Wenn $\\sqrt{-4} = y$ existierte, müsste $y^2 = -4$ sein. Aber $y^2 \\geq 0$ für alle reellen $y$.

**Probe:** $0^2 = 0$, $(-2)^2 = 4$, $2^2 = 4$ — nie negativ.

**Typischer Fehler:** Denken, $\\sqrt{-4} = -2$ (weil $(-2)^2 = 4$) — aber das ist $+4$, nicht $-4$.`,
        [
          'Was ist das Quadrat reeller Zahlen?',
          'Kann $y^2$ negativ sein?',
          'Wertebereich der Quadratfunktion.',
        ],
        {
          1: '$(-2)^2 = +4$, nicht $-4$. Es gibt keine reelle Wurzel aus $-4$.',
          2: '$2i$ ist komplex, nicht reell.',
          3: 'Jede Zahl $\\geq 0$ hat eine Wurzel in $\\mathbb{R}$, nicht nur Quadratzahlen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['wurzel-def-bereich'] },
      ),
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[wurzel-bruchpot]
      // Bruchpotenz mit negativem Zähler — testet Kombination von wurzel-bruchpot und pot-negativ.
      ni(
        'Berechne $16^{-1/2}$ als Dezimalzahl.',
        0.25, 0.001, '',
        `**Ansatz:** Negativer Bruchexponent $\\to$ Kehrwert der Wurzel: $x^{-1/n} = 1/\\sqrt[n]{x}$.

**Rechnung:** $16^{-1/2} = 1/16^{1/2} = 1/\\sqrt{16} = 1/4 = 0{,}25$.

**Probe:** $0{,}25 \\cdot \\sqrt{16} = 0{,}25 \\cdot 4 = 1 = 16^{0}$. ✓ (Definition des Kehrwerts.)

**Typischer Fehler:** Vorzeichen auf Zahlwert übertragen: $16^{-1/2} = -\\sqrt{16} = -4$ — das wäre nur mit Vorzeichen vor der Basis ($-\\sqrt{16}$), aber der Minus-Exponent macht den Kehrwert.`,
        [
          'Negativer Exponent $\\to$ Kehrwert.',
          'Bruchexponent $1/2$ $\\to$ Quadratwurzel.',
          '$1/\\sqrt{16} = ?$',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['wurzel-bruchpot'] },
      ),
      matching(
        'Ordne jedem Wurzelausdruck seine Potenzschreibweise zu.',
        [
          { left: '$\\sqrt{x}$',        right: '$x^{1/2}$' },
          { left: '$\\sqrt[3]{x}$',     right: '$x^{1/3}$' },
          { left: '$\\sqrt[5]{x^2}$',   right: '$x^{2/5}$' },
          { left: '$\\sqrt{x^3}$',      right: '$x^{3/2}$' },
        ],
        `**Ansatz:** Wurzelgrad → Nenner, Exponent des Radikanden → Zähler.

**Rechnung:** $\\sqrt[n]{x^m} = x^{m/n}$.

**Probe:** In jeder Zeile: $m$ oben, $n$ unten.

**Typischer Fehler:** Zähler und Nenner vertauschen.`,
        [
          'Wurzel ist immer $\\cdot 1/n$ im Exponenten.',
          'Zähler: Potenz des Radikanden.',
          'Nenner: Wurzelgrad.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['wurzel-bruchpot'] },
      ),
    ],
    // [1] Rechenregeln / Summe-Falle / Vereinfachen
    1: [
      tf(
        'Es gilt $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$.',
        false,
        `**Ansatz:** Wurzel ist NICHT linear. $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ im Allgemeinen.

**Rechnung:** Gegenbeispiel: $\\sqrt{9+16} = \\sqrt{25} = 5$, aber $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. $5 \\neq 7$.

**Probe:** Die Regel gilt nur für Produkte ($\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$), nicht für Summen.

**Typischer Fehler:** Distributivgesetz auf Wurzeln übertragen — aber Wurzel ist keine Multiplikation.`,
        [
          'Teste mit $a=9, b=16$.',
          'Was ist $\\sqrt{25}$?',
          'Was ist $\\sqrt{9} + \\sqrt{16}$?',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['wurzel-summe-nein'] },
      ),
      mc(
        'Vereinfache $\\sqrt{8} \\cdot \\sqrt{2}$.',
        ['$4$', '$\\sqrt{10}$', '$2\\sqrt{5}$', '$\\sqrt{16}$'],
        0,
        `**Ansatz:** Produkt unter der Wurzel: $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$.

**Rechnung:** $\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{16} = 4$.

**Probe:** $\\sqrt{8} \\approx 2{,}83$; $2{,}83 \\cdot 1{,}41 \\approx 4$. ✓

**Typischer Fehler:** Beim Addieren landet man bei $\\sqrt{10}$, aber hier ist Multiplikation.`,
        [
          'Produkt-Regel: $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$.',
          '$8 \\cdot 2 = 16$.',
          '$\\sqrt{16} = ?$',
        ],
        {
          1: '$\\sqrt{10}$ wäre $\\sqrt{8 + 2}$ — aber hier steht Multiplikation.',
          2: 'Auch falsch — wäre das Ergebnis einer anderen Rechnung.',
          3: '$\\sqrt{16}$ stimmt, aber die einfachste Form ist $4$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['wurzel-produkt'] },
      ),
      ni(
        'Vereinfache $\\sqrt{50}$ und gib den Koeffizient vor $\\sqrt{2}$ an.',
        5, 0, '',
        `**Ansatz:** Quadratzahl-Faktor aus der Wurzel ziehen.

**Rechnung:** $50 = 25 \\cdot 2$. $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$.

**Probe:** $(5\\sqrt{2})^2 = 25 \\cdot 2 = 50$. ✓

**Typischer Fehler:** $\\sqrt{50}$ mit anderen Zahlen verwechseln.`,
        [
          'Zerlege $50$ mit Quadratzahl.',
          '$25 \\cdot 2$.',
          'Quadratzahl-Wurzel herausziehen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wurzel-vereinfachen'] },
      ),
      ni(
        'Vereinfache $\\sqrt{72}$ und gib den Koeffizient vor $\\sqrt{2}$ an.',
        6, 0, '',
        `**Ansatz:** Quadratzahl-Faktor herausziehen.

**Rechnung:** $72 = 36 \\cdot 2$. $\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.

**Probe:** $(6\\sqrt{2})^2 = 36 \\cdot 2 = 72$. ✓

**Typischer Fehler:** Kleinere Zerlegung wählen: $\\sqrt{72} = \\sqrt{9 \\cdot 8} = 3\\sqrt{8}$, dann $\\sqrt{8} = 2\\sqrt{2}$, Ergebnis $6\\sqrt{2}$ — funktioniert, ist aber umständlicher.`,
        [
          'Quadratzahl-Faktor von $72$.',
          '$36 \\cdot 2 = 72$.',
          '$\\sqrt{36} = 6$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wurzel-vereinfachen'] },
      ),
      mc(
        'Ein Schüler schreibt $\\sqrt{25 + 144} = 5 + 12 = 17$. Wo liegt der Fehler?',
        [
          'Wurzel lässt sich nicht auf Summen verteilen — korrekt: $\\sqrt{169} = 13$.',
          'Er hat $\\sqrt{25} = 5$ falsch berechnet.',
          'Der Ausdruck ist korrekt.',
          'Er hätte mit $2$ erweitern müssen.',
        ],
        0,
        `**Ansatz:** $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$. Summe IN der Wurzel muss zuerst ausgerechnet werden.

**Rechnung:** $\\sqrt{25+144} = \\sqrt{169} = 13$, nicht $17$.

**Probe:** $13^2 = 169$, $17^2 = 289 \\neq 169$.

**Typischer Fehler:** Distributivgesetz auf Wurzeln anwenden — gilt nicht.`,
        [
          'Wurzel ist nicht linear.',
          'Zuerst Summe IN der Wurzel ausrechnen.',
          '$\\sqrt{169} = ?$',
        ],
        {
          1: '$\\sqrt{25} = 5$ ist korrekt — der Fehler ist das Verteilen der Wurzel auf die Summanden.',
          2: 'Zahlentest widerlegt die Rechnung.',
          3: 'Erweitern mit 2 ändert das Problem nicht — die Wurzel muss über der Summe bleiben.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['wurzel-summe-nein'] },
      ),
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[wurzel-vereinfachen, wurzel-produkt]
      // Wurzeln addieren — testet, dass nur gleichartige Wurzeln zusammenfassbar sind (nach Vereinfachen).
      ni(
        'Vereinfache $\\sqrt{18} + \\sqrt{50}$ und gib den Koeffizienten vor $\\sqrt{2}$ an.',
        8, 0, '',
        `**Ansatz:** Beide Wurzeln auf gleiche Form $k\\sqrt{2}$ bringen, dann Koeffizienten addieren.

**Rechnung:** $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$. $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$. Summe: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$. Koeffizient $8$.

**Probe:** Dezimal: $\\sqrt{18} \\approx 4{,}243$; $\\sqrt{50} \\approx 7{,}071$; Summe $\\approx 11{,}314$. $8\\sqrt{2} \\approx 8 \\cdot 1{,}414 = 11{,}314$. ✓

**Typischer Fehler:** $\\sqrt{18} + \\sqrt{50} = \\sqrt{18 + 50} = \\sqrt{68}$ — Wurzel auf Summe verteilen verboten. Oder ohne Vereinfachen direkt addieren: $\\sqrt{18} + \\sqrt{50}$ stehen lassen, ohne dass die Gleichartigkeit sichtbar wird.`,
        [
          'Beide Wurzeln zuerst auf $k\\sqrt{2}$-Form vereinfachen.',
          '$18 = 9 \\cdot 2$, $50 = 25 \\cdot 2$.',
          'Gleichartige Wurzeln $\\to$ Koeffizienten addieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['wurzel-vereinfachen', 'wurzel-produkt'] },
      ),
      sorting(
        'Bringe die Schritte zur Vereinfachung von $\\sqrt{200}$ in die richtige Reihenfolge.',
        [
          'Zerlege $200$ mit Quadratzahl: $200 = 100 \\cdot 2$',
          'Produkt-Regel: $\\sqrt{200} = \\sqrt{100} \\cdot \\sqrt{2}$',
          'Quadratzahl-Wurzel ziehen: $\\sqrt{100} = 10$',
          'Ergebnis: $10\\sqrt{2}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier Schritte: Zerlegen, Produkt-Regel, Wurzel ziehen, kombinieren.

**Rechnung:** $\\sqrt{200} = 10\\sqrt{2}$.

**Probe:** $(10\\sqrt{2})^2 = 100 \\cdot 2 = 200$. ✓

**Typischer Fehler:** Reihenfolge vertauschen und Wurzel vor dem Zerlegen ziehen.`,
        [
          'Erst Quadratzahl-Faktor.',
          'Produkt-Regel trennt die Wurzel.',
          'Wurzel der Quadratzahl = Koeffizient.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['wurzel-produkt', 'wurzel-vereinfachen'] },
      ),
    ],
    // [2] Nenner rational machen
    2: [
      tf(
        'Man kann den Ausdruck $\\dfrac{1}{\\sqrt{2}}$ durch Erweitern mit $\\sqrt{2}$ zu $\\dfrac{\\sqrt{2}}{2}$ umformen.',
        true,
        `**Ansatz:** Nenner rational machen: mit passender Wurzel erweitern.

**Rechnung:** $\\dfrac{1}{\\sqrt{2}} \\cdot \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$.

**Probe:** $1/\\sqrt{2} \\approx 0{,}707$; $\\sqrt{2}/2 \\approx 0{,}707$. ✓

**Typischer Fehler:** Mit $2$ erweitern (statt $\\sqrt{2}$) — die Wurzel bleibt im Nenner.`,
        [
          'Womit muss man erweitern, damit der Nenner rational wird?',
          '$\\sqrt{2} \\cdot \\sqrt{2} = 2$.',
          'Erweitern = Zähler UND Nenner mit gleichem Faktor.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['nenner-rational'] },
      ),
      mc(
        'Mache den Nenner von $\\dfrac{3}{\\sqrt{5}}$ rational.',
        ['$\\dfrac{3\\sqrt{5}}{5}$', '$\\dfrac{3}{5}$', '$\\sqrt{5}/3$', '$3\\sqrt{5}$'],
        0,
        `**Ansatz:** Mit $\\sqrt{5}$ erweitern.

**Rechnung:** $\\dfrac{3}{\\sqrt{5}} \\cdot \\dfrac{\\sqrt{5}}{\\sqrt{5}} = \\dfrac{3\\sqrt{5}}{5}$.

**Probe:** $3/\\sqrt{5} \\approx 1{,}342$; $3\\sqrt{5}/5 \\approx 1{,}342$. ✓

**Typischer Fehler:** Nur Nenner erweitern ohne Zähler anzupassen.`,
        [
          'Erweitern mit $\\sqrt{5}$.',
          'Zähler UND Nenner.',
          '$\\sqrt{5} \\cdot \\sqrt{5} = 5$.',
        ],
        {
          1: 'Das $\\sqrt{5}$ im Zähler wurde vergessen — Erweitern ist Multiplikation beider Seiten.',
          2: 'Kehrwert — nicht rational gemacht.',
          3: 'Da fehlt der Nenner ganz.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['nenner-rational'] },
      ),
      ni(
        'Mache den Nenner von $\\dfrac{4}{\\sqrt{2}}$ rational und gib den Zähler an (ohne $\\sqrt{2}$: die ganze Zahl vor $\\sqrt{2}$).',
        2, 0, '',
        `**Ansatz:** Mit $\\sqrt{2}$ erweitern und dann kürzen.

**Rechnung:** $\\dfrac{4}{\\sqrt{2}} = \\dfrac{4\\sqrt{2}}{2} = 2\\sqrt{2}$.

**Probe:** $4/\\sqrt{2} \\approx 2{,}83$; $2\\sqrt{2} \\approx 2{,}83$. ✓

**Typischer Fehler:** Nicht kürzen — Ergebnis $4\\sqrt{2}/2$ ist rechnerisch richtig, aber nicht vereinfacht.`,
        [
          'Mit $\\sqrt{2}$ erweitern.',
          'Dann mit ggT $2$ kürzen.',
          'Ergebnis: $2\\sqrt{2}$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['nenner-rational'] },
      ),
      mc(
        'Ein Schüler schreibt $\\dfrac{1}{\\sqrt{3}} = \\dfrac{1}{3}$ und behauptet damit den Nenner rational gemacht zu haben. Wo liegt der Fehler?',
        [
          'Er hat einfach $\\sqrt{3}$ durch $3$ ersetzt — das ist keine gültige Umformung. Korrekt: $\\dfrac{\\sqrt{3}}{3}$.',
          'Er hat nur den Zähler verändert.',
          'Der Ausdruck ist korrekt.',
          'Der Nenner war bereits rational.',
        ],
        0,
        `**Ansatz:** Eine Wurzel verschwindet nicht, indem man sie streicht.

**Rechnung:** $1/\\sqrt{3} \\approx 0{,}577$, nicht $1/3 \\approx 0{,}333$.

**Probe:** Zahlentest zeigt Ungleichheit.

**Typischer Fehler:** "$\\sqrt{}$ weglassen macht keinen Unterschied" — falsch.`,
        [
          'Wie wird eine Wurzel aus dem Nenner entfernt?',
          'Durch Erweitern, nicht durch Weglassen.',
          'Zahlentest: $1/\\sqrt{3}$ vs. $1/3$.',
        ],
        {
          1: 'Der Nenner wurde falsch verändert, nicht der Zähler.',
          2: 'Zahlentest widerlegt die Gleichheit.',
          3: 'Der Nenner war $\\sqrt{3}$ — nicht rational.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['nenner-rational'] },
      ),
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[nenner-rational]
      // Bruch mit Wurzelpotenz im Nenner — testet Erweitern mit passender Restwurzel.
      ni(
        'Mache den Nenner von $\\dfrac{5}{\\sqrt{20}}$ rational und gib den Koeffizienten vor $\\sqrt{5}$ im vollständig gekürzten Ergebnis an.',
        0.5, 0.01, '',
        `**Ansatz:** Erst Wurzel im Nenner vereinfachen, dann erweitern und kürzen.

**Rechnung:** $\\sqrt{20} = 2\\sqrt{5}$, also $\\dfrac{5}{\\sqrt{20}} = \\dfrac{5}{2\\sqrt{5}}$. Erweitern mit $\\sqrt{5}$: $\\dfrac{5\\sqrt{5}}{2 \\cdot 5} = \\dfrac{5\\sqrt{5}}{10} = \\dfrac{\\sqrt{5}}{2}$. Koeffizient vor $\\sqrt{5}$ ist $\\tfrac{1}{2} = 0{,}5$.

**Probe:** Dezimal: $5/\\sqrt{20} = 5/4{,}472 \\approx 1{,}118$. $\\sqrt{5}/2 \\approx 2{,}236/2 = 1{,}118$. ✓

**Typischer Fehler:** Direkt mit $\\sqrt{20}$ erweitern statt erst vereinfachen: $5\\sqrt{20}/20 = \\sqrt{20}/4$. Stimmt rechnerisch, aber das Endergebnis ist nicht in einfachster Form ($\\sqrt{20} = 2\\sqrt{5}$, dann $2\\sqrt{5}/4 = \\sqrt{5}/2$).`,
        [
          'Erst $\\sqrt{20}$ vereinfachen: $\\sqrt{20} = 2\\sqrt{5}$.',
          'Erweitern mit $\\sqrt{5}$: $\\sqrt{5} \\cdot \\sqrt{5} = 5$.',
          'Endform: $\\sqrt{5}/2$ — Koeffizient $1/2$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['nenner-rational'] },
      ),
      ni(
        'Mache $\\dfrac{\\sqrt{6}}{\\sqrt{2}}$ zum Nenner-rationalen Ausdruck und gib den Wert als Quadratzahl-Wurzel an (Radikand).',
        3, 0, '',
        `**Ansatz:** Quotient unter der Wurzel zusammenfassen ODER erweitern.

**Rechnung:** $\\dfrac{\\sqrt{6}}{\\sqrt{2}} = \\sqrt{\\dfrac{6}{2}} = \\sqrt{3}$. Nenner rational (er ist $1$).

**Probe:** $\\sqrt{6}/\\sqrt{2} \\approx 2{,}449/1{,}414 \\approx 1{,}732 = \\sqrt{3}$. ✓

**Typischer Fehler:** Brute-force erweitern statt Quotient-Regel anwenden.`,
        [
          'Quotient unter der Wurzel.',
          '$\\sqrt{6}/\\sqrt{2} = \\sqrt{6/2}$.',
          '$6/2 = 3$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['nenner-rational', 'wurzel-vereinfachen'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-1-3 — Logarithmen (7 SGs, 35 Matrix-Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-1-3': {
    // [0] Definition log_b(x) = y ⟺ b^y = x
    0: [
      tf(
        'Es gilt $\\log_2(8) = 3$, weil $2^3 = 8$.',
        true,
        `**Ansatz:** Definition: $\\log_b(x) = y \\iff b^y = x$.

**Rechnung:** $2^3 = 8$, also $\\log_2(8) = 3$.

**Probe:** $2 \\cdot 2 \\cdot 2 = 8$. ✓

**Typischer Fehler:** Basis und Argument vertauschen.`,
        [
          'Was bedeutet $\\log_b(x) = y$?',
          'Es ist die Umkehrung von $b^y = x$.',
          '$2^3 = ?$',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['log-def'] },
      ),
      mc(
        'Was ist $\\log_3(27)$?',
        ['$3$', '$9$', '$27/3 = 9$', '$\\ln(27)/3$'],
        0,
        `**Ansatz:** $\\log_3(27) = y \\iff 3^y = 27$.

**Rechnung:** $3^3 = 27$, also $y = 3$.

**Probe:** $\\log_3(27) = \\log_3(3^3) = 3$. ✓

**Typischer Fehler:** Division statt Logarithmus: $27/3 = 9$.`,
        [
          '$3^? = 27$.',
          'Zähle die Faktoren.',
          '$3 \\cdot 3 \\cdot 3 = 27$.',
        ],
        {
          1: '$9 = 3^2$, aber wir suchen den Exponenten, nicht das Argument einer anderen Potenz.',
          2: 'Division ist nicht Logarithmus.',
          3: 'Basiswechsel ist hier unnötig — $3^3 = 27$ direkt.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['log-def'] },
      ),
      ni(
        'Berechne $\\log_2(32)$.',
        5, 0, '',
        `**Ansatz:** $2^y = 32$.

**Rechnung:** $2^5 = 32$, also $\\log_2(32) = 5$.

**Probe:** $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. ✓

**Typischer Fehler:** $32/2 = 16$ denken.`,
        [
          '$2^? = 32$.',
          '$2^4 = 16$, $2^5 = 32$.',
          'Antwort: $5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['log-def'] },
      ),
      mc(
        'Ein Schüler rechnet $\\log_4(64) = 64/4 = 16$. Wo liegt der Fehler?',
        [
          'Logarithmus ist die Umkehrung der Exponentialfunktion, keine Division: $\\log_4(64) = 3$, weil $4^3 = 64$.',
          'Er hätte $64 \\cdot 4 = 256$ rechnen müssen.',
          'Der Ausdruck ist korrekt.',
          'Die Basis $4$ ist nicht zulässig.',
        ],
        0,
        `**Ansatz:** $\\log_b(x)$ ≠ $x/b$. Stattdessen: $b^y = x$.

**Rechnung:** $4^3 = 64$, also $\\log_4(64) = 3$.

**Probe:** $4 \\cdot 4 \\cdot 4 = 64$. ✓

**Typischer Fehler:** Division mit Logarithmus verwechseln — sehr häufiger Anfängerfehler.`,
        [
          'Logarithmus ist keine Division.',
          '$\\log_b(x) = y$ bedeutet $b^y = x$.',
          'Zahlentest: $4^3 = ?$',
        ],
        {
          1: 'Multiplikation ist auch nicht Logarithmus.',
          2: 'Zahlentest: $4^{16}$ ist eine riesige Zahl, nicht $64$.',
          3: 'Jede positive Basis $\\neq 1$ ist erlaubt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['log-def'] },
      ),
      // Zusatz-Aufgabe SG 0: apply-independent · number-input · uses=[log-def]
      // Logarithmus mit Basis 10 — testet log-def im dekadischen Standardfall.
      ni(
        'Berechne $\\log_{10}(10\\,000)$.',
        4, 0, '',
        `**Ansatz:** $\\log_{10}(x) = y$ heißt $10^{y} = x$. Welche Zehnerpotenz ist $10\\,000$?

**Rechnung:** $10\\,000 = 10^{4}$, also $\\log_{10}(10\\,000) = 4$.

**Probe:** $10 \\cdot 10 \\cdot 10 \\cdot 10 = 10\\,000$. ✓ Generell: $\\log_{10}(10^{n}) = n$ — Anzahl der Nullen einer Zehnerpotenz.

**Typischer Fehler:** $10\\,000/10 = 1000$ rechnen — Logarithmus ist keine Division. Oder Zehnerpotenz falsch zählen ($10^{5}$ wäre $100\\,000$, $10^{3}$ ist $1000$).`,
        [
          'Wie oft passt $10$ in $10\\,000$ als Faktor?',
          'Schreibe $10\\,000$ als Zehnerpotenz.',
          'Anzahl der Nullen $=$ Logarithmus zur Basis $10$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['log-def'] },
      ),
      matching(
        'Ordne jeder Basis den typischen Anwendungskontext zu.',
        [
          { left: '$\\ln$ (Basis $e$)',        right: 'Natürliche Wachstumsprozesse, DGL, Analysis' },
          { left: '$\\log$ (Basis $10$)',      right: 'dB-Skala, pH-Wert, Technik' },
          { left: '$\\log_2$ (Basis $2$)',     right: 'Informatik, Bits, Algorithmen-Komplexität' },
          { left: '$\\log_b$ (beliebig)',      right: 'Allgemeine Definition, Basiswechsel möglich' },
        ],
        `**Ansatz:** Jede Basis hat einen typischen Anwendungsbereich.

**Rechnung:** Die drei Standardbasen $e$, $10$, $2$ sind am häufigsten.

**Probe:** Konvention in Wissenschaft und Technik.

**Typischer Fehler:** Basen austauschbar behandeln.`,
        [
          'Basis $e$ — natürlich (Analysis).',
          'Basis $10$ — technisch (dB, pH).',
          'Basis $2$ — Informatik.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['log-spezialfaelle'] },
      ),
    ],
    // [1] Produktregel: ln(ab) = ln(a) + ln(b)
    1: [
      tf(
        'Für $a, b > 0$ gilt $\\ln(ab) = \\ln(a) + \\ln(b)$.',
        true,
        `**Ansatz:** Produktregel — Multiplikation wird zu Addition.

**Rechnung:** Beweisidee: $e^{\\ln a + \\ln b} = e^{\\ln a} \\cdot e^{\\ln b} = a \\cdot b$.

**Probe:** $\\ln(6) = \\ln(2) + \\ln(3) \\approx 0{,}693 + 1{,}099 = 1{,}792$. ✓

**Typischer Fehler:** $\\ln(ab) = \\ln(a) \\cdot \\ln(b)$ — Multiplikation statt Addition.`,
        [
          'Logarithmus vom Produkt — welche Operation?',
          'Multiplikation wird zu Addition.',
          '$\\ln(ab) = \\ln a + \\ln b$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['log-produkt'] },
      ),
      mc(
        'Vereinfache $\\ln(12) - \\ln(3)$.',
        ['$\\ln(4)$', '$\\ln(9)$', '$4$', '$\\ln(12/3) = \\ln(4)$'],
        0,
        `**Ansatz:** $\\ln(a) - \\ln(b) = \\ln(a/b)$ (Quotientenregel, implizit Produkt-Umkehrung).

**Rechnung:** $\\ln(12) - \\ln(3) = \\ln(12/3) = \\ln(4)$.

**Probe:** $\\ln(12) \\approx 2{,}485$, $\\ln(3) \\approx 1{,}099$. Differenz $\\approx 1{,}386 = \\ln(4)$. ✓

**Typischer Fehler:** Subtrahieren der Argumente: $\\ln(12-3) = \\ln(9)$.`,
        [
          'Differenz von Logarithmen → Quotient.',
          '$12/3 = 4$.',
          '$\\ln(4)$ ist die einfachste Form.',
        ],
        {
          1: 'Das wäre $\\ln(12 - 3) = \\ln(9)$ — aber der Logarithmus ist nicht linear.',
          2: '$4$ ohne Wurzel/Logarithmus ist nicht der Logarithmus von etwas Konkretem.',
          3: 'Das ist dieselbe Antwort wie Option 1, nur anders notiert.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['log-produkt'] },
      ),
      ni(
        'Bestimme $\\log_2(4 \\cdot 8)$ als ganze Zahl.',
        5, 0, '',
        `**Ansatz:** Produktregel: $\\log_2(4 \\cdot 8) = \\log_2(4) + \\log_2(8)$.

**Rechnung:** $\\log_2(4) = 2$, $\\log_2(8) = 3$. Summe $= 5$.

**Probe:** $4 \\cdot 8 = 32 = 2^5$. ✓

**Typischer Fehler:** Multiplikation: $2 \\cdot 3 = 6$ statt $2 + 3 = 5$.`,
        [
          'Produktregel: Logs addieren.',
          '$\\log_2(4) = 2$, $\\log_2(8) = 3$.',
          '$2 + 3 = 5$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['log-produkt'] },
      ),
      mc(
        'Ein Schüler schreibt $\\ln(a \\cdot b) = \\ln(a) \\cdot \\ln(b)$. Wo liegt der Fehler?',
        [
          'Produktregel: $\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — Multiplikation wird zu ADDITION, nicht Multiplikation.',
          'Der Logarithmus des Produkts ist das Produkt der Argumente.',
          'Es ist korrekt.',
          'Der Logarithmus ist nicht definiert für Produkte.',
        ],
        0,
        `**Ansatz:** Klassischer Fehler: Verwechslung von Produkt- und Additions-Regel.

**Rechnung:** Korrekt: $\\ln(a b) = \\ln a + \\ln b$.

**Probe:** $\\ln(6) = \\ln(2 \\cdot 3) = \\ln 2 + \\ln 3 \\approx 1{,}792$. Schüler: $\\ln 2 \\cdot \\ln 3 \\approx 0{,}762 \\neq 1{,}792$.

**Typischer Fehler:** Logarithmus-Regeln verwechseln.`,
        [
          'Welche Operation wird beim Log aus einer Multiplikation?',
          'Produkt → Summe, nicht Produkt.',
          'Zahlentest.',
        ],
        {
          1: 'Weder das Produkt der Argumente noch das Produkt der Logarithmen — die Summe der Logarithmen.',
          2: 'Zahlentest widerlegt.',
          3: 'Der Logarithmus ist für alle $x > 0$ definiert — auch Produkte positiver Zahlen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['log-produkt'] },
      ),
      // Zusatz-Aufgabe SG 1: apply-independent · number-input · uses=[log-produkt]
      // Produktregel über drei Faktoren — testet iterierte Anwendung.
      ni(
        'Vereinfache $\\log_2(2) + \\log_2(4) + \\log_2(8)$ als ganze Zahl.',
        6, 0, '',
        `**Ansatz:** Drei Logarithmus-Summen zusammenfassen — Produktregel kann auf beliebig viele Faktoren ausgedehnt werden: $\\log_b(a_1 \\cdot a_2 \\cdot a_3) = \\log_b(a_1) + \\log_b(a_2) + \\log_b(a_3)$.

**Rechnung:** $\\log_2(2) + \\log_2(4) + \\log_2(8) = \\log_2(2 \\cdot 4 \\cdot 8) = \\log_2(64) = 6$. Direkt: $1 + 2 + 3 = 6$.

**Probe:** $2 \\cdot 4 \\cdot 8 = 64 = 2^{6}$. ✓ Beide Wege liefern $6$.

**Typischer Fehler:** Logarithmen multiplizieren statt addieren: $1 \\cdot 2 \\cdot 3 = 6$ — zufällig richtige Zahl, aber falscher Weg. Bei anderen Werten ($\\log_2(2) + \\log_2(8) = 1+3 = 4$ vs. $1 \\cdot 3 = 3$) zeigt sich der Fehler.`,
        [
          'Produktregel $\\to$ Summe von Logs ist Log des Produkts.',
          'Direktrechnung: $\\log_2(2) = 1$, $\\log_2(4) = 2$, $\\log_2(8) = 3$.',
          '$1 + 2 + 3 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['log-produkt'] },
      ),
      ni(
        'Vereinfache $\\ln(4) + \\ln(25)$ als $\\ln(\\text{Zahl})$ und gib diese Zahl an.',
        100, 0, '',
        `**Ansatz:** Produktregel: Summe → Produkt.

**Rechnung:** $\\ln(4) + \\ln(25) = \\ln(4 \\cdot 25) = \\ln(100)$.

**Probe:** $\\ln(100) \\approx 4{,}605$. $\\ln(4) + \\ln(25) \\approx 1{,}386 + 3{,}219 = 4{,}605$. ✓

**Typischer Fehler:** Addition der Argumente: $\\ln(4+25) = \\ln(29)$.`,
        [
          'Summe von Logs → Logarithmus des Produkts.',
          '$4 \\cdot 25 = ?$',
          '$\\ln(100)$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['log-produkt'] },
      ),
    ],
    // [2] Quotientenregel: ln(a/b) = ln(a) - ln(b)
    2: [
      tf(
        'Für $a, b > 0$ gilt $\\ln(a/b) = \\ln(a) - \\ln(b)$.',
        true,
        `**Ansatz:** Quotientenregel — Division wird zu Subtraktion.

**Rechnung:** Beweis: $\\ln(a/b) = \\ln(a \\cdot b^{-1}) = \\ln a + \\ln(b^{-1}) = \\ln a - \\ln b$.

**Probe:** $\\ln(6/2) = \\ln(3) \\approx 1{,}099$. $\\ln(6) - \\ln(2) \\approx 1{,}792 - 0{,}693 = 1{,}099$. ✓

**Typischer Fehler:** Division: $\\ln(a)/\\ln(b)$ statt Subtraktion.`,
        [
          'Quotient im Log → Subtraktion.',
          'Herleitung über Produkt-Regel und negative Exponenten.',
          'Gegenprüfung mit Zahlen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-quotient'] },
      ),
      mc(
        'Vereinfache $\\log(50) - \\log(5)$ (Basis 10).',
        ['$\\log(10) = 1$', '$\\log(55)$', '$10$', '$\\log(45)$'],
        0,
        `**Ansatz:** Quotientenregel.

**Rechnung:** $\\log(50) - \\log(5) = \\log(50/5) = \\log(10) = 1$.

**Probe:** $\\log(10) = 1$ da $10^1 = 10$. ✓

**Typischer Fehler:** Addition ($\\log(55)$) oder Subtraktion der Argumente ($\\log(45)$).`,
        [
          'Differenz → Quotient.',
          '$50/5 = 10$.',
          '$\\log(10) = 1$ (Basis $10$).',
        ],
        {
          1: 'Das wäre $\\log(50) + \\log(5)$ — Addition, nicht Subtraktion.',
          2: '$10$ ohne Logarithmus — wäre das Argument, nicht der Wert.',
          3: 'Subtraktion der Argumente ist nicht die Quotientenregel.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['log-quotient'] },
      ),
      ni(
        'Bestimme $\\log_3(81/9)$ als ganze Zahl.',
        2, 0, '',
        `**Ansatz:** Quotientenregel + Direktrechnung.

**Rechnung:** $81/9 = 9 = 3^2$. $\\log_3(9) = 2$. Alternativ: $\\log_3(81) - \\log_3(9) = 4 - 2 = 2$.

**Probe:** $3^2 = 9$. ✓

**Typischer Fehler:** Quotientenregel übersehen und direkt $\\log_3(81) = 4$ ohne Anpassung nehmen.`,
        [
          'Quotientenregel oder Direktrechnung.',
          '$81/9 = 9$.',
          '$\\log_3(9) = 2$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['log-quotient', 'log-produkt'] },
      ),
      mc(
        'Ein Schüler schreibt $\\ln(10/2) = \\ln(10) / \\ln(2)$. Wo liegt der Fehler?',
        [
          'Quotient IN dem Log → Subtraktion der Logs: $\\ln(10) - \\ln(2)$, nicht Division.',
          'Das ist der Basiswechsel, hier aber falsch angewendet.',
          'Die Rechnung ist korrekt.',
          '$\\ln$ ist nicht für Brüche definiert.',
        ],
        0,
        `**Ansatz:** Verwechslung der Quotientenregel (Subtraktion) mit der Basiswechselformel (Division).

**Rechnung:** Korrekt: $\\ln(10/2) = \\ln(10) - \\ln(2) = \\ln(5)$.

**Probe:** $\\ln(5) \\approx 1{,}609$. $\\ln(10)/\\ln(2) \\approx 2{,}303/0{,}693 \\approx 3{,}322 = \\log_2(10)$ — ganz andere Zahl!

**Typischer Fehler:** Genau dieser — Quotientenregel mit Basiswechsel verwechseln.`,
        [
          'Quotient IM Log → Subtraktion der Logs.',
          'Division der Logs wäre Basiswechsel.',
          'Zwei verschiedene Regeln.',
        ],
        {
          1: 'Basiswechsel: $\\log_b(x) = \\ln(x)/\\ln(b)$ — hier nicht anwendbar.',
          2: 'Zahlentest widerlegt.',
          3: '$\\ln$ ist für alle positiven Argumente definiert, auch $10/2$.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['log-quotient'] },
      ),
      // Zusatz-Aufgabe SG 2: apply-independent · number-input · uses=[log-quotient, log-produkt]
      // Quotient + Produkt kombiniert — testet Reihenfolge der Regeln in einem Ausdruck.
      ni(
        'Vereinfache $\\log_2(48) - \\log_2(3)$ als ganze Zahl.',
        4, 0, '',
        `**Ansatz:** Differenz von Logarithmen $\\to$ Quotient. Dann Direktrechnung.

**Rechnung:** $\\log_2(48) - \\log_2(3) = \\log_2(48/3) = \\log_2(16) = 4$ (da $2^{4} = 16$).

**Probe:** $48/3 = 16$. $\\log_2(16) = 4$ direkt. Numerisch: $\\log_2(48) \\approx 5{,}585$ und $\\log_2(3) \\approx 1{,}585$. Differenz $\\approx 4$. ✓

**Typischer Fehler:** Argumente subtrahieren: $\\log_2(48 - 3) = \\log_2(45)$ — Quotientenregel ist nicht „Subtraktion der Argumente", sondern „Division". Oder die Logs einzeln berechnen, was ohne Taschenrechner schwierig ist.`,
        [
          'Differenz von Logs $\\to$ Quotient: $\\log_b(a) - \\log_b(c) = \\log_b(a/c)$.',
          '$48/3 = 16$.',
          '$\\log_2(16) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['log-quotient', 'log-produkt'] },
      ),
      ni(
        'Vereinfache $\\ln(30) - \\ln(5) - \\ln(2)$ als $\\ln(\\text{Zahl})$ und gib diese Zahl an.',
        3, 0, '',
        `**Ansatz:** Zwei Subtraktionen → zwei Divisionen.

**Rechnung:** $\\ln(30) - \\ln(5) - \\ln(2) = \\ln(30/5) - \\ln(2) = \\ln(6) - \\ln(2) = \\ln(6/2) = \\ln(3)$.

**Probe:** $\\ln(3) \\approx 1{,}099$. Zahlenwert der linken Seite: $\\approx 3{,}401 - 1{,}609 - 0{,}693 = 1{,}099$. ✓

**Typischer Fehler:** Fall-Back auf Produkt statt Quotient.`,
        [
          'Jede Subtraktion → Quotient.',
          '$30/5 = 6$, dann $6/2 = 3$.',
          '$\\ln(3)$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['log-quotient', 'log-produkt'] },
      ),
    ],
    // [3] Potenzregel: ln(a^n) = n · ln(a)
    3: [
      tf(
        'Für $a > 0$ gilt $\\ln(a^n) = n \\cdot \\ln(a)$.',
        true,
        `**Ansatz:** Potenzregel — Exponent wird zum Faktor.

**Rechnung:** Beweisidee: $\\ln(a^n) = \\ln(a \\cdot a \\cdots a)$ ($n$-mal) $= \\ln a + \\ln a + \\cdots + \\ln a = n \\ln a$.

**Probe:** $\\ln(4) = \\ln(2^2) = 2\\ln(2) \\approx 2 \\cdot 0{,}693 = 1{,}386$. ✓

**Typischer Fehler:** $\\ln(a^n) = (\\ln a)^n$ — Potenz außen statt Faktor.`,
        [
          'Exponent im Log → vor den Log ziehen.',
          '$\\ln(a^n) = n \\cdot \\ln a$.',
          'Nicht $(\\ln a)^n$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['log-potenz'] },
      ),
      mc(
        'Vereinfache $\\ln(e^5)$.',
        ['$5$', '$e^5$', '$5 \\ln e$', '$\\ln 5$'],
        0,
        `**Ansatz:** Potenzregel + $\\ln(e) = 1$.

**Rechnung:** $\\ln(e^5) = 5 \\ln e = 5 \\cdot 1 = 5$.

**Probe:** $e^{\\ln(e^5)} = e^5$. ✓

**Typischer Fehler:** Vergessen, dass $\\ln(e) = 1$.`,
        [
          'Exponent vor den Log: $5 \\ln e$.',
          '$\\ln(e) = 1$.',
          '$5 \\cdot 1 = 5$.',
        ],
        {
          1: '$e^5$ wäre das Argument, nicht das Ergebnis.',
          2: '$5 \\ln e = 5 \\cdot 1 = 5$ ist mathematisch gleich, aber die einfachste Form ist $5$.',
          3: '$\\ln 5$ wäre die Aufgabe $\\ln(5)$, nicht $\\ln(e^5)$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['log-potenz'] },
      ),
      ni(
        'Bestimme $\\log_2(8^3)$ als ganze Zahl.',
        9, 0, '',
        `**Ansatz:** Potenzregel: $\\log_2(8^3) = 3 \\log_2(8)$.

**Rechnung:** $\\log_2(8) = 3$. $3 \\cdot 3 = 9$.

**Probe:** $8^3 = 512 = 2^9$. ✓

**Typischer Fehler:** Potenzregel mit Multiplikationsregel verwechseln.`,
        [
          'Potenzregel.',
          '$\\log_2(8) = 3$.',
          '$3 \\cdot 3 = 9$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['log-potenz'] },
      ),
      mc(
        'Ein Schüler schreibt $\\ln(x^3) = 3^{\\ln x}$. Wo liegt der Fehler?',
        [
          'Potenzregel: $\\ln(x^n) = n \\cdot \\ln x$ — der Exponent wird ein FAKTOR, nicht Basis einer Potenz.',
          'Korrekt wäre $\\ln(3x)$.',
          'Der Ausdruck ist korrekt.',
          '$x$ müsste negativ sein.',
        ],
        0,
        `**Ansatz:** Verwechslung: Exponent wird zum Multiplikator, nicht zur Basis einer neuen Potenz.

**Rechnung:** Korrekt: $\\ln(x^3) = 3 \\ln x$.

**Probe:** $x=e$: $\\ln(e^3) = 3$. Korrekt: $3 \\ln e = 3$. Schüler: $3^{\\ln e} = 3^1 = 3$ zufällig gleich! Aber $x=e^2$: $\\ln(e^6) = 6$. Korrekt: $3 \\cdot 2 = 6$. Schüler: $3^2 = 9 \\neq 6$.

**Typischer Fehler:** Potenzregel völlig falsch verstanden.`,
        [
          'Was passiert mit dem Exponenten?',
          'Er wird ein Faktor VOR dem Logarithmus.',
          'Zahlentest mit $x = e^2$.',
        ],
        {
          1: 'Das wäre $\\ln(3x) = \\ln 3 + \\ln x$ — ganz andere Struktur.',
          2: 'Zahlentest mit $x = e^2$ widerlegt.',
          3: 'Logarithmus ist für alle $x > 0$ definiert.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['log-potenz'] },
      ),
      // Zusatz-Aufgabe SG 3: apply-independent · number-input · uses=[log-potenz]
      // Wurzel als Bruchpotenz im Argument — testet log-potenz mit Bruchexponenten.
      ni(
        'Vereinfache $\\log_3(\\sqrt{27})$ als Dezimalzahl (eine Nachkommastelle).',
        1.5, 0.05, '',
        `**Ansatz:** Wurzel als Bruchpotenz schreiben, dann Potenzregel: $\\log_b(\\sqrt[n]{a}) = \\log_b(a^{1/n}) = \\tfrac{1}{n} \\log_b(a)$.

**Rechnung:** $\\sqrt{27} = 27^{1/2}$. $\\log_3(27^{1/2}) = \\tfrac{1}{2} \\log_3(27) = \\tfrac{1}{2} \\cdot 3 = 1{,}5$.

**Probe:** $3^{1{,}5} = 3 \\cdot \\sqrt{3} \\approx 5{,}196 \\approx \\sqrt{27} \\approx 5{,}196$. ✓

**Typischer Fehler:** Wurzel als „normale Funktion" behandeln und nicht als Bruchpotenz erkennen — dann scheitert die Potenzregel-Anwendung. Oder $\\log_3(\\sqrt{27}) = \\sqrt{\\log_3(27)} = \\sqrt{3} \\approx 1{,}73$ rechnen — Wurzel auf den Logarithmus statt aufs Argument.`,
        [
          'Wurzel als Bruchpotenz: $\\sqrt{a} = a^{1/2}$.',
          'Potenzregel: $\\log_b(a^{n}) = n \\cdot \\log_b(a)$.',
          '$\\log_3(27) = 3$, also $\\tfrac{1}{2} \\cdot 3 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['log-potenz'] },
      ),
      ni(
        'Vereinfache $\\ln(a^2 b^3) - \\ln(a b)$ und drücke das Ergebnis als Faktor$\\cdot \\ln a +$ Faktor$\\cdot \\ln b$ aus. Gib den Koeffizienten von $\\ln b$ an.',
        2, 0, '',
        `**Ansatz:** Quotientenregel + Potenzregel + Produktregel zusammen.

**Rechnung:** $\\ln(a^2 b^3) - \\ln(ab) = \\ln\\dfrac{a^2 b^3}{ab} = \\ln(a b^2) = \\ln a + 2\\ln b$.

**Probe:** Koeffizient von $\\ln a$ ist $1$, von $\\ln b$ ist $2$.

**Typischer Fehler:** Exponenten nicht zu Faktoren ziehen.`,
        [
          'Quotientenregel zuerst.',
          'Dann kürzen.',
          'Dann Potenz- und Produktregel.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['log-potenz', 'log-produkt'] },
      ),
    ],
    // [4] Basiswechsel: log_b(x) = ln(x) / ln(b)
    4: [
      tf(
        'Es gilt $\\log_b(x) = \\dfrac{\\ln(x)}{\\ln(b)}$.',
        true,
        `**Ansatz:** Basiswechsel — damit kann man jeden Logarithmus auf $\\ln$ oder $\\log_{10}$ umrechnen.

**Rechnung:** $\\log_b x = y \\iff b^y = x \\iff y \\ln b = \\ln x \\iff y = \\ln x / \\ln b$.

**Probe:** $\\log_2(8) = \\ln(8)/\\ln(2) \\approx 2{,}079/0{,}693 = 3$. ✓

**Typischer Fehler:** Basis und Argument im Bruch vertauschen.`,
        [
          'Wofür ist der Basiswechsel nützlich?',
          'Taschenrechner hat meist nur $\\ln$ und $\\log$.',
          'Formel: $\\ln x / \\ln b$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
      mc(
        'Schreibe $\\log_5(125)$ mit $\\ln$.',
        ['$\\dfrac{\\ln(125)}{\\ln(5)}$', '$\\dfrac{\\ln(5)}{\\ln(125)}$', '$\\ln(125) \\cdot \\ln(5)$', '$\\ln(125) - \\ln(5)$'],
        0,
        `**Ansatz:** $\\log_b x = \\ln x / \\ln b$ — Basis unten.

**Rechnung:** $\\log_5(125) = \\ln(125)/\\ln(5)$.

**Probe:** $5^3 = 125$, also $\\log_5(125) = 3$. $\\ln(125)/\\ln(5) \\approx 4{,}828/1{,}609 = 3$. ✓

**Typischer Fehler:** Basis und Argument vertauschen.`,
        [
          'Basis wandert in den Nenner.',
          'Argument bleibt im Zähler.',
          '$\\log_b x = \\ln x / \\ln b$.',
        ],
        {
          1: 'Basis und Argument vertauscht.',
          2: 'Multiplikation ist falsch.',
          3: 'Subtraktion wäre $\\ln(x/b)$, nicht der Basiswechsel.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
      ni(
        'Berechne $\\log_5(125)$ als ganze Zahl.',
        3, 0, '',
        `**Ansatz:** Direkt oder per Basiswechsel.

**Rechnung:** $5^3 = 125$, also $\\log_5(125) = 3$.

**Probe:** Basiswechsel: $\\ln(125)/\\ln(5) \\approx 4{,}828/1{,}609 = 3$. ✓

**Typischer Fehler:** Basiswechsel verwenden, wenn direkte Erkenntnis einfacher ist.`,
        [
          '$5^? = 125$.',
          '$5 \\cdot 5 = 25$, $25 \\cdot 5 = 125$.',
          'Antwort: $3$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
      mc(
        'Ein Schüler schreibt $\\log_2(16) = \\ln(2)/\\ln(16)$. Wo liegt der Fehler?',
        [
          'Basiswechsel: Basis $b$ kommt in den NENNER, Argument $x$ in den Zähler: $\\ln(16)/\\ln(2) = 4$.',
          'Basiswechsel ist unnötig — direkt $16/2 = 8$.',
          'Es ist korrekt.',
          'Die Basis muss $10$ sein.',
        ],
        0,
        `**Ansatz:** Nenner = Logarithmus der Basis.

**Rechnung:** Korrekt: $\\log_2(16) = \\ln(16)/\\ln(2) = 4$ (da $2^4 = 16$).

**Probe:** Schülerrechnung: $\\ln 2 / \\ln 16 \\approx 0{,}693/2{,}773 = 0{,}25 = 1/4$ — das ist der Kehrwert.

**Typischer Fehler:** Zähler und Nenner vertauscht.`,
        [
          'Wo steht die Basis in der Formel?',
          'Basis im Nenner.',
          'Zahlentest: Was ist $\\log_2(16)$?',
        ],
        {
          1: '$16/2 = 8$ ist Division, kein Logarithmus.',
          2: 'Zahlentest widerlegt sofort.',
          3: 'Der Basiswechsel funktioniert mit jeder Basis.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
      // Zusatz-Aufgabe SG 4: apply-independent · number-input · uses=[log-basiswechsel]
      // Basiswechsel mit Taschenrechner-typischer Aufgabe — testet konkrete numerische Auswertung.
      ni(
        'Berechne $\\log_2(50)$ mit dem Basiswechsel und $\\ln$ auf 3 Dezimalen.',
        5.644, 0.01, '',
        `**Ansatz:** Basiswechsel: $\\log_b(x) = \\dfrac{\\ln(x)}{\\ln(b)}$. Damit lässt sich jeder Logarithmus mit dem Taschenrechner ($\\ln$ oder $\\log$) berechnen.

**Rechnung:** $\\log_2(50) = \\dfrac{\\ln(50)}{\\ln(2)} \\approx \\dfrac{3{,}912}{0{,}693} \\approx 5{,}644$.

**Probe:** $2^{5{,}644} \\approx 49{,}99 \\approx 50$. ✓ Plausibel: $2^{5} = 32$ und $2^{6} = 64$, also liegt $\\log_2(50)$ zwischen $5$ und $6$ — näher bei $6$ (denn $50$ liegt näher an $64$ als an $32$).

**Typischer Fehler:** Zähler und Nenner vertauschen: $\\ln(2)/\\ln(50) \\approx 0{,}177$ — der Kehrwert. Oder $\\log_{10}/\\log_{10}$ (also $\\log_b(x) = \\log(x)/\\log(b)$) verwechseln: liefert numerisch dasselbe, ist aber konzeptuell ok.`,
        [
          'Basiswechsel: $\\log_b(x) = \\ln(x)/\\ln(b)$ — Basis im Nenner.',
          '$\\ln(50) \\approx 3{,}912$, $\\ln(2) \\approx 0{,}693$.',
          'Sanity-Check: Antwort sollte zwischen $5$ und $6$ liegen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
      ni(
        'Eine radioaktive Substanz hat Halbwertszeit $T_{1/2} = 10\\,\\text{Jahre}$. Nach wie vielen Jahren sind nur noch $12{,}5\\%$ übrig? (ganze Zahl)',
        30, 0, '',
        `**Ansatz:** $12{,}5\\% = 1/8 = (1/2)^3$. Also 3 Halbwertszeiten.

**Rechnung:** $3 \\cdot 10\\,\\text{Jahre} = 30\\,\\text{Jahre}$.

**Probe:** Formel: $N(t) = N_0 (1/2)^{t/T}$. $t = T \\cdot \\log_{1/2}(0{,}125) = 10 \\cdot 3 = 30$.

**Typischer Fehler:** $12{,}5\\%$ falsch zerlegen und andere Halbwertszeiten rechnen.`,
        [
          '$12{,}5\\% = 1/8$.',
          '$1/8 = (1/2)^?$.',
          '$3$ Halbwertszeiten.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['log-basiswechsel'] },
      ),
    ],
    // [5] Summen-Falle: ln(a+b) ≠ ln(a) + ln(b)
    5: [
      tf(
        'Es gilt $\\ln(a+b) = \\ln(a) + \\ln(b)$ für alle $a, b > 0$.',
        false,
        `**Ansatz:** Produktregel gilt nur für PRODUKT, nicht Summe.

**Rechnung:** Gegenbeispiel: $\\ln(1 + 1) = \\ln(2) \\approx 0{,}693$, aber $\\ln(1) + \\ln(1) = 0$. Ungleich.

**Probe:** $\\ln$ ist nicht linear.

**Typischer Fehler:** Distributivgesetz auf Logarithmus übertragen.`,
        [
          'Was passiert bei $a = b = 1$?',
          '$\\ln(2)$ vs. $\\ln(1) + \\ln(1)$.',
          'Logarithmus ist nicht linear.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['log-summe-nein'] },
      ),
      mc(
        'Welche Umformung ist KORREKT?',
        [
          '$\\ln(ab) = \\ln a + \\ln b$',
          '$\\ln(a+b) = \\ln a + \\ln b$',
          '$\\ln(a) + \\ln(b) = \\ln(a+b)$',
          '$\\ln(a/b) = \\ln a \\cdot \\ln b$',
        ],
        0,
        `**Ansatz:** Produktregel vs. Summen-Falle.

**Rechnung:** $\\ln(ab) = \\ln a + \\ln b$ ist die Produktregel. Die anderen sind falsch.

**Probe:** $\\ln(6) = \\ln(2) + \\ln(3) \\approx 1{,}792$. ✓

**Typischer Fehler:** Produkt- und Additionsregel verwechseln.`,
        [
          'Produkt IN dem Log → Summe der Logs.',
          'Summe IN dem Log bleibt stehen.',
          'Keine Linearität.',
        ],
        {
          1: 'Falsch — $\\ln(a+b) \\neq \\ln a + \\ln b$.',
          2: 'Rückwärts dieselbe falsche Regel.',
          3: 'Quotient wird zu Differenz, nicht Produkt.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['log-summe-nein'] },
      ),
      mc(
        'Welche Umformung ist zulässig? $\\ln(3 + 5) = ?$',
        [
          'Nicht vereinfachbar — bleibt $\\ln(8)$.',
          '$\\ln(3) + \\ln(5) = \\ln(15)$.',
          '$\\ln(3) \\cdot \\ln(5)$.',
          '$3 \\ln(5)$.',
        ],
        0,
        `**Ansatz:** Summen-Falle — keine Vereinfachung möglich.

**Rechnung:** $\\ln(3+5) = \\ln(8)$. Mehr geht nicht direkt.

**Probe:** Man könnte $\\ln(8) = \\ln(2^3) = 3\\ln(2)$ schreiben — also die Argumente NACH Ausrechnen der Summe vereinfachen.

**Typischer Fehler:** Produktregel auf Summe anwenden.`,
        [
          'Summe IN dem Log.',
          'Keine direkte Umformung.',
          'Zuerst Summe ausrechnen, dann evtl. vereinfachen.',
        ],
        {
          1: 'Produktregel gilt für Multiplikation, nicht Addition.',
          2: 'Das ist keine gültige Regel.',
          3: '$3 \\ln(5)$ wäre $\\ln(5^3) = \\ln(125)$, nicht $\\ln(8)$.',
        },
        { stage: 'apply-independent', subGoal: 5, uses: ['log-summe-nein'] },
      ),
      mc(
        'Ein Schüler zerlegt $\\ln(7) = \\ln(3) + \\ln(4)$ mit der Begründung "$3 + 4 = 7$". Wo liegt der Fehler?',
        [
          'Die Produktregel gilt nur für $\\ln(3 \\cdot 4)$, nicht $\\ln(3 + 4)$. $\\ln(3) + \\ln(4) = \\ln(12)$, nicht $\\ln(7)$.',
          'Er hätte $7 = 3 \\cdot 4 - 5$ schreiben müssen.',
          'Der Schüler hat recht.',
          'Die Logarithmen müssen gleich sein.',
        ],
        0,
        `**Ansatz:** $\\ln(a) + \\ln(b) = \\ln(a \\cdot b)$, nicht $\\ln(a + b)$.

**Rechnung:** $\\ln(3) + \\ln(4) = \\ln(12) \\neq \\ln(7)$.

**Probe:** $\\ln(7) \\approx 1{,}946$, $\\ln(12) \\approx 2{,}485$. Ungleich.

**Typischer Fehler:** Addition im Argument als Multiplikation behandeln.`,
        [
          'Welche Operation ergibt die Summe $\\ln a + \\ln b$?',
          'Logarithmus des PRODUKTS, nicht der Summe.',
          'Zahlentest.',
        ],
        {
          1: 'Das wäre gesucht, aber die Umformung ist trotzdem falsch.',
          2: 'Zahlentest zeigt Ungleichheit.',
          3: '"Müssen gleich sein" ist keine Regel.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['log-summe-nein'] },
      ),
      // Zusatz-Aufgabe SG 5: recognize · true-false · uses=[log-summe-nein, log-produkt]
      // Direkter Vergleich Produkt vs. Summe — testet Unterscheidung der beiden Fälle.
      tf(
        'Es gilt $\\ln(5) + \\ln(2) = \\ln(7)$ — die Logarithmen lassen sich addieren wie ihre Argumente.',
        false,
        `**Ansatz:** Die Aussage verwechselt zwei verschiedene Operationen: tatsächliche Addition der Logarithmen entspricht der Multiplikation der Argumente, nicht der Addition.

**Rechnung:** Korrekt: $\\ln(5) + \\ln(2) = \\ln(5 \\cdot 2) = \\ln(10) \\neq \\ln(7)$. Behauptung wäre nur korrekt, wenn $\\ln$ linear wäre — ist es nicht.

**Probe:** Numerisch: $\\ln(5) \\approx 1{,}609$, $\\ln(2) \\approx 0{,}693$. Summe $\\approx 2{,}303$. Das ist $\\ln(10)$, nicht $\\ln(7) \\approx 1{,}946$.

**Typischer Fehler:** „Hinten in der Klammer kann ich addieren wie die Argumente" — falsch. Addition der Logarithmen $\\Rightarrow$ Multiplikation der Argumente (Produktregel).`,
        [
          'Produktregel: $\\ln(a) + \\ln(b) = \\ln(a \\cdot b)$, nicht $\\ln(a + b)$.',
          'Was ist $5 \\cdot 2$? Das ist das Argument im zusammengefassten Log.',
          'Numerisch prüfen: $\\ln(7) \\approx 1{,}95$ vs. $\\ln(10) \\approx 2{,}30$.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['log-summe-nein', 'log-produkt'] },
      ),
      matching(
        'Ordne jede Umformung als "korrekt" oder "falsch" zu.',
        [
          { left: '$\\ln(ab) = \\ln a + \\ln b$',   right: 'korrekt (Produktregel)' },
          { left: '$\\ln(a/b) = \\ln a - \\ln b$', right: 'korrekt (Quotientenregel)' },
          { left: '$\\ln(a + b) = \\ln a + \\ln b$', right: 'falsch (Summen-Falle)' },
          { left: '$\\ln(a^n) = n \\ln a$',          right: 'korrekt (Potenzregel)' },
        ],
        `**Ansatz:** Die drei gültigen Logarithmusgesetze + die Summen-Falle als Kontrast.

**Rechnung:** Produkt→Summe, Quotient→Differenz, Potenz→Faktor. Summe im Argument: **KEINE** Vereinfachung.

**Probe:** Jede Regel mit Zahlen testbar.

**Typischer Fehler:** Summen-Falle als "vierte Regel" missverstehen.`,
        [
          'Produkt ↔ Summe.',
          'Quotient ↔ Differenz.',
          'Potenz ↔ Faktor.',
          'Summe bleibt unverändert.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['log-summe-nein', 'log-produkt'] },
      ),
    ],
    // [6] Exp-Log-Umkehrung: e^{ln x} = x, ln(e^x) = x
    6: [
      tf(
        'Es gilt $e^{\\ln(x)} = x$ für alle $x > 0$.',
        true,
        `**Ansatz:** Umkehrfunktions-Identität: $\\exp$ und $\\ln$ sind Umkehrungen.

**Rechnung:** $\\ln(x) = y \\iff e^y = x$. Also $e^{\\ln x} = e^y = x$.

**Probe:** $e^{\\ln 5} = 5$. ✓

**Typischer Fehler:** Denken, die Funktionen heben sich nicht vollständig auf.`,
        [
          '$\\ln$ und $\\exp$ sind Umkehrfunktionen.',
          'Zusammenhang aus der Definition.',
          'Zahlentest mit $x=5$.',
        ],
        { stage: 'recognize', subGoal: 6, uses: ['log-umkehr'] },
      ),
      mc(
        'Vereinfache $\\ln(e^7)$.',
        ['$7$', '$e$', '$e^7$', 'keine Vereinfachung möglich'],
        0,
        `**Ansatz:** $\\ln(e^x) = x$.

**Rechnung:** $\\ln(e^7) = 7$.

**Probe:** $e^7 \\approx 1097$; $\\ln(1097) \\approx 7$. ✓

**Typischer Fehler:** Funktionen heben nicht aufeinander auf.`,
        [
          'Umkehr-Identität anwenden.',
          '$\\ln(e^x) = x$.',
          'Einfach $7$.',
        ],
        {
          1: '$e$ wäre $\\ln(e^1)$.',
          2: '$e^7$ ist das Argument — $\\ln$ "nimmt den Exponenten heraus".',
          3: 'Doch — Umkehrung macht es sehr einfach.',
        },
        { stage: 'apply-guided', subGoal: 6, uses: ['log-umkehr'] },
      ),
      ni(
        'Löse $e^x = 5$ nach $x$. Gib das Ergebnis auf 3 Dezimalen an.',
        1.609, 0.01, '',
        `**Ansatz:** Logarithmieren beider Seiten: $\\ln(e^x) = \\ln(5)$, also $x = \\ln(5)$.

**Rechnung:** $x = \\ln(5) \\approx 1{,}609$.

**Probe:** $e^{1{,}609} \\approx 5$. ✓

**Typischer Fehler:** $x = 5/e$ rechnen.`,
        [
          'Beide Seiten logarithmieren.',
          '$\\ln(e^x) = x$.',
          '$x = \\ln(5)$.',
        ],
        { stage: 'apply-independent', subGoal: 6, uses: ['log-umkehr'] },
      ),
      mc(
        'Ein Schüler löst $e^{\\ln(x)} = 7$ als $x = e^7$. Wo liegt der Fehler?',
        [
          'Die Umkehr-Identität vereinfacht die linke Seite sofort: $e^{\\ln x} = x$. Also $x = 7$, nicht $e^7$.',
          'Er hätte beide Seiten quadrieren müssen.',
          'Er hat recht.',
          'Die Gleichung ist unlösbar.',
        ],
        0,
        `**Ansatz:** $e$ und $\\ln$ heben sich gegenseitig auf.

**Rechnung:** $e^{\\ln x} = x$. Also $x = 7$ direkt.

**Probe:** $e^{\\ln 7} = 7$. ✓ Schülerlösung $x = e^7 \\approx 1097$, dann $\\ln(1097) \\approx 7$, $e^7 \\neq 7$.

**Typischer Fehler:** Umkehr-Identität übersehen und mühsam rechnen.`,
        [
          '$e^{\\ln(x)} = ?$',
          'Funktionen heben sich auf.',
          'Zahlentest.',
        ],
        {
          1: 'Quadrieren ist keine Umkehrung hier.',
          2: 'Die Umkehr-Identität macht die Rechnung trivial.',
          3: 'Gleichung ist perfekt lösbar.',
        },
        { stage: 'error-analysis', subGoal: 6, uses: ['log-umkehr'] },
      ),
      // Zusatz-Aufgabe SG 6: apply-independent · number-input · uses=[log-umkehr]
      // Exponentialgleichung mit nicht-trivialem Argument — testet Umkehr-Identität in Anwendung.
      ni(
        'Löse $e^{x+2} = 10$ nach $x$ und gib das Ergebnis auf 3 Dezimalen an.',
        0.303, 0.01, '',
        `**Ansatz:** Beide Seiten logarithmieren — auf der linken Seite hebt $\\ln$ das $e$ auf: $\\ln(e^{x+2}) = x + 2$.

**Rechnung:** $\\ln(e^{x+2}) = \\ln(10) \\Rightarrow x + 2 = \\ln(10) \\approx 2{,}303 \\Rightarrow x \\approx 0{,}303$.

**Probe:** $e^{0{,}303 + 2} = e^{2{,}303} \\approx 10$. ✓

**Typischer Fehler:** $\\ln$ nur auf das $e^{x}$ anwenden, $+2$ stehen lassen: $x = \\ln(10) - 2$? Stimmt zufällig — aber die korrekte Anwendung der Umkehr-Identität ist $\\ln(e^{x+2}) = x+2$ und dann erst umstellen. Andere Falle: $\\ln(10) = 1$ annehmen (das wäre $\\log_{10}(10) = 1$, aber $\\ln(10) \\approx 2{,}303$).`,
        [
          'Umkehr-Identität: $\\ln(e^{a}) = a$ — gilt für jeden Exponenten $a$.',
          'Beide Seiten $\\ln$: $x + 2 = \\ln(10)$.',
          '$\\ln(10) \\approx 2{,}303$ — zentrale Zahl, lohnt sich zu merken.',
        ],
        { stage: 'apply-independent', subGoal: 6, uses: ['log-umkehr'] },
      ),
      ni(
        'Löse $e^{2x} = 64$ nach $x$. Nutze $\\ln(64) = 6\\ln(2)$. Gib die Antwort als Bruch (auf 3 Dezimalen umgerechnet).',
        2.079, 0.01, '',
        `**Ansatz:** Logarithmieren: $2x = \\ln(64)$.

**Rechnung:** $2x = 6\\ln(2) \\approx 4{,}159$. $x \\approx 2{,}079$.

**Probe:** $e^{2 \\cdot 2{,}079} = e^{4{,}159} \\approx 64$. ✓

**Typischer Fehler:** Potenzregel vergessen: $\\ln(64)$ ohne Zerlegung.`,
        [
          'Beide Seiten logarithmieren.',
          '$2x = \\ln(64) = 6\\ln 2$.',
          '$x = 3\\ln 2 \\approx 2{,}079$.',
        ],
        { stage: 'transfer', subGoal: 6, uses: ['log-umkehr', 'log-potenz'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-2-1 — Lineare Gleichungen (4 SGs, 21 Matrix-Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-2-1': {
    // [0] Äquivalenzumformungen
    0: [
      tf(
        'Wenn man zu beiden Seiten einer Gleichung dieselbe Zahl addiert, bleibt die Gleichung gleichwertig.',
        true,
        `**Ansatz:** Äquivalenzumformung erhält die Lösungsmenge — Addition/Subtraktion derselben Zahl auf beiden Seiten ist erlaubt.

**Rechnung:** $a = b \\iff a + c = b + c$.

**Probe:** $x + 3 = 7 \\iff x = 4$. Dieselbe Lösung vor und nach Subtraktion von $3$.

**Typischer Fehler:** Operation nur auf einer Seite anwenden.`,
        [
          'Was heißt "äquivalent umformen"?',
          'Gleiche Operation auf beiden Seiten.',
          'Lösungsmenge bleibt unverändert.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['iso-variable'] },
      ),
      mc(
        'Welche Operation führt $3x + 5 = 14$ in eine Form, bei der $3x$ alleine steht?',
        ['Beide Seiten $-5$', 'Beide Seiten $\\cdot 5$', 'Nur links $-5$', 'Beide Seiten $/3$'],
        0,
        `**Ansatz:** Konstante $+5$ auf der linken Seite durch $-5$ auf beiden Seiten wegzaubern.

**Rechnung:** $3x + 5 - 5 = 14 - 5 \\iff 3x = 9$.

**Probe:** Danach $x = 3$. Einsetzen: $3 \\cdot 3 + 5 = 14$. ✓

**Typischer Fehler:** Nur eine Seite ändern oder vorzeitig durch $3$ teilen.`,
        [
          'Was soll übrig bleiben?',
          'Welche Operation macht $+5$ rückgängig?',
          '$-5$ auf BEIDEN Seiten.',
        ],
        {
          1: '$\\cdot 5$ würde die Gleichung unnötig verändern.',
          2: 'Nur links wäre falsch — die Gleichung würde ungleich.',
          3: '$/3$ teilt auch die $5$ mit — zu früh.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['iso-variable'] },
      ),
      ni(
        'Löse $x + 7 = 12$ und gib $x$ an.',
        5, 0, '',
        `**Ansatz:** Auf beiden Seiten $-7$.

**Rechnung:** $x + 7 - 7 = 12 - 7 \\Rightarrow x = 5$.

**Probe:** $5 + 7 = 12$. ✓

**Typischer Fehler:** $+7$ als Faktor missverstehen.`,
        [
          '$+7$ auf die andere Seite.',
          'Durch $-7$ auf beiden Seiten.',
          'Probe einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['iso-variable'] },
      ),
      mc(
        'Ein Schüler formt $2x = 10$ um zu $x = 10 - 2 = 8$. Wo liegt der Fehler?',
        [
          'Der Koeffizient $2$ ist multiplikativ — er wird durch DIVISION auf beiden Seiten entfernt: $x = 5$.',
          'Er hätte $+2$ auf beiden Seiten rechnen sollen.',
          'Der Ausdruck ist korrekt.',
          'Die Gleichung ist unlösbar.',
        ],
        0,
        `**Ansatz:** Unterschied zwischen additivem und multiplikativem Koeffizient.

**Rechnung:** $2x = 10 \\iff x = 10/2 = 5$. Nicht $10 - 2 = 8$.

**Probe:** $2 \\cdot 5 = 10$. ✓ $2 \\cdot 8 = 16 \\neq 10$.

**Typischer Fehler:** Multiplikation mit Addition verwechseln bei Umstellung.`,
        [
          'Ist $2x$ eine Multiplikation oder Addition?',
          'Umkehroperation von $\\cdot$?',
          'Zahlentest: $2 \\cdot 8 = 16 \\neq 10$.',
        ],
        {
          1: '$+2$ würde $2x + 2 = 12$ geben, nicht die Lösung.',
          2: 'Zahlentest widerlegt.',
          3: 'Lineare Gleichung $2x = 10$ ist eindeutig lösbar.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['iso-variable'] },
      ),
      sorting(
        'Bringe die Umformungsschritte für $3x + 4 = 19$ in die richtige Reihenfolge.',
        [
          'Beide Seiten $-4$: $3x = 15$',
          'Beide Seiten $:3$: $x = 5$',
          'Probe einsetzen: $3 \\cdot 5 + 4 = 19$',
        ],
        [0, 1, 2],
        `**Ansatz:** Erst Additives entfernen, dann Multiplikatives. Probe am Ende.

**Rechnung:** $x = 5$.

**Probe:** $19 = 19$. ✓

**Typischer Fehler:** Reihenfolge vertauschen und zuerst durch $3$ teilen — führt zu Brüchen.`,
        [
          'Was ist am schnellsten wegzukriegen?',
          'Erst Konstante, dann Koeffizient.',
          'Probe gegen die Original-Gleichung.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['iso-variable'] },
      ),
      tf(
        'Multipliziert man beide Seiten einer Gleichung mit derselben Zahl ungleich Null, bleibt die Lösungsmenge erhalten.',
        true,
        `**Ansatz:** Auch Multiplikation/Division mit $c \\neq 0$ ist eine Äquivalenzumformung — solange $c$ nicht Null ist.

**Rechnung:** $a = b \\iff a \\cdot c = b \\cdot c$ für $c \\neq 0$.

**Probe:** $x = 3 \\iff 2x = 6 \\iff -5x = -15$. Lösungsmenge unverändert.

**Typischer Fehler:** Multiplikation mit $0$ — daraus folgt $0 = 0$ unabhängig von $x$, alle Information geht verloren.`,
        [
          'Welche Operationen sind erlaubt: $+$, $-$, $\\cdot$, $:$ ?',
          'Wichtige Bedingung: Faktor darf nicht $0$ sein.',
          'Warum ist $0$ verboten? $x = 3$ wird zu $0 = 0$ — wahr für jedes $x$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['iso-variable'] },
      ),
      ni(
        'Löse $-x + 8 = 3$ und gib $x$ an.',
        5, 0, '',
        `**Ansatz:** Die $8$ auf die rechte Seite bringen, dann mit $-1$ multiplizieren — oder direkt nach $x$ umstellen.

**Rechnung:**
$$-x + 8 = 3 \\quad | -8 \\\\ -x = -5 \\quad | \\cdot (-1) \\\\ x = 5$$

**Probe:** $-5 + 8 = 3$. ✓

**Typischer Fehler:** Vergessen, das Vorzeichen umzukehren — und $x = -5$ als Antwort schreiben. $-x$ ist nicht $x$, deshalb muss am Ende mit $-1$ multipliziert (oder beide Seiten negiert) werden.`,
        [
          '$-x$ heißt: Koeffizient von $x$ ist $-1$.',
          'Bringe die Konstante zuerst auf die andere Seite.',
          'Letzter Schritt: beide Seiten mit $-1$ multiplizieren.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['iso-variable'] },
      ),
      matching(
        'Ordne jeder störenden Stelle in einer Gleichung die passende Äquivalenzumformung zu, die sie auf beiden Seiten beseitigt.',
        [
          { left: 'Konstante $+12$ auf der linken Seite entfernen', right: 'beide Seiten $-12$' },
          { left: 'Faktor $\\cdot 5$ vor $x$ entfernen',             right: 'beide Seiten $:5$' },
          { left: 'Nenner-Bruch $\\dfrac{x}{3}$ auflösen',           right: 'beide Seiten $\\cdot 3$' },
          { left: 'Term $-7x$ auf die rechte Seite bringen',          right: 'beide Seiten $+7x$' },
        ],
        `**Ansatz:** Jede störende Operation wird durch ihre **Umkehroperation** auf BEIDEN Seiten der Gleichung neutralisiert.

**Rechnung:** Addition wird durch Subtraktion (und umgekehrt) aufgehoben; Multiplikation durch Division (und umgekehrt). Beispiel: bei $5x = 30$ ist $\\cdot 5$ die störende Operation, also $:5$ auf beiden Seiten $\\Rightarrow x = 6$.

**Probe:** Nach jeder Umformung enthält die Gleichung exakt einen Schritt weniger zwischen $x$ und seiner Lösung — das ist das Ziel.

**Typischer Fehler:** Operation nur auf einer Seite anwenden — die Waage kippt, die Lösungsmenge ändert sich.`,
        [
          'Welche Rechenart hebt $+$, $\\cdot$, $\\dfrac{\\,}{\\,}$ jeweils auf?',
          'Umkehroperation IMMER auf beiden Seiten anwenden.',
          'Bei einem Term mit $x$ auf der „falschen" Seite: Subtrahieren bzw. Addieren bringt ihn rüber.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['iso-variable'] },
      ),
      ni(
        'Löse $7 - 2x = -3$ und gib $x$ an.',
        5, 0, '',
        `**Ansatz:** Erst die Konstante $+7$ auf die rechte Seite, dann durch den Koeffizienten $-2$ teilen.

**Rechnung:**
$$7 - 2x = -3 \\quad | -7 \\\\ -2x = -10 \\quad | :(-2) \\\\ x = 5$$

**Probe:** $7 - 2 \\cdot 5 = 7 - 10 = -3$. ✓

**Typischer Fehler:** Beim Teilen durch $-2$ das Vorzeichen vergessen: $-10 / 2 = -5$ statt $-10 / (-2) = +5$.`,
        [
          'Welche Konstante steht im Weg? — Erst entfernen.',
          'Nach $-7$ erhältst du $-2x = -10$.',
          'Teile beide Seiten durch $-2$ — Vorzeichen achten!',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['iso-variable'] },
      ),
      mc(
        'Ein Schüler löst $\\dfrac{x}{4} = 8$ und schreibt $x = 8 - 4 = 4$. Wo liegt der Fehler?',
        [
          'Der Bruch $\\dfrac{x}{4}$ bedeutet $x$ geteilt durch $4$. Umkehroperation ist die Multiplikation: $x = 8 \\cdot 4 = 32$, nicht $8 - 4$.',
          'Er hätte $x = 8 + 4 = 12$ rechnen müssen.',
          'Er hätte $x = 8 / 4 = 2$ rechnen müssen.',
          'Die Gleichung ist nicht eindeutig lösbar.',
        ],
        0,
        `**Ansatz:** $\\dfrac{x}{4}$ ist eine **Division** durch $4$. Die Umkehrung ist nicht Subtraktion, sondern Multiplikation mit $4$.

**Rechnung:** $\\dfrac{x}{4} = 8 \\quad | \\cdot 4 \\Rightarrow x = 32$.

**Probe:** $\\dfrac{32}{4} = 8$. ✓ Schüler-Wert $x = 4$: $\\dfrac{4}{4} = 1 \\neq 8$.

**Typischer Fehler:** Den Nenner als Subtrahenden lesen — sieht „neben dem $x$" aus, ist aber multiplikativ verknüpft.`,
        [
          'Was bedeutet $\\dfrac{x}{4}$? — Division.',
          'Welche Operation hebt Division auf?',
          'Multipliziere beide Seiten mit $4$.',
        ],
        {
          1: '$x = 12$ entsteht durch falsche Addition $8 + 4$ — auch das ist nicht die Umkehrung von Division.',
          2: '$x = 2$ entsteht, wenn man $8 / 4$ rechnet — also den Nenner $4$ noch einmal durch dividiert. Die Umkehrung von $:4$ ist aber $\\cdot 4$, nicht ein zweites $:4$.',
          3: 'Die Gleichung ist eindeutig lösbar: $x = 32$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['iso-variable'] },
      ),
    ],
    // [1] Standardvorgehen
    1: [
      tf(
        'Bei der linearen Gleichung $ax = b$ (mit $a \\neq 0$) ist $x = b/a$.',
        true,
        `**Ansatz:** Durch $a$ auf beiden Seiten teilen.

**Rechnung:** $ax/a = b/a \\iff x = b/a$.

**Probe:** $a \\cdot (b/a) = b$. ✓

**Typischer Fehler:** $a = 0$ übersehen — dann ist die Gleichung entweder trivial oder unlösbar.`,
        [
          'Wie isoliert man $x$?',
          'Durch $a$ auf beiden Seiten teilen.',
          'Achtung: $a \\neq 0$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['koeff-dividieren'] },
      ),
      mc(
        'Welches ist der erste Schritt bei $5(x-2) = 20$?',
        ['Ausmultiplizieren oder durch $5$ teilen', 'Direkt $x = 20$ setzen', 'Beide Seiten quadrieren', 'Nichts — schon gelöst'],
        0,
        `**Ansatz:** Distributiv ausmultiplizieren ODER beide Seiten $/5$.

**Rechnung:** $x - 2 = 4 \\Rightarrow x = 6$. Alternativ: $5x - 10 = 20 \\Rightarrow 5x = 30 \\Rightarrow x = 6$.

**Probe:** $5(6-2) = 20$. ✓

**Typischer Fehler:** Klammer ignorieren und direkt zerlegen falsch.`,
        [
          'Klammer enthält $x$.',
          'Zwei Wege: ausmultiplizieren oder durch Koeffizient teilen.',
          'Beide führen zur Lösung.',
        ],
        {
          1: '$x = 20$ ist nicht die Lösung — Klammer und $5$ übersehen.',
          2: 'Quadrieren ist unnötig.',
          3: 'Die Gleichung muss noch aufgelöst werden.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      ni(
        'Löse $4x - 3 = 9$ und gib $x$ an.',
        3, 0, '',
        `**Ansatz:** Erst Konstante, dann Koeffizient.

**Rechnung:** $4x - 3 + 3 = 9 + 3 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.

**Probe:** $4 \\cdot 3 - 3 = 9$. ✓

**Typischer Fehler:** Reihenfolge vertauscht.`,
        [
          'Konstante $-3$ entfernen.',
          'Dann Koeffizient $4$ entfernen.',
          'Probe machen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      ni(
        'Löse $2x + 9 = 3x - 4$ und gib $x$ an.',
        13, 0, '',
        `**Ansatz:** Alle $x$-Terme auf eine Seite, Konstanten auf die andere.

**Rechnung:** $2x - 3x = -4 - 9 \\Rightarrow -x = -13 \\Rightarrow x = 13$.

**Probe:** $2 \\cdot 13 + 9 = 35$; $3 \\cdot 13 - 4 = 35$. ✓

**Typischer Fehler:** Vorzeichen beim Umstellen verlieren.`,
        [
          '$x$-Terme links sammeln.',
          'Konstanten rechts.',
          'Vorzeichen beachten.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      mc(
        'Ein Schüler rechnet $-2x = 8 \\Rightarrow x = 8/(-2) = -4$, aber schreibt als Endlösung $x = 4$. Wo liegt der Fehler?',
        [
          'Die Zwischenrechnung ist richtig — Endlösung muss $x = -4$ sein, nicht $+4$.',
          'Er hätte $x = -8/2 = -4$ rechnen müssen.',
          'Alles korrekt.',
          'Die Division durch $-2$ ist unzulässig.',
        ],
        0,
        `**Ansatz:** Beim Teilen durch negative Zahl bleibt das Vorzeichen erhalten — wenn die rechte Seite negativ wird, muss das Ergebnis negativ sein.

**Rechnung:** $-2x = 8 \\Rightarrow x = -4$.

**Probe:** $-2 \\cdot (-4) = 8$. ✓ Schülerwert $+4$: $-2 \\cdot 4 = -8 \\neq 8$.

**Typischer Fehler:** Beim Abschreiben Vorzeichen verlieren.`,
        [
          'Ist die Zwischenrechnung korrekt?',
          'Vorzeichen der Endlösung?',
          'Probe gegen Original.',
        ],
        {
          1: 'Das wäre $-8/2$, aber die Aufgabe ist $-2x = 8$, also $8/(-2) = -4$.',
          2: 'Der Endwert ist falsch.',
          3: 'Division durch $-2$ ist erlaubt, erhält Äquivalenz.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['koeff-dividieren'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $5x - 2(x + 3) = 12$ in die richtige Reihenfolge.',
        [
          'Klammer ausmultiplizieren: $5x - 2x - 6 = 12$',
          'Zusammenfassen: $3x - 6 = 12$',
          'Konstante verschieben: $3x = 18$',
          'Koeffizient teilen: $x = 6$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Zuerst Klammer, dann sortieren, dann isolieren.

**Rechnung:** $x = 6$.

**Probe:** $5 \\cdot 6 - 2(6+3) = 30 - 18 = 12$. ✓

**Typischer Fehler:** Klammer zu spät auflösen.`,
        [
          'Klammer zuerst.',
          'Gleichartige Terme sammeln.',
          'Dann standard umformen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      mc(
        'Ein Schüler löst $-3(2x - 4) = 6$ und schreibt im ersten Schritt $-6x - 12 = 6$. Wo liegt der Fehler?',
        [
          'Beim Verteilen von $-3$ auf $-4$ wurde das Vorzeichen falsch behandelt: $-3 \\cdot (-4) = +12$, nicht $-12$. Richtig: $-6x + 12 = 6$.',
          'Er hätte $-3$ direkt auf beiden Seiten teilen müssen.',
          'Die Klammer darf nicht aufgelöst werden.',
          'Das Ergebnis $-6x - 12$ ist korrekt.',
        ],
        0,
        `**Ansatz:** Distributivgesetz mit Vorzeichen — $-3 \\cdot (2x - 4) = -3 \\cdot 2x + (-3) \\cdot (-4) = -6x + 12$. Minus mal Minus ist Plus.

**Rechnung:** Korrekte Umformung:
$$-3(2x - 4) = 6 \\\\ -6x + 12 = 6 \\quad | -12 \\\\ -6x = -6 \\quad | :(-6) \\\\ x = 1$$

**Probe:** $-3(2 \\cdot 1 - 4) = -3 \\cdot (-2) = 6$. ✓

**Typischer Fehler:** Vorzeichen beim Ausmultiplizieren nur auf den ersten Summanden anwenden — der zweite ($-4$) bekommt dann fälschlich auch ein Minus.`,
        [
          'Erste Frage: $-3 \\cdot (-4) = ?$',
          'Distributiv: jeder Summand in der Klammer wird mit dem Faktor multipliziert.',
          'Vorzeichenregel: Minus mal Minus = Plus.',
        ],
        {
          1: 'Durch $-3$ teilen wäre auch ein gültiger Weg, aber das ist nicht der gemachte Fehler — der liegt im Vorzeichen.',
          2: 'Klammern müssen aufgelöst werden, sonst kann man nicht weiterrechnen.',
          3: 'Zahlentest widerlegt: $-3(2 \\cdot 1 - 4) = 6$, aber $-6 \\cdot 1 - 12 = -18 \\neq 6$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      tf(
        'Bei einer linearen Gleichung $ax = b$ mit $a > 0$ und $b < 0$ ist die Lösung $x$ negativ.',
        true,
        `**Ansatz:** Lösungsformel $x = b/a$ — Vorzeichen folgt aus der Division „positiv geteilt durch positiv".

**Rechnung:** $a > 0, b < 0 \\Rightarrow x = b/a$ hat das Vorzeichen von $b$ (negativ). Beispiel: $4x = -12 \\Rightarrow x = -3$.

**Probe:** $4 \\cdot (-3) = -12$. ✓ Vorzeichen passt.

**Typischer Fehler:** Beim mentalen Rechnen das Minus „verschwinden" lassen und $x = 3$ angeben.`,
        [
          '$ax = b$ liefert $x = b/a$.',
          'Vorzeichenregel: $-/+$ ergibt $-$.',
          'Beispiel zur Kontrolle: $5x = -10 \\Rightarrow x = -2$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['koeff-dividieren'] },
      ),
      mc(
        'Was ist der erste sinnvolle Schritt zum Lösen von $-5x + 14 = -1$?',
        [
          'Beide Seiten $-14$, dann $:(-5)$',
          'Beide Seiten $:(-5)$, dann $-14$',
          'Beide Seiten mit $-1$ multiplizieren',
          'Klammer auflösen',
        ],
        0,
        `**Ansatz:** Standardvorgehen — erst Konstante (additiver Anteil), dann Koeffizient (multiplikativer Anteil) entfernen.

**Rechnung:**
$$-5x + 14 = -1 \\quad | -14 \\\\ -5x = -15 \\quad | :(-5) \\\\ x = 3$$

**Probe:** $-5 \\cdot 3 + 14 = -15 + 14 = -1$. ✓

**Typischer Fehler:** Zuerst durch $-5$ teilen — dann muss man Brüche mit $14$ und $-1$ handhaben, viel umständlicher.`,
        [
          'Welche Konstante steht direkt neben dem $x$-Term?',
          'Erst additive Konstante, dann multiplikativer Koeffizient.',
          'Vorzeichen beim Teilen durch $-5$ beachten.',
        ],
        {
          1: 'Wenn du zuerst durch $-5$ teilst, bekommst du $x - 14/5 = 1/5$ — Brüche, die nichts beitragen. Konstante zuerst entfernen ist sauberer.',
          2: 'Mit $-1$ multiplizieren wäre erlaubt ($5x - 14 = 1$), aber kein „erster Schritt" — Standard ist: Konstante zuerst entfernen.',
          3: 'Es gibt keine Klammer in der Gleichung — nur Term mit $x$, Konstante und rechte Seite.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      ni(
        'Löse $\\dfrac{2x + 1}{5} = 3$ und gib $x$ an.',
        7, 0, '',
        `**Ansatz:** Beide Seiten mit dem Nenner $5$ multiplizieren, dann linear nach $x$ auflösen.

**Rechnung:**
$$\\dfrac{2x + 1}{5} = 3 \\quad | \\cdot 5 \\\\ 2x + 1 = 15 \\quad | -1 \\\\ 2x = 14 \\quad | :2 \\\\ x = 7$$

**Probe:** $\\dfrac{2 \\cdot 7 + 1}{5} = \\dfrac{15}{5} = 3$. ✓

**Typischer Fehler:** Nur $2x$ mit $5$ multiplizieren und die $+1$ stehen lassen — der gesamte Zähler $(2x+1)$ wird vom Nenner $5$ geteilt, also wird die ganze rechte Seite $\\cdot 5$ genommen.`,
        [
          'Wie machst du den Nenner $5$ weg?',
          'Multipliziere BEIDE Seiten mit $5$ — die rechte Seite wird zu $15$.',
          'Dann linear: $2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      ni(
        'Löse $3(x - 4) = 2(x + 1)$ und gib $x$ an.',
        14, 0, '',
        `**Ansatz:** Beide Klammern ausmultiplizieren, dann $x$-Terme links, Konstanten rechts sammeln.

**Rechnung:**
$$3(x - 4) = 2(x + 1) \\\\ 3x - 12 = 2x + 2 \\quad | -2x \\\\ x - 12 = 2 \\quad | +12 \\\\ x = 14$$

**Probe:** Linke Seite $3(14 - 4) = 3 \\cdot 10 = 30$. Rechte Seite $2(14 + 1) = 2 \\cdot 15 = 30$. ✓

**Typischer Fehler:** Klammer nur auf den ersten Summanden anwenden — z. B. $3(x-4) = 3x - 4$ statt $3x - 12$. Distributivgesetz: jeder Summand mit dem Faktor multiplizieren.`,
        [
          'Klammern zuerst ausmultiplizieren — Distributivgesetz.',
          'Linke Seite: $3 \\cdot x - 3 \\cdot 4$. Rechte Seite analog.',
          'Dann $x$-Terme auf eine Seite, Konstanten auf die andere.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
      ni(
        'Löse $\\dfrac{x - 1}{2} + \\dfrac{x + 3}{4} = 4$ und gib $x$ an.',
        5, 0, '',
        `**Ansatz:** Beide Seiten mit dem Hauptnenner $4$ multiplizieren, dann linear lösen.

**Rechnung:** Hauptnenner von $2$ und $4$ ist $4$:
$$\\dfrac{x-1}{2} + \\dfrac{x+3}{4} = 4 \\quad | \\cdot 4 \\\\ 2(x-1) + (x+3) = 16 \\\\ 2x - 2 + x + 3 = 16 \\\\ 3x + 1 = 16 \\quad | -1 \\\\ 3x = 15 \\quad | :3 \\\\ x = 5$$

**Probe:** $\\dfrac{5-1}{2} + \\dfrac{5+3}{4} = \\dfrac{4}{2} + \\dfrac{8}{4} = 2 + 2 = 4$. ✓

**Typischer Fehler:** Die rechte Seite $4$ nicht mit dem Hauptnenner multiplizieren — dann landest du bei $3x + 1 = 4$ und bekommst $x = 1$ als falsches Ergebnis.`,
        [
          'Hauptnenner von $2$ und $4$ ist $4$.',
          'Multipliziere ALLE Terme mit $4$ — auch die $4$ rechts.',
          'Klammern auflösen, gleichartige Terme zusammenfassen, Standardumformung.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['iso-variable', 'koeff-dividieren'] },
      ),
    ],
    // [2] Textaufgaben
    2: [
      matching(
        'Ordne jedem Textbaustein die passende Gleichungs-Übersetzung zu (mit Variable $x$ für die gesuchte Zahl).',
        [
          { left: 'Die Zahl plus 5 ergibt 12',           right: '$x + 5 = 12$' },
          { left: 'Das Dreifache der Zahl ist 21',       right: '$3x = 21$' },
          { left: 'Die Hälfte der Zahl plus 4 ist 10',   right: '$x/2 + 4 = 10$' },
          { left: 'Sieben mehr als die Zahl ergibt 15',  right: '$x + 7 = 15$' },
        ],
        `**Ansatz:** Jeden Textbaustein mathematisch übersetzen.

**Rechnung:** Sprache → Operation → Gleichung.

**Probe:** Jede Zeile ergibt eine auflösbare Gleichung.

**Typischer Fehler:** Reihenfolge in der Sprache falsch deuten ("7 mehr als" ≠ "7 weniger als").`,
        [
          'Welche Operation entspricht welchem Wort?',
          '"plus" → $+$, "mal" → $\\cdot$, "Hälfte" → $/2$.',
          'Wortreihenfolge beachten.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      mc(
        'Ein Rechteck ist $3\\,\\text{cm}$ länger als breit. Sein Umfang beträgt $26\\,\\text{cm}$. Welche Gleichung beschreibt die Breite $b$?',
        ['$2b + 2(b + 3) = 26$', '$b + (b + 3) = 26$', '$b \\cdot (b + 3) = 26$', '$b = 26 - 3$'],
        0,
        `**Ansatz:** Umfang = $2\\cdot$Länge $+ 2\\cdot$Breite. Länge $= b + 3$.

**Rechnung:** $2b + 2(b+3) = 26$.

**Probe:** Löst auf zu $b = 5$ (Breite $5$, Länge $8$, Umfang $26$). ✓

**Typischer Fehler:** Umfang mit Fläche verwechseln.`,
        [
          'Umfang = 2·(Länge + Breite).',
          'Länge = Breite + 3.',
          'Gleichung aufstellen.',
        ],
        {
          1: 'Das wäre Länge + Breite, nicht Umfang.',
          2: 'Das wäre Fläche, nicht Umfang.',
          3: 'Das ist keine gültige Umformung.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Anna ist doppelt so alt wie Ben. In 6 Jahren sind sie zusammen 42. Wie alt ist Ben heute?',
        10, 0, '',
        `**Ansatz:** Variable $b$ = Bens Alter, Anna $= 2b$. In 6 Jahren: $(b+6) + (2b+6) = 42$.

**Rechnung:** $3b + 12 = 42 \\Rightarrow 3b = 30 \\Rightarrow b = 10$.

**Probe:** Anna 20, Ben 10. In 6 Jahren: 26 + 16 = 42. ✓

**Typischer Fehler:** Alters-Änderung nur bei einer Person berücksichtigen.`,
        [
          '$b$ = Ben heute.',
          'Anna heute = $2b$.',
          'In 6 Jahren beide $+6$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Ein Rechteck hat Umfang $30\\,\\text{cm}$ und die Länge ist $3\\,\\text{cm}$ größer als die Breite. Wie groß ist die Breite (in cm)?',
        6, 0, '',
        `**Ansatz:** Variable $b$ = Breite, Länge = $b + 3$. Umfang: $2(b + (b+3)) = 30$.

**Rechnung:** $4b + 6 = 30 \\Rightarrow 4b = 24 \\Rightarrow b = 6$.

**Probe:** Breite 6, Länge 9. Umfang $2 \\cdot 15 = 30$. ✓

**Typischer Fehler:** Umfang-Formel falsch.`,
        [
          'Umfang = 2·(Länge + Breite).',
          'Länge = Breite + 3.',
          'Gleichung lösen.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      mc(
        'Ein Schüler liest "Das Doppelte einer Zahl plus 5 ist 21" und schreibt $2(x+5) = 21$. Wo liegt der Fehler?',
        [
          'Der "plus 5"-Teil wird ERST NACH dem Verdoppeln addiert: $2x + 5 = 21$, nicht $2(x+5)$.',
          'Er hätte $2x + 5 = 42$ schreiben müssen.',
          'Die Übersetzung ist korrekt.',
          'Die Zahl $5$ fehlt.',
        ],
        0,
        `**Ansatz:** "Das Doppelte einer Zahl" ist $2x$. Dann erst die $+5$.

**Rechnung:** Korrekt: $2x + 5 = 21 \\Rightarrow x = 8$.
Schülerlösung würde $2x + 10 = 21$ geben ($x = 5{,}5$) — anderes Ergebnis.

**Probe:** Sprachliche Reihenfolge prüfen.

**Typischer Fehler:** Klammerung aus sprachlicher Abfolge falsch schließen.`,
        [
          'Was heißt "das Doppelte einer Zahl"?',
          'Wird die $+5$ verdoppelt?',
          'Lese-Reihenfolge entscheidet.',
        ],
        {
          1: '$42$ wäre das Doppelte von $21$ — Unsinn.',
          2: 'Klammerung ist falsch — sprachlich wird die $+5$ nachher addiert.',
          3: '$5$ ist da, aber innerhalb der Klammer statt nachher.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Eine Zahl ist um 7 größer als ihre Hälfte. Wie heißt die Zahl?',
        14, 0, '',
        `**Ansatz:** Gleichung aufstellen: $x = x/2 + 7$.

**Rechnung:** $x/2 = 7 \\Rightarrow x = 14$.

**Probe:** $14/2 + 7 = 14$. ✓

**Typischer Fehler:** "größer als" als Multiplikation lesen.`,
        [
          'Variable $x$ = gesuchte Zahl.',
          '"größer als die Hälfte" = Addition.',
          '$x - x/2 = 7$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Ein Vater ist heute $40$ Jahre alt, sein Sohn $10$. In wie vielen Jahren ist der Vater nur noch doppelt so alt wie der Sohn?',
        20, 0, '',
        `**Ansatz:** Variable $t$ = Anzahl Jahre, die vergehen. In $t$ Jahren: Vater $40 + t$, Sohn $10 + t$. Bedingung: Vater $= 2 \\cdot$ Sohn.

**Rechnung:**
$$40 + t = 2(10 + t) \\\\ 40 + t = 20 + 2t \\quad | -t, -20 \\\\ 20 = t$$

In $20$ Jahren ist der Vater $60$, der Sohn $30$ — Vater doppelt so alt.

**Probe:** $40 + 20 = 60$, $10 + 20 = 30$, $60 = 2 \\cdot 30$. ✓

**Typischer Fehler:** Nur das Alter des Sohnes oder nur das des Vaters wachsen lassen — beide altern gleichzeitig, also bekommen beide $+t$.`,
        [
          'Variable: $t$ = Jahre, die vergehen.',
          'Beide altern: $V(t) = 40 + t$, $S(t) = 10 + t$.',
          'Bedingung als Gleichung: Vater = $2 \\cdot$ Sohn.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      matching(
        'Ordne jeder sprachlichen Beschreibung den passenden algebraischen Ausdruck zu (Variable $x$).',
        [
          { left: 'Eine Zahl um $5$ erhöhen',                            right: '$x + 5$' },
          { left: 'Das Doppelte einer Zahl um $3$ vermindern',            right: '$2x - 3$' },
          { left: 'Die Hälfte einer Zahl, dann $7$ addieren',             right: '$\\dfrac{x}{2} + 7$' },
          { left: 'Eine Zahl zuerst um $4$ verringern, dann verdoppeln',  right: '$2(x - 4)$' },
        ],
        `**Ansatz:** Sprachliche Reihenfolge bestimmt die Klammerung — was zuerst gesagt wird, passiert zuerst.

**Rechnung:** „Doppelte minus 3" $= 2x - 3$ (Multiplikation zuerst). „Erst minus 4, dann verdoppeln" $= 2(x-4)$ (Klammer wegen Reihenfolge).

**Probe:** Setze $x = 10$ ein: $x + 5 = 15$; $2x - 3 = 17$; $x/2 + 7 = 12$; $2(x-4) = 12$ — alle vier verschiedene Werte, keine Übersetzung doppeldeutig.

**Typischer Fehler:** „Das Doppelte einer Zahl um 3 vermindern" als $2(x - 3)$ lesen — sprachlich kommt die $-3$ aber nach dem Verdoppeln, also $2x - 3$.`,
        [
          '„zuerst" vs. „dann" gibt die Reihenfolge an.',
          'Multiplikation ohne Klammer wirkt nur auf die nachfolgende Zahl/Variable, nicht auf die ganze Summe.',
          'Eine Klammer brauchst du nur, wenn die Operation auf einen Ausdruck angewendet wird, der vorher schon eine Operation enthält.',
        ],
        { stage: 'apply-guided', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Eine Saftfabrik mischt $5$ L Saftkonzentrat mit $60\\,\\%$ Fruchtanteil mit reinem Wasser, um Saft mit $30\\,\\%$ Fruchtanteil zu erhalten. Wie viele Liter Wasser müssen zugegeben werden?',
        5, 0, '',
        `**Ansatz:** Fruchtmenge bleibt erhalten (Wasser enthält $0\\,\\%$ Frucht). Variable $x$ = Liter Wasser.

**Rechnung:** Fruchtmenge im Konzentrat: $0{,}6 \\cdot 5 = 3$ L. Gesamtmenge nach Mischung: $5 + x$ L. Bedingung „danach $30\\,\\%$":
$$0{,}3 \\cdot (5 + x) = 3 \\\\ 1{,}5 + 0{,}3 x = 3 \\quad | -1{,}5 \\\\ 0{,}3 x = 1{,}5 \\quad | : 0{,}3 \\\\ x = 5$$

**Probe:** Mischung: $5 + 5 = 10$ L Saft mit $3$ L Frucht $\\Rightarrow 3/10 = 30\\,\\%$. ✓

**Typischer Fehler:** $30\\,\\%$ nur auf das hinzugefügte Wasser anwenden ($0{,}3 x = 3$) — die Konzentration bezieht sich aber auf die GESAMTE Mischung, nicht nur auf das neue Wasser.`,
        [
          'Was bleibt beim Verdünnen mit Wasser konstant? — Die Fruchtmenge.',
          'Fruchtmenge: $0{,}6 \\cdot 5 = 3$ L. Sie soll danach $30\\,\\%$ von $(5 + x)$ sein.',
          'Gleichung: $0{,}3 \\cdot (5 + x) = 3$. Auflösen.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Zwei Autos starten gleichzeitig an entgegengesetzten Enden einer $200$ km langen Strecke und fahren aufeinander zu. Auto A fährt mit $80$ km/h, Auto B mit $120$ km/h. Nach wie vielen Stunden treffen sie sich?',
        1, 0, '',
        `**Ansatz:** Beim Aufeinander-zu-Fahren addieren sich die Geschwindigkeiten zur Annäherungsgeschwindigkeit. Variable $t$ = Zeit bis zum Treffen.

**Rechnung:** Beide zusammen legen pro Stunde $80 + 120 = 200$ km zurück:
$$(80 + 120) \\cdot t = 200 \\\\ 200 \\, t = 200 \\quad | : 200 \\\\ t = 1 \\text{ h}$$

**Probe:** In $1$ h fährt A: $80$ km, B: $120$ km. Summe $200$ km — gerade die volle Strecke. ✓

**Typischer Fehler:** Geschwindigkeiten subtrahieren ($120 - 80 = 40$, $t = 5$ h) — das wäre die Aufholzeit, wenn beide in dieselbe Richtung fahren würden, nicht aufeinander zu.`,
        [
          'Welche Strecke legen beide ZUSAMMEN bis zum Treffen zurück? — Die ganze Strecke $200$ km.',
          'Welche Geschwindigkeit nimmst du, wenn sich zwei Bewegungen aufeinander zu addieren?',
          'Setze an: $(v_A + v_B) \\cdot t = s$. Auflösen nach $t$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      ni(
        'Ein Pullover kostet nach einem Rabatt von $25\\,\\%$ noch $60$ €. Wie hoch war der ursprüngliche Preis (in €)?',
        80, 0, '',
        `**Ansatz:** Variable $P$ = Originalpreis. Nach $25\\,\\%$ Rabatt bleiben $75\\,\\%$ vom Originalpreis übrig.

**Rechnung:**
$$0{,}75 \\cdot P = 60 \\quad | : 0{,}75 \\\\ P = \\dfrac{60}{0{,}75} = 80 \\text{ €}$$

**Probe:** $25\\,\\%$ von $80$ € sind $20$ €. $80 - 20 = 60$ €. ✓

**Typischer Fehler:** $25\\,\\%$ einfach auf $60$ aufschlagen ($60 \\cdot 1{,}25 = 75$ €). Das wäre richtig, wenn $60$ € der Preis VOR Rabatt wäre — er ist aber NACH dem Rabatt. Der Rabatt bezieht sich auf den (unbekannten) Originalpreis, nicht auf den reduzierten.`,
        [
          'Was bleibt nach $25\\,\\%$ Rabatt übrig? — $75\\,\\%$ des Originalpreises.',
          'Setze die Gleichung an: $0{,}75 \\cdot P = 60$.',
          'Nach $P$ auflösen — durch $0{,}75$ teilen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
      mc(
        'Ein Schwimmbecken wird durch zwei Zuflüsse gefüllt. Allein braucht der erste Zufluss $6$ Stunden, der zweite $4$ Stunden. Welche Gleichung beschreibt die Zeit $t$ (in Stunden) bis zur vollen Füllung, wenn beide gleichzeitig laufen?',
        [
          '$\\dfrac{t}{6} + \\dfrac{t}{4} = 1$',
          '$6t + 4t = 1$',
          '$\\dfrac{1}{6} + \\dfrac{1}{4} = t$',
          '$t = 6 + 4 = 10$',
        ],
        0,
        `**Ansatz:** "Volle Füllung" = $1$ (=100 %). Pro Stunde füllt Zufluss 1 den Anteil $1/6$, Zufluss 2 den Anteil $1/4$. Nach $t$ Stunden zusammen: $t \\cdot 1/6 + t \\cdot 1/4 = t/6 + t/4$. Das soll $1$ sein.

**Rechnung:** $\\dfrac{t}{6} + \\dfrac{t}{4} = 1 \\Rightarrow \\dfrac{2t + 3t}{12} = 1 \\Rightarrow 5t = 12 \\Rightarrow t = 2{,}4$ h.

**Probe:** $\\dfrac{2{,}4}{6} + \\dfrac{2{,}4}{4} = 0{,}4 + 0{,}6 = 1$. ✓

**Typischer Fehler:** Zeiten direkt addieren ($6 + 4 = 10$) — gemeinsam fließen die Zuflüsse aber **schneller** als jeder einzeln, nicht langsamer.`,
        [
          'Was bedeutet "voll" als Zahl? — Setze $1$.',
          'Pro Stunde füllt Zufluss 1 einen Anteil $1/6$ des Beckens.',
          'Nach $t$ Stunden zusammen: $t/6 + t/4 = 1$.',
        ],
        {
          1: 'Das wäre korrekt, wenn $6$ und $4$ Geschwindigkeiten (Becken pro Stunde) wären — sie sind aber Zeiten (Stunden pro Becken). Du musst die Kehrwerte $1/6$ und $1/4$ verwenden.',
          2: 'Die rechte Seite ist falsch — gesucht ist die Zeit $t$, nicht ein Anteil. Außerdem fehlt $t$ auf der linken Seite.',
          3: '$10$ h würde bedeuten, gemeinsam dauert es länger als jeder einzeln — physikalisch unsinnig. Gemeinsam muss es schneller gehen als die schnellere Einzelzeit ($4$ h).',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['text-uebersetzung'] },
      ),
    ],
    // [3] Probe
    3: [
      tf(
        'Die Probe einer Gleichungslösung erfolgt immer in der ORIGINAL-Gleichung, nicht in einer umgeformten.',
        true,
        `**Ansatz:** Umformungen können Fehler enthalten — nur Einsetzen in die Ursprungsgleichung bestätigt die Lösung wirklich.

**Rechnung:** Bei $\\sqrt{x+3} = x - 1$ quadrieren führt zu $x=3$ UND Scheinlösung $x=0$. Probe im Original entlarvt $x=0$.

**Probe:** Sinn der Probe = Unabhängig prüfen.

**Typischer Fehler:** Probe in derselben Umformung, die fehlerhaft war.`,
        [
          'Wozu dient die Probe?',
          'Unabhängige Prüfung.',
          'Original-Gleichung.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      mc(
        'Wie führt man die Probe bei $3x - 5 = 10$ mit der vermuteten Lösung $x = 5$ durch?',
        [
          '$3 \\cdot 5 - 5 = 10$ prüfen: $10 = 10$ ✓',
          '$3 + 5 - 5 = 10$ prüfen',
          '$3/5 - 5 = 10$ prüfen',
          '$3 \\cdot 5 - 5 = 5$ prüfen — die rechte Seite muss mit $x$ ersetzt werden.',
        ],
        0,
        `**Ansatz:** $x = 5$ in die LINKE Seite der Original-Gleichung einsetzen — die rechte Seite bleibt $10$.

**Rechnung:** Links: $3 \\cdot 5 - 5 = 15 - 5 = 10$. Rechts: $10$. Beide Seiten stimmen überein. ✓

**Probe:** Linke Seite = Rechte Seite — Lösung bestätigt.

**Typischer Fehler:** Multiplikation $3 \\cdot x$ als Addition $3 + x$ lesen, oder die rechte Seite ebenfalls durch $x$ ersetzen wollen.`,
        [
          '$x = 5$ in die linke Seite einsetzen.',
          'Wert ausrechnen — $3 \\cdot 5 - 5$.',
          'Mit der rechten Seite ($10$) vergleichen.',
        ],
        {
          1: 'Du hast $3x$ als Summe $3 + x$ gelesen — falsch. $3x$ heißt $3 \\cdot x$, also $3 \\cdot 5 = 15$.',
          2: 'Du hast $3x$ als Quotient $3 / x$ gelesen — falsch. $3x$ heißt Produkt: $3 \\cdot 5 = 15$.',
          3: 'Bei der Probe wird $x$ NUR auf der linken Seite ersetzt; die rechte Seite ist die zu prüfende Zahl. Setze $x = 5$ links ein und vergleiche mit $10$ rechts.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      tf(
        'Für die Gleichung $2x + 7 = 21$ ist $x = 7$ eine gültige Lösung.',
        true,
        `**Ansatz:** Einsetzen und prüfen.

**Rechnung:** $2 \\cdot 7 + 7 = 14 + 7 = 21$. ✓

**Probe:** Linke Seite $21$ = rechte Seite $21$.

**Typischer Fehler:** Nicht einsetzen und "schätzen".`,
        [
          'Einsetzen: $x = 7$ links.',
          '$2 \\cdot 7 + 7 = ?$',
          'Mit $21$ vergleichen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      mc(
        'Ein Schüler setzt zur Probe $x=4$ in die UMGEFORMTE Gleichung $2x = 8$ ein und sagt "Lösung bestätigt". Wo ist das problematisch?',
        [
          'Die Probe muss in der Original-Gleichung erfolgen — Umformungen können Scheinlösungen einführen.',
          'Er hat nur eine Seite geprüft.',
          'Die Probe ist korrekt.',
          'Beide Seiten müssen quadriert werden.',
        ],
        0,
        `**Ansatz:** Umformungen können Fehler enthalten. Nur Original-Einsetzen ist zuverlässig.

**Rechnung:** Wenn die Umformung von Original nach $2x=8$ bereits falsch war, bestätigt die Probe in $2x=8$ den Fehler nicht.

**Probe:** Unabhängigkeit ist essentiell.

**Typischer Fehler:** Probe zirkulär mit derselben Umformung.`,
        [
          'Wo soll die Probe erfolgen?',
          'Original — nicht Umformung.',
          'Warum?',
        ],
        {
          1: 'Beide Seiten werden bei der Probe geprüft.',
          2: 'Die Probe selbst ist rechnerisch OK, aber zirkular.',
          3: 'Quadrieren ist hier nicht Thema.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung und Probe von $4(x-2) = 12$ in die richtige Reihenfolge.',
        [
          'Ausmultiplizieren: $4x - 8 = 12$',
          'Konstante verschieben: $4x = 20$',
          'Durch Koeffizient: $x = 5$',
          'Probe in Original: $4(5-2) = 4 \\cdot 3 = 12$ ✓',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch umformen + Probe.

**Rechnung:** $x = 5$.

**Probe:** Jeder Zwischenschritt nachvollziehbar.

**Typischer Fehler:** Probe weglassen.`,
        [
          'Klammer zuerst.',
          'Schritte sauber nacheinander.',
          'Probe IMMER gegen Original.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['probe-einsetzen', 'iso-variable'] },
      ),
      matching(
        'Welche Lösung gehört zu welcher Gleichung? Setze ein und prüfe.',
        [
          { left: '$2x + 5 = 11$',          right: '$x = 3$' },
          { left: '$3x - 4 = 8$',           right: '$x = 4$' },
          { left: '$5(x - 1) = 20$',        right: '$x = 5$' },
          { left: '$-2x + 7 = -7$',         right: '$x = 7$' },
          { left: '$\\dfrac{x}{2} + 1 = 5$', right: '$x = 8$' },
        ],
        `**Ansatz:** Jede Lösung in die zugehörige Gleichung einsetzen — die linke Seite muss die rechte ergeben.

**Rechnung:**
- $2 \\cdot 3 + 5 = 11$ ✓
- $3 \\cdot 4 - 4 = 8$ ✓
- $5(5 - 1) = 20$ ✓
- $-2 \\cdot 7 + 7 = -7$ ✓
- $8/2 + 1 = 5$ ✓

**Probe:** Bei richtiger Zuordnung gilt für jede Zeile linke Seite = rechte Seite der ursprünglichen Gleichung.

**Typischer Fehler:** Beim ersten Hinsehen "raten" — immer einsetzen und ausrechnen, nicht im Kopf abschätzen.`,
        [
          'Setze die Lösung in die linke Seite der Gleichung ein.',
          'Rechne aus.',
          'Vergleiche mit der rechten Seite — passt es?',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      mc(
        'Du sollst $2(x + 3) = 14$ lösen. Ein Schüler bekommt $x = 5$ heraus, ein anderer $x = 4$. Wer hat recht — und wie zeigt das die Probe?',
        [
          '$x = 4$ ist richtig: Probe $2(4+3) = 14$ ✓. $x = 5$ scheitert: $2(5+3) = 16 \\neq 14$.',
          '$x = 5$ ist richtig: $2(5+3) = 14$ ✓.',
          'Beide sind richtig — die Gleichung hat zwei Lösungen.',
          'Keine der beiden ist richtig — die Lösung ist $x = 7$.',
        ],
        0,
        `**Ansatz:** Lineare Gleichungen haben genau eine Lösung. Probe entscheidet zwischen den beiden Schülerergebnissen.

**Rechnung:** $2(x+3) = 14 \\Rightarrow 2x + 6 = 14 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.

**Probe:** Für $x = 4$: $2(4 + 3) = 2 \\cdot 7 = 14$ ✓. Für $x = 5$: $2(5 + 3) = 2 \\cdot 8 = 16 \\neq 14$ ✗.

**Typischer Fehler:** $x = 5$ entsteht z. B. dann, wenn der Schüler $14 - 6 = 8$ richtig erkennt, aber im letzten Schritt durcheinander gerät und die $-3$ an falscher Stelle einsetzt. Die Probe entlarvt diesen Fehler sofort.`,
        [
          'Setze beide Werte in die Original-Gleichung ein.',
          'Rechne $2(x+3)$ für $x = 4$ und $x = 5$ aus.',
          'Welcher Wert ergibt $14$?',
        ],
        {
          1: 'Probe widerspricht: $2(5+3) = 16 \\neq 14$.',
          2: 'Lineare Gleichungen mit Koeffizient $\\neq 0$ haben genau eine Lösung — nicht zwei.',
          3: 'Probe für $x = 7$: $2(7+3) = 20 \\neq 14$. Auch falsch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      ni(
        'Prüfe durch Einsetzen, ob $x = 9$ die Gleichung $\\dfrac{3x - 1}{2} = x + 4$ löst. Gib $x$ an, wenn die Probe bestätigt.',
        9, 0, '',
        `**Ansatz:** $x = 9$ in beide Seiten der Original-Gleichung einsetzen und vergleichen.

**Rechnung:** Linke Seite: $\\dfrac{3 \\cdot 9 - 1}{2} = \\dfrac{26}{2} = 13$. Rechte Seite: $9 + 4 = 13$. Beide $13$ — Lösung bestätigt.

**Probe:** $13 = 13$. ✓ Antwort: $x = 9$.

**Typischer Fehler:** Beim Einsetzen den Bruchstrich übersehen und $3 \\cdot 9 - 1 / 2 = 27 - 0{,}5 = 26{,}5$ rechnen — der ganze Zähler $3x - 1$ wird durch $2$ geteilt.`,
        [
          '$x = 9$ überall einsetzen, wo $x$ steht.',
          'Bei Brüchen: erst Zähler ausrechnen, dann durch Nenner teilen.',
          'Wenn beide Seiten denselben Wert ergeben, ist $9$ die Lösung — sonst nicht.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['probe-einsetzen', 'iso-variable'] },
      ),
      mc(
        'Welche Probe-Rechnung bestätigt $x = 4$ als Lösung von $-3x + 4 = -8$?',
        [
          '$-3 \\cdot 4 + 4 = -12 + 4 = -8$ ✓',
          '$-3 \\cdot 4 - 4 = -12 - 4 = -16$',
          '$3 \\cdot 4 + 4 = 12 + 4 = 16$',
          '$-3 \\cdot (-4) + 4 = 12 + 4 = 16$',
        ],
        0,
        `**Ansatz:** Original-Gleichung links exakt nachzeichnen, $x$ durch den Wert $4$ ersetzen, ausrechnen.

**Rechnung:** $-3 \\cdot 4 + 4 = -12 + 4 = -8$. Rechte Seite ist $-8$ — passt. ✓

**Probe:** $-8 = -8$. Lösung bestätigt.

**Typischer Fehler:** Beim Einsetzen das Vorzeichen des Koeffizienten verlieren oder den Wert $x$ mit umgekehrtem Vorzeichen einsetzen.`,
        [
          'Original-Gleichung exakt abschreiben, $x$ durch $4$ ersetzen.',
          'Vorzeichen genau übernehmen: $-3$ bleibt $-3$.',
          'Punkt-vor-Strich: erst $-3 \\cdot 4$, dann $+4$ addieren.',
        ],
        {
          1: 'Du hast die Konstante $+4$ in $-4$ geändert — das wäre eine andere Gleichung. Original ist $-3x + 4$, nicht $-3x - 4$.',
          2: 'Du hast den Koeffizienten $-3$ ohne Vorzeichen abgeschrieben — dann passt die Rechnung nicht zur Original-Gleichung.',
          3: 'Du hast statt $x = 4$ den Wert $x = -4$ eingesetzt. Die Probe muss mit dem behaupteten $x$-Wert gemacht werden, also $+4$.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      tf(
        'Wenn beim Einsetzen einer vermuteten Lösung in die Original-Gleichung beide Seiten verschiedene Zahlen ergeben, kann die vermutete Zahl keine Lösung sein.',
        true,
        `**Ansatz:** Eine Lösung erfüllt definitionsgemäß die Gleichung — das heißt, beide Seiten ergeben beim Einsetzen denselben Wert.

**Rechnung:** Wenn z. B. links $7$ und rechts $5$ herauskommt, ist $7 \\neq 5$ unabhängig vom $x$-Wert — die Gleichung ist mit dieser Zahl nicht erfüllt, also ist sie keine Lösung.

**Probe:** Diese Aussage ist die Begründung dafür, warum die Probe so wertvoll ist — sie kann jede falsche Lösung sicher entlarven.

**Typischer Fehler:** Glauben, „nahe dran" reiche aus. Bei Gleichungen gilt: gleich oder ungleich, dazwischen gibt es nichts.`,
        [
          'Was ist eine Lösung per Definition?',
          'Wenn linke und rechte Seite verschieden sind, ist die Gleichung NICHT erfüllt.',
          'Logische Folgerung: Die Zahl ist keine Lösung.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['probe-einsetzen'] },
      ),
      mc(
        'Ein Schüler löst $5x + 3 = 2x - 9$ und behauptet $x = 4$. Wende die Probe an und entscheide.',
        [
          'Probe: links $5 \\cdot 4 + 3 = 23$, rechts $2 \\cdot 4 - 9 = -1$. $23 \\neq -1$ — also falsch. Korrekt: $3x = -12 \\Rightarrow x = -4$.',
          'Probe: stimmt mit $23 = 23$ — $x = 4$ ist korrekt.',
          'Die Gleichung hat keine Lösung — Schüler hat das übersehen.',
          'Korrekt ist $x = -1$ — der Schüler hat sich nur verrechnet.',
        ],
        0,
        `**Ansatz:** Probe entlarvt den Vorzeichenfehler beim Verschieben der $x$-Terme.

**Rechnung:** Linke Seite mit $x = 4$: $5 \\cdot 4 + 3 = 23$. Rechte Seite: $2 \\cdot 4 - 9 = -1$. $23 \\neq -1$ — also keine Lösung. Korrektur: $5x - 2x = -9 - 3 \\Rightarrow 3x = -12 \\Rightarrow x = -4$. Probe für $-4$: links $5 \\cdot (-4) + 3 = -17$, rechts $2 \\cdot (-4) - 9 = -17$. $-17 = -17$. ✓

**Probe:** Die korrekte Lösung erfüllt beide Seiten mit $-17$.

**Typischer Fehler:** Beim Sammeln der Konstanten Vorzeichen verlieren — aus $-9 - 3 = -12$ wird fälschlich $-9 + 3 = -6$ oder gar $+12$, was zu $x = +4$ statt $x = -4$ führt.`,
        [
          'Setze $x = 4$ links und rechts ein — was kommt heraus?',
          'Wenn die Werte nicht übereinstimmen, ist $x = 4$ falsch.',
          'Korrekt rechnen: $x$-Terme links sammeln, Konstanten rechts.',
        ],
        {
          1: 'Probe mit $x = 4$: links $23$, rechts $-1$. Diese Zahlen sind verschieden — die Lösung ist NICHT bestätigt.',
          2: 'Eine lineare Gleichung mit unterschiedlichen Koeffizienten ($5$ links, $2$ rechts) hat genau eine Lösung — nämlich $x = -4$.',
          3: '$x = -1$: links $5 \\cdot (-1) + 3 = -2$, rechts $2 \\cdot (-1) - 9 = -11$. $-2 \\neq -11$ — auch falsch. Die richtige Lösung ist $x = -4$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['probe-einsetzen', 'iso-variable'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-2-2 — Quadratische Gleichungen (4 SGs, 21 Matrix-Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-2-2': {
    // [0] Mitternachts-/pq-Formel
    0: [
      tf(
        'Die Mitternachtsformel $x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ löst jede quadratische Gleichung $ax^2+bx+c=0$ mit $a\\neq 0$.',
        true,
        `**Ansatz:** Die abc-Formel ist die allgemeine Lösungsformel für quadratische Gleichungen.

**Rechnung:** Hergeleitet aus quadratischer Ergänzung.

**Probe:** $ax^2 + bx + c = a(x - x_1)(x - x_2)$ mit $x_{1,2}$ aus der Formel.

**Typischer Fehler:** $a = 0$ Spezialfall — dann ist es linear.`,
        [
          'Form $ax^2+bx+c=0$.',
          'Allgemeine Formel mit Diskriminante.',
          '$a \\neq 0$ Bedingung.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['abc-formel'] },
      ),
      mc(
        'Welche Form hat die pq-Formel für $x^2 + px + q = 0$?',
        [
          '$x_{1,2} = -p/2 \\pm \\sqrt{(p/2)^2 - q}$',
          '$x_{1,2} = -p \\pm \\sqrt{p^2 - q}$',
          '$x_{1,2} = p/2 \\pm \\sqrt{q}$',
          '$x_{1,2} = q \\pm p$',
        ],
        0,
        `**Ansatz:** pq-Formel ist die abc-Formel mit $a = 1$.

**Rechnung:** $x^2 + px + q = 0 \\Rightarrow x_{1,2} = -p/2 \\pm \\sqrt{(p/2)^2 - q}$.

**Probe:** Herleitung durch quadratische Ergänzung: $(x + p/2)^2 = (p/2)^2 - q$.

**Typischer Fehler:** $p$ statt $-p/2$ im ersten Summanden.`,
        [
          'Formel für Normalform.',
          'Halber Koeffizient $-p/2$.',
          'Diskriminante $(p/2)^2 - q$.',
        ],
        {
          1: 'Du hast die Halbierung sowohl bei $-p/2$ als auch bei $(p/2)^2$ vergessen — Ergebnis $-p \\pm \\sqrt{p^2 - q}$. Die pq-Formel halbiert den Koeffizienten $p$ vor dem Quadrieren: $(p/2)^2$, nicht $p^2$.',
          2: 'Du hast den Term unter der Wurzel zu $\\sqrt{q}$ verkürzt — der lineare Anteil $(p/2)^2$ und das negative $q$ fehlen. Die Diskriminante einer Normalform ist $(p/2)^2 - q$, nicht $q$ allein.',
          3: 'Du hast pq-Formel mit einer linearen Lösungsstrategie verwechselt: $q \\pm p$ ergibt sich nirgends aus quadratischer Ergänzung. Korrekte Herleitung: $(x + p/2)^2 = (p/2)^2 - q$, daraus $x = -p/2 \\pm \\sqrt{(p/2)^2 - q}$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pq-formel'] },
      ),
      ni(
        'Löse $x^2 - 5x + 6 = 0$ und gib die GRÖSSERE der zwei Lösungen an.',
        3, 0, '',
        `**Ansatz:** pq-Formel mit $p = -5, q = 6$.

**Rechnung:** $x_{1,2} = 5/2 \\pm \\sqrt{25/4 - 6} = 5/2 \\pm 1/2$. Also $x_1 = 3, x_2 = 2$.

**Probe:** $(x-2)(x-3) = x^2 - 5x + 6$. ✓

**Typischer Fehler:** Vorzeichen von $p$ verlieren.`,
        [
          'pq-Formel: $p = -5, q = 6$.',
          '$(p/2)^2 - q = 25/4 - 6 = 1/4$.',
          '$\\sqrt{1/4} = 1/2$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['abc-formel'] },
      ),
      ni(
        'Löse $2x^2 - 8x + 6 = 0$ und gib die KLEINERE Lösung an.',
        1, 0, '',
        `**Ansatz:** abc-Formel oder durch $2$ teilen.

**Rechnung:** $a=2, b=-8, c=6$. $D = 64 - 48 = 16$. $x_{1,2} = (8 \\pm 4)/4$. $x_1 = 3, x_2 = 1$.

**Probe:** $2(x-1)(x-3) = 2x^2 - 8x + 6$. ✓

**Typischer Fehler:** $2a = 2 \\cdot 2 = 4$ im Nenner vergessen.`,
        [
          '$a=2, b=-8, c=6$.',
          'Diskriminante $64 - 48 = 16$.',
          '$\\sqrt{16} = 4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['abc-formel'] },
      ),
      mc(
        'Ein Schüler rechnet $x^2 - 4x - 5 = 0$: $x_{1,2} = 2 \\pm \\sqrt{4 - 5} = 2 \\pm \\sqrt{-1}$. Wo liegt der Fehler?',
        [
          'Die pq-Formel nutzt $(p/2)^2 - q$, nicht $p - q$: $(−4/2)^2 - (-5) = 4 + 5 = 9$. Lösungen: $2 \\pm 3$.',
          'Er hätte $2i$ ausrechnen müssen.',
          'Der Ausdruck ist korrekt.',
          'Die Gleichung hat keine Lösungen.',
        ],
        0,
        `**Ansatz:** Diskriminante mit $(p/2)^2$ berechnen, nicht $p$. Und Vorzeichen von $q$ beachten.

**Rechnung:** Korrekt: $x_{1,2} = 2 \\pm 3$. Also $x_1 = 5, x_2 = -1$.

**Probe:** $5^2 - 20 - 5 = 0$ ✓; $(-1)^2 + 4 - 5 = 0$ ✓.

**Typischer Fehler:** Diskriminante falsch aufstellen.`,
        [
          'Wie lautet die Diskriminante in pq-Formel?',
          '$(p/2)^2 - q$, nicht $p - q$.',
          '$q = -5$ → $-q = +5$.',
        ],
        {
          1: '$2i$ wäre eine komplexe Lösung — die Aufgabe lebt aber im Reellen, und die Probe zeigt: $5^2 - 20 - 5 = 0$ und $(-1)^2 + 4 - 5 = 0$ sind beide reelle Lösungen. Der Schritt ins Komplexe wäre nötig, wenn $D$ wirklich negativ wäre — hier ist er $+9$.',
          2: 'Der Ausdruck $2 \\pm \\sqrt{-1}$ ist nicht korrekt — der Fehler steckt in der Diskriminante. Korrekte Auswertung: $(p/2)^2 - q = 4 - (-5) = 4 + 5 = 9$, nicht $4 - 5 = -1$. Vorzeichen von $q = -5$ wurde nicht negiert.',
          3: 'Probe widerlegt: $5^2 - 4 \\cdot 5 - 5 = 25 - 20 - 5 = 0$ ✓ und $(-1)^2 - 4 \\cdot (-1) - 5 = 1 + 4 - 5 = 0$ ✓. Die Gleichung hat zwei reelle Lösungen, der Schüler-Fehler liegt im Vorzeichen von $q$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['abc-formel'] },
      ),
      sorting(
        'Bringe die Schritte zum Lösen von $x^2 + 2x - 15 = 0$ mit pq-Formel in die richtige Reihenfolge.',
        [
          'Koeffizienten: $p=2, q=-15$',
          'Diskriminante: $(p/2)^2 - q = 1 + 15 = 16$',
          '$x_{1,2} = -1 \\pm \\sqrt{16} = -1 \\pm 4$',
          'Lösungen: $x_1 = 3, x_2 = -5$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch die pq-Formel anwenden.

**Rechnung:** $x_1 = 3, x_2 = -5$.

**Probe:** $(x-3)(x+5) = x^2 + 2x - 15$. ✓

**Typischer Fehler:** Vorzeichen der Koeffizienten falsch übernehmen.`,
        [
          'Koeffizienten identifizieren.',
          'Diskriminante berechnen.',
          'Formel einsetzen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['abc-formel', 'pq-formel'] },
      ),
      ni(
        'Löse die rein-quadratische Gleichung $x^2 - 16 = 0$ und gib die NEGATIVE Lösung an.',
        -4, 0, '',
        `**Ansatz:** Bei einer Gleichung der Form $x^2 = c$ mit $c > 0$ gibt es ZWEI Lösungen: $x = +\\sqrt{c}$ und $x = -\\sqrt{c}$.

**Rechnung:**
$$x^2 - 16 = 0 \\quad | +16 \\\\ x^2 = 16 \\quad | \\sqrt{} \\\\ x = \\pm 4$$

Also $x_1 = 4, x_2 = -4$. Die negative Lösung ist $x = -4$.

**Probe:** $(-4)^2 - 16 = 16 - 16 = 0$ ✓.

**Typischer Fehler:** Nur $x = +4$ angeben — beim Wurzelziehen aus einer Gleichung muss IMMER das $\\pm$-Zeichen mitgeschrieben werden, weil sowohl $4^2 = 16$ als auch $(-4)^2 = 16$ gilt.`,
        [
          '$x^2 = 16$ — welche Zahlen quadriert ergeben $16$?',
          '$\\sqrt{16} = 4$, aber $(-4)^2 = 16$ auch.',
          'Antwort enthält beide Vorzeichen: $x = \\pm 4$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['quad-form'] },
      ),
      ni(
        'Löse $\\dfrac{1}{2}x^2 - x - 4 = 0$ und gib die GRÖSSERE Lösung an.',
        4, 0, '',
        `**Ansatz:** Erst auf Normalform bringen (mit $2$ multiplizieren), dann pq-Formel.

**Rechnung:**
$$\\dfrac{1}{2}x^2 - x - 4 = 0 \\quad | \\cdot 2 \\\\ x^2 - 2x - 8 = 0$$

pq-Formel mit $p = -2$, $q = -8$:
$$x_{1,2} = 1 \\pm \\sqrt{1 + 8} = 1 \\pm 3$$

Also $x_1 = 4$, $x_2 = -2$. Die größere Lösung ist $x = 4$.

**Probe:** $\\dfrac{1}{2} \\cdot 16 - 4 - 4 = 8 - 8 = 0$ ✓.

**Typischer Fehler:** pq-Formel direkt mit $p = -1$, $q = -4$ aus der Originalgleichung anwenden — das gilt aber nur in Normalform mit Leitkoeffizient $1$. Erst durch $\\frac{1}{2}$ teilen (= mit $2$ multiplizieren), dann ablesen.`,
        [
          'pq-Formel verlangt $x^2 + px + q = 0$ — Leitkoeffizient muss $1$ sein.',
          'Multipliziere die Gleichung mit $2$.',
          'Danach $p = -2$, $q = -8$ ablesen und einsetzen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['abc-formel', 'pq-formel'] },
      ),
      mc(
        'Welche Werte für $-\\dfrac{p}{2}$ und $\\left(\\dfrac{p}{2}\\right)^2 - q$ liefert die pq-Formel bei $x^2 + 6x - 16 = 0$?',
        [
          '$-\\dfrac{p}{2} = -3$ und $\\left(\\dfrac{p}{2}\\right)^2 - q = 25$',
          '$-\\dfrac{p}{2} = +3$ und $\\left(\\dfrac{p}{2}\\right)^2 - q = 25$',
          '$-\\dfrac{p}{2} = -3$ und $\\left(\\dfrac{p}{2}\\right)^2 - q = -7$',
          '$-\\dfrac{p}{2} = -6$ und $\\left(\\dfrac{p}{2}\\right)^2 - q = 25$',
        ],
        0,
        `**Ansatz:** Aus der Normalform $x^2 + px + q = 0$ ablesen: $p = 6$, $q = -16$. Dann beide Teile der pq-Formel separat berechnen.

**Rechnung:** $-\\dfrac{p}{2} = -\\dfrac{6}{2} = -3$. $\\left(\\dfrac{p}{2}\\right)^2 - q = 3^2 - (-16) = 9 + 16 = 25$. Also $x_{1,2} = -3 \\pm 5 = 2$ oder $-8$.

**Probe:** $2^2 + 6 \\cdot 2 - 16 = 4 + 12 - 16 = 0$ ✓; $(-8)^2 + 6 \\cdot (-8) - 16 = 64 - 48 - 16 = 0$ ✓.

**Typischer Fehler:** Vorzeichen von $p$ vergessen ($+3$ statt $-3$) oder Vorzeichen von $q$ falsch in Diskriminante einsetzen ($9 - 16 = -7$ statt $9 + 16 = 25$).`,
        [
          'Identifiziere $p$ und $q$ aus der Normalform.',
          '$-p/2$: einfach das Minus vor den halbierten Koeffizienten.',
          'Diskriminante: $(p/2)^2 - q$ — beachte das Minuszeichen vor $q$.',
        ],
        {
          1: 'Du hast das Minuszeichen vor $p/2$ vergessen — bei $p = +6$ ist $-p/2 = -3$, nicht $+3$. Sonst hättest du $-3 \\pm 5$ als $+3 \\pm 5$ und die falschen Lösungen $8$ und $-2$.',
          2: 'Du hast das Vorzeichen von $q = -16$ in der Diskriminante nicht negiert: $(p/2)^2 - q = 9 - (-16) = 9 + 16 = 25$, nicht $9 - 16 = -7$. Bei negativem $q$ ergibt $-q$ einen positiven Beitrag.',
          3: 'Du hast die Halbierung von $p$ vergessen — $-p$ statt $-p/2$. Bei $p = 6$ ist $-p/2 = -3$, nicht $-6$. Die pq-Formel halbiert den linearen Koeffizienten, bevor sie ihn negiert und vor $\\sqrt{\\,}$ stellt.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pq-formel'] },
      ),
      ni(
        'Löse $x^2 - 7x + 10 = 0$ und gib die KLEINERE Lösung an.',
        2, 0, '',
        `**Ansatz:** Normalform mit $p = -7$, $q = 10$. pq-Formel anwenden.

**Rechnung:**
$$x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^2 - q} = \\dfrac{7}{2} \\pm \\sqrt{\\dfrac{49}{4} - 10} = 3{,}5 \\pm \\sqrt{2{,}25} = 3{,}5 \\pm 1{,}5$$

Also $x_1 = 5$, $x_2 = 2$. Die kleinere Lösung ist $x = 2$.

**Probe:** $2^2 - 7 \\cdot 2 + 10 = 4 - 14 + 10 = 0$ ✓. Vieta-Check: $2 + 5 = 7 = -p$ ✓ und $2 \\cdot 5 = 10 = q$ ✓.

**Typischer Fehler:** Vorzeichen von $p$ verlieren — $-p/2 = +3{,}5$ (nicht $-3{,}5$). Wer fälschlich $-3{,}5 \\pm 1{,}5$ rechnet, erhält $-2$ und $-5$.`,
        [
          'Lies $p = -7$ und $q = 10$ aus der Normalform ab.',
          '$-p/2 = +3{,}5$. Diskriminante $\\left(\\dfrac{p}{2}\\right)^2 - q = 12{,}25 - 10 = 2{,}25$.',
          '$\\sqrt{2{,}25} = 1{,}5$. Lösungen $3{,}5 \\pm 1{,}5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['abc-formel'] },
      ),
      ni(
        'Löse die Bruchgleichung $\\dfrac{x^2 + 4}{x} = 5$ (für $x \\neq 0$) und gib die GRÖSSERE Lösung an.',
        4, 0, '',
        `**Ansatz:** Beide Seiten mit $x$ multiplizieren ($x \\neq 0$), auf Normalform bringen, pq-Formel anwenden.

**Rechnung:**
$$\\dfrac{x^2 + 4}{x} = 5 \\quad | \\cdot x \\\\ x^2 + 4 = 5x \\quad | -5x \\\\ x^2 - 5x + 4 = 0$$

Mit $p = -5$, $q = 4$: $x_{1,2} = 2{,}5 \\pm \\sqrt{6{,}25 - 4} = 2{,}5 \\pm 1{,}5$. Also $x_1 = 4$, $x_2 = 1$. Die größere Lösung ist $x = 4$.

**Probe:** $\\dfrac{4^2 + 4}{4} = \\dfrac{20}{4} = 5$ ✓. Beide Lösungen sind $\\neq 0$, also zulässig.

**Typischer Fehler:** Mit $x$ multiplizieren, ohne $x \\neq 0$ als Definitionsbedingung zu notieren — bei dieser Aufgabe ist die Bedingung erfüllt, aber bei anderen Bruchgleichungen kann eine Schein-Lösung $x = 0$ entstehen.`,
        [
          'Multipliziere beide Seiten mit dem Nenner $x$ — aber notiere $x \\neq 0$.',
          'Nach dem Räumen: $x^2 + 4 = 5x$, also $x^2 - 5x + 4 = 0$.',
          'pq-Formel mit $p = -5$, $q = 4$. Achte auf die größere Lösung.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['abc-formel', 'pq-formel'] },
      ),
    ],
    // [1] Diskriminante
    1: [
      matching(
        'Ordne jedem Diskriminanten-Fall die Anzahl reeller Lösungen zu.',
        [
          { left: '$D > 0$',  right: 'zwei verschiedene reelle Lösungen' },
          { left: '$D = 0$',  right: 'eine doppelte reelle Lösung' },
          { left: '$D < 0$',  right: 'keine reelle Lösung (nur komplex)' },
          { left: '$D$ perfekte Quadratzahl', right: 'zwei rationale Lösungen' },
        ],
        `**Ansatz:** Diskriminante zeigt, wie die Wurzel sich verhält.

**Rechnung:** Unter der Wurzel: $\\geq 0, = 0, < 0$.

**Probe:** $x^2 - 5x + 6$: $D = 25-24 = 1 > 0$, zwei Lösungen.

**Typischer Fehler:** $D = 0$ als "keine Lösung" missdeuten.`,
        [
          'Wurzel aus $D$ entscheidet.',
          '$\\sqrt{>0}$ = reell, $\\sqrt{<0}$ = komplex.',
          '$D=0$ → doppelt.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['diskriminante'] },
      ),
      mc(
        'Wie viele reelle Lösungen hat $x^2 - 6x + 9 = 0$?',
        ['Eine (doppelt)', 'Zwei verschiedene', 'Keine', 'Unendlich viele'],
        0,
        `**Ansatz:** $D = 36 - 36 = 0$ — doppelte Lösung.

**Rechnung:** $x = 3$ (doppelt). $(x-3)^2 = 0$.

**Probe:** $9 - 18 + 9 = 0$. ✓

**Typischer Fehler:** "Doppelte Lösung" als "zwei" zählen.`,
        [
          'Diskriminante ausrechnen.',
          '$D = 36 - 36 = 0$.',
          'Was bedeutet $D = 0$?',
        ],
        {
          1: 'Du hast den Fall $D = 0$ mit $D > 0$ verwechselt: $D = 36 - 36 = 0$ ist exakt der Grenzfall, in dem $\\pm\\sqrt{D} = \\pm 0$ keinen Unterschied mehr macht — die Lösung tritt nur einmal (doppelt) auf, nicht zweimal verschieden.',
          2: 'Du hast vermutlich beim Wurzelziehen $\\sqrt{0}$ als „nicht definiert" eingeschätzt. Aber $\\sqrt{0} = 0$ ist sehr wohl definiert — nur eben Null. Daraus folgt $x = 3 \\pm 0 = 3$ — eine doppelte reelle Lösung.',
          3: 'Du hast wohl an $0 = 0$ gedacht, das jedem $x$ als Lösung erlaubt — das ist aber etwas ganz anderes. $x^2 - 6x + 9 = 0$ ist eine echte quadratische Gleichung mit Diskriminante $0$, also genau einer (doppelten) Lösung $x = 3$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['diskriminante'] },
      ),
      ni(
        'Berechne die Diskriminante von $2x^2 + 3x - 5 = 0$.',
        49, 0, '',
        `**Ansatz:** $D = b^2 - 4ac$.

**Rechnung:** $a=2, b=3, c=-5$. $D = 9 - 4 \\cdot 2 \\cdot (-5) = 9 + 40 = 49$.

**Probe:** $D = 49 > 0$, zwei Lösungen. $\\sqrt{49} = 7$.

**Typischer Fehler:** Vorzeichen von $c = -5$ vergessen.`,
        [
          '$D = b^2 - 4ac$.',
          'Vorzeichen von $c$ beachten.',
          '$-4 \\cdot 2 \\cdot (-5) = +40$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['diskriminante'] },
      ),
      mc(
        'Ein Schüler rechnet für $x^2 + 4x + 5 = 0$: $D = 16 - 20 = -4$ und sagt "$D = 0$, eine Lösung". Wo liegt der Fehler?',
        [
          '$D < 0$ bedeutet KEINE reelle Lösung, nicht "eine Lösung".',
          'Die Rechnung ist richtig.',
          '$D$ müsste positiv sein — kein Fehler.',
          '$D = -4$ ergibt $\\sqrt{-4} = 2$.',
        ],
        0,
        `**Ansatz:** Unterschied zwischen $D = 0$ und $D < 0$ beachten.

**Rechnung:** $D = -4 < 0$. Keine reelle Lösung (in $\\mathbb{R}$).

**Probe:** Parabel $x^2 + 4x + 5$ hat Minimum $1 > 0$, schneidet nie die $x$-Achse.

**Typischer Fehler:** Vorzeichen von $D$ ignorieren.`,
        [
          'Vorzeichen von $D$ genau prüfen.',
          '$D < 0$ = keine reelle Lösung.',
          '$D = 0$ nur bei exakt $0$.',
        ],
        {
          1: 'Die Rechnung $D = 16 - 20 = -4$ ist korrekt — der Fehler liegt in der Interpretation: $D = -4 \\neq 0$. Schüler hat den Fall „doppelte Lösung bei $D = 0$" mit „keine reelle Lösung bei $D < 0$" verwechselt. Die Aufgabe verlangt, das Vorzeichen von $D$ zu unterscheiden, nicht nur $D = 0$ zu prüfen.',
          2: 'Hier wird kein positives $D$ benötigt. Die Diskriminante $D = -4$ ist tatsächlich negativ — und genau das bedeutet: keine reelle Lösung. Die Parabel $x^2 + 4x + 5$ hat Scheitel bei $(-2, 1)$, liegt also komplett über der $x$-Achse — bestätigt $D < 0$.',
          3: 'Das ist zwar korrekt, beantwortet aber nicht die Frage: Der Schüler-Fehler war nicht das Wurzelziehen, sondern die FALSCHE Aussage „$D = 0$, eine Lösung". Tatsächlich ist $D = -4 < 0$, also keine reelle Lösung — und genau das nennt der Fehler nicht.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['diskriminante'] },
      ),
      tf(
        'Für $x^2 + 2x + 3 = 0$ gilt $D < 0$, also existiert keine reelle Lösung.',
        true,
        `**Ansatz:** Diskriminante ausrechnen und Fall bestimmen.

**Rechnung:** $D = 4 - 12 = -8 < 0$. Keine reelle Lösung.

**Probe:** Parabel-Minimum: $y(-1) = 1 - 2 + 3 = 2 > 0$.

**Typischer Fehler:** Negative Diskriminante falsch interpretieren.`,
        [
          '$D = b^2 - 4ac$.',
          '$D < 0$ → keine reelle Lösung.',
          'Parabel nicht schneidend.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['diskriminante', 'abc-formel'] },
      ),
      ni(
        'Für welchen Wert $k$ hat die Gleichung $x^2 + 4x + k = 0$ genau eine (doppelte) reelle Lösung?',
        4, 0, '',
        `**Ansatz:** Genau eine doppelte Lösung tritt auf, wenn $D = 0$. Setze die Diskriminante auf $0$ und löse nach $k$.

**Rechnung:** Mit $a = 1$, $b = 4$, $c = k$:
$$D = b^2 - 4ac = 16 - 4k \\stackrel{!}{=} 0 \\quad \\Rightarrow \\quad k = 4$$

**Probe:** Setze $k = 4$ ein: $x^2 + 4x + 4 = (x + 2)^2 = 0 \\Rightarrow x = -2$ (doppelt). $D = 16 - 16 = 0$ ✓.

**Typischer Fehler:** Bei $4ac$ den Faktor $4$ vergessen und $k = 16$ angeben (aus $b^2 = 16$, $D = 16 - k$). Achte darauf: $4 \\cdot a \\cdot c$, hier mit $a = 1$ also $4k$, nicht $k$.`,
        [
          'Doppelte Lösung ⇔ $D = 0$.',
          'Diskriminante: $D = b^2 - 4ac$ mit $a=1$, $b=4$, $c=k$.',
          'Setze $16 - 4k = 0$ und löse nach $k$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['diskriminante'] },
      ),
      mc(
        'Welche der folgenden Gleichungen hat ZWEI verschiedene reelle Lösungen?',
        [
          '$x^2 - 6x + 5 = 0$',
          '$x^2 - 6x + 9 = 0$',
          '$x^2 + x + 1 = 0$',
          '$2x^2 + 8 = 0$',
        ],
        0,
        `**Ansatz:** Pro Gleichung die Diskriminante $D = b^2 - 4ac$ ausrechnen und das Vorzeichen prüfen — nur $D > 0$ liefert zwei verschiedene reelle Lösungen.

**Rechnung:**
- A: $D = 36 - 20 = 16 > 0$ — zwei Lösungen ($x = 1$ und $x = 5$). ✓
- B: $D = 36 - 36 = 0$ — eine doppelte Lösung ($x = 3$).
- C: $D = 1 - 4 = -3 < 0$ — keine reelle Lösung.
- D: $2x^2 = -8$, also $x^2 = -4$ — keine reelle Lösung.

**Probe:** Einsetzen in A: $1 - 6 + 5 = 0$ ✓ und $25 - 30 + 5 = 0$ ✓.

**Typischer Fehler:** Bei B den Wert $D = 0$ als „zwei Lösungen" zählen, weil die abc-Formel $\\pm$ ausgibt. $\\pm 0$ gibt aber denselben Wert — eine doppelte Lösung, kein Lösungspaar.`,
        [
          'Berechne für jede Gleichung die Diskriminante $D = b^2 - 4ac$.',
          'Nur $D > 0$ ergibt zwei verschiedene Lösungen.',
          '$D = 0$ → eine doppelte; $D < 0$ → keine reelle.',
        ],
        {
          1: '$D = 0$ — das ist die Schwelle, bei der Parabel und $x$-Achse sich genau berühren. Eine doppelte Lösung, nicht zwei verschiedene.',
          2: '$D = -3 < 0$ — Parabel über der $x$-Achse, keine Schnittpunkte.',
          3: '$2x^2 + 8 = 0 \\Rightarrow x^2 = -4$ — kein reelles $x$ erfüllt das, da $x^2 \\geq 0$.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['diskriminante'] },
      ),
      ni(
        'Berechne die Diskriminante von $x^2 - 8x + 16 = 0$.',
        0, 0, '',
        `**Ansatz:** $D = b^2 - 4ac$ mit $a = 1$, $b = -8$, $c = 16$.

**Rechnung:** $D = (-8)^2 - 4 \\cdot 1 \\cdot 16 = 64 - 64 = 0$.

**Probe:** $D = 0$ → genau eine doppelte Lösung. Tatsächlich: $x^2 - 8x + 16 = (x - 4)^2 = 0 \\Rightarrow x = 4$ (doppelt).

**Typischer Fehler:** $b = -8$ als $b = 8$ einsetzen — beim Quadrieren spielt das Vorzeichen keine Rolle ($(-8)^2 = 64 = 8^2$), aber bei abc-Formel taucht $-b$ separat auf, da darf das Vorzeichen nicht verloren gehen.`,
        [
          '$D = b^2 - 4ac$.',
          '$a = 1$, $b = -8$, $c = 16$ aus der Normalform.',
          '$(-8)^2 - 4 \\cdot 16 = 64 - 64 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['diskriminante'] },
      ),
      mc(
        'Wie viele reelle Lösungen hat $x^2 + 5x - 6 = 0$?',
        ['Zwei verschiedene reelle Lösungen', 'Genau eine (Doppelwurzel)', 'Keine reelle Lösung', 'Drei Lösungen'],
        0,
        `**Ansatz:** Diskriminante $D = b^2 - 4ac$ ausrechnen und Vorzeichen interpretieren.

**Rechnung:** $a = 1$, $b = 5$, $c = -6$. $D = 25 - 4 \\cdot 1 \\cdot (-6) = 25 + 24 = 49 > 0$. Also zwei verschiedene reelle Lösungen.

**Probe:** Tatsächliche Lösungen über pq-Formel: $x = -2{,}5 \\pm 3{,}5$, also $x_1 = 1$ und $x_2 = -6$. Einsetzen: $1 + 5 - 6 = 0$ ✓ und $36 - 30 - 6 = 0$ ✓.

**Typischer Fehler:** Vorzeichen von $c = -6$ in $-4ac$ vergessen — wer $25 - 24 = 1$ rechnet, erhält ebenfalls „zwei Lösungen" (zufällig richtig), aber falsche Diskriminanten-Werte.`,
        [
          'Lies $a$, $b$, $c$ aus der Normalform ab.',
          'Achtung Vorzeichen: $c = -6$, also $-4 \\cdot 1 \\cdot (-6) = +24$.',
          '$D = 49$ — was bedeutet $D > 0$?',
        ],
        {
          1: 'Eine Doppelwurzel würde $D = 0$ erfordern — hier ist $D = 25 + 24 = 49 \\neq 0$.',
          2: 'Keine reelle Lösung würde $D < 0$ erfordern. Hier ist $D = 49$ deutlich positiv — die Parabel schneidet die $x$-Achse zweimal.',
          3: 'Eine quadratische Gleichung kann höchstens ZWEI Lösungen haben (Fundamentalsatz der Algebra für Grad-2-Polynome). Drei oder mehr Lösungen treten erst ab Grad 3 auf.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['diskriminante'] },
      ),
      tf(
        'Wenn die Diskriminante $D > 0$ und gleichzeitig keine perfekte Quadratzahl ist, dann sind die Lösungen reell, aber irrational.',
        true,
        `**Ansatz:** Lösungen einer quadratischen Gleichung sind $x = \\dfrac{-b \\pm \\sqrt{D}}{2a}$. Sie sind genau dann rational, wenn $\\sqrt{D}$ rational ist — das gilt nur, wenn $D$ ein Quadrat einer rationalen Zahl ist.

**Rechnung:** Beispiel $x^2 - 2 = 0$: $D = 0 + 8 = 8$. $\\sqrt{8} = 2\\sqrt{2}$ irrational. Lösungen: $\\pm \\sqrt{2}$ — reell, irrational.

**Probe:** Im Gegensatz $x^2 - 5x + 6 = 0$: $D = 25 - 24 = 1$ (perfekte Quadratzahl). $\\sqrt{1} = 1$. Lösungen $2$ und $3$ — rational.

**Typischer Fehler:** „Reell" mit „rational" verwechseln. Reell heißt nur „nicht komplex"; rational fordert zusätzlich, dass die Wurzel eine ganze oder Bruchzahl ist.`,
        [
          'Lösung enthält $\\sqrt{D}$.',
          'Wann ist $\\sqrt{D}$ rational? — Nur bei $D =$ perfekter Quadratzahl.',
          'Sonst $\\sqrt{D}$ irrational, also Lösung reell aber nicht rational.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['diskriminante'] },
      ),
      ni(
        'Für welchen Wert $k$ hat die Gleichung $x^2 - 6x + k = 0$ genau eine doppelte reelle Lösung?',
        9, 0, '',
        `**Ansatz:** Genau eine doppelte Lösung $\\Leftrightarrow D = 0$. Diskriminante mit $a = 1$, $b = -6$, $c = k$ aufstellen und $= 0$ setzen.

**Rechnung:**
$$D = (-6)^2 - 4 \\cdot 1 \\cdot k = 36 - 4k \\stackrel{!}{=} 0 \\quad \\Rightarrow \\quad 4k = 36 \\quad \\Rightarrow \\quad k = 9$$

**Probe:** Setze $k = 9$ ein: $x^2 - 6x + 9 = (x - 3)^2 = 0 \\Rightarrow x = 3$ (doppelt). $D = 36 - 36 = 0$ ✓.

**Typischer Fehler:** Den Faktor $4$ in $4ac$ vergessen — $36 - k = 0 \\Rightarrow k = 36$ wäre falsch. Gilt nur, wenn $4a = 1$, hier ist $4 \\cdot 1 = 4$, also bleibt $4k$.`,
        [
          'Doppelte Lösung tritt bei $D = 0$ auf.',
          '$D = b^2 - 4ac$ mit $b = -6$, $a = 1$, $c = k$.',
          '$36 - 4k = 0$ nach $k$ auflösen.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['diskriminante'] },
      ),
    ],
    // [2] Vieta
    2: [
      tf(
        'Für $x^2 + px + q = 0$ mit Lösungen $x_1, x_2$ gilt: $x_1 + x_2 = -p$ und $x_1 \\cdot x_2 = q$ (Vieta).',
        true,
        `**Ansatz:** Satz von Vieta — Zusammenhang zwischen Koeffizienten und Lösungen.

**Rechnung:** $(x-x_1)(x-x_2) = x^2 - (x_1+x_2)x + x_1 x_2$. Koeffizientenvergleich mit $x^2 + px + q$.

**Probe:** $x^2 - 5x + 6$: Lösungen $2, 3$. $2+3 = 5 = -p$. $2 \\cdot 3 = 6 = q$. ✓

**Typischer Fehler:** Vorzeichen von $p$ vertauschen.`,
        [
          'Summe = $-p$.',
          'Produkt = $q$.',
          'Nur für Normalform.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['vieta'] },
      ),
      mc(
        'Rate die Lösungen von $x^2 - 7x + 12 = 0$ mit Vieta.',
        ['$3$ und $4$', '$2$ und $6$', '$1$ und $12$', '$-3$ und $-4$'],
        0,
        `**Ansatz:** Zwei Zahlen mit Summe $7$ und Produkt $12$.

**Rechnung:** $3 + 4 = 7$, $3 \\cdot 4 = 12$. ✓

**Probe:** $(x-3)(x-4) = x^2 - 7x + 12$. ✓

**Typischer Fehler:** Negative Lösungen übersehen oder Produkt falsch prüfen.`,
        [
          'Summe = $7$, Produkt = $12$.',
          'Welche Zahlen passen?',
          'Probe durch Einsetzen.',
        ],
        {
          1: 'Produkt stimmt ($12$), aber Summe wäre $8$, nicht $7$.',
          2: 'Summe wäre $13$.',
          3: 'Produkt wäre $+12$, aber Summe $-7$ — Vorzeichen falsch.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['vieta'] },
      ),
      ni(
        'Die Lösungen von $x^2 + px - 15 = 0$ sind $x_1 = 3$ und $x_2 = -5$. Wie groß ist $p$?',
        2, 0, '',
        `**Ansatz:** Vieta: Summe = $-p$.

**Rechnung:** $x_1 + x_2 = 3 + (-5) = -2 = -p \\Rightarrow p = 2$.

**Probe:** $x^2 + 2x - 15$. Vieta-Check: Produkt $3 \\cdot (-5) = -15 = q$. ✓

**Typischer Fehler:** $p$ ohne Vorzeichenumkehr übernehmen.`,
        [
          'Summe der Lösungen.',
          'Vieta: Summe = $-p$.',
          'Vorzeichen umkehren.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['vieta'] },
      ),
      mc(
        'Ein Schüler rechnet für $x^2 + 3x + 2 = 0$ Vieta: "Summe $= 3$, Produkt $= 2$, also $x_1 = 1, x_2 = 2$." Wo liegt der Fehler?',
        [
          'Summe ist $-p = -3$, nicht $+3$. Korrekt: Lösungen $-1$ und $-2$ mit $-1 + -2 = -3$, $(-1)(-2) = 2$.',
          'Produkt ist $-2$, nicht $+2$.',
          'Er hat recht.',
          'Vieta funktioniert nicht bei negativen Koeffizienten.',
        ],
        0,
        `**Ansatz:** Vieta: Summe = $-p$.

**Rechnung:** Korrekt: $x_1 \\cdot x_2 = q = 2$ und $x_1 + x_2 = -p = -3$. Lösungen $-1, -2$.

**Probe:** $(x+1)(x+2) = x^2 + 3x + 2$. ✓

**Typischer Fehler:** Vorzeichen von Vieta falsch.`,
        [
          'Summe = $-p$, nicht $p$.',
          'Vorzeichen prüfen.',
          'Negative Lösungen möglich.',
        ],
        {
          1: 'Das Produkt $1 \\cdot 2 = 2$ ist korrekt — der Fehler liegt nicht im Produkt, sondern im Vorzeichen der Summe. Vieta für $x^2 + px + q$: Summe $= -p$, also bei $p = 3$ ist Summe $= -3$, nicht $+3$.',
          2: 'Probe widerlegt $x_1 = 1, x_2 = 2$: $1^2 + 3 \\cdot 1 + 2 = 6 \\neq 0$. Die korrekten Lösungen sind $x_1 = -1, x_2 = -2$: $1 - 3 + 2 = 0$ ✓ und $4 - 6 + 2 = 0$ ✓. Schüler-Fehler: Vorzeichen bei $-p$ vergessen.',
          3: 'Vieta gilt sehr wohl auch für negative Koeffizienten — die Aussage „Vieta funktioniert nicht bei…" ist ein Mythos. Die Formeln $x_1 + x_2 = -p$ und $x_1 \\cdot x_2 = q$ funktionieren universell für jede Normalform.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['vieta'] },
      ),
      matching(
        'Ordne jeder quadratischen Gleichung in Normalform ihr Lösungspaar zu (mit Vieta).',
        [
          { left: '$x^2 - 8x + 15 = 0$',       right: '$3, 5$' },
          { left: '$x^2 + 6x + 8 = 0$',        right: '$-2, -4$' },
          { left: '$x^2 + x - 12 = 0$',        right: '$3, -4$' },
          { left: '$x^2 - 3x - 10 = 0$',       right: '$5, -2$' },
        ],
        `**Ansatz:** Summe $= -p$, Produkt $= q$. Passende Zahlenpaare finden.

**Rechnung:** In jeder Zeile: Summe und Produkt prüfen.

**Probe:** Jedes Paar einsetzen.

**Typischer Fehler:** Vorzeichen nicht mit Summe/Produkt matchen.`,
        [
          'Summe und Produkt gleichzeitig.',
          'Vorzeichen beachten.',
          'Systematisch durchprobieren.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['vieta'] },
      ),
      ni(
        'Eine quadratische Gleichung in Normalform $x^2 + px + q = 0$ hat die Lösungen $x_1 = -3$ und $x_2 = 7$. Wie groß ist $q$?',
        -21, 0, '',
        `**Ansatz:** Vieta: $q = x_1 \\cdot x_2$ (Produkt der Lösungen).

**Rechnung:** $q = (-3) \\cdot 7 = -21$.

**Probe:** Mit $p = -(x_1 + x_2) = -4$ und $q = -21$ ergibt sich $x^2 - 4x - 21 = 0$. Einsetzen: $9 + 12 - 21 = 0$ ✓ und $49 - 28 - 21 = 0$ ✓. Die Faktorisierung $(x + 3)(x - 7) = x^2 - 4x - 21$ bestätigt es.

**Typischer Fehler:** Vorzeichen vergessen — $-3 \\cdot 7$ als $+21$ statt $-21$ schreiben. Bei Vieta wird das Produkt der Lösungen DIREKT als $q$ eingesetzt, mit allen Vorzeichen.`,
        [
          'Vieta für Normalform: $q = x_1 \\cdot x_2$.',
          'Setze die gegebenen Lösungen ein.',
          'Achte auf das Vorzeichen: Minus mal Plus = Minus.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['vieta'] },
      ),
      mc(
        'Ein Schüler soll die Gleichung mit Lösungen $x_1 = 2$, $x_2 = 6$ in Normalform aufstellen und schreibt $x^2 + 8x + 12 = 0$. Wo liegt der Fehler?',
        [
          'Vorzeichen bei $-p$ vergessen: Mit $x_1 + x_2 = 8$ ist $-p = 8$, also $p = -8$. Korrekt: $x^2 - 8x + 12 = 0$.',
          'Das Produkt $12$ ist falsch, es müsste $8$ sein.',
          'Die Gleichung ist korrekt.',
          'Vieta gilt nicht für positive Lösungen.',
        ],
        0,
        `**Ansatz:** Vieta für Normalform: $x_1 + x_2 = -p$ und $x_1 \\cdot x_2 = q$. Beim Aufstellen aus den Lösungen muss das Vorzeichen von $p$ umgedreht werden.

**Rechnung:** Mit $x_1 = 2$, $x_2 = 6$:
$$-p = x_1 + x_2 = 8 \\Rightarrow p = -8 \\\\ q = x_1 \\cdot x_2 = 12$$

Korrekte Gleichung: $x^2 - 8x + 12 = 0$.

**Probe:** Einsetzen $x = 2$: $4 - 16 + 12 = 0$ ✓. Einsetzen $x = 6$: $36 - 48 + 12 = 0$ ✓.

**Typischer Fehler:** Die Summe $x_1 + x_2 = 8$ direkt als $p$ in die Gleichung übernehmen — also $+p$ statt $-p$. Ergibt $x^2 + 8x + 12 = 0$, deren Lösungen aber $-2$ und $-6$ wären (alle Vorzeichen umgekehrt).`,
        [
          'Vieta: $x_1 + x_2 = -p$, NICHT $+p$.',
          'Die Summe wird mit umgedrehtem Vorzeichen zum mittleren Koeffizienten.',
          'Probe durch Einsetzen oder Faktorisieren $(x - x_1)(x - x_2)$.',
        ],
        {
          1: 'Das Produkt $2 \\cdot 6 = 12$ ist korrekt — nicht der Fehler. Falsch ist das Vorzeichen bei $p$.',
          2: 'Probe widerlegt: $4 + 16 + 12 = 32 \\neq 0$ für $x = 2$. Mit der falschen Gleichung ist $x = 2$ keine Lösung mehr.',
          3: 'Vieta gilt für jede quadratische Gleichung in Normalform — Vorzeichen der Lösungen sind irrelevant.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['vieta'] },
      ),
      tf(
        'Die Vieta-Formeln $x_1 + x_2 = -p$ und $x_1 \\cdot x_2 = q$ gelten nur in der Normalform $x^2 + px + q = 0$ — bei $ax^2 + bx + c = 0$ mit $a \\neq 1$ muss vorher durch $a$ dividiert werden.',
        true,
        `**Ansatz:** Vieta-Form ist mit $a = 1$ hergeleitet. Bei $a \\neq 1$ wird die Beziehung zu $x_1 + x_2 = -b/a$ und $x_1 \\cdot x_2 = c/a$.

**Rechnung:** Bei $2x^2 - 10x + 12 = 0$: durch $2$ teilen ergibt $x^2 - 5x + 6 = 0$. Vieta liefert Summe $5$, Produkt $6$, also Lösungen $2$ und $3$. Direkte Anwendung „Summe = $10$, Produkt = $12$" wäre falsch.

**Probe:** $2^2 - 10 \\cdot 2/2 + 6 = 0$ — bzw. $2 \\cdot 4 - 20 + 12 = 0$ ✓ in Originalform.

**Typischer Fehler:** Vieta direkt mit $b$ und $c$ aus der allgemeinen Form anwenden, ohne durch $a$ zu teilen.`,
        [
          'Wo gilt Vieta in der einfachen Form? — Normalform.',
          'Bei Leitkoeffizient $a \\neq 1$: erst Normalform herstellen.',
          'Alternative: $-b/a$ und $c/a$ verwenden.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['vieta'] },
      ),
      ni(
        'Eine quadratische Gleichung in Normalform $x^2 + px + q = 0$ hat die Lösungen $x_1 = 4$ und $x_2 = -3$. Wie groß ist $p$?',
        -1, 0, '',
        `**Ansatz:** Vieta: $x_1 + x_2 = -p$. Aus der Summe der gegebenen Lösungen folgt $-p$, daraus $p$.

**Rechnung:** $x_1 + x_2 = 4 + (-3) = 1$. Also $-p = 1 \\Rightarrow p = -1$.

**Probe:** Vollständige Gleichung $x^2 - x - 12 = 0$ (mit $q = x_1 \\cdot x_2 = -12$). Einsetzen $x = 4$: $16 - 4 - 12 = 0$ ✓; $x = -3$: $9 + 3 - 12 = 0$ ✓.

**Typischer Fehler:** Summe direkt als $p$ angeben — Vieta gibt aber $-p$ als Summe. Das Vorzeichen muss umgedreht werden.`,
        [
          'Vieta-Beziehung: $x_1 + x_2 = -p$.',
          'Berechne erst die Summe $4 + (-3) = 1$.',
          'Dann Vorzeichen umdrehen: $p = -1$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['vieta'] },
      ),
      mc(
        'Welche Lösungen hat $x^2 - 9x + 20 = 0$ nach Vieta?',
        ['$x_1 = 4$ und $x_2 = 5$', '$x_1 = 2$ und $x_2 = 10$', '$x_1 = -4$ und $x_2 = -5$', '$x_1 = 1$ und $x_2 = 20$'],
        0,
        `**Ansatz:** Vieta: Zwei Zahlen mit Summe $-p = 9$ und Produkt $q = 20$ suchen.

**Rechnung:** Faktorisiere $20 = 4 \\cdot 5$. Summe $4 + 5 = 9$ ✓ und Produkt $4 \\cdot 5 = 20$ ✓. Also $x_1 = 4$, $x_2 = 5$.

**Probe:** $4^2 - 9 \\cdot 4 + 20 = 16 - 36 + 20 = 0$ ✓ und $5^2 - 9 \\cdot 5 + 20 = 25 - 45 + 20 = 0$ ✓.

**Typischer Fehler:** Nur das Produkt prüfen und ein anderes Zahlenpaar mit Produkt $20$ wählen, ohne die Summe zu beachten — z. B. $(2, 10)$ oder $(1, 20)$ haben falsche Summen.`,
        [
          'Vieta: Summe = $-p = 9$, Produkt = $q = 20$.',
          'Welche Faktorenpaare hat $20$? — $(1, 20)$, $(2, 10)$, $(4, 5)$.',
          'Welches Paar erfüllt BEIDE Bedingungen?',
        ],
        {
          1: 'Produkt stimmt ($2 \\cdot 10 = 20$), aber Summe $2 + 10 = 12 \\neq 9$. Vieta verlangt beide Bedingungen gleichzeitig.',
          2: 'Produkt stimmt ($(-4)(-5) = 20$), aber Summe $-4 + (-5) = -9 \\neq +9$. Vorzeichen aller Lösungen vertauscht.',
          3: 'Produkt stimmt ($1 \\cdot 20 = 20$), aber Summe $1 + 20 = 21 \\neq 9$. Faktorenpaar mit kleinerer Summe wählen — hier $(4, 5)$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['vieta'] },
      ),
      matching(
        'Ordne jedem Lösungspaar die passende Normalform $x^2 + px + q = 0$ zu (Vieta).',
        [
          { left: '$x_1 = 2, \\; x_2 = 7$',     right: '$x^2 - 9x + 14 = 0$' },
          { left: '$x_1 = -3, \\; x_2 = 4$',    right: '$x^2 - x - 12 = 0$' },
          { left: '$x_1 = -1, \\; x_2 = -6$',   right: '$x^2 + 7x + 6 = 0$' },
          { left: '$x_1 = 8, \\; x_2 = -3$',    right: '$x^2 - 5x - 24 = 0$' },
        ],
        `**Ansatz:** Aus den Lösungen mit Vieta die Koeffizienten bestimmen: $-p = x_1 + x_2$ und $q = x_1 \\cdot x_2$.

**Rechnung:**
- $(2, 7)$: Summe $9 \\Rightarrow p = -9$, Produkt $14 \\Rightarrow q = 14$. Polynom $x^2 - 9x + 14$.
- $(-3, 4)$: Summe $1 \\Rightarrow p = -1$, Produkt $-12 \\Rightarrow q = -12$. Polynom $x^2 - x - 12$.
- $(-1, -6)$: Summe $-7 \\Rightarrow p = 7$, Produkt $6 \\Rightarrow q = 6$. Polynom $x^2 + 7x + 6$.
- $(8, -3)$: Summe $5 \\Rightarrow p = -5$, Produkt $-24 \\Rightarrow q = -24$. Polynom $x^2 - 5x - 24$.

**Probe:** Jede Lösung in das jeweilige Polynom einsetzen — Ergebnis $0$ bestätigt die Zuordnung.

**Typischer Fehler:** Vorzeichen bei $-p$ vergessen — also Summe direkt als $p$ einsetzen, was zu vertauschten Lösungen führt.`,
        [
          'Berechne pro Paar Summe und Produkt.',
          'Summe → $-p$ (Vorzeichen drehen!), Produkt → $q$.',
          'Setze in $x^2 + px + q$ ein und vergleiche mit den Optionen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['vieta'] },
      ),
    ],
    // [3] Faktorisierte Form
    3: [
      tf(
        'Die faktorisierte Form $(x - x_1)(x - x_2) = 0$ macht Nullstellen direkt sichtbar.',
        true,
        `**Ansatz:** Ein Produkt ist $0$ genau dann, wenn einer der Faktoren $0$ ist.

**Rechnung:** $(x - x_1)(x - x_2) = 0 \\iff x = x_1$ oder $x = x_2$.

**Probe:** Direkter Zugang zu den Nullstellen.

**Typischer Fehler:** Beim Ausmultiplizieren zurück die Form verlieren.`,
        [
          'Produkt-gleich-Null-Prinzip.',
          'Faktoren enthalten die Nullstellen.',
          '$x = x_i$ macht den Faktor $0$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['faktor-form'] },
      ),
      mc(
        'Welche Nullstellen hat $(x-2)(x+5) = 0$?',
        ['$x = 2$ und $x = -5$', '$x = -2$ und $x = 5$', '$x = -3$', '$x = 2 \\cdot (-5) = -10$'],
        0,
        `**Ansatz:** Jeder Faktor einzeln = $0$.

**Rechnung:** $x - 2 = 0 \\Rightarrow x = 2$. $x + 5 = 0 \\Rightarrow x = -5$.

**Probe:** $(2-2)(2+5) = 0 \\cdot 7 = 0$. ✓

**Typischer Fehler:** Vorzeichen beim Auflösen vergessen.`,
        [
          'Produkt $= 0$: jeder Faktor einzeln $= 0$.',
          '$x - 2 = 0 \\Rightarrow x = 2$.',
          '$x + 5 = 0 \\Rightarrow x = -5$.',
        ],
        {
          1: 'Du hast die Vorzeichen umgedreht: $x = -2$ würde aus $(x+2)$ kommen, nicht aus $(x-2)$. Aus $(x-2) = 0$ folgt $x = +2$, aus $(x+5) = 0$ folgt $x = -5$. Vorzeichenregel: Aus $(x - a)$ wird $x = +a$.',
          2: 'Du hast vermutlich beide Faktoren addiert oder summiert, dabei kommt $-3$ heraus. Aber Faktorisierung funktioniert per Produkt-gleich-Null: jeder Faktor wird einzeln auf Null gesetzt. Lösungen: $x = 2$ aus dem ersten und $x = -5$ aus dem zweiten Faktor.',
          3: 'Du hast die Faktoren multipliziert: $2 \\cdot (-5) = -10$. Das gibt aber den konstanten Term im ausmultiplizierten Polynom, nicht die Nullstellen. Nullstellen findest du, indem jeder Faktor einzeln Null gesetzt wird: $x = 2$ und $x = -5$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['faktor-form'] },
      ),
      ni(
        'Faktorisiere $x^2 - 4x - 5$ und gib die SUMME der beiden Nullstellen an.',
        4, 0, '',
        `**Ansatz:** pq-Formel oder Vieta, dann faktorisiert.

**Rechnung:** $x_{1,2} = 2 \\pm \\sqrt{4+5} = 2 \\pm 3$. $x_1 = 5, x_2 = -1$. Summe $= 4$.

**Probe:** $(x-5)(x+1) = x^2 - 4x - 5$. ✓ Vieta-Check: Summe $-p = 4$ ✓.

**Typischer Fehler:** Vieta-Vorzeichen.`,
        [
          'Nullstellen bestimmen.',
          'Vieta oder pq-Formel.',
          'Summe $= -p = 4$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['faktor-form', 'abc-formel'] },
      ),
      mc(
        'Ein Schüler schreibt $(x-3)(x-5) = x^2 - 8x - 15$. Wo liegt der Fehler?',
        [
          'Das Produkt der beiden Konstanten $(-3) \\cdot (-5) = +15$, nicht $-15$. Korrekt: $x^2 - 8x + 15$.',
          'Die Summe der Konstanten ist falsch.',
          'Der Ausdruck ist korrekt.',
          'Es fehlt ein $x$-Term.',
        ],
        0,
        `**Ansatz:** Ausmultiplizieren: $(x-3)(x-5) = x^2 - 5x - 3x + 15 = x^2 - 8x + 15$.

**Rechnung:** Der konstante Term ist $(-3)\\cdot(-5) = +15$.

**Probe:** $x=0$: $(-3)(-5) = 15$, nicht $-15$.

**Typischer Fehler:** Vorzeichen beim Produkt zweier negativer Zahlen.`,
        [
          'Was ist $(-3)(-5)$?',
          'Minus mal Minus = Plus.',
          'Konstanter Term der ausmultiplizierten Form.',
        ],
        {
          1: 'Du hast den Mittelterm beanstandet, aber der ist korrekt: $-3 + (-5) = -8$, also Mittelterm $-8x$. Der echte Fehler ist im konstanten Glied: $(-3)(-5) = +15$, nicht $-15$.',
          2: 'Probe mit $x = 0$: $(0-3)(0-5) = (-3)(-5) = 15$, aber $0^2 - 8 \\cdot 0 - 15 = -15$. $15 \\neq -15$ — also stimmt die Schülerlösung nicht. Korrekt: $x^2 - 8x + 15$.',
          3: 'Der Mittelterm $-8x$ ist tatsächlich korrekt — er stammt aus $-5x - 3x = -8x$. Der Fehler steckt nicht im Mittel-, sondern im Endterm: Minus mal Minus ergibt Plus, also $+15$.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['faktor-form'] },
      ),
      matching(
        'Ordne jede faktorisierte Form ihrer Nullstelle zu.',
        [
          { left: '$(x-4)$',         right: '$x = 4$' },
          { left: '$(x+7)$',         right: '$x = -7$' },
          { left: '$(2x-6)$',        right: '$x = 3$' },
          { left: '$(3x+9)$',        right: '$x = -3$' },
        ],
        `**Ansatz:** Faktor $= 0$ setzen und nach $x$ auflösen.

**Rechnung:** $ax + b = 0 \\Rightarrow x = -b/a$.

**Probe:** Einsetzen in den Faktor ergibt $0$.

**Typischer Fehler:** Vorzeichen und Koeffizient vermischen.`,
        [
          'Jeder Faktor einzeln $= 0$.',
          '$ax + b = 0 \\Rightarrow x = -b/a$.',
          'Vorzeichen umkehren.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['faktor-form', 'vieta'] },
      ),
      ni(
        'Die quadratische Gleichung $x^2 - 6x + 9 = 0$ hat eine doppelte Nullstelle. Wie lautet sie?',
        3, 0, '',
        `**Ansatz:** $x^2 - 6x + 9$ ist ein vollständiges Quadrat — erkennbar an $9 = 3^2$ und Mittelglied $-6x = -2 \\cdot 3 \\cdot x$. Faktorisierte Form: $(x - 3)^2$.

**Rechnung:**
$$x^2 - 6x + 9 = (x - 3)^2 = 0 \\quad \\Rightarrow \\quad x - 3 = 0 \\quad \\Rightarrow \\quad x = 3$$

Die Nullstelle ist $x = 3$ und tritt **doppelt** auf (also mit Vielfachheit $2$).

**Probe:** $9 - 18 + 9 = 0$ ✓. Außerdem: Diskriminante $D = 36 - 36 = 0$ — bestätigt doppelte Lösung.

**Typischer Fehler:** Beide Vorzeichen schreiben ($x = \\pm 3$) wie bei rein-quadratischen Gleichungen — bei doppelter Nullstelle ist es aber nur EIN Wert. Aus $(x-3)^2 = 0$ folgt $x = +3$, NICHT $x = \\pm 3$.`,
        [
          'Erkenne ein vollständiges Quadrat: $a^2 - 2ab + b^2 = (a - b)^2$.',
          'Hier: $x^2 - 2 \\cdot 3 \\cdot x + 3^2 = (x - 3)^2$.',
          'Aus $(x - 3)^2 = 0$ folgt $x - 3 = 0$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['faktor-form'] },
      ),
      mc(
        'Welche Normalform gehört zur faktorisierten Form $(x + 1)(x - 6)$?',
        [
          '$x^2 - 5x - 6$',
          '$x^2 + 5x - 6$',
          '$x^2 - 7x - 6$',
          '$x^2 - 5x + 6$',
        ],
        0,
        `**Ansatz:** Ausmultiplizieren mit der binomischen Verteilung.

**Rechnung:**
$$(x + 1)(x - 6) = x^2 - 6x + x - 6 = x^2 - 5x - 6$$

**Probe:** Vieta-Check: $-1 + 6 = 5$, also $-p = 5 \\Rightarrow p = -5$ ✓. $(-1) \\cdot 6 = -6 = q$ ✓. Nullstellen $x_1 = -1$, $x_2 = 6$ in $x^2 - 5x - 6$ einsetzen: $1 + 5 - 6 = 0$ ✓ und $36 - 30 - 6 = 0$ ✓.

**Typischer Fehler:** Beim Mittelterm Vorzeichen falsch sortieren — Antwort B ($+5x$) entsteht, wenn man $-6 + 1 = -5$ als $+5$ liest. Antwort C ($-7x$) addiert die *Beträge* statt sie vorzeichenrichtig zu summieren.`,
        [
          'Verteile: $(x + 1)(x - 6) = x \\cdot x + x \\cdot (-6) + 1 \\cdot x + 1 \\cdot (-6)$.',
          'Mittelterm: $-6x + x = -5x$. Vorzeichen genau prüfen.',
          'Konstanter Term: $1 \\cdot (-6) = -6$.',
        ],
        {
          1: 'Vorzeichen vom Mittelterm vertauscht — $-6x + x = -5x$ (nicht $+5x$).',
          2: 'Beträge addiert statt vorzeichenrichtig: $|-6| + |1| = 7$. Aber $-6 + 1 = -5$, nicht $-7$.',
          3: 'Konstanter Term falsch: $1 \\cdot (-6) = -6$, nicht $+6$. Plus mal Minus = Minus.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['faktor-form'] },
      ),
      mc(
        'Faktorisiere $x^2 - 9$ vollständig.',
        ['$(x - 3)(x + 3)$', '$(x - 9)(x + 1)$', '$(x - 3)^2$', '$(x + 3)^2$'],
        0,
        `**Ansatz:** Differenz zweier Quadrate — 3. binomische Formel: $a^2 - b^2 = (a - b)(a + b)$.

**Rechnung:** Mit $a = x$ und $b = 3$ (denn $9 = 3^2$): $x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$.

**Probe:** Ausmultiplizieren: $(x - 3)(x + 3) = x^2 + 3x - 3x - 9 = x^2 - 9$ ✓. Nullstellen: $x = 3$ und $x = -3$.

**Typischer Fehler:** Den fehlenden $x$-Term übersehen und das Polynom als $(x - a)^2$ schreiben — das wäre $x^2 - 2ax + a^2$ mit Mittelterm. Hier fehlt aber der Mittelterm — typisches Anzeichen für Differenz zweier Quadrate.`,
        [
          'Erkenne die Form $a^2 - b^2$ — fehlender Mittelterm.',
          '3. binomische Formel: $a^2 - b^2 = (a - b)(a + b)$.',
          'Mit $a = x$, $b = 3$ einsetzen.',
        ],
        {
          1: 'Du hast Faktorenpaare von $-9$ gesucht: $-9 = -9 \\cdot 1$. Probe: $(x-9)(x+1) = x^2 - 8x - 9 \\neq x^2 - 9$. Bei der Differenz zweier Quadrate gibt es keinen Mittelterm.',
          2: '$(x - 3)^2 = x^2 - 6x + 9$ — das ist ein Quadrat mit Mittelterm $-6x$ und konstantem $+9$. Hier ist aber $-9$ konstant und Mittelterm fehlt — also keine Quadratform.',
          3: '$(x + 3)^2 = x^2 + 6x + 9$ — auch hier Mittelterm $+6x$ und Konstante $+9$. Passt nicht zu $x^2 - 9$ (kein Mittelterm, $-9$ statt $+9$).',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['faktor-form'] },
      ),
      ni(
        'Eine quadratische Gleichung in Normalform $x^2 + px + q = 0$ hat die Nullstellen $x_1 = 5$ und $x_2 = -2$. Wie groß ist das absolute Glied $q$?',
        -10, 0, '',
        `**Ansatz:** Faktorisierte Form $(x - x_1)(x - x_2) = (x - 5)(x + 2)$ ausmultiplizieren — oder direkt Vieta: $q = x_1 \\cdot x_2$.

**Rechnung:** $(x - 5)(x + 2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$. Das absolute Glied ist $-10$. Per Vieta: $q = 5 \\cdot (-2) = -10$ ✓.

**Probe:** $5^2 - 3 \\cdot 5 - 10 = 25 - 15 - 10 = 0$ ✓; $(-2)^2 - 3 \\cdot (-2) - 10 = 4 + 6 - 10 = 0$ ✓.

**Typischer Fehler:** Vorzeichen vergessen — $5 \\cdot (-2) = -10$, nicht $+10$. Das Produkt zweier Zahlen verschiedenen Vorzeichens ist negativ.`,
        [
          'Faktorisierte Form: $(x - x_1)(x - x_2)$.',
          'Konstanter Term beim Ausmultiplizieren: $(-x_1) \\cdot (-x_2) = x_1 \\cdot x_2$.',
          'Vorzeichenregel: $5 \\cdot (-2) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['faktor-form', 'abc-formel'] },
      ),
      tf(
        'Wenn $a(x - x_1)(x - x_2) = 0$ mit $a \\neq 0$ gilt, dann ist $x = x_1$ oder $x = x_2$ — andere Lösungen gibt es nicht.',
        true,
        `**Ansatz:** Produkt-gleich-Null-Prinzip. Ein Produkt reeller Zahlen ist genau dann Null, wenn mindestens ein Faktor Null ist.

**Rechnung:** $a \\neq 0$ schließt aus, dass $a$ den Faktor übernimmt. Dann muss $(x - x_1) = 0$ oder $(x - x_2) = 0$ — also $x = x_1$ oder $x = x_2$.

**Probe:** $a = 2$, $x_1 = 1$, $x_2 = 3$: $2(x-1)(x-3) = 0 \\Leftrightarrow (x-1)(x-3) = 0 \\Leftrightarrow x = 1$ oder $x = 3$. Andere Werte: z. B. $x = 2$: $2 \\cdot 1 \\cdot (-1) = -2 \\neq 0$.

**Typischer Fehler:** Glauben, der Leitkoeffizient $a$ würde zusätzliche Lösungen erzeugen — er beeinflusst nur den Skalierungsfaktor, nicht die Anzahl oder Lage der Nullstellen.`,
        [
          'Produkt-Null-Regel: Ein Produkt $= 0$ ⇔ mindestens ein Faktor $= 0$.',
          '$a \\neq 0$ → $a$ kann nicht Null werden.',
          'Also bleibt: $(x - x_1) = 0$ oder $(x - x_2) = 0$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['faktor-form', 'vieta'] },
      ),
      mc(
        'Ein Schüler faktorisiert $x^2 - 5x - 14 = (x - 7)(x - 2)$. Stimmt das?',
        [
          'Nein — $(x-7)(x-2) = x^2 - 9x + 14 \\neq x^2 - 5x - 14$. Korrekt: $(x - 7)(x + 2)$, denn Vieta liefert Lösungen $7$ und $-2$.',
          'Nein — korrekt ist $(x + 7)(x - 2)$, also Vorzeichen beider Faktoren tauschen.',
          'Ja — die Faktorisierung ist korrekt.',
          'Nein — korrekt ist $(x - 7)^2$.',
        ],
        0,
        `**Ansatz:** Mit Vieta die korrekten Lösungen bestimmen, dann mit der Schüler-Faktorisierung vergleichen.

**Rechnung:** Vieta für $x^2 - 5x - 14$: Summe $= -p = 5$, Produkt $= q = -14$. Welche zwei Zahlen? $7 + (-2) = 5$ ✓ und $7 \\cdot (-2) = -14$ ✓. Also $x_1 = 7$, $x_2 = -2$. Faktorisierung: $(x - 7)(x - (-2)) = (x - 7)(x + 2)$.

Schüler-Probe: $(x - 7)(x - 2) = x^2 - 9x + 14$ — Mittelterm und konstanter Term beide falsch.

**Probe:** $(x - 7)(x + 2) = x^2 + 2x - 7x - 14 = x^2 - 5x - 14$ ✓.

**Typischer Fehler:** Vorzeichen des zweiten Faktors falsch übernehmen — bei Lösung $x_2 = -2$ wird der Faktor $(x - (-2)) = (x + 2)$, NICHT $(x - 2)$.`,
        [
          'Bestimme Vieta-Lösungen: Summe $5$, Produkt $-14$.',
          'Welches Zahlenpaar erfüllt BEIDE Bedingungen?',
          'Faktor zur Lösung $x_i$: $(x - x_i)$ — Vorzeichen genau beachten.',
        ],
        {
          1: '$(x + 7)(x - 2)$ ergibt Summe der Lösungen $-7 + 2 = -5$, also Mittelterm $+5x$ in der Normalform — passt nicht zu $-5x$ in der Aufgabe.',
          2: 'Probe widerlegt: $(x-7)(x-2) = x^2 - 9x + 14$. Sowohl Mittelterm ($-9$ statt $-5$) als auch konstanter Term ($+14$ statt $-14$) stimmen nicht.',
          3: '$(x-7)^2 = x^2 - 14x + 49$ — passt weder zu $-5x$ noch zu $-14$. Außerdem hätte Doppelwurzel $D = 0$ verlangt; hier ist $D = 25 + 56 = 81 > 0$, also zwei verschiedene Lösungen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['faktor-form'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-2-3 — Polynomgleichungen & Polynomdivision (6 SGs, 31 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-2-3': {
    // [0] Nullstellenraten
    0: [
      tf(
        'Bei einem Polynom mit ganzzahligen Koeffizienten teilt jede rationale Nullstelle das absolute Glied.',
        true,
        `**Ansatz:** Rationaler Wurzelsatz: wenn $p/q$ Nullstelle ist, teilt $p$ das absolute Glied und $q$ den Leitkoeffizienten.

**Rechnung:** Für $x^3 - 6x^2 + 11x - 6$: mögliche ganzzahlige Nullstellen sind Teiler von $-6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

**Probe:** $x = 1$: $1 - 6 + 11 - 6 = 0$. ✓

**Typischer Fehler:** Teiler des Leitkoeffizienten statt des Absolutglieds prüfen.`,
        [
          'Welche Teiler sind relevant?',
          'Teiler des ABSOLUTGLIEDS.',
          'Positive und negative Teiler.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      mc(
        'Welche Zahlen sollte man als Nullstellen-Kandidaten für $x^3 - 4x^2 + x + 6$ testen?',
        ['$\\pm 1, \\pm 2, \\pm 3, \\pm 6$', 'Nur positive Zahlen', 'Nur $1$ und $-1$', '$\\pm 4$ und $\\pm 1$'],
        0,
        `**Ansatz:** Teiler des Absolutglieds $6$.

**Rechnung:** Teiler von $6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

**Probe:** $x = -1$: $-1 - 4 - 1 + 6 = 0$. ✓

**Typischer Fehler:** Negative Teiler vergessen.`,
        [
          'Absolutglied: $6$.',
          'Alle ganzzahligen Teiler.',
          'Auch negative Vorzeichen.',
        ],
        {
          1: 'Du hast die negativen Kandidaten ausgeschlossen — der rationale Wurzelsatz fordert aber alle Vorzeichen-Varianten der Teiler. Beispiel: $P(-1) = -1 - 4 - 1 + 6 = 0$ ist eine Nullstelle, die du verpasst hättest.',
          2: 'Mit nur $\\pm 1$ als Kandidaten verpasst du andere Nullstellen wie $x = 2$ oder $x = -1$. Der rationale Wurzelsatz fordert ALLE Teiler des Absolutglieds, nicht nur die kleinsten.',
          3: 'Du hast $4$ als Teiler von $6$ angenommen — $4$ teilt $6$ aber NICHT (denn $6/4 = 1{,}5$ ist nicht ganzzahlig). Korrekt sind nur ganzzahlige Teiler: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      ni(
        'Finde eine ganzzahlige Nullstelle von $x^3 - 6x^2 + 11x - 6$ durch Testen. Gib die kleinste positive an.',
        1, 0, '',
        `**Ansatz:** Teiler von $6$ testen: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

**Rechnung:** $x = 1$: $1 - 6 + 11 - 6 = 0$. ✓

**Probe:** Alle drei Nullstellen: $1, 2, 3$.

**Typischer Fehler:** Nicht systematisch testen.`,
        [
          'Teiler von $6$: $1, 2, 3, 6$.',
          'Mit $x = 1$ anfangen.',
          'Polynom einsetzen.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      mc(
        'Ein Schüler testet bei $2x^3 + 3x^2 - 8x - 12$ die Zahlen $\\pm 1, \\pm 2$ als Kandidaten (Teiler von $-12$). Er findet keine Nullstelle und gibt auf. Was hat er übersehen?',
        [
          'Es fehlen die Kandidaten $\\pm 3, \\pm 4, \\pm 6, \\pm 12$ (alle Teiler von $-12$). Bei $x = 2$ wäre $16 + 12 - 16 - 12 = 0$.',
          'Er hätte quadratische Ergänzung anwenden müssen.',
          'Die Gleichung hat keine rationalen Nullstellen.',
          'Er hätte den Leitkoeffizienten nehmen müssen.',
        ],
        0,
        `**Ansatz:** ALLE Teiler prüfen, nicht nur die kleinsten.

**Rechnung:** Bei $x=2$: $2 \\cdot 8 + 3 \\cdot 4 - 16 - 12 = 16 + 12 - 16 - 12 = 0$. ✓

**Probe:** $x = 2$ ist Nullstelle.

**Typischer Fehler:** Zu wenige Kandidaten testen.`,
        [
          'Alle Teiler von $12$.',
          '$\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$.',
          'Systematisch durchgehen.',
        ],
        {
          1: 'Quadratische Ergänzung gilt nur für quadratische Polynome.',
          2: 'Doch — $x = 2$ ist Nullstelle.',
          3: 'Der rationale Wurzelsatz nutzt Absolutglied als Zähler.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      matching(
        'Ordne jedem Polynom seine ganzzahligen Nullstellen-Kandidaten zu.',
        [
          { left: '$x^2 - 4$',                   right: '$\\pm 1, \\pm 2, \\pm 4$' },
          { left: '$x^3 - 7x + 6$',              right: '$\\pm 1, \\pm 2, \\pm 3, \\pm 6$' },
          { left: '$x^3 + x^2 - 2x$',            right: '$0, \\pm 1, \\pm 2$ (über $x$ ausklammern)' },
          { left: '$x^2 + 9$',                   right: '$\\pm 1, \\pm 3, \\pm 9$ (aber keine reelle NS)' },
        ],
        `**Ansatz:** Absolutglied-Teiler finden.

**Rechnung:** In jeder Zeile: was sind die Teiler des konstanten Terms?

**Probe:** Systematisch testen.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Absolutglied als Schlüssel.',
          'Teiler sind Kandidaten.',
          'Auch negative.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      ni(
        'Finde die einzige negative ganzzahlige Nullstelle von $P(x) = x^3 - 4x^2 + x + 6$. Gib sie an.',
        -1, 0, '',
        `**Ansatz:** Teiler von $6$ als Kandidaten testen: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Negative der Reihe nach prüfen.

**Rechnung:**
- $P(-1) = -1 - 4 - 1 + 6 = 0$ ✓
- $P(-2) = -8 - 16 - 2 + 6 = -20 \\neq 0$
- $P(-3) = -27 - 36 - 3 + 6 = -60 \\neq 0$
- $P(-6) = -216 - 144 - 6 + 6 = -360 \\neq 0$

Die einzige negative ganzzahlige Nullstelle ist $x = -1$. Die anderen beiden sind positiv: $P(2) = 8 - 16 + 2 + 6 = 0$ und $P(3) = 27 - 36 + 3 + 6 = 0$.

**Probe:** Faktorisierung $P(x) = (x+1)(x-2)(x-3)$. Ausmultiplizieren: $(x+1)(x-2) = x^2 - x - 2$; mal $(x-3)$: $x^3 - 3x^2 - x^2 + 3x - 2x + 6 = x^3 - 4x^2 + x + 6$ ✓.

**Typischer Fehler:** Sich auf die erste positive Nullstelle stürzen und negative Kandidaten gar nicht testen. Der rationale Wurzelsatz fordert, *alle* Vorzeichen-Kombinationen der Teiler zu prüfen — gerade negative gehören dazu.`,
        [
          'Teiler von $6$ (Absolutglied): $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.',
          'Probiere systematisch die negativen Kandidaten: $-1, -2, -3, -6$.',
          'Sobald $P(\\text{Wert}) = 0$ herauskommt, hast du die Nullstelle.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      ni(
        'Finde die kleinste positive ganzzahlige Nullstelle von $P(x) = x^3 + 2x^2 - 5x - 6$. Gib sie an.',
        2, 0, '',
        `**Ansatz:** Teiler des Absolutglieds $-6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Positive aufsteigend testen.

**Rechnung:**
- $P(1) = 1 + 2 - 5 - 6 = -8 \\neq 0$
- $P(2) = 8 + 8 - 10 - 6 = 0$ ✓

Die kleinste positive ganzzahlige Nullstelle ist $x = 2$.

**Probe:** Polynomdivision $(x-2)$ liefert $x^2 + 4x + 3 = (x+1)(x+3)$. Damit $P(x) = (x-2)(x+1)(x+3)$ — alle drei Nullstellen $2, -1, -3$. Einsetzen: $(x-2) = 0$ bei $x=2$ ✓; $P(2) = 8 + 8 - 10 - 6 = 0$ ✓.

**Typischer Fehler:** Bei $P(1) \\neq 0$ aufgeben — der Wurzelsatz fordert, ALLE Teiler systematisch durchzugehen, nicht nur den ersten. Bei $x = 2$ kommt die erste positive Nullstelle.`,
        [
          'Welche Teiler hat das Absolutglied $-6$? — $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.',
          'Beginne mit $x = 1$ und arbeite dich aufsteigend hoch.',
          'Bei $P(2) = 8 + 8 - 10 - 6 = 0$ hast du die kleinste positive Nullstelle.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['rat-wurzel'] },
      ),
      mc(
        'Welche ganzzahligen Kandidaten sollte man bei $P(x) = x^4 + x^3 - 7x^2 - x + 6$ als Nullstellen testen?',
        [
          '$\\pm 1, \\pm 2, \\pm 3, \\pm 6$',
          '$\\pm 1$ bis $\\pm 7$',
          'Nur Teiler des Leitkoeffizienten ($\\pm 1$)',
          'Alle Teiler des höchsten und niedrigsten Koeffizienten',
        ],
        0,
        `**Ansatz:** Rationaler Wurzelsatz: ganzzahlige Nullstellen teilen das Absolutglied — hier $6$.

**Rechnung:** Teiler von $6$: $1, 2, 3, 6$. Mit Vorzeichen: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Probetest: $P(1) = 1 + 1 - 7 - 1 + 6 = 0$ ✓ — Nullstelle gefunden.

**Probe:** $P(1) = 0$ ✓, weitere NS: $P(-1) = 1 - 1 - 7 + 1 + 6 = 0$ ✓, $P(2) = 16 + 8 - 28 - 2 + 6 = 0$ ✓, $P(-3) = 81 - 27 - 63 + 3 + 6 = 0$ ✓.

**Typischer Fehler:** Den Mittelterm-Koeffizienten ($-7$) als Schlüssel betrachten — der rationale Wurzelsatz schaut NUR auf das absolute Glied (und ggf. den Leitkoeffizienten bei rationalen NS).`,
        [
          'Welcher Koeffizient ist relevant? — Nur das absolute Glied.',
          'Hier: Absolutglied $6$.',
          'Teiler von $6$ mit beiden Vorzeichen.',
        ],
        {
          1: 'Du hast die Zahl $7$ aus dem $-7x^2$-Koeffizienten genommen — der ist aber irrelevant. Der rationale Wurzelsatz schaut nur auf das absolute Glied $6$, also Teiler $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.',
          2: 'Bei Leitkoeffizient $1$ und ganzzahligen Nullstellen sind ALLE rationalen NS auch ganzzahlig — du brauchst nicht nur $\\pm 1$, sondern alle Teiler des Absolutglieds. Mit nur $\\pm 1$ würdest du $x = 2$ und $x = -3$ verpassen.',
          3: 'Diese Regel gilt für RATIONALE Nullstellen $p/q$ — hier suchst du aber GANZZAHLIGE Nullstellen, da der Leitkoeffizient $1$ ist. Reduziert sich auf Teiler des Absolutglieds.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['rat-wurzel'] },
      ),
    ],
    // [1] Polynomdivision
    1: [
      tf(
        'Polynomdivision durch $(x - x_0)$ senkt den Grad des Polynoms um 1.',
        true,
        `**Ansatz:** Division durch Linearfaktor: Grad sinkt um $1$.

**Rechnung:** $(x^3 + ax^2 + bx + c) : (x - x_0)$ liefert $x^2 + \\ldots$ — Grad $2$.

**Probe:** $x^3 - 6x^2 + 11x - 6 : (x - 1) = x^2 - 5x + 6$.

**Typischer Fehler:** Grad bleibt gleich annehmen.`,
        [
          'Was passiert beim Dividieren?',
          'Grad wird kleiner.',
          'Um genau $1$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['polydiv'] },
      ),
      mc(
        'Was ist der Quotient von $(x^2 - 5x + 6) : (x - 2)$?',
        ['$x - 3$', '$x + 3$', '$x - 6$', '$x^2 - 2x$'],
        0,
        `**Ansatz:** Polynomdivision.

**Rechnung:** $x^2 : x = x$; $x \\cdot (x-2) = x^2 - 2x$; Rest: $-3x + 6$. $-3x : x = -3$; $-3 \\cdot (x-2) = -3x + 6$; Rest $0$.

**Probe:** $(x-2)(x-3) = x^2 - 5x + 6$. ✓

**Typischer Fehler:** Vorzeichen beim Subtrahieren vergessen.`,
        [
          'Höchster Grad zuerst.',
          'Schrittweise dividieren.',
          'Rest muss $0$ werden.',
        ],
        {
          1: '$(x+3)(x-2) = x^2 + x - 6$, nicht $x^2 - 5x + 6$.',
          2: '$(x-6)(x-2) = x^2 - 8x + 12$.',
          3: 'Das ist kein reduziertes Polynom.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['polydiv'] },
      ),
      ni(
        'Führe $(x^3 - 7x + 6) : (x - 1)$ aus. Gib den Koeffizienten des $x^2$-Terms im Quotienten an.',
        1, 0, '',
        `**Ansatz:** Polynomdivision durch $(x-1)$.

**Rechnung:** $x^3/(x) = x^2$. $x^2(x-1) = x^3 - x^2$. Rest: $x^2 - 7x + 6$. Weiter: $x^2/x = x$ (Koeffizient $1$). Dann $x - 6$.

**Probe:** Quotient $x^2 + x - 6 = (x+3)(x-2)$.

**Typischer Fehler:** Die fehlenden $x^2$-Terme im Dividenden ignorieren.`,
        [
          'Höchster Term: $x^3/x = x^2$.',
          'Koeffizient $1$.',
          'Weiter dividieren.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['polydiv'] },
      ),
      ni(
        'Führe $(x^3 - 6x^2 + 11x - 6) : (x - 1)$ aus. Gib das konstante Glied des Quotienten an.',
        6, 0, '',
        `**Ansatz:** Schrittweise Polynomdivision.

**Rechnung:** Quotient: $x^2 - 5x + 6$. Konstantes Glied: $6$.

**Probe:** $(x-1)(x^2 - 5x + 6) = x^3 - 6x^2 + 11x - 6$. ✓

**Typischer Fehler:** Zwischenergebnisse verlieren.`,
        [
          'Quotient vollständig ausrechnen.',
          'Bis zum konstanten Term.',
          'Probe durch Rückmultiplikation.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['polydiv'] },
      ),
      mc(
        'Ein Schüler rechnet $(x^2 + 3x + 2) : (x + 1) = x + 2$ und behauptet, die Division sei korrekt. Welche Prüfung ist angemessen?',
        [
          'Rückmultiplikation: $(x+1)(x+2) = x^2 + 3x + 2$. ✓ Die Rechnung stimmt.',
          'Er müsste $x^2 + 3x + 2 = 2$ setzen.',
          'Division ist ungültig wegen negativer Vorzeichen.',
          'Er müsste durch $x$ teilen.',
        ],
        0,
        `**Ansatz:** Probe durch Rückmultiplikation.

**Rechnung:** $(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$. ✓

**Probe:** Stimmt überein.

**Typischer Fehler:** Probe weglassen.`,
        [
          'Wie prüft man eine Division?',
          'Multiplikation rückwärts.',
          '(Divisor)(Quotient) = Dividend.',
        ],
        {
          1: 'Du würdest den Dividend $= 2$ setzen — das prüft aber nichts. Die Polynomdivision ist eine Identität für ALLE $x$, nicht eine Gleichung mit der Lösung $2$. Korrekte Probe: Quotient $\\cdot$ Divisor $=$ Dividend ausmultiplizieren.',
          2: 'Polynomdivisionen mit positiven Koeffizienten sind genauso gültig wie mit negativen — der Wertebereich der Koeffizienten ist irrelevant. Die richtige Probe ist eine algebraische Rückmultiplikation, keine Vorzeichenprüfung.',
          3: 'Divisor ist tatsächlich $(x+1)$, nicht $x$ allein. Aber die Probe lautet nicht „durch $x$ teilen", sondern „mit dem Divisor $(x+1)$ multiplizieren": $(x+1)(x+2) = x^2 + 3x + 2$ ✓.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['polydiv'] },
      ),
      sorting(
        'Bringe die Schritte einer Polynomdivision $(x^2 + 5x + 6) : (x + 2)$ in die richtige Reihenfolge.',
        [
          'Höchster Grad: $x^2/x = x$',
          'Multiplizieren: $x \\cdot (x+2) = x^2 + 2x$',
          'Subtrahieren: $(x^2 + 5x + 6) - (x^2 + 2x) = 3x + 6$',
          'Weiter: $3x/x = 3$, $3(x+2) = 3x + 6$, Rest $0$. Quotient: $x + 3$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Schema für Polynomdivision.

**Rechnung:** Quotient $x + 3$.

**Probe:** $(x+2)(x+3) = x^2 + 5x + 6$. ✓

**Typischer Fehler:** Subtraktionsschritt falsch (Vorzeichen).`,
        [
          'Immer höchsten Grad zuerst.',
          'Multiplizieren und subtrahieren.',
          'Wiederholen bis Rest.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['polydiv'] },
      ),
      tf(
        'Bei der Polynomdivision müssen Dividend und Divisor nach absteigenden Potenzen sortiert sein, fehlende Potenzen werden als $0 \\cdot x^k$ ergänzt.',
        true,
        `**Ansatz:** Polynomdivision wie schriftliche Division — die Stellen müssen passen.

**Rechnung:** Beispiel $x^3 - 8 = x^3 + 0 \\cdot x^2 + 0 \\cdot x - 8$. Ohne die $0$-Spalten verschieben sich die Schritte und der Quotient wird falsch.

**Probe:** $(x^3 + 0x^2 + 0x - 8) : (x - 2) = x^2 + 2x + 4$ Rest $0$ — exakt die 3. binom. Formel.

**Typischer Fehler:** Lückenhafte Polynome direkt dividieren ohne $0$-Ergänzung — Quotient stimmt dann nicht.`,
        [
          'Was passiert bei lückenhaften Polynomen?',
          'Fehlende Potenzen einfügen — als $0$.',
          'Sonst verschieben sich die Stellen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['polydiv'] },
      ),
      ni(
        'Führe $(2x^3 + 3x^2 - 1) : (x + 1)$ aus und gib den Koeffizienten des $x$-Terms im Quotienten an.',
        1, 0, '',
        `**Ansatz:** Polynomdivision mit ergänztem $0 \\cdot x$-Term im Dividenden.

**Rechnung:** Schreibe als $2x^3 + 3x^2 + 0 \\cdot x - 1$. Polynomdivision durch $(x+1)$:
$$\\begin{aligned} 2x^3 / x &= 2x^2 \\\\ 2x^2 (x+1) &= 2x^3 + 2x^2 \\\\ \\text{Rest:} \\quad x^2 + 0x - 1 \\\\ x^2 / x &= x \\\\ x(x+1) &= x^2 + x \\\\ \\text{Rest:} \\quad -x - 1 \\\\ -x/x &= -1 \\\\ -1 \\cdot (x+1) &= -x - 1 \\quad \\Rightarrow \\quad \\text{Rest } 0 \\end{aligned}$$

Quotient: $2x^2 + x - 1$. Koeffizient des $x$-Terms: $1$.

**Probe:** $(x+1)(2x^2 + x - 1) = 2x^3 + x^2 - x + 2x^2 + x - 1 = 2x^3 + 3x^2 - 1$ ✓.

**Typischer Fehler:** Den fehlenden $x$-Term im Dividenden überspringen — dann passt die Stelle der Restbildung nicht und der Quotient kommt mit falscher Stelle heraus.`,
        [
          'Dividend lückenhaft? — $0 \\cdot x$ ergänzen.',
          'Schritt-für-Schritt: höchster Grad zuerst, multiplizieren, subtrahieren.',
          'Quotient lautet $2x^2 + x - 1$ — Koeffizient des $x$-Terms ist gefragt.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['polydiv'] },
      ),
      ni(
        'Führe $(x^3 - 8) : (x - 2)$ aus und gib den Koeffizienten des $x$-Terms im Quotienten an.',
        2, 0, '',
        `**Ansatz:** Im Dividenden fehlen die $x^2$- und $x$-Terme — als $0$-Koeffizienten ergänzen, dann normal dividieren.

**Rechnung:** Schreibe als $x^3 + 0 \\cdot x^2 + 0 \\cdot x - 8$:
$$\\begin{aligned} (x^3 + 0x^2 + 0x - 8) &: (x-2) = x^2 + 2x + 4 \\\\ -(x^3 - 2x^2) & \\\\ \\hline 2x^2 + 0x & \\\\ -(2x^2 - 4x) & \\\\ \\hline 4x - 8 & \\\\ -(4x - 8) & \\\\ \\hline 0 & \\end{aligned}$$

Quotient: $x^2 + 2x + 4$. Koeffizient des $x$-Terms: $2$.

**Probe:** $(x-2)(x^2 + 2x + 4) = x^3 + 2x^2 + 4x - 2x^2 - 4x - 8 = x^3 - 8$ ✓ — das ist die dritte binomische Formel $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.

**Typischer Fehler:** Die fehlenden Terme einfach weglassen und mit $x^3 / (x-2)$ direkt loslegen — dann passen die Stellen nicht mehr und der Quotient wird falsch.`,
        [
          'Fehlende Potenzen mit $0$-Koeffizient ergänzen: $x^3 + 0 x^2 + 0 x - 8$.',
          'Schrittweise dividieren — bei jedem Schritt höchsten Grad.',
          'Erinnerung: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ — das ist der Quotient.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['polydiv'] },
      ),
    ],
    // [2] Rest = 0
    2: [
      tf(
        'Wenn der Rest einer Polynomdivision $P(x) : (x - x_0)$ gleich $0$ ist, ist $x_0$ eine Nullstelle von $P$.',
        true,
        `**Ansatz:** Das ist der Kern des Linearfaktorsatzes.

**Rechnung:** $P(x) = (x - x_0) \\cdot Q(x) + R$. Wenn $R = 0$, dann $P(x_0) = 0$.

**Probe:** Einsetzen $x = x_0$ gibt $0$.

**Typischer Fehler:** Rest ungleich $0$ akzeptieren.`,
        [
          'Was bedeutet Rest $0$?',
          'Dividend durch Divisor aufgeht.',
          'Linearfaktor = Nullstelle.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['polydiv-rest'] },
      ),
      mc(
        'Führt eine Polynomdivision $P(x) : (x - 3)$ zu Rest $0$, ist dann $x = 3$ eine Nullstelle von $P$?',
        ['Ja', 'Nein', 'Nur wenn Grad $\\geq 3$', 'Nur bei geraden Exponenten'],
        0,
        `**Ansatz:** Linearfaktorsatz.

**Rechnung:** $P(3) = (3-3) \\cdot Q(3) + 0 = 0$.

**Probe:** Definition einer Nullstelle.

**Typischer Fehler:** Beziehung zwischen Rest und Nullstelle nicht sehen.`,
        [
          'Rest $= 0$: $(x-x_0)$ ist Faktor.',
          'Faktor $(x-x_0) = 0$ bei $x = x_0$.',
          'Also $P(x_0) = 0$.',
        ],
        {
          1: 'Doch — genau das ist die Aussage des Linearfaktorsatzes: Aus Rest $= 0$ folgt $P(3) = 0$, also ist $x = 3$ Nullstelle. Das gilt unabhängig von Grad oder Form des Polynoms.',
          2: 'Die Aussage gilt für JEDEN Grad ab $1$ — auch quadratisch oder linear. Ein einfaches Beispiel: $(x-3)$ teilt $x-3$ ohne Rest, und tatsächlich ist $x = 3$ die Nullstelle.',
          3: 'Die Aussage gilt unabhängig von Exponenten — auch ungerade Polynomgrade ($P(x) = x^3 - 27 = (x-3)(x^2 + 3x + 9)$) zeigen den Zusammenhang: Rest $0 \\Leftrightarrow$ Nullstelle.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['polydiv-rest'] },
      ),
      ni(
        'Prüfe, ob $x = 2$ Nullstelle von $P(x) = x^3 - 4x^2 + x + 6$ ist. Führe die Division $P(x) : (x-2)$ aus und gib den Rest an.',
        0, 0, '',
        `**Ansatz:** Rest $= P(2)$.

**Rechnung:** $P(2) = 8 - 16 + 2 + 6 = 0$. Rest $= 0$.

**Probe:** $x = 2$ ist Nullstelle.

**Typischer Fehler:** Einsetzen vergessen.`,
        [
          '$P(2)$ direkt einsetzen.',
          'Das IST der Rest.',
          'Wenn $P(2) = 0$: Nullstelle.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['polydiv-rest'] },
      ),
      mc(
        'Ein Schüler dividiert $P(x) = x^2 + x + 1$ durch $(x - 1)$ und erhält Rest $3$. Er sagt "Also ist $x = 1$ keine Nullstelle — das ist OK". Wo liegt das Missverständnis?',
        [
          'Das Missverständnis liegt NICHT vor — der Schluss ist korrekt: Rest $3 \\neq 0$ heißt $x = 1$ ist keine Nullstelle.',
          'Er hätte mehrmals dividieren müssen.',
          'Der Rest muss negativ sein.',
          'Polynomdivision gibt immer Rest $0$.',
        ],
        0,
        `**Ansatz:** Rest $\\neq 0$ bedeutet eindeutig: keine Nullstelle.

**Rechnung:** $P(1) = 1 + 1 + 1 = 3 \\neq 0$.

**Probe:** Konsistent.

**Typischer Fehler:** Glauben, dass Rest $\\neq 0$ ein Fehler wäre — ist es nicht.`,
        [
          'Was sagt Rest $\\neq 0$?',
          'Keine Nullstelle.',
          'Das ist eine gültige Aussage.',
        ],
        {
          1: 'Mehrmaliges Dividieren hilft nicht — Rest bleibt gleich.',
          2: 'Rest kann beliebig sein.',
          3: 'Nicht immer — nur bei einem Linearfaktor, der Nullstelle ist.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['polydiv-rest'] },
      ),
      tf(
        'Für $P(x) = x^3 - 7x + 6$ ist $x = 1$ eine Nullstelle.',
        true,
        `**Ansatz:** Einsetzen.

**Rechnung:** $P(1) = 1 - 7 + 6 = 0$. ✓

**Probe:** Polynomdivision $(x-1)$ würde Rest $0$ geben.

**Typischer Fehler:** Rechenfehler beim Einsetzen.`,
        [
          '$P(1) = ?$',
          'Einsetzen und ausrechnen.',
          'Ergibt $0$?',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['polydiv-rest', 'rat-wurzel'] },
      ),
      ni(
        'Welcher Rest entsteht bei der Polynomdivision $(x^3 - 4x + 5) : (x - 1)$? (Restsatz nutzen)',
        2, 0, '',
        `**Ansatz:** Restsatz: Rest von $P(x) : (x - a)$ ist $P(a)$ — keine vollständige Division nötig.

**Rechnung:** Mit $a = 1$: $P(1) = 1 - 4 + 5 = 2$. Also Rest $= 2$.

**Probe:** Polynomdivision liefert Quotient $x^2 + x - 3$ mit Rest $2$: $(x-1)(x^2 + x - 3) + 2 = x^3 + x^2 - 3x - x^2 - x + 3 + 2 = x^3 - 4x + 5$ ✓.

**Typischer Fehler:** $a$ aus $(x - a)$ falsch ablesen — bei $(x - 1)$ ist $a = +1$, nicht $-1$. Außerdem: Volle Polynomdivision durchführen, obwohl der Restsatz die Rechnung mit einem Einsetzen erledigt.`,
        [
          'Restsatz: Rest $= P(a)$ bei Division durch $(x - a)$.',
          'Hier: $a = 1$ (Vorzeichen aus $(x - 1)$).',
          'Setze $x = 1$ ein und rechne aus.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['polydiv-rest'] },
      ),
      tf(
        'Wenn alle Teiler des Absolutglieds als Kandidaten Rest $\\neq 0$ liefern, hat das Polynom keine ganzzahligen Nullstellen.',
        true,
        `**Ansatz:** Rationaler Wurzelsatz + Restsatz kombinieren: Ganzzahlige Nullstellen müssen Teiler des Absolutglieds sein. Wenn alle versagen, gibt es keine.

**Rechnung:** Beispiel $P(x) = x^3 + x + 1$ (Absolutglied $1$, Teiler $\\pm 1$): $P(1) = 3 \\neq 0$, $P(-1) = -1 \\neq 0$. Also keine ganzzahlige Nullstelle.

**Probe:** Reelle Lösung von $P(x) = 0$ ist $x \\approx -0{,}6824$ — irrational, nicht ganzzahlig.

**Typischer Fehler:** Unter „keine ganzzahlige Nullstelle" verstehen, das Polynom hätte gar keine Nullstellen — dem ist nicht so; nur die rationalen/ganzzahligen Kandidaten versagen, irrational können trotzdem existieren.`,
        [
          'Welche Werte sind ganzzahlige Kandidaten? — Teiler des Absolutglieds.',
          'Wenn ALLE Rest $\\neq 0$ ergeben, ist keiner Nullstelle.',
          'Aber irrationale/komplexe Lösungen können existieren.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['polydiv-rest', 'rat-wurzel'] },
      ),
      ni(
        'Welcher Rest entsteht bei der Polynomdivision $(x^3 + x - 5) : (x - 2)$? (Restsatz nutzen)',
        5, 0, '',
        `**Ansatz:** Restsatz: Der Rest von $P(x) : (x - a)$ ist immer $P(a)$ — kein vollständiges Dividieren nötig.

**Rechnung:** Mit $a = 2$:
$$P(2) = 2^3 + 2 - 5 = 8 + 2 - 5 = 5$$

Also Rest $= 5$.

**Probe:** Volle Polynomdivision liefert Quotient $x^2 + 2x + 5$ und Rest $5$: $(x-2)(x^2 + 2x + 5) + 5 = x^3 + 2x^2 + 5x - 2x^2 - 4x - 10 + 5 = x^3 + x - 5$ ✓.

**Typischer Fehler:** Den Restsatz nicht nutzen und mühsam die volle Polynomdivision durchführen — bei reiner Restfrage genügt das Einsetzen von $a$ in $P(x)$. Außerdem: $(x - 2)$ heißt $a = +2$, nicht $-2$.`,
        [
          'Restsatz: Rest von $P(x) : (x - a)$ ist $P(a)$.',
          'Hier: $a = 2$ (aus dem Faktor $x - 2$).',
          'Setze $x = 2$ in $P(x)$ ein und rechne aus.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['polydiv-rest'] },
      ),
    ],
    // [3] Horner-Schema
    3: [
      tf(
        'Das Horner-Schema ermöglicht sowohl Polynomwert-Berechnung als auch Polynomdivision.',
        true,
        `**Ansatz:** Horner-Schema ist ein kompakteres Rechenverfahren.

**Rechnung:** Die Koeffizienten in einer Tabelle, multiplizieren und addieren.

**Probe:** Endergebnis = $P(x_0)$; die Zwischenwerte sind die Koeffizienten des Quotienten.

**Typischer Fehler:** Die doppelte Nutzung nicht kennen.`,
        [
          'Horner ist vielseitig.',
          'Polynomwert UND Quotient.',
          'In einer Tabelle.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['horner'] },
      ),
      mc(
        'Wie berechnet man $P(2)$ für $P(x) = 2x^3 - 5x^2 + 3x - 1$ mit Horner?',
        ['$2 \\to 2\\cdot 2 + (-5) = -1 \\to -1\\cdot 2 + 3 = 1 \\to 1\\cdot 2 + (-1) = 1$', 'Alle Koeffizienten addieren', 'Polynomdivision durchführen', 'Koeffizienten mit $x_0$ multiplizieren'],
        0,
        `**Ansatz:** Horner-Schema: bei jedem Schritt den Vorgänger mit $x_0$ multiplizieren und den nächsten Koeffizienten addieren.

**Rechnung:** $P(2) = 1$. Schritte: $2, -1, 1, 1$.

**Probe:** $P(2) = 16 - 20 + 6 - 1 = 1$. ✓

**Typischer Fehler:** Die Schritte-Logik nicht verstehen.`,
        [
          'Startwert: Leitkoeffizient.',
          'Jeder Schritt: $\\cdot x_0 + $ nächster Koeffizient.',
          'Endwert = $P(x_0)$.',
        ],
        {
          1: 'Wenn du nur die Koeffizienten addierst ($2 + (-5) + 3 + (-1) = -1$), ergibt das $P(1)$, nicht $P(2)$. Horner verlangt für jeden Schritt: Vorgänger $\\cdot x_0$ plus nächster Koeffizient — also Multiplikation und Addition abwechselnd.',
          2: 'Die explizite Polynomdivision ist zwar verwandt, aber Horner ist die KOMPAKTE Form. Die Schritte sind nicht „Polynomdivision durchführen", sondern direkt das schematische Multiplizieren-und-Addieren in einer Zeile.',
          3: 'Wenn du nur die Koeffizienten mit $x_0$ multiplizierst ($2 \\cdot 2, -5 \\cdot 2, \\ldots$), ohne den Vorgänger einzubeziehen, fehlt die Addition aus dem Horner-Schritt. Horner bündelt beides: $\\text{Vorgänger} \\cdot x_0 + \\text{nächster Koeffizient}$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['horner'] },
      ),
      ni(
        'Berechne $P(3)$ für $P(x) = x^3 - 5x + 2$ mit dem Horner-Schema.',
        14, 0, '',
        `**Ansatz:** Horner-Tabelle: Koeffizienten $[1, 0, -5, 2]$ (fehlender $x^2$-Term ist $0$).

**Rechnung:** Start: $1$. $1 \\cdot 3 + 0 = 3$. $3 \\cdot 3 + (-5) = 4$. $4 \\cdot 3 + 2 = 14$.

**Probe:** $P(3) = 27 - 15 + 2 = 14$. ✓

**Typischer Fehler:** Den $0$-Koeffizienten für fehlenden $x^2$-Term vergessen.`,
        [
          'Fehlende Terme als $0$ einfügen.',
          'Schrittweise nach Horner.',
          'Endwert prüfen.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['horner'] },
      ),
      mc(
        'Ein Schüler füllt die Horner-Tabelle für $P(x) = x^3 - 2x + 5$ aus, vergisst aber den fehlenden $x^2$-Term. Wie sollte er es richtig machen?',
        [
          'Fehlende Terme als $0$-Koeffizient einfügen: $[1, 0, -2, 5]$.',
          'Den Koeffizienten überspringen.',
          'Den Term durch $1$ ersetzen.',
          'Polynomdivision stattdessen.',
        ],
        0,
        `**Ansatz:** Horner funktioniert nur mit vollständiger Koeffizientenreihe.

**Rechnung:** $P(x) = 1 \\cdot x^3 + 0 \\cdot x^2 - 2 \\cdot x + 5$.

**Probe:** Mit fehlenden $0$-Koeffizienten in der Tabelle rechnen.

**Typischer Fehler:** Fehlende Terme einfach weglassen — Horner-Schritte passen dann nicht mehr.`,
        [
          'Was fehlt in $x^3 - 2x + 5$?',
          '$x^2$-Term.',
          '$0 \\cdot x^2$.',
        ],
        {
          1: 'Wenn du den Koeffizienten überspringst, schiebt sich die ganze Tabelle um eine Stelle. Dann passt der Schritt $\\cdot x_0 + $ nächster Koeffizient zur falschen Potenz, und das Ergebnis ist $P$ an einer ganz anderen Stelle als gewollt.',
          2: 'Wenn du den fehlenden $x^2$-Term durch $1$ ersetzt, verschiebst du das Polynom: aus $x^3 - 2x + 5$ wird $x^3 + x^2 - 2x + 5$ — eine andere Funktion. Korrekt ist der $0$-Koeffizient: $0 \\cdot x^2$ trägt nichts bei und passt formell in die Horner-Reihe.',
          3: 'Horner IST die kompakte Alternative zur Polynomdivision — du sollst sie benutzen, nicht weglassen. Die Lücke beim fehlenden $x^2$-Term wird durch einen $0$-Eintrag in der Koeffizientenliste geschlossen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['horner'] },
      ),
      sorting(
        'Bringe die Horner-Schritte für $P(x) = x^3 + 2x^2 - x - 2$ bei $x_0 = 1$ in die richtige Reihenfolge.',
        [
          'Koeffizienten: $[1, 2, -1, -2]$',
          'Start: $1$',
          '$1 \\cdot 1 + 2 = 3$',
          '$3 \\cdot 1 + (-1) = 2$',
          '$2 \\cdot 1 + (-2) = 0$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Horner Schritt für Schritt.

**Rechnung:** Endwert $0 = P(1)$. Also $x=1$ Nullstelle.

**Probe:** $P(1) = 1 + 2 - 1 - 2 = 0$. ✓

**Typischer Fehler:** Reihenfolge vertauschen.`,
        [
          'Koeffizienten vollständig.',
          'Schrittweise multiplizieren und addieren.',
          'Endwert = $P(x_0)$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['horner'] },
      ),
      ni(
        'Berechne $P(-1)$ für $P(x) = x^3 - 4x + 5$ mit dem Horner-Schema.',
        8, 0, '',
        `**Ansatz:** Koeffizientenliste $[1, 0, -4, 5]$ (fehlender $x^2$-Term ist $0$). Horner-Regel mit $x_0 = -1$.

**Rechnung:**

| Koeffizient | $1$ | $0$ | $-4$ | $5$ |
|---|---|---|---|---|
| Vorgabe |  | $-1$ | $1$ | $3$ |
| Summe | $1$ | $-1$ | $-3$ | $\\mathbf{8}$ |

Schritte: Start $1$; $1 \\cdot (-1) + 0 = -1$; $-1 \\cdot (-1) + (-4) = 1 - 4 = -3$; $-3 \\cdot (-1) + 5 = 3 + 5 = 8$.

**Probe:** Direkt einsetzen: $P(-1) = -1 - 0 + 4 + 5 = 8$ ✓ (mit $(-1)^3 = -1$, $-4 \\cdot (-1) = +4$).

**Typischer Fehler:** Den fehlenden $x^2$-Term ohne $0$-Spalte überspringen — dann verschiebt sich das Schema. Oder Vorzeichen bei $-3 \\cdot (-1)$ verlieren — Minus mal Minus ist Plus.`,
        [
          'Koeffizienten vollständig, fehlende mit $0$ ergänzen: $[1, 0, -4, 5]$.',
          'Horner-Regel: jeder Eintrag = Vorgänger $\\cdot (-1) + $ nächster Koeffizient.',
          'Bei Vorzeichen aufpassen: Minus mal Minus = Plus.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['horner'] },
      ),
      ni(
        'Berechne $P(2)$ für $P(x) = x^4 - 3x^3 + 2x^2 - x + 7$ mit dem Horner-Schema.',
        5, 0, '',
        `**Ansatz:** Koeffizientenliste $[1, -3, 2, -1, 7]$, $x_0 = 2$. Horner-Regel: jeder Eintrag = Vorgänger $\\cdot 2$ plus nächster Koeffizient.

**Rechnung:**

| Koeffizient | $1$ | $-3$ | $2$ | $-1$ | $7$ |
|---|---|---|---|---|---|
| Vorgabe |  | $2$ | $-2$ | $0$ | $-2$ |
| Summe | $1$ | $-1$ | $0$ | $-1$ | $\\mathbf{5}$ |

Schritte: Start $1$; $1 \\cdot 2 + (-3) = -1$; $-1 \\cdot 2 + 2 = 0$; $0 \\cdot 2 + (-1) = -1$; $-1 \\cdot 2 + 7 = 5$.

**Probe:** Direkt einsetzen: $P(2) = 16 - 24 + 8 - 2 + 7 = 5$. ✓

**Typischer Fehler:** Vorzeichen bei $-3$ und $-1$ verlieren — etwa $1 \\cdot 2 + 3 = 5$ statt $-1$ rechnen. Genauso bei $-1 \\cdot 2 - 1$: das Ergebnis ist $-3$, dann $\\cdot 2 + 7 = 1$, was nicht zu $P(2)$ passt.`,
        [
          'Koeffizienten: $[1, -3, 2, -1, 7]$.',
          'Schritt für Schritt: Vorgänger $\\cdot 2$ plus nächster Koeffizient.',
          'Vorzeichen achten: $-3$ und $-1$ erhalten.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['horner'] },
      ),
      ni(
        'Berechne $P(-2)$ für $P(x) = 2x^4 + x^3 - 3x^2 + 5$ mit dem Horner-Schema.',
        17, 0, '',
        `**Ansatz:** Horner-Tabelle mit Koeffizienten $[2, 1, -3, 0, 5]$ (fehlender $x^1$-Term ist $0$) und auswertender Stelle $x_0 = -2$.

**Rechnung:** Schrittweise Horner-Regel — jeder Eintrag ist Vorgänger $\\cdot (-2)$ plus nächster Koeffizient:

| Koeffizient | $2$ | $1$ | $-3$ | $0$ | $5$ |
|---|---|---|---|---|---|
| Vorgabe |  | $-4$ | $6$ | $-6$ | $12$ |
| Summe | $2$ | $-3$ | $3$ | $-6$ | $\\mathbf{17}$ |

Konkret: Start $2$; $2 \\cdot (-2) + 1 = -3$; $-3 \\cdot (-2) + (-3) = 6 - 3 = 3$; $3 \\cdot (-2) + 0 = -6$; $-6 \\cdot (-2) + 5 = 12 + 5 = 17$.

**Probe:** Direkteinsetzen: $P(-2) = 2 \\cdot 16 + (-8) - 12 + 0 + 5 = 32 - 8 - 12 + 5 = 17$ ✓.

**Typischer Fehler:** Beim Horner-Schritt $-3 \\cdot (-2) = +6$ verlieren ($-3 \\cdot (-2) = -6$ falsch) — Vorzeichenfehler bei Multiplikation zweier negativer Zahlen. Oder: den fehlenden $x^1$-Term ohne $0$-Spalte überspringen — dann verschiebt sich die ganze Tabelle.`,
        [
          'Koeffizienten vollständig auflisten — fehlende Potenzen mit $0$ einfügen: $[2, 1, -3, 0, 5]$.',
          'Horner-Regel: jeder Eintrag = Vorgänger $\\cdot x_0$ plus nächster Koeffizient.',
          'Bei Vorzeichen achten — Minus mal Minus gibt Plus.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['horner'] },
      ),
    ],
    // [4] Linearfaktor-Zerlegung
    4: [
      matching(
        'Ordne jedem Polynom seine vollständige Linearfaktor-Zerlegung zu.',
        [
          { left: '$x^2 - 5x + 6$',             right: '$(x-2)(x-3)$' },
          { left: '$x^2 + 4x + 4$',             right: '$(x+2)^2$' },
          { left: '$x^3 - x$',                   right: '$x(x-1)(x+1)$' },
          { left: '$x^2 - 9$',                   right: '$(x-3)(x+3)$' },
        ],
        `**Ansatz:** Nullstellen finden, dann als Linearfaktoren schreiben.

**Rechnung:** Jede Nullstelle ergibt einen Faktor $(x - x_i)$.

**Probe:** Ausmultiplizieren reproduziert das Original.

**Typischer Fehler:** Doppelte Nullstelle vergessen.`,
        [
          'Nullstellen identifizieren.',
          'Als Faktoren $(x - x_i)$.',
          'Doppelte Nullstelle = Faktor hoch $2$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['linearfaktor'] },
      ),
      mc(
        'Wenn $x = 2$ Nullstelle von $x^3 - 4x^2 + x + 6$ ist, durch welches Polynom lässt sich $P$ faktorisieren?',
        ['$(x-2)(x^2 - 2x - 3)$', '$(x-2)(x^2 - 4x + 6)$', '$(x-2)(x - 2)(x+3)$', '$(x^2)(x-2)$'],
        0,
        `**Ansatz:** Polynomdivision: $P(x)/(x-2) = x^2 - 2x - 3$.

**Rechnung:** Danach weiter: $x^2 - 2x - 3 = (x-3)(x+1)$. Insgesamt: $(x-2)(x-3)(x+1)$.

**Probe:** $(x-2)(x^2 - 2x - 3) = x^3 - 4x^2 + x + 6$. ✓

**Typischer Fehler:** Falsche Polynomdivision.`,
        [
          'Polynomdivision ausführen.',
          'Quotient des Polynoms.',
          'Dann ggf. weiter faktorisieren.',
        ],
        {
          1: 'Probe: $(x-2)(x^2 - 4x + 6) = x^3 - 4x^2 + 6x - 2x^2 + 8x - 12 = x^3 - 6x^2 + 14x - 12$ — das ist NICHT $x^3 - 4x^2 + x + 6$. Die Division wurde falsch durchgeführt; korrekter Quotient ist $x^2 - 2x - 3$.',
          2: 'Du hast $(x-2)$ doppelt geschrieben — das hieße $x = 2$ wäre eine doppelte Nullstelle. Das ist hier aber nicht der Fall: $P(x) = x^3 - 4x^2 + x + 6 = (x-2)(x-3)(x+1)$ hat drei verschiedene einfache Nullstellen.',
          3: 'Das Format $x^2 \\cdot (x - 2)$ macht keinen Sinn als Faktorisierung — es würde Nullstellen $x = 0$ (doppelt) und $x = 2$ liefern, aber $P(0) = 6 \\neq 0$, also ist $x = 0$ keine Nullstelle.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['linearfaktor', 'polydiv'] },
      ),
      ni(
        'Das Polynom $x^2 - 10x + 21$ hat die Nullstellen $x_1 = 3$ und $x_2 = 7$. Schreibe es als $(x - x_1)(x - x_2)$ und gib den ausmultiplizierten Koeffizienten vor $x$ an.',
        -10, 0, '',
        `**Ansatz:** Linearfaktor-Zerlegung $(x-3)(x-7)$.

**Rechnung:** $(x-3)(x-7) = x^2 - 10x + 21$. Koeffizient von $x$ ist $-10$.

**Probe:** Vieta: $-p = 10$, also $p = -10$. ✓

**Typischer Fehler:** Vorzeichen der Nullstellen nicht umkehren.`,
        [
          'Faktorisieren als $(x-3)(x-7)$.',
          'Ausmultiplizieren.',
          'Koeffizient von $x$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['linearfaktor'] },
      ),
      mc(
        'Ein Schüler zerlegt $x^2 - 4 = (x - 4)(x + 4)$. Wo liegt der Fehler?',
        [
          'Die Nullstellen von $x^2 - 4$ sind $\\pm 2$, nicht $\\pm 4$. Korrekt: $(x-2)(x+2)$.',
          'Die Nullstellen sind $\\pm 4$, aber Vorzeichen falsch.',
          'Die Faktorisierung ist korrekt.',
          'Die Zerlegung müsste $(x-4)(x-4)$ lauten.',
        ],
        0,
        `**Ansatz:** $x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.

**Rechnung:** Linearfaktor-Zerlegung: $(x-2)(x+2)$.

**Probe:** $(x-2)(x+2) = x^2 - 4$. ✓ $(x-4)(x+4) = x^2 - 16 \\neq x^2 - 4$.

**Typischer Fehler:** $\\sqrt{4}$ als $4$ statt $2$ nehmen.`,
        [
          'Was ist $\\sqrt{4}$?',
          'Nullstellen von $x^2 - 4 = 0$?',
          'Ausmultiplizieren zur Kontrolle.',
        ],
        {
          1: 'Du hast die Vorzeichen kritisiert, aber die ZAHL ist falsch. Die Nullstellen von $x^2 - 4 = 0$ sind $x = \\pm \\sqrt{4} = \\pm 2$, nicht $\\pm 4$. Aus der 3. binom. Formel $a^2 - b^2 = (a-b)(a+b)$ mit $b = \\sqrt{4} = 2$.',
          2: 'Der Ausdruck ist NICHT korrekt: Ausmultiplizieren von $(x-4)(x+4)$ ergibt $x^2 - 16$ (3. binomische Formel mit $b=4$), nicht $x^2 - 4$. Die richtige Wurzel von $4$ ist $2$, also $(x-2)(x+2) = x^2 - 4$.',
          3: 'Eine Doppelfaktorisierung $(x-4)(x-4) = (x-4)^2 = x^2 - 8x + 16$ hätte einen Mittelterm und einen anderen konstanten Wert — passt nicht zu $x^2 - 4$. Hier brauchst du Differenz zweier Quadrate, nicht ein vollständiges Quadrat.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['linearfaktor'] },
      ),
      ni(
        'Faktorisiere $x^3 - 6x^2 + 11x - 6$ vollständig und gib die SUMME aller Nullstellen an.',
        6, 0, '',
        `**Ansatz:** Nullstellen raten, Polynomdivision, alle Faktoren.

**Rechnung:** Nullstellen $1, 2, 3$. Zerlegung: $(x-1)(x-2)(x-3)$. Summe $1+2+3 = 6$.

**Probe:** Vieta für Kubik: Summe $= -b/a = 6$. ✓

**Typischer Fehler:** Nur zwei Nullstellen finden.`,
        [
          'Drei Nullstellen raten.',
          'Polynomdivision.',
          'Summe der drei Lösungen.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['linearfaktor', 'rat-wurzel'] },
      ),
      ni(
        'Bestimme das Produkt aller Nullstellen von $P(x) = x^3 - 7x + 6$.',
        -6, 0, '',
        `**Ansatz:** Vieta für Polynome dritten Grades $x^3 + a x^2 + b x + c$: Produkt der Nullstellen $= -c$.

**Rechnung:** Hier $c = 6$, also Produkt $= -6$. Direkt-Test: Nullstellen sind $1, 2, -3$ (denn $P(1) = 1 - 7 + 6 = 0$ ✓, $P(2) = 8 - 14 + 6 = 0$ ✓, $P(-3) = -27 + 21 + 6 = 0$ ✓). Produkt: $1 \\cdot 2 \\cdot (-3) = -6$ ✓.

**Probe:** Faktorisierung $P(x) = (x-1)(x-2)(x+3)$. Konstanter Term beim Ausmultiplizieren: $(-1)(-2)(3) = 6$ — das ist das absolute Glied $+c$. Per Vieta-Formel ist das Produkt der Nullstellen $-c = -6$ (Vorzeichenwechsel, weil ein ungerader Grad).

**Typischer Fehler:** Bei Vieta für Grad $3$ das Vorzeichen vergessen — Produkt der Nullstellen ist $-c$, nicht $+c$. (Bei Grad $2$ wäre es $+q$, bei Grad $3$ kehrt sich das Vorzeichen um.)`,
        [
          'Welcher Koeffizient bestimmt das Produkt? — Das absolute Glied.',
          'Vieta für Kubik: Produkt $= -c$.',
          'Hier $c = 6$, also Produkt $= -6$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['linearfaktor'] },
      ),
      mc(
        'Welche Linearfaktor-Zerlegung gehört zu einem Polynom mit den Nullstellen $-1$, $2$ und $3$ und Leitkoeffizient $1$?',
        ['$(x+1)(x-2)(x-3)$', '$(x-1)(x+2)(x+3)$', '$(x+1)(x+2)(x+3)$', '$(x+1)(x-2)(x+3)$'],
        0,
        `**Ansatz:** Zu jeder Nullstelle $x_i$ gehört der Faktor $(x - x_i)$. Vorzeichen genau übernehmen.

**Rechnung:** $x_1 = -1 \\Rightarrow (x - (-1)) = (x + 1)$; $x_2 = 2 \\Rightarrow (x - 2)$; $x_3 = 3 \\Rightarrow (x - 3)$. Insgesamt: $(x+1)(x-2)(x-3)$.

**Probe:** Ausmultiplizieren: $(x+1)(x-2) = x^2 - x - 2$; mal $(x-3)$: $x^3 - 3x^2 - x^2 + 3x - 2x + 6 = x^3 - 4x^2 + x + 6$. Einsetzen $x = -1$: $-1 - 4 - 1 + 6 = 0$ ✓; $x = 2$: $8 - 16 + 2 + 6 = 0$ ✓; $x = 3$: $27 - 36 + 3 + 6 = 0$ ✓.

**Typischer Fehler:** Vorzeichen beim Schritt „Nullstelle → Faktor" verwechseln. Aus $x_i = -1$ wird $(x - (-1)) = (x + 1)$ — also genau das umgekehrte Vorzeichen. Wer das Faktor-Vorzeichen direkt übernimmt, bekommt $(x - 1)$ und damit eine andere Nullstelle.`,
        [
          'Faktor zu Nullstelle $x_i$: $(x - x_i)$.',
          'Vorzeichen drehen: $x = -1 \\to (x + 1)$.',
          'Vorzeichen prüfen: Faktor $(x + 1)$ wird Null bei $x = -1$.',
        ],
        {
          1: 'Du hast die Vorzeichen aller drei Nullstellen umgedreht: $(x-1)(x+2)(x+3)$ hat Nullstellen $1, -2, -3$ — nicht $-1, 2, 3$.',
          2: '$(x+1)(x+2)(x+3)$ hat Nullstellen $-1, -2, -3$ — auch falsch. Der erste Faktor $(x+1)$ stimmt, aber bei $x = 2$ und $x = 3$ brauchst du $(x-2)$ und $(x-3)$.',
          3: '$(x+1)(x-2)(x+3)$ hat Nullstellen $-1, 2, -3$. Der dritte Faktor ist verkehrt: bei $x = 3$ wird $(x+3) = 6 \\neq 0$. Korrekt: $(x-3)$.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['linearfaktor', 'polydiv'] },
      ),
      ni(
        'Bei der Linearfaktor-Zerlegung von $P(x) = x^3 - 5x^2 + 8x - 4$ tritt die Nullstelle $x = 2$ doppelt auf. Welche Vielfachheit hat die Nullstelle $x = 1$?',
        1, 0, '',
        `**Ansatz:** Bei Vielfachheit $k$ erscheint der Faktor $(x - x_0)^k$ in der Zerlegung. Summe der Vielfachheiten = Grad des Polynoms.

**Rechnung:** Grad $3$, eine doppelte Nullstelle bei $x = 2$ → bleibt eine *einfache* Nullstelle. Probe der Kandidaten: $P(1) = 1 - 5 + 8 - 4 = 0$ ✓ — also $x = 1$ einfach. Zerlegung: $P(x) = (x-1)(x-2)^2$.

**Probe:** Ausmultiplizieren: $(x-2)^2 = x^2 - 4x + 4$; mal $(x-1)$: $x^3 - 4x^2 + 4x - x^2 + 4x - 4 = x^3 - 5x^2 + 8x - 4$ ✓.

**Typischer Fehler:** Vielfachheiten nicht zur Grad-Summe addieren — bei kubischer Gleichung müssen die Vielfachheiten zusammen genau $3$ ergeben. Hier: $2$ (für $x=2$) $+ 1$ (für $x=1$) $= 3$. ✓`,
        [
          'Vielfachheits-Bilanz: Summe = Grad des Polynoms.',
          'Doppelte Nullstelle zählt als Vielfachheit $2$.',
          'Bei Grad $3$ und einer doppelten bleibt nur eine einfache übrig.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['linearfaktor'] },
      ),
    ],
    // [5] Cardano-info (niedriges Niveau)
    5: [
      tf(
        'Kubische Gleichungen ohne rationale Nullstelle lassen sich mit der Cardano-Formel lösen.',
        true,
        `**Ansatz:** Cardano (16. Jh.) liefert allgemeine Lösung für $x^3 + px + q = 0$.

**Rechnung:** Komplexe Formel, oft mit Wurzeln und Kubikwurzeln.

**Probe:** Historisch erste allgemeine Lösung dritten Grades.

**Typischer Fehler:** Cardano auf Gleichungen $x^3 + ax^2 + bx + c$ ohne Transformation anwenden.`,
        [
          'Wer hat sie entdeckt?',
          'Italien, 16. Jahrhundert.',
          'Allgemeine Lösung Kubik.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['cardano-info'] },
      ),
      mc(
        'Welches Verfahren ist bei $x^3 - x - 1 = 0$ (keine rationale Nullstelle) sinnvoll?',
        ['Cardano-Formel oder numerische Näherung', 'pq-Formel', 'Polynomdivision', 'Faktorisieren'],
        0,
        `**Ansatz:** Rationale Kandidaten $\\pm 1$ versagen: $1 - 1 - 1 = -1 \\neq 0$ und $-1 + 1 - 1 = -1 \\neq 0$.

**Rechnung:** Cardano oder z. B. Newton-Verfahren.

**Probe:** Reelle Lösung $\\approx 1{,}3247$.

**Typischer Fehler:** Auf pq-Formel bestehen.`,
        [
          'pq-Formel ist für quadratisch.',
          'Kubik ohne Nullstelle → Cardano oder Numerik.',
          'Das ist der einzige Weg.',
        ],
        {
          1: 'Die pq-Formel ist konstruiert für quadratische Gleichungen $x^2 + px + q = 0$. Bei einer Kubik wie $x^3 - x - 1$ versagt sie — der höchste Term $x^3$ passt nicht ins pq-Schema.',
          2: 'Polynomdivision setzt voraus, dass du bereits eine Nullstelle GEFUNDEN hast (Faktor $(x - x_0)$). Hier hast du keine rationale Nullstelle, also nichts zum Dividieren — du brauchst zuerst Cardano oder Numerik.',
          3: 'Faktorisieren über $(x - x_1)(x - x_2)\\cdots$ erfordert bekannte Nullstellen. Da hier alle rationalen Kandidaten ($\\pm 1$) versagen, gibt es keine Faktoren zum Schreiben — Cardano oder numerische Methoden sind die einzigen Wege.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['cardano-info'] },
      ),
      mc(
        'Für $x^3 - 15x - 4 = 0$ gilt die Cardano-Lösung $x = \\sqrt[3]{2 + 11i} + \\sqrt[3]{2 - 11i}$. Was fällt auf?',
        [
          'Obwohl die Cardano-Formel komplexe Wurzeln nutzt, ist die Summe eine REELLE Zahl (hier $x = 4$).',
          'Die Gleichung hat keine Lösung.',
          'Cardano liefert immer komplexe Lösungen.',
          'Die Formel ist falsch.',
        ],
        0,
        `**Ansatz:** Casus irreducibilis — auch bei reellen Wurzeln kommen komplexe Zahlen in den Zwischenergebnissen vor.

**Rechnung:** $4^3 - 15 \\cdot 4 - 4 = 64 - 60 - 4 = 0$. ✓

**Probe:** $x = 4$ ist reelle Lösung.

**Typischer Fehler:** Komplexe Wurzeln als "keine reelle Lösung" missdeuten.`,
        [
          'Casus irreducibilis.',
          'Reelle Lösung über komplexe Zwischenwerte.',
          'Zahlentest: $4$ ist Lösung.',
        ],
        {
          1: 'Doch — $4^3 - 15 \\cdot 4 - 4 = 64 - 60 - 4 = 0$, also ist $x = 4$ eine Lösung. Das überraschende: Die komplexen Wurzeln $\\sqrt[3]{2 \\pm 11i}$ heben sich gegenseitig auf, weil die Imaginärteile entgegengesetzte Vorzeichen haben.',
          2: 'Cardano liefert NICHT immer komplexe Lösungen — der Casus irreducibilis ist genau der Fall, in dem die Formel komplexe Wurzeln nutzt, das Endergebnis aber reell wird. Bei $x^3 - 15x - 4 = 0$: Lösung $x = 4$, reell.',
          3: 'Die Formel ist tatsächlich korrekt — das ist gerade der Witz. Die scheinbare Komplexität bei $\\sqrt[3]{2 \\pm 11i}$ ist NUR ein algorithmischer Zwischenschritt; durch die symmetrische Addition der konjugiert-komplexen Kubikwurzeln kürzen sich die Imaginärteile zu $0$.',
        },
        { stage: 'apply-independent', subGoal: 5, uses: ['cardano-info'] },
      ),
      mc(
        'Ein Schüler will $x^3 - 6x + 4 = 0$ mit der pq-Formel lösen. Wo liegt das Problem?',
        [
          'Die pq-Formel gilt nur für quadratische Gleichungen. Für Kubik braucht er rationale Nullstelle suchen oder Cardano.',
          'Er hätte beide Seiten quadrieren müssen.',
          'pq-Formel funktioniert — nur andere Koeffizienten.',
          'Die Gleichung hat keine Lösung.',
        ],
        0,
        `**Ansatz:** Jede Formel hat ihren Gültigkeitsbereich.

**Rechnung:** Hier: Teiler von $4$ testen. $x = 2$: $8 - 12 + 4 = 0$. ✓

**Probe:** Polynomdivision $(x-2)$ liefert $x^2 + 2x - 2$, dann pq-Formel.

**Typischer Fehler:** Formel-Anwendungsbereich ignorieren.`,
        [
          'pq für Grad $2$.',
          'Grad $3$ → andere Methode.',
          'Rationale Nullstellen zuerst.',
        ],
        {
          1: 'Quadrieren würde aus $x^3 - 6x + 4 = 0$ ein Polynom Grad $6$ machen — viel schwieriger zu lösen, mit zusätzlichen Scheinlösungen. Quadrieren ist hier kontraproduktiv; richtig ist die Suche nach rationalen Nullstellen.',
          2: 'Die pq-Formel ist auf $x^2 + px + q = 0$ spezialisiert — die Herleitung über quadratische Ergänzung greift bei kubischen Polynomen nicht. Mit anderen Koeffizienten wäre das Problem nicht gelöst, denn der Grad bleibt $3$.',
          3: 'Doch — $P(2) = 8 - 12 + 4 = 0$, also ist $x = 2$ tatsächlich eine Lösung. Aber das Problem mit dem Schüler ist nicht „keine Lösung", sondern die falsche FORMEL: pq passt nicht zu Grad $3$, der Lösungsweg geht über rationale Nullstellen + Polynomdivision.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['cardano-info'] },
      ),
      tf(
        'Eine allgemeine kubische Gleichung $x^3 + a x^2 + b x + c = 0$ lässt sich durch die Substitution $x = y - a/3$ auf die reduzierte Form $y^3 + p y + q = 0$ ohne quadratischen Term bringen — die Cardano-Formel ist auf genau diese reduzierte Form anwendbar.',
        true,
        `**Ansatz:** Die Substitution $x = y - a/3$ eliminiert den $x^2$-Term im Polynom. Cardano arbeitet auf der reduzierten Form (ohne quadratischen Term).

**Rechnung:** Beispiel $x^3 + 6x^2 + 9x + 4 = 0$ mit Substitution $x = y - 2$: $(y-2)^3 + 6(y-2)^2 + 9(y-2) + 4$. Nach dem Ausmultiplizieren entsteht eine reduzierte Form $y^3 + p y + q$ ohne $y^2$-Term.

**Probe:** Mit $a = 6$ ist $a/3 = 2$, daher $x = y - 2$. Eingesetzt verschwindet der quadratische Term — das ist die historische Vorbereitung für Cardano.

**Typischer Fehler:** Cardano direkt auf die volle kubische Gleichung anwenden, ohne den $x^2$-Term zu eliminieren — die Formel funktioniert dann nicht (sie ist auf $x^3 + p x + q$ kalibriert).`,
        [
          'Cardano braucht reduzierte Form.',
          'Substitution $x = y - a/3$ entfernt den $x^2$-Term.',
          'Erst dann ist die Formel anwendbar.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['cardano-info'] },
      ),
      mc(
        'Bei $x^3 - 2x - 5 = 0$ liefert das Newton-Verfahren $x \\approx 2{,}0946$ als reelle Lösung. Was bestätigt diese Approximation?',
        [
          'Die Gleichung hat keine rationalen Nullstellen — Cardano oder Numerik sind nötig. Probe: $x = 2$ gibt $8 - 4 - 5 = -1 \\neq 0$, $x = 3$ gibt $27 - 6 - 5 = 16$, also liegt die Lösung dazwischen.',
          'Die pq-Formel funktioniert nur näherungsweise.',
          'Die Gleichung hat keine reelle Lösung.',
          'Newton braucht ganzzahligen Startwert.',
        ],
        0,
        `**Ansatz:** Vorzeichenwechsel zwischen $P(2) = -1$ und $P(3) = 16$ garantiert nach Zwischenwertsatz mindestens eine Nullstelle in $(2, 3)$. Da rationale Kandidaten $\\pm 1, \\pm 5$ versagen ($P(1) = -6$, $P(-1) = -2$, $P(5) = 110$, $P(-5) = -120$), muss die Lösung irrational sein.

**Rechnung:** Newton-Iteration mit Startwert $x_0 = 2$ konvergiert zu $x \\approx 2{,}0946$. Probe: $2{,}0946^3 - 2 \\cdot 2{,}0946 - 5 \\approx 9{,}189 - 4{,}189 - 5 \\approx 0$.

**Probe:** $P(2{,}0946) \\approx 0$ bestätigt die Lösung — eine reelle, aber irrationale Nullstelle.

**Typischer Fehler:** Die Diskussion auf rationale Nullstellen reduzieren — bei einer Kubik wie dieser existiert immer mindestens eine reelle Lösung (ungerader Grad), auch wenn sie irrational ist. Nur Cardano oder Numerik liefern sie.`,
        [
          'Welche rationalen Kandidaten sind sinnvoll? — Teiler von $5$.',
          'Wenn alle versagen: Lösung muss irrational sein.',
          'Numerische Verfahren oder Cardano kommen zum Einsatz.',
        ],
        {
          1: 'Die pq-Formel ist auf quadratische Gleichungen kalibriert — sie liefert nicht „näherungsweise", sondern gar nicht. Newton oder Cardano sind die Werkzeuge für Kubik ohne rationale NS.',
          2: 'Bei ungeradem Grad hat ein reelles Polynom IMMER mindestens eine reelle Nullstelle ($\\lim_{x \\to \\pm\\infty}$ wechselt das Vorzeichen). Die Approximation $x \\approx 2{,}0946$ ist gerade diese reelle Lösung.',
          3: 'Newton funktioniert mit beliebigen Startwerten in der Nähe der Nullstelle — auch nicht-ganzzahligen. Hier konvergiert es ab $x_0 = 2$ zur irrationalen Lösung.',
        },
        { stage: 'apply-independent', subGoal: 5, uses: ['cardano-info'] },
      ),
      matching(
        'Ordne jeder Gleichung die passende Lösungsmethode zu.',
        [
          { left: '$x^2 + 3x + 2 = 0$',         right: 'pq-Formel' },
          { left: '$x^3 - 6x^2 + 11x - 6 = 0$', right: 'Rationale Nullstelle + Polynomdivision' },
          { left: '$x^3 - x - 1 = 0$',          right: 'Cardano oder numerisch (keine rationalen NS)' },
          { left: '$x^4 - 16 = 0$',             right: 'Faktorisieren über $(x^2-4)(x^2+4)$' },
        ],
        `**Ansatz:** Jeder Polynomtyp braucht andere Methode.

**Rechnung:** Systematisch prüfen: rationale NS → Division; sonst numerisch/Cardano.

**Probe:** Jede Methode passt zum jeweiligen Polynom.

**Typischer Fehler:** Immer die gleiche Methode versuchen.`,
        [
          'Grad bestimmen.',
          'Rationale NS prüfen.',
          'Passende Methode wählen.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['cardano-info', 'rat-wurzel'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-2-4 — Ungleichungen (6 SGs, 30 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-2-4': {
    // [0] Zeichen umdrehen bei Multiplikation mit negativ
    0: [
      tf(
        'Beim Multiplizieren einer Ungleichung mit einer negativen Zahl muss das Ungleichheitszeichen umgedreht werden.',
        true,
        `**Ansatz:** Multiplikation mit $-1$ kippt die Ordnung.

**Rechnung:** $-2 < 3 \\Rightarrow 2 > -3$ (beide Seiten $\\cdot -1$).

**Probe:** $-2 \\cdot -1 = 2$, $3 \\cdot -1 = -3$. $2 > -3$ ✓.

**Typischer Fehler:** Zeichen einfach übernehmen.`,
        [
          'Warum dreht sich das Zeichen?',
          'Multiplikation mit $-1$ spiegelt an $0$.',
          'Größer wird kleiner und umgekehrt.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      mc(
        'Löse $-3x \\geq 12$.',
        ['$x \\leq -4$', '$x \\geq -4$', '$x \\leq 4$', '$x \\geq 4$'],
        0,
        `**Ansatz:** Beide Seiten $:-3$, Zeichen umdrehen.

**Rechnung:** $-3x \\geq 12 \\Rightarrow x \\leq -4$ (Division durch $-3$ flippt $\\geq$ zu $\\leq$).

**Probe:** $x = -5$: $-3 \\cdot (-5) = 15 \\geq 12$ ✓. $x = 0$: $0 \\geq 12$ ist falsch — passt zu $x \\leq -4$.

**Typischer Fehler:** Zeichen nicht umdrehen.`,
        [
          'Durch $-3$ teilen.',
          'Zeichen $\\geq \\to \\leq$.',
          'Rechte Seite $12/(-3) = -4$.',
        ],
        {
          1: 'Du hast $12/(-3) = -4$ richtig berechnet, aber das Ungleichheitszeichen nicht umgedreht. Bei Division durch eine negative Zahl wird $\\geq$ zu $\\leq$. Probe mit $x = 0$ widerlegt $x \\geq -4$: $-3 \\cdot 0 = 0$ ist nicht $\\geq 12$.',
          2: 'Du hast $12/(-3) = +4$ statt $-4$ gerechnet (Vorzeichen-Fehler) und das Zeichen umgedreht — beide Korrekturen heben sich nicht auf. Korrekt: Quotient $-4$, Zeichen gedreht, Lösung $x \\leq -4$.',
          3: 'Du hast das Vorzeichen beim Teilen ignoriert ($+4$ statt $-4$) und das Zeichen *nicht* umgedreht — zwei Fehler. Probe mit $x = 5$: $-3 \\cdot 5 = -15$, nicht $\\geq 12$ — widerlegt $x \\geq 4$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      ni(
        'Löse $-5x > 25$ und gib die obere Grenze für $x$ an.',
        -5, 0.01, '',
        `**Ansatz:** Beide Seiten $:-5$, Zeichen umdrehen.

**Rechnung:** $-5x > 25 \\Rightarrow x < -5$.

**Probe:** $x = -6$: $-5 \\cdot (-6) = 30 > 25$ ✓.

**Typischer Fehler:** Zeichen $>$ behalten.`,
        [
          'Division durch $-5$.',
          'Zeichen umdrehen.',
          'Obere Grenze.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      mc(
        'Ein Schüler schreibt $-2x < 6 \\Rightarrow x < -3$ und behauptet, er habe durch $-2$ geteilt. Wo liegt der Fehler?',
        [
          'Beim Teilen durch negative Zahl muss das Zeichen umgedreht werden: $x > -3$.',
          'Er hätte mit $2$ multiplizieren müssen.',
          'Die Rechnung ist korrekt.',
          'Die Ungleichung hat keine Lösung.',
        ],
        0,
        `**Ansatz:** Das $<$ wird zu $>$ wenn durch negativ geteilt wird.

**Rechnung:** $-2x < 6 \\Rightarrow x > -3$.

**Probe:** $x = 0$: $-2 \\cdot 0 = 0 < 6$ ✓ — passt zu $x > -3$.

**Typischer Fehler:** Zeichen gelassen.`,
        [
          'Durch negative Zahl teilen.',
          'Zeichen umdrehen.',
          'Zahlentest mit $x = 0$.',
        ],
        {
          1: 'Mit $2$ statt $-2$ zu multiplizieren wäre keine Äquivalenzumformung der Ausgangsungleichung — das Problem ist nicht der Operator, sondern dass beim Teilen durch eine negative Zahl das $<$ kippt. Mit korrekter Division durch $-2$ und Zeichen-Flip: $x > -3$.',
          2: 'Zahlentest widerlegt die Schülerlösung: $x = 0$ liegt nicht in $x < -3$, aber $-2 \\cdot 0 = 0 < 6$ ✓ — also gehört $0$ zur Lösung. Damit ist $x < -3$ unvollständig (oder verkehrt). Korrekt: $x > -3$.',
          3: 'Eine lineare Ungleichung mit nicht-verschwindendem Koeffizienten hat immer eine nicht-leere Lösungsmenge — entweder eine Halbgerade nach links oder nach rechts. Hier konkret $x > -3$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $-2(x + 3) > 10$ in die richtige Reihenfolge.',
        [
          'Klammer auflösen: $-2x - 6 > 10$',
          'Beide Seiten $+6$: $-2x > 16$',
          'Beide Seiten $:-2$, Zeichen umdrehen: $x < -8$',
        ],
        [0, 1, 2],
        `**Ansatz:** Systematisch: Klammer, Verschieben, Teilen mit Zeichen-Flip.

**Rechnung:** $x < -8$.

**Probe:** $x = -9$: $-2(-9+3) = -2(-6) = 12 > 10$ ✓.

**Typischer Fehler:** Zeichen-Flip vergessen.`,
        [
          'Klammer zuerst.',
          'Konstante verschieben.',
          'Beim Teilen Zeichen umdrehen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      ni(
        'Löse die doppelte Ungleichung $-3 < 2x - 7 \\leq 5$ und gib die obere Grenze für $x$ an.',
        6, 0.01, '',
        `**Ansatz:** Doppelte Ungleichung in allen drei Teilen gleich umformen — solange wir mit positivem Faktor multiplizieren/dividieren, bleiben beide Ungleichheitszeichen gleich gerichtet.

**Rechnung:**
$$-3 < 2x - 7 \\leq 5 \\quad | +7 \\\\ 4 < 2x \\leq 12 \\quad | : 2 \\quad (\\text{positiv, Zeichen bleiben}) \\\\ 2 < x \\leq 6$$

Obere Grenze: $x = 6$ (eingeschlossen).

**Probe:** $x = 6$: $2 \\cdot 6 - 7 = 5 \\leq 5$ ✓. $x = 2$ ist Grenzfall: $2 \\cdot 2 - 7 = -3$, nicht $> -3$ — also $2$ ausgeschlossen.

**Typischer Fehler:** Nur eine der drei Stellen umformen — alle drei müssen synchron mit derselben Operation behandelt werden, sonst zerfällt die Doppel-Ungleichung.`,
        [
          'Doppelte Ungleichung als $-3 < 2x - 7 \\leq 5$.',
          'Schritt 1: $+7$ in allen drei Teilen.',
          'Schritt 2: $:2$ (positiv, Zeichen bleiben).',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
      mc(
        'Welcher Schritt ist erforderlich, um $\\dfrac{x - 4}{-3} \\geq 2$ nach $x$ aufzulösen?',
        [
          'Beide Seiten mit $-3$ multiplizieren UND Ungleichheitszeichen umdrehen: $x - 4 \\leq -6$.',
          'Beide Seiten mit $-3$ multiplizieren OHNE Zeichen umzudrehen: $x - 4 \\geq -6$.',
          'Beide Seiten durch $-3$ teilen: $x - 4 \\leq 2 \\cdot (-3)^{-1}$.',
          'Quadrieren, weil Bruch.',
        ],
        0,
        `**Ansatz:** Bei Multiplikation einer Ungleichung mit einer NEGATIVEN Zahl flippt das Ungleichheitszeichen.

**Rechnung:**
$$\\dfrac{x-4}{-3} \\geq 2 \\quad | \\cdot (-3) \\quad (\\text{negativ! Zeichen flippt}) \\\\ x - 4 \\leq -6 \\quad | +4 \\\\ x \\leq -2$$

**Probe:** $x = -2$: $\\dfrac{-2-4}{-3} = \\dfrac{-6}{-3} = 2 \\geq 2$ ✓. $x = -3$: $\\dfrac{-7}{-3} \\approx 2{,}33 \\geq 2$ ✓ — auch in Lösung.

**Typischer Fehler:** Mit $-3$ multiplizieren, ohne das Zeichen zu drehen — dann landet man bei $x \\geq -2$, was die falsche Halbgerade ist.`,
        [
          'Was steht im Nenner? — $-3$, also negativ.',
          'Multiplikation mit negativ → Zeichen umdrehen.',
          'Schritt: $\\geq$ wird $\\leq$.',
        ],
        {
          1: 'Du hast den Zeichen-Flip vergessen — bei Multiplikation mit $-3$ wird $\\geq$ zu $\\leq$. Probe widerlegt: $x = 0$ erfüllt dein Ergebnis $0 - 4 \\geq -6$, aber $\\frac{0-4}{-3} = \\frac{4}{3} \\approx 1{,}33$, was NICHT $\\geq 2$ ist.',
          2: 'Du hast nicht aufgelöst, nur umgeformt — und das mit falscher Notation. Beim Teilen durch $-3$ wäre die rechte Seite $2 / (-3) = -\\frac{2}{3}$, mit Zeichen-Flip: $x - 4 \\leq -\\frac{2}{3}$. Direktere Methode: Multiplikation mit $-3$.',
          3: 'Quadrieren ist hier völlig fehl am Platz — es würde Grad-Verdopplung erzeugen und Scheinlösungen einführen. Bei einer linearen Bruchungleichung genügt der Standardweg: mit dem Nenner multiplizieren (Vorzeichen beachten).',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['ungl-zeichen-flip'] },
      ),
    ],
    // [1] Betragsungleichung |x-a| < b
    1: [
      tf(
        'Für $b > 0$ ist $|x - a| < b$ äquivalent zu $a - b < x < a + b$.',
        true,
        `**Ansatz:** Betrag als Abstand. $|x - a| < b$ heißt "$x$ liegt weniger als $b$ von $a$ entfernt".

**Rechnung:** $-b < x - a < b \\Leftrightarrow a - b < x < a + b$.

**Probe:** $|x - 3| < 2$: $1 < x < 5$.

**Typischer Fehler:** Betrag als "immer positiv" missverstehen.`,
        [
          'Betrag = Abstand.',
          '$|y| < b$: $y$ zwischen $-b$ und $b$.',
          'Mit $y = x - a$: Intervall um $a$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      mc(
        'Löse $|x - 4| < 3$.',
        ['$1 < x < 7$', '$-3 < x < 3$', '$x < 7$', '$x > 1$'],
        0,
        `**Ansatz:** Doppelte Ungleichung $4 - 3 < x < 4 + 3$.

**Rechnung:** $1 < x < 7$.

**Probe:** $x = 5$: $|5-4| = 1 < 3$ ✓.

**Typischer Fehler:** Zentrum $4$ vergessen.`,
        [
          'Zentrum: $a = 4$.',
          'Radius: $b = 3$.',
          '$[a-b, a+b] = [1, 7]$.',
        ],
        {
          1: '$-3 < x < 3$ wäre $|x| < 3$ — Zentrum fehlt.',
          2: 'Nur obere Grenze, untere fehlt.',
          3: 'Nur untere Grenze, obere fehlt.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      ni(
        'Löse $|x - 2| \\leq 5$ und gib die obere Grenze für $x$ an.',
        7, 0.01, '',
        `**Ansatz:** $-5 \\leq x - 2 \\leq 5$.

**Rechnung:** $-3 \\leq x \\leq 7$. Obere Grenze: $7$.

**Probe:** $x = 7$: $|7-2| = 5$ ✓.

**Typischer Fehler:** Zentrum nicht berücksichtigen.`,
        [
          'Zentrum $a = 2$, Radius $b = 5$.',
          'Obere Grenze: $a + b$.',
          '$2 + 5 = 7$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      mc(
        'Ein Schüler löst $|x| < 4$ zu $x < 4$. Wo liegt der Fehler?',
        [
          'Er hat die untere Grenze vergessen: $-4 < x < 4$.',
          'Er hätte $x > 4$ schreiben müssen.',
          'Die Lösung ist korrekt.',
          '$|x|$ ist immer $\\geq 0$, also keine Lösung.',
        ],
        0,
        `**Ansatz:** $|x| < b$ ist eine doppelte Ungleichung.

**Rechnung:** $-4 < x < 4$, nicht nur $x < 4$.

**Probe:** $x = -5$: $|-5| = 5 > 4$, also nicht Lösung — Schülerlösung würde $-5 < 4$ akzeptieren.

**Typischer Fehler:** Untere Schranke vergessen.`,
        [
          'Was heißt Betrag $<$ ?',
          'Doppelte Ungleichung.',
          'Zahlentest mit $x = -5$.',
        ],
        {
          1: 'Du hast die ENTGEGENGESETZTE Bedingung gewählt — $x > 4$ ist die Lösung von $|x| > 4$ (außerhalb), nicht von $|x| < 4$ (innerhalb). Probe: $x = 0$ erfüllt $|0| < 4$ ✓, liegt aber nicht in $x > 4$.',
          2: 'Probe widerlegt: $x = -5$ erfüllt $x < 4$, aber $|-5| = 5 > 4$, also NICHT $|x| < 4$. Die Schülerlösung enthält Werte, die die Original-Ungleichung verletzen — sie ist unvollständig (untere Schranke fehlt).',
          3: '$|x| = 0$ bei $x = 0$ erfüllt zwar $|x| < 4$, aber das ist keine generelle Aussage über die Lösungsmenge. Die richtige Frage: Welche $x$ erfüllen die Ungleichung? Antwort: alle mit $-4 < x < 4$, nicht „keine".',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      matching(
        'Ordne jedem Betrags-Ausdruck seine Lösungsmenge zu.',
        [
          { left: '$|x - 2| < 4$',          right: '$-2 < x < 6$' },
          { left: '$|x + 1| \\leq 3$',      right: '$-4 \\leq x \\leq 2$' },
          { left: '$|x| < 5$',              right: '$-5 < x < 5$' },
          { left: '$|x - 10| < 1$',         right: '$9 < x < 11$' },
        ],
        `**Ansatz:** $|x - a| < b \\iff a - b < x < a + b$.

**Rechnung:** Zentrum und Radius identifizieren.

**Probe:** Zahlentest.

**Typischer Fehler:** Vorzeichen bei $a$ verwirren.`,
        [
          'Zentrum $a$ identifizieren.',
          'Radius $b$.',
          'Intervall $[a-b, a+b]$.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      ni(
        'Eine Maschine fertigt Bolzen mit Soll-Durchmesser $d_0 = 12{,}0$ mm. Die Toleranz ist $|d - 12{,}0| \\leq 0{,}3$. Wie groß ist die größte zulässige Abweichung des Durchmessers $d$ von $12{,}0$ mm (in mm)?',
        0.3, 0.001, 'mm',
        `**Ansatz:** Die Bedingung $|d - 12{,}0| \\leq 0{,}3$ definiert das Toleranzintervall $[11{,}7;\\, 12{,}3]$ (geschlossen, Grenzen eingeschlossen). Größte zulässige Abweichung = Radius des Intervalls.

**Rechnung:** $|d - 12{,}0| \\leq 0{,}3 \\iff -0{,}3 \\leq d - 12{,}0 \\leq 0{,}3 \\iff 11{,}7 \\leq d \\leq 12{,}3$. Maximale Abweichung: $0{,}3$ mm (gerade noch erlaubt, weil $\\leq$).

**Probe:** $d = 12{,}3$ ist Grenzfall — $|0{,}3| = 0{,}3 \\leq 0{,}3$ ✓, gerade noch zulässig. $d = 12{,}4$: $|0{,}4| > 0{,}3$, ausgeschlossen.

**Typischer Fehler:** Den Soll-Wert $12{,}0$ selbst als Antwort angeben — gefragt ist die Abweichung (Radius), nicht der Wert selbst.`,
        [
          'Was bedeutet $|d - 12{,}0| \\leq 0{,}3$? — Abstand zu $12{,}0$ höchstens $0{,}3$.',
          'Die größte zulässige Abweichung ist genau der Radius.',
          'Antwort: $0{,}3$ mm (Grenze eingeschlossen).',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
      mc(
        'Welche Lösung hat $|2x - 1| \\leq 5$?',
        ['$-2 \\leq x \\leq 3$', '$-3 \\leq x \\leq 2$', '$x \\leq 3$', '$|x| \\leq 5$'],
        0,
        `**Ansatz:** Doppelungleichung $-5 \\leq 2x - 1 \\leq 5$, dann beide Seiten umformen.

**Rechnung:**
$$-5 \\leq 2x - 1 \\leq 5 \\quad | +1 \\\\ -4 \\leq 2x \\leq 6 \\quad | : 2 \\\\ -2 \\leq x \\leq 3$$

**Probe:** $x = 3$: $|2 \\cdot 3 - 1| = |5| = 5 \\leq 5$ ✓; $x = -2$: $|-5| = 5 \\leq 5$ ✓; $x = 0$: $|-1| = 1 \\leq 5$ ✓.

**Typischer Fehler:** Doppelungleichung nur einseitig auflösen oder Vorzeichen verlieren.`,
        [
          'Doppelungleichung $-5 \\leq 2x - 1 \\leq 5$.',
          'Schritt 1: $+1$ in allen drei Teilen.',
          'Schritt 2: $:2$ (positiv) — Zeichen bleiben.',
        ],
        {
          1: 'Du hast die Vorzeichen vertauscht: $-2 \\leq x \\leq 3$ (richtig) hat untere Grenze $-2$, nicht $-3$. Bei der Berechnung $-4/2 = -2$, $6/2 = 3$ — die Reihenfolge der Ergebnisse muss erhalten bleiben.',
          2: 'Du hast nur die obere Grenze betrachtet und die untere weggelassen. $|2x-1| \\leq 5$ liefert beidseitige Schranken: zusätzlich $x \\geq -2$.',
          3: '$|2x - 1| \\leq 5$ ist NICHT äquivalent zu $|x| \\leq 5$ — der Term $2x - 1$ verschiebt und skaliert das Argument. Korrekte Lösung: $-2 \\leq x \\leq 3$, nicht $-5 \\leq x \\leq 5$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['betrag-kleiner'] },
      ),
    ],
    // [2] |x-a| > b
    2: [
      tf(
        'Für $b > 0$ ist $|x - a| > b$ äquivalent zu "$x < a - b$ ODER $x > a + b$".',
        true,
        `**Ansatz:** $|y| > b$ heißt "$y$ weiter als $b$ von $0$ entfernt".

**Rechnung:** Zwei Fälle: $y > b$ oder $y < -b$.

**Probe:** $|x - 3| > 2$: $x < 1$ ODER $x > 5$.

**Typischer Fehler:** ODER als UND behandeln.`,
        [
          'Abstand größer als $b$.',
          'Außerhalb des Intervalls $[a-b, a+b]$.',
          'ODER-Verknüpfung.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['betrag-groesser'] },
      ),
      mc(
        'Löse $|x - 3| > 4$.',
        ['$x < -1$ ODER $x > 7$', '$-1 < x < 7$', '$x > 7$ UND $x < -1$', '$x = 3$'],
        0,
        `**Ansatz:** $|y| > b$: $y < -b$ ODER $y > b$.

**Rechnung:** $x - 3 > 4 \\Rightarrow x > 7$ ODER $x - 3 < -4 \\Rightarrow x < -1$.

**Probe:** $x = 8$: $|8-3| = 5 > 4$ ✓. $x = -2$: $|-5| = 5 > 4$ ✓.

**Typischer Fehler:** UND statt ODER.`,
        [
          'Zwei separate Ungleichungen.',
          'ODER-Verknüpfung.',
          'Außerhalb des Intervalls.',
        ],
        {
          1: 'Das wäre $|x-3| < 4$.',
          2: 'UND ist logisch unmöglich (beide Bedingungen gleichzeitig geht nicht).',
          3: '$x = 3$ ist das Zentrum — NICHT im Lösungsbereich.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['betrag-groesser'] },
      ),
      ni(
        'Löse $|x + 2| > 3$ und gib die untere Grenze des oberen Teils an (also den Startpunkt des "$x > ?$"-Bereichs).',
        1, 0.01, '',
        `**Ansatz:** $|x - (-2)| > 3$: $x < -5$ ODER $x > 1$.

**Rechnung:** Oberer Teil: $x > 1$.

**Probe:** $x = 2$: $|2+2| = 4 > 3$ ✓.

**Typischer Fehler:** Zentrum $-2$ falsch.`,
        [
          'Zentrum $a = -2$.',
          'Radius $b = 3$.',
          'Obergrenze: $a + b = 1$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['betrag-groesser'] },
      ),
      mc(
        'Ein Schüler löst $|x - 5| > 2$ zu $3 < x < 7$. Wo liegt der Fehler?',
        [
          'Das ist die Lösung von $|x-5| < 2$, also genau das Gegenteil. Korrekt: $x < 3$ ODER $x > 7$.',
          'Zahlen vertauscht.',
          'Die Lösung ist korrekt.',
          'Betrag ist immer negativ.',
        ],
        0,
        `**Ansatz:** $>$ vs $<$ ergibt unterschiedliche Lösungen.

**Rechnung:** Korrekt: $x < 3$ ODER $x > 7$.

**Probe:** $x = 4$: $|4-5| = 1 < 2$, also NICHT Lösung — Schülerlösung enthält $x=4$ fälschlicherweise.

**Typischer Fehler:** Verwechslung von "innerhalb" und "außerhalb".`,
        [
          'Was heißt $>$ bei Betrag?',
          'Außerhalb des Intervalls.',
          'Zahlentest.',
        ],
        {
          1: 'Die Zahlen $3$ und $7$ sind als Intervallgrenzen richtig — der Schüler hat aber „innerhalb" und „außerhalb" verwechselt. $|x-5| > 2$ heißt **außerhalb** $[3, 7]$, nicht zwischen $3$ und $7$. Reine Zahlenkorrektur reicht hier nicht; die Logik kippt um.',
          2: 'Zahlentest widerlegt: $x = 4$ liegt in der Schülerlösung $3 < x < 7$, aber $|4-5| = 1$, also $1 > 2$ ist *falsch* — $x=4$ darf nicht in der Lösung sein. Damit ist $3 < x < 7$ definitiv falsch.',
          3: 'Beträge sind $\\geq 0$, aber das ist hier nicht das Problem — die Ungleichung $|x-5| > 2$ verlangt einen Abstand größer als $2$, was für viele $x$ erfüllbar ist. Der Fehler liegt darin, „außerhalb" mit „innerhalb" zu verwechseln.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['betrag-groesser', 'betrag-kleiner'] },
      ),
      matching(
        'Ordne jedem Betrags-Ausdruck seine Lösungsmenge zu.',
        [
          { left: '$|x| > 2$',             right: '$x < -2$ ODER $x > 2$' },
          { left: '$|x - 1| > 3$',         right: '$x < -2$ ODER $x > 4$' },
          { left: '$|x + 3| \\geq 5$',     right: '$x \\leq -8$ ODER $x \\geq 2$' },
          { left: '$|x - 0| > 4$',         right: '$x < -4$ ODER $x > 4$' },
        ],
        `**Ansatz:** $|x - a| > b$: außerhalb $[a-b, a+b]$.

**Rechnung:** ODER-Verknüpfung.

**Probe:** Zahlentest.

**Typischer Fehler:** UND statt ODER.`,
        [
          'Zentrum $a$, Radius $b$.',
          'Bereiche außerhalb.',
          'ODER-Logik.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['betrag-groesser', 'betrag-kleiner'] },
      ),
      ni(
        'Löse $|3x - 6| \\geq 9$ und gib die OBERE Grenze des LINKEN Lösungsteils an (also den Endpunkt von $x \\leq ?$).',
        -1, 0.01, '',
        `**Ansatz:** $|y| \\geq b$ liefert zwei separate Bereiche: $y \\leq -b$ ODER $y \\geq b$. Mit $y = 3x - 6$:

**Rechnung:**
$$3x - 6 \\geq 9 \\quad \\Rightarrow \\quad x \\geq 5$$
$$3x - 6 \\leq -9 \\quad \\Rightarrow \\quad 3x \\leq -3 \\quad \\Rightarrow \\quad x \\leq -1$$

Lösung: $x \\leq -1$ ODER $x \\geq 5$. Linker Teil endet bei $x = -1$.

**Probe:** $x = -1$: $|3 \\cdot (-1) - 6| = |-9| = 9 \\geq 9$ ✓ (Grenze eingeschlossen wegen $\\geq$). $x = 0$: $|-6| = 6$, nicht $\\geq 9$ — also $0$ NICHT in der Lösung, was zu „außerhalb $[-1, 5]$" passt.

**Typischer Fehler:** Beim zweiten Fall vergessen, das Vorzeichen zu drehen — also $-9$ rechts statt $+9$. Oder die Lösungsbereiche nicht in Intervall-Notation umrechnen, sondern direkt aus $|y| > b$ als $y > b$ schreiben (untere Grenze fehlt dann).`,
        [
          'Form $|y| \\geq b$ liefert zwei Bereiche, durch ODER verbunden.',
          'Mit $y = 3x - 6$: löse $3x - 6 \\geq 9$ UND $3x - 6 \\leq -9$ separat.',
          'Linker Teil: $x \\leq -1$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['betrag-groesser'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $|x - 5| > 3$ in die richtige Reihenfolge.',
        [
          'Form erkennen: $|x - a| > b$ mit $a = 5$, $b = 3$',
          'Zwei Fälle bilden: $x - 5 > 3$ ODER $x - 5 < -3$',
          'Beide Teile lösen: $x > 8$ ODER $x < 2$',
          'Lösungsmenge: $x < 2$ ODER $x > 8$ (nicht zusammengefasst, da disjunkt)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Betragsungleichung mit $>$ liefert ZWEI separate Halbgeraden, verbunden durch ODER.

**Rechnung:** Lösung: $x < 2$ ODER $x > 8$. Geometrisch: alle Punkte, deren Abstand zu $5$ größer als $3$ ist — außerhalb von $[2, 8]$.

**Probe:** $x = 0$: $|0 - 5| = 5 > 3$ ✓. $x = 10$: $|5| = 5 > 3$ ✓. $x = 4$: $|−1| = 1$, nicht $> 3$ — gehört nicht zur Lösung.

**Typischer Fehler:** Die Schritte als ein langes UND verbinden statt als ODER — die zwei Halbgeraden sind disjunkt und können nicht zu einem Intervall verschmolzen werden.`,
        [
          'Erst Form erkennen.',
          'Zwei Fälle separat aufstellen.',
          'Mit ODER verbinden, nicht UND.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['betrag-groesser', 'betrag-kleiner'] },
      ),
    ],
    // [3] Vorzeichentabelle
    3: [
      tf(
        'Quadratische Ungleichungen lassen sich durch Nullstellen + Vorzeichentabelle lösen.',
        true,
        `**Ansatz:** Nullstellen teilen die Zahlengerade in Intervalle; in jedem Intervall ist das Vorzeichen konstant.

**Rechnung:** $(x-a)(x-b)$ wechselt Vorzeichen bei $x = a$ und $x = b$.

**Probe:** $x^2 - 4 > 0$: Nullstellen $\\pm 2$, positiv für $|x| > 2$.

**Typischer Fehler:** Ohne Tabelle raten.`,
        [
          'Nullstellen teilen die Achse.',
          'Vorzeichen in jedem Abschnitt.',
          'Systematische Tabelle.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      mc(
        'Was ist die Lösung von $x^2 - 4 > 0$?',
        ['$x < -2$ ODER $x > 2$', '$-2 < x < 2$', '$x > 2$', 'Keine Lösung'],
        0,
        `**Ansatz:** Nullstellen $\\pm 2$. Parabel öffnet nach oben, positiv außerhalb.

**Rechnung:** Außerhalb der Nullstellen: $x < -2$ ODER $x > 2$.

**Probe:** $x = 3$: $9 - 4 = 5 > 0$ ✓.

**Typischer Fehler:** Innerhalb/außerhalb verwechseln.`,
        [
          '$(x-2)(x+2) > 0$.',
          'Beide Faktoren gleich signiert.',
          'Außerhalb $[-2, 2]$.',
        ],
        {
          1: '„Innerhalb" wäre die Lösung von $x^2 - 4 < 0$ — die Parabel liegt zwischen $-2$ und $2$ unterhalb der $x$-Achse. Hier suchst du das umgekehrte: $> 0$, also außerhalb der Nullstellen.',
          2: 'Du hast den unteren Ast vergessen. Probe: $x = -3$ erfüllt $x^2 - 4 = 9 - 4 = 5 > 0$ ✓, liegt aber nicht in „$x > 2$". Die Parabel ist nach unten symmetrisch — beide Äste außerhalb $\\pm 2$ erfüllen die Ungleichung.',
          3: 'Doch, die Ungleichung hat sehr wohl Lösungen — z. B. $x = 3$: $9 - 4 = 5 > 0$ ✓. „Keine Lösung" wäre nur bei einer nach oben offenen Parabel mit Minimum $> 0$ richtig (dann läge sie ganz oben), aber $x^2 - 4$ hat Minimum $-4 < 0$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      ni(
        'Für welche $x$ ist $x^2 - 6x + 5 < 0$? Gib die KLEINERE Intervallgrenze an.',
        1, 0.01, '',
        `**Ansatz:** Faktorisierung: $(x-1)(x-5)$.

**Rechnung:** Nullstellen $1, 5$. Parabel nach oben, negativ zwischen den Nullstellen: $1 < x < 5$.

**Probe:** $x = 3$: $9 - 18 + 5 = -4 < 0$ ✓.

**Typischer Fehler:** Grenzen vertauschen.`,
        [
          'Faktorisierung.',
          'Nullstellen bestimmen.',
          'Parabel-Verhalten zwischen NS.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      mc(
        'Ein Schüler löst $x^2 - 9 > 0$ zu $x > 3$. Wo liegt der Fehler?',
        [
          'Die negative Nullstelle $x = -3$ wurde vergessen: korrekt $x < -3$ ODER $x > 3$.',
          'Die Nullstelle $-3$ existiert nicht.',
          'Die Lösung ist korrekt.',
          '$x^2 - 9$ ist immer positiv.',
        ],
        0,
        `**Ansatz:** Parabel $x^2 - 9$ hat ZWEI Nullstellen $\\pm 3$, ist positiv außerhalb beider.

**Rechnung:** Korrekt: $x < -3$ ODER $x > 3$.

**Probe:** $x = -4$: $16 - 9 = 7 > 0$ ✓ — gehört zur Lösung.

**Typischer Fehler:** Nur eine Nullstelle betrachten.`,
        [
          '$x^2 = 9$ hat zwei Lösungen.',
          '$\\pm 3$.',
          'Beide beachten.',
        ],
        {
          1: 'Doch: $(-3)^2 = 9$, also $(-3)^2 - 9 = 0$. $x = -3$ IST eine Nullstelle. Die Parabel hat zwei symmetrische Nullstellen $\\pm 3$, und außerhalb beider ist $x^2 - 9 > 0$.',
          2: 'Probe widerlegt die Schülerlösung als „korrekt": $x = -4$ erfüllt $16 - 9 = 7 > 0$ ✓, liegt aber NICHT in $x > 3$. Die Schülerlösung enthält nur die rechte Hälfte der Lösungsmenge.',
          3: 'Bei $x = 0$ ist $0 - 9 = -9 < 0$, also nicht „immer positiv". Die Aussage des Schülers wäre richtig, wenn das Polynom als Summe zweier Quadrate $x^2 + 9$ formuliert wäre — bei $x^2 - 9$ existiert aber ein negativer Bereich zwischen den Nullstellen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      ni(
        'Für welche $x$ ist $x^2 + 2x - 8 \\geq 0$? Gib die GRÖSSERE Intervallgrenze an.',
        2, 0.01, '',
        `**Ansatz:** Faktorisieren oder pq-Formel; Vorzeichentabelle für quadratische Funktion mit positivem Leitkoeffizienten.

**Rechnung:** Nullstellen: $x_{1,2} = -1 \\pm \\sqrt{1 + 8} = -1 \\pm 3$. Also $x_1 = 2$, $x_2 = -4$. Faktorisierung: $(x + 4)(x - 2)$. Parabel öffnet nach oben → Werte $\\geq 0$ AUSSERHALB der Nullstellen: $x \\leq -4$ ODER $x \\geq 2$. Größere Grenze: $2$.

**Probe:** $x = 2$: $4 + 4 - 8 = 0 \\geq 0$ ✓ (Gleichheit). $x = 3$: $9 + 6 - 8 = 7 \\geq 0$ ✓. $x = 0$: $0 + 0 - 8 = -8$, nicht $\\geq 0$ — passt zu „außerhalb".

**Typischer Fehler:** Innerhalb statt außerhalb — bei nach oben geöffneter Parabel und $\\geq 0$ ist die Lösung außerhalb der Nullstellen.`,
        [
          'Faktorisieren: $(x+4)(x-2)$.',
          'Nullstellen $-4$ und $2$.',
          'Parabel nach oben → außerhalb $\\geq 0$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      mc(
        'Was ist die Lösung von $x^2 + 2x + 3 < 0$?',
        ['Keine reelle Lösung — Parabel liegt komplett über der $x$-Achse', 'Alle reellen $x$', '$x < -1$ ODER $x > 3$', '$-1 < x < 3$'],
        0,
        `**Ansatz:** Diskriminante prüfen — wenn $D < 0$, hat die Parabel keine reellen Nullstellen, liegt also entweder ganz oberhalb oder ganz unterhalb der $x$-Achse.

**Rechnung:** $D = 4 - 12 = -8 < 0$. Keine Nullstellen. Leitkoeffizient $> 0$ → Parabel öffnet nach oben → liegt komplett über der $x$-Achse. Damit ist $x^2 + 2x + 3 > 0$ für alle $x \\in \\mathbb{R}$, und $< 0$ für KEIN $x$. Lösungsmenge: $\\emptyset$.

**Probe:** Scheitel bei $x_S = -1$: $y_S = 1 - 2 + 3 = 2 > 0$. Tatsächlich liegt der tiefste Punkt bei $y = 2$, also weit über $0$ — nirgends ist $x^2 + 2x + 3 < 0$.

**Typischer Fehler:** Annehmen, jede quadratische Ungleichung habe einen Lösungsbereich. Bei $D < 0$ und passender Vorzeichen-Konstellation ist die Lösungsmenge entweder $\\emptyset$ oder $\\mathbb{R}$.`,
        [
          'Diskriminante: $D = b^2 - 4ac$.',
          'Bei $D < 0$ keine Nullstellen — Parabel ganz oben oder ganz unten.',
          'Leitkoeffizient bestimmt die Öffnungsrichtung.',
        ],
        {
          1: 'Alle reellen $x$ wäre die Lösung von $x^2 + 2x + 3 > 0$ (Parabel überall positiv). Hier ist die Frage genau umgekehrt: $< 0$, also wo die Parabel UNTER die $x$-Achse fällt — und das passiert nie.',
          2: 'Es gibt keine Nullstellen, also auch keine Intervallgrenzen $-1$ und $3$ — diese Zahlen tauchen in der Aufgabe nirgends auf. Die Lösung ist leer.',
          3: 'Auch dieses Intervall wäre nur sinnvoll, wenn die Parabel zwei Nullstellen bei $-1$ und $3$ hätte — was aber wegen $D < 0$ nicht der Fall ist.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['vz-tabelle'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $x^2 - 2x - 3 \\leq 0$ in die richtige Reihenfolge.',
        [
          'Nullstellen: $x_{1,2} = 1 \\pm 2$, also $x = -1$ und $x = 3$',
          'Faktorisieren: $(x+1)(x-3) \\leq 0$',
          'Vorzeichentabelle: Produkt negativ zwischen NS',
          'Lösung: $-1 \\leq x \\leq 3$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Nullstellen, Faktorisieren, Tabelle, Lösung.

**Rechnung:** $-1 \\leq x \\leq 3$.

**Probe:** $x = 0$: $-3 \\leq 0$ ✓.

**Typischer Fehler:** Tabelle weglassen.`,
        [
          'Zuerst Nullstellen.',
          'Faktorisierung.',
          'Vorzeichentabelle.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['vz-tabelle'] },
      ),
    ],
    // [4] Intervall-Notation
    4: [
      matching(
        'Ordne jeder Ungleichung ihre Intervall-Notation zu.',
        [
          { left: '$-3 < x < 5$',               right: '$(-3, 5)$' },
          { left: '$x \\leq 2$',                right: '$(-\\infty, 2]$' },
          { left: '$x > 0$',                     right: '$(0, \\infty)$' },
          { left: '$1 \\leq x \\leq 4$',         right: '$[1, 4]$' },
        ],
        `**Ansatz:** Runde Klammer für offen ($<, >$), eckige für geschlossen ($\\leq, \\geq$).

**Rechnung:** $\\infty$ immer offen.

**Probe:** Symbole konsistent mit Ungleichung.

**Typischer Fehler:** Runde/eckige vertauschen.`,
        [
          'Strikte Ungleichung → runde.',
          'Gleichheit erlaubt → eckige.',
          '$\\infty$ immer offen.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['intervall-notation'] },
      ),
      mc(
        'Schreibe $-1 < x \\leq 3$ in Intervall-Notation.',
        ['$(-1, 3]$', '$[-1, 3]$', '$(-1, 3)$', '$[-1, 3)$'],
        0,
        `**Ansatz:** Klammern nach Ungleichheitstyp.

**Rechnung:** Links offen (strikt), rechts geschlossen ($\\leq$): $(-1, 3]$.

**Probe:** Konsistent mit Ungleichung.

**Typischer Fehler:** Klammern verwechseln.`,
        [
          'Links $<$: runde $($.',
          'Rechts $\\leq$: eckige $]$.',
          'Zusammen: $(-1, 3]$.',
        ],
        {
          1: '$[-1, 3]$ schließt $-1$ EIN. Hier ist aber $x > -1$ strikt — also $-1$ ausgeschlossen, runde Klammer links. Eckige Klammer wäre nur bei $x \\geq -1$ richtig.',
          2: '$(-1, 3)$ hat rechts auch eine RUNDE Klammer — schließt $3$ also aus. Hier ist aber $x \\leq 3$, also $3$ eingeschlossen → eckige Klammer rechts $]$.',
          3: '$[-1, 3)$ hat die Klammern genau VERTAUSCHT: links eckig (= eingeschlossen), rechts rund (= ausgeschlossen). In der Aufgabe ist es umgekehrt: $-1$ ausgeschlossen ($<$), $3$ eingeschlossen ($\\leq$).',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['intervall-notation'] },
      ),
      mc(
        'Welche Ungleichung beschreibt das Intervall $[2, \\infty)$?',
        ['$x \\geq 2$', '$x > 2$', '$x \\leq 2$', '$x < 2$'],
        0,
        `**Ansatz:** Eckige Klammer bei $2$: Gleichheit erlaubt.

**Rechnung:** $x \\geq 2$.

**Probe:** Konsistent.

**Typischer Fehler:** Klammer falsch lesen.`,
        [
          'Eckige Klammer $\\to \\leq$ oder $\\geq$.',
          'Nach rechts offen.',
          '$x \\geq 2$.',
        ],
        {
          1: '$x > 2$ würde RUNDER Klammer entsprechen: $(2, \\infty)$. Hier ist aber eckige Klammer $[2, \\infty)$ — also $2$ EINGESCHLOSSEN, also $x \\geq 2$ (mit Gleichheit).',
          2: '$x \\leq 2$ entspricht dem Intervall $(-\\infty, 2]$ — Achse nach LINKS unbeschränkt, Endpunkt $2$ eingeschlossen. Hier ist es umgekehrt: nach RECHTS unbeschränkt ab $2$.',
          3: '$x < 2$ entspricht $(-\\infty, 2)$ mit beidseitig runden Klammern und nach LINKS unbeschränkt. Das ist die negative Version: $[2, \\infty)$ ist nach rechts unbeschränkt mit eckiger Klammer am Anfang.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['intervall-notation', 'vz-tabelle'] },
      ),
      mc(
        'Ein Schüler schreibt "$x < 5$" als $[5, \\infty)$. Wo liegt der Fehler?',
        [
          'Falsche Richtung und falsche Klammer: $x < 5$ ist $(-\\infty, 5)$.',
          'Er hätte $x > 5$ schreiben müssen.',
          'Die Notation ist korrekt.',
          'Ungleichungen haben keine Intervalle.',
        ],
        0,
        `**Ansatz:** $x < 5$ bedeutet nach LINKS unbeschränkt, $5$ nicht eingeschlossen.

**Rechnung:** $(-\\infty, 5)$.

**Probe:** $x = 0 < 5$ ✓; $0 \\in (-\\infty, 5)$.

**Typischer Fehler:** Richtung und Klammer verwechseln.`,
        [
          'Welche Richtung?',
          'Ist $5$ eingeschlossen?',
          'Offene vs. geschlossene Klammer.',
        ],
        {
          1: '$x > 5$ wäre $(5, \\infty)$ — runde Klammer und Richtung richtig. Aber der Schüler hatte $x < 5$ als Aufgabe, nicht $x > 5$. Die Korrektur greift inhaltlich daneben: nicht die Ungleichung umdrehen, sondern Intervall korrekt schreiben: $(-\\infty, 5)$.',
          2: '$[5, \\infty)$ ist tatsächlich falsch — aber zu sagen „ganz falsch" hilft dem Lerner nicht. Konkret: Der Schüler hat (a) die Richtung umgedreht (rechts statt links unbeschränkt) und (b) die Klammer bei $5$ falsch gewählt (eckig statt rund, da $x < 5$ den Wert $5$ ausschließt).',
          3: 'Ungleichungen lassen sich sehr wohl als Intervalle schreiben — das ist sogar eine sehr nützliche Standard-Notation. Hier konkret: $x < 5$ entspricht $(-\\infty, 5)$, also einseitig unbeschränkt nach links mit offener Grenze $5$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['intervall-notation'] },
      ),
      mc(
        'Welche Intervall-Notation entspricht der Lösungsmenge von $x^2 < 4$?',
        ['$(-2, 2)$', '$[-2, 2]$', '$(-\\infty, -2) \\cup (2, \\infty)$', '$(-2, 2]$'],
        0,
        `**Ansatz:** $x^2 < 4 \\Leftrightarrow |x| < 2 \\Leftrightarrow -2 < x < 2$ (strikt).

**Rechnung:** Beide Grenzen offen, weil die Ungleichung strikt ist ($<$, nicht $\\leq$). Intervall-Notation: $(-2, 2)$.

**Probe:** $x = 2$ wäre Grenzfall: $4 < 4$ ist falsch, also $2$ ausgeschlossen — passt zu offener Klammer. $x = 1$: $1 < 4$ ✓.

**Typischer Fehler:** Eckige Klammern bei strikter Ungleichung — würde $\\pm 2$ einschließen, was hier wegen $<$ falsch ist.`,
        [
          'Strikte Ungleichung $<$ → offene Klammer.',
          '$x^2 < 4 \\Leftrightarrow |x| < 2$.',
          'Beidseitig offen: $(-2, 2)$.',
        ],
        {
          1: 'Eckige Klammern $[-2, 2]$ würden $\\pm 2$ einschließen — bei $x = 2$ wäre aber $4 < 4$ falsch, also Grenze ausgeschlossen. Bei strikter Ungleichung sind beide Grenzen offen.',
          2: 'Das wäre die Lösung der UMGEKEHRTEN Ungleichung $x^2 > 4$. Hier ist die Bedingung $< 4$, also INNERHALB des Intervalls $[-2, 2]$ (strikt offen).',
          3: 'Halboffenes Intervall mit $2$ eingeschlossen passt nicht zur strikten Ungleichung $< 4$. Beide Grenzen müssen wegen $<$ offen sein: $(-2, 2)$.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['intervall-notation', 'vz-tabelle'] },
      ),
      ni(
        'Schreibe die Lösungsmenge der Ungleichung $-2 \\leq x < 5$ in Intervall-Notation und gib die Anzahl der enthaltenen GANZZAHLEN an (also wie viele ganze Zahlen liegen drin).',
        7, 0, '',
        `**Ansatz:** Intervall $[-2, 5)$ enthält die ganzen Zahlen von $-2$ (eingeschlossen) bis $4$ (denn $5$ ist offen, ausgeschlossen).

**Rechnung:** Aufzählung: $-2, -1, 0, 1, 2, 3, 4$. Das sind $7$ ganze Zahlen.

**Probe:** $5 - (-2) = 7$. Bei einer Mischung aus geschlossen-offen $[a, b)$ ist die Anzahl der ganzen Zahlen genau $b - a$ (wenn $a, b \\in \\mathbb{Z}$).

**Typischer Fehler:** $5$ als enthalten zählen — in $[-2, 5)$ ist $5$ AUSGESCHLOSSEN (runde Klammer rechts). Oder $-2$ ausschließen — eckige Klammer links bedeutet eingeschlossen.`,
        [
          'Intervall-Notation: $[-2, 5)$ — links eckig, rechts rund.',
          'Welche ganzen Zahlen liegen drin? Aufzählen.',
          'Bei eckiger Klammer Endpunkt mitzählen.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['intervall-notation'] },
      ),
      matching(
        'Ordne jeder Notation die passende Beschreibung zu.',
        [
          { left: '$(a, b)$',               right: 'offenes Intervall, $a$ und $b$ NICHT enthalten' },
          { left: '$[a, b]$',               right: 'geschlossenes Intervall, $a$ und $b$ enthalten' },
          { left: '$(a, b]$',               right: 'halboffen, $a$ nicht, $b$ ja' },
          { left: '$[a, b)$',               right: 'halboffen, $a$ ja, $b$ nicht' },
        ],
        `**Ansatz:** Runde = offen, eckige = geschlossen. Einzeln pro Seite.

**Rechnung:** Vier Varianten.

**Probe:** Konsistent mit Ungleichungen.

**Typischer Fehler:** Seiten verwechseln.`,
        [
          'Runde Klammer: offen.',
          'Eckige Klammer: geschlossen.',
          'Jede Seite einzeln.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['intervall-notation'] },
      ),
    ],
    // [5] Bruchungleichungen
    5: [
      tf(
        'Bei Bruchungleichungen muss man Polstellen des Nenners getrennt betrachten und eine Fallunterscheidung für Vorzeichen des Nenners machen.',
        true,
        `**Ansatz:** Multiplikation mit Nenner ändert Ungleichheitszeichen, wenn Nenner $< 0$.

**Rechnung:** $\\frac{1}{x-2} > 0$: nur wenn $x > 2$.

**Probe:** Polstelle $x = 2$ ausschließen.

**Typischer Fehler:** Quer-multiplizieren ohne Fallunterscheidung.`,
        [
          'Nenner kann Vorzeichen haben.',
          'Polstellen ausschließen.',
          'Fallunterscheidung nötig.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      mc(
        'Löse $\\dfrac{1}{x} > 0$.',
        ['$x > 0$', '$x \\neq 0$', '$x < 0$', 'Alle $x$'],
        0,
        `**Ansatz:** Bruch positiv genau dann, wenn Zähler und Nenner gleiches Vorzeichen.

**Rechnung:** Zähler $1 > 0$. Also Nenner $> 0$: $x > 0$.

**Probe:** $x = 1$: $1/1 = 1 > 0$ ✓.

**Typischer Fehler:** $x = 0$ übersehen.`,
        [
          'Zähler positiv.',
          'Wann ist $1/x > 0$?',
          'Nenner $> 0$.',
        ],
        {
          1: '$x = -1$: $1/(-1) = -1 < 0$ — nicht Lösung.',
          2: 'Bei $x < 0$ wäre $1/x < 0$.',
          3: 'Nicht für $x = 0$ (nicht definiert).',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      ni(
        'Löse $\\dfrac{x+1}{x-3} > 0$ und gib die KLEINERE Lösungsgrenze an (der offene Intervall-Start).',
        -1, 0.01, '',
        `**Ansatz:** Bruch positiv, wenn Zähler und Nenner gleiches Vorzeichen.

**Rechnung:** Zähler $x + 1$: NS $x = -1$. Nenner $x - 3$: NS $x = 3$. Lösung: $x < -1$ ODER $x > 3$. Kleinere Grenze: $-1$ (Intervall $(-\\infty, -1)$).

**Probe:** $x = -2$: $(-1)/(-5) = 0{,}2 > 0$ ✓.

**Typischer Fehler:** Quer-multiplizieren ohne Fallunterscheidung.`,
        [
          'Zähler-Nullstelle: $-1$.',
          'Nenner-Nullstelle: $3$ (Polstelle).',
          'Vorzeichentabelle.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      mc(
        'Ein Schüler multipliziert $\\dfrac{2}{x} > 1$ mit $x$ zu $2 > x$ und schreibt $x < 2$. Wo liegt der Fehler?',
        [
          'Er hat ohne Fallunterscheidung mit $x$ multipliziert — für $x < 0$ müsste das Zeichen umdrehen. Korrekt: $0 < x < 2$ (für $x < 0$ ist $2/x < 0 < 1$, keine Lösung).',
          'Die Rechnung ist korrekt.',
          'Er hätte direkt nach $x$ auflösen müssen: $x > 2$.',
          'Die Ungleichung hat keine Lösung.',
        ],
        0,
        `**Ansatz:** Beim Multiplizieren einer Ungleichung mit $x$ muss man Vorzeichen-Fälle unterscheiden — sonst flippt das Ergebnis im negativen Bereich.

**Rechnung:** Fall $x > 0$: $2 > x \\Rightarrow 0 < x < 2$. Fall $x < 0$: aus $\\frac{2}{x} > 1$ wird beim Multiplizieren mit dem negativen $x$ das Zeichen umgedreht: $2 < x$, also $x > 2$. Zusammen mit $x < 0$ ergibt das **keine Lösung** (leerer Schnitt). Polstelle $x = 0$ ist ausgeschlossen. Lösungsmenge: $\\mathbb{L} = (0, 2)$.

**Probe:** $x = 1$: $\\frac{2}{1} = 2 > 1$ ✓. $\\quad x = -1$: $\\frac{2}{-1} = -2$, nicht $> 1$ ✗ — der Bereich $x < 0$ aus der Schülerlösung ist falsch. $\\quad x = 3$: $\\frac{2}{3} \\approx 0{,}67$, nicht $> 1$ ✗ — auch $x > 2$ scheidet aus.

**Typischer Fehler:** Mit dem Nenner quer-multiplizieren, ohne sein Vorzeichen zu prüfen, und dabei zusätzlich die Polstelle übersehen.`,
        [
          'Vorzeichen des Nenners beachten.',
          'Zwei Fälle: $x > 0$ und $x < 0$.',
          'Polstelle $x = 0$ ausschließen.',
        ],
        {
          1: 'Die Schülerrechnung ist nicht korrekt: sie enthält $x = -1$ (wegen $-1 < 2$), aber dort ist $\\frac{2}{-1} = -2$, also *nicht* $> 1$. Außerdem fehlt der Ausschluss der Polstelle $x = 0$. Korrekt ist nur $0 < x < 2$.',
          2: 'Direkt zu $x > 2$ aufzulösen wäre noch fataler — Probe mit $x = 3$: $\\frac{2}{3} \\approx 0{,}67$, das ist *nicht* $> 1$. Die richtige Lösung liegt zwischen $0$ und $2$, nicht darüber.',
          3: 'Doch, die Ungleichung hat eine Lösung: $x = 1$ liefert $\\frac{2}{1} = 2 > 1$ ✓. Lösungsmenge ist das Intervall $(0, 2)$.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      ni(
        'Löse $\\dfrac{x - 4}{x + 1} \\leq 0$ und gib die GRÖSSERE Intervallgrenze an (also den Endpunkt von $x \\leq ?$, wo Gleichheit gilt).',
        4, 0.01, '',
        `**Ansatz:** Bruch $\\leq 0$ heißt Zähler und Nenner haben verschiedene Vorzeichen ODER Zähler $= 0$. Polstelle $x = -1$ ausschließen (Nenner $= 0$).

**Rechnung:** Zähler-Nullstelle: $x = 4$. Nenner-Nullstelle: $x = -1$ (Polstelle, ausgeschlossen). Vorzeichen-Tabelle:

| Bereich | $x - 4$ | $x + 1$ | Bruch |
|---|---|---|---|
| $x < -1$ | $-$ | $-$ | $+$ |
| $-1 < x < 4$ | $-$ | $+$ | $-$ |
| $x > 4$ | $+$ | $+$ | $+$ |

Bruch $\\leq 0$: Bereich $-1 < x \\leq 4$ ($x = 4$ erlaubt, weil Zähler $= 0$ den Bruch zu $0$ macht; $x = -1$ ist Polstelle, ausgeschlossen).

Lösungsmenge: $(-1, 4]$. Größere Grenze: $4$ (eingeschlossen wegen Gleichheit).

**Probe:** $x = 4$: $\\dfrac{0}{5} = 0 \\leq 0$ ✓ (Gleichheit erlaubt). $x = 0$: $\\dfrac{-4}{1} = -4 \\leq 0$ ✓. $x = 5$: $\\dfrac{1}{6} > 0$, nicht $\\leq 0$.

**Typischer Fehler:** Quer-multiplizieren mit $x + 1$ ohne Fallunterscheidung — bei $x + 1 < 0$ würde sich das Zeichen drehen. Sauberer Weg: Vorzeichen-Tabelle.`,
        [
          'Zähler-Nullstelle: $x = 4$. Nenner-Nullstelle: $x = -1$ (Polstelle).',
          'Vorzeichen-Tabelle: drei Bereiche prüfen.',
          'Bei $\\leq 0$ ist $x = 4$ eingeschlossen (Zähler $= 0$), $x = -1$ ausgeschlossen (Nenner $= 0$).',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      mc(
        'Welcher der folgenden Werte gehört NICHT zur Lösungsmenge von $\\dfrac{2}{x - 3} > 1$?',
        ['$x = 3$', '$x = 4$', '$x = 4{,}5$', '$x = 4{,}9$'],
        0,
        `**Ansatz:** Polstelle ausschließen, dann Vorzeichen-Tabelle. Hier zusätzlich Lösung bestimmen, dann Werte testen.

**Rechnung:** Zunächst $x = 3$ ausschließen (Polstelle, Nenner $= 0$). Für $x \\neq 3$ umformen:
$$\\dfrac{2}{x-3} > 1 \\Leftrightarrow \\dfrac{2}{x-3} - 1 > 0 \\Leftrightarrow \\dfrac{2 - (x-3)}{x-3} > 0 \\Leftrightarrow \\dfrac{5 - x}{x - 3} > 0$$

Vorzeichen: Zähler $5 - x = 0$ bei $x = 5$; Nenner $x - 3 = 0$ bei $x = 3$. Bruch $> 0$ in $3 < x < 5$ (beide negativ vor $x = 3$ heben sich auf, danach $+/+$ bei $3 < x < 5$, danach $-/+$ bei $x > 5$).

Lösung: $3 < x < 5$. Polstelle $x = 3$ ausgeschlossen.

**Probe:** $x = 3$: undefiniert (Division durch Null) — gehört NICHT zur Lösung. $x = 4$: $\\frac{2}{1} = 2 > 1$ ✓. $x = 4{,}5$: $\\frac{2}{1{,}5} \\approx 1{,}33 > 1$ ✓. $x = 4{,}9$: $\\frac{2}{1{,}9} \\approx 1{,}05 > 1$ ✓.

**Typischer Fehler:** Polstelle nicht ausschließen — wer $x = 3$ einsetzt, erhält $\\frac{2}{0}$ (undefiniert), nicht ein Ungleichungsergebnis.`,
        [
          'Polstelle bestimmen: Nenner $= 0$ bei $x = 3$.',
          'Polstelle gehört NIE zur Lösungsmenge.',
          'Andere Werte testen.',
        ],
        {
          1: '$x = 4$ ist in Lösungsmenge: $\\frac{2}{4-3} = 2 > 1$ ✓.',
          2: '$x = 4{,}5$ ist in Lösungsmenge: $\\frac{2}{1{,}5} \\approx 1{,}33 > 1$ ✓.',
          3: '$x = 4{,}9$ ist auch in Lösungsmenge: $\\frac{2}{1{,}9} \\approx 1{,}05 > 1$ ✓ (knapp, aber > 1).',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
      sorting(
        'Bringe die Schritte zur Lösung von $\\dfrac{x-1}{x+2} \\geq 0$ in die richtige Reihenfolge.',
        [
          'Zähler-Nullstelle: $x = 1$; Nenner-Nullstelle: $x = -2$ (Polstelle, ausgeschlossen)',
          'Vorzeichentabelle mit Abschnitten $x < -2$, $-2 < x < 1$, $x > 1$',
          'Vorzeichen bestimmen: $(+)/(+) > 0$ bei $x > 1$; $(-)/(-) > 0$ bei $x < -2$',
          'Lösung: $x < -2$ ODER $x \\geq 1$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Nullstellen, Polstellen, Tabelle, Lösung.

**Rechnung:** Lösung: $(-\\infty, -2) \\cup [1, \\infty)$.

**Probe:** $x = 2$: $1/4 > 0$ ✓.

**Typischer Fehler:** Polstelle nicht ausschließen.`,
        [
          'NS und Polstellen.',
          'Tabelle.',
          'Polstelle offen.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['bruch-ungl-pol'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-3-1 — Funktionsbegriff (3 SGs, 16 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-3-1': {
    // [0] Funktionsdefinition
    0: [
      tf(
        'Eine Funktion ordnet jedem Element aus dem Definitionsbereich GENAU EIN Element aus der Zielmenge zu.',
        true,
        `**Ansatz:** Definition der Funktion — eindeutige Zuordnung.

**Rechnung:** Jedes $x \\in D$ hat genau ein $y = f(x)$. Nicht null, nicht zwei.

**Probe:** Bei $f(x) = x^2$: $f(3) = 9$ (eindeutig), nicht "mal $9$, mal $-9$".

**Typischer Fehler:** Relationen mit Funktionen verwechseln.`,
        [
          'Was ist "genau ein"?',
          'Eindeutigkeit.',
          'Pro $x$ ein $y$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['fkt-def'] },
      ),
      mc(
        'Wie prüft man grafisch, ob eine Kurve eine Funktion darstellt?',
        [
          'Vertikaler Linientest: jede Senkrechte schneidet die Kurve höchstens einmal',
          'Horizontaler Linientest: jede Waagrechte schneidet die Kurve einmal',
          'Die Kurve muss geschlossen sein',
          'Die Kurve muss durch den Ursprung gehen',
        ],
        0,
        `**Ansatz:** Vertikale Linie = alle Punkte mit gleichem $x$. Mehrere $y$-Werte pro $x$ würden bedeuten: keine Funktion.

**Rechnung:** $x^2 + y^2 = 1$ (Kreis): vertikale Linie $x = 0.5$ schneidet zwei Punkte → keine Funktion.

**Probe:** Parabel $y = x^2$: jede Senkrechte schneidet max. einmal → Funktion.

**Typischer Fehler:** Vertikal/horizontal verwechseln.`,
        [
          'Welche Achse teste ich?',
          'Senkrechte zur $x$-Achse.',
          'Max. ein Schnittpunkt.',
        ],
        {
          1: 'Horizontaler Linientest prüft Injektivität, nicht Funktions-Eigenschaft.',
          2: 'Offene Kurven können Funktionen sein (z. B. Geraden).',
          3: 'Kein Kriterium — $y = x + 1$ ist Funktion, geht nicht durch Ursprung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['fkt-graph'] },
      ),
      mc(
        'Welche Kurve ist KEINE Funktion?',
        [
          'Der Kreis $x^2 + y^2 = 1$',
          'Die Parabel $y = x^2$',
          'Die Gerade $y = 2x + 1$',
          'Die Wurzel $y = \\sqrt{x}$ (nur der positive Ast)',
        ],
        0,
        `**Ansatz:** Vertikaler Linientest.

**Rechnung:** Kreis: Senkrechte $x = 0$ schneidet Kreis bei $y = 1$ UND $y = -1$ → keine Funktion.

**Probe:** Andere bestehen den Test.

**Typischer Fehler:** Kreis als Funktion akzeptieren.`,
        [
          'Denke: $x = 0$ in einen Kreis.',
          'Wie viele $y$-Werte?',
          'Vertikaler Linientest.',
        ],
        {
          1: 'Jede Senkrechte schneidet Parabel einmal.',
          2: 'Jede Gerade $y = mx + b$ ist Funktion.',
          3: 'Positiver Ast ist Funktion (eindeutig).',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['fkt-graph'] },
      ),
      mc(
        'Ein Schüler zeichnet $x = y^2$ und behauptet, es sei eine Funktion $y$ von $x$. Wo liegt der Fehler?',
        [
          'Bei $x = 4$ gibt es zwei $y$-Werte: $y = 2$ und $y = -2$. Vertikaler Linientest scheitert.',
          'Er hätte $y$ quadrieren müssen.',
          'Die Kurve ist korrekt eine Funktion.',
          'Die Umformung fehlt.',
        ],
        0,
        `**Ansatz:** $x = y^2$ ergibt $y = \\pm \\sqrt{x}$ — zwei Werte pro $x$.

**Rechnung:** $x = 4 \\Rightarrow y = \\pm 2$.

**Probe:** Vertikaler Test bei $x = 4$: zwei Schnittpunkte.

**Typischer Fehler:** $x$ und $y$ rollenverwirren.`,
        [
          'Zeichne $x = y^2$.',
          'Was passiert bei $x = 4$?',
          'Zwei Werte für $y$?',
        ],
        {
          1: 'Quadrieren macht die Kurve zwei-ärmig.',
          2: 'Zahlentest zeigt Gegenteil.',
          3: 'Das wäre $y = \\sqrt{x}$ oder $y = -\\sqrt{x}$ — unterschiedliche Funktionen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['fkt-def'] },
      ),
      matching(
        'Ordne jedem Sachverhalt zu, ob es eine Funktion ist oder nicht.',
        [
          { left: '$y = x^2$',                      right: 'Funktion' },
          { left: '$y = \\pm\\sqrt{x}$',            right: 'KEINE Funktion' },
          { left: 'Geburtstag einer Person',         right: 'Funktion' },
          { left: 'Personen zu einem Datum',         right: 'KEINE Funktion (viele Personen)' },
        ],
        `**Ansatz:** Eindeutige Zuordnung oder nicht.

**Rechnung:** Funktion = pro Input genau ein Output.

**Probe:** Jede Zeile durchgehen.

**Typischer Fehler:** Bijektivität mit Funktion verwechseln.`,
        [
          'Pro Input genau ein Output?',
          'Alltagsbeispiele mit Zuordnungen.',
          'Eindeutigkeit.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['fkt-def'] },
      ),
    ],
    // [1] Definitionsbereich
    1: [
      tf(
        'Der Definitionsbereich von $f(x) = 1/(x-2)$ ist $\\mathbb{R} \\setminus \\{2\\}$ (alle Zahlen außer $2$).',
        true,
        `**Ansatz:** Division durch $0$ verboten — Polstelle ausschließen.

**Rechnung:** $x - 2 = 0 \\Leftrightarrow x = 2$: NICHT erlaubt.

**Probe:** Für alle anderen $x$ ist $f$ definiert.

**Typischer Fehler:** Polstelle nicht ausschließen.`,
        [
          'Welche Zahl macht den Nenner $0$?',
          'Division durch $0$ verboten.',
          'Definitionsbereich ausschließen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['def-bereich'] },
      ),
      mc(
        'Bestimme den Definitionsbereich von $f(x) = \\sqrt{x - 3}$.',
        ['$x \\geq 3$', '$x > 3$', '$x \\leq 3$', '$x \\neq 3$'],
        0,
        `**Ansatz:** Radikand $\\geq 0$.

**Rechnung:** $x - 3 \\geq 0 \\Leftrightarrow x \\geq 3$.

**Probe:** $x = 3$: $\\sqrt{0} = 0$ ✓. $x = 2$: $\\sqrt{-1}$ — nicht definiert in $\\mathbb{R}$.

**Typischer Fehler:** $>$ statt $\\geq$.`,
        [
          'Wurzel erlaubt was?',
          'Radikand $\\geq 0$.',
          '$x - 3 \\geq 0$.',
        ],
        {
          1: 'Bei $x = 3$ ist $\\sqrt{0}$ definiert.',
          2: 'Falsche Richtung.',
          3: '$x = 3$ ist erlaubt, nicht verboten.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['def-bereich'] },
      ),
      mc(
        'Welchen maximalen Definitionsbereich hat $f(x) = \\ln(x)$?',
        ['$x > 0$', '$x \\geq 0$', '$x \\neq 0$', '$\\mathbb{R}$'],
        0,
        `**Ansatz:** Logarithmus-Argument $> 0$.

**Rechnung:** $x > 0$ strikt.

**Probe:** $x = 1$: $\\ln 1 = 0$ ✓. $x = 0$: $\\ln 0 = -\\infty$ — nicht definiert.

**Typischer Fehler:** $\\geq 0$.`,
        [
          'Log-Argument?',
          'Muss strikt positiv.',
          '$x > 0$.',
        ],
        {
          1: '$\\ln 0$ ist nicht definiert.',
          2: 'Negative Zahlen auch nicht.',
          3: 'Nur positive Zahlen.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['def-bereich', 'wertebereich'] },
      ),
      mc(
        'Welchen maximalen Definitionsbereich hat $f(x) = \\dfrac{\\sqrt{x+2}}{x-1}$?',
        ['$x \\geq -2$ und $x \\neq 1$', '$x \\geq -2$', '$x > 1$', '$\\mathbb{R} \\setminus \\{1\\}$'],
        0,
        `**Ansatz:** Beide Bedingungen: Radikand $\\geq 0$ UND Nenner $\\neq 0$.

**Rechnung:** $x + 2 \\geq 0 \\Leftrightarrow x \\geq -2$. Und $x - 1 \\neq 0 \\Leftrightarrow x \\neq 1$.

**Probe:** $x = 0$: $\\sqrt{2}/(-1) = -\\sqrt{2}$ ✓. $x = 1$: Division durch $0$.

**Typischer Fehler:** Nur eine Bedingung berücksichtigen.`,
        [
          'Zwei Einschränkungen.',
          'Wurzel UND Nenner prüfen.',
          'Beide gleichzeitig.',
        ],
        {
          1: '$x = 1$ vergessen.',
          2: '$x = -3$: $\\sqrt{-1}$ nicht definiert.',
          3: 'Wurzel-Restriktion fehlt.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['def-bereich', 'wertebereich'] },
      ),
      mc(
        'Ein Schüler sagt, der Definitionsbereich von $f(x) = 1/(x^2 + 1)$ sei $x \\neq 1$. Wo liegt der Fehler?',
        [
          '$x^2 + 1$ ist IMMER $> 0$ — nie $0$. Definitionsbereich: $\\mathbb{R}$.',
          'Er hätte $x \\neq \\pm 1$ schreiben müssen.',
          'Die Antwort ist korrekt.',
          'Nenner muss negativ sein.',
        ],
        0,
        `**Ansatz:** Wann ist $x^2 + 1 = 0$? Nie (in $\\mathbb{R}$).

**Rechnung:** $x^2 \\geq 0$, also $x^2 + 1 \\geq 1 > 0$.

**Probe:** Für alle $x$ ist $f(x)$ definiert.

**Typischer Fehler:** $x^2 + 1$ mit $x + 1$ verwechseln.`,
        [
          'Kann $x^2 + 1$ null sein?',
          '$x^2 \\geq 0$, also $x^2 + 1 \\geq 1$.',
          'Nie $0$.',
        ],
        {
          1: '$x^2 + 1$ ist kein $x^2 - 1$.',
          2: 'Zahlentest widerlegt.',
          3: 'Der Nenner ist nie negativ.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['def-bereich'] },
      ),
      matching(
        'Ordne jeder Funktion ihren maximalen Definitionsbereich zu.',
        [
          { left: '$f(x) = \\sqrt{x}$',           right: '$x \\geq 0$' },
          { left: '$f(x) = \\ln(x)$',             right: '$x > 0$' },
          { left: '$f(x) = 1/x$',                 right: '$x \\neq 0$' },
          { left: '$f(x) = x^2$',                 right: '$\\mathbb{R}$ (alle reellen Zahlen)' },
        ],
        `**Ansatz:** Jeder Typ hat typische Einschränkungen.

**Rechnung:** Wurzel $\\geq 0$, Log $> 0$, Bruch $\\neq 0$, Polynom überall.

**Probe:** Kritische Stellen prüfen.

**Typischer Fehler:** Strikte vs. nicht-strikte Ungleichung.`,
        [
          'Wurzel nicht-negativ.',
          'Logarithmus strikt positiv.',
          'Polynome unbeschränkt.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['def-bereich'] },
      ),
    ],
    // [2] Injektiv / Surjektiv / Bijektiv
    2: [
      matching(
        'Ordne jedem Begriff seine Definition zu.',
        [
          { left: 'Injektiv',     right: 'Verschiedene $x$-Werte haben verschiedene Funktionswerte' },
          { left: 'Surjektiv',    right: 'Jeder Wert der Zielmenge wird erreicht' },
          { left: 'Bijektiv',     right: 'Injektiv UND surjektiv' },
          { left: 'Umkehrbar',    right: 'Bijektiv (hat Umkehrfunktion)' },
        ],
        `**Ansatz:** Drei Eigenschaften, präzise Definitionen.

**Rechnung:** Injektiv: $f(a) = f(b) \\Rightarrow a = b$. Surjektiv: $\\forall y \\exists x: f(x) = y$.

**Probe:** Beispiele: $f(x) = 2x$ bijektiv; $f(x) = x^2$ auf $\\mathbb R$ weder.

**Typischer Fehler:** Injektiv und surjektiv verwechseln.`,
        [
          'Injektiv = Eindeutigkeit nach unten.',
          'Surjektiv = Vollständigkeit nach oben.',
          'Bijektiv = beide.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['injektiv', 'surjektiv', 'bijektiv'] },
      ),
      mc(
        'Ist $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$ injektiv?',
        ['Nein, weil $f(2) = f(-2) = 4$', 'Ja', 'Nur auf $[0, \\infty)$', 'Teilweise'],
        0,
        `**Ansatz:** Injektivität: verschiedene $x$ → verschiedene $y$.

**Rechnung:** $f(2) = 4$ und $f(-2) = 4$. Verschiedene $x$, gleiches $y$ — nicht injektiv.

**Probe:** Horizontaler Linientest: $y = 4$ schneidet zweimal.

**Typischer Fehler:** Injektivität mit Funktion verwechseln.`,
        [
          'Ist die Zuordnung umkehrbar eindeutig?',
          '$f(2)$ und $f(-2)$.',
          'Gleiche $y$-Werte bei verschiedenen $x$?',
        ],
        {
          1: 'Auf ganz $\\mathbb{R}$ ist $f(x)=x^2$ nicht injektiv: $f(2) = f(-2) = 4$ liefert ein konkretes Gegenbeispiel. „Ja" gälte nur, wenn man den Definitionsbereich einschränkt — die Frage stellt aber explizit $D = \\mathbb{R}$.',
          2: 'Diese Aussage ist isoliert wahr, beantwortet aber die Frage nicht: Gefragt ist die Injektivität *auf $\\mathbb{R}$*, nicht auf einem eingeschränkten Bereich. Auf $\\mathbb{R}$ scheitert die Injektivität an Paaren wie $\\pm 2 \\to 4$.',
          3: 'Injektivität ist eine binäre Eigenschaft — eine Funktion ist auf einem festen Definitionsbereich entweder injektiv oder nicht. Eine korrekte Antwort wäre: nicht injektiv auf $\\mathbb{R}$, weil Gegenbeispiele wie $f(2) = f(-2) = 4$ existieren.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['injektiv'] },
      ),
      mc(
        'Ist $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^3 + 1$ bijektiv?',
        ['Ja', 'Nein, nicht injektiv', 'Nein, nicht surjektiv', 'Nicht entscheidbar'],
        0,
        `**Ansatz:** $x^3$ ist bijektiv auf $\\mathbb{R}$; eine konstante Verschiebung ändert das nicht.

**Rechnung:** $f'(x) = 3x^2 \\geq 0$ und $= 0$ nur bei $x = 0$ — die Funktion ist streng monoton steigend, also *injektiv*. Wertebereich: für $x \\to \\pm\\infty$ geht $f(x) \\to \\pm\\infty$, also wird ganz $\\mathbb{R}$ getroffen — *surjektiv*. Beides zusammen: bijektiv.

**Probe:** Zu jedem $y$ existiert genau ein $x = \\sqrt[3]{y - 1}$. Beispiel: $y = 9 \\Rightarrow x = \\sqrt[3]{8} = 2$, und $f(2) = 8 + 1 = 9$ ✓.

**Typischer Fehler:** Mit $x^2$ verwechseln — gerade Potenzen sind nicht injektiv, ungerade schon.`,
        [
          'Streng monoton?',
          'Wertebereich $\\mathbb{R}$?',
          'Beides ✓.',
        ],
        {
          1: 'Doch — $f$ ist injektiv. $f(x) = x^3 + 1$ ist streng monoton steigend ($f\'(x) = 3x^2 \\geq 0$, mit Gleichheit nur an einem isolierten Punkt). Verwechslung mit $x^2$: dort wäre $f(2)=f(-2)$, aber bei $x^3$ gilt $2^3 = 8 \\neq -8 = (-2)^3$.',
          2: 'Doch — der Wertebereich ist ganz $\\mathbb{R}$. $x^3$ überstreicht alle reellen Werte ($x \\to \\pm\\infty \\Rightarrow x^3 \\to \\pm\\infty$); die Verschiebung um $+1$ verschiebt nur, ohne zu beschränken. Also surjektiv.',
          3: 'Doch — die Bijektivität lässt sich klar entscheiden: streng monoton (Ableitung nicht-negativ und nur isoliert null) liefert Injektivität, $f(\\mathbb{R}) = \\mathbb{R}$ Surjektivität. Antwort: bijektiv.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['bijektiv'] },
      ),
      mc(
        'Ein Schüler sagt: "Jede injektive Funktion ist auch surjektiv, weil beides ähnliche Bedingungen sind." Wo liegt der Fehler?',
        [
          'Injektiv und surjektiv sind UNABHÄNGIGE Eigenschaften. Bsp.: $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = e^x$ ist injektiv, aber nicht surjektiv (kein $x$ mit $e^x = -1$).',
          'Injektiv impliziert surjektiv stimmt.',
          'Er hat recht.',
          'Surjektiv impliziert injektiv, nicht umgekehrt.',
        ],
        0,
        `**Ansatz:** Die Begriffe sind verschieden und unabhängig.

**Rechnung:** $e^x$: injektiv (streng monoton), aber Wertebereich $(0, \\infty) \\neq \\mathbb{R}$.

**Probe:** Gegenbeispiel zeigt Unabhängigkeit.

**Typischer Fehler:** Definitionen nicht auseinanderhalten.`,
        [
          'Prüfe Exponentialfunktion.',
          'Ist $e^x$ surjektiv auf $\\mathbb{R}$?',
          'Wertebereich.',
        ],
        {
          1: 'Das Gegenbeispiel widerlegt diese Implikation: $e^x$ ist injektiv (streng monoton steigend), aber nicht surjektiv auf $\\mathbb{R}$ — der Wert $-1$ liegt im Zielbereich, hat aber kein Urbild, weil $e^x > 0$ für alle $x$.',
          2: 'Der Schüler liegt nicht richtig. Injektiv und surjektiv sind unabhängige Eigenschaften: $f(x) = e^x: \\mathbb{R} \\to \\mathbb{R}$ ist nur injektiv (Wertebereich $(0, \\infty)$ deckt nicht ganz $\\mathbb{R}$), $f(x) = x^2: \\mathbb{R} \\to [0, \\infty)$ ist nur surjektiv (aber $f(2)=f(-2)$).',
          3: 'Falsche Implikationsrichtung — und auch die umgekehrte gilt nicht. Surjektivität sagt nichts über Eindeutigkeit aus: $f(x) = x^3 - x: \\mathbb{R} \\to \\mathbb{R}$ ist surjektiv, aber wegen $f(0) = f(1) = f(-1) = 0$ nicht injektiv.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['injektiv', 'surjektiv'] },
      ),
      tf(
        'Nur bijektive Funktionen haben eine Umkehrfunktion (auf ihrem Bildbereich).',
        true,
        `**Ansatz:** Umkehrfunktion braucht eindeutige Umkehrung.

**Rechnung:** Nicht-injektive Funktion: mehrere $x$ für ein $y$ → Umkehrung mehrdeutig.

**Probe:** $f(x) = x^2$ auf $\\mathbb{R}$: nicht umkehrbar. Auf $[0, \\infty)$: umkehrbar, $f^{-1}(y) = \\sqrt{y}$.

**Typischer Fehler:** Umkehrbarkeit mit "existiert irgendwie" verwechseln.`,
        [
          'Wann ist Umkehrung eindeutig?',
          'Bijektivität nötig.',
          'Auf passendem Bildbereich.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['bijektiv'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-3-2 — Elementare Funktionen (6 SGs, 30 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-3-2': {
    // [0] Potenzfunktion
    0: [
      tf(
        'Die Potenzfunktion $f(x) = x^n$ mit geradem $n$ ist achsensymmetrisch zur $y$-Achse.',
        true,
        `**Ansatz:** $f(-x) = (-x)^n = x^n = f(x)$ für gerade $n$.

**Rechnung:** $x^2, x^4, x^6, \\ldots$ — alle haben Parabel-/U-Form.

**Probe:** $f(-3) = 9 = f(3)$ bei $n = 2$.

**Typischer Fehler:** Gerade vs. ungerade verwechseln.`,
        [
          'Was bedeutet achsensymmetrisch?',
          '$f(-x) = f(x)$.',
          'Gilt für $(-x)^n$?',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['potenz-fkt'] },
      ),
      mc(
        'Welcher Graph passt zu $f(x) = x^3$?',
        [
          'S-Form, punktsymmetrisch zum Ursprung',
          'Parabel, achsensymmetrisch zur $y$-Achse',
          'Gerade durch Ursprung',
          'Exponentialkurve',
        ],
        0,
        `**Ansatz:** Ungerade Potenzen: S-Form, punktsymmetrisch.

**Rechnung:** $f(-x) = -x^3 = -f(x)$ → Punktsymmetrie.

**Probe:** $f(1) = 1$, $f(-1) = -1$, $f(2) = 8$, $f(-2) = -8$.

**Typischer Fehler:** $x^3$ mit $x^2$ verwechseln.`,
        [
          'Exponent $3$ — gerade oder ungerade?',
          'Ungerade: punktsymmetrisch.',
          'S-Kurve.',
        ],
        {
          1: 'Parabel ist $x^2$, gerade Potenzen.',
          2: 'Gerade wäre $f(x) = mx$.',
          3: 'Exponentialkurve $a^x$, nicht $x^n$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['potenz-fkt'] },
      ),
      matching(
        'Ordne jeder Potenzfunktion ihre typische Graphen-Eigenschaft zu.',
        [
          { left: '$x^2$',    right: 'Parabel, Minimum bei $0$' },
          { left: '$x^3$',    right: 'S-Form, Wendepunkt bei $0$' },
          { left: '$x^4$',    right: 'Parabel-ähnlich, flacher bei $0$' },
          { left: '$x^{-1}$', right: 'Hyperbel, Polstelle bei $0$' },
        ],
        `**Ansatz:** Unterschiedliche Exponenten → unterschiedliche Kurvenformen.

**Rechnung:** Gerade: U-Form; ungerade: S-Form; negativ: Hyperbel.

**Probe:** Zahlenwerte berechnen und zeichnen.

**Typischer Fehler:** $x^{-1}$ mit Polynom verwechseln.`,
        [
          'Exponenten bestimmen Form.',
          'Gerade / ungerade / negativ.',
          'Jeder Typ eigene Kurve.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['potenz-fkt'] },
      ),
      mc(
        'Ein Schüler zeichnet $f(x) = x^4$ als S-Kurve. Wo liegt der Fehler?',
        [
          'Gerade Potenzen (wie $4$) geben U-förmige Kurven (achsensymmetrisch), keine S-Kurven.',
          'Er hätte $x^{1/4}$ zeichnen müssen.',
          'Die Zeichnung ist korrekt.',
          'Potenzfunktionen haben keine Form.',
        ],
        0,
        `**Ansatz:** Parität des Exponenten.

**Rechnung:** $f(-x) = (-x)^4 = x^4 = f(x)$ → achsensymmetrisch zur $y$-Achse.

**Probe:** Zahlentest: $f(-2) = 16 = f(2)$.

**Typischer Fehler:** S-Form für alle hohen Exponenten annehmen.`,
        [
          '$x^4$ = $x^4$?',
          '$(-x)^4 = ?$',
          'Symmetrie-Check.',
        ],
        {
          1: 'Das wäre Wurzelfunktion, andere Form.',
          2: 'S-Form wäre bei ungerader Potenz.',
          3: 'Form hängt vom Exponent ab.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['potenz-fkt'] },
      ),
      matching(
        'Ordne jeder Funktionsgleichung ihre Kurvenform zu.',
        [
          { left: '$y = x^2$',             right: 'nach oben geöffnete Parabel' },
          { left: '$y = -x^2$',            right: 'nach unten geöffnete Parabel' },
          { left: '$y = x^3$',             right: 'S-Form steigend' },
          { left: '$y = -x^3$',            right: 'S-Form fallend' },
        ],
        `**Ansatz:** Vorzeichen und Exponent bestimmen Form.

**Rechnung:** Minus spiegelt an der $x$-Achse.

**Probe:** Zahlentest.

**Typischer Fehler:** Vorzeichen des Koeffizienten ignorieren.`,
        [
          'Vorzeichen des Koeffizienten.',
          'Parität des Exponenten.',
          'Spiegelung durch Minus.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['potenz-fkt'] },
      ),
    ],
    // [1] Exponentialfunktion
    1: [
      tf(
        'Die Exponentialfunktion $f(x) = a^x$ (mit $a > 0, a \\neq 1$) hat immer positive Werte — ihr Wertebereich ist $(0, \\infty)$.',
        true,
        `**Ansatz:** $a^x > 0$ für alle reellen $x$.

**Rechnung:** $a^0 = 1$, $a^1 = a > 0$, $a^{-1} = 1/a > 0$.

**Probe:** Graph berührt nie die $x$-Achse.

**Typischer Fehler:** $a^x = 0$ denken bei $x \\to -\\infty$.`,
        [
          'Wertebereich = alle möglichen $y$-Werte.',
          'Kann $a^x$ negativ sein?',
          'Kann $a^x = 0$ sein?',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['exp-fkt'] },
      ),
      mc(
        'Wie verhält sich $f(x) = 2^x$ für $x \\to -\\infty$?',
        [
          '$f(x) \\to 0$ (aber nie $= 0$)',
          '$f(x) \\to -\\infty$',
          '$f(x) \\to 2$',
          '$f(x) \\to 1$',
        ],
        0,
        `**Ansatz:** Negativer Exponent = Kehrwert.

**Rechnung:** $2^{-10} = 1/1024 \\approx 0.001$. $2^{-100}$ extrem klein, aber $> 0$.

**Probe:** Niemals negativ, nie $= 0$.

**Typischer Fehler:** Negatives Verhalten mit Polynom verwechseln.`,
        [
          '$2^{-n}$ für große $n$?',
          'Kehrwerte sehr klein.',
          'Asymptote $y = 0$.',
        ],
        {
          1: 'Exponentialfunktion wird nie negativ.',
          2: '$2^0 = 1$, nicht $2$.',
          3: '$1$ wäre die Grenze bei $a = 1$ — aber $a = 2$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['exp-fkt'] },
      ),
      ni(
        'Berechne $3^4$.',
        81, 0, '',
        `**Ansatz:** $3 \\cdot 3 \\cdot 3 \\cdot 3$.

**Rechnung:** $9 \\cdot 9 = 81$.

**Probe:** $3^4 = 3^2 \\cdot 3^2 = 9 \\cdot 9 = 81$.

**Typischer Fehler:** $3 \\cdot 4 = 12$.`,
        [
          '$3 \\cdot 3 = 9$.',
          '$9 \\cdot 3 = 27$.',
          '$27 \\cdot 3 = 81$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['exp-fkt'] },
      ),
      mc(
        'Ein Schüler behauptet, $f(x) = 2^x$ kann den Wert $0$ annehmen (für sehr kleines $x$). Wo liegt der Fehler?',
        [
          'Exponentialfunktionen sind IMMER positiv — sie nähern sich $0$ asymptotisch, aber erreichen nie $0$.',
          'Die Funktion ist für negative $x$ nicht definiert.',
          'Er hat recht.',
          'Erst bei $x = -\\infty$.',
        ],
        0,
        `**Ansatz:** Grenzwert vs. Wert unterscheiden.

**Rechnung:** $\\lim_{x \\to -\\infty} 2^x = 0$, aber $2^x > 0$ für alle $x \\in \\mathbb{R}$.

**Probe:** Kein $x$ mit $2^x = 0$.

**Typischer Fehler:** Grenzwert als erreichten Wert missverstehen.`,
        [
          'Asymptote vs. Schnittpunkt.',
          'Wertebereich $(0, \\infty)$.',
          'Grenzwert $\\neq$ Wert.',
        ],
        {
          1: 'Doch — $2^x$ ist für *alle* reellen $x$ definiert (auch für sehr negative). Das eigentliche Problem ist nicht der Definitionsbereich, sondern die Verwechslung von Grenzwert und erreichtem Wert: $2^x$ wird beliebig klein, aber nie gleich $0$.',
          2: 'Der Schüler liegt nicht richtig. Konkret: $2^{-10} = 1/1024 \\approx 9{,}8 \\cdot 10^{-4}$, also positiv. Egal wie klein $x$ wird, $2^x$ bleibt strikt $> 0$ — das ist gerade die definierende Eigenschaft des Wertebereichs $(0, \\infty)$.',
          3: '$-\\infty$ ist keine reelle Zahl, sondern nur ein Symbol für „beliebig klein". Daher ist $2^{-\\infty}$ kein einsetzbarer Wert — gemeint ist der Grenzwert $\\lim_{x \\to -\\infty} 2^x = 0$. Aber Grenzwert $\\neq$ erreichter Funktionswert.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['exp-fkt'] },
      ),
      matching(
        'Ordne jeder Exponentialfunktion ihre Eigenschaft zu.',
        [
          { left: '$a = 2$',         right: 'wächst streng monoton' },
          { left: '$a = 0.5$',       right: 'fällt streng monoton' },
          { left: '$a = e$',         right: 'natürliche Exponentialfunktion' },
          { left: '$a = 10$',        right: 'dekadische Exponentialfunktion' },
        ],
        `**Ansatz:** Basis bestimmt Wachstumsverhalten.

**Rechnung:** $a > 1$: wachsend; $0 < a < 1$: fallend.

**Probe:** Graph-Skizze.

**Typischer Fehler:** Wachstumsrichtung verwechseln.`,
        [
          'Basis größer als $1$ → wachsend.',
          'Basis zwischen $0$ und $1$ → fallend.',
          '$e$ natürlich; $10$ dekadisch.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['exp-fkt'] },
      ),
    ],
    // [2] Logarithmusfunktion
    2: [
      tf(
        'Die Logarithmusfunktion $f(x) = \\log_a(x)$ ist nur für $x > 0$ definiert.',
        true,
        `**Ansatz:** Logarithmus ist Umkehrung der Exponentialfunktion.

**Rechnung:** Da $a^y > 0$ für alle reellen $y$, gibt es kein $\\log_a(0)$ oder $\\log_a(-1)$.

**Probe:** Wertebereich von $a^x$ = Definitionsbereich von $\\log_a$.

**Typischer Fehler:** $\\log(0) = -\\infty$ als "definiert" akzeptieren.`,
        [
          'Umkehrfunktion von $a^x$.',
          'Wertebereich von $a^x$ = Def.bereich von $\\log_a$.',
          '$(0, \\infty)$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-fkt'] },
      ),
      mc(
        'Wie verhält sich $\\log(x)$ bei $x \\to 0^+$?',
        ['$\\log(x) \\to -\\infty$', '$\\log(x) \\to 0$', '$\\log(x) \\to \\infty$', 'Stetig in $0$'],
        0,
        `**Ansatz:** Logarithmus bei kleinen positiven Zahlen.

**Rechnung:** $\\log(0.1) = -1, \\log(0.01) = -2, \\ldots$ — immer negativer.

**Probe:** Grenzwert $-\\infty$.

**Typischer Fehler:** $\\log(0)$ als $0$ annehmen.`,
        [
          '$\\log(1) = 0$.',
          '$\\log(1/10) = -1$.',
          'Was bei noch kleineren?',
        ],
        {
          1: 'Das wäre $\\log(1)$.',
          2: 'Umgekehrt — für $x \\to \\infty$.',
          3: 'Polstelle, nicht stetig.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['log-fkt'] },
      ),
      ni(
        'Berechne $\\log_{10}(1000)$.',
        3, 0, '',
        `**Ansatz:** $10^? = 1000$.

**Rechnung:** $10^3 = 1000$.

**Probe:** $\\log(1000) = 3$.

**Typischer Fehler:** Verschieben.`,
        [
          '$10 \\cdot 10 \\cdot 10 = 1000$.',
          'Also Exponent $3$.',
          '$\\log_{10}(1000) = 3$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['log-fkt'] },
      ),
      mc(
        'Ein Schüler sagt, $\\log(-5)$ sei $-\\log(5)$. Wo liegt der Fehler?',
        [
          'Logarithmus einer negativen Zahl ist in $\\mathbb{R}$ NICHT definiert — nicht $-\\log(5)$.',
          'Er hätte $\\log(5) \\cdot (-1)$ rechnen müssen.',
          'Die Antwort ist korrekt.',
          'Logarithmen sind linear.',
        ],
        0,
        `**Ansatz:** Definitionsbereich des Logarithmus.

**Rechnung:** $\\log(x)$ braucht $x > 0$. $\\log(-5)$ existiert nicht in $\\mathbb{R}$.

**Probe:** Kein $y$ mit $10^y = -5$.

**Typischer Fehler:** Logarithmus als "Vorzeichen-invers" missverstehen.`,
        [
          'Wofür ist $\\log$ definiert?',
          'Kann $10^y$ negativ sein?',
          'Existenz vor Berechnung.',
        ],
        {
          1: '$\\log(5) \\cdot (-1) = -\\log(5) \\approx -0{,}7$ ist eine berechenbare Zahl — aber das ändert nichts daran, dass $\\log(-5)$ in $\\mathbb{R}$ schlicht *nicht definiert* ist. Es gibt kein reelles $y$ mit $10^{y} = -5$, weil $10^{y} > 0$ für alle $y$.',
          2: 'Doch, der Schüler liegt falsch. $\\log(-5) = -\\log(5)$ würde gelten, wenn $\\log$ irgendeine Vorzeichen-Symmetrie hätte — hat es aber nicht. $\\log$ ist auf $(0, \\infty)$ definiert, negative Argumente sind außerhalb des Definitionsbereichs.',
          3: 'Das stimmt zwar als allgemeine Beobachtung ($\\log(a + b) \\neq \\log a + \\log b$), trifft aber nicht den Kernfehler. Hier ist das Problem nicht Linearität, sondern dass $\\log$ auf negativen Argumenten überhaupt nicht definiert ist.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['log-fkt'] },
      ),
      matching(
        'Ordne jeder Exponentialfunktion ihre Umkehrfunktion zu.',
        [
          { left: '$y = 2^x$',             right: '$y = \\log_2(x)$' },
          { left: '$y = e^x$',             right: '$y = \\ln(x)$' },
          { left: '$y = 10^x$',            right: '$y = \\log(x)$ (Basis $10$)' },
          { left: '$y = 0.5^x$',           right: '$y = \\log_{0.5}(x)$' },
        ],
        `**Ansatz:** Umkehrfunktion tauscht Basis in Logarithmus.

**Rechnung:** Exponentialgleichung umkehren.

**Probe:** $y = a^x \\Leftrightarrow x = \\log_a(y)$.

**Typischer Fehler:** Basis verwechseln.`,
        [
          'Basis bleibt gleich.',
          'Exp ↔ Log sind Umkehrungen.',
          'Argument und Wert tauschen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['log-fkt', 'exp-fkt'] },
      ),
    ],
    // [3] Wachstumshierarchie
    3: [
      matching(
        'Ordne die Funktionen nach ihrer Wachstumsgeschwindigkeit für $x \\to \\infty$ (langsam → schnell).',
        [
          { left: '1. Position (langsamstes Wachstum)', right: '$\\ln(x)$' },
          { left: '2. Position',                         right: '$x^n$ (Potenz)' },
          { left: '3. Position',                         right: '$a^x$ (Exponential, $a > 1$)' },
          { left: '4. Position (schnellstes Wachstum)', right: '$x!$ (Fakultät)' },
        ],
        `**Ansatz:** Wachstumshierarchie.

**Rechnung:** $\\ln(x) \\ll x^n \\ll a^x \\ll x!$ für $x \\to \\infty$.

**Probe:** Bei $x = 10$: $\\ln 10 \\approx 2.3$, $10^2 = 100$, $2^{10} = 1024$, $10! \\approx 3.6$ Millionen.

**Typischer Fehler:** Exponential und Potenz gleichsetzen.`,
        [
          'Log wächst am langsamsten.',
          'Polynom mittelschnell.',
          'Exponential und Fakultät sehr schnell.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['wachstum-hierarchie'] },
      ),
      mc(
        'Welche Funktion wächst für $x \\to \\infty$ am schnellsten?',
        ['$2^x$', '$x^{100}$', '$\\ln(x)$', '$100x$'],
        0,
        `**Ansatz:** Exponentialfunktion schlägt jedes Polynom.

**Rechnung:** Für $x \\to \\infty$: $2^x / x^{100} \\to \\infty$.

**Probe:** Bei großen $x$: $2^{200} \\approx 10^{60}$, $200^{100} \\approx 10^{230}$. Bei noch größeren $x$ kippt es.

**Typischer Fehler:** Hohe Potenzen überschätzen.`,
        [
          'Exponent im Exponent?',
          'Oder als Basis?',
          'Exponentialfunktion.',
        ],
        {
          1: 'Polynome werden von Exp überholt.',
          2: 'Log am langsamsten.',
          3: 'Linear am langsamsten unter den Polynomen.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['wachstum-hierarchie'] },
      ),
      mc(
        'Was gilt für große $x$: $x^{1000}$ oder $1.01^x$?',
        [
          '$1.01^x$ wird größer (Exponentialfunktion schlägt jedes Polynom)',
          '$x^{1000}$ ist immer größer',
          'Beide gleich',
          'Hängt von $x$ ab',
        ],
        0,
        `**Ansatz:** Auch bei Basis knapp über $1$ schlägt Exp jedes Polynom.

**Rechnung:** Für $x = 10^6$: $x^{1000} = 10^{6000}$. $1.01^{10^6} = ?$ Mit $\\ln(1.01) \\approx 0.01$: $1.01^{10^6} \\approx e^{10^4} = 10^{4343}$. Noch kleiner.

**Für $x = 10^7$:** $1.01^{10^7} \\approx e^{10^5} = 10^{43\,429}$. $x^{1000} = 10^{7000}$. Nun ist Exp größer.

**Probe:** Irgendwann kippt es immer.

**Typischer Fehler:** Nicht groß genug denken.`,
        [
          'Wachstumshierarchie.',
          'Exp schlägt Polynom langfristig.',
          'Auch bei kleiner Basis.',
        ],
        {
          1: 'Auch $x^{1000}$ wird auf lange Sicht von $1{,}01^x$ überholt — das ist die Aussage der Wachstumshierarchie. $\\lim_{x \\to \\infty} x^{1000} / 1{,}01^x = 0$ gilt für *jeden* festen Polynomgrad, weil das Exponential-Wachstum $e^{x \\ln 1{,}01}$ jede Potenz schlägt.',
          2: 'Beide wachsen *nicht* gleich — das wäre nur der Fall, wenn der Quotient gegen eine endliche Konstante $\\neq 0$ konvergiert. Hier geht der Quotient $x^{1000} / 1{,}01^x \\to 0$, also wächst $1{,}01^x$ asymptotisch *strikt schneller*.',
          3: '„Hängt von $x$ ab" verfehlt das Asymptotische: für *kleine* $x$ ist $x^{1000}$ tatsächlich riesig im Vergleich zu $1{,}01^x \\approx 1$, aber gefragt ist das Verhalten für $x \\to \\infty$. Dort gewinnt das Exponential — eindeutig und nicht situationsabhängig.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['wachstum-hierarchie'] },
      ),
      mc(
        'Ein Schüler behauptet, $x^2$ wachse schneller als $e^x$ für große $x$. Wo liegt der Fehler?',
        [
          'Falsch — $e^x$ schlägt JEDES Polynom für $x \\to \\infty$. $e^x / x^2 \\to \\infty$.',
          'Er hat recht — $x^2$ wächst schneller.',
          'Beide wachsen gleich.',
          'Es hängt vom Bereich ab.',
        ],
        0,
        `**Ansatz:** Wachstumshierarchie ist fix.

**Rechnung:** $e^{100} \\approx 2.7 \\cdot 10^{43}$, $100^2 = 10^4$. $e^{100} \\gg 10^4$.

**Probe:** L'Hôpital: $\\lim_{x\\to\\infty} x^2/e^x = 0$.

**Typischer Fehler:** Kleine $x$ betrachten und verallgemeinern.`,
        [
          'Wer schlägt wen?',
          'Exponential > Polynom langfristig.',
          'Zahlentest bei $x = 100$.',
        ],
        {
          1: 'Der Schüler liegt falsch — und zwar deutlich. Bei $x = 100$ ist $e^{100} \\approx 2{,}7 \\cdot 10^{43}$, während $100^2 = 10^4$. Schon für moderat große $x$ ist $e^x$ um Größenordnungen größer als $x^2$.',
          2: 'Beide wachsen nicht gleich: $e^x / x^2 \\to \\infty$ (Beweis z. B. mit zweimaliger Anwendung von l\'Hospital). Sie haben strukturell verschiedenes Wachstum — Exponential schlägt Polynom asymptotisch immer.',
          3: 'Die Wachstumshierarchie hängt *nicht* vom Bereich ab — sie gilt asymptotisch für $x \\to \\infty$. Für kleine $x$ kann ein Polynom kurzzeitig größer sein (z. B. $x^2$ vs $e^x$ schneiden sich bei $x \\approx 1{,}48$), aber ab da überholt $e^x$ und kommt nie wieder zurück.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['wachstum-hierarchie'] },
      ),
      sorting(
        'Bringe die Funktionen in die Reihenfolge langsam → schnell wachsend (für $x \\to \\infty$).',
        [
          '$\\ln(x)$ (logarithmisch)',
          '$\\sqrt{x}$ (Wurzel, polynomial Grad $1/2$)',
          '$x$ (linear)',
          '$x^2$ (quadratisch)',
          '$2^x$ (exponential)',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Wachstumshierarchie.

**Rechnung:** $\\ln(x) \\ll \\sqrt{x} \\ll x \\ll x^2 \\ll 2^x$.

**Probe:** Bei $x = 100$: $\\ln 100 \\approx 4.6$, $\\sqrt{100} = 10$, $x = 100$, $x^2 = 10^4$, $2^{100} \\approx 10^{30}$.

**Typischer Fehler:** Reihenfolge vertauschen.`,
        [
          'Log am langsamsten.',
          'Potenzen aufsteigend.',
          'Exp am schnellsten.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['wachstum-hierarchie'] },
      ),
    ],
    // [4] Eulersche Zahl
    4: [
      tf(
        'Die Eulersche Zahl $e \\approx 2{,}718$ ist die Basis des natürlichen Logarithmus.',
        true,
        `**Ansatz:** $\\ln(x) = \\log_e(x)$.

**Rechnung:** $e = \\lim_{n\\to\\infty} (1 + 1/n)^n$.

**Probe:** $\\ln(e) = 1$. $e^1 = e$.

**Typischer Fehler:** $e$ als normale Konstante behandeln.`,
        [
          '$e$ — Zahl.',
          '$\\ln$ — zugehöriger Logarithmus.',
          'Natürlich: Ableitung und Funktion sind gleich.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['euler-zahl'] },
      ),
      mc(
        'Was ist $e^0$?',
        ['$1$', '$e$', '$0$', 'Nicht definiert'],
        0,
        `**Ansatz:** $a^0 = 1$ für jedes $a \\neq 0$.

**Rechnung:** $e^0 = 1$.

**Probe:** Aus Potenzgesetz $a^m / a^m = a^{m-m} = a^0 = 1$.

**Typischer Fehler:** $e^0 = e$ denken.`,
        [
          'Potenzgesetz.',
          'Jede Basis hoch $0$ = $1$.',
          '$e^0 = 1$.',
        ],
        {
          1: 'Das wäre $e^1$.',
          2: '$0^0$ ist unbestimmt; $e^0 = 1$.',
          3: 'Doch — klar definiert als $1$.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['euler-zahl'] },
      ),
      ni(
        'Berechne $\\ln(e)$.',
        1, 0, '',
        `**Ansatz:** $\\ln(e) = \\log_e(e) = 1$.

**Rechnung:** Basis gleich Argument → $1$.

**Probe:** $e^1 = e$.

**Typischer Fehler:** $\\ln(e) = e$ denken.`,
        [
          '$\\log_a(a) = 1$.',
          'Basis = Argument.',
          'Ergebnis $1$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['euler-zahl'] },
      ),
      mc(
        'Ein Schüler rechnet $\\ln(e^2) = e^2$. Wo liegt der Fehler?',
        [
          '$\\ln$ und $\\exp$ heben sich auf: $\\ln(e^2) = 2$.',
          'Er hätte $2 \\ln e$ rechnen müssen (ist dasselbe).',
          'Die Antwort ist korrekt.',
          '$\\ln(e^2) = e^2 \\cdot 2$.',
        ],
        0,
        `**Ansatz:** Umkehr-Identität: $\\ln(e^x) = x$.

**Rechnung:** $\\ln(e^2) = 2$.

**Probe:** Über Potenzregel: $\\ln(e^2) = 2\\ln(e) = 2 \\cdot 1 = 2$.

**Typischer Fehler:** Funktionen nicht aufheben.`,
        [
          'Was ist $\\ln(e^x)$?',
          'Umkehrfunktion.',
          'Ergibt $x$.',
        ],
        {
          1: '$2 \\ln e = 2 \\cdot 1 = 2$ — das ist mathematisch korrekt und ergibt dasselbe wie die Umkehr-Identität. Der eigentliche Fehler des Schülers ist aber, dass er $\\ln(e^2) = e^2$ schreibt — also $\\ln$ wirkungslos lässt. Beide Wege ($\\ln(e^x) = x$ direkt, oder Log-Gesetz) führen zu $2$, nie zu $e^2$.',
          2: 'Der Schüler liegt falsch. Probe: $\\ln(e^2) = 2 \\approx 2{,}00$, aber er behauptet $e^2 \\approx 7{,}39$. Das sind komplett verschiedene Werte. Die Identität $\\ln(e^y) = y$ vereinfacht den Ausdruck zu $2$.',
          3: '$\\ln(e^2) = e^2 \\cdot 2$ ist keine bekannte Regel und ergibt $\\approx 14{,}78$ — weder das richtige Ergebnis $2$ noch der Schülerfehler $e^2$. Vermutlich Verwechslung mit dem Log-Gesetz $\\ln(a^b) = b \\ln a$, falsch angewandt.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['euler-zahl'] },
      ),
      matching(
        'Ordne jeder Aussage über $e^x$ die passende verbale Beschreibung zu.',
        [
          { left: '$(e^x)\' = e^x$',                              right: 'Ableitung gleicht der Funktion' },
          { left: '$\\int e^x \\, dx = e^x + C$',                  right: 'Stammfunktion gleicht der Funktion' },
          { left: '$e^x > 0$ für alle $x$',                        right: 'Wertebereich $(0, \\infty)$' },
          { left: '$\\lim_{x \\to \\infty} e^x = \\infty$',         right: 'unbeschränktes Wachstum nach rechts' },
        ],
        `**Ansatz:** Vier Schlüssel-Eigenschaften von $e^x$ präzise verbalisieren — Ableitung, Stammfunktion, Wertebereich, asymptotisches Verhalten.

**Rechnung:** $(e^x)' = e^x$ und $\\int e^x dx = e^x + C$ sind die einzigartige Eigenschaft, die $e^x$ unter allen Exponentialfunktionen auszeichnet (für $a^x$ gilt nur $(a^x)' = a^x \\ln a$). $e^x > 0$ folgt aus der Definition als Umkehrung von $\\ln$, deren Argument positiv sein muss. $\\lim_{x\\to\\infty} e^x = \\infty$ beschreibt das Verhalten nach rechts.

**Probe:** Ableitung von $e^x$ an $x=0$: $1 = e^0$ ✓. Bei $x = -10$: $e^{-10} \\approx 4{,}5 \\cdot 10^{-5} > 0$ ✓. $e^{10} \\approx 22\\,026$ — wächst über alle Schranken.

**Typischer Fehler:** Die Eigenschaft $(e^x)' = e^x$ auf andere Exponentialfunktionen $a^x$ übertragen — dort kommt der Faktor $\\ln a$ ins Spiel.`,
        [
          'Was ist die Ableitung von $e^x$?',
          'Was ist die Stammfunktion?',
          'Welcher Wertebereich, welches asymptotische Verhalten?',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['euler-zahl'] },
      ),
    ],
    // [5] Wurzelfunktion
    5: [
      tf(
        'Die Wurzelfunktion $f(x) = \\sqrt{x}$ ist nur für $x \\geq 0$ definiert und hat Wertebereich $[0, \\infty)$.',
        true,
        `**Ansatz:** Quadratwurzel-Definition.

**Rechnung:** $\\sqrt{x}$ in $\\mathbb{R}$ nur für $x \\geq 0$. Ergebnis per Konvention positiv.

**Probe:** $\\sqrt{4} = 2$, $\\sqrt{0} = 0$, $\\sqrt{-1}$ nicht in $\\mathbb{R}$.

**Typischer Fehler:** $\\sqrt{x}$ auch für negative $x$ akzeptieren.`,
        [
          'Wurzel — welche Basis?',
          'Nicht-negativ.',
          '$0$ eingeschlossen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['wurzel-fkt'] },
      ),
      mc(
        'Welche Form hat der Graph von $\\sqrt{x}$?',
        [
          'Im ersten Quadranten, startet in $(0, 0)$, wächst langsam',
          'Parabel',
          'Gerade',
          'Hyperbel',
        ],
        0,
        `**Ansatz:** $\\sqrt{x}$ ist Umkehrfunktion von $x^2$ (auf positivem Ast).

**Rechnung:** $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$, $\\sqrt{9} = 3$.

**Probe:** Wachstum wird immer langsamer.

**Typischer Fehler:** Mit Parabel verwechseln.`,
        [
          'Start bei $(0, 0)$.',
          'Immer im ersten Quadranten.',
          'Langsames Wachstum.',
        ],
        {
          1: 'Eine Parabel ist der Graph von $y = x^2$ (öffnet sich nach oben/unten, definiert für alle reellen $x$). $\\sqrt{x}$ ist hingegen die Umkehrfunktion und nur für $x \\geq 0$ definiert — der Graph ist eine *halbe* liegende Parabel im ersten Quadranten.',
          2: 'Eine Gerade hätte konstante Steigung — $\\sqrt{x}$ wird aber immer flacher: zwischen $x=0$ und $x=1$ steigt sie um $1$, zwischen $x=1$ und $x=4$ nur um $1$ (auf $3$ Einheiten), zwischen $x=4$ und $x=9$ wieder nur um $1$ (auf $5$ Einheiten). Linear ist das nicht.',
          3: 'Eine Hyperbel ist $y = 1/x$ und hat zwei getrennte Äste mit Polstelle bei $x = 0$. $\\sqrt{x}$ hat dagegen einen einzigen, durchgehenden Ast, der im Ursprung startet und nach rechts unbegrenzt wächst.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['wurzel-fkt'] },
      ),
      ni(
        'Berechne $\\sqrt{49}$.',
        7, 0, '',
        `**Ansatz:** $7^2 = 49$.

**Rechnung:** $\\sqrt{49} = 7$.

**Probe:** $7^2 = 49$ ✓.

**Typischer Fehler:** $49/2 = 24.5$.`,
        [
          '$7 \\cdot 7 = 49$.',
          'Also $\\sqrt{49} = 7$.',
          'Nicht Division.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['wurzel-fkt'] },
      ),
      mc(
        'Ein Schüler sagt, $\\sqrt{16} = \\pm 4$. Wo liegt der Fehler?',
        [
          'Die Wurzelfunktion liefert per Konvention nur den POSITIVEN Wert: $\\sqrt{16} = 4$.',
          'Die Wurzel ist nicht definiert.',
          'Er hat recht.',
          '$\\sqrt{16} = 2$.',
        ],
        0,
        `**Ansatz:** Wurzelfunktion ist eindeutig.

**Rechnung:** $\\sqrt{16} = 4$ (nicht $-4$). $(-4)^2 = 16$ stimmt, aber $\\sqrt{16}$ ist per Konvention der positive Ast.

**Probe:** Ohne Konvention wäre $\\sqrt{}$ keine Funktion.

**Typischer Fehler:** Quadratwurzel mit Gleichungslösung verwechseln.`,
        [
          'Wurzelfunktion ist eindeutig.',
          'Gleichung $x^2 = 16$ hat zwei Lösungen.',
          'Aber $\\sqrt{16}$ ist nur eine.',
        ],
        {
          1: '$\\sqrt{16}$ ist für $16 > 0$ definiert.',
          2: 'Wurzelfunktion muss eindeutig sein.',
          3: '$\\sqrt{16} = 4$, nicht $2$.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['wurzel-fkt'] },
      ),
      matching(
        'Ordne jeder Wurzel-Berechnung das richtige Ergebnis zu.',
        [
          { left: '$\\sqrt{36}$',                right: '$6$' },
          { left: '$\\sqrt[3]{-27}$',            right: '$-3$' },
          { left: '$\\sqrt[4]{16}$',             right: '$2$' },
          { left: '$\\sqrt{0{,}25}$',            right: '$0{,}5$' },
        ],
        `**Ansatz:** Gerade Wurzeln liefern den nicht-negativen Hauptwert; ungerade Wurzeln dürfen auch negative Argumente haben und behalten dabei das Vorzeichen.

**Rechnung:** $\\sqrt{36} = 6$ (denn $6^{2} = 36$). $\\sqrt[3]{-27} = -3$ (denn $(-3)^{3} = -27$, und Kubikwurzeln sind in $\\mathbb{R}$ überall definiert). $\\sqrt[4]{16} = 2$ (denn $2^{4} = 16$, und nur der positive Wert ist Hauptwert). $\\sqrt{0{,}25} = 0{,}5$ (denn $0{,}5^{2} = 0{,}25$).

**Probe:** Jeweils Ergebnis hoch Wurzelexponent zurückrechnen — alle vier ergeben das Argument.

**Typischer Fehler:** Bei geraden Wurzeln das Minus vergessen — $\\sqrt{36} = \\pm 6$ ist falsch (Wurzelfunktion ist eindeutig); bei ungeraden Wurzeln den negativen Ast streichen ($\\sqrt[3]{-27}$ ist sehr wohl definiert).`,
        [
          'Gerade Wurzel: nur nicht-negativer Hauptwert.',
          'Ungerade Wurzel: behält Vorzeichen des Arguments.',
          'Probe: Ergebnis hoch Wurzelexponent = Argument.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['wurzel-fkt'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-3-3 — Funktionsoperationen (6 SGs, 30 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-3-3': {
    // [0] Horizontale Verschiebung
    0: [
      tf(
        'Der Graph von $f(x - 2)$ ist der Graph von $f(x)$ um $2$ Einheiten nach RECHTS verschoben.',
        true,
        `**Ansatz:** $f(x - a)$ verschiebt nach rechts (kontraintuitiv!).

**Rechnung:** Argument $x - 2 = 0$ wenn $x = 2$. Also steht dort, wo früher $x = 0$ war, jetzt $x = 2$ → rechts verschoben.

**Probe:** $f(x) = x^2$, $f(x-2) = (x-2)^2$. Neue Nullstelle bei $x = 2$.

**Typischer Fehler:** Minus als "nach links" interpretieren.`,
        [
          'Wohin verschiebt Minus im Argument?',
          'Nach rechts (umgekehrt).',
          'Zahlentest mit $f(x) = x^2$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['trafo-hor-verschieben'] },
      ),
      mc(
        'Um wie viel und in welche Richtung wird $f(x) = x^2$ durch $g(x) = (x+3)^2$ verschoben?',
        ['$3$ nach LINKS', '$3$ nach RECHTS', '$3$ nach OBEN', '$9$ nach RECHTS'],
        0,
        `**Ansatz:** $f(x + a)$ verschiebt um $|a|$ nach LINKS (Vorzeichen dreht sich).

**Rechnung:** $g(x) = (x+3)^2 = f(x - (-3))$. Rechts um $-3$ = links um $3$.

**Probe:** Nullstelle bei $x = -3$. Originalparabel bei $x = 0$. Also $3$ nach links.

**Typischer Fehler:** "+3" als "3 nach rechts" interpretieren.`,
        [
          'Setze $f(x) = x^2$ ein.',
          'Wo liegt Nullstelle von $g$?',
          'Bei $x = -3$: links vom Original.',
        ],
        {
          1: 'Vorzeichen umgekehrt.',
          2: 'Horizontale Verschiebung, nicht vertikale.',
          3: '$9$ ist nicht der Verschiebebetrag.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['trafo-hor-verschieben'] },
      ),
      mc(
        'Welche Funktion verschiebt $f(x) = \\sqrt{x}$ um $5$ Einheiten nach rechts?',
        ['$g(x) = \\sqrt{x - 5}$', '$g(x) = \\sqrt{x + 5}$', '$g(x) = \\sqrt{x} - 5$', '$g(x) = \\sqrt{x} + 5$'],
        0,
        `**Ansatz:** Rechts = Minus im Argument.

**Rechnung:** $f(x - 5) = \\sqrt{x - 5}$.

**Probe:** Neuer Startpunkt bei $x = 5$ (Original bei $x = 0$).

**Typischer Fehler:** Plus statt Minus.`,
        [
          'Rechts = Minus im Argument.',
          'Start bei $x = 5$.',
          '$\\sqrt{x - 5}$.',
        ],
        {
          1: 'Nach links statt rechts.',
          2: 'Vertikale Verschiebung.',
          3: 'Vertikal hoch statt horizontal.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['trafo-hor-verschieben'] },
      ),
      mc(
        'Ein Schüler zeichnet $g(x) = (x - 4)^2$ als Parabel mit Scheitel bei $(-4, 0)$. Wo liegt der Fehler?',
        [
          'Vorzeichen ist kontraintuitiv: $g(x) = f(x-4)$ → Scheitel bei $(+4, 0)$, nicht $(-4, 0)$.',
          'Er müsste quadratische Ergänzung anwenden.',
          'Alles korrekt.',
          'Scheitel ist immer bei $(0, 0)$.',
        ],
        0,
        `**Ansatz:** $f(x - a)$ verschiebt um $+a$ nach rechts, nicht nach links.

**Rechnung:** Scheitel von $(x-4)^2$ bei $x = 4$ (wo $x - 4 = 0$).

**Probe:** $g(4) = 0$, $g(0) = 16$.

**Typischer Fehler:** Minus als "nach links" interpretieren.`,
        [
          'Wo wird $x - 4 = 0$?',
          'Bei $x = 4$.',
          'Scheitel dort.',
        ],
        {
          1: 'Quadratische Ergänzung ist unnötig — $(x-4)^2$ steht bereits in Scheitelform $(x-h)^2 + k$ mit $h = 4, k = 0$. Aus dieser Form liest man Scheitel direkt ab: $(4, 0)$, nicht $(-4, 0)$.',
          2: 'Doch — der Schüler liegt falsch. Probe mit $g(4) = (4-4)^2 = 0$ und $g(-4) = (-4-4)^2 = 64$ ≠ 0. Der Scheitel (also der Tiefpunkt der nach oben offenen Parabel) liegt bei $x = 4$, nicht bei $x = -4$.',
          3: 'Doch, der Scheitel kann verschoben sein. Original $f(x) = x^2$ hat Scheitel bei $(0, 0)$, aber jede Verschiebung verändert ihn. Hier liegt der Scheitel bei $(4, 0)$, eben weil $(x-4)^2 = 0$ erst bei $x = 4$ erfüllt ist.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['trafo-hor-verschieben'] },
      ),
      matching(
        'Ordne jeder Transformation die zugehörige Verschiebung zu.',
        [
          { left: '$f(x - 3)$',   right: '$3$ nach RECHTS' },
          { left: '$f(x + 3)$',   right: '$3$ nach LINKS' },
          { left: '$f(x - 10)$',  right: '$10$ nach RECHTS' },
          { left: '$f(x + 1)$',   right: '$1$ nach LINKS' },
        ],
        `**Ansatz:** Vorzeichen im Argument umgekehrt mit Richtung.

**Rechnung:** Minus → rechts; Plus → links.

**Probe:** Zahlentest für jede.

**Typischer Fehler:** Intuitive Zuordnung.`,
        [
          'Argument-Vorzeichen.',
          'Wo wird das Argument $0$?',
          'Dort liegt der "verschobene Ursprung".',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['trafo-hor-verschieben'] },
      ),
    ],
    // [1] Vertikale Verschiebung
    1: [
      tf(
        'Der Graph von $f(x) + 5$ ist der Graph von $f(x)$ um $5$ Einheiten nach OBEN verschoben.',
        true,
        `**Ansatz:** $+b$ außen → nach oben.

**Rechnung:** Jeder Funktionswert wird um $5$ erhöht.

**Probe:** $f(x) = x^2$, $g(x) = x^2 + 5$. Scheitel verschiebt sich von $(0,0)$ nach $(0,5)$.

**Typischer Fehler:** Vertikale und horizontale Verschiebung verwechseln.`,
        [
          '$+b$ außen.',
          'Vertikal nach oben.',
          'Intuitiv (nicht kontraintuitiv wie horizontal).',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['trafo-vert-verschieben'] },
      ),
      mc(
        'Wie verschiebt $g(x) = f(x) - 7$ den Graphen von $f$?',
        ['$7$ nach UNTEN', '$7$ nach OBEN', '$7$ nach LINKS', '$7$ nach RECHTS'],
        0,
        `**Ansatz:** $-b$ außen → nach unten.

**Rechnung:** Jeder Funktionswert um $7$ verringert.

**Probe:** $f(0) = 5$, $g(0) = 5 - 7 = -2$.

**Typischer Fehler:** Mit horizontaler Verschiebung verwechseln.`,
        [
          '$-b$ außen.',
          'Verringert die $y$-Werte.',
          'Nach unten.',
        ],
        {
          1: 'Genau umgekehrt — $-7$ außen verringert die $y$-Werte, also Verschiebung nach *unten*. Nach oben wäre $f(x) + 7$, nicht $f(x) - 7$.',
          2: 'Horizontale Verschiebung tritt nur auf, wenn das Argument geändert wird, also $f(x \\pm a)$. Hier wird aber außerhalb der Funktion subtrahiert ($-7$), was rein vertikal wirkt.',
          3: 'Wie bei Antwort 2: außerhalb der Funktion subtrahieren wirkt nicht horizontal. Für eine Rechtsverschiebung um $7$ müsste das Argument $x - 7$ sein, also $f(x - 7)$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['trafo-vert-verschieben'] },
      ),
      ni(
        'Eine Funktion $f(x) = x^2$ wird um $3$ Einheiten nach oben verschoben. Welchen Wert hat die neue Funktion bei $x = 2$?',
        7, 0, '',
        `**Ansatz:** $g(x) = f(x) + 3 = x^2 + 3$.

**Rechnung:** $g(2) = 4 + 3 = 7$.

**Probe:** $f(2) = 4$, also $f(2) + 3 = 7$.

**Typischer Fehler:** Nur $f(2)$ rechnen.`,
        [
          'Neue Funktion: $g(x) = x^2 + 3$.',
          '$g(2) = 4 + 3$.',
          '$= 7$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['trafo-vert-verschieben'] },
      ),
      mc(
        'Ein Schüler sagt, $g(x) = f(x) + 2$ verschiebt den Graphen nach LINKS. Wo liegt der Fehler?',
        [
          '$+b$ außen ist VERTIKAL (nach oben), nicht horizontal.',
          'Er hätte nach rechts sagen müssen.',
          'Kein Fehler.',
          'Das $+2$ gehört ins Argument.',
        ],
        0,
        `**Ansatz:** Außen = vertikal.

**Rechnung:** $+2$ außen: nach oben.

**Probe:** $g(0) = f(0) + 2$.

**Typischer Fehler:** Vertikal und horizontal nicht unterscheiden.`,
        [
          'Wo steht das $+2$?',
          'Außen oder im Argument?',
          'Außen = vertikal.',
        ],
        {
          1: 'Auch „rechts" wäre falsch — $+2$ außen wirkt rein vertikal, gar nicht horizontal. Eine Horizontalverschiebung würde verlangen, dass die $2$ im Argument steht (z. B. $f(x \\pm 2)$).',
          2: 'Doch, der Schüler liegt falsch. Probe mit $f(x) = x^2$: $g(0) = 0 + 2 = 2$, $g(1) = 1 + 2 = 3$. Die $y$-Werte sind alle um $2$ größer als bei $f$ — das ist Verschiebung *nach oben*, nicht nach links.',
          3: 'Genau — *wenn* die $+2$ im Argument stünde ($f(x+2)$), wäre die Verschiebung $2$ nach links. Hier steht sie aber außen ($f(x) + 2$), also wirkt sie vertikal. Dass „außen" und „im Argument" unterschiedlich wirken, ist die zentrale Merkregel.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['trafo-vert-verschieben'] },
      ),
      matching(
        'Ordne jede Transformation ihrer Verschiebung zu.',
        [
          { left: '$f(x) + 5$',          right: '$5$ nach OBEN (vertikal)' },
          { left: '$f(x - 5)$',          right: '$5$ nach RECHTS (horizontal)' },
          { left: '$f(x) - 2$',          right: '$2$ nach UNTEN (vertikal)' },
          { left: '$f(x + 2)$',          right: '$2$ nach LINKS (horizontal)' },
        ],
        `**Ansatz:** Argument = horizontal; außen = vertikal.

**Rechnung:** Vier Varianten.

**Probe:** Jede Zeile mit Zahlen prüfen.

**Typischer Fehler:** Horizontal mit vertikal verwechseln.`,
        [
          'Innen = horizontal (Vorzeichen dreht).',
          'Außen = vertikal (wie erwartet).',
          'Vier Kombinationen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['trafo-vert-verschieben', 'trafo-hor-verschieben'] },
      ),
    ],
    // [2] Streckung
    2: [
      tf(
        'Für $c > 1$ streckt $c \\cdot f(x)$ den Graphen VERTIKAL um den Faktor $c$.',
        true,
        `**Ansatz:** Vertikale Streckung: alle $y$-Werte mal $c$.

**Rechnung:** $f(x) = 1$ → $c \\cdot f(x) = c$.

**Probe:** Parabel $x^2$ → $2x^2$ steiler.

**Typischer Fehler:** Horizontal und vertikal verwechseln.`,
        [
          '$c \\cdot f(x)$ außen.',
          'Alle $y$-Werte multipliziert.',
          'Vertikal gestreckt.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['trafo-vert-streck', 'trafo-hor-streck'] },
      ),
      mc(
        'Wie wirkt $g(x) = 3f(x)$ auf den Graphen von $f$?',
        ['Vertikal um Faktor $3$ gestreckt', 'Horizontal um Faktor $3$ gestaucht', 'Um $3$ nach oben verschoben', 'Um $3$ nach rechts verschoben'],
        0,
        `**Ansatz:** $c$ außen → vertikale Streckung.

**Rechnung:** Jeder $y$-Wert mit $3$ multipliziert.

**Probe:** $f(2) = 4 \\to g(2) = 12$.

**Typischer Fehler:** Mit Verschiebung verwechseln.`,
        [
          'Multiplikation außen.',
          'Vertikale Streckung.',
          '$y$-Werte werden mal $3$.',
        ],
        {
          1: 'Horizontale Stauchung wäre $f(3x)$ — der Faktor stünde dann *im Argument*. Bei $3 \\cdot f(x)$ ist die $3$ außen, also vertikal. Außerdem ist Stauchung das *Schmaler-werden*, hier wird die Funktion vertikal *gestreckt* (steiler).',
          2: '$3f(x) = 3 \\cdot f(x)$ ist eine Multiplikation, nicht eine Addition. Verschiebung nach oben um $3$ wäre $f(x) + 3$ (additiv). Multiplikativ vs. additiv ist der Kernunterschied: das eine streckt, das andere verschiebt.',
          3: 'Auch das ist eine Verschiebung statt einer Multiplikation. „Nach rechts" käme zudem aus einer Argument-Änderung wie $f(x - 3)$ — hier ist die $3$ aber außen und multiplikativ. Effekt: vertikale Streckung.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['trafo-vert-streck'] },
      ),
      mc(
        'Wie wirkt $g(x) = f(2x)$ auf $f$ horizontal?',
        ['Horizontal um Faktor $2$ gestaucht (schmaler)', 'Horizontal um Faktor $2$ gestreckt (breiter)', 'Vertikal um $2$ gestreckt', 'Um $2$ nach rechts'],
        0,
        `**Ansatz:** $f(cx)$ im Argument: horizontal gestaucht um Faktor $c$ (kontraintuitiv).

**Rechnung:** Wo $f$ bei $x = 1$ einen Wert hatte, hat $g$ denselben Wert schon bei $x = 1/2$.

**Probe:** $f(x) = x^2$, $g(x) = (2x)^2 = 4x^2$. Gleicher $y$-Wert bei halbem $x$.

**Typischer Fehler:** "Faktor im Argument = gestreckt" intuitiv annehmen.`,
        [
          'Was passiert mit $x$-Koordinaten?',
          'Halbiert (kontraintuitiv).',
          'Graph wird schmaler.',
        ],
        {
          1: 'Gestreckt wäre $f(x/2)$, also $c < 1$.',
          2: 'Vertikale Streckung ist $cf(x)$.',
          3: 'Verschiebung wäre Addition im Argument.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['trafo-hor-streck'] },
      ),
      mc(
        'Ein Schüler denkt, $g(x) = f(3x)$ strecke den Graphen horizontal um Faktor $3$. Wo liegt der Fehler?',
        [
          'Horizontal STAUCHT um Faktor $3$ (kontraintuitiv) — der Graph wird schmaler, nicht breiter.',
          'Er hätte $3f(x)$ schreiben müssen.',
          'Er hat recht.',
          'Es wird vertikal gestreckt.',
        ],
        0,
        `**Ansatz:** Argument mit $c > 1$ multipliziert: Stauchung.

**Rechnung:** $f(3 \\cdot 1) = f(3)$ — was bei $f$ bei $x = 3$ war, ist bei $g$ bei $x = 1$. Alles "näher" zusammengezogen.

**Probe:** Breite halbiert bei Faktor $2$; gedrittelt bei Faktor $3$.

**Typischer Fehler:** Intuitive "Streckung".`,
        [
          'Kontraintuitiv: Argument-Faktor $>1$ → Stauchung.',
          'Zahlentest hilft.',
          'Inverse Beziehung.',
        ],
        {
          1: '$3f(x)$ wäre eine *vertikale* Streckung um Faktor $3$ — der Schüler hätte das schreiben müssen, wenn er „strecken" gemeint hätte. Aber er hat $f(3x)$ — das wirkt im Argument und ist *horizontale Stauchung*.',
          2: 'Probe widerlegt: $f(x) = x^2$, $f(3x) = (3x)^2 = 9x^2$. Bei $x = 1$: $f(3) = 9$, $g(1) = 9$ — der ursprüngliche Wert von $f$ bei $x = 3$ taucht jetzt schon bei $x = 1$ auf. Die Kurve ist gestaucht (auf ein Drittel der ursprünglichen Breite), nicht gestreckt.',
          3: 'Doch, $f(3x)$ wirkt horizontal — der Faktor $3$ steht im Argument, also auf der $x$-Achse. Eine vertikale Veränderung würde $3 \\cdot f(x)$ bedeuten, mit dem Faktor außerhalb der Funktion.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['trafo-hor-streck'] },
      ),
      matching(
        'Ordne jede Transformation ihrem Effekt zu.',
        [
          { left: '$3f(x)$',      right: 'vertikal um $3$ gestreckt' },
          { left: '$\\frac{1}{2} f(x)$', right: 'vertikal um $2$ gestaucht' },
          { left: '$f(2x)$',      right: 'horizontal um $2$ gestaucht' },
          { left: '$f(x/2)$',     right: 'horizontal um $2$ gestreckt' },
        ],
        `**Ansatz:** Vier Streckungsfälle.

**Rechnung:** Außen vs. im Argument unterschiedlich.

**Probe:** Merke: Argument ist invers.

**Typischer Fehler:** Streckung/Stauchung verwechseln.`,
        [
          'Außen: intuitiv.',
          'Im Argument: invers.',
          'Vier Kombinationen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['trafo-vert-streck', 'trafo-hor-streck'] },
      ),
    ],
    // [3] Spiegelung
    3: [
      matching(
        'Ordne jeder Spiegelungstransformation die Achse zu.',
        [
          { left: '$-f(x)$',   right: 'Spiegelung an der $x$-Achse' },
          { left: '$f(-x)$',   right: 'Spiegelung an der $y$-Achse' },
          { left: '$-f(-x)$',  right: 'Spiegelung am Ursprung (Punkt)' },
          { left: '$|f(x)|$',  right: 'negative $y$-Werte nach oben gespiegelt' },
        ],
        `**Ansatz:** Vorzeichen bestimmt Spiegelachse.

**Rechnung:** Minus außen: $y$ umkehren. Minus im Argument: $x$ umkehren.

**Probe:** Zahlentests.

**Typischer Fehler:** Achsen verwechseln.`,
        [
          'Minus außen: $x$-Achse.',
          'Minus im Argument: $y$-Achse.',
          'Beides: Ursprung.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['trafo-spiegel-x', 'trafo-spiegel-y'] },
      ),
      mc(
        'Was passiert mit dem Graphen von $f(x) = x^2$, wenn man zu $-f(x)$ übergeht?',
        ['Spiegelung an der $x$-Achse (Parabel öffnet nach unten)', 'Spiegelung an der $y$-Achse', 'Verschiebung nach unten', 'Keine Veränderung'],
        0,
        `**Ansatz:** Minus außen: vertikale Spiegelung.

**Rechnung:** $-x^2$: alle $y$-Werte negativ, Parabel nach unten offen.

**Probe:** $f(1) = 1 \\to -f(1) = -1$.

**Typischer Fehler:** An $y$-Achse statt $x$-Achse spiegeln.`,
        [
          'Wo wird gespiegelt?',
          'Horizontale Achse $=$ $x$-Achse.',
          '$y$-Werte umkehren.',
        ],
        {
          1: '$y$-Achse wäre $f(-x)$.',
          2: 'Verschiebung wäre $f(x) - b$.',
          3: 'Doch — deutliche Veränderung.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['trafo-spiegel-x'] },
      ),
      mc(
        'Wie wirkt $g(x) = f(-x)$ auf einen achsensymmetrischen Graphen (z. B. $x^2$)?',
        ['Keine sichtbare Änderung (Symmetrie)', 'Spiegelung an der $x$-Achse', 'Um $180°$ gedreht', 'Verschwindet'],
        0,
        `**Ansatz:** Achsensymmetrie zur $y$-Achse heißt $f(-x) = f(x)$.

**Rechnung:** Bei $x^2$: $f(-x) = x^2 = f(x)$ — gleicher Graph.

**Probe:** Jede achsensymmetrische Funktion ist invariant unter $y$-Achsen-Spiegelung.

**Typischer Fehler:** Änderung erwarten.`,
        [
          'Symmetrie-Eigenschaft.',
          '$f(-x) = f(x)$.',
          'Keine Änderung.',
        ],
        {
          1: '$x$-Achsen-Spiegelung wäre $-f(x)$.',
          2: 'Punktsymmetrie wäre $-f(-x) = f(x)$, nicht bei Parabel.',
          3: 'Graph bleibt gleich.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['trafo-spiegel-y'] },
      ),
      mc(
        'Ein Schüler behauptet, $g(x) = -f(x)$ ist dasselbe wie $f(-x)$. Wo liegt der Fehler?',
        [
          'Das sind verschiedene Spiegelungen: $-f$ spiegelt an der $x$-Achse, $f(-x)$ an der $y$-Achse.',
          'Nur bei geraden Funktionen sind sie gleich.',
          'Er hat recht.',
          'Beide verändern den Graphen nicht.',
        ],
        0,
        `**Ansatz:** Zwei verschiedene Transformationen.

**Rechnung:** $f(x) = x^3$. $-f(x) = -x^3$. $f(-x) = (-x)^3 = -x^3$. Zufällig gleich (ungerade Funktion). Aber $f(x) = x^2 + 1$: $-f(x) = -x^2 - 1$, $f(-x) = x^2 + 1$. Unterschiedlich!

**Probe:** Generell verschieden.

**Typischer Fehler:** Symmetriebegriffe verwechseln.`,
        [
          'Wo ist das Minus?',
          'Außen → $x$-Achse.',
          'Innen → $y$-Achse.',
        ],
        {
          1: 'Stimmt nur bei *ungeraden* Funktionen: dort gilt $f(-x) = -f(x)$, also $f(-x) = -f(x)$ als Spezialfall — z. B. $f(x) = x^3$. Bei *geraden* Funktionen ($f(-x) = f(x)$) wäre $f(-x) = f(x) \\neq -f(x)$. Generell sind die beiden Spiegelungen aber verschiedene Operationen.',
          2: 'Doch, der Schüler liegt falsch. Probe: $f(x) = x^2 + 1$, dann $-f(x) = -x^2 - 1$ (Parabel nach unten verschoben), aber $f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x)$ (unverändert). Zwei komplett verschiedene Graphen.',
          3: 'Beide können den Graphen verändern, ja — aber das ist keine Erklärung dafür, warum sie *verschieden* sind. Die eigentliche Frage: *welche* Spiegelung passiert? $-f$ wirkt vertikal (an $x$-Achse), $f(-x)$ horizontal (an $y$-Achse).',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['trafo-spiegel-x', 'trafo-spiegel-y'] },
      ),
      matching(
        'Ordne jedem Ausdruck die zugehörige Transformation zu.',
        [
          { left: '$-f(x)$',            right: 'an $x$-Achse gespiegelt' },
          { left: '$f(-x)$',            right: 'an $y$-Achse gespiegelt' },
          { left: '$-f(-x)$',           right: 'am Ursprung gespiegelt' },
          { left: '$f(x)$',             right: 'keine Spiegelung' },
        ],
        `**Ansatz:** Vier Fälle: keine, $x$, $y$, beide.

**Rechnung:** Vorzeichen-Positionen.

**Probe:** Zahlentest.

**Typischer Fehler:** Kombinationen übersehen.`,
        [
          'Wo steht das Minus?',
          'Außen → $x$, innen → $y$.',
          'Beide → Ursprung.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['trafo-spiegel-x', 'trafo-spiegel-y'] },
      ),
    ],
    // [4] Merkregel
    4: [
      tf(
        'Änderungen im ARGUMENT wirken horizontal UND umgekehrt: $+a$ nach links, $\\cdot c$ staucht.',
        true,
        `**Ansatz:** Merkregel für Transformationen im Argument.

**Rechnung:** $f(x+a)$: nach links; $f(cx)$ mit $c > 1$: gestaucht.

**Probe:** Zahlentests.

**Typischer Fehler:** Intuitiv denken — führt oft zu Fehlern.`,
        [
          'Im Argument: umgekehrt.',
          'Plus → links, Mal → Stauchung.',
          'Merkregel hilft.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['trafo-merkregel'] },
      ),
      mc(
        'Welche Transformation ist INTUITIV (wirkt wie erwartet)?',
        ['$f(x) + 3$ nach oben', '$f(x + 3)$ nach rechts', '$f(3x)$ horizontal gestreckt', '$f(x/2)$ horizontal gestaucht'],
        0,
        `**Ansatz:** Außen intuitiv, Innen kontraintuitiv.

**Rechnung:** $f(x) + 3$ verschiebt um $3$ nach oben — exakt was Plus erwartet.

**Probe:** Nur außen ist die Richtung intuitiv.

**Typischer Fehler:** Mit Argument-Transformationen verwechseln.`,
        [
          'Welche Position ist intuitiv?',
          'Außen.',
          '$+$ oben, $-$ unten.',
        ],
        {
          1: '$f(x+3)$ ist nach LINKS.',
          2: '$f(3x)$ ist gestaucht.',
          3: '$f(x/2)$ ist gestreckt.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['trafo-merkregel'] },
      ),
      mc(
        'Was bewirkt die Transformation $g(x) = f(-2x)$?',
        [
          'Spiegelung an $y$-Achse UND horizontal um $2$ gestaucht',
          'Spiegelung an $x$-Achse',
          'Verschiebung um $-2$',
          'Verdopplung der Werte',
        ],
        0,
        `**Ansatz:** $f(-2x)$ = $f((-2) \\cdot x)$: Minus und Stauchung gleichzeitig.

**Rechnung:** $-2x = -2 \\cdot x$: Vorzeichen-Flip (Spiegelung an $y$-Achse) UND Faktor $2$ (Stauchung).

**Probe:** Kombiniert beides.

**Typischer Fehler:** Nur eine der beiden Transformationen erkennen.`,
        [
          'Minus + Faktor.',
          'Spiegelung + Stauchung.',
          'Beide im Argument.',
        ],
        {
          1: 'Nur halb — auch Stauchung.',
          2: 'Das wäre Verschiebung, nicht Stauchung.',
          3: 'Vertikale Streckung wäre außen.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['trafo-merkregel'] },
      ),
      mc(
        'Ein Schüler zeichnet $g(x) = f(x - 5) + 3$ als "$5$ nach links und $3$ nach unten". Wo liegt der Fehler?',
        [
          '$x - 5$ im Argument ist nach RECHTS (nicht links); $+3$ außen ist nach OBEN (nicht unten). Beide Vorzeichen wurden falsch interpretiert.',
          'Er hat die Reihenfolge falsch: Erst $+3$ und dann $x - 5$ ergäbe einen anderen Graphen.',
          'Das ist richtig — Argument-Änderungen wirken kontraintuitiv und außen genauso.',
          'Er hätte quadratische Ergänzung anwenden müssen, um die Verschiebungen zu erkennen.',
        ],
        0,
        `**Ansatz:** Argument-Änderung wirkt horizontal und mit umgekehrtem Vorzeichen; äußere Änderung wirkt vertikal und intuitiv.

**Rechnung:** $f(x - 5)$: Argument wird $0$, wenn $x = 5$ — der Punkt, der bei $f$ an $x = 0$ lag, ist bei $g$ an $x = 5$, also $5$ nach *rechts*. $+3$ außen: jeder $y$-Wert um $3$ erhöht, also $3$ nach *oben*. Die Schülerlösung dreht beide Vorzeichen falsch herum.

**Probe:** Zahlentest mit $f(x) = x^2$: $g(5) = f(0) + 3 = 0 + 3 = 3$ — Scheitel bei $(5, 3)$. Schülerlösung („links + unten") würde Scheitel bei $(-5, -3)$ behaupten — falsch.

**Typischer Fehler:** Beide Richtungen verwechseln. Merkregel: *Innen invers, außen direkt*.`,
        [
          'Wo ist das Minus?',
          'Im Argument = rechts.',
          'Außen = oben.',
        ],
        {
          1: 'Verschiebungen sind in jeder Reihenfolge kommutativ (das gilt nur für Streckungen mit Verschiebungen, da ist Reihenfolge wichtig). Hier ist das Ergebnis dasselbe — der Fehler des Schülers liegt in den Richtungen, nicht in der Reihenfolge.',
          2: 'Argument-Änderungen wirken kontraintuitiv (Vorzeichen flippt), aber äußere Änderungen wirken *intuitiv* — nicht „genauso kontraintuitiv". $+3$ außen heißt direkt nach oben, nicht nach unten.',
          3: 'Quadratische Ergänzung wäre nötig, wenn die Funktion in ausmultiplizierter Form vorläge (z.B. $x^2 - 10x + 28$). $f(x-5)+3$ ist aber bereits in Verschiebungs-Standardform — die Parameter $5$ und $3$ sind direkt ablesbar.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['trafo-merkregel'] },
      ),
      sorting(
        'Bringe die Transformationsschritte für $g(x) = 2f(-x + 3) - 1$ in die richtige Reihenfolge.',
        [
          'Original $f(x)$',
          'Spiegeln an $y$-Achse: $f(-x)$',
          'Horizontal verschieben: $f(-(x-3)) = f(-x+3)$',
          'Vertikal strecken: $2f(-x+3)$',
          'Vertikal verschieben: $2f(-x+3) - 1$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Transformationen in Reihenfolge: innen → außen.

**Rechnung:** Schritt für Schritt.

**Probe:** Mehrere Transformationen kombiniert.

**Typischer Fehler:** Reihenfolge ignorieren.`,
        [
          'Innen zuerst.',
          'Dann vertikal.',
          'Am Ende Verschiebung.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['trafo-merkregel'] },
      ),
    ],
    // [5] Komposition
    5: [
      tf(
        'Funktionskomposition: $(f \\circ g)(x) = f(g(x))$ — zuerst $g$, dann $f$.',
        true,
        `**Ansatz:** Kringel von rechts nach links lesen.

**Rechnung:** $g(x)$ wird berechnet, dann als Argument von $f$ eingesetzt.

**Probe:** $f(x) = x^2$, $g(x) = x+1$: $(f\\circ g)(2) = f(3) = 9$.

**Typischer Fehler:** Reihenfolge umkehren.`,
        [
          'Kringel-Lesung: rechts zuerst.',
          '$f(g(x))$.',
          'Innen → außen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['fkt-komposition'] },
      ),
      mc(
        'Für $f(x) = x^2$ und $g(x) = x + 1$, was ist $(f \\circ g)(x)$?',
        ['$(x+1)^2$', '$x^2 + 1$', '$x^2(x+1)$', '$x + 1^2$'],
        0,
        `**Ansatz:** $f(g(x)) = f(x+1) = (x+1)^2$.

**Rechnung:** $(x+1)^2 = x^2 + 2x + 1$.

**Probe:** $(f\\circ g)(2) = f(3) = 9 = (2+1)^2$. ✓

**Typischer Fehler:** Addition statt Einsetzung.`,
        [
          '$g$ zuerst: $g(x) = x+1$.',
          'Einsetzen in $f$: $f(x+1)$.',
          '$= (x+1)^2$.',
        ],
        {
          1: 'Das wäre $f(x) + 1$, nicht $(f\\circ g)(x)$.',
          2: 'Das wäre $f(x) \\cdot g(x)$.',
          3: '$x + 1^2 = x + 1$, unsinnig.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['fkt-komposition'] },
      ),
      ni(
        'Für $f(x) = 2x + 3$ und $g(x) = x^2$, berechne $(f \\circ g)(4)$.',
        35, 0, '',
        `**Ansatz:** $f(g(4)) = f(16) = 2 \\cdot 16 + 3 = 35$.

**Rechnung:** $g(4) = 16$. $f(16) = 32 + 3 = 35$.

**Probe:** Schrittweise einsetzen.

**Typischer Fehler:** $f$ und $g$ vertauschen.`,
        [
          '$g(4) = ?$',
          '$= 16$.',
          '$f(16) = ?$',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['fkt-komposition'] },
      ),
      mc(
        'Ein Schüler rechnet $(f \\circ g)(x)$ als $g(f(x))$. Wo liegt der Fehler?',
        [
          'Komposition ist $f(g(x))$, nicht $g(f(x))$ — die Reihenfolge wurde vertauscht.',
          'Beide Formen sind gleich.',
          'Er hat recht.',
          'Die Komposition ist kommutativ.',
        ],
        0,
        `**Ansatz:** Komposition ist NICHT kommutativ.

**Rechnung:** Gegenbeispiel: $f(x) = x^2$, $g(x) = x + 1$. $(f\\circ g)(x) = (x+1)^2 = x^2 + 2x + 1$. $(g\\circ f)(x) = x^2 + 1$. Unterschiedlich!

**Probe:** Zwei verschiedene Funktionen.

**Typischer Fehler:** Kommutativität annehmen.`,
        [
          'Ist Komposition kommutativ?',
          'Zahlentest mit verschiedenen $f, g$.',
          'Generell unterschiedlich.',
        ],
        {
          1: 'Beide Formen sind nur in Spezialfällen gleich (z. B. wenn $f$ und $g$ Umkehrfunktionen voneinander sind: $f(g(x)) = x = g(f(x))$). Im Allgemeinen ist das aber falsch — Funktionskomposition ist *nicht* kommutativ.',
          2: 'Doch, der Schüler liegt falsch. Probe: $f(x) = x^2$, $g(x) = x + 1$. $(f \\circ g)(x) = (x+1)^2 = x^2 + 2x + 1$, aber $(g \\circ f)(x) = x^2 + 1$. Bei $x = 2$: $9$ vs. $5$ — komplett verschieden.',
          3: 'Auch im Spezialfall $f = g$ ist Kommutativität nicht der Punkt: dann sind beide Schreibweisen trivialerweise dieselbe Funktion ($f \\circ f$). Generelle Kommutativität gilt aber für Komposition *nicht* — im Gegensatz zu Addition oder Multiplikation.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['fkt-komposition'] },
      ),
      matching(
        'Gegeben $f(x) = 3x$ und $g(x) = x - 2$. Ordne jede Komposition ihrem Ausdruck zu.',
        [
          { left: '$f(g(x))$',       right: '$3(x-2) = 3x - 6$' },
          { left: '$g(f(x))$',       right: '$3x - 2$' },
          { left: '$f(f(x))$',       right: '$9x$' },
          { left: '$g(g(x))$',       right: '$x - 4$' },
        ],
        `**Ansatz:** Systematisch einsetzen.

**Rechnung:** Innere Funktion als Argument der äußeren.

**Probe:** Jede Zeile nachrechnen.

**Typischer Fehler:** Reihenfolge verwechseln.`,
        [
          'Innere in äußere einsetzen.',
          'Von rechts nach links lesen.',
          'Jede Komposition anders.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['fkt-komposition'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-3-4 — Umkehrfunktionen (6 SGs, 31 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-3-4': {
    // [0] Existenz der Umkehrfunktion
    0: [
      tf(
        'Nur bijektive Funktionen haben eine Umkehrfunktion.',
        true,
        `**Ansatz:** Umkehrung braucht eindeutige Zuordnung in beide Richtungen.

**Rechnung:** Bijektiv = injektiv (kein Wert doppelt) + surjektiv (jeder Zielwert erreicht).

**Probe:** $f(x) = x^2$ auf $\\mathbb{R}$ nicht bijektiv → keine Umkehrfunktion. Auf $[0, \\infty)$ schon.

**Typischer Fehler:** "Die meisten Funktionen sind umkehrbar".`,
        [
          'Was braucht Umkehrfunktion?',
          'Injektivität + Surjektivität.',
          'Bijektiv.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['umkehr-existenz'] },
      ),
      mc(
        'Welche Funktion ist auf $\\mathbb{R}$ umkehrbar?',
        ['$f(x) = x^3$', '$f(x) = x^2$', '$f(x) = |x|$', '$f(x) = \\sin(x)$'],
        0,
        `**Ansatz:** Bijektivität prüfen.

**Rechnung:** $x^3$: streng monoton → bijektiv. $x^2, |x|, \\sin$: nicht injektiv.

**Probe:** $x^3$ umkehrbar: $f^{-1}(y) = \\sqrt[3]{y}$.

**Typischer Fehler:** Nur auf Definitionsbereich achten, nicht Injektivität.`,
        [
          'Wer ist streng monoton?',
          'Kubik ja, Quadrat nein.',
          'Sinus ist periodisch.',
        ],
        {
          1: '$x^2$ ist nicht injektiv ($f(2) = f(-2) = 4$).',
          2: 'Betrag ist nicht injektiv.',
          3: 'Sinus ist periodisch.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['umkehr-existenz'] },
      ),
      mc(
        'Die Funktion $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = 2x + 5$ ist umkehrbar. Warum?',
        [
          'Sie ist streng monoton wachsend und deckt alle reellen Zahlen ab.',
          'Sie ist stetig.',
          'Sie ist ein Polynom.',
          'Sie ist linear.',
        ],
        0,
        `**Ansatz:** Lineare Funktionen mit $m \\neq 0$ sind immer bijektiv.

**Rechnung:** $f'(x) = 2 > 0$, streng monoton. Wertebereich = $\\mathbb{R}$ = Zielmenge.

**Probe:** $f^{-1}(y) = (y - 5)/2$.

**Typischer Fehler:** Stetigkeit mit Umkehrbarkeit verwechseln.`,
        [
          'Welche Bedingungen für Umkehrbarkeit?',
          'Monotonie + vollständiger Wertebereich.',
          'Bei linear mit Steigung $\\neq 0$ erfüllt.',
        ],
        {
          1: 'Stetigkeit allein reicht nicht ($x^2$ ist stetig).',
          2: 'Polynome können unumkehrbar sein.',
          3: 'Linear allein reicht nicht ($m = 0$ wäre konstant).',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['umkehr-existenz'] },
      ),
      mc(
        'Ein Schüler sagt, $f(x) = x^2$ hat die Umkehrfunktion $f^{-1}(y) = \\sqrt{y}$. Wo liegt das Problem?',
        [
          'Auf ganz $\\mathbb{R}$ ist $x^2$ nicht bijektiv — erst auf eingeschränktem Definitionsbereich $[0, \\infty)$ ist $\\sqrt{y}$ die Umkehrfunktion.',
          'Er hätte $\\pm\\sqrt{y}$ schreiben müssen.',
          'Alles korrekt.',
          'Die Umkehrfunktion existiert gar nicht.',
        ],
        0,
        `**Ansatz:** Bijektivität erfordert Einschränkung.

**Rechnung:** Auf $[0, \\infty)$: $f$ bijektiv, $f^{-1}(y) = \\sqrt{y}$. Auf $(-\\infty, 0]$: bijektiv, $f^{-1}(y) = -\\sqrt{y}$.

**Probe:** Definitionsbereich muss spezifiziert werden.

**Typischer Fehler:** $\\mathbb{R}$ als Definitionsbereich annehmen.`,
        [
          'Auf welchem Bereich ist $x^2$ bijektiv?',
          'Nur auf einem Ast.',
          'Einschränkung nötig.',
        ],
        {
          1: '$\\pm\\sqrt{y}$ wäre keine Funktion.',
          2: 'Ohne Einschränkung stimmt es nicht.',
          3: 'Doch — auf passendem Bereich existiert sie.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['umkehr-existenz'] },
      ),
      matching(
        'Ordne jeder Funktion ihre Umkehrbarkeits-Eigenschaft zu.',
        [
          { left: '$f(x) = 2x + 1$',        right: 'auf $\\mathbb{R}$ umkehrbar' },
          { left: '$f(x) = x^2$',            right: 'nur auf $[0, \\infty)$ umkehrbar' },
          { left: '$f(x) = e^x$',            right: 'auf $\\mathbb{R}$ umkehrbar ($\\to (0, \\infty)$)' },
          { left: '$f(x) = \\sin(x)$',       right: 'nur auf $[-\\pi/2, \\pi/2]$ umkehrbar' },
        ],
        `**Ansatz:** Jede Funktion hat Bijektivitätsbedingungen.

**Rechnung:** Lineare: überall. Quadratisch: eingeschränkt. Exp: überall. Sin: Hauptzweig.

**Probe:** Monotonie prüfen.

**Typischer Fehler:** Periodische Funktionen vergessen zu einschränken.`,
        [
          'Wo ist die Funktion bijektiv?',
          'Manchmal nur Teilbereich.',
          'Hauptzweige bei periodischen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['umkehr-existenz'] },
      ),
    ],
    // [1] Berechnungsverfahren
    1: [
      tf(
        'Um die Umkehrfunktion zu berechnen: $y = f(x)$ nach $x$ auflösen, dann Namen tauschen.',
        true,
        `**Ansatz:** Standardvorgehen.

**Rechnung:** 1. $y = f(x)$ schreiben. 2. Nach $x$ auflösen: $x = f^{-1}(y)$. 3. Tauschen: $y = f^{-1}(x)$.

**Probe:** $y = 2x + 3 \\Rightarrow x = (y-3)/2 \\Rightarrow y = (x-3)/2$ als $f^{-1}(x)$.

**Typischer Fehler:** Tausch vergessen.`,
        [
          'Drei Schritte.',
          'Auflösen + Tauschen.',
          'Standardverfahren.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
      mc(
        'Welche Umkehrfunktion hat $f(x) = 3x - 5$?',
        ['$f^{-1}(x) = (x+5)/3$', '$f^{-1}(x) = (x-5)/3$', '$f^{-1}(x) = 3x + 5$', '$f^{-1}(x) = -3x + 5$'],
        0,
        `**Ansatz:** $y = 3x - 5 \\Rightarrow x = (y+5)/3$.

**Rechnung:** Nach $x$ auflösen, dann Namen tauschen.

**Probe:** $f(f^{-1}(x)) = 3 \\cdot (x+5)/3 - 5 = x + 5 - 5 = x$ ✓.

**Typischer Fehler:** Vorzeichen verwechseln.`,
        [
          '$y = 3x - 5$ nach $x$.',
          '$x = (y+5)/3$.',
          'Dann Namen tauschen.',
        ],
        {
          1: 'Vorzeichen-Fehler beim Umstellen: aus $y = 3x - 5$ folgt durch Addition von $5$ auf beiden Seiten $y + 5 = 3x$, also $x = (y+5)/3$ — *plus* $5$ im Zähler, nicht *minus*. Probe: $f^{-1}(7) = (7-5)/3 = 2/3$, aber $f(2/3) = 2 - 5 = -3 \\neq 7$.',
          2: 'Du hast die Operation nicht umgekehrt: $3x + 5$ wäre eine andere Funktion mit Steigung $3$ und Verschiebung $+5$. Die Umkehrung muss aber eine Steigung von $1/3$ haben (Kehrwert) und in entgegengesetzte Richtung verschieben. Probe: $f(f^{-1}(x)) = 3(3x+5) - 5 = 9x + 10 \\neq x$.',
          3: 'Beide Vorzeichen falsch: $-3x + 5$ entspricht einer Funktion mit Steigung $-3$ — das entsteht, wenn du sowohl $f$ und $f^{-1}$ als auch das Vorzeichen vertauschst. Korrekt: Steigung $1/3$ (Kehrwert von $3$), Konstante $+5/3$.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
      ni(
        'Berechne $f^{-1}(7)$ für $f(x) = 2x + 1$.',
        3, 0, '',
        `**Ansatz:** $f^{-1}(y) = (y-1)/2$, einsetzen.

**Rechnung:** $(7-1)/2 = 3$.

**Probe:** $f(3) = 7$ ✓.

**Typischer Fehler:** $2 \\cdot 7 + 1 = 15$ rechnen.`,
        [
          'Umkehrfunktion bilden.',
          '$f^{-1}(x) = (x-1)/2$.',
          'Einsetzen $x = 7$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
      ni(
        'Bestimme $f^{-1}(x)$ für $f(x) = \\dfrac{x-2}{3}$ und gib den Wert $f^{-1}(5)$ an.',
        17, 0, '',
        `**Ansatz:** $y = (x-2)/3 \\Rightarrow 3y = x - 2 \\Rightarrow x = 3y + 2$. Umkehrfunktion: $f^{-1}(x) = 3x + 2$.

**Rechnung:** $f^{-1}(5) = 15 + 2 = 17$.

**Probe:** $f(17) = (17-2)/3 = 15/3 = 5$ ✓.

**Typischer Fehler:** Nur einen Schritt rückgängig machen.`,
        [
          'Umkehrfunktion bilden.',
          '$f^{-1}(x) = 3x + 2$.',
          'Einsetzen $5$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
      mc(
        'Ein Schüler bestimmt die Umkehrfunktion von $f(x) = x^3 + 1$ als $f^{-1}(x) = x^3 - 1$. Wo liegt der Fehler?',
        [
          'Er hat nur die Konstante verschoben. Korrekt: $x = y^3 + 1 \\Rightarrow y^3 = x - 1 \\Rightarrow y = \\sqrt[3]{x-1}$.',
          'Er hat den Exponent vergessen.',
          'Alles korrekt.',
          'Die Umkehrfunktion existiert nicht.',
        ],
        0,
        `**Ansatz:** Potenz muss wieder zur Wurzel werden.

**Rechnung:** $y = x^3 + 1 \\Rightarrow x^3 = y - 1 \\Rightarrow x = \\sqrt[3]{y-1}$.

**Probe:** $f(f^{-1}(5)) = (\\sqrt[3]{4})^3 + 1 = 4 + 1 = 5$ ✓.

**Typischer Fehler:** Operationen nicht alle umkehren.`,
        [
          'Was macht $f$? Erst $x^3$, dann $+1$.',
          'Rückwärts: erst $-1$, dann $\\sqrt[3]{\\cdot}$.',
          'Alle Operationen umkehren.',
        ],
        {
          1: 'Der Exponent muss komplett umgekehrt werden — aus „hoch $3$" wird „dritte Wurzel". Der Schüler hat zwar erkannt, dass etwas mit dem Exponent passiert, aber das Vorzeichen $+1 \\to -1$ getauscht statt die Operation zu invertieren.',
          2: 'Zahlentest mit $x = 2$: $f(2) = 8 + 1 = 9$, also $f^{-1}(9) = 2$. Schülervorschlag: $f^{-1}(9) = 9^3 - 1 = 728 \\neq 2$. Korrekt: $f^{-1}(9) = \\sqrt[3]{9-1} = \\sqrt[3]{8} = 2$.',
          3: 'Doch — $x^3 + 1$ ist auf $\\mathbb{R}$ streng monoton steigend (Ableitung $3x^2 \\geq 0$, nur in $x = 0$ verschwindend) und durchläuft alle reellen Werte. Damit ist $f$ bijektiv und die Umkehrfunktion $\\sqrt[3]{x - 1}$ existiert.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
      sorting(
        'Bringe die Schritte zur Umkehrung von $f(x) = \\dfrac{2x + 1}{3}$ in die richtige Reihenfolge.',
        [
          'Gleichung aufstellen: $y = (2x + 1)/3$',
          'Mit $3$ multiplizieren: $3y = 2x + 1$',
          'Nach $x$ auflösen: $x = (3y - 1)/2$',
          'Namen tauschen: $f^{-1}(x) = (3x - 1)/2$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisches Vorgehen.

**Rechnung:** $f^{-1}(x) = (3x - 1)/2$.

**Probe:** $f(f^{-1}(x)) = (2 \\cdot (3x-1)/2 + 1)/3 = (3x - 1 + 1)/3 = x$ ✓.

**Typischer Fehler:** Schritte auslassen.`,
        [
          'Gleichung → Auflösen → Tauschen.',
          'Jeden Schritt einzeln.',
          'Probe durch Einsetzen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['umkehr-verfahren'] },
      ),
    ],
    // [2] Graphisch
    2: [
      tf(
        'Der Graph der Umkehrfunktion ist die Spiegelung des ursprünglichen Graphen an der Winkelhalbierenden $y = x$.',
        true,
        `**Ansatz:** $(x, y) \\to (y, x)$ durch Spiegelung.

**Rechnung:** $y = x$ Achse spiegelt $x$- und $y$-Koordinate.

**Probe:** $f(x) = 2x$, Punkt $(1, 2)$. $f^{-1}(x) = x/2$, Punkt $(2, 1)$. Spiegelbild!

**Typischer Fehler:** An $x$- oder $y$-Achse spiegeln.`,
        [
          'Punkt $(a, b)$ spiegeln an $y = x$.',
          'Ergibt $(b, a)$.',
          'Jeder Punkt des Graphen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['umkehr-graph'] },
      ),
      mc(
        'Wenn $f(1) = 5$, welcher Punkt gehört zum Graph von $f^{-1}$?',
        ['$(5, 1)$', '$(1, 5)$', '$(-1, -5)$', '$(1/5, 1)$'],
        0,
        `**Ansatz:** Spiegelung: $(x, y) \\to (y, x)$.

**Rechnung:** $(1, 5)$ von $f$ → $(5, 1)$ von $f^{-1}$.

**Probe:** $f^{-1}(5) = 1$ (nach Definition).

**Typischer Fehler:** Koordinaten nicht tauschen.`,
        [
          'Umkehrfunktion spiegelt Koordinaten.',
          '$(x, y) \\to (y, x)$.',
          '$f(1)=5 \\Rightarrow f^{-1}(5) = 1$.',
        ],
        {
          1: 'Das ist $f$ selbst.',
          2: 'Negation ist kein Umkehrverfahren.',
          3: 'Kehrwert ist nicht Umkehrfunktion.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['umkehr-graph'] },
      ),
      mc(
        'Welche Beziehung besteht zwischen den Graphen von $f(x) = e^x$ und $g(x) = \\ln(x)$?',
        [
          'Sie sind Spiegelbilder an $y = x$',
          'Sie sind identisch',
          'Sie sind Spiegelbilder an der $x$-Achse',
          'Sie sind parallel',
        ],
        0,
        `**Ansatz:** Umkehrfunktion = Spiegelung an $y = x$.

**Rechnung:** $\\ln$ ist Umkehrfunktion von $e^x$. Also spiegelbildlich.

**Probe:** $(1, e)$ von $e^x$ und $(e, 1)$ von $\\ln$.

**Typischer Fehler:** Achse der Spiegelung verwechseln.`,
        [
          '$\\ln$ ist Umkehrung von $e^x$.',
          'Umkehrfunktion-Regel.',
          'Spiegelung an Winkelhalbierenden.',
        ],
        {
          1: 'Sie sind nicht identisch — Probe mit $x = 1$: $e^1 \\approx 2{,}72$, aber $\\ln(1) = 0$. Komplett verschiedene Funktionswerte. Die beiden Graphen verlaufen aber spiegelsymmetrisch zur Geraden $y = x$.',
          2: 'Spiegelung an der $x$-Achse würde alle $y$-Werte negieren: aus $e^x$ würde $-e^x$, aus $\\ln(x)$ würde $-\\ln(x)$. $\\ln(x)$ ist aber *nicht* das Negative von $e^x$ — die Spiegelung läuft an der Winkelhalbierenden $y = x$, nicht an einer Koordinatenachse.',
          3: 'Parallele Graphen hätten überall denselben Abstand und denselben Verlauf — $e^x$ wächst aber exponentiell, $\\ln(x)$ logarithmisch. Sie schneiden $y = x$ jeweils, sind also keinesfalls parallel zueinander oder zu einer Achse.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['umkehr-graph'] },
      ),
      mc(
        'Ein Schüler spiegelt den Graph von $f$ an der $x$-Achse, um die Umkehrfunktion zu erhalten. Wo liegt der Fehler?',
        [
          'Die richtige Achse ist $y = x$ (Winkelhalbierende), nicht die $x$-Achse.',
          'Er hätte an der $y$-Achse spiegeln müssen.',
          'Das ist korrekt.',
          'Spiegelung ist nicht nötig.',
        ],
        0,
        `**Ansatz:** Umkehrfunktion ≠ Vorzeichen-Spiegelung.

**Rechnung:** $x$-Achse: $(a, b) \\to (a, -b)$ — das wäre $-f(x)$, nicht $f^{-1}(x)$.

**Probe:** $f(x) = 2x$, gespiegelt an $x$-Achse: $-2x$. Umkehrfunktion: $x/2$.

**Typischer Fehler:** Spiegelachsen verwechseln.`,
        [
          'An welcher Achse wird gespiegelt?',
          'Winkelhalbierende $y = x$.',
          'Nicht Koordinatenachsen.',
        ],
        {
          1: '$y$-Achse-Spiegelung wäre $f(-x)$ — da werden die $x$-Vorzeichen gespiegelt, nicht die Rollen von $x$ und $y$ getauscht. Beide Achsen-Spiegelungen sind keine Umkehrfunktion. Die richtige Achse ist die *Diagonale* $y = x$.',
          2: 'Doch, der Schüler liegt falsch: Spiegelung an der $x$-Achse liefert $-f(x)$ — Probe mit $f(x) = 2x$: $-f(x) = -2x$. Die Umkehrfunktion ist aber $f^{-1}(x) = x/2$. Komplett verschiedene Funktionen.',
          3: 'Doch — Spiegelung ist tatsächlich der zentrale Mechanismus, nur an der *richtigen* Achse: der Winkelhalbierenden $y = x$. Sie tauscht die Rollen von $x$ und $y$, was genau dem Vertauschen von Argument und Funktionswert bei der Umkehrung entspricht.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['umkehr-graph'] },
      ),
      matching(
        'Ordne jedem Funktionspaar ihre Beziehung zu.',
        [
          { left: '$f(x) = x^2$ (auf $[0,\\infty)$) und $g(x) = \\sqrt{x}$', right: 'Umkehrfunktion (spiegelsymmetrisch an $y=x$)' },
          { left: '$f(x) = e^x$ und $g(x) = \\ln(x)$', right: 'Umkehrfunktion' },
          { left: '$f(x) = 2x$ und $g(x) = x/2$', right: 'Umkehrfunktion' },
          { left: '$f(x) = x$ und $g(x) = x$', right: 'Sich selbst umkehrend (Identität)' },
        ],
        `**Ansatz:** Berühmte Umkehrfunktionspaare.

**Rechnung:** Jedes Paar erfüllt $f(g(x)) = g(f(x)) = x$.

**Probe:** Zahlentest.

**Typischer Fehler:** Definitionsbereich bei Wurzel vergessen.`,
        [
          'Kannst du die Umkehrung ablesen?',
          'Spiegelung prüfen.',
          'Identität spiegelt sich selbst.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['umkehr-graph'] },
      ),
    ],
    // [3] Bereiche
    3: [
      tf(
        'Für $f: D \\to W$ bijektiv ist $D(f^{-1}) = W$ und $W(f^{-1}) = D$.',
        true,
        `**Ansatz:** Definitionsbereich und Wertebereich tauschen.

**Rechnung:** Umkehrfunktion nimmt Werte von $f$ als Argumente.

**Probe:** $f: [0,\\infty) \\to [0,\\infty), f(x) = x^2$. $f^{-1}: [0,\\infty) \\to [0,\\infty), f^{-1}(y) = \\sqrt{y}$.

**Typischer Fehler:** Bereiche NICHT tauschen.`,
        [
          'Umkehrung tauscht Rollen.',
          'Def. → Wert und umgekehrt.',
          'Beide Bereiche wichtig.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['umkehr-bereiche'] },
      ),
      mc(
        'Wenn $f(x) = e^x$ mit $D = \\mathbb{R}$ und $W = (0, \\infty)$ ist, was ist $D(f^{-1})$?',
        ['$(0, \\infty)$', '$\\mathbb{R}$', '$[0, \\infty)$', '$(-\\infty, 0)$'],
        0,
        `**Ansatz:** Def.bereich der Umkehrfunktion = Wertebereich der Originalfunktion.

**Rechnung:** $D(f^{-1}) = W(f) = (0, \\infty)$.

**Probe:** $f^{-1}(x) = \\ln(x)$ braucht $x > 0$.

**Typischer Fehler:** $\\mathbb{R}$ übertragen.`,
        [
          'Tausch der Bereiche.',
          '$W(f) = D(f^{-1})$.',
          '$(0, \\infty)$.',
        ],
        {
          1: '$\\mathbb{R}$ ist der *Definitionsbereich* von $f$ — er wird durch die Umkehrung zum *Wertebereich* von $f^{-1}$, nicht zum Definitionsbereich. Tausch-Regel: $D(f^{-1}) = W(f) = (0, \\infty)$.',
          2: '$[0, \\infty)$ enthält die $0$ als geschlossene Grenze — aber $\\ln(0)$ ist nicht definiert (divergiert nach $-\\infty$). Daher muss die untere Grenze offen sein: $(0, \\infty)$ statt $[0, \\infty)$.',
          3: '$e^x$ ist immer strikt positiv, also nimmt $f$ keine negativen Werte an — der Wertebereich ist $(0, \\infty)$. Damit kann die Umkehrung $\\ln$ keine negativen Argumente verarbeiten — kein $\\ln(-2)$ in $\\mathbb{R}$.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['umkehr-bereiche'] },
      ),
      mc(
        'Gegeben $f: [2, 8] \\to [5, 23]$, $f(x) = 3x - 1$. Was ist der Definitionsbereich von $f^{-1}$?',
        ['$[5, 23]$', '$[2, 8]$', '$\\mathbb{R}$', '$[-1, 7]$'],
        0,
        `**Ansatz:** Def. der Umkehrung = Wertebereich der Original.

**Rechnung:** $W(f) = [5, 23]$. Also $D(f^{-1}) = [5, 23]$.

**Probe:** $f^{-1}(5) = 2$, $f^{-1}(23) = 8$ — beide definiert.

**Typischer Fehler:** Originaldefinition behalten.`,
        [
          'Tausch der Bereiche.',
          '$W(f) \\to D(f^{-1})$.',
          '$[5, 23]$.',
        ],
        {
          1: '$[2, 8]$ ist der Definitionsbereich von $f$ — bei der Umkehrung wird er aber zum Wertebereich von $f^{-1}$, nicht zum Definitionsbereich. Die Umkehrung verarbeitet, was $f$ ausgegeben hat: $D(f^{-1}) = W(f) = [5, 23]$.',
          2: '$\\mathbb{R}$ wäre nur dann der Definitionsbereich, wenn $f$ alle reellen Zahlen treffen würde. Aber $f([2, 8]) = [5, 23]$ — nur dieser Bereich. Werte außerhalb haben keine Urbilder, also kann $f^{-1}$ sie nicht verarbeiten.',
          3: '$[-1, 7]$ entsteht z. B., wenn man rückwärts $(y - 1)/3$ rechnet *und* die Bereich-Bedeutung verwechselt. Korrekt: $f^{-1}(x) = (x+1)/3$, definiert auf $[5, 23]$ — bei $x = 5$ liefert sie $2$, bei $x = 23$ liefert sie $8$. Beides liegt im ursprünglichen $D(f) = [2, 8]$.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['umkehr-bereiche'] },
      ),
      mc(
        'Ein Schüler sagt: "Wenn $f: [0, 4] \\to [1, 17], f(x) = x^2 + 1$, dann ist $f^{-1}: [0, 4] \\to [1, 17]$." Wo liegt der Fehler?',
        [
          'Die Bereiche werden VERTAUSCHT: $f^{-1}: [1, 17] \\to [0, 4]$.',
          'Die Bereiche sind korrekt.',
          'Der Bereich ist $\\mathbb{R}$.',
          'Die Umkehrfunktion existiert nicht.',
        ],
        0,
        `**Ansatz:** Def.- und Wertebereich tauschen bei Umkehrung.

**Rechnung:** $f^{-1}: [1, 17] \\to [0, 4]$.

**Probe:** $f(2) = 5 \\Rightarrow f^{-1}(5) = 2$: Input $5 \\in [1,17]$, Output $2 \\in [0,4]$.

**Typischer Fehler:** Bereiche einfach übernehmen.`,
        [
          'Tausch der Bereiche.',
          'Input der Umkehrung = Output des Originals.',
          'Und umgekehrt.',
        ],
        {
          1: 'Bereiche MÜSSEN getauscht werden.',
          2: 'Nein, eingeschränkt.',
          3: 'Doch — auf eingeschränktem Def.bereich bijektiv.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['umkehr-bereiche'] },
      ),
      matching(
        'Ordne jeder Funktion den Definitionsbereich der Umkehrfunktion zu.',
        [
          { left: '$f(x) = x^2$ auf $[0, \\infty)$',    right: '$D(f^{-1}) = [0, \\infty)$' },
          { left: '$f(x) = e^x$ auf $\\mathbb{R}$',      right: '$D(f^{-1}) = (0, \\infty)$' },
          { left: '$f(x) = \\ln(x)$ auf $(0, \\infty)$', right: '$D(f^{-1}) = \\mathbb{R}$' },
          { left: '$f(x) = 2x + 3$ auf $\\mathbb{R}$',   right: '$D(f^{-1}) = \\mathbb{R}$' },
        ],
        `**Ansatz:** Wertebereich → Def.bereich der Umkehrung.

**Rechnung:** Je nach Funktion.

**Probe:** Pro Funktion den Wertebereich bestimmen.

**Typischer Fehler:** Def.bereich behalten.`,
        [
          'Wertebereich bestimmen.',
          'Das wird $D(f^{-1})$.',
          'Pro Funktion unterschiedlich.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['umkehr-bereiche'] },
      ),
    ],
    // [4] Identität
    4: [
      tf(
        'Es gilt $f(f^{-1}(x)) = x$ und $f^{-1}(f(x)) = x$.',
        true,
        `**Ansatz:** Umkehrfunktion "macht rückgängig".

**Rechnung:** Komposition heben sich auf.

**Probe:** $f(x) = 2x$, $f^{-1}(x) = x/2$. $f(f^{-1}(x)) = 2(x/2) = x$ ✓.

**Typischer Fehler:** Nur eine Richtung gelten lassen.`,
        [
          'Was bewirkt Umkehrung?',
          'Macht $f$ rückgängig.',
          'Beide Richtungen.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['umkehr-identitaet'] },
      ),
      mc(
        'Für $f(x) = x^3$ und $f^{-1}(x) = \\sqrt[3]{x}$: Was ist $f(f^{-1}(8))$?',
        ['$8$', '$2$', '$512$', '$8^3$'],
        0,
        `**Ansatz:** Umkehrung hebt sich auf.

**Rechnung:** $f^{-1}(8) = 2$. $f(2) = 8$.

**Probe:** Generell: $f(f^{-1}(x)) = x$.

**Typischer Fehler:** Nur eine Funktion anwenden.`,
        [
          'Innere zuerst.',
          '$\\sqrt[3]{8} = 2$.',
          '$2^3 = 8$.',
        ],
        {
          1: '$f^{-1}(8) = 2$ allein.',
          2: 'Nur Original-Funktion.',
          3: 'Doppelte Anwendung ohne Umkehr.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['umkehr-identitaet'] },
      ),
      ni(
        'Für $f(x) = 3x + 2$ berechne $f^{-1}(f(7))$.',
        7, 0, '',
        `**Ansatz:** Umkehr-Identität: immer $x$.

**Rechnung:** $f^{-1}(f(7)) = 7$.

**Probe:** Oder explicit: $f(7) = 23$. $f^{-1}(23) = (23-2)/3 = 7$. ✓

**Typischer Fehler:** Rechnerisch statt konzeptuell lösen.`,
        [
          'Umkehr-Identität.',
          '$f^{-1}(f(x)) = x$.',
          'Bei $x = 7$: $7$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['umkehr-identitaet'] },
      ),
      mc(
        'Ein Schüler behauptet $f^{-1}(f(x)) = f^{-1}(x) \\cdot f(x)$. Wo liegt der Fehler?',
        [
          'Komposition ist Einsetzung, nicht Multiplikation: $f^{-1}(f(x)) = x$.',
          'Er hätte $f^{-1}(x) + f(x)$ schreiben müssen.',
          'Er hat recht.',
          'Die Regel gilt nur für lineare Funktionen.',
        ],
        0,
        `**Ansatz:** Komposition heißt Einsetzen, nicht Multiplizieren.

**Rechnung:** $f^{-1}(f(x)) = x$ für ALLE bijektiven $f$.

**Probe:** Definition der Umkehrfunktion.

**Typischer Fehler:** Komposition mit Multiplikation verwechseln.`,
        [
          'Was bedeutet Komposition?',
          'Einsetzung.',
          'Ergebnis ist $x$.',
        ],
        {
          1: 'Auch Addition wäre falsch — $f^{-1}(f(x))$ ist eine *Komposition*, kein arithmetisches Verknüpfen. Komposition heißt: das Ergebnis der einen Funktion als Argument der anderen einsetzen, und gerade die Umkehrung hebt die Operation komplett auf — Ergebnis ist $x$, nicht $f^{-1}(x) + f(x)$.',
          2: 'Zahlentest mit $f(x) = 2x$, also $f^{-1}(x) = x/2$. Bei $x = 4$: $f^{-1}(f(4)) = f^{-1}(8) = 4 = x$ ✓. Schülervorschlag: $f^{-1}(4) \\cdot f(4) = 2 \\cdot 8 = 16 \\neq 4$. Komposition $\\neq$ Multiplikation.',
          3: 'Genau das Gegenteil — die Identität $f^{-1}(f(x)) = x$ gilt für *jede* bijektive Funktion, nicht nur für lineare. Sie ist die *definierende* Eigenschaft der Umkehrung: alles, was $f$ tut, macht $f^{-1}$ rückgängig — egal wie kompliziert $f$ ist.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['umkehr-identitaet'] },
      ),
      ni(
        'Berechne $f(f^{-1}(100))$ für irgendeine bijektive Funktion $f$.',
        100, 0, '',
        `**Ansatz:** Umkehr-Identität.

**Rechnung:** $f(f^{-1}(x)) = x$, unabhängig von $f$.

**Probe:** Bei $x = 100$: Ergebnis $100$.

**Typischer Fehler:** Spezifische Funktion suchen.`,
        [
          'Identität gilt immer.',
          'Input bleibt Output.',
          'Bei $100$: $100$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['umkehr-identitaet'] },
      ),
    ],
    // [5] Einschränkung
    5: [
      tf(
        'Eine nicht-injektive Funktion kann durch Einschränkung des Definitionsbereichs umkehrbar gemacht werden.',
        true,
        `**Ansatz:** Typische Strategie bei $x^2, \\sin, \\cos$.

**Rechnung:** $x^2$ auf $[0, \\infty)$ ist bijektiv.

**Probe:** $\\sqrt{y}$ ist wohldefinierte Umkehrfunktion.

**Typischer Fehler:** Auf originalem Bereich umkehren wollen.`,
        [
          'Wann existiert Umkehrfunktion?',
          'Bei Bijektivität.',
          'Einschränkung kann helfen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['umkehr-einschraenken'] },
      ),
      mc(
        'Auf welchem Bereich ist $f(x) = x^2$ umkehrbar?',
        ['$[0, \\infty)$ oder $(-\\infty, 0]$', '$\\mathbb{R}$', '$[-1, 1]$', 'Nirgends'],
        0,
        `**Ansatz:** Einschränkung auf monotonen Teil.

**Rechnung:** $x^2$ ist auf $[0, \\infty)$ streng monoton wachsend, auf $(-\\infty, 0]$ streng monoton fallend — beides bijektiv auf $[0, \\infty)$.

**Probe:** $f^{-1}(y) = \\sqrt{y}$ oder $-\\sqrt{y}$.

**Typischer Fehler:** Ganz $\\mathbb{R}$ annehmen.`,
        [
          'Wo ist $x^2$ monoton?',
          'Zwei Äste.',
          'Jeder für sich umkehrbar.',
        ],
        {
          1: 'Auf $\\mathbb{R}$ nicht bijektiv.',
          2: 'Zu eingeschränkt.',
          3: 'Doch — auf eingeschränktem Bereich.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['umkehr-einschraenken'] },
      ),
      mc(
        'Schränke $f(x) = \\cos(x)$ ein, damit sie umkehrbar wird (Standardwahl).',
        ['$[0, \\pi]$', '$[-\\pi, \\pi]$', '$[0, 2\\pi]$', '$(-\\infty, \\infty)$'],
        0,
        `**Ansatz:** Hauptzweig des $\\cos$.

**Rechnung:** Auf $[0, \\pi]$ ist $\\cos$ streng monoton fallend, bijektiv auf $[-1, 1]$. Umkehrung: $\\arccos$.

**Probe:** Standardkonvention.

**Typischer Fehler:** Symmetrischen Bereich wählen.`,
        [
          'Hauptzweig.',
          'Monotonie.',
          '$[0, \\pi]$ Konvention.',
        ],
        {
          1: 'Symmetrisch, aber nicht bijektiv ($\\cos$-achsensymmetrisch).',
          2: 'Zwei Perioden.',
          3: 'Periodisch, nicht bijektiv.',
        },
        { stage: 'apply-independent', subGoal: 5, uses: ['umkehr-einschraenken', 'umkehr-verfahren'] },
      ),
      mc(
        'Ein Schüler möchte $f(x) = x^2$ auf ganz $\\mathbb{R}$ umkehren und erhält "$\\sqrt{y}$ oder $-\\sqrt{y}$". Wo liegt der Fehler?',
        [
          'Eine Umkehrfunktion muss EINDEUTIG sein. Deshalb muss $f$ erst auf einen monotonen Bereich eingeschränkt werden.',
          'Er hätte nur $\\sqrt{y}$ nehmen sollen.',
          'Er hat recht — zwei Äste sind OK.',
          'Die Umkehrfunktion ist immer mehrdeutig.',
        ],
        0,
        `**Ansatz:** Funktion muss eindeutig sein.

**Rechnung:** $\\{\\sqrt{y}, -\\sqrt{y}\\}$ wäre eine Relation, keine Funktion.

**Probe:** Einschränkung nötig.

**Typischer Fehler:** Zweiwertigkeit akzeptieren.`,
        [
          'Funktion = eindeutig.',
          'Zwei Werte = keine Funktion.',
          'Einschränkung macht eindeutig.',
        ],
        {
          1: 'Auswahl muss begründet sein (Einschränkung).',
          2: 'Zwei Äste bilden keine Funktion.',
          3: 'Umkehrfunktion ist IMMER eindeutig (wenn sie existiert).',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['umkehr-einschraenken'] },
      ),
      ni(
        'Bestimme die Umkehrfunktion von $f(x) = x^2 - 4$ auf $[0, \\infty)$ und gib $f^{-1}(12)$ an.',
        4, 0, '',
        `**Ansatz:** Einschränkung auf $[0, \\infty)$ macht bijektiv. $y = x^2 - 4 \\Rightarrow x = \\sqrt{y+4}$.

**Rechnung:** $f^{-1}(x) = \\sqrt{x + 4}$. $f^{-1}(12) = \\sqrt{16} = 4$.

**Probe:** $f(4) = 16 - 4 = 12$ ✓.

**Typischer Fehler:** Vorzeichen des $-4$ falsch.`,
        [
          'Einschränkung auf $[0,\\infty)$.',
          '$y = x^2 - 4 \\Rightarrow x = \\sqrt{y+4}$.',
          '$f^{-1}(12) = \\sqrt{16} = 4$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['umkehr-einschraenken', 'umkehr-verfahren'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-4-1 — Prüfung: Algebra-Grundlagen (5 SGs, 25 Aufgaben)
  // Alle Aufgaben mit [PRÜFUNG] -Prefix.
  // ───────────────────────────────────────────────────────────────────────
  'alg-4-1': {
    // [0] Diskriminante
    0: [
      tf(
        '[PRÜFUNG] Für $D > 0$ hat die quadratische Gleichung $ax^2 + bx + c = 0$ zwei verschiedene reelle Lösungen.',
        true,
        `**Ansatz:** Diskriminantenfall prüfen.

**Rechnung:** $D = b^2 - 4ac > 0 \\Rightarrow \\sqrt{D}$ reell, $\\pm\\sqrt{D}$ liefert zwei verschiedene Lösungen.

**Probe:** $x^2 - 5x + 6$: $D = 25 - 24 = 1$, zwei Lösungen ($2, 3$). ✓

**Typischer Fehler:** $D = 0$ als "zwei" zählen.`,
        [
          'Diskriminante.',
          '$D > 0$ Fall.',
          'Zwei verschiedene Lösungen.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['pr-diskriminante'] },
      ),
      mc(
        '[PRÜFUNG] Wie viele reelle Lösungen hat $2x^2 + 3x + 5 = 0$?',
        ['Keine', 'Eine doppelte', 'Zwei verschiedene', 'Unendlich viele'],
        0,
        `**Ansatz:** $D$ berechnen.

**Rechnung:** $D = 9 - 40 = -31 < 0$.

**Probe:** Keine reelle Lösung.

**Typischer Fehler:** Vorzeichen von $D$ ignorieren.`,
        [
          '$D = b^2 - 4ac$.',
          '$9 - 40 = -31$.',
          '$D < 0$: keine reelle Lösung.',
        ],
        {
          1: '$D \\neq 0$.',
          2: '$D < 0$, also keine.',
          3: 'Quadratisch: max $2$.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pr-diskriminante'] },
      ),
      ni(
        '[PRÜFUNG] Berechne die Diskriminante von $x^2 + 4x - 5 = 0$.',
        36, 0, '',
        `**Ansatz:** $D = b^2 - 4ac$.

**Rechnung:** $a=1, b=4, c=-5$. $D = 16 - 4 \\cdot 1 \\cdot (-5) = 16 + 20 = 36$.

**Probe:** $D > 0$: zwei reelle Lösungen ($x = 1, x = -5$).

**Typischer Fehler:** Vorzeichen von $c$ falsch.`,
        [
          '$D = b^2 - 4ac$.',
          '$b = 4$, also $b^2 = 16$.',
          '$-4ac = -4(-5) = 20$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-diskriminante'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling erhält für $x^2 - 6x + 9 = 0$ den Wert $D = 0$ und schreibt "keine Lösung". Wo liegt der Fehler?',
        [
          '$D = 0$ bedeutet EINE (doppelte) Lösung, nicht keine.',
          'Er hätte auf komplexe Zahlen zurückgreifen müssen.',
          'Die Rechnung ist korrekt.',
          '$D$ müsste negativ sein.',
        ],
        0,
        `**Ansatz:** $D = 0$-Fall richtig interpretieren.

**Rechnung:** $x = -b/(2a) = 6/2 = 3$. Doppellösung.

**Probe:** $(x-3)^2 = 0$.

**Typischer Fehler:** $D = 0$ mit $D < 0$ verwechseln.`,
        [
          '$D = 0$ heißt was?',
          'Doppellösung.',
          'Parabel berührt $x$-Achse.',
        ],
        {
          1: 'Reelle Doppellösung existiert.',
          2: 'Wahre Rechnung, aber Schluss falsch.',
          3: 'Rechnung ist korrekt.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['pr-diskriminante'] },
      ),
      matching(
        '[PRÜFUNG] Ordne jedem Diskriminantenfall die Lösungsanzahl zu.',
        [
          { left: '$D > 0$',  right: 'zwei verschiedene reelle' },
          { left: '$D = 0$',  right: 'eine (doppelte)' },
          { left: '$D < 0$',  right: 'keine reelle' },
          { left: '$D = 16$', right: 'zwei verschiedene (positive $D$)' },
        ],
        `**Ansatz:** Diskriminante-Fälle.

**Rechnung:** Standardtabelle.

**Probe:** Jede Lösung prüfen.

**Typischer Fehler:** $D = 0$ als keine.`,
        [
          'Drei Fälle.',
          'Vorzeichen von $D$.',
          'Anzahl Lösungen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['pr-diskriminante'] },
      ),
    ],
    // [1] Exponentialgleichung
    1: [
      tf(
        '[PRÜFUNG] Die Gleichung $a^x = b$ (mit $a, b > 0, a \\neq 1$) löst man durch Logarithmieren zu $x = \\log_a(b)$.',
        true,
        `**Ansatz:** Logarithmieren beider Seiten.

**Rechnung:** $\\log_a(a^x) = \\log_a(b) \\Rightarrow x = \\log_a(b)$.

**Probe:** $2^x = 8 \\Rightarrow x = \\log_2(8) = 3$.

**Typischer Fehler:** Basis und Argument vertauschen.`,
        [
          'Logarithmieren.',
          'Basis gleich.',
          '$x = \\log_a(b)$.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pr-exp-gleichung'] },
      ),
      mc(
        '[PRÜFUNG] Löse $3^x = 81$ nach $x$.',
        ['$4$', '$27$', '$\\log(81/3)$', '$\\sqrt[3]{81}$'],
        0,
        `**Ansatz:** $3^x = 81$ als Potenz von $3$ erkennen.

**Rechnung:** $81 = 3^4$. Also $x = 4$.

**Probe:** $3^4 = 81$ ✓.

**Typischer Fehler:** Division rechnen.`,
        [
          '$81$ als Potenz von $3$.',
          '$3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$.',
          '$x = 4$.',
        ],
        {
          1: 'Division ist nicht Logarithmus.',
          2: 'Verwirrt.',
          3: 'Wurzel ist falsche Operation.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pr-exp-gleichung'] },
      ),
      ni(
        '[PRÜFUNG] Löse $e^x = 10$ und gib $x$ auf 3 Dezimalen an.',
        2.303, 0.01, '',
        `**Ansatz:** $x = \\ln(10)$.

**Rechnung:** $\\ln(10) \\approx 2.303$.

**Probe:** $e^{2.303} \\approx 10$ ✓.

**Typischer Fehler:** $\\log_{10}(e) = 0.434$ nehmen.`,
        [
          'Logarithmieren.',
          '$\\ln(e^x) = x$.',
          '$x = \\ln 10$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pr-exp-gleichung'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling löst $2^x = -4$ und erhält $x = \\log_2(-4)$. Wo liegt der Fehler?',
        [
          '$2^x > 0$ für alle $x$ — die Gleichung hat KEINE reelle Lösung.',
          'Er hätte $\\log_{-2}(4)$ schreiben müssen.',
          'Alles korrekt.',
          'Die Gleichung hat $x = -2$.',
        ],
        0,
        `**Ansatz:** Wertebereich von $a^x$ beachten.

**Rechnung:** $2^x \\in (0, \\infty)$, niemals negativ.

**Probe:** Keine reelle Lösung.

**Typischer Fehler:** Existenzbereich ignorieren.`,
        [
          'Wertebereich $a^x$?',
          'Immer positiv.',
          '$-4$ nicht im Wertebereich.',
        ],
        {
          1: 'Basis muss positiv sein.',
          2: 'Keine Lösung.',
          3: '$2^{-2} = 1/4$, nicht $-4$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pr-exp-gleichung'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung von $2 \\cdot 3^x = 54$ in die richtige Reihenfolge.',
        [
          'Beide Seiten durch $2$: $3^x = 27$',
          'Als Potenz von $3$ erkennen: $27 = 3^3$',
          'Exponenten vergleichen: $x = 3$',
        ],
        [0, 1, 2],
        `**Ansatz:** Erst isolieren, dann logarithmieren.

**Rechnung:** $x = 3$.

**Probe:** $2 \\cdot 3^3 = 2 \\cdot 27 = 54$ ✓.

**Typischer Fehler:** Direkt logarithmieren ohne $2$ zu eliminieren.`,
        [
          'Erst Koeffizient isolieren.',
          'Dann vergleichen.',
          'Einfach, wenn Basen passen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['pr-exp-gleichung'] },
      ),
    ],
    // [2] Wurzelgleichung
    2: [
      tf(
        '[PRÜFUNG] Wurzelgleichungen löst man durch Quadrieren. Danach ist die Probe zwingend nötig.',
        true,
        `**Ansatz:** Quadrieren ist keine Äquivalenzumformung.

**Rechnung:** Beispiel $\\sqrt{x} = -3$: Quadrieren gibt $x = 9$, aber $\\sqrt{9} = 3 \\neq -3$ → Scheinlösung.

**Probe:** Rückeinsetzen in Original-Gleichung.

**Typischer Fehler:** Probe weglassen.`,
        [
          'Quadrieren erzeugt Scheinlösungen.',
          'Probe Pflicht.',
          'Original-Gleichung.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pr-wurzel-gleichung'] },
      ),
      mc(
        '[PRÜFUNG] Löse $\\sqrt{x + 5} = 3$.',
        ['$x = 4$', '$x = -2$', '$x = 3$', '$x = 14$'],
        0,
        `**Ansatz:** Quadrieren + Probe.

**Rechnung:** $x + 5 = 9 \\Rightarrow x = 4$.

**Probe:** $\\sqrt{9} = 3$ ✓.

**Typischer Fehler:** Nicht quadrieren.`,
        [
          'Beide Seiten quadrieren.',
          '$x + 5 = 9$.',
          '$x = 4$, Probe bestätigt.',
        ],
        {
          1: 'Negativ — Scheinlösung möglich, aber hier $x = -2$: $\\sqrt{3}$, nicht $3$.',
          2: 'Nicht Lösung.',
          3: 'Nicht Lösung.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pr-wurzel-gleichung'] },
      ),
      ni(
        '[PRÜFUNG] Löse $\\sqrt{2x - 3} = 5$.',
        14, 0, '',
        `**Ansatz:** Quadrieren.

**Rechnung:** $2x - 3 = 25 \\Rightarrow 2x = 28 \\Rightarrow x = 14$.

**Probe:** $\\sqrt{25} = 5$ ✓.

**Typischer Fehler:** Quadrieren falsch.`,
        [
          'Quadrieren: $2x - 3 = 25$.',
          '$2x = 28$.',
          '$x = 14$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pr-wurzel-gleichung'] },
      ),
      mc(
        '[PRÜFUNG] Bei $\\sqrt{x} = x - 6$ ergibt Quadrieren $x = x^2 - 12x + 36$. Ein Prüfling erhält $x = 4$ und $x = 9$ und gibt beide als Lösung an. Wo liegt der Fehler?',
        [
          'Probe zeigt: $\\sqrt{4} = 2 \\neq 4 - 6 = -2$ — $x = 4$ ist Scheinlösung. Nur $x = 9$ ist Lösung.',
          'Beide Lösungen sind korrekt.',
          'Er hätte nur $x = 4$ nehmen sollen.',
          'Die Gleichung hat keine Lösung.',
        ],
        0,
        `**Ansatz:** Probe eliminiert Scheinlösungen.

**Rechnung:** $x = 9$: $\\sqrt{9} = 3 = 9 - 6 = 3$ ✓. $x = 4$: $\\sqrt{4} = 2 \\neq -2 = 4 - 6$ ✗.

**Probe:** Nur $x = 9$ valide.

**Typischer Fehler:** Ohne Probe.`,
        [
          'Probe bei jeder Kandidatenlösung.',
          'Wurzel nur positiv.',
          'Rechte Seite muss $\\geq 0$ sein.',
        ],
        {
          1: 'Nur $x = 9$ ist Lösung.',
          2: '$x = 9$ ist valide, $x = 4$ nicht.',
          3: '$x = 9$ löst die Gleichung.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pr-wurzel-gleichung'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Lösungsschritte für $\\sqrt{3x + 1} = x - 1$ in die richtige Reihenfolge.',
        [
          'Definitionsbereich: $3x + 1 \\geq 0$ UND $x - 1 \\geq 0$, also $x \\geq 1$',
          'Beide Seiten quadrieren: $3x + 1 = x^2 - 2x + 1$',
          'Auf Null bringen: $x^2 - 5x = 0$, also $x(x-5) = 0$',
          'Kandidaten: $x = 0$ (außerhalb Def.bereich) und $x = 5$',
          'Probe bei $x = 5$: $\\sqrt{16} = 4 = 5 - 1$ ✓',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Systematisch mit Probe.

**Rechnung:** $x = 5$.

**Probe:** ✓.

**Typischer Fehler:** Probe-Schritt überspringen.`,
        [
          'Def.bereich zuerst.',
          'Quadrieren.',
          'Probe Pflicht.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pr-wurzel-gleichung'] },
      ),
    ],
    // [3] Dimensionslose Argumente
    3: [
      tf(
        '[PRÜFUNG] Argumente von $\\ln$, $\\log$ und $e^{(\\cdot)}$ müssen dimensionslos sein.',
        true,
        `**Ansatz:** Log-Funktionen sind transzendent — nur reine Zahlen.

**Rechnung:** $\\ln(100 \\text{m})$ ist nicht definiert. Stattdessen $\\ln(100 \\text{m} / 1 \\text{m}) = \\ln(100)$.

**Probe:** Einheitencheck in Formeln.

**Typischer Fehler:** Dimensionsbehaftete Argumente akzeptieren.`,
        [
          'Einheitencheck.',
          'Log-Argument?',
          'Immer dimensionslos.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pr-dimensionslos'] },
      ),
      mc(
        '[PRÜFUNG] Welche Formel ist physikalisch KORREKT formuliert?',
        [
          '$\\text{pH} = -\\log_{10}(c / c_0)$ mit $c_0 = 1\\,\\text{mol/L}$',
          '$\\text{pH} = -\\log_{10}(\\text{mol/L})$',
          '$\\text{pH} = -\\log_{10}(100\\,\\text{mol/L})$',
          '$\\text{pH} = \\text{mol/L}$',
        ],
        0,
        `**Ansatz:** Log-Argument dimensionslos.

**Rechnung:** Normierung mit Referenzkonzentration.

**Probe:** Standardform in Chemie.

**Typischer Fehler:** Einheit im Log.`,
        [
          'Referenzgröße nötig.',
          'Verhältnis ist dimensionslos.',
          '$c/c_0$.',
        ],
        {
          1: 'Einheit im Log — falsch.',
          2: 'Nicht sinnvoll.',
          3: 'pH ist keine Konzentration.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pr-dimensionslos'] },
      ),
      mc(
        '[PRÜFUNG] Was ist die korrekte Form für Dezibel $L$ bei Leistung $P$?',
        [
          '$L = 10 \\log_{10}(P/P_0)$ mit Referenz $P_0$',
          '$L = 10 \\log_{10}(P)$ direkt in Watt',
          '$L = P/P_0$',
          '$L = \\log(P) \\cdot 10$',
        ],
        0,
        `**Ansatz:** Verhältnis zur Referenzleistung.

**Rechnung:** $L = 10 \\log_{10}(P/P_0)$ dB.

**Probe:** Standard in Akustik/Elektrotechnik.

**Typischer Fehler:** Referenz weglassen.`,
        [
          'Verhältnis.',
          'Dimensionslos.',
          'Referenz entscheidend.',
        ],
        {
          1: 'Ohne Referenz geht nicht.',
          2: 'Das ist nicht dB.',
          3: 'Referenz fehlt.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['pr-dimensionslos'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling schreibt in der Halbwertszeit-Formel $N(t) = N_0 e^{-kt}$ mit $k = 0.05\\,\\text{pro Jahr}$ und $t$ in Jahren. Ist das korrekt dimensioniert?',
        [
          'Ja — $kt$ ist dimensionslos (pro Jahr $\\cdot$ Jahr).',
          'Nein — $k$ darf keine Einheit haben.',
          'Nein — $t$ ist falsch.',
          'Nein — die Gleichung ist dimensional falsch.',
        ],
        0,
        `**Ansatz:** Produkt $kt$ muss dimensionslos sein.

**Rechnung:** $[k] = 1/\\text{Jahr}$, $[t] = \\text{Jahr}$. Produkt: dimensionslos.

**Probe:** $e^{(\\cdot)}$-Argument OK.

**Typischer Fehler:** $k$ als dimensionslos annehmen.`,
        [
          'Produkt $kt$ betrachten.',
          'Einheiten kürzen sich.',
          'Dimensionslos.',
        ],
        {
          1: '$k$ hat Einheit $1/\\text{Zeit}$.',
          2: '$t$ in Zeit-Einheit ist korrekt.',
          3: 'Dimensional korrekt.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pr-dimensionslos'] },
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Größe die passende Bedingung zu.',
        [
          { left: '$\\ln(x)$',         right: 'nur $x > 0$, dimensionslos' },
          { left: '$e^x$',             right: 'beliebiges reelles $x$, dimensionslos' },
          { left: '$\\sin(x)$',        right: 'Argument in Bogenmaß (rad), dimensionslos' },
          { left: '$\\sqrt{x}$',       right: 'nur $x \\geq 0$' },
        ],
        `**Ansatz:** Typische Einschränkungen.

**Rechnung:** Jede Funktion hat Anforderungen.

**Probe:** Standardliste.

**Typischer Fehler:** Einheiten im Argument.`,
        [
          'Jede Funktion hat Regeln.',
          'Transzendente Funktionen dimensionslos.',
          'Einschränkungen prüfen.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pr-dimensionslos'] },
      ),
    ],
    // [4] Rechenweg
    4: [
      tf(
        '[PRÜFUNG] In Prüfungsaufgaben ist ein klar strukturierter Rechenweg mit nummerierten Schritten wichtig für volle Punktzahl.',
        true,
        `**Ansatz:** Teilpunkte für Zwischenschritte.

**Rechnung:** Selbst bei Endfehler gibt es Punkte für korrekte Methode.

**Probe:** Übliche Klausurpraxis.

**Typischer Fehler:** Nur Endergebnis hinschreiben.`,
        [
          'Struktur wichtig.',
          'Teilpunkte.',
          'Methode zählt.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['pr-rechenweg'] },
      ),
      mc(
        '[PRÜFUNG] Welche Reihenfolge ist der BESTE Prüfungs-Rechenweg?',
        [
          'Gegeben/Gesucht → Ansatz → Rechnung → Probe',
          'Direkt ausrechnen → Fehler suchen',
          'Endergebnis raten → Probe',
          'Nur Formel hinschreiben',
        ],
        0,
        `**Ansatz:** Systematisches Vorgehen.

**Rechnung:** Klar strukturierte Schritte.

**Probe:** Standardvorgehen in Klausuren.

**Typischer Fehler:** Unstrukturiertes Vorgehen.`,
        [
          'Systematisches Vorgehen.',
          'Gegeben-Gesucht-Lösung-Probe.',
          'Klare Struktur.',
        ],
        {
          1: 'Unstrukturiert.',
          2: 'Raten ist keine Methode.',
          3: 'Nur Formel reicht nicht für Punkte.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['pr-rechenweg'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Teile eines Prüfungs-Rechenwegs in Reihenfolge.',
        [
          'Aufgabe zweimal lesen, Gegeben/Gesucht markieren',
          'Ansatz/Methode wählen und begründen',
          'Schrittweise rechnen mit nummerierten Umformungen',
          'Probe durchführen',
          'Ergebnis zusammenfassen mit Einheiten',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Prüfungsstrategie.

**Rechnung:** Fünf systematische Schritte.

**Probe:** Standardvorgehen.

**Typischer Fehler:** Schritte auslassen.`,
        [
          'Reihenfolge wichtig.',
          'Nichts überspringen.',
          'Probe UND Zusammenfassung.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['pr-rechenweg'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling rechnet die Aufgabe korrekt, schreibt aber nur das Endergebnis hin. Wie wirkt sich das in der Bewertung aus?',
        [
          'Nur volle Punktzahl bei absolut korrektem Ergebnis; bei Fehler keine Teilpunkte.',
          'Unstrukturierte Antwort wird automatisch ignoriert.',
          'Keine Auswirkung — nur das Ergebnis zählt.',
          'Die ganze Prüfung wird abgelehnt.',
        ],
        0,
        `**Ansatz:** Risikoreich ohne Struktur.

**Rechnung:** Bei kleinen Rechenfehlern gibt's keine Teilpunkte.

**Probe:** Klausurrealität.

**Typischer Fehler:** Endresultat-only-Stil.`,
        [
          'Teilpunkte vs. alles-oder-nichts.',
          'Struktur zeigt Verständnis.',
          'Sicherheit durch Vorgehen.',
        ],
        {
          1: 'Überzogen — wird bewertet.',
          2: 'Rechenweg beeinflusst Punktezahl.',
          3: 'Prüfung wird trotzdem bewertet.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['pr-rechenweg'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Elemente einer vollständigen Lösung für $x^2 - 6x + 8 = 0$ in Reihenfolge.',
        [
          'Gegeben: quadratische Gleichung $x^2 - 6x + 8 = 0$',
          'Ansatz: pq-Formel mit $p = -6, q = 8$',
          'Rechnung: $x_{1,2} = 3 \\pm \\sqrt{9 - 8} = 3 \\pm 1$',
          'Lösungen: $x_1 = 4, x_2 = 2$',
          'Probe: $(x-2)(x-4) = x^2 - 6x + 8$ ✓',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Beispielhaft vollständige Lösung.

**Rechnung:** Jeder Schritt klar.

**Probe:** Beim Gutachter sichtbar.

**Typischer Fehler:** Schritte zusammenfassen.`,
        [
          'Jeder Schritt sichtbar.',
          'Systematisch.',
          'Probe als letzter Schritt.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['pr-rechenweg'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-4-2 — Prüfung: Funktionen & Anwendungen (6 SGs, 30 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-4-2': {
    // [0] Scheitelformel
    0: [
      tf(
        '[PRÜFUNG] Der Scheitelpunkt einer Parabel $y = ax^2 + bx + c$ liegt bei $x_S = -b/(2a)$.',
        true,
        `**Ansatz:** Ableitung $= 0$: $2ax + b = 0$.

**Rechnung:** $x_S = -b/(2a)$.

**Probe:** $y = x^2 + 2x + 1$: $x_S = -2/2 = -1$.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Ableitung null.',
          '$x_S = -b/(2a)$.',
          'Minus beachten.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['pr-scheitel-formel'] },
      ),
      mc(
        '[PRÜFUNG] Was ist der Scheitelpunkt von $y = 2x^2 - 8x + 3$?',
        ['$(2, -5)$', '$(-2, 19)$', '$(4, -5)$', '$(-4, 67)$'],
        0,
        `**Ansatz:** $x_S = -b/(2a)$, dann $y_S$.

**Rechnung:** $x_S = 8/4 = 2$. $y_S = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5$.

**Probe:** $(2, -5)$.

**Typischer Fehler:** Vorzeichen falsch.`,
        [
          '$a = 2, b = -8$.',
          '$x_S = 8/4 = 2$.',
          '$y_S = f(2) = -5$.',
        ],
        {
          1: 'Vorzeichen von $x_S$ falsch.',
          2: '$x_S$ falsch.',
          3: 'Beides falsch.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pr-scheitel-formel'] },
      ),
      ni(
        '[PRÜFUNG] Berechne den $x$-Wert des Scheitelpunkts von $y = x^2 - 10x + 7$.',
        5, 0, '',
        `**Ansatz:** $x_S = -b/(2a)$.

**Rechnung:** $x_S = 10/2 = 5$.

**Probe:** Ableitung: $2x - 10 = 0 \\Rightarrow x = 5$.

**Typischer Fehler:** Vorzeichen übersehen.`,
        [
          '$a = 1, b = -10$.',
          '$x_S = -b/(2a) = 10/2$.',
          '$= 5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-scheitel-formel'] },
      ),
      mc(
        '[PRÜFUNG] Ein Schüler berechnet für $y = -x^2 + 6x - 4$ den Scheitel bei $x_S = -6/(2 \\cdot (-1)) = 3$. Wo könnte er verunsichert sein?',
        [
          'Er ist korrekt — das Minus in $a = -1$ wird durch das Minus in der Formel kompensiert.',
          'Der Scheitel müsste bei $x = -3$ sein.',
          'Die Formel gilt nicht für negatives $a$.',
          'Er hätte $a = 1$ verwenden müssen.',
        ],
        0,
        `**Ansatz:** Vorzeichen konsequent anwenden.

**Rechnung:** $a = -1, b = 6$. $x_S = -6/(-2) = 3$.

**Probe:** $y_S = -9 + 18 - 4 = 5$. Maximum bei $(3, 5)$.

**Typischer Fehler:** Vorzeichen-Verwirrung.`,
        [
          '$a$ kann negativ sein.',
          'Parabel öffnet nach unten.',
          'Formel gilt trotzdem.',
        ],
        {
          1: 'Minus/Minus = Plus.',
          2: 'Formel gilt für jedes $a \\neq 0$.',
          3: '$a$ ist die Koeffizient vor $x^2$, hier $-1$.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['pr-scheitel-formel'] },
      ),
      matching(
        '[PRÜFUNG] Ordne jeder Parabel ihren Scheitelpunkt zu.',
        [
          { left: '$y = x^2$',               right: '$(0, 0)$' },
          { left: '$y = x^2 - 4$',           right: '$(0, -4)$' },
          { left: '$y = (x - 3)^2$',         right: '$(3, 0)$' },
          { left: '$y = (x + 1)^2 + 5$',     right: '$(-1, 5)$' },
        ],
        `**Ansatz:** Scheitelform direkt ablesen.

**Rechnung:** $y = (x - h)^2 + k$: Scheitel $(h, k)$.

**Probe:** Standard-Form.

**Typischer Fehler:** Vorzeichen von $h$ verwechseln.`,
        [
          'Scheitelform $y = (x-h)^2 + k$.',
          'Scheitel $(h, k)$.',
          'Vorzeichen beachten.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['pr-scheitel-formel'] },
      ),
    ],
    // [1] Scheitelform
    1: [
      tf(
        '[PRÜFUNG] Die Scheitelform $y = a(x - h)^2 + k$ entsteht durch quadratische Ergänzung aus $y = ax^2 + bx + c$.',
        true,
        `**Ansatz:** Standardumformung.

**Rechnung:** $y = a(x^2 + (b/a)x) + c = a(x + b/(2a))^2 + c - b^2/(4a)$.

**Probe:** Übereinstimmung prüfen.

**Typischer Fehler:** Koeffizient $a$ vergessen.`,
        [
          'Quadratische Ergänzung.',
          'Koeffizient $a$ ausklammern.',
          'Scheitelform herstellen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pr-scheitel-form'] },
      ),
      mc(
        '[PRÜFUNG] Welche Scheitelform hat $y = x^2 - 4x + 7$?',
        ['$y = (x - 2)^2 + 3$', '$y = (x + 2)^2 + 7$', '$y = (x - 4)^2 + 7$', '$y = (x - 2)^2 + 7$'],
        0,
        `**Ansatz:** Quadratische Ergänzung.

**Rechnung:** $x^2 - 4x = (x-2)^2 - 4$. Also $y = (x-2)^2 - 4 + 7 = (x-2)^2 + 3$.

**Probe:** Scheitel $(2, 3)$.

**Typischer Fehler:** $-4$ nicht ausgleichen.`,
        [
          'Halbiere $b = -4$: $h = -2$ (außen: $+2$).',
          'Quadratische Ergänzung.',
          'Konstante anpassen.',
        ],
        {
          1: 'Vorzeichen.',
          2: '$h$ falsch.',
          3: 'Konstante nicht korrigiert.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pr-scheitel-form'] },
      ),
      ni(
        '[PRÜFUNG] Für $y = x^2 + 6x + 5$ ist die Scheitelform $y = (x + 3)^2 + k$. Was ist $k$?',
        -4, 0, '',
        `**Ansatz:** Quadratische Ergänzung.

**Rechnung:** $x^2 + 6x = (x+3)^2 - 9$. $y = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$.

**Probe:** $k = -4$.

**Typischer Fehler:** $+9$ statt $-9$.`,
        [
          '$h = 3$ (Halbe von $6$).',
          '$(x+3)^2 = x^2 + 6x + 9$.',
          'Differenz $c - 9 = -4$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pr-scheitel-form'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling schreibt die Scheitelform von $y = x^2 - 6x + 5$ als $y = (x + 3)^2 - 4$. Wo liegt der Fehler?',
        [
          'Das Vorzeichen: $h$ muss POSITIV sein. Korrekt: $y = (x - 3)^2 - 4$ (Scheitel bei $(3, -4)$).',
          'Die Konstante müsste $+4$ sein.',
          'Alles richtig.',
          'Der Exponent müsste $3$ sein.',
        ],
        0,
        `**Ansatz:** $h$ hat entgegengesetztes Vorzeichen zu $b/2$.

**Rechnung:** $b = -6$, also $h = 3$ (POSITIV).

**Probe:** $y = (x-3)^2 - 4$. Nullstelle: $x = 3 \\pm 2$.

**Typischer Fehler:** $h$-Vorzeichen.`,
        [
          'Vorzeichen von $h$ in $(x - h)^2$.',
          '$b = -6 \\Rightarrow h = +3$.',
          'Kontraintuitiv.',
        ],
        {
          1: 'Konstante stimmt: $-4$.',
          2: 'Zahlentest widerlegt.',
          3: 'Exponent bleibt $2$.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pr-scheitel-form'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte der quadratischen Ergänzung für $y = x^2 + 4x - 3$ in Reihenfolge.',
        [
          'Gruppiere quadratische Terme: $y = (x^2 + 4x) - 3$',
          'Quadratische Ergänzung: $y = (x + 2)^2 - 4 - 3$',
          'Vereinfachen: $y = (x + 2)^2 - 7$',
          'Scheitel ablesen: $(-2, -7)$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch.

**Rechnung:** Scheitel $(-2, -7)$.

**Probe:** $f(-2) = 4 - 8 - 3 = -7$ ✓.

**Typischer Fehler:** Quadratische Ergänzung falsch.`,
        [
          'Gruppieren.',
          'Ergänzen.',
          'Vereinfachen.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['pr-scheitel-form', 'pr-scheitel-formel'] },
      ),
    ],
    // [2] Umkehrfunktion praktisch
    2: [
      tf(
        '[PRÜFUNG] Zur Bestimmung der Umkehrfunktion $f^{-1}$: $y = f(x)$ nach $x$ auflösen, dann Namen tauschen.',
        true,
        `**Ansatz:** Standardverfahren.

**Rechnung:** $y = 3x + 5 \\Rightarrow x = (y-5)/3 \\Rightarrow f^{-1}(x) = (x-5)/3$.

**Probe:** $f(f^{-1}(x)) = x$.

**Typischer Fehler:** Namen nicht tauschen.`,
        [
          'Auflösen + Tauschen.',
          'Standard.',
          'Umkehr-Identität prüfen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pr-umkehr-prakt'] },
      ),
      mc(
        '[PRÜFUNG] Was ist die Umkehrfunktion von $f(x) = 2x - 6$?',
        ['$f^{-1}(x) = (x + 6)/2$', '$f^{-1}(x) = (x - 6)/2$', '$f^{-1}(x) = 2x + 6$', '$f^{-1}(x) = -2x + 6$'],
        0,
        `**Ansatz:** $y = 2x - 6 \\Rightarrow x = (y+6)/2$.

**Rechnung:** $f^{-1}(x) = (x+6)/2$.

**Probe:** $f(f^{-1}(x)) = 2(x+6)/2 - 6 = x + 6 - 6 = x$ ✓.

**Typischer Fehler:** Vorzeichen.`,
        [
          'Schrittweise umkehren.',
          '$-6$ wird $+6$.',
          'Dann durch $2$ teilen.',
        ],
        {
          1: 'Vorzeichen von $6$ falsch.',
          2: '$f$ gespiegelt/skaliert, nicht umgekehrt.',
          3: 'Vorzeichen komplett falsch.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pr-umkehr-prakt'] },
      ),
      ni(
        '[PRÜFUNG] Bestimme $f^{-1}(x)$ für $f(x) = 3x + 9$ und gib $f^{-1}(0)$ an.',
        -3, 0, '',
        `**Ansatz:** $y = 3x + 9 \\Rightarrow x = (y-9)/3 \\Rightarrow f^{-1}(x) = (x-9)/3$.

**Rechnung:** $f^{-1}(0) = -9/3 = -3$.

**Probe:** $f(-3) = -9 + 9 = 0$ ✓.

**Typischer Fehler:** $(x+9)/3$.`,
        [
          '$f^{-1}(x) = (x - 9)/3$.',
          '$f^{-1}(0) = -3$.',
          'Probe bestätigt.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pr-umkehr-prakt'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling ermittelt die Umkehrfunktion von $f(x) = x^2$ auf ganz $\\mathbb{R}$ ohne Einschränkung. Wo liegt das Problem?',
        [
          '$x^2$ ist nicht injektiv auf $\\mathbb{R}$ — Umkehrung erst nach Einschränkung auf $[0, \\infty)$ möglich.',
          'Er hätte $\\pm\\sqrt{y}$ schreiben sollen.',
          'Alles korrekt.',
          'Die Umkehrfunktion ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Bijektivität prüfen.

**Rechnung:** Ohne Einschränkung keine Funktion.

**Probe:** Auf $[0,\\infty)$: $f^{-1}(y) = \\sqrt{y}$.

**Typischer Fehler:** Bijektivität ignorieren.`,
        [
          'Ist $x^2$ injektiv auf $\\mathbb{R}$?',
          'Einschränkung nötig.',
          'Nach Einschränkung umkehrbar.',
        ],
        {
          1: 'Mehrdeutige "Funktion".',
          2: 'Nein, erst nach Einschränkung.',
          3: 'Doch — auf eingeschränktem Bereich.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pr-umkehr-prakt'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Umkehrung von $f(x) = \\dfrac{x - 2}{5}$ in Reihenfolge.',
        [
          'Gleichung: $y = (x - 2)/5$',
          'Mit $5$ multiplizieren: $5y = x - 2$',
          'Nach $x$ auflösen: $x = 5y + 2$',
          'Namen tauschen: $f^{-1}(x) = 5x + 2$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisches Umstellen.

**Rechnung:** $f^{-1}(x) = 5x + 2$.

**Probe:** $f(f^{-1}(x)) = (5x + 2 - 2)/5 = x$ ✓.

**Typischer Fehler:** Schritte auslassen.`,
        [
          'Schrittweise.',
          'Operationen umkehren.',
          'Am Ende Namen tauschen.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pr-umkehr-prakt'] },
      ),
    ],
    // [3] Wärmeausdehnung
    3: [
      tf(
        '[PRÜFUNG] Die Länge eines Metallstabs bei Temperaturänderung folgt $l(T) = l_0(1 + \\alpha \\cdot \\Delta T)$.',
        true,
        `**Ansatz:** Lineare thermische Ausdehnung.

**Rechnung:** $\\Delta l = l_0 \\alpha \\Delta T$.

**Probe:** Standardphysik.

**Typischer Fehler:** $\\alpha$-Einheit falsch.`,
        [
          'Thermische Ausdehnung.',
          'Linear in $T$.',
          '$\\alpha \\Delta T$ dimensionslos.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pr-waermeausdehnung'] },
      ),
      mc(
        '[PRÜFUNG] Ein Stahlstab ($\\alpha = 12 \\cdot 10^{-6} / \\text{K}$) von $l_0 = 1\\,\\text{m}$ wird um $\\Delta T = 100\\,\\text{K}$ erwärmt. Wie viel dehnt er sich aus?',
        ['$1.2\\,\\text{mm}$', '$1.2\\,\\text{cm}$', '$0.12\\,\\text{mm}$', '$12\\,\\text{mm}$'],
        0,
        `**Ansatz:** $\\Delta l = l_0 \\alpha \\Delta T$.

**Rechnung:** $\\Delta l = 1 \\cdot 12 \\cdot 10^{-6} \\cdot 100 = 1.2 \\cdot 10^{-3}\\,\\text{m} = 1.2\\,\\text{mm}$.

**Probe:** Einheiten: $\\text{m} \\cdot 1/\\text{K} \\cdot \\text{K} = \\text{m}$ ✓.

**Typischer Fehler:** Komma verschieben.`,
        [
          'Formel direkt anwenden.',
          'Einheiten prüfen.',
          'In mm umrechnen.',
        ],
        {
          1: '10× zu groß.',
          2: '10× zu klein.',
          3: '10× zu groß.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pr-waermeausdehnung'] },
      ),
      ni(
        '[PRÜFUNG] Ein Kupferstab ($\\alpha = 16 \\cdot 10^{-6}/\\text{K}$) mit $l_0 = 2\\,\\text{m}$ wird um $50\\,\\text{K}$ erwärmt. Berechne $\\Delta l$ in mm.',
        1.6, 0.1, '',
        `**Ansatz:** Formel einsetzen.

**Rechnung:** $\\Delta l = 2 \\cdot 16 \\cdot 10^{-6} \\cdot 50 = 1.6 \\cdot 10^{-3}\\,\\text{m} = 1.6\\,\\text{mm}$.

**Probe:** Einheiten passen.

**Typischer Fehler:** $\\alpha$ falsch einsetzen.`,
        [
          '$\\Delta l = l_0 \\alpha \\Delta T$.',
          '$2 \\cdot 16 \\cdot 10^{-6} \\cdot 50$.',
          'In mm.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pr-waermeausdehnung'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling rechnet $\\alpha \\cdot T$ statt $\\alpha \\cdot \\Delta T$ und erhält falsche Ergebnisse. Wo liegt der Unterschied?',
        [
          'Die Ausdehnung ist PROPORTIONAL ZUR TEMPERATURÄNDERUNG, nicht zur absoluten Temperatur. Referenzzustand nötig.',
          'Kein Unterschied.',
          '$T$ muss in Celsius sein.',
          '$\\alpha$ ändert sich mit $T$.',
        ],
        0,
        `**Ansatz:** $\\Delta l$ bezieht sich auf Referenzlänge.

**Rechnung:** $l(T) = l_0(1 + \\alpha(T - T_0))$ oder $l(T_0 + \\Delta T) = l_0 + l_0 \\alpha \\Delta T$.

**Probe:** Ohne Referenzpunkt keine Aussage.

**Typischer Fehler:** Temperaturdifferenz vs. absolut.`,
        [
          'Referenzzustand nötig.',
          '$\\Delta T = T - T_0$.',
          'Differenz, nicht absolut.',
        ],
        {
          1: 'Großer Unterschied bei hohen $T$.',
          2: 'Einheit egal bei DIFFERENZ.',
          3: 'Ja, aber Näherung linear.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pr-waermeausdehnung'] },
      ),
      ni(
        '[PRÜFUNG] Eine Brücke aus Stahl ($\\alpha = 12 \\cdot 10^{-6}/\\text{K}$) ist im Winter ($-10°\\text{C}$) $100\\,\\text{m}$ lang. Wie lang ist sie bei $+30°\\text{C}$ (in m)?',
        100.048, 0.01, '',
        `**Ansatz:** $\\Delta T = 40\\,\\text{K}$.

**Rechnung:** $\\Delta l = 100 \\cdot 12 \\cdot 10^{-6} \\cdot 40 = 4.8 \\cdot 10^{-2}\\,\\text{m} = 0.048\\,\\text{m}$. $l = 100.048\\,\\text{m}$.

**Probe:** Brückenpläne berücksichtigen Dehnung.

**Typischer Fehler:** $\\Delta T$ falsch.`,
        [
          '$\\Delta T = 30 - (-10) = 40$.',
          'Formel.',
          'Gesamt $l_0 + \\Delta l$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pr-waermeausdehnung'] },
      ),
    ],
    // [4] Abklingen
    4: [
      tf(
        '[PRÜFUNG] Bei radioaktivem Zerfall gilt $N(t) = N_0 e^{-kt}$ mit Zerfallskonstante $k > 0$.',
        true,
        `**Ansatz:** Exponentieller Abfall.

**Rechnung:** $N$ nimmt exponentiell ab.

**Probe:** $N(0) = N_0$, $\\lim_{t \\to \\infty} N(t) = 0$.

**Typischer Fehler:** $k$-Vorzeichen.`,
        [
          'Exponentialfunktion mit negativem Exponenten.',
          '$k > 0$: Abklingen.',
          '$N_0$ Anfangsmenge.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['pr-abklingen'] },
      ),
      mc(
        '[PRÜFUNG] Für $N(t) = N_0 e^{-kt}$ ist die Halbwertszeit $T_{1/2}$:',
        ['$T_{1/2} = \\ln(2)/k$', '$T_{1/2} = k / \\ln(2)$', '$T_{1/2} = 2/k$', '$T_{1/2} = k \\cdot 2$'],
        0,
        `**Ansatz:** $N(T_{1/2}) = N_0/2$.

**Rechnung:** $e^{-kT_{1/2}} = 1/2 \\Rightarrow kT_{1/2} = \\ln 2 \\Rightarrow T_{1/2} = \\ln 2/k$.

**Probe:** Einheit: $1/k$ hat Zeit-Einheit.

**Typischer Fehler:** Zähler/Nenner.`,
        [
          'Halbwert-Bedingung.',
          'Logarithmieren.',
          '$T_{1/2} = \\ln 2 / k$.',
        ],
        {
          1: 'Zähler/Nenner vertauscht.',
          2: 'Falsche Formel.',
          3: 'Unsinn.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['pr-abklingen'] },
      ),
      ni(
        '[PRÜFUNG] Eine Substanz zerfällt mit $k = 0.1/\\text{Jahr}$. Wie lang ist die Halbwertszeit in Jahren (auf 2 Dezimalen)?',
        6.93, 0.1, '',
        `**Ansatz:** $T_{1/2} = \\ln 2 / k$.

**Rechnung:** $T_{1/2} = 0.693/0.1 = 6.93\\,\\text{Jahre}$.

**Probe:** $\\ln 2 \\approx 0.693$.

**Typischer Fehler:** $\\ln 2$ falsch.`,
        [
          '$\\ln 2 \\approx 0.693$.',
          '$T_{1/2} = 0.693/0.1$.',
          '$= 6.93$.',
        ],
        { stage: 'apply-independent', subGoal: 4, uses: ['pr-abklingen'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling schreibt die Zerfallsgleichung als $N(t) = N_0 e^{kt}$ ohne Minus im Exponenten. Wo liegt der Fehler?',
        [
          'Positive $k$ im Exponenten würde WACHSTUM bedeuten, nicht Zerfall. Minus nötig: $e^{-kt}$.',
          'Er hätte $k < 0$ annehmen müssen (was möglich ist).',
          'Alles korrekt.',
          'Das Minus spielt keine Rolle.',
        ],
        0,
        `**Ansatz:** Vorzeichen des Exponenten.

**Rechnung:** $e^{kt}$ mit $k > 0$: $N$ wächst. $e^{-kt}$: $N$ fällt.

**Probe:** Zerfall = Abnahme = Minus.

**Typischer Fehler:** Vorzeichen vergessen.`,
        [
          'Wachstum oder Abnahme?',
          'Vorzeichen entscheidet.',
          'Zerfall = negativer Exponent.',
        ],
        {
          1: 'Konvention: $k > 0$ im Kontext Zerfall.',
          2: 'Vorzeichen fehlt.',
          3: 'Doch, sehr entscheidend.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['pr-abklingen'] },
      ),
      ni(
        '[PRÜFUNG] Nach $20\\,\\text{Jahren}$ sind $25\\%$ einer Substanz übrig. Wie groß ist $k$ (pro Jahr, auf 4 Dezimalen)?',
        0.0693, 0.001, '',
        `**Ansatz:** $0.25 = e^{-k \\cdot 20}$, logarithmieren.

**Rechnung:** $-k \\cdot 20 = \\ln 0.25 = -\\ln 4 = -2\\ln 2$. $k = 2\\ln 2 / 20 = \\ln 2 / 10 \\approx 0.0693$.

**Probe:** $T_{1/2} = \\ln 2 / 0.0693 = 10$. Und 20 Jahre = 2 Halbwertszeiten → $25\\%$ ✓.

**Typischer Fehler:** $\\ln 0.25$ falsch.`,
        [
          'Gleichung $0.25 = e^{-20k}$.',
          'Logarithmieren.',
          '$k = \\ln 4 / 20$.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['pr-abklingen'] },
      ),
    ],
    // [5] Umsatz
    5: [
      tf(
        '[PRÜFUNG] Bei Umsatz $U(x) = x \\cdot p(x)$ liegt das Maximum dort, wo die Grenzkosten $U\'(x) = 0$ sind.',
        true,
        `**Ansatz:** Notwendige Bedingung für Maximum.

**Rechnung:** $U'(x) = 0 \\Rightarrow$ stationärer Punkt.

**Probe:** $U''(x) < 0$ bestätigt Maximum.

**Typischer Fehler:** Minimum mit Maximum verwechseln.`,
        [
          'Ableitung null.',
          'Stationärer Punkt.',
          'Hinreichend: zweite Ableitung negativ.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['pr-umsatz'] },
      ),
      mc(
        '[PRÜFUNG] Gegeben $U(x) = x(10 - x)$. Wo liegt das Maximum?',
        ['$x = 5$', '$x = 10$', '$x = 2$', '$x = 0$'],
        0,
        `**Ansatz:** Ableiten + null setzen.

**Rechnung:** $U(x) = 10x - x^2$. $U'(x) = 10 - 2x = 0 \\Rightarrow x = 5$.

**Probe:** $U(5) = 25$. $U''(5) = -2 < 0$: Maximum.

**Typischer Fehler:** $x = 10$ (wo $U = 0$) statt Maximum.`,
        [
          'Ableiten.',
          '$U\'(x) = 10 - 2x$.',
          'Nullstelle $x = 5$.',
        ],
        {
          1: 'Nullstelle, nicht Maximum.',
          2: 'Nicht optimal.',
          3: 'Randwert $0$, nicht Maximum.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['pr-umsatz'] },
      ),
      ni(
        '[PRÜFUNG] Für $U(x) = x(20 - 2x)$ liegt das Maximum bei welchem $x$?',
        5, 0, '',
        `**Ansatz:** Ableiten.

**Rechnung:** $U(x) = 20x - 2x^2$. $U'(x) = 20 - 4x = 0 \\Rightarrow x = 5$.

**Probe:** $U(5) = 5 \\cdot 10 = 50$.

**Typischer Fehler:** Vorzeichen.`,
        [
          '$U(x) = 20x - 2x^2$.',
          '$U\'(x) = 20 - 4x$.',
          '$x = 5$.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['pr-umsatz'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling setzt $U(x) = 0$ statt $U\'(x) = 0$ und erhält ein falsches Maximum. Wo liegt das Missverständnis?',
        [
          '$U(x) = 0$ liefert NULLSTELLEN (Randwerte, wo Umsatz null ist). Das Maximum ist wo die ABLEITUNG $U\'(x) = 0$ ist.',
          'Er hätte $U\'\'(x)$ setzen müssen.',
          'Er hat recht.',
          'Die Aufgabe ist nicht lösbar.',
        ],
        0,
        `**Ansatz:** Unterscheidung Nullstelle vs. Extrema.

**Rechnung:** Nullstellen: wo Funktion $0$. Maxima: wo Ableitung $0$.

**Probe:** $U(x) = x(10-x)$: Nullstellen bei $x = 0, 10$. Maximum bei $x = 5$.

**Typischer Fehler:** Nullstelle mit Maximum verwechseln.`,
        [
          'Nullstelle ≠ Maximum.',
          'Ableitung null = Extremum.',
          'Konzeptuell unterscheiden.',
        ],
        {
          1: '$U\'\' = 0$ gäbe Wendepunkte.',
          2: 'Fundamentaler Fehler.',
          3: 'Mit der richtigen Methode lösbar.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['pr-umsatz'] },
      ),
      ni(
        '[PRÜFUNG] Der Preis sinkt linear: $p(x) = 100 - 2x$. Berechne das $x$ bei maximalem Umsatz $U(x) = x \\cdot p(x)$.',
        25, 0, '',
        `**Ansatz:** $U(x) = x(100 - 2x) = 100x - 2x^2$. Ableiten.

**Rechnung:** $U'(x) = 100 - 4x = 0 \\Rightarrow x = 25$.

**Probe:** $U(25) = 25 \\cdot 50 = 1250$.

**Typischer Fehler:** Koeffizient falsch.`,
        [
          'Umsatz aufstellen.',
          'Ableiten.',
          '$x = 25$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['pr-umsatz'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-4-3 — Prüfung: Gleichungssysteme & Anwendungen (6 SGs, 30 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-4-3': {
    // [0] LGS-Methoden
    0: [
      matching(
        '[PRÜFUNG] Ordne jeder LGS-Methode ihre Kernidee zu.',
        [
          { left: 'Einsetzungsverfahren',   right: 'Eine Gleichung nach einer Variable auflösen, in andere einsetzen' },
          { left: 'Additionsverfahren',     right: 'Gleichungen so addieren/subtrahieren, dass eine Variable wegfällt' },
          { left: 'Gleichsetzungsverfahren', right: 'Beide nach derselben Variable auflösen, dann gleichsetzen' },
          { left: 'Gauß-Verfahren',         right: 'Systematische Elimination in Matrixform' },
        ],
        `**Ansatz:** Vier gängige Methoden.

**Rechnung:** Alle führen zur gleichen Lösung bei konsistentem LGS.

**Probe:** Standardmethoden.

**Typischer Fehler:** Methoden vermischen.`,
        [
          'Jede Methode hat Kern.',
          'Äquivalent bei konsistentem LGS.',
          'Unterschiedliche Herangehen.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['pr-lgs-methoden'] },
      ),
      mc(
        '[PRÜFUNG] Löse $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$.',
        ['$x = 7, y = 3$', '$x = 3, y = 7$', '$x = 5, y = 5$', '$x = 10, y = 4$'],
        0,
        `**Ansatz:** Addieren: $2x = 14$.

**Rechnung:** $x = 7$. $y = 10 - 7 = 3$.

**Probe:** $7 + 3 = 10$, $7 - 3 = 4$ ✓.

**Typischer Fehler:** Vorzeichen.`,
        [
          'Addieren beide Gleichungen.',
          '$y$ fällt weg.',
          '$x = 7$.',
        ],
        {
          1: 'Variablen vertauscht.',
          2: 'Summe $10$, aber Differenz $0$.',
          3: 'Keine Lösung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['pr-lgs-methoden'] },
      ),
      ni(
        '[PRÜFUNG] Löse $\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}$. Gib $x$ an.',
        3, 0, '',
        `**Ansatz:** Addieren.

**Rechnung:** $3x = 9 \\Rightarrow x = 3$. Dann $y = 3 - 1 = 2$.

**Probe:** $6 + 2 = 8$, $3 - 2 = 1$ ✓.

**Typischer Fehler:** Koeffizient falsch.`,
        [
          'Addieren.',
          '$3x = 9$.',
          '$x = 3$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-lgs-methoden'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling addiert die Gleichungen $\\begin{cases} x + y = 5 \\\\ x + y = 3 \\end{cases}$ und erhält $2x + 2y = 8$, daraus $x + y = 4$. Wo liegt das Problem?',
        [
          'Das System ist WIDERSPRÜCHLICH ($5 \\neq 3$) — keine Lösung existiert.',
          'Er hätte subtrahieren müssen.',
          'Alles korrekt.',
          'Eine der Zahlen ist falsch.',
        ],
        0,
        `**Ansatz:** Gleichungen widersprechen sich.

**Rechnung:** $x + y$ kann nicht gleichzeitig $5$ und $3$ sein.

**Probe:** Keine Lösung.

**Typischer Fehler:** Widersprüchlichkeit übersehen.`,
        [
          'Sind Gleichungen konsistent?',
          'Parallele Geraden.',
          'Keine Schnittpunkte.',
        ],
        {
          1: 'Subtraktion würde $0 = 2$ zeigen — Widerspruch.',
          2: 'Keine Lösung.',
          3: 'Beide Zahlen sind legitim, aber widersprüchlich.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['pr-lgs-methoden'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte des Einsetzungsverfahrens für $\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$ in Reihenfolge.',
        [
          'Auflösung der ersten: $y = 2x + 1$',
          'Einsetzen in zweite: $3x + 2x + 1 = 11$',
          'Nach $x$ auflösen: $5x = 10 \\Rightarrow x = 2$',
          'Rückeinsetzen: $y = 2 \\cdot 2 + 1 = 5$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Einsetzungsverfahren Schritt für Schritt.

**Rechnung:** $x = 2, y = 5$.

**Probe:** $5 = 4 + 1$ ✓, $6 + 5 = 11$ ✓.

**Typischer Fehler:** Einsetzen falsch.`,
        [
          'Eine nach Variable auflösen.',
          'Einsetzen.',
          'Rückwärts berechnen.',
        ],
        { stage: 'transfer', subGoal: 0, uses: ['pr-lgs-methoden'] },
      ),
    ],
    // [1] Betragsgleichung
    1: [
      tf(
        '[PRÜFUNG] Zur Lösung von $|f(x)| = c$ (mit $c > 0$) macht man Fallunterscheidung: $f(x) = c$ oder $f(x) = -c$.',
        true,
        `**Ansatz:** Betrag eliminieren über Fallunterscheidung.

**Rechnung:** $|y| = c \\iff y = \\pm c$.

**Probe:** $|x - 3| = 2$: $x = 5$ oder $x = 1$.

**Typischer Fehler:** Nur einen Fall betrachten.`,
        [
          'Betrag = zwei Fälle.',
          'Plus und minus.',
          'Beide prüfen.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pr-betrag-fall'] },
      ),
      mc(
        '[PRÜFUNG] Löse $|2x - 4| = 6$.',
        ['$x = 5$ oder $x = -1$', '$x = 5$', '$x = -1$', '$x = 6$'],
        0,
        `**Ansatz:** $2x - 4 = 6$ oder $2x - 4 = -6$.

**Rechnung:** Fall 1: $x = 5$. Fall 2: $x = -1$.

**Probe:** $|10 - 4| = 6$ ✓. $|-2 - 4| = 6$ ✓.

**Typischer Fehler:** Nur einen Fall.`,
        [
          'Zwei Fälle.',
          '$2x - 4 = \\pm 6$.',
          'Beide prüfen.',
        ],
        {
          1: 'Nur positiver Fall.',
          2: 'Nur negativer Fall.',
          3: 'Irrelevant.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pr-betrag-fall'] },
      ),
      ni(
        '[PRÜFUNG] Löse $|x - 3| = 5$. Gib die KLEINERE Lösung an.',
        -2, 0, '',
        `**Ansatz:** Zwei Fälle.

**Rechnung:** $x - 3 = 5 \\Rightarrow x = 8$. $x - 3 = -5 \\Rightarrow x = -2$.

**Probe:** $|-5| = 5$ ✓.

**Typischer Fehler:** Vorzeichen.`,
        [
          'Zwei Fälle.',
          'Kleinere wählen.',
          '$x = -2$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pr-betrag-fall'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling löst $|x + 1| = 4$ als $x = 3$ und gibt keine zweite Lösung. Wo liegt der Fehler?',
        [
          'Er hat nur den positiven Fall betrachtet. Zweite Lösung: $x + 1 = -4 \\Rightarrow x = -5$.',
          'Die Lösung ist korrekt.',
          'Nur negativer Fall.',
          'Keine Lösung.',
        ],
        0,
        `**Ansatz:** Beide Fälle prüfen.

**Rechnung:** $x = 3$ und $x = -5$.

**Probe:** $|4| = 4$ ✓, $|-4| = 4$ ✓.

**Typischer Fehler:** Fallunterscheidung.`,
        [
          'Wie viele Fälle?',
          'Plus UND minus.',
          'Beide Lösungen.',
        ],
        {
          1: 'Nur eine Lösung — unvollständig.',
          2: 'Positiver Fall ergab $x = 3$, nicht negativer.',
          3: 'Doch — zwei Lösungen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pr-betrag-fall'] },
      ),
      sorting(
        '[PRÜFUNG] Bringe die Schritte zur Lösung von $|3x - 6| = 9$ in Reihenfolge.',
        [
          'Fall 1: $3x - 6 = 9 \\Rightarrow x = 5$',
          'Fall 2: $3x - 6 = -9 \\Rightarrow x = -1$',
          'Probe Fall 1: $|9| = 9$ ✓',
          'Probe Fall 2: $|-9| = 9$ ✓',
          'Lösungen: $x \\in \\{-1, 5\\}$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Systematisch.

**Rechnung:** Zwei Lösungen.

**Probe:** Beide bestätigt.

**Typischer Fehler:** Probe weglassen.`,
        [
          'Zwei Fälle.',
          'Beide proben.',
          'Lösungsmenge.',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['pr-betrag-fall'] },
      ),
    ],
    // [2] pH-Wert
    2: [
      tf(
        '[PRÜFUNG] Der pH-Wert ist definiert als $\\text{pH} = -\\log_{10}([\\text{H}^+]/c_0)$ mit $c_0 = 1\\,\\text{mol/L}$.',
        true,
        `**Ansatz:** Standard-Definition.

**Rechnung:** Logarithmische Skala.

**Probe:** $[\\text{H}^+] = 10^{-7}$: pH $= 7$ (neutral).

**Typischer Fehler:** Minus vergessen.`,
        [
          'Logarithmus mit Minus.',
          'Referenz $c_0 = 1\\,\\text{mol/L}$.',
          'Dimensionslos.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['pr-pH'] },
      ),
      mc(
        '[PRÜFUNG] Welchen pH-Wert hat eine Lösung mit $[\\text{H}^+] = 10^{-3}\\,\\text{mol/L}$?',
        ['$3$', '$-3$', '$10^{-3}$', '$7$'],
        0,
        `**Ansatz:** $\\text{pH} = -\\log_{10}(10^{-3}) = 3$.

**Rechnung:** Minus hebt Minus auf.

**Probe:** $\\text{pH} < 7$: sauer.

**Typischer Fehler:** Minus vergessen.`,
        [
          '$-\\log_{10}(10^{-3})$.',
          '$= -(-3) = 3$.',
          'Saure Lösung.',
        ],
        {
          1: 'Minus doppelt.',
          2: 'Nicht pH.',
          3: 'Neutral wäre $10^{-7}$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['pr-pH'] },
      ),
      ni(
        '[PRÜFUNG] Welche $\\text{H}^+$-Konzentration (mol/L, als Zehnerpotenz-Exponent) hat pH 5?',
        -5, 0, '',
        `**Ansatz:** pH $= 5 \\Rightarrow [\\text{H}^+] = 10^{-5}\\,\\text{mol/L}$.

**Rechnung:** Exponent $-5$.

**Probe:** $-\\log_{10}(10^{-5}) = 5$ ✓.

**Typischer Fehler:** Vorzeichen.`,
        [
          'Umkehr: $[\\text{H}^+] = 10^{-\\text{pH}}$.',
          'pH 5 → Exponent $-5$.',
          'Minus beachten.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['pr-pH'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling rechnet für eine Lösung mit $[\\text{H}^+] = 10^{-2}\\,\\text{mol/L}$ einen pH von $-2$. Wo liegt der Fehler?',
        [
          'Das Minuszeichen in der pH-Definition wurde ignoriert. Korrekt: $\\text{pH} = -(-2) = 2$.',
          'Er hätte $+2$ schreiben müssen.',
          'Alles korrekt.',
          'pH kann nicht negativ sein.',
        ],
        0,
        `**Ansatz:** Minus in der Formel.

**Rechnung:** $-\\log_{10}(10^{-2}) = -(-2) = 2$.

**Probe:** Saure Lösung, pH $2 < 7$.

**Typischer Fehler:** Minus weglassen.`,
        [
          'Minus in der Formel.',
          'Doppelt negativ = positiv.',
          'pH ist positiv bei verdünnten.',
        ],
        {
          1: 'Beides stimmt jetzt.',
          2: 'Beide falsch.',
          3: 'Sehr stark saure Lösungen können pH $< 0$ haben.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['pr-pH'] },
      ),
      ni(
        '[PRÜFUNG] Zwei Säuren: Säure A mit pH 3, Säure B mit pH 5. Wievielmal größer ist $[\\text{H}^+]$ in A gegenüber B?',
        100, 0, '',
        `**Ansatz:** $[\\text{H}^+]_A = 10^{-3}$, $[\\text{H}^+]_B = 10^{-5}$.

**Rechnung:** Verhältnis $10^{-3}/10^{-5} = 10^2 = 100$.

**Probe:** 2 pH-Einheiten Unterschied = Faktor 100.

**Typischer Fehler:** Additionslogik.`,
        [
          '2 pH-Einheiten.',
          'Jede Einheit Faktor 10.',
          '$10^2 = 100$.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['pr-pH'] },
      ),
    ],
    // [3] dB-Skala
    3: [
      tf(
        '[PRÜFUNG] Für Leistungs-Verhältnisse gilt $L = 10 \\log_{10}(P/P_0)$ in dB.',
        true,
        `**Ansatz:** Standarddefinition.

**Rechnung:** Leistungsdifferenz logarithmisch.

**Probe:** $P/P_0 = 10$: $L = 10$ dB.

**Typischer Fehler:** $20$ statt $10$ bei Leistung.`,
        [
          '$10 \\log_{10}$ bei Leistung.',
          'Verhältnis.',
          'Referenz $P_0$.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['pr-dB'] },
      ),
      mc(
        '[PRÜFUNG] Eine Leistung verdoppelt sich von $P_0$ auf $2 P_0$. Wie viele dB entspricht das?',
        ['$\\approx 3$ dB', '$10$ dB', '$6$ dB', '$20$ dB'],
        0,
        `**Ansatz:** $L = 10 \\log_{10}(2) \\approx 3.01$.

**Rechnung:** Merkregel: Verdopplung = $\\approx 3$ dB.

**Probe:** $\\log_{10}(2) \\approx 0.301$.

**Typischer Fehler:** Faktor $20$ für Leistung.`,
        [
          '$10 \\log_{10}(2)$.',
          '$\\approx 3$ dB.',
          'Merkregel.',
        ],
        {
          1: 'Das wäre Faktor 10.',
          2: '6 dB ist Faktor 4 bei Leistung.',
          3: 'Das wäre Faktor 100.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['pr-dB'] },
      ),
      ni(
        '[PRÜFUNG] Ein Signal mit Verhältnis $P/P_0 = 1000$ entspricht wie vielen dB?',
        30, 0, '',
        `**Ansatz:** $L = 10 \\log_{10}(1000) = 10 \\cdot 3 = 30$.

**Rechnung:** $\\log_{10}(10^3) = 3$.

**Probe:** 30 dB.

**Typischer Fehler:** $100$ oder $3$.`,
        [
          'Basis-Regel: $\\log_{10}(10^3) = 3$.',
          'Mal 10 für dB.',
          '$= 30$.',
        ],
        { stage: 'apply-independent', subGoal: 3, uses: ['pr-dB'] },
      ),
      mc(
        '[PRÜFUNG] Ein Schüler berechnet für $P/P_0 = 100$ einen Wert von $100$ dB. Wo liegt der Fehler?',
        [
          'Die dB-Skala ist logarithmisch: $L = 10 \\log_{10}(100) = 10 \\cdot 2 = 20$ dB, nicht $100$.',
          'Er hätte Faktor 20 nehmen sollen.',
          'Korrekt.',
          'dB ist linear.',
        ],
        0,
        `**Ansatz:** Logarithmische Skala.

**Rechnung:** $L = 10 \\cdot \\log_{10}(100) = 20$ dB.

**Probe:** Merkregel: Faktor 10 = 10 dB, Faktor 100 = 20 dB.

**Typischer Fehler:** Verhältnis direkt als dB.`,
        [
          'dB ist logarithmisch.',
          'Faktor 10 → 10 dB.',
          'Faktor 100 → 20 dB.',
        ],
        {
          1: 'Faktor 20 wäre bei Amplitude.',
          2: 'dB ist nicht das Verhältnis direkt.',
          3: 'dB ist logarithmisch.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['pr-dB'] },
      ),
      ni(
        '[PRÜFUNG] Ein Verstärker verstärkt die Spannung um Faktor 100. Wie viel dB entspricht das (Amplitude → $20 \\log$)?',
        40, 0, '',
        `**Ansatz:** Für Amplituden-Verhältnis: $L = 20 \\log_{10}(U/U_0)$.

**Rechnung:** $20 \\log_{10}(100) = 20 \\cdot 2 = 40$ dB.

**Probe:** Amplituden-Faktor 100 = 40 dB.

**Typischer Fehler:** $10$ statt $20$.`,
        [
          'Amplitude: Faktor 20.',
          '$\\log_{10}(100) = 2$.',
          '$20 \\cdot 2 = 40$.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['pr-dB'] },
      ),
    ],
    // [4] LGS-Fälle
    4: [
      matching(
        '[PRÜFUNG] Ordne jedem LGS-Fall seine Interpretation zu.',
        [
          { left: 'Eindeutige Lösung',      right: 'Zwei Geraden schneiden sich in einem Punkt' },
          { left: 'Keine Lösung',            right: 'Parallele Geraden' },
          { left: 'Unendlich viele Lösungen', right: 'Identische Geraden (dieselbe Gleichung)' },
          { left: 'Widerspruch',             right: 'Gleichungen widersprechen sich' },
        ],
        `**Ansatz:** Geometrische Interpretation.

**Rechnung:** Drei Fälle.

**Probe:** Standard LGS-Theorie.

**Typischer Fehler:** Fälle verwechseln.`,
        [
          'Geometrie: Geraden.',
          'Schnitt, parallel, identisch.',
          'Drei Möglichkeiten.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['pr-lgs-faelle'] },
      ),
      mc(
        '[PRÜFUNG] Wann hat das LGS $\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$ unendlich viele Lösungen?',
        [
          'Wenn beide Gleichungen Vielfache voneinander sind (inkl. rechte Seite)',
          'Wenn $a = d$',
          'Wenn $b = e$',
          'Nie',
        ],
        0,
        `**Ansatz:** Identität ist nötig (auch Konstante).

**Rechnung:** Gleichungen müssen komplett proportional sein.

**Probe:** $x + y = 2$ und $2x + 2y = 4$: unendlich.

**Typischer Fehler:** Nur Koeffizienten prüfen.`,
        [
          'Gleichungen identisch.',
          'Inklusive Konstante.',
          'Proportionalität.',
        ],
        {
          1: 'Nicht ausreichend.',
          2: 'Nicht ausreichend.',
          3: 'Doch — bei proportionalen Geraden.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['pr-lgs-faelle'] },
      ),
      mc(
        '[PRÜFUNG] Das System $\\begin{cases} 2x + 3y = 6 \\\\ 4x + 6y = 12 \\end{cases}$ hat:',
        ['Unendlich viele Lösungen', 'Genau eine Lösung', 'Keine Lösung', 'Zwei Lösungen'],
        0,
        `**Ansatz:** Zweite Gleichung = $2 \\cdot$ erste. Komplett proportional.

**Rechnung:** Identische Geraden.

**Probe:** $4x + 6y = 12 \\Leftrightarrow 2x + 3y = 6$.

**Typischer Fehler:** Keine Lösung annehmen.`,
        [
          'Gleichung 2 = 2 · Gleichung 1.',
          'Identisch.',
          'Unendlich.',
        ],
        {
          1: 'Zwei identische Geraden haben keine eindeutige.',
          2: 'Doch — aber alle Lösungen.',
          3: 'Geraden nicht isoliert.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['pr-lgs-faelle'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling erhält beim Lösen eines LGS die Zeile $0 = 5$. Was bedeutet das?',
        [
          'Das System hat KEINE Lösung — die Gleichungen widersprechen sich.',
          'Die Lösung ist $x = 0, y = 5$.',
          'Er hat sich verrechnet.',
          'Unendlich viele Lösungen.',
        ],
        0,
        `**Ansatz:** Widerspruch = keine Lösung.

**Rechnung:** $0 = 5$ ist unmöglich.

**Probe:** Parallele Geraden.

**Typischer Fehler:** Als Lösung interpretieren.`,
        [
          'Wann $0 = c$?',
          'Bei Widerspruch.',
          'Keine Lösung.',
        ],
        {
          1: 'Das ergibt keine Koordinaten.',
          2: 'Nicht zwingend.',
          3: 'Das wäre $0 = 0$.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['pr-lgs-faelle'] },
      ),
      matching(
        '[PRÜFUNG] Ordne jedem LGS den Lösungstyp zu.',
        [
          { left: '$x + y = 3, x - y = 1$',        right: 'Eindeutig ($x = 2, y = 1$)' },
          { left: '$x + y = 3, 2x + 2y = 6$',       right: 'Unendlich viele' },
          { left: '$x + y = 3, x + y = 5$',         right: 'Keine Lösung' },
          { left: '$2x + 3y = 7, 2x + 3y = 7$',     right: 'Unendlich viele (identisch)' },
        ],
        `**Ansatz:** Typ erkennen.

**Rechnung:** Abhängigkeit prüfen.

**Probe:** Proportionalität, Konsistenz.

**Typischer Fehler:** Typen vermischen.`,
        [
          'Konstante prüfen.',
          'Proportionalität.',
          'Widerspruch erkennen.',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['pr-lgs-faelle'] },
      ),
    ],
    // [5] Technik-LGS
    5: [
      matching(
        '[PRÜFUNG] Ordne jeder technischen Situation die LGS-Anwendung zu.',
        [
          { left: 'Kirchhoffsche Maschenregel',  right: 'LGS aus Spannungs-Schleifen' },
          { left: 'Biegespannung (Balken)',      right: 'LGS aus Gleichgewichtsbedingungen' },
          { left: 'Mischrechnung',               right: 'LGS aus Mengen-/Konzentrations-Bilanzen' },
          { left: 'Statik (Lager)',              right: 'LGS aus Kraft-/Momentengleichgewicht' },
        ],
        `**Ansatz:** Technik führt auf LGS.

**Rechnung:** Verschiedene Anwendungsfelder.

**Probe:** Standardvorgehen.

**Typischer Fehler:** Falsche Gleichungen aufstellen.`,
        [
          'Physikalische Bilanzen.',
          'Gleichgewichtsbedingungen.',
          'LGS aufstellen.',
        ],
        { stage: 'recognize', subGoal: 5, uses: ['pr-technik-lgs'] },
      ),
      mc(
        '[PRÜFUNG] In einer Schaltung gilt nach Maschenregel $I_1 + I_2 = 3$ und $2I_1 - I_2 = 0$. Wie groß ist $I_1$?',
        ['$1$ A', '$2$ A', '$3$ A', '$0$ A'],
        0,
        `**Ansatz:** LGS lösen.

**Rechnung:** Addieren: $3I_1 = 3 \\Rightarrow I_1 = 1$. $I_2 = 2$.

**Probe:** $1 + 2 = 3$ ✓, $2 - 2 = 0$ ✓.

**Typischer Fehler:** Vorzeichen.`,
        [
          'Addieren oder einsetzen.',
          '$I_1 = 1$.',
          'Probe in beiden.',
        ],
        {
          1: 'Das ist $I_2$.',
          2: 'Summe.',
          3: 'Keine Lösung.',
        },
        { stage: 'apply-guided', subGoal: 5, uses: ['pr-technik-lgs'] },
      ),
      ni(
        '[PRÜFUNG] Zwei Sorten Kaffee werden gemischt: Sorte A mit $10\\,€/\\text{kg}$, Sorte B mit $15\\,€/\\text{kg}$. Gesamt $10\\,\\text{kg}$ zu $12\\,€/\\text{kg}$. Wie viel kg Sorte A?',
        6, 0, '',
        `**Ansatz:** LGS: $A + B = 10$, $10A + 15B = 120$.

**Rechnung:** Aus 1: $B = 10 - A$. In 2: $10A + 15(10 - A) = 120 \\Rightarrow 10A + 150 - 15A = 120 \\Rightarrow -5A = -30 \\Rightarrow A = 6$.

**Probe:** $6 \\text{kg} \\cdot 10 + 4 \\text{kg} \\cdot 15 = 60 + 60 = 120$ ✓.

**Typischer Fehler:** Gleichung falsch aufstellen.`,
        [
          'Mengen + Gesamtwert.',
          'Zwei Gleichungen.',
          '$A = 6$.',
        ],
        { stage: 'apply-independent', subGoal: 5, uses: ['pr-technik-lgs'] },
      ),
      mc(
        '[PRÜFUNG] Ein Prüfling stellt für ein Balken-LGS nur die Kraftbilanz auf, nicht die Momentenbilanz. Wo liegt das Problem?',
        [
          'Ein Balken mit zwei Lagern braucht BEIDE Bilanzen — sonst System unterbestimmt.',
          'Nur Kraftbilanz reicht.',
          'Nur Momentenbilanz reicht.',
          'Keine Bilanz nötig.',
        ],
        0,
        `**Ansatz:** Statik braucht beide Bilanzen.

**Rechnung:** Bei 2D: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$.

**Probe:** Drei Gleichungen für drei Unbekannte.

**Typischer Fehler:** Bilanz weglassen.`,
        [
          'Gleichgewichtsbedingungen.',
          'Alle drei (bei 2D).',
          'Vollständiges System.',
        ],
        {
          1: 'Unterbestimmt.',
          2: 'Ebenfalls unterbestimmt.',
          3: 'Statik braucht Bilanzen.',
        },
        { stage: 'error-analysis', subGoal: 5, uses: ['pr-technik-lgs'] },
      ),
      ni(
        '[PRÜFUNG] Ein Balken von $4\\,\\text{m}$ Länge mit Last $200\\,\\text{N}$ in der Mitte. Lagerkraft an Punkt A (linkes Lager) in N?',
        100, 0, '',
        `**Ansatz:** Symmetrie: $A = B = F/2$.

**Rechnung:** $A = 100\\,\\text{N}$, $B = 100\\,\\text{N}$.

**Probe:** $A + B = 200 = F$ ✓.

**Typischer Fehler:** Moment falsch.`,
        [
          'Symmetrie bei mittiger Last.',
          'Beide Lager gleich belastet.',
          '$100\\,\\text{N}$.',
        ],
        { stage: 'transfer', subGoal: 5, uses: ['pr-technik-lgs'] },
      ),
    ],
  },

}

