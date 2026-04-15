import {
  createContext, useContext, useReducer, useEffect,
  type Dispatch, type ReactNode,
} from 'react'
import { appReducer, INITIAL_STATE, type AppState, type Action } from './appReducer'
import { loadState, saveState } from '@/utils/storage'

const AppStateContext = createContext<AppState | null>(null)
const AppDispatchContext = createContext<Dispatch<Action> | null>(null)

function init(): AppState {
  const loaded = loadState<Partial<AppState>>()
  if (!loaded) return INITIAL_STATE
  // Merge loaded state with INITIAL_STATE so neue Felder (z.B. bookmarks/streak/points)
  // bei alten gespeicherten States nicht undefined sind.
  return { ...INITIAL_STATE, ...loaded }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, init)

  // Debounced persistence: flush ≤ 250ms after last dispatch.
  // Also flushes synchronously on pagehide/visibilitychange so progress is
  // never lost when the tab is backgrounded or swiped away.
  useEffect(() => {
    const handle = setTimeout(() => saveState(state), 250)
    const flush = () => {
      clearTimeout(handle)
      saveState(state)
    }
    const onVisibility = () => { if (document.visibilityState === 'hidden') flush() }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearTimeout(handle)
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [state])

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext)
  if (ctx === null) throw new Error('useAppState must be used within AppProvider')
  return ctx
}

export function useAppDispatch(): Dispatch<Action> {
  const ctx = useContext(AppDispatchContext)
  if (ctx === null) throw new Error('useAppDispatch must be used within AppProvider')
  return ctx
}
