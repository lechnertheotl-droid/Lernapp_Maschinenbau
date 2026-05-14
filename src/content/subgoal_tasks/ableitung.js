// ═══════════════════════════════════════════════════════════════════════════
// Ableitung — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: Objekt mit Sub-Goal-Index als Key, ARRAY von Aufgaben als Value.
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert (die UI rendert das Sub-Goal-Label
//     automatisch als Header — daher KEIN "Sub-Goal '...':"-Prefix in der Frage)
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//   - pedagogy-Tag matched die Matrix-Zeile (stage × subGoal × type × uses)
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const ableitungSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // abl-2-1 — Produktregel  (5 subGoals × 5 Stufen = 25 Matrix-Aufgaben)
  //   SG 0: pr-formel          — (f·g)' = f'g + fg'
  //   SG 1: pr-falle           — (fg)' ≠ f'·g'
  //   SG 2: pr-geometrie       — Rechteck-Bild
  //   SG 3: pr-dreifach        — (fgh)' = f'gh + fg'h + fgh'
  //   SG 4: pr-vereinfachen    — Ausklammern nach dem Ableiten
  // ────────────────────────────────────────────────────────────────────────
  'abl-2-1': {

    // ── [0] pr-formel — Produktregel-Formel ────────────────────────────
    0: [
      // (1) recognize · true-false · pr-formel
      tag(
        tf(
          'Die Produktregel lautet $(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$ — beide Summanden kommen mit $+$, und in jedem Summanden ist genau eine der beiden Funktionen abgeleitet.',
          true,
          `**Ansatz:** Auswendig-Form der Produktregel rekapitulieren — zwei Summanden, jeder enthält eine Ableitung.

**Rechnung:** Die Formel $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$ stimmt: Im ersten Summanden ist $f$ abgeleitet ($f'$), $g$ steht ungeleitet daneben; im zweiten Summanden ist $g$ abgeleitet ($g'$), $f$ steht ungeleitet daneben.

**Probe:** Teste mit $f(x)=g(x)=x$: $(x \\cdot x)' = (x^2)' = 2x$. Die Formel liefert $1 \\cdot x + x \\cdot 1 = 2x$. ✓

**Typischer Fehler:** Die häufigste Verwechslung ist $(fg)' = f'g'$ — also Faktor-für-Faktor ableiten. Das ist FALSCH (siehe Sub-Goal "Klassischer Fehler").`,
          [
            'Es geht um den Wortlaut der Produktregel.',
            'Wieviele Summanden hat die Formel? Welcher Faktor ist in welchem abgeleitet?',
            'Vergleiche mit $f=g=x$: $(x^2)\' = 2x$ vs. Formel.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (2) apply-guided · multiple-choice · pr-formel
      tag(
        mc(
          '$f(x) = x^3 \\cdot \\cos(x)$. Was ist $f\'(x)$?',
          [
            '$3x^2 \\cos x - x^3 \\sin x$',
            '$3x^2 \\cos x + x^3 \\sin x$',
            '$3x^2 \\cdot (-\\sin x)$',
            '$3x^2 - \\sin x$',
          ],
          0,
          `**Ansatz:** Produkt $u(x) \\cdot v(x)$ mit $u = x^3$, $v = \\cos x$. Produktregel anwenden.

**Rechnung:** $u' = 3x^2$, $v' = -\\sin x$. $f'(x) = u'v + uv' = 3x^2 \\cdot \\cos x + x^3 \\cdot (-\\sin x) = 3x^2 \\cos x - x^3 \\sin x$.

**Probe:** Bei $x = 0$: $f'(0) = 0 \\cdot 1 - 0 \\cdot 0 = 0$. Das passt: $f(x) = x^3 \\cos x$ hat bei $x = 0$ eine waagerechte Tangente (Wendepunkt mit Nullstelle). ✓

**Typischer Fehler:** Das Minus von $(\\cos x)' = -\\sin x$ vergessen — dann steht $+ x^3 \\sin x$ statt $- x^3 \\sin x$.`,
          [
            'Welche Regel? Produkt $x^3 \\cdot \\cos x$ — Produktregel.',
            'Einzel-Ableitungen: $(x^3)\' = 3x^2$ und $(\\cos x)\' = -\\sin x$ (Minus!).',
            'Setze in $u\'v + uv\'$ ein und achte auf das Minuszeichen.',
          ],
          {
            1: 'Vorzeichen-Fehler bei $(\\cos x)\' = -\\sin x$. Hier wurde $+\\sin x$ verwendet — der zweite Summand muss $- x^3 \\sin x$ heißen.',
            2: 'Das ist nur $u\' \\cdot v\'$ (Faktor-für-Faktor) — klassischer Produktregel-Fehler. Es fehlen die beiden Summanden $u\'v$ und $uv\'$.',
            3: 'Hier wurde die Summenregel statt der Produktregel verwendet — das ist nur erlaubt bei $f + g$, nicht bei $f \\cdot g$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (3) apply-independent · number-input · pr-formel
      tag(
        ni(
          '$f(x) = x \\cdot \\ln(x)$. Berechne $f\'(e)$ exakt.',
          2, 0.01, '',
          `**Ansatz:** Produkt $u(x) = x$ und $v(x) = \\ln x$. Produktregel anwenden, dann $x = e$ einsetzen.

**Rechnung:** $u' = 1$, $v' = \\dfrac{1}{x}$. $f'(x) = 1 \\cdot \\ln x + x \\cdot \\dfrac{1}{x} = \\ln x + 1$. Bei $x = e$: $f'(e) = \\ln e + 1 = 1 + 1 = 2$.

**Probe:** Numerisch $\\dfrac{f(e + 0{,}001) - f(e)}{0{,}001} \\approx 2{,}000$. ✓

**Typischer Fehler:** $\\ln'(x) = x$ statt $\\dfrac{1}{x}$ — dann käme $e \\cdot e \\approx 7{,}39$ heraus.`,
          [
            'Welche Regel? Produkt $x \\cdot \\ln x$ — Produktregel.',
            'Einzel-Ableitungen: $(x)\' = 1$ und $(\\ln x)\' = \\tfrac{1}{x}$.',
            'Vereinfache zu $\\ln x + 1$, dann $x = e$ einsetzen mit $\\ln e = 1$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (4) error-analysis · multiple-choice · pr-formel
      tag(
        mc(
          'Ein Student berechnet $(x^2 \\cdot e^x)\' = 2x \\cdot e^x = 2x e^x$. Welcher Fehler liegt vor?',
          [
            'Faktor-für-Faktor abgeleitet — nur $u\' \\cdot v\'$ statt $u\'v + uv\'$ gerechnet, sodass der Summand $x^2 \\cdot e^x$ fehlt.',
            'Korrekt — die Produktregel liefert genau $2x e^x$.',
            'Die Ableitung von $e^x$ ist falsch — sie müsste $e^x \\cdot \\ln e$ lauten.',
            'Die Ableitung von $x^2$ ist falsch — sie müsste $x$ statt $2x$ sein.',
          ],
          0,
          `**Ansatz:** Korrekt: Produkt $u = x^2$, $v = e^x$. Produktregel: $f' = u'v + uv' = 2x e^x + x^2 e^x = (2x + x^2)e^x$.

**Rechnung:** Der Student hat nur $u' \\cdot v' = 2x \\cdot e^x = 2x e^x$ aufgeschrieben — das ist exakt der typische Faktor-für-Faktor-Fehler. Es fehlt der zweite Summand $u v' = x^2 \\cdot e^x$.

**Probe:** Bei $x = 1$: korrekt $f'(1) = (2 + 1) e = 3e \\approx 8{,}15$. Studenten-Antwort: $2 \\cdot e \\approx 5{,}44$. Differenz $= e \\approx 2{,}72$ — genau der fehlende Term $x^2 e^x$ bei $x = 1$.

**Typischer Fehler:** Produktregel ist KEIN Faktor-für-Faktor — sie liefert zwei Summanden.`,
          [
            'Vergleiche das Studenten-Ergebnis mit der korrekten Produktregel-Anwendung.',
            'Korrekt wäre $f\'(x) = 2xe^x + x^2 e^x$ — der Student schreibt nur einen Term.',
            'Sein Ergebnis ist exakt $u\' \\cdot v\'$ — also Faktor-für-Faktor.',
          ],
          {
            1: 'Falsch — die korrekte Produktregel-Anwendung liefert $2xe^x + x^2 e^x$, nicht nur $2xe^x$. Test bei $x=1$: $3e \\ne 2e$.',
            2: '$(e^x)\' = e^x$ stimmt direkt — kein Logarithmusfaktor nötig, weil die Basis $e$ ist (das ist die Definition der Exponentialfunktion).',
            3: '$(x^2)\' = 2x$ stimmt korrekt (Potenzregel: $n x^{n-1} = 2x^1 = 2x$). Hier liegt der Fehler nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (5) transfer · number-input · pr-formel
      tag(
        ni(
          '$f(x) = (x^2 + 1) \\cdot \\sin(x)$. Berechne $f\'(\\pi)$ (auf 2 Dezimalstellen).',
          -10.87, 0.05, '',
          `**Ansatz:** Produkt $u(x) = x^2 + 1$ und $v(x) = \\sin x$. Produktregel.

**Rechnung:** $u' = 2x$, $v' = \\cos x$. $f'(x) = 2x \\sin x + (x^2 + 1)\\cos x$. Bei $x = \\pi$: $\\sin \\pi = 0$, $\\cos \\pi = -1$. $f'(\\pi) = 2\\pi \\cdot 0 + (\\pi^2 + 1)\\cdot(-1) = -(\\pi^2 + 1) \\approx -(9{,}8696 + 1) = -10{,}87$.

**Probe:** Numerisch $\\dfrac{f(\\pi + 0{,}001) - f(\\pi)}{0{,}001} \\approx -10{,}87$. ✓

**Typischer Fehler:** Das Minuszeichen von $\\cos \\pi = -1$ vergessen — dann käme $+10{,}87$ heraus.`,
          [
            'Welche Regel? Produkt $(x^2 + 1) \\cdot \\sin x$ — Produktregel.',
            'Einzel-Ableitungen: $(x^2 + 1)\' = 2x$ und $(\\sin x)\' = \\cos x$.',
            'Bei $x = \\pi$: $\\sin \\pi = 0$ (erster Summand fällt weg), $\\cos \\pi = -1$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (Bonus 0.6) apply-independent · number-input · pr-formel
      tag(
        ni(
          '$f(x) = (3x - 1) \\cdot e^x$. Berechne $f\'(0)$.',
          2, 0.01, '',
          `**Ansatz:** Produkt $u = 3x - 1$ und $v = e^x$. Produktregel anwenden.

**Rechnung:** $u' = 3$, $v' = e^x$. $f'(x) = 3 \\cdot e^x + (3x - 1) \\cdot e^x = (3 + 3x - 1)e^x = (3x + 2)e^x$. Bei $x = 0$: $f'(0) = 2 \\cdot 1 = 2$.

**Probe:** $f(x) = (3x-1)e^x$, $f(0) = -1$, $f(0{,}001) \\approx -0{,}998$. Differenzenquotient $\\approx 2$. ✓

**Typischer Fehler:** Nur einen Summanden behalten (z. B. $3e^x$ oder $(3x-1)e^x$); dann käme $3$ oder $-1$ heraus.`,
          [
            'Produkt aus linearem Term und $e^x$ — Produktregel.',
            '$(3x-1)\' = 3$, $(e^x)\' = e^x$.',
            'Klammere $e^x$ aus und werte bei $x = 0$ aus.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-formel'] },
      ),

      // (Bonus 0.7) apply-independent · multiple-choice · pr-formel
      tag(
        mc(
          '$f(x) = \\sin x \\cdot \\cos x$. Was ist $f\'(x)$ in einfachster Form?',
          [
            '$\\cos^2 x - \\sin^2 x$',
            '$2 \\sin x \\cos x$',
            '$-\\sin x \\cdot \\cos x$',
            '$1$',
          ],
          0,
          `**Ansatz:** Produkt $u = \\sin x$ und $v = \\cos x$. Produktregel — beide Faktoren sind variabel.

**Rechnung:** $u' = \\cos x$, $v' = -\\sin x$. $f'(x) = \\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x$. (Diese Form ist gleich $\\cos(2x)$ über die Doppelwinkel-Identität.)

**Probe:** Bei $x = 0$: $f'(0) = 1 - 0 = 1$. Numerisch $\\dfrac{f(0{,}001) - f(0)}{0{,}001} \\approx 1$. ✓

**Typischer Fehler:** $(\\sin x \\cos x)' = (\\sin x)\' \\cdot (\\cos x)\' = \\cos x \\cdot (-\\sin x)$ — der klassische Faktor-für-Faktor-Fehler.`,
          [
            'Produkt zweier Winkelfunktionen — Produktregel.',
            '$(\\sin x)\' = \\cos x$ und $(\\cos x)\' = -\\sin x$ — Vorzeichen beachten.',
            'Beide Summanden addieren: $\\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x)$.',
          ],
          {
            1: 'Das ist die Ableitung von $\\sin^2 x$, nicht von $\\sin x \\cos x$. Hier wurde mit dem doppelten Wert gearbeitet, vermutlich aus Verwechslung mit Doppelwinkel-Formeln.',
            2: 'Das ist nur $u\' \\cdot v\' = \\cos x \\cdot (-\\sin x)$ — Faktor-für-Faktor-Fehler. Der erste Summand $\\cos x \\cdot \\cos x$ fehlt.',
            3: '$\\sin^2 x + \\cos^2 x = 1$ stimmt — das ist aber NICHT die Ableitung von $\\sin x \\cos x$, sondern eine Identität für die Quadrate.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['pr-formel'] },
      ),
    ],

    // ── [1] pr-falle — Klassischer Fehler $(fg)' \neq f'g'$ ────────────
    1: [
      // (6) recognize · true-false · pr-falle
      tag(
        tf(
          'Für je zwei differenzierbare Funktionen $f, g$ gilt allgemein $(f \\cdot g)\' = f\' \\cdot g\'$.',
          false,
          `**Ansatz:** Klassischer Test: setze ein konkretes Beispiel ein und vergleiche.

**Rechnung:** Für $f(x) = g(x) = x$ gilt $f \\cdot g = x^2$ mit $(x^2)' = 2x$. Aber $f' \\cdot g' = 1 \\cdot 1 = 1 \\ne 2x$. Die Aussage stimmt also NICHT — sie verfehlt das richtige Ergebnis.

**Probe:** Bei $x = 3$: korrekt $2x = 6$, falsche Regel: $1$. Differenz: $5$.

**Typischer Fehler:** Annehmen, Ableitung "verteile" sich auf Produkte genau wie bei Summen ($(f+g)' = f' + g'$). Bei Produkten gilt das nicht.`,
          [
            'Die Produktregel hat ZWEI Summanden — nicht ein Produkt der Ableitungen.',
            'Test: setze $f = g = x$ ein und vergleiche $(x^2)\'$ mit $f\'g\'$.',
            'Ergebnis: $2x \\ne 1$ — die Aussage ist falsch.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['pr-falle'] },
      ),

      // (7) apply-guided · multiple-choice · pr-falle, pr-formel
      tag(
        mc(
          'Sei $f(x) = x^2$, $g(x) = x^3$. Vergleiche $(fg)\'(2)$ (mit der korrekten Produktregel) und $f\'(2) \\cdot g\'(2)$ (mit der falschen Faktor-für-Faktor-Regel). Welche Werte erhalten Sie?',
          [
            '$(fg)\'(2) = 80$, $f\'(2) \\cdot g\'(2) = 48$ — die falsche Regel liefert einen klar anderen Wert.',
            '$(fg)\'(2) = 48$, $f\'(2) \\cdot g\'(2) = 48$ — beide stimmen zufällig überein.',
            '$(fg)\'(2) = 80$, $f\'(2) \\cdot g\'(2) = 80$ — beide stimmen überein.',
            '$(fg)\'(2) = 6$, $f\'(2) \\cdot g\'(2) = 48$.',
          ],
          0,
          `**Ansatz:** Beide Werte separat ausrechnen.

**Rechnung:** $f \\cdot g = x^2 \\cdot x^3 = x^5$, also $(fg)'(x) = 5x^4$ und $(fg)'(2) = 5 \\cdot 16 = 80$. Andererseits $f'(x) = 2x$, $g'(x) = 3x^2$, also $f'(2) \\cdot g'(2) = 4 \\cdot 12 = 48$.

**Probe:** Via Produktregel direkt: $(fg)' = 2x \\cdot x^3 + x^2 \\cdot 3x^2 = 2x^4 + 3x^4 = 5x^4$. ✓ Bei $x = 2$: $80$.

**Typischer Fehler:** Glauben, $(fg)' = f' g'$ stimme "meistens" — hier sieht man eine Differenz von $32$.`,
          [
            'Berechne erst $(fg)\'(2)$ exakt (Polynom-Multiplikation, dann Potenzregel).',
            'Dann $f\'(2)$ und $g\'(2)$ einzeln, multipliziere.',
            'Beide Werte sollten verschieden sein — das ist der ganze Punkt der Falle.',
          ],
          {
            1: '$80 = 48$? Nein. $(fg)\' = 5x^4$ bei $x=2$ ergibt $80$, nicht $48$. Die Behauptung "beide stimmen zufällig überein" ist falsch.',
            2: '$f\'(2) \\cdot g\'(2) = 2 \\cdot 2 \\cdot 3 \\cdot 4 = 48$, nicht $80$. Hier wurden vermutlich die beiden Werte verwechselt.',
            3: '$(fg)\'(2) = 6$ wäre $(f+g)\'(2) = 2 \\cdot 2 + 3 \\cdot 4 = 16$ — auch das stimmt nicht. Die korrekte Ableitung von $x^5$ ist $5x^4 = 80$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['pr-falle', 'pr-formel'] },
      ),

      // (8) apply-independent · multiple-choice · pr-falle
      tag(
        mc(
          'Welche der folgenden Aussagen über die Produktregel ist FALSCH?',
          [
            'Da $(f + g)\' = f\' + g\'$, gilt analog $(f \\cdot g)\' = f\' \\cdot g\'$.',
            'Mit konstantem Faktor $c$: $(c \\cdot f)\' = c \\cdot f\'$ — Spezialfall der Produktregel mit $c\' = 0$.',
            '$(fg)\' = f\' g\'$ kann nur in Spezialfällen zufällig stimmen, in denen $f\'g + fg\' = f\'g\'$ gilt.',
            'Die Produktregel folgt aus der Limit-Definition $f\'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$, angewandt auf $fg$.',
          ],
          0,
          `**Ansatz:** Jede Aussage einzeln auf Wahrheit prüfen.

**Rechnung:**
- Aussage (a) ist FALSCH: Die "Analogie" stimmt nicht. Test $f = g = x$: $(x^2)' = 2x$, aber $f' g' = 1 \\ne 2x$.
- Aussage (b) stimmt: $(c f)' = c' f + c f' = 0 + c f' = c f'$.
- Aussage (c) stimmt: $f' g' = f' g + f g'$ nur, wenn gerade die Differenz null wird — sehr selten.
- Aussage (d) stimmt: Klassische Herleitung über den Differenzenquotienten.

**Probe:** Die einzig falsche Aussage ist die erste (Analogie zur Summenregel).

**Typischer Fehler:** Die "Linearität" der Ableitung (Summenregel + Faktorregel) auf Produkte zu übertragen.`,
          [
            'Welche Aussagen sind tatsächlich wahr? Eine ist falsch.',
            'Test die "Analogie" mit konkreten Funktionen.',
            'Die Linearität der Ableitung gilt nur für Summen und konstante Faktoren, NICHT für Produkte.',
          ],
          {
            1: 'Aussage (b) stimmt: Setze $g = c$ konstant in der Produktregel ein. $c\' = 0$, also $(cf)\' = 0 \\cdot f + c \\cdot f\' = c f\'$.',
            2: 'Aussage (c) stimmt formal: Wenn $f\'g\' = f\'g + fg\'$, dann stimmt die falsche Regel zufällig. Z. B. wenn $g$ konstant und $f\' = 0$, geht das.',
            3: 'Aussage (d) stimmt: Klassische Herleitung. $(fg)(x+h) - (fg)(x) = f(x+h)g(x+h) - f(x)g(x)$, hinzufügen/abziehen, und die Produktregel fällt heraus.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['pr-falle'] },
      ),

      // (9) error-analysis · multiple-choice · pr-falle (Faktor-für-Faktor)
      tag(
        mc(
          'Ein Student schreibt $(x^2 \\cdot \\sin x)\' = 2x \\cdot \\cos x$. Welcher konkrete Fehler liegt vor?',
          [
            'Faktor-für-Faktor abgeleitet ($u\' \\cdot v\'$ statt $u\'v + uv\'$) — beide Summanden $2x \\sin x$ und $x^2 \\cos x$ fehlen, ersetzt durch ihr falsches Produkt.',
            'Vorzeichenfehler bei $(\\cos x)\' = \\sin x$ statt $-\\sin x$.',
            'Im Ergebnis darf $\\sin x$ nicht auftauchen — die Aufgabe wäre dann falsch gestellt.',
            'Die Ableitung von $x^2$ ist $2$, nicht $2x$.',
          ],
          0,
          `**Ansatz:** Korrekt wäre $u' v + u v'$ mit $u = x^2$, $v = \\sin x$, also $2x \\sin x + x^2 \\cos x$.

**Rechnung:** Der Student schreibt $2x \\cdot \\cos x$ — das ist exakt $u' \\cdot v'$ (die beiden Ableitungen miteinander multipliziert). Beide Summanden der Produktregel fehlen.

**Probe:** Bei $x = \\pi/2$: korrekt $2(\\pi/2)\\sin(\\pi/2) + (\\pi/2)^2 \\cos(\\pi/2) = \\pi + 0 = \\pi \\approx 3{,}14$. Studenten-Antwort: $2(\\pi/2)\\cdot 0 = 0$. Differenz: $\\pi$.

**Typischer Fehler:** Genau dieser — die Produktregel als Produkt-der-Ableitungen missverstanden.`,
          [
            'Schreibe das korrekte Produktregel-Ergebnis hin und vergleiche.',
            'Korrekt: $2x \\sin x + x^2 \\cos x$ — also zwei Summanden.',
            'Der Student schreibt nur einen Term, und der ist gerade $u\' \\cdot v\'$.',
          ],
          {
            1: '$(\\cos x)\' = -\\sin x$ wurde gar nicht verwendet — der Student kommt nur durch Ableitung von $x^2$ und $\\sin x$ auf seine Antwort.',
            2: 'Das korrekte Ergebnis $2x \\sin x + x^2 \\cos x$ enthält $\\sin x$ — der Student verzichtet darauf. Das ist gerade Teil des Fehlers, nicht ein Problem mit der Aufgabe.',
            3: '$(x^2)\' = 2 x^{2-1} = 2x$ stimmt nach Potenzregel. Der Faktor $x$ kommt zu Recht ins Ergebnis — kein Fehler hier.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['pr-falle'] },
      ),

      // (10) transfer · matching · pr-falle, pr-formel
      tag(
        matching(
          'Ordne jeder Funktion ihre KORREKTE Produktregel-Ableitung zu (Faktor-für-Faktor wäre jeweils falsch):',
          [
            { left: '$x \\cdot \\sin x$',   right: '$\\sin x + x \\cos x$' },
            { left: '$x^2 \\cdot e^x$',     right: '$(2x + x^2) e^x$' },
            { left: '$x \\cdot \\ln x$',    right: '$\\ln x + 1$' },
            { left: '$e^x \\cdot \\cos x$', right: '$e^x (\\cos x - \\sin x)$' },
          ],
          `**Ansatz:** Auf jede Funktion die Produktregel $u'v + uv'$ anwenden — Faktor-für-Faktor wäre falsch.

**Rechnung:**
- $(x \\sin x)' = 1 \\cdot \\sin x + x \\cdot \\cos x = \\sin x + x \\cos x$. (Faktor-für-Faktor: $\\cos x$ — falsch.)
- $(x^2 e^x)' = 2x \\cdot e^x + x^2 \\cdot e^x = (2x + x^2) e^x$. (Faktor-für-Faktor: $2x e^x$ — falsch.)
- $(x \\ln x)' = 1 \\cdot \\ln x + x \\cdot \\tfrac{1}{x} = \\ln x + 1$. (Faktor-für-Faktor: $\\tfrac{1}{x}$ — falsch.)
- $(e^x \\cos x)' = e^x \\cos x + e^x (-\\sin x) = e^x(\\cos x - \\sin x)$. (Faktor-für-Faktor: $-e^x \\sin x$ — falsch.)

**Probe:** Jede rechte Seite ist eindeutig genau einer linken Seite zuzuordnen — kein Doppel-Match.

**Typischer Fehler:** Die richtige Ableitung mit Faktor-für-Faktor-Antwort verwechseln (z. B. $\\cos x$ für $(x \\sin x)'$).`,
          [
            'Wende auf jeden Term die Produktregel an: erst $u\'v$, dann $uv\'$.',
            'Vereinfache nach dem Ableiten (zusammenfassen, ausklammern).',
            'Vergleiche jede rechte Seite mit deinem berechneten Ergebnis — jede passt zu genau einer Funktion.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['pr-falle', 'pr-formel'] },
      ),
    ],

    // ── [2] pr-geometrie — Rechteck-Bild ───────────────────────────────
    2: [
      // (11) recognize · true-false · pr-geometrie
      tag(
        tf(
          'Im Rechteck-Bild der Produktregel entsprechen die zwei Summanden $f\'g$ und $f g\'$ den beiden Streifen oben/rechts, das winzige Eck $f\' g\'$ ist von zweiter Ordnung und verschwindet im Grenzübergang $h \\to 0$.',
          true,
          `**Ansatz:** Geometrische Vorstellung: Rechteck mit Seiten $f$ und $g$. Beide Seiten wachsen um kleine Beträge $\\Delta f, \\Delta g$.

**Rechnung:** Die Flächenänderung zerlegt sich in drei Anteile: oben ($\\Delta f \\cdot g$), rechts ($f \\cdot \\Delta g$) und Eck ($\\Delta f \\cdot \\Delta g$). Mit $\\Delta f \\approx f' h$ und $\\Delta g \\approx g' h$ ist das Eck $\\approx f' g' h^2$ — von zweiter Ordnung in $h$. Im Grenzübergang $\\Delta A / h \\to f' g + f g'$ — das Eck fällt weg.

**Probe:** Test $f = g = x$ bei $h = 0{,}01$: $\\Delta A = (x+h)^2 - x^2 = 2xh + h^2$. Der Term $h^2$ ist das Eck — verschwindet pro $h$.

**Typischer Fehler:** Glauben, das Eck $f' g'$ sei "auch ein Streifen" — dann käme eine falsche dritte Komponente in die Formel.`,
          [
            'Welche drei Flächenanteile entstehen bei kleinem $\\Delta f$ und $\\Delta g$?',
            'Welcher Anteil ist von ZWEITER Ordnung in der Änderung?',
            'Im Grenzübergang $h \\to 0$ überlebt nur, was von ERSTER Ordnung ist.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['pr-geometrie'] },
      ),

      // (12) apply-guided · multiple-choice · pr-geometrie
      tag(
        mc(
          'Ein Rechteck hat zeitabhängige Seiten $\\ell(t) = 3t$ und $b(t) = t^2$. Wie groß ist die Wachstumsrate der Fläche $A(t) = \\ell(t) \\cdot b(t)$ bei $t = 1$?',
          [
            '$9$ — Streifen oben $\\ell\' b = 3 \\cdot 1 = 3$ plus Streifen rechts $\\ell b\' = 3 \\cdot 2 = 6$.',
            '$3$ — nur Streifen oben, Streifen rechts vergessen.',
            '$6$ — nur Streifen rechts, Streifen oben vergessen.',
            '$15$ — beide Streifen plus zusätzlich das Eck $\\ell\' b\' = 6$ aufaddiert.',
          ],
          0,
          `**Ansatz:** Produktregel mit Rechteck-Bild: $A'(t) = \\ell'(t) b(t) + \\ell(t) b'(t)$.

**Rechnung:** $\\ell' = 3$, $b' = 2t$. Bei $t = 1$: $\\ell(1) = 3$, $b(1) = 1$, $\\ell'(1) = 3$, $b'(1) = 2$. $A'(1) = 3 \\cdot 1 + 3 \\cdot 2 = 3 + 6 = 9$.

**Probe:** Direkt: $A(t) = 3t \\cdot t^2 = 3t^3$, $A'(t) = 9t^2$, $A'(1) = 9$. ✓

**Typischer Fehler:** Das Eck $\\ell' \\cdot b' = 6$ als dritte Komponente mitzunehmen (Antwort D, ergibt $15$) — das ist 2. Ordnung und verschwindet.`,
          [
            'Setze die Produktregel als Streifen-Modell auf: Streifen oben + Streifen rechts.',
            'Berechne $\\ell(1)$, $b(1)$, $\\ell\'(1)$, $b\'(1)$.',
            'Beide Streifen ADDIEREN — KEIN Eck-Term zusätzlich.',
          ],
          {
            1: 'Nur der Streifen oben ($\\ell\'b = 3$) berücksichtigt — der Streifen rechts ($\\ell b\' = 6$) fehlt komplett.',
            2: 'Nur der Streifen rechts ($\\ell b\' = 6$) berücksichtigt — der Streifen oben ($\\ell\'b = 3$) fehlt komplett.',
            3: 'Das Eck $\\ell\' b\' = 6$ wurde zusätzlich mitgezählt — das ist 2. Ordnung infinitesimal klein und verschwindet im Grenzübergang.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['pr-geometrie'] },
      ),

      // (13) apply-independent · multiple-choice · pr-geometrie
      tag(
        mc(
          'Ein Rechteck zur Zeit $t = 0$ hat Seiten $\\ell(0) = 2$ und $b(0) = 5$, und es gilt $\\ell\'(0) = 4$, $b\'(0) = -1$ (die Breite SCHRUMPFT). Wie schnell wächst die Fläche $A = \\ell \\cdot b$ bei $t = 0$?',
          [
            '$18$ — denn $\\ell\'b + \\ell b\' = 4 \\cdot 5 + 2 \\cdot (-1) = 20 - 2 = 18$.',
            '$20$ — Streifen oben $\\ell\'b = 20$, Streifen rechts vergessen.',
            '$22$ — Streifen rechts mit Plus statt Minus addiert: $20 + 2$.',
            '$-4$ — Eck-Anteil $\\ell\' \\cdot b\' = 4 \\cdot (-1) = -4$ allein gerechnet.',
          ],
          0,
          `**Ansatz:** Produktregel: $A'(0) = \\ell'(0) b(0) + \\ell(0) b'(0)$. Vorzeichen sorgfältig übernehmen.

**Rechnung:** $A'(0) = 4 \\cdot 5 + 2 \\cdot (-1) = 20 + (-2) = 18$. Der Streifen rechts ist negativ ($\\ell b' = -2$), weil $b$ schrumpft — aber er ist kleiner als der wachsende Streifen oben, also wächst die Fläche netto.

**Probe:** Physikalisch plausibel: $\\ell$ wächst stark ($+4$), $b$ schrumpft schwach ($-1$). Da $\\ell$ klein und $b$ groß, dominiert der wachsende Anteil.

**Typischer Fehler:** Das Vorzeichen von $b'(0) = -1$ ignorieren und $20 + 2 = 22$ rechnen (Antwort C).`,
          [
            'Schreibe $A\'(0) = \\ell\'(0) b(0) + \\ell(0) b\'(0)$ auf.',
            'Setze ALLE vier Werte mit korrektem Vorzeichen ein.',
            'Addiere; das Minus von $b\'(0) = -1$ darf NICHT verloren gehen.',
          ],
          {
            1: 'Nur Streifen oben gerechnet ($20$) — der Streifen rechts $\\ell b\' = -2$ fehlt.',
            2: 'Das Vorzeichen von $b\'(0) = -1$ falsch übernommen — der Streifen rechts müsste $-2$ sein, nicht $+2$.',
            3: 'Nur das Eck $\\ell\' \\cdot b\' = -4$ — dieser Anteil verschwindet eigentlich im Grenzübergang und ist NICHT die Wachstumsrate.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['pr-geometrie'] },
      ),

      // (14) error-analysis · multiple-choice · pr-geometrie
      tag(
        mc(
          'Ein Schüler argumentiert: "Wenn beide Seiten eines Rechtecks wachsen, entsteht doch das kleine Eck oben rechts — das ist der wahre Wachstumsbeitrag, also $A\' = \\ell\' \\cdot b\'$." Wo liegt der Denkfehler?',
          [
            'Das Eck $\\ell\' \\cdot b\'$ ist VON ZWEITER ORDNUNG infinitesimal klein ($(\\ell\' h)(b\' h) = \\ell\' b\' h^2$) und verschwindet im Grenzübergang $h \\to 0$. Die tatsächliche Flächenänderung kommt aus den beiden STREIFEN $\\ell\' b$ und $\\ell b\'$.',
            'Das Eck ist korrekt, aber die zwei Streifen werden doppelt gezählt — daher zählt nur das Eck.',
            'Korrekt — bei zwei wachsenden Seiten ist nur das Eck der relevante Beitrag.',
            'Das Eck und die Streifen heben sich gegenseitig auf, also ist $A\' = 0$.',
          ],
          0,
          `**Ansatz:** Geometrisch zerlegen: $\\Delta A = (\\ell + \\Delta\\ell)(b + \\Delta b) - \\ell b = \\Delta\\ell \\cdot b + \\ell \\cdot \\Delta b + \\Delta\\ell \\cdot \\Delta b$.

**Rechnung:** Mit $\\Delta\\ell \\approx \\ell' h$, $\\Delta b \\approx b' h$ ergibt sich $\\Delta A \\approx \\ell' b h + \\ell b' h + \\ell' b' h^2$. Dividiere durch $h$: $\\dfrac{\\Delta A}{h} \\approx \\ell' b + \\ell b' + \\ell' b' h$. Für $h \\to 0$ überleben nur die beiden Streifen — das Eck-Glied $\\ell' b' h$ geht gegen $0$.

**Probe:** Test $f = g = x$ bei $h = 0{,}01$: Streifen-Anteil $2x h$, Eck-Anteil $h^2$. Für $h \\to 0$ dominiert der Streifen — der Streifen-Term wird zu $2x$ in der Ableitung.

**Typischer Fehler:** Glauben, dass Volumen/Fläche "vom Eck kommt" — die Streifen sind dominant, weil sie nur EINEN Faktor klein haben.`,
          [
            'Schreibe $\\Delta A = \\Delta\\ell \\cdot b + \\ell \\cdot \\Delta b + \\Delta\\ell \\cdot \\Delta b$ auf.',
            'Vergleiche die Größenordnung: Streifen sind erster Ordnung in $\\Delta$, das Eck zweiter.',
            'Im Grenzübergang $h \\to 0$ überleben nur die Streifen.',
          ],
          {
            1: 'Die Streifen werden NICHT doppelt gezählt — sie sind zwei verschiedene Flächenstücke (oben vs. rechts). Beide sind nötig.',
            2: 'Test mit $f = g = x$: $(x^2)\' = 2x$, nicht $1 \\cdot 1 = 1$. Die Aussage "nur das Eck zählt" wird durch jedes konkrete Beispiel widerlegt.',
            3: 'Bei zwei wachsenden Seiten ($\\ell\' > 0$, $b\' > 0$) wächst die Fläche strikt — $A\' > 0$, nicht null. Die Aussage "alles hebt sich auf" ist falsch.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['pr-geometrie'] },
      ),

      // (15) transfer · matching · pr-geometrie, pr-formel
      tag(
        matching(
          'Ordne jedem Bildteil im Rechteck-Modell der Produktregel den passenden Term zu:',
          [
            { left: 'Streifen oben (Seite $f$ wächst, $g$ bleibt fest)',     right: '$f\' \\cdot g$' },
            { left: 'Streifen rechts (Seite $g$ wächst, $f$ bleibt fest)',  right: '$f \\cdot g\'$' },
            { left: 'Eck (beide Seiten wachsen — 2. Ordnung, verschwindet)', right: '$f\' \\cdot g\'$' },
            { left: 'Ausgangsfläche bei festem $x$',                         right: '$f \\cdot g$' },
          ],
          `**Ansatz:** Bei kleinem $h$ zerlegt sich $\\Delta(fg) = (f+h f')(g+h g') - fg$ in vier Stücke: Ausgangsfläche $fg$, Streifen oben $h f' g$, Streifen rechts $h f g'$, Eck $h^2 f' g'$.

**Rechnung:**
- Ausgangsfläche $fg$ (vor jeder Änderung): zur Zeit $t$ steht hier der unveränderte Funktionswert.
- Streifen oben $f' \\cdot g$: wenn nur Seite $f$ wächst (um $h f'$) und $g$ bleibt — Höhe $h f'$ mal Breite $g$.
- Streifen rechts $f \\cdot g'$: wenn nur Seite $g$ wächst (um $h g'$) und $f$ bleibt — Höhe $f$ mal Breite $h g'$.
- Eck $f' \\cdot g'$: wenn beide Seiten wachsen — Fläche $h f' \\cdot h g'$, von 2. Ordnung in $h$ und verschwindet pro $h$.

**Probe:** Jede rechte Seite ist eindeutig EINEM Bildteil zugeordnet (kein Doppel-Match).

**Typischer Fehler:** Streifen oben mit Streifen rechts verwechseln — Lesetrick: "im ersten Summanden ist $f$ abgeleitet, im zweiten $g$".`,
          [
            'Welcher Faktor steht ungeleitet, welcher abgeleitet — für jedes Bildteil getrennt überlegen.',
            'Der Eck-Term hat BEIDE Faktoren abgeleitet — er verschwindet.',
            'Die Ausgangsfläche hat KEINEN Faktor abgeleitet — das ist der ursprüngliche Funktionswert.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['pr-geometrie', 'pr-formel'] },
      ),
    ],

    // ── [3] pr-dreifach — Dreifaches Produkt ───────────────────────────
    3: [
      // (16) recognize · true-false · pr-dreifach
      tag(
        tf(
          'Für die Ableitung eines Produkts dreier differenzierbarer Funktionen gilt $(f \\cdot g \\cdot h)\' = f\' g h + f g\' h + f g h\'$ — drei Summanden, in jedem ist genau EIN Faktor abgeleitet.',
          true,
          `**Ansatz:** Analog zur zweifachen Produktregel — pro Summand wird genau eine Funktion abgeleitet.

**Rechnung:** Herleitung via zweifacher Produktregel: $((fg)\\cdot h)' = (fg)' h + (fg) h' = (f'g + fg') h + fg h' = f' g h + f g' h + f g h'$. Drei Summanden, jeder mit genau einer Ableitung. ✓

**Probe:** Test mit $f = g = h = x$: $(x \\cdot x \\cdot x)' = (x^3)' = 3x^2$. Formel: $1 \\cdot x \\cdot x + x \\cdot 1 \\cdot x + x \\cdot x \\cdot 1 = 3x^2$. ✓

**Typischer Fehler:** Den dritten Summanden vergessen, weil man "Produktregel = 2 Summanden" auswendig kennt.`,
          [
            'Wieviele Faktoren stehen im Produkt? Wieviele Summanden bekommt die Ableitung?',
            'In jedem Summanden ist GENAU EINE Funktion abgeleitet, die anderen stehen unverändert.',
            'Test: $(x \\cdot x \\cdot x)\' = 3x^2$ — die Formel liefert genau diese drei Summanden.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['pr-dreifach'] },
      ),

      // (17) apply-guided · multiple-choice · pr-dreifach
      tag(
        mc(
          '$f(x) = x \\cdot e^x \\cdot \\sin x$. Was ist $f\'(x)$?',
          [
            '$e^x \\sin x + x e^x \\sin x + x e^x \\cos x$',
            '$e^x \\cdot \\cos x$',
            '$1 + e^x + \\cos x$',
            '$e^x \\sin x + x e^x \\cos x$',
          ],
          0,
          `**Ansatz:** Dreifaches Produkt $u \\cdot v \\cdot w$ mit $u = x$, $v = e^x$, $w = \\sin x$. Dreifach-Produktregel.

**Rechnung:** $u' = 1$, $v' = e^x$, $w' = \\cos x$. $f'(x) = u' v w + u v' w + u v w' = 1 \\cdot e^x \\sin x + x \\cdot e^x \\sin x + x \\cdot e^x \\cos x = e^x \\sin x + x e^x \\sin x + x e^x \\cos x$.

**Probe:** Bei $x = 0$: $f'(0) = 1 \\cdot 0 + 0 + 0 = 0$. Sinnvoll: $f(x) = x e^x \\sin x$ ist bei $x = 0$ doppelt mit Faktor $x$ und $\\sin x$ verkoppelt — quadratisches Verhalten in der Nähe von $0$.

**Typischer Fehler:** Nur ZWEI der drei Summanden schreiben (Antwort D, $\\sin x$-Ableitung-Summand vergessen) oder Faktor-für-Faktor ableiten (Antwort B).`,
          [
            'Drei Faktoren — dreifache Produktregel.',
            'In jedem Summanden ist GENAU EINE Funktion abgeleitet.',
            'Drei Einzel-Ableitungen: $(x)\' = 1$, $(e^x)\' = e^x$, $(\\sin x)\' = \\cos x$.',
          ],
          {
            1: 'Das ist $u\' \\cdot v\' \\cdot w\' = 1 \\cdot e^x \\cdot \\cos x = e^x \\cos x$ — Faktor-für-Faktor abgeleitet (falsch).',
            2: 'Das ist die Summenregel ($1 + e^x + \\cos x$) auf $x + e^x + \\sin x$ — passt aber zu einem PRODUKT nicht.',
            3: 'Nur zwei der drei Summanden — der mittlere Term $x e^x \\sin x$ (mit $v\' = e^x$ abgeleitet) fehlt.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['pr-dreifach'] },
      ),

      // (18) apply-independent · number-input · pr-dreifach
      tag(
        ni(
          '$f(x) = x \\cdot e^x \\cdot \\cos x$. Berechne $f\'(0)$.',
          1, 0.01, '',
          `**Ansatz:** Dreifaches Produkt mit $u = x$, $v = e^x$, $w = \\cos x$. Dreifach-Produktregel anwenden.

**Rechnung:** $u' = 1$, $v' = e^x$, $w' = -\\sin x$. $f'(x) = 1 \\cdot e^x \\cos x + x \\cdot e^x \\cos x + x \\cdot e^x \\cdot (-\\sin x) = e^x \\cos x + x e^x \\cos x - x e^x \\sin x$. Bei $x = 0$: $f'(0) = 1 \\cdot 1 + 0 + 0 = 1$.

**Probe:** Numerisch $\\dfrac{f(0{,}001) - f(0)}{0{,}001} \\approx \\dfrac{0{,}001 \\cdot 1{,}001 \\cdot 1 - 0}{0{,}001} \\approx 1{,}001$. ✓

**Typischer Fehler:** Vorzeichen von $(\\cos x)\' = -\\sin x$ vergessen — bei $x = 0$ allerdings irrelevant, da $\\sin 0 = 0$.`,
          [
            'Drei Faktoren — dreifache Produktregel mit drei Summanden.',
            'Einzel-Ableitungen: $(x)\' = 1$, $(e^x)\' = e^x$, $(\\cos x)\' = -\\sin x$.',
            'Bei $x = 0$ sind $\\sin 0 = 0$ und $x = 0$ — nur der erste Summand überlebt.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['pr-dreifach'] },
      ),

      // (19) error-analysis · multiple-choice · pr-dreifach
      tag(
        mc(
          'Ein Student berechnet die Ableitung von $f(x) = x \\cdot \\sin x \\cdot e^x$ als $f\'(x) = \\sin x \\cdot e^x + x \\sin x \\cdot e^x$. Welcher Fehler liegt vor?',
          [
            'Nur zwei statt drei Summanden geschrieben — der mittlere Term $x \\cos x \\cdot e^x$ (mit $\\sin x \\to \\cos x$ abgeleitet) fehlt.',
            'Vorzeichenfehler bei $(\\sin x)\' = -\\cos x$ statt $\\cos x$.',
            'Korrekt — bei dreifachem Produkt liefert die Regel exakt zwei Summanden.',
            'Die Kettenregel auf $\\sin x$ wurde vergessen.',
          ],
          0,
          `**Ansatz:** Korrekt: drei Summanden, in jedem ist GENAU eine Funktion abgeleitet — also $f' = (x)' \\sin x \\cdot e^x + x (\\sin x)' \\cdot e^x + x \\sin x (e^x)' = \\sin x \\cdot e^x + x \\cos x \\cdot e^x + x \\sin x \\cdot e^x$.

**Rechnung:** Der Student schreibt $\\sin x \\cdot e^x + x \\sin x \\cdot e^x$ — also nur $u' v w$ und $u v w'$. Der mittlere Summand $u v' w = x \\cos x \\cdot e^x$ fehlt komplett.

**Probe:** Bei $x = \\pi$: korrekt $\\sin\\pi \\cdot e^\\pi + \\pi \\cos\\pi \\cdot e^\\pi + \\pi \\sin\\pi \\cdot e^\\pi = 0 + (-\\pi) e^\\pi + 0 = -\\pi e^\\pi$. Studenten-Antwort: $0 + 0 = 0$. Klar ein Fehler.

**Typischer Fehler:** Der Student hat "Produktregel = 2 Summanden" auswendig gelernt und erweitert nicht auf drei Faktoren.`,
          [
            'Wieviele Summanden müssen bei drei Faktoren entstehen?',
            'Schreibe ALLE drei Summanden auf, in jedem ist exakt eine Funktion abgeleitet.',
            'Vergleiche: welcher Summand fehlt beim Studenten?',
          ],
          {
            1: '$(\\sin x)\' = \\cos x$ stimmt — der Student verwendet das gar nicht, weil ihm der Summand fehlt, in dem $\\sin x$ abgeleitet wird.',
            2: 'Bei DREI Faktoren liefert die Produktregel DREI Summanden, nicht zwei. Test mit $f = g = h = x$: $(x^3)\' = 3x^2 = x^2 + x^2 + x^2$.',
            3: 'Die Kettenregel ist hier nicht relevant — $\\sin x$ hat kein "inneres" Argument, nur das pure $x$. Die Ableitung ist direkt $\\cos x$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['pr-dreifach'] },
      ),

      // (20) transfer · multiple-choice · pr-dreifach, pr-formel
      tag(
        mc(
          'Ein Quader hat zeitabhängige Kantenlängen $\\ell(t)$, $b(t)$, $h(t)$ mit Volumen $V(t) = \\ell(t) \\cdot b(t) \\cdot h(t)$. Wie lautet die korrekte Formel für $V\'(t)$?',
          [
            '$V\'(t) = \\ell\'(t) b(t) h(t) + \\ell(t) b\'(t) h(t) + \\ell(t) b(t) h\'(t)$ — drei Summanden, in jedem ist GENAU EINE Kante "abgeleitet" (analog zur Produktregel für drei Faktoren).',
            '$V\'(t) = \\ell\'(t) \\cdot b\'(t) \\cdot h\'(t)$ — Faktor-für-Faktor abgeleitet.',
            '$V\'(t) = \\ell\'(t) + b\'(t) + h\'(t)$ — Summenregel verwendet, obwohl es ein Produkt ist.',
            '$V\'(t) = \\ell(t) \\cdot b(t) \\cdot h(t)$ — das Volumen selbst wiederholt, KEINE Ableitung gebildet.',
          ],
          0,
          `**Ansatz:** Das ist die geometrische Anwendung der dreifachen Produktregel: jede Kante des Quaders wächst zeitlich, und die Volumenänderung setzt sich aus drei Streifen-Beiträgen zusammen — pro Kante einer.

**Rechnung:** Genau wie beim Rechteck (zwei Streifen) entstehen beim Quader DREI dreidimensionale "Platten" — eine pro Kante, die wächst. Die Eck-Korrekturen (zwei oder drei Kanten gleichzeitig variabel) sind von höherer Ordnung und verschwinden im Grenzübergang.

**Probe:** Test $\\ell = b = h = t$: $V(t) = t^3$, $V'(t) = 3t^2$. Formel: $1 \\cdot t \\cdot t + t \\cdot 1 \\cdot t + t \\cdot t \\cdot 1 = 3t^2$. ✓

**Typischer Fehler:** Den dritten Summanden vergessen (klappt bei zwei Faktoren, hier braucht es drei) oder Faktor-für-Faktor ableiten (Antwort B).`,
          [
            'Wieviele Faktoren? Wieviele Summanden bekommt die Ableitung?',
            'Geometrisch: bei drei wachsenden Kanten gibt es drei "Platten" — pro Kante eine.',
            'In jedem Summanden ist GENAU EINE Kante abgeleitet, die anderen stehen unverändert.',
          ],
          {
            1: 'Das wäre Faktor-für-Faktor ($u\'v\'w\'$) — analog zum klassischen Produktregel-Fehler, aber hier mit drei Faktoren. Falsch.',
            2: 'Summenregel auf einem Produkt — die ist nur erlaubt bei $f + g + h$, nicht bei $f \\cdot g \\cdot h$.',
            3: 'Hier wurde das Volumen wiederholt, statt es abzuleiten. Eine Ableitung muss die ÄNDERUNG beschreiben, nicht den Wert.',
          },
        ),
        { stage: 'transfer', subGoal: 3, uses: ['pr-dreifach', 'pr-formel'] },
      ),
    ],

    // ── [4] pr-vereinfachen — Ausklammern nach dem Ableiten ────────────
    4: [
      // (21) recognize · true-false · pr-vereinfachen
      tag(
        tf(
          'Nach Anwendung der Produktregel sollte das Ergebnis möglichst ausgeklammert und gekürzt vorliegen — in Klausuren werden Punkte für die einfachste Form vergeben, nicht für die rohe Summe direkt nach der Produktregel.',
          true,
          `**Ansatz:** Vereinfachen nach dem Ableiten ist Standard-Erwartung in Klausuren — die rohe Form $f'g + fg'$ wird oft nicht als "fertiges Ergebnis" akzeptiert.

**Rechnung:** Typische Schritte nach der Produktregel: (1) gemeinsamen Faktor ausklammern, (2) ähnliche Terme zusammenfassen, (3) Brüche kürzen ($x^2 \\cdot \\tfrac{1}{x} = x$). Beispiel: $(x^3 e^x)' = 3x^2 e^x + x^3 e^x \\to x^2 e^x(x + 3)$.

**Probe:** Vergleich der Formen $3x^2 e^x + x^3 e^x$ (roh) und $x^2 e^x(x+3)$ (vereinfacht) — die zweite Form macht Nullstellen ($x=0$, $x=-3$) und Vorzeichenwechsel direkt sichtbar.

**Typischer Fehler:** Die rohe Form abgeben und Klausur-Punkte für "nicht vereinfacht" verlieren.`,
          [
            'Gibt der Prüfer halbe Punkte für die rohe Form?',
            'Welche Form macht Nullstellen/Vorzeichenwechsel besser sichtbar?',
            'Standard-Anweisung: "Ableitung in einfachster Form" — das ist der erwartete Klausur-Standard.',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['pr-vereinfachen'] },
      ),

      // (22) apply-guided · multiple-choice · pr-vereinfachen, pr-formel
      tag(
        mc(
          '$f(x) = x^3 \\cdot e^x$. Was ist $f\'(x)$ in ausgeklammerter Klausur-Form?',
          [
            '$x^2 e^x (x + 3)$',
            '$3x^2 e^x + x^3 e^x$',
            '$x^3 e^x \\left(1 + \\dfrac{3}{x}\\right)$',
            '$3x^2 \\cdot e^x$',
          ],
          0,
          `**Ansatz:** Produktregel anwenden, dann gemeinsame Faktoren ausklammern.

**Rechnung:** $(x^3 e^x)' = 3x^2 \\cdot e^x + x^3 \\cdot e^x$. Gemeinsamer Faktor: $x^2 e^x$. Ausklammern: $x^2 e^x (3 + x) = x^2 e^x (x + 3)$.

**Probe:** Multiplizieren der ausgeklammerten Form: $x^2 e^x \\cdot x + x^2 e^x \\cdot 3 = x^3 e^x + 3x^2 e^x$ ✓ — entspricht der rohen Form.

**Typischer Fehler:** Die rohe Form $3x^2 e^x + x^3 e^x$ als Endergebnis stehenlassen (Antwort B) — formal richtig, aber nicht in Klausur-Form.`,
          [
            'Was ist der GRÖSSTE gemeinsame Faktor in $3x^2 e^x$ und $x^3 e^x$?',
            'Klammere $x^2 e^x$ aus — was bleibt in der Klammer?',
            'Endform: $x^2 e^x \\cdot (\\text{Rest})$.',
          ],
          {
            1: 'Die rohe Form direkt nach der Produktregel — formal richtig, aber nicht ausgeklammert. In Klausur-Erwartung verliert das Punkte.',
            2: 'Hier wurde durch $x$ geteilt, ohne dass ein Faktor $x$ vorhanden war — das macht aus dem Produkt einen unsinnigen Bruch $1 + \\tfrac{3}{x}$. Falsche Ausklammerung.',
            3: 'Nur den ersten Summanden behalten — der zweite Summand $x^3 e^x$ wurde komplett vergessen.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['pr-vereinfachen', 'pr-formel'] },
      ),

      // (23) apply-independent · multiple-choice · pr-vereinfachen
      tag(
        mc(
          '$f(x) = (x^2 - 1) \\cdot e^x$. In welcher Form ist $f\'(x)$ am stärksten zusammengefasst?',
          [
            '$e^x (x^2 + 2x - 1)$',
            '$2x e^x + (x^2 - 1) e^x$',
            '$e^x (x^2 - 2x - 1)$',
            '$e^x (x + 1)^2$',
          ],
          0,
          `**Ansatz:** Produktregel: $f'(x) = 2x \\cdot e^x + (x^2 - 1) \\cdot e^x$. Dann $e^x$ ausklammern und im Inneren zusammenfassen.

**Rechnung:** $f'(x) = e^x [2x + (x^2 - 1)] = e^x (x^2 + 2x - 1)$. Das Innere $x^2 + 2x - 1$ faktorisiert nicht über $\\mathbb{Q}$ (Diskriminante $4 + 4 = 8$, irrational), also ist $e^x(x^2 + 2x - 1)$ die einfachste Form.

**Probe:** Ausmultiplizieren: $e^x x^2 + 2x e^x - e^x = (x^2 - 1)e^x + 2x e^x$ ✓ — entspricht der rohen Form.

**Typischer Fehler:** Vorzeichen beim Zusammenfassen verlieren — $-1$ als $+1$ und $2x$ als $-2x$ rechnen (Antworten C/D).`,
          [
            'Produktregel anwenden, dann gemeinsamen Faktor $e^x$ ausklammern.',
            'Im Inneren $2x + (x^2 - 1)$ zusammenfassen — Reihenfolge nach Potenzen.',
            '$x^2 + 2x - 1$ lässt sich nicht über ganze/rationale Zahlen faktorisieren.',
          ],
          {
            1: 'Die rohe Form vor dem Ausklammern — $e^x$ steht zweimal da, was sich vermeiden lässt.',
            2: 'Vorzeichenfehler beim Zusammenfassen: $2x + (x^2 - 1) = x^2 + 2x - 1$, nicht $x^2 - 2x - 1$.',
            3: 'Hier wurde $(x+1)^2 = x^2 + 2x + 1$ verwendet, also $-1$ als $+1$ gerechnet. Die korrekte Klammer hat $-1$, nicht $+1$.',
          },
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['pr-vereinfachen'] },
      ),

      // (24) error-analysis · multiple-choice · pr-vereinfachen
      tag(
        mc(
          'Ein Schüler gibt als Endergebnis für $(x^2 \\ln x)\'$ die Form $2x \\ln x + x^2 \\cdot \\dfrac{1}{x}$ an. Welcher Klausur-Punkt geht ihm verloren?',
          [
            'Der Term $x^2 \\cdot \\tfrac{1}{x} = x$ wurde nicht vereinfacht — die erwartete Klausur-Form ist $x(2\\ln x + 1)$ (nach Kürzen und Ausklammern von $x$).',
            'Vorzeichen-Fehler — die Produktregel hat ein Minus, nicht ein Plus.',
            '$(\\ln x)\' = \\tfrac{1}{x}$ ist falsch — richtig wäre $(\\ln x)\' = x$.',
            'Brüche dürfen in einer Ableitung grundsätzlich nicht stehen.',
          ],
          0,
          `**Ansatz:** Produktregel ist korrekt angewendet, aber das Ergebnis ist nicht ausgeklammert. Vereinfachen!

**Rechnung:** $x^2 \\cdot \\tfrac{1}{x} = x$. Damit wird $f'(x) = 2x \\ln x + x = x(2 \\ln x + 1)$. Klausur-Form: $x(2\\ln x + 1)$.

**Probe:** Bei $x = 1$: $f'(1) = 1 \\cdot (0 + 1) = 1$. Studenten-Form: $2 \\cdot 1 \\cdot 0 + 1 \\cdot 1 = 1$. ✓ (Wert stimmt, aber Form bei Klausur abzugsfähig.)

**Typischer Fehler:** Nach dem Ableiten "fertig" gefühlt und nicht weitergerechnet — der einfache Bruch $x^2 \\cdot \\tfrac{1}{x} = x$ wird nicht gekürzt.`,
          [
            'Schaue genau auf den zweiten Summanden: $x^2 \\cdot \\tfrac{1}{x}$ — lässt sich das vereinfachen?',
            'Nach Kürzen kommt $2x \\ln x + x$ — was lässt sich jetzt ausklammern?',
            'Endform: $x(2\\ln x + 1)$.',
          ],
          {
            1: 'Die Produktregel hat ein PLUS, kein Minus — das Minus ist in der Quotientenregel. Hier ist kein Vorzeichen-Fehler.',
            2: '$(\\ln x)\' = \\tfrac{1}{x}$ ist KORREKT (Standard-Ableitung). $(\\ln x)\' = x$ wäre der Fehler — den hat der Student gerade NICHT gemacht.',
            3: 'Brüche dürfen sehr wohl in einer Ableitung stehen (z.B. $\\tfrac{1}{x}$ als Ableitung von $\\ln x$). Hier wird $\\tfrac{1}{x}$ aber durch Multiplikation mit $x^2$ zu $x$ — der Bruch verschwindet beim Kürzen.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['pr-vereinfachen'] },
      ),

      // (25) transfer · sorting · pr-vereinfachen, pr-formel — Schritte ordnen
      tag(
        sorting(
          'Bringe die folgenden Schritte zur ausgeklammerten Ableitung von $f(x) = x \\cdot \\sin x \\cdot e^x$ in die richtige Reihenfolge:',
          [
            'Struktur identifizieren: dreifaches Produkt mit $u = x$, $v = \\sin x$, $w = e^x$.',
            'Einzel-Ableitungen bilden: $u\' = 1$, $v\' = \\cos x$, $w\' = e^x$.',
            'Dreifach-Produktregel anwenden: $f\'(x) = \\sin x \\cdot e^x + x \\cos x \\cdot e^x + x \\sin x \\cdot e^x$.',
            'Gemeinsamen Faktor $e^x$ ausklammern: $f\'(x) = e^x \\,(\\sin x + x \\cos x + x \\sin x)$.',
            'Im Inneren zusammenfassen: $f\'(x) = e^x \\,((1 + x)\\sin x + x \\cos x)$.',
          ],
          [0, 1, 2, 3, 4],
          `**Ansatz:** Beim Ableiten und Vereinfachen folgt man einer festen Reihenfolge — von "Struktur erkennen" über "Regel anwenden" zu "Klausur-Form".

**Rechnung:** Begründung der Reihenfolge:
1. Struktur: Drei Faktoren ⇒ dreifache Produktregel. Erst muss man wissen, welche Regel man braucht.
2. Einzel-Ableitungen: Bevor man die Regel anwendet, alle Bausteine ($u'$, $v'$, $w'$) bereitlegen.
3. Regel einsetzen: Jetzt erst die drei Summanden hinschreiben.
4. Ausklammern: Gemeinsame Faktoren herausziehen — hier $e^x$.
5. Zusammenfassen: Im Inneren noch nach Termen gruppieren — hier $\\sin x \\cdot (1+x) + x \\cos x$.

**Probe:** Ausmultiplizieren der Endform: $e^x \\cdot \\sin x + e^x \\cdot x \\sin x + e^x \\cdot x \\cos x$ — entspricht Schritt 3 (roh).

**Typischer Fehler:** Schritt 2 mit Schritt 3 vertauschen (Regel anwenden, OHNE vorher die Einzel-Ableitungen aufzuschreiben — Vorzeichen-/Termfehler folgen).`,
          [
            'Welcher Schritt MUSS zuerst kommen, bevor man überhaupt eine Regel anwenden kann?',
            'Welche Schritte sind reines "Aufschreiben" (Regel) und welche sind "Aufräumen" (Vereinfachen)?',
            'Endform $e^x((1+x)\\sin x + x \\cos x)$ — was kam unmittelbar davor?',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['pr-vereinfachen', 'pr-formel'] },
      ),

      // (Bonus 4.6) apply-independent · number-input · pr-vereinfachen, pr-formel
      tag(
        ni(
          '$f(x) = x^2 \\cdot \\ln x$. Schreibe $f\'(x)$ in der ausgeklammerten Form $x \\cdot (a \\ln x + b)$. Berechne $a + b$.',
          3, 0, '',
          `**Ansatz:** Produktregel anwenden, vereinfachen ($x^2 \\cdot \\tfrac{1}{x} = x$), dann $x$ ausklammern.

**Rechnung:** $f'(x) = 2x \\cdot \\ln x + x^2 \\cdot \\dfrac{1}{x} = 2x \\ln x + x = x(2 \\ln x + 1)$. Also $a = 2$, $b = 1$, $a + b = 3$.

**Probe:** Multiplizieren der ausgeklammerten Form: $x \\cdot 2 \\ln x + x \\cdot 1 = 2x \\ln x + x$ ✓ — passt zur rohen Form.

**Typischer Fehler:** Den Bruch $x^2 \\cdot \\tfrac{1}{x}$ nicht zu $x$ kürzen — dann ist $x$ nicht der erkennbare gemeinsame Faktor.`,
          [
            'Produktregel: $f\'(x) = 2x \\ln x + x^2 \\cdot \\tfrac{1}{x}$.',
            'Kürze $x^2 \\cdot \\tfrac{1}{x} = x$, dann klammere $x$ aus.',
            'Form $x(a \\ln x + b)$ ablesen; $a + b$ berechnen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['pr-vereinfachen', 'pr-formel'] },
      ),
    ],
  },
}
