// ═══════════════════════════════════════════════════════════════════════════
// Algebra — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// FORMAT (empfohlen): Objekt mit Sub-Goal-Index als Key, ARRAY VON AUFGABEN
// als Value — erlaubt (und fordert!) mehrere Aufgaben pro Sub-Goal:
//
//   'lessonId': {
//     0: [mc('Sub-Goal "..."'), ni('Sub-Goal "..."'), tf('Sub-Goal "..."')],
//     1: [ni('...'), mc('...'), matching('...')],
//     ...
//   }
//
// Qualitätskontrakt pro Aufgabe:
//   - Sub-Goal-Label wörtlich in der Frage zitiert
//   - 4-Block-Erklärung: Ansatz / Rechnung / Probe / Typischer Fehler
//   - ≥ 3 Hints, gestaffelt (Konzept → Methode → konkreter Schritt)
//   - MC mit ≥ 3 Optionen: `wrongAnswerExplanations` für JEDEN falschen Index
//   - Typen-Rotation pro Sub-Goal (nicht 3× MC fürs selbe Sub-Goal)
//   - Prüfungs-Units (alg-4-*): `[PRÜFUNG] `-Prefix in Frage/Statement
//
// MENGE pro Sub-Goal: Ziel ist MIN_TASKS_PER_SUB_GOAL (= 3) — mehr ist besser.
// Wer wirklich Routine bekommen will, braucht 3-5 verschiedene Aufgaben pro
// Kompetenz, jede mit anderer Formulierung/Zahlen/Kontext.
//
// Fortschritt siehe `STATUS.md` im Wurzelverzeichnis.
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const algebraSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-1 — Grundrechnen, Klammern & Vorrang  (4 subGoals)
  // Je Sub-Goal 3 Aufgaben, verschiedene Typen → 12 Goal-Tasks
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-1': {
    // [0] Vorrangregel Punkt-vor-Strich
    0: [
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
      ni(
        'Sub-Goal "Vorrangregel Punkt-vor-Strich bei gemischten Termen": Berechne $12 : 4 + 3 \\cdot 2$.',
        9, 0, '',
        `**Ansatz:** Punktrechnung (: und $\\cdot$) vor Strichrechnung (+/-). Beide Punktoperationen werden von links nach rechts abgearbeitet.

**Rechnung:** $12:4 = 3$, $3\\cdot 2 = 6$. Dann $3 + 6 = 9$.

**Probe:** Klammern zur Verdeutlichung: $(12:4) + (3\\cdot 2) = 3 + 6 = 9$. ✓

**Typischer Fehler:** Von links nach rechts: $12 : 4 + 3 \\cdot 2 = 3 + 3 \\cdot 2 = 6 \\cdot 2 = 12$ — das vergisst, dass Addition erst NACH allen Punktoperationen kommt.`,
        [
          'Zwei Punktoperationen — beide VOR dem Plus.',
          '$12:4$ und $3\\cdot 2$ separat ausrechnen, dann addieren.',
          'Division und Multiplikation sind gleichrangig und werden von links nach rechts bearbeitet.',
        ],
      ),
      tf(
        'Sub-Goal "Vorrangregel Punkt-vor-Strich bei gemischten Termen": Der Ausdruck $8 + 6 : 2$ ergibt $7$.',
        false,
        `**Ansatz:** Punkt vor Strich — die Division $6:2$ wird ZUERST gerechnet, dann die Addition.

**Rechnung:** $6:2 = 3$, dann $8 + 3 = 11$.

**Probe:** Mit Klammern: $8 + (6:2) = 8 + 3 = 11 \\neq 7$.

**Typischer Fehler:** Von links nach rechts: $(8+6):2 = 14:2 = 7$. Das setzt die Addition vor die Division, was die Vorrangregel verletzt.`,
        [
          'Welche Operation steht hier vor welcher in der Rangfolge?',
          '$6:2$ zuerst, dann die $8$ dazu.',
          '$8 + 3 = ?$ — nicht $(8+6):2$.',
        ],
      ),
    ],
    // [1] Minuszeichen vor Klammer auf alle Summanden
    1: [
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
      mc(
        'Sub-Goal "Minuszeichen vor Klammer auf alle Summanden anwenden": Welcher Ausdruck ist äquivalent zu $a - (b + c - d)$?',
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
      ),
      sorting(
        'Sub-Goal "Minuszeichen vor Klammer auf alle Summanden anwenden": Bringe die Schritte zum Vereinfachen von $15 - (4 + 2 - 7)$ in die richtige Reihenfolge.',
        [
          'Minus auf alle Summanden der Klammer verteilen: $15 - 4 - 2 + 7$',
          'Gleichartige zusammenfassen: $15 + 7 - 4 - 2 = 22 - 6$',
          'Abschluss-Subtraktion: $22 - 6 = 16$',
        ],
        [0, 1, 2],
        `**Ansatz:** Erst das Minus verteilen, dann vereinfachen, dann endgültig rechnen.

**Rechnung:** $15 - (4+2-7) = 15 - 4 - 2 + 7 = 16$.

**Probe:** Klammer erst: $4+2-7 = -1$, dann $15 - (-1) = 16$. ✓

**Typischer Fehler:** In einem Schritt mehrere Operationen gleichzeitig machen und dabei Vorzeichenfehler produzieren.`,
        [
          'Erst Verteilung des Minuszeichens, dann Zusammenfassen.',
          'Jeder Summand in der Klammer kippt sein Vorzeichen.',
          'Erst alle Pluse, dann alle Minuse — das verringert Fehler.',
        ],
      ),
    ],
    // [2] Doppel-Minus aufgelöst
    2: [
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
      ni(
        'Sub-Goal "Doppel-Minus aufgelöst: $(-a)(-b) = +ab$": Berechne $-(-7) + (-2)$.',
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
      ),
      mc(
        'Sub-Goal "Doppel-Minus aufgelöst: $(-a)(-b) = +ab$": Welches Vorzeichen hat das Produkt $(-2) \\cdot (-3) \\cdot (-5) \\cdot (-1)$?',
        ['$+$ (positiv)', '$-$ (negativ)', 'Hängt vom Betrag ab', 'Vorzeichen ist unbestimmt'],
        0,
        `**Ansatz:** Bei einem Produkt mit mehreren negativen Faktoren entscheidet die **Parität** der Anzahl: gerade Anzahl Minuszeichen → positiv, ungerade → negativ.

**Rechnung:** Vier Minuszeichen $(-1)^4 = +1$ — gerade Anzahl, also positiv. Produkt: $2\\cdot 3\\cdot 5\\cdot 1 = 30$, Vorzeichen $+$, Ergebnis $+30$.

**Probe:** Schrittweise: $(-2)\\cdot(-3) = +6$; $(+6)\\cdot(-5) = -30$; $(-30)\\cdot(-1) = +30$. ✓

**Typischer Fehler:** Jeder Minus pauschal "hebt einen Plus auf" — egal wie oft. Nein: bei ungerader Anzahl bleibt Minus.`,
        [
          'Zähle die Minuszeichen.',
          'Gerade Anzahl → Plus, ungerade → Minus.',
          'Formel: Vorzeichen $= (-1)^n$ bei $n$ negativen Faktoren.',
        ],
        {
          1: '4 Minuszeichen sind gerade — also ist das Ergebnis positiv. Bei 3 oder 5 Minuszeichen wäre es negativ.',
          2: 'Das Vorzeichen hängt NUR von der Anzahl der Minuszeichen ab, nicht vom Betrag der Zahlen.',
          3: 'Das Vorzeichen ist eindeutig bestimmt: gerade Anzahl $-$ ergibt $+$.',
        },
      ),
    ],
    // [3] Klammerschachtelung von innen nach außen
    3: [
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
      ni(
        'Sub-Goal "Klammerschachtelung von innen nach außen abarbeiten": Berechne $\\{3 + [2 \\cdot (4-1)]\\} - 5$.',
        4, 0, '',
        `**Ansatz:** Innerste Klammer zuerst, dann eckige, dann geschweifte, dann den Rest.

**Rechnung:** Schritt 1: innerste $(4-1)=3$. Schritt 2: eckig $[2\\cdot 3]=6$. Schritt 3: geschweift $\\{3+6\\}=9$. Schritt 4: außen $9-5=4$.

**Probe:** Rückwärts einsetzen bestätigt jeden Zwischenschritt. ✓

**Typischer Fehler:** Die eckige Klammer als $[2\\cdot 4-1]=7$ rechnen — hier würde das Klammer-Prinzip ignoriert und $2$ nur mit $4$ multipliziert statt mit dem ganzen Term $(4-1)$.`,
        [
          'Welche Klammer zuerst? Die innerste — runde Klammer.',
          'Ersetze jede fertig ausgewertete Klammer durch eine Zahl, dann geh eine Stufe nach außen.',
          'Zwischenergebnisse einzeln hinschreiben, nicht im Kopf.',
        ],
      ),
      tf(
        'Sub-Goal "Klammerschachtelung von innen nach außen abarbeiten": Bei geschachtelten Klammern soll man IMMER zuerst die äußerste (geschweifte) Klammer auflösen.',
        false,
        `**Ansatz:** Die Regel lautet **innen nach außen** — man geht von der innersten runden Klammer zur eckigen, dann zur geschweiften.

**Rechnung:** Beispiel $\\{1 + [2\\cdot(3+4)]\\}$: richtig $\\{1 + [2\\cdot 7]\\} = \\{1+14\\} = 15$. Falsch wäre, außen zu beginnen — geschweift kann nicht ausgewertet werden, solange das Innere nicht Zahl ist.

**Probe:** Die geschweifte Klammer ENTHÄLT die eckige als Teilausdruck — man kann sie nicht ohne deren Wert verarbeiten.

**Typischer Fehler:** Einzelne Summanden der äußeren Klammer mit dem Faktor kombinieren, bevor die innere aufgelöst ist. Das erzeugt Distributivitäts-Fehler.`,
        [
          'Innen nach außen, nicht außen nach innen.',
          'Geschweift kann man erst auswerten, wenn alles drin schon Zahl ist.',
          'Merkregel: runde → eckige → geschweifte.',
        ],
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-2 — Bruchrechnen sicher  (4 subGoals)
  // Aktuell nur je 1 Aufgabe pro Sub-Goal → erscheint in STATUS.md als Lücke
  // (Ziel: je ≥ 3 Aufgaben). Template für Claude-Folge-Session.
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-2': {
    0: [
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
    ],
    1: [
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
    ],
    2: [
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
    ],
    3: [
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
  },

  // ───────────────────────────────────────────────────────────────────────
  // Weitere Lessons (alg-0-3 ff.) folgen in Folge-Sessions — siehe STATUS.md
  // für priorisierte Abarbeitungsliste. Ziel: ≥ 3 Aufgaben pro Sub-Goal.
  // ───────────────────────────────────────────────────────────────────────
}
