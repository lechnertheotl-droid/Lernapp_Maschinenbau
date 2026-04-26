// ═══════════════════════════════════════════════════════════════════════════
// Thermodynamik — Zielaufgaben pro Sub-Goal
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

export const thermodynamikSubGoalTasks = {

  // ── thermo-1-1 (4 subGoals) ─────────────────────────────────────────────────
  // 'thermo-1-1': {
  //   0: [], // $pV = nRT$ mit $R = 8{,}314\\,\\mathrm{J/(mol\\,K)}$; alternativ $p V = m R
  //   1: [], // Temperatur **immer** in Kelvin: $T[K] = T[°C] + 273{,}15$
  //   2: [], // Einheiten: $p$ in Pa, $V$ in m³, $n$ in mol — keine Liter/bar in die Grundf
  //   3: [], // $R_s = R/M$ aus molarer Masse $M$ des Gases (Luft: $M \\approx 28{,}96\\,\\
  // },

  // ── thermo-1-2 (4 subGoals) ─────────────────────────────────────────────────
  // 'thermo-1-2': {
  //   0: [], // Volumenarbeit $W = \\int p\\,dV$ = Fläche unter der Kurve im pV-Diagramm
  //   1: [], // Isobar ($p$ const): $W = p \\cdot \\Delta V$ — direktes Rechteck
  //   2: [], // Isotherm ($T$ const): $W = nRT \\ln(V_2/V_1)$ — Vorzeichen beachten
  //   3: [], // Vorzeichenkonvention: $W > 0$ = vom System **abgegeben**; umgekehrt in manc
  // },

  // ── thermo-2-1 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-2-1': {
  //   0: [], // 1. Hauptsatz geschlossen: $\\Delta U = Q - W$ (Q zugeführt, W abgegeben)
  //   1: [], // 1. Hauptsatz offen (stationär): $\\dot Q + \\dot W_t = \\dot m (h_2 - h_1)$
  //   2: [], // Vorzeichenkonvention: Q, W zugeführt > 0
  //   3: [], // Innere Energie $U$ Zustandsgröße, Q und W Prozessgrößen
  //   4: [], // Technische Arbeit $W_t = -\\int V dp$ vs. Volumenarbeit $W = \\int p dV$
  // },

  // ── thermo-2-2 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-2-2': {
  //   0: [], // Wirkungsgrad: $\\eta = E_\\text{nutz}/E_\\text{zu} \\leq 1$
  //   1: [], // 2. Hauptsatz: $\\eta < 1$ für Wärmekraftmaschine (Entropieargument)
  //   2: [], // Carnot-Grenze: $\\eta \\leq \\eta_C = 1 - T_\\text{kalt}/T_\\text{warm}$ (K
  //   3: [], // Kälteleistungszahl: $\\varepsilon_K = Q_\\text{kalt}/W$ (kann > 1 sein!)
  //   4: [], // Wärmepumpe: $\\varepsilon_{WP} = Q_\\text{warm}/W = \\varepsilon_K + 1$
  // },

  // ── thermo-2-3 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-2-3': {
  //   0: [], // Carnot: $\\eta_C = 1 - T_\\text{kalt}/T_\\text{warm}$ (in Kelvin!)
  //   1: [], // Otto-Prozess: $\\eta_O = 1 - \\varepsilon^{1-\\gamma}$ mit Verdichtung $\\v
  //   2: [], // Diesel-Prozess: etwas anderer Wirkungsgrad (Einspritzverhältnis)
  //   3: [], // Rankine/Clausius-Rankine: Dampfkraftwerk, Enthalpiewerte aus h-s-Diagramm
  //   4: [], // Im pV-Diagramm: Fläche = Nutzarbeit pro Umlauf
  // },

  // ── thermo-2-4 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-2-4': {
  //   0: [], // Fourier-Wärmeleitung: $\\dot Q = \\lambda A \\Delta T/d$
  //   1: [], // Wärmeübergang (Newton): $\\dot Q = \\alpha A \\Delta T$
  //   2: [], // k-Wert (mehrlagige Wand): $1/k = 1/\\alpha_1 + \\sum d_i/\\lambda_i + 1/\\a
  //   3: [], // Strahlung: $\\dot Q = \\varepsilon \\sigma A (T_1^4 - T_2^4)$ (Stefan-Boltz
  //   4: [], // Kleiner $k$-Wert = gute Dämmung
  // },

  // ── thermo-3-1 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-3-1': {
  //   0: [], // Isotherme Expansion: $W = nRT \\ln(V_2/V_1)$
  //   1: [], // Isobar: $W = p \\Delta V$, $Q = n c_p \\Delta T$
  //   2: [], // Isochor: $W = 0$, $Q = n c_v \\Delta T$
  //   3: [], // Adiabatisch: $pV^\\gamma = $ const, $TV^{\\gamma-1} = $ const
  //   4: [], // Zustandsgleichung ideales Gas: $pV = nRT$ (oder $p = \\rho R_s T$)
  // },

  // ── thermo-3-2 (5 subGoals) ─────────────────────────────────────────────────
  // 'thermo-3-2': {
  //   0: [], // Leistung aus Wärmestrom: $P_\\text{nutz} = \\dot Q_\\text{zu} \\cdot \\eta$
  //   1: [], // Wärmebilanz Kraftwerk: $\\dot Q_\\text{ab} = \\dot Q_\\text{zu} - P_\\text{
  //   2: [], // Otto-Wirkungsgrad: $\\eta_O = 1 - \\varepsilon^{1-\\gamma}$, $\\gamma \\app
  //   3: [], // Wärmestrom durch Wand: $\\dot Q = k A \\Delta T$
  //   4: [], // Carnot als theoretische Obergrenze: reale Wirkungsgrade sind kleiner
  // },
}
