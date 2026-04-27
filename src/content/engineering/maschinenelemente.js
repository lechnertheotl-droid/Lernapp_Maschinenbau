// ── maschinenelemente — Topic-Definition (kompakter Scaffold) ─────────────────

export const maschinenelementeTopicDef = 
{
  topic: {
    id: 'maschinenelemente',
    title: 'Maschinenelemente',
    description: 'Schrauben, Wellen, Lager und Zahnräder als konstruktive Grundbausteine.',
    subject: 'engineering',
    icon: 'MEL',
    color: 'green',
    estimatedHours: 6,
    difficulty: 3,
    level: 'vertiefung',
    prerequisites: ['festigkeitslehre'],
    phase: 'semester-2',
    examRelevance: 'pflicht',
    topicGoals: [
      'Schraubenverbindungen auf Zug-, Scher- und Flächenpressungslast auslegen (Vorspannkraft, Betriebskraft)',
      'Welle-Nabe-Verbindungen (Passfeder, Keilwelle, Presssitz) anhand Momenten- und Flächenpressungs-Kriterium auswählen',
      'Wellen auf Biegung, Torsion und kombinierte Belastung mit Vergleichsspannung nach GEH auslegen',
      'Wälz- und Gleitlager nach Tragzahl $C$ und modifizierter Lebensdauer $L_{10} = (C/P)^p \\cdot 10^6$ dimensionieren',
      'Stirnrad-Getriebe mit Übersetzung $i = z_2/z_1$ und Modul $m = d/z$ rechnen; Verluste pro Stufe einschätzen',
      'Passungen (Spiel, Übergang, Übermaß) nach ISO-Tabellensystem lesen und konstruktiv begründen',
    ],
  },
  units: [
    {
      id: 'melem-unit-1',
      title: 'Verbindungen',
      description: 'Schrauben und formschlüssige Verbindungen.',
      lessons: [
        {
          id: 'melem-1-1',
          title: 'Schraubenverbindungen',
          learningGoals: ['Kraftfluss in Schraubenverbindungen verstehen', 'Vorspannung einordnen'],
          subGoals: [
            { label: 'Vorspannkraft $F_V$ erzeugt Klemmkraft in der Fuge — verhindert Fugenöffnen', examRelevance: 'hoch' },
            { label: 'Kraftverteilung: nur ein Bruchteil der Betriebskraft fließt durch die Schraube ($\\phi$-Faktor)', examRelevance: 'hoch' },
            { label: 'Festigkeitsklassen 8.8, 10.9, 12.9: erste Zahl ≈ $R_m/100$ MPa, zweite ≈ $R_e/R_m$', examRelevance: 'mittel' },
            { label: 'Anziehdrehmoment $M_A$ aus Hersteller-Tabelle — nie größer als Streckgrenze der Schraube', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'vorspann',     title: 'Vorspannkraft $F_V$ erzeugt Klemmkraft, verhindert Fugenöffnen',                       dependsOn: [] },
              { id: 'phi-faktor',   title: 'Verspannungsfaktor $\\phi$: nur Bruchteil der Betriebskraft durch Schraube',           dependsOn: ['vorspann'] },
              { id: 'fkl',          title: 'Festigkeitsklassen 8.8, 10.9, 12.9 — erste Zahl ≈ $R_m/100$',                          dependsOn: [] },
              { id: 'anzieh-ma',    title: 'Anziehdrehmoment $M_A$ aus Tabelle, nie über Streckgrenze',                              dependsOn: ['vorspann'] },
            ],
            subGoalConcepts: { 0: ['vorspann'], 1: ['phi-faktor'], 2: ['fkl'], 3: ['anzieh-ma'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['vorspann'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vorspann'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['vorspann'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vorspann'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['vorspann'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['phi-faktor'],        qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['phi-faktor'],        qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['phi-faktor'],        qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['phi-faktor'],        qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['phi-faktor'],        qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['fkl'],               qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fkl'],               qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['fkl'],               qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fkl'],               qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['fkl'],               qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['anzieh-ma'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['anzieh-ma'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['anzieh-ma'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['anzieh-ma'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['anzieh-ma'],         qty: 1 },
            ],
          },
          content: String.raw`Schraubenverbindungen nutzen **Vorspannung**, um Bauteile zu klemmen.

Bei Betriebslast darf die Klemmkraft nicht vollständig abgebaut werden, sonst können Fugen öffnen und Schrauben zyklisch überlastet werden.`,
          exercises: [
            { type: 'multiple-choice', question: 'Wozu dient Schraubenvorspannung hauptsächlich?', options: ['Dekoration', 'Klemmkraft in der Fuge erzeugen', 'Masse erhöhen', 'Drehzahl messen'], correctIndex: 1, explanation: 'Vorspannung erzeugt Klemmkraft und stabilisiert die Verbindung.', hints: ['Vorspannung erzeugt Klemmkraft in der Fuge.', 'Klemmkraft verhindert Fugenöffnen unter Last.', 'Ohne Vorspannung: wechselnde Last direkt auf Schraube.'], wrongAnswerExplanations: { 0: 'Vorspannung ist eine mechanische Funktion, keine optische. Sie erzeugt die Klemmkraft $F_V$, die die Fuge geschlossen hält.', 2: 'Die Masse einer Schraubenverbindung ändert sich durch Anziehen nicht. Vorspannung erzeugt Kraft, nicht zusätzliche Masse.', 3: 'Drehzahlmessung erfolgt über Sensoren (Inkrementalgeber, Hall-Sensoren). Schrauben-Vorspannung hat keinen Messzweck.' } },
            { type: 'true-false', statement: 'Eine korrekt vorgespannte Schraube kann Betriebslasten günstiger aufnehmen.', correct: true, explanation: 'Die Vorspannung reduziert ungünstige Lastwechsel im Schraubenschaft.', hints: ['Vorspannung teilt den Kraftfluss auf Schraube und Bauteile auf.', 'Günstig: weniger Wechsellastanteil auf der Schraube.', 'Günstiger Kraftfluss → längere Lebensdauer.'] },
            { type: 'number-input', question: 'Eine Schraube trägt 12 kN von insgesamt 48 kN. Berechne den Lastanteil als Dezimalzahl.', correctValue: 0.25, tolerance: 0.01, unit: '', explanation: '12/48 = 0,25 = 25%.', hints: ['Lastanteil = Einzellast / Gesamtlast', '12 / 48 = 0,25', '0,25 = 25 %'] },
          ],
        },
        {
          id: 'melem-1-2',
          title: 'Passfedern und formschlüssige Verbindungen',
          learningGoals: ['Formschluss von Kraftschluss unterscheiden', 'Drehmomentübertragung beschreiben'],
          subGoals: [
            { label: 'Formschluss: Geometrie überträgt Kraft (Passfeder, Zahn); Kraftschluss: Reibung überträgt Kraft (Presssitz, Kupplung)', examRelevance: 'hoch' },
            { label: 'Drehmoment aus Umfangskraft: $M_t = F_u \\cdot r$; Umfangskraft $F_u = 2 M_t / d$ an der Welle mit Durchmesser $d$', examRelevance: 'hoch' },
            { label: 'Flächenpressung an der Passfeder: $p = F_u / (l \\cdot h/2) \\le p_{zul}$ — bestimmt die Passfeder-Länge $l$', examRelevance: 'hoch' },
            { label: 'Passfedern sind Normteile nach DIN 6885 — Form A (rund), Form B (gerade); Bezeichnung $b \\times h \\times l$', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'form-kraft',  title: 'Form- vs. Kraftschluss: Geometrie vs. Reibung',                                       dependsOn: [] },
              { id: 'mt-fu',       title: '$M_t=F_u\\cdot r$, $F_u=2M_t/d$',                                                       dependsOn: [] },
              { id: 'fl-pressung', title: 'Flächenpressung Passfeder $p=F_u/(l\\cdot h/2)\\le p_{\\text{zul}}$',                   dependsOn: ['mt-fu'] },
              { id: 'din-6885',    title: 'DIN 6885 Passfedern: Form A/B, $b\\times h\\times l$',                                  dependsOn: ['fl-pressung'] },
            ],
            subGoalConcepts: { 0: ['form-kraft'], 1: ['mt-fu'], 2: ['fl-pressung'], 3: ['din-6885'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['form-kraft'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['form-kraft'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['form-kraft'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['form-kraft'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['form-kraft'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['mt-fu'],               qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['mt-fu'],               qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['mt-fu'],               qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['mt-fu'],               qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['mt-fu'],               qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['fl-pressung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fl-pressung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['fl-pressung'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fl-pressung'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['fl-pressung'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['din-6885'],            qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['din-6885'],            qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['din-6885'],            qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['din-6885'],            qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['din-6885'],            qty: 1 },
            ],
          },
          content: String.raw`Eine Passfeder überträgt Drehmoment über **Formschluss** zwischen Welle und Nabe.

Formschluss bedeutet: Geometrie verhindert Relativbewegung. Kraftschluss bedeutet: Reibung verhindert Relativbewegung.`,
          exercises: [
            { type: 'multiple-choice', question: 'Eine Passfeder ist primär eine ...', options: ['stoffschlüssige Verbindung', 'formschlüssige Verbindung', 'thermische Isolation', 'Messsensorik'], correctIndex: 1, explanation: 'Passfedern übertragen Drehmoment durch Formschluss.', hints: ['Formschluss: Geometrie verhindert Relativbewegung.', 'Passfeder greift in Nut in Welle und Nabe.', 'Drehmoment wird über Flanken übertragen.'], wrongAnswerExplanations: { 0: 'Stoffschluss bezeichnet Verbindungen durch Materialverbund (Schweißen, Kleben, Löten). Eine Passfeder ist lösbar und bleibt ein eigener Körper — das ist formschlüssig.', 2: 'Passfedern sind mechanische Bauteile aus Stahl, keine Isolierungen. Drehmomentübertragung ist ihr Zweck.', 3: 'Sensorik misst Größen — Passfedern übertragen Drehmoment zwischen Welle und Nabe.' } },
            { type: 'true-false', statement: 'Kraftschluss beruht im Kern auf Reibung.', correct: true, explanation: 'Kraftschluss nutzt Normalkraft und Reibwert.', hints: ['Kraftschluss beruht auf Reibung.', 'Reibkraft = μ · Normalkraft.', 'Beispiel: Pressverband, Klemmverbindung.'] },
            { type: 'multiple-choice', question: 'Drehmoment wird bei Welle-Nabe-Verbindungen übertragen, um ...', options: ['Rotation weiterzugeben', 'Temperatur zu senken', 'Druck zu messen', 'Gewicht zu erzeugen'], correctIndex: 0, explanation: 'Welle-Nabe-Verbindungen dienen der Drehmomentübertragung.', hints: ['Welle überträgt Drehmoment (Rotation).', 'Nabe sitzt auf der Welle und nimmt Drehmoment ab.', 'Passfeder → formschlüssige Drehmomentübertragung.'], wrongAnswerExplanations: { 1: 'Temperaturänderung ist keine Funktion mechanischer Drehmomentübertragung. Dafür gibt es Kühler/Wärmetauscher.', 2: 'Druckmessung ist Aufgabe von Sensoren (Drucksensoren). Welle-Nabe-Verbindungen sind mechanisch, nicht sensorisch.', 3: 'Gewicht wird durch Masse im Schwerefeld bestimmt. Drehmomentübertragung ändert kein Gewicht.' } },
          ],
        },
        {
          id: 'melem-1-3',
          title: 'Schweißverbindungen',
          estimatedMinutes: 12,
          learningGoals: ['Schubspannung in Kehlnähten berechnen', 'Verbindungsarten vergleichen'],
          subGoals: [
            { label: 'Kehlnaht-Spannung: $\\tau = F/(a \\cdot l_w)$', examRelevance: 'hoch' },
            { label: 'Nahtdicke Kehlnaht: $a \\approx 0{,}7 \\cdot h$ (Schenkellänge $h$)', examRelevance: 'hoch' },
            { label: 'Verbindungsarten: Schweißen (stoffschlüssig, dauerhaft), Schrauben (lösbar)', examRelevance: 'mittel' },
            { label: 'Tragende Nahtlänge $l_w$ = geometrische Länge minus Endkrater (≈ $l - 2a$)', examRelevance: 'mittel' },
            { label: 'Zulässige Schweißnahtspannung = Grundwerkstoff $\\times$ Schweißfaktor (z.B. 0{,}8)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'kehlnaht-tau', title: 'Kehlnaht-Spannung $\\tau=F/(a\\cdot l_w)$',                                          dependsOn: [] },
              { id: 'nahtdicke',    title: 'Nahtdicke $a\\approx 0{,}7\\cdot h$',                                                  dependsOn: ['kehlnaht-tau'] },
              { id: 'verb-arten',   title: 'Schweißen (stoffschlüssig, dauerhaft) vs. Schrauben (lösbar)',                          dependsOn: [] },
              { id: 'tragende-lw',  title: 'Tragende Nahtlänge $l_w\\approx l-2a$ (Endkrater)',                                    dependsOn: ['kehlnaht-tau'] },
              { id: 'schweissfakt', title: '$\\sigma_{\\text{zul}}^{\\text{Schweiß}}=$ Grundwerkstoff $\\times$ Schweißfaktor',     dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['kehlnaht-tau'], 1: ['nahtdicke'], 2: ['verb-arten'], 3: ['tragende-lw'], 4: ['schweissfakt'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kehlnaht-tau'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kehlnaht-tau'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['kehlnaht-tau'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kehlnaht-tau'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['kehlnaht-tau'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['nahtdicke'],             qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['nahtdicke'],             qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['nahtdicke'],             qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['nahtdicke'],             qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['nahtdicke'],             qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['verb-arten'],            qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['verb-arten'],            qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['verb-arten'],            qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['verb-arten'],            qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['verb-arten'],            qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['tragende-lw'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['tragende-lw'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['tragende-lw'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['tragende-lw'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['tragende-lw'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['schweissfakt'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schweissfakt'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['schweissfakt'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schweissfakt'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['schweissfakt'],          qty: 1 },
            ],
          },
          content: String.raw`**Kehlnaht** (häufigste Schweißnahtform):

$$\tau = \frac{F}{a \cdot l_w}$$

$a$ = Nahtdicke (= $0{,}7 \cdot h$ für Kehlnaht mit Schenkellänge $h$), $l_w$ = tragende Nahtlänge.

**Verbindungsarten im Vergleich:**
| Typ | Prinzip | Eignung |
|---|---|---|
| Schweißen | Stoffschluss | dauerhaft, steif |
| Schrauben | Kraft-/Formschluss | lösbar |
| Kleben | Stoffschluss | flächige Verteilung |`,
          exercises: [
            {
              type: 'number-input',
              question: 'Kehlnaht: Nahtdicke a = 5 mm, Nahtlänge l_w = 80 mm, Querkraft F = 8 kN. Schubspannung τ?',
              correctValue: 20,
              tolerance: 0.5,
              unit: 'N/mm²',
              explanation: 'τ = F/(a·l_w) = 8000/(5·80) = 8000/400 = 20 N/mm².',
              hints: ['τ = F/(a·l_w)', 'F in N umrechnen: 8 kN = 8000 N', '5·80 = 400 mm²'],
            },
            {
              type: 'true-false',
              statement: 'Eine Schweißverbindung ist grundsätzlich lösbar.',
              correct: false,
              explanation: 'Schweißverbindungen sind stoffschlüssig und nicht zerstörungsfrei lösbar.',
              hints: ['Stoffschluss verbindet dauerhaft', 'Schweißen ist nicht zerstörungsfrei trennbar.', 'Beispiel lösbar: Schrauben'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Naht: a = 4 mm, l_w = 100 mm, F = 10 kN. Schubspannung τ?',
              options: ['25 N/mm²', '40 N/mm²', '10 N/mm²', '50 N/mm²'],
              correctIndex: 0,
              explanation: 'τ = F/(a·l_w) = 10000/(4·100) = 10000/400 = 25 N/mm².',
              hints: ['τ = F/(a·l_w)', 'F = 10000 N, a·l_w = 400 mm²', '10000/400 = 25'],
              wrongAnswerExplanations: {
                1: 'Vermutlich wurde fälschlich $a \\cdot l_w = 250$ (Division statt Multiplikation mit 100) eingesetzt. Korrekt: $10000/(4 \\cdot 100) = 25$ N/mm².',
                2: '10 N/mm² entspräche $a \\cdot l_w = 1000$ mm² — z.B. wenn $a = 10$ statt 4 verwendet. $\\tau = F/(a \\cdot l_w)$ mit $a = 4$ und $l_w = 100$ gibt $400$ mm².',
                3: '50 N/mm² ergäbe sich aus $a \\cdot l_w = 200$ (z.B. $a = 2$ statt 4). Korrekte Fläche: $4 \\cdot 100 = 400$ mm², also $\\tau = 25$ N/mm².',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'melem-unit-2',
      title: 'Wellen, Lager, Zahnräder',
      description: 'Rotierende Maschinenelemente.',
      lessons: [
        {
          id: 'melem-2-1',
          title: 'Wellen und Lager',
          learningGoals: ['Aufgaben von Wellen und Lagern unterscheiden', 'Radial- und Axiallasten erkennen'],
          subGoals: [
            { label: 'Welle überträgt Drehmoment und Rotation', examRelevance: 'hoch' },
            { label: 'Radiallast: quer zur Wellenachse; Axiallast: entlang Wellenachse', examRelevance: 'hoch' },
            { label: 'Lagerfunktionen: Führung (radial/axial) + Stützung (Kraftaufnahme)', examRelevance: 'hoch' },
            { label: 'Fest-Los-Lagerung: ein Lager fixiert axial, anderes erlaubt Längsdehnung', examRelevance: 'mittel' },
            { label: 'Lagerarten: Rillenkugel-, Schrägkugel-, Kegelrollen-, Pendelrollenlager', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'welle-funkt',  title: 'Welle überträgt Drehmoment und Rotation',                                              dependsOn: [] },
              { id: 'rad-ax-last',  title: 'Radiallast (quer) vs. Axiallast (entlang Achse)',                                       dependsOn: [] },
              { id: 'lager-funkt',  title: 'Lagerfunktion: Führung + Stützung',                                                     dependsOn: ['rad-ax-last'] },
              { id: 'fest-los',     title: 'Fest-Los-Lagerung: einer fixiert axial, anderer erlaubt Dehnung',                       dependsOn: ['lager-funkt'] },
              { id: 'lager-arten',  title: 'Rillenkugel-, Schrägkugel-, Kegelrollen-, Pendelrollenlager',                            dependsOn: ['lager-funkt'] },
            ],
            subGoalConcepts: { 0: ['welle-funkt'], 1: ['rad-ax-last'], 2: ['lager-funkt'], 3: ['fest-los'], 4: ['lager-arten'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['welle-funkt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['welle-funkt'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['welle-funkt'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['welle-funkt'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['welle-funkt'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['rad-ax-last'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rad-ax-last'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['rad-ax-last'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rad-ax-last'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['rad-ax-last'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['lager-funkt'],          qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lager-funkt'],          qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['lager-funkt'],          qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lager-funkt'],          qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['lager-funkt'],          qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['fest-los'],             qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fest-los'],             qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['fest-los'],             qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fest-los'],             qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['fest-los'],             qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['lager-arten'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lager-arten'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['lager-arten'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lager-arten'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['lager-arten'],          qty: 1 },
            ],
          },
          content: String.raw`Eine **Welle** überträgt Drehmoment und Rotation. Ein **Lager** stützt die Welle und erlaubt definierte Bewegung.

Radiallast wirkt quer zur Wellenachse, Axiallast entlang der Wellenachse.`,
          exercises: [
            { type: 'multiple-choice', question: 'Eine Radiallast wirkt ...', options: ['entlang der Wellenachse', 'quer zur Wellenachse', 'immer tangential', 'nie auf Lager'], correctIndex: 1, explanation: 'Radial bedeutet quer zur Achse.', hints: ['Radial = in Richtung des Radius, quer zur Achse.', 'Axiallast: entlang der Wellenachse (in Längsrichtung).', 'Querkräfte (z.B. aus Zahnrädern) = Radiallasten.'], wrongAnswerExplanations: { 0: 'Entlang der Achse wirkt die Axiallast (von lat. „axis“ = Achse). „Radial“ kommt von „Radius“ — also senkrecht zur Achse.', 2: 'Tangentiale Lasten wirken in Umfangsrichtung (z.B. Zahnkraft am Zahnrad). Die radiale Komponente zeigt zum Wellenmittelpunkt.', 3: 'Genau umgekehrt: Lager sind die primären Aufnahmestellen für Radiallasten (Radial-Lager). Axiallasten gehen an Axial- oder Schulterlager.' } },
            { type: 'true-false', statement: 'Lager sollen Bewegung führen und Kräfte aufnehmen.', correct: true, explanation: 'Lager erfüllen Führungs- und Stützfunktion.', hints: ['Lager führen die Welle und nehmen Kräfte auf.', 'Ohne Lager: keine definierte Position der Welle.', 'Funktion: Führung + Stützung.'] },
            { type: 'multiple-choice', question: 'Eine Welle dient hauptsächlich der Übertragung von:', options: ['Drehmoment', 'Farbe', 'Temperatur allein', 'Druckhöhe'], correctIndex: 0, explanation: 'Wellen übertragen Drehmoment und Drehbewegung.', hints: ['Welle: überträgt Drehmoment und Rotation.', 'Drehmoment M = F · r (Umfangskraft mal Radius).', 'Ohne Welle keine Drehmomentübertragung.'], wrongAnswerExplanations: { 1: 'Farbe ist eine optische Eigenschaft und keine Übertragungsgröße. Wellen sind mechanische Rotationsbauteile.', 2: 'Temperaturübertragung erfolgt über Wärmetauscher/Leitungen. Wellen übertragen zwar etwas Wärme über Reibung, das ist aber nicht ihre Hauptfunktion.', 3: 'Druckhöhe ist ein Begriff aus der Fluidmechanik ($p/(\\rho g)$). Wellen übertragen Drehmoment und Rotation, keine hydraulischen Druckgrößen.' } },
          ],
        },
        {
          id: 'melem-2-2',
          title: 'Zahnräder und Übersetzung',
          learningGoals: ['Übersetzungsverhältnis bestimmen', 'Drehzahländerung qualitativ deuten'],
          subGoals: [
            { label: 'Übersetzung: $i = z_2/z_1 = n_1/n_2 = d_2/d_1$', examRelevance: 'hoch' },
            { label: 'Mehrstufiges Getriebe: $i_\\text{ges} = i_1 \\cdot i_2 \\cdots$', examRelevance: 'hoch' },
            { label: 'Drehmoment-Wandlung: $M_2 = i \\cdot M_1 \\cdot \\eta$ (Untersetzung steigert Moment)', examRelevance: 'hoch' },
            { label: 'Umfangskraft $F_t = 2M/d$', examRelevance: 'hoch' },
            { label: 'Modul $m = d/z$ — Standardgröße für Zahnrad-Geometrie', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'uebersetz',    title: 'Übersetzung $i=z_2/z_1=n_1/n_2=d_2/d_1$',                                            dependsOn: [] },
              { id: 'mehrstufig',   title: 'Mehrstufig $i_{\\text{ges}}=i_1\\cdot i_2\\cdots$',                                    dependsOn: ['uebersetz'] },
              { id: 'm-wandlung',   title: 'Drehmoment-Wandlung $M_2=i\\cdot M_1\\cdot\\eta$',                                     dependsOn: ['uebersetz'] },
              { id: 'f-t-zahn',     title: 'Umfangskraft Zahn $F_t=2M/d$',                                                          dependsOn: [] },
              { id: 'modul-zr',     title: 'Modul $m=d/z$',                                                                          dependsOn: [] },
            ],
            subGoalConcepts: { 0: ['uebersetz'], 1: ['mehrstufig'], 2: ['m-wandlung'], 3: ['f-t-zahn'], 4: ['modul-zr'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['uebersetz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['uebersetz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['uebersetz'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['uebersetz'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['uebersetz'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['mehrstufig'],         qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['mehrstufig'],         qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['mehrstufig'],         qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['mehrstufig'],         qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['mehrstufig'],         qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['m-wandlung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['m-wandlung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['m-wandlung'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['m-wandlung'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['m-wandlung'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['f-t-zahn'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['f-t-zahn'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['f-t-zahn'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['f-t-zahn'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['f-t-zahn'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['modul-zr'],           qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['modul-zr'],           qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['modul-zr'],           qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['modul-zr'],           qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['modul-zr'],           qty: 1 },
            ],
          },
          content: String.raw`Für ein einfaches Zahnradpaar gilt näherungsweise:

$$i = \frac{z_2}{z_1} = \frac{n_1}{n_2}$$

Mehr Zähne am Abtriebsrad bedeuten geringere Abtriebsdrehzahl und höheres Drehmoment.`,
          exercises: [
            { type: 'number-input', question: 'Ein Zahnradpaar hat z1 = 20 und z2 = 60 Zähne. Berechne die Übersetzung i = z2/z1.', correctValue: 3, tolerance: 0.01, unit: '', explanation: 'i = z2/z1 = 60/20 = 3.', hints: ['Übersetzung: i = z2/z1 (Abtrieb/Antrieb)', 'z2 = 60, z1 = 20', 'i = 60/20 = 3'] },
            { type: 'multiple-choice', question: 'Bei i = 3 ist n2 gegenüber n1 ...', options: ['dreimal so groß', 'gleich groß', 'ein Drittel', 'negativ'], correctIndex: 2, explanation: 'i = n1/n2 = 3 → n2 = n1/3.', hints: ['i = n1/n2 → n2 = n1/i', 'i = 3 → n2 = n1/3', 'Untersetzung: Abtriebsdrehzahl sinkt, Moment steigt.'], wrongAnswerExplanations: { 0: 'Das wäre eine Übersetzung ins Schnelle mit $i = n_2/n_1$-Konvention. Hier ist aber $i = n_1/n_2 = z_2/z_1$ definiert — Abtriebsdrehzahl $n_2$ wird kleiner.', 1: '$n_2 = n_1$ entspricht $i = 1$, also gleich vielen Zähnen. Bei $i = 3$ ist ein deutlicher Drehzahlsprung vorhanden.', 3: 'Vorzeichenwechsel (Drehrichtungsumkehr) steckt nicht im Betrag von $i$. Das Übersetzungsverhältnis ist positiv, für Drehrichtung sind Achsenstellung und Zähnezahl unabhängig.' } },
            { type: 'true-false', statement: 'Mehr Zähne am Abtriebsrad senken typischerweise die Abtriebsdrehzahl.', correct: true, explanation: 'Bei z2 > z1 entsteht eine Untersetzung.', hints: ['i = z2/z1 (Übersetzung)', 'z2 > z1 → i > 1 → Untersetzung.', 'Mehr Zähne am Abtrieb → niedrigere Abtriebsdrehzahl.'] },
          ],
        },
        {
          id: 'melem-2-3',
          title: 'Lagerlebensdauer',
          estimatedMinutes: 14,
          learningGoals: ['L10-Lebensdauer berechnen', 'Dynamische Tragzahl C interpretieren'],
          subGoals: [
            { label: 'L10-Lebensdauer: $L_{10} = (C/P)^p$ Mio. Umdrehungen', examRelevance: 'hoch' },
            { label: 'Exponent: $p = 3$ Kugellager, $p = 10/3$ Rollenlager', examRelevance: 'hoch' },
            { label: 'In Stunden: $L_{10h} = L_{10} \\cdot 10^6/(60 \\cdot n)$', examRelevance: 'hoch' },
            { label: 'C = dyn. Tragzahl (Katalog), P = äquivalente dyn. Last ($P = X F_r + Y F_a$)', examRelevance: 'hoch' },
            { label: 'L10 = 10 % Ausfallwahrscheinlichkeit (90 % der Lager halten länger)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'melem-2-1', concepts: ['lager-funkt', 'lager-arten'] },
            ],
            concepts: [
              { id: 'l10-formel',   title: 'L10 $=(C/P)^p$ Mio. Umdrehungen',                                                       dependsOn: [] },
              { id: 'p-exponent',   title: '$p=3$ Kugel, $p=10/3$ Rolle',                                                            dependsOn: ['l10-formel'] },
              { id: 'l10h',         title: 'In Stunden: $L_{10h}=L_{10}\\cdot 10^6/(60n)$',                                          dependsOn: ['l10-formel'] },
              { id: 'c-p-werte',    title: 'C dyn. Tragzahl, $P=XF_r+YF_a$ äquivalente Last',                                       dependsOn: ['l10-formel'] },
              { id: 'l10-stat',     title: 'L10 = 10 % Ausfallwahrscheinlichkeit',                                                   dependsOn: ['l10-formel'] },
            ],
            subGoalConcepts: { 0: ['l10-formel'], 1: ['p-exponent'], 2: ['l10h'], 3: ['c-p-werte'], 4: ['l10-stat'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['l10-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['l10-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['l10-formel'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['l10-formel'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['l10-formel'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['p-exponent'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['p-exponent'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['p-exponent'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['p-exponent'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['p-exponent'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['l10h'],                qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['l10h'],                qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['l10h'],                qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['l10h'],                qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['l10h'],                qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['c-p-werte'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['c-p-werte'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['c-p-werte'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['c-p-werte'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['c-p-werte'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['l10-stat'],            qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['l10-stat'],            qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['l10-stat'],            qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['l10-stat'],            qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['l10-stat'],            qty: 1 },
            ],
          },
          content: String.raw`Die **nominelle Lebensdauer** $L_{10}$ gibt an, nach wie vielen Millionen Umdrehungen 10 % der Lager ausfallen:

$$L_{10} = \left(\frac{C}{P}\right)^p \quad [\text{Mio. Umdrehungen}]$$

- $C$ = dynamische Tragzahl (aus Lagerkatalog), Einheit N
- $P$ = äquivalente dynamische Lagerbelastung, Einheit N
- $p = 3$ für Kugellager, $p = 10/3$ für Rollenlager

**Lebensdauer in Stunden:**
$$L_{10h} = \frac{L_{10} \cdot 10^6}{60 \cdot n}$$`,
          exercises: [
            {
              type: 'number-input',
              question: 'Kugellager: C = 30000 N, P = 10000 N. L₁₀ in Mio. Umdrehungen?',
              correctValue: 27,
              tolerance: 0.5,
              unit: 'Mio. U',
              explanation: 'L₁₀ = (C/P)³ = (30000/10000)³ = 3³ = 27 Mio. Umdrehungen.',
              hints: ['L₁₀ = (C/P)^p', 'p = 3 für Kugellager', '(30000/10000)³ = 3³ = 27'],
            },
            {
              type: 'number-input',
              question: 'L₁₀ = 27 Mio. Umdrehungen, n = 1500 1/min. Lebensdauer L₁₀h in Stunden?',
              correctValue: 300,
              tolerance: 2,
              unit: 'h',
              explanation: 'L₁₀h = 27·10⁶/(60·1500) = 27000000/90000 = 300 h.',
              hints: ['L₁₀h = L₁₀·10⁶/(60·n)', '60·1500 = 90000 U/h', '27·10⁶ / 90000 = 300'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Rollenlager (p = 10/3): C = 50000 N, P = 20000 N. L₁₀ in Mio. U? (auf eine Dezimalstelle)',
              correctValue: 21.2,
              tolerance: 0.5,
              unit: 'Mio. U',
              explanation: 'L₁₀ = (C/P)^(10/3) = (50000/20000)^(10/3) = 2,5^(10/3). Berechnung: 2,5^3 = 15,625 und 2,5^(1/3) ≈ 1,357. Also 2,5^(10/3) = 2,5^3 · 2,5^(1/3) ≈ 15,625 · 1,357 ≈ 21,2 Mio. U.',
              hints: ['L₁₀ = (C/P)^(10/3) für Rollenlager', 'C/P = 2,5 → 2,5^(10/3) = 2,5³ · 2,5^(1/3)', '2,5³ = 15,625; 2,5^(1/3) ≈ 1,357 → L₁₀ ≈ 21,2'],
            },
          ],
        },
      ],
    },
    // ── Unit 3: Prüfungsaufgaben ME ─────────────────────────────────
    {
      id: 'melem-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Maschinenelemente-Aufgaben.',
      lessons: [
        {
          id: 'melem-3-1',
          title: 'ME: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Zahnradberechnungen durchführen', 'Wellenauslegung verstehen'],
          subGoals: [
            { label: 'Leistung: $P = M \\omega = M (2\\pi n/60)$', examRelevance: 'hoch' },
            { label: 'Umfangskraft am Zahnrad: $F_t = 2M/d$', examRelevance: 'hoch' },
            { label: 'Mehrstufige Übersetzung: $i_\\text{ges} = \\prod i_i$', examRelevance: 'hoch' },
            { label: 'Abtriebsdrehzahl: $n_2 = n_1/i_\\text{ges}$', examRelevance: 'hoch' },
            { label: 'Drehmoment steigt bei Untersetzung: $M_2 = i M_1 \\eta$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'melem-2-2', concepts: ['uebersetz', 'mehrstufig', 'm-wandlung', 'f-t-zahn'] },
            ],
            concepts: [
              { id: 'p-m-omega',   title: 'Leistung $P=M\\omega=M(2\\pi n/60)$',                                                  dependsOn: [] },
              { id: 'ft-pr',       title: 'Umfangskraft am Zahnrad $F_t=2M/d$',                                                    dependsOn: [] },
              { id: 'i-prod',      title: 'Mehrstufig $i_{\\text{ges}}=\\prod i_i$',                                                dependsOn: [] },
              { id: 'n-abtrieb',   title: 'Abtriebsdrehzahl $n_2=n_1/i_{\\text{ges}}$',                                              dependsOn: ['i-prod'] },
              { id: 'm-untersetz', title: 'Drehmoment bei Untersetzung $M_2=iM_1\\eta$',                                            dependsOn: ['i-prod'] },
            ],
            subGoalConcepts: { 0: ['p-m-omega'], 1: ['ft-pr'], 2: ['i-prod'], 3: ['n-abtrieb'], 4: ['m-untersetz'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['p-m-omega'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['p-m-omega'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['p-m-omega'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['p-m-omega'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['p-m-omega'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['ft-pr'],              qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['ft-pr'],              qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['ft-pr'],              qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['ft-pr'],              qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['ft-pr'],              qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['i-prod'],             qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['i-prod'],             qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['i-prod'],             qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['i-prod'],             qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['i-prod'],             qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['n-abtrieb'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['n-abtrieb'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['n-abtrieb'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['n-abtrieb'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['n-abtrieb'],          qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['m-untersetz'],        qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['m-untersetz'],        qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['m-untersetz'],        qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['m-untersetz'],        qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['m-untersetz'],        qty: 1, note: '[PRÜFUNG]' },
            ],
          },
          content: String.raw`**[PRÜFUNG] Maschinenelemente-Klausuraufgaben**

**Leistung und Drehmoment:**
$$P = M \cdot \omega = M \cdot \frac{2\pi n}{60}$$

**Umfangskraft am Zahnrad:** $F_t = \frac{2M}{d}$

**Übersetzung mehrstufig:** $i_{ges} = i_1 \cdot i_2 \cdot ... \cdot i_n$

**Lagerlebensdauer (vereinfacht):** $L_{10} = \left(\frac{C}{P}\right)^p$ mit p = 3 (Kugel) oder p = 10/3 (Rolle)`,
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Motor: P = 5 kW bei n = 1500 1/min. Drehmoment M?', correctValue: 31.83, tolerance: 0.5, unit: 'Nm', explanation: 'M = P/ω = 5000/(2π·1500/60) = 5000/157,08 ≈ 31,83 Nm.', hints: ['ω = 2πn/60', 'P in Watt: 5 kW = 5000 W', 'M = P/ω = 5000 / (2π·1500/60) ≈ 31,83 Nm'] },
            { type: 'number-input', question: '[PRÜFUNG] Zahnrad d = 100 mm, Drehmoment M = 50 Nm. Umfangskraft F_t?', correctValue: 1000, tolerance: 1, unit: 'N', explanation: 'F_t = 2M/d = 2·50/0,1 = 1000 N.', hints: ['F_t = 2M/d', 'd in Meter: 100 mm = 0,1 m', '2 · 50 / 0,1 = 1000 N'] },
            { type: 'number-input', question: '[PRÜFUNG] Zweistufiges Getriebe: $i_1$ = 3, $i_2$ = 4. Gesamtübersetzung?', correctValue: 12, tolerance: 0, unit: '', explanation: 'i_ges = $i_1$ · $i_2$ = 3 · 4 = 12.', hints: ['Mehrstufig: Übersetzungen multiplizieren.', 'i_ges = i_1 · i_2', '3 · 4 = 12'] },
            { type: 'number-input', question: '[PRÜFUNG] Antrieb $n_1$ = 3000 1/min, i_ges = 12. Abtriebsdrehzahl?', correctValue: 250, tolerance: 0, unit: '1/min', explanation: '$n_2$ = $n_1$/i = 3000/12 = 250 1/min.', hints: ['$n_2 = n_1$/i_ges', 'i_ges im Nenner', '3000 / 12'] },
          ],
        },
        {
          id: 'melem-3-2',
          title: 'Schweißnähte, Lager & Lebensdauer',
          type: 'explanation-intuitive',
          estimatedMinutes: 22,
          learningGoals: ['Schweißnahtspannungen berechnen', 'Lagerlebensdauer bestimmen'],
          subGoals: [
            { label: 'Kehlnaht: $\\tau = F/(a l_w)$, $a = 0{,}7 h$', examRelevance: 'hoch' },
            { label: 'Lagerlebensdauer: $L_{10} = (C/P)^p$, $p = 3$ (Kugel) / $p = 10/3$ (Rolle)', examRelevance: 'hoch' },
            { label: 'Einheiten-Check: L10 in Mio. U, L10h in Stunden nach $\\times 10^6/(60n)$', examRelevance: 'hoch' },
            { label: 'Leistungs-Drehmoment-Umrechnung $\\omega = 2\\pi n/60$', examRelevance: 'hoch' },
            { label: 'Plausibilitäts-Check: typische Lagerlebensdauer 5000–50000 h', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'melem-1-3', concepts: ['kehlnaht-tau', 'nahtdicke'] },
              { lessonId: 'melem-2-3', concepts: ['l10-formel', 'p-exponent', 'l10h'] },
              { lessonId: 'melem-3-1', concepts: ['p-m-omega'] },
            ],
            concepts: [
              { id: 'kehlnaht-pr', title: 'Kehlnaht $\\tau=F/(a l_w)$, $a=0{,}7 h$',                                            dependsOn: [] },
              { id: 'l10-pr',      title: 'Lagerlebensdauer $L_{10}=(C/P)^p$',                                                    dependsOn: [] },
              { id: 'einh-check',  title: 'L10 in Mio. U, L10h via $\\times 10^6/(60n)$',                                          dependsOn: ['l10-pr'] },
              { id: 'omega-um',    title: 'Leistung↔Drehmoment $\\omega=2\\pi n/60$',                                              dependsOn: [] },
              { id: 'l10-typisch', title: 'Plausi-Check: typisch 5000–50000 h',                                                    dependsOn: ['einh-check'] },
            ],
            subGoalConcepts: { 0: ['kehlnaht-pr'], 1: ['l10-pr'], 2: ['einh-check'], 3: ['omega-um'], 4: ['l10-typisch'] },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kehlnaht-pr'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kehlnaht-pr'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['kehlnaht-pr'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kehlnaht-pr'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['kehlnaht-pr'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['l10-pr'],               qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['l10-pr'],               qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['l10-pr'],               qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['l10-pr'],               qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['l10-pr'],               qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['einh-check'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einh-check'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['einh-check'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einh-check'],           qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['einh-check'],           qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['omega-um'],             qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['omega-um'],             qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['omega-um'],             qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['omega-um'],             qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['omega-um'],             qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['l10-typisch'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['l10-typisch'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['l10-typisch'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['l10-typisch'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['l10-typisch'],          qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Schweißnähte, Lager & Lebensdauer**

**Kehlnaht:**
$$\tau = \frac{F}{a \cdot l_w}, \qquad a \approx 0{,}7 \cdot h$$

**Lagerlebensdauer:**
$$L_{10} = \left(\frac{C}{P}\right)^p \quad [\text{Mio. U}], \qquad p = 3 \text{ (Kugel)}, \ p = 10/3 \text{ (Rolle)}$$

$$L_{10h} = \frac{L_{10} \cdot 10^6}{60 \cdot n} \quad [\text{Stunden}]$$

**Leistung-Drehmoment:**
$$P = M \cdot \omega, \qquad \omega = \frac{2\pi n}{60}$$`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Kehlnaht: a = 6 mm, l_w = 120 mm, F = 15 kN. Schubspannung τ in N/mm²?',
              correctValue: 20.83,
              tolerance: 0.3,
              unit: 'N/mm²',
              explanation: 'τ = F/(a·l_w) = 15000/(6·120) = 15000/720 ≈ 20,83 N/mm².',
              hints: ['τ = F/(a·l_w)', 'F = 15000 N, a·l_w = 720 mm²', '15000 / 720 ≈ 20,8'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Kugellager: C = 45000 N, P = 15000 N, n = 3000 1/min. Lebensdauer L₁₀h in Stunden?',
              correctValue: 150,
              tolerance: 3,
              unit: 'h',
              explanation: 'L₁₀ = (45000/15000)³ = 3³ = 27 Mio. U. L₁₀h = 27·10⁶/(60·3000) = 27000000/180000 = 150 h.',
              hints: ['L₁₀ = (C/P)³ = 3³ = 27 Mio. U', 'L₁₀h = L₁₀·10⁶ / (60·n)', '27·10⁶ / (60·3000) = 150 h'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Elektromotor: P = 7,5 kW, n = 2900 1/min. Drehmoment M in Nm? (auf eine Dezimalstelle)',
              correctValue: 24.7,
              tolerance: 0.3,
              unit: 'Nm',
              explanation: 'ω = 2π·2900/60 = 303,7 rad/s. M = P/ω = 7500/303,7 ≈ 24,7 Nm.',
              hints: ['ω = 2π·n/60', 'M = P/ω', '7500 / (2π·2900/60)'],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] Verdoppelt man die Lagerbelastung P bei einem Kugellager, sinkt L₁₀ auf ein Achtel.',
              correct: true,
              explanation: 'L₁₀ = (C/P)³. Verdoppelt man P: L₁₀_neu = (C/2P)³ = (1/2)³·(C/P)³ = L₁₀/8.',
              hints: ['L₁₀ ∝ (1/P)³', 'Faktor 2 bei P → Faktor 2³ = 8 weniger L₁₀', 'P³ im Nenner'],
            },
          ],
        },
      ],
    },
  ],
}

