// ═══════════════════════════════════════════════════════════════════════════
// Regelungstechnik — Zielaufgaben pro Sub-Goal
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

export const regelungstechnikSubGoalTasks = {

  // ── rt-1-1 (4 subGoals) ─────────────────────────────────────────────────────
  // 'rt-1-1': {
  //   0: [], // Signale: Führungsgröße $w$, Regelgröße $y$, Stellgröße $u$, Regelabweichung
  //   1: [], // Regelung (geschlossener Kreis) vs. Steuerung (offener Wirkungsablauf) — nur
  //   2: [], // Blockschaltbild: Regler $\\to$ Stellglied $\\to$ Regelstrecke $\\to$ Messgl
  //   3: [], // Ziel jeder Regelung: $e \\to 0$ trotz Störungen $z$ und Parameter-Schwankun
  // },

  // ── rt-1-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rt-1-2': {
  //   0: [], // Übertragungsfunktion $G(s) = Y(s)/U(s)$ nur für LTI-Systeme bei verschwinde
  //   1: [], // PT1-Glied: $G(s) = K/(1 + Ts)$ — Verstärkung $K$ und Zeitkonstante $T$; Spr
  //   2: [], // Statische Verstärkung = $G(0)$ — erhält man durch Einsetzen von $s = 0$ (En
  //   3: [], // Serienschaltung: Übertragungsfunktionen werden multipliziert; Parallelschal
  //   4: [], // Pole von $G(s)$ (Nullstellen des Nenners) bestimmen Stabilität: Realteil $<
  // },

  // ── rt-2-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rt-2-1': {
  //   0: [], // PID-Formel: $u(t) = K_P(e + \\frac{1}{T_I}\\int e dt + T_D \\dot e)$
  //   1: [], // P: schnell, bleibender Regelfehler; I: beseitigt Dauerfehler; D: antizipier
  //   2: [], // PID-Laplace: $G_R(s) = K_P(1 + 1/(T_I s) + T_D s)$
  //   3: [], // I-Anteil dominiert bei niedrigen Frequenzen, D-Anteil bei hohen
  //   4: [], // D rauschempfindlich → in Praxis mit Filterung: $T_D s/(1 + \\alpha T_D s)$
  // },

  // ── rt-2-2 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rt-2-2': {
  //   0: [], // Stabilitätsbedingung: alle Pole in linker s-Halbebene ($\\text{Re}(s_i) < 0
  //   1: [], // Hurwitz notwendig: alle Koeffizienten $>0$ (kein Vorzeichenwechsel)
  //   2: [], // Hurwitz hinreichend ab $n \\geq 3$: Hurwitz-Determinanten $> 0$ prüfen
  //   3: [], // Phasenrand $\\varphi_R \\geq 30°$, Amplitudenrand $A_R \\geq 6$ dB (Praxisr
  //   4: [], // Pole auf $j\\omega$-Achse: grenzstabil (ungedämpfte Schwingung)
  // },

  // ── rt-2-3 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rt-2-3': {
  //   0: [], // Amplitudengang in dB: $A_\\text{dB} = 20 \\log_{10}|G|$
  //   1: [], // Grundbausteine: P $0°$; I $-90°$, $-20$ dB/Dek; D $+90°$, $+20$ dB/Dek
  //   2: [], // PT1 Grenzfrequenz $\\omega_g = 1/T$, dort $|G| = -3$ dB
  //   3: [], // Phasenreserve: $\\varphi_R = 180° + \\varphi(\\omega_D)$ bei $|G_0| = 0$ dB
  //   4: [], // Stabilitätsreserven: $\\varphi_R > 30°$ akzeptabel, $> 60°$ sehr gut
  // },

  // ── rt-3-1 (5 subGoals) ─────────────────────────────────────────────────────
  // 'rt-3-1': {
  //   0: [], // Führungs-Übertragungsfunktion: $T(s) = G_0/(1+G_0)$ mit $G_0 = G_R G_S$
  //   1: [], // Stationärer Regelfehler P-Regler: $e_\\text{stat} = 1/(1+K_0)$
  //   2: [], // I-Anteil erzwingt $e_\\text{stat} = 0$ bei konstantem Sollwert
  //   3: [], // Typ $k$ eines Systems: Anzahl der Integratoren in $G_0$; bestimmt Folgeverm
  //   4: [], // Rampenfolge: Typ 0 dauerhafter Fehler, Typ 1 Ausgleich, Typ 2 Beschleunigun
  // },
}
