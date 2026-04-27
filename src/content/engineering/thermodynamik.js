// ── thermodynamik — Topic-Definition (kompakter Scaffold) ─────────────────

export const thermodynamikTopicDef = 
{
  topic: {
    id: 'thermodynamik',
    title: 'Thermodynamik',
    description: 'Zustandsgrößen, ideale Gase, Hauptsätze und Kreisprozesse.',
    subject: 'engineering',
    icon: 'THD',
    color: 'orange',
    estimatedHours: 7,
    difficulty: 4,
    level: 'vertiefung',
    prerequisites: ['algebra'],
    phase: 'semester-2',
    examRelevance: 'pflicht',
    topicGoals: [
      'Zustandsgrößen $p$, $V$, $T$, $m$ klar von Prozessgrößen $Q$, $W$ unterscheiden — Einheiten konsistent halten',
      'Ideale Gasgleichung $p\\,V = m\\,R_s\\,T$ sicher nach jeder Größe auflösen; $R_s$ aus molarer Masse bestimmen',
      'Isochor, isobar, isotherm und adiabat per pV- und Ts-Diagramm qualitativ skizzieren und rechnerisch behandeln',
      '1. Hauptsatz $dU = \\delta Q - \\delta W$ in passender Vorzeichenkonvention (System-/Umgebungssicht) schreiben',
      '2. Hauptsatz: Carnot-Wirkungsgrad $\\eta_C = 1 - T_\\text{k}/T_\\text{w}$ als obere Schranke aller Wärmekraftmaschinen begreifen',
      'Einfache Kreisprozesse (Otto, Diesel, Carnot) im pV-Diagramm durchrechnen und Wirkungsgrad interpretieren',
    ],
  },
  units: [
    {
      id: 'thermo-unit-1',
      title: 'Zustandsgrößen',
      description: 'Druck, Temperatur, Volumen und ideale Gasgleichung.',
      lessons: [
        {
          id: 'thermo-1-1',
          title: 'Ideales Gas',
          learningGoals: ['pV = nRT anwenden', 'Temperatur in Kelvin verwenden'],
          subGoals: [
            { label: '$pV = nRT$ mit $R = 8{,}314\\,\\mathrm{J/(mol\\,K)}$; alternativ $p V = m R_s T$ mit spez. Gaskonstante', examRelevance: 'hoch' },
            { label: 'Temperatur **immer** in Kelvin: $T[K] = T[°C] + 273{,}15$', examRelevance: 'hoch' },
            { label: 'Einheiten: $p$ in Pa, $V$ in m³, $n$ in mol — keine Liter/bar in die Grundformel', examRelevance: 'hoch' },
            { label: '$R_s = R/M$ aus molarer Masse $M$ des Gases (Luft: $M \\approx 28{,}96\\,\\mathrm{g/mol}$)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'pv-nrt',     title: 'Ideales Gas $pV=nRT$, $R=8{,}314$ J/(mol·K)',                                          dependsOn: [] },
              { id: 't-kelvin',   title: 'Temperatur in Kelvin: $T[K]=T[°C]+273{,}15$',                                            dependsOn: [] },
              { id: 'einheiten-pv', title: 'Pa, m³, mol — keine Liter/bar in Grundformel',                                          dependsOn: ['pv-nrt'] },
              { id: 'spez-r',     title: 'Spezifische Gaskonstante $R_s=R/M$',                                                      dependsOn: ['pv-nrt'] },
            ],
            subGoalConcepts: { 0: ['pv-nrt'], 1: ['t-kelvin'], 2: ['einheiten-pv'], 3: ['spez-r'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['pv-nrt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pv-nrt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['pv-nrt'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pv-nrt'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['pv-nrt'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['t-kelvin'],        qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['t-kelvin'],        qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['t-kelvin'],        qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['t-kelvin'],        qty: 1, note: '°C in pV=nRT eingesetzt' },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['t-kelvin'],        qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['einheiten-pv'],    qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheiten-pv'],    qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['einheiten-pv'],    qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheiten-pv'],    qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['einheiten-pv'],    qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['spez-r'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['spez-r'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['spez-r'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['spez-r'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['spez-r'],          qty: 1 },
            ],
          },
          content: String.raw`Für ideale Gase gilt:

$$pV = nRT$$

Wichtig: Temperatur immer in Kelvin einsetzen. $T_K = T_{°C} + 273{,}15$.`,
          visualization: {
            title: 'p-V-Diagramm', visualizationId: 'pv-diagram', params: {},
          },
          exercises: [
            { type: 'number-input', question: '20 °C entsprechen gerundet wie viel Kelvin?', correctValue: 293.15, tolerance: 0.1, unit: 'K', explanation: 'T = 20 + 273,15 = 293,15 K.', hints: ['T[K] = T[°C] + 273,15', '20 + 273,15 = 293,15', 'Kelvin-Null = absoluter Nullpunkt'] },
            { type: 'multiple-choice', question: 'Welche Größe ist absolute Temperatur?', options: ['°C', 'K', 'bar', 'Pa'], correctIndex: 1, explanation: 'Thermodynamische Rechnungen verwenden Kelvin.', hints: ['Thermodynamische Rechnungen erfordern Kelvin.', 'K startet beim absoluten Nullpunkt (0 K = −273,15 °C).', 'Celsius kann negativ werden, Kelvin nicht.'], wrongAnswerExplanations: { 0: '°C ist eine Temperaturskala mit verschobenem Nullpunkt (Gefrierpunkt des Wassers). Sie ist relativ, nicht absolut. Umrechnung: $T_K = T_{°C} + 273{,}15$.', 2: 'bar ist eine Druckeinheit: $1\\,\\mathrm{bar} = 10^5\\,\\mathrm{Pa}$. Hat nichts mit Temperatur zu tun.', 3: 'Pa (Pascal) = $\\mathrm{N/m^2}$ ist die SI-Einheit des Drucks, nicht der Temperatur.' } },
            { type: 'true-false', statement: 'Bei konstantem Volumen steigt der Druck eines idealen Gases mit der Temperatur.', correct: true, explanation: 'Aus pV=nRT folgt bei V,n konstant: p proportional T.', hints: ['pV = nRT mit T in Kelvin!', 'p ∝ T bei V = const → p steigt mit T.', 'Nur absolute Temperatur in Kelvin ist physikalisch sinnvoll.'] },
          ],
        },
        {
          id: 'thermo-1-2',
          title: 'Druck und Arbeit',
          learningGoals: ['Volumenänderungsarbeit interpretieren', 'p-V-Diagramme lesen'],
          subGoals: [
            { label: 'Volumenarbeit $W = \\int p\\,dV$ = Fläche unter der Kurve im pV-Diagramm', examRelevance: 'hoch' },
            { label: 'Isobar ($p$ const): $W = p \\cdot \\Delta V$ — direktes Rechteck', examRelevance: 'hoch' },
            { label: 'Isotherm ($T$ const): $W = nRT \\ln(V_2/V_1)$ — Vorzeichen beachten', examRelevance: 'hoch' },
            { label: 'Vorzeichenkonvention: $W > 0$ = vom System **abgegeben**; umgekehrt in mancher Literatur', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-1-1', concepts: ['pv-nrt'] },
            ],
            concepts: [
              { id: 'volumenarbeit', title: 'Volumenarbeit $W=\\int p\\,dV$ = Fläche im pV-Diagramm',                            dependsOn: [] },
              { id: 'isobar',        title: 'Isobar ($p$ const): $W=p\\cdot\\Delta V$',                                            dependsOn: ['volumenarbeit'] },
              { id: 'isotherm',      title: 'Isotherm ($T$ const): $W=nRT\\ln(V_2/V_1)$',                                          dependsOn: ['volumenarbeit'] },
              { id: 'vz-konv-w',     title: 'Vorzeichenkonvention: $W>0$ = abgegeben (Literatur unterschiedlich!)',                 dependsOn: ['volumenarbeit'] },
            ],
            subGoalConcepts: { 0: ['volumenarbeit'], 1: ['isobar'], 2: ['isotherm'], 3: ['vz-konv-w'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['volumenarbeit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['volumenarbeit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['volumenarbeit'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['volumenarbeit'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['volumenarbeit'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['isobar'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['isobar'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['isobar'],                 qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['isobar'],                 qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['isobar'],                 qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['isotherm'],               qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['isotherm'],               qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['isotherm'],               qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['isotherm'],               qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['isotherm'],               qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['vz-konv-w'],              qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vz-konv-w'],              qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['vz-konv-w'],              qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vz-konv-w'],              qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['vz-konv-w'],              qty: 1 },
            ],
          },
          content: String.raw`Volumenänderungsarbeit ist die Fläche im p-V-Diagramm:

$$W = \int p\,dV$$

Bei konstantem Druck vereinfacht sich das zu $W = p \cdot \Delta V$.`,
          exercises: [
            { type: 'number-input', question: 'Bei konstantem Druck p = 200 kPa vergrößert sich das Volumen um ΔV = 0,01 $m^3$. Berechne die Volumenänderungsarbeit.', correctValue: 2000, tolerance: 1, unit: 'J', explanation: '200 kPa = 200000 Pa. W = p·ΔV = 200000·0,01 = 2000 J.', hints: ['W = p · ΔV bei konstantem Druck', '1 Pa · 1 m³ = 1 J', '200000 Pa · 0,01 m³ = 2000 J'] },
            { type: 'multiple-choice', question: 'Im p-V-Diagramm entspricht Arbeit ...', options: ['der Steigung', 'der Fläche unter der Kurve', 'dem Achsenabschnitt', 'nur dem Enddruck'], correctIndex: 1, explanation: '$W = \\int p\\,dV$ ist eine Fläche.', hints: ['Volumenarbeit: W = ∫p dV', 'Im p-V-Diagramm = Fläche unter der Kurve.', 'Bei isobar: W = p · ΔV (Rechteckfläche)'], wrongAnswerExplanations: { 0: 'Die Steigung $\\mathrm{d}p/\\mathrm{d}V$ hat die Einheit $\\mathrm{Pa/m^3}$, keine Energieeinheit. Arbeit $W = \\int p\\,\\mathrm{d}V$ ist eine Fläche, nicht die Steigung.', 2: 'Der Achsenabschnitt liefert nur einen einzelnen Wert von $p$ oder $V$, keine integrale Größe. Arbeit ist das Integral $\\int p\\,\\mathrm{d}V$.', 3: 'Arbeit hängt vom gesamten Prozessweg ab, nicht nur vom Endzustand. Deshalb ist $W$ wegabhängig (keine Zustandsgröße).' } },
            { type: 'true-false', statement: 'Bei ΔV = 0 ist die Volumenänderungsarbeit null.', correct: true, explanation: 'Ohne Volumenänderung ist $\\int p\\,dV = 0$.', hints: ['Isochor: V = konstant, also ΔV = 0.', 'W = ∫p dV = 0 wenn V nicht ändert.', 'Kein Volumenänderungsarbeit → ganze Wärme geht in ΔU.'] },
          ],
        },
      ],
    },
    {
      id: 'thermo-unit-2',
      title: 'Hauptsätze',
      description: 'Energie und Wirkungsgrad.',
      lessons: [
        {
          id: 'thermo-2-1',
          title: 'Erster Hauptsatz',
          learningGoals: ['Energiebilanz aufstellen', 'Wärme und Arbeit vorzeichenbewusst verwenden'],
          subGoals: [
            { label: '1. Hauptsatz geschlossen: $\\Delta U = Q - W$ (Q zugeführt, W abgegeben)', examRelevance: 'hoch' },
            { label: '1. Hauptsatz offen (stationär): $\\dot Q + \\dot W_t = \\dot m (h_2 - h_1)$', examRelevance: 'hoch' },
            { label: 'Vorzeichenkonvention: Q, W zugeführt > 0', examRelevance: 'hoch' },
            { label: 'Innere Energie $U$ Zustandsgröße, Q und W Prozessgrößen', examRelevance: 'hoch' },
            { label: 'Technische Arbeit $W_t = -\\int V dp$ vs. Volumenarbeit $W = \\int p dV$', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-1-2', concepts: ['volumenarbeit', 'vz-konv-w'] },
            ],
            concepts: [
              { id: 'hs1-geschl',  title: '1. HS geschlossen: $\\Delta U=Q-W$',                                                 dependsOn: [] },
              { id: 'hs1-offen',   title: '1. HS offen (stationär): $\\dot Q+\\dot W_t=\\dot m(h_2-h_1)$',                       dependsOn: ['hs1-geschl'] },
              { id: 'vz-q-w',      title: 'Vorzeichenkonvention: Q, W zugeführt $>0$',                                          dependsOn: [] },
              { id: 'u-zustand',   title: 'Innere Energie $U$ Zustandsgröße; Q, W Prozessgrößen',                                dependsOn: ['hs1-geschl'] },
              { id: 'wt-vs-w',     title: 'Technische Arbeit $W_t=-\\int V\\,dp$ vs. Volumenarbeit $W=\\int p\\,dV$',            dependsOn: ['hs1-offen'] },
            ],
            subGoalConcepts: { 0: ['hs1-geschl'], 1: ['hs1-offen'], 2: ['vz-q-w'], 3: ['u-zustand'], 4: ['wt-vs-w'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['hs1-geschl'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hs1-geschl'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['hs1-geschl'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hs1-geschl'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['hs1-geschl'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['hs1-offen'],           qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hs1-offen'],           qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['hs1-offen'],           qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hs1-offen'],           qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['hs1-offen'],           qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['vz-q-w'],              qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vz-q-w'],              qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['vz-q-w'],              qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vz-q-w'],              qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['vz-q-w'],              qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['u-zustand'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['u-zustand'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['u-zustand'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['u-zustand'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['u-zustand'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['wt-vs-w'],             qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['wt-vs-w'],             qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['wt-vs-w'],             qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['wt-vs-w'],             qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['wt-vs-w'],             qty: 1 },
            ],
          },
          content: String.raw`Der erste Hauptsatz ist Energieerhaltung für thermodynamische Systeme:

$$\Delta U = Q - W$$

$Q$ ist zugeführte Wärme, $W$ ist vom System abgegebene Arbeit.`,
          exercises: [
            { type: 'number-input', question: 'Ein System erhält Q = 500 J Wärme und gibt W = 200 J Arbeit ab. Berechne ΔU nach dem ersten Hauptsatz.', correctValue: 300, tolerance: 0.01, unit: 'J', explanation: 'ΔU = Q − W = 500 − 200 = 300 J.', hints: ['Erster Hauptsatz: ΔU = Q − W', 'Q zugeführt (+), W vom System abgegeben (+)', '500 − 200 = 300 J'] },
            { type: 'multiple-choice', question: 'Der erste Hauptsatz beschreibt:', options: ['Impulserhaltung', 'Energieerhaltung', 'Massenerhaltung', 'Reibungsgesetz'], correctIndex: 1, explanation: 'Er bilanziert Wärme, Arbeit und innere Energie.', hints: ['Erster Hauptsatz: ΔU = Q − W', 'Beschreibt Energieerhaltung für thermodynamische Systeme.', 'Wärme und Arbeit können innere Energie ändern.'], wrongAnswerExplanations: { 0: 'Impulserhaltung ($\\sum p_i = \\text{const}$) gehört zur Mechanik (Newton III). Der erste Hauptsatz bilanziert Energie, nicht Impuls.', 2: 'Massenerhaltung ist ein getrenntes Prinzip (Kontinuitätsgleichung). Der erste Hauptsatz betrifft ausschließlich die Energiebilanz $\\Delta U = Q - W$.', 3: 'Reibung erscheint als Dissipationsterm im zweiten Hauptsatz (Entropiezunahme), nicht als eigenes Gesetz. Der erste Hauptsatz ist reine Energiebilanz.' } },
            { type: 'true-false', statement: 'Wenn ein System Arbeit abgibt und keine Wärme erhält, sinkt seine innere Energie.', correct: true, explanation: 'Q=0, W>0 → ΔU = −W.', hints: ['ΔU = Q − W mit Q = 0, W > 0.', 'ΔU = 0 − W = −W', 'W > 0 → ΔU < 0 → innere Energie sinkt.'] },
          ],
        },
        {
          id: 'thermo-2-2',
          title: 'Wirkungsgrad',
          learningGoals: ['Wirkungsgrad berechnen', 'Verluste interpretieren'],
          subGoals: [
            { label: 'Wirkungsgrad: $\\eta = E_\\text{nutz}/E_\\text{zu} \\leq 1$', examRelevance: 'hoch' },
            { label: '2. Hauptsatz: $\\eta < 1$ für Wärmekraftmaschine (Entropieargument)', examRelevance: 'hoch' },
            { label: 'Carnot-Grenze: $\\eta \\leq \\eta_C = 1 - T_\\text{kalt}/T_\\text{warm}$ (K!)', examRelevance: 'hoch' },
            { label: 'Kälteleistungszahl: $\\varepsilon_K = Q_\\text{kalt}/W$ (kann > 1 sein!)', examRelevance: 'mittel' },
            { label: 'Wärmepumpe: $\\varepsilon_{WP} = Q_\\text{warm}/W = \\varepsilon_K + 1$', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-1-1', concepts: ['t-kelvin'] },
              { lessonId: 'thermo-2-1', concepts: ['hs1-geschl'] },
            ],
            concepts: [
              { id: 'eta-def',    title: 'Wirkungsgrad $\\eta=E_{\\text{nutz}}/E_{\\text{zu}}\\le 1$',                          dependsOn: [] },
              { id: 'hs2',        title: '2. HS: $\\eta<1$ für Wärmekraftmaschine',                                              dependsOn: ['eta-def'] },
              { id: 'carnot',     title: 'Carnot-Grenze $\\eta_C=1-T_{\\text{kalt}}/T_{\\text{warm}}$ (K!)',                       dependsOn: ['hs2'] },
              { id: 'kaelte-eps', title: 'Kälteleistungszahl $\\varepsilon_K=Q_{\\text{kalt}}/W$ (kann > 1)',                      dependsOn: ['eta-def'] },
              { id: 'waerme-eps', title: 'Wärmepumpe $\\varepsilon_{WP}=Q_{\\text{warm}}/W=\\varepsilon_K+1$',                     dependsOn: ['kaelte-eps'] },
            ],
            subGoalConcepts: { 0: ['eta-def'], 1: ['hs2'], 2: ['carnot'], 3: ['kaelte-eps'], 4: ['waerme-eps'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['eta-def'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eta-def'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['eta-def'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eta-def'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['eta-def'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['hs2'],              qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hs2'],              qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['hs2'],              qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hs2'],              qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['hs2'],              qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['carnot'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['carnot'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['carnot'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['carnot'],           qty: 1, note: 'T in °C statt K' },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['carnot'],           qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['kaelte-eps'],       qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kaelte-eps'],       qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['kaelte-eps'],       qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kaelte-eps'],       qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['kaelte-eps'],       qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['waerme-eps'],       qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['waerme-eps'],       qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['waerme-eps'],       qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['waerme-eps'],       qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['waerme-eps'],       qty: 1 },
            ],
          },
          content: String.raw`Der Wirkungsgrad misst den nutzbaren Anteil der zugeführten Energie:

$$\eta = \frac{E_\text{nutz}}{E_\text{zu}}$$

Er liegt bei realen Maschinen kleiner als 1.`,
          exercises: [
            { type: 'number-input', question: 'Eine Maschine liefert 80 J Nutzenergie bei 100 J zugeführter Energie. Berechne den Wirkungsgrad η.', correctValue: 0.8, tolerance: 0.01, unit: '', explanation: 'η = 80/100 = 0,8 = 80%.', hints: ['η = E_nutz / E_zu', '80 / 100 = 0,8', 'η ≤ 1 bei realen Maschinen'] },
            { type: 'multiple-choice', question: 'η = 0,35 bedeutet:', options: ['35% Nutzanteil', '3,5% Nutzanteil', '350% Nutzanteil', 'keine Verluste'], correctIndex: 0, explanation: '0,35 entspricht 35%.', hints: ['η = 0,35 entspricht 35%.', 'Wirkungsgrad als Dezimalzahl × 100 = Prozent.', '0,35 · 100 = 35 %'], wrongAnswerExplanations: { 1: 'Hier wurde irrtümlich mit 10 statt 100 multipliziert. Die Umrechnung ist $0{,}35 \\cdot 100\\% = 35\\%$, nicht $3{,}5\\%$.', 2: 'Wirkungsgrade liegen immer $\\le 1$ (bzw. $\\le 100\\%$). $350\\%$ verletzt den Energieerhaltungssatz. Faktor 10 zu viel.', 3: 'Bei 35\\% Nutzanteil bleiben $65\\%$ Verluste. „Keine Verluste“ wäre $\\eta = 1 = 100\\%$.' } },
            { type: 'true-false', statement: 'Ein realer Wärmekraftprozess hat η = 1.', correct: false, explanation: 'Reale Prozesse haben Verluste und liegen unter 1.', hints: ['Zweiter Hauptsatz: nicht alle Wärme kann in Arbeit umgewandelt werden.', 'Reale Prozesse haben immer Verluste → η < 1.', 'η = 1 wäre ein „Perpetuum Mobile zweiter Art".'] },
          ],
        },
        {
          id: 'thermo-2-3',
          title: 'Kreisprozesse',
          estimatedMinutes: 15,
          learningGoals: ['Carnot-Wirkungsgrad berechnen', 'Otto-Wirkungsgrad aus Verdichtungsverhältnis bestimmen', 'Kreisprozesse als thermodynamische Grundlage verstehen'],
          subGoals: [
            { label: 'Carnot: $\\eta_C = 1 - T_\\text{kalt}/T_\\text{warm}$ (in Kelvin!)', examRelevance: 'hoch' },
            { label: 'Otto-Prozess: $\\eta_O = 1 - \\varepsilon^{1-\\gamma}$ mit Verdichtung $\\varepsilon = V_1/V_2$', examRelevance: 'hoch' },
            { label: 'Diesel-Prozess: etwas anderer Wirkungsgrad (Einspritzverhältnis)', examRelevance: 'mittel' },
            { label: 'Rankine/Clausius-Rankine: Dampfkraftwerk, Enthalpiewerte aus h-s-Diagramm', examRelevance: 'mittel' },
            { label: 'Im pV-Diagramm: Fläche = Nutzarbeit pro Umlauf', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-1-2', concepts: ['volumenarbeit'] },
              { lessonId: 'thermo-2-2', concepts: ['carnot'] },
            ],
            concepts: [
              { id: 'carnot-kp',  title: 'Carnot $\\eta_C=1-T_{\\text{kalt}}/T_{\\text{warm}}$ (K)',                              dependsOn: [] },
              { id: 'otto',       title: 'Otto $\\eta_O=1-\\varepsilon^{1-\\gamma}$, $\\varepsilon=V_1/V_2$',                      dependsOn: [] },
              { id: 'diesel',     title: 'Diesel-Prozess: anderer Wirkungsgrad (Einspritzverhältnis)',                              dependsOn: ['otto'] },
              { id: 'rankine',    title: 'Rankine/Clausius-Rankine: Dampfkraftwerk, h-s-Diagramm',                                  dependsOn: [] },
              { id: 'pv-flaeche', title: 'pV-Fläche = Nutzarbeit pro Umlauf',                                                       dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['carnot-kp'], 1: ['otto'], 2: ['diesel'], 3: ['rankine'], 4: ['pv-flaeche'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['carnot-kp'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['carnot-kp'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['carnot-kp'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['carnot-kp'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['carnot-kp'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['otto'],               qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['otto'],               qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['otto'],               qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['otto'],               qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['otto'],               qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['diesel'],             qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['diesel'],             qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['diesel'],             qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['diesel'],             qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['diesel'],             qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['rankine'],            qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rankine'],            qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['rankine'],            qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rankine'],            qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['rankine'],            qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['pv-flaeche'],         qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pv-flaeche'],         qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['pv-flaeche'],         qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pv-flaeche'],         qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['pv-flaeche'],         qty: 1 },
            ],
          },
          content: String.raw`**Kreisprozesse** wandeln Wärme in Arbeit um. Jeder Kreisprozess kehrt nach einem Umlauf in den Ausgangszustand zurück.

**Carnot-Prozess** (idealer Vergleichsprozess):
$$\eta_C = 1 - \frac{T_{\text{kalt}}}{T_{\text{warm}}} \quad \text{(Temperaturen in Kelvin!)}$$

**Otto-Prozess** (Verbrennungsmotor, Verdichtungsverhältnis $\varepsilon = V_1/V_2$):
$$\eta_{\text{Otto}} = 1 - \varepsilon^{1-\gamma}$$

**Rankine-/Clausius-Rankine-Prozess** (Dampfkraftwerk): Enthalpiewerte aus Dampftafeln.

**Leistung:** $P = Q_{\text{zu}} \cdot \eta / t$`,
          exercises: [
            {
              type: 'number-input',
              question: 'Carnot-Maschine: T_warm = 800 K, T_kalt = 400 K. Wirkungsgrad η_C?',
              correctValue: 0.5,
              tolerance: 0.01,
              unit: '',
              explanation: 'η_C = 1 − T_kalt/T_warm = 1 − 400/800 = 0,5 = 50%.',
              hints: ['η_C = 1 − T_kalt/T_warm', 'T in Kelvin einsetzen', '1 − 400/800'],
            },
            {
              type: 'number-input',
              question: 'Otto-Motor: Verdichtungsverhältnis ε = 8, γ = 1,4. η_Otto?',
              correctValue: 0.565,
              tolerance: 0.01,
              unit: '',
              explanation: 'η_Otto = 1 − ε^(1−γ) = 1 − 8^(−0,4). 8^0,4 ≈ 2,297. η ≈ 1 − 1/2,297 ≈ 0,565.',
              hints: ['η_Otto = 1 − ε^(1−γ)', 'ε^(1−γ) = 8^(1−1,4) = 8^(−0,4)', '8^0,4 ≈ 2,30 → 1/2,30 ≈ 0,435'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welche Maßnahme verbessert den Carnot-Wirkungsgrad am meisten?',
              options: ['T_warm erhöhen', 'T_kalt erhöhen', 'Druck verringern', 'Volumen erhöhen'],
              correctIndex: 0,
              explanation: 'η_C = 1 − T_kalt/T_warm steigt, wenn T_warm steigt oder T_kalt sinkt. T_warm erhöhen ist die direktere Maßnahme (z.B. durch höheren Druck/Temp im Kessel).',
              hints: ['η_C = 1 − T_kalt/T_warm', 'Bruch kleiner machen', 'T_warm im Nenner'],
              wrongAnswerExplanations: {
                1: 'Genau verkehrt: $T_\\text{kalt}$ steht im Zähler des Bruchs $T_\\text{kalt}/T_\\text{warm}$. Wird $T_\\text{kalt}$ größer, wird der Bruch größer und $\\eta_C$ kleiner.',
                2: 'Druck kommt in $\\eta_C = 1 - T_\\text{kalt}/T_\\text{warm}$ nicht vor. Nur die Temperaturen zählen im Carnot-Wirkungsgrad.',
                3: 'Volumen ist ebenfalls nicht Teil der Carnot-Formel. Der Carnot-Wirkungsgrad hängt ausschließlich von den Temperaturen der beiden Wärmereservoirs ab.',
              },
            },
          ],
        },
        {
          id: 'thermo-2-4',
          title: 'Wärmeübertragung',
          estimatedMinutes: 15,
          learningGoals: ['Wärmeleitung nach Fourier berechnen', 'k-Wert einer mehrlagigen Wand bestimmen', 'Wärmeübergang und Wärmedurchgang unterscheiden'],
          subGoals: [
            { label: 'Fourier-Wärmeleitung: $\\dot Q = \\lambda A \\Delta T/d$', examRelevance: 'hoch' },
            { label: 'Wärmeübergang (Newton): $\\dot Q = \\alpha A \\Delta T$', examRelevance: 'hoch' },
            { label: 'k-Wert (mehrlagige Wand): $1/k = 1/\\alpha_1 + \\sum d_i/\\lambda_i + 1/\\alpha_2$', examRelevance: 'hoch' },
            { label: 'Strahlung: $\\dot Q = \\varepsilon \\sigma A (T_1^4 - T_2^4)$ (Stefan-Boltzmann)', examRelevance: 'mittel' },
            { label: 'Kleiner $k$-Wert = gute Dämmung', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'fourier-wl',  title: 'Fourier-Wärmeleitung $\\dot Q=\\lambda A\\Delta T/d$',                                dependsOn: [] },
              { id: 'newton-wue',  title: 'Wärmeübergang (Newton) $\\dot Q=\\alpha A\\Delta T$',                                  dependsOn: [] },
              { id: 'k-wert',      title: 'k-Wert mehrlagig: $1/k=1/\\alpha_1+\\sum d_i/\\lambda_i+1/\\alpha_2$',                  dependsOn: ['fourier-wl', 'newton-wue'] },
              { id: 'strahlung',   title: 'Strahlung $\\dot Q=\\varepsilon\\sigma A(T_1^4-T_2^4)$ (Stefan-Boltzmann)',              dependsOn: [] },
              { id: 'k-daemmung',  title: 'Kleiner k-Wert = gute Dämmung',                                                          dependsOn: ['k-wert'] },
            ],
            subGoalConcepts: { 0: ['fourier-wl'], 1: ['newton-wue'], 2: ['k-wert'], 3: ['strahlung'], 4: ['k-daemmung'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fourier-wl'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fourier-wl'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['fourier-wl'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fourier-wl'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['fourier-wl'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['newton-wue'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['newton-wue'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['newton-wue'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['newton-wue'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['newton-wue'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['k-wert'],              qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['k-wert'],              qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['k-wert'],              qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['k-wert'],              qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['k-wert'],              qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['strahlung'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['strahlung'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['strahlung'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['strahlung'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['strahlung'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['k-daemmung'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['k-daemmung'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['k-daemmung'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['k-daemmung'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['k-daemmung'],          qty: 1 },
            ],
          },
          content: String.raw`**Wärmeleitung** (Fourier):
$$\dot Q = \lambda \cdot A \cdot \frac{\Delta T}{d}$$
$\lambda$ = Wärmeleitfähigkeit (W/(m·K)), $d$ = Wanddicke, $A$ = Fläche.

**Wärmeübergang** (Newton):
$$\dot Q = \alpha \cdot A \cdot \Delta T$$
$\alpha$ = Wärmeübergangskoeffizient (W/(m²·K)).

**k-Wert** (Wärmedurchgang durch mehrlagige Wand):
$$\frac{1}{k} = \frac{1}{\alpha_1} + \frac{d}{\lambda} + \frac{1}{\alpha_2}$$

**Fourier-Zahl und Biot-Zahl** charakterisieren instationäre Wärmeübertragung.`,
          exercises: [
            {
              type: 'number-input',
              question: 'Wand: λ = 0,5 W/(mK), d = 0,1 m, A = 10 m², ΔT = 20 K. Wärmestrom Q̇ in W?',
              correctValue: 1000,
              tolerance: 1,
              unit: 'W',
              explanation: 'Q̇ = λ·A·ΔT/d = 0,5·10·20/0,1 = 1000 W.',
              hints: ['Q̇ = λ·A·ΔT/d', 'Alle Einheiten in SI', '0,5·10·20/0,1'],
            },
            {
              type: 'true-false',
              statement: 'Ein kleinerer k-Wert bedeutet bessere Wärmedämmung.',
              correct: true,
              explanation: 'k-Wert ist der Wärmedurchgangskoeffizient; kleines k = großer Widerstand = gute Dämmung.',
              hints: ['Q̇ = k·A·ΔT', 'Kleines k → kleiner Wärmestrom', 'k wie Widerstand: kleiner ist besser für Dämmung'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Wand: α_1 = 10 W/(m²K), λ/d = 2,0 W/(m²K), α_2 = 20 W/(m²K). k-Wert in W/(m²K)?',
              correctValue: 1.54,
              tolerance: 0.05,
              unit: 'W/(m²K)',
              explanation: '1/k = 1/α_1 + d/λ + 1/α_2 = 1/10 + 1/2 + 1/20 = 0,1 + 0,5 + 0,05 = 0,65. k = 1/0,65 ≈ 1,54 W/(m²K).',
              hints: ['1/k = 1/α_1 + d/λ + 1/α_2', 'λ/d = 2 → d/λ = 0,5', '1/10 + 1/2 + 1/20 = 0,65'],
            },
          ],
        },
      ],
    },
    // ── Unit 3: Prüfungsaufgaben Thermo ───────────────────────────────
    {
      id: 'thermo-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Thermodynamik-Aufgaben.',
      lessons: [
        {
          id: 'thermo-3-1',
          title: 'Thermo: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Zustandsänderungen berechnen', 'Kreisprozesse analysieren'],
          subGoals: [
            { label: 'Isotherme Expansion: $W = nRT \\ln(V_2/V_1)$', examRelevance: 'hoch' },
            { label: 'Isobar: $W = p \\Delta V$, $Q = n c_p \\Delta T$', examRelevance: 'hoch' },
            { label: 'Isochor: $W = 0$, $Q = n c_v \\Delta T$', examRelevance: 'hoch' },
            { label: 'Adiabatisch: $pV^\\gamma = $ const, $TV^{\\gamma-1} = $ const', examRelevance: 'hoch' },
            { label: 'Zustandsgleichung ideales Gas: $pV = nRT$ (oder $p = \\rho R_s T$)', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-1-1', concepts: ['pv-nrt'] },
              { lessonId: 'thermo-1-2', concepts: ['isobar', 'isotherm', 'volumenarbeit'] },
              { lessonId: 'thermo-2-1', concepts: ['hs1-geschl'] },
            ],
            concepts: [
              { id: 'iso-expansion', title: 'Isotherme Expansion $W=nRT\\ln(V_2/V_1)$',                                          dependsOn: [] },
              { id: 'iso-bar-pr',    title: 'Isobar $W=p\\Delta V$, $Q=n c_p\\Delta T$',                                          dependsOn: [] },
              { id: 'iso-chor',      title: 'Isochor $W=0$, $Q=n c_v\\Delta T$',                                                  dependsOn: [] },
              { id: 'adiabatisch',   title: 'Adiabatisch $pV^\\gamma=$const, $TV^{\\gamma-1}=$const',                              dependsOn: [] },
              { id: 'zustand-gas',   title: 'Zustandsgleichung $pV=nRT$ (oder $p=\\rho R_s T$)',                                    dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['iso-expansion'], 1: ['iso-bar-pr'], 2: ['iso-chor'], 3: ['adiabatisch'], 4: ['zustand-gas'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['iso-expansion'],     qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['iso-expansion'],     qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['iso-expansion'],     qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['iso-expansion'],     qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['iso-expansion'],     qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['iso-bar-pr'],        qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['iso-bar-pr'],        qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['iso-bar-pr'],        qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['iso-bar-pr'],        qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['iso-bar-pr'],        qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['iso-chor'],          qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['iso-chor'],          qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['iso-chor'],          qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['iso-chor'],          qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['iso-chor'],          qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['adiabatisch'],       qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['adiabatisch'],       qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['adiabatisch'],       qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['adiabatisch'],       qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['adiabatisch'],       qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['zustand-gas'],       qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['zustand-gas'],       qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['zustand-gas'],       qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['zustand-gas'],       qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['zustand-gas'],       qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Thermodynamik-Klausuraufgaben**

**Zustandsänderungen idealer Gase:**
| Prozess | Bedingung | Arbeit |
|---|---|---|
| Isotherm | T = const | $W = nRT \ln(V_2/V_1)$ |
| Isobar | p = const | $W = p \cdot \Delta V$ |
| Isochor | V = const | $W = 0$ |
| Adiabat | Q = 0 | $W = \frac{p_1 V_1 - p_2 V_2}{\gamma - 1}$ |

**Carnot-Wirkungsgrad:** $\eta_C = 1 - T_{kalt}/T_{warm}$ (maximaler Wirkungsgrad)`,
          visualization: {
            title: 'Zustandsänderungen im p-V-Diagramm', visualizationId: 'pv-diagram', params: {},
          },
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Carnot-Maschine: T_warm = 600 K, T_kalt = 300 K. Maximaler Wirkungsgrad?', correctValue: 0.5, tolerance: 0.01, unit: '', explanation: 'η_C = 1 - 300/600 = 1 - 0,5 = 0,5 = 50%.', hints: ['η_C = 1 - T_kalt/T_warm', 'Temperaturen in Kelvin!', '1 − 300/600 = 1 − 0,5 = 0,5'] },
            { type: 'number-input', question: '[PRÜFUNG] Isotherme Expansion: 1 mol ideales Gas bei T = 300 K expandiert von 10 L auf 20 L. Arbeit W? (R = 8,314)', correctValue: 1729, tolerance: 20, unit: 'J', explanation: '$W = nRT \\cdot \\ln(V_2/V_1)$ = 1·8,314·300·ln(2) = 2494·0,693 ≈ 1729 J.', hints: ['$W = nRT \\cdot \\ln(V_2/V_1)$', 'ln(2) ≈ 0,693', '1 · 8,314 · 300 · 0,693 ≈ 1729 J'] },
            { type: 'number-input', question: '[PRÜFUNG] Adiabatische Kompression: $p_1$ = 100 kPa, $V_1 = 0{,}01\\,m^3$, $V_2 = 0{,}005\\,m^3$, $\\gamma = 1{,}4$. Berechne $p_2$.', correctValue: 264, tolerance: 5, unit: 'kPa', explanation: '$p_1 V_1^\\gamma = p_2 V_2^\\gamma$ → $p_2 = p_1 \\cdot (V_1/V_2)^\\gamma$ = 100·2^1,4 = 100·2,639 ≈ 264 kPa.', hints: ['$pV^\\gamma = \\text{const}$', 'p_2 = p_1 · (V_1/V_2)^γ', '100 · 2^1,4 ≈ 100 · 2,64 = 264 kPa'] },
            { type: 'true-false', statement: '[PRÜFUNG] Bei einer isochoren Zustandsänderung wird keine Volumenänderungsarbeit verrichtet.', correct: true, explanation: 'Isochor: $V = \\text{const}$ → $\\Delta V = 0$ → $W = \\int p\\,dV = 0$.', hints: ['Isochor bedeutet: V = konstant.', 'W = ∫p dV = 0 wenn ΔV = 0.', 'Keine Volumenänderung → keine Volumenänderungsarbeit.'] },
          ],
        },
        {
          id: 'thermo-3-2',
          title: 'Kreisprozesse & Wärmeübertragung',
          type: 'explanation-intuitive',
          estimatedMinutes: 22,
          learningGoals: ['Carnot- und Otto-Wirkungsgrad berechnen', 'Wärmebilanz eines Kraftwerks aufstellen', 'Wärmeleitung und k-Wert kombiniert anwenden'],
          subGoals: [
            { label: 'Leistung aus Wärmestrom: $P_\\text{nutz} = \\dot Q_\\text{zu} \\cdot \\eta$', examRelevance: 'hoch' },
            { label: 'Wärmebilanz Kraftwerk: $\\dot Q_\\text{ab} = \\dot Q_\\text{zu} - P_\\text{nutz}$', examRelevance: 'hoch' },
            { label: 'Otto-Wirkungsgrad: $\\eta_O = 1 - \\varepsilon^{1-\\gamma}$, $\\gamma \\approx 1{,}4$ für Luft', examRelevance: 'hoch' },
            { label: 'Wärmestrom durch Wand: $\\dot Q = k A \\Delta T$', examRelevance: 'hoch' },
            { label: 'Carnot als theoretische Obergrenze: reale Wirkungsgrade sind kleiner', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'thermo-2-2', concepts: ['eta-def', 'carnot'] },
              { lessonId: 'thermo-2-3', concepts: ['otto', 'pv-flaeche'] },
              { lessonId: 'thermo-2-4', concepts: ['k-wert', 'fourier-wl'] },
            ],
            concepts: [
              { id: 'p-nutz',         title: 'Leistung aus Wärmestrom $P_{\\text{nutz}}=\\dot Q_{\\text{zu}}\\cdot\\eta$',         dependsOn: [] },
              { id: 'kw-bilanz',      title: 'Kraftwerk-Bilanz $\\dot Q_{\\text{ab}}=\\dot Q_{\\text{zu}}-P_{\\text{nutz}}$',        dependsOn: ['p-nutz'] },
              { id: 'otto-pr',        title: 'Otto $\\eta_O=1-\\varepsilon^{1-\\gamma}$, $\\gamma\\approx 1{,}4$ für Luft',         dependsOn: [] },
              { id: 'q-wand',         title: 'Wärmestrom durch Wand $\\dot Q=kA\\Delta T$',                                          dependsOn: [] },
              { id: 'carnot-obergrenze', title: 'Carnot theoretische Obergrenze, reale $\\eta$ kleiner',                              dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['p-nutz'], 1: ['kw-bilanz'], 2: ['otto-pr'], 3: ['q-wand'], 4: ['carnot-obergrenze'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['p-nutz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['p-nutz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['p-nutz'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['p-nutz'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['p-nutz'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kw-bilanz'],       qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kw-bilanz'],       qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['kw-bilanz'],       qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kw-bilanz'],       qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['kw-bilanz'],       qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['otto-pr'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['otto-pr'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['otto-pr'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['otto-pr'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['otto-pr'],         qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['q-wand'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['q-wand'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['q-wand'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['q-wand'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['q-wand'],          qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['carnot-obergrenze'], qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['carnot-obergrenze'], qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['carnot-obergrenze'], qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['carnot-obergrenze'], qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['carnot-obergrenze'], qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Kreisprozesse & Wärmeübertragung**

**Carnot:** $\eta_C = 1 - T_{\text{kalt}}/T_{\text{warm}}$ (K!)

**Otto:** $\eta_{\text{Otto}} = 1 - \varepsilon^{1-\gamma}$, $\varepsilon = V_1/V_2$

**Leistung aus Wärme:** $P = \dot Q \cdot \eta$

**Wärmeleitung:** $\dot Q = \lambda \cdot A \cdot \Delta T / d$

**k-Wert:** $1/k = 1/\alpha_1 + d/\lambda + 1/\alpha_2$`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Carnot-Maschine: T_warm = 1000 K, T_kalt = 250 K. Wirkungsgrad?',
              correctValue: 0.75,
              tolerance: 0.01,
              unit: '',
              explanation: 'η_C = 1 − T_kalt/T_warm = 1 − 250/1000 = 0,75 = 75%.',
              hints: ['η_C = 1 − T_kalt/T_warm', 'Beide T in Kelvin', '1 − 0,25'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Kraftwerk: zugeführter Wärmestrom Q̇_zu = 500 MW, η = 0,4. Abgeführte Wärme Q̇_ab in MW?',
              correctValue: 300,
              tolerance: 1,
              unit: 'MW',
              explanation: 'Nutzleistung = 500·0,4 = 200 MW. Q̇_ab = 500 − 200 = 300 MW.',
              hints: ['P_nutz = Q̇_zu · η', 'Q̇_ab = Q̇_zu − P_nutz', '500 − 200 = 300'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Rohrwand: λ = 40 W/(mK), d = 0,01 m, A = 2 m², ΔT = 100 K. Wärmestrom Q̇ in W?',
              correctValue: 800000,
              tolerance: 1000,
              unit: 'W',
              explanation: 'Q̇ = λ·A·ΔT/d = 40·2·100/0,01 = 800000 W = 800 kW.',
              hints: ['Q̇ = λ·A·ΔT/d', 'd = 0,01 m', '40·2·100/0,01'],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] Der Carnot-Wirkungsgrad ist die maximale theoretisch erreichbare Effizienz zwischen zwei gegebenen Temperaturniveaus.',
              correct: true,
              explanation: 'Der zweite Hauptsatz garantiert: kein realer Kreisprozess kann den Carnot-Wirkungsgrad zwischen T_kalt und T_warm überschreiten.',
              hints: ['Zweiter Hauptsatz der Thermodynamik', 'Carnot = reversibler Grenzprozess', 'η_real ≤ η_Carnot'],
            },
          ],
        },
      ],
    },
  ],
}

