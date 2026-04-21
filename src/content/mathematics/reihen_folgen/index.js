import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'rf-unit-1',
  title: 'Folgen, Reihen & Konvergenz',
  order: 1,
  lessons: [
    makeLesson({
      id: 'rf-1-1',
      title: 'Folgen und Grenzwerte',
      estimatedMinutes: 12,
      learningGoals: [
        'Folgen als Funktionen $\\mathbb{N} \\to \\mathbb{R}$ verstehen',
        'Konvergenz und Grenzwert definieren',
        'Monotonie und Beschränktheit prüfen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Eine Folge nähert sich einem Wert an',
      intuitionContent:
        'Eine **Folge** $(a_n)$ ist eine unendliche Liste von Zahlen: $a_1, a_2, a_3, \\ldots$ ' +
        'Sie heißt **konvergent** mit Grenzwert $L$, wenn die Folgenglieder für große $n$ beliebig nah an $L$ liegen.\n\n' +
        'Analogie: Ein Auto nähert sich einer Mauer — irgendwann ist der Abstand kleiner als jede beliebige Toleranz.',
      formulaTitle: 'Grenzwert-Definition',
      formulaContent:
        '$$\\lim_{n\\to\\infty} a_n = L \\iff \\forall \\varepsilon > 0 \\; \\exists N : |a_n - L| < \\varepsilon \\; \\forall n \\geq N$$\n\n' +
        '**Monoton + beschränkt ⇒ konvergent** (wichtiges Kriterium ohne Grenzwert zu kennen).',
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Welchen Grenzwert hat die Folge $a_n = \\dfrac{2n + 3}{n + 1}$?',
          options: ['$2$', '$3$', '$0$', 'divergiert'],
          correctIndex: 0,
          explanation:
            'Durch $n$ kürzen: $a_n = \\frac{2 + 3/n}{1 + 1/n}$. Für $n \\to \\infty$: $\\frac{2 + 0}{1 + 0} = 2$. ' +
            'Faustregel: bei Polynomen gleichen Grades zählt das Verhältnis der höchsten Koeffizienten.',
          hints: [
            'Zähler und Nenner durch die höchste Potenz von $n$ dividieren.',
            '$a_n = (2 + 3/n)/(1 + 1/n)$.',
            'Für $n \\to \\infty$: $3/n \\to 0$, $1/n \\to 0$.',
          ],
          wrongAnswerExplanations: {
            1: 'Nur der Zählerterm $+3$ betrachtet. Bei rationalen Folgen zählt das Verhältnis der *Leitkoeffizienten* (höchste Potenzen): hier $2/1=2$, nicht $3$. Die konstanten Terme verschwinden im Grenzübergang.',
            2: 'Das wäre der Grenzwert, wenn der Zählergrad *kleiner* als der Nennergrad wäre (z.B. $\\frac{3}{n+1} \\to 0$). Hier haben Zähler ($2n$) und Nenner ($n$) gleichen Grad, daher geht der Quotient nicht gegen $0$, sondern gegen $2/1=2$.',
            3: 'Die Folge divergiert *nicht* — der Nenner wächst, aber der Zähler wächst proportional mit. Das Verhältnis stabilisiert sich bei $2$. Nur bei unterschiedlichen Wachstumsraten (z.B. $n^2/n$) kann Divergenz auftreten.',
          },
        },
        {
          type: 'true-false',
          statement:
            'Jede monoton wachsende Folge ist konvergent.',
          correct: false,
          explanation:
            'Falsch. Monoton allein reicht nicht — die Folge muss auch **beschränkt** sein. ' +
            'Gegenbeispiel: $a_n = n$ ist monoton wachsend, aber divergiert gegen $\\infty$.',
          hints: [
            'Was fehlt neben Monotonie?',
            'Ist $a_n = n$ monoton? Konvergiert sie?',
            'Das Kriterium lautet: monoton **und beschränkt** → konvergent.',
          ],
        },
        {
          type: 'multiple-choice',
          question: 'Welche Folge ist **beschränkt aber nicht konvergent**?',
          options: [
            '$a_n = (-1)^n$',
            '$a_n = 1/n$',
            '$a_n = n$',
            '$a_n = n^2$',
          ],
          correctIndex: 0,
          explanation:
            '$(-1)^n$ springt zwischen $-1$ und $+1$ — beschränkt, aber ohne Grenzwert. ' +
            '$1/n$ ist beschränkt und konvergent, $n$ und $n^2$ sind unbeschränkt.',
          hints: [
            'Beschränkt heißt: Werte liegen in einem Intervall.',
            'Konvergenz heißt: nähert sich einem festen Wert an.',
            'Beides zusammen: $(-1)^n$ ist beschränkt, aber schwankt ewig.',
          ],
          wrongAnswerExplanations: {
            1: '$1/n$ ist beschränkt *und* konvergent (gegen $0$) — erfüllt also beide Bedingungen. Die Frage sucht eine beschränkte, aber nicht konvergente Folge, also ein Beispiel wie $(-1)^n$.',
            2: '$n$ ist unbeschränkt (wächst über jede Schranke hinaus) und divergiert gegen $\\infty$. Beschränkt ist hier nicht erfüllt; die Folge erfüllt *beide* Kriterien nicht.',
            3: '$n^2$ wächst noch schneller als $n$ und ist ebenfalls unbeschränkt. „Beschränkt, aber nicht konvergent" wird nur von oszillierenden beschränkten Folgen erfüllt — z.B. $(-1)^n$ zwischen $-1$ und $+1$.',
          },
        },
        {
          type: 'number-input',
          question: 'Für welches kleinste $N$ gilt $|1/n - 0| < 0{,}01$ für alle $n \\geq N$? (Gib $N$ an.)',
          correctValue: 101,
          tolerance: 0.5,
          unit: '',
          explanation:
            '$|1/n| < 0{,}01 \\Leftrightarrow n > 100$. Die Bedingung ist erst ab $n = 101$ erfüllt. ' +
            'Dies ist die **$\\varepsilon$-$N$-Definition** der Konvergenz in Aktion: zu jedem $\\varepsilon = 0{,}01$ gibt es ein $N$ ab dem alle Folgenglieder in der $\\varepsilon$-Umgebung liegen.',
          hints: [
            '$|1/n| < \\varepsilon \\Leftrightarrow n > 1/\\varepsilon$.',
            'Mit $\\varepsilon = 0{,}01$: $n > 100$.',
            'Das **kleinste** $n$, das das erfüllt, ist $n = 101$.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jeder Folge ihren Grenzwert zu.',
          pairs: [
            { left: '$a_n = \\dfrac{1}{n}$', right: '$0$' },
            { left: '$a_n = \\dfrac{n}{n+1}$', right: '$1$' },
            { left: '$a_n = \\left(\\dfrac{1}{2}\\right)^n$', right: '$0$' },
            { left: '$a_n = \\dfrac{2n^2}{n^2 + 1}$', right: '$2$' },
          ],
          explanation:
            'Gemeinsame Technik: höchste Potenzen kürzen und Terme mit $1/n^k \\to 0$ streichen. ' +
            'Geometrische Folgen $(q^n)$ mit $|q|<1$ gehen gegen $0$.',
          hints: [
            'Zwei Folgen gehen nach $0$, zwei nach endlichen Werten.',
            'Bei Brüchen: Leitkoeffizienten vergleichen.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'Die Folge $a_n = (1 + 1/n)^n$ konvergiert gegen $e$.',
          correct: true,
          explanation:
            'Richtig — das ist die klassische Definition der eulerschen Zahl: ' +
            '$e = \\lim_{n\\to\\infty}(1 + 1/n)^n \\approx 2{,}71828$.',
          hints: [
            'Setze $n = 10, 100, 1000$ ein und beobachte den Zahlenwert.',
            'Ergebnis liegt knapp über $2{,}7$ — bekannt?',
            'Schlage im Formelheft den Grenzwert $(1+1/n)^n$ nach.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Welche Aussage zur Folge $a_n = \\dfrac{\\sin n}{n}$ ist **richtig**?',
          options: [
            'Sie konvergiert gegen $0$ (Sandwich-Lemma)',
            'Sie oszilliert und hat keinen Grenzwert',
            'Sie wächst gegen $\\infty$',
            'Sie hat Grenzwert $1$',
          ],
          correctIndex: 0,
          explanation:
            '$|\\sin n| \\leq 1$, also $|a_n| \\leq 1/n \\to 0$. Nach dem **Sandwich/Einschließungssatz** folgt $\\lim a_n = 0$.',
          hints: [
            '$\\sin$ ist immer zwischen $-1$ und $1$.',
            'Was passiert, wenn du durch $n \\to \\infty$ teilst?',
            'Sandwich: $-1/n \\leq \\sin n/n \\leq 1/n$, beide Schranken $\\to 0$.',
          ],
          wrongAnswerExplanations: {
            1: '$\\sin n$ oszilliert allein zwischen $-1$ und $+1$, aber nicht $\\sin n / n$. Der Faktor $1/n$ drückt die Schwingung flach: $|\\sin n /n| \\leq 1/n \\to 0$ (Sandwich-Lemma). Grenzwert existiert und ist $0$.',
            2: '$\\sin n/n$ wächst *nicht* gegen $\\infty$, weil der Zähler beschränkt bleibt ($|\\sin n| \\leq 1$) und der Nenner wächst. Zähler/Nenner mit wachsendem Nenner und beschränktem Zähler strebt gegen $0$.',
            3: 'Grenzwert $1$ hat $\\sin(x)/x$ für $x \\to 0$ — das ist ein anderer Grenzwertprozess! Hier geht $n \\to \\infty$, nicht $n \\to 0$. Bei $n \\to \\infty$ ist $\\sin n / n \\to 0$.',
          },
        },
        {
          type: 'sorting',
          question: 'Bringe die Schritte zur Grenzwert-Berechnung einer rationalen Folge in die richtige Reihenfolge.',
          items: [
            'Höchste Potenz $n^k$ im Zähler und Nenner identifizieren',
            'Zähler und Nenner durch $n^k$ dividieren',
            'Für $n \\to \\infty$ gehen alle Terme der Form $c/n^m \\; (m \\geq 1)$ gegen $0$',
            'Den verbleibenden Quotienten der Leitkoeffizienten notieren',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Diese Reihenfolge ist robust: Potenz identifizieren → kürzen → Grenzverhalten anwenden → Ergebnis. ' +
            'Bei verschiedenen Potenzen in Zähler und Nenner ergibt sich ggf. $0$ (Zähler kleiner) oder $\\infty$ (Zähler größer).',
          hints: [
            'Höchste Potenz kommt zuerst.',
            'Kürzen ist das Werkzeug.',
          ],
        },
      ],
      masteryQuestion: 'Welchen Grenzwert hat $a_n = \\frac{1}{n}$?',
      masteryOptions: ['0', '1', '∞', 'existiert nicht'],
      correctIndex: 0,
      masteryExplanation: '$1/n$ wird für große $n$ beliebig klein, also $\\lim_{n\\to\\infty} 1/n = 0$.',
      masteryHints: [
        'Werte einsetzen: $a_1=1, a_2=1/2, a_3=1/3, \\ldots$ — wird kleiner.',
        'Für beliebig kleines $\\varepsilon>0$ gilt ab einem $N$: $|1/n| < \\varepsilon$.',
        'Der Grenzwert ist $L=0$, weil $1/n$ gegen 0 strebt.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Das wäre der Wert bei $n=1$ ($a_1=1/1=1$), aber der Grenzwert betrifft das Verhalten für $n \\to \\infty$. Die Folge $1/n$ wird immer kleiner und nähert sich $0$, nicht $1$.',
        2: '$1/n$ wächst *nicht* unbeschränkt — im Gegenteil, sie fällt. Der Wert $\\infty$ wäre der Grenzwert von $n$ selbst, nicht von $1/n$. Nenner und Zähler wurden möglicherweise verwechselt.',
        3: 'Der Grenzwert *existiert* — die Folge $1/n$ ist monoton fallend und beschränkt (unten durch $0$), also nach dem Monotonie-Kriterium konvergent. Grenzwert: $0$.',
      },
      masteryVisualization: {
        id: 'number-line',
        params: {
          range: [-0.1, 1.2],
          step: 0.2,
          marks: [
            { value: 1, label: 'a₁=1', filled: true },
            { value: 0.5, label: 'a₂=½', filled: true },
            { value: 0.333, label: 'a₃=⅓', filled: true },
            { value: 0.25, label: 'a₄=¼', filled: true },
            { value: 0, label: 'L=0', filled: false },
          ],
        },
        caption: 'Folge 1/n nähert sich dem Grenzwert 0',
        alt: 'Zahlenstrahl mit den ersten Folgegliedern 1/n, die sich 0 nähern',
      },
      nextLessonId: 'rf-1-2',
    }),
    makeLesson({
      id: 'rf-1-2',
      title: 'Taylor-Polynome',
      estimatedMinutes: 14,
      learningGoals: [
        'Taylor-Polynom vom Grad $n$ um einen Entwicklungspunkt $x_0$ aufstellen',
        'Taylorentwicklung für $e^x$, $\\sin x$, $\\cos x$ kennen',
        'Restglied nach Lagrange abschätzen',
      ],
      createdAt: '2026-04-15',
      intuitionTitle: 'Funktion durch Polynom ersetzen',
      intuitionContent:
        'Viele Funktionen lassen sich lokal durch ein Polynom annähern: $\\sin(x) \\approx x$ für kleine $x$. ' +
        'Ein **Taylor-Polynom** vom Grad $n$ nutzt die ersten $n$ Ableitungen an einem Punkt $x_0$, ' +
        'um die Funktion lokal zu approximieren. Je höher der Grad, desto besser die Näherung.\n\n' +
        'Beispiel: $e^x \\approx 1 + x + x^2/2 + x^3/6$ um $x_0 = 0$ (Grad 3). ' +
        'An der Stelle $x = 0{,}5$: $e^{0{,}5} \\approx 1{,}646$ (exakt: $1{,}6487$).',
      formulaTitle: 'Taylor-Polynom und Restglied',
      formulaContent:
        '$$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}\\,(x - x_0)^k$$\n\n' +
        '**Wichtige Entwicklungen** um $x_0 = 0$:\n' +
        '$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$\n' +
        '$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots, \\qquad \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$\n\n' +
        '**Restglied nach Lagrange:** $R_n(x) = \\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$ für ein $\\xi$ zwischen $x_0$ und $x$.',
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Welche Ableitung brauchst du für den Koeffizienten $c_3$ im Taylor-Polynom $T_3(x) = \\sum_{k=0}^{3} c_k (x-x_0)^k$?',
          options: ['$f^{(3)}(x_0)/3!$', '$f^{(3)}(x)/3$', '$f(x_0)$', '$f\'(x_0) \\cdot 3$'],
          correctIndex: 0,
          explanation:
            'Der Koeffizient ist $c_k = f^{(k)}(x_0)/k!$. Für $k = 3$ also $f^{(3)}(x_0)/3! = f^{(3)}(x_0)/6$.',
          hints: [
            'Allgemeine Formel: $c_k = f^{(k)}(x_0)/k!$.',
            'Für $k=3$: dritte Ableitung an $x_0$, geteilt durch $3!$.',
            '$3! = 6$.',
          ],
          wrongAnswerExplanations: {
            1: 'Zwei Fehler: (1) Ableitung muss an $x_0$ ausgewertet sein (nicht an variablem $x$). (2) Nenner muss $k!=6$ sein, nicht $k=3$. Die Fakultät ist entscheidend.',
            2: 'Das ist der Koeffizient $c_0 = f(x_0)$ (konstanter Term). Für $c_3$ brauchen wir die *dritte* Ableitung geteilt durch $3!$. Je höher der Grad, desto höher die Ableitung.',
            3: 'Das ist der Koeffizient $c_1 \\cdot 3!$ (oder ähnliches) — falsch zusammengesetzt. Die Taylor-Formel verlangt für Grad $k$: $k$-te Ableitung und Division (nicht Multiplikation) durch $k!$.',
          },
        },
        {
          type: 'multiple-choice',
          question: 'Taylor-Polynom 3. Grades von $\\sin x$ um $x_0 = 0$?',
          options: ['$x - \\dfrac{x^3}{6}$', '$x + \\dfrac{x^3}{6}$', '$1 - \\dfrac{x^2}{2}$', '$x - x^3$'],
          correctIndex: 0,
          explanation:
            '$\\sin 0 = 0$, $\\sin\' 0 = \\cos 0 = 1$, $\\sin\'\' 0 = -\\sin 0 = 0$, $\\sin\'\'\' 0 = -\\cos 0 = -1$. ' +
            '$T_3 = 0 + 1 \\cdot x + 0 \\cdot x^2/2 + (-1) \\cdot x^3/6 = x - x^3/6$.',
          hints: [
            'Ableitungen von $\\sin$: Zyklus $\\sin, \\cos, -\\sin, -\\cos$.',
            'Bei $x_0 = 0$ abwechselnd $0, 1, 0, -1$.',
            'Nur ungerade Potenzen tauchen auf: $x - x^3/3! = x - x^3/6$.',
          ],
          wrongAnswerExplanations: {
            1: 'Vorzeichen falsch. $\\sin\'\'\'(0)=-\\cos(0)=-1$, daher Koeffizient $-1/3!=-1/6$, also *minus* $x^3/6$. Plus $x^3/6$ entspräche $\\sin\'\'\'(0)=+1$, was nicht stimmt.',
            2: 'Das ist $\\cos$-Entwicklung, nicht $\\sin$-Entwicklung. $\\sin(0)=0$ (konstanter Term $0$, nicht $1$), $\\cos(0)=1$ (mit $x^2$-Term). Bei $\\sin$ treten nur *ungerade* Potenzen auf.',
            3: 'Fakultät vergessen: Koeffizient bei $x^3$ ist $\\sin\'\'\'(0)/3!=-1/6$, nicht einfach $-1$. Ohne die $3!=6$ ist der Koeffizient zu groß — der Approximationsfehler würde riesig.',
          },
        },
        {
          type: 'number-input',
          question: 'Wie gut nähert $T_1(x) = x$ den Wert $\\sin(0{,}1)$? Gib den **Näherungswert** (also $T_1(0{,}1)$) an.',
          correctValue: 0.1,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$T_1(0{,}1) = 0{,}1$. Exakter Wert: $\\sin(0{,}1) \\approx 0{,}09983$. ' +
            'Absoluter Fehler: $\\approx 1{,}7 \\cdot 10^{-4}$ — sehr gut für kleine $x$.',
          hints: [
            '$T_1(x) = x$ für $\\sin x$.',
            'Einsetzen: $x = 0{,}1$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            'Das Taylor-Polynom ist immer exakt gleich der Funktion.',
          correct: false,
          explanation:
            'Falsch. $T_n(x)$ ist eine **Näherung**. Die Differenz $f(x) - T_n(x) = R_n(x)$ ist das **Restglied**. ' +
            'Nur wenn $f$ ein Polynom vom Grad $\\leq n$ ist, gilt Gleichheit exakt.',
          hints: [
            'Was bedeutet „Polynom-Approximation"?',
            'Welche Rolle spielt das Restglied?',
            'Polynom = exakte Näherung für Polynome kleineren Grades, sonst Fehler.',
          ],
        },
        {
          type: 'matching',
          question: 'Ordne jeder Funktion ihr Taylor-Polynom $T_2(x)$ um $x_0 = 0$ zu.',
          pairs: [
            { left: '$e^x$',    right: '$1 + x + x^2/2$' },
            { left: '$\\cos x$',  right: '$1 - x^2/2$' },
            { left: '$\\ln(1+x)$', right: '$x - x^2/2$' },
            { left: '$\\sin x$',  right: '$x$' },
          ],
          explanation:
            'Bei $\\sin x$ verschwindet der $x^2$-Term (gerade Ableitung in $0$ ist $0$). ' +
            '$\\cos$ hat nur gerade Potenzen, $\\ln(1+x)$ beginnt mit $x$.',
          hints: [
            '$\\sin$ hat nur ungerade Potenzen, $\\cos$ nur gerade.',
            '$\\ln(1+x)$ hat $\\ln 1 = 0$ als konstanten Term.',
          ],
        },
        {
          type: 'number-input',
          question:
            'Schätze $\\cos(0{,}2)$ mit dem Taylor-Polynom $T_2$ um $x_0 = 0$ ab.',
          correctValue: 0.98,
          tolerance: 0.01,
          unit: '',
          explanation:
            '$T_2(x) = 1 - x^2/2$. $T_2(0{,}2) = 1 - 0{,}04/2 = 1 - 0{,}02 = 0{,}98$. ' +
            'Exakt: $\\cos(0{,}2) \\approx 0{,}9801$ — fast perfekt.',
          hints: [
            '$T_2(x) = 1 - x^2/2$ für $\\cos x$.',
            '$x = 0{,}2$ → $x^2 = 0{,}04$.',
            '$1 - 0{,}04/2 = 0{,}98$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            'Warum konvergiert $T_n(x) \\to e^x$ für jedes $x \\in \\mathbb{R}$, aber $T_n(x) \\to 1/(1-x)$ nur für $|x| < 1$?',
          options: [
            '$e^x$ hat Konvergenzradius $\\infty$, $1/(1-x)$ hat Konvergenzradius $1$ wegen Pol bei $x=1$',
            'Das ist Zufall',
            '$e^x$ ist einfacher',
            '$\\ln$ ist kein Polynom',
          ],
          correctIndex: 0,
          explanation:
            'Der Konvergenzradius hängt von Singularitäten ab. $e^x$ ist überall analytisch → $R = \\infty$. ' +
            '$1/(1-x)$ hat einen Pol bei $x = 1$ → $R = 1$ (nächste Singularität zur Entwicklungsstelle).',
          hints: [
            'Wo hat die Funktion Singularitäten?',
            'Konvergenzradius = Abstand zur nächsten Singularität.',
            '$e^x$ ist glatt überall, $1/(1-x)$ hat Pol bei $x=1$.',
          ],
          wrongAnswerExplanations: {
            1: 'Das Konvergenzverhalten folgt strengen Regeln — kein Zufall. Der Konvergenzradius ist eine wohldefinierte Größe $R=\\lim |c_n/c_{n+1}|$ und ergibt sich aus den Eigenschaften der Funktion (Singularitäten).',
            2: '„Einfacher" ist kein mathematisches Kriterium. Entscheidend ist die Lage der *Singularitäten*: $e^x$ hat keine (ganz $\\mathbb{C}$ analytisch), $1/(1-x)$ hat eine bei $x=1$ — daher unterschiedliche Konvergenzradien.',
            3: '$\\ln$ taucht in der Frage gar nicht auf — es geht um $e^x$ vs. $1/(1-x)$. Die richtige Begründung bezieht sich auf Singularitäten: $e^x$ analytisch überall, $1/(1-x)$ hat Pol bei $x=1$.',
          },
        },
        {
          type: 'sorting',
          question: 'Bringe die Schritte zum Aufstellen eines Taylor-Polynoms in die richtige Reihenfolge.',
          items: [
            'Entwicklungspunkt $x_0$ festlegen',
            'Ableitungen $f\'(x_0), f\'\'(x_0), \\ldots, f^{(n)}(x_0)$ berechnen',
            'Koeffizienten $c_k = f^{(k)}(x_0)/k!$ bilden',
            'Polynom $T_n(x) = \\sum c_k (x - x_0)^k$ zusammenstellen',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Ohne Entwicklungspunkt keine Ableitungen, ohne Ableitungen keine Koeffizienten, ohne Koeffizienten kein Polynom. ' +
            'Fehleranfällig ist oft das **Faktor $k!$** — nicht vergessen!',
          hints: [
            'Immer erst $x_0$ wählen.',
            'Die Reihenfolge entspricht dem Aufbau der Formel.',
          ],
        },
      ],
      masteryQuestion: 'Taylor-Polynom 2. Grades von $f(x) = e^x$ um $x_0 = 0$?',
      masteryOptions: [
        '$1 + x + \\dfrac{x^2}{2}$',
        '$1 + x + x^2$',
        '$e + ex + ex^2$',
        '$x + \\dfrac{x^2}{2}$',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$f(0) = 1$, $f\'(0) = 1$, $f\'\'(0) = 1$. Also $T_2(x) = \\frac{1}{0!} + \\frac{1}{1!}x + \\frac{1}{2!}x^2 = 1 + x + x^2/2$.',
      masteryHints: [
        'Ableitungen von $e^x$ sind alle wieder $e^x$.',
        'Bei $x_0 = 0$: alle $f^{(k)}(0) = 1$.',
        'Koeffizienten: $f^{(k)}(0)/k! = 1/k!$, also $T_2 = 1 + x + x^2/2!$.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Fakultät $k!$ vergessen. Koeffizient bei $x^2$ ist $f\'\'(0)/2!=1/2$, nicht $1$. Ohne Fakultät wachsen die Terme zu schnell — die Näherung wäre unbrauchbar.',
        2: 'Falscher Entwicklungspunkt. Bei $x_0=0$ ist $e^{x_0}=e^0=1$, daher Koeffizient $1$, nicht $e$. Mit $x_0=1$ wären die Koeffizienten $e \\cdot 1/k!$.',
        3: 'Konstanter Term fehlt. $f(0)=e^0=1$ muss als $c_0=1$ dabeistehen. Ohne konstanten Term wäre $T_2(0)=0$, aber $e^0=1$.',
      },
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => Math.exp(x), color: '#3b82f6', label: 'eˣ (exakt)' },
            { fn: (x) => 1 + x + x * x / 2, color: '#ef4444', label: 'T₂ = 1+x+x²/2' },
            { fn: (x) => 1 + x + x * x / 2 + (x * x * x) / 6, color: '#22c55e', label: 'T₃ = T₂+x³/6' },
          ],
          xRange: [-2, 2],
          yRange: [-1, 8],
          showGrid: true,
        },
        caption: 'Taylor-Polynome T₂ und T₃ nähern sich eˣ um x₀=0 an',
        alt: 'Graph von eˣ mit Taylor-Polynomen Grad 2 und 3',
      },
      prerequisites: ['rf-1-1'],
      nextLessonId: 'rf-pruefung-1',
    }),
  ],
})

const unit2 = makeUnit({
  id: 'rf-unit-2',
  title: 'Prüfung',
  order: 2,
  lessons: [
    makeLesson({
      id: 'rf-pruefung-1',
      title: 'Prüfung: Taylor, Konvergenz, Restglied',
      estimatedMinutes: 20,
      isExam: true,
      learningGoals: [
        'Konvergenz mit passenden Kriterien prüfen',
        'Taylorentwicklung einer Funktion aufstellen',
        'Restglied abschätzen',
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Gegeben/Gesucht:** Welche Reihe? Wird Konvergenz, Grenzwert oder Approximation gesucht?\n\n' +
        '**Verfahrenswahl:**\n- Geometrische Reihe → $|q|<1$ und $\\sum q^n = 1/(1-q)$\n' +
        '- Quotientenkriterium für allgemeine Reihen\n' +
        '- Taylor: Ableitungen an Entwicklungspunkt, Koeffizient $f^{(n)}(x_0)/n!$\n\n' +
        '**Kontrolle:** Konvergenzradius testen, Restglied mit Lagrange abschätzen.',
      formulaTitle: 'Taylor-Reihe',
      formulaContent:
        '$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(x_0)}{n!} (x-x_0)^n$$\n\n' +
        'Wichtige Reihen um $x_0=0$:\n' +
        '- $e^x = \\sum x^n/n!$\n' +
        '- $\\sin x = x - x^3/6 + x^5/120 - \\ldots$\n' +
        '- $\\cos x = 1 - x^2/2 + x^4/24 - \\ldots$\n' +
        '- $\\ln(1+x) = x - x^2/2 + x^3/3 - \\ldots \\; (|x|<1)$',
      visualization: {
        visualizationId: 'taylor-approx',
        title: 'Taylor-Näherung — Grad variieren',
      },
      exercises: [
        {
          type: 'number-input',
          question: '[PRÜFUNG] Aufwärmaufgabe: Grenzwert der geometrischen Reihe $\\sum_{n=0}^\\infty (1/2)^n$?',
          correctValue: 2,
          tolerance: 0.001,
          unit: '',
          explanation:
            '$\\sum q^n = 1/(1-q)$ für $|q|<1$. Hier $q = 1/2$: $1/(1-1/2) = 1/(1/2) = 2$.',
          hints: [
            'Geometrische Reihe: $\\sum q^n = 1/(1-q)$.',
            'Hier $q = 1/2$.',
            '$1/(1-1/2) = 1/0{,}5 = 2$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Die harmonische Reihe $\\sum_{n=1}^\\infty 1/n$ konvergiert, weil die Glieder gegen $0$ gehen.',
          correct: false,
          explanation:
            'Falsch. Die Glieder $1/n \\to 0$ sind **notwendig** für Konvergenz, aber nicht hinreichend. ' +
            'Die harmonische Reihe **divergiert** trotz $1/n \\to 0$. Gegenbeispiel zur Umkehrung des Trivialkriteriums.',
          hints: [
            'Was ist notwendig vs. hinreichend?',
            '$1/n \\to 0$ — aber wie groß ist die Summe?',
            'Die harmonische Reihe wächst unbeschränkt (logarithmisch).',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Welches Kriterium ist am schnellsten anzuwenden für $\\sum_{n=0}^\\infty \\dfrac{n!}{10^n}$?',
          options: [
            'Quotientenkriterium',
            'Wurzelkriterium',
            'Majorantenkriterium',
            'Integraltest',
          ],
          correctIndex: 0,
          explanation:
            'Bei Fakultäten ist das Quotientenkriterium ideal: ' +
            '$|a_{n+1}/a_n| = (n+1)!/10^{n+1} \\cdot 10^n/n! = (n+1)/10 \\to \\infty$ → **divergent**. ' +
            'Fakultäten wachsen schneller als jede Exponentialfunktion.',
          hints: [
            'Fakultäten im Zähler → Quotientenkriterium vereinfacht.',
            '$(n+1)!/n! = n+1$.',
            '$10^n/10^{n+1} = 1/10$. Quotient: $(n+1)/10$.',
          ],
          wrongAnswerExplanations: {
            1: 'Wurzelkriterium $\\sqrt[n]{|a_n|}=\\sqrt[n]{n!/10^n}=\\sqrt[n]{n!}/10$ — $\\sqrt[n]{n!}$ ist aber per Stirling-Formel schwierig zu berechnen (Ergebnis $\\sim n/e$). Quotientenkriterium ist hier viel direkter wegen einfacher Fakultäten-Arithmetik.',
            2: 'Majorantenkriterium braucht eine bekannte, dominierende Reihe. Bei $n!/10^n$ ist keine Standard-Reihe als obere Schranke naheliegend. Quotientenkriterium liefert das Ergebnis direkt aus der Rekursion.',
            3: 'Integraltest benötigt eine stetige, monoton fallende Funktion $f(x)$ mit $f(n)=a_n$. $n!$ lässt sich kaum als glatte Funktion interpretieren (außer über Gamma-Funktion — unnötig kompliziert). Quotientenkriterium ist der Standard bei Fakultäten.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Näherung: Berechne $e^{0{,}1}$ über $T_2$ um $x_0 = 0$. Gib 4 Nachkommastellen an.',
          correctValue: 1.105,
          tolerance: 0.005,
          unit: '',
          explanation:
            '$T_2(x) = 1 + x + x^2/2$. $T_2(0{,}1) = 1 + 0{,}1 + 0{,}005 = 1{,}105$. ' +
            'Exakt: $e^{0{,}1} \\approx 1{,}10517$ — Fehler $\\approx 1{,}7 \\cdot 10^{-4}$.',
          hints: [
            '$T_2(x) = 1 + x + x^2/2$.',
            '$x = 0{,}1$: $x^2 = 0{,}01$, $x^2/2 = 0{,}005$.',
            '$1 + 0{,}1 + 0{,}005 = 1{,}105$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Welche Reihe ist absolut konvergent?',
          options: [
            '$\\sum_{n=1}^\\infty \\dfrac{(-1)^n}{n^2}$',
            '$\\sum_{n=1}^\\infty \\dfrac{(-1)^n}{n}$',
            '$\\sum_{n=1}^\\infty \\dfrac{1}{n}$',
            '$\\sum_{n=1}^\\infty 1$',
          ],
          correctIndex: 0,
          explanation:
            'Absolut konvergent bedeutet: $\\sum |a_n|$ konvergiert. $|(-1)^n/n^2| = 1/n^2$, und $\\sum 1/n^2 = \\pi^2/6$ konvergiert (Basel-Problem). ' +
            '$\\sum(-1)^n/n$ konvergiert nur bedingt (Leibniz), $\\sum 1/n$ divergiert.',
          hints: [
            'Absolut konvergent: $\\sum |a_n|$ konvergiert.',
            'Welche $1/n^k$ konvergieren? Für $k > 1$.',
            '$\\sum 1/n^2$ ist ein bekanntes Beispiel.',
          ],
          wrongAnswerExplanations: {
            1: '$\\sum (-1)^n/n$ konvergiert zwar (Leibniz-Kriterium), aber nur *bedingt*. Die zugehörige absolute Reihe $\\sum 1/n$ ist die harmonische Reihe und *divergiert*. Gegenfrage der absoluten Konvergenz.',
            2: '$\\sum 1/n$ (harmonische Reihe) divergiert — ein klassisches Resultat. Partialsumme wächst wie $\\ln n$ über jede Schranke.',
            3: 'Konstante Reihe $\\sum 1$: Partialsumme $n \\to \\infty$, klar divergent. Auch das Trivialkriterium greift: $a_n=1 \\not\\to 0$, also keine Konvergenz möglich.',
          },
        },
        {
          type: 'matching',
          question: '[PRÜFUNG] Ordne jede Reihe ihrem Verhalten zu.',
          pairs: [
            { left: '$\\sum 1/n$',      right: 'divergent' },
            { left: '$\\sum 1/n^2$',    right: 'konvergent ($\\pi^2/6$)' },
            { left: '$\\sum (1/2)^n$',  right: 'konvergent (2)' },
            { left: '$\\sum 2^n$',      right: 'divergent' },
          ],
          explanation:
            'Harmonische Reihe divergiert, $\\sum 1/n^p$ konvergiert für $p > 1$. ' +
            'Geometrische Reihen: $|q|<1$ konvergent, sonst divergent.',
          hints: [
            '$\\sum 1/n^p$: konvergent iff $p > 1$.',
            '$\\sum q^n$: konvergent iff $|q| < 1$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Bei einer Potenzreihe $\\sum c_n x^n$ kann man am **Rand** des Konvergenzradius keine allgemeine Aussage über Konvergenz treffen.',
          correct: true,
          explanation:
            'Richtig. An $|x| = R$ (Rand) hängt das Verhalten vom konkreten Fall ab: manche Potenzreihen konvergieren am Rand, andere divergieren. ' +
            'Beispiel: $\\sum x^n/n$ hat $R = 1$, divergiert bei $x = 1$, konvergiert bei $x = -1$.',
          hints: [
            'Das Quotientenkriterium liefert $q = 1$ am Rand — keine Aussage.',
            'Rand-Verhalten immer gesondert prüfen.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie zum Konvergenztest einer Reihe $\\sum a_n$. Bringe die Schritte in die richtige Reihenfolge.',
          items: [
            'Trivial-Kriterium: Ist $\\lim a_n = 0$? Wenn nein → divergent',
            'Auf bekannte Reihen zurückführen (geometrisch, harmonisch, $1/n^p$)',
            'Quotienten- oder Wurzelkriterium probieren',
            'Majoranten-/Minorantenkriterium als letzte Option',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Erst trivial ausschließen (spart Zeit), dann bekannte Formen erkennen, dann Standardkriterien, zuletzt Vergleich. ' +
            'Bei Prüfungsreihen reicht meist Quotienten- oder Wurzelkriterium.',
          hints: [
            'Einfacher Check zuerst — viele divergente Reihen lassen sich so direkt erkennen.',
            'Bekannte Muster: $\\sum 1/n$, $\\sum 1/n^2$, $\\sum q^n$.',
          ],
        },
      ],
      masteryQuestion: '[PRÜFUNG] Grenzwert der geometrischen Reihe $\\sum_{n=0}^\\infty (1/3)^n$?',
      masteryOptions: ['$3/2$', '$1/3$', '$2/3$', 'divergiert'],
      correctIndex: 0,
      masteryExplanation: '$\\sum q^n = 1/(1-q)$ für $|q|<1$. Hier $q = 1/3$, also $1/(1-1/3) = 1/(2/3) = 3/2$.',
      masteryHints: [
        'Geometrische Reihe: Summe = 1/(1−q).',
        'q = 1/3 einsetzen.',
        '$1/(1-1/3) = 1/(2/3) = 3/2$.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Das ist $q$ selbst, nicht der Grenzwert der Reihe. $q=1/3$ ist der Faktor zwischen den Gliedern. Die Summe $\\sum q^n$ ist $1/(1-q)=1/(2/3)=3/2$.',
        2: 'Bruchrechnung falsch. $1/(1-1/3)=1/(2/3)=3/2$, nicht $2/3$. Der Nenner $1-1/3=2/3$ wird beim Teilen durch den Kehrwert ersetzt: $1 \\cdot 3/2 = 3/2$.',
        3: 'Für $|q|<1$ konvergiert die geometrische Reihe. Hier $|1/3|<1$, also konvergent (mit Summe $3/2$). Divergent wäre sie nur bei $|q|\\geq 1$.',
      },
      prerequisites: ['rf-1-2'],
      nextLessonId: 'rf-pruefung-2',
    }),
    makeLesson({
      id: 'rf-pruefung-2',
      title: 'Prüfung: Konvergenzkriterien & Potenzreihen',
      estimatedMinutes: 20,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Quotientenkriterium anwenden',
        '[PRÜFUNG] Konvergenzradius einer Potenzreihe berechnen',
        '[PRÜFUNG] Majoranten- und Minorantenkriterium kennen',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Wann konvergiert eine Reihe?',
      intuitionContent:
        'Eine Reihe $\\sum a_n$ konvergiert, wenn die Glieder schnell genug gegen null gehen. ' +
        'Das **Quotientenkriterium** prüft, wie sich aufeinanderfolgende Glieder verhalten: ' +
        'Wenn $|a_{n+1}/a_n| \\to q < 1$, dann konvergiert die Reihe absolut.\n\n' +
        '**Potenzreihe** $\\sum c_n (x-x_0)^n$ konvergiert nur in einem Intervall $|x-x_0| < R$ ' +
        '(Konvergenzradius $R$).',
      formulaTitle: 'Kriterien & Konvergenzradius',
      formulaContent:
        '**Quotientenkriterium:** $\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| = q$\n' +
        '- $q < 1$: absolut konvergent\n' +
        '- $q > 1$: divergent\n' +
        '- $q = 1$: keine Aussage\n\n' +
        '**Konvergenzradius** einer Potenzreihe $\\sum c_n x^n$:\n' +
        '$$R = \\lim_{n\\to\\infty}\\left|\\frac{c_n}{c_{n+1}}\\right| \\quad \\text{(falls der Limes existiert)}$$',
      exercises: [
        {
          type: 'multiple-choice',
          question: '[PRÜFUNG] Aufwärmaufgabe: Quotientenkriterium auf $\\sum \\dfrac{1}{n!}$. Was ergibt $q$?',
          options: ['$q = 0$', '$q = 1$', '$q = \\infty$', '$q = e$'],
          correctIndex: 0,
          explanation:
            '$|a_{n+1}/a_n| = n!/(n+1)! = 1/(n+1) \\to 0$. Also $q = 0 < 1$ → Reihe konvergiert (zu $e$).',
          hints: [
            '$\\frac{1/(n+1)!}{1/n!} = \\frac{n!}{(n+1)!}$.',
            '$(n+1)! = (n+1) \\cdot n!$, also $n!/(n+1)! = 1/(n+1)$.',
            '$1/(n+1) \\to 0$ für $n \\to \\infty$.',
          ],
          wrongAnswerExplanations: {
            1: 'Das wäre der Grenzfall des Quotientenkriteriums — keine Aussage möglich. Der tatsächliche Quotient ist $1/(n+1) \\to 0$, nicht $1$. $q=1$ würde nur gelten, wenn Zähler und Nenner gleich wachsen.',
            2: 'Das wäre divergent. Hier wächst aber der Nenner $(n+1)!$ viel schneller als der Zähler $n!$, also fällt $1/(n+1) \\to 0$ monoton. $q=\\infty$ entspräche eher $\\sum n!$.',
            3: 'Der Wert $e$ ist der *Grenzwert* der Reihe $\\sum 1/n!=e$, nicht das $q$ des Quotientenkriteriums. Quotientenkriterium berechnet den Limes der *Quotienten* aufeinanderfolgender Glieder, nicht die Summe.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Berechne den Konvergenzradius von $\\sum_{n=0}^\\infty \\dfrac{x^n}{2^n}$.',
          correctValue: 2,
          tolerance: 0,
          unit: '',
          explanation:
            '$c_n = 1/2^n$. $R = \\lim|c_n/c_{n+1}| = \\lim 2^{n+1}/2^n = 2$. ' +
            'Alternativ direkt: geometrische Reihe mit $q = x/2$, konvergiert für $|x/2|<1 \\Leftrightarrow |x|<2$.',
          hints: [
            '$c_n = 1/2^n$, $c_{n+1} = 1/2^{n+1}$.',
            '$c_n/c_{n+1} = 2^{n+1}/2^n = 2$.',
            'Grenzwert ist konstant $2$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Für welche $x$ konvergiert $\\sum_{n=0}^\\infty \\dfrac{x^n}{n}$ (mit $n \\geq 1$)?',
          options: [
            '$x \\in [-1, 1)$',
            '$x \\in (-1, 1)$',
            '$x \\in (-1, 1]$',
            'für alle $x$',
          ],
          correctIndex: 0,
          explanation:
            'Konvergenzradius: $R = \\lim|c_n/c_{n+1}| = \\lim(n+1)/n = 1$. Am Rand: ' +
            '$x = 1$: $\\sum 1/n$ → harmonisch → **divergent**. $x = -1$: $\\sum (-1)^n/n$ → Leibniz → **konvergent**. ' +
            'Also $x \\in [-1, 1)$.',
          hints: [
            'Konvergenzradius: $R = 1$.',
            'Rand-Verhalten getrennt prüfen.',
            '$x = 1$: harmonisch (divergent). $x = -1$: alternierend (konvergent).',
          ],
          wrongAnswerExplanations: {
            1: 'Rand wird nicht geprüft. Der Konvergenzradius gibt nur das offene Intervall $(-1,1)$ — aber am Rand kann es noch Konvergenzpunkte geben. Hier: $x=-1$ ist zusätzlich konvergent (Leibniz), $x=1$ divergent (harmonisch).',
            2: 'Falscher Rand-Check: bei $x=+1$ erhält man $\\sum 1/n$ (harmonisch), das *divergiert*. Also darf $+1$ *nicht* zum Konvergenzbereich gehören. Umgekehrt ist $x=-1$ konvergent.',
            3: 'Der Konvergenzradius ist endlich ($R=1$). Für $|x|>1$ divergiert die Reihe, weil der Quotient $|a_{n+1}/a_n|=|x|\\cdot n/(n+1) \\to |x| > 1$.',
          },
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Wenn das Quotientenkriterium $q = 1$ liefert, ist die Reihe divergent.',
          correct: false,
          explanation:
            'Falsch. Bei $q = 1$ liefert das Kriterium **keine Aussage**. Beispiele: $\\sum 1/n$ divergiert, $\\sum 1/n^2$ konvergiert — beide haben $q = 1$. ' +
            'Dann braucht man andere Kriterien (Majoranten-, Integraltest usw.).',
          hints: [
            'Quotientenkriterium liefert drei Fälle: $<1$, $>1$, $=1$.',
            'Was ist die Bedeutung von $q = 1$?',
            'Gegenbeispiele: $\\sum 1/n$ (div), $\\sum 1/n^2$ (kon).',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Welche Aussage über $\\sum \\dfrac{n}{e^n}$ ist **richtig**?',
          options: [
            'Konvergent, da Quotientenkriterium $q = 1/e < 1$',
            'Divergent, da $n$ im Zähler unbeschränkt wächst',
            'Divergent, Quotientenkriterium liefert $q > 1$',
            'Nicht entscheidbar',
          ],
          correctIndex: 0,
          explanation:
            '$|a_{n+1}/a_n| = \\frac{(n+1)/e^{n+1}}{n/e^n} = \\frac{n+1}{n} \\cdot \\frac{1}{e} \\to 1/e \\approx 0{,}368 < 1$. ' +
            'Exponentialfunktion wächst schneller als jede Potenz → Konvergenz.',
          hints: [
            'Quotientenkriterium: $a_{n+1}/a_n$.',
            '$\\frac{(n+1)/e^{n+1}}{n/e^n} = \\frac{n+1}{n} \\cdot e^{-1}$.',
            '$\\lim (n+1)/n = 1$, also $q = 1/e$.',
          ],
          wrongAnswerExplanations: {
            1: 'Trivialkriterium-Fehlschluss: $n/e^n \\to 0$, weil Exponential schneller wächst als Polynom (L\'Hôpital oder direkt). Die Glieder gehen gegen $0$ — ein *notwendiger* Schritt für Konvergenz. Daher divergiert die Reihe nicht aus diesem Grund.',
            2: 'Das Vorzeichen ist falsch: $|a_{n+1}/a_n|=(n+1)/(ne) \\to 1/e < 1$, also $q<1$ (konvergent), nicht $q>1$. $1/e \\approx 0{,}37$ liegt weit unter $1$.',
            3: 'Entscheidbar: Quotientenkriterium liefert $q=1/e<1$ eindeutig, also konvergent. Nur bei $q=1$ oder exotischen Reihen ist Quotientenkriterium nicht anwendbar.',
          },
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jedem Konvergenzradius seine Potenzreihe zu.',
          pairs: [
            { left: '$R = \\infty$', right: '$\\sum x^n/n!$' },
            { left: '$R = 1$',        right: '$\\sum x^n/n$' },
            { left: '$R = 2$',        right: '$\\sum x^n/2^n$' },
            { left: '$R = 0$',        right: '$\\sum n!\\,x^n$' },
          ],
          explanation:
            '$1/n!$ fällt sehr schnell → $R = \\infty$ (überall konvergent). ' +
            '$1/n$ langsam → $R = 1$. $1/2^n$ mittelschnell → $R = 2$. ' +
            '$n!$ wächst → $R = 0$ (nur für $x = 0$ konvergent).',
          hints: [
            'Je schneller $|c_n|$ fällt, desto größer der Radius.',
            'Fakultät im Zähler → Radius $0$, Fakultät im Nenner → Radius $\\infty$.',
          ],
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Berechne den Konvergenzradius von $\\sum_{n=0}^\\infty n^2\\, x^n$.',
          correctValue: 1,
          tolerance: 0,
          unit: '',
          explanation:
            '$c_n = n^2$. $R = \\lim|c_n/c_{n+1}| = \\lim n^2/(n+1)^2 = 1$. ' +
            'Polynomiale Koeffizienten ergeben Radius $1$ (wie die geometrische Reihe).',
          hints: [
            '$c_n = n^2$, $c_{n+1} = (n+1)^2$.',
            '$n^2/(n+1)^2 \\to 1$.',
            'Polynom-Koeffizienten: $R = 1$.',
          ],
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Berechnung des Konvergenzradius. Bringe die Schritte in Reihenfolge.',
          items: [
            'Koeffizienten $c_n$ (vor $x^n$) ablesen',
            'Quotienten $|c_n/c_{n+1}|$ aufstellen',
            'Grenzwert berechnen: $R = \\lim_{n\\to\\infty} |c_n/c_{n+1}|$',
            'Rand $|x| = R$ separat prüfen (wenn gefragt)',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Die Hauptarbeit ist der Grenzwert der Koeffizienten-Quotienten. Der Rand muss separat mit anderen Kriterien geprüft werden — ' +
            'das Quotientenkriterium liefert dort $q = 1$ und keine Aussage.',
          hints: [
            'Koeffizienten zuerst, dann Quotient.',
            'Rand wird oft vergessen — explizit merken.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] Konvergenzradius von $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ (Taylor-Reihe von $e^x$)?',
      masteryOptions: ['$R = \\infty$', '$R = 1$', '$R = e$', '$R = 0$'],
      correctIndex: 0,
      masteryExplanation:
        '$c_n = 1/n!$. $R = \\lim |c_n/c_{n+1}| = \\lim |(n+1)!/n!| = \\lim (n+1) = \\infty$. ' +
        'Die $e^x$-Reihe konvergiert für alle $x \\in \\mathbb{R}$.',
      masteryHints: [
        'Konvergenzradius: $R = \\lim |c_n / c_{n+1}|$.',
        '$c_n = 1/n!$, $c_{n+1} = 1/(n+1)!$. Quotient: $c_n/c_{n+1} = (n+1)!/n! = n+1$.',
        '$\\lim_{n\\to\\infty}(n+1) = \\infty$, also $R = \\infty$ — konvergiert überall.',
      ],
      masteryWrongAnswerExplanations: {
        1: 'Die Fakultät im Nenner macht die Reihe besonders schnell konvergent. $c_n/c_{n+1}=(n+1) \\to \\infty$, nicht $\\to 1$. Der Wert $R=1$ gilt z.B. bei $\\sum x^n$ oder $\\sum x^n/n$ (ohne Fakultät).',
        2: '$e$ ist die *Summe* der Reihe bei $x=1$, nicht der Konvergenzradius. $R$ misst, *wo* die Reihe konvergiert, nicht *wohin*. $R=\\infty$ bedeutet: für alle $x$ konvergent; die Summe ist $e^x$.',
        3: 'Das wäre bei Reihen mit $n!$ im *Zähler* (z.B. $\\sum n! x^n$): dort wachsen die Koeffizienten so schnell, dass die Reihe nur bei $x=0$ konvergiert ($R=0$). Hier ist aber $n!$ im *Nenner*, also sehr starker Zerfall.',
      },
      masteryVisualization: {
        id: 'function-graph',
        params: {
          mode: 'static',
          functions: [
            { fn: (x) => Math.exp(x), color: '#3b82f6', label: 'eˣ (Radius ∞)' },
            { fn: (x) => (Math.abs(x) < 1 ? 1 / (1 - x) : null), color: '#ef4444', label: '1/(1-x) (Radius 1)' },
          ],
          xRange: [-2, 0.9],
          yRange: [-0.5, 8],
          showGrid: true,
        },
        caption: 'Vergleich: eˣ (R=∞) vs. 1/(1-x) (R=1, Pol bei x=1)',
        alt: 'Graph von eˣ und 1/(1-x) zum Vergleich der Konvergenzradien',
      },
      prerequisites: ['rf-pruefung-1'],
      nextLessonId: 'rf-pruefung-3',
    }),
    makeLesson({
      id: 'rf-pruefung-3',
      title: 'Prüfung: Taylor-Restglied & Näherungen',
      estimatedMinutes: 22,
      isExam: true,
      learningGoals: [
        '[PRÜFUNG] Restglied nach Lagrange abschätzen',
        '[PRÜFUNG] Taylor-Näherung für Berechnungen nutzen',
        '[PRÜFUNG] Fehler einer Taylor-Näherung nach oben abschätzen',
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Wie gut ist die Näherung?',
      intuitionContent:
        'Das Taylor-Polynom $T_n(x)$ approximiert $f(x)$. Wie groß ist der Fehler?\n\n' +
        '**Restglied nach Lagrange:** Es gibt ein $\\xi$ zwischen $x_0$ und $x$ mit:\n' +
        '$$R_n(x) = f(x) - T_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$$\n\n' +
        '**Abschätzung:** Man ersetzt $f^{(n+1)}(\\xi)$ durch sein Maximum auf dem Intervall.',
      formulaTitle: 'Restglied-Abschätzung',
      formulaContent:
        '**Lagrange-Restglied:**\n' +
        '$$|R_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!}|x-x_0|^{n+1}$$\n\n' +
        'mit $M_{n+1} = \\max_{\\xi \\in [x_0,x]}|f^{(n+1)}(\\xi)|$.\n\n' +
        '**Wichtige Näherungen** (für kleine $x$):\n' +
        '$$\\sin x \\approx x, \\quad \\cos x \\approx 1 - \\frac{x^2}{2}, \\quad e^x \\approx 1 + x$$',
      exercises: [
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Aufwärmaufgabe: Näherung $\\sin(0{,}05) \\approx x$. Welchen Wert gibt das?',
          correctValue: 0.05,
          tolerance: 0.0001,
          unit: '',
          explanation:
            '$T_1(x) = x$ für $\\sin$. $T_1(0{,}05) = 0{,}05$. Exakt: $\\sin(0{,}05) \\approx 0{,}0499792$ — Fehler $\\approx 2 \\cdot 10^{-5}$.',
          hints: [
            'Taylor-Näherung Grad 1 für $\\sin$ um $0$: $T_1(x) = x$.',
            'Direkt einsetzen.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Was ist $M_{n+1}$ bei der Lagrange-Abschätzung $|R_n(x)| \\leq M_{n+1}/(n+1)! \\cdot |x-x_0|^{n+1}$?',
          options: [
            'Maximum der $(n+1)$-ten Ableitung auf dem Intervall $[x_0, x]$',
            'Die $n$-te Ableitung am Entwicklungspunkt',
            'Die Funktion selbst am Entwicklungspunkt',
            'Der Konvergenzradius',
          ],
          correctIndex: 0,
          explanation:
            '$M_{n+1}$ ist die **obere Schranke** der $(n+1)$-ten Ableitung: ' +
            '$M_{n+1} = \\max_{\\xi \\in [x_0, x]} |f^{(n+1)}(\\xi)|$. ' +
            'Man nimmt das Maximum, weil der exakte Zwischenstellen-Wert $\\xi$ unbekannt ist.',
          hints: [
            'Restglied enthält $f^{(n+1)}(\\xi)$ für ein $\\xi$ zwischen $x_0$ und $x$.',
            'Da $\\xi$ nicht bekannt, maximieren wir.',
            '$M$ steht für „Maximum der Ableitung".',
          ],
          wrongAnswerExplanations: {
            1: 'Die $n$-te Ableitung am Entwicklungspunkt steckt schon im Taylor-Polynom $T_n$. Das Restglied nutzt die *nächsthöhere* Ableitung ($f^{(n+1)}$) an einer *Zwischenstelle* $\\xi$, die maximiert wird.',
            2: '$f(x_0)$ ist der Funktionswert am Entwicklungspunkt (Teil von $T_0$). Das Restglied hängt aber von der *Ableitung* ab, nicht vom Funktionswert selbst — konkret von $f^{(n+1)}$.',
            3: 'Der Konvergenzradius gibt den Bereich an, *wo* die Taylor-Reihe konvergiert, nicht *wie groß* der Fehler bei Abbruch ist. $M_{n+1}$ ist eine Ableitungsschranke, eine ganz andere Größe.',
          },
        },
        {
          type: 'number-input',
          question:
            '[PRÜFUNG] Schätze $|R_2(x)|$ für $\\cos x \\approx 1 - x^2/2$ auf $x \\in [0, 0{,}2]$ nach oben ab.',
          correctValue: 0.000333,
          tolerance: 0.0002,
          unit: '',
          explanation:
            '$f^{(3)}(x) = \\sin x$, $M_3 = \\max|\\sin \\xi| \\leq \\sin(0{,}2) \\leq 0{,}2$ (bei $x$ nahe $0$ fast linear). ' +
            '$|R_2| \\leq 0{,}2/3! \\cdot (0{,}2)^3 = 0{,}2/6 \\cdot 0{,}008 \\approx 2{,}7 \\cdot 10^{-4}$. ' +
            'Kleiner Fehler — ideale Näherung für kleine Winkel.',
          hints: [
            'Für $\\cos$ ist die dritte Ableitung $\\sin$.',
            '$\\sin$ auf $[0, 0{,}2]$ beschränkt durch $\\sin(0{,}2) \\approx 0{,}2$.',
            '$M_3/3! \\cdot |x|^3 = 0{,}2/6 \\cdot (0{,}2)^3 \\approx 2{,}67 \\cdot 10^{-4}$.',
          ],
        },
        {
          type: 'true-false',
          statement:
            '[PRÜFUNG] Ein höherer Grad des Taylor-Polynoms reduziert den Approximationsfehler **garantiert** — unabhängig von $x$.',
          correct: false,
          explanation:
            'Falsch. Außerhalb des Konvergenzradius kann ein höherer Grad die Näherung sogar **verschlechtern**. ' +
            'Beispiel: $\\ln(1+x)$ um $x_0 = 0$ hat $R = 1$. Für $x = 2$ divergiert die Taylor-Reihe, egal wie hoch der Grad.',
          hints: [
            'Denk an den Konvergenzradius.',
            'Was passiert bei $|x| > R$?',
            'Außerhalb des Konvergenzbereichs hilft kein höherer Grad.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Welche Näherung ist am genauesten für kleine $x$ (z.B. $x = 0{,}01$)?',
          options: [
            '$\\sin x \\approx x$',
            '$\\sin x \\approx x - x^3/6$',
            'Beide gleich genau',
            '$\\sin x \\approx x^3$',
          ],
          correctIndex: 1,
          explanation:
            'Höherer Grad = besserer Fehler (bei kleinem $x$ innerhalb des Konvergenzradius). ' +
            'Bei $x = 0{,}01$: $T_1$ Fehler $\\approx x^3/6 \\approx 1{,}7 \\cdot 10^{-7}$, ' +
            '$T_3$ Fehler $\\approx x^5/120 \\approx 8 \\cdot 10^{-13}$.',
          hints: [
            'Jeder Grad fügt eine Korrektur hinzu.',
            'Für kleines $x$ konvergiert die Taylor-Reihe schnell.',
            'Mehr Glieder → kleinerer Fehler.',
          ],
          wrongAnswerExplanations: {
            0: '$T_1(x)=x$ ist die einfachste Näherung — der Fehler ist $\\approx x^3/6$. Mit $T_3(x)=x-x^3/6$ reduziert sich der Fehler auf $\\approx x^5/120$, also um den Faktor $x^2/20$ kleiner. Bei $x=0{,}01$ ist das ein riesiger Unterschied.',
            2: 'Falsch — höhere Taylor-Grade verbessern die Näherung. $T_3$ hat lokalen Fehler $O(x^5)$, $T_1$ nur $O(x^3)$. Bei $x=0{,}01$ ist $0{,}01^5=10^{-10}$ viel kleiner als $0{,}01^3=10^{-6}$.',
            3: '$\\sin x \\approx x^3$ ist grundfalsch: bei $x \\to 0$ geht $\\sin x \\to 0$ wie $x$ (nicht wie $x^3$). Der führende Term der Taylor-Entwicklung von $\\sin$ ist $x$, nicht $x^3$.',
          },
        },
        {
          type: 'matching',
          question:
            '[PRÜFUNG] Ordne jeder Funktion ihre **höchste Ableitung $f^{(n+1)}$** für die Lagrange-Abschätzung zu (für $n = 3$, d.h. vierte Ableitung).',
          pairs: [
            { left: '$\\sin x$', right: '$\\sin x$' },
            { left: '$\\cos x$', right: '$\\cos x$' },
            { left: '$e^x$',    right: '$e^x$' },
            { left: '$e^{-x}$', right: '$e^{-x}$' },
          ],
          explanation:
            'Die vierten Ableitungen:\n- $\\sin^{(4)} = \\sin$ (Zyklus $\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin$).\n- $\\cos^{(4)} = \\cos$.\n- $(e^x)^{(4)} = e^x$.\n- $(e^{-x})^{(4)} = e^{-x}$ (vier Minuszeichen = positiv).',
          hints: [
            'Zyklus von $\\sin$ hat Länge 4.',
            '$e^x$ ist Eigenfunktion der Ableitung.',
            'Bei $e^{-x}$ kommt Faktor $(-1)^n$.',
          ],
        },
        {
          type: 'multiple-choice',
          question:
            '[PRÜFUNG] Welches Vorgehen ist bei der Fehlerabschätzung von $e^x \\approx T_n(x)$ auf $[0, 0{,}5]$ **effizient**?',
          options: [
            '$M_{n+1} = e^{0{,}5}$ (Maximum auf dem Intervall, da $e^x$ monoton wächst)',
            '$M_{n+1} = 1$ (Wert bei $x_0 = 0$)',
            '$M_{n+1} = e$ (generische Obergrenze)',
            '$M_{n+1} = n+1$',
          ],
          correctIndex: 0,
          explanation:
            'Da $(e^x)^{(n+1)} = e^x$ monoton wächst, ist das Maximum auf $[0, 0{,}5]$ der rechte Randwert $e^{0{,}5} \\approx 1{,}649$. ' +
            '$M_{n+1} = 1$ wäre zu knapp (unter dem echten Max), $M_{n+1} = e \\approx 2{,}72$ wäre übertrieben (Intervall endet bei $0{,}5$, nicht $1$).',
          hints: [
            'Alle Ableitungen von $e^x$ sind wieder $e^x$.',
            '$e^x$ ist streng monoton wachsend.',
            'Auf $[0, 0{,}5]$: Maximum am rechten Rand.',
          ],
          wrongAnswerExplanations: {
            1: '$M_{n+1}=1$ ist der Wert *am linken Rand* ($x_0=0$, $e^0=1$). Für eine *obere* Schranke auf dem Intervall $[0;0{,}5]$ brauchen wir das Maximum — und da $e^x$ monoton wächst, ist das $e^{0{,}5} \\approx 1{,}65 > 1$. $M=1$ wäre zu klein und die Abschätzung falsch.',
            2: '$e \\approx 2{,}72$ gilt erst bei $x=1$, hier geht das Intervall nur bis $0{,}5$. Die Schranke wäre zwar gültig (weil $e>e^{0{,}5}$), aber unnötig locker — für eine *effiziente* Schätzung nimmt man das konkrete Maximum $e^{0{,}5}$.',
            3: '$M_{n+1}=n+1$ ist mathematischer Unsinn in diesem Kontext: $M$ soll eine Schranke der *Ableitung* von $e^x$ sein, nicht eine Funktion des Taylor-Grades. Die Ableitungen von $e^x$ sind wieder $e^x$ — davon unabhängig von $n$.',
          },
        },
        {
          type: 'sorting',
          question:
            '[PRÜFUNG] Strategie zur Fehlerabschätzung von $f(x) \\approx T_n(x)$ auf $[x_0, x]$. Bringe die Schritte in Reihenfolge.',
          items: [
            'Die $(n+1)$-te Ableitung $f^{(n+1)}$ bestimmen',
            'Obere Schranke $M_{n+1} = \\max_{\\xi \\in [x_0, x]} |f^{(n+1)}(\\xi)|$ finden',
            '$|x - x_0|^{n+1}$ berechnen',
            'Einsetzen: $|R_n| \\leq M_{n+1}/(n+1)! \\cdot |x - x_0|^{n+1}$',
          ],
          correctOrder: [0, 1, 2, 3],
          explanation:
            'Reihenfolge: erst Ableitung, dann Maximum, dann Potenzterm, dann Formel. ' +
            'Jeder Schritt ist eigenständig und prüfbar — wichtig bei Prüfungsaufgaben mit mehreren Teilen.',
          hints: [
            'Ohne Ableitung kein Maximum.',
            '$M_{n+1}$ ist der kritische Faktor.',
            'Formel am Ende zusammenbauen.',
          ],
        },
      ],
      masteryQuestion:
        '[PRÜFUNG] Restglied $|R_1(x)|$ von $e^x \\approx 1+x$ auf $[0, 0{,}1]$ (Grad-1-Taylor um $x_0=0$)?',
      masteryOptions: [
        '$\\leq \\dfrac{e^{0{,}1}}{2} \\cdot (0{,}1)^2 \\approx 0{,}0055$',
        '$\\leq 0{,}1$',
        '$\\leq \\dfrac{1}{2}(0{,}1)^2 = 0{,}005$',
        '$= 0$ (exakt)',
      ],
      correctIndex: 0,
      masteryExplanation:
        '$f^{(2)}(x) = e^x \\leq e^{0{,}1}$ auf $[0, 0{,}1]$. ' +
        '$|R_1| \\leq \\frac{e^{0{,}1}}{2!} \\cdot (0{,}1)^2 = \\frac{e^{0{,}1}}{2} \\cdot 0{,}01 \\approx 0{,}0055$.',
      masteryHints: [
        'Restglied Grad 1: $|R_1| \\leq M_2/(2!) \\cdot |x-x_0|^2$.',
        '$M_2 = \\max|f\'\'(\\xi)| = \\max e^\\xi = e^{0{,}1}$ auf $[0, 0{,}1]$.',
        '$e^{0{,}1}/2 \\cdot (0{,}1)^2 = 1{,}105/2 \\cdot 0{,}01 \\approx 0{,}0055$.',
      ],
      masteryWrongAnswerExplanations: {
        1: '$|R_1| \\leq 0{,}1$ ist zwar eine gültige (aber viel zu lockere) Schranke. Der tatsächliche Fehler ist $\\approx 0{,}005$, also $20$-mal kleiner. Die Lagrange-Formel liefert eine *viel schärfere* Schranke: $M_2/2! \\cdot x^2$, nicht einfach $x$.',
        2: '$M_2=1$ statt $e^{0{,}1}$ angesetzt — das wäre nur gültig, wenn $f\'\'(\\xi) \\leq 1$ auf $[0;0{,}1]$. Aber $f\'\'(\\xi)=e^\\xi$ und maximal $e^{0{,}1} \\approx 1{,}105$, also *größer* als $1$. Die Schranke wäre knapp zu klein.',
        3: 'Taylor-Polynom vom Grad 1 ist *keine exakte* Näherung (außer bei Polynomen Grad $\\leq 1$). $e^x$ ist transzendent, also gibt es einen Restfehler $R_1(x) \\neq 0$ für $x \\neq 0$. Bei $x=0{,}1$: exakt $e^{0{,}1} \\approx 1{,}1052$, Näherung $1+0{,}1=1{,}1$, Fehler $\\approx 0{,}0052 > 0$.',
      },
      prerequisites: ['rf-pruefung-2'],
      nextLessonId: null,
    }),
  ],
})

export const reihenFolgenTopic = {
  id: 'reihen-folgen',
  title: 'Reihen & Folgen',
  description: 'Konvergenz, Potenzreihen, Taylor — essenziell für Analysis und Approximationen',
  subject: 'mathematics',
  icon: 'Σ',
  color: 'teal',
  estimatedHours: 2,
  difficulty: 3,
  level: 'vertiefung',
  units: [unit1, unit2],
  prerequisites: ['ableitung', 'integralrechnung'],
}
