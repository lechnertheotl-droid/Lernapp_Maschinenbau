// ═══════════════════════════════════════════════════════════════════════════
// Differentialrechnung — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { [lessonId]: { [subGoalIndex]: Exercise[] } }
// Qualitätskontrakt (CLAUDE.md):
//   - Sub-Goal-Label wörtlich in der Frage zitieren
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints gestaffelt  ·  MC: wrongAnswerExplanations für alle falschen
//   - ≥ 5 Aufgaben pro Sub-Goal  ·  Typen-Rotation
//
// Workflow: gewünschten Lesson-Block unkommentieren → Aufgaben eintragen
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const ableitungSubGoalTasks = {

  // ── abl-1-1 (4 subGoals) ────────────────────────────────────────────────────
  // 'abl-1-1': {
  //   0: [], // Differenzenquotient → Differentialquotient als Grenzübergang
  //   1: [], // Tangentensteigung aus $f\
  //   2: [], // Notwendige Extremum-Bedingung $f\
  //   3: [], // Ableitung als Momentan-Änderungsrate physikalisch deuten
  // },

  // ── abl-1-2 (4 subGoals) ────────────────────────────────────────────────────
  // 'abl-1-2': {
  //   0: [], // Potenzregel $(x^n)\
  //   1: [], // Summenregel $(f+g)\
  //   2: [], // Wurzeln und Kehrwerte als Potenzen $x^{1/2}, x^{-1}$ ableiten
  //   3: [], // Konstanten und Konstante Faktoren richtig behandeln
  // },

  // ── abl-1-3 (4 subGoals) ────────────────────────────────────────────────────
  // 'abl-1-3': {
  //   0: [], // $(\\sin x)\
  //   1: [], // $(e^x)\
  //   2: [], // Allgemeine Exponential-/Logarithmusfunktion: $(a^x)\
  //   3: [], // Definitionsbereich beachten: $\\ln x$ nur für $x>0$, $\\sqrt x$ für $x \\ge
  // },

  // ── abl-1-4 (4 subGoals) ────────────────────────────────────────────────────
  // 'abl-1-4': {
  //   0: [], // Kettenregel: $(f(g(x)))\
  //   1: [], // Äußere Funktion identifizieren (die, die man zuletzt ausführt) und separat 
  //   2: [], // Standardfälle: $(e^{u(x)})\
  //   3: [], // Bei mehrfach verketteten Funktionen hierarchisch: erst äußerste Schale, dan
  // },

  // ── abl-1-5 (6 subGoals) ────────────────────────────────────────────────────
  // 'abl-1-5': {
  //   0: [], // Notwendige Bedingung für Extremum: $f\
  //   1: [], // Hinreichend: $f\
  //   2: [], // Bei $f\
  //   3: [], // Wendepunkt: $f\
  //   4: [], // Randextrema bei beschränktem Intervall $[a, b]$ nicht vergessen
  //   5: [], // Sattelpunkt = Wendepunkt mit waagrechter Tangente ($f\
  // },

  // ── abl-2-1 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-2-1': {
  //   0: [], // Formel: $(f \\cdot g)\
  //   1: [], // Klassischer Fehler: $(fg)\
  //   2: [], // Geometrische Motivation: Flächenänderung eines Rechtecks mit variablen Seit
  //   3: [], // Dreifaches Produkt: $(fgh)\
  //   4: [], // Nach dem Ableiten ausklammern und vereinfachen — Prüfer erwartet gekürzte F
  // },

  // ── abl-2-2 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-2-2': {
  //   0: [], // Formel: $(f/g)\
  //   1: [], // NAZ-Eselsbrücke: "**N**enner·**A**bl. **Z**ähler minus **Z**ähler·**A**bl. 
  //   2: [], // Nenner niemals ableiten ohne Vorzeichen: $f\
  //   3: [], // Alternative: $f/g = f \\cdot g^{-1}$ mit Produkt- und Kettenregel ableiten
  //   4: [], // Definitionsbereich: $g(x) \\neq 0$ (Polstellen gesondert betrachten)
  // },

  // ── abl-2-3 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-2-3': {
  //   0: [], // Formel: $[f(g(x))]\
  //   1: [], // Innere Funktion in äußerer Ableitung unverändert eingesetzt lassen
  //   2: [], // Mehrfachverkettung: Ableitungen von außen nach innen multiplizieren
  //   3: [], // Häufigste Anwendung: $(ax+b)^n$, $e^{ax}$, $\\sin(ax)$ — innere Ableitung $
  //   4: [], // Häufiger Fehler: innere Ableitung vergessen (z.B. $(\\sin 2x)\
  // },

  // ── abl-2-4 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-2-4': {
  //   0: [], // Äußerste Struktur identifizieren: Produkt, Quotient oder Verkettung?
  //   1: [], // Hierarchisch ableiten: erst äußerste Regel, dann innere Teile mit passender
  //   2: [], // Logarithmisches Ableiten bei $f(x)^{g(x)}$: $\\ln y = g \\ln f$, dann impli
  //   3: [], // Umformen vor dem Ableiten: $\\sqrt[n]{x}$ → $x^{1/n}$, $1/x^n$ → $x^{-n}$
  //   4: [], // Ergebnisse faktorisieren — Prüfer erwarten vereinfachte Antwort
  // },

  // ── abl-3-1 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-3-1': {
  //   0: [], // Monotonie-Kriterium: $f\
  //   1: [], // Notwendige Bedingung für lokales Extremum: $f\
  //   2: [], // Hinreichend via $f\
  //   3: [], // Hinreichend via Vorzeichenwechsel: $f\
  //   4: [], // Kein Vorzeichenwechsel von $f\
  // },

  // ── abl-3-2 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-3-2': {
  //   0: [], // Krümmung via $f\
  //   1: [], // Notwendige Bedingung für Wendepunkt: $f\
  //   2: [], // Hinreichend: $f\
  //   3: [], // Sattelpunkt = Wendepunkt mit $f\
  //   4: [], // Wendepunkt-Koordinaten: $(x_0, f(x_0))$ — y-Wert nicht vergessen
  // },

  // ── abl-3-3 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-3-3': {
  //   0: [], // Reihenfolge: $D_f$ → Symmetrie → Nullstellen → $f\
  //   1: [], // Symmetrie: $f(-x) = f(x)$ gerade (y-Achse), $f(-x) = -f(x)$ ungerade (Urspr
  //   2: [], // Verhalten im Unendlichen: bei Polynom führender Term, bei Bruch Grad-Vergle
  //   3: [], // Polstellen & Asymptoten bei gebrochen-rationalen Funktionen separat untersu
  //   4: [], // Abschluss-Skizze: Extrema, WP, Achsenschnittpunkte mit Koordinaten beschrif
  // },

  // ── abl-3-4 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-3-4': {
  //   0: [], // Typische Klausurfunktionen: Polynom, Bruch $p(x)/q(x)$, $x \\cdot e^{-x}$, 
  //   1: [], // Plausibilitätsprüfung: Polynom Grad $n$ hat höchstens $n-1$ Extrema
  //   2: [], // Globale Extrema auf Intervall $[a,b]$: innere Kandidaten + Randpunkte $f(a)
  //   3: [], // Anwendungsaufgabe (Optimierung): Zielfunktion aufstellen, Nebenbedingung ei
  //   4: [], // Taylorpolynom $T_n(x)$ als schnelle lokale Kurvendiskussion 2. Ordnung
  // },

  // ── abl-4-1 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-4-1': {
  //   0: [], // Grundableitungen: $(x^n)\
  //   1: [], // $(\\cos x)\
  //   2: [], // $(a^x)\
  //   3: [], // Ableitung der Umkehrfunktion: $(f^{-1})\
  //   4: [], // Kombinierte Regeln: Produkt mit Kette, Quotient mit Kette — Teilschritte do
  // },

  // ── abl-4-2 (5 subGoals) ────────────────────────────────────────────────────
  // 'abl-4-2': {
  //   0: [], // Optimierung: Zielfunktion aufstellen, Nebenbedingung einsetzen, auf eine Va
  //   1: [], // Taylorreihe: $T_n(x) = \\sum_{k=0}^n f^{(k)}(x_0)(x-x_0)^k/k!$
  //   2: [], // Näherungen bei $x_0 = 0$: $\\sin x \\approx x$, $\\cos x \\approx 1 - x^2/2
  //   3: [], // Restglied (Lagrange): $R_n(x) = f^{(n+1)}(\\xi)(x-x_0)^{n+1}/(n+1)!$ für ei
  //   4: [], // Monotoniebereiche aus $f\
  // },

  // ── abl-4-3 (6 subGoals) ────────────────────────────────────────────────────
  // 'abl-4-3': {
  //   0: [], // Newton-Iteration: $x_{n+1} = x_n - f(x_n)/f\
  //   1: [], // Newton-Voraussetzungen: $f\
  //   2: [], // Klassische Geometrie-Optima: Dose mit Deckel $h = 2r$, Rechteck $U$ const →
  //   3: [], // Max-Power-Theorem (ET): $R_L = R_i$ für maximale Leistung (Wirkungsgrad nur
  //   4: [], // Globales Optimum: innere Kandidaten + Randwerte + Verhalten am Definitionsr
  //   5: [], // Optimierung unter Nebenbedingung auch via Lagrange-Multiplikator $\\nabla f
  // },

  // ── abl-5-1 (6 subGoals) ────────────────────────────────────────────────────
  // 'abl-5-1': {
  //   0: [], // Standardgrenzwerte: $\\lim_{x \\to 0} \\sin x/x = 1$, $\\lim_{x \\to 0} (e^
  //   1: [], // Eulerzahl: $\\lim_{x \\to \\infty} (1 + 1/x)^x = e$
  //   2: [], // L\
  //   3: [], // L\
  //   4: [], // Andere unbestimmte Formen: $0 \\cdot \\infty \\to 0/0$, $\\infty - \\infty 
  //   5: [], // Wachstumshierarchie: $\\ln x \\ll x^n \\ll e^x$ für $x \\to \\infty$
  // },

  // ── abl-5-2 (6 subGoals) ────────────────────────────────────────────────────
  // 'abl-5-2': {
  //   0: [], // Stetigkeit in $a$: $\\lim_{x \\to a} f(x) = f(a)$ (beide Seiten gleich UND 
  //   1: [], // Hebbare Unstetigkeit: Grenzwert existiert, aber $f(a)$ fehlt oder weicht ab
  //   2: [], // Sprungstelle: links- und rechtsseitiger Grenzwert existieren, sind aber ver
  //   3: [], // Polstelle: $|f(x)| \\to \\infty$ für $x \\to a$ (kein endlicher Grenzwert)
  //   4: [], // Zwischenwertsatz: $f$ stetig auf $[a,b]$ nimmt jeden Wert zwischen $f(a)$ u
  //   5: [], // Differenzierbar $\\Rightarrow$ stetig, aber Umkehrung falsch (z.B. $|x|$ be
  // },
}
