import { createContext, useContext, useReducer, useEffect } from 'react'
import { appReducer, INITIAL_STATE } from './appReducer'
import { loadState, saveState } from '@/utils/storage'

// Split contexts: prevents dispatch-only components from re-rendering on state changes
const AppStateContext    = createContext(null)
const AppDispatchContext = createContext(null)

function init() {
  return loadState() ?? INITIAL_STATE
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, undefined, init)

  // Persist every state change to localStorage
  useEffect(() => {
    saveState(state)
  }, [state])

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (ctx === null) throw new Error('useAppState must be used within AppProvider')
  return ctx
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext)
  if (ctx === null) throw new Error('useAppDispatch must be used within AppProvider')
  return ctx
}
