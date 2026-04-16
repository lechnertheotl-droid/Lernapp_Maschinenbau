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
      level: 'grundlagen',
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
              {
                type: 'multiple-choice',
                question: 'Was gehört in ein Freikörperbild?',
                options: ['Nur bekannte Kräfte', 'Alle äußeren Kräfte und Lagerreaktionen', 'Nur Beschleunigungen', 'Nur Maße'],
                correctIndex: 1,
                explanation: 'Ein Freikörperbild zeigt alle äußeren Kräfte und unbekannten Reaktionsgrößen.',
                hints: ['Kontakte werden durch Reaktionskräfte ersetzt.'],
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
                hints: ['Pythagoras: 3-4-5-Dreieck.'],
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
                hints: ['Statik bedeutet keine resultierende Beschleunigung.'],
              },
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
              {
                type: 'number-input',
                question: 'Eine Kraft F = 20 N greift mit senkrechtem Hebelarm l = 0,5 m an. Berechne das Moment.',
                correctValue: 10,
                tolerance: 0.01,
                unit: 'Nm',
                explanation: 'M = F·l = 20·0,5 = 10 Nm.',
                hints: ['Einheit: Newtonmeter.'],
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
                hints: ['Drehwirkung entsteht senkrecht zur Kraftlinie.'],
              },
              {
                type: 'true-false',
                statement: 'Wenn die Wirkungslinie durch den Drehpunkt geht, ist das Moment null.',
                correct: true,
                explanation: 'Dann ist der senkrechte Hebelarm 0.',
                hints: ['M = F·l_perp.'],
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
                hints: ['ΣM um B: R_A·L = F·(L−a)', 'R_A = F·(L−a)/L'],
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
                hints: ['M_max = R_A · a', 'Max. Moment unter der Last.'],
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
                hints: ['Wo hat die M-Linie ihren Knick?'],
                visualization: {
                  id: 'interactive-beam',
                  params: {},
                  alt: 'Einfeldträger mit Biegemomentenverlauf.',
                },
              },
              { type: 'true-false', statement: 'Der Sprung in Q(x) am Lastangriff hat den Betrag F.', correct: true, explanation: 'Q springt um −F von R_A auf −R_B. Daraus ergibt sich die typische „Treppenstufe" im Querkraftverlauf.', hints: ['|ΔQ| = |F|'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Warum interessiert uns M_max in der Festigkeitslehre besonders?', options: ['Weil dort die maximale Biegespannung auftritt', 'Weil dort N am größten ist', 'Weil dort Q am größten ist', 'Zufall'], correctIndex: 0, explanation: 'Die Biegespannung ist σ_b = M/W mit W = Widerstandsmoment. M_max liefert die größte Spannung und damit die gefährliche Stelle.', hints: ['σ_b = M/W'] },
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
              { type: 'true-false', statement: 'Der Haftreibwert ist in der Regel größer als der Gleitreibwert.', correct: true, explanation: 'μ_0 > μ: Zum Losreißen braucht man mehr Kraft als zum Gleiterhalten.', hints: ['Anlaufkraft > Gleithaltekraft.'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Block (m = 5 kg) auf geneigter Ebene α = 30°, Gleitreibwert μ = 0,3, g = 9,81. Reibkraft beim Gleiten in N (gerundet auf ganze Zahlen)?', options: ['13 N', '15 N', '20 N', '25 N'], correctIndex: 0, explanation: 'F_N = m·g·cos30° = 5·9,81·0,866 = 42,47 N. F_R = 0,3·42,47 ≈ 12,7 N ≈ 13 N.', hints: ['F_N = m·g·cosα auf geneigter Ebene', 'F_R = μ · F_N', 'cos30° ≈ 0,866'] },
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
              { type: 'true-false', statement: 'Ein symmetrischer Körper hat seinen Schwerpunkt auf der Symmetrieachse.', correct: true, explanation: 'Symmetrie bedeutet, dass sich die Beiträge beider Hälften aufheben.', hints: ['Gleichmäßige Massenverteilung auf beiden Seiten.'] },
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
              { type: 'number-input', question: 'Welche Kraft beschleunigt 4 kg mit $3\\,m/s^2$?', correctValue: 12, tolerance: 0.01, unit: 'N', explanation: 'F = m·a = 4·3 = 12 N.', hints: ['Nutze F = m·a.'] },
              { type: 'multiple-choice', question: 'Gewichtskraft wird berechnet mit:', options: ['m/a', 'm·g', 'g/m', 'm+g'], correctIndex: 1, explanation: 'F_G = m·g.', hints: ['$g \\approx 9{,}81\\,m/s^2$.'] },
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
              { type: 'number-input', question: 'Eine Kraft von 50 N wirkt 3 m in Wegrichtung. Arbeit?', correctValue: 150, tolerance: 0.01, unit: 'J', explanation: 'W = F·s = 50·3 = 150 J.', hints: ['1 J = 1 Nm.'] },
              { type: 'multiple-choice', question: 'Wenn Kraft senkrecht zum Weg steht, ist die Arbeit:', options: ['maximal', 'negativ maximal', 'null', 'immer F·s'], correctIndex: 2, explanation: 'cos(90°)=0, also W=0.', hints: ['Skalarprodukt von senkrechten Vektoren ist 0.'] },
              { type: 'true-false', statement: 'Potentielle Energie im Schwerefeld ist E = m·g·h.', correct: true, explanation: 'Diese Formel gilt nahe der Erdoberfläche bei konstanter Fallbeschleunigung.', hints: ['Höhe h zählt relativ zum Nullniveau.'] },
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
              { type: 'number-input', question: 'Startgeschwindigkeit v0 = 0, Beschleunigung a = 2 m/s². Geschwindigkeit nach t = 5 s?', correctValue: 10, tolerance: 0.01, unit: 'm/s', explanation: 'v = v_0 + a·t = 0 + 2·5 = 10 m/s.', hints: ['v = v_0 + a·t', 'v_0 = 0 hier'] },
              { type: 'number-input', question: 'Körper startet mit v0 = 3 m/s, a = 1,5 m/s². Zurückgelegter Weg nach t = 4 s?', correctValue: 24, tolerance: 0.1, unit: 'm', explanation: 's = v_0·t + ½·a·t² = 3·4 + ½·1,5·16 = 12 + 12 = 24 m.', hints: ['s = v_0·t + ½·a·t²', '½·1,5·4² = 12'] },
              { type: 'number-input', question: '[PRÜFUNG] Kreis: r = 0,5 m, n = 600 1/min. Bahngeschwindigkeit v? (Runde auf eine Dezimalstelle)', correctValue: 31.4, tolerance: 0.5, unit: 'm/s', explanation: 'ω = 2π·n/60 = 2π·600/60 = 20π = 62,83 rad/s. v = r·ω = 0,5·62,83 ≈ 31,4 m/s.', hints: ['ω = 2πn/60 (n in 1/min)', 'v = r·ω', '20π ≈ 62,83 rad/s'] },
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
              { type: 'number-input', question: 'Feder-Masse-System: c = 400 N/m, m = 1 kg. Eigenkreisfrequenz ω₀?', correctValue: 20, tolerance: 0.01, unit: 'rad/s', explanation: 'ω₀ = √(c/m) = √(400/1) = √400 = 20 rad/s.', hints: ['ω₀ = √(c/m)', '√400 = 20'] },
              { type: 'number-input', question: 'Masse m = 4 kg, Federsteifigkeit c = 100 N/m. Schwingungsdauer T?', correctValue: 1.257, tolerance: 0.01, unit: 's', explanation: 'ω₀ = √(100/4) = 5 rad/s. T = 2π/ω₀ = 2π/5 ≈ 1,257 s.', hints: ['ω₀ = √(c/m) = 5 rad/s', 'T = 2π/ω₀', '2π/5 ≈ 1,257'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Resonanz tritt auf, wenn die Erregerfrequenz Ω ...', options: ['gleich der Eigenfrequenz ω₀ ist', 'doppelt so groß wie ω₀ ist', 'null ist', 'größer als 100 rad/s ist'], correctIndex: 0, explanation: 'Resonanz tritt bei Ω = ω₀ auf. Bei ungedämpften Systemen wächst die Amplitude dabei theoretisch unbegrenzt an.', hints: ['Resonanz: Erregerfrequenz = Eigenfrequenz', 'ω₀ = √(c/m)'] },
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
              { type: 'number-input', question: 'Vollzylinder: m = 2 kg, R = 0,1 m. Massenträgheitsmoment J?', correctValue: 0.01, tolerance: 0.001, unit: 'kg·m²', explanation: 'J = ½·m·R² = ½·2·0,1² = ½·2·0,01 = 0,01 kg·m².', hints: ['J_Zylinder = ½·m·R²', 'R² = 0,01'] },
              { type: 'number-input', question: 'Ein Motor erzeugt M = 50 Nm. Trägheitsmoment J = 0,5 kg·m². Winkelbeschleunigung α?', correctValue: 100, tolerance: 0.1, unit: 'rad/s²', explanation: 'α = M/J = 50/0,5 = 100 rad/s².', hints: ['M = J·α → α = M/J', 'α = 50/0,5'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Balken (4 m), Festlager links, Loslager rechts. Einzellast F = 600 N bei x = 1 m vom linken Lager. Berechne R_B (rechtes Lager).', correctValue: 150, tolerance: 1, unit: 'N', explanation: 'ΣM_A = 0: F·1 = R_B·4 → R_B = 600·1/4 = 150 N.', hints: ['Momentengleichung um Punkt A aufstellen.', 'F·a = R_B·L'] },
              { type: 'number-input', question: '[PRÜFUNG] Zwei Kräfte $F_1$ = 5 kN (30° zur Horizontalen) und $F_2$ = 3 kN (vertikal). Betrag der Resultierenden? Runde auf eine Dezimalstelle.', correctValue: 7.0, tolerance: 0.1, unit: 'kN', explanation: 'Zerlege zuerst $F_1$: Rx = 5·cos30° = 4,33 kN und Ry = 5·sin30° + 3 = 5,5 kN. Dann R = $\\sqrt{4{,}33^2 + 5{,}5^2}$ = $\\sqrt{49{,}0}$ ≈ 7,0 kN. Typischer Fehler: die vertikale 3-kN-Kraft nicht zu Ry addieren.', hints: ['Zerlege $F_1$ in horizontale und vertikale Komponente.', 'Addiere $F_2$ zur vertikalen Komponente.', '$R = \\sqrt{R_x^2 + R_y^2}$.'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Ein Loslager kann aufnehmen:', options: ['Kräfte in alle Richtungen + Moment', 'Nur eine Kraft senkrecht zur Auflagerfläche', 'Kräfte in x und y, aber kein Moment', 'Nur ein Moment'], correctIndex: 1, explanation: 'Ein Loslager (Gleitlager) nimmt nur eine Kraft senkrecht zur Gleitfläche auf.', hints: ['Das Loslager kann sich in einer Richtung frei bewegen.'] },
              { type: 'number-input', question: '[PRÜFUNG] Kragbalken (Einspannung links), Länge 2 m, Einzellast F = 500 N am freien Ende. Einspannmoment?', correctValue: 1000, tolerance: 1, unit: 'Nm', explanation: 'M = F·L = 500·2 = 1000 Nm.', hints: ['Bei einem Kragbalken: M_Einspannung = F·L'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Ein 2 kg Block rutscht reibungsfrei eine 3 m hohe Rampe hinunter. Geschwindigkeit unten? (g = 9,81)', correctValue: 7.67, tolerance: 0.1, unit: 'm/s', explanation: '$\\frac{1}{2}mv^2$ = mgh → $v = \\sqrt{2gh}$ = $\\sqrt{2 \\cdot 9{,}81 \\cdot 3}$ = $\\sqrt{58{,}86}$ ≈ 7,67 m/s.', hints: ['Energieerhaltung: E_pot → E_kin', '$v = \\sqrt{2gh}$'] },
              { type: 'number-input', question: '[PRÜFUNG] Ein 5 kg Block wird mit μ = 0,3 auf ebenem Boden mit F = 40 N horizontal gezogen. Beschleunigung?', correctValue: 5.06, tolerance: 0.1, unit: 'm/s²', explanation: 'F_R = μ·m·g = 0,3·5·9,81 = 14,72 N. a = (F - F_R)/m = (40 - 14,72)/5 = 5,06 $m/s^2$.', hints: ['Reibkraft = μ·F_N = μ·m·g', 'F_netto = F - F_Reibung'] },
              { type: 'number-input', question: '[PRÜFUNG] Elastischer Stoß: Ball 1 (m=2kg, v=3m/s) trifft ruhenden Ball 2 (m=2kg). Geschwindigkeit von Ball 1 nach Stoß?', correctValue: 0, tolerance: 0.01, unit: 'm/s', explanation: 'Bei elastischem Stoß gleicher Massen: Ball 1 steht still, Ball 2 übernimmt die gesamte Geschwindigkeit.', hints: ['Gleiche Massen → vollständiger Geschwindigkeitstausch'] },
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
              { type: 'number-input', question: 'F = 1000 N, A = 100 $mm^2$. Spannung in $N/mm^2$?', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: 'σ = F/A = 1000/100 = 10 $N/mm^2$ = 10 MPa.', hints: ['$N/mm^2$ entspricht MPa.'] },
              { type: 'multiple-choice', question: 'Welche Einheit passt zu Spannung?', options: ['N', 'Nm', 'Pa', '$m/s^2$'], correctIndex: 2, explanation: 'Spannung ist Kraft pro Fläche, also $N/m^2$ = Pa.', hints: ['Druck und Spannung haben dieselbe SI-Einheit.'] },
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
              { type: 'number-input', question: 'Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ.', correctValue: 200, tolerance: 0.01, unit: 'MPa', explanation: 'σ = E·ε = 200000·0,001 = 200 MPa.', hints: ['Dehnung ist dimensionslos.'] },
              { type: 'multiple-choice', question: 'Ein größerer E-Modul bedeutet:', options: ['geringere Steifigkeit', 'höhere Steifigkeit', 'immer höhere Dichte', 'keine elastische Verformung'], correctIndex: 1, explanation: 'Je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig.', hints: ['E ist die Steigung im σ-ε-Diagramm.'] },
              { type: 'true-false', statement: 'Hooke gilt uneingeschränkt bis zum Bruch.', correct: false, explanation: 'Hooke gilt nur im linear-elastischen Bereich.', hints: ['Nach der Streckgrenze wird das Verhalten nichtlinear/plastisch.'] },
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
              { type: 'number-input', question: 'Gegeben sind $M_b$ = 200 Nm und $W_b$ = 20 $cm^3$. Mit 1 Nm = 1000 Nmm und 1 $cm^3$ = 1000 $mm^3$: Berechne $\\sigma_b$.', correctValue: 10, tolerance: 0.01, unit: 'N/mm²', explanation: '200 Nm = 200000 Nmm, 20 $cm^3$ = 20000 $mm^3$, $\\sigma$ = 10 $N/mm^2$.', hints: ['Einheiten zuerst auf Nmm und $mm^3$ bringen.'] },
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
              { type: 'number-input', question: 'Für eine Materialkennzahl R = 300 MPa und Sicherheitszahl S = 2: Berechne die zulässige Spannung.', correctValue: 150, tolerance: 0.01, unit: 'MPa', explanation: 'σ_zul = R/S = 300/2 = 150 MPa.', hints: ['Sicherheitszahl steht im Nenner.'] },
              { type: 'true-false', statement: 'Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist.', correct: true, explanation: 'Dann bleibt die vorhandene Beanspruchung unter der zulässigen Grenze.', hints: ['Vorhanden ≤ zulässig.'] },
              { type: 'multiple-choice', question: 'Wenn S größer gewählt wird, wird σ_zul ...', options: ['größer', 'kleiner', 'unverändert', 'negativ'], correctIndex: 1, explanation: 'σ_zul = R/S; größere Sicherheit senkt die zulässige Spannung.', hints: ['S steht im Nenner.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Rundstab d = 20 mm, Zugkraft F = 15 kN. Normalspannung σ in MPa?', correctValue: 47.75, tolerance: 0.5, unit: 'MPa', explanation: 'A = $\\pi \\cdot 20^2/4$ = 314,16 $mm^2$. σ = 15000/314,16 ≈ 47,7 MPa.', hints: ['$A = \\pi \\cdot d^2/4$', 'F in N umrechnen: 15 kN = 15000 N'] },
              { type: 'number-input', question: '[PRÜFUNG] Rechteckbalken b = 40 mm, h = 80 mm. Biegemoment M = 800 Nm. Maximale Biegespannung?', correctValue: 18.75, tolerance: 0.2, unit: 'MPa', explanation: '$W = bh^2/6$ = $40 \\cdot 80^2/6$ = 42667 $mm^3$. σ = 800000/42667 ≈ 18,8 MPa.', hints: ['$W = bh^2/6$', 'M in Nmm: 800·1000 = 800000 Nmm'] },
              { type: 'number-input', question: '[PRÜFUNG] σ = 120 MPa und τ = 60 MPa wirken gleichzeitig. Berechne die Von-Mises-Vergleichsspannung auf eine Dezimalstelle.', correctValue: 158.7, tolerance: 1, unit: 'MPa', explanation: 'Für Normalspannung plus Schubspannung gilt $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$. Einsetzen: $\\sigma_v = \\sqrt{120^2 + 3 \\cdot 60^2}$ = $\\sqrt{14400 + 10800}$ = $\\sqrt{25200}$ ≈ 158,7 MPa. Typischer Fehler: den Faktor 3 vor $\\tau^2$ wegzulassen.', hints: ['Nutze $\\sigma_v = \\sqrt{\\sigma^2 + 3\\tau^2}$.', 'Berechne zuerst $120^2$ und $3 \\cdot 60^2$.', 'Ziehe am Ende die Wurzel aus 25200.'] },
              { type: 'true-false', statement: '[PRÜFUNG] Die Streckgrenze Re von S235 beträgt mindestens 235 MPa.', correct: true, explanation: 'S235 bedeutet: Mindeststreckgrenze 235 MPa (daher der Name).', hints: ['Die Zahl im Werkstoffnamen gibt die Streckgrenze an.'] },
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
              { type: 'number-input', question: '20 °C entsprechen gerundet wie viel Kelvin?', correctValue: 293.15, tolerance: 0.1, unit: 'K', explanation: 'T = 20 + 273,15 = 293,15 K.', hints: ['Addiere 273,15.'] },
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
              { type: 'number-input', question: 'Bei konstantem Druck p = 200 kPa vergrößert sich das Volumen um ΔV = 0,01 $m^3$. Berechne die Volumenänderungsarbeit.', correctValue: 2000, tolerance: 1, unit: 'J', explanation: '200 kPa = 200000 Pa. W = p·ΔV = 200000·0,01 = 2000 J.', hints: ['Pa·$m^3$ = J.'] },
              { type: 'multiple-choice', question: 'Im p-V-Diagramm entspricht Arbeit ...', options: ['der Steigung', 'der Fläche unter der Kurve', 'dem Achsenabschnitt', 'nur dem Enddruck'], correctIndex: 1, explanation: '$W = \\int p\\,dV$ ist eine Fläche.', hints: ['Integral über p nach V.'] },
              { type: 'true-false', statement: 'Bei ΔV = 0 ist die Volumenänderungsarbeit null.', correct: true, explanation: 'Ohne Volumenänderung ist $\\int p\\,dV = 0$.', hints: ['Isochorer Prozess.'] },
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
              { type: 'number-input', question: 'Ein System erhält Q = 500 J Wärme und gibt W = 200 J Arbeit ab. Berechne ΔU nach dem ersten Hauptsatz.', correctValue: 300, tolerance: 0.01, unit: 'J', explanation: 'ΔU = Q − W = 500 − 200 = 300 J.', hints: ['Vorzeichenkonvention beachten.'] },
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
              { type: 'number-input', question: 'Eine Maschine liefert 80 J Nutzenergie bei 100 J zugeführter Energie. Berechne den Wirkungsgrad η.', correctValue: 0.8, tolerance: 0.01, unit: '', explanation: 'η = 80/100 = 0,8 = 80%.', hints: ['Quotient aus Nutzen und Aufwand.'] },
              { type: 'multiple-choice', question: 'η = 0,35 bedeutet:', options: ['35% Nutzanteil', '3,5% Nutzanteil', '350% Nutzanteil', 'keine Verluste'], correctIndex: 0, explanation: '0,35 entspricht 35%.', hints: ['Mit 100 multiplizieren.'] },
              { type: 'true-false', statement: 'Ein realer Wärmekraftprozess hat η = 1.', correct: false, explanation: 'Reale Prozesse haben Verluste und liegen unter 1.', hints: ['Zweiter Hauptsatz begrenzt die Umwandlung.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Carnot-Maschine: T_warm = 600 K, T_kalt = 300 K. Maximaler Wirkungsgrad?', correctValue: 0.5, tolerance: 0.01, unit: '', explanation: 'η_C = 1 - 300/600 = 1 - 0,5 = 0,5 = 50%.', hints: ['η_C = 1 - T_kalt/T_warm', 'Temperaturen in Kelvin!'] },
              { type: 'number-input', question: '[PRÜFUNG] Isotherme Expansion: 1 mol ideales Gas bei T = 300 K expandiert von 10 L auf 20 L. Arbeit W? (R = 8,314)', correctValue: 1729, tolerance: 20, unit: 'J', explanation: '$W = nRT \\cdot \\ln(V_2/V_1)$ = 1·8,314·300·ln(2) = 2494·0,693 ≈ 1729 J.', hints: ['$W = nRT \\cdot \\ln(V_2/V_1)$', 'ln(2) ≈ 0,693'] },
              { type: 'number-input', question: '[PRÜFUNG] Adiabatische Kompression: $p_1$ = 100 kPa, $V_1 = 0{,}01\\,m^3$, $V_2 = 0{,}005\\,m^3$, $\\gamma = 1{,}4$. Berechne $p_2$.', correctValue: 264, tolerance: 5, unit: 'kPa', explanation: '$p_1 V_1^\\gamma = p_2 V_2^\\gamma$ → $p_2 = p_1 \\cdot (V_1/V_2)^\\gamma$ = 100·2^1,4 = 100·2,639 ≈ 264 kPa.', hints: ['$pV^\\gamma = \\text{const}$', '2^1,4 ≈ 2,64'] },
              { type: 'true-false', statement: '[PRÜFUNG] Bei einer isochoren Zustandsänderung wird keine Volumenänderungsarbeit verrichtet.', correct: true, explanation: 'Isochor: $V = \\text{const}$ → $\\Delta V = 0$ → $W = \\int p\\,dV = 0$.', hints: ['Was bedeutet isochor?'] },
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
              { type: 'number-input', question: 'Wasser: ρ = 1000 $kg/m^3$, g = 9,81 $m/s^2$, h = 2 m. p gerundet?', correctValue: 19620, tolerance: 20, unit: 'Pa', explanation: 'p = 1000·9,81·2 = 19620 Pa.', hints: ['Setze direkt in ρgh ein.'] },
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
              { type: 'number-input', question: 'Ein Körper verdrängt 0,01 $m^3$ Wasser. Berechne die Auftriebskraft in Wasser gerundet.', correctValue: 98.1, tolerance: 0.5, unit: 'N', explanation: 'F_A = 1000·9,81·0,01 = 98,1 N.', hints: ['Nutze Archimedes.'] },
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
              { type: 'number-input', question: 'Für eine inkompressible Strömung gilt A1 = 4 $cm^2$, v1 = 2 m/s und A2 = 2 $cm^2$. Berechne v2.', correctValue: 4, tolerance: 0.01, unit: 'm/s', explanation: 'A1 v1 = A2 v2 → v2 = 4·2/2 = 4 m/s.', hints: ['Querschnitt halbiert → Geschwindigkeit verdoppelt.'] },
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
              { type: 'multiple-choice', question: 'Der Term $\\frac{1}{2} \\rho v^2$ beschreibt:', options: ['statischen Druck', 'dynamischen Druck', 'Höhendruck', 'Temperatur'], correctIndex: 1, explanation: '$\\frac{1}{2}\\rho v^2$ ist der dynamische Druck.', hints: ['Der Term enthält $v^2$.'] },
              { type: 'true-false', statement: 'Bernoulli berücksichtigt im Grundmodell keine Reibungsverluste.', correct: true, explanation: 'Die einfache Bernoulli-Gleichung gilt idealisiert reibungsfrei.', hints: ['Reale Rohrströmung braucht Verlustterme.'] },
              { type: 'number-input', question: 'ρ = 1000 $kg/m^3$, v = 2 m/s. Dynamischer Druck?', correctValue: 2000, tolerance: 1, unit: 'Pa', explanation: '$q = \\frac{1}{2} \\cdot 1000 \\cdot 2^2 = 2000$ Pa.', hints: ['$v^2 = 4$.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Wasser (ρ = 1000) fließt durch ein Rohr: $v_1$ = 2 m/s, $d_1$ = 100 mm, $d_2$ = 50 mm. Berechne $v_2$.', correctValue: 8, tolerance: 0.1, unit: 'm/s', explanation: '$A_1 v_1 = A_2 v_2$. $A_1/A_2$ = $(d_1/d_2)^2$ = $(100/50)^2$ = 4. $v_2$ = 4·2 = 8 m/s.', hints: ['Kontinuität: $A_1 v_1 = A_2 v_2$', '$A = \\pi d^2/4$ → A-Verhältnis = $(d_1/d_2)^2$'] },
              { type: 'number-input', question: '[PRÜFUNG] Ein Tank steht offen ($p_1$ = 101325 Pa). Ausflusshöhe h = 5 m über dem Auslass. Ausflussgeschwindigkeit? (ρ = 1000, g = 9,81)', correctValue: 9.9, tolerance: 0.2, unit: 'm/s', explanation: 'Torricelli: $v = \\sqrt{2gh}$ = $\\sqrt{2 \\cdot 9{,}81 \\cdot 5}$ = $\\sqrt{98{,}1}$ ≈ 9,9 m/s.', hints: ['Bernoulli mit $p_1 = p_2$ (beides offen), $v_1$ ≈ 0', '$v = \\sqrt{2gh}$'] },
              { type: 'number-input', question: '[PRÜFUNG] Wasser fließt mit v = 1 m/s durch ein Rohr d = 50 mm. Dynamische Viskosität μ = 0,001 Pa·s. Reynolds-Zahl?', correctValue: 50000, tolerance: 100, unit: '', explanation: 'Re = ρvd/μ = 1000·1·0,05/0,001 = 50000.', hints: ['Re = ρvd/μ', 'd in Meter: 50 mm = 0,05 m'] },
              { type: 'multiple-choice', question: '[PRÜFUNG] Bei Re = 50000 ist die Strömung:', options: ['laminar', 'im Übergangsbereich', 'turbulent', 'stationär'], correctIndex: 2, explanation: 'Re > 4000 → turbulent (Rohrströmung).', hints: ['Grenzwert: ca. 2300 (laminar/turbulent)'] },
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
              { type: 'number-input', question: 'Eine Schraube trägt 12 kN von insgesamt 48 kN. Berechne den Lastanteil als Dezimalzahl.', correctValue: 0.25, tolerance: 0.01, unit: '', explanation: '12/48 = 0,25 = 25%.', hints: ['Teil durch Gesamt.'] },
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
                hints: ['Stoffschluss verbindet dauerhaft', 'Beispiel lösbar: Schrauben'],
              },
              {
                type: 'multiple-choice',
                question: '[PRÜFUNG] Naht: a = 4 mm, l_w = 100 mm, F = 10 kN. Schubspannung τ?',
                options: ['25 N/mm²', '40 N/mm²', '10 N/mm²', '50 N/mm²'],
                correctIndex: 0,
                explanation: 'τ = F/(a·l_w) = 10000/(4·100) = 10000/400 = 25 N/mm².',
                hints: ['τ = F/(a·l_w)', 'F = 10000 N, a·l_w = 400 mm²', '10000/400 = 25'],
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
              { type: 'number-input', question: 'Ein Zahnradpaar hat z1 = 20 und z2 = 60 Zähne. Berechne die Übersetzung i = z2/z1.', correctValue: 3, tolerance: 0.01, unit: '', explanation: 'i = z2/z1 = 60/20 = 3.', hints: ['Abtriebszähne durch Antriebszähne.'] },
              { type: 'multiple-choice', question: 'Bei i = 3 ist n2 gegenüber n1 ...', options: ['dreimal so groß', 'gleich groß', 'ein Drittel', 'negativ'], correctIndex: 2, explanation: 'i = n1/n2 = 3 → n2 = n1/3.', hints: ['Drehzahl sinkt bei Untersetzung.'] },
              { type: 'true-false', statement: 'Mehr Zähne am Abtriebsrad senken typischerweise die Abtriebsdrehzahl.', correct: true, explanation: 'Bei z2 > z1 entsteht eine Untersetzung.', hints: ['i = z2/z1.'] },
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
              { type: 'number-input', question: '[PRÜFUNG] Motor: P = 5 kW bei n = 1500 1/min. Drehmoment M?', correctValue: 31.83, tolerance: 0.5, unit: 'Nm', explanation: 'M = P/ω = 5000/(2π·1500/60) = 5000/157,08 ≈ 31,83 Nm.', hints: ['ω = 2πn/60', 'P in Watt: 5 kW = 5000 W'] },
              { type: 'number-input', question: '[PRÜFUNG] Zahnrad d = 100 mm, Drehmoment M = 50 Nm. Umfangskraft F_t?', correctValue: 1000, tolerance: 1, unit: 'N', explanation: 'F_t = 2M/d = 2·50/0,1 = 1000 N.', hints: ['F_t = 2M/d', 'd in Meter: 100 mm = 0,1 m'] },
              { type: 'number-input', question: '[PRÜFUNG] Zweistufiges Getriebe: $i_1$ = 3, $i_2$ = 4. Gesamtübersetzung?', correctValue: 12, tolerance: 0, unit: '', explanation: 'i_ges = $i_1$ · $i_2$ = 3 · 4 = 12.', hints: ['Mehrstufig: Übersetzungen multiplizieren.'] },
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
]

export const engineeringTopics = topicDefinitions.map(buildTopic)
