import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFound({
  title = 'Seite nicht gefunden',
  message = 'Die gewünschte Seite existiert nicht oder wurde verschoben.',
  detail,
  primaryTo = '/topics',
  primaryLabel = 'Zur Themenübersicht',
  secondaryTo = '/',
  secondaryLabel = 'Zum Dashboard',
}) {
  const navigate = useNavigate()

  return (
    <div className="max-w-lg mx-auto px-4 py-10 flex flex-col items-center text-center gap-5">
      <div className="w-20 h-20 border-2 border-ink rounded-retro bg-white shadow-hard flex items-center justify-center">
        <span className="font-mono font-black text-4xl text-ink">404</span>
      </div>
      <div>
        <h1 className="font-black text-ink text-2xl leading-tight mb-2">{title}</h1>
        <p className="text-ink-soft text-sm leading-relaxed">{message}</p>
        {detail && (
          <p className="mt-2 font-mono text-[11px] text-ink-soft break-all bg-surface-100 border border-surface-200 rounded px-2 py-1 inline-block">
            {detail}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Button fullWidth size="lg" onClick={() => navigate(primaryTo)}>
          {primaryLabel}
        </Button>
        <Button fullWidth size="lg" variant="secondary" onClick={() => navigate(secondaryTo)}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  )
}
