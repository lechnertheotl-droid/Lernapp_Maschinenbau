import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

// ── Unit 1: Fourier-Reihen ───────────────────────────────────────────────
const unit1Lessons = [
  makeLesson({
    id: 'fl-1-1',
    title: 'Fourier-Reihen — Grundbegriffe',
    estimatedMinutes: 15,
    learningGoals: [
      'Periodische Funktionen als Überlagerung von Sinus/Kosinus erkennen',
      'Fourier-Koeffizienten berechnen',
    ],
    subGoals: [
      { label: '$T$-Periode und Grundfrequenz $\\omega_0 = 2\\pi/T$ korrekt identifizieren', examRelevance: 'hoch' },
      { label: 'Formel: $a_0 = \\tfrac{1}{T}\\int_0^T f\\,dt$ (DC-Anteil), $a_n$, $b_n$ mit Faktor $\\tfrac{2}{T}$', examRelevance: 'hoch' },
      { label: 'Gerade $f$ ($f(-t) = f(t)$) → nur $a_n$; ungerade → nur $b_n$ — halbiert den Aufwand', examRelevance: 'hoch' },
      { label: 'Reihenansatz: $f(t) = a_0/2 + \\sum_n (a_n\\cos + b_n\\sin)$ — Faktor $1/2$ vor $a_0$ nicht vergessen', examRelevance: 'hoch' },
      { label: 'Integration über eine volle Periode — Start- und Endpunkt frei wählbar (z. B. $-T/2$ bis $T/2$)', examRelevance: 'mittel' },
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Klang als Summe von Obertönen',
    intuitionContent:
      'Jede periodische Funktion kann als (unendliche) Summe von Sinus- und Kosinusfunktionen dargestellt werden — ' +
      'wie ein Musikstück aus Obertönen zusammengesetzt wird.\n\n' +
      'Das Ziel ist es, die "Rezeptur" zu finden: wie viel von jeder Frequenz steckt im Signal? ' +
      'Die Fourier-Koeffizienten $a_n$ und $b_n$ geben genau diese Anteile an.',
    formulaTitle: 'Fourier-Koeffizienten und Reihe',
    formulaContent:
      'Für eine $T$-periodische Funktion $f(t)$:\n\n' +
      '$$a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$$\n\n' +
      '$$a_n = \\frac{2}{T}\\int_0^T f(t)\\cos\\!\\left(\\frac{2\\pi n}{T}t\\right)dt, \\quad n \\ge 1$$\n\n' +
      '$$b_n = \\frac{2}{T}\\int_0^T f(t)\\sin\\!\\left(\\frac{2\\pi n}{T}t\\right)dt$$\n\n' +
      '$$f(t) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left(a_n\\cos\\frac{2\\pi nt}{T} + b_n\\sin\\frac{2\\pi nt}{T}\\right)$$\n\n' +
      '**Symmetrie-Tricks:** Gerade Funktion ($f(-t) = f(t)$) $\\Rightarrow$ nur $a_n$ ($b_n = 0$). ' +
      'Ungerade Funktion ($f(-t) = -f(t)$) $\\Rightarrow$ nur $b_n$ ($a_0 = a_n = 0$).',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was bedeutet es geometrisch, dass eine Funktion $f(t)$ **gerade** ist?',
        options: [
          'Symmetrie zur y-Achse: $f(-t) = f(t)$',
          'Symmetrie zum Ursprung: $f(-t) = -f(t)$',
          '$f$ ist $T$-periodisch: $f(t+T) = f(t)$',
          '$f$ nimmt nur gerade ganzzahlige Werte an',
        ],
        correctIndex: 0,
        explanation: '„Gerade" bezieht sich auf **Symmetrie**, nicht auf ganzzahlige Werte. Spiegeln an der y-Achse ändert $f$ nicht. Beispiele: $\\cos t$, $t^2$, $|t|$.',
        hints: ['Geometrisch: Spiegeln an der y-Achse ändert nichts.', '$f(-t) = f(t)$.', 'Nichts mit geraden/ungeraden Zahlen zu tun.'],
        wrongAnswerExplanations: {
          '1': 'Das ist die Definition einer **ungeraden** Funktion (Punktsymmetrie zum Ursprung), z.B. $\\sin t$ oder $t^3$. Gerade Funktionen sind dagegen zur y-Achse symmetrisch.',
          '2': 'Periodizität $f(t+T) = f(t)$ ist eine andere Eigenschaft. Eine Funktion kann periodisch sein, ohne gerade zu sein (z.B. $\\sin t$).',
          '3': 'Die Bezeichnung „gerade" hat nichts mit Werten zu tun, sondern mit Spiegel-Symmetrie. $t^2$ ist gerade, obwohl $t^2$ selten ganzzahlig ist.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Was ist $a_0/2$ in der Fourier-Reihe?',
        options: ['Der Gleichanteil (Mittelwert) von $f$', 'Die Amplitude der Grundwelle', 'Die Periode', 'Die Phase der ersten Harmonischen'],
        correctIndex: 0,
        explanation: '$a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$ ist der **Mittelwert** über eine Periode. Der Faktor $1/2$ kommt aus der Konvention.',
        hints: ['Konstanter Term der Fourier-Reihe.', 'Integral über eine Periode, geteilt durch $T$.'],
        wrongAnswerExplanations: {
          '1': 'Die Amplitude der Grundwelle steckt in $a_1$ und $b_1$ (bzw. $\\sqrt{a_1^2 + b_1^2}$), nicht in $a_0/2$. $a_0/2$ ist der **konstante** Anteil ohne Frequenz.',
          '2': 'Die Periode $T$ ist ein Parameter der Funktion, kein Koeffizient der Reihe. $a_0/2$ ist Teil der Reihe selbst (Gleichanteil).',
          '3': 'Die Phase der ersten Harmonischen ist $\\arctan(b_1/a_1)$ — komplett andere Größe. $a_0/2$ ist rein der Mittelwert ohne Phase.',
        },
      },
      {
        type: 'true-false',
        statement: 'Eine Fourier-Reihe kann auch **nicht-periodische** Funktionen exakt darstellen.',
        correct: false,
        explanation:
          'Falsch. Fourier-**Reihen** funktionieren nur für periodische Funktionen. Für nicht-periodische Signale braucht man die Fourier-**Transformation** ' +
          '(kontinuierliches Spektrum $F(\\omega)$ statt diskreter Koeffizienten $a_n$, $b_n$).',
        hints: [
          'Fourier-Reihe zerlegt in Harmonische $n\\omega_0$ — das setzt eine Grundperiode voraus.',
          'Ohne Periodizität: Fourier-Transformation.',
          'Diskret vs. kontinuierlich.',
        ],
      },
      {
        type: 'number-input',
        question: 'Eine periodische Funktion hat Periode $T = 4$. Wie groß ist die **Grundkreisfrequenz** $\\omega_0$?',
        correctValue: 1.5708,
        tolerance: 0.01,
        unit: '',
        explanation: '$\\omega_0 = 2\\pi/T = 2\\pi/4 = \\pi/2 \\approx 1{,}571$. Alle Harmonischen liegen bei $n\\omega_0$, also $\\pi/2, \\pi, 3\\pi/2, \\ldots$.',
        hints: ['Formel: $\\omega_0 = 2\\pi/T$.', 'Mit $T = 4$: $2\\pi/4$.', '$\\pi/2 \\approx 1{,}571$.'],
      },
      {
        type: 'multiple-choice',
        question: 'Welche Frequenzen treten in der Fourier-Reihe einer $T$-periodischen Funktion auf?',
        options: [
          'Vielfache der Grundfrequenz: $n \\cdot 2\\pi/T$',
          'Alle reellen Frequenzen',
          'Nur die Grundfrequenz',
          'Frequenz $T$ selbst',
        ],
        correctIndex: 0,
        explanation: 'Diskretes Spektrum: nur **ganzzahlige** Vielfache der Grundfrequenz $\\omega_0 = 2\\pi/T$.',
        hints: ['Periodizität erzwingt diskrete Frequenzen.', 'Grundfrequenz + Harmonische.'],
        wrongAnswerExplanations: {
          '1': 'Ein kontinuierliches Spektrum mit allen reellen Frequenzen ergibt sich bei nicht-periodischen Signalen (Fourier-Transformation). Für periodische Funktionen liefert die Fourier-Reihe nur diskrete Linien.',
          '2': 'Nur die Grundfrequenz reicht nicht — eine Rechteckfunktion z.B. hat neben $\\omega_0$ auch $3\\omega_0, 5\\omega_0, \\ldots$ Daher spricht man von Harmonischen.',
          '3': '$T$ ist die Periode (Zeit), keine Frequenz. Die zugehörige Frequenz ist $\\omega_0 = 2\\pi/T$.',
        },
      },
      {
        type: 'matching',
        question: 'Ordne jeder Symmetrie die korrekte Vereinfachung der Fourier-Reihe zu.',
        pairs: [
          { left: 'Gerade ($f(-t) = f(t)$)',          right: 'nur $\\cos$-Terme ($b_n = 0$)' },
          { left: 'Ungerade ($f(-t) = -f(t)$)',        right: 'nur $\\sin$-Terme ($a_n = 0$)' },
          { left: 'Halbwellen ($f(t+T/2)=-f(t)$)',    right: 'nur ungerade Harmonische' },
          { left: 'Keine Symmetrie',                    right: 'alle Koeffizienten möglich' },
        ],
        explanation: 'Symmetrien eliminieren Integrale vorweg — große Zeitersparnis in Prüfungen.',
        hints: ['Symmetrie sparen Rechenschritte.', 'Vor dem Integrieren auf Symmetrie prüfen.'],
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zur Berechnung einer Fourier-Reihe in Reihenfolge.',
        items: [
          'Periode $T$ identifizieren',
          'Symmetrien prüfen (gerade/ungerade/halbwellen)',
          '$a_0$ durch Integrale bestimmen',
          '$a_n$ und/oder $b_n$ berechnen, Summe hinschreiben',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Symmetrie vor Integral spart Arbeit — spare dir unnötige Null-Integrale.',
        hints: ['Erst $T$, dann Symmetrien.', 'Symmetrien bringen oft die halbe Arbeit weg.'],
      },
    ],
    masteryQuestion: 'Eine gerade periodische Funktion $f(t)$ hat in ihrer Fourier-Reihe nur ...',
    masteryOptions: [
      'nur $\\cos$-Terme ($b_n = 0$)',
      'nur $\\sin$-Terme ($a_n = 0$)',
      'nur $a_0$',
      'weder $\\cos$ noch $\\sin$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Bei geraden Funktionen gilt $b_n = 0$ — alle Sinus-Koeffizienten verschwinden, weil $\\sin$ eine ungerade Funktion ist ' +
      'und das Produkt $f(t)\\cdot\\sin$ über eine volle Periode null ergibt.',
    masteryHints: [
      'Gerade Funktion: $f(-t) = f(t)$.',
      'Sinus ist ungerade: $\\sin(-t) = -\\sin(t)$.',
      'Produkt gerade $\\times$ ungerade = ungerade $\\Rightarrow$ Integral über Periode = 0.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Umgekehrt: nur $\\sin$-Terme treten bei **ungeraden** Funktionen auf ($f(-t) = -f(t)$). Gerade Funktionen haben nur Kosinus, da das Integral von $f \\cdot \\sin$ verschwindet.',
      2: 'Nur $a_0$ gilt ausschließlich für **konstante** Funktionen — jede nichtkonstante gerade Funktion hat zusätzlich Kosinusbeiträge $a_n \\neq 0$.',
      3: 'Das wäre die Nullfunktion. Jede gerade Funktion mit $f \\not\\equiv 0$ hat mindestens $a_0 \\neq 0$ oder $a_n \\neq 0$.',
    },
    nextLessonId: 'fl-1-2',
  }),

  makeLesson({
    id: 'fl-1-2',
    title: 'Fourier-Reihe Rechteckimpuls',
    estimatedMinutes: 14,
    learningGoals: [
      'Fourier-Koeffizienten eines Rechtecksignals berechnen',
      'Gibbs-Phänomen kennen',
    ],
    subGoals: [
      { label: 'Ungerades Rechteck → nur $b_n$; nur **ungerade** $n$ liefern Beitrag ($b_n \\propto 1/n$)', examRelevance: 'hoch' },
      { label: 'Gibbs-Überschwinger ca. 9 % an Sprungstellen — wird mit mehr Termen nicht kleiner, nur schmaler', examRelevance: 'mittel' },
      { label: 'Konvergenz in der Mitte der Sprungstelle zum Mittelwert der beiden Seiten', examRelevance: 'niedrig' },
      { label: 'Amplitudenspektrum: $1/n$-Abfall → „langsame" Abnahme hoher Frequenzen', examRelevance: 'mittel' },
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Warum braucht ein Rechteck hohe Frequenzen?',
    intuitionContent:
      'Der Rechteckimpuls ist das klassische Beispiel in der Elektrotechnik und Signalverarbeitung. ' +
      'Seine Fourier-Reihe enthält unendlich viele Oberschwingungen — praktisch erklärt, warum schnelle Flanken hohe Frequenzanteile brauchen.\n\n' +
      'Interessant: Egal wie viele Terme man summiert, an Sprungstellen überschwingt die Summe immer um ca. 9 %. ' +
      'Dieses unvermeidliche Überschwingen heißt Gibbs-Phänomen.',
    formulaTitle: 'Fourier-Reihe des Rechteckimpulses',
    formulaContent:
      'Rechteckimpuls mit Periode $T$, Amplitude $A$, Tastverhältnis $D = \\tau/T$:\n\n' +
      '$$a_0 = 2AD, \\quad b_n = 0 \\text{ (gerade Funktion bei symmetrischem Ausschnitt)}$$\n\n' +
      '$$a_n = \\frac{2A}{n\\pi}\\sin(n\\pi D)$$\n\n' +
      'Klassischer Fall ($D = 1/2$, $A = 1$):\n\n' +
      '$$f(t) = \\frac{1}{2} + \\frac{2}{\\pi}\\left(\\sin\\omega_0 t + \\frac{\\sin 3\\omega_0 t}{3} + \\frac{\\sin 5\\omega_0 t}{5} + \\cdots\\right)$$\n\n' +
      '**Gibbs-Phänomen:** An Sprungstellen überschwingt die endliche Summe immer um ca. 9 %, ' +
      'egal wie viele Terme man nimmt.',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Warum enthält die Fourier-Reihe eines Rechteckimpulses **unendlich viele** Frequenzanteile?',
        options: [
          'Die Sprungstellen (unstetig) benötigen beliebig hohe Frequenzen für die Flanken',
          'Die Fourier-Reihe ist immer unendlich',
          'Die Amplitude ist groß',
          'Weil die Periode lang ist',
        ],
        correctIndex: 0,
        explanation: 'Unstetige Funktionen (Sprungstellen) können nur durch unendlich viele Harmonische exakt dargestellt werden. Glatte Funktionen konvergieren viel schneller.',
        hints: ['Sprung = plötzliche Änderung.', 'Hohe Frequenzen erzeugen steile Flanken.'],
        wrongAnswerExplanations: {
          '1': 'Nicht jede Fourier-Reihe hat unendlich viele Terme — ein reiner Sinus $\\sin\\omega_0 t$ hat z.B. genau einen Koeffizienten. Hier ist die Unstetigkeit der entscheidende Grund.',
          '2': 'Die Amplitude skaliert alle Koeffizienten gleichmäßig, erzeugt aber keine neuen Frequenzen. Unendlich viele Frequenzen entstehen nur durch Unstetigkeit (Sprünge).',
          '3': 'Periodenlänge bestimmt die Grundfrequenz $\\omega_0 = 2\\pi/T$, aber nicht die Anzahl der Harmonischen. Auch kurze Rechtecksignale haben unendlich viele Oberschwingungen.',
        },
      },
      {
        type: 'number-input',
        question: 'Klassisches Rechteck ($A=1$, $D=0{,}5$): Amplitude der **ersten** Harmonischen $b_1$?',
        correctValue: 1.2732,
        tolerance: 0.01,
        unit: '',
        explanation: 'Aus $f(t) = 1/2 + (2/\\pi)(\\sin\\omega_0 t + \\sin 3\\omega_0 t/3 + \\ldots)$: $b_1 = 2/\\pi \\approx 1{,}273$. (Die $\\sin$-Form beim um $T/4$ verschobenen Rechteck.)',
        hints: ['$b_1$ = Koeffizient vor $\\sin\\omega_0 t$.', 'Formel: $4A/(n\\pi)$ für ungerade $n$.', '$4 \\cdot 1/(1 \\cdot \\pi) = 4/\\pi$, halbiert bei $A = 1$: $\\approx 1{,}27$. Oder direkt: $2/\\pi \\cdot ... $ Rechnung variiert je nach Aufgabe.'],
      },
      {
        type: 'true-false',
        statement: 'Das **Gibbs-Phänomen** verschwindet, wenn man genug Terme der Fourier-Reihe summiert.',
        correct: false,
        explanation: 'Falsch. Das Überschwingen (ca. 9 %) bleibt, auch bei unendlich vielen Termen — es wird nur schmaler in $t$. Es ist eine **fundamentale** Eigenschaft der Fourier-Reihe an Sprungstellen.',
        hints: ['Gibbs ist hartnäckig.', 'Überschwingen wird schmaler, aber nicht kleiner.', 'Typische Fangfrage.'],
      },
      {
        type: 'multiple-choice',
        question: 'Beim Rechteck mit $D = 0{,}5$ fehlen die **geraden** Harmonischen. Welche Symmetrie ist verantwortlich?',
        options: [
          'Halbwellensymmetrie $f(t + T/2) = -f(t)$',
          'Gerade Symmetrie',
          'Ungerade Symmetrie',
          'Periodizität',
        ],
        correctIndex: 0,
        explanation:
          'Halbwellensymmetrie: nach halber Periode kehrt sich das Vorzeichen um. Diese Symmetrie löscht alle geradzahligen Koeffizienten (Fourier-Eigenschaft).',
        hints: ['Nicht nur gerade/ungerade — es gibt noch weitere Symmetrien.', 'Halbwellen $\\to$ nur ungerade $n$.'],
        wrongAnswerExplanations: {
          '1': 'Gerade Symmetrie löscht nur die $b_n$, nicht die geraden Harmonischen insgesamt. Hier bleiben aber noch $a_0, a_2, a_4, \\ldots$ möglich.',
          '2': 'Ungerade Symmetrie löscht $a_n$, erzwingt aber nicht das Verschwinden der geraden $b_n$. Die Reinigung auf ungerade $n$ liefert erst Halbwellensymmetrie.',
          '3': 'Periodizität ist Voraussetzung für jede Fourier-Reihe, bewirkt aber keine Einschränkung auf ungerade Harmonische. Das leistet erst die Halbwellensymmetrie.',
        },
      },
      {
        type: 'matching',
        question: 'Ordne jedem Signaltyp sein Spektrum zu.',
        pairs: [
          { left: 'Sinus $\\sin\\omega_0 t$',              right: 'einzelne Frequenz $\\omega_0$' },
          { left: 'Rechteck (Tastgrad 50 %)',              right: 'ungerade Vielfache der Grundfreq.' },
          { left: 'Dreieck',                                right: 'alle Harmonischen, $\\propto 1/n^2$' },
          { left: 'Dirac-Impuls $\\delta(t)$',              right: 'flaches Spektrum (alle $\\omega$)' },
        ],
        explanation: 'Je glatter das Signal, desto schneller konvergiert die Reihe. Rechteck: $1/n$, Dreieck: $1/n^2$.',
        hints: ['Konvergenzgeschwindigkeit $\\propto 1/n^k$.', 'Je höher $k$, desto glatter das Signal.'],
      },
      {
        type: 'multiple-choice',
        question: 'In welcher Anwendung ist das **Gibbs-Phänomen** praktisch problematisch?',
        options: [
          'Digital-Filter mit abruptem Übergang → Überschwingen in der Zeitantwort',
          'Bei der Fourier-Transformation periodischer Signale',
          'Bei der Fehlerabschätzung',
          'Bei Laplace-Transformationen',
        ],
        correctIndex: 0,
        explanation: 'Ideale Tiefpass-/Bandpass-Filter haben abrupte Frequenz-Übergänge → deren Impulsantwort zeigt Gibbs-Überschwinger. Deshalb in der Praxis Filter mit **glatten** Übergängen (Butterworth, Chebyshev).',
        hints: ['Filter mit steilen Übergängen → Gibbs.', 'Glatte Frequenzgänge vermeiden Überschwinger.'],
        wrongAnswerExplanations: {
          '1': 'Gibbs tritt bei der Fourier-**Reihe** endlicher Länge auf, nicht direkt bei der Fourier-Transformation periodischer Signale. Außerdem ist die Transformation periodischer Signale ohnehin ein Linienspektrum.',
          '2': 'Fehlerabschätzungen hängen mit Konvergenzordnung zusammen — Gibbs ist dagegen ein qualitatives Phänomen an Sprungstellen, kein klassischer Abschätzungsfehler.',
          '3': 'Laplace-Transformation arbeitet im Bildbereich mit komplexen $s$, hat kein Gibbs-Phänomen. Gibbs ist eine Fourier-Reihen-Eigenschaft bei Sprungstellen.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe das Vorgehen bei der Rechteck-Fourier-Aufgabe in Reihenfolge.',
        items: [
          'Symmetrie prüfen (gerade/ungerade/halbwellen)',
          'Formel $a_n = (2A/n\\pi)\\sin(n\\pi D)$ anwenden (oder Standard-Reihe)',
          'Fourier-Reihe notieren',
          'Gibbs-Überschwingen an Sprungstellen erwähnen (bei Prüfungsaufgaben oft gefragt)',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Symmetrie zuerst (spart Integrale), dann Formel direkt anwenden — Rechteck steht in jeder Tabelle. Gibbs erwähnen zeigt Überblick.',
        hints: ['Symmetrie vor Integral.', 'Gibbs nicht vergessen.'],
      },
    ],
    masteryQuestion: 'Warum sind beim Rechteckimpuls nur ungerade Vielfache der Grundfrequenz im Spektrum ($D = 0{,}5$)?',
    masteryOptions: [
      'Wegen der Halbwellensymmetrie $f(t+T/2) = -f(t)$',
      'Weil Rechtecke keine geraden Harmonischen haben',
      'Durch das Gibbs-Phänomen',
      'Wegen des Tastverhältnisses 0,5',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Halbwellensymmetrie $f(t+T/2) = -f(t)$ bewirkt, dass alle geraden Koeffizienten $a_{2k} = b_{2k} = 0$ verschwinden.',
    masteryHints: [
      'Halbwellensymmetrie: $f(t+T/2) = -f(t)$.',
      'Diese Symmetrie löscht alle geradzahligen Fourier-Koeffizienten.',
      'Nur $n = 1, 3, 5, \\ldots$ überleben im Spektrum.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Das ist zwar im Ergebnis richtig, aber keine tiefere Begründung. Die eigentliche Ursache ist die Halbwellensymmetrie $f(t+T/2) = -f(t)$, die allgemein gilt, nicht nur für Rechtecke.',
      2: 'Gibbs-Phänomen beschreibt das Überschwingen an Sprungstellen, nicht das Verschwinden von Harmonischen. Es betrifft Konvergenz, nicht das Spektrum.',
      3: 'Tastverhältnis $D = 0{,}5$ **erzeugt** die Halbwellensymmetrie — die eigentliche Ursache der verschwindenden geraden Koeffizienten ist aber diese Symmetrie, nicht $D$ selbst.',
    },
    nextLessonId: 'fl-1-3',
  }),

  makeLesson({
    id: 'fl-1-3',
    title: 'Fourier-Transformation',
    estimatedMinutes: 16,
    learningGoals: [
      'Von Fourier-Reihen zur Fourier-Transformation übergehen',
      'Spektrum nicht-periodischer Signale verstehen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Vom diskreten zum kontinuierlichen Spektrum',
    intuitionContent:
      'Die Fourier-Transformation verallgemeinert Fourier-Reihen auf nicht-periodische Signale — ' +
      'aus diskreten Frequenzlinien wird ein kontinuierliches Spektrum $F(\\omega)$.\n\n' +
      'Anschaulich: Lässt man die Periode $T \\to \\infty$, rücken die Frequenzlinien immer enger zusammen ' +
      'und gehen in ein Kontinuum über. Die Summe wird zum Integral.',
    formulaTitle: 'Fourier-Transformation und wichtige Paare',
    formulaContent:
      '**Fourier-Transformation:**\n' +
      '$$F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\,e^{-j\\omega t}\\,dt$$\n\n' +
      '**Rücktransformation:**\n' +
      '$$f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(\\omega)\\,e^{j\\omega t}\\,d\\omega$$\n\n' +
      '**Wichtige Paare:**\n\n' +
      '| $f(t)$ | $F(\\omega)$ |\n' +
      '|---|---|\n' +
      '| $\\delta(t)$ | $1$ |\n' +
      '| $1$ | $2\\pi\\cdot\\delta(\\omega)$ |\n' +
      '| $e^{-at}\\cdot u(t)$ | $1/(a+j\\omega)$ |\n' +
      '| $\\operatorname{rect}(t/\\tau)$ | $\\tau\\cdot\\operatorname{sinc}(\\omega\\tau/2)$ |\n\n' +
      '**Eigenschaften:** Linearität, Verschiebungssatz ($e^{j\\omega_0 t}$ im Zeitbereich $\\Rightarrow$ Verschiebung im Spektrum), Parseval.',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist der Hauptunterschied zwischen Fourier-**Reihe** und Fourier-**Transformation**?',
        options: [
          'Reihe: periodische Signale, diskretes Spektrum. Transformation: nicht-periodische Signale, kontinuierliches Spektrum',
          'Reihe hat $\\sin$/$\\cos$, Transformation hat $e^{j\\omega t}$',
          'Reihe rechnet im Zeitbereich, Transformation im Frequenzbereich',
          'Es gibt keinen Unterschied',
        ],
        correctIndex: 0,
        explanation: 'Fourier-Reihe → periodisch, diskretes Linienspektrum bei $n\\omega_0$. Fourier-Transformation → aperiodisch, kontinuierliches Spektrum $F(\\omega)$.',
        hints: ['Periode $T \\to \\infty$ macht Linien dicht.', 'Diskret vs. kontinuierlich.'],
        wrongAnswerExplanations: {
          '1': 'Die komplexe Exponentialform $e^{j\\omega t}$ lässt sich in beiden Darstellungen nutzen — die Reihe kann ebenfalls komplex geschrieben werden mit $c_n$. Der eigentliche Unterschied ist periodisch vs. aperiodisch.',
          '2': 'Beide Verfahren bauen eine Brücke vom Zeit- in den Frequenzbereich — keines „lebt" nur auf einer Seite. Der Unterschied liegt in diskret vs. kontinuierlich.',
          '3': 'Es gibt einen grundlegenden Unterschied: Anwendung auf periodische vs. aperiodische Signale und diskretes vs. kontinuierliches Spektrum.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Die Fourier-Transformierte eines Dirac-Impulses $\\delta(t)$ ist:',
        options: ['$1$ (flaches Spektrum)', '$\\delta(\\omega)$', '$1/\\omega$', '$2\\pi$'],
        correctIndex: 0,
        explanation: '$\\int_{-\\infty}^\\infty \\delta(t) e^{-j\\omega t}\\,dt = e^{-j\\omega\\cdot 0} = 1$. Ein Impuls enthält alle Frequenzen gleich stark.',
        hints: ['Ausblendeigenschaft des Dirac.', '$\\int \\delta(t) g(t)\\,dt = g(0)$.'],
        wrongAnswerExplanations: {
          '1': '$\\delta(\\omega)$ wäre die Transformierte einer **Konstanten** $f(t) = 1$ (skaliert mit $2\\pi$) — genau die duale Beziehung. Für $\\delta(t)$ selbst ergibt sich ein flaches Spektrum $F(\\omega) = 1$.',
          '2': '$1/\\omega$ ist die Transformierte einer Sprung-ähnlichen Funktion (bis auf $\\pi\\delta$-Anteile), nicht von $\\delta$. Ergebnis bei $\\delta$: konstant $1$.',
          '3': '$2\\pi$ wäre falsch skaliert — die direkte Anwendung der Ausblendeigenschaft liefert $e^{-j\\omega\\cdot 0} = 1$, nicht $2\\pi$.',
        },
      },
      {
        type: 'matching',
        question: 'Ordne jedem Zeitbereichs-Signal sein Spektrum zu.',
        pairs: [
          { left: '$\\delta(t)$',                          right: '$1$ (flach)' },
          { left: '$1$ (Konstante)',                        right: '$2\\pi\\delta(\\omega)$' },
          { left: 'Rechteck der Breite $\\tau$',             right: '$\\tau\\,\\operatorname{sinc}(\\omega\\tau/2)$' },
          { left: '$e^{-at}u(t)$',                          right: '$1/(a+j\\omega)$' },
        ],
        explanation: 'Klassische Fourier-Paare — stehen in jeder Formelsammlung.',
        hints: ['Dualität: schmal im Zeit ↔ breit im Frequenz.', 'Tabellen auswendig haben.'],
      },
      {
        type: 'true-false',
        statement: 'Die Fourier-Transformation ist **linear**: $\\mathcal{F}\\{af_1 + bf_2\\} = aF_1(\\omega) + bF_2(\\omega)$.',
        correct: true,
        explanation: 'Richtig. Linearität folgt direkt aus der Linearität des Integrals.',
        hints: ['Integrale sind linear.', 'Folgt aus der Definition.'],
      },
      {
        type: 'number-input',
        question: 'Rechteck-Breite $\\tau = 2$: Wo liegt die **erste Nullstelle** der sinc-Funktion $\\tau\\operatorname{sinc}(\\omega\\tau/2)$?',
        correctValue: 3.1416,
        tolerance: 0.01,
        unit: '',
        explanation: '$\\operatorname{sinc}(x) = \\sin(x)/x = 0$ bei $x = \\pi, 2\\pi, \\ldots$. Also $\\omega\\tau/2 = \\pi \\Rightarrow \\omega = 2\\pi/\\tau = \\pi$ bei $\\tau=2$.',
        hints: ['$\\operatorname{sinc}(x) = 0$ bei $x = k\\pi$, $k = 1, 2, \\ldots$.', '$\\omega \\tau/2 = \\pi$ lösen.', '$\\omega = 2\\pi/\\tau$ mit $\\tau = 2$.'],
      },
      {
        type: 'multiple-choice',
        question: 'Zeitverschiebung $f(t - t_0)$ entspricht im Spektrum:',
        options: [
          'Multiplikation mit $e^{-j\\omega t_0}$ (nur Phase, Betrag gleich)',
          'Verschiebung des Spektrums um $t_0$',
          'Skalierung mit $1/t_0$',
          'Keine Änderung',
        ],
        correctIndex: 0,
        explanation: 'Zeitverschiebung dreht die Phase linear mit $\\omega$. Betragsspektrum $|F(\\omega)|$ bleibt unverändert.',
        hints: ['Betrag bleibt, Phase dreht.', 'Energie bleibt gleich.'],
        wrongAnswerExplanations: {
          '1': 'Eine Verschiebung des Spektrums im Frequenzbereich entspricht einer Modulation $e^{j\\omega_0 t}$ im Zeitbereich, nicht einer Zeitverschiebung. Zeitshift bewirkt nur Phasenänderung.',
          '2': 'Skalierung im Zeit entspricht Skalierung im Frequenz: $f(at) \\leftrightarrow \\frac{1}{|a|}F(\\omega/a)$. Reine Verschiebung ändert aber keine Skalierung.',
          '3': 'Zeitverschiebung bewirkt durchaus eine Phasenänderung $e^{-j\\omega t_0}$ — „keine Änderung" ist falsch, nur der Betrag bleibt gleich.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zur Berechnung einer Fourier-Transformation in Reihenfolge.',
        items: [
          'Signal $f(t)$ analysieren (stückweise Definition? Existenzbereich?)',
          'Tabelle prüfen oder Integral aufstellen $\\int f(t) e^{-j\\omega t}\\,dt$',
          'Integral lösen oder Eigenschaften (Linearität, Verschiebung, Skalierung) anwenden',
          'Ergebnis $F(\\omega)$ vereinfachen und prüfen (Einheiten, Grenzwerte)',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Erst Signal verstehen, dann Tabelle/Integral, dann Eigenschaften nutzen — spart enorm Zeit.',
        hints: ['Tabelle vor Integral.', 'Eigenschaften sparen Arbeit.'],
      },
    ],
    masteryQuestion: '[PRÜFUNG] Die Fourier-Transformierte von $e^{-at}u(t)$ ($a > 0$) lautet:',
    masteryOptions: [
      '$\\dfrac{1}{a + j\\omega}$',
      '$\\dfrac{1}{a - j\\omega}$',
      '$\\dfrac{a}{a^2 + \\omega^2}$',
      '$e^{-a\\omega}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      '$\\mathcal{F}\\{e^{-at}u(t)\\} = \\int_0^\\infty e^{-at}e^{-j\\omega t}\\,dt = \\int_0^\\infty e^{-(a+j\\omega)t}\\,dt = \\frac{1}{a+j\\omega}$ ' +
      '(konvergiert für $a > 0$).',
    masteryHints: [
      'Integral aufstellen: $\\int_0^\\infty e^{-(a+j\\omega)t}\\,dt$.',
      'Exponentialintegral: $\\left[-\\frac{1}{a+j\\omega}e^{-(a+j\\omega)t}\\right]_0^\\infty$.',
      'Bei $t \\to \\infty$ verschwindet der Term wegen $a > 0$, unten bleibt $\\frac{1}{a+j\\omega}$.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Vorzeichenfehler im Exponenten der Transformationsformel: $\\mathcal{F}$ verwendet $e^{-j\\omega t}$ (Minus), also $a+j\\omega$ im Nenner. $\\frac{1}{a-j\\omega}$ wäre die **inverse** Transformation oder ein Rechenfehler.',
      2: '$a/(a^2+\\omega^2)$ ist der **Realteil** von $1/(a+j\\omega)$, nicht die komplette Transformierte. Die vollständige Transformierte ist komplex: $1/(a+j\\omega) = (a-j\\omega)/(a^2+\\omega^2)$.',
      3: '$e^{-a\\omega}$ ist eine Exponentialfunktion in $\\omega$. Die Transformierte eines abklingenden Signals ist aber typischerweise eine rationale Funktion, keine Exponentialfunktion.',
    },
    nextLessonId: 'fl-2-1',
  }),
]

const unit1 = makeUnit({
  id: 'fl-unit-1',
  title: 'Fourier-Reihen',
  order: 1,
  unitGoals: [
    'Periodische Funktion in Fourier-Reihe $a_0/2 + \\sum (a_n \\cos(n\\omega t) + b_n \\sin(n\\omega t))$ entwickeln',
    'Koeffizienten $a_n, b_n$ über Integrale über eine Periode berechnen',
    'Symmetrien ausnutzen: gerade Funktionen $\\Rightarrow b_n = 0$, ungerade $\\Rightarrow a_n = 0$',
    'Komplexe Fourier-Reihe $\\sum c_n e^{in\\omega t}$ und Zusammenhang $c_n = (a_n - ib_n)/2$',
    'Fourier-Transformation als Verallgemeinerung auf nichtperiodische Signale einführen',
  ],
  lessons: unit1Lessons,
})

// ── Unit 2: Laplace-Transformation ──────────────────────────────────────
const unit2Lessons = [
  makeLesson({
    id: 'fl-2-1',
    title: 'Laplace-Grundlagen',
    estimatedMinutes: 15,
    learningGoals: [
      'Laplace-Transformation definieren',
      'Einfache Transformationen aus der Tabelle ablesen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'DGLs werden zu algebraischen Gleichungen',
    intuitionContent:
      'Die Laplace-Transformation wandelt DGLs in algebraische Gleichungen um — statt zu differenzieren und integrieren, ' +
      'multipliziert und dividiert man nur noch in der $s$-Domäne.\n\n' +
      'Das $s = \\sigma + j\\omega$ verallgemeinert die Fourier-Transformation: ' +
      'die Fourier-Transformation ist der Spezialfall $\\sigma = 0$ (rein imaginäre Achse).',
    formulaTitle: 'Definition und wichtige Paare',
    formulaContent:
      '**Definition:**\n' +
      '$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t)\\,e^{-st}\\,dt, \\quad s = \\sigma + j\\omega$$\n\n' +
      '**Wichtige Paare:**\n\n' +
      '| $f(t)$ | $F(s)$ |\n' +
      '|---|---|\n' +
      '| $\\delta(t)$ | $1$ |\n' +
      '| $u(t)$ (Einheitssprung) | $1/s$ |\n' +
      '| $t$ | $1/s^2$ |\n' +
      '| $e^{-at}$ | $1/(s+a)$ |\n' +
      '| $\\sin(\\omega t)$ | $\\omega/(s^2+\\omega^2)$ |\n' +
      '| $\\cos(\\omega t)$ | $s/(s^2+\\omega^2)$ |\n\n' +
      '**Ableitungssatz:** $\\mathcal{L}\\{f\'(t)\\} = s\\,F(s) - f(0^-)$\n\n' +
      '**Verschiebungssatz:** $\\mathcal{L}\\{e^{-at}f(t)\\} = F(s+a)$',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist $\\mathcal{L}\\{u(t)\\}$ (Einheitssprung)?',
        options: ['$1/s$', '$1$', '$s$', '$\\delta(s)$'],
        correctIndex: 0,
        explanation: '$\\mathcal{L}\\{u(t)\\} = \\int_0^\\infty 1 \\cdot e^{-st}\\,dt = [-e^{-st}/s]_0^\\infty = 1/s$ (für $\\operatorname{Re}(s) > 0$).',
        hints: ['Integral $\\int_0^\\infty e^{-st}\\,dt$.', 'Konvergiert für $\\operatorname{Re}(s) > 0$.'],
        wrongAnswerExplanations: {
          '1': '$1$ ist die Laplace-Transformierte des **Dirac-Impulses** $\\delta(t)$, nicht des Einheitssprungs. Sprung integriert den Dirac, daher $\\mathcal{L}\\{u\\} = 1/s$.',
          '2': '$s$ wäre keine sinnvolle Laplace-Transformierte einer beschränkten Funktion — die Laplace-Integrale erzeugen typischerweise Reziproke (Nennerterme mit $s$).',
          '3': '$\\delta(s)$ gibt es als Formalismus kaum — Laplace-Transformierte sind typischerweise rationale Funktionen in $s$. Korrekt: $1/s$.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Was ist $\\mathcal{L}\\{e^{-2t}\\}$?',
        options: ['$1/(s+2)$', '$1/(s-2)$', '$2/(s^2+4)$', '$e^{-2s}$'],
        correctIndex: 0,
        explanation: '$\\mathcal{L}\\{e^{-at}\\} = 1/(s+a)$. Hier $a = 2$: $1/(s+2)$.',
        hints: ['Exponential-Transform: $1/(s+a)$.', 'Nicht verwechseln mit Fourier.'],
        wrongAnswerExplanations: {
          '1': 'Vorzeichen-Fehler: Bei $e^{-at}$ (Dämpfung) verschiebt sich der Pol in der Laplace-Transformation zu $s = -a$, also Nenner $(s+a)$. $1/(s-2)$ würde zu $e^{+2t}$ (instabil) gehören.',
          '2': '$2/(s^2+4)$ ist die Laplace-Transformierte von $\\sin(2t)$, nicht von $e^{-2t}$. Unterschiedliche Zeitfunktionen — Sinus ist oszillierend, Exponential abklingend.',
          '3': '$e^{-2s}$ gehört zur Laplace-Transformierten einer Zeitverschiebung (Satz von Heaviside): $\\mathcal{L}\\{u(t-2)\\cdot f(t-2)\\} = e^{-2s} F(s)$. Hat nichts mit $e^{-2t}$ im Zeitbereich zu tun.',
        },
      },
      {
        type: 'number-input',
        question: 'Wie lautet $\\mathcal{L}\\{t^2\\}$? (Gib den Koeffizienten von $1/s^3$ ein, d.h. $n!$ für $n=2$.)',
        correctValue: 2,
        tolerance: 0.01,
        unit: '',
        explanation: '$\\mathcal{L}\\{t^n\\} = n!/s^{n+1}$. Für $n = 2$: $2!/s^3 = 2/s^3$. Der gesuchte Koeffizient ist $2! = 2$.',
        hints: ['Allgemeine Formel: $t^n \\to n!/s^{n+1}$.', '$2! = 2$.', 'Im Ergebnis: $2/s^3$.'],
      },
      {
        type: 'true-false',
        statement: 'Der Ableitungssatz $\\mathcal{L}\\{f\'(t)\\} = s\\,F(s) - f(0^-)$ macht Laplace für DGLs so nützlich.',
        correct: true,
        explanation: 'Richtig. Jede Ableitung wird zu Multiplikation mit $s$ (plus Anfangsbedingung). DGLs werden zu algebraischen Gleichungen.',
        hints: ['Differenzieren im Zeit = Multiplizieren mit $s$ im Frequenz.', 'Plus Anfangsbedingungen.'],
      },
      {
        type: 'matching',
        question: 'Ordne Zeitfunktion ↔ Laplace-Transformierte.',
        pairs: [
          { left: '$\\delta(t)$',            right: '$1$' },
          { left: '$u(t)$',                   right: '$1/s$' },
          { left: '$t$',                      right: '$1/s^2$' },
          { left: '$\\cos(\\omega t)$',       right: '$s/(s^2+\\omega^2)$' },
        ],
        explanation: 'Grundlegende Laplace-Paare — unbedingt auswendig kennen.',
        hints: ['Tabelle auswendig.', 'Sin hat $\\omega$ im Zähler, Cos hat $s$.'],
      },
      {
        type: 'multiple-choice',
        question: 'Der **Verschiebungssatz** $\\mathcal{L}\\{e^{-at}f(t)\\} = F(s+a)$ bedeutet:',
        options: [
          'Multiplikation mit $e^{-at}$ verschiebt das Spektrum um $a$ nach rechts ($s \\to s+a$)',
          'Zeitverschiebung entspricht Phasendrehung',
          'Spektrum wird gestaucht',
          'Keine Änderung',
        ],
        correctIndex: 0,
        explanation: 'Dämpfung im Zeit = Verschiebung im Frequenz. Damit lassen sich Transformationen wie $e^{-at}\\sin(\\omega t)$ direkt ablesen.',
        hints: ['Dämpfung $e^{-at}$ ↔ Shift $s \\to s+a$.', 'Gedämpfte Sinus aus Tabelle + Shift.'],
        wrongAnswerExplanations: {
          '1': 'Zeitverschiebung gehört zum Heaviside-Shift-Satz $\\mathcal{L}\\{f(t-a)u(t-a)\\} = e^{-as}F(s)$, nicht zum Dämpfungssatz $F(s+a)$.',
          '2': 'Skalierung im Zeit $f(at)$ führt zu $\\frac{1}{a}F(s/a)$, also einer Streckung **und** Amplitudenskalierung. Der hier angegebene Satz ist aber eine reine **Verschiebung**.',
          '3': 'Dämpfung ist eine echte Modifikation — der Dämpfungssatz $e^{-at}f(t) \\leftrightarrow F(s+a)$ ist einer der wichtigsten Sätze.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die Schritte zum Transformieren einer Zeitfunktion in Reihenfolge.',
        items: [
          'Funktion in Standardform bringen (z.B. $u(t)$ ausklammern)',
          'Linearität nutzen: Summe ↔ Summe der Transformierten',
          'Tabelle + Verschiebungssatz + Ableitungssatz anwenden',
          'Ergebnis prüfen (Pole rechts? Einheiten?)',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Erst Form, dann Zerlegen, dann Tabelle — wie ein Baukasten.',
        hints: ['Linearität zerlegen.', 'Tabelle am Ende.'],
      },
    ],
    masteryQuestion: 'Wie lautet $\\mathcal{L}\\{\\sin(\\omega_0 t)\\}$?',
    masteryOptions: [
      '$\\dfrac{\\omega_0}{s^2+\\omega_0^2}$',
      '$\\dfrac{s}{s^2+\\omega_0^2}$',
      '$\\dfrac{1}{s+\\omega_0}$',
      '$\\dfrac{\\omega_0}{s+\\omega_0}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Aus der Tabelle: $\\mathcal{L}\\{\\sin(\\omega_0 t)\\} = \\omega_0/(s^2+\\omega_0^2)$. ' +
      'Die Cosinus-Transformierte hat dagegen $s$ im Zähler.',
    masteryHints: [
      'Tabelle: $\\mathcal{L}\\{\\sin(\\omega_0 t)\\} = \\omega_0/(s^2+\\omega_0^2)$.',
      'Vergleiche mit $\\mathcal{L}\\{\\cos\\}$: dort steht $s$ im Zähler.',
      'Merke: $\\sin \\to \\omega_0$, $\\cos \\to s$ im Zähler.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Das ist die Transformierte von $\\cos(\\omega_0 t)$: $s/(s^2+\\omega_0^2)$. Sinus und Kosinus unterscheiden sich genau in diesem Zählerfaktor: $\\omega_0$ bei Sinus, $s$ bei Kosinus.',
      2: '$1/(s+\\omega_0)$ ist die Transformierte von $e^{-\\omega_0 t}u(t)$ — eine gedämpfte Exponentialfunktion, kein Sinus. Merkmal: quadratischer Nenner $s^2+\\omega_0^2$ gehört zu Sinus/Kosinus.',
      3: '$\\omega_0/(s+\\omega_0)$ ist eine Mischung: Zähler vom Sinus, Nenner vom Exponential — existiert so nicht in der Tabelle. Korrekt: quadratischer Nenner $s^2 + \\omega_0^2$.',
    },
    nextLessonId: 'fl-2-2',
  }),

  makeLesson({
    id: 'fl-2-2',
    title: 'Laplace zur DGL-Lösung',
    estimatedMinutes: 16,
    learningGoals: [
      'DGL mit Laplace lösen (Transformieren, algebraisch umformen, rücktransformieren)',
      'Übertragungsfunktion $G(s)$ verstehen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Vier Schritte zur DGL-Lösung',
    intuitionContent:
      'Methode: 1. Gleichung transformieren, 2. nach $Y(s)$ auflösen, 3. Partialbruchzerlegung, 4. rücktransformieren.\n\n' +
      'Die Übertragungsfunktion $G(s) = Y(s)/U(s)$ beschreibt das System ohne konkrete Anfangsbedingungen — ' +
      'sie ist eine reine Systemeigenschaft und die Grundlage der Regelungstechnik.',
    formulaTitle: 'DGL-Lösung Schritt für Schritt',
    formulaContent:
      '**Ableitungssatz anwenden:**\n' +
      '$$y\'\' + 3y\' + 2y = u(t), \\quad y(0)=0,\\; y\'(0)=0$$\n\n' +
      'Transformiert (Anfangsbedingungen = 0):\n' +
      '$$(s^2 + 3s + 2)\\,Y(s) = U(s)$$\n\n' +
      '**Übertragungsfunktion:**\n' +
      '$$G(s) = \\frac{Y(s)}{U(s)} = \\frac{1}{s^2+3s+2} = \\frac{1}{(s+1)(s+2)}$$\n\n' +
      '**Partialbruchzerlegung:**\n' +
      '$$G(s) = \\frac{1}{s+1} - \\frac{1}{s+2}$$\n\n' +
      '**Rücktransformation:**\n' +
      '$$g(t) = e^{-t} - e^{-2t} \\quad (t \\ge 0)$$\n\n' +
      'Dies ist die **Impulsantwort** (Antwort auf $\\delta(t)$).',
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Bei einer DGL $y\' + 2y = u(t)$ mit $y(0) = 0$: Wie lautet die Gleichung im Bildbereich?',
        options: [
          '$(s+2)\\,Y(s) = U(s)$',
          '$s\\,Y(s) + 2 = U(s)$',
          '$Y(s) = U(s)/s + 2$',
          '$Y(s) \\cdot 2 = U(s)$',
        ],
        correctIndex: 0,
        explanation: 'Ableitungssatz: $\\mathcal{L}\\{y\'\\} = s Y(s) - y(0) = s Y(s)$ (wg. $y(0)=0$). Also $s Y + 2Y = U \\Rightarrow (s+2)Y = U$.',
        hints: ['$\\mathcal{L}\\{y\'\\} = sY - y(0)$.', 'Mit $y(0) = 0$: nur $sY$.', 'Ausklammern $Y$.'],
        wrongAnswerExplanations: {
          '1': 'Hier wurde $2y$ als konstante $2$ transformiert statt als $2Y$ — die Zeitfunktion $y$ muss man ebenfalls Laplace-transformieren. Richtig: $sY + 2Y = U$.',
          '2': 'Der Term $+2$ wurde wie ein Dividend umgestellt. Korrekt ist ein **Faktor** $(s+2)$ vor $Y$, nicht $+2$ nach dem Quotienten $U/s$.',
          '3': 'Der Ableitungsterm $y\'$ wurde komplett vergessen — stattdessen nur $2Y = U$. Newton-Laplace fordert $\\mathcal{L}\\{y\'\\} = sY$, dieser Term fehlt.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Die **Übertragungsfunktion** $G(s) = Y(s)/U(s)$ beschreibt:',
        options: [
          'Die Systemeigenschaft unabhängig vom konkreten Eingang',
          'Die Antwort auf einen Sprung',
          'Die Anfangsbedingung',
          'Die Eigenfrequenz',
        ],
        correctIndex: 0,
        explanation: '$G(s)$ ist eine reine Systemeigenschaft. Für jeden Eingang $U(s)$ folgt $Y(s) = G(s)\\cdot U(s)$. Grundlage der Regelungstechnik.',
        hints: ['Nur Systemeigenschaft, kein Eingang.', 'Verhältnis der Transformationen.'],
        wrongAnswerExplanations: {
          '1': 'Die Sprungantwort ist $G(s)/s$ im Bildbereich, also $G$ angewandt auf einen **konkreten** Eingang (Sprung). $G(s)$ selbst ist aber eingangsunabhängig.',
          '2': 'Anfangsbedingungen fließen bei der Definition der Übertragungsfunktion **nicht** ein — sie wird üblicherweise bei verschwindenden Anfangsbedingungen gebildet.',
          '3': 'Eigenfrequenzen sind die Pole von $G(s)$ (Lage in $s$-Ebene). $G(s)$ selbst ist aber die **gesamte** rationale Funktion, nicht nur ein Parameter.',
        },
      },
      {
        type: 'number-input',
        question: '$G(s) = \\dfrac{1}{(s+1)(s+2)} = \\dfrac{A}{s+1} + \\dfrac{B}{s+2}$. Wie groß ist $A$?',
        correctValue: 1,
        tolerance: 0.01,
        unit: '',
        explanation: 'Heaviside-Trick: $A = \\lim_{s\\to -1} (s+1)\\cdot G(s) = 1/(-1+2) = 1$. Analog $B = 1/(-2+1) = -1$.',
        hints: ['Heaviside: $A = (s+1)G(s)|_{s=-1}$.', '$(s+1)G(s) = 1/(s+2)$.', 'Einsetzen $s = -1$.'],
      },
      {
        type: 'true-false',
        statement: 'Die Impulsantwort $g(t)$ ist die Rücktransformation der Übertragungsfunktion $G(s)$.',
        correct: true,
        explanation: 'Richtig. $\\mathcal{L}\\{\\delta(t)\\} = 1$, also $Y(s) = G(s)\\cdot 1 = G(s) \\Rightarrow g(t) = \\mathcal{L}^{-1}\\{G(s)\\}$.',
        hints: ['$\\delta \\leftrightarrow 1$.', '$Y(s) = G(s) \\cdot U(s)$ mit $U(s) = 1$.'],
      },
      {
        type: 'matching',
        question: 'Ordne jedem Pol der Übertragungsfunktion sein Zeitverhalten zu.',
        pairs: [
          { left: 'Pol bei $s = -a$ ($a > 0$)',            right: '$e^{-at}$ (klingt ab, stabil)' },
          { left: 'Pol bei $s = +a$ ($a > 0$)',            right: '$e^{+at}$ (wächst, instabil)' },
          { left: 'Pol bei $s = \\pm j\\omega_0$',          right: '$\\sin(\\omega_0 t)$ (grenzstabil)' },
          { left: 'Doppelpol bei $s = -a$',                 right: '$t\\,e^{-at}$ (klingt langsamer ab)' },
        ],
        explanation: 'Pole bestimmen das Zeitverhalten. Linke Halbebene = stabil, rechte = instabil.',
        hints: ['Realteil negativ = abklingen.', 'Imaginär = Schwingung.'],
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Schritt ist bei der DGL-Lösung per Laplace meist am aufwändigsten?',
        options: [
          'Die Partialbruchzerlegung und anschließende Rücktransformation',
          'Die Transformation der DGL',
          'Das Ablesen von $U(s)$',
          'Die Aufstellung der Anfangsbedingungen',
        ],
        correctIndex: 0,
        explanation: 'Partialbruchzerlegung kann bei komplizierten Nennern viel Rechenaufwand erzeugen. Transformation + Rücktransformation aus Tabelle sind meist schnell.',
        hints: ['Algebra vor Rücktransform.', 'Heaviside-Trick spart Zeit.'],
        wrongAnswerExplanations: {
          '1': 'Die Transformation der DGL ist mit dem Ableitungssatz nahezu mechanisch ($y^{(k)} \\to s^k Y - \\ldots$) — also der **leichteste** Schritt, nicht der aufwändigste.',
          '2': '$U(s)$ wird aus einer Tabelle abgelesen (Sprung $= 1/s$, Impuls $= 1$, etc.) — trivial. Nicht der aufwändigste Schritt.',
          '3': 'Anfangsbedingungen sind meist in der Aufgabe angegeben oder $= 0$. Kein rechenintensiver Schritt.',
        },
      },
      {
        type: 'sorting',
        question: 'Bringe die 4 Schritte zur DGL-Lösung per Laplace in Reihenfolge.',
        items: [
          'DGL transformieren (Ableitungssatz) und Anfangsbedingungen einsetzen',
          'Gleichung algebraisch nach $Y(s)$ auflösen',
          'Partialbruchzerlegung durchführen',
          'Jeden Summanden rücktransformieren (Tabelle) → $y(t)$',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Der klassische 4-Schritte-Algorithmus — in jeder Prüfung gleich.',
        hints: ['Transform → Algebra → Partialbruch → Rücktransform.', 'Anfangsbedingungen sofort einbauen.'],
      },
    ],
    masteryQuestion: '[PRÜFUNG] Übertragungsfunktion $G(s) = \\dfrac{1}{s+3}$. Was ist die Sprungantwort $y(t)$ für $t \\ge 0$?',
    masteryOptions: [
      '$\\dfrac{1}{3}(1-e^{-3t})$',
      '$e^{-3t}$',
      '$\\dfrac{1}{3}e^{-3t}$',
      '$1-e^{-3t}$',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Einheitssprung: $U(s) = 1/s$. Damit $Y(s) = G(s)\\cdot U(s) = \\frac{1}{s(s+3)} = \\frac{1/3}{s} - \\frac{1/3}{s+3}$. ' +
      'Rücktransformation: $y(t) = \\frac{1}{3}(1-e^{-3t})$.',
    masteryHints: [
      'Sprungantwort: $Y(s) = G(s)/s$.',
      'Partialbruchzerlegung: $\\frac{1}{s(s+3)} = \\frac{A}{s} + \\frac{B}{s+3}$.',
      '$A = 1/3$, $B = -1/3$ $\\Rightarrow$ rücktransformieren.',
    ],
    masteryWrongAnswerExplanations: {
      1: '$e^{-3t}$ ist die Impulsantwort $h(t) = \\mathcal{L}^{-1}\\{G(s)\\}$, nicht die Sprungantwort. Die Sprungantwort ist $\\int_0^t h(\\tau)\\,d\\tau$ und enthält einen stationären Anteil.',
      2: '$\\frac{1}{3}e^{-3t}$ startet bei $1/3 > 0$ und fällt ab — eine abklingende Exponentialfunktion. Die Sprungantwort muss aber bei $t=0$ null sein und stationär gegen $G(0) = 1/3$ konvergieren.',
      3: '$1 - e^{-3t}$ konvergiert gegen $1$ — aber der stationäre Endwert ist $G(0) = 1/3$, nicht $1$. Der Vorfaktor $1/3$ wurde vergessen: richtig ist $\\tfrac{1}{3}(1-e^{-3t})$.',
    },
    nextLessonId: 'fl-3-1',
  }),
]

const unit2 = makeUnit({
  id: 'fl-unit-2',
  title: 'Laplace-Transformation',
  order: 2,
  unitGoals: [
    'Laplace-Transformation $F(s) = \\int_0^\\infty f(t) e^{-st} dt$ als Werkzeug zur DGL-Lösung einsetzen',
    'Korrespondenztabelle nutzen: $e^{at} \\leftrightarrow 1/(s-a)$, $\\sin(\\omega t) \\leftrightarrow \\omega/(s^2+\\omega^2)$, etc.',
    'Ableitungsregel $\\mathcal{L}\\{f\'\\} = sF(s) - f(0)$ und Integrationsregel anwenden',
    'Rücktransformation mit Partialbruchzerlegung und Tabellenwerten durchführen',
    'Endwertsatz und Anfangswertsatz zur schnellen Überprüfung der Lösung nutzen',
  ],
  lessons: unit2Lessons,
})

// ── Unit 3: Prüfungsaufgaben ─────────────────────────────────────────────
const unit3Lessons = [
  makeLesson({
    id: 'fl-3-1',
    title: 'Fourier Prüfungsaufgaben',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      'Fourier-Reihen und Spektrum in Prüfungsaufgaben anwenden',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Prüfungsstrategie Fourier',
    intuitionContent:
      'Typisches Vorgehen:\n\n' +
      '1. Periodizität und Symmetrie prüfen (gerade $\\Rightarrow$ nur $\\cos$, ungerade $\\Rightarrow$ nur $\\sin$)\n' +
      '2. $a_0$ durch Mittelwert berechnen\n' +
      '3. $a_n$ oder $b_n$ durch Integral oder Tabelle bestimmen\n' +
      '4. Spektrum bei Fourier-Transformation: Zeitverschiebung $\\Rightarrow$ Phasendrehung, Skalierung $\\Rightarrow$ Stauchung/Streckung',
    formulaTitle: '[PRÜFUNG] Fourier-Schnellübersicht',
    formulaContent:
      '$a_0/2$ = Gleichanteil (Mittelwert)\n\n' +
      'Gerade $f(t)$ $\\Rightarrow$ $b_n = 0$. Ungerade $\\Rightarrow$ $a_n = 0$.\n\n' +
      '$$\\mathcal{F}\\{f(t)\\} = F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\,e^{-j\\omega t}\\,dt$$\n\n' +
      '**Zeitverschiebung:** $f(t-t_0) \\leftrightarrow e^{-j\\omega t_0}\\cdot F(\\omega)$',
    exercises: [
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] Gegeben ist $f(t) = 5 + 2\\cos(3t) + 4\\sin(6t)$. Welche Frequenzen treten im Spektrum auf?',
        options: [
          'Gleichanteil, $\\omega = 3$ und $\\omega = 6$',
          'Nur $\\omega = 3$ und $\\omega = 6$',
          'Alle Frequenzen',
          'Nur Gleichanteil',
        ],
        correctIndex: 0,
        explanation: 'Der Term $5$ ergibt den Gleichanteil. $\\cos(3t)$ liegt bei $\\omega = 3$, $\\sin(6t)$ bei $\\omega = 6$.',
        hints: ['Konstante → Gleichanteil.', 'Frequenz = Argument durch $t$.'],
        wrongAnswerExplanations: {
          '1': 'Die Konstante $5$ wurde ignoriert. Jede Konstante liefert im Spektrum einen Gleichanteil (Linie bei $\\omega = 0$) — darf nicht vergessen werden.',
          '2': 'Alle Frequenzen gäbe es bei einem breitbandigen Signal wie $\\delta(t)$. Hier ist das Signal aber eine **endliche** Summe weniger Sinus/Kosinus — nur diskrete Linien.',
          '3': 'Die Kosinus- und Sinusterme tragen sehr wohl bei: $2\\cos(3t)$ erzeugt Linie bei $\\omega=3$, $4\\sin(6t)$ bei $\\omega=6$. Nur-Gleichanteil wäre eine Unterschlagung.',
        },
      },
      {
        type: 'number-input',
        question: '[PRÜFUNG] $f(t) = 7 + 3\\sin(2t)$. Wie groß ist der Gleichanteil $a_0/2$?',
        correctValue: 7,
        tolerance: 0.01,
        unit: '',
        explanation: 'Gleichanteil = Zeitmittel = konstanter Term = $7$. $\\sin$-Terme haben Mittelwert 0.',
        hints: ['Nur konstanter Term zählt.', '$\\sin$ hat Mittelwert 0.'],
      },
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] Gerade Rechteckfunktion mit Periode $T$: Welche Fourier-Koeffizienten sind von vornherein $= 0$?',
        options: ['Alle $b_n$', 'Alle $a_n$', 'Nur $a_0$', 'Alle außer $b_1$'],
        correctIndex: 0,
        explanation: 'Gerade Funktion $\\Rightarrow$ nur $\\cos$-Terme. $b_n = 0$ für alle $n \\geq 1$.',
        hints: ['Gerade $\\times$ ungerade = ungerade.', 'Integral ungerader Funktion über Periode = 0.'],
        wrongAnswerExplanations: {
          '1': 'Das gilt bei **ungeraden** Funktionen (nur Sinus-Terme bleiben, $a_n = 0$). Gerade Funktionen haben dagegen nur $a_n \\neq 0$.',
          '2': 'Nur $a_0$ = 0 gilt, wenn der Mittelwert der Funktion verschwindet — ist eine **separate** Bedingung, nicht aus Geradheit ableitbar. Gerade Rechtecke haben z.B. meist $a_0 \\neq 0$.',
          '3': 'Warum sollte genau $b_1$ überleben? Bei gerader Funktion sind alle Sinus-Koeffizienten null — $b_1$ ist keine Ausnahme.',
        },
      },
      {
        type: 'true-false',
        statement: '[PRÜFUNG] Die Fourier-Transformation einer reellen, geraden Funktion $f(t)$ ist rein reell.',
        correct: true,
        explanation: 'Richtig. Gerade $\\times$ $\\cos$ = gerade (reell), gerade $\\times$ $\\sin$ = ungerade (Integral = 0, imaginärer Teil verschwindet).',
        hints: ['$e^{-j\\omega t} = \\cos - j\\sin$.', 'Ungerader Teil im Integral verschwindet.'],
      },
      {
        type: 'matching',
        question: '[PRÜFUNG] Ordne jedem Signal die zutreffende Eigenschaft zu.',
        pairs: [
          { left: 'Sinus $\\sin(\\omega_0 t)$',                  right: 'eine Frequenzlinie bei $\\omega_0$' },
          { left: 'Rechteck (symmetrisch)',                       right: 'sinc-Spektrum' },
          { left: 'Dirac $\\delta(t)$',                           right: 'flaches Spektrum' },
          { left: 'Konstante $f(t) = 1$',                         right: 'Delta bei $\\omega = 0$' },
        ],
        explanation: 'Klassische Paare — sollten in Prüfungen sofort erkannt werden.',
        hints: ['Zeit ↔ Frequenz.', 'Duale Beziehungen.'],
      },
      {
        type: 'number-input',
        question: '[PRÜFUNG] $f(t) = \\cos(10t)$ wird um $t_0 = \\pi/20$ zeitverschoben. Welche Phasendrehung erhält das Spektrum bei $\\omega = 10$? (Wert in rad)',
        correctValue: -1.5708,
        tolerance: 0.01,
        unit: 'rad',
        explanation: 'Zeitverschiebung: Phase $= -\\omega t_0 = -10 \\cdot \\pi/20 = -\\pi/2 \\approx -1{,}571$ rad.',
        hints: ['Phase $= -\\omega t_0$.', '$\\omega = 10$, $t_0 = \\pi/20$.', 'Ergibt $-\\pi/2$.'],
      },
      {
        type: 'sorting',
        question: '[PRÜFUNG] Bringe die Prüfungsschritte zur Fourier-Analyse in Reihenfolge.',
        items: [
          'Periodizität und Symmetrie identifizieren',
          'Gleichanteil $a_0/2$ berechnen (Mittelwert)',
          '$a_n$/$b_n$ über Integrale oder Tabelle bestimmen',
          'Spektrum zeichnen/beschreiben, ggf. Parseval überprüfen',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Symmetrie → Gleichanteil → Koeffizienten → Spektrum. Prüfungsschema.',
        hints: ['Symmetrie spart Integrale.', 'Spektrum ist das Endergebnis.'],
      },
    ],
    masteryQuestion: '[PRÜFUNG] Gegeben sei $f(t) = 3\\cos(2t) + \\sin(4t)$. Was ist der Gleichanteil $a_0/2$?',
    masteryOptions: ['$0$', '$3$', '$1$', '$4$'],
    correctIndex: 0,
    masteryExplanation:
      'Der Gleichanteil ist das Zeitmittel von $f(t)$ über eine Periode. ' +
      '$\\cos$ und $\\sin$ haben beide Mittelwert 0. Also: $a_0/2 = 0$.',
    masteryHints: [
      'Gleichanteil = Zeitmittel über eine Periode.',
      '$\\cos$ und $\\sin$ haben je Mittelwert 0.',
      'Summe von Sinus/Kosinus ohne Konstante $\\Rightarrow$ Mittelwert = 0.',
    ],
    masteryWrongAnswerExplanations: {
      1: '$3$ ist die Amplitude des Kosinus-Terms $3\\cos(2t)$, nicht der Gleichanteil. Der Gleichanteil (Mittelwert) von $\\cos$ ist aber $0$, daher liefert $3\\cos(2t)$ keinen DC-Anteil.',
      2: '$1$ ist die Amplitude des Sinus-Terms $\\sin(4t)$. Sinus hat ebenfalls Mittelwert $0$, also keinen DC-Anteil.',
      3: '$4$ ist die Frequenz des Sinus-Terms, nicht der Gleichanteil. Der Gleichanteil misst das Zeitmittel von $f$, nicht eine Frequenz.',
    },
    nextLessonId: 'fl-3-2',
  }),

  makeLesson({
    id: 'fl-3-2',
    title: 'Laplace Prüfungsaufgaben',
    estimatedMinutes: 22,
    isExam: true,
    learningGoals: [
      'Übertragungsfunktionen berechnen',
      'DGL per Laplace lösen',
      'Pol-Nullstellen-Stabilität beurteilen',
    ],
    createdAt: '2026-04-16',
    intuitionTitle: 'Prüfungsstrategie Laplace',
    intuitionContent:
      'Stabilität: Alle Pole (Nullstellen des Nenners) müssen negativen Realteil haben ' +
      '$\\Rightarrow$ linke Halbebene der $s$-Ebene.\n\n' +
      'Sprungantwort: $Y(s) = G(s)/s$ $\\Rightarrow$ Partialbruchzerlegung $\\Rightarrow$ Rücktransformation\n\n' +
      'Impulsantwort: $Y(s) = G(s)\\cdot 1 = G(s)$ $\\Rightarrow$ direkt rücktransformieren',
    formulaTitle: '[PRÜFUNG] Laplace-Schnellübersicht',
    formulaContent:
      '$$G(s) = \\frac{Y(s)}{U(s)} = \\frac{\\text{Zähler}}{\\text{Nenner}}$$\n\n' +
      'Pol bei $s = -a$ $\\Rightarrow$ $e^{-at}$ in der Zeitdomäne\n\n' +
      '**Stabilität:** $\\operatorname{Re}(\\text{Pole}) < 0 \\Leftrightarrow$ stabiles System\n\n' +
      '**Ableitungssatz:** $\\mathcal{L}\\{y\'\\} = s\\,Y(s) - y(0)$',
    exercises: [
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] $G(s) = \\dfrac{1}{s-2}$. Ist das System stabil?',
        options: [
          'Nein, Pol bei $s = +2$ liegt in der rechten Halbebene',
          'Ja, Pol bei $s = -2$',
          'Grenzstabil',
          'Unbestimmbar',
        ],
        correctIndex: 0,
        explanation: 'Pol bei $s = +2$ ($\\operatorname{Re} > 0$) → $e^{+2t}$ wächst unbegrenzt → **instabil**.',
        hints: ['Pol = Nullstelle des Nenners.', '$s - 2 = 0 \\Rightarrow s = +2$.', 'Rechte Halbebene = instabil.'],
        wrongAnswerExplanations: {
          '1': 'Vorzeichen-Fehler bei der Pol-Bestimmung: $s-2 = 0$ liefert $s = +2$ (nicht $-2$). Pol bei $+2$ liegt in der rechten Halbebene $\\to$ instabil.',
          '2': 'Grenzstabilität tritt nur bei Polen auf der imaginären Achse auf ($\\operatorname{Re}(s) = 0$). Hier liegt der Pol bei $+2$ (rein real, positiv) — klar instabil.',
          '3': 'Stabilität ist direkt aus der Polposition ablesbar: $s = +2$ ist eindeutig in der rechten Halbebene, also instabil. Keine Mehrdeutigkeit.',
        },
      },
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] DGL: $y\'\' + 4y = 0$, $y(0) = 1$, $y\'(0) = 0$. Was ist $Y(s)$?',
        options: [
          '$s/(s^2+4)$',
          '$1/(s^2+4)$',
          '$1/(s^2-4)$',
          '$s/(s-2)$',
        ],
        correctIndex: 0,
        explanation: 'Transformiert: $s^2 Y - s\\cdot 1 - 0 + 4Y = 0 \\Rightarrow (s^2+4)Y = s \\Rightarrow Y = s/(s^2+4)$. Rücktransform: $y(t) = \\cos(2t)$.',
        hints: ['$\\mathcal{L}\\{y\'\'\\} = s^2 Y - sy(0) - y\'(0)$.', 'Einsetzen AB.', 'Ausklammern $Y$.'],
        wrongAnswerExplanations: {
          '1': 'Hier wurde die Anfangsbedingung $y(0) = 1$ vergessen: Richtig ist $s^2 Y - s \\cdot y(0) - y\'(0) = s^2 Y - s$. Ohne den $-s$-Term erscheint $Y$ falsch als $1/(s^2+4)$ (zugehörig $\\tfrac{1}{2}\\sin(2t)$).',
          '2': 'Vorzeichen-Fehler beim Koeffizienten: $y\'\' + 4y$ ergibt Nenner $s^2 + 4$, nicht $s^2 - 4$. Ein $s^2 - 4$ würde zu $y(t) = \\cosh(2t)$ (wachsend) führen.',
          '3': 'Das ist keine sinnvolle Laplace-Darstellung für diese DGL — weder der Koeffizient $4$ noch das $s^2$ tauchen auf. Richtig: $Y = s/(s^2+4)$.',
        },
      },
      {
        type: 'number-input',
        question: '[PRÜFUNG] $G(s) = \\dfrac{4}{s^2 + 4}$. Welchen Realteil haben die Pole?',
        correctValue: 0,
        tolerance: 0.01,
        unit: '',
        explanation: 'Pole: $s^2 = -4 \\Rightarrow s = \\pm 2j$. Realteil = 0 → **grenzstabil** (Sinus-Schwingung, klingt nicht ab).',
        hints: ['Nenner = 0 lösen.', '$s = \\pm 2j$.', 'Realteil von $\\pm 2j$ ist $0$.'],
      },
      {
        type: 'true-false',
        statement: '[PRÜFUNG] Die Sprungantwort ist die Rücktransformation von $G(s)/s$.',
        correct: true,
        explanation: 'Richtig. Sprung $u(t) \\to U(s) = 1/s$, also $Y(s) = G(s) \\cdot 1/s = G(s)/s$.',
        hints: ['$\\mathcal{L}\\{u(t)\\} = 1/s$.', '$Y = G \\cdot U$.'],
      },
      {
        type: 'matching',
        question: '[PRÜFUNG] Ordne Polkonstellation ↔ Stabilität.',
        pairs: [
          { left: 'Alle Pole $\\operatorname{Re}(s) < 0$',                    right: 'stabil (klingt ab)' },
          { left: 'Ein Pol mit $\\operatorname{Re}(s) > 0$',                   right: 'instabil (wächst)' },
          { left: 'Einfache Pole auf $j\\omega$-Achse, sonst links',            right: 'grenzstabil (Schwingung)' },
          { left: 'Doppelpol auf $j\\omega$-Achse',                             right: 'instabil ($t\\sin$ wächst)' },
        ],
        explanation: 'Lage der Pole bestimmt vollständig das Stabilitätsverhalten.',
        hints: ['Realteil entscheidet.', 'Mehrfachpole auf Achse sind kritisch.'],
      },
      {
        type: 'multiple-choice',
        question: '[PRÜFUNG] $y\' + y = u(t)$, $y(0) = 0$. Wie lautet $y(t)$ für $t \\ge 0$?',
        options: [
          '$1 - e^{-t}$',
          '$e^{-t}$',
          '$1 + e^{-t}$',
          '$t\\,e^{-t}$',
        ],
        correctIndex: 0,
        explanation: 'Transformiert: $(s+1)Y = 1/s \\Rightarrow Y = 1/[s(s+1)] = 1/s - 1/(s+1) \\Rightarrow y(t) = 1 - e^{-t}$.',
        hints: ['$(s+1)Y = U = 1/s$.', 'Partialbruch: $1/[s(s+1)] = 1/s - 1/(s+1)$.', 'Rücktransform.'],
        wrongAnswerExplanations: {
          '1': 'Das ist die Impulsantwort ($U(s) = 1$, also $Y = 1/(s+1)$), nicht die Sprungantwort. Für einen Sprung $U(s) = 1/s$ folgt $Y = 1/[s(s+1)]$ mit Rücktransform $1 - e^{-t}$.',
          '2': 'Die Lösung $1 + e^{-t}$ startet bei $y(0) = 2$, verletzt also die Anfangsbedingung $y(0) = 0$. Die richtige Lösung beginnt bei $0$ und steigt auf $1$.',
          '3': '$t\\,e^{-t}$ ist die Impulsantwort eines Doppelpol-Systems (z.B. $1/(s+1)^2$). Hier liegt nur ein einfacher Pol + Sprungeingang vor.',
        },
      },
      {
        type: 'sorting',
        question: '[PRÜFUNG] Bringe die Prüfungsschritte zur Laplace-DGL-Aufgabe in Reihenfolge.',
        items: [
          'DGL in Standardform + Anfangsbedingungen notieren',
          'Laplace-Transformation anwenden, Anfangsbedingungen einsetzen',
          'Algebraisch nach $Y(s)$ auflösen und Partialbruch',
          'Rücktransformieren und Stabilität/Anfangs-/Endwert prüfen',
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Standard-Algorithmus. Ende: immer noch die Stabilität und Plausibilität prüfen.',
        hints: ['Transform → Algebra → Rücktransform.', 'Plausibilität am Schluss.'],
      },
    ],
    masteryQuestion: '[PRÜFUNG] $G(s) = \\dfrac{2}{s^2+2s+1} = \\dfrac{2}{(s+1)^2}$. Ist das System stabil?',
    masteryOptions: [
      'Ja, Pol bei $s = -1$ (doppelt, linke Halbebene)',
      'Nein, Pol bei $s = +1$',
      'Grenzstabil, da Pol auf imaginärer Achse',
      'Unbestimmbar ohne Eingangssignal',
    ],
    correctIndex: 0,
    masteryExplanation:
      'Der doppelte Pol liegt bei $s = -1$, also in der linken Halbebene ($\\operatorname{Re}(s) < 0$). ' +
      'Das System ist stabil. Zeitantwort: $g(t) = 2t\\,e^{-t}$ (klingt ab).',
    masteryHints: [
      'Stabilität: alle Pole müssen $\\operatorname{Re}(s) < 0$ haben.',
      'Pol bei $s = -1$: $\\operatorname{Re}(-1) = -1 < 0$ $\\checkmark$.',
      'Linke Halbebene = stabil, rechte Halbebene = instabil.',
    ],
    masteryWrongAnswerExplanations: {
      1: 'Vorzeichenfehler beim Faktorisieren: $s^2 + 2s + 1 = (s+1)^2$, die Nullstellen sind $s = -1$ (doppelt), nicht $+1$. Die Pole liegen daher in der **linken** Halbebene.',
      2: 'Der Pol $s = -1$ liegt **nicht** auf der imaginären Achse (das wäre $\\operatorname{Re}(s) = 0$), sondern streng links davon. Grenzstabilität wäre z.B. bei $s = \\pm j\\omega$.',
      3: 'Stabilität hängt nur von den Polen der Übertragungsfunktion ab, nicht vom Eingangssignal. Pol links → stabil, unabhängig von der Anregung.',
    },
    nextLessonId: null,
  }),
]

const unit3 = makeUnit({
  id: 'fl-unit-3',
  title: 'Prüfungsaufgaben',
  order: 3,
  unitGoals: [
    'Mehrstufige Prüfungsaufgaben mit Kombination aus Fourier-Zerlegung, Laplace und Rücktransformation',
    'Stabilität von LTI-Systemen über die Lage der Pole in der komplexen Ebene entscheiden',
    'Übertragungsfunktion $G(s)$ bilden, Antwort auf Sprung/Impuls berechnen und interpretieren',
  ],
  lessons: unit3Lessons,
})

export const fourierLaplaceTopic = {
  id: 'fourier-laplace',
  title: 'Fourier & Laplace',
  description: 'Fourier-Reihen, Fourier-Transformation und Laplace-Transformation für Ingenieure',
  subject: 'mathematics',
  icon: 'FL',
  color: 'violet',
  estimatedHours: 5,
  difficulty: 5,
  level: 'vertiefung',
  phase: 'vertiefung',
  examRelevance: 'pflicht',
  topicGoals: [
    'Periodische Signale als Fourier-Reihe $a_0/2 + \\sum (a_n\\cos + b_n\\sin)$ darstellen und Koeffizienten per Integral bestimmen',
    'Symmetrie erkennen: gerade Funktion → nur Cosinus-Anteile, ungerade → nur Sinus — spart das halbe Rechenwerk',
    'Die komplexe Fourier-Form $\\sum c_n e^{in\\omega_0 t}$ aufstellen und Amplituden-/Phasenspektrum daraus ableiten',
    'Von der Fourier-Reihe zur Fourier-Transformation übergehen und Zeit-/Frequenzbereich deuten',
    'Laplace-Transformation $\\mathcal{L}\\{f(t)\\} = F(s)$ aus Tabelle und Regeln (Linearität, Verschiebung, Ableitung) aufstellen',
    'Lineare DGL mit konstanten Koeffizienten per Laplace auf eine algebraische Gleichung in $s$ reduzieren und rücktransformieren',
  ],
  units: [unit1, unit2, unit3],
  prerequisites: ['differentialgleichungen', 'komplexe-zahlen'],
}
