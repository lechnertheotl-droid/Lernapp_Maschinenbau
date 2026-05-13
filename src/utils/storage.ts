const STORAGE_KEY = 'lernapp_state'

/**
 * Lädt den gespeicherten App-State aus localStorage. Validiert minimal,
 * dass es ein Objekt ist — aufrufender Reducer setzt fehlende Felder via
 * INITIAL_STATE-Spread auf Defaults.
 */
export function loadState<T = unknown>(): T | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (parsed === null || typeof parsed !== 'object') return null
    return parsed as T
  } catch {
    return null
  }
}

export type SaveStatus = 'ok' | 'quota' | 'error'

/**
 * Persistiert den App-State in localStorage.
 * Rückgabe:
 *   'ok'    – erfolgreich geschrieben.
 *   'quota' – QuotaExceededError (Speicher voll, Private-Mode-Limit erreicht).
 *   'error' – sonstiger Fehler (Serialisierung, DOM-Ausnahme).
 * Fehler werden NICHT mehr geworfen — der Aufrufer entscheidet über UI-Feedback.
 */
export function saveState(state: unknown): SaveStatus {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    return 'ok'
  } catch (e) {
    if (e instanceof DOMException && e.name === 'QuotaExceededError') return 'quota'
    if (import.meta.env.DEV) console.error('[storage] saveState failed:', e)
    return 'error'
  }
}

export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Liest den aktuellen Storage-Inhalt als pretty-printed JSON-String.
 * Wirft, wenn nichts gespeichert ist.
 */
export function exportStateAsJson(): string {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) throw new Error('Kein Fortschritt zum Sichern vorhanden.')
  const parsed: unknown = JSON.parse(raw)
  return JSON.stringify(parsed, null, 2)
}

/**
 * Validiert einen importierten JSON-Text und gibt das geparste Objekt zurück.
 * Erwartet die Top-Level-Struktur eines AppState (Objekt, nicht null/Array).
 * Wirft mit deutscher Fehlermeldung bei ungültiger Eingabe.
 */
export function parseImportedState(text: string): Record<string, unknown> {
  let parsed: unknown
  try {
    parsed = JSON.parse(text.trim())
  } catch {
    throw new Error('Eingabe ist kein gültiges JSON.')
  }
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('JSON muss ein Objekt sein (kein Array, kein Wert).')
  }
  return parsed as Record<string, unknown>
}
