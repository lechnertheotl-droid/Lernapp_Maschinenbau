// ── Maschinenbau-Kernfächer: kompakter Curriculum-Scaffold ──────────────────
// Struktur bleibt kompatibel mit dem bestehenden Lesson-/Exercise-Engine-Shape.

function exerciseId(lessonId, index) {
  return `ex-${lessonId}-${String.fromCharCode(97 + index)}`
}

function expandExplanation(lesson) {
  return `${lesson.content}

**Arbeitsmuster:**
1. Lies zuerst die gesuchte Größe ab und markiere alle gegebenen Werte.
2. Prüfe die Einheiten. Rechne bei Bedarf in SI-Einheiten oder die zur Formel passende Einheit um.
3. Schreibe die Grundformel hin, stelle sie bei Bedarf um und setze erst danach Zahlen ein.
4. Prüfe am Ende, ob Größenordnung und Einheit plausibel sind.

**Typische Fehler:** Formel ohne Einheitenkontrolle einsetzen, falsche Richtung/Vorzeichen übernehmen oder eine Prozentangabe nicht als Dezimalzahl interpretieren.`
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
4. Gleichgewichtsbedingungen aufstellen: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$`,
            visualization: {
              title: 'Resultierende zweier Kräfte', visualizationId: 'vector-diagram',
              params: { vectors: [{ x: 3, y: 0, color: '#003DA5', label: 'F1' }, { x: 0, y: 2, color: '#dc2626', label: 'F2' }], showGrid: true, showSum: true },
            },
            exercises: [
              { type: 'multiple-choice', question: 'Was gehört in ein Freikörperbild?', options: ['Nur bekannte Kräfte', 'Alle äußeren Kräfte und Lagerreaktionen', 'Nur Beschleunigungen', 'Nur Maße'], correctIndex: 1, explanation: 'Ein Freikörperbild zeigt alle äußeren Kräfte und unbekannten Reaktionsgrößen.', hints: ['Kontakte werden durch Reaktionskräfte ersetzt.'] },
              { type: 'number-input', question: 'Zwei rechtwinklige Kräfte 3 N und 4 N wirken am Punkt. Betrag der Resultierenden?', correctAnswer: 5, tolerance: 0.01, unit: 'N', explanation: 'R = sqrt(3² + 4²) = 5 N.', hints: ['Pythagoras: 3-4-5-Dreieck.'] },
              { type: 'true-false', question: 'Im statischen Gleichgewicht muss die Summe aller Kräfte null sein.', isTrue: true, explanation: 'Für Translation gilt ΣF = 0; zusätzlich gilt für Rotation ΣM = 0.', hints: ['Statik bedeutet keine resultierende Beschleunigung.'] },
            ],
          },
          {
            id: 'mech-1-2',
            title: 'Momente und Hebelarm',
            learningGoals: ['Moment als Kraft mal Hebelarm berechnen', 'Drehsinn korrekt berücksichtigen'],
            content: String.raw`Das **Moment** beschreibt die Drehwirkung einer Kraft.

$$M = F \cdot l_\perp$$

Dabei ist $l_\perp$ der senkrechte Abstand zwischen Drehpunkt und Wirkungslinie der Kraft. Vorzeichen werden über den Drehsinn festgelegt.`,
            exercises: [
              { type: 'number-input', question: 'Eine Kraft F = 20 N greift mit senkrechtem Hebelarm l = 0,5 m an. Berechne das Moment.', correctAnswer: 10, tolerance: 0.01, unit: 'Nm', explanation: 'M = F·l = 20·0,5 = 10 Nm.', hints: ['Einheit: Newtonmeter.'] },
              { type: 'multiple-choice', question: 'Der wirksame Hebelarm ist ...', options: ['immer die Stablänge', 'der senkrechte Abstand zur Wirkungslinie', 'die Kraft mal Weg', 'der Winkel in Grad'], correctIndex: 1, explanation: 'Nur der senkrechte Abstand zur Wirkungslinie zählt.', hints: ['Drehwirkung entsteht senkrecht zur Kraftlinie.'] },
              { type: 'true-false', question: 'Wenn die Wirkungslinie durch den Drehpunkt geht, ist das Moment null.', isTrue: true, explanation: 'Dann ist der senkrechte Hebelarm 0.', hints: ['M = F·l_perp.'] },
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
            exercises: [
              { type: 'number-input', question: 'Welche Kraft beschleunigt 4 kg mit 3 m/s²?', correctAnswer: 12, tolerance: 0.01, unit: 'N', explanation: 'F = m·a = 4·3 = 12 N.', hints: ['Nutze F = m·a.'] },
              { type: 'multiple-choice', question: 'Gewichtskraft wird berechnet mit:', options: ['m/a', 'm·g', 'g/m', 'm+g'], correctIndex: 1, explanation: 'F_G = m·g.', hints: ['g ≈ 9,81 m/s².'] },
              { type: 'true-false', question: 'Bei doppelter Masse und gleicher Beschleunigung ist die nötige Kraft doppelt so groß.', isTrue: true, explanation: 'F ist proportional zu m.', hints: ['F = m·a.'] },
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
              { type: 'true-false', question: 'Potentielle Energie im Schwerefeld ist E = m·g·h.', isTrue: true, explanation: 'Diese Formel gilt nahe der Erdoberfläche bei konstanter Fallbeschleunigung.', hints: ['Höhe h zählt relativ zum Nullniveau.'] },
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
            exercises: [
              { type: 'number-input', question: 'F = 1000 N, A = 100 mm². Spannung in N/mm²?', correctAnswer: 10, tolerance: 0.01, unit: 'N/mm²', explanation: 'σ = F/A = 1000/100 = 10 N/mm² = 10 MPa.', hints: ['N/mm² entspricht MPa.'] },
              { type: 'multiple-choice', question: 'Welche Einheit passt zu Spannung?', options: ['N', 'Nm', 'Pa', 'm/s²'], correctIndex: 2, explanation: 'Spannung ist Kraft pro Fläche, also N/m² = Pa.', hints: ['Druck und Spannung haben dieselbe SI-Einheit.'] },
              { type: 'true-false', question: 'Bei gleicher Kraft sinkt die Spannung, wenn die Fläche größer wird.', isTrue: true, explanation: 'σ = F/A; größere Fläche bedeutet kleinere Spannung.', hints: ['Fläche steht im Nenner.'] },
            ],
          },
          {
            id: 'fest-1-2',
            title: 'Hookesches Gesetz',
            learningGoals: ['Linearen elastischen Bereich erkennen', 'E-Modul interpretieren'],
            content: String.raw`Im linear-elastischen Bereich gilt:

$$\sigma = E \cdot \varepsilon$$

Der E-Modul beschreibt die Steifigkeit des Materials. Stahl hat ungefähr $E = 210000$ MPa.`,
            visualization: { title: 'Spannung-Dehnung linear', visualizationId: 'function-graph', params: { functions: [{ fn: (x) => 2 * x, color: '#003DA5', label: 'σ = E·ε' }], xRange: [0, 3], yRange: [0, 7], showGrid: true } },
            exercises: [
              { type: 'number-input', question: 'Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ.', correctAnswer: 200, tolerance: 0.01, unit: 'MPa', explanation: 'σ = E·ε = 200000·0,001 = 200 MPa.', hints: ['Dehnung ist dimensionslos.'] },
              { type: 'multiple-choice', question: 'Ein größerer E-Modul bedeutet:', options: ['geringere Steifigkeit', 'höhere Steifigkeit', 'immer höhere Dichte', 'keine elastische Verformung'], correctIndex: 1, explanation: 'Je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig.', hints: ['E ist die Steigung im σ-ε-Diagramm.'] },
              { type: 'true-false', question: 'Hooke gilt uneingeschränkt bis zum Bruch.', isTrue: false, explanation: 'Hooke gilt nur im linear-elastischen Bereich.', hints: ['Nach der Streckgrenze wird das Verhalten nichtlinear/plastisch.'] },
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
              { type: 'true-false', question: 'Das Widerstandsmoment hat Einfluss auf die Biegespannung.', isTrue: true, explanation: 'σ_b = M_b/W_b.', hints: ['W_b steht im Nenner.'] },
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
              { type: 'true-false', question: 'Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist.', isTrue: true, explanation: 'Dann bleibt die vorhandene Beanspruchung unter der zulässigen Grenze.', hints: ['Vorhanden ≤ zulässig.'] },
              { type: 'multiple-choice', question: 'Wenn S größer gewählt wird, wird σ_zul ...', options: ['größer', 'kleiner', 'unverändert', 'negativ'], correctIndex: 1, explanation: 'σ_zul = R/S; größere Sicherheit senkt die zulässige Spannung.', hints: ['S steht im Nenner.'] },
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
            exercises: [
              { type: 'number-input', question: '20 °C entsprechen gerundet wie viel Kelvin?', correctAnswer: 293.15, tolerance: 0.1, unit: 'K', explanation: 'T = 20 + 273,15 = 293,15 K.', hints: ['Addiere 273,15.'] },
              { type: 'multiple-choice', question: 'Welche Größe ist absolute Temperatur?', options: ['°C', 'K', 'bar', 'Pa'], correctIndex: 1, explanation: 'Thermodynamische Rechnungen verwenden Kelvin.', hints: ['Kelvin beginnt beim absoluten Nullpunkt.'] },
              { type: 'true-false', question: 'Bei konstantem Volumen steigt der Druck eines idealen Gases mit der Temperatur.', isTrue: true, explanation: 'Aus pV=nRT folgt bei V,n konstant: p proportional T.', hints: ['T muss in Kelvin betrachtet werden.'] },
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
              { type: 'true-false', question: 'Bei ΔV = 0 ist die Volumenänderungsarbeit null.', isTrue: true, explanation: 'Ohne Volumenänderung ist ∫p dV = 0.', hints: ['Isochorer Prozess.'] },
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
              { type: 'true-false', question: 'Wenn ein System Arbeit abgibt und keine Wärme erhält, sinkt seine innere Energie.', isTrue: true, explanation: 'Q=0, W>0 → ΔU = −W.', hints: ['Setze in ΔU = Q − W ein.'] },
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
              { type: 'true-false', question: 'Ein realer Wärmekraftprozess hat η = 1.', isTrue: false, explanation: 'Reale Prozesse haben Verluste und liegen unter 1.', hints: ['Zweiter Hauptsatz begrenzt die Umwandlung.'] },
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
              { type: 'true-false', question: 'In doppelter Tiefe ist der hydrostatische Druck doppelt so groß.', isTrue: true, explanation: 'Bei konstantem ρ und g ist p proportional h.', hints: ['Lineare Abhängigkeit.'] },
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
              { type: 'true-false', question: 'Ein Körper schwimmt, wenn Auftrieb und Gewichtskraft im Gleichgewicht sind.', isTrue: true, explanation: 'Im stationären Schwimmen gilt F_A = F_G.', hints: ['Kräftegleichgewicht vertikal.'] },
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
              { type: 'true-false', question: 'Bei kleinerem Querschnitt und gleichem Volumenstrom wird v größer.', isTrue: true, explanation: 'A·v bleibt konstant.', hints: ['Kontinuitätsgleichung.'] },
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
              { type: 'true-false', question: 'Bernoulli berücksichtigt im Grundmodell keine Reibungsverluste.', isTrue: true, explanation: 'Die einfache Bernoulli-Gleichung gilt idealisiert reibungsfrei.', hints: ['Reale Rohrströmung braucht Verlustterme.'] },
              { type: 'number-input', question: 'ρ = 1000 kg/m³, v = 2 m/s. Dynamischer Druck?', correctAnswer: 2000, tolerance: 1, unit: 'Pa', explanation: 'q = 1/2·1000·2² = 2000 Pa.', hints: ['v² = 4.'] },
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
              { type: 'true-false', question: 'Eine korrekt vorgespannte Schraube kann Betriebslasten günstiger aufnehmen.', isTrue: true, explanation: 'Die Vorspannung reduziert ungünstige Lastwechsel im Schraubenschaft.', hints: ['Kraftfluss wird aufgeteilt.'] },
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
              { type: 'true-false', question: 'Kraftschluss beruht im Kern auf Reibung.', isTrue: true, explanation: 'Kraftschluss nutzt Normalkraft und Reibwert.', hints: ['Beispiel: Klemmverbindung.'] },
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
              { type: 'true-false', question: 'Lager sollen Bewegung führen und Kräfte aufnehmen.', isTrue: true, explanation: 'Lager erfüllen Führungs- und Stützfunktion.', hints: ['Ohne Lager keine definierte Wellenlagerung.'] },
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
              { type: 'true-false', question: 'Mehr Zähne am Abtriebsrad senken typischerweise die Abtriebsdrehzahl.', isTrue: true, explanation: 'Bei z2 > z1 entsteht eine Untersetzung.', hints: ['i = z2/z1.'] },
            ],
          },
        ],
      },
    ],
  },
]

export const engineeringTopics = topicDefinitions.map(buildTopic)
