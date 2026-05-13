import { makeLesson, makeUnit } from '@/content/_helpers/makeLesson'

const unit1 = makeUnit({
  id: 'werk-unit-1',
  title: 'Werkstoffkennwerte',
  order: 1,
  lessons: [
    makeLesson({
      id: 'werk-1-1',
      title: 'Spannungs-Dehnungs-Diagramm',
      estimatedMinutes: 15,
      learningGoals: [
        'Streckgrenze $R_e$, Zugfestigkeit $R_m$, Bruchdehnung $A$ ablesen',
        'Elastisch vs. plastisch unterscheiden',
        'Elastizitätsmodul $E$ als Steigung im Hookeschen Bereich erkennen',
      ],
      subGoals: [
        { label: '$R_e$ = Streckgrenze (Ende elastisch); $R_m$ = Zugfestigkeit (Maximum); nicht verwechseln', examRelevance: 'hoch' },
        { label: '$R_{p0,2}$ = 0,2-%-Dehngrenze bei Werkstoffen ohne ausgeprägte Streckgrenze (z. B. Aluminium)', examRelevance: 'hoch' },
        { label: 'E-Modul = Steigung im linearen (Hookeschen) Bereich: $E = \\sigma/\\varepsilon$', examRelevance: 'hoch' },
        { label: 'Bruchdehnung $A$ in %: $(l_u - l_0)/l_0 \\cdot 100$ — zäh vs. spröde', examRelevance: 'mittel' },
        { label: 'Sicherheit $S = R_m/\\sigma_\\text{zul}$ bzw. $R_e/\\sigma_\\text{zul}$ — wo welcher Kennwert?', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Der Fingerabdruck eines Werkstoffs',
      intuitionContent:
        'Beim **Zugversuch** wird eine Probe langsam gedehnt und die nötige Spannung gemessen. ' +
        'Das Ergebnis ist das **Spannungs-Dehnungs-Diagramm** $\\sigma(\\varepsilon)$. Daraus liest man die wichtigsten Kennwerte ab:\n\n' +
        '- **Elastischer Bereich** (gerade, Steigung = E): Probe federt zurück\n' +
        '- **Streckgrenze** $R_e$: ab hier bleibt Verformung dauerhaft\n' +
        '- **Zugfestigkeit** $R_m$: höchste erreichte Spannung\n' +
        '- **Bruchdehnung** $A$: wie stark sich die Probe vor dem Bruch gedehnt hat',
      formulaTitle: 'Hooke + Kennwerte',
      formulaContent:
        '**Hookesches Gesetz** (im elastischen Bereich):\n' +
        '$$\\sigma = E \\cdot \\varepsilon$$\n\n' +
        'mit $\\sigma$ Spannung in MPa, $\\varepsilon = \\Delta l/l_0$ dimensionslos, $E$ Elastizitätsmodul in MPa oder GPa.\n\n' +
        '**Bruchdehnung** (bleibende Längenänderung nach dem Bruch, bezogen auf $l_0$):\n' +
        '$$A = \\frac{l_u - l_0}{l_0} \\cdot 100\\,\\%$$\n\n' +
        '**$R_{p0{,}2}$ — 0,2-%-Dehngrenze:** Spannung, bei der nach Entlastung $0{,}2\\,\\%$ **bleibende** Dehnung verbleiben — Ersatz für $R_e$ bei Werkstoffen ohne ausgeprägte Streckgrenze (Aluminium, austenitische Edelstähle, Cu-Legierungen). Konstruktion: Parallele zur Hookeschen Geraden bei $\\varepsilon = 0{,}002$, Schnittpunkt mit der Kurve.\n\n' +
        '| Größe | Bedeutung | Beispiel S235 |\n' +
        '|---|---|---|\n' +
        '| $R_e$ | Streckgrenze (Ende elastisch) | $\\approx 235\\,\\text{MPa}$ |\n' +
        '| $R_m$ | Zugfestigkeit (Maximum) | $\\approx 360$–$510\\,\\text{MPa}$ |\n' +
        '| $A$ | Bruchdehnung | $\\approx 25\\,\\%$ |\n' +
        '| $E$ | Elastizitätsmodul | $\\approx 210\\,000\\,\\text{MPa}$ |\n\n' +
        '**Sicherheitszahl & zulässige Spannung:**\n' +
        '$$S = \\frac{R_e}{\\sigma_\\text{zul}}\\;\\text{(zäh)} \\quad\\text{bzw.}\\quad S = \\frac{R_m}{\\sigma_\\text{zul}}\\;\\text{(spröde)}$$\n' +
        'umgestellt: $\\sigma_\\text{zul} = R_e/S$ bzw. $R_m/S$, typische Werte $S = 1{,}5$–$3$.',
      visualization: {
        visualizationId: 'stress-strain',
        title: 'Spannungs-Dehnungs-Diagramm — Stahl, Aluminium, Gusseisen',
      },
      masteryQuestion: 'Welcher Kennwert markiert den Übergang elastisch → plastisch?',
      masteryOptions: ['$R_e$ (Streckgrenze)', '$R_m$ (Zugfestigkeit)', '$A$ (Bruchdehnung)', '$E$ (E-Modul)'],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Im Spannungs-Dehnungs-Diagramm sind vier Größen markiert: $R_e$, $R_m$, $A$, $E$. Gefragt ist der Punkt, ab dem die Verformung **bleibend** ist.\n\n' +
        '**Rechnung:** Bis $R_e$ gilt das Hookesche Gesetz $\\sigma = E\\cdot\\varepsilon$ — entlastet man die Probe vor $R_e$, springt sie zurück. Oberhalb $R_e$ verbleibt nach Entlastung eine plastische Dehnung.\n\n' +
        '**Probe:** Bei $\\sigma < R_e$ ist $\\varepsilon_\\text{plast} = 0$; bei $\\sigma = R_e$ beginnt das Fließen; bei $\\sigma > R_e$ ist $\\varepsilon_\\text{plast} > 0$. ✓\n\n' +
        '**Typischer Fehler:** $R_m$ als Übergang zu nehmen — $R_m$ ist die **höchste** erreichte Spannung (Maximum der Kurve, nach der Verfestigungs-Phase) und liegt deutlich nach dem elastisch-plastisch-Übergang.',
      masteryHints: [
        'Übergang elastisch → plastisch = ab wann bleibt Verformung dauerhaft.',
        '$R_e$ ist die **Streckgrenze** — vor ihr federt alles zurück.',
        '$R_m$ kommt erst nach $R_e$ — es ist das Maximum, nicht der Übergang.',
      ],
      masteryWrongAnswerExplanations: {
        "1": '$R_m$ ist die Zugfestigkeit, also die höchste erreichte Spannung im Zugversuch. Sie liegt deutlich nach dem Übergang elastisch → plastisch. Verwechslung $R_e$ (Streckgrenze) vs. $R_m$ (Zugfestigkeit) ist häufig — Eselsbrücke: $e$ wie "elastisch-Ende", $m$ wie "maximum".',
        "2": '$A$ ist die Bruchdehnung in % — sie beschreibt, wie stark sich die Probe insgesamt bis zum Bruch gedehnt hat, nicht den Übergang. Sie wird am Ende des Versuchs ermittelt, nicht beim Fließbeginn.',
        "3": '$E$ ist der Elastizitätsmodul — die Steigung der Geraden im elastischen Bereich ($\\sigma = E \\cdot \\varepsilon$). $E$ charakterisiert den elastischen Bereich, markiert aber keinen Übergang. Der Punkt, an dem dieser Bereich endet, ist $R_e$.',
      },
      nextLessonId: 'werk-1-2',
      blueprint: {
        prerequisites: [],
        concepts: [
          { id: 're-rm',         title: '$R_e$ = Streckgrenze (Ende elastisch); $R_m$ = Zugfestigkeit (Maximum)',                  dependsOn: [] },
          { id: 'rp02',          title: '$R_{p0,2}$ = 0,2-%-Dehngrenze (Aluminium ohne ausgeprägte Streckgrenze)',                dependsOn: ['re-rm'] },
          { id: 'e-modul',       title: 'E-Modul = Steigung im linearen Bereich: $E=\\sigma/\\varepsilon$',                       dependsOn: [] },
          { id: 'bruchdehnung',  title: 'Bruchdehnung $A=(l_u-l_0)/l_0\\cdot 100\\%$ — zäh vs. spröde',                            dependsOn: [] },
          { id: 'sicherheit',    title: 'Sicherheit $S=R_m/\\sigma_{\\text{zul}}$ bzw. $R_e/\\sigma_{\\text{zul}}$',                dependsOn: ['re-rm'] },
        ],
        subGoalConcepts: {
          0: ['re-rm'],
          1: ['rp02'],
          2: ['e-modul'],
          3: ['bruchdehnung'],
          4: ['sicherheit'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['re-rm'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['re-rm'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['re-rm'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['re-rm'],          qty: 1, note: '$R_e$/$R_m$ verwechselt' },
          { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['re-rm'],          qty: 1 },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['rp02'],           qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rp02'],           qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['rp02'],           qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rp02'],           qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['rp02'],           qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['e-modul'],        qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-modul'],        qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['e-modul'],        qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-modul'],        qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['e-modul'],        qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['bruchdehnung'],   qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bruchdehnung'],   qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['bruchdehnung'],   qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bruchdehnung'],   qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['bruchdehnung'],   qty: 1 },
          { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['sicherheit'],     qty: 1 },
          { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sicherheit'],     qty: 1 },
          { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['sicherheit'],     qty: 1 },
          { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sicherheit'],     qty: 1 },
          { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['sicherheit'],     qty: 1 },
        ],
      },
    }),
    makeLesson({
      id: 'werk-1-2',
      title: 'Werkstoffgruppen',
      estimatedMinutes: 14,
      learningGoals: [
        'Stahl, Aluminium, Kunststoff und Keramik qualitativ vergleichen',
        'Anwendungsgebiete aus Werkstoffeigenschaften ableiten',
      ],
      subGoals: [
        { label: 'Metalle: zäh, gut umformbar, gut wärmeleitend — tragende Konstruktionen', examRelevance: 'hoch' },
        { label: 'Keramik: hart, hitzebeständig, spröde — **nicht auf Zug** belasten', examRelevance: 'hoch' },
        { label: 'Kunststoffe: leicht, korrosionsfest, niedriger E-Modul — Gehäuse, Gleitlager', examRelevance: 'mittel' },
        { label: 'Verbunde (CFK, GFK): hohe spezifische Steifigkeit $E/\\rho$ — Leichtbau', examRelevance: 'mittel' },
        { label: 'Spezifische Steifigkeit $E/\\rho$ als Leichtbau-Kennzahl (Titan, CFK, Alu > Stahl)', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-16',
      intuitionTitle: 'Welcher Werkstoff für welchen Job?',
      intuitionContent:
        '**Metalle** (Stahl, Alu, Kupfer) sind zäh und gut verformbar — ideal für tragende Bauteile.\n\n' +
        '**Keramiken** (Al₂O₃, SiC) sind sehr hart und hitzebeständig, aber spröde — kein Zug!\n\n' +
        '**Kunststoffe** (PA, PTFE, POM) sind leicht und korrosionsbeständig, aber weniger steif.\n\n' +
        '**Verbundwerkstoffe** (CFK, GFK) kombinieren hohe Steifigkeit mit geringem Gewicht.',
      formulaTitle: 'Werkstoffgruppen — Eigenschaften & Leichtbau',
      formulaContent:
        '**Vergleichstabelle Kennwerte:**\n\n' +
        '| Werkstoff | E-Modul | $R_m$ | Dichte $\\rho$ | $E/\\rho$ |\n' +
        '|---|---|---|---|---|\n' +
        '| Stahl S235 | 210 GPa | 360–510 MPa | 7,85 g/cm³ | $\\approx 27$ |\n' +
        '| Aluminium 6060 | 70 GPa | 150–195 MPa | 2,70 g/cm³ | $\\approx 26$ |\n' +
        '| PA6 / Nylon | 3 GPa | 70–80 MPa | 1,14 g/cm³ | $\\approx 2{,}6$ |\n' +
        '| Al₂O₃ (Keramik) | 380 GPa | ($\\sigma_\\text{Druck} \\approx 2000$ MPa) | 3,9 g/cm³ | $\\approx 97$ |\n' +
        '| CFK (uni) | 130 GPa | 1500–2000 MPa | 1,6 g/cm³ | $\\approx 81$ |\n' +
        '| GFK | 30–45 GPa | 800–1200 MPa | 1,8 g/cm³ | $\\approx 17$–$25$ |\n\n' +
        '**Charakteristische Eigenschaften der Werkstoffgruppen:**\n\n' +
        '| Gruppe | Stärken | Schwächen | Typische Anwendung |\n' +
        '|---|---|---|---|\n' +
        '| Metalle | zäh, umformbar, gut wärme-/elektrisch leitend | korrosionsanfällig (Stahl) | tragende Bauteile, Stromschienen |\n' +
        '| Keramik | hart, hitzebeständig, verschleißfest | spröde (kein Zug, keine Schläge) | Schneidwerkzeuge, Gleitringe, Lager |\n' +
        '| Kunststoffe | leicht, korrosionsfest, billig in Großserie | niedriger E-Modul, temperaturlimitiert | Gehäuse, Dichtungen, Gleitlager |\n' +
        '| Verbunde (CFK, GFK) | hohe spezifische Steifigkeit $E/\\rho$, Korrosionsfestigkeit | anisotrop, teuer (CFK), reparaturschwierig | Flugzeug, Sportwagen, Rotorblätter |\n\n' +
        '**Leichtbau-Kennzahl — spezifische Steifigkeit:**\n' +
        '$$\\frac{E}{\\rho}$$\n' +
        'Bei vorgegebener Dehnsteifigkeit ist die Bauteilmasse $m \\propto \\rho/E = 1/(E/\\rho)$. Hoher $E/\\rho$-Wert = niedrige Masse für gleiche Steifigkeit. Stahl und Aluminium liegen mit $\\approx 27$ bzw. $\\approx 26$ erstaunlich gleichauf — der echte Sprung kommt erst mit Faserverbunden ($\\approx 80$).',
      masteryQuestion: 'Welcher Werkstoff ist für eine hochtemperaturfeste, verschleißarme Gleitführung am besten geeignet?',
      masteryOptions: ['Polyethylen (PE)', 'Stahl S235', 'Aluminiumoxid-Keramik (Al₂O₃)', 'Kupfer'],
      correctIndex: 2,
      masteryExplanation:
        '**Ansatz:** Anforderung „hochtemperaturfest + verschleißarm" filtert die Werkstoffgruppen: Kunststoffe scheiden bei hoher Temperatur aus, weiche Metalle (Cu, Baustahl) verschleißen schnell.\n\n' +
        '**Rechnung:** Keramiken wie Al₂O₃ haben Härte $\\approx 2000\\,\\text{HV}$ und sind formstabil bis weit über $1000\\,°\\text{C}$. PE erweicht ab $\\approx 100\\,°\\text{C}$, S235 verliert oberhalb $\\approx 500\\,°\\text{C}$ deutlich an Festigkeit, Cu ist mit $\\approx 50\\,\\text{HV}$ extrem weich.\n\n' +
        '**Probe:** Industriell werden Hochtemperatur-Gleitführungen (z. B. in Pumpen für heiße Medien) tatsächlich aus Al₂O₃, SiC oder ZrO₂ gefertigt — passt. ✓\n\n' +
        '**Typischer Fehler:** „Stahl ist hart" — ungehärteter Baustahl hat nur ca. $130\\,\\text{HV}$, das ist eine Größenordnung unter Al₂O₃; ohne gehärtete Schicht ist er für Verschleißbelastung nicht geeignet.',
      masteryHints: [
        'Hohe Temperatur + hohe Verschleißfestigkeit → Keramik.',
        'Kunststoffe erweichen bei ca. 100–250 °C.',
        'Keramiken sind hart und hitzebeständig, aber spröde.',
      ],
      masteryWrongAnswerExplanations: {
        "0": 'Polyethylen (PE) erweicht bereits bei ca. 100–130 °C und hat eine sehr geringe Härte. Bei einer hochtemperaturfesten Gleitführung würde PE schmelzen oder fliessen. Kunststoffe taugen nur für geringe Temperatur- und Druckbelastung.',
        "1": 'Stahl S235 ist ein weicher Baustahl (ca. 120–150 HV). Für eine verschleißarme Gleitführung fehlt ihm die Härte, zusätzlich verliert er oberhalb ~500 °C spürbar an Festigkeit. Ohne Härtung oder Beschichtung nicht für diese Anwendung geeignet.',
        "3": 'Kupfer ist ein sehr weicher Werkstoff (~40–60 HV) und wird bei hoher Temperatur noch weicher. Er ist gut wärmeleitend, aber verschleißanfällig — genau das Gegenteil von dem, was eine Hochtemperatur-Gleitführung braucht.',
      },
      nextLessonId: 'werk-2-1',
      blueprint: {
        prerequisites: [
          { lessonId: 'werk-1-1', concepts: ['e-modul', 're-rm'] },
        ],
        concepts: [
          { id: 'metalle',     title: 'Metalle: zäh, gut umformbar, gut wärmeleitend — tragend',                                  dependsOn: [] },
          { id: 'keramik',     title: 'Keramik: hart, hitzebeständig, spröde — nicht auf Zug',                                     dependsOn: [] },
          { id: 'kunststoffe', title: 'Kunststoffe: leicht, korrosionsfest, niedriger E-Modul',                                    dependsOn: [] },
          { id: 'verbunde',    title: 'Verbunde (CFK, GFK): hohe spezifische Steifigkeit $E/\\rho$',                                dependsOn: [] },
          { id: 'leichtbau',   title: 'Spezifische Steifigkeit $E/\\rho$ als Leichtbau-Kennzahl (Titan, CFK, Alu > Stahl)',         dependsOn: [] },
        ],
        subGoalConcepts: {
          0: ['metalle'],
          1: ['keramik'],
          2: ['kunststoffe'],
          3: ['verbunde'],
          4: ['leichtbau'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['metalle'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['metalle'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['metalle'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['metalle'],          qty: 1 },
          { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['metalle'],          qty: 1 },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['keramik'],          qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['keramik'],          qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['keramik'],          qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['keramik'],          qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['keramik'],          qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['kunststoffe'],      qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kunststoffe'],      qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['kunststoffe'],      qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kunststoffe'],      qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['kunststoffe'],      qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['verbunde'],         qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['verbunde'],         qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['verbunde'],         qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['verbunde'],         qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['verbunde'],         qty: 1 },
          { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['leichtbau'],        qty: 1 },
          { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['leichtbau'],        qty: 1 },
          { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['leichtbau'],        qty: 1 },
          { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['leichtbau'],        qty: 1 },
          { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['leichtbau'],        qty: 1 },
        ],
      },
    }),
  ],
})

const unit2 = makeUnit({
  id: 'werk-unit-2',
  title: 'Prüfverfahren',
  order: 2,
  lessons: [
    makeLesson({
      id: 'werk-2-1',
      title: 'Härteprüfung (HV, HB, HRC)',
      estimatedMinutes: 12,
      learningGoals: [
        'Prinzip der Härteprüfung verstehen',
        'Vickers, Brinell, Rockwell unterscheiden',
        'Härte mit Festigkeit korrelieren',
      ],
      subGoals: [
        { label: 'Vickers (HV): Diamantpyramide, universell für hart und dünn; Brinell (HB): Kugel, für weichere Werkstoffe', examRelevance: 'hoch' },
        { label: 'Rockwell (HRC): direkt ablesbar am Messgerät — schnellste Prüfmethode in der Fertigung', examRelevance: 'hoch' },
        { label: 'Faustformel Stahl: $R_m \\approx 3{,}5 \\cdot HV$ in MPa — Härte korreliert mit Zugfestigkeit', examRelevance: 'mittel' },
        { label: 'Prüfkraft und Probendicke müssen zusammen passen, sonst verfälscht Untergrund das Ergebnis', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-20',
      intuitionTitle: 'Wie hart ist „hart"?',
      intuitionContent:
        '**Härte** ist der Widerstand eines Werkstoffs gegen das Eindringen eines anderen Körpers. ' +
        'Die üblichen Prüfmethoden drücken einen normierten Eindringkörper (Kugel, Diamantpyramide, Diamantkegel) mit definierter Kraft in die Oberfläche und messen den Abdruck.\n\n' +
        '- **Vickers (HV):** Diamantpyramide, kleiner Eindruck — auch für dünne Proben und harte Werkstoffe geeignet.\n' +
        '- **Brinell (HB):** Kugel aus Hartmetall — für weichere Werkstoffe und größere Proben.\n' +
        '- **Rockwell (HRC / HRB):** Diamantkegel (HRC) oder Kugel (HRB) — sehr schnell, direkt vom Messgerät ablesbar.',
      formulaTitle: 'Kennwerte & Korrelation',
      formulaContent:
        '**Vickers-Härte (DIN EN ISO 6507):** Diamantpyramide $136°$, Diagonale $d$ messen.\n' +
        '$$\\text{HV} = 0{,}1891 \\cdot \\frac{F}{d^{2}}$$\n' +
        '($F$ in N, $d$ als mittlere Diagonale in mm).\n\n' +
        '**Brinell-Härte (DIN EN ISO 6506):** Hartmetallkugel $D = 1$–$10\\,\\text{mm}$, Abdruck-Durchmesser $d$ messen.\n' +
        '$$\\text{HB} \\approx 0{,}102 \\cdot \\frac{F}{A_\\text{abdruck}}$$\n\n' +
        '**Rockwell C (DIN EN ISO 6508):** Diamantkegel $120°$, Vorlast $98\\,\\text{N}$, Hauptlast $1373\\,\\text{N}$. Gerät misst die Eindringtiefe $h$ direkt:\n' +
        '$$\\text{HRC} = 100 - \\frac{h}{0{,}002\\,\\text{mm}}$$\n' +
        'Anzeige direkt am Messgerät — schnellste Methode in der Serienfertigung.\n\n' +
        '**Faustformel Stahl:** $R_m\\,[\\text{MPa}] \\approx 3{,}5 \\cdot \\text{HV}$. Aus einer schnellen Härteprüfung lässt sich die Zugfestigkeit grob abschätzen (Stahl-spezifisch; bei Aluminium liegt der Faktor bei $\\approx 3{,}0$–$3{,}3$).\n\n' +
        '**Faustregel Probendicke / Eindringtiefe:**\n' +
        '$$t_\\text{min} \\geq 10 \\cdot h$$\n' +
        'Liegt die Probendicke (oder Schichtdicke) unter dem $10$-fachen der Eindringtiefe, drückt der Eindringkörper bis zum Untergrund durch — die Härte wird verfälscht. Lösung: kleinere Last oder Mikro-Vickers (HV0,1 mit $F < 2\\,\\text{N}$).\n\n' +
        '**Typische Werte:**\n' +
        '- Reineisen: ~100 HV\n' +
        '- Baustahl S235: ~120–150 HV\n' +
        '- Vergütungsstahl 42CrMo4: ~280–320 HV\n' +
        '- Gehärteter Werkzeugstahl: bis 900 HV\n' +
        '- Hartmetall: ~1500 HV\n' +
        '- Al₂O₃-Keramik: ~2000 HV',
      masteryQuestion: 'Welches Verfahren eignet sich am besten für eine dünne Oberflächenschicht (z. B. gehärtete Randschicht)?',
      masteryOptions: ['Vickers (HV)', 'Brinell (HB) mit 10 mm Kugel', 'Rockwell B (HRB)', 'Keine der Methoden'],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Dünne Schicht braucht kleinen Eindruck.\n\n' +
        '**Rechnung:** Vickers mit Diamantpyramide erzeugt sehr kleine Abdrücke (Micro-Vickers: F < 2 N).\n\n' +
        '**Probe:** Brinell mit 10 mm Kugel würde die Schicht durchdrücken und den Grundwerkstoff mitmessen.\n\n' +
        '**Typischer Fehler:** Brinell auch auf harte/dünne Schichten anwenden — das Ergebnis wird verfälscht.',
      masteryHints: [
        'Kleiner Eindruck ist nötig, um nur die dünne Schicht zu messen.',
        'Welches Verfahren hat den kleinsten Eindruck?',
        'Faustregel: Eindringtiefe $h \\leq \\tfrac{1}{10}$ der Schichtdicke — sonst zählt der Untergrund mit.',
      ],
      masteryWrongAnswerExplanations: {
        "1": 'Brinell mit 10 mm Kugel erzeugt einen vergleichsweise großen Abdruck (Durchmesser mehrere Millimeter, Eindringtiefe zu groß). Die dünne Schicht würde durchdrückt und der weichere Grundwerkstoff verfälscht das Ergebnis. Kleine Eindrücke liefert nur Vickers (insbesondere Micro-Vickers).',
        "2": 'Rockwell B (HRB) nutzt eine Hartmetall-Kugel und höhere Prüfkräfte — der Eindruck ist zu tief für dünne Schichten. HRB ist für weichere, dickere Proben gedacht. Für Randschichten braucht man eine kleine Diamantpyramide wie bei Vickers.',
        "3": 'Es gibt durchaus ein passendes Verfahren: Vickers (insbesondere Micro-/Nano-Vickers) kann mit geringen Prüfkräften auch dünne Randschichten normgerecht charakterisieren. "Keine" ist daher falsch.',
      },
      prerequisites: ['werk-1-2'],
      nextLessonId: 'werk-2-2',
      blueprint: {
        prerequisites: [
          { lessonId: 'werk-1-1', concepts: ['re-rm'] },
        ],
        concepts: [
          { id: 'vickers-brinell', title: 'Vickers (HV) Diamantpyramide universell; Brinell (HB) Kugel für weichere',         dependsOn: [] },
          { id: 'rockwell',        title: 'Rockwell (HRC): direkt ablesbar, schnellste Methode in der Fertigung',              dependsOn: [] },
          { id: 'haerte-rm',       title: 'Faustformel Stahl: $R_m\\approx 3{,}5\\cdot HV$ in MPa',                            dependsOn: ['vickers-brinell'] },
          { id: 'pruefkraft',      title: 'Prüfkraft und Probendicke abstimmen — sonst Untergrund verfälscht',                  dependsOn: [] },
        ],
        subGoalConcepts: {
          0: ['vickers-brinell'],
          1: ['rockwell'],
          2: ['haerte-rm'],
          3: ['pruefkraft'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['vickers-brinell'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['vickers-brinell'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['vickers-brinell'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['vickers-brinell'],          qty: 1 },
          { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['vickers-brinell'],          qty: 1 },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['rockwell'],                 qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rockwell'],                 qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['rockwell'],                 qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rockwell'],                 qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['rockwell'],                 qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['haerte-rm'],                qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['haerte-rm'],                qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['haerte-rm'],                qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['haerte-rm'],                qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['haerte-rm'],                qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['pruefkraft'],               qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pruefkraft'],               qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['pruefkraft'],               qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pruefkraft'],               qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['pruefkraft'],               qty: 1 },
        ],
      },
    }),
    makeLesson({
      id: 'werk-2-2',
      title: 'Kerbschlagbiegeversuch',
      estimatedMinutes: 12,
      learningGoals: [
        'Sprödbruch-Risiko erkennen',
        'Übergangstemperatur zwischen zähem und sprödem Verhalten verstehen',
        'Kerbschlagarbeit $KV$ als Kennwert interpretieren',
      ],
      subGoals: [
        { label: 'Charpy-Versuch: Pendel bricht gekerbte Probe, $KV = mg(h_0 - h_1)$ in Joule', examRelevance: 'hoch' },
        { label: 'Hohe $KV$ → zäh, niedrige $KV$ → spröde', examRelevance: 'hoch' },
        { label: 'Kritischer Grenzwert Stahlbau: $KV \\geq 27$ J bei Einsatztemperatur', examRelevance: 'hoch' },
        { label: 'Übergangstemperatur $T_\\ddot{U}$: Abfall von $KV$ unterhalb → Sprödbruchgefahr bei Kälte', examRelevance: 'hoch' },
        { label: 'Stahlbezeichnungen: J0 bei 0°C, J2 bei −20°C, K2 bei −40°C geprüft', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-20',
      intuitionTitle: 'Zäh oder spröde?',
      intuitionContent:
        'Ein Zugversuch gibt Festigkeit, aber keine Aussage über **Sprödbruch-Empfindlichkeit**. Dafür gibt es den **Kerbschlagbiegeversuch** (nach Charpy): ' +
        'Eine gekerbte Probe wird durch ein Pendel schlagartig gebrochen. Die verbrauchte Energie heißt **Kerbschlagarbeit** $KV$ (in Joule).\n\n' +
        '**Deutung:**\n' +
        '- Hohe $KV$ → **zäher** Bruch (gute Verformung vor Trennung)\n' +
        '- Niedrige $KV$ → **spröder** Bruch (plötzlich, ohne Warnung)\n\n' +
        '**Übergangstemperatur:** Viele Stähle verhalten sich bei warmer Temperatur zäh, werden aber bei Kälte spröde. Unterhalb der **Übergangstemperatur** $T_Ü$ fällt $KV$ stark ab — gefährlich für Kalt-Konstruktionen!',
      formulaTitle: 'Kerbschlagarbeit',
      formulaContent:
        '**Kerbschlagarbeit (Charpy-Versuch):**\n' +
        '$$KV = m \\cdot g \\cdot (h_0 - h_1)$$\n' +
        '- $h_0$: Anfangshöhe des Pendels\n' +
        '- $h_1$: Endhöhe nach Bruch\n' +
        '- $KV$ in Joule, wird direkt vom Gerät abgelesen\n\n' +
        '**Typische Werte bei Raumtemperatur:**\n' +
        '- Baustahl S235J2: $> 27\\,\\text{J}$ (zäh)\n' +
        '- Grauguss GG-25: $3$–$5\\,\\text{J}$ (spröde)\n' +
        '- Vergütungsstahl 42CrMo4: $40$–$100\\,\\text{J}$\n' +
        '- Austenitischer Edelstahl X5CrNi18-10: $> 100\\,\\text{J}$ auch bei $-200\\,°\\text{C}$\n\n' +
        '**Kritischer Grenzwert (Stahlbau):** $KV \\geq 27\\,\\text{J}$ bei Einsatztemperatur. Werte darunter gelten als sprödbruchgefährdet.\n\n' +
        '**Übergangstemperatur $T_\\ddot{U}$:** Temperatur, bei der die Charpy-Kurve $KV(T)$ vom zähen Hochlagen- in den spröden Tieflagen-Bereich umschlägt (typische Definition: $T_{27\\,\\text{J}}$ oder $50\\,\\%$ kristalliner Bruchflächenanteil = FATT). Krz-Stähle (S235, Vergütungsstähle) zeigen einen ausgeprägten Steilabfall; kfz-Stähle (austenitische Edelstähle) bleiben über den gesamten Temperaturbereich zäh.\n\n' +
        '**Stahlbezeichnungs-Suffix (DIN EN 10025):**\n\n' +
        '| Suffix | Prüftemperatur | Mindest-$KV$ |\n' +
        '|---|---|---|\n' +
        '| JR | $+20\\,°\\text{C}$ (Raumtemp.) | $27\\,\\text{J}$ |\n' +
        '| J0 | $0\\,°\\text{C}$ | $27\\,\\text{J}$ |\n' +
        '| J2 | $-20\\,°\\text{C}$ | $27\\,\\text{J}$ |\n' +
        '| K2 | $-40\\,°\\text{C}$ | $27\\,\\text{J}$ (höherfeste Sorten) |\n\n' +
        'Regel: Ein Stahl mit zugesicherter $KV$ bei einer **tieferen** Prüftemperatur deckt automatisch alle wärmeren Einsatztemperaturen ab.',
      masteryQuestion: 'Eine Baustahlprobe hat bei $-20\\,°\\text{C}$ eine Kerbschlagarbeit von $15\\,\\text{J}$. Was bedeutet das für die Konstruktion?',
      masteryOptions: [
        'Sprödbruchgefahr bei tiefen Temperaturen — der Werkstoff ist ungeeignet',
        'Alles in Ordnung — 15 J ist ausreichend',
        'Das Ergebnis lässt sich nicht interpretieren',
        'Höhere Festigkeit als S235',
      ],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Grenzwert für sprödbruchsichere Konstruktionen ist $KV \\geq 27\\,\\text{J}$.\n\n' +
        '**Rechnung:** $15\\,\\text{J} < 27\\,\\text{J}$ → sprödbruchgefährdet.\n\n' +
        '**Probe:** Stähle mit $J2$-Zusatz sind für $-20\\,°\\text{C}$ geprüft und erreichen ≥27 J — hier offensichtlich nicht erreicht.\n\n' +
        '**Typischer Fehler:** Die Temperatur ignorieren; bei Raumtemperatur wäre derselbe Stahl oft zäh.',
      masteryHints: [
        'Grenzwert für sprödbruchsichere Konstruktionen?',
        '$KV \\geq 27\\,\\text{J}$ ist der kritische Wert im Stahlbau.',
        'Prüftemperatur beachten: bei $-20\\,°\\text{C}$ braucht es einen J2-Zusatz, sonst Sprödbruchgefahr.',
      ],
      masteryWrongAnswerExplanations: {
        "1": '$15\\,\\text{J}$ liegt klar unter dem kritischen Grenzwert von $27\\,\\text{J}$. "Alles in Ordnung" ignoriert die Norm und unterschätzt die Sprödbruchgefahr. Regel: Stähle im Stahlbau müssen $KV \\geq 27\\,\\text{J}$ bei Einsatztemperatur erreichen.',
        "2": 'Das Ergebnis ist sehr wohl interpretierbar: $KV$ in Joule ist direkt vergleichbar mit dem Normwert $27\\,\\text{J}$. Niedrige Werte bedeuten sprödes Bruchverhalten. Das Verfahren liefert gerade diese klare Aussage.',
        "3": 'Kerbschlagarbeit sagt nichts über die Zugfestigkeit aus — sie misst Zähigkeit/Sprödigkeit, nicht Festigkeit. Verwechslung mit $R_m$. Ein niedriger $KV$-Wert bedeutet nur, dass der Werkstoff wenig Energie vor dem Bruch aufnimmt, nicht dass er fester wäre.',
      },
      prerequisites: ['werk-2-1'],
      nextLessonId: 'werk-2-3',
      blueprint: {
        prerequisites: [
          { lessonId: 'werk-1-1', concepts: ['bruchdehnung'] },
        ],
        concepts: [
          { id: 'charpy',         title: 'Charpy-Versuch: $KV=mg(h_0-h_1)$ in J',                                                 dependsOn: [] },
          { id: 'kv-zaeh-sproed', title: 'Hohe $KV$ → zäh, niedrige $KV$ → spröde',                                                dependsOn: ['charpy'] },
          { id: 'grenzwert-27',   title: 'Stahlbau: $KV\\ge 27$ J bei Einsatztemperatur',                                          dependsOn: ['kv-zaeh-sproed'] },
          { id: 'uebergangstemp', title: 'Übergangstemperatur $T_\\ddot U$: $KV$-Abfall → Sprödbruchgefahr bei Kälte',             dependsOn: ['kv-zaeh-sproed'] },
          { id: 'stahl-j-bez',    title: 'Stahlbezeichnungen J0/J2/K2 = Prüftemperatur 0/−20/−40 °C',                              dependsOn: ['grenzwert-27'] },
        ],
        subGoalConcepts: {
          0: ['charpy'],
          1: ['kv-zaeh-sproed'],
          2: ['grenzwert-27'],
          3: ['uebergangstemp'],
          4: ['stahl-j-bez'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['charpy'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['charpy'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['charpy'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['charpy'],          qty: 1 },
          { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['charpy'],          qty: 1 },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kv-zaeh-sproed'],  qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kv-zaeh-sproed'],  qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['kv-zaeh-sproed'],  qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kv-zaeh-sproed'],  qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['kv-zaeh-sproed'],  qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['grenzwert-27'],    qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['grenzwert-27'],    qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['grenzwert-27'],    qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['grenzwert-27'],    qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['grenzwert-27'],    qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['uebergangstemp'],  qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['uebergangstemp'],  qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['uebergangstemp'],  qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['uebergangstemp'],  qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['uebergangstemp'],  qty: 1 },
          { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['stahl-j-bez'],     qty: 1 },
          { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['stahl-j-bez'],     qty: 1 },
          { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['stahl-j-bez'],     qty: 1 },
          { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['stahl-j-bez'],     qty: 1 },
          { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['stahl-j-bez'],     qty: 1 },
        ],
      },
    }),
    makeLesson({
      id: 'werk-2-3',
      title: 'Fe-C-Diagramm & Wärmebehandlung',
      estimatedMinutes: 16,
      learningGoals: [
        'Die wichtigsten Gefüge des Fe-C-Systems (Ferrit, Austenit, Perlit, Martensit) unterscheiden',
        'Den eutektischen Punkt und den für die Härtbarkeit nutzbaren C-Bereich kennen',
        'Glühen, Härten und Vergüten als typische Wärmebehandlungen einordnen',
      ],
      subGoals: [
        { label: 'Ferrit (α, krz): weich/zäh; Austenit (γ, kfz): nur bei hoher T; Perlit (lamellar); Martensit (Nadeln, hart)', examRelevance: 'hoch' },
        { label: 'Eutektoider Punkt: $0{,}83\\%$ C bei $723°$C — Austenit → Perlit', examRelevance: 'hoch' },
        { label: 'Härtbarkeit: $0{,}3$–$0{,}8\\%$ C nötig (zu wenig = kein Martensit, zu viel = spröde)', examRelevance: 'hoch' },
        { label: 'Wärmebehandlungen: Glühen (Gefüge-Gleichgewicht), Härten (abschrecken), Vergüten (Härten + Anlassen)', examRelevance: 'hoch' },
        { label: 'Vergüten: hohe Festigkeit + Zähigkeit durch angelassenen Martensit (z.B. 42CrMo4)', examRelevance: 'hoch' },
        { label: 'Langsames Abkühlen → Diffusion → Perlit; Schnelles Abschrecken → diffusionslos → Martensit', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-21',
      intuitionTitle: 'Stahl als Legierungssystem',
      intuitionContent:
        'Stahl ist eine Legierung aus **Eisen** und **Kohlenstoff** (bis ca. $2\\%$ C). Die Eigenschaften hängen dramatisch vom Kohlenstoffgehalt und der thermischen Vorgeschichte ab — erkennbar im **Fe-C-Diagramm**.\n\n' +
        '**Die wichtigsten Gefüge:**\n\n' +
        '- **Ferrit** ($\\alpha$-Eisen, krz): weich, zäh, ferromagnetisch. Entsteht bei langsamer Abkühlung aus Austenit.\n' +
        '- **Austenit** ($\\gamma$-Eisen, kfz): existiert nur bei hohen Temperaturen ($> 723\\,°\\text{C}$), löst viel Kohlenstoff.\n' +
        '- **Perlit**: lamellare Mischung aus Ferrit und Zementit (Fe$_3$C). Entsteht aus Austenit bei **langsamer** Abkühlung.\n' +
        '- **Martensit**: nadelartiges, stark verzerrtes Gefüge. Entsteht aus Austenit bei **schnellem Abschrecken** — sehr hart, aber spröde.\n\n' +
        '**Eutektischer Punkt:** bei $0{,}83\\%$ C und $723\\,°\\text{C}$ — hier wandelt Austenit beim Abkühlen direkt in Perlit um (feinlamellar, gute Zähigkeit).\n\n' +
        '**Härtbarkeit:** Nur Stähle mit $\\approx 0{,}3$–$0{,}8\\%$ C lassen sich sinnvoll härten — darunter zu wenig Kohlenstoff für Martensit, darüber zu spröde.',
      formulaTitle: 'Fe-C-Phasen & Wärmebehandlungen im Überblick',
      formulaContent:
        '**Phasen des Fe-C-Systems:**\n\n' +
        '| Phase | Struktur | Stabilität | C-Löslichkeit | Charakter |\n' +
        '|---|---|---|---|---|\n' +
        '| **Ferrit** ($\\alpha$-Eisen) | krz | $T < 911\\,°\\text{C}$ | $\\leq 0{,}02\\,\\%$ | weich, zäh, ferromagnetisch |\n' +
        '| **Austenit** ($\\gamma$-Eisen) | kfz | $911$–$1392\\,°\\text{C}$ | bis $2{,}06\\,\\%$ | nur in Hitze stabil (außer austenitischer Edelstahl) |\n' +
        '| **Perlit** | lamellares $\\alpha$ + Fe$_3$C | bei langsamer Abkühlung | — | mittelhart, gute Zähigkeit |\n' +
        '| **Martensit** | tetragonal verzerrtes krz | nach Abschrecken | C zwangsgelöst | sehr hart, spröde |\n' +
        '| **Zementit** Fe$_3$C | komplexe orthorhombische Struktur | überall als Karbid | $6{,}67\\,\\%$ | sehr hart, sehr spröde |\n\n' +
        '**Eutektoider Punkt:** $\\approx 0{,}83\\,\\%$ C bei $723\\,°\\text{C}$. Reaktion beim Abkühlen:\n' +
        '$$\\gamma\\text{ (Austenit)} \\;\\xrightarrow{723\\,°\\text{C}}\\; \\alpha\\text{ (Ferrit)} + \\text{Fe}_3\\text{C (Zementit)} \\quad (=\\text{Perlit})$$\n\n' +
        '**Eutektischer Punkt** (zur Abgrenzung): $4{,}3\\,\\%$ C bei $1147\\,°\\text{C}$ — Erstarrung aus der Schmelze (Ledeburit-Bildung). NICHT mit eutektoid verwechseln!\n\n' +
        '**Härtbarkeitsfenster:** $\\approx 0{,}3$–$0{,}8\\,\\%$ C nötig — darunter zu wenig zwangsgelöster Kohlenstoff für Martensit-Härtungseffekt, darüber zu spröde / Härterissgefahr.\n\n' +
        '**Wärmebehandlungen:**\n\n' +
        '| Verfahren | Temperatur | Abkühlung | Ziel / Ergebnis |\n' +
        '|---|---|---|---|\n' +
        '| **Normalglühen** | $\\approx 30\\,°\\text{C}$ über $A_3$ | an Luft | feinkörniges Ferrit-Perlit, gleichmäßige Eigenschaften |\n' +
        '| **Weichglühen** | $\\approx 700\\,°\\text{C}$ | sehr langsam im Ofen | minimale Härte, gute Zerspanbarkeit |\n' +
        '| **Härten** | $\\approx 50\\,°\\text{C}$ über $A_3$ | abschrecken (Wasser/Öl/Sole) | Martensit → hoch, aber spröde |\n' +
        '| **Vergüten** | Härten + Anlassen bei $450$–$650\\,°\\text{C}$ | an Luft | **angelassener Martensit**: Festigkeit + Zähigkeit |\n\n' +
        '**Faustregel Vergüten:**\n' +
        '- Anlassen bei $180$–$250\\,°\\text{C}$: Werkzeugstähle (höchste Härte, wenig Zähigkeit)\n' +
        '- Anlassen bei $450$–$650\\,°\\text{C}$: klassisches Vergüten von Baustählen (z.B. 42CrMo4, C45)\n\n' +
        '**Kennwerte nach Vergütung (Beispiel 42CrMo4):**\n' +
        '- $R_m \\approx 900$–$1100\\,\\text{MPa}$, $R_e \\approx 800\\,\\text{MPa}$, $A \\approx 12$–$14\\,\\%$, HV $\\approx 280$–$320$, $KV \\approx 50\\,\\text{J}$\n\n' +
        '**Abkühlraten (Größenordnung $800 \\to 500\\,°\\text{C}$):** Sole $\\approx 300\\,\\text{K/s}$ · Wasser $\\approx 200\\,\\text{K/s}$ · Öl $\\approx 50\\,\\text{K/s}$ · Luft $\\approx 1\\,\\text{K/s}$ · Ofen $\\approx 0{,}01\\,\\text{K/s}$.\n\n' +
        '**Merkregel Perlit vs. Martensit:** Perlit = Lamellen (langsam → Diffusion), Martensit = Nadeln (schnell → diffusionslos). Bainit = nicht-lamellares Zwischengefüge bei isothermischer Umwandlung im Bereich $\\approx 300$–$500\\,°\\text{C}$.',
      exercises: [
        {
          type: 'multiple-choice',
          question: 'Welches Gefüge entsteht beim **schnellen Abschrecken** von Austenit auf Raumtemperatur (genug Kohlenstoff vorausgesetzt)?',
          options: ['Martensit', 'Perlit', 'Ferrit', 'Zementit'],
          correctIndex: 0,
          explanation: `**Ansatz:** Die Abkühlgeschwindigkeit entscheidet über das Gefüge: langsam → Diffusion → Ferrit/Perlit; schnell → diffusionslose Umklapp-Umwandlung → Martensit.

**Rechnung:** Beim Abschrecken bleibt der Kohlenstoff zwangsgelöst in einem verzerrten Eisengitter sitzen — das ist Martensit.

**Probe:** Gehärtete Werkzeuge (Bohrer, Feilen) sind vor dem Anlassen reiner Martensit — sehr hart, aber spröde.

**Typischer Fehler:** Perlit mit Martensit verwechseln. Perlit entsteht nur bei **langsamer** Abkühlung.`,
          hints: [
            'Schnelle Abkühlung = keine Zeit für Diffusion.',
            'Ohne Diffusion kein Perlit und kein Ferrit möglich.',
            'Verzerrtes, nadelförmiges Gefüge: Martensit.',
          ],
          wrongAnswerExplanations: {
            1: 'Perlit (lamellares Ferrit/Zementit-Gemisch) entsteht bei **langsamer** Abkühlung aus Austenit, wenn der Kohlenstoff durch Diffusion Zementit-Lamellen bilden kann. Beim Abschrecken bleibt die Zeit dafür nicht.',
            2: 'Ferrit ist die weiche krz-Phase des Eisens und entsteht bei sehr langsamer Abkühlung aus Austenit. Beim schnellen Abschrecken wird die Ferrit-Bildung unterdrückt — stattdessen klappt das Gitter zu Martensit um.',
            3: 'Zementit (Fe$_3$C) ist eine harte Carbidphase und entsteht als Begleitphase z.B. in Perlit oder in übereutektoiden Stählen — nicht als alleiniges Gefüge beim Abschrecken.',
          },
        },
        {
          type: 'number-input',
          question: 'Ein Vergütungsstahl mit ca. $0{,}45\\%$ C wird gehärtet und anschließend vergütet. Welche **Anlasstemperatur** (in $°\\text{C}$) ist typisch für ein klassisches Vergüten mit guter Zähigkeit und hoher Festigkeit? Gib einen sinnvollen Mittelwert an.',
          correctValue: 600,
          tolerance: 50,
          unit: '°C',
          explanation: `**Ansatz:** Klassisches Vergüten = Härten + Anlassen im Bereich $450$–$650\\,°\\text{C}$.

**Rechnung:** Ein typischer Mittelwert für Baustähle wie C45 oder 42CrMo4 ist ca. $600\\,°\\text{C}$ (Toleranzbereich $550$–$650\\,°\\text{C}$).

**Probe:** Nach Vergütung erreicht 42CrMo4 $R_m \\approx 900$–$1100\\,\\text{MPa}$ bei $A \\approx 12$–$14\\%$ — genau das Ziel: hohe Festigkeit und ausreichende Zähigkeit.

**Typischer Fehler:** Anlasstemperatur für Werkzeugstähle ($180$–$250\\,°\\text{C}$) mit Vergütungstemperatur verwechseln. Werkzeugstähle bleiben dort hart und spröde — das ist nicht „Vergüten" im klassischen Sinn.`,
          hints: [
            'Vergüten = Härten, dann Anlassen.',
            'Typischer Bereich für Anlassen beim klassischen Vergüten: $450$–$650\\,°\\text{C}$.',
            'Mitte des Bereichs wählen.',
          ],
        },
      ],
      masteryQuestion: 'Drei Stahlproben gleicher Zusammensetzung wurden unterschiedlich behandelt: (A) langsam im Ofen abgekühlt → Perlit, (B) abgeschreckt → Martensit, (C) isothermisch umgewandelt → Bainit. Welche Reihenfolge der Härte stimmt?',
      masteryOptions: [
        'Martensit > Bainit > Perlit',
        'Perlit > Martensit > Bainit',
        'Bainit > Martensit > Perlit',
        'Alle drei Gefüge haben die gleiche Härte, weil der C-Gehalt gleich ist',
      ],
      correctIndex: 0,
      masteryExplanation:
        '**Ansatz:** Die Härte hängt vom Gefüge und seiner Feinheit ab, nicht nur vom Kohlenstoffgehalt.\n\n' +
        '**Rechnung:** Martensit hat das stärkst verzerrte Gitter → höchste Härte (oft $> 60\\,\\text{HRC}$). Bainit liegt dazwischen (feines nicht-lamellares Gefüge, $\\approx 40$–$55\\,\\text{HRC}$). Perlit ist am weichsten ($\\approx 20$–$30\\,\\text{HRC}$) wegen der groben Lamellen.\n\n' +
        '**Probe:** Technische Reihenfolge: Perlit (weich, zäh) < Bainit (mittel, sehr zäh) < Martensit (sehr hart, spröde). Bainit wird deshalb gern eingesetzt, wenn man Härte **und** Zähigkeit will.\n\n' +
        '**Typischer Fehler:** Glauben, gleiche Zusammensetzung ergäbe gleiche Härte — das Gefüge ist entscheidend, nicht die Chemie allein.',
      masteryHints: [
        'Gleicher Kohlenstoff, unterschiedliche Gefüge → Härte kann sehr verschieden sein.',
        'Martensit ist das härteste typische Gefüge — verzerrtes Gitter.',
        'Perlit ist grob-lamellar → relativ weich.',
      ],
      masteryWrongAnswerExplanations: {
        "1": 'Perlit ist das weichste der drei Gefüge, nicht das härteste. Die lamellare Ferrit-Zementit-Struktur ist grob und erlaubt Versetzungsbewegung. Richtige Reihenfolge: Martensit > Bainit > Perlit.',
        "2": 'Bainit ist härter als Perlit, aber nicht härter als Martensit. Martensit ist die härteste der drei Phasen — durch die diffusionslose Gitterumklapp-Umwandlung wird der Kohlenstoff zwangsgelöst und verzerrt das Gitter maximal.',
        "3": 'Gleicher C-Gehalt bedeutet **nicht** gleiche Härte. Gerade das ist der Trick der Wärmebehandlung: Durch unterschiedliche Abkühlstrategien lässt sich aus demselben Stahl Perlit (weich), Bainit (mittel) oder Martensit (hart) erzeugen.',
      },
      prerequisites: ['werk-2-2'],
      nextLessonId: 'werk-pruefung-1',
      blueprint: {
        prerequisites: [
          { lessonId: 'werk-1-1', concepts: ['re-rm', 'sicherheit'] },
        ],
        concepts: [
          { id: 'fe-c-phasen', title: 'Phasen: Ferrit (α, krz) weich/zäh; Austenit (γ, kfz); Perlit lamellar; Martensit hart',     dependsOn: [] },
          { id: 'eutektoid',   title: 'Eutektoider Punkt: $0{,}83\\%$ C bei $723°$C — Austenit → Perlit',                          dependsOn: ['fe-c-phasen'] },
          { id: 'haertbarkeit', title: 'Härtbarkeit: $0{,}3$–$0{,}8\\%$ C nötig (zu wenig = kein Martensit)',                       dependsOn: ['fe-c-phasen'] },
          { id: 'waermebehandl', title: 'Glühen, Härten (abschrecken), Vergüten (Härten + Anlassen)',                              dependsOn: ['fe-c-phasen'] },
          { id: 'verguten',    title: 'Vergüten: hohe Festigkeit + Zähigkeit (z.B. 42CrMo4)',                                       dependsOn: ['waermebehandl'] },
          { id: 'abkuehlrate', title: 'Langsam → Diffusion → Perlit; schnell → diffusionslos → Martensit',                         dependsOn: ['fe-c-phasen'] },
        ],
        subGoalConcepts: {
          0: ['fe-c-phasen'],
          1: ['eutektoid'],
          2: ['haertbarkeit'],
          3: ['waermebehandl'],
          4: ['verguten'],
          5: ['abkuehlrate'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fe-c-phasen'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fe-c-phasen'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['fe-c-phasen'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fe-c-phasen'],          qty: 1 },
          { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['fe-c-phasen'],          qty: 1 },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['eutektoid'],            qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eutektoid'],            qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['eutektoid'],            qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eutektoid'],            qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['eutektoid'],            qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['haertbarkeit'],         qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['haertbarkeit'],         qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['haertbarkeit'],         qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['haertbarkeit'],         qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['haertbarkeit'],         qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['waermebehandl'],        qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['waermebehandl'],        qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['waermebehandl'],        qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['waermebehandl'],        qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['waermebehandl'],        qty: 1 },
          { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['verguten'],             qty: 1 },
          { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['verguten'],             qty: 1 },
          { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['verguten'],             qty: 1 },
          { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['verguten'],             qty: 1 },
          { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['verguten'],             qty: 1 },
          { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['abkuehlrate'],          qty: 1 },
          { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['abkuehlrate'],          qty: 1 },
          { subGoal: 5, stage: 'apply-independent', type: 'multiple-choice', uses: ['abkuehlrate'],          qty: 1 },
          { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['abkuehlrate'],          qty: 1 },
          { subGoal: 5, stage: 'transfer',          type: 'multiple-choice', uses: ['abkuehlrate'],          qty: 1 },
        ],
      },
    }),
  ],
})

const unit3 = makeUnit({
  id: 'werk-unit-3',
  title: 'Prüfung',
  order: 3,
  lessons: [
    makeLesson({
      id: 'werk-pruefung-1',
      title: 'Prüfung: Werkstoffwahl & Kennwerte',
      estimatedMinutes: 25,
      isExam: true,
      learningGoals: [
        'Aus Anforderungen (Last, Temperatur, Umgebung) Werkstoffgruppe wählen',
        'Kennwerte aus Zugversuch korrekt interpretieren',
        'Zulässige Spannung mit Sicherheitszahl berechnen',
      ],
      subGoals: [
        { label: 'Zulässige Spannung: $\\sigma_\\text{zul} = R_m/S$ oder $R_e/S$', examRelevance: 'hoch' },
        { label: 'Typische S-Werte: statisch $S = 1{,}5$, schwingend $S = 2$–$3$', examRelevance: 'hoch' },
        { label: 'Kennwertwahl: zähe Stähle → $R_e$; spröde Werkstoffe → $R_m$', examRelevance: 'hoch' },
        { label: 'Einheit MPa = N/mm² = $10^6$ Pa', examRelevance: 'hoch' },
        { label: 'Werkstoffgruppen: Stahl (hohe Festigkeit), Alu (leicht), Kunststoff (korrosionsfrei), Keramik (hart)', examRelevance: 'mittel' },
      ],
      createdAt: '2026-04-14',
      intuitionTitle: 'Prüfungs-Strategie',
      intuitionContent:
        '**Gegeben/Gesucht:** Last, Geometrie, Umweltbedingungen, zulässige Sicherheit.\n\n' +
        '**Vorgehen:**\n' +
        '1. Beanspruchung (Zug/Druck/Torsion/dynamisch) identifizieren\n' +
        '2. Werkstoffgruppe eingrenzen (Stahl, Alu, Kunststoff, Keramik, Verbund)\n' +
        '3. Kennwert wählen ($R_e$, $R_m$, Dauerfestigkeit, Bruchdehnung)\n' +
        '4. $\\sigma_\\text{zul} = R_m/S$ oder $R_e/S$ berechnen\n\n' +
        '**Kontrolle:** MPa nicht mit N/mm² verwechseln (sind gleich!), Temperatureinfluss beachten.',
      formulaTitle: 'Kennwerte & Sicherheitszahl',
      formulaContent:
        '- Spannung: $\\sigma = F/A$ (MPa)\n' +
        '- Hooke: $\\sigma = E\\cdot\\varepsilon$\n' +
        '- Zulässige Spannung: $\\sigma_\\text{zul} = R_m/S$ oder $R_e/S$\n\n' +
        'Typische S-Werte: statisch $S = 1{,}5$, Schwingbelastung $S = 2$–$3$.',
      masteryQuestion:
        '[PRÜFUNG] Stahl: $R_m = 400$ MPa, $S = 2$. Wie groß ist $\\sigma_\\text{zul}$ in MPa?',
      masteryOptions: ['$200$', '$800$', '$400$', '$100$'],
      correctIndex: 0,
      masteryExplanation: '$\\sigma_\\text{zul} = R_m/S = 400/2 = 200$ MPa.',
      masteryHints: [
        'Sicherheitszahl $S$ steht im Nenner: $\\sigma_\\text{zul} = R_m / S$.',
        '$R_m = 400$ MPa, $S = 2$ → $400/2$.',
        'Ergebnis: 200 MPa — nicht 800 (das wäre Produkt, nicht Quotient).',
      ],
      masteryWrongAnswerExplanations: {
        "1": '$800\\,\\text{MPa}$ entsteht durch $R_m \\cdot S = 400 \\cdot 2$ — das ist das Produkt statt des Quotienten. Die Sicherheitszahl $S$ soll die zulässige Spannung *verkleinern*, daher steht sie im Nenner: $\\sigma_\\text{zul} = R_m / S$.',
        "2": '$400\\,\\text{MPa}$ ist $R_m$ selbst, ohne Sicherheitsabzug. Im Bauteil darf man aber niemals bis zur Zugfestigkeit belasten — dafür ist $S$ da. Die Sicherheitszahl wurde hier ignoriert.',
        "3": '$100\\,\\text{MPa}$ entspricht $R_m / 4$ (also $S = 4$) — der angegebene Sicherheitsfaktor ist aber $S = 2$. Wahrscheinlich mit anderem typischen $S$-Wert verwechselt. Korrekt: $400 / 2 = 200\\,\\text{MPa}$.',
      },
      prerequisites: ['werk-1-1', 'werk-2-2', 'werk-2-3'],
      nextLessonId: null,
      blueprint: {
        prerequisites: [
          { lessonId: 'werk-1-1', concepts: ['re-rm', 'sicherheit'] },
          { lessonId: 'werk-1-2', concepts: ['metalle', 'keramik', 'kunststoffe'] },
        ],
        concepts: [
          { id: 'sigma-zul',     title: 'Zulässige Spannung $\\sigma_{\\text{zul}}=R_m/S$ oder $R_e/S$',                          dependsOn: [] },
          { id: 'typ-s-werte',   title: 'Typische $S$: statisch $1{,}5$, schwingend $2$–$3$',                                      dependsOn: ['sigma-zul'] },
          { id: 'kennwert-wahl', title: 'Zähe Stähle → $R_e$; spröde Werkstoffe → $R_m$',                                          dependsOn: ['sigma-zul'] },
          { id: 'einheit-mpa',   title: 'MPa = N/mm² = $10^6$ Pa',                                                                  dependsOn: [] },
          { id: 'gruppen-wahl',  title: 'Werkstoffgruppen: Stahl/Alu/Kunststoff/Keramik nach Eigenschaftsprofil wählen',           dependsOn: [] },
        ],
        subGoalConcepts: {
          0: ['sigma-zul'],
          1: ['typ-s-werte'],
          2: ['kennwert-wahl'],
          3: ['einheit-mpa'],
          4: ['gruppen-wahl'],
        },
        taskPlan: [
          { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['sigma-zul'],          qty: 1 },
          { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sigma-zul'],          qty: 1 },
          { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['sigma-zul'],          qty: 1 },
          { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sigma-zul'],          qty: 1 },
          { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['sigma-zul'],          qty: 1, note: '[PRÜFUNG]' },
          { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['typ-s-werte'],        qty: 1 },
          { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['typ-s-werte'],        qty: 1 },
          { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['typ-s-werte'],        qty: 1 },
          { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['typ-s-werte'],        qty: 1 },
          { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['typ-s-werte'],        qty: 1 },
          { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['kennwert-wahl'],      qty: 1 },
          { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kennwert-wahl'],      qty: 1 },
          { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['kennwert-wahl'],      qty: 1 },
          { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kennwert-wahl'],      qty: 1 },
          { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['kennwert-wahl'],      qty: 1 },
          { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['einheit-mpa'],        qty: 1 },
          { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheit-mpa'],        qty: 1 },
          { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['einheit-mpa'],        qty: 1 },
          { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheit-mpa'],        qty: 1 },
          { subGoal: 3, stage: 'transfer',          type: 'matching',        uses: ['einheit-mpa'],        qty: 1 },
          { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['gruppen-wahl'],       qty: 1 },
          { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gruppen-wahl'],       qty: 1 },
          { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['gruppen-wahl'],       qty: 1 },
          { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gruppen-wahl'],       qty: 1 },
          { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['gruppen-wahl'],       qty: 1 },
        ],
      },
    }),
  ],
})

export const werkstoffkundeTopic = {
  id: 'werkstoffkunde',
  title: 'Werkstoffkunde',
  description: 'Zugversuch, Härteprüfung, Kerbschlag, Werkstoffgruppen — Grundlage 1./2. Semester',
  subject: 'engineering',
  icon: '⚙︎',
  color: 'slate',
  estimatedHours: 4,
  difficulty: 2,
  level: 'grundlagen',
  phase: 'semester-1',
  examRelevance: 'pflicht',
  topicGoals: [
    'Spannungs-Dehnungs-Diagramm aus dem Zugversuch lesen und $R_e$, $R_m$, $E$, Bruchdehnung $A$ sauber benennen',
    'Elastischen, plastischen und Einschnürbereich unterscheiden — inkl. Unterschied Streckgrenze $R_e$ vs. 0,2-%-Dehngrenze $R_{p0,2}$',
    'Härteprüfung (Brinell, Vickers, Rockwell) nach Indenter, Einheit und Anwendungsfeld auseinanderhalten',
    'Kerbschlagzähigkeit und Übergangstemperatur von zäh auf spröde in Tieftemperatur-Kurven deuten',
    'Werkstoffgruppen (Eisen-/Nichteisenmetalle, Kunststoffe, Keramik, Verbunde) nach $E$, $\\rho$, Temperatur- und Korrosionsverhalten vergleichen',
    'Spezifische Kennwerte $E/\\rho$ und $R_m/\\rho$ für Leichtbau-Auswahlentscheidungen interpretieren',
  ],
  units: [unit1, unit2, unit3],
  prerequisites: ['algebra'],
}
