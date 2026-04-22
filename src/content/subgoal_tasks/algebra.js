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
// Fortschritt siehe `STATUS.md` im Wurzelverzeichnis.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

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

  // alg-0-2 — Bruchrechnen sicher  (4 subGoals)
  // Typen-Rotation: ni → mc → tf → matching
  'alg-0-2': [
    // [0] Hauptnenner bei ungleichnamigen Brüchen (kgV)
    ni(
      'Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": Was ist der Hauptnenner (kgV) von $\\dfrac{5}{12}$ und $\\dfrac{7}{18}$?',
      36, 0, '',
      `**Ansatz:** Der Hauptnenner ist das **kleinste gemeinsame Vielfache (kgV)** der Nenner. Das kgV berechnet man aus den Primfaktorzerlegungen: jede Primzahl mit ihrem **höchsten** Exponenten übernehmen.

**Rechnung:** $12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$. Höchste Exponenten: $2^2$ und $3^2$. Also $\\text{kgV}(12,18) = 4 \\cdot 9 = 36$.

**Probe:** $36 / 12 = 3$ (ganzzahlig) und $36 / 18 = 2$ (ganzzahlig). ✓

**Typischer Fehler:** Einfach die beiden Zahlen multiplizieren ($12 \\cdot 18 = 216$). Das funktioniert, produziert aber unnötig große Zahlen und erschwert das Kürzen.`,
      [
        'Zerlege beide Nenner in Primfaktoren.',
        'Nimm von jeder Primzahl den **höchsten** Exponenten, der irgendwo auftritt.',
        'Das Produkt dieser Primpotenzen ist das kgV (und der Hauptnenner).',
      ],
    ),
    // [1] Division durch Bruch = Multiplikation mit Kehrwert
    mc(
      'Sub-Goal "Division durch Bruch als Multiplikation mit Kehrwert": Berechne $\\dfrac{3}{4} : \\dfrac{5}{8}$ und vereinfache vollständig.',
      ['$\\dfrac{6}{5}$', '$\\dfrac{15}{32}$', '$\\dfrac{3}{10}$', '$\\dfrac{24}{40}$'],
      0,
      `**Ansatz:** Division durch einen Bruch heißt Multiplikation mit dem **Kehrwert** des zweiten Bruchs. Zähler und Nenner des Divisors werden also getauscht.

**Rechnung:** $\\dfrac{3}{4} : \\dfrac{5}{8} = \\dfrac{3}{4} \\cdot \\dfrac{8}{5} = \\dfrac{3 \\cdot 8}{4 \\cdot 5} = \\dfrac{24}{20} = \\dfrac{6}{5}$.

**Probe:** Gegenrechnung $\\dfrac{6}{5} \\cdot \\dfrac{5}{8} = \\dfrac{30}{40} = \\dfrac{3}{4}$. ✓

**Typischer Fehler:** Zähler und Nenner einzeln dividieren ($\\dfrac{3:5}{4:8} = \\dfrac{0{,}6}{0{,}5}$). Diese Regel gilt **nicht** für Brüche — immer mit Kehrwert multiplizieren.`,
      [
        'Statt zu dividieren: multipliziere mit dem Kehrwert des zweiten Bruchs.',
        'Kürze vor dem Multiplizieren, wenn möglich — hier kürzen $4$ und $8$ zu $1$ und $2$.',
        'Das Endergebnis immer vollständig kürzen (hier mit ggT $4$).',
      ],
      {
        1: 'Das ist das Ergebnis von $\\dfrac{3}{4} \\cdot \\dfrac{5}{8}$, also einer **Multiplikation** statt Division. Der Kehrwert wurde vergessen.',
        2: 'Hier wurde fälschlich Zähler durch Zähler und Nenner durch Nenner geteilt ($3/5 \\cdot 4/8 \\ne $ korrekt). Diese Regel gibt es bei Brüchen nicht.',
        3: '$\\dfrac{24}{40}$ ist richtig in Zwischenform, aber **nicht vollständig gekürzt** — ggT$=8$ gibt $\\dfrac{3}{5}$, jedoch ist der richtige Zwischenwert $\\dfrac{24}{20}$, nicht $\\dfrac{24}{40}$.',
      },
    ),
    // [2] Doppelbrüche auflösen
    tf(
      'Sub-Goal "Doppelbrüche auflösen": Der Doppelbruch $\\dfrac{\\;\\tfrac{2}{3}\\;}{\\;\\tfrac{4}{9}\\;}$ ist gleich $\\dfrac{3}{2}$.',
      true,
      `**Ansatz:** Ein Doppelbruch ist eine Division zweier Brüche: $\\dfrac{\\,a/b\\,}{\\,c/d\\,} = \\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} = \\dfrac{a \\cdot d}{b \\cdot c}$.

**Rechnung:** $\\dfrac{2/3}{4/9} = \\dfrac{2}{3} \\cdot \\dfrac{9}{4} = \\dfrac{18}{12} = \\dfrac{3}{2}$.

**Probe:** $\\dfrac{3}{2} \\cdot \\dfrac{4}{9} = \\dfrac{12}{18} = \\dfrac{2}{3}$ — stimmt mit dem Zähler überein. ✓

**Typischer Fehler:** Zähler und Nenner "kürzen" wie bei einem einfachen Bruch ($2 / 4 = 1/2$, $3 / 9 = 1/3 \\Rightarrow 1/2 : 1/3 = 3/2$). Das gibt hier zufällig das richtige Ergebnis, ist aber kein tragfähiges Schema — lieber immer über Kehrwert gehen.`,
      [
        'Doppelbruch = Division. Umschreiben als $\\dfrac{a}{b} : \\dfrac{c}{d}$.',
        'Mit dem Kehrwert multiplizieren: $\\dfrac{a}{b} \\cdot \\dfrac{d}{c}$.',
        'Die Formel "äußere Glieder ins Zähler-Produkt, innere ins Nenner-Produkt" (Außenpaar $a \\cdot d$, Innenpaar $b \\cdot c$).',
      ],
    ),
    // [3] Bruch vollständig kürzen per ggT
    matching(
      'Sub-Goal "Bruch vollständig kürzen per ggT": Ordne jedem Bruch seine vollständig gekürzte Form zu.',
      [
        { left: '$\\dfrac{18}{24}$',   right: '$\\dfrac{3}{4}$' },
        { left: '$\\dfrac{42}{56}$',   right: '$\\dfrac{3}{4}$' },
        { left: '$\\dfrac{15}{35}$',   right: '$\\dfrac{3}{7}$' },
        { left: '$\\dfrac{48}{60}$',   right: '$\\dfrac{4}{5}$' },
      ],
      `**Ansatz:** Vollständig kürzen = Zähler und Nenner durch ihren **größten gemeinsamen Teiler (ggT)** teilen. Primfaktorzerlegung hilft, den ggT sicher zu finden.

**Rechnung:**
· $\\dfrac{18}{24}$: ggT$(18,24)=6$ → $\\dfrac{3}{4}$
· $\\dfrac{42}{56}$: ggT$(42,56)=14$ → $\\dfrac{3}{4}$
· $\\dfrac{15}{35}$: ggT$(15,35)=5$ → $\\dfrac{3}{7}$
· $\\dfrac{48}{60}$: ggT$(48,60)=12$ → $\\dfrac{4}{5}$

**Probe:** Bei jedem Ergebnis sind Zähler und Nenner **teilerfremd** (ggT $=1$). Das ist das Abbruchkriterium.

**Typischer Fehler:** Nur mit einem kleinen Teiler kürzen (z. B. $\\dfrac{18}{24}$ durch $2$ → $\\dfrac{9}{12}$) und dann stehen bleiben. Immer so lange kürzen, bis ggT $=1$.`,
      [
        'Primfaktorzerlegung von Zähler und Nenner; gemeinsame Faktoren = ggT.',
        'Durch den ggT teilen, nicht durch einen kleineren gemeinsamen Teiler.',
        'Kontrolle: ggT$(\\text{neuer Zähler}, \\text{neuer Nenner}) = 1$ (teilerfremd).',
      ],
    ),
  ],

  // ───────────────────────────────────────────────────────────────────────
  // Weitere Lessons (alg-0-3 ff.) folgen in Folge-Sessions — siehe STATUS.md
  // für priorisierte Abarbeitungsliste.
  // ───────────────────────────────────────────────────────────────────────
}
