/**
 * Zentrale Styling-Utilities für Canvas-Visualisierungen.
 *
 * Behebt drei wiederkehrende UX-Probleme:
 *  - Zahlen zu klein (fixe 9–11px in fast allen Viz-Komponenten)
 *  - Labels von Graphen verdeckt (kein Hintergrund hinter Zahlen)
 *  - Labels zu nah am Rand / abgeschnitten (zu kleine Margins)
 *
 * Die Utility stellt responsive Fontgrößen, Margins und eine `drawLabel`-
 * Funktion mit optionalem halbtransparentem Hintergrund bereit.
 */

export interface VizStyle {
  fontTick: string       // kleine Achsen-Ticks
  fontLabel: string      // Hauptlabels (Achsenbeschriftung, Funktionsname)
  fontAnnotation: string // Hervorgehobene Werte (z.B. Max/Min-Punkte)
  margin: { top: number; right: number; bottom: number; left: number }
  colors: {
    text: string         // Primärer Textfarbton
    textMuted: string    // Dezente Beschriftungen
    grid: string
    axis: string
    bg: string           // Canvas-Hintergrund (für Label-Backdrop)
  }
}

/**
 * Erkennt Dark-Mode zur Draw-Zeit via `documentElement.classList`.
 * Wird bei jedem `draw`-Aufruf neu geprüft, damit Theme-Wechsel live wirken.
 */
export function isDarkMode(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

/**
 * Liefert einen responsive-skalierten Style-Block abhängig von der
 * Canvas-Breite und dem aktuellen Theme.
 *
 *  - width < 400  → Tick 11px, Label 13px, großzügige Margins für Mobile
 *  - width < 720  → Tick 12px, Label 14px
 *  - width ≥ 720  → Tick 13px, Label 15px
 *
 * Mindestens 11px — nie kleiner.
 */
export function getVizStyle(canvasWidth: number, dark?: boolean): VizStyle {
  const isDark = dark ?? isDarkMode()

  let tickPx = 11
  let labelPx = 13
  let annotPx = 12
  if (canvasWidth >= 400) { tickPx = 12; labelPx = 14; annotPx = 13 }
  if (canvasWidth >= 720) { tickPx = 13; labelPx = 15; annotPx = 14 }

  const fontFamily = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

  // Margins skalieren leicht mit Canvas-Breite, aber mit belastbarem Minimum.
  // Linker Rand größer, weil dort Y-Tick-Labels stehen.
  const scale = Math.max(1, canvasWidth / 480)
  const margin = {
    top: Math.round(20 * Math.min(scale, 1.4)),
    right: Math.round(20 * Math.min(scale, 1.4)),
    bottom: Math.round(40 * Math.min(scale, 1.3)),
    left: Math.round(48 * Math.min(scale, 1.3)),
  }

  const colors = isDark
    ? {
        text: '#f1f5f9',       // surface-100
        textMuted: '#94a3b8',  // surface-400
        grid: '#1e293b',       // surface-800
        axis: '#475569',       // surface-600
        bg: '#0f172a',         // surface-900
      }
    : {
        text: '#1a1a1a',       // ink
        textMuted: '#64748b',  // surface-500
        grid: '#f1f5f9',       // surface-100
        axis: '#cbd5e1',       // surface-300
        bg: '#ffffff',
      }

  return {
    fontTick: `500 ${tickPx}px ${fontFamily}`,
    fontLabel: `600 ${labelPx}px ${fontFamily}`,
    fontAnnotation: `700 ${annotPx}px ${fontFamily}`,
    margin,
    colors,
  }
}

/**
 * Zeichnet Text mit optionalem halbtransparentem Hintergrund-Rect, damit
 * Zahlen/Labels auch dann lesbar bleiben, wenn sie über einen Graphen
 * gezeichnet werden.
 */
export function drawLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  opts: {
    align?: 'left' | 'center' | 'right'
    baseline?: CanvasTextBaseline
    color?: string
    bg?: boolean
    bgColor?: string   // explizit überschreibbar (default: canvas bg aus VizStyle)
    bgAlpha?: number   // default 0.88
    padX?: number
    padY?: number
    style?: VizStyle
  } = {}
): void {
  const {
    align = 'left',
    baseline = 'alphabetic',
    color,
    bg = false,
    bgColor,
    bgAlpha = 0.88,
    padX = 3,
    padY = 1,
    style,
  } = opts

  ctx.save()
  ctx.textAlign = align
  ctx.textBaseline = baseline

  if (bg) {
    const metrics = ctx.measureText(text)
    const ascent = metrics.actualBoundingBoxAscent || parseInt(ctx.font, 10) * 0.8
    const descent = metrics.actualBoundingBoxDescent || parseInt(ctx.font, 10) * 0.2
    const w = metrics.width
    const h = ascent + descent
    let rectX = x - padX
    if (align === 'center') rectX = x - w / 2 - padX
    else if (align === 'right') rectX = x - w - padX
    let rectY = y - ascent - padY
    if (baseline === 'top') rectY = y - padY
    else if (baseline === 'middle') rectY = y - h / 2 - padY
    else if (baseline === 'bottom') rectY = y - h - padY

    const prevAlpha = ctx.globalAlpha
    ctx.globalAlpha = bgAlpha
    ctx.fillStyle = bgColor ?? style?.colors.bg ?? '#ffffff'
    ctx.fillRect(rectX, rectY, w + 2 * padX, h + 2 * padY)
    ctx.globalAlpha = prevAlpha
  }

  if (color) ctx.fillStyle = color
  ctx.fillText(text, x, y)
  ctx.restore()
}

/**
 * Klemmt einen x/y-Wert so, dass Labels nicht über den Canvas-Rand
 * hinausragen. Nutzbar für Annotationen an Graph-Endpunkten.
 */
export function clampInside(
  x: number,
  y: number,
  canvasWidth: number,
  canvasHeight: number,
  margin = 4
): { x: number; y: number } {
  return {
    x: Math.max(margin, Math.min(canvasWidth - margin, x)),
    y: Math.max(margin, Math.min(canvasHeight - margin, y)),
  }
}
