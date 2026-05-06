// Lesson-Erfolgs-Screen: 3-Sterne-Reveal, XP-Counter, Streak/Combo-Status.
// Bewusst ruhig — eine Card, keine Modal-Schichten, keine Big-Confetti.

import { useEffect, useMemo, useRef } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Confetti } from '@/components/ui/Confetti'
import { StarReveal } from './StarReveal'
import { CountUp } from './CountUp'
import { xpForLessonStars } from '@/gamification/xpFormula'
import { playLessonComplete } from '@/gamification/sound'

interface Props {
  isOpen: boolean
  onClose: () => void
  onNextLesson?: () => void
  onReplay?: () => void
  lessonTitle: string
  userName?: string | null
  // Stars: best stars after this completion (0..3). 0 = noch keine Sterne (sollte hier nicht passieren).
  stars: 0 | 1 | 2 | 3
  // Stars vor diesem Abschluss — für „neuer Stern erreicht"-Hinweis.
  previousStars: 0 | 1 | 2 | 3
  longestComboInLesson: number
  streakCurrent: number
  streakIncreased: boolean
  questCompletedLabels?: string[]
}

export function LessonCompleteScreen({
  isOpen, onClose, onNextLesson, onReplay,
  lessonTitle, userName, stars, previousStars,
  longestComboInLesson, streakCurrent, streakIncreased,
  questCompletedLabels = [],
}: Props) {
  const playedRef = useRef(false)
  useEffect(() => {
    if (isOpen && !playedRef.current) {
      playedRef.current = true
      playLessonComplete()
    }
    if (!isOpen) playedRef.current = false
  }, [isOpen])

  const xpAwarded = useMemo(() => {
    if (stars <= 0) return 0
    const xpNew = xpForLessonStars(stars as 1 | 2 | 3)
    const xpOld = previousStars > 0 ? xpForLessonStars(previousStars as 1 | 2 | 3) : 0
    return Math.max(0, xpNew - xpOld)
  }, [stars, previousStars])

  const improved = stars > previousStars
  const canReplayForBetterStars = stars < 3 && !!onReplay

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Lektion abgeschlossen" size="md">
      {isOpen && <Confetti variant="normal" />}
      <div className="flex flex-col gap-4">
        <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest text-center">
          // Erfolg
        </p>

        <h2 className="font-black text-ink dark:text-paper text-lg leading-tight text-center">
          {lessonTitle}
        </h2>

        <StarReveal stars={stars} size="lg" />

        {improved && previousStars > 0 && (
          <p className="text-center font-mono text-[11px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest">
            {previousStars} → {stars} Sterne
          </p>
        )}

        {/* XP-Block */}
        <div className="bg-lemon-light dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm p-3 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-black text-ink dark:text-paper uppercase tracking-widest">
            XP erhalten
          </span>
          <span className="font-black text-ink dark:text-paper text-lg">
            <CountUp to={xpAwarded} prefix="+" suffix=" XP" />
          </span>
        </div>

        {/* Streak + Combo */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm p-3 flex flex-col items-center">
            <span className="num text-2xl font-black text-ink dark:text-paper leading-none">
              {streakCurrent}
            </span>
            <span className="font-mono text-[9px] font-black text-ink-soft dark:text-surface-400 uppercase tracking-wider mt-1">
              Tage-Streak {streakIncreased ? '· +1' : ''}
            </span>
          </div>
          <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard-sm p-3 flex flex-col items-center">
            <span className="num text-2xl font-black text-ink dark:text-paper leading-none">
              {longestComboInLesson}
            </span>
            <span className="font-mono text-[9px] font-black text-ink-soft dark:text-surface-400 uppercase tracking-wider mt-1">
              Längste Combo
            </span>
          </div>
        </div>

        {questCompletedLabels.length > 0 && (
          <div className="bg-white dark:bg-surface-800 border-2 border-primary-700 rounded-retro shadow-hard-blue p-3">
            <p className="font-mono text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest mb-1.5">
              // Quest erfüllt
            </p>
            <ul className="flex flex-col gap-1">
              {questCompletedLabels.map((q, i) => (
                <li key={i} className="text-ink dark:text-paper text-sm flex items-start gap-2">
                  <span className="text-primary-700 dark:text-primary-300 font-mono font-black flex-shrink-0">✓</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {userName && (
          <p className="text-ink-soft dark:text-surface-300 text-xs text-center">
            Super, <strong className="text-ink dark:text-paper">{userName}</strong>. Die Lektion wird zur Wiederholung eingeplant.
          </p>
        )}

        <div className="flex flex-col gap-2 pt-1">
          {onNextLesson && (
            <Button fullWidth size="lg" onClick={onNextLesson}>Nächste Lektion →</Button>
          )}
          {canReplayForBetterStars && (
            <Button fullWidth size="lg" variant="secondary" onClick={onReplay}>
              Für 3 Sterne wiederholen
            </Button>
          )}
          <Button fullWidth size="lg" variant="secondary" onClick={onClose}>
            Zur Themenübersicht
          </Button>
        </div>
      </div>
    </Modal>
  )
}
