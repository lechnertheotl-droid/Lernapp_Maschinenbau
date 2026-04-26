// ═══════════════════════════════════════════════════════════════════════════
// Maschinenelemente — Zielaufgaben pro Sub-Goal
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

export const maschinenelementeSubGoalTasks = {

  // ── melem-1-1 (4 subGoals) ──────────────────────────────────────────────────
  // 'melem-1-1': {
  //   0: [], // Vorspannkraft $F_V$ erzeugt Klemmkraft in der Fuge — verhindert Fugenöffnen
  //   1: [], // Kraftverteilung: nur ein Bruchteil der Betriebskraft fließt durch die Schra
  //   2: [], // Festigkeitsklassen 8.8, 10.9, 12.9: erste Zahl ≈ $R_m/100$ MPa, zweite ≈ $R
  //   3: [], // Anziehdrehmoment $M_A$ aus Hersteller-Tabelle — nie größer als Streckgrenze
  // },

  // ── melem-1-2 (4 subGoals) ──────────────────────────────────────────────────
  // 'melem-1-2': {
  //   0: [], // Formschluss: Geometrie überträgt Kraft (Passfeder, Zahn); Kraftschluss: Rei
  //   1: [], // Drehmoment aus Umfangskraft: $M_t = F_u \\cdot r$; Umfangskraft $F_u = 2 M_
  //   2: [], // Flächenpressung an der Passfeder: $p = F_u / (l \\cdot h/2) \\le p_{zul}$ —
  //   3: [], // Passfedern sind Normteile nach DIN 6885 — Form A (rund), Form B (gerade); B
  // },

  // ── melem-1-3 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-1-3': {
  //   0: [], // Kehlnaht-Spannung: $\\tau = F/(a \\cdot l_w)$
  //   1: [], // Nahtdicke Kehlnaht: $a \\approx 0{,}7 \\cdot h$ (Schenkellänge $h$)
  //   2: [], // Verbindungsarten: Schweißen (stoffschlüssig, dauerhaft), Schrauben (lösbar)
  //   3: [], // Tragende Nahtlänge $l_w$ = geometrische Länge minus Endkrater (≈ $l - 2a$)
  //   4: [], // Zulässige Schweißnahtspannung = Grundwerkstoff $\\times$ Schweißfaktor (z.B
  // },

  // ── melem-2-1 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-2-1': {
  //   0: [], // Welle überträgt Drehmoment und Rotation
  //   1: [], // Radiallast: quer zur Wellenachse; Axiallast: entlang Wellenachse
  //   2: [], // Lagerfunktionen: Führung (radial/axial) + Stützung (Kraftaufnahme)
  //   3: [], // Fest-Los-Lagerung: ein Lager fixiert axial, anderes erlaubt Längsdehnung
  //   4: [], // Lagerarten: Rillenkugel-, Schrägkugel-, Kegelrollen-, Pendelrollenlager
  // },

  // ── melem-2-2 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-2-2': {
  //   0: [], // Übersetzung: $i = z_2/z_1 = n_1/n_2 = d_2/d_1$
  //   1: [], // Mehrstufiges Getriebe: $i_\\text{ges} = i_1 \\cdot i_2 \\cdots$
  //   2: [], // Drehmoment-Wandlung: $M_2 = i \\cdot M_1 \\cdot \\eta$ (Untersetzung steige
  //   3: [], // Umfangskraft $F_t = 2M/d$
  //   4: [], // Modul $m = d/z$ — Standardgröße für Zahnrad-Geometrie
  // },

  // ── melem-2-3 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-2-3': {
  //   0: [], // L10-Lebensdauer: $L_{10} = (C/P)^p$ Mio. Umdrehungen
  //   1: [], // Exponent: $p = 3$ Kugellager, $p = 10/3$ Rollenlager
  //   2: [], // In Stunden: $L_{10h} = L_{10} \\cdot 10^6/(60 \\cdot n)$
  //   3: [], // C = dyn. Tragzahl (Katalog), P = äquivalente dyn. Last ($P = X F_r + Y F_a$
  //   4: [], // L10 = 10 % Ausfallwahrscheinlichkeit (90 % der Lager halten länger)
  // },

  // ── melem-3-1 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-3-1': {
  //   0: [], // Leistung: $P = M \\omega = M (2\\pi n/60)$
  //   1: [], // Umfangskraft am Zahnrad: $F_t = 2M/d$
  //   2: [], // Mehrstufige Übersetzung: $i_\\text{ges} = \\prod i_i$
  //   3: [], // Abtriebsdrehzahl: $n_2 = n_1/i_\\text{ges}$
  //   4: [], // Drehmoment steigt bei Untersetzung: $M_2 = i M_1 \\eta$
  // },

  // ── melem-3-2 (5 subGoals) ──────────────────────────────────────────────────
  // 'melem-3-2': {
  //   0: [], // Kehlnaht: $\\tau = F/(a l_w)$, $a = 0{,}7 h$
  //   1: [], // Lagerlebensdauer: $L_{10} = (C/P)^p$, $p = 3$ (Kugel) / $p = 10/3$ (Rolle)
  //   2: [], // Einheiten-Check: L10 in Mio. U, L10h in Stunden nach $\\times 10^6/(60n)$
  //   3: [], // Leistungs-Drehmoment-Umrechnung $\\omega = 2\\pi n/60$
  //   4: [], // Plausibilitäts-Check: typische Lagerlebensdauer 5000–50000 h
  // },
}
