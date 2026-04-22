// ═══════════════════════════════════════════════════════════════════════════
// Algebra — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Struktur:  { [lessonId]: [aufgabeZuSubGoal[0], aufgabeZuSubGoal[1], …] }
// Index im Array == Index in `lesson.subGoals` der Lesson.
// Die Pipeline (`goalTaskExercises` in src/content/index.js) prüft, dass die
// Array-Länge exakt `lesson.subGoals.length` entspricht und wirft sonst.
//
// Qualitätskontrakt pro Aufgabe (aus dem Memory `content_authoring.md`):
//   - Sub-Goal-Label wörtlich in der Frage zitiert
//   - 4-Block-Erklärung: Ansatz / Rechnung / Probe / Typischer Fehler
//   - ≥ 3 Hints, gestaffelt (nicht alle dieselbe Info)
//   - MC mit ≥ 3 Optionen: `wrongAnswerExplanations` für JEDEN falschen Index
//   - Typen-Rotation pro Lesson (mc/ni/tf/matching/sorting)
//   - Prüfungs-Units (alg-4-*): `[PRÜFUNG] `-Prefix in Frage/Statement
//
// Fortschritt siehe `src/content/subgoal_tasks/PROGRESS.md`.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching } from './_helpers'

export const algebraSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // Unit 0: Rechnen & Brüche (Vorkurs-Einstieg)
  // ───────────────────────────────────────────────────────────────────────

  // alg-0-1 — Grundrechnen, Klammern & Vorrang  (4 subGoals)
  // Typen-Rotation: mc → ni → tf → matching
  'alg-0-1': [
    // [0] Vorrangregel Punkt-vor-Strich
    mc(
      'Sub-Goal "Vorrangregel Punkt-vor-Strich bei gemischten Termen": Berechne $5 - 2 \\cdot 3 + 4$.',
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
    ),
    // [1] Minuszeichen vor Klammer auf alle Summanden
    ni(
      'Sub-Goal "Minuszeichen vor Klammer auf alle Summanden anwenden": Berechne $7 - (4 - 9)$.',
      12, 0, '',
      `**Ansatz:** Das Minus vor einer Klammer wirkt wie ein Faktor $-1$ und kippt **jedes** Vorzeichen in der Klammer.

**Rechnung:** $7 - (4 - 9) = 7 - 4 + 9 = 12$. Alternativ zuerst Klammer: $4-9 = -5$, dann $7 - (-5) = 7 + 5 = 12$.

**Probe:** Einsetzen in $a - (b - c) = a - b + c$ mit $a=7$, $b=4$, $c=9$ gibt $7 - 4 + 9 = 12$. ✓

**Typischer Fehler:** Minus nur auf den ersten Summanden anwenden: $7 - 4 - 9 = -6$. Das vergisst den Vorzeichenwechsel beim zweiten Summanden.`,
      [
        'Was passiert mit **jedem** Vorzeichen in der Klammer, wenn ein Minus davor steht?',
        'Alternativ die Klammer zuerst ausrechnen — was ergibt $4-9$?',
        'Achte darauf: auch die $-9$ in der Klammer wird zu $+9$.',
      ],
    ),
    // [2] Doppel-Minus aufgelöst
    tf(
      'Sub-Goal "Doppel-Minus aufgelöst: $(-a)(-b) = +ab$": Der Ausdruck $-(-3) \\cdot (-4)$ ist gleich $+12$.',
      false,
      `**Ansatz:** Vorzeichen einzeln auswerten: jedes Minus entspricht einem Faktor $-1$.

**Rechnung:** $-(-3) = +3$; dann $(+3) \\cdot (-4) = -12$. Gesamtergebnis: $-12$, **nicht** $+12$.

**Probe:** Drei Minuszeichen insgesamt ($-, -, -$) bedeuten Vorzeichen $(-1)^3 = -1$. Also negativ. ✓

**Typischer Fehler:** Pauschal "zwei Minus geben Plus, also positiv" — hier sind es aber **drei** Minuszeichen, und ungerade Anzahl Minuszeichen bleibt negativ.`,
      [
        'Zähle die Minuszeichen — gerade oder ungerade?',
        '$(-1) \\cdot (-1) \\cdot (-1) = ?$',
        'Nur zwei Minus heben sich auf; drei nicht.',
      ],
    ),
    // [3] Klammerschachtelung von innen nach außen
    matching(
      'Sub-Goal "Klammerschachtelung von innen nach außen abarbeiten": Ordne jedem geschachtelten Ausdruck sein Ergebnis zu.',
      [
        { left: '$2 \\cdot [3 + (4-1)]$',              right: '$12$' },
        { left: '$-\\{5 - [2 + (1-4)]\\}$',            right: '$-6$' },
        { left: '$[(2+3) \\cdot 2] - 4$',               right: '$6$' },
        { left: '$10 - [2 \\cdot (1 + 2)]$',            right: '$4$' },
      ],
      `**Ansatz:** Geschachtelte Klammern **von innen nach außen** abarbeiten — erst runde Klammer, dann eckige, dann geschweifte.

**Rechnung:**
· $2\\cdot[3+(4-1)] = 2\\cdot[3+3] = 2\\cdot 6 = 12$
· $-\\{5-[2+(1-4)]\\} = -\\{5-[2-3]\\} = -\\{5-(-1)\\} = -\\{6\\} = -6$
· $[(2+3)\\cdot 2]-4 = [5\\cdot 2]-4 = 10-4 = 6$
· $10-[2\\cdot(1+2)] = 10-[2\\cdot 3] = 10-6 = 4$

**Probe:** In jedem Beispiel die innerste Klammer zuerst zu Zahl machen — dann nur noch eine Rechenebene übrig.

**Typischer Fehler:** Außen anfangen: $2 \\cdot [3 + 4 - 1]$ als $2 \\cdot 3 + 4 - 1 = 9$ rechnen. Die eckige Klammer ist aber ein **Block**, der als Ganzes mit $2$ multipliziert wird.`,
      [
        'Welche Klammerart rechnest du zuerst?',
        'Innerste runde Klammer → eckige → geschweifte.',
        'Jede fertig ausgewertete Klammer wird zur Zahl, dann weiter außen.',
      ],
    ),
  ],

  // Weitere Lessons folgen — siehe PROGRESS.md.
  // Aktuell fehlen noch 17 Lessons / 86 Sub-Goals (alg-0-2 … alg-4-3).
}
