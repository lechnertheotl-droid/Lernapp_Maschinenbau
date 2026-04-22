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
      matching(
        'Sub-Goal "Vorrangregel Punkt-vor-Strich bei gemischten Termen": Ordne jedem Ausdruck sein Ergebnis zu.',
        [
          { left: '$10 + 2 \\cdot 5$',     right: '$20$' },
          { left: '$(10 + 2) \\cdot 5$',   right: '$60$' },
          { left: '$6 - 4 : 2$',           right: '$4$' },
          { left: '$(6 - 4) : 2$',         right: '$1$' },
        ],
        `**Ansatz:** Punkt-vor-Strich — Multiplikation/Division werden vor Addition/Subtraktion gerechnet. Klammern ändern das, weil sie erzwingen, was zuerst berechnet wird.

**Rechnung:**
· $10 + 2\\cdot 5 = 10 + 10 = 20$ (Punkt zuerst)
· $(10+2)\\cdot 5 = 12\\cdot 5 = 60$ (Klammer zuerst)
· $6 - 4:2 = 6 - 2 = 4$ (Division zuerst)
· $(6-4):2 = 2:2 = 1$ (Klammer zuerst)

**Probe:** In jedem Paar zeigt sich: Klammer setzt die Strichrechnung VOR die Punktrechnung; ohne Klammer gilt Punkt-vor-Strich.

**Typischer Fehler:** "Gleiche Zahlen müssen gleiches Ergebnis geben" — Klammerung verändert die Auswertungsreihenfolge und damit das Ergebnis grundlegend.`,
        [
          'Bei jedem Ausdruck erst Klammer prüfen, dann Punkt-vor-Strich.',
          'Ohne Klammer: Multiplikation/Division zuerst.',
          'Mit Klammer: Inhalt der Klammer zuerst ausrechnen.',
        ],
      ),
      sorting(
        'Sub-Goal "Vorrangregel Punkt-vor-Strich bei gemischten Termen": Bringe die Schritte zur Auswertung von $18 - 4 \\cdot 3 + 2$ in die richtige Reihenfolge.',
        [
          'Punktrechnung zuerst: $4 \\cdot 3 = 12$',
          'Term durch Zwischenergebnis ersetzen: $18 - 12 + 2$',
          'Strichrechnung von links nach rechts: $18 - 12 = 6$',
          'Weiter linear: $6 + 2 = 8$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Saubere Schritte trennen — erst alle Punktoperationen, dann die Strichrechnung linear von links nach rechts.

**Rechnung:** $18 - 4\\cdot 3 + 2 = 18 - 12 + 2 = 6 + 2 = 8$.

**Probe:** Mit Klammer zur Verdeutlichung: $18 - (4\\cdot 3) + 2 = 18 - 12 + 2 = 8$. ✓

**Typischer Fehler:** $18 - 4 = 14$, dann $14 \\cdot 3 = 42$, dann $42 + 2 = 44$ — ignoriert Punkt-vor-Strich. Oder: $18 - 12 + 2$ als $18 - (12+2) = 4$ missinterpretiert (Strichrechnung ist aber links-nach-rechts, nicht gebündelt).`,
        [
          'Erst alle Punktoperationen ausführen.',
          'Danach die Strichrechnung linear von links nach rechts.',
          'Nicht den Fehler machen, $-$ und $+$ zu bündeln — sie sind gleichrangig.',
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
      tf(
        'Sub-Goal "Minuszeichen vor Klammer auf alle Summanden anwenden": Für beliebige Zahlen $a, b, c$ gilt $a - (b - c) = a - b - c$.',
        false,
        `**Ansatz:** Minus vor Klammer verteilt sich auf **alle** Summanden — also muss auch das $-c$ das Vorzeichen wechseln.

**Rechnung:** Korrekt ist $a - (b - c) = a - b + c$, nicht $a - b - c$. Das $-c$ in der Klammer wird zu $+c$, weil der Minus davor es nochmal kippt.

**Probe:** Setze $a=10, b=4, c=3$: Links $10 - (4-3) = 10 - 1 = 9$. Behauptung $10 - 4 - 3 = 3 \\neq 9$. Richtig: $10 - 4 + 3 = 9$. ✓

**Typischer Fehler:** Nur den ersten Summanden der Klammer negieren — klassischer Vorzeichenfehler, der zu Folge-Fehlern in Physik und Technik führt.`,
        [
          'Kippt das Minus vor der Klammer nur den ersten Summanden — oder alle?',
          'Teste mit Zahlen: $10 - (4-3) = ?$',
          'Jedes Vorzeichen in der Klammer wird umgedreht.',
        ],
      ),
      matching(
        'Sub-Goal "Minuszeichen vor Klammer auf alle Summanden anwenden": Ordne jedem Ausdruck seine korrekt aufgelöste Form zu.',
        [
          { left: '$5 - (3 - 2)$',          right: '$5 - 3 + 2$' },
          { left: '$x - (y + z - w)$',      right: '$x - y - z + w$' },
          { left: '$-(a - b + c)$',         right: '$-a + b - c$' },
          { left: '$a - (-b - c)$',         right: '$a + b + c$' },
        ],
        `**Ansatz:** Minus vor einer Klammer wirkt wie ein Faktor $-1$ und kippt **jedes** Vorzeichen im Innern der Klammer.

**Rechnung:** Jeder Fall ist konsequente Anwendung derselben Regel. Vor allem beim letzten: $-(-b) = +b$ und $-(-c) = +c$.

**Probe:** Zahlentest bei Zeile 1: $5-(3-2)=5-1=4$ und $5-3+2=4$. ✓

**Typischer Fehler:** Vor allem beim Doppel-Minus: $-(-b)$ als $-b$ lesen. Zwei Minuszeichen heben sich zu einem Plus auf.`,
        [
          'Alle Vorzeichen in der Klammer drehen.',
          'Doppel-Minus $-(-x) = +x$.',
          'Kontrolle: beliebige Zahlen einsetzen und links=rechts prüfen.',
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
      matching(
        'Sub-Goal "Doppel-Minus aufgelöst: $(-a)(-b) = +ab$": Ordne jedem Ausdruck sein Ergebnis zu.',
        [
          { left: '$-(-5)$',                right: '$+5$' },
          { left: '$(-3) \\cdot (-4)$',     right: '$+12$' },
          { left: '$-(-2) \\cdot (-3)$',    right: '$-6$' },
          { left: '$(-1)^5 \\cdot (-2)$',   right: '$+2$' },
        ],
        `**Ansatz:** Bei Vorzeichen zählt die **Parität** der Minuszeichen: gerade $\\to +$, ungerade $\\to -$.

**Rechnung:**
· $-(-5) = +5$ (zwei Minuszeichen)
· $(-3)\\cdot(-4) = +12$ (zwei Minus)
· $-(-2)\\cdot(-3) = (+2)\\cdot(-3) = -6$ (drei Minus gesamt)
· $(-1)^5 = -1$; $-1 \\cdot (-2) = +2$ (sechs Minus, gerade)

**Probe:** In jedem Paar Minuszeichen zählen und Formel $(-1)^n$ einsetzen.

**Typischer Fehler:** Pauschal "zwei Minus = Plus" — funktioniert nur bei genau zwei. Bei drei oder mehr die Anzahl zählen.`,
        [
          'Jedes Minus = Faktor $-1$.',
          'Anzahl Minuszeichen zählen.',
          '$(-1)^n$ mit $n$ Minuszeichen.',
        ],
      ),
      sorting(
        'Sub-Goal "Doppel-Minus aufgelöst: $(-a)(-b) = +ab$": Bringe die Schritte zur Auswertung von $-(-3) + (-5) - (-2)$ in die richtige Reihenfolge.',
        [
          'Doppel-Minuszeichen auflösen: $+3 + (-5) + 2$',
          'Terme umschreiben als reine Addition/Subtraktion: $3 - 5 + 2$',
          'Von links nach rechts rechnen: $3 - 5 = -2$',
          'Weiter: $-2 + 2 = 0$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Zuerst alle Vorzeichenkonstellationen vereinfachen, dann linear abarbeiten.

**Rechnung:** $-(-3) + (-5) - (-2) = 3 - 5 + 2 = 0$.

**Probe:** Gruppiert: $(3+2) - 5 = 5 - 5 = 0$. ✓

**Typischer Fehler:** Direkt "von links lesen" ohne die Doppel-Vorzeichen aufzulösen — führt fast immer zu Fehlern. Lieber erst alles auf einfache $+/-$ bringen.`,
        [
          'Erst Doppel-Minuszeichen zu $+$ umwandeln.',
          'Dann Klammern um negative Zahlen weglassen und Vorzeichen anpassen.',
          'Linear rechnen erst nach der Vereinfachung.',
        ],
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
      mc(
        'Sub-Goal "Klammerschachtelung von innen nach außen abarbeiten": Welchen Wert hat $2 \\cdot \\{[3 + (6-4)] - 1\\}$?',
        ['$8$', '$10$', '$6$', '$18$'],
        0,
        `**Ansatz:** Stufenweise von innen nach außen: $(\\ldots) \\to [\\ldots] \\to \\{\\ldots\\} \\to$ äußere Multiplikation.

**Rechnung:** $(6-4)=2$. $[3+2]=5$. $\\{5-1\\}=4$. $2\\cdot 4 = 8$.

**Probe:** Ohne Zwischenschritte von innen: $2\\cdot\\{[3+2]-1\\} = 2\\cdot\\{5-1\\} = 2\\cdot 4 = 8$. ✓

**Typischer Fehler:** Die geschweifte Klammer wie eine eckige behandeln und den Faktor $2$ auf beide Teilsummen verteilen, bevor $(6-4)$ berechnet wurde — liefert oft $18$ oder $10$.`,
        [
          'Klammerreihenfolge: rund, eckig, geschweift — immer von innen.',
          'Jede fertig ausgewertete Klammer wird zur Zahl.',
          'Erst am Ende mit dem Faktor $2$ multiplizieren.',
        ],
        {
          1: 'Hier wurde vermutlich das Minus $-1$ als Addition gelesen: $2\\cdot\\{5+1\\}=12$ oder $2\\cdot(4+1)=10$. Das $-1$ ist aber Subtraktion.',
          2: 'Dies wäre $[3+(6-4)]\\cdot 1 - 2$ oder ähnlich falsch geklammert — stimmt nicht mit $2\\cdot\\{\\ldots\\}$ überein.',
          3: '$18$ entsteht, wenn man $2 \\cdot \\{[3\\cdot(6-4)]-1\\}$ rechnet ($3\\cdot 2 = 6$, $6-1=5$, aber dann $2\\cdot 5 = 10$...). Oder Distributivität falsch angewandt.',
        },
      ),
      sorting(
        'Sub-Goal "Klammerschachtelung von innen nach außen abarbeiten": Bringe die Schritte zur Auswertung von $\\{10 - [2 \\cdot (3+1)]\\} \\cdot 3$ in die richtige Reihenfolge.',
        [
          'Innerste runde Klammer: $(3+1) = 4$',
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
      mc(
        'Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": Welcher Hauptnenner ist für $\\dfrac{1}{6} + \\dfrac{5}{8}$ zu wählen?',
        ['$24$', '$48$', '$14$', '$2$'],
        0,
        `**Ansatz:** Hauptnenner = kgV der Nenner, nicht das Produkt. Primfaktorzerlegung nutzen.

**Rechnung:** $6 = 2 \\cdot 3$, $8 = 2^3$. Höchste Exponenten: $2^3$ und $3^1$. $\\text{kgV}(6,8) = 8 \\cdot 3 = 24$.

**Probe:** $24/6 = 4$ und $24/8 = 3$ — beides ganzzahlig. ✓

**Typischer Fehler:** Einfach $6 \\cdot 8 = 48$ als Hauptnenner nehmen. Das funktioniert, aber man arbeitet unnötig mit doppelt so großen Zahlen und muss am Ende kürzen.`,
        [
          'Primfaktorzerlegung von $6$ und $8$.',
          'Höchsten Exponenten jeder Primzahl übernehmen.',
          'kgV ist das kleinste gemeinsame Vielfache, nicht das Produkt.',
        ],
        {
          1: 'Richtig ist die Idee (Produkt der Nenner funktioniert als Hauptnenner), aber das ist nicht der KLEINSTE gemeinsame Nenner. Das kgV ist $24$.',
          2: '$14 = 6 + 8$ — Nenner werden **nicht** addiert. Hauptnenner = kgV, gesucht über Vielfache.',
          3: '$2$ ist der ggT (größte gemeinsame Teiler), nicht das kgV. Hauptnenner ist der kleinste gemeinsame **Nenner**, also ein Vielfaches von beiden.',
        },
      ),
      tf(
        'Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": Das kgV zweier Zahlen ist immer das Produkt dieser Zahlen.',
        false,
        `**Ansatz:** Gegenbeispiel suchen — das kgV zweier Zahlen ist nur dann das Produkt, wenn sie teilerfremd sind.

**Rechnung:** $\\text{kgV}(4, 6) = 12$, aber $4 \\cdot 6 = 24$. Gemeinsamer Faktor $2$ reduziert das kgV: $\\text{kgV}(a,b) = \\dfrac{a \\cdot b}{\\text{ggT}(a,b)}$.

**Probe:** $\\text{kgV}(3, 5) = 15 = 3 \\cdot 5$ — hier gilt die Aussage, weil ggT$(3,5)=1$ (teilerfremd). Aber nicht allgemein.

**Typischer Fehler:** "Produkt der Nenner" als universelle Regel lernen. Das liefert *einen* gemeinsamen Nenner, aber nicht den *kleinsten* — und damit größere Rechnungen.`,
        [
          'Gilt die Behauptung für $4$ und $6$?',
          '$\\text{kgV}(a,b) \\cdot \\text{ggT}(a,b) = a \\cdot b$.',
          'Gleichheit nur bei $\\text{ggT}(a,b) = 1$ (teilerfremd).',
        ],
      ),
      matching(
        'Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": Ordne jedem Nenner-Paar das zugehörige kgV zu.',
        [
          { left: '$(4, 6)$',     right: '$12$' },
          { left: '$(9, 12)$',    right: '$36$' },
          { left: '$(5, 7)$',     right: '$35$' },
          { left: '$(10, 15)$',   right: '$30$' },
        ],
        `**Ansatz:** Für jedes Paar: Primfaktoren zerlegen, höchste Exponenten nehmen.

**Rechnung:**
· $(4,6): 4=2^2, 6=2\\cdot 3$; kgV $= 2^2 \\cdot 3 = 12$.
· $(9,12): 9=3^2, 12=2^2\\cdot 3$; kgV $= 2^2 \\cdot 3^2 = 36$.
· $(5,7)$: teilerfremd, kgV $= 5 \\cdot 7 = 35$.
· $(10,15): 10=2\\cdot 5, 15=3\\cdot 5$; kgV $= 2\\cdot 3\\cdot 5 = 30$.

**Probe:** kgV ist durch beide Nenner ohne Rest teilbar. Check jede Zeile.

**Typischer Fehler:** Bei $(10,15)$ einfach $150$ rechnen — $150$ ist zwar gemeinsames Vielfaches, aber nicht das kleinste. Der gemeinsame Faktor $5$ erlaubt $30$.`,
        [
          'Primfaktoren-Trick: höchste Potenzen jeder Primzahl.',
          'Teilerfremde Paare: kgV = Produkt.',
          'Gleiche Primfaktoren nur mit höchstem Exponenten zählen.',
        ],
      ),
      sorting(
        'Sub-Goal "Hauptnenner bei ungleichnamigen Brüchen finden (kgV)": Bringe die Schritte zum Finden von kgV$(12, 20)$ per Primfaktorzerlegung in die richtige Reihenfolge.',
        [
          'Primfaktorzerlegung: $12 = 2^2 \\cdot 3$ und $20 = 2^2 \\cdot 5$',
          'Alle vorkommenden Primzahlen sammeln: $\\{2, 3, 5\\}$',
          'Höchsten Exponenten jeder Primzahl übernehmen: $2^2, 3^1, 5^1$',
          'Produkt bilden: $4 \\cdot 3 \\cdot 5 = 60$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Der kgV-Algorithmus über Primfaktoren ist deterministisch — vier saubere Schritte.

**Rechnung:** $12 = 2^2\\cdot 3$, $20 = 2^2\\cdot 5$. Höchste Exponenten: $2^2, 3^1, 5^1$. kgV $= 4\\cdot 3\\cdot 5 = 60$.

**Probe:** $60/12 = 5$ und $60/20 = 3$ — beides ganzzahlig. ✓

**Typischer Fehler:** Gemeinsame Faktoren doppelt zählen, z. B. $2^2$ für beide, ergibt $2^4 \\cdot 3 \\cdot 5 = 240$. Man nimmt den höchsten Exponenten jeder Primzahl nur **einmal**.`,
        [
          'Zerlege beide Zahlen vollständig in Primfaktoren.',
          'Alle Primzahlen aus beiden Zerlegungen sammeln.',
          'Höchsten Exponenten pro Primzahl, Produkt bilden.',
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
      ni(
        'Sub-Goal "Division durch Bruch als Multiplikation mit Kehrwert": Berechne $\\dfrac{2}{5} : \\dfrac{4}{15}$ und gib das Ergebnis als Dezimalzahl an.',
        1.5, 0.001, '',
        `**Ansatz:** Division durch Bruch = Multiplikation mit Kehrwert. Kürzen vor dem Multiplizieren spart Arbeit.

**Rechnung:** $\\dfrac{2}{5} : \\dfrac{4}{15} = \\dfrac{2}{5} \\cdot \\dfrac{15}{4}$. Kürzen: $\\dfrac{15}{5} = 3$, $\\dfrac{2}{4} = \\dfrac{1}{2}$. Also $3 \\cdot \\dfrac{1}{2} = \\dfrac{3}{2} = 1{,}5$.

**Probe:** Gegenrechnung $1{,}5 \\cdot \\dfrac{4}{15} = \\dfrac{6}{15} = \\dfrac{2}{5}$. ✓

**Typischer Fehler:** Zähler und Nenner einzeln dividieren: $\\dfrac{2:4}{5:15} = \\dfrac{0{,}5}{\\ldots}$ — diese Regel existiert nicht. Immer mit Kehrwert multiplizieren.`,
        [
          'Division durch Bruch → Multiplikation mit Kehrwert.',
          'Vor dem Multiplizieren diagonal kürzen: $15$ gegen $5$, $2$ gegen $4$.',
          'Endergebnis $\\dfrac{3}{2} = 1{,}5$.',
        ],
      ),
      tf(
        'Sub-Goal "Division durch Bruch als Multiplikation mit Kehrwert": Es gilt $\\dfrac{a/b}{c} = \\dfrac{a}{b \\cdot c}$.',
        true,
        `**Ansatz:** Division durch eine ganze Zahl $c = \\dfrac{c}{1}$ ist Spezialfall der Bruch-durch-Bruch-Division.

**Rechnung:** $\\dfrac{a/b}{c} = \\dfrac{a}{b} : \\dfrac{c}{1} = \\dfrac{a}{b} \\cdot \\dfrac{1}{c} = \\dfrac{a}{b\\cdot c}$.

**Probe:** Zahlentest: $\\dfrac{2/3}{4} = \\dfrac{2}{3\\cdot 4} = \\dfrac{2}{12} = \\dfrac{1}{6}$. Dezimal-Kontrolle: $\\dfrac{2}{3} \\approx 0{,}667$, geteilt durch $4$ $\\approx 0{,}167 = 1/6$. ✓

**Typischer Fehler:** $\\dfrac{a/b}{c} = \\dfrac{a \\cdot c}{b}$ schreiben (Kehrwert des Divisors $c$ vergessen, stattdessen mit $c$ multipliziert).`,
        [
          '$c$ als Bruch $\\dfrac{c}{1}$ schreiben.',
          'Kehrwert von $\\dfrac{c}{1}$ ist $\\dfrac{1}{c}$.',
          'Zahlentest ist schnell und klärt die Regel.',
        ],
      ),
      matching(
        'Sub-Goal "Division durch Bruch als Multiplikation mit Kehrwert": Ordne jeder Division den passenden Multiplikationsausdruck zu.',
        [
          { left: '$\\dfrac{3}{5} : \\dfrac{2}{7}$',   right: '$\\dfrac{3}{5} \\cdot \\dfrac{7}{2}$' },
          { left: '$\\dfrac{1}{2} : 4$',              right: '$\\dfrac{1}{2} \\cdot \\dfrac{1}{4}$' },
          { left: '$6 : \\dfrac{2}{3}$',              right: '$6 \\cdot \\dfrac{3}{2}$' },
          { left: '$\\dfrac{a}{b} : \\dfrac{c}{d}$',  right: '$\\dfrac{a}{b} \\cdot \\dfrac{d}{c}$' },
        ],
        `**Ansatz:** "Division durch Bruch = Multiplikation mit Kehrwert" — der Kehrwert ist Zähler und Nenner des zweiten Bruchs vertauscht.

**Rechnung:** Regel in allen Fällen gleich. Ganze Zahl $n = \\dfrac{n}{1}$, Kehrwert $\\dfrac{1}{n}$.

**Probe:** Bei Zeile 3: $6 : \\dfrac{2}{3} = 6 \\cdot \\dfrac{3}{2} = \\dfrac{18}{2} = 9$. Kontrolle: $9 \\cdot \\dfrac{2}{3} = 6$. ✓

**Typischer Fehler:** Nur den Kehrwert auf den ersten Bruch anwenden statt auf den Divisor — oder vergessen, ganze Zahlen als Brüche zu schreiben.`,
        [
          'Der Kehrwert betrifft immer den **zweiten** (Divisor-)Bruch.',
          'Ganze Zahlen $n = n/1$; Kehrwert $= 1/n$.',
          'Schema: $\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b}\\cdot\\dfrac{d}{c}$.',
        ],
      ),
      sorting(
        'Sub-Goal "Division durch Bruch als Multiplikation mit Kehrwert": Bringe die Schritte zur Berechnung von $\\dfrac{5}{6} : \\dfrac{2}{9}$ in die richtige Reihenfolge.',
        [
          'Kehrwert bilden: $\\dfrac{9}{2}$',
          'Als Multiplikation umschreiben: $\\dfrac{5}{6} \\cdot \\dfrac{9}{2}$',
          'Diagonal kürzen: $\\dfrac{9}{6}$ wird $\\dfrac{3}{2}$, also $\\dfrac{5}{2}\\cdot\\dfrac{3}{2}$',
          'Zähler und Nenner multiplizieren: $\\dfrac{15}{4}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Bruchdivision in vier sauberen Schritten: Kehrwert $\\to$ Multiplikation $\\to$ Kürzen $\\to$ Ausmultiplizieren.

**Rechnung:** $\\dfrac{5}{6} \\cdot \\dfrac{9}{2}$. Gemeinsamer Faktor $3$ in $9$ und $6$: $\\dfrac{5}{\\cancel{6}_{2}} \\cdot \\dfrac{\\cancel{9}_{3}}{2} = \\dfrac{5\\cdot 3}{2\\cdot 2} = \\dfrac{15}{4}$.

**Probe:** Gegenrechnung: $\\dfrac{15}{4} \\cdot \\dfrac{2}{9} = \\dfrac{30}{36} = \\dfrac{5}{6}$. ✓

**Typischer Fehler:** Kürzen überspringen und mit großen Zahlen weiterrechnen ($\\dfrac{45}{12}$), dann am Ende kürzen vergessen.`,
        [
          'Zuerst Kehrwert des Divisors identifizieren.',
          'Erst kürzen, dann multiplizieren — spart Arbeit.',
          'Ergebnis auf einfachste Form bringen.',
        ],
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
      ni(
        'Sub-Goal "Doppelbrüche auflösen": Berechne $\\dfrac{\\;3/5\\;}{\\;6/25\\;}$ als Dezimalzahl.',
        2.5, 0.001, '',
        `**Ansatz:** Doppelbruch = Division. Der obere Bruch bleibt stehen, mit dem Kehrwert des unteren multiplizieren.

**Rechnung:** $\\dfrac{3/5}{6/25} = \\dfrac{3}{5} \\cdot \\dfrac{25}{6} = \\dfrac{75}{30} = \\dfrac{5}{2} = 2{,}5$.

**Probe:** Gegenrechnung: $2{,}5 \\cdot \\dfrac{6}{25} = \\dfrac{15}{25} = \\dfrac{3}{5}$. ✓

**Typischer Fehler:** Oberen und unteren Bruch "zusammenrechnen" — z. B. direkt $3/6 = 0{,}5$ und $5/25 = 0{,}2$ ausgeben. Die Werte sind verschieden, und die Regel gibt es nicht.`,
        [
          'Doppelbruch = $\\dfrac{a/b}{c/d} = \\dfrac{a \\cdot d}{b \\cdot c}$.',
          'Hier $a=3, b=5, c=6, d=25 \\to \\dfrac{75}{30}$.',
          'Kürzen per ggT$(75,30)=15$ ergibt $\\dfrac{5}{2}$.',
        ],
      ),
      mc(
        'Sub-Goal "Doppelbrüche auflösen": Welcher Ausdruck ist äquivalent zu $\\dfrac{\\;a/b\\;}{\\;c/d\\;}$?',
        ['$\\dfrac{a \\cdot d}{b \\cdot c}$', '$\\dfrac{a \\cdot c}{b \\cdot d}$', '$\\dfrac{a + d}{b + c}$', '$\\dfrac{a - c}{b - d}$'],
        0,
        `**Ansatz:** Doppelbruch als Division schreiben: $\\dfrac{a}{b} : \\dfrac{c}{d}$, dann Kehrwert.

**Rechnung:** $\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} = \\dfrac{a \\cdot d}{b \\cdot c}$ — "außen mal außen durch innen mal innen".

**Probe:** Zahlentest $a=1,b=2,c=3,d=4$: $\\dfrac{1/2}{3/4} = \\dfrac{1\\cdot 4}{2\\cdot 3} = \\dfrac{4}{6} = \\dfrac{2}{3}$. ✓

**Typischer Fehler:** Zähler mit Zähler und Nenner mit Nenner multiplizieren (wie normale Bruchmultiplikation) — das gibt $\\dfrac{ac}{bd}$ statt $\\dfrac{ad}{bc}$.`,
        [
          'Division der beiden Brüche aufschreiben.',
          'Kehrwert des unteren Bruchs bilden.',
          'Merkregel: "außen ins Zähler-Produkt, innen ins Nenner-Produkt".',
        ],
        {
          1: 'Das wäre $\\dfrac{a}{b} \\cdot \\dfrac{c}{d}$ (Multiplikation der Brüche), nicht $\\dfrac{a/b}{c/d}$ (Division). Bei Division den Kehrwert nehmen.',
          2: 'Bei Doppelbrüchen werden Zähler und Nenner **nicht** einzeln addiert oder subtrahiert. Division ist $\\cdot$ mit Kehrwert.',
          3: 'Subtraktion von Brüchen funktioniert ganz anders — mit Hauptnenner. Hier geht es um Division.',
        },
      ),
      matching(
        'Sub-Goal "Doppelbrüche auflösen": Ordne jedem Doppelbruch seine vereinfachte Form zu.',
        [
          { left: '$\\dfrac{\\;2/3\\;}{\\;4/5\\;}$',  right: '$\\dfrac{5}{6}$' },
          { left: '$\\dfrac{\\;1/2\\;}{\\;1/4\\;}$',  right: '$2$' },
          { left: '$\\dfrac{\\;a\\;}{\\;b/c\\;}$',    right: '$\\dfrac{ac}{b}$' },
          { left: '$\\dfrac{\\;a/b\\;}{\\;c\\;}$',    right: '$\\dfrac{a}{bc}$' },
        ],
        `**Ansatz:** Jeder Doppelbruch: oberen Bruch mal Kehrwert des unteren.

**Rechnung:**
· $\\dfrac{2/3}{4/5} = \\dfrac{2\\cdot 5}{3\\cdot 4} = \\dfrac{10}{12} = \\dfrac{5}{6}$
· $\\dfrac{1/2}{1/4} = \\dfrac{1\\cdot 4}{2\\cdot 1} = 2$
· $\\dfrac{a}{b/c} = a \\cdot \\dfrac{c}{b} = \\dfrac{ac}{b}$
· $\\dfrac{a/b}{c} = \\dfrac{a}{b} \\cdot \\dfrac{1}{c} = \\dfrac{a}{bc}$

**Probe:** Konsistenz-Check: in jedem Fall gilt "Doppelbruch-Umkehr" — Brüche über- und untereinander richtig kippen.

**Typischer Fehler:** Reine Zahl (z. B. $c$ im letzten Paar) nicht als Bruch $c/1$ lesen und dann in den Nenner statt in den Zähler des Kehrwerts schreiben.`,
        [
          'Jede ganze Zahl $= \\dfrac{\\text{Zahl}}{1}$.',
          'Kehrwert des unteren Bruchs.',
          'Bei Matching auf typische Schreibweisen achten.',
        ],
      ),
      sorting(
        'Sub-Goal "Doppelbrüche auflösen": Bringe die Schritte zur Vereinfachung von $\\dfrac{\\;7/8\\;}{\\;14/3\\;}$ in die richtige Reihenfolge.',
        [
          'Als Division aufschreiben: $\\dfrac{7}{8} : \\dfrac{14}{3}$',
          'Kehrwert und Multiplikation: $\\dfrac{7}{8} \\cdot \\dfrac{3}{14}$',
          'Kürzen: $\\dfrac{7}{14} = \\dfrac{1}{2}$, also $\\dfrac{1}{8} \\cdot \\dfrac{3}{2}$',
          'Ausmultiplizieren: $\\dfrac{3}{16}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Doppelbruch = Division → Kehrwert → Kürzen → Produkt.

**Rechnung:** $\\dfrac{7}{8} \\cdot \\dfrac{3}{14} = \\dfrac{7 \\cdot 3}{8 \\cdot 14} = \\dfrac{21}{112} = \\dfrac{3}{16}$.

**Probe:** Gegenrechnung $\\dfrac{3}{16} \\cdot \\dfrac{14}{3} = \\dfrac{42}{48} = \\dfrac{7}{8}$. ✓

**Typischer Fehler:** Nicht vor dem Multiplizieren kürzen — Endergebnis dann vergessen zu reduzieren.`,
        [
          'Doppelbruch → Division.',
          'Kehrwert → Multiplikation.',
          'Kürzen vor Ausmultiplizieren.',
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
      ni(
        'Sub-Goal "Bruch vollständig kürzen per ggT": Was ist der ggT von Zähler und Nenner in $\\dfrac{72}{108}$?',
        36, 0, '',
        `**Ansatz:** Primfaktorzerlegung, gemeinsame Primfaktoren mit **kleinstem** Exponenten nehmen.

**Rechnung:** $72 = 2^3 \\cdot 3^2$, $108 = 2^2 \\cdot 3^3$. Gemeinsame Primfaktoren mit Minimum: $2^2$ und $3^2$. ggT $= 4 \\cdot 9 = 36$.

**Probe:** $72/36 = 2$ und $108/36 = 3$. Beide ganzzahlig, und $2/3$ ist vollständig gekürzt (ggT$(2,3)=1$). ✓

**Typischer Fehler:** Höchsten Exponenten nehmen (das wäre das kgV) oder nur einen kleineren gemeinsamen Teiler wie $12$ wählen und den Bruch nicht vollständig kürzen.`,
        [
          'Primfaktorzerlegung beider Zahlen.',
          'Gemeinsame Primfaktoren mit **kleinstem** Exponenten.',
          'Produkt bilden: $2^2 \\cdot 3^2 = 36$.',
        ],
      ),
      mc(
        'Sub-Goal "Bruch vollständig kürzen per ggT": Welche Form von $\\dfrac{84}{126}$ ist vollständig gekürzt?',
        ['$\\dfrac{2}{3}$', '$\\dfrac{4}{6}$', '$\\dfrac{6}{9}$', '$\\dfrac{12}{18}$'],
        0,
        `**Ansatz:** Vollständig gekürzt heißt ggT$(\\text{Zähler, Nenner}) = 1$ — Zähler und Nenner sind teilerfremd.

**Rechnung:** $84 = 2^2 \\cdot 3 \\cdot 7$, $126 = 2 \\cdot 3^2 \\cdot 7$. ggT $= 2 \\cdot 3 \\cdot 7 = 42$. Also $84/42 = 2$ und $126/42 = 3$ → $\\dfrac{2}{3}$.

**Probe:** ggT$(2,3) = 1$ — vollständig gekürzt. ✓

**Typischer Fehler:** Stoppen, sobald ein beliebiger Teiler durchgeht, ohne zu prüfen, ob noch weiter gekürzt werden kann.`,
        [
          'Alle Optionen sind gleich groß — welche hat teilerfremde Zähler/Nenner?',
          'ggT der gekürzten Form muss $1$ sein.',
          'Kontrolle mit $84/126 = ?$ bei konsequenter Division durch $42$.',
        ],
        {
          1: '$\\dfrac{4}{6}$ ist **nicht** vollständig gekürzt: ggT$(4,6)=2$. Weiter kürzen ergibt $\\dfrac{2}{3}$.',
          2: '$\\dfrac{6}{9}$: ggT$(6,9)=3$. Weiter kürzen: $\\dfrac{2}{3}$. Zwischenergebnis, kein Endpunkt.',
          3: '$\\dfrac{12}{18}$: ggT$(12,18)=6$. Weiter kürzen: $\\dfrac{2}{3}$. Viel zu früh gestoppt.',
        },
      ),
      tf(
        'Sub-Goal "Bruch vollständig kürzen per ggT": Ein Bruch ist vollständig gekürzt, wenn ggT von Zähler und Nenner gleich $1$ ist.',
        true,
        `**Ansatz:** Definitorisch: "vollständig gekürzt" heißt exakt, dass Zähler und Nenner teilerfremd sind.

**Rechnung:** Formal: $\\dfrac{a}{b}$ ist vollständig gekürzt $\\Leftrightarrow$ ggT$(a,b) = 1$ $\\Leftrightarrow$ $a$ und $b$ haben keinen gemeinsamen Primfaktor.

**Probe:** $\\dfrac{5}{7}$: ggT$=1$, gekürzt. $\\dfrac{6}{9}$: ggT$=3$, nicht gekürzt.

**Typischer Fehler:** Glauben, "gekürzt" bedeute "klein geschrieben". Nein — die strukturelle Bedingung ist Teilerfremdheit.`,
        [
          'Wann kann man nicht mehr kürzen?',
          'Formalisierung: Abwesenheit gemeinsamer Teiler.',
          'Teilerfremdheit = ggT $= 1$.',
        ],
      ),
      sorting(
        'Sub-Goal "Bruch vollständig kürzen per ggT": Bringe die Schritte zur vollständigen Kürzung von $\\dfrac{120}{180}$ in die richtige Reihenfolge.',
        [
          'Primfaktorzerlegung: $120 = 2^3 \\cdot 3 \\cdot 5$ und $180 = 2^2 \\cdot 3^2 \\cdot 5$',
          'Gemeinsame Primfaktoren mit kleinstem Exponenten: $2^2, 3^1, 5^1 \\to$ ggT $= 60$',
          'Zähler und Nenner durch ggT teilen: $\\dfrac{120/60}{180/60} = \\dfrac{2}{3}$',
          'Kontrolle: ggT$(2, 3) = 1$ → vollständig gekürzt',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Die vier Standardschritte des ggT-Kürzens.

**Rechnung:** Ergebnis $\\dfrac{2}{3}$.

**Probe:** $\\dfrac{2}{3}$ dezimal $\\approx 0{,}667$ und $\\dfrac{120}{180} = 0{,}667$. ✓

**Typischer Fehler:** Schritte überspringen und direkt mit einem kleineren gemeinsamen Teiler kürzen — führt oft nicht zur Endform.`,
        [
          'Primfaktoren vor ggT.',
          'ggT ist das Produkt der gemeinsamen Primfaktoren mit kleinstem Exponenten.',
          'Zum Schluss Teilerfremdheit prüfen.',
        ],
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-3 — Prozent & Dreisatz  (5 subGoals, je 5 Aufgaben = 25 Goal-Tasks)
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-3': {
    // [0] Grundformel W = G·p/100
    0: [
      ni(
        'Sub-Goal "Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$": Eine Welle aus Stahl wiegt $45\\,\\text{kg}$. Wie schwer ist $30\\%$ davon (in kg)?',
        13.5, 0.01, 'kg',
        `**Ansatz:** Prozentwert $W = G \\cdot \\dfrac{p}{100}$ direkt einsetzen.

**Rechnung:** $W = 45 \\cdot \\dfrac{30}{100} = 45 \\cdot 0{,}3 = 13{,}5\\,\\text{kg}$.

**Probe:** Rückrechnung: $\\dfrac{13{,}5}{45} = 0{,}3 = 30\\%$. ✓

**Typischer Fehler:** $45 \\cdot 30 = 1350$ ohne den $/100$ — der Prozentsatz ist ein Bruchteil, nicht der Prozent-Wert.`,
        [
          'Formel: Prozentwert gleich Grundwert $\\times$ Prozentsatz $/100$.',
          '$G = 45\\,\\text{kg}$, $p = 30$.',
          'Prozent heißt "pro Hundert", also mit $0{,}3$ multiplizieren.',
        ],
      ),
      mc(
        'Sub-Goal "Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$": Bei einer Werkstoffprobe wurden $12\\,\\text{g}$ Kohlenstoff gefunden, das entspricht $4\\%$ der Gesamtmasse. Wie groß ist die Gesamtmasse?',
        ['$300\\,\\text{g}$', '$48\\,\\text{g}$', '$3\\,\\text{g}$', '$480\\,\\text{g}$'],
        0,
        `**Ansatz:** Gesucht ist $G$ (Grundwert). Formel nach $G$ auflösen: $G = \\dfrac{W \\cdot 100}{p}$.

**Rechnung:** $G = \\dfrac{12 \\cdot 100}{4} = \\dfrac{1200}{4} = 300\\,\\text{g}$.

**Probe:** $4\\%$ von $300 = 12$. ✓

**Typischer Fehler:** Den Prozentsatz als Zahl multiplizieren: $12 \\cdot 4 = 48$. Das ignoriert den $/100$-Faktor und verwechselt außerdem Multiplikation mit Division.`,
        [
          'Gesucht ist das Ganze, bekannt ist ein Anteil.',
          'Formel umstellen: $G = W \\cdot 100 / p$.',
          '$12 \\cdot 100 / 4 = ?$',
        ],
        {
          1: 'Hier wurde $12 \\cdot 4 = 48$ gerechnet — das wäre $W \\cdot p$, ohne Umstellung und ohne Faktor $100$.',
          2: '$3$ wäre $W/p = 12/4$, was zufällig $p\\%$ von $W$ ist und keinen sinnvollen Bezug zum Grundwert hat.',
          3: '$480$ entsteht aus $12 \\cdot 40$ — hier wurde $p = 4$ als $0{,}04$ interpretiert und dann falsch wieder mit $100$ hochskaliert, aber mit falschem Faktor.',
        },
      ),
      tf(
        'Sub-Goal "Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$": Wenn $W = 18$ und $G = 72$, dann ist $p = 25\\%$.',
        true,
        `**Ansatz:** Formel nach $p$ umstellen: $p = \\dfrac{W \\cdot 100}{G}$.

**Rechnung:** $p = \\dfrac{18 \\cdot 100}{72} = \\dfrac{1800}{72} = 25$. Also $25\\%$. ✓

**Probe:** $25\\%$ von $72 = 72 \\cdot 0{,}25 = 18$. ✓

**Typischer Fehler:** Aus $W/G = 0{,}25$ direkt "$0{,}25\\%$" lesen (Kommaverschiebung) statt $25\\%$.`,
        [
          'Formel nach $p$ umstellen.',
          '$p = W \\cdot 100 / G$.',
          'Dezimalergebnis $\\times 100$ gibt Prozent.',
        ],
      ),
      matching(
        'Sub-Goal "Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$": Ordne jeder Gleichung die nach der gesuchten Größe umgestellte Form zu.',
        [
          { left: 'Gesucht: Prozentwert $W$',  right: '$W = G \\cdot p/100$' },
          { left: 'Gesucht: Grundwert $G$',    right: '$G = W \\cdot 100/p$' },
          { left: 'Gesucht: Prozentsatz $p$',  right: '$p = W \\cdot 100/G$' },
          { left: 'Anteil als Dezimalzahl',    right: '$W/G = p/100$' },
        ],
        `**Ansatz:** Aus der Grundformel $W = G \\cdot p/100$ ergibt sich jede Umstellung durch Äquivalenzumformung.

**Rechnung:**
· Nach $G$: beide Seiten $\\cdot 100/p \\to G = W\\cdot 100/p$.
· Nach $p$: beide Seiten $\\cdot 100/G \\to p = W\\cdot 100/G$.

**Probe:** Einsetzen mit $G=80, p=25$: $W = 20$. Rückwärts $p = 20\\cdot 100/80 = 25$ ✓; $G = 20\\cdot 100/25 = 80$ ✓.

**Typischer Fehler:** Zähler und Nenner beim Umstellen vertauschen — führt zu $G = W\\cdot p/100$ (falsch).`,
        [
          'Drei Größen: $W$, $G$, $p$.',
          'Aus einer Gleichung drei Umstellungen.',
          'Bei jedem Umstellen Einheiten checken.',
        ],
      ),
      sorting(
        'Sub-Goal "Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$": Bringe die Schritte zur Berechnung des Prozentsatzes bei $W = 9$, $G = 60$ in die richtige Reihenfolge.',
        [
          'Grundformel aufschreiben: $W = G \\cdot p/100$',
          'Nach $p$ umstellen: $p = W \\cdot 100 / G$',
          'Werte einsetzen: $p = 9 \\cdot 100 / 60$',
          'Ausrechnen: $p = 900/60 = 15$ (also $15\\%$)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst Formel aufschreiben, dann umstellen, dann einsetzen, dann rechnen.

**Rechnung:** $p = 9 \\cdot 100 / 60 = 15$. Ergebnis: $15\\%$.

**Probe:** $15\\%$ von $60 = 9$. ✓

**Typischer Fehler:** Direkt einsetzen ohne Umformung — führt oft zu Verwechslung, welche Größe gesucht ist.`,
        [
          'Gesuchte Größe klar benennen.',
          'Formel zuerst symbolisch umstellen.',
          'Erst dann Zahlen einsetzen.',
        ],
      ),
    ],
    // [1] Wachstumsfaktor
    1: [
      ni(
        'Sub-Goal "Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$": Ein Rohr kostet $80\\,\\text{€}$ und wird um $12\\%$ teurer. Was ist der neue Preis (in €)?',
        89.6, 0.01, '€',
        `**Ansatz:** Wachstumsfaktor direkt: neuer Preis gleich alt $\\times (1 + p/100)$.

**Rechnung:** $80 \\cdot (1 + 0{,}12) = 80 \\cdot 1{,}12 = 89{,}60\\,\\text{€}$.

**Probe:** Zweiter Weg: Aufschlag $= 80 \\cdot 0{,}12 = 9{,}60$; neuer Preis $= 80 + 9{,}60 = 89{,}60$. ✓

**Typischer Fehler:** Nur den Aufschlag ausgeben ($9{,}60$) statt des neuen Gesamtpreises.`,
        [
          'Wachstumsfaktor $= 1 + p/100$.',
          'Bei Erhöhung: alt $\\times$ Faktor.',
          '$80 \\cdot 1{,}12 = ?$',
        ],
      ),
      mc(
        'Sub-Goal "Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$": Ein Laptop kostet $900\\,\\text{€}$, wird dann um $20\\%$ reduziert. Welcher Ausdruck liefert den neuen Preis direkt?',
        ['$900 \\cdot 0{,}80$', '$900 - 0{,}20$', '$900 \\cdot 1{,}20$', '$900 / 0{,}80$'],
        0,
        `**Ansatz:** Bei Rabatt ist der Wachstumsfaktor $1 - p/100$.

**Rechnung:** $p = 20$, also Faktor $1 - 0{,}20 = 0{,}80$. Neuer Preis $= 900 \\cdot 0{,}80 = 720\\,\\text{€}$.

**Probe:** $900 - 900\\cdot 0{,}20 = 900 - 180 = 720$. ✓

**Typischer Fehler:** Subtraktion $900 - 0{,}20$ — das ignoriert den Bezugsgrundwert und subtrahiert $20\\,\\text{Cent}$ statt $20\\%$.`,
        [
          'Bei Rabatt: Faktor $= 1 - p/100$.',
          'Prozent immer auf den Grundwert bezogen.',
          'Kontroll-Rechnung: alt $-$ Aufschlag/Rabatt.',
        ],
        {
          1: '$900 - 0{,}20 = 899{,}80$ — das zieht $20\\,\\text{Cent}$ ab, nicht $20\\%$. Falsches Verständnis von Prozent.',
          2: '$900 \\cdot 1{,}20$ wäre eine **Erhöhung** um $20\\%$, nicht ein Rabatt. Faktor $>1$ bedeutet Wachstum.',
          3: 'Division ist nicht die Operation für Prozent-Anwendung; das ergibt $1125$, also eine Erhöhung.',
        },
      ),
      tf(
        'Sub-Goal "Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$": Eine Zunahme um $50\\%$ entspricht dem Faktor $1{,}5$.',
        true,
        `**Ansatz:** $+50\\% \\Rightarrow $ Faktor $1 + 50/100 = 1{,}5$.

**Rechnung:** Beispielwert $100 \\cdot 1{,}5 = 150$ — entspricht Zunahme um $50$ auf $150$. ✓

**Probe:** $50\\%$ von $100 = 50$; dazuaddiert $150$. Gleiche Werte.

**Typischer Fehler:** Faktor $0{,}5$ für $+50\\%$ — das wäre eine Halbierung.`,
        [
          'Faktor $= 1 + p/100$.',
          '$p = 50 \\to 1 + 0{,}5 = 1{,}5$.',
          'Test mit konkretem Startwert.',
        ],
      ),
      matching(
        'Sub-Goal "Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$": Ordne jeder Prozent-Änderung den Wachstumsfaktor zu.',
        [
          { left: '$+25\\%$',      right: '$1{,}25$' },
          { left: '$-15\\%$',      right: '$0{,}85$' },
          { left: '$+100\\%$',     right: '$2{,}00$' },
          { left: '$-50\\%$',      right: '$0{,}50$' },
        ],
        `**Ansatz:** Faktor $= 1 + p/100$ (Zunahme) oder $1 - p/100$ (Abnahme).

**Rechnung:** $+25\\% \\to 1{,}25$; $-15\\% \\to 0{,}85$; $+100\\% \\to 2{,}00$ (Verdopplung); $-50\\% \\to 0{,}50$ (Halbierung).

**Probe:** $100 \\cdot 1{,}25 = 125$ (korrekt $+25\\%$); $100 \\cdot 0{,}50 = 50$ (korrekt $-50\\%$). ✓

**Typischer Fehler:** Bei $+100\\%$ Faktor $1$ oder $10$ nehmen — "Verdopplung" entspricht Faktor $2$.`,
        [
          'Zunahme: $1 + $ Bruchteil.',
          'Abnahme: $1 - $ Bruchteil.',
          'Beispiel: $+25\\% = 1 + 0{,}25 = 1{,}25$.',
        ],
      ),
      sorting(
        'Sub-Goal "Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$": Bringe die Schritte zur Berechnung "Temperaturabfall von $350\\,\\text{°C}$ um $12\\%$" in die richtige Reihenfolge.',
        [
          'Typ identifizieren: Abnahme $\\to$ Faktor $1 - p/100$',
          'Faktor berechnen: $1 - 0{,}12 = 0{,}88$',
          'Anwenden: $350 \\cdot 0{,}88$',
          'Ergebnis: $308\\,\\text{°C}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Der Standardweg: Abnahme-Typ $\\to$ Faktor berechnen $\\to$ multiplizieren.

**Rechnung:** $350 \\cdot 0{,}88 = 308$.

**Probe:** $350 - 350 \\cdot 0{,}12 = 350 - 42 = 308$. ✓

**Typischer Fehler:** Vorzeichen im Wachstumsfaktor vergessen und mit $1{,}12$ rechnen — liefert Zunahme statt Abnahme.`,
        [
          'Zuerst Typ (Zunahme/Abnahme) klären.',
          'Wachstumsfaktor aufbauen.',
          'Grundwert $\\times$ Faktor.',
        ],
      ),
    ],
    // [2] Zwei aufeinanderfolgende Änderungen
    2: [
      ni(
        'Sub-Goal "Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)": Ein Artikel wird zuerst um $20\\%$ verteuert, dann um $20\\%$ reduziert. Welcher Faktor ergibt sich insgesamt (auf 3 Nachkommastellen)?',
        0.96, 0.001, '',
        `**Ansatz:** Hintereinander-Wirkungen multiplizieren sich: Gesamtfaktor $= (1 + p_1/100) \\cdot (1 - p_2/100)$.

**Rechnung:** $1{,}2 \\cdot 0{,}8 = 0{,}96$ — also am Ende $4\\%$ unter dem Ausgangswert.

**Probe:** Startwert $100 \\to 100\\cdot 1{,}2 = 120 \\to 120\\cdot 0{,}8 = 96$. ✓

**Typischer Fehler:** Faktoren addieren ($+0{,}2 - 0{,}2 = 0$) und damit behaupten, der Preis sei gleich — in Wahrheit $4\\%$ niedriger wegen der Multiplikativität.`,
        [
          'Faktoren multiplizieren, nicht addieren.',
          '$1{,}2 \\cdot 0{,}8 = ?$',
          'Kontrolle mit Beispielwert $100$.',
        ],
      ),
      mc(
        'Sub-Goal "Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)": Ein Aktienkurs steigt zuerst um $30\\%$ und fällt dann um $30\\%$. Welcher Gesamteffekt bleibt?',
        ['$-9\\%$ gegenüber dem Start', '$0\\%$ (gleich)', '$+9\\%$ gegenüber dem Start', '$-30\\%$ gegenüber dem Start'],
        0,
        `**Ansatz:** Faktoren multiplizieren: $1{,}3 \\cdot 0{,}7 = 0{,}91$, also ein Faktor, der $9\\%$ unter $1$ liegt.

**Rechnung:** $0{,}91 = 1 - 0{,}09$, Gesamteffekt: $-9\\%$.

**Probe:** $100 \\to 130 \\to 130\\cdot 0{,}7 = 91$. $91$ ist $9\\,\\text{€}$ unter $100$, also $-9\\%$. ✓

**Typischer Fehler:** Annehmen, "+30, dann -30" kompensiert sich. Die zweite Prozent-Änderung bezieht sich aber auf den **gewachsenen** Zwischenwert, nicht auf den Ausgangswert.`,
        [
          'Zweite Prozent-Änderung bezieht sich auf den neuen Wert.',
          'Faktoren: $1{,}3$ und $0{,}7$.',
          'Produkt $1{,}3 \\cdot 0{,}7 = ?$',
        ],
        {
          1: '"$+30$, dann $-30$" kompensiert sich **nicht**, weil die zweite Änderung auf dem größeren Zwischenwert arbeitet.',
          2: 'Eine Erhöhung um $9\\%$ ergäbe sich aus anderen Faktoren — hier geht es nach der Erhöhung wieder unter den Ausgangswert.',
          3: '$-30\\%$ wäre nur die zweite Änderung allein. Die Kombination mit der Erhöhung dämpft den Verlust auf $-9\\%$.',
        },
      ),
      tf(
        'Sub-Goal "Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)": Nach einer Erhöhung um $10\\%$ und anschließender Reduktion um $10\\%$ bleibt der Ausgangswert exakt erhalten.',
        false,
        `**Ansatz:** Gegenbeispiel rechnen. Faktoren multiplizieren.

**Rechnung:** $1{,}1 \\cdot 0{,}9 = 0{,}99$ — also $1\\%$ unter dem Ausgang.

**Probe:** Start $100 \\to 110 \\to 99$. Differenz $-1$, nicht $0$.

**Typischer Fehler:** Die Operationen als $+10\\% - 10\\% = 0$ lesen. Prozent-Änderungen wirken aber multiplikativ auf jeweils unterschiedliche Bezugsgrößen.`,
        [
          'Multiplikativ, nicht additiv.',
          '$1{,}1 \\cdot 0{,}9 = ?$',
          'Zahlentest mit $100$.',
        ],
      ),
      matching(
        'Sub-Goal "Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)": Ordne jedem Doppel-Schritt den resultierenden Gesamtfaktor zu.',
        [
          { left: '$+10\\%$ dann $-10\\%$',   right: '$0{,}99$' },
          { left: '$+20\\%$ dann $+20\\%$',   right: '$1{,}44$' },
          { left: '$-25\\%$ dann $-25\\%$',   right: '$0{,}5625$' },
          { left: '$+50\\%$ dann $-50\\%$',   right: '$0{,}75$' },
        ],
        `**Ansatz:** Faktoren multiplizieren und prüfen.

**Rechnung:**
· $1{,}1 \\cdot 0{,}9 = 0{,}99$
· $1{,}2 \\cdot 1{,}2 = 1{,}44$
· $0{,}75 \\cdot 0{,}75 = 0{,}5625$
· $1{,}5 \\cdot 0{,}5 = 0{,}75$

**Probe:** In jedem Paar der letzte Wert $\\cdot$ Startwert ergibt den Endwert nach den beiden Änderungen.

**Typischer Fehler:** Zwei gleiche Änderungen zusammenzuzählen: $-25\\% - 25\\% = -50\\%$ ergäbe Faktor $0{,}5$. Tatsächlich: $0{,}5625$ (etwas weniger Verlust).`,
        [
          'Einzelfaktoren bilden.',
          'Multiplizieren.',
          'Endfaktor entscheidet über das Gesamtergebnis.',
        ],
      ),
      sorting(
        'Sub-Goal "Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)": Bringe die Schritte zur Analyse "Preis steigt um $40\\%$, fällt dann um $25\\%$" in die richtige Reihenfolge.',
        [
          'Einzelfaktoren: $1{,}40$ und $0{,}75$',
          'Gesamtfaktor: $1{,}40 \\cdot 0{,}75 = 1{,}05$',
          'Interpretation: Faktor $> 1 \\to$ Netto-Zunahme',
          'Prozent-Äquivalent: $1{,}05 - 1 = 0{,}05 = +5\\%$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Einzelfaktoren bilden, multiplizieren, vergleichen mit $1$.

**Rechnung:** $1{,}05$ bedeutet $+5\\%$ insgesamt.

**Probe:** $100 \\to 140 \\to 140\\cdot 0{,}75 = 105$. ✓

**Typischer Fehler:** Direkt $+40 - 25 = +15\\%$ ausrechnen. Das ignoriert den unterschiedlichen Bezugsgrundwert beim zweiten Schritt.`,
        [
          'Schritt für Schritt Faktoren bilden.',
          'Produkt = Gesamteffekt.',
          'Interpretation am Schluss.',
        ],
      ),
    ],
    // [3] Direkt vs. indirekt proportional
    3: [
      ni(
        'Sub-Goal "Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$": $5\\,\\text{kg}$ Stahl kosten $42{,}50\\,\\text{€}$. Was kosten $8\\,\\text{kg}$ (in €)?',
        68, 0.01, '€',
        `**Ansatz:** Mehr kg → mehr Preis → **direkt** proportional. Formel: $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$, nach $y_2$ auflösen: $y_2 = y_1 \\cdot \\dfrac{x_2}{x_1}$.

**Rechnung:** $y_2 = 42{,}50 \\cdot \\dfrac{8}{5} = 42{,}50 \\cdot 1{,}6 = 68\\,\\text{€}$.

**Probe:** Preis pro kg: $42{,}50 / 5 = 8{,}50\\,\\text{€}$. $8 \\cdot 8{,}50 = 68$. ✓

**Typischer Fehler:** Indirekt proportional annehmen: $5 \\cdot 42{,}50 = 8 \\cdot y \\to y = 26{,}56$. Aber hier ist mehr kg auch mehr Preis — direkte Proportionalität.`,
        [
          'Mehr kg → mehr €? → direkt proportional.',
          'Dreisatz: Preis pro kg × neue kg.',
          '$42{,}50/5 = 8{,}50$; $8 \\cdot 8{,}50 = ?$',
        ],
      ),
      mc(
        'Sub-Goal "Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$": $6$ Arbeiter bauen eine Mauer in $10\\,\\text{h}$. Wie lange brauchen $15$ Arbeiter?',
        ['$4\\,\\text{h}$', '$25\\,\\text{h}$', '$6{,}67\\,\\text{h}$', '$9\\,\\text{h}$'],
        0,
        `**Ansatz:** Mehr Arbeiter → kürzere Zeit → **indirekt** proportional. Formel: $x_1 y_1 = x_2 y_2 \\Rightarrow y_2 = \\dfrac{x_1 \\cdot y_1}{x_2}$.

**Rechnung:** $y_2 = \\dfrac{6 \\cdot 10}{15} = \\dfrac{60}{15} = 4\\,\\text{h}$.

**Probe:** Arbeiter-Stunden: $6 \\cdot 10 = 60$ und $15 \\cdot 4 = 60$. ✓

**Typischer Fehler:** Direkt proportional rechnen $15/6 \\cdot 10 = 25\\,\\text{h}$ — aber mehr Arbeiter bedeuten kürzere Arbeit, nicht längere.`,
        [
          'Mehr Arbeiter → schneller oder langsamer?',
          'Produkt Arbeiter·Zeit bleibt konstant.',
          '$6\\cdot 10 / 15 = ?$',
        ],
        {
          1: 'Direkt-proportional-Rechnung ($10 \\cdot 15/6 = 25$) — aber mehr Arbeiter machen **schneller**, nicht langsamer.',
          2: '$60/9 = 6{,}67$ — mit $9$ Arbeitern (nicht $15$) wäre das richtig. Zahlen falsch abgelesen.',
          3: 'Keine konsistente Ableitung aus den gegebenen Werten.',
        },
      ),
      tf(
        'Sub-Goal "Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$": Bei direkter Proportionalität verdoppelt sich $y$, wenn sich $x$ verdoppelt.',
        true,
        `**Ansatz:** Definition direkte Proportionalität: $y = k \\cdot x$ mit konstantem $k$.

**Rechnung:** Wenn $x \\to 2x$, dann $y \\to k\\cdot 2x = 2(kx) = 2y$. Verdopplung bleibt erhalten.

**Probe:** Beispiel: Preis $= 8{,}50 \\cdot \\text{kg}$. $5\\,\\text{kg} \\to 42{,}50$; $10\\,\\text{kg} \\to 85$ — doppelte Menge, doppelter Preis. ✓

**Typischer Fehler:** Verwechslung mit indirekter Proportionalität, bei der Verdopplung von $x$ eine Halbierung von $y$ bewirkt.`,
        [
          '$y = k \\cdot x$ ist direkte Proportionalität.',
          'Was passiert bei $x \\to 2x$?',
          'Test mit Beispiel.',
        ],
      ),
      matching(
        'Sub-Goal "Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$": Ordne jede Situation ihrem Proportionalitätstyp zu.',
        [
          { left: 'Gewicht und Preis pro kg',          right: 'direkt' },
          { left: 'Pumpenzahl und Füllzeit',           right: 'indirekt' },
          { left: 'Geschwindigkeit und Fahrzeit (feste Strecke)', right: 'indirekt' },
          { left: 'Liter-Verbrauch und Reichweite',    right: 'direkt' },
        ],
        `**Ansatz:** Frage stellen: "Wird bei mehr $x$ auch $y$ mehr (direkt) oder weniger (indirekt)?"

**Rechnung:**
· kg $\\uparrow \\Rightarrow$ € $\\uparrow$: direkt.
· Pumpen $\\uparrow \\Rightarrow$ Zeit $\\downarrow$: indirekt.
· $v \\uparrow \\Rightarrow$ $t = s/v \\downarrow$: indirekt.
· Verbrauch $\\uparrow \\Rightarrow$ Reichweite $\\uparrow$: direkt (proportional zur verfügbaren Kraftstoffmenge, wenn Verbrauch pro km konstant).

**Probe:** Bei direkt bleibt $y/x$ konstant; bei indirekt bleibt $y\\cdot x$ konstant.

**Typischer Fehler:** Automatisch bei "Zeit" auf indirekt tippen — Zeit kann auch direkt proportional sein (z. B. Reichweite und Verbrauch).`,
        [
          'Verständnisfrage: mehr → mehr oder mehr → weniger.',
          'Formel-Check: $y/x = $ const (direkt) vs. $x\\cdot y = $ const (indirekt).',
          'Typische Fälle üben.',
        ],
      ),
      sorting(
        'Sub-Goal "Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$": Bringe die Schritte zur Lösung "$4$ Maschinen brauchen $12\\,\\text{h}$, wie lange brauchen $6$?" in die richtige Reihenfolge.',
        [
          'Typ erkennen: mehr Maschinen → weniger Zeit → indirekt proportional',
          'Gleichung aufstellen: $x_1 \\cdot y_1 = x_2 \\cdot y_2$',
          'Werte einsetzen: $4 \\cdot 12 = 6 \\cdot y_2$',
          'Nach $y_2$ auflösen: $y_2 = 48/6 = 8\\,\\text{h}$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Typ zuerst bestimmen, dann Formel, dann Werte, dann Ergebnis.

**Rechnung:** $y_2 = 8\\,\\text{h}$.

**Probe:** $4\\cdot 12 = 48 = 6\\cdot 8$. ✓

**Typischer Fehler:** Typ falsch einschätzen → direkt proportional rechnen: $12\\cdot 6/4 = 18\\,\\text{h}$ — Widerspruch, weil mehr Maschinen eigentlich schneller sein sollten.`,
        [
          'Erst Typ klären.',
          'Passende Formel.',
          'Einsetzen + Auflösen.',
        ],
      ),
    ],
    // [4] Prozentpunkt vs. Prozent
    4: [
      ni(
        'Sub-Goal "Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$": Ein Mischungsverhältnis enthält $10\\%$ Kohlenstoff. Es wird um $15\\%$ erhöht (Prozentsatz nicht Prozentpunkte). Wie viel Prozent Kohlenstoff enthält es danach?',
        11.5, 0.01, '%',
        `**Ansatz:** "Um $15\\%$ erhöhen" (Prozent, nicht Prozentpunkte) heißt Wachstumsfaktor $1{,}15$ auf den **Wert** $10\\%$ anwenden.

**Rechnung:** $10\\% \\cdot 1{,}15 = 11{,}5\\%$.

**Probe:** Um $1{,}5$ Prozentpunkte erhöht von $10\\%$ auf $11{,}5\\%$. ✓

**Typischer Fehler:** "$10 + 15 = 25$" lesen — das wäre eine Erhöhung um $15$ **Prozentpunkte**, nicht um $15$ **Prozent** (vom Ausgangswert).`,
        [
          'Unterschied Prozent vs. Prozentpunkte.',
          '"Um $15\\%$ erhöht" = Faktor $1{,}15$.',
          '$10\\% \\cdot 1{,}15 = ?$',
        ],
      ),
      mc(
        'Sub-Goal "Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$": Eine Wahlbeteiligung stieg von $40\\%$ auf $45\\%$. Welche Aussage ist richtig?',
        [
          'Anstieg um $5$ Prozentpunkte oder um $12{,}5\\%$',
          'Anstieg um $5\\%$ oder um $5$ Prozentpunkte',
          'Anstieg um $12{,}5$ Prozentpunkte',
          'Die Beteiligung ist um $125\\%$ gestiegen',
        ],
        0,
        `**Ansatz:** Differenz vs. relative Änderung. Prozentpunkte = absolute Differenz; Prozent = relative Änderung.

**Rechnung:** Prozentpunkte: $45 - 40 = 5$. Relative Zunahme: $\\dfrac{5}{40} \\cdot 100 = 12{,}5\\%$.

**Probe:** Faktor $1{,}125 \\cdot 40 = 45$. ✓

**Typischer Fehler:** "Anstieg um $5\\%$" sagen, wenn $5$ Prozentpunkte gemeint sind — Missverständnis in Nachrichten und Statistiken.`,
        [
          'Prozentpunkte: Zahl hinter dem Prozentzeichen wird abgezogen.',
          'Prozent: bezieht sich auf den Ausgangswert.',
          '$5/40 = ?$',
        ],
        {
          1: '"$5\\%$" ist sprachlich mehrdeutig — korrekt sind $5$ Prozentpunkte oder $12{,}5\\%$ Zunahme (nicht beides gleich).',
          2: '$12{,}5$ Prozentpunkte wären eine Zunahme auf $52{,}5\\%$ — viel mehr als die Daten hergeben.',
          3: '$125\\%$ Zunahme entspräche Faktor $2{,}25 \\to 90\\%$ — deutlich höher als $45\\%$.',
        },
      ),
      tf(
        'Sub-Goal "Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$": Wenn ein Zinssatz von $3\\%$ auf $4\\%$ steigt, ist das eine Erhöhung um $33{,}3\\%$.',
        true,
        `**Ansatz:** Relative Änderung: $\\dfrac{4 - 3}{3} \\cdot 100\\%$.

**Rechnung:** $\\dfrac{1}{3} = 0{,}333\\ldots = 33{,}3\\%$. Zum gleichen Sachverhalt: $+1$ Prozentpunkt.

**Probe:** $3 \\cdot 1{,}333\\ldots = 4$. ✓

**Typischer Fehler:** "Nur $1\\%$ mehr" sagen — das ist die absolute Differenz der Prozentzahlen, nicht die relative Zunahme.`,
        [
          'Zunahme relativ zum Ausgangswert.',
          '$(4-3)/3 \\cdot 100$.',
          'Absolute Differenz = Prozentpunkte.',
        ],
      ),
      matching(
        'Sub-Goal "Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$": Ordne jeder Änderung die korrekte sprachliche Formulierung zu.',
        [
          { left: 'Von $20\\%$ auf $25\\%$, absolut',           right: '$+5$ Prozentpunkte' },
          { left: 'Von $20\\%$ auf $25\\%$, relativ',           right: '$+25\\%$' },
          { left: 'Von $50\\%$ auf $45\\%$, absolut',           right: '$-5$ Prozentpunkte' },
          { left: 'Von $50\\%$ auf $45\\%$, relativ',           right: '$-10\\%$' },
        ],
        `**Ansatz:** Absolut → Differenz in Prozentpunkten. Relativ → $(p_2 - p_1)/p_1 \\cdot 100\\%$.

**Rechnung:**
· $25-20 = 5$ Prozentpunkte; $(5/20)\\cdot 100 = 25\\%$.
· $45-50 = -5$ Prozentpunkte; $(-5/50)\\cdot 100 = -10\\%$.

**Probe:** $20 \\cdot 1{,}25 = 25$; $50 \\cdot 0{,}9 = 45$. ✓

**Typischer Fehler:** Relativer und absoluter Sprachgebrauch werden vermengt — führt zu dramatischen Missverständnissen in der Wirtschaftsberichterstattung.`,
        [
          'Absolut = Differenz, Einheit Prozentpunkte.',
          'Relativ = Anteil am Ausgangswert, Einheit Prozent.',
          'Beides klar trennen.',
        ],
      ),
      sorting(
        'Sub-Goal "Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$": Bringe die Schritte zur Beantwortung "Wahlergebnis stieg von $8\\%$ auf $10\\%$ — um wie viel Prozent relativ?" in die richtige Reihenfolge.',
        [
          'Differenz berechnen: $10 - 8 = 2$ Prozentpunkte',
          'Relativ zum Ausgangswert bilden: $2/8$',
          'In Prozent umrechnen: $2/8 \\cdot 100 = 25\\%$',
          'Antwort formulieren: Anstieg um $2$ Prozentpunkte oder um $25\\%$ relativ',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Vier saubere Schritte: Differenz → Bezug auf Ausgangswert → Prozentsatz → klare Sprache.

**Rechnung:** $+25\\%$ relativ, $+2$ Prozentpunkte absolut.

**Probe:** $8 \\cdot 1{,}25 = 10$. ✓

**Typischer Fehler:** Absolute Differenz als "relative Zunahme" präsentieren (z. B. "$+2\\%$") — das ist die Hauptquelle für statistische Fehlinterpretationen.`,
        [
          'Differenz zuerst (absolut).',
          'Bezugsgröße ist immer der Ausgangswert.',
          'Sprachliche Trennung konsequent einhalten.',
        ],
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // alg-0-4 — Termumformung & Gleichungen  (5 subGoals, je 5 Aufgaben)
  // ───────────────────────────────────────────────────────────────────────
  'alg-0-4': {
    // [0] Gleichartige Terme
    0: [
      mc(
        'Sub-Goal "Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren": Vereinfache $4a + 3b - 2a + 5b$.',
        ['$2a + 8b$', '$10ab$', '$2a + 2b$', '$12 a b$'],
        0,
        `**Ansatz:** Nur Terme mit **gleicher Variable und gleichem Exponenten** dürfen zusammengefasst werden. $a$-Terme und $b$-Terme getrennt behandeln.

**Rechnung:** $a$-Terme: $4a - 2a = 2a$. $b$-Terme: $3b + 5b = 8b$. Ergebnis: $2a + 8b$.

**Probe:** Setze $a=1, b=1$: $4+3-2+5 = 10$ und $2+8 = 10$. ✓

**Typischer Fehler:** $a$ und $b$ als gleich ansehen und $4+3-2+5 = 10 \\to 10ab$ schreiben. Unterschiedliche Variablen bleiben unterschiedliche Terme.`,
        [
          'Welche Terme haben dieselbe Variable?',
          '$a$-Terme zusammen, $b$-Terme zusammen.',
          'Nur Koeffizienten addieren, Variable bleibt stehen.',
        ],
        {
          1: '$10ab$ würde bedeuten, dass $a$ und $b$ multiplikativ verbunden sind — hier sind es aber getrennte Summanden mit unterschiedlichen Variablen.',
          2: 'Hier wurde vermutlich falsch zusammengefasst. $4-2=2$ ist für $a$ richtig; für $b$ sollte $3+5=8$ herauskommen, nicht $2$.',
          3: 'Gleicher Fehler wie Option 1: unterschiedliche Variablen darf man nicht multiplizieren, wenn sie nur als Summanden vorkommen.',
        },
      ),
      ni(
        'Sub-Goal "Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren": Vereinfache $3x^2 + 5x - 2x^2 + x$ und werte für $x = 2$ aus.',
        16, 0.01, '',
        `**Ansatz:** Terme gleicher Potenz zusammenfassen. $x^2$ und $x$ sind NICHT gleichartig — getrennt halten.

**Rechnung:** $x^2$-Terme: $3x^2 - 2x^2 = x^2$. $x$-Terme: $5x + x = 6x$. Vereinfacht: $x^2 + 6x$. Für $x=2$: $4 + 12 = 16$.

**Probe:** Ausgangsterm direkt bei $x=2$: $3\\cdot 4 + 5\\cdot 2 - 2\\cdot 4 + 2 = 12 + 10 - 8 + 2 = 16$. ✓

**Typischer Fehler:** $x^2$ und $x$ mischen (als wären sie gleichartig) oder Vorzeichen bei $-2x^2$ verlieren und $3+2 = 5x^2$ rechnen.`,
        [
          'Terme mit gleichem Exponenten zusammenfassen.',
          '$x^2 \\neq x$ — getrennt halten.',
          'Erst vereinfachen, dann einsetzen.',
        ],
      ),
      tf(
        'Sub-Goal "Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren": Die Terme $3x^2$ und $5x$ sind gleichartig und können zu $8x^2$ oder $8x$ zusammengefasst werden.',
        false,
        `**Ansatz:** Gleichartig heißt: identische Variable **UND** identischer Exponent.

**Rechnung:** $3x^2$ und $5x$ haben zwar dieselbe Variable $x$, aber unterschiedliche Exponenten ($2$ vs. $1$). Sie sind **nicht** gleichartig und bleiben separat stehen: $3x^2 + 5x$.

**Probe:** Zahlentest $x=2$: $3\\cdot 4 + 5\\cdot 2 = 22$. Hingegen $8x^2 = 32$ oder $8x = 16$ — beide falsch.

**Typischer Fehler:** Koeffizienten "blind" addieren ohne die Struktur zu prüfen. Potenzen sind wie unterschiedliche Einheiten — nicht mischbar.`,
        [
          'Bedingung für gleichartig: gleiche Variable UND gleicher Exponent.',
          'Check: $x^2$ vs. $x$ — ist der Exponent gleich?',
          'Zahlentest mit $x=2$ klärt schnell.',
        ],
      ),
      matching(
        'Sub-Goal "Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren": Ordne jedem Ausdruck die vereinfachte Form zu.',
        [
          { left: '$5x + 3x - x$',           right: '$7x$' },
          { left: '$2y^2 + 3y - y^2$',       right: '$y^2 + 3y$' },
          { left: '$a + 2a + 3 - a$',        right: '$2a + 3$' },
          { left: '$4x^3 - x^3 + x$',        right: '$3x^3 + x$' },
        ],
        `**Ansatz:** Jede Gruppe gleichartiger Terme (gleiche Potenz, gleiche Variable) separat zusammenfassen.

**Rechnung:**
· $5x+3x-x = (5+3-1)x = 7x$.
· $2y^2 - y^2 = y^2$; plus $3y$: $y^2 + 3y$.
· $a+2a-a = 2a$; plus Konstante $3$: $2a + 3$.
· $4x^3 - x^3 = 3x^3$; plus $x$: $3x^3 + x$.

**Probe:** Zahlentest jeder Zeile mit $x=1$: $5+3-1=7$ und $7\\cdot 1=7$. ✓

**Typischer Fehler:** Konstante zur Variablen dazuschreiben: $2a+3 \\to 5a$ oder $3y$ zu $y^2$-Term "vereinigen".`,
        [
          'Kategorien: $x^3, x^2, x^1, x^0$ (Konstante).',
          'Nur gleiche Kategorien zusammenfassen.',
          'Zahlentest zur Bestätigung.',
        ],
      ),
      sorting(
        'Sub-Goal "Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren": Bringe die Schritte zur Vereinfachung von $6xy - 2y + 3xy - 4y + y$ in die richtige Reihenfolge.',
        [
          'Gleichartige identifizieren: $xy$-Terme und $y$-Terme',
          '$xy$-Terme zusammenfassen: $6xy + 3xy = 9xy$',
          '$y$-Terme zusammenfassen: $-2y - 4y + y = -5y$',
          'Endausdruck: $9xy - 5y$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Nach Variablen-Gruppen sortieren, dann jede Gruppe addieren.

**Rechnung:** Ergebnis $9xy - 5y$.

**Probe:** Zahlentest $x=1, y=1$: $6-2+3-4+1 = 4$ und $9-5 = 4$. ✓

**Typischer Fehler:** $xy$ und $y$ als gleichartig ansehen und zusammenfassen — $xy$ ist eine Produktgruppe, $y$ eine lineare Variable.`,
        [
          'Erst gruppieren.',
          'Dann Koeffizienten verrechnen.',
          'Ergebnis zusammenschreiben.',
        ],
      ),
    ],
    // [1] Distributivgesetz
    1: [
      mc(
        'Sub-Goal "Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)": Multipliziere aus: $3(2x + 5)$.',
        ['$6x + 15$', '$6x + 5$', '$2x + 15$', '$3 \\cdot 2x \\cdot 5$'],
        0,
        `**Ansatz:** Distributivgesetz: der Faktor vor der Klammer wirkt auf **jeden** Summanden in der Klammer.

**Rechnung:** $3(2x + 5) = 3\\cdot 2x + 3\\cdot 5 = 6x + 15$.

**Probe:** Zahlentest $x=1$: $3(2+5) = 21$ und $6+15 = 21$. ✓

**Typischer Fehler:** Die $3$ nur auf den ersten Summanden anwenden: $6x + 5$. Das Distributivgesetz verlangt Anwendung auf **beide**.`,
        [
          'Faktor mal Klammerinhalt = Faktor mal jedes Klammerglied.',
          '$3 \\cdot 2x = ?$ und $3 \\cdot 5 = ?$',
          'Beide Produkte addieren.',
        ],
        {
          1: 'Die $3$ wurde nur auf den ersten Summanden angewandt. Distributiv heißt: auf jeden Summanden verteilen.',
          2: 'Die $3$ wurde nur auf den zweiten Summanden angewandt — gleicher Fehler wie Option 1, andere Richtung.',
          3: 'Das ist multiplikative Verkettung, keine Klammer-Auflösung. Gemeint ist Summe, nicht Produkt.',
        },
      ),
      ni(
        'Sub-Goal "Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)": Klammer aus $12x + 18$ den größten gemeinsamen Faktor aus. Welcher Faktor ergibt sich vor der Klammer?',
        6, 0, '',
        `**Ansatz:** Größter gemeinsamer Faktor (ggT) von $12$ und $18$ herausziehen.

**Rechnung:** ggT$(12, 18) = 6$. $12x + 18 = 6(2x + 3)$.

**Probe:** $6 \\cdot 2x = 12x$ ✓ und $6 \\cdot 3 = 18$ ✓.

**Typischer Fehler:** Einen **kleineren** gemeinsamen Faktor (z. B. $2$ oder $3$) herausziehen statt des größten, Klammer bleibt nicht optimal vereinfacht.`,
        [
          'ggT$(12, 18) = ?$',
          'Größten gemeinsamen Faktor vor die Klammer schreiben.',
          'Kontrolle: Zurückmultiplizieren muss den Ausgangsterm geben.',
        ],
      ),
      tf(
        'Sub-Goal "Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)": Es gilt $a(b - c) = ab - ac$.',
        true,
        `**Ansatz:** Distributivgesetz funktioniert genauso mit Minus — der Faktor wird auf beide Summanden angewandt, das Vorzeichen wird mitgenommen.

**Rechnung:** Formell: $a(b - c) = a\\cdot b + a\\cdot(-c) = ab - ac$.

**Probe:** Zahlentest $a=2, b=5, c=3$: $2(5-3) = 4$; $10 - 6 = 4$. ✓

**Typischer Fehler:** Bei Minus nur den ersten Summanden multiplizieren: $a(b - c) = ab - c$. Das Minus gehört zum $c$, und der Faktor $a$ muss auch dorthin.`,
        [
          'Minus als Vorzeichen von $c$ lesen.',
          'Faktor verteilt sich ebenfalls auf den negativen Teil.',
          'Zahlentest zur Bestätigung.',
        ],
      ),
      matching(
        'Sub-Goal "Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)": Ordne jedem Term seine ausmultiplizierte Form zu.',
        [
          { left: '$5(x + 3)$',              right: '$5x + 15$' },
          { left: '$2(4a - 3b)$',            right: '$8a - 6b$' },
          { left: '$-(y + 7)$',              right: '$-y - 7$' },
          { left: '$x(x + 2)$',              right: '$x^2 + 2x$' },
        ],
        `**Ansatz:** Faktor vor Klammer wirkt auf jeden Summanden. Bei $-(\\ldots)$ ist der Faktor $-1$.

**Rechnung:** Letzte Zeile: $x\\cdot x = x^2$ (Potenz-Regel), $x\\cdot 2 = 2x$.

**Probe:** Jeder Fall Zahlentest: Zeile 3 mit $y=2$: $-(2+7) = -9$ und $-2 - 7 = -9$. ✓

**Typischer Fehler:** Bei $x(x+2)$ statt $x^2$ fälschlich $2x$ schreiben — das Produkt $x \\cdot x$ mit der Summe $x+x$ verwechseln.`,
        [
          'Faktor auf jeden Summanden anwenden.',
          'Vorzeichen mitschleifen.',
          '$x \\cdot x = x^2$.',
        ],
      ),
      sorting(
        'Sub-Goal "Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)": Bringe die Schritte zur Vereinfachung von $2(3x + 4) - (x - 5)$ in die richtige Reihenfolge.',
        [
          'Erste Klammer ausmultiplizieren: $6x + 8$',
          'Minus vor zweiter Klammer als $-1$ lesen und ausmultiplizieren: $-x + 5$',
          'Terme zusammenschreiben: $6x + 8 - x + 5$',
          'Gleichartige zusammenfassen: $5x + 13$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Jede Klammer einzeln distributiv auflösen, dann gleichartig zusammenfassen.

**Rechnung:** Endergebnis $5x + 13$.

**Probe:** Zahlentest $x=1$: Ausgang $2(3+4) - (1-5) = 14 + 4 = 18$. Ergebnis $5+13 = 18$. ✓

**Typischer Fehler:** Das Minus vor der zweiten Klammer ignorieren oder nur auf den ersten Summanden anwenden → $-x - 5$ statt $-x + 5$.`,
        [
          'Klammer für Klammer auflösen.',
          'Minus vor Klammer = Faktor $-1$.',
          'Zuletzt gleichartige Terme sammeln.',
        ],
      ),
    ],
    // [2] Binomische Formeln
    2: [
      mc(
        'Sub-Goal "Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$": Multipliziere aus: $(x + 3)^2$.',
        ['$x^2 + 6x + 9$', '$x^2 + 9$', '$x^2 + 3x + 9$', '$2x + 6$'],
        0,
        `**Ansatz:** Erste binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$.

**Rechnung:** $a = x, b = 3$. $(x+3)^2 = x^2 + 2\\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$.

**Probe:** Zahlentest $x=2$: $(2+3)^2 = 25$ und $4 + 12 + 9 = 25$. ✓

**Typischer Fehler:** Den gemischten Term $2ab$ vergessen: $(x+3)^2 \\to x^2 + 9$. Das ist ein klassischer Anfängerfehler.`,
        [
          'Erste binomische Formel anwenden.',
          'Drei Summanden: $a^2$, $2ab$, $b^2$.',
          '$(a+b)^2 \\neq a^2 + b^2$.',
        ],
        {
          1: 'Der gemischte Term $2ab = 6x$ wurde vergessen. $(a+b)^2$ hat drei Summanden, nicht zwei.',
          2: '$2ab$ wurde berechnet, aber als $3x$ statt $6x$ — Faktor $2$ übersehen.',
          3: '$2x + 6 = 2(x+3)$ ist eine Auflösung der Klammer, nicht das Quadrat davon.',
        },
      ),
      ni(
        'Sub-Goal "Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$": Berechne mithilfe der dritten binomischen Formel $(x + 4)(x - 4)$ für $x = 5$.',
        9, 0, '',
        `**Ansatz:** Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$.

**Rechnung:** $(x+4)(x-4) = x^2 - 16$. Für $x=5$: $25 - 16 = 9$.

**Probe:** Direkt ausrechnen: $(5+4)(5-4) = 9\\cdot 1 = 9$. ✓

**Typischer Fehler:** $(a+b)(a-b) = a^2 + b^2$ schreiben — das Minus unterschlagen. Das Produkt liefert exakt $a^2 - b^2$.`,
        [
          '3. binomische Formel: Produkt aus Summe und Differenz.',
          '$(a+b)(a-b) = a^2 - b^2$.',
          'Erst vereinfachen, dann einsetzen.',
        ],
      ),
      tf(
        'Sub-Goal "Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$": Es gilt $(a - b)^2 = a^2 - b^2$.',
        false,
        `**Ansatz:** Gegenbeispiel. Das wäre eine Verwechslung von 2. und 3. binomischer Formel.

**Rechnung:** Korrekt: $(a-b)^2 = a^2 - 2ab + b^2$ (mit dem gemischten Term). $(a+b)(a-b) = a^2 - b^2$ hingegen.

**Probe:** Zahlentest $a=5, b=3$: $(5-3)^2 = 4$. Hingegen $25-9 = 16$. $4 \\neq 16$. ✓

**Typischer Fehler:** Binomische Formeln verwechseln. Merksatz: Quadrat einer Differenz hat **drei** Summanden, Produkt Summe-Differenz hat **zwei**.`,
        [
          'Zahlentest $a=5, b=3$.',
          'Quadrat ausmultiplizieren: $(5-3)(5-3)$.',
          'Vergleich mit $25-9$.',
        ],
      ),
      matching(
        'Sub-Goal "Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$": Ordne jeder Ausdruck die richtige binomische Formel-Anwendung zu.',
        [
          { left: '$(x + 2)^2$',         right: '$x^2 + 4x + 4$' },
          { left: '$(x - 2)^2$',         right: '$x^2 - 4x + 4$' },
          { left: '$(x + 2)(x - 2)$',    right: '$x^2 - 4$' },
          { left: '$(2x + 3)^2$',        right: '$4x^2 + 12x + 9$' },
        ],
        `**Ansatz:** 1./2./3. binomische Formel richtig identifizieren.

**Rechnung:**
· $(x+2)^2 = x^2 + 4x + 4$ (1. BF).
· $(x-2)^2 = x^2 - 4x + 4$ (2. BF).
· $(x+2)(x-2) = x^2 - 4$ (3. BF).
· $(2x+3)^2 = (2x)^2 + 2\\cdot 2x\\cdot 3 + 9 = 4x^2 + 12x + 9$ (1. BF mit zusammengesetztem $a$).

**Probe:** Zahlentest bei letzter Zeile mit $x=1$: $(5)^2 = 25$ und $4+12+9 = 25$. ✓

**Typischer Fehler:** Bei $(2x+3)^2$ den Faktor $2$ nicht quadrieren: $2x^2 + 12x + 9$ ist falsch. Richtig ist $(2x)^2 = 4x^2$.`,
        [
          'Binomische Formel am Vorzeichen erkennen.',
          'Beim Quadrieren zusammengesetzter Ausdrücke jedes Teil quadrieren.',
          'Zahlentest klärt Zweifel.',
        ],
      ),
      sorting(
        'Sub-Goal "Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$": Bringe die Schritte zur Auswertung von $(3x - 5)^2$ in die richtige Reihenfolge.',
        [
          'Binomische Formel identifizieren: 2. BF mit $a = 3x, b = 5$',
          '$a^2$ berechnen: $(3x)^2 = 9x^2$',
          '$2ab$ berechnen: $2 \\cdot 3x \\cdot 5 = 30x$',
          'Zusammensetzen mit Vorzeichen: $9x^2 - 30x + 25$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Schrittweise: Formel wählen → Einzelteile berechnen → mit korrektem Vorzeichen zusammensetzen.

**Rechnung:** Endergebnis $9x^2 - 30x + 25$.

**Probe:** Zahlentest $x=1$: $(3-5)^2 = 4$ und $9 - 30 + 25 = 4$. ✓

**Typischer Fehler:** Den Faktor $3$ in $(3x)^2$ vergessen zu quadrieren: falsch $3x^2$ statt $9x^2$.`,
        [
          'Erst identifizieren, dann rechnen.',
          'Jeden Summanden einzeln aufbauen.',
          'Vorzeichen am Schluss überprüfen.',
        ],
      ),
    ],
    // [3] Äquivalenzumformungen
    3: [
      ni(
        'Sub-Goal "Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen": Löse die Gleichung $5x - 7 = 2x + 8$ nach $x$.',
        5, 0, '',
        `**Ansatz:** Äquivalenzumformung. $x$-Terme auf eine Seite, Konstanten auf die andere.

**Rechnung:**
$5x - 7 = 2x + 8$  $|-2x$
$3x - 7 = 8$       $|+7$
$3x = 15$          $|:3$
$x = 5$.

**Probe:** $5\\cdot 5 - 7 = 18$ und $2\\cdot 5 + 8 = 18$. ✓

**Typischer Fehler:** Nur auf einer Seite umformen oder das Vorzeichen beim Rüberbringen verwechseln.`,
        [
          'Was auf der linken Seite fliegt raus?',
          '$x$-Terme links, Zahlen rechts.',
          'Zum Schluss durch Koeffizient von $x$ dividieren.',
        ],
      ),
      mc(
        'Sub-Goal "Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen": Welche Umformung führt $3x + 6 = 15$ direkt auf $x + 2 = 5$?',
        ['Beide Seiten durch $3$ teilen', 'Beide Seiten $+ 3$', 'Beide Seiten $\\cdot 3$', 'Links $-6$, rechts nichts'],
        0,
        `**Ansatz:** Äquivalenzumformung, die auf beiden Seiten gleichzeitig wirkt, um die Gleichung gleichwertig umzuformen.

**Rechnung:** $3x + 6 = 15$ $|:3$ → $x + 2 = 5$.

**Probe:** Zurück: $3(x+2) = 3\\cdot 5 \\to 3x + 6 = 15$. ✓

**Typischer Fehler:** Nur auf einer Seite umformen oder die Division auf die Summanden verteilen ohne Distributivgesetz.`,
        [
          'Beide Seiten: was macht aus $3x + 6$ den Term $x + 2$?',
          'Division durch $3$ auf alle Summanden.',
          'Kontrolle: $3 \\cdot (x+2) = 3x + 6$.',
        ],
        {
          1: '$+3$ gibt $3x + 9 = 18$, nicht $x + 2 = 5$. Ohne Multiplikation kommt der Faktor $3$ vor $x$ nicht weg.',
          2: '$\\cdot 3$ gibt $9x + 18 = 45$ — Koeffizienten werden größer, nicht kleiner.',
          3: 'Nur eine Seite umformen verletzt die Äquivalenz. Gleichheit bleibt nur bei symmetrischer Operation.',
        },
      ),
      tf(
        'Sub-Goal "Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen": Beim Lösen einer Gleichung darf man beide Seiten durch einen beliebigen Term teilen, auch durch $0$.',
        false,
        `**Ansatz:** Division durch $0$ ist nicht definiert und kann echte Lösungen zerstören.

**Rechnung:** Beispiel $x\\cdot(x-3) = 0$. Teilen durch $(x-3)$ setzt voraus, dass $(x-3) \\neq 0$ — sonst fällt die Lösung $x=3$ aus der Betrachtung heraus.

**Probe:** $x = 3$ löst die Gleichung, aber nach Division durch $(x-3)$ steht nur noch $x = 0$ da.

**Typischer Fehler:** "Einfach auf beiden Seiten durch den Term teilen" ohne zu prüfen, ob er Null werden kann — klassischer Schul- und Uni-Fehler.`,
        [
          'Division durch $0$ ist verboten.',
          'Bei Termen: Fallunterscheidung, wenn Term Null werden kann.',
          'Beispiel: $x(x-3) = 0$.',
        ],
      ),
      matching(
        'Sub-Goal "Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen": Ordne jeder Gleichung die erste sinnvolle Äquivalenzumformung zu.',
        [
          { left: '$2x + 5 = 11$',    right: 'beide Seiten $-5$' },
          { left: '$3x = 18$',        right: 'beide Seiten $:3$' },
          { left: '$x/4 = 7$',        right: 'beide Seiten $\\cdot 4$' },
          { left: '$\\sqrt{x} = 3$',  right: 'beide Seiten quadrieren' },
        ],
        `**Ansatz:** Die passende Gegenoperation zum Koeffizienten/zur Operation, die $x$ umgibt.

**Rechnung:** Für jede Gleichung der schnellste Weg zur Isolation von $x$.

**Probe:** Bei jeder Zeile führt die Umformung zu einer einfacheren Form ($x = \\ldots$ oder deutlich näher).

**Typischer Fehler:** Beim Wurzelziehen Probe vergessen (Scheinlösungen). Ansonsten die Gegenoperation mit der gleichen Operation verwechseln.`,
        [
          'Was umgibt $x$? Was ist die Umkehrung?',
          'Bei $+5$ ist es $-5$; bei $\\cdot 3$ ist es $:3$.',
          'Wurzel gegen Quadrieren (mit Probe).',
        ],
      ),
      sorting(
        'Sub-Goal "Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen": Bringe die Schritte zur Lösung von $\\dfrac{x+1}{2} = 4$ in die richtige Reihenfolge.',
        [
          'Nenner beseitigen: beide Seiten $\\cdot 2$',
          'Gleichung nach Multiplikation: $x + 1 = 8$',
          'Konstante beseitigen: beide Seiten $-1$',
          'Lösung: $x = 7$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Erst Nenner weg, dann Konstante, dann Koeffizient (hier nicht nötig).

**Rechnung:** $x = 7$.

**Probe:** $(7+1)/2 = 4$. ✓

**Typischer Fehler:** Nur den Zähler mit $2$ multiplizieren, nicht die rechte Seite. Äquivalenzumformung muss **beidseitig** sein.`,
        [
          'Strategie: Nenner zuerst.',
          'Dann Summanden.',
          'Am Ende Koeffizient.',
        ],
      ),
    ],
    // [4] Quadrieren → Probe
    4: [
      ni(
        'Sub-Goal "Beim Quadrieren Probe nötig (Scheinlösungen möglich)": Löse $\\sqrt{x + 4} = x - 2$ und gib die einzige gültige Lösung an.',
        5, 0, '',
        `**Ansatz:** Beide Seiten quadrieren, quadratische Gleichung lösen, mit Probe filtern.

**Rechnung:** $(x+4) = (x-2)^2 = x^2 - 4x + 4 \\Rightarrow 0 = x^2 - 5x = x(x-5)$. Lösungen $x=0$ und $x=5$.

Probe bei $x=0$: $\\sqrt{4} = 2 \\neq 0-2 = -2$. **Scheinlösung** (rechte Seite negativ, Wurzel positiv).

Probe bei $x=5$: $\\sqrt{9} = 3 = 5-2$. ✓

**Probe:** Einzige gültige Lösung: $x=5$.

**Typischer Fehler:** Scheinlösungen beibehalten. Quadrieren ist **keine** Äquivalenzumformung — es erzeugt möglicherweise neue Lösungen, die der Originalgleichung nicht genügen.`,
        [
          'Quadrieren beider Seiten.',
          'Quadratische Gleichung nach $x$ lösen.',
          'Beide Kandidaten in die Originalgleichung einsetzen, Scheinlösung streichen.',
        ],
      ),
      mc(
        'Sub-Goal "Beim Quadrieren Probe nötig (Scheinlösungen möglich)": Warum ist Quadrieren keine Äquivalenzumformung?',
        [
          'Aus $a = b$ folgt $a^2 = b^2$, aber aus $a^2 = b^2$ folgt nur $|a| = |b|$ (nicht $a = b$)',
          'Quadrieren erhält die Vorzeichen immer',
          'Quadrieren ist verboten in Gleichungen',
          'Es entstehen niemals zusätzliche Lösungen',
        ],
        0,
        `**Ansatz:** Eine Äquivalenzumformung lässt Lösungsmenge unverändert. Quadrieren vernichtet Vorzeicheninformation.

**Rechnung:** $x = 3$ und $x = -3$ quadrieren beide zu $x^2 = 9$. Aus $x^2 = 9$ sind beide Kandidaten, aber ursprünglich nur einer korrekt.

**Probe:** Quadrieren erhöht den Grad der Gleichung und kann Scheinlösungen erzeugen.

**Typischer Fehler:** Glauben, Quadrieren sei harmlos. Deshalb ist **Probe Pflicht** bei jeder Wurzelgleichung.`,
        [
          'Vorzeicheninformation.',
          'Aus $a^2 = b^2$ folgt $a = \\pm b$.',
          'Beispiel: $x = 3$ und $x = -3$.',
        ],
        {
          1: 'Vorzeichen geht beim Quadrieren verloren — $(+3)^2 = (-3)^2$. Quadrieren kann Scheinlösungen erzeugen.',
          2: 'Quadrieren ist nicht verboten, aber man muss Probe machen, um Scheinlösungen zu filtern.',
          3: 'Quadrieren kann zusätzliche Lösungen einführen — genau deshalb ist die Probe nötig.',
        },
      ),
      tf(
        'Sub-Goal "Beim Quadrieren Probe nötig (Scheinlösungen möglich)": Nach dem Quadrieren einer Gleichung ist eine Probe in der Originalgleichung notwendig, um Scheinlösungen zu erkennen.',
        true,
        `**Ansatz:** Quadrieren ist keine Äquivalenzumformung → Probe Pflicht.

**Rechnung:** Jede Lösungs-Kandidatin in die **ursprüngliche** Gleichung (nicht in die quadrierte) einsetzen und prüfen, ob beide Seiten gleich sind.

**Probe:** Beispiel $\\sqrt{x} = -2$ hat keine Lösung (linke Seite $\\geq 0$), aber Quadrieren liefert $x = 4$, das in die Originalgleichung eingesetzt die Gleichung nicht erfüllt.

**Typischer Fehler:** Probe im quadrierten Ausdruck statt im Original machen — das übergeht das eigentliche Filterkriterium.`,
        [
          'Quadrieren ändert ggf. die Lösungsmenge.',
          'Probe: Kandidaten in Originalgleichung einsetzen.',
          'Nicht im quadrierten, sondern im ursprünglichen Ausdruck.',
        ],
      ),
      matching(
        'Sub-Goal "Beim Quadrieren Probe nötig (Scheinlösungen möglich)": Ordne jedem Kandidaten den Probe-Ausgang bei der Gleichung $\\sqrt{2x+3} = x$ zu (Lösungen: $x^2 - 2x - 3 = 0 \\to x = 3, x = -1$).',
        [
          { left: '$x = 3$',                 right: 'gültige Lösung' },
          { left: '$x = -1$',                right: 'Scheinlösung (rechte Seite negativ)' },
          { left: 'Ursache für Scheinlösung', right: 'Quadrieren ist keine Äquivalenzumformung' },
          { left: 'Fazit',                   right: 'Nur $x = 3$ ist Lösung' },
        ],
        `**Ansatz:** Beide Lösungen in Originalgleichung einsetzen und $\\sqrt{\\ldots} \\geq 0$ prüfen.

**Rechnung:**
· $x=3$: $\\sqrt{9} = 3$ ✓.
· $x=-1$: $\\sqrt{1} = 1$, aber rechts $-1$. $1 \\neq -1$ → Scheinlösung.

**Probe:** Einzige gültige Lösung: $x=3$.

**Typischer Fehler:** Die $-1$ trotz negativer rechter Seite akzeptieren.`,
        [
          'Quadrieren kann Scheinlösungen hinzufügen.',
          'Probe in der Originalgleichung.',
          'Bei $\\sqrt{\\ldots} = \\ldots$ muss die rechte Seite $\\geq 0$ sein.',
        ],
      ),
      sorting(
        'Sub-Goal "Beim Quadrieren Probe nötig (Scheinlösungen möglich)": Bringe die Schritte zur vollständigen Lösung von $\\sqrt{x+6} = x$ in die richtige Reihenfolge.',
        [
          'Beide Seiten quadrieren: $x + 6 = x^2$',
          'Auf Normalform: $x^2 - x - 6 = 0$',
          'Lösungen: $x = 3$ oder $x = -2$',
          'Probe: nur $x = 3$ erfüllt die Originalgleichung ($x = -2$ ist Scheinlösung)',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Quadrieren → quadratische Gleichung → Lösungen → Probe.

**Rechnung:** $x=3$: $\\sqrt{9} = 3$ ✓. $x=-2$: $\\sqrt{4} = 2 \\neq -2$. Scheinlösung.

**Probe:** Einzige gültige Lösung $x=3$.

**Typischer Fehler:** Beide Kandidaten ohne Probe angeben — dann steht $x=-2$ fälschlich als Lösung.`,
        [
          'Quadrieren der Wurzel.',
          'Quadratische Gleichung lösen.',
          'Probe in Originalgleichung.',
        ],
      ),
    ],
  },

}
