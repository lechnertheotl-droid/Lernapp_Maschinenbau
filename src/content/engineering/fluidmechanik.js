// ── fluidmechanik — Topic-Definition (kompakter Scaffold) ─────────────────

export const fluidmechanikTopicDef = 
{
  topic: {
    id: 'fluidmechanik',
    title: 'Fluidmechanik',
    description: 'Hydrostatik, Kontinuität und Bernoulli für Strömungen.',
    subject: 'engineering',
    icon: 'FLU',
    color: 'blue',
    estimatedHours: 6,
    difficulty: 3,
    level: 'vertiefung',
    prerequisites: ['technische-mechanik'],
    phase: 'vertiefung',
    examRelevance: 'pflicht',
    topicGoals: [
      'Hydrostatischen Druck $p = \\rho\\,g\\,h$ in offenen Behältern und U-Rohr-Manometern auswerten',
      'Kontinuitätsgleichung $A_1 v_1 = A_2 v_2$ (inkompressibel) als Volumenerhaltung nutzen',
      'Bernoulli-Gleichung $p + \\tfrac12 \\rho v^2 + \\rho g h = \\text{konst}$ entlang einer Stromlinie korrekt anwenden',
      'Reynolds-Zahl $\\mathrm{Re} = \\rho\\,v\\,d/\\eta$ berechnen und laminar ($\\lesssim 2300$) gegen turbulent unterscheiden',
      'Rohrreibungsverluste aus Darcy-Weisbach $\\Delta p = \\lambda\\,\\tfrac{L}{d}\\,\\tfrac12\\rho v^2$ samt $\\lambda$ abschätzen',
      'Auftriebskraft $F_A = \\rho\\,g\\,V_\\text{verdr}$ und Stabilität schwimmender Körper beurteilen',
    ],
  },
  units: [
    {
      id: 'fluid-unit-1',
      title: 'Hydrostatik',
      description: 'Druck in ruhenden Fluiden.',
      lessons: [
        {
          id: 'fluid-1-1',
          title: 'Hydrostatischer Druck',
          learningGoals: ['p = ρgh anwenden', 'Druck mit Tiefe erklären'],
          subGoals: [
            { label: '$p = \\rho g h$ — linearer Zusammenhang nur bei konstanter Dichte (Flüssigkeiten)', examRelevance: 'hoch' },
            { label: 'Überdruck vs. absoluter Druck: $p_\\text{abs} = p_\\text{atm} + p_\\text{hydro}$', examRelevance: 'hoch' },
            { label: 'Druck in Flüssigkeit hängt nur von der Höhe ab, **nicht** von der Behälterform (hydrostat. Paradoxon)', examRelevance: 'hoch' },
            { label: 'Einheiten: 1 bar ≈ 10 m Wassersäule; 1 mbar ≈ 1 cm H₂O', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'rho-g-h',     title: '$p=\\rho g h$ bei konstanter Dichte (Flüssigkeiten)',                              dependsOn: [] },
              { id: 'abs-ueber',   title: 'Überdruck vs. absoluter Druck: $p_{\\text{abs}}=p_{\\text{atm}}+p_{\\text{hydro}}$', dependsOn: ['rho-g-h'] },
              { id: 'paradoxon',   title: 'Hydrostat. Paradoxon: Druck nur höhenabhängig, nicht Behälterform',                  dependsOn: ['rho-g-h'] },
              { id: 'bar-h2o',     title: 'Einheiten: 1 bar ≈ 10 m H₂O',                                                          dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['rho-g-h'], 1: ['abs-ueber'], 2: ['paradoxon'], 3: ['bar-h2o'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['rho-g-h'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rho-g-h'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['rho-g-h'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rho-g-h'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['rho-g-h'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['abs-ueber'],        qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['abs-ueber'],        qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['abs-ueber'],        qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['abs-ueber'],        qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['abs-ueber'],        qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['paradoxon'],        qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['paradoxon'],        qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['paradoxon'],        qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['paradoxon'],        qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['paradoxon'],        qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['bar-h2o'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bar-h2o'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['bar-h2o'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bar-h2o'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['bar-h2o'],          qty: 1 },
            ],
          },
          content: String.raw`In einem ruhenden Fluid steigt der Druck mit der Tiefe:

$$p = \rho g h$$

Dazu kommt je nach Bezug noch der Umgebungsdruck.`,
          exercises: [
            { type: 'number-input', question: 'Wasser: ρ = 1000 $kg/m^3$, g = 9,81 $m/s^2$, h = 2 m. p gerundet?', correctValue: 19620, tolerance: 20, unit: 'Pa', explanation: 'p = 1000·9,81·2 = 19620 Pa.', hints: ['p = ρ · g · h', 'ρ = 1000 kg/m³, g = 9,81, h = 2 m', '1000 · 9,81 · 2 = 19620 Pa'] },
            { type: 'multiple-choice', question: 'Hydrostatischer Druck hängt direkt ab von:', options: ['Tiefe', 'Behälterfarbe', 'Oberflächenrauheit', 'Zeit'], correctIndex: 0, explanation: 'p = ρgh.', hints: ['p = ρgh — h ist die Tiefe.', 'Druck steigt linear mit Tiefe h.', 'ρ, g konstant → p ∝ h'], wrongAnswerExplanations: { 1: 'Farbe ist eine optische Eigenschaft und kommt in $p = \\rho g h$ nicht vor. Der hydrostatische Druck hängt nur von Dichte, Erdbeschleunigung und Tiefe ab.', 2: 'Oberflächenrauheit spielt erst bei strömenden Fluiden (Druckverlust, Reibung) eine Rolle — nicht in der Hydrostatik.', 3: 'Im hydrostatischen Fall ist das Fluid in Ruhe (stationär). $p$ ist zeitunabhängig, solange $h$, $\\rho$, $g$ konstant sind.' } },
            { type: 'true-false', statement: 'In doppelter Tiefe ist der hydrostatische Druck doppelt so groß.', correct: true, explanation: 'Bei konstantem ρ und g ist p proportional h.', hints: ['p = ρgh — linearer Zusammenhang.', 'Doppelte Tiefe → doppelter Druck.', 'p ∝ h bei konstantem ρ und g.'] },
          ],
        },
        {
          id: 'fluid-1-2',
          title: 'Auftrieb',
          learningGoals: ['Archimedisches Prinzip verwenden', 'Verdrängtes Volumen erkennen'],
          subGoals: [
            { label: '$F_A = \\rho_\\text{Fluid}\\,g\\,V_\\text{verdrängt}$ — Dichte des **Fluids**, nicht des Körpers', examRelevance: 'hoch' },
            { label: 'Schwimmen: $F_A = F_G$ → $V_\\text{verdrängt} = m_\\text{Körper}/\\rho_\\text{Fluid}$', examRelevance: 'hoch' },
            { label: 'Vollständig getaucht: $V_\\text{verdrängt} = V_\\text{Körper}$', examRelevance: 'mittel' },
            { label: 'Dichte-Vergleich: Körper schwimmt, wenn $\\rho_\\text{Körper} < \\rho_\\text{Fluid}$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-1-1', concepts: ['rho-g-h'] },
            ],
            concepts: [
              { id: 'fa-formel',   title: '$F_A=\\rho_{\\text{Fluid}}g V_{\\text{verdr.}}$ (Fluid-Dichte!)',                  dependsOn: [] },
              { id: 'schwimmen',   title: 'Schwimmen: $F_A=F_G$ → $V_{\\text{verdr.}}=m/\\rho_{\\text{Fluid}}$',                dependsOn: ['fa-formel'] },
              { id: 'getaucht',    title: 'Vollständig getaucht: $V_{\\text{verdr.}}=V_{\\text{Körper}}$',                       dependsOn: ['fa-formel'] },
              { id: 'dichte-vgl',  title: 'Schwimmt wenn $\\rho_{\\text{Körper}}<\\rho_{\\text{Fluid}}$',                          dependsOn: ['fa-formel'] },
            ],
            subGoalConcepts: { 0: ['fa-formel'], 1: ['schwimmen'], 2: ['getaucht'], 3: ['dichte-vgl'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fa-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fa-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['fa-formel'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fa-formel'],          qty: 1, note: 'Körperdichte statt Fluiddichte' },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['fa-formel'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['schwimmen'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schwimmen'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['schwimmen'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schwimmen'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['schwimmen'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['getaucht'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['getaucht'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['getaucht'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['getaucht'],           qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['getaucht'],           qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['dichte-vgl'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dichte-vgl'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['dichte-vgl'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dichte-vgl'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['dichte-vgl'],         qty: 1 },
            ],
          },
          content: String.raw`Die Auftriebskraft entspricht dem Gewicht der verdrängten Flüssigkeit:

$$F_A = \rho_\text{Fluid} \cdot g \cdot V_\text{verdrängt}$$`,
          exercises: [
            { type: 'number-input', question: 'Ein Körper verdrängt 0,01 $m^3$ Wasser. Berechne die Auftriebskraft in Wasser gerundet.', correctValue: 98.1, tolerance: 0.5, unit: 'N', explanation: 'F_A = 1000·9,81·0,01 = 98,1 N.', hints: ['F_A = ρ_Fluid · g · V_verdrängt', 'ρ_Wasser = 1000 kg/m³', '1000 · 9,81 · 0,01 = 98,1 N'] },
            { type: 'multiple-choice', question: 'Auftrieb hängt ab vom ...', options: ['Volumen des verdrängten Fluids', 'Namen des Körpers', 'Farbton', 'Luftdruck allein'], correctIndex: 0, explanation: 'Das verdrängte Fluidvolumen bestimmt die Auftriebskraft.', hints: ['Auftrieb = Gewicht der verdrängten Flüssigkeit.', 'F_A = ρ_Fluid · g · V_verdrängt', 'V_verdrängt ist das eingetauchte Volumen.'], wrongAnswerExplanations: { 1: 'Bezeichnung eines Körpers ist physikalisch irrelevant. $F_A = \\rho \\cdot g \\cdot V_\\text{verdrängt}$ hängt nur von Dichte, Erdbeschleunigung und verdrängtem Volumen ab.', 2: 'Farbe ändert $F_A$ nicht. Das Archimedische Prinzip ist rein mechanisch: Volumen × Fluiddichte × $g$.', 3: 'Luftdruck allein bestimmt den Auftrieb nicht — man braucht $\\rho_\\text{Fluid}$ und das verdrängte Volumen. In Luft ist $\\rho_\\text{Luft}$ klein, deshalb ist Auftrieb kaum spürbar.' } },
            { type: 'true-false', statement: 'Ein Körper schwimmt, wenn Auftrieb und Gewichtskraft im Gleichgewicht sind.', correct: true, explanation: 'Im stationären Schwimmen gilt F_A = F_G.', hints: ['Schwimmen: F_A = F_G (Gleichgewicht)', 'F_A = ρ_Fluid · g · V_verdrängt', 'F_G = m_Körper · g'] },
          ],
        },
      ],
    },
    {
      id: 'fluid-unit-2',
      title: 'Strömung',
      description: 'Kontinuität und Bernoulli.',
      lessons: [
        {
          id: 'fluid-2-1',
          title: 'Kontinuitätsgleichung',
          learningGoals: ['Volumenstrom berechnen', 'Geschwindigkeit bei Querschnittsänderung bestimmen'],
          subGoals: [
            { label: 'Kontinuität (inkompressibel): $A_1 v_1 = A_2 v_2 = \\dot V$', examRelevance: 'hoch' },
            { label: 'Volumenstrom: $\\dot V = A \\cdot v$, Einheit m³/s', examRelevance: 'hoch' },
            { label: 'Massenstrom (kompressibel): $\\dot m = \\rho A v$', examRelevance: 'hoch' },
            { label: 'Querschnitt kleiner → Geschwindigkeit größer ($v \\propto 1/A$)', examRelevance: 'hoch' },
            { label: 'Umrechnung: Kreisquerschnitt $A = \\pi d^2/4$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'kontinuitaet', title: 'Kontinuität $A_1 v_1=A_2 v_2=\\dot V$ (inkompressibel)',                            dependsOn: [] },
              { id: 'v-strom',     title: 'Volumenstrom $\\dot V=Av$, Einheit m³/s',                                              dependsOn: [] },
              { id: 'm-strom',     title: 'Massenstrom $\\dot m=\\rho A v$ (kompressibel)',                                       dependsOn: [] },
              { id: 'a-v-invers',  title: 'Querschnitt $\\downarrow$ → $v\\uparrow$ ($v\\propto 1/A$)',                            dependsOn: ['kontinuitaet'] },
              { id: 'a-kreis-fluid', title: 'Kreisquerschnitt $A=\\pi d^2/4$',                                                      dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['kontinuitaet'], 1: ['v-strom'], 2: ['m-strom'], 3: ['a-v-invers'], 4: ['a-kreis-fluid'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kontinuitaet'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kontinuitaet'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['kontinuitaet'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kontinuitaet'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['kontinuitaet'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['v-strom'],               qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['v-strom'],               qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['v-strom'],               qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['v-strom'],               qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['v-strom'],               qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['m-strom'],               qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['m-strom'],               qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['m-strom'],               qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['m-strom'],               qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['m-strom'],               qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['a-v-invers'],            qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['a-v-invers'],            qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['a-v-invers'],            qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['a-v-invers'],            qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['a-v-invers'],            qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['a-kreis-fluid'],         qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['a-kreis-fluid'],         qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['a-kreis-fluid'],         qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['a-kreis-fluid'],         qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['a-kreis-fluid', 'kontinuitaet'], qty: 1 },
            ],
          },
          content: String.raw`Für inkompressible stationäre Strömung gilt:

$$A_1 v_1 = A_2 v_2 = \dot V$$

Wird der Querschnitt kleiner, steigt die Strömungsgeschwindigkeit.`,
          exercises: [
            { type: 'number-input', question: 'Für eine inkompressible Strömung gilt A1 = 4 $cm^2$, v1 = 2 m/s und A2 = 2 $cm^2$. Berechne v2.', correctValue: 4, tolerance: 0.01, unit: 'm/s', explanation: 'A1 v1 = A2 v2 → v2 = 4·2/2 = 4 m/s.', hints: ['Kontinuität: A1·v1 = A2·v2', 'A1/A2 = v2/v1', 'v2 = 4·2/2 = 4 m/s'] },
            { type: 'multiple-choice', question: 'Volumenstrom wird berechnet mit:', options: ['A·v', 'A/v', 'v/A', 'ρgH'], correctIndex: 0, explanation: 'Vdot = A·v.', hints: ['Volumenstrom: V̇ = A · v', 'Einheit: m² · m/s = m³/s', 'V̇ bleibt bei inkompressibler Strömung konstant.'], wrongAnswerExplanations: { 1: '$A/v$ hat Einheit $\\mathrm{m^2 \\cdot s/m} = \\mathrm{m \\cdot s}$ — kein Volumenstrom. Korrekt: $\\dot V = A \\cdot v$ mit Einheit $\\mathrm{m^3/s}$.', 2: '$v/A$ hat Einheit $\\mathrm{1/(m \\cdot s)}$ — falsche Dimension. Multiplikation, nicht Division: $\\dot V = A \\cdot v$.', 3: '$\\rho g H$ ist hydrostatischer Druck (Einheit Pa), kein Volumenstrom. Verwechslung mit Druckformel.' } },
            { type: 'true-false', statement: 'Bei kleinerem Querschnitt und gleichem Volumenstrom wird v größer.', correct: true, explanation: 'A·v bleibt konstant.', hints: ['A·v = konstant bei inkompressibler Strömung.', 'Kleinere Fläche → größere Geschwindigkeit.', 'v ∝ 1/A'] },
          ],
        },
        {
          id: 'fluid-2-2',
          title: 'Bernoulli-Gleichung',
          learningGoals: ['Energieformen in Strömungen unterscheiden', 'Druck- und Geschwindigkeitsanteile deuten'],
          subGoals: [
            { label: 'Bernoulli: $p + \\tfrac{1}{2}\\rho v^2 + \\rho g z = $ const (entlang Stromlinie)', examRelevance: 'hoch' },
            { label: 'Drei Druckarten: statisch $p$, dynamisch $\\tfrac{1}{2}\\rho v^2$, geodätisch $\\rho g z$', examRelevance: 'hoch' },
            { label: 'Voraussetzungen: inkompressibel, stationär, reibungsfrei', examRelevance: 'hoch' },
            { label: 'Torricelli: $v = \\sqrt{2gh}$ (Ausflussgeschwindigkeit aus Behälter)', examRelevance: 'hoch' },
            { label: 'Mit Verlusten: $+ \\Delta p_V$ auf rechter Seite', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-1-1', concepts: ['rho-g-h'] },
              { lessonId: 'fluid-2-1', concepts: ['kontinuitaet'] },
            ],
            concepts: [
              { id: 'bernoulli',   title: 'Bernoulli $p+\\tfrac12\\rho v^2+\\rho g z=$const',                                  dependsOn: [] },
              { id: 'drei-drucke', title: 'Statisch $p$, dynamisch $\\tfrac12\\rho v^2$, geodätisch $\\rho g z$',                dependsOn: ['bernoulli'] },
              { id: 'bernoulli-vor', title: 'Voraussetzungen: inkompressibel, stationär, reibungsfrei',                          dependsOn: ['bernoulli'] },
              { id: 'torricelli',  title: 'Torricelli $v=\\sqrt{2gh}$',                                                          dependsOn: ['bernoulli'] },
              { id: 'bernoulli-verlust', title: 'Mit Verlust: $+\\Delta p_V$ auf rechter Seite',                                  dependsOn: ['bernoulli'] },
            ],
            subGoalConcepts: { 0: ['bernoulli'], 1: ['drei-drucke'], 2: ['bernoulli-vor'], 3: ['torricelli'], 4: ['bernoulli-verlust'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['bernoulli'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['drei-drucke'],        qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['drei-drucke'],        qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['drei-drucke'],        qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['drei-drucke'],        qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['drei-drucke'],        qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['bernoulli-vor'],      qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bernoulli-vor'],      qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['bernoulli-vor'],      qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bernoulli-vor'],      qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['bernoulli-vor'],      qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['torricelli'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['torricelli'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['torricelli'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['torricelli'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['torricelli'],         qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['bernoulli-verlust'],  qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bernoulli-verlust'],  qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['bernoulli-verlust'],  qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bernoulli-verlust'],  qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['bernoulli-verlust'],  qty: 1 },
            ],
          },
          content: String.raw`Für reibungsarme stationäre Strömung entlang einer Stromlinie:

$$p + \frac{1}{2}\rho v^2 + \rho g z = \text{konstant}$$

Das ist Energieerhaltung pro Volumen.`,
          exercises: [
            { type: 'multiple-choice', question: 'Der Term $\\frac{1}{2} \\rho v^2$ beschreibt:', options: ['statischen Druck', 'dynamischen Druck', 'Höhendruck', 'Temperatur'], correctIndex: 1, explanation: '$\\frac{1}{2}\\rho v^2$ ist der dynamische Druck.', hints: ['Dynamischer Druck: ½ρv²', 'Enthält v² → kinetische Energie pro Volumen.', '½ · 1000 · 2² = 2000 Pa'], wrongAnswerExplanations: { 0: 'Der statische Druck ist $p$ selbst in der Bernoulli-Gleichung $p + \\tfrac{1}{2}\\rho v^2 + \\rho g z = \\text{const}$. Der Term mit $v^2$ ist der dynamische Anteil.', 2: 'Höhendruck ist $\\rho g z$ (Ort), nicht $\\tfrac{1}{2}\\rho v^2$ (Geschwindigkeit). Drei separate Terme in Bernoulli.', 3: 'Temperatur kommt in der klassischen Bernoulli-Gleichung (inkompressibel, reibungsfrei) gar nicht vor. Alle drei Terme haben Einheit Pa.' } },
            { type: 'true-false', statement: 'Bernoulli berücksichtigt im Grundmodell keine Reibungsverluste.', correct: true, explanation: 'Die einfache Bernoulli-Gleichung gilt idealisiert reibungsfrei.', hints: ['Bernoulli gilt für reibungsfreie, stationäre Strömung.', 'Reale Strömung hat Reibungsverluste.', 'Verlust-Bernoulli: + Δp_V auf der rechten Seite.'] },
            { type: 'number-input', question: 'ρ = 1000 $kg/m^3$, v = 2 m/s. Dynamischer Druck?', correctValue: 2000, tolerance: 1, unit: 'Pa', explanation: '$q = \\frac{1}{2} \\cdot 1000 \\cdot 2^2 = 2000$ Pa.', hints: ['q = ½ρv²', 'v² = 2² = 4', '½ · 1000 · 4 = 2000 Pa'] },
          ],
        },
        {
          id: 'fluid-2-3',
          title: 'Rohrströmung und Druckverlust',
          estimatedMinutes: 16,
          learningGoals: ['Druckverlust nach Hagen-Poiseuille berechnen', 'Darcy-Weisbach-Gleichung anwenden', 'Strömungsregime mit Reynolds-Zahl beurteilen'],
          subGoals: [
            { label: 'Darcy-Weisbach: $\\Delta p = \\lambda (L/d)(\\rho v^2/2)$', examRelevance: 'hoch' },
            { label: 'Reynolds-Zahl: $Re = \\rho v d/\\mu$; laminar $<2300$, turbulent $>4000$', examRelevance: 'hoch' },
            { label: 'Hagen-Poiseuille (laminar): $\\Delta p = 128 \\mu L \\dot V/(\\pi d^4)$', examRelevance: 'hoch' },
            { label: 'Laminares Profil parabolisch, turbulent näherungsweise Blockprofil mit Randschicht', examRelevance: 'mittel' },
            { label: 'Hydraulischer Durchmesser $d_h = 4A/U$ für Nicht-Kreisquerschnitte', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-2-1', concepts: ['v-strom'] },
              { lessonId: 'fluid-2-2', concepts: ['bernoulli-verlust'] },
            ],
            concepts: [
              { id: 'darcy',       title: 'Darcy-Weisbach $\\Delta p=\\lambda(L/d)(\\rho v^2/2)$',                              dependsOn: [] },
              { id: 'reynolds',    title: 'Reynolds $Re=\\rho v d/\\mu$; laminar $<2300$, turbulent $>4000$',                    dependsOn: [] },
              { id: 'hagen-poise', title: 'Hagen-Poiseuille $\\Delta p=128\\mu L\\dot V/(\\pi d^4)$ (laminar)',                  dependsOn: ['reynolds'] },
              { id: 'profil',      title: 'Laminar parabolisch, turbulent Blockprofil + Randschicht',                              dependsOn: ['reynolds'] },
              { id: 'd-hydraul',   title: 'Hydraulischer Durchmesser $d_h=4A/U$ für Nicht-Kreis',                                  dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['darcy'], 1: ['reynolds'], 2: ['hagen-poise'], 3: ['profil'], 4: ['d-hydraul'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['darcy'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['darcy'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['darcy'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['darcy'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['darcy'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['reynolds'],       qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['reynolds'],       qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['reynolds'],       qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['reynolds'],       qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['reynolds'],       qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['hagen-poise'],    qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['hagen-poise'],    qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['hagen-poise'],    qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['hagen-poise'],    qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['hagen-poise'],    qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['profil'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['profil'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['profil'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['profil'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['profil'],         qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['d-hydraul'],      qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['d-hydraul'],      qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['d-hydraul'],      qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['d-hydraul'],      qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['d-hydraul'],      qty: 1 },
            ],
          },
          content: String.raw`**Hagen-Poiseuille** (laminare Rohrströmung):
$$\Delta p = \frac{128 \mu L \dot V}{\pi d^4}$$

**Darcy-Weisbach** (allgemein, auch turbulent):
$$\Delta p = \lambda \cdot \frac{L}{d} \cdot \frac{\rho v^2}{2}$$

$\lambda$ ist der **Rohrreibungsbeiwert** (aus Moody-Diagramm oder Formeln).

**Hydraulischer Durchmesser** für Nicht-Kreisquerschnitte: $d_h = 4A/U$.

**Strömungsregime:** $Re = \rho v d / \mu$. Laminar: $Re < 2300$, turbulent: $Re > 4000$.`,
          exercises: [
            {
              type: 'number-input',
              question: 'Laminare Strömung: d = 0,02 m, L = 10 m, μ = 0,001 Pa·s, V̇ = 1×10⁻⁴ m³/s. Druckverlust nach Hagen-Poiseuille in Pa?',
              correctValue: 255,
              tolerance: 5,
              unit: 'Pa',
              explanation: 'Δp = 128·μ·L·V̇/(π·d⁴) = 128·0,001·10·10⁻⁴/(π·1,6·10⁻⁷) ≈ 254,6 Pa ≈ 255 Pa.',
              hints: ['Δp = 128·μ·L·V̇/(π·d⁴)', 'd⁴ = (0,02)⁴ = 1,6·10⁻⁷', '128·0,001·10·10⁻⁴ / (π·1,6·10⁻⁷)'],
            },
            {
              type: 'multiple-choice',
              question: 'Bei laminarer Rohrströmung (Kreisquerschnitt) ist das Geschwindigkeitsprofil:',
              options: ['gleichförmig (Blockprofil)', 'parabolisch', 'dreieckig', 'logarithmisch'],
              correctIndex: 1,
              explanation: 'Hagen-Poiseuille liefert ein parabolisches Profil mit v_max in der Rohrmitte.',
              hints: ['Laminare Strömung: Reibung dämpft Randschicht', 'Hagen-Poiseuille-Profil', 'Mittelpunkt schneller als Rand'],
              wrongAnswerExplanations: {
                0: 'Ein Blockprofil (uniform) gibt es bei idealisierter reibungsfreier Strömung oder am Einlauf. Durch Wandreibung entsteht aber ein krummes Profil — bei laminar eben eine Parabel.',
                2: 'Dreieckig mit linearem Anstieg tritt bei Couette-Strömung (zwei Platten mit Scherung) auf, nicht im Rohr. Rohrströmung liefert $v(r) = v_{max}(1 - r^2/R^2)$ — Parabel.',
                3: 'Logarithmisch ist typisch für turbulente Grenzschichten (universelles Wandgesetz), nicht für laminare Rohrströmung.',
              },
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Darcy-Weisbach: L = 50 m, d = 0,05 m, v = 3 m/s, ρ = 1000 kg/m³, λ = 0,02. Druckverlust Δp in Pa?',
              correctValue: 90000,
              tolerance: 500,
              unit: 'Pa',
              explanation: 'Δp = λ·(L/d)·(ρv²/2) = 0,02·(50/0,05)·(1000·9/2) = 0,02·1000·4500 = 90000 Pa.',
              hints: ['Δp = λ·(L/d)·(ρv²/2)', 'L/d = 50/0,05 = 1000', 'ρv²/2 = 1000·9/2 = 4500'],
            },
          ],
        },
        {
          id: 'fluid-2-4',
          title: 'Ähnlichkeitsgesetze und Pumpen',
          estimatedMinutes: 16,
          learningGoals: ['Dimensionslose Kennzahlen einordnen', 'Pumpengesetze auf geänderte Drehzahl anwenden', 'Leistungsabhängigkeit von der Drehzahl erkennen'],
          subGoals: [
            { label: 'Pumpengesetze: $\\dot V \\propto n$, $H \\propto n^2$, $P \\propto n^3$', examRelevance: 'hoch' },
            { label: 'Reynolds für Ähnlichkeit: Modell- und Prototyp-Re gleich halten', examRelevance: 'hoch' },
            { label: 'Froude-Zahl: $Fr = v/\\sqrt{gL}$ (Schwerewellen, offene Gerinne)', examRelevance: 'mittel' },
            { label: 'Euler-Zahl: $Eu = \\Delta p/(\\rho v^2)$ (Druckabfall)', examRelevance: 'mittel' },
            { label: 'Leistung verdoppeln bedeutet Drehzahl $\\sqrt[3]{2} \\approx 1{,}26$-fach', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-2-3', concepts: ['reynolds'] },
            ],
            concepts: [
              { id: 'pumpgesetz',  title: 'Pumpengesetze $\\dot V\\propto n$, $H\\propto n^2$, $P\\propto n^3$',                dependsOn: [] },
              { id: 're-aehnl',    title: 'Re-Ähnlichkeit: Modell und Prototyp gleich',                                          dependsOn: [] },
              { id: 'froude',      title: 'Froude $Fr=v/\\sqrt{gL}$ (Schwerewellen)',                                            dependsOn: [] },
              { id: 'euler-zahl',  title: 'Euler-Zahl $Eu=\\Delta p/(\\rho v^2)$',                                                dependsOn: [] },
              { id: 'p-doppelt',   title: 'Leistung verdoppeln: Drehzahl $\\sqrt[3]{2}\\approx 1{,}26$-fach',                     dependsOn: ['pumpgesetz'] },
            ],
            subGoalConcepts: { 0: ['pumpgesetz'], 1: ['re-aehnl'], 2: ['froude'], 3: ['euler-zahl'], 4: ['p-doppelt'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['pumpgesetz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pumpgesetz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['pumpgesetz'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pumpgesetz'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['pumpgesetz'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['re-aehnl'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['re-aehnl'],            qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['re-aehnl'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['re-aehnl'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['re-aehnl'],            qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['froude'],              qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['froude'],              qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['froude'],              qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['froude'],              qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['froude'],              qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['euler-zahl'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['euler-zahl'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['euler-zahl'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['euler-zahl'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['euler-zahl'],          qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['p-doppelt'],           qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['p-doppelt'],           qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['p-doppelt'],           qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['p-doppelt'],           qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['p-doppelt'],           qty: 1 },
            ],
          },
          content: String.raw`**Dimensionslose Kennzahlen** der Strömungsmechanik:

| Kennzahl | Formel | Bedeutung |
|---|---|---|
| Reynolds | $Re = \rho v L / \mu$ | Trägheit/Zähigkeit |
| Froude | $Fr = v/\sqrt{gL}$ | Trägheit/Schwerkraft |
| Euler | $Eu = \Delta p / (\rho v^2)$ | Druck/Trägheit |

**Pumpengesetze** (Ähnlichkeitsgesetze):
$$\frac{\dot V_2}{\dot V_1} = \frac{n_2}{n_1}, \qquad \frac{H_2}{H_1} = \left(\frac{n_2}{n_1}\right)^2, \qquad \frac{P_2}{P_1} = \left(\frac{n_2}{n_1}\right)^3$$

Verdoppelung der Drehzahl → 8-fache Leistungsaufnahme!`,
          exercises: [
            {
              type: 'number-input',
              question: 'Pumpe: n_1 = 1000 1/min, V̇_1 = 0,02 m³/s. Bei n_2 = 1500 1/min: V̇_2 in m³/s?',
              correctValue: 0.03,
              tolerance: 0.001,
              unit: 'm³/s',
              explanation: 'V̇_2 = V̇_1·(n_2/n_1) = 0,02·(1500/1000) = 0,02·1,5 = 0,03 m³/s.',
              hints: ['V̇ proportional zu n', 'V̇_2 = V̇_1·(n_2/n_1)', '0,02·(1500/1000)'],
            },
            {
              type: 'number-input',
              question: 'Gleiche Pumpe: H_1 = 20 m bei n_1 = 1000 1/min. Förderhöhe H_2 bei n_2 = 1500 1/min in m?',
              correctValue: 45,
              tolerance: 0.1,
              unit: 'm',
              explanation: 'H_2 = H_1·(n_2/n_1)² = 20·(1500/1000)² = 20·2,25 = 45 m.',
              hints: ['H proportional zu n²', 'H_2 = H_1·(n_2/n_1)²', '20·1,5² = 45'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Gleiche Pumpe: P_1 = 2 kW bei n_1 = 1000 1/min. Leistung P_2 bei n_2 = 2000 1/min in kW?',
              correctValue: 16,
              tolerance: 0.1,
              unit: 'kW',
              explanation: 'P_2 = P_1·(n_2/n_1)³ = 2·(2000/1000)³ = 2·8 = 16 kW.',
              hints: ['P proportional zu n³', 'P_2 = P_1·(n_2/n_1)³', '2·2³ = 16'],
            },
          ],
        },
        {
          id: 'fluid-2-5',
          title: 'Moody-Diagramm & Rohrreibung praktisch',
          estimatedMinutes: 15,
          learningGoals: [
            'Rohrreibungszahl $\\lambda$ in Abhängigkeit von $\\text{Re}$ und $\\varepsilon/d$ bestimmen',
            'Laminar-Formel $\\lambda = 64/\\text{Re}$ und Blasius-Formel sicher anwenden',
            'Druckverlust aus $\\lambda$, $L$, $d$, $v$, $\\rho$ berechnen',
          ],
          subGoals: [
            { label: 'Laminar: $\\lambda = 64/Re$ (unabhängig von Rauhigkeit)', examRelevance: 'hoch' },
            { label: 'Turbulent glatt (Blasius, $Re < 10^5$): $\\lambda = 0{,}316/Re^{0{,}25}$', examRelevance: 'hoch' },
            { label: 'Turbulent rau: Moody-Diagramm oder Colebrook-Gleichung', examRelevance: 'mittel' },
            { label: 'Relative Rauhigkeit $\\varepsilon/d$: Materialkennwert aus Tabelle ablesen', examRelevance: 'mittel' },
            { label: 'Bei voll-turbulenter Strömung: $\\lambda$ Re-unabhängig (nur $\\varepsilon/d$)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-2-3', concepts: ['darcy', 'reynolds'] },
            ],
            concepts: [
              { id: 'lambda-laminar', title: 'Laminar $\\lambda=64/Re$ (rauhigkeits-unabhängig)',                              dependsOn: [] },
              { id: 'blasius',        title: 'Turbulent glatt (Blasius): $\\lambda=0{,}316/Re^{0{,}25}$',                       dependsOn: [] },
              { id: 'moody',          title: 'Turbulent rau: Moody-Diagramm oder Colebrook',                                    dependsOn: [] },
              { id: 'eps-d',          title: 'Relative Rauhigkeit $\\varepsilon/d$ aus Tabelle',                                  dependsOn: [] },
              { id: 'voll-turb',      title: 'Voll-turbulent: $\\lambda$ Re-unabhängig (nur $\\varepsilon/d$)',                   dependsOn: ['moody', 'eps-d'] },
            ],
            subGoalConcepts: { 0: ['lambda-laminar'], 1: ['blasius'], 2: ['moody'], 3: ['eps-d'], 4: ['voll-turb'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['lambda-laminar'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lambda-laminar'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['lambda-laminar'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lambda-laminar'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['lambda-laminar'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['blasius'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['blasius'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['blasius'],                 qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['blasius'],                 qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['blasius'],                 qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['moody'],                   qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['moody'],                   qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['moody'],                   qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['moody'],                   qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['moody'],                   qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['eps-d'],                   qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eps-d'],                   qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['eps-d'],                   qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eps-d'],                   qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['eps-d'],                   qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['voll-turb'],               qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['voll-turb'],               qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['voll-turb'],               qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['voll-turb'],               qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['voll-turb'],               qty: 1 },
            ],
          },
          content: String.raw`Die Rohrreibungszahl $\lambda$ (auch Darcy-Friktionsfaktor) ist der Schlüssel zum Druckverlust in Rohren:

$$\Delta p = \lambda \cdot \frac{L}{d} \cdot \frac{\rho v^2}{2}$$

Ihr Wert hängt vom **Strömungsregime** und bei turbulenter Strömung zusätzlich von der **relativen Rauhigkeit** $\varepsilon/d$ ab:

| Regime | Formel für $\lambda$ |
|---|---|
| Laminar ($\text{Re} < 2300$) | $\lambda = 64/\text{Re}$ |
| Turbulent, glattes Rohr (Blasius, $\text{Re} < 10^5$) | $\lambda = 0{,}316 / \text{Re}^{0{,}25}$ |
| Turbulent, raues Rohr | Moody-Diagramm oder Colebrook-Gleichung |

**Moody-Diagramm** — grafisches Werkzeug: auf der x-Achse $\text{Re}$ (logarithmisch), auf der y-Achse $\lambda$ (logarithmisch), Kurvenschar für verschiedene $\varepsilon/d$.

**Typische Werte der Rohrrauhigkeit** $\varepsilon$:

| Material | $\varepsilon$ (mm) |
|---|---|
| gezogenes Kupfer / Glas | 0,0015 |
| Handelsstahl, geschweißt | 0,05 |
| gußeisernes Rohr | 0,25 |
| Beton rauh | 1–3 |

Bei stark rauen Rohren und hohen $\text{Re}$ wird $\lambda$ praktisch **unabhängig von $\text{Re}$** (voll rauhes Regime) — nur $\varepsilon/d$ zählt dann.`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Für eine laminare Rohrströmung ($\\text{Re} < 2300$) gilt die Rohrreibungszahl',
              options: [
                '$\\lambda = 64/\\text{Re}$',
                '$\\lambda = 0{,}316/\\text{Re}^{0{,}25}$',
                '$\\lambda = \\text{Re}/64$',
                '$\\lambda$ ist konstant $= 0{,}02$',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** Im laminaren Bereich liefert Hagen-Poiseuille die exakte Lösung.

**Rechnung:** $\\lambda = 64/\\text{Re}$ folgt direkt aus dem parabolischen Geschwindigkeitsprofil in glatten Kreisrohren.

**Probe:** Bei $\\text{Re} = 1000$: $\\lambda = 64/1000 = 0{,}064$. In Druckverlust-Formel eingesetzt liefert das dasselbe Ergebnis wie Hagen-Poiseuille.

**Typischer Fehler:** Blasius-Formel ($0{,}316/\\text{Re}^{0{,}25}$) auch im laminaren Bereich einsetzen — sie gilt nur für turbulent-glatt.`,
              hints: [
                'Laminar = Hagen-Poiseuille. Formel?',
                'Darcy-Weisbach & Hagen-Poiseuille vergleichen → $\\lambda = 64/\\text{Re}$.',
                'Blasius ($0{,}316/\\text{Re}^{0{,}25}$) gilt nur für turbulent-glatt.',
              ],
              wrongAnswerExplanations: {
                1: 'Das ist die Blasius-Formel für turbulent-glatte Rohre, gültig etwa $2300 < \\text{Re} < 10^5$. Im laminaren Bereich liefert sie falsche Werte.',
                2: '$\\text{Re}/64$ hat die falsche Tendenz — im laminaren Bereich **sinkt** $\\lambda$ mit steigendem $\\text{Re}$. Die korrekte Formel ist $\\lambda = 64/\\text{Re}$.',
                3: 'Konstantes $\\lambda$ gibt es nur im „voll rauhen" Regime bei sehr hohem $\\text{Re}$. Im laminaren Bereich ändert sich $\\lambda$ stark mit $\\text{Re}$.',
              },
            },
            {
              type: 'number-input',
              question: 'Wasserströmung im glatten Rohr, $\\text{Re} = 10\\,000$. Berechne die Rohrreibungszahl $\\lambda$ nach Blasius (auf 4 Nachkommastellen).',
              correctValue: 0.0316,
              tolerance: 0.0005,
              unit: '',
              explanation: `**Ansatz:** Blasius-Formel für turbulent-glatt: $\\lambda = 0{,}316 / \\text{Re}^{0{,}25}$.

**Rechnung:** $\\text{Re}^{0{,}25} = 10\\,000^{0{,}25} = \\sqrt{\\sqrt{10\\,000}} = \\sqrt{100} = 10$. Damit $\\lambda = 0{,}316 / 10 = 0{,}0316$.

**Probe:** Typische Rohrreibungszahlen im turbulent-glatten Bereich liegen bei $0{,}02$–$0{,}04$. ✓

**Typischer Fehler:** $\\text{Re}^{0{,}25}$ mit $\\text{Re}^{2}$ verwechseln oder $\\sqrt{\\sqrt{\\cdot}}$ unterlassen.`,
              hints: [
                'Formel: $\\lambda = 0{,}316 / \\text{Re}^{0{,}25}$.',
                '$10\\,000^{0{,}25} = \\sqrt{\\sqrt{10\\,000}} = \\sqrt{100} = 10$.',
                '$0{,}316 / 10 = 0{,}0316$.',
              ],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Rohr $L = 100$ m, $d = 0{,}05$ m, Wasser ($\\rho = 1000\\,\\text{kg/m}^3$) mit $v = 2$ m/s, $\\lambda = 0{,}03$. Wie groß ist der Druckverlust $\\Delta p$ in $\\text{Pa}$?',
              correctValue: 120000,
              tolerance: 500,
              unit: 'Pa',
              explanation: `**Ansatz:** Darcy-Weisbach $\\Delta p = \\lambda \\cdot (L/d) \\cdot \\rho v^2/2$.

**Rechnung:** $L/d = 100/0{,}05 = 2000$. $\\rho v^2/2 = 1000 \\cdot 4 / 2 = 2000$ Pa. $\\Delta p = 0{,}03 \\cdot 2000 \\cdot 2000 = 120\\,000$ Pa.

**Probe:** $120$ kPa $= 1{,}2$ bar Druckverlust über $100$ m Rohr — plausibel für Industriewasser.

**Typischer Fehler:** $d$ in mm statt m belassen oder den Faktor $1/2$ vor $\\rho v^2$ vergessen.`,
              hints: [
                'Formel: $\\Delta p = \\lambda \\cdot (L/d) \\cdot (\\rho v^2/2)$.',
                '$L/d = 100/0{,}05 = 2000$, $\\rho v^2/2 = 2000\\,\\text{Pa}$.',
                'Alles in SI-Einheiten lassen.',
              ],
            },
          ],
        },
      ],
    },
    // ── Unit 3: Prüfungsaufgaben Fluid ────────────────────────────────
    {
      id: 'fluid-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Strömungsmechanik-Aufgaben.',
      lessons: [
        {
          id: 'fluid-3-1',
          title: 'Fluid: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Bernoulli-Aufgaben lösen', 'Hydrostatik und Auftrieb kombinieren'],
          subGoals: [
            { label: 'Bernoulli vollständig: $p_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g z_1 = p_2 + \\ldots$', examRelevance: 'hoch' },
            { label: 'Staudruck/Pitot: $v = \\sqrt{2\\Delta p/\\rho}$', examRelevance: 'hoch' },
            { label: 'Kontinuität + Bernoulli kombiniert für Düsen/Verengungen', examRelevance: 'hoch' },
            { label: 'Torricelli-Ausfluss: $v = \\sqrt{2gh}$ (freies Ausströmen unter Wasserhöhe)', examRelevance: 'hoch' },
            { label: 'Reynolds-Zahl entscheidet Strömungsregime; laminar/turbulent bestimmt $\\lambda$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-2-1', concepts: ['kontinuitaet'] },
              { lessonId: 'fluid-2-2', concepts: ['bernoulli', 'torricelli'] },
              { lessonId: 'fluid-2-3', concepts: ['reynolds'] },
            ],
            concepts: [
              { id: 'bernoulli-pr', title: 'Bernoulli vollständig: $p_1+\\tfrac12\\rho v_1^2+\\rho g z_1=p_2+\\ldots$',           dependsOn: [] },
              { id: 'pitot',        title: 'Staudruck/Pitot $v=\\sqrt{2\\Delta p/\\rho}$',                                          dependsOn: ['bernoulli-pr'] },
              { id: 'kont-bern',    title: 'Kontinuität + Bernoulli für Düsen/Verengungen',                                         dependsOn: ['bernoulli-pr'] },
              { id: 'torricelli-pr', title: 'Torricelli-Ausfluss $v=\\sqrt{2gh}$',                                                  dependsOn: ['bernoulli-pr'] },
              { id: 're-regime',    title: 'Re bestimmt laminar/turbulent → $\\lambda$',                                            dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['bernoulli-pr'], 1: ['pitot'], 2: ['kont-bern'], 3: ['torricelli-pr'], 4: ['re-regime'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['bernoulli-pr'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bernoulli-pr'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['bernoulli-pr'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bernoulli-pr'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['bernoulli-pr'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['pitot'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pitot'],                 qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['pitot'],                 qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pitot'],                 qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['pitot'],                 qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['kont-bern'],             qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kont-bern'],             qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['kont-bern'],             qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kont-bern'],             qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['kont-bern'],             qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['torricelli-pr'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['torricelli-pr'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['torricelli-pr'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['torricelli-pr'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['torricelli-pr'],         qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['re-regime'],             qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['re-regime'],             qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['re-regime'],             qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['re-regime'],             qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['re-regime'],             qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Fluidmechanik-Klausuraufgaben**

**Bernoulli vollständig:**
$$p_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

**Staudruck / Pitot-Rohr:** $v = \sqrt{2 \cdot \Delta p / \rho}$

**Reynolds-Zahl:** $Re = \frac{\rho \cdot v \cdot d}{\mu}$. Laminar: Re < 2300, turbulent: Re > 4000.`,
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Wasser (ρ = 1000) fließt durch ein Rohr: $v_1$ = 2 m/s, $d_1$ = 100 mm, $d_2$ = 50 mm. Berechne $v_2$.', correctValue: 8, tolerance: 0.1, unit: 'm/s', explanation: '$A_1 v_1 = A_2 v_2$. $A_1/A_2$ = $(d_1/d_2)^2$ = $(100/50)^2$ = 4. $v_2$ = 4·2 = 8 m/s.', hints: ['Kontinuität: $A_1 v_1 = A_2 v_2$', '$A = \\pi d^2/4$ → A-Verhältnis = $(d_1/d_2)^2$', 'v_2 = v_1 · (d_1/d_2)² = 2 · 4 = 8 m/s'] },
            { type: 'number-input', question: '[PRÜFUNG] Ein Tank steht offen ($p_1$ = 101325 Pa). Ausflusshöhe h = 5 m über dem Auslass. Ausflussgeschwindigkeit? (ρ = 1000, g = 9,81)', correctValue: 9.9, tolerance: 0.2, unit: 'm/s', explanation: 'Torricelli: $v = \\sqrt{2gh}$ = $\\sqrt{2 \\cdot 9{,}81 \\cdot 5}$ = $\\sqrt{98{,}1}$ ≈ 9,9 m/s.', hints: ['Bernoulli mit $p_1 = p_2$ (beides offen), $v_1$ ≈ 0', '$v = \\sqrt{2gh}$', '$\\sqrt{2 \\cdot 9{,}81 \\cdot 5} = \\sqrt{98{,}1} \\approx 9{,}9$ m/s'] },
            { type: 'number-input', question: '[PRÜFUNG] Wasser fließt mit v = 1 m/s durch ein Rohr d = 50 mm. Dynamische Viskosität μ = 0,001 Pa·s. Reynolds-Zahl?', correctValue: 50000, tolerance: 100, unit: '', explanation: 'Re = ρvd/μ = 1000·1·0,05/0,001 = 50000.', hints: ['Re = ρvd/μ', 'd in Meter: 50 mm = 0,05 m', '1000 · 1 · 0,05 / 0,001 = 50000'] },
            { type: 'multiple-choice', question: '[PRÜFUNG] Bei Re = 50000 ist die Strömung:', options: ['laminar', 'im Übergangsbereich', 'turbulent', 'stationär'], correctIndex: 2, explanation: 'Re > 4000 → turbulent (Rohrströmung).', hints: ['Grenzwert: Re < 2300 laminar, Re > 4000 turbulent.', 'Re = 50000 >> 4000 → turbulent.', 'Grenzwert: ca. 2300 (laminar/turbulent)'], wrongAnswerExplanations: { 0: 'Laminar gilt nur für $Re < 2300$ in Rohren. Bei $Re = 50000$ ist das über 20-fach überschritten.', 1: 'Der Übergangsbereich liegt bei $2300 \\lesssim Re \\lesssim 4000$. $Re = 50000$ ist weit darüber.', 3: '„Stationär“ meint zeitlich konstant und ist orthogonal zu laminar/turbulent. Turbulente Strömung kann auch stationär (im Mittel) sein.' } },
          ],
        },
        {
          id: 'fluid-3-2',
          title: 'Druckverlust, Pumpen & Ähnlichkeit',
          type: 'explanation-intuitive',
          estimatedMinutes: 22,
          learningGoals: ['Darcy-Weisbach für Rohrdruckverlust anwenden', 'Pumpengesetze bei Drehzahländerung nutzen', 'Bernoulli mit Verlusten kombinieren'],
          subGoals: [
            { label: 'Erweiterte Bernoulli mit Verlust: $+ \\Delta p_V$ auf Senkeseite', examRelevance: 'hoch' },
            { label: 'Pumpenleistung: $P = \\rho g \\dot V H / \\eta_P$', examRelevance: 'hoch' },
            { label: 'Reihenschaltung Rohre: $\\Delta p_\\text{ges} = \\sum \\Delta p_i$', examRelevance: 'mittel' },
            { label: 'Einzelverluste: $\\Delta p = \\zeta (\\rho v^2/2)$ ($\\zeta$ aus Tabelle für Krümmer, Ventile, \\ldots)', examRelevance: 'mittel' },
            { label: 'Pumpenkennlinie × Anlagenkennlinie = Betriebspunkt', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'fluid-2-2', concepts: ['bernoulli-verlust'] },
              { lessonId: 'fluid-2-3', concepts: ['darcy'] },
              { lessonId: 'fluid-2-4', concepts: ['pumpgesetz'] },
            ],
            concepts: [
              { id: 'erw-bernoulli', title: 'Erweiterte Bernoulli mit $+\\Delta p_V$ auf Senkeseite',                                dependsOn: [] },
              { id: 'pumpleistung', title: 'Pumpenleistung $P=\\rho g\\dot V H/\\eta_P$',                                            dependsOn: [] },
              { id: 'reihen-rohre', title: 'Reihenschaltung Rohre: $\\Delta p_{\\text{ges}}=\\sum\\Delta p_i$',                       dependsOn: [] },
              { id: 'zeta-verlust', title: 'Einzelverluste $\\Delta p=\\zeta(\\rho v^2/2)$',                                          dependsOn: [] },
              { id: 'betriebspunkt', title: 'Pumpenkennlinie × Anlagenkennlinie = Betriebspunkt',                                     dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['erw-bernoulli'], 1: ['pumpleistung'], 2: ['reihen-rohre'], 3: ['zeta-verlust'], 4: ['betriebspunkt'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['erw-bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['erw-bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['erw-bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['erw-bernoulli'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['erw-bernoulli'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['pumpleistung'],           qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pumpleistung'],           qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['pumpleistung'],           qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pumpleistung'],           qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['pumpleistung'],           qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['reihen-rohre'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['reihen-rohre'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['reihen-rohre'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['reihen-rohre'],           qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['reihen-rohre'],           qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['zeta-verlust'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['zeta-verlust'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['zeta-verlust'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['zeta-verlust'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['zeta-verlust'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['betriebspunkt'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['betriebspunkt'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['betriebspunkt'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['betriebspunkt'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['betriebspunkt'],          qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Druckverlust, Pumpen & Ähnlichkeit**

**Druckverlust (Darcy-Weisbach):** $\Delta p = \lambda \cdot (L/d) \cdot (\rho v^2/2)$

**Hagen-Poiseuille (laminar):** $\Delta p = 128 \mu L \dot V / (\pi d^4)$

**Pumpengesetze:**
- $\dot V \propto n$, $H \propto n^2$, $P \propto n^3$

**Bernoulli mit Verlusten:** $p_1 + \frac12 \rho v_1^2 + \rho g z_1 = p_2 + \frac12 \rho v_2^2 + \rho g z_2 + \Delta p_V$`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Rohr: d = 0,1 m, L = 200 m, v = 2 m/s, ρ = 1000 kg/m³, λ = 0,025. Druckverlust Δp in Pa?',
              correctValue: 100000,
              tolerance: 1000,
              unit: 'Pa',
              explanation: 'Δp = λ·(L/d)·(ρv²/2) = 0,025·(200/0,1)·(1000·4/2) = 0,025·2000·2000 = 100000 Pa.',
              hints: ['Δp = λ·(L/d)·(ρv²/2)', 'L/d = 2000', 'ρv²/2 = 1000·4/2 = 2000'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Pumpe: n_1 = 3000 1/min, P_1 = 10 kW. Bei n_2 = 1500 1/min: Leistung P_2 in kW?',
              correctValue: 1.25,
              tolerance: 0.05,
              unit: 'kW',
              explanation: 'P_2 = P_1·(n_2/n_1)³ = 10·(1500/3000)³ = 10·0,125 = 1,25 kW.',
              hints: ['P ∝ n³', 'n_2/n_1 = 0,5', '10·0,5³ = 1,25'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Bernoulli mit Verlust: p_1 = 200000 Pa, v_1 = 1 m/s, z_1 = 0; v_2 = 4 m/s, z_2 = 0, ρ = 1000 kg/m³, Δp_V = 5000 Pa. p_2 in Pa?',
              correctValue: 187500,
              tolerance: 500,
              unit: 'Pa',
              explanation: 'p_2 = p_1 + ½ρ(v_1²−v_2²) − Δp_V = 200000 + 500·(1−16) − 5000 = 200000 − 7500 − 5000 = 187500 Pa.',
              hints: ['Bernoulli: p_2 = p_1 + ½ρ(v_1²−v_2²) − Δp_V', '½·1000·(1−16) = −7500', '200000−7500−5000'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Wird die Drehzahl einer Pumpe verdoppelt, steigt der Volumenstrom auf:',
              options: ['das 2-Fache', 'das 4-Fache', 'das 8-Fache', 'das 1,5-Fache'],
              correctIndex: 0,
              explanation: 'Pumpengesetz: V̇ ∝ n. Drehzahl ×2 → V̇ ×2. (H ∝ n² → ×4; P ∝ n³ → ×8).',
              hints: ['V̇ ∝ n (linear!)', 'H ∝ n², P ∝ n³', 'Merke: 1-2-3 für V̇, H, P'],
              wrongAnswerExplanations: {
                1: 'Faktor 4 gehört zur Förderhöhe $H \\propto n^2$ (bei $n \\cdot 2$ wird $H \\cdot 4$). Volumenstrom ist linear.',
                2: 'Faktor 8 gehört zur Antriebsleistung $P \\propto n^3$ (bei $n \\cdot 2$ wird $P \\cdot 8$). Volumenstrom wächst nur linear.',
                3: 'Faktor 1,5 wäre bei $n$-Faktor 1,5 — hier aber Verdoppelung ($\\times 2$). Merkregel: 1-2-3 für $\\dot V$, $H$, $P$.',
              },
            },
          ],
        },
      ],
    },
  ],
}

