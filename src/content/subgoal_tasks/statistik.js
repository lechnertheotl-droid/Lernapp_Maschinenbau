// ═══════════════════════════════════════════════════════════════════════════
// Statistik & Wahrscheinlichkeit — Zielaufgaben pro Sub-Goal
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

export const statistikSubGoalTasks = {

  // ── stat-1-1 (4 subGoals) ───────────────────────────────────────────────────
  // 'stat-1-1': {
  //   0: [], // Erwartungswert $E(X) = \\sum_i x_i\\,p_i$ bei diskreter $X$
  //   1: [], // Verschiebungssatz: $\\operatorname{Var}(X) = E(X^2) - E(X)^2$ (rechnerisch 
  //   2: [], // Einheiten: $E(X)$ wie $X$, $\\operatorname{Var}(X)$ wie $X^2$, $\\sigma$ wi
  //   3: [], // Linearität: $E(aX + b) = a\\,E(X) + b$, $\\operatorname{Var}(aX + b) = a^2\
  // },

  // ── stat-1-2 (5 subGoals) ───────────────────────────────────────────────────
  // 'stat-1-2': {
  //   0: [], // Parameter: $\\mu$ verschiebt, $\\sigma$ streckt die Glockenkurve
  //   1: [], // z-Transformation $Z = (X-\\mu)/\\sigma$: jede Normalverteilung auf $N(0,1)$
  //   2: [], // 68/95/99{,}7-Regel: $\\pm1\\sigma$, $\\pm2\\sigma$, $\\pm3\\sigma$-Interval
  //   3: [], // $\\Phi(z) = P(Z \\le z)$: Tabelle nur für $z \\ge 0$, für $z < 0$ Symmetrie
  //   4: [], // $P(a \\le X \\le b) = \\Phi(\\tfrac{b-\\mu}{\\sigma}) - \\Phi(\\tfrac{a-\\m
  // },

  // ── stat-1-3 (5 subGoals) ───────────────────────────────────────────────────
  // 'stat-1-3': {
  //   0: [], // p-Wert < $\\alpha$ → $H_0$ verwerfen (signifikantes Ergebnis)
  //   1: [], // 95%-Konfidenzintervall Mittelwert: $\\bar x \\pm 1{,}96 \\cdot \\sigma/\\sq
  //   2: [], // Fehler 1. Art ($\\alpha$): $H_0$ verworfen obwohl wahr; 2. Art ($\\beta$): 
  //   3: [], // t-Test bei unbekannter Varianz: $t = (\\bar x - \\mu_0)/(s/\\sqrt n)$
  //   4: [], // Einseitig vs. zweiseitig: einseitiger Test nutzt $z_\\alpha$, zweiseitig $z
  // },
}
