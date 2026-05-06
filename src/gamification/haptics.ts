// Mobile-Haptik via navigator.vibrate. Patterns dezent, kein Pager-Buzzen.

let enabled = true

export function setHapticsEnabled(on: boolean): void {
  enabled = on
}

function vibrate(pattern: number | number[]): void {
  if (!enabled) return
  if (typeof navigator === 'undefined') return
  const nav = navigator as Navigator & { vibrate?: (p: number | number[]) => boolean }
  if (typeof nav.vibrate !== 'function') return
  try {
    nav.vibrate(pattern)
  } catch {
    // Manche Browser werfen, wenn ohne User-Gesture aufgerufen — leise schlucken.
  }
}

export function hapticCorrect(): void {
  vibrate(20)
}

export function hapticWrong(): void {
  vibrate([40, 30, 40])
}

export function hapticCombo(): void {
  vibrate([20, 30, 20])
}

export function hapticLevelUp(): void {
  vibrate([60, 40, 60])
}

export function hapticAchievement(): void {
  vibrate([30, 30, 30])
}
