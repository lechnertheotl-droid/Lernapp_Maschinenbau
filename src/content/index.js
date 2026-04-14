import { trigonometryTopic } from './mathematics/trigonometry/index'
import { ableitungTopic }    from './mathematics/ableitung/index'
import { vektorenTopic }     from './mathematics/vektoren/index'
import { algebraTopic }          from './mathematics/algebra/index'
import { lineareAlgebraTopic }   from './mathematics/lineare_algebra/index'
import { integralrechnungTopic } from './mathematics/integralrechnung/index'
import { dglTopic }             from './mathematics/dgl/index'
import { engineeringTopics } from './engineering/maschinenbau'
import { pythonMatlabTopic }  from './programming/python_matlab'
import { trigonometrySupplements } from './supplements/trigonometry'
import { algebraSupplements } from './supplements/algebra'
import { ableitungSupplements } from './supplements/ableitung'
import { vektorenSupplements } from './supplements/vektoren'
import { integralrechnungSupplements } from './supplements/integralrechnung'
import { dglSupplements } from './supplements/dgl'
import { lineareAlgebraSupplements } from './supplements/lineare_algebra'
import { pythonMatlabSupplements } from './supplements/python_matlab'
import { mechanikSupplements } from './supplements/mechanik'
import { festigkeitSupplements } from './supplements/festigkeit'
import { thermodynamikSupplements } from './supplements/thermodynamik'
import { fluidmechanikSupplements } from './supplements/fluidmechanik'
import { maschinenelementeSupplements } from './supplements/maschinenelemente'

// ── Registry ──────────────────────────────────────────────────────────────────
const MIN_EXERCISES_PER_LESSON = 10
const MANUAL_SUPPLEMENTS = {
  ...trigonometrySupplements,
  ...algebraSupplements,
  ...ableitungSupplements,
  ...vektorenSupplements,
  ...integralrechnungSupplements,
  ...dglSupplements,
  ...lineareAlgebraSupplements,
  ...pythonMatlabSupplements,
  ...mechanikSupplements,
  ...festigkeitSupplements,
  ...thermodynamikSupplements,
  ...fluidmechanikSupplements,
  ...maschinenelementeSupplements,
}

function countExerciseSteps(lesson) {
  return (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check').length
}

function lessonProfile(topic, unit, lesson) {
  const text = `${topic.id} ${topic.title} ${unit.title} ${lesson.title}`.toLowerCase()

  const profiles = [
    {
      match: ['trigonometry', 'trigonometrie', 'winkel', 'sin', 'cos', 'tan'],
      concept: 'Winkelbeziehungen mit Einheitskreis/Dreieck',
      method: 'Winkelmodus prüfen, Skizze machen, dann sin/cos/tan passend wählen',
      check: 'Winkelmaß, Vorzeichen und Definitionsbereich kontrollieren',
      workedExample: 'Beispiel: Für 30° gilt sin(30°)=0,5 und cos(30°)=√3/2.',
      mcQuestion: 'Welche Kontrolle ist bei trigonometrischen Aufgaben am wichtigsten?',
      mcOptions: ['Grad/Radiant, Quadrant und Vorzeichen prüfen', 'Immer nur sin verwenden', 'Einheiten ignorieren', 'Den Taschenrechner im Zufallsmodus lassen'],
      numberQuestion: 'Ein rechter Winkel entspricht wie vielen Radiant? Gib den Faktor vor π an.',
      correctAnswer: 0.5,
      unit: 'π',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'sin(α)', right: 'Gegenkathete / Hypotenuse' },
        { left: 'cos(α)', right: 'Ankathete / Hypotenuse' },
        { left: 'tan(α)', right: 'Gegenkathete / Ankathete' },
      ],
    },
    {
      match: ['ableitung', 'differential', 'kurvendiskussion'],
      concept: 'Ableitung als Änderungsrate und Tangentensteigung',
      method: 'Funktionstyp erkennen, passende Ableitungsregel wählen, danach einsetzen',
      check: 'Vorzeichen, Kettenregel und Definitionsbereich prüfen',
      workedExample: 'Beispiel: f(x)=3x² hat f′(x)=6x, also f′(2)=12.',
      mcQuestion: 'Was ist bei zusammengesetzten Funktionen der häufigste Fehler?',
      mcOptions: ['Die innere Ableitung zu vergessen', 'Die Variable x zu notieren', 'Das Ergebnis zu vereinfachen', 'Eine Probe zu machen'],
      numberQuestion: 'Für f(x)=3x²: Welchen Wert hat f′(2)?',
      correctAnswer: 12,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Potenzregel', right: '(xⁿ)′ = n·xⁿ⁻¹' },
        { left: 'Produktregel', right: '(u·v)′ = u′v + uv′' },
        { left: 'Kettenregel', right: 'äußere Ableitung · innere Ableitung' },
      ],
    },
    {
      match: ['integral'],
      concept: 'Integral als Stammfunktion, Fläche oder aufsummierte Größe',
      method: 'Integrand erkennen, Integrationsregel wählen, bei bestimmten Integralen Grenzen einsetzen',
      check: 'Konstante C, Grenzen, Vorzeichen und Einheit prüfen',
      workedExample: 'Beispiel: ∫₀² 2x dx = [x²]₀² = 4.',
      mcQuestion: 'Was darf bei einem unbestimmten Integral nicht fehlen?',
      mcOptions: ['Die Integrationskonstante C', 'Ein zufälliger Faktor 2', 'Ein negatives Vorzeichen immer', 'Eine Matrix'],
      numberQuestion: 'Berechne ∫₀² 2x dx.',
      correctAnswer: 4,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'unbestimmtes Integral', right: 'Stammfunktion + C' },
        { left: 'bestimmtes Integral', right: 'F(b) - F(a)' },
        { left: 'Fläche unter f', right: 'Integral bei f(x) ≥ 0' },
      ],
    },
    {
      match: ['dgl', 'differentialgleichung'],
      concept: 'Differentialgleichung als Beziehung zwischen Funktion und Ableitungen',
      method: 'Ordnung und Typ erkennen, dann Trennung/lineare Methode/charakteristische Gleichung wählen',
      check: 'Anfangsbedingung einsetzen und Lösung durch Ableiten probeprüfen',
      workedExample: 'Beispiel: y′=3 mit y(0)=2 ergibt y=3x+2.',
      mcQuestion: 'Was macht aus einer allgemeinen DGL-Lösung eine spezielle Lösung?',
      mcOptions: ['Eine Anfangs- oder Randbedingung', 'Ein längerer Funktionsname', 'Einheiten weglassen', 'Nur die höchste Ableitung betrachten'],
      numberQuestion: 'Für y′=3 und y(0)=2: Welchen Wert hat y(2)?',
      correctAnswer: 8,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Ordnung', right: 'höchste vorkommende Ableitung' },
        { left: 'AWP', right: 'DGL plus Anfangswert' },
        { left: 'Probe', right: 'Lösung ableiten und einsetzen' },
      ],
    },
    {
      match: ['vektor', 'geometrie'],
      concept: 'Vektoren als Größen mit Betrag und Richtung',
      method: 'Komponenten sauber notieren, passende Operation wählen: Skalarprodukt, Kreuzprodukt oder Norm',
      check: 'Dimension, Richtung, Vorzeichen und Einheit prüfen',
      workedExample: 'Beispiel: (1,2,2)·(2,0,1)=1·2+2·0+2·1=4.',
      mcQuestion: 'Welche Operation prüft besonders direkt Orthogonalität?',
      mcOptions: ['Skalarprodukt', 'Addition der Beträge', 'Komponenten vertauschen', 'Nur x-Komponente vergleichen'],
      numberQuestion: 'Berechne (1,2,2)·(2,0,1).',
      correctAnswer: 4,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Skalarprodukt', right: 'Winkel/Orthogonalität' },
        { left: 'Kreuzprodukt', right: 'Normalenvektor/Fläche' },
        { left: 'Norm', right: 'Betrag eines Vektors' },
      ],
    },
    {
      match: ['lineare-algebra', 'matrix', 'matrizen', 'determinante', 'eigenwert'],
      concept: 'Matrizen als lineare Abbildungen und LGS-Werkzeug',
      method: 'Matrixdimensionen prüfen, dann Zeile-mal-Spalte, Determinante oder Gauss-Verfahren anwenden',
      check: 'Dimensionen, Rang, Determinante und Probe im LGS kontrollieren',
      workedExample: 'Beispiel: det[[2,1],[3,4]]=2·4-1·3=5.',
      mcQuestion: 'Wann ist eine 2×2-Matrix sicher nicht invertierbar?',
      mcOptions: ['Wenn ihre Determinante 0 ist', 'Wenn sie negative Einträge enthält', 'Wenn sie zwei Spalten hat', 'Wenn sie transponiert werden kann'],
      numberQuestion: 'Berechne det[[2,1],[3,4]].',
      correctAnswer: 5,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Determinante 0', right: 'nicht invertierbar' },
        { left: 'Rang', right: 'Anzahl unabhängiger Zeilen/Spalten' },
        { left: 'Eigenwert', right: 'Streckfaktor einer Eigenrichtung' },
      ],
    },
    {
      match: ['algebra', 'potenz', 'gleichung', 'funktion'],
      concept: 'Algebraische Umformungen als Werkzeug für technische Formeln',
      method: 'Äquivalenzumformungen sauber durchführen und jeden Schritt auf beide Seiten anwenden',
      check: 'Probe durch Einsetzen, Definitionsbereich und Vorzeichen prüfen',
      workedExample: 'Beispiel: 2x+6=14 → 2x=8 → x=4.',
      mcQuestion: 'Was ist bei Gleichungen die wichtigste Regel?',
      mcOptions: ['Dieselbe Operation auf beide Seiten anwenden', 'Nur links umformen', 'Vorzeichen ignorieren', 'x immer auf 1 setzen'],
      numberQuestion: 'Löse 2x+6=14. Gib x an.',
      correctAnswer: 4,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Potenzgesetz', right: 'gleiche Basen zusammenfassen' },
        { left: 'Gleichung lösen', right: 'Äquivalenzumformungen' },
        { left: 'Probe', right: 'Lösung einsetzen' },
      ],
    },
    {
      match: ['python', 'matlab', 'programm'],
      concept: 'Programmieren als reproduzierbare Berechnung technischer Aufgaben',
      method: 'Eingaben, Datentypen, Schleifen/Array-Operationen und Ausgabe getrennt prüfen',
      check: 'Indexierung, Operatoren, Dimensionen und Testfall kontrollieren',
      workedExample: 'Beispiel: Python range(3) erzeugt 0, 1, 2; Matlab-Indizes starten bei 1.',
      mcQuestion: 'Was ist in NumPy der Unterschied zwischen * und @?',
      mcOptions: ['* ist elementweise, @ ist Matrixmultiplikation', '* ist immer Matrixmultiplikation', '@ ist ein Kommentar', 'Es gibt keinen Unterschied'],
      numberQuestion: 'Was ergibt len([0, 1, 2]) in Python?',
      correctAnswer: 3,
      unit: '',
      tolerance: 0,
      matchingPairs: [
        { left: 'Python Indexstart', right: '0' },
        { left: 'Matlab Indexstart', right: '1' },
        { left: 'NumPy @', right: 'Matrixmultiplikation' },
      ],
    },
    {
      match: ['festigkeit', 'spannung', 'biegung'],
      concept: 'Spannung und Verformung als Nachweisgrößen',
      method: 'Querschnitt, Belastung und passende Spannungsgleichung bestimmen',
      check: 'N/mm², MPa, Sicherheitsfaktor und zulässige Spannung prüfen',
      workedExample: 'Beispiel: F=1000 N, A=100 mm² → σ=F/A=10 N/mm²=10 MPa.',
      mcQuestion: 'Warum sinkt die Normalspannung bei größerer Fläche?',
      mcOptions: ['Weil A im Nenner von σ=F/A steht', 'Weil Kraft verschwindet', 'Weil MPa keine Einheit ist', 'Weil Spannung immer konstant bleibt'],
      numberQuestion: 'F=1000 N, A=100 mm². Berechne σ in MPa.',
      correctAnswer: 10,
      unit: 'MPa',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'σ', right: 'Normalspannung' },
        { left: 'E', right: 'Elastizitätsmodul' },
        { left: 'S', right: 'Sicherheitszahl' },
      ],
    },
    {
      match: ['thermodynamik', 'temperatur', 'wärme', 'carnot'],
      concept: 'Thermodynamik als Energie-, Wärme- und Zustandsbilanz',
      method: 'Systemgrenze, Vorzeichenkonvention und absolute Temperatur klären',
      check: 'Kelvin statt Celsius, Energieeinheiten und Wirkungsgradgrenzen prüfen',
      workedExample: 'Beispiel: 20 °C = 293,15 K.',
      mcQuestion: 'Warum muss man in Gasgleichungen Kelvin verwenden?',
      mcOptions: ['Weil die absolute Temperatur benötigt wird', 'Weil Celsius immer negativ ist', 'Weil Kelvin eine Kraft ist', 'Weil Druck dann keine Einheit braucht'],
      numberQuestion: '20 °C entsprechen wie vielen Kelvin?',
      correctAnswer: 293.15,
      unit: 'K',
      tolerance: 0.1,
      matchingPairs: [
        { left: 'pV=nRT', right: 'ideales Gas' },
        { left: 'η', right: 'Wirkungsgrad' },
        { left: 'ΔU', right: 'Änderung innerer Energie' },
      ],
    },
    {
      match: ['fluid', 'strömung', 'bernoulli', 'auftrieb'],
      concept: 'Fluidmechanik über Druck, Auftrieb und Kontinuität',
      method: 'Dichte, Höhe, Querschnitt und Geschwindigkeit mit Einheiten erfassen',
      check: 'Pa, m³/s, Reynolds-Zahl und ideale Annahmen prüfen',
      workedExample: 'Beispiel: p=ρgh=1000·9,81·1=9810 Pa.',
      mcQuestion: 'Was sagt die Kontinuitätsgleichung bei inkompressibler Strömung?',
      mcOptions: ['A·v bleibt entlang eines Stromfadens konstant', 'Dichte ist immer 0', 'Druck ist immer gleich', 'Geschwindigkeit hängt nur von Farbe ab'],
      numberQuestion: 'Wasser: ρ=1000 kg/m³, g=9,81 m/s², h=1 m. Berechne p.',
      correctAnswer: 9810,
      unit: 'Pa',
      tolerance: 1,
      matchingPairs: [
        { left: 'ρgh', right: 'hydrostatischer Druck' },
        { left: 'A·v', right: 'Volumenstrom' },
        { left: 'ρgV', right: 'Auftrieb' },
      ],
    },
    {
      match: ['maschinenelement', 'zahnrad', 'welle', 'lager', 'schraube'],
      concept: 'Maschinenelemente als Kraft- und Bewegungsübertrager',
      method: 'Kraftfluss, Drehmoment, Übersetzung und Sicherheitsnachweis trennen',
      check: 'Nm, 1/min, Lastanteile und zulässige Beanspruchung prüfen',
      workedExample: 'Beispiel: z1=20, z2=60 → i=z2/z1=3.',
      mcQuestion: 'Was bedeutet eine Übersetzung i=3 bei einem einfachen Zahnradpaar typischerweise?',
      mcOptions: ['Die Abtriebsdrehzahl ist ein Drittel der Antriebsdrehzahl', 'Die Drehzahl verdreifacht sich immer', 'Es entsteht keine Kraft', 'Zähnezahl ist irrelevant'],
      numberQuestion: 'Zahnradpaar: z1=20, z2=60. Berechne i=z2/z1.',
      correctAnswer: 3,
      unit: '',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'Schraube', right: 'Klemmkraft/Vorspannung' },
        { left: 'Lager', right: 'Kräfte aufnehmen und Bewegung führen' },
        { left: 'Zahnrad', right: 'Drehmoment und Drehzahl übertragen' },
      ],
    },
    {
      match: ['mechanik', 'statik', 'dynamik', 'kraft', 'moment'],
      concept: 'Mechanik über Kräfte, Momente und Energien',
      method: 'Freikörperbild zeichnen, Kräfte zerlegen, Gleichgewicht oder Bewegungsgleichung aufstellen',
      check: 'Kraftrichtung, Hebelarm, Vorzeichen und SI-Einheiten prüfen',
      workedExample: 'Beispiel: m=4 kg, a=3 m/s² → F=m·a=12 N.',
      mcQuestion: 'Was gehört in ein Freikörperbild?',
      mcOptions: ['Alle äußeren Kräfte und Lagerreaktionen', 'Nur bekannte Zahlen', 'Nur Beschleunigungen', 'Keine unbekannten Lagerkräfte'],
      numberQuestion: 'm=4 kg, a=3 m/s². Berechne F=m·a.',
      correctAnswer: 12,
      unit: 'N',
      tolerance: 0.001,
      matchingPairs: [
        { left: 'ΣF=0', right: 'Translationsgleichgewicht' },
        { left: 'ΣM=0', right: 'Rotationsgleichgewicht' },
        { left: 'F=m·a', right: 'Newtonsche Grundgleichung' },
      ],
    },
  ]

  return profiles.find((profile) => profile.match.some((term) => text.includes(term))) ?? profiles[6]
}

function supplementalExplanation(lesson, unit, topic) {
  const manual = MANUAL_SUPPLEMENTS[lesson.id]
  if (manual?.explanation) {
    const prefix = /prüfung/i.test(unit.title) ? '[PRÜFUNG] ' : ''
    return {
      id: `${lesson.id}-supp-explanation`,
      type: 'explanation-formal',
      title: `${prefix}Vertiefung: Prüfungsstrategie`,
      content: manual.explanation,
    }
  }

  const profile = lessonProfile(topic, unit, lesson)
  const prefix = /prüfung/i.test(unit.title) ? '[PRÜFUNG] ' : ''
  return {
    id: `${lesson.id}-supp-explanation`,
    type: 'explanation-formal',
    title: `${prefix}Vertiefung: Prüfungsstrategie`,
    content: `**Thema:** ${lesson.title}

**Kernidee:** ${profile.concept}

**Sauberes Vorgehen:**
1. Gegeben/Gesucht markieren und Einheiten notieren.
2. ${profile.method}.
3. Rechenschritte vollständig hinschreiben, nicht nur das Endergebnis.
4. ${profile.check}.

**Musterbeispiel:** ${profile.workedExample}

**Warum diese Zusatzaufgaben kommen:** Sie trainieren nicht nur Einsetzen, sondern auch Erkennen, Zuordnen, Reihenfolge, Fehleranalyse und Plausibilitätskontrolle. Genau diese Schritte fehlen oft in Prüfungen.`,
  }
}

function supplementalExercise(lesson, index, unit, topic) {
  const manual = MANUAL_SUPPLEMENTS[lesson.id]?.exercises?.[index]
  if (manual) {
    return {
      ...manual,
      id: `ex-${lesson.id}-manual-${index + 1}`,
      lessonId: lesson.id,
      isSupplemental: true,
    }
  }

  const title = lesson.title
  const profile = lessonProfile(topic, unit, lesson)
  const goal = lesson.learningGoals?.[index % (lesson.learningGoals?.length || 1)] ?? profile.concept
  const id = `ex-${lesson.id}-supp-${index + 1}`
  const isExamUnit = /prüfung/i.test(unit.title)
  const prefix = isExamUnit ? '[PRÜFUNG] ' : ''
  const common = {
    id,
    lessonId: lesson.id,
    isSupplemental: true,
  }

  const templates = [
    {
      ...common,
      type: 'multiple-choice',
      question: `${prefix}Aufwärmaufgabe zu "${title}": ${profile.mcQuestion}`,
      options: profile.mcOptions,
      correctIndex: 0,
      explanation: `${profile.mcOptions[0]} ist hier richtig. ${profile.workedExample} Kontrolliere danach: ${profile.check}.`,
      hints: [`Kernidee: ${profile.concept}.`, `Vorgehen: ${profile.method}.`],
    },
    {
      ...common,
      type: 'true-false',
      statement: `${prefix}Bei "${title}" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll.`,
      correct: true,
      explanation: 'Das ist richtig. Gerade in technischen Aufgaben hängen richtige Ergebnisse oft an Einheiten, Definitionsbereichen und Modellannahmen.',
      hints: ['Prüfe, ob die Formel unter den gegebenen Bedingungen überhaupt passt.'],
    },
    {
      ...common,
      type: 'matching',
      question: `${prefix}Ordne die Lernbausteine für "${title}" richtig zu.`,
      pairs: profile.matchingPairs,
      explanation: `Diese Zuordnung ist prüfungsrelevant für ${goal}. Nutze sie, um den passenden Ansatz schneller zu erkennen.`,
      hints: ['Links steht der Begriff, rechts die passende Bedeutung.', `Denke an: ${profile.concept}.`],
    },
    {
      ...common,
      type: 'sorting',
      question: `${prefix}Bringe die Prüfungsstrategie für "${title}" in die richtige Reihenfolge.`,
      items: ['Gegeben/Gesucht markieren', profile.method, 'Einheiten prüfen', 'Rechnung durchführen', profile.check],
      correctOrder: [0, 1, 2, 3, 4],
      explanation: `Die robuste Reihenfolge ist: Aufgabe strukturieren, Ansatz wählen, Einheiten prüfen, rechnen, Ergebnis kontrollieren. ${profile.workedExample}`,
      hints: ['Rechnen kommt nicht zuerst.', 'Die fachliche Kontrolle kommt am Ende.'],
    },
    {
      ...common,
      type: 'multiple-choice',
      question: `${prefix}Welche Antwort beschreibt einen typischen Fehler bei "${title}"?`,
      options: [`${profile.check} nicht durchführen`, 'Das gesuchte Ergebnis klar notieren', 'Zwischenschritte sauber dokumentieren', 'Am Ende die Einheit prüfen'],
      correctIndex: 0,
      explanation: `Genau dieser Check ist entscheidend: ${profile.check}. Ohne ihn kann ein formal richtig wirkender Rechenweg trotzdem falsch sein.`,
      hints: ['Gesucht ist der Fehler, nicht das gute Vorgehen.'],
    },
    {
      ...common,
      type: 'true-false',
      statement: `${prefix}Eine vollständige Prüfungsantwort zu "${title}" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Endergebnis.`,
      correct: true,
      explanation: 'Richtig. Auf Studium-/Prüfungsniveau zählen Ansatz, Zwischenschritte, Einheiten und Plausibilität mit.',
      hints: ['Überlege, was eine Korrekturperson bewerten kann.'],
    },
    {
      ...common,
      type: 'multiple-choice',
      question: `${prefix}Welche Kontrolle passt am Ende einer Aufgabe zu "${title}" am besten?`,
      options: [profile.check, 'Nur prüfen, ob die Zahl groß aussieht', 'Alle Zwischenschritte löschen', 'Eine neue zufällige Formel probieren'],
      correctIndex: 0,
      explanation: `Die passende Endkontrolle lautet: ${profile.check}. Sie ist Teil einer vollständigen Prüfungsantwort.`,
      hints: ['Denke an die letzte Zeile deiner Lösung.'],
    },
    {
      ...common,
      type: 'number-input',
      question: `${prefix}Rechenaufgabe zu "${title}": ${profile.numberQuestion}`,
      correctAnswer: profile.correctAnswer,
      tolerance: profile.tolerance,
      unit: profile.unit,
      explanation: `${profile.workedExample} Danach gilt als Kontrolle: ${profile.check}.`,
      hints: [`Ansatz: ${profile.method}.`, `Kernidee: ${profile.concept}.`],
    },
  ]

  return templates[index % templates.length]
}

function withMinimumExercises(topic) {
  return {
    ...topic,
    units: topic.units.map((unit) => {
      const exercises = { ...(unit.exercises ?? {}) }
      const lessons = unit.lessons.map((lesson) => {
        const missing = Math.max(0, MIN_EXERCISES_PER_LESSON - countExerciseSteps(lesson))
        if (missing === 0) return lesson

        const supplemental = Array.from({ length: missing }, (_, index) => supplementalExercise(lesson, index, unit, topic))
        const supplementalSteps = supplemental.map((exercise, index) => {
          exercises[exercise.id] = exercise
          return {
            id: `${lesson.id}-supp-s${index + 1}`,
            type: 'exercise',
            title: `Zusatzaufgabe ${index + 1}`,
            exerciseRef: exercise.id,
          }
        })

        const currentSteps = lesson.steps ?? []
        const explanationStep = supplementalExplanation(lesson, unit, topic)
        const masteryIndex = currentSteps.findIndex((step) => step.type === 'mastery-check')
        const steps = masteryIndex >= 0
          ? [...currentSteps.slice(0, masteryIndex), explanationStep, ...supplementalSteps, ...currentSteps.slice(masteryIndex)]
          : [...currentSteps, explanationStep, ...supplementalSteps]

        return { ...lesson, steps }
      })

      return { ...unit, exercises, lessons }
    }),
  }
}

const BASE_TOPICS = {
  trigonometry: trigonometryTopic,
  ableitung:    ableitungTopic,
  vektoren:     vektorenTopic,
  algebra:          algebraTopic,
  'lineare-algebra': lineareAlgebraTopic,
  integralrechnung:  integralrechnungTopic,
  differentialgleichungen: dglTopic,
}

const TOPICS = Object.fromEntries(Object.entries({
  ...BASE_TOPICS,
  ...Object.fromEntries(engineeringTopics.map((topic) => [topic.id, topic])),
  'python-matlab': pythonMatlabTopic,
}).map(([id, topic]) => [id, withMinimumExercises(topic)]))

function getExerciseFromTopic(topic, exerciseId) {
  for (const unit of topic.units) {
    if (unit.exercises?.[exerciseId]) return unit.exercises[exerciseId]
  }
  return null
}

export function getContentQualityIssues() {
  const issues = []

  for (const topic of Object.values(TOPICS)) {
    const lastUnit = topic.units.at(-1)
    if (!lastUnit || !/prüfung/i.test(lastUnit.title)) {
      issues.push(`${topic.id}: letzte Unit ist keine Prüfungs-Unit`)
    }

    for (const unit of topic.units) {
      const isExamUnit = /prüfung/i.test(unit.title)
      for (const lesson of unit.lessons) {
        const exerciseSteps = (lesson.steps ?? []).filter((step) => step.type === 'exercise' || step.type === 'mastery-check')
        if (exerciseSteps.length < MIN_EXERCISES_PER_LESSON) {
          issues.push(`${lesson.id}: nur ${exerciseSteps.length}/${MIN_EXERCISES_PER_LESSON} Aufgaben`)
        }
        if (!exerciseSteps.some((step) => step.type === 'mastery-check')) {
          issues.push(`${lesson.id}: kein mastery-check`)
        }

        for (const step of exerciseSteps) {
          const exercise = getExerciseFromTopic(topic, step.exerciseRef)
          if (!exercise) {
            issues.push(`${lesson.id}: exerciseRef fehlt (${step.exerciseRef})`)
            continue
          }

          if (!exercise.explanation) issues.push(`${exercise.id}: explanation fehlt`)
          if (!Array.isArray(exercise.hints) || exercise.hints.length === 0) issues.push(`${exercise.id}: hints fehlen`)
          if (isExamUnit) {
            const text = exercise.question ?? exercise.statement ?? ''
            if (!text.includes('[PRÜFUNG]')) issues.push(`${exercise.id}: Prüfungsaufgabe ohne [PRÜFUNG]`)
          }
          if (exercise.type === 'true-false') {
            if (typeof exercise.correct !== 'boolean') issues.push(`${exercise.id}: true-false braucht correct:boolean`)
            if (!exercise.statement) issues.push(`${exercise.id}: true-false braucht statement`)
          }
          if (exercise.type === 'number-input') {
            if (!('unit' in exercise)) issues.push(`${exercise.id}: number-input braucht unit`)
            if (!('tolerance' in exercise)) issues.push(`${exercise.id}: number-input braucht tolerance`)
          }
          if (exercise.type === 'multiple-choice') {
            if (!Array.isArray(exercise.options) || exercise.options.length < 2) issues.push(`${exercise.id}: multiple-choice braucht Optionen`)
            if (!Number.isInteger(exercise.correctIndex)) issues.push(`${exercise.id}: multiple-choice braucht correctIndex`)
          }
          if (exercise.type === 'matching' && (!Array.isArray(exercise.pairs) || exercise.pairs.length < 2)) {
            issues.push(`${exercise.id}: matching braucht mindestens zwei pairs`)
          }
          if (exercise.type === 'sorting' && (!Array.isArray(exercise.items) || !Array.isArray(exercise.correctOrder))) {
            issues.push(`${exercise.id}: sorting braucht items und correctOrder`)
          }
        }
      }
    }
  }

  return issues
}

const CONTENT_QUALITY_ISSUES = getContentQualityIssues()
if (CONTENT_QUALITY_ISSUES.length > 0) {
  throw new Error(`Content quality audit failed:\n${CONTENT_QUALITY_ISSUES.join('\n')}`)
}

export function getAllTopics() {
  return Object.values(TOPICS)
}

export function getTopic(topicId) {
  return TOPICS[topicId] ?? null
}

/** Flattens all lessons across all units of a topic. */
export function getAllLessons(topicId) {
  const topic = getTopic(topicId)
  if (!topic) return []
  return topic.units.flatMap((u) => u.lessons)
}

export function getLesson(topicId, lessonId) {
  return getAllLessons(topicId).find((l) => l.id === lessonId) ?? null
}

export function getLessonById(lessonId) {
  for (const topic of getAllTopics()) {
    const lesson = getLesson(topic.id, lessonId)
    if (lesson) return { topicId: topic.id, lesson }
  }
  return null
}

export function getExercise(topicId, exerciseId) {
  const topic = getTopic(topicId)
  if (!topic) return null
  return getExerciseFromTopic(topic, exerciseId)
}

/** Returns all lesson IDs for a topic (used for progress calculation). */
export function getLessonIds(topicId) {
  return getAllLessons(topicId).map((l) => l.id)
}

/** Returns lesson IDs from exam units (units with "Prüfung" in the title). */
export function getExamLessonIds(topicId) {
  const topic = getTopic(topicId)
  if (!topic) return []
  return topic.units
    .filter((u) => /prüfung/i.test(u.title))
    .flatMap((u) => u.lessons.map((l) => l.id))
}

/** Returns true if the topic has exam units and ALL exam lessons are completed. */
export function isExamCompleted(topicId, completedLessons) {
  const examIds = getExamLessonIds(topicId)
  if (examIds.length === 0) return false
  return examIds.every((id) => completedLessons.includes(id))
}
