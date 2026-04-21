# Lernziele — Maschinenbau TU Wien

> **Automatisch generiert** am 2026-04-21 via `npm run lernziele`.
> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.

Die Datei bündelt alle Lernziele der App nach Studienphase. Jedes Topic, jede Unit und jede Lesson listet, was danach beherrscht werden soll. Die Sub-Goals markieren kleinteilige Prüfungs-Mikrothemen (HOCH/MITTEL/NIEDRIG).

## Kennzahlen

| Metrik | Wert |
|---|---|
| Topics | 22 |
| Topics mit expliziten `topicGoals` | 22 / 22 (100%) |
| Lessons insgesamt | 226 |
| Lessons mit `subGoals` | 60 / 226 (27%) |
| Aufgaben (manuell/gesamt) | 1174 / 2275 (52% manuell) |
| Aufgaben mit 4-Block-Erklärung | 364 / 2275 (16%) |

## Übersicht nach Studienphase

| Phase | Topic | Units | Lessons | Aufg. manuell/gesamt | 4-Block | Prüfung |
|---|---|---|---|---|---|---|
| Phase 0 | [Algebra & Funktionen](#algebra) | 5 | 18 | 112/183 | 51/183 (28%) | Grundlage |
| Phase 1 | [Trigonometrie](#trigonometry) | 4 | 18 | 66/180 | 27/180 (15%) | **Pflicht** |
| Phase 1 | [Vektoren & Analytische Geometrie](#vektoren) | 3 | 12 | 54/120 | 20/120 (17%) | **Pflicht** |
| Phase 1 | [Differentialrechnung](#ableitung) | 5 | 18 | 113/183 | 57/183 (31%) | **Pflicht** |
| Phase 1 | [Integralrechnung](#integralrechnung) | 4 | 16 | 94/163 | 51/163 (31%) | **Pflicht** |
| Phase 1 | [Technische Mechanik](#technische-mechanik) | 4 | 16 | 59/160 | 38/160 (24%) | **Pflicht** |
| Phase 1 | [Werkstoffkunde](#werkstoffkunde) | 3 | 6 | 8/60 | 28/60 (47%) | **Pflicht** |
| Phase 1 | [Elektrotechnik](#elektrotechnik) | 3 | 8 | 25/80 | 6/80 (8%) | **Pflicht** |
| Phase 1 | [Python & Matlab](#python-matlab) | 4 | 13 | 46/130 | 0/130 (0%) | **Pflicht** |
| Phase 2 | [Lineare Algebra](#lineare-algebra) | 3 | 12 | 75/123 | 0/123 (0%) | **Pflicht** |
| Phase 2 | [Differentialgleichungen](#differentialgleichungen) | 3 | 10 | 61/103 | 0/103 (0%) | **Pflicht** |
| Phase 2 | [Komplexe Zahlen](#komplexe-zahlen) | 4 | 9 | 81/90 | 9/90 (10%) | **Pflicht** |
| Phase 2 | [Reihen & Folgen](#reihen-folgen) | 2 | 5 | 45/50 | 5/50 (10%) | **Pflicht** |
| Phase 2 | [Festigkeitslehre](#festigkeitslehre) | 3 | 11 | 35/110 | 20/110 (18%) | **Pflicht** |
| Phase 2 | [Thermodynamik](#thermodynamik) | 3 | 8 | 26/80 | 8/80 (10%) | **Pflicht** |
| Phase 2 | [Maschinenelemente](#maschinenelemente) | 3 | 8 | 26/80 | 8/80 (10%) | **Pflicht** |
| Phase 3 | [Mehrdim. Analysis](#mehrdim-analysis) | 2 | 5 | 45/50 | 5/50 (10%) | **Pflicht** |
| Phase 3 | [Numerische Mathematik](#numerik) | 2 | 5 | 45/50 | 5/50 (10%) | Wahl |
| Phase 3 | [Statistik & Wahrscheinlichkeit](#statistik) | 2 | 6 | 54/60 | 6/60 (10%) | Wahl |
| Phase 3 | [Fourier & Laplace](#fourier-laplace) | 3 | 7 | 56/70 | 0/70 (0%) | **Pflicht** |
| Phase 3 | [Fluidmechanik](#fluidmechanik) | 3 | 9 | 29/90 | 14/90 (16%) | **Pflicht** |
| Phase 3 | [Regelungstechnik](#regelungstechnik) | 3 | 6 | 19/60 | 6/60 (10%) | **Pflicht** |

## Lehrplan-Alignment

Quelle: `src/content/lehrplan/tu-wien-maschinenbau.md`. Jede Phase unten entspricht einem Abschnitt dieses Lehrplans; fehlen Topics, ist das ein offener Punkt.

## Phase 0 — Vorkurs

*Basiskompetenzen vor Studienbeginn: Rechnen, Einheiten, Grundbegriffe. Diese Inhalte tauchen in jeder späteren Prüfung als stille Voraussetzung auf.*

<a id="algebra"></a>
### Algebra & Funktionen `algebra`

**Prüfungsrelevanz:** Grundlage  
**Aufgaben:** 183 gesamt · 112 manuell · 71 auto-supplemental · 51 mit 4-Block-Erklärung (28%)

**Topic-Lernziele (nach Abschluss):**
- Brüche, Klammern, Potenzen und Logarithmen fehlerfrei umformen
- Lineare und quadratische Gleichungen zielsicher nach einer Variable auflösen
- Elementarfunktionen (linear, quadratisch, Potenz, exponentiell, logarithmisch) erkennen und grob skizzieren
- Prozentrechnung und Einheitenumrechnung auf technische Aufgaben anwenden
- Äquivalenzumformungen bewusst einsetzen und jede Umformung per Probe kontrollieren

#### Rechnen & Brüche (Vorkurs-Einstieg)

**Unit-Lernziele:**
- Punkt-vor-Strich und Klammer-Vorrang sicher in komplexen Termen anwenden
- Brüche erweitern, kürzen und auf gemeinsamen Nenner bringen
- Prozentrechnung mit Grundwert/Prozentwert/Prozentsatz in Anwendungsaufgaben lösen
- Terme durch Ausmultiplizieren, Ausklammern und Zusammenfassen vereinfachen

##### Grundrechnen, Klammern & Vorrang `alg-0-1` · 12 min

**Nach dieser Lesson kannst du:**
- Punkt-vor-Strich sicher anwenden
- Klammern korrekt auflösen (innen nach außen)
- Minuszeichen vor einer Klammer als Vorzeichenwechsel verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Vorrangregel Punkt-vor-Strich bei gemischten Termen
- [HOCH] Minuszeichen vor Klammer auf alle Summanden anwenden
- [MITTEL] Doppel-Minus aufgelöst: $(-a)(-b)=+ab$
- [MITTEL] Klammerschachtelung von innen nach außen abarbeiten

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 7 mit 4-Block-Erklärung

##### Bruchrechnen sicher `alg-0-2` · 15 min

**Nach dieser Lesson kannst du:**
- Brüche kürzen, erweitern
- Brüche addieren und subtrahieren (Hauptnenner finden)
- Brüche multiplizieren und dividieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Hauptnenner bei ungleichnamigen Brüchen finden (kgV)
- [HOCH] Division durch Bruch als Multiplikation mit Kehrwert
- [MITTEL] Doppelbrüche auflösen
- [MITTEL] Bruch vollständig kürzen per ggT

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 7 mit 4-Block-Erklärung

##### Prozent & Dreisatz `alg-0-3` · 12 min

**Nach dieser Lesson kannst du:**
- Prozentwert, Grundwert, Prozentsatz berechnen
- Direkte vs. indirekte Proportionalität erkennen
- Dreisatz auf Alltagsprobleme anwenden

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 7 mit 4-Block-Erklärung

##### Termumformung & Gleichungen `alg-0-4` · 15 min

**Nach dieser Lesson kannst du:**
- Gleichartige Terme zusammenfassen
- Äquivalenzumformungen sicher anwenden
- Formeln nach einer Variable umstellen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 7 mit 4-Block-Erklärung

#### Potenzen, Wurzeln & Logarithmen

**Unit-Lernziele:**
- Potenzgesetze $a^m \cdot a^n = a^{m+n}$, $(a^m)^n = a^{m \cdot n}$, $a^{-n} = 1/a^n$ sicher anwenden
- Wurzeln als Bruchpotenzen lesen: $\sqrt[n]{a} = a^{1/n}$ und mit Potenzgesetzen rechnen
- Logarithmengesetze nutzen, um Produkte/Potenzen in Summen/Vielfache zu zerlegen
- Exponentialgleichungen durch Logarithmieren und Logarithmusgleichungen durch Potenzieren lösen

##### Potenzgesetze `alg-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Alle Potenzregeln kennen und sicher anwenden
- Terme mit gleichen Basen vereinfachen
- Typische Fehler (Multiplikation vs. Potenz) vermeiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Gleiche Basis: $x^a \cdot x^b = x^{a+b}$ und $x^a/x^b = x^{a-b}$
- [HOCH] Potenz einer Potenz: $(x^a)^b = x^{a \cdot b}$ — niemals mit Multiplikation verwechseln
- [HOCH] Negativer Exponent $x^{-n} = 1/x^n$ und nullter Exponent $x^0 = 1$ (für $x \neq 0$)
- [MITTEL] Produkt/Quotient in Klammer: $(xy)^n = x^n y^n$, $(x/y)^n = x^n/y^n$

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 3 mit 4-Block-Erklärung

##### Wurzeln und gebrochene Exponenten `alg-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Wurzeln als gebrochene Potenzen verstehen
- Wurzelterme vereinfachen
- Typische Fehler (Wurzel von Summe) vermeiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Wurzel als Bruchpotenz: $\sqrt[n]{x} = x^{1/n}$, dadurch gelten alle Potenzgesetze
- [HOCH] Wurzel des Produkts: $\sqrt{ab} = \sqrt a \cdot \sqrt b$ — aber $\sqrt{a+b} \neq \sqrt a + \sqrt b$
- [MITTEL] Nenner rational machen: Erweitern mit passender Wurzel löst Wurzeln aus dem Nenner

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Logarithmen `alg-1-3` · 18 min

**Nach dieser Lesson kannst du:**
- Logarithmus als Umkehrfunktion der Exponentialfunktion verstehen
- Logarithmusgesetze anwenden
- Gleichungen mit $e^{x}$ und $\ln$ lösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

#### Gleichungen & Ungleichungen

**Unit-Lernziele:**
- Lineare Gleichungen durch Äquivalenzumformungen auflösen und jede Umformung per Probe verifizieren
- Quadratische Gleichungen mit Mitternachts-/pq-Formel und Diskriminante lösen, Lösungsanzahl bestimmen
- Polynomdivision durchführen und Polynome mittels Nullstellen in Linearfaktoren zerlegen
- Lineare Ungleichungen mit Vorzeichenregeln auflösen (Multiplikation mit negativer Zahl → Umkehrung)

##### Lineare Gleichungen `alg-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungen lösen
- Textaufgaben in Gleichungen übersetzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Äquivalenzumformungen: gleiche Operation auf beiden Seiten — Gleichung bleibt erhalten
- [HOCH] Standardvorgehen: Klammern auflösen $\to$ Variable auf eine Seite $\to$ durch Koeffizient teilen
- [MITTEL] Textaufgaben: Variable definieren, Gleichung aufstellen, lösen, zurück in den Kontext interpretieren
- [HOCH] Probe durch Einsetzen in Original-Gleichung schützt vor Vorzeichen- und Umformungsfehlern

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

##### Quadratische Gleichungen `alg-2-2` · 20 min

**Nach dieser Lesson kannst du:**
- pq-Formel und abc-Formel anwenden
- Diskriminante interpretieren
- Satz von Vieta nutzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Mitternachtsformel $x = (-b \pm \sqrt{b^2 - 4ac})/(2a)$ für $ax^2 + bx + c = 0$
- [HOCH] Diskriminante $D = b^2 - 4ac$: $D>0$ zwei reelle Lösungen, $D=0$ eine doppelte, $D<0$ keine reelle
- [MITTEL] Satz von Vieta: $x_1 + x_2 = -b/a$, $x_1 \cdot x_2 = c/a$ — zum schnellen Raten/Prüfen
- [HOCH] Faktorisierte Form $(x - x_1)(x - x_2) = 0$ macht Nullstellen direkt sichtbar

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 2 mit 4-Block-Erklärung

##### Polynomgleichungen & Polynomdivision `alg-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Nullstellen durch Probieren finden
- Polynomdivision durchführen
- Horner-Schema anwenden

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Ungleichungen `alg-2-4` · 15 min

**Nach dieser Lesson kannst du:**
- Lineare Ungleichungen lösen
- Betragsungleichungen auflösen
- Quadratische Ungleichungen mit Vorzeichentabelle lösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

#### Funktionen

**Unit-Lernziele:**
- Funktionsbegriff, Definitions-/Wertebereich und Funktionsgraph klar unterscheiden
- Elementare Funktionen (linear, quadratisch, Potenz, exponentiell, logarithmisch) am Graphen erkennen
- Verschiebung, Streckung und Spiegelung von Graphen aus der Funktionsgleichung ablesen
- Umkehrfunktion bestimmen und grafisch durch Spiegelung an $y = x$ visualisieren

##### Funktionsbegriff `alg-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Definition einer Funktion kennen
- Definitions- und Wertebereich bestimmen
- Injektiv, surjektiv, bijektiv unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Funktion: jedem $x$ aus Definitionsbereich wird *genau ein* $y$ zugeordnet
- [HOCH] Definitionsbereich $D$: alle zulässigen $x$ (Division durch 0 ausschließen, Radikand $\ge 0$, Logarithmus $>0$)
- [MITTEL] Injektiv = verschiedene $x$ $\to$ verschiedene $y$; surjektiv = jedes $y$ im Bild wird getroffen; bijektiv = beides

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Elementare Funktionen `alg-3-2` · 15 min

**Nach dieser Lesson kannst du:**
- Potenz-, Exponential- und Logarithmusfunktionen unterscheiden
- Wachstumsverhalten vergleichen
- Definitionsbereiche kennen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 1 mit 4-Block-Erklärung

##### Funktionsoperationen `alg-3-3` · 12 min

**Nach dieser Lesson kannst du:**
- Verschiebung, Streckung, Spiegelung anwenden
- Transformationsregeln sicher beherrschen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

##### Umkehrfunktionen `alg-3-4` · 12 min

**Nach dieser Lesson kannst du:**
- Umkehrfunktion berechnen
- Bedingung für Existenz kennen
- Graphische Interpretation verstehen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Mehrschrittige Prüfungsaufgaben aus Algebra, Potenzen, Gleichungen, Funktionen zielsicher lösen
- Zeitdruck-tauglich: häufige Tricks und Standardmuster in TU-Wien-Prüfungen erkennen
- Eigene Lösungswege durch Probe und Plausibilitätsabschätzung kontrollieren

##### Prüfung: Algebra-Grundlagen `alg-4-1` · 25 min

**Nach dieser Lesson kannst du:**
- Potenzgesetze und Logarithmus­regeln sicher anwenden
- Quadratische Gleichungen auf Prüfungsniveau lösen
- Exponential­gleichungen durch Logarithmieren lösen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Funktionen & Anwendungen `alg-4-2` · 25 min

**Nach dieser Lesson kannst du:**
- Extrema und Scheitelpunkte von Funktionen bestimmen
- Umkehrfunktionen berechnen und interpretieren
- Funktionen auf technische Probleme anwenden

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 2 mit 4-Block-Erklärung

##### Prüfung: Gleichungs­systeme & technische Anwendungen `alg-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungs­systeme im Technik-Kontext lösen
- Wurzel-, Betrags- und Exponential­gleichungen mit Probe handhaben
- Logarithmische Skalen (pH, dB, Bel) verstehen und rechnen
- Typische Prüfungsfallen (Scheinlösungen, Definitions­bereiche) erkennen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

## Phase 1 — Semester 1

*Die fünf Grundsäulen des 1. Semesters: Mathe 1, Mechanik 1 (Statik), Werkstoffkunde 1, Elektrotechnik, Programmieren.*

<a id="trigonometry"></a>
### Trigonometrie `trigonometry`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 180 gesamt · 66 manuell · 114 auto-supplemental · 27 mit 4-Block-Erklärung (15%)

**Topic-Lernziele (nach Abschluss):**
- Winkel zwischen Grad und Bogenmaß sicher umrechnen
- sin, cos, tan am rechtwinkligen Dreieck und am Einheitskreis interpretieren
- Quadranten- und Vorzeichenregeln für trigonometrische Funktionen anwenden
- Standard-Additionstheoreme zur Vereinfachung nutzen
- Technische Aufgaben mit Winkel und Kraftzerlegung (Schiefe Ebene, Kräfteparallelogramm) lösen

#### Grundlagen der Trigonometrie

**Unit-Lernziele:**
- Grad- und Bogenmaß fehlerfrei umrechnen: $\alpha_\text{rad} = \alpha_\text{deg} \cdot \pi / 180$
- Sinus, Kosinus, Tangens am rechtwinkligen Dreieck als Seitenverhältnisse verstehen und anwenden
- Grundwerte für $0°, 30°, 45°, 60°, 90°$ auswendig kennen und ableiten können
- Taschenrechner DEG/RAD-Modus bewusst wählen — Fehlerquelle Nr. 1 in Prüfungen

##### Winkel-Intuition (Einstieg) `trig-1-0` · 8 min

**Nach dieser Lesson kannst du:**
- Spitzen, rechten, stumpfen, gestreckten Winkel visuell erkennen
- Winkelsumme im Dreieck ($180°$) anwenden
- Anschauung für $45°$, $90°$, $180°$, $360°$ entwickeln

**Kleine Themen (Sub-Goals):**
- [HOCH] Winkeltypen: spitz $<90°$, recht $=90°$, stumpf $90°–180°$, gestreckt $=180°$, voll $=360°$
- [HOCH] Innenwinkelsumme im Dreieck ist immer $180°$ — daraus 3. Winkel berechnen
- [MITTEL] Scheitel-/Nebenwinkel an sich schneidenden Geraden: Scheitelwinkel gleich, Nebenwinkel ergänzen auf $180°$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 7 mit 4-Block-Erklärung

##### Winkel und ihre Maße `trig-1-1` · 10 min

**Nach dieser Lesson kannst du:**
- Grad- und Bogenmaß umrechnen
- Bedeutung von π im Einheitskreis verstehen
- DEG/RAD-Modus am Taschenrechner sicher wählen

**Kleine Themen (Sub-Goals):**
- [HOCH] DEG/RAD-Umschaltung am Taschenrechner
- [HOCH] π-Vielfache (π/6, π/4, π/3, π/2) als Grad erkennen
- [HOCH] Umrechnungsformel $\alpha_{rad}=\alpha_{deg}\cdot\pi/180$
- [MITTEL] Bogenlänge am Einheitskreis als Winkelmaß

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

##### Rechtwinkliges Dreieck `trig-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- sin, cos, tan als Seitenverhältnisse kennen
- SOH-CAH-TOA anwenden
- Verbindung zum Einheitskreis herstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] SOH-CAH-TOA als Merkregel für Seitenverhältnisse
- [HOCH] Gegenkathete vs. Ankathete in beliebiger Dreiecksorientierung identifizieren
- [MITTEL] Umkehrfunktionen arcsin/arccos/arctan sinnvoll einsetzen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Die Grundwerte `trig-1-3` · 15 min

**Nach dieser Lesson kannst du:**
- Werte für 0°, 30°, 45°, 60°, 90° auswendig kennen
- Muster in den Grundwerten erkennen
- Grundwerte am Einheitskreis ablesen

**Kleine Themen (Sub-Goals):**
- [HOCH] Auswendig: $\sin 0° = 0$, $\sin 30° = 1/2$, $\sin 45° = \sqrt2/2$, $\sin 60° = \sqrt3/2$, $\sin 90° = 1$
- [HOCH] Merkregel: $\sin$-Werte folgen dem Muster $\sqrt n / 2$ für $n = 0, 1, 2, 3, 4$
- [HOCH] Kosinus ist Sinus rückwärts: $\cos 0° = 1, \cos 90° = 0$, dazwischen symmetrisch
- [MITTEL] Komplementärwinkel: $\cos\alpha = \sin(90° - \alpha)$ und umgekehrt

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Vorzeichen und Quadranten `trig-1-4` · 12 min

**Nach dieser Lesson kannst du:**
- Vorzeichen von sin/cos/tan in allen vier Quadranten bestimmen
- Winkel > 90° berechnen
- Reduktionsformeln am Einheitskreis herleiten

**Kleine Themen (Sub-Goals):**
- [HOCH] Quadranten I–IV durchnummerieren und Vorzeichen von $\sin$ (y-Koordinate) und $\cos$ (x-Koordinate) bestimmen
- [HOCH] Symmetrien: $\sin(180° - \alpha) = \sin\alpha$, $\cos(180° - \alpha) = -\cos\alpha$
- [MITTEL] Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Einheitskreis und Winkelfunktionen

**Unit-Lernziele:**
- Sinus/Kosinus am Einheitskreis als $y$- bzw. $x$-Koordinate eines Punktes verstehen
- Symmetrien ($\sin(-\alpha) = -\sin\alpha$, $\cos(-\alpha) = \cos\alpha$) und Periodizität ($2\pi$) anwenden
- Werte in allen vier Quadranten durch Vorzeichen und Achsensymmetrie bestimmen
- Zusammenhang $\sin^2\alpha + \cos^2\alpha = 1$ als Pythagoras am Einheitskreis erkennen

##### Der Einheitskreis `trig-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Den Einheitskreis als Grundlage verstehen
- Punkte auf dem Einheitskreis einordnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### sin und cos als Koordinaten `trig-2-2` · 10 min

**Nach dieser Lesson kannst du:**
- sin und cos als x/y-Koordinaten am Einheitskreis verstehen
- Punkte ↔ Winkel umsetzen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

##### Symmetrien und Periodizität `trig-2-3` · 12 min

**Nach dieser Lesson kannst du:**
- Periodizität von sin und cos verstehen
- Symmetrieeigenschaften anwenden
- Reduktionsformeln aus dem Einheitskreis herleiten

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

##### Tangens im Einheitskreis `trig-2-4` · 10 min

**Nach dieser Lesson kannst du:**
- Tangens als sin/cos verstehen
- Polstellen von tan erkennen
- Vorzeichen von tan in Quadranten bestimmen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Alle vier Quadranten `trig-2-5` · 15 min

**Nach dieser Lesson kannst du:**
- Winkel in allen Quadranten berechnen
- Reduktionsformeln anwenden
- Referenzwinkel bilden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

#### Anwendungen und Identitäten

**Unit-Lernziele:**
- Additionstheoreme und Doppelwinkelformeln zur Termvereinfachung einsetzen
- Sinus-/Kosinus-Satz für allgemeine Dreiecke (ohne rechten Winkel) anwenden
- Umkehrfunktionen arcsin/arccos/arctan mit Haupt-Wertebereichen sauber benutzen
- Technische Anwendungen: Schwingungen, Phasenwinkel und Projektionen trigonometrisch beschreiben

##### Additionstheoreme `trig-3-1` · 15 min

**Nach dieser Lesson kannst du:**
- Additionstheoreme für sin und cos kennen
- Anwenden bei konkreten Winkeln

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Doppelwinkelformeln und Pythagoreischer Satz `trig-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Doppelwinkelformeln anwenden
- sin²+cos²=1 verstehen und nutzen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `trig-3-3` · 15 min

**Nach dieser Lesson kannst du:**
- Kräfte in Komponenten zerlegen
- Schwingungen verstehen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### Inverse Funktionen `trig-3-4` · 12 min

**Nach dieser Lesson kannst du:**
- arcsin, arccos, arctan kennen und anwenden
- Definitionsbereiche verstehen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### Sinussatz & Cosinussatz `trig-3-5` · 14 min

**Nach dieser Lesson kannst du:**
- Sinussatz und Cosinussatz als Verallgemeinerung von SOH-CAH-TOA verstehen
- WWS/SSW-Konfigurationen mit Sinussatz lösen
- SWS/SSS-Konfigurationen mit Cosinussatz lösen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 5 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Trigonometrische Gleichungen im angegebenen Intervall vollständig (inkl. aller Perioden-Lösungen) angeben
- Mehrstufige Anwendungsaufgaben (Geometrie, Technik, Vektorgeometrie) lösen
- Identitäten zur Vereinfachung komplexer Ausdrücke gezielt einsetzen

##### Prüfung: Identitäten & Gleichungen `trig-4-1` · 20 min

**Nach dieser Lesson kannst du:**
- Trigonometrische Identitäten umformen
- Gleichungen auf Prüfungsniveau lösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Technische Anwendungen `trig-4-2` · 20 min

**Nach dieser Lesson kannst du:**
- Prüfungsaufgaben zu Kräften und Schwingungen lösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Einheitskreis & Gleichungssysteme `trig-4-3` · 20 min

**Nach dieser Lesson kannst du:**
- Lösungsmengen bestimmen
- Komplexe Umformungen durchführen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

<a id="vektoren"></a>
### Vektoren & Analytische Geometrie `vektoren`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 120 gesamt · 54 manuell · 66 auto-supplemental · 20 mit 4-Block-Erklärung (17%)

**Topic-Lernziele (nach Abschluss):**
- Vektoren als Ortsvektoren und Richtungsvektoren unterscheiden
- Vektoraddition, Subtraktion und Skalarmultiplikation komponentenweise durchführen
- Skalarprodukt zur Winkel- und Orthogonalitätsprüfung einsetzen
- Kreuzprodukt für Normalenvektoren und Flächenberechnung nutzen
- Geraden und Ebenen in Parameter- und Normalenform darstellen und schneiden

#### Vektorrechnung

**Unit-Lernziele:**
- Vektoren komponentenweise addieren, subtrahieren und mit Skalaren multiplizieren
- Betrag $|\vec{v}|$ und Einheitsvektor $\vec{e} = \vec{v}/|\vec{v}|$ sicher berechnen
- Skalarprodukt zur Winkel- und Orthogonalitätsprüfung sowie Projektion nutzen
- Kreuzprodukt für Flächeninhalte, Normalenvektoren und Drehmoment $\vec{M} = \vec{r} \times \vec{F}$ anwenden

##### Koordinaten, Punkte & Pfeile (Einstieg) `vek-1-0` · 10 min

**Nach dieser Lesson kannst du:**
- Koordinaten $(x, y)$ in 2D lesen und zeichnen
- Unterschied zwischen Punkt und Vektor verstehen
- Vektor aus zwei Punkten bestimmen ($B - A$)

**Kleine Themen (Sub-Goals):**
- [HOCH] Punkt = Ort mit Koordinaten; Vektor = Verschiebung mit Richtung und Länge
- [HOCH] Vektor von $A$ nach $B$: $\vec{AB} = B - A$ (komponentenweise Subtraktion)
- [MITTEL] Freier Vektor: gleicher Richtung und Länge → gleicher Vektor, egal wo eingezeichnet

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 7 mit 4-Block-Erklärung

##### Vektoren — Grundbegriffe `vek-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Vektor vs. Skalar sicher unterscheiden
- Betrag eines Vektors berechnen
- Vektoraddition und Skalarmultiplikation komponentenweise durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] Betrag $|\vec{v}|=\sqrt{v_x^2+v_y^2+v_z^2}$
- [HOCH] Vektoraddition komponentenweise
- [MITTEL] Einheitsvektor $\vec{e}=\vec{v}/|\vec{v}|$ bilden
- [NIEDRIG] Vektor vs. Skalar in technischen Größen erkennen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 1 mit 4-Block-Erklärung

##### Skalarprodukt `vek-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Skalarprodukt in Komponenten- und Winkelform berechnen
- Winkel zwischen Vektoren bestimmen
- Orthogonalität per Skalarprodukt erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Komponentenform $\vec{a}\cdot\vec{b}=\sum a_i b_i$
- [HOCH] Winkelform $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\alpha$
- [HOCH] Orthogonalitäts-Test über $\vec{a}\cdot\vec{b}=0$
- [MITTEL] Projektion eines Vektors auf einen anderen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Kreuzprodukt `vek-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Kreuzprodukt mit der Komponentenformel berechnen
- Normalvektor einer Ebene bestimmen
- Skalar- und Kreuzprodukt sicher unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Kreuzprodukt liefert *Vektor* senkrecht auf $\vec a$ und $\vec b$ — nicht Skalar wie das Skalarprodukt
- [HOCH] Betrag $|\vec a \times \vec b| = |\vec a| |\vec b| \sin\varphi$ = Flächeninhalt des Parallelogramms
- [HOCH] Richtung per Rechte-Hand-Regel; $\vec a \times \vec b = -\vec b \times \vec a$ (antikommutativ)
- [MITTEL] Nur in 3D definiert; Komponentenformel oder Sarrus-Merkschema mit Einheitsvektoren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kräfte als Vektoren (Prüfung) `vek-1-4` · 18 min

**Nach dieser Lesson kannst du:**
- Kräfte vektoriell addieren
- Gleichgewichtsbedingungen aufstellen
- Einheitsvektoren berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

#### Geraden und Ebenen im Raum

**Unit-Lernziele:**
- Geraden in Parameter- und Punkt-Richtungs-Form angeben und zwischen den Darstellungen wechseln
- Ebenen in Parameter-, Normal- und Koordinatenform umwandeln
- Abstände Punkt–Gerade, Punkt–Ebene und windschiefer Geraden mit Projektionsformeln berechnen
- Schnittgeraden und Schnittpunkte durch Lösen linearer Gleichungssysteme ermitteln

##### Geradengleichung `vek-2-1` · 15 min

**Nach dieser Lesson kannst du:**
- Parameterform einer Geraden aufstellen
- Punkte auf einer Geraden testen
- Lage zweier Geraden sicher klassifizieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Ebenengleichung `vek-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Parameter-, Normal- und Koordinatenform einer Ebene aufstellen
- Zwischen den Darstellungsformen umrechnen
- Normalvektor aus zwei Richtungsvektoren bestimmen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Abstände und Schnitte `vek-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Abstand Punkt–Ebene berechnen
- Abstand Punkt–Gerade berechnen
- Schnittpunkt Gerade–Ebene bestimmen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 3 mit 4-Block-Erklärung

##### Prüfungsaufgaben Analytische Geometrie `vek-2-4` · 25 min

**Nach dieser Lesson kannst du:**
- Lagebeziehungen sicher bestimmen
- Abstands- und Schnittaufgaben lösen
- Prüfungsniveau erreichen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsvorbereitung Vektoren

**Unit-Lernziele:**
- Flächen von Dreiecken/Parallelogrammen über $|\vec{a} \times \vec{b}|$ berechnen
- Volumen von Spaten über Spatprodukt $\det(\vec{a}, \vec{b}, \vec{c})$ bestimmen
- Mehrschritt-Prüfungsaufgaben mit Mix aus Geraden, Ebenen, Winkeln und Abständen lösen

##### Gemischte Aufgaben Skalar- und Kreuzprodukt `vek-3-1` · 20 min

**Nach dieser Lesson kannst du:**
- Skalar- und Kreuzprodukt sicher unterscheiden
- Winkel zwischen Vektoren bestimmen
- Rechenregeln (Kommutativität, Antikommutativität) sicher anwenden

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 2 mit 4-Block-Erklärung

##### Flächen- und Volumenberechnung `vek-3-2` · 15 min

**Nach dieser Lesson kannst du:**
- Parallelogrammfläche mit Kreuzprodukt berechnen
- Dreiecksfläche als halbes Kreuzprodukt
- Spatprodukt für Volumen anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `vek-3-3` · 18 min

**Nach dieser Lesson kannst du:**
- Drehmoment als Kreuzprodukt berechnen
- Kräftezerlegung an der schiefen Ebene
- Vektoren in technischen Aufgaben anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

<a id="ableitung"></a>
### Differentialrechnung `ableitung`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 183 gesamt · 113 manuell · 70 auto-supplemental · 57 mit 4-Block-Erklärung (31%)

**Topic-Lernziele (nach Abschluss):**
- Ableitung als lokale Änderungsrate und Tangentensteigung interpretieren
- Potenz-, Produkt-, Quotienten- und Kettenregel routiniert anwenden
- Ableitungen elementarer Funktionen (sin, cos, exp, ln) auswendig beherrschen
- Kurvendiskussion durchführen: Monotonie, Extremstellen, Wendepunkte, Krümmung
- Grenzwerte und Stetigkeit sauber prüfen und l’Hospital korrekt einsetzen

#### Grundlagen der Differentialrechnung

**Unit-Lernziele:**
- Ableitung als Grenzwert des Differenzenquotienten $\lim_{h\to 0} (f(x+h)-f(x))/h$ verstehen
- Geometrische Deutung: $f'(x_0)$ als Steigung der Tangente im Punkt $x_0$
- Potenzregel $\frac{d}{dx} x^n = n x^{n-1}$ sowie Ableitungen von $e^x$, $\ln x$, $\sin x$, $\cos x$ auswendig
- Summen-, Faktor-, Produkt-, Quotienten- und Kettenregel sicher auf Kombinationen anwenden

##### Was ist eine Ableitung? `abl-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Ableitung als Steigung der Tangente verstehen
- Differenzenquotient interpretieren
- Notwendige Bedingung für Extrema erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Differenzenquotient → Differentialquotient als Grenzübergang
- [HOCH] Tangentensteigung aus $f'(x_0)$ ablesen
- [HOCH] Notwendige Extremum-Bedingung $f'(x_0)=0$
- [MITTEL] Ableitung als Momentan-Änderungsrate physikalisch deuten

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Potenzregel und Summenregel `abl-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Polynome ableiten
- Potenzregel und Summenregel anwenden
- Wurzeln und Kehrwerte als Potenzen behandeln

**Kleine Themen (Sub-Goals):**
- [HOCH] Potenzregel $(x^n)'=nx^{n-1}$
- [HOCH] Summenregel $(f+g)'=f'+g'$
- [HOCH] Wurzeln und Kehrwerte als Potenzen $x^{1/2}, x^{-1}$ ableiten
- [MITTEL] Konstanten und Konstante Faktoren richtig behandeln

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 6 mit 4-Block-Erklärung

##### Ableitungen elementarer Funktionen `abl-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- sin, cos, $e^{x}$, ln ableiten
- Ableitungstabelle auswendig kennen
- Definitionsbereiche beachten

**Kleine Themen (Sub-Goals):**
- [HOCH] $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$ — Vorzeichen bei Kosinus nicht vergessen
- [HOCH] $(e^x)' = e^x$ (einzige Funktion mit $f' = f$) und $(\ln x)' = 1/x$
- [MITTEL] Allgemeine Exponential-/Logarithmusfunktion: $(a^x)' = a^x \ln a$, $(\log_a x)' = 1/(x \ln a)$
- [MITTEL] Definitionsbereich beachten: $\ln x$ nur für $x>0$, $\sqrt x$ für $x \ge 0$

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Kettenregel `abl-1-4` · 15 min

**Nach dieser Lesson kannst du:**
- Kettenregel verstehen und anwenden
- Verkettete Funktionen ableiten
- Rolle der inneren Ableitung verinnerlichen

**Kleine Themen (Sub-Goals):**
- [HOCH] Kettenregel: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — „äußere mal innere Ableitung"
- [HOCH] Äußere Funktion identifizieren (die, die man zuletzt ausführt) und separat ableiten
- [HOCH] Standardfälle: $(e^{u(x)})' = e^{u(x)} \cdot u'(x)$, $(\sin u)' = \cos u \cdot u'$, $(\ln u)' = u'/u$
- [MITTEL] Bei mehrfach verketteten Funktionen hierarchisch: erst äußerste Schale, dann nächst innere, etc.

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Extremwerte und Kurvendiskussion `abl-1-5` · 20 min

**Nach dieser Lesson kannst du:**
- Extrema mit Ableitungen bestimmen
- Wendepunkte identifizieren
- Kurvendiskussion durchführen
- Notwendige und hinreichende Bedingungen unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

#### Ableitungsregeln im Detail

**Unit-Lernziele:**
- Produktregel $(fg)' = f' g + f g'$ auch bei geschachtelten Produkten korrekt anwenden
- Quotientenregel $(f/g)' = (f' g - f g')/g^2$ — Minuszeichen und Reihenfolge niemals verwechseln
- Kettenregel „äußere mal innere Ableitung" bei mehrfach geschachtelten Funktionen systematisch durchführen
- Bei Mischungen aus Produkt, Quotient und Kette zuerst die äußerste Struktur identifizieren, dann hierarchisch ableiten

##### Produktregel `abl-2-1` · 15 min

**Nach dieser Lesson kannst du:**
- Produktregel verstehen und anwenden
- Produkte von Funktionen ableiten
- Fehler "$(fg)' = f'g'$" erkennen und vermeiden

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 6 mit 4-Block-Erklärung

##### Quotientenregel `abl-2-2` · 15 min

**Nach dieser Lesson kannst du:**
- Quotientenregel anwenden
- Brüche von Funktionen ableiten
- Verbindung zur Produktregel verstehen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Kettenregel — Schritt für Schritt `abl-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Kettenregel sicher anwenden
- Innere und äußere Funktion identifizieren
- Mehrfach verkettete Funktionen ableiten

*Aufgaben-Coverage:* 10 gesamt · 7 manuell / 3 auto-supp · 7 mit 4-Block-Erklärung

##### Gemischte Regeln `abl-2-4` · 18 min

**Nach dieser Lesson kannst du:**
- Alle Ableitungsregeln kombiniert anwenden
- Komplexere Funktionen sicher ableiten
- Struktur erkennen und richtige Regel zuerst wählen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 6 mit 4-Block-Erklärung

#### Kurvendiskussion

**Unit-Lernziele:**
- Monotonie über Vorzeichen der ersten Ableitung $f'(x)$ intervallweise bestimmen
- Kandidaten für Extrema aus $f'(x) = 0$ ermitteln und mit $f''(x)$ als Max/Min klassifizieren
- Wendepunkte über $f''(x) = 0$ mit Vorzeichenwechsel von $f''$ finden
- Vollständige Kurvendiskussion: Definitionsbereich, Symmetrie, Nullstellen, Asymptoten, Extrema, Wendepunkte — in korrekter Reihenfolge

##### Monotonie und Extremwerte `abl-3-1` · 18 min

**Nach dieser Lesson kannst du:**
- Monotonie mit f' bestimmen
- Lokale Extrema mit f' und f'' bestimmen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 0 mit 4-Block-Erklärung

##### Krümmung und Wendepunkte `abl-3-2` · 15 min

**Nach dieser Lesson kannst du:**
- Krümmungsverhalten mit f'' analysieren
- Wendepunkte berechnen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Vollständige Kurvendiskussion `abl-3-3` · 22 min

**Nach dieser Lesson kannst du:**
- Alle Schritte der Kurvendiskussion durchführen
- Systematisch vorgehen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfungsaufgaben Kurvendiskussion `abl-3-4` · 25 min

**Nach dieser Lesson kannst du:**
- Prüfungsniveau-Aufgaben lösen
- Alle Methoden sicher kombinieren

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 0 mit 4-Block-Erklärung

#### Grenzwerte und Stetigkeit

**Unit-Lernziele:**
- Grenzwerte rechnerisch durch Umformen, Faktorisieren und Kürzen ermitteln
- L'Hôpital bei unbestimmten Ausdrücken $0/0$ und $\infty/\infty$ anwenden
- Stetigkeit an einer Stelle prüfen: links-, rechts- und Funktionswert müssen übereinstimmen
- Unstetigkeitsstellen klassifizieren (hebbar / Sprung / Pol)

##### Grenzwerte von Funktionen `abl-5-1` · 14 min

**Nach dieser Lesson kannst du:**
- Grenzwert $\lim_{x \to a} f(x)$ intuitiv und formal verstehen
- Links- und rechtsseitigen Grenzwert unterscheiden
- Wichtige Grenzwerte berechnen: $\lim_{x \to 0} \frac{\sin x}{x}$, $\lim_{x \to 0} \frac{e^x - 1}{x}$
- Regel von L'Hôpital bei $0/0$- und $\infty/\infty$-Typen anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 4 mit 4-Block-Erklärung

##### Stetigkeit von Funktionen `abl-5-2` · 12 min

**Nach dieser Lesson kannst du:**
- Stetigkeit an einem Punkt und auf einem Intervall definieren
- Sprungstellen, hebbare Unstetigkeiten und Polstellen unterscheiden
- Zwischenwertsatz anwenden

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Extremwertaufgaben mit Nebenbedingung: Hauptbedingung aufstellen, Nebenbedingung einsetzen, ableiten und lösen
- Taylorpolynom bis zur benötigten Ordnung bilden und Restglied abschätzen
- Regel von de l'Hospital bei Grenzwerten der Form 0/0 oder ∞/∞ korrekt anwenden

##### Prüfung: Ableitungsregeln `abl-4-1` · 25 min

**Nach dieser Lesson kannst du:**
- Ketten-, Produkt- und Quotientenregel sicher anwenden
- Ableitungen trigonometrischer und Exponentialfunktionen berechnen
- Kombinierte Regeln auf Prüfungsniveau einsetzen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Kurvendiskussion & Anwendungen `abl-4-2` · 30 min

**Nach dieser Lesson kannst du:**
- Extrema und Wendepunkte auf Prüfungsniveau bestimmen
- Monotoniebereiche analysieren
- Optimierungsaufgaben lösen
- Taylor-Polynome aufstellen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Technische Optimierung & Newton-Verfahren `abl-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Komplexe technische Optimierungsaufgaben strukturiert lösen
- Geometrische, physikalische und elektrotechnische Optima ermitteln
- Newton-Verfahren zur numerischen Nullstellensuche anwenden
- Globale vs. lokale Extrema unter Randwertbedingungen erkennen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

<a id="integralrechnung"></a>
### Integralrechnung `integralrechnung`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 163 gesamt · 94 manuell · 69 auto-supplemental · 51 mit 4-Block-Erklärung (31%)

**Topic-Lernziele (nach Abschluss):**
- Stammfunktionen elementarer Funktionen ohne Tabelle hinschreiben
- Hauptsatz der Differential- und Integralrechnung sicher anwenden
- Substitution und partielle Integration gezielt auswählen
- Bestimmte Integrale als Flächen, Volumina und physikalische Gesamtgrößen interpretieren
- Uneigentliche Integrale auf Konvergenz prüfen

#### Stammfunktionen & Grundintegrale

**Unit-Lernziele:**
- Stammfunktion als Umkehrung der Ableitung verstehen: $F'(x) = f(x)$
- Grundintegrale (Potenz, $e^x$, $1/x$, $\sin x$, $\cos x$) sicher aus dem Kopf abrufen
- Linearitäts- und Faktorregel des Integrals sinnvoll einsetzen
- Hauptsatz der Differential- und Integralrechnung $\int_a^b f(x)dx = F(b) - F(a)$ korrekt anwenden
- Integrationskonstante $C$ bei unbestimmten Integralen niemals vergessen

##### Stammfunktion — das Umkehren der Ableitung `int-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Stammfunktion als Umkehrung der Ableitung verstehen
- Integrationskonstante C erklären können

**Kleine Themen (Sub-Goals):**
- [HOCH] Stammfunktion durch „Rückwärts-Ableiten" erkennen
- [HOCH] Integrationskonstante $+C$ nicht vergessen
- [MITTEL] Probe durch Ableiten der gefundenen Stammfunktion

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

##### Grundintegrale `int-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Grundintegrale auswendig kennen
- Potenzregel für Integration anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Potenzregel $\int x^n dx = x^{n+1}/(n+1)+C$ für $n\neq-1$
- [HOCH] Sonderfall $\int \frac{1}{x}dx = \ln|x|+C$
- [HOCH] Stammfunktionen von $e^x$, $\sin x$, $\cos x$ auswendig
- [MITTEL] Summen- und Faktorregel beim Integrieren

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 4 mit 4-Block-Erklärung

##### Summenregel & Faktorregel `int-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Summenregel für Integration anwenden
- Konstantenfaktor vor das Integral ziehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Summenregel: $\int (f + g) dx = \int f\,dx + \int g\,dx$ — gliedweise integrieren
- [HOCH] Faktorregel: $\int c f(x) dx = c \int f(x) dx$ — Konstante vors Integral ziehen
- [HOCH] Für Produkt $f(x) \cdot g(x)$ gilt KEIN analoges Produktrecht — dort partielle Integration nötig
- [MITTEL] Integrationskonstante $C$ bei unbestimmten Integralen konsequent mitschreiben

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

##### Das bestimmte Integral `int-1-4` · 18 min

**Nach dieser Lesson kannst du:**
- Bestimmtes Integral berechnen
- Geometrische Deutung als Fläche verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Hauptsatz: $\int_a^b f(x) dx = F(b) - F(a)$ mit beliebiger Stammfunktion $F$
- [HOCH] Geometrisch: Fläche *zwischen* Kurve und x-Achse — unterhalb wird NEGATIV gezählt
- [MITTEL] Vertauschen der Grenzen dreht das Vorzeichen: $\int_a^b = -\int_b^a$
- [MITTEL] Bei bestimmtem Integral fällt die Integrationskonstante $C$ weg (kürzt sich raus)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 3 mit 4-Block-Erklärung

##### Hauptsatz der Differential- und Integralrechnung `int-1-5` · 14 min

**Nach dieser Lesson kannst du:**
- Hauptsatz der Analysis formulieren können
- Zusammenhang Ableitung ↔ Integral verstehen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 3 mit 4-Block-Erklärung

#### Integrationstechniken

**Unit-Lernziele:**
- Substitutionsregel — innere Funktion $u = g(x)$ identifizieren und $du = g'(x) dx$ ersetzen
- Partielle Integration $\int u'v = uv - \int u v'$ — strategisch $u'$ und $v$ wählen (Merkhilfe: LIATE)
- Partialbruchzerlegung bei rationalen Funktionen: echte Brüche auftrennen, einfache Stammfunktionen integrieren
- Bei geschachtelten Integralen die passende Technik in 1–2 Sekunden erkennen

##### Substitution `int-2-1` · 18 min

**Nach dieser Lesson kannst du:**
- Substitutionsmethode verstehen und anwenden
- Geeignete Substitution wählen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Partielle Integration `int-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Partielle Integration anwenden
- LIATE-Regel für die Wahl von u kennen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Partialbruchzerlegung `int-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Gebrochen-rationale Funktionen integrieren
- Partialbruchzerlegung aufstellen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 4 mit 4-Block-Erklärung

##### Gemischte Übungen `int-2-4` · 20 min

**Nach dieser Lesson kannst du:**
- Integrationstechnik selbständig erkennen und anwenden
- Prüfungsaufgaben lösen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 6 mit 4-Block-Erklärung

#### Anwendungen

**Unit-Lernziele:**
- Fläche zwischen zwei Kurven als $\int_a^b (f(x) - g(x)) dx$ mit sauberer Vorzeichenführung
- Rotationskörper-Volumen um x-Achse: $V = \pi \int_a^b f(x)^2 dx$
- Bogenlänge und Mantelfläche über passende Integralformeln berechnen
- Technische Anwendungen: Arbeit $W = \int F(s) ds$, Schwerpunkt, Trägheitsmoment

##### Flächenberechnung `int-3-1` · 18 min

**Nach dieser Lesson kannst du:**
- Fläche unter einer Kurve berechnen
- Fläche zwischen zwei Kurven berechnen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Rotationskörper `int-3-2` · 16 min

**Nach dieser Lesson kannst du:**
- Volumen von Rotationskörpern berechnen
- Scheibenmethode anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

##### Technische Anwendungen `int-3-3` · 16 min

**Nach dieser Lesson kannst du:**
- Arbeit mit Integralen berechnen
- Schwerpunkt einer Fläche bestimmen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 3 mit 4-Block-Erklärung

##### Bogenlänge & Durchschnittswert `int-3-4` · 14 min

**Nach dieser Lesson kannst du:**
- Bogenlänge $L = \int \sqrt{1 + (f')^{2}}\,dx$ kennen und anwenden
- Durchschnittswert $\bar{f} = \tfrac{1}{b-a}\int f\,dx$ berechnen
- Geometrische Deutung beider Konzepte verstehen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 4 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Uneigentliche Integrale (unendliche Grenze oder Pol) als Grenzwert sauber berechnen
- Kombination aus Substitution und partieller Integration bei komplexen Aufgaben wählen
- Technische Prüfungsaufgaben (Arbeit, Volumen, Schwerpunkt) mit vollständigem Lösungsweg

##### Prüfung: Integrationstechniken `int-4-1` · 25 min

**Nach dieser Lesson kannst du:**
- Substitution, partielle Integration und Partialbrüche auf Prüfungsniveau anwenden
- Bestimmte Integrale sicher berechnen
- Die geeignete Integrationsmethode erkennen und einsetzen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Anwendungen der Integralrechnung `int-4-2` · 25 min

**Nach dieser Lesson kannst du:**
- Flächen zwischen Kurven und Rotationsvolumina berechnen
- Schwerpunkte und technische Kenngrößen mit Integralen bestimmen
- Technische Anwendungen (Arbeit, Trägheitsmoment, Bogenlänge) lösen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Uneigentliche & numerische Integrale `int-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Uneigentliche Integrale erkennen und auf Konvergenz prüfen
- p-Integrale als Vergleichsmaßstab nutzen
- Numerische Integration (Trapez, Simpson) anwenden und Fehler abschätzen
- Komplexe Integrale durch Methodenmix lösen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

<a id="technische-mechanik"></a>
### Technische Mechanik `technische-mechanik`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 160 gesamt · 59 manuell · 101 auto-supplemental · 38 mit 4-Block-Erklärung (24%)

**Topic-Lernziele (nach Abschluss):**
- SI-Einheiten und Präfixe sicher umrechnen und dimensional prüfen
- Freikörperbilder mit allen äußeren Kräften und Lagerreaktionen zeichnen
- Gleichgewichtsbedingungen $\Sigma F=0$ und $\Sigma M=0$ in 2D konsequent anwenden
- Kraftzerlegung, Reibung und Schwerpunkt bei ebenen Systemen berechnen
- Newtonsche Grundgleichung für einfache dynamische Systeme einsetzen

#### Einheiten & Dimensionsanalyse (Einstieg)

##### SI-Basiseinheiten & Präfixe `mech-0-1` · 12 min

**Nach dieser Lesson kannst du:**
- Die sieben SI-Basiseinheiten kennen
- Dezimale Vorsätze (nano, milli, kilo, mega, giga) anwenden
- Einheiten in wissenschaftlicher Notation schreiben

**Kleine Themen (Sub-Goals):**
- [HOCH] SI-Präfixe giga, mega, kilo, milli, mikro, nano zuordnen
- [MITTEL] Kilogramm als einzige SI-Basiseinheit mit Präfix
- [HOCH] Wissenschaftliche Notation $a \cdot 10^n$ sicher schreiben

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 7 mit 4-Block-Erklärung

##### Abgeleitete Einheiten (N, J, Pa, W) `mech-0-2` · 12 min

**Nach dieser Lesson kannst du:**
- Die wichtigsten abgeleiteten Einheiten benennen
- Formeln mit Einheiten korrekt rechnen
- SI-zusammengesetzte Einheiten sicher umrechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Newton $1\,\text{N} = 1\,\text{kg}\cdot\text{m}/\text{s}^2$ zerlegen
- [HOCH] $1\,\text{MPa} = 1\,\text{N}/\text{mm}^2$ (Ingenieur-Konvention)
- [MITTEL] bar $\leftrightarrow$ Pa: $1\,\text{bar}=10^5\,\text{Pa}$
- [HOCH] Dimensionsanalyse als Kontrollschritt

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 7 mit 4-Block-Erklärung

##### Dimensionsanalyse — Einheitencheck `mech-0-3` · 12 min

**Nach dieser Lesson kannst du:**
- Einheiten in einer Formel prüfen
- Plausibilität eines Rechenergebnisses über Einheiten kontrollieren
- Formeln aus Dimensions-Überlegungen aufstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Dimensionskonsistenz: links und rechts des Gleichheitszeichens müssen dieselben Einheiten stehen
- [HOCH] Basis-SI-Einheiten (m, kg, s, A, K, mol, cd) — alle anderen Einheiten daraus aufgebaut
- [MITTEL] Einheit Pascal: $1\,\text{Pa} = 1\,\text{N/m}^2 = 1\,\text{kg}/(\text{m}\cdot\text{s}^2)$
- [HOCH] Umrechnungen (mm → m, MPa → Pa, kN → N) vor dem Einsetzen in Formeln — NIE im Kopf in gemischten Einheiten rechnen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 6 mit 4-Block-Erklärung

#### Statik

##### Kräfte und Freikörperbild `mech-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kräfte als Vektoren darstellen
- Freikörperbilder systematisch aufbauen

**Kleine Themen (Sub-Goals):**
- [HOCH] Freikörperbild: Körper isolieren, alle äußeren Kräfte (inkl. Gewicht, Lagerreaktionen) eintragen
- [HOCH] Kraft = Vektor: Betrag + Richtung — Pfeile in positives Koordinatensystem, Vorzeichen ergibt sich aus Rechnung
- [HOCH] Standard-Lagersymbole: Festlager (2 Reaktionen), Loslager (1 Reaktion), Einspannung (2 Kräfte + 1 Moment)
- [HOCH] Gleichgewicht in 2D: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$ → max. 3 Unbekannte statisch bestimmbar

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Momente und Hebelarm `mech-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Moment als Kraft mal Hebelarm berechnen
- Drehsinn korrekt berücksichtigen

**Kleine Themen (Sub-Goals):**
- [HOCH] Moment $M = F \cdot l_\perp$ — $l_\perp$ ist der SENKRECHTE Abstand vom Bezugspunkt zur Wirkungslinie
- [HOCH] Drehsinn-Konvention: gegen Uhrzeiger positiv (rechte Hand / Rechte-Hand-Regel in 3D)
- [HOCH] Bezugspunkt frei wählbar — klug wählen: Punkt mit vielen unbekannten Kräften eliminiert diese
- [MITTEL] Kreuzprodukt-Variante: $\vec M = \vec r \times \vec F$ in 3D oder bei schiefen Kräften

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Schnittkräfte N(x), Q(x), M(x) `mech-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Schnittkräfte und Schnittmomente am Balken berechnen
- Querkraft- und Biegemomentverlauf skizzieren
- Die gefährliche Stelle (max. Biegemoment) identifizieren

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Reibung `mech-1-4` · 14 min

**Nach dieser Lesson kannst du:**
- Haft- und Gleitreibung unterscheiden
- Reibkraft mit Coulombschem Gesetz berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Schwerpunkt `mech-1-5` · 14 min

**Nach dieser Lesson kannst du:**
- Schwerpunkt zusammengesetzter Flächen berechnen
- Flächenschwerpunkt als Summenregel anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Dynamik

##### Newtonsche Gesetze `mech-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- F = m·a anwenden
- Masse und Gewichtskraft unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Arbeit und Energie `mech-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Mechanische Arbeit berechnen
- Energieerhaltung erkennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kinematik `mech-2-3` · 14 min

**Nach dieser Lesson kannst du:**
- Geradlinige Bewegung mit Formeln beschreiben
- Zusammenhang zwischen s, v, a und t herstellen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Schwingungen `mech-2-4` · 16 min

**Nach dieser Lesson kannst du:**
- Eigenfrequenz eines Feder-Masse-Systems berechnen
- Resonanzbedingung erkennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Dynamik starrer Körper `mech-2-5` · 16 min

**Nach dieser Lesson kannst du:**
- Massenträgheitsmoment interpretieren
- Drallsatz M = J·α anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Statik: Prüfungsaufgaben `mech-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Komplexe Gleichgewichtsaufgaben lösen
- Mehrere Kräfte und Momente kombinieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Dynamik: Prüfungsaufgaben `mech-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Newton-Aufgaben mit Reibung lösen
- Energieerhaltung anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Reibung, Kinematik & Schwingungen `mech-3-3` · 22 min

**Nach dieser Lesson kannst du:**
- Reibungs- und Kinematikaufgaben kombinieren
- Schwingungsparameter aus Systemdaten ableiten

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

<a id="werkstoffkunde"></a>
### Werkstoffkunde `werkstoffkunde`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 60 gesamt · 8 manuell · 52 auto-supplemental · 28 mit 4-Block-Erklärung (47%)

**Topic-Lernziele (nach Abschluss):**
- Spannungs-Dehnungs-Diagramm aus dem Zugversuch lesen und $R_e$, $R_m$, $E$, Bruchdehnung $A$ sauber benennen
- Elastischen, plastischen und Einschnürbereich unterscheiden — inkl. Unterschied Streckgrenze $R_e$ vs. 0,2-%-Dehngrenze $R_{p0,2}$
- Härteprüfung (Brinell, Vickers, Rockwell) nach Indenter, Einheit und Anwendungsfeld auseinanderhalten
- Kerbschlagzähigkeit und Übergangstemperatur von zäh auf spröde in Tieftemperatur-Kurven deuten
- Werkstoffgruppen (Eisen-/Nichteisenmetalle, Kunststoffe, Keramik, Verbunde) nach $E$, $\rho$, Temperatur- und Korrosionsverhalten vergleichen
- Spezifische Kennwerte $E/\rho$ und $R_m/\rho$ für Leichtbau-Auswahlentscheidungen interpretieren

#### Werkstoffkennwerte

##### Spannungs-Dehnungs-Diagramm `werk-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Streckgrenze $R_e$, Zugfestigkeit $R_m$, Bruchdehnung $A$ ablesen
- Elastisch vs. plastisch unterscheiden
- Elastizitätsmodul $E$ als Steigung im Hookeschen Bereich erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] $R_e$ = Streckgrenze (Ende elastisch); $R_m$ = Zugfestigkeit (Maximum); nicht verwechseln
- [HOCH] $R_{p0,2}$ = 0,2-%-Dehngrenze bei Werkstoffen ohne ausgeprägte Streckgrenze (z. B. Aluminium)
- [HOCH] E-Modul = Steigung im linearen (Hookeschen) Bereich: $E = \sigma/\varepsilon$
- [MITTEL] Bruchdehnung $A$ in %: $(l_u - l_0)/l_0 \cdot 100$ — zäh vs. spröde
- [MITTEL] Sicherheit $S = R_m/\sigma_\text{zul}$ bzw. $R_e/\sigma_\text{zul}$ — wo welcher Kennwert?

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

##### Werkstoffgruppen `werk-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Stahl, Aluminium, Kunststoff und Keramik qualitativ vergleichen
- Anwendungsgebiete aus Werkstoffeigenschaften ableiten

**Kleine Themen (Sub-Goals):**
- [HOCH] Metalle: zäh, gut umformbar, gut wärmeleitend — tragende Konstruktionen
- [HOCH] Keramik: hart, hitzebeständig, spröde — **nicht auf Zug** belasten
- [MITTEL] Kunststoffe: leicht, korrosionsfest, niedriger E-Modul — Gehäuse, Gleitlager
- [MITTEL] Verbunde (CFK, GFK): hohe spezifische Steifigkeit $E/\rho$ — Leichtbau
- [MITTEL] Spezifische Steifigkeit $E/\rho$ als Leichtbau-Kennzahl (Titan, CFK, Alu > Stahl)

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

#### Prüfverfahren

##### Härteprüfung (HV, HB, HRC) `werk-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Prinzip der Härteprüfung verstehen
- Vickers, Brinell, Rockwell unterscheiden
- Härte mit Festigkeit korrelieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Vickers (HV): Diamantpyramide, universell für hart und dünn; Brinell (HB): Kugel, für weichere Werkstoffe
- [HOCH] Rockwell (HRC): direkt ablesbar am Messgerät — schnellste Prüfmethode in der Fertigung
- [MITTEL] Faustformel Stahl: $R_m \approx 3{,}5 \cdot HV$ in MPa — Härte korreliert mit Zugfestigkeit
- [MITTEL] Prüfkraft und Probendicke müssen zusammen passen, sonst verfälscht Untergrund das Ergebnis

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 5 mit 4-Block-Erklärung

##### Kerbschlagbiegeversuch `werk-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Sprödbruch-Risiko erkennen
- Übergangstemperatur zwischen zähem und sprödem Verhalten verstehen
- Kerbschlagarbeit $KV$ als Kennwert interpretieren

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 5 mit 4-Block-Erklärung

##### Fe-C-Diagramm & Wärmebehandlung `werk-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Die wichtigsten Gefüge des Fe-C-Systems (Ferrit, Austenit, Perlit, Martensit) unterscheiden
- Den eutektischen Punkt und den für die Härtbarkeit nutzbaren C-Bereich kennen
- Glühen, Härten und Vergüten als typische Wärmebehandlungen einordnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfung

##### Prüfung: Werkstoffwahl & Kennwerte `werk-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Aus Anforderungen (Last, Temperatur, Umgebung) Werkstoffgruppe wählen
- Kennwerte aus Zugversuch korrekt interpretieren
- Zulässige Spannung mit Sicherheitszahl berechnen

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

<a id="elektrotechnik"></a>
### Elektrotechnik `elektrotechnik`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 80 gesamt · 25 manuell · 55 auto-supplemental · 6 mit 4-Block-Erklärung (8%)

**Topic-Lernziele (nach Abschluss):**
- Ohm-Gesetz $U = R\,I$ und Leistung $P = U\,I = I^2 R = U^2/R$ sicher ineinander umformen
- Kirchhoffsche Knoten- und Maschenregel strukturiert auf Netzwerke mit mehreren Schleifen anwenden
- Reihen- und Parallelschaltung von Widerständen zu Ersatzwiderständen zusammenfassen
- Effektivwert $U_\text{eff} = \hat U/\sqrt 2$, Scheitelwert, Frequenz und Kreisfrequenz $\omega = 2\pi f$ in Wechselstromaufgaben identifizieren
- Impedanzen $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/(j\omega C)$ komplex addieren und als Zeiger darstellen
- Wirk-, Blind- und Scheinleistung sowie Leistungsfaktor $\cos\varphi$ interpretieren und berechnen

#### Gleichstromkreise

##### Ohmsches Gesetz und Grundbegriffe `et-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Das Ohmsche Gesetz $U = R \cdot I$ anwenden
- Reihen- und Parallelschaltungen berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ohmsches Gesetz $U = R \cdot I$ — Dreieck-Merkhilfe: eine Größe abdecken, die anderen beiden ergeben sie
- [HOCH] Einheiten-Konsistenz: V, A, $\Omega$ — mA und k$\Omega$ immer vor der Rechnung umrechnen
- [HOCH] Reihenschaltung: Widerstände addieren sich, Strom ist überall gleich
- [HOCH] Parallelschaltung: Kehrwerte addieren ($1/R_{ges} = \sum 1/R_i$), Spannung überall gleich
- [MITTEL] Spezialfall zwei Parallelwiderstände: $R_{ges} = R_1 R_2 / (R_1 + R_2)$ (Produkt-durch-Summe)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kirchhoffsche Gesetze `et-1-2` · 13 min

**Nach dieser Lesson kannst du:**
- Den Knotensatz (KCL) anwenden: $\sum I = 0$
- Den Maschensatz (KVL) anwenden: $\sum U = 0$

**Kleine Themen (Sub-Goals):**
- [HOCH] Knotensatz (KCL): An jedem Knoten ist die Summe zu- und abfließender Ströme null — Folge der Ladungserhaltung
- [HOCH] Maschensatz (KVL): In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle null — Folge der Energieerhaltung
- [HOCH] Vorzeichenkonvention: Umlaufrichtung festlegen; in Umlaufrichtung Spannungsquelle positiv, Widerstand-Abfall negativ (oder konsistent umgekehrt)
- [MITTEL] Spannungsteiler: $U_2 = U \cdot R_2 / (R_1 + R_2)$ — direkter Spezialfall des Maschensatzes bei Reihenschaltung

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Elektrische Leistung und Wirkungsgrad `et-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Elektrische Leistung mit $P = U \cdot I$ berechnen
- Wirkungsgrad $\eta = P_\text{ab}/P_\text{zu}$ anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Wechselstrom

##### Wechselstromgrundlagen und Impedanz `et-2-1` · 14 min

**Nach dieser Lesson kannst du:**
- Wechselspannung und Kreisfrequenz $\omega = 2\pi f$ verstehen
- Impedanzen $Z_R$, $Z_C$, $Z_L$ berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### RC- und RL-Schaltungen `et-2-2` · 14 min

**Nach dieser Lesson kannst du:**
- Grenzfrequenz eines RC-Tiefpasses berechnen
- Impedanz einer RL-Schaltung bestimmen
- Leistungsfaktor $\cos\varphi$ verstehen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Drehstrom & 3-Phasensystem `et-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Stern- (Y) und Dreieckschaltung ($\Delta$) unterscheiden
- Verkettete Spannung $U_{LL} = \sqrt{3} \cdot U_{LN}$ anwenden
- Wirkleistung im Drehstromsystem berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Gleichstrom Prüfungsaufgaben `et-3-1` · 20 min

**Nach dieser Lesson kannst du:**
- Kirchhoffsche Gesetze in komplexen Schaltungen anwenden
- Spannungsteiler und Stromteiler berechnen
- Elektrische Energie und Leistung klausurfertig lösen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Wechselstrom Prüfungsaufgaben `et-3-2` · 20 min

**Nach dieser Lesson kannst du:**
- Resonanzfrequenz eines RLC-Kreises berechnen
- Leistungsfaktor und Wirkleistung bestimmen
- Tiefpass-Übertragungsverhalten klausurfertig beherrschen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

<a id="python-matlab"></a>
### Python & Matlab `python-matlab`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 130 gesamt · 46 manuell · 84 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

**Topic-Lernziele (nach Abschluss):**
- Python- und Matlab-Syntax parallel lesen (Indentation vs. end-Blöcke, 0- vs. 1-basiertes Indexing)
- Variablen, Listen/Arrays und Dicts/Structs situationsgerecht einsetzen und Elementzugriff korrekt schreiben
- Kontrollstrukturen (if/else, for, while) und Funktionen/Unterprogramme in beiden Sprachen formulieren
- NumPy- bzw. Matlab-Vektor-/Matrix-Operationen anstelle expliziter Schleifen verwenden (Vektorisierung)
- Lineare Gleichungssysteme $A x = b$ mit `numpy.linalg.solve` bzw. `A\\b` lösen und Dimensionen prüfen
- Plots (matplotlib.pyplot bzw. plot) mit Achsenbeschriftung, Legende und mehreren Kurven erstellen
- Typische Fehler (Indexing-off-by-one, Broadcasting, Float-Vergleich mit `==`) erkennen und vermeiden

#### Python Grundlagen

##### Variablen & Datentypen `py-1-1` · 10 min

**Nach dieser Lesson kannst du:**
- Variablen zuweisen und benennen
- int, float, string und bool unterscheiden
- Typumwandlungen durchführen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Operatoren & Ausdrücke `py-1-2` · 10 min

**Nach dieser Lesson kannst du:**
- Arithmetische Operatoren anwenden
- Ganzzahldivision und Modulo verstehen
- Vergleichs- und logische Operatoren verwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Listen & Arrays `py-1-3` · 10 min

**Nach dieser Lesson kannst du:**
- Python-Listen erstellen und manipulieren
- Slicing und Indizierung verstehen
- NumPy Arrays für Berechnungen nutzen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kontrollstrukturen `py-1-4` · 10 min

**Nach dieser Lesson kannst du:**
- if/elif/else Verzweigungen schreiben
- for- und while-Schleifen anwenden
- Unterschiede zwischen Python und Matlab kennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Funktionen definieren `py-1-5` · 10 min

**Nach dieser Lesson kannst du:**
- Eigene Funktionen schreiben
- Parameter und Rückgabewerte verstehen
- Lambda-Ausdrücke kennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Numerisches Rechnen

##### NumPy Grundlagen `py-2-1` · 10 min

**Nach dieser Lesson kannst du:**
- NumPy importieren und Arrays erzeugen
- Elementweise Operationen durchführen
- Matrizen erstellen und multiplizieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Matplotlib — Daten visualisieren `py-2-2` · 10 min

**Nach dieser Lesson kannst du:**
- Linien- und Scatterplots erstellen
- Achsen beschriften und formatieren
- Mehrere Kurven in einem Plot darstellen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Gleichungen lösen & Optimierung `py-2-3` · 10 min

**Nach dieser Lesson kannst du:**
- Nullstellen mit fsolve finden
- Lineare Gleichungssysteme lösen
- Minima/Maxima numerisch finden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Numerische Integration & DGL `py-2-4` · 10 min

**Nach dieser Lesson kannst du:**
- Integrale numerisch berechnen
- Gewöhnliche DGL mit solve_ivp lösen
- Ergebnisse plotten und interpretieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### MB-Anwendungen

##### Festigkeitsberechnung `py-3-1` · 10 min

**Nach dieser Lesson kannst du:**
- Spannungsberechnung programmieren
- Querschnittswerte automatisiert berechnen
- Ergebnisse grafisch darstellen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Datenauswertung & Messdaten `py-3-2` · 10 min

**Nach dieser Lesson kannst du:**
- CSV-Dateien einlesen
- Statistische Auswertung durchführen
- Messdaten fitten und interpolieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Simulation: Feder-Masse-Dämpfer `py-3-3` · 10 min

**Nach dieser Lesson kannst du:**
- Schwingungssystem modellieren
- Parametervariation durchführen
- Resonanz erkennen und visualisieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Prüfung: Code-Verständnis & Fehlersuche `py-4-1` · 10 min

**Nach dieser Lesson kannst du:**
- Typische Prüfungsfragen zur Programmierung lösen
- Code lesen und Ausgaben vorhersagen
- Fehler in Code finden

*Aufgaben-Coverage:* 10 gesamt · 10 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

## Phase 2 — Semester 2

*Aufbau auf Semester 1: erweiterte Mathematik, Festigkeitslehre, Thermodynamik 1, Maschinenelemente 1.*

<a id="lineare-algebra"></a>
### Lineare Algebra `lineare-algebra`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 123 gesamt · 75 manuell · 48 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

**Topic-Lernziele (nach Abschluss):**
- Matrizen addieren, multiplizieren und transponieren, ohne Dimensionsregeln zu vergessen
- Determinanten bis 3×3 per Sarrus, höher per Laplace-Entwicklung oder Zeilenumformung berechnen
- Lineare Gleichungssysteme mit Gauß-Jordan in Normalform bringen und Lösungstyp (eindeutig/frei/keine) erkennen
- Invertierbarkeit prüfen und $A^{-1}$ über das erweiterte Schema $[A\,|\,I] \to [I\,|\,A^{-1}]$ bestimmen
- Eigenwerte und Eigenvektoren aus $\det(A - \lambda I) = 0$ ableiten und geometrisch als Streckachsen deuten
- Rang einer Matrix bestimmen und daraus die Dimension von Kern und Bild folgern

#### Matrizen & Determinanten

**Unit-Lernziele:**
- Matrizen addieren, mit Skalaren multiplizieren und Produkt $A \cdot B$ bilden (Dimensions-Check $m \times n$ mal $n \times p$)
- Transponierte $A^T$ und (falls existent) Inverse $A^{-1}$ für $2 \times 2$-Matrizen direkt berechnen
- Determinanten mit Sarrus-Regel (3×3) und Entwicklungssatz nach Zeile/Spalte bestimmen
- Eigenwerte aus $\det(A - \lambda I) = 0$ und zugehörige Eigenvektoren aus $(A - \lambda I)\vec{v} = 0$ finden

##### Was ist eine Matrix? `la-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Matrizen als Zahlentabellen verstehen
- Dimension und Notation kennen
- Spezialmatrizen erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Dimension $m \times n$ als „Zeilen $\times$ Spalten" lesen (Reihenfolge nicht tauschen)
- [HOCH] Element $a_{ij}$: erster Index = Zeile, zweiter = Spalte
- [MITTEL] Einheitsmatrix, Nullmatrix, Diagonalmatrix, quadratische Matrix auf einen Blick unterscheiden
- [MITTEL] Transponierte $A^T$: Zeilen werden Spalten — praktisch für Dimensionscheck

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Matrizenrechnung `la-1-2` · 20 min

**Nach dieser Lesson kannst du:**
- Matrizen addieren und skalar multiplizieren
- Matrizenmultiplikation beherrschen
- Nicht-Kommutativität verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Addition nur bei identischer Dimension — elementweise
- [HOCH] Matrizenmultiplikation: „Zeile mal Spalte" — Innen-Dimensionen müssen passen ($m\!\times\!k$ · $k\!\times\!n$)
- [HOCH] $A\,B \neq B\,A$ im Allgemeinen — Reihenfolge wichtig
- [MITTEL] Rechenregeln: $(A\,B)^T = B^T A^T$ (Reihenfolge dreht sich um)

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 0 mit 4-Block-Erklärung

##### Transponierte und Inverse `la-1-3` · 18 min

**Nach dieser Lesson kannst du:**
- Transponierte einer Matrix berechnen
- Inverse einer 2x2-Matrix berechnen
- Zusammenhang zwischen Invertierbarkeit und Determinante verstehen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Determinanten `la-1-4` · 20 min

**Nach dieser Lesson kannst du:**
- 2x2- und 3x3-Determinanten berechnen
- Regel von Sarrus anwenden
- Geometrische Bedeutung der Determinante verstehen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Eigenwerte und Eigenvektoren `la-1-5` · 20 min

**Nach dieser Lesson kannst du:**
- Eigenwertgleichung verstehen
- Charakteristisches Polynom aufstellen
- Eigenwerte für 2x2-Matrizen berechnen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

#### Lineare Gleichungssysteme

**Unit-Lernziele:**
- LGS als erweiterte Matrix $(A | \vec{b})$ darstellen und mit Gauß-Eliminination in Stufenform bringen
- Lösbarkeit am Rang entscheiden: $\text{rg}(A) = \text{rg}(A|\vec{b})$ = # Unbekannte $\Rightarrow$ eindeutig
- Unterbestimmte Systeme parametrisieren und Lösungsraum als Vektoren angeben
- Cramersche Regel $x_i = \det(A_i)/\det(A)$ bei kleinen quadratischen Systemen anwenden

##### LGS in Matrixform `la-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- LGS in Matrixform $A\vec{x} = \vec{b}$ schreiben
- Erweiterte Koeffizientenmatrix aufstellen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Gauss-Algorithmus `la-2-2` · 25 min

**Nach dieser Lesson kannst du:**
- Die drei erlaubten Zeilenumformungen kennen
- Ein LGS in Stufenform bringen
- Rücksubstitution durchführen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Lösbarkeit von LGS `la-2-3` · 18 min

**Nach dieser Lesson kannst du:**
- Die drei Fälle der Lösbarkeit unterscheiden
- Rang einer Matrix bestimmen
- Kronecker-Capelli-Theorem anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Cramersche Regel & Anwendungen `la-2-4` · 18 min

**Nach dieser Lesson kannst du:**
- Cramersche Regel für 2x2- und 3x3-Systeme anwenden
- Technische Probleme als LGS formulieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Gemischte Prüfungsaufgaben mit Matrixoperationen, Determinanten und Eigenwertproblemen lösen
- Lineare Abbildungen: Matrix aus Bildvektoren der Basis aufstellen und Kern/Bild bestimmen
- Lösbarkeits-Diskussionen mit Parameter in Koeffizienten oder rechter Seite durchführen

##### Prüfung: Matrizen & Determinanten `la-3-1` · 25 min

**Nach dieser Lesson kannst du:**
- Matrizenoperationen auf Prüfungsniveau beherrschen
- Determinanten berechnen (2×2 und 3×3, Laplace-Entwicklung)
- Inverse Matrizen berechnen und interpretieren
- Rang einer Matrix bestimmen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: LGS & Eigenwerte `la-3-2` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungssysteme mit Gauss-Algorithmus lösen
- Lösbarkeit und Lösungstypen anhand des Ranges beurteilen
- Eigenwerte und Eigenvektoren berechnen
- Eigenschaften von Eigenwerten interpretieren

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Diagonalisierung & technische Anwendungen `la-3-3` · 30 min

**Nach dieser Lesson kannst du:**
- Matrizen diagonalisieren $A = P D P^{-1}$
- Eigenwerte für technische Probleme interpretieren (Trägheitstensor, Schwingungen, Stabilität)
- Defekte Matrizen erkennen
- Spektralsatz auf symmetrische Matrizen anwenden

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

<a id="differentialgleichungen"></a>
### Differentialgleichungen `differentialgleichungen`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 103 gesamt · 61 manuell · 42 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

**Topic-Lernziele (nach Abschluss):**
- Ordnung, Linearität und Homogenität einer DGL auf einen Blick klassifizieren
- DGL vom Typ separierbarer Variablen sauber trennen, integrieren und Anfangswerte einsetzen
- Lineare DGL 1. Ordnung $y' + p(x)\,y = q(x)$ per Variation der Konstanten oder integrierendem Faktor lösen
- Homogene lineare DGL 2. Ordnung mit konstanten Koeffizienten über die charakteristische Gleichung lösen (3 Fälle)
- Inhomogene lineare DGL 2. Ordnung per Ansatzmethode (Exponential-, Polynom-, Resonanzansatz) behandeln
- Schwingungs-DGL $m\,\ddot x + d\,\dot x + c\,x = F(t)$ physikalisch in Eigenfrequenz, Dämpfung und Resonanz einordnen

#### Grundbegriffe & einfache DGL

**Unit-Lernziele:**
- Ordnung und Typ einer DGL (explizit, implizit, linear/nichtlinear, homogen/inhomogen) bestimmen
- Trennung der Variablen bei DGL der Form $y' = f(x) g(y)$ korrekt anwenden
- Allgemeine und spezielle Lösung unterscheiden — Anfangswertproblem mit $y(x_0) = y_0$ fixiert die Konstante
- Richtungsfeld als visuelle Vorschau der Lösungsscharen interpretieren

##### Was ist eine Differentialgleichung? `dgl-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- DGL als Gleichung mit Funktion und Ableitungen verstehen
- Ordnung und Linearität bestimmen
- Anfangswertproblem verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ordnung = höchste vorkommende Ableitung ($y$, $y'$, $y''$ … )
- [HOCH] Linear ⇔ $y$ und alle Ableitungen nur in 1. Potenz, keine Produkte $y \cdot y'$
- [HOCH] Homogen ⇔ rechte Seite = 0; sonst inhomogen (wichtig für Ansatzwahl)
- [MITTEL] Anfangswertproblem = DGL + Anfangsbedingung → eindeutige Lösung
- [NIEDRIG] Gewöhnlich (ODE) vs. partiell (PDE): genau eine unabhängige Variable

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Trennung der Variablen `dgl-1-2` · 18 min

**Nach dieser Lesson kannst du:**
- Methode der Variablentrennung anwenden
- Einfache DGL 1. Ordnung lösen
- Anfangswerte einsetzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Anwendbarkeit erkennen: $y' = f(x)\,g(y)$ — Produkt aus $x$- und $y$-Anteil
- [HOCH] $dy/dx$-Schreibweise: $\tfrac{dy}{g(y)} = f(x)\,dx$ sauber trennen
- [HOCH] Beide Seiten integrieren, Integrationskonstante $C$ nur einmal ansetzen
- [HOCH] Anfangsbedingung $y(x_0) = y_0$ zum Bestimmen von $C$ einsetzen — vor dem Umformen nach $y$
- [MITTEL] Betragsstriche bei $\int 1/y\,dy = \ln|y|$ nicht vergessen und Fallunterscheidung prüfen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Lineare DGL 1. Ordnung `dgl-1-3` · 20 min

**Nach dieser Lesson kannst du:**
- Lineare DGL 1. Ordnung in Standardform bringen
- Integrierenden Faktor berechnen
- Homogene + partikuläre Lösung bestimmen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### DGL 2. Ordnung mit konstanten Koeffizienten `dgl-1-4` · 22 min

**Nach dieser Lesson kannst du:**
- Charakteristische Gleichung aufstellen und lösen
- Drei Fälle unterscheiden: reelle, doppelte, komplexe Wurzeln
- Schwingungsverhalten aus der Lösung ablesen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

#### Fortgeschrittene Methoden

**Unit-Lernziele:**
- Variation der Konstanten: inhomogene lineare DGL $y' + p(x)y = q(x)$ aus homogener Lösung aufbauen
- Charakteristisches Polynom lösen und je nach Diskriminanten-Fall (reell/doppelt/komplex) Lösungstypen wählen
- Erzwungene Schwingung mit Ansatz-Methode (Inhomogenität vom Typ Polynom, Exponential, Sinus/Kosinus)
- Technische Anwendungen: RC-/RL-Glied, Masse-Feder-Dämpfer, exponentielles Wachstum/Zerfall

##### Variation der Konstanten `dgl-2-1` · 18 min

**Nach dieser Lesson kannst du:**
- Methode der Variation der Konstanten verstehen
- Partikuläre Lösung für inhomogene DGL bestimmen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### DGL-Systeme `dgl-2-2` · 15 min

**Nach dieser Lesson kannst du:**
- DGL-Systeme in Matrixform schreiben
- DGL höherer Ordnung als System umschreiben

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `dgl-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Feder-Masse-Dämpfer-System modellieren
- RC-Glied als DGL beschreiben
- Eigenfrequenz berechnen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Gemischte Prüfungsaufgaben mit Anfangswertbedingungen und physikalischer Interpretation
- Resonanzfall und Schwebung bei harmonischen Schwingungen sauber erkennen und lösen
- Systeme linearer DGL mit Matrix-Exponential oder Eigenwert-Methode lösen

##### Prüfung: DGL 1. Ordnung `dgl-3-1` · 25 min

**Nach dieser Lesson kannst du:**
- Trennbare DGL sicher lösen
- Lineare DGL 1. Ordnung mit integrierendem Faktor behandeln
- Anfangswertprobleme vollständig lösen
- Exakte DGL erkennen und die Potentialfunktion bestimmen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: DGL 2. Ordnung & Anwendungen `dgl-3-2` · 25 min

**Nach dieser Lesson kannst du:**
- Charakteristische Gleichung aufstellen und lösen
- Allgemeine Lösung für alle Wurzeltypen angeben
- Partikuläre Lösung durch Ansatz vom Typ der rechten Seite bestimmen
- Schwingungsverhalten eines Feder-Masse-Systems analysieren

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Systeme & technische Modellbildung `dgl-3-3` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare DGL-Systeme analysieren (Eigenwerte, Stabilität)
- Reale technische Systeme als DGL formulieren (Wärme, Strömung, Elektrik)
- Numerische Lösung mit Euler-Verfahren durchführen
- Stationäre Lösungen aus Bilanzgleichungen ermitteln

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

<a id="komplexe-zahlen"></a>
### Komplexe Zahlen `komplexe-zahlen`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 90 gesamt · 81 manuell · 9 auto-supplemental · 9 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Realteil, Imaginärteil, Betrag und Konjugierte einer komplexen Zahl zuverlässig bestimmen
- Komplexe Zahlen in der Gaußschen Ebene zeichnen und zwischen kartesischer, Polar- und Exponentialform umrechnen
- Multiplikation und Division in Polarform per Beträgen und Argumenten durchführen — nicht per Komponenten
- Mit der Euler-Formel $e^{i\varphi} = \cos\varphi + i\sin\varphi$ sicher Potenzen und Wurzeln per Moivre ziehen
- Komplexe Wurzeln als gleichmäßig verteilte Punkte auf dem Kreis $r^{1/n}$ interpretieren (n Lösungen je Gleichung)
- Komplexe Zahlen als Werkzeug für Schwingungs-DGL, Zeigerdarstellung im Wechselstrom und Resonanzphänomene einsetzen

#### Kartesische Form

**Unit-Lernziele:**
- Komplexe Zahl $z = a + bi$ mit $i^2 = -1$ in Real- und Imaginärteil zerlegen
- Addition, Subtraktion, Multiplikation und Division komplexer Zahlen in kartesischer Form beherrschen
- Konjugiert Komplexes $\bar z = a - bi$ für Division durch Erweiterung mit $\bar z$ einsetzen
- Betrag $|z| = \sqrt{a^2 + b^2}$ als Abstand vom Ursprung in der Gauß-Ebene interpretieren

##### Imaginäre Einheit & Gaußsche Zahlenebene `komz-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- i² = −1 als definierende Eigenschaft verstehen
- Komplexe Zahlen als Punkte in der Gaußschen Ebene darstellen
- Real- und Imaginärteil ablesen

**Kleine Themen (Sub-Goals):**
- [HOCH] $i^2 = -1$ als Definition — $i$ ist keine Variable, sondern fixes Symbol
- [HOCH] $\operatorname{Re}(z)$ und $\operatorname{Im}(z)$: beide reell (der Imaginärteil ist **nicht** $bi$, sondern $b$)
- [HOCH] Konjugierte $\bar z = a - bi$: Spiegelung an reeller Achse
- [MITTEL] Reelle Zahl ⇔ $\operatorname{Im}(z) = 0$; rein imaginär ⇔ $\operatorname{Re}(z) = 0$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Rechnen in kartesischer Form (+, −, ·, :) `komz-1-2` · 18 min

**Nach dieser Lesson kannst du:**
- Komplexe Zahlen addieren und subtrahieren
- Multiplikation mit i² = −1 anwenden
- Division via Erweitern mit dem konjugierten Nenner

**Kleine Themen (Sub-Goals):**
- [HOCH] Addition/Subtraktion komponentenweise — wie Vektoren
- [HOCH] Multiplikation: $(a+bi)(c+di)$ ausmultiplizieren und $i^2 = -1$ einsetzen
- [HOCH] Division: Zähler **und** Nenner mit $\bar{c+di} = c-di$ erweitern → Nenner reell $c^2 + d^2$
- [MITTEL] $z \cdot \bar z = |z|^2 = a^2 + b^2$ — immer reell und nicht-negativ

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### Polarform, Euler & Rechnen

**Unit-Lernziele:**
- Polarform $z = r(\cos\varphi + i\sin\varphi)$ aus kartesischer Form bestimmen — $r = |z|$, $\varphi = \arg z$
- Euler-Formel $e^{i\varphi} = \cos\varphi + i\sin\varphi$ und Exponentialform $z = r e^{i\varphi}$ verwenden
- Multiplikation in Polarform: Beträge multiplizieren, Winkel addieren — Division: dividieren/subtrahieren
- Quadranten-abhängige Argument-Bestimmung (arctan allein reicht nicht!) sicher durchführen

##### Betrag, Argument, Polarform `komz-2-1` · 18 min

**Nach dieser Lesson kannst du:**
- Betrag |z| als Abstand zum Ursprung berechnen
- Argument arg(z) als Winkel zur reellen Achse bestimmen
- Zwischen kartesisch und polar umrechnen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Euler-Formel & Exponentialdarstellung `komz-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Die Euler-Formel $e^{i\varphi} = \cos\varphi + i\sin\varphi$ kennen
- Komplexe Zahlen in der Form $z = |z| \cdot e^{i\varphi}$ schreiben
- Vorteile der Exponentialform für Multiplikation erkennen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### Potenzen & Wurzeln

**Unit-Lernziele:**
- Satz von Moivre: $z^n = r^n(\cos(n\varphi) + i\sin(n\varphi))$ für ganzzahlige Potenzen anwenden
- Alle $n$ komplexen $n$-ten Wurzeln einer komplexen Zahl berechnen ($n$ Lösungen auf einem Kreis)
- Einheitswurzeln $z_k = e^{i \cdot 2\pi k / n}$ als regelmäßiges $n$-Eck auf dem Einheitskreis erkennen
- Polynome mit komplexen Koeffizienten mittels Fundamentalsatz der Algebra vollständig in Linearfaktoren zerlegen

##### Potenzen — Formel von de Moivre `komz-3-1` · 18 min

**Nach dieser Lesson kannst du:**
- Potenzen komplexer Zahlen mit der Moivreschen Formel berechnen
- Argumentvervielfachung verstehen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Wurzeln — alle n-ten Wurzeln finden `komz-3-2` · 18 min

**Nach dieser Lesson kannst du:**
- Alle $n$ verschiedenen $n$-ten Wurzeln einer komplexen Zahl bestimmen
- Einheitswurzeln auf einem Kreis visualisieren

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

**Unit-Lernziele:**
- Gemischte Prüfungsaufgaben mit Konvertierungen zwischen kartesisch/polar/exponentiell
- Komplexe Schwingungsbeschreibung und Anwendung in E-Technik (Zeigerdiagramme, Impedanz)
- Gleichungen der Form $z^n = w$ systematisch lösen und Lösungen in der Gauß-Ebene einzeichnen

##### Prüfung: Anwendungen & Gesamtaufgaben `komz-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Komplexe Rechnung auf Prüfungsniveau kombinieren
- Form je nach Operation geschickt wählen
- Anwendung in Schwingungen und Impedanz verstehen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Polarform & Multiplikation `komz-pruefung-2` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Komplexe Zahlen in Polarform umrechnen
- [PRÜFUNG] Multiplikation und Division in Exponentialform
- [PRÜFUNG] Argument im Hauptwert angeben

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Wurzeln & Gleichungen `komz-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Alle n-ten Wurzeln einer komplexen Zahl berechnen
- [PRÜFUNG] Komplexe Gleichungen (z.B. $z^n = a$) lösen
- [PRÜFUNG] Impedanz-Berechnungen in der Elektrotechnik

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

<a id="reihen-folgen"></a>
### Reihen & Folgen `reihen-folgen`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Folgen auf Konvergenz prüfen und den Grenzwert per Grenzwertsätzen oder Einschnürung bestimmen
- Geometrische und harmonische Reihe als Referenzfälle auswendig kennen und vergleichend einsetzen
- Konvergenzkriterien (Quotienten-, Wurzel-, Leibniz-, Majoranten-/Minoranten-Kriterium) situationsgerecht auswählen
- Potenzreihen $\sum a_n (x-x_0)^n$ aufstellen und den Konvergenzradius $R = 1/\limsup\sqrt[n]{|a_n|}$ bestimmen
- Taylor- und Maclaurin-Reihen elementarer Funktionen ($e^x$, $\sin$, $\cos$, $\ln(1+x)$) hinschreiben und zum Approximieren verwenden
- Restglieder nach Lagrange abschätzen und die Approximationsqualität für Ingenieuranwendungen bewerten

#### Folgen, Reihen & Konvergenz

**Unit-Lernziele:**
- Folgen als Abbildungen $\mathbb{N} \to \mathbb{R}$ verstehen und ihren Grenzwert bestimmen
- Konvergenz/Divergenz einer Reihe $\sum a_n$ prüfen — notwendiges Kriterium: $a_n \to 0$
- Geometrische Reihe $\sum q^n = 1/(1-q)$ für $|q|<1$ als Referenzfall sicher beherrschen
- Quotienten-, Wurzel-, Leibniz- und Majoranten-Kriterium gezielt auswählen
- Taylor-Polynome bis gewünschter Ordnung bilden und Restglied qualitativ abschätzen

##### Folgen und Grenzwerte `rf-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Folgen als Funktionen $\mathbb{N} \to \mathbb{R}$ verstehen
- Konvergenz und Grenzwert definieren
- Monotonie und Beschränktheit prüfen

**Kleine Themen (Sub-Goals):**
- [HOCH] Grenzwert $\lim_{n\to\infty} a_n$ anschaulich als „bleibt schließlich in jedem $\varepsilon$-Schlauch" begreifen
- [HOCH] Rationale Folgen: Grad-Vergleich (Zähler/Nenner) entscheidet über $0$, endlicher Grenzwert oder $\pm\infty$
- [HOCH] Grenzwertsätze: Summe, Produkt, Quotient (sofern Nennergrenzwert $\neq 0$)
- [MITTEL] Monoton + beschränkt $\Rightarrow$ konvergent (ohne Grenzwert ausrechnen zu müssen)
- [HOCH] Nullfolgen: $1/n$, $1/n^k$, $q^n$ mit $|q|<1$ — als Bausteine auswendig

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Taylor-Polynome `rf-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Taylor-Polynom vom Grad $n$ um einen Entwicklungspunkt $x_0$ aufstellen
- Taylorentwicklung für $e^x$, $\sin x$, $\cos x$ kennen
- Restglied nach Lagrange abschätzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Taylor-Formel $T_n(x) = \sum_{k=0}^n f^{(k)}(x_0)/k! \cdot (x-x_0)^k$
- [HOCH] Maclaurin-Reihen auswendig: $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $1/(1-x)$
- [MITTEL] Lagrange-Restglied $R_n = f^{(n+1)}(\xi)/(n+1)! \cdot (x-x_0)^{n+1}$ zum Fehler abschätzen
- [MITTEL] Gerade Funktionen (cos) haben nur gerade Potenzen; ungerade (sin) nur ungerade

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

**Unit-Lernziele:**
- Konvergenzradius von Potenzreihen $\sum a_n (x-x_0)^n$ mit Cauchy-Hadamard oder Quotientenkriterium bestimmen
- Taylor-Restglied mit Lagrange-Formel abschätzen, um numerische Näherungen zu rechtfertigen
- Potenzreihen gliedweise ableiten/integrieren und den Konvergenzradius kontrollieren

##### Prüfung: Taylor, Konvergenz, Restglied `rf-pruefung-1` · 20 min

**Nach dieser Lesson kannst du:**
- Konvergenz mit passenden Kriterien prüfen
- Taylorentwicklung einer Funktion aufstellen
- Restglied abschätzen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Konvergenzkriterien & Potenzreihen `rf-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Quotientenkriterium anwenden
- [PRÜFUNG] Konvergenzradius einer Potenzreihe berechnen
- [PRÜFUNG] Majoranten- und Minorantenkriterium kennen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Taylor-Restglied & Näherungen `rf-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Restglied nach Lagrange abschätzen
- [PRÜFUNG] Taylor-Näherung für Berechnungen nutzen
- [PRÜFUNG] Fehler einer Taylor-Näherung nach oben abschätzen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

<a id="festigkeitslehre"></a>
### Festigkeitslehre `festigkeitslehre`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 110 gesamt · 35 manuell · 75 auto-supplemental · 20 mit 4-Block-Erklärung (18%)

**Topic-Lernziele (nach Abschluss):**
- Normal- und Schubspannung $\sigma = F/A$, $\tau = F/A$ aus Schnittkräften korrekt ableiten
- Hooke-Gesetz $\sigma = E\,\varepsilon$ samt Querkontraktion und thermischer Dehnung anwenden
- Schnittgrößenverläufe $N(x)$, $Q(x)$, $M(x)$ für Balken mit Einzel- und Streckenlasten zeichnen
- Biegespannung $\sigma_b = M_b / W$ an Querschnitten bestimmen und kritische Fasern erkennen
- Zulässige Spannung via Sicherheitsbeiwert $\nu = R_e / \sigma_{\text{zul}}$ nachweisen
- Spannungsspitzen an Kerben, Bohrungen und Absätzen über Kerbfaktor $\alpha_k$ qualitativ einordnen

#### Spannung und Dehnung

##### Normalspannung `fest-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Spannung als Kraft pro Fläche verstehen
- Einheiten korrekt umrechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] $\sigma = F/A$ — Kraft normal zur Fläche, Einheit $\mathrm{N/mm^2 = MPa}$
- [HOCH] 1 MPa = 1 N/mm² = $10^6$ Pa: Einheiten-Umrechnung ohne Rechenfehler
- [MITTEL] Zug vs. Druck: Vorzeichenkonvention (+Zug, −Druck) klar halten
- [HOCH] Querschnittsfläche: bei Kreis $A = \pi d^2/4$, nicht $\pi d^2$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Hookesches Gesetz `fest-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Linearen elastischen Bereich erkennen
- E-Modul interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] $\sigma = E\,\varepsilon$ im linear-elastischen Bereich — nur hier gilt Hooke
- [HOCH] Dehnung $\varepsilon = \Delta l / l_0$ dimensionslos; oft in ‰ oder %
- [HOCH] E-Modul ist **Material-Konstante**, unabhängig von Geometrie (Stahl $\approx 210\,\mathrm{GPa}$)
- [MITTEL] Querkontraktion $\varepsilon_q = -\nu\,\varepsilon$ mit Poisson-Zahl $\nu \approx 0{,}3$ (Stahl)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Schubspannung und Torsion `fest-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Torsionswiderstandsmoment berechnen
- Maximale Schubspannung einer Welle bestimmen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Knicken `fest-1-4` · 12 min

**Nach dieser Lesson kannst du:**
- Eulersche Knicklast berechnen
- Einspannbeiwert β anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Biegung und Torsion

##### Biegespannung `fest-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Biegemoment und Widerstandsmoment verbinden
- Kritische Randfaser erkennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Sicherheitszahl `fest-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Zulässige Spannung berechnen
- Nachweis gegen Versagen formulieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Mohr'scher Spannungskreis `fest-2-3` · 12 min

**Nach dieser Lesson kannst du:**
- Mittelpunkt und Radius des Mohr-Kreises berechnen
- Hauptspannungen aus dem Mohr-Kreis ablesen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Wechselfestigkeit und Betriebsfestigkeit `fest-2-4` · 12 min

**Nach dieser Lesson kannst du:**
- Mittel- und Ausschlagspannung berechnen
- Goodman-Nachweis anwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Kerbspannungen & Formzahl `fest-2-5` · 14 min

**Nach dieser Lesson kannst du:**
- Formzahl $\alpha_K$ als Verhältnis $\sigma_\text{max}/\sigma_\text{nenn}$ verstehen
- Typische Kerben (Bohrung, Absatz, Gewindegrund) einordnen
- Einfluss von Kerbwirkung auf die Dauerfestigkeit einschätzen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Festigkeit: Prüfungsaufgaben `fest-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kombinierte Beanspruchung berechnen
- Sicherheitsnachweis durchführen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Torsion, Knicken & Wechselfestigkeit `fest-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Torsions- und Knickberechnung kombinieren
- Goodman-Nachweis mit Sicherheit durchführen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

<a id="thermodynamik"></a>
### Thermodynamik `thermodynamik`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 80 gesamt · 26 manuell · 54 auto-supplemental · 8 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Zustandsgrößen $p$, $V$, $T$, $m$ klar von Prozessgrößen $Q$, $W$ unterscheiden — Einheiten konsistent halten
- Ideale Gasgleichung $p\,V = m\,R_s\,T$ sicher nach jeder Größe auflösen; $R_s$ aus molarer Masse bestimmen
- Isochor, isobar, isotherm und adiabat per pV- und Ts-Diagramm qualitativ skizzieren und rechnerisch behandeln
- 1. Hauptsatz $dU = \delta Q - \delta W$ in passender Vorzeichenkonvention (System-/Umgebungssicht) schreiben
- 2. Hauptsatz: Carnot-Wirkungsgrad $\eta_C = 1 - T_\text{k}/T_\text{w}$ als obere Schranke aller Wärmekraftmaschinen begreifen
- Einfache Kreisprozesse (Otto, Diesel, Carnot) im pV-Diagramm durchrechnen und Wirkungsgrad interpretieren

#### Zustandsgrößen

##### Ideales Gas `thermo-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- pV = nRT anwenden
- Temperatur in Kelvin verwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] $pV = nRT$ mit $R = 8{,}314\,\mathrm{J/(mol\,K)}$; alternativ $p V = m R_s T$ mit spez. Gaskonstante
- [HOCH] Temperatur **immer** in Kelvin: $T[K] = T[°C] + 273{,}15$
- [HOCH] Einheiten: $p$ in Pa, $V$ in m³, $n$ in mol — keine Liter/bar in die Grundformel
- [MITTEL] $R_s = R/M$ aus molarer Masse $M$ des Gases (Luft: $M \approx 28{,}96\,\mathrm{g/mol}$)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Druck und Arbeit `thermo-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Volumenänderungsarbeit interpretieren
- p-V-Diagramme lesen

**Kleine Themen (Sub-Goals):**
- [HOCH] Volumenarbeit $W = \int p\,dV$ = Fläche unter der Kurve im pV-Diagramm
- [HOCH] Isobar ($p$ const): $W = p \cdot \Delta V$ — direktes Rechteck
- [HOCH] Isotherm ($T$ const): $W = nRT \ln(V_2/V_1)$ — Vorzeichen beachten
- [MITTEL] Vorzeichenkonvention: $W > 0$ = vom System **abgegeben**; umgekehrt in mancher Literatur

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Hauptsätze

##### Erster Hauptsatz `thermo-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Energiebilanz aufstellen
- Wärme und Arbeit vorzeichenbewusst verwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Wirkungsgrad `thermo-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Wirkungsgrad berechnen
- Verluste interpretieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kreisprozesse `thermo-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Carnot-Wirkungsgrad berechnen
- Otto-Wirkungsgrad aus Verdichtungsverhältnis bestimmen
- Kreisprozesse als thermodynamische Grundlage verstehen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Wärmeübertragung `thermo-2-4` · 15 min

**Nach dieser Lesson kannst du:**
- Wärmeleitung nach Fourier berechnen
- k-Wert einer mehrlagigen Wand bestimmen
- Wärmeübergang und Wärmedurchgang unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Thermo: Prüfungsaufgaben `thermo-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Zustandsänderungen berechnen
- Kreisprozesse analysieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Kreisprozesse & Wärmeübertragung `thermo-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Carnot- und Otto-Wirkungsgrad berechnen
- Wärmebilanz eines Kraftwerks aufstellen
- Wärmeleitung und k-Wert kombiniert anwenden

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

<a id="maschinenelemente"></a>
### Maschinenelemente `maschinenelemente`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 80 gesamt · 26 manuell · 54 auto-supplemental · 8 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Schraubenverbindungen auf Zug-, Scher- und Flächenpressungslast auslegen (Vorspannkraft, Betriebskraft)
- Welle-Nabe-Verbindungen (Passfeder, Keilwelle, Presssitz) anhand Momenten- und Flächenpressungs-Kriterium auswählen
- Wellen auf Biegung, Torsion und kombinierte Belastung mit Vergleichsspannung nach GEH auslegen
- Wälz- und Gleitlager nach Tragzahl $C$ und modifizierter Lebensdauer $L_{10} = (C/P)^p \cdot 10^6$ dimensionieren
- Stirnrad-Getriebe mit Übersetzung $i = z_2/z_1$ und Modul $m = d/z$ rechnen; Verluste pro Stufe einschätzen
- Passungen (Spiel, Übergang, Übermaß) nach ISO-Tabellensystem lesen und konstruktiv begründen

#### Verbindungen

##### Schraubenverbindungen `melem-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kraftfluss in Schraubenverbindungen verstehen
- Vorspannung einordnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Vorspannkraft $F_V$ erzeugt Klemmkraft in der Fuge — verhindert Fugenöffnen
- [HOCH] Kraftverteilung: nur ein Bruchteil der Betriebskraft fließt durch die Schraube ($\phi$-Faktor)
- [MITTEL] Festigkeitsklassen 8.8, 10.9, 12.9: erste Zahl ≈ $R_m/100$ MPa, zweite ≈ $R_e/R_m$
- [MITTEL] Anziehdrehmoment $M_A$ aus Hersteller-Tabelle — nie größer als Streckgrenze der Schraube

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Passfedern und formschlüssige Verbindungen `melem-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Formschluss von Kraftschluss unterscheiden
- Drehmomentübertragung beschreiben

**Kleine Themen (Sub-Goals):**
- [HOCH] Formschluss: Geometrie überträgt Kraft (Passfeder, Zahn); Kraftschluss: Reibung überträgt Kraft (Presssitz, Kupplung)
- [HOCH] Drehmoment aus Umfangskraft: $M_t = F_u \cdot r$; Umfangskraft $F_u = 2 M_t / d$ an der Welle mit Durchmesser $d$
- [HOCH] Flächenpressung an der Passfeder: $p = F_u / (l \cdot h/2) \le p_{zul}$ — bestimmt die Passfeder-Länge $l$
- [MITTEL] Passfedern sind Normteile nach DIN 6885 — Form A (rund), Form B (gerade); Bezeichnung $b \times h \times l$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Schweißverbindungen `melem-1-3` · 12 min

**Nach dieser Lesson kannst du:**
- Schubspannung in Kehlnähten berechnen
- Verbindungsarten vergleichen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Wellen, Lager, Zahnräder

##### Wellen und Lager `melem-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Aufgaben von Wellen und Lagern unterscheiden
- Radial- und Axiallasten erkennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Zahnräder und Übersetzung `melem-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Übersetzungsverhältnis bestimmen
- Drehzahländerung qualitativ deuten

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Lagerlebensdauer `melem-2-3` · 14 min

**Nach dieser Lesson kannst du:**
- L10-Lebensdauer berechnen
- Dynamische Tragzahl C interpretieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### ME: Prüfungsaufgaben `melem-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Zahnradberechnungen durchführen
- Wellenauslegung verstehen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Schweißnähte, Lager & Lebensdauer `melem-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Schweißnahtspannungen berechnen
- Lagerlebensdauer bestimmen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

## Phase 3 — Vertiefung

*Spezialisierungs- und Vertiefungsfächer ab dem 3. Semester. Prüfungsrelevanz hängt von der gewählten Studienrichtung ab.*

<a id="mehrdim-analysis"></a>
### Mehrdim. Analysis `mehrdim-analysis`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Partielle Ableitungen $f_x$, $f_y$ fehlerfrei nach jeder Variable bilden, die anderen als Konstante behandeln
- Den Gradienten $\nabla f$ als Vektor des steilsten Anstiegs geometrisch und als Normale von Höhenlinien lesen
- Totale Ableitung und Tangentialebene $z = f(x_0, y_0) + \nabla f \cdot (x-x_0, y-y_0)^T$ formulieren
- Lokale Extrema über $\nabla f = 0$ und die Hesse-Matrix (Definitheit) klassifizieren — inkl. Sattelpunkt
- Extrema unter Nebenbedingungen mit Lagrange-Multiplikatoren ($\nabla f = \lambda\,\nabla g$) lösen
- Doppel- und Dreifachintegrale über rechteckige, polare und zylindrische Bereiche aufstellen und in Iterationen zerlegen

#### Partielle Ableitungen & Gradient

**Unit-Lernziele:**
- Partielle Ableitung $\partial f / \partial x$ als „andere Variablen konstant halten" mechanisch durchführen
- Gradient $\nabla f = (f_x, f_y, \ldots)^T$ als Richtung des stärksten Anstiegs interpretieren
- Richtungsableitung über $\nabla f \cdot \vec{e}$ (mit Einheitsvektor $\vec{e}$) berechnen
- Hesse-Matrix aufstellen und mit Definitheitskriterium Max/Min/Sattel klassifizieren
- Totales Differential $df = f_x dx + f_y dy$ für Fehlerfortpflanzung anwenden

##### Partielle Ableitung verstehen `mdim-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Funktionen mehrerer Variablen verstehen
- Partielle Ableitung ∂f/∂x, ∂f/∂y berechnen
- Gradient als Vektor interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Beim Ableiten nach einer Variable: alle anderen sind **Konstanten**
- [MITTEL] Schreibweisen $f_x$, $\partial f/\partial x$, $D_x f$ gleichwertig erkennen
- [HOCH] Gradient $\nabla f = (f_x, f_y)^T$ zeigt Richtung des steilsten Anstiegs
- [HOCH] Gradient $\perp$ Höhenlinie — Normale an Niveaumengen
- [MITTEL] Satz von Schwarz: $f_{xy} = f_{yx}$ (bei stetigen zweiten Ableitungen)

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Hesse-Matrix und Lagrange-Multiplikatoren `mdim-1-2` · 16 min

**Nach dieser Lesson kannst du:**
- Hesse-Matrix aufstellen und Extrema in 2D klassifizieren
- Lagrange-Multiplikatoren bei einer Nebenbedingung anwenden
- Sattel- von Extrempunkten unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Notwendige Bedingung für Extremum: $\nabla f = 0$ (kritischer Punkt)
- [HOCH] Hesse-Matrix $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$ — Symmetrie nutzen
- [HOCH] $\det H > 0 \wedge f_{xx} > 0$ → Minimum, $< 0 \wedge f_{xx} < 0$ → Maximum, $\det H < 0$ → Sattel
- [HOCH] Lagrange: $\nabla f = \lambda\,\nabla g$ bei Nebenbedingung $g(x,y) = 0$
- [MITTEL] Lagrange-System: $\nabla f - \lambda \nabla g = 0$ **und** $g = 0$ gemeinsam lösen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

**Unit-Lernziele:**
- Extrema unter Nebenbedingungen mit Lagrange-Multiplikator $\nabla f = \lambda \nabla g$ lösen
- Gauß'sche Fehlerfortpflanzung für unabhängige Messgrößen anwenden
- Prüfungsaufgaben mit Kombination aus partiellen Ableitungen, Gradient und Hesse-Matrix

##### Prüfung: Extrema, Fehlerfortpflanzung `mdim-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Extrema 2D über $\nabla f = 0$ + Hesse-Matrix klassifizieren
- Fehlerfortpflanzung mit totalem Differential rechnen
- Lagrange-Multiplikatoren bei Nebenbedingungen einsetzen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Fehlerfortpflanzung & totales Differential `mdim-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Totales Differential $df = f_x dx + f_y dy$ berechnen
- [PRÜFUNG] Maximale Fehlerabschätzung mit Teilfehlern
- [PRÜFUNG] Gauß'sche Fehlerfortpflanzung anwenden

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Lagrange & Gesamtaufgaben `mdim-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Lagrange-Multiplikatoren vollständig durchrechnen
- [PRÜFUNG] Typ des Extremums mit Hesse-Matrix bestimmen
- [PRÜFUNG] Gemischte Aufgaben aus partieller Ableitung, Extrema, Fehler

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

<a id="numerik"></a>
### Numerische Mathematik `numerik`

**Prüfungsrelevanz:** Wahl  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Nullstellen nichtlinearer Gleichungen per Bisektion robust eingrenzen und Iterationszahl abschätzen
- Newton-Verfahren mit $x_{n+1} = x_n - f(x_n)/f'(x_n)$ anwenden und Konvergenz (quadratisch, divergent) diagnostizieren
- Fixpunktiteration aufstellen und $|\varphi'(x^*)| < 1$ als Konvergenzbedingung prüfen
- Bestimmte Integrale über Trapezregel und Simpson-Regel approximieren und den Fehler $O(h^2)$ bzw. $O(h^4)$ einordnen
- Lineare Gleichungssysteme mit LR-Zerlegung und Pivotisierung stabil lösen
- Iterative Lösung von LGS (Jacobi, Gauß-Seidel) auf Konvergenzkriterien (diagonaldominant) prüfen

#### Nullstellen & Integration

**Unit-Lernziele:**
- Newton-Verfahren $x_{n+1} = x_n - f(x_n)/f'(x_n)$ per Hand für 2–3 Iterationen durchführen
- Bisektion mit Zwischenwertsatz als garantiert konvergentes, aber langsames Verfahren nutzen
- Numerische Integration mit Trapez- und Simpson-Regel auf gegebenen Stützstellen berechnen
- Fehlerordnung der Verfahren kennen: Trapez $O(h^2)$, Simpson $O(h^4)$
- Abbruchkriterien (Residuum, Schrittweite, max. Iterationen) korrekt wählen

##### Newton-Verfahren `num-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Newton-Iteration verstehen und anwenden
- Startwert und Konvergenz einschätzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Iterationsvorschrift $x_{n+1} = x_n - f(x_n)/f'(x_n)$ korrekt aufbauen
- [HOCH] Abbruchkriterium: $|x_{n+1} - x_n| < \varepsilon$ **oder** $|f(x_n)| < \delta$
- [MITTEL] Quadratische Konvergenz: Anzahl korrekter Stellen verdoppelt sich pro Schritt (bei guten Startwerten)
- [HOCH] Stolperfallen: $f'(x_n) = 0$ (Tangente horizontal), schlechter Startwert → Divergenz

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Bisektion und numerische Integration `num-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Bisektion als robuste Nullstellensuche durchführen
- Trapezregel und Simpson-Regel für bestimmte Integrale anwenden
- Fehlerordnung der Verfahren einordnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Bisektion benötigt Vorzeichenwechsel: $f(a)\cdot f(b) < 0$
- [HOCH] Fehler der Bisektion nach $n$ Schritten: $(b-a)/2^n$ → Schrittzahl auflösen
- [HOCH] Trapezregel: $\tfrac{h}{2}(f_0 + 2f_1 + \ldots + 2f_{n-1} + f_n)$; Fehler $O(h^2)$
- [HOCH] Simpson: nur bei **gerader** Teilintervallanzahl anwendbar; Fehler $O(h^4)$
- [MITTEL] Simpson ist exakt für Polynome bis Grad 3

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

**Unit-Lernziele:**
- Gemischte Aufgaben mit Kombination aus Nullstellen- und Integrationsverfahren bearbeiten
- Konvergenzordnung rechnerisch verifizieren (Fehlerhalbierung bei Schrittweitenhalbierung)
- Abbruchkriterien auf gegebene Toleranzen anwenden und Iterationen abzählen

##### Prüfung: Numerische Methoden kombiniert `num-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Verfahren dem Problem zuordnen (Newton, Trapez, Simpson, LGS)
- Konvergenzordnung und Fehlerabschätzung kennen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Trapez, Simpson & Fehlerordnung `num-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Trapezregel und Simpson-Regel mit mehreren Teilintervallen anwenden
- [PRÜFUNG] Fehlerordnung $\mathcal{O}(h^2)$ vs. $\mathcal{O}(h^4)$ vergleichen
- [PRÜFUNG] Anzahl der Teilintervalle für gegebene Genauigkeit bestimmen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Kombinierte Aufgaben & Abbruchkriterien `num-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Verfahren dem Problem zuordnen
- [PRÜFUNG] Abbruchkriterium korrekt anwenden
- [PRÜFUNG] Vor- und Nachteile der Verfahren benennen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

<a id="statistik"></a>
### Statistik & Wahrscheinlichkeit `statistik`

**Prüfungsrelevanz:** Wahl  
**Aufgaben:** 60 gesamt · 54 manuell · 6 auto-supplemental · 6 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Kombinatorische Grundformeln (Permutation, Kombination mit/ohne Wiederholung) zielgerichtet auswählen
- Laplace-Wahrscheinlichkeit, bedingte Wahrscheinlichkeit und Bayes-Formel in Textaufgaben sauber anwenden
- Erwartungswert $E[X]$ und Varianz $\operatorname{Var}(X)$ diskreter und stetiger Zufallsvariablen berechnen
- Binomialverteilung, Poisson-Verteilung und Normalverteilung situationsgerecht unterscheiden und Parameter interpretieren
- Die Standardnormalverteilung $\Phi(z)$ zum Bestimmen von Wahrscheinlichkeiten und Quantilen nutzen (z-Transformation)
- Stichprobenmittel, Stichprobenvarianz und Konfidenzintervalle bauen; einfachen Hypothesentest (z- oder t-Test) durchführen

#### Zufallsvariablen & Verteilungen

**Unit-Lernziele:**
- Diskrete und stetige Zufallsvariablen über Wahrscheinlichkeits- bzw. Dichtefunktion beschreiben
- Erwartungswert $E[X]$, Varianz $\text{Var}(X)$ und Standardabweichung $\sigma$ für Standardverteilungen berechnen
- Normalverteilung $N(\mu, \sigma^2)$ mit $z = (x-\mu)/\sigma$ standardisieren und Tabellenwerte ablesen
- Konfidenzintervall um $\bar x$ mit $\pm z_{\alpha/2} \cdot \sigma/\sqrt{n}$ konstruieren
- Hypothesentest mit $H_0$, $H_1$, Teststatistik, p-Wert/Signifikanzniveau $\alpha$ durchführen

##### Erwartungswert und Varianz `stat-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Erwartungswert und Varianz einer diskreten Zufallsvariablen berechnen
- Unterschied zwischen $\sigma^2$ und $\sigma$ kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Erwartungswert $E(X) = \sum_i x_i\,p_i$ bei diskreter $X$
- [HOCH] Verschiebungssatz: $\operatorname{Var}(X) = E(X^2) - E(X)^2$ (rechnerisch meist einfacher)
- [MITTEL] Einheiten: $E(X)$ wie $X$, $\operatorname{Var}(X)$ wie $X^2$, $\sigma$ wie $X$
- [HOCH] Linearität: $E(aX + b) = a\,E(X) + b$, $\operatorname{Var}(aX + b) = a^2\,\operatorname{Var}(X)$ (Konstante fällt weg)

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Normalverteilung `stat-1-2` · 13 min

**Nach dieser Lesson kannst du:**
- Normalverteilung $N(\mu, \sigma^2)$ parametrieren und interpretieren
- 68-95-99{,}7%-Regel anwenden
- Standardisierung $Z = (X-\mu)/\sigma$ durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] Parameter: $\mu$ verschiebt, $\sigma$ streckt die Glockenkurve
- [HOCH] z-Transformation $Z = (X-\mu)/\sigma$: jede Normalverteilung auf $N(0,1)$ zurückführen
- [HOCH] 68/95/99{,}7-Regel: $\pm1\sigma$, $\pm2\sigma$, $\pm3\sigma$-Intervalle als Schätzung auswendig
- [HOCH] $\Phi(z) = P(Z \le z)$: Tabelle nur für $z \ge 0$, für $z < 0$ Symmetrie $\Phi(-z) = 1 - \Phi(z)$ nutzen
- [HOCH] $P(a \le X \le b) = \Phi(\tfrac{b-\mu}{\sigma}) - \Phi(\tfrac{a-\mu}{\sigma})$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Hypothesentest und Konfidenzintervall `stat-1-3` · 15 min

**Nach dieser Lesson kannst du:**
- Nullhypothese $H_0$ und Alternativhypothese $H_1$ formulieren
- p-Wert interpretieren und mit Signifikanzniveau $\alpha$ vergleichen
- 95%-Konfidenzintervall für den Mittelwert berechnen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

**Unit-Lernziele:**
- Gemischte Prüfungsaufgaben mit Schätzung, Konfidenzintervall und Hypothesentest
- Normalverteilungs-Berechnungen mit Tabelle $\Phi(z)$ sicher durchführen
- Interpretation von p-Wert, Annahme-/Ablehnungsbereich und Fehlerarten 1./2. Art

##### Prüfung: Schätzung & Hypothesentest `stat-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Konfidenzintervall für Mittelwert angeben
- t-Test und $\chi^2$-Test unterscheiden
- p-Wert und Signifikanzniveau interpretieren

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Normalverteilung & Standardisierung `stat-pruefung-2` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Standardisierung $Z=(X-\mu)/\sigma$ durchführen
- [PRÜFUNG] Wahrscheinlichkeiten mit $\Phi$-Tabelle berechnen
- [PRÜFUNG] 68-95-99,7%-Regel anwenden

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Konfidenzintervall & Gesamtaufgaben `stat-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] 95%-Konfidenzintervall für Mittelwert berechnen
- [PRÜFUNG] Stichprobenmittel und -standardabweichung berechnen
- [PRÜFUNG] Stichprobenumfang für gewünschte Präzision bestimmen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

<a id="fourier-laplace"></a>
### Fourier & Laplace `fourier-laplace`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 70 gesamt · 56 manuell · 14 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

**Topic-Lernziele (nach Abschluss):**
- Periodische Signale als Fourier-Reihe $a_0/2 + \sum (a_n\cos + b_n\sin)$ darstellen und Koeffizienten per Integral bestimmen
- Symmetrie erkennen: gerade Funktion → nur Cosinus-Anteile, ungerade → nur Sinus — spart das halbe Rechenwerk
- Die komplexe Fourier-Form $\sum c_n e^{in\omega_0 t}$ aufstellen und Amplituden-/Phasenspektrum daraus ableiten
- Von der Fourier-Reihe zur Fourier-Transformation übergehen und Zeit-/Frequenzbereich deuten
- Laplace-Transformation $\mathcal{L}\{f(t)\} = F(s)$ aus Tabelle und Regeln (Linearität, Verschiebung, Ableitung) aufstellen
- Lineare DGL mit konstanten Koeffizienten per Laplace auf eine algebraische Gleichung in $s$ reduzieren und rücktransformieren

#### Fourier-Reihen

**Unit-Lernziele:**
- Periodische Funktion in Fourier-Reihe $a_0/2 + \sum (a_n \cos(n\omega t) + b_n \sin(n\omega t))$ entwickeln
- Koeffizienten $a_n, b_n$ über Integrale über eine Periode berechnen
- Symmetrien ausnutzen: gerade Funktionen $\Rightarrow b_n = 0$, ungerade $\Rightarrow a_n = 0$
- Komplexe Fourier-Reihe $\sum c_n e^{in\omega t}$ und Zusammenhang $c_n = (a_n - ib_n)/2$
- Fourier-Transformation als Verallgemeinerung auf nichtperiodische Signale einführen

##### Fourier-Reihen — Grundbegriffe `fl-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Periodische Funktionen als Überlagerung von Sinus/Kosinus erkennen
- Fourier-Koeffizienten berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] $T$-Periode und Grundfrequenz $\omega_0 = 2\pi/T$ korrekt identifizieren
- [HOCH] Formel: $a_0 = \tfrac{1}{T}\int_0^T f\,dt$ (DC-Anteil), $a_n$, $b_n$ mit Faktor $\tfrac{2}{T}$
- [HOCH] Gerade $f$ ($f(-t) = f(t)$) → nur $a_n$; ungerade → nur $b_n$ — halbiert den Aufwand
- [HOCH] Reihenansatz: $f(t) = a_0/2 + \sum_n (a_n\cos + b_n\sin)$ — Faktor $1/2$ vor $a_0$ nicht vergessen
- [MITTEL] Integration über eine volle Periode — Start- und Endpunkt frei wählbar (z. B. $-T/2$ bis $T/2$)

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Fourier-Reihe Rechteckimpuls `fl-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Fourier-Koeffizienten eines Rechtecksignals berechnen
- Gibbs-Phänomen kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ungerades Rechteck → nur $b_n$; nur **ungerade** $n$ liefern Beitrag ($b_n \propto 1/n$)
- [MITTEL] Gibbs-Überschwinger ca. 9 % an Sprungstellen — wird mit mehr Termen nicht kleiner, nur schmaler
- [NIEDRIG] Konvergenz in der Mitte der Sprungstelle zum Mittelwert der beiden Seiten
- [MITTEL] Amplitudenspektrum: $1/n$-Abfall → „langsame" Abnahme hoher Frequenzen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Fourier-Transformation `fl-1-3` · 16 min

**Nach dieser Lesson kannst du:**
- Von Fourier-Reihen zur Fourier-Transformation übergehen
- Spektrum nicht-periodischer Signale verstehen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

#### Laplace-Transformation

**Unit-Lernziele:**
- Laplace-Transformation $F(s) = \int_0^\infty f(t) e^{-st} dt$ als Werkzeug zur DGL-Lösung einsetzen
- Korrespondenztabelle nutzen: $e^{at} \leftrightarrow 1/(s-a)$, $\sin(\omega t) \leftrightarrow \omega/(s^2+\omega^2)$, etc.
- Ableitungsregel $\mathcal{L}\{f'\} = sF(s) - f(0)$ und Integrationsregel anwenden
- Rücktransformation mit Partialbruchzerlegung und Tabellenwerten durchführen
- Endwertsatz und Anfangswertsatz zur schnellen Überprüfung der Lösung nutzen

##### Laplace-Grundlagen `fl-2-1` · 15 min

**Nach dieser Lesson kannst du:**
- Laplace-Transformation definieren
- Einfache Transformationen aus der Tabelle ablesen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Laplace zur DGL-Lösung `fl-2-2` · 16 min

**Nach dieser Lesson kannst du:**
- DGL mit Laplace lösen (Transformieren, algebraisch umformen, rücktransformieren)
- Übertragungsfunktion $G(s)$ verstehen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Mehrstufige Prüfungsaufgaben mit Kombination aus Fourier-Zerlegung, Laplace und Rücktransformation
- Stabilität von LTI-Systemen über die Lage der Pole in der komplexen Ebene entscheiden
- Übertragungsfunktion $G(s)$ bilden, Antwort auf Sprung/Impuls berechnen und interpretieren

##### Fourier Prüfungsaufgaben `fl-3-1` · 22 min

**Nach dieser Lesson kannst du:**
- Fourier-Reihen und Spektrum in Prüfungsaufgaben anwenden

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Laplace Prüfungsaufgaben `fl-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Übertragungsfunktionen berechnen
- DGL per Laplace lösen
- Pol-Nullstellen-Stabilität beurteilen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

<a id="fluidmechanik"></a>
### Fluidmechanik `fluidmechanik`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 90 gesamt · 29 manuell · 61 auto-supplemental · 14 mit 4-Block-Erklärung (16%)

**Topic-Lernziele (nach Abschluss):**
- Hydrostatischen Druck $p = \rho\,g\,h$ in offenen Behältern und U-Rohr-Manometern auswerten
- Kontinuitätsgleichung $A_1 v_1 = A_2 v_2$ (inkompressibel) als Volumenerhaltung nutzen
- Bernoulli-Gleichung $p + \tfrac12 \rho v^2 + \rho g h = \text{konst}$ entlang einer Stromlinie korrekt anwenden
- Reynolds-Zahl $\mathrm{Re} = \rho\,v\,d/\eta$ berechnen und laminar ($\lesssim 2300$) gegen turbulent unterscheiden
- Rohrreibungsverluste aus Darcy-Weisbach $\Delta p = \lambda\,\tfrac{L}{d}\,\tfrac12\rho v^2$ samt $\lambda$ abschätzen
- Auftriebskraft $F_A = \rho\,g\,V_\text{verdr}$ und Stabilität schwimmender Körper beurteilen

#### Hydrostatik

##### Hydrostatischer Druck `fluid-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- p = ρgh anwenden
- Druck mit Tiefe erklären

**Kleine Themen (Sub-Goals):**
- [HOCH] $p = \rho g h$ — linearer Zusammenhang nur bei konstanter Dichte (Flüssigkeiten)
- [HOCH] Überdruck vs. absoluter Druck: $p_\text{abs} = p_\text{atm} + p_\text{hydro}$
- [HOCH] Druck in Flüssigkeit hängt nur von der Höhe ab, **nicht** von der Behälterform (hydrostat. Paradoxon)
- [MITTEL] Einheiten: 1 bar ≈ 10 m Wassersäule; 1 mbar ≈ 1 cm H₂O

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Auftrieb `fluid-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Archimedisches Prinzip verwenden
- Verdrängtes Volumen erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] $F_A = \rho_\text{Fluid}\,g\,V_\text{verdrängt}$ — Dichte des **Fluids**, nicht des Körpers
- [HOCH] Schwimmen: $F_A = F_G$ → $V_\text{verdrängt} = m_\text{Körper}/\rho_\text{Fluid}$
- [MITTEL] Vollständig getaucht: $V_\text{verdrängt} = V_\text{Körper}$
- [HOCH] Dichte-Vergleich: Körper schwimmt, wenn $\rho_\text{Körper} < \rho_\text{Fluid}$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Strömung

##### Kontinuitätsgleichung `fluid-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Volumenstrom berechnen
- Geschwindigkeit bei Querschnittsänderung bestimmen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Bernoulli-Gleichung `fluid-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Energieformen in Strömungen unterscheiden
- Druck- und Geschwindigkeitsanteile deuten

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Rohrströmung und Druckverlust `fluid-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Druckverlust nach Hagen-Poiseuille berechnen
- Darcy-Weisbach-Gleichung anwenden
- Strömungsregime mit Reynolds-Zahl beurteilen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Ähnlichkeitsgesetze und Pumpen `fluid-2-4` · 16 min

**Nach dieser Lesson kannst du:**
- Dimensionslose Kennzahlen einordnen
- Pumpengesetze auf geänderte Drehzahl anwenden
- Leistungsabhängigkeit von der Drehzahl erkennen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Moody-Diagramm & Rohrreibung praktisch `fluid-2-5` · 15 min

**Nach dieser Lesson kannst du:**
- Rohrreibungszahl $\lambda$ in Abhängigkeit von $\text{Re}$ und $\varepsilon/d$ bestimmen
- Laminar-Formel $\lambda = 64/\text{Re}$ und Blasius-Formel sicher anwenden
- Druckverlust aus $\lambda$, $L$, $d$, $v$, $\rho$ berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Fluid: Prüfungsaufgaben `fluid-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Bernoulli-Aufgaben lösen
- Hydrostatik und Auftrieb kombinieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Druckverlust, Pumpen & Ähnlichkeit `fluid-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Darcy-Weisbach für Rohrdruckverlust anwenden
- Pumpengesetze bei Drehzahländerung nutzen
- Bernoulli mit Verlusten kombinieren

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

<a id="regelungstechnik"></a>
### Regelungstechnik `regelungstechnik`

**Prüfungsrelevanz:** **Pflicht**  
**Aufgaben:** 60 gesamt · 19 manuell · 41 auto-supplemental · 6 mit 4-Block-Erklärung (10%)

**Topic-Lernziele (nach Abschluss):**
- Regelkreis (Sollwert, Regelgröße, Stellgröße, Störgröße) als Blockschaltbild korrekt aufstellen
- Übertragungsfunktion $G(s) = Y(s)/U(s)$ per Laplace-Transformation aus einer linearen DGL ableiten
- P-, I-, D-, PI- und PID-Regler nach ihrem Zeit- und Frequenzverhalten unterscheiden und einsetzen
- Stabilität anhand der Pollage $\Re(s_i) < 0$ und mit Routh-Hurwitz-Kriterium beurteilen
- Bode-Diagramm (Amplituden- und Phasengang) lesen, Eckfrequenzen und Phasenreserve ablesen
- Stellgrößenbeschränkung, Totzeit und Wind-Up als typische Praxis-Störungen qualitativ einordnen

#### Grundlagen des Regelkreises

##### Regelkreis Grundbegriffe `rt-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Komponenten eines Regelkreises benennen
- Regelabweichung $e = w - y$ erklären
- Steuerung und Regelung unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Signale: Führungsgröße $w$, Regelgröße $y$, Stellgröße $u$, Regelabweichung $e = w - y$, Störgröße $z$
- [HOCH] Regelung (geschlossener Kreis) vs. Steuerung (offener Wirkungsablauf) — nur Regelung reagiert auf Störungen
- [HOCH] Blockschaltbild: Regler $\to$ Stellglied $\to$ Regelstrecke $\to$ Messglied $\to$ Vergleichsstelle (Rückführung)
- [MITTEL] Ziel jeder Regelung: $e \to 0$ trotz Störungen $z$ und Parameter-Schwankungen der Strecke

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Übertragungsfunktion `rt-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Übertragungsfunktion $G(s) = Y(s)/U(s)$ im Laplace-Bereich definieren
- PT1-Glied und Verstärkung bei $s = 0$ bestimmen
- Führungsübertragungsfunktion $T = G_0/(1+G_0)$ berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Übertragungsfunktion $G(s) = Y(s)/U(s)$ nur für LTI-Systeme bei verschwindenden Anfangsbedingungen definiert
- [HOCH] PT1-Glied: $G(s) = K/(1 + Ts)$ — Verstärkung $K$ und Zeitkonstante $T$; Sprungantwort $y(t) = K(1 - e^{-t/T})$
- [HOCH] Statische Verstärkung = $G(0)$ — erhält man durch Einsetzen von $s = 0$ (Endwertsatz für Sprunganregung)
- [HOCH] Serienschaltung: Übertragungsfunktionen werden multipliziert; Parallelschaltung: addiert; Rückführung: $T = G/(1+G H)$
- [MITTEL] Pole von $G(s)$ (Nullstellen des Nenners) bestimmen Stabilität: Realteil $< 0$ = stabil

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Regler und Stabilität

##### PID-Regler `rt-2-1` · 15 min

**Nach dieser Lesson kannst du:**
- P-, I- und D-Anteil des PID-Reglers erklären
- Wirkung der drei Anteile im Zeitbereich verstehen
- PID im Laplace-Bereich formulieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Stabilität `rt-2-2` · 14 min

**Nach dieser Lesson kannst du:**
- Stabilitätsbedingung (Pole in linker Halbebene) formulieren
- Hurwitz-Kriterium erklären
- Phasenrand und Amplitudenrand im Bodediagramm interpretieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Bodediagramm & Phasengang `rt-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Amplituden- und Phasengang typischer Übertragungsglieder kennen (P, I, D, PT1)
- Grenzfrequenz und $-3\,\text{dB}$-Punkt interpretieren
- Phasenreserve als Stabilitätsmaß lesen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Regelkreis & PID Prüfungsaufgaben `rt-3-1` · 22 min

**Nach dieser Lesson kannst du:**
- Stationäre Regelabweichung beim P-Regler berechnen
- Führungsübertragungsfunktion klausurfertig anwenden
- Systemtyp und Rampenfolge einordnen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

## Coverage-Report (Backlog)

### Topics ohne `topicGoals` (0)
*Alle Topics haben Topic-Lernziele. 🎉*

### Lessons ohne `subGoals` (166 / 226)

Gekürzt auf die ersten 20 — die Gesamtliste erscheint erst, wenn < 50 % der Lessons offen sind:

- `trigonometry` / `trig-2-1` — Der Einheitskreis
- `trigonometry` / `trig-2-2` — sin und cos als Koordinaten
- `trigonometry` / `trig-2-3` — Symmetrien und Periodizität
- `trigonometry` / `trig-2-4` — Tangens im Einheitskreis
- `trigonometry` / `trig-2-5` — Alle vier Quadranten
- `trigonometry` / `trig-3-1` — Additionstheoreme
- `trigonometry` / `trig-3-2` — Doppelwinkelformeln und Pythagoreischer Satz
- `trigonometry` / `trig-3-3` — Technische Anwendungen
- `trigonometry` / `trig-3-4` — Inverse Funktionen
- `trigonometry` / `trig-3-5` — Sinussatz & Cosinussatz
- `trigonometry` / `trig-4-1` — Prüfung: Identitäten & Gleichungen
- `trigonometry` / `trig-4-2` — Prüfung: Technische Anwendungen
- `trigonometry` / `trig-4-3` — Prüfung: Einheitskreis & Gleichungssysteme
- `ableitung` / `abl-1-5` — Extremwerte und Kurvendiskussion
- `ableitung` / `abl-2-1` — Produktregel
- `ableitung` / `abl-2-2` — Quotientenregel
- `ableitung` / `abl-2-3` — Kettenregel — Schritt für Schritt
- `ableitung` / `abl-2-4` — Gemischte Regeln
- `ableitung` / `abl-3-1` — Monotonie und Extremwerte
- `ableitung` / `abl-3-2` — Krümmung und Wendepunkte
- … +146 weitere

### Niedrigster 4-Block-Anteil (Top-10)

| Topic | 4-Block / Erklärungen | % |
|---|---|---|
| Lineare Algebra (`lineare-algebra`) | 0 / 123 | 0% |
| Differentialgleichungen (`differentialgleichungen`) | 0 / 103 | 0% |
| Fourier & Laplace (`fourier-laplace`) | 0 / 70 | 0% |
| Python & Matlab (`python-matlab`) | 0 / 130 | 0% |
| Elektrotechnik (`elektrotechnik`) | 6 / 80 | 8% |
| Komplexe Zahlen (`komplexe-zahlen`) | 9 / 90 | 10% |
| Reihen & Folgen (`reihen-folgen`) | 5 / 50 | 10% |
| Mehrdim. Analysis (`mehrdim-analysis`) | 5 / 50 | 10% |
| Numerische Mathematik (`numerik`) | 5 / 50 | 10% |
| Statistik & Wahrscheinlichkeit (`statistik`) | 6 / 60 | 10% |

### Höchster Anteil Auto-Supplementals (Top-10)

| Topic | Supplemental / Gesamt | % |
|---|---|---|
| Werkstoffkunde (`werkstoffkunde`) | 52 / 60 | 87% |
| Elektrotechnik (`elektrotechnik`) | 55 / 80 | 69% |
| Festigkeitslehre (`festigkeitslehre`) | 75 / 110 | 68% |
| Thermodynamik (`thermodynamik`) | 54 / 80 | 68% |
| Fluidmechanik (`fluidmechanik`) | 61 / 90 | 68% |
| Maschinenelemente (`maschinenelemente`) | 54 / 80 | 68% |
| Regelungstechnik (`regelungstechnik`) | 41 / 60 | 68% |
| Python & Matlab (`python-matlab`) | 84 / 130 | 65% |
| Trigonometrie (`trigonometry`) | 114 / 180 | 63% |
| Technische Mechanik (`technische-mechanik`) | 101 / 160 | 63% |

---

*Generiert mit `scripts/generate-lernziele.js` am 2026-04-21. Siehe auch `CONTENT_OVERVIEW.md` (detaillierte Aufgaben-Tabellen) und `src/content/lehrplan/tu-wien-maschinenbau.md` (Original-Lehrplan TU Wien).*
