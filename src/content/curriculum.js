// ═══════════════════════════════════════════════════════════════════════════
// Curriculum (Lehrplan TU Wien Maschinenbau)
// ═══════════════════════════════════════════════════════════════════════════
//
// Single Source of Truth für den Lehrplan. Wird sowohl von der UI-Seite
// (src/pages/Lehrplan.jsx) als auch vom Content-Status-Generator
// (scripts/generate-status.js) konsumiert — damit ist der Lehrplan überall
// konsistent und in STATUS.md mit aktuellen Fortschritts-Zahlen angereichert.
//
// Inhalt:
//   CURRICULUM_INTRO      — kurzer Einleitungstext
//   CURRICULUM_PHASES     — Phasen 0-3 mit Fächer-Listen
//   TOPIC_GUIDES          — pro Topic detaillierter Lernpfad:
//                             · summary, whyItMatters
//                             · roadmap (Unit-Reihenfolge + Fokus)
//                             · mustKnow (Kernkompetenzen)
//                             · commonMistakes, examFocus, studyTips
//                             · minExercisesPerLesson (Qualitätsziel)
//   CURRICULUM_TIPS       — allgemeine Lern- und Prüfungstechnik
//
// ═══════════════════════════════════════════════════════════════════════════

export const CURRICULUM_INTRO =
  'Empfohlene Reihenfolge vom Studienbeginn bis zur Vertiefung. Orientiert am ' +
  'Bachelor-Studienplan Maschinenbau der TU Wien. Jedes Topic kann jederzeit ' +
  'frei gewählt werden — dieser Lehrplan ist nur eine Orientierung.'

/**
 * Die vier Studien-Phasen. `topicIds`/`subjects` referenzieren Topic-IDs
 * aus src/content/index.js. `subjects` bündelt Topics je Studienfach.
 */
export const CURRICULUM_PHASES = [
  {
    id: 0,
    label: 'Phase 0 — Vorkurs',
    subtitle: 'Erste 1–2 Wochen',
    description:
      'Schulwissen festigen. Diese Inhalte sind direkt in die Fach-Topics ' +
      'eingearbeitet — starte mit Algebra Unit 0. Viele Klausurfehler im ' +
      'ersten Semester kommen aus Lücken in genau diesen Grundlagen.',
    subjects: [
      { subject: 'Rechnen & Brüche', topicIds: ['algebra'], hint: 'Unit 0 (Brüche, Klammern, Prozent, Termumformung)' },
      { subject: 'Winkel-Intuition', topicIds: ['trigonometry'], hint: 'Lesson 0 (Winkel, Winkelklassen, Dreieckssumme)' },
      { subject: 'Koordinaten & Pfeile', topicIds: ['vektoren'], hint: 'Lesson 0 (Punkte vs. Vektoren in 2D)' },
      { subject: 'Einheiten & Dimensionsanalyse', topicIds: ['technische-mechanik'], hint: 'Unit 0 (SI, Präfixe, abgeleitete Einheiten)' },
    ],
  },
  {
    id: 1,
    label: 'Phase 1 — 1. Semester',
    subtitle: 'Studienbeginn',
    description:
      'Faustregel: In der ersten Studienwoche die Vorkurs-Units (Phase 0) ' +
      'erledigen, dann parallel Mathe- und Mechanik-Topics aufbauen.',
    subjects: [
      {
        subject: 'Mathematik 1 (Analysis 1, LinAlg-Grundlagen)',
        topicIds: ['algebra', 'trigonometry', 'vektoren', 'ableitung', 'integralrechnung'],
        hint: 'Reihenfolge: Algebra → Trig → Vektoren → Ableitung → Integral',
      },
      { subject: 'Mechanik 1 (Statik)', topicIds: ['technische-mechanik'], hint: 'Unit 0 (Einheiten) → Unit 1 (Statik)' },
      { subject: 'Werkstoffkunde 1', topicIds: ['werkstoffkunde'], hint: 'Unit 1 (Kennwerte) → Unit 2 (Prüfverfahren)' },
      { subject: 'Einführung Informatik / Programmieren', topicIds: ['python-matlab'], hint: 'alle Units' },
      { subject: 'Grundlagen Elektrotechnik', topicIds: ['elektrotechnik'], hint: 'alle Units' },
    ],
  },
  {
    id: 2,
    label: 'Phase 2 — 2. Semester',
    subtitle: 'Aufbau',
    description:
      'Mathematische Tiefe, erste Ingenieurs-Fächer kommen dazu. Statik wird ' +
      'zur Festigkeitslehre, Analysis zur DGL.',
    subjects: [
      {
        subject: 'Mathematik 2 (Analysis 2, DGL, komplexe Zahlen, Reihen, LinAlg 2)',
        topicIds: ['komplexe-zahlen', 'reihen-folgen', 'differentialgleichungen', 'lineare-algebra'],
      },
      { subject: 'Mechanik 2 (Festigkeitslehre)', topicIds: ['festigkeitslehre'] },
      { subject: 'Thermodynamik 1', topicIds: ['thermodynamik'] },
      { subject: 'Maschinenelemente 1', topicIds: ['maschinenelemente'] },
      { subject: 'Werkstoffkunde 2', topicIds: ['werkstoffkunde'], hint: 'Prüfungs-Unit + Vertiefung' },
    ],
  },
  {
    id: 3,
    label: 'Phase 3 — Vertiefung',
    subtitle: 'Ab 3. Semester',
    description: 'Spezialisierte Fächer für weiterführende Maschinenbau-Themen.',
    subjects: [
      { subject: 'Mehrdimensionale Analysis & Vektoranalysis', topicIds: ['mehrdim-analysis'] },
      { subject: 'Numerische Mathematik', topicIds: ['numerik'] },
      { subject: 'Wahrscheinlichkeit & Statistik', topicIds: ['statistik'] },
      { subject: 'Fourier- & Laplace-Transformation', topicIds: ['fourier-laplace'] },
      { subject: 'Strömungsmechanik', topicIds: ['fluidmechanik'] },
      { subject: 'Regelungstechnik', topicIds: ['regelungstechnik'] },
    ],
  },
]

/**
 * QUALITÄTSZIEL pro Lesson: **Mindestanzahl** Aufgaben, damit Lernende den Stoff
 * gründlich einüben können, ohne "nur Schauen". Wird in STATUS.md als Ziel
 * gegen die tatsächliche Aufgabenzahl verglichen.
 *
 * Ausdrücklich kein Cap — Lessons dürfen (und sollen!) mehr als MIN haben.
 * Die Pipeline hängt ALLE verfügbaren manuellen Supplements an, unabhängig
 * vom Base-Count. Wer eine Klausur bestehen will, braucht Routine — Routine
 * kommt durch Menge. Ziel ist eine Typen-Mischung (MC, NI, TF, Matching,
 * Sorting) plus mindestens ein Mastery-Check am Ende.
 */
export const MIN_EXERCISES_PER_LESSON = 20

/**
 * QUALITÄTSZIEL pro Sub-Goal: **Mindestanzahl** eigener Aufgaben (Goal-Tasks),
 * damit jede Teilkompetenz der Lesson mit echter Routine sitzt. Eine einzelne
 * Aufgabe reicht nicht — Lerner:innen brauchen mehrere Variationen, die
 * dieselbe Kompetenz aus verschiedenen Winkeln abfragen (andere Zahlen, andere
 * Kontexte, andere Aufgabentypen, andere Fehlerquellen im Distraktor-Design).
 *
 * **Dies ist ausdrücklich nur die Untergrenze, kein Zielwert und kein Cap.**
 * Wenn ein Sub-Goal besonders prüfungsrelevant oder fehleranfällig ist, sind
 * 6, 8 oder 10 Aufgaben besser. Claude Code soll pro Sub-Goal so viele
 * Aufgaben schreiben, wie inhaltlich noch etwas Neues beitragen — lieber eine
 * mehr als eine zu wenig.
 *
 * Typen sollten sich pro Sub-Goal unterscheiden (nicht mehrmals MC für dasselbe
 * Sub-Goal, solange andere Typen noch offen sind).
 */
export const MIN_TASKS_PER_SUB_GOAL = 5

/**
 * PEDAGOGY_STAGES — die fünf Progressionsstufen, in denen eine Lesson ihre
 * Aufgaben anordnet. Jede Aufgabe gehört EINER Stufe an. Der Bauplan
 * (`lesson.blueprint.taskPlan`) füllt diese Stufen pro Sub-Goal systematisch.
 *
 *   recognize          — Regel/Begriff wiedererkennen (TF, Matching, einfache MC).
 *   apply-guided       — Regel mit Teilschritt anwenden (MC mit Zwischenschritt, NI einfach).
 *   apply-independent  — Regel sicher ohne Hilfe (NI mittel, MC ohne Teaser).
 *   error-analysis     — typischen Fehler erkennen (MC-Fehlersuche, TF mit Haken).
 *   transfer           — Kontextwechsel / Klausur (Sorting-Prozess, NI mit Anwendung, [PRÜFUNG]).
 */
export const PEDAGOGY_STAGES = [
  'recognize',
  'apply-guided',
  'apply-independent',
  'error-analysis',
  'transfer',
]

/**
 * BLUEPRINT_ENFORCED_TOPICS — Topics, für die der Validator den Blueprint-
 * Contract HART durchsetzt. Für diese Topics gilt:
 *
 *   • Jede Lesson MUSS ein `blueprint`-Objekt tragen (s. Schema unten).
 *   • Jede Exercise (in unit*-Dateien, supplements/, subgoal_tasks/) MUSS
 *     ein `pedagogy: { stage, subGoal, uses }` tragen.
 *   • `blueprint.taskPlan[].uses` und `pedagogy.uses` dürfen nur Konzepte
 *     referenzieren, die zum Einsatzzeitpunkt bereits eingeführt sind
 *     (aus `blueprint.concepts` oder `blueprint.prerequisites`).
 *
 * Topics außerhalb dieser Liste werden unverändert validiert (keine
 * Blueprint-Pflicht) — so kann die Migration Topic für Topic laufen.
 */
export const BLUEPRINT_ENFORCED_TOPICS = [
  'algebra',  // alle 18 Lessons blueprintsiert + alle Aufgaben pedagogy-getaggt
]

/**
 * LESSON-BLUEPRINT-SCHEMA — der didaktische Bauplan jeder Lesson.
 *
 * Ziel: Aus dem Blueprint ist ablesbar, WELCHE Konzepte in welcher Reihenfolge
 * eingeführt werden, WELCHE Aufgabe welches Konzept testet (auf welcher
 * Progressionsstufe), und WAS als Vorwissen aus früheren Lessons erwartet
 * wird. Der Blueprint ist die Single Source of Truth für die Task-Cards in
 * STATUS.md.
 *
 * Der Blueprint steht direkt in der Lesson-Definition (in den
 * `unit<N>_*.js`-Dateien unter `src/content/<kategorie>/<topic>/`):
 *
 *   {
 *     id: 'alg-1-3',
 *     title: 'Logarithmusgesetze',
 *     subGoals: [...],
 *     steps: [...],
 *     blueprint: {
 *       prerequisites: [
 *         { lessonId: 'alg-1-1', concepts: ['pot-gesetz-mult', 'pot-gesetz-potenz'] },
 *       ],
 *       concepts: [
 *         // Reihenfolge = didaktische Einführungsreihenfolge.
 *         // `dependsOn` darf nur auf frühere concepts ODER auf prerequisites.concepts verweisen.
 *         { id: 'log-def',        title: 'Definition $\\log_b(x)$', dependsOn: [] },
 *         { id: 'log-rule-mult',  title: 'Produkt-Regel',           dependsOn: ['log-def'] },
 *         { id: 'log-rule-pot',   title: 'Potenz-Regel',            dependsOn: ['log-def'] },
 *         { id: 'log-base-change',title: 'Basiswechsel',            dependsOn: ['log-def','log-rule-pot'] },
 *       ],
 *       subGoalConcepts: {
 *         0: ['log-def'],
 *         1: ['log-rule-mult', 'log-rule-pot'],
 *         2: ['log-base-change'],
 *       },
 *       taskPlan: [
 *         // Jede Zeile definiert mindestens eine Aufgabe dieser Sub-Goal×Stufe×Typ-Kombination.
 *         // `qty` ist das Minimum (mehr ist erlaubt). `uses` listet die Konzept-IDs,
 *         // die diese Aufgabe testen soll — MÜSSEN im Blueprint eingeführt sein.
 *         { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['log-def'],       qty: 1 },
 *         { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['log-def'],       qty: 1 },
 *         { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['log-def'],       qty: 2 },
 *         { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['log-def'],       qty: 1 },
 *         { subGoal: 0, stage: 'transfer',          type: 'sorting',         uses: ['log-def'],       qty: 1 },
 *         { subGoal: 1, stage: 'recognize',         type: 'matching',        uses: ['log-rule-mult','log-rule-pot'], qty: 1 },
 *         // ...
 *       ],
 *     },
 *   }
 *
 * Invarianten (vom Validator `scripts/validate-content.js` geprüft, wenn das
 * Topic in `BLUEPRINT_ENFORCED_TOPICS` ist):
 *
 *   1. `concepts[i].dependsOn` ⊆ {concepts[0..i-1].id} ∪ (∪ prerequisites[*].concepts)
 *   2. `subGoalConcepts` deckt jedes Sub-Goal ab, und jede Konzept-ID darin
 *      existiert in `concepts`.
 *   3. Jedes Konzept in `concepts` taucht in mind. einem `subGoalConcepts[i]` auf.
 *   4. `taskPlan[k].uses` ⊆ Konzepte des eigenen Sub-Goals ∪ dependsOn-Closure
 *      (eine Aufgabe darf nur Konzepte nutzen, die ihr Sub-Goal einführt oder
 *      die vorher — in diesem oder früheren Sub-Goals — schon eingeführt wurden).
 *   5. `taskPlan[k].stage` ∈ PEDAGOGY_STAGES, `type` ∈ {'multiple-choice',
 *      'number-input', 'true-false', 'matching', 'sorting'}.
 *   6. Jede Exercise des Topics trägt `pedagogy: { stage, subGoal, uses }`
 *      mit denselben Invarianten wie taskPlan-Zeilen.
 */

/**
 * Alle verfügbaren Visualisierungs-Komponenten (aus
 * src/components/visualizations/VisualizationEngine.jsx) mit kurzer
 * Beschreibung. Claude Code soll beim Schreiben einer Lesson prüfen, ob eine
 * Visualisierung den Stoff klarer macht, und sie dann als Lesson-Step
 * einbauen: `{ type: 'visualization', visualizationId: '...', params: { ... } }`.
 *
 * Grundregel: Wenn sich ein Konzept geometrisch, grafisch oder dynamisch
 * darstellen lässt — Visualisierung einsetzen. Besonders bei abstrakten
 * Begriffen (Grenzwert, Ableitung, Vektor, Schwingung, Feld). Bei rein
 * numerischen Lessons (z. B. Prozentrechnung) nur, wenn sinnvoll.
 */
export const AVAILABLE_VISUALIZATIONS = {
  'unit-circle':         'Einheitskreis mit interaktivem Winkelzeiger (sin/cos-Ablesung)',
  'trig-explorer':       'sin/cos/tan-Graph mit verstellbarem Winkel und Quadrantenanzeige',
  'sin-wave-explorer':   'Sinuswelle mit Amplitude, Frequenz, Phase als Slider',
  'function-graph':      'Beliebige Funktionsgraphen mit Gitter, Bereich, mehreren Kurven',
  'derivative-graph':    'f(x) und f\'(x) nebeneinander, Tangente am Punkt einstellbar',
  'limit-explorer':      'Grenzwert-Annäherung mit Sekanten, h→0 visualisieren',
  'integral-area':       'Fläche unter Kurve, Riemann-Summen, Ober-/Untersumme',
  'taylor-approx':       'Taylor-Polynom-Approximation mit verstellbarem Grad',
  'vector-diagram':      '2D-Vektoren mit Addition, Subtraktion, Skalarprodukt',
  'vector-3d':           '3D-Vektordarstellung mit Rotation und Kreuzprodukt',
  'complex-plane':       'Gaußsche Zahlenebene, Polarform, Multiplikation als Rotation',
  'eigenvector-viz':     'Matrix-Transformation mit Eigenvektoren als Fixrichtungen',
  'force-parallelogram': 'Kräfteparallelogramm, Zerlegung und Resultierende',
  'free-body-diagram':   'Freikörperbild-Editor (Lagerreaktionen, Schnittgrößen)',
  'beam-reactions':      'Balken mit Lagerreaktionen (A- und B-Auflager)',
  'interactive-beam':    'Balken mit Einzel- und Streckenlasten, Schnittgrößenverlauf',
  'stress-strain':       'Spannungs-Dehnungs-Diagramm mit $R_e$, $R_m$, E-Modul ablesbar',
  'mohr-circle':         'Mohrscher Spannungskreis, Hauptspannungen und Hauptrichtungen',
  'spring-mass-damper':  'Feder-Masse-Dämpfer-Simulation (Schwingung, Einschwingverhalten)',
  'pv-diagram':          'p-V-Diagramm für thermodynamische Zustandsänderungen',
  'lager-illustration':  'Wälzlager-Querschnitt (Innenring, Wälzkörper, Käfig, Außenring)',
}

/**
 * TOPIC_GUIDES — pro Topic der konkrete Lernpfad.
 *
 * Felder:
 *   summary        — ein Satz, was das Topic ist.
 *   whyItMatters   — warum es als Ingenieur:in gebraucht wird.
 *   roadmap[]      — Unit-Reihenfolge mit Fokus und Kern-Lessons.
 *   mustKnow[]     — 4–6 Kompetenzen, die am Ende sicher sitzen müssen.
 *   commonMistakes — 3–5 Klausur-Fallen.
 *   examFocus[]    — 3–5 Themen, die fast immer dran kommen.
 *   studyTips[]    — 2–4 Empfehlungen für effizientes Lernen.
 */
export const TOPIC_GUIDES = {
  // ══════════════════════════════════════════════════════════════════════
  // PHASE 1 — 1. Semester: Mathe-Grundlagen
  // ══════════════════════════════════════════════════════════════════════

  algebra: {
    summary: 'Algebraische Umformungen, Gleichungen und Funktionen — das rechnerische Fundament für alles danach.',
    whyItMatters: 'Jede Ingenieursformel wird früher oder später umgestellt. Wer hier nicht sicher ist, verliert in Mechanik- und Analysis-Prüfungen trotz richtigem Ansatz Punkte bei der Ausführung.',
    recommendedVisualizations: ['function-graph'],
    roadmap: [
      { unitId: 'alg-unit-0', focus: 'Schulwissen auffrischen: Brüche, Klammern, Prozent, Termumformung. NICHT überspringen — hier entstehen die meisten Folgefehler.' },
      { unitId: 'alg-unit-1', focus: 'Potenzgesetze, Wurzeln, Logarithmen. Wichtig für Exponentialprozesse (Auf-/Entladung, Wachstum) in Regelungstechnik und DGL.' },
      { unitId: 'alg-unit-2', focus: 'Gleichungen aller Art: linear, quadratisch, Polynom, Ungleichungen. Standardwerkzeug für Nullstellen und Extrema.' },
      { unitId: 'alg-unit-3', focus: 'Funktionsbegriff, elementare Funktionen, Umkehrfunktionen. Brücke zur Ableitung.' },
      { unitId: 'alg-unit-4', focus: 'Prüfungsaufgaben im Klausurstil. Kombiniert Umformung + Gleichungslösung + Funktionsanalyse.' },
    ],
    mustKnow: [
      'Bruchrechnen fehlerfrei (Hauptnenner, Kürzen, Doppelbruch, Division durch Bruch = Mult. mit Kehrwert).',
      'Potenz- und Logarithmengesetze auswendig.',
      'Lineare und quadratische Gleichungen mit großer Lösungsformel.',
      'Binomische Formeln, Distributivgesetz, Polynomdivision.',
      'Umkehrfunktion bilden und Definitionsbereich angeben.',
    ],
    commonMistakes: [
      'Minuszeichen vor Klammer nicht auf alle Summanden verteilt.',
      'Beim Quadrieren Scheinlösungen übersehen (Probe vergessen).',
      'Logarithmus auf Summe angewandt: $\\log(a+b) \\neq \\log a + \\log b$.',
      'Definitionsbereich bei Bruch- und Wurzelgleichungen nicht geprüft.',
    ],
    examFocus: [
      'Bruchgleichungen mit Definitionsbereich.',
      'Quadratische Gleichung und Scheitelpunktberechnung.',
      'Exponential-/Logarithmus-Anwendungen (z. B. Zinseszins, RC-Entladung).',
    ],
    studyTips: [
      'Jeden Umformungsschritt einzeln hinschreiben — keine zwei Schritte gleichzeitig.',
      'Nach jeder Gleichung Probe durchführen.',
      'Merkzettel mit den 10 wichtigsten Regeln (Potenz, Log, Binomisch) im Sichtfeld.',
    ],
  },

  trigonometry: {
    summary: 'Winkel, Sinus/Kosinus/Tangens und Einheitskreis — die Sprache, in der Geometrie und Schwingungen beschrieben werden.',
    whyItMatters: 'Jede Kraftzerlegung, jede Wechselspannung, jede Schwingung lebt von sin/cos. Ohne Trig-Sicherheit wird Statik und Elektrotechnik zur Raterei.',
    recommendedVisualizations: ['unit-circle', 'trig-explorer', 'sin-wave-explorer'],
    roadmap: [
      { unitId: 'trig-unit-1', focus: 'Winkelmaße, rechtwinkliges Dreieck, sin/cos/tan-Grundwerte. Winkel ↔ Radiant sicher umrechnen.' },
      { unitId: 'trig-unit-2', focus: 'Einheitskreis-Definition, Periodizität, Quadranten und Vorzeichen. DAS Fundament für alle späteren Schwingungsaufgaben.' },
      { unitId: 'trig-unit-3', focus: 'Additionstheoreme, Sinus-/Kosinussatz, technische Anwendungen (Kräfteparallelogramm, Schiefe Ebene).' },
      { unitId: 'trig-unit-4', focus: 'Klausurmix aus Dreiecken, Gleichungen und technischen Anwendungen.' },
    ],
    mustKnow: [
      'Grad ↔ Radiant: $180°=\\pi$, $90°=\\pi/2$, $60°=\\pi/3$, $45°=\\pi/4$, $30°=\\pi/6$.',
      'sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig.',
      'Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv).',
      'Additionstheoreme $\\sin(2x)$, $\\cos(2x)$, $\\sin(\\alpha\\pm\\beta)$.',
      'Sinus- und Kosinussatz am schiefwinkligen Dreieck.',
    ],
    commonMistakes: [
      'Taschenrechner steht auf DEG statt RAD (oder umgekehrt).',
      'Bei $\\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen.',
      'Bei trigonometrischen Gleichungen $\\cos x$ rausgekürzt — Lösungen wo $\\cos x = 0$ ist, gehen verloren.',
      'SSA-Mehrdeutigkeit im Dreieck nicht geprüft (zwei Dreiecke möglich).',
    ],
    examFocus: [
      'Dreiecksberechnung mit Sinus-/Kosinussatz.',
      'Trigonometrische Gleichungen in $[0,2\\pi)$ lösen.',
      'Kräftezerlegung an schiefer Ebene.',
    ],
    studyTips: [
      'Einheitskreis sauber auswendig lernen — dann entstehen alle Werte und Vorzeichen daraus.',
      'Bei jeder Aufgabe Skizze + Winkelmodus prüfen, bevor gerechnet wird.',
    ],
  },

  vektoren: {
    summary: 'Vektoren als Größen mit Betrag und Richtung; Skalar-/Kreuzprodukt; Geraden und Ebenen im Raum.',
    whyItMatters: 'Kräfte, Geschwindigkeiten, Magnetfelder — alles Vektoren. Mechanik und Strömungslehre setzen voraus, dass Komponenten, Projektionen und Kreuzprodukt sitzen.',
    recommendedVisualizations: ['vector-diagram', 'vector-3d', 'force-parallelogram'],
    roadmap: [
      { unitId: 'vek-unit-1', focus: 'Vektor-Grundrechnung, Betrag, Skalarprodukt (Winkel!), Kreuzprodukt (Flächen/Normalen).' },
      { unitId: 'vek-unit-2', focus: 'Parameterdarstellung von Geraden und Ebenen, Schnittpunkte, Abstände, Winkel Gerade–Ebene.' },
      { unitId: 'vek-unit-3', focus: 'Klausuraufgaben — meist kombiniert (Kräftegleichgewicht + Abstand + Winkel).' },
    ],
    mustKnow: [
      'Skalarprodukt: Orthogonalität ($\\vec a\\cdot\\vec b=0$) und Winkel ($\\cos\\varphi = \\vec a\\cdot\\vec b/(|\\vec a||\\vec b|)$).',
      'Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ.',
      'Hessesche Normalform für Abstand Punkt–Ebene.',
      'Parameterdarstellung Gerade $\\vec x = \\vec p + t\\vec v$.',
    ],
    commonMistakes: [
      'Bei Kreuzprodukt $\\vec a\\times\\vec b$ vs. $\\vec b\\times\\vec a$ verwechselt — Vorzeichen!',
      '$\\cos\\alpha$ für Winkel Gerade–Ebene benutzt statt $\\sin\\alpha$.',
      'Skalarprodukt mit Summe verwechselt ($\\vec a+\\vec b \\ne \\vec a\\cdot\\vec b$).',
    ],
    examFocus: [
      'Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt.',
      'Abstand Punkt–Ebene und Gerade–Gerade.',
      'Drehmoment $\\vec M = \\vec r\\times\\vec F$.',
    ],
    studyTips: [
      'Alle Operationen mit konkreten Zahlen-Vektoren üben — nicht nur symbolisch.',
      'Rechte-Hand-Regel für Kreuzprodukt körperlich einüben (Daumen, Zeigefinger, Mittelfinger).',
    ],
  },

  ableitung: {
    summary: 'Ableitung als lokale Änderungsrate und Tangentensteigung; Regeln, Kurvendiskussion, Grenzwerte.',
    whyItMatters: 'Ohne Ableitung keine Extremwert-, Geschwindigkeits- oder Optimierungsaufgabe. Ingenieursmathe beginnt hier.',
    recommendedVisualizations: ['derivative-graph', 'function-graph', 'limit-explorer'],
    roadmap: [
      { unitId: 'abl-unit-1', focus: 'Ableitungsbegriff, geometrische Bedeutung (Tangente), Potenz-, Summenregel.' },
      { unitId: 'abl-unit-2', focus: 'Produkt-, Quotienten-, Kettenregel — DAS Fundament. Viel üben!' },
      { unitId: 'abl-unit-3', focus: 'Kurvendiskussion: Monotonie, Extrema, Wendepunkte, Krümmung.' },
      { unitId: 'abl-unit-5', focus: 'Grenzwerte und Stetigkeit, l\'Hospital. Wichtig für DGL und Reihen.' },
      { unitId: 'abl-unit-4', focus: 'Klausuren: oft Kurvendiskussion oder Optimierungsproblem (Extremwertaufgabe mit Nebenbedingung).' },
    ],
    mustKnow: [
      'Ableitungen von $\\sin, \\cos, e^x, \\ln x, x^n$ auswendig.',
      'Kettenregel: äußere mal innere Ableitung.',
      'Notwendige Bedingung für Extrema: $f\'(x)=0$. Hinreichend: Vorzeichenwechsel von $f\'$ oder $f\'\'$ einsetzen.',
      'l\'Hospital nur bei $0/0$ oder $\\infty/\\infty$ anwenden.',
    ],
    commonMistakes: [
      'Kettenregel-Anwendung vergessen bei $(\\sin(2x))\'$, $(e^{x^2})\'$ etc.',
      'Produktregel mit Summenregel verwechselt.',
      '$f\'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!).',
      '$\\ln$ und $\\log$ verwechselt.',
    ],
    examFocus: [
      'Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte).',
      'Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe).',
      'l\'Hospital für $0/0$-Grenzwerte.',
    ],
    studyTips: [
      'Mindestens 20 Ableitungen mit Kettenregel üben, bis sie ohne Nachdenken laufen.',
      'Bei Kurvendiskussion IMMER Tabellenskizze machen — reduziert Vorzeichenfehler massiv.',
    ],
  },

  integralrechnung: {
    summary: 'Integral als Stammfunktion und Fläche unter der Kurve; Techniken (Substitution, Partielle Integration); Anwendungen.',
    whyItMatters: 'Wegstrecke aus Geschwindigkeit, Arbeit aus Kraft, Volumen aus Dichte — all das sind Integrale. Ohne Integralrechnung keine Physik-basierten Probleme.',
    recommendedVisualizations: ['integral-area', 'function-graph'],
    roadmap: [
      { unitId: 'int-unit-1', focus: 'Stammfunktion, Grundintegrale, bestimmtes vs. unbestimmtes Integral.' },
      { unitId: 'int-unit-2', focus: 'Substitution, Partielle Integration, Partialbruchzerlegung — die drei Klausur-Techniken.' },
      { unitId: 'int-unit-3', focus: 'Anwendungen: Flächen zwischen Kurven, Volumen von Rotationskörpern, Bogenlänge.' },
      { unitId: 'int-unit-4', focus: 'Prüfungsmix mit mehrstufigen Techniken.' },
    ],
    mustKnow: [
      'Grundintegrale: $x^n, e^x, \\sin x, \\cos x, 1/x$.',
      'Substitutionsregel: $\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du$.',
      'Partielle Integration: $\\int u\\,v\'\\,dx = uv - \\int u\'\\,v\\,dx$.',
      'Hauptsatz der Differential- und Integralrechnung: $\\int_a^b f(x)\\,dx = F(b)-F(a)$.',
    ],
    commonMistakes: [
      'Integrationskonstante $+C$ bei unbestimmten Integralen vergessen.',
      'Bei Substitution das $du$ nicht konsequent mitgeführt.',
      'Bei partieller Integration $u$ und $v\'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$).',
      'Flächen-Vorzeichen bei Flächen unter der x-Achse.',
    ],
    examFocus: [
      'Partielle Integration mit $\\ln$ oder $e^x$.',
      'Substitution mit trigonometrischen Funktionen.',
      'Fläche zwischen zwei Kurven (Schnittpunkte finden!).',
    ],
    studyTips: [
      'Integrationstechniken sind Muster-Erkennung — erst lernen, welches Verfahren zu welchem Integraltyp passt.',
      'Probe durch Ableiten: $F\'(x)$ muss den Integranden ergeben.',
    ],
  },

  'technische-mechanik': {
    summary: 'Statik (Kräftegleichgewicht) und Dynamik (Newtonsche Gesetze, Energie) — die klassischen Grundlagen des Maschinenbaus.',
    whyItMatters: 'Mechanik ist das Herzfach im Maschinenbau-Bachelor und Basis für Festigkeitslehre, Maschinenelemente und Dynamik.',
    recommendedVisualizations: ['free-body-diagram', 'force-parallelogram', 'beam-reactions', 'interactive-beam', 'vector-diagram'],
    roadmap: [
      { unitId: 'mech-unit-0', focus: 'SI-Einheiten, Dimensionsanalyse. Sauberes Einheiten-Arbeiten verhindert 80 % aller Klausurfehler.' },
      { unitId: 'mech-unit-1', focus: 'Statik: Kräftegleichgewicht, Freikörperbild, Lagerreaktionen, Fachwerke, Schnittgrößen.' },
      { unitId: 'mech-unit-2', focus: 'Dynamik: Newton $F=ma$, Energie- und Impulserhaltung, Rotation.' },
      { unitId: 'mech-unit-3', focus: 'Klausurmix mit Auflagerreaktionen, Schnittgrößen, Energieaufgaben.' },
    ],
    mustKnow: [
      'Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen.',
      'Drei Gleichgewichtsbedingungen in 2D: $\\sum F_x=0$, $\\sum F_y=0$, $\\sum M=0$.',
      'Newtonsche Axiome und $F=ma$ vektoriell anwenden.',
      'Energieerhaltung $E_{\\text{kin}}+E_{\\text{pot}}=\\text{const}$.',
    ],
    commonMistakes: [
      'Lagerreaktionen im FKB vergessen.',
      'Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten.',
      'Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie.',
      'Masse vs. Gewichtskraft ($G=mg$) vermischt.',
    ],
    examFocus: [
      'Auflagerreaktionen mit Streckenlast + Einzellast.',
      'Schnittgrößenverlauf bei Balken.',
      'Energieerhaltung bei schiefer Ebene / Pendel.',
    ],
    studyTips: [
      'Jede Aufgabe beginnt mit einem sauberen Freikörperbild — 5 Minuten Zeichnen erspart 30 Minuten Rechnen.',
      'Plausibilität: Summe der Lagerreaktionen in y muss der Summe aller Lasten entsprechen.',
    ],
  },

  werkstoffkunde: {
    summary: 'Werkstoffeigenschaften, Prüfverfahren und Kennwerte für Stahl, NE-Metalle, Polymere, Keramik.',
    whyItMatters: 'Kein Bauteil ohne Werkstoffauswahl. Zugversuch, Härte und Kerbschlag sind Klausur-Dauerbrenner.',
    recommendedVisualizations: ['stress-strain'],
    roadmap: [
      { unitId: 'werk-unit-1', focus: 'Kennwerte: Streckgrenze, Zugfestigkeit, E-Modul, Bruchdehnung.' },
      { unitId: 'werk-unit-2', focus: 'Prüfverfahren: Zugversuch, Härteprüfung (HB, HV, HRC), Kerbschlag.' },
      { unitId: 'werk-unit-3', focus: 'Prüfungsaufgaben zu Kennwerten und Prüfverfahren.' },
    ],
    mustKnow: [
      'Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung.',
      'Einheiten $\\text{MPa}=\\text{N/mm}^2$ und Umrechnung zu $\\text{N/m}^2$.',
      'Sicherheitszahl $S$ und zulässige Spannung $\\sigma_{\\text{zul}}=R_e/S$.',
      'Härteverfahren unterscheiden: Brinell (weich), Vickers (allgemein), Rockwell (schnell).',
    ],
    commonMistakes: [
      'Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt.',
      'Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist.',
      '$\\text{N/mm}^2$ vs. $\\text{MPa}$ als unterschiedlich angenommen.',
    ],
    examFocus: [
      'Zugversuch vollständig interpretieren.',
      'Zulässige Spannung mit Sicherheitszahl berechnen.',
      'Prüfverfahren einem Anwendungsfall zuordnen.',
    ],
    studyTips: [
      'Eine einzige Zugprüfkurve perfekt verstehen — alle anderen sind Varianten davon.',
    ],
  },

  elektrotechnik: {
    summary: 'Gleich- und Wechselstromkreise, Ohmsches Gesetz, Kirchhoff, komplexe Impedanz.',
    whyItMatters: 'Jede Maschine hat Elektrik. Sensoren, Motoren, Steuerungen — ohne Grundverständnis geht nichts.',
    recommendedVisualizations: ['sin-wave-explorer', 'complex-plane'],
    roadmap: [
      { unitId: 'et-unit-1', focus: 'Gleichstrom: Ohm, Kirchhoff, Serien-/Parallelschaltung, Leistung.' },
      { unitId: 'et-unit-2', focus: 'Wechselstrom: Effektivwerte, Impedanz, RLC-Glieder, komplexe Rechnung.' },
      { unitId: 'et-unit-3', focus: 'Klausurmix Gleich-/Wechselstrom mit Berechnung und Interpretation.' },
    ],
    mustKnow: [
      'Ohmsches Gesetz $U=R\\,I$ und Leistung $P=UI=I^2 R=U^2/R$.',
      'Kirchhoff: Knotenregel ($\\sum I=0$), Maschenregel ($\\sum U=0$).',
      'Komplexe Impedanz: $Z_R=R$, $Z_L=j\\omega L$, $Z_C=1/(j\\omega C)$.',
      'Effektivwert $U_{\\text{eff}}=U_{\\max}/\\sqrt{2}$ bei Sinus.',
    ],
    commonMistakes: [
      'Spannungsteiler nur bei Reihenschaltung ohne Last zulässig.',
      'Bei RLC-Schwingkreis Resonanzfrequenz $\\omega_0=1/\\sqrt{LC}$ mit Impedanz verwechselt.',
      'Effektiv- und Scheitelwert vertauscht.',
    ],
    examFocus: [
      'Netzwerkanalyse mit Kirchhoff.',
      'Komplexe Impedanz eines RLC-Gliedes.',
      'Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).',
    ],
    studyTips: [
      'Komplexe Zahlen (Topic komplexe-zahlen) unbedingt VOR AC-Aufgaben sicher beherrschen.',
    ],
  },

  'python-matlab': {
    summary: 'Python und Matlab für ingenieurmäßiges Rechnen: Arrays, Schleifen, Plot, LGS, numerische Integration.',
    whyItMatters: 'Numerische Tools sind in jedem modernen Labor und in der Industrie Standard. Wer nur mit der Hand rechnet, ist bei realen Problemen chancenlos.',
    recommendedVisualizations: ['function-graph', 'integral-area'],
    roadmap: [
      { unitId: 'py-unit-1', focus: 'Python-Grundlagen: Variablen, Listen, Schleifen, Funktionen.' },
      { unitId: 'py-unit-2', focus: 'Numerisches Rechnen: NumPy-Arrays, Lineare Algebra, Plots.' },
      { unitId: 'py-unit-3', focus: 'MB-Anwendungen: Signale, Filter, Nullstellensuche.' },
      { unitId: 'py-unit-4', focus: 'Prüfungsaufgaben — Kurzcode lesen, ausgeben, anpassen.' },
    ],
    mustKnow: [
      'NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$.',
      'Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\\b`).',
      '`len`, Indexierung (Python ab 0, Matlab ab 1), Slicing.',
      'Plot mit `matplotlib.pyplot` (`plot`, `xlabel`, `legend`, `show`).',
    ],
    commonMistakes: [
      'In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt.',
      'Indexoffset bei Übergang Python ↔ Matlab vergessen.',
      '`np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).',
    ],
    examFocus: [
      'Codeschnipsel lesen und Ausgabe vorhersagen.',
      'Fehler in gegebenem Code finden.',
      'LGS mit NumPy lösen.',
    ],
    studyTips: [
      'Jede Klausur-Aufgabe kurz im Kopf simulieren: "welche Werte stehen nach Zeile 3 in a?".',
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // PHASE 2 — 2. Semester
  // ══════════════════════════════════════════════════════════════════════

  'komplexe-zahlen': {
    summary: 'Zahlen der Form $z=a+bi$; Kartesische und Polar-/Euler-Form; Rechnen in beiden Darstellungen.',
    whyItMatters: 'Grundlage für Wechselstromtechnik, Schwingungen, Fourier, Laplace. Ohne komplexe Zahlen keine saubere Schwingungs- und Regelungstechnik.',
    recommendedVisualizations: ['complex-plane'],
    roadmap: [
      { unitId: 'komz-unit-1', focus: 'Kartesische Form $a+bi$: Addition, Subtraktion, Multiplikation, Konjugation.' },
      { unitId: 'komz-unit-2', focus: 'Polarform $re^{i\\varphi}$ und Euler-Formel: Multiplikation/Division elegant.' },
      { unitId: 'komz-unit-3', focus: 'Potenzen (de Moivre) und $n$-te Wurzeln.' },
      { unitId: 'komz-unit-4', focus: 'Klausuraufgaben mit Formumwandlung und Anwendungen.' },
    ],
    mustKnow: [
      '$i^2=-1$, Betrag $|z|=\\sqrt{a^2+b^2}$, Argument $\\arg z=\\arctan(b/a)$.',
      'Euler: $e^{i\\varphi}=\\cos\\varphi + i\\sin\\varphi$.',
      'Multiplikation in Polarform: Beträge mal, Argumente addieren.',
      'Division: konjugiert Komplexen des Nenners erweitern.',
    ],
    commonMistakes: [
      'Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen.',
      'Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück.',
      '$|z|^2 = z\\bar z$ vergessen.',
    ],
    examFocus: [
      'Polar- ↔ Kartesisch umrechnen.',
      'Potenz mit de Moivre $(re^{i\\varphi})^n=r^n e^{in\\varphi}$.',
      '$n$-te Wurzeln auf dem Einheitskreis darstellen.',
    ],
    studyTips: [
      'Gaußsche Zahlenebene immer mitskizzieren — verhindert Quadrantenfehler.',
    ],
  },

  'reihen-folgen': {
    summary: 'Folgen, Reihen, Konvergenzkriterien und Taylor-Entwicklung.',
    whyItMatters: 'Approximation komplizierter Funktionen durch Polynome (Taylor) ist die Basis numerischer Verfahren und ingenieursmäßiger Abschätzungen.',
    recommendedVisualizations: ['taylor-approx', 'function-graph'],
    roadmap: [
      { unitId: 'rf-unit-1', focus: 'Folgengrenzwert, Monotonie, Reihenkonvergenz, Standardreihen (geometrisch, harmonisch).' },
      { unitId: 'rf-unit-2', focus: 'Prüfung: Konvergenzkriterien anwenden und Standard-Taylor-Reihen aufstellen.' },
    ],
    mustKnow: [
      'Geometrische Reihe: $\\sum q^n=1/(1-q)$ für $|q|<1$.',
      'Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$.',
      'Quotientenkriterium $\\lim|a_{n+1}/a_n|<1 \\Rightarrow$ Konvergenz.',
      'Taylor-Reihen von $e^x$, $\\sin x$, $\\cos x$ um 0 auswendig.',
    ],
    commonMistakes: [
      'Konvergenzkriterium für $|q|=1$ falsch bewertet.',
      'Taylor-Entwicklungspunkt nicht mit angegeben.',
      'Restglied ignoriert.',
    ],
    examFocus: [
      'Konvergenz einer Reihe per Quotientenkriterium.',
      'Taylor-Polynom 3. Grades an gegebener Stelle.',
    ],
    studyTips: [
      'Die drei Grund-Taylor-Reihen ($e^x$, $\\sin$, $\\cos$) auswendig — fast alles andere lässt sich daraus ableiten.',
    ],
  },

  differentialgleichungen: {
    summary: 'Gewöhnliche DGL: Trennbare, lineare erster Ordnung, lineare zweiter Ordnung mit konstanten Koeffizienten.',
    whyItMatters: 'Physik spricht DGL: Schwingungen, Abkühlung, Population, RC-Glieder. DGL-Sicherheit ist Voraussetzung für Regelungstechnik und Schwingungslehre.',
    recommendedVisualizations: ['spring-mass-damper', 'function-graph'],
    roadmap: [
      { unitId: 'dgl-unit-1', focus: 'Grundbegriffe (Ordnung, AWP), trennbare und lineare DGL 1. Ordnung.' },
      { unitId: 'dgl-unit-2', focus: 'Lineare DGL 2. Ordnung mit konstanten Koeffizienten (homogen + partikulär).' },
      { unitId: 'dgl-unit-3', focus: 'Klausuren mit Anfangswertproblem und Probe.' },
    ],
    mustKnow: [
      'Trennung der Variablen: $dy/dx=f(x)g(y) \\Rightarrow \\int dy/g(y)=\\int f(x)\\,dx$.',
      'Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\\int a(x)\\,dx}$.',
      'Charakteristische Gleichung $\\lambda^2+p\\lambda+q=0$ bei linearen DGL 2. Ordnung.',
      'Drei Fälle: reelle verschiedene Wurzeln / doppelte Wurzel / komplexe Wurzeln (Schwingung).',
    ],
    commonMistakes: [
      'Anfangsbedingung vergessen — nur allgemeine Lösung angegeben.',
      'Partikulärlösung fehlt bei inhomogener DGL.',
      'Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\\cdot e^{\\lambda x}$ vergessen.',
    ],
    examFocus: [
      'Lineare DGL 1. Ordnung mit AWP.',
      'Gedämpfte Schwingung ($my\'\'+cy\'+ky=0$).',
      'Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\\sin/\\cos$).',
    ],
    studyTips: [
      'DGL-Typ IMMER zuerst klassifizieren, bevor der Ansatz gewählt wird.',
      'Probe durch Ableiten und Einsetzen — deckt die häufigsten Fehler auf.',
    ],
  },

  'lineare-algebra': {
    summary: 'Matrizen, Determinanten, lineare Gleichungssysteme, Eigenwerte.',
    whyItMatters: 'LGS stecken in jeder FEM-Simulation, Ausgleichsrechnung, Signalverarbeitung. Eigenwerte sind DIE Kern-Idee für Modalanalyse und Stabilität.',
    recommendedVisualizations: ['eigenvector-viz', 'vector-diagram'],
    roadmap: [
      { unitId: 'la-unit-1', focus: 'Matrizen-Rechnung, Determinante, Inverse, Rang.' },
      { unitId: 'la-unit-2', focus: 'LGS mit Gauß-Verfahren, Lösbarkeitsbedingung, Eigenwertproblem $\\det(A-\\lambda I)=0$.' },
      { unitId: 'la-unit-3', focus: 'Klausur: Determinante, LGS, Eigenwert/-vektor.' },
    ],
    mustKnow: [
      'Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen.',
      'Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile.',
      '$\\det A\\ne 0 \\Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar.',
      'Eigenwerte aus $\\det(A-\\lambda I)=0$, Eigenvektoren aus $(A-\\lambda I)\\vec v=0$.',
    ],
    commonMistakes: [
      'Matrizen multiplizieren in falscher Reihenfolge ($AB\\ne BA$).',
      'Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch.',
      'Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.',
    ],
    examFocus: [
      'LGS mit Gauß-Verfahren und Probe.',
      '2×2- oder 3×3-Determinante berechnen.',
      'Eigenwerte und Eigenvektoren für 2×2-Matrix.',
    ],
    studyTips: [
      'Jedes LGS mit Einsetz-Probe abschließen — deckt Rechenfehler zu 90 % auf.',
    ],
  },

  festigkeitslehre: {
    summary: 'Spannung und Dehnung in Bauteilen: Zug/Druck, Biegung, Torsion. Hooke’sches Gesetz.',
    whyItMatters: 'Jedes Bauteil muss Kräfte aufnehmen ohne zu versagen. Festigkeitslehre sagt, wie dick/dünn es sein darf.',
    recommendedVisualizations: ['stress-strain', 'mohr-circle', 'interactive-beam', 'beam-reactions'],
    roadmap: [
      { unitId: 'fest-unit-1', focus: 'Normal- und Schubspannung, Dehnung, Hooke, Querkontraktion.' },
      { unitId: 'fest-unit-2', focus: 'Biegung: Flächenträgheitsmoment, $\\sigma = M/W$; Torsion: $\\tau=T/W_t$.' },
      { unitId: 'fest-unit-3', focus: 'Prüfungen zu kombinierter Belastung und Sicherheitsnachweis.' },
    ],
    mustKnow: [
      'Normalspannung $\\sigma=F/A$ in MPa.',
      'Hooke: $\\sigma=E\\varepsilon$.',
      'Biegespannung $\\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$.',
      'Torsionsspannung $\\tau_t = T/W_t$.',
      'Flächenträgheitsmomente für Rechteck ($bh^3/12$) und Kreis ($\\pi d^4/64$).',
    ],
    commonMistakes: [
      'Einheiten $\\text{N/mm}^2$ vs. $\\text{MPa}$ (identisch) sorgen für Panikmomente.',
      'Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt.',
      'Sicherheitszahl vergessen: zulässige Spannung ist immer $\\sigma_{\\text{zul}}=R_e/S$.',
    ],
    examFocus: [
      'Maximale Biegespannung im Balken.',
      'Kombinierte Belastung Zug + Biegung (Superposition).',
      'Torsion bei Welle: Nenndurchmesser berechnen.',
    ],
    studyTips: [
      'Formelsammlung für Widerstandsmomente anlegen und wirklich auswendig lernen.',
      'Einheiten-Kontrolle am Ende JEDER Spannungsaufgabe.',
    ],
  },

  thermodynamik: {
    summary: 'Energie, Wärme, Arbeit; Zustandsgrößen, Hauptsätze, ideales Gas, Wirkungsgrad.',
    whyItMatters: 'Motoren, Wärmepumpen, Kraftwerke — alles Thermodynamik. Wirkungsgrad-Abschätzungen sind Ingenieurs-Alltag.',
    recommendedVisualizations: ['pv-diagram'],
    roadmap: [
      { unitId: 'thermo-unit-1', focus: 'Zustandsgrößen (p, V, T), ideales Gas, Prozessarten.' },
      { unitId: 'thermo-unit-2', focus: '1. und 2. Hauptsatz, Entropie, Carnot-Wirkungsgrad.' },
      { unitId: 'thermo-unit-3', focus: 'Prüfungen: Kreisprozesse und Zustandsänderungen durchrechnen.' },
    ],
    mustKnow: [
      'Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante).',
      '1. Hauptsatz: $\\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben).',
      'Carnot-Wirkungsgrad $\\eta_C=1-T_{\\text{kalt}}/T_{\\text{heiß}}$ mit Kelvin!',
      'Isotherme: $T=\\text{const}$, Isobar: $p=\\text{const}$, Adiabat: $Q=0$.',
    ],
    commonMistakes: [
      'Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal.',
      'Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig.',
      'Adiabatengleichung $pV^\\kappa=\\text{const}$ statt $pV=\\text{const}$ angewandt.',
    ],
    examFocus: [
      'Carnot-Wirkungsgrad einer Maschine.',
      'Zustandsänderung: Isotherm, isobar, adiabat durchrechnen.',
      'Entropieänderung bei idealem Gas.',
    ],
    studyTips: [
      'Zustandsdiagramm (p-V oder T-s) vor jeder Aufgabe skizzieren.',
      'Kelvin-Umrechnung automatisieren: immer als erste Zeile "$T=\\ldots\\,\\text{K}$" hinschreiben.',
    ],
  },

  maschinenelemente: {
    summary: 'Schrauben, Wellen, Lager, Zahnräder — die Standardkomponenten jeder Maschine und ihre Auslegung.',
    whyItMatters: 'Maschinen bestehen aus Maschinenelementen. Wer die nicht auslegen kann, baut keine funktionierende Maschine.',
    recommendedVisualizations: ['lager-illustration', 'free-body-diagram'],
    roadmap: [
      { unitId: 'melem-unit-1', focus: 'Schraubenverbindungen, Klemmkraft, Vorspannung, ISO-Gewinde.' },
      { unitId: 'melem-unit-2', focus: 'Wellen, Lager, Zahnräder: Übersetzung, Drehmoment, Lagerlebensdauer.' },
      { unitId: 'melem-unit-3', focus: 'Prüfung zu ausgewählten Elementen.' },
    ],
    mustKnow: [
      'ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen.',
      'Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$.',
      'Leistung, Drehmoment, Drehzahl: $P=T\\omega=T\\cdot 2\\pi n$.',
      'Wälzlager-Lebensdauer $L_{10}=(C/P)^p$.',
    ],
    commonMistakes: [
      'Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\\omega$ konsistent halten.',
      'Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment).',
      'Vorspannkraft einer Schraube mit Klemmkraft verwechselt.',
    ],
    examFocus: [
      'Schraubenberechnung (Vorspannkraft, Betriebskraft).',
      'Zahnradstufe: Drehzahl/Drehmoment am Ausgang.',
      'Wälzlagerlebensdauer.',
    ],
    studyTips: [
      'Konstruktionskatalog (Roloff/Matek oder ähnlich) früh in die Hand nehmen — Klausuren setzen Tabellenarbeit voraus.',
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // PHASE 3 — Vertiefung
  // ══════════════════════════════════════════════════════════════════════

  'mehrdim-analysis': {
    summary: 'Funktionen mehrerer Variablen: Partielle Ableitungen, Gradient, Hesse-Matrix, Extrema.',
    whyItMatters: 'FEM, CFD, Optimierung: alle mehrdimensional. Gradient und Hesse entscheiden, ob ein Punkt Minimum, Maximum oder Sattel ist.',
    recommendedVisualizations: ['vector-3d', 'function-graph'],
    roadmap: [
      { unitId: 'mdim-unit-1', focus: 'Partielle Ableitungen, Gradient, Hesse-Matrix, Extrema, Richtungsableitung.' },
      { unitId: 'mdim-unit-2', focus: 'Prüfung: Extremwert-Aufgaben mit und ohne Nebenbedingung.' },
    ],
    mustKnow: [
      'Partielle Ableitung: alle anderen Variablen als Konstante behandeln.',
      'Gradient $\\nabla f$ zeigt in Richtung des steilsten Anstiegs.',
      'Extrema: $\\nabla f=\\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend).',
      'Richtungsableitung: $D_{\\vec u}f = \\nabla f\\cdot\\vec u$ mit normiertem $\\vec u$.',
    ],
    commonMistakes: [
      'Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet.',
      'Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum).',
      'Richtungsvektor bei $D_{\\vec u}$ nicht normiert.',
    ],
    examFocus: [
      'Extrema einer Funktion $f(x,y)$.',
      'Lagrange-Multiplikatoren bei Nebenbedingung.',
      'Tangentialebene in einem Punkt aufstellen.',
    ],
    studyTips: [
      '2D-Oberfläche skizzieren (z. B. Konturplot) — visualisiert Minima/Maxima sofort.',
    ],
  },

  numerik: {
    summary: 'Numerische Verfahren: Nullstellensuche (Newton, Bisektion), Integration (Trapez, Simpson), Fehler.',
    whyItMatters: 'Die meisten ingenieursmäßigen Probleme sind analytisch nicht lösbar. Numerik liefert approximative Lösungen mit kontrollierbarem Fehler.',
    recommendedVisualizations: ['function-graph', 'integral-area', 'limit-explorer'],
    roadmap: [
      { unitId: 'num-unit-1', focus: 'Newton-Verfahren, Bisektion, Trapez-, Simpson-Regel, Fehlerabschätzung.' },
      { unitId: 'num-unit-2', focus: 'Prüfung: Verfahren anwenden und Konvergenzrate kennen.' },
    ],
    mustKnow: [
      'Newton: $x_{n+1}=x_n-f(x_n)/f\'(x_n)$, quadratisch konvergent.',
      'Bisektion: sicher aber linear, braucht Vorzeichenwechsel.',
      'Trapezregel: $I\\approx h[y_0/2+y_1+\\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$.',
      'Simpson: $I\\approx h/3\\,[y_0+4y_1+2y_2+\\ldots+y_n]$, Fehler $O(h^4)$.',
    ],
    commonMistakes: [
      'Bei Newton die Ableitung falsch eingesetzt.',
      'Simpson braucht gerade Anzahl Teilintervalle — oft übersehen.',
      'Konvergenz von Newton nicht geprüft (kann oszillieren).',
    ],
    examFocus: [
      'Newton-Iteration für zwei Schritte mit Startwert.',
      'Simpson-Regel mit $n=2$ oder $n=4$.',
      'Fehlerordnung begründen.',
    ],
    studyTips: [
      'Fehler halbiert sich mit $(h/2)^{\\text{Ordnung}}$ — Zusammenhang explizit üben.',
    ],
  },

  statistik: {
    summary: 'Zufallsvariablen, Verteilungen, Erwartungswert, Varianz, Konfidenzintervall, Hypothesentests.',
    whyItMatters: 'Qualitätskontrolle, Messunsicherheit, Signifikanz — überall Statistik. Ohne Stochastik kein seriöser Ingenieur.',
    recommendedVisualizations: ['function-graph'],
    roadmap: [
      { unitId: 'stat-unit-1', focus: 'Diskrete/stetige Zufallsvariablen, Erwartungswert, Varianz, Normalverteilung.' },
      { unitId: 'stat-unit-2', focus: 'Prüfung: Konfidenzintervall, Standardwerte der Normalverteilung.' },
    ],
    mustKnow: [
      'Erwartungswert $E[X]=\\sum x\\,P(X=x)$ bzw. Integral.',
      'Varianz $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$.',
      'Normalverteilung: $\\pm 1\\sigma$ ≈ 68 %, $\\pm 2\\sigma$ ≈ 95 %, $\\pm 3\\sigma$ ≈ 99{,}7 %.',
      'Standardisierung $Z=(X-\\mu)/\\sigma$ und Tabelle $\\Phi(z)$.',
    ],
    commonMistakes: [
      '$P(X<a)$ und $P(X\\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT.',
      'Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung".',
      'Einseitiger vs. zweiseitiger Test verwechselt.',
    ],
    examFocus: [
      'Wahrscheinlichkeit bei Normalverteilung mit Standardisierung.',
      'Erwartungswert und Varianz einer diskreten Verteilung.',
      '95%-Konfidenzintervall für Mittelwert.',
    ],
    studyTips: [
      'Standard-$\\Phi$-Werte ($z=1{,}0$, $1{,}5$, $2{,}0$, $2{,}5$) auswendig — spart Tabellenblättern.',
    ],
  },

  'fourier-laplace': {
    summary: 'Fourier-Reihen (periodische Signale in Harmonische zerlegen) und Laplace (Zeit- ↔ Bildbereich).',
    whyItMatters: 'Signalverarbeitung, Regelungstechnik, Elektrotechnik. Laplace vereinfacht DGL zu Algebra, Fourier zeigt Frequenz-Inhalt.',
    recommendedVisualizations: ['sin-wave-explorer', 'spring-mass-damper', 'complex-plane'],
    roadmap: [
      { unitId: 'fl-unit-1', focus: 'Fourier-Reihen: $a_n$, $b_n$ berechnen, gerade/ungerade Funktionen, Symmetrien.' },
      { unitId: 'fl-unit-2', focus: 'Laplace: Korrespondenzen, Sprung-/Impulsantworten, inverse Transformation.' },
      { unitId: 'fl-unit-3', focus: 'Prüfung mit Anwendung auf RC-/RL-/RLC-Glieder.' },
    ],
    mustKnow: [
      'Fourier-Koeffizienten $a_n=\\tfrac{2}{T}\\int f(t)\\cos(n\\omega t)\\,dt$ bzw. $b_n$ mit $\\sin$.',
      'Gerade $f \\Rightarrow b_n=0$, ungerade $\\Rightarrow a_n=0$.',
      'Laplace-Grundkorrespondenzen: $\\sigma(t)\\to 1/s$, $e^{-at}\\to 1/(s+a)$, $\\sin\\omega t\\to \\omega/(s^2+\\omega^2)$.',
      'Rücktransformation per Partialbruchzerlegung.',
    ],
    commonMistakes: [
      'Periodendauer $T$ bei Integralen falsch gewählt.',
      'Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen.',
      'Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.',
    ],
    examFocus: [
      'Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals.',
      'Sprungantwort eines PT1-Glieds per Laplace.',
      'Rücktransformation einer Partialbruchzerlegung.',
    ],
    studyTips: [
      'Korrespondenztabelle zwei Wochen vor der Prüfung täglich wiederholen.',
    ],
  },

  fluidmechanik: {
    summary: 'Hydrostatik (ruhende Flüssigkeiten) und Strömung (Kontinuität, Bernoulli, Reynolds).',
    whyItMatters: 'Pumpen, Rohrleitungen, Tragflächen, Hydraulik — überall strömende Fluide. Ohne Fluidmechanik keine Auslegung.',
    recommendedVisualizations: ['free-body-diagram', 'function-graph'],
    roadmap: [
      { unitId: 'fluid-unit-1', focus: 'Hydrostatischer Druck $p=\\rho g h$, Auftrieb.' },
      { unitId: 'fluid-unit-2', focus: 'Kontinuitätsgleichung, Bernoulli, laminare/turbulente Strömung, Reynolds.' },
      { unitId: 'fluid-unit-3', focus: 'Prüfung: Rohrleitung + Druckverlust, Düse + Bernoulli.' },
    ],
    mustKnow: [
      'Hydrostatischer Druck $p=\\rho g h$.',
      'Kontinuität $A_1 v_1 = A_2 v_2$.',
      'Bernoulli $p+\\rho v^2/2 + \\rho g h = \\text{const}$ (für verlustfreie inkompressible Strömung).',
      'Reynolds-Zahl $\\text{Re}=v d/\\nu$, Grenze laminar/turbulent bei ~2300.',
    ],
    commonMistakes: [
      'Höhenterm $\\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist.',
      'Reynolds dimensionsbehaftet gerechnet.',
      'Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.',
    ],
    examFocus: [
      'Bernoulli mit Venturi-Düse.',
      'Rohrreibung laminar: $\\lambda=64/\\text{Re}$, Druckverlust berechnen.',
      'Auftrieb eines Körpers bestimmen.',
    ],
    studyTips: [
      'Bei jeder Strömungsaufgabe zuerst Reynolds checken — bestimmt, welche Reibungsformel gilt.',
    ],
  },

  regelungstechnik: {
    summary: 'Regelkreise, P/I/D-Regler, Stabilität (Hurwitz), Sprungantwort.',
    whyItMatters: 'Automatisierung, Robotik, Prozesstechnik leben von sauberer Regelung. Stabilitätsanalyse ist Pflicht.',
    recommendedVisualizations: ['spring-mass-damper', 'complex-plane', 'function-graph'],
    roadmap: [
      { unitId: 'rt-unit-1', focus: 'Grundlagen Regelkreis, Übertragungsfunktion, Stellglied.' },
      { unitId: 'rt-unit-2', focus: 'P, I, D-Anteile, PT1/PT2-Glieder, Hurwitz-Stabilitätskriterium.' },
      { unitId: 'rt-unit-3', focus: 'Prüfung: Stabilität prüfen, stationäre Regelabweichung berechnen.' },
    ],
    mustKnow: [
      'Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$.',
      'P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend.',
      'PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$.',
      'Hurwitz: $H_n>0$ für alle Hurwitz-Determinanten.',
    ],
    commonMistakes: [
      'Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt.',
      'Hurwitz-Kriterium mit Routh verwechselt.',
      'Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.',
    ],
    examFocus: [
      'Stabilität mit Hurwitz prüfen und Grenzverstärkung finden.',
      'Stationäre Regelabweichung P-Regler an PT1.',
      'Sprungantwort eines PT1-Glieds skizzieren.',
    ],
    studyTips: [
      'Laplace + Regelung zusammen lernen — sie bauen direkt aufeinander auf.',
    ],
  },
}

/**
 * Geplante Themen — Fächer aus dem TU-Wien-Maschinenbau-Bachelor, die das
 * Curriculum ergänzen würden. Noch nicht als Topics in der App angelegt.
 * Wird in STATUS.md als Backlog für Content-Erweiterungen ausgewiesen.
 */
export const PLANNED_TOPICS = [
  {
    id: 'schwingungen',
    title: 'Schwingungen (Mechanik 3)',
    phase: 2,
    reason: 'Schwingungsanalyse ist direktes Follow-up von DGL und Dynamik und Grundlage für Maschinendynamik, Akustik und Regelungstechnik.',
    plannedUnits: ['Freie gedämpfte Schwingungen', 'Erzwungene Schwingungen (Resonanz)', 'Mehrmassen-Systeme', 'Prüfung'],
  },
  {
    id: 'messtechnik',
    title: 'Messtechnik',
    phase: 2,
    reason: 'Sensorik, Messunsicherheit und Signalverarbeitung sind im Labor unumgänglich. Ergänzt Statistik (Messfehler) und Elektrotechnik (Sensorschaltungen).',
    plannedUnits: ['Messkette & Kennlinien', 'Messunsicherheit (GUM)', 'Sensoren (Dehnung, Temperatur, Druck)', 'Prüfung'],
  },
  {
    id: 'konstruktionslehre',
    title: 'Konstruktionslehre & Technisches Zeichnen',
    phase: 1,
    reason: 'Normgerechte Zeichnung, Toleranzen (ISO-Pass-System), Oberflächenangaben — Grundlage für Maschinenelemente und Fertigungstechnik.',
    plannedUnits: ['Projektionen & Ansichten', 'Bemaßung & Toleranzen', 'Oberflächen & Pass-System', 'Prüfung'],
  },
  {
    id: 'chemie-mb',
    title: 'Chemie für Ingenieure',
    phase: 1,
    reason: 'Stoffeigenschaften, Korrosion, Verbrennung — Hintergrund für Werkstoffkunde und Thermodynamik.',
    plannedUnits: ['Atombau & Bindungen', 'Stöchiometrie', 'Redox & Korrosion', 'Prüfung'],
  },
  {
    id: 'fertigungstechnik',
    title: 'Fertigungstechnik',
    phase: 2,
    reason: 'Urformen, Umformen, Trennen, Fügen — ohne Fertigungswissen keine konstruktionsgerechte Auslegung.',
    plannedUnits: ['Urformen (Guss, Additiv)', 'Umformen & Zerspanen', 'Fügen (Schweißen, Kleben)', 'Prüfung'],
  },
]

/**
 * Tipps zur Lern- und Prüfungstechnik. Gruppiert nach Kontext.
 */
export const CURRICULUM_TIPS = [
  {
    title: 'Beim Lernen',
    items: [
      'Skript + App parallel: Kapitel im Skript lesen, dann passende Lesson in der App als aktive Wiederholung.',
      'Karteikarten für Formeln: Jede Formel mit Variablen-Erklärung; nach 1 Tag, 3 Tagen, 1 Woche wiederholen.',
      'Rechenweg dokumentieren: jeden Schritt handschriftlich nachschreiben — der motorische Vorgang stabilisiert das Gedächtnis.',
      'Mindestens 10 Aufgaben pro Lesson rechnen — Routine entsteht durch Menge, nicht durch Hingucken.',
    ],
  },
  {
    title: 'Bei Prüfungsaufgaben',
    items: [
      'Gegeben / Gesucht zuerst markieren — samt Einheiten.',
      'Skizze zeichnen (Freikörperbild, Diagramm, Koordinatensystem).',
      'Ansatz wählen: Gleichgewicht, Energie, Stoffgesetz, Bilanz, Geometrie.',
      'Einheiten prüfen, bevor Zahlen eingesetzt werden.',
      'Plausibilitätscheck: Größenordnung, Vorzeichen, Grenzfälle $x\\to 0$ / $x\\to\\infty$.',
    ],
  },
  {
    title: 'Typische Fallen',
    items: [
      'Taschenrechner-Modus: DEG vs. RAD.',
      '$\\text{MPa}$ vs. $\\text{N/mm}^2$ (identisch, aber oft unklar beim ersten Schritt).',
      'Masse vs. Gewichtskraft (kg vs. N).',
      'Prozent als Dezimal schreiben ($5\\,\\%=0{,}05$, nicht $5$).',
      'Beim Gleichung-Lösen: Operation immer auf BEIDE Seiten anwenden.',
    ],
  },
]
