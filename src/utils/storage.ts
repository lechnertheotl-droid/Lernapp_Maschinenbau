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
