// Kleine Mono-Zahl, die nach Submit aus der Aufgaben-Card aufsteigt und ausfadet.
// Sehr dezent — keine Farbe, keine Glitter.

interface Props {
  amount: number
  // Wenn 'speed' gesetzt: kleines „⚡" daneben für Speed-Bonus.
  speedBonus?: boolean
}

export function XpFloater({ amount, speedBonus = false }: Props) {
  if (amount <= 0) return null
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 z-10 motion-safe:animate-xp-float motion-reduce:opacity-0"
    >
      <span className="font-mono font-black text-sm text-ink dark:text-paper bg-lemon border-2 border-ink rounded-retro px-2 py-0.5 shadow-hard-sm whitespace-nowrap">
        {speedBonus && <span className="mr-1" aria-hidden>⚡</span>}
        +{amount} XP
      </span>
    </div>
  )
}
