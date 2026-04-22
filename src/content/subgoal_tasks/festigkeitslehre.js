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

  'fest-1-4': {
    // Sub-Goal 0: Euler-Knicklast F_ki = π² E I/(βL)²
    0: [
      ni(
        'Sub-Goal "Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$": Stahlstab beidseitig gelenkig gelagert. $E = 210\\,000$ MPa, $I = 8\\,000$ mm⁴, $L = 2\\,000$ mm. Wie groß ist die Euler-Knicklast $F_{ki}$ in N?',
        4145,
        50,
        'N',
        `**Ansatz:** $F_{ki} = \\pi^2 E I / (\\beta L)^2$. Beidseitig gelenkig → $\\beta = 1$, also $\\beta L = L = 2000$ mm.

**Rechnung:** $F_{ki} = \\pi^2 \\cdot 210\\,000 \\cdot 8\\,000 / (2\\,000)^2 = \\pi^2 \\cdot 1{,}68 \\cdot 10^9 / 4 \\cdot 10^6 = \\pi^2 \\cdot 420 \\approx 9{,}87 \\cdot 420 \\approx 4\\,145$ N.

**Probe:** Einheiten: $\\text{N/mm}^2 \\cdot \\text{mm}^4 / \\text{mm}^2 = \\text{N}$ ✓. Gut, dass $F_{ki}$ klein ist — ein dünner Stab von 2 m knickt schon bei etwa 4 kN, man kann es sich merken.

**Typischer Fehler:** $(\\beta L)^2$ vergessen zu quadrieren oder $L$ in m statt mm eingesetzt. Immer konsequent in N, mm, MPa rechnen.`,
        [
          'Formel: $F_{ki} = \\pi^2 E I / (\\beta L)^2$.',
          '$\\beta = 1$ für "beidseitig gelenkig".',
          '$\\pi^2 \\approx 9{,}87$. Erst Zähler, dann durch $(\\beta L)^2 = 4 \\cdot 10^6$ mm² teilen.',
        ],
      ),
      mc(
        'Sub-Goal "Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$": Ein Stab (β = 1) hat eine Knicklast von 10 kN. Wie ändert sich $F_{ki}$, wenn die Länge $L$ verdoppelt wird?',
        [
          '$F_{ki}$ viertelt sich auf 2{,}5 kN.',
          '$F_{ki}$ halbiert sich auf 5 kN.',
          '$F_{ki}$ bleibt gleich, weil $L$ nicht in die Formel geht.',
          '$F_{ki}$ verdoppelt sich auf 20 kN.',
        ],
        0,
        `**Ansatz:** $F_{ki} \\propto 1/(\\beta L)^2$ — die Länge steht im Quadrat im Nenner.

**Rechnung:** $L \\to 2L$ bedeutet $(\\beta L)^2 \\to (2\\beta L)^2 = 4 (\\beta L)^2$. Damit wird $F_{ki}$ durch 4 geteilt: $10 / 4 = 2{,}5$ kN.

**Probe:** Kontrollzahl mit $E = 210\\,000$, $I = 10^4$, $L = 1\\,000$ → ca. 20{,}7 kN; bei $L = 2\\,000$ → ca. 5{,}2 kN. Faktor 4 ✓.

**Typischer Fehler:** Linear halbieren statt quartetieren. Denk immer daran: Länge steht im Quadrat.`,
        [
          '$L$ erscheint im Nenner der Formel.',
          'Steht $L$ dort linear oder quadratisch?',
          '$1/(2L)^2 = 1/(4 L^2)$ — Faktor 1/4.',
        ],
        {
          1: 'Das wäre so, wenn $L$ nur linear einginge. $L$ steht aber im Quadrat.',
          2: '$L$ steht sehr wohl in der Formel — sogar im Quadrat im Nenner.',
          3: 'Vorzeichen falsch: mit $L$ steigt der Nenner, also sinkt $F_{ki}$.',
        },
      ),
      tf(
        'Sub-Goal "Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$": Die Euler-Knicklast $F_{ki}$ ist linear proportional zum E-Modul $E$ des Werkstoffs.',
        true,
        `**Ansatz:** $F_{ki} = \\pi^2 \\cdot E \\cdot I / (\\beta L)^2$ — $E$ steht linear im Zähler.

**Rechnung:** $E \\to 2E$ liefert $F_{ki} \\to 2 F_{ki}$. Beispiel: Stahl ($E = 210\\,000$) hat dreimal so hohe Knicklast wie Aluminium ($E = 70\\,000$) bei gleicher Geometrie.

**Probe:** Alu gleiche Geometrie wie oben: $F_{ki} = \\pi^2 \\cdot 70\\,000 \\cdot 8\\,000 / 4 \\cdot 10^6 \\approx 1\\,382$ N — genau ein Drittel von 4\\,145 N ✓.

**Typischer Fehler:** $E$ mit $R_p$ (Streckgrenze) verwechseln. $E$ bestimmt die Knicksteifigkeit, $R_p$ erst die Gültigkeitsgrenze (Euler vs. Tetmajer).`,
        [
          'Schau dir die Formel an: Wo steht $E$?',
          'Linearer Faktor im Zähler → linearer Einfluss.',
          'Werkstoff mit doppeltem $E$ → doppelte Knicklast.',
        ],
      ),
      ni(
        'Sub-Goal "Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$": Gleicher Stab wie oben ($I = 8\\,000$ mm⁴, $L = 2\\,000$ mm, $\\beta = 1$), aber aus Aluminium ($E = 70\\,000$ MPa). Welche Knicklast?',
        1382,
        30,
        'N',
        `**Ansatz:** Gleiche Formel, nur $E$ gedrittelt (Alu statt Stahl).

**Rechnung:** $F_{ki} = \\pi^2 \\cdot 70\\,000 \\cdot 8\\,000 / (2\\,000)^2 = \\pi^2 \\cdot 140 \\approx 1\\,382$ N.

**Probe:** 70\\,000/210\\,000 = 1/3, damit $F_{ki,\\text{Alu}} = 4\\,145/3 \\approx 1\\,382$ N ✓.

**Typischer Fehler:** Alu "fühlt sich genauso an wie Stahl, nur leichter". Nein — Alu hat nur ein Drittel des E-Moduls und knickt viel früher.`,
        [
          '$F_{ki} \\propto E$.',
          '$E_\\text{Alu}/E_\\text{Stahl} = 1/3$.',
          'Nimm den Stahlwert und teile durch 3.',
        ],
      ),
      sorting(
        'Sub-Goal "Euler-Knicklast: $F_{ki} = \\pi^2 E I/(\\beta L)^2$": Bringe die Schritte zur Berechnung einer Euler-Knicklast in die richtige Reihenfolge.',
        [
          'Lagerungsart ablesen und $\\beta$ bestimmen.',
          'Flächenträgheitsmoment $I$ (schwächste Achse) ermitteln.',
          'Ersatzlänge $\\beta L$ bilden und quadrieren.',
          '$F_{ki} = \\pi^2 E I / (\\beta L)^2$ einsetzen und ausrechnen.',
          'Prüfen, ob $\\sigma_{ki} = F_{ki}/A < R_p$ (Euler gilt nur im elastischen Bereich).',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Erst alle Geometrie- und Lagerungsgrößen bestimmen, dann einsetzen, zuletzt die Gültigkeit prüfen.

**Rechnung:** 1) $\\beta$, 2) $I_\\text{min}$, 3) $(\\beta L)^2$, 4) Zahl ausspucken, 5) Gültigkeits-Check.

**Probe:** Wer Schritt 5 vergisst, rechnet für kurze Stäbe Unsinn: Euler liefert dort $\\sigma_{ki} > R_p$, was physikalisch nicht möglich ist — der Stab fließt vorher.

**Typischer Fehler:** Schritt 5 weglassen und für einen kurzen Stab fröhlich Euler rechnen. Immer den Schlankheitsgrad prüfen.`,
        [
          'Lagerung zuerst, damit $\\beta$ steht.',
          '$I$ kommt aus der Querschnittsform.',
          'Ganz zum Schluss: Gültigkeitsbereich.',
        ],
      ),
    ],

    // Sub-Goal 1: Einspannbeiwerte β
    1: [
      matching(
        'Sub-Goal "Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt": Ordne Lagerungsfall und Einspannbeiwert $\\beta$ zu.',
        [
          { left: 'Beidseitig gelenkig gelagert', right: '$\\beta = 1$' },
          { left: 'Beidseitig eingespannt', right: '$\\beta = 0{,}5$' },
          { left: 'Einseitig eingespannt, freies Ende (Kragstab)', right: '$\\beta = 2$' },
          { left: 'Einseitig eingespannt, anderes Ende gelenkig geführt', right: '$\\beta \\approx 0{,}7$' },
        ],
        `**Ansatz:** $\\beta$ ist das Verhältnis der **Ersatzknicklänge** $\\beta L$ zur tatsächlichen Stablänge. Je stärker die Einspannung, desto kürzer die effektive Knicklänge.

**Rechnung:** Kragstab hat die größte Ersatzlänge ($2L$) → kleinste Knicklast. Beidseitig eingespannt die kürzeste ($0{,}5 L$) → höchste Knicklast.

**Probe:** Merke die Reihenfolge aufsteigender Knicklast: Kragstab ($\\beta=2$) < gelenkig/gelenkig ($\\beta=1$) < eingespannt/gelenkig ($\\beta\\approx 0{,}7$) < beidseitig eingespannt ($\\beta=0{,}5$).

**Typischer Fehler:** $\\beta = 2$ für "doppelt eingespannt" vermuten (also sehr stabil). Genau umgekehrt: $\\beta = 2$ ist der Kragstab — die schwächste Lagerung.`,
        [
          'Je besser die Einspannung, desto kleiner $\\beta$.',
          'Kragstab = worst case = größtes $\\beta$.',
          'Beidseitig gelenkig ist der Standardfall mit $\\beta = 1$.',
        ],
      ),
      mc(
        'Sub-Goal "Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt": Welche Lagerung liefert bei gleichem Stab die **höchste** Euler-Knicklast?',
        [
          'Beidseitig eingespannt (β = 0{,}5).',
          'Beidseitig gelenkig (β = 1).',
          'Einseitig eingespannt, freies Ende (β = 2).',
          'Alle liefern dieselbe Knicklast, weil der Stab ja derselbe ist.',
        ],
        0,
        `**Ansatz:** $F_{ki} \\propto 1/\\beta^2$ — kleinstes $\\beta$ gibt höchstes $F_{ki}$.

**Rechnung:** $\\beta = 0{,}5$ → $\\beta^2 = 0{,}25$, also $F_{ki}$ viermal so hoch wie bei $\\beta = 1$ und 16-mal so hoch wie bei $\\beta = 2$.

**Probe:** Stahlstab 2 m, $I = 8\\,000$: $\\beta=1$ → 4{,}15 kN, $\\beta=0{,}5$ → 16{,}6 kN, $\\beta=2$ → 1{,}04 kN. Ordnung passt.

**Typischer Fehler:** Intuitiv "großes β = stark eingespannt" annehmen. Es ist genau umgekehrt: $\\beta$ ist der **Ersatzlängen-Faktor**, nicht die Einspannung selbst.`,
        [
          'Kleines $\\beta$ = kurze Ersatzlänge = hohe Knicklast.',
          '$\\beta = 0{,}5$ ist das Minimum der Standardfälle.',
          'Faktor 16 Unterschied zwischen $\\beta=0{,}5$ und $\\beta=2$.',
        ],
        {
          1: 'Das ist der Standardfall (β = 1) — dazwischen, nicht am Maximum.',
          2: 'β = 2 ist die schwächste Lagerung, liefert die **kleinste** Knicklast.',
          3: 'Falsch — die Lagerung ändert die Ersatzlänge massiv, Faktor 16 zwischen β=0{,}5 und β=2.',
        },
      ),
      ni(
        'Sub-Goal "Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt": Stab mit $E = 210\\,000$ MPa, $I = 8\\,000$ mm⁴, $L = 2\\,000$ mm, **beidseitig eingespannt** ($\\beta = 0{,}5$). Knicklast $F_{ki}$ in N?',
        16580,
        200,
        'N',
        `**Ansatz:** Euler-Formel, nur $\\beta = 0{,}5$ einsetzen.

**Rechnung:** $\\beta L = 0{,}5 \\cdot 2\\,000 = 1\\,000$ mm, $(\\beta L)^2 = 10^6$. $F_{ki} = \\pi^2 \\cdot 210\\,000 \\cdot 8\\,000 / 10^6 = \\pi^2 \\cdot 1\\,680 \\approx 16\\,580$ N.

**Probe:** Gegenüber dem gelenkigen Fall (4\\,145 N) genau Faktor 4 mehr — passt zu $(\\beta_1/\\beta_2)^2 = (1/0{,}5)^2 = 4$.

**Typischer Fehler:** $\\beta = 0{,}5$ in den Zähler statt in die Ersatzlänge im Nenner schreiben — gibt dann $\\beta^2 = 0{,}25$ als Faktor am Zähler und das Ergebnis wäre 1/4 statt 4-fach.`,
        [
          '$(\\beta L)^2 = (0{,}5 \\cdot 2000)^2 = 10^6$ mm².',
          'Zähler: $\\pi^2 \\cdot 210\\,000 \\cdot 8\\,000$.',
          'Ergebnis: viermal so hoch wie beim gelenkigen Stab.',
        ],
      ),
      tf(
        'Sub-Goal "Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt": Die **Ersatzknicklänge** ist definiert als $L_\\text{eff} = \\beta \\cdot L$ und entspricht der Länge eines gedachten, beidseitig gelenkig gelagerten Stabs gleicher Knicklast.',
        true,
        `**Ansatz:** Genau das ist die Idee hinter $\\beta$: jede reale Lagerung wird auf den Standardfall "gelenkig/gelenkig" zurückgeführt.

**Rechnung:** Kragstab, $L = 1$ m, $\\beta = 2$ → $L_\\text{eff} = 2$ m. Ein gelenkiger Stab mit 2 m Länge und gleichem $EI$ hat dieselbe Knicklast.

**Probe:** In die Euler-Formel für gelenkig/gelenkig ($\\beta=1$) mit Länge $L_\\text{eff}$ einsetzen — identisches Ergebnis wie mit $\\beta$ und $L$.

**Typischer Fehler:** $L_\\text{eff}$ für die tatsächliche geometrische Länge halten. Nein — das ist eine **gedachte** Länge, die den Einspannfall auf den Standardfall abbildet.`,
        [
          '$\\beta$ ist der Faktor, der $L$ zur Ersatzlänge streckt.',
          'Ersatzlänge = Länge eines gelenkig/gelenkig-Stabs mit selber Knicklast.',
          'Nützliches Werkzeug: jede Lagerung → Standardfall umrechnen.',
        ],
      ),
      mc(
        'Sub-Goal "Einspannbeiwerte: $\\beta = 1$ gelenkig/gelenkig, $\\beta = 2$ eingespannt/frei, $\\beta = 0{,}5$ beidseitig eingespannt": Eine Fahnenstange ist am Boden einbetoniert und oben frei. Welcher Lagerungsfall und welches $\\beta$ liegen vor?',
        [
          'Einseitig eingespannt, freies Ende; $\\beta = 2$.',
          'Beidseitig gelenkig; $\\beta = 1$.',
          'Beidseitig eingespannt; $\\beta = 0{,}5$.',
          'Einseitig gelenkig, freies Ende; $\\beta = 0{,}7$.',
        ],
        0,
        `**Ansatz:** "Am Boden einbetoniert" = eingespannt (keine Verdrehung, keine Verschiebung). "Oben frei" = keinerlei Lagerung.

**Rechnung:** Einspannung + freies Ende ist exakt der klassische Kragstab mit $\\beta = 2$ — die Knickfigur ist eine Viertelsinuskurve, deshalb Ersatzlänge $2L$.

**Probe:** Typische Klausurbilder: Fahne, Mast, Kragkran — alles Kragstäbe mit $\\beta = 2$.

**Typischer Fehler:** "Einbetoniert = sehr stabil" gleichsetzen mit "beidseitig eingespannt". Aber das **andere** Ende ist frei, nicht eingespannt.`,
        [
          'Am Boden: keine Bewegung, keine Drehung → Einspannung.',
          'Oben: nichts → frei.',
          'Klassischer Kragstab.',
        ],
        {
          1: '"Gelenkig" heißt: Stab kann sich drehen. Einbetoniert kann er das nicht.',
          2: 'Das obere Ende ist **frei**, nicht eingespannt. Nur ein Einspannung.',
          3: 'Unten ist nicht gelenkig, sondern fest eingespannt.',
        },
      ),
    ],

    // Sub-Goal 2: Flächenträgheitsmoment I — schwächste Achse zählt
    2: [
      ni(
        'Sub-Goal "Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)": Rechteckquerschnitt $b \\times h = 20 \\times 40$ mm (b = 20, h = 40). Der Stab kann um jede Achse knicken. Welches $I_\\text{min}$ in mm⁴ ist für die Knicklast maßgebend?',
        26667,
        50,
        'mm⁴',
        `**Ansatz:** Zwei Hauptträgheitsmomente: $I_x = b h^3/12$ (Biegung um x-Achse) und $I_y = h b^3/12$ (Biegung um y-Achse). Für Knicken zählt das **kleinere** — in die Richtung knickt der Stab zuerst weg.

**Rechnung:** $I_x = 20 \\cdot 40^3/12 = 20 \\cdot 64\\,000/12 = 106\\,667$ mm⁴. $I_y = 40 \\cdot 20^3/12 = 40 \\cdot 8\\,000/12 = 26\\,667$ mm⁴. Minimum: $I_y = 26\\,667$ mm⁴.

**Probe:** Der Stab knickt wie ein Lineal hochkant gehalten und seitlich weggedrückt — die lange Kante (40 mm) bringt nichts, die kurze (20 mm) bestimmt die Knickrichtung.

**Typischer Fehler:** $I_x$ nehmen, "weil es größer ist und die Aufgabe nach dem Trägheitsmoment fragt". Für Knicken ist **immer** die schwächste Achse maßgebend.`,
        [
          '$I_x = b h^3/12$, $I_y = h b^3/12$.',
          'Für Knicken: kleinstes $I$.',
          'Kurze Seite ins hoch-gehoch gesetzte $b$ → $hb^3/12$ wird klein.',
        ],
      ),
      mc(
        'Sub-Goal "Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)": Warum wird für die Knicklast $I_\\text{min}$ (und nicht $I_\\text{max}$) eingesetzt?',
        [
          'Der Stab knickt immer um die Achse mit dem kleinsten $I$ — das ist die "weichste" Richtung.',
          'Mit $I_\\text{min}$ wird die Rechnung konservativ — man rechnet nur zur Sicherheit das Minimum.',
          '$I_\\text{max}$ gilt für Biegung, $I_\\text{min}$ für Knicken — das ist reine Konvention.',
          'Der Ausdruck $I_\\text{min}$ ist nur eine Bezeichnung; rechnerisch ist es egal, welches man nimmt.',
        ],
        0,
        `**Ansatz:** Knicken passiert dort, wo der Widerstand am kleinsten ist — automatisch, nicht aus Konvention.

**Rechnung:** $F_{ki} \\propto I$. Kleinstes $I$ gibt kleinste Knicklast. Sobald diese erreicht ist, knickt der Stab in diese Richtung. $I_\\text{max}$ wird nie relevant, weil der Stab vorher schon nachgegeben hat.

**Probe:** Rechteck 20×40 knickt um die y-Achse (parallel zur 40er-Seite), nicht um die x-Achse. Demonstriert mit Lineal: um die flache Seite ist der Widerstand groß, um die Kante klein.

**Typischer Fehler:** $I_\\text{min}$ als reine Sicherheitsreserve sehen. Nein — es ist die **physikalisch** maßgebende Größe, nicht Willkür.`,
        [
          'Was heißt "knicken"? Stab weicht in die Richtung des geringsten Widerstands aus.',
          'Geringster Widerstand = kleinstes $I$.',
          'Ist Physik, keine Konvention.',
        ],
        {
          1: 'Klingt richtig, ist aber keine Konvention — es ist physikalisch notwendig.',
          2: 'Biegung und Knicken nutzen dasselbe $I$ — bei Knicken ohne Vorgabe der Ebene immer das kleinste.',
          3: 'Doch, es ist sehr relevant: $I_\\text{max}$ und $I_\\text{min}$ können um Faktor 4 auseinanderliegen.',
        },
      ),
      tf(
        'Sub-Goal "Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)": Für einen quadratischen Querschnitt ($b = h = a$) gilt $I_x = I_y = a^4/12$, daher ist jede Achse gleich stark und es gibt kein eindeutiges $I_\\text{min}$.',
        true,
        `**Ansatz:** Quadrat ist symmetrisch in x- und y-Richtung, also $I_x = I_y$.

**Rechnung:** $I_x = a \\cdot a^3/12 = a^4/12 = I_y$. Egal in welche Richtung gedacht — gleiche Steifigkeit. (Streng genommen gilt das sogar für jede Achse durch den Flächenschwerpunkt: Mohr-Kreis der Trägheitsmomente entartet zum Punkt.)

**Probe:** Deshalb sind Quadrat- und Kreisprofile in der Knickpraxis beliebt — keine "Schwachrichtung".

**Typischer Fehler:** "Quadrat ist zwar symmetrisch, aber die Diagonale ist doch anders." Falsch — für Flächenträgheitsmomente ist sogar jede durch den Schwerpunkt laufende Achse gleich.`,
        [
          'Quadrat: $b = h$.',
          'Setze in $bh^3/12$ und $hb^3/12$ ein.',
          'Beide Ergebnisse identisch.',
        ],
      ),
      matching(
        'Sub-Goal "Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)": Ordne dem Querschnitt sein Flächenträgheitsmoment (schwächste Achse) zu.',
        [
          { left: 'Kreis, Durchmesser $d$', right: '$I = \\pi d^4 / 64$' },
          { left: 'Quadrat, Seite $a$', right: '$I = a^4 / 12$' },
          { left: 'Rechteck $b \\times h$ ($b < h$), schwache Achse', right: '$I_y = h b^3 / 12$' },
          { left: 'Kreisringrohr, Außen-$D$, Innen-$d$', right: '$I = \\pi (D^4 - d^4)/64$' },
        ],
        `**Ansatz:** Bei symmetrischen Querschnitten (Kreis, Quadrat) ist $I_\\text{min} = I_\\text{max}$. Beim Rechteck entscheidet die **kleinere** Kantenlänge hoch 3.

**Rechnung:** Rechteck 30×10: $I_x = 30 \\cdot 10^3/12 = 2\\,500$, $I_y = 10 \\cdot 30^3/12 = 22\\,500$. $I_\\text{min} = 2\\,500$ — die 10-mm-Seite ist die schwache.

**Probe:** Rohre dünner Wandstärke: $I = \\pi (D^4 - d^4)/64$. Beim dünnen Rohr ist $I \\approx \\pi D^3 t/8$ (Näherung).

**Typischer Fehler:** $b h^3/12$ unabhängig von der Orientierung nehmen. Aufpassen: "b" ist die Breite **quer** zur Biegeachse, "h" die Höhe **entlang** der Biegeachse.`,
        [
          'Kreis symmetrisch: $\\pi d^4/64$.',
          'Rechteck: kleinere Seite in die Potenz 3.',
          'Rohr: Außen minus innen, beide hoch 4.',
        ],
      ),
      ni(
        'Sub-Goal "Flächenträgheitsmoment $I$: schwächste Achse zählt (kleinstes $I$)": Kreisquerschnitt mit Durchmesser $d = 20$ mm. Wie groß ist $I$ in mm⁴ (gerundet auf ganze Zahl)?',
        7854,
        20,
        'mm⁴',
        `**Ansatz:** $I = \\pi d^4 / 64$ (für Kreis, alle Achsen gleich).

**Rechnung:** $d^4 = 20^4 = 160\\,000$. $I = \\pi \\cdot 160\\,000 / 64 = \\pi \\cdot 2\\,500 \\approx 7\\,854$ mm⁴.

**Probe:** Vergleich Quadrat $a = 20$: $I = 20^4/12 = 13\\,333$ — Kreis etwas steifer als Quadrat? Nein, Quadrat ist steifer, aber der Kreis hat dafür weniger Querschnittsfläche. Pro Masse ist der Kreis oft effizient.

**Typischer Fehler:** $\\pi d^2/4$ (Flächeninhalt) statt $\\pi d^4/64$ einsetzen. Beide Formeln enthalten $\\pi$ — aber die Potenz von $d$ unterscheidet sich!`,
        [
          'Kreisformel: $\\pi d^4/64$.',
          '$20^4 = 160\\,000$.',
          '$160\\,000 / 64 = 2\\,500$, dann mal $\\pi$.',
        ],
      ),
    ],

    // Sub-Goal 3: Schlankheitsgrad λ = βL/i, i = √(I/A)
    3: [
      ni(
        'Sub-Goal "Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$": Quadratischer Stab $a = 30$ mm, Länge $L = 2\\,000$ mm, beidseitig gelenkig ($\\beta = 1$). Schlankheitsgrad $\\lambda$?',
        231,
        3,
        '',
        `**Ansatz:** Zuerst $I$ und $A$, dann $i = \\sqrt{I/A}$, dann $\\lambda = \\beta L / i$.

**Rechnung:** $I = a^4/12 = 30^4/12 = 810\\,000/12 = 67\\,500$ mm⁴. $A = a^2 = 900$ mm². $i = \\sqrt{67\\,500/900} = \\sqrt{75} \\approx 8{,}66$ mm. $\\lambda = 1 \\cdot 2\\,000 / 8{,}66 \\approx 231$.

**Probe:** Für Quadrat gibt es die Kurzformel $i = a/\\sqrt{12} = 30/3{,}464 \\approx 8{,}66$ mm ✓. Alternativ $\\lambda = \\beta L \\sqrt{12}/a = 2000 \\cdot 3{,}464 / 30 = 231$.

**Typischer Fehler:** $i$ mit $I$ verwechseln — $i$ ist der Trägheits**radius** (Wurzel aus $I/A$, Einheit mm), nicht das Flächenträgheitsmoment (Einheit mm⁴).`,
        [
          '$I = a^4/12$ für Quadrat.',
          '$i = \\sqrt{I/A}$, Einheit mm.',
          '$\\lambda$ ist dimensionslos.',
        ],
      ),
      mc(
        'Sub-Goal "Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$": Wie ist der Trägheitsradius $i$ definiert?',
        [
          '$i = \\sqrt{I/A}$ — Wurzel aus Flächenträgheitsmoment geteilt durch Querschnittsfläche.',
          '$i = I/A$ — Flächenträgheitsmoment geteilt durch Fläche.',
          '$i = \\sqrt{A/I}$ — Kehrwert der obigen Definition.',
          '$i = I \\cdot A$ — Produkt aus beiden.',
        ],
        0,
        `**Ansatz:** $i$ ist ein charakteristischer Radius mit der Einheit einer Länge (mm). Damit das aufgeht, muss man $I$/$A$ (mm⁴/mm²) erst bilden und dann die Wurzel ziehen.

**Rechnung:** $[I]/[A] = \\text{mm}^4/\\text{mm}^2 = \\text{mm}^2$. Wurzel → mm. Passt.

**Probe:** Für Kreis $d$: $I = \\pi d^4/64$, $A = \\pi d^2/4$, $i = \\sqrt{d^2/16} = d/4$. Und tatsächlich: der Kreis-Trägheitsradius ist ein Viertel des Durchmessers.

**Typischer Fehler:** Wurzel vergessen und die Einheit verlieren. Kontrolliere **immer** die Einheit: $i$ muss in mm rauskommen.`,
        [
          '$i$ hat Einheit einer Länge.',
          '$I$ ist mm⁴, $A$ ist mm², Quotient mm².',
          'Wurzel → mm.',
        ],
        {
          1: 'Ohne Wurzel hätte $i$ die Einheit mm², also keine Länge. Deshalb nicht.',
          2: 'Das wäre die Einheit $1/\\text{mm}$ — falsche Dimension.',
          3: 'Das hätte die Einheit mm⁶ — physikalisch sinnlos.',
        },
      ),
      tf(
        'Sub-Goal "Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$": Der Schlankheitsgrad $\\lambda$ ist eine dimensionslose Zahl, die unabhängig von der Querschnittsgröße angibt, wie "knickgefährdet" ein Stab ist.',
        true,
        `**Ansatz:** $\\lambda = \\beta L / i$. Beide Größen haben Einheit Länge → Quotient ist dimensionslos.

**Rechnung:** $\\lambda$ vergleicht Länge mit Querschnittsausdehnung. Ein langes, dünnes Stäbchen hat hohes $\\lambda$ (→ Euler), ein kurzer, dicker Klotz niedriges $\\lambda$ (→ Plastisches Stauchen).

**Probe:** Typische Bereiche für Stahl: $\\lambda > 100$ → Euler, $60 < \\lambda < 100$ → Tetmajer, $\\lambda < 60$ → plastisch.

**Typischer Fehler:** $\\lambda$ in mm angeben. Nein — rein dimensionslos, einfach nur eine Zahl.`,
        [
          '$\\lambda = \\beta L / i$.',
          'Beide Größen in mm.',
          'mm/mm = 1 → dimensionslos.',
        ],
      ),
      ni(
        'Sub-Goal "Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$": Rechteckstab $b \\times h = 20 \\times 40$ mm, $L = 1\\,000$ mm, $\\beta = 1$. Schlankheitsgrad $\\lambda$?',
        173,
        3,
        '',
        `**Ansatz:** Kleinstes $i$ verwenden — der Stab knickt um die schwache Achse.

**Rechnung:** $I_\\text{min} = h b^3/12 = 40 \\cdot 20^3/12 = 40 \\cdot 8\\,000/12 \\approx 26\\,667$ mm⁴. $A = 800$ mm². $i_\\text{min} = \\sqrt{26\\,667/800} = \\sqrt{33{,}33} \\approx 5{,}77$ mm. $\\lambda = 1 \\cdot 1\\,000 / 5{,}77 \\approx 173$.

**Probe:** Für Rechteck gilt $i = b/\\sqrt{12}$ (schwache Achse), also $i = 20/3{,}464 \\approx 5{,}77$ ✓.

**Typischer Fehler:** $I_\\text{max}$ und damit $i_\\text{max}$ nehmen — Ergebnis wäre $\\lambda \\approx 87$, der Stab würde als "mittelschlank" eingestuft und das Knicken fälschlich mit Tetmajer gerechnet.`,
        [
          'Schwache Achse: $I_\\text{min} = h b^3/12$.',
          '$A = b \\cdot h$.',
          'Kurzformel: $i_\\text{min} = b/\\sqrt{12}$ für Rechteck.',
        ],
      ),
      sorting(
        'Sub-Goal "Schlankheitsgrad $\\lambda = \\beta L/i$ mit Trägheitsradius $i = \\sqrt{I/A}$": Bringe die Schritte zur Berechnung des Schlankheitsgrads in die richtige Reihenfolge.',
        [
          'Querschnittsfläche $A$ bestimmen.',
          'Kleinstes Flächenträgheitsmoment $I_\\text{min}$ bestimmen.',
          'Trägheitsradius $i = \\sqrt{I_\\text{min}/A}$ berechnen.',
          'Lagerung anschauen, $\\beta$ ablesen, Ersatzlänge $\\beta L$ bilden.',
          '$\\lambda = \\beta L / i$ ausrechnen und in Knickbereich einordnen.',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Querschnittsgrößen zuerst, dann Lagerung, dann Zusammenrechnen.

**Rechnung:** 1) $A$, 2) $I_\\text{min}$ (schwache Achse!), 3) $i$, 4) $\\beta$, 5) $\\lambda$.

**Probe:** Erst mit $\\lambda$ kann man entscheiden: Euler (hoch), Tetmajer (mittel) oder Fließen (niedrig).

**Typischer Fehler:** Mit $\\beta$ und $L$ ohne $i$ arbeiten — dann fehlt die dimensionslose Normierung und man vergleicht Äpfel mit Birnen.`,
        [
          'Geometrie (A, I, i) vor Lagerung.',
          'Ersatzlänge nach Lagerungs-Check.',
          '$\\lambda$ ganz am Ende.',
        ],
      ),
    ],

    // Sub-Goal 4: Euler vs. Tetmajer/Johnson — Gültigkeitsbereiche
    4: [
      mc(
        'Sub-Goal "Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson": In welchem Bereich des Schlankheitsgrads $\\lambda$ ist die **Euler-Formel** für Baustahl (S235) gültig?',
        [
          '$\\lambda \\gtrsim 100$ (schlanker Bereich).',
          '$\\lambda < 20$ (sehr kurz).',
          '$60 \\lesssim \\lambda \\lesssim 100$ (mittlerer Bereich).',
          'Für jeden Wert von $\\lambda$.',
        ],
        0,
        `**Ansatz:** Euler setzt voraus, dass der Werkstoff beim Knicken noch im **elastischen** Bereich ist, also $\\sigma_{ki} = \\pi^2 E/\\lambda^2 < R_p$.

**Rechnung:** Grenze bei Stahl: $\\lambda_\\text{Euler} = \\pi \\sqrt{E/R_p} = \\pi \\sqrt{210\\,000/235} \\approx \\pi \\cdot 29{,}9 \\approx 94$. Daraus die gerundete Faustzahl $\\lambda \\gtrsim 100$.

**Probe:** Bei $\\lambda = 100$: $\\sigma_{ki} = \\pi^2 \\cdot 210\\,000 / 10\\,000 \\approx 207$ MPa — knapp unter $R_p = 235$ MPa. Euler wird also genau bei diesem $\\lambda$ grenzwertig.

**Typischer Fehler:** Euler blind für jeden Stab rechnen. Für gedrungene Stäbe liefert Euler unrealistisch hohe Knicklasten — in Wahrheit fließt der Werkstoff vorher.`,
        [
          '$\\sigma_{ki}$ muss unter $R_p$ bleiben.',
          '$\\sigma_{ki} = \\pi^2 E/\\lambda^2$.',
          'Für $\\lambda \\to \\infty$ geht $\\sigma_{ki} \\to 0$ — also hohes $\\lambda$ = sicher im elastischen Bereich.',
        ],
        {
          1: 'Viel zu kurz — da fließt der Stab rein plastisch, Euler ist völlig ungültig.',
          2: 'Tetmajer-Bereich, nicht Euler. Da ist $\\sigma_{ki}$ bereits nahe $R_p$.',
          3: 'Euler ist eine elastische Theorie — sie scheitert im plastischen Bereich.',
        },
      ),
      tf(
        'Sub-Goal "Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson": Bei einem gedrungenen, kurzen Druckstab ($\\lambda \\approx 20$) versagt der Stab durch plastisches Fließen und nicht durch klassisches Euler-Knicken.',
        true,
        `**Ansatz:** Kurze Stäbe haben sehr geringe Knickneigung. Stattdessen erreicht die Druckspannung $F/A$ die Streckgrenze und der Werkstoff fließt.

**Rechnung:** Bei $\\lambda = 20$ wäre nach Euler $\\sigma_{ki} = \\pi^2 \\cdot 210\\,000 / 400 \\approx 5\\,180$ MPa — physikalisch unmöglich, lange vorher wäre $R_p$ überschritten.

**Probe:** Praktisch: Druckstab aus Stahl mit $\\lambda < 60$ → Auslegung mit $\\sigma_\\text{zul} = R_p/S$, nicht mit Euler.

**Typischer Fehler:** Euler für einen Klotz rechnen und ein astronomisches $F_{ki}$ bekommen. Immer $\\sigma_{ki}$ prüfen — wenn größer als $R_p$, ist Euler ungültig.`,
        [
          'Gedrungener Stab: kleines $\\lambda$.',
          'Euler würde unrealistisch hohe $\\sigma_{ki}$ liefern.',
          'Realität: Werkstoff fließt vorher.',
        ],
      ),
      ni(
        'Sub-Goal "Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson": Stahlstab (S235, $R_p = 235$ MPa, $E = 210\\,000$ MPa) mit $\\lambda = 150$. Berechne die kritische Euler-Knickspannung $\\sigma_{ki}$ in MPa und entscheide intuitiv: Euler gültig?',
        92,
        2,
        'MPa',
        `**Ansatz:** $\\sigma_{ki} = F_{ki}/A = \\pi^2 E / \\lambda^2$.

**Rechnung:** $\\sigma_{ki} = \\pi^2 \\cdot 210\\,000 / 150^2 = \\pi^2 \\cdot 210\\,000 / 22\\,500 \\approx 9{,}87 \\cdot 9{,}33 \\approx 92$ MPa.

**Probe:** 92 MPa < 235 MPa ($R_p$) → Euler **gültig**. Bestätigt die Faustregel $\\lambda > \\lambda_\\text{Euler} \\approx 94$.

**Typischer Fehler:** Nur $F_{ki}$ ausrechnen und den Gültigkeitscheck vergessen. Am Ende **immer** $\\sigma_{ki}$ mit $R_p$ vergleichen.`,
        [
          'Kurzformel: $\\sigma_{ki} = \\pi^2 E / \\lambda^2$.',
          '$\\lambda^2 = 22\\,500$.',
          '$\\pi^2 \\approx 9{,}87$.',
        ],
      ),
      matching(
        'Sub-Goal "Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson": Ordne Schlankheitsbereich (Stahl S235) und zugehöriges Knick-Auslegungsverfahren zu.',
        [
          { left: '$\\lambda \\gtrsim 100$ (schlank)', right: 'Euler-Formel (elastisches Knicken)' },
          { left: '$60 \\lesssim \\lambda \\lesssim 100$ (mittelschlank)', right: 'Tetmajer-Gerade (teilplastisch)' },
          { left: '$\\lambda \\lesssim 60$ (gedrungen)', right: 'Reine Druckspannung: $\\sigma = F/A \\leq R_p/S$' },
          { left: 'Stab mit Exzentrizität', right: 'Zusätzlich Biegemoment berücksichtigen (keine reine Knicktheorie)' },
        ],
        `**Ansatz:** Drei Bereiche + Sonderfälle. Euler nur für elastisches Knicken, Tetmajer für den Übergang, reine Druckfestigkeit für kurze Stäbe.

**Rechnung:** Die Grenzen 60/100 sind Faustzahlen für Stahl S235. Für andere Werkstoffe andere Grenzen ($\\lambda_\\text{Euler} = \\pi\\sqrt{E/R_p}$).

**Probe:** Diagramm $\\sigma_{ki}$ gegen $\\lambda$: Hyperbel (Euler) geht in eine Gerade (Tetmajer) über und wird für kleines $\\lambda$ durch $R_p$ horizontal gedeckelt.

**Typischer Fehler:** Einen Wert dazwischen wählen und trotzdem Euler rechnen. Besser konservativ: Tetmajer oder reine Druckfestigkeit, wenn $\\lambda$ im Zweifelsbereich.`,
        [
          'Hoch $\\lambda$ → elastisch → Euler.',
          'Mittel → Tetmajer.',
          'Klein → Druckfestigkeit.',
        ],
      ),
      mc(
        'Sub-Goal "Euler nur für elastisches Knicken ($\\sigma_{ki} < R_p$); bei kurzen Stäben Tetmajer/Johnson": Ein Stahlstab (S235) hat $\\lambda = 70$. Welches Auslegungsverfahren ist das passende?',
        [
          'Tetmajer-Gerade (teilplastisches Knicken im Übergangsbereich).',
          'Euler-Formel — $\\lambda$ ist groß genug.',
          'Reine Druckfestigkeit $\\sigma = F/A \\leq R_p/S$.',
          'Es gibt hier kein etabliertes Verfahren, nur experimentelle Daten.',
        ],
        0,
        `**Ansatz:** $\\lambda = 70$ fällt in den Übergangsbereich zwischen reinem Fließen und elastischem Knicken.

**Rechnung:** Tetmajer für Stahl: $\\sigma_{ki} = 310 - 1{,}14 \\cdot \\lambda$ MPa → $\\sigma_{ki} \\approx 310 - 80 = 230$ MPa. Das ist knapp unter $R_p = 235$, passt zum Übergang.

**Probe:** Euler würde $\\sigma_{ki} = \\pi^2 \\cdot 210\\,000/4\\,900 \\approx 423$ MPa ergeben — unphysikalisch, da > $R_p$.

**Typischer Fehler:** Im Zweifel Euler rechnen und "hoffen, dass es passt". Gerade im mittleren Bereich liefert Euler zu hohe Werte; besser Tetmajer oder konservativ $R_p/S$.`,
        [
          '$\\lambda = 70$ liegt zwischen 60 und 100.',
          'Euler greift erst ab ca. 100.',
          'Unter 60 ist reine Druckfestigkeit.',
        ],
        {
          1: 'Euler wäre ungültig — $\\sigma_{ki}$ nach Euler würde $R_p$ überschreiten.',
          2: 'Das gilt erst bei $\\lambda < 60$. Bei 70 knickt der Stab (teilplastisch).',
          3: 'Doch — die Tetmajer-Gerade ist der Standard für Stahl im Übergangsbereich.',
        },
      ),
    ],
  },

}
