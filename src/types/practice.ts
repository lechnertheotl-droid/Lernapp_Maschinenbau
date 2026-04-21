// Aufgabenpool für die Übenfunktion — getrennt vom Lern-/Erklär-Content.
// Zielniveau: TU-Wien-Grundstudium Maschinenbau (Grundlagenprüfungen der ersten
// Semester). Mehrstufige Aufgaben mit Musterlösung je Teilschritt.

export type PracticeDifficulty =
  | 'klausur-einstieg'   // kurz, 1-2 Rechenschritte, volle Prüfungsangabe
  | 'klausur'            // Standard-Klausuraufgabe (3-4 Teilschritte)
  | 'klausur-plus'       // anspruchsvolle Kombinationsaufgabe (4-6 Teilschritte)

export interface PracticeSubTask {
  /** Eindeutige ID innerhalb der Aufgabe. */
  id: string
  /** Aufgabenstellung (Markdown + KaTeX). Oft a) / b) / c) / … */
  prompt: string
  /** Korrekte Antwort als Zahl (für numeric) oder Ausdruck (für algebraic). */
  answer: string | number
  /** Zusätzliche akzeptierte Formen (z. B. "pi/2" ≡ "1.5708"). */
  alternates?: string[]
  /** Numerische Toleranz (absolut oder relativ, je nach Wert). Default 1e-3. */
  tolerance?: number
  /** Einheit (wird rechts neben dem Input angezeigt). */
  unit?: string
  /** Musterlösung für genau diesen Teilschritt (Markdown + KaTeX). */
  explanation: string
  /** Prüfmodus — algebraisch erlaubt symbolischen Vergleich, numeric Zahlen. */
  mode?: 'numeric' | 'algebraic'
  /** Erreichbare Punkte in diesem Teilschritt. */
  points?: number
}

export interface PracticeExercise {
  /** Eindeutige ID, z. B. "pr-mech-1". */
  id: string
  /** Muss einer der offiziellen topic-IDs aus content/index.js sein. */
  topicId: string
  /** Kurz-Titel, erscheint in der Aufgabenliste. */
  title: string
  difficulty: PracticeDifficulty
  /** Summe aller Teilschritt-Punkte (Orientierungswert für Prüfung). */
  points: number
  /** Geschätzte Bearbeitungszeit (min) — Richtwert für die Kachel. */
  estimatedMinutes: number
  /** Angabe / Vorspann der Aufgabe (Markdown + KaTeX, gegebene Werte etc.). */
  context: string
  /** Geordnete Teilschritte (a, b, c, …). */
  subtasks: PracticeSubTask[]
  /** Optionale Tipps (werden progressiv nach Anforderung angezeigt). */
  hints?: string[]
  /** Abschluss-Kommentar nach letztem Teilschritt (z. B. Plausibilitäts-Check). */
  wrapUp?: string
  /** Zusätzliche Tags (Schlagworte für Filter/Suche). */
  tags?: string[]
}

/** Persistenter Lernzustand einer einzelnen Aufgabe (im AppState gespeichert). */
export interface PracticeAttemptSummary {
  attempts: number
  lastAttemptAt: string
  lastCorrect: boolean
  bestPoints: number
}

export interface PracticeState {
  attempts: Record<string, PracticeAttemptSummary>
  totalAttempts: number
  totalCorrect: number
}

export const INITIAL_PRACTICE_STATE: PracticeState = {
  attempts: {},
  totalAttempts: 0,
  totalCorrect: 0,
}
