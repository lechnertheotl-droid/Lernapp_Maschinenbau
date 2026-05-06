import {
  createContext, useContext, useReducer, useEffect, useRef,
  type Dispatch, type ReactNode,
} from 'react'
import { appReducer, INITIAL_STATE, INITIAL_GAMIFICATION_STATE, type AppState, type Action, type GamificationState } from './appReducer'
import { loadState, saveState } from '@/utils/storage'
import { useToast } from '@/components/ui/Toast'

const AppStateContext = createContext<AppState | null>(null)
const AppDispatchContext = createContext<Dispatch<Action> | null>(null)

function init(): AppState {
  const loaded = loadState<Partial<AppState>>()
  if (!loaded) return INITIAL_STATE
  // Merge loaded state with INITIAL_STATE so neue Felder (z.B. bookmarks/streak/points/gamification)
  // bei alten gespeicherten States nicht undefined sind. gamification wird tief gemerged,
  // damit verschachtelte Defaults (settings, sessionStats) nicht verloren gehen.
  const merged: AppState = {
    ...INITIAL_STATE,
    ...loaded,
    gamification: mergeGamification(loaded.gamification, loaded.points ?? 0),
  }
  return merged
}

// Tief-Merge der Gamification-Defaults — und Migration `points` → `xp`
// für States, die vor Einführung des Gamification-Slice gespeichert wurden.
function mergeGamification(loaded: Partial<GamificationState> | undefined, legacyPoints: number): GamificationState {
  if (!loaded) {
    // Erste Migration: alter State ohne gamification-Slice → xp aus legacy points seed.
    return { ...INITIAL_GAMIFICATION_STATE, xp: Math.max(0, Math.floor(legacyPoints)) }
  }
  return {
    ...INITIAL_GAMIFICATION_STATE,
    ...loaded,
    settings: { ...INITIAL_GAMIFICATION_STATE.settings, ...(loaded.settings ?? {}) },
    sessionStats: { ...INITIAL_GAMIFICATION_STATE.sessionStats, ...(loaded.sessionStats ?? {}) },
    achievements: loaded.achievements ?? {},
    starsByLessonId: loaded.starsByLessonId ?? {},
    lessonAttempts: loaded.lessonAttempts ?? {},
    practiceBests: loaded.practiceBests ?? {},
    dailyQuests: loaded.dailyQuests ?? [],
    weeklyQuest: loaded.weeklyQuest ?? null,
    weekendDays: loaded.weekendDays ?? [],
    // xp: bei vorhandenem Gamification-State Wert übernehmen, sonst von legacy points seeden.
    xp: typeof loaded.xp === 'number' ? loaded.xp : Math.max(0, Math.floor(legacyPoints)),
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, init)
  const showToast = useToast() as (opts: { message: string; tone: string }) => void
  const hasWarnedRef = useRef(false)

  // Debounced persistence: flush ≤ 250ms after last dispatch.
  // On pagehide/visibilitychange-hidden we flush synchronously so Tab-Switch
  // oder Swipe-away keine Writes verschluckt. Quota-/andere Fehler werden
  // sichtbar gemacht (einmaliger Toast), sonst verliert der User stillschweigend
  // seinen Lernfortschritt.
  useEffect(() => {
    const persist = () => {
      const status = saveState(state)
      if (status === 'ok' || hasWarnedRef.current) return
      hasWarnedRef.current = true
      showToast({
        message: status === 'quota'
          ? 'Lokaler Speicher voll – Fortschritt konnte nicht gesichert werden.'
          : 'Fortschritt konnte nicht lokal gesichert werden.',
        tone: 'corrective',
      })
    }
    const handle = setTimeout(persist, 250)
    const flush = () => {
      clearTimeout(handle)
      persist()
    }
    const onVisibility = () => { if (document.visibilityState === 'hidden') flush() }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearTimeout(handle)
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [state, showToast])

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
