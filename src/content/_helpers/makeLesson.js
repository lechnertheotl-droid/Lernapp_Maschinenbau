/**
 * Minimaler Lesson-Scaffold — erzeugt eine valid-strukturierte Lektion
 * (Intuition → Formel → mastery-check). Der Auto-Generator in
 * content/index.js füllt anschließend auf MIN_EXERCISES_PER_LESSON auf.
 *
 * Für Prüfungs-Lektionen `isExam: true` setzen; dann beginnt der Content
 * mit dem „[PRÜFUNG]"-Marker und der Strategieblock-Form.
 */
export function makeLesson({
  id,
  title,
  estimatedMinutes = 12,
  learningGoals = [],
  intuitionTitle,
  intuitionContent,
  formulaTitle,
  formulaContent,
  visualization,
  masteryId,
  masteryQuestion,
  masteryOptions,
  correctIndex = 0,
  masteryExplanation,
  masteryHints = [],
  prerequisites = [],
  nextLessonId = null,
  isExam = false,
  createdAt,
}) {
  const prefix = isExam ? '[PRÜFUNG] ' : ''
  const steps = []

  if (intuitionContent) {
    steps.push({
      id: `${id}-intuition`,
      type: 'explanation-intuitive',
      title: intuitionTitle ?? title,
      content: intuitionContent,
    })
  }

  if (formulaContent) {
    steps.push({
      id: `${id}-formal`,
      type: 'explanation-formal',
      title: formulaTitle ?? 'Formel',
      content: formulaContent,
    })
  }

  if (visualization?.visualizationId) {
    steps.push({
      id: `${id}-viz`,
      type: 'visualization',
      title: visualization.title ?? 'Visualisierung',
      visualizationId: visualization.visualizationId,
      params: visualization.params ?? {},
    })
  }

  const mcId = masteryId ?? `ex-${id}-mastery`
  steps.push({
    id: `${id}-mastery`,
    type: 'mastery-check',
    title: `${prefix}Verständnischeck`,
    exerciseRef: mcId,
  })

  const exercises = {
    [mcId]: {
      id: mcId,
      lessonId: id,
      type: 'multiple-choice',
      isMasteryCheck: true,
      question: `${prefix}${masteryQuestion}`,
      options: masteryOptions,
      correctIndex,
      explanation: masteryExplanation ?? '',
      hints: masteryHints,
    },
  }

  return {
    lesson: {
      id,
      title,
      estimatedMinutes,
      learningGoals,
      prerequisites,
      nextLessonId,
      createdAt,
      steps,
    },
    exercises,
  }
}

/**
 * Bündelt mehrere `makeLesson`-Resultate in eine Unit mit gemeinsamem
 * Exercises-Dictionary.
 */
export function makeUnit({ id, title, order, lessons }) {
  const unitExercises = {}
  const unitLessons = lessons.map(({ lesson, exercises }) => {
    Object.assign(unitExercises, exercises)
    return lesson
  })
  return {
    id,
    title,
    order,
    lessons: unitLessons,
    exercises: unitExercises,
  }
}
