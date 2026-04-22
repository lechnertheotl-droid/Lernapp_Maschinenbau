import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'num-unit-1',
  title: 'Nullstellen & Integration',
  order: 1,
  unitGoals: [
    'Newton-Verfahren $x_{n+1} = x_n - f(x_n)/f\'(x_n)$ per Hand für 2–3 Iterationen durchführen',
    'Bisektion mit Zwischenwertsatz als garantiert konvergentes, aber langsames Verfahren nutzen',
    'Numerische Integration mit Trapez- und Simpson-Regel auf gegebenen Stützstellen berechnen',
    'Fehlerordnung der Verfahren kennen: Trapez $O(h^2)$, Simpson $O(h^4)$',
    'Abbruchkriterien (Residuum, Schrittweite, max. Iterationen) korrekt wählen',
  ],
  lessons: [
    makeLesson({
      id: 'num-1-1',
      title: 'Newton-Verfahren',
      estimatedMinutes: 14,
      learningGoals: [
        'Newton-Iteration verstehen und anwenden',
        'Startwert und Konvergenz einschätzen',
      ],
      subGoals: [
        { label: 'Iterationsvorschrift $x_{n+1} = x_n - f(x_n)/f\'(x_n)$ korrekt aufbauen', examRelevance: 'hoch' },
        { label: 'Abbruchkriterium: $|x_{n+1} - x_n| < \\varepsilon$ **oder** $|f(x_n)| < \\delta$', examRelevance: 'hoch' },
        { label: 'Quadratische Konvergenz: Anzahl korrekter Stellen verdoppelt sich pro Schritt (bei guten Startwerten)', examRelevance: 'mittel' },
        { label: 'Stolperfallen: $f\'(x_n) = 0$ (Tangente horizontal), schlechter Startwert → Divergenz', examRelevance: 'hoch' },
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Tangente schneidet x-Achse',
      intuitionContent:
        'Das Newton-Verfahren sucht eine Nullstelle von $f(x) = 0$: ' +
        'Man legt die **Tangente** an den Graphen im aktuellen Punkt, schneidet sie mit der x-Achse — ' +
        'das gibt den nächsten (hoffentlich besseren) Schätzwert. ' +
        'Bei guten Startwerten verdoppelt sich die Zahl der korrekten Stellen pro Schritt (**quadratische Konvergenz**).',
      formulaTitle: 'Newton-Iteration',
      formulaContent:
        '$$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$$\n\n' +
        '**Voraussetzungen:** $f$ differenzierbar, $f\'(x_n) \\neq 0$, Startwert nah an der Nullstelle.\n\n' +
        '**Abbruch:** $|x_{n+1} - x_n| < \\varepsilon$ oder $|f(x_n)| < \\delta$.',
      exercises: [
        {
          type: 'number-input',
          question:
            'Newton auf $f(x) = x^2 - 9$, $x_0 = 4$. Berechne $x_1$.',
          correctValue: 3.125,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$f(4) = 16 - 9 = 7$, $f\'(4) = 8$. $x_1 = 4 - 7/8 = 4 - 0{,}875 = 3{,}125$. Zielwert: $\\sqrt{9} = 3$.',
          hints: [
            '$f\'(x) = 2x$, also $f\'(4) = 8$.',
            '$x_1 = x_0 - f(x_0)/f\'(x_0) = 4 - 7/8$.',
            '$4 - 0{,}875 = 3{,}125$.',
          ],
        },
        {
          type: 'multiple-choice',
          question: 'Was passiert bei Newton, wenn $f\'(x_n) = 0$ ist?',
          options: [
            'Verfahren bricht zusammen — Division durch 0',
            'Verfahren konvergiert schneller',
            'Startwert wird verdoppelt',
            '$x_{n+1} = 0$',
          ],
          correctIndex: 0,
          explanation:
            '$x_{n+1}$ enthält $f(x_n)/f\'(x_n)$ — ist $f\'(x_n) = 0$, wird durch $0$ geteilt. ' +
            'Numerisch ebenso gefährlich: bei kleinem $|f\'|$ „schießt" der nächste Wert weit davon.',
          hints: [
            'Nenner der Newton-Iteration?',
            'Was passiert bei Division durch $0$?',
          ],
          wrongAnswerExplanations: {
            '1': 'Genau das Gegenteil: bei $f\'(x_n) = 0$ wird der Nenner $0$ — die Iteration bricht zusammen. Schnellere Konvergenz entsteht nicht durch Division durch 0.',
            '2': 'Der Startwert wird in der Newton-Formel $x_{n+1} = x_n - f/f\'$ nicht verdoppelt. Die Verdopplung hat keine Entsprechung im Algorithmus.',
            '3': '$x_{n+1} = 0$ folgt nicht aus $f\'(x_n) = 0$. Bei $f\'(x_n) = 0$ ist der Bruch $f(x_n)/f\'(x_n)$ undefiniert, nicht gleich $x_n$.',
          },
        },
        {
          type: 'multiple-choice',
          question:
            'Newton auf $f(x) = x^3 - 2x + 2$ mit Startwert $x_0 = 0$. Was passiert?',
          options: [
            'Die Iteration läuft in einen 2er-Zyklus ($0 \\to 1 \\to 0 \\to 1 \\to \\ldots$) und konvergiert nicht',
            'Newton konvergiert schnell zur Nullstelle bei $x \\approx -1{,}77$',
            'Newton divergiert gegen $+\\infty$',
            'Der Startwert $x_0 = 0$ ist die gesuchte Nullstelle',
          ],
          correctIndex: 0,
          explanation:
            '$f(0) = 2$, $f\'(0) = -2$ $\\Rightarrow$ $x_1 = 0 - 2/(-2) = 1$. Dann $f(1) = 1$, $f\'(1) = 1$ $\\Rightarrow$ $x_2 = 1 - 1/1 = 0$. ' +
            'Die Iteration oszilliert zwischen $0$ und $1$ — klassisches Beispiel, dass Newton **nicht** immer konvergiert.',
          hints: [
            'Berechne $x_1$ aus $x_0 = 0$: $f(0)/f\'(0)$.',
            '$f(0) = 2$, $f\'(0) = -2$ $\\Rightarrow$ $x_1 = 1$.',
            'Berechne jetzt $x_2$ aus $x_1 = 1$ — was fällt auf?',
          ],
          wrongAnswerExplanations: {
            '1': 'Newton ist nur lokal konvergent — die Aussage „konvergiert immer schnell" stimmt global nicht. Hier schließt die Iteration $0 \\to 1 \\to 0$ und erreicht keine Nullstelle.',
            '2': 'Die Werte $x_1 = 1, x_2 = 0, x_3 = 1, \\ldots$ oszillieren beschränkt in $[0, 1]$ — keine Divergenz gegen $+\\infty$. Prüft man die Iteration, bleibt sie endlich.',
            '3': '$f(0) = 0^3 - 0 + 2 = 2 \\neq 0$, also ist $x_0 = 0$ keine Nullstelle. Die Nullstelle von $f$ liegt bei $x \\approx -1{,}77$.',
          },
        },
        {
          type: 'true-false',
          statement:
            'Newton konvergiert bei einfachen Nullstellen **quadratisch** — die Zahl der korrekten Dezimalstellen verdoppelt sich pro Schritt.',
          correct: true,
          explanation:
            'Richtig. $|e_{n+1}| \\leq C\\,|e_n|^2$ — das ist quadratische Konvergenz. Aus 2 korrekten Stellen werden etwa 4, dann 8, dann 16 … (bei idealer Funktion).',
          hints: [
            'Quadratische Konvergenz: Fehler wird quadriert.',
            'Aus $e_n \\approx 10^{-2}$ wird $e_{n+1} \\approx 10^{-4}$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Warum wählt man bei Newton-Iteration einen **guten Startwert**?',
          options: [
            'Weil das Verfahren bei ungünstigem Startwert divergieren oder zur falschen Nullstelle konvergieren kann',
            'Weil sonst die Iteration endlos läuft',
            'Weil die Funktion sonst nicht differenzierbar wird',
            'Weil die Konvergenzordnung linear wird',
          ],
          correctIndex: 0,
          explanation:
            'Newton ist lokal sehr schnell, aber **nicht global stabil**. Bei flachem $f\'$ oder mehreren Nullstellen kann der Iterationsverlauf „davonlaufen". ' +
            'Oft kombiniert mit Bisektion (robuster Startwert) + Newton (schnelle Endkonvergenz).',
          hints: [
            'Newton ist lokales Verfahren.',
            'Ungünstige Startwerte → Tangente schießt weit daneben.',
          ],
          wrongAnswerExplanations: {
            '1': 'Die Iteration kann mit Abbruchkriterium gestoppt werden — das Problem ist eher Divergenz oder falsche Nullstelle, nicht endloses Laufen bei gutem Abbruch.',
            '2': 'Der Startwert ändert die Differenzierbarkeit von $f$ nicht — $f$ ist als Funktion differenzierbar oder nicht, unabhängig vom Startwert. Die Wahl beeinflusst die Konvergenz, nicht die Glattheit.',
            '3': 'Linear wird die Konvergenz bei **mehrfachen** Nullstellen, nicht wegen eines schlechten Startwerts. Bei schlechtem Startwert divergiert Newton eher, statt langsamer zu werden.',
          },
        },
        {
          type: 'matching',
          question: 'Ordne jede Nullstelle ihrer Konvergenzordnung unter Newton zu.',
          pairs: [
            { left: 'einfache Nullstelle',       right: 'quadratisch' },
            { left: 'zweifache Nullstelle',      right: 'linear (langsamer)' },
            { left: 'Startwert bei $f\'=0$',       right: 'kann divergieren' },
            { left: 'Startwert nah an NS',       right: 'schnelle Konvergenz' },
          ],
          explanation:
            'Bei mehrfachen Nullstellen (z.B. $f(x) = (x-a)^2$) halbiert sich der Fehler nur linear. Die quadratische Konvergenz ist eine Eigenschaft einfacher Nullstellen.',
          hints: [
            'Mehrfachheit der Nullstelle beeinflusst die Ordnung.',
            'Bei einfacher Nullstelle: $f\'(a) \\neq 0$.',
          ],
        },
        {
          type: 'sorting',
          question: 'Bringe einen Newton-Schritt in die richtige Reihenfolge.',
          items: [
            'Aktuellen Wert $x_n$ einsetzen: $f(x_n)$ berechnen',
            'Ableitung auswerten: $f\'(x_n)$',
            'Korrekturterm: $\\Delta = f(x_n)/f\'(x_n)$',
            'Neuer Wert: $x_{n+1} = x_n - \\Delta$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Reihenfolge: Funktion, Ableitung, Quotient, Korrektur. Bei Programmierung: jeden Schritt separat prüfen (v.a. $f\'(x_n)$ nicht $\\approx 0$).',
          hints: [
            'Funktion vor Ableitung.',
            'Quotient vor Subtraktion.',
          ],
        },
        {
          type: 'number-input',
          question:
            'Newton auf $f(x) = x^2 - 2$, $x_0 = 1{,}5$. Gib $x_1$ mit 4 Nachkommastellen an.',
          correctValue: 1.4167,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$f(1{,}5) = 0{,}25$, $f\'(1{,}5) = 3$. $x_1 = 1{,}5 - 0{,}25/3 = 1{,}5 - 0{,}0833 = 1{,}4167$. ' +
            'Zielwert $\\sqrt{2} \\approx 1{,}4142$ — schon nach einem Schritt nahe dran.',
          hints: [
            '$f\'(x) = 2x$, also $f\'(1{,}5) = 3$.',
            '$f(1{,}5) = 1{,}5^2 - 2 = 0{,}25$.',
            '$1{,}5 - 0{,}25/3 \\approx 1{,}5 - 0{,}0833 = 1{,}4167$.',
          ],
        },
      ],
      masteryQuestion: 'Newton auf $f(x) = x^2 - 2$, Startwert $x_0 = 1$: Wie lautet $x_1$?',
      masteryOptions: ['$1{,}5$', '$2$', '$1{,}41$', '$0{,}5$'],
      correctIndex: 0,
      masteryExplanation:
        '$f(1) = -1$, $f\'(1) = 2$. $x_1 = 1 - (-1)/2 = 1 + 0{,}5 = 1{,}5$. Nach zwei weiteren Iterationen nähert man sich $\\sqrt{2} \\approx 1{,}4142$.',
      masteryHints: [
        'f(1) = 1² − 2 = −1, f\'(1) = 2.',
        'x₁ = x₀ − f(x₀)/f\'(x₀).',
        '$x_1 = 1 - (-1)/2 = 1 + 0{,}5 = 1{,}5$.',
      ],
      masteryWrongAnswerExplanations: {
        1: '$2$ wäre $x_1 = 1 + 1 = 2$ — hier wurde $f(1) = 1$ gerechnet (ohne $-2$). Richtig: $f(1) = 1 - 2 = -1$, also $x_1 = 1 - (-1)/2 = 1{,}5$.',
        2: '$1{,}41 \\approx \\sqrt{2}$ ist das Ziel, aber **nicht** $x_1$. Nach **einem** Newton-Schritt ist man erst bei $1{,}5$; $\\sqrt{2}$ wird erst nach mehreren Iterationen erreicht.',
        3: '$0{,}5$ wäre $x_1 = 1 - 0{,}5$ (Vorzeichen des Korrekturterms falsch). Newton subtrahiert $f/f\' = -1/2 = -0{,}5$ von $x_0 = 1$: $1 - (-0{,}5) = 1{,}5$.',
      },
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => x * x - 2, color: '#3b82f6', label: 'f(x)=x²−2' },
            { fn: (x) => 2 * x - 3, color: '#f59e0b', label: 'Tangente bei x₀=1' },
          ],
          xRange: [-0.5, 2.5],
          yRange: [-3, 3],
          showGrid: true,
        },
        caption: 'Newton-Schritt: Tangente bei x₀=1 schneidet x-Achse bei x₁=1,5',
        alt: 'Graph von f(x)=x²-2 mit Newton-Tangente bei x0=1',
      },
      nextLessonId: 'num-1-2',
    }),
    makeLesson({
      id: 'num-1-2',
      title: 'Bisektion und numerische Integration',
      estimatedMinutes: 14,
      learningGoals: [
        'Bisektion als robuste Nullstellensuche durchführen',
        'Trapezregel und Simpson-Regel für bestimmte Integrale anwenden',
        'Fehlerordnung der Verfahren einordnen',
      ],
      subGoals: [
        { label: 'Bisektion benötigt Vorzeichenwechsel: $f(a)\\cdot f(b) < 0$', examRelevance: 'hoch' },
        { label: 'Fehler der Bisektion nach $n$ Schritten: $(b-a)/2^n$ → Schrittzahl auflösen', examRelevance: 'hoch' },
        { label: 'Trapezregel: $\\tfrac{h}{2}(f_0 + 2f_1 + \\ldots + 2f_{n-1} + f_n)$; Fehler $O(h^2)$', examRelevance: 'hoch' },
        { label: 'Simpson: nur bei **gerader** Teilintervallanzahl anwendbar; Fehler $O(h^4)$', examRelevance: 'hoch' },
        { label: 'Simpson ist exakt für Polynome bis Grad 3', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Halbieren bis zur Lösung',
      intuitionContent:
        '**Bisektion:** Wenn $f(a) < 0$ und $f(b) > 0$, muss nach dem Zwischenwertsatz eine Nullstelle zwischen $a$ und $b$ liegen. ' +
        'Man prüft den Mittelpunkt $c = (a+b)/2$: Je nach Vorzeichen von $f(c)$ wird das Intervall halbiert. ' +
        'Jeder Schritt halbiert den Fehler — **lineare Konvergenz**, aber sehr robust.\n\n' +
        '**Numerische Integration** ersetzt $\\int_a^b f(x)\\,dx$ durch gewichtete Funktionswerte: ' +
        'Die **Trapezregel** verbindet Punkte linear, die **Simpson-Regel** verwendet quadratische Bögen ' +
        'und ist genauer bei gleicher Schrittweite.',
      formulaTitle: 'Bisektion + Quadraturformeln',
      formulaContent:
        '**Bisektion:** $c = (a+b)/2$. Falls $f(a)\\cdot f(c) < 0$: neues Intervall $[a,c]$, sonst $[c,b]$.\n\n' +
        '**Trapezregel** (ein Teilintervall):\n' +
        '$$\\int_a^b f(x)\\,dx \\approx \\frac{b-a}{2}\\bigl(f(a) + f(b)\\bigr), \\quad \\text{Fehler } \\mathcal{O}(h^2)$$\n\n' +
        '**Simpson-Regel** (Mittelpunkt $m = (a+b)/2$):\n' +
        '$$\\int_a^b f(x)\\,dx \\approx \\frac{b-a}{6}\\bigl(f(a) + 4f(m) + f(b)\\bigr), \\quad \\text{Fehler } \\mathcal{O}(h^4)$$',
      exercises: [
        {
          type: 'number-input',
          question:
            'Bisektion: $f(x) = x^2 - 3$, Intervall $[1, 2]$. Was ist $x_1 = (a+b)/2$?',
          correctValue: 1.5,
          tolerance: 0,
          unit: '',
          explanation:
            '$x_1 = (1+2)/2 = 1{,}5$. $f(1) = -2 < 0$, $f(1{,}5) = -0{,}75 < 0$, $f(2) = 1 > 0$ → neues Intervall $[1{,}5, 2]$.',
          hints: [
            'Bisektion bildet den Mittelpunkt.',
            '$(1+2)/2 = 1{,}5$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Bisektion hat welche Konvergenzordnung?',
          options: [
            'linear — Fehler halbiert sich pro Schritt',
            'quadratisch',
            'kubisch',
            'gar keine garantierte',
          ],
          correctIndex: 0,
          explanation:
            'Jeder Schritt halbiert das Intervall → Fehler halbiert sich pro Schritt → lineare Konvergenz. Langsam, aber **garantiert** konvergent.',
          hints: [
            'Intervall halbiert sich in jedem Schritt.',
            'Halbierung des Fehlers = lineare Konvergenz.',
          ],
          wrongAnswerExplanations: {
            '1': 'Quadratisch ist Newton, nicht Bisektion. Quadratische Konvergenz bedeutet $e_{n+1} \\approx C e_n^2$; Bisektion halbiert $e_n$ nur linear.',
            '2': 'Kubische Konvergenz ($e_{n+1} \\approx C e_n^3$) kommt z.B. bei Halley-Verfahren vor. Bisektion ist deutlich langsamer: nur $e_{n+1} = e_n/2$.',
            '3': 'Bisektion ist eines der wenigen Verfahren mit **garantierter** Konvergenz — sofern $f$ stetig und $f(a) \\cdot f(b) < 0$. Keine Konvergenz zu garantieren wäre völlig unzutreffend.',
          },
        },
        {
          type: 'number-input',
          question:
            'Trapezregel für $\\int_0^1 e^x\\,dx$ mit einem Teilintervall.',
          correctValue: 1.859,
          tolerance: 0.02,
          unit: '',
          explanation:
            'Trapez: $\\frac{1-0}{2}(f(0) + f(1)) = 0{,}5(1 + e) \\approx 0{,}5 \\cdot 3{,}718 = 1{,}859$. ' +
            'Exakt: $e - 1 \\approx 1{,}718$ — Fehler $\\approx 0{,}14$.',
          hints: [
            '$(b-a)/2 \\cdot (f(a)+f(b))$.',
            '$f(0) = e^0 = 1$, $f(1) = e \\approx 2{,}718$.',
            '$0{,}5 \\cdot 3{,}718 \\approx 1{,}859$.',
          ],
        },
        {
          type: 'number-input',
          question:
            'Simpson-Regel für $\\int_0^2 x^2\\,dx$ mit $a=0, b=2$, $m=1$.',
          correctValue: 2.666667,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$f(0)=0, f(1)=1, f(2)=4$. Simpson: $\\frac{2-0}{6}(0 + 4\\cdot1 + 4) = \\frac{8}{6}\\cdot \\ldots$ — moment, richtig: $\\frac{b-a}{6}(f(a)+4f(m)+f(b)) = \\frac{2}{6}(0+4+4) = \\frac{2}{6}\\cdot 8 = \\frac{16}{6} = 2{,}667$. ' +
            'Exakt: $8/3 = 2{,}667$ — **Simpson ist bei quadratischen Funktionen exakt**!',
          hints: [
            'Simpson: $(b-a)/6 \\cdot (f(a) + 4f(m) + f(b))$.',
            '$2/6 \\cdot (0 + 4 + 4) = 2/6 \\cdot 8$.',
            '$16/6 = 8/3 \\approx 2{,}667$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'Simpson-Regel ist für Polynome bis Grad 3 **exakt** (kein Fehler).',
          correct: true,
          explanation:
            'Richtig. Obwohl Simpson nur quadratische Bögen verwendet, sind Polynome bis Grad 3 ebenfalls exakt integriert — Glücksfall der Symmetrie. Bei Grad 4 und höher entsteht ein Fehler $\\mathcal{O}(h^4)$.',
          hints: [
            'Genauigkeitsgrad von Simpson ist 3, nicht 2.',
            'Quadratischer Integrand: exakt. Kubischer: auch exakt.',
            'Erst ab Grad 4 kommt Fehler.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jedem Verfahren seine Fehlerordnung zu.',
          pairs: [
            { left: 'Bisektion',       right: 'linear ($1/2^n$)' },
            { left: 'Newton',          right: 'quadratisch' },
            { left: 'Trapez',           right: '$\\mathcal{O}(h^2)$' },
            { left: 'Simpson',          right: '$\\mathcal{O}(h^4)$' },
          ],
          explanation:
            'Newton und Bisektion: Iterationsverfahren für Nullstellen. Trapez und Simpson: Quadratur — Fehler sinkt mit $h^p$.',
          hints: [
            'Newton schnell, Bisektion robust.',
            'Simpson ist deutlich genauer als Trapez bei gleichem $h$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Wann nutzt man **Bisektion** statt **Newton**?',
          options: [
            'Wenn ein Vorzeichenwechsel-Intervall bekannt ist, aber kein guter Startwert nahe der Nullstelle',
            'Wenn $f$ nicht differenzierbar ist, aber stetig',
            'Wenn schnelle Konvergenz priorisiert wird',
            'Immer — Bisektion ist immer besser',
          ],
          correctIndex: 0,
          explanation:
            'Bisektion ist **robust** (braucht nur Vorzeichenwechsel + Stetigkeit), Newton ist **schnell** (braucht guten Startwert + Ableitung). Oft: Bisektion zur Initialisierung, Newton zum Finish.',
          hints: [
            'Robust vs. schnell.',
            'Bisektion braucht keinen guten Startwert.',
          ],
          wrongAnswerExplanations: {
            '1': 'Bisektion benötigt **keine** Ableitung — aber das ist kein Newton-Problem im üblichen Kontext: Newton verlangt differenzierbar, Bisektion nur stetig. Der praktisch häufigere Grund ist dennoch der fehlende Startwert.',
            '2': 'Bisektion ist **langsamer** als Newton (linear vs. quadratisch). Man nimmt Bisektion genau, wenn Schnelligkeit **nicht** im Vordergrund steht.',
            '3': 'Bisektion ist robuster, aber nicht „immer besser". Newton schlägt Bisektion bei der Konvergenzgeschwindigkeit deutlich, sobald man nah an der Nullstelle ist.',
          },
        },
        {
          type: 'sorting',
          question:
            'Schritte der Bisektion. Bringe in Reihenfolge.',
          items: [
            'Intervall $[a, b]$ mit $f(a) \\cdot f(b) < 0$ wählen',
            'Mittelpunkt $c = (a+b)/2$ und $f(c)$ berechnen',
            'Falls $f(a) \\cdot f(c) < 0$: neues Intervall $[a, c]$, sonst $[c, b]$',
            'Wiederholen bis $|b - a| < \\varepsilon$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Jeder Schritt halbiert die Intervallbreite. Nach $n$ Schritten ist das Intervall $\\leq (b-a)/2^n$ breit — deshalb linear konvergent.',
          hints: [
            'Vorzeichenwechsel zuerst sicherstellen.',
            'Pro Schritt ein Funktionsaufruf ($f(c)$).',
          ],
        },
      ],
      masteryQuestion:
        'Trapezregel für $\\int_0^2 x^2\\,dx$ mit einem Teilintervall [$a=0$, $b=2$]?',
      masteryOptions: ['$4$', '$\\dfrac{8}{3}$', '$2$', '$6$'],
      correctIndex: 0,
      masteryExplanation:
        '$f(0) = 0$, $f(2) = 4$. Trapez: $\\frac{2-0}{2}\\cdot(0+4) = 4$. ' +
        '(Exakter Wert $8/3 \\approx 2{,}67$ — Trapez überschätzt bei konvexem $f$.)',
      masteryHints: [
        'Trapezregel: $(b-a)/2 \\cdot (f(a)+f(b))$.',
        '$f(0) = 0^2 = 0$, $f(2) = 2^2 = 4$.',
        '$(2-0)/2 \\cdot (0 + 4) = 1 \\cdot 4 = 4$.',
      ],
      masteryWrongAnswerExplanations: {
        1: '$8/3 \\approx 2{,}67$ ist der **exakte** Integralwert, den die Trapezregel nicht liefert. Trapez überschätzt bei konvexem Integranden und ergibt $4 > 8/3$.',
        2: '$2$ käme aus $(b-a)/2 \\cdot f(b) = 1\\cdot 4 / 2$ — eine falsche Formel, bei der $f(a)$ vergessen wird. Die Trapezregel summiert **beide** Endwerte.',
        3: '$6$ wäre $(b-a) \\cdot (f(a) + f(b))$ — Faktor $1/2$ vergessen. Korrekt: $(b-a)/2 \\cdot (0+4) = 4$, nicht $6$.',
      },
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'f(x)=x²' },
            { fn: (x) => 2 * x, color: '#f59e0b', label: 'Trapez (Sekante)' },
          ],
          xRange: [-0.5, 2.5],
          yRange: [-0.5, 5],
          showGrid: true,
        },
        caption: 'Trapezregel: Sekante überschätzt konvexes Integral',
        alt: 'Graph von x² mit Sekante als Trapez-Approximation von 0 bis 2',
      },
      prerequisites: ['num-1-1'],
      nextLessonId: 'num-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'num-unit-2',
  title: 'Prüfung',
  order: 2,
  unitGoals: [
    'Gemischte Aufgaben mit Kombination aus Nullstellen- und Integrationsverfahren bearbeiten',
    'Konvergenzordnung rechnerisch verifizieren (Fehlerhalbierung bei Schrittweitenhalbierung)',
    'Abbruchkriterien auf gegebene Toleranzen anwenden und Iterationen abzählen',
  ],
  lessons: [
    makeLesson({
      id: 'num-pruefung-1',
      title: 'Prüfung: Numerische Methoden kombiniert',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Verfahren dem Problem zuordnen (Newton, Trapez, Simpson, LGS)',
        'Konvergenzordnung und Fehlerabschätzung kennen',
      ],
      subGoals: [
        { label: 'Bisektion: linear, halbiert Intervall, garantiert konvergent bei Vorzeichenwechsel', examRelevance: 'hoch' },
        { label: 'Newton: quadratisch konvergent, $x_{n+1} = x_n - f(x_n)/f\'(x_n)$', examRelevance: 'hoch' },
        { label: 'Trapezregel: Fehler $O(h^2)$; Simpson: Fehler $O(h^4)$', examRelevance: 'hoch' },
        { label: 'Konditionszahl $\\kappa(A) = \\|A\\| \\|A^{-1}\\|$ — Stabilitätsindikator bei LGS', examRelevance: 'mittel' },
        { label: 'Maschinengenauigkeit $\\epsilon \\approx 2{,}22 \\cdot 10^{-16}$ (double), Rundungsfehler ansammeln', examRelevance: 'mittel' },
        { label: 'Abbruchkriterium: $|x_{n+1} - x_n| < \\epsilon$ oder max. Iterationen', examRelevance: 'hoch' },
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Problem erkennen:** Nullstelle (Newton/Bisektion), Integral (Trapez/Simpson), LGS (Gauß/LU).\n\n' +
        '**Konvergenz/Abbruch:** Iteration nur mit klarem Abbruchkriterium. Rundungsfehler ≠ Verfahrensfehler.',
      formulaTitle: 'Verfahrensübersicht',
      formulaContent:
        '- **Bisektion:** linear, $x_{n+1} = (a+b)/2$, halbiert Intervall\n' +
        '- **Newton:** quadratisch, $x_{n+1} = x_n - f(x_n)/f\'(x_n)$\n' +
        '- **Trapez-Regel:** $\\int_a^b f \\approx (b-a)\\,(f(a)+f(b))/2$\n' +
        '- **Simpson-Regel:** $\\int \\approx h/3\\,(f_0 + 4f_1 + 2f_2 + \\ldots + f_n)$',
      exercises: [
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Aufwärmaufgabe: Welches Problem wird mit dem **Newton-Verfahren** gelöst?',
          options: [
            'Nullstellen einer differenzierbaren Funktion finden',
            'Bestimmtes Integral numerisch berechnen',
            'Lineares Gleichungssystem lösen',
            'Extrema eines Polynoms bestimmen',
          ],
          correctIndex: 0,
          explanation: 'Newton ist ein **Nullstellen-Verfahren**: $x_{n+1} = x_n - f(x_n)/f\'(x_n)$.',
          hints: [
            'Newton löst $f(x) = 0$.',
            'Tangente schneidet x-Achse.',
          ],
          wrongAnswerExplanations: {
            '1': 'Integration löst man mit Quadraturverfahren (Trapez, Simpson), nicht mit Newton. Newton verwendet zwar $f\'$, aber für Nullstellen, nicht Integrale.',
            '2': 'LGS löst man mit Gauß- oder LU-Verfahren. Newton als Verallgemeinerung auf LGS existiert zwar (mehrdim. Newton), ist aber immer Nullstellen-orientiert.',
            '3': 'Extrema bestimmt man aus $f\'(x) = 0$ — das ist zwar eine Nullstellensuche, hier jedoch nicht von $f$, sondern von $f\'$. Die Frage bezog sich auf direktes $f(x) = 0$.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Newton auf $f(x) = x^2 - 5$, $x_0 = 2$. Wie lautet $x_1$?',
          correctValue: 2.25,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$f(2) = -1$, $f\'(2) = 4$. $x_1 = 2 - (-1)/4 = 2 + 0{,}25 = 2{,}25$. Zielwert $\\sqrt{5} \\approx 2{,}236$.',
          hints: [
            '$f\'(x) = 2x$, $f\'(2) = 4$.',
            '$x_1 = 2 - (-1)/4$.',
            '$2 + 0{,}25 = 2{,}25$.',
          ],
        },
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Welche Konvergenzordnung hat **Newton** bei einfachen Nullstellen?',
          options: ['quadratisch', 'linear', 'kubisch', 'gar keine'],
          correctIndex: 0,
          explanation:
            'Quadratische Konvergenz: $|e_{n+1}| \\leq C\\,e_n^2$. Bei einfachen Nullstellen verdoppelt sich die Zahl korrekter Stellen pro Schritt.',
          hints: [
            'Fehler wird quadriert.',
            'Das ist die typische Newton-Eigenschaft bei sauberen Nullstellen.',
          ],
          wrongAnswerExplanations: {
            '1': 'Linear konvergiert Bisektion oder Newton bei **mehrfachen** Nullstellen. Für einfache Nullstellen gilt der stärkere Satz: $e_{n+1} \\leq C e_n^2$.',
            '2': 'Kubische Konvergenz erreichen spezielle Verfahren wie Halley oder modifizierte Newton-Schemata, aber klassisches Newton hat Ordnung genau 2.',
            '3': 'Die Konvergenz ist bei einfachen Nullstellen und gutem Startwert garantiert mindestens quadratisch — nicht „keine".',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Ein **Abbruchkriterium** ist bei iterativen Verfahren zwingend nötig.',
          correct: true,
          explanation:
            'Richtig. Ohne Abbruchkriterium läuft das Verfahren unendlich. Typische Kriterien: $|x_{n+1} - x_n| < \\varepsilon$, $|f(x_n)| < \\delta$, oder maximale Iterationszahl.',
          hints: [
            'Was passiert ohne Abbruch?',
            'Konvergenz ≠ exakte Lösung nach endlich vielen Schritten.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Simpson braucht zur Bildung der Quadratur **gerade** Anzahl an Teilintervallen. Warum?',
          options: [
            'Simpson gruppiert Stützstellen zu Dreiergruppen — dafür braucht es jeweils zwei Intervalle',
            'Simpson konvergiert nur für gerade $n$',
            'Für ungerade $n$ gilt kein Fehler',
            'Es muss eine Konvention sein, kein mathematischer Grund',
          ],
          correctIndex: 0,
          explanation:
            'Simpson approximiert ein Parabel-Segment über **zwei** Teilintervalle (drei Stützpunkte). Für eine zusammengesetzte Anwendung muss $n$ gerade sein. Alternative: Simpson 3/8-Regel für drei Intervalle.',
          hints: [
            'Simpson nutzt drei Stützstellen pro Parabel.',
            'Zwei Intervalle = eine Parabel-Gruppe.',
          ],
          wrongAnswerExplanations: {
            '1': 'Simpson-Konvergenz hängt nicht von der Parität ab, sondern von der Glattheit. Bei ungeradem $n$ ist Simpson 1/3 nicht direkt anwendbar — der Rest muss mit einer anderen Regel (3/8) gefüllt werden.',
            '2': 'Der Fehler verschwindet nicht bei ungeradem $n$. Im Gegenteil: Simpson 1/3 lässt sich nicht einheitlich anwenden, und Fehlerabschätzungen gelten nur für passende Gruppierung.',
            '3': 'Es ist ein mathematischer Grund (Gruppen-Struktur der Parabelapproximation), keine Konvention. Jeweils 3 Stützpunkte spannen eine Parabel — daher brauche ich Gruppen à 2 Intervallen.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Trapez-Fehler bei Integration von $x^2$ auf $[0, 1]$ mit $n = 10$? Hinweis: Fehler $= -(b-a)^3 f\'\'(\\xi)/(12 n^2)$, $f\'\'(\\xi) = 2$.',
          correctValue: -0.00167,
          tolerance: 0.001,
          unit: '',
          explanation:
            'Fehler $= -1^3 \\cdot 2 /(12 \\cdot 100) = -2/1200 \\approx -0{,}00167$. Trapez **überschätzt** bei konvexem $f$ (negativer Fehler).',
          hints: [
            'Fehlerformel: $-(b-a)^3 f\'\' / (12 n^2)$.',
            '$(b-a)^3 = 1$, $f\'\' = 2$, $n^2 = 100$.',
            '$-2/1200 \\approx -0{,}00167$.',
          ],
        },
        {
          type: 'matching',
          question: '[PRÜFUNG] Ordne jedem Problem das passendste Verfahren zu.',
          pairs: [
            { left: 'Nullstelle gesucht, $f$ differenzierbar, guter Startwert', right: 'Newton' },
            { left: 'Nullstelle, nur Stetigkeit + Vorzeichenwechsel bekannt', right: 'Bisektion' },
            { left: 'Integral einer glatten Funktion, hohe Genauigkeit nötig', right: 'Simpson' },
            { left: 'Schnell programmiertes Integral, Tabelle von Funktionswerten', right: 'Trapez' },
          ],
          explanation:
            'Die Wahl hängt von drei Faktoren ab: Problemtyp (Nullstelle vs. Integral), Voraussetzungen an $f$ (Differenzierbarkeit), und Genauigkeitsanspruch.',
          hints: [
            'Nullstelle vs. Integral erkennen.',
            'Newton: schnell. Bisektion: robust.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie zur Verfahrens-Wahl bei numerischen Problemen. Bringe in Reihenfolge.',
          items: [
            'Problemtyp identifizieren: Nullstelle / Integral / LGS',
            'Voraussetzungen prüfen: Ableitung verfügbar? Glattheit? Startwert?',
            'Geeignetes Verfahren wählen (Newton / Bisektion / Simpson / Trapez)',
            'Abbruchkriterium festlegen und Konvergenzordnung verifizieren',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Systematisch: Problem → Voraussetzungen → Verfahren → Abbruch. Das spart bei Prüfungsaufgaben Zeit und verhindert Fehlwahl.',
          hints: [
            'Ohne Problemtyp kein Verfahren.',
            'Abbruchkriterium immer mit angeben.',
          ],
        },
      ],
      masteryQuestion: '[PRÜFUNG] Welche Konvergenzordnung hat Newton bei einfachen Nullstellen?',
      masteryOptions: ['quadratisch', 'linear', 'kubisch', 'gar keine'],
      correctIndex: 0,
      masteryExplanation:
        'Bei einfachen Nullstellen verdoppelt sich die Zahl korrekter Stellen pro Schritt — quadratische Konvergenz. Bei mehrfachen Nullstellen nur linear.',
      masteryHints: [
        '„Verdoppelung der korrekten Stellen pro Schritt" kennzeichnet quadratische Konvergenz.',
        'Die Ordnung gibt an, wie der Fehler bei jeder Iteration schrumpft.',
        'Newton: $e_{n+1} \\approx C \\cdot e_n^2$ — Fehler wird quadriert, also Ordnung 2.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Linear konvergiert Bisektion oder Newton bei **mehrfachen** Nullstellen. Bei einfachen Nullstellen mit $f\'(a) \\neq 0$ gilt der stärkere Satz $e_{n+1} \\leq C e_n^2$.',
        2: 'Kubische Konvergenz erreichen spezielle Verfahren wie Halley, nicht klassisches Newton. Newton hat exakt Ordnung 2.',
        3: 'Newton konvergiert bei einfachen Nullstellen und gutem Startwert garantiert — sogar besonders schnell. „Gar keine" wäre grob falsch.',
      },
      prerequisites: ['num-1-2'],
      nextLessonId: 'num-pruefung-2',
    }),
    makeLesson({
      id: 'num-pruefung-2',
      title: 'Prüfung: Trapez, Simpson & Fehlerordnung',
      estimatedMinutes: 20,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Trapezregel und Simpson-Regel mit mehreren Teilintervallen anwenden',
        '[PRÜFUNG] Fehlerordnung $\\mathcal{O}(h^2)$ vs. $\\mathcal{O}(h^4)$ vergleichen',
        '[PRÜFUNG] Anzahl der Teilintervalle für gegebene Genauigkeit bestimmen',
      ],
      subGoals: [
        { label: 'Trapez: $T(h) = h[(f_0+f_n)/2 + \\sum_{i=1}^{n-1} f_i]$', examRelevance: 'hoch' },
        { label: 'Simpson: $S(h) = (h/3)[f_0 + 4\\sum_{\\text{ung.}} f_i + 2\\sum_{\\text{ger.}} f_i + f_n]$, $n$ gerade', examRelevance: 'hoch' },
        { label: 'Fehler Trapez: $|E| \\leq (b-a) h^2 \\max|f\'\'|/12$', examRelevance: 'hoch' },
        { label: 'Fehler Simpson: $|E| \\leq (b-a) h^4 \\max|f^{(4)}|/180$', examRelevance: 'hoch' },
        { label: 'Anzahl $n$ für Toleranz: Fehlerformel nach $h$ bzw. $n$ auflösen', examRelevance: 'hoch' },
        { label: 'Simpson exakt für Polynome bis Grad 3 (trotz Ordnung 4)', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Mehr Teilintervalle = weniger Fehler',
      intuitionContent:
        'Statt ein großes Trapez zu verwenden, teilt man das Intervall in $n$ Teilstücke der Breite $h = (b-a)/n$ auf. ' +
        'Der Fehler sinkt dann mit $h^2$ (Trapez) oder $h^4$ (Simpson).\n\n' +
        '**Praxis:** Simpson hat bei gleicher Schrittweite viel kleineren Fehler als Trapez — ' +
        'besonders bei glatten Funktionen. Trapez ist einfacher zu implementieren.',
      formulaTitle: 'Zusammengesetzte Regeln',
      formulaContent:
        '**Zusammengesetzte Trapezregel** ($n$ gleiche Teilintervalle, $h = (b-a)/n$):\n' +
        '$$\\int_a^b f\\,dx \\approx \\frac{h}{2}\\left(f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)\\right)$$\n\n' +
        '**Zusammengesetzte Simpson-Regel** ($n$ gerade):\n' +
        '$$\\int_a^b f\\,dx \\approx \\frac{h}{3}\\left(f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + f(x_n)\\right)$$\n\n' +
        '**Fehler:** Trapez $\\mathcal{O}(h^2)$, Simpson $\\mathcal{O}(h^4)$.',
      exercises: [
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Aufwärmaufgabe: Simpson für $\\int_0^2 x^2\\,dx$ mit $n=2$, $h=1$, $m=1$.',
          correctValue: 2.6667,
          tolerance: 0.01,
          unit: '',
          explanation:
            'Simpson: $h/3 \\cdot (f(0) + 4f(1) + f(2)) = 1/3 \\cdot (0 + 4 + 4) = 8/3 \\approx 2{,}667$. Exakt!',
          hints: [
            '$h = 1$, $h/3 = 0{,}333$.',
            '$f(0) = 0, f(1) = 1, f(2) = 4$.',
            '$(0 + 4 + 4)/3 = 8/3$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Trapez mit $n = 4$ für $\\int_0^1 x^3\\,dx$. $h = 0{,}25$, Stützstellen $0, 0{,}25, 0{,}5, 0{,}75, 1$.',
          correctValue: 0.265625,
          tolerance: 0.005,
          unit: '',
          explanation:
            '$f$-Werte: $0, 0{,}0156, 0{,}125, 0{,}4219, 1$. Trapez: $h/2 \\cdot (f_0 + 2(f_1+f_2+f_3) + f_4) = 0{,}125 \\cdot (0 + 2 \\cdot 0{,}5625 + 1) = 0{,}125 \\cdot 2{,}125 = 0{,}2656$. ' +
            'Exakt: $1/4 = 0{,}25$. Trapez überschätzt bei konvexem $f$.',
          hints: [
            '$h/2 \\cdot (f_0 + 2f_1 + 2f_2 + 2f_3 + f_4)$.',
            'Innere Stützstellen doppelt gewichten.',
            'Ergebnis $\\approx 0{,}266$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Wie viele Teilintervalle $n$ braucht man, damit Trapez-Fehler auf ein Viertel reduziert wird?',
          options: ['$n$ verdoppeln', '$n$ halbieren', '$n$ vervierfachen', 'unverändert'],
          correctIndex: 0,
          explanation:
            'Trapez-Fehler $\\propto 1/n^2$. Für Fehler/$4$: $n_{\\text{neu}}^2 = 4 n^2 \\Rightarrow n_{\\text{neu}} = 2n$. Verdoppeln reicht.',
          hints: [
            'Fehler $\\propto h^2 \\propto 1/n^2$.',
            'Faktor 4 im Fehler ↔ Faktor 2 in $n$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Halbierung von $n$ vergrößert den Fehler um Faktor 4, weil Fehler $\\propto 1/n^2$. Gewünscht war Fehlerreduktion, nicht Vergrößerung.',
            '2': 'Vervierfachung reduziert den Fehler um Faktor $4^2 = 16$ — viel zu stark. Gesucht ist Faktor 4, also nur $n \\to 2n$.',
            '3': 'Bei unverändertem $n$ bleibt auch der Fehler gleich. Zur Fehlerreduktion muss $n$ wachsen.',
          },
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Wie viele Teilintervalle braucht Simpson, um denselben Fehler-Gewinn zu haben?',
          options: [
            '$n^{1/2}$ mal so viele (fast unverändert)',
            '4× so viele',
            '2× so viele',
            '16× so viele',
          ],
          correctIndex: 0,
          explanation:
            'Simpson-Fehler $\\propto 1/n^4$. Für Fehler/$4$: $n_{\\text{neu}}^4 = 4n^4 \\Rightarrow n_{\\text{neu}} = 4^{1/4} \\cdot n \\approx 1{,}41\\,n$. Nur leicht erhöhen.',
          hints: [
            'Simpson-Fehler ordnung $h^4$.',
            'Faktor 4 im Fehler ↔ Faktor $4^{1/4} \\approx 1{,}41$ in $n$.',
          ],
          wrongAnswerExplanations: {
            '1': '4× so viele gilt für Trapez-Ordnung 2 mit Faktor 16 Fehlerreduktion, nicht für Simpson ($h^4$). Bei Simpson reicht $n \\to 4^{1/4} n \\approx 1{,}41 n$.',
            '2': '2× so viele ist die Trapez-Regel für Faktor-4-Reduktion. Simpson braucht wegen höherer Ordnung $h^4$ weniger: Faktor $\\approx 1{,}41$.',
            '3': '16× wäre der Fall, wenn Simpson Ordnung 1 hätte. Tatsächlich hat Simpson Ordnung 4, also nur $4^{1/4} \\approx 1{,}41$-facher $n$.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Simpson benötigt eine **gerade** Anzahl Teilintervalle (sonst nicht anwendbar).',
          correct: true,
          explanation:
            'Richtig. Simpson kombiniert Gruppen von 2 Intervallen (je 3 Stützpunkte: 1 Parabel). Bei ungeradem $n$ müsste man ein Intervall mit anderem Verfahren (z.B. 3/8-Regel) füllen.',
          hints: [
            'Paritätsforderung kommt aus der Gruppierung.',
            'Ungerade $n$ → kein vollständiges Parabel-Paar.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] $n = 4$, Trapez für $\\int_0^4 \\sqrt{x}\\,dx$. Stützstellen $0, 1, 2, 3, 4$.',
          correctValue: 5.146,
          tolerance: 0.05,
          unit: '',
          explanation:
            '$f$-Werte: $0, 1, \\sqrt{2}, \\sqrt{3}, 2 \\approx 0, 1, 1{,}414, 1{,}732, 2$. ' +
            'Trapez: $\\frac{1}{2}(0 + 2 \\cdot (1 + 1{,}414 + 1{,}732) + 2) = \\frac{1}{2}(2 + 2 \\cdot 4{,}146) = \\frac{1}{2}(10{,}292) = 5{,}146$. ' +
            'Exakt: $2/3 \\cdot 4^{3/2} = 2/3 \\cdot 8 = 16/3 \\approx 5{,}333$.',
          hints: [
            '$h = 1$, also $h/2 = 0{,}5$.',
            'Innere: $f(1), f(2), f(3)$ doppelt.',
            'Endpunkte einfach.',
          ],
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jeder Aussage das richtige Verfahren zu.',
          pairs: [
            { left: 'Fehler $\\mathcal{O}(h^2)$',           right: 'Trapez' },
            { left: 'Fehler $\\mathcal{O}(h^4)$',           right: 'Simpson' },
            { left: 'Gruppen zu 3 Stützpunkten',          right: 'Simpson' },
            { left: 'Nur Endpunkte + inneres Gitter',     right: 'Trapez' },
          ],
          explanation:
            'Der Ordnungsunterschied folgt aus dem Grad der lokalen Polynomapproximation (Sekante vs. Parabel).',
          hints: [
            'Sekante → Trapez (linear).',
            'Parabel → Simpson (quadratisch).',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Schritte zur Berechnung eines Integrals mit zusammengesetzter Trapezregel. Bringe in Reihenfolge.',
          items: [
            'Intervall $[a,b]$ und Anzahl Teilintervalle $n$ wählen',
            'Schrittweite $h = (b-a)/n$ berechnen',
            'Stützstellen $x_i = a + i h$ und zugehörige $f(x_i)$ bestimmen',
            'Formel anwenden: $h/2 \\cdot (f_0 + 2\\sum_{i=1}^{n-1} f_i + f_n)$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Aufbau ist iterativ: erst das Gitter planen, dann Werte sammeln, dann Formel. Praktisch: in Tabelle arbeiten — Endpunkte einfach, innere doppelt.',
          hints: [
            'Gitter zuerst.',
            'Inner doppelt, außen einfach.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] Trapezregel für $\\int_0^2 x^2\\,dx$ mit $n=2$ Teilintervallen ($h=1$)?',
      masteryOptions: ['$3$', '$4$', '$8/3$', '$2$'],
      correctIndex: 0,
      masteryExplanation:
        '$x_0=0, x_1=1, x_2=2$. $f(0)=0, f(1)=1, f(2)=4$. ' +
        'Trapez: $\\frac{1}{2}(0 + 2\\cdot1 + 4) = \\frac{1}{2}\\cdot 6 = 3$. ' +
        '(Exakt: $8/3 \\approx 2{,}67$.)',
      masteryHints: [
        'Stützstellen: $x_0=0, x_1=1, x_2=2$ (Breite $h=1$).',
        'Zusammengesetzte Trapezregel: $h/2 \\cdot (f_0 + 2f_1 + f_2)$.',
        '$1/2 \\cdot (0 + 2\\cdot1 + 4) = 1/2 \\cdot 6 = 3$.',
      ],
      masteryWrongAnswerExplanations: {
        1: '$4$ käme aus einer einfachen Trapezregel $(b-a)/2 \\cdot (f(a)+f(b)) = 1 \\cdot 4$, also $n=1$ statt $n=2$. Bei $n=2$ fällt $f(1) = 1$ als doppelt gewichteter innerer Wert hinzu.',
        2: '$8/3 \\approx 2{,}67$ ist der **exakte** Integralwert, den Trapez nur als Grenzwert $n \\to \\infty$ erreicht. Bei $n=2$ ergibt Trapez $3$.',
        3: '$2$ wäre $h/2 \\cdot (f_1 + f_2) = 0{,}5 \\cdot (1+4) = 2{,}5$ — oder noch grober berechnet. Korrekt mit Endpunkten + doppeltem inneren Wert: $0{,}5 \\cdot (0 + 2 + 4) = 3$.',
      },
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => x * x, color: '#3b82f6', label: 'f(x)=x²' },
          ],
          xRange: [-0.5, 2.5],
          yRange: [-0.5, 5],
          showGrid: true,
        },
        caption: 'Zusammengesetzte Trapezregel mit n=2 für ∫x²dx von 0 bis 2',
        alt: 'Graph von x² mit zwei Trapezen als Approximation',
      },
      prerequisites: ['num-pruefung-1'],
      nextLessonId: 'num-pruefung-3',
    }),
    makeLesson({
      id: 'num-pruefung-3',
      title: 'Prüfung: Kombinierte Aufgaben & Abbruchkriterien',
      estimatedMinutes: 22,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Verfahren dem Problem zuordnen',
        '[PRÜFUNG] Abbruchkriterium korrekt anwenden',
        '[PRÜFUNG] Vor- und Nachteile der Verfahren benennen',
      ],
      subGoals: [
        { label: 'Methodenwahl-Matrix: Nullstelle → Newton/Bisekt.; Integral → Simpson; LGS → Gauß/LU', examRelevance: 'hoch' },
        { label: 'Newton schlägt fehl bei $f\' \\approx 0$ → Bisektion als Fallback robust', examRelevance: 'hoch' },
        { label: 'Abbruchkriterium: absolut $|x_{n+1} - x_n| < \\epsilon_{\\text{abs}}$ oder relativ', examRelevance: 'hoch' },
        { label: 'Euler-Verfahren für DGL: explizit instabil bei steifen Systemen; implizit stabil', examRelevance: 'mittel' },
        { label: 'Runge-Kutta 4 (RK4): Fehler $O(h^4)$, Standard für DGL-Anfangswertprobleme', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Das richtige Werkzeug für das Problem',
      intuitionContent:
        '**Entscheidungsbaum:**\n' +
        '- Nullstelle gesucht? → Vorzeichen bekannt und Robustheit wichtig: **Bisektion**. Schnelle Konvergenz: **Newton**.\n' +
        '- Integral gesucht? → Glatte Funktion, hohe Genauigkeit: **Simpson**. Einfach: **Trapez**.\n\n' +
        '**Abbruch:** Iteration stoppen wenn $|x_{n+1} - x_n| < \\varepsilon$ (Schrittkontrolle) ' +
        'oder $|f(x_n)| < \\delta$ (Residuumskontrolle).',
      formulaTitle: 'Verfahrensvergleich',
      formulaContent:
        '| Verfahren | Typ | Konvergenz | Robustheit |\n' +
        '|-----------|-----|-----------|------------|\n' +
        '| Bisektion | Nullstelle | linear $\\mathcal{O}(1/2^n)$ | sehr robust |\n' +
        '| Newton | Nullstelle | quadratisch | empfindlich |\n' +
        '| Trapez | Integral | $\\mathcal{O}(h^2)$ | stabil |\n' +
        '| Simpson | Integral | $\\mathcal{O}(h^4)$ | stabil |\n\n' +
        '**Newton-Abbruch:** $|x_{n+1} - x_n| < \\varepsilon$ **und** $|f(x_n)| < \\delta$.',
      exercises: [
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Aufwärmaufgabe: Ein gültiges Abbruchkriterium für Newton ist …',
          options: [
            '$|x_{n+1} - x_n| < \\varepsilon$',
            '$x_n > x_{n-1}$',
            '$f\'(x_n) = 0$',
            '$n > 5$',
          ],
          correctIndex: 0,
          explanation:
            'Kleine Schrittweite = Konvergenz nahe der Nullstelle. Zusätzlich oft $|f(x_n)| < \\delta$ als Residuumskontrolle.',
          hints: [
            'Abbruch bei kleiner Änderung.',
            '$|\\Delta x| < \\varepsilon$.',
          ],
          wrongAnswerExplanations: {
            '1': 'Monotonie ($x_n > x_{n-1}$) garantiert keine Konvergenz — Newton kann oszillieren oder abwechselnd zu- und abnehmen. Abbruch braucht eine echte Kleinheits-Bedingung.',
            '2': '$f\'(x_n) = 0$ ist ein **Abbruch wegen Zusammenbruchs** (Division durch 0), kein Konvergenz-Abbruch. Das Verfahren liefert dann keine Lösung.',
            '3': 'Eine feste Iterationszahl $n > 5$ ist ein Notfall-Abbruch (Sicherheitsnetz), aber kein Konvergenzkriterium — vielleicht ist die Genauigkeit nach 5 Schritten viel zu gering.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Wenn $|f(x_n)|$ klein ist, muss $x_n$ auch nah an der Nullstelle liegen.',
          correct: false,
          explanation:
            'Falsch. Bei flacher Ableitung ($f\'(x) \\approx 0$) kann $f(x)$ klein sein, obwohl $x$ weit von der Nullstelle entfernt liegt. Deshalb **beide** Kriterien kombinieren: Schritt- UND Residuumskontrolle.',
          hints: [
            'Flacher Graph → kleine Funktionswerte weit und breit.',
            'Gegenbeispiel: $f(x) = 0{,}001 \\cdot (x - 10)$ bei $x = 0$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Bei welcher Situation **divergiert** Newton typischerweise?',
          options: [
            'Wenn die Ableitung am Startwert sehr klein ist',
            'Wenn die Funktion stetig ist',
            'Wenn der Startwert rational ist',
            'Nie — Newton konvergiert immer',
          ],
          correctIndex: 0,
          explanation:
            'Wenn $f\'(x_0) \\approx 0$, wird der Korrekturterm $f/f\'$ sehr groß → $x_1$ „schießt" weit vom Ziel weg und landet evtl. im falschen Bereich. Kritisch bei Funktionen mit flachen Stellen.',
          hints: [
            'Wo steht $f\'$ in der Newton-Formel?',
            'Division durch kleine Zahlen ist numerisch problematisch.',
          ],
          wrongAnswerExplanations: {
            '1': 'Stetigkeit allein garantiert keine Konvergenz von Newton, aber ist auch kein Divergenzgrund. Das Problem entsteht erst bei flacher Ableitung oder ungünstigen Startwerten.',
            '2': 'Rationalität des Startwerts hat keinen Einfluss auf Konvergenz — Newton behandelt reelle Zahlen unabhängig von ihrer Darstellung.',
            '3': 'Newton konvergiert **nicht** immer — das ist die häufige Fehleinschätzung. Nur bei lokal gutmütigen Bedingungen ist Konvergenz garantiert.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Bisektion: Fehler nach 10 Schritten, Startintervall $[0, 1]$.',
          correctValue: 0.000977,
          tolerance: 0.0001,
          unit: '',
          explanation:
            'Nach $n$ Schritten: Intervallbreite $\\leq (b-a)/2^n = 1/1024 \\approx 9{,}77 \\cdot 10^{-4}$. ' +
            'Praktisch liegt der Fehler unter der halben Intervallbreite, also $\\leq 1/2048$. Hier: $\\approx 10^{-3}$.',
          hints: [
            'Pro Schritt halbiert sich die Intervallbreite.',
            '$1/2^{10} = 1/1024 \\approx 0{,}000977$.',
          ],
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jeder Aussage das richtige Verfahren zu.',
          pairs: [
            { left: 'Braucht Vorzeichenwechsel',                  right: 'Bisektion' },
            { left: 'Braucht Ableitung',                           right: 'Newton' },
            { left: 'Approximiert mit Parabel',                   right: 'Simpson' },
            { left: 'Verbindet Stützstellen mit Geraden',         right: 'Trapez' },
          ],
          explanation:
            'Bisektion und Newton sind Nullstellenverfahren (mit unterschiedlichen Anforderungen an $f$); Trapez und Simpson sind Integrationsverfahren (lineare vs. quadratische Interpolation).',
          hints: [
            'Nullstelle vs. Integral.',
            'Bisektion = robust, Newton = schnell.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Ein Integrationsproblem lautet: „Berechne $\\int_0^1 e^{-x^2}\\,dx$ auf 4 Nachkommastellen Genauigkeit." Welche Strategie ist **am effizientesten**?',
          options: [
            'Simpson mit ausreichend $n$ (4. Ordnung)',
            'Trapez mit sehr großem $n$',
            'Bisektion',
            'Newton-Iteration',
          ],
          correctIndex: 0,
          explanation:
            'Für 4-Nachkommastellen-Genauigkeit braucht Simpson ($h^4$-Fehler) viel weniger Auswertungen als Trapez ($h^2$). ' +
            'Bisektion und Newton sind für Nullstellen, nicht Integration.',
          hints: [
            'Simpson höhere Ordnung → weniger Aufrufe für gleiche Genauigkeit.',
            'Newton/Bisektion falsches Problem.',
          ],
          wrongAnswerExplanations: {
            '1': 'Trapez ($h^2$) bräuchte bei gleicher Genauigkeit viel mehr Stützstellen als Simpson ($h^4$). Bei 4 Nachkommastellen ist Simpson deutlich effizienter.',
            '2': 'Bisektion löst Nullstellen-Probleme ($f(x) = 0$), kein Integral. Hier verlangt die Aufgabe einen Integralwert.',
            '3': 'Newton ist ebenfalls ein Nullstellenverfahren. Für Integrale sind Quadraturverfahren (Trapez/Simpson) die richtige Wahl.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Rundungsfehler und Verfahrensfehler sind dasselbe.',
          correct: false,
          explanation:
            'Falsch. **Verfahrensfehler**: Systematischer Fehler durch Diskretisierung (z.B. Simpson-$h^4$-Term). ' +
            '**Rundungsfehler**: Durch endliche Zahlendarstellung im Computer. ' +
            'Beide müssen getrennt betrachtet werden — zu kleines $h$ verbessert den Verfahrensfehler, kann aber Rundungsfehler erhöhen.',
          hints: [
            'Verfahrens- vs. Rundungsfehler.',
            'Ein zu feines Gitter ist nicht immer besser.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Gesamtstrategie für ein numerisches Problem in der Prüfung. Bringe die Schritte in Reihenfolge.',
          items: [
            'Problem analysieren: Was wird gesucht? (Nullstelle / Integral / LGS)',
            'Verfahren wählen unter Berücksichtigung von Robustheit, Aufwand, Genauigkeit',
            'Diskretisierungs- oder Abbruchparameter ($h$, $\\varepsilon$) festlegen',
            'Iteration/Quadratur durchführen und Plausibilität prüfen',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Prüfungsfreundlich: erst Problem verstehen, dann Verfahren, dann Parameter, dann Ausführung. ' +
            'Plausibilitätscheck am Ende (Einheiten, Vorzeichen, Größenordnung) fängt typische Fehler ab.',
          hints: [
            'Verfahrenswahl kommt VOR der Ausführung.',
            'Plausibilitätscheck nicht vergessen.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] Welches Verfahren ist robuster, wenn der Startwert weit von der Nullstelle entfernt liegt?',
      masteryOptions: [
        'Bisektion — garantiert Konvergenz bei Vorzeichenwechsel',
        'Newton — konvergiert immer schneller',
        'Simpson — hat keine Iterationen',
        'Trapez — robuster als Newton',
      ],
      correctIndex: 0,
      masteryExplanation:
        'Bisektion braucht nur ein Vorzeichenwechsel-Intervall $[a,b]$ und halbiert sicher. ' +
        'Newton kann divergieren, wenn der Startwert ungünstig ist (z.B. bei flacher Ableitung).',
      masteryHints: [
        'Robustheit = sichere Konvergenz ohne guten Startwert.',
        'Bisektion garantiert Konvergenz, wenn $f(a) \\cdot f(b) < 0$.',
        'Newton braucht einen guten Startwert — bei schlechtem Startwert kann er divergieren.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Newton konvergiert schneller, aber **nicht immer** — bei schlechtem Startwert oder kleinen Ableitungen kann es divergieren. Bei Robustheit gewinnt Bisektion.',
        2: 'Simpson ist ein Integrationsverfahren, kein Nullstellen-Verfahren. Es kann gar nicht zum Finden einer Nullstelle verwendet werden.',
        3: 'Trapez ist ebenfalls ein Integrationsverfahren, keine Alternative zu Newton für Nullstellen. Hier geht es um Robustheit bei Nullstellen, nicht um Integrale.',
      },
      prerequisites: ['num-pruefung-2'],
      nextLessonId: null,
    }),
  ],
})

export const numerikTopic = {
  id: 'numerik',
  title: 'Numerische Mathematik',
  description: 'Bisektion, Newton, Trapez/Simpson, LGS — Algorithmen statt exakter Lösungen',
  subject: 'mathematics',
  icon: '≈',
  color: 'cyan',
  estimatedHours: 3,
  difficulty: 3,
  level: 'vertiefung',
  phase: 'vertiefung',
  examRelevance: 'wahl',
  topicGoals: [
    'Nullstellen nichtlinearer Gleichungen per Bisektion robust eingrenzen und Iterationszahl abschätzen',
    'Newton-Verfahren mit $x_{n+1} = x_n - f(x_n)/f\'(x_n)$ anwenden und Konvergenz (quadratisch, divergent) diagnostizieren',
    'Fixpunktiteration aufstellen und $|\\varphi\'(x^*)| < 1$ als Konvergenzbedingung prüfen',
    'Bestimmte Integrale über Trapezregel und Simpson-Regel approximieren und den Fehler $O(h^2)$ bzw. $O(h^4)$ einordnen',
    'Lineare Gleichungssysteme mit LR-Zerlegung und Pivotisierung stabil lösen',
    'Iterative Lösung von LGS (Jacobi, Gauß-Seidel) auf Konvergenzkriterien (diagonaldominant) prüfen',
  ],
  units: [unit1, unit2],
  prerequisites: ['algebra', 'ableitung'],
}
