// ═══════════════════════════════════════════════════════════════════════════
// Numerische Mathematik — Zielaufgaben pro Sub-Goal
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

export const numerikSubGoalTasks = {

  // ── num-1-1 (4 subGoals) ────────────────────────────────────────────────────
  // 'num-1-1': {
  //   0: [], // Iterationsvorschrift $x_{n+1} = x_n - f(x_n)/f\
  //   1: [], // Abbruchkriterium: $|x_{n+1} - x_n| < \\varepsilon$ **oder** $|f(x_n)| < \\d
  //   2: [], // Quadratische Konvergenz: Anzahl korrekter Stellen verdoppelt sich pro Schri
  //   3: [], // Stolperfallen: $f\
  // },

  // ── num-1-2 (5 subGoals) ────────────────────────────────────────────────────
  // 'num-1-2': {
  //   0: [], // Bisektion benötigt Vorzeichenwechsel: $f(a)\\cdot f(b) < 0$
  //   1: [], // Fehler der Bisektion nach $n$ Schritten: $(b-a)/2^n$ → Schrittzahl auflösen
  //   2: [], // Trapezregel: $\\tfrac{h}{2}(f_0 + 2f_1 + \\ldots + 2f_{n-1} + f_n)$; Fehler
  //   3: [], // Simpson: nur bei **gerader** Teilintervallanzahl anwendbar; Fehler $O(h^4)$
  //   4: [], // Simpson ist exakt für Polynome bis Grad 3
  // },
}
