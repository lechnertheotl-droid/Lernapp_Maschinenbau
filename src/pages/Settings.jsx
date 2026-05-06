import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState, useAppDispatch } from '@/context/AppContext'
import { useTheme } from '@/context/ThemeContext'
import { ACTIONS } from '@/context/appReducer'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export function Settings() {
  const state = useAppState()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const [name, setName] = useState(state.user?.name ?? '')
  const [savedHint, setSavedHint] = useState(false)
  const [showReset, setShowReset] = useState(false)

  const canSave = name.trim().length > 0 && name.trim() !== state.user?.name

  const handleSaveName = () => {
    const trimmed = name.trim()
    if (!trimmed) return
    dispatch({ type: ACTIONS.SET_USER, name: trimmed })
    setSavedHint(true)
    setTimeout(() => setSavedHint(false), 1800)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">
      <Breadcrumbs items={[{ label: 'Start', to: '/' }, { label: 'Mehr', to: '/mehr' }, { label: 'Einstellungen' }]} />

      <h1 className="font-black text-2xl text-ink">Einstellungen</h1>

      {/* Profile */}
      <section className="bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3">
        <h2 className="font-mono text-xs font-black text-ink uppercase tracking-widest">Profil</h2>
        <label htmlFor="settings-name" className="text-ink text-sm font-semibold">Vorname</label>
        <input
          id="settings-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2.5 border-2 border-ink rounded-retro bg-paper shadow-hard-sm font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          maxLength={40}
        />
        <div className="flex items-center gap-3">
          <Button onClick={handleSaveName} disabled={!canSave}>Speichern</Button>
          {savedHint && <span className="font-mono text-xs text-green-700">✓ Gespeichert</span>}
        </div>
      </section>

      {/* Appearance */}
      <section className="bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-3">
        <h2 className="font-mono text-xs font-black text-ink uppercase tracking-widest">Darstellung</h2>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-ink text-sm font-semibold">Dunkler Modus</p>
            <p className="text-ink-soft text-xs">Für abendliches Lernen.</p>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={theme === 'dark' ? 'Dunklen Modus ausschalten' : 'Dunklen Modus einschalten'}
            className={`relative w-14 h-8 rounded-retro border-2 border-ink shadow-hard-sm transition-colors ${theme === 'dark' ? 'bg-ink' : 'bg-paper'}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-retro border-2 border-ink bg-lemon transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      {/* Belohnungen & Effekte */}
      <GameplaySettings />

      {/* Danger zone */}
      <section className="bg-white border-2 border-red-700 rounded-retro shadow-hard-red p-4 flex flex-col gap-3">
        <h2 className="font-mono text-xs font-black text-red-700 uppercase tracking-widest">Fortschritt zurücksetzen</h2>
        <p className="text-ink-soft text-sm">Setzt alle Lektionen, Fortschritte, Übungen und Review-Einträge zurück. Der Name bleibt erhalten.</p>
        <div>
          <Button variant="danger" onClick={() => setShowReset(true)}>Alles zurücksetzen…</Button>
        </div>
      </section>

      <Modal
        isOpen={showReset}
        onClose={() => setShowReset(false)}
        title="Bist du dir sicher?"
      >
        <div className="flex flex-col gap-4">
          <p className="text-surface-600 text-sm leading-relaxed">
            Alle Fortschritte gehen unwiderruflich verloren. Der Vorname bleibt erhalten.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="danger" fullWidth size="lg"
              onClick={() => { dispatch({ type: ACTIONS.RESET_PROGRESS }); setShowReset(false); navigate('/') }}
            >
              Ja, zurücksetzen
            </Button>
            <Button variant="secondary" fullWidth size="lg" onClick={() => setShowReset(false)}>
              Abbrechen
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function ToggleRow({ label, hint, checked, onChange, ariaLabel }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-surface-200 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p className="text-ink text-sm font-semibold">{label}</p>
        {hint && <p className="text-ink-soft text-xs leading-snug">{hint}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel ?? label}
        className={`relative w-14 h-8 rounded-retro border-2 border-ink shadow-hard-sm transition-colors flex-shrink-0 ${checked ? 'bg-ink' : 'bg-paper'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-retro border-2 border-ink bg-lemon transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

function GameplaySettings() {
  const state = useAppState()
  const dispatch = useAppDispatch()
  const s = state.gamification.settings

  const set = (patch) => dispatch({ type: ACTIONS.UPDATE_GAMIFICATION_SETTINGS, patch })

  const reducedIsForce = s.reducedMotion === true
  const handleNotifications = async () => {
    if (s.notificationsEnabled) {
      set({ notificationsEnabled: false })
      return
    }
    try {
      if (typeof Notification === 'undefined') {
        set({ notificationsEnabled: false })
        return
      }
      const result = Notification.permission === 'granted'
        ? 'granted'
        : await Notification.requestPermission()
      set({ notificationsEnabled: result === 'granted' })
    } catch {
      set({ notificationsEnabled: false })
    }
  }

  return (
    <section className="bg-white border-2 border-ink rounded-retro shadow-hard p-4 flex flex-col gap-1">
      <h2 className="font-mono text-xs font-black text-ink uppercase tracking-widest mb-2">
        Belohnungen & Effekte
      </h2>
      <ToggleRow
        label="Sound bei Aufgaben"
        hint="Kurze Töne bei richtig/falsch und Erfolg. Sehr leise."
        checked={s.soundEnabled}
        onChange={(v) => set({ soundEnabled: v })}
      />
      <ToggleRow
        label="Vibration (mobile)"
        hint="Kurzes Feedback beim Submit. Nur auf Geräten mit Vibration-Support."
        checked={s.hapticsEnabled}
        onChange={(v) => set({ hapticsEnabled: v })}
      />
      <ToggleRow
        label="Animationen reduzieren"
        hint="Erzwingt reduzierte Bewegung — XP-Floater und Confetti werden ausgeblendet."
        checked={reducedIsForce}
        onChange={(v) => set({ reducedMotion: v ? true : 'auto' })}
      />
      <ToggleRow
        label="Tägliche Erinnerung"
        hint="Lokale Browser-Benachrichtigung am Abend, wenn du noch nicht gelernt hast."
        checked={s.notificationsEnabled}
        onChange={handleNotifications}
      />
    </section>
  )
}
