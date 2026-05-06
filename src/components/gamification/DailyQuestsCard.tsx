// Daily-Quests + Wochen-Quest auf dem Dashboard. Card im Bestands-Stil,
// dezente Progress-Pills, Erfüllt-Häkchen.

import { useAppState, useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'

export function DailyQuestsCard() {
  const state = useAppState()
  const dispatch = useAppDispatch()
  const quests = state.gamification.dailyQuests ?? []
  const weekly = state.gamification.weeklyQuest

  if (quests.length === 0 && !weekly) return null

  return (
    <div className="bg-white dark:bg-surface-800 border-2 border-ink rounded-retro shadow-hard overflow-hidden animate-fade-in">
      <div className="px-4 pt-3 pb-2 border-b border-surface-200 dark:border-surface-700">
        <p className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest">
          // Tagesziele
        </p>
      </div>

      <ul className="flex flex-col">
        {quests.map((q) => (
          <li
            key={q.id}
            className={[
              'flex items-center gap-3 px-4 py-3 border-b border-surface-200 dark:border-surface-700 last:border-b-0',
              q.completed ? 'bg-lemon-light/40 dark:bg-surface-800/60' : '',
            ].join(' ')}
          >
            <span
              aria-hidden
              className={[
                'flex-shrink-0 w-7 h-7 rounded-retro border-2 border-ink flex items-center justify-center font-mono font-black text-sm',
                q.completed ? 'bg-lemon text-ink' : 'bg-white dark:bg-surface-900 text-ink-soft dark:text-surface-400',
              ].join(' ')}
            >
              {q.completed ? '✓' : ''}
            </span>
            <div className="flex-1 min-w-0">
              <p className={['text-sm leading-tight', q.completed ? 'text-ink-soft dark:text-surface-400' : 'text-ink dark:text-paper'].join(' ')}>
                {q.label}
              </p>
              <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 mt-0.5">
                +{q.rewardXp} XP
              </p>
            </div>
            <span
              aria-label={`Fortschritt ${q.progress} von ${q.target}`}
              className="num font-mono text-xs font-black text-ink dark:text-paper bg-surface-100 dark:bg-surface-700 border border-ink/30 dark:border-surface-500 rounded-retro px-2 py-1 tabular-nums whitespace-nowrap"
            >
              {q.progress}/{q.target}
            </span>
            {q.completed && !q.claimed && (
              <button
                type="button"
                onClick={() => dispatch({ type: ACTIONS.CLAIM_QUEST_REWARD, questId: q.id })}
                className="font-mono text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-retro border-2 border-ink bg-lemon shadow-hard-sm tap-highlight-none retro-press text-ink"
              >
                Einlösen
              </button>
            )}
          </li>
        ))}
      </ul>

      {weekly && (
        <div className="px-4 py-3 bg-surface-50 dark:bg-surface-900 border-t-2 border-ink">
          <div className="flex items-center gap-3">
            <span aria-hidden className="font-mono text-[10px] font-bold text-primary-700 dark:text-primary-300 uppercase tracking-widest flex-shrink-0">
              // Wochenziel
            </span>
            <span className="num font-mono text-xs font-black text-ink dark:text-paper bg-white dark:bg-surface-700 border border-ink/30 dark:border-surface-500 rounded-retro px-2 py-1 tabular-nums whitespace-nowrap ml-auto">
              {weekly.progress}/{weekly.target}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1.5">
            <p className={['flex-1 text-sm leading-tight', weekly.completed ? 'text-ink-soft dark:text-surface-400' : 'text-ink dark:text-paper'].join(' ')}>
              {weekly.label}
            </p>
            <p className="font-mono text-[10px] text-ink-soft dark:text-surface-400 flex-shrink-0">
              +{weekly.rewardXp} XP · +{weekly.rewardFreezes} 🛡
            </p>
          </div>
          {weekly.completed && !weekly.claimed && (
            <button
              type="button"
              onClick={() => dispatch({ type: ACTIONS.CLAIM_WEEKLY_QUEST })}
              className="mt-2 font-mono text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-retro border-2 border-ink bg-lemon shadow-hard-sm tap-highlight-none retro-press text-ink"
            >
              Wochenziel einlösen
            </button>
          )}
        </div>
      )}
    </div>
  )
}
