// ═══════════════════════════════════════════════════════════════════════════
// Mehrdim. Analysis — Zielaufgaben pro Sub-Goal
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

export const mehrdimAnalysisSubGoalTasks = {

  // ── mdim-1-1 (5 subGoals) ───────────────────────────────────────────────────
  // 'mdim-1-1': {
  //   0: [], // Beim Ableiten nach einer Variable: alle anderen sind **Konstanten**
  //   1: [], // Schreibweisen $f_x$, $\\partial f/\\partial x$, $D_x f$ gleichwertig erkenn
  //   2: [], // Gradient $\\nabla f = (f_x, f_y)^T$ zeigt Richtung des steilsten Anstiegs
  //   3: [], // Gradient $\\perp$ Höhenlinie — Normale an Niveaumengen
  //   4: [], // Satz von Schwarz: $f_{xy} = f_{yx}$ (bei stetigen zweiten Ableitungen)
  // },

  // ── mdim-1-2 (5 subGoals) ───────────────────────────────────────────────────
  // 'mdim-1-2': {
  //   0: [], // Notwendige Bedingung für Extremum: $\\nabla f = 0$ (kritischer Punkt)
  //   1: [], // Hesse-Matrix $H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\e
  //   2: [], // $\\det H > 0 \\wedge f_{xx} > 0$ → Minimum, $< 0 \\wedge f_{xx} < 0$ → Maxi
  //   3: [], // Lagrange: $\\nabla f = \\lambda\\,\\nabla g$ bei Nebenbedingung $g(x,y) = 0
  //   4: [], // Lagrange-System: $\\nabla f - \\lambda \\nabla g = 0$ **und** $g = 0$ gemei
  // },
}
