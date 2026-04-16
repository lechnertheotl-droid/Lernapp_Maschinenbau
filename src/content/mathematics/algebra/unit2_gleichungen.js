// ── Algebra Unit 2: Gleichungen & Ungleichungen ─────────────────────────────

export const exercises_alg_u2 = {
  // ── Lesson 1: Lineare Gleichungen ──
  'ex-alg-2-1-a': {
    id: 'ex-alg-2-1-a', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Löse: $3x + 7 = 22$',
    options: ['$x = 5$', '$x = 7$', '$x = 3$', '$x = 10$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Äquivalenzumformungen — erst Konstanten auf die andere Seite, dann durch den Koeffizienten von $x$ teilen.

**Rechnung:**
$$3x + 7 = 22 \\quad | -7 \\\\ 3x = 15 \\quad | :3 \\\\ x = 5$$

**Probe:** $3 \\cdot 5 + 7 = 15 + 7 = 22$. ✓

**Typischer Fehler:** $x = 7$ entsteht, wenn man vergisst durch $3$ zu teilen. $x = 10$ kommt, wenn man $22$ statt $15$ durch $3$ teilt — achte auf die Reihenfolge!`,
    hints: [
      'Bringe zuerst die Konstante auf die andere Seite. Welche Rechenoperation hebt $+7$ auf?',
      'Regel: Was du links machst, musst du auch rechts machen (Waagenprinzip).',
      'Nach dem Subtrahieren von $7$ bleibt $3x = 15$. Jetzt durch $3$ teilen.',
    ],
  },
  'ex-alg-2-1-b': {
    id: 'ex-alg-2-1-b', lessonId: 'alg-2-1', type: 'number-input',
    question: 'Löse: $5x - 3 = 2x + 9$',
    correctValue: 4,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** $x$-Terme auf eine Seite, Konstanten auf die andere sammeln.

**Rechnung:**
$$5x - 3 = 2x + 9 \\quad | -2x \\\\ 3x - 3 = 9 \\quad | +3 \\\\ 3x = 12 \\quad | :3 \\\\ x = 4$$

**Probe:** Linke Seite: $5 \\cdot 4 - 3 = 17$. Rechte Seite: $2 \\cdot 4 + 9 = 17$. ✓

**Typischer Fehler:** Vorzeichenfehler beim Verschieben von $2x$ — aus $+2x$ auf der rechten Seite wird beim Hinüberschaffen $-2x$ auf der linken.`,
    hints: [
      'Sammle alle $x$-Terme auf einer Seite, alle Zahlen auf der anderen.',
      'Rechenschritt: $5x - 2x = 9 + 3$, also $3x = 12$.',
      'Teile am Ende durch den Koeffizienten vor $x$.',
    ],
  },
  'ex-alg-2-1-c': {
    id: 'ex-alg-2-1-c', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Ein Rechteck hat Umfang $U = 30$ cm. Die Länge ist doppelt so groß wie die Breite. Wie breit ist das Rechteck?',
    options: ['$5$ cm', '$10$ cm', '$7{,}5$ cm', '$15$ cm'],
    correctIndex: 0,
    explanation: `**Ansatz:** Variable definieren, Beziehungen als Gleichung aufschreiben, lösen.

**Variablen:** Sei $b$ die Breite, dann ist die Länge $l = 2b$.

**Rechnung:** Die Umfangsformel des Rechtecks lautet $U = 2(l + b)$. Einsetzen:
$$30 = 2(2b + b) = 2 \\cdot 3b = 6b \\quad | :6 \\\\ b = 5 \\text{ cm}$$

Also: Breite $= 5$ cm, Länge $= 10$ cm.

**Probe:** $U = 2(10 + 5) = 2 \\cdot 15 = 30$ cm. ✓

**Typischer Fehler:** $10$ cm ist die Länge, nicht die Breite — genau lesen, wonach gefragt wird. $7{,}5$ cm entsteht, wenn man $U = l + b$ (Halbumfang) statt $U = 2(l+b)$ verwendet.`,
    hints: [
      'Definiere eine Variable: Sei $b$ die Breite. Wie schreibst du dann die Länge?',
      'Umfangsformel: $U = 2(l + b)$. Setze $l = 2b$ ein.',
      'Du erhältst $30 = 6b$. Löse nach $b$ auf.',
    ],
  },
  'ex-alg-2-1-d': {
    id: 'ex-alg-2-1-d', lessonId: 'alg-2-1', type: 'multiple-choice',
    question: 'Textaufgabe: Ein Zug fährt mit $v_{1} = 80$ km/h los. $2$ Stunden später startet ein zweiter Zug mit $v_{2} = 120$ km/h auf der gleichen Strecke. Nach wie vielen Stunden (ab Start des 2. Zuges) holt der schnellere den langsameren ein?',
    options: ['$2$ h', '$3$ h', '$4$ h', '$6$ h'],
    correctIndex: 2,
    explanation: `**Ansatz:** Einholen bedeutet: beide haben zum Zeitpunkt $t$ (ab Start des 2. Zuges) dieselbe Strecke zurückgelegt.

**Rechnung:** Vorsprung des 1. Zuges zum Startzeitpunkt des 2. Zuges: $s_{0} = v_{1} \\cdot 2 = 80 \\cdot 2 = 160$ km.

Gleichung für gleiche Strecken ab Start des 2. Zuges:
$$v_{2} \\cdot t = s_{0} + v_{1} \\cdot t \\\\ 120\\, t = 160 + 80\\, t \\quad | -80t \\\\ 40\\, t = 160 \\quad | :40 \\\\ t = 4 \\text{ h}$$

Alternative: Aufholgeschwindigkeit $= v_{2} - v_{1} = 40$ km/h. Zeit $= 160 \\text{ km} / 40 \\text{ km/h} = 4$ h.

**Probe:** Nach $4$ h hat Zug 2: $120 \\cdot 4 = 480$ km. Zug 1 fährt da schon $6$ h: $80 \\cdot 6 = 480$ km. ✓

**Typischer Fehler:** $2$ h (nur der Vorsprung) oder $6$ h (Gesamtzeit ab Start Zug 1) — lies genau, ab wann gezählt wird.`,
    hints: [
      'Wie groß ist der Vorsprung des 1. Zuges, bevor der 2. losfährt?',
      'Pro Stunde holt Zug 2 um $v_{2} - v_{1} = 40$ km auf. Wie lange braucht er für $160$ km Vorsprung?',
      'Rechne $160 / 40 = ?$',
    ],
  },
  'ex-alg-2-1-mastery': {
    id: 'ex-alg-2-1-mastery', lessonId: 'alg-2-1', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: $\\dfrac{2x + 1}{3} = \\dfrac{x - 2}{2} + 1$. Gib $x$ an.',
    correctValue: -2,
    tolerance: 0,
    unit: '',
    explanation: `**Ansatz:** Brüche durch Multiplikation mit dem Hauptnenner beseitigen, dann linear lösen.

**Rechnung:** Hauptnenner von $3$ und $2$ ist $6$. Multipliziere beide Seiten mit $6$:
$$6 \\cdot \\dfrac{2x+1}{3} = 6 \\cdot \\dfrac{x-2}{2} + 6 \\cdot 1 \\\\ 2(2x+1) = 3(x-2) + 6 \\\\ 4x + 2 = 3x - 6 + 6 \\\\ 4x + 2 = 3x \\quad | -3x, -2 \\\\ x = -2$$

**Probe:** Linke Seite: $\\dfrac{2 \\cdot (-2) + 1}{3} = \\dfrac{-3}{3} = -1$. Rechte Seite: $\\dfrac{-2-2}{2} + 1 = \\dfrac{-4}{2} + 1 = -2 + 1 = -1$. ✓

**Typischer Fehler:** $+1$ nicht mit $6$ multiplizieren — dann rechnest du $4x+2 = 3x-6+1$ und bekommst ein falsches $x$. Jeder Term muss mit dem Hauptnenner multipliziert werden!`,
    hints: [
      'Multipliziere zuerst beide Seiten mit dem Hauptnenner, um die Brüche loszuwerden.',
      'Hauptnenner von $3$ und $2$ ist $6$. Denke daran: Auch die $+1$ wird mit $6$ multipliziert!',
      'Nach dem Multiplizieren: $2(2x+1) = 3(x-2) + 6$. Klammern auflösen und nach $x$ sortieren.',
    ],
  },

  // ── Lesson 2: Quadratische Gleichungen ──
  'ex-alg-2-2-a': {
    id: 'ex-alg-2-2-a', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Löse: $x^{2} - 5x + 6 = 0$',
    options: ['$x = 2$ und $x = 3$', '$x = -2$ und $x = -3$', '$x = 1$ und $x = 6$', '$x = -1$ und $x = -6$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Quadratische Gleichung in Normalform ($x^{2} + px + q = 0$ mit $p = -5$, $q = 6$) — pq-Formel oder Faktorisierung.

**Rechnung (pq-Formel):**
$$x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q} = \\dfrac{5}{2} \\pm \\sqrt{\\dfrac{25}{4} - 6} = 2{,}5 \\pm \\sqrt{0{,}25} = 2{,}5 \\pm 0{,}5$$

Also $x_{1} = 3$, $x_{2} = 2$.

**Alternative (Vieta):** Suche zwei Zahlen mit Summe $5$ und Produkt $6$. Das sind $2$ und $3$. Faktorisierung: $(x-2)(x-3) = 0$.

**Probe:** $3^{2} - 5 \\cdot 3 + 6 = 9 - 15 + 6 = 0$. ✓ $\\quad 2^{2} - 5 \\cdot 2 + 6 = 4 - 10 + 6 = 0$. ✓

**Typischer Fehler:** Vorzeichen bei $-\\frac{p}{2}$ übersehen. Hier ist $p = -5$, also $-\\frac{p}{2} = +2{,}5$ (nicht $-2{,}5$). Deshalb *keine* negativen Lösungen.`,
    hints: [
      'Bringe die Gleichung in Normalform $x^{2} + px + q = 0$. Hier: $p = -5$, $q = 6$.',
      'Formel: $x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q}$. Alternativ Vieta: zwei Zahlen mit Summe $5$ und Produkt $6$?',
      'Rechne $\\left(\\dfrac{-5}{2}\\right)^{2} - 6 = 6{,}25 - 6 = 0{,}25$ — Wurzel daraus ist $0{,}5$.',
    ],
  },
  'ex-alg-2-2-b': {
    id: 'ex-alg-2-2-b', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Die Diskriminante $D = b^{2} - 4ac$ einer quadratischen Gleichung $ax^{2} + bx + c = 0$ ist negativ ($D < 0$). Was bedeutet das?',
    options: ['Zwei verschiedene reelle Lösungen', 'Genau eine reelle Lösung (Doppelwurzel)', 'Keine reelle Lösung', 'Unendlich viele Lösungen'],
    correctIndex: 2,
    explanation: `**Ansatz:** Interpretation der Diskriminante in der abc-Formel $x_{1,2} = \\dfrac{-b \\pm \\sqrt{D}}{2a}$.

**Rechnung:** Ist $D < 0$, so steht unter der Wurzel eine negative Zahl. $\\sqrt{D}$ ist dann **keine reelle Zahl** — die Gleichung besitzt keine reellen Lösungen.

**Geometrisch:** Die zugehörige Parabel $y = ax^{2} + bx + c$ schneidet die $x$-Achse nicht. Sie liegt entweder komplett darüber (bei $a > 0$) oder komplett darunter (bei $a < 0$).

**Merktabelle:**
- $D > 0$: zwei verschiedene reelle Lösungen (zwei Schnittpunkte)
- $D = 0$: eine doppelte reelle Lösung (Berührpunkt / Scheitel auf $x$-Achse)
- $D < 0$: keine reelle Lösung (in $\\mathbb{C}$ gäbe es zwei komplex-konjugierte Lösungen)

**Typischer Fehler:** "Unendlich viele Lösungen" gilt bei der Nullgleichung $0 = 0$ — das hat mit der Diskriminante nichts zu tun.`,
    hints: [
      'In der abc-Formel: Was steht unter der Wurzel?',
      'Regel: $\\sqrt{\\text{negative Zahl}}$ ist nicht reell.',
      'Geometrisch: Wie viele Schnittpunkte hat die Parabel mit der $x$-Achse?',
    ],
  },
  'ex-alg-2-2-c': {
    id: 'ex-alg-2-2-c', lessonId: 'alg-2-2', type: 'number-input',
    question: 'Löse mit der pq-Formel: $x^{2} + 4x - 5 = 0$. Gib die POSITIVE Lösung an.',
    correctValue: 1,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Normalform erkennen, $p$ und $q$ identifizieren, pq-Formel anwenden.

**Identifikation:** $p = 4$, $q = -5$.

**Rechnung:**
$$x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q} = -2 \\pm \\sqrt{4 - (-5)} = -2 \\pm \\sqrt{9} = -2 \\pm 3$$

Also $x_{1} = 1$, $x_{2} = -5$. Die positive Lösung ist $x = 1$.

**Probe:** $1^{2} + 4 \\cdot 1 - 5 = 1 + 4 - 5 = 0$. ✓

**Typischer Fehler:** Vorzeichen bei $q$ übersehen — $-q$ in der Formel heißt hier $-(-5) = +5$. Wer $\\sqrt{4 - 5} = \\sqrt{-1}$ rechnet, kommt fälschlicherweise zu "keine Lösung".`,
    hints: [
      'pq-Formel: $x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q}$ mit $p = 4$, $q = -5$.',
      'Achtung Vorzeichen: $-q = -(-5) = +5$. Unter der Wurzel steht also $4 + 5 = 9$.',
      'Nach $\\sqrt{9} = 3$ erhältst du $x_{1,2} = -2 \\pm 3$ — welche ist die positive?',
    ],
  },
  'ex-alg-2-2-d': {
    id: 'ex-alg-2-2-d', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Nach Vieta: $x^{2} - 7x + 12 = 0$. Was gilt für die Lösungen $x_{1}$ und $x_{2}$?',
    options: [
      '$x_{1} + x_{2} = 7, \\; x_{1} \\cdot x_{2} = 12$',
      '$x_{1} + x_{2} = -7, \\; x_{1} \\cdot x_{2} = 12$',
      '$x_{1} + x_{2} = 7, \\; x_{1} \\cdot x_{2} = -12$',
      '$x_{1} + x_{2} = 12, \\; x_{1} \\cdot x_{2} = 7$',
    ],
    correctIndex: 0,
    explanation: `**Ansatz:** Satz von Vieta auf die Normalform $x^{2} + px + q = 0$ anwenden.

**Regel:** Für $x^{2} + px + q = 0$ gilt $x_{1} + x_{2} = -p$ und $x_{1} \\cdot x_{2} = q$.

**Identifikation:** Hier $p = -7$, $q = 12$. Also:
$$x_{1} + x_{2} = -(-7) = 7, \\qquad x_{1} \\cdot x_{2} = 12$$

**Probe durch Raten:** Welche zwei Zahlen addieren sich zu $7$ und multiplizieren sich zu $12$? Antwort: $3$ und $4$. Damit sind $x_{1} = 3$, $x_{2} = 4$ die Lösungen.

**Typischer Fehler:** Das Vorzeichen bei $-p$ vergessen — Antwort B ($x_{1}+x_{2} = -7$) stammt aus diesem Denkfehler. Antwort D verwechselt Summe und Produkt.`,
    hints: [
      'Satz von Vieta: $x_{1} + x_{2} = -p$ (Minuszeichen beachten!), $x_{1} \\cdot x_{2} = q$.',
      'Hier liest du $p$ und $q$ aus $x^{2} + px + q$ ab: $p = -7$, $q = 12$.',
      'Welche zwei Zahlen haben Summe $7$ und Produkt $12$? (Probeweise im Kopf.)',
    ],
  },
  'ex-alg-2-2-e': {
    id: 'ex-alg-2-2-e', lessonId: 'alg-2-2', type: 'multiple-choice',
    question: 'Wie viele Lösungen hat $2x^{2} + 3x + 5 = 0$?',
    options: ['Zwei reelle', 'Eine reelle (Doppelwurzel)', 'Keine reelle', 'Unendlich viele'],
    correctIndex: 2,
    explanation: `**Ansatz:** Diskriminante $D = b^{2} - 4ac$ berechnen und ihr Vorzeichen auswerten.

**Identifikation:** $a = 2$, $b = 3$, $c = 5$.

**Rechnung:**
$$D = b^{2} - 4ac = 3^{2} - 4 \\cdot 2 \\cdot 5 = 9 - 40 = -31$$

Da $D = -31 < 0$, existiert **keine reelle Lösung**.

**Geometrisch:** Die Parabel $y = 2x^{2} + 3x + 5$ ist nach oben geöffnet ($a = 2 > 0$) und hat ihren Scheitel bei $y > 0$ — sie liegt komplett über der $x$-Achse.

**Typischer Fehler:** Eine negative Zahl unter der Wurzel als "Null" interpretieren oder einfach $\\sqrt{-31}$ reell ziehen wollen. In $\\mathbb{R}$ gibt es diese Lösung nicht.`,
    hints: [
      'Nutze die Diskriminante: $D = b^{2} - 4ac$.',
      'Hier: $a = 2$, $b = 3$, $c = 5$. Rechne $D = 3^{2} - 4 \\cdot 2 \\cdot 5$.',
      'Ist $D > 0$, $= 0$ oder $< 0$? Das bestimmt die Anzahl der reellen Lösungen.',
    ],
  },
  'ex-alg-2-2-mastery': {
    id: 'ex-alg-2-2-mastery', lessonId: 'alg-2-2', type: 'number-input', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: $2x^{2} - 8x + 6 = 0$. Gib die GRÖSSERE Lösung an.',
    correctValue: 3,
    tolerance: 0.01,
    unit: '',
    explanation: `**Ansatz:** Erst auf Normalform bringen (durch $2$ teilen), dann pq-Formel.

**Rechnung:** Dividiere durch $2$:
$$x^{2} - 4x + 3 = 0$$

Also $p = -4$, $q = 3$. pq-Formel:
$$x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q} = 2 \\pm \\sqrt{4 - 3} = 2 \\pm 1$$

Somit $x_{1} = 3$, $x_{2} = 1$. Die größere Lösung ist $x = 3$.

**Probe:** $2 \\cdot 9 - 8 \\cdot 3 + 6 = 18 - 24 + 6 = 0$. ✓

**Alternative ohne Division:** abc-Formel mit $a=2$, $b=-8$, $c=6$: $x_{1,2} = \\dfrac{8 \\pm \\sqrt{64-48}}{4} = \\dfrac{8 \\pm 4}{4}$, also $x_{1}=3$, $x_{2}=1$.

**Typischer Fehler:** Die pq-Formel direkt mit $p=-8$, $q=6$ anwenden — das gilt nur in Normalform! Wer ohne Division arbeitet, muss die abc-Formel nehmen.`,
    hints: [
      'Bringe die Gleichung erst in Normalform: Dividiere beide Seiten durch $2$.',
      'Nach dem Teilen: $x^{2} - 4x + 3 = 0$. Jetzt pq-Formel mit $p = -4$, $q = 3$.',
      'Du erhältst $x = 2 \\pm \\sqrt{4-3} = 2 \\pm 1$. Welche ist die größere?',
    ],
  },

  // ── Lesson 3: Polynomgleichungen & Polynomdivision ──
  'ex-alg-2-3-a': {
    id: 'ex-alg-2-3-a', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: '$P(x) = x^{3} - 6x^{2} + 11x - 6$. Prüfe: Ist $x = 1$ eine Nullstelle?',
    options: ['Ja, denn $P(1) = 0$', 'Nein, denn $P(1) = 1$', 'Nein, denn $P(1) = -1$', 'Ja, denn $P(1) = 6$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Nullstellentest — Kandidaten in $P(x)$ einsetzen und prüfen, ob Null herauskommt.

**Rechnung:**
$$P(1) = 1^{3} - 6 \\cdot 1^{2} + 11 \\cdot 1 - 6 = 1 - 6 + 11 - 6 = 0$$

Also ist $x = 1$ eine Nullstelle von $P$.

**Folgerung:** Nach dem Faktorsatz ist $(x - 1)$ ein Teiler von $P(x)$. Per Polynomdivision kannst du nun den Grad reduzieren.

**Warum $x = \\pm 1, \\pm 2, \\pm 3, \\pm 6$ probieren?** Rationale Nullstellen eines ganzzahligen Polynoms sind Teiler des absoluten Glieds — hier $-6$. Das spart viel Zeit beim Raten.

**Typischer Fehler:** Antwort D ($P(1) = 6$) entsteht, wenn man das Minus vor der $6$ übersieht oder nur $-(-6) = 6$ betrachtet statt den Ausdruck vollständig auszuwerten.`,
    hints: [
      'Setze $x = 1$ in $P(x)$ ein und rechne aus.',
      'Teilergebnisse: $1^{3} = 1$, $6 \\cdot 1^{2} = 6$, $11 \\cdot 1 = 11$.',
      'Summiere: $1 - 6 + 11 - 6 = ?$. Wenn das Ergebnis Null ist, ist $x=1$ Nullstelle.',
    ],
  },
  'ex-alg-2-3-b': {
    id: 'ex-alg-2-3-b', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: '$(x^{3} - 6x^{2} + 11x - 6) \\div (x - 1)$ ergibt:',
    options: ['$x^{2} - 5x + 6$', '$x^{2} - 6x + 11$', '$x^{2} - 5x - 6$', '$x^{2} + 5x + 6$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Polynomdivision wie schriftliche Division — Stelle für Stelle den Grad reduzieren.

**Rechnung (schrittweise):**
$$\\begin{aligned} (x^{3} - 6x^{2} + 11x - 6) &: (x-1) = x^{2} - 5x + 6 \\\\ -(x^{3} - x^{2}) & \\\\ \\hline -5x^{2} + 11x & \\\\ -(-5x^{2} + 5x) & \\\\ \\hline 6x - 6 & \\\\ -(6x - 6) & \\\\ \\hline 0 & \\end{aligned}$$

Der Quotient ist $x^{2} - 5x + 6$, Rest $0$ — das bestätigt, dass $x=1$ Nullstelle war.

**Fortsetzung:** $x^{2} - 5x + 6 = (x-2)(x-3)$. Damit sind alle Nullstellen von $P$: $x = 1, 2, 3$.

**Alternative Horner-Schema** für $P(x)$ an $x_{0} = 1$: Koeffizienten $1, -6, 11, -6$ und Einträge $1, -5, 6, 0$. Die ersten drei bilden den Quotienten $x^{2} - 5x + 6$, die letzte ist der Rest.

**Typischer Fehler:** Vorzeichenfehler beim Subtrahieren — besonders beim mittleren Schritt $-(-5x^{2} + 5x)$. Immer das *ganze* abgezogene Polynom in Klammern setzen.`,
    hints: [
      'Beginne mit dem Quotienten des führenden Terms: $x^{3} : x = x^{2}$.',
      'Multipliziere $x^{2} \\cdot (x-1) = x^{3} - x^{2}$ und ziehe das vom Dividenden ab.',
      'Arbeite schrittweise nach unten: nächster Quotiententerm, multiplizieren, subtrahieren — bis Rest $0$.',
    ],
  },
  'ex-alg-2-3-c': {
    id: 'ex-alg-2-3-c', lessonId: 'alg-2-3', type: 'multiple-choice',
    question: 'Für $P(x) = 2x^{3} + 3x^{2} - 1$ an der Stelle $x_{0} = -1$: Was ist $P(-1)$?',
    options: ['$0$', '$2$', '$-2$', '$4$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Wert eines Polynoms an einer Stelle berechnen — direkt einsetzen oder Horner-Schema nutzen.

**Rechnung (direkt einsetzen):**
$$P(-1) = 2 \\cdot (-1)^{3} + 3 \\cdot (-1)^{2} + 0 \\cdot (-1) - 1 = -2 + 3 + 0 - 1 = 0$$

Beachte: Der Koeffizient bei $x^{1}$ ist $0$ (fehlt im Polynom).

**Rechnung (Horner-Schema):** Koeffizienten $2, 3, 0, -1$; auswertende Stelle $x_{0} = -1$.

| Koeffizient | $2$ | $3$ | $0$ | $-1$ |
|---|---|---|---|---|
| Vorgabe | | $-2$ | $-1$ | $1$ |
| Summe | $2$ | $1$ | $-1$ | $0$ |

Letzte Zahl in der Summenzeile ist $P(-1) = 0$. ✓

**Folgerung:** $x = -1$ ist eine Nullstelle; $(x+1)$ teilt $P(x)$. Die übrigen Einträge $2, 1, -1$ ergeben den Quotienten $2x^{2} + x - 1$.

**Typischer Fehler:** Vorzeichen bei $(-1)^{3}$ falsch — das ist $-1$, nicht $+1$. Wer $P(-1) = 2 + 3 - 1 = 4$ rechnet (Antwort D), hat das Minus übersehen.`,
    hints: [
      'Denke an Vorzeichen: $(-1)^{3} = -1$, $(-1)^{2} = +1$.',
      'Setze ein: $P(-1) = 2 \\cdot (-1) + 3 \\cdot 1 - 1$.',
      'Addiere die Terme: $-2 + 3 - 1 = ?$',
    ],
  },
  'ex-alg-2-3-mastery': {
    id: 'ex-alg-2-3-mastery', lessonId: 'alg-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Alle Nullstellen von $P(x) = x^{3} - 3x^{2} + 2x$ sind:',
    options: ['$x = 0, 1, 2$', '$x = 0, -1, -2$', '$x = 1, 2, 3$', '$x = 0, 1, -2$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Kein absolutes Glied → $x$ ausklammern (erste Nullstelle geschenkt), dann quadratische Gleichung lösen.

**Schritt 1 — Ausklammern:**
$$P(x) = x^{3} - 3x^{2} + 2x = x \\cdot (x^{2} - 3x + 2)$$

Daraus liest man direkt ab: $x_{1} = 0$.

**Schritt 2 — Quadratische Gleichung:** $x^{2} - 3x + 2 = 0$ mit $p = -3$, $q = 2$.

pq-Formel:
$$x_{2,3} = \\dfrac{3}{2} \\pm \\sqrt{\\dfrac{9}{4} - 2} = 1{,}5 \\pm \\sqrt{0{,}25} = 1{,}5 \\pm 0{,}5$$

Also $x_{2} = 2$, $x_{3} = 1$.

**Alternative (Vieta):** Zwei Zahlen mit Summe $3$ und Produkt $2$ sind $1$ und $2$. Damit $(x-1)(x-2) = 0$.

**Faktorisierte Form:** $P(x) = x(x-1)(x-2)$.

**Probe:** $P(0) = 0$ ✓, $P(1) = 1 - 3 + 2 = 0$ ✓, $P(2) = 8 - 12 + 4 = 0$ ✓.

**Typischer Fehler:** Das Ausklammern von $x$ vergessen und direkt mit Polynomdivision starten — geht auch, ist aber umständlicher. Antwort D ($x = 0, 1, -2$) entsteht, wenn man Vieta falsch anwendet ("Summe $= p$" statt $-p$).`,
    hints: [
      'Kein konstantes Glied ($+c$) → was kannst du ausklammern?',
      'Nach $P(x) = x (x^{2} - 3x + 2)$: Eine Nullstelle ist sofort ablesbar, die anderen kommen aus der Klammer.',
      'Quadratische Gleichung $x^{2} - 3x + 2 = 0$: Zwei Zahlen mit Summe $3$ und Produkt $2$?',
    ],
  },

  // ── Lesson 4: Ungleichungen ──
  'ex-alg-2-4-a': {
    id: 'ex-alg-2-4-a', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: $2x - 3 > 7$',
    options: ['$x > 5$', '$x > 2$', '$x < 5$', '$x > 10$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Ungleichung wie Gleichung behandeln — nur bei Multiplikation/Division mit negativer Zahl dreht sich das Zeichen um.

**Rechnung:**
$$2x - 3 > 7 \\quad | +3 \\\\ 2x > 10 \\quad | :2 \\; (\\text{positiv, Zeichen bleibt}) \\\\ x > 5$$

**Probe:** Teste einen Wert aus der Lösung, z.B. $x = 6$: $2 \\cdot 6 - 3 = 9 > 7$ ✓. Teste einen Wert außerhalb, z.B. $x = 5$: $2 \\cdot 5 - 3 = 7$, nicht $> 7$. ✓

**Lösungsmenge:** $\\mathbb{L} = (5, \\infty)$ — offenes Intervall, $5$ nicht eingeschlossen (strenge Ungleichung).

**Typischer Fehler:** "$x > 10$" (Antwort D) entsteht, wenn man vergisst durch $2$ zu teilen. "$x < 5$" kommt, wenn man irrtümlich das Zeichen dreht — das geschieht nur bei *negativem* Divisor.`,
    hints: [
      'Bringe zuerst die Konstante auf die andere Seite: $2x > 10$.',
      'Teile jetzt durch $2$. Der Divisor ist positiv — das Zeichen bleibt also.',
      'Ergebnis: $x > 5$. Keine Umdrehung nötig!',
    ],
  },
  'ex-alg-2-4-b': {
    id: 'ex-alg-2-4-b', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: $-3x < 12$',
    options: ['$x < -4$', '$x > -4$', '$x < 4$', '$x > 4$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Nach $x$ auflösen — wichtig ist das Teilen durch eine **negative Zahl**.

**Regel:** Bei Division (oder Multiplikation) einer Ungleichung mit einer **negativen** Zahl wird das Ungleichheitszeichen umgekehrt ($<$ wird $>$, $\\leq$ wird $\\geq$ und umgekehrt).

**Rechnung:**
$$-3x < 12 \\quad | : (-3) \\; (\\text{negativ! Zeichen dreht}) \\\\ x > -4$$

**Probe:** $x = 0$ (liegt in $x > -4$): $-3 \\cdot 0 = 0 < 12$ ✓. $\\quad x = -5$ (liegt *nicht* in $x > -4$): $-3 \\cdot (-5) = 15 < 12$? Nein, $15$ ist nicht kleiner als $12$. ✓

**Lösungsmenge:** $\\mathbb{L} = (-4, \\infty)$.

**Typischer Fehler:** Das Umdrehen vergessen — Antwort A ($x < -4$) ist genau der klassische Flüchtigkeitsfehler. Alternativ: Bringe $-3x$ erst auf die andere Seite ($12 + 3x > 0$), dann bist du immer nur mit positiven Zahlen unterwegs.`,
    hints: [
      'Du musst durch einen negativen Koeffizienten teilen ($-3$). Was passiert mit dem Ungleichheitszeichen?',
      'Regel: Multiplikation/Division mit negativer Zahl dreht "$<$" zu "$>$" (und umgekehrt).',
      '$-3x < 12 \\Leftrightarrow x > -4$ (Zeichen gedreht).',
    ],
  },
  'ex-alg-2-4-c': {
    id: 'ex-alg-2-4-c', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: $|x - 3| < 5$',
    options: ['$x < 8$', '$-2 < x < 8$', '$x > -2$', '$-5 < x < 5$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Betragsungleichung $|A| < B$ (mit $B > 0$) in Doppelungleichung umschreiben: $-B < A < B$.

**Rechnung:**
$$|x - 3| < 5 \\; \\Leftrightarrow \\; -5 < x - 3 < 5 \\quad | +3 \\; (\\text{in allen drei Teilen}) \\\\ -2 < x < 8$$

**Geometrische Deutung:** $|x - 3|$ ist der Abstand von $x$ zum Mittelpunkt $3$. Die Ungleichung $|x - 3| < 5$ beschreibt alle $x$, deren Abstand zu $3$ kleiner als $5$ ist — also das offene Intervall $(3-5,\\, 3+5) = (-2, 8)$.

**Probe:** $x = 0$: $|0 - 3| = 3 < 5$ ✓. $\\quad x = 8$: $|8 - 3| = 5$, *nicht* $< 5$. Korrekt: $8$ ist nicht in der Lösung.

**Typischer Fehler:** Antwort A ($x < 8$) übersieht die untere Grenze. Antwort D ($-5 < x < 5$) addiert die $+3$ nicht korrekt. Merke: immer beide Ränder mitverschieben.`,
    hints: [
      'Regel: $|A| < B \\Leftrightarrow -B < A < B$. Hier ist $A = x - 3$, $B = 5$.',
      'Setze ein und löse die Doppelungleichung: $-5 < x - 3 < 5$.',
      'Addiere in allen drei Teilen $+3$: $-5 + 3 < x < 5 + 3$, also $-2 < x < 8$.',
    ],
  },
  'ex-alg-2-4-d': {
    id: 'ex-alg-2-4-d', lessonId: 'alg-2-4', type: 'multiple-choice',
    question: 'Löse: $x^{2} - 4 > 0$',
    options: ['$x > 2$', '$x < -2$ oder $x > 2$', '$-2 < x < 2$', '$x > 4$'],
    correctIndex: 1,
    explanation: `**Ansatz:** Faktorisieren, Nullstellen bestimmen, Vorzeichentabelle — oder geometrisch über die Parabel.

**Schritt 1 — Faktorisieren:** Dritte binomische Formel liefert
$$x^{2} - 4 = (x-2)(x+2)$$

Die kritischen Stellen sind $x = -2$ und $x = 2$.

**Schritt 2 — Vorzeichentabelle** (für jeden Teilbereich das Vorzeichen der Faktoren bestimmen):

| Bereich | $x+2$ | $x-2$ | Produkt |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 2$ | $+$ | $-$ | $-$ |
| $x > 2$ | $+$ | $+$ | $+$ |

Gesucht ist "Produkt $> 0$" — das trifft in $x < -2$ und $x > 2$ zu.

**Lösungsmenge:** $\\mathbb{L} = (-\\infty, -2) \\cup (2, \\infty)$.

**Geometrische Deutung:** Die Parabel $y = x^{2} - 4$ ist nach oben offen mit Nullstellen $\\pm 2$. Sie liegt genau *außerhalb* des Intervalls $[-2, 2]$ über der $x$-Achse.

**Probe:** $x = 3$: $9 - 4 = 5 > 0$ ✓. $x = 0$: $0 - 4 = -4$, nicht $> 0$. ✓

**Typischer Fehler:** Antwort C ($-2 < x < 2$) löst $x^{2} - 4 < 0$ (umgekehrtes Zeichen). Antwort A vergisst den negativen Ast. Bei quadratischen Ungleichungen immer *beide* Seiten prüfen!`,
    hints: [
      'Faktorisiere mit der dritten binomischen Formel: $x^{2} - 4 = (x-2)(x+2)$.',
      'Nullstellen sind $x = -2$ und $x = 2$. Zwischen und außerhalb gelten unterschiedliche Vorzeichen.',
      'Ein Produkt ist positiv, wenn beide Faktoren dasselbe Vorzeichen haben — das passiert für $x < -2$ *oder* $x > 2$.',
    ],
  },
  'ex-alg-2-4-mastery': {
    id: 'ex-alg-2-4-mastery', lessonId: 'alg-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Löse: $|2x + 1| \\leq 7$',
    options: ['$-4 \\leq x \\leq 3$', '$-3 \\leq x \\leq 4$', '$x \\leq 3$', '$-4 \\leq x \\leq 4$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Betragsungleichung $|A| \\leq B$ (mit $B \\geq 0$) wird zur Doppelungleichung $-B \\leq A \\leq B$.

**Rechnung:**
$$|2x + 1| \\leq 7 \\; \\Leftrightarrow \\; -7 \\leq 2x + 1 \\leq 7 \\quad | -1 \\\\ -8 \\leq 2x \\leq 6 \\quad | :2 \\; (\\text{positiv, Zeichen bleiben}) \\\\ -4 \\leq x \\leq 3$$

**Lösungsmenge:** $\\mathbb{L} = [-4, 3]$ — geschlossenes Intervall, weil "$\\leq$" (Ränder eingeschlossen).

**Probe:** $x = 0$: $|0 + 1| = 1 \\leq 7$ ✓. $x = 3$: $|7| = 7 \\leq 7$ ✓ (Rand eingeschlossen). $x = -4$: $|-7| = 7 \\leq 7$ ✓. $x = 4$: $|9| = 9$, *nicht* $\\leq 7$. ✓

**Geometrisch:** Die Lösung beschreibt alle $x$, deren "verschobenes Doppeltes" $2x+1$ im Intervall $[-7, 7]$ liegt. Zentrum der Lösungsmenge ist dort, wo $2x+1 = 0$, also $x = -0{,}5$; mit Abstand $3{,}5$ nach links und rechts kommen wir auf $[-4, 3]$.

**Typischer Fehler:** Antwort D ($-4 \\leq x \\leq 4$) vergisst die Verschiebung durch $+1$ — nur das $2x$ wird durch $2$ geteilt. Antwort C ($x \\leq 3$) vergisst die untere Grenze.`,
    hints: [
      'Regel: $|A| \\leq B \\Leftrightarrow -B \\leq A \\leq B$. Mit $A = 2x + 1$ wird daraus $-7 \\leq 2x + 1 \\leq 7$.',
      'Subtrahiere in allen drei Teilen $1$: $-8 \\leq 2x \\leq 6$.',
      'Teile durch $2$ (positiv, kein Umdrehen): $-4 \\leq x \\leq 3$.',
    ],
  },
}

const lessons_alg_u2 = [
  {
    id: 'alg-2-1', unitId: 'alg-unit-2',
    title: 'Lineare Gleichungen',
    order: 1, estimatedMinutes: 12,
    learningGoals: ['Lineare Gleichungen lösen', 'Textaufgaben in Gleichungen übersetzen'],
    prerequisites: [],
    nextLessonId: 'alg-2-2',
    steps: [
      {
        id: 'alg-2-1-s1', type: 'explanation-intuitive', title: 'Gleichungen als Waage',
        content: `Stell dir eine **Waage** vor, die im Gleichgewicht ist. Links und rechts liegt gleich viel drauf.

**Grundprinzip:** Was du links machst, musst du auch rechts machen — sonst kippt die Waage!

**Lineare Gleichung:** $ax + b = 0$

**Lösungsstrategie:**
1. Alles mit $x$ auf eine Seite
2. Alles ohne $x$ auf die andere Seite
3. Durch den Koeffizienten von $x$ teilen

**Beispiel:** $3x + 7 = 22$
1. $3x = 22 - 7 = 15$
2. $x = 15/3 = 5$
3. **Probe:** $3 \\cdot 5 + 7 = 22$. ✓

**Textaufgaben — Schema:**
1. Variable definieren (z.B. $x = \\text{Breite}$)
2. Zusammenhang als Gleichung aufschreiben
3. Gleichung lösen
4. Probe im Sachkontext!`,
      },
      { id: 'alg-2-1-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-1-a' },
      { id: 'alg-2-1-s3', type: 'exercise', title: 'Aufgabe 2 (Rechnung)', exerciseRef: 'ex-alg-2-1-b' },
      { id: 'alg-2-1-s4', type: 'exercise', title: 'Aufgabe 3 (Textaufgabe)', exerciseRef: 'ex-alg-2-1-c' },
      { id: 'alg-2-1-s5', type: 'exercise', title: 'Aufgabe 4 (Textaufgabe)', exerciseRef: 'ex-alg-2-1-d' },
      { id: 'alg-2-1-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-1-mastery' },
    ],
  },
  {
    id: 'alg-2-2', unitId: 'alg-unit-2',
    title: 'Quadratische Gleichungen',
    order: 2, estimatedMinutes: 20,
    learningGoals: ['pq-Formel und abc-Formel anwenden', 'Diskriminante interpretieren', 'Satz von Vieta nutzen'],
    prerequisites: [],
    nextLessonId: 'alg-2-3',
    steps: [
      {
        id: 'alg-2-2-s1', type: 'explanation-intuitive', title: 'Quadratische Gleichungen — Warum?',
        content: `Quadratische Gleichungen tauchen überall auf: Wurfparabeln, Bremswege, Flächenberechnungen ...

**Allgemeine Form:** $ax^{2} + bx + c = 0$ (mit $a \\neq 0$).

**Normalform** (durch $a$ teilen): $x^{2} + px + q = 0$.

Geometrisch entspricht die linke Seite einer **Parabel** (U-Form). Die Lösungen sind die Stellen, wo die Parabel die $x$-Achse schneidet:
- 2 Schnittpunkte → 2 verschiedene Lösungen
- 1 Berührpunkt → 1 Lösung (Doppelwurzel)
- 0 Schnittpunkte → keine reelle Lösung`,
      },
      {
        id: 'alg-2-2-s2', type: 'explanation-formal', title: 'Lösungsformeln',
        content: `**pq-Formel** (für $x^{2} + px + q = 0$):
$$x_{1,2} = -\\dfrac{p}{2} \\pm \\sqrt{\\left(\\dfrac{p}{2}\\right)^{2} - q}$$

**abc-Formel** (für $ax^{2} + bx + c = 0$):
$$x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$

**Diskriminante:** $D = b^{2} - 4ac$ (bzw. $(p/2)^{2} - q$ in der Normalform)

| Fall | Anzahl reeller Lösungen | Parabel vs. $x$-Achse |
|---|---|---|
| $D > 0$ | zwei verschiedene | zwei Schnittpunkte |
| $D = 0$ | eine (Doppelwurzel) | Berührpunkt |
| $D < 0$ | keine reelle | kein Schnitt |

**Satz von Vieta** (für $x^{2} + px + q = 0$):
$$x_{1} + x_{2} = -p, \\qquad x_{1} \\cdot x_{2} = q$$

Nützlich zum schnellen Raten ganzzahliger Lösungen oder zur Probe!`,
      },
      {
        id: 'alg-2-2-s3', type: 'visualization', title: 'Parabel und Nullstellen',
        visualizationId: 'function-graph',
        params: {
          functions: [
            { fn: (x) => x * x - 5 * x + 6, color: '#3b82f6', label: 'x²−5x+6' },
          ],
          xRange: [-1, 6],
          yRange: [-2, 8],
          showGrid: true,
        },
      },
      { id: 'alg-2-2-s4', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-2-a' },
      { id: 'alg-2-2-s5', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-2-b' },
      { id: 'alg-2-2-s6', type: 'exercise', title: 'Aufgabe 3 (Rechnung)', exerciseRef: 'ex-alg-2-2-c' },
      { id: 'alg-2-2-s7', type: 'exercise', title: 'Aufgabe 4 (Vieta)', exerciseRef: 'ex-alg-2-2-d' },
      { id: 'alg-2-2-s8', type: 'exercise', title: 'Aufgabe 5', exerciseRef: 'ex-alg-2-2-e' },
      { id: 'alg-2-2-s9', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-2-mastery' },
    ],
  },
  {
    id: 'alg-2-3', unitId: 'alg-unit-2',
    title: 'Polynomgleichungen & Polynomdivision',
    order: 3, estimatedMinutes: 15,
    learningGoals: ['Nullstellen durch Probieren finden', 'Polynomdivision durchführen', 'Horner-Schema anwenden'],
    prerequisites: [],
    nextLessonId: 'alg-2-4',
    steps: [
      {
        id: 'alg-2-3-s1', type: 'explanation-intuitive', title: 'Polynome höheren Grades',
        content: `Was tun bei $x^{3}$, $x^{4}$ und höher? Es gibt keine einfache Formel wie die pq-Formel!

**Strategie für Polynomgleichungen:**
1. **Ausklammern prüfen:** Ist $x$ ein Faktor? (z.B. $x^{3} - 2x^{2} = x^{2}(x - 2)$)
2. **Nullstelle raten:** Probiere $x = \\pm 1, \\pm 2, \\pm 3, \\ldots$ (Teiler des absoluten Glieds bei ganzzahligen Koeffizienten)
3. **Polynomdivision:** Wenn $x_{0}$ Nullstelle ist, teile $P(x)$ durch $(x - x_{0})$.
4. **Wiederholen:** Das Ergebnis hat Grad $n-1$ → weiter faktorisieren, bis ein Rest vom Grad $\\leq 2$ übrig ist, den du mit pq-Formel löst.

**Beispiel:** $P(x) = x^{3} - 6x^{2} + 11x - 6$
- Raten: $P(1) = 1 - 6 + 11 - 6 = 0$. ✓ → $x_{1} = 1$
- Polynomdivision: $P(x) \\div (x - 1) = x^{2} - 5x + 6$
- pq-Formel: $x_{2} = 2$, $x_{3} = 3$

**Horner-Schema:** Eine schnelle, kompakte Methode für Polynomwert-Berechnung und Division — besonders bei Klausuren zeitsparend!`,
      },
      { id: 'alg-2-3-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-3-a' },
      { id: 'alg-2-3-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-3-b' },
      { id: 'alg-2-3-s4', type: 'exercise', title: 'Aufgabe 3', exerciseRef: 'ex-alg-2-3-c' },
      { id: 'alg-2-3-s5', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-3-mastery' },
    ],
  },
  {
    id: 'alg-2-4', unitId: 'alg-unit-2',
    title: 'Ungleichungen',
    order: 4, estimatedMinutes: 15,
    learningGoals: ['Lineare Ungleichungen lösen', 'Betragsungleichungen auflösen', 'Quadratische Ungleichungen mit Vorzeichentabelle lösen'],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-2-4-s1', type: 'explanation-formal', title: 'Ungleichungen — Regeln',
        content: `**Grundregel:** Ungleichungen löst man wie Gleichungen, ABER:

⚠️ **Bei Multiplikation/Division mit negativer Zahl: Zeichen umdrehen!**
$$-2x > 6 \\quad \\Rightarrow \\quad x < -3$$

**Betragsungleichungen** (für $b > 0$):

| Form | Äquivalente Doppel- / Alternativ-Ungleichung |
|---|---|
| $|x - a| < b$ | $a - b < x < a + b$ |
| $|x - a| \\leq b$ | $a - b \\leq x \\leq a + b$ |
| $|x - a| > b$ | $x < a - b \\text{ oder } x > a + b$ |

**Quadratische Ungleichungen:**
1. Nullstellen bestimmen (pq-Formel bzw. Faktorisieren)
2. **Vorzeichentabelle** aufstellen
3. Bereiche ablesen, wo das Vorzeichen stimmt

**Beispiel:** $x^{2} - 4 > 0$
- Faktorisiert: $(x-2)(x+2) > 0$
- Nullstellen: $x = -2, \\; x = 2$
- Vorzeichen des Produkts: $(-\\infty, -2)$: $+$, $\\;\\;(-2, 2)$: $-$, $\\;\\;(2, \\infty)$: $+$
- Lösung: $x < -2$ oder $x > 2$`,
      },
      { id: 'alg-2-4-s2', type: 'exercise', title: 'Aufgabe 1', exerciseRef: 'ex-alg-2-4-a' },
      { id: 'alg-2-4-s3', type: 'exercise', title: 'Aufgabe 2', exerciseRef: 'ex-alg-2-4-b' },
      { id: 'alg-2-4-s4', type: 'exercise', title: 'Aufgabe 3 (Betrag)', exerciseRef: 'ex-alg-2-4-c' },
      { id: 'alg-2-4-s5', type: 'exercise', title: 'Aufgabe 4 (Quadratisch)', exerciseRef: 'ex-alg-2-4-d' },
      { id: 'alg-2-4-s6', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-alg-2-4-mastery' },
    ],
  },
]

export const alg_unit2 = {
  id: 'alg-unit-2',
  title: 'Gleichungen & Ungleichungen',
  order: 2,
  description: 'Lineare und quadratische Gleichungen, Polynomdivision, Ungleichungen',
  lessons: lessons_alg_u2,
  exercises: exercises_alg_u2,
}
