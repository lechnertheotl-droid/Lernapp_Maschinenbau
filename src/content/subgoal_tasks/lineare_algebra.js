// ═══════════════════════════════════════════════════════════════════════════
// Lineare Algebra — Zielaufgaben pro Sub-Goal
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

export const lineareAlgebraSubGoalTasks = {

  // ── la-1-1 (4 subGoals) ─────────────────────────────────────────────────────
  // 'la-1-1': {
  //   0: [], // Dimension $m \\times n$ als „Zeilen $\\times$ Spalten" lesen (Reihenfolge n
  //   1: [], // Element $a_{ij}$: erster Index = Zeile, zweiter = Spalte
  //   2: [], // Einheitsmatrix, Nullmatrix, Diagonalmatrix, quadratische Matrix auf einen B
  //   3: [], // Transponierte $A^T$: Zeilen werden Spalten — praktisch für Dimensionscheck
  // },

  // ── la-1-2 (4 subGoals) ─────────────────────────────────────────────────────
  // 'la-1-2': {
  //   0: [], // Addition nur bei identischer Dimension — elementweise
  //   1: [], // Matrizenmultiplikation: „Zeile mal Spalte" — Innen-Dimensionen müssen passe
  //   2: [], // $A\\,B \\neq B\\,A$ im Allgemeinen — Reihenfolge wichtig
  //   3: [], // Rechenregeln: $(A\\,B)^T = B^T A^T$ (Reihenfolge dreht sich um)
  // },

  // ── la-1-3 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-1-3': {
  //   0: [], // Transponierte: $(A^T)_{ij} = A_{ji}$ (Zeilen/Spalten tauschen), Dimensionen
  //   1: [], // Transponierten-Regeln: $(A+B)^T = A^T + B^T$, $(AB)^T = B^T A^T$ (Reihenfol
  //   2: [], // 2x2-Inverse: $A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & 
  //   3: [], // Invertierbarkeit: $A^{-1}$ existiert $\\iff \\det A \\neq 0$
  //   4: [], // Eigenschaft: $AA^{-1} = A^{-1}A = I$ (Einheitsmatrix)
  //   5: [], // Symmetrische Matrix: $A^T = A$; orthogonale Matrix: $A^T = A^{-1}$
  // },

  // ── la-1-4 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-1-4': {
  //   0: [], // 2x2: $\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$
  //   1: [], // 3x3 Regel von Sarrus: Haupt- minus Nebendiagonalen (nur 3x3!)
  //   2: [], // Laplace-Entwicklung: nach einer Zeile/Spalte, Vorzeichen-Schachbrett $(-1)^
  //   3: [], // Determinanten-Regeln: $\\det(AB) = \\det A \\cdot \\det B$, $\\det A^T = \\
  //   4: [], // Geometrisch: $|\\det A|$ = Flächen-/Volumen-Skalierungsfaktor
  //   5: [], // $\\det A = 0 \\iff$ Spalten linear abhängig, $A$ singulär, kein $A^{-1}$
  // },

  // ── la-1-5 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-1-5': {
  //   0: [], // Eigenwertgleichung: $A \\vec v = \\lambda \\vec v$ (Vektor bleibt in Richtu
  //   1: [], // Charakteristisches Polynom: $\\det(A - \\lambda I) = 0$ → Eigenwerte $\\lam
  //   2: [], // Eigenvektor zu $\\lambda_i$: $(A - \\lambda_i I)\\vec v = 0$ lösen (Kern)
  //   3: [], // Spur und Determinante: $\\text{tr}(A) = \\sum \\lambda_i$, $\\det A = \\pro
  //   4: [], // Symmetrische Matrix: Eigenwerte reell, Eigenvektoren orthogonal (Hauptachse
  //   5: [], // Technik-Anwendung: Eigenfrequenzen (Schwingungen), Hauptspannungen (Festigk
  // },

  // ── la-2-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'la-2-1': {
  //   0: [], // Matrixform: $A\\vec x = \\vec b$ (Koeffizienten $A$, Unbekannte $\\vec x$, 
  //   1: [], // Erweiterte Koeffizientenmatrix $[A|\\vec b]$ mit Trennstrich
  //   2: [], // Variablen in jeder Gleichung in gleicher Reihenfolge (sonst Koeffizienten f
  //   3: [], // Dimensionen: $A$ ist $m \\times n$, $\\vec x \\in \\mathbb{R}^n$, $\\vec b 
  //   4: [], // Homogenes LGS: $\\vec b = \\vec 0$, triviale Lösung $\\vec x = \\vec 0$ exi
  // },

  // ── la-2-2 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-2-2': {
  //   0: [], // Drei erlaubte Zeilenumformungen: Vertauschen, Skalieren (≠0), Addieren eine
  //   1: [], // Ziel: Obere Dreiecksform / Stufenform (alle Einträge unter Pivot = 0)
  //   2: [], // Rücksubstitution: von unten nach oben, Variable nach Variable auflösen
  //   3: [], // Pivotierung: bei $a_{ii} = 0$ Zeile tauschen, sonst Division durch 0
  //   4: [], // Gauss-Jordan: zusätzlich auch über Pivots nullen → reduzierte Stufenform
  //   5: [], // Matrix-Inversion mit Gauss: $[A | I] \\to [I | A^{-1}]$
  // },

  // ── la-2-3 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-2-3': {
  //   0: [], // Drei Fälle: eindeutig / unendlich / keine Lösung (Widerspruch)
  //   1: [], // Rang = Anzahl Pivots in Stufenform
  //   2: [], // Kronecker-Capelli: $\\text{rg}(A) \\neq \\text{rg}([A|b])$ → keine Lösung
  //   3: [], // Eindeutig: $\\text{rg}(A) = \\text{rg}([A|b]) = n$ (Anzahl Unbekannte)
  //   4: [], // Unendlich: $\\text{rg}(A) = \\text{rg}([A|b]) < n$, freie Parameter = $n - 
  //   5: [], // Geometrisch (2D): Geraden schneidend / identisch / parallel
  // },

  // ── la-2-4 (5 subGoals) ─────────────────────────────────────────────────────
  // 'la-2-4': {
  //   0: [], // Cramer: $x_i = \\det(A_i)/\\det(A)$, wobei $A_i$ = $A$ mit $i$-ter Spalte d
  //   1: [], // Voraussetzung: $\\det(A) \\neq 0$ (nicht anwendbar bei singulärer Matrix)
  //   2: [], // Nur für **quadratische** Systeme mit eindeutiger Lösung sinnvoll
  //   3: [], // Ab $n > 4$ ist Gauss effizienter (Cramer = $O(n!)$ mit Sarrus, $n!$ Determi
  //   4: [], // Technik-Anwendung: Kräftegleichgewicht, Knotenspannungsanalyse (Kirchhoff)
  // },

  // ── la-3-1 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-3-1': {
  //   0: [], // Matrixmultiplikation Zeile × Spalte — $AB \\neq BA$ im Allgemeinen
  //   1: [], // Laplace-Entwicklung: $\\det A = \\sum_j (-1)^{i+j} a_{ij} M_{ij}$ (beliebig
  //   2: [], // Inverse-Test: $A^{-1}$ existiert $\\iff \\det A \\neq 0 \\iff \\text{rg}(A)
  //   3: [], // Rang via Gauss: Zeilenstufenform → Anzahl Nicht-Null-Zeilen
  //   4: [], // Äquivalenzkette: $A$ invertierbar $\\iff \\det \\neq 0 \\iff \\text{rg} = n
  //   5: [], // Parameteraufgabe: $A(\\lambda)$, Werte für $\\lambda$ finden, bei denen $\\
  // },

  // ── la-3-2 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-3-2': {
  //   0: [], // Rouché-Capelli-Kriterium: $\\text{rg}(A) = \\text{rg}([A|b])$ für Lösbarkei
  //   1: [], // Freie Variablen = $n - \\text{rg}(A)$ (Parametrisierung der Lösungsmenge)
  //   2: [], // Eigenwerte via $\\det(A - \\lambda I) = 0$
  //   3: [], // Eigenvektor: Kern von $(A - \\lambda I)$, normieren falls gefordert
  //   4: [], // Spur = $\\sum \\lambda_i$, Determinante = $\\prod \\lambda_i$ (Quercheck!)
  //   5: [], // Defekt: algebraische Vielfachheit > geometrische → nicht diagonalisierbar
  // },

  // ── la-3-3 (6 subGoals) ─────────────────────────────────────────────────────
  // 'la-3-3': {
  //   0: [], // Diagonalisierung: $A = PDP^{-1}$ mit $P = $ EV-Matrix, $D = \\text{diag}(\\
  //   1: [], // Bedingung: $n$ linear unabhängige Eigenvektoren (algebr. = geom. Vielfachhe
  //   2: [], // Matrixpotenzen via $A^k = P D^k P^{-1}$ (nur Diagonale potenzieren!)
  //   3: [], // Spektralsatz (symm. Matrix): reelle EW, orthogonale EV, $A = Q D Q^T$ mit $
  //   4: [], // Technik: Hauptträgheitsachsen, Hauptspannungen, Eigenfrequenzen, Stabilität
  //   5: [], // Defekte Matrix: nicht diagonalisierbar → Jordan-Normalform (Vertiefung)
  // },
}
