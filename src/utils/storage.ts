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

export function saveState(state: unknown): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    // QuotaExceededError — silently ignore
    if (e instanceof DOMException && e.name === 'QuotaExceededError') return
    throw e
  }
}

export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY)
}
