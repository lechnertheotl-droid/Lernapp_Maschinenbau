const STORAGE_KEY = 'lernapp_state'

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    // QuotaExceededError — silently ignore
    if (e instanceof DOMException && e.name === 'QuotaExceededError') return
    throw e
  }
}

export function clearState() {
  localStorage.removeItem(STORAGE_KEY)
}
