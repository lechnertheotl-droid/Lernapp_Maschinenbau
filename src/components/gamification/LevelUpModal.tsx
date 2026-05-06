import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

interface Props {
  isOpen: boolean
  onClose: () => void
  level: number
  rank: string
}

// Ruhiges Level-Up: ein Heading, Rang, einzelner Star-Pop. Kein Big Confetti.
export function LevelUpModal({ isOpen, onClose, level, rank }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Neuer Rang erreicht">
      <div className="flex flex-col items-center gap-4 py-2">
        <div
          aria-hidden
          className="w-16 h-16 rounded-retro border-2 border-ink bg-lemon shadow-hard flex items-center justify-center motion-safe:animate-stamp-in"
        >
          <span className="font-mono font-black text-2xl text-ink">LV {level}</span>
        </div>
        <p className="font-black text-ink dark:text-paper text-lg leading-tight text-center">
          {rank}
        </p>
        <p className="text-ink-soft dark:text-surface-300 text-sm text-center">
          Du hast Level {level} erreicht. Weiter so.
        </p>
        <Button fullWidth size="lg" onClick={onClose}>Weiter</Button>
      </div>
    </Modal>
  )
}
