const CORRECT_MESSAGES = [
  'Richtig! Gut gemacht.',
  'Genau richtig! Weiter so.',
  'Super! Das hast du verstanden.',
  'Korrekt! Ausgezeichnet.',
  'Perfekt! Du liegst richtig.',
]

const INCORRECT_MESSAGES = [
  'Nicht ganz — probier es nochmal.',
  'Das war leider falsch. Schau dir den Tipp an.',
  'Fast! Lies die Aufgabe nochmal genau.',
  'Nicht richtig. Überlege nochmal.',
]

const STREAK_MESSAGES = {
  3: 'Drei in Folge richtig! Super Lauf.',
  5: 'Fünf richtige in Folge! Fantastisch.',
  10: 'Zehn richtige in Folge! Du beherrschst das Thema.',
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Generates a feedback object for an exercise attempt.
 */
export function generateFeedback({ isCorrect, streakCount = 0 }) {
  if (isCorrect) {
    const streakMsg = STREAK_MESSAGES[streakCount]
    const message = streakMsg ?? randomFrom(CORRECT_MESSAGES)
    const tone = streakCount >= 5 ? 'celebratory' : 'encouraging'
    return { message, tone }
  }
  return { message: randomFrom(INCORRECT_MESSAGES), tone: 'corrective' }
}

export function getEncouragementMessage(streakCount) {
  return STREAK_MESSAGES[streakCount] ?? null
}
