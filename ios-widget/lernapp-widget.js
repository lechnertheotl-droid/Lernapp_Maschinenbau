// Scriptable-Widget für die Lernapp Maschinenbau (TU Wien).
// Zeigt einen Lern-Reminder auf Home- und Lockscreen. Tap öffnet die installierte PWA.
//
// Installation siehe README.md im selben Ordner.

const APP_URL = 'https://lechnertheotl-droid.github.io/Lernapp_Maschinenbau/'
const ICON_URL = APP_URL + 'icons/icon-192.png'
const ICON_CACHE_FILE = 'lernapp-widget-icon.png'

// iOS-Widgets können keine PWA direkt aus einer https-URL öffnen — sie würden
// in Safari landen. Umweg: das Widget startet einen vom User angelegten
// Kurzbefehl namens "Lernapp", der die Aktion "App öffnen → Lernapp MB" enthält.
// Wer den Kurzbefehl anders nennt, passt SHORTCUT_NAME hier an.
const SHORTCUT_NAME = 'Lernapp'
const TAP_URL = 'shortcuts://run-shortcut?name=' + encodeURIComponent(SHORTCUT_NAME)

async function loadIcon() {
  const fm = FileManager.local()
  const cachePath = fm.joinPath(fm.cacheDirectory(), ICON_CACHE_FILE)

  if (fm.fileExists(cachePath)) {
    try {
      return Image.fromFile(cachePath)
    } catch (_) {
      // Datei kaputt — neu laden
    }
  }

  try {
    const img = await new Request(ICON_URL).loadImage()
    fm.writeImage(cachePath, img)
    return img
  } catch (_) {
    return null
  }
}

function buildSmall(widget, icon) {
  const bg = new LinearGradient()
  bg.colors = [new Color('#0f172a'), new Color('#1e293b')]
  bg.locations = [0, 1]
  widget.backgroundGradient = bg
  widget.setPadding(14, 14, 14, 14)

  widget.addSpacer()

  if (icon) {
    const row = widget.addStack()
    row.layoutHorizontally()
    row.addSpacer()
    const img = row.addImage(icon)
    img.imageSize = new Size(56, 56)
    img.cornerRadius = 12
    row.addSpacer()
  }

  widget.addSpacer(6)

  const head = widget.addText('Lerne!')
  head.font = Font.boldSystemFont(20)
  head.textColor = Color.white()
  head.centerAlignText()

  const sub = widget.addText('Maschinenbau')
  sub.font = Font.regularSystemFont(12)
  sub.textColor = new Color('#94a3b8')
  sub.centerAlignText()

  widget.addSpacer()
}

function buildRectangular(widget, icon) {
  // Lockscreen — iOS rendert monochrom, keine Custom-Farben nötig.
  const row = widget.addStack()
  row.layoutHorizontally()
  row.centerAlignContent()

  if (icon) {
    const img = row.addImage(icon)
    img.imageSize = new Size(24, 24)
    img.cornerRadius = 5
    row.addSpacer(8)
  }

  const col = row.addStack()
  col.layoutVertically()

  const head = col.addText('Lernapp')
  head.font = Font.boldSystemFont(13)

  const sub = col.addText('→ Jetzt üben')
  sub.font = Font.regularSystemFont(11)
}

function buildFallback(widget, icon) {
  // medium / large / extraLarge — defensiv, falls jemand die Größe wählt.
  const bg = new LinearGradient()
  bg.colors = [new Color('#0f172a'), new Color('#1e293b')]
  bg.locations = [0, 1]
  widget.backgroundGradient = bg
  widget.setPadding(20, 20, 20, 20)

  const row = widget.addStack()
  row.layoutHorizontally()
  row.centerAlignContent()

  if (icon) {
    const img = row.addImage(icon)
    img.imageSize = new Size(48, 48)
    img.cornerRadius = 10
    row.addSpacer(14)
  }

  const col = row.addStack()
  col.layoutVertically()

  const head = col.addText('Zeit zum Lernen')
  head.font = Font.boldSystemFont(22)
  head.textColor = Color.white()

  const sub = col.addText('Tippen zum Öffnen')
  sub.font = Font.regularSystemFont(13)
  sub.textColor = new Color('#94a3b8')
}

async function run() {
  const widget = new ListWidget()
  widget.url = TAP_URL

  const icon = await loadIcon()
  const family = config.widgetFamily

  if (family === 'accessoryRectangular') {
    buildRectangular(widget, icon)
  } else if (family === 'small' || !family) {
    buildSmall(widget, icon)
  } else {
    buildFallback(widget, icon)
  }

  if (config.runsInWidget) {
    Script.setWidget(widget)
  } else {
    await widget.presentSmall()
  }

  Script.complete()
}

await run()
