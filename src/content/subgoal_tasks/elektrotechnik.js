// ═══════════════════════════════════════════════════════════════════════════
// Elektrotechnik — Zielaufgaben pro Sub-Goal
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

export const elektrotechnikSubGoalTasks = {

  // ── et-1-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-1-1': {
  //   0: [], // Ohmsches Gesetz $U = R \\cdot I$ — Dreieck-Merkhilfe: eine Größe abdecken, 
  //   1: [], // Einheiten-Konsistenz: V, A, $\\Omega$ — mA und k$\\Omega$ immer vor der Rec
  //   2: [], // Reihenschaltung: Widerstände addieren sich, Strom ist überall gleich
  //   3: [], // Parallelschaltung: Kehrwerte addieren ($1/R_{ges} = \\sum 1/R_i$), Spannung
  //   4: [], // Spezialfall zwei Parallelwiderstände: $R_{ges} = R_1 R_2 / (R_1 + R_2)$ (Pr
  // },

  // ── et-1-2 (4 subGoals) ─────────────────────────────────────────────────────
  // 'et-1-2': {
  //   0: [], // Knotensatz (KCL): An jedem Knoten ist die Summe zu- und abfließender Ströme
  //   1: [], // Maschensatz (KVL): In jeder geschlossenen Masche ist die Summe aller Spannu
  //   2: [], // Vorzeichenkonvention: Umlaufrichtung festlegen; in Umlaufrichtung Spannungs
  //   3: [], // Spannungsteiler: $U_2 = U \\cdot R_2 / (R_1 + R_2)$ — direkter Spezialfall 
  // },

  // ── et-1-3 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-1-3': {
  //   0: [], // Leistung: $P = U \\cdot I = U^2/R = I^2 R$ (drei äquivalente Formen)
  //   1: [], // Energie: $W = P \\cdot t$ (Einheit Joule oder Wattstunden)
  //   2: [], // Wirkungsgrad: $\\eta = P_\\text{ab}/P_\\text{zu}$, immer $\\leq 1$
  //   3: [], // Wärmeverlust im Widerstand: $P_R = I^2 R$ (Stromwärmegesetz)
  //   4: [], // Nennspannungen Haushalt: 230 V (einphasig), 400 V (Drehstrom)
  // },

  // ── et-2-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-2-1': {
  //   0: [], // Wechselspannung: $u(t) = \\hat u \\sin(\\omega t + \\varphi)$ mit $\\omega 
  //   1: [], // Effektivwert: $U = \\hat u/\\sqrt 2$ (Sinussignal)
  //   2: [], // Impedanzen: $Z_R = R$, $Z_L = j\\omega L$, $Z_C = 1/(j\\omega C)$
  //   3: [], // |Z_L| = ωL steigt mit Frequenz, |Z_C| = 1/(ωC) fällt mit Frequenz
  //   4: [], // Phasenverschiebung: Spule $+90°$ (Strom eilt nach), Kondensator $-90°$ (Str
  // },

  // ── et-2-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-2-2': {
  //   0: [], // RC-Grenzfrequenz: $f_g = 1/(2\\pi RC)$
  //   1: [], // Zeitkonstanten: RC $\\tau = RC$, RL $\\tau = L/R$
  //   2: [], // RL-Impedanz-Betrag: $|Z| = \\sqrt{R^2 + (\\omega L)^2}$
  //   3: [], // Leistungsfaktor: $\\cos\\varphi = R/|Z|$, $P = S \\cos\\varphi$
  //   4: [], // Bei $f_g$: Betrag auf $1/\\sqrt 2 \\approx 0{,}707$ abgefallen (−3 dB)
  // },

  // ── et-2-3 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-2-3': {
  //   0: [], // Stern: $U_{LL} = \\sqrt 3 U_{LN}$, $I_L = I_\\text{Strang}$
  //   1: [], // Dreieck: $U_{LL} = U_\\text{Strang}$, $I_L = \\sqrt 3 I_\\text{Strang}$
  //   2: [], // Drehstrom-Leistung: $P = \\sqrt 3 U_{LL} I_L \\cos\\varphi$
  //   3: [], // Haushaltsnetz: $U_{LN} = 230$ V, $U_{LL} = 400$ V
  //   4: [], // Y/$\\Delta$-Anlauf: in Stern nur 1/3 Leistung → kleinerer Anlaufstrom
  // },

  // ── et-3-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-3-1': {
  //   0: [], // Reihe: $R_\\text{ges} = \\sum R_i$; Parallel: $1/R_\\text{ges} = \\sum 1/R_
  //   1: [], // Spannungsteiler: $U_1 = U \\cdot R_1/(R_1 + R_2)$
  //   2: [], // Stromteiler: $I_k = I_\\text{ges} \\cdot R_\\text{par}/R_k$ (umgekehrt prop
  //   3: [], // Energie: $W = P \\cdot t$; 1 kWh = 3{,}6 MJ
  //   4: [], // Kirchhoff-Methode: Maschen + Knoten → LGS für mehrere unbekannte Ströme
  // },

  // ── et-3-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'et-3-2': {
  //   0: [], // RLC-Reihe Impedanz: $Z = R + j(\\omega L - 1/(\\omega C))$
  //   1: [], // Resonanzfrequenz: $\\omega_0 = 1/\\sqrt{LC}$, $f_0 = 1/(2\\pi\\sqrt{LC})$
  //   2: [], // Güte $Q = \\omega_0 L/R = 1/(\\omega_0 RC)$
  //   3: [], // Wirk-/Blind-/Scheinleistung: $P = S\\cos\\varphi$, $Q = S\\sin\\varphi$, $S
  //   4: [], // Tiefpass $-20$ dB/Dekade oberhalb $f_g$, Hochpass umgekehrt
  // },
}
