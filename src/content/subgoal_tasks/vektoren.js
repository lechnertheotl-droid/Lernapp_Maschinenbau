// ═══════════════════════════════════════════════════════════════════════════
// Vektoren & Analytische Geometrie — Zielaufgaben pro Sub-Goal
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

export const vektorenSubGoalTasks = {

  // ── vek-1-0 (3 subGoals) ────────────────────────────────────────────────────
  // 'vek-1-0': {
  //   0: [], // Punkt = Ort mit Koordinaten; Vektor = Verschiebung mit Richtung und Länge
  //   1: [], // Vektor von $A$ nach $B$: $\\vec{AB} = B - A$ (komponentenweise Subtraktion)
  //   2: [], // Freier Vektor: gleicher Richtung und Länge → gleicher Vektor, egal wo einge
  // },

  // ── vek-1-1 (4 subGoals) ────────────────────────────────────────────────────
  // 'vek-1-1': {
  //   0: [], // Betrag $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$
  //   1: [], // Vektoraddition komponentenweise
  //   2: [], // Einheitsvektor $\\vec{e}=\\vec{v}/|\\vec{v}|$ bilden
  //   3: [], // Vektor vs. Skalar in technischen Größen erkennen
  // },

  // ── vek-1-2 (4 subGoals) ────────────────────────────────────────────────────
  // 'vek-1-2': {
  //   0: [], // Komponentenform $\\vec{a}\\cdot\\vec{b}=\\sum a_i b_i$
  //   1: [], // Winkelform $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\alpha$
  //   2: [], // Orthogonalitäts-Test über $\\vec{a}\\cdot\\vec{b}=0$
  //   3: [], // Projektion eines Vektors auf einen anderen
  // },

  // ── vek-1-3 (4 subGoals) ────────────────────────────────────────────────────
  // 'vek-1-3': {
  //   0: [], // Kreuzprodukt liefert *Vektor* senkrecht auf $\\vec a$ und $\\vec b$ — nicht
  //   1: [], // Betrag $|\\vec a \\times \\vec b| = |\\vec a| |\\vec b| \\sin\\varphi$ = Fl
  //   2: [], // Richtung per Rechte-Hand-Regel; $\\vec a \\times \\vec b = -\\vec b \\times
  //   3: [], // Nur in 3D definiert; Komponentenformel oder Sarrus-Merkschema mit Einheitsv
  // },

  // ── vek-1-4 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-1-4': {
  //   0: [], // Kraftkomponenten: $F_x = F \\cos\\alpha$, $F_y = F \\sin\\alpha$ (Winkel zu
  //   1: [], // Resultierende: $\\vec R = \\sum \\vec F_i$ komponentenweise addieren
  //   2: [], // Gleichgewicht: $\\sum F_x = 0$ UND $\\sum F_y = 0$ UND $\\sum F_z = 0$
  //   3: [], // Einheitsvektor: $\\hat e = \\vec a / |\\vec a|$ (dimensionslos, Länge 1)
  //   4: [], // Betrag und Richtung: $|\\vec R| = \\sqrt{R_x^2 + R_y^2}$, $\\tan\\alpha = R
  //   5: [], // Plausibilitätscheck: Vorzeichen der Komponenten passt zur Skizze?
  // },

  // ── vek-2-1 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-2-1': {
  //   0: [], // Parameterform: $\\vec r = \\vec p + t \\vec v$ mit Stützpunkt $\\vec p$ und
  //   1: [], // Punkt-Test: $(x,y,z) = \\vec p + t \\vec v$ auf **dasselbe** $t$ in allen d
  //   2: [], // Lagetest zweier Geraden: parallel? identisch? schneidend? windschief?
  //   3: [], // Parallel-Test: $\\vec v_1 \\times \\vec v_2 = \\vec 0$ oder $\\vec v_2 = k 
  //   4: [], // Schnittpunkt via Gleichsetzen: $\\vec p_1 + t \\vec v_1 = \\vec p_2 + s \\v
  //   5: [], // Windschief gibt es nur in 3D — in 2D sind nicht-parallele Geraden immer sch
  // },

  // ── vek-2-2 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-2-2': {
  //   0: [], // Parameterform: $\\vec r = \\vec p + s \\vec u + t \\vec v$ (Stützpunkt + zw
  //   1: [], // Normalenform: $\\vec n \\cdot (\\vec r - \\vec p) = 0$ mit Normalvektor $\\
  //   2: [], // Koordinatenform: $a x + b y + c z = d_0$ mit $\\vec n = (a, b, c)$ und $d_0
  //   3: [], // Normalvektor aus Parameterform: $\\vec n = \\vec u \\times \\vec v$
  //   4: [], // Ebene aus drei Punkten: $\\vec u = P_2 - P_1$, $\\vec v = P_3 - P_1$, dann 
  //   5: [], // Hessesche Normalform: $\\vec n_0 \\cdot (\\vec r - \\vec p) = 0$ mit normie
  // },

  // ── vek-2-3 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-2-3': {
  //   0: [], // Abstand Punkt–Ebene: $d = |a q_x + b q_y + c q_z - d_0|/\\sqrt{a^2+b^2+c^2}
  //   1: [], // Abstand Punkt–Gerade: $d = |\\vec v \\times (\\vec Q - \\vec p)|/|\\vec v|$
  //   2: [], // Abstand windschiefer Geraden: $d = |(\\vec p_2 - \\vec p_1) \\cdot (\\vec v
  //   3: [], // Schnitt Gerade–Ebene: $\\vec r(t)$ in Ebenengleichung einsetzen, $t$ auflös
  //   4: [], // Schnittfälle: eindeutig (1 Punkt), $0 = 0$ (Gerade in Ebene), Widerspruch (
  //   5: [], // Merkhilfe: Ebene → Skalarprodukt mit $\\vec n$; Gerade → Kreuzprodukt mit $
  // },

  // ── vek-2-4 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-2-4': {
  //   0: [], // Lotfußpunkt auf Ebene: Hilfsgerade durch $P$ in Richtung $\\vec n$, Schnitt
  //   1: [], // Schnittgerade zweier Ebenen: Richtung $\\vec v = \\vec n_1 \\times \\vec n_
  //   2: [], // Gerade ⊥ Ebene $\\iff \\vec v_g \\parallel \\vec n_E$; Gerade $\\parallel$ 
  //   3: [], // Abstand paralleler Ebenen: $d = |d_1 - d_2|/|\\vec n|$ bei **gleichem** $\\
  //   4: [], // Spiegelpunkt $P\
  //   5: [], // Winkel zwischen Gerade und Ebene: $\\sin\\alpha = |\\vec v \\cdot \\vec n|/
  // },

  // ── vek-3-1 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-3-1': {
  //   0: [], // Skalarprodukt liefert **Zahl**, Kreuzprodukt liefert **Vektor** (nur in 3D)
  //   1: [], // Winkel: $\\cos\\varphi = (\\vec a \\cdot \\vec b)/(|\\vec a||\\vec b|)$
  //   2: [], // Orthogonalitätstest: $\\vec a \\cdot \\vec b = 0$; Parallelitätstest: $\\ve
  //   3: [], // Skalarprodukt kommutativ: $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$
  //   4: [], // Kreuzprodukt **anti**kommutativ: $\\vec a \\times \\vec b = -(\\vec b \\tim
  //   5: [], // Arbeit $W = \\vec F \\cdot \\vec s$ (Skalar), Drehmoment $\\vec M = \\vec r
  // },

  // ── vek-3-2 (6 subGoals) ────────────────────────────────────────────────────
  // 'vek-3-2': {
  //   0: [], // Parallelogrammfläche: $A = |\\vec a \\times \\vec b|$
  //   1: [], // Dreiecksfläche: $A = \\tfrac{1}{2} |\\vec a \\times \\vec b|$
  //   2: [], // Spatvolumen: $V = |\\vec a \\cdot (\\vec b \\times \\vec c)|$ (Spatprodukt)
  //   3: [], // Tetraedervolumen: $V = \\tfrac{1}{6} |\\vec a \\cdot (\\vec b \\times \\vec
  //   4: [], // Spatprodukt $= 0 \\iff$ Vektoren komplanar (kein Volumen)
  //   5: [], // Vorzeichen ohne Betrag: $>0$ Rechtssystem, $<0$ Linkssystem
  // },

  // ── vek-3-3 (5 subGoals) ────────────────────────────────────────────────────
  // 'vek-3-3': {
  //   0: [], // Schiefe Ebene: Hangabtrieb $F_H = G \\sin\\alpha$, Normalkraft $F_N = G \\c
  //   1: [], // Drehmoment $\\vec M = \\vec r \\times \\vec F$: Betrag $|M| = r F \\sin\\al
  //   2: [], // Drehmoment-Richtung via Rechte-Hand-Regel (Daumen = $\\vec r$, Zeige = $\\v
  //   3: [], // Einheiten: Kraft N, Hebel m, Moment Nm, Arbeit Nm = J
  //   4: [], // Gleichgewicht: $\\sum \\vec F = 0$ UND $\\sum \\vec M = 0$ (alle Momentensu
  // },
}
