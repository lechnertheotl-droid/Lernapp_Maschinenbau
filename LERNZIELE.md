# Lernziele — Maschinenbau TU Wien

> **Automatisch generiert** am 2026-04-21 via `npm run lernziele`.
> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.

Die Datei bündelt alle Lernziele der App nach Studienphase. Jedes Topic, jede Unit und jede Lesson listet, was danach beherrscht werden soll. Die Sub-Goals markieren kleinteilige Prüfungs-Mikrothemen (HOCH/MITTEL/NIEDRIG).

## Kennzahlen

| Metrik | Wert |
|---|---|
| Topics | 22 |
| Topics mit expliziten `topicGoals` | 6 / 22 (27%) |
| Lessons insgesamt | 226 |
| Lessons mit `subGoals` | 12 / 226 (5%) |
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
| Phase 1 | [Werkstoffkunde](#werkstoffkunde) | 3 | 6 | 8/60 | 28/60 (47%) | — |
| Phase 1 | [Elektrotechnik](#elektrotechnik) | 3 | 8 | 25/80 | 6/80 (8%) | — |
| Phase 1 | [Python & Matlab](#python-matlab) | 4 | 13 | 46/130 | 0/130 (0%) | — |
| Phase 2 | [Lineare Algebra](#lineare-algebra) | 3 | 12 | 75/123 | 0/123 (0%) | — |
| Phase 2 | [Differentialgleichungen](#differentialgleichungen) | 3 | 10 | 61/103 | 0/103 (0%) | — |
| Phase 2 | [Komplexe Zahlen](#komplexe-zahlen) | 4 | 9 | 81/90 | 9/90 (10%) | — |
| Phase 2 | [Reihen & Folgen](#reihen-folgen) | 2 | 5 | 45/50 | 5/50 (10%) | — |
| Phase 2 | [Festigkeitslehre](#festigkeitslehre) | 3 | 11 | 35/110 | 20/110 (18%) | — |
| Phase 2 | [Thermodynamik](#thermodynamik) | 3 | 8 | 26/80 | 8/80 (10%) | — |
| Phase 2 | [Maschinenelemente](#maschinenelemente) | 3 | 8 | 26/80 | 8/80 (10%) | — |
| Phase 3 | [Mehrdim. Analysis](#mehrdim-analysis) | 2 | 5 | 45/50 | 5/50 (10%) | — |
| Phase 3 | [Numerische Mathematik](#numerik) | 2 | 5 | 45/50 | 5/50 (10%) | — |
| Phase 3 | [Statistik & Wahrscheinlichkeit](#statistik) | 2 | 6 | 54/60 | 6/60 (10%) | — |
| Phase 3 | [Fourier & Laplace](#fourier-laplace) | 3 | 7 | 56/70 | 0/70 (0%) | — |
| Phase 3 | [Fluidmechanik](#fluidmechanik) | 3 | 9 | 29/90 | 14/90 (16%) | — |
| Phase 3 | [Regelungstechnik](#regelungstechnik) | 3 | 6 | 19/60 | 6/60 (10%) | — |

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

##### Potenzgesetze `alg-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Alle Potenzregeln kennen und sicher anwenden
- Terme mit gleichen Basen vereinfachen
- Typische Fehler (Multiplikation vs. Potenz) vermeiden

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 3 mit 4-Block-Erklärung

##### Wurzeln und gebrochene Exponenten `alg-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Wurzeln als gebrochene Potenzen verstehen
- Wurzelterme vereinfachen
- Typische Fehler (Wurzel von Summe) vermeiden

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Logarithmen `alg-1-3` · 18 min

**Nach dieser Lesson kannst du:**
- Logarithmus als Umkehrfunktion der Exponentialfunktion verstehen
- Logarithmusgesetze anwenden
- Gleichungen mit $e^{x}$ und $\ln$ lösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

#### Gleichungen & Ungleichungen

##### Lineare Gleichungen `alg-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungen lösen
- Textaufgaben in Gleichungen übersetzen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

##### Quadratische Gleichungen `alg-2-2` · 20 min

**Nach dieser Lesson kannst du:**
- pq-Formel und abc-Formel anwenden
- Diskriminante interpretieren
- Satz von Vieta nutzen

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

##### Funktionsbegriff `alg-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Definition einer Funktion kennen
- Definitions- und Wertebereich bestimmen
- Injektiv, surjektiv, bijektiv unterscheiden

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

##### Winkel-Intuition (Einstieg) `trig-1-0` · 8 min

**Nach dieser Lesson kannst du:**
- Spitzen, rechten, stumpfen, gestreckten Winkel visuell erkennen
- Winkelsumme im Dreieck ($180°$) anwenden
- Anschauung für $45°$, $90°$, $180°$, $360°$ entwickeln

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

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Vorzeichen und Quadranten `trig-1-4` · 12 min

**Nach dieser Lesson kannst du:**
- Vorzeichen von sin/cos/tan in allen vier Quadranten bestimmen
- Winkel > 90° berechnen
- Reduktionsformeln am Einheitskreis herleiten

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Einheitskreis und Winkelfunktionen

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

##### Koordinaten, Punkte & Pfeile (Einstieg) `vek-1-0` · 10 min

**Nach dieser Lesson kannst du:**
- Koordinaten $(x, y)$ in 2D lesen und zeichnen
- Unterschied zwischen Punkt und Vektor verstehen
- Vektor aus zwei Punkten bestimmen ($B - A$)

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

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kräfte als Vektoren (Prüfung) `vek-1-4` · 18 min

**Nach dieser Lesson kannst du:**
- Kräfte vektoriell addieren
- Gleichgewichtsbedingungen aufstellen
- Einheitsvektoren berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

#### Geraden und Ebenen im Raum

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

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Kettenregel `abl-1-4` · 15 min

**Nach dieser Lesson kannst du:**
- Kettenregel verstehen und anwenden
- Verkettete Funktionen ableiten
- Rolle der inneren Ableitung verinnerlichen

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Extremwerte und Kurvendiskussion `abl-1-5` · 20 min

**Nach dieser Lesson kannst du:**
- Extrema mit Ableitungen bestimmen
- Wendepunkte identifizieren
- Kurvendiskussion durchführen
- Notwendige und hinreichende Bedingungen unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

#### Ableitungsregeln im Detail

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

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 5 mit 4-Block-Erklärung

##### Das bestimmte Integral `int-1-4` · 18 min

**Nach dieser Lesson kannst du:**
- Bestimmtes Integral berechnen
- Geometrische Deutung als Fläche verstehen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 3 mit 4-Block-Erklärung

##### Hauptsatz der Differential- und Integralrechnung `int-1-5` · 14 min

**Nach dieser Lesson kannst du:**
- Hauptsatz der Analysis formulieren können
- Zusammenhang Ableitung ↔ Integral verstehen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 3 mit 4-Block-Erklärung

#### Integrationstechniken

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

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 6 mit 4-Block-Erklärung

#### Statik

##### Kräfte und Freikörperbild `mech-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kräfte als Vektoren darstellen
- Freikörperbilder systematisch aufbauen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Momente und Hebelarm `mech-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Moment als Kraft mal Hebelarm berechnen
- Drehsinn korrekt berücksichtigen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 60 gesamt · 8 manuell · 52 auto-supplemental · 28 mit 4-Block-Erklärung (47%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Werkstoffkennwerte

##### Spannungs-Dehnungs-Diagramm `werk-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Streckgrenze $R_e$, Zugfestigkeit $R_m$, Bruchdehnung $A$ ablesen
- Elastisch vs. plastisch unterscheiden
- Elastizitätsmodul $E$ als Steigung im Hookeschen Bereich erkennen

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

##### Werkstoffgruppen `werk-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Stahl, Aluminium, Kunststoff und Keramik qualitativ vergleichen
- Anwendungsgebiete aus Werkstoffeigenschaften ableiten

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 4 mit 4-Block-Erklärung

#### Prüfverfahren

##### Härteprüfung (HV, HB, HRC) `werk-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Prinzip der Härteprüfung verstehen
- Vickers, Brinell, Rockwell unterscheiden
- Härte mit Festigkeit korrelieren

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 80 gesamt · 25 manuell · 55 auto-supplemental · 6 mit 4-Block-Erklärung (8%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Gleichstromkreise

##### Ohmsches Gesetz und Grundbegriffe `et-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Das Ohmsche Gesetz $U = R \cdot I$ anwenden
- Reihen- und Parallelschaltungen berechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kirchhoffsche Gesetze `et-1-2` · 13 min

**Nach dieser Lesson kannst du:**
- Den Knotensatz (KCL) anwenden: $\sum I = 0$
- Den Maschensatz (KVL) anwenden: $\sum U = 0$

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 130 gesamt · 46 manuell · 84 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 123 gesamt · 75 manuell · 48 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Matrizen & Determinanten

##### Was ist eine Matrix? `la-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Matrizen als Zahlentabellen verstehen
- Dimension und Notation kennen
- Spezialmatrizen erkennen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Matrizenrechnung `la-1-2` · 20 min

**Nach dieser Lesson kannst du:**
- Matrizen addieren und skalar multiplizieren
- Matrizenmultiplikation beherrschen
- Nicht-Kommutativität verstehen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 103 gesamt · 61 manuell · 42 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Grundbegriffe & einfache DGL

##### Was ist eine Differentialgleichung? `dgl-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- DGL als Gleichung mit Funktion und Ableitungen verstehen
- Ordnung und Linearität bestimmen
- Anfangswertproblem verstehen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Trennung der Variablen `dgl-1-2` · 18 min

**Nach dieser Lesson kannst du:**
- Methode der Variablentrennung anwenden
- Einfache DGL 1. Ordnung lösen
- Anfangswerte einsetzen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 90 gesamt · 81 manuell · 9 auto-supplemental · 9 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Kartesische Form

##### Imaginäre Einheit & Gaußsche Zahlenebene `komz-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- i² = −1 als definierende Eigenschaft verstehen
- Komplexe Zahlen als Punkte in der Gaußschen Ebene darstellen
- Real- und Imaginärteil ablesen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Rechnen in kartesischer Form (+, −, ·, :) `komz-1-2` · 18 min

**Nach dieser Lesson kannst du:**
- Komplexe Zahlen addieren und subtrahieren
- Multiplikation mit i² = −1 anwenden
- Division via Erweitern mit dem konjugierten Nenner

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### Polarform, Euler & Rechnen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Folgen, Reihen & Konvergenz

##### Folgen und Grenzwerte `rf-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Folgen als Funktionen $\mathbb{N} \to \mathbb{R}$ verstehen
- Konvergenz und Grenzwert definieren
- Monotonie und Beschränktheit prüfen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Taylor-Polynome `rf-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Taylor-Polynom vom Grad $n$ um einen Entwicklungspunkt $x_0$ aufstellen
- Taylorentwicklung für $e^x$, $\sin x$, $\cos x$ kennen
- Restglied nach Lagrange abschätzen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 110 gesamt · 35 manuell · 75 auto-supplemental · 20 mit 4-Block-Erklärung (18%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Spannung und Dehnung

##### Normalspannung `fest-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Spannung als Kraft pro Fläche verstehen
- Einheiten korrekt umrechnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Hookesches Gesetz `fest-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Linearen elastischen Bereich erkennen
- E-Modul interpretieren

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 80 gesamt · 26 manuell · 54 auto-supplemental · 8 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Zustandsgrößen

##### Ideales Gas `thermo-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- pV = nRT anwenden
- Temperatur in Kelvin verwenden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Druck und Arbeit `thermo-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Volumenänderungsarbeit interpretieren
- p-V-Diagramme lesen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 80 gesamt · 26 manuell · 54 auto-supplemental · 8 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Verbindungen

##### Schraubenverbindungen `melem-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kraftfluss in Schraubenverbindungen verstehen
- Vorspannung einordnen

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Passfedern und formschlüssige Verbindungen `melem-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Formschluss von Kraftschluss unterscheiden
- Drehmomentübertragung beschreiben

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Partielle Ableitungen & Gradient

##### Partielle Ableitung verstehen `mdim-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Funktionen mehrerer Variablen verstehen
- Partielle Ableitung ∂f/∂x, ∂f/∂y berechnen
- Gradient als Vektor interpretieren

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Hesse-Matrix und Lagrange-Multiplikatoren `mdim-1-2` · 16 min

**Nach dieser Lesson kannst du:**
- Hesse-Matrix aufstellen und Extrema in 2D klassifizieren
- Lagrange-Multiplikatoren bei einer Nebenbedingung anwenden
- Sattel- von Extrempunkten unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 50 gesamt · 45 manuell · 5 auto-supplemental · 5 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Nullstellen & Integration

##### Newton-Verfahren `num-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Newton-Iteration verstehen und anwenden
- Startwert und Konvergenz einschätzen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Bisektion und numerische Integration `num-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Bisektion als robuste Nullstellensuche durchführen
- Trapezregel und Simpson-Regel für bestimmte Integrale anwenden
- Fehlerordnung der Verfahren einordnen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 60 gesamt · 54 manuell · 6 auto-supplemental · 6 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Zufallsvariablen & Verteilungen

##### Erwartungswert und Varianz `stat-1-1` · 14 min

**Nach dieser Lesson kannst du:**
- Erwartungswert und Varianz einer diskreten Zufallsvariablen berechnen
- Unterschied zwischen $\sigma^2$ und $\sigma$ kennen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Normalverteilung `stat-1-2` · 13 min

**Nach dieser Lesson kannst du:**
- Normalverteilung $N(\mu, \sigma^2)$ parametrieren und interpretieren
- 68-95-99{,}7%-Regel anwenden
- Standardisierung $Z = (X-\mu)/\sigma$ durchführen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Hypothesentest und Konfidenzintervall `stat-1-3` · 15 min

**Nach dieser Lesson kannst du:**
- Nullhypothese $H_0$ und Alternativhypothese $H_1$ formulieren
- p-Wert interpretieren und mit Signifikanzniveau $\alpha$ vergleichen
- 95%-Konfidenzintervall für den Mittelwert berechnen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

#### 🏁 Prüfung

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 70 gesamt · 56 manuell · 14 auto-supplemental · 0 mit 4-Block-Erklärung (0%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Fourier-Reihen

##### Fourier-Reihen — Grundbegriffe `fl-1-1` · 15 min

**Nach dieser Lesson kannst du:**
- Periodische Funktionen als Überlagerung von Sinus/Kosinus erkennen
- Fourier-Koeffizienten berechnen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Fourier-Reihe Rechteckimpuls `fl-1-2` · 14 min

**Nach dieser Lesson kannst du:**
- Fourier-Koeffizienten eines Rechtecksignals berechnen
- Gibbs-Phänomen kennen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Fourier-Transformation `fl-1-3` · 16 min

**Nach dieser Lesson kannst du:**
- Von Fourier-Reihen zur Fourier-Transformation übergehen
- Spektrum nicht-periodischer Signale verstehen

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

#### Laplace-Transformation

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 90 gesamt · 29 manuell · 61 auto-supplemental · 14 mit 4-Block-Erklärung (16%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Hydrostatik

##### Hydrostatischer Druck `fluid-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- p = ρgh anwenden
- Druck mit Tiefe erklären

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Auftrieb `fluid-1-2` · 12 min

**Nach dieser Lesson kannst du:**
- Archimedisches Prinzip verwenden
- Verdrängtes Volumen erkennen

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

**Prüfungsrelevanz:** —  
**Aufgaben:** 60 gesamt · 19 manuell · 41 auto-supplemental · 6 mit 4-Block-Erklärung (10%)

> ⚠ **`topicGoals` fehlen** — aggregiert aus Lesson-Zielen unten; bitte für dieses Topic nachtragen.

#### Grundlagen des Regelkreises

##### Regelkreis Grundbegriffe `rt-1-1` · 12 min

**Nach dieser Lesson kannst du:**
- Komponenten eines Regelkreises benennen
- Regelabweichung $e = w - y$ erklären
- Steuerung und Regelung unterscheiden

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Übertragungsfunktion `rt-1-2` · 15 min

**Nach dieser Lesson kannst du:**
- Übertragungsfunktion $G(s) = Y(s)/U(s)$ im Laplace-Bereich definieren
- PT1-Glied und Verstärkung bei $s = 0$ bestimmen
- Führungsübertragungsfunktion $T = G_0/(1+G_0)$ berechnen

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

### Topics ohne `topicGoals` (16)
- `lineare-algebra` — Lineare Algebra
- `differentialgleichungen` — Differentialgleichungen
- `komplexe-zahlen` — Komplexe Zahlen
- `reihen-folgen` — Reihen & Folgen
- `mehrdim-analysis` — Mehrdim. Analysis
- `numerik` — Numerische Mathematik
- `statistik` — Statistik & Wahrscheinlichkeit
- `fourier-laplace` — Fourier & Laplace
- `festigkeitslehre` — Festigkeitslehre
- `thermodynamik` — Thermodynamik
- `fluidmechanik` — Fluidmechanik
- `maschinenelemente` — Maschinenelemente
- `elektrotechnik` — Elektrotechnik
- `regelungstechnik` — Regelungstechnik
- `werkstoffkunde` — Werkstoffkunde
- `python-matlab` — Python & Matlab

### Lessons ohne `subGoals` (214 / 226)

Gekürzt auf die ersten 20 — die Gesamtliste erscheint erst, wenn < 50 % der Lessons offen sind:

- `trigonometry` / `trig-1-0` — Winkel-Intuition (Einstieg)
- `trigonometry` / `trig-1-3` — Die Grundwerte
- `trigonometry` / `trig-1-4` — Vorzeichen und Quadranten
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
- `ableitung` / `abl-1-3` — Ableitungen elementarer Funktionen
- `ableitung` / `abl-1-4` — Kettenregel
- `ableitung` / `abl-1-5` — Extremwerte und Kurvendiskussion
- `ableitung` / `abl-2-1` — Produktregel
- … +194 weitere

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
