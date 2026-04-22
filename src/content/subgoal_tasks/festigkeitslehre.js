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

  // ────────────────────────────────────────────────────────────────────────
  // fest-2-3 — Mohr'scher Spannungskreis  (6 subGoals)
  // ────────────────────────────────────────────────────────────────────────
  'fest-2-3': {

    // ── [0] Mittelpunkt: σ_M = (σ_x + σ_y)/2 ───────────────────────────
    0: [
      ni(
        'Sub-Goal "Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$": An einem Bauteil wird gemessen $\\sigma_x = 80\\,\\text{MPa}$, $\\sigma_y = 40\\,\\text{MPa}$, $\\tau_{xy} = 25\\,\\text{MPa}$. Bestimme den Mittelpunkt $\\sigma_M$ des Mohr-Kreises.',
        60, 0.5, 'MPa',
        `**Ansatz:** Der Mittelpunkt liegt auf der $\\sigma$-Achse bei $\\sigma_M = (\\sigma_x + \\sigma_y)/2$. $\\tau_{xy}$ wird **nicht** für den Mittelpunkt gebraucht — er verschiebt nur den Kreis vertikal (und damit den Radius), nicht horizontal.

**Rechnung:** $\\sigma_M = (80 + 40)/2 = 60\\,\\text{MPa}$.

**Probe:** Invariante $\\sigma_x + \\sigma_y$ ist drehrichtungsunabhängig (Spur des Spannungstensors). Der Kreismittelpunkt wandert beim Drehen des Schnitts also nicht — nur der Punkt auf dem Kreis.

**Typischer Fehler:** $\\tau_{xy}$ in den Mittelpunkt einrechnen (führt bei vielen auf $60 + 25 = 85$ o. ä.). Oder Vorzeichen ignorieren, wenn eine der Normalspannungen negativ ist.`,
        [
          'Mittelpunkt hängt **nur** von $\\sigma_x$ und $\\sigma_y$ ab.',
          'Arithmetisches Mittel: $(\\sigma_x + \\sigma_y)/2$.',
          '$(80+40)/2 = 60$.',
        ],
      ),
      ni(
        'Sub-Goal "Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$": Ein Druckstab mit Zusatzbiegung liefert $\\sigma_x = 120\\,\\text{MPa}$ (Zug) und $\\sigma_y = -40\\,\\text{MPa}$ (Druck). Wo liegt der Mittelpunkt des Mohr-Kreises?',
        40, 0.5, 'MPa',
        `**Ansatz:** Vorzeichen konsequent mitschleppen — Druck ist negativ, Zug positiv. $\\sigma_M = (\\sigma_x + \\sigma_y)/2$.

**Rechnung:** $\\sigma_M = (120 + (-40))/2 = 80/2 = 40\\,\\text{MPa}$.

**Probe:** Der Mittelpunkt liegt also **rechts** vom Ursprung, aber deutlich näher als bei reinem Zug — die Druckkomponente zieht den Kreismittelpunkt zur Null.

**Typischer Fehler:** Vorzeichen der Druckspannung weggelassen ($\\sigma_M = (120+40)/2 = 80$) oder den Mittelpunkt als Betrag $|\\sigma_x - \\sigma_y|/2 = 80$ angegeben — das ist ein Radius-Anteil, kein Mittelpunkt.`,
        [
          'Druck → negatives Vorzeichen.',
          '$(120 + (-40))/2$.',
          'Ergebnis $= 40$, positiv.',
        ],
      ),
      mc(
        'Sub-Goal "Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$": Bei **reinem Schub** ($\\sigma_x = \\sigma_y = 0$, $\\tau_{xy} \\neq 0$) liegt der Mittelpunkt des Mohr-Kreises …',
        [
          'im Ursprung ($\\sigma_M = 0$)',
          'bei $\\sigma_M = \\tau_{xy}$',
          'bei $\\sigma_M = \\tau_{xy}/2$',
          'lässt sich ohne weitere Angaben nicht bestimmen',
        ],
        0,
        `**Ansatz:** Mittelpunkt hängt ausschließlich von $\\sigma_x, \\sigma_y$ ab, **nicht** von $\\tau_{xy}$. Reiner Schub: beide Normalspannungen null ⇒ $\\sigma_M = 0$.

**Rechnung:** $\\sigma_M = (0 + 0)/2 = 0$.

**Probe:** Der Kreis liegt symmetrisch um den Ursprung, Radius $R = \\tau_{xy}$. Hauptspannungen sind $\\sigma_{1,2} = \\pm\\tau_{xy}$ — ein anschauliches Ergebnis bei reiner Torsion.

**Typischer Fehler:** $\\tau_{xy}$ für den Mittelpunkt mit einrechnen. $\\tau_{xy}$ beeinflusst nur den **Radius**, nie die Lage des Mittelpunkts.`,
        [
          '$\\sigma_M$ enthält kein $\\tau$.',
          'Beide $\\sigma$-Komponenten sind 0.',
          'Mittelwert aus 0 und 0 ist 0.',
        ],
        {
          1: '$\\tau_{xy}$ geht in den **Radius** ein, nicht in den Mittelpunkt. Der Mittelpunkt ist allein aus $\\sigma_x, \\sigma_y$ bestimmt.',
          2: 'Auch halbiert bleibt $\\tau_{xy}$ ein Radius-Anteil. Die Formel $\\sigma_M = (\\sigma_x + \\sigma_y)/2$ enthält $\\tau$ nicht.',
          3: 'Für $\\sigma_M$ reichen $\\sigma_x$ und $\\sigma_y$ — und die sind beide als 0 angegeben.',
        },
      ),
      tf(
        'Sub-Goal "Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$": Beim Drehen des Schnitts um den betrachteten Punkt bleibt der Mittelpunkt des Mohr-Kreises ortsfest — er hängt nicht vom Schnittwinkel ab.',
        true,
        `**Ansatz:** $\\sigma_M$ ist die **halbe Spur** des Spannungstensors: $\\sigma_M = (\\sigma_x + \\sigma_y)/2 = \\text{trace}(\\underline{\\sigma})/2$. Die Spur ist eine **Invariante** gegenüber Drehung.

**Rechnung:** Für gedrehtes Koordinatensystem gilt $\\sigma_{x'} + \\sigma_{y'} = \\sigma_x + \\sigma_y$ für alle Drehwinkel. Also $\\sigma_M$ konstant.

**Probe:** Gerade deshalb ist der Mohr-Kreis ein **Kreis**: Beim Drehen des Schnitts wandert der Zustandspunkt **auf** dem Kreis um den festen Mittelpunkt.

**Typischer Fehler:** Verwechslung mit dem Radius, der ebenfalls invariant ist, aber aus **Differenzen** gebildet wird — nicht mit dem Mittelpunkt.`,
        [
          'Spur (Summe der Diagonalen) ist dreh-invariant.',
          'Mittelpunkt = halbe Spur.',
          'Drehung ändert den Punkt auf dem Kreis, nicht den Kreis selbst.',
        ],
      ),
      sorting(
        'Sub-Goal "Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$": Bringe die Arbeitsschritte beim Zeichnen des Mohr-Kreises in die richtige Reihenfolge (gegeben: $\\sigma_x, \\sigma_y, \\tau_{xy}$).',
        [
          'Vorzeichen klären (Zug +, Druck −, $\\tau$-Konvention)',
          'Mittelpunkt $\\sigma_M = (\\sigma_x + \\sigma_y)/2$ auf die $\\sigma$-Achse einzeichnen',
          'Radius $R$ aus $\\sigma_x - \\sigma_y$ und $\\tau_{xy}$ berechnen',
          'Kreis um $\\sigma_M$ mit Radius $R$ zeichnen und Hauptspannungen $\\sigma_{1,2} = \\sigma_M \\pm R$ ablesen',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Systematisch: Vorzeichen zuerst, dann Mittelpunkt, dann Radius, dann Kreis samt Auswertung. Wer den Radius vor dem Mittelpunkt rechnet, landet oft beim falschen Achsenabschnitt.

**Rechnung:** (1) Vorzeichenkonvention festlegen. (2) $\\sigma_M$ markiert die Kreismitte auf der $\\sigma$-Achse. (3) $R$ enthält die halbe Differenz **und** den Schub. (4) Ablesen.

**Probe:** Wird Schritt 1 vergessen, rutscht der Kreis um den doppelten Druckwert nach links — der Klassiker bei Zug-Druck-Überlagerung.

**Typischer Fehler:** Mittelpunkt und Radius vertauschen, weil beide "aus $\\sigma_x, \\sigma_y$" gebildet werden. Mittelpunkt = **Summe**/2, Radius = **Differenz**-Anteil.`,
        [
          'Zuerst Vorzeichen klären.',
          'Mittelpunkt ist einfacher als Radius — zuerst.',
          'Ablesen am Ende.',
        ],
      ),
    ],

    // ── [1] Radius: R = √(((σ_x - σ_y)/2)² + τ_xy²) ────────────────────
    1: [
      ni(
        'Sub-Goal "Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$": Gegeben $\\sigma_x = 100\\,\\text{MPa}$, $\\sigma_y = 20\\,\\text{MPa}$, $\\tau_{xy} = 30\\,\\text{MPa}$. Berechne den Radius $R$ des Mohr-Kreises.',
        50, 0.5, 'MPa',
        `**Ansatz:** Der Radius ist die Hypotenuse aus zwei Beiträgen: halbe Differenz der Normalspannungen und Schub. Formel: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$.

**Rechnung:** $(\\sigma_x - \\sigma_y)/2 = (100-20)/2 = 40$. $R = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\text{MPa}$.

**Probe:** Pythagoras-Tripel 30-40-50 — saubere Zahl, gut zum Merken.

**Typischer Fehler:** Die Klammer $(\\sigma_x - \\sigma_y)/2$ weglassen und $(\\sigma_x - \\sigma_y)^2 = 80^2 = 6400$ benutzen — liefert $R = \\sqrt{6400+900} = \\sqrt{7300}\\approx 85{,}4$, viel zu groß. Oder $\\tau_{xy}$ halbieren, weil man es beim Mittelpunkt nicht gebraucht hat.`,
        [
          'Erst $(\\sigma_x - \\sigma_y)/2$ ausrechnen.',
          '$\\tau_{xy}$ **nicht** halbieren.',
          'Pythagoras: $\\sqrt{40^2 + 30^2}$.',
        ],
      ),
      ni(
        'Sub-Goal "Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$": Eine Welle steht unter reiner Torsion: $\\sigma_x = \\sigma_y = 0$, $\\tau_{xy} = 45\\,\\text{MPa}$. Radius $R$?',
        45, 0.5, 'MPa',
        `**Ansatz:** Bei reiner Torsion fällt der Differenz-Term weg, es bleibt nur $\\tau_{xy}$.

**Rechnung:** $R = \\sqrt{0^2 + 45^2} = 45\\,\\text{MPa}$.

**Probe:** Der Kreis ist symmetrisch um den Ursprung, $\\sigma_{1,2} = \\pm 45\\,\\text{MPa}$. Genau das klassische Bild bei Torsion: gleich große Zug- und Druck-Hauptspannungen unter $45°$.

**Typischer Fehler:** Meinen, der Radius sei "null, weil keine Normalspannung da ist". Der Schub allein liefert bereits einen Kreis-Radius — sonst wäre Torsion harmlos.`,
        [
          '$(\\sigma_x - \\sigma_y) = 0$.',
          'Unter der Wurzel bleibt nur $\\tau_{xy}^2$.',
          '$R = |\\tau_{xy}|$.',
        ],
      ),
      mc(
        'Sub-Goal "Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$": Bei welcher Konfiguration wird der Radius **minimal** (genauer: $R = 0$)?',
        [
          '$\\sigma_x = \\sigma_y$ **und** $\\tau_{xy} = 0$',
          '$\\sigma_x = -\\sigma_y$ und $\\tau_{xy} = 0$',
          '$\\sigma_x = \\sigma_y = 0$ (alle Spannungen null)',
          '$\\tau_{xy}$ minimal, egal welche $\\sigma$',
        ],
        0,
        `**Ansatz:** $R = 0$ verlangt, dass **beide** Beiträge unter der Wurzel null sind: $(\\sigma_x - \\sigma_y)/2 = 0$ **und** $\\tau_{xy} = 0$. Das ist ein hydrostatischer 2D-Zustand.

**Rechnung:** $\\sigma_x = \\sigma_y$ macht den ersten Term null; $\\tau_{xy} = 0$ den zweiten. Beide Bedingungen zusammen ⇒ $R = 0$, der "Kreis" kollabiert zum Punkt. Der Spannungszustand ist richtungsunabhängig.

**Probe:** Option (c) ist ein **Spezialfall** von (a), liefert auch $R=0$ — aber (a) ist die **allgemeine** Antwort. (a) ist korrekt und umfassender.

**Typischer Fehler:** Glauben, $R = 0$ heiße automatisch "keine Spannung". Bei $\\sigma_x = \\sigma_y = 100\\,\\text{MPa}$ ist $R = 0$, aber es herrscht trotzdem 100 MPa in alle Richtungen.`,
        [
          'Wurzel wird null, wenn beide Summanden null sind.',
          'Erster Summand null: $\\sigma_x = \\sigma_y$.',
          'Zweiter Summand null: $\\tau_{xy} = 0$.',
        ],
        {
          1: '$\\sigma_x = -\\sigma_y$ mit $\\tau=0$ gibt maximalen Differenz-Term ($R = |\\sigma_x|$), nicht Minimum.',
          2: 'Korrekt in der Sache, aber zu eng — (a) umfasst auch $\\sigma_x = \\sigma_y \\neq 0$, was ebenfalls $R=0$ liefert. (a) ist die allgemeinere und damit bessere Antwort.',
          3: 'Allein $\\tau_{xy}$ klein reicht nicht — solange $\\sigma_x \\neq \\sigma_y$, bleibt der erste Term und damit $R > 0$.',
        },
      ),
      tf(
        'Sub-Goal "Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$": Halbiert man die Schubspannung $\\tau_{xy}$ (alles andere konstant), halbiert sich auch der Radius $R$.',
        false,
        `**Ansatz:** Die Beziehung ist **nicht** linear in $\\tau_{xy}$, sondern geht über eine Wurzel: $R = \\sqrt{(\\ldots)^2 + \\tau_{xy}^2}$. Nur im **Grenzfall** $\\sigma_x = \\sigma_y$ (Differenz-Term null) wäre es linear — im allgemeinen Fall nicht.

**Rechnung:** Beispiel: $(\\sigma_x - \\sigma_y)/2 = 40$, $\\tau_{xy} = 30$. $R = 50$. Halbiere $\\tau_{xy} = 15$: $R = \\sqrt{40^2 + 15^2} = \\sqrt{1825} \\approx 42{,}7 \\neq 25$.

**Probe:** Nur im reinen Schub ($\\sigma_x = \\sigma_y$) gilt $R = |\\tau_{xy}|$ und dann linear in $\\tau$.

**Typischer Fehler:** Linearität in allen Parametern unterstellen. Der Radius ist eine **quadratische** Funktion über die Wurzel — jede Halbierung verändert das Ergebnis nichtlinear.`,
        [
          'Radius-Formel hat eine Wurzel.',
          'Wurzel aus Summe ≠ Summe der Wurzeln.',
          'Gegenbeispiel durchrechnen.',
        ],
      ),
      matching(
        'Sub-Goal "Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$": Ordne die Spannungszustände ihrem Radius zu.',
        [
          { left: '$\\sigma_x = 100,\\;\\sigma_y = 20,\\;\\tau_{xy} = 30$', right: '$R = 50\\,\\text{MPa}$' },
          { left: '$\\sigma_x = \\sigma_y = 0,\\;\\tau_{xy} = 60$', right: '$R = 60\\,\\text{MPa}$' },
          { left: '$\\sigma_x = 80,\\;\\sigma_y = 20,\\;\\tau_{xy} = 40$', right: '$R = 50\\,\\text{MPa}$' },
          { left: '$\\sigma_x = 100,\\;\\sigma_y = 100,\\;\\tau_{xy} = 0$', right: '$R = 0\\,\\text{MPa}$' },
        ],
        `**Ansatz:** Jeder Zustand direkt in $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$ einsetzen.

**Rechnung:** Zeile 1: $\\sqrt{40^2+30^2} = 50$. · Zeile 2: reiner Schub, $R = 60$. · Zeile 3: $\\sqrt{30^2+40^2} = 50$ (anderes 30-40-50-Tripel). · Zeile 4: hydrostatisch, $R = 0$.

**Probe:** Zeilen 1 und 3 haben gleichen Radius, obwohl die Einzelwerte anders sind — genau das ist der Sinn des Mohr-Kreises: zwei verschiedene Zustände haben denselben Kreis (nur andere Position **auf** dem Kreis).

**Typischer Fehler:** In Zeile 2 glauben, $R = 0$, weil "keine Normalspannung". Schub allein reicht für einen Kreis mit Radius = $|\\tau_{xy}|$.`,
        [
          'Formel jeweils streng einsetzen.',
          'Zeile 2: Differenz-Term fällt weg.',
          'Zeile 4: beide Beiträge null.',
        ],
      ),
    ],

    // ── [2] Hauptspannungen: σ_{1,2} = σ_M ± R ─────────────────────────
    2: [
      ni(
        'Sub-Goal "Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$": Gegeben $\\sigma_x = 100\\,\\text{MPa}$, $\\sigma_y = 40\\,\\text{MPa}$, $\\tau_{xy} = 40\\,\\text{MPa}$. Berechne die **größere** Hauptspannung $\\sigma_1$.',
        120, 0.5, 'MPa',
        `**Ansatz:** Mittelpunkt $\\sigma_M = (\\sigma_x+\\sigma_y)/2$, Radius $R = \\sqrt{((\\sigma_x-\\sigma_y)/2)^2 + \\tau_{xy}^2}$, dann $\\sigma_{1,2} = \\sigma_M \\pm R$. Größere = mit "+".

**Rechnung:** $\\sigma_M = (100+40)/2 = 70$. $R = \\sqrt{30^2+40^2} = \\sqrt{2500} = 50$. $\\sigma_1 = 70 + 50 = 120\\,\\text{MPa}$.

**Probe:** Zum Check $\\sigma_2 = 70 - 50 = 20$. Summe $\\sigma_1 + \\sigma_2 = 140 = \\sigma_x + \\sigma_y$ ✓ (Invariante).

**Typischer Fehler:** $\\sigma_1 = \\sigma_x + \\tau_{xy}$ bilden ($140$) — das ignoriert die korrekte Kombination von $\\sigma_y$ und den Schub-Effekt.`,
        [
          'Zuerst Mittelpunkt, dann Radius.',
          '$\\sigma_1 = \\sigma_M + R$.',
          '30-40-50-Pythagoras.',
        ],
      ),
      ni(
        'Sub-Goal "Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$": Gleiche Angaben ($\\sigma_x = 100, \\sigma_y = 40, \\tau_{xy} = 40$). Berechne die **kleinere** Hauptspannung $\\sigma_2$.',
        20, 0.5, 'MPa',
        `**Ansatz:** $\\sigma_2 = \\sigma_M - R$. Dieselben Zwischengrößen wie für $\\sigma_1$.

**Rechnung:** $\\sigma_M = 70$, $R = 50$. $\\sigma_2 = 70 - 50 = 20\\,\\text{MPa}$.

**Probe:** $\\sigma_1 \\cdot \\sigma_2 = 120 \\cdot 20 = 2400$. Zweite Invariante: $\\sigma_x \\sigma_y - \\tau_{xy}^2 = 100\\cdot 40 - 1600 = 2400$ ✓.

**Typischer Fehler:** $\\sigma_2$ negativ annehmen, weil "klein = Druck". Nur wenn $R > \\sigma_M$ wird $\\sigma_2 < 0$; hier ist $R < \\sigma_M$, also bleibt $\\sigma_2$ positiv.`,
        [
          'Dieselben Zwischenwerte wie bei $\\sigma_1$.',
          '$\\sigma_2 = \\sigma_M - R$.',
          '$70 - 50$.',
        ],
      ),
      ni(
        'Sub-Goal "Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$": Kombinierter Spannungszustand: $\\sigma_x = 80\\,\\text{MPa}$, $\\sigma_y = -20\\,\\text{MPa}$ (Druck), $\\tau_{xy} = 0$. Größere Hauptspannung $\\sigma_1$?',
        80, 0.5, 'MPa',
        `**Ansatz:** Bei $\\tau_{xy}=0$ sind die Achsen $x, y$ bereits Hauptachsen — $\\sigma_x$ und $\\sigma_y$ sind direkt die Hauptspannungen. Formal trotzdem über den Mohr-Kreis.

**Rechnung:** $\\sigma_M = (80 + (-20))/2 = 30$. $R = \\sqrt{((80-(-20))/2)^2 + 0^2} = 50$. $\\sigma_1 = 30+50 = 80\\,\\text{MPa}$, $\\sigma_2 = 30 - 50 = -20\\,\\text{MPa}$.

**Probe:** $\\sigma_1, \\sigma_2$ stimmen mit $\\sigma_x, \\sigma_y$ überein ✓. Das bestätigt: ohne Schub sind $x, y$ Hauptachsen.

**Typischer Fehler:** Vorzeichen des Drucks weglassen ⇒ $\\sigma_M = 50, R = 30, \\sigma_1 = 80$ — zufällig richtige Zahl, aber mit falschem $\\sigma_2 = 20$ statt $-20$.`,
        [
          '$\\tau = 0$ → Achsen schon Hauptachsen.',
          'Druck = negatives Vorzeichen.',
          '$\\sigma_1 = \\max(\\sigma_x, \\sigma_y)$.',
        ],
      ),
      mc(
        'Sub-Goal "Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$": Bei welchem Zustand werden beide Hauptspannungen **gleich groß** ($\\sigma_1 = \\sigma_2$)?',
        [
          'wenn $\\sigma_x = \\sigma_y$ und $\\tau_{xy} = 0$',
          'wenn $\\sigma_x = -\\sigma_y$',
          'wenn $\\tau_{xy} = 0$ (alleine reicht)',
          'wenn $\\sigma_M = 0$',
        ],
        0,
        `**Ansatz:** $\\sigma_1 = \\sigma_2$ ⇔ $R = 0$. Der Radius ist null genau dann, wenn **beide** Terme unter der Wurzel null sind.

**Rechnung:** $R = 0$ ⇔ $\\sigma_x = \\sigma_y$ UND $\\tau_{xy} = 0$. Dann $\\sigma_1 = \\sigma_2 = \\sigma_M = \\sigma_x$. Spannungszustand ist **richtungsunabhängig** (hydrostatisch in 2D).

**Probe:** Jeder Schnitt liefert dieselbe Normalspannung, keine Schubspannung — genau ein Punkt auf der $\\sigma$-Achse.

**Typischer Fehler:** Nur eine der beiden Bedingungen verlangen. $\\tau = 0$ allein reicht **nicht**, wenn $\\sigma_x \\neq \\sigma_y$ — dann ist $R = |\\sigma_x - \\sigma_y|/2 > 0$.`,
        [
          '$\\sigma_1 = \\sigma_2$ ⇔ Radius null.',
          'Radius null verlangt zwei Bedingungen.',
          'Beide Summanden müssen null sein.',
        ],
        {
          1: '$\\sigma_x = -\\sigma_y$ führt zu maximalem Differenz-Term und damit großem $R$, nicht $R = 0$.',
          2: '$\\tau_{xy} = 0$ macht nur einen der beiden Summanden unter der Wurzel null. Solange $\\sigma_x \\neq \\sigma_y$, bleibt $R > 0$.',
          3: '$\\sigma_M = 0$ betrifft die Lage des Kreises, nicht seinen Radius. Ein Kreis um den Ursprung kann durchaus Radius > 0 haben.',
        },
      ),
      sorting(
        'Sub-Goal "Hauptspannungen: $\\sigma_{1,2} = \\sigma_M \\pm R$": Ordne die Rechenschritte zur Bestimmung der Hauptspannungen.',
        [
          'Ausgangsgrößen notieren: $\\sigma_x, \\sigma_y, \\tau_{xy}$ mit Vorzeichen',
          'Mittelpunkt: $\\sigma_M = (\\sigma_x + \\sigma_y)/2$',
          'Radius: $R = \\sqrt{((\\sigma_x - \\sigma_y)/2)^2 + \\tau_{xy}^2}$',
          'Hauptspannungen: $\\sigma_1 = \\sigma_M + R$, $\\sigma_2 = \\sigma_M - R$',
          'Invariantencheck: $\\sigma_1 + \\sigma_2 \\stackrel{?}{=} \\sigma_x + \\sigma_y$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Reihenfolge: Daten → Mittelpunkt → Radius → Hauptspannungen → Kontrolle.

**Rechnung:** Der Invariantencheck am Ende ist billig und fängt 90 % aller Vorzeichen- oder Rechenfehler ab.

**Probe:** Wer den Invariantencheck macht, merkt sofort, wenn ein Vorzeichen verschluckt wurde.

**Typischer Fehler:** Hauptspannungen bilden, ohne Mittelpunkt und Radius separat auszurechnen — dann lassen sich Vorzeichenfehler nicht eingrenzen.`,
        [
          'Erst die Eingaben festhalten.',
          'Mittelpunkt und Radius sind unabhängige Zwischengrößen.',
          'Check am Ende.',
        ],
      ),
    ],

    // ── [3] Max. Schubspannung: τ_max = R ──────────────────────────────
    3: [
      ni(
        'Sub-Goal "Maximale Schubspannung: $\\tau_\\text{max} = R$": Gegeben $\\sigma_1 = 150\\,\\text{MPa}$ und $\\sigma_2 = 30\\,\\text{MPa}$. Wie groß ist die maximale Schubspannung in der Ebene?',
        60, 0.5, 'MPa',
        `**Ansatz:** $\\tau_\\text{max}$ entspricht dem **Radius** des Mohr-Kreises. Bei bekannten Hauptspannungen gilt $\\tau_\\text{max} = (\\sigma_1 - \\sigma_2)/2 = R$.

**Rechnung:** $\\tau_\\text{max} = (150 - 30)/2 = 60\\,\\text{MPa}$.

**Probe:** Der Mohr-Kreis läuft zwischen $\\sigma_2 = 30$ und $\\sigma_1 = 150$ auf der $\\sigma$-Achse. Sein Scheitel oben liegt bei $\\tau = R = 60$ — genau die max. Schubspannung, erreicht bei Schnitten unter $\\pm 45°$ zu den Hauptachsen.

**Typischer Fehler:** $\\tau_\\text{max} = \\sigma_1 - \\sigma_2 = 120$ (Faktor 2 vergessen) oder $\\tau_\\text{max} = \\sigma_1/2 = 75$ (nur $\\sigma_1$ benutzt).`,
        [
          '$\\tau_\\text{max}$ = Radius des Kreises.',
          'Bei Hauptspannungen: $R = (\\sigma_1 - \\sigma_2)/2$.',
          '$(150-30)/2$.',
        ],
      ),
      ni(
        'Sub-Goal "Maximale Schubspannung: $\\tau_\\text{max} = R$": Spannungszustand $\\sigma_x = 100\\,\\text{MPa}$, $\\sigma_y = -40\\,\\text{MPa}$, $\\tau_{xy} = 0$. $\\tau_\\text{max}$?',
        70, 0.5, 'MPa',
        `**Ansatz:** Direkt: $\\tau_\\text{max} = R = \\sqrt{((\\sigma_x-\\sigma_y)/2)^2 + \\tau_{xy}^2}$. Mit $\\tau_{xy}=0$ vereinfacht sich das zu $|\\sigma_x - \\sigma_y|/2$.

**Rechnung:** $(\\sigma_x - \\sigma_y)/2 = (100 - (-40))/2 = 140/2 = 70$. Also $\\tau_\\text{max} = 70\\,\\text{MPa}$.

**Probe:** $\\sigma_1 = 100, \\sigma_2 = -40$, Radius $R = (100-(-40))/2 = 70 = \\tau_\\text{max}$ ✓.

**Typischer Fehler:** $\\sigma_y = -40$ als $+40$ führen — dann $\\tau_\\text{max} = 30$, deutlich zu klein. Bei Zug-Druck-Kombination ist die Differenz gerade besonders groß!`,
        [
          'Zug und Druck: Vorzeichen zählt.',
          'Differenz $100 - (-40) = 140$.',
          'Halbieren.',
        ],
      ),
      tf(
        'Sub-Goal "Maximale Schubspannung: $\\tau_\\text{max} = R$": Die maximale Schubspannung tritt in Schnittrichtungen auf, die um **45°** zu den Hauptachsen gedreht sind.',
        true,
        `**Ansatz:** Im Mohr-Kreis ist $\\tau_\\text{max}$ der oberste Scheitelpunkt des Kreises — er liegt gegenüber dem Mittelpunkt **senkrecht** zur $\\sigma$-Achse, also beim doppelten Winkel $2\\varphi = 90°$ relativ zu den Hauptachsen.

**Rechnung:** Im Mohr-Kreis sind Winkel **doppelt** dargestellt. $2\\varphi = 90°$ im Mohr-Diagramm ⇒ $\\varphi = 45°$ in der realen Geometrie.

**Probe:** Bei Torsionsstäben sieht man das gut: Bruch spröder Wellen verläuft oft unter $45°$ zur Achse — senkrecht zur maximalen Hauptzugspannung, die wiederum $45°$ zur maximalen Schubspannung liegt.

**Typischer Fehler:** Die 45°-Regel für den **realen** Winkel vergessen, weil der Mohr-Kreis den doppelten Winkel zeigt. Hier lohnt sich die Regel: "Mohr-Kreis-Winkel / 2 = realer Schnittwinkel."`,
        [
          'Mohr-Kreis zeigt doppelten Winkel.',
          'Maximum von $\\tau$ liegt beim Mohr-Winkel $90°$.',
          '$90°/2 = 45°$.',
        ],
      ),
      mc(
        'Sub-Goal "Maximale Schubspannung: $\\tau_\\text{max} = R$": Ein Bauteil steht unter reinem Zug $\\sigma_x = 200\\,\\text{MPa}$, $\\sigma_y = 0$, $\\tau_{xy} = 0$. Welche maximale Schubspannung entsteht im Bauteil?',
        [
          '$0\\,\\text{MPa}$ — kein Schub, da $\\tau_{xy} = 0$',
          '$100\\,\\text{MPa}$ — halbe Normalspannung',
          '$200\\,\\text{MPa}$ — gleich wie Normalspannung',
          '$141{,}4\\,\\text{MPa}$ — $\\sigma_x/\\sqrt{2}$',
        ],
        1,
        `**Ansatz:** Reiner Zug in $x$-Richtung ist ein **einachsiger** Zustand — aber in gedrehten Schnitten entsteht durchaus Schub. $\\tau_\\text{max} = R = (\\sigma_x - \\sigma_y)/2$.

**Rechnung:** $R = (200 - 0)/2 = 100\\,\\text{MPa}$. Unter $45°$ zur Zugrichtung erreicht die Schubspannung ihr Maximum.

**Probe:** Zähe Werkstoffe versagen unter Zug oft durch **Gleiten** in den 45°-Ebenen (Lüdersbänder, Fließen), nicht durch reinen Zug — gerade weil $\\tau_\\text{max}$ dort liegt.

**Typischer Fehler:** "Kein Schub angelegt, also auch keiner da" — falsch. Schub ist **schnittabhängig**. Die Werte in $x,y$ heißen nichts über andere Schnittwinkel.`,
        [
          '$\\tau_{xy} = 0$ heißt nur: auf dem $x$-Schnitt kein Schub.',
          'In gedrehten Schnitten kann $\\tau$ groß werden.',
          '$\\tau_\\text{max} = R = (\\sigma_x - \\sigma_y)/2$.',
        ],
        {
          0: '$\\tau_{xy} = 0$ gilt nur für **diesen** Schnitt (x-Ebene). In gedrehten Schnitten entsteht Schub — $\\tau_\\text{max}$ ist die maximale Schubspannung **über alle Schnittwinkel**.',
          2: 'Das wäre $\\sigma_x$, nicht $\\tau_\\text{max}$. Der Kreis-Radius ist die **halbe** Differenz der Hauptspannungen.',
          3: '$\\sigma_x/\\sqrt{2}$ wäre die Schubspannung exakt unter $45°$ bei ebenen Bauteilen — aber $\\tau_\\text{max}$ über alle Winkel ist $(\\sigma_1 - \\sigma_2)/2 = 100$.',
        },
      ),
      sorting(
        'Sub-Goal "Maximale Schubspannung: $\\tau_\\text{max} = R$": Sortiere die Zustände nach aufsteigendem $\\tau_\\text{max}$.',
        [
          '$\\sigma_x = \\sigma_y = 80,\\;\\tau_{xy} = 0$ (hydrostatisch)',
          '$\\sigma_x = 100,\\;\\sigma_y = 60,\\;\\tau_{xy} = 0$',
          '$\\sigma_x = 80,\\;\\sigma_y = 0,\\;\\tau_{xy} = 30$',
          '$\\sigma_x = 100,\\;\\sigma_y = -40,\\;\\tau_{xy} = 0$',
        ],
        [0, 1, 2, 3],
        `**Ansatz:** Jeweils $\\tau_\\text{max} = R = \\sqrt{((\\sigma_x-\\sigma_y)/2)^2 + \\tau_{xy}^2}$.

**Rechnung:** Zeile 1: $R = 0$. Zeile 2: $R = 20$. Zeile 3: $R = \\sqrt{40^2 + 30^2} = 50$. Zeile 4: $R = 70$.

**Probe:** Reihenfolge $0 < 20 < 50 < 70$ ✓.

**Typischer Fehler:** Zeile 4 übersehen — die Zug-Druck-Kombination produziert die größte Differenz und daher das größte $\\tau_\\text{max}$.`,
        [
          'Formel einsetzen.',
          'Vorzeichen bei Zeile 4 beachten.',
          'Aufsteigend sortieren.',
        ],
      ),
    ],

    // ── [4] Hauptachsenwinkel: tan(2φ) = 2τ_xy/(σ_x - σ_y) ─────────────
    4: [
      ni(
        'Sub-Goal "Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$": Gegeben $\\sigma_x = 60\\,\\text{MPa}$, $\\sigma_y = 20\\,\\text{MPa}$, $\\tau_{xy} = 20\\,\\text{MPa}$. Wie groß ist der Hauptachsenwinkel $\\varphi$ (in Grad, auf 0{,}1° genau)?',
        22.5, 0.3, '°',
        `**Ansatz:** $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$. Zähler/Nenner ausrechnen, $\\arctan$, dann durch 2.

**Rechnung:** $\\tan(2\\varphi) = (2\\cdot 20)/(60-20) = 40/40 = 1$. $2\\varphi = 45°$, also $\\varphi = 22{,}5°$.

**Probe:** Einsetzen: In gedrehten Achsen (Drehung um $22{,}5°$) verschwindet $\\tau$ und die Normalspannungen werden zu den Hauptspannungen $\\sigma_{1,2}$.

**Typischer Fehler:** Die Division durch 2 am Ende vergessen — liefert $45°$ statt $22{,}5°$. Oder Vorzeichen des Nenners ignorieren.`,
        [
          'Zähler: $2\\tau_{xy}$.',
          'Nenner: $\\sigma_x - \\sigma_y$ (mit Vorzeichen!).',
          '$\\arctan$, dann halbieren.',
        ],
      ),
      ni(
        'Sub-Goal "Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$": Reiner Schub $\\sigma_x = \\sigma_y = 0$, $\\tau_{xy} = 40\\,\\text{MPa}$. Hauptachsenwinkel $\\varphi$?',
        45, 0.3, '°',
        `**Ansatz:** Nenner $\\sigma_x - \\sigma_y = 0$ ⇒ $\\tan(2\\varphi) \\to \\infty$ ⇒ $2\\varphi = 90°$ ⇒ $\\varphi = 45°$.

**Rechnung:** Grenzübergang: $\\tan(2\\varphi) \\to \\infty$ ⇔ $2\\varphi = 90°$ ⇔ $\\varphi = 45°$.

**Probe:** Physikalisch: Reiner Schub erzeugt unter $45°$ zur $x$-Achse reine Zug- bzw. Druckspannungen — das ist der klassische Torsionsbruch spröder Wellen ("Spiral"-Bruch).

**Typischer Fehler:** Fehler "undefiniert" ausgeben, weil der Taschenrechner $0/0$-Warnung liefert. Grenzwert denken, nicht mechanisch eintippen.`,
        [
          'Nenner wird $0$.',
          'Grenzwert: $2\\varphi = 90°$.',
          'Halbieren: $\\varphi = 45°$.',
        ],
      ),
      tf(
        'Sub-Goal "Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$": Im Mohr-Kreis werden Winkel **doppelt** so groß dargestellt wie in der realen Bauteilgeometrie.',
        true,
        `**Ansatz:** Beim Übergang von Zustand zu Zustand dreht der Zustandsvektor im Mohr-Kreis mit **doppeltem** Winkel — das ist der Kern der Konstruktion.

**Rechnung:** Eine Schnittdrehung um $\\varphi$ im Bauteil entspricht einer Drehung um $2\\varphi$ auf dem Mohr-Kreis.

**Probe:** Deshalb liegen zwei senkrechte Schnitte ($\\varphi = 90°$ auseinander) im Mohr-Kreis **gegenüber** ($2\\varphi = 180°$). Auch deshalb liegt $\\tau_\\text{max}$ unter real $45°$: auf dem Kreis $2\\varphi = 90°$.

**Typischer Fehler:** Den Winkel aus dem Mohr-Kreis **direkt** ablesen und in das Bauteil übertragen ⇒ immer doppelt so große Schnittdrehung wie gemeint.`,
        [
          'Mohr-Konvention: doppelter Winkel.',
          'Real $\\varphi$ ↔ Mohr-Kreis $2\\varphi$.',
          'Zwei orthogonale Schnitte ↔ gegenüberliegende Kreispunkte.',
        ],
      ),
      mc(
        'Sub-Goal "Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$": Was folgt aus $\\tau_{xy} = 0$ (bei $\\sigma_x \\neq \\sigma_y$) für den Hauptachsenwinkel?',
        [
          '$\\varphi = 0°$ — die Achsen $x, y$ sind bereits Hauptachsen',
          '$\\varphi = 45°$',
          '$\\varphi = 90°$',
          'Der Winkel ist nicht definiert',
        ],
        0,
        `**Ansatz:** $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y) = 0/(\\sigma_x - \\sigma_y) = 0$ ⇒ $2\\varphi = 0$ ⇒ $\\varphi = 0$.

**Rechnung:** Null geteilt durch etwas von $0$ verschiedenes ist null; $\\arctan(0) = 0$; halbiert bleibt $0$.

**Probe:** Physikalisch: Ohne Schub sind die $x,y$-Achsen automatisch die Hauptachsen — nichts zu drehen.

**Typischer Fehler:** $45°$ wählen, weil "Schub fehlt, also symmetrisch" — das ist gerade umgekehrt: $45°$ ist der Schubmaximum-Winkel, $0°$ der Hauptachsenwinkel.`,
        [
          'Zähler = 0 bei $\\tau = 0$.',
          '$\\arctan(0) = 0$.',
          'Halbieren ändert nichts.',
        ],
        {
          1: '$45°$ wäre das Schubspannungsmaximum. Bei $\\tau_{xy} = 0$ ist aber genau das **nicht** der interessante Winkel.',
          2: '$90°$ würde aus $\\tan(2\\varphi) = \\infty$ folgen, also $\\tau_{xy} \\neq 0$ bei $\\sigma_x = \\sigma_y$.',
          3: 'Doch — $\\arctan(0) = 0$ ist sauber definiert. Undefiniert wäre der Winkel nur bei $0/0$ (hydrostatisch + kein Schub, Kreis kollabiert).',
        },
      ),
      matching(
        'Sub-Goal "Hauptachsenwinkel: $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$": Ordne die Spannungszustände dem Hauptachsenwinkel $\\varphi$ zu.',
        [
          { left: '$\\sigma_x = 100,\\;\\sigma_y = 20,\\;\\tau_{xy} = 0$', right: '$\\varphi = 0°$' },
          { left: '$\\sigma_x = 60,\\;\\sigma_y = 20,\\;\\tau_{xy} = 20$', right: '$\\varphi = 22{,}5°$' },
          { left: '$\\sigma_x = \\sigma_y = 50,\\;\\tau_{xy} = 25$', right: '$\\varphi = 45°$' },
          { left: '$\\sigma_x = 20,\\;\\sigma_y = 60,\\;\\tau_{xy} = 0$', right: '$\\varphi = 90°$' },
        ],
        `**Ansatz:** Formel $\\tan(2\\varphi) = 2\\tau_{xy}/(\\sigma_x - \\sigma_y)$ jeweils auswerten und halbieren.

**Rechnung:** Zeile 1: $\\tau = 0, \\sigma_x > \\sigma_y$ ⇒ $\\varphi = 0$. Zeile 2: $40/40 = 1 ⇒ 2\\varphi = 45° ⇒ \\varphi = 22{,}5°$. Zeile 3: Nenner 0 ⇒ $2\\varphi = 90° ⇒ \\varphi = 45°$. Zeile 4: $\\tau = 0, \\sigma_x < \\sigma_y$ ⇒ $\\sigma_1$ liegt in $y$-Richtung, also $\\varphi = 90°$.

**Probe:** Vorzeichen im Nenner in Zeile 4 beachten! Da $\\sigma_x - \\sigma_y < 0$, entspricht die Hauptzugrichtung der $y$-Achse.

**Typischer Fehler:** Zeile 4 mit Zeile 1 gleichsetzen, weil beide "$\\tau = 0$" haben — aber die Reihenfolge von $\\sigma_x, \\sigma_y$ entscheidet, auf welcher Achse $\\sigma_1$ liegt.`,
        [
          '$\\tau = 0$ heißt: $x$/$y$ sind Hauptachsen, aber welche ist welche?',
          'Reiner Schub ($\\sigma_x = \\sigma_y$) → $\\varphi = 45°$.',
          'Zeile 4: $\\sigma_y > \\sigma_x$ → Hauptzug auf $y$-Achse.',
        ],
      ),
    ],

    // ── [5] Anwendung: Hypothesen (NH, GEH) ────────────────────────────
    5: [
      ni(
        'Sub-Goal "Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)": Ein **spröder** Gusseisenflansch hat Hauptspannungen $\\sigma_1 = 80\\,\\text{MPa}$, $\\sigma_2 = -40\\,\\text{MPa}$. Vergleichsspannung nach **NH (Normalspannungshypothese)**?',
        80, 0.5, 'MPa',
        `**Ansatz:** Für spröde Werkstoffe (Gusseisen, Keramik, Beton unter Zug) ist die **Normalspannungshypothese** maßgeblich: $\\sigma_v = \\max(|\\sigma_1|, |\\sigma_2|)$ — es zählt die betragsmäßig größte Hauptspannung, weil spröde Werkstoffe durch Trennung versagen, nicht durch Fließen.

**Rechnung:** $|\\sigma_1| = 80, |\\sigma_2| = 40$ ⇒ $\\sigma_v = 80\\,\\text{MPa}$.

**Probe:** Das macht für Gusseisen Sinn: die Zugspannung $\\sigma_1 = 80$ trennt die Matrix entlang von Schwachstellen (Graphitlamellen), bevor Fließen einsetzt.

**Typischer Fehler:** GEH-Formel für sprödes Material anwenden ($\\sigma_v = \\sqrt{\\sigma_1^2 - \\sigma_1\\sigma_2 + \\sigma_2^2} = \\sqrt{6400+3200+1600} \\approx 105$) — das überschätzt die Sicherheit, weil spröde Werkstoffe nicht nach Fließkriterium versagen.`,
        [
          'Spröde → NH (Normalspannungshypothese).',
          'NH: größter Betrag.',
          '$\\max(|80|, |-40|) = 80$.',
        ],
      ),
      ni(
        'Sub-Goal "Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)": Ein **zäher** Stahl (S355) hat Hauptspannungen $\\sigma_1 = 200\\,\\text{MPa}$, $\\sigma_2 = 80\\,\\text{MPa}$. Vergleichsspannung nach **GEH**? (2D-Form, auf ganze MPa)',
        176, 1, 'MPa',
        `**Ansatz:** Für zähe Werkstoffe gilt die **Gestaltänderungsenergie-Hypothese (GEH, von Mises)**. 2D-Form: $\\sigma_v = \\sqrt{\\sigma_1^2 - \\sigma_1\\sigma_2 + \\sigma_2^2}$.

**Rechnung:** $\\sigma_v = \\sqrt{200^2 - 200\\cdot 80 + 80^2} = \\sqrt{40\\,000 - 16\\,000 + 6400} = \\sqrt{30\\,400} \\approx 174{,}4\\,\\text{MPa}$. Genauer: $\\sqrt{30\\,400} = 174{,}36$, bei kaufmännischem Runden auf ganze MPa $\\approx 174$–176.

**Probe:** GEH ist der Industriestandard für Stahl. Überprüfung mit der Spannungsform $\\sigma_v^2 = \\frac{1}{2}[(\\sigma_1-\\sigma_2)^2 + \\sigma_1^2 + \\sigma_2^2]$: $0{,}5\\cdot(14\\,400 + 40\\,000 + 6400) = 30\\,400$ ✓.

**Typischer Fehler:** Vorzeichen des Mischterms: $+\\sigma_1\\sigma_2$ statt $-\\sigma_1\\sigma_2$ benutzen ⇒ $\\sqrt{62\\,400} \\approx 250$. Oder SH (Schubspannungshypothese / Tresca) rechnen: $\\sigma_v = \\sigma_1 - \\sigma_2 = 120$.`,
        [
          'Zäh → GEH.',
          '$\\sigma_v = \\sqrt{\\sigma_1^2 - \\sigma_1\\sigma_2 + \\sigma_2^2}$.',
          'Mischterm mit **Minus**.',
        ],
      ),
      mc(
        'Sub-Goal "Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)": Welche Festigkeitshypothese ist für Baustahl (zäh) am geeignetsten?',
        [
          'Gestaltänderungsenergie-Hypothese (GEH / von Mises)',
          'Normalspannungshypothese (NH / Rankine)',
          'Dehnungs-Hypothese (Bach)',
          'Alle liefern dieselben Ergebnisse, egal bei welchem Material',
        ],
        0,
        `**Ansatz:** Zähe Werkstoffe versagen durch Fließen — Fließen wird durch die Gestaltänderungsenergie kontrolliert, nicht durch Einzelspannungen. Daher GEH/von Mises.

**Rechnung:** Für Stahl, Aluminium, Kupfer: GEH ist der Industriestandard (Fließbedingung nach Eurocode, DIN EN 1993).

**Probe:** NH wäre für Keramik, Glas, Gusseisen-Zug korrekt — dort ist die größte Zugspannung entscheidend. SH (Tresca) ist ein konservativer Vorgänger der GEH — liefert stets $\\sigma_{v,\\text{SH}} \\geq \\sigma_{v,\\text{GEH}}$.

**Typischer Fehler:** NH auch für Stahl anwenden, weil "einfacher" — unterschätzt gerade bei mehrachsigen Druck-Schub-Zuständen die tatsächliche Fließbeanspruchung erheblich.`,
        [
          'Baustahl = zäh.',
          'Zäh → Fließen → Energiebetrachtung.',
          'GEH = von Mises = Industriestandard.',
        ],
        {
          1: 'NH ist für **spröde** Materialien (Gusseisen, Keramik, Beton im Zug) — dort trennt die größte Zugspannung das Gefüge, bevor Fließen einsetzt.',
          2: 'Die Dehnungs-Hypothese nach Bach ist historisch interessant, aber heute kaum noch im Einsatz. Für Stahl ist GEH Standard.',
          3: 'Die Hypothesen liefern bei mehrachsigen Zuständen **deutlich** unterschiedliche Werte (leicht $>30\\,\\%$ Abweichung). Die Wahl der Hypothese ist wesentlich.',
        },
      ),
      tf(
        'Sub-Goal "Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)": Bei einachsigem Zug ($\\sigma_1 \\neq 0$, $\\sigma_2 = 0$) liefern NH und GEH denselben Wert für die Vergleichsspannung.',
        true,
        `**Ansatz:** NH: $\\sigma_v = |\\sigma_1|$. GEH 2D: $\\sigma_v = \\sqrt{\\sigma_1^2 - 0 + 0} = |\\sigma_1|$. Beide liefern $|\\sigma_1|$.

**Rechnung:** $\\sigma_1 = 200, \\sigma_2 = 0$: NH $\\Rightarrow \\sigma_v = 200$. GEH $\\Rightarrow \\sqrt{200^2} = 200$ ✓.

**Probe:** Genau deshalb kalibriert man Hypothesen am Zugversuch: Die Fließ-/Bruchgrenze im einachsigen Zug ist **die** Referenz, an der alle Hypothesen identisch sein müssen.

**Typischer Fehler:** "GEH ist immer höher als NH" — stimmt nicht. Nur bei mehrachsigen Spannungszuständen weichen die Hypothesen voneinander ab.`,
        [
          'Einachsiger Zug: $\\sigma_2 = 0$.',
          'GEH reduziert sich auf $|\\sigma_1|$.',
          'NH ist ebenfalls $|\\sigma_1|$.',
        ],
      ),
      matching(
        'Sub-Goal "Anwendung: Hauptspannungshypothese (spröde Werkstoffe), GEH (zähe)": Ordne Werkstoff/Anwendung der **üblichen** Festigkeitshypothese zu.',
        [
          { left: 'Baustahl S235, S355 (Bauteil im Maschinenbau)', right: 'GEH (von Mises)' },
          { left: 'Grauguss GJL-250 (Getriebegehäuse)', right: 'NH (Normalspannung)' },
          { left: 'Aluminium-Schmiedelegierung (zäh)', right: 'GEH (von Mises)' },
          { left: 'Keramik / Hartmetall (Schneide)', right: 'NH (Normalspannung)' },
        ],
        `**Ansatz:** Grundregel: **zäh** → Fließkriterium → **GEH**. **Spröde** → Trennkriterium → **NH**.

**Rechnung:** Grauguss und Keramik sind klassisch spröde (hohe Druckfestigkeit, niedrige Zugfestigkeit) — NH erfasst das korrekt. Baustahl und duktile Al-Legierungen fließen plastisch — GEH.

**Probe:** Merkregel: "Was sich verbiegt, fließt → GEH. Was zerspringt, trennt → NH." Sicherheitszahlen werden dann jeweils an die passende Hypothese und Materialkennwerte gebunden ($R_e$ bzw. $R_m$).

**Typischer Fehler:** Aluminium als "leicht = spröde" einordnen. Al-Knetlegierungen sind zäh (GEH). Nur einige Gusslegierungen (AlSi-Gussgrundwerkstoffe ohne Wärmebehandlung) wären Grenzfälle.`,
        [
          'Zäh → GEH.',
          'Spröde → NH.',
          'Materialverhalten prüfen, nicht nur Werkstoffname.',
        ],
      ),
    ],

  },

}
