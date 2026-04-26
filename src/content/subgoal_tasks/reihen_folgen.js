// ═══════════════════════════════════════════════════════════════════════════
// Reihen & Folgen — Zielaufgaben pro Sub-Goal
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

export const reihenFolgenSubGoalTasks = {

  // ── rf-1-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rf-1-1': {
  //   0: [], // Grenzwert $\\lim_{n\\to\\infty} a_n$ anschaulich als „bleibt schließlich in
  //   1: [], // Rationale Folgen: Grad-Vergleich (Zähler/Nenner) entscheidet über $0$, endl
  //   2: [], // Grenzwertsätze: Summe, Produkt, Quotient (sofern Nennergrenzwert $\\neq 0$)
  //   3: [], // Monoton + beschränkt $\\Rightarrow$ konvergent (ohne Grenzwert ausrechnen z
  //   4: [], // Nullfolgen: $1/n$, $1/n^k$, $q^n$ mit $|q|<1$ — als Bausteine auswendig
  // },

  // ── rf-1-2 (4 subGoals) ─────────────────────────────────────────────────────
  // 'rf-1-2': {
  //   0: [], // Taylor-Formel $T_n(x) = \\sum_{k=0}^n f^{(k)}(x_0)/k! \\cdot (x-x_0)^k$
  //   1: [], // Maclaurin-Reihen auswendig: $e^x$, $\\sin x$, $\\cos x$, $\\ln(1+x)$, $1/(1
  //   2: [], // Lagrange-Restglied $R_n = f^{(n+1)}(\\xi)/(n+1)! \\cdot (x-x_0)^{n+1}$ zum 
  //   3: [], // Gerade Funktionen (cos) haben nur gerade Potenzen; ungerade (sin) nur unger
  // },
}
