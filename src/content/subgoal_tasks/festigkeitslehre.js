// ═══════════════════════════════════════════════════════════════════════════
// Festigkeitslehre — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: { [subGoalIndex]: Exercise[] }
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const festigkeitslehreSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // fest-1-3 — Schubspannung und Torsion  (5 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'fest-1-3': {

    // ── [0] Torsionsspannung: τ_max = M_T / W_p ─────────────────────────
    0: [
      ni(
        'Sub-Goal "Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$": Eine Welle (Vollkreis, $d = 50\\,\\text{mm}$) überträgt das Torsionsmoment $M_T = 500\\,\\text{Nm}$. Wie groß ist die maximale Schubspannung? (auf eine Nachkommastelle in N/mm²)',
        20.4, 0.3, 'N/mm²',
        `**Ansatz:** Torsion am Vollkreis: $\\tau_\\text{max} = M_T/W_p$ mit $W_p = \\pi d^3/16$. Einheiten konsequent halten: $M_T$ in Nmm, $d$ in mm ⇒ $\\tau$ in N/mm² = MPa.

**Rechnung:** $M_T = 500\\,\\text{Nm} = 500\\,000\\,\\text{Nmm}$. $W_p = \\pi\\cdot 50^3/16 = \\pi\\cdot 125\\,000/16 \\approx 24\\,544\\,\\text{mm}^3$. $\\tau_\\text{max} = 500\\,000/24\\,544 \\approx 20{,}4\\,\\text{N/mm}^2$.

**Probe:** Einheiten: $\\text{Nmm}/\\text{mm}^3 = \\text{N/mm}^2 = \\text{MPa}$. ✓ Für Baustahl S235 ($\\tau_\\text{zul} \\approx 85\\,\\text{MPa}$) ist die Welle klar im sicheren Bereich.

**Typischer Fehler:** $M_T$ in Nm statt Nmm einsetzen ($500/24\\,544 \\approx 0{,}02$) oder mit $W_p = \\pi d^3/32$ (Flächenträgheitsmoment $I_p$) verwechseln — liefert die Hälfte.`,
        [
          'Erst Einheiten angleichen: Nm → Nmm.',
          '$W_p = \\pi d^3/16$ (Widerstandsmoment, nicht Trägheitsmoment!).',
          '$\\tau_\\text{max} = M_T/W_p$.',
        ],
      ),
      mc(
        'Sub-Goal "Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$": An welcher Stelle im Querschnitt einer tordierten Vollwelle ist die Schubspannung **maximal**?',
        [
          'in der Mitte auf der Drehachse',
          'am Außenrand (Oberfläche)',
          'im Abstand $d/4$ von der Achse',
          'überall gleich groß',
        ],
        1,
        `**Ansatz:** Die Schubspannungsverteilung bei Torsion ist **linear** mit dem Abstand $r$ von der Drehachse: $\\tau(r) = M_T\\cdot r/I_p$. Maximum dort, wo $r$ maximal: am Außenrand, $r = d/2$.

**Rechnung:** $\\tau(r)/\\tau_\\text{max} = r/(d/2)$. Bei $r = 0$: $\\tau = 0$. Bei $r = d/2$: $\\tau = M_T\\cdot(d/2)/I_p = M_T/W_p = \\tau_\\text{max}$.

**Probe:** Deshalb sind Hohlwellen so effizient — sie entfernen das Material dort, wo $\\tau$ ohnehin klein ist (innen), und nutzen den Querschnitt außen optimal.

**Typischer Fehler:** Schubspannung bei Torsion mit Normalspannung bei Zug gleichsetzen (dort ist $\\sigma$ über den Querschnitt konstant). Bei Torsion ist sie **nicht** konstant, sondern linear in $r$.`,
        [
          'Lineare Verteilung in $r$: $\\tau(r) \\propto r$.',
          'Wo ist $r$ maximal?',
          '$r_\\text{max} = d/2$ → Oberfläche.',
        ],
        {
          0: 'Auf der Drehachse ist $r = 0$, also $\\tau = 0$. Das ist der Ort **minimaler** Schubspannung, nicht maximaler.',
          2: '$d/4$ ist der halbe Außenradius. $\\tau(d/4) = \\tau_\\text{max}/2$ — die Hälfte des Maximalwerts, nicht das Maximum.',
          3: 'Bei Torsion ist die Verteilung linear in $r$ — also nicht konstant. "Überall gleich" gilt bei reinem Zug oder bei dünnen Hohlzylindern (dort fast konstant).',
        },
      ),
      tf(
        'Sub-Goal "Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$": Bei einer Welle aus Vollkreisquerschnitt verdoppelt sich die maximale Torsionsspannung, wenn das Torsionsmoment verdoppelt wird (bei konstantem Durchmesser).',
        true,
        `**Ansatz:** $\\tau_\\text{max} = M_T/W_p$ ist **linear** in $M_T$ bei festem $W_p$ (also festem $d$).

**Rechnung:** $M_T \\to 2M_T$ ⇒ $\\tau_\\text{max} \\to 2\\tau_\\text{max}$.

**Probe:** Anwendung Getriebewelle: Wird das übertragene Drehmoment verdoppelt, steigt die Spannung linear — die Sicherheitsreserve (z. B. $S = \\tau_\\text{zul}/\\tau$) halbiert sich.

**Typischer Fehler:** Linearen Zusammenhang mit dem quadratischen oder kubischen Einfluss des Durchmessers verwechseln ($W_p \\propto d^3$). Das gilt **bei fester Geometrie** — $M_T$ wirkt linear, $d$ kubisch.`,
        [
          'Schreibe die Formel $\\tau = M_T/W_p$ hin.',
          'Welche Potenz hat $M_T$?',
          'Linear.',
        ],
      ),
      ni(
        'Sub-Goal "Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$": Welle 1 hat $d_1 = 30\\,\\text{mm}$ und $\\tau_\\text{max,1} = 80\\,\\text{N/mm}^2$ bei einem bestimmten $M_T$. Welle 2 (selbes $M_T$) hat $d_2 = 60\\,\\text{mm}$. Welche Schubspannung ergibt sich bei Welle 2? (N/mm², auf eine Nachkommastelle)',
        10, 0.2, 'N/mm²',
        `**Ansatz:** $\\tau_\\text{max} = M_T/W_p$ mit $W_p = \\pi d^3/16$. Bei festem $M_T$ gilt $\\tau \\propto 1/d^3$.

**Rechnung:** $d$ verdoppelt ⇒ $W_p$ wird $2^3 = 8\\times$ größer ⇒ $\\tau$ wird $1/8$ so groß. $\\tau_\\text{max,2} = 80/8 = 10\\,\\text{N/mm}^2$.

**Probe:** Direkt nachrechnen: $W_{p,1} = \\pi\\cdot 27\\,000/16 \\approx 5301$, $W_{p,2} = \\pi\\cdot 216\\,000/16 \\approx 42\\,412 = 8\\cdot 5301$. ✓ $\\tau$ fällt genau um Faktor $8$.

**Typischer Fehler:** Linear rechnen ($\\tau \\to \\tau/2$, ergibt $40$) oder quadratisch ($\\tau \\to \\tau/4$, ergibt $20$). Tatsächlich ist die Abhängigkeit **kubisch** in $d$.`,
        [
          '$W_p \\propto d^3$.',
          '$d$ verdoppelt → $W_p$ achtfach.',
          '$\\tau$ fällt um Faktor $8$.',
        ],
      ),
      sorting(
        'Sub-Goal "Torsionsspannung: $\\tau_\\text{max} = M_T/W_p$": Bringe die Rechenschritte einer Torsionsaufgabe (gegeben: $d$ in mm, $M_T$ in Nm, gesucht: $\\tau_\\text{max}$ in N/mm²) in die richtige Reihenfolge.',
        [
          'Einheiten prüfen: $M_T$ von Nm in Nmm umrechnen ($\\cdot 1000$)',
          'Polares Widerstandsmoment: $W_p = \\pi d^3/16$',
          'Maximale Schubspannung: $\\tau_\\text{max} = M_T/W_p$',
          'Plausibilität: $\\tau_\\text{max}$ mit $\\tau_\\text{zul}$ vergleichen',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch: **erst** Einheiten, **dann** Geometrie ($W_p$), **dann** die eigentliche Spannungsformel, **zuletzt** der Sicherheitscheck.

**Rechnung:** (1) $M_T$ in Nmm bringen, damit mit $d$ in mm das Ergebnis in N/mm² herauskommt. (2) $W_p$ rein geometrisch. (3) Hauptformel. (4) Auslegungscheck.

**Probe:** Reihenfolge vertauscht = Fehlerquelle. Wer Einheiten am Schluss prüft, hat oft schon einen Faktor 1000 eingebaut.

**Typischer Fehler:** $\\tau$ ausrechnen und erst dann Einheiten prüfen — Fehler bleiben unentdeckt, weil "die Zahl plausibel aussieht".`,
        [
          'Einheitenumrechnung gehört an den Anfang.',
          'Geometrie ($W_p$) vor Spannung.',
          'Sicherheitsvergleich am Ende.',
        ],
      ),
    ],

    // ── [1] Polares Widerstandsmoment: W_p = π d³ / 16 ──────────────────
    1: [
      ni(
        'Sub-Goal "Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$": Vollkreisquerschnitt mit $d = 30\\,\\text{mm}$. Berechne das polare Widerstandsmoment. (auf ganze mm³)',
        5301, 20, 'mm³',
        `**Ansatz:** Für Vollkreis: $W_p = \\pi d^3/16$.

**Rechnung:** $d^3 = 27\\,000\\,\\text{mm}^3$. $W_p = \\pi\\cdot 27\\,000/16 \\approx 84\\,823/16 \\approx 5301\\,\\text{mm}^3$.

**Probe:** Einheit: $\\text{mm}^3$. ✓ Überschlag: $\\pi/16 \\approx 0{,}196$, also $W_p \\approx 0{,}196\\cdot d^3 = 0{,}196\\cdot 27\\,000 \\approx 5292$. ✓

**Typischer Fehler:** Formel $W_p = \\pi d^3/32$ verwenden (das ist $I_p/r$ halbiert — also genau die Hälfte) oder $d^2$ statt $d^3$.`,
        [
          '$W_p = \\pi d^3/16$ — für den **Vollkreis**.',
          '$d^3 = 30^3 = 27\\,000$.',
          '$\\pi\\cdot 27\\,000/16 \\approx 5301$.',
        ],
      ),
      mc(
        'Sub-Goal "Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$": Der Durchmesser einer Welle wird **halbiert**. Um welchen Faktor ändert sich das polare Widerstandsmoment $W_p$?',
        [
          'auf $1/2$',
          'auf $1/4$',
          'auf $1/8$',
          'auf $1/16$',
        ],
        2,
        `**Ansatz:** $W_p = \\pi d^3/16 \\propto d^3$ — kubische Abhängigkeit.

**Rechnung:** $d \\to d/2$ ⇒ $d^3 \\to d^3/8$ ⇒ $W_p \\to W_p/8$.

**Probe:** Konkret: $d=30$ ergibt $W_p \\approx 5301$. $d=15$ ergibt $W_p = \\pi\\cdot 3\\,375/16 \\approx 662{,}7 = 5301/8$. ✓

**Typischer Fehler:** Linear ($1/2$) oder quadratisch ($1/4$) denken — die $d^3$-Abhängigkeit unterschätzen. Auslegungs-Konsequenz: kleine Durchmesseränderungen wirken sich dramatisch auf die Tragfähigkeit aus.`,
        [
          'Welche Potenz von $d$ steht in $W_p$?',
          'Kubisch.',
          '$(1/2)^3 = 1/8$.',
        ],
        {
          0: 'Linear wäre $W_p \\propto d$. Die Formel enthält aber $d^3$.',
          1: 'Quadratisch wäre $W_p \\propto d^2$ (das passt eher zu Flächen $A = \\pi d^2/4$). $W_p$ ist jedoch kubisch.',
          3: '$1/16$ wäre $d^4$-Abhängigkeit — das gilt für das **Flächenträgheitsmoment** $I_p = \\pi d^4/32$. $W_p$ ist eine Potenz niedriger.',
        },
      ),
      tf(
        'Sub-Goal "Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$": Das polare Widerstandsmoment $W_p$ wächst **linear** mit dem Wellendurchmesser.',
        false,
        `**Ansatz:** $W_p = \\pi d^3/16$ ist **kubisch** in $d$, nicht linear.

**Rechnung:** $d \\cdot 2 \\Rightarrow W_p \\cdot 8$, $d \\cdot 3 \\Rightarrow W_p \\cdot 27$.

**Probe:** Ingenieurkonsequenz: 10 % mehr Durchmesser bringen $1{,}1^3 \\approx 1{,}33$, also **33 %** mehr Tragfähigkeit bei Torsion. Das ist viel effizienter als 10 % mehr Länge oder Material.

**Typischer Fehler:** "Doppelt so dick ⇒ doppelt so stark" annehmen. Tatsächlich ist der Effekt achtfach.`,
        [
          'Potenz in der Formel.',
          'Kubisch, nicht linear.',
          '$d \\to 2d$ bedeutet $W_p \\to 8W_p$.',
        ],
      ),
      ni(
        'Sub-Goal "Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$": Welcher **Mindestdurchmesser** ist erforderlich, damit eine Welle bei $M_T = 300\\,\\text{Nm}$ die zulässige Spannung $\\tau_\\text{zul} = 60\\,\\text{N/mm}^2$ nicht überschreitet? (auf eine Nachkommastelle in mm)',
        29.4, 0.3, 'mm',
        `**Ansatz:** Auslegungsformel: $\\tau_\\text{zul} \\geq M_T/W_p$ ⇒ $W_p \\geq M_T/\\tau_\\text{zul}$. Dann $d$ aus $W_p = \\pi d^3/16$.

**Rechnung:** $M_T = 300\\,000\\,\\text{Nmm}$. $W_{p,\\text{erf}} = 300\\,000/60 = 5\\,000\\,\\text{mm}^3$. $d = \\sqrt[3]{16\\cdot 5\\,000/\\pi} = \\sqrt[3]{25\\,465} \\approx 29{,}41\\,\\text{mm}$.

**Probe:** Mit $d = 29{,}4$: $W_p = \\pi\\cdot 29{,}4^3/16 = \\pi\\cdot 25\\,412/16 \\approx 4\\,989\\,\\text{mm}^3$. $\\tau = 300\\,000/4\\,989 \\approx 60{,}1\\,\\text{N/mm}^2$. ✓ Unterhalb von $\\tau_\\text{zul}$ ⇒ Wahl **$d = 30\\,\\text{mm}$** aus Normreihe.

**Typischer Fehler:** $M_T$ in Nm belassen oder die dritte Wurzel vergessen ($d = W_p\\cdot 16/\\pi = 25\\,465$ als $d$ interpretieren).`,
        [
          'Erst $W_\\text{p,erf} = M_T/\\tau_\\text{zul}$.',
          'Dann $d = \\sqrt[3]{16 W_p/\\pi}$.',
          'Nicht vergessen: Nm → Nmm.',
        ],
      ),
      matching(
        'Sub-Goal "Polares Widerstandsmoment Kreisquerschnitt: $W_p = \\pi d^3/16$": Ordne jedem Wellendurchmesser den passenden Wert des polaren Widerstandsmoments zu.',
        [
          { left: '$d = 20\\,\\text{mm}$', right: '$W_p \\approx 1570\\,\\text{mm}^3$' },
          { left: '$d = 30\\,\\text{mm}$', right: '$W_p \\approx 5300\\,\\text{mm}^3$' },
          { left: '$d = 40\\,\\text{mm}$', right: '$W_p \\approx 12\\,566\\,\\text{mm}^3$' },
          { left: '$d = 50\\,\\text{mm}$', right: '$W_p \\approx 24\\,544\\,\\text{mm}^3$' },
        ],
        `**Ansatz:** $W_p = \\pi d^3/16 \\approx 0{,}1963\\cdot d^3$. Jeder Wert entsteht durch Einsetzen.

**Rechnung:** $d=20$: $0{,}1963\\cdot 8\\,000 = 1\\,570$. $d=30$: $0{,}1963\\cdot 27\\,000 = 5\\,301$. $d=40$: $0{,}1963\\cdot 64\\,000 = 12\\,566$. $d=50$: $0{,}1963\\cdot 125\\,000 = 24\\,544$.

**Probe:** Verhältnis aufeinanderfolgender Werte: $5\\,300/1\\,570 \\approx 3{,}37 = (30/20)^3 = 1{,}5^3$. ✓ Kubische Skalierung.

**Typischer Fehler:** Werte auswendig lernen wollen — besser: die Formel und Verhältnisrechnung verinnerlichen. Aus $d=30 \\to d=60$ muss $W_p$ um Faktor 8 steigen.`,
        [
          'Faktor vorziehen: $\\pi/16 \\approx 0{,}196$.',
          'Für jeden $d$ dann $d^3$ berechnen.',
          'Verhältnisse prüfen: kubische Skalierung.',
        ],
      ),
    ],

    // ── [2] Verdrehwinkel φ = M_T L / (G I_p) ───────────────────────────
    2: [
      ni(
        'Sub-Goal "Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$": Welle aus Stahl ($G = 80\\,000\\,\\text{N/mm}^2$), $d = 40\\,\\text{mm}$, $L = 1\\,000\\,\\text{mm}$, $M_T = 300\\,\\text{Nm}$. Berechne den Verdrehwinkel in Radiant. (auf 4 Nachkommastellen)',
        0.0149, 0.0005, 'rad',
        `**Ansatz:** $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$. Alle Größen im SI-konsistenten Satz: $M_T$ in Nmm, $L$ in mm, $G$ in N/mm², $I_p$ in mm⁴ ⇒ $\\varphi$ in rad (dimensionslos).

**Rechnung:** $I_p = \\pi\\cdot 40^4/32 = \\pi\\cdot 2\\,560\\,000/32 \\approx 251\\,327\\,\\text{mm}^4$. $M_T = 300\\,000\\,\\text{Nmm}$. $\\varphi = 300\\,000\\cdot 1\\,000/(80\\,000\\cdot 251\\,327) \\approx 3\\cdot 10^8/2{,}011\\cdot 10^{10} \\approx 0{,}01492\\,\\text{rad}$.

**Probe:** In Grad: $\\varphi \\approx 0{,}01492 \\cdot 180/\\pi \\approx 0{,}85°$. Plausibel für Stahlwelle (typische Verdrehwinkel einer Antriebswelle liegen im Bereich zehntel Grad pro Meter).

**Typischer Fehler:** $W_p$ statt $I_p$ einsetzen (um Faktor 2 zu kleiner Nenner, Winkel doppelt so groß). Oder $G$ in MPa nicht in N/mm² konvertieren — $1\\,\\text{MPa} = 1\\,\\text{N/mm}^2$, also identisch, aber Einheiten-Mischung ist die Hauptfehlerquelle.`,
        [
          '$I_p = \\pi d^4/32$ (nicht $W_p$!).',
          '$\\varphi = M_T L/(G I_p)$.',
          'Einheiten mm / N / Nmm konsequent halten.',
        ],
      ),
      mc(
        'Sub-Goal "Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$": Die Länge einer Welle wird **verdreifacht** (bei sonst gleichen Parametern). Wie ändert sich der Verdrehwinkel $\\varphi$?',
        [
          'bleibt gleich',
          'wird dreimal so groß',
          'wird neunmal so groß',
          'wird um $\\sqrt{3}$-fach größer',
        ],
        1,
        `**Ansatz:** $\\varphi = M_T L/(G I_p)$ ist **linear** in $L$.

**Rechnung:** $L \\to 3L$ ⇒ $\\varphi \\to 3\\varphi$.

**Probe:** Anschaulich: Dreimal so viel Welle tordiert ⇒ dreimal so viel Gesamtverdrehung (jeder Millimeter leistet den gleichen Beitrag).

**Typischer Fehler:** Die Längenabhängigkeit mit der $d^4$-Abhängigkeit verwechseln (Faktor 81 oder 9). $L$ wirkt nur linear, $d$ dagegen stark.`,
        [
          'Wo steht $L$ in der Formel — Zähler oder Nenner?',
          'Welche Potenz?',
          'Linear.',
        ],
        {
          0: 'Die Welle muss länger sein, um mehr zu tordieren — die Gesamtverdrehung wächst.',
          2: 'Faktor $9$ wäre quadratisch. $L$ steht aber in erster Potenz im Zähler.',
          3: '$\\sqrt{3}$ gehört zu Wurzelzusammenhängen (etwa bei Eigenfrequenzen). Für $\\varphi(L)$ ist der Zusammenhang linear.',
        },
      ),
      tf(
        'Sub-Goal "Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$": Bei Torsion hängt der Verdrehwinkel von der **vierten Potenz** des Durchmessers ab — Verdoppelung von $d$ verringert $\\varphi$ auf $1/16$.',
        true,
        `**Ansatz:** $\\varphi = M_T L/(G I_p)$ und $I_p = \\pi d^4/32$. Also $\\varphi \\propto 1/d^4$.

**Rechnung:** $d \\to 2d$ ⇒ $I_p \\to 16 I_p$ ⇒ $\\varphi \\to \\varphi/16$.

**Probe:** Ingenieurkonsequenz: Schon geringe Durchmesservergrößerung macht die Welle dramatisch steifer. Deshalb wird bei Wellen mit Steifigkeitsvorgabe fast immer der Durchmesser angepasst, nicht das Material.

**Typischer Fehler:** $d^3$-Abhängigkeit (das gilt für Widerstandsmoment $W_p$, nicht für das Flächenträgheitsmoment $I_p$). $W_p$ für Spannung, $I_p$ für Verformung — Merksatz!`,
        [
          'Welche Potenz hat $d$ in $I_p$?',
          '$d^4$.',
          '$\\varphi \\propto 1/d^4$ ⇒ Faktor $1/16$.',
        ],
      ),
      ni(
        'Sub-Goal "Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$": $d = 20\\,\\text{mm}$, $L = 500\\,\\text{mm}$, $M_T = 50\\,\\text{Nm}$, $G = 80\\,000\\,\\text{N/mm}^2$. Wie groß ist $\\varphi$ in Grad? (auf 2 Nachkommastellen)',
        1.14, 0.05, '°',
        `**Ansatz:** Erst $I_p$, dann $\\varphi$ in Radiant, dann in Grad umrechnen.

**Rechnung:** $I_p = \\pi\\cdot 20^4/32 = \\pi\\cdot 160\\,000/32 \\approx 15\\,708\\,\\text{mm}^4$. $M_T = 50\\,000\\,\\text{Nmm}$. $\\varphi = 50\\,000\\cdot 500/(80\\,000\\cdot 15\\,708) \\approx 2{,}5\\cdot 10^7/1{,}257\\cdot 10^9 \\approx 0{,}01989\\,\\text{rad}$. In Grad: $0{,}01989 \\cdot 180/\\pi \\approx 1{,}14°$.

**Probe:** Pro Meter Welle: $\\varphi/L \\approx 0{,}01989/500 = 3{,}98\\cdot 10^{-5}\\,\\text{rad/mm} = 2{,}28°/\\text{m}$. Liegt in der Größenordnung üblicher Auslegungsrichtwerte (Fahrzeugwellen: $\\leq 0{,}25°/\\text{m}$ Präzision, Transportwellen bis $\\approx 2°/\\text{m}$ zulässig).

**Typischer Fehler:** Die Umrechnung rad → Grad vergessen und das Ergebnis in rad als Grad deklarieren ($0{,}02$ statt $1{,}14$).`,
        [
          '$I_p = \\pi d^4/32$.',
          '$\\varphi_\\text{rad} = M_T L/(G I_p)$.',
          'Umrechnung: $\\varphi_\\text{Grad} = \\varphi_\\text{rad}\\cdot 180/\\pi$.',
        ],
      ),
      sorting(
        'Sub-Goal "Verdrehwinkel: $\\varphi = M_T L/(G I_p)$ mit $I_p = \\pi d^4/32$": Bringe die Rechenschritte zum Verdrehwinkel einer Welle in die richtige Reihenfolge.',
        [
          'Werkstoffkenngröße $G$ nachschlagen (Stahl $\\approx 80\\,000\\,\\text{N/mm}^2$)',
          'Flächenträgheitsmoment $I_p = \\pi d^4/32$ berechnen',
          '$M_T$ in Nmm und $L$ in mm einsetzen',
          '$\\varphi = M_T L/(G I_p)$ ausrechnen (Ergebnis in rad)',
          'rad $\\to$ Grad umrechnen: $\\varphi_\\text{Grad} = \\varphi_\\text{rad}\\cdot 180/\\pi$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Werkstoff → Geometrie → Einheiten → Hauptformel → Einheitenumrechnung am Ende.

**Rechnung:** (1) $G$ ist materialabhängig und wird aus Tabellen geholt. (2) $I_p$ rein geometrisch. (3) Einheiten angleichen, damit das Ergebnis am Ende dimensionsrein rauskommt. (4) Hauptformel. (5) Umrechnung in die oft gewünschte Einheit Grad.

**Probe:** Wenn Schritt 3 fehlt, trägt sich in Schritt 4 ein Faktor 1000 ein — typischer Fehlerfall.

**Typischer Fehler:** Mit $G$ in GPa und $M_T$ in Nm arbeiten und glauben, es kürze sich schon — tut es nicht automatisch, Einheiten müssen aktiv angeglichen werden.`,
        [
          'Materialkonstante vor Geometrie oder Geometrie vor Material — Reihenfolge egal, aber **vor** der Hauptformel.',
          'Einheitenangleichung kommt **vor** der Rechnung, nicht danach.',
          'Umrechnung Einheit ganz am Schluss.',
        ],
      ),
    ],

    // ── [3] Schubmodul Stahl G ≈ 80 GPa ─────────────────────────────────
    3: [
      ni(
        'Sub-Goal "Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)": Stahl mit $E = 210\\,000\\,\\text{N/mm}^2$ und Poissonzahl $\\nu = 0{,}3$. Berechne den Schubmodul $G$. (auf ganze N/mm²)',
        80769, 200, 'N/mm²',
        `**Ansatz:** Zusammenhang isotroper linear-elastischer Werkstoffe: $G = E/(2(1+\\nu))$.

**Rechnung:** Nenner: $2(1+0{,}3) = 2{,}6$. $G = 210\\,000/2{,}6 \\approx 80\\,769\\,\\text{N/mm}^2$.

**Probe:** Das ist der bekannte Tabellenwert für Stahl $G \\approx 80\\,000\\,\\text{MPa} = 80\\,\\text{GPa}$. ✓ Faustformel: $G \\approx 0{,}385\\cdot E$ für $\\nu = 0{,}3$.

**Typischer Fehler:** $G = E/(1+\\nu)$ (Faktor $2$ im Nenner vergessen — liefert $161\\,538$, doppelt so groß) oder $\\nu$ vergessen und $G = E/2 = 105\\,000$ rechnen.`,
        [
          'Formel: $G = E/(2(1+\\nu))$.',
          'Klammer zuerst: $1+\\nu = 1{,}3$, dann Faktor 2.',
          '$210\\,000/2{,}6$.',
        ],
      ),
      tf(
        'Sub-Goal "Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)": Für isotrope Werkstoffe gilt der Zusammenhang $G = E/(2(1+\\nu))$ zwischen E-Modul, Poissonzahl und Schubmodul.',
        true,
        `**Ansatz:** Klassische Elastizitätstheorie für isotrope, homogene Werkstoffe: die drei Kenngrößen $E$, $G$, $\\nu$ sind **nicht** unabhängig, sondern über diese Beziehung gekoppelt.

**Rechnung:** Für Stahl ($E \\approx 210\\,\\text{GPa}$, $\\nu \\approx 0{,}3$): $G = 210/(2\\cdot 1{,}3) \\approx 80{,}8\\,\\text{GPa}$. Für Aluminium ($E \\approx 70\\,\\text{GPa}$, $\\nu \\approx 0{,}33$): $G \\approx 70/2{,}66 \\approx 26{,}3\\,\\text{GPa}$.

**Probe:** $G$ ist bei metallischen Werkstoffen rund $\\tfrac{2}{5}\\cdot E$ — konsistent mit der Formel bei $\\nu \\approx 0{,}3$.

**Typischer Fehler:** Annehmen, $E$, $G$, $\\nu$ seien drei unabhängig messbare Zahlen. Bei isotropen Werkstoffen legen zwei der drei Größen die dritte fest.`,
        [
          'Isotrope Materialien haben zwei unabhängige Elastizitätskonstanten.',
          '$\\nu$ und $E$ reichen, $G$ folgt.',
          'Formel: $G = E/(2(1+\\nu))$.',
        ],
      ),
      mc(
        'Sub-Goal "Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)": Welcher Wert liegt typischerweise im Bereich des Schubmoduls von **Baustahl**?',
        [
          '$G \\approx 10\\,000\\,\\text{N/mm}^2$',
          '$G \\approx 27\\,000\\,\\text{N/mm}^2$',
          '$G \\approx 80\\,000\\,\\text{N/mm}^2$',
          '$G \\approx 210\\,000\\,\\text{N/mm}^2$',
        ],
        2,
        `**Ansatz:** Tabellenwerte unverzichtbar im Kopf haben: Stahl $E \\approx 210\\,000$, $G \\approx 80\\,000\\,\\text{N/mm}^2$.

**Rechnung:** Mit $E = 210\\,000$ und $\\nu = 0{,}3$: $G = 210\\,000/2{,}6 \\approx 80\\,800\\,\\text{N/mm}^2 \\approx 80\\,\\text{GPa}$.

**Probe:** $G/E \\approx 80\\,000/210\\,000 \\approx 0{,}38$. Für alle Stähle sehr konstant, weil $\\nu$ um $0{,}3$ wenig schwankt.

**Typischer Fehler:** $G$ und $E$ verwechseln (Stahl-$E = 210\\,000$ für Schubmodul nehmen) oder Werte für Aluminium ($G \\approx 27\\,000$) für Stahl halten.`,
        [
          '$G \\approx 0{,}4\\cdot E$.',
          'Für Stahl: $E \\approx 210\\,000$.',
          '$0{,}4\\cdot 210\\,000 = 84\\,000$ ⇒ ca. $80\\,000$.',
        ],
        {
          0: '$10\\,000\\,\\text{N/mm}^2$ ist zu klein — eher im Bereich von Kunststoffen. Stahl liegt ca. 8-fach höher.',
          1: '$27\\,000\\,\\text{N/mm}^2$ ist der typische Wert für **Aluminium**, nicht Stahl.',
          3: '$210\\,000\\,\\text{N/mm}^2$ ist der **E-Modul** von Stahl. Der Schubmodul ist kleiner (Faktor $\\approx 0{,}4$).',
        },
      ),
      matching(
        'Sub-Goal "Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)": Ordne jedem Werkstoff seinen typischen Schubmodul zu (Richtwerte in N/mm²).',
        [
          { left: 'Stahl (S235, C45, …)', right: '$G \\approx 80\\,000\\,\\text{N/mm}^2$' },
          { left: 'Aluminiumlegierungen', right: '$G \\approx 27\\,000\\,\\text{N/mm}^2$' },
          { left: 'Kupfer / Kupferlegierungen', right: '$G \\approx 46\\,000\\,\\text{N/mm}^2$' },
          { left: 'Grauguss (EN-GJL-250)', right: '$G \\approx 40\\,000\\,\\text{N/mm}^2$' },
        ],
        `**Ansatz:** Technische Tabellenwerte — sollten für die Klausur im Kopf sein.

**Rechnung:** Alle Werte ergeben sich aus $G = E/(2(1+\\nu))$ mit typischen $E$/$\\nu$ der jeweiligen Werkstoffgruppe.

**Probe:** Merkreihenfolge absteigend: Stahl (80) > Kupfer (46) > Grauguss (40) > Alu (27) > Titan (41) > Messing (35).

**Typischer Fehler:** Stahl und Aluminium verwechseln — Aluminium ist etwa **ein Drittel** steif wie Stahl, nicht "ähnlich".`,
        [
          'Stahl als Referenz: 80.',
          'Aluminium ca. $1/3$ von Stahl.',
          'Kupfer liegt dazwischen.',
        ],
      ),
      ni(
        'Sub-Goal "Schubmodul Stahl: $G \\approx 80\\,000$ MPa (ca. $E/(2(1+\\nu))$)": Aluminium mit $E = 70\\,000\\,\\text{N/mm}^2$ und $\\nu = 0{,}33$. Berechne $G$ in N/mm². (auf ganze Zahl)',
        26316, 100, 'N/mm²',
        `**Ansatz:** Gleiche Formel wie bei Stahl, nur mit Aluminium-Kenngrößen: $G = E/(2(1+\\nu))$.

**Rechnung:** Nenner: $2\\cdot 1{,}33 = 2{,}66$. $G = 70\\,000/2{,}66 \\approx 26\\,316\\,\\text{N/mm}^2$.

**Probe:** Stahl-Aluminium-Verhältnis: $G_\\text{Alu}/G_\\text{Stahl} \\approx 26\\,316/80\\,769 \\approx 0{,}33$. Konsistent mit dem häufig zitierten Merkwert "Alu ist rund ein Drittel so steif wie Stahl".

**Typischer Fehler:** $\\nu$ von Stahl ($0{,}3$) unbedacht verwenden ($G \\approx 26\\,923$) — marginal, aber methodisch inkonsistent. Oder Poissonzahl von Beton (ca. $0{,}2$) nehmen.`,
        [
          '$G = E/(2(1+\\nu))$.',
          'Aluminium: $\\nu \\approx 0{,}33$.',
          '$70\\,000/2{,}66$.',
        ],
      ),
    ],

    // ── [4] Reiner Schub (Niet, Bolzen): τ = F/A ────────────────────────
    4: [
      ni(
        'Sub-Goal "Reiner Schub (Niet, Bolzen): $\\tau = F/A$": Ein **einschnittiger** Niet ($d = 10\\,\\text{mm}$) wird mit $F = 5\\,\\text{kN}$ auf Schub belastet. Wie groß ist die Scherspannung? (auf eine Nachkommastelle in N/mm²)',
        63.7, 0.5, 'N/mm²',
        `**Ansatz:** Reiner Schub bei einschnittiger Nietverbindung: $\\tau = F/A$ mit $A = \\pi d^2/4$ (eine Scherfläche).

**Rechnung:** $A = \\pi\\cdot 10^2/4 = 25\\pi \\approx 78{,}54\\,\\text{mm}^2$. $\\tau = 5\\,000/78{,}54 \\approx 63{,}66\\,\\text{N/mm}^2$.

**Probe:** Einheit: $\\text{N}/\\text{mm}^2 = \\text{MPa}$. ✓ Für Niet-Werkstoff mit $\\tau_\\text{zul} \\approx 100\\,\\text{MPa}$ bleibt Sicherheit $S \\approx 1{,}57$.

**Typischer Fehler:** $F$ in N statt kN nicht umrechnen ($\\tau \\approx 0{,}064\\,\\text{N/mm}^2$, 1000-fach zu klein) oder $A$ mit $\\pi d^2$ statt $\\pi d^2/4$ rechnen (Faktor 4 zu groß).`,
        [
          'Einschnittig ⇒ eine Scherfläche.',
          '$A = \\pi d^2/4$.',
          '$\\tau = F/A$.',
        ],
      ),
      mc(
        'Sub-Goal "Reiner Schub (Niet, Bolzen): $\\tau = F/A$": Was ist der **Unterschied** zwischen der Spannungsverteilung bei Torsion (Welle) und bei reinem Schub (Niet/Bolzen)?',
        [
          'Beide haben über den Querschnitt konstante Spannung.',
          'Bei Torsion ist $\\tau$ linear in $r$, bei reinem Schub wird $\\tau$ als **über den Querschnitt konstant** angenommen.',
          'Bei reinem Schub ist $\\tau$ linear in $r$, bei Torsion konstant.',
          'Beide haben eine quadratische Verteilung.',
        ],
        1,
        `**Ansatz:** Zwei verschiedene Belastungsbilder:
- Torsion: $\\tau(r) = M_T\\cdot r/I_p$ — linear in $r$, maximal am Rand, null in der Mitte.
- Reiner Schub (Abscheren): $\\tau = F/A$ — idealisiert **konstant** über den Querschnitt.

**Rechnung:** Die Idealisierung "konstantes $\\tau$" bei Niet/Bolzen ist eine Vereinfachung — tatsächlich treten Randspannungskonzentrationen auf, aber die Norm-Auslegung verwendet die mittlere Spannung.

**Probe:** Formeln vergleichen: Torsion $\\tau_\\text{max} = M_T/W_p$ (Hebelwirkung nimmt mit $r$ zu), Schub $\\tau = F/A$ (keine Hebelarm-Logik, nur Kraftdichte).

**Typischer Fehler:** Torsionsformel auf Niete anwenden oder umgekehrt. Formelwahl richtet sich nach dem Belastungsbild, nicht nach der Bauteilform.`,
        [
          'Welches Moment / welche Kraft greift an?',
          'Torsion: Drehmoment ⇒ Hebelarm ⇒ $r$-Abhängigkeit.',
          'Schub: reine Kraft senkrecht zur Fläche ⇒ flächenmittel.',
        ],
        {
          0: 'Torsion hat keine konstante Spannung — die linear mit $r$ ansteigende Verteilung ist ein zentrales Merkmal.',
          2: 'Die Rollen sind vertauscht. Torsion = lineare $r$-Verteilung, reiner Schub = idealisiert konstant.',
          3: 'Quadratische Verteilungen kommen bei Biegeschubspannung (Balken) vor, nicht bei einfachem Schub oder Torsion am Kreisquerschnitt.',
        },
      ),
      tf(
        'Sub-Goal "Reiner Schub (Niet, Bolzen): $\\tau = F/A$": Bei einem **zweischnittigen** Bolzen (Kraft wirkt auf zwei Scherebenen) ist die Schubspannung bei gleicher Gesamtkraft nur halb so groß wie bei einem einschnittigen Bolzen gleichen Durchmessers.',
        true,
        `**Ansatz:** Zweischnittig bedeutet: die Kraft $F$ verteilt sich auf **zwei** Scherflächen $A = \\pi d^2/4$. Effektive Scherfläche: $2A$.

**Rechnung:** $\\tau_\\text{2-schnittig} = F/(2A) = \\tfrac{1}{2}\\cdot F/A = \\tfrac{1}{2}\\tau_\\text{1-schnittig}$.

**Probe:** Konstruktive Konsequenz: Zweischnittige Verbindungen können bei gleichem Bolzendurchmesser doppelt so hohe Kräfte übertragen — Grund, warum Gabelköpfe oft zweischnittig ausgeführt werden.

**Typischer Fehler:** Die Gesamtkraft $F$ auf **einen** Scherquerschnitt beziehen und die zweite Scherfläche übersehen. Ergebnis wäre dann doppelt so groß wie der korrekte Wert.`,
        [
          'Bei zweischnittig trägt der Bolzen an zwei Stellen.',
          'Effektive Fläche: $2\\cdot A$.',
          '$\\tau = F/(2A)$ statt $F/A$.',
        ],
      ),
      ni(
        'Sub-Goal "Reiner Schub (Niet, Bolzen): $\\tau = F/A$": Ein **zweischnittiger** Bolzen mit $d = 12\\,\\text{mm}$ wird auf Scherung mit $F = 20\\,\\text{kN}$ belastet. Wie groß ist die Scherspannung pro Scherfläche? (auf eine Nachkommastelle in N/mm²)',
        88.4, 0.5, 'N/mm²',
        `**Ansatz:** Zweischnittig ⇒ effektive Scherfläche $= 2\\cdot A_1$ mit $A_1 = \\pi d^2/4$.

**Rechnung:** $A_1 = \\pi\\cdot 144/4 = 36\\pi \\approx 113{,}1\\,\\text{mm}^2$. $A_\\text{eff} = 2\\cdot 113{,}1 = 226{,}2\\,\\text{mm}^2$. $\\tau = 20\\,000/226{,}2 \\approx 88{,}4\\,\\text{N/mm}^2$.

**Probe:** Pro Scherfläche trägt die halbe Kraft $F/2 = 10\\,\\text{kN}$ die Einzelfläche $A_1 = 113{,}1\\,\\text{mm}^2$ ⇒ $\\tau = 10\\,000/113{,}1 \\approx 88{,}4\\,\\text{N/mm}^2$. ✓ Identisch.

**Typischer Fehler:** Zweischnittigkeit ignorieren und mit nur einer Scherfläche rechnen ($\\tau \\approx 176{,}8$, doppelt zu groß). Oder umgekehrt $F/4$ rechnen (Kraftaufteilung unklar).`,
        [
          'Zweischnittig: zwei Scherflächen.',
          '$A_\\text{eff} = 2\\cdot \\pi d^2/4 = \\pi d^2/2$.',
          '$\\tau = F/A_\\text{eff}$.',
        ],
      ),
      sorting(
        'Sub-Goal "Reiner Schub (Niet, Bolzen): $\\tau = F/A$": Bringe die Schritte zur Auslegung einer Schraubenverbindung (gegeben: übertragene Kraft $F$, zulässige Spannung $\\tau_\\text{zul}$, Anzahl Scherflächen $n$) in die richtige Reihenfolge.',
        [
          'Anzahl der Scherflächen $n$ feststellen (einschnittig $n=1$, zweischnittig $n=2$)',
          'Erforderliche Scherfläche: $A_\\text{erf} = F/(n\\cdot\\tau_\\text{zul})$',
          'Erforderlicher Bolzendurchmesser: $d_\\text{erf} = \\sqrt{4 A_\\text{erf}/\\pi}$',
          'Gewählten Norm-Durchmesser nachschlagen (nächstgrößere M-Gewindestufe)',
          'Verifikation: mit gewähltem $d$ die tatsächliche Spannung $\\tau = F/(n\\pi d^2/4)$ prüfen',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Auslegung nach Spannung: **erst** Szenario, **dann** erforderliche Fläche, **dann** Durchmesser, **dann** Normauswahl, **zuletzt** Nachweis.

**Rechnung:** Jeder Schritt baut auf dem vorherigen auf: $n$ legt fest, wie viel Fläche nötig ist; Fläche legt $d_\\text{erf}$ fest; Normdurchmesser ist $\\geq d_\\text{erf}$; Nachweis schließt die Auslegung ab.

**Probe:** Häufig wird Schritt 5 (Nachweis) weggelassen — dann steht nur die "gerechnete Vorauswahl", nicht der fertige Nachweis. Keine Norm akzeptiert eine Auslegung ohne diesen Schritt.

**Typischer Fehler:** Schritt 4 (Normauswahl) vor Schritt 3 (berechneter Durchmesser) machen und dann rückwärts rechtfertigen — gefährlich, weil unkontrolliert.`,
        [
          'Szenario vor Rechnung.',
          'Rechnung vor Normauswahl.',
          'Nachweis ganz am Ende.',
        ],
      ),
    ],

  },

}
