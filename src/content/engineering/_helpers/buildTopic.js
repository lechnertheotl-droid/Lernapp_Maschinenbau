// ── Helper für Engineering-Topic-Definitionen ──────────────────────────────
// Wandelt eine kompakte Topic-Definition (mit `units`/`lessons`/`exercises`-
// Listen) in das von der Engine erwartete Topic-Shape um.

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

export function buildTopic(def) {
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
        ...(lesson.blueprint ? { blueprint: lesson.blueprint } : {}),
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
