# Content-Übersicht — Lernapp Maschinenbau

> **Automatisch generiert** am 2026-04-21 via `npm run content-overview`.
> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.

**Legende:** 🎯 Mastery-Check · ➕ Auto-Supplemental · **wAE** hat Distraktor-Erklärungen · **4B** Explanation im Ansatz/Rechnung/Probe/Fehler-Schema · 🔘 MC · 🔢 Number · ✅ True/False · 🔗 Matching · 📋 Sorting · ✏️ Fill-Blank

## Gesamt-Statistik

| Metrik | Wert |
|---|---|
| Topics | **22** |
| Units (davon Prüfungs-Units) | **71** (22) |
| Lektionen | **226** |
| Aufgaben gesamt | **2275** |
| &nbsp;&nbsp;· 🔘 multiple-choice | 996 |
| &nbsp;&nbsp;· 🔢 number-input | 506 |
| &nbsp;&nbsp;· ✅ true-false | 346 |
| &nbsp;&nbsp;· 🔗 matching | 229 |
| &nbsp;&nbsp;· 📋 sorting | 198 |
| MC mit vollständigen `wrongAnswerExplanations` | 996 / 996 (100%) |
| Erklärungen im 4-Block-Schema (Ansatz/Rechnung/Probe/Fehler) | 364 / 2275 (16%) |

## Topic-Überblick

| # | Topic | Level | Phase | Units | Lektionen | Aufgaben | Prereqs |
|---|---|---|---|---|---|---|---|
| 1 | [Algebra & Funktionen](#algebra) (`algebra`) | Grundlagen | 1. Sem | 5 | 18 | 183 | — |
| 2 | [Trigonometrie](#trigonometry) (`trigonometry`) | Grundlagen | 1. Sem | 4 | 18 | 180 | algebra |
| 3 | [Vektoren & Analytische Geometrie](#vektoren) (`vektoren`) | Grundlagen | 1. Sem | 3 | 12 | 120 | algebra, trigonometry |
| 4 | [Differentialrechnung](#ableitung) (`ableitung`) | Grundlagen | 1. Sem | 5 | 18 | 183 | algebra, trigonometry |
| 5 | [Integralrechnung](#integralrechnung) (`integralrechnung`) | Grundlagen | 1. Sem | 4 | 16 | 163 | ableitung |
| 6 | [Lineare Algebra](#lineare-algebra) (`lineare-algebra`) | Vertiefung | 2. Sem | 3 | 12 | 123 | vektoren |
| 7 | [Differentialgleichungen](#differentialgleichungen) (`differentialgleichungen`) | Vertiefung | 2. Sem | 3 | 10 | 103 | ableitung, integralrechnung |
| 8 | [Komplexe Zahlen](#komplexe-zahlen) (`komplexe-zahlen`) | Grundlagen | 2. Sem | 4 | 9 | 90 | algebra, trigonometry |
| 9 | [Reihen & Folgen](#reihen-folgen) (`reihen-folgen`) | Vertiefung | 2. Sem | 2 | 5 | 50 | ableitung, integralrechnung |
| 10 | [Mehrdim. Analysis](#mehrdim-analysis) (`mehrdim-analysis`) | Vertiefung | Vertiefung | 2 | 5 | 50 | ableitung, integralrechnung, vektoren |
| 11 | [Numerische Mathematik](#numerik) (`numerik`) | Vertiefung | Vertiefung | 2 | 5 | 50 | algebra, ableitung |
| 12 | [Statistik & Wahrscheinlichkeit](#statistik) (`statistik`) | Vertiefung | Vertiefung | 2 | 6 | 60 | algebra, integralrechnung |
| 13 | [Fourier & Laplace](#fourier-laplace) (`fourier-laplace`) | Vertiefung | Vertiefung | 3 | 7 | 70 | differentialgleichungen, komplexe-zahlen |
| 14 | [Technische Mechanik](#technische-mechanik) (`technische-mechanik`) | Grundlagen | 1. Sem | 4 | 16 | 160 | algebra, trigonometry, vektoren |
| 15 | [Festigkeitslehre](#festigkeitslehre) (`festigkeitslehre`) | Vertiefung | 2. Sem | 3 | 11 | 110 | technische-mechanik, ableitung |
| 16 | [Thermodynamik](#thermodynamik) (`thermodynamik`) | Vertiefung | 2. Sem | 3 | 8 | 80 | ableitung, integralrechnung |
| 17 | [Fluidmechanik](#fluidmechanik) (`fluidmechanik`) | Vertiefung | Vertiefung | 3 | 9 | 90 | ableitung, vektoren |
| 18 | [Werkstoffkunde](#werkstoffkunde) (`werkstoffkunde`) | Grundlagen | 1. Sem | 3 | 6 | 60 | algebra |
| 19 | [Maschinenelemente](#maschinenelemente) (`maschinenelemente`) | Vertiefung | 2. Sem | 3 | 8 | 80 | festigkeitslehre |
| 20 | [Elektrotechnik](#elektrotechnik) (`elektrotechnik`) | Grundlagen | 1. Sem | 3 | 8 | 80 | algebra |
| 21 | [Regelungstechnik](#regelungstechnik) (`regelungstechnik`) | Vertiefung | Vertiefung | 3 | 6 | 60 | differentialgleichungen, komplexe-zahlen |
| 22 | [Python & Matlab](#python-matlab) (`python-matlab`) | Grundlagen | 1. Sem | 4 | 13 | 130 | algebra |

<a id="algebra"></a>
## Algebra & Funktionen `algebra`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** math  
**Prerequisites:** —  
**5 Units** · **18 Lektionen** · **183 Aufgaben** (🔘 86 · 🔢 34 · ✅ 28 · 🔗 20 · 📋 15)

*Rechnen, Brüche, Potenzen, Gleichungen, Funktionen — ground-up Grundlagen für alle technischen Fächer*

### Rechnen & Brüche (Vorkurs-Einstieg) (Unit 0)
*Grundrechnen, Klammern, Brüche, Prozent, Termumformung — die Basis für alles Weitere.*

4 Lektionen · 40 Aufgaben

#### Grundrechnen, Klammern & Vorrang  `alg-0-1` · 12 min

**Lernziele:**
- Punkt-vor-Strich sicher anwenden
- Klammern korrekt auflösen (innen nach außen)
- Minuszeichen vor einer Klammer als Vorzeichenwechsel verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Berechne: $3 + 4 cdot 2$ | wAE 4B |
| 2 | 🔢 number-input | Berechne: $2 cdot (3 + 4)$ | 4B |
| 3 | 🔘 multiple-choice | Berechne: $-(3 - 5)$ | wAE 4B |
| 4 | ✅ true-false | Der Ausdruck $3 + 4 cdot 2$ ergibt $14$. | 4B |
| 5 | 🔗 matching | Ordne jedem Ausdruck den korrekten Wert zu. | 4B |
| 6 | 🔘 multiple-choice | Aufwärmaufgabe zu "Grundrechnen, Klammern & Vorrang": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 7 | ✅ true-false | Bei "Grundrechnen, Klammern & Vorrang" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln  | ➕ |
| 8 | 🔗 matching | Ordne die Lernbausteine für "Grundrechnen, Klammern & Vorrang" richtig zu. | ➕ |
| 9 | 📋 sorting | Bringe die Prüfungsstrategie für "Grundrechnen, Klammern & Vorrang" in die richtige Reihenfolge. | ➕ |
| 10 | 🔢 number-input | Berechne: $-2 cdot (3 - 5) + 4$ | 🎯 4B |

#### Bruchrechnen sicher  `alg-0-2` · 15 min

**Lernziele:**
- Brüche kürzen, erweitern
- Brüche addieren und subtrahieren (Hauptnenner finden)
- Brüche multiplizieren und dividieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Kürze: $dfrac{6}{9}$ | wAE 4B |
| 2 | 🔘 multiple-choice | Berechne: $dfrac{1}{2} + dfrac{1}{3}$ | wAE 4B |
| 3 | 🔢 number-input | Berechne: $dfrac{2}{3} cdot dfrac{3}{4}$. Gib das Ergebnis als Dezimalzahl an. | 4B |
| 4 | ✅ true-false | $dfrac{a}{b} + dfrac{c}{d} = dfrac{a+c}{b+d}$ — diese Regel ist für beliebige Brüche korrekt. | 4B |
| 5 | 📋 sorting | Bringe die Schritte zur Addition $tfrac{1}{4} + tfrac{2}{3}$ in die richtige Reihenfolge. | 4B |
| 6 | 🔘 multiple-choice | Aufwärmaufgabe zu "Bruchrechnen sicher": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 7 | ✅ true-false | Bei "Bruchrechnen sicher" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 8 | 🔗 matching | Ordne die Lernbausteine für "Bruchrechnen sicher" richtig zu. | ➕ |
| 9 | 📋 sorting | Bringe die Prüfungsstrategie für "Bruchrechnen sicher" in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | Berechne: $dfrac{2}{5} + dfrac{1}{3} - dfrac{1}{15}$ | 🎯 wAE 4B |

#### Prozent & Dreisatz  `alg-0-3` · 12 min

**Lernziele:**
- Prozentwert, Grundwert, Prozentsatz berechnen
- Direkte vs. indirekte Proportionalität erkennen
- Dreisatz auf Alltagsprobleme anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was sind $25%$ von $80$? | wAE 4B |
| 2 | 🔢 number-input | Ein Pullover kostet $60,text{€}$ und wird um $15%$ reduziert. Wie viel kostet er nach der Reduktion (in €)? | 4B |
| 3 | 🔢 number-input | Dreisatz: $3$ Pumpen füllen einen Tank in $8$ Stunden. Wie lange brauchen $4$ Pumpen (in Stunden)? | 4B |
| 4 | ✅ true-false | Wenn ein Wert um $20%$ steigt und dann um $20%$ fällt, ist der Endwert gleich dem Ausgangswert. | 4B |
| 5 | 🔗 matching | Ordne die Begriffe den Formeln zu. | 4B |
| 6 | 🔘 multiple-choice | Aufwärmaufgabe zu "Prozent & Dreisatz": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 7 | ✅ true-false | Bei "Prozent & Dreisatz" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 8 | 🔗 matching | Ordne die Lernbausteine für "Prozent & Dreisatz" richtig zu. | ➕ |
| 9 | 📋 sorting | Bringe die Prüfungsstrategie für "Prozent & Dreisatz" in die richtige Reihenfolge. | ➕ |
| 10 | 🔢 number-input | Ein Werkstoff enthält $3{,}5%$ Kohlenstoff. In einer Probe von $800,text{g}$ ist wie viel Kohlenstoff enthalten (in g)? | 🎯 4B |

#### Termumformung & Gleichungen  `alg-0-4` · 15 min

**Lernziele:**
- Gleichartige Terme zusammenfassen
- Äquivalenzumformungen sicher anwenden
- Formeln nach einer Variable umstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Vereinfache: $2x + 3x - x$ | wAE 4B |
| 2 | 🔢 number-input | Löse die Gleichung nach $x$ auf: $2x + 6 = 14$ | 4B |
| 3 | 🔘 multiple-choice | Löse die Formel $F = m cdot a$ nach $a$ auf. | wAE 4B |
| 4 | ✅ true-false | Beim Lösen einer Gleichung darf man beide Seiten mit derselben Zahl multiplizieren, ohne das Gleichheitszeichen zu verli | 4B |
| 5 | 📋 sorting | Bringe die Schritte zur Lösung von $3x - 5 = 10$ in die richtige Reihenfolge. | 4B |
| 6 | 🔘 multiple-choice | Aufwärmaufgabe zu "Termumformung & Gleichungen": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 7 | ✅ true-false | Bei "Termumformung & Gleichungen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnv | ➕ |
| 8 | 🔗 matching | Ordne die Lernbausteine für "Termumformung & Gleichungen" richtig zu. | ➕ |
| 9 | 📋 sorting | Bringe die Prüfungsstrategie für "Termumformung & Gleichungen" in die richtige Reihenfolge. | ➕ |
| 10 | 🔢 number-input | Löse: $dfrac{x+4}{3} = 5$ nach $x$. | 🎯 4B |

### Potenzen, Wurzeln & Logarithmen (Unit 1)
*Potenzgesetze, Wurzeln als Potenzen, natürlicher Logarithmus*

3 Lektionen · 30 Aufgaben

#### Potenzgesetze  `alg-1-1` · 15 min

**Lernziele:**
- Alle Potenzregeln kennen und sicher anwenden
- Terme mit gleichen Basen vereinfachen
- Typische Fehler (Multiplikation vs. Potenz) vermeiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Vereinfache: $x^{3} cdot x^{4}$ | wAE 4B |
| 2 | 🔘 multiple-choice | Vereinfache: $(x^{3})^{4}$ | wAE |
| 3 | 🔘 multiple-choice | Schreibe ohne negativen Exponenten: $x^{-3}$ | wAE 4B |
| 4 | 🔘 multiple-choice | Vereinfache: $(2x^{2}y)^{3}$ | wAE |
| 5 | 🔢 number-input | Berechne: $dfrac{2^{10}}{2^{7}}$ |  |
| 6 | 🔘 multiple-choice | Welche Regel passt zu x⁵ · x⁻²? | ➕ wAE |
| 7 | 🔢 number-input | Vereinfache (2x³)². Gib den Zahlenfaktor vor x⁶ an. | ➕ |
| 8 | ✅ true-false | x⁴ + x⁴ lässt sich zu x⁸ vereinfachen. | ➕ |
| 9 | 🔗 matching | Ordne die Potenzregel dem richtigen Ergebnis zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache als einzelnen Bruch mit **positiven Exponenten**: $dfrac{x^{4} cdot y^{2}}{x^{2} cdot y^{5}}$ | 🎯 wAE 4B |

#### Wurzeln und gebrochene Exponenten  `alg-1-2` · 15 min

**Lernziele:**
- Wurzeln als gebrochene Potenzen verstehen
- Wurzelterme vereinfachen
- Typische Fehler (Wurzel von Summe) vermeiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist $sqrt{x^{2}}$? | wAE |
| 2 | 🔢 number-input | Berechne: $sqrt[3]{8}$ |  |
| 3 | 🔘 multiple-choice | Vereinfache: $sqrt{12}$ | wAE 4B |
| 4 | ✅ true-false | Für alle reellen Zahlen $a, b geq 0$ gilt: $sqrt{a+b} = sqrt{a} + sqrt{b}$. |  |
| 5 | 🔘 multiple-choice | Welche Schreibweise ist äquivalent zu √(a⁵) für a ≥ 0? | ➕ wAE |
| 6 | 🔢 number-input | Vereinfache √75 = k√3. Gib k an. | ➕ |
| 7 | ✅ true-false | Für alle reellen x gilt √(x²) = x. | ➕ |
| 8 | 🔗 matching | Ordne Wurzelschreibweise und Potenzschreibweise zu. | ➕ |
| 9 | 📋 sorting | Bringe die Vereinfachung von √(48a²) für a ≥ 0 in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Zu welchem Ausdruck ist $x^{2/3}$ äquivalent? | 🎯 wAE |

#### Logarithmen  `alg-1-3` · 18 min

**Lernziele:**
- Logarithmus als Umkehrfunktion der Exponentialfunktion verstehen
- Logarithmusgesetze anwenden
- Gleichungen mit $e^{x}$ und $ln$ lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne: $log_{2}(8)$ |  |
| 2 | 🔢 number-input | Berechne: $ln(e^{3})$ |  |
| 3 | 🔘 multiple-choice | Was ist $ln(a cdot b)$ laut Logarithmusgesetz? | wAE |
| 4 | 🔘 multiple-choice | Vereinfache: $ln(a^{5})$ | wAE |
| 5 | 🔘 multiple-choice | Was bedeutet log₂(32) = 5? | ➕ wAE |
| 6 | 🔢 number-input | Löse ln(x) = 2. Gib x näherungsweise an. Nutze e² ≈ 7,389. | ➕ |
| 7 | ✅ true-false | ln(a · b) = ln(a) + ln(b) für a > 0 und b > 0. | ➕ |
| 8 | 🔗 matching | Ordne die Logarithmusregeln zu. | ➕ |
| 9 | 📋 sorting | Bringe die Lösung von e^(2x) = 10 in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Löse nach $x$ auf: $e^{x} = 5$ | 🎯 wAE |

### Gleichungen & Ungleichungen (Unit 2)
*Lineare und quadratische Gleichungen, Polynomdivision, Ungleichungen*

4 Lektionen · 40 Aufgaben

#### Lineare Gleichungen  `alg-2-1` · 12 min

**Lernziele:**
- Lineare Gleichungen lösen
- Textaufgaben in Gleichungen übersetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Löse: $3x + 7 = 22$ | wAE 4B |
| 2 | 🔢 number-input | Löse: $5x - 3 = 2x + 9$ | 4B |
| 3 | 🔘 multiple-choice | Ein Rechteck hat Umfang $U = 30$ cm. Die Länge ist doppelt so groß wie die Breite. Wie breit ist das Rechteck? | wAE 4B |
| 4 | 🔘 multiple-choice | Textaufgabe: Ein Zug fährt mit $v_{1} = 80$ km/h los. $2$ Stunden später startet ein zweiter Zug mit $v_{2} = 120$ km/h  | wAE 4B |
| 5 | 🔘 multiple-choice | Welche Operation ist bei 4x − 7 = 13 der erste sinnvolle Schritt? | ➕ wAE |
| 6 | 🔢 number-input | Löse 3(2x − 1) = 21. Gib x an. | ➕ |
| 7 | ✅ true-false | Bei einer linearen Gleichung darf man dieselbe Zahl auf beiden Seiten addieren, ohne die Lösungsmenge zu ändern. | ➕ |
| 8 | 🔗 matching | Ordne die Textgrößen einer Weg-Zeit-Aufgabe zu. | ➕ |
| 9 | 📋 sorting | Bringe den Lösungsweg für (x + 2)/5 = 4 in die richtige Reihenfolge. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Löse: $dfrac{2x + 1}{3} = dfrac{x - 2}{2} + 1$. Gib $x$ an. | 🎯 4B |

#### Quadratische Gleichungen  `alg-2-2` · 20 min

**Lernziele:**
- pq-Formel und abc-Formel anwenden
- Diskriminante interpretieren
- Satz von Vieta nutzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Löse: $x^{2} - 5x + 6 = 0$ | wAE |
| 2 | 🔘 multiple-choice | Die Diskriminante $D = b^{2} - 4ac$ einer quadratischen Gleichung $ax^{2} + bx + c = 0$ ist negativ ($D < 0$). Was bedeu | wAE |
| 3 | 🔢 number-input | Löse mit der pq-Formel: $x^{2} + 4x - 5 = 0$. Gib die POSITIVE Lösung an. | 4B |
| 4 | 🔘 multiple-choice | Nach Vieta: $x^{2} - 7x + 12 = 0$. Was gilt für die Lösungen $x_{1}$ und $x_{2}$? | wAE |
| 5 | 🔘 multiple-choice | Wie viele Lösungen hat $2x^{2} + 3x + 5 = 0$? | wAE |
| 6 | 🔘 multiple-choice | Welche Methode ist für x² − 9 = 0 am schnellsten? | ➕ wAE |
| 7 | 🔢 number-input | Berechne die Diskriminante D von x² − 4x + 5 = 0. | ➕ |
| 8 | ✅ true-false | Wenn die Diskriminante einer quadratischen Gleichung negativ ist, gibt es keine reellen Lösungen. | ➕ |
| 9 | 🔗 matching | Ordne die Diskriminante der Anzahl reeller Lösungen zu. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Löse: $2x^{2} - 8x + 6 = 0$. Gib die GRÖSSERE Lösung an. | 🎯 4B |

#### Polynomgleichungen & Polynomdivision  `alg-2-3` · 15 min

**Lernziele:**
- Nullstellen durch Probieren finden
- Polynomdivision durchführen
- Horner-Schema anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $P(x) = x^{3} - 6x^{2} + 11x - 6$. Prüfe: Ist $x = 1$ eine Nullstelle? | wAE |
| 2 | 🔘 multiple-choice | $(x^{3} - 6x^{2} + 11x - 6) div (x - 1)$ ergibt: | wAE |
| 3 | 🔘 multiple-choice | Für $P(x) = 2x^{3} + 3x^{2} - 1$ an der Stelle $x_{0} = -1$: Was ist $P(-1)$? | wAE |
| 4 | 🔘 multiple-choice | Polynomdivision mit Rest: $(x^{2} + 3x + 5) : (x + 2) = ?$ | wAE 4B |
| 5 | 🔘 multiple-choice | Wenn P(3) = 0 gilt, welcher Faktor gehört zu P(x)? | ➕ wAE |
| 6 | 🔢 number-input | Berechne P(2) für P(x)=x³−4x. | ➕ |
| 7 | ✅ true-false | Wenn bei der Polynomdivision durch (x−1) ein Rest ungleich 0 bleibt, ist x=1 keine Nullstelle. | ➕ |
| 8 | 🔗 matching | Ordne Nullstelle und Linearfaktor zu. | ➕ |
| 9 | 📋 sorting | Bringe das Lösen von P(x)=x³−3x²−4x+12 in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Alle Nullstellen von $P(x) = x^{3} - 3x^{2} + 2x$ sind: | 🎯 wAE |

#### Ungleichungen  `alg-2-4` · 15 min

**Lernziele:**
- Lineare Ungleichungen lösen
- Betragsungleichungen auflösen
- Quadratische Ungleichungen mit Vorzeichentabelle lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Löse: $2x - 3 > 7$ | wAE 4B |
| 2 | 🔘 multiple-choice | Löse: $-3x < 12$ | wAE 4B |
| 3 | 🔘 multiple-choice | Löse: $\|x - 3\| < 5$ | wAE 4B |
| 4 | 🔘 multiple-choice | Löse: $x^{2} - 4 > 0$ | wAE |
| 5 | 🔘 multiple-choice | Was passiert mit dem Zeichen, wenn du −2x > 8 durch −2 teilst? | ➕ wAE |
| 6 | 🔢 number-input | Löse 5 − 2x ≤ 11. Gib die Grenzzahl an. | ➕ |
| 7 | ✅ true-false | \|x − 4\| < 2 bedeutet 2 < x < 6. | ➕ |
| 8 | 🔗 matching | Ordne Ungleichung und Lösungsmenge zu. | ➕ |
| 9 | 📋 sorting | Bringe die Lösung von x² − 1 ≥ 0 in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Löse: $\|2x + 1\| leq 7$ | 🎯 wAE 4B |

### Funktionen (Unit 3)
*Funktionsbegriff, elementare Funktionen, Transformationen, Umkehrfunktionen*

4 Lektionen · 40 Aufgaben

#### Funktionsbegriff  `alg-3-1` · 12 min

**Lernziele:**
- Definition einer Funktion kennen
- Definitions- und Wertebereich bestimmen
- Injektiv, surjektiv, bijektiv unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist eine Funktion $f: A to B$? | wAE |
| 2 | 🔘 multiple-choice | $f(x) = x^{2}$. Was ist der Definitionsbereich $D$ und der Wertebereich $W$? | wAE |
| 3 | ✅ true-false | $f(x) = x^{2}$ (mit $D = mathbb{R}$) ist injektiv (verschiedene $x$-Werte haben verschiedene $y$-Werte). |  |
| 4 | 🔘 multiple-choice | Welche Zuordnung ist keine Funktion? | ➕ wAE |
| 5 | 🔢 number-input | Für f(x)=2x²−1: Berechne f(3). | ➕ |
| 6 | ✅ true-false | f(x)=x² ist auf ℝ nicht injektiv. | ➕ |
| 7 | 🔗 matching | Ordne die Funktionsbegriffe zu. | ➕ |
| 8 | 🔘 multiple-choice | Welcher Schritt muss bei der Funktionsprüfung einer Zuordnung zwingend als erstes erfolgen? | ➕ wAE |
| 9 | 🔘 multiple-choice | Welche Aussage ist falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Eigenschaft muss eine Funktion haben, damit ihre Umkehrfunktion (auf dem gesamten Wertebereich) existie | 🎯 wAE |

#### Elementare Funktionen  `alg-3-2` · 15 min

**Lernziele:**
- Potenz-, Exponential- und Logarithmusfunktionen unterscheiden
- Wachstumsverhalten vergleichen
- Definitionsbereiche kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔗 matching | Ordne die Funktionen ihrem Typ zu: |  |
| 2 | 🔘 multiple-choice | Welche Aussage über $f(x) = e^{x}$ ist FALSCH? | wAE |
| 3 | 🔘 multiple-choice | Was ist der Definitionsbereich von $f(x) = ln(x)$? | wAE |
| 4 | 🔘 multiple-choice | Welche Funktion wächst für große $x$ am schnellsten? | wAE |
| 5 | 🔘 multiple-choice | Vereinfache: $ln(e^{2x})$ | wAE |
| 6 | 🔘 multiple-choice | Welche Funktion ist eine Exponentialfunktion? | ➕ wAE |
| 7 | 🔢 number-input | Berechne f(0) für f(x)=5eˣ. | ➕ |
| 8 | ✅ true-false | ln(x) hat im Reellen den Definitionsbereich x > 0. | ➕ |
| 9 | 🔗 matching | Ordne Funktion und Typ zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = 2 cdot e^{x} - 1$. Was ist $f(0)$? | 🎯 wAE 4B |

#### Funktionsoperationen  `alg-3-3` · 12 min

**Lernziele:**
- Verschiebung, Streckung, Spiegelung anwenden
- Transformationsregeln sicher beherrschen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Der Graph von $f(x) = x^{2}$ wird um $3$ nach rechts und $2$ nach oben verschoben. Wie lautet die neue Funktion? | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = sin(x)$ wird an der $x$-Achse gespiegelt. Wie lautet die neue Funktion? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = x^{2}$ wird vertikal um Faktor $3$ gestreckt. Wie lautet $g(x)$? | wAE |
| 4 | 🔘 multiple-choice | Was macht g(x)=f(x−4)+2 mit dem Graphen von f? | ➕ wAE |
| 5 | 🔢 number-input | Für f(x)=x² und g(x)=3f(x): Berechne g(2). | ➕ |
| 6 | ✅ true-false | g(x)=f(x)+5 verschiebt den Graphen von f um 5 nach oben. | ➕ |
| 7 | 🔗 matching | Ordne Transformation und Wirkung zu. | ➕ |
| 8 | 📋 sorting | Bringe das Aufstellen von g(x) aus f(x)=x² bei Verschiebung 2 nach rechts und 1 nach unten in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Interpretation ist falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = e^{x}$. Welche Transformation ergibt $g(x) = e^{x-2} + 1$? | 🎯 wAE |

#### Umkehrfunktionen  `alg-3-4` · 12 min

**Lernziele:**
- Umkehrfunktion berechnen
- Bedingung für Existenz kennen
- Graphische Interpretation verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist die Umkehrfunktion von $f(x) = 2x + 3$? | wAE |
| 2 | 🔘 multiple-choice | Die Umkehrfunktion von $f(x) = e^{x}$ ist: | wAE |
| 3 | ✅ true-false | Der Graph einer Umkehrfunktion $f^{-1}$ entsteht durch Spiegelung des Graphen von $f$ an der Geraden $y = x$. |  |
| 4 | 🔘 multiple-choice | Welche Bedingung ist für eine eindeutige Umkehrfunktion nötig? | ➕ wAE |
| 5 | 🔢 number-input | Für f(x)=4x−7: Berechne f⁻¹(5). | ➕ |
| 6 | ✅ true-false | Der Graph von f⁻¹ entsteht durch Spiegelung des Graphen von f an der Geraden y=x. | ➕ |
| 7 | 🔗 matching | Ordne Funktion und Umkehrfunktion zu. | ➕ |
| 8 | 📋 sorting | Bringe die Bestimmung von f⁻¹ für f(x)=2x+6 in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Aussage ist falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^{2}$ (für $x geq 0$). Was ist $f^{-1}(x)$? | 🎯 wAE 4B |

### 🏁 Prüfungsaufgaben (Unit 4)
*Aufgaben auf TU Wien Prüfungsniveau — Potenzen, Logarithmen, Gleichungen, Funktionsanalyse*

3 Lektionen · 33 Aufgaben

#### Prüfung: Algebra-Grundlagen  `alg-4-1` · 25 min

**Lernziele:**
- Potenzgesetze und Logarithmus­regeln sicher anwenden
- Quadratische Gleichungen auf Prüfungsniveau lösen
- Exponential­gleichungen durch Logarithmieren lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache vollständig: $(8x^{6}y^{3})^{2/3}$ | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Löse nach $x$ auf: $ln(2x - 1) = 3$ | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] Berechne: $log_{2}(128)$. Gib eine ganze Zahl ein. | 4B |
| 4 | ✅ true-false | [PRÜFUNG] Es gilt: $log(a cdot b) = log(a) cdot log(b)$. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache: $log_{3}(81) - log_{3}(3)$ | wAE |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Löse die quadratische Gleichung: $x^{2} - 5x + 6 = 0$ | wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Die Gleichung $2x^{2} + 4x - 6 = 0$ hat zwei Lösungen. Was ist die größere Lösung? |  |
| 8 | ✅ true-false | [PRÜFUNG] Die Gleichung $x^{2} + 4 = 0$ hat in $mathbb{R}$ keine Lösung. |  |
| 9 | 🔗 matching | [PRÜFUNG] Ordne jedem Ausdruck das richtige Vereinfachungsergebnis zu: |  |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Wie viele reelle Lösungen hat $x^{2} - 6x + 9 = 0$? | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Ein Druckbehälter hat Innendruck $p(t) = p_{0} cdot e^{-kt}$. Nach $5$ s ist der Druck auf die Hälfte gesunken | 🎯 wAE |

#### Prüfung: Funktionen & Anwendungen  `alg-4-2` · 25 min

**Lernziele:**
- Extrema und Scheitelpunkte von Funktionen bestimmen
- Umkehrfunktionen berechnen und interpretieren
- Funktionen auf technische Probleme anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^{3} - 3x$. An welchen Stellen hat $f$ lokale Extrema? | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Was ist die Umkehrfunktion von $f(x) = 3x - 2$? | wAE |
| 3 | ✅ true-false | [PRÜFUNG] $f(x) = x^{3}$ ist eine bijektive Funktion ($mathbb{R} to mathbb{R}$) und besitzt daher eine Umkehrfunktion. |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Eine Parabel hat die Gleichung $f(x) = 2(x - 3)^{2} + 1$. Was ist der Scheitelpunkt? | wAE 4B |
| 5 | 🔢 number-input | [PRÜFUNG] $f(x) = x^{2} - 4x + 3$. An welcher $x$-Stelle liegt der Scheitelpunkt (Minimum)? |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Welche Funktion hat den Definitionsbereich $D = (0, infty)$? | wAE |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Schritte zur Bestimmung der Umkehrfunktion von $f(x) = 2e^{x} - 1$ in die richtige Reihenfolge: |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Ein Bauteil dehnt sich mit $l(T) = l_{0} cdot (1 + alpha cdot T)$ aus. $l_{0} = 1$ m, $alpha = 2 cdot 10^{-5}$ | wAE |
| 9 | ✅ true-false | [PRÜFUNG] Der Graph von $f^{-1}(x)$ entsteht aus dem Graphen von $f(x)$ durch Spiegelung an der Geraden $y = x$. | 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Polynomdivision: $(x^{3} - 2x^{2} - 5x + 6) div (x - 1)$. Das Ergebnis ist: | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Die Nachfragefunktion eines Produkts lautet $p(x) = 100 - 2x$ (Preis in €, $x = $ Menge). Der Umsatz $U(x) = x | 🎯 wAE |

#### Prüfung: Gleichungs­systeme & technische Anwendungen  `alg-4-3` · 30 min

**Lernziele:**
- Lineare Gleichungs­systeme im Technik-Kontext lösen
- Wurzel-, Betrags- und Exponential­gleichungen mit Probe handhaben
- Logarithmische Skalen (pH, dB, Bel) verstehen und rechnen
- Typische Prüfungsfallen (Scheinlösungen, Definitions­bereiche) erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Welche Lösungsstrategie ist für das System $2x + 3y = 7$, $x - y = 1$ am effizientesten und was ist die Lösung | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Ein Tragwerk hat zwei Stäbe mit Kräften $F_{1}$, $F_{2}$. Gleichgewicht: $F_{1} + 2F_{2} = 12$ kN und $2F_{1}  |  |
| 3 | ✅ true-false | [PRÜFUNG] Eine Wurzelgleichung $sqrt{f(x)} = g(x)$ löst man durch Quadrieren beider Seiten — die erhaltene Lösung muss I |  |
| 4 | 🔗 matching | [PRÜFUNG] Ordne den Gleichungstypen ihre Standard­lösungsmethode zu. |  |
| 5 | 🔢 number-input | [PRÜFUNG] Löse $sqrt{x + 5} = x - 1$. Gib die gültige Lösung $x$ an. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Eine Betragsungleichung $\|2x - 3\| leq 5$ hat welche Lösungsmenge? | wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Exponential­zerfall: Radioaktive Probe mit Halbwertszeit $T_{1/2} = 10$ min. Wie lange (in min) dauert es, bis |  |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte zur Lösung einer Exponential­gleichung $a^{x} = b$. |  |
| 9 | ✅ true-false | [PRÜFUNG] Ein überbestimmtes lineares Gleichungssystem (mehr Gleichungen als Unbekannte) hat IMMER keine Lösung. |  |
| 10 | 🔢 number-input | [PRÜFUNG] Zwei Stromquellen laden einen Kondensator. System: $I_{1} + I_{2} = 3$ A und $R_{1} I_{1} - R_{2} I_{2} = 0$ m |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Die pH-Skala: $text{pH} = -log_{10}[text{H}^{+}]$. Eine Säure hat $[text{H}^{+}] = 10^{-3}$ mol/L. Welche pH u | 🎯 wAE |

<a id="trigonometry"></a>
## Trigonometrie `trigonometry`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** math  
**Prerequisites:** `algebra`  
**4 Units** · **18 Lektionen** · **180 Aufgaben** (🔘 98 · 🔢 29 · ✅ 20 · 🔗 19 · 📋 14)

*Winkelfunktionen, Einheitskreis und Anwendungen für Maschinenbauingenieure*

### Grundlagen der Trigonometrie (Unit 1)
*Winkelmaße, rechtwinkliges Dreieck und erste Grundwerte*

5 Lektionen · 50 Aufgaben

#### Winkel-Intuition (Einstieg)  `trig-1-0` · 8 min

**Lernziele:**
- Spitzen, rechten, stumpfen, gestreckten Winkel visuell erkennen
- Winkelsumme im Dreieck ($180°$) anwenden
- Anschauung für $45°$, $90°$, $180°$, $360°$ entwickeln

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie viele Grad hat ein rechter Winkel? | wAE 4B |
| 2 | ✅ true-false | Ein Winkel von $45°$ ist die Hälfte eines rechten Winkels. | 4B |
| 3 | 🔘 multiple-choice | Welche Aussage über Winkel stimmt? | wAE 4B |
| 4 | 🔗 matching | Ordne jeden Winkel seiner Klasse zu. | 4B |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "Winkel-Intuition (Einstieg)": Welche Kontrolle ist bei trigonometrischen Aufgaben am wichtigsten? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "Winkel-Intuition (Einstieg)" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnv | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "Winkel-Intuition (Einstieg)" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "Winkel-Intuition (Einstieg)" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Winkel-Intuition (Einstieg)"? | ➕ wAE 4B |
| 10 | 🔢 number-input | Drei Winkel eines Dreiecks sind $60°$, $80°$ und $x$. Wie groß ist $x$ in Grad? | 🎯 4B |

#### Winkel und ihre Maße  `trig-1-1` · 10 min

**Lernziele:**
- Grad- und Bogenmaß umrechnen
- Bedeutung von π im Einheitskreis verstehen
- DEG/RAD-Modus am Taschenrechner sicher wählen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie viel Radiant entspricht einem Winkel von $90°$? | wAE 4B |
| 2 | 🔘 multiple-choice | Welcher Winkel im Gradmaß entspricht $pi$ Radiant? | wAE 4B |
| 3 | 🔢 number-input | Eine Welle dreht sich um einen Winkel von $60°$. Welche Bogenlänge legt ein Punkt im Abstand $r = 0{,}5,text{m}$ von der |  |
| 4 | 🔘 multiple-choice | Warum ist das Bogenmaß in technischen Formeln wie s = r·α praktischer als Gradmaß? | ➕ wAE |
| 5 | 🔢 number-input | Rechne 60° ins Bogenmaß um. Gib den Faktor vor π an. | ➕ |
| 6 | ✅ true-false | Bei Kreisweg-Formeln wie s = r·α darf α ohne Umrechnung in Grad eingesetzt werden. | ➕ |
| 7 | 🔗 matching | Ordne die Standardwinkel ihren Bogenmaßen zu. | ➕ |
| 8 | 📋 sorting | Bringe die Umrechnung von 135° nach Radiant in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welcher Fehler erklärt das falsche Ergebnis 90° = 90π rad? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein Winkel beträgt $dfrac{5pi}{6}$ rad. In welchem Quadrant liegt der zugehörige Punkt auf dem Einheitskreis,  | 🎯 wAE |

#### Rechtwinkliges Dreieck  `trig-1-2` · 12 min

**Lernziele:**
- sin, cos, tan als Seitenverhältnisse kennen
- SOH-CAH-TOA anwenden
- Verbindung zum Einheitskreis herstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | In einem rechtwinkligen Dreieck ist $sin(alpha)$ definiert als: | wAE |
| 2 | 🔘 multiple-choice | $cos(alpha)$ ist definiert als: | wAE |
| 3 | 🔘 multiple-choice | $tan(alpha)$ ist definiert als: | wAE |
| 4 | 🔘 multiple-choice | Welche Information musst du kennen, bevor du sin, cos oder tan im rechtwinkligen Dreieck auswählst? | ➕ wAE |
| 5 | 🔢 number-input | Gegenkathete = 6 cm, Hypotenuse = 10 cm. Berechne sin(α). | ➕ |
| 6 | ✅ true-false | Die Hypotenuse liegt immer gegenüber dem rechten Winkel und ist im rechtwinkligen Dreieck die längste Seite. | ➕ |
| 7 | 🔗 matching | Ordne SOH-CAH-TOA zu. | ➕ |
| 8 | 📋 sorting | Ordne den Lösungsweg für eine Seitenberechnung im rechtwinkligen Dreieck. | ➕ |
| 9 | 🔘 multiple-choice | Du rechnest cos(α)=G/H. Was ist daran falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein Dreieck hat Gegenkathete $= 3$, Ankathete $= 4$, Hypotenuse $= 5$. Was ist $sin(alpha)$? | 🎯 wAE |

#### Die Grundwerte  `trig-1-3` · 15 min

**Lernziele:**
- Werte für 0°, 30°, 45°, 60°, 90° auswendig kennen
- Muster in den Grundwerten erkennen
- Grundwerte am Einheitskreis ablesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $sin(30°) = $? | wAE 4B |
| 2 | 🔘 multiple-choice | $cos(60°) = $? | wAE |
| 3 | 🔘 multiple-choice | $sin(45°) = $? | wAE |
| 4 | 🔘 multiple-choice | $tan(45°) = $? | wAE 4B |
| 5 | 🔘 multiple-choice | Warum ist cos(30°) gleich sin(60°)? | ➕ wAE |
| 6 | 🔢 number-input | Ein Mast wirft bei einem Sonnenstand von 60° einen 3 m langen Schatten. Wie hoch ist der Mast in Metern? (√3≈1,732) | ➕ |
| 7 | ✅ true-false | sin(45°) und cos(45°) sind gleich groß. | ➕ |
| 8 | 🔗 matching | Ordne die Grundwerte zu. | ➕ |
| 9 | 🔘 multiple-choice | Welcher der folgenden Sinuswerte ist am größten? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welcher Wert ist FALSCH? | 🎯 wAE |

#### Vorzeichen und Quadranten  `trig-1-4` · 12 min

**Lernziele:**
- Vorzeichen von sin/cos/tan in allen vier Quadranten bestimmen
- Winkel > 90° berechnen
- Reduktionsformeln am Einheitskreis herleiten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Im zweiten Quadranten ($90°$–$180°$) ist: | wAE |
| 2 | 🔘 multiple-choice | $sin(150°) = $? | wAE |
| 3 | 🔘 multiple-choice | Warum ist cos(120°) negativ? | ➕ wAE |
| 4 | 🔢 number-input | Berechne sin(210°). | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne tan(225°). | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $cos(120°) = $? | 🎯 wAE |

### Einheitskreis und Winkelfunktionen (Unit 2)
*Der Einheitskreis als universelle Definition von sin, cos und tan*

5 Lektionen · 50 Aufgaben

#### Der Einheitskreis  `trig-2-1` · 12 min

**Lernziele:**
- Den Einheitskreis als Grundlage verstehen
- Punkte auf dem Einheitskreis einordnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist der Radius des Einheitskreises? | wAE |
| 2 | 🔘 multiple-choice | Ein Punkt $P$ liegt auf dem Einheitskreis beim Winkel $alpha = 0°$. Seine Koordinaten sind: | wAE 4B |
| 3 | 🔘 multiple-choice | Welche Gleichung erfüllt jeder Punkt P=(x,y) auf dem Einheitskreis? | ➕ wAE |
| 4 | 🔢 number-input | P=(0,1) liegt auf dem Einheitskreis. Welchem Winkel in Grad entspricht dieser Punkt? | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Für α=180°: Welche x-Koordinate hat P=(cosα,sinα)? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Koordinaten hat der Punkt auf dem Einheitskreis bei $alpha = 90°$? | 🎯 wAE 4B |

#### sin und cos als Koordinaten  `trig-2-2` · 10 min

**Lernziele:**
- sin und cos als x/y-Koordinaten am Einheitskreis verstehen
- Punkte ↔ Winkel umsetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $cos(alpha)$ entspricht am Einheitskreis: | wAE |
| 2 | 🔘 multiple-choice | Welcher Punkt liegt bei $alpha = 180°$? | wAE 4B |
| 3 | 🔘 multiple-choice | Ein Punkt am Einheitskreis hat P=(-1/2, √3/2). Was ist cos(α)? | ➕ wAE |
| 4 | 🔢 number-input | Für α=270°: Welche y-Koordinate hat P=(cosα,sinα)? | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Für P=(√2/2, √2/2): Gib den Winkel in Grad an. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein Punkt hat die Koordinaten $left(-dfrac{sqrt{2}}{2}, dfrac{sqrt{2}}{2}right)$. Welchem Winkel entspricht da | 🎯 wAE |

#### Symmetrien und Periodizität  `trig-2-3` · 12 min

**Lernziele:**
- Periodizität von sin und cos verstehen
- Symmetrieeigenschaften anwenden
- Reduktionsformeln aus dem Einheitskreis herleiten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $sin(alpha + 360°) = $? | wAE 4B |
| 2 | 🔘 multiple-choice | $sin(-alpha) = $? | wAE |
| 3 | 🔘 multiple-choice | Welche Aussage beschreibt die Periodizität korrekt? | ➕ wAE |
| 4 | 🔢 number-input | Berechne sin(390°). | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne cos(-60°). | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $cos(-alpha) = $? | 🎯 wAE |

#### Tangens im Einheitskreis  `trig-2-4` · 10 min

**Lernziele:**
- Tangens als sin/cos verstehen
- Polstellen von tan erkennen
- Vorzeichen von tan in Quadranten bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was beschreibt $tan(alpha)$ geometrisch am Einheitskreis? | wAE |
| 2 | 🔘 multiple-choice | Warum ist $tan(90°)$ nicht definiert? | wAE |
| 3 | 🔘 multiple-choice | Warum ist tan(90°) nicht definiert? | ➕ wAE |
| 4 | 🔢 number-input | Berechne tan(30°) näherungsweise mit √3≈1,732. Verwende tan30°=1/√3. | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne tan(180°). | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $tan(alpha)$ ist positiv, wenn: | 🎯 wAE |

#### Alle vier Quadranten  `trig-2-5` · 15 min

**Lernziele:**
- Winkel in allen Quadranten berechnen
- Reduktionsformeln anwenden
- Referenzwinkel bilden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | In welchem Quadranten liegt $alpha = 200°$? | wAE 4B |
| 2 | 🔘 multiple-choice | $sin(210°) = $? | wAE |
| 3 | 🔘 multiple-choice | Wie lautet der Referenzwinkel zu 330°? | ➕ wAE |
| 4 | 🔢 number-input | Berechne cos(300°). | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne sin(240°) mit √3≈1,732. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $cos(315°) = $? | 🎯 wAE |

### Anwendungen und Identitäten (Unit 3)
*Additionstheoreme, Doppelwinkel, technische Anwendungen und Umkehrfunktionen*

5 Lektionen · 50 Aufgaben

#### Additionstheoreme  `trig-3-1` · 15 min

**Lernziele:**
- Additionstheoreme für sin und cos kennen
- Anwenden bei konkreten Winkeln

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $sin(alpha + beta) = $? | wAE |
| 2 | 🔘 multiple-choice | $cos(alpha + beta) = $? | wAE |
| 3 | 🔘 multiple-choice | Welche Formel ist korrekt? | ➕ wAE |
| 4 | 🔢 number-input | Berechne sin(75°) näherungsweise mit sin75°=(√6+√2)/4, √6≈2,449, √2≈1,414. | ➕ |
| 5 | ✅ true-false | sin(45°) und cos(45°) sind gleich groß. | ➕ |
| 6 | 🔗 matching | Ordne die Grundwerte zu. | ➕ |
| 7 | 🔘 multiple-choice | Welcher der folgenden Sinuswerte ist am größten? | ➕ wAE |
| 8 | 🔘 multiple-choice | Welcher Grundwert ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne cos(15°) näherungsweise mit cos(45°-30°)=(√6+√2)/4. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Berechne $sin(75°) = sin(45° + 30°)$: | 🎯 wAE |

#### Doppelwinkelformeln und Pythagoreischer Satz  `trig-3-2` · 12 min

**Lernziele:**
- Doppelwinkelformeln anwenden
- sin²+cos²=1 verstehen und nutzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $sin(2alpha) = $? | wAE |
| 2 | 🔘 multiple-choice | $cos(2alpha) = $? | wAE |
| 3 | 🔘 multiple-choice | Welche Formel ist eine gültige Doppelwinkelformel? | ➕ wAE |
| 4 | 🔢 number-input | Wenn sinα=0,6 und cosα=0,8: Berechne sin(2α). | ➕ |
| 5 | ✅ true-false | sin(45°) und cos(45°) sind gleich groß. | ➕ |
| 6 | 🔗 matching | Ordne die Grundwerte zu. | ➕ |
| 7 | 🔘 multiple-choice | Welcher der folgenden Sinuswerte ist am größten? | ➕ wAE |
| 8 | 🔘 multiple-choice | Welcher Grundwert ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Wenn sinα=0,6: Berechne cos²α mit sin²α+cos²α=1. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache: $sin^{2}(alpha) + cos^{2}(alpha)$ | 🎯 wAE |

#### Technische Anwendungen  `trig-3-3` · 15 min

**Lernziele:**
- Kräfte in Komponenten zerlegen
- Schwingungen verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Eine Schwingung $x(t) = A cdot sin(omega t + varphi)$. Was beschreibt $A$? | wAE |
| 2 | 🔘 multiple-choice | Eine Kraft $F = 100$ N wirkt unter Winkel $30°$ zur Horizontalen. Welche horizontale Komponente $F_{x}$ hat sie? | wAE 4B |
| 3 | 🔘 multiple-choice | Eine Kraft ist zur Horizontalen gegeben. Welche Komponente nutzt den Kosinus? | ➕ wAE |
| 4 | 🔢 number-input | F=100 N, α=60° zur Horizontalen. Berechne Fx. | ➕ |
| 5 | ✅ true-false | Die Hypotenuse liegt immer gegenüber dem rechten Winkel und ist im rechtwinkligen Dreieck die längste Seite. | ➕ |
| 6 | 🔗 matching | Ordne SOH-CAH-TOA zu. | ➕ |
| 7 | 📋 sorting | Ordne den Lösungsweg für eine Seitenberechnung im rechtwinkligen Dreieck. | ➕ |
| 8 | 🔘 multiple-choice | Du rechnest cos(α)=G/H. Was ist daran falsch? | ➕ wAE |
| 9 | 🔢 number-input | Schwingung x(t)=4sin(3t+0,2). Welche Amplitude hat sie? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche vertikale Komponente $F_{y}$ hat eine Kraft $F = 200$ N unter $60°$ zur Horizontalen? | 🎯 wAE 4B |

#### Inverse Funktionen  `trig-3-4` · 12 min

**Lernziele:**
- arcsin, arccos, arctan kennen und anwenden
- Definitionsbereiche verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $arcsin(1/2) = $? | wAE 4B |
| 2 | 🔘 multiple-choice | Der Wertebereich (Hauptast) von $arcsin$ ist: | wAE |
| 3 | 🔘 multiple-choice | Warum liefert arcsin(1/2) nicht automatisch alle Lösungen von sin(x)=1/2? | ➕ wAE |
| 4 | 🔢 number-input | Berechne arctan(1) in Grad. | ➕ |
| 5 | ✅ true-false | Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 6 | 🔗 matching | Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 7 | 📋 sorting | Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Warum ist die Aussage sin(150°)=-1/2 falsch? | ➕ wAE |
| 9 | 🔢 number-input | Berechne arccos(-1) in Grad. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $arccos(0) = $? | 🎯 wAE 4B |

#### Sinussatz & Cosinussatz  `trig-3-5` · 14 min

**Lernziele:**
- Sinussatz und Cosinussatz als Verallgemeinerung von SOH-CAH-TOA verstehen
- WWS/SSW-Konfigurationen mit Sinussatz lösen
- SWS/SSS-Konfigurationen mit Cosinussatz lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Formel beschreibt den **Sinussatz** im allgemeinen Dreieck? | wAE |
| 2 | 🔢 number-input | In einem Dreieck gilt $a = 5$, $alpha = 30°$, $beta = 60°$. Wie lang ist die Seite $b$? | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Sinussatz & Cosinussatz": Welche Kontrolle ist bei trigonometrischen Aufgaben am wichtigsten? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Sinussatz & Cosinussatz" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Sinussatz & Cosinussatz" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Sinussatz & Cosinussatz" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Sinussatz & Cosinussatz"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Sinussatz & Cosinussatz" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur d | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Sinussatz & Cosinussatz" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Gegeben: zwei Seiten $b=4$, $c=6$ und der eingeschlossene Winkel $alpha = 60°$. Welcher Satz liefert direkt di | 🎯 wAE 4B |

### 🏁 Prüfungsaufgaben (Unit 4)
*Aufgaben auf TU Wien Prüfungsniveau — Identitäten, Anwendungen, Gleichungen*

3 Lektionen · 30 Aufgaben

#### Prüfung: Identitäten & Gleichungen  `trig-4-1` · 20 min

**Lernziele:**
- Trigonometrische Identitäten umformen
- Gleichungen auf Prüfungsniveau lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache: $sin^{2}(alpha) cdot (1 + cot^{2}(alpha))$ | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Für welchen Winkel $alpha in [0°, 360°)$ gilt: $2 cdot sin(alpha) cdot cos(alpha) = 1$? | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Welche Gleichung ist KEINE trigonometrische Identität? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $cos(alpha)cos(beta) + sin(alpha)sin(beta)$ für $alpha = 75°$, $beta = 30°$. | wAE |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welches Muster steckt in 2sin(α)cos(α)=1? | ➕ wAE |
| 6 | 🔢 number-input | [PRÜFUNG] Löse sin(2α)=1 für α im Intervall [0°,180°]. Gib die kleinere Lösung an. | ➕ |
| 7 | ✅ true-false | [PRÜFUNG] sin(45°) und cos(45°) sind gleich groß. | ➕ |
| 8 | 🔗 matching | [PRÜFUNG] Ordne die Grundwerte zu. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Welcher der folgenden Sinuswerte ist am größten? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Löse: $sin(alpha) = cos(alpha)$ für $alpha in [0°, 360°)$ | 🎯 wAE |

#### Prüfung: Technische Anwendungen  `trig-4-2` · 20 min

**Lernziele:**
- Prüfungsaufgaben zu Kräften und Schwingungen lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Ein Mast ist $20$ m hoch. Der Schatten hat Länge $15$ m. Welchen Winkel $alpha$ bildet die Sonne mit dem Boden | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Eine Kraft $F = 500$ N wirkt unter $37°$ zur Horizontalen. Welche Komponenten $F_{x}$ und $F_{y}$ hat sie ($si | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Eine Schwingung $x(t) = 3 cdot sin(2t + pi/4)$ hat die Amplitude ... und die Kreisfrequenz ... | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Cosinus-Satz: In einem Dreieck gilt $a^{2} = b^{2} + c^{2} - 2bccos(alpha)$. Für $alpha = 60°$, $b = c = 5$: w | wAE 4B |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welche Gleichung passt für die horizontale Kraftkomponente bei Winkel α zur Horizontalen? | ➕ wAE |
| 6 | 🔢 number-input | [PRÜFUNG] F=500 N, cos37°≈0,8. Berechne Fx. | ➕ |
| 7 | ✅ true-false | [PRÜFUNG] Die Hypotenuse liegt immer gegenüber dem rechten Winkel und ist im rechtwinkligen Dreieck die längste Seite. | ➕ |
| 8 | 🔗 matching | [PRÜFUNG] Ordne SOH-CAH-TOA zu. | ➕ |
| 9 | 📋 sorting | [PRÜFUNG] Ordne den Lösungsweg für eine Seitenberechnung im rechtwinkligen Dreieck. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Die Periode einer Schwingung $x(t) = A cdot sin(omega t)$ ist: | 🎯 wAE |

#### Prüfung: Einheitskreis & Gleichungssysteme  `trig-4-3` · 20 min

**Lernziele:**
- Lösungsmengen bestimmen
- Komplexe Umformungen durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Wie viele Lösungen hat $sin(x) = 0{,}5$ im Intervall $[0, 4pi]$? | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Welcher Wert hat $sin(-210°)$? | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $arctan(-1) = $? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Vereinfache: $(sin(alpha) + cos(alpha))^{2} - 1$ | wAE 4B |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Wie viele Lösungen hat sin(x)=1/2 in [0,2π]? | ➕ wAE |
| 6 | 🔢 number-input | [PRÜFUNG] sin(x)=1/2. Gib die kleinere Lösung in Grad im Intervall [0°,360°] an. | ➕ |
| 7 | ✅ true-false | [PRÜFUNG] Im 3. Quadranten sind sin und cos negativ, tan aber positiv. | ➕ |
| 8 | 🔗 matching | [PRÜFUNG] Ordne Quadrant und positives Vorzeichen zu. | ➕ |
| 9 | 📋 sorting | [PRÜFUNG] Löse cos(240°) gedanklich in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $cos(75°)$ in exakter Form: | 🎯 wAE |

<a id="vektoren"></a>
## Vektoren & Analytische Geometrie `vektoren`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** math  
**Prerequisites:** `algebra`, `trigonometry`  
**3 Units** · **12 Lektionen** · **120 Aufgaben** (🔘 59 · 🔢 23 · ✅ 15 · 🔗 13 · 📋 10)

*Vektorrechnung, Geraden, Ebenen, Kreuzprodukt — Grundlage für Statik und Dynamik*

### Vektorrechnung (Unit 1)
*Grundlagen, Skalarprodukt, Kreuzprodukt und Kräfte als Vektoren*

5 Lektionen · 50 Aufgaben

#### Koordinaten, Punkte & Pfeile (Einstieg)  `vek-1-0` · 10 min

**Lernziele:**
- Koordinaten $(x, y)$ in 2D lesen und zeichnen
- Unterschied zwischen Punkt und Vektor verstehen
- Vektor aus zwei Punkten bestimmen ($B - A$)

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Koordinaten hat der Punkt, der 3 Einheiten nach rechts und 2 Einheiten nach oben vom Ursprung liegt? | wAE 4B |
| 2 | ✅ true-false | Ein Punkt und ein Vektor haben im 2D-Koordinatensystem die gleiche Schreibweise $(x, y)$, aber eine unterschiedliche Bed | 4B |
| 3 | 🔘 multiple-choice | Welche Größe ist ein **Vektor** (hat Betrag UND Richtung)? | wAE 4B |
| 4 | 🔗 matching | Ordne jedes Koordinatenpaar dem passenden Quadranten im 2D-Koordinatensystem zu. | 4B |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "Koordinaten, Punkte & Pfeile (Einstieg)": Welche Operation prüft besonders direkt Orthogonalität? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "Koordinaten, Punkte & Pfeile (Einstieg)" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in F | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "Koordinaten, Punkte & Pfeile (Einstieg)" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "Koordinaten, Punkte & Pfeile (Einstieg)" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Koordinaten, Punkte & Pfeile (Einstieg)"? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Ein Vektor $vec{v}$ beschreibt die Verschiebung vom Punkt $A = (1, 2)$ zum Punkt $B = (4, 6)$. Wie lautet $vec{v}$? | 🎯 wAE 4B |

#### Vektoren — Grundbegriffe  `vek-1-1` · 12 min

**Lernziele:**
- Vektor vs. Skalar sicher unterscheiden
- Betrag eines Vektors berechnen
- Vektoraddition und Skalarmultiplikation komponentenweise durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was unterscheidet einen Vektor von einer Zahl (Skalar)? | wAE |
| 2 | 🔘 multiple-choice | Gegeben: $vec{a} = (3, 4)$. Was ist der Betrag $\|vec{a}\|$? | wAE 4B |
| 3 | 🔘 multiple-choice | $vec{a} = (2, 3)$, $vec{b} = (1, -1)$. Was ist $vec{a} + vec{b}$? | wAE |
| 4 | 🔘 multiple-choice | Was ist das Ergebnis von $vec{a}$ + $vec{b}$ mit $vec{a}$ = (3, −1) und $vec{b}$ = (−2, 4)? | ➕ wAE |
| 5 | 🔢 number-input | Berechne den Betrag von $vec{a}$ = (5, 12). | ➕ |
| 6 | ✅ true-false | Die Skalarmultiplikation 2·$vec{a}$ = (2·ax, 2·ay) verdoppelt den Betrag des Vektors, ändert aber nicht seine Richtung. | ➕ |
| 7 | 🔗 matching | Ordne den Vektoroperationen ihre Ergebnistypen zu. | ➕ |
| 8 | 📋 sorting | Bringe die Schritte zur Berechnung von \|3·$vec{a}$\| mit $vec{a}$ = (4, 3) in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welcher Rechenschritt beim Betrag von $vec{a}$ = (3, 4) ist falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Gegeben $vec{a} = (3, 4)$. Berechne $\|2vec{a}\|$ (Betrag des doppelten Vektors). | 🎯 wAE |

#### Skalarprodukt  `vek-1-2` · 15 min

**Lernziele:**
- Skalarprodukt in Komponenten- und Winkelform berechnen
- Winkel zwischen Vektoren bestimmen
- Orthogonalität per Skalarprodukt erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Das Skalarprodukt $vec{a} cdot vec{b}$ mit $vec{a} = (2, 3)$ und $vec{b} = (1, -2)$ ist: | wAE 4B |
| 2 | 🔘 multiple-choice | Es gilt $vec{a} cdot vec{b} = \|vec{a}\| cdot \|vec{b}\| cdot cos(varphi)$. Was bedeutet $vec{a} cdot vec{b} = 0$ (für $ | wAE 4B |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Berechne den Winkel zwischen $vec{a} = (1, 0)$ und $vec{b} = (1, 1)$. | wAE 4B |
| 4 | 🔢 number-input | Projektion: Wie lang ist die Projektion des Vektors $vec{a} = (3, 4)$ auf den Einheitsvektor $hat{e}_x = (1, 0)$? | 4B |
| 5 | 🔘 multiple-choice | Warum ist das Skalarprodukt zweier Vektoren eine Zahl und kein Vektor? | ➕ wAE |
| 6 | 🔢 number-input | Berechne $vec{a}$·$vec{b}$ für $vec{a}$ = (2, 1, 3) und $vec{b}$ = (4, −2, 1). | ➕ |
| 7 | ✅ true-false | Gilt $vec{a}$·$vec{b}$ = 0, so stehen $vec{a}$ und $vec{b}$ senkrecht aufeinander (sofern beide nicht der Nullvektor sin | ➕ |
| 8 | 🔗 matching | Ordne Winkel und Skalarproduktvorzeichen zu. | ➕ |
| 9 | 📋 sorting | Bringe die Schritte zur Winkelberechnung zwischen $vec{a}$ = (1,0) und $vec{b}$ = (1,1) in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Die Arbeit $W = vec{F} cdot vec{s}$ bei $vec{F} = (10, 0),text{N}$ und $vec{s} = (3, 4),text{m}$ ist: | 🎯 wAE |

#### Kreuzprodukt  `vek-1-3` · 12 min

**Lernziele:**
- Kreuzprodukt mit der Komponentenformel berechnen
- Normalvektor einer Ebene bestimmen
- Skalar- und Kreuzprodukt sicher unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Das Kreuzprodukt $vec{a} times vec{b}$ ergibt: | wAE |
| 2 | 🔘 multiple-choice | Es gilt $\|vec{a} times vec{b}\| = \|vec{a}\| cdot \|vec{b}\| cdot sin(varphi)$. Was ist $\|vec{a} times vec{b}\|$, wenn | wAE |
| 3 | 🔘 multiple-choice | Was ist das Kreuzprodukt $vec{a}$ × $vec{b}$ von $vec{a}$ = (1, 0, 0) und $vec{b}$ = (0, 0, 1)? | ➕ wAE |
| 4 | 🔢 number-input | Berechne den Betrag von $vec{a}$ × $vec{b}$ für $vec{a}$ = (2, 0, 0) und $vec{b}$ = (0, 3, 0). | ➕ |
| 5 | ✅ true-false | Das Kreuzprodukt ist kommutativ: $vec{a}$ × $vec{b}$ = $vec{b}$ × $vec{a}$. | ➕ |
| 6 | 🔗 matching | Ordne Kreuzprodukt-Ergebnisse den Einheitsvektorpaaren zu. | ➕ |
| 7 | 📋 sorting | Bringe die Berechnung von $vec{a}$ × $vec{b}$ für $vec{a}$ = (1, 2, 3), $vec{b}$ = (4, 5, 6) in die richtige Reihenfolge | ➕ |
| 8 | 🔘 multiple-choice | Was ist am Ergebnis $vec{a}$ × $vec{b}$ = 7 (eine Zahl) falsch? | ➕ wAE |
| 9 | 🔢 number-input | Drehmoment: $vec{r}$ = (0, 0.4, 0) m, $vec{F}$ = (200, 0, 0) N. Berechne \|$vec{M}$\| = \|$vec{r}$ × $vec{F}$\| in Nm. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Das Kreuzprodukt der Einheitsvektoren $hat{e}_1 times hat{e}_2$ (x- und y-Richtung) ergibt: | 🎯 wAE |

#### Kräfte als Vektoren (Prüfung)  `vek-1-4` · 18 min

**Lernziele:**
- Kräfte vektoriell addieren
- Gleichgewichtsbedingungen aufstellen
- Einheitsvektoren berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Drei Kräfte: $vec{F}_1 = (10, 0),text{N}$, $vec{F}_2 = (0, 5),text{N}$, $vec{F}_3 = (-3, -2),text{N}$. Resulti | wAE 4B |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Gleichgewicht: Eine Masse hängt an zwei Seilen mit Kräften $vec{F}_1 = (-F_1 sin 30°,, F_1 cos 30°)$ und $vec{ | wAE |
| 3 | 🔘 multiple-choice | Was ist die Gleichgewichtsbedingung für Kräfte in der Ebene? | ➕ wAE |
| 4 | 🔢 number-input | Resultierende $vec{R}$ = $vec{F}$₁ + $vec{F}$₂ + $vec{F}$₃ mit $vec{F}$₁=(5,0) N, $vec{F}$₂=(0,8) N, $vec{F}$₃=(−3,−2) N | ➕ |
| 5 | ✅ true-false | Zwei Kräfte $vec{F}$₁ = (3, 4) N und $vec{F}$₂ = (−3, −4) N halten sich gegenseitig im Gleichgewicht. | ➕ |
| 6 | 🔗 matching | Ordne die Kraftzerlegungsformeln bei Winkel α zur Horizontalen zu. | ➕ |
| 7 | 📋 sorting | Löse die Aufgabe: Kraft F = 50 N unter 30° zur Horizontalen. Berechne Fx. | ➕ |
| 8 | 🔘 multiple-choice | Kraft F = 100 N unter 60° zur Horizontalen. Jemand rechnet Fx = F·sin(60°) = 86,6 N. Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Normiere den Vektor $vec{a}$ = (3, 4). Wie groß ist die x-Komponente des Einheitsvektors? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein Einheitsvektor hat Betrag ... und wird aus $vec{a} neq vec{0}$ berechnet durch ... | 🎯 wAE |

### Geraden und Ebenen im Raum (Unit 2)
*Geradengleichung, Ebenenformen, Abstände und Schnitte*

4 Lektionen · 40 Aufgaben

#### Geradengleichung  `vek-2-1` · 15 min

**Lernziele:**
- Parameterform einer Geraden aufstellen
- Punkte auf einer Geraden testen
- Lage zweier Geraden sicher klassifizieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Form hat eine Geradengleichung in Parameterform? | wAE |
| 2 | 🔘 multiple-choice | Gerade $gcolon vec{r} = (1,2,3) + t cdot (2,0,1)$. Welcher Punkt liegt auf $g$? | wAE |
| 3 | 🔘 multiple-choice | Zwei Geraden haben Richtungsvektoren $vec{v}_1 = (1, 2, 3)$ und $vec{v}_2 = (2, 4, 6)$. Wie liegen die Geraden zueinande | wAE |
| 4 | 🔘 multiple-choice | Gerade g: $vec{r}$ = (2, 0, 1) + t·(1, 3, −1). Welcher Punkt liegt auf g? | ➕ wAE |
| 5 | 🔢 number-input | Gerade g: $vec{r}$ = (1, 2, 3) + t·(2, −1, 0). Für welchen t-Wert hat $vec{r}$ die x-Koordinate 7? | ➕ |
| 6 | ✅ true-false | Zwei Geraden im Raum mit parallelen Richtungsvektoren sind immer identisch. | ➕ |
| 7 | 🔗 matching | Ordne die Lagebeziehungen zweier Geraden im Raum ihren Kriterien zu. | ➕ |
| 8 | 📋 sorting | Prüfe, ob g₁: $vec{r}$ = (0,0,0)+t·(1,1,0) und g₂: $vec{r}$ = (1,0,1)+s·(1,1,0) parallel sind. | ➕ |
| 9 | 🔘 multiple-choice | g₁: $vec{r}$ = t·(1,0,0), g₂: $vec{r}$ = (0,1,0) + s·(1,0,0). Jemand schlussfolgert: "gleiche Richtung → identisch". Was | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Zwei Geraden im Raum sind weder parallel noch schneiden sie sich. Wie nennt man diese Lage? | 🎯 wAE |

#### Ebenengleichung  `vek-2-2` · 18 min

**Lernziele:**
- Parameter-, Normal- und Koordinatenform einer Ebene aufstellen
- Zwischen den Darstellungsformen umrechnen
- Normalvektor aus zwei Richtungsvektoren bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie viele Richtungsvektoren braucht die Parameterform einer Ebene? | wAE |
| 2 | 🔘 multiple-choice | Was beschreibt die Normalenform $vec{n} cdot (vec{r} - vec{p}) = 0$? | wAE |
| 3 | 🔘 multiple-choice | Welche Koordinatenform gehört zum Normalvektor $vec{n} = (2, -1, 3)$ und Stützpunkt $vec{p} = (1, 0, 1)$? | wAE 4B |
| 4 | ✅ true-false | Aus der Parameterform einer Ebene erhält man den Normalvektor durch das Kreuzprodukt der beiden Richtungsvektoren. |  |
| 5 | 🔘 multiple-choice | Welche Information liefert der Normalenvektor einer Ebene? | ➕ wAE |
| 6 | 🔢 number-input | Ebene E: 4x − 2y + z = 8. Welche z-Koordinate hat der Punkt P = (1, 2, ?) auf E? | ➕ |
| 7 | ✅ true-false | Man erhält den Normalenvektor einer Ebene in Parameterform durch das Kreuzprodukt der beiden Richtungsvektoren. | ➕ |
| 8 | 🔗 matching | Ordne die Ebenenform der passenden Eigenschaft zu. | ➕ |
| 9 | 📋 sorting | Bestimme die Koordinatenform der Ebene durch $vec{p}$=(1,0,0), $vec{u}$=(0,1,0), $vec{v}$=(0,0,1). | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ebene $Ecolon 3x + 2y - z = 6$. Was ist der Normalvektor? | 🎯 wAE 4B |

#### Abstände und Schnitte  `vek-2-3` · 20 min

**Lernziele:**
- Abstand Punkt–Ebene berechnen
- Abstand Punkt–Gerade berechnen
- Schnittpunkt Gerade–Ebene bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie berechnet man den Abstand eines Punktes $Q$ zu einer Ebene mit Normalvektor $vec{n}$ und Stützpunkt $P$? | wAE |
| 2 | 🔢 number-input | Ebene $Ecolon 2x + 2y + z = 9$. Punkt $Q = (1, 1, 1)$. Berechne den Abstand $d$ von $Q$ zu $E$. | 4B |
| 3 | 🔘 multiple-choice | Gerade $gcolon vec{r} = (0, 0, 0) + t cdot (1, 1, 1)$. Ebene $Ecolon x + y + z = 6$. Für welchen Parameter $t$ schneidet | wAE 4B |
| 4 | 🔢 number-input | Gerade $gcolon vec{r} = (1, 0, 0) + t cdot (1, 1, 1)$. Ebene $Ecolon x + y + z = 6$. Berechne den Parameter $t$ des Schn | 4B |
| 5 | 🔘 multiple-choice | Warum dividiert man beim Abstand Punkt–Ebene durch \|$vec{n}$\|? | ➕ wAE |
| 6 | 🔢 number-input | Abstand von Q = (2, 1, 0) zur Ebene E: x + 2y + 2z = 9. Berechne den Abstand d. | ➕ |
| 7 | ✅ true-false | Wenn eine Gerade parallel zu einer Ebene verläuft, hat der Schnittpunktparameter t keine Lösung (Ebenengleichung führt z | ➕ |
| 8 | 🔗 matching | Ordne das geometrische Ergebnis beim Schnitt Gerade–Ebene der algebraischen Situation zu. | ➕ |
| 9 | 📋 sorting | Berechne den Schnitt von g: $vec{r}$=(0,0,0)+t·(1,1,1) mit E: x+y+z=3. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Abstand des Punktes $Q = (2, 0, 3)$ von der Ebene $Ecolon 2x - y + 2z = 1$. Gib den Abstand an. | 🎯 |

#### Prüfungsaufgaben Analytische Geometrie  `vek-2-4` · 25 min

**Lernziele:**
- Lagebeziehungen sicher bestimmen
- Abstands- und Schnittaufgaben lösen
- Prüfungsniveau erreichen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $g_1colon vec{r} = (1, 0, 2) + t cdot (1, 1, 0)$, $g_2colon vec{r} = (0, 1, 2) + s cdot (-1, 1, 0)$. Wie liege | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Gegeben: Ebene $Ecolon 2x - y + 2z = 10$ und Punkt $P = (1, 2, 3)$. Welcher Punkt auf $E$ liegt $P$ am nächste | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Zwei Ebenen $E_1colon x + y + z = 1$ und $E_2colon 2x + 2y + 2z = 5$. Wie liegen sie zueinander? | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Abstand der parallelen Ebenen $E_1colon x + y + z = 1$ und $E_2colon x + y + z = 4$. Berechne den Abstand. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Eine Gerade steht senkrecht auf einer Ebene. Welcher Zusammenhang gilt zwischen Richtungsvektor $vec{v}$ der G | wAE |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Wie bestimmt man den Richtungsvektor der Schnittgeraden von zwei Ebenen E₁ und E₂? | ➕ wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Abstand von Q = (3, 1, 2) zur Ebene E: 2x − y + 2z = 6. Berechne d. | ➕ |
| 8 | ✅ true-false | [PRÜFUNG] Zwei Ebenen mit Normalenvektoren $vec{n}$₁ = (1,2,3) und $vec{n}$₂ = (2,4,6) sind parallel. | ➕ |
| 9 | 🔗 matching | [PRÜFUNG] Ordne die Lagebeziehungen zweier Ebenen den Normalenvektor-Kriterien zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Schnittgerade zweier Ebenen $E_1colon x + y = 2$ und $E_2colon y + z = 3$. Der Richtungsvektor der Schnittgera | 🎯 wAE |

### 🏁 Prüfungsvorbereitung Vektoren (Unit 3)
*Gemischte Aufgaben, Flächen- und Volumenberechnung, technische Anwendungen*

3 Lektionen · 30 Aufgaben

#### Gemischte Aufgaben Skalar- und Kreuzprodukt  `vek-3-1` · 20 min

**Lernziele:**
- Skalar- und Kreuzprodukt sicher unterscheiden
- Winkel zwischen Vektoren bestimmen
- Rechenregeln (Kommutativität, Antikommutativität) sicher anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $vec{a} = (1, 2, 2)$, $vec{b} = (2, 1, 1)$. Berechne $vec{a} cdot vec{b}$. | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $vec{a} = (3, 0, 4)$. Berechne den Betrag $\|vec{a}\|$. | 4B |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $vec{a} = (1, 0, 0)$, $vec{b} = (0, 1, 0)$. Was ist $vec{a} times vec{b}$? | wAE 4B |
| 4 | 🔘 multiple-choice | [PRÜFUNG] $vec{a} = (2, 1, -1)$, $vec{b} = (1, 3, 2)$. Was ist $vec{a} times vec{b}$? | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Das Kreuzprodukt ist kommutativ: $vec{a} times vec{b} = vec{b} times vec{a}$. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] $vec{a}$ = (1, 2, 2), $vec{b}$ = (2, −1, 2). Welchen Winkel schließen sie ein? | ➕ wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Berechne den Betrag von $vec{a}$ = (2, 6, 3). | ➕ |
| 8 | ✅ true-false | [PRÜFUNG] Das Skalarprodukt $vec{a}$·$vec{b}$ kann negativ sein, wenn der Winkel zwischen den Vektoren größer als 90° is | ➕ |
| 9 | 🔗 matching | [PRÜFUNG] Ordne die Rechenoperationen ihrem Ergebnistyp zu. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Winkel zwischen $vec{a} = (1, 1, 0)$ und $vec{b} = (0, 1, 1)$ in Grad. Runde auf ganze Grad. | 🎯 |

#### Flächen- und Volumenberechnung  `vek-3-2` · 15 min

**Lernziele:**
- Parallelogrammfläche mit Kreuzprodukt berechnen
- Dreiecksfläche als halbes Kreuzprodukt
- Spatprodukt für Volumen anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Die Fläche des von $vec{a}$ und $vec{b}$ aufgespannten Parallelogramms ist: | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $vec{a} = (3, 0, 0)$, $vec{b} = (0, 4, 0)$. Berechne die Parallelogrammfläche $A = \|vec{a} times vec{b}\|$. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Das Volumen eines Spats (Parallelepiped) aus $vec{a}, vec{b}, vec{c}$ wird berechnet durch: | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Gerade g: $vec{r}$ = (0,1,0) + t·(1,0,1). Ebene E: x + z = 4. Für welches t schneidet g die Ebene E? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Abstand von Q = (1, 0, 0) zur Ebene E: 3x + 4z = 15. Berechne d. | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Wenn eine Gerade einen Richtungsvektor $vec{v}$ hat, der senkrecht auf dem Normalenvektor $vec{n}$ einer Ebene | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Situation beim Schnitt Gerade–Ebene dem algebraischen Ergebnis zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Finde den Schnittpunkt von g: $vec{r}$=(1,0,0)+t·(0,1,1) und E: y+z=4. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Für g: $vec{r}$=(0,0,0)+t·(1,2,3) und E: x+2y+3z=0 behauptet jemand, es gibt keinen Schnittpunkt. Was ist fals | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] $vec{a} = (1, 0, 0)$, $vec{b} = (0, 1, 0)$, $vec{c} = (0, 0, 3)$. Berechne das Spatvolumen $V = \|vec{a} cdot  | 🎯 |

#### Technische Anwendungen  `vek-3-3` · 18 min

**Lernziele:**
- Drehmoment als Kreuzprodukt berechnen
- Kräftezerlegung an der schiefen Ebene
- Vektoren in technischen Aufgaben anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Das Drehmoment wird berechnet durch: | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Hebelarm $vec{r} = (0{,}5,, 0,, 0),text{m}$, Kraft $vec{F} = (0,, 100,, 0),text{N}$. Berechne $\|vec{M}\| = \| |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Eine Gewichtskraft $\|vec{G}\| = 100,text{N}$ wirkt vertikal auf einen Körper auf einer Rampe mit Neigungswink | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Warum ist das Kreuzprodukt besonders nützlich für Flächenberechnungen? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Fläche des Parallelogramms aus $vec{a}$ = (3, 0, 0) und $vec{b}$ = (0, 0, 5). Berechne A = \|$vec{a}$ × $vec{b | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Das Spatprodukt V = \|$vec{a}$·($vec{b}$ × $vec{c}$)\| gibt das Volumen des von den drei Vektoren aufgespannte | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Formel der geometrischen Größe zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Berechne das Drehmoment $vec{M}$ = $vec{r}$ × $vec{F}$ für $vec{r}$ = (1,0,0) m und $vec{F}$ = (0,10,0) N. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Jemand berechnet die Dreiecksfläche aus $vec{a}$=(2,0,0), $vec{b}$=(0,3,0) als A = \|$vec{a}$ × $vec{b}$\| = 6 | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein Kran hebt eine Last mit $vec{F} = (0, 0, -500),text{N}$. Der Seilansatzpunkt liegt bei $vec{r} = (3, 4, 0) | 🎯 wAE |

<a id="ableitung"></a>
## Differentialrechnung `ableitung`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** math  
**Prerequisites:** `algebra`, `trigonometry`  
**5 Units** · **18 Lektionen** · **183 Aufgaben** (🔘 104 · 🔢 29 · ✅ 24 · 🔗 18 · 📋 8)

*Ableitungsbegriff, Rechenregeln, Kurvendiskussion, Grenzwerte & Stetigkeit — zentral für technische Anwendungen*

### Grundlagen der Differentialrechnung (Unit 1)
*Ableitungsbegriff, Potenzregel, elementare Ableitungen, Kettenregel*

5 Lektionen · 50 Aufgaben

#### Was ist eine Ableitung?  `abl-1-1` · 12 min

**Lernziele:**
- Ableitung als Steigung der Tangente verstehen
- Differenzenquotient interpretieren
- Notwendige Bedingung für Extrema erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was beschreibt die Ableitung $f'(x)$ geometrisch? | wAE 4B |
| 2 | 🔘 multiple-choice | Der Differenzenquotient $dfrac{f(x+h) - f(x)}{h}$ beschreibt für $h to 0$: | wAE 4B |
| 3 | 🔘 multiple-choice | An welcher Stelle ist $f'(x) = 0$ eine **notwendige** Bedingung? | wAE 4B |
| 4 | 🔘 multiple-choice | Warum ist die Bedingung $f'(x_0) = 0$ *notwendig*, aber *nicht hinreichend* für ein lokales Extremum? | wAE 4B |
| 5 | 🔘 multiple-choice | Was beschreibt der Differenzenquotient [f(x+h) − f(x)] / h geometrisch? | ➕ wAE |
| 6 | 🔢 number-input | Berechne den Differenzenquotienten von f(x) = x² zwischen x = 2 und x+h = 3. Gib die mittlere Steigung an. | ➕ |
| 7 | ✅ true-false | Wenn f'(x₀) = 0, dann hat f bei x₀ zwingend ein lokales Extremum. | ➕ |
| 8 | 🔗 matching | Ordne den Begriff seinem geometrischen Objekt zu. | ➕ |
| 9 | 📋 sorting | Bringe die Herleitung von f'(x) für f(x) = x² in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Für eine Funktion $f$ gilt: $f'(2) = 0$ und $f''(2) > 0$. Was folgt daraus? | 🎯 wAE |

#### Potenzregel und Summenregel  `abl-1-2` · 15 min

**Lernziele:**
- Polynome ableiten
- Potenzregel und Summenregel anwenden
- Wurzeln und Kehrwerte als Potenzen behandeln

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist $(x^{n})'$? | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = 3x^{2} + 5x - 2$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = sqrt{x} = x^{1/2}$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔘 multiple-choice | Was ist $left(dfrac{1}{x}right)' = (x^{-1})'$? | wAE 4B |
| 5 | 🔘 multiple-choice | Warum wirkt die Potenzregel $(x^{n})' = n x^{n-1}$ auch für negative und gebrochene Exponenten (nicht nur ganzzahlige $n | wAE 4B |
| 6 | 🔘 multiple-choice | Was ist die Ableitung von f(x) = 5x³ − 2x + 7? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = 2x⁴ − 3x² + 7. Berechne f'(2). | ➕ |
| 8 | ✅ true-false | Die Ableitung von f(x) = x^(−2) ist f'(x) = −2x^(−3). | ➕ |
| 9 | 🔗 matching | Ordne die Funktion ihrer Ableitung zu. | ➕ |
| 10 | 🔘 multiple-choice | $f(x) = 2x^{4} - 3x^{2} + 7$. Berechne $f'(2)$. | 🎯 wAE 4B |

#### Ableitungen elementarer Funktionen  `abl-1-3` · 12 min

**Lernziele:**
- sin, cos, $e^{x}$, ln ableiten
- Ableitungstabelle auswendig kennen
- Definitionsbereiche beachten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist $(sin x)'$? | wAE |
| 2 | 🔘 multiple-choice | Was ist $(cos x)'$? | wAE 4B |
| 3 | 🔘 multiple-choice | Was ist $(e^{x})'$? | wAE 4B |
| 4 | 🔘 multiple-choice | Was ist $(ln x)'$? | wAE 4B |
| 5 | 🔘 multiple-choice | Welche Annahme ist kritisch, damit die Formel $(ln x)' = 1/x$ überhaupt Sinn ergibt? | wAE 4B |
| 6 | 🔘 multiple-choice | Welche Funktion ist ihre eigene Ableitung? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = sin(x) + eˣ − 3x². Berechne f'(0). | ➕ |
| 8 | ✅ true-false | Die Ableitung von f(x) = ln(x) ist f'(x) = 1/x und gilt für alle reellen x. | ➕ |
| 9 | 🔗 matching | Ordne die Funktion ihrer Ableitung zu. | ➕ |
| 10 | 🔘 multiple-choice | $f(x) = sin(x) + e^{x} - 3x^{2}$. Was ist $f'(x)$? | 🎯 wAE 4B |

#### Kettenregel  `abl-1-4` · 15 min

**Lernziele:**
- Kettenregel verstehen und anwenden
- Verkettete Funktionen ableiten
- Rolle der inneren Ableitung verinnerlichen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Kettenregel: $[f(g(x))]' = $ | wAE |
| 2 | 🔘 multiple-choice | $f(x) = sin(3x)$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = e^{x^{2}}$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔘 multiple-choice | $f(x) = (2x + 1)^{5}$. Was ist $f'(x)$? | wAE 4B |
| 5 | 🔘 multiple-choice | Was passiert, wenn man bei $f(x) = sin(3x)$ die *innere Ableitung* ($3$) in der Kettenregel weglässt? | wAE 4B |
| 6 | 🔘 multiple-choice | f(x) = e^(3x²). Welche Ableitung ist korrekt? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = sin(2x). Berechne f'(π/4). Hinweis: cos(π/2) = 0. | ➕ |
| 8 | ✅ true-false | Für f(x) = (x²+1)³ gilt f'(x) = 3(x²+1)². | ➕ |
| 9 | 🔗 matching | Ordne die verkettete Funktion ihrer Ableitung zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = cos(x^{2}+1)$. $f'(x) = $ | 🎯 wAE 4B |

#### Extremwerte und Kurvendiskussion  `abl-1-5` · 20 min

**Lernziele:**
- Extrema mit Ableitungen bestimmen
- Wendepunkte identifizieren
- Kurvendiskussion durchführen
- Notwendige und hinreichende Bedingungen unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Extrema: Notwendige Bedingung für ein lokales Extremum bei $x_{0}$ ist: | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = x^{2} - 4x + 3$. Wo liegt das Minimum? | wAE 4B |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Wendepunkt: $f$ hat einen Wendepunkt bei $x_{0}$, wenn: | wAE 4B |
| 4 | 🔘 multiple-choice | Warum ist der $f''$-Test ($f''(x_0) < 0 Rightarrow$ Max, $f''(x_0) > 0 Rightarrow$ Min) bei $f''(x_{0}) = 0$ *nicht hinr | wAE 4B |
| 5 | 🔘 multiple-choice | f(x) = x³ − 3x. f'(x) = 3x² − 3 = 0 ergibt x = ±1. Was gilt bei x = 1? | ➕ wAE |
| 6 | 🔢 number-input | f(x) = x² − 4x + 3. An welcher Stelle liegt das lokale Minimum? Gib den x-Wert an. | ➕ |
| 7 | ✅ true-false | f''(x₀) < 0 ist hinreichend für ein lokales Maximum bei x₀, wenn f'(x₀) = 0. | ➕ |
| 8 | 🔗 matching | Ordne das Vorzeichen von f''(x₀) der Extremstelle zu. | ➕ |
| 9 | 📋 sorting | Bestimme die Extrema von f(x) = x³ − 3x in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^{3} - 3x$. Bestimme alle lokalen Extrema. | 🎯 wAE 4B |

### Ableitungsregeln im Detail (Unit 2)
*Produktregel, Quotientenregel, Kettenregel vertieft, gemischte Aufgaben*

4 Lektionen · 40 Aufgaben

#### Produktregel  `abl-2-1` · 15 min

**Lernziele:**
- Produktregel verstehen und anwenden
- Produkte von Funktionen ableiten
- Fehler "$(fg)' = f'g'$" erkennen und vermeiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Produktregel: $(f cdot g)' = $ | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = x^{2} cdot sin(x)$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = e^{x} cdot ln(x)$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔢 number-input | $f(x) = x cdot e^{x}$. Berechne $f'(1)$ (auf 2 Dezimalstellen). | 4B |
| 5 | 🔘 multiple-choice | Was passiert, wenn man beim Ableiten eines Produkts $f cdot g$ fälschlich $(f cdot g)' = f' cdot g'$ verwendet? | wAE 4B |
| 6 | 🔘 multiple-choice | f(x) = x²·eˣ. Was ist f'(x)? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = x·eˣ. Berechne f'(1) auf 2 Dezimalstellen. (e ≈ 2,718) | ➕ |
| 8 | ✅ true-false | Die Ableitung des Produkts (f·g)' ist gleich f'·g'. | ➕ |
| 9 | 🔗 matching | Ordne die Funktion ihrer Ableitung via Produktregel zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = (3x+1) cdot cos(x)$. Was ist $f'(x)$? | 🎯 wAE 4B |

#### Quotientenregel  `abl-2-2` · 15 min

**Lernziele:**
- Quotientenregel anwenden
- Brüche von Funktionen ableiten
- Verbindung zur Produktregel verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Quotientenregel: $left(dfrac{f}{g}right)' = $ | wAE |
| 2 | 🔘 multiple-choice | $f(x) = dfrac{x}{x+1}$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = dfrac{sin(x)}{x}$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔘 multiple-choice | $f(x) = dfrac{e^{x}}{x^{2}}$. Was ist $f'(x)$? | wAE 4B |
| 5 | 🔘 multiple-choice | Warum ist die Quotientenregel im Grunde nur eine Umformulierung der Produktregel? | wAE 4B |
| 6 | 🔘 multiple-choice | f(x) = sin(x)/eˣ. Was ist f'(x)? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = x/(x+1). Berechne f'(2) als gekürzten Bruch. Gib den Dezimalwert an. | ➕ |
| 8 | ✅ true-false | Die Quotientenregel lautet (u/v)' = (u'v + uv')/v². | ➕ |
| 9 | 🔗 matching | Ordne die Funktion ihrer Ableitung zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = tan(x) = dfrac{sin(x)}{cos(x)}$. Leite mit der Quotientenregel ab. $f'(x) = $ | 🎯 wAE 4B |

#### Kettenregel — Schritt für Schritt  `abl-2-3` · 20 min

**Lernziele:**
- Kettenregel sicher anwenden
- Innere und äußere Funktion identifizieren
- Mehrfach verkettete Funktionen ableiten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Kettenregel: Bei $f(x) = sin(3x^{2})$ — was ist die äußere, was die innere Funktion? | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = (5x^{3} - 2x)^{4}$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = e^{sin(x)}$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔘 multiple-choice | $f(x) = ln(x^{2} + 1)$. Was ist $f'(x)$? | wAE 4B |
| 5 | 🔢 number-input | $f(x) = sqrt{4x+1} = (4x+1)^{1/2}$. Berechne $f'(2)$ (auf 2 Dezimalstellen). | 4B |
| 6 | 🔘 multiple-choice | Bei mehrfach verketteten Funktionen wie $f(x) = e^{cos(3x)}$ — warum muss man die Kettenregel *mehrfach* anwenden, nicht | wAE 4B |
| 7 | 🔘 multiple-choice | f(x) = sin(3x²). Welche Identifikation ist korrekt? | ➕ wAE |
| 8 | 🔢 number-input | f(x) = e^(−2x). Berechne f'(0). | ➕ |
| 9 | ✅ true-false | f(x) = ln(x²+1) hat die Ableitung f'(x) = 1/(x²+1). | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Doppelte Kettenregel: $f(x) = e^{cos(3x)}$. Was ist $f'(x)$? | 🎯 wAE 4B |

#### Gemischte Regeln  `abl-2-4` · 18 min

**Lernziele:**
- Alle Ableitungsregeln kombiniert anwenden
- Komplexere Funktionen sicher ableiten
- Struktur erkennen und richtige Regel zuerst wählen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $f(x) = x^{2} cdot e^{3x}$. Welche Regeln brauchst du? | wAE 4B |
| 2 | 🔘 multiple-choice | $f(x) = x^{2} cdot e^{3x}$. Was ist $f'(x)$? | wAE 4B |
| 3 | 🔘 multiple-choice | $f(x) = dfrac{sin(2x)}{x+1}$. Was ist $f'(x)$? | wAE 4B |
| 4 | 🔢 number-input | $f(x) = (x+1)^{3} cdot ln(x)$. Berechne $f'(1)$ (auf 1 Dezimalstelle). | 4B |
| 5 | 🔘 multiple-choice | Warum ist der Ansatz "erst die äußerste Struktur identifizieren" bei kombinierten Ableitungsregeln entscheidend? | wAE 4B |
| 6 | 🔘 multiple-choice | f(x) = x²·sin(3x). Welche Regeln werden benötigt? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = eˣ·sin(x). Berechne f'(π/2) näherungsweise. (e^(π/2) ≈ 4,81, sin(π/2) = 1, cos(π/2) = 0) | ➕ |
| 8 | ✅ true-false | Bei f(x) = sin(x)/eˣ darf man Kettenregel und Quotientenregel nicht kombinieren. | ➕ |
| 9 | 🔗 matching | Ordne die Funktion der Hauptregel zu, die benötigt wird. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = dfrac{e^{2x}}{sqrt{x}}$. Vereinfache $f'(x)$. | 🎯 wAE 4B |

### Kurvendiskussion (Unit 3)
*Monotonie, Extremwerte, Wendepunkte, vollständige Kurvendiskussion*

4 Lektionen · 40 Aufgaben

#### Monotonie und Extremwerte  `abl-3-1` · 18 min

**Lernziele:**
- Monotonie mit f' bestimmen
- Lokale Extrema mit f' und f'' bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $f'(x) > 0$ auf einem Intervall bedeutet: | wAE |
| 2 | 🔘 multiple-choice | Notwendige Bedingung für ein lokales Extremum bei $x_0$: | wAE |
| 3 | 🔘 multiple-choice | $f'(x_0) = 0$ und $f''(x_0) > 0$. Was liegt bei $x_0$ vor? | wAE |
| 4 | 🔢 number-input | $f(x) = x^3 - 6x^2 + 9x + 1$. An welcher Stelle $x$ liegt das lokale Maximum? |  |
| 5 | ✅ true-false | Wenn $f$ auf einem Intervall $f'(x) geq 0$ erfüllt (mit $=0$ nur an einzelnen Punkten), dann ist $f$ dort monoton steige |  |
| 6 | 🔘 multiple-choice | f'(x) wechselt bei x₀ das Vorzeichen von + nach −. Was bedeutet das? | ➕ wAE |
| 7 | 🔢 number-input | f(x) = x³ − 6x² + 9x + 1. Bestimme die x-Koordinate des lokalen Maximums. | ➕ |
| 8 | ✅ true-false | f'(x) > 0 für alle x im Intervall (a,b) bedeutet, dass f auf (a,b) streng monoton steigend ist. | ➕ |
| 9 | 🔗 matching | Ordne das Vorzeichen von f'(x) dem Monotonieverhalten zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^4 - 8x^2$. Welche Extrema hat $f$? | 🎯 wAE |

#### Krümmung und Wendepunkte  `abl-3-2` · 15 min

**Lernziele:**
- Krümmungsverhalten mit f'' analysieren
- Wendepunkte berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $f''(x) > 0$ bedeutet die Kurve ist: | wAE |
| 2 | 🔘 multiple-choice | Wendepunkt bei $x_0$: Welche Bedingung ist notwendig UND hinreichend? | wAE |
| 3 | 🔢 number-input | $f(x) = x^3 - 3x$. An welcher Stelle $x$ liegt der Wendepunkt? |  |
| 4 | 🔘 multiple-choice | Was passiert bei einer Funktion mit $f'(x_0) = f''(x_0) = 0$ und $f'''(x_0) neq 0$? | wAE |
| 5 | 🔘 multiple-choice | Welche Aussage über f''(x) ist korrekt? | ➕ wAE |
| 6 | 🔢 number-input | f(x) = x⁴ − 6x² + 1. An welcher positiven Stelle liegt ein Wendepunkt? | ➕ |
| 7 | ✅ true-false | f''(x₀) = 0 ist hinreichend für einen Wendepunkt bei x₀. | ➕ |
| 8 | 🔗 matching | Ordne das Vorzeichen von f''(x) der Krümmungsform zu. | ➕ |
| 9 | 📋 sorting | Bestimme Wendepunkte von f(x) = x³ − 3x in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^4 - 6x^2 + 1$. Wie viele Wendepunkte hat $f$? | 🎯 wAE |

#### Vollständige Kurvendiskussion  `abl-3-3` · 22 min

**Lernziele:**
- Alle Schritte der Kurvendiskussion durchführen
- Systematisch vorgehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 📋 sorting | Bringe die Schritte der vollständigen Kurvendiskussion in die richtige Reihenfolge: |  |
| 2 | 🔘 multiple-choice | $f(x) = x^3 - 3x + 2$. Welche Symmetrie hat $f$? | wAE |
| 3 | 🔘 multiple-choice | Für $f(x) = 2x^3 - 6x + 1$: Wie verhält sich $f$ für $x to +infty$? | wAE |
| 4 | 🔢 number-input | $f(x) = x^3 - 3x + 2$. Berechne den y-Wert des lokalen Maximums. |  |
| 5 | 🔘 multiple-choice | f(x) = x⁴ − 8x² ist punktsymmetrisch zum Ursprung. Stimmt das? | ➕ wAE |
| 6 | 🔢 number-input | f(x) = x³ − 3x + 2. Berechne den y-Wert des lokalen Maximums. | ➕ |
| 7 | ✅ true-false | Für f(x) = 2x³ − 6x + 1 gilt: f(x) → +∞ für x → +∞. | ➕ |
| 8 | 🔗 matching | Ordne den Kurvendiskussions-Schritt dem zugehörigen Werkzeug zu. | ➕ |
| 9 | 📋 sorting | Bringe die vollständige Kurvendiskussion von f(x) = x³ − 3x + 2 in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = -x^3 + 3x^2 - 4$. Welche Aussagen sind korrekt? (i) Lokales Min bei $x=0$, (ii) Lokales Max bei $x=2$, | 🎯 wAE |

#### Prüfungsaufgaben Kurvendiskussion  `abl-3-4` · 25 min

**Lernziele:**
- Prüfungsniveau-Aufgaben lösen
- Alle Methoden sicher kombinieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^4 - 4x^3$. Bestimme alle lokalen Extrema. | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $f(x) = e^{-x^2}$. An welcher positiven Stelle $x > 0$ liegt der Wendepunkt? (Auf 2 Dezimalstellen.) |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = dfrac{x^2}{x^2 + 1}$. Welche Aussage stimmt? | wAE |
| 4 | 🔗 matching | [PRÜFUNG] Ordne die Funktionseigenschaften den richtigen Bedingungen zu: |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Vollständige Kurvendiskussion: $f(x) = x^3 - 12x$. Welche Aussage ist FALSCH? | wAE |
| 6 | 🔘 multiple-choice | [PRÜFUNG] f(x) = xe^(−x) für x ≥ 0. Welche Aussage ist korrekt? | ➕ wAE |
| 7 | 🔢 number-input | [PRÜFUNG] f(x) = x³ − 12x. Berechne den Wert des lokalen Maximums f(−2). | ➕ |
| 8 | ✅ true-false | [PRÜFUNG] f(x) = x⁴ − 4x³ hat bei x = 0 einen Sattelpunkt (Terrassenpunkt), kein lokales Extremum. | ➕ |
| 9 | 🔗 matching | [PRÜFUNG] Ordne die Eigenschaften von f(x) = x³ − 12x der richtigen Aussage zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = xe^{-x}$ für $x geq 0$. Wo liegt das globale Maximum? | 🎯 wAE |

### Grenzwerte und Stetigkeit (Unit 4)

2 Lektionen · 20 Aufgaben

#### Grenzwerte von Funktionen  `abl-5-1` · 14 min

**Lernziele:**
- Grenzwert $lim_{x to a} f(x)$ intuitiv und formal verstehen
- Links- und rechtsseitigen Grenzwert unterscheiden
- Wichtige Grenzwerte berechnen: $lim_{x to 0} frac{sin x}{x}$, $lim_{x to 0} frac{e^x - 1}{x}$
- Regel von L'Hôpital bei $0/0$- und $infty/infty$-Typen anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Voraussetzung muss erfüllt sein, damit die Regel von L'Hôpital direkt anwendbar ist? | wAE 4B |
| 2 | 🔢 number-input | Berechne $lim_{x to 0} dfrac{e^{x} - 1 - x}{x^{2}}$ mit zweifacher Anwendung von L'Hôpital. |  |
| 3 | ✅ true-false | Der Grenzwert $lim_{x to infty} dfrac{x}{e^{x}}$ kann mit L'Hôpital berechnet werden und ergibt $0$. | 4B |
| 4 | 🔘 multiple-choice | Aufwärmaufgabe zu "Grenzwerte von Funktionen": Was ist bei zusammengesetzten Funktionen der häufigste Fehler? | ➕ wAE 4B |
| 5 | ✅ true-false | Bei "Grenzwerte von Funktionen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 6 | 🔗 matching | Ordne die Lernbausteine für "Grenzwerte von Funktionen" richtig zu. | ➕ |
| 7 | 📋 sorting | Bringe die Prüfungsstrategie für "Grenzwerte von Funktionen" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Grenzwerte von Funktionen"? | ➕ wAE 4B |
| 9 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Grenzwerte von Funktionen" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 10 | 🔘 multiple-choice | Was ist $lim_{x to 0} dfrac{sin(3x)}{x}$? | 🎯 wAE |

#### Stetigkeit von Funktionen  `abl-5-2` · 12 min

**Lernziele:**
- Stetigkeit an einem Punkt und auf einem Intervall definieren
- Sprungstellen, hebbare Unstetigkeiten und Polstellen unterscheiden
- Zwischenwertsatz anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Aufwärmaufgabe zu "Stetigkeit von Funktionen": Was ist bei zusammengesetzten Funktionen der häufigste Fehler? | ➕ wAE 4B |
| 2 | ✅ true-false | Bei "Stetigkeit von Funktionen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 3 | 🔗 matching | Ordne die Lernbausteine für "Stetigkeit von Funktionen" richtig zu. | ➕ |
| 4 | 📋 sorting | Bringe die Prüfungsstrategie für "Stetigkeit von Funktionen" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Stetigkeit von Funktionen"? | ➕ wAE 4B |
| 6 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Stetigkeit von Funktionen" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 7 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Stetigkeit von Funktionen" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | Rechenaufgabe zu "Stetigkeit von Funktionen": Für f(x)=3x²: Welchen Wert hat f′(2)? | ➕ |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Stetigkeit von Funktionen": Was ist bei zusammengesetzten Funktionen der häufigste Fehler? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welche Aussage beschreibt eine **hebbare** Unstetigkeit bei $x = a$? | 🎯 wAE |

### 🏁 Prüfungsaufgaben (Unit 4)
*Ableitungsregeln, Kurvendiskussion, Optimierung und Taylor — auf TU Wien Klausurniveau*

3 Lektionen · 33 Aufgaben

#### Prüfung: Ableitungsregeln  `abl-4-1` · 25 min

**Lernziele:**
- Ketten-, Produkt- und Quotientenregel sicher anwenden
- Ableitungen trigonometrischer und Exponentialfunktionen berechnen
- Kombinierte Regeln auf Prüfungsniveau einsetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = sin(x^2 + 1)$. Bestimme $f'(x)$. | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = e^{3x} cdot cos(x)$. Was ist $f'(x)$? | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = dfrac{x^2 + 1}{x - 1}$. Was ist $f'(x)$? | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] $f(x) = ln(x^2 + 4)$. Berechne $f'(2)$. |  |
| 5 | ✅ true-false | [PRÜFUNG] Die Ableitung von $f(x) = tan(x)$ ist $f'(x) = dfrac{1}{cos^2(x)}$. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = (x^3 - 2x)^5$. Welches ist $f'(x)$? | wAE |
| 7 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^2 cdot ln(x)$. Was ist $f'(x)$? | wAE |
| 8 | 🔗 matching | [PRÜFUNG] Ordne jede Funktion ihrer Ableitung zu: |  |
| 9 | ✅ true-false | [PRÜFUNG] Für $f(x) = e^x cdot sin(x)$ gilt: $f'(0) = 1$. |  |
| 10 | 🔢 number-input | [PRÜFUNG] $f(x) = dfrac{sin(x)}{x}$ für $x neq 0$. Berechne $f'(pi/2)$ (exakt als Dezimalzahl, 4 Stellen). |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = dfrac{e^{2x}}{cos(x)}$. Was ist $f'(x)$? | 🎯 wAE |

#### Prüfung: Kurvendiskussion & Anwendungen  `abl-4-2` · 30 min

**Lernziele:**
- Extrema und Wendepunkte auf Prüfungsniveau bestimmen
- Monotoniebereiche analysieren
- Optimierungsaufgaben lösen
- Taylor-Polynome aufstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^3 - 3x^2 - 9x + 5$. An welchen Stellen liegen die lokalen Extrema? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $f(x) = 2x^3 - 9x^2 + 12x - 4$. An welcher Stelle $x$ liegt der Wendepunkt? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Ein Rechteck hat den Umfang $U = 20$ cm. Für welche Seitenlänge $x$ wird der Flächeninhalt maximal? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Das Taylor-Polynom 2. Grades von $f(x) = e^x$ um $x_0 = 0$ lautet: | wAE |
| 5 | ✅ true-false | [PRÜFUNG] $f(x) = x^4$ hat bei $x = 0$ ein lokales Minimum, obwohl $f''(0) = 0$. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = xe^{-x}$ auf $[0, infty)$. Welcher Wert ist das globale Maximum? | wAE |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Aussagen den richtigen Bedingungen zu: |  |
| 8 | 🔢 number-input | [PRÜFUNG] Ein zylindrischer Behälter ohne Deckel soll ein Volumen von $V = pi,L = pi cdot 10^{-3},m^3$ fassen. Gesucht i |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] $f(x) = x^3 - 12x$. Welche Aussage über Monotonie ist KORREKT? | wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Das Taylor-Polynom 3. Grades von $f(x) = sin(x)$ um $x_0 = 0$ lautet: | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Vollständige Kurvendiskussion: $f(x) = dfrac{x^2}{x^2 + 3}$. Welche Aussage ist FALSCH? | 🎯 wAE |

#### Prüfung: Technische Optimierung & Newton-Verfahren  `abl-4-3` · 30 min

**Lernziele:**
- Komplexe technische Optimierungsaufgaben strukturiert lösen
- Geometrische, physikalische und elektrotechnische Optima ermitteln
- Newton-Verfahren zur numerischen Nullstellensuche anwenden
- Globale vs. lokale Extrema unter Randwertbedingungen erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Eine zylindrische Dose ($V = $ const) soll minimale Oberfläche haben. Welche Beziehung zwischen Höhe $h$ und R | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Aus einem rechteckigen Karton ($30 times 20$ cm) werden in den Ecken Quadrate (Seite $x$) ausgeschnitten und d |  |
| 3 | ✅ true-false | [PRÜFUNG] Bei Optimierungsaufgaben mit Randwerten muss man neben den Nullstellen von $f'(x)$ auch die Randwerte des Defi |  |
| 4 | 🔗 matching | [PRÜFUNG] Ordne die Anwendung der zugehörigen Optimierungsstrategie zu. |  |
| 5 | 🔢 number-input | [PRÜFUNG] Aus einem Rundholz ($d = 30$ cm) soll der Balken mit maximaler Tragfähigkeit (Widerstandsmoment $W = bh^2/6$)  |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Newton-Verfahren zur Nullstellensuche von $f(x) = x^2 - 2$ mit Startwert $x_0 = 1$. Welchen Wert hat $x_1$? | wAE |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Schritte einer Optimierungsaufgabe in die richtige Reihenfolge. |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage zur Konvergenz des Newton-Verfahrens ist KORREKT? | wAE |
| 9 | ✅ true-false | [PRÜFUNG] Bei einer Optimierungsaufgabe ohne Nebenbedingung muss die Zielfunktion in einer Variablen ausgedrückt werden, |  |
| 10 | 🔢 number-input | [PRÜFUNG] Maximale Stromaufnahme einer Batterie mit Innenwiderstand $R_i = 2,Omega$ und Spannung $U_0 = 12$ V. Bei welch |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Ein Tank (Höhe $H = 4$ m) wird mit Wasser gefüllt. Eine Pumpe muss Energie $W = int_0^H rho g h cdot A(h),dh$  | 🎯 wAE |

<a id="integralrechnung"></a>
## Integralrechnung `integralrechnung`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** math  
**Prerequisites:** `ableitung`  
**4 Units** · **16 Lektionen** · **163 Aufgaben** (🔘 75 · 🔢 40 · ✅ 20 · 🔗 16 · 📋 12)

*Stammfunktionen, Integrationstechniken, bestimmte Integrale und Anwendungen*

### Stammfunktionen & Grundintegrale (Unit 1)
*Stammfunktionen, Grundintegrale, Rechenregeln, bestimmtes Integral und Hauptsatz*

5 Lektionen · 50 Aufgaben

#### Stammfunktion — das Umkehren der Ableitung  `int-1-1` · 15 min

**Lernziele:**
- Stammfunktion als Umkehrung der Ableitung verstehen
- Integrationskonstante C erklären können

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist eine Stammfunktion $F(x)$ von $f(x)$? | wAE 4B |
| 2 | 🔘 multiple-choice | Warum schreibt man bei unbestimmten Integralen immer "$+C$"? | wAE 4B |
| 3 | 🔗 matching | Ordne jeder Funktion $f(x)$ eine Stammfunktion $F(x)$ zu: | 4B |
| 4 | 🔘 multiple-choice | Welche Aussage über Stammfunktionen von $f(x) = 6x$ ist korrekt? | wAE 4B |
| 5 | 🔘 multiple-choice | Was muss für eine Stammfunktion F(x) von f(x) stets gelten? | ➕ wAE |
| 6 | 🔢 number-input | F(x) = x⁴ + 3x + 7 ist die Stammfunktion von f(x). Berechne f(2). | ➕ |
| 7 | ✅ true-false | Zwei Stammfunktionen von f(x) können sich höchstens um eine additive Konstante unterscheiden. | ➕ |
| 8 | 🔗 matching | Ordne jeder Funktion f(x) ihre Stammfunktion F(x) zu (C = 0). | ➕ |
| 9 | 📋 sorting | Bringe den Prüfungsweg "Ist F Stammfunktion von f?" in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $F(x) = x^{4} + 2x + 7$ ist Stammfunktion von: | 🎯 wAE 4B |

#### Grundintegrale  `int-1-2` · 15 min

**Lernziele:**
- Grundintegrale auswendig kennen
- Potenzregel für Integration anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $int x^{3},dx = ?$ | wAE 4B |
| 2 | 🔘 multiple-choice | $int cos(x),dx = ?$ | wAE 4B |
| 3 | 🔘 multiple-choice | $int e^{x},dx = ?$ | wAE |
| 4 | 🔘 multiple-choice | $int dfrac{1}{x},dx = ?$ | wAE 4B |
| 5 | 🔗 matching | Ordne jeder Funktion ihr unbestimmtes Integral zu: |  |
| 6 | 🔘 multiple-choice | Welches Grundintegral ist korrekt? | ➕ wAE |
| 7 | 🔢 number-input | Berechne ∫x⁴ dx und werte die Stammfunktion (ohne C) bei x = 2 aus. | ➕ |
| 8 | ✅ true-false | ∫(1/x) dx = ln(x) + C gilt für alle reellen x ≠ 0. | ➕ |
| 9 | 🔗 matching | Ordne Funktion und Stammfunktion zu. | ➕ |
| 10 | 🔘 multiple-choice | $int sin(x),dx = ?$ | 🎯 wAE 4B |

#### Summenregel & Faktorregel  `int-1-3` · 12 min

**Lernziele:**
- Summenregel für Integration anwenden
- Konstantenfaktor vor das Integral ziehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $int (3x^{2} + 2x),dx = ?$ | wAE 4B |
| 2 | 🔘 multiple-choice | $int 5cos(x),dx = ?$ | wAE 4B |
| 3 | 🔢 number-input | Gegeben: $int (4x^{3} - 6x + 1),dx = x^{4} - 3x^{2} + x + C$. Berechne $F(2)$ für $C = 0$, also mit $F(x) = x^{4} - 3x^{ | 4B |
| 4 | 🔘 multiple-choice | $int (e^{x} - 2sin(x) + 3),dx = ?$ | wAE 4B |
| 5 | 🔘 multiple-choice | Was besagt der Hauptsatz der Differential- und Integralrechnung? | ➕ wAE |
| 6 | 🔢 number-input | Berechne ∫₁³ (2x + 1) dx mit dem Hauptsatz. | ➕ |
| 7 | ✅ true-false | ∫₀² eˣ dx = e² − 1. | ➕ |
| 8 | 🔗 matching | Ordne das Integral seinem Wert zu. | ➕ |
| 9 | 📋 sorting | Bringe die Schritte zur Berechnung von ∫₀² x³ dx in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | $int (6x^{2} - 4x + e^{x}),dx = ?$ | 🎯 wAE 4B |

#### Das bestimmte Integral  `int-1-4` · 18 min

**Lernziele:**
- Bestimmtes Integral berechnen
- Geometrische Deutung als Fläche verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne: $int_{0}^{2} 2x,dx$ |  |
| 2 | 🔢 number-input | Berechne: $int_{1}^{3} x^{2},dx$ (Ergebnis als Dezimalzahl, auf 2 Nachkommastellen gerundet) | 4B |
| 3 | 🔘 multiple-choice | Was beschreibt $int_{a}^{b} f(x),dx$ geometrisch, wenn $f(x) geq 0$ auf $[a,b]$? | wAE 4B |
| 4 | 🔢 number-input | Berechne: $int_{0}^{pi} sin(x),dx$ (ganzzahliges Ergebnis) |  |
| 5 | 🔘 multiple-choice | Was muss man tun, damit das bestimmte Integral korrekt die Fläche (und nicht das Vorzeichen-behaftete Integral) berechne | ➕ wAE |
| 6 | 🔢 number-input | Berechne die Fläche, die von f(x) = x² − 4 und der x-Achse eingeschlossen wird. (Nullstellen bei x = ±2) | ➕ |
| 7 | ✅ true-false | ∫₀^(2π) sin(x) dx = 0, weil sich positive und negative Flächen aufheben. | ➕ |
| 8 | 🔗 matching | Ordne Integralausdruck und seine geometrische Bedeutung zu. | ➕ |
| 9 | 📋 sorting | Berechne die Fläche zwischen f(x) = x und g(x) = x² auf [0,1] in der richtigen Reihenfolge. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne: $int_{1}^{2} (3x^{2} + 1),dx$ | 🎯 4B |

#### Hauptsatz der Differential- und Integralrechnung  `int-1-5` · 14 min

**Lernziele:**
- Hauptsatz der Analysis formulieren können
- Zusammenhang Ableitung ↔ Integral verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Der Hauptsatz der Differential- und Integralrechnung besagt: | wAE 4B |
| 2 | 🔘 multiple-choice | Sei $F(x) = int_{0}^{x} t^{2},dt$. Was ist $F'(x)$? | wAE |
| 3 | 🔘 multiple-choice | Welche Aussage folgt aus dem Hauptsatz? | wAE 4B |
| 4 | 🔘 multiple-choice | Warum entsteht bei ∫f(ax+b) dx ein Faktor 1/a im Ergebnis? | ➕ wAE |
| 5 | 🔢 number-input | Berechne ∫cos(3x) dx und werte die Stammfunktion (ohne C) bei x = π/6 aus. | ➕ |
| 6 | ✅ true-false | ∫e^(5x) dx = 5·e^(5x) + C. | ➕ |
| 7 | 🔗 matching | Ordne Integral und Stammfunktion zu. | ➕ |
| 8 | 📋 sorting | Berechne ∫(2x−1)³ dx durch lineare Substitution in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Jemand berechnet ∫sin(4x) dx = cos(4x) + C. Welcher Fehler wurde gemacht? | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne mit dem Hauptsatz: $int_{0}^{1} (e^{x} + 2x),dx$ (Ergebnis auf 2 Nachkommastellen) | 🎯 4B |

### Integrationstechniken (Unit 2)
*Substitution, partielle Integration, Partialbruchzerlegung und gemischte Übungen*

4 Lektionen · 40 Aufgaben

#### Substitution  `int-2-1` · 18 min

**Lernziele:**
- Substitutionsmethode verstehen und anwenden
- Geeignete Substitution wählen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist der erste Schritt bei der Substitutionsmethode? | wAE 4B |
| 2 | 🔘 multiple-choice | $int 2x cdot e^{x^{2}},dx = ?$ (Tipp: $u = x^{2}$) | wAE 4B |
| 3 | 🔘 multiple-choice | $int cos(3x),dx = ?$ (Tipp: $u = 3x$) | wAE 4B |
| 4 | 🔘 multiple-choice | $int x cdot (x^{2} + 1)^{4},dx = ?$ | wAE 4B |
| 5 | 🔘 multiple-choice | Wie erkennt man, dass sich eine Substitution u = g(x) eignet? | ➕ wAE |
| 6 | 🔢 number-input | Berechne ∫2x·(x² + 3)⁴ dx mit u = x² + 3. Gib den Koeffizienten vor (x²+3)⁵ an. | ➕ |
| 7 | ✅ true-false | Bei der Substitution u = g(x) muss man nach dem Integrieren g(x) für u einsetzen (Rücksubstitution). | ➕ |
| 8 | 🔗 matching | Ordne Integral und Substitution zu. | ➕ |
| 9 | 📋 sorting | Berechne ∫cos(x)·sin³(x) dx mit u = sin(x) in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $int sin(x) cdot cos(x),dx = ?$ (Tipp: $u = sin(x)$) | 🎯 wAE |

#### Partielle Integration  `int-2-2` · 18 min

**Lernziele:**
- Partielle Integration anwenden
- LIATE-Regel für die Wahl von u kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Die Formel für partielle Integration lautet: | wAE 4B |
| 2 | 🔘 multiple-choice | $int x cdot e^{x},dx = ?$ (partielle Integration mit $u = x$, $v' = e^{x}$) | wAE |
| 3 | 🔘 multiple-choice | $int x cdot cos(x),dx = ?$ | wAE 4B |
| 4 | 🔘 multiple-choice | $int ln(x),dx = ?$ (Tipp: Setze $u = ln(x)$, $v' = 1$) | wAE 4B |
| 5 | 🔘 multiple-choice | Woher stammt die Formel für partielle Integration? | ➕ wAE |
| 6 | 🔢 number-input | ∫x·eˣ dx = x·eˣ − eˣ + C. Berechne den Wert des bestimmten Integrals ∫₀¹ x·eˣ dx auf 2 Nachkommastellen. | ➕ |
| 7 | ✅ true-false | ∫ln(x) dx = x·ln(x) − x + C. | ➕ |
| 8 | 🔗 matching | Ordne das Integral der richtigen Wahl von u und v′ zu. | ➕ |
| 9 | 📋 sorting | Berechne ∫x·cos(x) dx mit partieller Integration in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $int x^{2} cdot e^{x},dx$ erfordert partielle Integration — wie oft? | 🎯 wAE 4B |

#### Partialbruchzerlegung  `int-2-3` · 16 min

**Lernziele:**
- Gebrochen-rationale Funktionen integrieren
- Partialbruchzerlegung aufstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wann verwendet man die Partialbruchzerlegung? | wAE 4B |
| 2 | 🔘 multiple-choice | $int dfrac{1}{x^{2} - 1},dx = int dfrac{1}{(x-1)(x+1)},dx$. Welcher Ansatz ist korrekt? | wAE 4B |
| 3 | 🔢 number-input | Partialbruchzerlegung: $dfrac{1}{(x-1)(x+1)} = dfrac{A}{x-1} + dfrac{B}{x+1}$. Bestimme $A$. (Tipp: Setze $x = 1$ ein) | 4B |
| 4 | 🔘 multiple-choice | Wann setzt man die Partialbruchzerlegung ein? | ➕ wAE |
| 5 | 🔢 number-input | Bestimme A in 1/(x(x+2)) = A/x + B/(x+2) durch Einsetzen von x = 0. | ➕ |
| 6 | ✅ true-false | ∫1/(x−3) dx = ln\|x−3\| + C. | ➕ |
| 7 | 🔗 matching | Ordne den Nennertyp und den Partialbruch-Ansatz zu. | ➕ |
| 8 | 📋 sorting | Berechne ∫1/((x−1)(x+1)) dx durch Partialbruchzerlegung in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Für 2/(x(x+2)) wird der Ansatz A/x² + B/(x+2) verwendet. Was ist falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $int dfrac{1}{x(x+1)},dx = ?$ | 🎯 wAE 4B |

#### Gemischte Übungen  `int-2-4` · 20 min

**Lernziele:**
- Integrationstechnik selbständig erkennen und anwenden
- Prüfungsaufgaben lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $int x cdot sin(x),dx = ?$ | wAE 4B |
| 2 | 🔘 multiple-choice | [PRÜFUNG] $int e^{2x},dx = ?$ | wAE 4B |
| 3 | 🔢 number-input | [PRÜFUNG] Berechne: $int_{0}^{1} x cdot e^{x},dx$ (Ergebnis auf 2 Nachkommastellen) | 4B |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Welche Methode ist am besten geeignet für $int sin^{2}(x),dx$? | wAE 4B |
| 5 | 🔘 multiple-choice | [PRÜFUNG] $int dfrac{2x + 3}{x^{2} + 3x + 1},dx = ?$ (Tipp: Zähler ist Ableitung des Nenners) | wAE 4B |
| 6 | 🔘 multiple-choice | Welche Technik eignet sich für ∫x·sin(x) dx? | ➕ wAE |
| 7 | 🔢 number-input | ∫e^(2x) dx ergibt e^(2x)/2 + C. Berechne ∫₀¹ e^(2x) dx auf 2 Nachkommastellen. | ➕ |
| 8 | ✅ true-false | ∫(2x+3)/(x²+3x+5) dx = ln\|x²+3x+5\| + C, weil der Zähler die Ableitung des Nenners ist. | ➕ |
| 9 | 🔗 matching | Ordne den Integranden der passenden Methode zu. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne: $int_{0}^{pi/2} x cdot cos(x),dx$ (Ergebnis auf 2 Nachkommastellen) | 🎯 4B |

### Anwendungen (Unit 3)
*Flächenberechnung, Rotationskörper und technische Anwendungen (Arbeit, Schwerpunkt)*

4 Lektionen · 40 Aufgaben

#### Flächenberechnung  `int-3-1` · 18 min

**Lernziele:**
- Fläche unter einer Kurve berechnen
- Fläche zwischen zwei Kurven berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie berechnet man die Fläche zwischen $f(x)$ und $g(x)$ auf $[a, b]$, wenn $f(x) geq g(x)$? | wAE 4B |
| 2 | 🔢 number-input | Berechne die Fläche zwischen $f(x) = x^{2}$ und der $x$-Achse auf dem Intervall $[0, 3]$. | 4B |
| 3 | 🔢 number-input | Berechne die Fläche zwischen $f(x) = x$ und $g(x) = x^{2}$ auf $[0, 1]$ (Ergebnis auf 2 Nachkommastellen). | 4B |
| 4 | 🔘 multiple-choice | Die Fläche $A$, die von $f(x) = sin(x)$ und der $x$-Achse auf $[0, 2pi]$ eingeschlossen wird, ist: | wAE 4B |
| 5 | 🔘 multiple-choice | Warum steht in der Rotationsvolumen-Formel [f(x)]² und nicht f(x)? | ➕ wAE |
| 6 | 🔢 number-input | f(x) = 2 rotiert auf [0, 3] um die x-Achse (Zylinder). Berechne V/π. | ➕ |
| 7 | ✅ true-false | Bei der Rotation von f(x) = √x auf [0, 4] um die x-Achse vereinfacht sich [f(x)]² = x. | ➕ |
| 8 | 🔗 matching | Ordne Funktion/Intervall dem Rotationskörper zu. | ➕ |
| 9 | 📋 sorting | Berechne das Volumen des Kegels mit f(x) = x auf [0, 3] (V/π) in der richtigen Reihenfolge. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne die Fläche, die von $f(x) = 4 - x^{2}$ und der $x$-Achse eingeschlossen wird. (Tipp: Nullstellen bei  | 🎯 |

#### Rotationskörper  `int-3-2` · 16 min

**Lernziele:**
- Volumen von Rotationskörpern berechnen
- Scheibenmethode anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie berechnet man das Volumen eines Rotationskörpers bei Drehung um die $x$-Achse? | wAE 4B |
| 2 | 🔢 number-input | Berechne das Volumen des Kegels, der entsteht, wenn $f(x) = x$ auf $[0, 3]$ um die $x$-Achse rotiert. Gib das Ergebnis a |  |
| 3 | 🔢 number-input | Berechne das Volumen der Kugel mit Radius $R = 2$ (Halbkreis $f(x) = sqrt{4 - x^{2}}$ um $x$-Achse rotiert). Ergebnis au |  |
| 4 | 🔘 multiple-choice | Was bedeutet der Flächenschwerpunkt x̄ physikalisch? | ➕ wAE |
| 5 | 🔢 number-input | Berechne x̄ für f(x) = x auf [0, 2]. (A = ∫₀² x dx = 2) | ➕ |
| 6 | ✅ true-false | Der Schwerpunkt x̄ muss immer innerhalb des Integrationsintervalls [a, b] liegen. | ➕ |
| 7 | 🔗 matching | Ordne die technische Größe ihrer Integralformel zu. | ➕ |
| 8 | 📋 sorting | Berechne x̄ für f(x) = 1 auf [0, 3] in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Jemand berechnet x̄ = ∫₀² x·f(x) dx ohne durch A zu dividieren. Was ist falsch? | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] $f(x) = sqrt{x}$ wird auf $[0, 4]$ um die $x$-Achse rotiert. Berechne $V/pi$. | 🎯 4B |

#### Technische Anwendungen  `int-3-3` · 16 min

**Lernziele:**
- Arbeit mit Integralen berechnen
- Schwerpunkt einer Fläche bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie berechnet man die Arbeit $W$, wenn eine ortsabhängige Kraft $F(x)$ längs des Weges von $a$ bis $b$ wirkt? | wAE 4B |
| 2 | 🔢 number-input | Eine Feder hat die Federkraft $F(x) = 200 cdot x,mathrm{N}$ (Hookesches Gesetz mit $k = 200,mathrm{N/m}$). Berechne die  |  |
| 3 | 🔘 multiple-choice | Der $x$-Schwerpunkt einer homogenen Fläche unter $f(x)$ auf $[a, b]$ ist gegeben durch: | wAE 4B |
| 4 | 🔘 multiple-choice | Warum ist numerische Integration manchmal notwendig? | ➕ wAE |
| 5 | 🔢 number-input | Trapezregel mit n = 2 für ∫₀² x² dx: h = 1, Stützstellen x₀=0, x₁=1, x₂=2. Berechne den Näherungswert. | ➕ |
| 6 | ✅ true-false | Die Simpsonregel ist im Allgemeinen genauer als die Trapezregel, weil sie Parabeln statt Geraden durch die Stützpunkte l | ➕ |
| 7 | 🔗 matching | Ordne Methode und Gewichtsschema zu. | ➕ |
| 8 | 📋 sorting | Wende die Simpsonregel mit n = 2 auf ∫₀² x² dx an (h = 1) in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Bei der Trapezregel für ∫₀⁴ f dx mit n = 2 setzt jemand h = 4. Was ist falsch? | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] Eine Kraft $F(x) = 3x^{2},mathrm{N}$ wirkt auf einen Körper von $x = 0$ bis $x = 2,mathrm{m}$. Berechne die ve | 🎯 4B |

#### Bogenlänge & Durchschnittswert  `int-3-4` · 14 min

**Lernziele:**
- Bogenlänge $L = int sqrt{1 + (f')^{2}},dx$ kennen und anwenden
- Durchschnittswert $bar{f} = tfrac{1}{b-a}int f,dx$ berechnen
- Geometrische Deutung beider Konzepte verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Formel beschreibt die **Bogenlänge** einer Funktionskurve $y = f(x)$ auf $[a,b]$? | wAE |
| 2 | 🔢 number-input | Berechne den **Durchschnittswert** $bar{f}$ der Funktion $f(x) = x^{2}$ auf $[0, 3]$. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Bogenlänge & Durchschnittswert": Was darf bei einem unbestimmten Integral nicht fehlen? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Bogenlänge & Durchschnittswert" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln si | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Bogenlänge & Durchschnittswert" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Bogenlänge & Durchschnittswert" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Bogenlänge & Durchschnittswert"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Bogenlänge & Durchschnittswert" sollte den Lösungsweg nachvollziehbar zeigen, nich | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Bogenlänge & Durchschnittswert" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Bogenlänge der Parabel $f(x) = tfrac{2}{3}x^{3/2}$ auf $[0, 3]$. (Ergebnis auf 2 Nachkommastellen) | 🎯 4B |

### 🏁 Prüfungsaufgaben (Unit 4)
*Aufgaben auf TU Wien Prüfungsniveau — Integrationstechniken und technische Anwendungen*

3 Lektionen · 33 Aufgaben

#### Prüfung: Integrationstechniken  `int-4-1` · 25 min

**Lernziele:**
- Substitution, partielle Integration und Partialbrüche auf Prüfungsniveau anwenden
- Bestimmte Integrale sicher berechnen
- Die geeignete Integrationsmethode erkennen und einsetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $int x cdot e^{x^2} , dx$ | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $int x cdot ln(x) , dx$ | wAE |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Zerlege in Partialbrüche und berechne: $int frac{1}{x^2-1} , dx$ | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Berechne das bestimmte Integral: $int_0^1 x cdot e^x , dx$. Runde auf 2 Dezimalstellen. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $int sin^2(x) , dx$ | wAE |
| 6 | ✅ true-false | [PRÜFUNG] Es gilt: $int_{-1}^1 x^3 , dx = 0$, weil $x^3$ eine ungerade Funktion ist. |  |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Welche Substitution ist am geeignetsten für $int sqrt{1-x^2} , dx$? | wAE |
| 8 | 🔢 number-input | [PRÜFUNG] Berechne: $int_1^e ln(x) , dx$. (Tipp: Partielle Integration mit $u = ln(x)$, $v' = 1$) |  |
| 9 | ✅ true-false | [PRÜFUNG] Die Partialbruchzerlegung von $frac{1}{x(x+1)}$ lautet: $frac{1}{x} - frac{1}{x+1}$. |  |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $int x^2 cdot e^x , dx$ | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Berechne: $int_0^{pi/2} sin(x) cdot cos(x) , dx$ | 🎯 wAE |

#### Prüfung: Anwendungen der Integralrechnung  `int-4-2` · 25 min

**Lernziele:**
- Flächen zwischen Kurven und Rotationsvolumina berechnen
- Schwerpunkte und technische Kenngrößen mit Integralen bestimmen
- Technische Anwendungen (Arbeit, Trägheitsmoment, Bogenlänge) lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Berechne die Fläche, die von $f(x) = x^2 - 4$ und der $x$-Achse eingeschlossen wird. (Tipp: Nullstellen bei $x |  |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Das Volumen des Rotationskörpers, der entsteht, wenn $f(x) = sqrt{x}$ auf $[0, 4]$ um die $x$-Achse gedreht wi | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] Berechne die Fläche zwischen $f(x) = x^2$ und $g(x) = x$ auf $[0, 1]$. |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Der $x$-Schwerpunkt einer homogenen Fläche unter $f(x) ge 0$ auf $[a, b]$ berechnet sich als: | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Der Schwerpunkt der Fläche unter $f(x) = x$ auf $[0, 2]$ liegt bei $bar{x} = 4/3$. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Ein Bauteil hat das Querschnittsprofil $f(x) = 2$ auf $[0, 3]$ (Rechteck). Welche Schnittgröße erhält man durc | wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Berechne das Volumen des Rotationskörpers, der entsteht, wenn $f(x) = 2$ auf $[0, 3]$ um die $x$-Achse gedreht |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Eine Kraft wirkt ortsabhängig: $F(x) = 3x^2$ N ($x$ in Metern). Welche Arbeit verrichtet sie auf dem Weg von $ | wAE |
| 9 | ✅ true-false | [PRÜFUNG] Das Flächenträgheitsmoment $I_x = iint y^2 , dA$ eines Rechtecks (Breite $b$, Höhe $h$) um die $x$-Achse ist $ |  |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Berechne die Bogenlänge von $f(x) = x^{3/2}$ auf $[0, 4]$. Die Formel lautet $L = int_a^b sqrt{1 + [f'(x)]^2}  | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Eine Parabel $f(x) = -x^2 + 4$ und $g(x) = 0$ begrenzen eine Fläche. Berechne das Volumen des Rotationskörpers | 🎯 wAE |

#### Prüfung: Uneigentliche & numerische Integrale  `int-4-3` · 30 min

**Lernziele:**
- Uneigentliche Integrale erkennen und auf Konvergenz prüfen
- p-Integrale als Vergleichsmaßstab nutzen
- Numerische Integration (Trapez, Simpson) anwenden und Fehler abschätzen
- Komplexe Integrale durch Methodenmix lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage zu uneigentlichen Integralen ist KORREKT? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Berechne $int_1^infty frac{1}{x^2},dx$. |  |
| 3 | ✅ true-false | [PRÜFUNG] Das Integral $int_0^1 frac{1}{sqrt{x}},dx$ ist uneigentlich (Singularität an der unteren Grenze) und konvergie |  |
| 4 | 🔗 matching | [PRÜFUNG] Ordne die Vergleichskriterien für die Konvergenz von $int_1^infty x^{-p} dx$ zu. |  |
| 5 | 🔢 number-input | [PRÜFUNG] Numerische Integration mit Trapezregel: $int_0^1 x^2,dx$, Schrittweite $h = 0{,}5$ (3 Stützstellen). Berechne  |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Welche Methode ist für $int_0^1 sqrt{1 - x^2},dx$ am effizientesten? | wAE |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Schritte zur Konvergenzprüfung eines uneigentlichen Integrals in die richtige Reihenfolge. |  |
| 8 | 🔢 number-input | [PRÜFUNG] Berechne $int_0^infty e^{-x},dx$. |  |
| 9 | ✅ true-false | [PRÜFUNG] Die Simpson-Regel ist genauer als die Trapezregel, weil sie Polynome bis Grad 3 exakt integriert. |  |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne $int_0^infty x cdot e^{-x},dx$ (uneigentlich, partielle Integration). |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage zu $int_0^infty frac{1}{1+x^2},dx$ ist korrekt? | 🎯 wAE |

<a id="lineare-algebra"></a>
## Lineare Algebra `lineare-algebra`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** math  
**Prerequisites:** `vektoren`  
**3 Units** · **12 Lektionen** · **123 Aufgaben** (🔘 63 · 🔢 27 · ✅ 14 · 🔗 10 · 📋 9)

*Matrizen, Determinanten, lineare Gleichungssysteme und Eigenwerte*

### Matrizen & Determinanten (Unit 1)
*Matrizenrechnung, Transponierte, Inverse, Determinanten, Eigenwerte*

5 Lektionen · 50 Aufgaben

#### Was ist eine Matrix?  `la-1-1` · 15 min

**Lernziele:**
- Matrizen als Zahlentabellen verstehen
- Dimension und Notation kennen
- Spezialmatrizen erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Eine Matrix mit 3 Zeilen und 2 Spalten ist eine... | wAE |
| 2 | 🔘 multiple-choice | Welche Matrix ist die 3×3-Einheitsmatrix $I$? | wAE |
| 3 | 🔘 multiple-choice | Was ist eine Diagonalmatrix? | wAE |
| 4 | 🔘 multiple-choice | $A = begin{pmatrix} 2 & 5  1 & 3 end{pmatrix}$. Welches Element ist $a_{12}$? | wAE |
| 5 | 🔘 multiple-choice | Welche Bedingung muss gelten, damit A + B berechnet werden kann? | ➕ wAE |
| 6 | 🔢 number-input | A = [[3,1],[2,4]] und B = [[1,2],[3,0]]. Berechne das Element (1,2) von A + B. | ➕ |
| 7 | ✅ true-false | Die Transposition einer 3×2-Matrix ergibt eine 2×3-Matrix. | ➕ |
| 8 | 🔗 matching | Ordne die Grundoperationen ihren Rechenregeln zu. | ➕ |
| 9 | 📋 sorting | Bringe die Schritte zur Berechnung von 2·A^T in die richtige Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Für $A = begin{pmatrix} 2 & 5 & 7  1 & 3 & 9 end{pmatrix}$: Welche Dimension hat $A$, und welchen Wert hat $a_ | 🎯 wAE |

#### Matrizenrechnung  `la-1-2` · 20 min

**Lernziele:**
- Matrizen addieren und skalar multiplizieren
- Matrizenmultiplikation beherrschen
- Nicht-Kommutativität verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $A = begin{pmatrix} 1 & 2  3 & 4 end{pmatrix}$, $B = begin{pmatrix} 5 & 6  7 & 8 end{pmatrix}$. Was ist $A + B$? | wAE |
| 2 | 🔘 multiple-choice | $A = begin{pmatrix} 1 & 2  3 & 4 end{pmatrix}$. Was ist $3 cdot A$? | wAE |
| 3 | 🔘 multiple-choice | Gilt für die Matrizenmultiplikation immer $A cdot B = B cdot A$? | wAE |
| 4 | 🔢 number-input | Berechne das Element $c_{11}$ von $C = A cdot B$ mit $A = begin{pmatrix} 1 & 2  3 & 4 end{pmatrix}$ und $B = begin{pmatr |  |
| 5 | 🔢 number-input | Berechne das Element $c_{22}$ von $C = A cdot B$ mit $A = begin{pmatrix} 1 & 2  3 & 4 end{pmatrix}$ und $B = begin{pmatr |  |
| 6 | 🔘 multiple-choice | Welche Dimension hat das Produkt C = A·B, wenn A eine 3×4-Matrix und B eine 4×2-Matrix ist? | ➕ wAE |
| 7 | 🔢 number-input | A = [[1,2],[3,4]] und B = [[1,0],[0,1]]. Berechne das Element (1,1) von A·B. | ➕ |
| 8 | ✅ true-false | Für beliebige quadratische Matrizen A und B gilt immer A·B = B·A. | ➕ |
| 9 | 🔗 matching | Ordne die Multiplikationseigenschaften ihren Aussagen zu. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $A$ ist eine $2 times 3$-Matrix, $B$ ist eine $3 times 4$-Matrix. Welche Dimension hat $A cdot B$? | 🎯 wAE |

#### Transponierte und Inverse  `la-1-3` · 18 min

**Lernziele:**
- Transponierte einer Matrix berechnen
- Inverse einer 2x2-Matrix berechnen
- Zusammenhang zwischen Invertierbarkeit und Determinante verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | $A = begin{pmatrix} 1 & 2  3 & 4 end{pmatrix}$. Was ist $A^T$? | wAE |
| 2 | 🔘 multiple-choice | Was gilt für die inverse Matrix $A^{-1}$? | wAE |
| 3 | 🔢 number-input | Berechne die Determinante von $A = begin{pmatrix} 4 & 7  2 & 6 end{pmatrix}$, die du für die Inverse brauchst: $det(A) = |  |
| 4 | 🔘 multiple-choice | Welche Matrix hat KEINE Inverse? | wAE |
| 5 | 🔘 multiple-choice | Was bedeutet es, wenn det(A) = 0? | ➕ wAE |
| 6 | 🔢 number-input | Berechne det([[3,1],[2,4]]). | ➕ |
| 7 | ✅ true-false | det(A·B) = det(A) · det(B) gilt für quadratische Matrizen gleicher Dimension. | ➕ |
| 8 | 🔗 matching | Ordne die Determinanten-Rechenregeln ihren Aussagen zu. | ➕ |
| 9 | 📋 sorting | Bringe den Laplace-Entwicklungssatz nach der ersten Zeile für eine 3×3-Matrix in Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $A = begin{pmatrix} 3 & 1  5 & 2 end{pmatrix}$. Was ist $A^{-1}$? | 🎯 wAE |

#### Determinanten  `la-1-4` · 20 min

**Lernziele:**
- 2x2- und 3x3-Determinanten berechnen
- Regel von Sarrus anwenden
- Geometrische Bedeutung der Determinante verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne: $det begin{pmatrix} 3 & 8  4 & 6 end{pmatrix}$ |  |
| 2 | 🔘 multiple-choice | Was bedeutet $det(A) = 0$ geometrisch (im 2D-Fall)? | wAE |
| 3 | 🔢 number-input | Berechne mit der Regel von Sarrus: $det begin{pmatrix} 1 & 2 & 3  4 & 5 & 6  7 & 8 & 9 end{pmatrix}$ |  |
| 4 | 🔘 multiple-choice | Welche Aussage ist korrekt? | wAE |
| 5 | 🔘 multiple-choice | Wann existiert die Inverse einer quadratischen Matrix A? | ➕ wAE |
| 6 | 🔢 number-input | A = [[2,1],[1,1]]. Berechne det(A). | ➕ |
| 7 | ✅ true-false | Wenn A^{-1} existiert, dann gilt A · A^{-1} = I (Einheitsmatrix). | ➕ |
| 8 | 🔗 matching | Ordne die Begriffe zur Invertierbarkeit ihren Bedeutungen zu. | ➕ |
| 9 | 📋 sorting | Ordne die Schritte zur Berechnung von A^{-1} mit Gauss-Jordan. | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Berechne: $det begin{pmatrix} 2 & 0 & 1  3 & 1 & 0  1 & 2 & 3 end{pmatrix}$ | 🎯 |

#### Eigenwerte und Eigenvektoren  `la-1-5` · 20 min

**Lernziele:**
- Eigenwertgleichung verstehen
- Charakteristisches Polynom aufstellen
- Eigenwerte für 2x2-Matrizen berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was bedeutet die Gleichung $A vec{x} = lambda vec{x}$? | wAE |
| 2 | 🔘 multiple-choice | Wie findet man die Eigenwerte einer Matrix $A$? | wAE |
| 3 | 🔢 number-input | Berechne die Summe der Eigenwerte von $A = begin{pmatrix} 4 & 1  2 & 3 end{pmatrix}$. (Tipp: Die Summe der Eigenwerte =  |  |
| 4 | 🔘 multiple-choice | Wie wird der Rang einer Matrix bestimmt? | ➕ wAE |
| 5 | 🔢 number-input | Welchen maximalen Rang kann eine 3×4-Matrix haben? | ➕ |
| 6 | ✅ true-false | Eine 4×4-Matrix mit det(A) ≠ 0 hat Rang 4. | ➕ |
| 7 | 🔗 matching | Ordne die Rang-Aussagen ihren Bedeutungen zu. | ➕ |
| 8 | 📋 sorting | Ordne die Schritte zur Rangbestimmung einer Matrix. | ➕ |
| 9 | 🔘 multiple-choice | Welcher Fehler steckt in: "Eine 3×3-Matrix hat immer Rang 3"? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $A = begin{pmatrix} 2 & 1  0 & 3 end{pmatrix}$. Was sind die Eigenwerte? | 🎯 wAE |

### Lineare Gleichungssysteme (Unit 2)
*LGS in Matrixform, Gauss-Algorithmus, Lösbarkeit, Cramersche Regel*

4 Lektionen · 40 Aufgaben

#### LGS in Matrixform  `la-2-1` · 12 min

**Lernziele:**
- LGS in Matrixform $Avec{x} = vec{b}$ schreiben
- Erweiterte Koeffizientenmatrix aufstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Das Gleichungssystem $2x + 3y = 7$ und $x - y = 1$ kann man schreiben als $Avec{x} = vec{b}$. Wie sieht die Koeffiziente | wAE |
| 2 | 🔘 multiple-choice | Was ist die erweiterte Koeffizientenmatrix $[A\|vec{b}]$ für $2x + 3y = 7$ und $x - y = 1$? | wAE |
| 3 | 🔘 multiple-choice | Welchen Vorteil hat die Matrixschreibweise $Avec{x} = vec{b}$ gegenüber der normalen Schreibweise? | wAE |
| 4 | 🔘 multiple-choice | Wann hat ein LGS A·x = b keine Lösung? | ➕ wAE |
| 5 | 🔢 number-input | LGS: x + 2y = 5, 3x + 6y = 15. Wie viele freie Parameter hat die Lösungsmenge? | ➕ |
| 6 | ✅ true-false | Ein LGS mit mehr Gleichungen als Unbekannten ist immer unlösbar. | ➕ |
| 7 | 🔗 matching | Ordne die Lösungsfälle ihren Bedingungen zu. | ➕ |
| 8 | 📋 sorting | Ordne die Schritte der Gauss-Elimination für ein 3×3-LGS. | ➕ |
| 9 | 🔘 multiple-choice | Welcher Fehler steckt in: "Ein LGS mit det(A)=0 hat immer keine Lösung"? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Das System $3x - 2y + z = 5$, $x + 4y - 2z = 3$, $2x + y + 3z = 8$ hat die erweiterte Matrix... | 🎯 wAE |

#### Gauss-Algorithmus  `la-2-2` · 25 min

**Lernziele:**
- Die drei erlaubten Zeilenumformungen kennen
- Ein LGS in Stufenform bringen
- Rücksubstitution durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche der folgenden Operationen ist beim Gauss-Algorithmus NICHT erlaubt? | wAE |
| 2 | 🔘 multiple-choice | Die erweiterte Matrix $left(begin{array}{cc\|c} 1 & 2 & 5  3 & 4 & 11 end{array}right)$. Welche Operation eliminiert die | wAE |
| 3 | 🔢 number-input | Nach dem Gauss-Algorithmus erhältst du $left(begin{array}{cc\|c} 1 & 2 & 5  0 & -2 & -4 end{array}right)$. Welchen Wert  |  |
| 4 | 🔢 number-input | Weiter: $left(begin{array}{cc\|c} 1 & 2 & 5  0 & -2 & -4 end{array}right)$ mit $y = 2$. Berechne $x$ durch Rückeinsetzen |  |
| 5 | 🔘 multiple-choice | Was unterscheidet Gauss-Jordan von der einfachen Gauss-Elimination? | ➕ wAE |
| 6 | 🔢 number-input | RREF-Matrix: [[1,0,\|3],[0,1,\|2]]. Was ist x₁? | ➕ |
| 7 | ✅ true-false | Beim Gauss-Jordan-Verfahren zur Berechnung von A^{-1} wird die erweiterte Matrix [A\|I] in die Form [I\|A^{-1}] überführ | ➕ |
| 8 | 🔗 matching | Ordne die Begriffe der reduzierten Zeilenstufenform zu. | ➕ |
| 9 | 📋 sorting | Ordne die Schritte des Gauss-Jordan-Verfahrens. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Was ist das Ziel des Gauss-Algorithmus? | 🎯 wAE |

#### Lösbarkeit von LGS  `la-2-3` · 18 min

**Lernziele:**
- Die drei Fälle der Lösbarkeit unterscheiden
- Rang einer Matrix bestimmen
- Kronecker-Capelli-Theorem anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Nach dem Gauss-Algorithmus steht in der letzten Zeile $0 = 5$. Was bedeutet das? | wAE |
| 2 | 🔘 multiple-choice | Was ist der Rang einer Matrix? | wAE |
| 3 | 🔘 multiple-choice | Wann hat ein LGS $Avec{x} = vec{b}$ mit $n$ Unbekannten genau EINE Lösung? | wAE |
| 4 | 🔘 multiple-choice | Was beschreibt die Gleichung A·v = λ·v? | ➕ wAE |
| 5 | 🔢 number-input | A = [[3,0],[0,2]]. Berechne einen Eigenwert von A durch Ablesen der Diagonale. | ➕ |
| 6 | ✅ true-false | Das charakteristische Polynom det(A − λI) = 0 liefert die Eigenwerte von A. | ➕ |
| 7 | 🔗 matching | Ordne die Begriffe der Eigenwerttheorie ihren Definitionen zu. | ➕ |
| 8 | 📋 sorting | Ordne den Berechnungsweg für Eigenwerte und Eigenvektoren einer 2×2-Matrix. | ➕ |
| 9 | 🔘 multiple-choice | Welcher Fehler steckt in: "Der Nullvektor v=0 ist ein Eigenvektor"? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein LGS mit 3 Unbekannten hat $text{rang}(A) = text{rang}(A\|b) = 2$. Wie viele Lösungen gibt es? | 🎯 wAE |

#### Cramersche Regel & Anwendungen  `la-2-4` · 18 min

**Lernziele:**
- Cramersche Regel für 2x2- und 3x3-Systeme anwenden
- Technische Probleme als LGS formulieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wann kann man die Cramersche Regel anwenden? | wAE |
| 2 | 🔢 number-input | Löse mit Cramer: $2x + y = 5$, $x - y = 1$. Berechne $det(A)$. |  |
| 3 | 🔢 number-input | Weiter: $2x + y = 5$, $x - y = 1$. Berechne $x$ mit der Cramerschen Regel: $x = det(A_x)/det(A)$. ($A_x$ = Spalte 1 durc |  |
| 4 | 🔘 multiple-choice | In einem Fachwerk mit 3 unbekannten Stabkräften werden 3 Gleichgewichtsbedingungen aufgestellt. Welches mathematische Pr | ➕ wAE |
| 5 | 🔢 number-input | Ein System hat die Lösung x₁ = 3 kN, x₂ = 4 kN. Berechne die Resultierende F = √(x₁² + x₂²) in kN. | ➕ |
| 6 | ✅ true-false | In der FEM werden Steifigkeitsmatrizen aufgestellt, die zu einem LGS K·u = f führen, wobei u die Knotenverschiebungen si | ➕ |
| 7 | 🔗 matching | Ordne die Anwendungen linearer Gleichungssysteme im Maschinenbau zu. | ➕ |
| 8 | 📋 sorting | Ordne die Schritte zur LGS-Lösung eines Fachwerkproblems. | ➕ |
| 9 | 🔘 multiple-choice | In einem Fachwerk-LGS ergibt Gauss det(A) = 0. Was bedeutet das physikalisch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] In der Statik werden Kräftegleichgewichte oft als LGS formuliert. Wenn ein Fachwerk 3 unbekannte Stabkräfte $S | 🎯 wAE |

### 🏁 Prüfungsaufgaben (Unit 3)
*Aufgaben auf TU Wien Prüfungsniveau — Matrizen, Determinanten, LGS und Eigenwerte*

3 Lektionen · 33 Aufgaben

#### Prüfung: Matrizen & Determinanten  `la-3-1` · 25 min

**Lernziele:**
- Matrizenoperationen auf Prüfungsniveau beherrschen
- Determinanten berechnen (2×2 und 3×3, Laplace-Entwicklung)
- Inverse Matrizen berechnen und interpretieren
- Rang einer Matrix bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Gegeben: $A = begin{pmatrix} 3 & 1  2 & 4 end{pmatrix}$, $B = begin{pmatrix} 1 & -1  0 & 2 end{pmatrix}$. Bere | wAE |
| 2 | ✅ true-false | [PRÜFUNG] Für zwei beliebige quadratische Matrizen $A$ und $B$ gilt stets: $A cdot B = B cdot A$. |  |
| 3 | 🔢 number-input | [PRÜFUNG] Berechne die Determinante: $detbegin{pmatrix} 4 & 7  2 & 6 end{pmatrix}$ |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Die Determinante einer 3×3-Matrix $A$ ist 0. Was folgt daraus? | wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Berechne $det(A)$ für $A = begin{pmatrix} 2 & 0 & 1  3 & 1 & -1  0 & 2 & 4 end{pmatrix}$ mit Entwicklung nach  |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Welche der folgenden Matrizen besitzt eine Inverse? | wAE |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Berechne die Inverse von $A = begin{pmatrix} 5 & 2  3 & 1 end{pmatrix}$. | wAE |
| 8 | ✅ true-false | [PRÜFUNG] Der Rang einer $3 times 4$-Matrix kann maximal 4 sein. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Welchen Rang hat $A = begin{pmatrix} 1 & 2 & 3  2 & 4 & 6  0 & 1 & 1 end{pmatrix}$? | wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Eigenschaft hat die Transponierte $(A^T)^T$? | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Gegeben $A = begin{pmatrix} 1 & 2  3 & k end{pmatrix}$. Für welchen Wert von $k$ ist $A$ nicht invertierbar? | 🎯 wAE |

#### Prüfung: LGS & Eigenwerte  `la-3-2` · 30 min

**Lernziele:**
- Lineare Gleichungssysteme mit Gauss-Algorithmus lösen
- Lösbarkeit und Lösungstypen anhand des Ranges beurteilen
- Eigenwerte und Eigenvektoren berechnen
- Eigenschaften von Eigenwerten interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Das LGS $begin{pmatrix} 1 & 2 & \| & 5  2 & 4 & \| & 10 end{pmatrix}$ hat ... | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Löse das LGS mit dem Gauss-Algorithmus: $x + 2y + z = 8$ $2x + y + 3z = 13$ $x - y + 2z = 5$ | wAE |
| 3 | ✅ true-false | [PRÜFUNG] Ein LGS $Avec{x} = vec{b}$ mit $text{rang}(A) < text{rang}([A\|vec{b}])$ hat unendlich viele Lösungen. |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Berechne die Eigenwerte von $A = begin{pmatrix} 3 & 1  1 & 3 end{pmatrix}$. | wAE |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Gegeben $A = begin{pmatrix} 3 & 1  1 & 3 end{pmatrix}$ mit Eigenwert $lambda_1 = 2$. Welcher Vektor ist ein Ei | wAE |
| 6 | 🔢 number-input | [PRÜFUNG] Die Spur (Trace) einer Matrix ist die Summe der Diagonaleinträge. Für $A = begin{pmatrix} 5 & 2  -1 & 3 end{pm |  |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Welchen Zusammenhang gibt es zwischen Determinante und Eigenwerten einer $n times n$-Matrix $A$? | wAE |
| 8 | ✅ true-false | [PRÜFUNG] Eine symmetrische reelle Matrix hat stets reelle Eigenwerte. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Das LGS $Avec{x} = vec{b}$ mit $A = begin{pmatrix} 1 & 1 & 1  2 & 3 & 1  1 & 2 & 0 end{pmatrix}$, $vec{b} = be | wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Gegeben $A = begin{pmatrix} 4 & 0  0 & -2 end{pmatrix}$ (Diagonalmatrix). Welche Eigenwerte und Eigenvektoren  | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Die Matrix $A = begin{pmatrix} 2 & 1  0 & 2 end{pmatrix}$ hat den doppelten Eigenwert $lambda = 2$. Wie viele  | 🎯 wAE |

#### Prüfung: Diagonalisierung & technische Anwendungen  `la-3-3` · 30 min

**Lernziele:**
- Matrizen diagonalisieren $A = P D P^{-1}$
- Eigenwerte für technische Probleme interpretieren (Trägheitstensor, Schwingungen, Stabilität)
- Defekte Matrizen erkennen
- Spektralsatz auf symmetrische Matrizen anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Eine Matrix $A$ ist genau dann diagonalisierbar, wenn: | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Gegeben $A = begin{pmatrix} 4 & 1  2 & 3 end{pmatrix}$. Berechne den größeren Eigenwert $lambda_{max}$. |  |
| 3 | ✅ true-false | [PRÜFUNG] Für eine reell-symmetrische Matrix sind alle Eigenwerte reell und Eigenvektoren zu verschiedenen Eigenwerten z |  |
| 4 | 🔗 matching | [PRÜFUNG] Ordne die technische Anwendung der Eigenwert-Aufgabe zu. |  |
| 5 | 🔢 number-input | [PRÜFUNG] $A = begin{pmatrix} 2 & 0  0 & 5 end{pmatrix}$. Berechne $det(A^{10})$. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Welche Matrix ist NICHT diagonalisierbar? | wAE |
| 7 | 🔢 number-input | [PRÜFUNG] Schwingungssystem: $K = begin{pmatrix} 4 & -1  -1 & 4 end{pmatrix}$, $M = I$. Welches ist die kleinere Eigenfr |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Eine Matrix $A$ hat Eigenwerte $lambda_1 = 0{,}5$, $lambda_2 = 0{,}9$. Wie verhält sich die Iteration $vec{x}_ | wAE |
| 9 | 📋 sorting | [PRÜFUNG] Bringe die Schritte zur Diagonalisierung einer Matrix in die richtige Reihenfolge. |  |
| 10 | 🔢 number-input | [PRÜFUNG] Trägheitstensor (in $kg cdot m^2$): $J = begin{pmatrix} 5 & 0 & 0  0 & 4 & 2  0 & 2 & 4 end{pmatrix}$. Wie gro |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] $A = begin{pmatrix} 3 & 1  0 & 2 end{pmatrix}$. Welche Aussage ist KORREKT? | 🎯 wAE |

<a id="differentialgleichungen"></a>
## Differentialgleichungen `differentialgleichungen`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** math  
**Prerequisites:** `ableitung`, `integralrechnung`  
**3 Units** · **10 Lektionen** · **103 Aufgaben** (🔘 53 · 🔢 16 · ✅ 15 · 🔗 11 · 📋 8)

*Gewöhnliche DGL: Trennung der Variablen, lineare DGL, Schwingungen*

### Grundbegriffe & einfache DGL (Unit 1)
*Was ist eine DGL, Trennung der Variablen, lineare DGL 1. und 2. Ordnung*

4 Lektionen · 40 Aufgaben

#### Was ist eine Differentialgleichung?  `dgl-1-1` · 15 min

**Lernziele:**
- DGL als Gleichung mit Funktion und Ableitungen verstehen
- Ordnung und Linearität bestimmen
- Anfangswertproblem verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist eine Differentialgleichung (DGL)? | wAE |
| 2 | 🔘 multiple-choice | Welche Ordnung hat die DGL $y'' + 3y' - 2y = 0$? | wAE |
| 3 | ✅ true-false | Die DGL $y' = y^2 + x$ ist linear. |  |
| 4 | 🔘 multiple-choice | Was unterscheidet eine Differentialgleichung von einer gewöhnlichen algebraischen Gleichung? | ➕ wAE |
| 5 | 🔢 number-input | Welche Ordnung hat die DGL y'' + 5y' − 2y = 0? Gib die Ordnung als ganze Zahl an. | ➕ |
| 6 | ✅ true-false | Die DGL y' = $y^2$ ist linear, weil nur die erste Ableitung y' vorkommt. | ➕ |
| 7 | 🔗 matching | Ordne die DGL ihren Eigenschaften zu. | ➕ |
| 8 | 📋 sorting | Bringe die Schritte zum Lösen eines Anfangswertproblems in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Jemand behauptet: „Die allgemeine Lösung von y' = 3y lautet y = 3x + C." Was ist daran falsch? | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Funktion löst das AWP $y' = 2y$ mit $y(0) = 3$? | 🎯 wAE |

#### Trennung der Variablen  `dgl-1-2` · 18 min

**Lernziele:**
- Methode der Variablentrennung anwenden
- Einfache DGL 1. Ordnung lösen
- Anfangswerte einsetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Bei der Trennung der Variablen bringt man die DGL $frac{dy}{dx} = g(x) cdot h(y)$ in welche Form? | wAE |
| 2 | 🔘 multiple-choice | Löse die DGL $y' = xy$ mit Trennung der Variablen. Welche allgemeine Lösung erhältst du? | wAE |
| 3 | 🔢 number-input | Gegeben: $y' = 2y$ mit $y(0) = 3$. Berechne $y(1)$ (auf 2 Dezimalstellen gerundet). |  |
| 4 | 🔘 multiple-choice | Welche Voraussetzung muss eine DGL erfüllen, damit Trennung der Variablen anwendbar ist? | ➕ wAE |
| 5 | 🔢 number-input | y' = 3y, y(0) = 2. Berechne y(1). ($e^3$ ≈ 20,086) | ➕ |
| 6 | ✅ true-false | Bei der Trennung der Variablen integriert man nur die linke Seite und setzt rechts einfach +C hinzu. | ➕ |
| 7 | 🔗 matching | Ordne die Schritte der Variablentrennung für y' = xy den richtigen Ausdrücken zu. | ➕ |
| 8 | 📋 sorting | Löse y' = −2y, y(0) = 5 in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Jemand löst y' = 2x·y und schreibt: ∫ dy/y = ∫ 2x·y dx. Was ist der Fehler? | ➕ wAE |
| 10 | 🔘 multiple-choice | Löse das AWP: $y' = -3y$, $y(0) = 5$. Was ist $y(x)$? | 🎯 wAE |

#### Lineare DGL 1. Ordnung  `dgl-1-3` · 20 min

**Lernziele:**
- Lineare DGL 1. Ordnung in Standardform bringen
- Integrierenden Faktor berechnen
- Homogene + partikuläre Lösung bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Die allgemeine lineare DGL 1. Ordnung hat die Form: | wAE |
| 2 | 🔘 multiple-choice | Wie lautet der integrierende Faktor $mu(x)$ für die DGL $y' + p(x) cdot y = q(x)$? | wAE |
| 3 | 🔘 multiple-choice | Löse: $y' + 2y = 0$. Die allgemeine Lösung ist: | wAE |
| 4 | 🔢 number-input | DGL: $y' + y = 3$, AWP: $y(0) = 1$. Berechne $y(1)$ (auf 2 Dezimalstellen). |  |
| 5 | 🔘 multiple-choice | Wozu dient der integrierende Faktor μ(x) = e^{∫p(x) dx} bei y' + p(x)y = q(x)? | ➕ wAE |
| 6 | 🔢 number-input | y' + y = 3, y(0) = 1. Berechne y(1). (e^{−1} ≈ 0,3679) | ➕ |
| 7 | ✅ true-false | Die homogene lineare DGL y' + 3y = 0 hat die allgemeine Lösung y = Ce^{3x}. | ➕ |
| 8 | 🔗 matching | Ordne die Schritte der Methode des integrierenden Faktors den richtigen Formeln zu. | ➕ |
| 9 | 📋 sorting | Löse y' − 2y = 0 mit dem integrierenden Faktor in der richtigen Reihenfolge. | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Die allgemeine Lösung von $y' - 3y = 6$ ist: | 🎯 wAE |

#### DGL 2. Ordnung mit konstanten Koeffizienten  `dgl-1-4` · 22 min

**Lernziele:**
- Charakteristische Gleichung aufstellen und lösen
- Drei Fälle unterscheiden: reelle, doppelte, komplexe Wurzeln
- Schwingungsverhalten aus der Lösung ablesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Für die DGL $ay'' + by' + cy = 0$ macht man den Ansatz $y = e^{lambda x}$. Welche Gleichung ergibt sich für $lambda$? | wAE |
| 2 | 🔘 multiple-choice | Die charakteristische Gleichung hat komplexe Wurzeln $lambda = alpha pm ibeta$. Welche Form hat die allgemeine Lösung? | wAE |
| 3 | 🔘 multiple-choice | Löse: $y'' + 4y = 0$. Die allgemeine Lösung ist: | wAE |
| 4 | 🔘 multiple-choice | Welchen Ansatz macht man bei homogenen linearen DGL 2. Ordnung mit konstanten Koeffizienten? | ➕ wAE |
| 5 | 🔢 number-input | Charakteristische Gleichung von $y'' - 5y' + 6y = 0$ ist $lambda^2 - 5lambda + 6 = 0$. Berechne die kleinere Wurzel $lam | ➕ |
| 6 | ✅ true-false | Hat die charakteristische Gleichung eine Doppelwurzel $lambda$, so lautet die allgemeine Lösung $y = C_1 e^{lambda x} +  | ➕ |
| 7 | 🔗 matching | Ordne die Art der Wurzeln der charakteristischen Gleichung der zugehörigen Lösungsform zu. | ➕ |
| 8 | 📋 sorting | Löse y'' + 4y = 0 in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Jemand löst y'' − 4y' + 4y = 0 mit der char. Gleichung $lambda^2 - 4lambda + 4 = (lambda-2)^2 = 0$ und schreibt y = C₁e^ | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $y'' - 5y' + 6y = 0$. Die allgemeine Lösung ist: | 🎯 wAE |

### Fortgeschrittene Methoden (Unit 2)
*Variation der Konstanten, DGL-Systeme, technische Anwendungen (Schwingungen, RC-Glied)*

3 Lektionen · 30 Aufgaben

#### Variation der Konstanten  `dgl-2-1` · 18 min

**Lernziele:**
- Methode der Variation der Konstanten verstehen
- Partikuläre Lösung für inhomogene DGL bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Bei der Variation der Konstanten ersetzt man die Konstante $C$ in der homogenen Lösung durch: | wAE |
| 2 | 🔘 multiple-choice | Für $y' + p(x)y = q(x)$ mit homogener Lösung $y_h = Ce^{-P(x)}$ (wobei $P(x) = int p(x),dx$) ergibt der Ansatz $y = C(x) | wAE |
| 3 | 🔘 multiple-choice | Löse mit Variation der Konstanten: $y' - y = e^{2x}$. | wAE |
| 4 | 🔘 multiple-choice | Was ist die Kernidee der Variation der Konstanten? | ➕ wAE |
| 5 | 🔢 number-input | y' − y = e^{2x}. Die allgemeine Lösung ist y = Ce^x + e^{2x}. Mit y(0) = 2: Berechne y(1). (e ≈ 2,718, $e^2$ ≈ 7,389) | ➕ |
| 6 | ✅ true-false | Die Variation der Konstanten liefert nur die partikuläre Lösung, nicht die allgemeine. | ➕ |
| 7 | 🔗 matching | Ordne die Schritte der Variation der Konstanten den richtigen Ausdrücken zu. | ➕ |
| 8 | 📋 sorting | Löse y' + 2y = 4e^{−2x} mit Variation der Konstanten in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Für y' + y = sin(x) setzt jemand direkt y_p = A·sin(x) an und erhält A·cos(x) + A·sin(x) = sin(x), woraus A = 1/2 und y_ | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $y' + y = sin(x)$. Die partikuläre Lösung (ohne homogenen Anteil) ist: | 🎯 wAE |

#### DGL-Systeme  `dgl-2-2` · 15 min

**Lernziele:**
- DGL-Systeme in Matrixform schreiben
- DGL höherer Ordnung als System umschreiben

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Ein DGL-System 1. Ordnung hat die Form $vec{y}' = A cdot vec{y}$. Was ist $A$? | wAE |
| 2 | ✅ true-false | Jede DGL höherer Ordnung lässt sich in ein System von DGL 1. Ordnung umschreiben. |  |
| 3 | 🔘 multiple-choice | Welche mathematische Struktur hat ein lineares DGL-System 1. Ordnung? | ➕ wAE |
| 4 | 🔢 number-input | y'' + 3y' + 2y = 0 wird als System mit y₁=y, y₂=y' geschrieben. Wie lautet y₂'? | ➕ |
| 5 | ✅ true-false | Jede DGL höherer Ordnung lässt sich in ein äquivalentes System von DGL 1. Ordnung umschreiben. | ➕ |
| 6 | 🔗 matching | Ordne den Begriff dem Inhalt bei DGL-Systemen zu. | ➕ |
| 7 | 📋 sorting | Bringe die Schritte zur Lösung von $vec{y}$' = A·$vec{y}$ in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Jemand schreibt y'' + 5y' + 6y = 0 als System: y₁' = y₂, y₂' = −5y₁ − 6y₂. Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Für das System $vec{y}$' = A·$vec{y}$ mit A = [[0,1],[−2,−3]] lauten die Eigenwerte λ₁=−1 und λ₂=−2. Welches Langzeitver | ➕ |
| 10 | 🔘 multiple-choice | Die DGL $y'' + 5y' + 6y = 0$ wird als System geschrieben mit $y_1 = y$, $y_2 = y'$. Wie lautet $y_2'$? | 🎯 wAE |

#### Technische Anwendungen  `dgl-2-3` · 20 min

**Lernziele:**
- Feder-Masse-Dämpfer-System modellieren
- RC-Glied als DGL beschreiben
- Eigenfrequenz berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Die Schwingungsgleichung eines Feder-Masse-Dämpfer-Systems lautet: | wAE |
| 2 | 🔗 matching | Ordne die physikalischen Größen den mathematischen Termen in $mx'' + cx' + kx = F(t)$ zu: |  |
| 3 | 🔘 multiple-choice | Ein RC-Glied (Widerstand $R$, Kapazität $C$, Spannung $u_C$) wird durch welche DGL beschrieben? | wAE |
| 4 | 🔘 multiple-choice | Wie setzt sich die allgemeine Lösung einer inhomogenen linearen DGL y'' + by' + cy = q(x) zusammen? | ➕ wAE |
| 5 | 🔢 number-input | y'' + y = 4. Partikulärer Ansatz y_p = A. Berechne A. | ➕ |
| 6 | ✅ true-false | Wenn q(x) = e^{2x} und λ=2 ein Eigenwert der homogenen DGL ist, muss der Ansatz y_p = A·x·e^{2x} gewählt werden. | ➕ |
| 7 | 🔗 matching | Ordne den Typ der Störfunktion q(x) dem passenden Ansatz für y_p zu. | ➕ |
| 8 | 📋 sorting | Löse y'' − 3y' + 2y = 4 in der richtigen Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Für y'' + y = cos(x) wählt jemand den Ansatz y_p = A·cos(x). Nach Einsetzen ergibt sich 0 = cos(x) — die Methode scheite | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Ein ungedämpftes Feder-Masse-System ($c = 0$): $m x'' + kx = 0$ mit $m = 2$ kg, $k = 8$ N/m. Die Eigenkreisfre | 🎯 wAE |

### 🏁 Prüfungsaufgaben (Unit 3)
*Aufgaben auf TU Wien Prüfungsniveau — DGL 1. Ordnung, DGL 2. Ordnung, Schwingungen*

3 Lektionen · 33 Aufgaben

#### Prüfung: DGL 1. Ordnung  `dgl-3-1` · 25 min

**Lernziele:**
- Trennbare DGL sicher lösen
- Lineare DGL 1. Ordnung mit integrierendem Faktor behandeln
- Anfangswertprobleme vollständig lösen
- Exakte DGL erkennen und die Potentialfunktion bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Löse die DGL durch Trennung der Variablen: $y' = x cdot y$ mit $y(0) = 2$. | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Welche allgemeine Lösung hat $y' - 3y = 0$? | wAE |
| 3 | ✅ true-false | [PRÜFUNG] Die DGL $y' + frac{2}{x}y = x^3$ ist eine lineare DGL 1. Ordnung. |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Der integrierende Faktor für $y' + p(x)y = q(x)$ ist: | wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Anfangswertproblem: $y' = -2y$, $y(0) = 5$. Welchen Wert hat $y(1)$ (auf 4 Dezimalstellen: $e^{-2} approx 0{,} |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Löse $y' + y = e^x$. Die allgemeine Lösung lautet: | wAE |
| 7 | ✅ true-false | [PRÜFUNG] Die Gleichung $M(x,y),dx + N(x,y),dy = 0$ ist exakt, wenn $frac{partial M}{partial y} = frac{partial N}{partia |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Prüfe $(2xy + y^2),dx + (x^2 + 2xy),dy = 0$ auf Exaktheit. Was gilt? | wAE |
| 9 | 🔗 matching | [PRÜFUNG] Ordne jede DGL ihrer Lösungsmethode zu: |  |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welchen Wert hat $C$ beim AWP $y' = frac{x}{y}$, $y(0) = 3$? (Allg. Lösung: $y^2 = x^2 + C$) | wAE |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Löse das AWP vollständig: $y' + 2y = 4$, $y(0) = 1$. | 🎯 wAE |

#### Prüfung: DGL 2. Ordnung & Anwendungen  `dgl-3-2` · 25 min

**Lernziele:**
- Charakteristische Gleichung aufstellen und lösen
- Allgemeine Lösung für alle Wurzeltypen angeben
- Partikuläre Lösung durch Ansatz vom Typ der rechten Seite bestimmen
- Schwingungsverhalten eines Feder-Masse-Systems analysieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Die charakteristische Gleichung von $y'' - 5y' + 6y = 0$ hat die Wurzeln: | wAE |
| 2 | ✅ true-false | [PRÜFUNG] Wenn die char. Gleichung eine doppelte reelle Wurzel $lambda$ hat, lautet die allgemeine Lösung $y = (C_1 + C_ |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Die char. Gleichung $lambda^2 + 4 = 0$ hat die Wurzeln: | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Die DGL $y'' + 4y' + 4y = 0$ hat den Ansatz $y_p = Ae^{ax}$ für eine partikuläre Lösung. Welches Phänomen trit | wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Ein Feder-Masse-System: $m = 1$ kg, $k = 9$ N/m, keine Dämpfung. Berechne die Eigenkreisfrequenz $omega_0$ in  |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Die allgemeine Lösung von $y'' + 2y' + 5y = 0$ lautet: | wAE |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Wurzeltypen der char. Gleichung dem Schwingungsverhalten zu: |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Finde die partikuläre Lösung von $y'' + y = 3cos(x)$ (Resonanzfall). Der richtige Ansatz ist: | wAE |
| 9 | ✅ true-false | [PRÜFUNG] Das Superpositionsprinzip gilt für lineare inhomogene DGL: Sind $y_1$ und $y_2$ zwei partikuläre Lösungen von  |  |
| 10 | 🔢 number-input | [PRÜFUNG] AWP: $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 0$. Berechne $C_1$ in der Lösung $y = C_1 e^{3x} + C_2 e^{-2x}$ |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Ein gedämpftes Feder-Masse-System: $x'' + 4x' + 3x = 0$, $x(0) = 2$, $x'(0) = -2$. Welche Aussage zur allgemei | 🎯 wAE |

#### Prüfung: Systeme & technische Modellbildung  `dgl-3-3` · 30 min

**Lernziele:**
- Lineare DGL-Systeme analysieren (Eigenwerte, Stabilität)
- Reale technische Systeme als DGL formulieren (Wärme, Strömung, Elektrik)
- Numerische Lösung mit Euler-Verfahren durchführen
- Stationäre Lösungen aus Bilanzgleichungen ermitteln

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Ein RLC-Stromkreis (Spannung $u$): $L ddot q + R dot q + frac{1}{C} q = u(t)$. Welcher Parameter wirkt wie ein | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] System: $dot x_1 = 2x_1 + x_2$, $dot x_2 = x_1 + 2x_2$. Wie groß ist der größere Eigenwert der Systemmatrix (e |  |
| 3 | ✅ true-false | [PRÜFUNG] Ein lineares DGL-System $dot{vec x} = Avec x$ ist asymptotisch stabil genau dann, wenn alle Eigenwerte von $A$ |  |
| 4 | 🔗 matching | [PRÜFUNG] Ordne die technischen Modelle ihren DGL-Typen zu. |  |
| 5 | 🔢 number-input | [PRÜFUNG] Newton-Abkühlung: Ein Werkstück hat $T(0) = 200$ °C in einer Umgebung mit $T_U = 20$ °C. Nach $t = 10$ min ist |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Ein Tank hat Zufluss $q_{ein} = 5$ L/min, Abfluss proportional zum Inhalt: $q_{aus} = 0{,}1 cdot V$. Was ist d | wAE |
| 7 | 📋 sorting | [PRÜFUNG] Ordne die Schritte der technischen Modellbildung mit DGL. |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage zum Euler-Verfahren $y_{n+1} = y_n + h cdot f(x_n, y_n)$ ist FALSCH? | wAE |
| 9 | ✅ true-false | [PRÜFUNG] Ein homogenes DGL-System $dot{vec x} = Avec x$ wird durch Diagonalisierung von $A$ in entkoppelte skalare DGL  |  |
| 10 | 🔢 number-input | [PRÜFUNG] Euler-Verfahren für $dot y = -2y$, $y(0) = 1$, Schrittweite $h = 0{,}1$. Berechne $y_2$ (Wert nach zwei Schrit |  |
| 11 | 🔘 multiple-choice | [PRÜFUNG] Eine Heizung füllt einen Raum mit Wärmeleistung $dot Q_{ein} = 2$ kW, Wärmeverlust nach außen ist proportional | 🎯 wAE |

<a id="komplexe-zahlen"></a>
## Komplexe Zahlen `komplexe-zahlen`

**Level:** Grundlagen · **Phase:** 2. Sem · **Category:** math  
**Prerequisites:** `algebra`, `trigonometry`  
**4 Units** · **9 Lektionen** · **90 Aufgaben** (🔘 47 · 🔢 19 · ✅ 9 · 🔗 8 · 📋 7)

*Imaginäre Einheit, Gaußsche Ebene, Euler-Formel und Moivre — Grundlage für DGL, Elektrotechnik, Schwingungen*

### Kartesische Form (Unit 1)

2 Lektionen · 20 Aufgaben

#### Imaginäre Einheit & Gaußsche Zahlenebene  `komz-1-1` · 14 min

**Lernziele:**
- i² = −1 als definierende Eigenschaft verstehen
- Komplexe Zahlen als Punkte in der Gaußschen Ebene darstellen
- Real- und Imaginärteil ablesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Aussage über die imaginäre Einheit $i$ ist **richtig**? | wAE |
| 2 | 🔘 multiple-choice | Welchen **Realteil** hat $z = -5 + 7i$? | wAE |
| 3 | ✅ true-false | Für $z = 4 - 7i$ ist $operatorname{Im}(z) = -7i$. |  |
| 4 | 🔢 number-input | Berechne $i^{4}$. |  |
| 5 | 🔗 matching | Ordne jede Potenz dem korrekten Wert zu. |  |
| 6 | 🔘 multiple-choice | Welche komplexe Zahl liegt auf der **imaginären Achse** der Gaußschen Ebene? | wAE |
| 7 | 🔘 multiple-choice | Was ist die **Konjugierte** von $z = -2 + 5i$? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zum Ablesen von $operatorname{Re}(z)$ und $operatorname{Im}(z)$ in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Imaginäre Einheit & Gaußsche Zahlenebene": Welche Form eignet sich am besten für Multiplikation kompl | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welchen Imaginärteil hat $z = 3 - 2i$? | 🎯 wAE |

#### Rechnen in kartesischer Form (+, −, ·, :)  `komz-1-2` · 18 min

**Lernziele:**
- Komplexe Zahlen addieren und subtrahieren
- Multiplikation mit i² = −1 anwenden
- Division via Erweitern mit dem konjugierten Nenner

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Berechne $(2 + 3i) + (4 - i)$. | wAE |
| 2 | 🔢 number-input | Gegeben $z_1 = 5 - 2i$, $z_2 = 3 + 4i$. Welchen **Realteil** hat $z_1 - z_2$? |  |
| 3 | 🔘 multiple-choice | Berechne $(1 + 2i) cdot (3 - i)$. | wAE |
| 4 | ✅ true-false | Für jede komplexe Zahl $z$ gilt $z cdot bar z = \|z\|^2$, also reell und nicht-negativ. |  |
| 5 | 🔘 multiple-choice | Welchen Nenner erhältst du, wenn du $dfrac{1}{2+3i}$ mit $overline{2+3i}$ erweiterst? | wAE |
| 6 | 🔢 number-input | Berechne den **Realteil** von $dfrac{1+i}{1-i}$. |  |
| 7 | 🔗 matching | Ordne jeder Operation das richtige Ergebnis zu. Alle mit $z_1 = 1+2i$, $z_2 = 3-i$. |  |
| 8 | 🔘 multiple-choice | Welcher Schritt ist bei der Division $dfrac{z}{w}$ der **wichtigste**? | wAE |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Rechnen in kartesischer Form (+, −, ·, :)": Welche Form eignet sich am besten für Multiplikation komp | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Berechne $(2+i)(1-3i)$. | 🎯 wAE |

### Polarform, Euler & Rechnen (Unit 2)

2 Lektionen · 20 Aufgaben

#### Betrag, Argument, Polarform  `komz-2-1` · 18 min

**Lernziele:**
- Betrag \|z\| als Abstand zum Ursprung berechnen
- Argument arg(z) als Winkel zur reellen Achse bestimmen
- Zwischen kartesisch und polar umrechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne den Betrag von $z = 6 + 8i$. |  |
| 2 | 🔘 multiple-choice | In welchem **Quadranten** der Gaußschen Ebene liegt $z = -3 + 2i$? | wAE |
| 3 | ✅ true-false | Der Betrag $\|z\|$ ist immer eine nicht-negative reelle Zahl. |  |
| 4 | 🔢 number-input | Welches Argument $varphi$ (in $pi$) hat $z = -2$? Gib den Faktor vor $pi$ an. |  |
| 5 | 🔗 matching | Ordne jede komplexe Zahl ihrem Argument (im Hauptwert) zu. |  |
| 6 | 🔘 multiple-choice | Welche kartesische Form hat $z = 2,(costfrac{pi}{3} + isintfrac{pi}{3})$? | wAE |
| 7 | 🔘 multiple-choice | Warum reicht **atan(b/a)** oft nicht, um $arg(z)$ zu bestimmen? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zum Umrechnen **kartesisch → polar** in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Betrag, Argument, Polarform": Welche Form eignet sich am besten für Multiplikation komplexer Zahlen? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welchen Betrag hat $z = 3 + 4i$? | 🎯 wAE |

#### Euler-Formel & Exponentialdarstellung  `komz-2-2` · 18 min

**Lernziele:**
- Die Euler-Formel $e^{ivarphi} = cosvarphi + isinvarphi$ kennen
- Komplexe Zahlen in der Form $z = \|z\| cdot e^{ivarphi}$ schreiben
- Vorteile der Exponentialform für Multiplikation erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welchen Wert hat $e^{ipi}$? | wAE |
| 2 | ✅ true-false | Für jeden reellen Winkel $varphi$ gilt $\|e^{ivarphi}\| = 1$. |  |
| 3 | 🔢 number-input | Berechne den Betrag von $z = 5,e^{ipi/4}$. |  |
| 4 | 🔘 multiple-choice | Schreibe $z = 1 + i$ in Exponentialform. | wAE |
| 5 | 🔘 multiple-choice | Berechne $e^{ipi/3} cdot e^{ipi/6}$. | wAE |
| 6 | 🔗 matching | Ordne jeden Wert seinem Euler-Ausdruck zu. |  |
| 7 | 🔢 number-input | Berechne $dfrac{e^{ipi}}{e^{ipi/3}}$. Gib das Ergebnis als Faktor $k$ an, wobei das Ergebnis $e^{ikpi}$ lautet. |  |
| 8 | 🔘 multiple-choice | Warum ist die Exponentialform $z = r,e^{ivarphi}$ für **Multiplikation** besonders praktisch? | wAE |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Euler-Formel & Exponentialdarstellung": Welche Form eignet sich am besten für Multiplikation komplexe | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welchen Wert hat $e^{ipi/2}$? | 🎯 wAE |

### Potenzen & Wurzeln (Unit 3)

2 Lektionen · 20 Aufgaben

#### Potenzen — Formel von de Moivre  `komz-3-1` · 18 min

**Lernziele:**
- Potenzen komplexer Zahlen mit der Moivreschen Formel berechnen
- Argumentvervielfachung verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Gegeben $z = 2e^{ipi/4}$. Was ist $z^2$? | wAE |
| 2 | 🔢 number-input | Berechne $\|z^5\|$ für $z = 3e^{ipi/7}$. |  |
| 3 | ✅ true-false | Die Moivre-Formel gilt für alle reellen Exponenten $n$, auch negative. |  |
| 4 | 🔘 multiple-choice | Was ist $i^{10}$? | wAE |
| 5 | 🔘 multiple-choice | Was passiert **geometrisch** bei der Abbildung $z mapsto z^2$ auf dem Einheitskreis? | wAE |
| 6 | 🔗 matching | Ordne jeder Potenz von $z = e^{ipi/6}$ ihren Wert zu. |  |
| 7 | 🔢 number-input | Berechne den **Realteil** von $(1+i)^3$. |  |
| 8 | 📋 sorting | Bringe die Schritte zur Berechnung von $z^n$ (für $z$ in kartesischer Form) in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Potenzen — Formel von de Moivre": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welchen Wert hat $(1+i)^4$? | 🎯 wAE |

#### Wurzeln — alle n-ten Wurzeln finden  `komz-3-2` · 18 min

**Lernziele:**
- Alle $n$ verschiedenen $n$-ten Wurzeln einer komplexen Zahl bestimmen
- Einheitswurzeln auf einem Kreis visualisieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Wie viele verschiedene vierte Wurzeln hat $16$ in $mathbb{C}$? |  |
| 2 | 🔘 multiple-choice | Welchen **Radius** haben alle vier vierten Wurzeln von $16$? | wAE |
| 3 | ✅ true-false | Die $n$ n-ten Wurzeln einer komplexen Zahl bilden in der Gaußschen Ebene die Ecken eines regelmäßigen $n$-Ecks. |  |
| 4 | 🔘 multiple-choice | Welche sind die drei **dritten Einheitswurzeln** (Lösungen von $z^3 = 1$)? | wAE |
| 5 | 🔢 number-input | Die 6. Einheitswurzeln sind gleichmäßig auf dem Einheitskreis verteilt. Wie groß ist der **Winkelabstand** zwischen zwei |  |
| 6 | 🔗 matching | Ordne jeder Gleichung die Anzahl ihrer Lösungen in $mathbb{C}$ zu. |  |
| 7 | 🔘 multiple-choice | Welche Aussage über die n-ten Einheitswurzeln ist **falsch**? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zum Lösen von $z^n = w$ in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Wurzeln — alle n-ten Wurzeln finden": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Wie viele verschiedene kubische Wurzeln hat $8$ in $mathbb{C}$? | 🎯 wAE |

### 🏁 Prüfung (Unit 4)

3 Lektionen · 30 Aufgaben

#### Prüfung: Anwendungen & Gesamtaufgaben  `komz-pruefung-1` · 25 min

**Lernziele:**
- Komplexe Rechnung auf Prüfungsniveau kombinieren
- Form je nach Operation geschickt wählen
- Anwendung in Schwingungen und Impedanz verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Wie groß ist $\|1 - i\|$? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Eine RL-Reihenschaltung hat Widerstand $R = 30,Omega$ und Blindwiderstand $omega L = 40,Omega$. Die Impedanz l |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Gleiche RL-Schaltung ($R = 30$, $omega L = 40$). Welcher **Phasenwinkel** $varphi = arg Z$ liegt vor? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Die Amplitude einer harmonischen Schwingung wird als $hat{u}(t) = operatorname{Re}(U_0,e^{iomega t})$ geschrie | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Bei einer Reihenschaltung $R + iomega L - i/(omega C)$ kann der Scheinwiderstand $\|Z\|$ **null** werden, wenn |  |
| 6 | 🔢 number-input | [PRÜFUNG] Eine Schwingung hat die komplexe Amplitude $underline{U} = 4 + 3i$. Gib die reale Amplitude (Maximalwert von $ |  |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Zwei Impedanzen sind parallel geschaltet: $Z_1 = 2 + 2i,Omega$, $Z_2 = 2 - 2i,Omega$. Berechne die Gesamt-Impe | wAE |
| 8 | 📋 sorting | [PRÜFUNG] Berechne $\|Z\|$ und $arg Z$ für $Z = 1 + isqrt{3}$. Bringe die Schritte in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Anwendungen & Gesamtaufgaben": Welche Form eignet sich am besten für Multiplikatio | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Eine Impedanz $Z = 3 + 4i,Omega$. Wie groß ist der **Betrag** $\|Z\|$ in Ohm? | 🎯 wAE |

#### Prüfung: Polarform & Multiplikation  `komz-pruefung-2` · 22 min

**Lernziele:**
- [PRÜFUNG] Komplexe Zahlen in Polarform umrechnen
- [PRÜFUNG] Multiplikation und Division in Exponentialform
- [PRÜFUNG] Argument im Hauptwert angeben

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Welche Polarform hat $z = -i$? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Gegeben $z_1 = 4 e^{ipi/6}$ und $z_2 = 5 e^{ipi/3}$. Wie groß ist $\|z_1 cdot z_2\|$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Berechne $dfrac{12,e^{i 5pi/6}}{3,e^{ipi/3}}$. | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Das Argument $arg(z_1/z_2)$ liegt immer im Hauptwert-Intervall $(-pi, pi]$, auch wenn $arg z_1 - arg z_2$ auße |  |
| 5 | 🔢 number-input | [PRÜFUNG] Gegeben $z = -1 + sqrt{3},i$. Wie groß ist $arg(z)$ im Hauptwert, als Faktor vor $pi$? |  |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jede Operation auf $z_1 cdot z_2$ der richtigen Berechnung zu. $z_1 = r_1 e^{ivarphi_1}$, $z_2 = r_2 e^{ |  |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Student rechnet: „$z = -1 - i$ liegt im 3. Quadranten. $arg z = arctan(1) = pi/4$." Wo ist der Fehler? | wAE |
| 8 | 📋 sorting | [PRÜFUNG] Aufgabe: „Berechne $(-2 + 2i) cdot (1 + i)$ und gib das Ergebnis in **kartesischer** Form an." Bringe die Schr |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Polarform & Multiplikation": Welche Form eignet sich am besten für Multiplikation  | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $z_1 = 2e^{ipi/3}$, $z_2 = 3e^{ipi/6}$. Berechne $z_1 cdot z_2$. | 🎯 wAE |

#### Prüfung: Wurzeln & Gleichungen  `komz-pruefung-3` · 22 min

**Lernziele:**
- [PRÜFUNG] Alle n-ten Wurzeln einer komplexen Zahl berechnen
- [PRÜFUNG] Komplexe Gleichungen (z.B. $z^n = a$) lösen
- [PRÜFUNG] Impedanz-Berechnungen in der Elektrotechnik

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Wie viele Lösungen hat $z^5 = 32$ in $mathbb{C}$? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Welchen **Radius** haben alle fünf Lösungen von $z^5 = 32$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Welche komplexe Zahl ist **nicht** Lösung von $z^4 = 1$? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Student soll $z^3 = -8$ lösen. Er schreibt $z = sqrt[3]{-8} = -2$. Wie viele Lösungen fehlen ihm? | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Für **ungerades** $n$ gilt: Wenn $z_0$ Lösung von $z^n = w$ ist, dann ist auch $-z_0$ Lösung. |  |
| 6 | 🔗 matching | [PRÜFUNG] Impedanz-Rechnung. Ordne jeden Ausdruck seinem physikalischen Namen zu. |  |
| 7 | 🔢 number-input | [PRÜFUNG] Eine RLC-Reihenschaltung hat $R = 50,Omega$, $omega L = 100,Omega$, $1/(omega C) = 140,Omega$. Berechne den Sc |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zum Lösen von $z^n = w$ in der Prüfung. Bringe die Schritte in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Wurzeln & Gleichungen": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Alle Lösungen von $z^2 = i$ ($= e^{ipi/2}$)? | 🎯 wAE |

<a id="reihen-folgen"></a>
## Reihen & Folgen `reihen-folgen`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** math  
**Prerequisites:** `ableitung`, `integralrechnung`  
**2 Units** · **5 Lektionen** · **50 Aufgaben** (🔘 24 · 🔢 9 · ✅ 7 · 🔗 5 · 📋 5)

*Konvergenz, Potenzreihen, Taylor — essenziell für Analysis und Approximationen*

### Folgen, Reihen & Konvergenz (Unit 1)

2 Lektionen · 20 Aufgaben

#### Folgen und Grenzwerte  `rf-1-1` · 12 min

**Lernziele:**
- Folgen als Funktionen $mathbb{N} to mathbb{R}$ verstehen
- Konvergenz und Grenzwert definieren
- Monotonie und Beschränktheit prüfen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welchen Grenzwert hat die Folge $a_n = dfrac{2n + 3}{n + 1}$? | wAE |
| 2 | ✅ true-false | Jede monoton wachsende Folge ist konvergent. |  |
| 3 | 🔘 multiple-choice | Welche Folge ist **beschränkt aber nicht konvergent**? | wAE |
| 4 | 🔢 number-input | Für welches kleinste $N$ gilt $\|1/n - 0\| < 0{,}01$ für alle $n geq N$? (Gib $N$ an.) |  |
| 5 | 🔗 matching | Ordne jeder Folge ihren Grenzwert zu. |  |
| 6 | ✅ true-false | Die Folge $a_n = (1 + 1/n)^n$ konvergiert gegen $e$. |  |
| 7 | 🔘 multiple-choice | Welche Aussage zur Folge $a_n = dfrac{sin n}{n}$ ist **richtig**? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zur Grenzwert-Berechnung einer rationalen Folge in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Folgen und Grenzwerte": Was sichert die Konvergenz einer geometrischen Reihe Σ qⁿ? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welchen Grenzwert hat $a_n = frac{1}{n}$? | 🎯 wAE |

#### Taylor-Polynome  `rf-1-2` · 14 min

**Lernziele:**
- Taylor-Polynom vom Grad $n$ um einen Entwicklungspunkt $x_0$ aufstellen
- Taylorentwicklung für $e^x$, $sin x$, $cos x$ kennen
- Restglied nach Lagrange abschätzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Ableitung brauchst du für den Koeffizienten $c_3$ im Taylor-Polynom $T_3(x) = sum_{k=0}^{3} c_k (x-x_0)^k$? | wAE |
| 2 | 🔘 multiple-choice | Taylor-Polynom 3. Grades von $sin x$ um $x_0 = 0$? | wAE |
| 3 | 🔢 number-input | Wie gut nähert $T_1(x) = x$ den Wert $sin(0{,}1)$? Gib den **Näherungswert** (also $T_1(0{,}1)$) an. |  |
| 4 | ✅ true-false | Das Taylor-Polynom ist immer exakt gleich der Funktion. |  |
| 5 | 🔗 matching | Ordne jeder Funktion ihr Taylor-Polynom $T_2(x)$ um $x_0 = 0$ zu. |  |
| 6 | 🔢 number-input | Schätze $cos(0{,}2)$ mit dem Taylor-Polynom $T_2$ um $x_0 = 0$ ab. |  |
| 7 | 🔘 multiple-choice | Warum konvergiert $T_n(x) to e^x$ für jedes $x in mathbb{R}$, aber $T_n(x) to 1/(1-x)$ nur für $\|x\| < 1$? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zum Aufstellen eines Taylor-Polynoms in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Taylor-Polynome": Was sichert die Konvergenz einer geometrischen Reihe Σ qⁿ? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Taylor-Polynom 2. Grades von $f(x) = e^x$ um $x_0 = 0$? | 🎯 wAE |

### 🏁 Prüfung (Unit 2)

3 Lektionen · 30 Aufgaben

#### Prüfung: Taylor, Konvergenz, Restglied  `rf-pruefung-1` · 20 min

**Lernziele:**
- Konvergenz mit passenden Kriterien prüfen
- Taylorentwicklung einer Funktion aufstellen
- Restglied abschätzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Grenzwert der geometrischen Reihe $sum_{n=0}^infty (1/2)^n$? |  |
| 2 | ✅ true-false | [PRÜFUNG] Die harmonische Reihe $sum_{n=1}^infty 1/n$ konvergiert, weil die Glieder gegen $0$ gehen. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Welches Kriterium ist am schnellsten anzuwenden für $sum_{n=0}^infty dfrac{n!}{10^n}$? | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Näherung: Berechne $e^{0{,}1}$ über $T_2$ um $x_0 = 0$. Gib 4 Nachkommastellen an. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welche Reihe ist absolut konvergent? | wAE |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jede Reihe ihrem Verhalten zu. |  |
| 7 | ✅ true-false | [PRÜFUNG] Bei einer Potenzreihe $sum c_n x^n$ kann man am **Rand** des Konvergenzradius keine allgemeine Aussage über Ko |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zum Konvergenztest einer Reihe $sum a_n$. Bringe die Schritte in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Taylor, Konvergenz, Restglied": Was sichert die Konvergenz einer geometrischen Rei | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Grenzwert der geometrischen Reihe $sum_{n=0}^infty (1/3)^n$? | 🎯 wAE |

#### Prüfung: Konvergenzkriterien & Potenzreihen  `rf-pruefung-2` · 20 min

**Lernziele:**
- [PRÜFUNG] Quotientenkriterium anwenden
- [PRÜFUNG] Konvergenzradius einer Potenzreihe berechnen
- [PRÜFUNG] Majoranten- und Minorantenkriterium kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Quotientenkriterium auf $sum dfrac{1}{n!}$. Was ergibt $q$? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Berechne den Konvergenzradius von $sum_{n=0}^infty dfrac{x^n}{2^n}$. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Für welche $x$ konvergiert $sum_{n=0}^infty dfrac{x^n}{n}$ (mit $n geq 1$)? | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Wenn das Quotientenkriterium $q = 1$ liefert, ist die Reihe divergent. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage über $sum dfrac{n}{e^n}$ ist **richtig**? | wAE |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jedem Konvergenzradius seine Potenzreihe zu. |  |
| 7 | 🔢 number-input | [PRÜFUNG] Berechne den Konvergenzradius von $sum_{n=0}^infty n^2, x^n$. |  |
| 8 | 📋 sorting | [PRÜFUNG] Berechnung des Konvergenzradius. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Konvergenzkriterien & Potenzreihen": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Konvergenzradius von $sum_{n=0}^infty frac{x^n}{n!}$ (Taylor-Reihe von $e^x$)? | 🎯 wAE |

#### Prüfung: Taylor-Restglied & Näherungen  `rf-pruefung-3` · 22 min

**Lernziele:**
- [PRÜFUNG] Restglied nach Lagrange abschätzen
- [PRÜFUNG] Taylor-Näherung für Berechnungen nutzen
- [PRÜFUNG] Fehler einer Taylor-Näherung nach oben abschätzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Näherung $sin(0{,}05) approx x$. Welchen Wert gibt das? |  |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Was ist $M_{n+1}$ bei der Lagrange-Abschätzung $\|R_n(x)\| leq M_{n+1}/(n+1)! cdot \|x-x_0\|^{n+1}$? | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] Schätze $\|R_2(x)\|$ für $cos x approx 1 - x^2/2$ auf $x in [0, 0{,}2]$ nach oben ab. |  |
| 4 | ✅ true-false | [PRÜFUNG] Ein höherer Grad des Taylor-Polynoms reduziert den Approximationsfehler **garantiert** — unabhängig von $x$. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welche Näherung ist am genauesten für kleine $x$ (z.B. $x = 0{,}01$)? | wAE |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jeder Funktion ihre **höchste Ableitung $f^{(n+1)}$** für die Lagrange-Abschätzung zu (für $n = 3$, d.h. |  |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Welches Vorgehen ist bei der Fehlerabschätzung von $e^x approx T_n(x)$ auf $[0, 0{,}5]$ **effizient**? | wAE |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur Fehlerabschätzung von $f(x) approx T_n(x)$ auf $[x_0, x]$. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Taylor-Restglied & Näherungen": Was sichert die Konvergenz einer geometrischen Rei | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Restglied $\|R_1(x)\|$ von $e^x approx 1+x$ auf $[0, 0{,}1]$ (Grad-1-Taylor um $x_0=0$)? | 🎯 wAE |

<a id="mehrdim-analysis"></a>
## Mehrdim. Analysis `mehrdim-analysis`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** math  
**Prerequisites:** `ableitung`, `integralrechnung`, `vektoren`  
**2 Units** · **5 Lektionen** · **50 Aufgaben** (🔘 26 · 🔢 9 · ✅ 5 · 🔗 5 · 📋 5)

*Partielle Ableitungen, Gradient, Extrema, Mehrfachintegrale — ab 2. Semester zentral*

### Partielle Ableitungen & Gradient (Unit 1)

2 Lektionen · 20 Aufgaben

#### Partielle Ableitung verstehen  `mdim-1-1` · 14 min

**Lernziele:**
- Funktionen mehrerer Variablen verstehen
- Partielle Ableitung ∂f/∂x, ∂f/∂y berechnen
- Gradient als Vektor interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist $partial/partial y$ von $f(x,y) = x^3 y^2$? | wAE |
| 2 | 🔢 number-input | Für $f(x,y) = x^2 + 2xy$ den Wert $partial f/partial x$ an $(3, 1)$. |  |
| 3 | 🔘 multiple-choice | Was ist der **Gradient** von $f(x,y) = x^2 + y^2$ am Punkt $(1, 2)$? | wAE |
| 4 | ✅ true-false | Der Gradient $nabla f$ zeigt **entlang** der Niveaulinien von $f$. |  |
| 5 | 🔢 number-input | Betrag des Gradienten von $f(x,y) = x^2 + y^2$ an $(3, 4)$. |  |
| 6 | 🔗 matching | Ordne jeder Funktion ihren Gradienten zu. |  |
| 7 | 🔘 multiple-choice | Ein **Höhenlinienbild** $f(x,y) = $ const zeigt Niveaulinien. Wie steht $nabla f$ zur Niveaulinie? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zur Berechnung der Tangentialebene an $f(x,y)$ im Punkt $(x_0, y_0)$ in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Partielle Ableitung verstehen": Was ist bei zusammengesetzten Funktionen der häufigste Fehler? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Für $f(x,y) = x^2 + 3y$: Was ist $partial f/partial x$? | 🎯 wAE |

#### Hesse-Matrix und Lagrange-Multiplikatoren  `mdim-1-2` · 16 min

**Lernziele:**
- Hesse-Matrix aufstellen und Extrema in 2D klassifizieren
- Lagrange-Multiplikatoren bei einer Nebenbedingung anwenden
- Sattel- von Extrempunkten unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Kritische Punkte von $f(x,y) = x^2 - y^2$ ergeben sich aus $nabla f = 0$. Wo liegen sie? | wAE |
| 2 | 🔘 multiple-choice | Hesse-Matrix von $f(x,y) = x^2 - y^2$ ist $H = begin{pmatrix}2 & 0 0 & -2end{pmatrix}$. Klassifikation von $(0,0)$? | wAE |
| 3 | 🔢 number-input | Hesse-Determinante von $f = xy$. Berechne $det H$. |  |
| 4 | ✅ true-false | Bei einem Sattelpunkt gilt $det(H) > 0$ und $f_{xx} = 0$. |  |
| 5 | 🔘 multiple-choice | Lagrange: Extremum von $f = x + y$ unter $g = x^2 + y^2 - 2 = 0$. Welche Gleichung ergibt sich? | wAE |
| 6 | 🔗 matching | Ordne jedem Hesse-Resultat die Klassifikation zu. |  |
| 7 | 🔘 multiple-choice | Geometrisch: Am Minimum ist der Gradient zur Niveaulinie … | wAE |
| 8 | 📋 sorting | Bringe die Lagrange-Methode in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Hesse-Matrix und Lagrange-Multiplikatoren": Was ist bei zusammengesetzten Funktionen der häufigste Fe | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Für $f(x,y) = x^2 + y^2$ ist $H = begin{pmatrix}2&00&2end{pmatrix}$ bei $(0,0)$. Klassifikation? | 🎯 wAE |

### 🏁 Prüfung (Unit 2)

3 Lektionen · 30 Aufgaben

#### Prüfung: Extrema, Fehlerfortpflanzung  `mdim-pruefung-1` · 25 min

**Lernziele:**
- Extrema 2D über $nabla f = 0$ + Hesse-Matrix klassifizieren
- Fehlerfortpflanzung mit totalem Differential rechnen
- Lagrange-Multiplikatoren bei Nebenbedingungen einsetzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Notwendige Bedingung für Extremum von $f(x,y)$? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $f(x,y) = x^2 + xy + y^2$. Anzahl kritischer Punkte? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Hesse von $f = x^2 + xy + y^2$ bei $(0,0)$? | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Bei welchem Winkel im Radiant (im Hauptwert) zeigt $nabla f$ für $f(x,y) = x^2 + y^2$ am Punkt $(1, 1)$? |  |
| 5 | ✅ true-false | [PRÜFUNG] Wenn $nabla f$ und $nabla g$ an einem Punkt parallel sind und $g(x,y)=0$ gilt, dann ist der Punkt ein Kandidat |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Maximale Rechteckfläche mit Umfang $8$: Welche Methode passt? | wAE |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jede Situation ihrer Methode zu. |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur Extremsuche in 2D. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Extrema, Fehlerfortpflanzung": Was zeigt der Gradient ∇f an einem Punkt? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Für $f(x,y) = x^2 + y^2$: Welchen kritischen Punkt hat $f$? | 🎯 wAE |

#### Prüfung: Fehlerfortpflanzung & totales Differential  `mdim-pruefung-2` · 20 min

**Lernziele:**
- [PRÜFUNG] Totales Differential $df = f_x dx + f_y dy$ berechnen
- [PRÜFUNG] Maximale Fehlerabschätzung mit Teilfehlern
- [PRÜFUNG] Gauß'sche Fehlerfortpflanzung anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Totales Differential von $z = x^2 + y^2$. | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $z = x/y$, $x = 10 pm 0{,}1$, $y = 2 pm 0{,}05$. Max. Fehler $Delta z$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $V = r^2 pi h$ (Zylindervolumen). Welches $partial V/partial r$? | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Die **Gauß-Abschätzung** liefert **kleineren** Fehler als die Max-Abschätzung. |  |
| 5 | 🔢 number-input | [PRÜFUNG] Fläche $A = l cdot b$. $l = 5 pm 0{,}1$, $b = 3 pm 0{,}05$. Gauß-Fehler $Delta A$? |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Bei Fehlerfortpflanzung für Produkte $z = xy$: Welche **relative** Fehler-Formel gilt? | wAE |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jeder Messformel den richtigen Fehler-Typ zu (relativ vs. absolut). |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur Fehlerabschätzung bei $z = f(x, y, ldots)$. Bringe in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Fehlerfortpflanzung & totales Differential": Was ist bei zusammengesetzten Funktio | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $z = x cdot y$, $x = 3 pm 0{,}1$, $y = 4 pm 0{,}2$. Maximaler absoluter Fehler $Delta z$? | 🎯 wAE |

#### Prüfung: Lagrange & Gesamtaufgaben  `mdim-pruefung-3` · 22 min

**Lernziele:**
- [PRÜFUNG] Lagrange-Multiplikatoren vollständig durchrechnen
- [PRÜFUNG] Typ des Extremums mit Hesse-Matrix bestimmen
- [PRÜFUNG] Gemischte Aufgaben aus partieller Ableitung, Extrema, Fehler

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: $f(x,y) = x + 2y$ unter NB $x^2 + y^2 = 5$. Bei welchen Punkten liegen Extrema? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Rechteck maximaler Fläche mit Umfang $12$: Welche Seitenlänge $x$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] $f(x,y) = x^2 y$ unter $x + y = 1$. Welche Gleichung folgt aus Lagrange? | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Bei Lagrange muss man **alle drei** Gleichungen ($f_x = lambda g_x$, $f_y = lambda g_y$, $g = 0$) zusammen lös |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Geometrische Bedeutung der Lagrange-Bedingung $nabla f = lambda nabla g$ am Extremum? | wAE |
| 6 | 🔢 number-input | [PRÜFUNG] $f(x,y) = xy$ unter $x^2 + y^2 = 2$. Maximum von $f$? |  |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jede Aufgabe ihrem Lösungsansatz zu. |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie für Prüfungsaufgabe „Extremum unter Nebenbedingung". Bringe in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Lagrange & Gesamtaufgaben": Was zeigt der Gradient ∇f an einem Punkt? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $f(x,y) = x^2 + y^2$ auf $x + y = 2$. Wo liegt das Minimum? | 🎯 wAE |

<a id="numerik"></a>
## Numerische Mathematik `numerik`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** math  
**Prerequisites:** `algebra`, `ableitung`  
**2 Units** · **5 Lektionen** · **50 Aufgaben** (🔘 23 · 🔢 11 · ✅ 6 · 🔗 5 · 📋 5)

*Bisektion, Newton, Trapez/Simpson, LGS — Algorithmen statt exakter Lösungen*

### Nullstellen & Integration (Unit 1)

2 Lektionen · 20 Aufgaben

#### Newton-Verfahren  `num-1-1` · 14 min

**Lernziele:**
- Newton-Iteration verstehen und anwenden
- Startwert und Konvergenz einschätzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Newton auf $f(x) = x^2 - 9$, $x_0 = 4$. Berechne $x_1$. |  |
| 2 | 🔘 multiple-choice | Was passiert bei Newton, wenn $f'(x_n) = 0$ ist? | wAE |
| 3 | 🔘 multiple-choice | Newton auf $f(x) = x^3 - 2x + 2$ mit Startwert $x_0 = 0$. Was passiert? | wAE |
| 4 | ✅ true-false | Newton konvergiert bei einfachen Nullstellen **quadratisch** — die Zahl der korrekten Dezimalstellen verdoppelt sich pro |  |
| 5 | 🔘 multiple-choice | Warum wählt man bei Newton-Iteration einen **guten Startwert**? | wAE |
| 6 | 🔗 matching | Ordne jede Nullstelle ihrer Konvergenzordnung unter Newton zu. |  |
| 7 | 📋 sorting | Bringe einen Newton-Schritt in die richtige Reihenfolge. |  |
| 8 | 🔢 number-input | Newton auf $f(x) = x^2 - 2$, $x_0 = 1{,}5$. Gib $x_1$ mit 4 Nachkommastellen an. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Newton-Verfahren": Wovon hängt die Konvergenzgeschwindigkeit des Newton-Verfahrens ab? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Newton auf $f(x) = x^2 - 2$, Startwert $x_0 = 1$: Wie lautet $x_1$? | 🎯 wAE |

#### Bisektion und numerische Integration  `num-1-2` · 14 min

**Lernziele:**
- Bisektion als robuste Nullstellensuche durchführen
- Trapezregel und Simpson-Regel für bestimmte Integrale anwenden
- Fehlerordnung der Verfahren einordnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Bisektion: $f(x) = x^2 - 3$, Intervall $[1, 2]$. Was ist $x_1 = (a+b)/2$? |  |
| 2 | 🔘 multiple-choice | Bisektion hat welche Konvergenzordnung? | wAE |
| 3 | 🔢 number-input | Trapezregel für $int_0^1 e^x,dx$ mit einem Teilintervall. |  |
| 4 | 🔢 number-input | Simpson-Regel für $int_0^2 x^2,dx$ mit $a=0, b=2$, $m=1$. |  |
| 5 | ✅ true-false | Simpson-Regel ist für Polynome bis Grad 3 **exakt** (kein Fehler). |  |
| 6 | 🔗 matching | Ordne jedem Verfahren seine Fehlerordnung zu. |  |
| 7 | 🔘 multiple-choice | Wann nutzt man **Bisektion** statt **Newton**? | wAE |
| 8 | 📋 sorting | Schritte der Bisektion. Bringe in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Bisektion und numerische Integration": Wovon hängt die Konvergenzgeschwindigkeit des Newton-Verfahren | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Trapezregel für $int_0^2 x^2,dx$ mit einem Teilintervall [$a=0$, $b=2$]? | 🎯 wAE |

### 🏁 Prüfung (Unit 2)

3 Lektionen · 30 Aufgaben

#### Prüfung: Numerische Methoden kombiniert  `num-pruefung-1` · 25 min

**Lernziele:**
- Verfahren dem Problem zuordnen (Newton, Trapez, Simpson, LGS)
- Konvergenzordnung und Fehlerabschätzung kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Welches Problem wird mit dem **Newton-Verfahren** gelöst? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] Newton auf $f(x) = x^2 - 5$, $x_0 = 2$. Wie lautet $x_1$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Welche Konvergenzordnung hat **Newton** bei einfachen Nullstellen? | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Ein **Abbruchkriterium** ist bei iterativen Verfahren zwingend nötig. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Simpson braucht zur Bildung der Quadratur **gerade** Anzahl an Teilintervallen. Warum? | wAE |
| 6 | 🔢 number-input | [PRÜFUNG] Trapez-Fehler bei Integration von $x^2$ auf $[0, 1]$ mit $n = 10$? Hinweis: Fehler $= -(b-a)^3 f''(xi)/(12 n^2 |  |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jedem Problem das passendste Verfahren zu. |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur Verfahrens-Wahl bei numerischen Problemen. Bringe in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Numerische Methoden kombiniert": Wovon hängt die Konvergenzgeschwindigkeit des New | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Welche Konvergenzordnung hat Newton bei einfachen Nullstellen? | 🎯 wAE |

#### Prüfung: Trapez, Simpson & Fehlerordnung  `num-pruefung-2` · 20 min

**Lernziele:**
- [PRÜFUNG] Trapezregel und Simpson-Regel mit mehreren Teilintervallen anwenden
- [PRÜFUNG] Fehlerordnung $mathcal{O}(h^2)$ vs. $mathcal{O}(h^4)$ vergleichen
- [PRÜFUNG] Anzahl der Teilintervalle für gegebene Genauigkeit bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Simpson für $int_0^2 x^2,dx$ mit $n=2$, $h=1$, $m=1$. |  |
| 2 | 🔢 number-input | [PRÜFUNG] Trapez mit $n = 4$ für $int_0^1 x^3,dx$. $h = 0{,}25$, Stützstellen $0, 0{,}25, 0{,}5, 0{,}75, 1$. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Wie viele Teilintervalle $n$ braucht man, damit Trapez-Fehler auf ein Viertel reduziert wird? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Wie viele Teilintervalle braucht Simpson, um denselben Fehler-Gewinn zu haben? | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Simpson benötigt eine **gerade** Anzahl Teilintervalle (sonst nicht anwendbar). |  |
| 6 | 🔢 number-input | [PRÜFUNG] $n = 4$, Trapez für $int_0^4 sqrt{x},dx$. Stützstellen $0, 1, 2, 3, 4$. |  |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jeder Aussage das richtige Verfahren zu. |  |
| 8 | 📋 sorting | [PRÜFUNG] Schritte zur Berechnung eines Integrals mit zusammengesetzter Trapezregel. Bringe in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Trapez, Simpson & Fehlerordnung": Wovon hängt die Konvergenzgeschwindigkeit des Ne | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Trapezregel für $int_0^2 x^2,dx$ mit $n=2$ Teilintervallen ($h=1$)? | 🎯 wAE |

#### Prüfung: Kombinierte Aufgaben & Abbruchkriterien  `num-pruefung-3` · 22 min

**Lernziele:**
- [PRÜFUNG] Verfahren dem Problem zuordnen
- [PRÜFUNG] Abbruchkriterium korrekt anwenden
- [PRÜFUNG] Vor- und Nachteile der Verfahren benennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe: Ein gültiges Abbruchkriterium für Newton ist … | wAE |
| 2 | ✅ true-false | [PRÜFUNG] Wenn $\|f(x_n)\|$ klein ist, muss $x_n$ auch nah an der Nullstelle liegen. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Bei welcher Situation **divergiert** Newton typischerweise? | wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Bisektion: Fehler nach 10 Schritten, Startintervall $[0, 1]$. |  |
| 5 | 🔗 matching | [PRÜFUNG] Ordne jeder Aussage das richtige Verfahren zu. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] Ein Integrationsproblem lautet: „Berechne $int_0^1 e^{-x^2},dx$ auf 4 Nachkommastellen Genauigkeit." Welche St | wAE |
| 7 | ✅ true-false | [PRÜFUNG] Rundungsfehler und Verfahrensfehler sind dasselbe. |  |
| 8 | 📋 sorting | [PRÜFUNG] Gesamtstrategie für ein numerisches Problem in der Prüfung. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Kombinierte Aufgaben & Abbruchkriterien": Wovon hängt die Konvergenzgeschwindigkei | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Welches Verfahren ist robuster, wenn der Startwert weit von der Nullstelle entfernt liegt? | 🎯 wAE |

<a id="statistik"></a>
## Statistik & Wahrscheinlichkeit `statistik`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** math  
**Prerequisites:** `algebra`, `integralrechnung`  
**2 Units** · **6 Lektionen** · **60 Aufgaben** (🔘 24 · 🔢 17 · ✅ 7 · 🔗 6 · 📋 6)

*Zufallsvariablen, Normalverteilung, Schätzen, Hypothesentests — fürs Messdaten-Auswerten*

### Zufallsvariablen & Verteilungen (Unit 1)

3 Lektionen · 30 Aufgaben

#### Erwartungswert und Varianz  `stat-1-1` · 14 min

**Lernziele:**
- Erwartungswert und Varianz einer diskreten Zufallsvariablen berechnen
- Unterschied zwischen $sigma^2$ und $sigma$ kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Eine Münze wird einmal geworfen. $X = 1$ bei Kopf, $X = 0$ bei Zahl. Berechne $E(X)$. |  |
| 2 | 🔘 multiple-choice | Welche Einheit hat die **Varianz** einer Messgröße in Millimetern? | wAE |
| 3 | 🔢 number-input | Eine Zufallsvariable nimmt Werte $-1, 0, 2$ an mit Wahrscheinlichkeiten $0{,}3,, 0{,}5,, 0{,}2$. Berechne $E(X)$. |  |
| 4 | ✅ true-false | Varianz kann negativ werden, wenn die Abweichungen großteils negativ sind. |  |
| 5 | 🔢 number-input | Zufallsvariable $X$ nimmt die Werte $2, 4, 6$ mit gleicher Wahrscheinlichkeit $1/3$ an. Berechne $operatorname{Var}(X)$. |  |
| 6 | 🔗 matching | Ordne jeder Kenngröße ihre Eigenschaft zu. |  |
| 7 | 🔘 multiple-choice | Welche Regel gilt für $operatorname{Var}(aX + b)$ mit Konstanten $a, b$? | wAE |
| 8 | 📋 sorting | Bringe die Schritte zur Berechnung der Varianz in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Erwartungswert und Varianz": Was bedeutet ein 95%-Konfidenzintervall? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Zwei Zufallsvariablen $X$ und $Y$ haben denselben Erwartungswert, aber $operatorname{Var}(X) > operatorname{Var}(Y)$. We | 🎯 wAE |

#### Normalverteilung  `stat-1-2` · 13 min

**Lernziele:**
- Normalverteilung $N(mu, sigma^2)$ parametrieren und interpretieren
- 68-95-99{,}7%-Regel anwenden
- Standardisierung $Z = (X-mu)/sigma$ durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Körpergröße $X sim N(175, 64)$ (cm). Welches $sigma$ (cm) hat die Verteilung? |  |
| 2 | 🔘 multiple-choice | Messfehler einer Waage ist $N(0, 0{,}04)$ g. Welches Intervall enthält $approx 68,%$ der Fehler? | wAE |
| 3 | 🔢 number-input | Standardisiere $x = 85$ für $X sim N(70, 100)$. Gib $z$ an. |  |
| 4 | ✅ true-false | In einer Normalverteilung $N(mu, sigma^2)$ sind Mittelwert, Median und Modus gleich. |  |
| 5 | 🔘 multiple-choice | Welche Wahrscheinlichkeit entspricht $P(X > mu + 2sigma)$ bei einer Normalverteilung? | wAE |
| 6 | 🔢 number-input | Produktionsteil $X sim N(50, 4)$ mm. Wie viel Prozent liegen zwischen $48$ und $52$ mm? (als Dezimalzahl) |  |
| 7 | 🔗 matching | Ordne jeder Quantile (Standardnormal) ihre Wahrscheinlichkeit zu. |  |
| 8 | 📋 sorting | Schritte zur Berechnung von $P(a leq X leq b)$ bei $X sim N(mu, sigma^2)$. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Normalverteilung": Was bedeutet ein 95%-Konfidenzintervall? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | $X sim N(10, 4)$ (d.h. $mu = 10$, $sigma = 2$). In welchem Intervall liegen $approx 95,%$ der Werte? | 🎯 wAE |

#### Hypothesentest und Konfidenzintervall  `stat-1-3` · 15 min

**Lernziele:**
- Nullhypothese $H_0$ und Alternativhypothese $H_1$ formulieren
- p-Wert interpretieren und mit Signifikanzniveau $alpha$ vergleichen
- 95%-Konfidenzintervall für den Mittelwert berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist die **Nullhypothese** $H_0$? | wAE |
| 2 | ✅ true-false | Ein 95%-Konfidenzintervall bedeutet: Mit 95 % Wahrscheinlichkeit liegt der wahre Parameter in diesem konkreten Intervall |  |
| 3 | 🔢 number-input | Stichprobe: $bar x = 50$, $s = 10$, $n = 100$. Berechne die Breite des 95%-Konfidenzintervalls (Gesamtbreite, nicht Halb |  |
| 4 | 🔘 multiple-choice | Bei p-Wert $= 0{,}12$ und Signifikanzniveau $alpha = 0{,}05$: Was folgt? | wAE |
| 5 | 🔢 number-input | Halbbreite eines 95%-KI ist $0{,}5$. Stichprobe $n = 64$, $sigma$ bekannt. Berechne $sigma$ (mit $z = 1{,}96$). |  |
| 6 | ✅ true-false | Wenn man mehr Stichproben nimmt (größeres $n$), wird das Konfidenzintervall schmaler. |  |
| 7 | 🔗 matching | Ordne jedem Symbol seine Bedeutung zu. |  |
| 8 | 📋 sorting | Bringe die Schritte eines Hypothesentests in die richtige Reihenfolge. |  |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Hypothesentest und Konfidenzintervall": Was bedeutet ein 95%-Konfidenzintervall? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Ein Experiment liefert $p = 0{,}03$ bei $alpha = 0{,}05$. Was schlussfolgert man? | 🎯 wAE |

### 🏁 Prüfung (Unit 2)

3 Lektionen · 30 Aufgaben

#### Prüfung: Schätzung & Hypothesentest  `stat-pruefung-1` · 25 min

**Lernziele:**
- Konfidenzintervall für Mittelwert angeben
- t-Test und $chi^2$-Test unterscheiden
- p-Wert und Signifikanzniveau interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: Mittelwert von $5$ Messungen: $10, 12, 11, 13, 14$. |  |
| 2 | 🔢 number-input | [PRÜFUNG] Stichprobenvarianz $s^2$ von $4, 6, 8$. |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Warum wird bei der Stichprobenvarianz durch $n-1$ (nicht $n$) geteilt? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Stichprobe $n = 25$, $bar x = 100$, $s = 10$. Halbbreite des 95%-KI (t-Wert $t_{24;0{,}975} approx 2{,}064$)? | wAE |
| 5 | ✅ true-false | [PRÜFUNG] Bei kleinen Stichproben $n < 30$ sollte für das KI die t-Verteilung statt der Normalverteilung verwendet werde |  |
| 6 | 🔢 number-input | [PRÜFUNG] Wie viele Messungen $n$ sind nötig für eine KI-Halbbreite $leq 1$ bei $sigma = 5$ und 95%-KI ($z = 1{,}96$)? |  |
| 7 | 🔗 matching | [PRÜFUNG] Ordne jedem Stichproben-Kennwert seine Formel zu. |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur KI-Berechnung in Prüfungsaufgabe. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Schätzung & Hypothesentest": Was bedeutet ein 95%-Konfidenzintervall? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Mittelwert von 4, 5, 6, 7, 8? | 🎯 wAE |

#### Prüfung: Normalverteilung & Standardisierung  `stat-pruefung-2` · 22 min

**Lernziele:**
- [PRÜFUNG] Standardisierung $Z=(X-mu)/sigma$ durchführen
- [PRÜFUNG] Wahrscheinlichkeiten mit $Phi$-Tabelle berechnen
- [PRÜFUNG] 68-95-99,7%-Regel anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: $X sim N(100, 25)$. Standardisiere $x = 110$ zu $z$. |  |
| 2 | 🔘 multiple-choice | [PRÜFUNG] $X sim N(50, 16)$. Berechne $P(X leq 42)$ mit $Phi(-2) = 1 - Phi(2) approx 0{,}023$. | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] Werkstück-Dicke $X sim N(10,text{mm}, 0{,}25,text{mm}^2)$. Bei welcher Toleranzbreite $Delta$ (symmetrisch um  |  |
| 4 | ✅ true-false | [PRÜFUNG] Nach Standardisierung mit $Z = (X-mu)/sigma$ ist die neue Zufallsvariable Z standardnormalverteilt $N(0, 1)$. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] $X sim N(0, 1)$. Welches $z$ erfüllt $P(Z leq z) = 0{,}975$? | wAE |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jedem Intervall die zugehörige Wahrscheinlichkeit zu ($X sim N(mu, sigma^2)$). |  |
| 7 | 🔢 number-input | [PRÜFUNG] Glühbirnen $X sim N(1000,text{h}, 2500,text{h}^2)$. Wahrscheinlichkeit, dass eine Birne **länger als 1100 h**  |  |
| 8 | 📋 sorting | [PRÜFUNG] Strategie zur Berechnung von $P(X leq x)$ bei $X sim N(mu, sigma^2)$. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Normalverteilung & Standardisierung": Welche Kontrolle ist bei trigonometrischen A | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $X sim N(5, 1)$. Wie groß ist $P(X > 6)$? | 🎯 wAE |

#### Prüfung: Konfidenzintervall & Gesamtaufgaben  `stat-pruefung-3` · 22 min

**Lernziele:**
- [PRÜFUNG] 95%-Konfidenzintervall für Mittelwert berechnen
- [PRÜFUNG] Stichprobenmittel und -standardabweichung berechnen
- [PRÜFUNG] Stichprobenumfang für gewünschte Präzision bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Aufwärmaufgabe: $bar x = 20$, $sigma = 4$, $n = 16$. Halbbreite des 95%-KI? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Wie viele Messungen $n$ für KI-Halbbreite $leq 0{,}5$ bei $sigma = 2$ (95%-KI)? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Um das KI auf die **halbe** Breite zu reduzieren, muss $n$ … werden: | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Wenn das 95%-KI den Wert $0$ enthält, ist der geschätzte Mittelwert nicht signifikant verschieden von $0$. |  |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Messungen: $bar x = 5{,}2$, $s = 0{,}4$, $n = 16$. 95%-KI mit $t_{15;0{,}975} = 2{,}131$? | wAE |
| 6 | 🔗 matching | [PRÜFUNG] Ordne jedem Effekt auf das KI seine Folge zu. |  |
| 7 | 🔢 number-input | [PRÜFUNG] Stichprobe von $25$ Widerständen: $bar x = 100{,}5,Omega$, $s = 2{,}0,Omega$. Liegt der Sollwert $100,Omega$ i |  |
| 8 | 📋 sorting | [PRÜFUNG] Gesamtstrategie für KI-Aufgabe. Bringe die Schritte in Reihenfolge. |  |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Konfidenzintervall & Gesamtaufgaben": Was bedeutet ein 95%-Konfidenzintervall? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $bar x = 10$, $sigma = 2$, $n = 100$. 95%-Konfidenzintervall? | 🎯 wAE |

<a id="fourier-laplace"></a>
## Fourier & Laplace `fourier-laplace`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** math  
**Prerequisites:** `differentialgleichungen`, `komplexe-zahlen`  
**3 Units** · **7 Lektionen** · **70 Aufgaben** (🔘 34 · 🔢 15 · ✅ 7 · 🔗 7 · 📋 7)

*Fourier-Reihen, Fourier-Transformation und Laplace-Transformation für Ingenieure*

### Fourier-Reihen (Unit 1)

3 Lektionen · 30 Aufgaben

#### Fourier-Reihen — Grundbegriffe  `fl-1-1` · 15 min

**Lernziele:**
- Periodische Funktionen als Überlagerung von Sinus/Kosinus erkennen
- Fourier-Koeffizienten berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was bedeutet es geometrisch, dass eine Funktion $f(t)$ **gerade** ist? | wAE |
| 2 | 🔘 multiple-choice | Was ist $a_0/2$ in der Fourier-Reihe? | wAE |
| 3 | ✅ true-false | Eine Fourier-Reihe kann auch **nicht-periodische** Funktionen exakt darstellen. |  |
| 4 | 🔢 number-input | Eine periodische Funktion hat Periode $T = 4$. Wie groß ist die **Grundkreisfrequenz** $omega_0$? |  |
| 5 | 🔘 multiple-choice | Welche Frequenzen treten in der Fourier-Reihe einer $T$-periodischen Funktion auf? | wAE |
| 6 | 🔗 matching | Ordne jeder Symmetrie die korrekte Vereinfachung der Fourier-Reihe zu. |  |
| 7 | 📋 sorting | Bringe die Schritte zur Berechnung einer Fourier-Reihe in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | Was repräsentiert der Koeffizient $a_0/2$ einer Fourier-Reihe? | ➕ wAE |
| 9 | 🔢 number-input | Wie groß ist $a_0$ für die Funktion $f(t) = sin(t)$ auf $[0, 2pi]$? | ➕ |
| 10 | 🔘 multiple-choice | Eine gerade periodische Funktion $f(t)$ hat in ihrer Fourier-Reihe nur ... | 🎯 wAE |

#### Fourier-Reihe Rechteckimpuls  `fl-1-2` · 14 min

**Lernziele:**
- Fourier-Koeffizienten eines Rechtecksignals berechnen
- Gibbs-Phänomen kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Warum enthält die Fourier-Reihe eines Rechteckimpulses **unendlich viele** Frequenzanteile? | wAE |
| 2 | 🔢 number-input | Klassisches Rechteck ($A=1$, $D=0{,}5$): Amplitude der **ersten** Harmonischen $b_1$? |  |
| 3 | ✅ true-false | Das **Gibbs-Phänomen** verschwindet, wenn man genug Terme der Fourier-Reihe summiert. |  |
| 4 | 🔘 multiple-choice | Beim Rechteck mit $D = 0{,}5$ fehlen die **geraden** Harmonischen. Welche Symmetrie ist verantwortlich? | wAE |
| 5 | 🔗 matching | Ordne jedem Signaltyp sein Spektrum zu. |  |
| 6 | 🔘 multiple-choice | In welcher Anwendung ist das **Gibbs-Phänomen** praktisch problematisch? | wAE |
| 7 | 📋 sorting | Bringe das Vorgehen bei der Rechteck-Fourier-Aufgabe in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | Warum enthält die Fourier-Reihe einer symmetrischen Rechteckfunktion nur ungerade Harmonische? | ➕ wAE |
| 9 | 🔢 number-input | Fourier-Koeffizient $b_1$ einer Rechteckfunktion mit Amplitude $A = 1$, Periode $T = 2pi$: $b_1 = (2/T)int_0^T fsin(t),d | ➕ |
| 10 | 🔘 multiple-choice | Warum sind beim Rechteckimpuls nur ungerade Vielfache der Grundfrequenz im Spektrum ($D = 0{,}5$)? | 🎯 wAE |

#### Fourier-Transformation  `fl-1-3` · 16 min

**Lernziele:**
- Von Fourier-Reihen zur Fourier-Transformation übergehen
- Spektrum nicht-periodischer Signale verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist der Hauptunterschied zwischen Fourier-**Reihe** und Fourier-**Transformation**? | wAE |
| 2 | 🔘 multiple-choice | Die Fourier-Transformierte eines Dirac-Impulses $delta(t)$ ist: | wAE |
| 3 | 🔗 matching | Ordne jedem Zeitbereichs-Signal sein Spektrum zu. |  |
| 4 | ✅ true-false | Die Fourier-Transformation ist **linear**: $mathcal{F}{af_1 + bf_2} = aF_1(omega) + bF_2(omega)$. |  |
| 5 | 🔢 number-input | Rechteck-Breite $tau = 2$: Wo liegt die **erste Nullstelle** der sinc-Funktion $tauoperatorname{sinc}(omegatau/2)$? |  |
| 6 | 🔘 multiple-choice | Zeitverschiebung $f(t - t_0)$ entspricht im Spektrum: | wAE |
| 7 | 📋 sorting | Bringe die Schritte zur Berechnung einer Fourier-Transformation in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | Wie lautet die Fourier-Transformierte der Dirac-Impulsfunktion $delta(t)$? | ➕ wAE |
| 9 | 🔢 number-input | Zeitverschiebung: Wenn $mathcal{F}{f(t)} = F(omega)$, wie groß ist der Betrag von $mathcal{F}{f(t-3)}$ im Verhältnis zu  | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Die Fourier-Transformierte von $e^{-at}u(t)$ ($a > 0$) lautet: | 🎯 wAE |

### Laplace-Transformation (Unit 2)

2 Lektionen · 20 Aufgaben

#### Laplace-Grundlagen  `fl-2-1` · 15 min

**Lernziele:**
- Laplace-Transformation definieren
- Einfache Transformationen aus der Tabelle ablesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist $mathcal{L}{u(t)}$ (Einheitssprung)? | wAE |
| 2 | 🔘 multiple-choice | Was ist $mathcal{L}{e^{-2t}}$? | wAE |
| 3 | 🔢 number-input | Wie lautet $mathcal{L}{t^2}$? (Gib den Koeffizienten von $1/s^3$ ein, d.h. $n!$ für $n=2$.) |  |
| 4 | ✅ true-false | Der Ableitungssatz $mathcal{L}{f'(t)} = s,F(s) - f(0^-)$ macht Laplace für DGLs so nützlich. |  |
| 5 | 🔗 matching | Ordne Zeitfunktion ↔ Laplace-Transformierte. |  |
| 6 | 🔘 multiple-choice | Der **Verschiebungssatz** $mathcal{L}{e^{-at}f(t)} = F(s+a)$ bedeutet: | wAE |
| 7 | 📋 sorting | Bringe die Schritte zum Transformieren einer Zeitfunktion in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | Welcher Vorteil hat die Laplace- gegenüber der Fourier-Transformation bei DGL-Lösung? | ➕ wAE |
| 9 | 🔢 number-input | Wie lautet $mathcal{L}{t^2}$ bei $s > 0$? Gib den Wert bei $s = 1$. | ➕ |
| 10 | 🔘 multiple-choice | Wie lautet $mathcal{L}{sin(omega_0 t)}$? | 🎯 wAE |

#### Laplace zur DGL-Lösung  `fl-2-2` · 16 min

**Lernziele:**
- DGL mit Laplace lösen (Transformieren, algebraisch umformen, rücktransformieren)
- Übertragungsfunktion $G(s)$ verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Bei einer DGL $y' + 2y = u(t)$ mit $y(0) = 0$: Wie lautet die Gleichung im Bildbereich? | wAE |
| 2 | 🔘 multiple-choice | Die **Übertragungsfunktion** $G(s) = Y(s)/U(s)$ beschreibt: | wAE |
| 3 | 🔢 number-input | $G(s) = dfrac{1}{(s+1)(s+2)} = dfrac{A}{s+1} + dfrac{B}{s+2}$. Wie groß ist $A$? |  |
| 4 | ✅ true-false | Die Impulsantwort $g(t)$ ist die Rücktransformation der Übertragungsfunktion $G(s)$. |  |
| 5 | 🔗 matching | Ordne jedem Pol der Übertragungsfunktion sein Zeitverhalten zu. |  |
| 6 | 🔘 multiple-choice | Welcher Schritt ist bei der DGL-Lösung per Laplace meist am aufwändigsten? | wAE |
| 7 | 📋 sorting | Bringe die 4 Schritte zur DGL-Lösung per Laplace in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | Was ist die Impulsantwort $g(t)$ eines linearen, zeitinvarianten Systems? | ➕ wAE |
| 9 | 🔢 number-input | Für ein PT1-System $G(s) = 1/(s + 2)$: Wie groß ist $g(t)$ bei $t = 0^+$? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Übertragungsfunktion $G(s) = dfrac{1}{s+3}$. Was ist die Sprungantwort $y(t)$ für $t ge 0$? | 🎯 wAE |

### 🏁 Prüfungsaufgaben (Unit 3)

2 Lektionen · 20 Aufgaben

#### Fourier Prüfungsaufgaben  `fl-3-1` · 22 min

**Lernziele:**
- Fourier-Reihen und Spektrum in Prüfungsaufgaben anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Gegeben ist $f(t) = 5 + 2cos(3t) + 4sin(6t)$. Welche Frequenzen treten im Spektrum auf? | wAE |
| 2 | 🔢 number-input | [PRÜFUNG] $f(t) = 7 + 3sin(2t)$. Wie groß ist der Gleichanteil $a_0/2$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Gerade Rechteckfunktion mit Periode $T$: Welche Fourier-Koeffizienten sind von vornherein $= 0$? | wAE |
| 4 | ✅ true-false | [PRÜFUNG] Die Fourier-Transformation einer reellen, geraden Funktion $f(t)$ ist rein reell. |  |
| 5 | 🔗 matching | [PRÜFUNG] Ordne jedem Signal die zutreffende Eigenschaft zu. |  |
| 6 | 🔢 number-input | [PRÜFUNG] $f(t) = cos(10t)$ wird um $t_0 = pi/20$ zeitverschoben. Welche Phasendrehung erhält das Spektrum bei $omega =  |  |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsschritte zur Fourier-Analyse in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Was besagt das Parseval-Theorem für die Fourier-Transformation? | ➕ wAE |
| 9 | 🔢 number-input | [PRÜFUNG] Ein Signal hat $int \|f(t)\|^2,dt = 10$. Was ist $(1/(2pi))int\|F(omega)\|^2,domega$ nach Parseval? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Gegeben sei $f(t) = 3cos(2t) + sin(4t)$. Was ist der Gleichanteil $a_0/2$? | 🎯 wAE |

#### Laplace Prüfungsaufgaben  `fl-3-2` · 22 min

**Lernziele:**
- Übertragungsfunktionen berechnen
- DGL per Laplace lösen
- Pol-Nullstellen-Stabilität beurteilen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] $G(s) = dfrac{1}{s-2}$. Ist das System stabil? | wAE |
| 2 | 🔘 multiple-choice | [PRÜFUNG] DGL: $y'' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$. Was ist $Y(s)$? | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] $G(s) = dfrac{4}{s^2 + 4}$. Welchen Realteil haben die Pole? |  |
| 4 | ✅ true-false | [PRÜFUNG] Die Sprungantwort ist die Rücktransformation von $G(s)/s$. |  |
| 5 | 🔗 matching | [PRÜFUNG] Ordne Polkonstellation ↔ Stabilität. |  |
| 6 | 🔘 multiple-choice | [PRÜFUNG] $y' + y = u(t)$, $y(0) = 0$. Wie lautet $y(t)$ für $t ge 0$? | wAE |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsschritte zur Laplace-DGL-Aufgabe in Reihenfolge. |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Wann ist das lineare System mit $G(s) = (s+3)/((s+1)(s-2))$ stabil? | ➕ wAE |
| 9 | 🔢 number-input | [PRÜFUNG] Regelkreis: $G_o(s) = 4/(s(s+2))$, negative Einheitsrückführung. Endwertsatz: $e_{stat}$ auf Sprung $w_0 = 1$? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] $G(s) = dfrac{2}{s^2+2s+1} = dfrac{2}{(s+1)^2}$. Ist das System stabil? | 🎯 wAE |

<a id="technische-mechanik"></a>
## Technische Mechanik `technische-mechanik`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** engineering  
**Prerequisites:** `algebra`, `trigonometry`, `vektoren`  
**4 Units** · **16 Lektionen** · **160 Aufgaben** (🔘 48 · 🔢 45 · ✅ 32 · 🔗 18 · 📋 17)

*Statik, Dynamik und Freikörperbilder für Maschinenbau-Aufgaben.*

### Einheiten & Dimensionsanalyse (Einstieg) (Unit 1)
*SI-Einheiten, Präfixe, abgeleitete Einheiten und Dimensionscheck.*

3 Lektionen · 30 Aufgaben

#### SI-Basiseinheiten & Präfixe  `mech-0-1` · 12 min

**Lernziele:**
- Die sieben SI-Basiseinheiten kennen
- Dezimale Vorsätze (nano, milli, kilo, mega, giga) anwenden
- Einheiten in wissenschaftlicher Notation schreiben

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie viel sind $2{,}5,	ext{GPa}$ in Pa? | wAE 4B |
| 2 | 🔢 number-input | Wie viele Millimeter sind $2{,}5,text{km}$? Gib das Ergebnis in $text{mm}$ an. | 4B |
| 3 | ✅ true-false | Die Masse wird in der SI-Einheit Kilogramm gemessen, nicht in Gramm — Gramm ist eigentlich das Abgeleitete. | 4B |
| 4 | 🔗 matching | Ordne jeden Präfix dem passenden Faktor zu. | 4B |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "SI-Basiseinheiten & Präfixe": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "SI-Basiseinheiten & Präfixe" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnv | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "SI-Basiseinheiten & Präfixe" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "SI-Basiseinheiten & Präfixe" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "SI-Basiseinheiten & Präfixe"? | ➕ wAE 4B |
| 10 | 🔢 number-input | Eine Schraube hat einen Durchmesser von $8,text{mm}$ und eine Länge von $25,text{mm}$. Wie groß ist das Produkt Durchmes | 🎯 4B |

#### Abgeleitete Einheiten (N, J, Pa, W)  `mech-0-2` · 12 min

**Lernziele:**
- Die wichtigsten abgeleiteten Einheiten benennen
- Formeln mit Einheiten korrekt rechnen
- SI-zusammengesetzte Einheiten sicher umrechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Körper mit Masse $m = 10,text{kg}$ erfährt die Beschleunigung $a = 2,text{m/s}^{2}$. Wie groß ist die Kraft $F = m c | 4B |
| 2 | 🔘 multiple-choice | Welche Umrechnung ist richtig? | wAE 4B |
| 3 | ✅ true-false | $1,text{J}$ ist dasselbe wie $1,text{N} cdot text{m}$. | 4B |
| 4 | 🔗 matching | Ordne jede abgeleitete Einheit der passenden physikalischen Größe zu. | 4B |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "Abgeleitete Einheiten (N, J, Pa, W)": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "Abgeleitete Einheiten (N, J, Pa, W)" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Forme | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "Abgeleitete Einheiten (N, J, Pa, W)" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "Abgeleitete Einheiten (N, J, Pa, W)" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Abgeleitete Einheiten (N, J, Pa, W)"? | ➕ wAE 4B |
| 10 | 🔢 number-input | Ein Motor leistet $P = 2{,}5,text{kW}$ über $t = 4,text{h}$. Wie viel Energie in $text{MJ}$ gibt er ab? ($1,text{h} = 36 | 🎯 4B |

#### Dimensionsanalyse — Einheitencheck  `mech-0-3` · 12 min

**Lernziele:**
- Einheiten in einer Formel prüfen
- Plausibilität eines Rechenergebnisses über Einheiten kontrollieren
- Formeln aus Dimensions-Überlegungen aufstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche der folgenden Formeln ist dimensional korrekt für die Spannung $sigma$? | wAE 4B |
| 2 | ✅ true-false | Die Formel $s = v cdot t^{2}$ für den zurückgelegten Weg bei konstanter Geschwindigkeit ist dimensional konsistent. | 4B |
| 3 | 📋 sorting | Bringe die Schritte einer Dimensionsanalyse in die richtige Reihenfolge. | 4B |
| 4 | 🔘 multiple-choice | Aufwärmaufgabe zu "Dimensionsanalyse — Einheitencheck": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 5 | ✅ true-false | Bei "Dimensionsanalyse — Einheitencheck" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formel | ➕ |
| 6 | 🔗 matching | Ordne die Lernbausteine für "Dimensionsanalyse — Einheitencheck" richtig zu. | ➕ |
| 7 | 📋 sorting | Bringe die Prüfungsstrategie für "Dimensionsanalyse — Einheitencheck" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Dimensionsanalyse — Einheitencheck"? | ➕ wAE 4B |
| 9 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Dimensionsanalyse — Einheitencheck" sollte den Lösungsweg nachvollziehbar zeigen,  | ➕ |
| 10 | 🔢 number-input | Die Einheit der kinetischen Energie ist $text{kg} cdot text{m}^{a} / text{s}^{b}$. Was ist $a + b$? | 🎯 4B |

### Statik (Unit 2)
*Kräfte, Momente und Gleichgewicht.*

5 Lektionen · 50 Aufgaben

#### Kräfte und Freikörperbild  `mech-1-1` · 12 min

**Lernziele:**
- Kräfte als Vektoren darstellen
- Freikörperbilder systematisch aufbauen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was gehört in ein Freikörperbild? | wAE |
| 2 | 🔢 number-input | Zwei rechtwinklige Kräfte 3 N und 4 N wirken am Punkt. Betrag der Resultierenden? |  |
| 3 | 🔘 multiple-choice | Ein Balken liegt auf einem Festlager (A) und einem Loslager (B). Wie viele unbekannte Lagerreaktionen hat das System? | ➕ wAE |
| 4 | 🔢 number-input | Ein Seil zieht unter 30° zur Horizontalen mit der Zugkraft $F = 200$ N an einer Kiste. Wie groß ist die horizontale Komp | ➕ |
| 5 | ✅ true-false | Ein Freikörperbild enthält alle äußeren Kräfte inklusive Lagerreaktionen, Gewichtskraft und eingeprägten Lasten — aber k | ➕ |
| 6 | 🔗 matching | Ordne jedem Lagertyp die übertragbaren Reaktionen zu. | ➕ |
| 7 | 📋 sorting | Bringe die Arbeitsschritte für ein Freikörperbild in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Welcher Fehler macht ein Freikörperbild ungültig? | ➕ wAE |
| 9 | 🔢 number-input | Eine Kiste wird mit $F = 500$ N unter 60° zur Horizontalen gezogen. Wie groß ist die vertikale Komponente $F_y$ in N? | ➕ |
| 10 | ✅ true-false | Im statischen Gleichgewicht muss die Summe aller Kräfte null sein. | 🎯 |

#### Momente und Hebelarm  `mech-1-2` · 12 min

**Lernziele:**
- Moment als Kraft mal Hebelarm berechnen
- Drehsinn korrekt berücksichtigen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Eine Kraft F = 20 N greift mit senkrechtem Hebelarm l = 0,5 m an. Berechne das Moment. |  |
| 2 | 🔘 multiple-choice | Der wirksame Hebelarm ist ... | wAE |
| 3 | 🔘 multiple-choice | Ein Balken der Länge $L = 4$ m ist bei $A$ (links) fest und bei $B$ (rechts) als Loslager gelagert. Eine Einzelkraft $F  | ➕ wAE |
| 4 | 🔢 number-input | Balken der Länge $L = 6$ m, Festlager bei $A$ (links), Loslager bei $B$ (rechts). In der Mitte wirkt senkrecht nach unte | ➕ |
| 5 | ✅ true-false | Das Momentengleichgewicht $sum M = 0$ muss für jeden beliebigen Bezugspunkt gelten — nicht nur für einen ausgewählten. | ➕ |
| 6 | 🔗 matching | Ordne die Fälle der Anzahl statisch unabhängiger Gleichgewichtsbedingungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Arbeitsschritte zur Berechnung von Lagerreaktionen an einem Balken. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student berechnet für einen eingespannten Balken (Einspannung links, freies Ende rechts) mit Endlast $F$: $A_y = F$, | ➕ wAE |
| 9 | 🔢 number-input | Ein 3 m langer Balken hängt waagrecht an zwei Seilen (Abstand 3 m). Mittig hängt eine Masse $m = 60$ kg. Wie groß ist di | ➕ |
| 10 | ✅ true-false | Wenn die Wirkungslinie durch den Drehpunkt geht, ist das Moment null. | 🎯 |

#### Schnittkräfte N(x), Q(x), M(x)  `mech-1-3` · 12 min

**Lernziele:**
- Schnittkräfte und Schnittmomente am Balken berechnen
- Querkraft- und Biegemomentverlauf skizzieren
- Die gefährliche Stelle (max. Biegemoment) identifizieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Balken L = 4 m, F = 600 N bei a = 1 m. Wie groß ist R_A? |  |
| 2 | 🔢 number-input | Gleicher Balken (L = 4 m, F = 600 N bei a = 1 m): Wie groß ist M_max? |  |
| 3 | 🔘 multiple-choice | Wo liegt das maximale Biegemoment bei Einzellast auf Einfeldträger? | wAE |
| 4 | ✅ true-false | Der Sprung in Q(x) am Lastangriff hat den Betrag F. |  |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "Schnittkräfte N(x), Q(x), M(x)": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "Schnittkräfte N(x), Q(x), M(x)" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln si | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "Schnittkräfte N(x), Q(x), M(x)" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "Schnittkräfte N(x), Q(x), M(x)" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Schnittkräfte N(x), Q(x), M(x)"? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Warum interessiert uns M_max in der Festigkeitslehre besonders? | 🎯 wAE |

#### Reibung  `mech-1-4` · 14 min

**Lernziele:**
- Haft- und Gleitreibung unterscheiden
- Reibkraft mit Coulombschem Gesetz berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Block (m = 10 kg) liegt auf einer horizontalen Fläche (μ = 0,3, g = 9,81 m/s²). Reibkraft beim Gleiten? |  |
| 2 | ✅ true-false | Der Haftreibwert ist in der Regel größer als der Gleitreibwert. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Reibung": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Reibung" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Reibung" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Reibung" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Reibung"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Reibung" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Endergebnis. | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Reibung" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Block (m = 5 kg) auf geneigter Ebene α = 30°, Gleitreibwert μ = 0,3, g = 9,81. Reibkraft beim Gleiten in N (ge | 🎯 wAE |

#### Schwerpunkt  `mech-1-5` · 14 min

**Lernziele:**
- Schwerpunkt zusammengesetzter Flächen berechnen
- Flächenschwerpunkt als Summenregel anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Zwei Massen: m1 = 3 kg bei x1 = 2 m, m2 = 1 kg bei x2 = 6 m. Schwerpunkt x_S? |  |
| 2 | ✅ true-false | Ein symmetrischer Körper hat seinen Schwerpunkt auf der Symmetrieachse. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Schwerpunkt": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Schwerpunkt" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Schwerpunkt" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Schwerpunkt" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Schwerpunkt"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Schwerpunkt" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Endergebn | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Schwerpunkt" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] L-Profil aus zwei Rechtecken: R1 (20×80 mm, x_{S1}=10 mm) und R2 (60×20 mm, x_{S2}=50 mm). Schwerpunkt x_S des | 🎯 |

### Dynamik (Unit 3)
*Newton, Arbeit, Energie und Impuls.*

5 Lektionen · 50 Aufgaben

#### Newtonsche Gesetze  `mech-2-1` · 12 min

**Lernziele:**
- F = m·a anwenden
- Masse und Gewichtskraft unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Welche Kraft beschleunigt 4 kg mit $3,m/s^2$? |  |
| 2 | 🔘 multiple-choice | Gewichtskraft wird berechnet mit: | wAE |
| 3 | 🔘 multiple-choice | Ein Fahrzeug beschleunigt gleichmäßig von $v_0 = 10$ m/s auf $v = 30$ m/s in $t = 5$ s. Welche Aussage zur Beschleunigun | ➕ wAE |
| 4 | 🔢 number-input | Ein Auto beschleunigt aus dem Stand mit $a = 2{,}5$ $m/s^2$ über $t = 8$ s. Welche Geschwindigkeit in m/s erreicht es? | ➕ |
| 5 | ✅ true-false | Wenn ein Körper seine Richtung ändert, aber den Geschwindigkeitsbetrag konstant behält, ist seine Beschleunigung null. | ➕ |
| 6 | 🔗 matching | Ordne den Bewegungstypen die charakteristische Eigenschaft zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung des Bremsweges bei konstanter Verzögerung $a < 0$. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student schreibt: "Für freien Fall aus Höhe $h$: $v = g cdot h$". Was stimmt nicht? | ➕ wAE |
| 9 | 🔢 number-input | Ein Stein wird aus $h = 20$ m Höhe fallengelassen ($g = 9{,}81$ $m/s^2$). Mit welcher Geschwindigkeit in m/s trifft er a | ➕ |
| 10 | ✅ true-false | Bei doppelter Masse und gleicher Beschleunigung ist die nötige Kraft doppelt so groß. | 🎯 |

#### Arbeit und Energie  `mech-2-2` · 12 min

**Lernziele:**
- Mechanische Arbeit berechnen
- Energieerhaltung erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Eine Kraft von 50 N wirkt 3 m in Wegrichtung. Arbeit? |  |
| 2 | 🔘 multiple-choice | Wenn Kraft senkrecht zum Weg steht, ist die Arbeit: | wAE |
| 3 | 🔘 multiple-choice | Eine Masse $m = 5$ kg liegt reibungsfrei auf dem Boden. Eine horizontale Kraft $F = 20$ N zieht an ihr. Wie groß ist die | ➕ wAE |
| 4 | 🔢 number-input | Auf eine Kiste ($m = 20$ kg) wirkt horizontal $F = 100$ N. Gleitreibungskoeffizient $mu = 0{,}2$. Wie groß ist die Besch | ➕ |
| 5 | ✅ true-false | In einem abgeschlossenen System bleibt der Gesamtimpuls erhalten — unabhängig davon, ob der Stoß elastisch oder plastisc | ➕ |
| 6 | 🔗 matching | Ordne den Stoßtypen die erhaltenen Größen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Arbeitsschritte für eine Dynamikaufgabe mit Reibung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet für eine Rampe mit Neigung $alpha$: $F_N = m g$. Warum ist das falsch? | ➕ wAE |
| 9 | 🔢 number-input | Auf einer Rampe mit $alpha = 20°$ rutscht ein Körper $m = 4$ kg reibungsfrei ab. Wie groß ist die Hangabtriebskraft in N | ➕ |
| 10 | ✅ true-false | Potentielle Energie im Schwerefeld ist E = m·g·h. | 🎯 |

#### Kinematik  `mech-2-3` · 14 min

**Lernziele:**
- Geradlinige Bewegung mit Formeln beschreiben
- Zusammenhang zwischen s, v, a und t herstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Startgeschwindigkeit v0 = 0, Beschleunigung a = 2 m/s². Geschwindigkeit nach t = 5 s? |  |
| 2 | 🔢 number-input | Körper startet mit v0 = 3 m/s, a = 1,5 m/s². Zurückgelegter Weg nach t = 4 s? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Kreis: r = 0,5 m, n = 600 1/min. Bahngeschwindigkeit v? (Runde auf eine Dezimalstelle) |  |
| 4 | 🔢 number-input | Schräger Wurf: Ball mit $v_0 = 20,text{m/s}$ unter $alpha = 30°$ abgeworfen. Wie weit fliegt er (Wurfweite $w$), bevor e |  |
| 5 | 🔘 multiple-choice | Aufwärmaufgabe zu "Kinematik": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 6 | ✅ true-false | Bei "Kinematik" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 7 | 🔗 matching | Ordne die Lernbausteine für "Kinematik" richtig zu. | ➕ |
| 8 | 📋 sorting | Bringe die Prüfungsstrategie für "Kinematik" in die richtige Reihenfolge. | ➕ |
| 9 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Kinematik"? | ➕ wAE 4B |
| 10 | 🔢 number-input | Unelastischer Stoß: Kugel $m_1 = 2,text{kg}$ mit $v_1 = 5,text{m/s}$ trifft Kugel $m_2 = 3,text{kg}$ in Ruhe. Beide blei | 🎯 |

#### Schwingungen  `mech-2-4` · 16 min

**Lernziele:**
- Eigenfrequenz eines Feder-Masse-Systems berechnen
- Resonanzbedingung erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Feder-Masse-System: c = 400 N/m, m = 1 kg. Eigenkreisfrequenz ω₀? |  |
| 2 | 🔢 number-input | Masse m = 4 kg, Federsteifigkeit c = 100 N/m. Schwingungsdauer T? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Schwingungen": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Schwingungen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Schwingungen" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Schwingungen" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Schwingungen"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Schwingungen" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Endergeb | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Schwingungen" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Resonanz tritt auf, wenn die Erregerfrequenz Ω ... | 🎯 wAE |

#### Dynamik starrer Körper  `mech-2-5` · 16 min

**Lernziele:**
- Massenträgheitsmoment interpretieren
- Drallsatz M = J·α anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Vollzylinder: m = 2 kg, R = 0,1 m. Massenträgheitsmoment J? |  |
| 2 | 🔢 number-input | Ein Motor erzeugt M = 50 Nm. Trägheitsmoment J = 0,5 kg·m². Winkelbeschleunigung α? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Dynamik starrer Körper": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Dynamik starrer Körper" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Dynamik starrer Körper" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Dynamik starrer Körper" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Dynamik starrer Körper"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Dynamik starrer Körper" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur da | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Dynamik starrer Körper" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Stab (m = 6 kg, L = 1 m). J um Schwerpunkt = mL²/12. Jetzt Achse am Ende: J_Ende per Steiner? (J_Ende = J_S +  | 🎯 |

### 🏁 Prüfungsaufgaben (Unit 4)
*Klausurrelevante Aufgaben zur Technischen Mechanik.*

3 Lektionen · 30 Aufgaben

#### Statik: Prüfungsaufgaben  `mech-3-1` · 12 min

**Lernziele:**
- Komplexe Gleichgewichtsaufgaben lösen
- Mehrere Kräfte und Momente kombinieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Balken (4 m), Festlager links, Loslager rechts. Einzellast F = 600 N bei x = 1 m vom linken Lager. Berechne R_ |  |
| 2 | 🔢 number-input | [PRÜFUNG] Zwei Kräfte $F_1$ = 5 kN (30° zur Horizontalen) und $F_2$ = 3 kN (vertikal). Betrag der Resultierenden? Runde  |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Ein Loslager kann aufnehmen: | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Ein Balken (2 m) ist links fest eingespannt und trägt am rechten Ende eine Last $F = 500$ N. Welche Reaktionsg | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Balken $L = 4$ m, Festlager A links, Loslager B rechts. Streckenlast $q = 300$ N/m über die volle Länge. Wie g | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Haftreibung kann beliebig groß werden — sie erreicht immer genau den Wert, der Gleichgewicht herstellt, bis zu | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Begriffe ihren Definitionen zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Lösungsschritte einer kombinierten Statik-Prüfungsaufgabe. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student berechnet für eine Rampe ($alpha = 30°$), ob eine Kiste ($m = 10$ kg, $mu_H = 0{,}4$) rutscht. Er  | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] Kragbalken (Einspannung links), Länge 2 m, Einzellast F = 500 N am freien Ende. Einspannmoment? | 🎯 |

#### Dynamik: Prüfungsaufgaben  `mech-3-2` · 12 min

**Lernziele:**
- Newton-Aufgaben mit Reibung lösen
- Energieerhaltung anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Ein 2 kg Block rutscht reibungsfrei eine 3 m hohe Rampe hinunter. Geschwindigkeit unten? (g = 9,81) |  |
| 2 | 🔢 number-input | [PRÜFUNG] Ein 5 kg Block wird mit μ = 0,3 auf ebenem Boden mit F = 40 N horizontal gezogen. Beschleunigung? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Zwei Wagen ($m_1 = 2$ kg mit $v_1 = 3$ m/s und $m_2 = 1$ kg in Ruhe) stoßen plastisch zusammen. Welche Endgesc | ➕ wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Ein Körper ($m = 5$ kg) rutscht reibungsfrei eine Rampe von $h = 2$ m Höhe herunter. Wie groß ist seine Geschw | ➕ |
| 5 | ✅ true-false | [PRÜFUNG] Energieerhaltung gilt auch bei Reibung — die Reibungskraft ist eine innere Kraft und ändert die Gesamtenergie  | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Größen ihren Einheiten zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Ordne die Schritte für eine kombinierte Dynamikaufgabe (Rampe + Stoß). | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Ein Student berechnet die Endgeschwindigkeit nach einer Rampe mit Reibung rein über Energieerhaltung ($v = sqr | ➕ wAE |
| 9 | 🔢 number-input | [PRÜFUNG] Ein Auto ($m = 1000$ kg) fährt mit $v_0 = 20$ m/s und bremst mit konstanter Verzögerung auf $v = 5$ m/s in $t  | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Elastischer Stoß: Ball 1 (m=2kg, v=3m/s) trifft ruhenden Ball 2 (m=2kg). Geschwindigkeit von Ball 1 nach Stoß? | 🎯 |

#### Reibung, Kinematik & Schwingungen  `mech-3-3` · 22 min

**Lernziele:**
- Reibungs- und Kinematikaufgaben kombinieren
- Schwingungsparameter aus Systemdaten ableiten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Block (m = 8 kg) auf Ebene α = 20°, μ = 0,25. Gleitet er? Falls ja, Nettobeschleunigung a in m/s²? (g = 9,81) |  |
| 2 | 🔢 number-input | [PRÜFUNG] Bremsung: v0 = 72 km/h, a = −5 m/s². Bremsweg s? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Maschine: Schwungscheibe m = 20 kg, R = 0,3 m (Vollzylinder). Anlaufmoment M = 9 Nm. Winkelbeschleunigung α? |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Reibung, Kinematik & Schwingungen": Was gehört in ein Freikörperbild? | ➕ wAE 4B |
| 5 | ✅ true-false | [PRÜFUNG] Bei "Reibung, Kinematik & Schwingungen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen  | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Reibung, Kinematik & Schwingungen" richtig zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Reibung, Kinematik & Schwingungen" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Reibung, Kinematik & Schwingungen"? | ➕ wAE 4B |
| 9 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Reibung, Kinematik & Schwingungen" sollte den Lösungsweg nachvollziehbar | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Feder-Masse-System: m = 0,25 kg, c = 100 N/m. Schwingungsfrequenz f0 in Hz? (Runde auf eine Dezimalstelle) | 🎯 |

<a id="festigkeitslehre"></a>
## Festigkeitslehre `festigkeitslehre`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** engineering  
**Prerequisites:** `technische-mechanik`, `ableitung`  
**3 Units** · **11 Lektionen** · **110 Aufgaben** (🔘 35 · 🔢 28 · ✅ 25 · 🔗 11 · 📋 11)

*Spannung, Dehnung, Biegung und Sicherheitsnachweise.*

### Spannung und Dehnung (Unit 1)
*Normalspannung, Hooke und Kennwerte.*

4 Lektionen · 40 Aufgaben

#### Normalspannung  `fest-1-1` · 12 min

**Lernziele:**
- Spannung als Kraft pro Fläche verstehen
- Einheiten korrekt umrechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | F = 1000 N, A = 100 $mm^2$. Spannung in $N/mm^2$? |  |
| 2 | 🔘 multiple-choice | Welche Einheit passt zu Spannung? | wAE |
| 3 | 🔘 multiple-choice | Welche Aussage zur Normalspannung $sigma = F/A$ ist korrekt? | ➕ wAE |
| 4 | 🔢 number-input | Ein Stab wird mit $F = 5000$ N auf Zug belastet. Querschnittsfläche $A = 50$ $mm^2$. Wie groß ist $sigma$ in MPa? | ➕ |
| 5 | ✅ true-false | Die Dehnung $varepsilon$ ist eine dimensionslose Größe — sie hat keine Einheit. | ➕ |
| 6 | 🔗 matching | Ordne die Belastungsarten ihren charakteristischen Spannungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Bestimmung der Zugspannung in einem Stab. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet $sigma = 10000$ N $/ 0{,}01$ $m^2$ $= 1 cdot 10^6$ MPa. Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Ein Stab ($l_0 = 500$ mm) dehnt sich unter Zuglast um $Delta l = 0{,}5$ mm. Wie groß ist die Dehnung $varepsilon$ in ‰ ( | ➕ |
| 10 | ✅ true-false | Bei gleicher Kraft sinkt die Spannung, wenn die Fläche größer wird. | 🎯 |

#### Hookesches Gesetz  `fest-1-2` · 12 min

**Lernziele:**
- Linearen elastischen Bereich erkennen
- E-Modul interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Im elastischen Bereich gilt E = 200000 MPa und ε = 0,001. Berechne die Spannung σ. |  |
| 2 | 🔘 multiple-choice | Ein größerer E-Modul bedeutet: | wAE |
| 3 | 🔘 multiple-choice | Ein Stahlstab ($E = 210$ GPa) wird elastisch gedehnt. Eine Verdoppelung der Zugkraft verdoppelt die Dehnung. Welches Ges | ➕ wAE |
| 4 | 🔢 number-input | Ein Stahlstab ($E = 210$ GPa, $A = 100$ $mm^2$, $l_0 = 2$ m) wird mit $F = 21000$ N belastet. Wie groß ist $Delta l$ in  | ➕ |
| 5 | ✅ true-false | Das Hookesche Gesetz gilt für alle Materialien bei allen Belastungen. | ➕ |
| 6 | 🔗 matching | Ordne die Materialien ihren E-Moduln zu. | ➕ |
| 7 | 📋 sorting | Ordne die Berechnungsschritte für die Längenänderung eines Zugstabes. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet $Delta l = F l_0 / (E A) = (1000 text{ N} cdot 1 text{ m}) / (210 text{ GPa} cdot 100 text{ mm}^2) = | ➕ wAE |
| 9 | 🔢 number-input | Ein Aluminiumstab ($E = 70$ GPa, $A = 200$ $mm^2$, $l_0 = 1{,}5$ m) wird mit $sigma = 140$ MPa belastet. Wie groß ist $D | ➕ |
| 10 | ✅ true-false | Hooke gilt uneingeschränkt bis zum Bruch. | 🎯 |

#### Schubspannung und Torsion  `fest-1-3` · 12 min

**Lernziele:**
- Torsionswiderstandsmoment berechnen
- Maximale Schubspannung einer Welle bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne das Torsionswiderstandsmoment $W_p$ für eine Welle mit $d = 40$ mm. |  |
| 2 | 🔢 number-input | Welle mit $d = 40$ mm und Torsionsmoment $M_T = 200$ Nm. Berechne die maximale Schubspannung $tau_{max}$ in N/mm². |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Schubspannung und Torsion": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Schubspannung und Torsion" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Schubspannung und Torsion" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Schubspannung und Torsion" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Schubspannung und Torsion"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Schubspannung und Torsion" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Schubspannung und Torsion" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Eine Welle mit $d = 30$ mm wird mit $M_T = 100$ Nm belastet. Welcher Wert für $tau_{max}$ ist am nächsten? | 🎯 wAE |

#### Knicken  `fest-1-4` · 12 min

**Lernziele:**
- Eulersche Knicklast berechnen
- Einspannbeiwert β anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Gelenkig-gelenkig gelagerter Stab: $E = 210000$ MPa, $I = 1 times 10^4$ mm⁴, $L = 1000$ mm. Berechne die Knicklast $F_{k |  |
| 2 | ✅ true-false | Bei einseitig eingespanntem, freiem Ende ist die Knicklast am kleinsten (β = 2). |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Knicken": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Knicken" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Knicken" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Knicken" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Knicken"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Knicken" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Endergebnis. | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Knicken" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Gleicher Stab wie oben ($E = 210000$ MPa, $I = 10000$ mm⁴, $L = 1000$ mm), aber nun einseitig eingespannt ($be | 🎯 |

### Biegung und Torsion (Unit 2)
*Grundformeln für beanspruchte Bauteile.*

5 Lektionen · 50 Aufgaben

#### Biegespannung  `fest-2-1` · 12 min

**Lernziele:**
- Biegemoment und Widerstandsmoment verbinden
- Kritische Randfaser erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Gegeben sind $M_b$ = 200 Nm und $W_b$ = 20 $cm^3$. Mit 1 Nm = 1000 Nmm und 1 $cm^3$ = 1000 $mm^3$: Berechne $sigma_b$. |  |
| 2 | 🔘 multiple-choice | Biegespannung ist bei symmetrischem Balken maximal ... | wAE |
| 3 | 🔘 multiple-choice | Warum hat ein Doppel-T-Träger im Vergleich zu einem massiven Rechteck gleicher Masse ein höheres Widerstandsmoment? | ➕ wAE |
| 4 | 🔢 number-input | Ein rechteckiger Balken ($b = 20$ mm, $h = 60$ mm) wird mit Biegemoment $M = 1200$ Nm belastet. Wie groß ist die Randfas | ➕ |
| 5 | ✅ true-false | Bei einem Rechteckquerschnitt verdoppelt sich das Widerstandsmoment, wenn die Höhe verdoppelt wird. | ➕ |
| 6 | 🔗 matching | Ordne die Querschnitte ihren Widerstandsmomenten zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte für einen Biegespannungsnachweis. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student berechnet das Widerstandsmoment eines Kreises mit $W = pi d^4 / 32$. Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Welle (Kreisquerschnitt, $d = 40$ mm) wird mit Biegemoment $M = 502$ Nm belastet. Wie groß ist $sigma_b$ in MPa? | ➕ |
| 10 | ✅ true-false | Das Widerstandsmoment hat Einfluss auf die Biegespannung. | 🎯 |

#### Sicherheitszahl  `fest-2-2` · 12 min

**Lernziele:**
- Zulässige Spannung berechnen
- Nachweis gegen Versagen formulieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Für eine Materialkennzahl R = 300 MPa und Sicherheitszahl S = 2: Berechne die zulässige Spannung. |  |
| 2 | ✅ true-false | Der Nachweis ist erfüllt, wenn σ_vorh kleiner oder gleich σ_zul ist. |  |
| 3 | 🔘 multiple-choice | Wann wird die Von-Mises-Hypothese bevorzugt gegenüber Tresca? | ➕ wAE |
| 4 | 🔢 number-input | Ein Stab wird gleichzeitig mit $sigma = 120$ MPa (Zug) und $tau = 50$ MPa (Torsion) belastet. Wie groß ist die Von-Mises | ➕ |
| 5 | ✅ true-false | Bei reiner Normalspannung ($tau = 0$) stimmen Von-Mises- und Tresca-Vergleichsspannung überein und sind gleich $\|sigma\ | ➕ |
| 6 | 🔗 matching | Ordne die Konzepte ihren Bedeutungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte für einen Festigkeitsnachweis bei zusammengesetzter Belastung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student berechnet bei kombiniertem Zug ($sigma = 150$ MPa) und Schub ($tau = 80$ MPa): "$sigma_v = sigma + tau = 230 | ➕ wAE |
| 9 | 🔢 number-input | Ein Stab wird mit $sigma = 100$ MPa und $tau = 60$ MPa belastet. Streckgrenze $R_e = 240$ MPa. Wie groß ist die Sicherhe | ➕ |
| 10 | 🔘 multiple-choice | Wenn S größer gewählt wird, wird σ_zul ... | 🎯 wAE |

#### Mohr'scher Spannungskreis  `fest-2-3` · 12 min

**Lernziele:**
- Mittelpunkt und Radius des Mohr-Kreises berechnen
- Hauptspannungen aus dem Mohr-Kreis ablesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Gegeben: $sigma_x = 70$ MPa, $sigma_y = 30$ MPa, $tau_{xy} = 30$ MPa. Berechne die größte Hauptspannung $sigma_1$. |  |
| 2 | 🔢 number-input | Gleiche Werte ($sigma_x = 70$ MPa, $sigma_y = 30$ MPa, $tau_{xy} = 30$ MPa). Maximale Schubspannung $tau_{max}$? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Mohr'scher Spannungskreis": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Mohr'scher Spannungskreis" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Mohr'scher Spannungskreis" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Mohr'scher Spannungskreis" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Mohr'scher Spannungskreis"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Mohr'scher Spannungskreis" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Mohr'scher Spannungskreis" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] $sigma_x = 100$ MPa, $sigma_y = 0$ MPa, $tau_{xy} = 0$ MPa. Was ist die kleinere Hauptspannung $sigma_2$? | 🎯 wAE |

#### Wechselfestigkeit und Betriebsfestigkeit  `fest-2-4` · 12 min

**Lernziele:**
- Mittel- und Ausschlagspannung berechnen
- Goodman-Nachweis anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | $sigma_{max} = 200$ MPa, $sigma_{min} = 100$ MPa. Berechne die Ausschlagspannung $sigma_a$. |  |
| 2 | ✅ true-false | Eine höhere Mittelspannung reduziert die zulässige Ausschlagspannung. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Wechselfestigkeit und Betriebsfestigkeit": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Wechselfestigkeit und Betriebsfestigkeit" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in  | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Wechselfestigkeit und Betriebsfestigkeit" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Wechselfestigkeit und Betriebsfestigkeit" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Wechselfestigkeit und Betriebsfestigkeit"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Wechselfestigkeit und Betriebsfestigkeit" sollte den Lösungsweg nachvollziehbar ze | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Wechselfestigkeit und Betriebsfestigkeit" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Goodman-Nachweis: $sigma_W = 200$ MPa, $R_m = 400$ MPa, $sigma_m = 100$ MPa. Maximales zulässiges $sigma_a$? | 🎯 |

#### Kerbspannungen & Formzahl  `fest-2-5` · 14 min

**Lernziele:**
- Formzahl $alpha_K$ als Verhältnis $sigma_text{max}/sigma_text{nenn}$ verstehen
- Typische Kerben (Bohrung, Absatz, Gewindegrund) einordnen
- Einfluss von Kerbwirkung auf die Dauerfestigkeit einschätzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Eine Welle hat einen Absatz mit Formzahl $alpha_K = 2$. Was bedeutet das? | wAE 4B |
| 2 | 🔢 number-input | Nennspannung $sigma_text{nenn} = 100$ MPa an einem Wellenabsatz mit Kerbformzahl $alpha_K = 2{,}5$. Wie groß ist die max | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Kerbspannungen & Formzahl": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Kerbspannungen & Formzahl" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Kerbspannungen & Formzahl" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Kerbspannungen & Formzahl" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Kerbspannungen & Formzahl"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Kerbspannungen & Formzahl" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Kerbspannungen & Formzahl" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Zwei gleiche Wellen aus demselben Stahl werden auf Dauer beansprucht. Welle A ist fein geschliffen ($R_a = 0{, | 🎯 wAE 4B |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Festigkeitsberechnungen.*

2 Lektionen · 20 Aufgaben

#### Festigkeit: Prüfungsaufgaben  `fest-3-1` · 12 min

**Lernziele:**
- Kombinierte Beanspruchung berechnen
- Sicherheitsnachweis durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Rundstab d = 20 mm, Zugkraft F = 15 kN. Normalspannung σ in MPa? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Rechteckbalken b = 40 mm, h = 80 mm. Biegemoment M = 800 Nm. Maximale Biegespannung? |  |
| 3 | 🔢 number-input | [PRÜFUNG] σ = 120 MPa und τ = 60 MPa wirken gleichzeitig. Berechne die Von-Mises-Vergleichsspannung auf eine Dezimalstel |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Eine Welle wird durch ein Torsionsmoment $M_t$ belastet. Welche Formel liefert die maximale Schubspannung? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Welle (Kreis, $d = 50$ mm) wird mit $M_t = 1000$ Nm belastet. Wie groß ist die maximale Schubspannung $tau_{ma | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Die Sicherheitszahl $S$ muss für einen sicheren Nachweis größer als 1 sein, typisch 1,5 bis 3 bei statischen L | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Formeln ihren Belastungsarten zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte eines kompletten Festigkeitsnachweises. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student rechnet: "Welle mit $M_t = 500$ Nm, $d = 30$ mm. $W = pi d^3/32 = 2650$ $mm^3$. $tau = M_t/W = 189 | ➕ wAE |
| 10 | ✅ true-false | [PRÜFUNG] Die Streckgrenze Re von S235 beträgt mindestens 235 MPa. | 🎯 |

#### Torsion, Knicken & Wechselfestigkeit  `fest-3-2` · 12 min

**Lernziele:**
- Torsions- und Knickberechnung kombinieren
- Goodman-Nachweis mit Sicherheit durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Welle mit $d = 50$ mm wird mit $M_T = 500$ Nm belastet. Maximale Schubspannung $tau_{max}$ in MPa? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Stab beidseitig gelenkig: $E = 210000$ MPa, $I = 5000$ mm⁴, $L = 500$ mm. Knicklast $F_{ki}$? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Goodman mit Sicherheit: $sigma_W = 180$ MPa, $R_m = 360$ MPa, $sigma_m = 60$ MPa, $S = 1{,}5$. Zulässiges $sig |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Torsion, Knicken & Wechselfestigkeit": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 5 | ✅ true-false | [PRÜFUNG] Bei "Torsion, Knicken & Wechselfestigkeit" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetz | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Torsion, Knicken & Wechselfestigkeit" richtig zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Torsion, Knicken & Wechselfestigkeit" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Torsion, Knicken & Wechselfestigkeit"? | ➕ wAE 4B |
| 9 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Torsion, Knicken & Wechselfestigkeit" sollte den Lösungsweg nachvollzieh | ➕ |
| 10 | ✅ true-false | [PRÜFUNG] Knicken ist ein Stabilitätsversagen, das auch unterhalb der Streckgrenze auftreten kann. | 🎯 |

<a id="thermodynamik"></a>
## Thermodynamik `thermodynamik`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** engineering  
**Prerequisites:** `ableitung`, `integralrechnung`  
**3 Units** · **8 Lektionen** · **80 Aufgaben** (🔢 23 · 🔘 23 · ✅ 18 · 🔗 8 · 📋 8)

*Zustandsgrößen, ideale Gase, Hauptsätze und Kreisprozesse.*

### Zustandsgrößen (Unit 1)
*Druck, Temperatur, Volumen und ideale Gasgleichung.*

2 Lektionen · 20 Aufgaben

#### Ideales Gas  `thermo-1-1` · 12 min

**Lernziele:**
- pV = nRT anwenden
- Temperatur in Kelvin verwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | 20 °C entsprechen gerundet wie viel Kelvin? |  |
| 2 | 🔘 multiple-choice | Welche Größe ist absolute Temperatur? | wAE |
| 3 | 🔘 multiple-choice | Warum muss in der Gasgleichung $pV = nRT$ zwingend Kelvin verwendet werden? | ➕ wAE |
| 4 | 🔢 number-input | Ein Gas wird von $t_1 = 20$ °C auf $t_2 = 100$ °C bei konstantem Druck erwärmt. Das Anfangsvolumen ist $V_1 = 1$ $m^3$.  | ➕ |
| 5 | ✅ true-false | Der Absolute Nullpunkt liegt bei $-273{,}15$ °C und entspricht $0$ K. | ➕ |
| 6 | 🔗 matching | Ordne die Zustandsgrößen ihren SI-Einheiten zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte für eine Gasgleichungsaufgabe. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "Gas bei $p_1 = 1$ bar, $T_1 = 20$ °C wird isobar auf $T_2 = 40$ °C erwärmt. $V_2/V_1 = T_2/T_1 = 4 | ➕ wAE |
| 9 | 🔢 number-input | Ein Gasbehälter (starr, $V = $ const) wird von $t_1 = 27$ °C auf $t_2 = 127$ °C erwärmt. Anfangsdruck $p_1 = 1$ bar. Wie | ➕ |
| 10 | ✅ true-false | Bei konstantem Volumen steigt der Druck eines idealen Gases mit der Temperatur. | 🎯 |

#### Druck und Arbeit  `thermo-1-2` · 12 min

**Lernziele:**
- Volumenänderungsarbeit interpretieren
- p-V-Diagramme lesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Bei konstantem Druck p = 200 kPa vergrößert sich das Volumen um ΔV = 0,01 $m^3$. Berechne die Volumenänderungsarbeit. |  |
| 2 | 🔘 multiple-choice | Im p-V-Diagramm entspricht Arbeit ... | wAE |
| 3 | 🔘 multiple-choice | Welche Zustandsänderung läuft so schnell ab, dass kein Wärmeaustausch mit der Umgebung stattfindet? | ➕ wAE |
| 4 | 🔢 number-input | Ein Gas ($n = 2$ mol) wird isotherm bei $T = 300$ K von $V_1 = 1$ $m^3$ auf $V_2 = 2$ $m^3$ expandiert. Wie viel Arbeit  | ➕ |
| 5 | ✅ true-false | Bei einer adiabaten Kompression eines idealen Gases bleibt die Temperatur konstant. | ➕ |
| 6 | 🔗 matching | Ordne jedem Prozesstyp die charakteristische Beziehung zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Arbeitsberechnung bei einer isobaren Expansion. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet für eine adiabate Zustandsänderung: "$p_1 V_1 = p_2 V_2$". Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Luft ($kappa = 1{,}4$) wird adiabat von $p_1 = 1$ bar, $V_1 = 1$ L auf $V_2 = 0{,}5$ L komprimiert. Wie groß ist $p_2$ i | ➕ |
| 10 | ✅ true-false | Bei ΔV = 0 ist die Volumenänderungsarbeit null. | 🎯 |

### Hauptsätze (Unit 2)
*Energie und Wirkungsgrad.*

4 Lektionen · 40 Aufgaben

#### Erster Hauptsatz  `thermo-2-1` · 12 min

**Lernziele:**
- Energiebilanz aufstellen
- Wärme und Arbeit vorzeichenbewusst verwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein System erhält Q = 500 J Wärme und gibt W = 200 J Arbeit ab. Berechne ΔU nach dem ersten Hauptsatz. |  |
| 2 | 🔘 multiple-choice | Der erste Hauptsatz beschreibt: | wAE |
| 3 | 🔘 multiple-choice | Ein ideales Gas wird isotherm komprimiert. Welche Beziehung gilt? | ➕ wAE |
| 4 | 🔢 number-input | Einem Gas wird $Q = 500$ J Wärme zugeführt, während es $W = 200$ J Arbeit leistet. Wie groß ist $Delta U$ in J? | ➕ |
| 5 | ✅ true-false | Bei einem adiabaten Prozess ($Q = 0$) wird die am Gas verrichtete Arbeit vollständig in innere Energie umgewandelt. | ➕ |
| 6 | 🔗 matching | Ordne jedem Prozesstyp die Spezialform des 1. Hauptsatzes zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Anwendung des 1. Hauptsatzes. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "Isochore Erwärmung: $W = p Delta V$, also $W > 0$." Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Ein Gas ($c_v = 717$ J/(kg·K), $m = 2$ kg) wird isochor von $T_1 = 300$ K auf $T_2 = 400$ K erwärmt. Wie viel Wärme $Q$  | ➕ |
| 10 | ✅ true-false | Wenn ein System Arbeit abgibt und keine Wärme erhält, sinkt seine innere Energie. | 🎯 |

#### Wirkungsgrad  `thermo-2-2` · 12 min

**Lernziele:**
- Wirkungsgrad berechnen
- Verluste interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Eine Maschine liefert 80 J Nutzenergie bei 100 J zugeführter Energie. Berechne den Wirkungsgrad η. |  |
| 2 | 🔘 multiple-choice | η = 0,35 bedeutet: | wAE |
| 3 | 🔘 multiple-choice | Eine Wärmekraftmaschine arbeitet zwischen $T_{warm} = 600$ K und $T_{kalt} = 300$ K. Welcher Wirkungsgrad ist theoretisc | ➕ wAE |
| 4 | 🔢 number-input | Kraftwerk: $T_{warm} = 800$ K, $T_{kalt} = 320$ K. Wie groß ist $eta_C$ in Prozent? | ➕ |
| 5 | ✅ true-false | Der Wirkungsgrad einer realen Wärmekraftmaschine ist immer kleiner als der Carnot-Wirkungsgrad zwischen denselben Temper | ➕ |
| 6 | 🔗 matching | Ordne die Maschinen-Kennwerte ihren Definitionen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung des Carnot-Wirkungsgrades. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet für Carnot: $eta_C = 1 - (200 text{ °C})/(500 text{ °C}) = 0{,}6 = 60 %$. Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Wärmepumpe arbeitet zwischen $T_{kalt} = 0$ °C und $T_{warm} = 40$ °C. Wie groß ist der maximal mögliche COP? | ➕ |
| 10 | ✅ true-false | Ein realer Wärmekraftprozess hat η = 1. | 🎯 |

#### Kreisprozesse  `thermo-2-3` · 15 min

**Lernziele:**
- Carnot-Wirkungsgrad berechnen
- Otto-Wirkungsgrad aus Verdichtungsverhältnis bestimmen
- Kreisprozesse als thermodynamische Grundlage verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Carnot-Maschine: T_warm = 800 K, T_kalt = 400 K. Wirkungsgrad η_C? |  |
| 2 | 🔢 number-input | Otto-Motor: Verdichtungsverhältnis ε = 8, γ = 1,4. η_Otto? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Kreisprozesse": Warum muss man in Gasgleichungen Kelvin verwenden? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Kreisprozesse" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Kreisprozesse" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Kreisprozesse" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Kreisprozesse"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Kreisprozesse" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Enderge | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Kreisprozesse" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Maßnahme verbessert den Carnot-Wirkungsgrad am meisten? | 🎯 wAE |

#### Wärmeübertragung  `thermo-2-4` · 15 min

**Lernziele:**
- Wärmeleitung nach Fourier berechnen
- k-Wert einer mehrlagigen Wand bestimmen
- Wärmeübergang und Wärmedurchgang unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Wand: λ = 0,5 W/(mK), d = 0,1 m, A = 10 m², ΔT = 20 K. Wärmestrom Q̇ in W? |  |
| 2 | ✅ true-false | Ein kleinerer k-Wert bedeutet bessere Wärmedämmung. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Wärmeübertragung": Warum muss man in Gasgleichungen Kelvin verwenden? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Wärmeübertragung" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Wärmeübertragung" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Wärmeübertragung" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Wärmeübertragung"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Wärmeübertragung" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Ende | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Wärmeübertragung" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Wand: α_1 = 10 W/(m²K), λ/d = 2,0 W/(m²K), α_2 = 20 W/(m²K). k-Wert in W/(m²K)? | 🎯 |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Thermodynamik-Aufgaben.*

2 Lektionen · 20 Aufgaben

#### Thermo: Prüfungsaufgaben  `thermo-3-1` · 12 min

**Lernziele:**
- Zustandsänderungen berechnen
- Kreisprozesse analysieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Carnot-Maschine: T_warm = 600 K, T_kalt = 300 K. Maximaler Wirkungsgrad? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Isotherme Expansion: 1 mol ideales Gas bei T = 300 K expandiert von 10 L auf 20 L. Arbeit W? (R = 8,314) |  |
| 3 | 🔢 number-input | [PRÜFUNG] Adiabatische Kompression: $p_1$ = 100 kPa, $V_1 = 0{,}01,m^3$, $V_2 = 0{,}005,m^3$, $gamma = 1{,}4$. Berechne  |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Welche Zustandsänderungen bilden den idealisierten Otto-Kreisprozess? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Otto-Prozess mit Verdichtung $epsilon = 10$ und $kappa = 1{,}4$. Wie groß ist der theoretische Wirkungsgrad $e | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] In einem geschlossenen Kreisprozess ist die Summe aller inneren Energieänderungen null. | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Kreisprozesse ihren charakteristischen Kennlinien zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte zur Berechnung des Otto-Wirkungsgrades. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student berechnet Carnot-Wirkungsgrad für einen Ottomotor ($T_{min} = 300$ K, $T_{max} = 2000$ K) als $eta | ➕ wAE |
| 10 | ✅ true-false | [PRÜFUNG] Bei einer isochoren Zustandsänderung wird keine Volumenänderungsarbeit verrichtet. | 🎯 |

#### Kreisprozesse & Wärmeübertragung  `thermo-3-2` · 22 min

**Lernziele:**
- Carnot- und Otto-Wirkungsgrad berechnen
- Wärmebilanz eines Kraftwerks aufstellen
- Wärmeleitung und k-Wert kombiniert anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Carnot-Maschine: T_warm = 1000 K, T_kalt = 250 K. Wirkungsgrad? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Kraftwerk: zugeführter Wärmestrom Q̇_zu = 500 MW, η = 0,4. Abgeführte Wärme Q̇_ab in MW? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Rohrwand: λ = 40 W/(mK), d = 0,01 m, A = 2 m², ΔT = 100 K. Wärmestrom Q̇ in W? |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Kreisprozesse & Wärmeübertragung": Warum muss man in Gasgleichungen Kelvin verwenden? | ➕ wAE 4B |
| 5 | ✅ true-false | [PRÜFUNG] Bei "Kreisprozesse & Wärmeübertragung" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen i | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Kreisprozesse & Wärmeübertragung" richtig zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Kreisprozesse & Wärmeübertragung" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Kreisprozesse & Wärmeübertragung"? | ➕ wAE 4B |
| 9 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Kreisprozesse & Wärmeübertragung" sollte den Lösungsweg nachvollziehbar  | ➕ |
| 10 | ✅ true-false | [PRÜFUNG] Der Carnot-Wirkungsgrad ist die maximale theoretisch erreichbare Effizienz zwischen zwei gegebenen Temperaturn | 🎯 |

<a id="fluidmechanik"></a>
## Fluidmechanik `fluidmechanik`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** engineering  
**Prerequisites:** `ableitung`, `vektoren`  
**3 Units** · **9 Lektionen** · **90 Aufgaben** (🔘 29 · 🔢 26 · ✅ 17 · 🔗 9 · 📋 9)

*Hydrostatik, Kontinuität und Bernoulli für Strömungen.*

### Hydrostatik (Unit 1)
*Druck in ruhenden Fluiden.*

2 Lektionen · 20 Aufgaben

#### Hydrostatischer Druck  `fluid-1-1` · 12 min

**Lernziele:**
- p = ρgh anwenden
- Druck mit Tiefe erklären

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Wasser: ρ = 1000 $kg/m^3$, g = 9,81 $m/s^2$, h = 2 m. p gerundet? |  |
| 2 | 🔘 multiple-choice | Hydrostatischer Druck hängt direkt ab von: | wAE |
| 3 | 🔘 multiple-choice | Warum hängt der hydrostatische Druck nicht von der Form des Behälters ab? | ➕ wAE |
| 4 | 🔢 number-input | In einem Wasserbecken ($rho = 1000$ $kg/m^3$) in Tiefe $h = 5$ m. Wie groß ist der hydrostatische Druck $rho g h$ (ohne  | ➕ |
| 5 | ✅ true-false | Der Luftdruck $p_{atm}$ an der Wasseroberfläche muss zum hydrostatischen Druck addiert werden, wenn der absolute Druck g | ➕ |
| 6 | 🔗 matching | Ordne die Dichten ihren Materialien zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung des Drucks auf einen Tauchkörper in Tiefe $h$. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "Tauchtiefe 30 m, $p = rho g h = 1000 cdot 9{,}81 cdot 30 = 294{,}3$ kPa $approx 3$ bar." Was ist r | ➕ wAE |
| 9 | 🔢 number-input | In einer Zisterne steht Öl ($rho_{Öl} = 800$ $kg/m^3$) 4 m hoch, darunter 2 m Wasser. Wie groß ist der Überdruck am Bode | ➕ |
| 10 | ✅ true-false | In doppelter Tiefe ist der hydrostatische Druck doppelt so groß. | 🎯 |

#### Auftrieb  `fluid-1-2` · 12 min

**Lernziele:**
- Archimedisches Prinzip verwenden
- Verdrängtes Volumen erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Körper verdrängt 0,01 $m^3$ Wasser. Berechne die Auftriebskraft in Wasser gerundet. |  |
| 2 | 🔘 multiple-choice | Auftrieb hängt ab vom ... | wAE |
| 3 | 🔘 multiple-choice | Ein Holzblock schwimmt in Wasser. Wodurch ist das Gleichgewicht bestimmt? | ➕ wAE |
| 4 | 🔢 number-input | Ein Würfel ($V = 0{,}001$ $m^3$, Masse $m = 0{,}6$ kg) wird in Wasser ($rho_W = 1000$ $kg/m^3$) getaucht. Wie groß ist d | ➕ |
| 5 | ✅ true-false | Ein schwimmender Körper verdrängt genau sein eigenes Gewicht an Flüssigkeit. | ➕ |
| 6 | 🔗 matching | Ordne Zustand und Dichteverhältnis. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung der Eintauchtiefe eines schwimmenden Körpers. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet $F_A = rho_{Körper} V g$ für einen in Wasser getauchten Körper. Was ist der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | Ein Holzbalken ($rho_H = 600$ $kg/m^3$, Volumen $V = 0{,}02$ $m^3$) schwimmt in Wasser ($rho_W = 1000$ $kg/m^3$). Welche | ➕ |
| 10 | ✅ true-false | Ein Körper schwimmt, wenn Auftrieb und Gewichtskraft im Gleichgewicht sind. | 🎯 |

### Strömung (Unit 2)
*Kontinuität und Bernoulli.*

5 Lektionen · 50 Aufgaben

#### Kontinuitätsgleichung  `fluid-2-1` · 12 min

**Lernziele:**
- Volumenstrom berechnen
- Geschwindigkeit bei Querschnittsänderung bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Für eine inkompressible Strömung gilt A1 = 4 $cm^2$, v1 = 2 m/s und A2 = 2 $cm^2$. Berechne v2. |  |
| 2 | 🔘 multiple-choice | Volumenstrom wird berechnet mit: | wAE |
| 3 | 🔘 multiple-choice | Wasser strömt durch ein Rohr. Bei Verengung von $A_1$ auf $A_2 = A_1/2$ verhält sich die Geschwindigkeit wie? | ➕ wAE |
| 4 | 🔢 number-input | In einem Rohr ($A_1 = 0{,}01$ $m^2$) fließt Wasser mit $v_1 = 2$ m/s. An einer Verengung ist $A_2 = 0{,}004$ $m^2$. Wie  | ➕ |
| 5 | ✅ true-false | Die Kontinuitätsgleichung $A_1 v_1 = A_2 v_2$ gilt auch für kompressible Gase. | ➕ |
| 6 | 🔗 matching | Ordne die Größen ihren Einheiten zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung der Geschwindigkeit in einer Verengung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student berechnet Kreisfläche bei $d = 20$ mm als $A = pi cdot 20^2 = 1257$ $mm^2$. Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Wasser strömt durch Rohr mit $d_1 = 100$ mm und $v_1 = 1$ m/s in eine Verengung $d_2 = 50$ mm. Wie groß ist $v_2$ in m/s | ➕ |
| 10 | ✅ true-false | Bei kleinerem Querschnitt und gleichem Volumenstrom wird v größer. | 🎯 |

#### Bernoulli-Gleichung  `fluid-2-2` · 12 min

**Lernziele:**
- Energieformen in Strömungen unterscheiden
- Druck- und Geschwindigkeitsanteile deuten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Der Term $frac{1}{2} rho v^2$ beschreibt: | wAE |
| 2 | ✅ true-false | Bernoulli berücksichtigt im Grundmodell keine Reibungsverluste. |  |
| 3 | 🔘 multiple-choice | In einer Rohrverengung steigt die Strömungsgeschwindigkeit. Was passiert mit dem statischen Druck nach Bernoulli? | ➕ wAE |
| 4 | 🔢 number-input | Aus einem Tank mit Füllhöhe $h = 2$ m strömt Wasser am Boden aus. Welche Ausflussgeschwindigkeit in m/s ergibt sich nach | ➕ |
| 5 | ✅ true-false | Die Bernoulli-Gleichung gilt auch bei Reibung. | ➕ |
| 6 | 🔗 matching | Ordne die Terme ihrer Bedeutung zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Anwendung der Bernoulli-Gleichung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet mit Bernoulli bei langem Rohr mit Reibung und wundert sich, dass Ein- und Ausgangsdruck gleich sind. | ➕ wAE |
| 9 | 🔢 number-input | Aus einem Wassertank (Füllhöhe $h = 10$ m) strömt Wasser durch eine Öffnung ins Freie. Welche Ausflussgeschwindigkeit in | ➕ |
| 10 | 🔢 number-input | ρ = 1000 $kg/m^3$, v = 2 m/s. Dynamischer Druck? | 🎯 |

#### Rohrströmung und Druckverlust  `fluid-2-3` · 16 min

**Lernziele:**
- Druckverlust nach Hagen-Poiseuille berechnen
- Darcy-Weisbach-Gleichung anwenden
- Strömungsregime mit Reynolds-Zahl beurteilen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Laminare Strömung: d = 0,02 m, L = 10 m, μ = 0,001 Pa·s, V̇ = 1×10⁻⁴ m³/s. Druckverlust nach Hagen-Poiseuille in Pa? |  |
| 2 | 🔘 multiple-choice | Bei laminarer Rohrströmung (Kreisquerschnitt) ist das Geschwindigkeitsprofil: | wAE |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Rohrströmung und Druckverlust": Was sagt die Kontinuitätsgleichung bei inkompressibler Strömung? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Rohrströmung und Druckverlust" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sin | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Rohrströmung und Druckverlust" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Rohrströmung und Druckverlust" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Rohrströmung und Druckverlust"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Rohrströmung und Druckverlust" sollte den Lösungsweg nachvollziehbar zeigen, nicht | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Rohrströmung und Druckverlust" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Darcy-Weisbach: L = 50 m, d = 0,05 m, v = 3 m/s, ρ = 1000 kg/m³, λ = 0,02. Druckverlust Δp in Pa? | 🎯 |

#### Ähnlichkeitsgesetze und Pumpen  `fluid-2-4` · 16 min

**Lernziele:**
- Dimensionslose Kennzahlen einordnen
- Pumpengesetze auf geänderte Drehzahl anwenden
- Leistungsabhängigkeit von der Drehzahl erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Pumpe: n_1 = 1000 1/min, V̇_1 = 0,02 m³/s. Bei n_2 = 1500 1/min: V̇_2 in m³/s? |  |
| 2 | 🔢 number-input | Gleiche Pumpe: H_1 = 20 m bei n_1 = 1000 1/min. Förderhöhe H_2 bei n_2 = 1500 1/min in m? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Ähnlichkeitsgesetze und Pumpen": Was sagt die Kontinuitätsgleichung bei inkompressibler Strömung? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Ähnlichkeitsgesetze und Pumpen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln si | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Ähnlichkeitsgesetze und Pumpen" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Ähnlichkeitsgesetze und Pumpen" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Ähnlichkeitsgesetze und Pumpen"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Ähnlichkeitsgesetze und Pumpen" sollte den Lösungsweg nachvollziehbar zeigen, nich | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Ähnlichkeitsgesetze und Pumpen" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Gleiche Pumpe: P_1 = 2 kW bei n_1 = 1000 1/min. Leistung P_2 bei n_2 = 2000 1/min in kW? | 🎯 |

#### Moody-Diagramm & Rohrreibung praktisch  `fluid-2-5` · 15 min

**Lernziele:**
- Rohrreibungszahl $lambda$ in Abhängigkeit von $text{Re}$ und $varepsilon/d$ bestimmen
- Laminar-Formel $lambda = 64/text{Re}$ und Blasius-Formel sicher anwenden
- Druckverlust aus $lambda$, $L$, $d$, $v$, $rho$ berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Für eine laminare Rohrströmung ($text{Re} < 2300$) gilt die Rohrreibungszahl | wAE 4B |
| 2 | 🔢 number-input | Wasserströmung im glatten Rohr, $text{Re} = 10,000$. Berechne die Rohrreibungszahl $lambda$ nach Blasius (auf 4 Nachkomm | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Moody-Diagramm & Rohrreibung praktisch": Was sagt die Kontinuitätsgleichung bei inkompressibler Ström | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Moody-Diagramm & Rohrreibung praktisch" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Fo | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Moody-Diagramm & Rohrreibung praktisch" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Moody-Diagramm & Rohrreibung praktisch" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Moody-Diagramm & Rohrreibung praktisch"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Moody-Diagramm & Rohrreibung praktisch" sollte den Lösungsweg nachvollziehbar zeig | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Moody-Diagramm & Rohrreibung praktisch" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Rohr $L = 100$ m, $d = 0{,}05$ m, Wasser ($rho = 1000,text{kg/m}^3$) mit $v = 2$ m/s, $lambda = 0{,}03$. Wie g | 🎯 4B |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Strömungsmechanik-Aufgaben.*

2 Lektionen · 20 Aufgaben

#### Fluid: Prüfungsaufgaben  `fluid-3-1` · 12 min

**Lernziele:**
- Bernoulli-Aufgaben lösen
- Hydrostatik und Auftrieb kombinieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Wasser (ρ = 1000) fließt durch ein Rohr: $v_1$ = 2 m/s, $d_1$ = 100 mm, $d_2$ = 50 mm. Berechne $v_2$. |  |
| 2 | 🔢 number-input | [PRÜFUNG] Ein Tank steht offen ($p_1$ = 101325 Pa). Ausflusshöhe h = 5 m über dem Auslass. Ausflussgeschwindigkeit? (ρ = |  |
| 3 | 🔢 number-input | [PRÜFUNG] Wasser fließt mit v = 1 m/s durch ein Rohr d = 50 mm. Dynamische Viskosität μ = 0,001 Pa·s. Reynolds-Zahl? |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Bei einem großen Tank mit kleinem Auslauf wird $v_1 approx 0$ gesetzt. Warum? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Durch eine Venturi-Düse ($A_1 = 0{,}01$ $m^2$, $A_2 = 0{,}002$ $m^2$) strömt Wasser. Druckdifferenz $Delta p = | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Für die praktische Rohrströmung in Maschinenbau-Aufgaben kann Bernoulli oft nur bis zum nächsten Rohrbogen ode | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Strömungskonzepte ihren Formeln zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte einer kompletten Strömungsaufgabe mit Venturi. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student rechnet für einen Wassertank mit Auslauf 3 m unter dem Spiegel: "$v = g h = 29{,}4$ $m^2/s^2$". Wa | ➕ wAE |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Bei Re = 50000 ist die Strömung: | 🎯 wAE |

#### Druckverlust, Pumpen & Ähnlichkeit  `fluid-3-2` · 22 min

**Lernziele:**
- Darcy-Weisbach für Rohrdruckverlust anwenden
- Pumpengesetze bei Drehzahländerung nutzen
- Bernoulli mit Verlusten kombinieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Rohr: d = 0,1 m, L = 200 m, v = 2 m/s, ρ = 1000 kg/m³, λ = 0,025. Druckverlust Δp in Pa? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Pumpe: n_1 = 3000 1/min, P_1 = 10 kW. Bei n_2 = 1500 1/min: Leistung P_2 in kW? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Bernoulli mit Verlust: p_1 = 200000 Pa, v_1 = 1 m/s, z_1 = 0; v_2 = 4 m/s, z_2 = 0, ρ = 1000 kg/m³, Δp_V = 500 |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Druckverlust, Pumpen & Ähnlichkeit": Was sagt die Kontinuitätsgleichung bei inkompressibler | ➕ wAE 4B |
| 5 | ✅ true-false | [PRÜFUNG] Bei "Druckverlust, Pumpen & Ähnlichkeit" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Druckverlust, Pumpen & Ähnlichkeit" richtig zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Druckverlust, Pumpen & Ähnlichkeit" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Druckverlust, Pumpen & Ähnlichkeit"? | ➕ wAE 4B |
| 9 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Druckverlust, Pumpen & Ähnlichkeit" sollte den Lösungsweg nachvollziehba | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Wird die Drehzahl einer Pumpe verdoppelt, steigt der Volumenstrom auf: | 🎯 wAE |

<a id="werkstoffkunde"></a>
## Werkstoffkunde `werkstoffkunde`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** engineering  
**Prerequisites:** `algebra`  
**3 Units** · **6 Lektionen** · **60 Aufgaben** (🔘 30 · ✅ 12 · 🔗 6 · 📋 6 · 🔢 6)

*Zugversuch, Härteprüfung, Kerbschlag, Werkstoffgruppen — Grundlage 1./2. Semester*

### Werkstoffkennwerte (Unit 1)

2 Lektionen · 20 Aufgaben

#### Spannungs-Dehnungs-Diagramm  `werk-1-1` · 15 min

**Lernziele:**
- Streckgrenze $R_e$, Zugfestigkeit $R_m$, Bruchdehnung $A$ ablesen
- Elastisch vs. plastisch unterscheiden
- Elastizitätsmodul $E$ als Steigung im Hookeschen Bereich erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Aufwärmaufgabe zu "Spannungs-Dehnungs-Diagramm": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 2 | ✅ true-false | Bei "Spannungs-Dehnungs-Diagramm" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnv | ➕ |
| 3 | 🔗 matching | Ordne die Lernbausteine für "Spannungs-Dehnungs-Diagramm" richtig zu. | ➕ |
| 4 | 📋 sorting | Bringe die Prüfungsstrategie für "Spannungs-Dehnungs-Diagramm" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Spannungs-Dehnungs-Diagramm"? | ➕ wAE 4B |
| 6 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Spannungs-Dehnungs-Diagramm" sollte den Lösungsweg nachvollziehbar zeigen, nicht n | ➕ |
| 7 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Spannungs-Dehnungs-Diagramm" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | Rechenaufgabe zu "Spannungs-Dehnungs-Diagramm": F=1000 N, A=100 mm². Berechne σ in MPa. | ➕ |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Spannungs-Dehnungs-Diagramm": Warum sinkt die Normalspannung bei größerer Fläche? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welcher Kennwert markiert den Übergang elastisch → plastisch? | 🎯 wAE |

#### Werkstoffgruppen  `werk-1-2` · 14 min

**Lernziele:**
- Stahl, Aluminium, Kunststoff und Keramik qualitativ vergleichen
- Anwendungsgebiete aus Werkstoffeigenschaften ableiten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Aufwärmaufgabe zu "Werkstoffgruppen": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 2 | ✅ true-false | Bei "Werkstoffgruppen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 3 | 🔗 matching | Ordne die Lernbausteine für "Werkstoffgruppen" richtig zu. | ➕ |
| 4 | 📋 sorting | Bringe die Prüfungsstrategie für "Werkstoffgruppen" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Werkstoffgruppen"? | ➕ wAE 4B |
| 6 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Werkstoffgruppen" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Ende | ➕ |
| 7 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Werkstoffgruppen" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | Rechenaufgabe zu "Werkstoffgruppen": Stahlprobe mit R_m=400 MPa und Sicherheitszahl S=2: Wie groß ist σ_zul in MPa? | ➕ |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Werkstoffgruppen": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welcher Werkstoff ist für eine hochtemperaturfeste, verschleißarme Gleitführung am besten geeignet? | 🎯 wAE |

### Prüfverfahren (Unit 2)

3 Lektionen · 30 Aufgaben

#### Härteprüfung (HV, HB, HRC)  `werk-2-1` · 12 min

**Lernziele:**
- Prinzip der Härteprüfung verstehen
- Vickers, Brinell, Rockwell unterscheiden
- Härte mit Festigkeit korrelieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Aufwärmaufgabe zu "Härteprüfung (HV, HB, HRC)": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 2 | ✅ true-false | Bei "Härteprüfung (HV, HB, HRC)" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvo | ➕ |
| 3 | 🔗 matching | Ordne die Lernbausteine für "Härteprüfung (HV, HB, HRC)" richtig zu. | ➕ |
| 4 | 📋 sorting | Bringe die Prüfungsstrategie für "Härteprüfung (HV, HB, HRC)" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Härteprüfung (HV, HB, HRC)"? | ➕ wAE 4B |
| 6 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Härteprüfung (HV, HB, HRC)" sollte den Lösungsweg nachvollziehbar zeigen, nicht nu | ➕ |
| 7 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Härteprüfung (HV, HB, HRC)" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | Rechenaufgabe zu "Härteprüfung (HV, HB, HRC)": Stahlprobe mit R_m=400 MPa und Sicherheitszahl S=2: Wie groß ist σ_zul in | ➕ |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Härteprüfung (HV, HB, HRC)": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Welches Verfahren eignet sich am besten für eine dünne Oberflächenschicht (z. B. gehärtete Randschicht)? | 🎯 wAE 4B |

#### Kerbschlagbiegeversuch  `werk-2-2` · 12 min

**Lernziele:**
- Sprödbruch-Risiko erkennen
- Übergangstemperatur zwischen zähem und sprödem Verhalten verstehen
- Kerbschlagarbeit $KV$ als Kennwert interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Aufwärmaufgabe zu "Kerbschlagbiegeversuch": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 2 | ✅ true-false | Bei "Kerbschlagbiegeversuch" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 3 | 🔗 matching | Ordne die Lernbausteine für "Kerbschlagbiegeversuch" richtig zu. | ➕ |
| 4 | 📋 sorting | Bringe die Prüfungsstrategie für "Kerbschlagbiegeversuch" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Kerbschlagbiegeversuch"? | ➕ wAE 4B |
| 6 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Kerbschlagbiegeversuch" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur da | ➕ |
| 7 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Kerbschlagbiegeversuch" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | Rechenaufgabe zu "Kerbschlagbiegeversuch": Stahlprobe mit R_m=400 MPa und Sicherheitszahl S=2: Wie groß ist σ_zul in MPa | ➕ |
| 9 | 🔘 multiple-choice | Aufwärmaufgabe zu "Kerbschlagbiegeversuch": Was liest man direkt aus dem Spannungs-Dehnungs-Diagramm ab? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Eine Baustahlprobe hat bei $-20,°text{C}$ eine Kerbschlagarbeit von $15,text{J}$. Was bedeutet das für die Konstruktion? | 🎯 wAE 4B |

#### Fe-C-Diagramm & Wärmebehandlung  `werk-2-3` · 16 min

**Lernziele:**
- Die wichtigsten Gefüge des Fe-C-Systems (Ferrit, Austenit, Perlit, Martensit) unterscheiden
- Den eutektischen Punkt und den für die Härtbarkeit nutzbaren C-Bereich kennen
- Glühen, Härten und Vergüten als typische Wärmebehandlungen einordnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welches Gefüge entsteht beim **schnellen Abschrecken** von Austenit auf Raumtemperatur (genug Kohlenstoff vorausgesetzt) | wAE 4B |
| 2 | 🔢 number-input | Ein Vergütungsstahl mit ca. $0{,}45%$ C wird gehärtet und anschließend vergütet. Welche **Anlasstemperatur** (in $°text{ | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Fe-C-Diagramm & Wärmebehandlung": Warum muss man in Gasgleichungen Kelvin verwenden? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Fe-C-Diagramm & Wärmebehandlung" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln s | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Fe-C-Diagramm & Wärmebehandlung" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Fe-C-Diagramm & Wärmebehandlung" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Fe-C-Diagramm & Wärmebehandlung"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Fe-C-Diagramm & Wärmebehandlung" sollte den Lösungsweg nachvollziehbar zeigen, nic | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Fe-C-Diagramm & Wärmebehandlung" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | Drei Stahlproben gleicher Zusammensetzung wurden unterschiedlich behandelt: (A) langsam im Ofen abgekühlt → Perlit, (B)  | 🎯 wAE 4B |

### 🏁 Prüfung (Unit 3)

1 Lektionen · 10 Aufgaben

#### Prüfung: Werkstoffwahl & Kennwerte  `werk-pruefung-1` · 25 min

**Lernziele:**
- Aus Anforderungen (Last, Temperatur, Umgebung) Werkstoffgruppe wählen
- Kennwerte aus Zugversuch korrekt interpretieren
- Zulässige Spannung mit Sicherheitszahl berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Werkstoffwahl & Kennwerte": Was liest man direkt aus dem Spannungs-Dehnungs-Diagra | ➕ wAE 4B |
| 2 | ✅ true-false | [PRÜFUNG] Bei "Prüfung: Werkstoffwahl & Kennwerte" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen | ➕ |
| 3 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Prüfung: Werkstoffwahl & Kennwerte" richtig zu. | ➕ |
| 4 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Prüfung: Werkstoffwahl & Kennwerte" in die richtige Reihenfolge. | ➕ |
| 5 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Prüfung: Werkstoffwahl & Kennwerte"? | ➕ wAE 4B |
| 6 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Prüfung: Werkstoffwahl & Kennwerte" sollte den Lösungsweg nachvollziehba | ➕ |
| 7 | 🔘 multiple-choice | [PRÜFUNG] Welche Kontrolle passt am Ende einer Aufgabe zu "Prüfung: Werkstoffwahl & Kennwerte" am besten? | ➕ wAE 4B |
| 8 | 🔢 number-input | [PRÜFUNG] Rechenaufgabe zu "Prüfung: Werkstoffwahl & Kennwerte": Stahlprobe mit R_m=400 MPa und Sicherheitszahl S=2: Wie | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Prüfung: Werkstoffwahl & Kennwerte": Was liest man direkt aus dem Spannungs-Dehnungs-Diagra | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] [PRÜFUNG] Stahl: $R_m = 400$ MPa, $S = 2$. Wie groß ist $sigma_text{zul}$ in MPa? | 🎯 wAE |

<a id="maschinenelemente"></a>
## Maschinenelemente `maschinenelemente`

**Level:** Vertiefung · **Phase:** 2. Sem · **Category:** engineering  
**Prerequisites:** `festigkeitslehre`  
**3 Units** · **8 Lektionen** · **80 Aufgaben** (🔘 25 · 🔢 22 · ✅ 17 · 🔗 8 · 📋 8)

*Schrauben, Wellen, Lager und Zahnräder als konstruktive Grundbausteine.*

### Verbindungen (Unit 1)
*Schrauben und formschlüssige Verbindungen.*

3 Lektionen · 30 Aufgaben

#### Schraubenverbindungen  `melem-1-1` · 12 min

**Lernziele:**
- Kraftfluss in Schraubenverbindungen verstehen
- Vorspannung einordnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wozu dient Schraubenvorspannung hauptsächlich? | wAE |
| 2 | ✅ true-false | Eine korrekt vorgespannte Schraube kann Betriebslasten günstiger aufnehmen. |  |
| 3 | 🔘 multiple-choice | Ein Zahnradpaar hat $z_1 = 20$, $z_2 = 80$. Wie ändert sich die Drehzahl vom Antrieb zum Abtrieb? | ➕ wAE |
| 4 | 🔢 number-input | Zahnradpaar: $z_1 = 25$ (Antrieb), $z_2 = 75$. Antriebsdrehmoment $M_1 = 10$ Nm. Wie groß ist $M_2$ in Nm (verlustfrei)? | ➕ |
| 5 | ✅ true-false | Bei einem Untersetzungsgetriebe ($i > 1$) steigt das Drehmoment am Abtrieb um den Faktor $i$. | ➕ |
| 6 | 🔗 matching | Ordne die Getriebe-Begriffe ihren Bedeutungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Auslegung eines einfachen Zahnradpaares. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "Bei $i = 3$ Untersetzung wird aus $n_1 = 1500$ 1/min also $n_2 = 4500$ 1/min." Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Antriebsmotor: $P = 5{,}5$ kW bei $n_1 = 1450$ 1/min. Übersetzung $i = 10$. Wie groß ist $M_2$ am Abtrieb in Nm (verlust | ➕ |
| 10 | 🔢 number-input | Eine Schraube trägt 12 kN von insgesamt 48 kN. Berechne den Lastanteil als Dezimalzahl. | 🎯 |

#### Passfedern und formschlüssige Verbindungen  `melem-1-2` · 12 min

**Lernziele:**
- Formschluss von Kraftschluss unterscheiden
- Drehmomentübertragung beschreiben

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Eine Passfeder ist primär eine ... | wAE |
| 2 | ✅ true-false | Kraftschluss beruht im Kern auf Reibung. |  |
| 3 | 🔘 multiple-choice | Warum werden Wellen oft gegen Biegung und Torsion *zusammen* nachgewiesen? | ➕ wAE |
| 4 | 🔢 number-input | Welle ($d = 40$ mm) mit Biegespannung $sigma_b = 60$ MPa und Torsionsspannung $tau_t = 30$ MPa. Wie groß ist $sigma_v$ ( | ➕ |
| 5 | ✅ true-false | Ein Festlager muss sowohl axiale als auch radiale Kräfte aufnehmen können. | ➕ |
| 6 | 🔗 matching | Ordne die Lagertypen ihren Einsatzbereichen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Wellenauslegung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet Torsionsspannung mit $W = pi d^3 / 32$. Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Welle ($d = 30$ mm) überträgt $M_t = 150$ Nm. Wie groß ist die Torsionsspannung in MPa? | ➕ |
| 10 | 🔘 multiple-choice | Drehmoment wird bei Welle-Nabe-Verbindungen übertragen, um ... | 🎯 wAE |

#### Schweißverbindungen  `melem-1-3` · 12 min

**Lernziele:**
- Schubspannung in Kehlnähten berechnen
- Verbindungsarten vergleichen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Kehlnaht: Nahtdicke a = 5 mm, Nahtlänge l_w = 80 mm, Querkraft F = 8 kN. Schubspannung τ? |  |
| 2 | ✅ true-false | Eine Schweißverbindung ist grundsätzlich lösbar. |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Schweißverbindungen": Was bedeutet eine Übersetzung i=3 bei einem einfachen Zahnradpaar typischerweis | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Schweißverbindungen" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Schweißverbindungen" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Schweißverbindungen" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Schweißverbindungen"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Schweißverbindungen" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das E | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Schweißverbindungen" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Naht: a = 4 mm, l_w = 100 mm, F = 10 kN. Schubspannung τ? | 🎯 wAE |

### Wellen, Lager, Zahnräder (Unit 2)
*Rotierende Maschinenelemente.*

3 Lektionen · 30 Aufgaben

#### Wellen und Lager  `melem-2-1` · 12 min

**Lernziele:**
- Aufgaben von Wellen und Lagern unterscheiden
- Radial- und Axiallasten erkennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Eine Radiallast wirkt ... | wAE |
| 2 | ✅ true-false | Lager sollen Bewegung führen und Kräfte aufnehmen. |  |
| 3 | 🔘 multiple-choice | Warum muss eine Schraubenverbindung mit ausreichender Vorspannkraft angezogen werden? | ➕ wAE |
| 4 | 🔢 number-input | Eine Schraube M10 ($d = 10$ mm) soll mit $F_V = 20000$ N vorgespannt werden. Reibungsbeiwert $K = 0{,}2$. Wie groß ist d | ➕ |
| 5 | ✅ true-false | Die Spannung in einer vorgespannten Schraube wird mit dem Nenndurchmesser berechnet: $sigma = F_V/(pi d^2/4)$. | ➕ |
| 6 | 🔗 matching | Ordne die Schraubenkennwerte ihren Bedeutungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Schraubenauswahl und Anzugsberechnung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet für M12 ($d = 12$ mm, $A_s = 84{,}3$ $mm^2$) Spannung bei $F_V = 30000$ N als $sigma = 30000/(pi cdo | ➕ wAE |
| 9 | 🔢 number-input | Eine Schraube M8 ($d = 8$ mm, $A_s = 36{,}6$ $mm^2$, Festigkeitsklasse 8.8 mit $R_e = 640$ MPa) soll mit 70 % Ausnutzung | ➕ |
| 10 | 🔘 multiple-choice | Eine Welle dient hauptsächlich der Übertragung von: | 🎯 wAE |

#### Zahnräder und Übersetzung  `melem-2-2` · 12 min

**Lernziele:**
- Übersetzungsverhältnis bestimmen
- Drehzahländerung qualitativ deuten

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Zahnradpaar hat z1 = 20 und z2 = 60 Zähne. Berechne die Übersetzung i = z2/z1. |  |
| 2 | 🔘 multiple-choice | Bei i = 3 ist n2 gegenüber n1 ... | wAE |
| 3 | 🔘 multiple-choice | Ein zweistufiges Getriebe hat $i_1 = 4$ und $i_2 = 5$. Wie groß ist die Gesamtübersetzung? | ➕ wAE |
| 4 | 🔢 number-input | Dreistufiges Getriebe mit $i_1 = i_2 = i_3 = 3$. Wie groß ist $i_{ges}$? | ➕ |
| 5 | ✅ true-false | Bei mehrstufigen Getrieben sinkt der Wirkungsgrad multiplikativ: $eta_{ges} = eta_1 cdot eta_2 cdot eta_3$. | ➕ |
| 6 | 🔗 matching | Ordne die Getriebetypen ihren Eigenschaften zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Auslegung eines mehrstufigen Getriebes. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet zweistufig: "$i_1 = 2$, $i_2 = 3$, also $i_{ges} = 5$". Was stimmt nicht? | ➕ wAE |
| 9 | 🔢 number-input | Zweistufiges Getriebe: Eingangsdrehzahl $n_{ein} = 1500$ 1/min, $i_{ges} = 15$. Wie groß ist die Ausgangsdrehzahl in 1/m | ➕ |
| 10 | ✅ true-false | Mehr Zähne am Abtriebsrad senken typischerweise die Abtriebsdrehzahl. | 🎯 |

#### Lagerlebensdauer  `melem-2-3` · 14 min

**Lernziele:**
- L10-Lebensdauer berechnen
- Dynamische Tragzahl C interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Kugellager: C = 30000 N, P = 10000 N. L₁₀ in Mio. Umdrehungen? |  |
| 2 | 🔢 number-input | L₁₀ = 27 Mio. Umdrehungen, n = 1500 1/min. Lebensdauer L₁₀h in Stunden? |  |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Lagerlebensdauer": Was bedeutet eine Übersetzung i=3 bei einem einfachen Zahnradpaar typischerweise? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Lagerlebensdauer" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvoll. | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Lagerlebensdauer" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Lagerlebensdauer" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Lagerlebensdauer"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Lagerlebensdauer" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur das Ende | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Lagerlebensdauer" am besten? | ➕ wAE 4B |
| 10 | 🔢 number-input | [PRÜFUNG] Rollenlager (p = 10/3): C = 50000 N, P = 20000 N. L₁₀ in Mio. U? (auf eine Dezimalstelle) | 🎯 |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Maschinenelemente-Aufgaben.*

2 Lektionen · 20 Aufgaben

#### ME: Prüfungsaufgaben  `melem-3-1` · 12 min

**Lernziele:**
- Zahnradberechnungen durchführen
- Wellenauslegung verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Motor: P = 5 kW bei n = 1500 1/min. Drehmoment M? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Zahnrad d = 100 mm, Drehmoment M = 50 Nm. Umfangskraft F_t? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Zweistufiges Getriebe: $i_1$ = 3, $i_2$ = 4. Gesamtübersetzung? |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Ein Elektromotor hat $P = 11$ kW bei $n = 1450$ 1/min. Welches Drehmoment $M$ liefert er? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Welle ($d = 35$ mm) überträgt $M_t = 200$ Nm und wird gleichzeitig mit Biegemoment $M_b = 100$ Nm belastet. Wi | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] In einer vollständigen Welle-Lager-Schraube-Auslegung müssen alle drei Komponenten unabhängig voneinander nach | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Nachweisarten ihren Komponenten zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte einer kompletten Dimensionierungsaufgabe. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student rechnet für $P = 5$ kW und $n = 3000$ 1/min: "$M = P/n = 5000/3000 approx 1{,}67$ Nm". Was ist fal | ➕ wAE |
| 10 | 🔢 number-input | [PRÜFUNG] Antrieb $n_1$ = 3000 1/min, i_ges = 12. Abtriebsdrehzahl? | 🎯 |

#### Schweißnähte, Lager & Lebensdauer  `melem-3-2` · 22 min

**Lernziele:**
- Schweißnahtspannungen berechnen
- Lagerlebensdauer bestimmen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Kehlnaht: a = 6 mm, l_w = 120 mm, F = 15 kN. Schubspannung τ in N/mm²? |  |
| 2 | 🔢 number-input | [PRÜFUNG] Kugellager: C = 45000 N, P = 15000 N, n = 3000 1/min. Lebensdauer L₁₀h in Stunden? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Elektromotor: P = 7,5 kW, n = 2900 1/min. Drehmoment M in Nm? (auf eine Dezimalstelle) |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Aufwärmaufgabe zu "Schweißnähte, Lager & Lebensdauer": Was bedeutet eine Übersetzung i=3 bei einem einfachen Z | ➕ wAE 4B |
| 5 | ✅ true-false | [PRÜFUNG] Bei "Schweißnähte, Lager & Lebensdauer" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen  | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne die Lernbausteine für "Schweißnähte, Lager & Lebensdauer" richtig zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Bringe die Prüfungsstrategie für "Schweißnähte, Lager & Lebensdauer" in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Antwort beschreibt einen typischen Fehler bei "Schweißnähte, Lager & Lebensdauer"? | ➕ wAE 4B |
| 9 | ✅ true-false | [PRÜFUNG] Eine vollständige Prüfungsantwort zu "Schweißnähte, Lager & Lebensdauer" sollte den Lösungsweg nachvollziehbar | ➕ |
| 10 | ✅ true-false | [PRÜFUNG] Verdoppelt man die Lagerbelastung P bei einem Kugellager, sinkt L₁₀ auf ein Achtel. | 🎯 |

<a id="elektrotechnik"></a>
## Elektrotechnik `elektrotechnik`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** engineering  
**Prerequisites:** `algebra`  
**3 Units** · **8 Lektionen** · **80 Aufgaben** (🔢 29 · 🔘 22 · ✅ 13 · 🔗 8 · 📋 8)

*Gleichstrom, Wechselstrom, Kirchhoffsche Gesetze und elektrische Leistung.*

### Gleichstromkreise (Unit 1)
*Ohmsches Gesetz, Kirchhoff und Leistung.*

3 Lektionen · 30 Aufgaben

#### Ohmsches Gesetz und Grundbegriffe  `et-1-1` · 12 min

**Lernziele:**
- Das Ohmsche Gesetz $U = R cdot I$ anwenden
- Reihen- und Parallelschaltungen berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Widerstand $R = 470,Omega$ wird von einem Strom $I = 20,text{mA}$ durchflossen. Welche Spannung $U$ liegt an? |  |
| 2 | ✅ true-false | Zwei gleiche Widerstände $R$ in Parallelschaltung ergeben einen Gesamtwiderstand von $R/2$. |  |
| 3 | 🔘 multiple-choice | Was beschreibt das Ohmsche Gesetz? | ➕ wAE |
| 4 | 🔢 number-input | Ein Widerstand $R = 50$ $Omega$ liegt an $U = 100$ V. Wie groß ist der Strom $I$ in A? | ➕ |
| 5 | ✅ true-false | Der Gesamtwiderstand einer Parallelschaltung ist immer kleiner als der kleinste Einzelwiderstand. | ➕ |
| 6 | 🔗 matching | Ordne die elektrischen Größen ihren SI-Einheiten zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Analyse eines einfachen Gleichstromkreises. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "$R = 4{,}7$ k$Omega$, $U = 12$ V, also $I = 12/4{,}7 approx 2{,}55$ A." Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Drei Widerstände $R_1 = 10$ $Omega$, $R_2 = 20$ $Omega$, $R_3 = 30$ $Omega$ sind parallel geschaltet. Wie groß ist $R_{g | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Reihenschaltung $R_1 = 100,Omega$ und $R_2 = 150,Omega$ an $U = 12,text{V}$. Wie groß ist der Strom $I$ in Amp | 🎯 |

#### Kirchhoffsche Gesetze  `et-1-2` · 13 min

**Lernziele:**
- Den Knotensatz (KCL) anwenden: $sum I = 0$
- Den Maschensatz (KVL) anwenden: $sum U = 0$

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was besagt der Knotensatz (KCL) von Kirchhoff? | wAE |
| 2 | 🔢 number-input | An einem Knoten fließt $I_1 = 3,text{A}$ zu und $I_2 = 1,text{A}$ ab. Wie groß ist der dritte Strom $I_3$ (abfließend) i |  |
| 3 | 🔘 multiple-choice | Was besagt der Kirchhoffsche Knotensatz (KCL)? | ➕ wAE |
| 4 | 🔢 number-input | An einem Knoten fließen $I_1 = 3$ A und $I_2 = 2$ A zu, $I_3$ fließt ab. Wie groß ist $I_3$ in A? | ➕ |
| 5 | ✅ true-false | Beim Maschenumlauf werden Spannungen entgegen der Umlaufrichtung mit negativem Vorzeichen gezählt. | ➕ |
| 6 | 🔗 matching | Ordne die Gesetze ihrer Aussage zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte der Maschenstromanalyse. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student stellt in einer Masche mit zwei Widerständen und einer Spannungsquelle auf: $U_q + U_{R1} + U_{R2} = 0$. Was | ➕ wAE |
| 9 | 🔢 number-input | In einem Zweimaschennetzwerk gilt: $U_1 = 12$ V, $R_1 = 4$ $Omega$ (Masche 1), $R_2 = 6$ $Omega$ (Masche 2), gemeinsamer | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] In einer Masche gilt $U_q = 9,text{V}$ und $U_{R1} = 4,text{V}$. Wie groß ist $U_{R2}$ nach KVL in Volt? | 🎯 |

#### Elektrische Leistung und Wirkungsgrad  `et-1-3` · 12 min

**Lernziele:**
- Elektrische Leistung mit $P = U cdot I$ berechnen
- Wirkungsgrad $eta = P_text{ab}/P_text{zu}$ anwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | An einem Verbraucher liegt $U = 230,text{V}$ an und es fließt $I = 5,text{A}$. Wie groß ist die Leistung $P$ in Watt? |  |
| 2 | 🔘 multiple-choice | Eine Glühlampe hat $R = 529,Omega$ an $U = 230,text{V}$. Welche Leistung hat sie? | wAE |
| 3 | 🔘 multiple-choice | Welche Formeln beschreiben alle die elektrische Leistung an einem ohmschen Widerstand? | ➕ wAE |
| 4 | 🔢 number-input | Ein Verbraucher: $U = 230$ V, $I = 4$ A. Wie groß ist $P$ in W? | ➕ |
| 5 | ✅ true-false | Der Wirkungsgrad einer realen Maschine ist immer kleiner als 1 (bzw. 100 %). | ➕ |
| 6 | 🔗 matching | Ordne Formel und Beschreibung zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Berechnung der jährlichen Stromkosten eines Verbrauchers. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student schreibt: "Der Föhn hat 2 kWh Leistung." Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Ein Elektromotor nimmt $P_{zu} = 2{,}5$ kW auf und gibt $P_{ab} = 2{,}1$ kW mechanisch ab. Wirkungsgrad $eta$ in %? | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Ein Motor hat eine Eingangsleistung $P_text{zu} = 2,text{kW}$ und einen Wirkungsgrad $eta = 0{,}8$. Wie groß i | 🎯 |

### Wechselstrom (Unit 2)
*Impedanz, Phasenverschiebung und Leistungsfaktor.*

3 Lektionen · 30 Aufgaben

#### Wechselstromgrundlagen und Impedanz  `et-2-1` · 14 min

**Lernziele:**
- Wechselspannung und Kreisfrequenz $omega = 2pi f$ verstehen
- Impedanzen $Z_R$, $Z_C$, $Z_L$ berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Kondensator $C = 10,mutext{F}$ wird mit $f = 50,text{Hz}$ betrieben. Wie groß ist der Impedanzbetrag $\|Z_C\|$ in Oh |  |
| 2 | ✅ true-false | Der Effektivwert einer Sinusspannung beträgt $hat{u}/sqrt{2}$. |  |
| 3 | 🔘 multiple-choice | Was beschreibt die komplexe Impedanz $Z$? | ➕ wAE |
| 4 | 🔢 number-input | Eine Spule $L = 100$ mH bei $f = 50$ Hz. Wie groß ist $\|Z_L\|$ in $Omega$? | ➕ |
| 5 | ✅ true-false | Ein idealer Kondensator wirkt für Gleichstrom ($f = 0$) wie ein unendlich großer Widerstand. | ➕ |
| 6 | 🔗 matching | Ordne Bauteil und Impedanz zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte der Impedanzberechnung einer RL-Reihenschaltung. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student rechnet: "$Z_L = 2pi cdot 50 cdot 0{,}01 = 3{,}14$ $Omega$, $Z_R = 10$ $Omega$, also $\|Z\| = 10 + 3{,}14 =  | ➕ wAE |
| 9 | 🔢 number-input | RLC-Reihe: $R = 10$ $Omega$, $L = 50$ mH, $C = 100$ $mu$F, $f = 50$ Hz. Wie groß ist $\|Z\|$ in $Omega$? | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Eine Spule $L = 0{,}1,text{H}$ liegt an $f = 50,text{Hz}$. Wie groß ist $\|Z_L\|$? | 🎯 wAE |

#### RC- und RL-Schaltungen  `et-2-2` · 14 min

**Lernziele:**
- Grenzfrequenz eines RC-Tiefpasses berechnen
- Impedanz einer RL-Schaltung bestimmen
- Leistungsfaktor $cosvarphi$ verstehen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | RC-Tiefpass mit $R = 1,text{k}Omega$ und $C = 10,mutext{F}$. Wie groß ist die Grenzfrequenz $f_g$ in Hz? |  |
| 2 | ✅ true-false | Bei $cosvarphi = 1$ ist die gesamte Scheinleistung Wirkleistung (kein Blindanteil). |  |
| 3 | 🔘 multiple-choice | Was versteht man unter der Grenzfrequenz $f_g$ eines RC-Tiefpasses? | ➕ wAE |
| 4 | 🔢 number-input | RC-Tiefpass mit $R = 1$ k$Omega$, $C = 1$ $mu$F. Wie groß ist $f_g$ in Hz? | ➕ |
| 5 | ✅ true-false | Bei reinem ohmschen Verbraucher gilt $cosvarphi = 1$. | ➕ |
| 6 | 🔗 matching | Ordne Bauelement und Phasenwinkel (zwischen $U$ und $I$) zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Frequenzgang-Analyse eines RC-Tiefpasses. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student sagt: "Bei $omega = 50$ Hz ist $X_L = 50 cdot 0{,}1 = 5$ $Omega$." Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | RL-Hochpass: $R = 2$ k$Omega$, $L = 10$ mH. Grenzfrequenz $f_g$ in Hz? | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] RL-Schaltung: $R = 50,Omega$, $L = 0{,}2,text{H}$, $f = 50,text{Hz}$. Wie groß ist der Impedanzbetrag $\|Z\|$  | 🎯 |

#### Drehstrom & 3-Phasensystem  `et-2-3` · 15 min

**Lernziele:**
- Stern- (Y) und Dreieckschaltung ($Delta$) unterscheiden
- Verkettete Spannung $U_{LL} = sqrt{3} cdot U_{LN}$ anwenden
- Wirkleistung im Drehstromsystem berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Ein Drehstrommotor ist in Stern geschaltet und an einem Netz mit $U_{LN} = 230,text{V}$ angeschlossen. Wie groß ist die  | wAE 4B |
| 2 | 🔢 number-input | Ein Drehstrommotor läuft an $U_{LL} = 400,text{V}$, zieht Strangstrom $I = 10,text{A}$ und hat Leistungsfaktor $cosvarph | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Drehstrom & 3-Phasensystem": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Drehstrom & 3-Phasensystem" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvo | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Drehstrom & 3-Phasensystem" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Drehstrom & 3-Phasensystem" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Drehstrom & 3-Phasensystem"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Drehstrom & 3-Phasensystem" sollte den Lösungsweg nachvollziehbar zeigen, nicht nu | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Drehstrom & 3-Phasensystem" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Warum wird ein großer Drehstrom-Asynchronmotor beim Anlauf in Stern und im Betrieb in Dreieck geschaltet? | 🎯 wAE 4B |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Elektrotechnik-Aufgaben.*

2 Lektionen · 20 Aufgaben

#### Gleichstrom Prüfungsaufgaben  `et-3-1` · 20 min

**Lernziele:**
- Kirchhoffsche Gesetze in komplexen Schaltungen anwenden
- Spannungsteiler und Stromteiler berechnen
- Elektrische Energie und Leistung klausurfertig lösen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Spannungsteiler: $U = 12,text{V}$, $R_1 = 300,Omega$, $R_2 = 700,Omega$. Wie groß ist die Spannung $U_2$ an $R |  |
| 2 | 🔢 number-input | [PRÜFUNG] Parallelschaltung $R_1 = 60,Omega$ und $R_2 = 40,Omega$. Wie groß ist $R_text{ges}$ in Ohm? |  |
| 3 | 🔢 number-input | [PRÜFUNG] Heizwiderstand $R = 23,Omega$ an $U = 230,text{V}$ läuft 1 Stunde. Wie viel Energie $W$ wird verbraucht in kWh |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Welche Methode ist bei einem linearen Gleichstromnetzwerk mit mehreren unabhängigen Quellen am systematischste | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Spannungsteiler: $U = 24$ V, $R_1 = 1$ k$Omega$, $R_2 = 3$ k$Omega$. Wie groß ist $U_2$ in V? | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Die Summe der in einen Knoten hineinfließenden Ströme ist null (unter Beachtung der Vorzeichen). | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne die Aufgabenart der passenden Methode zu. | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte zur Lösung einer Gleichstromaufgabe in der Prüfung. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Klausurfehler: "Spannung an $R_2$: $U_2 = U cdot R_1/(R_1 + R_2)$." Was ist falsch? | ➕ wAE |
| 10 | ✅ true-false | [PRÜFUNG] Ein Stromteiler teilt den Strom umgekehrt proportional zu den Widerständen auf (größerer Widerstand → kleinere | 🎯 |

#### Wechselstrom Prüfungsaufgaben  `et-3-2` · 20 min

**Lernziele:**
- Resonanzfrequenz eines RLC-Kreises berechnen
- Leistungsfaktor und Wirkleistung bestimmen
- Tiefpass-Übertragungsverhalten klausurfertig beherrschen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] RLC-Reihenschaltung: $R = 100,Omega$, $L = 0{,}1,text{H}$, $C = 100,mutext{F}$. Wie groß ist die Resonanzfrequ |  |
| 2 | 🔢 number-input | [PRÜFUNG] RC-Tiefpass bei der Grenzfrequenz $f = f_g$. Wie groß ist der Übertragungsbetrags $\|G\|$? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Wie berechnet sich die Resonanzfrequenz eines Reihenschwingkreises (RLC)? | ➕ wAE |
| 4 | 🔢 number-input | [PRÜFUNG] Reihenschwingkreis $L = 10$ mH, $C = 10$ $mu$F. Resonanzfrequenz $f_0$ in Hz? | ➕ |
| 5 | ✅ true-false | [PRÜFUNG] Bei der Resonanzfrequenz eines RLC-Reihenschwingkreises ist die Gesamtimpedanz rein ohmsch. | ➕ |
| 6 | 🔗 matching | [PRÜFUNG] Ordne den Frequenzbereich seinem Impedanzverhalten im RLC-Reihenschwingkreis zu. | ➕ |
| 7 | 📋 sorting | [PRÜFUNG] Ordne die Schritte zur Analyse einer AC-Schaltung. | ➕ |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Ein Student rechnet mit $hat{U} = 325$ V und setzt dies in $P = U cdot I$ ein. Wo liegt der Fehler? | ➕ wAE |
| 9 | 🔢 number-input | [PRÜFUNG] Induktiver Verbraucher: $P = 2$ kW, $U = 230$ V, $cosvarphi = 0{,}7$. Welche parallele Kapazität $C$ in $mu$F  | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Scheinleistung $S = 5,text{kVA}$, Leistungsfaktor $cosvarphi = 0{,}8$. Wie groß ist die Wirkleistung $P$ in Wa | 🎯 |

<a id="regelungstechnik"></a>
## Regelungstechnik `regelungstechnik`

**Level:** Vertiefung · **Phase:** Vertiefung · **Category:** engineering  
**Prerequisites:** `differentialgleichungen`, `komplexe-zahlen`  
**3 Units** · **6 Lektionen** · **60 Aufgaben** (🔘 22 · 🔢 14 · ✅ 12 · 🔗 6 · 📋 6)

*Regelkreis, Übertragungsfunktionen, PID-Regler und Stabilität.*

### Grundlagen des Regelkreises (Unit 1)
*Regelkreis, Grundbegriffe und Übertragungsfunktionen.*

2 Lektionen · 20 Aufgaben

#### Regelkreis Grundbegriffe  `rt-1-1` · 12 min

**Lernziele:**
- Komponenten eines Regelkreises benennen
- Regelabweichung $e = w - y$ erklären
- Steuerung und Regelung unterscheiden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was ist die Regelabweichung $e$? | wAE |
| 2 | ✅ true-false | Eine Steuerung (offener Kreis) kann Störungen automatisch ausregeln. |  |
| 3 | 🔘 multiple-choice | Wie ist die Regelabweichung $e$ in einem Standardregelkreis definiert? | ➕ wAE |
| 4 | 🔢 number-input | Führungsgröße $w = 80$ °C, Regelgröße $y = 72$ °C. Wie groß ist $e$ in °C? | ➕ |
| 5 | ✅ true-false | Eine Steuerung (ohne Rückführung) kann Störungen der Regelgröße nicht korrigieren. | ➕ |
| 6 | 🔗 matching | Ordne die Komponenten des Regelkreises ihrer Funktion zu. | ➕ |
| 7 | 📋 sorting | Ordne den Signalfluss in einem geschlossenen Regelkreis. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student definiert: "$e = y - w$, weil der Istwert ja bekannt ist." Was ist problematisch? | ➕ wAE |
| 9 | 🔢 number-input | Eine Füllstandsregelung soll $w = 2{,}0$ m halten. Aktueller Istwert $y = 1{,}75$ m, P-Regler mit $K_P = 4$. Wie groß is | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Welche Aussage über Regelungen ist richtig? | 🎯 wAE |

#### Übertragungsfunktion  `rt-1-2` · 15 min

**Lernziele:**
- Übertragungsfunktion $G(s) = Y(s)/U(s)$ im Laplace-Bereich definieren
- PT1-Glied und Verstärkung bei $s = 0$ bestimmen
- Führungsübertragungsfunktion $T = G_0/(1+G_0)$ berechnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | PT1-Glied: $G(s) = frac{2}{1+0{,}5s}$. Wie groß ist die stationäre Verstärkung $K$ (bei $s to 0$)? |  |
| 2 | ✅ true-false | Bei Reihenschaltung zweier Übertragungsglieder $G_1$ und $G_2$ gilt $G_text{ges} = G_1 + G_2$. |  |
| 3 | 🔘 multiple-choice | Was ist die Übertragungsfunktion $G(s)$ eines linearen Systems? | ➕ wAE |
| 4 | 🔢 number-input | Für ein PT1-Glied $G(s) = 5/(1 + 2s)$: Wie groß ist $G(0)$ (stationäre Verstärkung)? | ➕ |
| 5 | ✅ true-false | Zwei Übertragungsglieder in Reihe werden durch Multiplikation ihrer Übertragungsfunktionen zusammengefasst. | ➕ |
| 6 | 🔗 matching | Ordne die Übertragungsglieder ihren Funktionen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Überführung einer DGL in eine Übertragungsfunktion. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student sagt: "$G_1 = 2$ und $G_2 = 1/(1+s)$ in Reihe ergibt $G = 2 + 1/(1+s)$." Was ist falsch? | ➕ wAE |
| 9 | 🔢 number-input | Rückkopplung: $G_o(s) = 4/(s+2)$ mit negativer Rückführung ($H = 1$). Wie groß ist die stationäre Verstärkung der Führun | ➕ |
| 10 | 🔢 number-input | [PRÜFUNG] Regler $G_R = 5$, Strecke $G_S(s) = 1/(s+2)$. Wie groß ist die Führungsübertragungsfunktion $T(0)$ bei $s = 0$ | 🎯 |

### Regler und Stabilität (Unit 2)
*PID-Regler und Stabilitätskriterien.*

3 Lektionen · 30 Aufgaben

#### PID-Regler  `rt-2-1` · 15 min

**Lernziele:**
- P-, I- und D-Anteil des PID-Reglers erklären
- Wirkung der drei Anteile im Zeitbereich verstehen
- PID im Laplace-Bereich formulieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welcher Regleranteil beseitigt den stationären Fehler (bleibende Regelabweichung)? | wAE |
| 2 | ✅ true-false | Der D-Anteil eines PID-Reglers reagiert auf den aktuellen Fehlerwert $e(t)$. |  |
| 3 | 🔘 multiple-choice | Welcher Anteil des PID-Reglers beseitigt einen stationären Fehler bei einer Regelstrecke ohne Integration? | ➕ wAE |
| 4 | 🔢 number-input | PI-Regler mit $K_P = 2$, $T_I = 0{,}5$ s. Bei konstantem $e = 3$ nach $t = 1$ s (Integral von 0 bis 1): Wie groß ist $u( | ➕ |
| 5 | ✅ true-false | Der D-Anteil eines PID-Reglers reagiert auf die Änderungsrate $de/dt$ der Regelabweichung. | ➕ |
| 6 | 🔗 matching | Ordne die Anteile ihren typischen Wirkungen zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur empirischen Auslegung eines PID-Reglers (Ziegler-Nichols, Schwingungsmethode). | ➕ |
| 8 | 🔘 multiple-choice | Ein Student stellt fest: "Der I-Anteil mit großem $K_I$ macht den Regler noch besser." Was übersieht er? | ➕ wAE |
| 9 | 🔢 number-input | PI-Regler mit $K_P = 3$, $T_I = 2$ s. Regelabweichung steigt linear: $e(t) = 0{,}5 cdot t$ (in passender Einheit). Wie g | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] PID im Laplace-Bereich: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$. Was dominiert bei hohen Frequenzen ($s to infty | 🎯 wAE |

#### Stabilität  `rt-2-2` · 14 min

**Lernziele:**
- Stabilitätsbedingung (Pole in linker Halbebene) formulieren
- Hurwitz-Kriterium erklären
- Phasenrand und Amplitudenrand im Bodediagramm interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Ein System ist stabil, wenn alle Pole der Übertragungsfunktion ... | wAE |
| 2 | ✅ true-false | Ein Phasenrand von $45°$ gilt als gute Stabilitätsreserve. |  |
| 3 | 🔘 multiple-choice | Welche Bedingung müssen die Pole erfüllen, damit ein lineares System stabil ist? | ➕ wAE |
| 4 | 🔢 number-input | System mit $G(s) = 10/(s^2 + 3s + 2)$. Der Realteil beider Pole ist negativ? (Antwort: $-1$ oder $-2$ — gib den kleinere | ➕ |
| 5 | ✅ true-false | Nullstellen der Übertragungsfunktion beeinflussen die Stabilität eines Systems. | ➕ |
| 6 | 🔗 matching | Ordne Pollage und Zeitverhalten zu. | ➕ |
| 7 | 📋 sorting | Ordne die Schritte zur Stabilitätsprüfung eines Regelkreises. | ➕ |
| 8 | 🔘 multiple-choice | Ein Student sagt: "Das System $G(s) = (s+10)/(s^2 + 4s + 4)$ ist instabil, weil die Nullstelle bei $s = -10$ liegt." Was | ➕ wAE |
| 9 | 🔢 number-input | Charakteristische Gleichung $s^2 + a s + 4 = 0$. Welches minimale $a$ macht das System gerade grenzstabil (auf der Grenz | ➕ |
| 10 | 🔘 multiple-choice | [PRÜFUNG] System 3. Ordnung: Nenner $2s^3 + 3s^2 + s + k$. Welche Aussage zur Hurwitz-Bedingung ist richtig? | 🎯 wAE |

#### Bodediagramm & Phasengang  `rt-2-3` · 15 min

**Lernziele:**
- Amplituden- und Phasengang typischer Übertragungsglieder kennen (P, I, D, PT1)
- Grenzfrequenz und $-3,text{dB}$-Punkt interpretieren
- Phasenreserve als Stabilitätsmaß lesen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Steigung hat der Amplitudengang eines reinen I-Gliedes ($G(s) = 1/(T_I s)$) im Bodediagramm? | wAE 4B |
| 2 | 🔢 number-input | Ein RC-Tiefpass (PT1) hat die Grenzfrequenz $f_g = 1,text{kHz}$. Wie groß ist die Verstärkung $\|G\|$ in Dezibel bei $f  | 4B |
| 3 | 🔘 multiple-choice | Aufwärmaufgabe zu "Bodediagramm & Phasengang": Was ist bei Gleichungen die wichtigste Regel? | ➕ wAE 4B |
| 4 | ✅ true-false | Bei "Bodediagramm & Phasengang" ist ein Einheiten-, Definitions- oder Annahmencheck vor dem Einsetzen in Formeln sinnvol | ➕ |
| 5 | 🔗 matching | Ordne die Lernbausteine für "Bodediagramm & Phasengang" richtig zu. | ➕ |
| 6 | 📋 sorting | Bringe die Prüfungsstrategie für "Bodediagramm & Phasengang" in die richtige Reihenfolge. | ➕ |
| 7 | 🔘 multiple-choice | Welche Antwort beschreibt einen typischen Fehler bei "Bodediagramm & Phasengang"? | ➕ wAE 4B |
| 8 | ✅ true-false | Eine vollständige Prüfungsantwort zu "Bodediagramm & Phasengang" sollte den Lösungsweg nachvollziehbar zeigen, nicht nur | ➕ |
| 9 | 🔘 multiple-choice | Welche Kontrolle passt am Ende einer Aufgabe zu "Bodediagramm & Phasengang" am besten? | ➕ wAE 4B |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Im Bodediagramm des offenen Regelkreises $G_0$ wird bei der Durchtrittsfrequenz $omega_D$ (wo $\|G_0\| = 0,tex | 🎯 wAE 4B |

### 🏁 Prüfungsaufgaben (Unit 3)
*Klausurrelevante Regelungstechnik-Aufgaben.*

1 Lektionen · 10 Aufgaben

#### Regelkreis & PID Prüfungsaufgaben  `rt-3-1` · 22 min

**Lernziele:**
- Stationäre Regelabweichung beim P-Regler berechnen
- Führungsübertragungsfunktion klausurfertig anwenden
- Systemtyp und Rampenfolge einordnen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] P-Regler $K_P = 10$, Strecke $G_S(s) = 1/(s+1)$. Wie groß ist die bleibende Regelabweichung $e_text{stat}$ für |  |
| 2 | 🔢 number-input | [PRÜFUNG] PT1-Glied: $G(s) = 3/(1+2s)$. Wie groß ist die Verstärkung bei $f = 0,text{Hz}$ (DC)? |  |
| 3 | 🔘 multiple-choice | [PRÜFUNG] Welcher Regler-Typ gewährleistet stationäre Genauigkeit bei einem Rampeneingang? | wAE |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Wovon hängt der stationäre Regelfehler eines geschlossenen Kreises bei konstanter Führungsgröße ab? | ➕ wAE |
| 5 | 🔢 number-input | [PRÜFUNG] P-Regler $K_P = 4$, PT1-Strecke $K_S = 2$, $T = 3$ s. Konstanter Sollwert $w_0 = 10$. Wie groß ist $e_{stat}$? | ➕ |
| 6 | ✅ true-false | [PRÜFUNG] Ein Pol der Führungsübertragungsfunktion bei $s = +1$ macht das geschlossene System instabil. | ➕ |
| 7 | 🔗 matching | [PRÜFUNG] Ordne Systemtyp und stat. Fehler bei Sprungeingang zu (offener Kreis). | ➕ |
| 8 | 📋 sorting | [PRÜFUNG] Ordne die Schritte zur Reglerauslegung für einen stationären Fehler von null bei Sprung. | ➕ |
| 9 | 🔘 multiple-choice | [PRÜFUNG] Ein Student schließt aus "Pol bei $s = -0{,}5 + 3j$" auf Instabilität. Was ist falsch? | ➕ wAE |
| 10 | ✅ true-false | [PRÜFUNG] Ein stabiler Regelkreis hat alle Pole der Führungsübertragungsfunktion $T(s)$ in der linken $s$-Halbebene. | 🎯 |

<a id="python-matlab"></a>
## Python & Matlab `python-matlab`

**Level:** Grundlagen · **Phase:** 1. Sem · **Category:** programming  
**Prerequisites:** `algebra`  
**4 Units** · **13 Lektionen** · **130 Aufgaben** (🔘 46 · 🔢 35 · ✅ 23 · 📋 14 · 🔗 12)

*Programmier-Grundlagen und numerische Methoden für Maschinenbau an der TU Wien.*

### Python Grundlagen (Unit 1)
*Variablen, Datentypen, Kontrollstrukturen und Funktionen.*

5 Lektionen · 50 Aufgaben

#### Variablen & Datentypen  `py-1-1` · 10 min

**Lernziele:**
- Variablen zuweisen und benennen
- int, float, string und bool unterscheiden
- Typumwandlungen durchführen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welchen Typ hat `x` nach `x = 3.0` in Python? | wAE |
| 2 | 🔘 multiple-choice | Was ergibt `type(True)` in Python? | wAE |
| 3 | 🔘 multiple-choice | Welchen Typ hat `x` nach `x = 7` in Python? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `len([1, 2, 3, 4, 5])` zurück? | ➕ |
| 5 | ✅ true-false | In Matlab ist der Standarddatentyp für Zahlen `double`, während Python zwischen `int` und `float` unterscheidet. | ➕ |
| 6 | 🔗 matching | Ordne Python-Datentypen ihrem Matlab-Äquivalent zu. | ➕ |
| 7 | 📋 sorting | Bringe die Python-Zeilen in die richtige Reihenfolge, um den Typ einer Variable zu prüfen. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch an `x = int("3.14")` in Python? | ➕ wAE |
| 9 | 🔢 number-input | Was gibt `int(float("7.9"))` zurück? | ➕ |
| 10 | ✅ true-false | In Python muss man den Datentyp einer Variable bei der Deklaration angeben. | 🎯 |

#### Operatoren & Ausdrücke  `py-1-2` · 10 min

**Lernziele:**
- Arithmetische Operatoren anwenden
- Ganzzahldivision und Modulo verstehen
- Vergleichs- und logische Operatoren verwenden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Was ergibt `17 // 5` in Python? |  |
| 2 | 🔢 number-input | Was ergibt `17 % 5` in Python? |  |
| 3 | 🔘 multiple-choice | Welcher Operator berechnet in Python den Rest einer Division? | ➕ wAE |
| 4 | 🔢 number-input | Was ergibt `2 ** 10` in Python? | ➕ |
| 5 | ✅ true-false | In Python ergibt `7 / 2` den Wert `3`, weil die Division ganzzahlig ist. | ➕ |
| 6 | 🔗 matching | Ordne Python-Operatoren ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe die Auswertung von `3 + 2 ** 3 * 2` in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist am folgenden Matlab-Code falsch, wenn man ihn 1:1 in Python übernimmt: `x = 2^8`? | ➕ wAE |
| 9 | 🔢 number-input | Was ergibt `(100 % 7) + (100 // 7)` in Python? | ➕ |
| 10 | 🔘 multiple-choice | Was ergibt `2 ** 3 + 1` in Python? | 🎯 wAE |

#### Listen & Arrays  `py-1-3` · 10 min

**Lernziele:**
- Python-Listen erstellen und manipulieren
- Slicing und Indizierung verstehen
- NumPy Arrays für Berechnungen nutzen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Gegeben: `a = [10, 20, 30, 40, 50]`. Was ergibt `a[2]` in Python? |  |
| 2 | ✅ true-false | In Matlab gibt `a(0)` das erste Element eines Arrays zurück. |  |
| 3 | 🔘 multiple-choice | Was ist der Hauptunterschied zwischen einer Python-`list` und einem `numpy.array`? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `len([10, 20, 30, 40])` zurück? | ➕ |
| 5 | ✅ true-false | In Python startet der Listenindex bei 0, in Matlab startet der Vektorindex bei 1. | ➕ |
| 6 | 🔗 matching | Ordne Python-Konstrukte ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe den Code zur Erstellung und Verwendung eines NumPy-Arrays in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch, wenn man `a = [1, 2, 3]` als Python-`list` anlegt und dann `a * 2` als elementweise Verdoppelung interpr | ➕ wAE |
| 9 | 🔢 number-input | Was ist `np.array([3, 6, 9])[1]`? | ➕ |
| 10 | 🔘 multiple-choice | Welcher Befehl erzeugt in Python ein NumPy-Array mit den Werten 1 bis 5? | 🎯 wAE |

#### Kontrollstrukturen  `py-1-4` · 10 min

**Lernziele:**
- if/elif/else Verzweigungen schreiben
- for- und while-Schleifen anwenden
- Unterschiede zwischen Python und Matlab kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was gibt dieser Code aus? ```python for i in range(3):     print(i) ``` | wAE |
| 2 | ✅ true-false | In Python wird ein Codeblock durch geschweifte Klammern `{}` definiert. |  |
| 3 | 🔘 multiple-choice | Was erzeugt `range(5)` in Python? | ➕ wAE |
| 4 | 🔢 number-input | Wie oft wird der Schleifenkörper bei `for i in range(3):` ausgeführt? | ➕ |
| 5 | ✅ true-false | In Python werden Code-Blöcke (for, if, def) durch Einrückung definiert, nicht durch `end`-Schlüsselwörter. | ➕ |
| 6 | 🔗 matching | Ordne Python-Kontrollstrukturen ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe die Python-Schleife zur Summe 1+2+3+4+5 in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch an diesem Python-Code? ``` for i in range(5)     print(i) ``` | ➕ wAE |
| 9 | 🔢 number-input | Was gibt diese Schleife aus? `s = 0 for i in range(4): s += i print(s)` — Welchen Wert hat `s`? | ➕ |
| 10 | 🔘 multiple-choice | Wie lautet das Matlab-Äquivalent zu `for i in range(1, 6):`? | 🎯 wAE |

#### Funktionen definieren  `py-1-5` · 10 min

**Lernziele:**
- Eigene Funktionen schreiben
- Parameter und Rückgabewerte verstehen
- Lambda-Ausdrücke kennen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Was gibt `kraft(5)` zurück, wenn `def kraft(m, a=9.81): return m * a`? | wAE |
| 2 | 🔘 multiple-choice | Wie definiert man in Matlab eine anonyme Funktion f(x) = sin(x)/x? | wAE |
| 3 | 🔘 multiple-choice | Wie gibt eine Python-Funktion mehrere Werte gleichzeitig zurück? | ➕ wAE |
| 4 | 🔢 number-input | Wie viele Parameter hat `def berechne(kraft, flaeche, faktor=1.0):`? | ➕ |
| 5 | ✅ true-false | In Python ist das Schlüsselwort `def` nötig, um eine Funktion zu definieren, während Matlab das Schlüsselwort `function` | ➕ |
| 6 | 🔗 matching | Ordne Python-Funktionssyntax ihrer Matlab-Entsprechung zu. | ➕ |
| 7 | 📋 sorting | Bringe die Python-Funktion zur Berechnung von σ = F/A in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch an dieser Python-Funktion? ``` def quadrat(x): return x ** 2 ``` | ➕ wAE |
| 9 | 🔢 number-input | Was gibt `def f(x): return x * 3` aufgerufen als `f(7)` zurück? | ➕ |
| 10 | ✅ true-false | Eine Python-Funktion kann mehrere Werte gleichzeitig zurückgeben. | 🎯 |

### Numerisches Rechnen (Unit 2)
*NumPy, Plotting und numerische Methoden für technische Berechnungen.*

4 Lektionen · 40 Aufgaben

#### NumPy Grundlagen  `py-2-1` · 10 min

**Lernziele:**
- NumPy importieren und Arrays erzeugen
- Elementweise Operationen durchführen
- Matrizen erstellen und multiplizieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welcher Befehl erzeugt eine 3×3 Einheitsmatrix in NumPy? | wAE |
| 2 | ✅ true-false | In NumPy führt `A * B` eine Matrixmultiplikation durch. |  |
| 3 | 🔘 multiple-choice | Was bedeutet Broadcasting in NumPy? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `np.zeros(4).size` zurück? | ➕ |
| 5 | ✅ true-false | In NumPy führt `a * b` bei zwei Arrays eine elementweise Multiplikation durch, nicht eine Matrixmultiplikation. | ➕ |
| 6 | 🔗 matching | Ordne NumPy-Funktionen ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe den Code zur Berechnung des Mittelwerts mit NumPy in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch an `a = np.array([1, 2, 3]); b = np.array([1, 2]); c = a + b`? | ➕ wAE |
| 9 | 🔢 number-input | Was ist `np.sum(np.array([1, 2, 3, 4]))`? | ➕ |
| 10 | 🔘 multiple-choice | Was ist das Matlab-Äquivalent zu `np.linspace(0, 2*np.pi, 100)`? | 🎯 wAE |

#### Matplotlib — Daten visualisieren  `py-2-2` · 10 min

**Lernziele:**
- Linien- und Scatterplots erstellen
- Achsen beschriften und formatieren
- Mehrere Kurven in einem Plot darstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welcher Befehl fügt eine Legende zu einem Matplotlib-Plot hinzu? | wAE |
| 2 | 📋 sorting | Bringe die Schritte zum Erstellen eines Plots in die richtige Reihenfolge: |  |
| 3 | 🔘 multiple-choice | Welcher Befehl zeigt in Matplotlib den fertigen Plot an? | ➕ wAE |
| 4 | 🔢 number-input | Wie viele Datenpunkte enthält `np.linspace(0, 10, 11)`? | ➕ |
| 5 | ✅ true-false | Mit `plt.plot(x, y, label="Kurve")` und anschließendem `plt.legend()` erscheint eine Legende im Diagramm. | ➕ |
| 6 | 🔗 matching | Ordne Matplotlib-Befehle ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe den Code für einen einfachen Sinus-Plot in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was fehlt in diesem Code, damit die Legende erscheint? ``` plt.plot(x, y) plt.show() ``` | ➕ wAE |
| 9 | 🔢 number-input | Wie viele Datenpunkte plottet `plt.plot(np.linspace(0,5,6), np.linspace(0,5,6))`? | ➕ |
| 10 | ✅ true-false | In Matplotlib speichert man einen Plot mit `plt.savefig()` VOR `plt.show()`. | 🎯 |

#### Gleichungen lösen & Optimierung  `py-2-3` · 10 min

**Lernziele:**
- Nullstellen mit fsolve finden
- Lineare Gleichungssysteme lösen
- Minima/Maxima numerisch finden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Wie löst man `Ax = b` in NumPy? | wAE |
| 2 | 🔘 multiple-choice | Was ist das Matlab-Äquivalent zu `np.linalg.solve(A, b)`? | wAE |
| 3 | 🔘 multiple-choice | Wie muss die Gleichung `x**2 = 4` formuliert werden, damit `fsolve` sie lösen kann? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `fsolve(lambda x: x - 5, 0)` näherungsweise zurück? | ➕ |
| 5 | ✅ true-false | `scipy.optimize.fsolve` kann nur Gleichungen mit einer Unbekannten lösen. | ➕ |
| 6 | 🔗 matching | Ordne Python/SciPy-Funktionen ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe den Code zur Lösung von `x**3 - 8 = 0` mit fsolve in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch, wenn man `fsolve(f, x0)` mit `f = lambda x: x**2 - 4` und `x0 = 0` aufruft? | ➕ wAE |
| 9 | 🔢 number-input | Was ist die Lösung von `x - 7 = 0`? (Gib x an.) | ➕ |
| 10 | ✅ true-false | `scipy.optimize.fsolve` kann nur Funktionen mit einer Variable lösen. | 🎯 |

#### Numerische Integration & DGL  `py-2-4` · 10 min

**Lernziele:**
- Integrale numerisch berechnen
- Gewöhnliche DGL mit solve_ivp lösen
- Ergebnisse plotten und interpretieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche SciPy-Funktion berechnet ein bestimmtes Integral numerisch? | wAE |
| 2 | ✅ true-false | Um eine DGL 2. Ordnung mit solve_ivp zu lösen, muss man sie in ein System 1. Ordnung umschreiben. |  |
| 3 | 🔘 multiple-choice | Welche Form muss die Funktion `f` haben, damit `solve_ivp(f, [0, 10], [1])` funktioniert? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `quad(lambda x: 1, 0, 5)` näherungsweise als ersten Rückgabewert zurück? | ➕ |
| 5 | ✅ true-false | `scipy.integrate.quad(f, a, b)` gibt nur den Integralwert zurück, keine Fehlerabschätzung. | ➕ |
| 6 | 🔗 matching | Ordne SciPy-Integrationsfunktionen ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe den Code zur numerischen Integration von $int_0^1 x^2,dx$ in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch, wenn man `solve_ivp` aufruft als `solve_ivp(lambda t: -t, [0, 5], [1])`? | ➕ wAE |
| 9 | 🔢 number-input | Was ist $int_0^2 2,dx$? (Exakter Wert) | ➕ |
| 10 | 🔘 multiple-choice | Was ist das Matlab-Äquivalent zu `solve_ivp`? | 🎯 wAE |

### MB-Anwendungen (Unit 3)
*Praxisnahe Programmieraufgaben aus dem Maschinenbau-Studium.*

3 Lektionen · 30 Aufgaben

#### Festigkeitsberechnung  `py-3-1` · 10 min

**Lernziele:**
- Spannungsberechnung programmieren
- Querschnittswerte automatisiert berechnen
- Ergebnisse grafisch darstellen

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Ein Rechteckquerschnitt hat b = 40 mm und h = 80 mm. Wie groß ist das Widerstandsmoment $W = bh^2/6$ in $mm^3$? (Ganzzah |  |
| 2 | 🔘 multiple-choice | Welches NumPy-Feature macht Festigkeitsberechnungen besonders effizient? | wAE |
| 3 | 🔘 multiple-choice | Welche Python-Funktion berechnet die Normalspannung σ = F/A korrekt? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `1000 / 0.002` in Python zurück? ($sigma$ in Pa bei F=1000 N, A=0.002 $m^2$) | ➕ |
| 5 | ✅ true-false | In Python kann man eine Festigkeitsberechnung für mehrere Kraftwerte gleichzeitig durchführen, indem man ein `numpy.arra | ➕ |
| 6 | 🔗 matching | Ordne Festigkeitsvariablen ihrer Python-Entsprechung zu. | ➕ |
| 7 | 📋 sorting | Bringe die Berechnung der Spannung eines Rundstabs in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch, wenn man für $sigma = F/A$ die Fläche in $mm^2$ einsetzt und die Kraft in N? | ➕ wAE |
| 9 | 🔢 number-input | Berechne $sigma = F/A$ für $F = 2000$ N und $A = 0.004$ $m^2$. Gib $sigma$ in Pa an. | ➕ |
| 10 | ✅ true-false | In der Matlab-Version muss man `.^` statt `^` für elementweise Potenzierung verwenden. | 🎯 |

#### Datenauswertung & Messdaten  `py-3-2` · 10 min

**Lernziele:**
- CSV-Dateien einlesen
- Statistische Auswertung durchführen
- Messdaten fitten und interpolieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔘 multiple-choice | Welche Python-Bibliothek ist am besten für tabellarische Messdaten geeignet? | wAE |
| 2 | 📋 sorting | Bringe die Schritte der Messdatenauswertung in die richtige Reihenfolge: |  |
| 3 | 🔘 multiple-choice | Was gibt `np.std(data)` zurück? | ➕ wAE |
| 4 | 🔢 number-input | Was gibt `np.mean(np.array([2, 4, 6, 8]))` zurück? | ➕ |
| 5 | ✅ true-false | `np.polyfit(x, y, 1)` gibt für eine lineare Regression die Koeffizienten in der Reihenfolge [Achsenabschnitt, Steigung]  | ➕ |
| 6 | 🔗 matching | Ordne NumPy-Statistikfunktionen ihren Matlab-Äquivalenten zu. | ➕ |
| 7 | 📋 sorting | Bringe die Schritte einer linearen Regression in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was gibt `np.std([5, 5, 5, 5])` zurück? | ➕ wAE |
| 9 | 🔢 number-input | Was ist `np.mean(np.array([10, 20, 30]))`? | ➕ |
| 10 | ✅ true-false | `np.polyfit(x, y, 3)` fittet ein Polynom 3. Grades an die Daten. | 🎯 |

#### Simulation: Feder-Masse-Dämpfer  `py-3-3` · 10 min

**Lernziele:**
- Schwingungssystem modellieren
- Parametervariation durchführen
- Resonanz erkennen und visualisieren

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | Berechne die Eigenkreisfrequenz ω₀ für m = 2 kg und k = 200 N/m. |  |
| 2 | 🔘 multiple-choice | Was passiert bei Resonanz (Ω ≈ ω₀)? | wAE |
| 3 | 🔘 multiple-choice | Warum wird eine DGL 2. Ordnung wie das Feder-Masse-System in zwei DGL 1. Ordnung umgewandelt? | ➕ wAE |
| 4 | 🔢 number-input | Für m=1, d=0, k=1, x(0)=1, ẋ(0)=0: Was ist die Eigenfrequenz $omega_0 = sqrt{k/m}$? | ➕ |
| 5 | ✅ true-false | Für `solve_ivp` wird das Feder-Masse-Dämpfer-System als Funktion `f(t, y)` übergeben, wobei `y[0]` die Position und `y[1 | ➕ |
| 6 | 🔗 matching | Ordne Systemparameter des Feder-Masse-Dämpfers ihrem Python-Code zu. | ➕ |
| 7 | 📋 sorting | Bringe die Systemfunktion für einen ungedämpften Schwinger (d=0) in die richtige Reihenfolge. | ➕ |
| 8 | 🔘 multiple-choice | Was ist falsch an `def f(t, y): return -k * y` für ein Feder-Masse-System mit m=1, wenn y ein Vektor [x, v] ist? | ➕ wAE |
| 9 | 🔢 number-input | Für k=4, m=1: Was ist $omega_0 = sqrt{k/m}$? | ➕ |
| 10 | 🔢 number-input | Berechne den Dämpfungsgrad D für m = 1 kg, d = 4 Ns/m, k = 100 N/m. | 🎯 |

### 🏁 Prüfungsaufgaben (Unit 4)
*Prüfungsrelevante Programmieraufgaben auf TU-Wien-Niveau.*

1 Lektionen · 10 Aufgaben

#### Prüfung: Code-Verständnis & Fehlersuche  `py-4-1` · 10 min

**Lernziele:**
- Typische Prüfungsfragen zur Programmierung lösen
- Code lesen und Ausgaben vorhersagen
- Fehler in Code finden

| # | Typ | Titel / Frage | Flags |
|---|---|---|---|
| 1 | 🔢 number-input | [PRÜFUNG] Was gibt folgender Code aus? ```python a = [2, 4, 6, 8, 10] s = 0 for i in range(1, 4):     s += a[i] print(s) |  |
| 2 | 🔘 multiple-choice | [PRÜFUNG] Welcher Fehler ist in diesem Matlab-Code? ```matlab x = [1 2 3 4 5]; y = x^2; plot(x, y) ``` | wAE |
| 3 | 🔢 number-input | [PRÜFUNG] Was gibt `np.dot(np.array([1,2,3]), np.array([4,5,6]))` zurück? |  |
| 4 | 🔘 multiple-choice | [PRÜFUNG] Wie übersetzt man `A \ b` (Matlab) nach Python/NumPy? | wAE |
| 5 | 🔢 number-input | [PRÜFUNG] Was gibt folgender Code aus? ```python import numpy as np A = np.array([[1,2],[3,4]]) print(np.trace(A)) ``` |  |
| 6 | ✅ true-false | [PRÜFUNG] In Python beginnt die Indizierung bei 0, in Matlab bei 1. |  |
| 7 | 🔢 number-input | [PRÜFUNG] Was gibt folgender Code aus? ```python x = 10 for i in range(3):     x = x // 2 print(x) ``` |  |
| 8 | 🔘 multiple-choice | [PRÜFUNG] Welche Funktion löst in SciPy ein Anfangswertproblem (ODE)? | wAE |
| 9 | 🔢 number-input | [PRÜFUNG] Was gibt `len([x for x in range(10) if x % 3 == 0])` zurück? |  |
| 10 | 🔘 multiple-choice | [PRÜFUNG] Was ist der Unterschied zwischen `*` und `@` bei NumPy-Arrays? | 🎯 wAE |

---

*Generiert mit `scripts/generate-content-overview.js` am 2026-04-21. Für Fragen zum Inhalt: siehe Guidelines in `~/.claude/projects/.../memory/guidelines_exercises.md`.*
