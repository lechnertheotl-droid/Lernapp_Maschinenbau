// ── technische_mechanik — Topic-Definition (kompakter Scaffold) ─────────────────

export const technischeMechanikTopicDef = 
{
  topic: {
    id: 'technische-mechanik',
    title: 'Technische Mechanik',
    description: 'Statik, Dynamik und Freikörperbilder für Maschinenbau-Aufgaben.',
    subject: 'engineering',
    icon: 'MEC',
    color: 'blue',
    estimatedHours: 8,
    difficulty: 3,
    level: 'grundlagen',
    prerequisites: ['vektoren', 'trigonometry'],
    phase: 'semester-1',
    examRelevance: 'pflicht',
    topicGoals: [
      'SI-Einheiten und Präfixe sicher umrechnen und dimensional prüfen',
      'Freikörperbilder mit allen äußeren Kräften und Lagerreaktionen zeichnen',
      'Gleichgewichtsbedingungen $\\Sigma F=0$ und $\\Sigma M=0$ in 2D konsequent anwenden',
      'Kraftzerlegung, Reibung und Schwerpunkt bei ebenen Systemen berechnen',
      'Newtonsche Grundgleichung für einfache dynamische Systeme einsetzen',
    ],
  },
  units: [
    {
      id: 'mech-unit-0',
      title: 'Einheiten & Dimensionsanalyse (Einstieg)',
      description: 'SI-Einheiten, Präfixe, abgeleitete Einheiten und Dimensionscheck.',
      lessons: [
        {
          id: 'mech-0-1',
          title: 'SI-Basiseinheiten & Präfixe',
          learningGoals: [
            'Die sieben SI-Basiseinheiten kennen',
            'Dezimale Vorsätze (nano, milli, kilo, mega, giga) anwenden',
            'Einheiten in wissenschaftlicher Notation schreiben',
          ],
          subGoals: [
            { label: 'SI-Präfixe giga, mega, kilo, milli, mikro, nano zuordnen', examRelevance: 'hoch' },
            { label: 'Kilogramm als einzige SI-Basiseinheit mit Präfix', examRelevance: 'mittel' },
            { label: 'Wissenschaftliche Notation $a \\cdot 10^n$ sicher schreiben', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'si-basis-7',     title: '7 SI-Basiseinheiten: m, kg, s, A, K, mol, cd',                                       dependsOn: [] },
              { id: 'praefixe-1000', title: 'Präfixe in 1000er-Schritten: giga ($10^9$), mega ($10^6$), kilo ($10^3$), milli, mikro, nano', dependsOn: [] },
              { id: 'kg-anomalie',   title: 'kg ist die einzige Basiseinheit mit eingebautem Präfix',                              dependsOn: ['si-basis-7'] },
              { id: 'sci-notation',  title: 'Wissenschaftliche Notation $a\\cdot 10^n$',                                            dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['si-basis-7', 'praefixe-1000'],
              1: ['kg-anomalie'],
              2: ['sci-notation'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['praefixe-1000'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['praefixe-1000'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['praefixe-1000'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['praefixe-1000'],          qty: 1, note: 'M (mega) mit G (giga) verwechselt' },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['praefixe-1000'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kg-anomalie'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kg-anomalie', 'si-basis-7'], qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['kg-anomalie'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kg-anomalie'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['si-basis-7'],             qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['sci-notation'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sci-notation'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['sci-notation'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sci-notation'],           qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['sci-notation', 'praefixe-1000'], qty: 1 },
            ],
          },
          content: String.raw`**Die sieben SI-Basiseinheiten** sind das Fundament aller physikalischen Messungen:

| Größe | Einheit | Symbol |
|---|---|---|
| Länge | Meter | m |
| Masse | Kilogramm | kg |
| Zeit | Sekunde | s |
| elektrische Stromstärke | Ampere | A |
| thermodynamische Temperatur | Kelvin | K |
| Stoffmenge | Mol | mol |
| Lichtstärke | Candela | cd |

Alle anderen Einheiten lassen sich daraus ableiten.

**Dezimale Vorsätze (Präfixe):**

| Präfix | Symbol | Faktor |
|---|---|---|
| giga- | G | $10^{9}$ |
| mega- | M | $10^{6}$ |
| kilo- | k | $10^{3}$ |
| (keiner) | — | $10^{0}$ |
| milli- | m | $10^{-3}$ |
| mikro- | µ | $10^{-6}$ |
| nano- | n | $10^{-9}$ |

**Beispiel:** $1\,\text{km} = 10^{3}\,\text{m} = 1000\,\text{m}$. $1\,\text{GPa} = 10^{9}\,\text{Pa}$. $2{,}5\,\text{mm} = 2{,}5 \cdot 10^{-3}\,\text{m} = 0{,}0025\,\text{m}$.

**Merkregel:** Ein Schritt im Präfix-Kalender bedeutet Faktor $1000$ (bei den gängigen Ingenieur-Präfixen).`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Wie viel sind $2{,}5\,\text{GPa}$ in Pa?',
              options: ['$2{,}5 \\cdot 10^{9}\\,\\text{Pa}$', '$2{,}5 \\cdot 10^{6}\\,\\text{Pa}$', '$2{,}5 \\cdot 10^{3}\\,\\text{Pa}$', '$25\\,\\text{Pa}$'],
              correctIndex: 0,
              explanation: `**Ansatz:** Präfix „G" = giga = $10^{9}$.

**Rechnung:** $2{,}5\\,\\text{GPa} = 2{,}5 \\cdot 10^{9}\\,\\text{Pa}$.

**Probe:** $2{,}5\\,\\text{GPa} = 2500\\,\\text{MPa} = 2\\,500\\,000\\,\\text{kPa} = 2\\,500\\,000\\,000\\,\\text{Pa}$.

**Typischer Fehler:** „M" (mega) mit „G" (giga) verwechseln — Faktor $1000$ Unterschied.`,
              hints: ['Präfix G = giga = $10^{9}$.', 'Die Zahl bleibt, der Faktor wird angefügt.'],
              wrongAnswerExplanations: {
                1: 'Das wäre $2{,}5\\,\\text{MPa}$ (mega). Der Präfix G bedeutet giga = $10^{9}$, nicht mega = $10^{6}$.',
                2: 'Das wäre $2{,}5\\,\\text{kPa}$ (kilo). Zu weit unterschätzt — G ist $10^{9}$.',
                3: 'Hier wurde das Präfix komplett ignoriert.',
              },
            },
            {
              type: 'number-input',
              question: 'Wie viele Millimeter sind $2{,}5\\,\\text{km}$? Gib das Ergebnis in $\\text{mm}$ an.',
              correctValue: 2500000,
              tolerance: 1,
              unit: 'mm',
              explanation: `**Ansatz:** Über die Basiseinheit Meter umrechnen.

**Rechnung:** $2{,}5\\,\\text{km} = 2{,}5 \\cdot 10^{3}\\,\\text{m} = 2500\\,\\text{m} = 2500 \\cdot 10^{3}\\,\\text{mm} = 2\\,500\\,000\\,\\text{mm}$.

**Probe:** km → mm = Faktor $10^{6}$. $2{,}5 \\cdot 10^{6} = 2{,}5 \\cdot 10^{6}$. ✓

**Typischer Fehler:** Nur einmal den Faktor $1000$ anwenden statt zweimal (km → m → mm).`,
              hints: [
                'km → m: Faktor $10^{3}$. m → mm: Faktor $10^{3}$.',
                'Insgesamt also Faktor $10^{6}$.',
              ],
            },
            {
              type: 'true-false',
              statement: 'Die Masse wird in der SI-Einheit Kilogramm gemessen, nicht in Gramm — Gramm ist eigentlich das Abgeleitete.',
              correct: true,
              explanation: `**Ansatz:** SI-Basiseinheit der Masse ist das **Kilogramm** (kg), ein historischer Sonderfall.

**Rechnung:** $1\\,\\text{g} = 10^{-3}\\,\\text{kg}$. Das Gramm ist also quasi $1\\,\\text{mkg}$ (milli-kg).

**Probe:** Keine andere SI-Basiseinheit hat einen Präfix im Namen — das Kilogramm ist die Ausnahme.

**Typischer Fehler:** Annehmen, Gramm sei die Grundeinheit. Im SI-System ist es historisch anders.`,
              hints: ['Nur eine Basiseinheit hat bereits ein Präfix im Namen.'],
            },
            {
              type: 'matching',
              question: 'Ordne jeden Präfix dem passenden Faktor zu.',
              pairs: [
                { left: 'nano (n)', right: '$10^{-9}$' },
                { left: 'milli (m)', right: '$10^{-3}$' },
                { left: 'kilo (k)', right: '$10^{3}$' },
                { left: 'mega (M)', right: '$10^{6}$' },
                { left: 'giga (G)', right: '$10^{9}$' },
              ],
              explanation: `**Ansatz:** Präfixe steigen in Faktoren von $10^{3}$.

**Rechnung:** Merke: n ($10^{-9}$) → µ ($10^{-6}$) → m ($10^{-3}$) → (keins) → k ($10^{3}$) → M ($10^{6}$) → G ($10^{9}$).

**Probe:** Prüfbeispiel: $1\\,\\text{mm} = 10^{-3}\\,\\text{m}$, $1\\,\\text{kg} = 10^{3}\\,\\text{g}$. ✓

**Typischer Fehler:** Groß-/Kleinschreibung: **m**illi (klein) vs. **M**ega (groß).`,
              hints: ['Jeder Schritt ist ein Faktor $1000$ auseinander.'],
            },
            {
              type: 'number-input',
              isMasteryCheck: true,
              question: 'Eine Schraube hat einen Durchmesser von $8\\,\\text{mm}$ und eine Länge von $25\\,\\text{mm}$. Wie groß ist das Produkt Durchmesser × Länge in $\\text{m}^{2}$?',
              correctValue: 2e-4,
              tolerance: 1e-6,
              unit: 'm²',
              explanation: `**Ansatz:** Alle Werte in SI-Basiseinheiten umrechnen, dann multiplizieren.

**Rechnung:** $d = 8\\,\\text{mm} = 0{,}008\\,\\text{m}$, $l = 25\\,\\text{mm} = 0{,}025\\,\\text{m}$. Produkt: $0{,}008 \\cdot 0{,}025 = 0{,}0002\\,\\text{m}^{2} = 2 \\cdot 10^{-4}\\,\\text{m}^{2}$.

**Probe:** $8 \\cdot 25 = 200\\,\\text{mm}^{2}$. Umrechnung: $1\\,\\text{mm}^{2} = 10^{-6}\\,\\text{m}^{2}$, also $200 \\cdot 10^{-6} = 2 \\cdot 10^{-4}\\,\\text{m}^{2}$. ✓

**Typischer Fehler:** In mm rechnen und Ergebnis nicht umrechnen — dann käme $200\\,\\text{mm}^{2}$ heraus, was zahlenmäßig völlig anders aussieht.`,
              hints: [
                'Erst beide Werte in Meter umrechnen.',
                '$1\\,\\text{mm} = 10^{-3}\\,\\text{m}$.',
                'Dann multiplizieren.',
              ],
            },
          ],
        },
        {
          id: 'mech-0-2',
          title: 'Abgeleitete Einheiten (N, J, Pa, W)',
          learningGoals: [
            'Die wichtigsten abgeleiteten Einheiten benennen',
            'Formeln mit Einheiten korrekt rechnen',
            'SI-zusammengesetzte Einheiten sicher umrechnen',
          ],
          subGoals: [
            { label: 'Newton $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^2$ zerlegen', examRelevance: 'hoch' },
            { label: '$1\\,\\text{MPa} = 1\\,\\text{N}/\\text{mm}^2$ (Ingenieur-Konvention)', examRelevance: 'hoch' },
            { label: 'bar $\\leftrightarrow$ Pa: $1\\,\\text{bar}=10^5\\,\\text{Pa}$', examRelevance: 'mittel' },
            { label: 'Dimensionsanalyse als Kontrollschritt', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-0-1', concepts: ['si-basis-7', 'praefixe-1000'] },
            ],
            concepts: [
              { id: 'newton-zerlegung', title: '$1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^2$',                                  dependsOn: [] },
              { id: 'mpa-nmm2',         title: '$1\\,\\text{MPa}=1\\,\\text{N}/\\text{mm}^2$ — Ingenieur-Konvention',                       dependsOn: [] },
              { id: 'bar-pa',           title: 'bar↔Pa: $1\\,\\text{bar}=10^5\\,\\text{Pa}$',                                                 dependsOn: [] },
              { id: 'dim-check',        title: 'Dimensionsanalyse als Kontrollschritt — links/rechts dieselbe Einheit',                       dependsOn: ['newton-zerlegung'] },
            ],
            subGoalConcepts: {
              0: ['newton-zerlegung'],
              1: ['mpa-nmm2'],
              2: ['bar-pa'],
              3: ['dim-check'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['newton-zerlegung'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['newton-zerlegung'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['newton-zerlegung'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['newton-zerlegung'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['newton-zerlegung'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['mpa-nmm2'],                  qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['mpa-nmm2'],                  qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['mpa-nmm2'],                  qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['mpa-nmm2'],                  qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['mpa-nmm2'],                  qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['bar-pa'],                    qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bar-pa'],                    qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['bar-pa'],                    qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bar-pa'],                    qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['bar-pa'],                    qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['dim-check'],                 qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dim-check'],                 qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['dim-check'],                 qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dim-check'],                 qty: 1, note: 'Inkonsistente Einheiten übersehen' },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['dim-check'],                 qty: 1 },
            ],
          },
          content: String.raw`**Abgeleitete Einheiten** entstehen aus den Basiseinheiten durch physikalische Formeln:

| Größe | Einheit | In Basis-Einheiten |
|---|---|---|
| Kraft | Newton (N) | $\text{kg} \cdot \text{m} / \text{s}^{2}$ |
| Energie, Arbeit | Joule (J) | $\text{N} \cdot \text{m} = \text{kg} \cdot \text{m}^{2} / \text{s}^{2}$ |
| Leistung | Watt (W) | $\text{J}/\text{s} = \text{kg} \cdot \text{m}^{2} / \text{s}^{3}$ |
| Druck, Spannung | Pascal (Pa) | $\text{N}/\text{m}^{2} = \text{kg}/(\text{m} \cdot \text{s}^{2})$ |
| Frequenz | Hertz (Hz) | $1/\text{s}$ |

**Wichtige Umrechnungen für Maschinenbau:**
- $1\,\text{MPa} = 1\,\text{N}/\text{mm}^{2}$ (nützlich für Spannungen)
- $1\,\text{kN} \cdot \text{m} = 1\,\text{kJ}$
- $1\,\text{kW} \cdot \text{h} = 3{,}6\,\text{MJ}$ (Kilowattstunde)

**Typische Fallen:**
- **MPa vs. N/mm²:** Beides identisch — Ingenieurstradition benutzt N/mm² häufig.
- **mbar vs. Pa:** $1\,\text{bar} = 10^{5}\,\text{Pa}$, also $1\,\text{mbar} = 100\,\text{Pa}$.`,
          exercises: [
            {
              type: 'number-input',
              question: 'Ein Körper mit Masse $m = 10\\,\\text{kg}$ erfährt die Beschleunigung $a = 2\\,\\text{m/s}^{2}$. Wie groß ist die Kraft $F = m \\cdot a$ in $\\text{N}$?',
              correctValue: 20,
              tolerance: 0.01,
              unit: 'N',
              explanation: `**Ansatz:** Newtonsches Grundgesetz $F = m \\cdot a$.

**Rechnung:** $F = 10 \\cdot 2 = 20\\,\\text{N}$.

**Probe:** Einheit prüfen: $\\text{kg} \\cdot \\text{m/s}^{2} = \\text{N}$. ✓

**Typischer Fehler:** Masse mit Gewichtskraft verwechseln. Masse ist ein Skalar in kg; die Gewichtskraft wäre $m \\cdot g \\approx 10 \\cdot 9{,}81 \\approx 98\\,\\text{N}$.`,
              hints: ['Formel: $F = m \\cdot a$.', 'Einheiten: $\\text{kg} \\cdot \\text{m/s}^{2} = \\text{N}$.'],
            },
            {
              type: 'multiple-choice',
              question: 'Welche Umrechnung ist richtig?',
              options: ['$1\\,\\text{MPa} = 1\\,\\text{N/mm}^{2}$', '$1\\,\\text{MPa} = 1\\,\\text{kN/m}^{2}$', '$1\\,\\text{MPa} = 1000\\,\\text{Pa}$', '$1\\,\\text{MPa} = 1\\,\\text{N/m}^{2}$'],
              correctIndex: 0,
              explanation: `**Ansatz:** $1\\,\\text{MPa} = 10^{6}\\,\\text{Pa} = 10^{6}\\,\\text{N/m}^{2}$. In N/mm² umrechnen: $1\\,\\text{m}^{2} = 10^{6}\\,\\text{mm}^{2}$.

**Rechnung:** $10^{6}\\,\\text{N/m}^{2} = 10^{6}\\,\\text{N}/(10^{6}\\,\\text{mm}^{2}) = 1\\,\\text{N/mm}^{2}$.

**Probe:** Praktisches Beispiel: Stahl S235 hat $R_{e} \\approx 235\\,\\text{MPa} = 235\\,\\text{N/mm}^{2}$. ✓

**Typischer Fehler:** Präfix-Faktoren bei Flächen nicht quadrieren — dadurch Faktor $1000$ statt $10^{6}$.`,
              hints: [
                '$1\\,\\text{MPa} = 10^{6}\\,\\text{Pa}$.',
                '$1\\,\\text{m}^{2} = (10^{3}\\,\\text{mm})^{2} = 10^{6}\\,\\text{mm}^{2}$ — Fläche ist quadratisch!',
              ],
              wrongAnswerExplanations: {
                1: 'Falscher Faktor: $1\\,\\text{MPa} = 1000\\,\\text{kN/m}^{2}$ ist richtig, nicht $1\\,\\text{kN/m}^{2}$.',
                2: 'MPa = mega-Pascal = $10^{6}$ Pa, nicht $10^{3}$.',
                3: 'Das wäre $1\\,\\text{Pa}$ ohne Präfix — um Faktor $10^{6}$ daneben.',
              },
            },
            {
              type: 'true-false',
              statement: '$1\\,\\text{J}$ ist dasselbe wie $1\\,\\text{N} \\cdot \\text{m}$.',
              correct: true,
              explanation: `**Ansatz:** Energie = Kraft × Weg. $W = F \\cdot s$.

**Rechnung:** $1\\,\\text{J} = 1\\,\\text{N} \\cdot 1\\,\\text{m}$.

**Probe:** In Basiseinheiten: $\\text{J} = \\text{kg} \\cdot \\text{m}^{2}/\\text{s}^{2}$ und $\\text{N}\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}/\\text{s}^{2} \\cdot \\text{m}$. ✓

**Typischer Fehler:** $1\\,\\text{J}$ mit $1\\,\\text{W}$ (Leistung) verwechseln — Energie vs. Leistung.`,
              hints: ['Energie = Kraft mal Weg.'],
            },
            {
              type: 'matching',
              question: 'Ordne jede abgeleitete Einheit der passenden physikalischen Größe zu.',
              pairs: [
                { left: 'N', right: 'Kraft' },
                { left: 'J', right: 'Energie / Arbeit' },
                { left: 'W', right: 'Leistung' },
                { left: 'Pa', right: 'Druck / Spannung' },
                { left: 'Hz', right: 'Frequenz' },
              ],
              explanation: `**Ansatz:** Abgeleitete Einheiten durch ihre Definition zuordnen.

**Rechnung:** N = kg·m/s², J = N·m, W = J/s, Pa = N/m², Hz = 1/s.

**Probe:** Alle leiten sich aus Basiseinheiten ab.

**Typischer Fehler:** W (Watt, Leistung) mit J (Joule, Energie) verwechseln.`,
              hints: ['J und W unterscheiden sich um eine Zeit-Dimension (J = W·s).'],
            },
            {
              type: 'number-input',
              isMasteryCheck: true,
              question: 'Ein Motor leistet $P = 2{,}5\\,\\text{kW}$ über $t = 4\\,\\text{h}$. Wie viel Energie in $\\text{MJ}$ gibt er ab? ($1\\,\\text{h} = 3600\\,\\text{s}$)',
              correctValue: 36,
              tolerance: 0.1,
              unit: 'MJ',
              explanation: `**Ansatz:** $E = P \\cdot t$. Alles in SI-Einheiten.

**Rechnung:** $P = 2500\\,\\text{W}$; $t = 4 \\cdot 3600 = 14\\,400\\,\\text{s}$. $E = 2500 \\cdot 14\\,400 = 36\\,000\\,000\\,\\text{J} = 36\\,\\text{MJ}$.

**Probe:** Alternativ über kWh: $E = 2{,}5\\,\\text{kWh} \\cdot 4 = 10\\,\\text{kWh} = 10 \\cdot 3{,}6\\,\\text{MJ} = 36\\,\\text{MJ}$. ✓

**Typischer Fehler:** Stunden nicht in Sekunden umrechnen — Ergebnis dann in falscher Größenordnung.`,
              hints: [
                'Energie = Leistung × Zeit.',
                'Alles in SI: P in W, t in s.',
                'Am Ende in MJ umrechnen ($1\\,\\text{MJ} = 10^{6}\\,\\text{J}$).',
              ],
            },
          ],
        },
        {
          id: 'mech-0-3',
          title: 'Dimensionsanalyse — Einheitencheck',
          learningGoals: [
            'Einheiten in einer Formel prüfen',
            'Plausibilität eines Rechenergebnisses über Einheiten kontrollieren',
            'Formeln aus Dimensions-Überlegungen aufstellen',
          ],
          subGoals: [
            { label: 'Dimensionskonsistenz: links und rechts des Gleichheitszeichens müssen dieselben Einheiten stehen', examRelevance: 'hoch' },
            { label: 'Basis-SI-Einheiten (m, kg, s, A, K, mol, cd) — alle anderen Einheiten daraus aufgebaut', examRelevance: 'hoch' },
            { label: 'Einheit Pascal: $1\\,\\text{Pa} = 1\\,\\text{N/m}^2 = 1\\,\\text{kg}/(\\text{m}\\cdot\\text{s}^2)$', examRelevance: 'mittel' },
            { label: 'Umrechnungen (mm → m, MPa → Pa, kN → N) vor dem Einsetzen in Formeln — NIE im Kopf in gemischten Einheiten rechnen', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-0-1', concepts: ['si-basis-7', 'praefixe-1000'] },
              { lessonId: 'mech-0-2', concepts: ['newton-zerlegung', 'dim-check'] },
            ],
            concepts: [
              { id: 'dim-konsistenz', title: 'Links/rechts des $=$ müssen dieselben Einheiten stehen',                            dependsOn: [] },
              { id: 'basis-aufbau',   title: 'Alle Einheiten aus 7 SI-Basisgrößen aufgebaut',                                     dependsOn: [] },
              { id: 'pa-zerlegung',   title: 'Pa $=$ N/m² $=$ kg/(m·s²)',                                                          dependsOn: ['basis-aufbau'] },
              { id: 'einheit-umform', title: 'Vorab umrechnen: mm→m, MPa→Pa, kN→N — niemals gemischt rechnen',                  dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['dim-konsistenz'],
              1: ['basis-aufbau'],
              2: ['pa-zerlegung'],
              3: ['einheit-umform'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['dim-konsistenz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['dim-konsistenz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['dim-konsistenz'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['dim-konsistenz'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['dim-konsistenz'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['basis-aufbau'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['basis-aufbau'],            qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['basis-aufbau'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['basis-aufbau'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['basis-aufbau'],            qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['pa-zerlegung'],            qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['pa-zerlegung'],            qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['pa-zerlegung'],            qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['pa-zerlegung'],            qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['pa-zerlegung'],            qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['einheit-umform'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['einheit-umform'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['einheit-umform'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['einheit-umform'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['einheit-umform'],          qty: 1 },
            ],
          },
          content: String.raw`**Warum Dimensionsanalyse?** Jede gültige physikalische Formel muss dimensional konsistent sein: Links und rechts des Gleichheitszeichens müssen dieselben Einheiten stehen. Das ist das **stärkste Prüfverfahren**, um Formelfehler zu erkennen.

**Anwendung:**
1. Jede Größe mit ihrer Einheit notieren.
2. Einheiten mit den Rechenoperationen der Formel verknüpfen.
3. Prüfen, ob die Zieleinheit korrekt herauskommt.

**Beispiel 1 — Spannung:** $\sigma = F/A$ ✓
- $F$: N, $A$: m²
- $F/A$: N/m² = Pa ✓ (Spannung hat Einheit Pa)

**Beispiel 2 — Fehler finden:**
- Behauptung: „$E = \tfrac{1}{2} \cdot m \cdot v$" (kinetische Energie)
- Einheiten: kg · m/s = kg·m/s — aber Energie ist kg·m²/s². Falsch!
- Richtige Formel: $E = \tfrac{1}{2} m v^{2}$ → kg·m²/s² = J ✓

**Merkschema für schnellen Check:**
- Kraft: kg·m/s²
- Energie: kg·m²/s²
- Druck/Spannung: kg/(m·s²)
- Leistung: kg·m²/s³`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche der folgenden Formeln ist dimensional korrekt für die Spannung $\\sigma$?',
              options: [
                '$\\sigma = F/A$ mit $F$ in N, $A$ in m²',
                '$\\sigma = F \\cdot A$ mit $F$ in N, $A$ in m²',
                '$\\sigma = m \\cdot g / L$ mit $L$ in m',
                '$\\sigma = F/L$ mit $L$ in m',
              ],
              correctIndex: 0,
              explanation: `**Ansatz:** Zieleinheit $\\sigma$ in Pa = N/m².

**Rechnung:** $F/A$ liefert N/m² = Pa ✓. Die anderen liefern falsche Einheiten.

**Probe:** Option B: $\\text{N} \\cdot \\text{m}^{2}$ ist keine Druckeinheit. Option D: N/m ist eine Kraft pro Länge, keine Spannung.

**Typischer Fehler:** Fläche und Länge verwechseln — $A$ in m² vs. $L$ in m ergibt unterschiedliche Einheiten.`,
              hints: [
                'Spannung hat Einheit Pa = N/m².',
                'Welche Operation zwischen $F$ und Fläche liefert N/m²?',
                'Division: N geteilt durch m² ⇒ N/m² = Pa.',
              ],
              wrongAnswerExplanations: {
                1: '$F \\cdot A$ hat Einheit $\\text{N} \\cdot \\text{m}^{2}$ — das ist keine Druck- oder Spannungseinheit.',
                2: 'Zähler hat Einheit Kraft (N), Nenner Länge (m). N/m ist Kraft pro Länge (z. B. Streckenlast), nicht Spannung.',
                3: 'Gleiches Problem: $F/L$ hat Einheit N/m, nicht N/m² wie Spannung.',
              },
            },
            {
              type: 'true-false',
              statement: 'Die Formel $s = v \\cdot t^{2}$ für den zurückgelegten Weg bei konstanter Geschwindigkeit ist dimensional konsistent.',
              correct: false,
              explanation: `**Ansatz:** Einheiten links und rechts vergleichen.

**Rechnung:** Links: $s$ in m. Rechts: $v \\cdot t^{2} = (\\text{m/s}) \\cdot \\text{s}^{2} = \\text{m} \\cdot \\text{s}$. Das ist **nicht** m.

**Probe:** Richtige Formel: $s = v \\cdot t$ für konstante Geschwindigkeit. Bei konstanter Beschleunigung: $s = \\tfrac{1}{2} a t^{2}$.

**Typischer Fehler:** Fallbeschleunigung-Formel ($s = \\tfrac{1}{2}g t^{2}$) auf konstante Geschwindigkeit anwenden. Dimension verrät es: $g$ hat m/s², $v$ hat m/s.`,
              hints: [
                'Einheiten links und rechts notieren.',
                'Ist m/s · s² dasselbe wie m?',
                'Nein — m/s·s² = m·s, nicht m.',
              ],
            },
            {
              type: 'sorting',
              question: 'Bringe die Schritte einer Dimensionsanalyse in die richtige Reihenfolge.',
              items: [
                'Zieleinheit der linken Seite bestimmen (z. B. N für Kraft)',
                'Einheiten jeder Größe auf der rechten Seite notieren',
                'Rechte Seite mit den Rechenoperationen verknüpfen',
                'Links und rechts vergleichen — identisch?',
                'Bei Nichtübereinstimmung: Formel ist falsch oder Zahlenwerte benötigen Umrechnung',
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: `**Ansatz:** Standard-Prozess für jeden Einheitencheck.

**Rechnung:** Zielrichtung festlegen, dann schrittweise verknüpfen und vergleichen.

**Probe:** Wenn Schritt 4 nicht passt, **rechne nicht weiter**, sondern finde den Fehler.

**Typischer Fehler:** Erst rechnen, dann prüfen — und Fehler später schwer finden.`,
              hints: [
                'Immer von der Zieleinheit aus zurück denken.',
                'Rechte Seite aus bekannten Einheiten aufbauen.',
                'Vergleich erst am Ende — bei Nichtübereinstimmung: Formel falsch.',
              ],
            },
            {
              type: 'number-input',
              isMasteryCheck: true,
              question: 'Die Einheit der kinetischen Energie ist $\\text{kg} \\cdot \\text{m}^{a} / \\text{s}^{b}$. Was ist $a + b$?',
              correctValue: 4,
              tolerance: 0,
              unit: '',
              explanation: `**Ansatz:** $E_\\text{kin} = \\tfrac{1}{2} m v^{2}$ hat Einheit $\\text{kg} \\cdot (\\text{m/s})^{2} = \\text{kg} \\cdot \\text{m}^{2}/\\text{s}^{2}$.

**Rechnung:** $a = 2$, $b = 2$. Also $a + b = 4$.

**Probe:** In Joule: $1\\,\\text{J} = 1\\,\\text{kg} \\cdot \\text{m}^{2}/\\text{s}^{2}$. ✓

**Typischer Fehler:** Beim Quadrieren der Geschwindigkeit den Nenner vergessen — dann käme $\\text{kg} \\cdot \\text{m}^{2}/\\text{s}$ heraus, was Einheit $\\text{J} \\cdot \\text{s}$ wäre.`,
              hints: [
                '$E_\\text{kin} = \\tfrac{1}{2} m v^{2}$.',
                'Einheit von $v^{2}$ ist $(\\text{m/s})^{2} = \\text{m}^{2}/\\text{s}^{2}$.',
                'Also $a = 2, b = 2 \\Rightarrow a+b = 4$.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mech-unit-1',
      title: 'Statik',
      description: 'Kräfte, Momente und Gleichgewicht.',
      lessons: [
        {
          id: 'mech-1-1',
          title: 'Kräfte und Freikörperbild',
          learningGoals: ['Kräfte als Vektoren darstellen', 'Freikörperbilder systematisch aufbauen'],
          subGoals: [
            { label: 'Freikörperbild: Körper isolieren, alle äußeren Kräfte (inkl. Gewicht, Lagerreaktionen) eintragen', examRelevance: 'hoch' },
            { label: 'Kraft = Vektor: Betrag + Richtung — Pfeile in positives Koordinatensystem, Vorzeichen ergibt sich aus Rechnung', examRelevance: 'hoch' },
            { label: 'Standard-Lagersymbole: Festlager (2 Reaktionen), Loslager (1 Reaktion), Einspannung (2 Kräfte + 1 Moment)', examRelevance: 'hoch' },
            { label: 'Gleichgewicht in 2D: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M = 0$ → max. 3 Unbekannte statisch bestimmbar', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-0-2', concepts: ['newton-zerlegung'] },
            ],
            concepts: [
              { id: 'fkb',           title: 'Freikörperbild: Körper isolieren, alle äußeren Kräfte eintragen',                          dependsOn: [] },
              { id: 'kraft-vektor',  title: 'Kraft = Vektor (Betrag + Richtung)',                                                       dependsOn: [] },
              { id: 'lagersymbole',  title: 'Festlager (2 Reaktionen), Loslager (1), Einspannung (2 + 1 Moment)',                       dependsOn: [] },
              { id: 'gleichgew-2d',  title: '2D-Gleichgewicht $\\sum F_x=0,\\sum F_y=0,\\sum M=0$ → 3 Unbekannte',                      dependsOn: ['fkb', 'lagersymbole'] },
            ],
            subGoalConcepts: {
              0: ['fkb'],
              1: ['kraft-vektor'],
              2: ['lagersymbole'],
              3: ['gleichgew-2d'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fkb'],                  qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fkb'],                  qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['fkb'],                  qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fkb'],                  qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['fkb'],                  qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kraft-vektor'],         qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kraft-vektor'],         qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['kraft-vektor'],         qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kraft-vektor'],         qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['kraft-vektor'],         qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['lagersymbole'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lagersymbole'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['lagersymbole'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lagersymbole'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['lagersymbole'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['gleichgew-2d'],         qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gleichgew-2d'],         qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['gleichgew-2d'],         qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gleichgew-2d'],         qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['gleichgew-2d'],         qty: 1 },
            ],
          },
          content: String.raw`Ein **Freikörperbild** isoliert ein Bauteil und ersetzt alle Kontakte durch Kräfte und Momente.

**Vorgehen:**
1. Körper freischneiden
2. Gewicht, Lagerreaktionen und äußere Kräfte eintragen
3. Koordinatensystem festlegen
4. Gleichgewichtsbedingungen aufstellen: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$

**Übung unten:** Zeichne für einen Block, der auf dem Boden liegt, die Gewichtskraft ($F_G$ nach unten) und die Normalkraft ($F_N$ nach oben) ein.`,
          visualization: {
            title: 'Freikörperbild — zeichne die Kräfte',
            visualizationId: 'free-body-diagram',
            params: {
              body: 'block',
              target: [
                { dir: { x: 0, y: 1 },  magnitude: 1, name: 'Gewichtskraft F_G (nach unten)' },
                { dir: { x: 0, y: -1 }, magnitude: 1, name: 'Normalkraft F_N (nach oben)' },
              ],
            },
          },
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was gehört in ein Freikörperbild?',
              options: ['Nur bekannte Kräfte', 'Alle äußeren Kräfte und Lagerreaktionen', 'Nur Beschleunigungen', 'Nur Maße'],
              correctIndex: 1,
              explanation: 'Ein Freikörperbild zeigt alle äußeren Kräfte und unbekannten Reaktionsgrößen.',
              hints: ['Kontakte werden durch Reaktionskräfte ersetzt.', 'Alle äußeren Einwirkungen auf den freigeschnittenen Körper eintragen.', 'Bekannte und unbekannte Kräfte + Lagerreaktionen gehören ins Bild.'],
              wrongAnswerExplanations: {
                0: 'Unvollständig: Ein Freikörperbild muss auch die unbekannten Lagerreaktionen enthalten. Nur bekannte Kräfte einzutragen macht das Gleichgewicht $\\Sigma F = 0$ unlösbar.',
                2: 'Beschleunigungen gehören in die kinetische Betrachtung (Newton: $\\Sigma F = m \\cdot a$), nicht ins Freikörperbild. Das FKB zeigt Kräfte und Momente, keine Bewegungsgrößen.',
                3: 'Maße dienen nur der Geometrie und sind optional. Entscheidend sind Kräfte und Momente, sonst lässt sich $\\Sigma F = 0$ und $\\Sigma M = 0$ nicht auswerten.',
              },
              visualization: {
                id: 'free-body-diagram',
                params: {
                  body: 'block',
                  target: [
                    { dir: { x: 0, y: 1 }, magnitude: 1, name: 'F_G' },
                    { dir: { x: 0, y: -1 }, magnitude: 1, name: 'F_N' },
                  ],
                },
                caption: 'Block mit Gewichtskraft und Normalkraft',
                alt: 'Freikörperbild eines Blocks auf dem Boden.',
              },
            },
            {
              type: 'number-input',
              question: 'Zwei rechtwinklige Kräfte 3 N und 4 N wirken am Punkt. Betrag der Resultierenden?',
              correctValue: 5,
              tolerance: 0.01,
              unit: 'N',
              explanation: 'R = $\\sqrt{3^2 + 4^2}$ = 5 N.',
              hints: ['Resultierende zweier rechtwinkliger Kräfte: Pythagoras anwenden.', 'R = √(F_x² + F_y²)', '√(3² + 4²) = √25 = 5'],
              visualization: {
                id: 'vector-diagram',
                params: {
                  vectors: [
                    { x: 3, y: 0, color: '#0ea5e9', label: '3 N' },
                    { x: 0, y: 2, color: '#dc2626', label: '4 N' },
                    { x: 3, y: 2, color: '#16a34a', label: 'R' },
                  ],
                },
                caption: 'Zwei rechtwinklige Kräfte → Resultierende via Pythagoras',
                alt: 'Kräfteparallelogramm mit Katheten 3 und 4.',
              },
            },
            {
              type: 'true-false',
              statement: 'Im statischen Gleichgewicht muss die Summe aller Kräfte null sein.',
              correct: true,
              explanation: 'Für Translation gilt ΣF = 0; zusätzlich gilt für Rotation ΣM = 0.',
              hints: ['Statisches Gleichgewicht: Resultierende Kraft = 0.', 'ΣF = 0 für Translation, ΣM = 0 für Rotation.', 'Beide Bedingungen müssen erfüllt sein.'],
            },
          ],
        },
        {
          id: 'mech-1-2',
          title: 'Momente und Hebelarm',
          learningGoals: ['Moment als Kraft mal Hebelarm berechnen', 'Drehsinn korrekt berücksichtigen'],
          subGoals: [
            { label: 'Moment $M = F \\cdot l_\\perp$ — $l_\\perp$ ist der SENKRECHTE Abstand vom Bezugspunkt zur Wirkungslinie', examRelevance: 'hoch' },
            { label: 'Drehsinn-Konvention: gegen Uhrzeiger positiv (rechte Hand / Rechte-Hand-Regel in 3D)', examRelevance: 'hoch' },
            { label: 'Bezugspunkt frei wählbar — klug wählen: Punkt mit vielen unbekannten Kräften eliminiert diese', examRelevance: 'hoch' },
            { label: 'Kreuzprodukt-Variante: $\\vec M = \\vec r \\times \\vec F$ in 3D oder bei schiefen Kräften', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-1', concepts: ['kraft-vektor', 'gleichgew-2d'] },
            ],
            concepts: [
              { id: 'moment-formel',  title: 'Moment $M=F\\cdot l_\\perp$ — senkrechter Abstand zur Wirkungslinie',                  dependsOn: [] },
              { id: 'drehsinn',       title: 'Drehsinn: gegen Uhrzeiger positiv (Rechte-Hand-Regel)',                                  dependsOn: [] },
              { id: 'bezugspunkt',    title: 'Bezugspunkt frei wählbar — klug = unbekannte Kräfte eliminieren',                       dependsOn: ['moment-formel'] },
              { id: 'm-kreuz',        title: '3D-Variante: $\\vec M=\\vec r\\times\\vec F$',                                          dependsOn: ['moment-formel'] },
            ],
            subGoalConcepts: {
              0: ['moment-formel'],
              1: ['drehsinn'],
              2: ['bezugspunkt'],
              3: ['m-kreuz'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['moment-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['moment-formel'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['moment-formel'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['moment-formel'],          qty: 1, note: 'Schräger Abstand statt senkrechter' },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['moment-formel'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['drehsinn'],               qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['drehsinn'],               qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['drehsinn'],               qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['drehsinn'],               qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['drehsinn'],               qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['bezugspunkt'],            qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bezugspunkt'],            qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['bezugspunkt', 'moment-formel'], qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bezugspunkt'],            qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['bezugspunkt'],            qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['m-kreuz'],                qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['m-kreuz'],                qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['m-kreuz'],                qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['m-kreuz'],                qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['m-kreuz'],                qty: 1 },
            ],
          },
          content: String.raw`Das **Moment** beschreibt die Drehwirkung einer Kraft.

$$M = F \cdot l_\perp$$

Dabei ist $l_\perp$ der senkrechte Abstand zwischen Drehpunkt und Wirkungslinie der Kraft. Vorzeichen werden über den Drehsinn festgelegt.`,
          visualization: {
            title: 'Balken-Auflagerreaktionen', visualizationId: 'beam-reactions', params: {},
          },
          exercises: [
            {
              type: 'number-input',
              question: 'Eine Kraft F = 20 N greift mit senkrechtem Hebelarm l = 0,5 m an. Berechne das Moment.',
              correctValue: 10,
              tolerance: 0.01,
              unit: 'Nm',
              explanation: 'M = F·l = 20·0,5 = 10 Nm.',
              hints: ['Moment: M = F · l_perp', 'l_perp ist der senkrechte Abstand zur Kraftlinie.', 'Einheit: N · m = Nm'],
              visualization: {
                id: 'beam-reactions',
                params: {},
                caption: 'Balken mit Lagerreaktionen — Moment entsteht durch F · l⊥',
                alt: 'Balken mit Lagerreaktionen.',
              },
            },
            {
              type: 'multiple-choice',
              question: 'Der wirksame Hebelarm ist ...',
              options: ['immer die Stablänge', 'der senkrechte Abstand zur Wirkungslinie', 'die Kraft mal Weg', 'der Winkel in Grad'],
              correctIndex: 1,
              explanation: 'Nur der senkrechte Abstand zur Wirkungslinie zählt.',
              hints: ['Der Hebelarm ist senkrecht zur Wirkungslinie der Kraft.', 'Nicht die Stablänge, sondern der senkrechte Abstand zählt.', 'M = F · l_perp → nur l_perp relevant.'],
              wrongAnswerExplanations: {
                0: 'Nur bei senkrechter Kraftrichtung stimmt das. Greift die Kraft schräg an, ist der Hebelarm $l_\\perp = l \\cdot \\sin(\\alpha)$, nicht die volle Stablänge $l$.',
                2: 'Das ist die Definition der Arbeit $W = F \\cdot s$, nicht des Hebelarms. Das Moment ist $M = F \\cdot l_\\perp$, mit Einheit $\\text{Nm}$.',
                3: 'Ein Winkel ist dimensionslos bzw. in rad/Grad angegeben. Der Hebelarm hat die Einheit Meter — er ist eine Strecke, kein Winkel.',
              },
            },
            {
              type: 'true-false',
              statement: 'Wenn die Wirkungslinie durch den Drehpunkt geht, ist das Moment null.',
              correct: true,
              explanation: 'Dann ist der senkrechte Hebelarm 0.',
              hints: ['M = F · l_perp — l_perp ist der Senkrecht-Abstand.', 'Wenn Wirkungslinie durch Drehpunkt geht, ist l_perp = 0.', 'M = 0 bei l_perp = 0.'],
            },
          ],
        },
        {
          id: 'mech-1-3',
          title: 'Schnittkräfte N(x), Q(x), M(x)',
          learningGoals: [
            'Schnittkräfte und Schnittmomente am Balken berechnen',
            'Querkraft- und Biegemomentverlauf skizzieren',
            'Die gefährliche Stelle (max. Biegemoment) identifizieren',
          ],
          subGoals: [
            { label: 'Drei Schnittgrößen: Normalkraft $N(x)$, Querkraft $Q(x)$, Biegemoment $M(x)$', examRelevance: 'hoch' },
            { label: 'Zusammenhang: $Q(x) = dM/dx$, $q(x) = -dQ/dx$', examRelevance: 'hoch' },
            { label: 'Sprung in $Q$ bei Einzellast $F$, Knick in $M$ bei Einzellast', examRelevance: 'hoch' },
            { label: '$M_{\\max}$ an Stelle mit $Q = 0$ (gefährliche Stelle)', examRelevance: 'hoch' },
            { label: 'An gelenkigen Auflagern ist $M = 0$ (Randbedingung)', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-1', concepts: ['gleichgew-2d'] },
              { lessonId: 'mech-1-2', concepts: ['moment-formel'] },
            ],
            concepts: [
              { id: 'schnittgr-3',   title: 'Drei Schnittgrößen $N(x),Q(x),M(x)$',                                                  dependsOn: [] },
              { id: 'schnitt-diff',  title: 'Differentialzusammenhang: $Q(x)=dM/dx$, $q(x)=-dQ/dx$',                                 dependsOn: ['schnittgr-3'] },
              { id: 'sprung-knick',  title: 'Sprung in $Q$ bei Einzellast, Knick in $M$ bei Einzellast',                              dependsOn: ['schnittgr-3'] },
              { id: 'm-max',         title: '$M_{\\max}$ an Stelle mit $Q=0$ (gefährliche Stelle)',                                  dependsOn: ['schnitt-diff'] },
              { id: 'rb-gelenk',     title: 'Gelenkiges Auflager: $M=0$ als Randbedingung',                                          dependsOn: ['schnittgr-3'] },
            ],
            subGoalConcepts: {
              0: ['schnittgr-3'],
              1: ['schnitt-diff'],
              2: ['sprung-knick'],
              3: ['m-max'],
              4: ['rb-gelenk'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['schnittgr-3'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schnittgr-3'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['schnittgr-3'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schnittgr-3'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'matching',        uses: ['schnittgr-3'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['schnitt-diff'],         qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schnitt-diff'],         qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['schnitt-diff'],         qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schnitt-diff'],         qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['schnitt-diff'],         qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['sprung-knick'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sprung-knick'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['sprung-knick'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sprung-knick'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['sprung-knick'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['m-max'],                qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['m-max'],                qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['m-max'],                qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['m-max'],                qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['m-max'],                qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['rb-gelenk'],            qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rb-gelenk'],            qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['rb-gelenk'],            qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rb-gelenk'],            qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['rb-gelenk'],            qty: 1 },
            ],
          },
          content: String.raw`**Schnittprinzip:** Zerschneidet man einen Balken gedanklich an der Stelle $x$, müssen am Schnittufer **Schnittgrößen** angreifen, damit jede Hälfte für sich im Gleichgewicht steht.

Drei Schnittgrößen:
- **Normalkraft** $N(x)$ — in Balkenachse
- **Querkraft** $Q(x)$ — senkrecht zur Balkenachse
- **Biegemoment** $M(x)$ — Moment um die Querachse

**Einfeldträger mit Einzellast $F$ bei $x = a$ und Stützweite $L$:**

$$R_A = F \cdot \frac{L-a}{L}, \qquad R_B = F \cdot \frac{a}{L}$$

Zwischen $x = 0$ und $x = a$:
$$Q(x) = R_A, \qquad M(x) = R_A \cdot x$$

Zwischen $x = a$ und $x = L$:
$$Q(x) = R_A - F = -R_B, \qquad M(x) = R_A \cdot x - F(x-a)$$

**Kontrolle:** Sprung von $Q(x)$ am Lastangriff hat die Größe $-F$. Maximum von $M(x)$ liegt **genau unter der Last**:
$$M_\text{max} = R_A \cdot a = F \cdot \frac{a(L-a)}{L}$$

**Typischer Fehler:** Vorzeichenkonvention nicht konsequent durchhalten — am besten **Drehsinn am Schnittufer** vorher festlegen.`,
          visualization: {
            title: 'Schnittkräfte live', visualizationId: 'interactive-beam', params: {},
          },
          exercises: [
            {
              type: 'number-input',
              question: 'Balken L = 4 m, F = 600 N bei a = 1 m. Wie groß ist R_A?',
              correctValue: 450,
              tolerance: 0.5,
              unit: 'N',
              explanation: 'R_A = F·(L−a)/L = 600·3/4 = 450 N. Kontrolle: R_A + R_B = 600 N ✓.',
              hints: ['ΣM um B: R_A·L = F·(L−a)', 'R_A = F·(L−a)/L', 'R_A = 600·3/4 = 450 N'],
              visualization: {
                id: 'interactive-beam',
                params: {},
                caption: 'Einfeldträger mit Einzellast — Auflagerreaktionen ergeben sich aus ΣM = 0',
                alt: 'Einfeldträger mit Einzellast und Auflagern.',
              },
            },
            {
              type: 'number-input',
              question: 'Gleicher Balken (L = 4 m, F = 600 N bei a = 1 m): Wie groß ist M_max?',
              correctValue: 450,
              tolerance: 1,
              unit: 'Nm',
              explanation: 'M_max = R_A·a = 450·1 = 450 Nm. Liegt genau unter der Last.',
              hints: ['M_max liegt unter der Einzellast.', 'M_max = R_A · a', 'M_max = 450 · 1 = 450 Nm'],
              visualization: {
                id: 'interactive-beam',
                params: {},
                caption: 'Biegemoment M(x) erreicht sein Maximum direkt unter der Last',
                alt: 'Einfeldträger — Biegemomentenverlauf.',
              },
            },
            {
              type: 'multiple-choice',
              question: 'Wo liegt das maximale Biegemoment bei Einzellast auf Einfeldträger?',
              options: ['Unter der Last', 'Am Festlager', 'Am Loslager', 'In der Balkenmitte'],
              correctIndex: 0,
              explanation: 'Die M(x)-Linie ist dreieckförmig mit Maximum direkt unter der Einzellast.',
              hints: ['Die M-Linie ist dreieckförmig bei Einzellast.', 'Das Maximum liegt genau unter der Lastangriffsstelle.', 'Wo die Querkraft ihr Vorzeichen wechselt, ist M maximal.'],
              wrongAnswerExplanations: {
                1: 'An den gelenkigen Lagern (Fest- oder Loslager) ist $M = 0$, da keine Momente übertragen werden. Dort ist $M$ minimal, nicht maximal.',
                2: 'Am Loslager ist $M = 0$ (Randbedingung des gelenkigen Lagers). Verwechslung mit der Querkraft $Q$, die dort den Wert der Lagerreaktion hat.',
                3: 'Nur bei mittiger Last stimmt das — allgemein liegt $M_{max}$ unter der Last, da dort die Querkraft $Q(x)$ ihr Vorzeichen wechselt ($\\mathrm{d}M/\\mathrm{d}x = Q = 0$).',
              },
              visualization: {
                id: 'interactive-beam',
                params: {},
                alt: 'Einfeldträger mit Biegemomentenverlauf.',
              },
            },
            { type: 'true-false', statement: 'Der Sprung in Q(x) am Lastangriff hat den Betrag F.', correct: true, explanation: 'Q springt um −F von R_A auf −R_B. Daraus ergibt sich die typische „Treppenstufe" im Querkraftverlauf.', hints: ['Querkraft Q(x) springt an der Lastangriffsstelle.', 'Der Sprung hat den Betrag der Einzellast F.', '|ΔQ| = |F| — Vorzeichen: von +R_A auf −R_B.'] },
            { type: 'multiple-choice', question: '[PRÜFUNG] Warum interessiert uns M_max in der Festigkeitslehre besonders?', options: ['Weil dort die maximale Biegespannung auftritt', 'Weil dort N am größten ist', 'Weil dort Q am größten ist', 'Zufall'], correctIndex: 0, explanation: 'Die Biegespannung ist σ_b = M/W mit W = Widerstandsmoment. M_max liefert die größte Spannung und damit die gefährliche Stelle.', hints: ['Biegespannung: σ_b = M/W mit W = Widerstandsmoment.', 'M_max liefert die größte Biegespannung.', 'Die gefährliche Stelle ist dort, wo M am größten ist.'], wrongAnswerExplanations: { 1: 'Die Normalkraft $N$ und das Biegemoment $M$ sind unabhängige Schnittgrößen. $N_{max}$ liefert maximale Zug-/Druckspannung $\\sigma = N/A$, nicht Biegespannung.', 2: 'Die Querkraft $Q$ erzeugt Schubspannungen $\\tau = Q \\cdot S/(I \\cdot b)$, aber keine Biegespannungen. Biegung ist an $M$ gekoppelt, nicht an $Q$.', 3: 'Kein Zufall: Die Beziehung $\\sigma_b = M/W$ macht $M$ direkt proportional zur Biegespannung — daher liegt die gefährliche Stelle zwangsläufig bei $M_{max}$.' } },
          ],
        },
        {
          id: 'mech-1-4',
          title: 'Reibung',
          estimatedMinutes: 14,
          learningGoals: ['Haft- und Gleitreibung unterscheiden', 'Reibkraft mit Coulombschem Gesetz berechnen'],
          subGoals: [
            { label: 'Coulombsches Reibgesetz: $F_R = \\mu F_N$', examRelevance: 'hoch' },
            { label: 'Haftreibwert $\\mu_0$ > Gleitreibwert $\\mu$ (Losreißen braucht mehr Kraft)', examRelevance: 'hoch' },
            { label: 'Auf geneigter Ebene: $F_N = mg\\cos\\alpha$, $F_H = mg\\sin\\alpha$', examRelevance: 'hoch' },
            { label: 'Selbsthemmung: Körper gleitet nicht, solange $\\tan\\alpha \\leq \\mu_0$', examRelevance: 'hoch' },
            { label: 'Reibwinkel $\\rho = \\arctan\\mu$: Neigung, bei der Körper gerade zu gleiten beginnt', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-1', concepts: ['kraft-vektor', 'gleichgew-2d'] },
            ],
            concepts: [
              { id: 'coulomb',       title: 'Coulombsches Reibgesetz $F_R=\\mu F_N$',                                              dependsOn: [] },
              { id: 'haft-gleit',    title: 'Haftreibwert $\\mu_0>\\mu$ Gleitreibwert',                                            dependsOn: ['coulomb'] },
              { id: 'schiefe-zerleg-mech', title: 'Schiefe Ebene $F_N=mg\\cos\\alpha$, $F_H=mg\\sin\\alpha$',                       dependsOn: [] },
              { id: 'selbsthemmung', title: 'Selbsthemmung: kein Gleiten solange $\\tan\\alpha\\le\\mu_0$',                         dependsOn: ['haft-gleit', 'schiefe-zerleg-mech'] },
              { id: 'reibwinkel',    title: 'Reibwinkel $\\rho=\\arctan\\mu$ — Grenzneigung',                                       dependsOn: ['coulomb', 'selbsthemmung'] },
            ],
            subGoalConcepts: {
              0: ['coulomb'],
              1: ['haft-gleit'],
              2: ['schiefe-zerleg-mech'],
              3: ['selbsthemmung'],
              4: ['reibwinkel'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['coulomb'],                qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['coulomb'],                qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['coulomb'],                qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['coulomb'],                qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['coulomb'],                qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['haft-gleit'],             qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['haft-gleit'],             qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['haft-gleit'],             qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['haft-gleit'],             qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['haft-gleit'],             qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['schiefe-zerleg-mech'],    qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schiefe-zerleg-mech'],    qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['schiefe-zerleg-mech'],    qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schiefe-zerleg-mech'],    qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['schiefe-zerleg-mech'],    qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['selbsthemmung'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['selbsthemmung'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['selbsthemmung'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['selbsthemmung'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['selbsthemmung'],          qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['reibwinkel'],             qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['reibwinkel'],             qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['reibwinkel'],             qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['reibwinkel'],             qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['reibwinkel'],             qty: 1 },
            ],
          },
          content: String.raw`**Coulombsches Reibgesetz:**

$$F_R = \mu \cdot F_N$$

$\mu$ ist der Reibwert (dimensionslos), $F_N$ die Normalkraft. Man unterscheidet:
- **Haftreibung** (statisch): $\mu_0 > \mu$ — tritt auf, solange kein Gleiten stattfindet
- **Gleitreibung** (kinetisch): $\mu$ — tritt beim Gleiten auf

**Vorgehen bei geneigter Ebene:** Zuerst $F_N = m g \cos\alpha$ bestimmen, dann $F_{R,\text{max}} = \mu_0 F_N$ mit Hangabtriebskraft $F_H = m g \sin\alpha$ vergleichen.`,
          exercises: [
            { type: 'number-input', question: 'Ein Block (m = 10 kg) liegt auf einer horizontalen Fläche (μ = 0,3, g = 9,81 m/s²). Reibkraft beim Gleiten?', correctValue: 29.43, tolerance: 0.1, unit: 'N', explanation: '**Ansatz:** Auf horizontaler Fläche ist $F_N = m \\cdot g$, die Reibkraft folgt aus dem Coulombschen Reibgesetz $F_R = \\mu \\cdot F_N$.\n\n**Rechnung:** $F_N = 10 \\cdot 9{,}81 = 98{,}1$ N, dann $F_R = 0{,}3 \\cdot 98{,}1 = 29{,}43$ N.\n\n**Probe:** Einheitencheck: $\\mathrm{kg} \\cdot \\mathrm{m/s^2} = \\mathrm{N}$, und $\\mu$ dimensionslos — passt. Größenordnung: ca. 30 N für 10 kg bei mäßigem Reibwert ist plausibel.\n\n**Typischer Fehler:** Reibwert $\\mu$ mit Gewichtskraft verwechseln und $F_R = \\mu \\cdot m$ rechnen — dann fehlt $g$.', hints: ['Normalkraft auf ebener Fläche: F_N = m·g', 'F_R = μ·F_N', 'μ·F_N einsetzen'] },
            { type: 'true-false', statement: 'Der Haftreibwert ist in der Regel größer als der Gleitreibwert.', correct: true, explanation: '**Ansatz:** Vergleich der Reibwerte $\\mu_0$ (Haft) und $\\mu$ (Gleit) im Coulombschen Reibmodell.\n\n**Rechnung:** Zum Losreißen muss die treibende Kraft die maximale Haftreibkraft $F_{H,\\max} = \\mu_0 F_N$ übertreffen. Sobald der Körper gleitet, wirkt nur noch $F_R = \\mu F_N$ mit kleinerem $\\mu$, daher $\\mu_0 > \\mu$.\n\n**Probe:** Alltagsbeobachtung: Ein Schrank lässt sich nur mit einem Ruck anschieben, läuft dann aber leichter — genau das zeigt $\\mu_0 > \\mu$.\n\n**Typischer Fehler:** $\\mu_0 = \\mu$ annehmen und damit den Unterschied zwischen Losreiß- und Gleitkraft ignorieren.', hints: ['Haftreibwert μ_0 > Gleitreibwert μ.', 'Zum Losreißen braucht man mehr Kraft als zum Gleiterhalten.', 'Anlaufkraft > Gleithaltekraft.'] },
            { type: 'multiple-choice', question: '[PRÜFUNG] Block (m = 5 kg) auf geneigter Ebene α = 30°, Gleitreibwert μ = 0,3, g = 9,81. Reibkraft beim Gleiten in N (gerundet auf ganze Zahlen)?', options: ['13 N', '15 N', '20 N', '25 N'], correctIndex: 0, explanation: '**Ansatz:** Auf geneigter Ebene steht die Normalkraft senkrecht zur Fläche: $F_N = m g \\cos\\alpha$. Die Reibkraft folgt aus $F_R = \\mu F_N$.\n\n**Rechnung:** $F_N = 5 \\cdot 9{,}81 \\cdot \\cos(30°) = 5 \\cdot 9{,}81 \\cdot 0{,}866 \\approx 42{,}47$ N. Damit $F_R = 0{,}3 \\cdot 42{,}47 \\approx 12{,}74$ N, gerundet $13$ N.\n\n**Probe:** Bei $\\alpha = 0°$ wäre $F_R = 0{,}3 \\cdot 5 \\cdot 9{,}81 = 14{,}7$ N — der gekippte Wert muss kleiner sein (weniger Normalkraft), was mit $13$ N passt.\n\n**Typischer Fehler:** $F_N = m g$ auf der Ebene annehmen (ergibt 14,7 N → 15 N) oder $\\sin\\alpha$ statt $\\cos\\alpha$ einsetzen.', hints: ['F_N = m·g·cosα auf geneigter Ebene', 'F_R = μ · F_N', 'cos30° ≈ 0,866'], wrongAnswerExplanations: { 1: 'Hier wurde vermutlich $F_N = m \\cdot g = 49{,}05$ N angenommen (horizontale Fläche). Auf geneigter Ebene gilt aber $F_N = m \\cdot g \\cdot \\cos\\alpha$, also $\\mu \\cdot m \\cdot g \\cdot \\cos(30°) \\approx 13$ N.', 2: 'Falsche Winkelfunktion: $\\sin(30°) = 0{,}5$ statt $\\cos(30°) = 0{,}866$ eingesetzt führt zu $0{,}3 \\cdot 5 \\cdot 9{,}81 \\cdot 0{,}5 \\approx 7{,}4$ N — nicht 20 N; 20 N deutet auf Vernachlässigung von $\\cos\\alpha$ und fehlerhafte Zwischenrechnung hin.', 3: 'Das wäre ohne Neigung und mit gerundetem $g = 10$: $0{,}5 \\cdot 50 = 25$. Korrekt ist $F_R = \\mu \\cdot m \\cdot g \\cdot \\cos\\alpha \\approx 13$ N.' } },
          ],
        },
        {
          id: 'mech-1-5',
          title: 'Schwerpunkt',
          estimatedMinutes: 14,
          learningGoals: ['Schwerpunkt zusammengesetzter Flächen berechnen', 'Flächenschwerpunkt als Summenregel anwenden'],
          subGoals: [
            { label: 'Diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$', examRelevance: 'hoch' },
            { label: 'Zusammengesetzte Flächen: $x_S = \\sum A_i x_{S,i} / \\sum A_i$', examRelevance: 'hoch' },
            { label: 'Loch als negative Fläche subtrahieren', examRelevance: 'hoch' },
            { label: 'Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse', examRelevance: 'mittel' },
            { label: 'Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [],
            concepts: [
              { id: 'sp-diskret',     title: 'Diskrete Massen: $x_S=\\sum m_i x_i/\\sum m_i$',                                       dependsOn: [] },
              { id: 'sp-flaechen',    title: 'Zusammengesetzte Flächen: $x_S=\\sum A_i x_{S,i}/\\sum A_i$',                          dependsOn: [] },
              { id: 'sp-loch',        title: 'Loch als negative Fläche subtrahieren',                                                dependsOn: ['sp-flaechen'] },
              { id: 'sp-symmetrie',   title: 'Symmetrie: Schwerpunkt liegt auf Symmetrieachse',                                       dependsOn: [] },
              { id: 'sp-standard',    title: 'Standard: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\\pi)$',                       dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['sp-diskret'],
              1: ['sp-flaechen'],
              2: ['sp-loch'],
              3: ['sp-symmetrie'],
              4: ['sp-standard'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['sp-diskret'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-diskret'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['sp-diskret'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-diskret'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['sp-diskret'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['sp-flaechen'],         qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-flaechen'],         qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['sp-flaechen'],         qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-flaechen'],         qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['sp-flaechen'],         qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['sp-loch'],             qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-loch'],             qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['sp-loch'],             qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-loch'],             qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['sp-loch'],             qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['sp-symmetrie'],        qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-symmetrie'],        qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'multiple-choice', uses: ['sp-symmetrie'],        qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-symmetrie'],        qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'multiple-choice', uses: ['sp-symmetrie'],        qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['sp-standard'],         qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['sp-standard'],         qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['sp-standard'],         qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['sp-standard'],         qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'matching',        uses: ['sp-standard'],         qty: 1 },
            ],
          },
          content: String.raw`Der **Schwerpunkt** (Massenmittelpunkt) eines Systems diskreter Massen liegt bei:

$$x_S = \frac{\sum m_i \cdot x_i}{\sum m_i}, \qquad y_S = \frac{\sum m_i \cdot y_i}{\sum m_i}$$

Für zusammengesetzte Flächen (homogenes Material) ersetzt man $m_i \to A_i$:

$$x_S = \frac{\sum A_i \cdot x_{S,i}}{\sum A_i}$$

**Loch = negative Fläche:** Ein Ausschnitt wird als negatives Teilgebiet subtrahiert.`,
          exercises: [
            { type: 'number-input', question: 'Zwei Massen: $m_1 = 3$ kg bei $x_1 = 2$ m, $m_2 = 1$ kg bei $x_2 = 6$ m. Schwerpunkt $x_S$?', correctValue: 3, tolerance: 0.01, unit: 'm', explanation: '**Ansatz:** Schwerpunkt-Formel für diskrete Massen: $x_S = \\sum m_i x_i / \\sum m_i$.\n\n**Rechnung:** Zähler $3 \\cdot 2 + 1 \\cdot 6 = 6 + 6 = 12\\,\\text{kg·m}$. Nenner $3 + 1 = 4\\,\\text{kg}$. $x_S = 12/4 = 3\\,\\text{m}$.\n\n**Probe:** Ergebnis liegt zwischen $x_1 = 2$ und $x_2 = 6$ — Schwerpunkt muss innerhalb der Massenpunkte liegen. ✓ Näher an $m_1$ (größere Masse) als an $m_2$: Abstand zu $m_1$ ist $1$ m, zu $m_2$ ist $3$ m — Verhältnis $3:1$ entspricht dem Massenverhältnis $m_2:m_1 = 1:3$. ✓\n\n**Typischer Fehler:** Arithmetisches Mittel $(2 + 6)/2 = 4$ m rechnen — ignoriert die unterschiedlichen Massen. Schwerpunkt ist **massengewichtetes** Mittel, nicht einfaches Mittel.', hints: ['Formel: $x_S = \\sum(m_i \\cdot x_i)/\\sum m_i$.', 'Zähler = $m_1 x_1 + m_2 x_2$, Nenner = Gesamtmasse.', 'Ergebnis muss zwischen $x_1$ und $x_2$ liegen, näher an der größeren Masse.'] },
            { type: 'true-false', statement: 'Ein symmetrischer Körper hat seinen Schwerpunkt auf der Symmetrieachse.', correct: true, explanation: '**Ansatz:** Symmetrie bedeutet: zu jedem Massenelement bei $+x$ gibt es ein gleich großes Element bei $-x$ (bezogen auf die Symmetrieachse). In der Schwerpunktsumme heben sich die Beiträge paarweise auf.\n\n**Rechnung:** Für jedes Paar $(m, +x)$ und $(m, -x)$ gilt $m(+x) + m(-x) = 0$. Die Summe $\\sum m_i x_i$ verschwindet relativ zur Achse → $x_S = 0$ (Schwerpunkt liegt auf der Achse).\n\n**Probe:** Gilt für homogene Kugel, Zylinder, Quader, Kreisring usw. Bei einem symmetrischen Körper mit zwei Symmetrieachsen (z.B. Rechteck) liegt der Schwerpunkt im Schnittpunkt beider Achsen.\n\n**Typischer Fehler:** Symmetrie der **Form** mit Symmetrie der **Massenverteilung** verwechseln. Die Aussage gilt nur bei homogenem Material — ein asymmetrisch gebohrtes Rechteck hat den Schwerpunkt nicht mehr zentral.', hints: ['Überlege, was Symmetrie für die Verteilung der Massenelemente bedeutet.', 'Zu jedem $(m, +x)$ existiert ein $(m, -x)$ — wie verhält sich die Summe?', 'Gilt nur bei homogenem Material (konstante Dichte).'] },
            { type: 'number-input', question: '[PRÜFUNG] L-Profil aus zwei Rechtecken: $R_1$ (20×80 mm, $x_{S1}=10$ mm) und $R_2$ (60×20 mm, $x_{S2}=50$ mm). Schwerpunkt $x_S$ des L-Profils?', correctValue: 27.1, tolerance: 0.5, unit: 'mm', explanation: '**Ansatz:** Zusammengesetzte Fläche: $x_S = \\sum A_i x_{S,i} / \\sum A_i$. Beide Teilrechtecke liefern Fläche × Teilschwerpunkt-Abstand.\n\n**Rechnung:** $A_1 = 20 \\cdot 80 = 1600\\,\\text{mm}^2$, $A_2 = 60 \\cdot 20 = 1200\\,\\text{mm}^2$. $x_S = (1600 \\cdot 10 + 1200 \\cdot 50)/(1600 + 1200) = (16\\,000 + 60\\,000)/2800 = 76\\,000/2800 \\approx 27{,}1\\,\\text{mm}$.\n\n**Probe:** Ergebnis liegt zwischen $x_{S1} = 10$ und $x_{S2} = 50$ — OK. Näher an $x_{S1}$, weil $A_1 > A_2$. Verhältnis der Abstände: $(27{,}1 - 10) : (50 - 27{,}1) = 17{,}1 : 22{,}9 \\approx 1200 : 1600 = A_2 : A_1$. ✓ (Hebelgesetz)\n\n**Typischer Fehler:** Flächen vergessen zu gewichten und nur die Teilschwerpunkte mitteln: $(10 + 50)/2 = 30\\,\\text{mm}$ — falsch, weil $A_1 \\neq A_2$. Jede Teilfläche wird mit ihrer **Größe** gewichtet, nicht mit $1$.', hints: ['Teilschwerpunkte gewichten mit den jeweiligen Flächen.', '$A_i = b_i \\cdot h_i$ für jedes Rechteck berechnen.', 'Ergebnis muss zwischen $x_{S1}$ und $x_{S2}$ liegen, näher an der größeren Fläche.'] },
          ],
        },
      ],
    },
    {
      id: 'mech-unit-2',
      title: 'Dynamik',
      description: 'Newton, Arbeit, Energie und Impuls.',
      lessons: [
        {
          id: 'mech-2-1',
          title: 'Newtonsche Gesetze',
          learningGoals: ['F = m·a anwenden', 'Masse und Gewichtskraft unterscheiden'],
          subGoals: [
            { label: '2. Newton: $\\sum \\vec F = m \\vec a$ (Grundgleichung der Dynamik)', examRelevance: 'hoch' },
            { label: '1. Newton: ohne Kraft → gleichförmige Bewegung (Trägheitsprinzip)', examRelevance: 'hoch' },
            { label: '3. Newton: actio = reactio, $\\vec F_{AB} = -\\vec F_{BA}$', examRelevance: 'hoch' },
            { label: 'Gewichtskraft: $F_G = m \\cdot g$ mit $g \\approx 9{,}81$ m/s²', examRelevance: 'hoch' },
            { label: 'Masse (kg) ist Eigenschaft des Körpers, Gewichtskraft (N) Kraft im Schwerefeld', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-1', concepts: ['kraft-vektor'] },
            ],
            concepts: [
              { id: 'newton-2',     title: '2. Newton: $\\sum\\vec F=m\\vec a$',                                                  dependsOn: [] },
              { id: 'newton-1',     title: '1. Newton: Trägheitsprinzip',                                                          dependsOn: [] },
              { id: 'newton-3',     title: '3. Newton: actio=reactio, $\\vec F_{AB}=-\\vec F_{BA}$',                              dependsOn: [] },
              { id: 'gewichtskraft', title: '$F_G=m\\cdot g$ mit $g\\approx 9{,}81$ m/s²',                                          dependsOn: ['newton-2'] },
              { id: 'masse-vs-fg',  title: 'Masse (kg) vs. Gewichtskraft (N)',                                                      dependsOn: ['gewichtskraft'] },
            ],
            subGoalConcepts: {
              0: ['newton-2'],
              1: ['newton-1'],
              2: ['newton-3'],
              3: ['gewichtskraft'],
              4: ['masse-vs-fg'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['newton-2'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['newton-2'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['newton-2'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['newton-2'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['newton-2'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['newton-1'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['newton-1'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['newton-1'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['newton-1'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['newton-1'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['newton-3'],          qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['newton-3'],          qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['newton-3'],          qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['newton-3'],          qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['newton-3'],          qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['gewichtskraft'],     qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gewichtskraft'],     qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['gewichtskraft'],     qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gewichtskraft'],     qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['gewichtskraft'],     qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['masse-vs-fg'],       qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['masse-vs-fg'],       qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['masse-vs-fg'],       qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['masse-vs-fg'],       qty: 1, note: 'kg/N verwechselt' },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['masse-vs-fg'],       qty: 1 },
            ],
          },
          content: String.raw`Die Grundgleichung der Dynamik lautet:

$$\sum F = m \cdot a$$

Masse ist eine Eigenschaft des Körpers. Gewichtskraft ist die Kraft im Schwerefeld: $F_G = m \cdot g$.`,
          visualization: {
            title: 'Feder-Masse-Dämpfer System', visualizationId: 'spring-mass-damper', params: {},
          },
          exercises: [
            { type: 'number-input', question: 'Welche Kraft beschleunigt 4 kg mit $3\\,m/s^2$?', correctValue: 12, tolerance: 0.01, unit: 'N', explanation: 'F = m·a = 4·3 = 12 N.', hints: ['Grundgleichung: F = m · a', 'F in Newton, m in kg, a in m/s²', '4 · 3 = 12 N'] },
            { type: 'multiple-choice', question: 'Gewichtskraft wird berechnet mit:', options: ['m/a', 'm·g', 'g/m', 'm+g'], correctIndex: 1, explanation: 'F_G = m·g.', hints: ['Gewichtskraft: F_G = m · g', 'g ≈ 9,81 m/s² (Erdschwerebeschleunigung)', 'F_G = m · 9,81'], wrongAnswerExplanations: { 0: '$m/a$ hätte Einheit $\\mathrm{kg \\cdot s^2/m}$ — unphysikalisch. Gewichtskraft ist $F_G = m \\cdot g$ mit Einheit N.', 2: '$g/m$ hätte Einheit $\\mathrm{1/(kg \\cdot s^2) \\cdot m}$, keine Kraft. Multiplizieren, nicht dividieren: $F_G = m \\cdot g$.', 3: 'Addition ist unmöglich — Einheiten $\\mathrm{kg}$ und $\\mathrm{m/s^2}$ sind nicht gleich. Kraft entsteht durch Multiplikation: $F = m \\cdot g$.' } },
            { type: 'true-false', statement: 'Bei doppelter Masse und gleicher Beschleunigung ist die nötige Kraft doppelt so groß.', correct: true, explanation: 'F ist proportional zu m.', hints: ['F = m · a — Kraft proportional zu Masse und Beschleunigung.', 'Doppelte Masse bei gleicher Beschleunigung → doppelte Kraft.', 'F ∝ m gilt direkt aus F = m·a.'] },
          ],
        },
        {
          id: 'mech-2-2',
          title: 'Arbeit und Energie',
          learningGoals: ['Mechanische Arbeit berechnen', 'Energieerhaltung erkennen'],
          subGoals: [
            { label: 'Arbeit: $W = F \\cdot s \\cdot \\cos\\alpha$ (Skalarprodukt), Einheit Joule', examRelevance: 'hoch' },
            { label: 'Senkrechte Kraft leistet keine Arbeit ($\\cos 90° = 0$)', examRelevance: 'hoch' },
            { label: 'Kinetische Energie: $E_{\\text{kin}} = \\tfrac{1}{2} m v^2$', examRelevance: 'hoch' },
            { label: 'Potentielle Energie: $E_{\\text{pot}} = m g h$ (nahe Erdoberfläche)', examRelevance: 'hoch' },
            { label: 'Federenergie: $E_{\\text{Feder}} = \\tfrac{1}{2} c x^2$', examRelevance: 'hoch' },
            { label: 'Energieerhaltung: $E_{\\text{kin}} + E_{\\text{pot}} = $ const (konservatives System)', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-2-1', concepts: ['gewichtskraft'] },
            ],
            concepts: [
              { id: 'arbeit',         title: 'Arbeit $W=F\\cdot s\\cdot\\cos\\alpha$ — Joule',                                       dependsOn: [] },
              { id: 'arbeit-90',      title: 'Senkrechte Kraft leistet keine Arbeit ($\\cos 90°=0$)',                                dependsOn: ['arbeit'] },
              { id: 'e-kin',          title: 'Kinetische Energie $E_{\\text{kin}}=\\tfrac12 mv^2$',                                  dependsOn: [] },
              { id: 'e-pot',          title: 'Potentielle Energie $E_{\\text{pot}}=mgh$',                                            dependsOn: [] },
              { id: 'e-feder',        title: 'Federenergie $E_{\\text{Feder}}=\\tfrac12 cx^2$',                                       dependsOn: [] },
              { id: 'energie-erhalt', title: 'Energieerhaltung $E_{\\text{kin}}+E_{\\text{pot}}=$const',                              dependsOn: ['e-kin', 'e-pot'] },
            ],
            subGoalConcepts: {
              0: ['arbeit'],
              1: ['arbeit-90'],
              2: ['e-kin'],
              3: ['e-pot'],
              4: ['e-feder'],
              5: ['energie-erhalt'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['arbeit'],            qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['arbeit'],            qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['arbeit'],            qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['arbeit'],            qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['arbeit'],            qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['arbeit-90'],         qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['arbeit-90'],         qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'multiple-choice', uses: ['arbeit-90'],         qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['arbeit-90'],         qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'multiple-choice', uses: ['arbeit-90'],         qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['e-kin'],             qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-kin'],             qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['e-kin'],             qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-kin'],             qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['e-kin'],             qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['e-pot'],             qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-pot'],             qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['e-pot'],             qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-pot'],             qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['e-pot'],             qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['e-feder'],           qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-feder'],           qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['e-feder'],           qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-feder'],           qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['e-feder'],           qty: 1 },
              { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['energie-erhalt'],    qty: 1 },
              { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['energie-erhalt'],    qty: 1 },
              { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['energie-erhalt', 'e-kin', 'e-pot'], qty: 1 },
              { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['energie-erhalt'],    qty: 1 },
              { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['energie-erhalt'],    qty: 1 },
            ],
          },
          content: String.raw`Mechanische Arbeit bei konstanter Kraft:

$$W = F \cdot s \cdot \cos(\alpha)$$

Ist Kraft und Weg gleichgerichtet, gilt $W = F \cdot s$.`,
          exercises: [
            { type: 'number-input', question: 'Eine Kraft von 50 N wirkt 3 m in Wegrichtung. Arbeit?', correctValue: 150, tolerance: 0.01, unit: 'J', explanation: 'W = F·s = 50·3 = 150 J.', hints: ['Mechanische Arbeit: W = F · s (bei gleichgerichteter Kraft)', '1 Joule = 1 Newton · 1 Meter', '50 · 3 = 150 J'] },
            { type: 'multiple-choice', question: 'Wenn Kraft senkrecht zum Weg steht, ist die Arbeit:', options: ['maximal', 'negativ maximal', 'null', 'immer F·s'], correctIndex: 2, explanation: 'cos(90°)=0, also W=0.', hints: ['W = F · s · cos(α) — cos(90°) = 0', 'Senkrechte Kraft leistet keine Arbeit am Weg.', 'Skalarprodukt F⃗ · s⃗ = 0 wenn 90° Winkel.'], wrongAnswerExplanations: { 0: 'Maximal wäre die Arbeit bei $\\alpha = 0°$ ($W = F \\cdot s$), da $\\cos(0°) = 1$. Bei $90°$ ist $\\cos = 0$.', 1: 'Negativ maximal wäre bei $\\alpha = 180°$ (entgegengesetzte Richtung, $\\cos(180°) = -1$). Senkrecht ($90°$) ergibt aber null, nicht $-F \\cdot s$.', 3: '$W = F \\cdot s$ gilt nur bei parallelen Vektoren ($\\alpha = 0$). Allgemein: $W = F \\cdot s \\cdot \\cos\\alpha$, und bei $90°$ ist $\\cos\\alpha = 0$.' } },
            { type: 'true-false', statement: 'Potentielle Energie im Schwerefeld ist E = m·g·h.', correct: true, explanation: 'Diese Formel gilt nahe der Erdoberfläche bei konstanter Fallbeschleunigung.', hints: ['Potentielle Energie: E_pot = m · g · h', 'h ist die Höhe über dem Bezugsniveau.', 'E_pot steigt linear mit h.'] },
          ],
        },
        {
          id: 'mech-2-3',
          title: 'Kinematik',
          estimatedMinutes: 14,
          learningGoals: ['Geradlinige Bewegung mit Formeln beschreiben', 'Zusammenhang zwischen s, v, a und t herstellen'],
          subGoals: [
            { label: 'Gleichförmig beschleunigt: $v = v_0 + at$, $s = s_0 + v_0 t + \\tfrac{1}{2}at^2$', examRelevance: 'hoch' },
            { label: 'Energiegleichung: $v^2 = v_0^2 + 2a\\Delta s$ (ohne Zeit)', examRelevance: 'hoch' },
            { label: 'Freier Fall: $a = g$, $v = gt$, $h = \\tfrac{1}{2}gt^2$', examRelevance: 'hoch' },
            { label: 'Schräger Wurf: $v_x = v_0 \\cos\\alpha$, $v_y = v_0 \\sin\\alpha$, Wurfweite $= v_0^2 \\sin 2\\alpha/g$', examRelevance: 'hoch' },
            { label: 'Kreisbewegung: $\\omega = 2\\pi/T = 2\\pi n$, $v = r\\omega$, $a_z = v^2/r = r\\omega^2$', examRelevance: 'hoch' },
            { label: 'Impulserhaltung: $\\sum m_i v_i = $ const (auch bei unelastischem Stoß)', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-2-1', concepts: ['newton-2'] },
            ],
            concepts: [
              { id: 'kin-glm-besch', title: 'Gleichförmig beschleunigt: $v=v_0+at$, $s=s_0+v_0 t+\\tfrac12 at^2$',                  dependsOn: [] },
              { id: 'kin-energiegl', title: 'Energiegleichung $v^2=v_0^2+2a\\Delta s$ (ohne Zeit)',                                  dependsOn: ['kin-glm-besch'] },
              { id: 'freier-fall',  title: 'Freier Fall: $a=g$, $v=gt$, $h=\\tfrac12 gt^2$',                                          dependsOn: ['kin-glm-besch'] },
              { id: 'schraeg-wurf', title: 'Schräger Wurf: $v_x=v_0\\cos\\alpha$, $v_y=v_0\\sin\\alpha$, Wurfweite $v_0^2\\sin 2\\alpha/g$', dependsOn: ['freier-fall'] },
              { id: 'kreisbeweg',   title: 'Kreisbewegung $\\omega=2\\pi/T$, $v=r\\omega$, $a_z=v^2/r$',                              dependsOn: [] },
              { id: 'impuls-erh',   title: 'Impulserhaltung $\\sum m_i v_i=$const',                                                  dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['kin-glm-besch'],
              1: ['kin-energiegl'],
              2: ['freier-fall'],
              3: ['schraeg-wurf'],
              4: ['kreisbeweg'],
              5: ['impuls-erh'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['kin-glm-besch'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kin-glm-besch'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['kin-glm-besch'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kin-glm-besch'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['kin-glm-besch'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['kin-energiegl'],          qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kin-energiegl'],          qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['kin-energiegl'],          qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kin-energiegl'],          qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['kin-energiegl'],          qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['freier-fall'],            qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['freier-fall'],            qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['freier-fall'],            qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['freier-fall'],            qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['freier-fall'],            qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['schraeg-wurf'],           qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['schraeg-wurf'],           qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['schraeg-wurf'],           qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['schraeg-wurf'],           qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['schraeg-wurf'],           qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['kreisbeweg'],             qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['kreisbeweg'],             qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['kreisbeweg'],             qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['kreisbeweg'],             qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['kreisbeweg'],             qty: 1 },
              { subGoal: 5, stage: 'recognize',         type: 'true-false',      uses: ['impuls-erh'],             qty: 1 },
              { subGoal: 5, stage: 'apply-guided',      type: 'multiple-choice', uses: ['impuls-erh'],             qty: 1 },
              { subGoal: 5, stage: 'apply-independent', type: 'number-input',    uses: ['impuls-erh'],             qty: 1 },
              { subGoal: 5, stage: 'error-analysis',    type: 'multiple-choice', uses: ['impuls-erh'],             qty: 1 },
              { subGoal: 5, stage: 'transfer',          type: 'number-input',    uses: ['impuls-erh'],             qty: 1 },
            ],
          },
          content: String.raw`**Geradlinige gleichmäßig beschleunigte Bewegung:**

$$v(t) = v_0 + a \cdot t$$
$$s(t) = s_0 + v_0 \cdot t + \tfrac{1}{2} a t^2$$
$$v^2 = v_0^2 + 2 a \cdot \Delta s$$

**Kreisbewegung (gleichförmig):**
$$\omega = \frac{2\pi}{T}, \qquad v = r \cdot \omega, \qquad a_z = \frac{v^2}{r} = r\omega^2$$

$a_z$ ist die **Zentripetalbeschleunigung** — sie zeigt immer zur Kreismitte.`,
          exercises: [
            { type: 'number-input', question: 'Startgeschwindigkeit v0 = 0, Beschleunigung a = 2 m/s². Geschwindigkeit nach t = 5 s?', correctValue: 10, tolerance: 0.01, unit: 'm/s', explanation: 'v = v_0 + a·t = 0 + 2·5 = 10 m/s.', hints: ['v = v_0 + a·t', 'v_0 = 0 (startet aus dem Stand)', '0 + 2·5 = 10 m/s'] },
            { type: 'number-input', question: 'Körper startet mit v0 = 3 m/s, a = 1,5 m/s². Zurückgelegter Weg nach t = 4 s?', correctValue: 24, tolerance: 0.1, unit: 'm', explanation: 's = v_0·t + ½·a·t² = 3·4 + ½·1,5·16 = 12 + 12 = 24 m.', hints: ['s = v_0·t + ½·a·t²', 'v_0·t = 3·4 = 12 m', '½·1,5·16 = 12 m → s = 24 m'] },
            { type: 'number-input', question: '[PRÜFUNG] Kreis: r = 0,5 m, n = 600 1/min. Bahngeschwindigkeit v? (Runde auf eine Dezimalstelle)', correctValue: 31.4, tolerance: 0.5, unit: 'm/s', explanation: 'ω = 2π·n/60 = 2π·600/60 = 20π = 62,83 rad/s. v = r·ω = 0,5·62,83 ≈ 31,4 m/s.', hints: ['ω = 2πn/60 (n in 1/min)', 'v = r·ω', '20π ≈ 62,83 rad/s'] },
            {
              type: 'number-input',
              question: 'Schräger Wurf: Ball mit $v_0 = 20\\,\\text{m/s}$ unter $\\alpha = 30°$ abgeworfen. Wie weit fliegt er (Wurfweite $w$), bevor er wieder die Starthöhe erreicht? ($g = 9{,}81\\,\\text{m/s}^2$)',
              correctValue: 35.3,
              tolerance: 0.5,
              unit: 'm',
              explanation: `**Ansatz:** Horizontale Bewegung gleichförmig ($v_x = v_0 \\cos\\alpha$), vertikale Bewegung freier Fall mit Startgeschwindigkeit $v_y = v_0 \\sin\\alpha$. Flugzeit bis zur Landung (gleiche Starthöhe): $t_\\text{flug} = 2 v_y / g$. Wurfweite: $w = v_x \\cdot t_\\text{flug}$.

**Rechnung:**
- $v_x = 20 \\cdot \\cos(30°) = 20 \\cdot 0{,}866 = 17{,}32\\,\\text{m/s}$
- $v_y = 20 \\cdot \\sin(30°) = 20 \\cdot 0{,}5 = 10\\,\\text{m/s}$
- $t_\\text{flug} = 2 \\cdot 10 / 9{,}81 \\approx 2{,}04\\,\\text{s}$
- $w = 17{,}32 \\cdot 2{,}04 \\approx 35{,}3\\,\\text{m}$

**Kompaktformel:** $w = \\dfrac{v_0^2 \\sin(2\\alpha)}{g}$. Hier: $\\dfrac{400 \\cdot \\sin(60°)}{9{,}81} = \\dfrac{400 \\cdot 0{,}866}{9{,}81} \\approx 35{,}3\\,\\text{m}$. ✓

**Max Wurfweite bei $\\alpha = 45°$** (da $\\sin(2\\alpha)$ dort maximal $= 1$).

**Typischer Fehler:** Vertikale und horizontale Bewegung nicht trennen; oder Winkel in Gradianten statt Radiant (bzw. umgekehrt) am Taschenrechner.`,
              hints: [
                'Zerlege $v_0$ in horizontale und vertikale Komponente.',
                'Flugzeit: Ball steigt und fällt; $t_\\text{flug} = 2 v_y / g$.',
                'Wurfweite = $v_x \\cdot t_\\text{flug}$.',
              ],
            },
            {
              type: 'number-input',
              question: 'Unelastischer Stoß: Kugel $m_1 = 2\\,\\text{kg}$ mit $v_1 = 5\\,\\text{m/s}$ trifft Kugel $m_2 = 3\\,\\text{kg}$ in Ruhe. Beide bleiben zusammen. Gemeinsame Geschwindigkeit $v\'$?',
              correctValue: 2,
              tolerance: 0.01,
              unit: 'm/s',
              explanation: `**Ansatz:** Impuls vor Stoss = Impuls nach Stoss (Impulserhaltung gilt IMMER, egal ob elastisch oder nicht).

**Formel (unelastischer Stoss):** $(m_1 + m_2) \\cdot v\' = m_1 v_1 + m_2 v_2$.

**Rechnung:** $v\' = \\dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\dfrac{2 \\cdot 5 + 3 \\cdot 0}{2 + 3} = \\dfrac{10}{5} = 2\\,\\text{m/s}$.

**Probe (Energie):** Vor: $E_\\text{kin} = \\tfrac{1}{2} \\cdot 2 \\cdot 25 = 25\\,\\text{J}$. Nach: $\\tfrac{1}{2} \\cdot 5 \\cdot 4 = 10\\,\\text{J}$. Energieverlust: $15\\,\\text{J}$ — ging in Wärme/Verformung (Charakteristikum des unelastischen Stosses; anders als beim elastischen wird Energie **nicht** erhalten).

**Typischer Fehler:** Energieerhaltung statt Impulserhaltung verwenden. Beim unelastischen Stoss geht kinetische Energie verloren — nur Impuls ($p = mv$) bleibt erhalten.`,
              hints: [
                'Impulserhaltung: $p_\\text{vor} = p_\\text{nach}$.',
                '$p_\\text{nach} = (m_1 + m_2) v\'$.',
                '$v\' = (m_1 v_1 + m_2 v_2) / (m_1 + m_2)$.',
              ],
            },
          ],
        },
        {
          id: 'mech-2-4',
          title: 'Schwingungen',
          estimatedMinutes: 16,
          learningGoals: ['Eigenfrequenz eines Feder-Masse-Systems berechnen', 'Resonanzbedingung erkennen'],
          subGoals: [
            { label: 'Eigenkreisfrequenz: $\\omega_0 = \\sqrt{c/m}$, Periode $T = 2\\pi/\\omega_0$', examRelevance: 'hoch' },
            { label: 'Harmonische Schwingung: $x(t) = A \\sin(\\omega_0 t + \\varphi)$', examRelevance: 'hoch' },
            { label: 'Resonanz bei $\\Omega = \\omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)', examRelevance: 'hoch' },
            { label: 'Dämpfungsgrad (Lehrsches Maß) $D = d/(2\\sqrt{cm})$', examRelevance: 'hoch' },
            { label: 'Mathematisches Pendel: $\\omega_0 = \\sqrt{g/l}$ (kleine Auslenkungen)', examRelevance: 'mittel' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-2-1', concepts: ['newton-2'] },
              { lessonId: 'mech-2-2', concepts: ['e-feder'] },
            ],
            concepts: [
              { id: 'eigen-omega', title: 'Eigenkreisfrequenz $\\omega_0=\\sqrt{c/m}$, $T=2\\pi/\\omega_0$',                       dependsOn: [] },
              { id: 'harm-schw',   title: 'Harmonische Schwingung $x(t)=A\\sin(\\omega_0 t+\\varphi)$',                            dependsOn: ['eigen-omega'] },
              { id: 'resonanz-ung', title: 'Resonanz: $\\Omega=\\omega_0$, Amplitude wächst (ungedämpft)',                          dependsOn: ['eigen-omega'] },
              { id: 'lehrsches-d', title: 'Dämpfungsgrad (Lehrsches Maß) $D=d/(2\\sqrt{cm})$',                                      dependsOn: ['eigen-omega'] },
              { id: 'mathe-pendel', title: 'Mathematisches Pendel $\\omega_0=\\sqrt{g/l}$',                                          dependsOn: ['eigen-omega'] },
            ],
            subGoalConcepts: {
              0: ['eigen-omega'],
              1: ['harm-schw'],
              2: ['resonanz-ung'],
              3: ['lehrsches-d'],
              4: ['mathe-pendel'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['eigen-omega'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eigen-omega'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['eigen-omega'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eigen-omega'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['eigen-omega'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['harm-schw'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['harm-schw'],            qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['harm-schw'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['harm-schw'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['harm-schw'],            qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['resonanz-ung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['resonanz-ung'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['resonanz-ung'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['resonanz-ung'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'multiple-choice', uses: ['resonanz-ung'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['lehrsches-d'],          qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lehrsches-d'],          qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['lehrsches-d'],          qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lehrsches-d'],          qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['lehrsches-d'],          qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['mathe-pendel'],         qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['mathe-pendel'],         qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['mathe-pendel'],         qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['mathe-pendel'],         qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['mathe-pendel'],         qty: 1 },
            ],
          },
          content: String.raw`**Ungedämpfte freie Schwingung** des Feder-Masse-Systems ($m$, Federsteifigkeit $c$):

$$\ddot{x} + \omega_0^2 x = 0, \qquad \omega_0 = \sqrt{\frac{c}{m}}$$

**Schwingungsdauer und Frequenz:**
$$T = \frac{2\pi}{\omega_0}, \qquad f_0 = \frac{1}{T}$$

**Resonanz:** tritt auf, wenn Erregerfrequenz $\Omega \approx \omega_0$ — Amplitude wächst bei ungedämpftem System theoretisch gegen unendlich.

**Gedämpfte Schwingung:** Das Lehrszensverhältnis $D = \frac{d}{2\sqrt{cm}}$ beschreibt die Dämpfungsstärke; $D < 1$ ist schwach gedämpft.`,
          visualization: {
            title: 'Feder-Masse-Dämpfer System', visualizationId: 'spring-mass-damper', params: {},
          },
          exercises: [
            {
              type: 'number-input',
              question: 'Feder-Masse-System: c = 400 N/m, m = 1 kg. Eigenkreisfrequenz ω₀?',
              correctValue: 20,
              tolerance: 0.01,
              unit: 'rad/s',
              explanation: `**Ansatz:** Eigenkreisfrequenz des ungedämpften Feder-Masse-Systems: $\\omega_0 = \\sqrt{c/m}$.

**Rechnung:** $\\omega_0 = \\sqrt{400\\,\\text{N/m} \\;/\\; 1\\,\\text{kg}} = \\sqrt{400\\,\\text{s}^{-2}} = 20\\,\\text{rad/s}$.

**Probe:** Einheiten: $\\sqrt{(\\text{N/m})/\\text{kg}} = \\sqrt{(\\text{kg·m/s}^2)/(\\text{m·kg})} = \\sqrt{1/\\text{s}^2} = 1/\\text{s}$ — stimmt mit rad/s überein. Zahlenwert plausibel für Laborfeder.

**Typischer Fehler:** $\\omega_0 = c/m = 400$ ohne Wurzel rechnen — liefert Zahlenwert mit falscher Dimension ($\\text{s}^{-2}$). Die Eigenkreisfrequenz ist stets die **Wurzel** aus dem Verhältnis.`,
              hints: ['$\\omega_0 = \\sqrt{c/m}$ — Formel hinschreiben.', 'Quotient zuerst: $c/m = 400/1 = 400$.', 'Wurzel ziehen: $\\sqrt{400} = 20\\,\\text{rad/s}$.'],
            },
            {
              type: 'number-input',
              question: 'Masse m = 4 kg, Federsteifigkeit c = 100 N/m. Schwingungsdauer T?',
              correctValue: 1.257,
              tolerance: 0.01,
              unit: 's',
              explanation: `**Ansatz:** Erst Eigenfrequenz $\\omega_0 = \\sqrt{c/m}$, dann Periode $T = 2\\pi/\\omega_0$.

**Rechnung:** $\\omega_0 = \\sqrt{100/4} = \\sqrt{25} = 5\\,\\text{rad/s}$. $T = 2\\pi/5 = 1{,}2566\\,\\text{s} \\approx 1{,}257\\,\\text{s}$.

**Probe:** Direktformel $T = 2\\pi\\sqrt{m/c} = 2\\pi \\cdot \\sqrt{0{,}04} = 2\\pi \\cdot 0{,}2 = 1{,}257\\,\\text{s}$. ✓ Plausibel: eine vollständige Schwingung pro gut einer Sekunde.

**Typischer Fehler:** $T = 2\\pi \\cdot \\omega_0 = 10\\pi \\approx 31{,}4\\,\\text{s}$ (Division mit Multiplikation verwechselt). Oder $T = 1/\\omega_0 = 0{,}2\\,\\text{s}$ (Faktor $2\\pi$ vergessen — das wäre die Periode in $\\text{rad}^{-1}$, keine Zeit).`,
              hints: ['$\\omega_0 = \\sqrt{c/m} = 5\\,\\text{rad/s}$.', 'Periode: $T = 2\\pi/\\omega_0$ — Division, nicht Multiplikation.', '$2\\pi/5 \\approx 1{,}257\\,\\text{s}$.'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Resonanz tritt auf, wenn die Erregerfrequenz Ω ...',
              options: ['gleich der Eigenfrequenz ω₀ ist', 'doppelt so groß wie ω₀ ist', 'null ist', 'größer als 100 rad/s ist'],
              correctIndex: 0,
              explanation: `**Ansatz:** Resonanz entsteht, wenn die äußere Erregerfrequenz $\\Omega$ mit der Eigenfrequenz $\\omega_0$ übereinstimmt — Energie wird in jeder Periode phasenrichtig eingekoppelt.

**Rechnung:** In der Bewegungsgleichung $\\ddot{x} + \\omega_0^2 x = (F_0/m)\\sin(\\Omega t)$ divergiert für $\\Omega = \\omega_0$ der Partikuläranteil linear in $t$ (ungedämpfter Fall, $x_p \\sim t \\cos(\\omega_0 t)$).

**Probe:** Alltag — Schaukel exakt im Eigenrhythmus anschubsen: Amplitude wächst. Falscher Takt: Energie verpufft, Amplitude bleibt beschränkt.

**Typischer Fehler:** Glauben, Resonanz hänge vom Absolutwert von $\\Omega$ ab. Entscheidend ist nur das **Verhältnis** $\\Omega/\\omega_0$ — ob $\\omega_0 = 2\\,\\text{rad/s}$ oder $2000\\,\\text{rad/s}$, die Resonanzbedingung lautet immer $\\Omega = \\omega_0$.`,
              hints: ['Resonanz = Erregerfrequenz trifft Eigenfrequenz.', '$\\omega_0 = \\sqrt{c/m}$ ist die Eigenkreisfrequenz.', 'Bei ungedämpftem System wächst die Amplitude unbegrenzt an.'],
              wrongAnswerExplanations: {
                1: '$\\Omega = 2\\omega_0$ kann bei nichtlinearen Systemen zu subharmonischer Resonanz führen, aber die klassische (Haupt-)Resonanz ist bei $\\Omega = \\omega_0$.',
                2: '$\\Omega = 0$ entspricht einer statischen Kraft — keine Schwingung, keine Resonanz. Bei $\\Omega \\to 0$ geht die Amplitude gegen den statischen Wert $F_0/c$.',
                3: 'Ein absoluter Zahlenwert in rad/s ist bedeutungslos ohne Vergleich zur Eigenfrequenz. Entscheidend ist das Verhältnis $\\Omega/\\omega_0$, nicht der Absolutwert.',
              },
            },
          ],
        },
        {
          id: 'mech-2-5',
          title: 'Dynamik starrer Körper',
          estimatedMinutes: 16,
          learningGoals: ['Massenträgheitsmoment interpretieren', 'Drallsatz M = J·α anwenden'],
          subGoals: [
            { label: 'Drallsatz: $M = J \\cdot \\alpha$ (Rotationsanalog zu $F = ma$)', examRelevance: 'hoch' },
            { label: 'Standardträgheitsmomente: Vollzylinder $\\tfrac{1}{2}mR^2$, Stab $\\tfrac{1}{12}mL^2$', examRelevance: 'hoch' },
            { label: 'Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)', examRelevance: 'hoch' },
            { label: 'Rotationsenergie: $E_{\\text{rot}} = \\tfrac{1}{2} J \\omega^2$', examRelevance: 'hoch' },
            { label: 'Drehimpuls: $L = J \\omega$, Erhaltung bei $M_{\\text{ext}} = 0$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-2-1', concepts: ['newton-2'] },
              { lessonId: 'mech-2-3', concepts: ['kreisbeweg'] },
            ],
            concepts: [
              { id: 'drallsatz',     title: 'Drallsatz $M=J\\cdot\\alpha$ (Rotationsanalog zu $F=ma$)',                          dependsOn: [] },
              { id: 'std-j',         title: 'Standardträgheitsmomente: Vollzylinder $\\tfrac12 mR^2$, Stab $\\tfrac{1}{12}mL^2$', dependsOn: [] },
              { id: 'steiner-tm',    title: 'Steiner $J_A=J_S+md^2$ — Parallelachsenverschiebung',                                dependsOn: ['std-j'] },
              { id: 'e-rot',         title: 'Rotationsenergie $E_{\\text{rot}}=\\tfrac12 J\\omega^2$',                              dependsOn: ['std-j'] },
              { id: 'drehimpuls',    title: 'Drehimpuls $L=J\\omega$ — Erhaltung bei $M_{\\text{ext}}=0$',                          dependsOn: ['drallsatz'] },
            ],
            subGoalConcepts: {
              0: ['drallsatz'],
              1: ['std-j'],
              2: ['steiner-tm'],
              3: ['e-rot'],
              4: ['drehimpuls'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['drallsatz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['drallsatz'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['drallsatz'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['drallsatz'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['drallsatz'],          qty: 1 },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['std-j'],              qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['std-j'],              qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['std-j'],              qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['std-j'],              qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'matching',        uses: ['std-j'],              qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['steiner-tm'],         qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['steiner-tm'],         qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['steiner-tm'],         qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['steiner-tm'],         qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['steiner-tm'],         qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['e-rot'],              qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['e-rot'],              qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['e-rot'],              qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['e-rot'],              qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['e-rot'],              qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['drehimpuls'],         qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['drehimpuls'],         qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['drehimpuls'],         qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['drehimpuls'],         qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['drehimpuls'],         qty: 1 },
            ],
          },
          content: String.raw`Für **Rotation** eines starren Körpers gilt das Analogon zu $F = m \cdot a$:

$$M = J \cdot \alpha$$

$J$ ist das **Massenträgheitsmoment** (Einheit: kg·m²), $\alpha = \dot\omega$ die **Winkelbeschleunigung**.

**Wichtige Trägheitsmomente:**
| Körper | Achse | $J$ |
|---|---|---|
| Vollzylinder (m, R) | Längsachse | $\tfrac{1}{2}mR^2$ |
| Dünner Stab (m, L) | Schwerpunkt | $\tfrac{1}{12}mL^2$ |
| Punktmasse m in Abstand r | — | $mr^2$ |

**Steinerscher Anteil:** $J_A = J_S + m \cdot d^2$ (Parallelverschiebung der Achse um Abstand $d$).`,
          exercises: [
            { type: 'number-input', question: 'Vollzylinder: m = 2 kg, R = 0,1 m. Massenträgheitsmoment J?', correctValue: 0.01, tolerance: 0.001, unit: 'kg·m²', explanation: '**Ansatz:** Vollzylinder um die Längsachse: $J = \\tfrac{1}{2}mR^2$.\n\n**Rechnung:** $R^2 = 0{,}1^2 = 0{,}01\\,\\text{m}^2$. $J = \\tfrac{1}{2}\\cdot 2\\cdot 0{,}01 = 0{,}01\\,\\text{kg}\\cdot\\text{m}^2$.\n\n**Probe:** Einheiten: $\\text{kg}\\cdot\\text{m}^2$. ✓ Größenordnung für einen kleinen Zylinder (Masse $2\\,\\text{kg}$, Radius $10\\,\\text{cm}$) plausibel.\n\n**Typischer Fehler:** $R$ statt $R^2$ einsetzen ($\\tfrac{1}{2}\\cdot 2\\cdot 0{,}1 = 0{,}1$) oder Faktor $\\tfrac{1}{2}$ vergessen und Hohlzylinderformel $mR^2 = 0{,}02$ rechnen.', hints: ['$J_\\text{Vollzylinder} = \\tfrac{1}{2}\\cdot m\\cdot R^2$', '$R^2 = 0{,}1^2 = 0{,}01\\,\\text{m}^2$', '$\\tfrac{1}{2}\\cdot 2\\cdot 0{,}01 = 0{,}01\\,\\text{kg}\\cdot\\text{m}^2$'] },
            { type: 'number-input', question: 'Ein Motor erzeugt M = 50 Nm. Trägheitsmoment J = 0,5 kg·m². Winkelbeschleunigung α?', correctValue: 100, tolerance: 0.1, unit: 'rad/s²', explanation: '**Ansatz:** Drallsatz (Rotationsanalog zu $F = ma$): $M = J\\alpha$, also $\\alpha = M/J$.\n\n**Rechnung:** $\\alpha = 50/0{,}5 = 100\\,\\text{rad/s}^2$.\n\n**Probe:** Einheiten: $\\text{Nm}/(\\text{kg}\\cdot\\text{m}^2) = 1/\\text{s}^2 = \\text{rad/s}^2$. ✓ Bei konstantem Moment dauert das Erreichen von $\\omega = 100\\,\\text{rad/s}$ genau eine Sekunde.\n\n**Typischer Fehler:** $\\alpha = M\\cdot J = 25$ rechnen (Multiplikation statt Division) — Analogie zu $a = F/m$ vergessen.', hints: ['Drallsatz: $M = J\\alpha \\Rightarrow \\alpha = M/J$', '$J = 0{,}5\\,\\text{kg}\\cdot\\text{m}^2$, $M = 50\\,\\text{Nm}$', '$50/0{,}5 = 100\\,\\text{rad/s}^2$'] },
            { type: 'number-input', question: '[PRÜFUNG] Stab (m = 6 kg, L = 1 m). J um Schwerpunkt = mL²/12. Jetzt Achse am Ende: J_Ende per Steiner? (J_Ende = J_S + m·d²)', correctValue: 2, tolerance: 0.01, unit: 'kg·m²', explanation: '**Ansatz:** Parallelachsenverschiebung (Steiner): $J_A = J_S + m d^2$. Schwerpunkt liegt in der Stabmitte, Abstand zur Endachse $d = L/2$.\n\n**Rechnung:** $J_S = 6\\cdot 1^2/12 = 0{,}5\\,\\text{kg}\\cdot\\text{m}^2$. $d = 0{,}5\\,\\text{m}$, $d^2 = 0{,}25\\,\\text{m}^2$. Steineranteil: $6\\cdot 0{,}25 = 1{,}5\\,\\text{kg}\\cdot\\text{m}^2$. $J_\\text{Ende} = 0{,}5 + 1{,}5 = 2\\,\\text{kg}\\cdot\\text{m}^2$.\n\n**Probe:** Direkt aus Formelsammlung: Stab am Ende $= \\tfrac{1}{3}mL^2 = 6/3 = 2\\,\\text{kg}\\cdot\\text{m}^2$. ✓ Übereinstimmung — Steiner liefert genau den bekannten Faktor $\\tfrac{1}{3}$.\n\n**Typischer Fehler:** $d = L = 1\\,\\text{m}$ einsetzen (ganze Stablänge statt Abstand zum Schwerpunkt). Das gäbe $J = 0{,}5 + 6 = 6{,}5$ — dreimal zu groß.', hints: ['$J_S = \\tfrac{1}{12}mL^2$', 'Steiner: $J_\\text{Ende} = J_S + m\\cdot d^2$', '$d = L/2$ (Abstand Schwerpunkt ↔ Endachse)'] },
          ],
        },
      ],
    },
    // ── Unit 3: Prüfungsaufgaben TM ─────────────────────────────────────
    {
      id: 'mech-unit-3',
      title: 'Prüfungsaufgaben',
      description: 'Klausurrelevante Aufgaben zur Technischen Mechanik.',
      lessons: [
        {
          id: 'mech-3-1',
          title: 'Statik: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Komplexe Gleichgewichtsaufgaben lösen', 'Mehrere Kräfte und Momente kombinieren'],
          subGoals: [
            { label: 'Freikörperbild: alle äußeren Kräfte und Momente einzeichnen', examRelevance: 'hoch' },
            { label: 'Drei Gleichgewichtsbedingungen in 2D: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_P = 0$', examRelevance: 'hoch' },
            { label: 'Lagertypen: Loslager (1 Reaktion), Festlager (2), Einspannung (3)', examRelevance: 'hoch' },
            { label: 'Momentensumme um geschickten Punkt (oft Auflager) eliminiert Unbekannte', examRelevance: 'hoch' },
            { label: 'Statisch bestimmt: Anzahl Gleichungen = Anzahl Reaktionen', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-1', concepts: ['fkb', 'gleichgew-2d', 'lagersymbole'] },
              { lessonId: 'mech-1-2', concepts: ['moment-formel', 'bezugspunkt'] },
            ],
            concepts: [
              { id: 'fkb-pr',         title: 'Freikörperbild — alle äußeren Kräfte/Momente',                                       dependsOn: [] },
              { id: 'gleichgew-3-pr', title: '3 Bedingungen 2D: $\\sum F_x=0,\\sum F_y=0,\\sum M_P=0$',                            dependsOn: ['fkb-pr'] },
              { id: 'lagertypen-pr',  title: 'Loslager (1), Festlager (2), Einspannung (3 Reaktionen)',                              dependsOn: [] },
              { id: 'momenten-trick', title: 'Momentensumme um geschickten Punkt eliminiert Unbekannte',                              dependsOn: ['gleichgew-3-pr'] },
              { id: 'statisch-best',  title: 'Statisch bestimmt: $\\#$ Gleichungen $=\\#$ Reaktionen',                                dependsOn: ['lagertypen-pr', 'gleichgew-3-pr'] },
            ],
            subGoalConcepts: {
              0: ['fkb-pr'],
              1: ['gleichgew-3-pr'],
              2: ['lagertypen-pr'],
              3: ['momenten-trick'],
              4: ['statisch-best'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['fkb-pr'],              qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fkb-pr'],              qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'multiple-choice', uses: ['fkb-pr'],              qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fkb-pr'],              qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'multiple-choice', uses: ['fkb-pr'],              qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['gleichgew-3-pr'],      qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gleichgew-3-pr'],      qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['gleichgew-3-pr'],      qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gleichgew-3-pr'],      qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['gleichgew-3-pr'],      qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['lagertypen-pr'],       qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['lagertypen-pr'],       qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'multiple-choice', uses: ['lagertypen-pr'],       qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['lagertypen-pr'],       qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'matching',        uses: ['lagertypen-pr'],       qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['momenten-trick'],      qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['momenten-trick'],      qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['momenten-trick'],      qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['momenten-trick'],      qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['momenten-trick'],      qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['statisch-best'],       qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['statisch-best'],       qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'multiple-choice', uses: ['statisch-best'],       qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['statisch-best'],       qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'multiple-choice', uses: ['statisch-best'],       qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Statik-Aufgaben auf Klausurniveau**

**Typisches Vorgehen:**
1. Freikörperbild zeichnen — alle Kräfte und Momente eintragen
2. Koordinatensystem wählen (oft: x horizontal, y vertikal)
3. Drei Gleichgewichtsbedingungen aufstellen: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M_P = 0$
4. Gleichungssystem lösen — oft liefert Momentengleichung direkt eine Unbekannte

**Häufige Fehler in Klausuren:**
- Vorzeichen beim Moment falsch (Drehsinn verwechselt)
- Lagerreaktionen vergessen (z.B. Horizontalkraft am Loslager)
- Hebelarm nicht senkrecht zur Kraftlinie gemessen`,
          visualization: {
            title: 'Lagertypen im Überblick', visualizationId: 'lager-illustration', params: {},
          },
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Balken (4 m), Festlager links, Loslager rechts. Einzellast F = 600 N bei x = 1 m vom linken Lager. Berechne R_B (rechtes Lager).', correctValue: 150, tolerance: 1, unit: 'N', explanation: 'ΣM_A = 0: F·1 = R_B·4 → R_B = 600·1/4 = 150 N.', hints: ['Momentengleichung um Punkt A aufstellen: ΣM_A = 0', 'F·a = R_B·L', 'R_B = F·a/L = 600·1/4 = 150 N'] },
            { type: 'number-input', question: '[PRÜFUNG] Zwei Kräfte $F_1$ = 5 kN (30° zur Horizontalen) und $F_2$ = 3 kN (vertikal). Betrag der Resultierenden? Runde auf eine Dezimalstelle.', correctValue: 7.0, tolerance: 0.1, unit: 'kN', explanation: 'Zerlege zuerst $F_1$: Rx = 5·cos30° = 4,33 kN und Ry = 5·sin30° + 3 = 5,5 kN. Dann R = $\\sqrt{4{,}33^2 + 5{,}5^2}$ = $\\sqrt{49{,}0}$ ≈ 7,0 kN. Typischer Fehler: die vertikale 3-kN-Kraft nicht zu Ry addieren.', hints: ['Zerlege $F_1$ in horizontale und vertikale Komponente.', 'Addiere $F_2$ zur vertikalen Komponente.', '$R = \\sqrt{R_x^2 + R_y^2}$.'] },
            { type: 'multiple-choice', question: '[PRÜFUNG] Ein Loslager kann aufnehmen:', options: ['Kräfte in alle Richtungen + Moment', 'Nur eine Kraft senkrecht zur Auflagerfläche', 'Kräfte in x und y, aber kein Moment', 'Nur ein Moment'], correctIndex: 1, explanation: 'Ein Loslager (Gleitlager) nimmt nur eine Kraft senkrecht zur Gleitfläche auf.', hints: ['Loslager: eine Reaktionskraft, senkrecht zur Gleitfläche.', 'Festlager: zwei Reaktionskräfte (x und y).', 'Einspannung: Kraft + Moment = 3 Reaktionen.'], wrongAnswerExplanations: { 0: 'Das beschreibt eine Einspannung (3 Reaktionen: $F_x$, $F_y$, $M$). Ein Loslager hat nur 1 Reaktion.', 2: 'Das beschreibt ein Festlager (2 Kraftreaktionen, kein Moment). Das Loslager hat nur 1 Reaktion senkrecht zur Gleitfläche.', 3: 'Ein Moment nimmt nur die Einspannung auf. Ein Loslager überträgt ausschließlich eine Normalkraft zur Gleitfläche.' } },
            { type: 'number-input', question: '[PRÜFUNG] Kragbalken (Einspannung links), Länge 2 m, Einzellast F = 500 N am freien Ende. Einspannmoment?', correctValue: 1000, tolerance: 1, unit: 'Nm', explanation: 'M = F·L = 500·2 = 1000 Nm.', hints: ['Kragbalken: Einspannung nimmt Moment auf.', 'Gleichgewicht: M_E = F · L (Momentengleichung um Einspannung).', 'M_E = 500 · 2 = 1000 Nm'] },
          ],
        },
        {
          id: 'mech-3-2',
          title: 'Dynamik: Prüfungsaufgaben',
          type: 'explanation-intuitive',
          learningGoals: ['Newton-Aufgaben mit Reibung lösen', 'Energieerhaltung anwenden'],
          subGoals: [
            { label: 'Energieerhaltung mit Reibung: $E_1 = E_2 + W_R$ mit $W_R = F_R \\cdot s$', examRelevance: 'hoch' },
            { label: 'Elastischer Stoß gleicher Massen: Geschwindigkeiten tauschen', examRelevance: 'hoch' },
            { label: 'Arbeitssatz: $\\sum W_i = \\Delta E_{\\text{kin}}$ (Gesamtarbeit = Änderung kin. Energie)', examRelevance: 'hoch' },
            { label: 'Bei freiem Fall aus Höhe $h$: $v = \\sqrt{2gh}$', examRelevance: 'hoch' },
            { label: 'Reibungskraft am Boden: $F_R = \\mu m g$, Nettokraft $F - F_R$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-4', concepts: ['coulomb'] },
              { lessonId: 'mech-2-2', concepts: ['arbeit', 'e-kin', 'energie-erhalt'] },
              { lessonId: 'mech-2-3', concepts: ['freier-fall', 'impuls-erh'] },
            ],
            concepts: [
              { id: 'energie-mit-r', title: 'Energieerhaltung mit Reibung: $E_1=E_2+W_R$, $W_R=F_R\\cdot s$',                       dependsOn: [] },
              { id: 'stoss-elast',   title: 'Elastischer Stoß gleicher Massen: Geschwindigkeiten tauschen',                          dependsOn: [] },
              { id: 'arbeitssatz',   title: 'Arbeitssatz $\\sum W_i=\\Delta E_{\\text{kin}}$',                                       dependsOn: [] },
              { id: 'fall-2gh',      title: 'Freier Fall aus $h$: $v=\\sqrt{2gh}$',                                                   dependsOn: [] },
              { id: 'reibung-boden', title: 'Reibung am Boden $F_R=\\mu m g$, Nettokraft $F-F_R$',                                  dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['energie-mit-r'],
              1: ['stoss-elast'],
              2: ['arbeitssatz'],
              3: ['fall-2gh'],
              4: ['reibung-boden'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['energie-mit-r'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['energie-mit-r'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['energie-mit-r'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['energie-mit-r'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['energie-mit-r'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['stoss-elast'],            qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['stoss-elast'],            qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['stoss-elast'],            qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['stoss-elast'],            qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['stoss-elast'],            qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['arbeitssatz'],            qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['arbeitssatz'],            qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['arbeitssatz'],            qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['arbeitssatz'],            qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['arbeitssatz'],            qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['fall-2gh'],               qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['fall-2gh'],               qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['fall-2gh'],               qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['fall-2gh'],               qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['fall-2gh'],               qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['reibung-boden'],          qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['reibung-boden'],          qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['reibung-boden'],          qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['reibung-boden'],          qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['reibung-boden'],          qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Dynamik-Aufgaben**

**Energieerhaltung:** $E_{kin,1} + E_{pot,1} = E_{kin,2} + E_{pot,2} + W_{Reibung}$

**Impulserhaltung:** $m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$

**Arbeitssatz:** $\sum W = \Delta E_{kin}$`,
          visualization: {
            title: 'Feder-Masse-Dämpfer', visualizationId: 'spring-mass-damper', params: {},
          },
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Ein 2 kg Block rutscht reibungsfrei eine 3 m hohe Rampe hinunter. Geschwindigkeit unten? (g = 9,81)', correctValue: 7.67, tolerance: 0.1, unit: 'm/s', explanation: '$\\frac{1}{2}mv^2$ = mgh → $v = \\sqrt{2gh}$ = $\\sqrt{2 \\cdot 9{,}81 \\cdot 3}$ = $\\sqrt{58{,}86}$ ≈ 7,67 m/s.', hints: ['Energieerhaltung: E_pot → E_kin (reibungsfrei)', 'mgh = ½mv² → v = √(2gh)', '√(2·9,81·3) = √58,86 ≈ 7,67 m/s'] },
            { type: 'number-input', question: '[PRÜFUNG] Ein 5 kg Block wird mit μ = 0,3 auf ebenem Boden mit F = 40 N horizontal gezogen. Beschleunigung?', correctValue: 5.06, tolerance: 0.1, unit: 'm/s²', explanation: 'F_R = μ·m·g = 0,3·5·9,81 = 14,72 N. a = (F - F_R)/m = (40 - 14,72)/5 = 5,06 $m/s^2$.', hints: ['Reibkraft: F_R = μ·F_N = μ·m·g', 'Nettokraft: F_netto = F − F_R', 'a = F_netto / m'] },
            { type: 'number-input', question: '[PRÜFUNG] Elastischer Stoß: Ball 1 (m=2kg, v=3m/s) trifft ruhenden Ball 2 (m=2kg). Geschwindigkeit von Ball 1 nach Stoß?', correctValue: 0, tolerance: 0.01, unit: 'm/s', explanation: 'Bei elastischem Stoß gleicher Massen: Ball 1 steht still, Ball 2 übernimmt die gesamte Geschwindigkeit.', hints: ['Elastischer Stoß gleicher Massen: Geschwindigkeiten tauschen.', 'Ball 1 übergibt seine Geschwindigkeit komplett an Ball 2.', 'v₁_nach = 0, v₂_nach = v₁_vor'] },
          ],
        },
        {
          id: 'mech-3-3',
          title: 'Reibung, Kinematik & Schwingungen',
          type: 'explanation-intuitive',
          estimatedMinutes: 22,
          learningGoals: ['Reibungs- und Kinematikaufgaben kombinieren', 'Schwingungsparameter aus Systemdaten ableiten'],
          subGoals: [
            { label: 'Geneigte Ebene: gleiten wenn $F_H > F_{R,\\max}$, d.h. $\\tan\\alpha > \\mu_0$', examRelevance: 'hoch' },
            { label: 'Bremsweg-Formel: $s = v_0^2/(2a)$ bei Bremsbeschleunigung $a$', examRelevance: 'hoch' },
            { label: 'Eigenfrequenz Feder-Masse: $\\omega_0 = \\sqrt{c/m}$', examRelevance: 'hoch' },
            { label: 'Bei Parallelschaltung Federn: $c_\\text{ges} = c_1 + c_2$; Serie: $1/c_\\text{ges} = 1/c_1 + 1/c_2$', examRelevance: 'mittel' },
            { label: 'Rollen ohne Rutschen: $v = r\\omega$, kinetische Energie $= \\tfrac{1}{2}m v^2 + \\tfrac{1}{2}J\\omega^2$', examRelevance: 'hoch' },
          ],
          blueprint: {
            prerequisites: [
              { lessonId: 'mech-1-4', concepts: ['selbsthemmung', 'schiefe-zerleg-mech'] },
              { lessonId: 'mech-2-3', concepts: ['kin-glm-besch'] },
              { lessonId: 'mech-2-4', concepts: ['eigen-omega'] },
              { lessonId: 'mech-2-5', concepts: ['e-rot'] },
            ],
            concepts: [
              { id: 'gleitkrit',     title: 'Geneigte Ebene: gleiten wenn $\\tan\\alpha>\\mu_0$',                                 dependsOn: [] },
              { id: 'bremsweg',      title: 'Bremsweg $s=v_0^2/(2a)$',                                                              dependsOn: [] },
              { id: 'eigen-fm',      title: 'Feder-Masse Eigenfrequenz $\\omega_0=\\sqrt{c/m}$',                                   dependsOn: [] },
              { id: 'feder-schalt',  title: 'Federn parallel $c=c_1+c_2$; Serie $1/c=1/c_1+1/c_2$',                                  dependsOn: ['eigen-fm'] },
              { id: 'rollen',        title: 'Rollen ohne Rutschen $v=r\\omega$, $E_{\\text{kin}}=\\tfrac12 mv^2+\\tfrac12 J\\omega^2$', dependsOn: [] },
            ],
            subGoalConcepts: {
              0: ['gleitkrit'],
              1: ['bremsweg'],
              2: ['eigen-fm'],
              3: ['feder-schalt'],
              4: ['rollen'],
            },
            taskPlan: [
              { subGoal: 0, stage: 'recognize',         type: 'true-false',      uses: ['gleitkrit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-guided',      type: 'multiple-choice', uses: ['gleitkrit'],          qty: 1 },
              { subGoal: 0, stage: 'apply-independent', type: 'number-input',    uses: ['gleitkrit'],          qty: 1 },
              { subGoal: 0, stage: 'error-analysis',    type: 'multiple-choice', uses: ['gleitkrit'],          qty: 1 },
              { subGoal: 0, stage: 'transfer',          type: 'number-input',    uses: ['gleitkrit'],          qty: 1, note: '[PRÜFUNG]' },
              { subGoal: 1, stage: 'recognize',         type: 'true-false',      uses: ['bremsweg'],           qty: 1 },
              { subGoal: 1, stage: 'apply-guided',      type: 'multiple-choice', uses: ['bremsweg'],           qty: 1 },
              { subGoal: 1, stage: 'apply-independent', type: 'number-input',    uses: ['bremsweg'],           qty: 1 },
              { subGoal: 1, stage: 'error-analysis',    type: 'multiple-choice', uses: ['bremsweg'],           qty: 1 },
              { subGoal: 1, stage: 'transfer',          type: 'number-input',    uses: ['bremsweg'],           qty: 1 },
              { subGoal: 2, stage: 'recognize',         type: 'true-false',      uses: ['eigen-fm'],           qty: 1 },
              { subGoal: 2, stage: 'apply-guided',      type: 'multiple-choice', uses: ['eigen-fm'],           qty: 1 },
              { subGoal: 2, stage: 'apply-independent', type: 'number-input',    uses: ['eigen-fm'],           qty: 1 },
              { subGoal: 2, stage: 'error-analysis',    type: 'multiple-choice', uses: ['eigen-fm'],           qty: 1 },
              { subGoal: 2, stage: 'transfer',          type: 'number-input',    uses: ['eigen-fm'],           qty: 1 },
              { subGoal: 3, stage: 'recognize',         type: 'true-false',      uses: ['feder-schalt'],       qty: 1 },
              { subGoal: 3, stage: 'apply-guided',      type: 'multiple-choice', uses: ['feder-schalt'],       qty: 1 },
              { subGoal: 3, stage: 'apply-independent', type: 'number-input',    uses: ['feder-schalt'],       qty: 1 },
              { subGoal: 3, stage: 'error-analysis',    type: 'multiple-choice', uses: ['feder-schalt'],       qty: 1 },
              { subGoal: 3, stage: 'transfer',          type: 'number-input',    uses: ['feder-schalt'],       qty: 1 },
              { subGoal: 4, stage: 'recognize',         type: 'true-false',      uses: ['rollen'],             qty: 1 },
              { subGoal: 4, stage: 'apply-guided',      type: 'multiple-choice', uses: ['rollen'],             qty: 1 },
              { subGoal: 4, stage: 'apply-independent', type: 'number-input',    uses: ['rollen'],             qty: 1 },
              { subGoal: 4, stage: 'error-analysis',    type: 'multiple-choice', uses: ['rollen'],             qty: 1 },
              { subGoal: 4, stage: 'transfer',          type: 'number-input',    uses: ['rollen'],             qty: 1 },
            ],
          },
          content: String.raw`**[PRÜFUNG] Reibung, Kinematik & Schwingungen**

**Reibung auf geneigter Ebene:**
$$F_H = mg\sin\alpha, \qquad F_{R,\text{max}} = \mu \cdot mg\cos\alpha$$
Gleiten, wenn $F_H > F_{R,\text{max}}$.

**Kinematik (Wurf- / Bremsaufgaben):**
$$v^2 = v_0^2 - 2a \cdot s \quad \text{(Bremsweg)}$$

**Schwingungen:**
$$\omega_0 = \sqrt{c/m}, \qquad T = 2\pi/\omega_0, \qquad f_0 = \omega_0/(2\pi)$$

**Drallsatz:** $M = J \cdot \alpha$, $J_\text{Zylinder} = \tfrac{1}{2}mR^2$.`,
          exercises: [
            { type: 'number-input', question: '[PRÜFUNG] Block (m = 8 kg) auf Ebene α = 20°, μ = 0,25. Gleitet er? Falls ja, Nettobeschleunigung a in m/s²? (g = 9,81)', correctValue: 1.06, tolerance: 0.1, unit: 'm/s²', explanation: 'F_N = 8·9,81·cos20° = 73,7 N. F_R = 0,25·73,7 = 18,43 N. F_H = 8·9,81·sin20° = 26,84 N. F_H > F_R → gleitet. a = (F_H − F_R)/m = (26,84−18,43)/8 = 8,41/8 ≈ 1,05 m/s².', hints: ['F_N = m·g·cosα, F_H = m·g·sinα', 'Gleiten wenn F_H > μ·F_N', 'a = (F_H − F_R)/m'] },
            { type: 'number-input', question: '[PRÜFUNG] Bremsung: v0 = 72 km/h, a = −5 m/s². Bremsweg s?', correctValue: 40, tolerance: 0.5, unit: 'm', explanation: 'v0 = 72/3,6 = 20 m/s. v² = v0² − 2·a·s → 0 = 400 − 10s → s = 40 m.', hints: ['v0 in m/s umrechnen: /3,6', 'v² = v0² − 2|a|·s', 's = v0²/(2|a|)'] },
            { type: 'number-input', question: '[PRÜFUNG] Maschine: Schwungscheibe m = 20 kg, R = 0,3 m (Vollzylinder). Anlaufmoment M = 9 Nm. Winkelbeschleunigung α?', correctValue: 10, tolerance: 0.2, unit: 'rad/s²', explanation: 'J = ½·m·R² = ½·20·0,09 = 0,9 kg·m². α = M/J = 9/0,9 = 10 rad/s².', hints: ['J = ½·m·R²', 'α = M/J', '½·20·0,3² = 0,9 kg·m²'] },
            { type: 'number-input', question: '[PRÜFUNG] Feder-Masse-System: m = 0,25 kg, c = 100 N/m. Schwingungsfrequenz f0 in Hz? (Runde auf eine Dezimalstelle)', correctValue: 3.2, tolerance: 0.1, unit: 'Hz', explanation: 'ω₀ = √(100/0,25) = √400 = 20 rad/s. f0 = ω₀/(2π) = 20/(2π) ≈ 3,18 ≈ 3,2 Hz.', hints: ['ω₀ = √(c/m) = 20 rad/s', 'f0 = ω₀/(2π)', '20/(2π) ≈ 3,18'] },
          ],
        },
      ],
    },
  ],
}

