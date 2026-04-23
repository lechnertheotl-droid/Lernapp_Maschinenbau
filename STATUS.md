# Lernapp Status — Lehrplan & Content

_auto-generiert · 2026-04-23 · `npm run status`_

Single Source of Truth: Lehrplan (Phasen, Fächer, Tipps) **und** Content-Kennzahlen (Topics, Lessons, Aufgaben, Goal-Tasks, Qualitätsgaps). Quelle für den Lehrplan-Teil ist `src/content/curriculum.js` — dieselbe Datei, aus der auch die UI-Seite `/lehrplan` rendert.

## Lehrplan (TU Wien Maschinenbau)

Empfohlene Reihenfolge vom Studienbeginn bis zur Vertiefung. Orientiert am Bachelor-Studienplan Maschinenbau der TU Wien. Jedes Topic kann jederzeit frei gewählt werden — dieser Lehrplan ist nur eine Orientierung.

### Phase 0 — Vorkurs

_Erste 1–2 Wochen_ — Schulwissen festigen. Diese Inhalte sind direkt in die Fach-Topics eingearbeitet — starte mit Algebra Unit 0. Viele Klausurfehler im ersten Semester kommen aus Lücken in genau diesen Grundlagen.

| Fach | Topics | Hinweis |
| --- | --- | --- |
| **Rechnen & Brüche** | [Algebra & Funktionen](#algebra) | Unit 0 (Brüche, Klammern, Prozent, Termumformung) |
| **Winkel-Intuition** | [Trigonometrie](#trigonometry) | Lesson 0 (Winkel, Winkelklassen, Dreieckssumme) |
| **Koordinaten & Pfeile** | [Vektoren & Analytische Geometrie](#vektoren) | Lesson 0 (Punkte vs. Vektoren in 2D) |
| **Einheiten & Dimensionsanalyse** | [Technische Mechanik](#technische-mechanik) | Unit 0 (SI, Präfixe, abgeleitete Einheiten) |

### Phase 1 — 1. Semester

_Studienbeginn_ — Faustregel: In der ersten Studienwoche die Vorkurs-Units (Phase 0) erledigen, dann parallel Mathe- und Mechanik-Topics aufbauen.

| Fach | Topics | Hinweis |
| --- | --- | --- |
| **Mathematik 1 (Analysis 1, LinAlg-Grundlagen)** | [Algebra & Funktionen](#algebra) · [Trigonometrie](#trigonometry) · [Vektoren & Analytische Geometrie](#vektoren) · [Differentialrechnung](#ableitung) · [Integralrechnung](#integralrechnung) | Reihenfolge: Algebra → Trig → Vektoren → Ableitung → Integral |
| **Mechanik 1 (Statik)** | [Technische Mechanik](#technische-mechanik) | Unit 0 (Einheiten) → Unit 1 (Statik) |
| **Werkstoffkunde 1** | [Werkstoffkunde](#werkstoffkunde) | Unit 1 (Kennwerte) → Unit 2 (Prüfverfahren) |
| **Einführung Informatik / Programmieren** | [Python & Matlab](#python-matlab) | alle Units |
| **Grundlagen Elektrotechnik** | [Elektrotechnik](#elektrotechnik) | alle Units |

### Phase 2 — 2. Semester

_Aufbau_ — Mathematische Tiefe, erste Ingenieurs-Fächer kommen dazu. Statik wird zur Festigkeitslehre, Analysis zur DGL.

| Fach | Topics | Hinweis |
| --- | --- | --- |
| **Mathematik 2 (Analysis 2, DGL, komplexe Zahlen, Reihen, LinAlg 2)** | [Komplexe Zahlen](#komplexe-zahlen) · [Reihen & Folgen](#reihen-folgen) · [Differentialgleichungen](#differentialgleichungen) · [Lineare Algebra](#lineare-algebra) |  |
| **Mechanik 2 (Festigkeitslehre)** | [Festigkeitslehre](#festigkeitslehre) |  |
| **Thermodynamik 1** | [Thermodynamik](#thermodynamik) |  |
| **Maschinenelemente 1** | [Maschinenelemente](#maschinenelemente) |  |
| **Werkstoffkunde 2** | [Werkstoffkunde](#werkstoffkunde) | Prüfungs-Unit + Vertiefung |

### Phase 3 — Vertiefung

_Ab 3. Semester_ — Spezialisierte Fächer für weiterführende Maschinenbau-Themen.

| Fach | Topics | Hinweis |
| --- | --- | --- |
| **Mehrdimensionale Analysis & Vektoranalysis** | [Mehrdim. Analysis](#mehrdim-analysis) |  |
| **Numerische Mathematik** | [Numerische Mathematik](#numerik) |  |
| **Wahrscheinlichkeit & Statistik** | [Statistik & Wahrscheinlichkeit](#statistik) |  |
| **Fourier- & Laplace-Transformation** | [Fourier & Laplace](#fourier-laplace) |  |
| **Strömungsmechanik** | [Fluidmechanik](#fluidmechanik) |  |
| **Regelungstechnik** | [Regelungstechnik](#regelungstechnik) |  |

### Geplante Themen

Fächer aus dem TU-Wien-Maschinenbau-Bachelor, die das Curriculum ergänzen würden. Noch nicht als Topics in der App angelegt.

| Thema | Phase | Geplante Units | Begründung |
| --- | :---: | --- | --- |
| **Schwingungen (Mechanik 3)** | 2 | Freie gedämpfte Schwingungen · Erzwungene Schwingungen (Resonanz) · Mehrmassen-Systeme · Prüfung | Schwingungsanalyse ist direktes Follow-up von DGL und Dynamik und Grundlage für Maschinendynamik, Akustik und Regelungstechnik. |
| **Messtechnik** | 2 | Messkette & Kennlinien · Messunsicherheit (GUM) · Sensoren (Dehnung, Temperatur, Druck) · Prüfung | Sensorik, Messunsicherheit und Signalverarbeitung sind im Labor unumgänglich. Ergänzt Statistik (Messfehler) und Elektrotechnik (Sensorschaltungen). |
| **Konstruktionslehre & Technisches Zeichnen** | 1 | Projektionen & Ansichten · Bemaßung & Toleranzen · Oberflächen & Pass-System · Prüfung | Normgerechte Zeichnung, Toleranzen (ISO-Pass-System), Oberflächenangaben — Grundlage für Maschinenelemente und Fertigungstechnik. |
| **Chemie für Ingenieure** | 1 | Atombau & Bindungen · Stöchiometrie · Redox & Korrosion · Prüfung | Stoffeigenschaften, Korrosion, Verbrennung — Hintergrund für Werkstoffkunde und Thermodynamik. |
| **Fertigungstechnik** | 2 | Urformen (Guss, Additiv) · Umformen & Zerspanen · Fügen (Schweißen, Kleben) · Prüfung | Urformen, Umformen, Trennen, Fügen — ohne Fertigungswissen keine konstruktionsgerechte Auslegung. |

### Lern- & Prüfungstechnik

**Beim Lernen**

- Skript + App parallel: Kapitel im Skript lesen, dann passende Lesson in der App als aktive Wiederholung.
- Karteikarten für Formeln: Jede Formel mit Variablen-Erklärung; nach 1 Tag, 3 Tagen, 1 Woche wiederholen.
- Rechenweg dokumentieren: jeden Schritt handschriftlich nachschreiben — der motorische Vorgang stabilisiert das Gedächtnis.
- Mindestens 10 Aufgaben pro Lesson rechnen — Routine entsteht durch Menge, nicht durch Hingucken.

**Bei Prüfungsaufgaben**

- Gegeben / Gesucht zuerst markieren — samt Einheiten.
- Skizze zeichnen (Freikörperbild, Diagramm, Koordinatensystem).
- Ansatz wählen: Gleichgewicht, Energie, Stoffgesetz, Bilanz, Geometrie.
- Einheiten prüfen, bevor Zahlen eingesetzt werden.
- Plausibilitätscheck: Größenordnung, Vorzeichen, Grenzfälle $x\to 0$ / $x\to\infty$.

**Typische Fallen**

- Taschenrechner-Modus: DEG vs. RAD.
- $\text{MPa}$ vs. $\text{N/mm}^2$ (identisch, aber oft unklar beim ersten Schritt).
- Masse vs. Gewichtskraft (kg vs. N).
- Prozent als Dezimal schreiben ($5\,\%=0{,}05$, nicht $5$).
- Beim Gleichung-Lösen: Operation immer auf BEIDE Seiten anwenden.

## Gesamt-Kennzahlen

> **Alle Zahlen sind Mindestwerte — nach oben kein Limit. Mehr Aufgaben = bessere Routine.**

| Metrik | Wert | Mindestens | Status |
| --- | ---: | ---: | :---: |
| Topics | 22 | 22 | ✅ |
| Units | 71 | — | — |
| Lessons | 226 | — | — |
| Aufgaben (gesamt) | 3003 | 4520+ (≥ 20/Lesson) | 🟡 |
| Aufgaben mit 4-Block | 1103 (37 %) | 100 % der Aufgaben | 🔴 |
| MC mit wrongAnswerExplanations | 1157 / 1157 (100 %) | 100 % | ✅ |
| Sub-Goal-Tasks verknüpft | 158 / 1134 (14 %) | 100 % (≥ 5 pro SG) | 🔴 |
| Practice-Topics ≥ 3 Exercises | 22 / 22 | 22 / 22 | ✅ |

## Qualitätskontrakt pro Aufgabe

- 4-Block-Erklärung: **Ansatz** / **Rechnung** / **Probe** / **Typischer Fehler**.
- ≥ 3 Hints, gestaffelt.
- Multiple-Choice: `wrongAnswerExplanations` für jeden falschen Index.
- Number-Input: `unit` + `tolerance` gesetzt.
- Prüfungs-Unit: Frage/Statement beginnt mit `[PRÜFUNG] `.
- Goal-Tasks: Sub-Goal-Label wörtlich in der Frage zitiert, Typen-Rotation pro Lesson.

## Pro Topic

<a id="algebra"></a>

### algebra · Algebra & Funktionen

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: grundlage
- Units: 5 (Prüfung am Ende ✅)
- Lessons: 18
- Aufgaben: **457** (manuell: 112 · supplemental: 345)
- 4-Block: 314/457 (69 %) 🟡
- MC-wAE: 197/197 (100 %) ✅
- Sub-Goals: 52/90 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Algebraische Umformungen, Gleichungen und Funktionen — das rechnerische Fundament für alles danach.**

_Jede Ingenieursformel wird früher oder später umgestellt. Wer hier nicht sicher ist, verliert in Mechanik- und Analysis-Prüfungen trotz richtigem Ansatz Punkte bei der Ausführung._

**Empfohlene Reihenfolge**

1. **Rechnen & Brüche (Vorkurs-Einstieg)** — Schulwissen auffrischen: Brüche, Klammern, Prozent, Termumformung. NICHT überspringen — hier entstehen die meisten Folgefehler.
2. **Potenzen, Wurzeln & Logarithmen** — Potenzgesetze, Wurzeln, Logarithmen. Wichtig für Exponentialprozesse (Auf-/Entladung, Wachstum) in Regelungstechnik und DGL.
3. **Gleichungen & Ungleichungen** — Gleichungen aller Art: linear, quadratisch, Polynom, Ungleichungen. Standardwerkzeug für Nullstellen und Extrema.
4. **Funktionen** — Funktionsbegriff, elementare Funktionen, Umkehrfunktionen. Brücke zur Ableitung.
5. **Prüfungsaufgaben** — Prüfungsaufgaben im Klausurstil. Kombiniert Umformung + Gleichungslösung + Funktionsanalyse.

**Das musst du können**

- Bruchrechnen fehlerfrei (Hauptnenner, Kürzen, Doppelbruch, Division durch Bruch = Mult. mit Kehrwert).
- Potenz- und Logarithmengesetze auswendig.
- Lineare und quadratische Gleichungen mit großer Lösungsformel.
- Binomische Formeln, Distributivgesetz, Polynomdivision.
- Umkehrfunktion bilden und Definitionsbereich angeben.

**Typische Fehler**

- Minuszeichen vor Klammer nicht auf alle Summanden verteilt.
- Beim Quadrieren Scheinlösungen übersehen (Probe vergessen).
- Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$.
- Definitionsbereich bei Bruch- und Wurzelgleichungen nicht geprüft.

**Klausur-Fokus**

- Bruchgleichungen mit Definitionsbereich.
- Quadratische Gleichung und Scheitelpunktberechnung.
- Exponential-/Logarithmus-Anwendungen (z. B. Zinseszins, RC-Entladung).

**Lern-Tipps**

- Jeden Umformungsschritt einzeln hinschreiben — keine zwei Schritte gleichzeitig.
- Nach jeder Gleichung Probe durchführen.
- Merkzettel mit den 10 wichtigsten Regeln (Potenz, Log, Binomisch) im Sichtfeld.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `alg-0-1` Grundrechnen, Klammern & Vorrang | 4 | 4/4 | 27 | 10/8/5/2/2 | 27/27 | 10/10 | ✅ | — |
| `alg-0-2` Bruchrechnen sicher | 4 | 4/4 | 27 | 11/7/5/1/3 | 27/27 | 11/11 | ✅ | — |
| `alg-0-3` Prozent & Dreisatz | 5 | 5/5 | 32 | 11/11/6/3/1 | 32/32 | 11/11 | ✅ | — |
| `alg-0-4` Termumformung & Gleichungen | 5 | 5/5 | 31 | 12/9/5/2/3 | 30/31 | 12/12 | ✅ | +1 4B |
| `alg-1-1` Potenzgesetze | 4 | 4/4 | 33 | 15/10/5/2/1 | 23/33 | 15/15 | ✅ | +10 4B |
| `alg-1-2` Wurzeln und gebrochene Exponenten | 3 | 3/3 | 28 | 11/8/5/2/2 | 17/28 | 11/11 | ✅ | +11 4B |
| `alg-1-3` Logarithmen | 7 | 7/7 | 47 | 20/15/8/3/1 | 35/47 | 20/20 | ✅ | +12 4B |
| `alg-2-1` Lineare Gleichungen | 4 | 4/4 | 34 | 13/10/5/2/4 | 27/34 | 13/13 | ✅ | +7 4B |
| `alg-2-2` Quadratische Gleichungen | 4 | 4/4 | 34 | 14/9/5/4/2 | 23/34 | 14/14 | ✅ | +11 4B |
| `alg-2-3` Polynomgleichungen & Polynomdivision | 6 | 6/6 | 43 | 20/9/7/4/3 | 32/43 | 20/20 | ✅ | +11 4B |
| `alg-2-4` Ungleichungen | 6 | 6/6 | 42 | 20/7/6/5/4 | 34/42 | 20/20 | ✅ | +8 4B |
| `alg-3-1` Funktionsbegriff | 3 | 0/3 | 11 | 6/2/2/1/0 | 0/11 | 6/6 | ✅ | +3 Goal, +11 4B |
| `alg-3-2` Elementare Funktionen | 6 | 0/6 | 13 | 7/2/1/2/1 | 1/13 | 7/7 | ✅ | +6 Goal, +12 4B |
| `alg-3-3` Funktionsoperationen | 6 | 0/6 | 11 | 6/2/1/1/1 | 2/11 | 6/6 | ✅ | +6 Goal, +9 4B |
| `alg-3-4` Umkehrfunktionen | 6 | 0/6 | 11 | 5/2/2/1/1 | 1/11 | 5/5 | ✅ | +6 Goal, +10 4B |
| `alg-4-1` Prüfung: Algebra-Grundlagen | 5 | 0/5 | 11 | 6/2/2/1/0 | 1/11 | 6/6 | ✅ | +5 Goal, +10 4B |
| `alg-4-2` Prüfung: Funktionen & Anwendungen | 6 | 0/6 | 11 | 7/1/2/0/1 | 2/11 | 7/7 | ✅ | +6 Goal, +9 4B |
| `alg-4-3` Prüfung: Gleichungs­systeme & technische Anwendungen | 6 | 0/6 | 11 | 3/4/2/1/1 | 0/11 | 3/3 | ✅ | +6 Goal, +11 4B |

<a id="trigonometry"></a>

### trigonometry · Trigonometrie

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 4 (Prüfung am Ende ✅)
- Lessons: 18
- Aufgaben: **363** (manuell: 66 · supplemental: 297)
- 4-Block: 226/363 (62 %) 🟡
- MC-wAE: 137/137 (100 %) ✅
- Sub-Goals: 37/87 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Winkel, Sinus/Kosinus/Tangens und Einheitskreis — die Sprache, in der Geometrie und Schwingungen beschrieben werden.**

_Jede Kraftzerlegung, jede Wechselspannung, jede Schwingung lebt von sin/cos. Ohne Trig-Sicherheit wird Statik und Elektrotechnik zur Raterei._

**Empfohlene Reihenfolge**

1. **Grundlagen der Trigonometrie** — Winkelmaße, rechtwinkliges Dreieck, sin/cos/tan-Grundwerte. Winkel ↔ Radiant sicher umrechnen.
2. **Einheitskreis und Winkelfunktionen** — Einheitskreis-Definition, Periodizität, Quadranten und Vorzeichen. DAS Fundament für alle späteren Schwingungsaufgaben.
3. **Anwendungen und Identitäten** — Additionstheoreme, Sinus-/Kosinussatz, technische Anwendungen (Kräfteparallelogramm, Schiefe Ebene).
4. **Prüfungsaufgaben** — Klausurmix aus Dreiecken, Gleichungen und technischen Anwendungen.

**Das musst du können**

- Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$.
- sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig.
- Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv).
- Additionstheoreme $\sin(2x)$, $\cos(2x)$, $\sin(\alpha\pm\beta)$.
- Sinus- und Kosinussatz am schiefwinkligen Dreieck.

**Typische Fehler**

- Taschenrechner steht auf DEG statt RAD (oder umgekehrt).
- Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen.
- Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren.
- SSA-Mehrdeutigkeit im Dreieck nicht geprüft (zwei Dreiecke möglich).

**Klausur-Fokus**

- Dreiecksberechnung mit Sinus-/Kosinussatz.
- Trigonometrische Gleichungen in $[0,2\pi)$ lösen.
- Kräftezerlegung an schiefer Ebene.

**Lern-Tipps**

- Einheitskreis sauber auswendig lernen — dann entstehen alle Werte und Vorzeichen daraus.
- Bei jeder Aufgabe Skizze + Winkelmodus prüfen, bevor gerechnet wird.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `trig-1-0` Winkel-Intuition (Einstieg) | 3 | 3/3 | 20 | 5/4/4/4/3 | 20/20 | 5/5 | ✅ | — |
| `trig-1-1` Winkel und ihre Maße | 4 | 0/4 | 11 | 5/3/1/1/1 | 2/11 | 5/5 | ✅ | +4 Goal, +9 4B |
| `trig-1-2` Rechtwinkliges Dreieck | 3 | 0/3 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +3 Goal, +11 4B |
| `trig-1-3` Die Grundwerte | 4 | 0/4 | 12 | 8/2/1/1/0 | 2/12 | 8/8 | ✅ | +4 Goal, +10 4B |
| `trig-1-4` Vorzeichen und Quadranten | 3 | 3/3 | 25 | 8/5/4/4/4 | 18/25 | 8/8 | ✅ | +7 4B |
| `trig-2-1` Der Einheitskreis | 4 | 4/4 | 30 | 9/6/5/5/5 | 23/30 | 9/9 | ✅ | +7 4B |
| `trig-2-2` sin und cos als Koordinaten | 5 | 5/5 | 35 | 10/7/6/6/6 | 27/35 | 10/10 | ✅ | +8 4B |
| `trig-2-3` Symmetrien und Periodizität | 6 | 0/6 | 10 | 5/2/1/1/1 | 1/10 | 5/5 | ✅ | +6 Goal, +9 4B |
| `trig-2-4` Tangens im Einheitskreis | 6 | 0/6 | 10 | 5/2/1/1/1 | 0/10 | 5/5 | ✅ | +6 Goal, +10 4B |
| `trig-2-5` Alle vier Quadranten | 6 | 0/6 | 10 | 5/2/1/1/1 | 1/10 | 5/5 | ✅ | +6 Goal, +9 4B |
| `trig-3-1` Additionstheoreme | 5 | 0/5 | 10 | 6/2/1/1/0 | 0/10 | 6/6 | ✅ | +5 Goal, +10 4B |
| `trig-3-2` Doppelwinkelformeln und Pythagoreischer Satz | 5 | 0/5 | 10 | 6/2/1/1/0 | 0/10 | 6/6 | ✅ | +5 Goal, +10 4B |
| `trig-3-3` Technische Anwendungen | 5 | 0/5 | 10 | 5/2/1/1/1 | 2/10 | 5/5 | ✅ | +5 Goal, +8 4B |
| `trig-3-4` Inverse Funktionen | 6 | 0/6 | 10 | 5/2/1/1/1 | 2/10 | 5/5 | ✅ | +6 Goal, +8 4B |
| `trig-3-5` Sinussatz & Cosinussatz | 6 | 6/6 | 33 | 11/9/7/4/2 | 33/33 | 11/11 | ✅ | — |
| `trig-4-1` Prüfung: Identitäten & Gleichungen | 5 | 5/5 | 37 | 13/7/6/6/5 | 30/37 | 13/13 | ✅ | +7 4B |
| `trig-4-2` Prüfung: Technische Anwendungen | 5 | 5/5 | 37 | 12/7/6/6/6 | 30/37 | 12/12 | ✅ | +7 4B |
| `trig-4-3` Prüfung: Einheitskreis & Gleichungssysteme | 6 | 6/6 | 42 | 13/8/7/7/7 | 35/42 | 13/13 | ✅ | +7 4B |

<a id="vektoren"></a>

### vektoren · Vektoren & Analytische Geometrie

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 12
- Aufgaben: **131** (manuell: 54 · supplemental: 77)
- 4-Block: 18/131 (14 %) 🔴
- MC-wAE: 62/62 (100 %) ✅
- Sub-Goals: 0/62 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Vektoren als Größen mit Betrag und Richtung; Skalar-/Kreuzprodukt; Geraden und Ebenen im Raum.**

_Kräfte, Geschwindigkeiten, Magnetfelder — alles Vektoren. Mechanik und Strömungslehre setzen voraus, dass Komponenten, Projektionen und Kreuzprodukt sitzen._

**Empfohlene Reihenfolge**

1. **Vektorrechnung** — Vektor-Grundrechnung, Betrag, Skalarprodukt (Winkel!), Kreuzprodukt (Flächen/Normalen).
2. **Geraden und Ebenen im Raum** — Parameterdarstellung von Geraden und Ebenen, Schnittpunkte, Abstände, Winkel Gerade–Ebene.
3. **Prüfungsvorbereitung Vektoren** — Klausuraufgaben — meist kombiniert (Kräftegleichgewicht + Abstand + Winkel).

**Das musst du können**

- Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$).
- Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ.
- Hessesche Normalform für Abstand Punkt–Ebene.
- Parameterdarstellung Gerade $\vec x = \vec p + t\vec v$.

**Typische Fehler**

- Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen!
- $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$.
- Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).

**Klausur-Fokus**

- Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt.
- Abstand Punkt–Ebene und Gerade–Gerade.
- Drehmoment $\vec M = \vec r\times\vec F$.

**Lern-Tipps**

- Alle Operationen mit konkreten Zahlen-Vektoren üben — nicht nur symbolisch.
- Rechte-Hand-Regel für Kreuzprodukt körperlich einüben (Daumen, Zeigefinger, Mittelfinger).

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `vek-1-0` Koordinaten, Punkte & Pfeile (Einstieg) | 3 | 0/3 | 5 | 3/0/1/1/0 | 5/5 | 3/3 | ✅ | +3 Goal |
| `vek-1-1` Vektoren — Grundbegriffe | 4 | 0/4 | 11 | 6/2/1/1/1 | 1/11 | 6/6 | ✅ | +4 Goal, +10 4B |
| `vek-1-2` Skalarprodukt | 4 | 0/4 | 12 | 6/3/1/1/1 | 4/12 | 6/6 | ✅ | +4 Goal, +8 4B |
| `vek-1-3` Kreuzprodukt | 4 | 0/4 | 10 | 5/2/1/1/1 | 0/10 | 5/5 | ✅ | +4 Goal, +10 4B |
| `vek-1-4` Kräfte als Vektoren (Prüfung) | 6 | 0/6 | 10 | 5/2/1/1/1 | 1/10 | 5/5 | ✅ | +6 Goal, +9 4B |
| `vek-2-1` Geradengleichung | 6 | 0/6 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +6 Goal, +11 4B |
| `vek-2-2` Ebenengleichung | 6 | 0/6 | 12 | 6/2/2/1/1 | 2/12 | 6/6 | ✅ | +6 Goal, +10 4B |
| `vek-2-3` Abstände und Schnitte | 6 | 0/6 | 12 | 4/5/1/1/1 | 3/12 | 4/4 | ✅ | +6 Goal, +9 4B |
| `vek-2-4` Prüfungsaufgaben Analytische Geometrie | 6 | 0/6 | 13 | 7/3/1/1/1 | 0/13 | 7/7 | ✅ | +6 Goal, +13 4B |
| `vek-3-1` Gemischte Aufgaben Skalar- und Kreuzprodukt | 6 | 0/6 | 13 | 5/4/2/1/1 | 2/13 | 5/5 | ✅ | +6 Goal, +11 4B |
| `vek-3-2` Flächen- und Volumenberechnung | 6 | 0/6 | 11 | 4/4/1/1/1 | 0/11 | 4/4 | ✅ | +6 Goal, +11 4B |
| `vek-3-3` Technische Anwendungen | 5 | 0/5 | 11 | 5/3/1/1/1 | 0/11 | 5/5 | ✅ | +5 Goal, +11 4B |

<a id="ableitung"></a>

### ableitung · Differentialrechnung

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 5 (Prüfung am Ende ✅)
- Lessons: 18
- Aufgaben: **218** (manuell: 113 · supplemental: 105)
- 4-Block: 51/218 (23 %) 🔴
- MC-wAE: 115/115 (100 %) ✅
- Sub-Goals: 0/90 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Ableitung als lokale Änderungsrate und Tangentensteigung; Regeln, Kurvendiskussion, Grenzwerte.**

_Ohne Ableitung keine Extremwert-, Geschwindigkeits- oder Optimierungsaufgabe. Ingenieursmathe beginnt hier._

**Empfohlene Reihenfolge**

1. **Grundlagen der Differentialrechnung** — Ableitungsbegriff, geometrische Bedeutung (Tangente), Potenz-, Summenregel.
2. **Ableitungsregeln im Detail** — Produkt-, Quotienten-, Kettenregel — DAS Fundament. Viel üben!
3. **Kurvendiskussion** — Kurvendiskussion: Monotonie, Extrema, Wendepunkte, Krümmung.
4. **Grenzwerte und Stetigkeit** — Grenzwerte und Stetigkeit, l'Hospital. Wichtig für DGL und Reihen.
5. **Prüfungsaufgaben** — Klausuren: oft Kurvendiskussion oder Optimierungsproblem (Extremwertaufgabe mit Nebenbedingung).

**Das musst du können**

- Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig.
- Kettenregel: äußere mal innere Ableitung.
- Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen.
- l'Hospital nur bei $0/0$ oder $\infty/\infty$ anwenden.

**Typische Fehler**

- Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc.
- Produktregel mit Summenregel verwechselt.
- $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!).
- $\ln$ und $\log$ verwechselt.

**Klausur-Fokus**

- Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte).
- Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe).
- l'Hospital für $0/0$-Grenzwerte.

**Lern-Tipps**

- Mindestens 20 Ableitungen mit Kettenregel üben, bis sie ohne Nachdenken laufen.
- Bei Kurvendiskussion IMMER Tabellenskizze machen — reduziert Vorzeichenfehler massiv.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `abl-1-1` Was ist eine Ableitung? | 4 | 0/4 | 12 | 7/2/1/1/1 | 4/12 | 7/7 | ✅ | +4 Goal, +8 4B |
| `abl-1-2` Potenzregel und Summenregel | 4 | 0/4 | 13 | 8/2/1/1/1 | 6/13 | 8/8 | ✅ | +4 Goal, +7 4B |
| `abl-1-3` Ableitungen elementarer Funktionen | 4 | 0/4 | 13 | 8/2/1/1/1 | 5/13 | 8/8 | ✅ | +4 Goal, +8 4B |
| `abl-1-4` Kettenregel | 4 | 0/4 | 13 | 8/2/1/1/1 | 5/13 | 8/8 | ✅ | +4 Goal, +8 4B |
| `abl-1-5` Extremwerte und Kurvendiskussion | 6 | 0/6 | 12 | 7/2/1/1/1 | 5/12 | 7/7 | ✅ | +6 Goal, +7 4B |
| `abl-2-1` Produktregel | 5 | 0/5 | 13 | 7/3/1/1/1 | 6/13 | 7/7 | ✅ | +5 Goal, +7 4B |
| `abl-2-2` Quotientenregel | 5 | 0/5 | 13 | 8/2/1/1/1 | 5/13 | 8/8 | ✅ | +5 Goal, +8 4B |
| `abl-2-3` Kettenregel — Schritt für Schritt | 5 | 0/5 | 14 | 8/3/1/1/1 | 7/14 | 8/8 | ✅ | +5 Goal, +7 4B |
| `abl-2-4` Gemischte Regeln | 5 | 0/5 | 13 | 7/3/1/1/1 | 6/13 | 7/7 | ✅ | +5 Goal, +7 4B |
| `abl-3-1` Monotonie und Extremwerte | 5 | 0/5 | 13 | 6/3/2/1/1 | 0/13 | 6/6 | ✅ | +5 Goal, +13 4B |
| `abl-3-2` Krümmung und Wendepunkte | 5 | 0/5 | 12 | 6/3/1/1/1 | 0/12 | 6/6 | ✅ | +5 Goal, +12 4B |
| `abl-3-3` Vollständige Kurvendiskussion | 5 | 0/5 | 12 | 5/3/1/1/2 | 0/12 | 5/5 | ✅ | +5 Goal, +12 4B |
| `abl-3-4` Prüfungsaufgaben Kurvendiskussion | 5 | 0/5 | 13 | 6/3/1/2/1 | 0/13 | 6/6 | ✅ | +5 Goal, +13 4B |
| `abl-5-1` Grenzwerte von Funktionen | 6 | 0/6 | 11 | 4/3/2/1/1 | 2/11 | 4/4 | ✅ | +6 Goal, +9 4B |
| `abl-5-2` Stetigkeit von Funktionen | 6 | 0/6 | 8 | 3/2/1/1/1 | 0/8 | 3/3 | ✅ | +6 Goal, +8 4B |
| `abl-4-1` Prüfung: Ableitungsregeln | 5 | 0/5 | 11 | 6/2/2/1/0 | 0/11 | 6/6 | ✅ | +5 Goal, +11 4B |
| `abl-4-2` Prüfung: Kurvendiskussion & Anwendungen | 5 | 0/5 | 11 | 7/2/1/1/0 | 0/11 | 7/7 | ✅ | +5 Goal, +11 4B |
| `abl-4-3` Prüfung: Technische Optimierung & Newton-Verfahren | 6 | 0/6 | 11 | 4/3/2/1/1 | 0/11 | 4/4 | ✅ | +6 Goal, +11 4B |

<a id="integralrechnung"></a>

### integralrechnung · Integralrechnung

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 4 (Prüfung am Ende ✅)
- Lessons: 16
- Aufgaben: **203** (manuell: 94 · supplemental: 109)
- 4-Block: 75/203 (37 %) 🔴
- MC-wAE: 85/85 (100 %) ✅
- Sub-Goals: 5/79 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Integral als Stammfunktion und Fläche unter der Kurve; Techniken (Substitution, Partielle Integration); Anwendungen.**

_Wegstrecke aus Geschwindigkeit, Arbeit aus Kraft, Volumen aus Dichte — all das sind Integrale. Ohne Integralrechnung keine Physik-basierten Probleme._

**Empfohlene Reihenfolge**

1. **Stammfunktionen & Grundintegrale** — Stammfunktion, Grundintegrale, bestimmtes vs. unbestimmtes Integral.
2. **Integrationstechniken** — Substitution, Partielle Integration, Partialbruchzerlegung — die drei Klausur-Techniken.
3. **Anwendungen** — Anwendungen: Flächen zwischen Kurven, Volumen von Rotationskörpern, Bogenlänge.
4. **Prüfungsaufgaben** — Prüfungsmix mit mehrstufigen Techniken.

**Das musst du können**

- Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$.
- Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$.
- Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$.
- Hauptsatz der Differential- und Integralrechnung: $\int_a^b f(x)\,dx = F(b)-F(a)$.

**Typische Fehler**

- Integrationskonstante $+C$ bei unbestimmten Integralen vergessen.
- Bei Substitution das $du$ nicht konsequent mitgeführt.
- Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$).
- Flächen-Vorzeichen bei Flächen unter der x-Achse.

**Klausur-Fokus**

- Partielle Integration mit $\ln$ oder $e^x$.
- Substitution mit trigonometrischen Funktionen.
- Fläche zwischen zwei Kurven (Schnittpunkte finden!).

**Lern-Tipps**

- Integrationstechniken sind Muster-Erkennung — erst lernen, welches Verfahren zu welchem Integraltyp passt.
- Probe durch Ableiten: $F'(x)$ muss den Integranden ergeben.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `int-1-1` Stammfunktion — das Umkehren der Ableitung | 3 | 0/3 | 12 | 6/2/1/2/1 | 5/12 | 6/6 | ✅ | +3 Goal, +7 4B |
| `int-1-2` Grundintegrale | 4 | 0/4 | 13 | 7/2/1/2/1 | 4/13 | 7/7 | ✅ | +4 Goal, +9 4B |
| `int-1-3` Summenregel & Faktorregel | 4 | 0/4 | 12 | 6/3/1/1/1 | 5/12 | 6/6 | ✅ | +4 Goal, +7 4B |
| `int-1-4` Das bestimmte Integral | 4 | 0/4 | 12 | 3/6/1/1/1 | 3/12 | 3/3 | ✅ | +4 Goal, +9 4B |
| `int-1-5` Hauptsatz der Differential- und Integralrechnung | 5 | 0/5 | 11 | 5/3/1/1/1 | 3/11 | 5/5 | ✅ | +5 Goal, +8 4B |
| `int-2-1` Substitution | 6 | 0/6 | 12 | 7/2/1/1/1 | 4/12 | 7/7 | ✅ | +6 Goal, +8 4B |
| `int-2-2` Partielle Integration | 5 | 0/5 | 12 | 7/2/1/1/1 | 4/12 | 7/7 | ✅ | +5 Goal, +8 4B |
| `int-2-3` Partialbruchzerlegung | 6 | 0/6 | 11 | 5/3/1/1/1 | 4/11 | 5/5 | ✅ | +6 Goal, +7 4B |
| `int-2-4` Gemischte Übungen | 5 | 0/5 | 13 | 6/4/1/1/1 | 6/13 | 6/6 | ✅ | +5 Goal, +7 4B |
| `int-3-1` Flächenberechnung | 6 | 0/6 | 12 | 4/5/1/1/1 | 4/12 | 4/4 | ✅ | +6 Goal, +8 4B |
| `int-3-2` Rotationskörper | 5 | 0/5 | 11 | 3/5/1/1/1 | 2/11 | 3/3 | ✅ | +5 Goal, +9 4B |
| `int-3-3` Technische Anwendungen | 5 | 0/5 | 11 | 4/4/1/1/1 | 3/11 | 4/4 | ✅ | +5 Goal, +8 4B |
| `int-3-4` Bogenlänge & Durchschnittswert | 5 | 5/5 | 28 | 6/11/5/4/2 | 28/28 | 6/6 | ✅ | — |
| `int-4-1` Prüfung: Integrationstechniken | 5 | 0/5 | 11 | 7/2/2/0/0 | 0/11 | 7/7 | ✅ | +5 Goal, +11 4B |
| `int-4-2` Prüfung: Anwendungen der Integralrechnung | 5 | 0/5 | 11 | 6/3/2/0/0 | 0/11 | 6/6 | ✅ | +5 Goal, +11 4B |
| `int-4-3` Prüfung: Uneigentliche & numerische Integrale | 6 | 0/6 | 11 | 3/4/2/1/1 | 0/11 | 3/3 | ✅ | +6 Goal, +11 4B |

<a id="lineare-algebra"></a>

### lineare-algebra · Lineare Algebra

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 12
- Aufgaben: **138** (manuell: 75 · supplemental: 63)
- 4-Block: 0/138 (0 %) 🔴
- MC-wAE: 68/68 (100 %) ✅
- Sub-Goals: 0/66 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Matrizen, Determinanten, lineare Gleichungssysteme, Eigenwerte.**

_LGS stecken in jeder FEM-Simulation, Ausgleichsrechnung, Signalverarbeitung. Eigenwerte sind DIE Kern-Idee für Modalanalyse und Stabilität._

**Empfohlene Reihenfolge**

1. **Matrizen & Determinanten** — Matrizen-Rechnung, Determinante, Inverse, Rang.
2. **Lineare Gleichungssysteme** — LGS mit Gauß-Verfahren, Lösbarkeitsbedingung, Eigenwertproblem $\det(A-\lambda I)=0$.
3. **Prüfungsaufgaben** — Klausur: Determinante, LGS, Eigenwert/-vektor.

**Das musst du können**

- Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen.
- Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile.
- $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar.
- Eigenwerte aus $\det(A-\lambda I)=0$, Eigenvektoren aus $(A-\lambda I)\vec v=0$.

**Typische Fehler**

- Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$).
- Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch.
- Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.

**Klausur-Fokus**

- LGS mit Gauß-Verfahren und Probe.
- 2×2- oder 3×3-Determinante berechnen.
- Eigenwerte und Eigenvektoren für 2×2-Matrix.

**Lern-Tipps**

- Jedes LGS mit Einsetz-Probe abschließen — deckt Rechenfehler zu 90 % auf.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `la-1-1` Was ist eine Matrix? | 4 | 0/4 | 12 | 7/2/1/1/1 | 0/12 | 7/7 | ✅ | +4 Goal, +12 4B |
| `la-1-2` Matrizenrechnung | 4 | 0/4 | 13 | 6/4/1/1/1 | 0/13 | 6/6 | ✅ | +4 Goal, +13 4B |
| `la-1-3` Transponierte und Inverse | 6 | 0/6 | 12 | 6/3/1/1/1 | 0/12 | 6/6 | ✅ | +6 Goal, +12 4B |
| `la-1-4` Determinanten | 6 | 0/6 | 12 | 4/5/1/1/1 | 0/12 | 4/4 | ✅ | +6 Goal, +12 4B |
| `la-1-5` Eigenwerte und Eigenvektoren | 6 | 0/6 | 11 | 5/3/1/1/1 | 0/11 | 5/5 | ✅ | +6 Goal, +11 4B |
| `la-2-1` LGS in Matrixform | 5 | 0/5 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +5 Goal, +11 4B |
| `la-2-2` Gauss-Algorithmus | 6 | 0/6 | 12 | 5/4/1/1/1 | 0/12 | 5/5 | ✅ | +6 Goal, +12 4B |
| `la-2-3` Lösbarkeit von LGS | 6 | 0/6 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +6 Goal, +11 4B |
| `la-2-4` Cramersche Regel & Anwendungen | 5 | 0/5 | 11 | 4/4/1/1/1 | 0/11 | 4/4 | ✅ | +5 Goal, +11 4B |
| `la-3-1` Prüfung: Matrizen & Determinanten | 6 | 0/6 | 11 | 7/2/2/0/0 | 0/11 | 7/7 | ✅ | +6 Goal, +11 4B |
| `la-3-2` Prüfung: LGS & Eigenwerte | 6 | 0/6 | 11 | 8/1/2/0/0 | 0/11 | 8/8 | ✅ | +6 Goal, +11 4B |
| `la-3-3` Prüfung: Diagonalisierung & technische Anwendungen | 6 | 0/6 | 11 | 4/4/1/1/1 | 0/11 | 4/4 | ✅ | +6 Goal, +11 4B |

<a id="differentialgleichungen"></a>

### differentialgleichungen · Differentialgleichungen

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 10
- Aufgaben: **230** (manuell: 61 · supplemental: 169)
- 4-Block: 145/230 (63 %) 🟡
- MC-wAE: 93/93 (100 %) ✅
- Sub-Goals: 24/57 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Gewöhnliche DGL: Trennbare, lineare erster Ordnung, lineare zweiter Ordnung mit konstanten Koeffizienten.**

_Physik spricht DGL: Schwingungen, Abkühlung, Population, RC-Glieder. DGL-Sicherheit ist Voraussetzung für Regelungstechnik und Schwingungslehre._

**Empfohlene Reihenfolge**

1. **Grundbegriffe & einfache DGL** — Grundbegriffe (Ordnung, AWP), trennbare und lineare DGL 1. Ordnung.
2. **Fortgeschrittene Methoden** — Lineare DGL 2. Ordnung mit konstanten Koeffizienten (homogen + partikulär).
3. **Prüfungsaufgaben** — Klausuren mit Anfangswertproblem und Probe.

**Das musst du können**

- Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$.
- Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$.
- Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung.
- Drei Fälle: reelle verschiedene Wurzeln / doppelte Wurzel / komplexe Wurzeln (Schwingung).

**Typische Fehler**

- Anfangsbedingung vergessen — nur allgemeine Lösung angegeben.
- Partikulärlösung fehlt bei inhomogener DGL.
- Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.

**Klausur-Fokus**

- Lineare DGL 1. Ordnung mit AWP.
- Gedämpfte Schwingung ($my''+cy'+ky=0$).
- Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

**Lern-Tipps**

- DGL-Typ IMMER zuerst klassifizieren, bevor der Ansatz gewählt wird.
- Probe durch Ableiten und Einsetzen — deckt die häufigsten Fehler auf.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `dgl-1-1` Was ist eine Differentialgleichung? | 5 | 0/5 | 11 | 5/2/2/1/1 | 0/11 | 5/5 | ✅ | +5 Goal, +11 4B |
| `dgl-1-2` Trennung der Variablen | 5 | 0/5 | 11 | 5/3/1/1/1 | 0/11 | 5/5 | ✅ | +5 Goal, +11 4B |
| `dgl-1-3` Lineare DGL 1. Ordnung | 6 | 0/6 | 12 | 6/3/1/1/1 | 0/12 | 6/6 | ✅ | +6 Goal, +12 4B |
| `dgl-1-4` DGL 2. Ordnung mit konstanten Koeffizienten | 6 | 0/6 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +6 Goal, +11 4B |
| `dgl-2-1` Variation der Konstanten | 5 | 0/5 | 11 | 6/2/1/1/1 | 0/11 | 6/6 | ✅ | +5 Goal, +11 4B |
| `dgl-2-2` DGL-Systeme | 6 | 6/6 | 40 | 16/9/8/4/3 | 33/40 | 16/16 | ✅ | +7 4B |
| `dgl-2-3` Technische Anwendungen | 6 | 0/6 | 11 | 5/2/1/2/1 | 0/11 | 5/5 | ✅ | +6 Goal, +11 4B |
| `dgl-3-1` Prüfung: DGL 1. Ordnung | 6 | 6/6 | 41 | 19/8/8/3/3 | 41/41 | 19/19 | ✅ | — |
| `dgl-3-2` Prüfung: DGL 2. Ordnung & Anwendungen | 6 | 6/6 | 41 | 15/10/8/4/4 | 30/41 | 15/15 | ✅ | +11 4B |
| `dgl-3-3` Prüfung: Systeme & technische Modellbildung | 6 | 6/6 | 41 | 10/10/8/6/7 | 41/41 | 10/10 | ✅ | — |

<a id="komplexe-zahlen"></a>

### komplexe-zahlen · Komplexe Zahlen

- Phase: **2. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 4 (Prüfung am Ende ✅)
- Lessons: 9
- Aufgaben: **81** (manuell: 81 · supplemental: 0)
- 4-Block: 0/81 (0 %) 🔴
- MC-wAE: 38/38 (100 %) ✅
- Sub-Goals: 0/48 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Zahlen der Form $z=a+bi$; Kartesische und Polar-/Euler-Form; Rechnen in beiden Darstellungen.**

_Grundlage für Wechselstromtechnik, Schwingungen, Fourier, Laplace. Ohne komplexe Zahlen keine saubere Schwingungs- und Regelungstechnik._

**Empfohlene Reihenfolge**

1. **Kartesische Form** — Kartesische Form $a+bi$: Addition, Subtraktion, Multiplikation, Konjugation.
2. **Polarform, Euler & Rechnen** — Polarform $re^{i\varphi}$ und Euler-Formel: Multiplikation/Division elegant.
3. **Potenzen & Wurzeln** — Potenzen (de Moivre) und $n$-te Wurzeln.
4. **Prüfung** — Klausuraufgaben mit Formumwandlung und Anwendungen.

**Das musst du können**

- $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$.
- Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$.
- Multiplikation in Polarform: Beträge mal, Argumente addieren.
- Division: konjugiert Komplexen des Nenners erweitern.

**Typische Fehler**

- Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen.
- Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück.
- $|z|^2 = z\bar z$ vergessen.

**Klausur-Fokus**

- Polar- ↔ Kartesisch umrechnen.
- Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$.
- $n$-te Wurzeln auf dem Einheitskreis darstellen.

**Lern-Tipps**

- Gaußsche Zahlenebene immer mitskizzieren — verhindert Quadrantenfehler.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `komz-1-1` Imaginäre Einheit & Gaußsche Zahlenebene | 4 | 0/4 | 9 | 5/1/1/1/1 | 0/9 | 5/5 | ✅ | +4 Goal, +9 4B |
| `komz-1-2` Rechnen in kartesischer Form (+, −, ·, :) | 4 | 0/4 | 9 | 5/2/1/1/0 | 0/9 | 5/5 | ✅ | +4 Goal, +9 4B |
| `komz-2-1` Betrag, Argument, Polarform | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `komz-2-2` Euler-Formel & Exponentialdarstellung | 6 | 0/6 | 9 | 5/2/1/1/0 | 0/9 | 5/5 | ✅ | +6 Goal, +9 4B |
| `komz-3-1` Potenzen — Formel von de Moivre | 5 | 0/5 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |
| `komz-3-2` Wurzeln — alle n-ten Wurzeln finden | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `komz-pruefung-1` Prüfung: Anwendungen & Gesamtaufgaben | 6 | 0/6 | 9 | 4/3/1/0/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `komz-pruefung-2` Prüfung: Polarform & Multiplikation | 5 | 0/5 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |
| `komz-pruefung-3` Prüfung: Wurzeln & Gleichungen | 6 | 0/6 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +6 Goal, +9 4B |

<a id="reihen-folgen"></a>

### reihen-folgen · Reihen & Folgen

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 2 (Prüfung am Ende ✅)
- Lessons: 5
- Aufgaben: **45** (manuell: 45 · supplemental: 0)
- 4-Block: 0/45 (0 %) 🔴
- MC-wAE: 19/19 (100 %) ✅
- Sub-Goals: 0/26 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Folgen, Reihen, Konvergenzkriterien und Taylor-Entwicklung.**

_Approximation komplizierter Funktionen durch Polynome (Taylor) ist die Basis numerischer Verfahren und ingenieursmäßiger Abschätzungen._

**Empfohlene Reihenfolge**

1. **Folgen, Reihen & Konvergenz** — Folgengrenzwert, Monotonie, Reihenkonvergenz, Standardreihen (geometrisch, harmonisch).
2. **Prüfung** — Prüfung: Konvergenzkriterien anwenden und Standard-Taylor-Reihen aufstellen.

**Das musst du können**

- Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$.
- Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$.
- Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz.
- Taylor-Reihen von $e^x$, $\sin x$, $\cos x$ um 0 auswendig.

**Typische Fehler**

- Konvergenzkriterium für $|q|=1$ falsch bewertet.
- Taylor-Entwicklungspunkt nicht mit angegeben.
- Restglied ignoriert.

**Klausur-Fokus**

- Konvergenz einer Reihe per Quotientenkriterium.
- Taylor-Polynom 3. Grades an gegebener Stelle.

**Lern-Tipps**

- Die drei Grund-Taylor-Reihen ($e^x$, $\sin$, $\cos$) auswendig — fast alles andere lässt sich daraus ableiten.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `rf-1-1` Folgen und Grenzwerte | 5 | 0/5 | 9 | 4/1/2/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |
| `rf-1-2` Taylor-Polynome | 4 | 0/4 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +4 Goal, +9 4B |
| `rf-pruefung-1` Prüfung: Taylor, Konvergenz, Restglied | 6 | 0/6 | 9 | 3/2/2/1/1 | 0/9 | 3/3 | ✅ | +6 Goal, +9 4B |
| `rf-pruefung-2` Prüfung: Konvergenzkriterien & Potenzreihen | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `rf-pruefung-3` Prüfung: Taylor-Restglied & Näherungen | 5 | 0/5 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |

<a id="mehrdim-analysis"></a>

### mehrdim-analysis · Mehrdim. Analysis

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 2 (Prüfung am Ende ✅)
- Lessons: 5
- Aufgaben: **45** (manuell: 45 · supplemental: 0)
- 4-Block: 0/45 (0 %) 🔴
- MC-wAE: 21/21 (100 %) ✅
- Sub-Goals: 0/27 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Funktionen mehrerer Variablen: Partielle Ableitungen, Gradient, Hesse-Matrix, Extrema.**

_FEM, CFD, Optimierung: alle mehrdimensional. Gradient und Hesse entscheiden, ob ein Punkt Minimum, Maximum oder Sattel ist._

**Empfohlene Reihenfolge**

1. **Partielle Ableitungen & Gradient** — Partielle Ableitungen, Gradient, Hesse-Matrix, Extrema, Richtungsableitung.
2. **Prüfung** — Prüfung: Extremwert-Aufgaben mit und ohne Nebenbedingung.

**Das musst du können**

- Partielle Ableitung: alle anderen Variablen als Konstante behandeln.
- Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs.
- Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend).
- Richtungsableitung: $D_{\vec u}f = \nabla f\cdot\vec u$ mit normiertem $\vec u$.

**Typische Fehler**

- Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet.
- Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum).
- Richtungsvektor bei $D_{\vec u}$ nicht normiert.

**Klausur-Fokus**

- Extrema einer Funktion $f(x,y)$.
- Lagrange-Multiplikatoren bei Nebenbedingung.
- Tangentialebene in einem Punkt aufstellen.

**Lern-Tipps**

- 2D-Oberfläche skizzieren (z. B. Konturplot) — visualisiert Minima/Maxima sofort.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `mdim-1-1` Partielle Ableitung verstehen | 5 | 0/5 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |
| `mdim-1-2` Hesse-Matrix und Lagrange-Multiplikatoren | 5 | 0/5 | 9 | 5/1/1/1/1 | 0/9 | 5/5 | ✅ | +5 Goal, +9 4B |
| `mdim-pruefung-1` Prüfung: Extrema, Fehlerfortpflanzung | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `mdim-pruefung-2` Prüfung: Fehlerfortpflanzung & totales Differential | 5 | 0/5 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |
| `mdim-pruefung-3` Prüfung: Lagrange & Gesamtaufgaben | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |

<a id="numerik"></a>

### numerik · Numerische Mathematik

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: wahl
- Units: 2 (Prüfung am Ende ✅)
- Lessons: 5
- Aufgaben: **45** (manuell: 45 · supplemental: 0)
- 4-Block: 0/45 (0 %) 🔴
- MC-wAE: 18/18 (100 %) ✅
- Sub-Goals: 0/26 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Numerische Verfahren: Nullstellensuche (Newton, Bisektion), Integration (Trapez, Simpson), Fehler.**

_Die meisten ingenieursmäßigen Probleme sind analytisch nicht lösbar. Numerik liefert approximative Lösungen mit kontrollierbarem Fehler._

**Empfohlene Reihenfolge**

1. **Nullstellen & Integration** — Newton-Verfahren, Bisektion, Trapez-, Simpson-Regel, Fehlerabschätzung.
2. **Prüfung** — Prüfung: Verfahren anwenden und Konvergenzrate kennen.

**Das musst du können**

- Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent.
- Bisektion: sicher aber linear, braucht Vorzeichenwechsel.
- Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$.
- Simpson: $I\approx h/3\,[y_0+4y_1+2y_2+\ldots+y_n]$, Fehler $O(h^4)$.

**Typische Fehler**

- Bei Newton die Ableitung falsch eingesetzt.
- Simpson braucht gerade Anzahl Teilintervalle — oft übersehen.
- Konvergenz von Newton nicht geprüft (kann oszillieren).

**Klausur-Fokus**

- Newton-Iteration für zwei Schritte mit Startwert.
- Simpson-Regel mit $n=2$ oder $n=4$.
- Fehlerordnung begründen.

**Lern-Tipps**

- Fehler halbiert sich mit $(h/2)^{\text{Ordnung}}$ — Zusammenhang explizit üben.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `num-1-1` Newton-Verfahren | 4 | 0/4 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +4 Goal, +9 4B |
| `num-1-2` Bisektion und numerische Integration | 5 | 0/5 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |
| `num-pruefung-1` Prüfung: Numerische Methoden kombiniert | 6 | 0/6 | 9 | 4/2/1/1/1 | 0/9 | 4/4 | ✅ | +6 Goal, +9 4B |
| `num-pruefung-2` Prüfung: Trapez, Simpson & Fehlerordnung | 6 | 0/6 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +6 Goal, +9 4B |
| `num-pruefung-3` Prüfung: Kombinierte Aufgaben & Abbruchkriterien | 5 | 0/5 | 9 | 4/1/2/1/1 | 0/9 | 4/4 | ✅ | +5 Goal, +9 4B |

<a id="statistik"></a>

### statistik · Statistik & Wahrscheinlichkeit

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: wahl
- Units: 2 (Prüfung am Ende ✅)
- Lessons: 6
- Aufgaben: **54** (manuell: 54 · supplemental: 0)
- 4-Block: 0/54 (0 %) 🔴
- MC-wAE: 18/18 (100 %) ✅
- Sub-Goals: 0/29 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Zufallsvariablen, Verteilungen, Erwartungswert, Varianz, Konfidenzintervall, Hypothesentests.**

_Qualitätskontrolle, Messunsicherheit, Signifikanz — überall Statistik. Ohne Stochastik kein seriöser Ingenieur._

**Empfohlene Reihenfolge**

1. **Zufallsvariablen & Verteilungen** — Diskrete/stetige Zufallsvariablen, Erwartungswert, Varianz, Normalverteilung.
2. **Prüfung** — Prüfung: Konfidenzintervall, Standardwerte der Normalverteilung.

**Das musst du können**

- Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral.
- Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$.
- Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %.
- Standardisierung $Z=(X-\mu)/\sigma$ und Tabelle $\Phi(z)$.

**Typische Fehler**

- $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT.
- Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung".
- Einseitiger vs. zweiseitiger Test verwechselt.

**Klausur-Fokus**

- Wahrscheinlichkeit bei Normalverteilung mit Standardisierung.
- Erwartungswert und Varianz einer diskreten Verteilung.
- 95%-Konfidenzintervall für Mittelwert.

**Lern-Tipps**

- Standard-$\Phi$-Werte ($z=1{,}0$, $1{,}5$, $2{,}0$, $2{,}5$) auswendig — spart Tabellenblättern.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `stat-1-1` Erwartungswert und Varianz | 4 | 0/4 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +4 Goal, +9 4B |
| `stat-1-2` Normalverteilung | 5 | 0/5 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |
| `stat-1-3` Hypothesentest und Konfidenzintervall | 5 | 0/5 | 9 | 3/2/2/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |
| `stat-pruefung-1` Prüfung: Schätzung & Hypothesentest | 5 | 0/5 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |
| `stat-pruefung-2` Prüfung: Normalverteilung & Standardisierung | 5 | 0/5 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |
| `stat-pruefung-3` Prüfung: Konfidenzintervall & Gesamtaufgaben | 5 | 0/5 | 9 | 3/3/1/1/1 | 0/9 | 3/3 | ✅ | +5 Goal, +9 4B |

<a id="fourier-laplace"></a>

### fourier-laplace · Fourier & Laplace

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 7
- Aufgaben: **105** (manuell: 56 · supplemental: 49)
- 4-Block: 0/105 (0 %) 🔴
- MC-wAE: 41/41 (100 %) ✅
- Sub-Goals: 0/38 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Fourier-Reihen (periodische Signale in Harmonische zerlegen) und Laplace (Zeit- ↔ Bildbereich).**

_Signalverarbeitung, Regelungstechnik, Elektrotechnik. Laplace vereinfacht DGL zu Algebra, Fourier zeigt Frequenz-Inhalt._

**Empfohlene Reihenfolge**

1. **Fourier-Reihen** — Fourier-Reihen: $a_n$, $b_n$ berechnen, gerade/ungerade Funktionen, Symmetrien.
2. **Laplace-Transformation** — Laplace: Korrespondenzen, Sprung-/Impulsantworten, inverse Transformation.
3. **Prüfungsaufgaben** — Prüfung mit Anwendung auf RC-/RL-/RLC-Glieder.

**Das musst du können**

- Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$.
- Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$.
- Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$.
- Rücktransformation per Partialbruchzerlegung.

**Typische Fehler**

- Periodendauer $T$ bei Integralen falsch gewählt.
- Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen.
- Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.

**Klausur-Fokus**

- Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals.
- Sprungantwort eines PT1-Glieds per Laplace.
- Rücktransformation einer Partialbruchzerlegung.

**Lern-Tipps**

- Korrespondenztabelle zwei Wochen vor der Prüfung täglich wiederholen.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `fl-1-1` Fourier-Reihen — Grundbegriffe | 5 | 0/5 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +5 Goal, +15 4B |
| `fl-1-2` Fourier-Reihe Rechteckimpuls | 4 | 0/4 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +4 Goal, +15 4B |
| `fl-1-3` Fourier-Transformation | 6 | 0/6 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +6 Goal, +15 4B |
| `fl-2-1` Laplace-Grundlagen | 5 | 0/5 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +5 Goal, +15 4B |
| `fl-2-2` Laplace zur DGL-Lösung | 6 | 0/6 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +6 Goal, +15 4B |
| `fl-3-1` Fourier Prüfungsaufgaben | 6 | 0/6 | 15 | 5/4/2/2/2 | 0/15 | 5/5 | ✅ | +6 Goal, +15 4B |
| `fl-3-2` Laplace Prüfungsaufgaben | 6 | 0/6 | 15 | 6/3/2/2/2 | 0/15 | 6/6 | ✅ | +6 Goal, +15 4B |

<a id="technische-mechanik"></a>

### technische-mechanik · Technische Mechanik

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 4 (Prüfung am Ende ✅)
- Lessons: 16
- Aufgaben: **244** (manuell: 59 · supplemental: 185)
- 4-Block: 168/244 (69 %) 🟡
- MC-wAE: 56/56 (100 %) ✅
- Sub-Goals: 24/76 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Statik (Kräftegleichgewicht) und Dynamik (Newtonsche Gesetze, Energie) — die klassischen Grundlagen des Maschinenbaus.**

_Mechanik ist das Herzfach im Maschinenbau-Bachelor und Basis für Festigkeitslehre, Maschinenelemente und Dynamik._

**Empfohlene Reihenfolge**

1. **Einheiten & Dimensionsanalyse (Einstieg)** — SI-Einheiten, Dimensionsanalyse. Sauberes Einheiten-Arbeiten verhindert 80 % aller Klausurfehler.
2. **Statik** — Statik: Kräftegleichgewicht, Freikörperbild, Lagerreaktionen, Fachwerke, Schnittgrößen.
3. **Dynamik** — Dynamik: Newton $F=ma$, Energie- und Impulserhaltung, Rotation.
4. **Prüfungsaufgaben** — Klausurmix mit Auflagerreaktionen, Schnittgrößen, Energieaufgaben.

**Das musst du können**

- Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen.
- Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$.
- Newtonsche Axiome und $F=ma$ vektoriell anwenden.
- Energieerhaltung $E_{\text{kin}}+E_{\text{pot}}=\text{const}$.

**Typische Fehler**

- Lagerreaktionen im FKB vergessen.
- Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten.
- Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie.
- Masse vs. Gewichtskraft ($G=mg$) vermischt.

**Klausur-Fokus**

- Auflagerreaktionen mit Streckenlast + Einzellast.
- Schnittgrößenverlauf bei Balken.
- Energieerhaltung bei schiefer Ebene / Pendel.

**Lern-Tipps**

- Jede Aufgabe beginnt mit einem sauberen Freikörperbild — 5 Minuten Zeichnen erspart 30 Minuten Rechnen.
- Plausibilität: Summe der Lagerreaktionen in y muss der Summe aller Lasten entsprechen.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `mech-0-1` SI-Basiseinheiten & Präfixe | 3 | 0/3 | 5 | 1/2/1/1/0 | 5/5 | 1/1 | ✅ | +3 Goal |
| `mech-0-2` Abgeleitete Einheiten (N, J, Pa, W) | 4 | 0/4 | 5 | 1/2/1/1/0 | 5/5 | 1/1 | ✅ | +4 Goal |
| `mech-0-3` Dimensionsanalyse — Einheitencheck | 4 | 4/4 | 24 | 5/7/5/3/4 | 24/24 | 5/5 | ✅ | — |
| `mech-1-1` Kräfte und Freikörperbild | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `mech-1-2` Momente und Hebelarm | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `mech-1-3` Schnittkräfte N(x), Q(x), M(x) | 5 | 0/5 | 5 | 2/2/1/0/0 | 0/5 | 2/2 | ✅ | +5 Goal, +5 4B |
| `mech-1-4` Reibung | 5 | 5/5 | 28 | 7/9/6/3/3 | 27/28 | 7/7 | ✅ | +1 4B |
| `mech-1-5` Schwerpunkt | 5 | 5/5 | 39 | 7/16/7/5/4 | 39/39 | 7/7 | ✅ | — |
| `mech-2-1` Newtonsche Gesetze | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `mech-2-2` Arbeit und Energie | 6 | 0/6 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +6 Goal, +10 4B |
| `mech-2-3` Kinematik | 6 | 0/6 | 5 | 0/5/0/0/0 | 0/5 | — | ✅ | +6 Goal, +5 4B |
| `mech-2-4` Schwingungen | 5 | 5/5 | 40 | 11/14/6/5/4 | 40/40 | 11/11 | ✅ | — |
| `mech-2-5` Dynamik starrer Körper | 5 | 5/5 | 28 | 5/13/5/3/2 | 28/28 | 5/5 | ✅ | — |
| `mech-3-1` Statik: Prüfungsaufgaben | 5 | 0/5 | 11 | 3/5/1/1/1 | 0/11 | 3/3 | ✅ | +5 Goal, +11 4B |
| `mech-3-2` Dynamik: Prüfungsaufgaben | 5 | 0/5 | 10 | 2/5/1/1/1 | 0/10 | 2/2 | ✅ | +5 Goal, +10 4B |
| `mech-3-3` Reibung, Kinematik & Schwingungen | 5 | 0/5 | 4 | 0/4/0/0/0 | 0/4 | — | ✅ | +5 Goal, +4 4B |

<a id="festigkeitslehre"></a>

### festigkeitslehre · Festigkeitslehre

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 11
- Aufgaben: **150** (manuell: 35 · supplemental: 115)
- 4-Block: 92/150 (61 %) 🟡
- MC-wAE: 36/36 (100 %) ✅
- Sub-Goals: 16/54 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Spannung und Dehnung in Bauteilen: Zug/Druck, Biegung, Torsion. Hooke’sches Gesetz.**

_Jedes Bauteil muss Kräfte aufnehmen ohne zu versagen. Festigkeitslehre sagt, wie dick/dünn es sein darf._

**Empfohlene Reihenfolge**

1. **Spannung und Dehnung** — Normal- und Schubspannung, Dehnung, Hooke, Querkontraktion.
2. **Biegung und Torsion** — Biegung: Flächenträgheitsmoment, $\sigma = M/W$; Torsion: $\tau=T/W_t$.
3. **Prüfungsaufgaben** — Prüfungen zu kombinierter Belastung und Sicherheitsnachweis.

**Das musst du können**

- Normalspannung $\sigma=F/A$ in MPa.
- Hooke: $\sigma=E\varepsilon$.
- Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$.
- Torsionsspannung $\tau_t = T/W_t$.
- Flächenträgheitsmomente für Rechteck ($bh^3/12$) und Kreis ($\pi d^4/64$).

**Typische Fehler**

- Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente.
- Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt.
- Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.

**Klausur-Fokus**

- Maximale Biegespannung im Balken.
- Kombinierte Belastung Zug + Biegung (Superposition).
- Torsion bei Welle: Nenndurchmesser berechnen.

**Lern-Tipps**

- Formelsammlung für Widerstandsmomente anlegen und wirklich auswendig lernen.
- Einheiten-Kontrolle am Ende JEDER Spannungsaufgabe.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `fest-1-1` Normalspannung | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `fest-1-2` Hookesches Gesetz | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `fest-1-3` Schubspannung und Torsion | 5 | 5/5 | 28 | 6/12/5/2/3 | 28/28 | 6/6 | ✅ | — |
| `fest-1-4` Knicken | 5 | 5/5 | 28 | 7/10/6/3/2 | 28/28 | 7/7 | ✅ | — |
| `fest-2-1` Biegespannung | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `fest-2-2` Sicherheitszahl | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `fest-2-3` Mohr'scher Spannungskreis | 6 | 6/6 | 33 | 7/15/5/3/3 | 33/33 | 7/7 | ✅ | — |
| `fest-2-4` Wechselfestigkeit und Betriebsfestigkeit | 5 | 0/5 | 3 | 0/2/1/0/0 | 0/3 | — | ✅ | +5 Goal, +3 4B |
| `fest-2-5` Kerbspannungen & Formzahl | 5 | 0/5 | 3 | 2/1/0/0/0 | 3/3 | 2/2 | ✅ | +5 Goal |
| `fest-3-1` Festigkeit: Prüfungsaufgaben | 5 | 0/5 | 11 | 2/5/2/1/1 | 0/11 | 2/2 | ✅ | +5 Goal, +11 4B |
| `fest-3-2` Torsion, Knicken & Wechselfestigkeit | 5 | 0/5 | 4 | 0/3/1/0/0 | 0/4 | — | ✅ | +5 Goal, +4 4B |

<a id="thermodynamik"></a>

### thermodynamik · Thermodynamik

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 8
- Aufgaben: **61** (manuell: 26 · supplemental: 35)
- 4-Block: 0/61 (0 %) 🔴
- MC-wAE: 15/15 (100 %) ✅
- Sub-Goals: 0/38 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Energie, Wärme, Arbeit; Zustandsgrößen, Hauptsätze, ideales Gas, Wirkungsgrad.**

_Motoren, Wärmepumpen, Kraftwerke — alles Thermodynamik. Wirkungsgrad-Abschätzungen sind Ingenieurs-Alltag._

**Empfohlene Reihenfolge**

1. **Zustandsgrößen** — Zustandsgrößen (p, V, T), ideales Gas, Prozessarten.
2. **Hauptsätze** — 1. und 2. Hauptsatz, Entropie, Carnot-Wirkungsgrad.
3. **Prüfungsaufgaben** — Prüfungen: Kreisprozesse und Zustandsänderungen durchrechnen.

**Das musst du können**

- Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante).
- 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben).
- Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin!
- Isotherme: $T=\text{const}$, Isobar: $p=\text{const}$, Adiabat: $Q=0$.

**Typische Fehler**

- Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal.
- Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig.
- Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.

**Klausur-Fokus**

- Carnot-Wirkungsgrad einer Maschine.
- Zustandsänderung: Isotherm, isobar, adiabat durchrechnen.
- Entropieänderung bei idealem Gas.

**Lern-Tipps**

- Zustandsdiagramm (p-V oder T-s) vor jeder Aufgabe skizzieren.
- Kelvin-Umrechnung automatisieren: immer als erste Zeile "$T=\ldots\,\text{K}$" hinschreiben.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `thermo-1-1` Ideales Gas | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `thermo-1-2` Druck und Arbeit | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `thermo-2-1` Erster Hauptsatz | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `thermo-2-2` Wirkungsgrad | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `thermo-2-3` Kreisprozesse | 5 | 0/5 | 3 | 1/2/0/0/0 | 0/3 | 1/1 | ✅ | +5 Goal, +3 4B |
| `thermo-2-4` Wärmeübertragung | 5 | 0/5 | 3 | 0/2/1/0/0 | 0/3 | — | ✅ | +5 Goal, +3 4B |
| `thermo-3-1` Thermo: Prüfungsaufgaben | 5 | 0/5 | 11 | 2/5/2/1/1 | 0/11 | 2/2 | ✅ | +5 Goal, +11 4B |
| `thermo-3-2` Kreisprozesse & Wärmeübertragung | 5 | 0/5 | 4 | 0/3/1/0/0 | 0/4 | — | ✅ | +5 Goal, +4 4B |

<a id="fluidmechanik"></a>

### fluidmechanik · Fluidmechanik

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 9
- Aufgaben: **64** (manuell: 29 · supplemental: 35)
- 4-Block: 3/64 (5 %) 🔴
- MC-wAE: 18/18 (100 %) ✅
- Sub-Goals: 0/43 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Hydrostatik (ruhende Flüssigkeiten) und Strömung (Kontinuität, Bernoulli, Reynolds).**

_Pumpen, Rohrleitungen, Tragflächen, Hydraulik — überall strömende Fluide. Ohne Fluidmechanik keine Auslegung._

**Empfohlene Reihenfolge**

1. **Hydrostatik** — Hydrostatischer Druck $p=\rho g h$, Auftrieb.
2. **Strömung** — Kontinuitätsgleichung, Bernoulli, laminare/turbulente Strömung, Reynolds.
3. **Prüfungsaufgaben** — Prüfung: Rohrleitung + Druckverlust, Düse + Bernoulli.

**Das musst du können**

- Hydrostatischer Druck $p=\rho g h$.
- Kontinuität $A_1 v_1 = A_2 v_2$.
- Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung).
- Reynolds-Zahl $\text{Re}=v d/\nu$, Grenze laminar/turbulent bei ~2300.

**Typische Fehler**

- Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist.
- Reynolds dimensionsbehaftet gerechnet.
- Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.

**Klausur-Fokus**

- Bernoulli mit Venturi-Düse.
- Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen.
- Auftrieb eines Körpers bestimmen.

**Lern-Tipps**

- Bei jeder Strömungsaufgabe zuerst Reynolds checken — bestimmt, welche Reibungsformel gilt.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `fluid-1-1` Hydrostatischer Druck | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `fluid-1-2` Auftrieb | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `fluid-2-1` Kontinuitätsgleichung | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `fluid-2-2` Bernoulli-Gleichung | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `fluid-2-3` Rohrströmung und Druckverlust | 5 | 0/5 | 3 | 1/2/0/0/0 | 0/3 | 1/1 | ✅ | +5 Goal, +3 4B |
| `fluid-2-4` Ähnlichkeitsgesetze und Pumpen | 5 | 0/5 | 3 | 0/3/0/0/0 | 0/3 | — | ✅ | +5 Goal, +3 4B |
| `fluid-2-5` Moody-Diagramm & Rohrreibung praktisch | 5 | 0/5 | 3 | 1/2/0/0/0 | 3/3 | 1/1 | ✅ | +5 Goal |
| `fluid-3-1` Fluid: Prüfungsaufgaben | 5 | 0/5 | 11 | 3/5/1/1/1 | 0/11 | 3/3 | ✅ | +5 Goal, +11 4B |
| `fluid-3-2` Druckverlust, Pumpen & Ähnlichkeit | 5 | 0/5 | 4 | 1/3/0/0/0 | 0/4 | 1/1 | ✅ | +5 Goal, +4 4B |

<a id="werkstoffkunde"></a>

### werkstoffkunde · Werkstoffkunde

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 6
- Aufgaben: **50** (manuell: 8 · supplemental: 42)
- 4-Block: 5/50 (10 %) 🔴
- MC-wAE: 19/19 (100 %) ✅
- Sub-Goals: 0/30 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Werkstoffeigenschaften, Prüfverfahren und Kennwerte für Stahl, NE-Metalle, Polymere, Keramik.**

_Kein Bauteil ohne Werkstoffauswahl. Zugversuch, Härte und Kerbschlag sind Klausur-Dauerbrenner._

**Empfohlene Reihenfolge**

1. **Werkstoffkennwerte** — Kennwerte: Streckgrenze, Zugfestigkeit, E-Modul, Bruchdehnung.
2. **Prüfverfahren** — Prüfverfahren: Zugversuch, Härteprüfung (HB, HV, HRC), Kerbschlag.
3. **Prüfung** — Prüfungsaufgaben zu Kennwerten und Prüfverfahren.

**Das musst du können**

- Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung.
- Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$.
- Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$.
- Härteverfahren unterscheiden: Brinell (weich), Vickers (allgemein), Rockwell (schnell).

**Typische Fehler**

- Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt.
- Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist.
- $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.

**Klausur-Fokus**

- Zugversuch vollständig interpretieren.
- Zulässige Spannung mit Sicherheitszahl berechnen.
- Prüfverfahren einem Anwendungsfall zuordnen.

**Lern-Tipps**

- Eine einzige Zugprüfkurve perfekt verstehen — alle anderen sind Varianten davon.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `werk-1-1` Spannungs-Dehnungs-Diagramm | 5 | 0/5 | 8 | 3/2/1/1/1 | 0/8 | 3/3 | ✅ | +5 Goal, +8 4B |
| `werk-1-2` Werkstoffgruppen | 5 | 0/5 | 8 | 3/2/1/1/1 | 0/8 | 3/3 | ✅ | +5 Goal, +8 4B |
| `werk-2-1` Härteprüfung (HV, HB, HRC) | 4 | 0/4 | 8 | 3/2/1/1/1 | 1/8 | 3/3 | ✅ | +4 Goal, +7 4B |
| `werk-2-2` Kerbschlagbiegeversuch | 5 | 0/5 | 8 | 3/2/1/1/1 | 1/8 | 3/3 | ✅ | +5 Goal, +7 4B |
| `werk-2-3` Fe-C-Diagramm & Wärmebehandlung | 6 | 0/6 | 10 | 4/3/1/1/1 | 3/10 | 4/4 | ✅ | +6 Goal, +7 4B |
| `werk-pruefung-1` Prüfung: Werkstoffwahl & Kennwerte | 5 | 0/5 | 8 | 3/2/1/1/1 | 0/8 | 3/3 | ✅ | +5 Goal, +8 4B |

<a id="maschinenelemente"></a>

### maschinenelemente · Maschinenelemente

- Phase: **2. Sem** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 8
- Aufgaben: **61** (manuell: 26 · supplemental: 35)
- 4-Block: 0/61 (0 %) 🔴
- MC-wAE: 17/17 (100 %) ✅
- Sub-Goals: 0/38 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Schrauben, Wellen, Lager, Zahnräder — die Standardkomponenten jeder Maschine und ihre Auslegung.**

_Maschinen bestehen aus Maschinenelementen. Wer die nicht auslegen kann, baut keine funktionierende Maschine._

**Empfohlene Reihenfolge**

1. **Verbindungen** — Schraubenverbindungen, Klemmkraft, Vorspannung, ISO-Gewinde.
2. **Wellen, Lager, Zahnräder** — Wellen, Lager, Zahnräder: Übersetzung, Drehmoment, Lagerlebensdauer.
3. **Prüfungsaufgaben** — Prüfung zu ausgewählten Elementen.

**Das musst du können**

- ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen.
- Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$.
- Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$.
- Wälzlager-Lebensdauer $L_{10}=(C/P)^p$.

**Typische Fehler**

- Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten.
- Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment).
- Vorspannkraft einer Schraube mit Klemmkraft verwechselt.

**Klausur-Fokus**

- Schraubenberechnung (Vorspannkraft, Betriebskraft).
- Zahnradstufe: Drehzahl/Drehmoment am Ausgang.
- Wälzlagerlebensdauer.

**Lern-Tipps**

- Konstruktionskatalog (Roloff/Matek oder ähnlich) früh in die Hand nehmen — Klausuren setzen Tabellenarbeit voraus.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `melem-1-1` Schraubenverbindungen | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `melem-1-2` Passfedern und formschlüssige Verbindungen | 4 | 0/4 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +4 Goal, +10 4B |
| `melem-1-3` Schweißverbindungen | 5 | 0/5 | 3 | 1/1/1/0/0 | 0/3 | 1/1 | ✅ | +5 Goal, +3 4B |
| `melem-2-1` Wellen und Lager | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `melem-2-2` Zahnräder und Übersetzung | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `melem-2-3` Lagerlebensdauer | 5 | 0/5 | 3 | 0/3/0/0/0 | 0/3 | — | ✅ | +5 Goal, +3 4B |
| `melem-3-1` ME: Prüfungsaufgaben | 5 | 0/5 | 11 | 2/6/1/1/1 | 0/11 | 2/2 | ✅ | +5 Goal, +11 4B |
| `melem-3-2` Schweißnähte, Lager & Lebensdauer | 5 | 0/5 | 4 | 0/3/1/0/0 | 0/4 | — | ✅ | +5 Goal, +4 4B |

<a id="elektrotechnik"></a>

### elektrotechnik · Elektrotechnik

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 8
- Aufgaben: **74** (manuell: 25 · supplemental: 49)
- 4-Block: 3/74 (4 %) 🔴
- MC-wAE: 19/19 (100 %) ✅
- Sub-Goals: 0/39 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Gleich- und Wechselstromkreise, Ohmsches Gesetz, Kirchhoff, komplexe Impedanz.**

_Jede Maschine hat Elektrik. Sensoren, Motoren, Steuerungen — ohne Grundverständnis geht nichts._

**Empfohlene Reihenfolge**

1. **Gleichstromkreise** — Gleichstrom: Ohm, Kirchhoff, Serien-/Parallelschaltung, Leistung.
2. **Wechselstrom** — Wechselstrom: Effektivwerte, Impedanz, RLC-Glieder, komplexe Rechnung.
3. **Prüfungsaufgaben** — Klausurmix Gleich-/Wechselstrom mit Berechnung und Interpretation.

**Das musst du können**

- Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$.
- Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$).
- Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$.
- Effektivwert $U_{\text{eff}}=U_{\max}/\sqrt{2}$ bei Sinus.

**Typische Fehler**

- Spannungsteiler nur bei Reihenschaltung ohne Last zulässig.
- Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt.
- Effektiv- und Scheitelwert vertauscht.

**Klausur-Fokus**

- Netzwerkanalyse mit Kirchhoff.
- Komplexe Impedanz eines RLC-Gliedes.
- Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

**Lern-Tipps**

- Komplexe Zahlen (Topic komplexe-zahlen) unbedingt VOR AC-Aufgaben sicher beherrschen.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `et-1-1` Ohmsches Gesetz und Grundbegriffe | 5 | 0/5 | 10 | 2/4/2/1/1 | 0/10 | 2/2 | ✅ | +5 Goal, +10 4B |
| `et-1-2` Kirchhoffsche Gesetze | 4 | 0/4 | 10 | 3/4/1/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `et-1-3` Elektrische Leistung und Wirkungsgrad | 5 | 0/5 | 10 | 3/4/1/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `et-2-1` Wechselstromgrundlagen und Impedanz | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `et-2-2` RC- und RL-Schaltungen | 5 | 0/5 | 10 | 2/4/2/1/1 | 0/10 | 2/2 | ✅ | +5 Goal, +10 4B |
| `et-2-3` Drehstrom & 3-Phasensystem | 5 | 0/5 | 3 | 2/1/0/0/0 | 3/3 | 2/2 | ✅ | +5 Goal |
| `et-3-1` Gleichstrom Prüfungsaufgaben | 5 | 0/5 | 11 | 2/5/2/1/1 | 0/11 | 2/2 | ✅ | +5 Goal, +11 4B |
| `et-3-2` Wechselstrom Prüfungsaufgaben | 5 | 0/5 | 10 | 2/5/1/1/1 | 0/10 | 2/2 | ✅ | +5 Goal, +10 4B |

<a id="regelungstechnik"></a>

### regelungstechnik · Regelungstechnik

- Phase: **Vertiefung** · Level: vertiefung · Exam-Relevanz: pflicht
- Units: 3 (Prüfung am Ende ✅)
- Lessons: 6
- Aufgaben: **54** (manuell: 19 · supplemental: 35)
- 4-Block: 3/54 (6 %) 🔴
- MC-wAE: 19/19 (100 %) ✅
- Sub-Goals: 0/29 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Regelkreise, P/I/D-Regler, Stabilität (Hurwitz), Sprungantwort.**

_Automatisierung, Robotik, Prozesstechnik leben von sauberer Regelung. Stabilitätsanalyse ist Pflicht._

**Empfohlene Reihenfolge**

1. **Grundlagen des Regelkreises** — Grundlagen Regelkreis, Übertragungsfunktion, Stellglied.
2. **Regler und Stabilität** — P, I, D-Anteile, PT1/PT2-Glieder, Hurwitz-Stabilitätskriterium.
3. **Prüfungsaufgaben** — Prüfung: Stabilität prüfen, stationäre Regelabweichung berechnen.

**Das musst du können**

- Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$.
- P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend.
- PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$.
- Hurwitz: $H_n>0$ für alle Hurwitz-Determinanten.

**Typische Fehler**

- Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt.
- Hurwitz-Kriterium mit Routh verwechselt.
- Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.

**Klausur-Fokus**

- Stabilität mit Hurwitz prüfen und Grenzverstärkung finden.
- Stationäre Regelabweichung P-Regler an PT1.
- Sprungantwort eines PT1-Glieds skizzieren.

**Lern-Tipps**

- Laplace + Regelung zusammen lernen — sie bauen direkt aufeinander auf.

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `rt-1-1` Regelkreis Grundbegriffe | 4 | 0/4 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +4 Goal, +10 4B |
| `rt-1-2` Übertragungsfunktion | 5 | 0/5 | 10 | 2/4/2/1/1 | 0/10 | 2/2 | ✅ | +5 Goal, +10 4B |
| `rt-2-1` PID-Regler | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `rt-2-2` Stabilität | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `rt-2-3` Bodediagramm & Phasengang | 5 | 0/5 | 3 | 2/1/0/0/0 | 3/3 | 2/2 | ✅ | +5 Goal |
| `rt-3-1` Regelkreis & PID Prüfungsaufgaben | 5 | 0/5 | 11 | 3/4/2/1/1 | 0/11 | 3/3 | ✅ | +5 Goal, +11 4B |

<a id="python-matlab"></a>

### python-matlab · Python & Matlab

- Phase: **1. Sem** · Level: grundlagen · Exam-Relevanz: pflicht
- Units: 4 (Prüfung am Ende ✅)
- Lessons: 13
- Aufgaben: **130** (manuell: 46 · supplemental: 84)
- 4-Block: 0/130 (0 %) 🔴
- MC-wAE: 46/46 (100 %) ✅
- Sub-Goals: 0/62 Goal-Tasks verknüpft 🔴
- Practice-Exercises: 3 ✅

**Python und Matlab für ingenieurmäßiges Rechnen: Arrays, Schleifen, Plot, LGS, numerische Integration.**

_Numerische Tools sind in jedem modernen Labor und in der Industrie Standard. Wer nur mit der Hand rechnet, ist bei realen Problemen chancenlos._

**Empfohlene Reihenfolge**

1. **Python Grundlagen** — Python-Grundlagen: Variablen, Listen, Schleifen, Funktionen.
2. **Numerisches Rechnen** — Numerisches Rechnen: NumPy-Arrays, Lineare Algebra, Plots.
3. **MB-Anwendungen** — MB-Anwendungen: Signale, Filter, Nullstellensuche.
4. **Prüfungsaufgaben** — Prüfungsaufgaben — Kurzcode lesen, ausgeben, anpassen.

**Das musst du können**

- NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$.
- Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`).
- `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing.
- Plot mit `matplotlib.pyplot` (`plot`, `xlabel`, `legend`, `show`).

**Typische Fehler**

- In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt.
- Indexoffset bei Übergang Python ↔ Matlab vergessen.
- `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).

**Klausur-Fokus**

- Codeschnipsel lesen und Ausgabe vorhersagen.
- Fehler in gegebenem Code finden.
- LGS mit NumPy lösen.

**Lern-Tipps**

- Jede Klausur-Aufgabe kurz im Kopf simulieren: "welche Werte stehen nach Zeile 3 in a?".

| Lesson | SubG | Goal✅ | Aufg. | Typen (mc/ni/tf/ma/so) | 4B✅ | MC-wAE | Mastery | Lücken |
| --- | ---: | ---: | ---: | :---: | ---: | ---: | :---: | --- |
| `py-1-1` Variablen & Datentypen | 4 | 0/4 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +4 Goal, +10 4B |
| `py-1-2` Operatoren & Ausdrücke | 5 | 0/5 | 10 | 3/4/1/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `py-1-3` Listen & Arrays | 4 | 0/4 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +4 Goal, +10 4B |
| `py-1-4` Kontrollstrukturen | 4 | 0/4 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +4 Goal, +10 4B |
| `py-1-5` Funktionen definieren | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `py-2-1` NumPy Grundlagen | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `py-2-2` Matplotlib — Daten visualisieren | 5 | 0/5 | 10 | 3/2/2/1/2 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `py-2-3` Gleichungen lösen & Optimierung | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `py-2-4` Numerische Integration & DGL | 5 | 0/5 | 10 | 4/2/2/1/1 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |
| `py-3-1` Festigkeitsberechnung | 5 | 0/5 | 10 | 3/3/2/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `py-3-2` Datenauswertung & Messdaten | 5 | 0/5 | 10 | 3/2/2/1/2 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `py-3-3` Simulation: Feder-Masse-Dämpfer | 5 | 0/5 | 10 | 3/4/1/1/1 | 0/10 | 3/3 | ✅ | +5 Goal, +10 4B |
| `py-4-1` Prüfung: Code-Verständnis & Fehlersuche | 5 | 0/5 | 10 | 4/5/1/0/0 | 0/10 | 4/4 | ✅ | +5 Goal, +10 4B |

## Auftragsliste für Claude Code

> 📘 **Vor dem Anfangen:** [CLAUDE.md](./CLAUDE.md) lesen (Qualitätskontrakt, Dateistruktur, Workflow, was NICHT zu tun ist).

**Zweck:** Handgeschriebene Aufgaben in Menge ergänzen. Alle Zahlen sind **Mindestwerte**, keine Zielwerte — nach oben kein Cap. Keine Template-Generatoren, keine Slop-Aufgaben.

**Mengen-Regel:**

- **Pro Lesson** ≥ 20 Aufgaben (Minimum, **kein Cap**).
- **Pro Sub-Goal** ≥ 5 Aufgaben (Minimum, **kein Cap**).

Der Gedanke: Wer den Stoff wirklich kann, braucht mehrere Aufgaben pro Teilkompetenz — andere Zahlen, andere Formulierung, andere Typen. Wenn ein Sub-Goal besonders prüfungsrelevant oder fehleranfällig ist, sind 5, 8 oder 10 Aufgaben besser als 3. Schreib so viele, wie inhaltlich noch etwas Neues beitragen. Lieber eine mehr als eine zu wenig.

### Qualitätsvorgaben pro Aufgabe

- **4-Block-Erklärung:** `**Ansatz:**` / `**Rechnung:**` / `**Probe:**` / `**Typischer Fehler:**` — alle vier Markdown-Headings müssen in `explanation` vorkommen.
- **≥ 3 Hints**, inhaltlich gestaffelt (Konzept → Methode → konkreter Schritt).
- **Multiple-Choice:** ≥ 3 Optionen, `wrongAnswerExplanations` für JEDEN falschen Index (1-2 Sätze, benennt den vermuteten Fehler).
- **Number-Input:** `correctValue`, `tolerance`, `unit` gesetzt (leer nur bei einheitenlosen Größen).
- **True-False:** Feld `correct: boolean` (nicht `isTrue`).
- **Typen-Rotation pro Lesson:** nicht 5× MC hintereinander — Mischung aus mc/ni/tf/matching/sorting.
- **Prüfungs-Units:** Frage/Statement beginnt mit `[PRÜFUNG] `.
- **Goal-Tasks:** Sub-Goal-Label wörtlich in der Frage zitiert (`Sub-Goal "…": …`).
- **Inhalt 100 % manuell** — konkrete Zahlen, fachlich korrekt, keine Platzhalter.

### Ablage-Orte

- **Supplement-Aufgaben (Standard-Vertiefung):** `src/content/supplements/<topic>.js` im Profile-Format (s. vorhandene Dateien als Vorlage; `bank(profile)` erzeugt 7 typen-gemischte Aufgaben + Erklärung pro Lesson).
- **Goal-Tasks (pro Sub-Goal eine Aufgabe):** `src/content/subgoal_tasks/<topic>.js` mit Helfern aus `./_helpers.js` (`mc/ni/tf/matching/sorting`). Array-Länge MUSS `lesson.subGoals.length` entsprechen.
- **Registrierung:** Neues Supplement-File in `src/content/index.js` importieren und in `MANUAL_SUPPLEMENTS` spreaden; neues Goal-Task-File entsprechend in `SUBGOAL_EXERCISES`.

### Nach dem Schreiben verifizieren

```
npm run validate:content   # Pflichtfeld-Check
npm run status             # STATUS.md neu generieren, Task-Karten sollen schrumpfen
npm test                   # Audit-Tests laufen lassen
npm run build              # abschließender End-zu-End-Check
```

### 🔴 Kritisch (< 5 Aufgaben oder Prüfung unvollständig) — 59 Lessons

#### `fest-2-4` · Wechselfestigkeit und Betriebsfestigkeit

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Biegung und Torsion
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×2, true-false ×1
- **Typen einsetzen (Rotation):** multiple-choice, matching, sorting, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Mittelspannung: $\sigma_m = (\sigma_\text{max} + \sigma_\text{min})/2$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Ausschlagspannung: $\sigma_a = (\sigma_\text{max} - \sigma_\text{min})/2$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Goodman-Kriterium: $\sigma_a/\sigma_W + \sigma_m/R_m \leq 1$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wechselfestigkeit $\sigma_W$: Amplitudengrenze bei $\sigma_m = 0$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Schwingfestigkeit: Dauerfestigkeit, Zeitfestigkeit, Wöhlerlinie (N > 10⁶)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-2-4-a`, `ex-fest-2-4-b`, `ex-fest-2-4-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `fest-2-5` · Kerbspannungen & Formzahl

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Biegung und Torsion
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formzahl: $\alpha_K = \sigma_\text{max}/\sigma_\text{nenn}$ (rein geometrisch)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Kerbwirkungszahl $\beta_K \leq \alpha_K$ (werkstoffabhängig, bei zähen kleiner)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Typische Werte: Welleabsatz scharf $\alpha_K = 2$–3, Gewindegrund $\alpha_K = 3$–5
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Maßnahmen: Verrundung ($r \uparrow$), Oberflächengüte, Druckeigenspannungen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Dauerfestigkeit mit Kerbe: $\sigma_{W,K} = \sigma_W/\beta_K$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `thermo-2-3` · Kreisprozesse

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Hauptsätze
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Carnot: $\eta_C = 1 - T_\text{kalt}/T_\text{warm}$ (in Kelvin!)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Otto-Prozess: $\eta_O = 1 - \varepsilon^{1-\gamma}$ mit Verdichtung $\varepsilon = V_1/V_2$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Diesel-Prozess: etwas anderer Wirkungsgrad (Einspritzverhältnis)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Rankine/Clausius-Rankine: Dampfkraftwerk, Enthalpiewerte aus h-s-Diagramm
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Im pV-Diagramm: Fläche = Nutzarbeit pro Umlauf
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-2-3-a`, `ex-thermo-2-3-b`, `ex-thermo-2-3-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `thermo-2-4` · Wärmeübertragung

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Hauptsätze
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×2, true-false ×1
- **Typen einsetzen (Rotation):** multiple-choice, matching, sorting, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Fourier-Wärmeleitung: $\dot Q = \lambda A \Delta T/d$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Wärmeübergang (Newton): $\dot Q = \alpha A \Delta T$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — k-Wert (mehrlagige Wand): $1/k = 1/\alpha_1 + \sum d_i/\lambda_i + 1/\alpha_2$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Strahlung: $\dot Q = \varepsilon \sigma A (T_1^4 - T_2^4)$ (Stefan-Boltzmann)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Kleiner $k$-Wert = gute Dämmung
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-2-4-a`, `ex-thermo-2-4-b`, `ex-thermo-2-4-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `fluid-2-3` · Rohrströmung und Druckverlust

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Strömung
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Darcy-Weisbach: $\Delta p = \lambda (L/d)(\rho v^2/2)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Reynolds-Zahl: $Re = \rho v d/\mu$; laminar $<2300$, turbulent $>4000$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Hagen-Poiseuille (laminar): $\Delta p = 128 \mu L \dot V/(\pi d^4)$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Laminares Profil parabolisch, turbulent näherungsweise Blockprofil mit Randschicht
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Hydraulischer Durchmesser $d_h = 4A/U$ für Nicht-Kreisquerschnitte
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-2-3-a`, `ex-fluid-2-3-b`, `ex-fluid-2-3-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `fluid-2-4` · Ähnlichkeitsgesetze und Pumpen

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Strömung
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×3
- **Typen einsetzen (Rotation):** multiple-choice, true-false, matching, sorting, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Pumpengesetze: $\dot V \propto n$, $H \propto n^2$, $P \propto n^3$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Reynolds für Ähnlichkeit: Modell- und Prototyp-Re gleich halten
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Froude-Zahl: $Fr = v/\sqrt{gL}$ (Schwerewellen, offene Gerinne)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Euler-Zahl: $Eu = \Delta p/(\rho v^2)$ (Druckabfall)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Leistung verdoppeln bedeutet Drehzahl $\sqrt[3]{2} \approx 1{,}26$-fach
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-2-4-a`, `ex-fluid-2-4-b`, `ex-fluid-2-4-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `fluid-2-5` · Moody-Diagramm & Rohrreibung praktisch

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Strömung
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Laminar: $\lambda = 64/Re$ (unabhängig von Rauhigkeit)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Turbulent glatt (Blasius, $Re < 10^5$): $\lambda = 0{,}316/Re^{0{,}25}$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Turbulent rau: Moody-Diagramm oder Colebrook-Gleichung
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Relative Rauhigkeit $\varepsilon/d$: Materialkennwert aus Tabelle ablesen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Bei voll-turbulenter Strömung: $\lambda$ Re-unabhängig (nur $\varepsilon/d$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `melem-1-3` · Schweißverbindungen

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Verbindungen
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×1, true-false ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, number-input, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kehlnaht-Spannung: $\tau = F/(a \cdot l_w)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Nahtdicke Kehlnaht: $a \approx 0{,}7 \cdot h$ (Schenkellänge $h$)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Verbindungsarten: Schweißen (stoffschlüssig, dauerhaft), Schrauben (lösbar)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Tragende Nahtlänge $l_w$ = geometrische Länge minus Endkrater (≈ $l - 2a$)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Zulässige Schweißnahtspannung = Grundwerkstoff $\times$ Schweißfaktor (z.B. 0{,}8)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-1-3-a`, `ex-melem-1-3-b`, `ex-melem-1-3-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `melem-2-3` · Lagerlebensdauer

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Wellen, Lager, Zahnräder
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×3
- **Typen einsetzen (Rotation):** multiple-choice, true-false, matching, sorting, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — L10-Lebensdauer: $L_{10} = (C/P)^p$ Mio. Umdrehungen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Exponent: $p = 3$ Kugellager, $p = 10/3$ Rollenlager
  - 🔴 [2] (hoch) **0/5+** Aufgaben — In Stunden: $L_{10h} = L_{10} \cdot 10^6/(60 \cdot n)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — C = dyn. Tragzahl (Katalog), P = äquivalente dyn. Last ($P = X F_r + Y F_a$)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — L10 = 10 % Ausfallwahrscheinlichkeit (90 % der Lager halten länger)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-2-3-a`, `ex-melem-2-3-b`, `ex-melem-2-3-c`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `et-2-3` · Drehstrom & 3-Phasensystem

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Wechselstrom
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Stern: $U_{LL} = \sqrt 3 U_{LN}$, $I_L = I_\text{Strang}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Dreieck: $U_{LL} = U_\text{Strang}$, $I_L = \sqrt 3 I_\text{Strang}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Drehstrom-Leistung: $P = \sqrt 3 U_{LL} I_L \cos\varphi$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Haushaltsnetz: $U_{LN} = 230$ V, $U_{LL} = 400$ V
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Y/$\Delta$-Anlauf: in Stern nur 1/3 Leistung → kleinerer Anlaufstrom
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `rt-2-3` · Bodediagramm & Phasengang

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Regler und Stabilität
- **Aufgaben aktuell:** 3 · **mindestens:** 20 · **fehlen bis Minimum:** 17 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Amplitudengang in dB: $A_\text{dB} = 20 \log_{10}|G|$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Grundbausteine: P $0°$; I $-90°$, $-20$ dB/Dek; D $+90°$, $+20$ dB/Dek
  - 🔴 [2] (hoch) **0/5+** Aufgaben — PT1 Grenzfrequenz $\omega_g = 1/T$, dort $|G| = -3$ dB
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Phasenreserve: $\varphi_R = 180° + \varphi(\omega_D)$ bei $|G_0| = 0$ dB
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Stabilitätsreserven: $\varphi_R > 30°$ akzeptabel, $> 60°$ sehr gut
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 17 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `mech-3-3` · Reibung, Kinematik & Schwingungen

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 4 · **mindestens:** 20 · **fehlen bis Minimum:** 16 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×4
- **Typen einsetzen (Rotation):** multiple-choice, true-false, matching, sorting, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Geneigte Ebene: gleiten wenn $F_H > F_{R,\max}$, d.h. $\tan\alpha > \mu_0$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Bremsweg-Formel: $s = v_0^2/(2a)$ bei Bremsbeschleunigung $a$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Eigenfrequenz Feder-Masse: $\omega_0 = \sqrt{c/m}$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Bei Parallelschaltung Federn: $c_\text{ges} = c_1 + c_2$; Serie: $1/c_\text{ges} = 1/c_1 + 1/c_2$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Rollen ohne Rutschen: $v = r\omega$, kinetische Energie $= \tfrac{1}{2}m v^2 + \tfrac{1}{2}J\omega^2$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 16 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-3-3-a`, `ex-mech-3-3-b`, `ex-mech-3-3-c`, `ex-mech-3-3-d`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `fest-3-2` · Torsion, Knicken & Wechselfestigkeit

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 4 · **mindestens:** 20 · **fehlen bis Minimum:** 16 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×3, true-false ×1
- **Typen einsetzen (Rotation):** multiple-choice, matching, sorting, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Torsionsspannung in Welle: $\tau = M_T/W_p$, $W_p = \pi d^3/16$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Knickung: Euler $F_{ki} = \pi^2 EI/(\beta L)^2$, $\beta$ aus Lagerung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Goodman: $\sigma_a/\sigma_W + \sigma_m/R_m \leq 1/S$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Werkstoff S235: Mindeststreckgrenze $R_e = 235$ MPa
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Schlankheitsgrad prüfen vor Euler: $\lambda > \lambda_0$ sonst Tetmajer/Johnson
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 16 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-3-2-a`, `ex-fest-3-2-b`, `ex-fest-3-2-c`, `ex-fest-3-2-d`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `thermo-3-2` · Kreisprozesse & Wärmeübertragung

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 4 · **mindestens:** 20 · **fehlen bis Minimum:** 16 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×3, true-false ×1
- **Typen einsetzen (Rotation):** multiple-choice, matching, sorting, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Leistung aus Wärmestrom: $P_\text{nutz} = \dot Q_\text{zu} \cdot \eta$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Wärmebilanz Kraftwerk: $\dot Q_\text{ab} = \dot Q_\text{zu} - P_\text{nutz}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Otto-Wirkungsgrad: $\eta_O = 1 - \varepsilon^{1-\gamma}$, $\gamma \approx 1{,}4$ für Luft
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wärmestrom durch Wand: $\dot Q = k A \Delta T$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Carnot als theoretische Obergrenze: reale Wirkungsgrade sind kleiner
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 16 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-3-2-a`, `ex-thermo-3-2-b`, `ex-thermo-3-2-c`, `ex-thermo-3-2-d`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `fluid-3-2` · Druckverlust, Pumpen & Ähnlichkeit

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 4 · **mindestens:** 20 · **fehlen bis Minimum:** 16 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×3
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Erweiterte Bernoulli mit Verlust: $+ \Delta p_V$ auf Senkeseite
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Pumpenleistung: $P = \rho g \dot V H / \eta_P$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Reihenschaltung Rohre: $\Delta p_\text{ges} = \sum \Delta p_i$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Einzelverluste: $\Delta p = \zeta (\rho v^2/2)$ ($\zeta$ aus Tabelle für Krümmer, Ventile, \ldots)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Pumpenkennlinie × Anlagenkennlinie = Betriebspunkt
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 16 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-3-2-a`, `ex-fluid-3-2-b`, `ex-fluid-3-2-c`, `ex-fluid-3-2-d`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `melem-3-2` · Schweißnähte, Lager & Lebensdauer

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 4 · **mindestens:** 20 · **fehlen bis Minimum:** 16 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×3, true-false ×1
- **Typen einsetzen (Rotation):** multiple-choice, matching, sorting, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kehlnaht: $\tau = F/(a l_w)$, $a = 0{,}7 h$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Lagerlebensdauer: $L_{10} = (C/P)^p$, $p = 3$ (Kugel) / $p = 10/3$ (Rolle)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Einheiten-Check: L10 in Mio. U, L10h in Stunden nach $\times 10^6/(60n)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Leistungs-Drehmoment-Umrechnung $\omega = 2\pi n/60$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Plausibilitäts-Check: typische Lagerlebensdauer 5000–50000 h
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 16 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-3-2-a`, `ex-melem-3-2-b`, `ex-melem-3-2-c`, `ex-melem-3-2-d`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `werk-pruefung-1` · Prüfung: Werkstoffwahl & Kennwerte

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Zulässige Spannung: $\sigma_\text{zul} = R_m/S$ oder $R_e/S$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Typische S-Werte: statisch $S = 1{,}5$, schwingend $S = 2$–$3$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kennwertwahl: zähe Stähle → $R_e$; spröde Werkstoffe → $R_m$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Einheit MPa = N/mm² = $10^6$ Pa
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Werkstoffgruppen: Stahl (hohe Festigkeit), Alu (leicht), Kunststoff (korrosionsfrei), Keramik (hart)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-pruefung-1-manual-1`, `ex-werk-pruefung-1-manual-2`, `ex-werk-pruefung-1-manual-3`, `ex-werk-pruefung-1-manual-4`, `ex-werk-pruefung-1-manual-5`, `ex-werk-pruefung-1-manual-6`, `ex-werk-pruefung-1-manual-7`, `ex-werk-pruefung-1-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `komz-pruefung-1` · Prüfung: Anwendungen & Gesamtaufgaben

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×3, true-false ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, true-false, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formwahl: $+/-$ → kartesisch, $\cdot/\div$ und Potenzen/Wurzeln → polar/exponential
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Impedanz ET: $Z_R = R$, $Z_L = i\omega L$, $Z_C = 1/(i\omega C)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Komplexer Zeiger für Schwingung $x(t) = \text{Re}(A e^{i\omega t})$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Quadratische Gleichung in $\mathbb{C}$: Diskriminante $<0$ liefert komplexes konj. Paar
  - 🔴 [4] (hoch) **0/5+** Aufgaben — $z \cdot \bar z = |z|^2$ (Betrag-Quadrat aus Multiplikation mit Konjugiertem)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Argumente beim Dividieren: $\arg(z_1/z_2) = \arg(z_1) - \arg(z_2)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-pruefung-1-1`, `ex-komz-pruefung-1-2`, `ex-komz-pruefung-1-3`, `ex-komz-pruefung-1-4`, `ex-komz-pruefung-1-5`, `ex-komz-pruefung-1-6`, `ex-komz-pruefung-1-7`, `ex-komz-pruefung-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-pruefung-2` · Prüfung: Polarform & Multiplikation

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kartesisch → Polar: $r = \sqrt{a^2+b^2}$, $\varphi = \text{atan2}(b,a) \in (-\pi, \pi]$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Multiplikation: Beträge mal, Argumente plus (mod $2\pi$)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Division: Beträge durch, Argumente minus
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Quadrantenmerker: $-i$ hat $\varphi = -\pi/2$, $-1$ hat $\varphi = \pi$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Argument-Hauptwert wählen (sonst Punkte-Abzug bei nicht-eindeutiger Antwort)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-pruefung-2-1`, `ex-komz-pruefung-2-2`, `ex-komz-pruefung-2-3`, `ex-komz-pruefung-2-4`, `ex-komz-pruefung-2-5`, `ex-komz-pruefung-2-6`, `ex-komz-pruefung-2-7`, `ex-komz-pruefung-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-pruefung-3` · Prüfung: Wurzeln & Gleichungen

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Gleichung $z^n = w$: **alle $n$** Wurzeln angeben (Fundamentalsatz)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Wurzelformel in Polarform $w = r e^{i\varphi}$: $z_k = r^{1/n} e^{i(\varphi + 2\pi k)/n}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Impedanz-Gesamt bei Reihe: $Z = R + i\omega L - i/(\omega C)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Scheinwiderstand $|Z| = \sqrt{R^2 + X^2}$ mit Reaktanz $X = \omega L - 1/(\omega C)$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Resonanz: $\omega_0 = 1/\sqrt{LC}$ (Imaginärteil der Impedanz = 0)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Phasenwinkel $\arg(Z) = \arctan(X/R)$: Spannungs- vs. Stromphasenlage
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-pruefung-3-1`, `ex-komz-pruefung-3-2`, `ex-komz-pruefung-3-3`, `ex-komz-pruefung-3-4`, `ex-komz-pruefung-3-5`, `ex-komz-pruefung-3-6`, `ex-komz-pruefung-3-7`, `ex-komz-pruefung-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `rf-pruefung-1` · Prüfung: Taylor, Konvergenz, Restglied

- **Topic:** `reihen-folgen` (Reihen & Folgen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Taylor: $f(x) = \sum f^{(n)}(x_0)(x-x_0)^n/n!$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Standardreihen: $e^x, \sin x, \cos x, \ln(1+x), 1/(1-x)$ auswendig
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Geometrische Reihe: $\sum q^n = 1/(1-q)$ für $|q| < 1$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Restglied Lagrange: $R_n = f^{(n+1)}(\xi)(x-x_0)^{n+1}/(n+1)!$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Konvergenzradius $R$: via Quotienten- oder Wurzelkriterium bestimmen
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Anwendung: Approximation, Grenzwerte mit Taylor (Alternative zu L'Hôpital)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/reihen_folgen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/reihen_folgen.js`
- **4-Block-Erklärung fehlt bei:** `ex-rf-pruefung-1-1`, `ex-rf-pruefung-1-2`, `ex-rf-pruefung-1-3`, `ex-rf-pruefung-1-4`, `ex-rf-pruefung-1-5`, `ex-rf-pruefung-1-6`, `ex-rf-pruefung-1-7`, `ex-rf-pruefung-1-8` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `taylor-approx`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `reihen-folgen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$. · Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$. · Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz. · …
  - _Typische Fehler (gute Distraktoren):_ Konvergenzkriterium für $|q|=1$ falsch bewertet. · Taylor-Entwicklungspunkt nicht mit angegeben. · Restglied ignoriert.
  - _Klausur-Fokus:_ Konvergenz einer Reihe per Quotientenkriterium. · Taylor-Polynom 3. Grades an gegebener Stelle.

#### `rf-pruefung-2` · Prüfung: Konvergenzkriterien & Potenzreihen

- **Topic:** `reihen-folgen` (Reihen & Folgen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Quotientenkriterium: $L = \lim |a_{n+1}/a_n|$ — $L < 1$ konv., $L > 1$ div., $L = 1$ unentsch.
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Wurzelkriterium: $L = \lim \sqrt[n]{|a_n|}$ — gleiche Regel
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Majorantenkriterium: $|a_n| \leq b_n$, $\sum b_n$ konv. → $\sum a_n$ abs. konv.
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Konvergenzradius: $R = 1/\limsup \sqrt[n]{|a_n|}$ (Cauchy-Hadamard)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Leibniz-Kriterium für alternierende Reihe: $a_n \searrow 0 \Rightarrow$ konv.
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Absolut vs. bedingt konvergent: $\sum |a_n|$ konv. (absolut) stärker als $\sum a_n$ konv.
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/reihen_folgen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/reihen_folgen.js`
- **4-Block-Erklärung fehlt bei:** `ex-rf-pruefung-2-1`, `ex-rf-pruefung-2-2`, `ex-rf-pruefung-2-3`, `ex-rf-pruefung-2-4`, `ex-rf-pruefung-2-5`, `ex-rf-pruefung-2-6`, `ex-rf-pruefung-2-7`, `ex-rf-pruefung-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `taylor-approx`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `reihen-folgen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$. · Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$. · Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz. · …
  - _Typische Fehler (gute Distraktoren):_ Konvergenzkriterium für $|q|=1$ falsch bewertet. · Taylor-Entwicklungspunkt nicht mit angegeben. · Restglied ignoriert.
  - _Klausur-Fokus:_ Konvergenz einer Reihe per Quotientenkriterium. · Taylor-Polynom 3. Grades an gegebener Stelle.

#### `rf-pruefung-3` · Prüfung: Taylor-Restglied & Näherungen

- **Topic:** `reihen-folgen` (Reihen & Folgen) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Lagrange-Restglied: $|R_n(x)| \leq M \cdot |x-x_0|^{n+1}/(n+1)!$ mit $M = \max |f^{(n+1)}|$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Taylor-Fehler sinkt mit $1/(n+1)!$ — exponentiell bessere Näherung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Linearisierung (n=1): $f(x) \approx f(x_0) + f'(x_0)(x-x_0)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Fehlerschätzung Sinus/Cosinus: nächster Term liefert obere Schranke
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Taylor-Polynom-Grad via geforderter Genauigkeit $|R_n| < \epsilon$ bestimmen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/reihen_folgen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/reihen_folgen.js`
- **4-Block-Erklärung fehlt bei:** `ex-rf-pruefung-3-1`, `ex-rf-pruefung-3-2`, `ex-rf-pruefung-3-3`, `ex-rf-pruefung-3-4`, `ex-rf-pruefung-3-5`, `ex-rf-pruefung-3-6`, `ex-rf-pruefung-3-7`, `ex-rf-pruefung-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `taylor-approx`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `reihen-folgen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$. · Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$. · Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz. · …
  - _Typische Fehler (gute Distraktoren):_ Konvergenzkriterium für $|q|=1$ falsch bewertet. · Taylor-Entwicklungspunkt nicht mit angegeben. · Restglied ignoriert.
  - _Klausur-Fokus:_ Konvergenz einer Reihe per Quotientenkriterium. · Taylor-Polynom 3. Grades an gegebener Stelle.

#### `mdim-pruefung-1` · Prüfung: Extrema, Fehlerfortpflanzung

- **Topic:** `mehrdim-analysis` (Mehrdim. Analysis) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kritische Stellen: $\nabla f = \vec 0$ (alle partiellen Ableitungen null)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hesse-Matrix $H$: $\det H > 0$ und $f_{xx} > 0$ → Min; $\det H > 0, f_{xx} < 0$ → Max
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Sattelpunkt: $\det H < 0$ (Hesse indefinit)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Fehlerfortpflanzung (linear): $\Delta f \approx |\partial f/\partial x_1| \Delta x_1 + \ldots$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Gauß'sche Fehlerfortpflanzung (statistisch): $\sigma_f^2 = \sum (\partial f/\partial x_i)^2 \sigma_i^2$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Lagrange: $\nabla f = \lambda \nabla g$ bei Nebenbedingung $g = 0$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/mehrdim_analysis.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/mehrdim_analysis.js`
- **4-Block-Erklärung fehlt bei:** `ex-mdim-pruefung-1-1`, `ex-mdim-pruefung-1-2`, `ex-mdim-pruefung-1-3`, `ex-mdim-pruefung-1-4`, `ex-mdim-pruefung-1-5`, `ex-mdim-pruefung-1-6`, `ex-mdim-pruefung-1-7`, `ex-mdim-pruefung-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-3d`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `mehrdim-analysis`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Partielle Ableitung: alle anderen Variablen als Konstante behandeln. · Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs. · Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend). · …
  - _Typische Fehler (gute Distraktoren):_ Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet. · Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum). · Richtungsvektor bei $D_{\vec u}$ nicht normiert.
  - _Klausur-Fokus:_ Extrema einer Funktion $f(x,y)$. · Lagrange-Multiplikatoren bei Nebenbedingung. · Tangentialebene in einem Punkt aufstellen.

#### `mdim-pruefung-2` · Prüfung: Fehlerfortpflanzung & totales Differential

- **Topic:** `mehrdim-analysis` (Mehrdim. Analysis) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Totales Differential: $df = f_x dx + f_y dy + \ldots$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Maximaler Fehler (linear): $|\Delta f| \leq \sum |f_{x_i}| |\Delta x_i|$ (obere Schranke)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Gauß'sche (statistisch): $\sigma_f = \sqrt{\sum (f_{x_i})^2 \sigma_{x_i}^2}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Relativer Fehler: $|\Delta f/f| \leq \sum |\Delta x_i/x_i|$ bei Produkten
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Fehlerquelle mit dem größten $f_{x_i} \Delta x_i$ dominiert — dort zuerst verbessern
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/mehrdim_analysis.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/mehrdim_analysis.js`
- **4-Block-Erklärung fehlt bei:** `ex-mdim-pruefung-2-1`, `ex-mdim-pruefung-2-2`, `ex-mdim-pruefung-2-3`, `ex-mdim-pruefung-2-4`, `ex-mdim-pruefung-2-5`, `ex-mdim-pruefung-2-6`, `ex-mdim-pruefung-2-7`, `ex-mdim-pruefung-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-3d`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `mehrdim-analysis`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Partielle Ableitung: alle anderen Variablen als Konstante behandeln. · Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs. · Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend). · …
  - _Typische Fehler (gute Distraktoren):_ Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet. · Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum). · Richtungsvektor bei $D_{\vec u}$ nicht normiert.
  - _Klausur-Fokus:_ Extrema einer Funktion $f(x,y)$. · Lagrange-Multiplikatoren bei Nebenbedingung. · Tangentialebene in einem Punkt aufstellen.

#### `mdim-pruefung-3` · Prüfung: Lagrange & Gesamtaufgaben

- **Topic:** `mehrdim-analysis` (Mehrdim. Analysis) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Lagrange-LGS: $f_x = \lambda g_x$, $f_y = \lambda g_y$, $g = 0$ (3 Gl. für 3 Unb.)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hesse-Test: $D = f_{xx}f_{yy} - f_{xy}^2$; $D>0, f_{xx}>0$ Min; $D>0, f_{xx}<0$ Max; $D<0$ Sattel
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Bei $D = 0$: keine Entscheidung via Hesse, höhere Ordnungen nötig
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Mehrere NB: $\nabla f = \sum \lambda_i \nabla g_i$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Richtungsableitung: $D_{\vec u} f = \nabla f \cdot \vec u / |\vec u|$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Gradient zeigt in Richtung stärksten Anstiegs, Betrag = maximale Steigung
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/mehrdim_analysis.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/mehrdim_analysis.js`
- **4-Block-Erklärung fehlt bei:** `ex-mdim-pruefung-3-1`, `ex-mdim-pruefung-3-2`, `ex-mdim-pruefung-3-3`, `ex-mdim-pruefung-3-4`, `ex-mdim-pruefung-3-5`, `ex-mdim-pruefung-3-6`, `ex-mdim-pruefung-3-7`, `ex-mdim-pruefung-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-3d`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `mehrdim-analysis`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Partielle Ableitung: alle anderen Variablen als Konstante behandeln. · Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs. · Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend). · …
  - _Typische Fehler (gute Distraktoren):_ Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet. · Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum). · Richtungsvektor bei $D_{\vec u}$ nicht normiert.
  - _Klausur-Fokus:_ Extrema einer Funktion $f(x,y)$. · Lagrange-Multiplikatoren bei Nebenbedingung. · Tangentialebene in einem Punkt aufstellen.

#### `num-pruefung-1` · Prüfung: Numerische Methoden kombiniert

- **Topic:** `numerik` (Numerische Mathematik) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bisektion: linear, halbiert Intervall, garantiert konvergent bei Vorzeichenwechsel
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Newton: quadratisch konvergent, $x_{n+1} = x_n - f(x_n)/f'(x_n)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Trapezregel: Fehler $O(h^2)$; Simpson: Fehler $O(h^4)$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Konditionszahl $\kappa(A) = \|A\| \|A^{-1}\|$ — Stabilitätsindikator bei LGS
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Maschinengenauigkeit $\epsilon \approx 2{,}22 \cdot 10^{-16}$ (double), Rundungsfehler ansammeln
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Abbruchkriterium: $|x_{n+1} - x_n| < \epsilon$ oder max. Iterationen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/numerik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/numerik.js`
- **4-Block-Erklärung fehlt bei:** `ex-num-pruefung-1-1`, `ex-num-pruefung-1-2`, `ex-num-pruefung-1-3`, `ex-num-pruefung-1-4`, `ex-num-pruefung-1-5`, `ex-num-pruefung-1-6`, `ex-num-pruefung-1-7`, `ex-num-pruefung-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `numerik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent. · Bisektion: sicher aber linear, braucht Vorzeichenwechsel. · Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Newton die Ableitung falsch eingesetzt. · Simpson braucht gerade Anzahl Teilintervalle — oft übersehen. · Konvergenz von Newton nicht geprüft (kann oszillieren).
  - _Klausur-Fokus:_ Newton-Iteration für zwei Schritte mit Startwert. · Simpson-Regel mit $n=2$ oder $n=4$. · Fehlerordnung begründen.

#### `num-pruefung-2` · Prüfung: Trapez, Simpson & Fehlerordnung

- **Topic:** `numerik` (Numerische Mathematik) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Trapez: $T(h) = h[(f_0+f_n)/2 + \sum_{i=1}^{n-1} f_i]$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Simpson: $S(h) = (h/3)[f_0 + 4\sum_{\text{ung.}} f_i + 2\sum_{\text{ger.}} f_i + f_n]$, $n$ gerade
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Fehler Trapez: $|E| \leq (b-a) h^2 \max|f''|/12$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Fehler Simpson: $|E| \leq (b-a) h^4 \max|f^{(4)}|/180$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Anzahl $n$ für Toleranz: Fehlerformel nach $h$ bzw. $n$ auflösen
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Simpson exakt für Polynome bis Grad 3 (trotz Ordnung 4)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/numerik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/numerik.js`
- **4-Block-Erklärung fehlt bei:** `ex-num-pruefung-2-1`, `ex-num-pruefung-2-2`, `ex-num-pruefung-2-3`, `ex-num-pruefung-2-4`, `ex-num-pruefung-2-5`, `ex-num-pruefung-2-6`, `ex-num-pruefung-2-7`, `ex-num-pruefung-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `numerik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent. · Bisektion: sicher aber linear, braucht Vorzeichenwechsel. · Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Newton die Ableitung falsch eingesetzt. · Simpson braucht gerade Anzahl Teilintervalle — oft übersehen. · Konvergenz von Newton nicht geprüft (kann oszillieren).
  - _Klausur-Fokus:_ Newton-Iteration für zwei Schritte mit Startwert. · Simpson-Regel mit $n=2$ oder $n=4$. · Fehlerordnung begründen.

#### `num-pruefung-3` · Prüfung: Kombinierte Aufgaben & Abbruchkriterien

- **Topic:** `numerik` (Numerische Mathematik) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×1, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** number-input, matching, sorting, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Methodenwahl-Matrix: Nullstelle → Newton/Bisekt.; Integral → Simpson; LGS → Gauß/LU
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Newton schlägt fehl bei $f' \approx 0$ → Bisektion als Fallback robust
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Abbruchkriterium: absolut $|x_{n+1} - x_n| < \epsilon_{\text{abs}}$ oder relativ
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Euler-Verfahren für DGL: explizit instabil bei steifen Systemen; implizit stabil
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Runge-Kutta 4 (RK4): Fehler $O(h^4)$, Standard für DGL-Anfangswertprobleme
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/numerik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/numerik.js`
- **4-Block-Erklärung fehlt bei:** `ex-num-pruefung-3-1`, `ex-num-pruefung-3-2`, `ex-num-pruefung-3-3`, `ex-num-pruefung-3-4`, `ex-num-pruefung-3-5`, `ex-num-pruefung-3-6`, `ex-num-pruefung-3-7`, `ex-num-pruefung-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `numerik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent. · Bisektion: sicher aber linear, braucht Vorzeichenwechsel. · Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Newton die Ableitung falsch eingesetzt. · Simpson braucht gerade Anzahl Teilintervalle — oft übersehen. · Konvergenz von Newton nicht geprüft (kann oszillieren).
  - _Klausur-Fokus:_ Newton-Iteration für zwei Schritte mit Startwert. · Simpson-Regel mit $n=2$ oder $n=4$. · Fehlerordnung begründen.

#### `stat-pruefung-1` · Prüfung: Schätzung & Hypothesentest

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — t-Test: Mittelwertvergleich, Verteilung bei unbekannter Varianz
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\chi^2$-Test: Anpassung an Verteilung oder Unabhängigkeitsprüfung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Testentscheidung: Prüfgröße mit Quantil vergleichen oder p-Wert mit $\alpha$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Freiheitsgrade bei t-Test $df = n - 1$, bei $\chi^2$-Anpassung $df = k - 1 - r$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Konfidenzintervall-Breite $\propto 1/\sqrt n$ — Halbierung braucht 4× Stichprobe
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-pruefung-1-1`, `ex-stat-pruefung-1-2`, `ex-stat-pruefung-1-3`, `ex-stat-pruefung-1-4`, `ex-stat-pruefung-1-5`, `ex-stat-pruefung-1-6`, `ex-stat-pruefung-1-7`, `ex-stat-pruefung-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `stat-pruefung-2` · Prüfung: Normalverteilung & Standardisierung

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Standardisierung: $Z = (X - \mu)/\sigma \sim N(0,1)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\Phi(-z) = 1 - \Phi(z)$ (Symmetrie)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — 68-95-99,7-Regel: $\pm 1\sigma \to 68\%$, $\pm 2\sigma \to 95\%$, $\pm 3\sigma \to 99{,}7\%$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Zentrale Quantile: $z_{0{,}025} = 1{,}96$, $z_{0{,}05} = 1{,}645$, $z_{0{,}01} = 2{,}576$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Rechts-, links-, beidseitiger Bereich: $P(X > a), P(X < a), P(a < X < b)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-pruefung-2-1`, `ex-stat-pruefung-2-2`, `ex-stat-pruefung-2-3`, `ex-stat-pruefung-2-4`, `ex-stat-pruefung-2-5`, `ex-stat-pruefung-2-6`, `ex-stat-pruefung-2-7`, `ex-stat-pruefung-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `stat-pruefung-3` · Prüfung: Konfidenzintervall & Gesamtaufgaben

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Prüfung · **[PRÜFUNG]**
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Stichprobenmittel $\bar x = (1/n) \sum x_i$, Stichproben-SD $s = \sqrt{\sum(x_i - \bar x)^2 /(n-1)}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 95%-KI: $\bar x \pm z_{0{,}025} \cdot \sigma/\sqrt n$ (Normalverteilung, $\sigma$ bekannt)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — t-KI bei $\sigma$ unbekannt: $\bar x \pm t_{n-1; 0{,}025} \cdot s/\sqrt n$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Stichprobenumfang: $n \geq (z_{\alpha/2} \sigma/\Delta)^2$ für Halbbreite $\Delta$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Teiler $n-1$ bei Stichproben-Varianz (Bessel-Korrektur, erwartungstreu)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-pruefung-3-1`, `ex-stat-pruefung-3-2`, `ex-stat-pruefung-3-3`, `ex-stat-pruefung-3-4`, `ex-stat-pruefung-3-5`, `ex-stat-pruefung-3-6`, `ex-stat-pruefung-3-7`, `ex-stat-pruefung-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `mech-3-2` · Dynamik: Prüfungsaufgaben

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Energieerhaltung mit Reibung: $E_1 = E_2 + W_R$ mit $W_R = F_R \cdot s$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Elastischer Stoß gleicher Massen: Geschwindigkeiten tauschen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Arbeitssatz: $\sum W_i = \Delta E_{\text{kin}}$ (Gesamtarbeit = Änderung kin. Energie)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Bei freiem Fall aus Höhe $h$: $v = \sqrt{2gh}$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Reibungskraft am Boden: $F_R = \mu m g$, Nettokraft $F - F_R$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-3-2-a`, `ex-mech-3-2-b`, `ex-mech-3-2-manual-1`, `ex-mech-3-2-manual-2`, `ex-mech-3-2-manual-3`, `ex-mech-3-2-manual-4`, `ex-mech-3-2-manual-5`, `ex-mech-3-2-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `et-3-2` · Wechselstrom Prüfungsaufgaben

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — RLC-Reihe Impedanz: $Z = R + j(\omega L - 1/(\omega C))$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Resonanzfrequenz: $\omega_0 = 1/\sqrt{LC}$, $f_0 = 1/(2\pi\sqrt{LC})$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Güte $Q = \omega_0 L/R = 1/(\omega_0 RC)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wirk-/Blind-/Scheinleistung: $P = S\cos\varphi$, $Q = S\sin\varphi$, $S = UI$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Tiefpass $-20$ dB/Dekade oberhalb $f_g$, Hochpass umgekehrt
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-3-2-a`, `ex-et-3-2-b`, `ex-et-3-2-manual-1`, `ex-et-3-2-manual-2`, `ex-et-3-2-manual-3`, `ex-et-3-2-manual-4`, `ex-et-3-2-manual-5`, `ex-et-3-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `py-4-1` · Prüfung: Code-Verständnis & Fehlersuche

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×5, true-false ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Indizierung: Python 0-basiert, Matlab 1-basiert (Off-by-one-Fehler!)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Operatoren: `*` vs `@`, `^` vs `.^` — elementweise vs. Matrix
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Python `range(a, b)`: $a, a+1, \ldots, b-1$; Matlab `a:b`: $a, a+1, \ldots, b$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Code Zeile-für-Zeile verfolgen, Variablenwerte neben Code notieren
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Typische Fehler: `=` vs `==`, fehlendes `:` in Python, Semikolon-Ausgabe in Matlab
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-4-1-a`, `ex-py-4-1-b`, `ex-py-4-1-c`, `ex-py-4-1-d`, `ex-py-4-1-e`, `ex-py-4-1-f`, `ex-py-4-1-g`, `ex-py-4-1-h` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `abl-4-1` · Prüfung: Ableitungsregeln

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×2, matching ×1
- **Typen einsetzen (Rotation):** sorting, matching, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Grundableitungen: $(x^n)' = n x^{n-1}$, $(e^x)' = e^x$, $(\ln x)' = 1/x$, $(\sin x)' = \cos x$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $(\cos x)' = -\sin x$ und $(\tan x)' = 1/\cos^2 x = 1 + \tan^2 x$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — $(a^x)' = a^x \ln a$ und $(\log_a x)' = 1/(x \ln a)$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Ableitung der Umkehrfunktion: $(f^{-1})'(y) = 1/f'(x)$ mit $y = f(x)$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Kombinierte Regeln: Produkt mit Kette, Quotient mit Kette — Teilschritte dokumentieren (Punkte!)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-4-1-a`, `ex-abl-4-1-b`, `ex-abl-4-1-c`, `ex-abl-4-1-d`, `ex-abl-4-1-e`, `ex-abl-4-1-f`, `ex-abl-4-1-g`, `ex-abl-4-1-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-4-2` · Prüfung: Kurvendiskussion & Anwendungen

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Optimierung: Zielfunktion aufstellen, Nebenbedingung einsetzen, auf eine Variable reduzieren
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Taylorreihe: $T_n(x) = \sum_{k=0}^n f^{(k)}(x_0)(x-x_0)^k/k!$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Näherungen bei $x_0 = 0$: $\sin x \approx x$, $\cos x \approx 1 - x^2/2$, $e^x \approx 1 + x + x^2/2$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Restglied (Lagrange): $R_n(x) = f^{(n+1)}(\xi)(x-x_0)^{n+1}/(n+1)!$ für ein $\xi$ dazwischen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Monotoniebereiche aus $f'$-Vorzeichen, Wendebereiche aus $f''$-Vorzeichen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-4-2-a`, `ex-abl-4-2-b`, `ex-abl-4-2-c`, `ex-abl-4-2-d`, `ex-abl-4-2-e`, `ex-abl-4-2-f`, `ex-abl-4-2-g`, `ex-abl-4-2-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-4-3` · Prüfung: Technische Optimierung & Newton-Verfahren

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Newton-Iteration: $x_{n+1} = x_n - f(x_n)/f'(x_n)$ — lokal quadratische Konvergenz
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Newton-Voraussetzungen: $f'(x_n) \neq 0$, guter Startwert nahe der Nullstelle
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Klassische Geometrie-Optima: Dose mit Deckel $h = 2r$, Rechteck $U$ const → Quadrat
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Max-Power-Theorem (ET): $R_L = R_i$ für maximale Leistung (Wirkungsgrad nur 50 %)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Globales Optimum: innere Kandidaten + Randwerte + Verhalten am Definitionsrand vergleichen
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Optimierung unter Nebenbedingung auch via Lagrange-Multiplikator $\nabla f = \lambda \nabla g$ (Vertiefung)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-4-3-a`, `ex-abl-4-3-b`, `ex-abl-4-3-c`, `ex-abl-4-3-d`, `ex-abl-4-3-e`, `ex-abl-4-3-f`, `ex-abl-4-3-g`, `ex-abl-4-3-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `vek-3-2` · Flächen- und Volumenberechnung

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Prüfungsvorbereitung Vektoren · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Parallelogrammfläche: $A = |\vec a \times \vec b|$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Dreiecksfläche: $A = \tfrac{1}{2} |\vec a \times \vec b|$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Spatvolumen: $V = |\vec a \cdot (\vec b \times \vec c)|$ (Spatprodukt)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Tetraedervolumen: $V = \tfrac{1}{6} |\vec a \cdot (\vec b \times \vec c)|$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Spatprodukt $= 0 \iff$ Vektoren komplanar (kein Volumen)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Vorzeichen ohne Betrag: $>0$ Rechtssystem, $<0$ Linkssystem
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-3-2-a`, `ex-vek-3-2-b`, `ex-vek-3-2-c`, `ex-vek-3-2-manual-1`, `ex-vek-3-2-manual-2`, `ex-vek-3-2-manual-3`, `ex-vek-3-2-manual-4`, `ex-vek-3-2-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `vek-3-3` · Technische Anwendungen

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Prüfungsvorbereitung Vektoren · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Schiefe Ebene: Hangabtrieb $F_H = G \sin\alpha$, Normalkraft $F_N = G \cos\alpha$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Drehmoment $\vec M = \vec r \times \vec F$: Betrag $|M| = r F \sin\alpha$, max bei $\alpha = 90°$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Drehmoment-Richtung via Rechte-Hand-Regel (Daumen = $\vec r$, Zeige = $\vec F$, Mittel = $\vec M$)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Einheiten: Kraft N, Hebel m, Moment Nm, Arbeit Nm = J
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Gleichgewicht: $\sum \vec F = 0$ UND $\sum \vec M = 0$ (alle Momentensummen um beliebigen Punkt)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-3-3-a`, `ex-vek-3-3-b`, `ex-vek-3-3-c`, `ex-vek-3-3-manual-1`, `ex-vek-3-3-manual-2`, `ex-vek-3-3-manual-3`, `ex-vek-3-3-manual-4`, `ex-vek-3-3-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `alg-4-1` · Prüfung: Algebra-Grundlagen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-1-1` → `pot-mult`, `pot-potenz`, `pot-negativ`
  - `alg-1-3` → `log-produkt`, `log-potenz`, `log-basiswechsel`, `log-umkehr`
  - `alg-2-2` → `abc-formel`, `diskriminante`
  - `alg-0-4` → `quadrieren-probe`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `pr-diskriminante` — Fallunterscheidung $D>0,=0,<0$ im Prüfungskontext (SG 0)
  2. `pr-exp-gleichung` — Exponentialgleichung $a^x=b$ durch Logarithmieren lösen (SG 1)
  3. `pr-wurzel-gleichung` — Wurzelgleichung: quadrieren + Probe gegen Scheinlösungen (SG 2)
  4. `pr-dimensionslos` — Argumente von $\ln,\log,e^\cdot$ sind dimensionslos (SG 3)
  5. `pr-rechenweg` — Prüfungsrechnung: jede Umformung benennen (SG 4)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `pr-diskriminante` · **0/5+** — Diskriminante: $D > 0$ zwei, $D = 0$ eine, $D < 0$ keine reelle Lösung
  - 🔴 [1] _hoch_ · Konzepte: `pr-exp-gleichung` · **0/5+** — Exponentialgleichung $a^x = b$: durch Logarithmieren $x = \log_a b = \ln b / \ln a$
  - 🔴 [2] _hoch_ · Konzepte: `pr-wurzel-gleichung` · **0/5+** — Wurzelgleichung: beide Seiten quadrieren + Probe (Scheinlösungen möglich)
  - 🔴 [3] _hoch_ · Konzepte: `pr-dimensionslos` · **0/5+** — Argumente von $\ln$, $\log$, $e^{(\cdot)}$ müssen dimensionslos sein
  - 🔴 [4] _mittel_ · Konzepte: `pr-rechenweg` · **0/5+** — Bei Prüfungsaufgaben Rechenweg sichtbar: jede Umformung nummerieren/benennen
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `pr-diskriminante` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `pr-diskriminante` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | number-input     | `pr-diskriminante` | 1 | 0 | 🔴 | [PRÜFUNG] |
|  4 | 0 | error-analysis     | multiple-choice  | `pr-diskriminante` | 1 | 0 | 🔴 |  |
|  5 | 0 | transfer           | matching         | `pr-diskriminante` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `pr-exp-gleichung` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `pr-exp-gleichung` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `pr-exp-gleichung` | 1 | 0 | 🔴 | [PRÜFUNG] |
|  9 | 1 | error-analysis     | multiple-choice  | `pr-exp-gleichung` | 1 | 0 | 🔴 |  |
| 10 | 1 | transfer           | sorting          | `pr-exp-gleichung` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `pr-wurzel-gleichung` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `pr-wurzel-gleichung` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | number-input     | `pr-wurzel-gleichung` | 1 | 0 | 🔴 | [PRÜFUNG] |
| 14 | 2 | error-analysis     | multiple-choice  | `pr-wurzel-gleichung` | 1 | 0 | 🔴 | Distraktor: Probe vergessen |
| 15 | 2 | transfer           | sorting          | `pr-wurzel-gleichung` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | true-false       | `pr-dimensionslos` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `pr-dimensionslos` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | multiple-choice  | `pr-dimensionslos` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `pr-dimensionslos` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | matching         | `pr-dimensionslos` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | true-false       | `pr-rechenweg` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `pr-rechenweg` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | sorting          | `pr-rechenweg` | 1 | 0 | 🔴 |  |
| 24 | 4 | error-analysis     | multiple-choice  | `pr-rechenweg` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | sorting          | `pr-rechenweg` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 25 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-4-1': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-4-1-a`, `ex-alg-4-1-b`, `ex-alg-4-1-d`, `ex-alg-4-1-e`, `ex-alg-4-1-f`, `ex-alg-4-1-g`, `ex-alg-4-1-h`, `ex-alg-4-1-i` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-4-2` · Prüfung: Funktionen & Anwendungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-2-2` → `abc-formel`, `faktor-form`
  - `alg-3-4` → `umkehr-verfahren`, `umkehr-bereiche`
  - `alg-3-2` → `exp-fkt`, `log-fkt`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `pr-scheitel-formel` — Scheitelpunkt Parabel: $x_S=-b/(2a)$, $y_S=f(x_S)$ (SG 0)
  2. `pr-scheitel-form` — Scheitelform $f(x)=a(x-x_S)^2 + y_S$ via quadratischer Ergänzung ⇐ `pr-scheitel-formel` (SG 1)
  3. `pr-umkehr-prakt` — Umkehrfunktion praktisch berechnen (SG 2)
  4. `pr-waermeausdehnung` — Wärmeausdehnung $l(T) = l_0(1+\alpha T)$ (SG 3)
  5. `pr-abklingen` — Abklingen $p(t)=p_0 e^{-kt}$, $t_{1/2}=\ln 2/k$ (SG 4)
  6. `pr-umsatz` — Umsatz $U(x)=x\cdot p(x)$, Maximum bei $U'(x)=0$ (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `pr-scheitel-formel` · **0/5+** — Scheitelpunkt Parabel $ax^2+bx+c$: $x_S = -b/(2a)$, $y_S = f(x_S)$
  - 🔴 [1] _hoch_ · Konzepte: `pr-scheitel-form` · **0/5+** — Scheitelform: $f(x) = a(x - x_S)^2 + y_S$ (quadratische Ergänzung)
  - 🔴 [2] _hoch_ · Konzepte: `pr-umkehr-prakt` · **0/5+** — Umkehrfunktion: $y = f(x)$ → nach $x$ auflösen → $x \leftrightarrow y$ tauschen
  - 🔴 [3] _mittel_ · Konzepte: `pr-waermeausdehnung` · **0/5+** — Anwendung Wärmeausdehnung: $l(T) = l_0(1 + \alpha T)$
  - 🔴 [4] _hoch_ · Konzepte: `pr-abklingen` · **0/5+** — Anwendung Abklingen: $p(t) = p_0 e^{-kt}$, Halbwertszeit $t_{1/2} = \ln 2/k$
  - 🔴 [5] _mittel_ · Konzepte: `pr-umsatz` · **0/5+** — Anwendung Umsatz: $U(x) = x \cdot p(x)$, Maximum bei $U'(x) = 0$
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `pr-scheitel-formel` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `pr-scheitel-formel` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | number-input     | `pr-scheitel-formel` | 1 | 0 | 🔴 | [PRÜFUNG] |
|  4 | 0 | error-analysis     | multiple-choice  | `pr-scheitel-formel` | 1 | 0 | 🔴 |  |
|  5 | 0 | transfer           | matching         | `pr-scheitel-formel` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `pr-scheitel-form` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `pr-scheitel-form` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `pr-scheitel-form` | 1 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `pr-scheitel-form` | 1 | 0 | 🔴 | Vorzeichen von $h$ in $(x-h)^2$ |
| 10 | 1 | transfer           | sorting          | `pr-scheitel-form`, `pr-scheitel-formel` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `pr-umkehr-prakt` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `pr-umkehr-prakt` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | number-input     | `pr-umkehr-prakt` | 1 | 0 | 🔴 | [PRÜFUNG] |
| 14 | 2 | error-analysis     | multiple-choice  | `pr-umkehr-prakt` | 1 | 0 | 🔴 |  |
| 15 | 2 | transfer           | sorting          | `pr-umkehr-prakt` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | true-false       | `pr-waermeausdehnung` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `pr-waermeausdehnung` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | number-input     | `pr-waermeausdehnung` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `pr-waermeausdehnung` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | number-input     | `pr-waermeausdehnung` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | true-false       | `pr-abklingen` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `pr-abklingen` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | number-input     | `pr-abklingen` | 1 | 0 | 🔴 | Halbwertszeit |
| 24 | 4 | error-analysis     | multiple-choice  | `pr-abklingen` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | number-input     | `pr-abklingen` | 1 | 0 | 🔴 |  |
| 26 | 5 | recognize          | true-false       | `pr-umsatz` | 1 | 0 | 🔴 |  |
| 27 | 5 | apply-guided       | multiple-choice  | `pr-umsatz` | 1 | 0 | 🔴 |  |
| 28 | 5 | apply-independent  | number-input     | `pr-umsatz` | 1 | 0 | 🔴 |  |
| 29 | 5 | error-analysis     | multiple-choice  | `pr-umsatz` | 1 | 0 | 🔴 |  |
| 30 | 5 | transfer           | number-input     | `pr-umsatz` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 30 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-4-2': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-4-2-a`, `ex-alg-4-2-b`, `ex-alg-4-2-c`, `ex-alg-4-2-e`, `ex-alg-4-2-f`, `ex-alg-4-2-g`, `ex-alg-4-2-h`, `ex-alg-4-2-j` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-4-3` · Prüfung: Gleichungs­systeme & technische Anwendungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-2-1` → `iso-variable`, `koeff-dividieren`, `probe-einsetzen`
  - `alg-1-3` → `log-def`, `log-basiswechsel`, `log-potenz`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `pr-lgs-methoden` — $2\times2$-LGS: Einsetzungs-, Additions-, Gleichsetzungsmethode (SG 0)
  2. `pr-betrag-fall` — Betrag auflösen: Fallunterscheidung $|x|=\pm x$ (SG 1)
  3. `pr-pH` — pH-Wert $\text{pH}=-\log_{10}[\text H^+]$ (SG 2)
  4. `pr-dB` — Dezibel-Skala $L=10\log_{10}(P/P_0)$ bzw. $=20\log_{10}(U/U_0)$ (SG 3)
  5. `pr-lgs-faelle` — LGS-Lösungsfälle: eindeutig/keine/unendlich viele ⇐ `pr-lgs-methoden` (SG 4)
  6. `pr-technik-lgs` — Technik-LGS: Maschenregel, Biegespannung, Mischrechnung ⇐ `pr-lgs-methoden` (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `pr-lgs-methoden` · **0/5+** — $2\times 2$-LGS: Einsetzungs-, Additions-, Gleichsetzungsmethode — alle äquivalent
  - 🔴 [1] _hoch_ · Konzepte: `pr-betrag-fall` · **0/5+** — Betrag auflösen: Fallunterscheidung $|x| = x$ für $x \geq 0$, $|x| = -x$ für $x < 0$
  - 🔴 [2] _hoch_ · Konzepte: `pr-pH` · **0/5+** — pH-Wert: $\text{pH} = -\log_{10}[H^+]$ (logarithmische Skala der H⁺-Konzentration)
  - 🔴 [3] _hoch_ · Konzepte: `pr-dB` · **0/5+** — dB-Skala: $L = 10 \log_{10}(P/P_0)$ (Leistung) bzw. $= 20 \log_{10}(U/U_0)$ (Amplitude)
  - 🔴 [4] _hoch_ · Konzepte: `pr-lgs-faelle` · **0/5+** — LGS-Lösungsfälle: eindeutig (det $\neq 0$), keine Lösung (Widerspruch), unendlich (parallel)
  - 🔴 [5] _mittel_ · Konzepte: `pr-technik-lgs` · **0/5+** — Technik-Anwendungen: Kirchhoffsche Maschenregeln, Biegespannung, Mischrechnung
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | matching         | `pr-lgs-methoden` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `pr-lgs-methoden` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | number-input     | `pr-lgs-methoden` | 1 | 0 | 🔴 | [PRÜFUNG] |
|  4 | 0 | error-analysis     | multiple-choice  | `pr-lgs-methoden` | 1 | 0 | 🔴 |  |
|  5 | 0 | transfer           | sorting          | `pr-lgs-methoden` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `pr-betrag-fall` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `pr-betrag-fall` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `pr-betrag-fall` | 1 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `pr-betrag-fall` | 1 | 0 | 🔴 | Distraktor: nur positiven Fall |
| 10 | 1 | transfer           | sorting          | `pr-betrag-fall` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `pr-pH` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `pr-pH` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | number-input     | `pr-pH` | 1 | 0 | 🔴 |  |
| 14 | 2 | error-analysis     | multiple-choice  | `pr-pH` | 1 | 0 | 🔴 |  |
| 15 | 2 | transfer           | number-input     | `pr-pH` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | true-false       | `pr-dB` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `pr-dB` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | number-input     | `pr-dB` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `pr-dB` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | number-input     | `pr-dB` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | matching         | `pr-lgs-faelle` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `pr-lgs-faelle` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | multiple-choice  | `pr-lgs-faelle` | 1 | 0 | 🔴 |  |
| 24 | 4 | error-analysis     | multiple-choice  | `pr-lgs-faelle` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | matching         | `pr-lgs-faelle` | 1 | 0 | 🔴 |  |
| 26 | 5 | recognize          | matching         | `pr-technik-lgs` | 1 | 0 | 🔴 |  |
| 27 | 5 | apply-guided       | multiple-choice  | `pr-technik-lgs` | 1 | 0 | 🔴 |  |
| 28 | 5 | apply-independent  | number-input     | `pr-technik-lgs` | 1 | 0 | 🔴 | [PRÜFUNG] technisch |
| 29 | 5 | error-analysis     | multiple-choice  | `pr-technik-lgs` | 1 | 0 | 🔴 |  |
| 30 | 5 | transfer           | number-input     | `pr-technik-lgs` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 30 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-4-3': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-4-3-a`, `ex-alg-4-3-b`, `ex-alg-4-3-c`, `ex-alg-4-3-d`, `ex-alg-4-3-e`, `ex-alg-4-3-f`, `ex-alg-4-3-g`, `ex-alg-4-3-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `la-3-1` · Prüfung: Matrizen & Determinanten

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×2
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Matrixmultiplikation Zeile × Spalte — $AB \neq BA$ im Allgemeinen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Laplace-Entwicklung: $\det A = \sum_j (-1)^{i+j} a_{ij} M_{ij}$ (beliebige Zeile/Spalte)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Inverse-Test: $A^{-1}$ existiert $\iff \det A \neq 0 \iff \text{rg}(A) = n$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Rang via Gauss: Zeilenstufenform → Anzahl Nicht-Null-Zeilen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Äquivalenzkette: $A$ invertierbar $\iff \det \neq 0 \iff \text{rg} = n \iff A\vec x = \vec b$ eindeutig
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Parameteraufgabe: $A(\lambda)$, Werte für $\lambda$ finden, bei denen $\det = 0$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-3-1-a`, `ex-la-3-1-b`, `ex-la-3-1-c`, `ex-la-3-1-d`, `ex-la-3-1-e`, `ex-la-3-1-f`, `ex-la-3-1-g`, `ex-la-3-1-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-3-2` · Prüfung: LGS & Eigenwerte

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×1, true-false ×2
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Rouché-Capelli-Kriterium: $\text{rg}(A) = \text{rg}([A|b])$ für Lösbarkeit
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Freie Variablen = $n - \text{rg}(A)$ (Parametrisierung der Lösungsmenge)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Eigenwerte via $\det(A - \lambda I) = 0$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Eigenvektor: Kern von $(A - \lambda I)$, normieren falls gefordert
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Spur = $\sum \lambda_i$, Determinante = $\prod \lambda_i$ (Quercheck!)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Defekt: algebraische Vielfachheit > geometrische → nicht diagonalisierbar
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-3-2-a`, `ex-la-3-2-b`, `ex-la-3-2-c`, `ex-la-3-2-d`, `ex-la-3-2-e`, `ex-la-3-2-f`, `ex-la-3-2-g`, `ex-la-3-2-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-3-3` · Prüfung: Diagonalisierung & technische Anwendungen

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Diagonalisierung: $A = PDP^{-1}$ mit $P = $ EV-Matrix, $D = \text{diag}(\lambda_i)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Bedingung: $n$ linear unabhängige Eigenvektoren (algebr. = geom. Vielfachheit)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Matrixpotenzen via $A^k = P D^k P^{-1}$ (nur Diagonale potenzieren!)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Spektralsatz (symm. Matrix): reelle EW, orthogonale EV, $A = Q D Q^T$ mit $Q$ orthogonal
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Technik: Hauptträgheitsachsen, Hauptspannungen, Eigenfrequenzen, Stabilität ($|\lambda| < 1$)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Defekte Matrix: nicht diagonalisierbar → Jordan-Normalform (Vertiefung)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-3-3-a`, `ex-la-3-3-b`, `ex-la-3-3-c`, `ex-la-3-3-d`, `ex-la-3-3-e`, `ex-la-3-3-f`, `ex-la-3-3-g`, `ex-la-3-3-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `int-4-1` · Prüfung: Integrationstechniken

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×2
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Methodenwahl in Sekundenschnelle: innere Ableitung? → Subst., Produkt? → Part.Int., Bruch? → PBZ
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Bestimmtes Integral: Grenzen bei Substitution mit umrechnen, nicht rücksubstituieren
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Symmetrie nutzen: $\int_{-a}^a f(x) dx = 0$ bei ungerade, $= 2\int_0^a$ bei gerade
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Trigonometrische Substitution $x = a \sin u$ für $\sqrt{a^2 - x^2}$, $x = a \tan u$ für $a^2 + x^2$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Zweifache partielle Integration + Rückführung auf Ausgangsintegral (Kreistrick)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-4-1-a`, `ex-int-4-1-b`, `ex-int-4-1-c`, `ex-int-4-1-d`, `ex-int-4-1-e`, `ex-int-4-1-f`, `ex-int-4-1-g`, `ex-int-4-1-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-4-2` · Prüfung: Anwendungen der Integralrechnung

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2
- **Typen einsetzen (Rotation):** matching, sorting, true-false, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Flächenträgheitsmoment Rechteck: $I_x = bh^3/12$ um Schwerachse, $= bh^3/3$ um Rand
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Steiner'scher Satz: $I_a = I_s + A \cdot d^2$ (Abstand $d$ zwischen Achsen)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Schwerpunkt zusammengesetzter Flächen: $\bar{x} = \sum A_i \bar{x}_i / \sum A_i$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Rotationsvolumen mit Subtraktion: $V = \pi \int (f^2 - g^2) dx$ (Hohlkörper)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Wurfparabel / Strom-Zeit-Integrale als technische Flächenrechnung
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-4-2-a`, `ex-int-4-2-b`, `ex-int-4-2-c`, `ex-int-4-2-d`, `ex-int-4-2-e`, `ex-int-4-2-f`, `ex-int-4-2-g`, `ex-int-4-2-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-4-3` · Prüfung: Uneigentliche & numerische Integrale

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Uneigentliches Integral: $\int_a^\infty f dx = \lim_{b\to\infty} \int_a^b f dx$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — p-Integral $\int_1^\infty x^{-p} dx$: konvergent für $p > 1$, divergent sonst
  - 🔴 [2] (hoch) **0/5+** Aufgaben — p-Integral $\int_0^1 x^{-p} dx$: konvergent für $p < 1$, divergent sonst
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Trapezregel: $T = h[(f_0+f_n)/2 + \sum f_i]$, Fehler $O(h^2)$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Simpson-Regel: $S = (h/3)[f_0 + 4 \sum_{\text{ung.}} + 2 \sum_{\text{ger.}} + f_n]$, Fehler $O(h^4)$, $n$ gerade!
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Vergleichs-/Majorantenkriterium: $0 \leq f \leq g$, $\int g$ konv. $\Rightarrow \int f$ konv.
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-4-3-a`, `ex-int-4-3-b`, `ex-int-4-3-c`, `ex-int-4-3-d`, `ex-int-4-3-e`, `ex-int-4-3-f`, `ex-int-4-3-g`, `ex-int-4-3-h` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `mech-3-1` · Statik: Prüfungsaufgaben

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Freikörperbild: alle äußeren Kräfte und Momente einzeichnen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Drei Gleichgewichtsbedingungen in 2D: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M_P = 0$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Lagertypen: Loslager (1 Reaktion), Festlager (2), Einspannung (3)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Momentensumme um geschickten Punkt (oft Auflager) eliminiert Unbekannte
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Statisch bestimmt: Anzahl Gleichungen = Anzahl Reaktionen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-3-1-a`, `ex-mech-3-1-b`, `ex-mech-3-1-c`, `ex-mech-3-1-manual-1`, `ex-mech-3-1-manual-2`, `ex-mech-3-1-manual-3`, `ex-mech-3-1-manual-4`, `ex-mech-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `fest-3-1` · Festigkeit: Prüfungsaufgaben

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×5, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kombinierte Beanspruchung: Vergleichsspannung nach GEH (Mises) oder NH
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Mises: $\sigma_v = \sqrt{\sigma^2 + 3\tau^2}$ für Zug+Torsion
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Nachweis: $\sigma_v \leq R_e/S$ bzw. $R_m/S$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Querschnitts-Design: Welle dimensionieren aus gegebenen $M_b$, $M_T$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Sicherheit $S = R/\sigma_v \geq S_\text{soll}$ als Ergebnis angeben
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-3-1-a`, `ex-fest-3-1-b`, `ex-fest-3-1-c`, `ex-fest-3-1-manual-1`, `ex-fest-3-1-manual-2`, `ex-fest-3-1-manual-3`, `ex-fest-3-1-manual-4`, `ex-fest-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `thermo-3-1` · Thermo: Prüfungsaufgaben

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×5, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Isotherme Expansion: $W = nRT \ln(V_2/V_1)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Isobar: $W = p \Delta V$, $Q = n c_p \Delta T$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Isochor: $W = 0$, $Q = n c_v \Delta T$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Adiabatisch: $pV^\gamma = $ const, $TV^{\gamma-1} = $ const
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Zustandsgleichung ideales Gas: $pV = nRT$ (oder $p = \rho R_s T$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-3-1-a`, `ex-thermo-3-1-b`, `ex-thermo-3-1-c`, `ex-thermo-3-1-manual-1`, `ex-thermo-3-1-manual-2`, `ex-thermo-3-1-manual-3`, `ex-thermo-3-1-manual-4`, `ex-thermo-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `pv-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `fluid-3-1` · Fluid: Prüfungsaufgaben

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bernoulli vollständig: $p_1 + \tfrac{1}{2}\rho v_1^2 + \rho g z_1 = p_2 + \ldots$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Staudruck/Pitot: $v = \sqrt{2\Delta p/\rho}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kontinuität + Bernoulli kombiniert für Düsen/Verengungen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Torricelli-Ausfluss: $v = \sqrt{2gh}$ (freies Ausströmen unter Wasserhöhe)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Reynolds-Zahl entscheidet Strömungsregime; laminar/turbulent bestimmt $\lambda$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-3-1-a`, `ex-fluid-3-1-b`, `ex-fluid-3-1-c`, `ex-fluid-3-1-manual-1`, `ex-fluid-3-1-manual-2`, `ex-fluid-3-1-manual-3`, `ex-fluid-3-1-manual-4`, `ex-fluid-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `melem-3-1` · ME: Prüfungsaufgaben

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×6, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Leistung: $P = M \omega = M (2\pi n/60)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Umfangskraft am Zahnrad: $F_t = 2M/d$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Mehrstufige Übersetzung: $i_\text{ges} = \prod i_i$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Abtriebsdrehzahl: $n_2 = n_1/i_\text{ges}$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Drehmoment steigt bei Untersetzung: $M_2 = i M_1 \eta$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-3-1-a`, `ex-melem-3-1-b`, `ex-melem-3-1-c`, `ex-melem-3-1-manual-1`, `ex-melem-3-1-manual-2`, `ex-melem-3-1-manual-3`, `ex-melem-3-1-manual-4`, `ex-melem-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `et-3-1` · Gleichstrom Prüfungsaufgaben

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×5, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Reihe: $R_\text{ges} = \sum R_i$; Parallel: $1/R_\text{ges} = \sum 1/R_i$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Spannungsteiler: $U_1 = U \cdot R_1/(R_1 + R_2)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Stromteiler: $I_k = I_\text{ges} \cdot R_\text{par}/R_k$ (umgekehrt proportional)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Energie: $W = P \cdot t$; 1 kWh = 3{,}6 MJ
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Kirchhoff-Methode: Maschen + Knoten → LGS für mehrere unbekannte Ströme
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-3-1-a`, `ex-et-3-1-b`, `ex-et-3-1-c`, `ex-et-3-1-manual-1`, `ex-et-3-1-manual-2`, `ex-et-3-1-manual-3`, `ex-et-3-1-manual-4`, `ex-et-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `rt-3-1` · Regelkreis & PID Prüfungsaufgaben

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Führungs-Übertragungsfunktion: $T(s) = G_0/(1+G_0)$ mit $G_0 = G_R G_S$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Stationärer Regelfehler P-Regler: $e_\text{stat} = 1/(1+K_0)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — I-Anteil erzwingt $e_\text{stat} = 0$ bei konstantem Sollwert
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Typ $k$ eines Systems: Anzahl der Integratoren in $G_0$; bestimmt Folgevermögen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Rampenfolge: Typ 0 dauerhafter Fehler, Typ 1 Ausgleich, Typ 2 Beschleunigungsfolge
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-rt-3-1-a`, `ex-rt-3-1-b`, `ex-rt-3-1-c`, `ex-rt-3-1-manual-1`, `ex-rt-3-1-manual-2`, `ex-rt-3-1-manual-3`, `ex-rt-3-1-manual-4`, `ex-rt-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `vek-3-1` · Gemischte Aufgaben Skalar- und Kreuzprodukt

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Prüfungsvorbereitung Vektoren · **[PRÜFUNG]**
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Skalarprodukt liefert **Zahl**, Kreuzprodukt liefert **Vektor** (nur in 3D)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Winkel: $\cos\varphi = (\vec a \cdot \vec b)/(|\vec a||\vec b|)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Orthogonalitätstest: $\vec a \cdot \vec b = 0$; Parallelitätstest: $\vec a \times \vec b = \vec 0$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Skalarprodukt kommutativ: $\vec a \cdot \vec b = \vec b \cdot \vec a$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Kreuzprodukt **anti**kommutativ: $\vec a \times \vec b = -(\vec b \times \vec a)$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Arbeit $W = \vec F \cdot \vec s$ (Skalar), Drehmoment $\vec M = \vec r \times \vec F$ (Vektor)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-3-1-a`, `ex-vek-3-1-d`, `ex-vek-3-1-e`, `ex-vek-3-1-manual-1`, `ex-vek-3-1-manual-2`, `ex-vek-3-1-manual-3`, `ex-vek-3-1-manual-4`, `ex-vek-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `fl-3-1` · Fourier Prüfungsaufgaben

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×4, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Symmetrie nutzen: gerade Funktion → nur Kosinusreihe, ungerade → nur Sinusreihe
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Koeffizienten $a_n = (2/T)\int_0^T f(t)\cos(n\omega t)dt$, analog $b_n$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Konstantes Glied $a_0/2$ = Mittelwert der Funktion über eine Periode
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Parseval: Energie im Zeit- und Frequenzbereich gleich
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Konvergenz: punktweise bei Mittelwert-Sprung, gleichmäßig bei stetiger Fortsetzung
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Spektrum periodisch: diskrete Linien bei $n\omega_0$; aperiodisch: kontinuierlich $F(\omega)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-3-1-1`, `ex-fl-3-1-2`, `ex-fl-3-1-3`, `ex-fl-3-1-4`, `ex-fl-3-1-5`, `ex-fl-3-1-6`, `ex-fl-3-1-7`, `ex-fl-3-1-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

#### `fl-3-2` · Laplace Prüfungsaufgaben

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Sprungantwort: $Y(s) = G(s)/s$, Partialbruch + Rücktransformation
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Impulsantwort: $Y(s) = G(s)$ → direkt rücktransformieren
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Stabilität: alle Pole in linker s-Halbebene ($\text{Re}(p_i) < 0$)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Pol bei $s = -a$ → $e^{-at}$ in Zeitdomäne, konjugiert komplex → gedämpfte Schwingung
  - 🔴 [4] (hoch) **0/5+** Aufgaben — PT1: $G(s) = K/(1 + Ts)$, Zeitkonstante $T$, Verstärkung $K$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — PT2: $G(s) = K\omega_0^2/(s^2 + 2D\omega_0 s + \omega_0^2)$, Dämpfungsgrad $D$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-3-2-1`, `ex-fl-3-2-2`, `ex-fl-3-2-3`, `ex-fl-3-2-4`, `ex-fl-3-2-5`, `ex-fl-3-2-6`, `ex-fl-3-2-7`, `ex-fl-3-2-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

### 🟠 Hoch (< 8 Aufgaben) — 5 Lessons

#### `vek-1-0` · Koordinaten, Punkte & Pfeile (Einstieg)

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Vektorrechnung
- **Aufgaben aktuell:** 5 · **mindestens:** 20 · **fehlen bis Minimum:** 15 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** number-input, sorting, true-false, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Punkt = Ort mit Koordinaten; Vektor = Verschiebung mit Richtung und Länge
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Vektor von $A$ nach $B$: $\vec{AB} = B - A$ (komponentenweise Subtraktion)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Freier Vektor: gleicher Richtung und Länge → gleicher Vektor, egal wo eingezeichnet
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 15 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `mech-0-1` · SI-Basiseinheiten & Präfixe

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Einheiten & Dimensionsanalyse (Einstieg)
- **Aufgaben aktuell:** 5 · **mindestens:** 20 · **fehlen bis Minimum:** 15 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, multiple-choice, true-false, matching, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — SI-Präfixe giga, mega, kilo, milli, mikro, nano zuordnen
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Kilogramm als einzige SI-Basiseinheit mit Präfix
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Wissenschaftliche Notation $a \cdot 10^n$ sicher schreiben
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 15 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-0-2` · Abgeleitete Einheiten (N, J, Pa, W)

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Einheiten & Dimensionsanalyse (Einstieg)
- **Aufgaben aktuell:** 5 · **mindestens:** 20 · **fehlen bis Minimum:** 15 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×1, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, multiple-choice, true-false, matching, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Newton $1\,\text{N} = 1\,\text{kg}\cdot\text{m}/\text{s}^2$ zerlegen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $1\,\text{MPa} = 1\,\text{N}/\text{mm}^2$ (Ingenieur-Konvention)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — bar $\leftrightarrow$ Pa: $1\,\text{bar}=10^5\,\text{Pa}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Dimensionsanalyse als Kontrollschritt
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 15 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-1-3` · Schnittkräfte N(x), Q(x), M(x)

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Statik
- **Aufgaben aktuell:** 5 · **mindestens:** 20 · **fehlen bis Minimum:** 15 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×2, true-false ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Drei Schnittgrößen: Normalkraft $N(x)$, Querkraft $Q(x)$, Biegemoment $M(x)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Zusammenhang: $Q(x) = dM/dx$, $q(x) = -dQ/dx$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Sprung in $Q$ bei Einzellast $F$, Knick in $M$ bei Einzellast
  - 🔴 [3] (hoch) **0/5+** Aufgaben — $M_{\max}$ an Stelle mit $Q = 0$ (gefährliche Stelle)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — An gelenkigen Auflagern ist $M = 0$ (Randbedingung)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 15 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-1-3-a`, `ex-mech-1-3-b`, `ex-mech-1-3-c`, `ex-mech-1-3-d`, `ex-mech-1-3-e`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-2-3` · Kinematik

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Dynamik
- **Aufgaben aktuell:** 5 · **mindestens:** 20 · **fehlen bis Minimum:** 15 (mehr ist besser, kein Cap)
- **Typen vorhanden:** number-input ×5
- **Typen einsetzen (Rotation):** multiple-choice, true-false, matching, sorting, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Gleichförmig beschleunigt: $v = v_0 + at$, $s = s_0 + v_0 t + \tfrac{1}{2}at^2$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Energiegleichung: $v^2 = v_0^2 + 2a\Delta s$ (ohne Zeit)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Freier Fall: $a = g$, $v = gt$, $h = \tfrac{1}{2}gt^2$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Schräger Wurf: $v_x = v_0 \cos\alpha$, $v_y = v_0 \sin\alpha$, Wurfweite $= v_0^2 \sin 2\alpha/g$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Kreisbewegung: $\omega = 2\pi/T = 2\pi n$, $v = r\omega$, $a_z = v^2/r = r\omega^2$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Impulserhaltung: $\sum m_i v_i = $ const (auch bei unelastischem Stoß)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 15 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-2-3-a`, `ex-mech-2-3-b`, `ex-mech-2-3-c`, `ex-mech-2-3-d`, `ex-mech-2-3-e`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

### 🟡 Mittel (Baseline nicht erreicht oder Goal-Tasks fehlen) — 130 Lessons

#### `abl-5-2` · Stetigkeit von Funktionen

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grenzwerte und Stetigkeit
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Stetigkeit in $a$: $\lim_{x \to a} f(x) = f(a)$ (beide Seiten gleich UND gleich Funktionswert)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hebbare Unstetigkeit: Grenzwert existiert, aber $f(a)$ fehlt oder weicht ab
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Sprungstelle: links- und rechtsseitiger Grenzwert existieren, sind aber verschieden
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Polstelle: $|f(x)| \to \infty$ für $x \to a$ (kein endlicher Grenzwert)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Zwischenwertsatz: $f$ stetig auf $[a,b]$ nimmt jeden Wert zwischen $f(a)$ und $f(b)$ an
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Differenzierbar $\Rightarrow$ stetig, aber Umkehrung falsch (z.B. $|x|$ bei $0$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-5-2-manual-1`, `ex-abl-5-2-manual-2`, `ex-abl-5-2-manual-3`, `ex-abl-5-2-manual-4`, `ex-abl-5-2-manual-5`, `ex-abl-5-2-manual-6`, `ex-abl-5-2-manual-7`, `ex-abl-5-2-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `werk-1-1` · Spannungs-Dehnungs-Diagramm

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Werkstoffkennwerte
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $R_e$ = Streckgrenze (Ende elastisch); $R_m$ = Zugfestigkeit (Maximum); nicht verwechseln
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $R_{p0,2}$ = 0,2-%-Dehngrenze bei Werkstoffen ohne ausgeprägte Streckgrenze (z. B. Aluminium)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — E-Modul = Steigung im linearen (Hookeschen) Bereich: $E = \sigma/\varepsilon$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Bruchdehnung $A$ in %: $(l_u - l_0)/l_0 \cdot 100$ — zäh vs. spröde
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Sicherheit $S = R_m/\sigma_\text{zul}$ bzw. $R_e/\sigma_\text{zul}$ — wo welcher Kennwert?
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-1-1-manual-1`, `ex-werk-1-1-manual-2`, `ex-werk-1-1-manual-3`, `ex-werk-1-1-manual-4`, `ex-werk-1-1-manual-5`, `ex-werk-1-1-manual-6`, `ex-werk-1-1-manual-7`, `ex-werk-1-1-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `werk-1-2` · Werkstoffgruppen

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Werkstoffkennwerte
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Metalle: zäh, gut umformbar, gut wärmeleitend — tragende Konstruktionen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Keramik: hart, hitzebeständig, spröde — **nicht auf Zug** belasten
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Kunststoffe: leicht, korrosionsfest, niedriger E-Modul — Gehäuse, Gleitlager
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Verbunde (CFK, GFK): hohe spezifische Steifigkeit $E/\rho$ — Leichtbau
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Spezifische Steifigkeit $E/\rho$ als Leichtbau-Kennzahl (Titan, CFK, Alu > Stahl)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-1-2-manual-1`, `ex-werk-1-2-manual-2`, `ex-werk-1-2-manual-3`, `ex-werk-1-2-manual-4`, `ex-werk-1-2-manual-5`, `ex-werk-1-2-manual-6`, `ex-werk-1-2-manual-7`, `ex-werk-1-2-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `werk-2-1` · Härteprüfung (HV, HB, HRC)

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Prüfverfahren
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Vickers (HV): Diamantpyramide, universell für hart und dünn; Brinell (HB): Kugel, für weichere Werkstoffe
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rockwell (HRC): direkt ablesbar am Messgerät — schnellste Prüfmethode in der Fertigung
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Faustformel Stahl: $R_m \approx 3{,}5 \cdot HV$ in MPa — Härte korreliert mit Zugfestigkeit
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Prüfkraft und Probendicke müssen zusammen passen, sonst verfälscht Untergrund das Ergebnis
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-2-1-manual-1`, `ex-werk-2-1-manual-2`, `ex-werk-2-1-manual-3`, `ex-werk-2-1-manual-4`, `ex-werk-2-1-manual-5`, `ex-werk-2-1-manual-6`, `ex-werk-2-1-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `werk-2-2` · Kerbschlagbiegeversuch

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Prüfverfahren
- **Aufgaben aktuell:** 8 · **mindestens:** 20 · **fehlen bis Minimum:** 12 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Charpy-Versuch: Pendel bricht gekerbte Probe, $KV = mg(h_0 - h_1)$ in Joule
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hohe $KV$ → zäh, niedrige $KV$ → spröde
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kritischer Grenzwert Stahlbau: $KV \geq 27$ J bei Einsatztemperatur
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Übergangstemperatur $T_\ddot{U}$: Abfall von $KV$ unterhalb → Sprödbruchgefahr bei Kälte
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Stahlbezeichnungen: J0 bei 0°C, J2 bei −20°C, K2 bei −40°C geprüft
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 12 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-2-2-manual-1`, `ex-werk-2-2-manual-2`, `ex-werk-2-2-manual-3`, `ex-werk-2-2-manual-4`, `ex-werk-2-2-manual-5`, `ex-werk-2-2-manual-6`, `ex-werk-2-2-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `komz-1-1` · Imaginäre Einheit & Gaußsche Zahlenebene

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Kartesische Form
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×1, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** number-input, true-false, matching, sorting, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $i^2 = -1$ als Definition — $i$ ist keine Variable, sondern fixes Symbol
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\operatorname{Re}(z)$ und $\operatorname{Im}(z)$: beide reell (der Imaginärteil ist **nicht** $bi$, sondern $b$)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Konjugierte $\bar z = a - bi$: Spiegelung an reeller Achse
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Reelle Zahl ⇔ $\operatorname{Im}(z) = 0$; rein imaginär ⇔ $\operatorname{Re}(z) = 0$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-1-1-1`, `ex-komz-1-1-2`, `ex-komz-1-1-3`, `ex-komz-1-1-4`, `ex-komz-1-1-5`, `ex-komz-1-1-6`, `ex-komz-1-1-7`, `ex-komz-1-1-8` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `complex-plane` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-1-2` · Rechnen in kartesischer Form (+, −, ·, :)

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Kartesische Form
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Addition/Subtraktion komponentenweise — wie Vektoren
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Multiplikation: $(a+bi)(c+di)$ ausmultiplizieren und $i^2 = -1$ einsetzen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Division: Zähler **und** Nenner mit $\bar{c+di} = c-di$ erweitern → Nenner reell $c^2 + d^2$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — $z \cdot \bar z = |z|^2 = a^2 + b^2$ — immer reell und nicht-negativ
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-1-2-1`, `ex-komz-1-2-2`, `ex-komz-1-2-3`, `ex-komz-1-2-4`, `ex-komz-1-2-5`, `ex-komz-1-2-6`, `ex-komz-1-2-7`, `ex-komz-1-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-2-1` · Betrag, Argument, Polarform

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Polarform, Euler & Rechnen
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Betrag: $|z| = \sqrt{a^2 + b^2}$ (Pythagoras)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Argument: $\varphi = \arg(z)$ mit $\text{atan2}(b,a)$ (Quadrant beachten!)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Polarform: $z = |z|(\cos\varphi + i\sin\varphi) = |z| e^{i\varphi}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Rücktransformation: $a = |z|\cos\varphi$, $b = |z|\sin\varphi$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Hauptwert des Arguments: $\varphi \in (-\pi, \pi]$ (Konvention)
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Typische Falle: einfacher $\arctan(b/a)$ gibt falschen Quadranten
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-2-1-1`, `ex-komz-2-1-2`, `ex-komz-2-1-3`, `ex-komz-2-1-4`, `ex-komz-2-1-5`, `ex-komz-2-1-6`, `ex-komz-2-1-7`, `ex-komz-2-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-2-2` · Euler-Formel & Exponentialdarstellung

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Polarform, Euler & Rechnen
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Euler-Formel: $e^{i\varphi} = \cos\varphi + i\sin\varphi$
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Euler'sche Identität: $e^{i\pi} + 1 = 0$ (fünf Konstanten in einer Gleichung)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Multiplikation: $z_1 z_2 = r_1 r_2 e^{i(\varphi_1 + \varphi_2)}$ (Beträge mal, Argumente plus)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Division: $z_1/z_2 = (r_1/r_2) e^{i(\varphi_1 - \varphi_2)}$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Konjugiert-komplex in Polarform: $\bar z = r e^{-i\varphi}$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Sinus/Cosinus aus Euler: $\cos\varphi = (e^{i\varphi} + e^{-i\varphi})/2$, $\sin\varphi = (e^{i\varphi} - e^{-i\varphi})/(2i)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-2-2-1`, `ex-komz-2-2-2`, `ex-komz-2-2-3`, `ex-komz-2-2-4`, `ex-komz-2-2-5`, `ex-komz-2-2-6`, `ex-komz-2-2-7`, `ex-komz-2-2-8` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `complex-plane` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-3-1` · Potenzen — Formel von de Moivre

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Potenzen & Wurzeln
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Moivre: $z^n = |z|^n e^{in\varphi} = |z|^n (\cos n\varphi + i \sin n\varphi)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Betrag hoch $n$, Argument mal $n$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Anwendung: Mehrfach-Winkel-Formeln ($\cos 2\varphi, \sin 3\varphi, \ldots$) herleitbar
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Geometrisch: Streckung + Drehung — wiederholte Rotation um $\varphi$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Negative Potenzen: $z^{-1} = (1/|z|) e^{-i\varphi}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-3-1-1`, `ex-komz-3-1-2`, `ex-komz-3-1-3`, `ex-komz-3-1-4`, `ex-komz-3-1-5`, `ex-komz-3-1-6`, `ex-komz-3-1-7`, `ex-komz-3-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `komz-3-2` · Wurzeln — alle n-ten Wurzeln finden

- **Topic:** `komplexe-zahlen` (Komplexe Zahlen) · **Unit:** Potenzen & Wurzeln
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Wurzelformel: $z_k = |w|^{1/n} e^{i(\varphi + 2\pi k)/n}$ für $k = 0, 1, \ldots, n-1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Anzahl: genau $n$ verschiedene $n$-te Wurzeln (Fundamentalsatz der Algebra)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Geometrisch: regelmäßiges $n$-Eck auf Kreis mit Radius $|w|^{1/n}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Winkelabstand zwischen Wurzeln: $2\pi/n$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Einheitswurzeln ($w=1$): $z_k = e^{i 2\pi k/n}$ — Ecken eines regelmäßigen $n$-Ecks
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Hauptwurzel $k=0$: die mit kleinstem positivem Argument
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/komplexe_zahlen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/komplexe_zahlen.js`
- **4-Block-Erklärung fehlt bei:** `ex-komz-3-2-1`, `ex-komz-3-2-2`, `ex-komz-3-2-3`, `ex-komz-3-2-4`, `ex-komz-3-2-5`, `ex-komz-3-2-6`, `ex-komz-3-2-7`, `ex-komz-3-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `komplexe-zahlen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ $i^2=-1$, Betrag $|z|=\sqrt{a^2+b^2}$, Argument $\arg z=\arctan(b/a)$. · Euler: $e^{i\varphi}=\cos\varphi + i\sin\varphi$. · Multiplikation in Polarform: Beträge mal, Argumente addieren. · …
  - _Typische Fehler (gute Distraktoren):_ Argument in falschem Quadranten bestimmt — atan2 statt atan nutzen. · Bei $n$-ten Wurzeln nur eine Lösung angegeben — es sind IMMER $n$ Stück. · $|z|^2 = z\bar z$ vergessen.
  - _Klausur-Fokus:_ Polar- ↔ Kartesisch umrechnen. · Potenz mit de Moivre $(re^{i\varphi})^n=r^n e^{in\varphi}$. · $n$-te Wurzeln auf dem Einheitskreis darstellen.

#### `rf-1-1` · Folgen und Grenzwerte

- **Topic:** `reihen-folgen` (Reihen & Folgen) · **Unit:** Folgen, Reihen & Konvergenz
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×1, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** number-input, matching, sorting, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Grenzwert $\lim_{n\to\infty} a_n$ anschaulich als „bleibt schließlich in jedem $\varepsilon$-Schlauch" begreifen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rationale Folgen: Grad-Vergleich (Zähler/Nenner) entscheidet über $0$, endlicher Grenzwert oder $\pm\infty$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Grenzwertsätze: Summe, Produkt, Quotient (sofern Nennergrenzwert $\neq 0$)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Monoton + beschränkt $\Rightarrow$ konvergent (ohne Grenzwert ausrechnen zu müssen)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Nullfolgen: $1/n$, $1/n^k$, $q^n$ mit $|q|<1$ — als Bausteine auswendig
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/reihen_folgen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/reihen_folgen.js`
- **4-Block-Erklärung fehlt bei:** `ex-rf-1-1-1`, `ex-rf-1-1-2`, `ex-rf-1-1-3`, `ex-rf-1-1-4`, `ex-rf-1-1-5`, `ex-rf-1-1-6`, `ex-rf-1-1-7`, `ex-rf-1-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `taylor-approx`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `reihen-folgen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$. · Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$. · Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz. · …
  - _Typische Fehler (gute Distraktoren):_ Konvergenzkriterium für $|q|=1$ falsch bewertet. · Taylor-Entwicklungspunkt nicht mit angegeben. · Restglied ignoriert.
  - _Klausur-Fokus:_ Konvergenz einer Reihe per Quotientenkriterium. · Taylor-Polynom 3. Grades an gegebener Stelle.

#### `rf-1-2` · Taylor-Polynome

- **Topic:** `reihen-folgen` (Reihen & Folgen) · **Unit:** Folgen, Reihen & Konvergenz
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Taylor-Formel $T_n(x) = \sum_{k=0}^n f^{(k)}(x_0)/k! \cdot (x-x_0)^k$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Maclaurin-Reihen auswendig: $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $1/(1-x)$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Lagrange-Restglied $R_n = f^{(n+1)}(\xi)/(n+1)! \cdot (x-x_0)^{n+1}$ zum Fehler abschätzen
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Gerade Funktionen (cos) haben nur gerade Potenzen; ungerade (sin) nur ungerade
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/reihen_folgen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/reihen_folgen.js`
- **4-Block-Erklärung fehlt bei:** `ex-rf-1-2-1`, `ex-rf-1-2-2`, `ex-rf-1-2-3`, `ex-rf-1-2-4`, `ex-rf-1-2-5`, `ex-rf-1-2-6`, `ex-rf-1-2-7`, `ex-rf-1-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `taylor-approx`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `reihen-folgen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Geometrische Reihe: $\sum q^n=1/(1-q)$ für $|q|<1$. · Harmonische Reihe divergiert, p-Reihen konvergieren für $p>1$. · Quotientenkriterium $\lim|a_{n+1}/a_n|<1 \Rightarrow$ Konvergenz. · …
  - _Typische Fehler (gute Distraktoren):_ Konvergenzkriterium für $|q|=1$ falsch bewertet. · Taylor-Entwicklungspunkt nicht mit angegeben. · Restglied ignoriert.
  - _Klausur-Fokus:_ Konvergenz einer Reihe per Quotientenkriterium. · Taylor-Polynom 3. Grades an gegebener Stelle.

#### `mdim-1-1` · Partielle Ableitung verstehen

- **Topic:** `mehrdim-analysis` (Mehrdim. Analysis) · **Unit:** Partielle Ableitungen & Gradient
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Beim Ableiten nach einer Variable: alle anderen sind **Konstanten**
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Schreibweisen $f_x$, $\partial f/\partial x$, $D_x f$ gleichwertig erkennen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Gradient $\nabla f = (f_x, f_y)^T$ zeigt Richtung des steilsten Anstiegs
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Gradient $\perp$ Höhenlinie — Normale an Niveaumengen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Satz von Schwarz: $f_{xy} = f_{yx}$ (bei stetigen zweiten Ableitungen)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/mehrdim_analysis.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/mehrdim_analysis.js`
- **4-Block-Erklärung fehlt bei:** `ex-mdim-1-1-1`, `ex-mdim-1-1-2`, `ex-mdim-1-1-3`, `ex-mdim-1-1-4`, `ex-mdim-1-1-5`, `ex-mdim-1-1-6`, `ex-mdim-1-1-7`, `ex-mdim-1-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-3d`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `mehrdim-analysis`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Partielle Ableitung: alle anderen Variablen als Konstante behandeln. · Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs. · Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend). · …
  - _Typische Fehler (gute Distraktoren):_ Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet. · Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum). · Richtungsvektor bei $D_{\vec u}$ nicht normiert.
  - _Klausur-Fokus:_ Extrema einer Funktion $f(x,y)$. · Lagrange-Multiplikatoren bei Nebenbedingung. · Tangentialebene in einem Punkt aufstellen.

#### `mdim-1-2` · Hesse-Matrix und Lagrange-Multiplikatoren

- **Topic:** `mehrdim-analysis` (Mehrdim. Analysis) · **Unit:** Partielle Ableitungen & Gradient
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×1, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** number-input, true-false, matching, sorting, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Notwendige Bedingung für Extremum: $\nabla f = 0$ (kritischer Punkt)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hesse-Matrix $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$ — Symmetrie nutzen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — $\det H > 0 \wedge f_{xx} > 0$ → Minimum, $< 0 \wedge f_{xx} < 0$ → Maximum, $\det H < 0$ → Sattel
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Lagrange: $\nabla f = \lambda\,\nabla g$ bei Nebenbedingung $g(x,y) = 0$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Lagrange-System: $\nabla f - \lambda \nabla g = 0$ **und** $g = 0$ gemeinsam lösen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/mehrdim_analysis.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/mehrdim_analysis.js`
- **4-Block-Erklärung fehlt bei:** `ex-mdim-1-2-1`, `ex-mdim-1-2-2`, `ex-mdim-1-2-3`, `ex-mdim-1-2-4`, `ex-mdim-1-2-5`, `ex-mdim-1-2-6`, `ex-mdim-1-2-7`, `ex-mdim-1-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-3d`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `mehrdim-analysis`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Partielle Ableitung: alle anderen Variablen als Konstante behandeln. · Gradient $\nabla f$ zeigt in Richtung des steilsten Anstiegs. · Extrema: $\nabla f=\vec 0$ (notwendig) + Definitheit der Hesse-Matrix (hinreichend). · …
  - _Typische Fehler (gute Distraktoren):_ Bei partieller Ableitung die "konstanten" Variablen versehentlich mit abgeleitet. · Hesse-Matrix-Definitheit falsch interpretiert (positiv definit = Minimum). · Richtungsvektor bei $D_{\vec u}$ nicht normiert.
  - _Klausur-Fokus:_ Extrema einer Funktion $f(x,y)$. · Lagrange-Multiplikatoren bei Nebenbedingung. · Tangentialebene in einem Punkt aufstellen.

#### `num-1-1` · Newton-Verfahren

- **Topic:** `numerik` (Numerische Mathematik) · **Unit:** Nullstellen & Integration
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Iterationsvorschrift $x_{n+1} = x_n - f(x_n)/f'(x_n)$ korrekt aufbauen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Abbruchkriterium: $|x_{n+1} - x_n| < \varepsilon$ **oder** $|f(x_n)| < \delta$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Quadratische Konvergenz: Anzahl korrekter Stellen verdoppelt sich pro Schritt (bei guten Startwerten)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Stolperfallen: $f'(x_n) = 0$ (Tangente horizontal), schlechter Startwert → Divergenz
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/numerik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/numerik.js`
- **4-Block-Erklärung fehlt bei:** `ex-num-1-1-1`, `ex-num-1-1-2`, `ex-num-1-1-3`, `ex-num-1-1-4`, `ex-num-1-1-5`, `ex-num-1-1-6`, `ex-num-1-1-7`, `ex-num-1-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `numerik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent. · Bisektion: sicher aber linear, braucht Vorzeichenwechsel. · Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Newton die Ableitung falsch eingesetzt. · Simpson braucht gerade Anzahl Teilintervalle — oft übersehen. · Konvergenz von Newton nicht geprüft (kann oszillieren).
  - _Klausur-Fokus:_ Newton-Iteration für zwei Schritte mit Startwert. · Simpson-Regel mit $n=2$ oder $n=4$. · Fehlerordnung begründen.

#### `num-1-2` · Bisektion und numerische Integration

- **Topic:** `numerik` (Numerische Mathematik) · **Unit:** Nullstellen & Integration
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bisektion benötigt Vorzeichenwechsel: $f(a)\cdot f(b) < 0$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Fehler der Bisektion nach $n$ Schritten: $(b-a)/2^n$ → Schrittzahl auflösen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Trapezregel: $\tfrac{h}{2}(f_0 + 2f_1 + \ldots + 2f_{n-1} + f_n)$; Fehler $O(h^2)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Simpson: nur bei **gerader** Teilintervallanzahl anwendbar; Fehler $O(h^4)$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Simpson ist exakt für Polynome bis Grad 3
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/numerik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/numerik.js`
- **4-Block-Erklärung fehlt bei:** `ex-num-1-2-1`, `ex-num-1-2-2`, `ex-num-1-2-3`, `ex-num-1-2-4`, `ex-num-1-2-5`, `ex-num-1-2-6`, `ex-num-1-2-7`, `ex-num-1-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `numerik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$, quadratisch konvergent. · Bisektion: sicher aber linear, braucht Vorzeichenwechsel. · Trapezregel: $I\approx h[y_0/2+y_1+\ldots+y_{n-1}+y_n/2]$, Fehler $O(h^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Newton die Ableitung falsch eingesetzt. · Simpson braucht gerade Anzahl Teilintervalle — oft übersehen. · Konvergenz von Newton nicht geprüft (kann oszillieren).
  - _Klausur-Fokus:_ Newton-Iteration für zwei Schritte mit Startwert. · Simpson-Regel mit $n=2$ oder $n=4$. · Fehlerordnung begründen.

#### `stat-1-1` · Erwartungswert und Varianz

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Zufallsvariablen & Verteilungen
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Erwartungswert $E(X) = \sum_i x_i\,p_i$ bei diskreter $X$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Verschiebungssatz: $\operatorname{Var}(X) = E(X^2) - E(X)^2$ (rechnerisch meist einfacher)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Einheiten: $E(X)$ wie $X$, $\operatorname{Var}(X)$ wie $X^2$, $\sigma$ wie $X$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Linearität: $E(aX + b) = a\,E(X) + b$, $\operatorname{Var}(aX + b) = a^2\,\operatorname{Var}(X)$ (Konstante fällt weg)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-1-1-1`, `ex-stat-1-1-2`, `ex-stat-1-1-3`, `ex-stat-1-1-4`, `ex-stat-1-1-5`, `ex-stat-1-1-6`, `ex-stat-1-1-7`, `ex-stat-1-1-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `stat-1-2` · Normalverteilung

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Zufallsvariablen & Verteilungen
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Parameter: $\mu$ verschiebt, $\sigma$ streckt die Glockenkurve
  - 🔴 [1] (hoch) **0/5+** Aufgaben — z-Transformation $Z = (X-\mu)/\sigma$: jede Normalverteilung auf $N(0,1)$ zurückführen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — 68/95/99{,}7-Regel: $\pm1\sigma$, $\pm2\sigma$, $\pm3\sigma$-Intervalle als Schätzung auswendig
  - 🔴 [3] (hoch) **0/5+** Aufgaben — $\Phi(z) = P(Z \le z)$: Tabelle nur für $z \ge 0$, für $z < 0$ Symmetrie $\Phi(-z) = 1 - \Phi(z)$ nutzen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — $P(a \le X \le b) = \Phi(\tfrac{b-\mu}{\sigma}) - \Phi(\tfrac{a-\mu}{\sigma})$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-1-2-1`, `ex-stat-1-2-2`, `ex-stat-1-2-3`, `ex-stat-1-2-4`, `ex-stat-1-2-5`, `ex-stat-1-2-6`, `ex-stat-1-2-7`, `ex-stat-1-2-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `stat-1-3` · Hypothesentest und Konfidenzintervall

- **Topic:** `statistik` (Statistik & Wahrscheinlichkeit) · **Unit:** Zufallsvariablen & Verteilungen
- **Aufgaben aktuell:** 9 · **mindestens:** 20 · **fehlen bis Minimum:** 11 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — p-Wert < $\alpha$ → $H_0$ verwerfen (signifikantes Ergebnis)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 95%-Konfidenzintervall Mittelwert: $\bar x \pm 1{,}96 \cdot \sigma/\sqrt n$ (normalverteilt)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Fehler 1. Art ($\alpha$): $H_0$ verworfen obwohl wahr; 2. Art ($\beta$): $H_0$ behalten obwohl falsch
  - 🔴 [3] (mittel) **0/5+** Aufgaben — t-Test bei unbekannter Varianz: $t = (\bar x - \mu_0)/(s/\sqrt n)$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Einseitig vs. zweiseitig: einseitiger Test nutzt $z_\alpha$, zweiseitig $z_{\alpha/2}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/statistik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 11 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/statistik.js`
- **4-Block-Erklärung fehlt bei:** `ex-stat-1-3-1`, `ex-stat-1-3-2`, `ex-stat-1-3-3`, `ex-stat-1-3-4`, `ex-stat-1-3-5`, `ex-stat-1-3-6`, `ex-stat-1-3-7`, `ex-stat-1-3-8` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `statistik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Erwartungswert $E[X]=\sum x\,P(X=x)$ bzw. Integral. · Varianz $\operatorname{Var}(X)=E[X^2]-(E[X])^2$. · Normalverteilung: $\pm 1\sigma$ ≈ 68 %, $\pm 2\sigma$ ≈ 95 %, $\pm 3\sigma$ ≈ 99{,}7 %. · …
  - _Typische Fehler (gute Distraktoren):_ $P(X<a)$ und $P(X\le a)$ bei stetigen Verteilungen identisch, bei diskreten NICHT. · Konfidenzintervall als "Wahrscheinlichkeit für Wert" interpretiert statt "Wahrscheinlichkeit für Intervall-Bildung". · Einseitiger vs. zweiseitiger Test verwechselt.
  - _Klausur-Fokus:_ Wahrscheinlichkeit bei Normalverteilung mit Standardisierung. · Erwartungswert und Varianz einer diskreten Verteilung. · 95%-Konfidenzintervall für Mittelwert.

#### `trig-2-3` · Symmetrien und Periodizität

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Einheitskreis und Winkelfunktionen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Periodizität: $\sin(\alpha + 360°) = \sin\alpha$, $\cos(\alpha + 360°) = \cos\alpha$ (Periode $2\pi$)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\sin$ ungerade: $\sin(-\alpha) = -\sin\alpha$ — Spiegelung an $x$-Achse kippt $y$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — $\cos$ gerade: $\cos(-\alpha) = \cos\alpha$ — $x$-Koordinate unverändert
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Supplementformel: $\sin(180°-\alpha) = \sin\alpha$, $\cos(180°-\alpha) = -\cos\alpha$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Komplementformel: $\sin(90°-\alpha) = \cos\alpha$, $\cos(90°-\alpha) = \sin\alpha$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Punktspiegelung: $\sin(180°+\alpha) = -\sin\alpha$, $\cos(180°+\alpha) = -\cos\alpha$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-2-3-b`, `ex-trig-2-3-manual-1`, `ex-trig-2-3-manual-2`, `ex-trig-2-3-manual-3`, `ex-trig-2-3-manual-4`, `ex-trig-2-3-manual-5`, `ex-trig-2-3-manual-6`, `ex-trig-2-3-manual-7` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-2-4` · Tangens im Einheitskreis

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Einheitskreis und Winkelfunktionen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Definition: $\tan\alpha = \sin\alpha/\cos\alpha = y/x$ — Steigung der Ursprungsgerade
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Polstellen bei $\alpha = 90° + k\cdot 180°$ (überall dort $\cos\alpha = 0$)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Periode von $\tan$ ist $180°$, nicht $360°$ (Steigung wiederholt sich nach halber Drehung)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — ASTC-Vorzeichen: $\tan > 0$ in 1. und 3. Quadrant, $\tan < 0$ in 2. und 4.
  - 🔴 [4] (mittel) **0/5+** Aufgaben — $\tan$ ist ungerade: $\tan(-\alpha) = -\tan\alpha$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Wertebereich: $(-\infty, +\infty)$, keine Beschränkung wie bei $\sin$/$\cos$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-2-4-a`, `ex-trig-2-4-b`, `ex-trig-2-4-manual-1`, `ex-trig-2-4-manual-2`, `ex-trig-2-4-manual-3`, `ex-trig-2-4-manual-4`, `ex-trig-2-4-manual-5`, `ex-trig-2-4-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-2-5` · Alle vier Quadranten

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Einheitskreis und Winkelfunktionen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Quadrantengrenzen: Q1 $0°$–$90°$, Q2 $90°$–$180°$, Q3 $180°$–$270°$, Q4 $270°$–$360°$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — ASTC-Regel: **A**lle (Q1), **S**inus (Q2), **T**angens (Q3), **C**osinus (Q4) positiv
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Referenzwinkel = Abstand zur nächsten $x$-Achsen-Hälfte ($0°$ oder $180°$)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — 4-Schritt-Verfahren: Quadrant → Referenzwinkel → Grundwert (Q1) → Vorzeichen aus ASTC
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Standardwerte $\sin$/$\cos$ für $0°/30°/45°/60°/90°$ auswendig, Rest per Reduktion
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Winkel $> 360°$ oder $< 0°$ per $\alpha \bmod 360°$ in Hauptbereich bringen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-2-5-b`, `ex-trig-2-5-manual-1`, `ex-trig-2-5-manual-2`, `ex-trig-2-5-manual-3`, `ex-trig-2-5-manual-4`, `ex-trig-2-5-manual-5`, `ex-trig-2-5-manual-6`, `ex-trig-2-5-manual-7` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-3-1` · Additionstheoreme

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Anwendungen und Identitäten
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ (Kreuzform, Vorzeichen folgt Winkel)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$ (umgekehrtes Vorzeichen!)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — $\tan(\alpha \pm \beta) = (\tan\alpha \pm \tan\beta)/(1 \mp \tan\alpha\tan\beta)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Linearitäts-Falle: $\sin(\alpha+\beta) \neq \sin\alpha + \sin\beta$ (nie addieren!)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Anwendung: exakte Werte wie $\sin 15°$, $\cos 75°$ aus Summen/Differenzen bekannter Grundwinkel
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-3-1-a`, `ex-trig-3-1-b`, `ex-trig-3-1-manual-1`, `ex-trig-3-1-manual-2`, `ex-trig-3-1-manual-3`, `ex-trig-3-1-manual-4`, `ex-trig-3-1-manual-5`, `ex-trig-3-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-3-2` · Doppelwinkelformeln und Pythagoreischer Satz

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Anwendungen und Identitäten
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $\sin(2\alpha) = 2\sin\alpha\cos\alpha$ (aus Additionstheorem mit $\beta = \alpha$)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$ (drei Formen)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Pythagoras-Identität $\sin^2\alpha + \cos^2\alpha = 1$ als Kreisgleichung am Einheitskreis
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Folgerungen: $\sin^2\alpha = 1 - \cos^2\alpha$, $\cos^2\alpha = 1 - \sin^2\alpha$ (zum Umwandeln)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Halbwinkel-Formeln: $\sin^2(\alpha/2) = (1-\cos\alpha)/2$, $\cos^2(\alpha/2) = (1+\cos\alpha)/2$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-3-2-a`, `ex-trig-3-2-b`, `ex-trig-3-2-manual-1`, `ex-trig-3-2-manual-2`, `ex-trig-3-2-manual-3`, `ex-trig-3-2-manual-4`, `ex-trig-3-2-manual-5`, `ex-trig-3-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-3-3` · Technische Anwendungen

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Anwendungen und Identitäten
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kraftzerlegung: $F_x = F\cos\alpha$, $F_y = F\sin\alpha$ (Winkel zur $x$-Achse)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Schwingung $x(t) = A\sin(\omega t + \varphi)$: $A$ Amplitude, $\omega$ Kreisfrequenz, $\varphi$ Phasenwinkel
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Zusammenhang $\omega = 2\pi f = 2\pi/T$ (Kreisfrequenz, Frequenz, Periode)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Pythagoras-Check: $F_x^2 + F_y^2 = F^2$ (Komponenten müssen zur Gesamtkraft passen)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Schiefe Ebene: Hangabtriebskraft $F_H = m g \sin\alpha$, Normalkraft $F_N = m g \cos\alpha$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-3-3-a`, `ex-trig-3-3-manual-1`, `ex-trig-3-3-manual-2`, `ex-trig-3-3-manual-3`, `ex-trig-3-3-manual-4`, `ex-trig-3-3-manual-5`, `ex-trig-3-3-manual-6`, `ex-trig-3-3-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-3-4` · Inverse Funktionen

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Anwendungen und Identitäten
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $\arcsin: [-1,1] \to [-90°, 90°]$ (rechte Hälfte, monoton wachsend)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $\arccos: [-1,1] \to [0°, 180°]$ (obere Hälfte, monoton fallend)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — $\arctan: \mathbb{R} \to (-90°, 90°)$ (Pole ausgeschlossen)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Umkehrfunktion liefert nur Hauptwert — weitere Lösungen via Periodizität/Symmetrie ergänzen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Taschenrechner-Modus DEG/RAD unbedingt beachten (häufigste Fehlerquelle)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Notation $\sin^{-1}$ für $\arcsin$ nicht mit $1/\sin$ verwechseln
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-3-4-b`, `ex-trig-3-4-manual-1`, `ex-trig-3-4-manual-2`, `ex-trig-3-4-manual-3`, `ex-trig-3-4-manual-4`, `ex-trig-3-4-manual-5`, `ex-trig-3-4-manual-6`, `ex-trig-3-4-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `vek-1-3` · Kreuzprodukt

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Vektorrechnung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kreuzprodukt liefert *Vektor* senkrecht auf $\vec a$ und $\vec b$ — nicht Skalar wie das Skalarprodukt
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Betrag $|\vec a \times \vec b| = |\vec a| |\vec b| \sin\varphi$ = Flächeninhalt des Parallelogramms
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Richtung per Rechte-Hand-Regel; $\vec a \times \vec b = -\vec b \times \vec a$ (antikommutativ)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Nur in 3D definiert; Komponentenformel oder Sarrus-Merkschema mit Einheitsvektoren
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-1-3-a`, `ex-vek-1-3-b`, `ex-vek-1-3-manual-1`, `ex-vek-1-3-manual-2`, `ex-vek-1-3-manual-3`, `ex-vek-1-3-manual-4`, `ex-vek-1-3-manual-5`, `ex-vek-1-3-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `vector-diagram`, `vector-3d`, `force-parallelogram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `vek-1-4` · Kräfte als Vektoren (Prüfung)

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Vektorrechnung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kraftkomponenten: $F_x = F \cos\alpha$, $F_y = F \sin\alpha$ (Winkel zur $x$-Achse)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Resultierende: $\vec R = \sum \vec F_i$ komponentenweise addieren
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Gleichgewicht: $\sum F_x = 0$ UND $\sum F_y = 0$ UND $\sum F_z = 0$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Einheitsvektor: $\hat e = \vec a / |\vec a|$ (dimensionslos, Länge 1)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Betrag und Richtung: $|\vec R| = \sqrt{R_x^2 + R_y^2}$, $\tan\alpha = R_y/R_x$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Plausibilitätscheck: Vorzeichen der Komponenten passt zur Skizze?
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-1-4-b`, `ex-vek-1-4-manual-1`, `ex-vek-1-4-manual-2`, `ex-vek-1-4-manual-3`, `ex-vek-1-4-manual-4`, `ex-vek-1-4-manual-5`, `ex-vek-1-4-manual-6`, `ex-vek-1-4-manual-7` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `vector-diagram`, `vector-3d`, `force-parallelogram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `mech-1-1` · Kräfte und Freikörperbild

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Statik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Freikörperbild: Körper isolieren, alle äußeren Kräfte (inkl. Gewicht, Lagerreaktionen) eintragen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Kraft = Vektor: Betrag + Richtung — Pfeile in positives Koordinatensystem, Vorzeichen ergibt sich aus Rechnung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Standard-Lagersymbole: Festlager (2 Reaktionen), Loslager (1 Reaktion), Einspannung (2 Kräfte + 1 Moment)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Gleichgewicht in 2D: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$ → max. 3 Unbekannte statisch bestimmbar
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-1-1-a`, `ex-mech-1-1-b`, `ex-mech-1-1-manual-1`, `ex-mech-1-1-manual-2`, `ex-mech-1-1-manual-3`, `ex-mech-1-1-manual-4`, `ex-mech-1-1-manual-5`, `ex-mech-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-1-2` · Momente und Hebelarm

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Statik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Moment $M = F \cdot l_\perp$ — $l_\perp$ ist der SENKRECHTE Abstand vom Bezugspunkt zur Wirkungslinie
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Drehsinn-Konvention: gegen Uhrzeiger positiv (rechte Hand / Rechte-Hand-Regel in 3D)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Bezugspunkt frei wählbar — klug wählen: Punkt mit vielen unbekannten Kräften eliminiert diese
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Kreuzprodukt-Variante: $\vec M = \vec r \times \vec F$ in 3D oder bei schiefen Kräften
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-1-2-a`, `ex-mech-1-2-b`, `ex-mech-1-2-manual-1`, `ex-mech-1-2-manual-2`, `ex-mech-1-2-manual-3`, `ex-mech-1-2-manual-4`, `ex-mech-1-2-manual-5`, `ex-mech-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-2-1` · Newtonsche Gesetze

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Dynamik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — 2. Newton: $\sum \vec F = m \vec a$ (Grundgleichung der Dynamik)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 1. Newton: ohne Kraft → gleichförmige Bewegung (Trägheitsprinzip)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — 3. Newton: actio = reactio, $\vec F_{AB} = -\vec F_{BA}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Gewichtskraft: $F_G = m \cdot g$ mit $g \approx 9{,}81$ m/s²
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Masse (kg) ist Eigenschaft des Körpers, Gewichtskraft (N) Kraft im Schwerefeld
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-2-1-a`, `ex-mech-2-1-b`, `ex-mech-2-1-manual-1`, `ex-mech-2-1-manual-2`, `ex-mech-2-1-manual-3`, `ex-mech-2-1-manual-4`, `ex-mech-2-1-manual-5`, `ex-mech-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-2-2` · Arbeit und Energie

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Dynamik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Arbeit: $W = F \cdot s \cdot \cos\alpha$ (Skalarprodukt), Einheit Joule
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Senkrechte Kraft leistet keine Arbeit ($\cos 90° = 0$)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kinetische Energie: $E_{\text{kin}} = \tfrac{1}{2} m v^2$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Potentielle Energie: $E_{\text{pot}} = m g h$ (nahe Erdoberfläche)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Federenergie: $E_{\text{Feder}} = \tfrac{1}{2} c x^2$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Energieerhaltung: $E_{\text{kin}} + E_{\text{pot}} = $ const (konservatives System)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/technische_mechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/technische_mechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-mech-2-2-a`, `ex-mech-2-2-b`, `ex-mech-2-2-manual-1`, `ex-mech-2-2-manual-2`, `ex-mech-2-2-manual-3`, `ex-mech-2-2-manual-4`, `ex-mech-2-2-manual-5`, `ex-mech-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `fest-1-1` · Normalspannung

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Spannung und Dehnung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $\sigma = F/A$ — Kraft normal zur Fläche, Einheit $\mathrm{N/mm^2 = MPa}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 1 MPa = 1 N/mm² = $10^6$ Pa: Einheiten-Umrechnung ohne Rechenfehler
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Zug vs. Druck: Vorzeichenkonvention (+Zug, −Druck) klar halten
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Querschnittsfläche: bei Kreis $A = \pi d^2/4$, nicht $\pi d^2$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-1-1-a`, `ex-fest-1-1-b`, `ex-fest-1-1-manual-1`, `ex-fest-1-1-manual-2`, `ex-fest-1-1-manual-3`, `ex-fest-1-1-manual-4`, `ex-fest-1-1-manual-5`, `ex-fest-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `fest-1-2` · Hookesches Gesetz

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Spannung und Dehnung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $\sigma = E\,\varepsilon$ im linear-elastischen Bereich — nur hier gilt Hooke
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Dehnung $\varepsilon = \Delta l / l_0$ dimensionslos; oft in ‰ oder %
  - 🔴 [2] (hoch) **0/5+** Aufgaben — E-Modul ist **Material-Konstante**, unabhängig von Geometrie (Stahl $\approx 210\,\mathrm{GPa}$)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Querkontraktion $\varepsilon_q = -\nu\,\varepsilon$ mit Poisson-Zahl $\nu \approx 0{,}3$ (Stahl)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-1-2-a`, `ex-fest-1-2-b`, `ex-fest-1-2-manual-1`, `ex-fest-1-2-manual-2`, `ex-fest-1-2-manual-3`, `ex-fest-1-2-manual-4`, `ex-fest-1-2-manual-5`, `ex-fest-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `fest-2-1` · Biegespannung

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Biegung und Torsion
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Biegespannung: $\sigma_b = M_b/W_b$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Axiales Widerstandsmoment Rechteck: $W_b = bh^2/6$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kreisquerschnitt: $W_b = \pi d^3/32$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Spannungsverteilung linear im Querschnitt: Null in neutraler Faser, max. am Rand
  - 🔴 [4] (mittel) **0/5+** Aufgaben — $\sigma_b = M_b y/I$ für beliebige Stelle $y$ von neutraler Faser
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-2-1-a`, `ex-fest-2-1-b`, `ex-fest-2-1-manual-1`, `ex-fest-2-1-manual-2`, `ex-fest-2-1-manual-3`, `ex-fest-2-1-manual-4`, `ex-fest-2-1-manual-5`, `ex-fest-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `fest-2-2` · Sicherheitszahl

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Biegung und Torsion
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Zulässige Spannung: $\sigma_\text{zul} = R/S$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Festigkeitsnachweis: $\sigma_\text{vorh} \leq \sigma_\text{zul}$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Typische Sicherheitszahlen: $S = 1{,}5$ (zäh, statisch) bis $S = 4$ (dynamisch, spröde)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Referenz-Kennwerte: $R_e$ (Streckgrenze, zäh), $R_m$ (Zugfestigkeit, spröde)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Größeres $S$ → kleineres $\sigma_\text{zul}$ (mehr Sicherheit = weniger Auslastung erlaubt)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/festigkeitslehre.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/festigkeitslehre.js`
- **4-Block-Erklärung fehlt bei:** `ex-fest-2-2-a`, `ex-fest-2-2-b`, `ex-fest-2-2-manual-1`, `ex-fest-2-2-manual-2`, `ex-fest-2-2-manual-3`, `ex-fest-2-2-manual-4`, `ex-fest-2-2-manual-5`, `ex-fest-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `thermo-1-1` · Ideales Gas

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Zustandsgrößen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $pV = nRT$ mit $R = 8{,}314\,\mathrm{J/(mol\,K)}$; alternativ $p V = m R_s T$ mit spez. Gaskonstante
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Temperatur **immer** in Kelvin: $T[K] = T[°C] + 273{,}15$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Einheiten: $p$ in Pa, $V$ in m³, $n$ in mol — keine Liter/bar in die Grundformel
  - 🔴 [3] (mittel) **0/5+** Aufgaben — $R_s = R/M$ aus molarer Masse $M$ des Gases (Luft: $M \approx 28{,}96\,\mathrm{g/mol}$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-1-1-a`, `ex-thermo-1-1-b`, `ex-thermo-1-1-manual-1`, `ex-thermo-1-1-manual-2`, `ex-thermo-1-1-manual-3`, `ex-thermo-1-1-manual-4`, `ex-thermo-1-1-manual-5`, `ex-thermo-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `pv-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `thermo-1-2` · Druck und Arbeit

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Zustandsgrößen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Volumenarbeit $W = \int p\,dV$ = Fläche unter der Kurve im pV-Diagramm
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Isobar ($p$ const): $W = p \cdot \Delta V$ — direktes Rechteck
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Isotherm ($T$ const): $W = nRT \ln(V_2/V_1)$ — Vorzeichen beachten
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Vorzeichenkonvention: $W > 0$ = vom System **abgegeben**; umgekehrt in mancher Literatur
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-1-2-a`, `ex-thermo-1-2-b`, `ex-thermo-1-2-manual-1`, `ex-thermo-1-2-manual-2`, `ex-thermo-1-2-manual-3`, `ex-thermo-1-2-manual-4`, `ex-thermo-1-2-manual-5`, `ex-thermo-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `thermo-2-1` · Erster Hauptsatz

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Hauptsätze
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — 1. Hauptsatz geschlossen: $\Delta U = Q - W$ (Q zugeführt, W abgegeben)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 1. Hauptsatz offen (stationär): $\dot Q + \dot W_t = \dot m (h_2 - h_1)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Vorzeichenkonvention: Q, W zugeführt > 0
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Innere Energie $U$ Zustandsgröße, Q und W Prozessgrößen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Technische Arbeit $W_t = -\int V dp$ vs. Volumenarbeit $W = \int p dV$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-2-1-a`, `ex-thermo-2-1-b`, `ex-thermo-2-1-manual-1`, `ex-thermo-2-1-manual-2`, `ex-thermo-2-1-manual-3`, `ex-thermo-2-1-manual-4`, `ex-thermo-2-1-manual-5`, `ex-thermo-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `thermo-2-2` · Wirkungsgrad

- **Topic:** `thermodynamik` (Thermodynamik) · **Unit:** Hauptsätze
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Wirkungsgrad: $\eta = E_\text{nutz}/E_\text{zu} \leq 1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 2. Hauptsatz: $\eta < 1$ für Wärmekraftmaschine (Entropieargument)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Carnot-Grenze: $\eta \leq \eta_C = 1 - T_\text{kalt}/T_\text{warm}$ (K!)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Kälteleistungszahl: $\varepsilon_K = Q_\text{kalt}/W$ (kann > 1 sein!)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Wärmepumpe: $\varepsilon_{WP} = Q_\text{warm}/W = \varepsilon_K + 1$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/thermodynamik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/thermodynamik.js`
- **4-Block-Erklärung fehlt bei:** `ex-thermo-2-2-a`, `ex-thermo-2-2-b`, `ex-thermo-2-2-manual-1`, `ex-thermo-2-2-manual-2`, `ex-thermo-2-2-manual-3`, `ex-thermo-2-2-manual-4`, `ex-thermo-2-2-manual-5`, `ex-thermo-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `pv-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `thermodynamik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ideales Gasgesetz $pV=nRT$ (oder $pV=mR_sT$ mit spezifischer Gaskonstante). · 1. Hauptsatz: $\Delta U = Q + W$ (oder $Q-W$ je nach Konvention — KLAR angeben). · Carnot-Wirkungsgrad $\eta_C=1-T_{\text{kalt}}/T_{\text{heiß}}$ mit Kelvin! · …
  - _Typische Fehler (gute Distraktoren):_ Celsius statt Kelvin eingesetzt — vor allem bei Carnot fatal. · Vorzeichen von $Q$ und $W$ (rein/raus) uneindeutig. · Adiabatengleichung $pV^\kappa=\text{const}$ statt $pV=\text{const}$ angewandt.
  - _Klausur-Fokus:_ Carnot-Wirkungsgrad einer Maschine. · Zustandsänderung: Isotherm, isobar, adiabat durchrechnen. · Entropieänderung bei idealem Gas.

#### `fluid-1-1` · Hydrostatischer Druck

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Hydrostatik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $p = \rho g h$ — linearer Zusammenhang nur bei konstanter Dichte (Flüssigkeiten)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Überdruck vs. absoluter Druck: $p_\text{abs} = p_\text{atm} + p_\text{hydro}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Druck in Flüssigkeit hängt nur von der Höhe ab, **nicht** von der Behälterform (hydrostat. Paradoxon)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Einheiten: 1 bar ≈ 10 m Wassersäule; 1 mbar ≈ 1 cm H₂O
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-1-1-a`, `ex-fluid-1-1-b`, `ex-fluid-1-1-manual-1`, `ex-fluid-1-1-manual-2`, `ex-fluid-1-1-manual-3`, `ex-fluid-1-1-manual-4`, `ex-fluid-1-1-manual-5`, `ex-fluid-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `fluid-1-2` · Auftrieb

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Hydrostatik
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $F_A = \rho_\text{Fluid}\,g\,V_\text{verdrängt}$ — Dichte des **Fluids**, nicht des Körpers
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Schwimmen: $F_A = F_G$ → $V_\text{verdrängt} = m_\text{Körper}/\rho_\text{Fluid}$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Vollständig getaucht: $V_\text{verdrängt} = V_\text{Körper}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Dichte-Vergleich: Körper schwimmt, wenn $\rho_\text{Körper} < \rho_\text{Fluid}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-1-2-a`, `ex-fluid-1-2-b`, `ex-fluid-1-2-manual-1`, `ex-fluid-1-2-manual-2`, `ex-fluid-1-2-manual-3`, `ex-fluid-1-2-manual-4`, `ex-fluid-1-2-manual-5`, `ex-fluid-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `fluid-2-1` · Kontinuitätsgleichung

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Strömung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kontinuität (inkompressibel): $A_1 v_1 = A_2 v_2 = \dot V$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Volumenstrom: $\dot V = A \cdot v$, Einheit m³/s
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Massenstrom (kompressibel): $\dot m = \rho A v$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Querschnitt kleiner → Geschwindigkeit größer ($v \propto 1/A$)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Umrechnung: Kreisquerschnitt $A = \pi d^2/4$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-2-1-a`, `ex-fluid-2-1-b`, `ex-fluid-2-1-manual-1`, `ex-fluid-2-1-manual-2`, `ex-fluid-2-1-manual-3`, `ex-fluid-2-1-manual-4`, `ex-fluid-2-1-manual-5`, `ex-fluid-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `fluid-2-2` · Bernoulli-Gleichung

- **Topic:** `fluidmechanik` (Fluidmechanik) · **Unit:** Strömung
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bernoulli: $p + \tfrac{1}{2}\rho v^2 + \rho g z = $ const (entlang Stromlinie)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Drei Druckarten: statisch $p$, dynamisch $\tfrac{1}{2}\rho v^2$, geodätisch $\rho g z$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Voraussetzungen: inkompressibel, stationär, reibungsfrei
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Torricelli: $v = \sqrt{2gh}$ (Ausflussgeschwindigkeit aus Behälter)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Mit Verlusten: $+ \Delta p_V$ auf rechter Seite
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fluidmechanik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fluidmechanik.js`
- **4-Block-Erklärung fehlt bei:** `ex-fluid-2-2-a`, `ex-fluid-2-2-b`, `ex-fluid-2-2-manual-1`, `ex-fluid-2-2-manual-2`, `ex-fluid-2-2-manual-3`, `ex-fluid-2-2-manual-4`, `ex-fluid-2-2-manual-5`, `ex-fluid-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fluidmechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Hydrostatischer Druck $p=\rho g h$. · Kontinuität $A_1 v_1 = A_2 v_2$. · Bernoulli $p+\rho v^2/2 + \rho g h = \text{const}$ (für verlustfreie inkompressible Strömung). · …
  - _Typische Fehler (gute Distraktoren):_ Höhenterm $\rho g h$ bei Bernoulli vergessen, wenn das Problem NICHT horizontal ist. · Reynolds dimensionsbehaftet gerechnet. · Verluste ignoriert, obwohl die Strömung offensichtlich turbulent ist.
  - _Klausur-Fokus:_ Bernoulli mit Venturi-Düse. · Rohrreibung laminar: $\lambda=64/\text{Re}$, Druckverlust berechnen. · Auftrieb eines Körpers bestimmen.

#### `melem-1-1` · Schraubenverbindungen

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Verbindungen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Vorspannkraft $F_V$ erzeugt Klemmkraft in der Fuge — verhindert Fugenöffnen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Kraftverteilung: nur ein Bruchteil der Betriebskraft fließt durch die Schraube ($\phi$-Faktor)
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Festigkeitsklassen 8.8, 10.9, 12.9: erste Zahl ≈ $R_m/100$ MPa, zweite ≈ $R_e/R_m$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Anziehdrehmoment $M_A$ aus Hersteller-Tabelle — nie größer als Streckgrenze der Schraube
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-1-1-a`, `ex-melem-1-1-b`, `ex-melem-1-1-manual-1`, `ex-melem-1-1-manual-2`, `ex-melem-1-1-manual-3`, `ex-melem-1-1-manual-4`, `ex-melem-1-1-manual-5`, `ex-melem-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `melem-1-2` · Passfedern und formschlüssige Verbindungen

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Verbindungen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formschluss: Geometrie überträgt Kraft (Passfeder, Zahn); Kraftschluss: Reibung überträgt Kraft (Presssitz, Kupplung)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Drehmoment aus Umfangskraft: $M_t = F_u \cdot r$; Umfangskraft $F_u = 2 M_t / d$ an der Welle mit Durchmesser $d$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Flächenpressung an der Passfeder: $p = F_u / (l \cdot h/2) \le p_{zul}$ — bestimmt die Passfeder-Länge $l$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Passfedern sind Normteile nach DIN 6885 — Form A (rund), Form B (gerade); Bezeichnung $b \times h \times l$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-1-2-a`, `ex-melem-1-2-b`, `ex-melem-1-2-manual-1`, `ex-melem-1-2-manual-2`, `ex-melem-1-2-manual-3`, `ex-melem-1-2-manual-4`, `ex-melem-1-2-manual-5`, `ex-melem-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `melem-2-1` · Wellen und Lager

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Wellen, Lager, Zahnräder
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Welle überträgt Drehmoment und Rotation
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Radiallast: quer zur Wellenachse; Axiallast: entlang Wellenachse
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Lagerfunktionen: Führung (radial/axial) + Stützung (Kraftaufnahme)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Fest-Los-Lagerung: ein Lager fixiert axial, anderes erlaubt Längsdehnung
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Lagerarten: Rillenkugel-, Schrägkugel-, Kegelrollen-, Pendelrollenlager
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-2-1-a`, `ex-melem-2-1-b`, `ex-melem-2-1-manual-1`, `ex-melem-2-1-manual-2`, `ex-melem-2-1-manual-3`, `ex-melem-2-1-manual-4`, `ex-melem-2-1-manual-5`, `ex-melem-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `melem-2-2` · Zahnräder und Übersetzung

- **Topic:** `maschinenelemente` (Maschinenelemente) · **Unit:** Wellen, Lager, Zahnräder
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Übersetzung: $i = z_2/z_1 = n_1/n_2 = d_2/d_1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Mehrstufiges Getriebe: $i_\text{ges} = i_1 \cdot i_2 \cdots$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Drehmoment-Wandlung: $M_2 = i \cdot M_1 \cdot \eta$ (Untersetzung steigert Moment)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Umfangskraft $F_t = 2M/d$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Modul $m = d/z$ — Standardgröße für Zahnrad-Geometrie
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/maschinenelemente.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/maschinenelemente.js`
- **4-Block-Erklärung fehlt bei:** `ex-melem-2-2-a`, `ex-melem-2-2-b`, `ex-melem-2-2-manual-1`, `ex-melem-2-2-manual-2`, `ex-melem-2-2-manual-3`, `ex-melem-2-2-manual-4`, `ex-melem-2-2-manual-5`, `ex-melem-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `lager-illustration`, `free-body-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `maschinenelemente`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ ISO-Gewindedaten (M8, M10, …) aus Tabelle ablesen. · Übersetzungsverhältnis $i=z_2/z_1=n_1/n_2$. · Leistung, Drehmoment, Drehzahl: $P=T\omega=T\cdot 2\pi n$. · …
  - _Typische Fehler (gute Distraktoren):_ Drehzahl $n$ in 1/min oder 1/s — Einheit im Produkt $T\omega$ konsistent halten. · Bei Zahnradstufe die Richtung der Drehmomentsverstärkung vergessen (Übersetzung ins Langsame = mehr Moment). · Vorspannkraft einer Schraube mit Klemmkraft verwechselt.
  - _Klausur-Fokus:_ Schraubenberechnung (Vorspannkraft, Betriebskraft). · Zahnradstufe: Drehzahl/Drehmoment am Ausgang. · Wälzlagerlebensdauer.

#### `et-1-1` · Ohmsches Gesetz und Grundbegriffe

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Gleichstromkreise
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ohmsches Gesetz $U = R \cdot I$ — Dreieck-Merkhilfe: eine Größe abdecken, die anderen beiden ergeben sie
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Einheiten-Konsistenz: V, A, $\Omega$ — mA und k$\Omega$ immer vor der Rechnung umrechnen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Reihenschaltung: Widerstände addieren sich, Strom ist überall gleich
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Parallelschaltung: Kehrwerte addieren ($1/R_{ges} = \sum 1/R_i$), Spannung überall gleich
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Spezialfall zwei Parallelwiderstände: $R_{ges} = R_1 R_2 / (R_1 + R_2)$ (Produkt-durch-Summe)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-1-1-a`, `ex-et-1-1-b`, `ex-et-1-1-manual-1`, `ex-et-1-1-manual-2`, `ex-et-1-1-manual-3`, `ex-et-1-1-manual-4`, `ex-et-1-1-manual-5`, `ex-et-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `et-1-2` · Kirchhoffsche Gesetze

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Gleichstromkreise
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Knotensatz (KCL): An jedem Knoten ist die Summe zu- und abfließender Ströme null — Folge der Ladungserhaltung
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Maschensatz (KVL): In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle null — Folge der Energieerhaltung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Vorzeichenkonvention: Umlaufrichtung festlegen; in Umlaufrichtung Spannungsquelle positiv, Widerstand-Abfall negativ (oder konsistent umgekehrt)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Spannungsteiler: $U_2 = U \cdot R_2 / (R_1 + R_2)$ — direkter Spezialfall des Maschensatzes bei Reihenschaltung
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-1-2-a`, `ex-et-1-2-b`, `ex-et-1-2-manual-1`, `ex-et-1-2-manual-2`, `ex-et-1-2-manual-3`, `ex-et-1-2-manual-4`, `ex-et-1-2-manual-5`, `ex-et-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `et-1-3` · Elektrische Leistung und Wirkungsgrad

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Gleichstromkreise
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Leistung: $P = U \cdot I = U^2/R = I^2 R$ (drei äquivalente Formen)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Energie: $W = P \cdot t$ (Einheit Joule oder Wattstunden)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Wirkungsgrad: $\eta = P_\text{ab}/P_\text{zu}$, immer $\leq 1$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wärmeverlust im Widerstand: $P_R = I^2 R$ (Stromwärmegesetz)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Nennspannungen Haushalt: 230 V (einphasig), 400 V (Drehstrom)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-1-3-a`, `ex-et-1-3-b`, `ex-et-1-3-manual-1`, `ex-et-1-3-manual-2`, `ex-et-1-3-manual-3`, `ex-et-1-3-manual-4`, `ex-et-1-3-manual-5`, `ex-et-1-3-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `et-2-1` · Wechselstromgrundlagen und Impedanz

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Wechselstrom
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Wechselspannung: $u(t) = \hat u \sin(\omega t + \varphi)$ mit $\omega = 2\pi f$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Effektivwert: $U = \hat u/\sqrt 2$ (Sinussignal)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Impedanzen: $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/(j\omega C)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — |Z_L| = ωL steigt mit Frequenz, |Z_C| = 1/(ωC) fällt mit Frequenz
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Phasenverschiebung: Spule $+90°$ (Strom eilt nach), Kondensator $-90°$ (Strom eilt voraus)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-2-1-a`, `ex-et-2-1-b`, `ex-et-2-1-manual-1`, `ex-et-2-1-manual-2`, `ex-et-2-1-manual-3`, `ex-et-2-1-manual-4`, `ex-et-2-1-manual-5`, `ex-et-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `et-2-2` · RC- und RL-Schaltungen

- **Topic:** `elektrotechnik` (Elektrotechnik) · **Unit:** Wechselstrom
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — RC-Grenzfrequenz: $f_g = 1/(2\pi RC)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Zeitkonstanten: RC $\tau = RC$, RL $\tau = L/R$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — RL-Impedanz-Betrag: $|Z| = \sqrt{R^2 + (\omega L)^2}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Leistungsfaktor: $\cos\varphi = R/|Z|$, $P = S \cos\varphi$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Bei $f_g$: Betrag auf $1/\sqrt 2 \approx 0{,}707$ abgefallen (−3 dB)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/elektrotechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/elektrotechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-et-2-2-a`, `ex-et-2-2-b`, `ex-et-2-2-manual-1`, `ex-et-2-2-manual-2`, `ex-et-2-2-manual-3`, `ex-et-2-2-manual-4`, `ex-et-2-2-manual-5`, `ex-et-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `elektrotechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ohmsches Gesetz $U=R\,I$ und Leistung $P=UI=I^2 R=U^2/R$. · Kirchhoff: Knotenregel ($\sum I=0$), Maschenregel ($\sum U=0$). · Komplexe Impedanz: $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)$. · …
  - _Typische Fehler (gute Distraktoren):_ Spannungsteiler nur bei Reihenschaltung ohne Last zulässig. · Bei RLC-Schwingkreis Resonanzfrequenz $\omega_0=1/\sqrt{LC}$ mit Impedanz verwechselt. · Effektiv- und Scheitelwert vertauscht.
  - _Klausur-Fokus:_ Netzwerkanalyse mit Kirchhoff. · Komplexe Impedanz eines RLC-Gliedes. · Wechselstrom-Leistung (Wirk-, Blind-, Scheinleistung).

#### `rt-1-1` · Regelkreis Grundbegriffe

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Grundlagen des Regelkreises
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Signale: Führungsgröße $w$, Regelgröße $y$, Stellgröße $u$, Regelabweichung $e = w - y$, Störgröße $z$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Regelung (geschlossener Kreis) vs. Steuerung (offener Wirkungsablauf) — nur Regelung reagiert auf Störungen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Blockschaltbild: Regler $\to$ Stellglied $\to$ Regelstrecke $\to$ Messglied $\to$ Vergleichsstelle (Rückführung)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Ziel jeder Regelung: $e \to 0$ trotz Störungen $z$ und Parameter-Schwankungen der Strecke
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-rt-1-1-a`, `ex-rt-1-1-b`, `ex-rt-1-1-manual-1`, `ex-rt-1-1-manual-2`, `ex-rt-1-1-manual-3`, `ex-rt-1-1-manual-4`, `ex-rt-1-1-manual-5`, `ex-rt-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `rt-1-2` · Übertragungsfunktion

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Grundlagen des Regelkreises
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×2, number-input ×4, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice, true-false, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Übertragungsfunktion $G(s) = Y(s)/U(s)$ nur für LTI-Systeme bei verschwindenden Anfangsbedingungen definiert
  - 🔴 [1] (hoch) **0/5+** Aufgaben — PT1-Glied: $G(s) = K/(1 + Ts)$ — Verstärkung $K$ und Zeitkonstante $T$; Sprungantwort $y(t) = K(1 - e^{-t/T})$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Statische Verstärkung = $G(0)$ — erhält man durch Einsetzen von $s = 0$ (Endwertsatz für Sprunganregung)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Serienschaltung: Übertragungsfunktionen werden multipliziert; Parallelschaltung: addiert; Rückführung: $T = G/(1+G H)$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Pole von $G(s)$ (Nullstellen des Nenners) bestimmen Stabilität: Realteil $< 0$ = stabil
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-rt-1-2-a`, `ex-rt-1-2-b`, `ex-rt-1-2-manual-1`, `ex-rt-1-2-manual-2`, `ex-rt-1-2-manual-3`, `ex-rt-1-2-manual-4`, `ex-rt-1-2-manual-5`, `ex-rt-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `rt-2-1` · PID-Regler

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Regler und Stabilität
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — PID-Formel: $u(t) = K_P(e + \frac{1}{T_I}\int e dt + T_D \dot e)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — P: schnell, bleibender Regelfehler; I: beseitigt Dauerfehler; D: antizipiert
  - 🔴 [2] (hoch) **0/5+** Aufgaben — PID-Laplace: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — I-Anteil dominiert bei niedrigen Frequenzen, D-Anteil bei hohen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — D rauschempfindlich → in Praxis mit Filterung: $T_D s/(1 + \alpha T_D s)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-rt-2-1-a`, `ex-rt-2-1-b`, `ex-rt-2-1-manual-1`, `ex-rt-2-1-manual-2`, `ex-rt-2-1-manual-3`, `ex-rt-2-1-manual-4`, `ex-rt-2-1-manual-5`, `ex-rt-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `rt-2-2` · Stabilität

- **Topic:** `regelungstechnik` (Regelungstechnik) · **Unit:** Regler und Stabilität
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Stabilitätsbedingung: alle Pole in linker s-Halbebene ($\text{Re}(s_i) < 0$)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hurwitz notwendig: alle Koeffizienten $>0$ (kein Vorzeichenwechsel)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Hurwitz hinreichend ab $n \geq 3$: Hurwitz-Determinanten $> 0$ prüfen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Phasenrand $\varphi_R \geq 30°$, Amplitudenrand $A_R \geq 6$ dB (Praxisrichtwerte)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Pole auf $j\omega$-Achse: grenzstabil (ungedämpfte Schwingung)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/regelungstechnik.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/regelungstechnik.js`
- **4-Block-Erklärung fehlt bei:** `ex-rt-2-2-a`, `ex-rt-2-2-b`, `ex-rt-2-2-manual-1`, `ex-rt-2-2-manual-2`, `ex-rt-2-2-manual-3`, `ex-rt-2-2-manual-4`, `ex-rt-2-2-manual-5`, `ex-rt-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `complex-plane`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `regelungstechnik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Führungsübertragungsfunktion $T_w=G_0/(1+G_0)$ mit offenem Kreis $G_0$. · P-Regler hat bleibende Regelabweichung; I-Anteil beseitigt sie; D-Anteil wirkt vorausschauend. · PT1-Sprungantwort $y=K_S(1-e^{-t/T})$ — 63 % bei $t=T$. · …
  - _Typische Fehler (gute Distraktoren):_ Übertragungsfunktion mit und ohne Einheitsrückführung verwechselt. · Hurwitz-Kriterium mit Routh verwechselt. · Dauerschwingfrequenz bei Stabilitätsgrenze nicht berechnet.
  - _Klausur-Fokus:_ Stabilität mit Hurwitz prüfen und Grenzverstärkung finden. · Stationäre Regelabweichung P-Regler an PT1. · Sprungantwort eines PT1-Glieds skizzieren.

#### `werk-2-3` · Fe-C-Diagramm & Wärmebehandlung

- **Topic:** `werkstoffkunde` (Werkstoffkunde) · **Unit:** Prüfverfahren
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ferrit (α, krz): weich/zäh; Austenit (γ, kfz): nur bei hoher T; Perlit (lamellar); Martensit (Nadeln, hart)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Eutektoider Punkt: $0{,}83\%$ C bei $723°$C — Austenit → Perlit
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Härtbarkeit: $0{,}3$–$0{,}8\%$ C nötig (zu wenig = kein Martensit, zu viel = spröde)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wärmebehandlungen: Glühen (Gefüge-Gleichgewicht), Härten (abschrecken), Vergüten (Härten + Anlassen)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Vergüten: hohe Festigkeit + Zähigkeit durch angelassenen Martensit (z.B. 42CrMo4)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Langsames Abkühlen → Diffusion → Perlit; Schnelles Abschrecken → diffusionslos → Martensit
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/werkstoffkunde.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/werkstoffkunde.js`
- **4-Block-Erklärung fehlt bei:** `ex-werk-2-3-manual-1`, `ex-werk-2-3-manual-2`, `ex-werk-2-3-manual-3`, `ex-werk-2-3-manual-4`, `ex-werk-2-3-manual-5`, `ex-werk-2-3-manual-6`, `ex-werk-2-3-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `werkstoffkunde`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Spannungs-Dehnungs-Diagramm ablesen: $R_e$, $R_m$, $A$, E-Modul aus Steigung. · Einheiten $\text{MPa}=\text{N/mm}^2$ und Umrechnung zu $\text{N/m}^2$. · Sicherheitszahl $S$ und zulässige Spannung $\sigma_{\text{zul}}=R_e/S$. · …
  - _Typische Fehler (gute Distraktoren):_ Streckgrenze $R_e$ mit Zugfestigkeit $R_m$ verwechselt. · Bei Rockwell-HRC vergessen, dass die Skala aus einer Eindringtiefe abgeleitet ist. · $\text{N/mm}^2$ vs. $\text{MPa}$ als unterschiedlich angenommen.
  - _Klausur-Fokus:_ Zugversuch vollständig interpretieren. · Zulässige Spannung mit Sicherheitszahl berechnen. · Prüfverfahren einem Anwendungsfall zuordnen.

#### `py-1-1` · Variablen & Datentypen

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Python Grundlagen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Dynamische Typisierung: keine Typangabe nötig, aber Typ ändert sich mit dem Wert
  - 🔴 [1] (mittel) **0/5+** Aufgaben — int/float/str/bool mit `type(x)` prüfen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Explizite Konvertierung `int("42")`, `float(3)`, `str(3.14)` — `int("3.14")` wirft `ValueError`
  - 🔴 [3] (niedrig) **0/5+** Aufgaben — `snake_case` für Variablen in Python; Matlab nutzt `camelCase` oder Unterstrich-frei
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-1-1-a`, `ex-py-1-1-b`, `ex-py-1-1-manual-1`, `ex-py-1-1-manual-2`, `ex-py-1-1-manual-3`, `ex-py-1-1-manual-4`, `ex-py-1-1-manual-5`, `ex-py-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-1-2` · Operatoren & Ausdrücke

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Python Grundlagen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — `/` = Gleitkomma-Division, `//` = Ganzzahl-Division, `%` = Modulo
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Python: `**` für Potenz; Matlab: `^` (bei Arrays: `.^` elementweise)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Logische Operatoren: Python `and/or/not`, Matlab `&&/||/~` (skalar) bzw. `&/|/~` (elementweise)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Float-Vergleich mit `==` unzuverlässig — stattdessen `abs(a - b) < 1e-9`
  - 🔴 [4] (niedrig) **0/5+** Aufgaben — `0 == False` und `1 == True` in Python — bool ist Subtyp von int
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-1-2-a`, `ex-py-1-2-b`, `ex-py-1-2-manual-1`, `ex-py-1-2-manual-2`, `ex-py-1-2-manual-3`, `ex-py-1-2-manual-4`, `ex-py-1-2-manual-5`, `ex-py-1-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-1-3` · Listen & Arrays

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Python Grundlagen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Python indiziert ab 0, Matlab ab 1 — Off-by-one-Fehler ist Quelle Nr. 1
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Slicing `liste[a:b]` liefert Elemente $a$ bis $b-1$ (rechte Grenze exklusiv)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — NumPy-Arrays: vektorisiert (elementweise `+ - * /`), viel schneller als reine Python-Listen
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Python-Listen können gemischte Typen; NumPy-Arrays nur einen Datentyp (dtype)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-1-3-a`, `ex-py-1-3-b`, `ex-py-1-3-manual-1`, `ex-py-1-3-manual-2`, `ex-py-1-3-manual-3`, `ex-py-1-3-manual-4`, `ex-py-1-3-manual-5`, `ex-py-1-3-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-1-4` · Kontrollstrukturen

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Python Grundlagen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Python: Einrückung (4 Spaces) definiert Block — kein `end`; Matlab: immer `end`
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Vergleiche: `==` prüft Gleichheit, `=` weist zu — Verwechslung erzeugt stummen Bug
  - 🔴 [2] (hoch) **0/5+** Aufgaben — For-Schleife: `for i in range(n)` (0..n-1) in Python, `for i = 1:n` (1..n) in Matlab
  - 🔴 [3] (mittel) **0/5+** Aufgaben — While-Schleife braucht zwingend einen Abbruch-Mechanismus (Zähler, Bedingung) um Endlos-Loops zu verhindern
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-1-4-a`, `ex-py-1-4-b`, `ex-py-1-4-manual-1`, `ex-py-1-4-manual-2`, `ex-py-1-4-manual-3`, `ex-py-1-4-manual-4`, `ex-py-1-4-manual-5`, `ex-py-1-4-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-1-5` · Funktionen definieren

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Python Grundlagen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Python: `def name(param):`, Matlab: `function y = name(x)` ... `end`
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rückgabe: Python `return`, Matlab über Zuweisung an Ausgabevariable
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Default-Parameter: `def f(x, y=0):` — bei Aufruf nicht zwingend angeben
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Lambda: `sqr = lambda x: x**2` für kurze Inline-Funktionen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Docstring (Python) oder Kommentare nach Function-Header (Matlab) dokumentieren
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-1-5-a`, `ex-py-1-5-b`, `ex-py-1-5-manual-1`, `ex-py-1-5-manual-2`, `ex-py-1-5-manual-3`, `ex-py-1-5-manual-4`, `ex-py-1-5-manual-5`, `ex-py-1-5-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-2-1` · NumPy Grundlagen

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Numerisches Rechnen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Array erzeugen: `np.array([...])`, `np.zeros`, `np.ones`, `np.eye`, `np.linspace`
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Elementweise: `*` in NumPy, `.*` in Matlab; Matrixmultiplikation: `@` bzw. `*`
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Formen: `a.shape` (NumPy), `size(a)` (Matlab)
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Vektorisierung statt Schleifen: $10$–$100\times$ schneller
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Broadcasting: $(n, 1) + (1, m) \to (n, m)$ automatisch
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-2-1-a`, `ex-py-2-1-b`, `ex-py-2-1-manual-1`, `ex-py-2-1-manual-2`, `ex-py-2-1-manual-3`, `ex-py-2-1-manual-4`, `ex-py-2-1-manual-5`, `ex-py-2-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-2-2` · Matplotlib — Daten visualisieren

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Numerisches Rechnen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×2, matching ×1, sorting ×2
- **Typen einsetzen (Rotation):** matching, number-input, true-false, sorting, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Basis-Plot: `plt.plot(x, y)`, Titel, `xlabel`, `ylabel`, `legend`, `grid`
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Farbe/Linienstil: `'b-'` blau, `'r--'` rot gestrichelt, `'g:'` grün gepunktet
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Mehrere Kurven: mehrere `plt.plot()`-Aufrufe nacheinander
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Speichern: `plt.savefig('name.png', dpi=150)` **vor** `plt.show()`
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Plots ohne Achsen-/Einheiten-Beschriftung verlieren in Berichten Punkte
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-2-2-a`, `ex-py-2-2-b`, `ex-py-2-2-manual-1`, `ex-py-2-2-manual-2`, `ex-py-2-2-manual-3`, `ex-py-2-2-manual-4`, `ex-py-2-2-manual-5`, `ex-py-2-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-2-3` · Gleichungen lösen & Optimierung

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Numerisches Rechnen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Nullstelle: `scipy.optimize.fsolve(f, x0)` — Startwert sollte nah an Lösung
  - 🔴 [1] (hoch) **0/5+** Aufgaben — LGS: `np.linalg.solve(A, b)` statt `np.linalg.inv(A) @ b` (schneller, stabiler)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Matlab-Pendant: Backslash-Operator `A \ b`
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Optimierung: `scipy.optimize.minimize(f, x0)` für Minima (Maxima: `-f`)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Dimensionen prüfen vor Solve: `A.shape == (n, n)`, `b.shape == (n,)`
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-2-3-a`, `ex-py-2-3-b`, `ex-py-2-3-manual-1`, `ex-py-2-3-manual-2`, `ex-py-2-3-manual-3`, `ex-py-2-3-manual-4`, `ex-py-2-3-manual-5`, `ex-py-2-3-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-2-4` · Numerische Integration & DGL

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** Numerisches Rechnen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bestimmtes Integral: `scipy.integrate.quad(f, a, b)` (adaptive Quadratur)
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Matlab-Pendant: `integral(@(x) f(x), a, b)`
  - 🔴 [2] (hoch) **0/5+** Aufgaben — DGL 2. Ordnung → System 1. Ordnung umschreiben, dann `solve_ivp` / `ode45`
  - 🔴 [3] (hoch) **0/5+** Aufgaben — ODE-Aufruf: `solve_ivp(f, [t0, t1], y0)`; `t_eval=...` für feste Ausgabezeitpunkte
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Standard-Solver: `RK45` (Python), `ode45` (Matlab) — adaptive Schrittweite, $O(h^5)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-2-4-a`, `ex-py-2-4-b`, `ex-py-2-4-manual-1`, `ex-py-2-4-manual-2`, `ex-py-2-4-manual-3`, `ex-py-2-4-manual-4`, `ex-py-2-4-manual-5`, `ex-py-2-4-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-3-1` · Festigkeitsberechnung

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** MB-Anwendungen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Rechteck: $I = bh^3/12$, $W = bh^2/6$ als Funktion
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Biegespannung $\sigma_b = M_b/W$ entlang Balken berechnen (Vektor-Operation)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kritische Stelle: $M_\text{max}$ via `np.max(np.abs(M))`
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Verschiedene Querschnitte als Funktionen kapseln (DRY-Prinzip)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Ergebnis-Plot: Spannungsverlauf über $x$ mit Skalierung & Einheit
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-3-1-a`, `ex-py-3-1-b`, `ex-py-3-1-manual-1`, `ex-py-3-1-manual-2`, `ex-py-3-1-manual-3`, `ex-py-3-1-manual-4`, `ex-py-3-1-manual-5`, `ex-py-3-1-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-3-2` · Datenauswertung & Messdaten

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** MB-Anwendungen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×2, true-false ×2, matching ×1, sorting ×2
- **Typen einsetzen (Rotation):** matching, number-input, true-false, sorting, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — CSV lesen: `np.loadtxt` (einfach), `pd.read_csv` (mit Headern und Typen)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Statistik: `np.mean`, `np.std`, `np.median`, `np.max`, `np.min`
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Polynom-Fit: `np.polyfit(x, y, n)` → Koeffizienten
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Pandas DataFrames: `df['Spalte']`, `df.describe()` für Überblick
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Scatter + Fit-Kurve zusammen plotten (Mess vs. Modell)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-3-2-a`, `ex-py-3-2-b`, `ex-py-3-2-manual-1`, `ex-py-3-2-manual-2`, `ex-py-3-2-manual-3`, `ex-py-3-2-manual-4`, `ex-py-3-2-manual-5`, `ex-py-3-2-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `py-3-3` · Simulation: Feder-Masse-Dämpfer

- **Topic:** `python-matlab` (Python & Matlab) · **Unit:** MB-Anwendungen
- **Aufgaben aktuell:** 10 · **mindestens:** 20 · **fehlen bis Minimum:** 10 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Bewegungsgleichung $m\ddot x + d\dot x + kx = F(t)$ als System 1. Ordnung
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Eigenkreisfrequenz $\omega_0 = \sqrt{k/m}$, Dämpfungsgrad $D = d/(2\sqrt{km})$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Frequenzgang: Amplitude über $\Omega$ plotten, Resonanzspitze bei $\Omega \approx \omega_0$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Parameter-Loop: Schleife über $\Omega$, pro Wert ODE lösen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Einschwingvorgang ignorieren: nur zweite Hälfte der Zeitreihe auswerten
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/python_matlab.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 10 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/python_matlab.js`
- **4-Block-Erklärung fehlt bei:** `ex-py-3-3-a`, `ex-py-3-3-b`, `ex-py-3-3-manual-1`, `ex-py-3-3-manual-2`, `ex-py-3-3-manual-3`, `ex-py-3-3-manual-4`, `ex-py-3-3-manual-5`, `ex-py-3-3-manual-6` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `function-graph`, `integral-area`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `python-matlab`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ NumPy: `np.array`, `np.linspace`, elementweise $*$ vs. Matrix-$@$. · Lineare Gleichungssysteme: `np.linalg.solve(A, b)` (Matlab: `A\b`). · `len`, Indexierung (Python ab 0, Matlab ab 1), Slicing. · …
  - _Typische Fehler (gute Distraktoren):_ In Python `*` elementweise mit `@` (Matrixmultiplikation) verwechselt. · Indexoffset bei Übergang Python ↔ Matlab vergessen. · `np.linalg.inv(A) @ b` statt `np.linalg.solve(A, b)` (numerisch instabiler).
  - _Klausur-Fokus:_ Codeschnipsel lesen und Ausgabe vorhersagen. · Fehler in gegebenem Code finden. · LGS mit NumPy lösen.

#### `trig-1-1` · Winkel und ihre Maße

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Grundlagen der Trigonometrie
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — DEG/RAD-Umschaltung am Taschenrechner
  - 🔴 [1] (hoch) **0/5+** Aufgaben — π-Vielfache (π/6, π/4, π/3, π/2) als Grad erkennen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Umrechnungsformel $\alpha_{rad}=\alpha_{deg}\cdot\pi/180$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Bogenlänge am Einheitskreis als Winkelmaß
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-1-1-c`, `ex-trig-1-1-manual-1`, `ex-trig-1-1-manual-2`, `ex-trig-1-1-manual-3`, `ex-trig-1-1-manual-4`, `ex-trig-1-1-manual-5`, `ex-trig-1-1-manual-6`, `ex-trig-1-1-manual-7` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-1-2` · Rechtwinkliges Dreieck

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Grundlagen der Trigonometrie
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — SOH-CAH-TOA als Merkregel für Seitenverhältnisse
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Gegenkathete vs. Ankathete in beliebiger Dreiecksorientierung identifizieren
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Umkehrfunktionen arcsin/arccos/arctan sinnvoll einsetzen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-1-2-a`, `ex-trig-1-2-b`, `ex-trig-1-2-c`, `ex-trig-1-2-manual-1`, `ex-trig-1-2-manual-2`, `ex-trig-1-2-manual-3`, `ex-trig-1-2-manual-4`, `ex-trig-1-2-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `abl-5-1` · Grenzwerte von Funktionen

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grenzwerte und Stetigkeit
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Standardgrenzwerte: $\lim_{x \to 0} \sin x/x = 1$, $\lim_{x \to 0} (e^x-1)/x = 1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Eulerzahl: $\lim_{x \to \infty} (1 + 1/x)^x = e$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — L'Hôpital nur bei unbestimmten Formen $0/0$ oder $\infty/\infty$ anwenden
  - 🔴 [3] (hoch) **0/5+** Aufgaben — L'Hôpital ggf. mehrfach anwenden, bis ein bestimmter Wert herauskommt
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Andere unbestimmte Formen: $0 \cdot \infty \to 0/0$, $\infty - \infty \to$ Hauptnenner, $0^0/\infty^0/1^\infty \to$ $\ln$ nehmen
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Wachstumshierarchie: $\ln x \ll x^n \ll e^x$ für $x \to \infty$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-5-1-b`, `ex-abl-5-1-manual-1`, `ex-abl-5-1-manual-2`, `ex-abl-5-1-manual-3`, `ex-abl-5-1-manual-4`, `ex-abl-5-1-manual-5`, `ex-abl-5-1-manual-6`, `ex-abl-5-1-manual-7` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `vek-1-1` · Vektoren — Grundbegriffe

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Vektorrechnung
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Betrag $|\vec{v}|=\sqrt{v_x^2+v_y^2+v_z^2}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Vektoraddition komponentenweise
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Einheitsvektor $\vec{e}=\vec{v}/|\vec{v}|$ bilden
  - 🔴 [3] (niedrig) **0/5+** Aufgaben — Vektor vs. Skalar in technischen Größen erkennen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-1-1-a`, `ex-vek-1-1-c`, `ex-vek-1-1-manual-1`, `ex-vek-1-1-manual-2`, `ex-vek-1-1-manual-3`, `ex-vek-1-1-manual-4`, `ex-vek-1-1-manual-5`, `ex-vek-1-1-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `vector-diagram`, `vector-3d`, `force-parallelogram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `vek-2-1` · Geradengleichung

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Geraden und Ebenen im Raum
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Parameterform: $\vec r = \vec p + t \vec v$ mit Stützpunkt $\vec p$ und Richtung $\vec v$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Punkt-Test: $(x,y,z) = \vec p + t \vec v$ auf **dasselbe** $t$ in allen drei Komponenten prüfen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Lagetest zweier Geraden: parallel? identisch? schneidend? windschief?
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Parallel-Test: $\vec v_1 \times \vec v_2 = \vec 0$ oder $\vec v_2 = k \vec v_1$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Schnittpunkt via Gleichsetzen: $\vec p_1 + t \vec v_1 = \vec p_2 + s \vec v_2$ (LGS 3 Gl., 2 Unbek.)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Windschief gibt es nur in 3D — in 2D sind nicht-parallele Geraden immer schneidend
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-2-1-a`, `ex-vek-2-1-b`, `ex-vek-2-1-c`, `ex-vek-2-1-manual-1`, `ex-vek-2-1-manual-2`, `ex-vek-2-1-manual-3`, `ex-vek-2-1-manual-4`, `ex-vek-2-1-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `vector-diagram`, `vector-3d`, `force-parallelogram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `alg-3-1` · Funktionsbegriff

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Funktionen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-1-3` → `log-def`
  - `alg-1-2` → `wurzel-def-bereich`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `fkt-def` — Funktion = jedes $x \in D$ erhält genau ein $y$ (SG 0)
  2. `fkt-graph` — Funktionsgraph $\{(x,f(x))\}$ und vertikaler Linientest ⇐ `fkt-def` (SG 0)
  3. `def-bereich` — Definitionsbereich: Division $\neq 0$, Wurzel $\geq 0$, $\log > 0$ ⇐ `fkt-def` (SG 1)
  4. `wertebereich` — Wertebereich = Menge aller tatsächlich erreichten $y$ ⇐ `fkt-def` (SG 1)
  5. `injektiv` — Injektiv: $f(x_1)=f(x_2) \Rightarrow x_1=x_2$ ⇐ `fkt-def` (SG 2)
  6. `surjektiv` — Surjektiv: jedes $y$ der Zielmenge hat ein Urbild ⇐ `fkt-def` (SG 2)
  7. `bijektiv` — Bijektiv = injektiv + surjektiv (Voraussetzung für Umkehrung) ⇐ `injektiv`, `surjektiv` (SG 2)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `fkt-def`, `fkt-graph` · **0/5+** — Funktion: jedem $x$ aus Definitionsbereich wird *genau ein* $y$ zugeordnet
  - 🔴 [1] _hoch_ · Konzepte: `def-bereich`, `wertebereich` · **0/5+** — Definitionsbereich $D$: alle zulässigen $x$ (Division durch 0 ausschließen, Radikand $\ge 0$, Logarithmus $>0$)
  - 🔴 [2] _mittel_ · Konzepte: `injektiv`, `surjektiv`, `bijektiv` · **0/5+** — Injektiv = verschiedene $x$ $\to$ verschiedene $y$; surjektiv = jedes $y$ im Bild wird getroffen; bijektiv = beides
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `fkt-def` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `fkt-graph` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | multiple-choice  | `fkt-graph` | 1 | 0 | 🔴 | Vertikaler Linientest |
|  4 | 0 | error-analysis     | multiple-choice  | `fkt-def` | 1 | 0 | 🔴 | Distraktor: Kreis als Funktionsgraph |
|  5 | 0 | transfer           | matching         | `fkt-def` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `def-bereich` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `def-bereich` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | multiple-choice  | `def-bereich`, `wertebereich` | 2 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `def-bereich` | 1 | 0 | 🔴 | Distraktor: Polstelle nicht ausgeschlossen |
| 10 | 1 | transfer           | matching         | `def-bereich` | 1 | 0 | 🔴 | Funktion ↔ maximaler Definitionsbereich |
| 11 | 2 | recognize          | matching         | `injektiv`, `surjektiv`, `bijektiv` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `injektiv` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | multiple-choice  | `bijektiv` | 1 | 0 | 🔴 |  |
| 14 | 2 | error-analysis     | multiple-choice  | `injektiv`, `surjektiv` | 1 | 0 | 🔴 |  |
| 15 | 2 | transfer           | true-false       | `bijektiv` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 15 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-3-1': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-3-1-a`, `ex-alg-3-1-b`, `ex-alg-3-1-c`, `ex-alg-3-1-manual-1`, `ex-alg-3-1-manual-2`, `ex-alg-3-1-manual-3`, `ex-alg-3-1-manual-4`, `ex-alg-3-1-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere möglich: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-3-3` · Funktionsoperationen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Funktionen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-3-1` → `fkt-def`, `fkt-graph`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `trafo-hor-verschieben` — Horizontale Verschiebung: $f(x-a)$ um $a$ nach rechts (SG 0)
  2. `trafo-vert-verschieben` — Vertikale Verschiebung: $f(x)+b$ um $b$ nach oben (SG 1)
  3. `trafo-vert-streck` — Vertikale Streckung: $c \cdot f(x)$ ⇐ `trafo-vert-verschieben` (SG 2)
  4. `trafo-hor-streck` — Horizontale Streckung: $f(x/c)$ (umgekehrt!) ⇐ `trafo-hor-verschieben` (SG 2)
  5. `trafo-spiegel-x` — Spiegelung an $x$-Achse: $-f(x)$ (SG 3)
  6. `trafo-spiegel-y` — Spiegelung an $y$-Achse: $f(-x)$ (SG 3)
  7. `trafo-merkregel` — Argument-Änderungen wirken horizontal und umgekehrt ⇐ `trafo-hor-verschieben`, `trafo-hor-streck` (SG 4)
  8. `fkt-komposition` — $(f \circ g)(x) = f(g(x))$ — Reihenfolge beachten (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `trafo-hor-verschieben` · **0/5+** — Horizontale Verschiebung: $f(x - a)$ = $a$ nach rechts (Vorzeichen kontraintuitiv!)
  - 🔴 [1] _hoch_ · Konzepte: `trafo-vert-verschieben` · **0/5+** — Vertikale Verschiebung: $f(x) + b$ = $b$ nach oben
  - 🔴 [2] _hoch_ · Konzepte: `trafo-vert-streck`, `trafo-hor-streck` · **0/5+** — Streckung vertikal: $c \cdot f(x)$ (für $c > 1$), horizontal: $f(x/c)$
  - 🔴 [3] _hoch_ · Konzepte: `trafo-spiegel-x`, `trafo-spiegel-y` · **0/5+** — Spiegelung an $x$-Achse: $-f(x)$, an $y$-Achse: $f(-x)$
  - 🔴 [4] _mittel_ · Konzepte: `trafo-merkregel` · **0/5+** — Merkregel: Änderungen im Argument wirken horizontal und **umgekehrt**
  - 🔴 [5] _mittel_ · Konzepte: `fkt-komposition` · **0/5+** — Funktionskomposition: $(f \circ g)(x) = f(g(x))$ (Reihenfolge beachten)
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `trafo-hor-verschieben` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `trafo-hor-verschieben` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | multiple-choice  | `trafo-hor-verschieben` | 1 | 0 | 🔴 |  |
|  4 | 0 | error-analysis     | multiple-choice  | `trafo-hor-verschieben` | 1 | 0 | 🔴 | Distraktor: Vorzeichen nicht getauscht |
|  5 | 0 | transfer           | matching         | `trafo-hor-verschieben` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `trafo-vert-verschieben` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `trafo-vert-verschieben` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `trafo-vert-verschieben` | 1 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `trafo-vert-verschieben` | 1 | 0 | 🔴 |  |
| 10 | 1 | transfer           | matching         | `trafo-vert-verschieben`, `trafo-hor-verschieben` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `trafo-vert-streck`, `trafo-hor-streck` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `trafo-vert-streck` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | multiple-choice  | `trafo-hor-streck` | 1 | 0 | 🔴 |  |
| 14 | 2 | error-analysis     | multiple-choice  | `trafo-hor-streck` | 1 | 0 | 🔴 | Distraktor: horizontale Streckung intuitiv gerechnet |
| 15 | 2 | transfer           | matching         | `trafo-vert-streck`, `trafo-hor-streck` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | matching         | `trafo-spiegel-x`, `trafo-spiegel-y` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `trafo-spiegel-x` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | multiple-choice  | `trafo-spiegel-y` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `trafo-spiegel-x`, `trafo-spiegel-y` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | matching         | `trafo-spiegel-x`, `trafo-spiegel-y` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | true-false       | `trafo-merkregel` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `trafo-merkregel` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | multiple-choice  | `trafo-merkregel` | 1 | 0 | 🔴 |  |
| 24 | 4 | error-analysis     | multiple-choice  | `trafo-merkregel` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | sorting          | `trafo-merkregel` | 1 | 0 | 🔴 |  |
| 26 | 5 | recognize          | true-false       | `fkt-komposition` | 1 | 0 | 🔴 |  |
| 27 | 5 | apply-guided       | multiple-choice  | `fkt-komposition` | 1 | 0 | 🔴 |  |
| 28 | 5 | apply-independent  | number-input     | `fkt-komposition` | 1 | 0 | 🔴 |  |
| 29 | 5 | error-analysis     | multiple-choice  | `fkt-komposition` | 1 | 0 | 🔴 | Distraktor: Reihenfolge vertauscht |
| 30 | 5 | transfer           | matching         | `fkt-komposition` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 30 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-3-3': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-3-3-c`, `ex-alg-3-3-manual-1`, `ex-alg-3-3-manual-2`, `ex-alg-3-3-manual-3`, `ex-alg-3-3-manual-4`, `ex-alg-3-3-manual-5`, `ex-alg-3-3-manual-6`, `ex-alg-3-3-manual-7` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-3-4` · Umkehrfunktionen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Funktionen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-3-1` → `injektiv`, `surjektiv`, `bijektiv`, `def-bereich`, `wertebereich`
  - `alg-0-4` → `aequivalenz`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `umkehr-existenz` — Umkehrfunktion existiert genau wenn $f$ bijektiv ist (SG 0)
  2. `umkehr-verfahren` — Verfahren: $y=f(x)$ nach $x$ auflösen, dann Rollen tauschen ⇐ `umkehr-existenz` (SG 1)
  3. `umkehr-graph` — Graphische Konstruktion: Spiegelung an $y=x$ ⇐ `umkehr-existenz` (SG 2)
  4. `umkehr-bereiche` — $D(f^{-1}) = W(f)$ und $W(f^{-1}) = D(f)$ ⇐ `umkehr-existenz` (SG 3)
  5. `umkehr-identitaet` — $f^{-1}(f(x)) = x$ und $f(f^{-1}(y)) = y$ ⇐ `umkehr-verfahren` (SG 4)
  6. `umkehr-einschraenken` — Nicht-injektives $f$: Definitionsbereich einschränken ⇐ `umkehr-existenz` (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `umkehr-existenz` · **0/5+** — Existenz: $f$ muss **bijektiv** sein (injektiv UND surjektiv)
  - 🔴 [1] _hoch_ · Konzepte: `umkehr-verfahren` · **0/5+** — Berechnung: $y = f(x)$ nach $x$ auflösen, dann $x \leftrightarrow y$ tauschen
  - 🔴 [2] _hoch_ · Konzepte: `umkehr-graph` · **0/5+** — Graphisch: Spiegelung an der Winkelhalbierenden $y = x$
  - 🔴 [3] _hoch_ · Konzepte: `umkehr-bereiche` · **0/5+** — Def.bereich von $f^{-1}$ = Wertebereich von $f$ (und umgekehrt)
  - 🔴 [4] _mittel_ · Konzepte: `umkehr-identitaet` · **0/5+** — Eigenschaft: $f^{-1}(f(x)) = x$ und $f(f^{-1}(y)) = y$
  - 🔴 [5] _mittel_ · Konzepte: `umkehr-einschraenken` · **0/5+** — Für nicht-injektives $f$ (z.B. $x^2$) Def.bereich einschränken: $[0,\infty)$ macht Umkehrung möglich
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `umkehr-existenz` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `umkehr-existenz` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | multiple-choice  | `umkehr-existenz` | 1 | 0 | 🔴 |  |
|  4 | 0 | error-analysis     | multiple-choice  | `umkehr-existenz` | 1 | 0 | 🔴 | Distraktor: bijektiv nicht geprüft |
|  5 | 0 | transfer           | matching         | `umkehr-existenz` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `umkehr-verfahren` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `umkehr-verfahren` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `umkehr-verfahren` | 2 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `umkehr-verfahren` | 1 | 0 | 🔴 |  |
| 10 | 1 | transfer           | sorting          | `umkehr-verfahren` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `umkehr-graph` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `umkehr-graph` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | multiple-choice  | `umkehr-graph` | 1 | 0 | 🔴 |  |
| 14 | 2 | error-analysis     | multiple-choice  | `umkehr-graph` | 1 | 0 | 🔴 |  |
| 15 | 2 | transfer           | matching         | `umkehr-graph` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | true-false       | `umkehr-bereiche` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `umkehr-bereiche` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | multiple-choice  | `umkehr-bereiche` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `umkehr-bereiche` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | matching         | `umkehr-bereiche` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | true-false       | `umkehr-identitaet` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `umkehr-identitaet` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | number-input     | `umkehr-identitaet` | 1 | 0 | 🔴 |  |
| 24 | 4 | error-analysis     | multiple-choice  | `umkehr-identitaet` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | number-input     | `umkehr-identitaet` | 1 | 0 | 🔴 |  |
| 26 | 5 | recognize          | true-false       | `umkehr-einschraenken` | 1 | 0 | 🔴 |  |
| 27 | 5 | apply-guided       | multiple-choice  | `umkehr-einschraenken` | 1 | 0 | 🔴 |  |
| 28 | 5 | apply-independent  | multiple-choice  | `umkehr-einschraenken`, `umkehr-verfahren` | 1 | 0 | 🔴 |  |
| 29 | 5 | error-analysis     | multiple-choice  | `umkehr-einschraenken` | 1 | 0 | 🔴 |  |
| 30 | 5 | transfer           | number-input     | `umkehr-einschraenken`, `umkehr-verfahren` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 30 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-3-4': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-3-4-a`, `ex-alg-3-4-b`, `ex-alg-3-4-c`, `ex-alg-3-4-manual-1`, `ex-alg-3-4-manual-2`, `ex-alg-3-4-manual-3`, `ex-alg-3-4-manual-4`, `ex-alg-3-4-manual-5` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `la-1-5` · Eigenwerte und Eigenvektoren

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Matrizen & Determinanten
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Eigenwertgleichung: $A \vec v = \lambda \vec v$ (Vektor bleibt in Richtung, nur gestreckt)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Charakteristisches Polynom: $\det(A - \lambda I) = 0$ → Eigenwerte $\lambda_i$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Eigenvektor zu $\lambda_i$: $(A - \lambda_i I)\vec v = 0$ lösen (Kern)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Spur und Determinante: $\text{tr}(A) = \sum \lambda_i$, $\det A = \prod \lambda_i$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Symmetrische Matrix: Eigenwerte reell, Eigenvektoren orthogonal (Hauptachsentransformation)
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Technik-Anwendung: Eigenfrequenzen (Schwingungen), Hauptspannungen (Festigkeit)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-1-5-a`, `ex-la-1-5-b`, `ex-la-1-5-c`, `ex-la-1-5-manual-1`, `ex-la-1-5-manual-2`, `ex-la-1-5-manual-3`, `ex-la-1-5-manual-4`, `ex-la-1-5-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `eigenvector-viz`, `vector-diagram` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-2-1` · LGS in Matrixform

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Lineare Gleichungssysteme
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Matrixform: $A\vec x = \vec b$ (Koeffizienten $A$, Unbekannte $\vec x$, rechte Seite $\vec b$)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Erweiterte Koeffizientenmatrix $[A|\vec b]$ mit Trennstrich
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Variablen in jeder Gleichung in gleicher Reihenfolge (sonst Koeffizienten falsch!)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Dimensionen: $A$ ist $m \times n$, $\vec x \in \mathbb{R}^n$, $\vec b \in \mathbb{R}^m$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Homogenes LGS: $\vec b = \vec 0$, triviale Lösung $\vec x = \vec 0$ existiert immer
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-2-1-a`, `ex-la-2-1-b`, `ex-la-2-1-c`, `ex-la-2-1-manual-1`, `ex-la-2-1-manual-2`, `ex-la-2-1-manual-3`, `ex-la-2-1-manual-4`, `ex-la-2-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-2-3` · Lösbarkeit von LGS

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Lineare Gleichungssysteme
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Drei Fälle: eindeutig / unendlich / keine Lösung (Widerspruch)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rang = Anzahl Pivots in Stufenform
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kronecker-Capelli: $\text{rg}(A) \neq \text{rg}([A|b])$ → keine Lösung
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Eindeutig: $\text{rg}(A) = \text{rg}([A|b]) = n$ (Anzahl Unbekannte)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Unendlich: $\text{rg}(A) = \text{rg}([A|b]) < n$, freie Parameter = $n - \text{rg}(A)$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Geometrisch (2D): Geraden schneidend / identisch / parallel
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-2-3-a`, `ex-la-2-3-b`, `ex-la-2-3-c`, `ex-la-2-3-manual-1`, `ex-la-2-3-manual-2`, `ex-la-2-3-manual-3`, `ex-la-2-3-manual-4`, `ex-la-2-3-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-2-4` · Cramersche Regel & Anwendungen

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Lineare Gleichungssysteme
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Cramer: $x_i = \det(A_i)/\det(A)$, wobei $A_i$ = $A$ mit $i$-ter Spalte durch $\vec b$ ersetzt
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Voraussetzung: $\det(A) \neq 0$ (nicht anwendbar bei singulärer Matrix)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Nur für **quadratische** Systeme mit eindeutiger Lösung sinnvoll
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Ab $n > 4$ ist Gauss effizienter (Cramer = $O(n!)$ mit Sarrus, $n!$ Determinanten)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Technik-Anwendung: Kräftegleichgewicht, Knotenspannungsanalyse (Kirchhoff)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-2-4-a`, `ex-la-2-4-b`, `ex-la-2-4-c`, `ex-la-2-4-manual-1`, `ex-la-2-4-manual-2`, `ex-la-2-4-manual-3`, `ex-la-2-4-manual-4`, `ex-la-2-4-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `int-1-5` · Hauptsatz der Differential- und Integralrechnung

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Stammfunktionen & Grundintegrale
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Teil 1: $F(x) = \int_a^x f(t) dt$ ist differenzierbar mit $F'(x) = f(x)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Teil 2: $\int_a^b f(x) dx = F(b) - F(a)$ für jede Stammfunktion $F$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Voraussetzung: $f$ stetig auf $[a,b]$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Leibniz-Regel für variable Grenzen: $\frac{d}{dx} \int_{a(x)}^{b(x)} f(t) dt = f(b) b' - f(a) a'$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Folgerung: Integration und Differentiation sind Umkehroperationen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-1-5-b`, `ex-int-1-5-manual-1`, `ex-int-1-5-manual-2`, `ex-int-1-5-manual-3`, `ex-int-1-5-manual-4`, `ex-int-1-5-manual-5`, `ex-int-1-5-manual-6`, `ex-int-1-5-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-2-3` · Partialbruchzerlegung

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Integrationstechniken
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Voraussetzung: $\deg(\text{Zähler}) < \deg(\text{Nenner})$ (sonst Polynomdivision zuerst)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Einfacher Linearfaktor $(x-a)$: Ansatz $A/(x-a)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Doppelter Linearfaktor $(x-a)^2$: Ansatz $A/(x-a) + B/(x-a)^2$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Irreduzibler quadr. Faktor $x^2+px+q$: Ansatz $(Ax+B)/(x^2+px+q)$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Koeffizienten via Einsetzmethode (Nullstellen) oder Koeffizientenvergleich
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Integration: $\int dx/(x-a) = \ln|x-a|$, $\int dx/(x-a)^n = -1/((n-1)(x-a)^{n-1})$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-2-3-manual-1`, `ex-int-2-3-manual-2`, `ex-int-2-3-manual-3`, `ex-int-2-3-manual-4`, `ex-int-2-3-manual-5`, `ex-int-2-3-manual-6`, `ex-int-2-3-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-3-2` · Rotationskörper

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Anwendungen
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Scheibenmethode ($x$-Achse): $V = \pi \int_a^b [f(x)]^2 dx$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rotation um $y$-Achse: $V = \pi \int_c^d [g(y)]^2 dy$ mit Umkehrfunktion
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Schalenmethode: $V = 2\pi \int_a^b x \cdot f(x) dx$ (Rotation um $y$-Achse)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Mantelfläche: $M = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} dx$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Standardvolumina: Kegel $\pi r^2 h/3$, Kugel $4\pi r^3/3$, Zylinder $\pi r^2 h$ aus Integralen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-3-2-b`, `ex-int-3-2-c`, `ex-int-3-2-manual-1`, `ex-int-3-2-manual-2`, `ex-int-3-2-manual-3`, `ex-int-3-2-manual-4`, `ex-int-3-2-manual-5`, `ex-int-3-2-manual-6` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-3-3` · Technische Anwendungen

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Anwendungen
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Arbeit $W = \int_a^b F(x) dx$ bei ortsabhängiger Kraft
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Federenergie aus Hookeschem Gesetz $F = kx$: $W = \frac{1}{2} k s^2$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Flächenschwerpunkt: $\bar{x} = (1/A) \int x f(x) dx$, $\bar{y} = (1/(2A)) \int f(x)^2 dx$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Trägheitsmoment $I = \int r^2 dm$ für kontinuierliche Massenverteilung
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Effektivwert (RMS): $f_{\text{eff}} = \sqrt{(1/T) \int_0^T f(t)^2 dt}$ (Wechselstromtechnik)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-3-3-b`, `ex-int-3-3-manual-1`, `ex-int-3-3-manual-2`, `ex-int-3-3-manual-3`, `ex-int-3-3-manual-4`, `ex-int-3-3-manual-5`, `ex-int-3-3-manual-6`, `ex-int-3-3-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `dgl-1-1` · Was ist eine Differentialgleichung?

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Grundbegriffe & einfache DGL
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ordnung = höchste vorkommende Ableitung ($y$, $y'$, $y''$ … )
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Linear ⇔ $y$ und alle Ableitungen nur in 1. Potenz, keine Produkte $y \cdot y'$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Homogen ⇔ rechte Seite = 0; sonst inhomogen (wichtig für Ansatzwahl)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Anfangswertproblem = DGL + Anfangsbedingung → eindeutige Lösung
  - 🔴 [4] (niedrig) **0/5+** Aufgaben — Gewöhnlich (ODE) vs. partiell (PDE): genau eine unabhängige Variable
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-1-1-a`, `ex-dgl-1-1-b`, `ex-dgl-1-1-c`, `ex-dgl-1-1-manual-1`, `ex-dgl-1-1-manual-2`, `ex-dgl-1-1-manual-3`, `ex-dgl-1-1-manual-4`, `ex-dgl-1-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `dgl-1-2` · Trennung der Variablen

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Grundbegriffe & einfache DGL
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Anwendbarkeit erkennen: $y' = f(x)\,g(y)$ — Produkt aus $x$- und $y$-Anteil
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $dy/dx$-Schreibweise: $\tfrac{dy}{g(y)} = f(x)\,dx$ sauber trennen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Beide Seiten integrieren, Integrationskonstante $C$ nur einmal ansetzen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Anfangsbedingung $y(x_0) = y_0$ zum Bestimmen von $C$ einsetzen — vor dem Umformen nach $y$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Betragsstriche bei $\int 1/y\,dy = \ln|y|$ nicht vergessen und Fallunterscheidung prüfen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-1-2-a`, `ex-dgl-1-2-b`, `ex-dgl-1-2-c`, `ex-dgl-1-2-manual-1`, `ex-dgl-1-2-manual-2`, `ex-dgl-1-2-manual-3`, `ex-dgl-1-2-manual-4`, `ex-dgl-1-2-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `dgl-1-4` · DGL 2. Ordnung mit konstanten Koeffizienten

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Grundbegriffe & einfache DGL
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ansatz $y = e^{\lambda x}$ führt zu char. Gleichung $a\lambda^2 + b\lambda + c = 0$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — D > 0 (zwei reelle): $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — D = 0 (doppelte): $y = (C_1 + C_2 x) e^{\lambda x}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — D < 0 (komplex $\alpha \pm i\beta$): $y = e^{\alpha x}(C_1 \cos\beta x + C_2 \sin\beta x)$ — Schwingung!
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Dämpfung: $\alpha < 0$ abklingend, $\alpha = 0$ ungedämpft, $\alpha > 0$ instabil
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Feder-Masse: $m\ddot x + d\dot x + kx = 0$ — Eigenfrequenz $\omega_0 = \sqrt{k/m}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-1-4-a`, `ex-dgl-1-4-b`, `ex-dgl-1-4-c`, `ex-dgl-1-4-manual-1`, `ex-dgl-1-4-manual-2`, `ex-dgl-1-4-manual-3`, `ex-dgl-1-4-manual-4`, `ex-dgl-1-4-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `spring-mass-damper`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `dgl-2-1` · Variation der Konstanten

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Fortgeschrittene Methoden
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ansatz: homogene Lösung $y_h = C e^{-P(x)}$, dann $C$ durch $C(x)$ ersetzen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Einsetzen liefert $C'(x) = q(x) e^{P(x)}$ (nur eine Integration)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Allgemeine Lösung = homogener + partikulärer Anteil
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Partikulärer Ansatz (Störansatz): bei Polynom/Exp/Trig-Störung direkte Vermutung
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Resonanz-Fall: wenn Störung Lösung der homogenen DGL ist → Ansatz $\times x$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-2-1-a`, `ex-dgl-2-1-b`, `ex-dgl-2-1-c`, `ex-dgl-2-1-manual-1`, `ex-dgl-2-1-manual-2`, `ex-dgl-2-1-manual-3`, `ex-dgl-2-1-manual-4`, `ex-dgl-2-1-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `dgl-2-3` · Technische Anwendungen

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Fortgeschrittene Methoden
- **Aufgaben aktuell:** 11 · **mindestens:** 20 · **fehlen bis Minimum:** 9 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×2, true-false ×1, matching ×2, sorting ×1
- **Typen einsetzen (Rotation):** true-false, sorting, number-input, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Feder-Masse-Dämpfer: $m\ddot x + c\dot x + kx = F(t)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Eigenkreisfrequenz $\omega_0 = \sqrt{k/m}$, Dämpfungsgrad $D = c/(2\sqrt{km})$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Schwingfall $D<1$: gedämpfte Schwingung mit $\omega_d = \omega_0 \sqrt{1-D^2}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Aperiodischer Grenzfall $D=1$: schnellstes Abklingen ohne Schwingung
  - 🔴 [4] (hoch) **0/5+** Aufgaben — RC-Glied: $RC \dot u + u = U_0$, Zeitkonstante $\tau = RC$, $u(t) = U_0(1-e^{-t/\tau})$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Resonanz bei erzwungener Schwingung: max. Amplitude bei $\omega \approx \omega_0$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 9 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-2-3-a`, `ex-dgl-2-3-b`, `ex-dgl-2-3-c`, `ex-dgl-2-3-manual-1`, `ex-dgl-2-3-manual-2`, `ex-dgl-2-3-manual-3`, `ex-dgl-2-3-manual-4`, `ex-dgl-2-3-manual-5` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `spring-mass-damper`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `trig-1-3` · Die Grundwerte

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Grundlagen der Trigonometrie
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×2, true-false ×1, matching ×1
- **Typen einsetzen (Rotation):** sorting, true-false, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Auswendig: $\sin 0° = 0$, $\sin 30° = 1/2$, $\sin 45° = \sqrt2/2$, $\sin 60° = \sqrt3/2$, $\sin 90° = 1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Merkregel: $\sin$-Werte folgen dem Muster $\sqrt n / 2$ für $n = 0, 1, 2, 3, 4$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Kosinus ist Sinus rückwärts: $\cos 0° = 1, \cos 90° = 0$, dazwischen symmetrisch
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Komplementärwinkel: $\cos\alpha = \sin(90° - \alpha)$ und umgekehrt
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/trigonometry.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/trigonometry.js`
- **4-Block-Erklärung fehlt bei:** `ex-trig-1-3-b`, `ex-trig-1-3-c`, `ex-trig-1-3-manual-1`, `ex-trig-1-3-manual-2`, `ex-trig-1-3-manual-3`, `ex-trig-1-3-manual-4`, `ex-trig-1-3-manual-5`, `ex-trig-1-3-manual-6` … (+2 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `abl-1-1` · Was ist eine Ableitung?

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grundlagen der Differentialrechnung
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Differenzenquotient → Differentialquotient als Grenzübergang
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Tangentensteigung aus $f'(x_0)$ ablesen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Notwendige Extremum-Bedingung $f'(x_0)=0$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Ableitung als Momentan-Änderungsrate physikalisch deuten
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-1-1-manual-1`, `ex-abl-1-1-manual-2`, `ex-abl-1-1-manual-3`, `ex-abl-1-1-manual-4`, `ex-abl-1-1-manual-5`, `ex-abl-1-1-manual-6`, `ex-abl-1-1-manual-7`, `ex-abl-1-1-mastery`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `derivative-graph`, `function-graph`, `limit-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-1-5` · Extremwerte und Kurvendiskussion

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grundlagen der Differentialrechnung
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Notwendige Bedingung für Extremum: $f'(x_0) = 0$ (waagrechte Tangente)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hinreichend: $f''(x_0) > 0 \Rightarrow$ Min, $f''(x_0) < 0 \Rightarrow$ Max
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Bei $f''(x_0) = 0$: Vorzeichenwechsel von $f'$ prüfen oder höhere Ableitungen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Wendepunkt: $f''(x_0) = 0$ mit Vorzeichenwechsel (oder $f'''(x_0) \neq 0$)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Randextrema bei beschränktem Intervall $[a, b]$ nicht vergessen
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Sattelpunkt = Wendepunkt mit waagrechter Tangente ($f' = 0$ UND $f'' = 0$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-1-5-manual-1`, `ex-abl-1-5-manual-2`, `ex-abl-1-5-manual-3`, `ex-abl-1-5-manual-4`, `ex-abl-1-5-manual-5`, `ex-abl-1-5-manual-6`, `ex-abl-1-5-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `derivative-graph`, `function-graph`, `limit-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-3-2` · Krümmung und Wendepunkte

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Kurvendiskussion
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Krümmung via $f''$: $f'' > 0$ → linksgekrümmt ($\cup$), $f'' < 0$ → rechtsgekrümmt ($\cap$)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Notwendige Bedingung für Wendepunkt: $f''(x_0) = 0$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Hinreichend: $f'''(x_0) \neq 0$ ODER $f''$ wechselt bei $x_0$ das Vorzeichen
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Sattelpunkt = Wendepunkt mit $f'(x_0) = 0$ (waagrechte Tangente), z.B. $f(x) = x^3$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Wendepunkt-Koordinaten: $(x_0, f(x_0))$ — y-Wert nicht vergessen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-3-2-a`, `ex-abl-3-2-b`, `ex-abl-3-2-c`, `ex-abl-3-2-transfer`, `ex-abl-3-2-manual-1`, `ex-abl-3-2-manual-2`, `ex-abl-3-2-manual-3`, `ex-abl-3-2-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-3-3` · Vollständige Kurvendiskussion

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Kurvendiskussion
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×3, true-false ×1, matching ×1, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Reihenfolge: $D_f$ → Symmetrie → Nullstellen → $f', f''$ → Extrema → WP → $x \to \pm\infty$ → Graph
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Symmetrie: $f(-x) = f(x)$ gerade (y-Achse), $f(-x) = -f(x)$ ungerade (Ursprung)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Verhalten im Unendlichen: bei Polynom führender Term, bei Bruch Grad-Vergleich
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Polstellen & Asymptoten bei gebrochen-rationalen Funktionen separat untersuchen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Abschluss-Skizze: Extrema, WP, Achsenschnittpunkte mit Koordinaten beschriften
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-3-3-a`, `ex-abl-3-3-b`, `ex-abl-3-3-c`, `ex-abl-3-3-d`, `ex-abl-3-3-manual-1`, `ex-abl-3-3-manual-2`, `ex-abl-3-3-manual-3`, `ex-abl-3-3-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `vek-1-2` · Skalarprodukt

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Vektorrechnung
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Komponentenform $\vec{a}\cdot\vec{b}=\sum a_i b_i$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Winkelform $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\alpha$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Orthogonalitäts-Test über $\vec{a}\cdot\vec{b}=0$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Projektion eines Vektors auf einen anderen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-1-2-manual-1`, `ex-vek-1-2-manual-2`, `ex-vek-1-2-manual-3`, `ex-vek-1-2-manual-4`, `ex-vek-1-2-manual-5`, `ex-vek-1-2-manual-6`, `ex-vek-1-2-manual-7`, `ex-vek-1-2-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `vek-2-2` · Ebenengleichung

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Geraden und Ebenen im Raum
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, number-input, true-false, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Parameterform: $\vec r = \vec p + s \vec u + t \vec v$ (Stützpunkt + zwei Richtungen)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Normalenform: $\vec n \cdot (\vec r - \vec p) = 0$ mit Normalvektor $\vec n \perp$ Ebene
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Koordinatenform: $a x + b y + c z = d_0$ mit $\vec n = (a, b, c)$ und $d_0 = \vec n \cdot \vec p$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Normalvektor aus Parameterform: $\vec n = \vec u \times \vec v$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Ebene aus drei Punkten: $\vec u = P_2 - P_1$, $\vec v = P_3 - P_1$, dann $\vec n$ kreuzen
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Hessesche Normalform: $\vec n_0 \cdot (\vec r - \vec p) = 0$ mit normiertem $\vec n_0$ (Länge 1)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-2-2-a`, `ex-vek-2-2-b`, `ex-vek-2-2-d`, `ex-vek-2-2-manual-1`, `ex-vek-2-2-manual-2`, `ex-vek-2-2-manual-3`, `ex-vek-2-2-manual-4`, `ex-vek-2-2-manual-5` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `vek-2-3` · Abstände und Schnitte

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Geraden und Ebenen im Raum
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Abstand Punkt–Ebene: $d = |a q_x + b q_y + c q_z - d_0|/\sqrt{a^2+b^2+c^2}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Abstand Punkt–Gerade: $d = |\vec v \times (\vec Q - \vec p)|/|\vec v|$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Abstand windschiefer Geraden: $d = |(\vec p_2 - \vec p_1) \cdot (\vec v_1 \times \vec v_2)|/|\vec v_1 \times \vec v_2|$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Schnitt Gerade–Ebene: $\vec r(t)$ in Ebenengleichung einsetzen, $t$ auflösen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Schnittfälle: eindeutig (1 Punkt), $0 = 0$ (Gerade in Ebene), Widerspruch (parallel)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Merkhilfe: Ebene → Skalarprodukt mit $\vec n$; Gerade → Kreuzprodukt mit $\vec v$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-2-3-a`, `ex-vek-2-3-manual-1`, `ex-vek-2-3-manual-2`, `ex-vek-2-3-manual-3`, `ex-vek-2-3-manual-4`, `ex-vek-2-3-manual-5`, `ex-vek-2-3-manual-6`, `ex-vek-2-3-manual-7` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `la-1-1` · Was ist eine Matrix?

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Matrizen & Determinanten
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Dimension $m \times n$ als „Zeilen $\times$ Spalten" lesen (Reihenfolge nicht tauschen)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Element $a_{ij}$: erster Index = Zeile, zweiter = Spalte
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Einheitsmatrix, Nullmatrix, Diagonalmatrix, quadratische Matrix auf einen Blick unterscheiden
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Transponierte $A^T$: Zeilen werden Spalten — praktisch für Dimensionscheck
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-1-1-a`, `ex-la-1-1-b`, `ex-la-1-1-c`, `ex-la-1-1-d`, `ex-la-1-1-manual-1`, `ex-la-1-1-manual-2`, `ex-la-1-1-manual-3`, `ex-la-1-1-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-1-3` · Transponierte und Inverse

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Matrizen & Determinanten
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Transponierte: $(A^T)_{ij} = A_{ji}$ (Zeilen/Spalten tauschen), Dimensionen $m \times n \to n \times m$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Transponierten-Regeln: $(A+B)^T = A^T + B^T$, $(AB)^T = B^T A^T$ (Reihenfolge dreht!)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — 2x2-Inverse: $A^{-1} = \frac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Invertierbarkeit: $A^{-1}$ existiert $\iff \det A \neq 0$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Eigenschaft: $AA^{-1} = A^{-1}A = I$ (Einheitsmatrix)
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Symmetrische Matrix: $A^T = A$; orthogonale Matrix: $A^T = A^{-1}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-1-3-a`, `ex-la-1-3-b`, `ex-la-1-3-c`, `ex-la-1-3-d`, `ex-la-1-3-manual-1`, `ex-la-1-3-manual-2`, `ex-la-1-3-manual-3`, `ex-la-1-3-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-1-4` · Determinanten

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Matrizen & Determinanten
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — 2x2: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — 3x3 Regel von Sarrus: Haupt- minus Nebendiagonalen (nur 3x3!)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Laplace-Entwicklung: nach einer Zeile/Spalte, Vorzeichen-Schachbrett $(-1)^{i+j}$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Determinanten-Regeln: $\det(AB) = \det A \cdot \det B$, $\det A^T = \det A$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Geometrisch: $|\det A|$ = Flächen-/Volumen-Skalierungsfaktor
  - 🔴 [5] (hoch) **0/5+** Aufgaben — $\det A = 0 \iff$ Spalten linear abhängig, $A$ singulär, kein $A^{-1}$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-1-4-a`, `ex-la-1-4-b`, `ex-la-1-4-c`, `ex-la-1-4-d`, `ex-la-1-4-manual-1`, `ex-la-1-4-manual-2`, `ex-la-1-4-manual-3`, `ex-la-1-4-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `la-2-2` · Gauss-Algorithmus

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Lineare Gleichungssysteme
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Drei erlaubte Zeilenumformungen: Vertauschen, Skalieren (≠0), Addieren eines Vielfachen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Ziel: Obere Dreiecksform / Stufenform (alle Einträge unter Pivot = 0)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Rücksubstitution: von unten nach oben, Variable nach Variable auflösen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Pivotierung: bei $a_{ii} = 0$ Zeile tauschen, sonst Division durch 0
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Gauss-Jordan: zusätzlich auch über Pivots nullen → reduzierte Stufenform
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Matrix-Inversion mit Gauss: $[A | I] \to [I | A^{-1}]$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-2-2-a`, `ex-la-2-2-b`, `ex-la-2-2-c`, `ex-la-2-2-d`, `ex-la-2-2-manual-1`, `ex-la-2-2-manual-2`, `ex-la-2-2-manual-3`, `ex-la-2-2-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `int-1-1` · Stammfunktion — das Umkehren der Ableitung

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Stammfunktionen & Grundintegrale
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×2, true-false ×1, matching ×2, sorting ×1
- **Typen einsetzen (Rotation):** true-false, sorting, number-input, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Stammfunktion durch „Rückwärts-Ableiten" erkennen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Integrationskonstante $+C$ nicht vergessen
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Probe durch Ableiten der gefundenen Stammfunktion
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-1-1-manual-1`, `ex-int-1-1-manual-2`, `ex-int-1-1-manual-3`, `ex-int-1-1-manual-4`, `ex-int-1-1-manual-5`, `ex-int-1-1-manual-6`, `ex-int-1-1-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `integral-area`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-1-3` · Summenregel & Faktorregel

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Stammfunktionen & Grundintegrale
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Summenregel: $\int (f + g) dx = \int f\,dx + \int g\,dx$ — gliedweise integrieren
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Faktorregel: $\int c f(x) dx = c \int f(x) dx$ — Konstante vors Integral ziehen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Für Produkt $f(x) \cdot g(x)$ gilt KEIN analoges Produktrecht — dort partielle Integration nötig
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Integrationskonstante $C$ bei unbestimmten Integralen konsequent mitschreiben
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-1-3-manual-1`, `ex-int-1-3-manual-2`, `ex-int-1-3-manual-3`, `ex-int-1-3-manual-4`, `ex-int-1-3-manual-5`, `ex-int-1-3-manual-6`, `ex-int-1-3-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-1-4` · Das bestimmte Integral

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Stammfunktionen & Grundintegrale
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×3, number-input ×6, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Hauptsatz: $\int_a^b f(x) dx = F(b) - F(a)$ mit beliebiger Stammfunktion $F$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Geometrisch: Fläche *zwischen* Kurve und x-Achse — unterhalb wird NEGATIV gezählt
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Vertauschen der Grenzen dreht das Vorzeichen: $\int_a^b = -\int_b^a$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Bei bestimmtem Integral fällt die Integrationskonstante $C$ weg (kürzt sich raus)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-1-4-a`, `ex-int-1-4-d`, `ex-int-1-4-manual-1`, `ex-int-1-4-manual-2`, `ex-int-1-4-manual-3`, `ex-int-1-4-manual-4`, `ex-int-1-4-manual-5`, `ex-int-1-4-manual-6` … (+1 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `integral-area`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-2-1` · Substitution

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Integrationstechniken
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formel: $\int f(g(x)) g'(x) dx = \int f(u) du$ mit $u = g(x)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Substitution wählen, wenn Ableitung $g'(x)$ (bis auf Konstante) als Faktor im Integrand vorkommt
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Bei bestimmtem Integral Grenzen mit substituieren: $x = a \to u = g(a)$, analog $b$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Lineare Substitution $u = ax + b$: $du = a\, dx$, sehr häufig in Prüfungen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Trigonometrische Substitution $x = \sin u$ für $\sqrt{1-x^2}$, $x = \tan u$ für $1+x^2$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Standardformen: $\int f'(x)/f(x) dx = \ln|f(x)| + C$ (logarithmische Ableitung)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-2-1-manual-1`, `ex-int-2-1-manual-2`, `ex-int-2-1-manual-3`, `ex-int-2-1-manual-4`, `ex-int-2-1-manual-5`, `ex-int-2-1-manual-6`, `ex-int-2-1-manual-7`, `ex-int-2-1-mastery`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-2-2` · Partielle Integration

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Integrationstechniken
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formel: $\int u v' dx = uv - \int u' v dx$ (aus Produktregel hergeleitet)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — LIATE-Regel: **L**og, **I**nv.Trig, **A**lgebr., **T**rig, **E**xp — davor stehende wird $u$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Spezialtrick $\int \ln x\, dx$: setze $u = \ln x$, $v' = 1$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Mehrfache Anwendung bei $\int x^n e^x dx$ (Grad halbieren pro Schritt)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Kreisintegrale $\int e^x \sin x\, dx$: nach 2 Anwendungen nach Originalintegral auflösen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-2-2-b`, `ex-int-2-2-manual-1`, `ex-int-2-2-manual-2`, `ex-int-2-2-manual-3`, `ex-int-2-2-manual-4`, `ex-int-2-2-manual-5`, `ex-int-2-2-manual-6`, `ex-int-2-2-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-3-1` · Flächenberechnung

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Anwendungen
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×4, number-input ×5, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, multiple-choice, number-input
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Fläche unter $f(x) \geq 0$ auf $[a,b]$: $A = \int_a^b f(x) dx$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Vorzeichenproblem: Bei $f < 0$ liefert Integral negativen Wert — Fläche = Betrag
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Fläche zwischen Kurven: $A = \int_a^b (f_{\text{oben}} - f_{\text{unten}}) dx$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Schnittpunkte als Integrationsgrenzen: $f(x) = g(x)$ lösen
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Bei Vorzeichenwechsel Nullstellen finden und in Teilintervalle splitten
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Fläche zwischen $y = $ const und Kurve: Horizontalstreifen oder Transformation
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-3-1-manual-1`, `ex-int-3-1-manual-2`, `ex-int-3-1-manual-3`, `ex-int-3-1-manual-4`, `ex-int-3-1-manual-5`, `ex-int-3-1-manual-6`, `ex-int-3-1-manual-7`, `ex-int-3-1-mastery`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `integral-area`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `dgl-1-3` · Lineare DGL 1. Ordnung

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Grundbegriffe & einfache DGL
- **Aufgaben aktuell:** 12 · **mindestens:** 20 · **fehlen bis Minimum:** 8 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Standardform: $y' + p(x) y = q(x)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Integrierender Faktor: $\mu(x) = e^{\int p(x) dx}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Lösungsformel: $y = (1/\mu) [\int \mu \cdot q \, dx + C]$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Alternative: Variation der Konstanten (homogene + partikuläre Lösung)
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Homogene Lösung $y_h = C e^{-\int p dx}$ einzeln bestimmbar
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Typisches Anwendungsproblem: RC-Stromkreis $\dot U + U/RC = U_0/RC$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/differentialgleichungen.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 8 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/differentialgleichungen.js`
- **4-Block-Erklärung fehlt bei:** `ex-dgl-1-3-a`, `ex-dgl-1-3-b`, `ex-dgl-1-3-c`, `ex-dgl-1-3-d`, `ex-dgl-1-3-manual-1`, `ex-dgl-1-3-manual-2`, `ex-dgl-1-3-manual-3`, `ex-dgl-1-3-manual-4` … (+4 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `spring-mass-damper`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `abl-1-2` · Potenzregel und Summenregel

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grundlagen der Differentialrechnung
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Potenzregel $(x^n)'=nx^{n-1}$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Summenregel $(f+g)'=f'+g'$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Wurzeln und Kehrwerte als Potenzen $x^{1/2}, x^{-1}$ ableiten
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Konstanten und Konstante Faktoren richtig behandeln
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-1-2-manual-1`, `ex-abl-1-2-manual-2`, `ex-abl-1-2-manual-3`, `ex-abl-1-2-manual-4`, `ex-abl-1-2-manual-5`, `ex-abl-1-2-manual-6`, `ex-abl-1-2-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `derivative-graph`, `function-graph`, `limit-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-1-3` · Ableitungen elementarer Funktionen

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grundlagen der Differentialrechnung
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$ — Vorzeichen bei Kosinus nicht vergessen
  - 🔴 [1] (hoch) **0/5+** Aufgaben — $(e^x)' = e^x$ (einzige Funktion mit $f' = f$) und $(\ln x)' = 1/x$
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Allgemeine Exponential-/Logarithmusfunktion: $(a^x)' = a^x \ln a$, $(\log_a x)' = 1/(x \ln a)$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Definitionsbereich beachten: $\ln x$ nur für $x>0$, $\sqrt x$ für $x \ge 0$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-1-3-a`, `ex-abl-1-3-manual-1`, `ex-abl-1-3-manual-2`, `ex-abl-1-3-manual-3`, `ex-abl-1-3-manual-4`, `ex-abl-1-3-manual-5`, `ex-abl-1-3-manual-6`, `ex-abl-1-3-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `derivative-graph`, `function-graph`, `limit-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-1-4` · Kettenregel

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Grundlagen der Differentialrechnung
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Kettenregel: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — „äußere mal innere Ableitung"
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Äußere Funktion identifizieren (die, die man zuletzt ausführt) und separat ableiten
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Standardfälle: $(e^{u(x)})' = e^{u(x)} \cdot u'(x)$, $(\sin u)' = \cos u \cdot u'$, $(\ln u)' = u'/u$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Bei mehrfach verketteten Funktionen hierarchisch: erst äußerste Schale, dann nächst innere, etc.
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-1-4-a`, `ex-abl-1-4-manual-1`, `ex-abl-1-4-manual-2`, `ex-abl-1-4-manual-3`, `ex-abl-1-4-manual-4`, `ex-abl-1-4-manual-5`, `ex-abl-1-4-manual-6`, `ex-abl-1-4-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-2-1` · Produktregel

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Ableitungsregeln im Detail
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formel: $(f \cdot g)' = f' g + f g'$ (zwei Summanden, kreuzweise)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Klassischer Fehler: $(fg)' \neq f' g'$ (nicht faktorweise ableiten!)
  - 🔴 [2] (niedrig) **0/5+** Aufgaben — Geometrische Motivation: Flächenänderung eines Rechtecks mit variablen Seiten
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Dreifaches Produkt: $(fgh)' = f'gh + fg'h + fgh'$ (analog, drei Summanden)
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Nach dem Ableiten ausklammern und vereinfachen — Prüfer erwartet gekürzte Form
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-2-1-manual-1`, `ex-abl-2-1-manual-2`, `ex-abl-2-1-manual-3`, `ex-abl-2-1-manual-4`, `ex-abl-2-1-manual-5`, `ex-abl-2-1-manual-6`, `ex-abl-2-1-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-2-2` · Quotientenregel

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Ableitungsregeln im Detail
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×2, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formel: $(f/g)' = (f' g - f g')/g^2$ — Minuszeichen, Reihenfolge $f' g$ zuerst
  - 🔴 [1] (mittel) **0/5+** Aufgaben — NAZ-Eselsbrücke: "**N**enner·**A**bl. **Z**ähler minus **Z**ähler·**A**bl. **N**enner, durch $N^2$"
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Nenner niemals ableiten ohne Vorzeichen: $f' g - f g'$ (NICHT $f g' - f' g$)
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Alternative: $f/g = f \cdot g^{-1}$ mit Produkt- und Kettenregel ableiten
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Definitionsbereich: $g(x) \neq 0$ (Polstellen gesondert betrachten)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-2-2-a`, `ex-abl-2-2-manual-1`, `ex-abl-2-2-manual-2`, `ex-abl-2-2-manual-3`, `ex-abl-2-2-manual-4`, `ex-abl-2-2-manual-5`, `ex-abl-2-2-manual-6`, `ex-abl-2-2-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-2-4` · Gemischte Regeln

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Ableitungsregeln im Detail
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Äußerste Struktur identifizieren: Produkt, Quotient oder Verkettung?
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Hierarchisch ableiten: erst äußerste Regel, dann innere Teile mit passender Regel
  - 🔴 [2] (mittel) **0/5+** Aufgaben — Logarithmisches Ableiten bei $f(x)^{g(x)}$: $\ln y = g \ln f$, dann implizit differenzieren
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Umformen vor dem Ableiten: $\sqrt[n]{x}$ → $x^{1/n}$, $1/x^n$ → $x^{-n}$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Ergebnisse faktorisieren — Prüfer erwarten vereinfachte Antwort
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-2-4-manual-1`, `ex-abl-2-4-manual-2`, `ex-abl-2-4-manual-3`, `ex-abl-2-4-manual-4`, `ex-abl-2-4-manual-5`, `ex-abl-2-4-manual-6`, `ex-abl-2-4-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-3-1` · Monotonie und Extremwerte

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Kurvendiskussion
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** matching, sorting, true-false, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Monotonie-Kriterium: $f'(x) > 0$ → streng wachsend, $f'(x) < 0$ → streng fallend
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Notwendige Bedingung für lokales Extremum: $f'(x_0) = 0$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Hinreichend via $f''$: $f''(x_0) > 0$ → Min, $f''(x_0) < 0$ → Max
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Hinreichend via Vorzeichenwechsel: $f'$ wechselt $+ \to -$ → Max, $- \to +$ → Min
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Kein Vorzeichenwechsel von $f'$ bei $f'(x_0) = 0$ → Sattelpunkt (z.B. $f(x) = x^3$ bei $0$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-3-1-a`, `ex-abl-3-1-b`, `ex-abl-3-1-c`, `ex-abl-3-1-d`, `ex-abl-3-1-transfer`, `ex-abl-3-1-manual-1`, `ex-abl-3-1-manual-2`, `ex-abl-3-1-manual-3` … (+5 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `derivative-graph`, `function-graph`, `limit-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `abl-3-4` · Prüfungsaufgaben Kurvendiskussion

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Kurvendiskussion
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×1, matching ×2, sorting ×1
- **Typen einsetzen (Rotation):** true-false, sorting, matching, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Typische Klausurfunktionen: Polynom, Bruch $p(x)/q(x)$, $x \cdot e^{-x}$, $e^{-x^2}$
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Plausibilitätsprüfung: Polynom Grad $n$ hat höchstens $n-1$ Extrema
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Globale Extrema auf Intervall $[a,b]$: innere Kandidaten + Randpunkte $f(a), f(b)$ vergleichen
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Anwendungsaufgabe (Optimierung): Zielfunktion aufstellen, Nebenbedingung einsetzen, dann ableiten
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Taylorpolynom $T_n(x)$ als schnelle lokale Kurvendiskussion 2. Ordnung
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-3-4-a`, `ex-abl-3-4-b`, `ex-abl-3-4-c`, `ex-abl-3-4-d`, `ex-abl-3-4-e`, `ex-abl-3-4-manual-1`, `ex-abl-3-4-manual-2`, `ex-abl-3-4-manual-3` … (+5 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `vek-2-4` · Prüfungsaufgaben Analytische Geometrie

- **Topic:** `vektoren` (Vektoren & Analytische Geometrie) · **Unit:** Geraden und Ebenen im Raum
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Lotfußpunkt auf Ebene: Hilfsgerade durch $P$ in Richtung $\vec n$, Schnitt mit Ebene
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Schnittgerade zweier Ebenen: Richtung $\vec v = \vec n_1 \times \vec n_2$, Punkt durch LGS-Lösung
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Gerade ⊥ Ebene $\iff \vec v_g \parallel \vec n_E$; Gerade $\parallel$ Ebene $\iff \vec v_g \perp \vec n_E$
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Abstand paralleler Ebenen: $d = |d_1 - d_2|/|\vec n|$ bei **gleichem** $\vec n$
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Spiegelpunkt $P'$ an Ebene: $P' = 2F - P$ mit Lotfußpunkt $F$
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Winkel zwischen Gerade und Ebene: $\sin\alpha = |\vec v \cdot \vec n|/(|\vec v||\vec n|)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/vektoren.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/vektoren.js`
- **4-Block-Erklärung fehlt bei:** `ex-vek-2-4-a`, `ex-vek-2-4-b`, `ex-vek-2-4-c`, `ex-vek-2-4-d`, `ex-vek-2-4-e`, `ex-vek-2-4-manual-1`, `ex-vek-2-4-manual-2`, `ex-vek-2-4-manual-3` … (+5 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `vector-diagram`, `vector-3d`, `force-parallelogram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `vektoren`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Skalarprodukt: Orthogonalität ($\vec a\cdot\vec b=0$) und Winkel ($\cos\varphi = \vec a\cdot\vec b/(|\vec a||\vec b|)$). · Kreuzprodukt: Normalenvektor + Parallelogrammfläche; Reihenfolge ist nicht kommutativ. · Hessesche Normalform für Abstand Punkt–Ebene. · …
  - _Typische Fehler (gute Distraktoren):_ Bei Kreuzprodukt $\vec a\times\vec b$ vs. $\vec b\times\vec a$ verwechselt — Vorzeichen! · $\cos\alpha$ für Winkel Gerade–Ebene benutzt statt $\sin\alpha$. · Skalarprodukt mit Summe verwechselt ($\vec a+\vec b \ne \vec a\cdot\vec b$).
  - _Klausur-Fokus:_ Kräftegleichgewicht in 3D mit Skalar-/Kreuzprodukt. · Abstand Punkt–Ebene und Gerade–Gerade. · Drehmoment $\vec M = \vec r\times\vec F$.

#### `alg-3-2` · Elementare Funktionen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Funktionen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-3-1` → `fkt-def`, `def-bereich`, `wertebereich`
  - `alg-1-1` → `pot-potenz`
  - `alg-1-2` → `wurzel-bruchpot`
  - `alg-1-3` → `log-def`, `log-umkehr`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `potenz-fkt` — Potenzfunktion $f(x)=x^n$: Symmetrie je nach gerade/ungerade $n$ (SG 0)
  2. `exp-fkt` — Exponentialfunktion $f(x)=a^x$ ($a>0, a\neq 1$): $W = (0,\infty)$ (SG 1)
  3. `log-fkt` — Logarithmusfunktion $f(x)=\log_a x$: $D = (0,\infty)$ ⇐ `exp-fkt` (SG 2)
  4. `wurzel-fkt` — Wurzelfunktion $f(x)=\sqrt x$: $D = [0,\infty)$ (SG 5)
  5. `euler-zahl` — $e \approx 2{,}718$ als Basis des natürlichen Logarithmus ⇐ `exp-fkt` (SG 4)
  6. `wachstum-hierarchie` — Wachstumshierarchie $\ln x \ll x^n \ll a^x$ für $x \to \infty$ ⇐ `potenz-fkt`, `exp-fkt`, `log-fkt` (SG 3)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - 🔴 [0] _hoch_ · Konzepte: `potenz-fkt` · **0/5+** — Potenzfunktion $x^n$: gerade $n$ → Parabel, ungerade $n$ → S-Form; Def.bereich $\mathbb{R}$
  - 🔴 [1] _hoch_ · Konzepte: `exp-fkt` · **0/5+** — Exponentialfunktion $a^x$ ($a>0, a\neq 1$): Wertebereich $(0,\infty)$, streng monoton
  - 🔴 [2] _hoch_ · Konzepte: `log-fkt` · **0/5+** — Logarithmusfunktion $\log_a x$: Def.bereich $(0,\infty)$, Umkehrung von $a^x$
  - 🔴 [3] _hoch_ · Konzepte: `wachstum-hierarchie` · **0/5+** — Wachstumshierarchie: $\ln x \ll x^n \ll a^x$ für $x \to \infty$ (mit $a > 1$)
  - 🔴 [4] _mittel_ · Konzepte: `euler-zahl` · **0/5+** — Eulersche Zahl $e \approx 2{,}718$: Basis des natürlichen Logarithmus
  - 🔴 [5] _mittel_ · Konzepte: `wurzel-fkt` · **0/5+** — Wurzelfunktion $\sqrt{x} = x^{1/2}$: Def.bereich $[0,\infty)$
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `potenz-fkt` | 1 | 0 | 🔴 |  |
|  2 | 0 | apply-guided       | multiple-choice  | `potenz-fkt` | 1 | 0 | 🔴 |  |
|  3 | 0 | apply-independent  | matching         | `potenz-fkt` | 1 | 0 | 🔴 | Graph ↔ $x^n$ |
|  4 | 0 | error-analysis     | multiple-choice  | `potenz-fkt` | 1 | 0 | 🔴 |  |
|  5 | 0 | transfer           | matching         | `potenz-fkt` | 1 | 0 | 🔴 |  |
|  6 | 1 | recognize          | true-false       | `exp-fkt` | 1 | 0 | 🔴 |  |
|  7 | 1 | apply-guided       | multiple-choice  | `exp-fkt` | 1 | 0 | 🔴 |  |
|  8 | 1 | apply-independent  | number-input     | `exp-fkt` | 1 | 0 | 🔴 |  |
|  9 | 1 | error-analysis     | multiple-choice  | `exp-fkt` | 1 | 0 | 🔴 | Distraktor: $a^x$ kann $0$ sein |
| 10 | 1 | transfer           | matching         | `exp-fkt` | 1 | 0 | 🔴 |  |
| 11 | 2 | recognize          | true-false       | `log-fkt` | 1 | 0 | 🔴 |  |
| 12 | 2 | apply-guided       | multiple-choice  | `log-fkt` | 1 | 0 | 🔴 |  |
| 13 | 2 | apply-independent  | number-input     | `log-fkt` | 1 | 0 | 🔴 |  |
| 14 | 2 | error-analysis     | multiple-choice  | `log-fkt` | 1 | 0 | 🔴 |  |
| 15 | 2 | transfer           | matching         | `log-fkt`, `exp-fkt` | 1 | 0 | 🔴 |  |
| 16 | 3 | recognize          | matching         | `wachstum-hierarchie` | 1 | 0 | 🔴 |  |
| 17 | 3 | apply-guided       | multiple-choice  | `wachstum-hierarchie` | 1 | 0 | 🔴 |  |
| 18 | 3 | apply-independent  | multiple-choice  | `wachstum-hierarchie` | 1 | 0 | 🔴 |  |
| 19 | 3 | error-analysis     | multiple-choice  | `wachstum-hierarchie` | 1 | 0 | 🔴 |  |
| 20 | 3 | transfer           | sorting          | `wachstum-hierarchie` | 1 | 0 | 🔴 |  |
| 21 | 4 | recognize          | true-false       | `euler-zahl` | 1 | 0 | 🔴 |  |
| 22 | 4 | apply-guided       | multiple-choice  | `euler-zahl` | 1 | 0 | 🔴 |  |
| 23 | 4 | apply-independent  | number-input     | `euler-zahl` | 1 | 0 | 🔴 |  |
| 24 | 4 | error-analysis     | multiple-choice  | `euler-zahl` | 1 | 0 | 🔴 |  |
| 25 | 4 | transfer           | matching         | `euler-zahl` | 1 | 0 | 🔴 |  |
| 26 | 5 | recognize          | true-false       | `wurzel-fkt` | 1 | 0 | 🔴 |  |
| 27 | 5 | apply-guided       | multiple-choice  | `wurzel-fkt` | 1 | 0 | 🔴 |  |
| 28 | 5 | apply-independent  | number-input     | `wurzel-fkt` | 1 | 0 | 🔴 |  |
| 29 | 5 | error-analysis     | multiple-choice  | `wurzel-fkt` | 1 | 0 | 🔴 |  |
| 30 | 5 | transfer           | matching         | `wurzel-fkt` | 1 | 0 | 🔴 |  |

- **Offene Aufgaben-Lücken:** 30 (Zeilen 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) — jede 🔴/🟡-Zeile muss bis auf "Soll" aufgefüllt werden; Aufgaben mit gleicher Sub-Goal × Stage × Typ × uses zählen.
- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-3-2': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-3-2-a`, `ex-alg-3-2-b`, `ex-alg-3-2-c`, `ex-alg-3-2-d`, `ex-alg-3-2-e`, `ex-alg-3-2-manual-1`, `ex-alg-3-2-manual-2`, `ex-alg-3-2-manual-3` … (+4 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere möglich: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `la-1-2` · Matrizenrechnung

- **Topic:** `lineare-algebra` (Lineare Algebra) · **Unit:** Matrizen & Determinanten
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Addition nur bei identischer Dimension — elementweise
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Matrizenmultiplikation: „Zeile mal Spalte" — Innen-Dimensionen müssen passen ($m\!\times\!k$ · $k\!\times\!n$)
  - 🔴 [2] (hoch) **0/5+** Aufgaben — $A\,B \neq B\,A$ im Allgemeinen — Reihenfolge wichtig
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Rechenregeln: $(A\,B)^T = B^T A^T$ (Reihenfolge dreht sich um)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/lineare_algebra.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/lineare_algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-la-1-2-a`, `ex-la-1-2-b`, `ex-la-1-2-c`, `ex-la-1-2-d`, `ex-la-1-2-e`, `ex-la-1-2-manual-1`, `ex-la-1-2-manual-2`, `ex-la-1-2-manual-3` … (+5 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `eigenvector-viz`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `lineare-algebra`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Matrizenprodukt: Zeile mal Spalte, Dimensionen prüfen. · Determinante 2×2: $ad-bc$; 3×3: Regel von Sarrus oder Entwicklung nach Zeile. · $\det A\ne 0 \Leftrightarrow$ Matrix invertierbar, LGS eindeutig lösbar. · …
  - _Typische Fehler (gute Distraktoren):_ Matrizen multiplizieren in falscher Reihenfolge ($AB\ne BA$). · Bei 3×3-Determinante Vorzeichen der Kofaktoren falsch. · Bei Eigenvektor den Skalierungsfaktor nicht normiert oder wichtige Komponente auf 0 gesetzt.
  - _Klausur-Fokus:_ LGS mit Gauß-Verfahren und Probe. · 2×2- oder 3×3-Determinante berechnen. · Eigenwerte und Eigenvektoren für 2×2-Matrix.

#### `int-1-2` · Grundintegrale

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Stammfunktionen & Grundintegrale
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×2, true-false ×1, matching ×2, sorting ×1
- **Typen einsetzen (Rotation):** true-false, sorting, number-input, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Potenzregel $\int x^n dx = x^{n+1}/(n+1)+C$ für $n\neq-1$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Sonderfall $\int \frac{1}{x}dx = \ln|x|+C$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Stammfunktionen von $e^x$, $\sin x$, $\cos x$ auswendig
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Summen- und Faktorregel beim Integrieren
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-1-2-c`, `ex-int-1-2-e`, `ex-int-1-2-manual-1`, `ex-int-1-2-manual-2`, `ex-int-1-2-manual-3`, `ex-int-1-2-manual-4`, `ex-int-1-2-manual-5`, `ex-int-1-2-manual-6` … (+1 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `int-2-4` · Gemischte Übungen

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Integrationstechniken
- **Aufgaben aktuell:** 13 · **mindestens:** 20 · **fehlen bis Minimum:** 7 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×4, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Zähler = Ableitung des Nenners → direkte Stammfunktion $\ln|f|$ (ohne Substitution)
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Halbwinkelformeln für $\sin^2 x = (1 - \cos 2x)/2$, $\cos^2 x = (1 + \cos 2x)/2$
  - 🔴 [2] (niedrig) **0/5+** Aufgaben — Substitutionen $t = \tan(x/2)$ (Weierstraß) für rationale trigonometrische Ausdrücke
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Fourier-Orthogonalität: $\int_0^{2\pi} \sin(nx) \cos(mx) dx = 0$, nützliche Muster
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Integrationsstrategie wählen **vor** dem Rechnen — 10 s nachdenken spart 10 Minuten
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/integralrechnung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 7 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/integralrechnung.js`
- **4-Block-Erklärung fehlt bei:** `ex-int-2-4-manual-1`, `ex-int-2-4-manual-2`, `ex-int-2-4-manual-3`, `ex-int-2-4-manual-4`, `ex-int-2-4-manual-5`, `ex-int-2-4-manual-6`, `ex-int-2-4-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `abl-2-3` · Kettenregel — Schritt für Schritt

- **Topic:** `ableitung` (Differentialrechnung) · **Unit:** Ableitungsregeln im Detail
- **Aufgaben aktuell:** 14 · **mindestens:** 20 · **fehlen bis Minimum:** 6 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×3, true-false ×1, matching ×1, sorting ×1
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Formel: $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ — äußere mal innere Ableitung
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Innere Funktion in äußerer Ableitung unverändert eingesetzt lassen
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Mehrfachverkettung: Ableitungen von außen nach innen multiplizieren
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Häufigste Anwendung: $(ax+b)^n$, $e^{ax}$, $\sin(ax)$ — innere Ableitung $= a$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Häufiger Fehler: innere Ableitung vergessen (z.B. $(\sin 2x)' = 2\cos 2x$, nicht $\cos 2x$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/ableitung.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 6 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/ableitung.js`
- **4-Block-Erklärung fehlt bei:** `ex-abl-2-3-manual-1`, `ex-abl-2-3-manual-2`, `ex-abl-2-3-manual-3`, `ex-abl-2-3-manual-4`, `ex-abl-2-3-manual-5`, `ex-abl-2-3-manual-6`, `ex-abl-2-3-manual-7`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `derivative-graph`, `function-graph`, `limit-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `ableitung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Ableitungen von $\sin, \cos, e^x, \ln x, x^n$ auswendig. · Kettenregel: äußere mal innere Ableitung. · Notwendige Bedingung für Extrema: $f'(x)=0$. Hinreichend: Vorzeichenwechsel von $f'$ oder $f''$ einsetzen. · …
  - _Typische Fehler (gute Distraktoren):_ Kettenregel-Anwendung vergessen bei $(\sin(2x))'$, $(e^{x^2})'$ etc. · Produktregel mit Summenregel verwechselt. · $f'(x)=0$ als hinreichend für Extremum angenommen (Sattelpunkte!). · …
  - _Klausur-Fokus:_ Kurvendiskussion komplett (Definitionsbereich, Nullstellen, Asymptoten, Extrema, Wendepunkte). · Optimierungsaufgabe mit Nebenbedingung (Extremwertaufgabe). · l'Hospital für $0/0$-Grenzwerte.

#### `fl-1-1` · Fourier-Reihen — Grundbegriffe

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Fourier-Reihen
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — $T$-Periode und Grundfrequenz $\omega_0 = 2\pi/T$ korrekt identifizieren
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Formel: $a_0 = \tfrac{1}{T}\int_0^T f\,dt$ (DC-Anteil), $a_n$, $b_n$ mit Faktor $\tfrac{2}{T}$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Gerade $f$ ($f(-t) = f(t)$) → nur $a_n$; ungerade → nur $b_n$ — halbiert den Aufwand
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Reihenansatz: $f(t) = a_0/2 + \sum_n (a_n\cos + b_n\sin)$ — Faktor $1/2$ vor $a_0$ nicht vergessen
  - 🔴 [4] (mittel) **0/5+** Aufgaben — Integration über eine volle Periode — Start- und Endpunkt frei wählbar (z. B. $-T/2$ bis $T/2$)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-1-1-1`, `ex-fl-1-1-2`, `ex-fl-1-1-3`, `ex-fl-1-1-4`, `ex-fl-1-1-5`, `ex-fl-1-1-6`, `ex-fl-1-1-7`, `ex-fl-1-1-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

#### `fl-1-2` · Fourier-Reihe Rechteckimpuls

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Fourier-Reihen
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ungerades Rechteck → nur $b_n$; nur **ungerade** $n$ liefern Beitrag ($b_n \propto 1/n$)
  - 🔴 [1] (mittel) **0/5+** Aufgaben — Gibbs-Überschwinger ca. 9 % an Sprungstellen — wird mit mehr Termen nicht kleiner, nur schmaler
  - 🔴 [2] (niedrig) **0/5+** Aufgaben — Konvergenz in der Mitte der Sprungstelle zum Mittelwert der beiden Seiten
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Amplitudenspektrum: $1/n$-Abfall → „langsame" Abnahme hoher Frequenzen
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-1-2-1`, `ex-fl-1-2-2`, `ex-fl-1-2-3`, `ex-fl-1-2-4`, `ex-fl-1-2-5`, `ex-fl-1-2-6`, `ex-fl-1-2-7`, `ex-fl-1-2-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

#### `fl-1-3` · Fourier-Transformation

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Fourier-Reihen
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — FT-Definition: $F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Rücktransformation: $f(t) = (1/2\pi) \int F(\omega) e^{i\omega t} d\omega$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Wichtige Paare: Rechteckpuls ↔ Sinc, Gauß ↔ Gauß, $\delta(t)$ ↔ 1
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Linearität: $\alpha f + \beta g \leftrightarrow \alpha F + \beta G$
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Verschiebungssatz: $f(t-t_0) \leftrightarrow F(\omega) e^{-i\omega t_0}$
  - 🔴 [5] (hoch) **0/5+** Aufgaben — Ableitungsregel: $f'(t) \leftrightarrow i\omega F(\omega)$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-1-3-1`, `ex-fl-1-3-2`, `ex-fl-1-3-3`, `ex-fl-1-3-4`, `ex-fl-1-3-5`, `ex-fl-1-3-6`, `ex-fl-1-3-7`, `ex-fl-1-3-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

#### `fl-2-1` · Laplace-Grundlagen

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Laplace-Transformation
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Definition: $\mathcal L\{f\}(s) = \int_0^\infty f(t) e^{-st} dt$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — Wichtige Paare: $1 \leftrightarrow 1/s$, $t \leftrightarrow 1/s^2$, $e^{at} \leftrightarrow 1/(s-a)$
  - 🔴 [2] (hoch) **0/5+** Aufgaben — $\sin(\omega t) \leftrightarrow \omega/(s^2 + \omega^2)$, $\cos(\omega t) \leftrightarrow s/(s^2 + \omega^2)$
  - 🔴 [3] (mittel) **0/5+** Aufgaben — Konvergenzbereich (ROC): $\text{Re}(s) > \sigma_0$ — hängt vom Signal ab
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Linearität: $\mathcal L\{\alpha f + \beta g\} = \alpha F + \beta G$
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-2-1-1`, `ex-fl-2-1-2`, `ex-fl-2-1-3`, `ex-fl-2-1-4`, `ex-fl-2-1-5`, `ex-fl-2-1-6`, `ex-fl-2-1-7`, `ex-fl-2-1-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

#### `fl-2-2` · Laplace zur DGL-Lösung

- **Topic:** `fourier-laplace` (Fourier & Laplace) · **Unit:** Laplace-Transformation
- **Aufgaben aktuell:** 15 · **mindestens:** 20 · **fehlen bis Minimum:** 5 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×3, true-false ×2, matching ×2, sorting ×2
- **Typen einsetzen (Rotation):** true-false, matching, sorting, number-input, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - 🔴 [0] (hoch) **0/5+** Aufgaben — Ableitungsregel: $\mathcal L\{y'\} = sY - y(0)$, $\mathcal L\{y''\} = s^2 Y - s y(0) - y'(0)$
  - 🔴 [1] (hoch) **0/5+** Aufgaben — DGL-Lösung: transformieren → algebraische Gl. in $Y(s)$ → PBZ → rücktransformieren
  - 🔴 [2] (hoch) **0/5+** Aufgaben — Übertragungsfunktion $G(s) = Y(s)/U(s)$ bei verschwindenden AB
  - 🔴 [3] (hoch) **0/5+** Aufgaben — Partialbruchzerlegung nötig für Rücktransformation komplexer Ausdrücke
  - 🔴 [4] (hoch) **0/5+** Aufgaben — Stabilität aus Polstellen von $G(s)$: alle $\text{Re}(p_i) < 0$ → BIBO-stabil
  - 🔴 [5] (mittel) **0/5+** Aufgaben — Endwertsatz: $\lim_{t\to\infty} y(t) = \lim_{s\to 0} s Y(s)$ (falls Limes existiert)
- **Goal-Tasks fehlen (mindestens):** SG 0: +5, SG 1: +5, SG 2: +5, SG 3: +5, SG 4: +5, SG 5: +5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/subgoal_tasks/fourier_laplace.js`
  - Format: `{ [subGoalIndex]: Exercise[] }` — Array pro Sub-Goal, beliebig viele Einträge.
- **Zusatz-Aufgaben fehlen (mindestens):** 5 — gerne mehr, keine Obergrenze
  - Ablage: `src/content/supplements/fourier_laplace.js`
- **4-Block-Erklärung fehlt bei:** `ex-fl-2-2-1`, `ex-fl-2-2-2`, `ex-fl-2-2-3`, `ex-fl-2-2-4`, `ex-fl-2-2-5`, `ex-fl-2-2-6`, `ex-fl-2-2-7`, `ex-fl-2-2-manual-1` … (+7 weitere)
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `sin-wave-explorer`, `spring-mass-damper`, `complex-plane`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `fourier-laplace`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Fourier-Koeffizienten $a_n=\tfrac{2}{T}\int f(t)\cos(n\omega t)\,dt$ bzw. $b_n$ mit $\sin$. · Gerade $f \Rightarrow b_n=0$, ungerade $\Rightarrow a_n=0$. · Laplace-Grundkorrespondenzen: $\sigma(t)\to 1/s$, $e^{-at}\to 1/(s+a)$, $\sin\omega t\to \omega/(s^2+\omega^2)$. · …
  - _Typische Fehler (gute Distraktoren):_ Periodendauer $T$ bei Integralen falsch gewählt. · Bei Rechtecksignalen die ungeraden $1/n$-Koeffizienten übersehen. · Laplace-Korrespondenzen auswendig, aber Verschiebungssatz ignoriert.
  - _Klausur-Fokus:_ Fourier-Koeffizienten eines Rechteck-/Sägezahnsignals. · Sprungantwort eines PT1-Glieds per Laplace. · Rücktransformation einer Partialbruchzerlegung.

### 🟢 Niedrig (4-Block / wAE nachziehen) — 26 Lessons

#### `mech-0-3` · Dimensionsanalyse — Einheitencheck

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Einheiten & Dimensionsanalyse (Einstieg)
- **Aufgaben aktuell:** 24 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×7, true-false ×5, matching ×3, sorting ×4
- **Typen einsetzen (Rotation):** matching, sorting, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Dimensionskonsistenz: links und rechts des Gleichheitszeichens müssen dieselben Einheiten stehen
  - ✅ [1] (hoch) **5/5+** Aufgaben — Basis-SI-Einheiten (m, kg, s, A, K, mol, cd) — alle anderen Einheiten daraus aufgebaut
  - ✅ [2] (mittel) **5/5+** Aufgaben — Einheit Pascal: $1\,\text{Pa} = 1\,\text{N/m}^2 = 1\,\text{kg}/(\text{m}\cdot\text{s}^2)$
  - ✅ [3] (hoch) **5/5+** Aufgaben — Umrechnungen (mm → m, MPa → Pa, kN → N) vor dem Einsetzen in Formeln — NIE im Kopf in gemischten Einheiten rechnen
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `trig-1-4` · Vorzeichen und Quadranten

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Grundlagen der Trigonometrie
- **Aufgaben aktuell:** 25 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×8, number-input ×5, true-false ×4, matching ×4, sorting ×4
- **Typen einsetzen (Rotation):** true-false, matching, sorting
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Quadranten I–IV durchnummerieren und Vorzeichen von $\sin$ (y-Koordinate) und $\cos$ (x-Koordinate) bestimmen
  - ✅ [1] (hoch) **5/5+** Aufgaben — Symmetrien: $\sin(180° - \alpha) = \sin\alpha$, $\cos(180° - \alpha) = -\cos\alpha$
  - ✅ [2] (mittel) **5/5+** Aufgaben — Reduktionsformel: jeder Winkel zwischen $0°$ und $360°$ lässt sich auf Referenzwinkel $0°$–$90°$ zurückführen
- **4-Block-Erklärung fehlt bei:** `ex-trig-1-4-manual-1`, `ex-trig-1-4-manual-2`, `ex-trig-1-4-manual-3`, `ex-trig-1-4-manual-4`, `ex-trig-1-4-manual-5`, `ex-trig-1-4-manual-6`, `ex-trig-1-4-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `alg-0-1` · Grundrechnen, Klammern & Vorrang

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Rechnen & Brüche (Vorkurs-Einstieg)
- **Prerequisites:** keine (Einstiegs-Lesson).
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `prio-basic` — Vorrangregel: Punkt- vor Strichrechnung (SG 0)
  2. `prio-potenz` — Potenz- vor Punktrechnung ⇐ `prio-basic` (SG 0)
  3. `prio-klammer` — Klammern überschreiben die Präzedenz (zuerst ausrechnen) ⇐ `prio-basic` (SG 3)
  4. `minus-vorklammer` — $-(a+b) = -a - b$ — Minuszeichen auf alle Summanden (SG 1)
  5. `minus-mal-minus` — $(-a)(-b) = +ab$ — Doppel-Minus = Plus ⇐ `minus-vorklammer` (SG 2)
  6. `klammer-schachtel` — Geschachtelte Klammern: innerste zuerst auflösen ⇐ `prio-klammer` (SG 3)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `prio-basic`, `prio-potenz` · **6/5+** — Vorrangregel Punkt-vor-Strich bei gemischten Termen
  - ✅ [1] _hoch_ · Konzepte: `minus-vorklammer` · **5/5+** — Minuszeichen vor Klammer auf alle Summanden anwenden
  - ✅ [2] _mittel_ · Konzepte: `minus-mal-minus` · **5/5+** — Doppel-Minus aufgelöst: $(-a)(-b)=+ab$
  - ✅ [3] _mittel_ · Konzepte: `prio-klammer`, `klammer-schachtel` · **5/5+** — Klammerschachtelung von innen nach außen abarbeiten
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `prio-basic` | 1 | 1 | ✅ | Aussage „$3+4\cdot 2 = 11$" prüfen |
|  2 | 0 | apply-guided       | multiple-choice  | `prio-basic` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `prio-basic`, `prio-potenz` | 2 | 2 | ✅ | Term mit Potenz + Mult + Strich |
|  4 | 0 | error-analysis     | multiple-choice  | `prio-basic` | 1 | 1 | ✅ | Distraktor: von links nach rechts gerechnet |
|  5 | 0 | transfer           | sorting          | `prio-basic`, `prio-potenz` | 1 | 1 | ✅ | Schritte in korrekte Reihenfolge bringen |
|  6 | 1 | recognize          | true-false       | `minus-vorklammer` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `minus-vorklammer` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `minus-vorklammer` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `minus-vorklammer` | 1 | 1 | ✅ | Distraktor: nur ersten Summanden umgedreht |
| 10 | 1 | transfer           | matching         | `minus-vorklammer` | 1 | 1 | ✅ | Klammer-Term ↔ aufgelöstes Ergebnis |
| 11 | 2 | recognize          | true-false       | `minus-mal-minus` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `minus-mal-minus` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `minus-mal-minus` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `minus-mal-minus` | 1 | 1 | ✅ | Distraktor: Vorzeichen übersehen |
| 15 | 2 | transfer           | number-input     | `minus-mal-minus`, `minus-vorklammer` | 1 | 1 | ✅ | Kombi: $-(-(2-5))$ oder ähnlich |
| 16 | 3 | recognize          | true-false       | `klammer-schachtel` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `klammer-schachtel` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `klammer-schachtel` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `klammer-schachtel` | 1 | 1 | ✅ | Distraktor: äußerste Klammer zuerst gerechnet |
| 20 | 3 | transfer           | sorting          | `klammer-schachtel`, `prio-klammer` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-0-1': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-0-2` · Bruchrechnen sicher

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Rechnen & Brüche (Vorkurs-Einstieg)
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-1` → `prio-basic`, `prio-klammer`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `bruch-erweitern` — Erweitern/Kürzen: Zähler und Nenner mit/durch dieselbe Zahl (Wert bleibt)
  2. `ggt-kuerzen` — Vollständiges Kürzen per ggT von Zähler und Nenner ⇐ `bruch-erweitern` (SG 3)
  3. `kgv-hauptnenner` — Hauptnenner = kgV der Einzelnenner (Primfaktorzerlegung) ⇐ `bruch-erweitern` (SG 0)
  4. `bruch-add` — Addition/Subtraktion: erst Hauptnenner, dann Zähler rechnen ⇐ `kgv-hauptnenner` (SG 0)
  5. `bruch-mult` — Multiplikation: Zähler $\cdot$ Zähler, Nenner $\cdot$ Nenner
  6. `bruch-div-kehr` — Division durch Bruch = Multiplikation mit Kehrwert ⇐ `bruch-mult` (SG 1)
  7. `doppelbruch` — Doppelbruch auflösen über Division-Kehrwert-Regel ⇐ `bruch-div-kehr` (SG 2)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `kgv-hauptnenner`, `bruch-add` · **6/5+** — Hauptnenner bei ungleichnamigen Brüchen finden (kgV)
  - ✅ [1] _hoch_ · Konzepte: `bruch-div-kehr` · **5/5+** — Division durch Bruch als Multiplikation mit Kehrwert
  - ✅ [2] _mittel_ · Konzepte: `doppelbruch` · **5/5+** — Doppelbrüche auflösen
  - ✅ [3] _mittel_ · Konzepte: `ggt-kuerzen` · **5/5+** — Bruch vollständig kürzen per ggT
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `kgv-hauptnenner` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `kgv-hauptnenner` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `kgv-hauptnenner`, `bruch-add` | 2 | 2 | ✅ | kgV bestimmen + Brüche addieren |
|  4 | 0 | error-analysis     | multiple-choice  | `bruch-add` | 1 | 1 | ✅ | Distraktor: Zähler und Nenner einzeln addiert |
|  5 | 0 | transfer           | sorting          | `kgv-hauptnenner`, `bruch-add` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | true-false       | `bruch-div-kehr` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `bruch-div-kehr` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `bruch-div-kehr` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `bruch-div-kehr` | 1 | 1 | ✅ | Distraktor: statt Kehrwert direkt dividiert |
| 10 | 1 | transfer           | matching         | `bruch-div-kehr`, `bruch-mult` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | true-false       | `doppelbruch` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `doppelbruch` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `doppelbruch` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `doppelbruch` | 1 | 1 | ✅ | Distraktor: Zähler und Nenner falsch gruppiert |
| 15 | 2 | transfer           | number-input     | `doppelbruch`, `ggt-kuerzen` | 1 | 1 | ✅ | Doppelbruch auflösen + Endkürzen |
| 16 | 3 | recognize          | true-false       | `ggt-kuerzen` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `ggt-kuerzen` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `ggt-kuerzen` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `ggt-kuerzen` | 1 | 1 | ✅ | Distraktor: nicht vollständig gekürzt |
| 20 | 3 | transfer           | sorting          | `ggt-kuerzen` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-0-2': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-1-2` · Wurzeln und gebrochene Exponenten

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Potenzen, Wurzeln & Logarithmen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-1-1` → `pot-potenz`, `pot-mult`, `pot-negativ`
  - `alg-0-2` → `bruch-erweitern`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `wurzel-bruchpot` — $\sqrt[n]{x} = x^{1/n}$ — Wurzel als Bruchpotenz (SG 0)
  2. `wurzel-def-bereich` — Definitionsbereich: $\sqrt{x}$ nur für $x \geq 0$ in $\mathbb R$ ⇐ `wurzel-bruchpot` (SG 0)
  3. `wurzel-produkt` — $\sqrt{ab} = \sqrt a \cdot \sqrt b$ (für $a,b \geq 0$) ⇐ `wurzel-bruchpot` (SG 1)
  4. `wurzel-quotient` — $\sqrt{a/b} = \sqrt a/\sqrt b$ ⇐ `wurzel-produkt` (SG 1)
  5. `wurzel-summe-nein` — $\sqrt{a+b} \neq \sqrt a + \sqrt b$ — nicht linear ⇐ `wurzel-produkt` (SG 1)
  6. `wurzel-vereinfachen` — Quadratzahl-Faktor herausziehen: $\sqrt{12}=2\sqrt 3$ ⇐ `wurzel-produkt` (SG 1)
  7. `nenner-rational` — Nenner rational machen durch Erweitern mit $\sqrt{\cdots}$ ⇐ `wurzel-produkt` (SG 2)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `wurzel-bruchpot`, `wurzel-def-bereich` · **5/5+** — Wurzel als Bruchpotenz: $\sqrt[n]{x} = x^{1/n}$, dadurch gelten alle Potenzgesetze
  - ✅ [1] _hoch_ · Konzepte: `wurzel-produkt`, `wurzel-quotient`, `wurzel-summe-nein`, `wurzel-vereinfachen` · **6/5+** — Wurzel des Produkts: $\sqrt{ab} = \sqrt a \cdot \sqrt b$ — aber $\sqrt{a+b} \neq \sqrt a + \sqrt b$
  - ✅ [2] _mittel_ · Konzepte: `nenner-rational` · **5/5+** — Nenner rational machen: Erweitern mit passender Wurzel löst Wurzeln aus dem Nenner
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `wurzel-bruchpot` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `wurzel-bruchpot` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `wurzel-bruchpot` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `wurzel-def-bereich` | 1 | 1 | ✅ | $\sqrt{-4}$ in $\mathbb R$? |
|  5 | 0 | transfer           | matching         | `wurzel-bruchpot` | 1 | 1 | ✅ | Wurzel ↔ Potenzschreibweise |
|  6 | 1 | recognize          | true-false       | `wurzel-summe-nein` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `wurzel-produkt` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `wurzel-vereinfachen` | 2 | 2 | ✅ | $\sqrt{50}$, $\sqrt{72}$ vereinfachen |
|  9 | 1 | error-analysis     | multiple-choice  | `wurzel-summe-nein` | 1 | 1 | ✅ | Distraktor: Wurzel auf Summe verteilt |
| 10 | 1 | transfer           | sorting          | `wurzel-produkt`, `wurzel-vereinfachen` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | true-false       | `nenner-rational` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `nenner-rational` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `nenner-rational` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `nenner-rational` | 1 | 1 | ✅ |  |
| 15 | 2 | transfer           | number-input     | `nenner-rational`, `wurzel-vereinfachen` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-1-2': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-1-2-a`, `ex-alg-1-2-b`, `ex-alg-1-2-d`, `ex-alg-1-2-manual-1`, `ex-alg-1-2-manual-2`, `ex-alg-1-2-manual-3`, `ex-alg-1-2-manual-4`, `ex-alg-1-2-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `int-3-4` · Bogenlänge & Durchschnittswert

- **Topic:** `integralrechnung` (Integralrechnung) · **Unit:** Anwendungen
- **Aufgaben aktuell:** 28 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×6, number-input ×11, true-false ×5, matching ×4, sorting ×2
- **Typen einsetzen (Rotation):** sorting, matching, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Bogenlänge: $L = \int_a^b \sqrt{1 + [f'(x)]^2} dx$ (Pythagoras am Differentialdreieck)
  - ✅ [1] (hoch) **5/5+** Aufgaben — Durchschnittswert: $\bar{f} = \frac{1}{b-a} \int_a^b f(x) dx$
  - ✅ [2] (mittel) **5/5+** Aufgaben — Parametrisierte Kurve $(x(t), y(t))$: $L = \int_{t_1}^{t_2} \sqrt{x'^2 + y'^2} dt$
  - ✅ [3] (mittel) **5/5+** Aufgaben — Mittelwertsatz der Integralrechnung: $\exists \xi \in [a,b]$ mit $f(\xi) = \bar{f}$
  - ✅ [4] (mittel) **5/5+** Aufgaben — Anwendung Maschinenbau: Zahnrad-Evolventen, Rohrleitungen, Seilverläufe
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `integral-area`, `function-graph`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `integralrechnung`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grundintegrale: $x^n, e^x, \sin x, \cos x, 1/x$. · Substitutionsregel: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$. · Partielle Integration: $\int u\,v'\,dx = uv - \int u'\,v\,dx$. · …
  - _Typische Fehler (gute Distraktoren):_ Integrationskonstante $+C$ bei unbestimmten Integralen vergessen. · Bei Substitution das $du$ nicht konsequent mitgeführt. · Bei partieller Integration $u$ und $v'$ falsch herum gewählt (Merkregel LIATE: Logarithmus, Inverse Trig, Algebraisch, Trigonometrisch, Exponential — links als $u$). · …
  - _Klausur-Fokus:_ Partielle Integration mit $\ln$ oder $e^x$. · Substitution mit trigonometrischen Funktionen. · Fläche zwischen zwei Kurven (Schnittpunkte finden!).

#### `mech-1-4` · Reibung

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Statik
- **Aufgaben aktuell:** 28 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×9, true-false ×6, matching ×3, sorting ×3
- **Typen einsetzen (Rotation):** matching, sorting, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Coulombsches Reibgesetz: $F_R = \mu F_N$
  - ✅ [1] (hoch) **5/5+** Aufgaben — Haftreibwert $\mu_0$ > Gleitreibwert $\mu$ (Losreißen braucht mehr Kraft)
  - ✅ [2] (hoch) **5/5+** Aufgaben — Auf geneigter Ebene: $F_N = mg\cos\alpha$, $F_H = mg\sin\alpha$
  - ✅ [3] (hoch) **5/5+** Aufgaben — Selbsthemmung: Körper gleitet nicht, solange $\tan\alpha \leq \mu_0$
  - ✅ [4] (mittel) **5/5+** Aufgaben — Reibwinkel $\rho = \arctan\mu$: Neigung, bei der Körper gerade zu gleiten beginnt
- **4-Block-Erklärung fehlt bei:** `ex-mech-1-4-goal-sg0-4`
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `mech-2-5` · Dynamik starrer Körper

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Dynamik
- **Aufgaben aktuell:** 28 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×5, number-input ×13, true-false ×5, matching ×3, sorting ×2
- **Typen einsetzen (Rotation):** sorting, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Drallsatz: $M = J \cdot \alpha$ (Rotationsanalog zu $F = ma$)
  - ✅ [1] (hoch) **5/5+** Aufgaben — Standardträgheitsmomente: Vollzylinder $\tfrac{1}{2}mR^2$, Stab $\tfrac{1}{12}mL^2$
  - ✅ [2] (hoch) **5/5+** Aufgaben — Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)
  - ✅ [3] (hoch) **5/5+** Aufgaben — Rotationsenergie: $E_{\text{rot}} = \tfrac{1}{2} J \omega^2$
  - ✅ [4] (hoch) **5/5+** Aufgaben — Drehimpuls: $L = J \omega$, Erhaltung bei $M_{\text{ext}} = 0$
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `fest-1-4` · Knicken

- **Topic:** `festigkeitslehre` (Festigkeitslehre) · **Unit:** Spannung und Dehnung
- **Aufgaben aktuell:** 28 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×10, true-false ×6, matching ×3, sorting ×2
- **Typen einsetzen (Rotation):** sorting, matching, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Euler-Knicklast: $F_{ki} = \pi^2 E I/(\beta L)^2$
  - ✅ [1] (hoch) **5/5+** Aufgaben — Einspannbeiwerte: $\beta = 1$ gelenkig/gelenkig, $\beta = 2$ eingespannt/frei, $\beta = 0{,}5$ beidseitig eingespannt
  - ✅ [2] (hoch) **5/5+** Aufgaben — Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)
  - ✅ [3] (mittel) **5/5+** Aufgaben — Schlankheitsgrad $\lambda = \beta L/i$ mit Trägheitsradius $i = \sqrt{I/A}$
  - ✅ [4] (mittel) **5/5+** Aufgaben — Euler nur für elastisches Knicken ($\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `stress-strain`, `mohr-circle`, `interactive-beam`, `beam-reactions`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `festigkeitslehre`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Normalspannung $\sigma=F/A$ in MPa. · Hooke: $\sigma=E\varepsilon$. · Biegespannung $\sigma_b = M_b/W_b$ mit Widerstandsmoment $W_b$. · …
  - _Typische Fehler (gute Distraktoren):_ Einheiten $\text{N/mm}^2$ vs. $\text{MPa}$ (identisch) sorgen für Panikmomente. · Bei Biegung ein statt Widerstandsmoment Flächenträgheitsmoment benutzt. · Sicherheitszahl vergessen: zulässige Spannung ist immer $\sigma_{\text{zul}}=R_e/S$.
  - _Klausur-Fokus:_ Maximale Biegespannung im Balken. · Kombinierte Belastung Zug + Biegung (Superposition). · Torsion bei Welle: Nenndurchmesser berechnen.

#### `trig-2-1` · Der Einheitskreis

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Einheitskreis und Winkelfunktionen
- **Aufgaben aktuell:** 30 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×9, number-input ×6, true-false ×5, matching ×5, sorting ×5
- **Typen einsetzen (Rotation):** true-false, matching, sorting
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$
  - ✅ [1] (hoch) **5/5+** Aufgaben — Punkt auf Kreis $P = (\cos\alpha, \sin\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn
  - ✅ [2] (hoch) **5/5+** Aufgaben — Quadrantenpunkte: $0° \to (1,0)$, $90° \to (0,1)$, $180° \to (-1,0)$, $270° \to (0,-1)$
  - ✅ [3] (niedrig) **5/5+** Aufgaben — Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln
- **4-Block-Erklärung fehlt bei:** `ex-trig-2-1-manual-1`, `ex-trig-2-1-manual-2`, `ex-trig-2-1-manual-3`, `ex-trig-2-1-manual-4`, `ex-trig-2-1-manual-5`, `ex-trig-2-1-manual-6`, `ex-trig-2-1-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `alg-0-4` · Termumformung & Gleichungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Rechnen & Brüche (Vorkurs-Einstieg)
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-1` → `prio-basic`, `minus-vorklammer`
  - `alg-0-2` → `bruch-erweitern`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `gleichartige-terme` — Gleichartige Terme: gleiche Variable mit gleichem Exponenten (SG 0)
  2. `koeff-addieren` — Nur die Koeffizienten gleichartiger Terme addieren ⇐ `gleichartige-terme` (SG 0)
  3. `distributiv` — Distributivgesetz: $a(b+c) = ab + ac$ (SG 1)
  4. `ausklammern` — Ausklammern als Umkehrung des Distributivgesetzes ⇐ `distributiv` (SG 1)
  5. `binom-1` — 1. binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$ ⇐ `distributiv` (SG 2)
  6. `binom-2` — 2. binomische Formel: $(a-b)^2 = a^2 - 2ab + b^2$ ⇐ `distributiv` (SG 2)
  7. `binom-3` — 3. binomische Formel: $(a+b)(a-b) = a^2 - b^2$ ⇐ `distributiv` (SG 2)
  8. `aequivalenz` — Äquivalenzumformung: auf beiden Seiten dasselbe tun (SG 3)
  9. `nicht-durch-null` — Division durch Null verboten (verliert Lösungen) ⇐ `aequivalenz` (SG 3)
  10. `formel-umstellen` — Formel nach Variable umstellen: Operationen umkehren ⇐ `aequivalenz` (SG 3)
  11. `quadrieren-probe` — Beim Quadrieren Probe nötig — Scheinlösungen möglich ⇐ `aequivalenz` (SG 4)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `gleichartige-terme`, `koeff-addieren` · **5/5+** — Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren
  - ✅ [1] _hoch_ · Konzepte: `distributiv`, `ausklammern` · **5/5+** — Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)
  - ✅ [2] _hoch_ · Konzepte: `binom-1`, `binom-2`, `binom-3` · **5/5+** — Binomische Formeln: $(a\pm b)^2 = a^2 \pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$
  - ✅ [3] _hoch_ · Konzepte: `aequivalenz`, `nicht-durch-null`, `formel-umstellen` · **5/5+** — Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen
  - ✅ [4] _mittel_ · Konzepte: `quadrieren-probe` · **5/5+** — Beim Quadrieren Probe nötig (Scheinlösungen möglich)
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `gleichartige-terme` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `gleichartige-terme`, `koeff-addieren` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `koeff-addieren` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `gleichartige-terme` | 1 | 1 | ✅ | Distraktor: $x+x^2$ als gleichartig behandelt |
|  5 | 0 | transfer           | matching         | `gleichartige-terme` | 1 | 1 | ✅ | Terme ↔ gleichartige Gruppe |
|  6 | 1 | recognize          | true-false       | `distributiv` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `distributiv` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `distributiv` | 1 | 1 | ✅ | Ausmultiplizieren |
|  9 | 1 | error-analysis     | multiple-choice  | `distributiv` | 1 | 1 | ✅ | Distraktor: Faktor nur auf ersten Summanden |
| 10 | 1 | transfer           | number-input     | `ausklammern` | 1 | 1 | ✅ | Ausklammern des größten gemeinsamen Faktors |
| 11 | 2 | recognize          | matching         | `binom-1`, `binom-2`, `binom-3` | 1 | 1 | ✅ | Formel ↔ Typ |
| 12 | 2 | apply-guided       | multiple-choice  | `binom-1` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `binom-2` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `binom-1`, `binom-2` | 1 | 1 | ✅ | Distraktor: mittleren Term vergessen |
| 15 | 2 | transfer           | number-input     | `binom-3` | 1 | 1 | ✅ | Anwendung 3. binomische Formel in Zahlenrechnung |
| 16 | 3 | recognize          | true-false       | `aequivalenz`, `nicht-durch-null` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `aequivalenz` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `formel-umstellen` | 1 | 1 | ✅ | Formel nach Variable umstellen |
| 19 | 3 | error-analysis     | multiple-choice  | `nicht-durch-null` | 1 | 1 | ✅ | Distraktor: durch 0-Term geteilt |
| 20 | 3 | transfer           | sorting          | `aequivalenz`, `formel-umstellen` | 1 | 1 | ✅ |  |
| 21 | 4 | recognize          | true-false       | `quadrieren-probe` | 1 | 1 | ✅ |  |
| 22 | 4 | apply-guided       | multiple-choice  | `quadrieren-probe` | 1 | 1 | ✅ |  |
| 23 | 4 | apply-independent  | number-input     | `quadrieren-probe` | 1 | 1 | ✅ |  |
| 24 | 4 | error-analysis     | multiple-choice  | `quadrieren-probe` | 1 | 1 | ✅ | Distraktor: Scheinlösung akzeptiert |
| 25 | 4 | transfer           | sorting          | `quadrieren-probe`, `aequivalenz` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-0-4': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-0-4-goal-sg1-3`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-0-3` · Prozent & Dreisatz

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Rechnen & Brüche (Vorkurs-Einstieg)
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-2` → `bruch-erweitern`, `bruch-mult`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `prozent-def` — $p\%$ bedeutet $\dfrac{p}{100}$ (SG 0)
  2. `prozent-grund` — Grundformel $W = G \cdot \tfrac{p}{100}$ und Umstellungen nach $G$ / $p$ ⇐ `prozent-def` (SG 0)
  3. `wachstumsfaktor` — Wachstumsfaktor: $\pm p\%$ als $\times (1 \pm p/100)$ ⇐ `prozent-def` (SG 1)
  4. `prozent-kette` — Zwei Änderungen in Folge multiplizieren sich (nicht addieren) ⇐ `wachstumsfaktor` (SG 2)
  5. `direkt-prop` — Direkte Proportionalität: $x_1/y_1 = x_2/y_2$ (SG 3)
  6. `indirekt-prop` — Indirekte Proportionalität: $x_1 y_1 = x_2 y_2$ ⇐ `direkt-prop` (SG 3)
  7. `prozentpunkt` — Prozentpunkt vs. Prozent: Differenz vs. relativer Anstieg ⇐ `wachstumsfaktor` (SG 4)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `prozent-def`, `prozent-grund` · **6/5+** — Grundformel: $W = G \cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$
  - ✅ [1] _hoch_ · Konzepte: `wachstumsfaktor` · **5/5+** — Wachstumsfaktor: $+p\% \to \times(1 + p/100)$, $-p\% \to \times(1 - p/100)$
  - ✅ [2] _hoch_ · Konzepte: `prozent-kette` · **5/5+** — Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\%$ dann $-10\% \neq 0$)
  - ✅ [3] _hoch_ · Konzepte: `direkt-prop`, `indirekt-prop` · **5/5+** — Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$
  - ✅ [4] _mittel_ · Konzepte: `prozentpunkt` · **5/5+** — Prozentpunkt vs. Prozent: $15\%$ auf $10\%$ erhöht ist $11{,}5\%$, nicht $25\%$
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `prozent-def` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `prozent-grund` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `prozent-grund` | 2 | 2 | ✅ | Einmal $W$, einmal $G$ oder $p$ gesucht |
|  4 | 0 | error-analysis     | multiple-choice  | `prozent-grund` | 1 | 1 | ✅ | Distraktor: durch $p$ statt $p/100$ geteilt |
|  5 | 0 | transfer           | matching         | `prozent-grund` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | true-false       | `wachstumsfaktor` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `wachstumsfaktor` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `wachstumsfaktor` | 1 | 1 | ✅ | Rabatt-Rechnung |
|  9 | 1 | error-analysis     | multiple-choice  | `wachstumsfaktor` | 1 | 1 | ✅ | Distraktor: Differenz statt Faktor gerechnet |
| 10 | 1 | transfer           | number-input     | `wachstumsfaktor` | 1 | 1 | ✅ | Rückrechnen vom Endpreis zum Grundpreis |
| 11 | 2 | recognize          | true-false       | `prozent-kette` | 1 | 1 | ✅ | +10% dann −10% ergibt 100%? — falsch |
| 12 | 2 | apply-guided       | multiple-choice  | `prozent-kette` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `prozent-kette` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `prozent-kette` | 1 | 1 | ✅ | Distraktor: Prozente addiert |
| 15 | 2 | transfer           | sorting          | `prozent-kette`, `wachstumsfaktor` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `direkt-prop`, `indirekt-prop` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `direkt-prop` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `indirekt-prop` | 1 | 1 | ✅ | Pumpen-Typ-Dreisatz |
| 19 | 3 | error-analysis     | multiple-choice  | `direkt-prop`, `indirekt-prop` | 1 | 1 | ✅ | Distraktor: direkt statt indirekt gerechnet |
| 20 | 3 | transfer           | matching         | `direkt-prop`, `indirekt-prop` | 1 | 1 | ✅ | Situation ↔ Typ |
| 21 | 4 | recognize          | true-false       | `prozentpunkt` | 1 | 1 | ✅ |  |
| 22 | 4 | apply-guided       | multiple-choice  | `prozentpunkt` | 1 | 1 | ✅ |  |
| 23 | 4 | apply-independent  | number-input     | `prozentpunkt` | 1 | 1 | ✅ |  |
| 24 | 4 | error-analysis     | multiple-choice  | `prozentpunkt` | 1 | 1 | ✅ | Distraktor: Prozentpunkte addiert statt multipliziert |
| 25 | 4 | transfer           | number-input     | `prozentpunkt`, `wachstumsfaktor` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-0-3': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `trig-3-5` · Sinussatz & Cosinussatz

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Anwendungen und Identitäten
- **Aufgaben aktuell:** 33 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×11, number-input ×9, true-false ×7, matching ×4, sorting ×2
- **Typen einsetzen (Rotation):** sorting, matching, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Sinussatz: $a/\sin\alpha = b/\sin\beta = c/\sin\gamma = 2R$ (Umkreisradius)
  - ✅ [1] (hoch) **5/5+** Aufgaben — Cosinussatz: $a^2 = b^2 + c^2 - 2bc\cos\alpha$ (verallgemeinerter Pythagoras)
  - ✅ [2] (hoch) **5/5+** Aufgaben — Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz
  - ✅ [3] (mittel) **5/5+** Aufgaben — Pythagoras als Spezialfall: $\alpha = 90° \Rightarrow \cos\alpha = 0 \Rightarrow a^2 = b^2 + c^2$
  - ✅ [4] (hoch) **5/5+** Aufgaben — Seite und Gegenwinkel gehören zusammen ($a \leftrightarrow \alpha$ usw.)
  - ✅ [5] (mittel) **5/5+** Aufgaben — SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\sin\beta$ spitz, Höhenvergleich erforderlich
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `unit-circle`, `trig-explorer`, `sin-wave-explorer`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `alg-1-1` · Potenzgesetze

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Potenzen, Wurzeln & Logarithmen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-4` → `distributiv`, `aequivalenz`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `potenz-def` — $x^n$ = $n$-fache Multiplikation von $x$
  2. `pot-mult` — Gleiche Basis Multiplikation: $x^a \cdot x^b = x^{a+b}$ ⇐ `potenz-def` (SG 0)
  3. `pot-div` — Gleiche Basis Division: $x^a / x^b = x^{a-b}$ ⇐ `pot-mult` (SG 0)
  4. `pot-potenz` — Potenz einer Potenz: $(x^a)^b = x^{a\cdot b}$ ⇐ `potenz-def` (SG 1)
  5. `pot-produkt` — Produkt in Klammer: $(xy)^n = x^n y^n$ ⇐ `potenz-def` (SG 3)
  6. `pot-quotient` — Quotient in Klammer: $(x/y)^n = x^n/y^n$ ⇐ `pot-produkt` (SG 3)
  7. `pot-null` — $x^0 = 1$ für $x \neq 0$ ⇐ `pot-div` (SG 2)
  8. `pot-negativ` — $x^{-n} = 1/x^n$ ⇐ `pot-div` (SG 2)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `pot-mult`, `pot-div` · **5/5+** — Gleiche Basis: $x^a \cdot x^b = x^{a+b}$ und $x^a/x^b = x^{a-b}$
  - ✅ [1] _hoch_ · Konzepte: `pot-potenz` · **5/5+** — Potenz einer Potenz: $(x^a)^b = x^{a \cdot b}$ — niemals mit Multiplikation verwechseln
  - ✅ [2] _hoch_ · Konzepte: `pot-null`, `pot-negativ` · **5/5+** — Negativer Exponent $x^{-n} = 1/x^n$ und nullter Exponent $x^0 = 1$ (für $x \neq 0$)
  - ✅ [3] _mittel_ · Konzepte: `pot-produkt`, `pot-quotient` · **5/5+** — Produkt/Quotient in Klammer: $(xy)^n = x^n y^n$, $(x/y)^n = x^n/y^n$
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `pot-mult` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `pot-mult`, `pot-div` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `pot-mult` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `pot-mult` | 1 | 1 | ✅ | Distraktor: Exponenten multipliziert statt addiert |
|  5 | 0 | transfer           | number-input     | `pot-mult`, `pot-div` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | true-false       | `pot-potenz` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `pot-potenz` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `pot-potenz` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `pot-potenz`, `pot-mult` | 1 | 1 | ✅ | Distraktor: mit Multiplikation-Regel verwechselt |
| 10 | 1 | transfer           | matching         | `pot-potenz`, `pot-mult` | 1 | 1 | ✅ | Term ↔ Regel |
| 11 | 2 | recognize          | true-false       | `pot-null`, `pot-negativ` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `pot-negativ` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `pot-negativ` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `pot-null` | 1 | 1 | ✅ | Distraktor: $x^0 = 0$ |
| 15 | 2 | transfer           | number-input     | `pot-negativ`, `pot-mult` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `pot-produkt` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `pot-produkt` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `pot-produkt` | 1 | 1 | ✅ | $(2x)^3$ auflösen |
| 19 | 3 | error-analysis     | multiple-choice  | `pot-produkt` | 1 | 1 | ✅ | Distraktor: Exponent nur auf Variable |
| 20 | 3 | transfer           | number-input     | `pot-quotient`, `pot-produkt` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-1-1': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-1-1-b`, `ex-alg-1-1-d`, `ex-alg-1-1-e`, `ex-alg-1-1-manual-1`, `ex-alg-1-1-manual-2`, `ex-alg-1-1-manual-3`, `ex-alg-1-1-manual-4`, `ex-alg-1-1-manual-5` … (+2 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-2-1` · Lineare Gleichungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Gleichungen & Ungleichungen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-4` → `aequivalenz`, `distributiv`, `formel-umstellen`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `lin-form` — Lineare Gleichung $ax + b = 0$ als Standardform (SG 0)
  2. `iso-variable` — Variable auf eine Seite isolieren (Äquivalenz) ⇐ `lin-form` (SG 0)
  3. `koeff-dividieren` — Durch Koeffizient von $x$ dividieren ($\neq 0$) ⇐ `iso-variable` (SG 1)
  4. `text-uebersetzung` — Textaufgabe → Variable definieren → Gleichung aufstellen ⇐ `iso-variable` (SG 2)
  5. `probe-einsetzen` — Probe: Lösung in Original-Gleichung einsetzen ⇐ `koeff-dividieren` (SG 3)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `lin-form`, `iso-variable` · **5/5+** — Äquivalenzumformungen: gleiche Operation auf beiden Seiten — Gleichung bleibt erhalten
  - ✅ [1] _hoch_ · Konzepte: `iso-variable`, `koeff-dividieren` · **6/5+** — Standardvorgehen: Klammern auflösen $\to$ Variable auf eine Seite $\to$ durch Koeffizient teilen
  - ✅ [2] _mittel_ · Konzepte: `text-uebersetzung` · **6/5+** — Textaufgaben: Variable definieren, Gleichung aufstellen, lösen, zurück in den Kontext interpretieren
  - ✅ [3] _hoch_ · Konzepte: `probe-einsetzen` · **5/5+** — Probe durch Einsetzen in Original-Gleichung schützt vor Vorzeichen- und Umformungsfehlern
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `iso-variable` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `iso-variable` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `iso-variable` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `iso-variable` | 1 | 1 | ✅ | Distraktor: Operation nur auf einer Seite |
|  5 | 0 | transfer           | sorting          | `iso-variable` | 1 | 1 | ✅ | Umformungsschritte ordnen |
|  6 | 1 | recognize          | true-false       | `koeff-dividieren` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `iso-variable`, `koeff-dividieren` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `iso-variable`, `koeff-dividieren` | 2 | 2 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `koeff-dividieren` | 1 | 1 | ✅ | Distraktor: Vorzeichen beim Umstellen übersehen |
| 10 | 1 | transfer           | sorting          | `iso-variable`, `koeff-dividieren` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | matching         | `text-uebersetzung` | 1 | 1 | ✅ | Textbaustein ↔ Variable |
| 12 | 2 | apply-guided       | multiple-choice  | `text-uebersetzung` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `text-uebersetzung` | 2 | 2 | ✅ | Altersaufgabe + Flächenaufgabe |
| 14 | 2 | error-analysis     | multiple-choice  | `text-uebersetzung` | 1 | 1 | ✅ | Distraktor: falsche Variable definiert |
| 15 | 2 | transfer           | number-input     | `text-uebersetzung` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `probe-einsetzen` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `probe-einsetzen` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | true-false       | `probe-einsetzen` | 1 | 1 | ✅ | Lösung gegeben — prüfen ob richtig |
| 19 | 3 | error-analysis     | multiple-choice  | `probe-einsetzen` | 1 | 1 | ✅ | Distraktor: Probe auf umgeformter Gleichung statt Original |
| 20 | 3 | transfer           | sorting          | `probe-einsetzen`, `iso-variable` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-2-1': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-2-1-manual-1`, `ex-alg-2-1-manual-2`, `ex-alg-2-1-manual-3`, `ex-alg-2-1-manual-4`, `ex-alg-2-1-manual-5`, `ex-alg-2-1-manual-6`, `ex-alg-2-1-manual-7`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-2-2` · Quadratische Gleichungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Gleichungen & Ungleichungen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-0-4` → `binom-1`, `binom-2`, `binom-3`, `aequivalenz`
  - `alg-1-2` → `wurzel-bruchpot`, `wurzel-def-bereich`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `quad-form` — Allgemeine Form $ax^2 + bx + c = 0$ (mit $a \neq 0$) (SG 0)
  2. `abc-formel` — Mitternachtsformel $x = (-b \pm \sqrt{b^2 - 4ac})/(2a)$ ⇐ `quad-form` (SG 0)
  3. `pq-formel` — pq-Formel für Normalform $x^2 + px + q = 0$ ⇐ `abc-formel` (SG 0)
  4. `diskriminante` — Diskriminante $D=b^2-4ac$ — Fallunterscheidung $D>0,=0,<0$ ⇐ `abc-formel` (SG 1)
  5. `vieta` — Vieta: $x_1+x_2=-p$, $x_1 x_2 = q$ (Normalform) ⇐ `pq-formel` (SG 2)
  6. `faktor-form` — Faktorisierte Form $(x-x_1)(x-x_2)=0$ zeigt Nullstellen direkt ⇐ `abc-formel` (SG 3)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `quad-form`, `abc-formel`, `pq-formel` · **6/5+** — Mitternachtsformel $x = (-b \pm \sqrt{b^2 - 4ac})/(2a)$ für $ax^2 + bx + c = 0$
  - ✅ [1] _hoch_ · Konzepte: `diskriminante` · **5/5+** — Diskriminante $D = b^2 - 4ac$: $D>0$ zwei reelle Lösungen, $D=0$ eine doppelte, $D<0$ keine reelle
  - ✅ [2] _mittel_ · Konzepte: `vieta` · **5/5+** — Satz von Vieta: $x_1 + x_2 = -b/a$, $x_1 \cdot x_2 = c/a$ — zum schnellen Raten/Prüfen
  - ✅ [3] _hoch_ · Konzepte: `faktor-form` · **5/5+** — Faktorisierte Form $(x - x_1)(x - x_2) = 0$ macht Nullstellen direkt sichtbar
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `abc-formel` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `pq-formel` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `abc-formel` | 2 | 2 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `abc-formel` | 1 | 1 | ✅ | Distraktor: Vorzeichen unter der Wurzel falsch |
|  5 | 0 | transfer           | sorting          | `abc-formel`, `pq-formel` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | matching         | `diskriminante` | 1 | 1 | ✅ | $D$-Fall ↔ Lösungsanzahl |
|  7 | 1 | apply-guided       | multiple-choice  | `diskriminante` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `diskriminante` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `diskriminante` | 1 | 1 | ✅ | Distraktor: $D<0$ mit $D=0$ verwechselt |
| 10 | 1 | transfer           | true-false       | `diskriminante`, `abc-formel` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | true-false       | `vieta` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `vieta` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `vieta` | 1 | 1 | ✅ | Lösungen raten + Probe |
| 14 | 2 | error-analysis     | multiple-choice  | `vieta` | 1 | 1 | ✅ |  |
| 15 | 2 | transfer           | matching         | `vieta` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `faktor-form` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `faktor-form` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `faktor-form`, `abc-formel` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `faktor-form` | 1 | 1 | ✅ |  |
| 20 | 3 | transfer           | matching         | `faktor-form`, `vieta` | 1 | 1 | ✅ | Faktor ↔ Nullstelle |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-2-2': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-2-2-a`, `ex-alg-2-2-b`, `ex-alg-2-2-d`, `ex-alg-2-2-e`, `ex-alg-2-2-manual-1`, `ex-alg-2-2-manual-2`, `ex-alg-2-2-manual-3`, `ex-alg-2-2-manual-4` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere möglich: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `trig-2-2` · sin und cos als Koordinaten

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Einheitskreis und Winkelfunktionen
- **Aufgaben aktuell:** 35 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×10, number-input ×7, true-false ×6, matching ×6, sorting ×6
- **Typen einsetzen (Rotation):** true-false, matching, sorting
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — $\cos\alpha$ = $x$-Koordinate (horizontal), $\sin\alpha$ = $y$-Koordinate (vertikal)
  - ✅ [1] (hoch) **5/5+** Aufgaben — Definition gilt für **alle** reellen Winkel, nicht nur $0°$–$90°$
  - ✅ [2] (hoch) **5/5+** Aufgaben — Aus Koordinaten $(x,y)$ auf Kreis den Winkel über Vorzeichen + Referenzwinkel ermitteln
  - ✅ [3] (niedrig) **5/5+** Aufgaben — Eselsbrücke: **c**osinus → **x**-Achse, **s**inus → $y$-Achse (vertikal)
  - ✅ [4] (mittel) **5/5+** Aufgaben — Werte liegen stets im Intervall $[-1, +1]$, weil $r = 1$
- **4-Block-Erklärung fehlt bei:** `ex-trig-2-2-manual-1`, `ex-trig-2-2-manual-2`, `ex-trig-2-2-manual-3`, `ex-trig-2-2-manual-4`, `ex-trig-2-2-manual-5`, `ex-trig-2-2-manual-6`, `ex-trig-2-2-manual-7`, `ex-trig-2-2-mastery`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-4-1` · Prüfung: Identitäten & Gleichungen

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 37 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×13, number-input ×7, true-false ×6, matching ×6, sorting ×5
- **Typen einsetzen (Rotation):** sorting, true-false, matching
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Pythagoras $\sin^2+\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen
  - ✅ [1] (hoch) **5/5+** Aufgaben — Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben
  - ✅ [2] (hoch) **5/5+** Aufgaben — Substitution $u = \sin x$ oder $u = \cos x$ bei quadratischen Gleichungen
  - ✅ [3] (mittel) **5/5+** Aufgaben — Faktorisieren statt durch $\cos x$ teilen (Nullstellen nicht verlieren)
  - ✅ [4] (mittel) **5/5+** Aufgaben — Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)
- **4-Block-Erklärung fehlt bei:** `ex-trig-4-1-manual-1`, `ex-trig-4-1-manual-2`, `ex-trig-4-1-manual-3`, `ex-trig-4-1-manual-4`, `ex-trig-4-1-manual-5`, `ex-trig-4-1-manual-6`, `ex-trig-4-1-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `trig-4-2` · Prüfung: Technische Anwendungen

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 37 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×12, number-input ×7, true-false ×6, matching ×6, sorting ×6
- **Typen einsetzen (Rotation):** true-false, matching, sorting
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\sin$/$\cos$ richtig zuordnen
  - ✅ [1] (hoch) **5/5+** Aufgaben — Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe
  - ✅ [2] (hoch) **5/5+** Aufgaben — Schwingungsgrößen $A, \omega, T, f, \varphi$ aus gegebenem $x(t)$ ablesen und umrechnen
  - ✅ [3] (hoch) **5/5+** Aufgaben — Einheitenkonsistenz: $\omega t$ in Radiant, Phasenwinkel $\varphi$ ebenfalls Radiant
  - ✅ [4] (mittel) **5/5+** Aufgaben — Plausibilitätscheck: Komponenten $|F_x|, |F_y| \leq |F|$, Winkelbereich passt zum Quadranten
- **4-Block-Erklärung fehlt bei:** `ex-trig-4-2-manual-1`, `ex-trig-4-2-manual-2`, `ex-trig-4-2-manual-3`, `ex-trig-4-2-manual-4`, `ex-trig-4-2-manual-5`, `ex-trig-4-2-manual-6`, `ex-trig-4-2-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `mech-1-5` · Schwerpunkt

- **Topic:** `technische-mechanik` (Technische Mechanik) · **Unit:** Statik
- **Aufgaben aktuell:** 39 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×7, number-input ×16, true-false ×7, matching ×5, sorting ×4
- **Typen einsetzen (Rotation):** sorting, matching, multiple-choice
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **6/5+** Aufgaben — Diskrete Massen: $x_S = \sum m_i x_i / \sum m_i$
  - ✅ [1] (hoch) **6/5+** Aufgaben — Zusammengesetzte Flächen: $x_S = \sum A_i x_{S,i} / \sum A_i$
  - ✅ [2] (hoch) **6/5+** Aufgaben — Loch als negative Fläche subtrahieren
  - ✅ [3] (mittel) **6/5+** Aufgaben — Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse
  - ✅ [4] (mittel) **5/5+** Aufgaben — Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\pi)$
- **Visualisierung:** 🟡 fehlt — wenn sie dem Stoff hilft, einen `type: 'visualization'`-Step in `lesson.steps` einbauen. Passende Viz-IDs für dieses Topic: `free-body-diagram`, `force-parallelogram`, `beam-reactions`, `interactive-beam`, `vector-diagram`. Alle 21 verfügbaren Viz siehe `AVAILABLE_VISUALIZATIONS` in `src/content/curriculum.js`.
- **Lehrplan-Kontext für `technische-mechanik`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Freikörperbild vollständig: alle äußeren Kräfte und Lagerreaktionen einzeichnen. · Drei Gleichgewichtsbedingungen in 2D: $\sum F_x=0$, $\sum F_y=0$, $\sum M=0$. · Newtonsche Axiome und $F=ma$ vektoriell anwenden. · …
  - _Typische Fehler (gute Distraktoren):_ Lagerreaktionen im FKB vergessen. · Vorzeichen von Kräften falsch — Richtung im FKB festlegen und konsequent halten. · Hebelarm bei Momenten senkrecht zur Kraft messen, nicht entlang der Wirklinie. · …
  - _Klausur-Fokus:_ Auflagerreaktionen mit Streckenlast + Einzellast. · Schnittgrößenverlauf bei Balken. · Energieerhaltung bei schiefer Ebene / Pendel.

#### `dgl-2-2` · DGL-Systeme

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Fortgeschrittene Methoden
- **Aufgaben aktuell:** 40 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×16, number-input ×9, true-false ×8, matching ×4, sorting ×3
- **Typen einsetzen (Rotation):** sorting, matching, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Matrixform: $\vec y' = A \vec y$ mit Vektor $\vec y$ und Koeffizientenmatrix $A$
  - ✅ [1] (hoch) **5/5+** Aufgaben — Reduktion höherer Ordnung: $y_1 = y, y_2 = y', \ldots, y_n = y^{(n-1)}$
  - ✅ [2] (hoch) **5/5+** Aufgaben — Eigenwertansatz: $\vec y = \vec v e^{\lambda t}$ → $A \vec v = \lambda \vec v$
  - ✅ [3] (hoch) **5/5+** Aufgaben — Allgemeine Lösung: $\vec y = \sum C_i \vec v_i e^{\lambda_i t}$
  - ✅ [4] (hoch) **5/5+** Aufgaben — Stabilität: alle $\text{Re}(\lambda_i) < 0$ → asymptotisch stabil
  - ✅ [5] (mittel) **5/5+** Aufgaben — Komplexe EW: Paare $\alpha \pm i\beta$ → Real-/Imaginärteil nehmen für reelle Lösung
- **4-Block-Erklärung fehlt bei:** `ex-dgl-2-2-manual-1`, `ex-dgl-2-2-manual-2`, `ex-dgl-2-2-manual-3`, `ex-dgl-2-2-manual-4`, `ex-dgl-2-2-manual-5`, `ex-dgl-2-2-manual-6`, `ex-dgl-2-2-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `spring-mass-damper`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `dgl-3-2` · Prüfung: DGL 2. Ordnung & Anwendungen

- **Topic:** `differentialgleichungen` (Differentialgleichungen) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 41 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×15, number-input ×10, true-false ×8, matching ×4, sorting ×4
- **Typen einsetzen (Rotation):** matching, sorting, true-false
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — Störansatz Polynom: $y_p = $ Polynom gleichen Grades
  - ✅ [1] (hoch) **5/5+** Aufgaben — Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)
  - ✅ [2] (hoch) **5/5+** Aufgaben — Störansatz Trig: $y_p = A \cos\omega x + B \sin\omega x$
  - ✅ [3] (hoch) **5/5+** Aufgaben — Resonanzfall: Wenn Störung homogene Lösung ist → $\times x$ (oder $\times x^2$ bei Doppelwurzel)
  - ✅ [4] (hoch) **5/5+** Aufgaben — Allgemeine Lösung: $y = y_h + y_p$
  - ✅ [5] (hoch) **5/5+** Aufgaben — AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y'(x_0)$ → zwei Konstanten
- **4-Block-Erklärung fehlt bei:** `ex-dgl-3-2-a`, `ex-dgl-3-2-b`, `ex-dgl-3-2-c`, `ex-dgl-3-2-d`, `ex-dgl-3-2-e`, `ex-dgl-3-2-f`, `ex-dgl-3-2-g`, `ex-dgl-3-2-h` … (+3 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `spring-mass-damper`, `function-graph` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `differentialgleichungen`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Trennung der Variablen: $dy/dx=f(x)g(y) \Rightarrow \int dy/g(y)=\int f(x)\,dx$. · Lineare DGL 1. Ordnung: Integrierender Faktor $e^{\int a(x)\,dx}$. · Charakteristische Gleichung $\lambda^2+p\lambda+q=0$ bei linearen DGL 2. Ordnung. · …
  - _Typische Fehler (gute Distraktoren):_ Anfangsbedingung vergessen — nur allgemeine Lösung angegeben. · Partikulärlösung fehlt bei inhomogener DGL. · Bei charakteristischer Gleichung den Fall "doppelte Wurzel" mit $x\cdot e^{\lambda x}$ vergessen.
  - _Klausur-Fokus:_ Lineare DGL 1. Ordnung mit AWP. · Gedämpfte Schwingung ($my''+cy'+ky=0$). · Ansatz für partikuläre Lösung (Typ: Polynom, $e^{ax}$, $\sin/\cos$).

#### `trig-4-3` · Prüfung: Einheitskreis & Gleichungssysteme

- **Topic:** `trigonometry` (Trigonometrie) · **Unit:** Prüfungsaufgaben · **[PRÜFUNG]**
- **Aufgaben aktuell:** 42 · **mindestens:** 20 · **fehlen bis Minimum:** 0 (mehr ist besser, kein Cap)
- **Typen vorhanden:** multiple-choice ×13, number-input ×8, true-false ×7, matching ×7, sorting ×7
- **Typen einsetzen (Rotation):** true-false, matching, sorting
- **Sub-Goals dieser Lesson** (mindestens 5 Aufgaben pro Sub-Goal — mehr ist besser, kein Cap):
  - ✅ [0] (hoch) **5/5+** Aufgaben — $\sin x = a$ hat in $[0, 2\pi)$ zwei Lösungen: $\arcsin a$ und $\pi - \arcsin a$
  - ✅ [1] (hoch) **5/5+** Aufgaben — $\cos x = a$ hat in $[0, 2\pi)$ zwei Lösungen: $\arccos a$ und $2\pi - \arccos a$
  - ✅ [2] (hoch) **5/5+** Aufgaben — $\tan x = a$ hat Periode $\pi$: $x_k = \arctan a + k\pi$, $k \in \mathbb{Z}$
  - ✅ [3] (hoch) **5/5+** Aufgaben — Gesamte Lösungsmenge: Hauptwerte + $2\pi k$ (bzw. $\pi k$ bei $\tan$), Intervall berücksichtigen
  - ✅ [4] (hoch) **5/5+** Aufgaben — Beim Dividieren durch $\cos x$: Fall $\cos x = 0$ separat prüfen, sonst Lösungen verloren
  - ✅ [5] (mittel) **5/5+** Aufgaben — Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen
- **4-Block-Erklärung fehlt bei:** `ex-trig-4-3-manual-1`, `ex-trig-4-3-manual-2`, `ex-trig-4-3-manual-3`, `ex-trig-4-3-manual-4`, `ex-trig-4-3-manual-5`, `ex-trig-4-3-manual-6`, `ex-trig-4-3-manual-7`
- **Visualisierung:** ✅ vorhanden. Weitere sinnvoll (aus Topic-Guide): `unit-circle`, `trig-explorer`, `sin-wave-explorer` — bei passenden Lesson-Themen als weiteren `type: 'visualization'`-Step einbauen.
- **Lehrplan-Kontext für `trigonometry`** (aus `src/content/curriculum.js`):
  - _Must-Know:_ Grad ↔ Radiant: $180°=\pi$, $90°=\pi/2$, $60°=\pi/3$, $45°=\pi/4$, $30°=\pi/6$. · sin/cos-Wert der Standardwinkel $0°, 30°, 45°, 60°, 90°$ auswendig. · Quadrantenvorzeichen (CAS-Regel: nur Cos, All, Sin, Tan positiv). · …
  - _Typische Fehler (gute Distraktoren):_ Taschenrechner steht auf DEG statt RAD (oder umgekehrt). · Bei $\sin(x)=c$ nur eine Lösung angegeben, Periodizität vergessen. · Bei trigonometrischen Gleichungen $\cos x$ rausgekürzt — Lösungen wo $\cos x = 0$ ist, gehen verloren. · …
  - _Klausur-Fokus:_ Dreiecksberechnung mit Sinus-/Kosinussatz. · Trigonometrische Gleichungen in $[0,2\pi)$ lösen. · Kräftezerlegung an schiefer Ebene.

#### `alg-2-4` · Ungleichungen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Gleichungen & Ungleichungen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-2-1` → `iso-variable`, `koeff-dividieren`
  - `alg-2-2` → `faktor-form`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `ungl-zeichen-flip` — Multiplikation/Division mit negativer Zahl → $<$ und $>$ tauschen (SG 0)
  2. `betrag-kleiner` — $|x-a|<b \iff a-b < x < a+b$ (SG 1)
  3. `betrag-groesser` — $|x-a|>b \iff x<a-b$ ODER $x>a+b$ ⇐ `betrag-kleiner` (SG 2)
  4. `vz-tabelle` — Vorzeichentabelle für quadratische Ungleichungen (SG 3)
  5. `intervall-notation` — Intervall-Notation $(-\infty, a) \cup (b, \infty)$ ⇐ `vz-tabelle` (SG 4)
  6. `bruch-ungl-pol` — Bruchungleichung: Polstellen separat betrachten ⇐ `vz-tabelle`, `ungl-zeichen-flip` (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `ungl-zeichen-flip` · **5/5+** — Multiplikation/Division mit negativer Zahl: Ungleichheitszeichen umdrehen!
  - ✅ [1] _hoch_ · Konzepte: `betrag-kleiner` · **5/5+** — Betragsungleichung $|x - a| < b$: $a - b < x < a + b$
  - ✅ [2] _hoch_ · Konzepte: `betrag-groesser` · **5/5+** — Betragsungleichung $|x - a| > b$: $x < a - b$ ODER $x > a + b$
  - ✅ [3] _hoch_ · Konzepte: `vz-tabelle` · **5/5+** — Quadratische Ungleichung: Nullstellen finden, Vorzeichentabelle aufstellen, Bereiche ablesen
  - ✅ [4] _mittel_ · Konzepte: `intervall-notation` · **5/5+** — Lösungsmenge im Intervall-Notation: $(-\infty, a) \cup (b, \infty)$ statt $x < a$ oder $x > b$
  - ✅ [5] _mittel_ · Konzepte: `bruch-ungl-pol` · **5/5+** — Bruchungleichungen: Polstellen des Nenners separat betrachten, nicht quer-multiplizieren
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `ungl-zeichen-flip` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `ungl-zeichen-flip` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `ungl-zeichen-flip` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `ungl-zeichen-flip` | 1 | 1 | ✅ | Distraktor: Zeichen nicht getauscht |
|  5 | 0 | transfer           | sorting          | `ungl-zeichen-flip` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | true-false       | `betrag-kleiner` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `betrag-kleiner` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `betrag-kleiner` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `betrag-kleiner` | 1 | 1 | ✅ |  |
| 10 | 1 | transfer           | matching         | `betrag-kleiner` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | true-false       | `betrag-groesser` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `betrag-groesser` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `betrag-groesser` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `betrag-groesser`, `betrag-kleiner` | 1 | 1 | ✅ | Distraktor: ODER als UND behandelt |
| 15 | 2 | transfer           | matching         | `betrag-groesser`, `betrag-kleiner` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `vz-tabelle` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `vz-tabelle` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `vz-tabelle` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `vz-tabelle` | 1 | 1 | ✅ |  |
| 20 | 3 | transfer           | sorting          | `vz-tabelle` | 1 | 1 | ✅ |  |
| 21 | 4 | recognize          | matching         | `intervall-notation` | 1 | 1 | ✅ |  |
| 22 | 4 | apply-guided       | multiple-choice  | `intervall-notation` | 1 | 1 | ✅ |  |
| 23 | 4 | apply-independent  | multiple-choice  | `intervall-notation`, `vz-tabelle` | 1 | 1 | ✅ |  |
| 24 | 4 | error-analysis     | multiple-choice  | `intervall-notation` | 1 | 1 | ✅ | Distraktor: offene vs. geschlossene Grenze verwechselt |
| 25 | 4 | transfer           | matching         | `intervall-notation` | 1 | 1 | ✅ |  |
| 26 | 5 | recognize          | true-false       | `bruch-ungl-pol` | 1 | 1 | ✅ |  |
| 27 | 5 | apply-guided       | multiple-choice  | `bruch-ungl-pol` | 1 | 1 | ✅ |  |
| 28 | 5 | apply-independent  | number-input     | `bruch-ungl-pol` | 1 | 1 | ✅ |  |
| 29 | 5 | error-analysis     | multiple-choice  | `bruch-ungl-pol` | 1 | 1 | ✅ | Distraktor: quer-multipliziert ohne Fallunterscheidung |
| 30 | 5 | transfer           | sorting          | `bruch-ungl-pol` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-2-4': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-2-4-d`, `ex-alg-2-4-manual-1`, `ex-alg-2-4-manual-2`, `ex-alg-2-4-manual-3`, `ex-alg-2-4-manual-4`, `ex-alg-2-4-manual-5`, `ex-alg-2-4-manual-6`, `ex-alg-2-4-manual-7`
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-2-3` · Polynomgleichungen & Polynomdivision

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Gleichungen & Ungleichungen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-2-2` → `faktor-form`, `abc-formel`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `polynom-grad` — Grad eines Polynoms und höchster Summand
  2. `rat-wurzel` — Rationaler Wurzelsatz: ganzzahlige Nullstelle teilt das absolute Glied ⇐ `polynom-grad` (SG 0)
  3. `polydiv` — Polynomdivision $P(x) \div (x-x_0)$ — Grad sinkt um 1 ⇐ `rat-wurzel` (SG 1)
  4. `polydiv-rest` — Rest der Polynomdivision bei einer Nullstelle ist 0 (Probe) ⇐ `polydiv` (SG 2)
  5. `horner` — Horner-Schema als kompakte Polynomdivision + Funktionswert-Berechnung ⇐ `polydiv` (SG 3)
  6. `linearfaktor` — Linearfaktor-Zerlegung $P(x) = \prod (x-x_i)$ bei reellen Nullstellen ⇐ `polydiv` (SG 4)
  7. `cardano-info` — Ohne rationale Nullstelle: Cardano oder numerisch (Infotiefe) ⇐ `rat-wurzel` (SG 5)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `rat-wurzel` · **5/5+** — Nullstellenraten: Teiler des absoluten Glieds testen ($\pm 1, \pm 2, \ldots$)
  - ✅ [1] _hoch_ · Konzepte: `polydiv` · **6/5+** — Polynomdivision: Nach Nullstelle $x_0$ durch $(x - x_0)$ teilen, Grad sinkt um 1
  - ✅ [2] _hoch_ · Konzepte: `polydiv-rest` · **5/5+** — Rest der Polynomdivision bei Nullstelle muss 0 sein (Probe!)
  - ✅ [3] _mittel_ · Konzepte: `horner` · **5/5+** — Horner-Schema: kompakte Tabelle, doppelt nutzbar (Polynomwert + Division)
  - ✅ [4] _hoch_ · Konzepte: `linearfaktor` · **5/5+** — Linearfaktor-Zerlegung $P(x) = (x-x_1)(x-x_2)\cdots(x-x_n)$ falls vollständig reell zerlegbar
  - ✅ [5] _niedrig_ · Konzepte: `cardano-info` · **5/5+** — Bei $x^3 + ax + b$ ohne rationale Nullstelle: Cardano oder numerisch
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `rat-wurzel` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `rat-wurzel` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `rat-wurzel` | 1 | 1 | ✅ |  |
|  4 | 0 | error-analysis     | multiple-choice  | `rat-wurzel` | 1 | 1 | ✅ | Distraktor: Teiler des Leitkoeffizienten statt Absolutglied |
|  5 | 0 | transfer           | matching         | `rat-wurzel` | 1 | 1 | ✅ |  |
|  6 | 1 | recognize          | true-false       | `polydiv` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `polydiv` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `polydiv` | 2 | 2 | ✅ | Quotient + konstantes Glied |
|  9 | 1 | error-analysis     | multiple-choice  | `polydiv` | 1 | 1 | ✅ |  |
| 10 | 1 | transfer           | sorting          | `polydiv` | 1 | 1 | ✅ | Divisionsschritte ordnen |
| 11 | 2 | recognize          | true-false       | `polydiv-rest` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `polydiv-rest` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `polydiv-rest` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `polydiv-rest` | 1 | 1 | ✅ | Distraktor: Rest $\neq 0$ akzeptiert |
| 15 | 2 | transfer           | true-false       | `polydiv-rest`, `rat-wurzel` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `horner` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `horner` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `horner` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `horner` | 1 | 1 | ✅ |  |
| 20 | 3 | transfer           | sorting          | `horner` | 1 | 1 | ✅ |  |
| 21 | 4 | recognize          | matching         | `linearfaktor` | 1 | 1 | ✅ |  |
| 22 | 4 | apply-guided       | multiple-choice  | `linearfaktor`, `polydiv` | 1 | 1 | ✅ |  |
| 23 | 4 | apply-independent  | number-input     | `linearfaktor` | 1 | 1 | ✅ |  |
| 24 | 4 | error-analysis     | multiple-choice  | `linearfaktor` | 1 | 1 | ✅ |  |
| 25 | 4 | transfer           | number-input     | `linearfaktor`, `rat-wurzel` | 1 | 1 | ✅ |  |
| 26 | 5 | recognize          | true-false       | `cardano-info` | 1 | 1 | ✅ |  |
| 27 | 5 | apply-guided       | multiple-choice  | `cardano-info` | 1 | 1 | ✅ |  |
| 28 | 5 | apply-independent  | multiple-choice  | `cardano-info` | 1 | 1 | ✅ |  |
| 29 | 5 | error-analysis     | multiple-choice  | `cardano-info` | 1 | 1 | ✅ |  |
| 30 | 5 | transfer           | matching         | `cardano-info`, `rat-wurzel` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-2-3': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-2-3-a`, `ex-alg-2-3-b`, `ex-alg-2-3-c`, `ex-alg-2-3-manual-1`, `ex-alg-2-3-manual-2`, `ex-alg-2-3-manual-3`, `ex-alg-2-3-manual-4`, `ex-alg-2-3-manual-5` … (+3 weitere)
- **Visualisierung:** 🟡 fehlt — passende Viz-IDs: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …

#### `alg-1-3` · Logarithmen

- **Topic:** `algebra` (Algebra & Funktionen) · **Unit:** Potenzen, Wurzeln & Logarithmen
- **Prerequisites (muss sitzen, bevor Aufgaben dieser Lesson beginnen):**
  - `alg-1-1` → `pot-mult`, `pot-potenz`, `pot-negativ`
- **Konzept-Sequenz (in dieser Reihenfolge einführen — spätere Aufgaben dürfen NUR auf bereits eingeführte Konzepte zurückgreifen):**
  1. `log-def` — $\log_b(x) = y \iff b^y = x$ (für $b>0, b\neq 1, x>0$) (SG 0)
  2. `log-spezialfaelle` — $\ln$ (Basis $e$), $\log$ (Basis 10), $\log_2$ (Bits) ⇐ `log-def` (SG 0)
  3. `log-produkt` — Produktregel $\ln(ab) = \ln a + \ln b$ ⇐ `log-def` (SG 1)
  4. `log-quotient` — Quotientenregel $\ln(a/b) = \ln a - \ln b$ ⇐ `log-produkt` (SG 2)
  5. `log-potenz` — Potenzregel $\ln(a^n) = n \ln a$ ⇐ `log-produkt` (SG 3)
  6. `log-basiswechsel` — Basiswechsel $\log_b x = \ln x / \ln b$ ⇐ `log-def`, `log-potenz` (SG 4)
  7. `log-summe-nein` — $\ln(a+b) \neq \ln a + \ln b$ — keine Linearität ⇐ `log-produkt` (SG 5)
  8. `log-umkehr` — $e^{\ln x} = x$ und $\ln(e^x) = x$ — Umkehrfunktions-Identität ⇐ `log-def` (SG 6)
- **Sub-Goals (mindestens 5 Aufgaben je Sub-Goal — mehr ist besser):**
  - ✅ [0] _hoch_ · Konzepte: `log-def`, `log-spezialfaelle` · **5/5+** — Definition: $\log_b x = y \iff b^y = x$ (für $b>0, b\neq 1, x>0$)
  - ✅ [1] _hoch_ · Konzepte: `log-produkt` · **5/5+** — Produktregel: $\ln(ab) = \ln a + \ln b$
  - ✅ [2] _hoch_ · Konzepte: `log-quotient` · **5/5+** — Quotientenregel: $\ln(a/b) = \ln a - \ln b$
  - ✅ [3] _hoch_ · Konzepte: `log-potenz` · **5/5+** — Potenzregel: $\ln(a^n) = n \ln a$
  - ✅ [4] _hoch_ · Konzepte: `log-basiswechsel` · **5/5+** — Basiswechsel: $\log_b x = \ln x / \ln b$
  - ✅ [5] _hoch_ · Konzepte: `log-summe-nein` · **5/5+** — Typische Falle: $\ln(a+b) \neq \ln a + \ln b$ (kein Logarithmusgesetz für Summen)
  - ✅ [6] _hoch_ · Konzepte: `log-umkehr` · **5/5+** — Exp-Log-Umkehrung: $e^{\ln x} = x$ (für $x > 0$), $\ln(e^x) = x$
- **Aufgaben-Bauplan (Matrix — jede Zeile ist eine Pflicht-Aufgabe; Spalte "Nutzt" listet die Konzepte, die die Aufgabe testen soll):**

| #  | SG | Stufe              | Typ              | Nutzt                              | Soll | Ist | Status | Hinweis |
|----|----|--------------------|------------------|------------------------------------|------|-----|--------|---------|
|  1 | 0 | recognize          | true-false       | `log-def` | 1 | 1 | ✅ |  |
|  2 | 0 | apply-guided       | multiple-choice  | `log-def` | 1 | 1 | ✅ |  |
|  3 | 0 | apply-independent  | number-input     | `log-def` | 1 | 1 | ✅ | $\log_2 32$ |
|  4 | 0 | error-analysis     | multiple-choice  | `log-def` | 1 | 1 | ✅ |  |
|  5 | 0 | transfer           | matching         | `log-spezialfaelle` | 1 | 1 | ✅ | Basis ↔ Anwendungskontext |
|  6 | 1 | recognize          | true-false       | `log-produkt` | 1 | 1 | ✅ |  |
|  7 | 1 | apply-guided       | multiple-choice  | `log-produkt` | 1 | 1 | ✅ |  |
|  8 | 1 | apply-independent  | number-input     | `log-produkt` | 1 | 1 | ✅ |  |
|  9 | 1 | error-analysis     | multiple-choice  | `log-produkt` | 1 | 1 | ✅ |  |
| 10 | 1 | transfer           | number-input     | `log-produkt` | 1 | 1 | ✅ |  |
| 11 | 2 | recognize          | true-false       | `log-quotient` | 1 | 1 | ✅ |  |
| 12 | 2 | apply-guided       | multiple-choice  | `log-quotient` | 1 | 1 | ✅ |  |
| 13 | 2 | apply-independent  | number-input     | `log-quotient`, `log-produkt` | 1 | 1 | ✅ |  |
| 14 | 2 | error-analysis     | multiple-choice  | `log-quotient` | 1 | 1 | ✅ |  |
| 15 | 2 | transfer           | number-input     | `log-quotient`, `log-produkt` | 1 | 1 | ✅ |  |
| 16 | 3 | recognize          | true-false       | `log-potenz` | 1 | 1 | ✅ |  |
| 17 | 3 | apply-guided       | multiple-choice  | `log-potenz` | 1 | 1 | ✅ |  |
| 18 | 3 | apply-independent  | number-input     | `log-potenz` | 1 | 1 | ✅ |  |
| 19 | 3 | error-analysis     | multiple-choice  | `log-potenz` | 1 | 1 | ✅ | Distraktor: Potenz mit Exponent multipliziert |
| 20 | 3 | transfer           | number-input     | `log-potenz`, `log-produkt` | 1 | 1 | ✅ |  |
| 21 | 4 | recognize          | true-false       | `log-basiswechsel` | 1 | 1 | ✅ |  |
| 22 | 4 | apply-guided       | multiple-choice  | `log-basiswechsel` | 1 | 1 | ✅ |  |
| 23 | 4 | apply-independent  | number-input     | `log-basiswechsel` | 1 | 1 | ✅ |  |
| 24 | 4 | error-analysis     | multiple-choice  | `log-basiswechsel` | 1 | 1 | ✅ |  |
| 25 | 4 | transfer           | number-input     | `log-basiswechsel` | 1 | 1 | ✅ | Halbwertszeit / Zinseszins |
| 26 | 5 | recognize          | true-false       | `log-summe-nein` | 1 | 1 | ✅ |  |
| 27 | 5 | apply-guided       | multiple-choice  | `log-summe-nein` | 1 | 1 | ✅ |  |
| 28 | 5 | apply-independent  | multiple-choice  | `log-summe-nein` | 1 | 1 | ✅ | Aus Alternativ-Umformungen die richtige wählen |
| 29 | 5 | error-analysis     | multiple-choice  | `log-summe-nein` | 1 | 1 | ✅ | Distraktor: Summe in Produkt zerlegt |
| 30 | 5 | transfer           | matching         | `log-summe-nein`, `log-produkt` | 1 | 1 | ✅ | Erlaubte vs. verbotene Umformung |
| 31 | 6 | recognize          | true-false       | `log-umkehr` | 1 | 1 | ✅ |  |
| 32 | 6 | apply-guided       | multiple-choice  | `log-umkehr` | 1 | 1 | ✅ |  |
| 33 | 6 | apply-independent  | number-input     | `log-umkehr` | 1 | 1 | ✅ | $e^x = 5$ lösen |
| 34 | 6 | error-analysis     | multiple-choice  | `log-umkehr` | 1 | 1 | ✅ |  |
| 35 | 6 | transfer           | number-input     | `log-umkehr`, `log-potenz` | 1 | 1 | ✅ |  |

- **Ablage:**
  - Goal-Tasks (mit Sub-Goal-Zuordnung): `src/content/subgoal_tasks/algebra.js` unter `'alg-1-3': { 0: [...], 1: [...], ... }`
  - Zusatz-Aufgaben (freie Vertiefung, nicht an Matrix gebunden): `src/content/supplements/algebra.js`
- **4-Block-Erklärung fehlt bei:** `ex-alg-1-3-a`, `ex-alg-1-3-b`, `ex-alg-1-3-c`, `ex-alg-1-3-d`, `ex-alg-1-3-manual-1`, `ex-alg-1-3-manual-2`, `ex-alg-1-3-manual-3`, `ex-alg-1-3-manual-4` … (+4 weitere)
- **Visualisierung:** ✅ vorhanden. Weitere möglich: `function-graph`.
- **Typische Fehler (für error-analysis-Zeilen als Distraktoren):** Minuszeichen vor Klammer nicht auf alle Summanden verteilt. · Beim Quadrieren Scheinlösungen übersehen (Probe vergessen). · Logarithmus auf Summe angewandt: $\log(a+b) \neq \log a + \log b$. · …
