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

  // ────────────────────────────────────────────────────────────────────────
  // abl-2-2 — Quotientenregel  (5 subGoals × 5 Stufen = 25 Matrix-Aufgaben)
  //   SG 0: qr-formel       — (f/g)' = (f'g − fg')/g²
  //   SG 1: qr-naz          — NAZ-Eselsbrücke
  //   SG 2: qr-vorzeichen   — f'g ZUERST, dann minus fg'
  //   SG 3: qr-via-pr       — f/g = f·g^(−1) über Produkt+Kettenregel
  //   SG 4: qr-defbereich   — Definitionsbereich g(x) ≠ 0
  // ────────────────────────────────────────────────────────────────────────
  'abl-2-2': {

    // ── [0] qr-formel — Quotientenregel-Formel ─────────────────────────
    0: [
      // (1) recognize · true-false · qr-formel
      tag(
        tf(
          'Die Quotientenregel lautet $\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\' g - f g\'}{g^{2}}$ — mit MINUSZEICHEN im Zähler, $g^{2}$ (quadriertem Nenner) und der Reihenfolge $f\' g$ ZUERST, dann $- f g\'$.',
          true,
          `**Ansatz:** Wortlaut der Quotientenregel rekapitulieren — drei kritische Bestandteile: Minus im Zähler, Reihenfolge $f'g$ zuerst, quadrierter Nenner.

**Rechnung:** Die Formel $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' g - f g'}{g^{2}}$ stimmt. Im Zähler steht zuerst $f'$ mal $g$, dann minus $f$ mal $g'$. Der Nenner ist immer $g^{2}$ (nicht $g$).

**Probe:** Test mit $f(x) = x^2$, $g(x) = x$ (also $f/g = x$, Ableitung $1$): $\\dfrac{2x \\cdot x - x^2 \\cdot 1}{x^2} = \\dfrac{x^2}{x^2} = 1$. ✓

**Typischer Fehler:** Plus statt Minus im Zähler (Verwechslung mit Produktregel) oder Nenner nicht quadrieren.`,
          [
            'Drei Bestandteile: Vorzeichen, Reihenfolge, Nenner-Quadrat.',
            'Im Zähler steht $f\'g$ ZUERST, dann minus $fg\'$.',
            'Der Nenner ist immer $g^{2}$, nicht $g$.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['qr-formel'] },
      ),

      // (2) apply-guided · multiple-choice · qr-formel
      tag(
        mc(
          '$f(x) = \\dfrac{x^{2}}{x + 1}$. Was ist $f\'(x)$?',
          [
            '$\\dfrac{x^{2} + 2x}{(x+1)^{2}}$',
            '$2x$',
            '$\\dfrac{x^{2} - 2x}{(x+1)^{2}}$',
            '$\\dfrac{2x (x+1) - x^{2}}{x + 1}$',
          ],
          0,
          `**Ansatz:** Quotient $u/v$ mit $u = x^{2}$, $v = x + 1$. Quotientenregel anwenden.

**Rechnung:** $u' = 2x$, $v' = 1$. $f'(x) = \\dfrac{2x \\cdot (x+1) - x^{2} \\cdot 1}{(x+1)^{2}} = \\dfrac{2x^{2} + 2x - x^{2}}{(x+1)^{2}} = \\dfrac{x^{2} + 2x}{(x+1)^{2}} = \\dfrac{x(x+2)}{(x+1)^{2}}$.

**Probe:** Bei $x = 0$: $f'(0) = \\dfrac{0}{1} = 0$. Tatsächlich hat $f(x) = x^{2}/(x+1)$ bei $x = 0$ eine Nullstelle mit waagerechter Tangente. ✓

**Typischer Fehler:** Faktor-für-Faktor abgeleitet ($u'/v' = 2x/1 = 2x$) oder Reihenfolge im Zähler vertauscht ($-2x^2 + 2x - x^2 = x^2 - 2x$ statt $+2x$).`,
          [
            'Welche Regel? Bruch — Quotientenregel.',
            'Einzel-Ableitungen: $(x^2)\' = 2x$, $(x+1)\' = 1$.',
            'Zähler ausmultiplizieren und zusammenfassen: $2x(x+1) - x^2$.',
          ],
          {
            1: 'Faktor-für-Faktor abgeleitet ($u\'/v\' = 2x/1 = 2x$) — das entspricht dem klassischen Fehler $\\tfrac{f\'}{g\'}$, nicht der Quotientenregel.',
            2: 'Reihenfolge im Zähler vertauscht: $f g\' - f\' g = x^2 - 2x(x+1) = x^2 - 2x^2 - 2x = -(x^2 + 2x)$. Das negative Vorzeichen verrät die vertauschte Reihenfolge.',
            3: 'Nenner nicht quadriert: hier steht nur $g = x+1$ statt $g^2 = (x+1)^2$. Die Quotientenregel hat IMMER $g^{2}$ im Nenner.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['qr-formel'] },
      ),

      // (3) apply-independent · number-input · qr-formel
      tag(
        ni(
          '$f(x) = \\dfrac{x^{2}}{x + 1}$. Berechne $f\'(1)$ (exakt).',
          0.75, 0.01, '',
          `**Ansatz:** Quotientenregel mit $u = x^{2}$, $v = x+1$. Dann $x = 1$ einsetzen.

**Rechnung:** $f'(x) = \\dfrac{2x(x+1) - x^{2}}{(x+1)^{2}} = \\dfrac{x^{2} + 2x}{(x+1)^{2}}$. Bei $x = 1$: $f'(1) = \\dfrac{1 + 2}{4} = \\dfrac{3}{4} = 0{,}75$.

**Probe:** Numerisch $\\dfrac{f(1{,}001) - f(1)}{0{,}001} \\approx 0{,}75$. ✓

**Typischer Fehler:** Faktor-für-Faktor: $u'(1)/v'(1) = 2/1 = 2$ — falsch.`,
          [
            'Quotientenregel mit $u = x^2$, $v = x + 1$.',
            'Zähler: $2x(x+1) - x^2$, Nenner: $(x+1)^2$.',
            'Bei $x = 1$: Nenner $= 4$, Zähler $= 3$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['qr-formel'] },
      ),

      // (4) error-analysis · multiple-choice · qr-formel
      tag(
        mc(
          'Ein Student berechnet $\\left(\\dfrac{\\sin x}{x}\\right)\' = \\dfrac{\\cos x}{1} = \\cos x$. Welcher Fehler liegt vor?',
          [
            'Quotientenregel nicht angewandt — Zähler und Nenner einzeln abgeleitet ($u\'/v\'$), beide Summanden $u\'v$ und $uv\'$ fehlen. Korrekt: $\\dfrac{x \\cos x - \\sin x}{x^{2}}$.',
            'Korrekt — $(\\sin x / x)\' = \\cos x$.',
            'Vorzeichenfehler — der Student müsste $-\\cos x$ schreiben.',
            'Der Nenner ist falsch — er sollte $x^{2}$ statt $1$ sein, sonst stimmt der Rest.',
          ],
          0,
          `**Ansatz:** Korrekt wäre Quotientenregel mit $u = \\sin x$, $v = x$: $\\dfrac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^{2}} = \\dfrac{x \\cos x - \\sin x}{x^{2}}$.

**Rechnung:** Der Student schreibt $\\dfrac{(\\sin x)'}{(x)'} = \\dfrac{\\cos x}{1} = \\cos x$ — das ist exakt der "Faktor-für-Faktor"-Fehler $\\tfrac{f'}{g'}$, völlig anders als die Quotientenregel.

**Probe:** Bei $x = \\pi$: korrekt $\\dfrac{\\pi \\cdot (-1) - 0}{\\pi^{2}} = -\\dfrac{1}{\\pi} \\approx -0{,}318$. Studenten-Antwort: $\\cos \\pi = -1$. Drastisch verschieden.

**Typischer Fehler:** Quotient wie Summe behandeln — "jeder Teil einzeln" ist NICHT erlaubt.`,
          [
            'Setze die korrekte Quotientenregel an und vergleiche.',
            'Korrekt: $\\dfrac{f\'g - fg\'}{g^2}$ — der Student hat nur $f\'/g\'$ gerechnet.',
            'Das Studenten-Ergebnis ist die Faktor-für-Faktor-Variante.',
          ],
          {
            1: 'Der Student hat NICHT die Quotientenregel angewandt — der korrekte Ausdruck $\\dfrac{x\\cos x - \\sin x}{x^2}$ unterscheidet sich deutlich von $\\cos x$.',
            2: 'Vorzeichen ist hier nicht das Problem — der Fehler ist, dass der Student die Quotientenregel komplett ignoriert hat.',
            3: 'Nicht "nur der Nenner" — auch der Zähler stimmt nicht: Es müssten zwei Summanden im Zähler stehen, nicht nur $\\cos x$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['qr-formel'] },
      ),

      // (5) transfer · number-input · qr-formel
      tag(
        ni(
          '$f(x) = \\dfrac{\\ln x}{x}$. Berechne $f\'(e)$ (exakt).',
          0, 0.001, '',
          `**Ansatz:** Quotientenregel mit $u = \\ln x$, $v = x$. Dann $x = e$ einsetzen.

**Rechnung:** $u' = \\dfrac{1}{x}$, $v' = 1$. $f'(x) = \\dfrac{(1/x) \\cdot x - \\ln x \\cdot 1}{x^{2}} = \\dfrac{1 - \\ln x}{x^{2}}$. Bei $x = e$: $f'(e) = \\dfrac{1 - 1}{e^{2}} = 0$.

**Probe:** Bei $x = e$ erreicht $f(x) = \\ln x / x$ sein Maximum (bekannte Tatsache aus der Kurvendiskussion), also $f'(e) = 0$. ✓

**Typischer Fehler:** Faktor-für-Faktor: $(1/x)/1 = 1/x$, bei $x = e$ ergibt $1/e \\ne 0$. Oder Vorzeichen vertauscht.`,
          [
            'Quotientenregel mit $u = \\ln x$, $v = x$.',
            'Einzel-Ableitungen: $(\\ln x)\' = 1/x$, $(x)\' = 1$.',
            'Bei $x = e$ ist $\\ln e = 1$ — der Zähler $1 - \\ln x$ wird $0$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['qr-formel'] },
      ),

      // (Bonus 0.6) apply-independent · multiple-choice · qr-formel
      tag(
        mc(
          '$f(x) = \\dfrac{x^{2} + 3}{x}$. Was ist $f\'(x)$ in einfachster Form?',
          [
            '$\\dfrac{x^{2} - 3}{x^{2}}$',
            '$\\dfrac{x^{2} + 3}{x^{2}}$',
            '$2x$',
            '$\\dfrac{3 - x^{2}}{x}$',
          ],
          0,
          `**Ansatz:** Quotientenregel mit $u = x^{2} + 3$, $v = x$. (Alternativ: Bruch zerlegen zu $x + 3/x$ und Sum/Potenzregel — gleicher Endwert.)

**Rechnung:** $u' = 2x$, $v' = 1$. $f'(x) = \\dfrac{2x \\cdot x - (x^{2} + 3) \\cdot 1}{x^{2}} = \\dfrac{2x^{2} - x^{2} - 3}{x^{2}} = \\dfrac{x^{2} - 3}{x^{2}} = 1 - \\dfrac{3}{x^{2}}$.

**Probe:** Alternativ: $f(x) = x + 3/x$, $f'(x) = 1 - 3/x^{2} = (x^{2} - 3)/x^{2}$. ✓ Bei $x = 1$: $f'(1) = -2$. Numerisch bestätigt.

**Typischer Fehler:** Vorzeichen vertauscht ($u'v$ und $uv'$ falsch herum) oder Faktor-für-Faktor.`,
          [
            'Quotientenregel oder Bruch zerlegen: $\\dfrac{x^2 + 3}{x} = x + \\dfrac{3}{x}$.',
            'Bei Quotientenregel: $\\dfrac{2x \\cdot x - (x^2 + 3)}{x^2}$.',
            'Zähler vereinfachen: $2x^2 - x^2 - 3 = x^2 - 3$.',
          ],
          {
            1: 'Vorzeichen-Fehler im Zähler: Du hast $2x \\cdot x + (x^2+3) = 3x^2 + 3$ gerechnet, also Plus statt Minus. Korrekt ist $2x^2 - (x^2+3) = x^2 - 3$.',
            2: 'Faktor-für-Faktor: $(x^2+3)\'/x\' = 2x/1 = 2x$ — der klassische $f\'/g\'$-Fehler.',
            3: 'Nenner sollte $x^2$ sein (Quotientenregel hat $g^2$), und das Vorzeichen ist ebenfalls vertauscht ($3 - x^2$ statt $x^2 - 3$).',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['qr-formel'] },
      ),
    ],

    // ── [1] qr-naz — NAZ-Eselsbrücke ───────────────────────────────────
    1: [
      // (6) recognize · true-false · qr-naz
      tag(
        tf(
          'Die NAZ-Eselsbrücke lautet: "Nenner mal Ableitung des Zählers — minus — Zähler mal Ableitung des Nenners — geteilt durch Nenner zum Quadrat."',
          true,
          `**Ansatz:** Die NAZ-Reihenfolge ist eine sprachliche Merkhilfe für $\\dfrac{f'g - fg'}{g^{2}}$ — sie sagt, in welcher Reihenfolge die vier Bestandteile zusammengesetzt werden.

**Rechnung:** N · A · Z bedeutet **N**enner ($g$) mal **A**bleitung **Z**ähler ($f'$) — das ist der erste Summand $g \\cdot f' = f' g$. Dann **minus** **Z**ähler ($f$) mal **A**bleitung **N**enner ($g'$) — der zweite Summand $f g'$. Geteilt durch $N^{2} = g^{2}$.

**Probe:** Für $\\dfrac{\\sin x}{x}$: NAZ: $x \\cdot \\cos x$ — minus — ZAN: $\\sin x \\cdot 1$ — durch $x^{2}$ → $\\dfrac{x \\cos x - \\sin x}{x^{2}}$. ✓

**Typischer Fehler:** ZAN minus NAZ rechnen — das liefert das negative Ergebnis (gleicher Betrag, falsches Vorzeichen).`,
          [
            'Welche Buchstaben stehen für was? N = Nenner, A = Ableitung, Z = Zähler.',
            'NAZ kommt ZUERST, dann minus ZAN, alles durch $N^{2}$.',
            'Test mit $\\sin x / x$: NAZ = $x \\cos x$, ZAN = $\\sin x$.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['qr-naz'] },
      ),

      // (7) apply-guided · multiple-choice · qr-naz
      tag(
        mc(
          'Wende die NAZ-Eselsbrücke auf $f(x) = \\dfrac{e^{x}}{\\cos x}$ an. Was ist $f\'(x)$?',
          [
            '$\\dfrac{\\cos x \\cdot e^{x} - e^{x} \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{e^{x}(\\cos x + \\sin x)}{\\cos^{2} x}$',
            '$\\dfrac{e^{x} \\cdot (-\\sin x) - \\cos x \\cdot e^{x}}{\\cos^{2} x}$',
            '$\\dfrac{\\cos x \\cdot e^{x} + e^{x} \\cdot (-\\sin x)}{\\cos^{2} x}$',
            '$\\dfrac{e^{x}}{-\\sin x}$',
          ],
          0,
          `**Ansatz:** $u = e^{x}$ (Zähler), $v = \\cos x$ (Nenner). $u' = e^{x}$, $v' = -\\sin x$.

**Rechnung:** NAZ = Nenner · Abl.Zähler = $\\cos x \\cdot e^{x}$. ZAN = Zähler · Abl.Nenner = $e^{x} \\cdot (-\\sin x)$. Damit $f'(x) = \\dfrac{\\cos x \\cdot e^{x} - e^{x} \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{e^{x} \\cos x + e^{x} \\sin x}{\\cos^{2} x} = \\dfrac{e^{x}(\\cos x + \\sin x)}{\\cos^{2} x}$.

**Probe:** Bei $x = 0$: $f'(0) = \\dfrac{1 \\cdot (1 + 0)}{1} = 1$. $f(x) = e^{x}/\\cos x$, $f(0) = 1$, numerisch $\\approx 1$. ✓

**Typischer Fehler:** Das doppelte Minus $-(-\\sin x) = +\\sin x$ falsch behandeln (Antwort C) oder NAZ und ZAN vertauschen (Antwort B).`,
          [
            'Welche Buchstaben? N = $\\cos x$, A.Z = $e^x$, Z = $e^x$, A.N = $-\\sin x$.',
            'Setze NAZ - ZAN zusammen: $\\cos x \\cdot e^x - e^x \\cdot (-\\sin x)$.',
            'Das doppelte Minus wird PLUS: $- e^x \\cdot (-\\sin x) = + e^x \\sin x$.',
          ],
          {
            1: 'ZAN minus NAZ statt NAZ minus ZAN — Reihenfolge im Zähler vertauscht. Das liefert das negative Ergebnis (gleicher Betrag, falsches Vorzeichen).',
            2: 'Plus statt Minus zwischen NAZ und ZAN — Verwechslung mit der Produktregel. Quotientenregel hat IMMER Minus zwischen den beiden Summanden.',
            3: 'Faktor-für-Faktor: $u\'/v\' = e^x / (-\\sin x)$ — der klassische Quotientenregel-Fehler $f\'/g\'$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['qr-naz'] },
      ),

      // (8) apply-independent · multiple-choice · qr-naz
      tag(
        mc(
          '$f(x) = \\dfrac{1}{1 + x^{2}}$. Was ist $f\'(x)$ (NAZ-Eselsbrücke anwenden)?',
          [
            '$\\dfrac{-2x}{(1 + x^{2})^{2}}$',
            '$\\dfrac{2x}{(1 + x^{2})^{2}}$',
            '$\\dfrac{-2x}{1 + x^{2}}$',
            '$0$',
          ],
          0,
          `**Ansatz:** $u = 1$, $v = 1 + x^{2}$. $u' = 0$, $v' = 2x$.

**Rechnung:** NAZ = $(1 + x^{2}) \\cdot 0 = 0$. ZAN = $1 \\cdot 2x = 2x$. Also $f'(x) = \\dfrac{0 - 2x}{(1 + x^{2})^{2}} = \\dfrac{-2x}{(1 + x^{2})^{2}}$.

**Probe:** Bei $x = 0$: $f'(0) = 0$. $f(x) = 1/(1+x^2)$ hat bei $x = 0$ ein Maximum, also Steigung $0$. ✓ Bei $x = 1$: $f'(1) = -2/4 = -0{,}5$.

**Typischer Fehler:** "$u' = 0$, also ist $f' = 0$" — dabei wird der zweite Summand $-fg'$ unterschlagen.`,
          [
            'NAZ: Nenner mal Abl.Zähler — Nenner ist $1 + x^2$, Abl.Zähler $(1)\' = 0$.',
            'ZAN: Zähler mal Abl.Nenner — Zähler $1$, Abl.Nenner $2x$.',
            'Also $\\dfrac{0 - 2x}{(1+x^2)^2}$ — das Minus überlebt!',
          ],
          {
            1: 'Vorzeichen vergessen: NAZ ist $0$, ZAN ist $2x$. Der Bruch hat MINUS dazwischen, also $0 - 2x = -2x$, nicht $+2x$.',
            2: 'Nenner ist $g$ statt $g^2$. Die Quotientenregel hat IMMER $g^2 = (1+x^2)^2$ als Nenner, nicht nur $g = 1 + x^2$.',
            3: 'Der Student dachte vielleicht "$u\' = 0$, also Ableitung null" — falsch. Auch wenn der erste Summand $f\'g = 0$ ist, bleibt der zweite Summand $-fg\' = -2x$.',
          },
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['qr-naz'] },
      ),

      // (9) error-analysis · multiple-choice · qr-naz
      tag(
        mc(
          'Ein Student berechnet $\\left(\\dfrac{x}{\\ln x}\\right)\' = \\dfrac{\\ln x + x \\cdot (1/x)}{(\\ln x)^{2}} = \\dfrac{\\ln x + 1}{(\\ln x)^{2}}$. Welcher Fehler liegt vor?',
          [
            'Plus statt Minus zwischen NAZ und ZAN — Verwechslung mit der Produktregel. Korrekt ist NAZ minus ZAN, also $\\dfrac{\\ln x - 1}{(\\ln x)^{2}}$.',
            'Faktor-für-Faktor: $1 / (1/x) = x$, also $f\' = x$.',
            'Korrekt — die Quotientenregel liefert genau dieses Ergebnis.',
            'Nenner ist falsch — der Student hätte $\\ln x$ statt $(\\ln x)^{2}$ schreiben müssen.',
          ],
          0,
          `**Ansatz:** $u = x$, $v = \\ln x$. $u' = 1$, $v' = 1/x$. Korrekte NAZ: $\\ln x \\cdot 1 = \\ln x$. ZAN: $x \\cdot (1/x) = 1$. Quotientenregel: $\\dfrac{\\ln x - 1}{(\\ln x)^{2}}$.

**Rechnung:** Der Student hat NAZ + ZAN statt NAZ − ZAN gerechnet: $\\ln x + 1$ statt $\\ln x - 1$. Das Vorzeichen zwischen den beiden Summanden ist KEIN Plus (Produktregel), sondern MINUS (Quotientenregel).

**Probe:** Bei $x = e$: korrekt $f'(e) = \\dfrac{1 - 1}{1} = 0$. Studenten-Antwort: $\\dfrac{1 + 1}{1} = 2$. Drastisch verschieden.

**Typischer Fehler:** Produktregel- und Quotientenregel-Vorzeichen verwechselt.`,
          [
            'Stelle die korrekte NAZ-Anwendung auf und vergleiche.',
            'Korrekt: $\\dfrac{\\ln x - 1}{(\\ln x)^2}$ — der Student hat $+ 1$ statt $- 1$.',
            'Welches Vorzeichen steht zwischen NAZ und ZAN in der Quotientenregel?',
          ],
          {
            1: '$u\'/v\' = 1/(1/x) = x$ — der klassische Faktor-für-Faktor-Fehler — hat der Student aber gar nicht gemacht. Sein Fehler liegt im Vorzeichen.',
            2: 'Vergleich Studenten-Ergebnis bei $x = e$: liefert $2$, aber korrekt ist $0$. Die "Korrektheit" trifft also nicht zu.',
            3: 'Nenner $(\\ln x)^{2}$ ist KORREKT — die Quotientenregel hat IMMER $g^{2}$ im Nenner. Hier liegt der Fehler nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['qr-naz'] },
      ),

      // (10) transfer · matching · qr-naz, qr-formel
      tag(
        matching(
          'Ordne jeder Funktion ihre korrekte Ableitung zu (NAZ-Eselsbrücke anwenden):',
          [
            { left: '$\\dfrac{x}{x^{2} + 1}$', right: '$\\dfrac{1 - x^{2}}{(x^{2} + 1)^{2}}$' },
            { left: '$\\dfrac{\\sin x}{x}$',   right: '$\\dfrac{x \\cos x - \\sin x}{x^{2}}$' },
            { left: '$\\dfrac{e^{x}}{x}$',     right: '$\\dfrac{e^{x}(x - 1)}{x^{2}}$' },
            { left: '$\\dfrac{x^{2}}{e^{x}}$', right: '$\\dfrac{x(2 - x)}{e^{x}}$' },
          ],
          `**Ansatz:** Für jede Funktion NAZ anwenden — kein Verwechseln mit anderen Funktionen.

**Rechnung:**
- $\\dfrac{x}{x^{2} + 1}$: $u = x$, $v = x^{2}+1$, $u' = 1$, $v' = 2x$. NAZ = $(x^{2}+1) \\cdot 1$, ZAN = $x \\cdot 2x = 2x^{2}$. $\\dfrac{x^{2}+1 - 2x^{2}}{(x^{2}+1)^{2}} = \\dfrac{1 - x^{2}}{(x^{2}+1)^{2}}$. ✓
- $\\dfrac{\\sin x}{x}$: NAZ = $x \\cos x$, ZAN = $\\sin x$. $\\dfrac{x \\cos x - \\sin x}{x^{2}}$. ✓
- $\\dfrac{e^{x}}{x}$: NAZ = $x e^{x}$, ZAN = $e^{x}$. $\\dfrac{x e^{x} - e^{x}}{x^{2}} = \\dfrac{e^{x}(x-1)}{x^{2}}$. ✓
- $\\dfrac{x^{2}}{e^{x}}$: NAZ = $e^{x} \\cdot 2x$, ZAN = $x^{2} e^{x}$. $\\dfrac{2x e^{x} - x^{2} e^{x}}{e^{2x}} = \\dfrac{2x - x^{2}}{e^{x}} = \\dfrac{x(2-x)}{e^{x}}$. ✓

**Probe:** Jede rechte Seite ist eindeutig EINER linken Seite zugeordnet — kein Doppel-Match.

**Typischer Fehler:** Bei der letzten Aufgabe vergessen, mit $e^{x}$ zu kürzen ($e^{2x}$ im Nenner statt $e^{x}$).`,
          [
            'NAZ je Funktion: Nenner mal Abl.Zähler ZUERST.',
            'Dann minus ZAN: Zähler mal Abl.Nenner.',
            'Alles durch $g^{2}$, ggf. mit gemeinsamen Faktoren kürzen.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['qr-naz', 'qr-formel'] },
      ),

      // (Bonus 1.6) apply-guided · multiple-choice · qr-naz, qr-formel
      tag(
        mc(
          '$f(x) = \\dfrac{2x + 1}{3x - 2}$. Was ist $f\'(x)$?',
          [
            '$\\dfrac{-7}{(3x - 2)^{2}}$',
            '$\\dfrac{7}{(3x - 2)^{2}}$',
            '$\\dfrac{2}{3}$',
            '$\\dfrac{-7}{3x - 2}$',
          ],
          0,
          `**Ansatz:** $u = 2x + 1$, $v = 3x - 2$. $u' = 2$, $v' = 3$. Quotientenregel.

**Rechnung:** $f'(x) = \\dfrac{2 \\cdot (3x - 2) - (2x + 1) \\cdot 3}{(3x - 2)^{2}} = \\dfrac{6x - 4 - 6x - 3}{(3x - 2)^{2}} = \\dfrac{-7}{(3x - 2)^{2}}$.

**Probe:** Bei $x = 1$: $f(1) = 3/1 = 3$, $f(1{,}001) = 3{,}002/1{,}003 \\approx 2{,}993$, Differenzenquotient $\\approx -7$. ✓ Die Funktion fällt überall (außer in der Polstelle bei $x = 2/3$).

**Typischer Fehler:** Reihenfolge im Zähler vertauscht (liefert $+7$) oder Faktor-für-Faktor ($u'/v' = 2/3$).`,
          [
            'Quotientenregel: $u\'v - uv\'$, dividiert durch $v^2$.',
            'Einzel-Ableitungen: $u\' = 2$, $v\' = 3$.',
            'Zähler ausmultiplizieren: $6x - 4 - 6x - 3 = -7$. $x$-Terme heben sich auf.',
          ],
          {
            1: 'Reihenfolge im Zähler vertauscht ($u v\' - u\' v = (2x+1) \\cdot 3 - 2 \\cdot (3x-2) = 6x + 3 - 6x + 4 = 7$) — das Vorzeichen kippt.',
            2: 'Faktor-für-Faktor: $u\'/v\' = 2/3$ — der klassische $f\'/g\'$-Fehler. Beide Summanden der Quotientenregel fehlen.',
            3: 'Nenner ist $g$ statt $g^{2}$ — die Quotientenregel hat IMMER $g^{2}$, hier also $(3x - 2)^{2}$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['qr-naz', 'qr-formel'] },
      ),
    ],

    // ── [2] qr-vorzeichen — Reihenfolge im Zähler ───────────────────────
    2: [
      // (11) recognize · true-false · qr-vorzeichen
      tag(
        tf(
          'Im Zähler der Quotientenregel kommt $f\' \\cdot g$ ZUERST, dann das Minuszeichen, dann $f \\cdot g\'$. Vertauschen der Reihenfolge ($f g\' - f\' g$) liefert das negative Ergebnis.',
          true,
          `**Ansatz:** Die Reihenfolge im Zähler ist nicht egal — sie bestimmt das Vorzeichen des Endergebnisses.

**Rechnung:** $f' g - f g' = -(f g' - f' g)$. Vertauschen der Reihenfolge ist also gleichbedeutend mit einem Vorzeichen-Flip. Auf der Funktion: aus einer steigenden wird scheinbar eine fallende Funktion.

**Probe:** Test mit $f(x) = x$, $g(x) = x + 1$ (also $f/g = x/(x+1)$, korrekte Ableitung $1/(x+1)^{2}$): $f'g - fg' = 1 \\cdot (x+1) - x \\cdot 1 = 1$. Vertauscht: $fg' - f'g = x \\cdot 1 - 1 \\cdot (x+1) = -1$. Liefert $-1/(x+1)^{2}$ — falsches Vorzeichen.

**Typischer Fehler:** Reihenfolge "irgendwo abgelesen" und beim Aufschreiben vertauscht — Ableitung scheint zu fallen statt zu steigen.`,
          [
            'Was passiert mit $a - b$, wenn man die Reihenfolge zu $b - a$ vertauscht?',
            'Auf eine Ableitung übertragen: Vorzeichen kippt.',
            'Test mit $f = x$, $g = x+1$ — Differenz $1$ vs. $-1$.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['qr-vorzeichen'] },
      ),

      // (12) apply-guided · multiple-choice · qr-vorzeichen
      tag(
        mc(
          '$f(x) = \\dfrac{x^{3}}{\\cos x}$. Welcher Ausdruck ist die KORREKTE Ableitung (Reihenfolge $f\' g - f g\'$ beachten)?',
          [
            '$\\dfrac{3x^{2} \\cos x + x^{3} \\sin x}{\\cos^{2} x}$',
            '$\\dfrac{-x^{3} \\sin x - 3x^{2} \\cos x}{\\cos^{2} x}$',
            '$\\dfrac{3x^{2} \\cos x - x^{3} \\sin x}{\\cos^{2} x}$',
            '$\\dfrac{3x^{2}}{-\\sin x}$',
          ],
          0,
          `**Ansatz:** $u = x^{3}$, $v = \\cos x$. $u' = 3x^{2}$, $v' = -\\sin x$.

**Rechnung:** $f'(x) = \\dfrac{3x^{2} \\cdot \\cos x - x^{3} \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{3x^{2} \\cos x + x^{3} \\sin x}{\\cos^{2} x}$. Das doppelte Minus wird PLUS.

**Probe:** Bei $x = 0$: $f'(0) = 0$ (steht im Zähler $0$). Numerisch bestätigt. Bei $x = \\pi/4$ ist das Vorzeichen positiv (Funktion steigt). ✓

**Typischer Fehler:** Reihenfolge vertauscht (Antwort B liefert das negative Ergebnis) oder $(\\cos x)' = -\\sin x$ als $+\\sin x$ behandelt (Antwort C — Minus von $v'$ vergessen).`,
          [
            'Quotientenregel: $f\' g - f g\'$, durch $g^{2}$.',
            'Einzel-Ableitungen: $(x^3)\' = 3x^2$, $(\\cos x)\' = -\\sin x$.',
            'Doppeltes Minus: $- x^3 \\cdot (-\\sin x) = + x^3 \\sin x$.',
          ],
          {
            1: 'Reihenfolge im Zähler vertauscht: $f g\' - f\' g = x^3 \\cdot (-\\sin x) - 3x^2 \\cos x = -x^3 \\sin x - 3x^2 \\cos x$. Das Vorzeichen ist das Negative des korrekten Ergebnisses.',
            2: 'Das Minus von $(\\cos x)\' = -\\sin x$ wurde vergessen: $v\' = +\\sin x$ statt $-\\sin x$. Das doppelte Minus, das normalerweise zu Plus wird, fehlt.',
            3: 'Faktor-für-Faktor: $u\'/v\' = 3x^2/(-\\sin x)$ — der klassische $f\'/g\'$-Fehler.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['qr-vorzeichen'] },
      ),

      // (13) apply-independent · number-input · qr-vorzeichen, qr-formel
      tag(
        ni(
          '$f(x) = \\dfrac{x^{2} + 1}{x - 1}$. Berechne $f\'(2)$.',
          -1, 0.01, '',
          `**Ansatz:** $u = x^{2} + 1$, $v = x - 1$. $u' = 2x$, $v' = 1$. Quotientenregel — Reihenfolge $f'g - fg'$ beachten.

**Rechnung:** $f'(x) = \\dfrac{2x \\cdot (x - 1) - (x^{2} + 1) \\cdot 1}{(x - 1)^{2}} = \\dfrac{2x^{2} - 2x - x^{2} - 1}{(x - 1)^{2}} = \\dfrac{x^{2} - 2x - 1}{(x - 1)^{2}}$. Bei $x = 2$: $f'(2) = \\dfrac{4 - 4 - 1}{1} = -1$.

**Probe:** Bei $x = 2$: $f(2) = 5$, $f(2{,}001) \\approx 4{,}999$, Differenzenquotient $\\approx -1$. ✓ Die Funktion fällt bei $x = 2$.

**Typischer Fehler:** Reihenfolge vertauscht ($fg' - f'g = x^{2} + 1 - 2x(x-1) = -x^{2} + 2x + 1$, bei $x = 2$: $-4 + 4 + 1 = 1$) — Vorzeichen falsch.`,
          [
            'Quotientenregel mit $u = x^2 + 1$, $v = x - 1$.',
            'Zähler: $2x(x-1) - (x^2 + 1) = 2x^2 - 2x - x^2 - 1 = x^2 - 2x - 1$.',
            'Bei $x = 2$: Zähler $= -1$, Nenner $(x-1)^2 = 1$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['qr-vorzeichen', 'qr-formel'] },
      ),

      // (14) error-analysis · multiple-choice · qr-vorzeichen (Reihenfolge fg' - f'g)
      tag(
        mc(
          'Ein Student berechnet $\\left(\\dfrac{x}{x^{2}}\\right)\' = \\dfrac{x \\cdot 2x - x^{2} \\cdot 1}{x^{4}} = \\dfrac{x^{2}}{x^{4}} = \\dfrac{1}{x^{2}}$. Wo liegt der Fehler?',
          [
            'Reihenfolge im Zähler vertauscht: Student rechnet $f g\' - f\' g$ statt $f\' g - f g\'$ — das Vorzeichen kippt. Korrekt: $\\dfrac{1 \\cdot x^{2} - x \\cdot 2x}{x^{4}} = \\dfrac{-x^{2}}{x^{4}} = -\\dfrac{1}{x^{2}}$.',
            'Korrekt — die Ableitung ist tatsächlich $\\dfrac{1}{x^{2}}$.',
            'Der Nenner $x^{4}$ ist falsch — er sollte $x^{2}$ sein.',
            '$(x)\' = 0$ wäre richtig, nicht $1$.',
          ],
          0,
          `**Ansatz:** $f(x) = x/x^{2} = 1/x$ (gekürzt), also $f'(x) = -1/x^{2}$. Studenten-Antwort $+1/x^{2}$ hat falsches Vorzeichen.

**Rechnung:** Korrekte Quotientenregel: $u = x$, $v = x^{2}$, $u' = 1$, $v' = 2x$. $f' g - f g' = 1 \\cdot x^{2} - x \\cdot 2x = x^{2} - 2x^{2} = -x^{2}$. Dividiert durch $x^{4}$: $f'(x) = -1/x^{2}$.

Der Student hat den Zähler als $x \\cdot 2x - x^{2} \\cdot 1 = 2x^{2} - x^{2} = x^{2}$ aufgeschrieben — das ist $f g' - f' g$, also die VERTAUSCHTE Reihenfolge.

**Probe:** $f(x) = 1/x$, $f'(x) = -1/x^{2}$ direkt aus Potenzregel. ✓ Studenten-Antwort $+1/x^{2}$ ist genau das Negative — typisches Vorzeichen-Symptom.

**Typischer Fehler:** NAZ und ZAN vertauschen.`,
          [
            'Schreibe die korrekte Quotientenregel auf und vergleiche.',
            'Korrekt: $f\'g - fg\' = 1 \\cdot x^2 - x \\cdot 2x = -x^2$. Student: $+x^2$.',
            '$f(x) = x/x^2 = 1/x$ — direkt: $f\'(x) = -1/x^2$.',
          ],
          {
            1: 'Die korrekte Ableitung von $1/x$ ist $-1/x^{2}$, NICHT $+1/x^{2}$. Das Vorzeichen des Studenten ist falsch.',
            2: 'Nenner $x^{4} = (x^{2})^{2}$ ist KORREKT — der Quotientenregel-Nenner ist $g^{2}$. Hier nicht der Fehler.',
            3: '$(x)\' = 1$ ist KORREKT (Potenzregel: $1 \\cdot x^{0} = 1$). Hier nicht der Fehler.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['qr-vorzeichen'] },
      ),

      // (15) transfer · multiple-choice · qr-vorzeichen
      tag(
        mc(
          'Welche der folgenden Formeln stellt die KORREKTE Quotientenregel dar?',
          [
            '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\' g - f g\'}{g^{2}}$',
            '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f g\' - f\' g}{g^{2}}$',
            '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\' g - f g\'}{g}$',
            '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f g - f\' g\'}{g^{2}}$',
          ],
          0,
          `**Ansatz:** Drei Bestandteile prüfen: Vorzeichen, Reihenfolge im Zähler, Nenner-Quadrat.

**Rechnung:**
- Antwort A: $\\dfrac{f' g - f g'}{g^{2}}$ — alle drei Kriterien erfüllt ($f'g$ zuerst, Minus, $g^{2}$). ✓
- Antwort B: Reihenfolge vertauscht — liefert das negative Ergebnis.
- Antwort C: Nenner $g$ statt $g^{2}$ — falsch.
- Antwort D: $fg$ und $f'g'$ kombiniert — keine gültige Formel.

**Probe:** Mit $f = g = x$ ($f/g = 1$, Ableitung $0$): Antwort A: $\\dfrac{1 \\cdot x - x \\cdot 1}{x^{2}} = 0$. ✓ Antwort B: dasselbe. Antwort C: $\\dfrac{0}{x} = 0$. Antwort D: $\\dfrac{x^{2} - 1}{x^{2}}$ — schon falsch.

**Typischer Fehler:** Die "Strukturvarianten" (Vorzeichen, Nenner-Potenz) bei der Erinnerung verwechseln.`,
          [
            'Welches Vorzeichen steht zwischen den beiden Summanden im Zähler?',
            'Was steht im Nenner — $g$ oder $g^{2}$?',
            'Reihenfolge der Summanden: $f\'g$ ZUERST oder zweite Stelle?',
          ],
          {
            1: 'Reihenfolge vertauscht: $f g\' - f\' g = -(f\' g - f g\')$ — liefert das negative Ergebnis und ist deshalb keine gültige Quotientenregel.',
            2: 'Nenner $g$ statt $g^{2}$ — die Quotientenregel hat IMMER $g^{2}$. Test mit $f = g = x$: $\\dfrac{0}{x}$ statt $0/x^{2}$ ändert die Skalierung.',
            3: 'Im Zähler stehen $fg$ und $f\'g\'$ — beide Begriffe gehören nicht in die Quotientenregel. Das ist eine willkürlich kombinierte Form, keine echte Regel.',
          },
        ),
        { stage: 'transfer', subGoal: 2, uses: ['qr-vorzeichen'] },
      ),

      // (Bonus 2.6) recognize · true-false · qr-vorzeichen
      tag(
        tf(
          'Wenn man im Zähler der Quotientenregel statt $f\' g - f g\'$ versehentlich $f g\' - f\' g$ schreibt, erhält man dasselbe Ergebnis mit umgekehrtem Vorzeichen — eine steigende Funktion sieht so aus, als würde sie fallen, und umgekehrt.',
          true,
          `**Ansatz:** Reihenfolge im Zähler ↔ Vorzeichen-Flip.

**Rechnung:** $f g' - f' g = -(f' g - f g')$ — exakt das Negative.

**Probe:** Für $f(x) = x$, $g(x) = x+1$: korrekte Ableitung $\\dfrac{1}{(x+1)^{2}} > 0$ (Funktion steigt). Bei vertauschter Reihenfolge: $\\dfrac{-1}{(x+1)^{2}} < 0$ — sieht aus, als würde die Funktion fallen. ✓

**Typischer Fehler:** Den Vorzeichen-Effekt unterschätzen und denken, "irgendwie wird's schon stimmen".`,
          [
            '$a - b$ vs. $b - a$ — welchen Effekt hat das Vertauschen?',
            'Auf einer Ableitung: Vorzeichen ändert sich.',
            'Steigend/fallend kippt entsprechend.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['qr-vorzeichen'] },
      ),
    ],

    // ── [3] qr-via-pr — Alternative über Produkt- + Kettenregel ──────────
    3: [
      // (16) recognize · true-false · qr-via-pr
      tag(
        tf(
          'Die Quotientenregel lässt sich aus der Produktregel + Kettenregel herleiten, indem man $\\dfrac{f}{g} = f \\cdot g^{-1}$ schreibt und dann Produkt- und Kettenregel kombiniert.',
          true,
          `**Ansatz:** Division als Multiplikation mit dem Kehrwert: $\\dfrac{f}{g} = f \\cdot g^{-1}$.

**Rechnung:** $(f \\cdot g^{-1})' = f' \\cdot g^{-1} + f \\cdot (g^{-1})'$ (Produktregel). $(g^{-1})' = -1 \\cdot g^{-2} \\cdot g'$ (Kettenregel). Eingesetzt: $f' g^{-1} - f g^{-2} g' = \\dfrac{f'}{g} - \\dfrac{f g'}{g^{2}} = \\dfrac{f'g - fg'}{g^{2}}$ — exakt die Quotientenregel.

**Probe:** Test mit $f(x) = x^{2}$, $g(x) = x$ (also $f/g = x$, Ableitung $1$): Produkt-Weg: $(x^{2} \\cdot x^{-1})' = 2x \\cdot x^{-1} + x^{2} \\cdot (-x^{-2}) = 2 - 1 = 1$. Quotientenregel direkt: $\\dfrac{2x \\cdot x - x^{2}}{x^{2}} = \\dfrac{x^{2}}{x^{2}} = 1$. ✓

**Typischer Fehler:** Beim Ableiten von $g^{-1}$ die Kettenregel vergessen — dann fehlt der Faktor $g'$ am Ende.`,
          [
            'Wie wird Division mit Potenzen geschrieben?',
            '$\\dfrac{1}{g} = g^{-1}$, Produktregel + Kettenregel.',
            '$(g^{-1})\' = -g^{-2} \\cdot g\'$ via Kettenregel.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['qr-via-pr'] },
      ),

      // (17) apply-guided · multiple-choice · qr-via-pr
      tag(
        mc(
          '$f(x) = \\dfrac{1}{x^{2}}$. Leite über $f(x) = x^{-2}$ mit der Potenzregel ab. Was ist $f\'(x)$?',
          [
            '$-\\dfrac{2}{x^{3}}$',
            '$\\dfrac{2}{x^{3}}$',
            '$-\\dfrac{1}{2x}$',
            '$\\dfrac{1}{x^{2}}$',
          ],
          0,
          `**Ansatz:** Schreibe $1/x^{2}$ als $x^{-2}$ und wende die Potenzregel $(x^{n})' = n x^{n-1}$ an.

**Rechnung:** $f'(x) = -2 \\cdot x^{-2-1} = -2 x^{-3} = -\\dfrac{2}{x^{3}}$.

**Probe:** Quotientenregel zur Kontrolle: $u = 1$, $v = x^{2}$, $u' = 0$, $v' = 2x$. $\\dfrac{0 \\cdot x^{2} - 1 \\cdot 2x}{x^{4}} = \\dfrac{-2x}{x^{4}} = -\\dfrac{2}{x^{3}}$. ✓ Beide Wege liefern dasselbe.

**Typischer Fehler:** Das Minus aus $(x^{-n})' = -n x^{-n-1}$ vergessen, oder die Potenz wird gar nicht korrekt erniedrigt.`,
          [
            'Schreibe $1/x^2$ als $x^{-2}$.',
            'Potenzregel: $(x^n)\' = n x^{n-1}$ mit $n = -2$.',
            '$-2 \\cdot x^{-3} = -2/x^3$.',
          ],
          {
            1: 'Vorzeichen vergessen: $(x^{-2})\' = -2 x^{-3}$, nicht $+2 x^{-3}$. Das Minus aus negativen Exponenten muss übernommen werden.',
            2: 'Potenzregel falsch: Geteilt statt mit $n = -2$ multipliziert. Die Regel ist $n x^{n-1}$, also $-2 x^{-3}$, nicht $-x^{-1}/2$.',
            3: 'Hier wurde gar nicht abgeleitet — das ist die Ausgangsfunktion. Eine Ableitung verändert die Funktion.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['qr-via-pr'] },
      ),

      // (18) apply-independent · number-input · qr-via-pr
      tag(
        ni(
          '$f(x) = \\dfrac{1}{x + 1}$. Leite über $f(x) = (x + 1)^{-1}$ mit der Kettenregel ab. Berechne $f\'(1)$.',
          -0.25, 0.01, '',
          `**Ansatz:** Schreibe $\\dfrac{1}{x+1} = (x+1)^{-1}$ und wende Kettenregel an.

**Rechnung:** Innere Funktion $u(x) = x + 1$, $u'(x) = 1$. Äußere Funktion $h(u) = u^{-1}$, $h'(u) = -u^{-2}$. $f'(x) = h'(u(x)) \\cdot u'(x) = -(x+1)^{-2} \\cdot 1 = -\\dfrac{1}{(x+1)^{2}}$. Bei $x = 1$: $f'(1) = -\\dfrac{1}{4} = -0{,}25$.

**Probe:** Quotientenregel: $\\dfrac{0 \\cdot (x+1) - 1 \\cdot 1}{(x+1)^{2}} = -\\dfrac{1}{(x+1)^{2}}$. ✓ Bei $x = 1$: $-0{,}25$. Numerisch bestätigt.

**Typischer Fehler:** Kettenregel vergessen — innere Ableitung $u'(x) = 1$ unterschlagen.`,
          [
            'Schreibe $1/(x+1)$ als $(x+1)^{-1}$.',
            'Kettenregel: $-1 \\cdot (x+1)^{-2} \\cdot (x+1)\'$.',
            'Innere Ableitung $(x+1)\' = 1$, Endergebnis $-1/(x+1)^2$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['qr-via-pr'] },
      ),

      // (19) error-analysis · multiple-choice · qr-via-pr
      tag(
        mc(
          'Ein Student leitet $f(x) = \\dfrac{1}{x^{2}}$ über $f = x^{-2}$ ab und schreibt $f\'(x) = -2 x^{-1} = -\\dfrac{2}{x}$. Welcher Fehler liegt vor?',
          [
            'Potenzregel falsch angewandt: $(x^{n})\' = n x^{n-1}$, also bei $n = -2$ kommt $-2 x^{-2-1} = -2 x^{-3} = -2/x^{3}$, nicht $-2/x$.',
            'Korrekt — die Ableitung ist tatsächlich $-2/x$.',
            'Vorzeichen falsch: Sollte $+2/x$ heißen, nicht $-2/x$.',
            'Hier hätte man die Quotientenregel verwenden müssen — die Potenzregel ist nicht erlaubt.',
          ],
          0,
          `**Ansatz:** Potenzregel ist $(x^{n})' = n x^{n-1}$ — der Exponent wird um EINS verringert, nicht um null.

**Rechnung:** Bei $n = -2$: $(x^{-2})' = -2 \\cdot x^{-2-1} = -2 \\cdot x^{-3} = -\\dfrac{2}{x^{3}}$. Der Student hat $x^{-1}$ statt $x^{-3}$ — er hat den Exponenten falsch verringert (anscheinend um $1$ erhöht statt verringert).

**Probe:** Quotientenregel: $\\dfrac{-2x}{x^{4}} = -\\dfrac{2}{x^{3}}$. ✓ Studenten-Antwort $-2/x$ ist deutlich verschieden.

**Typischer Fehler:** Den Exponenten bei der Ableitung falsch fortschreiben — $n - 1$ wird zu $n + 1$ oder bleibt unverändert.`,
          [
            'Schreibe die Potenzregel explizit: $(x^n)\' = n x^{n-1}$.',
            'Bei $n = -2$: $n - 1 = -3$. Studenten-Antwort hat aber $-1$.',
            'Vergleiche: $-2 x^{-3} = -2/x^{3}$, nicht $-2/x$.',
          ],
          {
            1: 'Quotientenregel und Potenzregel auf $1/x^{2}$ liefern beide $-2/x^{3}$, nicht $-2/x$. Die Studenten-Antwort ist falsch.',
            2: '$(x^{-2})\' = -2 x^{-3}$, also Minus stimmt. Der Fehler liegt im Exponenten, nicht im Vorzeichen.',
            3: 'Die Potenzregel ist auf $x^{-2}$ sehr wohl anwendbar — das ist sogar oft die einfachste Methode für Brüche der Form $1/x^{n}$. Quotientenregel ist nicht zwingend.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['qr-via-pr'] },
      ),

      // (20) transfer · sorting · qr-via-pr, qr-formel
      tag(
        sorting(
          'Leite $f(x) = \\dfrac{x}{\\cos x}$ alternativ über $f = x \\cdot (\\cos x)^{-1}$ mit Produkt+Kettenregel ab. Bringe die Schritte in die richtige Reihenfolge:',
          [
            'Bruch als Produkt schreiben: $f(x) = x \\cdot (\\cos x)^{-1}$.',
            'Produktregel ansetzen: $f\'(x) = 1 \\cdot (\\cos x)^{-1} + x \\cdot \\left((\\cos x)^{-1}\\right)\'$.',
            'Innere Ableitung mit Kettenregel: $\\left((\\cos x)^{-1}\\right)\' = -(\\cos x)^{-2} \\cdot (-\\sin x) = \\dfrac{\\sin x}{\\cos^{2} x}$.',
            'Einsetzen: $f\'(x) = \\dfrac{1}{\\cos x} + x \\cdot \\dfrac{\\sin x}{\\cos^{2} x}$.',
            'Auf gemeinsamen Nenner $\\cos^{2} x$ bringen: $f\'(x) = \\dfrac{\\cos x + x \\sin x}{\\cos^{2} x}$.',
          ],
          [0, 1, 2, 3, 4],
          `**Ansatz:** Quotient als Produkt schreiben, Produktregel anwenden, innere Ableitung mit Kettenregel — schließlich auf gemeinsamen Nenner zusammenfassen.

**Rechnung:** Begründung der Reihenfolge:
1. Erst die Umformung $f = x \\cdot (\\cos x)^{-1}$, damit die Produktregel überhaupt anwendbar ist.
2. Produktregel ansetzen mit $u = x$ und $v = (\\cos x)^{-1}$.
3. Innere Ableitung $v' = ((\\cos x)^{-1})'$ separat mit Kettenregel.
4. Beide Teile in die Produktregel einsetzen — jetzt steht zwei-Bruch-Ausdruck da.
5. Auf gemeinsamen Nenner bringen — Klausur-Form.

**Probe:** Direkte Quotientenregel: $u = x$, $v = \\cos x$, $u' = 1$, $v' = -\\sin x$. $\\dfrac{1 \\cdot \\cos x - x \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{\\cos x + x \\sin x}{\\cos^{2} x}$. ✓ Identisch.

**Typischer Fehler:** Schritte 2 und 3 vertauschen (Produktregel anwenden, ohne vorher die innere Ableitung zu kennen) — Vorzeichenfehler beim doppelten Minus.`,
          [
            'Was MUSS zuerst geschehen, bevor man eine Regel anwenden kann?',
            'Welche Regel kommt zuerst — Produktregel auf das Produkt oder Kettenregel auf $(\\cos x)^{-1}$?',
            'Die Endform $\\dfrac{\\cos x + x \\sin x}{\\cos^{2} x}$ — was war der vorletzte Schritt?',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['qr-via-pr', 'qr-formel'] },
      ),
    ],

    // ── [4] qr-defbereich — Definitionsbereich g(x) ≠ 0 ─────────────────
    4: [
      // (21) recognize · true-false · qr-defbereich
      tag(
        tf(
          'Die Quotientenregel $\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'g - fg\'}{g^{2}}$ ist nur an Stellen anwendbar, an denen $g(x) \\ne 0$ — an Nullstellen des Nenners ist $f/g$ nicht definiert (Polstelle oder hebbare Lücke) und braucht eine separate Analyse.',
          true,
          `**Ansatz:** Die Voraussetzung der Quotientenregel ist Differenzierbarkeit, und die wiederum braucht $g(x_0) \\ne 0$ — sonst ist $f(x_0)/g(x_0)$ nicht einmal definiert.

**Rechnung:** Im Nenner der Ableitungsformel steht $g^{2}$. Bei $g(x_0) = 0$ wird auch $g^{2}(x_0) = 0$ und die Formel "explodiert" (Division durch null). Außerdem ist $f/g$ selbst dort nicht definiert.

**Probe:** $f(x) = \\dfrac{1}{x - 2}$ — bei $x = 2$ ist $g = 0$, also nicht definiert. Quotientenregel-Anwendung dort sinnlos.

**Typischer Fehler:** Quotientenregel "blind" an Polstellen anwenden und dann nicht erkennen, dass das Ergebnis dort nichts mit der Funktion zu tun hat.`,
          [
            'Was muss für die Differenzierbarkeit eines Bruchs gelten?',
            'Bei $g(x_0) = 0$: Was passiert mit $f/g$ und mit der Ableitungsformel?',
            'Polstellen müssen separat betrachtet werden (Grenzwerte, Asymptoten).',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['qr-defbereich'] },
      ),

      // (22) apply-guided · multiple-choice · qr-defbereich
      tag(
        mc(
          '$f(x) = \\dfrac{x + 1}{x^{2} - 4}$. Welche $x$-Werte sind aus dem Definitionsbereich ausgeschlossen?',
          [
            '$x = 2$ und $x = -2$ (Nullstellen des Nenners $x^{2} - 4 = 0$)',
            '$x = -1$ (Nullstelle des Zählers — Funktion wird $0$, aber definiert)',
            '$x = 0$ (Nullstelle keiner Funktion, aber instinktiv genannt)',
            'Keine — die Funktion ist auf ganz $\\mathbb{R}$ definiert.',
          ],
          0,
          `**Ansatz:** Definitionsbereich eines Bruchs: alle $x$ mit Nenner $\\ne 0$.

**Rechnung:** $x^{2} - 4 = (x - 2)(x + 2) = 0$ bei $x = 2$ und $x = -2$. An diesen Stellen ist $f$ nicht definiert. $D = \\mathbb{R} \\setminus \\{-2, 2\\}$.

**Probe:** Bei $x = 2$: $f(2) = 3/0$ — nicht definiert. ✓ Bei $x = -2$: $f(-2) = -1/0$ — nicht definiert. ✓ Bei $x = -1$: $f(-1) = 0/(-3) = 0$ — definiert (Nullstelle).

**Typischer Fehler:** Nullstellen des Zählers für Definitionslücken halten — dort ist $f$ aber NULL, nicht "undefiniert".`,
          [
            'Bei einem Bruch: Wo ist die Funktion NICHT definiert?',
            'Setze den Nenner $x^2 - 4 = 0$ und löse.',
            'Zähler-Nullstellen sind keine Definitionslücken — nur Funktionswert-Nullstellen.',
          ],
          {
            1: 'Bei $x = -1$ wird der Zähler null, aber der Nenner $(-1)^2 - 4 = -3 \\ne 0$ ist okay. Also $f(-1) = 0/(-3) = 0$ — definiert.',
            2: 'Bei $x = 0$ ist Nenner $0^2 - 4 = -4 \\ne 0$, Zähler $0 + 1 = 1$, also $f(0) = -1/4$ — definiert. Keine Lücke.',
            3: 'Bei $x = \\pm 2$ ist der Nenner null — also definitiv Lücken. Die Funktion ist NICHT auf ganz $\\mathbb{R}$ definiert.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['qr-defbereich'] },
      ),

      // (23) apply-independent · multiple-choice · qr-defbereich
      tag(
        mc(
          '$f(x) = \\dfrac{x^{2} + 1}{\\sin x}$. Welche $x$-Werte im Intervall $[-2\\pi, 2\\pi]$ sind aus dem Definitionsbereich ausgeschlossen?',
          [
            '$x \\in \\{-2\\pi,\\, -\\pi,\\, 0,\\, \\pi,\\, 2\\pi\\}$ — alle Nullstellen von $\\sin x$ im Intervall',
            '$\\{0\\}$ — nur $\\sin 0 = 0$ erkannt, andere Vielfache von $\\pi$ vergessen',
            'Keine — $x^{2} + 1 > 0$ überall, also definiert',
            '$\\{-\\pi/2,\\, \\pi/2,\\, -3\\pi/2,\\, 3\\pi/2\\}$ — Nullstellen von $\\cos x$ statt $\\sin x$',
          ],
          0,
          `**Ansatz:** Definitionslücken bei $\\sin x = 0$. Im gesamten $\\mathbb{R}$ sind das $x = k\\pi$ für $k \\in \\mathbb{Z}$.

**Rechnung:** Im Intervall $[-2\\pi, 2\\pi]$ liegen die Vielfachen von $\\pi$ bei $k = -2, -1, 0, 1, 2$ — also $\\{-2\\pi, -\\pi, 0, \\pi, 2\\pi\\}$. Genau dort wird der Nenner null.

**Probe:** $\\sin(\\pi) = 0$ ✓, $\\sin(2\\pi) = 0$ ✓, $\\sin(0) = 0$ ✓. Bei $x = \\pi/2$: $\\sin(\\pi/2) = 1 \\ne 0$ — kein Problem.

**Typischer Fehler:** Nur $x = 0$ als Nullstelle erkennen und $\\pi, 2\\pi, \\ldots$ vergessen. Oder $\\sin x = 0$ mit $\\cos x = 0$ verwechseln.`,
          [
            'Wann wird $\\sin x = 0$? Bei welchen Argumenten?',
            'Vielfache von $\\pi$: $0, \\pm\\pi, \\pm 2\\pi, \\ldots$',
            'Im Intervall $[-2\\pi, 2\\pi]$ liegen 5 Vielfache von $\\pi$.',
          ],
          {
            1: '$\\sin x = 0$ nicht nur bei $x = 0$ — alle Vielfachen von $\\pi$ sind Nullstellen.',
            2: '$x^{2} + 1 > 0$ stimmt zwar (Zähler immer positiv), aber der Nenner $\\sin x$ wird sehr wohl null an mehreren Stellen. Definitionslücken kommen vom Nenner.',
            3: '$\\cos x = 0$ bei $x = \\pm\\pi/2 + k\\pi$ — aber hier steht $\\sin x$ im Nenner, nicht $\\cos x$. Falsche Funktion analysiert.',
          },
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['qr-defbereich'] },
      ),

      // (24) error-analysis · multiple-choice · qr-defbereich
      tag(
        mc(
          'Ein Student schreibt: "$f(x) = \\dfrac{x^{2} - 1}{x - 1} = x + 1$ (gekürzt), also $f\'(x) = 1$ überall — Definitionsbereich ist ganz $\\mathbb{R}$." Welcher Fehler liegt vor?',
          [
            'Bei $x = 1$ ist $f$ als Quotient ursprünglich NICHT definiert ($g(1) = 0$); das Kürzen erzeugt nur eine HEBBARE Lücke. Strikt gilt $D_f = \\mathbb{R} \\setminus \\{1\\}$. Die "Erweiterung" $f(1) := 2$ muss man explizit setzen.',
            'Korrekt — nach Kürzen gilt $f\'(x) = 1$ auf ganz $\\mathbb{R}$.',
            '$\\dfrac{x^{2} - 1}{x - 1} = x + 1$ stimmt nicht — die Faktorisierung ist falsch.',
            '$f\'(x) = 1$ ist falsch — die Ableitung müsste $2x$ sein.',
          ],
          0,
          `**Ansatz:** Algebraisches Kürzen ($x^{2} - 1 = (x-1)(x+1)$, also $\\dfrac{(x-1)(x+1)}{x-1} = x + 1$) ändert NICHT den ursprünglichen Definitionsbereich.

**Rechnung:** Ursprünglich: $f(x) = \\dfrac{x^{2} - 1}{x - 1}$ — bei $x = 1$ ist Nenner $0$, also nicht definiert. Nach Kürzen: $f(x) = x + 1$ — DIESE Funktion ist überall definiert. Die beiden Funktionen sind nur auf $\\mathbb{R} \\setminus \\{1\\}$ identisch. Bei $x = 1$ hat das Original eine HEBBARE Lücke ($\\lim_{x \\to 1} f(x) = 2$, aber $f(1)$ undefiniert).

**Probe:** Original $f(1)$ ist $0/0$ — Division durch null. Kein definierter Wert ohne explizite Festlegung. ✓

**Typischer Fehler:** Glauben, dass algebraische Kürzungen den Definitionsbereich automatisch erweitern.`,
          [
            'Was passiert mit dem URSPRÜNGLICHEN Ausdruck bei $x = 1$?',
            'Algebraisches Kürzen ändert den Definitionsbereich nicht "automatisch".',
            'Stichwort: hebbare Lücke vs. eigentliche Definition.',
          ],
          {
            1: '$f\'(x) = 1$ stimmt für $x \\ne 1$, aber bei $x = 1$ ist $f$ als Originalbruch gar nicht definiert. Die Aussage "auf ganz $\\mathbb{R}$" ist falsch.',
            2: 'Die Faktorisierung $x^{2} - 1 = (x-1)(x+1)$ stimmt — Anwendung der dritten binomischen Formel. Hier liegt der Fehler nicht.',
            3: 'Auf dem Definitionsbereich $\\mathbb{R} \\setminus \\{1\\}$ ist tatsächlich $f(x) = x + 1$, also $f\'(x) = 1$. Ableitung $2x$ wäre die von $x^{2}$, nicht von $x + 1$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['qr-defbereich'] },
      ),

      // (25) transfer · multiple-choice · qr-defbereich, qr-formel
      tag(
        mc(
          '$f(x) = \\dfrac{x^{2}}{x^{2} - 1}$. An welchen Stellen hat $f$ Polstellen, und ist die Quotientenregel an diesen Stellen anwendbar?',
          [
            'Polstellen bei $x = \\pm 1$ (Nullstellen von $x^{2} - 1$); an diesen Stellen ist die Quotientenregel NICHT anwendbar, weil $g^{2}(x) = 0$ im Nenner steht und $f$ selbst undefiniert ist.',
            'Polstellen bei $x = \\pm 1$, und $f\'(\\pm 1) = 0$ wegen $g^{2}(\\pm 1) = 0$ (Bruch verschwindet).',
            'Keine Polstellen — $x^{2} - 1 \\ne 0$ für alle reellen $x$.',
            'Polstellen bei $x = 0$ (dort wird der Zähler null).',
          ],
          0,
          `**Ansatz:** Polstellen bei $g(x) = 0$: $x^{2} - 1 = 0 \\Rightarrow x = \\pm 1$.

**Rechnung:** Quotientenregel-Anwendung auf den Definitionsbereich $\\mathbb{R} \\setminus \\{-1, 1\\}$: $u = x^{2}$, $v = x^{2} - 1$, $u' = 2x$, $v' = 2x$. $f'(x) = \\dfrac{2x(x^{2} - 1) - x^{2} \\cdot 2x}{(x^{2} - 1)^{2}} = \\dfrac{2x^{3} - 2x - 2x^{3}}{(x^{2} - 1)^{2}} = \\dfrac{-2x}{(x^{2} - 1)^{2}}$. Bei $x = \\pm 1$ ist $(x^{2} - 1)^{2} = 0$ — Division durch null, Quotientenregel "bricht".

**Probe:** $f(x) = x^{2}/(x^{2}-1)$ hat bei $x = \\pm 1$ vertikale Asymptoten (Polstellen): $\\lim_{x \\to 1^{+}} f(x) = +\\infty$, $\\lim_{x \\to 1^{-}} f(x) = -\\infty$ — also echte Polstellen, keine hebbaren Lücken.

**Typischer Fehler:** Glauben, $g^{2} = 0$ führe zu $f' = 0$ — falsch, die Ableitung ist dort nicht definiert.`,
          [
            'Wo ist $g(x) = x^2 - 1$ null?',
            'An diesen Stellen ist $f$ selbst nicht definiert (Polstelle).',
            'Die Quotientenregel-Formel hat $g^2$ im Nenner — bei $g = 0$ Division durch null.',
          ],
          {
            1: 'Die Quotientenregel ist NICHT an Polstellen anwendbar — die Formel liefert $\\dfrac{...}{0}$, also undefiniert. $f\'(\\pm 1)$ existiert gar nicht (Funktion selbst undefiniert).',
            2: '$x^{2} - 1 = 0$ bei $x = \\pm 1$. Es GIBT Polstellen. Die Aussage "keine Polstellen" ist falsch.',
            3: 'Bei $x = 0$: $f(0) = 0/(-1) = 0$ — also Funktionswert null, KEINE Polstelle. Polstellen entstehen, wenn der NENNER null wird, nicht der Zähler.',
          },
        ),
        { stage: 'transfer', subGoal: 4, uses: ['qr-defbereich', 'qr-formel'] },
      ),

      // (Bonus 4.6) apply-independent · number-input · qr-defbereich
      tag(
        ni(
          '$f(x) = \\dfrac{x}{x^{2} - 9}$. An welcher POSITIVEN Stelle $x_{0}$ hat $f$ eine Polstelle?',
          3, 0, '',
          `**Ansatz:** Polstellen bei $g(x) = 0$, hier $x^{2} - 9 = 0$.

**Rechnung:** $x^{2} = 9 \\Rightarrow x = \\pm 3$. Die positive Lösung ist $x_{0} = 3$.

**Probe:** $f(3) = 3/0$ — undefiniert, Polstelle. $f(-3) = -3/0$ — auch Polstelle, aber negativ. $f(0) = 0/(-9) = 0$ — definiert, nur Nullstelle der Funktion. ✓

**Typischer Fehler:** $x^{2} - 9 = 0$ als $x = 9$ falsch lösen (Wurzel vergessen) oder beide Lösungen $\\pm 3$ angeben, obwohl nur die positive verlangt ist.`,
          [
            'Polstellen bei: Nenner $= 0$.',
            'Setze $x^2 - 9 = 0$, löse nach $x$.',
            'Positive Lösung von $x^2 = 9$: $x = \\sqrt{9} = 3$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['qr-defbereich'] },
      ),
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // abl-2-3 — Kettenregel: Schritt für Schritt  (5 SGs × 5 Stufen = 25)
  //   SG 0: kr-formel-fest  — [f(g(x))]' = f'(g(x)) · g'(x)
  //   SG 1: kr-eingesetzt   — innere Funktion bleibt in äußerer Ableitung
  //   SG 2: kr-mehrfach     — Mehrfachverkettung: Faktoren multiplizieren
  //   SG 3: kr-linear-innen — Standardfälle (ax+b)^n, e^(ax), sin(ax)
  //   SG 4: kr-falle-innen  — Klassiker: innere Ableitung vergessen
  // ────────────────────────────────────────────────────────────────────────
  'abl-2-3': {

    // ── [0] kr-formel-fest — Grundformel ───────────────────────────────
    0: [
      // (1) recognize · true-false · kr-formel-fest
      tag(
        tf(
          'Die Kettenregel lautet $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$ — die äußere Ableitung wird an der Stelle $g(x)$ (also der UNVERÄNDERTEN inneren Funktion) ausgewertet und MIT der inneren Ableitung multipliziert.',
          true,
          `**Ansatz:** Wortlaut der Kettenregel — drei Bestandteile: äußere Ableitung, innere Funktion unverändert eingesetzt, innere Ableitung als Faktor.

**Rechnung:** $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$. Beachte: $f'$ wird an der Stelle $g(x)$ ausgewertet, NICHT an $g'(x)$.

**Probe:** Test mit $f(x) = (x^{2})^{3} = x^{6}$, also Ableitung $6x^{5}$. Via Kettenregel: außen $u^{3} \\to 3u^{2}$ mit $u = x^{2}$, innen $x^{2} \\to 2x$. Ergibt $3(x^{2})^{2} \\cdot 2x = 3x^{4} \\cdot 2x = 6x^{5}$. ✓

**Typischer Fehler:** $f'(g'(x))$ statt $f'(g(x)) \\cdot g'(x)$ — innere Funktion durch innere Ableitung ersetzt und Faktor vergessen.`,
          [
            'Drei Bestandteile: was bleibt eingesetzt, was wird abgeleitet, wie verknüpft?',
            'Test mit $f = (x^2)^3 = x^6$, Ableitung $6x^5$ — passt die Formel?',
            'Die innere FUNKTION bleibt im äußeren Term, die innere ABLEITUNG kommt als zusätzlicher Faktor.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['kr-formel-fest'] },
      ),

      // (2) apply-guided · multiple-choice · kr-formel-fest
      tag(
        mc(
          '$f(x) = (x^{2} + 1)^{5}$. Was ist $f\'(x)$?',
          [
            '$10x(x^{2} + 1)^{4}$',
            '$5(x^{2} + 1)^{4}$',
            '$5(2x)^{4}$',
            '$10x$',
          ],
          0,
          `**Ansatz:** Verkettung: außen $u^{5}$, innen $x^{2} + 1$. Kettenregel.

**Rechnung:** Äußere: $(u^{5})' = 5u^{4}$, also $5(x^{2}+1)^{4}$. Innere: $(x^{2}+1)' = 2x$. Produkt: $f'(x) = 5(x^{2}+1)^{4} \\cdot 2x = 10x(x^{2}+1)^{4}$.

**Probe:** Bei $x = 0$: $f'(0) = 0$ (Faktor $10x = 0$). Tatsächlich hat $f(x) = (x^{2}+1)^{5}$ bei $x = 0$ ein Minimum (Funktionswert $1$). ✓

**Typischer Fehler:** Innere Ableitung $(x^{2}+1)' = 2x$ vergessen (Antwort B) oder die innere Funktion in der äußeren Ableitung durch innere Ableitung $2x$ ersetzt (Antwort C — also $5(2x)^{4}$ statt $5(x^{2}+1)^{4}$).`,
          [
            'Welche Struktur? $u^5$ mit $u = x^2 + 1$ — Kettenregel.',
            'Einzel-Ableitungen: $(u^5)\' = 5 u^4$, $(x^2+1)\' = 2x$.',
            'Produkt: $5(x^2+1)^4 \\cdot 2x$.',
          ],
          {
            1: 'Innere Ableitung $(x^{2}+1)\' = 2x$ vergessen — der Faktor aus der Kettenregel fehlt komplett.',
            2: 'In der äußeren Ableitung wurde die innere FUNKTION durch die innere ABLEITUNG ersetzt ($u^{4}$ mit $u = 2x$ statt $u = x^{2}+1$). Die innere Funktion muss UNVERÄNDERT bleiben.',
            3: 'Sowohl Potenz $(x^{2}+1)^{4}$ als auch der Faktor $5$ fehlen — als wäre die Funktion bloß $x^{2}$ abgeleitet worden, ohne Verkettung.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['kr-formel-fest'] },
      ),

      // (3) apply-independent · number-input · kr-formel-fest
      tag(
        ni(
          '$f(x) = \\sqrt{x^{2} + 9}$. Berechne $f\'(4)$ (auf 2 Dezimalstellen).',
          0.8, 0.01, '',
          `**Ansatz:** Schreibe $\\sqrt{x^{2}+9} = (x^{2}+9)^{1/2}$, Kettenregel anwenden.

**Rechnung:** Äußere: $(u^{1/2})' = \\tfrac{1}{2} u^{-1/2}$. Innere: $(x^{2}+9)' = 2x$. $f'(x) = \\tfrac{1}{2}(x^{2}+9)^{-1/2} \\cdot 2x = \\dfrac{x}{\\sqrt{x^{2}+9}}$. Bei $x = 4$: $\\sqrt{16 + 9} = \\sqrt{25} = 5$, also $f'(4) = 4/5 = 0{,}8$.

**Probe:** Numerisch $\\dfrac{f(4{,}001) - f(4)}{0{,}001} \\approx 0{,}8$. ✓

**Typischer Fehler:** Innere Ableitung $2x$ vergessen — dann käme $f'(4) = 1/(2 \\cdot 5) = 0{,}1$ heraus.`,
          [
            'Wurzel als Potenz $u^{1/2}$ schreiben.',
            'Äußere: $(u^{1/2})\' = \\tfrac{1}{2}u^{-1/2}$, innere: $(x^2+9)\' = 2x$.',
            'Vereinfacht: $f\'(x) = x/\\sqrt{x^2+9}$, bei $x=4$ ist $\\sqrt{25} = 5$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['kr-formel-fest'] },
      ),

      // (4) error-analysis · multiple-choice · kr-formel-fest
      tag(
        mc(
          'Ein Student berechnet $(e^{x^{2}})\' = e^{x^{2}}$. Welcher Fehler liegt vor?',
          [
            'Innere Ableitung $(x^{2})\' = 2x$ vergessen — bei der Kettenregel muss die äußere Ableitung MIT der inneren Ableitung multipliziert werden. Korrekt: $2x \\cdot e^{x^{2}}$.',
            'Korrekt — $(e^{u})\' = e^{u}$, also $(e^{x^{2}})\' = e^{x^{2}}$.',
            'Falsch — $(e^{x^{2}})\' = e^{2x}$ (Exponent abgeleitet).',
            'Hätte die Quotientenregel verwenden müssen.',
          ],
          0,
          `**Ansatz:** Korrekt: Kettenregel mit äußerer Funktion $e^{u}$ ($u' = e^{u}$) und innerer Funktion $x^{2}$ (innere Ableitung $2x$). Produkt: $e^{x^{2}} \\cdot 2x = 2xe^{x^{2}}$.

**Rechnung:** Der Student hat $(e^{u})' = e^{u}$ richtig erkannt, aber den Faktor der inneren Ableitung komplett vergessen. So fehlt der Faktor $2x$ am Ergebnis.

**Probe:** Bei $x = 1$: korrekt $2 \\cdot e \\approx 5{,}44$. Studenten-Antwort: $e \\approx 2{,}72$. Differenz: Faktor $2x = 2$.

**Typischer Fehler:** Klassische "Kettenregel halb angewandt" — äußere Ableitung steht, innere fehlt.`,
          [
            'Schreibe die Kettenregel komplett aus und vergleiche.',
            'Innere Funktion ist $x^2$, innere Ableitung $(x^2)\' = 2x$.',
            'Vollständige Ableitung: $e^{x^2} \\cdot 2x = 2x e^{x^2}$.',
          ],
          {
            1: '$(e^{u})\' = e^{u}$ stimmt nur, wenn $u = x$. Hier ist $u = x^{2}$ — die Kettenregel verlangt einen zusätzlichen Faktor $u\' = 2x$.',
            2: '$(e^{u})\'$ mit $u = x^{2}$ liefert $e^{u}$ (Exponent bleibt), NICHT $e^{u\'} = e^{2x}$. Der Exponent wird NICHT abgeleitet.',
            3: 'Es liegt KEIN Quotient vor — $e^{x^{2}}$ ist eine Verkettung, kein Bruch. Kettenregel ist die richtige Wahl.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['kr-formel-fest'] },
      ),

      // (5) transfer · number-input · kr-formel-fest
      tag(
        ni(
          '$f(x) = (\\sin x)^{3}$. Berechne $f\'(\\pi/6)$ (auf 2 Dezimalstellen).',
          0.65, 0.01, '',
          `**Ansatz:** Verkettung: außen $u^{3}$, innen $\\sin x$. Kettenregel.

**Rechnung:** Äußere: $(u^{3})' = 3u^{2}$, also $3\\sin^{2} x$. Innere: $(\\sin x)' = \\cos x$. $f'(x) = 3\\sin^{2} x \\cdot \\cos x$. Bei $x = \\pi/6$: $\\sin(\\pi/6) = 1/2$, $\\cos(\\pi/6) = \\sqrt{3}/2$. $f'(\\pi/6) = 3 \\cdot (1/2)^{2} \\cdot \\sqrt{3}/2 = 3 \\cdot 1/4 \\cdot \\sqrt{3}/2 = 3\\sqrt{3}/8 \\approx 0{,}6495$.

**Probe:** Numerisch $\\dfrac{f(\\pi/6 + 0{,}001) - f(\\pi/6)}{0{,}001} \\approx 0{,}65$. ✓

**Typischer Fehler:** Innere Ableitung $\\cos x$ vergessen — dann käme $3\\sin^{2}(\\pi/6) = 3/4 = 0{,}75$ heraus.`,
          [
            'Schreibe $\\sin^3 x = (\\sin x)^3$ — Potenz auf einer Funktion.',
            'Äußere $(u^3)\' = 3 u^2$, innere $(\\sin x)\' = \\cos x$.',
            'Bei $\\pi/6$: $\\sin = 1/2$, $\\cos = \\sqrt{3}/2$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['kr-formel-fest'] },
      ),

      // (Bonus 0.6) apply-independent · multiple-choice · kr-formel-fest
      tag(
        mc(
          '$f(x) = (x^{3} + 1)^{4}$. Was ist $f\'(x)$?',
          [
            '$12 x^{2} (x^{3} + 1)^{3}$',
            '$4(x^{3} + 1)^{3}$',
            '$4(3x^{2})^{3}$',
            '$4(x^{3} + 1)^{3} + 12 x^{2}$',
          ],
          0,
          `**Ansatz:** Verkettung: außen $u^{4}$, innen $x^{3} + 1$. Kettenregel.

**Rechnung:** Äußere: $(u^{4})' = 4u^{3}$. Innere: $(x^{3} + 1)' = 3x^{2}$. $f'(x) = 4(x^{3}+1)^{3} \\cdot 3x^{2} = 12 x^{2} (x^{3}+1)^{3}$.

**Probe:** Bei $x = 1$: $f'(1) = 12 \\cdot 1 \\cdot 2^{3} = 96$. Numerisch bestätigt.

**Typischer Fehler:** Innere Ableitung vergessen (B) oder innere Funktion durch innere Ableitung ersetzt (C).`,
          [
            'Verkettung $u^{4}$ mit $u = x^{3} + 1$ — Kettenregel.',
            'Äußere $(u^{4})\' = 4 u^{3}$, innere $(x^{3} + 1)\' = 3x^{2}$.',
            'Produkt: $4(x^{3} + 1)^{3} \\cdot 3x^{2}$.',
          ],
          {
            1: 'Innere Ableitung $3x^{2}$ vergessen — Faktor aus der Kettenregel fehlt.',
            2: 'Innere FUNKTION durch innere ABLEITUNG in der äußeren Ableitung ersetzt: $(3x^{2})^{3}$ statt $(x^{3}+1)^{3}$.',
            3: 'Hier wurde der innere Ableitungsfaktor ADDIERT statt MULTIPLIZIERT — die Kettenregel ist ein Produkt, keine Summe.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['kr-formel-fest'] },
      ),
    ],

    // ── [1] kr-eingesetzt — Innere Funktion bleibt eingesetzt ──────────
    1: [
      // (6) recognize · true-false · kr-eingesetzt
      tag(
        tf(
          'In der äußeren Ableitung der Kettenregel wird die innere Funktion $g(x)$ UNVERÄNDERT eingesetzt — nicht etwa ihre Ableitung $g\'(x)$. Die innere Ableitung kommt als SEPARATER Faktor dazu.',
          true,
          `**Ansatz:** Die äußere Ableitung $f'$ wird AN DER STELLE $g(x)$ ausgewertet — die innere Funktion bleibt also als "Argument" stehen, sie wird nicht selbst abgeleitet, bevor sie eingesetzt wird.

**Rechnung:** Test mit $f(x) = \\sin(x^{2})$: äußere $\\sin' = \\cos$ — die innere Funktion $x^{2}$ steht UNVERÄNDERT als Argument: $\\cos(x^{2})$. Erst dann kommt der separate Faktor $2x$ aus der inneren Ableitung dazu: $\\cos(x^{2}) \\cdot 2x$.

**Probe:** Bei $x = 1$: $\\cos(1) \\cdot 2 \\approx 0{,}5403 \\cdot 2 = 1{,}0806$. Numerisch $\\dfrac{f(1{,}001) - f(1)}{0{,}001} \\approx 1{,}08$. ✓

**Typischer Fehler:** $\\cos(2x)$ statt $\\cos(x^{2})$ schreiben — innere Funktion durch innere Ableitung ersetzt.`,
          [
            'Wo steht die innere Funktion in der Kettenregel-Formel?',
            'Wird sie abgeleitet, BEVOR sie in $f\'$ eingesetzt wird?',
            'Test: $(\\sin(x^2))\'$ — was ist Argument des $\\cos$?',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['kr-eingesetzt'] },
      ),

      // (7) apply-guided · multiple-choice · kr-eingesetzt
      tag(
        mc(
          'Bei der Ableitung von $f(x) = \\sin(x^{2} + 5)$ — was steht als Argument des $\\cos$ in der äußeren Ableitung?',
          [
            '$x^{2} + 5$ (die innere Funktion unverändert)',
            '$2x$ (die innere Ableitung)',
            '$x$ (innere Funktion ganz weggelassen)',
            '$2x(x^{2}+5)$ (Produkt aus innerer Funktion und ihrer Ableitung)',
          ],
          0,
          `**Ansatz:** $f'(x) = \\sin'(\\underline{u}) \\cdot u'$ mit $u = x^{2} + 5$ und $\\sin' = \\cos$. Argument der äußeren Ableitung ist die UNVERÄNDERTE innere Funktion.

**Rechnung:** $f'(x) = \\cos(x^{2} + 5) \\cdot 2x = 2x \\cos(x^{2} + 5)$. Der Cosinus wird an der Stelle $x^{2} + 5$ (also der inneren Funktion) ausgewertet, und der Faktor $2x$ kommt aus der inneren Ableitung als zusätzliches Produkt-Element dazu.

**Probe:** Bei $x = 0$: $\\cos(5) \\cdot 0 = 0$. Tatsächlich hat $f(x) = \\sin(x^{2} + 5)$ bei $x = 0$ eine waagerechte Tangente (innerste Funktion $x^{2}$ hat dort Minimum, kein Wachstum).

**Typischer Fehler:** $\\cos(2x)$ statt $\\cos(x^{2}+5)$ — innere Funktion durch innere Ableitung ersetzt; Ableitung dann komplett falsch.`,
          [
            'Welcher Ausdruck steckt "in" der äußeren Funktion?',
            'Bei $\\sin(u)$ ist $u = x^2 + 5$ — was steht in $\\cos(\\cdot)$?',
            'Die innere Ableitung $2x$ steht NICHT im $\\cos$, sondern als Faktor außerhalb.',
          ],
          {
            1: 'Falsche Substitution: Die innere ABLEITUNG $2x$ wurde in das $\\cos$ eingesetzt. Korrekt ist die innere FUNKTION $x^{2}+5$ — die Ableitung kommt als separater Faktor.',
            2: '$x$ allein hat nichts mit $\\sin(x^{2}+5)$ zu tun. Die innere Funktion $x^{2}+5$ muss als Argument im $\\cos$ stehen.',
            3: 'Innere Funktion und innere Ableitung wurden zu einem Produkt zusammengefügt — das ist eine willkürliche Mischung, nicht die Kettenregel.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['kr-eingesetzt'] },
      ),

      // (8) apply-independent · number-input · kr-eingesetzt
      tag(
        ni(
          '$f(x) = e^{x^{2} - 1}$. Berechne $f\'(1)$.',
          2, 0.01, '',
          `**Ansatz:** Kettenregel mit äußerer Funktion $e^{u}$ und innerer Funktion $x^{2} - 1$. Die innere Funktion bleibt im Exponenten von $e$ unverändert.

**Rechnung:** $f'(x) = e^{x^{2} - 1} \\cdot 2x$. Im Exponenten steht $x^{2} - 1$ (innere Funktion), der Faktor $2x$ kommt aus der inneren Ableitung. Bei $x = 1$: $e^{0} \\cdot 2 = 1 \\cdot 2 = 2$.

**Probe:** Bei $x = 1$ ist $x^{2} - 1 = 0$, also $e^{0} = 1$, multipliziert mit $2 \\cdot 1 = 2$ ergibt $2$. ✓

**Typischer Fehler:** Im Exponenten $2x$ statt $x^{2} - 1$ schreiben — Ergebnis wäre $e^{2} \\cdot 2 = 2 e^{2} \\approx 14{,}78$, viel zu groß.`,
          [
            'Äußere Funktion $e^u$ mit $u = x^2 - 1$.',
            'Im Exponenten bleibt $x^2 - 1$ UNVERÄNDERT.',
            'Innere Ableitung $(x^2 - 1)\' = 2x$, bei $x = 1$ ergibt $2$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['kr-eingesetzt'] },
      ),

      // (9) error-analysis · multiple-choice · kr-eingesetzt
      tag(
        mc(
          'Ein Student berechnet $(\\sin(x^{2}))\' = \\cos(2x)$. Welcher Fehler liegt vor?',
          [
            'Die innere FUNKTION ($x^{2}$) wurde in der äußeren Ableitung durch die innere ABLEITUNG ($2x$) ersetzt — und der Faktor $2x$ als zusätzlicher Multiplikator fehlt komplett. Korrekt: $\\cos(x^{2}) \\cdot 2x = 2x \\cos(x^{2})$.',
            'Korrekt — die Kettenregel liefert genau $\\cos(2x)$.',
            'Vorzeichenfehler: Müsste $-\\cos(2x)$ heißen.',
            '$(x^{2})\' = x$ wäre richtig, nicht $2x$.',
          ],
          0,
          `**Ansatz:** Korrekt: $\\sin' = \\cos$, anwenden auf $u = x^{2}$ (unverändert), multipliziert mit $u' = 2x$. Ergebnis: $\\cos(x^{2}) \\cdot 2x = 2x \\cos(x^{2})$.

**Rechnung:** Der Student schreibt $\\cos(2x)$ — hier wurde im Argument des $\\cos$ die innere Funktion $x^{2}$ durch die innere Ableitung $2x$ ersetzt, und gleichzeitig der zusätzliche Faktor $2x$ vergessen. Doppelter Fehler in einem.

**Probe:** Bei $x = \\sqrt{\\pi}$: korrekt $\\cos(\\pi) \\cdot 2\\sqrt{\\pi} = -2\\sqrt{\\pi} \\approx -3{,}54$. Studenten-Antwort: $\\cos(2\\sqrt{\\pi}) \\approx \\cos(3{,}54) \\approx -0{,}92$. Ganz anders.

**Typischer Fehler:** Innere Funktion und innere Ableitung in einem Schritt verwechselt.`,
          [
            'Schreibe die Kettenregel komplett aus: $\\cos(\\underline{?}) \\cdot ?$.',
            'Im Argument von $\\cos$ steht $x^{2}$ (innere Funktion), nicht $2x$.',
            'Der Faktor $2x$ ist ein Multiplikator, kein Argument.',
          ],
          {
            1: 'Numerisch verschieden bei jedem Beispiel — etwa bei $x = 1$: korrekt $2 \\cos(1) \\approx 1{,}08$, Studenten-Antwort $\\cos(2) \\approx -0{,}42$. Definitiv falsch.',
            2: '$(\\sin)\' = +\\cos$ stimmt — kein Vorzeichenfehler. Der Fehler liegt im Argument und beim Fehlen des Faktors.',
            3: '$(x^{2})\' = 2x$ stimmt (Potenzregel). Hier liegt der Fehler nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['kr-eingesetzt'] },
      ),

      // (10) transfer · multiple-choice · kr-eingesetzt
      tag(
        mc(
          'Welche der folgenden Ableitungen wendet die Kettenregel KORREKT an (innere Funktion bleibt in äußerer Ableitung eingesetzt)?',
          [
            '$(\\ln(x^{3} + 2))\' = \\dfrac{3x^{2}}{x^{3} + 2}$',
            '$(\\ln(x^{3} + 2))\' = \\dfrac{1}{3x^{2}}$',
            '$(\\ln(x^{3} + 2))\' = \\dfrac{1}{x^{3} + 2}$',
            '$(\\ln(x^{3} + 2))\' = \\ln(3x^{2})$',
          ],
          0,
          `**Ansatz:** Äußere Funktion $\\ln(u)$ mit $u = x^{3} + 2$. Ableitung $\\ln'(u) = 1/u$ — angewandt auf die UNVERÄNDERTE innere Funktion: $\\dfrac{1}{x^{3} + 2}$. Multipliziert mit innerer Ableitung $u' = 3x^{2}$ ergibt $\\dfrac{3x^{2}}{x^{3} + 2}$.

**Rechnung:** Endform: $\\dfrac{3x^{2}}{x^{3} + 2}$. Im Nenner steht die UNVERÄNDERTE innere Funktion, im Zähler die innere Ableitung.

**Probe:** Bei $x = 1$: $f'(1) = 3/3 = 1$. Numerisch bestätigt.

**Typischer Fehler:** Innere Funktion durch innere Ableitung ersetzt ($1/(3x^{2})$, Antwort B) oder innere Ableitung ganz vergessen (Antwort C).`,
          [
            'Welche Funktion ist $\\ln(\\cdot)$? Was steht im Argument?',
            'In der äußeren Ableitung $1/u$ steht $u = x^3 + 2$ unverändert.',
            'Innere Ableitung $(x^3 + 2)\' = 3x^2$ kommt als Zähler dazu.',
          ],
          {
            1: 'Im Nenner steht $3x^{2}$ — das ist die innere ABLEITUNG, nicht die innere Funktion. In der äußeren Ableitung $1/u$ muss $u = x^{3}+2$ stehen.',
            2: 'Innere Ableitung $3x^{2}$ ganz vergessen — die Kettenregel hat einen zusätzlichen Faktor $g\'(x)$, der hier fehlt.',
            3: '$\\ln$ wurde auf die innere Ableitung angewandt — völlig falsche Konstruktion. $(\\ln u)\' = 1/u$, nicht $\\ln u\'$.',
          },
        ),
        { stage: 'transfer', subGoal: 1, uses: ['kr-eingesetzt'] },
      ),
    ],

    // ── [2] kr-mehrfach — Mehrfachverkettung ────────────────────────────
    2: [
      // (11) recognize · true-false · kr-mehrfach
      tag(
        tf(
          'Bei mehrfach verketteten Funktionen wie $h(x) = f(g(k(x)))$ multipliziert man die Ableitungen aller Schichten: $h\'(x) = f\'(g(k(x))) \\cdot g\'(k(x)) \\cdot k\'(x)$ — pro Schicht ein Faktor, von außen nach innen.',
          true,
          `**Ansatz:** Die Kettenregel ist "assoziativ" über Schichten — jede zusätzliche Verkettung trägt einen Faktor zur Ableitung bei.

**Rechnung:** Bei drei Schichten $h = f \\circ g \\circ k$: erst die äußerste Schicht $f$ ableiten (eingesetzt $g(k(x))$), dann die mittlere Schicht $g$ ableiten (eingesetzt $k(x)$), dann die innerste Schicht $k$ ableiten. Alle drei Faktoren multiplizieren.

**Probe:** Test mit $h(x) = ((x^{2})^{3}) = x^{6}$, Ableitung $6x^{5}$. Über drei Schichten $f(u) = u$ mit $u = (x^{2})^{3}$, dann $g(v) = v^{3}$ mit $v = x^{2}$, dann $k(x) = x^{2}$. Ableitungen: $f' = 1$, $g'(v) = 3v^{2} = 3x^{4}$, $k'(x) = 2x$. Produkt: $1 \\cdot 3x^{4} \\cdot 2x = 6x^{5}$. ✓

**Typischer Fehler:** Nur zwei Schichten betrachten und den dritten Faktor vergessen — Ergebnis um Faktor $k'(x)$ zu klein.`,
          [
            'Wie viele Funktionsschichten in $f(g(k(x)))$?',
            'Pro Schicht eine Ableitung — wie verknüpfen sie sich (Summe/Produkt)?',
            'Test: $h = (x^2)^3 = x^6$, Ableitung $6x^5$ — passt die Formel?',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['kr-mehrfach'] },
      ),

      // (12) apply-guided · multiple-choice · kr-mehrfach
      tag(
        mc(
          '$f(x) = \\sin(\\cos(2x))$. Was ist $f\'(x)$?',
          [
            '$-2 \\sin(2x) \\cdot \\cos(\\cos(2x))$',
            '$2 \\sin(2x) \\cdot \\cos(\\cos(2x))$',
            '$-\\sin(2x) \\cdot \\cos(\\cos(2x))$',
            '$\\cos(\\cos(2x))$',
          ],
          0,
          `**Ansatz:** Drei Schichten: äußerste $\\sin$, mittlere $\\cos$, innerste $2x$. Kettenregel mehrfach.

**Rechnung:** Äußerste: $(\\sin u)' = \\cos u$ mit $u = \\cos(2x)$ → $\\cos(\\cos(2x))$. Mittlere: $(\\cos v)' = -\\sin v$ mit $v = 2x$ → $-\\sin(2x)$. Innerste: $(2x)' = 2$. Produkt: $f'(x) = \\cos(\\cos(2x)) \\cdot (-\\sin(2x)) \\cdot 2 = -2 \\sin(2x) \\cos(\\cos(2x))$.

**Probe:** Bei $x = 0$: $\\cos(\\cos 0) \\cdot (-\\sin 0) \\cdot 2 = \\cos(1) \\cdot 0 \\cdot 2 = 0$. $f(0) = \\sin(\\cos 0) = \\sin(1)$ — bei $x = 0$ hat $\\cos(2x)$ ein Maximum, daher $f(x)$ auch — Steigung $0$. ✓

**Typischer Fehler:** Vorzeichen-Fehler bei $(\\cos)' = -\\sin$ (Antwort B), innerste Ableitung $2$ vergessen (Antwort C) oder nur äußerste abgeleitet (Antwort D).`,
          [
            'Wie viele Schichten? Drei Faktoren erwarten.',
            'Äußerste $\\sin\' = \\cos$, mittlere $\\cos\' = -\\sin$, innerste $(2x)\' = 2$.',
            'Alle drei multiplizieren — Vorzeichen $-$ von $(\\cos)\'$ überlebt.',
          ],
          {
            1: 'Vorzeichen-Fehler: $(\\cos v)\' = -\\sin v$, nicht $+\\sin v$. Das Minus muss in die Endform übernommen werden.',
            2: 'Innerste Ableitung $(2x)\' = 2$ vergessen — bei dreifach verketteten Funktionen muss der Faktor jeder Schicht im Produkt stehen.',
            3: 'Nur äußerste Ableitung berücksichtigt — die innerste Ableitung $(2x)\' = 2$ UND die mittlere Ableitung $-\\sin(2x)$ fehlen komplett.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['kr-mehrfach'] },
      ),

      // (13) apply-independent · number-input · kr-mehrfach (Doppelkette)
      tag(
        ni(
          '$f(x) = (\\sin(2x))^{2}$. Berechne $f\'(\\pi/8)$.',
          2, 0.01, '',
          `**Ansatz:** Drei Schichten: äußerste $u^{2}$, mittlere $\\sin v$, innerste $2x$. Kettenregel zweifach.

**Rechnung:** Äußerste: $(u^{2})' = 2u$ → $2\\sin(2x)$. Mittlere: $(\\sin v)' = \\cos v$ → $\\cos(2x)$. Innerste: $(2x)' = 2$. Produkt: $f'(x) = 2\\sin(2x) \\cdot \\cos(2x) \\cdot 2 = 4\\sin(2x)\\cos(2x) = 2\\sin(4x)$ (Doppelwinkel). Bei $x = \\pi/8$: $2\\sin(4 \\cdot \\pi/8) = 2\\sin(\\pi/2) = 2$.

**Probe:** Bei $x = \\pi/8$: $\\sin(2x) = \\sin(\\pi/4) = \\sqrt{2}/2$, $\\cos(2x) = \\sqrt{2}/2$. $f'(\\pi/8) = 4 \\cdot \\sqrt{2}/2 \\cdot \\sqrt{2}/2 = 4 \\cdot 1/2 = 2$. ✓

**Typischer Fehler:** Eine der drei Ableitungen vergessen — z.B. den Faktor $2$ aus der innersten Schicht.`,
          [
            'Drei Schichten: $u^2$ außen, $\\sin v$ Mitte, $2x$ innen.',
            'Drei Ableitungen multiplizieren: $2 \\sin(2x) \\cdot \\cos(2x) \\cdot 2$.',
            'Bei $x = \\pi/8$: $\\sin(\\pi/4) = \\cos(\\pi/4) = \\sqrt{2}/2$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['kr-mehrfach'] },
      ),

      // (14) error-analysis · multiple-choice · kr-mehrfach
      tag(
        mc(
          'Ein Student berechnet $(e^{\\cos(3x)})\' = e^{\\cos(3x)} \\cdot (-\\sin(3x))$. Welcher Fehler liegt vor?',
          [
            'Innerste Ableitung $(3x)\' = 3$ vergessen — bei drei Schichten müssen ALLE Ableitungen multipliziert werden. Korrekt: $-3 \\sin(3x) \\cdot e^{\\cos(3x)}$.',
            'Korrekt — bei dieser Funktion liefert die Kettenregel exakt zwei Faktoren.',
            'Vorzeichen-Fehler bei $(\\cos)\' = -\\sin$ — sollte $+\\sin$ sein.',
            'Quotientenregel hätte verwendet werden müssen.',
          ],
          0,
          `**Ansatz:** Drei Schichten: $e^{u}$ außen, $\\cos v$ in der Mitte, $3x$ innen. Kettenregel verlangt drei Faktoren.

**Rechnung:** Vollständig: $f'(x) = e^{\\cos(3x)} \\cdot (-\\sin(3x)) \\cdot 3 = -3\\sin(3x) \\cdot e^{\\cos(3x)}$. Der Student hat $e^{\\cos(3x)} \\cdot (-\\sin(3x))$ — der Faktor $3$ aus der innersten Schicht fehlt.

**Probe:** Bei $x = \\pi/6$: $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$. Korrekt: $-3 \\cdot 1 \\cdot e^{0} = -3$. Studenten-Antwort: $e^{0} \\cdot (-1) = -1$. Differenz Faktor $3$.

**Typischer Fehler:** Bei mehrfach verketteten Funktionen die innerste Ableitung vergessen — "Produktregel = 2 Schichten" auswendig gelernt und nicht auf drei erweitert.`,
          [
            'Wieviele Schichten hat $e^{\\cos(3x)}$? Drei.',
            'Wieviele Faktoren erwartet die Kettenregel? Drei.',
            'Der Student schreibt nur zwei — welcher fehlt?',
          ],
          {
            1: 'Numerisch verschieden — bei $x = \\pi/6$ ergibt korrekt $-3$, Studenten-Antwort $-1$. Faktor $3$ macht den Unterschied.',
            2: '$(\\cos)\' = -\\sin$ stimmt — der Student hat das richtig gemacht. Der Fehler liegt nicht im Vorzeichen.',
            3: '$e^{\\cos(3x)}$ ist eine Verkettung, kein Quotient. Kettenregel ist die richtige Wahl.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['kr-mehrfach'] },
      ),

      // (15) transfer · sorting · kr-mehrfach
      tag(
        sorting(
          'Bringe die Schritte zum Ableiten von $f(x) = \\sqrt{\\sin(3x)}$ in die richtige Reihenfolge:',
          [
            'Struktur erkennen: drei Schichten — $u^{1/2}$ außen, $\\sin v$ in der Mitte, $3x$ innen.',
            'Äußerste Ableitung: $(u^{1/2})\' = \\tfrac{1}{2} u^{-1/2}$, mit $u = \\sin(3x)$ unverändert eingesetzt: $\\tfrac{1}{2\\sqrt{\\sin(3x)}}$.',
            'Mittlere Ableitung: $(\\sin v)\' = \\cos v$, mit $v = 3x$ unverändert eingesetzt: $\\cos(3x)$.',
            'Innerste Ableitung: $(3x)\' = 3$.',
            'Alle drei Faktoren multiplizieren: $f\'(x) = \\dfrac{1}{2\\sqrt{\\sin(3x)}} \\cdot \\cos(3x) \\cdot 3 = \\dfrac{3 \\cos(3x)}{2 \\sqrt{\\sin(3x)}}$.',
          ],
          [0, 1, 2, 3, 4],
          `**Ansatz:** Zuerst Struktur erkennen (Schichten zählen), dann je Schicht eine Ableitung bilden, schließlich alle multiplizieren.

**Rechnung:** Begründung der Reihenfolge:
1. Struktur: ohne Schicht-Zählung kann man die Kettenregel nicht systematisch anwenden.
2-4. Die Ableitungen werden von außen nach innen aufgeschrieben, jeweils mit unveränderter innerer Funktion als Argument.
5. Erst am Ende werden die Faktoren multipliziert und vereinfacht.

**Probe:** Endresultat $\\dfrac{3 \\cos(3x)}{2 \\sqrt{\\sin(3x)}}$. Bei $x = \\pi/6$: $\\sin(\\pi/2) = 1$, $\\cos(\\pi/2) = 0$ → $f'(\\pi/6) = 0$. ✓

**Typischer Fehler:** Schritte 2 und 3 vertauschen — die innere Funktion in der äußersten Ableitung wird dann durch die innere ABLEITUNG ersetzt.`,
          [
            'Welcher Schritt MUSS zuerst kommen, bevor man eine Regel anwendet?',
            'Von außen nach innen — pro Schicht eine Ableitung.',
            'Erst am Ende multiplizieren — sonst kommt es zu Vorzeichen-/Reihenfolgefehlern.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['kr-mehrfach'] },
      ),
    ],

    // ── [3] kr-linear-innen — Standardfälle (ax+b)^n, e^(ax), sin(ax) ───
    3: [
      // (16) recognize · true-false · kr-linear-innen
      tag(
        tf(
          'Bei linearer innerer Funktion $g(x) = ax + b$ ist die innere Ableitung einfach $g\'(x) = a$ (eine Konstante) — und dieser Faktor $a$ kommt bei jeder Kettenregel-Anwendung auf $(ax+b)^{n}$, $e^{ax}$, $\\sin(ax)$ etc. als zusätzlicher Faktor dazu.',
          true,
          `**Ansatz:** Die Ableitung einer linearen Funktion ist eine Konstante — bei Kettenregel-Anwendung wird das ein einfacher Vorfaktor.

**Rechnung:** Beispiele:
- $(\\sin(2x))' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$
- $(e^{5x})' = e^{5x} \\cdot 5 = 5 e^{5x}$
- $((3x + 1)^{4})' = 4(3x+1)^{3} \\cdot 3 = 12(3x+1)^{3}$

**Probe:** Test $(e^{3x})'$ bei $x = 0$: $3 \\cdot e^{0} = 3$. Numerisch $\\dfrac{e^{0{,}003} - 1}{0{,}001} \\approx 3$. ✓

**Typischer Fehler:** Den Vorfaktor $a$ vergessen — typischer Anfänger-Fehler bei einfachen Kettenregel-Anwendungen.`,
          [
            'Was ist die Ableitung von $ax + b$?',
            'Welcher Faktor kommt bei der Kettenregel auf $f(ax+b)$ dazu?',
            'Test: $(\\sin(2x))\' = ?$ — der Faktor $2$ ist unverzichtbar.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['kr-linear-innen'] },
      ),

      // (17) apply-guided · multiple-choice · kr-linear-innen
      tag(
        mc(
          '$f(x) = \\sin(5x)$. Was ist $f\'(x)$?',
          [
            '$5 \\cos(5x)$',
            '$\\cos(5x)$',
            '$5 \\cos(x)$',
            '$\\cos(5)$',
          ],
          0,
          `**Ansatz:** Verkettung: äußere $\\sin$, innere $5x$. Innere Ableitung $(5x)' = 5$.

**Rechnung:** $f'(x) = \\cos(5x) \\cdot 5 = 5 \\cos(5x)$. Der Faktor $5$ aus der inneren Ableitung darf NICHT vergessen werden.

**Probe:** Bei $x = 0$: $5 \\cos 0 = 5$. Numerisch $\\dfrac{\\sin(0{,}005)}{0{,}001} \\approx \\dfrac{0{,}005}{0{,}001} = 5$. ✓

**Typischer Fehler:** Faktor $5$ vergessen (Antwort B) — Klassiker bei linearer innerer Funktion.`,
          [
            'Welche Regel? Verkettung $\\sin(5x)$ — Kettenregel.',
            'Äußere $(\\sin u)\' = \\cos u$, innere $(5x)\' = 5$.',
            'Endform: $5 \\cos(5x)$ — Faktor $5$ NICHT vergessen.',
          ],
          {
            1: 'Innere Ableitung $(5x)\' = 5$ vergessen — der Faktor $5$ aus der linearen inneren Funktion muss ins Endergebnis.',
            2: 'Innere FUNKTION $5x$ in der äußeren Ableitung durch $x$ ersetzt — der Faktor $5$ wurde in den Vorfaktor verschoben, aber das Argument von $\\cos$ wurde gleichzeitig zu $x$ "vereinfacht". Argument muss $5x$ bleiben.',
            3: '$\\cos(5)$ ist ein KONSTANTER Wert — die Ableitung muss aber eine Funktion von $x$ sein. Vermutlich wurde $5x$ als Konstante missverstanden.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['kr-linear-innen'] },
      ),

      // (18) apply-independent · number-input · kr-linear-innen
      tag(
        ni(
          '$f(x) = e^{3x}$. Berechne $f\'(0)$.',
          3, 0.01, '',
          `**Ansatz:** Verkettung: äußere $e^{u}$, innere $3x$. Innere Ableitung $(3x)' = 3$.

**Rechnung:** $f'(x) = e^{3x} \\cdot 3 = 3 e^{3x}$. Bei $x = 0$: $3 \\cdot e^{0} = 3 \\cdot 1 = 3$.

**Probe:** Numerisch $\\dfrac{e^{0{,}003} - 1}{0{,}001} \\approx \\dfrac{0{,}003}{0{,}001} = 3$. ✓

**Typischer Fehler:** Faktor $3$ vergessen — dann käme $e^{0} = 1$ heraus.`,
          [
            'Verkettung $e^{3x}$ — Kettenregel mit linearer innerer Funktion.',
            'Äußere $(e^u)\' = e^u$, innere $(3x)\' = 3$.',
            'Endform: $3 e^{3x}$, bei $x = 0$ ist $e^0 = 1$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['kr-linear-innen'] },
      ),

      // (19) error-analysis · multiple-choice · kr-linear-innen
      tag(
        mc(
          'Ein Student berechnet $((2x - 5)^{4})\' = 4(2x - 5)^{3}$. Welcher Fehler liegt vor?',
          [
            'Innere Ableitung $(2x - 5)\' = 2$ vergessen — bei linearer innerer Funktion ist der Faktor IMMER $a$ (hier $a = 2$). Korrekt: $8(2x - 5)^{3}$.',
            'Korrekt — $((2x - 5)^{4})\' = 4(2x - 5)^{3}$ ist die fertige Ableitung.',
            'Potenzregel falsch: $(u^{4})\' \\to 4u^{5}$ (Exponent erhöhen).',
            'Die innere Funktion sollte als Vorfaktor verschoben werden: $4 \\cdot 2^{3}$.',
          ],
          0,
          `**Ansatz:** Korrekt: äußere $(u^{4})' = 4u^{3}$ mit $u = 2x - 5$ unverändert, innere Ableitung $(2x - 5)' = 2$. Produkt: $4(2x-5)^{3} \\cdot 2 = 8(2x-5)^{3}$.

**Rechnung:** Der Student schreibt $4(2x-5)^{3}$ — der Faktor $2$ aus der inneren Ableitung fehlt. Klassiker bei linearer innerer Funktion.

**Probe:** Bei $x = 3$: korrekt $8 \\cdot 1^{3} = 8$. Studenten-Antwort: $4 \\cdot 1 = 4$. Differenz Faktor $2$.

**Typischer Fehler:** Linearen Vorfaktor $a$ als "trivial" abtun und unterschlagen.`,
          [
            'Innere Funktion $2x - 5$ — innere Ableitung?',
            'Vollständig: $4(2x-5)^3 \\cdot 2$.',
            'Der Faktor $2$ aus der inneren Ableitung muss ins Ergebnis.',
          ],
          {
            1: 'Numerisch falsch: bei $x = 3$ liefert die Studenten-Antwort $4$, korrekt ist $8$. Faktor $2$ fehlt.',
            2: '$(u^{4})\' = 4 u^{3}$ ist KORREKT (Potenzregel: Exponent um $1$ reduzieren). Hier nicht der Fehler.',
            3: 'Hier wurde die innere Funktion gar nicht in der äußeren Ableitung ersetzt, sondern als Konstante missverstanden. So entstünden andere Probleme.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['kr-linear-innen'] },
      ),

      // (20) transfer · matching · kr-linear-innen
      tag(
        matching(
          'Ordne jeder Funktion ihre korrekte Ableitung zu (lineare innere Funktion):',
          [
            { left: '$(3x + 1)^{5}$',    right: '$15(3x + 1)^{4}$' },
            { left: '$e^{-2x}$',          right: '$-2 e^{-2x}$' },
            { left: '$\\sin(4x)$',        right: '$4 \\cos(4x)$' },
            { left: '$\\cos(7x - 1)$',    right: '$-7 \\sin(7x - 1)$' },
          ],
          `**Ansatz:** Jede Funktion ist Standardfall mit linearer innerer Funktion $ax + b$ — Faktor $a$ kommt aus der inneren Ableitung.

**Rechnung:**
- $((3x+1)^{5})' = 5(3x+1)^{4} \\cdot 3 = 15(3x+1)^{4}$. ✓
- $(e^{-2x})' = e^{-2x} \\cdot (-2) = -2 e^{-2x}$. ✓
- $(\\sin(4x))' = \\cos(4x) \\cdot 4 = 4 \\cos(4x)$. ✓
- $(\\cos(7x - 1))' = -\\sin(7x - 1) \\cdot 7 = -7 \\sin(7x - 1)$. ✓

**Probe:** Jede rechte Seite ist eindeutig EINER linken Seite zuzuordnen — Faktoren sind alle distinkt ($15, -2, 4, -7$).

**Typischer Fehler:** Bei $\\cos(7x - 1)$ das Vorzeichen von $(\\cos)' = -\\sin$ vergessen — dann fehlt das Minus, und die Zuordnung wird mehrdeutig.`,
          [
            'Für jede Funktion: äußere Ableitung bilden, dann mit innerem Faktor $a$ multiplizieren.',
            'Beachte Vorzeichen: $(\\cos)\' = -\\sin$ überträgt sich.',
            'Vergleiche die Vorfaktoren: $15, -2, 4, -7$ — alle distinkt.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['kr-linear-innen'] },
      ),

      // (Bonus 3.6) apply-independent · number-input · kr-linear-innen
      tag(
        ni(
          '$f(x) = \\sqrt{3x + 1}$. Berechne $f\'(5)$ (auf 3 Dezimalstellen).',
          0.375, 0.005, '',
          `**Ansatz:** Wurzel als Potenz $(3x+1)^{1/2}$, Kettenregel mit linearer innerer Funktion.

**Rechnung:** Äußere: $(u^{1/2})' = \\tfrac{1}{2} u^{-1/2}$. Innere: $(3x+1)' = 3$. $f'(x) = \\tfrac{1}{2}(3x+1)^{-1/2} \\cdot 3 = \\dfrac{3}{2\\sqrt{3x+1}}$. Bei $x = 5$: $\\sqrt{16} = 4$, also $f'(5) = \\dfrac{3}{8} = 0{,}375$.

**Probe:** Numerisch $\\dfrac{f(5{,}001) - f(5)}{0{,}001} \\approx 0{,}375$. ✓

**Typischer Fehler:** Faktor $3$ aus der inneren Ableitung vergessen — Ergebnis wäre dann $1/(2\\sqrt{16}) = 1/8 = 0{,}125$.`,
          [
            'Wurzel als $u^{1/2}$ mit $u = 3x + 1$.',
            'Vollständig: $\\dfrac{1}{2\\sqrt{3x+1}} \\cdot 3 = \\dfrac{3}{2\\sqrt{3x+1}}$.',
            'Bei $x = 5$: $3x + 1 = 16$, $\\sqrt{16} = 4$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['kr-linear-innen'] },
      ),
    ],

    // ── [4] kr-falle-innen — Innere Ableitung vergessen ─────────────────
    4: [
      // (21) recognize · true-false · kr-falle-innen
      tag(
        tf(
          'Der häufigste Fehler bei der Kettenregel ist, die innere Ableitung zu vergessen — z. B. $(\\sin(2x))\' = \\cos(2x)$ statt $2 \\cos(2x)$ zu schreiben. Der Faktor aus der inneren Ableitung darf NICHT unterschlagen werden.',
          true,
          `**Ansatz:** Klassischer Anfänger-Fehler — die Kettenregel wird halb angewandt: äußere Ableitung steht, innere fehlt.

**Rechnung:** Test mit $f(x) = \\sin(2x)$: korrekt $f'(x) = \\cos(2x) \\cdot 2 = 2\\cos(2x)$. Bei $x = 0$: $2$, nicht $1$. Numerisch $\\dfrac{\\sin(0{,}002)}{0{,}001} \\approx 2$. ✓

**Probe:** Wenn man den Faktor $2$ vergisst, ist die Ableitung um Faktor $a$ (hier $2$) zu klein — bei Klausur direkt falsche Werte.

**Typischer Fehler:** $\\cos(2x)$ statt $2\\cos(2x)$ — exakt dieser Fehler ist Standard-Klausur-Stolperstein.`,
          [
            'Welcher Faktor entsteht aus $(2x)\'$?',
            'Wo muss dieser Faktor stehen — als Argument oder als Multiplikator?',
            'Test: $(\\sin(2x))\'$ bei $x = 0$ — sollte $2$ ergeben.',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['kr-falle-innen'] },
      ),

      // (22) apply-guided · multiple-choice · kr-falle-innen
      tag(
        mc(
          'Welche der folgenden Ableitungen IGNORIERT fälschlich die innere Ableitung (häufiger Anfänger-Fehler)?',
          [
            '$(\\sin(2x))\' = \\cos(2x)$',
            '$(\\sin(2x))\' = 2 \\cos(2x)$',
            '$(e^{3x})\' = 3 e^{3x}$',
            '$((x + 1)^{5})\' = 5(x + 1)^{4}$',
          ],
          0,
          `**Ansatz:** Innere Ableitung von $2x$ ist $2$, von $3x$ ist $3$, von $x + 1$ ist $1$. Multipliziert man mit $1$, "verschwindet" der Faktor optisch — das ist KEIN Fehler. Multipliziert man NICHT mit $2$ (wenn der Faktor $2$ wäre), DAS ist der Fehler.

**Rechnung:**
- $(\\sin(2x))' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$ — Antwort A ($\\cos(2x)$) IGNORIERT den Faktor $2$. ✗
- $2\\cos(2x)$ ist korrekt. ✓
- $(e^{3x})' = 3 e^{3x}$ ist korrekt (Faktor $3$ richtig drin). ✓
- $((x+1)^{5})' = 5(x+1)^{4} \\cdot 1 = 5(x+1)^{4}$ ist korrekt (innerer Faktor $1$ ändert nichts). ✓

**Probe:** Antwort A liefert bei $x = 0$ den Wert $\\cos 0 = 1$, korrekt wäre $2 \\cos 0 = 2$. Faktor $2$ fehlt.

**Typischer Fehler:** Innere Ableitung als "$1$ angenommen" oder ignoriert — bei nicht-trivialem $a$ liefert das falsche Werte.`,
          [
            'Welche Funktion hat eine NICHT-triviale innere Ableitung (also $\\ne 1$)?',
            'Wo fehlt der entsprechende Vorfaktor?',
            'Faktor $1$ "verschwindet" optisch — das ist okay. Faktor $2, 3, \\ldots$ fehlt — das ist der Fehler.',
          ],
          {
            1: 'Faktor $2$ steht KORREKT drin — das ist die korrekte Anwendung der Kettenregel, kein Fehler.',
            2: 'Faktor $3$ steht KORREKT drin — das ist die korrekte Anwendung der Kettenregel.',
            3: '$(x + 1)\' = 1$ — der Faktor $1$ ist trivial und ändert nichts. Korrekte Anwendung.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['kr-falle-innen'] },
      ),

      // (23) apply-independent · multiple-choice · kr-falle-innen
      tag(
        mc(
          '$f(x) = \\cos(3x + 1)$. Ein Student schreibt $f\'(x) = -\\sin(3x + 1)$. Was fehlt?',
          [
            'Der Faktor $3$ aus der inneren Ableitung $(3x + 1)\' = 3$ — korrekt: $-3\\sin(3x + 1)$.',
            'Das Vorzeichen — sollte $+\\sin(3x + 1)$ sein, nicht $-\\sin(3x + 1)$.',
            'Die innere Funktion sollte als $(3x)\' = 3$ ohne $+ 1$ behandelt werden.',
            'Nichts — die Ableitung ist korrekt.',
          ],
          0,
          `**Ansatz:** $f(x) = \\cos(u)$ mit $u = 3x + 1$. Innere Ableitung $u' = 3$. Korrekt: $f'(x) = -\\sin(3x + 1) \\cdot 3 = -3\\sin(3x + 1)$.

**Rechnung:** Der Student hat das Minus von $(\\cos)' = -\\sin$ und den Eingriff "innere Funktion bleibt" korrekt — nur der Vorfaktor $3$ aus $(3x+1)' = 3$ fehlt.

**Probe:** Bei $x = 0$: korrekt $-3 \\sin 1 \\approx -2{,}52$. Studenten-Antwort: $-\\sin 1 \\approx -0{,}84$. Differenz Faktor $3$.

**Typischer Fehler:** Bei einer Konstanten im inneren Teil ($+1$) den Vorfaktor "vergessen", weil die Konstante ja "trivial" beim Ableiten verschwindet — der Vorfaktor $a$ vor $x$ überlebt jedoch.`,
          [
            'Innere Funktion ist $3x + 1$ — was ist ihre Ableitung?',
            'Welcher Faktor muss bei $-\\sin(3x+1)$ als Multiplikator stehen?',
            '$(3x + 1)\' = 3$, nicht $1$.',
          ],
          {
            1: '$(\\cos)\' = -\\sin$ — Minus ist KORREKT. Hier nicht der Fehler.',
            2: 'Die Konstante $+1$ in $3x + 1$ verschwindet beim Ableiten, das stimmt — aber der Faktor $3$ vor $x$ bleibt: $(3x + 1)\' = 3$.',
            3: 'Numerisch verschieden bei jedem $x$ — Faktor $3$ fehlt. Definitiv nicht korrekt.',
          },
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['kr-falle-innen'] },
      ),

      // (24) error-analysis · multiple-choice · kr-falle-innen
      tag(
        mc(
          'Ein Student schreibt $(\\ln(5x))\' = \\dfrac{1}{5x}$. Welcher Fehler liegt vor?',
          [
            'Innere Ableitung $(5x)\' = 5$ vergessen — korrekt: $\\dfrac{1}{5x} \\cdot 5 = \\dfrac{1}{x}$. (Alternativ via $\\ln(5x) = \\ln 5 + \\ln x$ → Ableitung $1/x$.)',
            'Korrekt — $(\\ln u)\' = 1/u$ mit $u = 5x$ ergibt direkt $1/(5x)$.',
            'Sollte $\\dfrac{5}{x}$ sein — Vorzeichen vertauscht.',
            'Die innere Funktion sollte $\\ln$ sein, nicht $5x$ — Zerlegung falsch.',
          ],
          0,
          `**Ansatz:** $f(x) = \\ln(5x)$ — Verkettung mit $u = 5x$. Korrekt: $f'(x) = \\dfrac{1}{u} \\cdot u' = \\dfrac{1}{5x} \\cdot 5 = \\dfrac{5}{5x} = \\dfrac{1}{x}$.

**Rechnung:** Alternative Plausibilisierung: $\\ln(5x) = \\ln 5 + \\ln x$ (Logarithmus-Gesetz). Ableitung: $0 + 1/x = 1/x$. Beide Wege liefern $1/x$, nicht $1/(5x)$.

**Probe:** Bei $x = 1$: korrekt $1/1 = 1$. Studenten-Antwort: $1/5 = 0{,}2$. Faktor $5$ Unterschied.

**Typischer Fehler:** Klassische Kettenregel-Falle — innere Ableitung wird vergessen, weil $(\\ln u)' = 1/u$ "so einfach aussieht".`,
          [
            'Innere Funktion ist $5x$ — was ist ihre Ableitung?',
            'Multipliziere $1/(5x)$ mit der inneren Ableitung.',
            'Alternativ: $\\ln(5x) = \\ln 5 + \\ln x$ — Ableitung $1/x$.',
          ],
          {
            1: 'Numerisch verschieden: bei $x = 1$ ergibt korrekt $1$, Studenten-Antwort $0{,}2$. Faktor $5$ fehlt.',
            2: 'Vorzeichen ist hier nicht das Problem — $(\\ln)\' = 1/x$ ist positiv. Der Fehler ist der vergessene Faktor $5$.',
            3: '$5x$ ist die innere Funktion, $\\ln$ ist die äußere — Zerlegung stimmt. Der Fehler liegt im fehlenden inneren Faktor.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['kr-falle-innen'] },
      ),

      // (25) transfer · multiple-choice · kr-falle-innen
      tag(
        mc(
          'In welchem der folgenden Ausdrücke wird die Kettenregel KORREKT angewendet (innere Ableitung berücksichtigt)?',
          [
            '$(e^{x^{2}})\' = 2x \\cdot e^{x^{2}}$',
            '$(e^{x^{2}})\' = e^{x^{2}}$',
            '$(e^{x^{2}})\' = e^{2x}$',
            '$(e^{x^{2}})\' = 2x \\cdot e^{2x}$',
          ],
          0,
          `**Ansatz:** $f(x) = e^{x^{2}}$ — Verkettung mit $u = x^{2}$. Äußere $(e^{u})' = e^{u}$ (Exponent bleibt!), innere $(x^{2})' = 2x$. Produkt: $e^{x^{2}} \\cdot 2x = 2x e^{x^{2}}$.

**Rechnung:** Drei häufige Fehler:
- Innere Ableitung vergessen: $e^{x^{2}}$ statt $2x e^{x^{2}}$.
- Exponent abgeleitet: $e^{2x}$ — bei $(e^{u})' = e^{u}$ bleibt $u$ unverändert im Exponenten.
- Beides kombiniert: $2x e^{2x}$ — Exponent abgeleitet UND innere Ableitung als zusätzlichen Faktor.

**Probe:** Bei $x = 1$: korrekt $2 \\cdot e \\approx 5{,}44$. Antwort B: $e \\approx 2{,}72$. Antwort C: $e^{2} \\approx 7{,}39$. Antwort D: $2 e^{2} \\approx 14{,}78$. Alle deutlich verschieden.

**Typischer Fehler:** "Exponent ableiten" — verbreiteter Anfänger-Irrtum bei $e^{u}$. Der Exponent BLEIBT, die innere Ableitung kommt als Faktor.`,
          [
            'Äußere Funktion $e^u$ — wie verändert sich $u$ in der Ableitung?',
            'Innere Funktion $x^2$ — innere Ableitung?',
            'Korrekte Form: $e^{x^2}$ (Exponent bleibt!) mal $2x$ (innere Ableitung).',
          ],
          {
            1: 'Innere Ableitung $2x$ vergessen — der Faktor aus der Kettenregel fehlt.',
            2: 'Der Exponent wurde "abgeleitet" zu $2x$ — bei $(e^{u})\' = e^{u}$ bleibt $u$ aber unverändert. Die innere Ableitung kommt SEPARAT als Faktor.',
            3: 'Doppelter Fehler: Exponent abgeleitet UND innere Ableitung als Faktor genommen. Eines von beiden ist überflüssig — der Exponent muss UNVERÄNDERT bleiben.',
          },
        ),
        { stage: 'transfer', subGoal: 4, uses: ['kr-falle-innen'] },
      ),

      // (Bonus 4.6) apply-independent · multiple-choice · kr-falle-innen
      tag(
        mc(
          '$f(x) = \\sin(x^{2})$. Welche der folgenden Ableitungen ist KORREKT?',
          [
            '$f\'(x) = 2x \\cos(x^{2})$',
            '$f\'(x) = \\cos(x^{2})$',
            '$f\'(x) = \\cos(2x)$',
            '$f\'(x) = 2x \\cos(2x)$',
          ],
          0,
          `**Ansatz:** Verkettung mit $u = x^{2}$. Äußere $(\\sin u)' = \\cos u$ (argument bleibt), innere $(x^{2})' = 2x$.

**Rechnung:** $f'(x) = \\cos(x^{2}) \\cdot 2x = 2x \\cos(x^{2})$. Wichtige Details: das $\\cos$ wird auf $x^{2}$ (innere Funktion) ausgewertet, NICHT auf $2x$ (innere Ableitung); und der Faktor $2x$ steht als separater Multiplikator.

**Probe:** Bei $x = \\sqrt{\\pi}$: $f'(\\sqrt{\\pi}) = 2\\sqrt{\\pi} \\cos(\\pi) = -2\\sqrt{\\pi} \\approx -3{,}54$. Numerisch bestätigt.

**Typischer Fehler:** Innere Ableitung vergessen (B), innere Funktion durch innere Ableitung ersetzt (C), beides falsch kombiniert (D).`,
          [
            'Äußere Funktion $\\sin u$ — was bleibt im Argument?',
            'Innere Ableitung $(x^2)\' = 2x$ — wohin damit?',
            'Endform: $\\cos(\\underline{x^2}) \\cdot 2x$.',
          ],
          {
            1: 'Innere Ableitung $2x$ vergessen — Faktor aus der Kettenregel fehlt.',
            2: 'Innere FUNKTION durch innere ABLEITUNG im Argument ersetzt: $\\cos(2x)$ statt $\\cos(x^{2})$. Außerdem fehlt der Faktor.',
            3: 'Doppelter Fehler: Argument durch innere Ableitung ersetzt UND zugleich der Vorfaktor $2x$ angefügt — als wäre die Kettenregel "doppelt" angewandt worden.',
          },
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['kr-falle-innen'] },
      ),
    ],
  },
}
