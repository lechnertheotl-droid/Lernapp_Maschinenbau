// ═══════════════════════════════════════════════════════════════════════════
// Komplexe Zahlen — Zielaufgaben pro Sub-Goal
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

export const komplexeZahlenSubGoalTasks = {

  // ── komz-1-1 (4 subGoals) ───────────────────────────────────────────────────
  // 'komz-1-1': {
  //   0: [], // $i^2 = -1$ als Definition — $i$ ist keine Variable, sondern fixes Symbol
  //   1: [], // $\\operatorname{Re}(z)$ und $\\operatorname{Im}(z)$: beide reell (der Imagi
  //   2: [], // Konjugierte $\\bar z = a - bi$: Spiegelung an reeller Achse
  //   3: [], // Reelle Zahl ⇔ $\\operatorname{Im}(z) = 0$; rein imaginär ⇔ $\\operatorname{
  // },

  // ── komz-1-2 (4 subGoals) ───────────────────────────────────────────────────
  // 'komz-1-2': {
  //   0: [], // Addition/Subtraktion komponentenweise — wie Vektoren
  //   1: [], // Multiplikation: $(a+bi)(c+di)$ ausmultiplizieren und $i^2 = -1$ einsetzen
  //   2: [], // Division: Zähler **und** Nenner mit $\\bar{c+di} = c-di$ erweitern → Nenner
  //   3: [], // $z \\cdot \\bar z = |z|^2 = a^2 + b^2$ — immer reell und nicht-negativ
  // },

  // ── komz-2-1 (6 subGoals) ───────────────────────────────────────────────────
  // 'komz-2-1': {
  //   0: [], // Betrag: $|z| = \\sqrt{a^2 + b^2}$ (Pythagoras)
  //   1: [], // Argument: $\\varphi = \\arg(z)$ mit $\\text{atan2}(b,a)$ (Quadrant beachten
  //   2: [], // Polarform: $z = |z|(\\cos\\varphi + i\\sin\\varphi) = |z| e^{i\\varphi}$
  //   3: [], // Rücktransformation: $a = |z|\\cos\\varphi$, $b = |z|\\sin\\varphi$
  //   4: [], // Hauptwert des Arguments: $\\varphi \\in (-\\pi, \\pi]$ (Konvention)
  //   5: [], // Typische Falle: einfacher $\\arctan(b/a)$ gibt falschen Quadranten
  // },

  // ── komz-2-2 (6 subGoals) ───────────────────────────────────────────────────
  // 'komz-2-2': {
  //   0: [], // Euler-Formel: $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$
  //   1: [], // Euler\
  //   2: [], // Multiplikation: $z_1 z_2 = r_1 r_2 e^{i(\\varphi_1 + \\varphi_2)}$ (Beträge
  //   3: [], // Division: $z_1/z_2 = (r_1/r_2) e^{i(\\varphi_1 - \\varphi_2)}$
  //   4: [], // Konjugiert-komplex in Polarform: $\\bar z = r e^{-i\\varphi}$
  //   5: [], // Sinus/Cosinus aus Euler: $\\cos\\varphi = (e^{i\\varphi} + e^{-i\\varphi})/
  // },

  // ── komz-3-1 (5 subGoals) ───────────────────────────────────────────────────
  // 'komz-3-1': {
  //   0: [], // Moivre: $z^n = |z|^n e^{in\\varphi} = |z|^n (\\cos n\\varphi + i \\sin n\\v
  //   1: [], // Betrag hoch $n$, Argument mal $n$
  //   2: [], // Anwendung: Mehrfach-Winkel-Formeln ($\\cos 2\\varphi, \\sin 3\\varphi, \\ld
  //   3: [], // Geometrisch: Streckung + Drehung — wiederholte Rotation um $\\varphi$
  //   4: [], // Negative Potenzen: $z^{-1} = (1/|z|) e^{-i\\varphi}$
  // },

  // ── komz-3-2 (6 subGoals) ───────────────────────────────────────────────────
  // 'komz-3-2': {
  //   0: [], // Wurzelformel: $z_k = |w|^{1/n} e^{i(\\varphi + 2\\pi k)/n}$ für $k = 0, 1, 
  //   1: [], // Anzahl: genau $n$ verschiedene $n$-te Wurzeln (Fundamentalsatz der Algebra)
  //   2: [], // Geometrisch: regelmäßiges $n$-Eck auf Kreis mit Radius $|w|^{1/n}$
  //   3: [], // Winkelabstand zwischen Wurzeln: $2\\pi/n$
  //   4: [], // Einheitswurzeln ($w=1$): $z_k = e^{i 2\\pi k/n}$ — Ecken eines regelmäßigen
  //   5: [], // Hauptwurzel $k=0$: die mit kleinstem positivem Argument
  // },
}
