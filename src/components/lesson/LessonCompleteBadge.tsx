export function LessonCompleteBadge() {
  return (
    <div
      className="relative w-full flex items-center justify-center py-3"
      aria-hidden="true"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-[3px] border-ink bg-lemon shadow-hard flex items-center justify-center motion-safe:animate-pop">
          <svg
            viewBox="0 0 64 64"
            className="w-14 h-14"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 34 L28 48 L52 18" />
          </svg>
        </div>
        <span
          className="absolute -top-2 -right-4 rotate-[8deg] bg-ink text-lemon font-mono font-black text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-lemon shadow-hard-sm whitespace-nowrap"
        >
          Geschafft!
        </span>
      </div>
    </div>
  )
}
