# Lernziele — Maschinenbau TU Wien

> **Automatisch generiert** am 2026-04-22 via `npm run lernziele`.
> Nicht manuell bearbeiten — bei Content-Änderungen neu generieren.

Die Datei bündelt alle Lernziele der App nach Studienphase. Jedes Topic, jede Unit und jede Lesson listet, was danach beherrscht werden soll. Die Sub-Goals markieren kleinteilige Prüfungs-Mikrothemen (HOCH/MITTEL/NIEDRIG).

## Kennzahlen

| Metrik | Wert |
|---|---|
| Topics | 22 |
| Topics mit expliziten `topicGoals` | 22 / 22 (100%) |
| Lessons insgesamt | 226 |
| Lessons mit `subGoals` | 226 / 226 (100%) |
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

**Kleine Themen (Sub-Goals):**
- [HOCH] Grundformel: $W = G \cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$
- [HOCH] Wachstumsfaktor: $+p\% \to \times(1 + p/100)$, $-p\% \to \times(1 - p/100)$
- [HOCH] Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\%$ dann $-10\% \neq 0$)
- [HOCH] Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$
- [MITTEL] Prozentpunkt vs. Prozent: $15\%$ auf $10\%$ erhöht ist $11{,}5\%$, nicht $25\%$

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 7 mit 4-Block-Erklärung

##### Termumformung & Gleichungen `alg-0-4` · 15 min

**Nach dieser Lesson kannst du:**
- Gleichartige Terme zusammenfassen
- Äquivalenzumformungen sicher anwenden
- Formeln nach einer Variable umstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren
- [HOCH] Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)
- [HOCH] Binomische Formeln: $(a\pm b)^2 = a^2 \pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$
- [HOCH] Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen
- [MITTEL] Beim Quadrieren Probe nötig (Scheinlösungen möglich)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Definition: $\log_b x = y \iff b^y = x$ (für $b>0, b\neq 1, x>0$)
- [HOCH] Produktregel: $\ln(ab) = \ln a + \ln b$
- [HOCH] Quotientenregel: $\ln(a/b) = \ln a - \ln b$
- [HOCH] Potenzregel: $\ln(a^n) = n \ln a$
- [HOCH] Basiswechsel: $\log_b x = \ln x / \ln b$
- [HOCH] Typische Falle: $\ln(a+b) \neq \ln a + \ln b$ (kein Logarithmusgesetz für Summen)
- [HOCH] Exp-Log-Umkehrung: $e^{\ln x} = x$ (für $x > 0$), $\ln(e^x) = x$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Nullstellenraten: Teiler des absoluten Glieds testen ($\pm 1, \pm 2, \ldots$)
- [HOCH] Polynomdivision: Nach Nullstelle $x_0$ durch $(x - x_0)$ teilen, Grad sinkt um 1
- [HOCH] Rest der Polynomdivision bei Nullstelle muss 0 sein (Probe!)
- [MITTEL] Horner-Schema: kompakte Tabelle, doppelt nutzbar (Polynomwert + Division)
- [HOCH] Linearfaktor-Zerlegung $P(x) = (x-x_1)(x-x_2)\cdots(x-x_n)$ falls vollständig reell zerlegbar
- [NIEDRIG] Bei $x^3 + ax + b$ ohne rationale Nullstelle: Cardano oder numerisch

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Ungleichungen `alg-2-4` · 15 min

**Nach dieser Lesson kannst du:**
- Lineare Ungleichungen lösen
- Betragsungleichungen auflösen
- Quadratische Ungleichungen mit Vorzeichentabelle lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Multiplikation/Division mit negativer Zahl: Ungleichheitszeichen umdrehen!
- [HOCH] Betragsungleichung $|x - a| < b$: $a - b < x < a + b$
- [HOCH] Betragsungleichung $|x - a| > b$: $x < a - b$ ODER $x > a + b$
- [HOCH] Quadratische Ungleichung: Nullstellen finden, Vorzeichentabelle aufstellen, Bereiche ablesen
- [MITTEL] Lösungsmenge im Intervall-Notation: $(-\infty, a) \cup (b, \infty)$ statt $x < a$ oder $x > b$
- [MITTEL] Bruchungleichungen: Polstellen des Nenners separat betrachten, nicht quer-multiplizieren

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Potenzfunktion $x^n$: gerade $n$ → Parabel, ungerade $n$ → S-Form; Def.bereich $\mathbb{R}$
- [HOCH] Exponentialfunktion $a^x$ ($a>0, a\neq 1$): Wertebereich $(0,\infty)$, streng monoton
- [HOCH] Logarithmusfunktion $\log_a x$: Def.bereich $(0,\infty)$, Umkehrung von $a^x$
- [HOCH] Wachstumshierarchie: $\ln x \ll x^n \ll a^x$ für $x \to \infty$ (mit $a > 1$)
- [MITTEL] Eulersche Zahl $e \approx 2{,}718$: Basis des natürlichen Logarithmus
- [MITTEL] Wurzelfunktion $\sqrt{x} = x^{1/2}$: Def.bereich $[0,\infty)$

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 1 mit 4-Block-Erklärung

##### Funktionsoperationen `alg-3-3` · 12 min

**Nach dieser Lesson kannst du:**
- Verschiebung, Streckung, Spiegelung anwenden
- Transformationsregeln sicher beherrschen

**Kleine Themen (Sub-Goals):**
- [HOCH] Horizontale Verschiebung: $f(x - a)$ = $a$ nach rechts (Vorzeichen kontraintuitiv!)
- [HOCH] Vertikale Verschiebung: $f(x) + b$ = $b$ nach oben
- [HOCH] Streckung vertikal: $c \cdot f(x)$ (für $c > 1$), horizontal: $f(x/c)$
- [HOCH] Spiegelung an $x$-Achse: $-f(x)$, an $y$-Achse: $f(-x)$
- [MITTEL] Merkregel: Änderungen im Argument wirken horizontal und **umgekehrt**
- [MITTEL] Funktionskomposition: $(f \circ g)(x) = f(g(x))$ (Reihenfolge beachten)

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

##### Umkehrfunktionen `alg-3-4` · 12 min

**Nach dieser Lesson kannst du:**
- Umkehrfunktion berechnen
- Bedingung für Existenz kennen
- Graphische Interpretation verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Existenz: $f$ muss **bijektiv** sein (injektiv UND surjektiv)
- [HOCH] Berechnung: $y = f(x)$ nach $x$ auflösen, dann $x \leftrightarrow y$ tauschen
- [HOCH] Graphisch: Spiegelung an der Winkelhalbierenden $y = x$
- [HOCH] Def.bereich von $f^{-1}$ = Wertebereich von $f$ (und umgekehrt)
- [MITTEL] Eigenschaft: $f^{-1}(f(x)) = x$ und $f(f^{-1}(y)) = y$
- [MITTEL] Für nicht-injektives $f$ (z.B. $x^2$) Def.bereich einschränken: $[0,\infty)$ macht Umkehrung möglich

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Diskriminante: $D > 0$ zwei, $D = 0$ eine, $D < 0$ keine reelle Lösung
- [HOCH] Exponentialgleichung $a^x = b$: durch Logarithmieren $x = \log_a b = \ln b / \ln a$
- [HOCH] Wurzelgleichung: beide Seiten quadrieren + Probe (Scheinlösungen möglich)
- [HOCH] Argumente von $\ln$, $\log$, $e^{(\cdot)}$ müssen dimensionslos sein
- [MITTEL] Bei Prüfungsaufgaben Rechenweg sichtbar: jede Umformung nummerieren/benennen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Funktionen & Anwendungen `alg-4-2` · 25 min

**Nach dieser Lesson kannst du:**
- Extrema und Scheitelpunkte von Funktionen bestimmen
- Umkehrfunktionen berechnen und interpretieren
- Funktionen auf technische Probleme anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Scheitelpunkt Parabel $ax^2+bx+c$: $x_S = -b/(2a)$, $y_S = f(x_S)$
- [HOCH] Scheitelform: $f(x) = a(x - x_S)^2 + y_S$ (quadratische Ergänzung)
- [HOCH] Umkehrfunktion: $y = f(x)$ → nach $x$ auflösen → $x \leftrightarrow y$ tauschen
- [MITTEL] Anwendung Wärmeausdehnung: $l(T) = l_0(1 + \alpha T)$
- [HOCH] Anwendung Abklingen: $p(t) = p_0 e^{-kt}$, Halbwertszeit $t_{1/2} = \ln 2/k$
- [MITTEL] Anwendung Umsatz: $U(x) = x \cdot p(x)$, Maximum bei $U'(x) = 0$

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 2 mit 4-Block-Erklärung

##### Prüfung: Gleichungs­systeme & technische Anwendungen `alg-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungs­systeme im Technik-Kontext lösen
- Wurzel-, Betrags- und Exponential­gleichungen mit Probe handhaben
- Logarithmische Skalen (pH, dB, Bel) verstehen und rechnen
- Typische Prüfungsfallen (Scheinlösungen, Definitions­bereiche) erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] $2\times 2$-LGS: Einsetzungs-, Additions-, Gleichsetzungsmethode — alle äquivalent
- [HOCH] Betrag auflösen: Fallunterscheidung $|x| = x$ für $x \geq 0$, $|x| = -x$ für $x < 0$
- [HOCH] pH-Wert: $\text{pH} = -\log_{10}[H^+]$ (logarithmische Skala der H⁺-Konzentration)
- [HOCH] dB-Skala: $L = 10 \log_{10}(P/P_0)$ (Leistung) bzw. $= 20 \log_{10}(U/U_0)$ (Amplitude)
- [HOCH] LGS-Lösungsfälle: eindeutig (det $\neq 0$), keine Lösung (Widerspruch), unendlich (parallel)
- [MITTEL] Technik-Anwendungen: Kirchhoffsche Maschenregeln, Biegespannung, Mischrechnung

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Einheitskreis = Kreis um Ursprung mit $r = 1$, Gleichung $x^2 + y^2 = 1$
- [HOCH] Punkt auf Kreis $P = (\cos\alpha, \sin\alpha)$ — Winkel von positiver $x$-Achse gegen Uhrzeigersinn
- [HOCH] Quadrantenpunkte: $0° \to (1,0)$, $90° \to (0,1)$, $180° \to (-1,0)$, $270° \to (0,-1)$
- [NIEDRIG] Durchmesser $d = 2$ nicht mit Radius $r = 1$ verwechseln

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### sin und cos als Koordinaten `trig-2-2` · 10 min

**Nach dieser Lesson kannst du:**
- sin und cos als x/y-Koordinaten am Einheitskreis verstehen
- Punkte ↔ Winkel umsetzen

**Kleine Themen (Sub-Goals):**
- [HOCH] $\cos\alpha$ = $x$-Koordinate (horizontal), $\sin\alpha$ = $y$-Koordinate (vertikal)
- [HOCH] Definition gilt für **alle** reellen Winkel, nicht nur $0°$–$90°$
- [HOCH] Aus Koordinaten $(x,y)$ auf Kreis den Winkel über Vorzeichen + Referenzwinkel ermitteln
- [NIEDRIG] Eselsbrücke: **c**osinus → **x**-Achse, **s**inus → $y$-Achse (vertikal)
- [MITTEL] Werte liegen stets im Intervall $[-1, +1]$, weil $r = 1$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

##### Symmetrien und Periodizität `trig-2-3` · 12 min

**Nach dieser Lesson kannst du:**
- Periodizität von sin und cos verstehen
- Symmetrieeigenschaften anwenden
- Reduktionsformeln aus dem Einheitskreis herleiten

**Kleine Themen (Sub-Goals):**
- [HOCH] Periodizität: $\sin(\alpha + 360°) = \sin\alpha$, $\cos(\alpha + 360°) = \cos\alpha$ (Periode $2\pi$)
- [HOCH] $\sin$ ungerade: $\sin(-\alpha) = -\sin\alpha$ — Spiegelung an $x$-Achse kippt $y$
- [HOCH] $\cos$ gerade: $\cos(-\alpha) = \cos\alpha$ — $x$-Koordinate unverändert
- [MITTEL] Supplementformel: $\sin(180°-\alpha) = \sin\alpha$, $\cos(180°-\alpha) = -\cos\alpha$
- [MITTEL] Komplementformel: $\sin(90°-\alpha) = \cos\alpha$, $\cos(90°-\alpha) = \sin\alpha$
- [MITTEL] Punktspiegelung: $\sin(180°+\alpha) = -\sin\alpha$, $\cos(180°+\alpha) = -\cos\alpha$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 1 mit 4-Block-Erklärung

##### Tangens im Einheitskreis `trig-2-4` · 10 min

**Nach dieser Lesson kannst du:**
- Tangens als sin/cos verstehen
- Polstellen von tan erkennen
- Vorzeichen von tan in Quadranten bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Definition: $\tan\alpha = \sin\alpha/\cos\alpha = y/x$ — Steigung der Ursprungsgerade
- [HOCH] Polstellen bei $\alpha = 90° + k\cdot 180°$ (überall dort $\cos\alpha = 0$)
- [HOCH] Periode von $\tan$ ist $180°$, nicht $360°$ (Steigung wiederholt sich nach halber Drehung)
- [HOCH] ASTC-Vorzeichen: $\tan > 0$ in 1. und 3. Quadrant, $\tan < 0$ in 2. und 4.
- [MITTEL] $\tan$ ist ungerade: $\tan(-\alpha) = -\tan\alpha$
- [MITTEL] Wertebereich: $(-\infty, +\infty)$, keine Beschränkung wie bei $\sin$/$\cos$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Alle vier Quadranten `trig-2-5` · 15 min

**Nach dieser Lesson kannst du:**
- Winkel in allen Quadranten berechnen
- Reduktionsformeln anwenden
- Referenzwinkel bilden

**Kleine Themen (Sub-Goals):**
- [HOCH] Quadrantengrenzen: Q1 $0°$–$90°$, Q2 $90°$–$180°$, Q3 $180°$–$270°$, Q4 $270°$–$360°$
- [HOCH] ASTC-Regel: **A**lle (Q1), **S**inus (Q2), **T**angens (Q3), **C**osinus (Q4) positiv
- [HOCH] Referenzwinkel = Abstand zur nächsten $x$-Achsen-Hälfte ($0°$ oder $180°$)
- [HOCH] 4-Schritt-Verfahren: Quadrant → Referenzwinkel → Grundwert (Q1) → Vorzeichen aus ASTC
- [HOCH] Standardwerte $\sin$/$\cos$ für $0°/30°/45°/60°/90°$ auswendig, Rest per Reduktion
- [MITTEL] Winkel $> 360°$ oder $< 0°$ per $\alpha \bmod 360°$ in Hauptbereich bringen

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

**Kleine Themen (Sub-Goals):**
- [HOCH] $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ (Kreuzform, Vorzeichen folgt Winkel)
- [HOCH] $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$ (umgekehrtes Vorzeichen!)
- [MITTEL] $\tan(\alpha \pm \beta) = (\tan\alpha \pm \tan\beta)/(1 \mp \tan\alpha\tan\beta)$
- [HOCH] Linearitäts-Falle: $\sin(\alpha+\beta) \neq \sin\alpha + \sin\beta$ (nie addieren!)
- [HOCH] Anwendung: exakte Werte wie $\sin 15°$, $\cos 75°$ aus Summen/Differenzen bekannter Grundwinkel

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Doppelwinkelformeln und Pythagoreischer Satz `trig-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Doppelwinkelformeln anwenden
- sin²+cos²=1 verstehen und nutzen

**Kleine Themen (Sub-Goals):**
- [HOCH] $\sin(2\alpha) = 2\sin\alpha\cos\alpha$ (aus Additionstheorem mit $\beta = \alpha$)
- [HOCH] $\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$ (drei Formen)
- [HOCH] Pythagoras-Identität $\sin^2\alpha + \cos^2\alpha = 1$ als Kreisgleichung am Einheitskreis
- [HOCH] Folgerungen: $\sin^2\alpha = 1 - \cos^2\alpha$, $\cos^2\alpha = 1 - \sin^2\alpha$ (zum Umwandeln)
- [MITTEL] Halbwinkel-Formeln: $\sin^2(\alpha/2) = (1-\cos\alpha)/2$, $\cos^2(\alpha/2) = (1+\cos\alpha)/2$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `trig-3-3` · 15 min

**Nach dieser Lesson kannst du:**
- Kräfte in Komponenten zerlegen
- Schwingungen verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Kraftzerlegung: $F_x = F\cos\alpha$, $F_y = F\sin\alpha$ (Winkel zur $x$-Achse)
- [HOCH] Schwingung $x(t) = A\sin(\omega t + \varphi)$: $A$ Amplitude, $\omega$ Kreisfrequenz, $\varphi$ Phasenwinkel
- [HOCH] Zusammenhang $\omega = 2\pi f = 2\pi/T$ (Kreisfrequenz, Frequenz, Periode)
- [MITTEL] Pythagoras-Check: $F_x^2 + F_y^2 = F^2$ (Komponenten müssen zur Gesamtkraft passen)
- [HOCH] Schiefe Ebene: Hangabtriebskraft $F_H = m g \sin\alpha$, Normalkraft $F_N = m g \cos\alpha$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### Inverse Funktionen `trig-3-4` · 12 min

**Nach dieser Lesson kannst du:**
- arcsin, arccos, arctan kennen und anwenden
- Definitionsbereiche verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] $\arcsin: [-1,1] \to [-90°, 90°]$ (rechte Hälfte, monoton wachsend)
- [HOCH] $\arccos: [-1,1] \to [0°, 180°]$ (obere Hälfte, monoton fallend)
- [HOCH] $\arctan: \mathbb{R} \to (-90°, 90°)$ (Pole ausgeschlossen)
- [HOCH] Umkehrfunktion liefert nur Hauptwert — weitere Lösungen via Periodizität/Symmetrie ergänzen
- [HOCH] Taschenrechner-Modus DEG/RAD unbedingt beachten (häufigste Fehlerquelle)
- [MITTEL] Notation $\sin^{-1}$ für $\arcsin$ nicht mit $1/\sin$ verwechseln

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 2 mit 4-Block-Erklärung

##### Sinussatz & Cosinussatz `trig-3-5` · 14 min

**Nach dieser Lesson kannst du:**
- Sinussatz und Cosinussatz als Verallgemeinerung von SOH-CAH-TOA verstehen
- WWS/SSW-Konfigurationen mit Sinussatz lösen
- SWS/SSS-Konfigurationen mit Cosinussatz lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Sinussatz: $a/\sin\alpha = b/\sin\beta = c/\sin\gamma = 2R$ (Umkreisradius)
- [HOCH] Cosinussatz: $a^2 = b^2 + c^2 - 2bc\cos\alpha$ (verallgemeinerter Pythagoras)
- [HOCH] Methodenwahl: SWS/SSS → Cosinussatz; WWS/SWW/SSW → Sinussatz
- [MITTEL] Pythagoras als Spezialfall: $\alpha = 90° \Rightarrow \cos\alpha = 0 \Rightarrow a^2 = b^2 + c^2$
- [HOCH] Seite und Gegenwinkel gehören zusammen ($a \leftrightarrow \alpha$ usw.)
- [MITTEL] SSW-Mehrdeutigkeit: zwei mögliche Dreiecke bei $\sin\beta$ spitz, Höhenvergleich erforderlich

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Pythagoras $\sin^2+\cos^2=1$ und Doppelwinkel zur Termvereinfachung sicher einsetzen
- [HOCH] Trigonometrische Gleichung → Grundfunktion + Lösungsmenge im Intervall angeben
- [HOCH] Substitution $u = \sin x$ oder $u = \cos x$ bei quadratischen Gleichungen
- [MITTEL] Faktorisieren statt durch $\cos x$ teilen (Nullstellen nicht verlieren)
- [MITTEL] Identitätsnachweis: linke Seite umformen bis rechte Seite entsteht (nicht beide gleichzeitig manipulieren)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Technische Anwendungen `trig-4-2` · 20 min

**Nach dieser Lesson kannst du:**
- Prüfungsaufgaben zu Kräften und Schwingungen lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Kräftezerlegung in Prüfungsaufgabe: Skizze, Winkelbezug klären, $\sin$/$\cos$ richtig zuordnen
- [HOCH] Cosinussatz bei SWS (Seite-Winkel-Seite) direkt einsetzen — Standard-Maschinenbauaufgabe
- [HOCH] Schwingungsgrößen $A, \omega, T, f, \varphi$ aus gegebenem $x(t)$ ablesen und umrechnen
- [HOCH] Einheitenkonsistenz: $\omega t$ in Radiant, Phasenwinkel $\varphi$ ebenfalls Radiant
- [MITTEL] Plausibilitätscheck: Komponenten $|F_x|, |F_y| \leq |F|$, Winkelbereich passt zum Quadranten

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Einheitskreis & Gleichungssysteme `trig-4-3` · 20 min

**Nach dieser Lesson kannst du:**
- Lösungsmengen bestimmen
- Komplexe Umformungen durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] $\sin x = a$ hat in $[0, 2\pi)$ zwei Lösungen: $\arcsin a$ und $\pi - \arcsin a$
- [HOCH] $\cos x = a$ hat in $[0, 2\pi)$ zwei Lösungen: $\arccos a$ und $2\pi - \arccos a$
- [HOCH] $\tan x = a$ hat Periode $\pi$: $x_k = \arctan a + k\pi$, $k \in \mathbb{Z}$
- [HOCH] Gesamte Lösungsmenge: Hauptwerte + $2\pi k$ (bzw. $\pi k$ bei $\tan$), Intervall berücksichtigen
- [HOCH] Beim Dividieren durch $\cos x$: Fall $\cos x = 0$ separat prüfen, sonst Lösungen verloren
- [MITTEL] Grafische Kontrolle: Schnittpunkte $y = f(x)$ und $y = a$ am Einheitskreis zählen

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Kraftkomponenten: $F_x = F \cos\alpha$, $F_y = F \sin\alpha$ (Winkel zur $x$-Achse)
- [HOCH] Resultierende: $\vec R = \sum \vec F_i$ komponentenweise addieren
- [HOCH] Gleichgewicht: $\sum F_x = 0$ UND $\sum F_y = 0$ UND $\sum F_z = 0$
- [HOCH] Einheitsvektor: $\hat e = \vec a / |\vec a|$ (dimensionslos, Länge 1)
- [HOCH] Betrag und Richtung: $|\vec R| = \sqrt{R_x^2 + R_y^2}$, $\tan\alpha = R_y/R_x$
- [MITTEL] Plausibilitätscheck: Vorzeichen der Komponenten passt zur Skizze?

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Parameterform: $\vec r = \vec p + t \vec v$ mit Stützpunkt $\vec p$ und Richtung $\vec v$
- [HOCH] Punkt-Test: $(x,y,z) = \vec p + t \vec v$ auf **dasselbe** $t$ in allen drei Komponenten prüfen
- [HOCH] Lagetest zweier Geraden: parallel? identisch? schneidend? windschief?
- [HOCH] Parallel-Test: $\vec v_1 \times \vec v_2 = \vec 0$ oder $\vec v_2 = k \vec v_1$
- [HOCH] Schnittpunkt via Gleichsetzen: $\vec p_1 + t \vec v_1 = \vec p_2 + s \vec v_2$ (LGS 3 Gl., 2 Unbek.)
- [MITTEL] Windschief gibt es nur in 3D — in 2D sind nicht-parallele Geraden immer schneidend

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Ebenengleichung `vek-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Parameter-, Normal- und Koordinatenform einer Ebene aufstellen
- Zwischen den Darstellungsformen umrechnen
- Normalvektor aus zwei Richtungsvektoren bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Parameterform: $\vec r = \vec p + s \vec u + t \vec v$ (Stützpunkt + zwei Richtungen)
- [HOCH] Normalenform: $\vec n \cdot (\vec r - \vec p) = 0$ mit Normalvektor $\vec n \perp$ Ebene
- [HOCH] Koordinatenform: $a x + b y + c z = d_0$ mit $\vec n = (a, b, c)$ und $d_0 = \vec n \cdot \vec p$
- [HOCH] Normalvektor aus Parameterform: $\vec n = \vec u \times \vec v$
- [HOCH] Ebene aus drei Punkten: $\vec u = P_2 - P_1$, $\vec v = P_3 - P_1$, dann $\vec n$ kreuzen
- [MITTEL] Hessesche Normalform: $\vec n_0 \cdot (\vec r - \vec p) = 0$ mit normiertem $\vec n_0$ (Länge 1)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Abstände und Schnitte `vek-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Abstand Punkt–Ebene berechnen
- Abstand Punkt–Gerade berechnen
- Schnittpunkt Gerade–Ebene bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Abstand Punkt–Ebene: $d = |a q_x + b q_y + c q_z - d_0|/\sqrt{a^2+b^2+c^2}$
- [HOCH] Abstand Punkt–Gerade: $d = |\vec v \times (\vec Q - \vec p)|/|\vec v|$
- [HOCH] Abstand windschiefer Geraden: $d = |(\vec p_2 - \vec p_1) \cdot (\vec v_1 \times \vec v_2)|/|\vec v_1 \times \vec v_2|$
- [HOCH] Schnitt Gerade–Ebene: $\vec r(t)$ in Ebenengleichung einsetzen, $t$ auflösen
- [HOCH] Schnittfälle: eindeutig (1 Punkt), $0 = 0$ (Gerade in Ebene), Widerspruch (parallel)
- [MITTEL] Merkhilfe: Ebene → Skalarprodukt mit $\vec n$; Gerade → Kreuzprodukt mit $\vec v$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 3 mit 4-Block-Erklärung

##### Prüfungsaufgaben Analytische Geometrie `vek-2-4` · 25 min

**Nach dieser Lesson kannst du:**
- Lagebeziehungen sicher bestimmen
- Abstands- und Schnittaufgaben lösen
- Prüfungsniveau erreichen

**Kleine Themen (Sub-Goals):**
- [HOCH] Lotfußpunkt auf Ebene: Hilfsgerade durch $P$ in Richtung $\vec n$, Schnitt mit Ebene
- [HOCH] Schnittgerade zweier Ebenen: Richtung $\vec v = \vec n_1 \times \vec n_2$, Punkt durch LGS-Lösung
- [HOCH] Gerade ⊥ Ebene $\iff \vec v_g \parallel \vec n_E$; Gerade $\parallel$ Ebene $\iff \vec v_g \perp \vec n_E$
- [HOCH] Abstand paralleler Ebenen: $d = |d_1 - d_2|/|\vec n|$ bei **gleichem** $\vec n$
- [MITTEL] Spiegelpunkt $P'$ an Ebene: $P' = 2F - P$ mit Lotfußpunkt $F$
- [MITTEL] Winkel zwischen Gerade und Ebene: $\sin\alpha = |\vec v \cdot \vec n|/(|\vec v||\vec n|)$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Skalarprodukt liefert **Zahl**, Kreuzprodukt liefert **Vektor** (nur in 3D)
- [HOCH] Winkel: $\cos\varphi = (\vec a \cdot \vec b)/(|\vec a||\vec b|)$
- [HOCH] Orthogonalitätstest: $\vec a \cdot \vec b = 0$; Parallelitätstest: $\vec a \times \vec b = \vec 0$
- [HOCH] Skalarprodukt kommutativ: $\vec a \cdot \vec b = \vec b \cdot \vec a$
- [HOCH] Kreuzprodukt **anti**kommutativ: $\vec a \times \vec b = -(\vec b \times \vec a)$
- [HOCH] Arbeit $W = \vec F \cdot \vec s$ (Skalar), Drehmoment $\vec M = \vec r \times \vec F$ (Vektor)

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 2 mit 4-Block-Erklärung

##### Flächen- und Volumenberechnung `vek-3-2` · 15 min

**Nach dieser Lesson kannst du:**
- Parallelogrammfläche mit Kreuzprodukt berechnen
- Dreiecksfläche als halbes Kreuzprodukt
- Spatprodukt für Volumen anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Parallelogrammfläche: $A = |\vec a \times \vec b|$
- [HOCH] Dreiecksfläche: $A = \tfrac{1}{2} |\vec a \times \vec b|$
- [HOCH] Spatvolumen: $V = |\vec a \cdot (\vec b \times \vec c)|$ (Spatprodukt)
- [HOCH] Tetraedervolumen: $V = \tfrac{1}{6} |\vec a \cdot (\vec b \times \vec c)|$
- [HOCH] Spatprodukt $= 0 \iff$ Vektoren komplanar (kein Volumen)
- [MITTEL] Vorzeichen ohne Betrag: $>0$ Rechtssystem, $<0$ Linkssystem

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `vek-3-3` · 18 min

**Nach dieser Lesson kannst du:**
- Drehmoment als Kreuzprodukt berechnen
- Kräftezerlegung an der schiefen Ebene
- Vektoren in technischen Aufgaben anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Schiefe Ebene: Hangabtrieb $F_H = G \sin\alpha$, Normalkraft $F_N = G \cos\alpha$
- [HOCH] Drehmoment $\vec M = \vec r \times \vec F$: Betrag $|M| = r F \sin\alpha$, max bei $\alpha = 90°$
- [HOCH] Drehmoment-Richtung via Rechte-Hand-Regel (Daumen = $\vec r$, Zeige = $\vec F$, Mittel = $\vec M$)
- [HOCH] Einheiten: Kraft N, Hebel m, Moment Nm, Arbeit Nm = J
- [HOCH] Gleichgewicht: $\sum \vec F = 0$ UND $\sum \vec M = 0$ (alle Momentensummen um beliebigen Punkt)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Notwendige Bedingung für Extremum: $f'(x_0) = 0$ (waagrechte Tangente)
- [HOCH] Hinreichend: $f''(x_0) > 0 \Rightarrow$ Min, $f''(x_0) < 0 \Rightarrow$ Max
- [HOCH] Bei $f''(x_0) = 0$: Vorzeichenwechsel von $f'$ prüfen oder höhere Ableitungen
- [HOCH] Wendepunkt: $f''(x_0) = 0$ mit Vorzeichenwechsel (oder $f'''(x_0) \neq 0$)
- [MITTEL] Randextrema bei beschränktem Intervall $[a, b]$ nicht vergessen
- [MITTEL] Sattelpunkt = Wendepunkt mit waagrechter Tangente ($f' = 0$ UND $f'' = 0$)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Formel: $(f \cdot g)' = f' g + f g'$ (zwei Summanden, kreuzweise)
- [HOCH] Klassischer Fehler: $(fg)' \neq f' g'$ (nicht faktorweise ableiten!)
- [NIEDRIG] Geometrische Motivation: Flächenänderung eines Rechtecks mit variablen Seiten
- [MITTEL] Dreifaches Produkt: $(fgh)' = f'gh + fg'h + fgh'$ (analog, drei Summanden)
- [MITTEL] Nach dem Ableiten ausklammern und vereinfachen — Prüfer erwartet gekürzte Form

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 6 mit 4-Block-Erklärung

##### Quotientenregel `abl-2-2` · 15 min

**Nach dieser Lesson kannst du:**
- Quotientenregel anwenden
- Brüche von Funktionen ableiten
- Verbindung zur Produktregel verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Formel: $(f/g)' = (f' g - f g')/g^2$ — Minuszeichen, Reihenfolge $f' g$ zuerst
- [MITTEL] NAZ-Eselsbrücke: "**N**enner·**A**bl. **Z**ähler minus **Z**ähler·**A**bl. **N**enner, durch $N^2$"
- [HOCH] Nenner niemals ableiten ohne Vorzeichen: $f' g - f g'$ (NICHT $f g' - f' g$)
- [MITTEL] Alternative: $f/g = f \cdot g^{-1}$ mit Produkt- und Kettenregel ableiten
- [MITTEL] Definitionsbereich: $g(x) \neq 0$ (Polstellen gesondert betrachten)

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 5 mit 4-Block-Erklärung

##### Kettenregel — Schritt für Schritt `abl-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Kettenregel sicher anwenden
- Innere und äußere Funktion identifizieren
- Mehrfach verkettete Funktionen ableiten

**Kleine Themen (Sub-Goals):**
- [HOCH] Formel: $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ — äußere mal innere Ableitung
- [HOCH] Innere Funktion in äußerer Ableitung unverändert eingesetzt lassen
- [HOCH] Mehrfachverkettung: Ableitungen von außen nach innen multiplizieren
- [HOCH] Häufigste Anwendung: $(ax+b)^n$, $e^{ax}$, $\sin(ax)$ — innere Ableitung $= a$
- [HOCH] Häufiger Fehler: innere Ableitung vergessen (z.B. $(\sin 2x)' = 2\cos 2x$, nicht $\cos 2x$)

*Aufgaben-Coverage:* 10 gesamt · 7 manuell / 3 auto-supp · 7 mit 4-Block-Erklärung

##### Gemischte Regeln `abl-2-4` · 18 min

**Nach dieser Lesson kannst du:**
- Alle Ableitungsregeln kombiniert anwenden
- Komplexere Funktionen sicher ableiten
- Struktur erkennen und richtige Regel zuerst wählen

**Kleine Themen (Sub-Goals):**
- [HOCH] Äußerste Struktur identifizieren: Produkt, Quotient oder Verkettung?
- [HOCH] Hierarchisch ableiten: erst äußerste Regel, dann innere Teile mit passender Regel
- [MITTEL] Logarithmisches Ableiten bei $f(x)^{g(x)}$: $\ln y = g \ln f$, dann implizit differenzieren
- [HOCH] Umformen vor dem Ableiten: $\sqrt[n]{x}$ → $x^{1/n}$, $1/x^n$ → $x^{-n}$
- [MITTEL] Ergebnisse faktorisieren — Prüfer erwarten vereinfachte Antwort

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Monotonie-Kriterium: $f'(x) > 0$ → streng wachsend, $f'(x) < 0$ → streng fallend
- [HOCH] Notwendige Bedingung für lokales Extremum: $f'(x_0) = 0$
- [HOCH] Hinreichend via $f''$: $f''(x_0) > 0$ → Min, $f''(x_0) < 0$ → Max
- [HOCH] Hinreichend via Vorzeichenwechsel: $f'$ wechselt $+ \to -$ → Max, $- \to +$ → Min
- [MITTEL] Kein Vorzeichenwechsel von $f'$ bei $f'(x_0) = 0$ → Sattelpunkt (z.B. $f(x) = x^3$ bei $0$)

*Aufgaben-Coverage:* 10 gesamt · 6 manuell / 4 auto-supp · 0 mit 4-Block-Erklärung

##### Krümmung und Wendepunkte `abl-3-2` · 15 min

**Nach dieser Lesson kannst du:**
- Krümmungsverhalten mit f'' analysieren
- Wendepunkte berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Krümmung via $f''$: $f'' > 0$ → linksgekrümmt ($\cup$), $f'' < 0$ → rechtsgekrümmt ($\cap$)
- [HOCH] Notwendige Bedingung für Wendepunkt: $f''(x_0) = 0$
- [HOCH] Hinreichend: $f'''(x_0) \neq 0$ ODER $f''$ wechselt bei $x_0$ das Vorzeichen
- [MITTEL] Sattelpunkt = Wendepunkt mit $f'(x_0) = 0$ (waagrechte Tangente), z.B. $f(x) = x^3$
- [HOCH] Wendepunkt-Koordinaten: $(x_0, f(x_0))$ — y-Wert nicht vergessen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Vollständige Kurvendiskussion `abl-3-3` · 22 min

**Nach dieser Lesson kannst du:**
- Alle Schritte der Kurvendiskussion durchführen
- Systematisch vorgehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Reihenfolge: $D_f$ → Symmetrie → Nullstellen → $f', f''$ → Extrema → WP → $x \to \pm\infty$ → Graph
- [MITTEL] Symmetrie: $f(-x) = f(x)$ gerade (y-Achse), $f(-x) = -f(x)$ ungerade (Ursprung)
- [HOCH] Verhalten im Unendlichen: bei Polynom führender Term, bei Bruch Grad-Vergleich
- [HOCH] Polstellen & Asymptoten bei gebrochen-rationalen Funktionen separat untersuchen
- [MITTEL] Abschluss-Skizze: Extrema, WP, Achsenschnittpunkte mit Koordinaten beschriften

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfungsaufgaben Kurvendiskussion `abl-3-4` · 25 min

**Nach dieser Lesson kannst du:**
- Prüfungsniveau-Aufgaben lösen
- Alle Methoden sicher kombinieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Typische Klausurfunktionen: Polynom, Bruch $p(x)/q(x)$, $x \cdot e^{-x}$, $e^{-x^2}$
- [MITTEL] Plausibilitätsprüfung: Polynom Grad $n$ hat höchstens $n-1$ Extrema
- [HOCH] Globale Extrema auf Intervall $[a,b]$: innere Kandidaten + Randpunkte $f(a), f(b)$ vergleichen
- [HOCH] Anwendungsaufgabe (Optimierung): Zielfunktion aufstellen, Nebenbedingung einsetzen, dann ableiten
- [MITTEL] Taylorpolynom $T_n(x)$ als schnelle lokale Kurvendiskussion 2. Ordnung

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Standardgrenzwerte: $\lim_{x \to 0} \sin x/x = 1$, $\lim_{x \to 0} (e^x-1)/x = 1$
- [HOCH] Eulerzahl: $\lim_{x \to \infty} (1 + 1/x)^x = e$
- [HOCH] L'Hôpital nur bei unbestimmten Formen $0/0$ oder $\infty/\infty$ anwenden
- [HOCH] L'Hôpital ggf. mehrfach anwenden, bis ein bestimmter Wert herauskommt
- [MITTEL] Andere unbestimmte Formen: $0 \cdot \infty \to 0/0$, $\infty - \infty \to$ Hauptnenner, $0^0/\infty^0/1^\infty \to$ $\ln$ nehmen
- [HOCH] Wachstumshierarchie: $\ln x \ll x^n \ll e^x$ für $x \to \infty$

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 4 mit 4-Block-Erklärung

##### Stetigkeit von Funktionen `abl-5-2` · 12 min

**Nach dieser Lesson kannst du:**
- Stetigkeit an einem Punkt und auf einem Intervall definieren
- Sprungstellen, hebbare Unstetigkeiten und Polstellen unterscheiden
- Zwischenwertsatz anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Stetigkeit in $a$: $\lim_{x \to a} f(x) = f(a)$ (beide Seiten gleich UND gleich Funktionswert)
- [HOCH] Hebbare Unstetigkeit: Grenzwert existiert, aber $f(a)$ fehlt oder weicht ab
- [HOCH] Sprungstelle: links- und rechtsseitiger Grenzwert existieren, sind aber verschieden
- [HOCH] Polstelle: $|f(x)| \to \infty$ für $x \to a$ (kein endlicher Grenzwert)
- [HOCH] Zwischenwertsatz: $f$ stetig auf $[a,b]$ nimmt jeden Wert zwischen $f(a)$ und $f(b)$ an
- [MITTEL] Differenzierbar $\Rightarrow$ stetig, aber Umkehrung falsch (z.B. $|x|$ bei $0$)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Grundableitungen: $(x^n)' = n x^{n-1}$, $(e^x)' = e^x$, $(\ln x)' = 1/x$, $(\sin x)' = \cos x$
- [HOCH] $(\cos x)' = -\sin x$ und $(\tan x)' = 1/\cos^2 x = 1 + \tan^2 x$
- [MITTEL] $(a^x)' = a^x \ln a$ und $(\log_a x)' = 1/(x \ln a)$
- [MITTEL] Ableitung der Umkehrfunktion: $(f^{-1})'(y) = 1/f'(x)$ mit $y = f(x)$
- [HOCH] Kombinierte Regeln: Produkt mit Kette, Quotient mit Kette — Teilschritte dokumentieren (Punkte!)

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Kurvendiskussion & Anwendungen `abl-4-2` · 30 min

**Nach dieser Lesson kannst du:**
- Extrema und Wendepunkte auf Prüfungsniveau bestimmen
- Monotoniebereiche analysieren
- Optimierungsaufgaben lösen
- Taylor-Polynome aufstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Optimierung: Zielfunktion aufstellen, Nebenbedingung einsetzen, auf eine Variable reduzieren
- [HOCH] Taylorreihe: $T_n(x) = \sum_{k=0}^n f^{(k)}(x_0)(x-x_0)^k/k!$
- [HOCH] Näherungen bei $x_0 = 0$: $\sin x \approx x$, $\cos x \approx 1 - x^2/2$, $e^x \approx 1 + x + x^2/2$
- [MITTEL] Restglied (Lagrange): $R_n(x) = f^{(n+1)}(\xi)(x-x_0)^{n+1}/(n+1)!$ für ein $\xi$ dazwischen
- [HOCH] Monotoniebereiche aus $f'$-Vorzeichen, Wendebereiche aus $f''$-Vorzeichen

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Technische Optimierung & Newton-Verfahren `abl-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Komplexe technische Optimierungsaufgaben strukturiert lösen
- Geometrische, physikalische und elektrotechnische Optima ermitteln
- Newton-Verfahren zur numerischen Nullstellensuche anwenden
- Globale vs. lokale Extrema unter Randwertbedingungen erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Newton-Iteration: $x_{n+1} = x_n - f(x_n)/f'(x_n)$ — lokal quadratische Konvergenz
- [HOCH] Newton-Voraussetzungen: $f'(x_n) \neq 0$, guter Startwert nahe der Nullstelle
- [MITTEL] Klassische Geometrie-Optima: Dose mit Deckel $h = 2r$, Rechteck $U$ const → Quadrat
- [MITTEL] Max-Power-Theorem (ET): $R_L = R_i$ für maximale Leistung (Wirkungsgrad nur 50 %)
- [HOCH] Globales Optimum: innere Kandidaten + Randwerte + Verhalten am Definitionsrand vergleichen
- [MITTEL] Optimierung unter Nebenbedingung auch via Lagrange-Multiplikator $\nabla f = \lambda \nabla g$ (Vertiefung)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Teil 1: $F(x) = \int_a^x f(t) dt$ ist differenzierbar mit $F'(x) = f(x)$
- [HOCH] Teil 2: $\int_a^b f(x) dx = F(b) - F(a)$ für jede Stammfunktion $F$
- [HOCH] Voraussetzung: $f$ stetig auf $[a,b]$
- [MITTEL] Leibniz-Regel für variable Grenzen: $\frac{d}{dx} \int_{a(x)}^{b(x)} f(t) dt = f(b) b' - f(a) a'$
- [HOCH] Folgerung: Integration und Differentiation sind Umkehroperationen

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Formel: $\int f(g(x)) g'(x) dx = \int f(u) du$ mit $u = g(x)$
- [HOCH] Substitution wählen, wenn Ableitung $g'(x)$ (bis auf Konstante) als Faktor im Integrand vorkommt
- [HOCH] Bei bestimmtem Integral Grenzen mit substituieren: $x = a \to u = g(a)$, analog $b$
- [HOCH] Lineare Substitution $u = ax + b$: $du = a\, dx$, sehr häufig in Prüfungen
- [MITTEL] Trigonometrische Substitution $x = \sin u$ für $\sqrt{1-x^2}$, $x = \tan u$ für $1+x^2$
- [HOCH] Standardformen: $\int f'(x)/f(x) dx = \ln|f(x)| + C$ (logarithmische Ableitung)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Partielle Integration `int-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Partielle Integration anwenden
- LIATE-Regel für die Wahl von u kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Formel: $\int u v' dx = uv - \int u' v dx$ (aus Produktregel hergeleitet)
- [HOCH] LIATE-Regel: **L**og, **I**nv.Trig, **A**lgebr., **T**rig, **E**xp — davor stehende wird $u$
- [HOCH] Spezialtrick $\int \ln x\, dx$: setze $u = \ln x$, $v' = 1$
- [MITTEL] Mehrfache Anwendung bei $\int x^n e^x dx$ (Grad halbieren pro Schritt)
- [MITTEL] Kreisintegrale $\int e^x \sin x\, dx$: nach 2 Anwendungen nach Originalintegral auflösen

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Partialbruchzerlegung `int-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Gebrochen-rationale Funktionen integrieren
- Partialbruchzerlegung aufstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Voraussetzung: $\deg(\text{Zähler}) < \deg(\text{Nenner})$ (sonst Polynomdivision zuerst)
- [HOCH] Einfacher Linearfaktor $(x-a)$: Ansatz $A/(x-a)$
- [HOCH] Doppelter Linearfaktor $(x-a)^2$: Ansatz $A/(x-a) + B/(x-a)^2$
- [HOCH] Irreduzibler quadr. Faktor $x^2+px+q$: Ansatz $(Ax+B)/(x^2+px+q)$
- [HOCH] Koeffizienten via Einsetzmethode (Nullstellen) oder Koeffizientenvergleich
- [HOCH] Integration: $\int dx/(x-a) = \ln|x-a|$, $\int dx/(x-a)^n = -1/((n-1)(x-a)^{n-1})$

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 4 mit 4-Block-Erklärung

##### Gemischte Übungen `int-2-4` · 20 min

**Nach dieser Lesson kannst du:**
- Integrationstechnik selbständig erkennen und anwenden
- Prüfungsaufgaben lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Zähler = Ableitung des Nenners → direkte Stammfunktion $\ln|f|$ (ohne Substitution)
- [HOCH] Halbwinkelformeln für $\sin^2 x = (1 - \cos 2x)/2$, $\cos^2 x = (1 + \cos 2x)/2$
- [NIEDRIG] Substitutionen $t = \tan(x/2)$ (Weierstraß) für rationale trigonometrische Ausdrücke
- [MITTEL] Fourier-Orthogonalität: $\int_0^{2\pi} \sin(nx) \cos(mx) dx = 0$, nützliche Muster
- [HOCH] Integrationsstrategie wählen **vor** dem Rechnen — 10 s nachdenken spart 10 Minuten

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Fläche unter $f(x) \geq 0$ auf $[a,b]$: $A = \int_a^b f(x) dx$
- [HOCH] Vorzeichenproblem: Bei $f < 0$ liefert Integral negativen Wert — Fläche = Betrag
- [HOCH] Fläche zwischen Kurven: $A = \int_a^b (f_{\text{oben}} - f_{\text{unten}}) dx$
- [HOCH] Schnittpunkte als Integrationsgrenzen: $f(x) = g(x)$ lösen
- [HOCH] Bei Vorzeichenwechsel Nullstellen finden und in Teilintervalle splitten
- [MITTEL] Fläche zwischen $y = $ const und Kurve: Horizontalstreifen oder Transformation

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 4 mit 4-Block-Erklärung

##### Rotationskörper `int-3-2` · 16 min

**Nach dieser Lesson kannst du:**
- Volumen von Rotationskörpern berechnen
- Scheibenmethode anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Scheibenmethode ($x$-Achse): $V = \pi \int_a^b [f(x)]^2 dx$
- [HOCH] Rotation um $y$-Achse: $V = \pi \int_c^d [g(y)]^2 dy$ mit Umkehrfunktion
- [MITTEL] Schalenmethode: $V = 2\pi \int_a^b x \cdot f(x) dx$ (Rotation um $y$-Achse)
- [MITTEL] Mantelfläche: $M = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} dx$
- [HOCH] Standardvolumina: Kegel $\pi r^2 h/3$, Kugel $4\pi r^3/3$, Zylinder $\pi r^2 h$ aus Integralen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 2 mit 4-Block-Erklärung

##### Technische Anwendungen `int-3-3` · 16 min

**Nach dieser Lesson kannst du:**
- Arbeit mit Integralen berechnen
- Schwerpunkt einer Fläche bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Arbeit $W = \int_a^b F(x) dx$ bei ortsabhängiger Kraft
- [HOCH] Federenergie aus Hookeschem Gesetz $F = kx$: $W = \frac{1}{2} k s^2$
- [HOCH] Flächenschwerpunkt: $\bar{x} = (1/A) \int x f(x) dx$, $\bar{y} = (1/(2A)) \int f(x)^2 dx$
- [HOCH] Trägheitsmoment $I = \int r^2 dm$ für kontinuierliche Massenverteilung
- [MITTEL] Effektivwert (RMS): $f_{\text{eff}} = \sqrt{(1/T) \int_0^T f(t)^2 dt}$ (Wechselstromtechnik)

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 3 mit 4-Block-Erklärung

##### Bogenlänge & Durchschnittswert `int-3-4` · 14 min

**Nach dieser Lesson kannst du:**
- Bogenlänge $L = \int \sqrt{1 + (f')^{2}}\,dx$ kennen und anwenden
- Durchschnittswert $\bar{f} = \tfrac{1}{b-a}\int f\,dx$ berechnen
- Geometrische Deutung beider Konzepte verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Bogenlänge: $L = \int_a^b \sqrt{1 + [f'(x)]^2} dx$ (Pythagoras am Differentialdreieck)
- [HOCH] Durchschnittswert: $\bar{f} = \frac{1}{b-a} \int_a^b f(x) dx$
- [MITTEL] Parametrisierte Kurve $(x(t), y(t))$: $L = \int_{t_1}^{t_2} \sqrt{x'^2 + y'^2} dt$
- [MITTEL] Mittelwertsatz der Integralrechnung: $\exists \xi \in [a,b]$ mit $f(\xi) = \bar{f}$
- [MITTEL] Anwendung Maschinenbau: Zahnrad-Evolventen, Rohrleitungen, Seilverläufe

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Methodenwahl in Sekundenschnelle: innere Ableitung? → Subst., Produkt? → Part.Int., Bruch? → PBZ
- [HOCH] Bestimmtes Integral: Grenzen bei Substitution mit umrechnen, nicht rücksubstituieren
- [MITTEL] Symmetrie nutzen: $\int_{-a}^a f(x) dx = 0$ bei ungerade, $= 2\int_0^a$ bei gerade
- [MITTEL] Trigonometrische Substitution $x = a \sin u$ für $\sqrt{a^2 - x^2}$, $x = a \tan u$ für $a^2 + x^2$
- [MITTEL] Zweifache partielle Integration + Rückführung auf Ausgangsintegral (Kreistrick)

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Anwendungen der Integralrechnung `int-4-2` · 25 min

**Nach dieser Lesson kannst du:**
- Flächen zwischen Kurven und Rotationsvolumina berechnen
- Schwerpunkte und technische Kenngrößen mit Integralen bestimmen
- Technische Anwendungen (Arbeit, Trägheitsmoment, Bogenlänge) lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Flächenträgheitsmoment Rechteck: $I_x = bh^3/12$ um Schwerachse, $= bh^3/3$ um Rand
- [HOCH] Steiner'scher Satz: $I_a = I_s + A \cdot d^2$ (Abstand $d$ zwischen Achsen)
- [HOCH] Schwerpunkt zusammengesetzter Flächen: $\bar{x} = \sum A_i \bar{x}_i / \sum A_i$
- [HOCH] Rotationsvolumen mit Subtraktion: $V = \pi \int (f^2 - g^2) dx$ (Hohlkörper)
- [MITTEL] Wurfparabel / Strom-Zeit-Integrale als technische Flächenrechnung

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Uneigentliche & numerische Integrale `int-4-3` · 30 min

**Nach dieser Lesson kannst du:**
- Uneigentliche Integrale erkennen und auf Konvergenz prüfen
- p-Integrale als Vergleichsmaßstab nutzen
- Numerische Integration (Trapez, Simpson) anwenden und Fehler abschätzen
- Komplexe Integrale durch Methodenmix lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Uneigentliches Integral: $\int_a^\infty f dx = \lim_{b\to\infty} \int_a^b f dx$
- [HOCH] p-Integral $\int_1^\infty x^{-p} dx$: konvergent für $p > 1$, divergent sonst
- [HOCH] p-Integral $\int_0^1 x^{-p} dx$: konvergent für $p < 1$, divergent sonst
- [HOCH] Trapezregel: $T = h[(f_0+f_n)/2 + \sum f_i]$, Fehler $O(h^2)$
- [HOCH] Simpson-Regel: $S = (h/3)[f_0 + 4 \sum_{\text{ung.}} + 2 \sum_{\text{ger.}} + f_n]$, Fehler $O(h^4)$, $n$ gerade!
- [MITTEL] Vergleichs-/Majorantenkriterium: $0 \leq f \leq g$, $\int g$ konv. $\Rightarrow \int f$ konv.

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Drei Schnittgrößen: Normalkraft $N(x)$, Querkraft $Q(x)$, Biegemoment $M(x)$
- [HOCH] Zusammenhang: $Q(x) = dM/dx$, $q(x) = -dQ/dx$
- [HOCH] Sprung in $Q$ bei Einzellast $F$, Knick in $M$ bei Einzellast
- [HOCH] $M_{\max}$ an Stelle mit $Q = 0$ (gefährliche Stelle)
- [HOCH] An gelenkigen Auflagern ist $M = 0$ (Randbedingung)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Reibung `mech-1-4` · 14 min

**Nach dieser Lesson kannst du:**
- Haft- und Gleitreibung unterscheiden
- Reibkraft mit Coulombschem Gesetz berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Coulombsches Reibgesetz: $F_R = \mu F_N$
- [HOCH] Haftreibwert $\mu_0$ > Gleitreibwert $\mu$ (Losreißen braucht mehr Kraft)
- [HOCH] Auf geneigter Ebene: $F_N = mg\cos\alpha$, $F_H = mg\sin\alpha$
- [HOCH] Selbsthemmung: Körper gleitet nicht, solange $\tan\alpha \leq \mu_0$
- [MITTEL] Reibwinkel $\rho = \arctan\mu$: Neigung, bei der Körper gerade zu gleiten beginnt

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Schwerpunkt `mech-1-5` · 14 min

**Nach dieser Lesson kannst du:**
- Schwerpunkt zusammengesetzter Flächen berechnen
- Flächenschwerpunkt als Summenregel anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Diskrete Massen: $x_S = \sum m_i x_i / \sum m_i$
- [HOCH] Zusammengesetzte Flächen: $x_S = \sum A_i x_{S,i} / \sum A_i$
- [HOCH] Loch als negative Fläche subtrahieren
- [MITTEL] Symmetrie ausnutzen: Schwerpunkt liegt auf Symmetrieachse
- [MITTEL] Schwerpunkte von Standardflächen auswendig: Rechteck Mitte, Dreieck $h/3$, Halbkreis $4r/(3\pi)$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Dynamik

##### Newtonsche Gesetze `mech-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- F = m·a anwenden
- Masse und Gewichtskraft unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] 2. Newton: $\sum \vec F = m \vec a$ (Grundgleichung der Dynamik)
- [HOCH] 1. Newton: ohne Kraft → gleichförmige Bewegung (Trägheitsprinzip)
- [HOCH] 3. Newton: actio = reactio, $\vec F_{AB} = -\vec F_{BA}$
- [HOCH] Gewichtskraft: $F_G = m \cdot g$ mit $g \approx 9{,}81$ m/s²
- [HOCH] Masse (kg) ist Eigenschaft des Körpers, Gewichtskraft (N) Kraft im Schwerefeld

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Arbeit und Energie `mech-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Mechanische Arbeit berechnen
- Energieerhaltung erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Arbeit: $W = F \cdot s \cdot \cos\alpha$ (Skalarprodukt), Einheit Joule
- [HOCH] Senkrechte Kraft leistet keine Arbeit ($\cos 90° = 0$)
- [HOCH] Kinetische Energie: $E_{\text{kin}} = \tfrac{1}{2} m v^2$
- [HOCH] Potentielle Energie: $E_{\text{pot}} = m g h$ (nahe Erdoberfläche)
- [HOCH] Federenergie: $E_{\text{Feder}} = \tfrac{1}{2} c x^2$
- [HOCH] Energieerhaltung: $E_{\text{kin}} + E_{\text{pot}} = $ const (konservatives System)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kinematik `mech-2-3` · 14 min

**Nach dieser Lesson kannst du:**
- Geradlinige Bewegung mit Formeln beschreiben
- Zusammenhang zwischen s, v, a und t herstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Gleichförmig beschleunigt: $v = v_0 + at$, $s = s_0 + v_0 t + \tfrac{1}{2}at^2$
- [HOCH] Energiegleichung: $v^2 = v_0^2 + 2a\Delta s$ (ohne Zeit)
- [HOCH] Freier Fall: $a = g$, $v = gt$, $h = \tfrac{1}{2}gt^2$
- [HOCH] Schräger Wurf: $v_x = v_0 \cos\alpha$, $v_y = v_0 \sin\alpha$, Wurfweite $= v_0^2 \sin 2\alpha/g$
- [HOCH] Kreisbewegung: $\omega = 2\pi/T = 2\pi n$, $v = r\omega$, $a_z = v^2/r = r\omega^2$
- [HOCH] Impulserhaltung: $\sum m_i v_i = $ const (auch bei unelastischem Stoß)

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 2 mit 4-Block-Erklärung

##### Schwingungen `mech-2-4` · 16 min

**Nach dieser Lesson kannst du:**
- Eigenfrequenz eines Feder-Masse-Systems berechnen
- Resonanzbedingung erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Eigenkreisfrequenz: $\omega_0 = \sqrt{c/m}$, Periode $T = 2\pi/\omega_0$
- [HOCH] Harmonische Schwingung: $x(t) = A \sin(\omega_0 t + \varphi)$
- [HOCH] Resonanz bei $\Omega = \omega_0$ — Amplitude wächst unbegrenzt (ungedämpft)
- [HOCH] Dämpfungsgrad (Lehrsches Maß) $D = d/(2\sqrt{cm})$
- [MITTEL] Mathematisches Pendel: $\omega_0 = \sqrt{g/l}$ (kleine Auslenkungen)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Dynamik starrer Körper `mech-2-5` · 16 min

**Nach dieser Lesson kannst du:**
- Massenträgheitsmoment interpretieren
- Drallsatz M = J·α anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Drallsatz: $M = J \cdot \alpha$ (Rotationsanalog zu $F = ma$)
- [HOCH] Standardträgheitsmomente: Vollzylinder $\tfrac{1}{2}mR^2$, Stab $\tfrac{1}{12}mL^2$
- [HOCH] Steinerscher Anteil: $J_A = J_S + m d^2$ (Parallelachsenverschiebung)
- [HOCH] Rotationsenergie: $E_{\text{rot}} = \tfrac{1}{2} J \omega^2$
- [HOCH] Drehimpuls: $L = J \omega$, Erhaltung bei $M_{\text{ext}} = 0$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Statik: Prüfungsaufgaben `mech-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Komplexe Gleichgewichtsaufgaben lösen
- Mehrere Kräfte und Momente kombinieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Freikörperbild: alle äußeren Kräfte und Momente einzeichnen
- [HOCH] Drei Gleichgewichtsbedingungen in 2D: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M_P = 0$
- [HOCH] Lagertypen: Loslager (1 Reaktion), Festlager (2), Einspannung (3)
- [HOCH] Momentensumme um geschickten Punkt (oft Auflager) eliminiert Unbekannte
- [HOCH] Statisch bestimmt: Anzahl Gleichungen = Anzahl Reaktionen

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Dynamik: Prüfungsaufgaben `mech-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Newton-Aufgaben mit Reibung lösen
- Energieerhaltung anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Energieerhaltung mit Reibung: $E_1 = E_2 + W_R$ mit $W_R = F_R \cdot s$
- [HOCH] Elastischer Stoß gleicher Massen: Geschwindigkeiten tauschen
- [HOCH] Arbeitssatz: $\sum W_i = \Delta E_{\text{kin}}$ (Gesamtarbeit = Änderung kin. Energie)
- [HOCH] Bei freiem Fall aus Höhe $h$: $v = \sqrt{2gh}$
- [HOCH] Reibungskraft am Boden: $F_R = \mu m g$, Nettokraft $F - F_R$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Reibung, Kinematik & Schwingungen `mech-3-3` · 22 min

**Nach dieser Lesson kannst du:**
- Reibungs- und Kinematikaufgaben kombinieren
- Schwingungsparameter aus Systemdaten ableiten

**Kleine Themen (Sub-Goals):**
- [HOCH] Geneigte Ebene: gleiten wenn $F_H > F_{R,\max}$, d.h. $\tan\alpha > \mu_0$
- [HOCH] Bremsweg-Formel: $s = v_0^2/(2a)$ bei Bremsbeschleunigung $a$
- [HOCH] Eigenfrequenz Feder-Masse: $\omega_0 = \sqrt{c/m}$
- [MITTEL] Bei Parallelschaltung Federn: $c_\text{ges} = c_1 + c_2$; Serie: $1/c_\text{ges} = 1/c_1 + 1/c_2$
- [HOCH] Rollen ohne Rutschen: $v = r\omega$, kinetische Energie $= \tfrac{1}{2}m v^2 + \tfrac{1}{2}J\omega^2$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Charpy-Versuch: Pendel bricht gekerbte Probe, $KV = mg(h_0 - h_1)$ in Joule
- [HOCH] Hohe $KV$ → zäh, niedrige $KV$ → spröde
- [HOCH] Kritischer Grenzwert Stahlbau: $KV \geq 27$ J bei Einsatztemperatur
- [HOCH] Übergangstemperatur $T_\ddot{U}$: Abfall von $KV$ unterhalb → Sprödbruchgefahr bei Kälte
- [MITTEL] Stahlbezeichnungen: J0 bei 0°C, J2 bei −20°C, K2 bei −40°C geprüft

*Aufgaben-Coverage:* 10 gesamt · 1 manuell / 9 auto-supp · 5 mit 4-Block-Erklärung

##### Fe-C-Diagramm & Wärmebehandlung `werk-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Die wichtigsten Gefüge des Fe-C-Systems (Ferrit, Austenit, Perlit, Martensit) unterscheiden
- Den eutektischen Punkt und den für die Härtbarkeit nutzbaren C-Bereich kennen
- Glühen, Härten und Vergüten als typische Wärmebehandlungen einordnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ferrit (α, krz): weich/zäh; Austenit (γ, kfz): nur bei hoher T; Perlit (lamellar); Martensit (Nadeln, hart)
- [HOCH] Eutektoider Punkt: $0{,}83\%$ C bei $723°$C — Austenit → Perlit
- [HOCH] Härtbarkeit: $0{,}3$–$0{,}8\%$ C nötig (zu wenig = kein Martensit, zu viel = spröde)
- [HOCH] Wärmebehandlungen: Glühen (Gefüge-Gleichgewicht), Härten (abschrecken), Vergüten (Härten + Anlassen)
- [HOCH] Vergüten: hohe Festigkeit + Zähigkeit durch angelassenen Martensit (z.B. 42CrMo4)
- [MITTEL] Langsames Abkühlen → Diffusion → Perlit; Schnelles Abschrecken → diffusionslos → Martensit

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfung

##### Prüfung: Werkstoffwahl & Kennwerte `werk-pruefung-1` · 25 min

**Nach dieser Lesson kannst du:**
- Aus Anforderungen (Last, Temperatur, Umgebung) Werkstoffgruppe wählen
- Kennwerte aus Zugversuch korrekt interpretieren
- Zulässige Spannung mit Sicherheitszahl berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Zulässige Spannung: $\sigma_\text{zul} = R_m/S$ oder $R_e/S$
- [HOCH] Typische S-Werte: statisch $S = 1{,}5$, schwingend $S = 2$–$3$
- [HOCH] Kennwertwahl: zähe Stähle → $R_e$; spröde Werkstoffe → $R_m$
- [HOCH] Einheit MPa = N/mm² = $10^6$ Pa
- [MITTEL] Werkstoffgruppen: Stahl (hohe Festigkeit), Alu (leicht), Kunststoff (korrosionsfrei), Keramik (hart)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Leistung: $P = U \cdot I = U^2/R = I^2 R$ (drei äquivalente Formen)
- [HOCH] Energie: $W = P \cdot t$ (Einheit Joule oder Wattstunden)
- [HOCH] Wirkungsgrad: $\eta = P_\text{ab}/P_\text{zu}$, immer $\leq 1$
- [HOCH] Wärmeverlust im Widerstand: $P_R = I^2 R$ (Stromwärmegesetz)
- [MITTEL] Nennspannungen Haushalt: 230 V (einphasig), 400 V (Drehstrom)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Wechselstrom

##### Wechselstromgrundlagen und Impedanz `et-2-1` · 14 min

**Nach dieser Lesson kannst du:**
- Wechselspannung und Kreisfrequenz $\omega = 2\pi f$ verstehen
- Impedanzen $Z_R$, $Z_C$, $Z_L$ berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Wechselspannung: $u(t) = \hat u \sin(\omega t + \varphi)$ mit $\omega = 2\pi f$
- [HOCH] Effektivwert: $U = \hat u/\sqrt 2$ (Sinussignal)
- [HOCH] Impedanzen: $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/(j\omega C)$
- [HOCH] |Z_L| = ωL steigt mit Frequenz, |Z_C| = 1/(ωC) fällt mit Frequenz
- [HOCH] Phasenverschiebung: Spule $+90°$ (Strom eilt nach), Kondensator $-90°$ (Strom eilt voraus)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### RC- und RL-Schaltungen `et-2-2` · 14 min

**Nach dieser Lesson kannst du:**
- Grenzfrequenz eines RC-Tiefpasses berechnen
- Impedanz einer RL-Schaltung bestimmen
- Leistungsfaktor $\cos\varphi$ verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] RC-Grenzfrequenz: $f_g = 1/(2\pi RC)$
- [HOCH] Zeitkonstanten: RC $\tau = RC$, RL $\tau = L/R$
- [HOCH] RL-Impedanz-Betrag: $|Z| = \sqrt{R^2 + (\omega L)^2}$
- [HOCH] Leistungsfaktor: $\cos\varphi = R/|Z|$, $P = S \cos\varphi$
- [HOCH] Bei $f_g$: Betrag auf $1/\sqrt 2 \approx 0{,}707$ abgefallen (−3 dB)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Drehstrom & 3-Phasensystem `et-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Stern- (Y) und Dreieckschaltung ($\Delta$) unterscheiden
- Verkettete Spannung $U_{LL} = \sqrt{3} \cdot U_{LN}$ anwenden
- Wirkleistung im Drehstromsystem berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Stern: $U_{LL} = \sqrt 3 U_{LN}$, $I_L = I_\text{Strang}$
- [HOCH] Dreieck: $U_{LL} = U_\text{Strang}$, $I_L = \sqrt 3 I_\text{Strang}$
- [HOCH] Drehstrom-Leistung: $P = \sqrt 3 U_{LL} I_L \cos\varphi$
- [HOCH] Haushaltsnetz: $U_{LN} = 230$ V, $U_{LL} = 400$ V
- [MITTEL] Y/$\Delta$-Anlauf: in Stern nur 1/3 Leistung → kleinerer Anlaufstrom

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Gleichstrom Prüfungsaufgaben `et-3-1` · 20 min

**Nach dieser Lesson kannst du:**
- Kirchhoffsche Gesetze in komplexen Schaltungen anwenden
- Spannungsteiler und Stromteiler berechnen
- Elektrische Energie und Leistung klausurfertig lösen

**Kleine Themen (Sub-Goals):**
- [HOCH] Reihe: $R_\text{ges} = \sum R_i$; Parallel: $1/R_\text{ges} = \sum 1/R_i$
- [HOCH] Spannungsteiler: $U_1 = U \cdot R_1/(R_1 + R_2)$
- [HOCH] Stromteiler: $I_k = I_\text{ges} \cdot R_\text{par}/R_k$ (umgekehrt proportional)
- [HOCH] Energie: $W = P \cdot t$; 1 kWh = 3{,}6 MJ
- [HOCH] Kirchhoff-Methode: Maschen + Knoten → LGS für mehrere unbekannte Ströme

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Wechselstrom Prüfungsaufgaben `et-3-2` · 20 min

**Nach dieser Lesson kannst du:**
- Resonanzfrequenz eines RLC-Kreises berechnen
- Leistungsfaktor und Wirkleistung bestimmen
- Tiefpass-Übertragungsverhalten klausurfertig beherrschen

**Kleine Themen (Sub-Goals):**
- [HOCH] RLC-Reihe Impedanz: $Z = R + j(\omega L - 1/(\omega C))$
- [HOCH] Resonanzfrequenz: $\omega_0 = 1/\sqrt{LC}$, $f_0 = 1/(2\pi\sqrt{LC})$
- [MITTEL] Güte $Q = \omega_0 L/R = 1/(\omega_0 RC)$
- [HOCH] Wirk-/Blind-/Scheinleistung: $P = S\cos\varphi$, $Q = S\sin\varphi$, $S = UI$
- [MITTEL] Tiefpass $-20$ dB/Dekade oberhalb $f_g$, Hochpass umgekehrt

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Dynamische Typisierung: keine Typangabe nötig, aber Typ ändert sich mit dem Wert
- [MITTEL] int/float/str/bool mit `type(x)` prüfen
- [HOCH] Explizite Konvertierung `int("42")`, `float(3)`, `str(3.14)` — `int("3.14")` wirft `ValueError`
- [NIEDRIG] `snake_case` für Variablen in Python; Matlab nutzt `camelCase` oder Unterstrich-frei

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Operatoren & Ausdrücke `py-1-2` · 10 min

**Nach dieser Lesson kannst du:**
- Arithmetische Operatoren anwenden
- Ganzzahldivision und Modulo verstehen
- Vergleichs- und logische Operatoren verwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] `/` = Gleitkomma-Division, `//` = Ganzzahl-Division, `%` = Modulo
- [HOCH] Python: `**` für Potenz; Matlab: `^` (bei Arrays: `.^` elementweise)
- [HOCH] Logische Operatoren: Python `and/or/not`, Matlab `&&/||/~` (skalar) bzw. `&/|/~` (elementweise)
- [HOCH] Float-Vergleich mit `==` unzuverlässig — stattdessen `abs(a - b) < 1e-9`
- [NIEDRIG] `0 == False` und `1 == True` in Python — bool ist Subtyp von int

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Listen & Arrays `py-1-3` · 10 min

**Nach dieser Lesson kannst du:**
- Python-Listen erstellen und manipulieren
- Slicing und Indizierung verstehen
- NumPy Arrays für Berechnungen nutzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Python indiziert ab 0, Matlab ab 1 — Off-by-one-Fehler ist Quelle Nr. 1
- [HOCH] Slicing `liste[a:b]` liefert Elemente $a$ bis $b-1$ (rechte Grenze exklusiv)
- [HOCH] NumPy-Arrays: vektorisiert (elementweise `+ - * /`), viel schneller als reine Python-Listen
- [MITTEL] Python-Listen können gemischte Typen; NumPy-Arrays nur einen Datentyp (dtype)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kontrollstrukturen `py-1-4` · 10 min

**Nach dieser Lesson kannst du:**
- if/elif/else Verzweigungen schreiben
- for- und while-Schleifen anwenden
- Unterschiede zwischen Python und Matlab kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Python: Einrückung (4 Spaces) definiert Block — kein `end`; Matlab: immer `end`
- [HOCH] Vergleiche: `==` prüft Gleichheit, `=` weist zu — Verwechslung erzeugt stummen Bug
- [HOCH] For-Schleife: `for i in range(n)` (0..n-1) in Python, `for i = 1:n` (1..n) in Matlab
- [MITTEL] While-Schleife braucht zwingend einen Abbruch-Mechanismus (Zähler, Bedingung) um Endlos-Loops zu verhindern

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Funktionen definieren `py-1-5` · 10 min

**Nach dieser Lesson kannst du:**
- Eigene Funktionen schreiben
- Parameter und Rückgabewerte verstehen
- Lambda-Ausdrücke kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Python: `def name(param):`, Matlab: `function y = name(x)` ... `end`
- [HOCH] Rückgabe: Python `return`, Matlab über Zuweisung an Ausgabevariable
- [HOCH] Default-Parameter: `def f(x, y=0):` — bei Aufruf nicht zwingend angeben
- [MITTEL] Lambda: `sqr = lambda x: x**2` für kurze Inline-Funktionen
- [MITTEL] Docstring (Python) oder Kommentare nach Function-Header (Matlab) dokumentieren

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### Numerisches Rechnen

##### NumPy Grundlagen `py-2-1` · 10 min

**Nach dieser Lesson kannst du:**
- NumPy importieren und Arrays erzeugen
- Elementweise Operationen durchführen
- Matrizen erstellen und multiplizieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Array erzeugen: `np.array([...])`, `np.zeros`, `np.ones`, `np.eye`, `np.linspace`
- [HOCH] Elementweise: `*` in NumPy, `.*` in Matlab; Matrixmultiplikation: `@` bzw. `*`
- [HOCH] Formen: `a.shape` (NumPy), `size(a)` (Matlab)
- [HOCH] Vektorisierung statt Schleifen: $10$–$100\times$ schneller
- [MITTEL] Broadcasting: $(n, 1) + (1, m) \to (n, m)$ automatisch

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Matplotlib — Daten visualisieren `py-2-2` · 10 min

**Nach dieser Lesson kannst du:**
- Linien- und Scatterplots erstellen
- Achsen beschriften und formatieren
- Mehrere Kurven in einem Plot darstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Basis-Plot: `plt.plot(x, y)`, Titel, `xlabel`, `ylabel`, `legend`, `grid`
- [MITTEL] Farbe/Linienstil: `'b-'` blau, `'r--'` rot gestrichelt, `'g:'` grün gepunktet
- [HOCH] Mehrere Kurven: mehrere `plt.plot()`-Aufrufe nacheinander
- [MITTEL] Speichern: `plt.savefig('name.png', dpi=150)` **vor** `plt.show()`
- [HOCH] Plots ohne Achsen-/Einheiten-Beschriftung verlieren in Berichten Punkte

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Gleichungen lösen & Optimierung `py-2-3` · 10 min

**Nach dieser Lesson kannst du:**
- Nullstellen mit fsolve finden
- Lineare Gleichungssysteme lösen
- Minima/Maxima numerisch finden

**Kleine Themen (Sub-Goals):**
- [HOCH] Nullstelle: `scipy.optimize.fsolve(f, x0)` — Startwert sollte nah an Lösung
- [HOCH] LGS: `np.linalg.solve(A, b)` statt `np.linalg.inv(A) @ b` (schneller, stabiler)
- [HOCH] Matlab-Pendant: Backslash-Operator `A \ b`
- [HOCH] Optimierung: `scipy.optimize.minimize(f, x0)` für Minima (Maxima: `-f`)
- [MITTEL] Dimensionen prüfen vor Solve: `A.shape == (n, n)`, `b.shape == (n,)`

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Numerische Integration & DGL `py-2-4` · 10 min

**Nach dieser Lesson kannst du:**
- Integrale numerisch berechnen
- Gewöhnliche DGL mit solve_ivp lösen
- Ergebnisse plotten und interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Bestimmtes Integral: `scipy.integrate.quad(f, a, b)` (adaptive Quadratur)
- [MITTEL] Matlab-Pendant: `integral(@(x) f(x), a, b)`
- [HOCH] DGL 2. Ordnung → System 1. Ordnung umschreiben, dann `solve_ivp` / `ode45`
- [HOCH] ODE-Aufruf: `solve_ivp(f, [t0, t1], y0)`; `t_eval=...` für feste Ausgabezeitpunkte
- [MITTEL] Standard-Solver: `RK45` (Python), `ode45` (Matlab) — adaptive Schrittweite, $O(h^5)$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### MB-Anwendungen

##### Festigkeitsberechnung `py-3-1` · 10 min

**Nach dieser Lesson kannst du:**
- Spannungsberechnung programmieren
- Querschnittswerte automatisiert berechnen
- Ergebnisse grafisch darstellen

**Kleine Themen (Sub-Goals):**
- [HOCH] Rechteck: $I = bh^3/12$, $W = bh^2/6$ als Funktion
- [HOCH] Biegespannung $\sigma_b = M_b/W$ entlang Balken berechnen (Vektor-Operation)
- [HOCH] Kritische Stelle: $M_\text{max}$ via `np.max(np.abs(M))`
- [MITTEL] Verschiedene Querschnitte als Funktionen kapseln (DRY-Prinzip)
- [MITTEL] Ergebnis-Plot: Spannungsverlauf über $x$ mit Skalierung & Einheit

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Datenauswertung & Messdaten `py-3-2` · 10 min

**Nach dieser Lesson kannst du:**
- CSV-Dateien einlesen
- Statistische Auswertung durchführen
- Messdaten fitten und interpolieren

**Kleine Themen (Sub-Goals):**
- [HOCH] CSV lesen: `np.loadtxt` (einfach), `pd.read_csv` (mit Headern und Typen)
- [HOCH] Statistik: `np.mean`, `np.std`, `np.median`, `np.max`, `np.min`
- [HOCH] Polynom-Fit: `np.polyfit(x, y, n)` → Koeffizienten
- [MITTEL] Pandas DataFrames: `df['Spalte']`, `df.describe()` für Überblick
- [MITTEL] Scatter + Fit-Kurve zusammen plotten (Mess vs. Modell)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Simulation: Feder-Masse-Dämpfer `py-3-3` · 10 min

**Nach dieser Lesson kannst du:**
- Schwingungssystem modellieren
- Parametervariation durchführen
- Resonanz erkennen und visualisieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Bewegungsgleichung $m\ddot x + d\dot x + kx = F(t)$ als System 1. Ordnung
- [HOCH] Eigenkreisfrequenz $\omega_0 = \sqrt{k/m}$, Dämpfungsgrad $D = d/(2\sqrt{km})$
- [HOCH] Frequenzgang: Amplitude über $\Omega$ plotten, Resonanzspitze bei $\Omega \approx \omega_0$
- [MITTEL] Parameter-Loop: Schleife über $\Omega$, pro Wert ODE lösen
- [MITTEL] Einschwingvorgang ignorieren: nur zweite Hälfte der Zeitreihe auswerten

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Prüfung: Code-Verständnis & Fehlersuche `py-4-1` · 10 min

**Nach dieser Lesson kannst du:**
- Typische Prüfungsfragen zur Programmierung lösen
- Code lesen und Ausgaben vorhersagen
- Fehler in Code finden

**Kleine Themen (Sub-Goals):**
- [HOCH] Indizierung: Python 0-basiert, Matlab 1-basiert (Off-by-one-Fehler!)
- [HOCH] Operatoren: `*` vs `@`, `^` vs `.^` — elementweise vs. Matrix
- [HOCH] Python `range(a, b)`: $a, a+1, \ldots, b-1$; Matlab `a:b`: $a, a+1, \ldots, b$
- [HOCH] Code Zeile-für-Zeile verfolgen, Variablenwerte neben Code notieren
- [HOCH] Typische Fehler: `=` vs `==`, fehlendes `:` in Python, Semikolon-Ausgabe in Matlab

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Transponierte: $(A^T)_{ij} = A_{ji}$ (Zeilen/Spalten tauschen), Dimensionen $m \times n \to n \times m$
- [HOCH] Transponierten-Regeln: $(A+B)^T = A^T + B^T$, $(AB)^T = B^T A^T$ (Reihenfolge dreht!)
- [HOCH] 2x2-Inverse: $A^{-1} = \frac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$
- [HOCH] Invertierbarkeit: $A^{-1}$ existiert $\iff \det A \neq 0$
- [HOCH] Eigenschaft: $AA^{-1} = A^{-1}A = I$ (Einheitsmatrix)
- [MITTEL] Symmetrische Matrix: $A^T = A$; orthogonale Matrix: $A^T = A^{-1}$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Determinanten `la-1-4` · 20 min

**Nach dieser Lesson kannst du:**
- 2x2- und 3x3-Determinanten berechnen
- Regel von Sarrus anwenden
- Geometrische Bedeutung der Determinante verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] 2x2: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- [HOCH] 3x3 Regel von Sarrus: Haupt- minus Nebendiagonalen (nur 3x3!)
- [HOCH] Laplace-Entwicklung: nach einer Zeile/Spalte, Vorzeichen-Schachbrett $(-1)^{i+j}$
- [HOCH] Determinanten-Regeln: $\det(AB) = \det A \cdot \det B$, $\det A^T = \det A$
- [HOCH] Geometrisch: $|\det A|$ = Flächen-/Volumen-Skalierungsfaktor
- [HOCH] $\det A = 0 \iff$ Spalten linear abhängig, $A$ singulär, kein $A^{-1}$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Eigenwerte und Eigenvektoren `la-1-5` · 20 min

**Nach dieser Lesson kannst du:**
- Eigenwertgleichung verstehen
- Charakteristisches Polynom aufstellen
- Eigenwerte für 2x2-Matrizen berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Eigenwertgleichung: $A \vec v = \lambda \vec v$ (Vektor bleibt in Richtung, nur gestreckt)
- [HOCH] Charakteristisches Polynom: $\det(A - \lambda I) = 0$ → Eigenwerte $\lambda_i$
- [HOCH] Eigenvektor zu $\lambda_i$: $(A - \lambda_i I)\vec v = 0$ lösen (Kern)
- [MITTEL] Spur und Determinante: $\text{tr}(A) = \sum \lambda_i$, $\det A = \prod \lambda_i$
- [MITTEL] Symmetrische Matrix: Eigenwerte reell, Eigenvektoren orthogonal (Hauptachsentransformation)
- [HOCH] Technik-Anwendung: Eigenfrequenzen (Schwingungen), Hauptspannungen (Festigkeit)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Matrixform: $A\vec x = \vec b$ (Koeffizienten $A$, Unbekannte $\vec x$, rechte Seite $\vec b$)
- [HOCH] Erweiterte Koeffizientenmatrix $[A|\vec b]$ mit Trennstrich
- [HOCH] Variablen in jeder Gleichung in gleicher Reihenfolge (sonst Koeffizienten falsch!)
- [MITTEL] Dimensionen: $A$ ist $m \times n$, $\vec x \in \mathbb{R}^n$, $\vec b \in \mathbb{R}^m$
- [MITTEL] Homogenes LGS: $\vec b = \vec 0$, triviale Lösung $\vec x = \vec 0$ existiert immer

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Gauss-Algorithmus `la-2-2` · 25 min

**Nach dieser Lesson kannst du:**
- Die drei erlaubten Zeilenumformungen kennen
- Ein LGS in Stufenform bringen
- Rücksubstitution durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] Drei erlaubte Zeilenumformungen: Vertauschen, Skalieren (≠0), Addieren eines Vielfachen
- [HOCH] Ziel: Obere Dreiecksform / Stufenform (alle Einträge unter Pivot = 0)
- [HOCH] Rücksubstitution: von unten nach oben, Variable nach Variable auflösen
- [HOCH] Pivotierung: bei $a_{ii} = 0$ Zeile tauschen, sonst Division durch 0
- [MITTEL] Gauss-Jordan: zusätzlich auch über Pivots nullen → reduzierte Stufenform
- [MITTEL] Matrix-Inversion mit Gauss: $[A | I] \to [I | A^{-1}]$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### Lösbarkeit von LGS `la-2-3` · 18 min

**Nach dieser Lesson kannst du:**
- Die drei Fälle der Lösbarkeit unterscheiden
- Rang einer Matrix bestimmen
- Kronecker-Capelli-Theorem anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Drei Fälle: eindeutig / unendlich / keine Lösung (Widerspruch)
- [HOCH] Rang = Anzahl Pivots in Stufenform
- [HOCH] Kronecker-Capelli: $\text{rg}(A) \neq \text{rg}([A|b])$ → keine Lösung
- [HOCH] Eindeutig: $\text{rg}(A) = \text{rg}([A|b]) = n$ (Anzahl Unbekannte)
- [HOCH] Unendlich: $\text{rg}(A) = \text{rg}([A|b]) < n$, freie Parameter = $n - \text{rg}(A)$
- [MITTEL] Geometrisch (2D): Geraden schneidend / identisch / parallel

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Cramersche Regel & Anwendungen `la-2-4` · 18 min

**Nach dieser Lesson kannst du:**
- Cramersche Regel für 2x2- und 3x3-Systeme anwenden
- Technische Probleme als LGS formulieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Cramer: $x_i = \det(A_i)/\det(A)$, wobei $A_i$ = $A$ mit $i$-ter Spalte durch $\vec b$ ersetzt
- [HOCH] Voraussetzung: $\det(A) \neq 0$ (nicht anwendbar bei singulärer Matrix)
- [HOCH] Nur für **quadratische** Systeme mit eindeutiger Lösung sinnvoll
- [MITTEL] Ab $n > 4$ ist Gauss effizienter (Cramer = $O(n!)$ mit Sarrus, $n!$ Determinanten)
- [HOCH] Technik-Anwendung: Kräftegleichgewicht, Knotenspannungsanalyse (Kirchhoff)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Matrixmultiplikation Zeile × Spalte — $AB \neq BA$ im Allgemeinen
- [HOCH] Laplace-Entwicklung: $\det A = \sum_j (-1)^{i+j} a_{ij} M_{ij}$ (beliebige Zeile/Spalte)
- [HOCH] Inverse-Test: $A^{-1}$ existiert $\iff \det A \neq 0 \iff \text{rg}(A) = n$
- [HOCH] Rang via Gauss: Zeilenstufenform → Anzahl Nicht-Null-Zeilen
- [HOCH] Äquivalenzkette: $A$ invertierbar $\iff \det \neq 0 \iff \text{rg} = n \iff A\vec x = \vec b$ eindeutig
- [MITTEL] Parameteraufgabe: $A(\lambda)$, Werte für $\lambda$ finden, bei denen $\det = 0$

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: LGS & Eigenwerte `la-3-2` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare Gleichungssysteme mit Gauss-Algorithmus lösen
- Lösbarkeit und Lösungstypen anhand des Ranges beurteilen
- Eigenwerte und Eigenvektoren berechnen
- Eigenschaften von Eigenwerten interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Rouché-Capelli-Kriterium: $\text{rg}(A) = \text{rg}([A|b])$ für Lösbarkeit
- [HOCH] Freie Variablen = $n - \text{rg}(A)$ (Parametrisierung der Lösungsmenge)
- [HOCH] Eigenwerte via $\det(A - \lambda I) = 0$
- [HOCH] Eigenvektor: Kern von $(A - \lambda I)$, normieren falls gefordert
- [HOCH] Spur = $\sum \lambda_i$, Determinante = $\prod \lambda_i$ (Quercheck!)
- [MITTEL] Defekt: algebraische Vielfachheit > geometrische → nicht diagonalisierbar

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Diagonalisierung & technische Anwendungen `la-3-3` · 30 min

**Nach dieser Lesson kannst du:**
- Matrizen diagonalisieren $A = P D P^{-1}$
- Eigenwerte für technische Probleme interpretieren (Trägheitstensor, Schwingungen, Stabilität)
- Defekte Matrizen erkennen
- Spektralsatz auf symmetrische Matrizen anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Diagonalisierung: $A = PDP^{-1}$ mit $P = $ EV-Matrix, $D = \text{diag}(\lambda_i)$
- [HOCH] Bedingung: $n$ linear unabhängige Eigenvektoren (algebr. = geom. Vielfachheit)
- [HOCH] Matrixpotenzen via $A^k = P D^k P^{-1}$ (nur Diagonale potenzieren!)
- [HOCH] Spektralsatz (symm. Matrix): reelle EW, orthogonale EV, $A = Q D Q^T$ mit $Q$ orthogonal
- [HOCH] Technik: Hauptträgheitsachsen, Hauptspannungen, Eigenfrequenzen, Stabilität ($|\lambda| < 1$)
- [MITTEL] Defekte Matrix: nicht diagonalisierbar → Jordan-Normalform (Vertiefung)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Standardform: $y' + p(x) y = q(x)$
- [HOCH] Integrierender Faktor: $\mu(x) = e^{\int p(x) dx}$
- [HOCH] Lösungsformel: $y = (1/\mu) [\int \mu \cdot q \, dx + C]$
- [HOCH] Alternative: Variation der Konstanten (homogene + partikuläre Lösung)
- [HOCH] Homogene Lösung $y_h = C e^{-\int p dx}$ einzeln bestimmbar
- [MITTEL] Typisches Anwendungsproblem: RC-Stromkreis $\dot U + U/RC = U_0/RC$

*Aufgaben-Coverage:* 10 gesamt · 5 manuell / 5 auto-supp · 0 mit 4-Block-Erklärung

##### DGL 2. Ordnung mit konstanten Koeffizienten `dgl-1-4` · 22 min

**Nach dieser Lesson kannst du:**
- Charakteristische Gleichung aufstellen und lösen
- Drei Fälle unterscheiden: reelle, doppelte, komplexe Wurzeln
- Schwingungsverhalten aus der Lösung ablesen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ansatz $y = e^{\lambda x}$ führt zu char. Gleichung $a\lambda^2 + b\lambda + c = 0$
- [HOCH] D > 0 (zwei reelle): $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$
- [HOCH] D = 0 (doppelte): $y = (C_1 + C_2 x) e^{\lambda x}$
- [HOCH] D < 0 (komplex $\alpha \pm i\beta$): $y = e^{\alpha x}(C_1 \cos\beta x + C_2 \sin\beta x)$ — Schwingung!
- [HOCH] Dämpfung: $\alpha < 0$ abklingend, $\alpha = 0$ ungedämpft, $\alpha > 0$ instabil
- [HOCH] Feder-Masse: $m\ddot x + d\dot x + kx = 0$ — Eigenfrequenz $\omega_0 = \sqrt{k/m}$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Ansatz: homogene Lösung $y_h = C e^{-P(x)}$, dann $C$ durch $C(x)$ ersetzen
- [HOCH] Einsetzen liefert $C'(x) = q(x) e^{P(x)}$ (nur eine Integration)
- [HOCH] Allgemeine Lösung = homogener + partikulärer Anteil
- [HOCH] Partikulärer Ansatz (Störansatz): bei Polynom/Exp/Trig-Störung direkte Vermutung
- [MITTEL] Resonanz-Fall: wenn Störung Lösung der homogenen DGL ist → Ansatz $\times x$

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### DGL-Systeme `dgl-2-2` · 15 min

**Nach dieser Lesson kannst du:**
- DGL-Systeme in Matrixform schreiben
- DGL höherer Ordnung als System umschreiben

**Kleine Themen (Sub-Goals):**
- [HOCH] Matrixform: $\vec y' = A \vec y$ mit Vektor $\vec y$ und Koeffizientenmatrix $A$
- [HOCH] Reduktion höherer Ordnung: $y_1 = y, y_2 = y', \ldots, y_n = y^{(n-1)}$
- [HOCH] Eigenwertansatz: $\vec y = \vec v e^{\lambda t}$ → $A \vec v = \lambda \vec v$
- [HOCH] Allgemeine Lösung: $\vec y = \sum C_i \vec v_i e^{\lambda_i t}$
- [HOCH] Stabilität: alle $\text{Re}(\lambda_i) < 0$ → asymptotisch stabil
- [MITTEL] Komplexe EW: Paare $\alpha \pm i\beta$ → Real-/Imaginärteil nehmen für reelle Lösung

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Technische Anwendungen `dgl-2-3` · 20 min

**Nach dieser Lesson kannst du:**
- Feder-Masse-Dämpfer-System modellieren
- RC-Glied als DGL beschreiben
- Eigenfrequenz berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Feder-Masse-Dämpfer: $m\ddot x + c\dot x + kx = F(t)$
- [HOCH] Eigenkreisfrequenz $\omega_0 = \sqrt{k/m}$, Dämpfungsgrad $D = c/(2\sqrt{km})$
- [HOCH] Schwingfall $D<1$: gedämpfte Schwingung mit $\omega_d = \omega_0 \sqrt{1-D^2}$
- [HOCH] Aperiodischer Grenzfall $D=1$: schnellstes Abklingen ohne Schwingung
- [HOCH] RC-Glied: $RC \dot u + u = U_0$, Zeitkonstante $\tau = RC$, $u(t) = U_0(1-e^{-t/\tau})$
- [MITTEL] Resonanz bei erzwungener Schwingung: max. Amplitude bei $\omega \approx \omega_0$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?
- [HOCH] Trennbar: $\int dy/g(y) = \int f(x) dx + C$
- [HOCH] Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$
- [HOCH] AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen
- [MITTEL] Bernoulli $y' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert
- [MITTEL] Integrierender Faktor bei nicht-exakter DGL: $\mu(x)$ oder $\mu(y)$ finden

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: DGL 2. Ordnung & Anwendungen `dgl-3-2` · 25 min

**Nach dieser Lesson kannst du:**
- Charakteristische Gleichung aufstellen und lösen
- Allgemeine Lösung für alle Wurzeltypen angeben
- Partikuläre Lösung durch Ansatz vom Typ der rechten Seite bestimmen
- Schwingungsverhalten eines Feder-Masse-Systems analysieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Störansatz Polynom: $y_p = $ Polynom gleichen Grades
- [HOCH] Störansatz Exponential: $y_p = A e^{cx}$ (falls $c$ kein EW der char. Gl.)
- [HOCH] Störansatz Trig: $y_p = A \cos\omega x + B \sin\omega x$
- [HOCH] Resonanzfall: Wenn Störung homogene Lösung ist → $\times x$ (oder $\times x^2$ bei Doppelwurzel)
- [HOCH] Allgemeine Lösung: $y = y_h + y_p$
- [HOCH] AWP bei 2. Ordnung: zwei Bedingungen $y(x_0), y'(x_0)$ → zwei Konstanten

*Aufgaben-Coverage:* 11 gesamt · 11 manuell / 0 auto-supp · 0 mit 4-Block-Erklärung

##### Prüfung: Systeme & technische Modellbildung `dgl-3-3` · 30 min

**Nach dieser Lesson kannst du:**
- Lineare DGL-Systeme analysieren (Eigenwerte, Stabilität)
- Reale technische Systeme als DGL formulieren (Wärme, Strömung, Elektrik)
- Numerische Lösung mit Euler-Verfahren durchführen
- Stationäre Lösungen aus Bilanzgleichungen ermitteln

**Kleine Themen (Sub-Goals):**
- [HOCH] Euler explizit: $y_{n+1} = y_n + h \cdot f(x_n, y_n)$, Fehler $O(h)$
- [HOCH] Stabilität via Eigenwerte: alle $\text{Re}(\lambda_i) < 0$ → asymptotisch stabil
- [HOCH] Bilanzgleichungen: Massenbilanz, Energiebilanz, Kräftebilanz, Ladungsbilanz
- [HOCH] Mechanik-Elektrik-Analogie: $m \leftrightarrow L$, $d \leftrightarrow R$, $1/k \leftrightarrow C$, $F \leftrightarrow U$
- [HOCH] Stationäre Lösung: $\dot y = 0$ → algebraisches System (Gleichgewicht)
- [MITTEL] Newton'sches Abkühlungsgesetz: $\dot T = -k(T - T_U)$, Lösung $T(t) = T_U + (T_0 - T_U)e^{-kt}$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Betrag: $|z| = \sqrt{a^2 + b^2}$ (Pythagoras)
- [HOCH] Argument: $\varphi = \arg(z)$ mit $\text{atan2}(b,a)$ (Quadrant beachten!)
- [HOCH] Polarform: $z = |z|(\cos\varphi + i\sin\varphi) = |z| e^{i\varphi}$
- [HOCH] Rücktransformation: $a = |z|\cos\varphi$, $b = |z|\sin\varphi$
- [MITTEL] Hauptwert des Arguments: $\varphi \in (-\pi, \pi]$ (Konvention)
- [HOCH] Typische Falle: einfacher $\arctan(b/a)$ gibt falschen Quadranten

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Euler-Formel & Exponentialdarstellung `komz-2-2` · 18 min

**Nach dieser Lesson kannst du:**
- Die Euler-Formel $e^{i\varphi} = \cos\varphi + i\sin\varphi$ kennen
- Komplexe Zahlen in der Form $z = |z| \cdot e^{i\varphi}$ schreiben
- Vorteile der Exponentialform für Multiplikation erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Euler-Formel: $e^{i\varphi} = \cos\varphi + i\sin\varphi$
- [MITTEL] Euler'sche Identität: $e^{i\pi} + 1 = 0$ (fünf Konstanten in einer Gleichung)
- [HOCH] Multiplikation: $z_1 z_2 = r_1 r_2 e^{i(\varphi_1 + \varphi_2)}$ (Beträge mal, Argumente plus)
- [HOCH] Division: $z_1/z_2 = (r_1/r_2) e^{i(\varphi_1 - \varphi_2)}$
- [HOCH] Konjugiert-komplex in Polarform: $\bar z = r e^{-i\varphi}$
- [MITTEL] Sinus/Cosinus aus Euler: $\cos\varphi = (e^{i\varphi} + e^{-i\varphi})/2$, $\sin\varphi = (e^{i\varphi} - e^{-i\varphi})/(2i)$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Moivre: $z^n = |z|^n e^{in\varphi} = |z|^n (\cos n\varphi + i \sin n\varphi)$
- [HOCH] Betrag hoch $n$, Argument mal $n$
- [MITTEL] Anwendung: Mehrfach-Winkel-Formeln ($\cos 2\varphi, \sin 3\varphi, \ldots$) herleitbar
- [HOCH] Geometrisch: Streckung + Drehung — wiederholte Rotation um $\varphi$
- [MITTEL] Negative Potenzen: $z^{-1} = (1/|z|) e^{-i\varphi}$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Wurzeln — alle n-ten Wurzeln finden `komz-3-2` · 18 min

**Nach dieser Lesson kannst du:**
- Alle $n$ verschiedenen $n$-ten Wurzeln einer komplexen Zahl bestimmen
- Einheitswurzeln auf einem Kreis visualisieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Wurzelformel: $z_k = |w|^{1/n} e^{i(\varphi + 2\pi k)/n}$ für $k = 0, 1, \ldots, n-1$
- [HOCH] Anzahl: genau $n$ verschiedene $n$-te Wurzeln (Fundamentalsatz der Algebra)
- [HOCH] Geometrisch: regelmäßiges $n$-Eck auf Kreis mit Radius $|w|^{1/n}$
- [HOCH] Winkelabstand zwischen Wurzeln: $2\pi/n$
- [HOCH] Einheitswurzeln ($w=1$): $z_k = e^{i 2\pi k/n}$ — Ecken eines regelmäßigen $n$-Ecks
- [MITTEL] Hauptwurzel $k=0$: die mit kleinstem positivem Argument

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Formwahl: $+/-$ → kartesisch, $\cdot/\div$ und Potenzen/Wurzeln → polar/exponential
- [HOCH] Impedanz ET: $Z_R = R$, $Z_L = i\omega L$, $Z_C = 1/(i\omega C)$
- [HOCH] Komplexer Zeiger für Schwingung $x(t) = \text{Re}(A e^{i\omega t})$
- [HOCH] Quadratische Gleichung in $\mathbb{C}$: Diskriminante $<0$ liefert komplexes konj. Paar
- [HOCH] $z \cdot \bar z = |z|^2$ (Betrag-Quadrat aus Multiplikation mit Konjugiertem)
- [MITTEL] Argumente beim Dividieren: $\arg(z_1/z_2) = \arg(z_1) - \arg(z_2)$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Polarform & Multiplikation `komz-pruefung-2` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Komplexe Zahlen in Polarform umrechnen
- [PRÜFUNG] Multiplikation und Division in Exponentialform
- [PRÜFUNG] Argument im Hauptwert angeben

**Kleine Themen (Sub-Goals):**
- [HOCH] Kartesisch → Polar: $r = \sqrt{a^2+b^2}$, $\varphi = \text{atan2}(b,a) \in (-\pi, \pi]$
- [HOCH] Multiplikation: Beträge mal, Argumente plus (mod $2\pi$)
- [HOCH] Division: Beträge durch, Argumente minus
- [HOCH] Quadrantenmerker: $-i$ hat $\varphi = -\pi/2$, $-1$ hat $\varphi = \pi$
- [MITTEL] Argument-Hauptwert wählen (sonst Punkte-Abzug bei nicht-eindeutiger Antwort)

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Wurzeln & Gleichungen `komz-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Alle n-ten Wurzeln einer komplexen Zahl berechnen
- [PRÜFUNG] Komplexe Gleichungen (z.B. $z^n = a$) lösen
- [PRÜFUNG] Impedanz-Berechnungen in der Elektrotechnik

**Kleine Themen (Sub-Goals):**
- [HOCH] Gleichung $z^n = w$: **alle $n$** Wurzeln angeben (Fundamentalsatz)
- [HOCH] Wurzelformel in Polarform $w = r e^{i\varphi}$: $z_k = r^{1/n} e^{i(\varphi + 2\pi k)/n}$
- [HOCH] Impedanz-Gesamt bei Reihe: $Z = R + i\omega L - i/(\omega C)$
- [HOCH] Scheinwiderstand $|Z| = \sqrt{R^2 + X^2}$ mit Reaktanz $X = \omega L - 1/(\omega C)$
- [HOCH] Resonanz: $\omega_0 = 1/\sqrt{LC}$ (Imaginärteil der Impedanz = 0)
- [MITTEL] Phasenwinkel $\arg(Z) = \arctan(X/R)$: Spannungs- vs. Stromphasenlage

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Taylor: $f(x) = \sum f^{(n)}(x_0)(x-x_0)^n/n!$
- [HOCH] Standardreihen: $e^x, \sin x, \cos x, \ln(1+x), 1/(1-x)$ auswendig
- [HOCH] Geometrische Reihe: $\sum q^n = 1/(1-q)$ für $|q| < 1$
- [HOCH] Restglied Lagrange: $R_n = f^{(n+1)}(\xi)(x-x_0)^{n+1}/(n+1)!$
- [HOCH] Konvergenzradius $R$: via Quotienten- oder Wurzelkriterium bestimmen
- [MITTEL] Anwendung: Approximation, Grenzwerte mit Taylor (Alternative zu L'Hôpital)

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Konvergenzkriterien & Potenzreihen `rf-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Quotientenkriterium anwenden
- [PRÜFUNG] Konvergenzradius einer Potenzreihe berechnen
- [PRÜFUNG] Majoranten- und Minorantenkriterium kennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Quotientenkriterium: $L = \lim |a_{n+1}/a_n|$ — $L < 1$ konv., $L > 1$ div., $L = 1$ unentsch.
- [HOCH] Wurzelkriterium: $L = \lim \sqrt[n]{|a_n|}$ — gleiche Regel
- [HOCH] Majorantenkriterium: $|a_n| \leq b_n$, $\sum b_n$ konv. → $\sum a_n$ abs. konv.
- [HOCH] Konvergenzradius: $R = 1/\limsup \sqrt[n]{|a_n|}$ (Cauchy-Hadamard)
- [HOCH] Leibniz-Kriterium für alternierende Reihe: $a_n \searrow 0 \Rightarrow$ konv.
- [MITTEL] Absolut vs. bedingt konvergent: $\sum |a_n|$ konv. (absolut) stärker als $\sum a_n$ konv.

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Taylor-Restglied & Näherungen `rf-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Restglied nach Lagrange abschätzen
- [PRÜFUNG] Taylor-Näherung für Berechnungen nutzen
- [PRÜFUNG] Fehler einer Taylor-Näherung nach oben abschätzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Lagrange-Restglied: $|R_n(x)| \leq M \cdot |x-x_0|^{n+1}/(n+1)!$ mit $M = \max |f^{(n+1)}|$
- [HOCH] Taylor-Fehler sinkt mit $1/(n+1)!$ — exponentiell bessere Näherung
- [HOCH] Linearisierung (n=1): $f(x) \approx f(x_0) + f'(x_0)(x-x_0)$
- [HOCH] Fehlerschätzung Sinus/Cosinus: nächster Term liefert obere Schranke
- [MITTEL] Taylor-Polynom-Grad via geforderter Genauigkeit $|R_n| < \epsilon$ bestimmen

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Torsionsspannung: $\tau_\text{max} = M_T/W_p$
- [HOCH] Polares Widerstandsmoment Kreisquerschnitt: $W_p = \pi d^3/16$
- [HOCH] Verdrehwinkel: $\varphi = M_T L/(G I_p)$ mit $I_p = \pi d^4/32$
- [MITTEL] Schubmodul Stahl: $G \approx 80\,000$ MPa (ca. $E/(2(1+\nu))$)
- [HOCH] Reiner Schub (Niet, Bolzen): $\tau = F/A$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Knicken `fest-1-4` · 12 min

**Nach dieser Lesson kannst du:**
- Eulersche Knicklast berechnen
- Einspannbeiwert β anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Euler-Knicklast: $F_{ki} = \pi^2 E I/(\beta L)^2$
- [HOCH] Einspannbeiwerte: $\beta = 1$ gelenkig/gelenkig, $\beta = 2$ eingespannt/frei, $\beta = 0{,}5$ beidseitig eingespannt
- [HOCH] Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)
- [MITTEL] Schlankheitsgrad $\lambda = \beta L/i$ mit Trägheitsradius $i = \sqrt{I/A}$
- [MITTEL] Euler nur für elastisches Knicken ($\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Biegung und Torsion

##### Biegespannung `fest-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Biegemoment und Widerstandsmoment verbinden
- Kritische Randfaser erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Biegespannung: $\sigma_b = M_b/W_b$
- [HOCH] Axiales Widerstandsmoment Rechteck: $W_b = bh^2/6$
- [HOCH] Kreisquerschnitt: $W_b = \pi d^3/32$
- [HOCH] Spannungsverteilung linear im Querschnitt: Null in neutraler Faser, max. am Rand
- [MITTEL] $\sigma_b = M_b y/I$ für beliebige Stelle $y$ von neutraler Faser

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Sicherheitszahl `fest-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Zulässige Spannung berechnen
- Nachweis gegen Versagen formulieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Zulässige Spannung: $\sigma_\text{zul} = R/S$
- [HOCH] Festigkeitsnachweis: $\sigma_\text{vorh} \leq \sigma_\text{zul}$
- [MITTEL] Typische Sicherheitszahlen: $S = 1{,}5$ (zäh, statisch) bis $S = 4$ (dynamisch, spröde)
- [HOCH] Referenz-Kennwerte: $R_e$ (Streckgrenze, zäh), $R_m$ (Zugfestigkeit, spröde)
- [HOCH] Größeres $S$ → kleineres $\sigma_\text{zul}$ (mehr Sicherheit = weniger Auslastung erlaubt)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Mohr'scher Spannungskreis `fest-2-3` · 12 min

**Nach dieser Lesson kannst du:**
- Mittelpunkt und Radius des Mohr-Kreises berechnen
- Hauptspannungen aus dem Mohr-Kreis ablesen

**Kleine Themen (Sub-Goals):**
- [HOCH] Mittelpunkt: $\sigma_M = (\sigma_x + \sigma_y)/2$
- [HOCH] Radius: $R = \sqrt{((\sigma_x - \sigma_y)/2)^2 + \tau_{xy}^2}$
- [HOCH] Hauptspannungen: $\sigma_{1,2} = \sigma_M \pm R$
- [HOCH] Max. Schubspannung: $\tau_\text{max} = R$
- [MITTEL] Hauptachsenwinkel: $\tan(2\varphi) = 2\tau_{xy}/(\sigma_x - \sigma_y)$
- [MITTEL] Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Wechselfestigkeit und Betriebsfestigkeit `fest-2-4` · 12 min

**Nach dieser Lesson kannst du:**
- Mittel- und Ausschlagspannung berechnen
- Goodman-Nachweis anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Mittelspannung: $\sigma_m = (\sigma_\text{max} + \sigma_\text{min})/2$
- [HOCH] Ausschlagspannung: $\sigma_a = (\sigma_\text{max} - \sigma_\text{min})/2$
- [HOCH] Goodman-Kriterium: $\sigma_a/\sigma_W + \sigma_m/R_m \leq 1$
- [HOCH] Wechselfestigkeit $\sigma_W$: Amplitudengrenze bei $\sigma_m = 0$
- [MITTEL] Schwingfestigkeit: Dauerfestigkeit, Zeitfestigkeit, Wöhlerlinie (N > 10⁶)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Kerbspannungen & Formzahl `fest-2-5` · 14 min

**Nach dieser Lesson kannst du:**
- Formzahl $\alpha_K$ als Verhältnis $\sigma_\text{max}/\sigma_\text{nenn}$ verstehen
- Typische Kerben (Bohrung, Absatz, Gewindegrund) einordnen
- Einfluss von Kerbwirkung auf die Dauerfestigkeit einschätzen

**Kleine Themen (Sub-Goals):**
- [HOCH] Formzahl: $\alpha_K = \sigma_\text{max}/\sigma_\text{nenn}$ (rein geometrisch)
- [HOCH] Kerbwirkungszahl $\beta_K \leq \alpha_K$ (werkstoffabhängig, bei zähen kleiner)
- [MITTEL] Typische Werte: Welleabsatz scharf $\alpha_K = 2$–3, Gewindegrund $\alpha_K = 3$–5
- [HOCH] Maßnahmen: Verrundung ($r \uparrow$), Oberflächengüte, Druckeigenspannungen
- [HOCH] Dauerfestigkeit mit Kerbe: $\sigma_{W,K} = \sigma_W/\beta_K$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Festigkeit: Prüfungsaufgaben `fest-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Kombinierte Beanspruchung berechnen
- Sicherheitsnachweis durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] Kombinierte Beanspruchung: Vergleichsspannung nach GEH (Mises) oder NH
- [HOCH] Mises: $\sigma_v = \sqrt{\sigma^2 + 3\tau^2}$ für Zug+Torsion
- [HOCH] Nachweis: $\sigma_v \leq R_e/S$ bzw. $R_m/S$
- [HOCH] Querschnitts-Design: Welle dimensionieren aus gegebenen $M_b$, $M_T$
- [HOCH] Sicherheit $S = R/\sigma_v \geq S_\text{soll}$ als Ergebnis angeben

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Torsion, Knicken & Wechselfestigkeit `fest-3-2` · 12 min

**Nach dieser Lesson kannst du:**
- Torsions- und Knickberechnung kombinieren
- Goodman-Nachweis mit Sicherheit durchführen

**Kleine Themen (Sub-Goals):**
- [HOCH] Torsionsspannung in Welle: $\tau = M_T/W_p$, $W_p = \pi d^3/16$
- [HOCH] Knickung: Euler $F_{ki} = \pi^2 EI/(\beta L)^2$, $\beta$ aus Lagerung
- [HOCH] Goodman: $\sigma_a/\sigma_W + \sigma_m/R_m \leq 1/S$
- [HOCH] Werkstoff S235: Mindeststreckgrenze $R_e = 235$ MPa
- [MITTEL] Schlankheitsgrad prüfen vor Euler: $\lambda > \lambda_0$ sonst Tetmajer/Johnson

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

**Kleine Themen (Sub-Goals):**
- [HOCH] 1. Hauptsatz geschlossen: $\Delta U = Q - W$ (Q zugeführt, W abgegeben)
- [HOCH] 1. Hauptsatz offen (stationär): $\dot Q + \dot W_t = \dot m (h_2 - h_1)$
- [HOCH] Vorzeichenkonvention: Q, W zugeführt > 0
- [HOCH] Innere Energie $U$ Zustandsgröße, Q und W Prozessgrößen
- [MITTEL] Technische Arbeit $W_t = -\int V dp$ vs. Volumenarbeit $W = \int p dV$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Wirkungsgrad `thermo-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Wirkungsgrad berechnen
- Verluste interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Wirkungsgrad: $\eta = E_\text{nutz}/E_\text{zu} \leq 1$
- [HOCH] 2. Hauptsatz: $\eta < 1$ für Wärmekraftmaschine (Entropieargument)
- [HOCH] Carnot-Grenze: $\eta \leq \eta_C = 1 - T_\text{kalt}/T_\text{warm}$ (K!)
- [MITTEL] Kälteleistungszahl: $\varepsilon_K = Q_\text{kalt}/W$ (kann > 1 sein!)
- [MITTEL] Wärmepumpe: $\varepsilon_{WP} = Q_\text{warm}/W = \varepsilon_K + 1$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Kreisprozesse `thermo-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Carnot-Wirkungsgrad berechnen
- Otto-Wirkungsgrad aus Verdichtungsverhältnis bestimmen
- Kreisprozesse als thermodynamische Grundlage verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Carnot: $\eta_C = 1 - T_\text{kalt}/T_\text{warm}$ (in Kelvin!)
- [HOCH] Otto-Prozess: $\eta_O = 1 - \varepsilon^{1-\gamma}$ mit Verdichtung $\varepsilon = V_1/V_2$
- [MITTEL] Diesel-Prozess: etwas anderer Wirkungsgrad (Einspritzverhältnis)
- [MITTEL] Rankine/Clausius-Rankine: Dampfkraftwerk, Enthalpiewerte aus h-s-Diagramm
- [HOCH] Im pV-Diagramm: Fläche = Nutzarbeit pro Umlauf

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Wärmeübertragung `thermo-2-4` · 15 min

**Nach dieser Lesson kannst du:**
- Wärmeleitung nach Fourier berechnen
- k-Wert einer mehrlagigen Wand bestimmen
- Wärmeübergang und Wärmedurchgang unterscheiden

**Kleine Themen (Sub-Goals):**
- [HOCH] Fourier-Wärmeleitung: $\dot Q = \lambda A \Delta T/d$
- [HOCH] Wärmeübergang (Newton): $\dot Q = \alpha A \Delta T$
- [HOCH] k-Wert (mehrlagige Wand): $1/k = 1/\alpha_1 + \sum d_i/\lambda_i + 1/\alpha_2$
- [MITTEL] Strahlung: $\dot Q = \varepsilon \sigma A (T_1^4 - T_2^4)$ (Stefan-Boltzmann)
- [HOCH] Kleiner $k$-Wert = gute Dämmung

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Thermo: Prüfungsaufgaben `thermo-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Zustandsänderungen berechnen
- Kreisprozesse analysieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Isotherme Expansion: $W = nRT \ln(V_2/V_1)$
- [HOCH] Isobar: $W = p \Delta V$, $Q = n c_p \Delta T$
- [HOCH] Isochor: $W = 0$, $Q = n c_v \Delta T$
- [HOCH] Adiabatisch: $pV^\gamma = $ const, $TV^{\gamma-1} = $ const
- [HOCH] Zustandsgleichung ideales Gas: $pV = nRT$ (oder $p = \rho R_s T$)

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Kreisprozesse & Wärmeübertragung `thermo-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Carnot- und Otto-Wirkungsgrad berechnen
- Wärmebilanz eines Kraftwerks aufstellen
- Wärmeleitung und k-Wert kombiniert anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Leistung aus Wärmestrom: $P_\text{nutz} = \dot Q_\text{zu} \cdot \eta$
- [HOCH] Wärmebilanz Kraftwerk: $\dot Q_\text{ab} = \dot Q_\text{zu} - P_\text{nutz}$
- [HOCH] Otto-Wirkungsgrad: $\eta_O = 1 - \varepsilon^{1-\gamma}$, $\gamma \approx 1{,}4$ für Luft
- [HOCH] Wärmestrom durch Wand: $\dot Q = k A \Delta T$
- [HOCH] Carnot als theoretische Obergrenze: reale Wirkungsgrade sind kleiner

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Kehlnaht-Spannung: $\tau = F/(a \cdot l_w)$
- [HOCH] Nahtdicke Kehlnaht: $a \approx 0{,}7 \cdot h$ (Schenkellänge $h$)
- [MITTEL] Verbindungsarten: Schweißen (stoffschlüssig, dauerhaft), Schrauben (lösbar)
- [MITTEL] Tragende Nahtlänge $l_w$ = geometrische Länge minus Endkrater (≈ $l - 2a$)
- [MITTEL] Zulässige Schweißnahtspannung = Grundwerkstoff $\times$ Schweißfaktor (z.B. 0{,}8)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### Wellen, Lager, Zahnräder

##### Wellen und Lager `melem-2-1` · 12 min

**Nach dieser Lesson kannst du:**
- Aufgaben von Wellen und Lagern unterscheiden
- Radial- und Axiallasten erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Welle überträgt Drehmoment und Rotation
- [HOCH] Radiallast: quer zur Wellenachse; Axiallast: entlang Wellenachse
- [HOCH] Lagerfunktionen: Führung (radial/axial) + Stützung (Kraftaufnahme)
- [MITTEL] Fest-Los-Lagerung: ein Lager fixiert axial, anderes erlaubt Längsdehnung
- [MITTEL] Lagerarten: Rillenkugel-, Schrägkugel-, Kegelrollen-, Pendelrollenlager

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Zahnräder und Übersetzung `melem-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Übersetzungsverhältnis bestimmen
- Drehzahländerung qualitativ deuten

**Kleine Themen (Sub-Goals):**
- [HOCH] Übersetzung: $i = z_2/z_1 = n_1/n_2 = d_2/d_1$
- [HOCH] Mehrstufiges Getriebe: $i_\text{ges} = i_1 \cdot i_2 \cdots$
- [HOCH] Drehmoment-Wandlung: $M_2 = i \cdot M_1 \cdot \eta$ (Untersetzung steigert Moment)
- [HOCH] Umfangskraft $F_t = 2M/d$
- [MITTEL] Modul $m = d/z$ — Standardgröße für Zahnrad-Geometrie

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Lagerlebensdauer `melem-2-3` · 14 min

**Nach dieser Lesson kannst du:**
- L10-Lebensdauer berechnen
- Dynamische Tragzahl C interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] L10-Lebensdauer: $L_{10} = (C/P)^p$ Mio. Umdrehungen
- [HOCH] Exponent: $p = 3$ Kugellager, $p = 10/3$ Rollenlager
- [HOCH] In Stunden: $L_{10h} = L_{10} \cdot 10^6/(60 \cdot n)$
- [HOCH] C = dyn. Tragzahl (Katalog), P = äquivalente dyn. Last ($P = X F_r + Y F_a$)
- [MITTEL] L10 = 10 % Ausfallwahrscheinlichkeit (90 % der Lager halten länger)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### ME: Prüfungsaufgaben `melem-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Zahnradberechnungen durchführen
- Wellenauslegung verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Leistung: $P = M \omega = M (2\pi n/60)$
- [HOCH] Umfangskraft am Zahnrad: $F_t = 2M/d$
- [HOCH] Mehrstufige Übersetzung: $i_\text{ges} = \prod i_i$
- [HOCH] Abtriebsdrehzahl: $n_2 = n_1/i_\text{ges}$
- [HOCH] Drehmoment steigt bei Untersetzung: $M_2 = i M_1 \eta$

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Schweißnähte, Lager & Lebensdauer `melem-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Schweißnahtspannungen berechnen
- Lagerlebensdauer bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Kehlnaht: $\tau = F/(a l_w)$, $a = 0{,}7 h$
- [HOCH] Lagerlebensdauer: $L_{10} = (C/P)^p$, $p = 3$ (Kugel) / $p = 10/3$ (Rolle)
- [HOCH] Einheiten-Check: L10 in Mio. U, L10h in Stunden nach $\times 10^6/(60n)$
- [HOCH] Leistungs-Drehmoment-Umrechnung $\omega = 2\pi n/60$
- [MITTEL] Plausibilitäts-Check: typische Lagerlebensdauer 5000–50000 h

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Kritische Stellen: $\nabla f = \vec 0$ (alle partiellen Ableitungen null)
- [HOCH] Hesse-Matrix $H$: $\det H > 0$ und $f_{xx} > 0$ → Min; $\det H > 0, f_{xx} < 0$ → Max
- [HOCH] Sattelpunkt: $\det H < 0$ (Hesse indefinit)
- [HOCH] Fehlerfortpflanzung (linear): $\Delta f \approx |\partial f/\partial x_1| \Delta x_1 + \ldots$
- [HOCH] Gauß'sche Fehlerfortpflanzung (statistisch): $\sigma_f^2 = \sum (\partial f/\partial x_i)^2 \sigma_i^2$
- [HOCH] Lagrange: $\nabla f = \lambda \nabla g$ bei Nebenbedingung $g = 0$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Fehlerfortpflanzung & totales Differential `mdim-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Totales Differential $df = f_x dx + f_y dy$ berechnen
- [PRÜFUNG] Maximale Fehlerabschätzung mit Teilfehlern
- [PRÜFUNG] Gauß'sche Fehlerfortpflanzung anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Totales Differential: $df = f_x dx + f_y dy + \ldots$
- [HOCH] Maximaler Fehler (linear): $|\Delta f| \leq \sum |f_{x_i}| |\Delta x_i|$ (obere Schranke)
- [HOCH] Gauß'sche (statistisch): $\sigma_f = \sqrt{\sum (f_{x_i})^2 \sigma_{x_i}^2}$
- [HOCH] Relativer Fehler: $|\Delta f/f| \leq \sum |\Delta x_i/x_i|$ bei Produkten
- [MITTEL] Fehlerquelle mit dem größten $f_{x_i} \Delta x_i$ dominiert — dort zuerst verbessern

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Lagrange & Gesamtaufgaben `mdim-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Lagrange-Multiplikatoren vollständig durchrechnen
- [PRÜFUNG] Typ des Extremums mit Hesse-Matrix bestimmen
- [PRÜFUNG] Gemischte Aufgaben aus partieller Ableitung, Extrema, Fehler

**Kleine Themen (Sub-Goals):**
- [HOCH] Lagrange-LGS: $f_x = \lambda g_x$, $f_y = \lambda g_y$, $g = 0$ (3 Gl. für 3 Unb.)
- [HOCH] Hesse-Test: $D = f_{xx}f_{yy} - f_{xy}^2$; $D>0, f_{xx}>0$ Min; $D>0, f_{xx}<0$ Max; $D<0$ Sattel
- [MITTEL] Bei $D = 0$: keine Entscheidung via Hesse, höhere Ordnungen nötig
- [MITTEL] Mehrere NB: $\nabla f = \sum \lambda_i \nabla g_i$
- [HOCH] Richtungsableitung: $D_{\vec u} f = \nabla f \cdot \vec u / |\vec u|$
- [HOCH] Gradient zeigt in Richtung stärksten Anstiegs, Betrag = maximale Steigung

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Bisektion: linear, halbiert Intervall, garantiert konvergent bei Vorzeichenwechsel
- [HOCH] Newton: quadratisch konvergent, $x_{n+1} = x_n - f(x_n)/f'(x_n)$
- [HOCH] Trapezregel: Fehler $O(h^2)$; Simpson: Fehler $O(h^4)$
- [MITTEL] Konditionszahl $\kappa(A) = \|A\| \|A^{-1}\|$ — Stabilitätsindikator bei LGS
- [MITTEL] Maschinengenauigkeit $\epsilon \approx 2{,}22 \cdot 10^{-16}$ (double), Rundungsfehler ansammeln
- [HOCH] Abbruchkriterium: $|x_{n+1} - x_n| < \epsilon$ oder max. Iterationen

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Trapez, Simpson & Fehlerordnung `num-pruefung-2` · 20 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Trapezregel und Simpson-Regel mit mehreren Teilintervallen anwenden
- [PRÜFUNG] Fehlerordnung $\mathcal{O}(h^2)$ vs. $\mathcal{O}(h^4)$ vergleichen
- [PRÜFUNG] Anzahl der Teilintervalle für gegebene Genauigkeit bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Trapez: $T(h) = h[(f_0+f_n)/2 + \sum_{i=1}^{n-1} f_i]$
- [HOCH] Simpson: $S(h) = (h/3)[f_0 + 4\sum_{\text{ung.}} f_i + 2\sum_{\text{ger.}} f_i + f_n]$, $n$ gerade
- [HOCH] Fehler Trapez: $|E| \leq (b-a) h^2 \max|f''|/12$
- [HOCH] Fehler Simpson: $|E| \leq (b-a) h^4 \max|f^{(4)}|/180$
- [HOCH] Anzahl $n$ für Toleranz: Fehlerformel nach $h$ bzw. $n$ auflösen
- [MITTEL] Simpson exakt für Polynome bis Grad 3 (trotz Ordnung 4)

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Kombinierte Aufgaben & Abbruchkriterien `num-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Verfahren dem Problem zuordnen
- [PRÜFUNG] Abbruchkriterium korrekt anwenden
- [PRÜFUNG] Vor- und Nachteile der Verfahren benennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Methodenwahl-Matrix: Nullstelle → Newton/Bisekt.; Integral → Simpson; LGS → Gauß/LU
- [HOCH] Newton schlägt fehl bei $f' \approx 0$ → Bisektion als Fallback robust
- [HOCH] Abbruchkriterium: absolut $|x_{n+1} - x_n| < \epsilon_{\text{abs}}$ oder relativ
- [MITTEL] Euler-Verfahren für DGL: explizit instabil bei steifen Systemen; implizit stabil
- [MITTEL] Runge-Kutta 4 (RK4): Fehler $O(h^4)$, Standard für DGL-Anfangswertprobleme

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

**Kleine Themen (Sub-Goals):**
- [HOCH] p-Wert < $\alpha$ → $H_0$ verwerfen (signifikantes Ergebnis)
- [HOCH] 95%-Konfidenzintervall Mittelwert: $\bar x \pm 1{,}96 \cdot \sigma/\sqrt n$ (normalverteilt)
- [HOCH] Fehler 1. Art ($\alpha$): $H_0$ verworfen obwohl wahr; 2. Art ($\beta$): $H_0$ behalten obwohl falsch
- [MITTEL] t-Test bei unbekannter Varianz: $t = (\bar x - \mu_0)/(s/\sqrt n)$
- [MITTEL] Einseitig vs. zweiseitig: einseitiger Test nutzt $z_\alpha$, zweiseitig $z_{\alpha/2}$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] t-Test: Mittelwertvergleich, Verteilung bei unbekannter Varianz
- [HOCH] $\chi^2$-Test: Anpassung an Verteilung oder Unabhängigkeitsprüfung
- [HOCH] Testentscheidung: Prüfgröße mit Quantil vergleichen oder p-Wert mit $\alpha$
- [MITTEL] Freiheitsgrade bei t-Test $df = n - 1$, bei $\chi^2$-Anpassung $df = k - 1 - r$
- [MITTEL] Konfidenzintervall-Breite $\propto 1/\sqrt n$ — Halbierung braucht 4× Stichprobe

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Normalverteilung & Standardisierung `stat-pruefung-2` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] Standardisierung $Z=(X-\mu)/\sigma$ durchführen
- [PRÜFUNG] Wahrscheinlichkeiten mit $\Phi$-Tabelle berechnen
- [PRÜFUNG] 68-95-99,7%-Regel anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Standardisierung: $Z = (X - \mu)/\sigma \sim N(0,1)$
- [HOCH] $\Phi(-z) = 1 - \Phi(z)$ (Symmetrie)
- [HOCH] 68-95-99,7-Regel: $\pm 1\sigma \to 68\%$, $\pm 2\sigma \to 95\%$, $\pm 3\sigma \to 99{,}7\%$
- [HOCH] Zentrale Quantile: $z_{0{,}025} = 1{,}96$, $z_{0{,}05} = 1{,}645$, $z_{0{,}01} = 2{,}576$
- [HOCH] Rechts-, links-, beidseitiger Bereich: $P(X > a), P(X < a), P(a < X < b)$

*Aufgaben-Coverage:* 10 gesamt · 9 manuell / 1 auto-supp · 1 mit 4-Block-Erklärung

##### Prüfung: Konfidenzintervall & Gesamtaufgaben `stat-pruefung-3` · 22 min

**Nach dieser Lesson kannst du:**
- [PRÜFUNG] 95%-Konfidenzintervall für Mittelwert berechnen
- [PRÜFUNG] Stichprobenmittel und -standardabweichung berechnen
- [PRÜFUNG] Stichprobenumfang für gewünschte Präzision bestimmen

**Kleine Themen (Sub-Goals):**
- [HOCH] Stichprobenmittel $\bar x = (1/n) \sum x_i$, Stichproben-SD $s = \sqrt{\sum(x_i - \bar x)^2 /(n-1)}$
- [HOCH] 95%-KI: $\bar x \pm z_{0{,}025} \cdot \sigma/\sqrt n$ (Normalverteilung, $\sigma$ bekannt)
- [HOCH] t-KI bei $\sigma$ unbekannt: $\bar x \pm t_{n-1; 0{,}025} \cdot s/\sqrt n$
- [HOCH] Stichprobenumfang: $n \geq (z_{\alpha/2} \sigma/\Delta)^2$ für Halbbreite $\Delta$
- [MITTEL] Teiler $n-1$ bei Stichproben-Varianz (Bessel-Korrektur, erwartungstreu)

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

**Kleine Themen (Sub-Goals):**
- [HOCH] FT-Definition: $F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$
- [HOCH] Rücktransformation: $f(t) = (1/2\pi) \int F(\omega) e^{i\omega t} d\omega$
- [HOCH] Wichtige Paare: Rechteckpuls ↔ Sinc, Gauß ↔ Gauß, $\delta(t)$ ↔ 1
- [HOCH] Linearität: $\alpha f + \beta g \leftrightarrow \alpha F + \beta G$
- [HOCH] Verschiebungssatz: $f(t-t_0) \leftrightarrow F(\omega) e^{-i\omega t_0}$
- [HOCH] Ableitungsregel: $f'(t) \leftrightarrow i\omega F(\omega)$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Definition: $\mathcal L\{f\}(s) = \int_0^\infty f(t) e^{-st} dt$
- [HOCH] Wichtige Paare: $1 \leftrightarrow 1/s$, $t \leftrightarrow 1/s^2$, $e^{at} \leftrightarrow 1/(s-a)$
- [HOCH] $\sin(\omega t) \leftrightarrow \omega/(s^2 + \omega^2)$, $\cos(\omega t) \leftrightarrow s/(s^2 + \omega^2)$
- [MITTEL] Konvergenzbereich (ROC): $\text{Re}(s) > \sigma_0$ — hängt vom Signal ab
- [HOCH] Linearität: $\mathcal L\{\alpha f + \beta g\} = \alpha F + \beta G$

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Laplace zur DGL-Lösung `fl-2-2` · 16 min

**Nach dieser Lesson kannst du:**
- DGL mit Laplace lösen (Transformieren, algebraisch umformen, rücktransformieren)
- Übertragungsfunktion $G(s)$ verstehen

**Kleine Themen (Sub-Goals):**
- [HOCH] Ableitungsregel: $\mathcal L\{y'\} = sY - y(0)$, $\mathcal L\{y''\} = s^2 Y - s y(0) - y'(0)$
- [HOCH] DGL-Lösung: transformieren → algebraische Gl. in $Y(s)$ → PBZ → rücktransformieren
- [HOCH] Übertragungsfunktion $G(s) = Y(s)/U(s)$ bei verschwindenden AB
- [HOCH] Partialbruchzerlegung nötig für Rücktransformation komplexer Ausdrücke
- [HOCH] Stabilität aus Polstellen von $G(s)$: alle $\text{Re}(p_i) < 0$ → BIBO-stabil
- [MITTEL] Endwertsatz: $\lim_{t\to\infty} y(t) = \lim_{s\to 0} s Y(s)$ (falls Limes existiert)

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

**Unit-Lernziele:**
- Mehrstufige Prüfungsaufgaben mit Kombination aus Fourier-Zerlegung, Laplace und Rücktransformation
- Stabilität von LTI-Systemen über die Lage der Pole in der komplexen Ebene entscheiden
- Übertragungsfunktion $G(s)$ bilden, Antwort auf Sprung/Impuls berechnen und interpretieren

##### Fourier Prüfungsaufgaben `fl-3-1` · 22 min

**Nach dieser Lesson kannst du:**
- Fourier-Reihen und Spektrum in Prüfungsaufgaben anwenden

**Kleine Themen (Sub-Goals):**
- [HOCH] Symmetrie nutzen: gerade Funktion → nur Kosinusreihe, ungerade → nur Sinusreihe
- [HOCH] Koeffizienten $a_n = (2/T)\int_0^T f(t)\cos(n\omega t)dt$, analog $b_n$
- [HOCH] Konstantes Glied $a_0/2$ = Mittelwert der Funktion über eine Periode
- [MITTEL] Parseval: Energie im Zeit- und Frequenzbereich gleich
- [MITTEL] Konvergenz: punktweise bei Mittelwert-Sprung, gleichmäßig bei stetiger Fortsetzung
- [HOCH] Spektrum periodisch: diskrete Linien bei $n\omega_0$; aperiodisch: kontinuierlich $F(\omega)$

*Aufgaben-Coverage:* 10 gesamt · 8 manuell / 2 auto-supp · 0 mit 4-Block-Erklärung

##### Laplace Prüfungsaufgaben `fl-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Übertragungsfunktionen berechnen
- DGL per Laplace lösen
- Pol-Nullstellen-Stabilität beurteilen

**Kleine Themen (Sub-Goals):**
- [HOCH] Sprungantwort: $Y(s) = G(s)/s$, Partialbruch + Rücktransformation
- [HOCH] Impulsantwort: $Y(s) = G(s)$ → direkt rücktransformieren
- [HOCH] Stabilität: alle Pole in linker s-Halbebene ($\text{Re}(p_i) < 0$)
- [HOCH] Pol bei $s = -a$ → $e^{-at}$ in Zeitdomäne, konjugiert komplex → gedämpfte Schwingung
- [HOCH] PT1: $G(s) = K/(1 + Ts)$, Zeitkonstante $T$, Verstärkung $K$
- [MITTEL] PT2: $G(s) = K\omega_0^2/(s^2 + 2D\omega_0 s + \omega_0^2)$, Dämpfungsgrad $D$

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

**Kleine Themen (Sub-Goals):**
- [HOCH] Kontinuität (inkompressibel): $A_1 v_1 = A_2 v_2 = \dot V$
- [HOCH] Volumenstrom: $\dot V = A \cdot v$, Einheit m³/s
- [HOCH] Massenstrom (kompressibel): $\dot m = \rho A v$
- [HOCH] Querschnitt kleiner → Geschwindigkeit größer ($v \propto 1/A$)
- [HOCH] Umrechnung: Kreisquerschnitt $A = \pi d^2/4$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Bernoulli-Gleichung `fluid-2-2` · 12 min

**Nach dieser Lesson kannst du:**
- Energieformen in Strömungen unterscheiden
- Druck- und Geschwindigkeitsanteile deuten

**Kleine Themen (Sub-Goals):**
- [HOCH] Bernoulli: $p + \tfrac{1}{2}\rho v^2 + \rho g z = $ const (entlang Stromlinie)
- [HOCH] Drei Druckarten: statisch $p$, dynamisch $\tfrac{1}{2}\rho v^2$, geodätisch $\rho g z$
- [HOCH] Voraussetzungen: inkompressibel, stationär, reibungsfrei
- [HOCH] Torricelli: $v = \sqrt{2gh}$ (Ausflussgeschwindigkeit aus Behälter)
- [MITTEL] Mit Verlusten: $+ \Delta p_V$ auf rechter Seite

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Rohrströmung und Druckverlust `fluid-2-3` · 16 min

**Nach dieser Lesson kannst du:**
- Druckverlust nach Hagen-Poiseuille berechnen
- Darcy-Weisbach-Gleichung anwenden
- Strömungsregime mit Reynolds-Zahl beurteilen

**Kleine Themen (Sub-Goals):**
- [HOCH] Darcy-Weisbach: $\Delta p = \lambda (L/d)(\rho v^2/2)$
- [HOCH] Reynolds-Zahl: $Re = \rho v d/\mu$; laminar $<2300$, turbulent $>4000$
- [HOCH] Hagen-Poiseuille (laminar): $\Delta p = 128 \mu L \dot V/(\pi d^4)$
- [MITTEL] Laminares Profil parabolisch, turbulent näherungsweise Blockprofil mit Randschicht
- [MITTEL] Hydraulischer Durchmesser $d_h = 4A/U$ für Nicht-Kreisquerschnitte

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Ähnlichkeitsgesetze und Pumpen `fluid-2-4` · 16 min

**Nach dieser Lesson kannst du:**
- Dimensionslose Kennzahlen einordnen
- Pumpengesetze auf geänderte Drehzahl anwenden
- Leistungsabhängigkeit von der Drehzahl erkennen

**Kleine Themen (Sub-Goals):**
- [HOCH] Pumpengesetze: $\dot V \propto n$, $H \propto n^2$, $P \propto n^3$
- [HOCH] Reynolds für Ähnlichkeit: Modell- und Prototyp-Re gleich halten
- [MITTEL] Froude-Zahl: $Fr = v/\sqrt{gL}$ (Schwerewellen, offene Gerinne)
- [MITTEL] Euler-Zahl: $Eu = \Delta p/(\rho v^2)$ (Druckabfall)
- [MITTEL] Leistung verdoppeln bedeutet Drehzahl $\sqrt[3]{2} \approx 1{,}26$-fach

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 3 mit 4-Block-Erklärung

##### Moody-Diagramm & Rohrreibung praktisch `fluid-2-5` · 15 min

**Nach dieser Lesson kannst du:**
- Rohrreibungszahl $\lambda$ in Abhängigkeit von $\text{Re}$ und $\varepsilon/d$ bestimmen
- Laminar-Formel $\lambda = 64/\text{Re}$ und Blasius-Formel sicher anwenden
- Druckverlust aus $\lambda$, $L$, $d$, $v$, $\rho$ berechnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Laminar: $\lambda = 64/Re$ (unabhängig von Rauhigkeit)
- [HOCH] Turbulent glatt (Blasius, $Re < 10^5$): $\lambda = 0{,}316/Re^{0{,}25}$
- [MITTEL] Turbulent rau: Moody-Diagramm oder Colebrook-Gleichung
- [MITTEL] Relative Rauhigkeit $\varepsilon/d$: Materialkennwert aus Tabelle ablesen
- [MITTEL] Bei voll-turbulenter Strömung: $\lambda$ Re-unabhängig (nur $\varepsilon/d$)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Fluid: Prüfungsaufgaben `fluid-3-1` · 12 min

**Nach dieser Lesson kannst du:**
- Bernoulli-Aufgaben lösen
- Hydrostatik und Auftrieb kombinieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Bernoulli vollständig: $p_1 + \tfrac{1}{2}\rho v_1^2 + \rho g z_1 = p_2 + \ldots$
- [HOCH] Staudruck/Pitot: $v = \sqrt{2\Delta p/\rho}$
- [HOCH] Kontinuität + Bernoulli kombiniert für Düsen/Verengungen
- [HOCH] Torricelli-Ausfluss: $v = \sqrt{2gh}$ (freies Ausströmen unter Wasserhöhe)
- [HOCH] Reynolds-Zahl entscheidet Strömungsregime; laminar/turbulent bestimmt $\lambda$

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

##### Druckverlust, Pumpen & Ähnlichkeit `fluid-3-2` · 22 min

**Nach dieser Lesson kannst du:**
- Darcy-Weisbach für Rohrdruckverlust anwenden
- Pumpengesetze bei Drehzahländerung nutzen
- Bernoulli mit Verlusten kombinieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Erweiterte Bernoulli mit Verlust: $+ \Delta p_V$ auf Senkeseite
- [HOCH] Pumpenleistung: $P = \rho g \dot V H / \eta_P$
- [MITTEL] Reihenschaltung Rohre: $\Delta p_\text{ges} = \sum \Delta p_i$
- [MITTEL] Einzelverluste: $\Delta p = \zeta (\rho v^2/2)$ ($\zeta$ aus Tabelle für Krümmer, Ventile, \ldots)
- [MITTEL] Pumpenkennlinie × Anlagenkennlinie = Betriebspunkt

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

**Kleine Themen (Sub-Goals):**
- [HOCH] PID-Formel: $u(t) = K_P(e + \frac{1}{T_I}\int e dt + T_D \dot e)$
- [HOCH] P: schnell, bleibender Regelfehler; I: beseitigt Dauerfehler; D: antizipiert
- [HOCH] PID-Laplace: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$
- [HOCH] I-Anteil dominiert bei niedrigen Frequenzen, D-Anteil bei hohen
- [MITTEL] D rauschempfindlich → in Praxis mit Filterung: $T_D s/(1 + \alpha T_D s)$

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Stabilität `rt-2-2` · 14 min

**Nach dieser Lesson kannst du:**
- Stabilitätsbedingung (Pole in linker Halbebene) formulieren
- Hurwitz-Kriterium erklären
- Phasenrand und Amplitudenrand im Bodediagramm interpretieren

**Kleine Themen (Sub-Goals):**
- [HOCH] Stabilitätsbedingung: alle Pole in linker s-Halbebene ($\text{Re}(s_i) < 0$)
- [HOCH] Hurwitz notwendig: alle Koeffizienten $>0$ (kein Vorzeichenwechsel)
- [HOCH] Hurwitz hinreichend ab $n \geq 3$: Hurwitz-Determinanten $> 0$ prüfen
- [HOCH] Phasenrand $\varphi_R \geq 30°$, Amplitudenrand $A_R \geq 6$ dB (Praxisrichtwerte)
- [MITTEL] Pole auf $j\omega$-Achse: grenzstabil (ungedämpfte Schwingung)

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 0 mit 4-Block-Erklärung

##### Bodediagramm & Phasengang `rt-2-3` · 15 min

**Nach dieser Lesson kannst du:**
- Amplituden- und Phasengang typischer Übertragungsglieder kennen (P, I, D, PT1)
- Grenzfrequenz und $-3\,\text{dB}$-Punkt interpretieren
- Phasenreserve als Stabilitätsmaß lesen

**Kleine Themen (Sub-Goals):**
- [HOCH] Amplitudengang in dB: $A_\text{dB} = 20 \log_{10}|G|$
- [HOCH] Grundbausteine: P $0°$; I $-90°$, $-20$ dB/Dek; D $+90°$, $+20$ dB/Dek
- [HOCH] PT1 Grenzfrequenz $\omega_g = 1/T$, dort $|G| = -3$ dB
- [HOCH] Phasenreserve: $\varphi_R = 180° + \varphi(\omega_D)$ bei $|G_0| = 0$ dB
- [HOCH] Stabilitätsreserven: $\varphi_R > 30°$ akzeptabel, $> 60°$ sehr gut

*Aufgaben-Coverage:* 10 gesamt · 3 manuell / 7 auto-supp · 6 mit 4-Block-Erklärung

#### 🏁 Prüfungsaufgaben

##### Regelkreis & PID Prüfungsaufgaben `rt-3-1` · 22 min

**Nach dieser Lesson kannst du:**
- Stationäre Regelabweichung beim P-Regler berechnen
- Führungsübertragungsfunktion klausurfertig anwenden
- Systemtyp und Rampenfolge einordnen

**Kleine Themen (Sub-Goals):**
- [HOCH] Führungs-Übertragungsfunktion: $T(s) = G_0/(1+G_0)$ mit $G_0 = G_R G_S$
- [HOCH] Stationärer Regelfehler P-Regler: $e_\text{stat} = 1/(1+K_0)$
- [HOCH] I-Anteil erzwingt $e_\text{stat} = 0$ bei konstantem Sollwert
- [MITTEL] Typ $k$ eines Systems: Anzahl der Integratoren in $G_0$; bestimmt Folgevermögen
- [MITTEL] Rampenfolge: Typ 0 dauerhafter Fehler, Typ 1 Ausgleich, Typ 2 Beschleunigungsfolge

*Aufgaben-Coverage:* 10 gesamt · 4 manuell / 6 auto-supp · 0 mit 4-Block-Erklärung

## Coverage-Report (Backlog)

### Topics ohne `topicGoals` (0)
*Alle Topics haben Topic-Lernziele. 🎉*

### Lessons ohne `subGoals` (0 / 226)


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

*Generiert mit `scripts/generate-lernziele.js` am 2026-04-22. Siehe auch `CONTENT_OVERVIEW.md` (detaillierte Aufgaben-Tabellen) und `src/content/lehrplan/tu-wien-maschinenbau.md` (Original-Lehrplan TU Wien).*
