// ── Differentialgleichungen Unit 2: Fortgeschrittene Methoden ────────────────

export const exercises_dgl_u2 = {
  'ex-dgl-2-1-a': {
    id: 'ex-dgl-2-1-a', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Bei der Variation der Konstanten ersetzt man die Konstante $C$ in der homogenen Lösung durch:',
    options: [
      'Eine andere Konstante $D$',
      'Eine Funktion $C(x)$',
      'Den Wert 0',
      'Die Störfunktion $q(x)$',
    ],
    correctIndex: 1,
    explanation: 'Die Idee: Man nimmt die homogene Lösung $y_h = Ce^{...}$ und ersetzt die Konstante $C$ durch eine **Funktion** $C(x)$. Dann bestimmt man $C(x)$ so, dass die inhomogene DGL erfüllt wird.',
    hints: [
      'Was bedeutet "Variation der Konstanten" wörtlich?',
      'Die Konstante $C$ wird "variiert" — sie wird zur Funktion $C(x)$.',
      'Dann bestimmt man $C(x)$ aus der inhomogenen DGL.',
    ],
    wrongAnswerExplanations: {
      0: 'Nur die Konstante umzubenennen ($C \\to D$) ändert nichts an der Lösung — sie bleibt ein Vielfaches der homogenen Lösung und erfüllt die *inhomogene* DGL nicht. Die Idee der Methode ist gerade, $C$ von einer Konstanten zu einer *Funktion* $C(x)$ zu machen.',
      2: 'Mit $C=0$ verschwindet die homogene Lösung komplett — dann hast du $y\\equiv 0$, und das löst nur den homogenen Fall, nicht $y\'+py=q$. Der Name „Variation" kommt von „variieren", nicht „streichen".',
      3: 'Die Störfunktion $q(x)$ steht auf der rechten Seite der DGL — sie ist *Input*, keine Lösung. $q(x)$ als Ansatz statt $C(x) \\cdot e^{-P(x)}$ erfüllt die DGL im Allgemeinen nicht. Richtig: $C$ wird zu einer unbekannten Funktion $C(x)$, die man anschließend bestimmt.',
    },
  },
  'ex-dgl-2-1-b': {
    id: 'ex-dgl-2-1-b', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Für $y\' + p(x)y = q(x)$ mit homogener Lösung $y_h = Ce^{-P(x)}$ (wobei $P(x) = \\int p(x)\\,dx$) ergibt der Ansatz $y = C(x) \\cdot e^{-P(x)}$ die Bedingung:',
    options: [
      '$C\'(x) = q(x) \\cdot e^{P(x)}$',
      '$C\'(x) = q(x) \\cdot e^{-P(x)}$',
      '$C\'(x) = p(x) \\cdot q(x)$',
      '$C(x) = \\int q(x)\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'Einsetzen von $y = C(x) e^{-P(x)}$ in die DGL und Vereinfachen ergibt $C\'(x) = q(x) \\cdot e^{P(x)}$. Integration liefert $C(x) = \\int q(x) e^{P(x)}\\,dx$.',
    hints: [
      'Setze den Ansatz $y = C(x) e^{-P(x)}$ in die DGL ein.',
      'Produktregel: $y\' = C\'(x) e^{-P(x)} - C(x) p(x) e^{-P(x)}$.',
      'Nach Einsetzen heben sich die Terme mit $C(x)$ weg, übrig bleibt $C\'(x) e^{-P(x)} = q(x)$.',
    ],
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler im Exponenten: aus $C\'(x) \\cdot e^{-P(x)} = q(x)$ folgt durch Umstellen $C\'(x) = q(x) \\cdot e^{+P(x)}$ — du musst mit $e^{+P(x)}$ *multiplizieren*, um $e^{-P(x)}$ zu eliminieren. Nicht $e^{-P(x)}$.',
      2: 'Der Koeffizient $p(x)$ taucht nicht direkt als Faktor auf — er versteckt sich bereits im Exponenten $P(x)=\\int p\\,dx$. Das Produkt $p \\cdot q$ ist algebraisch unmotiviert; korrekt ist $C\' = q \\cdot e^{+P}$.',
      3: 'Das überspringt einen Schritt: $C(x) = \\int q(x)\\,dx$ vergisst den Faktor $e^{P(x)}$. Die richtige Integration lautet $C(x) = \\int q(x) \\cdot e^{P(x)}\\,dx$ — ohne den integrierenden Faktor $e^{P(x)}$ erfüllt $y$ die DGL nicht.',
    },
  },
  'ex-dgl-2-1-c': {
    id: 'ex-dgl-2-1-c', lessonId: 'dgl-2-1', type: 'multiple-choice',
    question: 'Löse mit Variation der Konstanten: $y\' - y = e^{2x}$.',
    options: [
      '$y = Ce^x + e^{2x}$',
      '$y = Ce^x + \\frac{1}{2}e^{2x}$',
      '$y = Ce^{-x} + e^{2x}$',
      '$y = Ce^x + 2e^{2x}$',
    ],
    correctIndex: 0,
    explanation: 'Homogene Lösung: $y_h = Ce^x$. Ansatz: $y = C(x)e^x$. Einsetzen: $C\'(x)e^x = e^{2x} \\Rightarrow C\'(x) = e^x \\Rightarrow C(x) = e^x + \\tilde{C}$. Also $y = (\\tilde{C} + e^x)e^x = \\tilde{C}e^x + e^{2x}$.',
    hints: [
      'Erst homogene Lösung: $y_h = Ce^x$ aus $y\' - y = 0$.',
      'Ansatz $y = C(x) e^x$, einsetzen: $C\'(x) e^x = e^{2x}$, also $C\'(x) = e^x$.',
      'Integrieren: $C(x) = e^x + \\tilde C$, also $y = e^{2x} + \\tilde C \\, e^x$.',
    ],
    wrongAnswerExplanations: {
      1: 'Beim Ansatz $y_p = A e^{2x}$: $y_p\' - y_p = 2Ae^{2x} - Ae^{2x} = Ae^{2x} = e^{2x} \\Rightarrow A=1$, nicht $\\frac{1}{2}$. Der Faktor $\\frac{1}{2}$ stammt vermutlich aus einer Verwechslung mit $y\'+y=e^{2x}$ (dort wäre $A=\\frac{1}{3}$) oder $y\'-y=e^{-x}$.',
      2: 'Vorzeichen in der homogenen Lösung: $y\'-y=0$ bedeutet $y\'=+y$, also $y_h=Ce^{+x}$ (nicht $e^{-x}$). Test: $y=e^{-x} \\Rightarrow y\'=-e^{-x}$, aber die DGL verlangt $y\'-y=-2e^{-x} \\neq 0$.',
      3: 'Der Vorfaktor bei der Partikulärlösung stimmt nicht. Einsetzen $y_p = 2e^{2x}$: $y_p\' - y_p = 4e^{2x} - 2e^{2x} = 2e^{2x} \\neq e^{2x}$. Der richtige Vorfaktor ist $1$ (aus $A(\\lambda - 1) = 1$ mit $\\lambda=2$: $A=1$).',
    },
  },
  'ex-dgl-2-1-mastery': {
    id: 'ex-dgl-2-1-mastery', lessonId: 'dgl-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $y\' + y = \\sin(x)$. Die partikuläre Lösung (ohne homogenen Anteil) ist:',
    options: [
      '$y_p = \\frac{1}{2}(\\sin x - \\cos x)$',
      '$y_p = \\sin x + \\cos x$',
      '$y_p = -\\cos x$',
      '$y_p = \\frac{1}{2}(\\sin x + \\cos x)$',
    ],
    correctIndex: 0,
    explanation: 'Mit Variation der Konstanten oder dem Ansatz $y_p = A\\sin x + B\\cos x$: Einsetzen ergibt $A = \\frac{1}{2}$, $B = -\\frac{1}{2}$. Also $y_p = \\frac{1}{2}(\\sin x - \\cos x)$.',
    hints: [
      'Bei trigonometrischer Störfunktion: Ansatz $y_p = A \\sin x + B \\cos x$.',
      'Einsetzen in $y\' + y = \\sin x$ liefert $A \\cos x - B \\sin x + A \\sin x + B \\cos x = \\sin x$.',
      'Koeffizientenvergleich: $A - B = 0$ (für $\\sin$) und $A + B = 1$ (für $\\cos$? — sortiert nach $\\sin$/$\\cos$): $A = 1/2$, $B = -1/2$.',
    ],
    wrongAnswerExplanations: {
      1: 'Vorfaktor $\\tfrac{1}{2}$ vergessen. Ansatz $y_p = A\\sin x + B\\cos x$: $y_p\' + y_p = (A+B)\\cos x + (A-B)\\sin x = \\sin x$. Also $A+B=0$, $A-B=1$: $A=\\tfrac{1}{2}$, $B=-\\tfrac{1}{2}$. Ohne Faktor $\\tfrac{1}{2}$ gäbe das $2\\sin x$, nicht $\\sin x$.',
      2: 'Hier fehlt der $\\sin x$-Anteil. Der Ansatz braucht *beide* trigonometrischen Funktionen, weil $y\'$ aus $\\cos x$ ein $\\sin x$ erzeugt und umgekehrt. Einsetzen von $y_p=-\\cos x$: $y_p\'+y_p = \\sin x - \\cos x \\neq \\sin x$.',
      3: 'Das Vorzeichen bei $\\cos x$ ist falsch. Aus $A+B=0$ folgt $B=-A$, nicht $B=+A$. Einsetzen von $\\tfrac{1}{2}(\\sin x + \\cos x)$: $y_p\' + y_p = \\tfrac{1}{2}(\\cos x - \\sin x) + \\tfrac{1}{2}(\\sin x + \\cos x) = \\cos x \\neq \\sin x$.',
    },
  },

  'ex-dgl-2-2-a': {
    id: 'ex-dgl-2-2-a', lessonId: 'dgl-2-2', type: 'multiple-choice',
    question: 'Ein DGL-System 1. Ordnung hat die Form $\\vec{y}\' = A \\cdot \\vec{y}$. Was ist $A$?',
    options: [
      'Ein Skalar',
      'Ein Vektor',
      'Eine Matrix',
      'Eine DGL',
    ],
    correctIndex: 2,
    explanation: `**Ansatz:** Beide Seiten der Gleichung $\\vec y\\,' = A \\vec y$ müssen Vektoren derselben Dimension sein. Links steht $\\vec y\\,'$ (ein Vektor), also muss $A \\vec y$ auch ein Vektor sein.

**Rechnung:** Bildet $A$ einen Vektor $\\vec y \\in \\mathbb R^n$ linear auf einen Vektor gleicher Dimension ab, so ist $A$ per Definition eine **quadratische $n\\times n$-Matrix**. Sie enthält die Koeffizienten, die die $n$ skalaren DGL $y_i' = \\sum_j a_{ij} y_j$ miteinander verkoppeln.

**Probe:** Beispiel $\\vec y = (y_1, y_2)^T$, $A = \\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix}$ → $A \\vec y = (y_2, -2y_1 - 3y_2)^T$ — ein Vektor, wie gefordert.

**Typischer Fehler:** "$A$ ist doch irgendwas mit Zahlen" — aber ein Skalar würde $\\vec y$ nur skalieren (und die Komponenten blieben entkoppelt), ein Vektor würde per Skalarprodukt einen Skalar liefern. Nur eine **Matrix** bildet Vektor → Vektor ab.`,
    hints: [
      'Was steht links vom Gleichheitszeichen? Was muss rechts dieselbe Form haben?',
      '$\\vec y$ und $\\vec y\'$ sind Vektoren. Für $A \\vec y$ muss $A$ eine Matrix sein.',
      'Konkret: bei $n$ Komponenten ist $A$ eine $n \\times n$-Matrix.',
    ],
    wrongAnswerExplanations: {
      0: 'Ein Skalar würde $\\vec y$ nur gleichmäßig skalieren — dann sind die Komponenten von $\\vec y$ entkoppelt, und das wäre gar kein echtes System. Um *mehrere* DGL miteinander zu verknüpfen, muss $A$ einen Vektor auf einen Vektor abbilden: das leistet nur eine Matrix.',
      1: 'Ein Produkt $\\vec a \\cdot \\vec y$ wäre ein Skalar (Skalarprodukt) — die rechte Seite hätte dann nicht dieselbe Form wie $\\vec y\'$ (ein Vektor). Damit Links- und Rechtsseite kompatibel sind, muss $A$ Vektor $\\to$ Vektor abbilden, also eine Matrix sein.',
      3: 'Die Matrix $A$ *definiert* das System, sie ist nicht selbst eine DGL. Sie enthält die Koeffizienten, mit denen die Komponenten $y_1, y_2, \\ldots$ miteinander verknüpft sind — die DGL ist das Gesamtkonstrukt $\\vec y\' = A \\vec y$.',
    },
  },
  'ex-dgl-2-2-b': {
    id: 'ex-dgl-2-2-b', lessonId: 'dgl-2-2', type: 'true-false',
    statement: 'Jede DGL höherer Ordnung lässt sich in ein System von DGL 1. Ordnung umschreiben.',
    correct: true,
    explanation: `**Ansatz:** Für eine DGL $n$-ter Ordnung $y^{(n)} = f(x, y, y', \\ldots, y^{(n-1)})$ führe für *jede* Ableitung eine neue Variable ein: $y_1 = y$, $y_2 = y'$, ..., $y_n = y^{(n-1)}$.

**Rechnung:** Automatisch gilt $y_1' = y_2$, $y_2' = y_3$, ..., $y_{n-1}' = y_n$. Nur die letzte Gleichung $y_n' = y^{(n)}$ bekommt die ursprüngliche DGL, umgestellt nach der höchsten Ableitung. Beispiel $y'' + 3y' + 2y = 0$: mit $y_1 = y$, $y_2 = y'$ wird daraus $y_1' = y_2$ und $y_2' = -3y_2 - 2y_1$.

**Probe:** Aus $y_1' = y_2$ und $y_2' = -3y_2 - 2y_1$ folgt $y_1'' = y_2' = -3y_2 - 2y_1 = -3y_1' - 2y_1$, also $y_1'' + 3y_1' + 2y_1 = 0$ ✓ — die ursprüngliche DGL.

**Typischer Fehler:** Man vergisst, dass nicht nur $y'' = \\ldots$ aufgelöst werden muss, sondern auch die *Kopplung* $y_1' = y_2$ dazugehört. Beide Gleichungen zusammen bilden das System — eine allein reicht nicht.`,
    hints: [
      'Trick: führe für jede Ableitung eine neue Variable ein.',
      'Beispiel: $y_1 = y$, $y_2 = y\'$, $y_3 = y\'\'$, ...',
      'Dann ist $y_1\' = y_2$, $y_2\' = y_3$ usw. — ein System 1. Ordnung.',
    ],
  },
  'ex-dgl-2-2-mastery': {
    id: 'ex-dgl-2-2-mastery', lessonId: 'dgl-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Die DGL $y\'\' + 5y\' + 6y = 0$ wird als System geschrieben mit $y_1 = y$, $y_2 = y\'$. Wie lautet $y_2\'$?',
    options: [
      '$y_2\' = -5y_1 - 6y_2$',
      '$y_2\' = -6y_1 - 5y_2$',
      '$y_2\' = 5y_1 + 6y_2$',
      '$y_2\' = y_1 + y_2$',
    ],
    correctIndex: 1,
    explanation: `**Ansatz:** Substituiere $y_1 = y$, $y_2 = y'$. Dann ist automatisch $y_1' = y_2$. Die zweite Systemgleichung $y_2' = y''$ bekommt den umgestellten Inhalt der ursprünglichen DGL.

**Rechnung:** Aus $y'' + 5y' + 6y = 0$ folgt $y'' = -5y' - 6y$. Einsetzen der Substitution ($y \\to y_1$, $y' \\to y_2$, $y'' \\to y_2'$): $y_2' = -5 y_2 - 6 y_1$. Umsortiert nach $y_1, y_2$: $\\boxed{y_2' = -6 y_1 - 5 y_2}$.

**Probe:** In Matrixform $\\vec y\\,' = \\begin{pmatrix} 0 & 1 \\\\ -6 & -5 \\end{pmatrix} \\vec y$. Charakteristisches Polynom: $\\lambda^2 + 5\\lambda + 6 = 0$ mit $\\lambda_1 = -2$, $\\lambda_2 = -3$ — identisch zur ursprünglichen DGL ✓.

**Typischer Fehler:** Die Koeffizienten $5$ und $6$ werden falsch zugeordnet. Merkregel: $5$ steht in der DGL vor $y'$ (= $y_2$), also Koeffizient von $y_2$ im System. $6$ steht vor $y$ (= $y_1$), also Koeffizient von $y_1$. Und: **Vorzeichen wechseln** beim Umstellen nach $y''$.`,
    hints: [
      'Löse zuerst die ursprüngliche DGL nach $y\'\'$ auf.',
      '$y\'\' = -5y\' - 6y$. Ersetze nun $y \\to y_1$ und $y\' \\to y_2$.',
      'Da $y_2\' = y\'\'$, folgt $y_2\' = -5 y_2 - 6 y_1$, also $y_2\' = -6 y_1 - 5 y_2$.',
    ],
    wrongAnswerExplanations: {
      0: 'Koeffizienten vertauscht: $5$ gehört zu $y\' = y_2$, $6$ zu $y=y_1$. Aus $y\'\'=-5y\'-6y$ wird durch Einsetzen $y_2\' = -5 y_2 - 6 y_1$, also Koeffizient $-6$ vor $y_1$, nicht $-5$.',
      2: 'Vorzeichen falsch. $y\'\'+5y\'+6y=0$ umgestellt ergibt $y\'\'=-5y\'-6y$ — die Vorzeichen wechseln beim Umstellen. $+5y\'+6y$ statt $-5y\'-6y$ würde die DGL $y\'\'-5y\'-6y=0$ lösen.',
      3: 'Hier wurden die DGL-Koeffizienten ignoriert und einfach Einsen eingesetzt. Aus $y\'\'+5y\'+6y=0$ folgt $y\'\'=-5y\'-6y$, also $y_2\'=-6y_1-5y_2$ mit konkreten Koeffizienten, keine $+1$.',
    },
  },

  'ex-dgl-2-3-a': {
    id: 'ex-dgl-2-3-a', lessonId: 'dgl-2-3', type: 'multiple-choice',
    question: 'Die Schwingungsgleichung eines Feder-Masse-Dämpfer-Systems lautet:',
    options: [
      '$mx\' + cx + k = F$',
      '$mx\'\' + cx\' + kx = F(t)$',
      '$mx\'\' = F(t)$',
      '$mx\' + kx\' = F(t)$',
    ],
    correctIndex: 1,
    explanation: '$m\\ddot{x} + c\\dot{x} + kx = F(t)$: $m$ = Masse, $c$ = Dämpfungskonstante, $k$ = Federkonstante, $F(t)$ = äußere Kraft. Trägheit + Dämpfung + Federkraft = äußere Kraft.',
    hints: [
      'Welche Kräfte wirken auf die Masse?',
      'Federkraft $\\sim x$ (Hooke), Dämpfungskraft $\\sim \\dot x$ (proportional zur Geschwindigkeit).',
      'Newton: $m \\ddot x = -k x - c \\dot x + F(t)$, also $m \\ddot x + c \\dot x + k x = F(t)$.',
    ],
    wrongAnswerExplanations: {
      0: 'Hier fehlt die Beschleunigung $x\'\'$ — Newtons zweites Gesetz verlangt $F = m \\cdot a = m \\ddot x$, nicht $m\\dot x$. Zudem darf $k$ nicht als konstanter Term isoliert stehen; die Federkraft ist $k \\cdot x$ (proportional zur Auslenkung).',
      2: 'Ohne Feder- und Dämpfungsterm ist das nur die Bewegungsgleichung einer freien Masse unter äußerer Kraft. Ein Feder-Masse-Dämpfer-System braucht *alle drei* Kraftanteile: Trägheit ($m\\ddot x$), Dämpfung ($c\\dot x$) und Federkraft ($kx$).',
      3: 'Hier stehen zwei Terme mit $\\dot x$ und kein $\\ddot x$ oder $x$. Trägheitskraft ist aber $m\\ddot x$ (zweite Ableitung), Federkraft $kx$ (keine Ableitung). Zwei Terme mit derselben Ableitungsordnung lassen sich sowieso zusammenfassen.',
    },
  },
  'ex-dgl-2-3-b': {
    id: 'ex-dgl-2-3-b', lessonId: 'dgl-2-3', type: 'matching',
    question: 'Ordne die physikalischen Größen den mathematischen Termen in $mx\'\' + cx\' + kx = F(t)$ zu:',
    pairs: [
      { left: 'Trägheitskraft', right: '$mx\'\'$' },
      { left: 'Dämpfungskraft', right: '$cx\'$' },
      { left: 'Federkraft (Rückstellkraft)', right: '$kx$' },
      { left: 'Äußere Anregung', right: '$F(t)$' },
    ],
    explanation: '$mx\'\'$ ist die Trägheitskraft (Newton: $F = ma$), $cx\'$ die geschwindigkeitsproportionale Dämpfung, $kx$ die Federkraft (Hooke: $F = kx$), und $F(t)$ die äußere Kraft.',
    hints: [
      'Welcher Term enthält welche Ableitung von $x$?',
      'Newton: $F = m a$, also Trägheit $= m \\cdot x\'\'$ (zweite Ableitung = Beschleunigung).',
      'Dämpfung wirkt gegen die Bewegung, proportional zur Geschwindigkeit $x\'$. Federkraft proportional zur Auslenkung $x$.',
    ],
  },
  'ex-dgl-2-3-c': {
    id: 'ex-dgl-2-3-c', lessonId: 'dgl-2-3', type: 'multiple-choice',
    question: 'Ein RC-Glied (Widerstand $R$, Kapazität $C$, Spannung $u_C$) wird durch welche DGL beschrieben?',
    options: [
      '$RC \\cdot u_C\' + u_C = U_0$',
      '$RC \\cdot u_C\'\' + u_C = U_0$',
      '$R \\cdot u_C\' + C \\cdot u_C = U_0$',
      '$u_C\' = RC \\cdot U_0$',
    ],
    correctIndex: 0,
    explanation: 'Die DGL des RC-Glieds ist $RC \\cdot \\dot{u}_C + u_C = U_0$ (lineare DGL 1. Ordnung). Die Zeitkonstante ist $\\tau = RC$. Lösung: $u_C(t) = U_0(1 - e^{-t/(RC)})$ für Aufladung.',
    hints: [
      'Welche Maschenregel gilt für $R$ und $C$ in Reihe?',
      'Kirchhoff: $u_R + u_C = U_0$. Strom $i = C \\cdot \\dot u_C$ (Kondensator-Gleichung).',
      'Einsetzen: $R \\cdot C \\cdot \\dot u_C + u_C = U_0$ — das ist die DGL des RC-Glieds.',
    ],
    wrongAnswerExplanations: {
      1: 'Ein RC-Glied hat *keine* Spule — nur Widerstand und Kondensator. $u_C\'\'$ (zweite Ableitung) tritt erst bei RLC-Gliedern auf. Hier gilt Kirchhoff mit $i=C \\dot u_C$, was eine DGL *erster* Ordnung liefert: $RC \\dot u_C + u_C = U_0$.',
      2: 'Einheitenanalyse entlarvt den Fehler: $R$ und $C$ dürfen nicht getrennt als Koeffizienten von $\\dot u_C$ und $u_C$ stehen — $R \\cdot C$ hat die Einheit Zeit (Sekunden, die Zeitkonstante $\\tau$), während $R$ allein Ohm und $C$ allein Farad hat. Aus $Ri + u_C = U_0$ mit $i = C\\dot u_C$ folgt $RC \\dot u_C + u_C = U_0$.',
      3: 'Die Form ist grob falsch — $u_C\'$ müsste proportional zu $U_0 - u_C$ sein, nicht proportional zu $RC \\cdot U_0$ konstant. Die DGL muss $u_C$ auf *beiden* Seiten enthalten (implizit über $u_C\'$ und explizit als $u_C$), sonst wird $u_C$ gar nicht durch die Gleichung festgelegt.',
    },
  },
  'ex-dgl-2-3-mastery': {
    id: 'ex-dgl-2-3-mastery', lessonId: 'dgl-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Ein ungedämpftes Feder-Masse-System ($c = 0$): $m x\'\' + kx = 0$ mit $m = 2$ kg, $k = 8$ N/m. Die Eigenkreisfrequenz $\\omega_0$ ist:',
    options: [
      '$\\omega_0 = 4$ rad/s',
      '$\\omega_0 = 2$ rad/s',
      '$\\omega_0 = \\sqrt{2}$ rad/s',
      '$\\omega_0 = 16$ rad/s',
    ],
    correctIndex: 1,
    explanation: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{8/2} = \\sqrt{4} = 2$ rad/s. Die Lösung ist $x(t) = A\\cos(2t) + B\\sin(2t)$.',
    hints: [
      'Welche Formel gilt für die Eigenkreisfrequenz?',
      '$\\omega_0 = \\sqrt{k / m}$ — kommt aus dem charakteristischen Polynom.',
      'Hier $k = 8$ N/m, $m = 2$ kg → $\\omega_0 = \\sqrt{4} = 2$ rad/s.',
    ],
    wrongAnswerExplanations: {
      0: 'Vermutlich wurde $k/m$ mit $k \\cdot m / (\\text{etwas})$ verwechselt oder ohne Wurzel gerechnet und noch halbiert. $\\omega_0 = \\sqrt{8/2} = \\sqrt{4} = 2$, nicht $4$. Die Eigenkreisfrequenz hat immer eine Wurzel — aus dem charakteristischen Polynom $m\\lambda^2 + k = 0 \\Rightarrow \\lambda^2 = -k/m$.',
      2: '$k \\cdot m$ statt $k / m$ berechnet: $\\sqrt{8 \\cdot 2} = \\sqrt{16}$ ... nein, $\\sqrt{2}$ entspricht $\\sqrt{k-m}=\\sqrt{8-2}$ oder $\\sqrt{m}$. Die richtige Formel ist $\\omega_0=\\sqrt{k/m}=\\sqrt{4}=2$, nicht $\\sqrt 2$.',
      3: 'Hier fehlt die Wurzel: $k/m = 4$, aber $\\omega_0$ ist die *Wurzel* daraus, also $2$ (nicht $16$). Der Wert $16$ entspräche $(k/m)^2$. Die Formel $\\omega_0=\\sqrt{k/m}$ ergibt sich aus dem Ansatz $x=e^{i\\omega t}$ in $m\\ddot x+kx=0$: $-m\\omega^2+k=0 \\Rightarrow \\omega=\\sqrt{k/m}$.',
    },
  },
}

const lessons_dgl_u2 = [
  {
    id: 'dgl-2-1', unitId: 'dgl-unit-2',
    title: 'Variation der Konstanten',
    order: 1, estimatedMinutes: 18,
    learningGoals: ['Methode der Variation der Konstanten verstehen', 'Partikuläre Lösung für inhomogene DGL bestimmen'],
    subGoals: [
      { label: 'Ansatz: homogene Lösung $y_h = C e^{-P(x)}$, dann $C$ durch $C(x)$ ersetzen', examRelevance: 'hoch' },
      { label: 'Einsetzen liefert $C\'(x) = q(x) e^{P(x)}$ (nur eine Integration)', examRelevance: 'hoch' },
      { label: 'Allgemeine Lösung = homogener + partikulärer Anteil', examRelevance: 'hoch' },
      { label: 'Partikulärer Ansatz (Störansatz): bei Polynom/Exp/Trig-Störung direkte Vermutung', examRelevance: 'hoch' },
      { label: 'Resonanz-Fall: wenn Störung Lösung der homogenen DGL ist → Ansatz $\\times x$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'dgl-2-2',
    steps: [
      {
        id: 'dgl-2-1-s1', type: 'explanation-intuitive', title: 'Die Idee',
        content: `Du kennst schon die homogene Lösung, z.B. $y_h = Ce^{-P(x)}$. Aber was, wenn die DGL eine **Störfunktion** $q(x)$ hat?

$$y' + p(x)y = q(x)$$

**Trick:** Nimm die homogene Lösung und ersetze die Konstante $C$ durch eine **unbekannte Funktion** $C(x)$:

$$y = C(x) \\cdot e^{-P(x)}$$

Dann setze diesen Ansatz in die DGL ein und bestimme $C(x)$.

**Warum funktioniert das?** Die homogene Lösung "weiß" schon, wie sich das System ohne Störung verhält. Durch die Variable Konstante $C(x)$ passt sich die Lösung an die Störung an — wie ein Auto, das seinen Kurs anpasst, wenn Seitenwind kommt.`,
      },
      {
        id: 'dgl-2-1-s2', type: 'explanation-formal', title: 'Rezept',
        content: `**Gegeben:** $y' + p(x)y = q(x)$

**Schritt 1:** Homogene Lösung: $y_h = Ce^{-P(x)}$ mit $P(x) = \\int p(x)\\,dx$

**Schritt 2:** Ansatz: $y = C(x) \\cdot e^{-P(x)}$

**Schritt 3:** Einsetzen: $C'(x) \\cdot e^{-P(x)} = q(x)$, also:
$$C'(x) = q(x) \\cdot e^{P(x)}$$

**Schritt 4:** Integrieren:
$$C(x) = \\int q(x) \\cdot e^{P(x)}\\,dx + \\tilde{C}$$

**Schritt 5:** Einsetzen in den Ansatz:
$$y = \\left(\\int q(x) e^{P(x)}\\,dx + \\tilde{C}\\right) \\cdot e^{-P(x)}$$

Das liefert die **allgemeine Lösung** (homogener + partikulärer Anteil).

**Vorteil** gegenüber dem integrierenden Faktor: Funktioniert auch für DGL 2. Ordnung (mit der Wronski-Determinante) und für DGL-Systeme.`,
      },
      { id: 'dgl-2-1-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-1-a' },
      { id: 'dgl-2-1-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-2-1-b' },
      { id: 'dgl-2-1-s5', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-2-1-c' },
      { id: 'dgl-2-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-2-1-mastery' },
    ],
  },
  {
    id: 'dgl-2-2', unitId: 'dgl-unit-2',
    title: 'DGL-Systeme',
    order: 2, estimatedMinutes: 15,
    learningGoals: ['DGL-Systeme in Matrixform schreiben', 'DGL höherer Ordnung als System umschreiben'],
    subGoals: [
      { label: 'Matrixform: $\\vec y\' = A \\vec y$ mit Vektor $\\vec y$ und Koeffizientenmatrix $A$', examRelevance: 'hoch' },
      { label: 'Reduktion höherer Ordnung: $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$', examRelevance: 'hoch' },
      { label: 'Eigenwertansatz: $\\vec y = \\vec v e^{\\lambda t}$ → $A \\vec v = \\lambda \\vec v$', examRelevance: 'hoch' },
      { label: 'Allgemeine Lösung: $\\vec y = \\sum C_i \\vec v_i e^{\\lambda_i t}$', examRelevance: 'hoch' },
      { label: 'Stabilität: alle $\\text{Re}(\\lambda_i) < 0$ → asymptotisch stabil', examRelevance: 'hoch' },
      { label: 'Komplexe EW: Paare $\\alpha \\pm i\\beta$ → Real-/Imaginärteil nehmen für reelle Lösung', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'dgl-2-3',
    steps: [
      {
        id: 'dgl-2-2-s1', type: 'explanation-intuitive', title: 'Mehrere DGL gleichzeitig',
        content: `In der Praxis treten oft **mehrere Größen gleichzeitig** auf, die sich gegenseitig beeinflussen:

- **Räuber-Beute-Modell:** Anzahl der Hasen beeinflusst die Anzahl der Füchse und umgekehrt
- **Gekoppelte Schwingungen:** Zwei Massen, die über Federn verbunden sind
- **Elektrische Netzwerke:** Ströme und Spannungen in verschiedenen Maschen

Mathematisch: Ein System von DGL der Form:

$$\\vec{y}' = A \\cdot \\vec{y}$$

wobei $\\vec{y} = \\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix}$ ein Vektor und $A$ eine Matrix ist.

**Wichtig:** Jede DGL höherer Ordnung lässt sich als System 1. Ordnung schreiben! Zum Beispiel wird aus $y'' + 3y' + 2y = 0$:

$$y_1 = y, \\quad y_2 = y'$$
$$y_1' = y_2$$
$$y_2' = -2y_1 - 3y_2$$`,
      },
      {
        id: 'dgl-2-2-s2', type: 'explanation-formal', title: 'Lösung über Eigenwerte',
        content: `**System:** $\\vec{y}' = A \\vec{y}$

**Lösungsansatz:** $\\vec{y} = \\vec{v} \\cdot e^{\\lambda t}$

Einsetzen ergibt das **Eigenwertproblem:**
$$A \\vec{v} = \\lambda \\vec{v}$$

Man bestimmt:
1. **Eigenwerte** $\\lambda_1, \\lambda_2, \\ldots$ aus $\\det(A - \\lambda I) = 0$
2. **Eigenvektoren** $\\vec{v}_1, \\vec{v}_2, \\ldots$
3. **Allgemeine Lösung:** $\\vec{y} = C_1 \\vec{v}_1 e^{\\lambda_1 t} + C_2 \\vec{v}_2 e^{\\lambda_2 t} + \\ldots$

**Beispiel:**
$$A = \\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix}$$
$\\det(A - \\lambda I) = \\lambda^2 + 3\\lambda + 2 = (\\lambda + 1)(\\lambda + 2) = 0$
$\\lambda_1 = -1$, $\\lambda_2 = -2$ — beide negativ, also stabiles System (alles klingt ab).`,
      },
      {
        id: 'dgl-2-2-s2b', type: 'visualization', title: 'Eigenwerte & Stabilität im Bild',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.exp(-1 * x), color: '#10b981', label: 'λ = -1 (stabil, klingt ab)' },
            { fn: (x) => Math.exp(-2 * x), color: '#3b82f6', label: 'λ = -2 (stabil, klingt schneller ab)' },
            { fn: (x) => Math.exp(0.3 * x), color: '#ef4444', label: 'λ = +0.3 (instabil, wächst)' },
          ],
          xRange: [0, 5],
          yRange: [-0.5, 4.5],
          showGrid: true,
        },
      },
      { id: 'dgl-2-2-s3', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-2-a' },
      { id: 'dgl-2-2-s4', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-dgl-2-2-b' },
      { id: 'dgl-2-2-s5', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-dgl-2-2-mastery' },
    ],
  },
  {
    id: 'dgl-2-3', unitId: 'dgl-unit-2',
    title: 'Technische Anwendungen',
    order: 3, estimatedMinutes: 20,
    learningGoals: ['Feder-Masse-Dämpfer-System modellieren', 'RC-Glied als DGL beschreiben', 'Eigenfrequenz berechnen'],
    subGoals: [
      { label: 'Feder-Masse-Dämpfer: $m\\ddot x + c\\dot x + kx = F(t)$', examRelevance: 'hoch' },
      { label: 'Eigenkreisfrequenz $\\omega_0 = \\sqrt{k/m}$, Dämpfungsgrad $D = c/(2\\sqrt{km})$', examRelevance: 'hoch' },
      { label: 'Schwingfall $D<1$: gedämpfte Schwingung mit $\\omega_d = \\omega_0 \\sqrt{1-D^2}$', examRelevance: 'hoch' },
      { label: 'Aperiodischer Grenzfall $D=1$: schnellstes Abklingen ohne Schwingung', examRelevance: 'hoch' },
      { label: 'RC-Glied: $RC \\dot u + u = U_0$, Zeitkonstante $\\tau = RC$, $u(t) = U_0(1-e^{-t/\\tau})$', examRelevance: 'hoch' },
      { label: 'Resonanz bei erzwungener Schwingung: max. Amplitude bei $\\omega \\approx \\omega_0$', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'dgl-2-3-s1', type: 'explanation-intuitive', title: 'DGL in der Technik',
        content: `DGL sind das **wichtigste Werkzeug** im Maschinenbau und in der Elektrotechnik. Hier die zwei Klassiker:

**1. Feder-Masse-Dämpfer-System (Mechanik)**

Stell dir eine Masse an einer Feder vor, die in einer zähen Flüssigkeit schwingt:
- **Federkraft:** $F_F = -kx$ (Hooke'sches Gesetz, zieht zurück)
- **Dämpfungskraft:** $F_D = -c\\dot{x}$ (bremst, proportional zur Geschwindigkeit)
- **Äußere Kraft:** $F(t)$ (z.B. Erdbeben, Motor)

Newton ($F = ma$):
$$m\\ddot{x} + c\\dot{x} + kx = F(t)$$

**2. RC-Glied (Elektrotechnik)**

Ein Widerstand $R$ in Reihe mit einem Kondensator $C$:
- Kirchhoff: $u_R + u_C = U_0$
- $R \\cdot i + u_C = U_0$ mit $i = C \\cdot \\dot{u}_C$:

$$RC \\cdot \\dot{u}_C + u_C = U_0$$

Beide haben die **gleiche mathematische Struktur** — DGL sind universell!`,
      },
      {
        id: 'dgl-2-3-s2', type: 'explanation-formal', title: 'Schwingungsgleichung lösen',
        content: `**Schwingungsgleichung:** $m\\ddot{x} + c\\dot{x} + kx = 0$ (freie Schwingung)

**Kenngrößen:**
- Eigenkreisfrequenz: $\\omega_0 = \\sqrt{k/m}$
- Dämpfungsgrad: $D = \\frac{c}{2\\sqrt{km}}$
- Abklingkonstante: $\\delta = \\frac{c}{2m}$

**Drei Fälle:**

| Fall | Bedingung | Verhalten |
|------|-----------|-----------|
| Schwingfall | $D < 1$ | Gedämpfte Schwingung |
| Aperiodischer Grenzfall | $D = 1$ | Schnellstmögliches Abklingen ohne Schwingung |
| Kriechfall | $D > 1$ | Langsames Abklingen ohne Schwingung |

**Schwingfall ($D < 1$):**
$$x(t) = e^{-\\delta t}(C_1 \\cos(\\omega_d t) + C_2 \\sin(\\omega_d t))$$

mit der gedämpften Eigenfrequenz: $\\omega_d = \\omega_0 \\sqrt{1 - D^2}$

**RC-Glied:** $RC\\dot{u}_C + u_C = U_0$, Lösung: $u_C(t) = U_0(1 - e^{-t/\\tau})$ mit $\\tau = RC$.`,
      },
      {
        id: 'dgl-2-3-s3', type: 'visualization', title: 'Freie gedämpfte Schwingung',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => Math.exp(-0.5 * x) * Math.cos(3 * x), color: '#3b82f6', label: 'x(t) — gedämpfte Schwingung' },
            { fn: (x) => Math.exp(-0.5 * x), color: '#9ca3af', label: 'Einhüllende e^(-0.5t)' },
            { fn: (x) => -Math.exp(-0.5 * x), color: '#9ca3af', label: '-Einhüllende' },
          ],
          xRange: [0, 12],
          yRange: [-1.2, 1.2],
          showGrid: true,
        },
      },
      { id: 'dgl-2-3-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-dgl-2-3-a' },
      { id: 'dgl-2-3-s5', type: 'exercise', title: 'Aufgabe 2 — Zuordnung', exerciseRef: 'ex-dgl-2-3-b' },
      { id: 'dgl-2-3-s6', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-dgl-2-3-c' },
      { id: 'dgl-2-3-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-dgl-2-3-mastery' },
    ],
  },
]

export const dgl_unit2 = {
  id: 'dgl-unit-2',
  title: 'Fortgeschrittene Methoden',
  order: 2,
  description: 'Variation der Konstanten, DGL-Systeme, technische Anwendungen (Schwingungen, RC-Glied)',
  unitGoals: [
    'Variation der Konstanten: inhomogene lineare DGL $y\' + p(x)y = q(x)$ aus homogener Lösung aufbauen',
    'Charakteristisches Polynom lösen und je nach Diskriminanten-Fall (reell/doppelt/komplex) Lösungstypen wählen',
    'Erzwungene Schwingung mit Ansatz-Methode (Inhomogenität vom Typ Polynom, Exponential, Sinus/Kosinus)',
    'Technische Anwendungen: RC-/RL-Glied, Masse-Feder-Dämpfer, exponentielles Wachstum/Zerfall',
  ],
  lessons: lessons_dgl_u2,
  exercises: exercises_dgl_u2,
}
