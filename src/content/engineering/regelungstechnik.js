// ── regelungstechnik — Topic-Definition (kompakter Scaffold) ─────────────────

export const regelungstechnikTopicDef = 
// ─── Regelungstechnik ────────────────────────────────────────────────────
{
  topic: {
    id: 'regelungstechnik',
    title: 'Regelungstechnik',
    description: 'Regelkreis, Übertragungsfunktionen, PID-Regler und Stabilität.',
    subject: 'engineering',
    icon: 'RT',
    color: 'teal',
    estimatedHours: 5,
    difficulty: 4,
    level: 'vertiefung',
    prerequisites: ['differentialgleichungen', 'elektrotechnik'],
    phase: 'vertiefung',
    examRelevance: 'pflicht',
    topicGoals: [
      'Regelkreis (Sollwert, Regelgröße, Stellgröße, Störgröße) als Blockschaltbild korrekt aufstellen',
      'Übertragungsfunktion $G(s) = Y(s)/U(s)$ per Laplace-Transformation aus einer linearen DGL ableiten',
      'P-, I-, D-, PI- und PID-Regler nach ihrem Zeit- und Frequenzverhalten unterscheiden und einsetzen',
      'Stabilität anhand der Pollage $\\Re(s_i) < 0$ und mit Routh-Hurwitz-Kriterium beurteilen',
      'Bode-Diagramm (Amplituden- und Phasengang) lesen, Eckfrequenzen und Phasenreserve ablesen',
      'Stellgrößenbeschränkung, Totzeit und Wind-Up als typische Praxis-Störungen qualitativ einordnen',
    ],
  },
  units: [
    {
      id: 'rt-unit-1',
      title: 'Grundlagen des Regelkreises',
      description: 'Regelkreis, Grundbegriffe und Übertragungsfunktionen.',
      lessons: [
        // ── rt-1-1 ───────────────────────────────────────────────────────
        {
          id: 'rt-1-1',
          title: 'Regelkreis Grundbegriffe',
          estimatedMinutes: 12,
          learningGoals: [
            'Komponenten eines Regelkreises benennen',
            'Regelabweichung $e = w - y$ erklären',
            'Steuerung und Regelung unterscheiden',
          ],
          subGoals: [
            { label: 'Signale: Führungsgröße $w$, Regelgröße $y$, Stellgröße $u$, Regelabweichung $e = w - y$, Störgröße $z$', examRelevance: 'hoch' },
            { label: 'Regelung (geschlossener Kreis) vs. Steuerung (offener Wirkungsablauf) — nur Regelung reagiert auf Störungen', examRelevance: 'hoch' },
            { label: 'Blockschaltbild: Regler $\\to$ Stellglied $\\to$ Regelstrecke $\\to$ Messglied $\\to$ Vergleichsstelle (Rückführung)', examRelevance: 'hoch' },
            { label: 'Ziel jeder Regelung: $e \\to 0$ trotz Störungen $z$ und Parameter-Schwankungen der Strecke', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'rk-signale',  title: 'Signale: $w,y,u,e=w-y,z$',                                                            dependsOn: [] },
              { id: 'rk-vs-st',    title: 'Regelung (geschlossen) vs. Steuerung (offen) — nur Regelung reagiert auf $z$',         dependsOn: ['rk-signale'] },
              { id: 'blockschalt', title: 'Blockschaltbild: Regler→Stellglied→Strecke→Messglied→Vergleich',                       dependsOn: [] },
              { id: 'rk-ziel',     title: 'Ziel: $e\\to 0$ trotz $z$ und Parameter-Schwankungen',                                   dependsOn: ['rk-signale'] },
            ],
            subGoalConcepts: { 0: ['rk-signale'], 1: ['rk-vs-st'], 2: ['blockschalt'], 3: ['rk-ziel'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['rk-signale'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rk-signale'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['rk-signale'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rk-signale'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['rk-signale'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['rk-vs-st'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rk-vs-st'],            qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['rk-vs-st'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rk-vs-st'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['rk-vs-st'],            qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['blockschalt'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['blockschalt'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['blockschalt'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['blockschalt'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'sorting',         uses: ['blockschalt'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['rk-ziel'],             qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rk-ziel'],             qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['rk-ziel'],             qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rk-ziel'],             qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['rk-ziel'],             qty: 1 },
            ],
          },
          content: String.raw`## Regelkreis — Grundbegriffe

### Komponenten

| Komponente | Funktion |
|-----------|----------|
| Regelstrecke | Der zu regelnde Prozess |
| Regler (Controller) | Berechnet die Stellgröße |
| Stellglied | Setzt Stellgröße in physikalische Aktion um |
| Messglied | Misst die Regelgröße (Istwert) |

### Wichtige Größen

- **Führungsgröße** $w$: Sollwert (gewünschter Zustand)
- **Regelgröße** $y$: Istwert (tatsächlicher Zustand)
- **Regelabweichung:** $e = w - y$ (Soll $-$ Ist)
- **Stellgröße** $u$: Eingriff des Reglers in die Strecke

### Steuerung vs. Regelung

- **Steuerung** (offener Kreis): Kein Feedback — kann Störungen **nicht** ausregeln.
- **Regelung** (geschlossener Kreis): Istwert wird gemessen und zurückgeführt → Störungen werden automatisch korrigiert.
`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was ist die Regelabweichung $e$?',
              options: [
                '$e = w - y$ (Soll minus Ist)',
                '$e = y - w$',
                '$e = u/y$',
                '$e = w \\cdot y$',
              ],
              correctIndex: 0,
              explanation: 'Die Regelabweichung ist die Differenz aus Führungsgröße (Soll) und Regelgröße (Ist): $e = w - y$.',
              hints: [
                '$e$ = Führungsgröße $-$ Regelgröße',
                'Soll $-$ Ist',
                '$e = w - y$',
              ],
              wrongAnswerExplanations: {
                1: 'Vorzeichen vertauscht: $e = y - w$ wäre „Ist minus Soll“. Konvention ist $e = w - y$, damit bei Untererreichung ($y < w$) ein positives $e$ den Regler zum Gegensteuern bringt.',
                2: '$u/y$ macht dimensional keinen Sinn als Regelabweichung. $u$ ist die Stellgröße, $y$ die Regelgröße. Differenzbildung ist $e = w - y$, keine Division.',
                3: 'Produkt aus Soll und Ist ist keine Abweichung. Abweichung bedeutet Differenz, nicht Multiplikation: $e = w - y$.',
              },
            },
            {
              type: 'true-false',
              statement: 'Eine Steuerung (offener Kreis) kann Störungen automatisch ausregeln.',
              correct: false,
              explanation: 'Ohne Rückkopplung (Messung des Istwerts) kann nicht auf Störungen reagiert werden. Nur die Regelung (geschlossener Kreis) kompensiert Störungen.',
              hints: [
                'Steuerung hat keine Rückkopplung',
                'Nur Regelung (geschlossener Kreis) misst $y$',
                'Keine Messung → keine Störungskorrektur',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welche Aussage über Regelungen ist richtig?',
              options: [
                'Regelungen messen den Istwert und korrigieren Abweichungen automatisch',
                'Regelungen funktionieren ohne Rückkopplung',
                'Der Regler gibt immer konstante Stellgröße aus',
                'Störungen haben keinen Einfluss bei Steuerungen',
              ],
              correctIndex: 0,
              explanation: 'Regelungen sind geschlossene Kreise: Der Istwert $y$ wird gemessen, mit dem Sollwert $w$ verglichen und der Regler korrigiert $e = w - y$.',
              hints: [
                'Regelung = geschlossener Kreis',
                'Istwert wird gemessen und zurückgeführt',
                '$e = w - y \\Rightarrow$ Regler reagiert auf Abweichung',
              ],
              wrongAnswerExplanations: {
                1: 'Verwechslung Steuerung/Regelung: Die Steuerung arbeitet ohne Rückkopplung, die Regelung gerade mit Rückkopplung. Rückkopplung ist das Kernmerkmal der Regelung.',
                2: 'Nur ein sehr spezieller Fall (stationärer Zustand bei konstantem Sollwert ohne Störungen). Im Allgemeinen variiert die Stellgröße $u(t)$ je nach $e(t)$.',
                3: 'Genau umgekehrt: Bei Steuerungen wirken Störungen direkt, weil keine Rückmessung erfolgt. Regelungen kompensieren Störungen automatisch.',
              },
            },
          ],
        },
        // ── rt-1-2 ───────────────────────────────────────────────────────
        {
          id: 'rt-1-2',
          title: 'Übertragungsfunktion',
          estimatedMinutes: 15,
          learningGoals: [
            'Übertragungsfunktion $G(s) = Y(s)/U(s)$ im Laplace-Bereich definieren',
            'PT1-Glied und Verstärkung bei $s = 0$ bestimmen',
            'Führungsübertragungsfunktion $T = G_0/(1+G_0)$ berechnen',
          ],
          subGoals: [
            { label: 'Übertragungsfunktion $G(s) = Y(s)/U(s)$ nur für LTI-Systeme bei verschwindenden Anfangsbedingungen definiert', examRelevance: 'hoch' },
            { label: 'PT1-Glied: $G(s) = K/(1 + Ts)$ — Verstärkung $K$ und Zeitkonstante $T$; Sprungantwort $y(t) = K(1 - e^{-t/T})$', examRelevance: 'hoch' },
            { label: 'Statische Verstärkung = $G(0)$ — erhält man durch Einsetzen von $s = 0$ (Endwertsatz für Sprunganregung)', examRelevance: 'hoch' },
            { label: 'Serienschaltung: Übertragungsfunktionen werden multipliziert; Parallelschaltung: addiert; Rückführung: $T = G/(1+G H)$', examRelevance: 'hoch' },
            { label: 'Pole von $G(s)$ (Nullstellen des Nenners) bestimmen Stabilität: Realteil $< 0$ = stabil', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'rt-1-1', concepts: ['blockschalt'] },
            ],
            concepts: [
              { id: 'g-s',         title: 'Übertragungsfunktion $G(s)=Y(s)/U(s)$ (LTI, AB=0)',                                  dependsOn: [] },
              { id: 'pt1-glied',   title: 'PT1 $G(s)=K/(1+Ts)$, Sprungantwort $K(1-e^{-t/T})$',                                  dependsOn: ['g-s'] },
              { id: 'g-0',         title: 'Statische Verstärkung $=G(0)$',                                                       dependsOn: ['g-s'] },
              { id: 'rk-schalt',   title: 'Serie multiplizieren, parallel addieren, Rückführung $T=G/(1+GH)$',                  dependsOn: ['g-s'] },
              { id: 'pole-stab',   title: 'Pole bestimmen Stabilität: $\\operatorname{Re}<0$ = stabil',                          dependsOn: ['g-s'] },
            ],
            subGoalConcepts: { 0: ['g-s'], 1: ['pt1-glied'], 2: ['g-0'], 3: ['rk-schalt'], 4: ['pole-stab'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['g-s'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['g-s'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['g-s'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['g-s'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['g-s'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['pt1-glied'],    qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pt1-glied'],    qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['pt1-glied'],    qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pt1-glied'],    qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['pt1-glied'],    qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['g-0'],          qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['g-0'],          qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['g-0'],          qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['g-0'],          qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['g-0'],          qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['rk-schalt'],    qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rk-schalt'],    qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['rk-schalt'],    qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rk-schalt'],    qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['rk-schalt'],    qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['pole-stab'],    qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pole-stab'],    qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['pole-stab'],    qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pole-stab'],    qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['pole-stab'],    qty: 1 },
            ],
          },
          content: String.raw`## Übertragungsfunktion

Im **Laplace-Bereich** wird ein lineares System durch seine Übertragungsfunktion beschrieben:

$$G(s) = \frac{Y(s)}{U(s)}$$

### Grundglieder

| Glied | $G(s)$ | Eigenschaften |
|-------|--------|---------------|
| Proportionalglied (P) | $K$ | konstante Verstärkung |
| Integrator (I) | $K/s$ | integriert Eingang |
| PT1-Glied | $K/(1+Ts)$ | Tiefpass 1. Ordnung |
| PT2-Glied | $K/(1+2DTs+T^2s^2)$ | Tiefpass 2. Ordnung |

### Stationäre Verstärkung

Für $s \to 0$: $G(0) = K$ (statisches Verhalten)

### Schaltungen im s-Bereich

- **Reihenschaltung:** $G_\text{ges} = G_1 \cdot G_2$
- **Gegenkopplung (offene Schleife):** $G_0 = G_R \cdot G_S$
- **Führungsübertragungsfunktion:** $T(s) = \dfrac{G_0}{1 + G_0}$
`,
          exercises: [
            {
              type: 'number-input',
              question: 'PT1-Glied: $G(s) = \\frac{2}{1+0{,}5s}$. Wie groß ist die stationäre Verstärkung $K$ (bei $s \\to 0$)?',
              correctValue: 2,
              tolerance: 0.01,
              unit: '',
              explanation: 'Stationäre Verstärkung: $G(0) = K/(1+T \\cdot 0) = K = 2$.',
              hints: [
                'Stationäre Verstärkung: $s \\to 0$ einsetzen',
                '$G(0) = K/(1 + T \\cdot 0) = K$',
                '$G(0) = 2/1 = 2$',
              ],
            },
            {
              type: 'true-false',
              statement: 'Bei Reihenschaltung zweier Übertragungsglieder $G_1$ und $G_2$ gilt $G_\\text{ges} = G_1 + G_2$.',
              correct: false,
              explanation: 'Bei Reihenschaltung wird **multipliziert**: $G_\\text{ges} = G_1 \\cdot G_2$. Erst die Parallelschaltung (Überlagerung) ergibt eine Addition.',
              hints: [
                'Reihenschaltung: Ausgabe von $G_1$ ist Eingabe von $G_2$',
                '$G_\\text{ges} = G_1 \\cdot G_2$ (nicht $+$)',
                'Wie Signalkette: $Y = G_2 \\cdot (G_1 \\cdot U)$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Regler $G_R = 5$, Strecke $G_S(s) = 1/(s+2)$. Wie groß ist die Führungsübertragungsfunktion $T(0)$ bei $s = 0$?',
              correctValue: 0.714,
              tolerance: 0.005,
              unit: '',
              explanation: '$G_0(0) = 5 \\cdot (1/2) = 2{,}5$. $T(0) = 2{,}5/(1+2{,}5) = 2{,}5/3{,}5 \\approx 0{,}714$.',
              hints: [
                '$G_0 = G_R \\cdot G_S$',
                '$T = G_0/(1+G_0)$',
                'Bei $s=0$: $G_0(0) = 5 \\cdot (1/2) = 2{,}5$',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'rt-unit-2',
      title: 'Regler und Stabilität',
      description: 'PID-Regler und Stabilitätskriterien.',
      lessons: [
        // ── rt-2-1 ───────────────────────────────────────────────────────
        {
          id: 'rt-2-1',
          title: 'PID-Regler',
          estimatedMinutes: 15,
          learningGoals: [
            'P-, I- und D-Anteil des PID-Reglers erklären',
            'Wirkung der drei Anteile im Zeitbereich verstehen',
            'PID im Laplace-Bereich formulieren',
          ],
          subGoals: [
            { label: 'PID-Formel: $u(t) = K_P(e + \\frac{1}{T_I}\\int e dt + T_D \\dot e)$', examRelevance: 'hoch' },
            { label: 'P: schnell, bleibender Regelfehler; I: beseitigt Dauerfehler; D: antizipiert', examRelevance: 'hoch' },
            { label: 'PID-Laplace: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$', examRelevance: 'hoch' },
            { label: 'I-Anteil dominiert bei niedrigen Frequenzen, D-Anteil bei hohen', examRelevance: 'hoch' },
            { label: 'D rauschempfindlich → in Praxis mit Filterung: $T_D s/(1 + \\alpha T_D s)$', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'rt-1-2', concepts: ['g-s'] },
            ],
            concepts: [
              { id: 'pid-zeit',     title: 'PID $u(t)=K_P(e+\\frac{1}{T_I}\\int e\\,dt+T_D\\dot e)$',                            dependsOn: [] },
              { id: 'pid-anteile',  title: 'P schnell+Restfehler; I beseitigt Dauerfehler; D antizipiert',                          dependsOn: ['pid-zeit'] },
              { id: 'pid-laplace',  title: 'PID-Laplace $G_R(s)=K_P(1+1/(T_I s)+T_D s)$',                                          dependsOn: ['pid-zeit'] },
              { id: 'pid-frequenz', title: 'I dominiert bei tiefen, D bei hohen Frequenzen',                                        dependsOn: ['pid-anteile'] },
              { id: 'd-filter',     title: 'D rauschempfindlich → Filter $T_D s/(1+\\alpha T_D s)$',                                dependsOn: ['pid-anteile'] },
            ],
            subGoalConcepts: { 0: ['pid-zeit'], 1: ['pid-anteile'], 2: ['pid-laplace'], 3: ['pid-frequenz'], 4: ['d-filter'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['pid-zeit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pid-zeit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['pid-zeit'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pid-zeit'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['pid-zeit'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['pid-anteile'],       qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pid-anteile'],       qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['pid-anteile'],       qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pid-anteile'],       qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['pid-anteile'],       qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['pid-laplace'],       qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pid-laplace'],       qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['pid-laplace'],       qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pid-laplace'],       qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['pid-laplace'],       qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['pid-frequenz'],      qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pid-frequenz'],      qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['pid-frequenz'],      qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pid-frequenz'],      qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['pid-frequenz'],      qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['d-filter'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['d-filter'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['d-filter'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['d-filter'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['d-filter'],          qty: 1 },
            ],
          },
          content: String.raw`## PID-Regler

Der PID-Regler kombiniert drei Anteile:

$$u(t) = K_P \!\left(e(t) + \frac{1}{T_I}\int e\,\mathrm{d}t + T_D\,\frac{\mathrm{d}e}{\mathrm{d}t}\right)$$

| Anteil | Formel | Wirkung | Nachteil |
|--------|--------|---------|----------|
| **P** (Proportional) | $u_P = K_P \cdot e$ | schnelle Reaktion | bleibender Dauerfehler |
| **I** (Integral) | $u_I = K_I \int e\,\mathrm{d}t$ | löscht Dauerfehler | träge, Überschwingen |
| **D** (Differential) | $u_D = K_D \cdot \dot{e}$ | antizipiert Trends | rauschempfindlich |

### Im Laplace-Bereich

$$G_R(s) = K_P\!\left(1 + \frac{1}{T_I s} + T_D s\right)$$

- Für $s \to 0$ (DC): I-Anteil dominiert ($1/(T_I s) \to \infty$)
- Für $s \to \infty$ (hohe Frequenz): D-Anteil dominiert ($T_D s \to \infty$)
`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welcher Regleranteil beseitigt den stationären Fehler (bleibende Regelabweichung)?',
              options: [
                'I-Anteil (Integral)',
                'P-Anteil',
                'D-Anteil',
                'Keiner davon',
              ],
              correctIndex: 0,
              explanation: 'Der I-Anteil integriert den Fehler auf. Solange $e \\neq 0$, wächst der I-Anteil und zwingt $e \\to 0$ im stationären Zustand.',
              hints: [
                'I-Anteil integriert den Fehler auf',
                'Solange $e \\neq 0$, wächst der I-Anteil',
                'I-Anteil zwingt $e \\to 0$ im stationären Zustand',
              ],
              wrongAnswerExplanations: {
                1: 'Ein reiner P-Regler hinterlässt stationäre Regelabweichung: $e_\\text{stat} = 1/(1+K_0) \\neq 0$. Nur bei $K_P \\to \\infty$ wird $e \\to 0$ — praktisch nicht realisierbar.',
                2: 'D reagiert auf $\\mathrm{d}e/\\mathrm{d}t$. Bei konstantem stationärem Fehler ist $\\mathrm{d}e/\\mathrm{d}t = 0$ — der D-Anteil trägt nichts zur Beseitigung des stationären Fehlers bei.',
                3: 'Falsch — der I-Anteil erledigt genau das. Er ist essentiell für stationäre Genauigkeit.',
              },
            },
            {
              type: 'true-false',
              statement: 'Der D-Anteil eines PID-Reglers reagiert auf den aktuellen Fehlerwert $e(t)$.',
              correct: false,
              explanation: 'Der D-Anteil reagiert auf die **Änderungsrate** $\\mathrm{d}e/\\mathrm{d}t$ — er antizipiert Trends im Fehler, nicht den Fehler selbst.',
              hints: [
                'D = Differential = Ableitung',
                'D-Anteil $\\propto \\mathrm{d}e/\\mathrm{d}t$, nicht $e$ selbst',
                'Schnelle Fehleränderung → große D-Wirkung',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] PID im Laplace-Bereich: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$. Was dominiert bei hohen Frequenzen ($s \\to \\infty$)?',
              options: [
                'D-Anteil ($T_D s \\to \\infty$)',
                'I-Anteil ($1/(T_I s) \\to 0$)',
                'P-Anteil',
                'Alle gleich',
              ],
              correctIndex: 0,
              explanation: 'Für $s \\to \\infty$: $T_D s \\to \\infty$ dominiert, $1/(T_I s) \\to 0$ verschwindet. D-Anteil dominiert bei schnellen Änderungen.',
              hints: [
                'Für $s \\to \\infty$: $T_D s \\to \\infty$ dominiert',
                '$1/(T_I s) \\to 0$ (verschwindet)',
                'D ist dominant bei schnellen Änderungen (hohen Frequenzen)',
              ],
              wrongAnswerExplanations: {
                1: 'Der I-Anteil geht für $s \\to \\infty$ gegen null ($1/(T_I s) \\to 0$), dominiert also nicht bei hohen Frequenzen. Er dominiert bei niedrigen Frequenzen ($s \\to 0$).',
                2: 'Der P-Anteil ist konstant ($K_P$), während $T_D s$ unbeschränkt wächst. Für sehr grosse $s$ überwiegt der D-Term daher über P.',
                3: 'Die drei Terme $K_P$, $K_P/(T_I s)$, $K_P T_D s$ verhalten sich bei $s \\to \\infty$ sehr unterschiedlich — D-Term $\\to \\infty$, I-Term $\\to 0$, P bleibt konstant.',
              },
            },
          ],
        },
        // ── rt-2-2 ───────────────────────────────────────────────────────
        {
          id: 'rt-2-2',
          title: 'Stabilität',
          estimatedMinutes: 14,
          learningGoals: [
            'Stabilitätsbedingung (Pole in linker Halbebene) formulieren',
            'Hurwitz-Kriterium erklären',
            'Phasenrand und Amplitudenrand im Bodediagramm interpretieren',
          ],
          subGoals: [
            { label: 'Stabilitätsbedingung: alle Pole in linker s-Halbebene ($\\text{Re}(s_i) < 0$)', examRelevance: 'hoch' },
            { label: 'Hurwitz notwendig: alle Koeffizienten $>0$ (kein Vorzeichenwechsel)', examRelevance: 'hoch' },
            { label: 'Hurwitz hinreichend ab $n \\geq 3$: Hurwitz-Determinanten $> 0$ prüfen', examRelevance: 'hoch' },
            { label: 'Phasenrand $\\varphi_R \\geq 30°$, Amplitudenrand $A_R \\geq 6$ dB (Praxisrichtwerte)', examRelevance: 'hoch' },
            { label: 'Pole auf $j\\omega$-Achse: grenzstabil (ungedämpfte Schwingung)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'rt-1-2', concepts: ['pole-stab'] },
            ],
            concepts: [
              { id: 'stab-pol-rt', title: 'Stabilität: alle Pole in linker s-Halbebene',                                          dependsOn: [] },
              { id: 'hurwitz-not', title: 'Hurwitz notwendig: alle Koeffizienten $>0$',                                            dependsOn: ['stab-pol-rt'] },
              { id: 'hurwitz-det', title: 'Hurwitz-Determinanten $>0$ ab $n\\ge 3$',                                                dependsOn: ['hurwitz-not'] },
              { id: 'phi-amp-r',   title: 'Phasen-/Amplitudenrand $\\varphi_R\\ge 30°$, $A_R\\ge 6$ dB',                              dependsOn: [] },
              { id: 'jomega-pole', title: 'Pole auf $j\\omega$-Achse: grenzstabil',                                                  dependsOn: ['stab-pol-rt'] },
            ],
            subGoalConcepts: { 0: ['stab-pol-rt'], 1: ['hurwitz-not'], 2: ['hurwitz-det'], 3: ['phi-amp-r'], 4: ['jomega-pole'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['stab-pol-rt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['stab-pol-rt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['stab-pol-rt'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['stab-pol-rt'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['stab-pol-rt'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['hurwitz-not'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hurwitz-not'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['hurwitz-not'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hurwitz-not'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['hurwitz-not'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['hurwitz-det'],          qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hurwitz-det'],          qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['hurwitz-det'],          qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hurwitz-det'],          qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['hurwitz-det'],          qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['phi-amp-r'],            qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['phi-amp-r'],            qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['phi-amp-r'],            qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['phi-amp-r'],            qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['phi-amp-r'],            qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['jomega-pole'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['jomega-pole'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['jomega-pole'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['jomega-pole'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['jomega-pole'],          qty: 1 },
            ],
          },
          content: String.raw`## Stabilität von Regelkreisen

### Grundbedingung

Ein System ist **stabil**, wenn alle Pole der geschlossenen Schleife **negativen Realteil** haben (linke $s$-Halbebene):

$$\text{Re}(s_i) < 0 \quad \forall i$$

Pole in der rechten Halbebene → instabil (Ausgabe wächst unbegrenzt).

### Hurwitz-Kriterium

Für Polynome $a_n s^n + \ldots + a_1 s + a_0$:
- **Notwendig:** Alle Koeffizienten $a_i > 0$
- **Hinreichend (für $n \geq 3$):** Hurwitz-Determinanten müssen positiv sein

### Stabilität im Bodediagramm

- **Phasenrand** $\varphi_R \geq 30°$: gute Stabilitätsreserve
- **Amplitudenrand** $A_R \geq 6\,\text{dB}$: gute Amplitudenreserve

Zu kleiner Phasenrand → starkes Überschwingen oder Instabilität.
`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Ein System ist stabil, wenn alle Pole der Übertragungsfunktion ...',
              options: [
                'negativen Realteil haben (linke Halbebene)',
                'positiven Realteil haben',
                'auf der imaginären Achse liegen',
                'betragsmäßig $< 1$ sind',
              ],
              correctIndex: 0,
              explanation: 'Pol bei $s = a + jb$: stabil genau dann, wenn $a < 0$. Dann klingt $e^{at} \\to 0$ ab.',
              hints: [
                'Pol bei $s = a + jb$: stabil wenn $a < 0$',
                'Linke $s$-Halbebene → Zeitantwort klingt ab',
                '$e^{at} \\to 0$ nur wenn $a < 0$',
              ],
              wrongAnswerExplanations: {
                1: 'Genau umgekehrt: Positiver Realteil bedeutet $e^{at}$ wächst unbegrenzt — das System ist instabil.',
                2: 'Pole auf der imaginären Achse ($\\text{Re}(s) = 0$) liefern ungedämpfte Schwingungen (Grenzfall). Streng genommen ist das grenzstabil, nicht asymptotisch stabil.',
                3: 'Das $|s| < 1$-Kriterium gilt für zeitdiskrete Systeme (Pole innerhalb des Einheitskreises). Für zeitkontinuierliche Systeme geht es um den Realteil, nicht den Betrag.',
              },
            },
            {
              type: 'true-false',
              statement: 'Ein Phasenrand von $45°$ gilt als gute Stabilitätsreserve.',
              correct: true,
              explanation: 'Empfohlen: $\\varphi_R \\geq 30°$. Ein Phasenrand von $45°$ liefert moderates Überschwingen und ist in der Praxis gut akzeptiert.',
              hints: [
                'Empfehlung: $\\varphi_R \\geq 30°$',
                '$\\varphi_R = 45°$ → moderates Überschwingen',
                '$\\varphi_R < 0° \\Rightarrow$ instabil',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] System 3. Ordnung: Nenner $2s^3 + 3s^2 + s + k$. Welche Aussage zur Hurwitz-Bedingung ist richtig?',
              options: [
                'Notwendig: alle Koeffizienten positiv; hinreichend braucht Hurwitz-Determinante',
                'Alle Koeffizienten positiv ist hinreichend für Stabilität',
                '$k$ hat keinen Einfluss auf Stabilität',
                'Nur der führende Koeffizient zählt',
              ],
              correctIndex: 0,
              explanation: 'Für $n \\geq 3$ ist das positive Vorzeichen aller Koeffizienten nur **notwendig** — die Hurwitz-Determinante muss zusätzlich geprüft werden.',
              hints: [
                'Alle Koeffizienten $> 0$ ist nur notwendig, nicht hinreichend',
                'Für $n \\geq 3$ braucht man die Hurwitz-Determinante',
                'Für $n = 1, 2$ reicht Koeffizientencheck',
              ],
              wrongAnswerExplanations: {
                1: 'Für $n \\geq 3$ reicht das nicht: Beispiel $s^3 + s^2 + s + 6$ hat alle positiven Koeffizienten, aber Pole mit Re(s) > 0. Man braucht zusätzlich die Hurwitz-Determinanten.',
                2: '$k$ ist der konstante Koeffizient $a_0$; er beeinflusst sowohl die notwendige Bedingung ($k > 0$) als auch die Hurwitz-Determinante direkt.',
                3: 'Alle Koeffizienten sind relevant: Erst die notwendige Bedingung ($a_i > 0$) und dann die Hurwitz-Determinanten verwenden alle Werte, nicht nur den führenden.',
              },
            },
          ],
        },
        // ── rt-2-3 ───────────────────────────────────────────────────────
        {
          id: 'rt-2-3',
          title: 'Bodediagramm & Phasengang',
          estimatedMinutes: 15,
          learningGoals: [
            'Amplituden- und Phasengang typischer Übertragungsglieder kennen (P, I, D, PT1)',
            'Grenzfrequenz und $-3\\,\\text{dB}$-Punkt interpretieren',
            'Phasenreserve als Stabilitätsmaß lesen',
          ],
          subGoals: [
            { label: 'Amplitudengang in dB: $A_\\text{dB} = 20 \\log_{10}|G|$', examRelevance: 'hoch' },
            { label: 'Grundbausteine: P $0°$; I $-90°$, $-20$ dB/Dek; D $+90°$, $+20$ dB/Dek', examRelevance: 'hoch' },
            { label: 'PT1 Grenzfrequenz $\\omega_g = 1/T$, dort $|G| = -3$ dB', examRelevance: 'hoch' },
            { label: 'Phasenreserve: $\\varphi_R = 180° + \\varphi(\\omega_D)$ bei $|G_0| = 0$ dB', examRelevance: 'hoch' },
            { label: 'Stabilitätsreserven: $\\varphi_R > 30°$ akzeptabel, $> 60°$ sehr gut', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'rt-1-2', concepts: ['pt1-glied'] },
              { lessonId: 'rt-2-2', concepts: ['phi-amp-r'] },
            ],
            concepts: [
              { id: 'a-db',         title: 'Amplitude in dB: $A_{\\text{dB}}=20\\log_{10}|G|$',                                  dependsOn: [] },
              { id: 'p-i-d-bode',   title: 'P 0°; I $-90°$, $-20$ dB/Dek; D $+90°$, $+20$ dB/Dek',                                 dependsOn: [] },
              { id: 'pt1-omega-g',  title: 'PT1 $\\omega_g=1/T$, dort $|G|=-3$ dB',                                                  dependsOn: [] },
              { id: 'phasenres',    title: 'Phasenreserve $\\varphi_R=180°+\\varphi(\\omega_D)$ bei $|G_0|=0$ dB',                  dependsOn: [] },
              { id: 'reserven-bode', title: '$\\varphi_R>30°$ akzeptabel, $>60°$ sehr gut',                                          dependsOn: ['phasenres'] },
            ],
            subGoalConcepts: { 0: ['a-db'], 1: ['p-i-d-bode'], 2: ['pt1-omega-g'], 3: ['phasenres'], 4: ['reserven-bode'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['a-db'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['a-db'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['a-db'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['a-db'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['a-db'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['p-i-d-bode'],    qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['p-i-d-bode'],    qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['p-i-d-bode'],    qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['p-i-d-bode'],    qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['p-i-d-bode'],    qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['pt1-omega-g'],   qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pt1-omega-g'],   qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['pt1-omega-g'],   qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pt1-omega-g'],   qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['pt1-omega-g'],   qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['phasenres'],     qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['phasenres'],     qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['phasenres'],     qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['phasenres'],     qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['phasenres'],     qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['reserven-bode'], qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['reserven-bode'], qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['reserven-bode'], qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['reserven-bode'], qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['reserven-bode'], qty: 1 },
            ],
          },
          content: String.raw`## Bodediagramm

Das **Bodediagramm** zerlegt die Übertragungsfunktion $G(j\omega)$ in zwei getrennte Kurven über der Frequenz (logarithmische $\omega$-Achse):

- **Amplitudengang** $|G(j\omega)|$ in Dezibel: $\;A_{\text{dB}} = 20 \cdot \log_{10}|G|$
- **Phasengang** $\varphi(\omega) = \arg(G(j\omega))$

### Grundbausteine

| Glied | Amplitudengang | Phasengang |
|---|---|---|
| P ($G = K$) | $20\log K$ (konstant) | $0°$ |
| I ($G = 1/(T_I s)$) | $-20\,\text{dB/Dek}$ | $-90°$ |
| D ($G = T_D s$) | $+20\,\text{dB/Dek}$ | $+90°$ |
| PT1 ($G = 1/(1+Ts)$) | $0$ dB unter $\omega_g$, $-20\,\text{dB/Dek}$ darüber | $0°$ bis $-90°$ |

### Grenzfrequenz ($-3\,\text{dB}$-Punkt)

Bei einem PT1-Tiefpass fällt der Betrag bei $\omega = \omega_g = 1/T$ auf $1/\sqrt{2} \approx 0{,}707$ ab — das sind genau $-3\,\text{dB}$. Ab der Grenzfrequenz fällt die Amplitude asymptotisch mit $-20\,\text{dB/Dek}$.

### Phasenreserve

Die **Phasenreserve** $\varphi_R$ ist der Abstand des Phasengangs von $-180°$ bei der Durchtrittsfrequenz $\omega_D$ (dort, wo $|G_0(j\omega_D)| = 1 = 0\,\text{dB}$):

$$\varphi_R = 180° + \varphi(\omega_D)$$

**Stabilitätseinschätzung:**
- $\varphi_R > 60°$: sehr gute Reserve, langsam aber sicher
- $30° \le \varphi_R \le 60°$: guter Kompromiss, typisch für Auslegungen
- $0° < \varphi_R < 30°$: starkes Überschwingen
- $\varphi_R \le 0°$: System ist instabil`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche Steigung hat der Amplitudengang eines reinen I-Gliedes ($G(s) = 1/(T_I s)$) im Bodediagramm?',
              options: [
                '$-20\\,\\text{dB}$ pro Dekade',
                '$+20\\,\\text{dB}$ pro Dekade',
                '$-40\\,\\text{dB}$ pro Dekade',
                'konstant $0\\,\\text{dB}$',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** $|G(j\\omega)| = 1/(T_I \\omega)$, also $A_\\text{dB} = -20\\log_{10}(T_I \\omega)$.

**Rechnung:** $\\omega$ wird um Faktor $10$ erhöht → $A_\\text{dB}$ sinkt um $20\\,\\text{dB}$. Steigung: $-20\\,\\text{dB/Dek}$.

**Probe:** Bei $\\omega = 1/T_I$ ist $|G| = 1$, also $0\\,\\text{dB}$. Bei $\\omega = 10/T_I$: $|G| = 0{,}1$, also $-20\\,\\text{dB}$.

**Typischer Fehler:** I-Glied mit D-Glied verwechseln — D-Glied steigt mit $+20\\,\\text{dB/Dek}$.`,
              hints: [
                '$|G(j\\omega)| = 1/(T_I \\omega)$ — der Betrag fällt mit $1/\\omega$.',
                'In dB: $-20 \\log_{10}(T_I \\omega)$.',
                'Eine Dekade Frequenz mehr → $-20\\,\\text{dB}$.',
              ],
              wrongAnswerExplanations: {
                1: '$+20\\,\\text{dB/Dek}$ beschreibt ein D-Glied, nicht ein I-Glied. Das I-Glied integriert — je höher $\\omega$, desto kleiner der Ausgang.',
                2: '$-40\\,\\text{dB/Dek}$ entspricht einem $1/s^2$-Verhalten (z.B. zwei kaskadierte I-Glieder oder ein PT2 oberhalb der Grenzfrequenz), nicht einem einzelnen I-Glied.',
                3: 'Konstant $0\\,\\text{dB}$ gilt nur für ein reines P-Glied. Ein I-Glied verstärkt tiefe Frequenzen und dämpft hohe — nicht konstant.',
              },
            },
            {
              type: 'number-input',
              question: 'Ein RC-Tiefpass (PT1) hat die Grenzfrequenz $f_g = 1\\,\\text{kHz}$. Wie groß ist die Verstärkung $|G|$ in Dezibel bei $f = f_g$?',
              correctValue: -3,
              tolerance: 0.2,
              unit: 'dB',
              explanation: `**Ansatz:** Bei der Grenzfrequenz hat ein PT1 den Betrag $|G| = 1/\\sqrt{2} \\approx 0{,}707$.

**Rechnung:** $A_\\text{dB} = 20 \\log_{10}(1/\\sqrt{2}) = -20 \\log_{10}\\sqrt{2} = -10 \\log_{10}(2) \\approx -3\\,\\text{dB}$.

**Probe:** Deshalb heißt $f_g$ auch **$-3\\,\\text{dB}$-Punkt**. Die Leistung ist dort halbiert ($10\\log(1/2) = -3\\,\\text{dB}$).

**Typischer Fehler:** $-6\\,\\text{dB}$ (Halbierung der Amplitude) mit $-3\\,\\text{dB}$ (Halbierung der Leistung) verwechseln.`,
              hints: [
                'PT1 bei $\\omega = \\omega_g$: Betrag $= 1/\\sqrt{2}$.',
                '$20 \\log_{10}(1/\\sqrt{2}) = -10 \\log_{10}(2)$.',
                '$\\log_{10}(2) \\approx 0{,}301$, also $\\approx -3\\,\\text{dB}$.',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Im Bodediagramm des offenen Regelkreises $G_0$ wird bei der Durchtrittsfrequenz $\\omega_D$ (wo $|G_0| = 0\\,\\text{dB}$) der Phasenwert $\\varphi(\\omega_D) = -160°$ abgelesen. Welche Aussage zur Stabilität ist korrekt?',
              options: [
                'Phasenreserve $\\varphi_R = 20°$ — stabil, aber mit starkem Überschwingen',
                'Phasenreserve $\\varphi_R = 340°$ — sehr komfortabel stabil',
                'System instabil, da Phase $< -180°$',
                'Phasenreserve spielt für die Stabilität keine Rolle',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** Phasenreserve $\\varphi_R = 180° + \\varphi(\\omega_D)$.

**Rechnung:** $\\varphi_R = 180° + (-160°) = 20°$. Das ist **positiv** → System stabil, aber nahe an der Instabilitätsgrenze.

**Probe:** Praxis-Richtwert: $\\varphi_R \\ge 30°$ für brauchbaren Betrieb, $\\ge 60°$ für sehr gutmütiges Einschwingen. $20°$ ergibt Überschwingen um $50\\%$ oder mehr.

**Typischer Fehler:** $\\varphi_R$ als Betragsdifferenz der Winkel interpretieren — es ist ein signierter Zusatzwinkel zu $-180°$. $-160°$ liegt $20°$ „über" $-180°$, daher $\\varphi_R = +20°$.`,
              hints: [
                'Definition: $\\varphi_R = 180° + \\varphi(\\omega_D)$.',
                '$180° + (-160°) = 20°$.',
                'Positiv → stabil, $> 30°$ wäre aber empfehlenswert.',
              ],
              wrongAnswerExplanations: {
                1: '$340°$ entsteht, wenn man $180° - (-160°)$ rechnet. Die Formel ist $\\varphi_R = 180° + \\varphi(\\omega_D)$ mit Vorzeichen — hier $180° + (-160°) = 20°$.',
                2: 'Die Phase liegt bei $-160°$, nicht unter $-180°$. $-160°$ ist weniger negativ als $-180°$, also $20°$ Reserve. Ein Phasenwert $< -180°$ (etwa $-200°$) wäre instabil.',
                3: 'Phasenreserve ist gerade **das** wichtigste Stabilitätsmaß im Frequenzbereich. Sie quantifiziert, wie viel zusätzliche Phasenverzögerung das System verträgt, bevor es instabil wird.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'rt-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Regelungstechnik-Aufgaben.',
      lessons: [
        // ── rt-3-1 ───────────────────────────────────────────────────────
        {
          id: 'rt-3-1',
          title: 'Regelkreis & PID Prüfungsaufgaben',
          estimatedMinutes: 22,
          learningGoals: [
            'Stationäre Regelabweichung beim P-Regler berechnen',
            'Führungsübertragungsfunktion klausurfertig anwenden',
            'Systemtyp und Rampenfolge einordnen',
          ],
          subGoals: [
            { label: 'Führungs-Übertragungsfunktion: $T(s) = G_0/(1+G_0)$ mit $G_0 = G_R G_S$', examRelevance: 'hoch' },
            { label: 'Stationärer Regelfehler P-Regler: $e_\\text{stat} = 1/(1+K_0)$', examRelevance: 'hoch' },
            { label: 'I-Anteil erzwingt $e_\\text{stat} = 0$ bei konstantem Sollwert', examRelevance: 'hoch' },
            { label: 'Typ $k$ eines Systems: Anzahl der Integratoren in $G_0$; bestimmt Folgevermögen', examRelevance: 'mittel' },
            { label: 'Rampenfolge: Typ 0 dauerhafter Fehler, Typ 1 Ausgleich, Typ 2 Beschleunigungsfolge', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'rt-1-2', concepts: ['g-s', 'rk-schalt'] },
              { lessonId: 'rt-2-1', concepts: ['pid-anteile'] },
            ],
            concepts: [
              { id: 'fuehrungs-t',  title: 'Führungs-ÜTF $T(s)=G_0/(1+G_0)$ mit $G_0=G_R G_S$',                                  dependsOn: [] },
              { id: 'e-stat-p',     title: 'Stationärer Regelfehler P: $e_{\\text{stat}}=1/(1+K_0)$',                              dependsOn: [] },
              { id: 'i-null-fehler', title: 'I-Anteil erzwingt $e_{\\text{stat}}=0$ bei konstantem Sollwert',                       dependsOn: [] },
              { id: 'system-typ',   title: 'Typ $k$: Anzahl Integratoren in $G_0$',                                                  dependsOn: [] },
              { id: 'rampenfolge',  title: 'Rampenfolge: Typ 0 dauerhafter Fehler, Typ 1 Ausgleich, Typ 2 Beschl.-Folge',             dependsOn: ['system-typ'] },
            ],
            subGoalConcepts: { 0: ['fuehrungs-t'], 1: ['e-stat-p'], 2: ['i-null-fehler'], 3: ['system-typ'], 4: ['rampenfolge'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fuehrungs-t'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fuehrungs-t'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['fuehrungs-t'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fuehrungs-t'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['fuehrungs-t'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['e-stat-p'],             qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-stat-p'],             qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['e-stat-p'],             qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-stat-p'],             qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['e-stat-p'],             qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['i-null-fehler'],        qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['i-null-fehler'],        qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['i-null-fehler'],        qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['i-null-fehler'],        qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['i-null-fehler'],        qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['system-typ'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['system-typ'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['system-typ'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['system-typ'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['system-typ'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['rampenfolge'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rampenfolge'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['rampenfolge'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rampenfolge'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['rampenfolge'],          qty: 1 },
            ],
          },
          content: String.raw`## [PRÜFUNG] Regelungstechnik — Klausuraufgaben

### Formeln auf einen Blick

**Führungsübertragungsfunktion:**
$$T(s) = \frac{G_0(s)}{1 + G_0(s)}, \quad G_0 = G_R \cdot G_S$$

**Stationäre Regelverstärkung (P-Regler):**
$$K_0 = K_P \cdot G_S(0), \quad e_\text{stat} = \frac{1}{1 + K_0}$$

**PID im Laplace-Bereich:**
$$G_R(s) = K_P\!\left(1 + \frac{1}{T_I s} + T_D s\right)$$

**Stabilität:** Alle Pole von $T(s)$ müssen $\text{Re}(s) < 0$ haben.
`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] P-Regler $K_P = 10$, Strecke $G_S(s) = 1/(s+1)$. Wie groß ist die bleibende Regelabweichung $e_\\text{stat}$ für einen Einheitssprung?',
              correctValue: 0.091,
              tolerance: 0.003,
              unit: '',
              explanation: '$K_0 = K_P \\cdot G_S(0) = 10 \\cdot 1 = 10$. $e_\\text{stat} = 1/(1+K_0) = 1/11 \\approx 0{,}091$.',
              hints: [
                '$K_0 = K_P \\cdot G_S(0) = 10 \\cdot 1 = 10$',
                '$e_\\text{stat} = 1/(1 + K_0)$',
                '$1/(1+10) = 1/11 \\approx 0{,}091$',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] PT1-Glied: $G(s) = 3/(1+2s)$. Wie groß ist die Verstärkung bei $f = 0\\,\\text{Hz}$ (DC)?',
              correctValue: 3,
              tolerance: 0.01,
              unit: '',
              explanation: 'DC-Verstärkung: $s = 0$ einsetzen: $G(0) = 3/(1+0) = 3$.',
              hints: [
                'DC-Verstärkung: $s = 0$ einsetzen',
                '$G(0) = 3/(1+0) = 3$',
                'Stationärer Wert des PT1-Glieds',
              ],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welcher Regler-Typ gewährleistet stationäre Genauigkeit bei einem Rampeneingang?',
              options: [
                'PI-Regler oder I²-Regler (2 Integratoren in offener Schleife)',
                'P-Regler allein',
                'D-Regler allein',
                'PD-Regler',
              ],
              correctIndex: 0,
              explanation: 'Für Rampenfolge braucht der offene Kreis mindestens 2 Integratoren (Systemtyp 2). Ein PI-Regler liefert einen Integrator, ein reiner I²-Regler zwei.',
              hints: [
                'Rampe = Integral des Sprungs',
                'Systemtyp muss um 1 erhöht werden',
                'Für Rampe: mindestens 2 Integratoren in $G_0$',
              ],
              wrongAnswerExplanations: {
                1: 'Ein reiner P-Regler hat keinen Integrator. Für Rampenfolge braucht man mindestens Typ 2 (zwei Integratoren) — ein P-Regler erreicht das nur, wenn die Strecke schon zwei Integratoren enthält.',
                2: 'Ein D-Regler differenziert — er senkt den Systemtyp statt ihn zu erhöhen. Für Rampenfolge ist er ungeeignet.',
                3: 'PD = P + D enthält keinen Integrator. Er liefert kein zusätzliches $1/s$ in $G_0$, also keine Verbesserung der Rampenfolge.',
              },
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] Ein stabiler Regelkreis hat alle Pole der Führungsübertragungsfunktion $T(s)$ in der linken $s$-Halbebene.',
              correct: true,
              explanation: '$T = G_0/(1+G_0)$. Die Pole von $T$ sind die Nullstellen von $1 + G_0 = 0$. Stabilität: alle Pole mit $\\text{Re}(s) < 0$.',
              hints: [
                '$T = G_0/(1+G_0)$',
                'Pole von $T$ = Nullstellen von $1 + G_0$',
                'Stabil: alle Pole mit $\\text{Re}(s) < 0$',
              ],
            },
          ],
        },
      ],
    },
  ],
}

