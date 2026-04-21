// ── Maschinenbau-Kernfächer: kompakter Curriculum-Scaffold ──────────────────
// Struktur bleibt kompatibel mit dem bestehenden Lesson-/Exercise-Engine-Shape.

function exerciseId(lessonId, index) {
  return `ex-${lessonId}-${String.fromCharCode(97 + index)}`
}

function expandExplanation(lesson) {
  return `${lesson.content}

**Arbeitsmuster für Studium und Prüfung:**
1. Markiere zuerst **gesucht** und **gegeben** samt Einheiten.
2. Zeichne bei Kräften/Strömungen/Systemen eine kleine Skizze oder ein Freikörperbild.
3. Wähle den Ansatz erst danach: Gleichgewicht, Energie, Stoffgesetz, Bilanz oder Geometrie.
4. Rechne vor dem Einsetzen in passende SI- oder Aufgaben-Einheiten um.
5. Prüfe am Ende Vorzeichen, Größenordnung und Einheit.

**Typische Fehler:** Formel ohne Einheitenkontrolle einsetzen, Vektor-/Vorzeichenrichtung übersehen, Prozentwerte nicht als Dezimalzahl schreiben oder eine idealisierte Formel außerhalb ihrer Annahmen verwenden.`
}

function buildTopic(def) {
  const allLessons = def.units.flatMap((unit) => unit.lessons)
  const nextById = Object.fromEntries(allLessons.map((lesson, index) => [lesson.id, allLessons[index + 1]?.id ?? null]))

  const units = def.units.map((unit, unitIndex) => {
    const exercises = {}
    const lessons = unit.lessons.map((lesson, lessonIndex) => {
      const exerciseSteps = lesson.exercises.map((exercise, exerciseIndex) => {
        const id = exerciseId(lesson.id, exerciseIndex)
        exercises[id] = {
          id,
          lessonId: lesson.id,
          isMasteryCheck: exerciseIndex === lesson.exercises.length - 1,
          hints: exercise.hints ?? [],
          ...exercise,
        }
        return {
          id: `${lesson.id}-s${exerciseIndex + 3}`,
          type: exerciseIndex === lesson.exercises.length - 1 ? 'mastery-check' : 'exercise',
          title: exerciseIndex === lesson.exercises.length - 1 ? 'Verständnischeck' : `Aufgabe ${exerciseIndex + 1}`,
          exerciseRef: id,
        }
      })

      return {
        id: lesson.id,
        unitId: unit.id,
        title: lesson.title,
        order: lessonIndex + 1,
        estimatedMinutes: lesson.estimatedMinutes ?? 12,
        learningGoals: lesson.learningGoals,
        ...(lesson.subGoals ? { subGoals: lesson.subGoals } : {}),
        prerequisites: lesson.prerequisites ?? [],
        nextLessonId: nextById[lesson.id],
        steps: [
          {
            id: `${lesson.id}-s1`,
            type: lesson.type ?? 'explanation-formal',
            title: lesson.explanationTitle ?? lesson.title,
            content: expandExplanation(lesson),
          },
          ...(lesson.visualization ? [{
            id: `${lesson.id}-s2`,
            type: 'visualization',
            title: lesson.visualization.title,
            visualizationId: lesson.visualization.visualizationId,
            params: lesson.visualization.params ?? {},
          }] : []),
          ...exerciseSteps,
        ],
      }
    })

    return {
      id: unit.id,
      title: unit.title,
      order: unitIndex + 1,
      description: unit.description,
      ...(unit.unitGoals ? { unitGoals: unit.unitGoals } : {}),
      lessons,
      exercises,
    }
  })

  return { ...def.topic, units }
}

const topicDefinitions = [
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
                hints: ['Immer von der Zieleinheit aus zurück denken.'],
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
            content: String.raw`**Coulombsches Reibgesetz:**

$$F_R = \mu \cdot F_N$$

$\mu$ ist der Reibwert (dimensionslos), $F_N$ die Normalkraft. Man unterscheidet:
- **Haftreibung** (statisch): $\mu_0 > \mu$ — tritt auf, solange kein Gleiten stattfindet
- **Gleitreibung** (kinetisch): $\mu$ — tritt beim Gleiten auf

**Vorgehen bei geneigter Ebene:** Zuerst $F_N = m g \cos\alpha$ bestimmen, dann $F_{R,\text{max}} = \mu_0 F_N$ mit Hangabtriebskraft $F_H = m g \sin\alpha$ vergleichen.`,
            exercises: [
              { type: 'number-input', question: 'Ein Block (m = 10 kg) liegt auf einer horizontalen Fläche (μ = 0,3, g = 9,81 m/s²). Reibkraft beim Gleiten?', correctValue: 29.43, tolerance: 0.1, unit: 'N', explanation: 'F_N = m·g = 10·9,81 = 98,1 N. F_R = μ·F_N = 0,3·98,1 = 29,43 N.', hints: ['Normalkraft auf ebener Fläche: F_N = m·g', 'F_R = μ·F_N', 'μ·F_N einsetzen'] },
              { type: 'true-false', statement: 'Der Haftreibwert ist in der Regel größer als der Gleitreibwert.', correct: true, explanation: 'μ_0 > μ: Zum Losreißen braucht man mehr Kraft als zum Gleiterhalten.', hints: ['Haftreibwert μ_0 > Gleitreibwert μ.', 'Zum Losreißen braucht man mehr Kraft als zum Gleiterhalten.', 'Anlaufkraft > Gleithaltekraft.'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Block (m = 5 kg) auf geneigter Ebene α = 30°, Gleitreibwert μ = 0,3, g = 9,81. Reibkraft beim Gleiten in N (gerundet auf ganze Zahlen)?', options: ['13 N', '15 N', '20 N', '25 N'], correctIndex: 0, explanation: 'F_N = m·g·cos30° = 5·9,81·0,866 = 42,47 N. F_R = 0,3·42,47 ≈ 12,7 N ≈ 13 N.', hints: ['F_N = m·g·cosα auf geneigter Ebene', 'F_R = μ · F_N', 'cos30° ≈ 0,866'], wrongAnswerExplanations: { 1: 'Hier wurde vermutlich $F_N = m \\cdot g = 49{,}05$ N angenommen (horizontale Fläche). Auf geneigter Ebene gilt aber $F_N = m \\cdot g \\cdot \\cos\\alpha$, also $\\mu \\cdot m \\cdot g \\cdot \\cos(30°) \\approx 13$ N.', 2: 'Falsche Winkelfunktion: $\\sin(30°) = 0{,}5$ statt $\\cos(30°) = 0{,}866$ eingesetzt führt zu $0{,}3 \\cdot 5 \\cdot 9{,}81 \\cdot 0{,}5 \\approx 7{,}4$ N — nicht 20 N; 20 N deutet auf Vernachlässigung von $\\cos\\alpha$ und fehlerhafte Zwischenrechnung hin.', 3: 'Das wäre ohne Neigung und mit gerundetem $g = 10$: $0{,}5 \\cdot 50 = 25$. Korrekt ist $F_R = \\mu \\cdot m \\cdot g \\cdot \\cos\\alpha \\approx 13$ N.' } },
            ],
          },
          {
            id: 'mech-1-5',
            title: 'Schwerpunkt',
            estimatedMinutes: 14,
            learningGoals: ['Schwerpunkt zusammengesetzter Flächen berechnen', 'Flächenschwerpunkt als Summenregel anwenden'],
            content: String.raw`Der **Schwerpunkt** (Massenmittelpunkt) eines Systems diskreter Massen liegt bei:

$$x_S = \frac{\sum m_i \cdot x_i}{\sum m_i}, \qquad y_S = \frac{\sum m_i \cdot y_i}{\sum m_i}$$

Für zusammengesetzte Flächen (homogenes Material) ersetzt man $m_i \to A_i$:

$$x_S = \frac{\sum A_i \cdot x_{S,i}}{\sum A_i}$$

**Loch = negative Fläche:** Ein Ausschnitt wird als negatives Teilgebiet subtrahiert.`,
            exercises: [
              { type: 'number-input', question: 'Zwei Massen: m1 = 3 kg bei x1 = 2 m, m2 = 1 kg bei x2 = 6 m. Schwerpunkt x_S?', correctValue: 3, tolerance: 0.01, unit: 'm', explanation: 'x_S = (3·2 + 1·6)/(3+1) = (6+6)/4 = 12/4 = 3 m.', hints: ['x_S = Σ(m·x)/Σm', 'Zähler: 3·2+1·6=12', 'Nenner: 4'] },
              { type: 'true-false', statement: 'Ein symmetrischer Körper hat seinen Schwerpunkt auf der Symmetrieachse.', correct: true, explanation: 'Symmetrie bedeutet, dass sich die Beiträge beider Hälften aufheben.', hints: ['Symmetrie bedeutet: Massenverteilung auf beiden Seiten ist gleich.', 'Beiträge links und rechts heben sich in der Schwerpunktformel auf.', 'Gleichmäßige Massenverteilung auf beiden Seiten.'] },
              { type: 'number-input', question: '[PRÜFUNG] L-Profil aus zwei Rechtecken: R1 (20×80 mm, x_{S1}=10 mm) und R2 (60×20 mm, x_{S2}=50 mm). Schwerpunkt x_S des L-Profils?', correctValue: 27.1, tolerance: 0.5, unit: 'mm', explanation: 'A1 = 20·80 = 1600 mm², A2 = 60·20 = 1200 mm². x_S = (A1·x1 + A2·x2)/(A1+A2) = (1600·10 + 1200·50)/2800 = 76000/2800 ≈ 27,1 mm.', hints: ['x_S = Σ(A_i·x_{S,i})/ΣA_i', 'Flächen berechnen: A = b·h', 'Schwerpunkte der Teilrechtecke einsetzen'] },
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
              { type: 'number-input', question: 'Feder-Masse-System: c = 400 N/m, m = 1 kg. Eigenkreisfrequenz ω₀?', correctValue: 20, tolerance: 0.01, unit: 'rad/s', explanation: 'ω₀ = √(c/m) = √(400/1) = √400 = 20 rad/s.', hints: ['ω₀ = √(c/m)', 'c/m = 400/1 = 400', '√400 = 20 rad/s'] },
              { type: 'number-input', question: 'Masse m = 4 kg, Federsteifigkeit c = 100 N/m. Schwingungsdauer T?', correctValue: 1.257, tolerance: 0.01, unit: 's', explanation: 'ω₀ = √(100/4) = 5 rad/s. T = 2π/ω₀ = 2π/5 ≈ 1,257 s.', hints: ['ω₀ = √(c/m) = 5 rad/s', 'T = 2π/ω₀', '2π/5 ≈ 1,257'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Resonanz tritt auf, wenn die Erregerfrequenz Ω ...', options: ['gleich der Eigenfrequenz ω₀ ist', 'doppelt so groß wie ω₀ ist', 'null ist', 'größer als 100 rad/s ist'], correctIndex: 0, explanation: 'Resonanz tritt bei Ω = ω₀ auf. Bei ungedämpften Systemen wächst die Amplitude dabei theoretisch unbegrenzt an.', hints: ['Resonanz tritt auf wenn Erregerfrequenz Ω = Eigenfrequenz ω₀.', 'ω₀ = √(c/m) ist die Eigenkreisfrequenz.', 'Bei ungedämpftem System → Amplitude → ∞'], wrongAnswerExplanations: { 1: '$\\Omega = 2\\omega_0$ kann bei nichtlinearen Systemen zu subharmonischer Resonanz führen, aber die klassische (Haupt-)Resonanz ist bei $\\Omega = \\omega_0$.', 2: '$\\Omega = 0$ entspricht einer statischen Kraft — keine Schwingung, keine Resonanz. Bei $\\Omega \\to 0$ geht die Amplitude gegen den statischen Wert $F_0/c$.', 3: 'Ein absoluter Zahlenwert in rad/s ist bedeutungslos ohne Vergleich zur Eigenfrequenz. Entscheidend ist das Verhältnis $\\Omega/\\omega_0$, nicht der Absolutwert.' } },
            ],
          },
          {
            id: 'mech-2-5',
            title: 'Dynamik starrer Körper',
            estimatedMinutes: 16,
            learningGoals: ['Massenträgheitsmoment interpretieren', 'Drallsatz M = J·α anwenden'],
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
              { type: 'number-input', question: 'Vollzylinder: m = 2 kg, R = 0,1 m. Massenträgheitsmoment J?', correctValue: 0.01, tolerance: 0.001, unit: 'kg·m²', explanation: 'J = ½·m·R² = ½·2·0,1² = ½·2·0,01 = 0,01 kg·m².', hints: ['J_Vollzylinder = ½·m·R²', 'R² = 0,1² = 0,01 m²', '½·2·0,01 = 0,01 kg·m²'] },
              { type: 'number-input', question: 'Ein Motor erzeugt M = 50 Nm. Trägheitsmoment J = 0,5 kg·m². Winkelbeschleunigung α?', correctValue: 100, tolerance: 0.1, unit: 'rad/s²', explanation: 'α = M/J = 50/0,5 = 100 rad/s².', hints: ['Drallsatz: M = J·α → α = M/J', 'J = 0,5 kg·m², M = 50 Nm', '50/0,5 = 100 rad/s²'] },
              { type: 'number-input', question: '[PRÜFUNG] Stab (m = 6 kg, L = 1 m). J um Schwerpunkt = mL²/12. Jetzt Achse am Ende: J_Ende per Steiner? (J_Ende = J_S + m·d²)', correctValue: 2, tolerance: 0.01, unit: 'kg·m²', explanation: 'J_S = 6·1²/12 = 0,5 kg·m². d = L/2 = 0,5 m. J_Ende = 0,5 + 6·0,5² = 0,5 + 1,5 = 2 kg·m².', hints: ['J_S = mL²/12', 'Steiner: J_Ende = J_S + m·d²', 'd = L/2 (Abstand Schwerpunkt-Achse)'] },
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
  },
  {
    topic: {
      id: 'festigkeitslehre',
      title: 'Festigkeitslehre',
      description: 'Spannung, Dehnung, Biegung und Sicherheitsnachweise.',
      subject: 'engineering',
      icon: 'FES',
      color: 'purple',
      estimatedHours: 7,
      difficulty: 4,
      level: 'vertiefung',
      prerequisites: ['technische-mechanik'],
      phase: 'semester-2',
      examRelevance: 'pflicht',
      topicGoals: [
        'Normal- und Schubspannung $\\sigma = F/A$, $\\tau = F/A$ aus Schnittkräften korrekt ableiten',
        'Hooke-Gesetz $\\sigma = E\\,\\varepsilon$ samt Querkontraktion und thermischer Dehnung anwenden',
        'Schnittgrößenverläufe $N(x)$, $Q(x)$, $M(x)$ für Balken mit Einzel- und Streckenlasten zeichnen',
        'Biegespannung $\\sigma_b = M_b / W$ an Querschnitten bestimmen und kritische Fasern erkennen',
        'Zulässige Spannung via Sicherheitsbeiwert $\\nu = R_e / \\sigma_{\\text{zul}}$ nachweisen',
        'Spannungsspitzen an Kerben, Bohrungen und Absätzen über Kerbfaktor $\\alpha_k$ qualitativ einordnen',
      ],
    },
    units: [
      {
        id: 'fest-unit-1',
        title: 'Spannung und Dehnung',
        description: 'Normalspannung, Hooke und Kennwerte.',
        lessons: [
          {
            id: 'fest-1-1',
            title: 'Normalspannung',
            learningGoals: ['Spannung als Kraft pro Fläche verstehen', 'Einheiten korrekt umrechnen'],
            subGoals: [
              { label: '$\\sigma = F/A$ — Kraft normal zur Fläche, Einheit $\\mathrm{N/mm^2 = MPa}$', examRelevance: 'hoch' },
              { label: '1 MPa = 1 N/mm² = $10^6$ Pa: Einheiten-Umrechnung ohne Rechenfehler', examRelevance: 'hoch' },
              { label: 'Zug vs. Druck: Vorzeichenkonvention (+Zug, −Druck) klar halten', examRelevance: 'mittel' },
              { label: 'Querschnittsfläche: bei Kreis $A = \\pi d^2/4$, nicht $\\pi d^2$', examRelevance: 'hoch' },
            ],
            content: String.raw`Die **Normalspannung** ist Kraft pro Querschnittsfläche:

$$\sigma = \frac{F}{A}$$

1 MPa entspricht 1 N/mm². Diese Einheit ist in der Konstruktion sehr praktisch.`,
            visualization: {
              title: 'Spannungs-Dehnungs-Diagramm', visualizationId: 'stress-strain', params: {},
            },
            exercises: [
              { type: 'number-input', question: 'F = 1000 N, A = 100 $mm^2$. Spannung in $N/mm^2$?', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: 'σ = F/A = 1000/100 = 10 $N/mm^2$ = 10 MPa.', hints: ['σ = F/A', 'Einheit: N/mm² = MPa', '1000/100 = 10'] },
              { type: 'multiple-choice', question: 'Welche Einheit passt zu Spannung?', options: ['N', 'Nm', 'Pa', '$m/s^2$'], correctIndex: 2, explanation: 'Spannung ist Kraft pro Fläche, also $N/m^2$ = Pa.', hints: ['Spannung = Kraft pro Fläche: σ = F/A', 'SI-Einheit: N/m² = Pa', 'In der Praxis: N/mm² = MPa'], wrongAnswerExplanations: { 0: 'Newton ist die Einheit der Kraft, nicht der Spannung. Spannung ist Kraft pro Fläche: $\\sigma = F/A$ mit Einheit $\\mathrm{N/m^2} = \\mathrm{Pa}$.', 1: 'Nm ist die Einheit von Moment oder Energie, nicht von Spannung. Spannung hat die Einheit $\\mathrm{N/m^2}$.', 3: '$\\mathrm{m/s^2}$ ist die Einheit der Beschleunigung. Spannung ist $\\sigma = F/A$ in $\\mathrm{Pa} = \\mathrm{N/m^2}$.' } },
              { type: 'true-false', statement: 'Bei gleicher Kraft sinkt die Spannung, wenn die Fläche größer wird.', correct: true, explanation: 'σ = F/A; größere Fläche bedeutet kleinere Spannung.', hints: ['σ = F/A — A im Nenner.', 'Größere Fläche → kleinere Spannung bei gleicher Kraft.', 'σ ∝ 1/A'] },
            ],
          },
          {
            id: 'fest-1-2',
            title: 'Hookesches Gesetz',
            learningGoals: ['Linearen elastischen Bereich erkennen', 'E-Modul interpretieren'],
            subGoals: [
              { label: '$\\sigma = E\\,\\varepsilon$ im linear-elastischen Bereich — nur hier gilt Hooke', examRelevance: 'hoch' },
              { label: 'Dehnung $\\varepsilon = \\Delta l / l_0$ dimensionslos; oft in ‰ oder %', examRelevance: 'hoch' },
              { label: 'E-Modul ist **Material-Konstante**, unabhängig von Geometrie (Stahl $\\approx 210\\,\\mathrm{GPa}$)', examRelevance: 'hoch' },
              { label: 'Querkontraktion $\\varepsilon_q = -\\nu\\,\\varepsilon$ mit Poisson-Zahl $\\nu \\approx 0{,}3$ (Stahl)', examRelevance: 'mittel' },
            ],
            content: String.raw`Im linear-elastischen Bereich gilt:

$$\sigma = E \cdot \varepsilon$$

Der E-Modul beschreibt die Steifigkeit des Materials. Stahl hat ungefähr $E = 210000$ MPa.`,
            visualization: { title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {} },
            exercises: [
              { type: 'number-input', question: 'Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ.', correctValue: 200, tolerance: 0.01, unit: 'MPa', explanation: 'σ = E·ε = 200000·0,001 = 200 MPa.', hints: ['Hookesches Gesetz: σ = E · ε', 'ε ist dimensionslos (Längenänderung / Ausgangslänge).', '200000 · 0,001 = 200 MPa'] },
              { type: 'multiple-choice', question: 'Ein größerer E-Modul bedeutet:', options: ['geringere Steifigkeit', 'höhere Steifigkeit', 'immer höhere Dichte', 'keine elastische Verformung'], correctIndex: 1, explanation: 'Je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig.', hints: ['E-Modul = Steigung im σ-ε-Diagramm im elastischen Bereich.', 'Größeres E → mehr Spannung für gleiche Dehnung.', 'E ↑ bedeutet: steiferes Material.'], wrongAnswerExplanations: { 0: 'Umgekehrte Deutung: Aus $\\sigma = E \\cdot \\varepsilon$ folgt $\\varepsilon = \\sigma/E$ — großes $E$ heißt kleine Dehnung bei gleicher Spannung, also höhere Steifigkeit, nicht geringere.', 2: 'E-Modul und Dichte sind unabhängig. Beispiel: Stahl $E \\approx 210\\,000$ MPa, $\\rho \\approx 7{,}85\\,\\mathrm{g/cm^3}$; Beryllium hat höheres $E/\\rho$.', 3: 'Elastische Verformung folgt dem Hookeschen Gesetz $\\sigma = E \\cdot \\varepsilon$. Auch bei großem $E$ gibt es Verformung — sie ist nur kleiner.' } },
              { type: 'true-false', statement: 'Hooke gilt uneingeschränkt bis zum Bruch.', correct: false, explanation: 'Hooke gilt nur im linear-elastischen Bereich.', hints: ['Hooke gilt nur im linear-elastischen Bereich.', 'Ab der Streckgrenze Re beginnt plastische Verformung.', 'Hooke ≠ gültig bis zum Bruch!'] },
            ],
          },
          {
            id: 'fest-1-3',
            title: 'Schubspannung und Torsion',
            learningGoals: ['Torsionswiderstandsmoment berechnen', 'Maximale Schubspannung einer Welle bestimmen'],
            content: String.raw`**Torsion** eines Kreisquerschnitt-Stabes (Durchmesser $d$, Länge $L$):

$$\tau_{\max} = \frac{M_T}{W_p}, \qquad W_p = \frac{\pi d^3}{16}$$

$$\varphi = \frac{M_T \cdot L}{G \cdot I_p}, \qquad I_p = \frac{\pi d^4}{32}$$

$G$ ist der **Schubmodul** (Stahl: $G \approx 80000$ MPa). Bei reiner Schubspannung (z.B. Niet, Bolzen):

$$\tau = \frac{F}{A}$$`,
            exercises: [
              {
                type: 'number-input',
                question: 'Berechne das Torsionswiderstandsmoment $W_p$ für eine Welle mit $d = 40$ mm.',
                correctValue: 12566,
                tolerance: 100,
                unit: 'mm³',
                explanation: '$W_p = \\pi \\cdot d^3 / 16 = \\pi \\cdot 40^3 / 16 = \\pi \\cdot 64000 / 16 \\approx 12566$ mm³.',
                hints: ['$W_p = \\pi \\cdot d^3 / 16$', '$d^3 = 40^3 = 64000$', '$W_p = \\pi \\cdot 64000 / 16 \\approx 12566$'],
              },
              {
                type: 'number-input',
                question: 'Welle mit $d = 40$ mm und Torsionsmoment $M_T = 200$ Nm. Berechne die maximale Schubspannung $\\tau_{\\max}$ in N/mm².',
                correctValue: 15.9,
                tolerance: 0.5,
                unit: 'N/mm²',
                explanation: '$W_p \\approx 12566$ mm³. $\\tau = M_T / W_p = 200000 / 12566 \\approx 15{,}9$ N/mm².',
                hints: ['$\\tau = M_T / W_p$', '$M_T$ in Nmm: $200 \\cdot 1000 = 200000$ Nmm', '$W_p \\approx 12566$ mm³'],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] Eine Welle mit $d = 30$ mm wird mit $M_T = 100$ Nm belastet. Welcher Wert für $\\tau_{\\max}$ ist am nächsten?',
                options: ['12 N/mm²', '19 N/mm²', '30 N/mm²', '50 N/mm²'],
                correctIndex: 1,
                explanation: '$W_p = \\pi \\cdot 30^3 / 16 \\approx 5301$ mm³. $\\tau = 100000 / 5301 \\approx 18{,}9$ N/mm² ≈ 19 N/mm².',
                hints: ['$W_p = \\pi \\cdot d^3 / 16$', '$M_T$ in Nmm umrechnen: ×1000', '$\\tau = M_T / W_p$'],
                wrongAnswerExplanations: {
                  0: 'Vermutlich $W_p = \\pi \\cdot d^3/8$ statt $/16$ verwendet ($\\approx 10600$ mm³) — das ergäbe $\\tau \\approx 9{,}4$ N/mm². Korrekt: Polares Widerstandsmoment ist $W_p = \\pi d^3/16$.',
                  2: '$M_T$ nicht in Nmm umgerechnet (100 Nm $\\cdot$ 1000 = 100000 Nmm) oder Durchmesser statt Radius verwendet. Korrekte Einsetzung: $\\tau = 100000/5301 \\approx 19$ N/mm².',
                  3: 'Das wäre bei $d \\approx 20$ mm statt 30 mm ($W_p \\approx 1571$ mm³, $\\tau \\approx 64$). Einheiten-/Dimensionsfehler. Mit $d = 30$ ist $\\tau_{max} \\approx 19$ N/mm².',
                },
              },
            ],
          },
          {
            id: 'fest-1-4',
            title: 'Knicken',
            learningGoals: ['Eulersche Knicklast berechnen', 'Einspannbeiwert β anwenden'],
            content: String.raw`**Eulersches Knicken** — kritische Last für einen Druckstab:

$$F_{ki} = \frac{\pi^2 \cdot E \cdot I}{(\beta L)^2}$$

$\beta$ ist der **Einspannbeiwert** (abhängig von Lagerungsart):
| Lagerungsfall | $\beta$ |
|---|---|
| beidseitig gelenkig | 1 |
| einseitig eingespannt, freies Ende | 2 |
| beidseitig eingespannt | 0,5 |

Das **Flächenträgheitsmoment** $I$ bestimmt die Knicklast maßgeblich (schwächste Achse!).`,
            exercises: [
              {
                type: 'number-input',
                question: 'Gelenkig-gelenkig gelagerter Stab: $E = 210000$ MPa, $I = 1 \\times 10^4$ mm⁴, $L = 1000$ mm. Berechne die Knicklast $F_{ki}$.',
                correctValue: 20708,
                tolerance: 200,
                unit: 'N',
                explanation: '$F_{ki} = \\pi^2 \\cdot 210000 \\cdot 10000 / (1 \\cdot 1000)^2 = \\pi^2 \\cdot 2100 \\approx 20708$ N.',
                hints: ['$F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 1$ für beidseitig gelenkig', '$\\pi^2 \\approx 9{,}87$'],
              },
              {
                type: 'true-false',
                statement: 'Bei einseitig eingespanntem, freiem Ende ist die Knicklast am kleinsten (β = 2).',
                correct: true,
                explanation: 'Großes β bedeutet kleine Knicklast: $F_{ki} \\propto 1/(\\beta L)^2$. β = 2 liefert die kleinste Last.',
                hints: ['Je größer β, desto kleiner $F_{ki}$', 'β = 2 → $(\\beta L)^2 = 4L^2$', 'Vergleiche mit β = 1: gleicher Nenner, 4-facher Unterschied'],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Gleicher Stab wie oben ($E = 210000$ MPa, $I = 10000$ mm⁴, $L = 1000$ mm), aber nun einseitig eingespannt ($\\beta = 2$). Knicklast $F_{ki}$?',
                correctValue: 5177,
                tolerance: 100,
                unit: 'N',
                explanation: '$F_{ki} = \\pi^2 \\cdot 210000 \\cdot 10000 / (2 \\cdot 1000)^2 = \\pi^2 \\cdot 525 \\approx 5177$ N.',
                hints: ['Euler: $F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 2 \\Rightarrow (\\beta L)^2 = (2 \\cdot 1000)^2 = 4 \\cdot 10^6$', '$\\pi^2 \\cdot 210000 \\cdot 10000 / 4 \\cdot 10^6$'],
              },
            ],
          },
        ],
      },
      {
        id: 'fest-unit-2',
        title: 'Biegung und Torsion',
        description: 'Grundformeln für beanspruchte Bauteile.',
        lessons: [
          {
            id: 'fest-2-1',
            title: 'Biegespannung',
            learningGoals: ['Biegemoment und Widerstandsmoment verbinden', 'Kritische Randfaser erkennen'],
            content: String.raw`Bei reiner Biegung wird die maximale Normalspannung abgeschätzt mit:

$$\sigma_b = \frac{M_b}{W_b}$$

Das Widerstandsmoment $W_b$ hängt stark von der Querschnittsform ab.`,
            exercises: [
              { type: 'number-input', question: 'Gegeben sind $M_b$ = 200 Nm und $W_b$ = 20 $cm^3$. Mit 1 Nm = 1000 Nmm und 1 $cm^3$ = 1000 $mm^3$: Berechne $\\sigma_b$.', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: '200 Nm = 200000 Nmm, 20 $cm^3$ = 20000 $mm^3$, $\\sigma$ = 10 $N/mm^2$.', hints: ['σ_b = M_b / W_b', 'Einheiten angleichen: M in Nmm, W in mm³', '200000 Nmm / 20000 mm³ = 10 N/mm²'] },
              { type: 'multiple-choice', question: 'Biegespannung ist bei symmetrischem Balken maximal ...', options: ['in der neutralen Faser', 'an der Randfaser', 'immer in der Mitte', 'außerhalb des Balkens'], correctIndex: 1, explanation: 'Die Spannung steigt mit dem Abstand von der neutralen Faser und ist an der Randfaser maximal.', hints: ['Biegespannung wächst linear mit Abstand y von Neutralfaser.', 'Maximum an der Randfaser (y = max).', 'σ_b = M·y/I → σ_max = M/W_b'], wrongAnswerExplanations: { 0: 'In der neutralen Faser ist $y = 0$, also $\\sigma_b = M \\cdot 0/I = 0$ — dort ist die Spannung minimal (null), nicht maximal.', 2: 'Die Höhenlage im Querschnitt (Randfaser) ist entscheidend, nicht die Längsposition. „Mitte“ ist unklar — gemeint könnte die neutrale Faser sein, wo $\\sigma = 0$.', 3: 'Spannung existiert nur im Material. Außerhalb des Balkens gibt es keinen Querschnitt, also keine Spannung — das ist kein sinnvoller Ort.' } },
              { type: 'true-false', statement: 'Das Widerstandsmoment hat Einfluss auf die Biegespannung.', correct: true, explanation: 'σ_b = M_b/W_b.', hints: ['σ_b = M_b / W_b', 'W_b im Nenner: größeres W → kleinere Spannung.', 'W_b beeinflusst maßgeblich die Biegespannung.'] },
            ],
          },
          {
            id: 'fest-2-2',
            title: 'Sicherheitszahl',
            learningGoals: ['Zulässige Spannung berechnen', 'Nachweis gegen Versagen formulieren'],
            content: String.raw`Ein einfacher Festigkeitsnachweis lautet:

$$\sigma_\text{vorh} \le \sigma_\text{zul} = \frac{R}{S}$$

$R$ ist eine Materialkennzahl, $S$ die Sicherheitszahl.`,
            exercises: [
              { type: 'number-input', question: 'Für eine Materialkennzahl R = 300 MPa und Sicherheitszahl S = 2: Berechne die zulässige Spannung.', correctValue: 150, tolerance: 0.01, unit: 'MPa', explanation: 'σ_zul = R/S = 300/2 = 150 MPa.', hints: ['σ_zul = R/S', 'S (Sicherheitszahl) steht im Nenner.', '300/2 = 150 MPa'] },
              { type: 'true-false', statement: 'Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist.', correct: true, explanation: 'Dann bleibt die vorhandene Beanspruchung unter der zulässigen Grenze.', hints: ['Nachweis: σ_vorh ≤ σ_zul', 'σ_zul = R/S ist die Grenze.', 'Wenn σ_vorh < σ_zul → Nachweis erfüllt.'] },
              { type: 'multiple-choice', question: 'Wenn S größer gewählt wird, wird σ_zul ...', options: ['größer', 'kleiner', 'unverändert', 'negativ'], correctIndex: 1, explanation: 'σ_zul = R/S; größere Sicherheit senkt die zulässige Spannung.', hints: ['σ_zul = R/S', 'Größeres S → kleineres σ_zul (konservativer).', 'S im Nenner → σ_zul sinkt.'], wrongAnswerExplanations: { 0: '$S$ steht im Nenner: $\\sigma_\\text{zul} = R/S$. Größerer Nenner macht den Bruch kleiner. Vorsicht: „mehr Sicherheit“ heißt nicht „mehr erlaubte Spannung“, sondern weniger.', 2: 'Aus $\\sigma_\\text{zul} = R/S$ folgt direkt: Änderung von $S$ ändert $\\sigma_\\text{zul}$ — es ist keine feste Größe.', 3: 'Beide Größen $R > 0$ und $S > 0$ sind positiv (Materialkennwert und Sicherheitsfaktor). Der Bruch bleibt positiv.' } },
            ],
          },
          {
            id: 'fest-2-3',
            title: "Mohr'scher Spannungskreis",
            learningGoals: ['Mittelpunkt und Radius des Mohr-Kreises berechnen', 'Hauptspannungen aus dem Mohr-Kreis ablesen'],
            content: String.raw`Der **Mohr'sche Spannungskreis** visualisiert Spannungszustände bei Schnittwinkel-Variation.

Gegeben: Normalspannungen $\sigma_x$, $\sigma_y$ und Schubspannung $\tau_{xy}$. Der Kreis hat:

$$\text{Mittelpunkt: } \sigma_M = \frac{\sigma_x + \sigma_y}{2}$$
$$\text{Radius: } R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$

**Hauptspannungen:**
$$\sigma_{1/2} = \sigma_M \pm R$$

**Maximale Schubspannung:** $\tau_{\max} = R$`,
            visualization: { title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {} },
            exercises: [
              {
                type: 'number-input',
                question: 'Gegeben: $\\sigma_x = 70$ MPa, $\\sigma_y = 30$ MPa, $\\tau_{xy} = 30$ MPa. Berechne die größte Hauptspannung $\\sigma_1$.',
                correctValue: 86.1,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: '$\\sigma_M = (70+30)/2 = 50$ MPa. $R = \\sqrt{20^2 + 30^2} = \\sqrt{1300} \\approx 36{,}1$ MPa. $\\sigma_1 = 50 + 36{,}1 \\approx 86{,}1$ MPa.',
                hints: ['$\\sigma_M = (\\sigma_x + \\sigma_y)/2 = 50$', '$R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2} = \\sqrt{400+900}$', '$\\sigma_1 = \\sigma_M + R$'],
              },
              {
                type: 'number-input',
                question: 'Gleiche Werte ($\\sigma_x = 70$ MPa, $\\sigma_y = 30$ MPa, $\\tau_{xy} = 30$ MPa). Maximale Schubspannung $\\tau_{\\max}$?',
                correctValue: 36.1,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: '$\\tau_{\\max}$ entspricht dem Radius des Mohr-Kreises: $R = \\sqrt{20^2 + 30^2} = \\sqrt{1300} \\approx 36{,}1$ MPa.',
                hints: ['$\\tau_{\\max}$ = Radius des Mohr-Kreises', '$R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$', '$\\sqrt{1300} \\approx 36{,}1$'],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] $\\sigma_x = 100$ MPa, $\\sigma_y = 0$ MPa, $\\tau_{xy} = 0$ MPa. Was ist die kleinere Hauptspannung $\\sigma_2$?',
                options: ['0 MPa', '50 MPa', '100 MPa', '−50 MPa'],
                correctIndex: 0,
                explanation: '$\\sigma_M = 50$ MPa, $R = 50$ MPa (da $\\tau = 0$). $\\sigma_2 = 50 - 50 = 0$ MPa.',
                hints: ['$\\sigma_M = (\\sigma_x + \\sigma_y)/2$', '$R = (\\sigma_x - \\sigma_y)/2$ bei $\\tau = 0$', '$\\sigma_2 = \\sigma_M - R$'],
                wrongAnswerExplanations: {
                  1: '50 MPa ist der Mittelpunkt $\\sigma_M = (100+0)/2$ — noch nicht die Hauptspannung. $\\sigma_2 = \\sigma_M - R = 50 - 50 = 0$ MPa.',
                  2: '100 MPa wäre $\\sigma_1 = \\sigma_M + R = 50+50$ (die größere Hauptspannung), nicht $\\sigma_2$.',
                  3: '$-50$ MPa entspricht fälschlich $\\sigma_M - 2R$ oder Vorzeichenfehler. Mit $\\tau = 0$ ist $R = |\\sigma_x - \\sigma_y|/2 = 50$, also $\\sigma_2 = 0$.',
                },
              },
            ],
          },
          {
            id: 'fest-2-4',
            title: 'Wechselfestigkeit und Betriebsfestigkeit',
            learningGoals: ['Mittel- und Ausschlagspannung berechnen', 'Goodman-Nachweis anwenden'],
            content: String.raw`**Wechselfestigkeit** beschreibt die ertragbare Spannung bei schwingender Beanspruchung.

**Mittelspannung:** $\sigma_m = (\sigma_{\max} + \sigma_{\min})/2$

**Ausschlagspannung:** $\sigma_a = (\sigma_{\max} - \sigma_{\min})/2$

**Smith-Diagramm / Haigh-Diagramm:** Zulässiges $\sigma_a$ sinkt linear mit steigendem $\sigma_m$.

**Einfache Abschätzung (Goodman-Gerade):**
$$\frac{\sigma_a}{\sigma_W} + \frac{\sigma_m}{R_m} \le 1$$

$\sigma_W$ = Wechselfestigkeit, $R_m$ = Zugfestigkeit. Sicherheit $S > 1$ erforderlich.`,
            exercises: [
              {
                type: 'number-input',
                question: '$\\sigma_{\\max} = 200$ MPa, $\\sigma_{\\min} = 100$ MPa. Berechne die Ausschlagspannung $\\sigma_a$.',
                correctValue: 50,
                tolerance: 0.01,
                unit: 'MPa',
                explanation: '$\\sigma_a = (\\sigma_{\\max} - \\sigma_{\\min})/2 = (200 - 100)/2 = 50$ MPa.',
                hints: ['$\\sigma_a = (\\sigma_{\\max} - \\sigma_{\\min})/2$', '$(200 - 100)/2$', 'Einheit: MPa'],
              },
              {
                type: 'true-false',
                statement: 'Eine höhere Mittelspannung reduziert die zulässige Ausschlagspannung.',
                correct: true,
                explanation: 'Die Goodman-Gerade zeigt: mit steigendem $\\sigma_m$ sinkt das zulässige $\\sigma_a$.',
                hints: ['Goodman: $\\sigma_a/\\sigma_W + \\sigma_m/R_m \\le 1$', 'Terme addieren sich auf', 'Steigt $\\sigma_m$, muss $\\sigma_a$ sinken, damit die Summe ≤ 1 bleibt'],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Goodman-Nachweis: $\\sigma_W = 200$ MPa, $R_m = 400$ MPa, $\\sigma_m = 100$ MPa. Maximales zulässiges $\\sigma_a$?',
                correctValue: 150,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: '$\\sigma_a/200 + 100/400 \\le 1 \\Rightarrow \\sigma_a/200 \\le 0{,}75 \\Rightarrow \\sigma_a \\le 150$ MPa.',
                hints: ['Goodman: $\\sigma_a/\\sigma_W + \\sigma_m/R_m = 1$ (Grenze)', '$\\sigma_a = \\sigma_W \\cdot (1 - \\sigma_m/R_m)$', '$200 \\cdot (1 - 100/400) = 200 \\cdot 0{,}75$'],
              },
            ],
          },
          {
            id: 'fest-2-5',
            title: 'Kerbspannungen & Formzahl',
            estimatedMinutes: 14,
            learningGoals: [
              'Formzahl $\\alpha_K$ als Verhältnis $\\sigma_\\text{max}/\\sigma_\\text{nenn}$ verstehen',
              'Typische Kerben (Bohrung, Absatz, Gewindegrund) einordnen',
              'Einfluss von Kerbwirkung auf die Dauerfestigkeit einschätzen',
            ],
            content: String.raw`**Kerbspannung** — wenn die Geometrie einer Welle, Platte oder eines Bauteils **springt** (Bohrung, Absatz, Gewindegrund), konzentrieren sich die Spannungen lokal. Das Verhältnis der maximalen zur nominellen Spannung heißt **Formzahl** $\alpha_K$:

$$\alpha_K = \frac{\sigma_\text{max}}{\sigma_\text{nenn}}$$

- $\sigma_\text{nenn}$: Spannung aus der einfachen Formel $F/A$ oder $M/W$ (ohne Kerbe)
- $\sigma_\text{max}$: tatsächliche Spitzenspannung im Kerbgrund

**Typische Werte** für $\alpha_K$:

| Kerbe | $\alpha_K$ |
|---|---|
| Absatz Welle, scharf | 2–3 |
| Absatz Welle, verrundet ($r/d = 0{,}1$) | 1,5–1,8 |
| Querbohrung in Welle | 2–3 |
| Gewindegrund (metrisch) | 3–5 |

**Dauerfestigkeit mit Kerbwirkung:**
$$\sigma_{W,K} = \frac{\sigma_W}{\beta_K}$$

mit **Kerbwirkungszahl** $\beta_K \le \alpha_K$ (Kerbempfindlichkeit des Werkstoffs). Für spröde Werkstoffe ist $\beta_K \approx \alpha_K$, für zähe Werkstoffe deutlich kleiner (sie „entschärfen" Spitzen durch lokale Plastifizierung).

**Gegenmaßnahmen:**
- Übergänge großzügig verrunden ($r \uparrow \Rightarrow \alpha_K \downarrow$)
- Oberflächenrauheit senken (Schleifen, Polieren)
- Druckeigenspannungen einbringen (Kugelstrahlen, Festwalzen)

Auch die **Oberflächengüte** beeinflusst die Dauerfestigkeit stark: geschliffene Proben halten deutlich länger als gedrehte mit Rillen, die selbst kleine Kerben bilden.`,
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Eine Welle hat einen Absatz mit Formzahl $\\alpha_K = 2$. Was bedeutet das?',
                options: [
                  'Die maximale Spannung im Kerbgrund ist doppelt so groß wie die Nennspannung',
                  'Der Bauteil hält nur die halbe Last aus wie ohne Kerbe',
                  'Die Dauerfestigkeit ist genau halbiert',
                  'Die Fläche am Absatz ist halbiert',
                ],
                correctIndex: 0,
                explanation: `**Ansatz:** Die Formzahl $\\alpha_K$ ist als Verhältnis $\\sigma_\\text{max}/\\sigma_\\text{nenn}$ definiert.

**Rechnung:** $\\alpha_K = 2 \\Rightarrow \\sigma_\\text{max} = 2 \\cdot \\sigma_\\text{nenn}$.

**Probe:** Nennspannung z.B. $100$ MPa, dann ist im Kerbgrund lokal $200$ MPa — mehr als am ungestörten Querschnitt.

**Typischer Fehler:** $\\alpha_K$ mit der Kerbwirkungszahl $\\beta_K$ (Einfluss auf Dauerfestigkeit) oder mit der Lastkapazität verwechseln.`,
                hints: [
                  'Definition: $\\alpha_K = \\sigma_\\text{max} / \\sigma_\\text{nenn}$.',
                  '$\\alpha_K = 2$ heißt: die Spitze ist um Faktor 2 höher als die mittlere Spannung.',
                  'Nicht dasselbe wie „hält nur halbe Last" — das wäre die Kerbwirkung auf Dauerfestigkeit.',
                ],
                wrongAnswerExplanations: {
                  1: 'Die Formzahl $\\alpha_K$ beschreibt die lokale Spannungsspitze, nicht direkt die Tragfähigkeit. Bei statischer Last und zähem Werkstoff plastifiziert die Kerbstelle und die Gesamttragfähigkeit kann fast unverändert bleiben. Für dynamische Last zählt $\\beta_K \\le \\alpha_K$.',
                  2: 'Halbierte Dauerfestigkeit gilt nur, wenn $\\beta_K = 2$ ist — und $\\beta_K$ ist meist kleiner als $\\alpha_K$, weil zähe Werkstoffe Spannungsspitzen lokal abbauen. Die Formzahl allein liefert die Dauerfestigkeit nicht.',
                  3: 'Die Formzahl ist ein **Spannungs**-Verhältnis, kein Flächen-Verhältnis. Sie hängt von der Geometrie der Kerbe (Radius/Durchmesser) ab, nicht von einer Flächenhalbierung.',
                },
              },
              {
                type: 'number-input',
                question: 'Nennspannung $\\sigma_\\text{nenn} = 100$ MPa an einem Wellenabsatz mit Kerbformzahl $\\alpha_K = 2{,}5$. Wie groß ist die maximale Spannung $\\sigma_\\text{max}$ im Kerbgrund?',
                correctValue: 250,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: `**Ansatz:** $\\sigma_\\text{max} = \\alpha_K \\cdot \\sigma_\\text{nenn}$.

**Rechnung:** $\\sigma_\\text{max} = 2{,}5 \\cdot 100 = 250$ MPa.

**Probe:** Vergleich: ohne Kerbe wäre nur $100$ MPa vorhanden. Die Kerbe erzeugt eine Spannungsspitze von $250$ MPa — kritisch für Dauerfestigkeit.

**Typischer Fehler:** Dividieren statt multiplizieren ($100 / 2{,}5 = 40$ MPa) oder $\\alpha_K$ mit Sicherheitsfaktor $S$ verwechseln.`,
                hints: [
                  'Formel: $\\sigma_\\text{max} = \\alpha_K \\cdot \\sigma_\\text{nenn}$.',
                  'Einsetzen: $2{,}5 \\cdot 100$.',
                  '$\\alpha_K$ verstärkt die Spannung — nicht abschwächen!',
                ],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] Zwei gleiche Wellen aus demselben Stahl werden auf Dauer beansprucht. Welle A ist fein geschliffen ($R_a = 0{,}8\\,\\mu\\text{m}$), Welle B grob gedreht ($R_a = 6{,}3\\,\\mu\\text{m}$). Wie wirkt sich die Oberflächengüte auf die Dauerfestigkeit aus?',
                options: [
                  'Welle A hat höhere Dauerfestigkeit — raue Oberflächen enthalten Mikrokerben',
                  'Welle B hat höhere Dauerfestigkeit — raue Oberfläche verteilt die Last besser',
                  'Beide gleich — Dauerfestigkeit hängt nur vom Werkstoff ab',
                  'Nur die statische Festigkeit ändert sich, nicht die Dauerfestigkeit',
                ],
                correctIndex: 0,
                explanation: `**Ansatz:** Jede Rille in der Oberfläche wirkt wie eine winzige Kerbe und erzeugt eine Spannungsspitze.

**Rechnung:** Der Oberflächenbeiwert $C_O$ reduziert die Dauerfestigkeit: $\\sigma_{W,\\text{real}} = C_O \\cdot \\sigma_W$. Typische Werte: poliert $C_O \\approx 1{,}0$; fein geschliffen $\\approx 0{,}9$; grob gedreht $\\approx 0{,}7$–$0{,}8$.

**Probe:** Bei $\\sigma_W = 300$ MPa: geschliffen $\\approx 270$ MPa, gedreht $\\approx 225$ MPa — deutlicher Unterschied.

**Typischer Fehler:** Glauben, Rauheit spiele nur im Aussehen eine Rolle. Gerade bei schwingender Last sind Mikrokerben Auslöser für Dauerbrüche.`,
                hints: [
                  'Raue Oberfläche = viele kleine Kerben.',
                  'Kerben → Spannungsspitzen → frühere Rissinitiierung bei Wechsellast.',
                  'Oberflächenbeiwert $C_O < 1$ bei rauen Oberflächen.',
                ],
                wrongAnswerExplanations: {
                  1: 'Genau umgekehrt: Raue Oberflächen enthalten Rillen, die wie Mikrokerben wirken. Dort entstehen Spannungsspitzen, und der Dauerbruch beginnt bevorzugt an der Oberfläche.',
                  2: 'Die Dauerfestigkeit hängt stark von Oberflächenzustand, Kerben, Eigenspannungen und Probengröße ab — nicht nur vom Grundwerkstoff. Deshalb gibt es in Normen die Beiwerte $C_O$, $C_G$, $\\beta_K$.',
                  3: 'Die statische Zugfestigkeit $R_m$ ist praktisch unempfindlich gegen Oberflächenrauheit, aber die **Dauerfestigkeit** $\\sigma_W$ sehr wohl — Dauerbrüche starten fast immer an der Oberfläche.',
                },
              },
            ],
          },
        ],
      },
      // ── Unit 3: Prüfungsaufgaben Festigkeit ──────────────────────────
      {
        id: 'fest-unit-3',
        title: 'Prüfungsaufgaben',
        description: 'Klausurrelevante Festigkeitsberechnungen.',
        lessons: [
          {
            id: 'fest-3-1',
            title: 'Festigkeit: Prüfungsaufgaben',
            type: 'explanation-intuitive',
            learningGoals: ['Kombinierte Beanspruchung berechnen', 'Sicherheitsnachweis durchführen'],
            content: String.raw`**[PRÜFUNG] Typische Festigkeits-Klausuraufgaben**

**Schritt 1:** Schnittgrößen bestimmen (aus Statik: N, Q, M)
**Schritt 2:** Spannungen berechnen (σ = N/A, σ_b = M/W, τ = Q·S/(I·b))
**Schritt 3:** Vergleichsspannung (z.B. v. Mises: $\sigma_v = \sqrt{\sigma^2 + 3\tau^2}$)
**Schritt 4:** Nachweis: $\sigma_v \leq \sigma_{zul} = R_e / S$

**Wichtige Querschnittswerte:**
| Querschnitt | I | W |
|---|---|---|
| Rechteck (b×h) | $bh^3/12$ | $bh^2/6$ |
| Kreis (d) | $\pi d^4/64$ | $\pi d^3/32$ |
| Rohr (D, d) | $\pi(D^4-d^4)/64$ | $\pi(D^4-d^4)/(32D)$ |`,
            visualization: {
              title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {},
            },
            exercises: [
              { type: 'number-input', question: '[PRÜFUNG] Rundstab d = 20 mm, Zugkraft F = 15 kN. Normalspannung σ in MPa?', correctValue: 47.75, tolerance: 0.5, unit: 'MPa', explanation: 'A = $\\pi \\cdot 20^2/4$ = 314,16 $mm^2$. σ = 15000/314,16 ≈ 47,7 MPa.', hints: ['$A = \\pi \\cdot d^2/4$', 'F in N umrechnen: 15 kN = 15000 N', 'σ = F/A = 15000 / 314,16 ≈ 47,7 MPa'] },
              { type: 'number-input', question: '[PRÜFUNG] Rechteckbalken b = 40 mm, h = 80 mm. Biegemoment M = 800 Nm. Maximale Biegespannung?', correctValue: 18.75, tolerance: 0.2, unit: 'MPa', explanation: '$W = bh^2/6$ = $40 \\cdot 80^2/6$ = 42667 $mm^3$. σ = 800000/42667 ≈ 18,8 MPa.', hints: ['$W = bh^2/6$', 'M in Nmm: 800·1000 = 800000 Nmm', 'σ = 800000 / 42667 ≈ 18,8 MPa'] },
              { type: 'number-input', question: '[PRÜFUNG] σ = 120 MPa und τ = 60 MPa wirken gleichzeitig. Berechne die Von-Mises-Vergleichsspannung auf eine Dezimalstelle.', correctValue: 158.7, tolerance: 1, unit: 'MPa', explanation: 'Für Normalspannung plus Schubspannung gilt $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$. Einsetzen: $\\sigma_v = \\sqrt{120^2 + 3 \\cdot 60^2}$ = $\\sqrt{14400 + 10800}$ = $\\sqrt{25200}$ ≈ 158,7 MPa. Typischer Fehler: den Faktor 3 vor $\\tau^2$ wegzulassen.', hints: ['Nutze $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$.', 'Berechne zuerst $120^2$ und $3 \\cdot 60^2$.', 'Ziehe am Ende die Wurzel aus 25200.'] },
              { type: 'true-false', statement: '[PRÜFUNG] Die Streckgrenze Re von S235 beträgt mindestens 235 MPa.', correct: true, explanation: 'S235 bedeutet: Mindeststreckgrenze 235 MPa (daher der Name).', hints: ['Die Zahl im Werkstoffnamen S235 = Mindeststreckgrenze 235 MPa.', 'Streckgrenze Re: ab hier beginnt plastische Verformung.', 'S235 bedeutet: Re_min = 235 MPa (bei Dicke ≤ 16 mm).'] },
            ],
          },
          {
            id: 'fest-3-2',
            title: 'Torsion, Knicken & Wechselfestigkeit',
            type: 'explanation-intuitive',
            learningGoals: ['Torsions- und Knickberechnung kombinieren', 'Goodman-Nachweis mit Sicherheit durchführen'],
            content: String.raw`**[PRÜFUNG] Torsion, Knicken & Wechselfestigkeit**

**Torsion:**
- $W_p = \pi d^3/16$ (Kreis), $\tau = M_T/W_p$
- Verdrehwinkel: $\varphi = M_T \cdot L/(G \cdot I_p)$, $I_p = \pi d^4/32$

**Knicken (Euler):**
- $F_{ki} = \pi^2 \cdot E \cdot I/(\beta L)^2$
- $\beta$: 1 (gel.-gel.), 0,5 (beidseitig eingespannt), 2 (Kragstab)

**Goodman (Wechselfestigkeit):**
- $\sigma_a/\sigma_W + \sigma_m/R_m \le 1/S$`,
            exercises: [
              {
                type: 'number-input',
                question: '[PRÜFUNG] Welle mit $d = 50$ mm wird mit $M_T = 500$ Nm belastet. Maximale Schubspannung $\\tau_{\\max}$ in MPa?',
                correctValue: 20.4,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: '$W_p = \\pi \\cdot 50^3 / 16 = \\pi \\cdot 125000 / 16 \\approx 24544$ mm³. $\\tau = 500000 / 24544 \\approx 20{,}4$ MPa.',
                hints: ['$W_p = \\pi \\cdot d^3 / 16$', '$d = 50$ mm → $d^3 = 125000$', '$\\tau = M_T\\text{(Nmm)} / W_p$'],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Stab beidseitig gelenkig: $E = 210000$ MPa, $I = 5000$ mm⁴, $L = 500$ mm. Knicklast $F_{ki}$?',
                correctValue: 41425,
                tolerance: 500,
                unit: 'N',
                explanation: '$F_{ki} = \\pi^2 \\cdot 210000 \\cdot 5000 / (1 \\cdot 500)^2 = \\pi^2 \\cdot 4200 \\approx 41425$ N.',
                hints: ['$F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$', '$\\beta = 1$, $(\\beta L)^2 = 250000$', '$\\pi^2 \\cdot 210000 \\cdot 5000 / 250000$'],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Goodman mit Sicherheit: $\\sigma_W = 180$ MPa, $R_m = 360$ MPa, $\\sigma_m = 60$ MPa, $S = 1{,}5$. Zulässiges $\\sigma_a$?',
                correctValue: 100,
                tolerance: 0.5,
                unit: 'MPa',
                explanation: '$\\sigma_a = (\\sigma_W / S) \\cdot (1 - \\sigma_m/R_m) = (180/1{,}5) \\cdot (1 - 60/360) = 120 \\cdot 5/6 = 100$ MPa.',
                hints: ['Goodman mit Sicherheit: $\\sigma_a \\le (\\sigma_W/S) \\cdot (1 - \\sigma_m/R_m)$', '$180/1{,}5 = 120$ MPa', '$1 - 60/360 = 5/6$'],
              },
              {
                type: 'true-false',
                statement: '[PRÜFUNG] Knicken ist ein Stabilitätsversagen, das auch unterhalb der Streckgrenze auftreten kann.',
                correct: true,
                explanation: 'Knicken ist ein geometrisches Stabilitätsproblem. Die kritische Last kann weit unterhalb der Druckfestigkeit liegen.',
                hints: ['Euler-Knicklast hängt von $E \\cdot I / L^2$ ab', 'Nicht von der Streckgrenze $R_e$', 'Bei schlanken Stäben tritt Knicken vor Quetschung auf'],
              },
            ],
          },
        ],
      },
    ],
  },
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
  },
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
  },
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
  },
  // ─── Elektrotechnik ───────────────────────────────────────────────────────
  {
    topic: {
      id: 'elektrotechnik',
      title: 'Elektrotechnik',
      description: 'Gleichstrom, Wechselstrom, Kirchhoffsche Gesetze und elektrische Leistung.',
      subject: 'engineering',
      icon: 'ELT',
      color: 'yellow',
      estimatedHours: 5,
      difficulty: 3,
      level: 'grundlagen',
      prerequisites: ['algebra'],
      phase: 'semester-1',
      examRelevance: 'pflicht',
      topicGoals: [
        'Ohm-Gesetz $U = R\\,I$ und Leistung $P = U\\,I = I^2 R = U^2/R$ sicher ineinander umformen',
        'Kirchhoffsche Knoten- und Maschenregel strukturiert auf Netzwerke mit mehreren Schleifen anwenden',
        'Reihen- und Parallelschaltung von Widerständen zu Ersatzwiderständen zusammenfassen',
        'Effektivwert $U_\\text{eff} = \\hat U/\\sqrt 2$, Scheitelwert, Frequenz und Kreisfrequenz $\\omega = 2\\pi f$ in Wechselstromaufgaben identifizieren',
        'Impedanzen $Z_R = R$, $Z_L = j\\omega L$, $Z_C = 1/(j\\omega C)$ komplex addieren und als Zeiger darstellen',
        'Wirk-, Blind- und Scheinleistung sowie Leistungsfaktor $\\cos\\varphi$ interpretieren und berechnen',
      ],
    },
    units: [
      {
        id: 'et-unit-1',
        title: 'Gleichstromkreise',
        description: 'Ohmsches Gesetz, Kirchhoff und Leistung.',
        lessons: [
          // ── et-1-1 ────────────────────────────────────────────────────────
          {
            id: 'et-1-1',
            title: 'Ohmsches Gesetz und Grundbegriffe',
            estimatedMinutes: 12,
            learningGoals: [
              'Das Ohmsche Gesetz $U = R \\cdot I$ anwenden',
              'Reihen- und Parallelschaltungen berechnen',
            ],
            subGoals: [
              { label: 'Ohmsches Gesetz $U = R \\cdot I$ — Dreieck-Merkhilfe: eine Größe abdecken, die anderen beiden ergeben sie', examRelevance: 'hoch' },
              { label: 'Einheiten-Konsistenz: V, A, $\\Omega$ — mA und k$\\Omega$ immer vor der Rechnung umrechnen', examRelevance: 'hoch' },
              { label: 'Reihenschaltung: Widerstände addieren sich, Strom ist überall gleich', examRelevance: 'hoch' },
              { label: 'Parallelschaltung: Kehrwerte addieren ($1/R_{ges} = \\sum 1/R_i$), Spannung überall gleich', examRelevance: 'hoch' },
              { label: 'Spezialfall zwei Parallelwiderstände: $R_{ges} = R_1 R_2 / (R_1 + R_2)$ (Produkt-durch-Summe)', examRelevance: 'mittel' },
            ],
            content: String.raw`## Ohmsches Gesetz und Grundbegriffe

Das **Ohmsche Gesetz** beschreibt den Zusammenhang zwischen Spannung, Widerstand und Strom:

$$U = R \cdot I$$

| Größe | Symbol | Einheit |
|-------|--------|---------|
| Spannung | $U$ | Volt (V) |
| Strom | $I$ | Ampere (A) |
| Widerstand | $R$ | Ohm ($\Omega$) |

### Reihenschaltung

$$R_\text{ges} = R_1 + R_2 + \ldots + R_n$$

### Parallelschaltung

$$\frac{1}{R_\text{ges}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$$

Für zwei Widerstände gilt: $R_\text{ges} = \frac{R_1 \cdot R_2}{R_1 + R_2}$
`,
            exercises: [
              {
                type: 'number-input',
                question: 'Ein Widerstand $R = 470\\,\\Omega$ wird von einem Strom $I = 20\\,\\text{mA}$ durchflossen. Welche Spannung $U$ liegt an?',
                correctValue: 9.4,
                tolerance: 0.05,
                unit: 'V',
                explanation: '$U = R \\cdot I = 470\\,\\Omega \\cdot 0{,}02\\,\\text{A} = 9{,}4\\,\\text{V}$',
                hints: [
                  '$U = R \\cdot I$',
                  'Strom in Ampere umrechnen: $20\\,\\text{mA} = 0{,}02\\,\\text{A}$',
                  '$470 \\cdot 0{,}02 = 9{,}4$',
                ],
              },
              {
                type: 'true-false',
                statement: 'Zwei gleiche Widerstände $R$ in Parallelschaltung ergeben einen Gesamtwiderstand von $R/2$.',
                correct: true,
                explanation: '$\\frac{1}{R_\\text{ges}} = \\frac{1}{R} + \\frac{1}{R} = \\frac{2}{R} \\Rightarrow R_\\text{ges} = \\frac{R}{2}$',
                hints: [
                  '$\\frac{1}{R_\\text{ges}} = \\frac{1}{R_1} + \\frac{1}{R_2}$',
                  '$\\frac{1}{R} + \\frac{1}{R} = \\frac{2}{R}$',
                  '$R_\\text{ges} = R/2$',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Reihenschaltung $R_1 = 100\\,\\Omega$ und $R_2 = 150\\,\\Omega$ an $U = 12\\,\\text{V}$. Wie groß ist der Strom $I$ in Ampere?',
                correctValue: 0.048,
                tolerance: 0.001,
                unit: 'A',
                explanation: '$R_\\text{ges} = 100 + 150 = 250\\,\\Omega$. $I = U/R_\\text{ges} = 12/250 = 0{,}048\\,\\text{A}$',
                hints: [
                  'Reihe: $R_\\text{ges} = R_1 + R_2$',
                  '$I = U / R_\\text{ges}$',
                  '$12 / 250 = 0{,}048\\,\\text{A}$',
                ],
              },
            ],
          },
          // ── et-1-2 ────────────────────────────────────────────────────────
          {
            id: 'et-1-2',
            title: 'Kirchhoffsche Gesetze',
            estimatedMinutes: 13,
            learningGoals: [
              'Den Knotensatz (KCL) anwenden: $\\sum I = 0$',
              'Den Maschensatz (KVL) anwenden: $\\sum U = 0$',
            ],
            subGoals: [
              { label: 'Knotensatz (KCL): An jedem Knoten ist die Summe zu- und abfließender Ströme null — Folge der Ladungserhaltung', examRelevance: 'hoch' },
              { label: 'Maschensatz (KVL): In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle null — Folge der Energieerhaltung', examRelevance: 'hoch' },
              { label: 'Vorzeichenkonvention: Umlaufrichtung festlegen; in Umlaufrichtung Spannungsquelle positiv, Widerstand-Abfall negativ (oder konsistent umgekehrt)', examRelevance: 'hoch' },
              { label: 'Spannungsteiler: $U_2 = U \\cdot R_2 / (R_1 + R_2)$ — direkter Spezialfall des Maschensatzes bei Reihenschaltung', examRelevance: 'mittel' },
            ],
            content: String.raw`## Kirchhoffsche Gesetze

### 1. Kirchhoffsches Gesetz — Knotensatz (KCL)

Die Summe aller Ströme an einem Knoten ist null:

$$\sum I = 0$$

Zufliesende Ströme positiv, abfliesende negativ (oder umgekehrt — konsistent bleiben):

$$I_1 = I_2 + I_3$$

### 2. Kirchhoffsches Gesetz — Maschensatz (KVL)

Die Summe aller Spannungen in einem geschlossenen Umlauf ist null:

$$\sum U = 0$$

Beispiel: $U_q - U_{R1} - U_{R2} = 0 \Rightarrow U_q = U_{R1} + U_{R2}$
`,
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Was besagt der Knotensatz (KCL) von Kirchhoff?',
                options: [
                  'Die Summe aller Ströme an einem Knoten ist null',
                  'Die Summe aller Spannungen in einem Zweig ist null',
                  'Leistung ist Strom mal Spannung',
                  'Widerstand ist Spannung durch Strom',
                ],
                correctIndex: 0,
                explanation: 'KCL beruht auf der Ladungserhaltung: Was in einen Knoten hineinfließt, muss auch wieder herausfließen.',
                hints: [
                  'KCL = Knotenstromsatz',
                  'Ladungserhaltung am Knoten',
                  '$\\sum I_\\text{ein} = \\sum I_\\text{aus}$',
                ],
                wrongAnswerExplanations: {
                  1: 'Das ist der Maschensatz (KVL), nicht der Knotensatz. KVL: $\\sum U = 0$ im geschlossenen Umlauf; KCL: $\\sum I = 0$ am Knoten.',
                  2: 'Das ist die Leistungsformel $P = U \\cdot I$, nicht eines der Kirchhoffschen Gesetze.',
                  3: 'Das ist das Ohmsche Gesetz $R = U/I$, nicht Kirchhoff. KCL und KVL sind Bilanzgleichungen für Ströme bzw. Spannungen.',
                },
              },
              {
                type: 'number-input',
                question: 'An einem Knoten fließt $I_1 = 3\\,\\text{A}$ zu und $I_2 = 1\\,\\text{A}$ ab. Wie groß ist der dritte Strom $I_3$ (abfließend) in Ampere?',
                correctValue: 2,
                tolerance: 0.01,
                unit: 'A',
                explanation: 'KCL: $I_1 = I_2 + I_3 \\Rightarrow I_3 = 3 - 1 = 2\\,\\text{A}$',
                hints: [
                  'KCL: $\\sum I = 0$ am Knoten',
                  '$I_1 = I_2 + I_3$',
                  '$3 = 1 + I_3$',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] In einer Masche gilt $U_q = 9\\,\\text{V}$ und $U_{R1} = 4\\,\\text{V}$. Wie groß ist $U_{R2}$ nach KVL in Volt?',
                correctValue: 5,
                tolerance: 0.01,
                unit: 'V',
                explanation: 'KVL: $U_q - U_{R1} - U_{R2} = 0 \\Rightarrow U_{R2} = 9 - 4 = 5\\,\\text{V}$',
                hints: [
                  'KVL: $\\sum U = 0$ im Umlauf',
                  '$U_q = U_{R1} + U_{R2}$',
                  '$9 = 4 + U_{R2}$',
                ],
              },
            ],
          },
          // ── et-1-3 ────────────────────────────────────────────────────────
          {
            id: 'et-1-3',
            title: 'Elektrische Leistung und Wirkungsgrad',
            estimatedMinutes: 12,
            learningGoals: [
              'Elektrische Leistung mit $P = U \\cdot I$ berechnen',
              'Wirkungsgrad $\\eta = P_\\text{ab}/P_\\text{zu}$ anwenden',
            ],
            content: String.raw`## Elektrische Leistung und Wirkungsgrad

### Leistungsformeln

$$P = U \cdot I = \frac{U^2}{R} = I^2 \cdot R$$

Einheit: Watt (W). Energie: $W = P \cdot t$ (Joule).

### Wirkungsgrad

$$\eta = \frac{P_\text{ab}}{P_\text{zu}} \quad (0 < \eta \leq 1)$$

### Wärmeverlust im Widerstand

$$P_R = I^2 \cdot R$$
`,
            exercises: [
              {
                type: 'number-input',
                question: 'An einem Verbraucher liegt $U = 230\\,\\text{V}$ an und es fließt $I = 5\\,\\text{A}$. Wie groß ist die Leistung $P$ in Watt?',
                correctValue: 1150,
                tolerance: 1,
                unit: 'W',
                explanation: '$P = U \\cdot I = 230 \\cdot 5 = 1150\\,\\text{W}$',
                hints: [
                  '$P = U \\cdot I$',
                  '$P$ in Watt',
                  '$230 \\cdot 5 = 1150$',
                ],
              },
              {
                type: 'multiple-choice',
                question: 'Eine Glühlampe hat $R = 529\\,\\Omega$ an $U = 230\\,\\text{V}$. Welche Leistung hat sie?',
                options: ['100 W', '230 W', '529 W', '43 W'],
                correctIndex: 0,
                explanation: '$P = U^2/R = 230^2/529 = 52900/529 = 100\\,\\text{W}$',
                hints: [
                  '$P = U^2 / R$',
                  '$230^2 = 52900$',
                  '$52900 / 529 = 100$',
                ],
                wrongAnswerExplanations: {
                  1: '230 W wäre nur die Spannung in Volt mit Watt verwechselt. Korrekt: $P = U \\cdot I = U \\cdot (U/R) = U^2/R$, also $230^2/529 = 100$ W.',
                  2: '529 ist der Widerstand in Ohm, kein Leistungswert. Die Formel $P = U^2/R$ liefert $52900/529 = 100$ W.',
                  3: '43 W entstünde bei $P = U/R \\cdot I$ oder anderem Fehler. Richtig: $P = U^2/R$, nicht $U/R$, und $230^2/529 = 100$ W.',
                },
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Ein Motor hat eine Eingangsleistung $P_\\text{zu} = 2\\,\\text{kW}$ und einen Wirkungsgrad $\\eta = 0{,}8$. Wie groß ist die abgegebene Nutzleistung $P_\\text{ab}$ in Watt?',
                correctValue: 1600,
                tolerance: 1,
                unit: 'W',
                explanation: '$P_\\text{ab} = \\eta \\cdot P_\\text{zu} = 0{,}8 \\cdot 2000 = 1600\\,\\text{W}$',
                hints: [
                  '$\\eta = P_\\text{ab} / P_\\text{zu}$',
                  '$P_\\text{ab} = \\eta \\cdot P_\\text{zu}$',
                  '$0{,}8 \\cdot 2000 = 1600$',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'et-unit-2',
        title: 'Wechselstrom',
        description: 'Impedanz, Phasenverschiebung und Leistungsfaktor.',
        lessons: [
          // ── et-2-1 ────────────────────────────────────────────────────────
          {
            id: 'et-2-1',
            title: 'Wechselstromgrundlagen und Impedanz',
            estimatedMinutes: 14,
            learningGoals: [
              'Wechselspannung und Kreisfrequenz $\\omega = 2\\pi f$ verstehen',
              'Impedanzen $Z_R$, $Z_C$, $Z_L$ berechnen',
            ],
            content: String.raw`## Wechselstromgrundlagen und Impedanz

### Wechselspannung

$$u(t) = \hat{u} \cdot \sin(\omega t + \varphi), \quad \omega = 2\pi f$$

**Effektivwert:** $U = \hat{u}/\sqrt{2}$

### Impedanz (komplexer Widerstand)

| Bauelement | Impedanz | Betrag |
|-----------|----------|--------|
| Ohmscher Widerstand | $Z_R = R$ | $R$ |
| Kondensator | $Z_C = \frac{1}{j\omega C}$ | $\frac{1}{\omega C}$ |
| Spule | $Z_L = j\omega L$ | $\omega L$ |

Der **Betrag** der Impedanz gibt das Verhältnis $|Z| = U/I$ an.
`,
            exercises: [
              {
                type: 'number-input',
                question: 'Ein Kondensator $C = 10\\,\\mu\\text{F}$ wird mit $f = 50\\,\\text{Hz}$ betrieben. Wie groß ist der Impedanzbetrag $|Z_C|$ in Ohm?',
                correctValue: 318,
                tolerance: 5,
                unit: 'Ohm',
                explanation: '$|Z_C| = \\frac{1}{\\omega C} = \\frac{1}{2\\pi \\cdot 50 \\cdot 10^{-5}} \\approx 318\\,\\Omega$',
                hints: [
                  '$Z_C = 1/(j\\omega C)$',
                  '$|Z_C| = 1/(\\omega C)$',
                  '$\\omega = 2\\pi \\cdot 50 \\approx 314\\,\\text{rad/s}$',
                ],
              },
              {
                type: 'true-false',
                statement: 'Der Effektivwert einer Sinusspannung beträgt $\\hat{u}/\\sqrt{2}$.',
                correct: true,
                explanation: 'Für reine Sinussignale gilt $U_\\text{eff} = \\hat{u}/\\sqrt{2} \\approx 0{,}707\\,\\hat{u}$.',
                hints: [
                  '$U_\\text{eff} = \\hat{u}/\\sqrt{2}$',
                  'Für Sinus-Signale gilt diese Beziehung',
                  '$\\sqrt{2} \\approx 1{,}414$',
                ],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] Eine Spule $L = 0{,}1\\,\\text{H}$ liegt an $f = 50\\,\\text{Hz}$. Wie groß ist $|Z_L|$?',
                options: [
                  '$\\approx 31{,}4\\,\\Omega$',
                  '$\\approx 5\\,\\Omega$',
                  '$\\approx 100\\,\\Omega$',
                  '$\\approx 314\\,\\Omega$',
                ],
                correctIndex: 0,
                explanation: '$|Z_L| = \\omega L = 2\\pi \\cdot 50 \\cdot 0{,}1 = 10\\pi \\approx 31{,}4\\,\\Omega$',
                hints: [
                  '$Z_L = j\\omega L$',
                  '$|Z_L| = \\omega L$',
                  '$\\omega = 2\\pi \\cdot 50 \\approx 314 \\Rightarrow 314 \\cdot 0{,}1 = 31{,}4$',
                ],
                wrongAnswerExplanations: {
                  1: '5 Ω entsteht, wenn $|Z_L| = f \\cdot L = 50 \\cdot 0{,}1$ gerechnet wird. Falsch — der Faktor $2\\pi$ fehlt: $|Z_L| = \\omega L = 2\\pi f L$.',
                  2: '100 Ω wäre $f \\cdot L \\cdot 20$ oder $\\omega^2 \\cdot L \\cdot 0{,}5$ — unklar, aber nicht korrekt. $|Z_L| = 2\\pi \\cdot 50 \\cdot 0{,}1 \\approx 31{,}4$ Ω.',
                  3: '314 Ω entsteht, wenn nur $\\omega \\approx 314$ rad/s hingeschrieben und $L = 0{,}1$ vergessen wird (d.h. mit $L = 1$ gerechnet). Korrekt: $\\omega \\cdot L = 314 \\cdot 0{,}1 = 31{,}4$ Ω.',
                },
              },
            ],
          },
          // ── et-2-2 ────────────────────────────────────────────────────────
          {
            id: 'et-2-2',
            title: 'RC- und RL-Schaltungen',
            estimatedMinutes: 14,
            learningGoals: [
              'Grenzfrequenz eines RC-Tiefpasses berechnen',
              'Impedanz einer RL-Schaltung bestimmen',
              'Leistungsfaktor $\\cos\\varphi$ verstehen',
            ],
            content: String.raw`## RC- und RL-Schaltungen

### RC-Tiefpass

$$|G(j\omega)| = \frac{1}{\sqrt{1+(\omega RC)^2}}$$

**Grenzfrequenz:** $f_g = \frac{1}{2\pi RC}$ (bei $f_g$: Betrag auf $1/\sqrt{2} \approx 0{,}707$ abgefallen)

### RL-Schaltung

Zeitkonstante: $\tau = L/R$

Impedanzbetrag: $|Z| = \sqrt{R^2 + (\omega L)^2}$

### Leistungsfaktor

$$\cos\varphi = \frac{R}{|Z|}, \quad P = S \cdot \cos\varphi$$

$\cos\varphi = 1$: rein ohmsche Last, keine Blindleistung.
`,
            exercises: [
              {
                type: 'number-input',
                question: 'RC-Tiefpass mit $R = 1\\,\\text{k}\\Omega$ und $C = 10\\,\\mu\\text{F}$. Wie groß ist die Grenzfrequenz $f_g$ in Hz?',
                correctValue: 15.9,
                tolerance: 0.5,
                unit: 'Hz',
                explanation: '$f_g = \\frac{1}{2\\pi RC} = \\frac{1}{2\\pi \\cdot 1000 \\cdot 10^{-5}} \\approx 15{,}9\\,\\text{Hz}$',
                hints: [
                  '$f_g = 1/(2\\pi R C)$',
                  '$R \\cdot C = 1000 \\cdot 10^{-5} = 0{,}01\\,\\text{s}$',
                  '$1/(2\\pi \\cdot 0{,}01) \\approx 15{,}9$',
                ],
              },
              {
                type: 'true-false',
                statement: 'Bei $\\cos\\varphi = 1$ ist die gesamte Scheinleistung Wirkleistung (kein Blindanteil).',
                correct: true,
                explanation: '$\\cos\\varphi = 1 \\Rightarrow \\varphi = 0°$, d.h. Strom und Spannung sind phasengleich. $P = S \\cdot 1 = S$.',
                hints: [
                  '$\\cos\\varphi = 1 \\Rightarrow \\varphi = 0°$ (kein Phasenversatz)',
                  '$P = S \\cdot \\cos\\varphi = S$',
                  'Nur bei rein ohmscher Last',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] RL-Schaltung: $R = 50\\,\\Omega$, $L = 0{,}2\\,\\text{H}$, $f = 50\\,\\text{Hz}$. Wie groß ist der Impedanzbetrag $|Z|$ in Ohm?',
                correctValue: 80.3,
                tolerance: 1,
                unit: 'Ohm',
                explanation: '$\\omega L = 2\\pi \\cdot 50 \\cdot 0{,}2 \\approx 62{,}8\\,\\Omega$. $|Z| = \\sqrt{50^2 + 62{,}8^2} = \\sqrt{2500 + 3944} \\approx 80{,}3\\,\\Omega$',
                hints: [
                  '$|Z| = \\sqrt{R^2 + (\\omega L)^2}$',
                  '$\\omega L = 2\\pi \\cdot 50 \\cdot 0{,}2 \\approx 62{,}8\\,\\Omega$',
                  '$\\sqrt{50^2 + 62{,}8^2} = \\sqrt{6447} \\approx 80{,}3$',
                ],
              },
            ],
          },
          // ── et-2-3 ────────────────────────────────────────────────────────
          {
            id: 'et-2-3',
            title: 'Drehstrom & 3-Phasensystem',
            estimatedMinutes: 15,
            learningGoals: [
              'Stern- (Y) und Dreieckschaltung ($\\Delta$) unterscheiden',
              'Verkettete Spannung $U_{LL} = \\sqrt{3} \\cdot U_{LN}$ anwenden',
              'Wirkleistung im Drehstromsystem berechnen',
            ],
            content: String.raw`## Drehstrom (Dreiphasensystem)

Ein Drehstromnetz besteht aus drei um $120°$ phasenverschobenen Wechselspannungen. Es gibt zwei Standard-Verschaltungen:

### Sternschaltung (Y)

Die drei Stränge sind an einem gemeinsamen **Sternpunkt** (Neutralleiter) zusammengeführt.

- **Strangspannung** (Phase-Neutral): $U_{LN}$, z.B. $230\,\text{V}$
- **Verkettete Spannung** (zwischen zwei Außenleitern): $U_{LL} = \sqrt{3} \cdot U_{LN}$, z.B. $400\,\text{V}$
- **Strangstrom = Außenleiterstrom**

### Dreieckschaltung ($\Delta$)

Die drei Stränge bilden ein Dreieck — kein Neutralleiter.

- **Strangspannung = verkettete Spannung** $U_{LL}$
- **Außenleiterstrom** $I_L = \sqrt{3} \cdot I_\text{Strang}$

### Wirkleistung im symmetrischen Drehstromsystem

Unabhängig von der Schaltungsart:

$$P = \sqrt{3} \cdot U_{LL} \cdot I_L \cdot \cos\varphi$$

mit $U_{LL}$ der verketteten Spannung, $I_L$ dem Außenleiterstrom, $\cos\varphi$ dem Leistungsfaktor.

### Stern-Dreieck-Anlauf (Motor)

Drehstrom-Asynchronmotoren werden beim Anlauf in Y betrieben (niedrigerer Strang-Strom und damit kleinerer Einschaltstrom), dann auf $\Delta$ umgeschaltet (volle Leistung). Im Stern ist die Leistung nur **1/3** der Dreieck-Leistung bei gleichem Netz — ein guter Kompromiss für den Anlauf großer Motoren.`,
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Ein Drehstrommotor ist in Stern geschaltet und an einem Netz mit $U_{LN} = 230\\,\\text{V}$ angeschlossen. Wie groß ist die verkettete Spannung $U_{LL}$ zwischen zwei Außenleitern?',
                options: [
                  '$\\approx 400\\,\\text{V}$ ($\\sqrt{3} \\cdot 230$)',
                  '$230\\,\\text{V}$ (gleich wie $U_{LN}$)',
                  '$115\\,\\text{V}$ (halb so groß)',
                  '$690\\,\\text{V}$ ($3 \\cdot 230$)',
                ],
                correctIndex: 0,
                explanation: `**Ansatz:** In Sternschaltung gilt $U_{LL} = \\sqrt{3} \\cdot U_{LN}$.

**Rechnung:** $U_{LL} = \\sqrt{3} \\cdot 230\\,\\text{V} \\approx 1{,}732 \\cdot 230\\,\\text{V} \\approx 400\\,\\text{V}$.

**Probe:** Das Standardnetz in Europa hat $230/400\\,\\text{V}$ — die verkettete Spannung $400\\,\\text{V}$ ist der Wert zwischen zwei Außenleitern, $230\\,\\text{V}$ zwischen Außenleiter und Neutralleiter.

**Typischer Fehler:** $U_{LL} = 3 \\cdot U_{LN}$ statt $\\sqrt{3}$ — Faktor $\\sqrt{3} \\approx 1{,}73$, nicht 3.`,
                hints: [
                  'In Y-Schaltung ist zwischen zwei Außenleitern ein Faktor $\\sqrt{3}$ mehr Spannung als zwischen Außenleiter und Sternpunkt.',
                  '$\\sqrt{3} \\approx 1{,}732$.',
                  '$\\sqrt{3} \\cdot 230 \\approx 400$.',
                ],
                wrongAnswerExplanations: {
                  1: 'In Sternschaltung sind Strang- und verkettete Spannung **nicht** gleich. Gleich wären sie nur in Dreieckschaltung. Zwischen zwei Außenleitern liegt hier das vektorielle Differenzsignal der um $120°$ phasenverschobenen Stränge — das gibt Faktor $\\sqrt{3}$.',
                  2: 'Eine Halbierung tritt nicht auf — die verkettete Spannung ist **größer** als die Strangspannung. Faktor $\\sqrt{3} \\approx 1{,}73$.',
                  3: '$3 \\cdot 230 = 690\\,\\text{V}$ ist der falsche Faktor. Die Stränge sind um $120°$ phasenverschoben, nicht in Phase — dadurch ergibt der Vektor-Unterschied nur Faktor $\\sqrt{3}$, nicht $3$.',
                },
              },
              {
                type: 'number-input',
                question: 'Ein Drehstrommotor läuft an $U_{LL} = 400\\,\\text{V}$, zieht Strangstrom $I = 10\\,\\text{A}$ und hat Leistungsfaktor $\\cos\\varphi = 0{,}9$. Wie groß ist die Wirkleistung $P$ in Watt?',
                correctValue: 6235,
                tolerance: 30,
                unit: 'W',
                explanation: `**Ansatz:** Drehstrom-Wirkleistung: $P = \\sqrt{3} \\cdot U_{LL} \\cdot I \\cdot \\cos\\varphi$.

**Rechnung:** $P = \\sqrt{3} \\cdot 400 \\cdot 10 \\cdot 0{,}9 = 1{,}732 \\cdot 4000 \\cdot 0{,}9 \\approx 6235\\,\\text{W}$.

**Probe:** $\\approx 6{,}2\\,\\text{kW}$ — passt zu einem mittelgroßen Motor.

**Typischer Fehler:** Den Faktor $\\sqrt{3}$ vergessen ($P = 4000 \\cdot 0{,}9 = 3600\\,\\text{W}$, ca. $1{,}7$-fach zu klein) oder $\\cos\\varphi$ weglassen.`,
                hints: [
                  'Formel: $P = \\sqrt{3} \\cdot U_{LL} \\cdot I \\cdot \\cos\\varphi$.',
                  '$\\sqrt{3} \\approx 1{,}732$.',
                  '$1{,}732 \\cdot 400 \\cdot 10 \\cdot 0{,}9 \\approx 6235\\,\\text{W}$.',
                ],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] Warum wird ein großer Drehstrom-Asynchronmotor beim Anlauf in Stern und im Betrieb in Dreieck geschaltet?',
                options: [
                  'Im Stern ist der Anlaufstrom um Faktor 3 kleiner — der Motor zieht das Netz nicht zu stark ein',
                  'Im Dreieck wäre der Motor mechanisch überlastet',
                  'Stern liefert mehr Drehmoment als Dreieck',
                  'Stern ist die Standardschaltung für niedrige Spannungen',
                ],
                correctIndex: 0,
                explanation: `**Ansatz:** In Y liegt an jedem Strang nur $U_{LL}/\\sqrt{3}$ (statt $U_{LL}$ wie in $\\Delta$). Strom durch jeden Strang sinkt um Faktor $\\sqrt{3}$, und der Leiterstrom am Netz sinkt insgesamt um Faktor **3**.

**Rechnung:** Leistung in Y ist $P_Y = P_\\Delta / 3$, Drehmoment ebenfalls — das Drehmoment am Anlauf reicht aber meist, da $M \\propto U^2$ bedeutet bei niedrigerer Belastung.

**Probe:** Ein $10$-kW-Motor in $\\Delta$ zieht ca. $18\\,\\text{A}$; beim direkten Anlauf ginge der **Anlaufstrom** aber auf das 5- bis 8-fache, also $\\approx 100$ A — in Y auf ca. $33$ A reduziert.

**Typischer Fehler:** Glauben, in Y sei die Leistung höher; tatsächlich ist sie im Anlauf nur ein Drittel — das reduziert Netzbelastung.`,
                hints: [
                  'Der **Einschaltstrom** ist das Problem, nicht die Dauerleistung.',
                  'In Y fällt an jedem Strang nur $U_{LL}/\\sqrt{3}$, Ströme sinken.',
                  'Faktor 3 kleinere Leistung und Strom in Y vs. $\\Delta$.',
                ],
                wrongAnswerExplanations: {
                  1: 'Mechanische Überlastung tritt nicht direkt auf — problematisch ist der **elektrische** Einschaltstromstoß (5–8-fach). Der Stern-Anlauf reduziert genau diesen Einschaltstrom.',
                  2: 'Umgekehrt: Im Stern sind Spannung pro Strang und damit das Drehmoment deutlich **kleiner** als im Dreieck (Faktor 3). Deshalb wechselt man nach dem Hochlauf auf $\\Delta$.',
                  3: '$400\\,\\text{V}$-Netze sind der Standard — Y und $\\Delta$ sind Motoranschlüsse, keine Netzstandards. Die Wahl hängt am Motor, nicht am Netz.',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'et-unit-3',
        title: 'Prüfungsaufgaben',
        description: 'Klausurrelevante Elektrotechnik-Aufgaben.',
        lessons: [
          // ── et-3-1 ────────────────────────────────────────────────────────
          {
            id: 'et-3-1',
            title: 'Gleichstrom Prüfungsaufgaben',
            estimatedMinutes: 20,
            learningGoals: [
              'Kirchhoffsche Gesetze in komplexen Schaltungen anwenden',
              'Spannungsteiler und Stromteiler berechnen',
              'Elektrische Energie und Leistung klausurfertig lösen',
            ],
            content: String.raw`## [PRÜFUNG] Gleichstromkreise — Klausuraufgaben

### Wichtige Formeln

**Kirchhoff:**
- KCL (Knoten): $\sum I = 0$
- KVL (Masche): $\sum U = 0$

**Schaltungen:**
- Reihenschaltung: $R_\text{ges} = \sum R_i$
- Parallelschaltung: $\frac{1}{R_\text{ges}} = \sum \frac{1}{R_i}$

**Leistung:** $P = U \cdot I = \frac{U^2}{R} = I^2 R$

**Spannungsteiler:**
$$U_1 = U \cdot \frac{R_1}{R_1 + R_2}$$

**Stromteiler:** Größerer Widerstand → kleinerer Teilstrom (umgekehrt proportional).
`,
            exercises: [
              {
                type: 'number-input',
                question: '[PRÜFUNG] Spannungsteiler: $U = 12\\,\\text{V}$, $R_1 = 300\\,\\Omega$, $R_2 = 700\\,\\Omega$. Wie groß ist die Spannung $U_2$ an $R_2$ in Volt?',
                correctValue: 8.4,
                tolerance: 0.05,
                unit: 'V',
                explanation: '$U_2 = U \\cdot \\frac{R_2}{R_1 + R_2} = 12 \\cdot \\frac{700}{1000} = 8{,}4\\,\\text{V}$',
                hints: [
                  'Spannungsteiler: $U_2 = U \\cdot R_2/(R_1 + R_2)$',
                  '$R_1 + R_2 = 1000\\,\\Omega$',
                  '$12 \\cdot 700/1000 = 8{,}4$',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Parallelschaltung $R_1 = 60\\,\\Omega$ und $R_2 = 40\\,\\Omega$. Wie groß ist $R_\\text{ges}$ in Ohm?',
                correctValue: 24,
                tolerance: 0.1,
                unit: 'Ohm',
                explanation: '$\\frac{1}{R_\\text{ges}} = \\frac{1}{60} + \\frac{1}{40} = \\frac{2}{120} + \\frac{3}{120} = \\frac{5}{120} \\Rightarrow R_\\text{ges} = 24\\,\\Omega$',
                hints: [
                  '$1/R_\\text{ges} = 1/R_1 + 1/R_2$',
                  '$1/60 + 1/40 = 5/120$',
                  '$R_\\text{ges} = 120/5 = 24$',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Heizwiderstand $R = 23\\,\\Omega$ an $U = 230\\,\\text{V}$ läuft 1 Stunde. Wie viel Energie $W$ wird verbraucht in kWh?',
                correctValue: 2.3,
                tolerance: 0.05,
                unit: 'kWh',
                explanation: '$P = U^2/R = 230^2/23 = 2300\\,\\text{W}$. $W = P \\cdot t = 2300\\,\\text{W} \\cdot 1\\,\\text{h} = 2{,}3\\,\\text{kWh}$',
                hints: [
                  '$P = U^2/R = 52900/23 = 2300\\,\\text{W}$',
                  '$W = P \\cdot t$',
                  'kWh: $2300\\,\\text{W} \\cdot 1\\,\\text{h} = 2{,}3\\,\\text{kWh}$',
                ],
              },
              {
                type: 'true-false',
                statement: '[PRÜFUNG] Ein Stromteiler teilt den Strom umgekehrt proportional zu den Widerständen auf (größerer Widerstand → kleinerer Teilstrom).',
                correct: true,
                explanation: '$I_k = I_\\text{ges} \\cdot \\frac{R_\\text{parallel}}{R_k}$. Der Strom fließt bevorzugt durch den kleineren Widerstand.',
                hints: [
                  '$I_k = I_\\text{ges} \\cdot R_\\text{parallel}/R_k$',
                  'Kleinerer Widerstand → größerer Anteil',
                  'Umgekehrt proportional',
                ],
              },
            ],
          },
          // ── et-3-2 ────────────────────────────────────────────────────────
          {
            id: 'et-3-2',
            title: 'Wechselstrom Prüfungsaufgaben',
            estimatedMinutes: 20,
            learningGoals: [
              'Resonanzfrequenz eines RLC-Kreises berechnen',
              'Leistungsfaktor und Wirkleistung bestimmen',
              'Tiefpass-Übertragungsverhalten klausurfertig beherrschen',
            ],
            content: String.raw`## [PRÜFUNG] Wechselstromkreise — Klausuraufgaben

### Wichtige Formeln

**Impedanzen:** $|Z_R| = R$, $|Z_C| = \frac{1}{\omega C}$, $|Z_L| = \omega L$

**RLC-Reihenschaltung:**
$$Z_\text{ges} = R + j\!\left(\omega L - \frac{1}{\omega C}\right), \quad |Z_\text{ges}| = \sqrt{R^2 + X^2}$$

mit Reaktanz $X = \omega L - \frac{1}{\omega C}$

**Resonanz:** $\omega_0 = \frac{1}{\sqrt{LC}}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}}$

**Leistungsfaktor:** $\cos\varphi = \frac{R}{|Z|}$, $\quad P = S \cdot \cos\varphi$
`,
            exercises: [
              {
                type: 'number-input',
                question: '[PRÜFUNG] RLC-Reihenschaltung: $R = 100\\,\\Omega$, $L = 0{,}1\\,\\text{H}$, $C = 100\\,\\mu\\text{F}$. Wie groß ist die Resonanzfrequenz $f_0$ in Hz?',
                correctValue: 50.3,
                tolerance: 1,
                unit: 'Hz',
                explanation: '$f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{0{,}1 \\cdot 10^{-4}}} = \\frac{1}{2\\pi \\cdot 0{,}00316} \\approx 50{,}3\\,\\text{Hz}$',
                hints: [
                  '$f_0 = 1/(2\\pi\\sqrt{LC})$',
                  '$L \\cdot C = 0{,}1 \\cdot 10^{-4} = 10^{-5}$',
                  '$1/(2\\pi \\cdot \\sqrt{10^{-5}}) \\approx 50{,}3\\,\\text{Hz}$',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] RC-Tiefpass bei der Grenzfrequenz $f = f_g$. Wie groß ist der Übertragungsbetrags $|G|$?',
                correctValue: 0.707,
                tolerance: 0.005,
                unit: '',
                explanation: 'Bei $f = f_g$ gilt $\\omega RC = 1$: $|G| = 1/\\sqrt{1+1^2} = 1/\\sqrt{2} \\approx 0{,}707$ (der $-3\\,\\text{dB}$-Punkt).',
                hints: [
                  'Bei $f = f_g$ gilt $\\omega RC = 1$',
                  '$|G| = 1/\\sqrt{1+(\\omega RC)^2}$',
                  '$1/\\sqrt{2} \\approx 0{,}707$ ($-3\\,\\text{dB}$-Punkt)',
                ],
              },
              {
                type: 'number-input',
                question: '[PRÜFUNG] Scheinleistung $S = 5\\,\\text{kVA}$, Leistungsfaktor $\\cos\\varphi = 0{,}8$. Wie groß ist die Wirkleistung $P$ in Watt?',
                correctValue: 4000,
                tolerance: 10,
                unit: 'W',
                explanation: '$P = S \\cdot \\cos\\varphi = 5000 \\cdot 0{,}8 = 4000\\,\\text{W}$',
                hints: [
                  '$P = S \\cdot \\cos\\varphi$',
                  '$S = 5000\\,\\text{VA}$',
                  '$5000 \\cdot 0{,}8 = 4000\\,\\text{W}$',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
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
  },
]

export const engineeringTopics = topicDefinitions.map(buildTopic)
