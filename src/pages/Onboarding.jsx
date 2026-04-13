import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    icon: '🔧',
    title: 'Willkommen zur Lernapp Maschinenbau',
    text: 'Interaktive Lektionen, Visualisierungen und Aufgaben — speziell für das Maschinenbaustudium an der TU Wien.',
  },
  {
    icon: '🎯',
    title: 'So funktioniert das Mastery-System',
    text: 'Jede Lektion hat 6 Stufen: Neu → Begonnen → Verstanden → Geübt → Sicher. Spaced Repetition erinnert dich an die richtigen Zeitpunkten zur Wiederholung.',
  },
  {
    icon: '📱',
    title: 'Offline auf dem iPhone nutzen',
    text: 'Tippe in Safari auf das Teilen-Symbol → "Zum Home-Bildschirm" — dann läuft die App wie eine native App, auch ohne Internet.',
  },
]

export function Onboarding() {
  const [step, setStep] = useState(0)
  const [name, setName]  = useState('')
  const [nameStep, setNameStep] = useState(false)
  const dispatch  = useAppDispatch()
  const navigate  = useNavigate()

  const isLast = step === steps.length - 1

  const handleNext = () => {
    if (isLast) { setNameStep(true); return }
    setStep((s) => s + 1)
  }

  const handleStart = () => {
    if (!name.trim()) return
    dispatch({ type: ACTIONS.SET_USER, name: name.trim() })
    navigate('/', { replace: true })
  }

  if (nameStep) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary-50 to-white">
        <div className="w-full max-w-sm flex flex-col gap-6 text-center">
          <div className="text-5xl">👋</div>
          <h2 className="text-2xl font-bold text-surface-900">Wie heißt du?</h2>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
            placeholder="Dein Vorname..."
            className="h-12 px-4 text-base border-2 border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 text-center"
          />
          <Button size="xl" fullWidth disabled={!name.trim()} onClick={handleStart}>
            Lernapp starten 🚀
          </Button>
        </div>
      </div>
    )
  }

  const s = steps[step]

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 pb-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-sm text-center">
        <div className="text-7xl">{s.icon}</div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-surface-900">{s.title}</h1>
          <p className="text-surface-600 leading-relaxed">{s.text}</p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        {/* Step indicators */}
        <div className="flex justify-center gap-2">
          {steps.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${i === step ? 'w-6 bg-primary-600' : 'w-2 bg-surface-200'}`} />
          ))}
        </div>

        <Button size="xl" fullWidth onClick={handleNext}>
          {isLast ? 'Weiter →' : 'Weiter →'}
        </Button>
      </div>
    </div>
  )
}
