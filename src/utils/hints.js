/**
 * Returns the hints array for an exercise.
 * Hints are authored in content modules as exercise.hints[].
 */
export function getHintsForExercise(hints) {
  return hints ?? []
}

/**
 * Returns the next hint to show.
 */
export function getNextHint(currentIndex, hints) {
  const next = currentIndex + 1
  if (next >= hints.length) return { hint: hints[hints.length - 1], index: hints.length - 1, isLast: true }
  return { hint: hints[next], index: next, isLast: next === hints.length - 1 }
}
