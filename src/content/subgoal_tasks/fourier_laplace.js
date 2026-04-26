// ═══════════════════════════════════════════════════════════════════════════
// Fourier & Laplace — Zielaufgaben pro Sub-Goal
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

export const fourierLaplaceSubGoalTasks = {

  // ── fl-1-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'fl-1-1': {
  //   0: [], // $T$-Periode und Grundfrequenz $\\omega_0 = 2\\pi/T$ korrekt identifizieren
  //   1: [], // Formel: $a_0 = \\tfrac{1}{T}\\int_0^T f\\,dt$ (DC-Anteil), $a_n$, $b_n$ mit
  //   2: [], // Gerade $f$ ($f(-t) = f(t)$) → nur $a_n$; ungerade → nur $b_n$ — halbiert de
  //   3: [], // Reihenansatz: $f(t) = a_0/2 + \\sum_n (a_n\\cos + b_n\\sin)$ — Faktor $1/2$
  //   4: [], // Integration über eine volle Periode — Start- und Endpunkt frei wählbar (z. 
  // },

  // ── fl-1-2 (4 subGoals) ─────────────────────────────────────────────────────
  // 'fl-1-2': {
  //   0: [], // Ungerades Rechteck → nur $b_n$; nur **ungerade** $n$ liefern Beitrag ($b_n 
  //   1: [], // Gibbs-Überschwinger ca. 9 % an Sprungstellen — wird mit mehr Termen nicht k
  //   2: [], // Konvergenz in der Mitte der Sprungstelle zum Mittelwert der beiden Seiten
  //   3: [], // Amplitudenspektrum: $1/n$-Abfall → „langsame" Abnahme hoher Frequenzen
  // },

  // ── fl-1-3 (6 subGoals) ─────────────────────────────────────────────────────
  // 'fl-1-3': {
  //   0: [], // FT-Definition: $F(\\omega) = \\int_{-\\infty}^{\\infty} f(t) e^{-i\\omega t
  //   1: [], // Rücktransformation: $f(t) = (1/2\\pi) \\int F(\\omega) e^{i\\omega t} d\\om
  //   2: [], // Wichtige Paare: Rechteckpuls ↔ Sinc, Gauß ↔ Gauß, $\\delta(t)$ ↔ 1
  //   3: [], // Linearität: $\\alpha f + \\beta g \\leftrightarrow \\alpha F + \\beta G$
  //   4: [], // Verschiebungssatz: $f(t-t_0) \\leftrightarrow F(\\omega) e^{-i\\omega t_0}$
  //   5: [], // Ableitungsregel: $f\
  // },

  // ── fl-2-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'fl-2-1': {
  //   0: [], // Definition: $\\mathcal L\\{f\\}(s) = \\int_0^\\infty f(t) e^{-st} dt$
  //   1: [], // Wichtige Paare: $1 \\leftrightarrow 1/s$, $t \\leftrightarrow 1/s^2$, $e^{a
  //   2: [], // $\\sin(\\omega t) \\leftrightarrow \\omega/(s^2 + \\omega^2)$, $\\cos(\\ome
  //   3: [], // Konvergenzbereich (ROC): $\\text{Re}(s) > \\sigma_0$ — hängt vom Signal ab
  //   4: [], // Linearität: $\\mathcal L\\{\\alpha f + \\beta g\\} = \\alpha F + \\beta G$
  // },

  // ── fl-2-2 (6 subGoals) ─────────────────────────────────────────────────────
  // 'fl-2-2': {
  //   0: [], // Ableitungsregel: $\\mathcal L\\{y\
  //   1: [], // DGL-Lösung: transformieren → algebraische Gl. in $Y(s)$ → PBZ → rücktransfo
  //   2: [], // Übertragungsfunktion $G(s) = Y(s)/U(s)$ bei verschwindenden AB
  //   3: [], // Partialbruchzerlegung nötig für Rücktransformation komplexer Ausdrücke
  //   4: [], // Stabilität aus Polstellen von $G(s)$: alle $\\text{Re}(p_i) < 0$ → BIBO-sta
  //   5: [], // Endwertsatz: $\\lim_{t\\to\\infty} y(t) = \\lim_{s\\to 0} s Y(s)$ (falls Li
  // },

  // ── fl-3-1 (6 subGoals) ─────────────────────────────────────────────────────
  // 'fl-3-1': {
  //   0: [], // Symmetrie nutzen: gerade Funktion → nur Kosinusreihe, ungerade → nur Sinusr
  //   1: [], // Koeffizienten $a_n = (2/T)\\int_0^T f(t)\\cos(n\\omega t)dt$, analog $b_n$
  //   2: [], // Konstantes Glied $a_0/2$ = Mittelwert der Funktion über eine Periode
  //   3: [], // Parseval: Energie im Zeit- und Frequenzbereich gleich
  //   4: [], // Konvergenz: punktweise bei Mittelwert-Sprung, gleichmäßig bei stetiger Fort
  //   5: [], // Spektrum periodisch: diskrete Linien bei $n\\omega_0$; aperiodisch: kontinu
  // },

  // ── fl-3-2 (6 subGoals) ─────────────────────────────────────────────────────
  // 'fl-3-2': {
  //   0: [], // Sprungantwort: $Y(s) = G(s)/s$, Partialbruch + Rücktransformation
  //   1: [], // Impulsantwort: $Y(s) = G(s)$ → direkt rücktransformieren
  //   2: [], // Stabilität: alle Pole in linker s-Halbebene ($\\text{Re}(p_i) < 0$)
  //   3: [], // Pol bei $s = -a$ → $e^{-at}$ in Zeitdomäne, konjugiert komplex → gedämpfte 
  //   4: [], // PT1: $G(s) = K/(1 + Ts)$, Zeitkonstante $T$, Verstärkung $K$
  //   5: [], // PT2: $G(s) = K\\omega_0^2/(s^2 + 2D\\omega_0 s + \\omega_0^2)$, Dämpfungsgr
  // },
}
