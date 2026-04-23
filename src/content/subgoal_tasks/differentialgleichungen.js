// ═══════════════════════════════════════════════════════════════════════════
// Differentialgleichungen — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════
//
// Format: Objekt mit Sub-Goal-Index als Key, ARRAY von Aufgaben als Value.
// Qualitätskontrakt siehe CLAUDE.md:
//   - Sub-Goal-Label wörtlich zitiert
//   - 4-Block-Erklärung (Ansatz / Rechnung / Probe / Typischer Fehler)
//   - ≥ 3 Hints, gestaffelt
//   - MC ≥ 3 Optionen mit wrongAnswerExplanations für jeden falschen Index
//   - Typen-Rotation pro Sub-Goal
//
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting } from './_helpers'

export const differentialgleichungenSubGoalTasks = {

  // ────────────────────────────────────────────────────────────────────────
  // dgl-3-1 — Prüfung: DGL 1. Ordnung  (6 subGoals, je ≥ 5 Aufgaben)
  // ────────────────────────────────────────────────────────────────────────
  'dgl-3-1': {

    // ── [0] Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati? ────
    0: [
      mc(
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Welchen Typ hat die DGL $y\' = \\frac{x^2}{y^3}$?',
        [
          'trennbar',
          'linear',
          'exakt',
          'Bernoulli',
        ],
        0,
        `**Ansatz:** Kann man die rechte Seite als Produkt $f(x)\\cdot g(y)$ schreiben? Dann trennbar.

**Rechnung:** $\\frac{x^2}{y^3} = x^2 \\cdot \\frac{1}{y^3} = f(x) g(y)$ mit $f(x)=x^2$, $g(y)=y^{-3}$. Also trennbar.

**Probe:** $y^3\\,dy = x^2\\,dx$ lässt sich direkt integrieren: $\\frac{y^4}{4} = \\frac{x^3}{3} + C$.

**Typischer Fehler:** Wegen $y^3$ sofort auf "Bernoulli" tippen. Bernoulli verlangt aber die Form $y\' + p(x)y = q(x) y^n$ mit linearem $y$-Teil auf der linken Seite.`,
        [
          'Versuche die rechte Seite als $f(x)\\cdot g(y)$ zu faktorisieren.',
          'Steht links nur $y\'$ und rechts ein Produkt aus einer $x$-Funktion und einer $y$-Funktion?',
          '$\\frac{x^2}{y^3}$ ist $x^2 \\cdot y^{-3}$.',
        ],
        {
          1: 'Linear wäre $y\' + p(x)y = q(x)$ — also $y$ und $y\'$ nur in 1. Potenz und additiv. Hier steht $y^3$ im Nenner, das ist nichtlinear in $y$.',
          2: 'Exakt braucht die Form $M(x,y)\\,dx + N(x,y)\\,dy = 0$ mit $M_y=N_x$. Hier ist die DGL erst in Differentialform zu bringen, aber das Haupt-Kriterium ist die saubere Trennbarkeit.',
          3: 'Bernoulli hat die Form $y\' + p(x)y = q(x)y^n$ — links muss $y\'$ plus linearer $y$-Term stehen. Hier fehlt der lineare $y$-Term komplett.',
        },
      ),
      tf(
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Die DGL $y\' + x\\, y = x\\, y^2$ ist eine Bernoulli-DGL.',
        true,
        `**Ansatz:** Bernoulli-Form: $y\' + p(x)y = q(x) y^n$ mit $n \\neq 0, 1$.

**Rechnung:** Hier $p(x)=x$, $q(x)=x$, $n=2$. Form passt exakt.

**Probe:** Substitution $u = y^{1-n} = y^{-1}$ würde die DGL in lineare DGL für $u$ überführen: $u\' - x u = -x$.

**Typischer Fehler:** Wegen der $y^2$-Potenz denken, es sei eine nichtlineare Gleichung ohne Standardmethode. Bernoulli ist gerade der Fall, den man mit Standardsubstitution löst.`,
        [
          'Bernoulli-Form: $y\' + p(x)y = q(x)y^n$.',
          'Identifiziere $p$, $q$ und $n$.',
          'Bei $n=2$ wird die Substitution $u=y^{-1}$ verwendet.',
        ],
      ),
      matching(
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Ordne jede DGL ihrem Typ zu.',
        [
          { left: '$y\' = \\sin(x) \\cos(y)$', right: 'trennbar' },
          { left: '$y\' + 2y = e^{3x}$', right: 'linear' },
          { left: '$y\' + \\frac{1}{x}y = x^2 y^3$', right: 'Bernoulli' },
          { left: '$(2x + y)\\,dx + (x + 2y)\\,dy = 0$', right: 'exakt' },
          { left: '$y\' = x^2 + y^2$', right: 'Riccati' },
        ],
        `**Ansatz:** Strukturmerkmale durchgehen.

**Rechnung:** (1) $\\sin x \\cos y = f(x)g(y)$ → trennbar. (2) $y\' + py = q$ mit $p=2$, $q=e^{3x}$ → linear. (3) $y\' + py = qy^n$ mit $n=3$ → Bernoulli. (4) $M_y=1=N_x$ → exakt. (5) $y\' = a(x) + b(x)y + c(x)y^2$ → Riccati.

**Probe:** Die Typen schließen sich teilweise aus (linear ist Sonderfall von Bernoulli mit $n=0,1$, aber Bernoulli-Begriff wird für $n\\neq 0,1$ reserviert).

**Typischer Fehler:** Riccati mit Bernoulli verwechseln: Bernoulli hat $q\\cdot y^n$, Riccati zusätzlich einen additiven $y^2$-Term *und* einen freien $a(x)$-Term.`,
        [
          'Prüfe auf Produktform $f(x)g(y)$.',
          'Achte auf lineare Struktur $y\' + p(x)y = q(x)$ (evtl. mit $y^n$ rechts).',
          'Riccati: $y\' = a + by + c y^2$.',
        ],
      ),
      mc(
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Welche DGL ist *keine* lineare DGL 1. Ordnung?',
        [
          '$y\' + y^2 = x$',
          '$y\' + 2xy = \\sin x$',
          '$y\' - \\frac{y}{x} = x^3$',
          '$y\' = e^x - 3y$',
        ],
        0,
        `**Ansatz:** Linear heißt: $y$ und $y\'$ kommen nur in der 1. Potenz und nicht als Produkt vor.

**Rechnung:** $y\' + y^2 = x$ enthält $y^2$ → nichtlinear. Die anderen haben $y$ nur linear.

**Probe:** Setze $y_1, y_2$ ein; bei linearen DGL ist $y_1+y_2$ nicht automatisch Lösung der inhomogenen Gleichung, aber die Homogene $y\'+py=0$ ist linear (Superposition funktioniert).

**Typischer Fehler:** Den Koeffizienten $2x$ oder $-1/x$ als "nichtlinear" deuten — linear bezieht sich nur auf $y$, nicht auf $x$.`,
        [
          'Linear: $y\' + p(x)y = q(x)$ — $y$ nur 1. Potenz.',
          'Such nach $y^2$, $y \\cdot y\'$ oder $\\sin y$.',
          'Koeffizienten in $x$ dürfen beliebig sein.',
        ],
        {
          1: '$y\' + 2xy = \\sin x$ ist linear: $p(x)=2x$, $q(x)=\\sin x$. $y$ kommt nur in 1. Potenz vor.',
          2: '$y\' - y/x = x^3$ ist linear mit $p(x)=-1/x$, $q(x)=x^3$. Singulär bei $x=0$, aber formal linear.',
          3: '$y\' = e^x - 3y$ lässt sich als $y\' + 3y = e^x$ schreiben — klassische lineare DGL.',
        },
      ),
      sorting(
        'Sub-Goal "Typerkennung: trennbar, linear, exakt, Bernoulli, Riccati?": [PRÜFUNG] Bringe die Schritte der Typ-Klassifikation einer DGL 1. Ordnung in sinnvolle Reihenfolge.',
        [
          'DGL in Standardform bringen (nach $y\'$ auflösen oder Differentialform)',
          'Ist rechte Seite ein Produkt $f(x) g(y)$? → trennbar',
          'Sonst: Ist die Form $y\' + p(x)y = q(x) y^n$? → linear ($n=0,1$) oder Bernoulli',
          'Sonst: $M\\,dx + N\\,dy = 0$, prüfe $M_y = N_x$ → exakt oder integrierender Faktor',
          'Sonst: Riccati $y\' = a + by + c y^2$ oder Spezialfall',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Klassifikation folgt von einfach zu komplex.

**Rechnung:** Zuerst trennbar (einfachste Methode), dann linear/Bernoulli (Standard-Integrierender-Faktor), dann exakte DGL, zuletzt Spezialtypen.

**Probe:** Reihenfolge spiegelt den Aufwand wider: Trennung direkt integrierbar, linear mit Formel lösbar, exakt erfordert Potentialsuche.

**Typischer Fehler:** Mit "exakt" anfangen und unnötig in Differentialform bringen, obwohl die DGL trivial trennbar ist.`,
        [
          'Einfachster Typ zuerst prüfen.',
          'Trennbar vor linear, linear vor exakt.',
          'Bernoulli/Riccati sind Sonderfälle zur Schluss.',
        ],
      ),
    ],

    // ── [1] Trennbar: ∫dy/g(y) = ∫f(x) dx + C ────────────────────────────
    1: [
      ni(
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Löse $y\' = 2xy$ mit $y(0) = 3$. Welchen Wert hat $y(1)$? (Nutze $e \\approx 2{,}71828$.)',
        8.1548, 0.01, '',
        `**Ansatz:** Trennung $dy/y = 2x\\,dx$, integrieren.

**Rechnung:** $\\ln|y| = x^2 + C \\Rightarrow y = A e^{x^2}$. Mit $y(0)=3$: $A=3$. Also $y(x) = 3 e^{x^2}$. Bei $x=1$: $y(1) = 3e^1 = 3 \\cdot 2{,}71828 \\approx 8{,}1548$.

**Probe:** $y\'(x) = 6x e^{x^2}$ und $2xy = 2x \\cdot 3 e^{x^2} = 6x e^{x^2}$. ✓

**Typischer Fehler:** $\\int 2x\\,dx = x^2$ vergessen und nur $2x$ im Exponent behalten, dann $y(1)=3e^2$.`,
        [
          'Trenne: $\\frac{dy}{y} = 2x\\,dx$.',
          'Integriere beide Seiten, exponenziere.',
          '$\\int 2x\\,dx = x^2$, nicht $2x$.',
        ],
      ),
      mc(
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Die allgemeine Lösung von $y\' = \\frac{\\cos x}{y}$ lautet:',
        [
          '$y^2 = 2\\sin x + C$',
          '$y = \\sin x + C$',
          '$y^2 = \\sin x + C$',
          '$\\frac{1}{y} = -\\sin x + C$',
        ],
        0,
        `**Ansatz:** Trennung: $y\\,dy = \\cos x\\,dx$.

**Rechnung:** $\\int y\\,dy = \\frac{y^2}{2}$, $\\int \\cos x\\,dx = \\sin x$. Also $\\frac{y^2}{2} = \\sin x + C_0 \\Rightarrow y^2 = 2\\sin x + C$ (mit $C=2C_0$).

**Probe:** Implizite Ableitung: $2y y\' = 2\\cos x \\Rightarrow y y\' = \\cos x \\Rightarrow y\' = \\cos x / y$. ✓

**Typischer Fehler:** Den Faktor $2$ vor $\\sin x$ vergessen — entsteht beim Umstellen $y^2/2 \\to y^2$.`,
        [
          'Bringe $y$ zu $dy$, $\\cos x$ zu $dx$.',
          '$\\int y\\,dy = y^2/2$.',
          'Multipliziere am Ende mit $2$.',
        ],
        {
          1: 'Hier wurde die Integration von $y\\,dy$ als $y$ gelesen, aber $\\int y\\,dy = y^2/2$ — es entsteht ein Quadrat.',
          2: 'Der Faktor $2$ fehlt. Aus $y^2/2 = \\sin x + C_0$ wird $y^2 = 2\\sin x + 2C_0$, die Konstante kann umbenannt werden, aber der Faktor $2$ vor $\\sin x$ bleibt.',
          3: 'Das wäre die Lösung von $y\' = -\\cos x \\cdot y^2$ (andere DGL). Hier steht $1/y$ auf der rechten Seite, nicht $y^2$.',
        },
      ),
      tf(
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Bei der Trennung der Variablen für $y\' = f(x) g(y)$ darf $g(y_0) = 0$ sein, ohne dass eine Sonderbehandlung nötig ist.',
        false,
        `**Ansatz:** Im Trennungsschritt $dy/g(y) = f(x)dx$ taucht $g(y)$ im Nenner auf.

**Rechnung:** Wenn $g(y_0) = 0$, ist $y(x) \\equiv y_0$ eine konstante Gleichgewichtslösung, die die Trennungsformel nicht mehr erfasst (Division durch $0$). Diese muss separat notiert werden.

**Probe:** Beispiel $y\' = y(1-y)$: $g(y)=y(1-y)=0$ bei $y=0$ und $y=1$. Beide sind Gleichgewichte, die die Trennungslösung $y = 1/(1+Ae^{-x})$ nicht als Sonderfall enthält.

**Typischer Fehler:** Konstante Gleichgewichtslösungen übersehen und nur die "allgemeine" Lösung angeben. In der Prüfung: auf $g(y)=0$ prüfen.`,
        [
          'Was passiert, wenn man durch $g(y_0)$ dividiert, und $g(y_0)=0$?',
          'Eine Lösung $y \\equiv y_0$ mit $g(y_0)=0$ heißt Gleichgewichtslösung.',
          'Diese muss man oft zusätzlich zur allgemeinen Lösung angeben.',
        ],
      ),
      ni(
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Die Lösung von $y\' = -k y$ mit $y(0)=100$ und $k=0{,}2$ wertet bei $t=5$ zu welchem Wert aus? (Nutze $e^{-1} \\approx 0{,}3679$.)',
        36.79, 0.05, '',
        `**Ansatz:** Trennung: $dy/y = -k\\,dt$.

**Rechnung:** $\\ln|y| = -kt + C \\Rightarrow y(t) = A e^{-kt}$. $y(0)=100 \\Rightarrow A=100$. Bei $t=5$, $k=0{,}2$: $y(5) = 100 e^{-1} \\approx 100 \\cdot 0{,}3679 = 36{,}79$.

**Probe:** $y\'(5) = -0{,}2 \\cdot 36{,}79 = -7{,}36$; und $-k y = -0{,}2 \\cdot 36{,}79 = -7{,}36$. ✓

**Typischer Fehler:** $kt = 0{,}2 \\cdot 5 = 1$ positiv statt negativ im Exponenten → $y=100 e \\approx 272$ statt $36{,}79$.`,
        [
          'Exponentialzerfall: $y = y_0 e^{-kt}$.',
          'Berechne $kt = 0{,}2 \\cdot 5 = 1$.',
          '$e^{-1} \\approx 0{,}368$.',
        ],
      ),
      mc(
        'Sub-Goal "Trennbar: $\\int dy/g(y) = \\int f(x) dx + C$": [PRÜFUNG] Die allgemeine Lösung von $y\' = 3x^2 y^2$ lautet:',
        [
          '$y = \\dfrac{-1}{x^3 + C}$',
          '$y = x^3 + C$',
          '$y = \\dfrac{1}{3x^2 + C}$',
          '$y^2 = x^3 + C$',
        ],
        0,
        `**Ansatz:** Trennung: $\\frac{dy}{y^2} = 3x^2\\,dx$.

**Rechnung:** $\\int y^{-2}\\,dy = -y^{-1}$, $\\int 3x^2\\,dx = x^3$. Also $-\\frac{1}{y} = x^3 + C_0 \\Rightarrow y = \\frac{-1}{x^3 + C_0}$.

**Probe:** $y\' = \\frac{3x^2}{(x^3+C_0)^2}$ und $3x^2 y^2 = 3x^2 \\cdot \\frac{1}{(x^3+C_0)^2} = \\frac{3x^2}{(x^3+C_0)^2}$. ✓

**Typischer Fehler:** Das Minus-Vorzeichen aus $-1/y$ vergessen und $y = 1/(x^3+C)$ schreiben — erfüllt die DGL mit umgekehrtem Vorzeichen.`,
        [
          'Trenne $dy/y^2 = 3x^2\\,dx$.',
          '$\\int y^{-2}\\,dy = -y^{-1}$.',
          'Löse nach $y$ auf.',
        ],
        {
          1: 'Das ist einfach das Integral von $3x^2$ bezüglich $x$, aber die DGL verknüpft $y$ und $y\'$ — es muss auch nach $y$ getrennt werden.',
          2: 'Bei der Trennung wurde nicht integriert, sondern nur $y^2$ auf die andere Seite gebracht. Das ist kein gültiger Integrationsschritt.',
          3: 'Das wäre die Lösung einer anderen DGL ($2y y\' = 3x^2$). Hier verschwindet das $y^2$ auf der rechten Seite nicht so einfach.',
        },
      ),
    ],

    // ── [2] Exakte DGL: M_y = N_x prüfen, Potentialfunktion F finden, F=C
    2: [
      mc(
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Prüfe $(3x^2 + 2y)\\,dx + (2x + 3y^2)\\,dy = 0$ auf Exaktheit.',
        [
          'Exakt, $M_y = N_x = 2$',
          'Nicht exakt, $M_y = 2$, $N_x = 3y^2$',
          'Exakt, $M_y = N_x = 3x^2 + 3y^2$',
          'Nicht exakt, $M_y = 3x^2$, $N_x = 2$',
        ],
        0,
        `**Ansatz:** Kriterium: $M_y = N_x$.

**Rechnung:** $M = 3x^2 + 2y \\Rightarrow M_y = 2$. $N = 2x + 3y^2 \\Rightarrow N_x = 2$. Beide gleich $2$, also exakt.

**Probe:** Potential $F = x^3 + 2xy + y^3$: $F_x = 3x^2 + 2y = M$, $F_y = 2x + 3y^2 = N$. ✓

**Typischer Fehler:** Die partiellen Ableitungen in der falschen Variable bilden — $M$ wird nach $y$ abgeleitet (nicht nach $x$), $N$ nach $x$ (nicht nach $y$).`,
        [
          '$M_y = \\partial M / \\partial y$, nicht $\\partial M / \\partial x$.',
          'Leite $M$ nach $y$ ab, $N$ nach $x$ ab.',
          'Beide Ergebnisse vergleichen.',
        ],
        {
          1: 'Hier wurde $N$ nach $y$ abgeleitet statt nach $x$. Korrekt: $\\partial_x(2x+3y^2) = 2$.',
          2: 'Hier wurden beide nach den jeweils "anderen" Variablen abgeleitet: $M$ nach $x$ und $N$ nach $y$. Das ist gerade falsch — Exaktheit verlangt gemischte Ableitungen.',
          3: 'Hier wurde $M$ nach $x$ statt nach $y$ abgeleitet, und $N$ korrekt nach $x$. Richtig: $M_y = \\partial_y(3x^2+2y) = 2$.',
        },
      ),
      ni(
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Die DGL $(2x + y)\\,dx + (x + 2y)\\,dy = 0$ ist exakt. Finde das Potential $F(x,y)$ mit $F(0,0)=0$ und werte es bei $(x,y)=(1,2)$ aus.',
        7, 0.01, '',
        `**Ansatz:** Exaktheit prüfen, dann $F_x = M$, $F_y = N$ integrieren.

**Rechnung:** $M_y = 1 = N_x$ → exakt. $F = \\int M\\,dx = x^2 + xy + \\phi(y)$. Ableiten: $F_y = x + \\phi\'(y) = N = x + 2y \\Rightarrow \\phi\'(y) = 2y \\Rightarrow \\phi(y) = y^2$. Also $F(x,y) = x^2 + xy + y^2$. Bei $(1,2)$: $1 + 2 + 4 = 7$.

**Probe:** $F(0,0) = 0$ ✓, $F_x = 2x+y = M$ ✓, $F_y = x + 2y = N$ ✓.

**Typischer Fehler:** Nach $x$ integrieren, aber das $\\phi(y)$ vergessen, oder $\\phi\'(y)$ fälschlich als $0$ behandeln.`,
        [
          '$F = \\int M\\,dx + \\phi(y)$.',
          '$\\phi(y)$ aus der Bedingung $F_y = N$ bestimmen.',
          'Bei $(1,2)$ einsetzen.',
        ],
      ),
      tf(
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Wenn eine DGL $M\\,dx + N\\,dy = 0$ exakt ist, existiert genau ein Potential $F$ mit $F_x = M$, $F_y = N$.',
        false,
        `**Ansatz:** Potential ist nur bis auf Konstante eindeutig.

**Rechnung:** Ist $F$ ein Potential, so auch $F + c$ für jede Konstante $c$. Beide erfüllen $F_x = M$, $F_y = N$.

**Probe:** Im Beispiel $(2x+y)dx+(x+2y)dy=0$: sowohl $F = x^2+xy+y^2$ als auch $F+100$ sind Potentiale, und die Lösungskurven $F=C$ sind identisch (nur Konstante anders).

**Typischer Fehler:** Denken, dass das Potential streng eindeutig ist. Man normiert es meist durch $F(x_0,y_0)=0$.`,
        [
          'Integration lässt immer eine Konstante frei.',
          'Zwei Potentiale unterscheiden sich nur um eine Konstante.',
          'Die Lösungskurve $F=C$ ist dieselbe.',
        ],
      ),
      mc(
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Welche Lösung (implizit) hat $(2xy + 1)\\,dx + (x^2 + 4y)\\,dy = 0$?',
        [
          '$x^2 y + x + 2y^2 = C$',
          '$x^2 y + 2y^2 = C$',
          '$x y^2 + x + 2y^2 = C$',
          '$2xy + 4y = C$',
        ],
        0,
        `**Ansatz:** Exaktheit: $M_y = 2x = N_x$ ✓. Potential integrieren.

**Rechnung:** $F = \\int M\\,dx = x^2 y + x + \\phi(y)$. $F_y = x^2 + \\phi\'(y) = x^2 + 4y \\Rightarrow \\phi\'(y) = 4y \\Rightarrow \\phi(y) = 2y^2$. Also $F = x^2 y + x + 2y^2 = C$.

**Probe:** $F_x = 2xy+1 = M$ ✓. $F_y = x^2 + 4y = N$ ✓.

**Typischer Fehler:** Den $+x$-Beitrag vergessen, der aus $\\int 1\\,dx = x$ kommt.`,
        [
          'Integriere $M$ nach $x$, inklusive der $+1$.',
          '$\\int (2xy+1)\\,dx = x^2 y + x$.',
          '$\\phi(y)$ aus $F_y = N$ bestimmen.',
        ],
        {
          1: 'Der $+x$-Term fehlt. $\\int 1\\,dx = x$, nicht $0$.',
          2: 'Hier wurde $2xy$ falsch integriert — $\\int 2xy\\,dx = x^2 y$, nicht $xy^2$.',
          3: 'Hier wurde $\\phi\'(y) = 4y$ nicht integriert, sondern als Summand übernommen. $\\int 4y\\,dy = 2y^2$, und $M$ enthält keinen reinen $2xy$-Term ohne weitere Integration.',
        },
      ),
      sorting(
        'Sub-Goal "Exakte DGL: $M_y = N_x$ prüfen, Potentialfunktion $F$ finden, $F = C$": [PRÜFUNG] Bringe die Schritte zur Lösung einer exakten DGL in die richtige Reihenfolge.',
        [
          'Schreibe die DGL in der Form $M(x,y)\\,dx + N(x,y)\\,dy = 0$',
          'Prüfe $M_y = N_x$',
          'Integriere $M$ nach $x$: $F = \\int M\\,dx + \\phi(y)$',
          'Bestimme $\\phi(y)$ aus $F_y = N$',
          'Gib die Lösung implizit als $F(x,y) = C$ an',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Standardalgorithmus für exakte DGL.

**Rechnung:** (1) Standardform → (2) Exaktheits-Test → (3) Partielle Integration nach $x$ → (4) Integrationskonstante $\\phi(y)$ über $F_y = N$ fixieren → (5) implizite Lösung $F=C$.

**Probe:** Am Beispiel wird jeder Schritt durchgeführt; überspringt man den Test, riskiert man falsche Methode.

**Typischer Fehler:** Direkt integrieren, ohne $M_y = N_x$ zu prüfen. Ist die DGL *nicht* exakt, produziert dieser Weg eine falsche Potentialfunktion.`,
        [
          'Erst Form prüfen, dann Methode wählen.',
          'Test vor Integration.',
          '$\\phi(y)$ zuletzt fixieren.',
        ],
      ),
    ],

    // ── [3] AWP: Konstante C aus y(x_0) = y_0 bestimmen ────────────────────
    3: [
      ni(
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] AWP: $y\' = y$, $y(0) = 7$. Welchen Wert hat die Integrationskonstante $C$ in $y = C e^x$?',
        7, 0, '',
        `**Ansatz:** Allgemeine Lösung einsetzen und Anfangsbedingung nutzen.

**Rechnung:** $y(0) = C e^0 = C = 7 \\Rightarrow C = 7$.

**Probe:** $y(x) = 7e^x$, $y(0) = 7$ ✓, $y\' = 7e^x = y$ ✓.

**Typischer Fehler:** $C = 7 e^0$ berechnen und $e^0 = 0$ annehmen — aber $e^0 = 1$.`,
        [
          'Setze $x_0 = 0$ in $y = Ce^x$ ein.',
          '$e^0 = 1$.',
          '$y(0) = C$.',
        ],
      ),
      mc(
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] AWP: $y\' + y = 0$, $y(1) = e$. Wie lautet die partikuläre Lösung?',
        [
          '$y = e^{2-x}$',
          '$y = e^{-x}$',
          '$y = e \\cdot e^{-x}$',
          '$y = e^{x-2}$',
        ],
        0,
        `**Ansatz:** Homogene Lösung $y = Ce^{-x}$, $C$ aus $y(1)=e$.

**Rechnung:** $y(1) = C e^{-1} = e \\Rightarrow C = e \\cdot e = e^2$. Also $y(x) = e^2 \\cdot e^{-x} = e^{2-x}$.

**Probe:** $y(1) = e^{2-1} = e$ ✓. $y\' = -e^{2-x} = -y$ ✓.

**Typischer Fehler:** $C = e \\cdot e^1 = e^2$ durch Multiplikation statt Division erhalten — es passt zufällig, aber aus falschem Grund. Saubere Rechnung: $C = e / e^{-1} = e^2$.`,
        [
          'Erst homogene Lösung aufstellen: $y = Ce^{-x}$.',
          'AB $y(1)=e$ einsetzen.',
          '$C = e \\cdot e^1$.',
        ],
        {
          1: 'Das ist die allgemeine homogene Lösung mit $C=1$, aber dann wäre $y(1) = e^{-1} \\neq e$. Die Anfangsbedingung muss eingebaut werden.',
          2: 'Fast richtig: $e \\cdot e^{-x} = e^{1-x}$, das ist *nicht* $e^{2-x}$. Bei $x=1$ gibt $e^{1-1}=e^0=1 \\neq e$.',
          3: '$e^{x-2}$ ist *steigend* (positiver Exponent in $x$). Die DGL $y\'+y=0$ hat abklingende Lösungen. Vorzeichenfehler im Exponenten.',
        },
      ),
      tf(
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Bei einem AWP einer linearen DGL 1. Ordnung ist die Konstante $C$ eindeutig durch die Anfangsbedingung bestimmt.',
        true,
        `**Ansatz:** Satz von Picard-Lindelöf bei stetigen Koeffizienten.

**Rechnung:** Lineare DGL 1. Ordnung $y\'+p(x)y = q(x)$ hat bei stetigen $p, q$ eine eindeutige Lösung durch jeden Punkt $(x_0, y_0)$ — ein einziges $C$.

**Probe:** Bei $y\' = y$, $y(0)=3$: $y = Ce^x$, $C = 3$ — kein anderer Wert erfüllt $y(0)=3$.

**Typischer Fehler:** Verwechslung mit 2. Ordnung: dort gibt es zwei Konstanten und man braucht zwei Bedingungen.`,
        [
          'Picard-Lindelöf: eindeutige Lösung bei stetigen Koeffizienten.',
          'Lineare DGL 1. Ordnung → eine Konstante → eine Bedingung.',
          'Bei 2. Ordnung bräuchte man zwei.',
        ],
      ),
      ni(
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] AWP: $y\' = -3y + 6$, $y(0) = 1$. Welchen Wert erreicht $y(t)$ für $t \\to \\infty$?',
        2, 0.01, '',
        `**Ansatz:** Partikuläre Lösung (konstant) + homogene Lösung.

**Rechnung:** $y_p$: setze $y_p = A$ konstant, dann $0 = -3A+6 \\Rightarrow A=2$. Homogen: $y_h = Ce^{-3t}$. Allg.: $y = 2 + Ce^{-3t}$. $y(0)=1$: $2+C=1 \\Rightarrow C=-1$. $y(t) = 2 - e^{-3t} \\to 2$ für $t\\to\\infty$.

**Probe:** $y\' = 3e^{-3t}$ und $-3y+6 = -3(2-e^{-3t})+6 = -6+3e^{-3t}+6 = 3e^{-3t}$. ✓

**Typischer Fehler:** Den Gleichgewichtswert direkt aus $y(0)$ entnehmen statt aus $\\dot y = 0$.`,
        [
          'Gleichgewicht: $y\' = 0$.',
          '$-3y+6=0 \\Rightarrow y=2$.',
          'Wegen $e^{-3t} \\to 0$ nähert sich die Lösung dem Gleichgewicht.',
        ],
      ),
      matching(
        'Sub-Goal "AWP: Konstante $C$ aus $y(x_0) = y_0$ bestimmen": [PRÜFUNG] Ordne der allgemeinen Lösung (mit Konstante $C$) die passende Anfangsbedingung und den resultierenden $C$-Wert zu.',
        [
          { left: '$y = C e^{2x}$, $y(0)=5$', right: '$C = 5$' },
          { left: '$y^2 = x^2 + C$, $y(0)=3$', right: '$C = 9$' },
          { left: '$y = C e^{-x}$, $y(\\ln 2) = 1$', right: '$C = 2$' },
          { left: '$y = 1 + C e^{-x}$, $y(0)=3$', right: '$C = 2$' },
        ],
        `**Ansatz:** Jeweils $x_0, y_0$ einsetzen und nach $C$ auflösen.

**Rechnung:** (1) $5 = C \\cdot 1 \\Rightarrow C=5$. (2) $9 = 0 + C \\Rightarrow C=9$. (3) $1 = C e^{-\\ln 2} = C/2 \\Rightarrow C=2$. (4) $3 = 1 + C \\Rightarrow C=2$.

**Probe:** Jeder eingesetzte Wert liefert die Anfangsbedingung zurück.

**Typischer Fehler:** (3) $e^{-\\ln 2} = 1/2$ vergessen und $C=1$ eintragen.`,
        [
          'Anfangsbedingung $x_0$ in die allgemeine Lösung einsetzen.',
          'Nach $C$ auflösen.',
          'Bei impliziter Form auch $y^2$ beachten.',
        ],
      ),
    ],

    // ── [4] Bernoulli y' + py = q y^n: Substitution u = y^(1-n) ────────────
    4: [
      mc(
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Welche Substitution linearisiert $y\' + 2y = x y^3$?',
        [
          '$u = y^{-2}$',
          '$u = y^2$',
          '$u = y^3$',
          '$u = \\ln y$',
        ],
        0,
        `**Ansatz:** Bernoulli $y\'+py=qy^n$ mit Substitution $u = y^{1-n}$.

**Rechnung:** Hier $n=3$, also $u = y^{1-3} = y^{-2}$.

**Probe:** $u\' = -2y^{-3}y\'$. Aus der DGL $y\' = -2y + xy^3$ folgt $u\' = -2y^{-3}(-2y + xy^3) = 4y^{-2} - 2x = 4u - 2x$. Lineare DGL für $u$: $u\' - 4u = -2x$. ✓

**Typischer Fehler:** $u = y^n$ statt $u = y^{1-n}$ — genau umgekehrt.`,
        [
          'Formel: $u = y^{1-n}$.',
          'Hier $n=3$.',
          '$1-3 = -2$.',
        ],
        {
          1: 'Das wäre $u = y^{1+n}$ statt $y^{1-n}$. Vorzeichen vertauscht.',
          2: '$u = y^n = y^3$ ist nicht die Standardsubstitution. Die Ableitung $u\'=3y^2 y\'$ führt nicht zur linearen DGL in $u$.',
          3: '$u = \\ln y$ wird bei $n=1$ genutzt (separabler Grenzfall). Hier ist $n=3 \\neq 1$.',
        },
      ),
      tf(
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Die Bernoulli-DGL $y\' + p(x)y = q(x) y^n$ ist für $n = 0$ und $n = 1$ bereits linear.',
        true,
        `**Ansatz:** Für $n=0$ oder $n=1$ fehlt die nichtlineare Potenz.

**Rechnung:** $n=0$: $y\'+py=q$ — klassisch linear. $n=1$: $y\'+py=qy \\Rightarrow y\' + (p-q)y = 0$ — linear und homogen.

**Probe:** Substitution $u=y^{1-n}$ entartet: bei $n=1$ wäre $u=y^0=1$, konstant. Die Substitution macht keinen Sinn, weil nicht nötig.

**Typischer Fehler:** Bernoulli-Substitution blind bei $n=0,1$ anwenden und einen $0$-Exponenten-Fehler erzeugen.`,
        [
          'Bernoulli wird nur für $n \\neq 0, 1$ sinnvoll.',
          '$n=0$: reine lineare inhomogene DGL.',
          '$n=1$: reine lineare homogene DGL.',
        ],
      ),
      ni(
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Bei Bernoulli $y\' + p y = q y^n$ mit $n = 5$: Welchen Exponenten hat die Substitution $u = y^?$',
        -4, 0, '',
        `**Ansatz:** Formel $u = y^{1-n}$.

**Rechnung:** $1 - 5 = -4$. Also $u = y^{-4}$.

**Probe:** Ableitung: $u\' = -4 y^{-5} y\'$. Das linearisiert die DGL in $u$.

**Typischer Fehler:** Statt $1-n$ den Wert $n-1$ nehmen und $+4$ angeben.`,
        [
          '$u = y^{1-n}$.',
          '$n=5 \\Rightarrow 1-5$.',
          'Das Vorzeichen zählt.',
        ],
      ),
      sorting(
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Bringe die Lösungsschritte einer Bernoulli-DGL in die richtige Reihenfolge.',
        [
          'Bernoulli-Form identifizieren: $y\' + p(x)y = q(x) y^n$ mit $n \\neq 0, 1$',
          'Substitution $u = y^{1-n}$ wählen, $u\' = (1-n) y^{-n} y\'$',
          'Umformen zu linearer DGL für $u$: $u\' + (1-n) p(x) u = (1-n) q(x)$',
          'Lineare DGL für $u$ mit integrierendem Faktor lösen',
          'Rücksubstitution $y = u^{1/(1-n)}$',
        ],
        [0, 1, 2, 3, 4],
        `**Ansatz:** Standardalgorithmus für Bernoulli.

**Rechnung:** Identifikation → Substitution → Linearisierung → lineare Lösung → Rücksubstitution.

**Probe:** Jeder Schritt hat ein klar definiertes Ziel; Überspringen des Substitutionsschrittes macht die DGL unlösbar ohne Speziallmethoden.

**Typischer Fehler:** Rücksubstitution vergessen und die Lösung für $u$ als Endergebnis angeben.`,
        [
          'Erst Typ erkennen, dann Substitution.',
          'Lineare DGL in $u$ mit Standardmethode lösen.',
          'Am Ende zurück zu $y$.',
        ],
      ),
      mc(
        'Sub-Goal "Bernoulli $y\' + py = q y^n$: Substitution $u = y^{1-n}$ linearisiert": [PRÜFUNG] Nach Substitution $u = y^{-1}$ wird $y\' + y = y^2$ zu:',
        [
          '$u\' - u = -1$',
          '$u\' + u = -1$',
          '$u\' - u = 1$',
          '$u\' + u = 1$',
        ],
        0,
        `**Ansatz:** $u = y^{-1}$, also $u\' = -y^{-2} y\'$. DGL umformen.

**Rechnung:** Teile die DGL durch $y^2$: $y^{-2} y\' + y^{-1} = 1$. Setze $u\' = -y^{-2} y\'$, also $y^{-2} y\' = -u\'$. Damit $-u\' + u = 1 \\Rightarrow u\' - u = -1$.

**Probe:** Löse $u\' - u = -1$: $u_h = Ce^x$, $u_p = 1$. $u = 1 + Ce^x$, also $y = 1/(1 + Ce^x)$. Ableitung: $y\' = -Ce^x/(1+Ce^x)^2$. DGL-Test: $y\' + y = \\frac{-Ce^x + (1+Ce^x)}{(1+Ce^x)^2} = \\frac{1}{(1+Ce^x)^2} = y^2$ ✓.

**Typischer Fehler:** Vorzeichen bei $u\' = -y^{-2} y\'$ falsch übertragen und $u\' + u = -1$ erhalten.`,
        [
          'Teile die DGL durch $y^2$.',
          '$u\' = -y^{-2} y\'$, also Vorzeichen wechselt.',
          'Lineare DGL in $u$ aufstellen.',
        ],
        {
          1: 'Vorzeichen von $u\'$ falsch: aus $u = y^{-1}$ folgt $u\' = -y^{-2}y\'$ (Minus!), also wird $y^{-2}y\' = -u\'$ beim Einsetzen.',
          2: 'Rechte Seite falsches Vorzeichen. Nach Division durch $y^2$ steht $1$ auf der rechten Seite, und wegen des Vorzeichen-Flips in $u\'$ bleibt $-1$ am Ende.',
          3: 'Beide Vorzeichen falsch. Saubere Rechnung: $y^{-2}y\' = -u\'$, Division durch $y^2$ gibt $-u\' + u = 1$, Umstellen: $u\' - u = -1$.',
        },
      ),
    ],

    // ── [5] Integrierender Faktor bei nicht-exakter DGL ────────────────────
    5: [
      mc(
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Für eine nicht-exakte DGL $M\\,dx + N\\,dy = 0$ existiert ein integrierender Faktor $\\mu(x)$ genau dann, wenn:',
        [
          '$\\dfrac{M_y - N_x}{N}$ nur von $x$ abhängt',
          '$M_y = N_x$',
          '$\\dfrac{M_y - N_x}{M}$ nur von $y$ abhängt',
          '$M$ und $N$ stetig sind',
        ],
        0,
        `**Ansatz:** Kriterium für $\\mu(x)$ allein.

**Rechnung:** Aus $(\\mu M)_y = (\\mu N)_x$ und $\\mu = \\mu(x)$ folgt $\\mu M_y = \\mu\' N + \\mu N_x \\Rightarrow \\frac{\\mu\'}{\\mu} = \\frac{M_y - N_x}{N}$. Damit nur von $x$ abhängig, muss die rechte Seite reine $x$-Funktion sein.

**Probe:** Dann $\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}$.

**Typischer Fehler:** Den Test mit $M_y = N_x$ durchführen und bei Nicht-Exaktheit aufgeben — die DGL kann trotzdem via $\\mu$ lösbar sein.`,
        [
          'Multipliziere die DGL mit $\\mu(x)$.',
          'Exaktheitsbedingung $(\\mu M)_y = (\\mu N)_x$ liefert DGL für $\\mu$.',
          'Division durch $N$ auf beiden Seiten.',
        ],
        {
          1: '$M_y = N_x$ bedeutet, die DGL ist *schon* exakt — dann braucht man keinen integrierenden Faktor.',
          2: 'Das ist das Kriterium für $\\mu(y)$ (nur von $y$ abhängig), nicht für $\\mu(x)$.',
          3: 'Stetigkeit allein reicht nicht — Exaktheit ist eine strukturelle Eigenschaft, nicht nur Regularität.',
        },
      ),
      ni(
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Berechne den integrierenden Faktor $\\mu(x)$ der linearen DGL $y\' + \\frac{2}{x} y = x$. Welchen Wert hat $\\mu(2)$?',
        4, 0.01, '',
        `**Ansatz:** Für $y\' + p(x) y = q(x)$: $\\mu(x) = e^{\\int p\\,dx}$.

**Rechnung:** $\\int \\frac{2}{x}\\,dx = 2\\ln|x| = \\ln x^2$. Also $\\mu(x) = e^{\\ln x^2} = x^2$. Bei $x=2$: $\\mu(2) = 4$.

**Probe:** Nach Multiplikation: $x^2 y\' + 2x y = x^3$, also $(x^2 y)\' = x^3$. ✓ — linke Seite ist tatsächlich die Produktableitung.

**Typischer Fehler:** $\\int \\frac{2}{x} dx$ als $\\frac{2}{x^2}$ oder $2x$ berechnen, statt $2\\ln|x|$.`,
        [
          '$\\mu = e^{\\int p\\,dx}$.',
          '$\\int \\frac{2}{x}\\,dx = 2\\ln|x|$.',
          '$e^{2 \\ln x} = x^2$.',
        ],
      ),
      tf(
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Ein integrierender Faktor $\\mu(x,y)$ kann generell für jede nicht-exakte DGL in geschlossener Form angegeben werden.',
        false,
        `**Ansatz:** Allgemein hängt $\\mu$ von $x$ und $y$ ab und erfüllt eine partielle DGL.

**Rechnung:** Die PDE $(\\mu M)_y = (\\mu N)_x$ ist für allgemeines $\\mu(x,y)$ genauso schwer zu lösen wie die ursprüngliche DGL. Nur in Sonderfällen ($\\mu$ nur von $x$, nur von $y$, oder einem Produkt $x^a y^b$) findet man $\\mu$ in geschlossener Form.

**Probe:** Gegenbeispiel: $y\,dx - x\,dy = 0$ ist nicht exakt, $\\mu=1/x^2$ funktioniert. Aber für allgemeines nichtexaktes $M, N$ gibt es keine Universalformel.

**Typischer Fehler:** Erwarten, dass jede nicht-exakte DGL durch integrierenden Faktor handhabbar ist. In der Praxis testet man $\\mu(x)$ und $\\mu(y)$ — scheitern beide, weicht man auf andere Methoden aus.`,
        [
          'Exaktheitsbedingung für $\\mu(x,y)$ ist eine PDE.',
          'Geschlossene Form nur in Spezialfällen.',
          '$\\mu(x)$ und $\\mu(y)$ sind die Standard-Tests.',
        ],
      ),
      mc(
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Welcher integrierende Faktor $\\mu(x)$ macht $y\\,dx + (x^2 y - x)\\,dy = 0$ exakt?',
        [
          '$\\mu(x) = 1/x^2$',
          '$\\mu(x) = x$',
          '$\\mu(x) = x^2$',
          '$\\mu(x) = 1/x$',
        ],
        0,
        `**Ansatz:** $M=y$, $N=x^2 y - x$. Test $M_y=1$, $N_x=2xy-1$. Nicht exakt. Kriterium $\\frac{M_y - N_x}{N} = \\frac{1-(2xy-1)}{x^2 y - x} = \\frac{2-2xy}{x(xy-1)} = \\frac{-2(xy-1)}{x(xy-1)} = -\\frac{2}{x}$ — reine $x$-Funktion ✓.

**Rechnung:** $\\mu(x) = e^{\\int -2/x\\,dx} = e^{-2\\ln|x|} = 1/x^2$.

**Probe:** Neu: $M\\mu = y/x^2$, $N\\mu = y - 1/x$. $(M\\mu)_y = 1/x^2$, $(N\\mu)_x = 1/x^2$. ✓

**Typischer Fehler:** Vorzeichen im Integral vergessen — $e^{+2\\ln x} = x^2$ statt $1/x^2$.`,
        [
          'Teste $\\frac{M_y - N_x}{N}$.',
          'Bei reiner $x$-Abhängigkeit: $\\mu = e^{\\int \\frac{M_y-N_x}{N}\\,dx}$.',
          'Vorzeichen im Exponenten beachten.',
        ],
        {
          1: '$\\mu = x$ würde den Ansatz $\\frac{M_y-N_x}{N}=1/x$ erfordern. Hier ist der Wert aber $-2/x$.',
          2: 'Vorzeichenfehler: $e^{-2\\ln x} = 1/x^2$, nicht $x^2$. Test $\\mu=x^2$: $(y x^2)_y = x^2$, $((x^2 y - x) x^2)_x = (x^4 y - x^3)_x = 4x^3 y - 3x^2$ — nicht gleich.',
          3: '$\\mu=1/x$: $(y/x)_y = 1/x$, $((x^2y-x)/x)_x = (xy-1)_x = y$ — nicht gleich.',
        },
      ),
      matching(
        'Sub-Goal "Integrierender Faktor bei nicht-exakter DGL: $\\mu(x)$ oder $\\mu(y)$ finden": [PRÜFUNG] Ordne dem Ausdruck den passenden integrierenden Faktor zu.',
        [
          { left: '$\\frac{M_y - N_x}{N}$ hängt nur von $x$ ab', right: '$\\mu(x) = e^{\\int \\frac{M_y-N_x}{N}\\,dx}$' },
          { left: '$\\frac{N_x - M_y}{M}$ hängt nur von $y$ ab', right: '$\\mu(y) = e^{\\int \\frac{N_x-M_y}{M}\\,dy}$' },
          { left: 'Lineare DGL $y\' + p(x) y = q(x)$', right: '$\\mu(x) = e^{\\int p(x)\\,dx}$' },
          { left: '$M_y = N_x$ bereits erfüllt', right: 'kein integrierender Faktor nötig ($\\mu = 1$)' },
        ],
        `**Ansatz:** Für jeden Fall gibt es eine Formel.

**Rechnung:** Die ersten beiden sind die klassischen Kriterien, der dritte Fall ist der wichtigste Sonderfall (lineare DGL), der vierte trivial.

**Probe:** Die Formeln folgen alle aus $(\\mu M)_y = (\\mu N)_x$ unter der jeweiligen Annahme.

**Typischer Fehler:** Vorzeichen verwechseln — bei $\\mu(y)$ steht $N_x - M_y$ im Zähler, nicht $M_y - N_x$.`,
        [
          'Welche Variable ist $\\mu$ abhängig?',
          'Vorzeichen im Zähler unterscheidet $\\mu(x)$ und $\\mu(y)$.',
          'Lineare DGL ist Sonderfall.',
        ],
      ),
    ],
  },

}
