# iOS-Widget für die Lernapp

Ein einfaches Reminder-Widget für iPhone-Home- und Lockscreen, das dich ans Lernen erinnert und mit einem Tap die App öffnet.

## Was das Widget tut — und was nicht

**Tut:**
- Zeigt App-Icon + "Lerne!" / "Lernapp → Jetzt üben" auf Home- oder Lockscreen
- Tap öffnet die **installierte PWA** standalone (nicht im Safari-Tab) — via Kurzbefehl-Umweg, siehe Voraussetzung unten
- Funktioniert in zwei Größen: **Small** (Homescreen quadratisch) und **Accessory Rectangular** (Lockscreen unter der Uhr)

**Tut nicht:**
- Zeigt **nicht** automatisch deinen persönlichen Fortschritt oder die konkret nächste Lesson. Grund: iOS-Widgets laufen in einem isolierten Sandbox-Prozess und können auf den `localStorage` der PWA technisch nicht zugreifen. Die konkrete "nächste Aufgabe" siehst du, sobald du per Tap in die App reingehst.

## Voraussetzungen

- iPhone mit iOS 16.4 oder neuer (Lockscreen-Widgets + Home-Screen-PWA-Support)
- Die App **Scriptable** aus dem App Store (gratis): <https://apps.apple.com/de/app/scriptable/id1405459188>
- Die Lernapp einmal von <https://lechnertheotl-droid.github.io/Lernapp_Maschinenbau/> aus Safari per "Teilen → Zum Home-Bildschirm" als PWA installieren

## Voraussetzung: Kurzbefehl "Lernapp" anlegen (einmalig, ~30 Sekunden)

iOS-Widgets können installierte PWAs nicht direkt aus einer https-URL öffnen — sie würden sonst in Safari landen statt in der PWA. Der Workaround: ein Kurzbefehl, den das Widget startet und der seinerseits die App öffnet.

1. App **Kurzbefehle** öffnen → Tab "Kurzbefehle" unten → "+" oben rechts
2. Oben den Namen antippen → **Lernapp** eingeben (exakt so, ohne Leerzeichen) → mit Enter bestätigen
3. "+ Aktion hinzufügen" → in der Suche **"App öffnen"** eintippen → Aktion **"App öffnen"** wählen
4. In der Aktion auf das blaue "App" tippen → in der Liste **Lernapp MB** suchen und auswählen → "Fertig"

Test: in Kurzbefehle den "Lernapp"-Kurzbefehl antippen — die PWA öffnet sich standalone.

> **Falls "Lernapp MB" nicht in der App-Liste auftaucht:** PWA einmal vom Homescreen öffnen und ein paar Sekunden offen lassen, dann den Kurzbefehl-Editor schließen und neu öffnen — iOS registriert Home-Screen-PWAs manchmal verzögert. Falls sie weiterhin fehlt, ersatzweise Aktion **"URLs öffnen"** mit `https://lechnertheotl-droid.github.io/Lernapp_Maschinenbau/` nehmen — öffnet die Seite zumindest in Safari.

## Installation in 6 Schritten

1. **Scriptable installieren** aus dem App Store.
2. **Neues Script erstellen:** Scriptable öffnen → Plus-Symbol oben rechts → leeres Script erscheint.
3. **Code einfügen:** Den kompletten Inhalt von [`lernapp-widget.js`](./lernapp-widget.js) kopieren und ins Script-Feld einfügen. Oben den Namen auf **Lernapp** ändern. Scriptable speichert automatisch.
4. **Einmal manuell laufen lassen:** Play-Button (▶) oben drücken. Eine Preview erscheint mit App-Icon + "Lerne!". Damit ist auch der Icon-Cache gefüllt. Wenn statt Icon ein leerer Platz erscheint → kurz prüfen, dass Internet aktiv ist, und nochmal Play drücken.
5. **Homescreen-Widget hinzufügen:**
   - Homescreen lang drücken → "+" oben links → "Scriptable" suchen
   - **Small**-Größe wählen → "Widget hinzufügen"
   - Auf das neue Widget tippen-und-halten → "Widget bearbeiten" → Script: **Lernapp** auswählen
6. **Lockscreen-Widget hinzufügen:**
   - Lockscreen lang drücken → "Anpassen" → "Sperrbildschirm" antippen
   - Im Widget-Bereich unter der Uhr antippen → "Scriptable" → Variante **Rectangular** wählen → das Widget antippen und Script: **Lernapp** auswählen

Fertig. Tap auf das Widget öffnet die App in Safari.

## Optional: Tägliche Push-Erinnerung per Apple Shortcuts

Das Widget ist passiv (du musst hingucken). Wer eine aktive Erinnerung will, kann zusätzlich in unter 1 Minute eine Tages-Automation einrichten:

1. App **Kurzbefehle** öffnen → Tab "Automation" → "Persönliche Automation erstellen"
2. **"Tageszeit"** wählen → **15:00** → "Weiter"
3. Aktion hinzufügen: in der Suche **"Kurzbefehl ausführen"** eintippen → Aktion wählen
4. In der Aktion auf "Kurzbefehl" tippen → **Lernapp** auswählen (den oben angelegten)
5. "Vor dem Ausführen fragen" **deaktivieren** → "Fertig"

Ab jetzt klingelt das iPhone täglich um 15:00 und öffnet die PWA standalone. Vorteil dieser Konstruktion: ändern sich App-URL oder Öffnen-Logik, musst du nur den "Lernapp"-Kurzbefehl anpassen — Widget und Automation ziehen automatisch nach.

## Troubleshooting

- **Icon erscheint nicht:** Script in Scriptable einmal manuell laufen lassen (Play-Button), damit der Icon-Cache initial gefüllt wird. Internet muss beim ersten Lauf verfügbar sein — danach läuft alles offline.
- **Widget zeigt "Script not found":** Im Edit-Modus des Widgets sicherstellen, dass das Script "Lernapp" heißt und ausgewählt ist.
- **Tap öffnet nichts oder zeigt eine Fehlermeldung:** Der "Lernapp"-Kurzbefehl existiert nicht oder ist anders benannt. Voraussetzungs-Sektion oben durchgehen. Im Widget-Edit-Modus "When Interacting" auf "Open URL" lassen und das URL-Feld **leer** lassen — das Script setzt die URL selbst über `widget.url`.
- **Tap öffnet Safari statt der PWA:** Der "Lernapp"-Kurzbefehl benutzt "URLs öffnen" statt "App öffnen" (Fallback-Variante). Kurzbefehl bearbeiten und die Aktion auf "App öffnen → Lernapp MB" umstellen.
- **Lockscreen-Widget sieht farblos aus:** Das ist beabsichtigt. iOS rendert Lockscreen-Widgets immer monochrom; nur die Form/Symbole sind sichtbar.

## Anpassen

Wenn du Texte ändern willst (z.B. "Lerne!" → "Üben!", oder Schriftgrößen):

- **`lernapp-widget.js`** in Scriptable öffnen und direkt am iPhone editieren — Änderungen werden beim nächsten Widget-Refresh übernommen (kann ein paar Minuten dauern; iOS entscheidet selbst, wann es Widgets aktualisiert).
- Wer die Änderung dauerhaft im Repo behalten will, editiert die Datei [`lernapp-widget.js`](./lernapp-widget.js) und committet.
