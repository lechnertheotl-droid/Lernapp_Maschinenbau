import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/context/AppContext'
import { ACTIONS } from '@/context/appReducer'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    icon: '⚙',
    eyebrow: 'TU Wien · Maschinenbau',
    title: 'Lernen wie im Laborheft',
    text: 'Interaktive Lektionen, Formeln, Rechner und Aufgaben — optimiert für Mathe-Grundlagen im Maschinenbau.',
  },
  {
    icon: '✓',
    eyebrow: 'Mastery',
    title: 'Verstehen, üben, sichern',
    text: 'Jede Aufgabe aktualisiert deinen Fortschritt. Wiederholungen werden automatisch eingeplant, sobald eine Lektion abgeschlossen ist.',
  },
  {
    icon: '▣',
    eyebrow: 'PWA',
    title: 'Offline am iPhone nutzen',
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
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-paper bg-graph-paper">
        <div className="w-full max-w-sm bg-white border-2 border-ink rounded-retro shadow-hard-lg p-5 flex flex-col gap-5 text-center">
          <div className="mx-auto w-16 h-16 bg-lemon border-2 border-ink rounded-retro shadow-hard-lemon flex items-center justify-center font-mono font-black text-3xl">
            →
          </div>
          <div>
            <p className="font-mono text-[10px] font-black text-primary-700 uppercase tracking-widest mb-1">
              // Profil anlegen
            </p>
            <h2 className="text-2xl font-black text-ink">Wie heißt du?</h2>
          </div>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
            placeholder="Dein Vorname..."
            className="h-12 px-4 text-base border-2 border-ink rounded-retro bg-paper focus:outline-none focus:ring-2 focus:ring-primary-700 text-center shadow-hard-sm"
          />
          <Button size="xl" variant="lemon" fullWidth disabled={!name.trim()} onClick={handleStart}>
            Lernapp starten →
          </Button>
        </div>
      </div>
    )
  }

  const s = steps[step]

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-between p-6 pb-12 bg-paper bg-graph-paper">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-sm text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-ink border-2 border-ink rounded-retro shadow-hard-lg flex items-center justify-center">
            <span className="font-mono font-black text-5xl text-lemon">{s.icon}</span>
          </div>
          <div className="absolute -right-3 -bottom-3 bg-primary-700 border-2 border-ink rounded-retro shadow-hard-sm px-2 py-1 font-mono text-[10px] font-black text-white">
            {step + 1}/{steps.length}
          </div>
        </div>
        <div className="bg-white border-2 border-ink rounded-retro shadow-hard p-5 flex flex-col gap-3">
          <p className="font-mono text-[10px] font-black text-primary-700 uppercase tracking-widest">{s.eyebrow}</p>
          <h1 className="text-2xl font-black text-ink leading-tight">{s.title}</h1>
          <p className="text-ink-soft leading-relaxed text-sm">{s.text}</p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        {/* Step indicators */}
        <div className="flex justify-center gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 border border-ink rounded-sm transition-all ${i === step ? 'w-8 bg-lemon' : 'w-2 bg-white'}`}
            />
          ))}
        </div>

        <Button size="xl" variant="dark" fullWidth onClick={handleNext}>
          {isLast ? 'Loslegen →' : 'Weiter →'}
        </Button>
      </div>
    </div>
  )
}
