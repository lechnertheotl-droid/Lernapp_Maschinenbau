// Synthetische UI-Sounds via Web Audio API.
// Bewusst leise (gain ~0.12), kurz (< 200ms), Telegraf-Tap-Charakter.
// Kein Asset-Bundle, keine externen Libs.

let ctx: AudioContext | null = null
let enabled = true

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    try {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (Ctor) ctx = new Ctor()
    } catch {
      return null
    }
  }
  // Browser blockt AudioContext bis zur ersten User-Interaction. resume() ist no-op
  // wenn schon running, sonst spielt's nach erster Aktion.
  if (ctx && ctx.state === 'suspended') {
    void ctx.resume().catch(() => {})
  }
  return ctx
}

export function setSoundEnabled(on: boolean): void {
  enabled = on
}

interface ToneSpec {
  freq: number
  durMs: number
  type?: OscillatorType
  gain?: number
  glideToFreq?: number  // wenn gesetzt: Sweep zur Ziel-Frequenz
}

function playTone(spec: ToneSpec): void {
  if (!enabled) return
  const c = getCtx()
  if (!c) return
  try {
    const osc = c.createOscillator()
    const g = c.createGain()
    osc.type = spec.type ?? 'sine'
    osc.frequency.value = spec.freq
    if (spec.glideToFreq != null) {
      osc.frequency.linearRampToValueAtTime(spec.glideToFreq, c.currentTime + spec.durMs / 1000)
    }
    const peak = spec.gain ?? 0.12
    // Schneller ADSR: 5ms attack, fade-out bis Ende
    g.gain.setValueAtTime(0, c.currentTime)
    g.gain.linearRampToValueAtTime(peak, c.currentTime + 0.005)
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + spec.durMs / 1000)
    osc.connect(g).connect(c.destination)
    osc.start()
    osc.stop(c.currentTime + spec.durMs / 1000 + 0.02)
  } catch {
    // ignore — Sound ist Polish, nicht kritisch.
  }
}

function playSequence(specs: ToneSpec[]): void {
  if (!enabled) return
  const c = getCtx()
  if (!c) return
  let offsetMs = 0
  for (const s of specs) {
    setTimeout(() => playTone(s), offsetMs)
    offsetMs += s.durMs
  }
}

export function playCorrect(): void {
  // Einzelner kurzer Sine-Tone, 880 Hz (A5), ~70ms
  playTone({ freq: 880, durMs: 70, type: 'sine' })
}

export function playWrong(): void {
  // Sanfter Slide nach unten, 320 → 220 Hz, 100ms — kein „Buzzer"
  playTone({ freq: 320, glideToFreq: 220, durMs: 100, type: 'triangle', gain: 0.10 })
}

export function playComboMilestone(): void {
  // Zwei kurze Triangle-Tones, perfekte Quinte (E6→B6)
  playSequence([
    { freq: 1318, durMs: 50, type: 'triangle', gain: 0.10 },
    { freq: 1975, durMs: 60, type: 'triangle', gain: 0.10 },
  ])
}

export function playLevelUp(): void {
  // Drei aufsteigende Sine-Tones, kurz, ruhig (kein Fanfaren-Knall)
  playSequence([
    { freq: 660,  durMs: 60, type: 'sine', gain: 0.11 },
    { freq: 880,  durMs: 60, type: 'sine', gain: 0.11 },
    { freq: 1320, durMs: 90, type: 'sine', gain: 0.12 },
  ])
}

export function playAchievement(): void {
  // Einzelner aufsteigender Glide — dezenter „Stempel-Klang"
  playTone({ freq: 660, glideToFreq: 990, durMs: 120, type: 'triangle', gain: 0.12 })
}

export function playLessonComplete(): void {
  // Etwas wärmer als Correct, eine kleine Geste
  playSequence([
    { freq: 660, durMs: 70, type: 'sine', gain: 0.11 },
    { freq: 990, durMs: 90, type: 'sine', gain: 0.12 },
  ])
}
