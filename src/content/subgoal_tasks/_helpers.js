// Struktur-Hüllen für manuell geschriebene Zielaufgaben (eine Aufgabe pro
// Sub-Goal einer Lesson). Jede Helper-Funktion erzwingt das Mindest-Schema —
// Inhalt (Frage, Optionen, Zahlen, Erklärung) bleibt vollständig manuell.
//
// Alle Helfer akzeptieren als LETZTES optionales Argument ein `pedagogy`-
// Objekt der Form `{ stage, subGoal, uses }`. Für Topics in
// BLUEPRINT_ENFORCED_TOPICS ist das Feld Pflicht; die Validierung passiert
// in `scripts/validate-content.js`.
//
// ─── Deterministische Permutation ───────────────────────────────────────
// Die Helper `mc()` und `sorting()` permutieren automatisch Optionen bzw.
// Items, damit
//   · die richtige MC-Antwort NICHT immer an Position 0 steht
//   · die Start-Reihenfolge einer Sorting-Aufgabe nicht die richtige ist
// Der Seed leitet sich aus dem Fragetext ab — gleiche Frage → gleiche
// Permutation. So ist das Rendering stabil, aber jede Aufgabe wirkt für
// den Lerner "neu gemischt".

function withPedagogy(obj, pedagogy) {
  if (!pedagogy) return obj
  return { ...obj, pedagogy }
}

// FNV-1a hash über beliebige Strings → 32-Bit unsigned int.
function hashSeed(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0) || 1
}

// mulberry32 — kleiner, schneller deterministischer PRNG.
function mulberry32(seed) {
  let s = seed >>> 0
  return function rand() {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededPermutation(n, seed) {
  const indices = Array.from({ length: n }, (_, i) => i)
  const rand = mulberry32(seed)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices
}

// Garantiert eine Permutation, die NICHT die Identität ist. Zusätzlich wird
// optional eine Bedingung geprüft (z. B. "Index X darf nicht auf Position 0
// landen"). Fallback: manueller Swap, falls zufällig die Identität entsteht.
function nonIdentityPermutation(n, seed, cond) {
  const isIdentity = (p) => p.every((v, i) => v === i)
  for (let attempt = 0; attempt < 12; attempt++) {
    const p = seededPermutation(n, seed + attempt * 0x9e3779b1)
    if (!isIdentity(p) && (!cond || cond(p))) return p
  }
  // Manueller Fallback — erste beiden Elemente tauschen.
  const p = Array.from({ length: n }, (_, i) => i)
  if (n >= 2) [p[0], p[1]] = [p[1], p[0]]
  return p
}

// ─── Öffentliche Helper ─────────────────────────────────────────────────

/**
 * Multiple-Choice-Aufgabe.
 *
 * Der Autor schreibt die Optionen in beliebiger Reihenfolge und gibt
 * `correctIndex` relativ zu diesem Array an. Der Helper permutiert die
 * Optionen deterministisch, sodass die richtige Antwort NIE an Position 0
 * landet. `correctIndex` und `wrongAnswerExplanations` werden entsprechend
 * remapped.
 */
export function mc(question, options, correctIndex, explanation, hints, wrongAnswerExplanations, pedagogy) {
  const n = options.length
  const seed = hashSeed(question + '|' + options.join('§'))
  // Bedingung: die richtige Antwort darf NICHT an Position 0 sein.
  const perm = nonIdentityPermutation(n, seed, (p) => p[0] !== correctIndex)

  const newOptions = perm.map((old) => options[old])
  const newCorrectIndex = perm.findIndex((old) => old === correctIndex)

  let newWae
  if (wrongAnswerExplanations) {
    newWae = {}
    for (const [oldKey, value] of Object.entries(wrongAnswerExplanations)) {
      const oldIdx = Number(oldKey)
      if (!Number.isInteger(oldIdx)) continue
      const newIdx = perm.findIndex((old) => old === oldIdx)
      if (newIdx >= 0) newWae[String(newIdx)] = value
    }
  }

  return withPedagogy(
    {
      type: 'multiple-choice',
      question,
      options: newOptions,
      correctIndex: newCorrectIndex,
      explanation,
      hints,
      ...(newWae ? { wrongAnswerExplanations: newWae } : {}),
    },
    pedagogy,
  )
}

export function ni(question, correctValue, tolerance, unit, explanation, hints, pedagogy) {
  return withPedagogy(
    { type: 'number-input', question, correctValue, tolerance, unit, explanation, hints },
    pedagogy,
  )
}

export function tf(statement, correct, explanation, hints, pedagogy) {
  return withPedagogy({ type: 'true-false', statement, correct, explanation, hints }, pedagogy)
}

export function matching(question, pairs, explanation, hints, pedagogy) {
  return withPedagogy({ type: 'matching', question, pairs, explanation, hints }, pedagogy)
}

/**
 * Sorting-Aufgabe.
 *
 * Der Autor schreibt die Items in DIDAKTISCH RICHTIGER Reihenfolge und gibt
 * `correctOrder` als `[0, 1, 2, ...]` an (Identity — Standard). Der Helper
 * permutiert die Items deterministisch, sodass die Start-Reihenfolge garantiert
 * NICHT die richtige ist. `correctOrder` wird entsprechend remapped und
 * zeigt auf die Positionen im permutierten `items`-Array.
 */
export function sorting(question, items, correctOrder, explanation, hints, pedagogy) {
  const n = items.length
  const seed = hashSeed(question + '|' + items.join('§'))
  // Bedingung: die Permutation ist nicht identisch mit der didaktischen
  // Reihenfolge — sonst wäre die Aufgabe beim Öffnen schon gelöst. `perm[i]`
  // ist der Original-Index des Items an der neuen Position `i`.
  const perm = nonIdentityPermutation(n, seed, (p) => {
    // correctOrder gibt an, in welcher Reihenfolge die ORIGINALEN indices
    // stehen müssen. Wenn perm[i] === correctOrder[i] für alle i, ist die
    // Anzeige bereits korrekt.
    return !p.every((v, i) => v === correctOrder[i])
  })

  const newItems = perm.map((old) => items[old])
  // Neues correctOrder: für jeden alten Index in correctOrder den Platz in perm finden.
  const newCorrectOrder = correctOrder.map((oldIdx) => perm.findIndex((v) => v === oldIdx))

  return withPedagogy(
    { type: 'sorting', question, items: newItems, correctOrder: newCorrectOrder, explanation, hints },
    pedagogy,
  )
}

/**
 * Wrap-Stil: `tag(mc(...), { stage: 'recognize', subGoal: 0, uses: ['log-def'] })`.
 * Praktisch, wenn man bestehende Helper-Calls um Pedagogy ergänzen will, ohne
 * die letzte Positions-Argumentenreihenfolge zu pflegen.
 */
export function tag(exercise, pedagogy) {
  return { ...exercise, pedagogy }
}
