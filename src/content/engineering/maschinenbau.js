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
      prerequisites: ['vektoren', 'trigonometry'],
    },
    units: [
      {
        id: 'mech-unit-1',
        title: 'Statik',
        description: 'Kräfte, Momente und Gleichgewicht.',
        lessons: [
          {
            id: 'mech-1-1',
            title: 'Kräfte und Freikörperbild',
            learningGoals: ['Kräfte als Vektoren darstellen', 'Freikörperbilder systematisch aufbauen'],
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
              { type: 'multiple-choice', question: 'Was gehört in ein Freikörperbild?', options: ['Nur bekannte Kräfte', 'Alle äußeren Kräfte und Lagerreaktionen', 'Nur Beschleunigungen', 'Nur Maße'], correctIndex: 1, explanation: 'Ein Freikörperbild zeigt alle äußeren Kräfte und unbekannten Reaktionsgrößen.', hints: ['Kontakte werden durch Reaktionskräfte ersetzt.'] },
              { type: 'number-input', question: 'Zwei rechtwinklige Kräfte 3 N und 4 N wirken am Punkt. Betrag der Resultierenden?', correctAnswer: 5, tolerance: 0.01, unit: 'N', explanation: 'R = sqrt(3² + 4²) = 5 N.', hints: ['Pythagoras: 3-4-5-Dreieck.'] },
              { type: 'true-false', statement: 'Im statischen Gleichgewicht muss die Summe aller Kräfte null sein.', correct: true, explanation: 'Für Translation gilt ΣF = 0; zusätzlich gilt für Rotation ΣM = 0.', hints: ['Statik bedeutet keine resultierende Beschleunigung.'] },
            ],
          },
          {
            id: 'mech-1-2',
            title: 'Momente und Hebelarm',
            learningGoals: ['Moment als Kraft mal Hebelarm berechnen', 'Drehsinn korrekt berücksichtigen'],
            content: String.raw`Das **Moment** beschreibt die Drehwirkung einer Kraft.

$$M = F \cdot l_\perp$$

Dabei ist $l_\perp$ der senkrechte Abstand zwischen Drehpunkt und Wirkungslinie der Kraft. Vorzeichen werden über den Drehsinn festgelegt.`,
            visualization: {
              title: 'Balken-Auflagerreaktionen', visualizationId: 'beam-reactions', params: {},
            },
            exercises: [
              { type: 'number-input', question: 'Eine Kraft F = 20 N greift mit senkrechtem Hebelarm l = 0,5 m an. Berechne das Moment.', correctAnswer: 10, tolerance: 0.01, unit: 'Nm', explanation: 'M = F·l = 20·0,5 = 10 Nm.', hints: ['Einheit: Newtonmeter.'] },
              { type: 'multiple-choice', question: 'Der wirksame Hebelarm ist ...', options: ['immer die Stablänge', 'der senkrechte Abstand zur Wirkungslinie', 'die Kraft mal Weg', 'der Winkel in Grad'], correctIndex: 1, explanation: 'Nur der senkrechte Abstand zur Wirkungslinie zählt.', hints: ['Drehwirkung entsteht senkrecht zur Kraftlinie.'] },
              { type: 'true-false', statement: 'Wenn die Wirkungslinie durch den Drehpunkt geht, ist das Moment null.', correct: true, explanation: 'Dann ist der senkrechte Hebelarm 0.', hints: ['M = F·l_perp.'] },
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
              { type: 'number-input', question: 'Balken L = 4 m, F = 600 N bei a = 1 m. Wie groß ist R_A?', correctAnswer: 450, tolerance: 0.5, unit: 'N', explanation: 'R_A = F·(L−a)/L = 600·3/4 = 450 N. Kontrolle: R_A + R_B = 600 N ✓.', hints: ['ΣM um B: R_A·L = F·(L−a)', 'R_A = F·(L−a)/L'] },
              { type: 'number-input', question: 'Gleicher Balken (L = 4 m, F = 600 N bei a = 1 m): Wie groß ist M_max?', correctAnswer: 450, tolerance: 1, unit: 'Nm', explanation: 'M_max = R_A·a = 450·1 = 450 Nm. Liegt genau unter der Last.', hints: ['M_max = R_A · a', 'Max. Moment unter der Last.'] },
              { type: 'multiple-choice', question: 'Wo liegt das maximale Biegemoment bei Einzellast auf Einfeldträger?', options: ['Unter der Last', 'Am Festlager', 'Am Loslager', 'In der Balkenmitte'], correctIndex: 0, explanation: 'Die M(x)-Linie ist dreieckförmig mit Maximum direkt unter der Einzellast.', hints: ['Wo hat die M-Linie ihren Knick?'] },
              { type: 'true-false', statement: 'Der Sprung in Q(x) am Lastangriff hat den Betrag F.', correct: true, explanation: 'Q springt um −F von R_A auf −R_B. Daraus ergibt sich die typische „Treppenstufe" im Querkraftverlauf.', hints: ['|ΔQ| = |F|'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Warum interessiert uns M_max in der Festigkeitslehre besonders?', options: ['Weil dort die maximale Biegespannung auftritt', 'Weil dort N am größten ist', 'Weil dort Q am größten ist', 'Zufall'], correctIndex: 0, explanation: 'Die Biegespannung ist σ_b = M/W mit W = Widerstandsmoment. M_max liefert die größte Spannung und damit die gefährliche Stelle.', hints: ['σ_b = M/W'] },
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
              { type: 'number-input', question: 'Welche Kraft beschleunigt 4 kg mit 3 m/s²?', correctAnswer: 12, tolerance: 0.01, unit: 'N', explanation: 'F = m·a = 4·3 = 12 N.', hints: ['Nutze F = m·a.'] },
              { type: 'multiple-choice', question: 'Gewichtskraft wird berechnet mit:', options: ['m/a', 'm·g', 'g/m', 'm+g'], correctIndex: 1, explanation: 'F_G = m·g.', hints: ['g ≈ 9,81 m/s².'] },
              { type: 'true-false', statement: 'Bei doppelter Masse und gleicher Beschleunigung ist die nötige Kraft doppelt so groß.', correct: true, explanation: 'F ist proportional zu m.', hints: ['F = m·a.'] },
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
              { type: 'number-input', question: 'Eine Kraft von 50 N wirkt 3 m in Wegrichtung. Arbeit?', correctAnswer: 150, tolerance: 0.01, unit: 'J', explanation: 'W = F·s = 50·3 = 150 J.', hints: ['1 J = 1 Nm.'] },
              { type: 'multiple-choice', question: 'Wenn Kraft senkrecht zum Weg steht, ist die Arbeit:', options: ['maximal', 'negativ maximal', 'null', 'immer F·s'], correctIndex: 2, explanation: 'cos(90°)=0, also W=0.', hints: ['Skalarprodukt von senkrechten Vektoren ist 0.'] },
              { type: 'true-false', statement: 'Potentielle Energie im Schwerefeld ist E = m·g·h.', correct: true, explanation: 'Diese Formel gilt nahe der Erdoberfläche bei konstanter Fallbeschleunigung.', hints: ['Höhe h zählt relativ zum Nullniveau.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Balken (4 m), Festlager links, Loslager rechts. Einzellast F = 600 N bei x = 1 m vom linken Lager. Berechne R_B (rechtes Lager).', correctAnswer: 150, tolerance: 1, unit: 'N', explanation: 'ΣM_A = 0: F·1 = R_B·4 → R_B = 600·1/4 = 150 N.', hints: ['Momentengleichung um Punkt A aufstellen.', 'F·a = R_B·L'] },
              { type: 'number-input', question: '[PRÜFUNG] Zwei Kräfte F₁ = 5 kN (30° zur Horizontalen) und F₂ = 3 kN (vertikal). Betrag der Resultierenden? Runde auf eine Dezimalstelle.', correctAnswer: 7.0, tolerance: 0.1, unit: 'kN', explanation: 'Zerlege zuerst F₁: Rx = 5·cos30° = 4,33 kN und Ry = 5·sin30° + 3 = 5,5 kN. Dann R = √(4,33² + 5,5²) = √49,0 ≈ 7,0 kN. Typischer Fehler: die vertikale 3-kN-Kraft nicht zu Ry addieren.', hints: ['Zerlege F₁ in horizontale und vertikale Komponente.', 'Addiere F₂ zur vertikalen Komponente.', 'R = √(Rx² + Ry²).'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Ein Loslager kann aufnehmen:', options: ['Kräfte in alle Richtungen + Moment', 'Nur eine Kraft senkrecht zur Auflagerfläche', 'Kräfte in x und y, aber kein Moment', 'Nur ein Moment'], correctIndex: 1, explanation: 'Ein Loslager (Gleitlager) nimmt nur eine Kraft senkrecht zur Gleitfläche auf.', hints: ['Das Loslager kann sich in einer Richtung frei bewegen.'] },
              { type: 'number-input', question: '[PRÜFUNG] Kragbalken (Einspannung links), Länge 2 m, Einzellast F = 500 N am freien Ende. Einspannmoment?', correctAnswer: 1000, tolerance: 1, unit: 'Nm', explanation: 'M = F·L = 500·2 = 1000 Nm.', hints: ['Bei einem Kragbalken: M_Einspannung = F·L'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Ein 2 kg Block rutscht reibungsfrei eine 3 m hohe Rampe hinunter. Geschwindigkeit unten? (g = 9,81)', correctAnswer: 7.67, tolerance: 0.1, unit: 'm/s', explanation: 'mgh = ½mv² → v = √(2gh) = √(2·9,81·3) = √58,86 ≈ 7,67 m/s.', hints: ['Energieerhaltung: E_pot → E_kin', 'v = √(2gh)'] },
              { type: 'number-input', question: '[PRÜFUNG] Ein 5 kg Block wird mit μ = 0,3 auf ebenem Boden mit F = 40 N horizontal gezogen. Beschleunigung?', correctAnswer: 5.06, tolerance: 0.1, unit: 'm/s²', explanation: 'F_R = μ·m·g = 0,3·5·9,81 = 14,72 N. a = (F - F_R)/m = (40 - 14,72)/5 = 5,06 m/s².', hints: ['Reibkraft = μ·F_N = μ·m·g', 'F_netto = F - F_Reibung'] },
              { type: 'number-input', question: '[PRÜFUNG] Elastischer Stoß: Ball 1 (m=2kg, v=3m/s) trifft ruhenden Ball 2 (m=2kg). Geschwindigkeit von Ball 1 nach Stoß?', correctAnswer: 0, tolerance: 0.01, unit: 'm/s', explanation: 'Bei elastischem Stoß gleicher Massen: Ball 1 steht still, Ball 2 übernimmt die gesamte Geschwindigkeit.', hints: ['Gleiche Massen → vollständiger Geschwindigkeitstausch'] },
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
      prerequisites: ['technische-mechanik'],
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
            content: String.raw`Die **Normalspannung** ist Kraft pro Querschnittsfläche:

$$\sigma = \frac{F}{A}$$

1 MPa entspricht 1 N/mm². Diese Einheit ist in der Konstruktion sehr praktisch.`,
            visualization: {
              title: 'Spannungs-Dehnungs-Diagramm', visualizationId: 'stress-strain', params: {},
            },
            exercises: [
              { type: 'number-input', question: 'F = 1000 N, A = 100 mm². Spannung in N/mm²?', correctAnswer: 10, tolerance: 0.01, unit: 'N/mm²', explanation: 'σ = F/A = 1000/100 = 10 N/mm² = 10 MPa.', hints: ['N/mm² entspricht MPa.'] },
              { type: 'multiple-choice', question: 'Welche Einheit passt zu Spannung?', options: ['N', 'Nm', 'Pa', 'm/s²'], correctIndex: 2, explanation: 'Spannung ist Kraft pro Fläche, also N/m² = Pa.', hints: ['Druck und Spannung haben dieselbe SI-Einheit.'] },
              { type: 'true-false', statement: 'Bei gleicher Kraft sinkt die Spannung, wenn die Fläche größer wird.', correct: true, explanation: 'σ = F/A; größere Fläche bedeutet kleinere Spannung.', hints: ['Fläche steht im Nenner.'] },
            ],
          },
          {
            id: 'fest-1-2',
            title: 'Hookesches Gesetz',
            learningGoals: ['Linearen elastischen Bereich erkennen', 'E-Modul interpretieren'],
            content: String.raw`Im linear-elastischen Bereich gilt:

$$\sigma = E \cdot \varepsilon$$

Der E-Modul beschreibt die Steifigkeit des Materials. Stahl hat ungefähr $E = 210000$ MPa.`,
            visualization: { title: 'Mohrscher Spannungskreis', visualizationId: 'mohr-circle', params: {} },
            exercises: [
              { type: 'number-input', question: 'Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ.', correctAnswer: 200, tolerance: 0.01, unit: 'MPa', explanation: 'σ = E·ε = 200000·0,001 = 200 MPa.', hints: ['Dehnung ist dimensionslos.'] },
              { type: 'multiple-choice', question: 'Ein größerer E-Modul bedeutet:', options: ['geringere Steifigkeit', 'höhere Steifigkeit', 'immer höhere Dichte', 'keine elastische Verformung'], correctIndex: 1, explanation: 'Je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig.', hints: ['E ist die Steigung im σ-ε-Diagramm.'] },
              { type: 'true-false', statement: 'Hooke gilt uneingeschränkt bis zum Bruch.', correct: false, explanation: 'Hooke gilt nur im linear-elastischen Bereich.', hints: ['Nach der Streckgrenze wird das Verhalten nichtlinear/plastisch.'] },
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
              { type: 'number-input', question: 'Gegeben sind M_b = 200 Nm und W_b = 20 cm³. Mit 1 Nm = 1000 Nmm und 1 cm³ = 1000 mm³: Berechne σ_b.', correctAnswer: 10, tolerance: 0.01, unit: 'N/mm²', explanation: '200 Nm = 200000 Nmm, 20 cm³ = 20000 mm³, σ = 10 N/mm².', hints: ['Einheiten zuerst auf Nmm und mm³ bringen.'] },
              { type: 'multiple-choice', question: 'Biegespannung ist bei symmetrischem Balken maximal ...', options: ['in der neutralen Faser', 'an der Randfaser', 'immer in der Mitte', 'außerhalb des Balkens'], correctIndex: 1, explanation: 'Die Spannung steigt mit dem Abstand von der neutralen Faser und ist an der Randfaser maximal.', hints: ['σ = M·y/I.'] },
              { type: 'true-false', statement: 'Das Widerstandsmoment hat Einfluss auf die Biegespannung.', correct: true, explanation: 'σ_b = M_b/W_b.', hints: ['W_b steht im Nenner.'] },
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
              { type: 'number-input', question: 'Für eine Materialkennzahl R = 300 MPa und Sicherheitszahl S = 2: Berechne die zulässige Spannung.', correctAnswer: 150, tolerance: 0.01, unit: 'MPa', explanation: 'σ_zul = R/S = 300/2 = 150 MPa.', hints: ['Sicherheitszahl steht im Nenner.'] },
              { type: 'true-false', statement: 'Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist.', correct: true, explanation: 'Dann bleibt die vorhandene Beanspruchung unter der zulässigen Grenze.', hints: ['Vorhanden ≤ zulässig.'] },
              { type: 'multiple-choice', question: 'Wenn S größer gewählt wird, wird σ_zul ...', options: ['größer', 'kleiner', 'unverändert', 'negativ'], correctIndex: 1, explanation: 'σ_zul = R/S; größere Sicherheit senkt die zulässige Spannung.', hints: ['S steht im Nenner.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Rundstab d = 20 mm, Zugkraft F = 15 kN. Normalspannung σ in MPa?', correctAnswer: 47.75, tolerance: 0.5, unit: 'MPa', explanation: 'A = π·20²/4 = 314,16 mm². σ = 15000/314,16 ≈ 47,7 MPa.', hints: ['A = π·d²/4', 'F in N umrechnen: 15 kN = 15000 N'] },
              { type: 'number-input', question: '[PRÜFUNG] Rechteckbalken b = 40 mm, h = 80 mm. Biegemoment M = 800 Nm. Maximale Biegespannung?', correctAnswer: 18.75, tolerance: 0.2, unit: 'MPa', explanation: 'W = bh²/6 = 40·80²/6 = 42667 mm³. σ = 800000/42667 ≈ 18,8 MPa.', hints: ['W = bh²/6', 'M in Nmm: 800·1000 = 800000 Nmm'] },
              { type: 'number-input', question: '[PRÜFUNG] σ = 120 MPa und τ = 60 MPa wirken gleichzeitig. Berechne die Von-Mises-Vergleichsspannung auf eine Dezimalstelle.', correctAnswer: 158.7, tolerance: 1, unit: 'MPa', explanation: 'Für Normalspannung plus Schubspannung gilt σ_v = √(σ² + 3τ²). Einsetzen: σ_v = √(120² + 3·60²) = √(14400 + 10800) = √25200 ≈ 158,7 MPa. Typischer Fehler: den Faktor 3 vor τ² wegzulassen.', hints: ['Nutze σ_v = √(σ² + 3τ²).', 'Berechne zuerst 120² und 3·60².', 'Ziehe am Ende die Wurzel aus 25200.'] },
              { type: 'true-false', statement: '[PRÜFUNG] Die Streckgrenze Re von S235 beträgt mindestens 235 MPa.', correct: true, explanation: 'S235 bedeutet: Mindeststreckgrenze 235 MPa (daher der Name).', hints: ['Die Zahl im Werkstoffnamen gibt die Streckgrenze an.'] },
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
      prerequisites: ['algebra'],
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
            content: String.raw`Für ideale Gase gilt:

$$pV = nRT$$

Wichtig: Temperatur immer in Kelvin einsetzen. $T_K = T_{°C} + 273{,}15$.`,
            visualization: {
              title: 'p-V-Diagramm', visualizationId: 'pv-diagram', params: {},
            },
            exercises: [
              { type: 'number-input', question: '20 °C entsprechen gerundet wie viel Kelvin?', correctAnswer: 293.15, tolerance: 0.1, unit: 'K', explanation: 'T = 20 + 273,15 = 293,15 K.', hints: ['Addiere 273,15.'] },
              { type: 'multiple-choice', question: 'Welche Größe ist absolute Temperatur?', options: ['°C', 'K', 'bar', 'Pa'], correctIndex: 1, explanation: 'Thermodynamische Rechnungen verwenden Kelvin.', hints: ['Kelvin beginnt beim absoluten Nullpunkt.'] },
              { type: 'true-false', statement: 'Bei konstantem Volumen steigt der Druck eines idealen Gases mit der Temperatur.', correct: true, explanation: 'Aus pV=nRT folgt bei V,n konstant: p proportional T.', hints: ['T muss in Kelvin betrachtet werden.'] },
            ],
          },
          {
            id: 'thermo-1-2',
            title: 'Druck und Arbeit',
            learningGoals: ['Volumenänderungsarbeit interpretieren', 'p-V-Diagramme lesen'],
            content: String.raw`Volumenänderungsarbeit ist die Fläche im p-V-Diagramm:

$$W = \int p\,dV$$

Bei konstantem Druck vereinfacht sich das zu $W = p \cdot \Delta V$.`,
            exercises: [
              { type: 'number-input', question: 'Bei konstantem Druck p = 200 kPa vergrößert sich das Volumen um ΔV = 0,01 m³. Berechne die Volumenänderungsarbeit.', correctAnswer: 2000, tolerance: 1, unit: 'J', explanation: '200 kPa = 200000 Pa. W = p·ΔV = 200000·0,01 = 2000 J.', hints: ['Pa·m³ = J.'] },
              { type: 'multiple-choice', question: 'Im p-V-Diagramm entspricht Arbeit ...', options: ['der Steigung', 'der Fläche unter der Kurve', 'dem Achsenabschnitt', 'nur dem Enddruck'], correctIndex: 1, explanation: 'W = ∫p dV ist eine Fläche.', hints: ['Integral über p nach V.'] },
              { type: 'true-false', statement: 'Bei ΔV = 0 ist die Volumenänderungsarbeit null.', correct: true, explanation: 'Ohne Volumenänderung ist ∫p dV = 0.', hints: ['Isochorer Prozess.'] },
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
              { type: 'number-input', question: 'Ein System erhält Q = 500 J Wärme und gibt W = 200 J Arbeit ab. Berechne ΔU nach dem ersten Hauptsatz.', correctAnswer: 300, tolerance: 0.01, unit: 'J', explanation: 'ΔU = Q − W = 500 − 200 = 300 J.', hints: ['Vorzeichenkonvention beachten.'] },
              { type: 'multiple-choice', question: 'Der erste Hauptsatz beschreibt:', options: ['Impulserhaltung', 'Energieerhaltung', 'Massenerhaltung', 'Reibungsgesetz'], correctIndex: 1, explanation: 'Er bilanziert Wärme, Arbeit und innere Energie.', hints: ['ΔU = Q − W.'] },
              { type: 'true-false', statement: 'Wenn ein System Arbeit abgibt und keine Wärme erhält, sinkt seine innere Energie.', correct: true, explanation: 'Q=0, W>0 → ΔU = −W.', hints: ['Setze in ΔU = Q − W ein.'] },
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
              { type: 'number-input', question: 'Eine Maschine liefert 80 J Nutzenergie bei 100 J zugeführter Energie. Berechne den Wirkungsgrad η.', correctAnswer: 0.8, tolerance: 0.01, unit: '', explanation: 'η = 80/100 = 0,8 = 80%.', hints: ['Quotient aus Nutzen und Aufwand.'] },
              { type: 'multiple-choice', question: 'η = 0,35 bedeutet:', options: ['35% Nutzanteil', '3,5% Nutzanteil', '350% Nutzanteil', 'keine Verluste'], correctIndex: 0, explanation: '0,35 entspricht 35%.', hints: ['Mit 100 multiplizieren.'] },
              { type: 'true-false', statement: 'Ein realer Wärmekraftprozess hat η = 1.', correct: false, explanation: 'Reale Prozesse haben Verluste und liegen unter 1.', hints: ['Zweiter Hauptsatz begrenzt die Umwandlung.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Carnot-Maschine: T_warm = 600 K, T_kalt = 300 K. Maximaler Wirkungsgrad?', correctAnswer: 0.5, tolerance: 0.01, unit: '', explanation: 'η_C = 1 - 300/600 = 1 - 0,5 = 0,5 = 50%.', hints: ['η_C = 1 - T_kalt/T_warm', 'Temperaturen in Kelvin!'] },
              { type: 'number-input', question: '[PRÜFUNG] Isotherme Expansion: 1 mol ideales Gas bei T = 300 K expandiert von 10 L auf 20 L. Arbeit W? (R = 8,314)', correctAnswer: 1729, tolerance: 20, unit: 'J', explanation: 'W = nRT·ln(V₂/V₁) = 1·8,314·300·ln(2) = 2494·0,693 ≈ 1729 J.', hints: ['W = nRT·ln(V₂/V₁)', 'ln(2) ≈ 0,693'] },
              { type: 'number-input', question: '[PRÜFUNG] Adiabatische Kompression: p₁ = 100 kPa, V₁ = 0,01 m³, V₂ = 0,005 m³, γ = 1,4. Berechne p₂.', correctAnswer: 264, tolerance: 5, unit: 'kPa', explanation: 'p₁V₁^γ = p₂V₂^γ → p₂ = p₁·(V₁/V₂)^γ = 100·2^1,4 = 100·2,639 ≈ 264 kPa.', hints: ['pV^γ = const', '2^1,4 ≈ 2,64'] },
              { type: 'true-false', statement: '[PRÜFUNG] Bei einer isochoren Zustandsänderung wird keine Volumenänderungsarbeit verrichtet.', correct: true, explanation: 'Isochor: V = const → ΔV = 0 → W = ∫p dV = 0.', hints: ['Was bedeutet isochor?'] },
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
      prerequisites: ['technische-mechanik'],
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
            content: String.raw`In einem ruhenden Fluid steigt der Druck mit der Tiefe:

$$p = \rho g h$$

Dazu kommt je nach Bezug noch der Umgebungsdruck.`,
            exercises: [
              { type: 'number-input', question: 'Wasser: ρ = 1000 kg/m³, g = 9,81 m/s², h = 2 m. p gerundet?', correctAnswer: 19620, tolerance: 20, unit: 'Pa', explanation: 'p = 1000·9,81·2 = 19620 Pa.', hints: ['Setze direkt in ρgh ein.'] },
              { type: 'multiple-choice', question: 'Hydrostatischer Druck hängt direkt ab von:', options: ['Tiefe', 'Behälterfarbe', 'Oberflächenrauheit', 'Zeit'], correctIndex: 0, explanation: 'p = ρgh.', hints: ['h steht in der Formel.'] },
              { type: 'true-false', statement: 'In doppelter Tiefe ist der hydrostatische Druck doppelt so groß.', correct: true, explanation: 'Bei konstantem ρ und g ist p proportional h.', hints: ['Lineare Abhängigkeit.'] },
            ],
          },
          {
            id: 'fluid-1-2',
            title: 'Auftrieb',
            learningGoals: ['Archimedisches Prinzip verwenden', 'Verdrängtes Volumen erkennen'],
            content: String.raw`Die Auftriebskraft entspricht dem Gewicht der verdrängten Flüssigkeit:

$$F_A = \rho_\text{Fluid} \cdot g \cdot V_\text{verdrängt}$$`,
            exercises: [
              { type: 'number-input', question: 'Ein Körper verdrängt 0,01 m³ Wasser. Berechne die Auftriebskraft in Wasser gerundet.', correctAnswer: 98.1, tolerance: 0.5, unit: 'N', explanation: 'F_A = 1000·9,81·0,01 = 98,1 N.', hints: ['Nutze Archimedes.'] },
              { type: 'multiple-choice', question: 'Auftrieb hängt ab vom ...', options: ['Volumen des verdrängten Fluids', 'Namen des Körpers', 'Farbton', 'Luftdruck allein'], correctIndex: 0, explanation: 'Das verdrängte Fluidvolumen bestimmt die Auftriebskraft.', hints: ['F_A = ρgV.'] },
              { type: 'true-false', statement: 'Ein Körper schwimmt, wenn Auftrieb und Gewichtskraft im Gleichgewicht sind.', correct: true, explanation: 'Im stationären Schwimmen gilt F_A = F_G.', hints: ['Kräftegleichgewicht vertikal.'] },
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
              { type: 'number-input', question: 'Für eine inkompressible Strömung gilt A1 = 4 cm², v1 = 2 m/s und A2 = 2 cm². Berechne v2.', correctAnswer: 4, tolerance: 0.01, unit: 'm/s', explanation: 'A1 v1 = A2 v2 → v2 = 4·2/2 = 4 m/s.', hints: ['Querschnitt halbiert → Geschwindigkeit verdoppelt.'] },
              { type: 'multiple-choice', question: 'Volumenstrom wird berechnet mit:', options: ['A·v', 'A/v', 'v/A', 'ρgH'], correctIndex: 0, explanation: 'Vdot = A·v.', hints: ['Fläche mal Geschwindigkeit.'] },
              { type: 'true-false', statement: 'Bei kleinerem Querschnitt und gleichem Volumenstrom wird v größer.', correct: true, explanation: 'A·v bleibt konstant.', hints: ['Kontinuitätsgleichung.'] },
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
              { type: 'multiple-choice', question: 'Der Term 1/2 ρ v² beschreibt:', options: ['statischen Druck', 'dynamischen Druck', 'Höhendruck', 'Temperatur'], correctIndex: 1, explanation: '1/2 ρ v² ist der dynamische Druck.', hints: ['Der Term enthält v².'] },
              { type: 'true-false', statement: 'Bernoulli berücksichtigt im Grundmodell keine Reibungsverluste.', correct: true, explanation: 'Die einfache Bernoulli-Gleichung gilt idealisiert reibungsfrei.', hints: ['Reale Rohrströmung braucht Verlustterme.'] },
              { type: 'number-input', question: 'ρ = 1000 kg/m³, v = 2 m/s. Dynamischer Druck?', correctAnswer: 2000, tolerance: 1, unit: 'Pa', explanation: 'q = 1/2·1000·2² = 2000 Pa.', hints: ['v² = 4.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Wasser (ρ = 1000) fließt durch ein Rohr: v₁ = 2 m/s, d₁ = 100 mm, d₂ = 50 mm. Berechne v₂.', correctAnswer: 8, tolerance: 0.1, unit: 'm/s', explanation: 'A₁v₁ = A₂v₂. A₁/A₂ = (d₁/d₂)² = (100/50)² = 4. v₂ = 4·2 = 8 m/s.', hints: ['Kontinuität: A₁v₁ = A₂v₂', 'A = πd²/4 → A-Verhältnis = (d₁/d₂)²'] },
              { type: 'number-input', question: '[PRÜFUNG] Ein Tank steht offen (p₁ = 101325 Pa). Ausflusshöhe h = 5 m über dem Auslass. Ausflussgeschwindigkeit? (ρ = 1000, g = 9,81)', correctAnswer: 9.9, tolerance: 0.2, unit: 'm/s', explanation: 'Torricelli: v = √(2gh) = √(2·9,81·5) = √98,1 ≈ 9,9 m/s.', hints: ['Bernoulli mit p₁ = p₂ (beides offen), v₁ ≈ 0', 'v = √(2gh)'] },
              { type: 'number-input', question: '[PRÜFUNG] Wasser fließt mit v = 1 m/s durch ein Rohr d = 50 mm. Dynamische Viskosität μ = 0,001 Pa·s. Reynolds-Zahl?', correctAnswer: 50000, tolerance: 100, unit: '', explanation: 'Re = ρvd/μ = 1000·1·0,05/0,001 = 50000.', hints: ['Re = ρvd/μ', 'd in Meter: 50 mm = 0,05 m'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Bei Re = 50000 ist die Strömung:', options: ['laminar', 'im Übergangsbereich', 'turbulent', 'stationär'], correctIndex: 2, explanation: 'Re > 4000 → turbulent (Rohrströmung).', hints: ['Grenzwert: ca. 2300 (laminar/turbulent)'] },
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
      prerequisites: ['festigkeitslehre'],
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
            content: String.raw`Schraubenverbindungen nutzen **Vorspannung**, um Bauteile zu klemmen.

Bei Betriebslast darf die Klemmkraft nicht vollständig abgebaut werden, sonst können Fugen öffnen und Schrauben zyklisch überlastet werden.`,
            exercises: [
              { type: 'multiple-choice', question: 'Wozu dient Schraubenvorspannung hauptsächlich?', options: ['Dekoration', 'Klemmkraft in der Fuge erzeugen', 'Masse erhöhen', 'Drehzahl messen'], correctIndex: 1, explanation: 'Vorspannung erzeugt Klemmkraft und stabilisiert die Verbindung.', hints: ['Schrauben klemmen Bauteile zusammen.'] },
              { type: 'true-false', statement: 'Eine korrekt vorgespannte Schraube kann Betriebslasten günstiger aufnehmen.', correct: true, explanation: 'Die Vorspannung reduziert ungünstige Lastwechsel im Schraubenschaft.', hints: ['Kraftfluss wird aufgeteilt.'] },
              { type: 'number-input', question: 'Eine Schraube trägt 12 kN von insgesamt 48 kN. Berechne den Lastanteil als Dezimalzahl.', correctAnswer: 0.25, tolerance: 0.01, unit: '', explanation: '12/48 = 0,25 = 25%.', hints: ['Teil durch Gesamt.'] },
            ],
          },
          {
            id: 'melem-1-2',
            title: 'Passfedern und formschlüssige Verbindungen',
            learningGoals: ['Formschluss von Kraftschluss unterscheiden', 'Drehmomentübertragung beschreiben'],
            content: String.raw`Eine Passfeder überträgt Drehmoment über **Formschluss** zwischen Welle und Nabe.

Formschluss bedeutet: Geometrie verhindert Relativbewegung. Kraftschluss bedeutet: Reibung verhindert Relativbewegung.`,
            exercises: [
              { type: 'multiple-choice', question: 'Eine Passfeder ist primär eine ...', options: ['stoffschlüssige Verbindung', 'formschlüssige Verbindung', 'thermische Isolation', 'Messsensorik'], correctIndex: 1, explanation: 'Passfedern übertragen Drehmoment durch Formschluss.', hints: ['Geometrie greift ineinander.'] },
              { type: 'true-false', statement: 'Kraftschluss beruht im Kern auf Reibung.', correct: true, explanation: 'Kraftschluss nutzt Normalkraft und Reibwert.', hints: ['Beispiel: Klemmverbindung.'] },
              { type: 'multiple-choice', question: 'Drehmoment wird bei Welle-Nabe-Verbindungen übertragen, um ...', options: ['Rotation weiterzugeben', 'Temperatur zu senken', 'Druck zu messen', 'Gewicht zu erzeugen'], correctIndex: 0, explanation: 'Welle-Nabe-Verbindungen dienen der Drehmomentübertragung.', hints: ['Welle rotiert.'] },
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
              { type: 'multiple-choice', question: 'Eine Radiallast wirkt ...', options: ['entlang der Wellenachse', 'quer zur Wellenachse', 'immer tangential', 'nie auf Lager'], correctIndex: 1, explanation: 'Radial bedeutet quer zur Achse.', hints: ['Radiusrichtung liegt quer zur Achse.'] },
              { type: 'true-false', statement: 'Lager sollen Bewegung führen und Kräfte aufnehmen.', correct: true, explanation: 'Lager erfüllen Führungs- und Stützfunktion.', hints: ['Ohne Lager keine definierte Wellenlagerung.'] },
              { type: 'multiple-choice', question: 'Eine Welle dient hauptsächlich der Übertragung von:', options: ['Drehmoment', 'Farbe', 'Temperatur allein', 'Druckhöhe'], correctIndex: 0, explanation: 'Wellen übertragen Drehmoment und Drehbewegung.', hints: ['Rotierende Maschine.'] },
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
              { type: 'number-input', question: 'Ein Zahnradpaar hat z1 = 20 und z2 = 60 Zähne. Berechne die Übersetzung i = z2/z1.', correctAnswer: 3, tolerance: 0.01, unit: '', explanation: 'i = z2/z1 = 60/20 = 3.', hints: ['Abtriebszähne durch Antriebszähne.'] },
              { type: 'multiple-choice', question: 'Bei i = 3 ist n2 gegenüber n1 ...', options: ['dreimal so groß', 'gleich groß', 'ein Drittel', 'negativ'], correctIndex: 2, explanation: 'i = n1/n2 = 3 → n2 = n1/3.', hints: ['Drehzahl sinkt bei Untersetzung.'] },
              { type: 'true-false', statement: 'Mehr Zähne am Abtriebsrad senken typischerweise die Abtriebsdrehzahl.', correct: true, explanation: 'Bei z2 > z1 entsteht eine Untersetzung.', hints: ['i = z2/z1.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Motor: P = 5 kW bei n = 1500 1/min. Drehmoment M?', correctAnswer: 31.83, tolerance: 0.5, unit: 'Nm', explanation: 'M = P/ω = 5000/(2π·1500/60) = 5000/157,08 ≈ 31,83 Nm.', hints: ['ω = 2πn/60', 'P in Watt: 5 kW = 5000 W'] },
              { type: 'number-input', question: '[PRÜFUNG] Zahnrad d = 100 mm, Drehmoment M = 50 Nm. Umfangskraft F_t?', correctAnswer: 1000, tolerance: 1, unit: 'N', explanation: 'F_t = 2M/d = 2·50/0,1 = 1000 N.', hints: ['F_t = 2M/d', 'd in Meter: 100 mm = 0,1 m'] },
              { type: 'number-input', question: '[PRÜFUNG] Zweistufiges Getriebe: i₁ = 3, i₂ = 4. Gesamtübersetzung?', correctAnswer: 12, tolerance: 0, unit: '', explanation: 'i_ges = i₁ · i₂ = 3 · 4 = 12.', hints: ['Mehrstufig: Übersetzungen multiplizieren.'] },
              { type: 'number-input', question: '[PRÜFUNG] Antrieb n₁ = 3000 1/min, i_ges = 12. Abtriebsdrehzahl?', correctAnswer: 250, tolerance: 0, unit: '1/min', explanation: 'n₂ = n₁/i = 3000/12 = 250 1/min.', hints: ['n₂ = n₁/i_ges'] },
            ],
          },
        ],
      },
    ],
  },
]

export const engineeringTopics = topicDefinitions.map(buildTopic)
