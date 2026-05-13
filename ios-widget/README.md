# iOS-Widget für die Lernapp

Ein einfaches Reminder-Widget für iPhone-Home- und Lockscreen, das dich ans Lernen erinnert und mit einem Tap die App öffnet.

## Was das Widget tut — und was nicht

**Tut:**
- Zeigt App-Icon + "Lerne!" / "Lernapp → Jetzt üben" auf Home- oder Lockscreen
- Tap öffnet die deployed App: <https://lechnertheotl-droid.github.io/Lernapp_Maschinenbau/>
- Funktioniert in zwei Größen: **Small** (Homescreen quadratisch) und **Accessory Rectangular** (Lockscreen unter der Uhr)

**Tut nicht:**
- Zeigt **nicht** automatisch deinen persönlichen Fortschritt oder die konkret nächste Lesson. Grund: iOS-Widgets laufen in einem isolierten Sandbox-Prozess und können auf den `localStorage` der PWA technisch nicht zugreifen. Die konkrete "nächste Aufgabe" siehst du, sobald du per Tap in die App reingehst.

## Voraussetzungen

- iPhone mit iOS 16 oder neuer (für Lockscreen-Widgets)
- Die App **Scriptable** aus dem App Store (gratis): <https://apps.apple.com/de/app/scriptable/id1405459188>

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

1. App **Kurzbefehle** (Shortcuts) öffnen → Tab "Automation" → "Persönliche Automation erstellen"
2. **"Tageszeit"** wählen → **15:00** → "Weiter"
3. Aktion hinzufügen: **"URL"** → URL eingeben:
   `https://lechnertheotl-droid.github.io/Lernapp_Maschinenbau/`
4. Weitere Aktion hinzufügen: **"URLs öffnen"**
5. "Vor dem Ausführen fragen" **deaktivieren** → "Fertig"

Ab jetzt klingelt das iPhone täglich um 15:00 und öffnet direkt die App.

## Troubleshooting

- **Icon erscheint nicht:** Script in Scriptable einmal manuell laufen lassen (Play-Button), damit der Icon-Cache initial gefüllt wird. Internet muss beim ersten Lauf verfügbar sein — danach läuft alles offline.
- **Widget zeigt "Script not found":** Im Edit-Modus des Widgets sicherstellen, dass das Script "Lernapp" heißt und ausgewählt ist.
- **Tap öffnet nichts:** Im Widget-Edit-Modus "When Interacting" auf "Open URL" lassen und das URL-Feld **leer** lassen — das Script setzt die URL selbst über `widget.url`.
- **Lockscreen-Widget sieht farblos aus:** Das ist beabsichtigt. iOS rendert Lockscreen-Widgets immer monochrom; nur die Form/Symbole sind sichtbar.

## Anpassen

Wenn du Texte ändern willst (z.B. "Lerne!" → "Üben!", oder Schriftgrößen):

- **`lernapp-widget.js`** in Scriptable öffnen und direkt am iPhone editieren — Änderungen werden beim nächsten Widget-Refresh übernommen (kann ein paar Minuten dauern; iOS entscheidet selbst, wann es Widgets aktualisiert).
- Wer die Änderung dauerhaft im Repo behalten will, editiert die Datei [`lernapp-widget.js`](./lernapp-widget.js) und committet.
