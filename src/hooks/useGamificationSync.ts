// Zentraler Side-Effect-Hook. Mountet einmal in AppLayout und kümmert sich um:
//  - Sound/Haptik-Settings → Module-Flags
//  - Reduced-Motion-Override via data-Attribut auf <html>
//  - Daily-Quests + Wochen-Quest pro Tageswechsel generieren
//  - Streak-Freeze-Check beim App-Mount
//  - Achievement-Re-Evaluation: prüft nach jedem State-Change, ob ein
//    bislang nicht freigeschaltetes Achievement nun erreicht ist → Toast + dispatch.
//    Beim allerersten Mount werden alle bereits-erreichten Achievements
//    STILL freigeschaltet (kein Toast-Storm bei alten Usern).
//  - Level-Up-Detection: vergleicht xp vorher/nachher und triggert ein Modal.
//  - Streak-Recovery-Toast: einmaliger Toast pro Bruch.

import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppState } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { setSoundEnabled, playAchievement, playLevelUp } from '@/gamification/sound'
import { setHapticsEnabled, hapticAchievement, hapticLevelUp } from '@/gamification/haptics'
import { useToast } from '@/components/ui/Toast'
import { buildAchievementContext, getTopicMasterSeeds } from '@/gamification/achievementContext'
import {
  getAllAchievements,
  isAchievementEarned,
  type AchievementDef,
} from '@/gamification/achievements'
import { getLevelFromXp, getRankName } from '@/gamification/levels'

export interface PendingLevelUp {
  from: number
  to: number
  rank: string
}

export function useGamificationSync(): {
  pendingLevelUp: PendingLevelUp | null
  acknowledgeLevelUp: () => void
} {
  const state = useAppState()
  const dispatch = useAppDispatch()
  const showToast = useToast() as (opts: { message: string; tone: string; duration?: number }) => void

  const [pendingLevelUp, setPendingLevelUp] = useState<PendingLevelUp | null>(null)
  const initialMountRef = useRef(true)
  const lastLevelRef = useRef<number>(getLevelFromXp(state.gamification.xp))
  const recoveredAckRef = useRef<number>(0)
  const allAchievementsRef = useRef<AchievementDef[] | null>(null)

  if (!allAchievementsRef.current) {
    allAchievementsRef.current = getAllAchievements(getTopicMasterSeeds())
  }

  // ── Settings → Module-Flags ──────────────────────────────────────────
  useEffect(() => {
    setSoundEnabled(state.gamification.settings.soundEnabled)
  }, [state.gamification.settings.soundEnabled])

  useEffect(() => {
    setHapticsEnabled(state.gamification.settings.hapticsEnabled)
  }, [state.gamification.settings.hapticsEnabled])

  // ── Reduced-Motion-Override ──────────────────────────────────────────
  useEffect(() => {
    const setting = state.gamification.settings.reducedMotion
    const html = document.documentElement
    if (setting === true) html.setAttribute('data-reduced-motion', 'force')
    else if (setting === false) html.setAttribute('data-reduced-motion', 'off')
    else html.removeAttribute('data-reduced-motion')
  }, [state.gamification.settings.reducedMotion])

  // ── Mount: Streak-Freeze + Daily-Quests ─────────────────────────────
  useEffect(() => {
    dispatch({ type: ACTIONS.CONSUME_STREAK_FREEZE })
    dispatch({ type: ACTIONS.GENERATE_DAILY_QUESTS })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Streak-Recovery-Toast (einmal pro Session pro Bruch) ─────────────
  useEffect(() => {
    const g = state.gamification
    if (g.brokenStreakLength > 0 && recoveredAckRef.current !== g.brokenStreakLength) {
      recoveredAckRef.current = g.brokenStreakLength
      showToast({
        message: `Dein ${g.brokenStreakLength}-Tage-Streak ist pausiert. Heute neu starten?`,
        tone: 'info',
        duration: 5000,
      })
    }
  }, [state.gamification.brokenStreakLength, state.gamification, showToast])

  // ── Achievement-Re-Evaluation ────────────────────────────────────────
  useEffect(() => {
    const ctx = buildAchievementContext(state)
    const all = allAchievementsRef.current ?? []
    const isInitial = initialMountRef.current
    for (const def of all) {
      const earnedNow = isAchievementEarned(def, ctx)
      const known = state.gamification.achievements[def.id]
      if (earnedNow && !known?.earned) {
        dispatch({ type: ACTIONS.UNLOCK_ACHIEVEMENT, achievementId: def.id })
        if (!isInitial) {
          showToast({
            message: `Erfolg freigeschaltet: ${def.title}`,
            tone: 'celebratory',
            duration: 3500,
          })
          playAchievement()
          hapticAchievement()
        }
      }
    }
    initialMountRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.gamification.xp,
    state.gamification.longestCombo,
    state.streak.longest,
    state.gamification.starsByLessonId,
    state.gamification.weekendDays,
    state.gamification.earlyBirdAchieved,
    state.gamification.comebackStreakAchieved,
    state.gamification.practicePassed,
  ])

  // ── Level-Up-Detection ────────────────────────────────────────────────
  useEffect(() => {
    const newLevel = getLevelFromXp(state.gamification.xp)
    if (newLevel > lastLevelRef.current) {
      setPendingLevelUp({
        from: lastLevelRef.current,
        to: newLevel,
        rank: getRankName(newLevel),
      })
      playLevelUp()
      hapticLevelUp()
    }
    lastLevelRef.current = newLevel
  }, [state.gamification.xp])

  return {
    pendingLevelUp,
    acknowledgeLevelUp: () => setPendingLevelUp(null),
  }
}
