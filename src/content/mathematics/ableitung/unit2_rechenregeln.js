// ── Ableitung Unit 2: Ableitungsregeln im Detail ─────────────────────────────

export const exercises_abl_u2 = {
  // ───────────── Lektion 1: Produktregel ─────────────
  'ex-abl-2-1-a': {
    id: 'ex-abl-2-1-a', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: 'Produktregel: $(f \\cdot g)\' = $',
    options: [
      '$f\' \\cdot g\'$',
      '$f\' \\cdot g + f \\cdot g\'$',
      '$f \\cdot g + f\' \\cdot g\'$',
      '$(f + g) \\cdot (f\' + g\')$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Der häufigste Produktregel-Irrtum: Man darf Produkte *nicht* einfach einzeln ableiten. Test: $f=g=x$, also $fg=x^2$ mit $(x^2)\'=2x$. Aber $f\'\\cdot g\' = 1\\cdot 1 = 1 \\ne 2x$. Die richtige Formel hat zwei Summanden.',
      2: 'Die Vorzeichen bzw. Operationen sind verwirrt: Das erste Summand-Paar müsste *Ableitungen* enthalten, nicht die Funktionen selbst. Richtig: $f\'\\cdot g + f\\cdot g\'$ (in jedem Summand ist *genau eine* Funktion abgeleitet).',
      3: 'Das vermischt Summenregel und Produktregel zu einer falschen Kombination. Summenregel wäre $(f+g)\'=f\'+g\'$, die Produktregel ist aber etwas ganz anderes: zwei Terme, in denen je eine Funktion abgeleitet wird.',
    },
    explanation: `**Ansatz:** Bei Produkten zweier differenzierbarer Funktionen gilt die Produktregel — man darf nicht einfach beide einzeln ableiten!

**Rechnung:** $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$. "Erst den ersten Faktor ableiten (mal zweiter), dann den zweiten Faktor ableiten (mal erster)."

**Probe:** Für $f(x) = x$ und $g(x) = x$ ist $fg = x^{2}$. Produktregel: $(x)' \\cdot x + x \\cdot (x)' = x + x = 2x$. Direkte Potenzregel: $(x^{2})' = 2x$. ✓

**Typischer Fehler:** $(f \\cdot g)' = f' \\cdot g'$ ist *falsch*. Gegenbeispiel: $(x \\cdot x)' = x^{2})' = 2x$, aber $(x)' \\cdot (x)' = 1 \\cdot 1 = 1$.`,
    hints: [
      'Welche Struktur liegt vor? Ein Produkt — Produktregel anwenden.',
      'Regel: $(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$.',
      'Achtung: $(f \\cdot g)\' \\neq f\' \\cdot g\'$ — das ist ein häufiger Fehler.',
    ],
  },
  'ex-abl-2-1-b': {
    id: 'ex-abl-2-1-b', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: '$f(x) = x^{2} \\cdot \\sin(x)$. Was ist $f\'(x)$?',
    options: [
      '$2x \\cdot \\cos(x)$',
      '$2x \\cdot \\sin(x) + x^{2} \\cdot \\cos(x)$',
      '$x^{2} \\cdot \\cos(x) - 2x \\cdot \\sin(x)$',
      '$2x \\cdot \\sin(x) - x^{2} \\cdot \\cos(x)$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Der klassische Produktregel-Fehler: $f\'\\cdot g\'$ statt $f\'g + fg\'$. Hier wurde nur $u\'=2x$ mit $v\'=\\cos x$ multipliziert — die beiden dominanten Summanden $u\'v$ und $uv\'$ fehlen.',
      2: 'Vorzeichenfehler und Summanden vertauscht: Die Produktregel ist *Addition* ($f\'g + fg\'$), nicht Subtraktion. Das Minus gehört in die Quotientenregel, nicht hier. Beide Summanden kommen mit $+$.',
      3: 'Gleiche Struktur wie richtig, aber mit Minus statt Plus — Produktregel ist jedoch ein *Plus*. Zudem wurde der $x^2\\cos x$-Term abgezogen, was keine Regel produziert. Richtig: $2x\\sin x + x^2\\cos x$.',
    },
    explanation: `**Ansatz:** Produkt $u(x) \\cdot v(x)$ mit $u(x) = x^{2}$ und $v(x) = \\sin(x)$. Produktregel.

**Rechnung:**
- $u'(x) = 2x$
- $v'(x) = \\cos x$
- $f'(x) = u' v + u v' = 2x \\cdot \\sin x + x^{2} \\cdot \\cos x$.

**Probe:** Bei $x = \\pi/2$: $f'(\\pi/2) = 2 \\cdot \\pi/2 \\cdot 1 + (\\pi/2)^{2} \\cdot 0 = \\pi \\approx 3{,}14$. Numerisch stimmt das. ✓

**Typischer Fehler:** Nur $u' \\cdot v'$ rechnen (Antwort A, klassischer Produktregel-Fehler).`,
    hints: [
      'Welcher Funktionstyp? Produkt $x^{2} \\cdot \\sin(x)$ — Produktregel.',
      'Regel: $(u \\cdot v)\' = u\' v + u v\'$ mit $u = x^{2}$, $v = \\sin x$.',
      'Ableitungen: $u\' = 2x$, $v\' = \\cos x$.',
    ],
  },
  'ex-abl-2-1-c': {
    id: 'ex-abl-2-1-c', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: '$f(x) = e^{x} \\cdot \\ln(x)$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{e^{x}}{x}$',
      '$e^{x} \\cdot \\ln(x) + \\dfrac{e^{x}}{x}$',
      '$e^{x} \\cdot \\ln(x) + e^{x} \\cdot x$',
      '$\\dfrac{e^{x}}{x} + \\ln(x)$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Das ist nur der *zweite* Summand $e^x\\cdot\\tfrac{1}{x}$. Der erste Summand $e^x\\ln x$ fehlt — vermutlich wurde nur der Term mit abgeleiteten $\\ln$ hingeschrieben und der Term mit abgeleitetem $e^x$ vergessen.',
      2: 'Hier wurde $(\\ln x)\' = x$ falsch gerechnet. Richtig ist $(\\ln x)\' = \\tfrac{1}{x}$ — also Kehrwert, nicht $x$ selbst. Test bei $x=1$: $\\tfrac{1}{1}=1$, nicht $1$... aber bei $x=2$ wäre es $\\tfrac{1}{2}$, nicht $2$.',
      3: 'Zwei Fehler kombiniert: Der erste Summand $e^x\\ln x$ wurde durch $\\tfrac{e^x}{x}$ ersetzt (also die falsche Rolle für $v$), und der zweite Summand reduziert sich auf $\\ln x$ ohne $e^x$-Faktor. Die Produktregel muss konsequent $u\'v + uv\'$ liefern.',
    },
    explanation: `**Ansatz:** Produkt $u(x) = e^{x}$ und $v(x) = \\ln(x)$. Produktregel.

**Rechnung:**
- $u'(x) = e^{x}$, $v'(x) = \\dfrac{1}{x}$
- $f'(x) = e^{x} \\cdot \\ln x + e^{x} \\cdot \\dfrac{1}{x} = e^{x}\\ln x + \\dfrac{e^{x}}{x}$.

Schreibweise zusammengefasst: $f'(x) = e^{x}\\left(\\ln x + \\dfrac{1}{x}\\right)$.

**Probe:** Bei $x = 1$: $f'(1) = e \\cdot 0 + e \\cdot 1 = e \\approx 2{,}72$. ✓ (numerisch bestätigt).

**Typischer Fehler:** $(\\ln x)' = x$ (Antwort C) — falsch, es gilt $(\\ln x)' = 1/x$.`,
    hints: [
      'Welcher Funktionstyp? Produkt $e^{x} \\cdot \\ln x$ — Produktregel.',
      'Regel: $(e^{x})\' = e^{x}$, $(\\ln x)\' = 1/x$.',
      'Rechenschritt: $e^{x} \\cdot \\ln x + e^{x} \\cdot (1/x)$.',
    ],
  },
  'ex-abl-2-1-d': {
    id: 'ex-abl-2-1-d', lessonId: 'abl-2-1', type: 'number-input',
    question: '$f(x) = x \\cdot e^{x}$. Berechne $f\'(1)$ (auf 2 Dezimalstellen).',
    correctValue: 5.44,
    tolerance: 0.05,
    unit: '',
    explanation: `**Ansatz:** Produktregel für $u(x) = x$, $v(x) = e^{x}$.

**Rechnung:**
- $u'(x) = 1$, $v'(x) = e^{x}$
- $f'(x) = 1 \\cdot e^{x} + x \\cdot e^{x} = (1 + x)e^{x}$
- Bei $x = 1$: $f'(1) = 2 \\cdot e \\approx 5{,}436$.

**Probe:** Numerisch $\\dfrac{f(1{,}001) - f(1)}{0{,}001} \\approx 5{,}44$. ✓

**Typischer Fehler:** Nur $e^{x}$ als Ableitung von $x e^{x}$ — dann kommt $e \\approx 2{,}72$ heraus. Produktregel nicht vergessen!`,
    hints: [
      'Welche Regel? Produkt $x \\cdot e^{x}$ — Produktregel.',
      'Regel: $f\'(x) = 1 \\cdot e^{x} + x \\cdot e^{x} = (1+x)e^{x}$.',
      'Einsetzen: $f\'(1) = 2e$.',
    ],
  },
  'ex-abl-2-1-transfer': {
    id: 'ex-abl-2-1-transfer', lessonId: 'abl-2-1', type: 'multiple-choice',
    question: 'Was passiert, wenn man beim Ableiten eines Produkts $f \\cdot g$ fälschlich $(f \\cdot g)\' = f\' \\cdot g\'$ verwendet?',
    options: [
      'Das Ergebnis bleibt korrekt',
      'Man erhält nur den "Eck-Anteil" der Flächenänderung und verliert die beiden dominierenden Streifen-Anteile — das Ergebnis ist fast immer falsch',
      'Das Ergebnis verdoppelt sich',
      'Die Ableitung wird $0$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Genau das stimmt *nicht*. Gegenbeispiel $f=g=x$: korrekt $(x^2)\'=2x$, falsch $f\'g\'=1\\cdot 1=1$. Für $x=2$ müsste $f\'=4$ herauskommen, die falsche Regel liefert aber $1$. Nur in seltenen Spezialfällen (z.B. wenn $f\' g + fg\' = f\'g\'$) stimmt sie zufällig.',
      2: 'Nicht generell: Je nach Funktionen kann $f\'g\'$ auch viel kleiner oder viel größer als $f\'g+fg\'$ sein. Das Ergebnis ist nicht „doppelt" — z.B. bei $f=g=x$ ist die richtige Ableitung *doppelt* so groß wie $f\'g\'$, bei anderen Funktionen ganz anders.',
      3: 'Das stimmt nur in sehr konstruierten Fällen (wenn $f\'g\'=0$, also eine der Ableitungen null ist). Generell ist die Ableitung eines Produkts nicht null — $x^2$ hat Ableitung $2x\\ne 0$ für $x\\ne 0$, nicht $0$.',
    },
    explanation: `**Ansatz:** Geometrische Intuition: Betrachtet man $f \\cdot g$ als Fläche eines Rechtecks mit Seiten $f$ und $g$, setzt sich die Änderung aus drei Teilen zusammen:
- Streifen oben: $f' \\cdot g$ (Seite $f$ wächst, $g$ bleibt)
- Streifen rechts: $f \\cdot g'$ (Seite $g$ wächst, $f$ bleibt)
- Eck: $f' \\cdot g'$ (beide wachsen — verschwindet im Grenzübergang)

**Rechnung:** Die richtige Ableitung $f' g + f g'$ erfasst die beiden dominanten Anteile. Nur $f' g'$ entspricht dem vernachlässigbaren Eck.

**Probe:** Für $f = g = x$: $(x^{2})' = 2x$. Korrekte Produktregel: $1 \\cdot x + x \\cdot 1 = 2x$ ✓. Fälschlicher $f' \\cdot g' = 1 \\cdot 1 = 1$ ✗.

**Transfer:** Dieser Fehler ist der häufigste bei Produktableitungen. Die Regel stammt aus der Tatsache, dass bei infinitesimalen Änderungen der Beitrag $df \\cdot dg$ zweiter Ordnung klein ist und wegfällt.

**Typischer Fehler:** Annehmen, Ableitung "verteilt sich" auf Produkte wie bei Summen. Tut sie *nicht*.`,
    hints: [
      'Denke an das Rechteck mit Seiten $f$ und $g$ und welche Streifen bei kleinen Änderungen dominieren.',
      'Regel: Die Änderung ist $f\'g + fg\'$ — das Eck $f\'g\'$ ist zweiter Ordnung klein.',
      'Teste mit $f = g = x$: $(x^2)\' = 2x$ vs. $f\'g\' = 1$.',
    ],
  },
  'ex-abl-2-1-mastery': {
    id: 'ex-abl-2-1-mastery', lessonId: 'abl-2-1', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = (3x+1) \\cdot \\cos(x)$. Was ist $f\'(x)$?',
    options: [
      '$3\\cos(x) - (3x+1)\\sin(x)$',
      '$3\\cos(x) + (3x+1)\\sin(x)$',
      '$-3\\sin(x)$',
      '$3\\cos(x) \\cdot (-\\sin(x))$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler bei $(\\cos x)\' = -\\sin x$. Hier wurde $(\\cos x)\' = +\\sin x$ gerechnet, also das Minus vergessen. Test bei $x=0$: Richtig $3\\cos 0 - 0 = 3$, falsch $3\\cos 0 + 0 = 3$ (zufällig gleich), aber bei $x=\\pi/2$: richtig $0-(\\tfrac{3\\pi}{2}+1)\\cdot 1 < 0$, falsch $0+(\\tfrac{3\\pi}{2}+1)>0$.',
      2: 'Hier wurde $(3x+1)\'=3$ mit $(\\cos x)\' = -\\sin x$ multipliziert ($f\'\\cdot g\'$-Fehler statt Produktregel). Das ergibt $-3\\sin x$, aber die beiden Hauptterme $3\\cos x$ und $(3x+1)(-\\sin x)$ fehlen.',
      3: 'Das ist das Produkt der beiden Ableitungen $u\' = 3$ und $v\' = -\\sin x$ mal $\\cos x$ — völlig durchmischt. Die Produktregel liefert eine *Summe* zweier Terme, nicht ein dreifaches Produkt.',
    },
    explanation: `**Ansatz:** Produkt $u(x) = 3x+1$, $v(x) = \\cos x$. Produktregel.

**Rechnung:**
- $u'(x) = 3$, $v'(x) = -\\sin x$
- $f'(x) = 3 \\cdot \\cos x + (3x+1) \\cdot (-\\sin x) = 3\\cos x - (3x+1)\\sin x$.

**Probe:** Bei $x = 0$: $f'(0) = 3 \\cdot 1 - 1 \\cdot 0 = 3$. Numerisch $\\approx 3$. ✓

**Typischer Fehler:** $(\\cos x)' = \\sin x$ statt $-\\sin x$ (Antwort B, Vorzeichenfehler).`,
    hints: [
      'Welche Regel? Produktregel mit $u = 3x+1$, $v = \\cos x$.',
      'Regel: $(3x+1)\' = 3$, $(\\cos x)\' = -\\sin x$.',
      'Zusammensetzen mit korrektem Minuszeichen.',
    ],
  },

  // ───────────── Lektion 2: Quotientenregel ─────────────
  'ex-abl-2-2-a': {
    id: 'ex-abl-2-2-a', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: 'Quotientenregel: $\\left(\\dfrac{f}{g}\\right)\' = $',
    options: [
      '$\\dfrac{f\'}{g\'}$',
      '$\\dfrac{f\' \\cdot g - f \\cdot g\'}{g^{2}}$',
      '$\\dfrac{f\' \\cdot g + f \\cdot g\'}{g^{2}}$',
      '$\\dfrac{f \\cdot g\' - f\' \\cdot g}{g^{2}}$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Das analoge falsche Muster wie bei der Produktregel: $\\tfrac{f\'}{g\'}$ würde bedeuten, Zähler und Nenner einzeln ableiten. Test: $f=x^2$, $g=x$, also $\\tfrac{f}{g}=x$ mit Ableitung $1$. Aber $\\tfrac{f\'}{g\'}=\\tfrac{2x}{1}=2x \\ne 1$.',
      2: 'Das ist die *Produktregel* auf den Zähler angewandt ($f\'g+fg\'$), kombiniert mit $g^2$ als Nenner — keine gültige Regel. Die Quotientenregel hat im Zähler ein *Minus*, nicht ein Plus.',
      3: 'Reihenfolge im Zähler vertauscht: Richtig ist $f\'g - fg\'$ (erst Ableitung Zähler mal Nenner, dann minus Zähler mal Ableitung Nenner). Die umgekehrte Reihenfolge liefert das *negative* Ergebnis — klassischer Vorzeichenfehler.',
    },
    explanation: `**Ansatz:** Brüche von Funktionen werden mit der Quotientenregel abgeleitet.

**Rechnung:** $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' \\cdot g - f \\cdot g'}{g^{2}}$ (für $g(x) \\neq 0$).

**Eselsbrücke NAZ minus ZAN durch $N^{2}$:**
- **N**enner mal **A**bleitung des **Z**ählers
- **minus**
- **Z**ähler mal **A**bleitung des **N**enners
- **geteilt durch N**enner **z**um **Q**uadrat

**Typischer Fehler:** $\\dfrac{f'}{g'}$ (Antwort A) ist falsch. Vorzeichen vertauschen (Antwort D) ebenfalls.`,
    hints: [
      'Welche Struktur? Bruch — Quotientenregel.',
      'Regel (NAZ): Nenner $\\times$ Abl. Zähler $-$ Zähler $\\times$ Abl. Nenner, alles durch $N^{2}$.',
      'Reihenfolge im Zähler ist wichtig: erst $f\'g$, dann $-fg\'$.',
    ],
  },
  'ex-abl-2-2-b': {
    id: 'ex-abl-2-2-b', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\dfrac{x}{x+1}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{1}{(x+1)^{2}}$',
      '$\\dfrac{1}{x+1}$',
      '$\\dfrac{x}{(x+1)^{2}}$',
      '$\\dfrac{-1}{(x+1)^{2}}$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Der Nenner $(x+1)^2$ wurde zu $(x+1)$ verkürzt — vermutlich das Quadrat vergessen. Die Quotientenregel hat immer $g^2$ im Nenner, nicht $g$. Test bei $x=0$: richtig $\\tfrac{1}{1}=1$, Antwort B hier $\\tfrac{1}{1}=1$ zufällig gleich; aber bei $x=1$ richtig $\\tfrac{1}{4}$, B wäre $\\tfrac{1}{2}$.',
      2: 'Der Zähler wurde nicht vereinfacht: $(x+1)-x=1$, nicht $x$. Vermutlich nur der erste Term $1\\cdot(x+1)$ übernommen und ohne Subtraktion stehen gelassen, oder Zähler/Nenner durcheinandergebracht.',
      3: 'Vorzeichenfehler: $f\'g - fg\' = 1\\cdot(x+1) - x\\cdot 1 = +1$, nicht $-1$. Vermutlich Reihenfolge vertauscht ($fg\'-f\'g$) und so das Minus reingebracht. Die Funktion $\\tfrac{x}{x+1}$ ist *steigend*, Ableitung also positiv.',
    },
    explanation: `**Ansatz:** Quotientenregel mit $u = x$ (Zähler), $v = x+1$ (Nenner).

**Rechnung:**
- $u' = 1$, $v' = 1$
- $f'(x) = \\dfrac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^{2}} = \\dfrac{x+1-x}{(x+1)^{2}} = \\dfrac{1}{(x+1)^{2}}$.

**Probe:** Bei $x = 0$: $f'(0) = 1/1 = 1$. Numerisch: $\\dfrac{f(0{,}001) - 0}{0{,}001} \\approx 1$. ✓

**Typischer Fehler:** Zähler nicht ausrechnen ($x+1-x \\neq x+1$) oder Vorzeichen vergessen.`,
    hints: [
      'Welche Regel? Bruch $x/(x+1)$ — Quotientenregel.',
      'Regel: $u = x$, $v = x+1$, $u\' = 1$, $v\' = 1$.',
      'Zähler vereinfachen: $1 \\cdot (x+1) - x \\cdot 1 = 1$.',
    ],
  },
  'ex-abl-2-2-c': {
    id: 'ex-abl-2-2-c', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\dfrac{\\sin(x)}{x}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{\\cos(x)}{x}$',
      '$\\dfrac{x\\cos(x) - \\sin(x)}{x^{2}}$',
      '$\\dfrac{\\cos(x) - \\sin(x)}{x^{2}}$',
      '$\\dfrac{x\\cos(x) + \\sin(x)}{x^{2}}$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Quotientenregel nicht angewandt — Zähler und Nenner einzeln abgeleitet: $\\tfrac{(\\sin x)\'}{x\'}=\\tfrac{\\cos x}{1}=\\cos x$... aber durch was geteilt? Hier fehlt der $x$-Abhängigkeits-Term. Richtig ist $\\tfrac{x\\cos x - \\sin x}{x^2}$.',
      2: 'Der Faktor $x$ im ersten Summanden wurde weggelassen: Richtig ist $\\cos x \\cdot x$ (NAZ: Nenner $x$ mal Abl. Zähler $\\cos x$), nicht nur $\\cos x$. Ohne dieses $x$ stimmt die Einheit nicht.',
      3: 'Vorzeichen falsch: Quotientenregel ist *Minus* im Zähler ($f\'g - fg\'$), nicht Plus. Hier wurde $+\\sin x$ statt $-\\sin x$ genommen — klassische Verwechslung mit der Produktregel (die ein Plus hat).',
    },
    explanation: `**Ansatz:** Quotientenregel mit $u = \\sin x$, $v = x$.

**Rechnung:**
- $u' = \\cos x$, $v' = 1$
- $f'(x) = \\dfrac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^{2}} = \\dfrac{x\\cos x - \\sin x}{x^{2}}$.

**Probe:** Bei $x = \\pi$: $f'(\\pi) = \\dfrac{\\pi \\cdot (-1) - 0}{\\pi^{2}} = -\\dfrac{1}{\\pi} \\approx -0{,}318$. ✓

**Typischer Fehler:** Minuszeichen zu Plus machen (Antwort D) oder den Nenner $x^{2}$ vergessen (Antwort A).`,
    hints: [
      'Welche Regel? Bruch $\\sin x / x$ — Quotientenregel.',
      'Regel: $(\\sin x)\' = \\cos x$, $(x)\' = 1$.',
      'NAZ: $\\cos x \\cdot x - \\sin x \\cdot 1$, durch $x^{2}$.',
    ],
  },
  'ex-abl-2-2-d': {
    id: 'ex-abl-2-2-d', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: '$f(x) = \\dfrac{e^{x}}{x^{2}}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{e^{x}}{2x}$',
      '$\\dfrac{e^{x}(x-2)}{x^{3}}$',
      '$\\dfrac{e^{x}(x^{2} - 2x)}{x^{4}}$',
      '$\\dfrac{e^{x} \\cdot x^{2} - 2x \\cdot e^{x}}{x^{4}}$',
    ],
    correctIndex: 3,
    wrongAnswerExplanations: {
      0: 'Quotientenregel nicht angewandt — stattdessen einzeln abgeleitet: $\\tfrac{(e^x)\'}{(x^2)\'} = \\tfrac{e^x}{2x}$. Das entspricht dem klassischen Fehler $\\tfrac{f\'}{g\'}$. Die richtige Formel ist $\\tfrac{f\'g - fg\'}{g^2}$ mit beiden Summanden im Zähler.',
      1: 'Ergebnis ist zwar algebraisch *korrekt* als vereinfachte Form, ABER: Die Frage verlangt die direkte Anwendung der Quotientenregel. Die vereinfachte Form $\\tfrac{e^x(x-2)}{x^3}$ ist zu D äquivalent, aber D ist die unvereinfachte Direktform.',
      2: 'Ergebnis ist ebenfalls algebraisch zu D äquivalent (Zähler ausgeklammert, aber Nenner noch $x^4$), also teilweise gekürzt. D ist die direkte Quotientenregel-Form — hier wurde der Zähler zusammengefasst, aber nicht durch $x^3$ gekürzt.',
    },
    explanation: `**Ansatz:** Quotientenregel mit $u = e^{x}$, $v = x^{2}$.

**Rechnung:**
- $u' = e^{x}$, $v' = 2x$
- $f'(x) = \\dfrac{e^{x} \\cdot x^{2} - e^{x} \\cdot 2x}{x^{4}} = \\dfrac{e^{x}(x^{2} - 2x)}{x^{4}} = \\dfrac{e^{x}(x-2)}{x^{3}}$.

Alle drei Formen (C, D und die gekürzte in B) sind mathematisch äquivalent — D ist die direkt aus der Quotientenregel.

**Probe:** Bei $x = 1$: $f'(1) = \\dfrac{e \\cdot 1 - 2e}{1} = -e \\approx -2{,}72$. ✓

**Typischer Fehler:** $(x^{2})' = x$ statt $2x$.`,
    hints: [
      'Welche Regel? Quotientenregel mit $u = e^{x}$, $v = x^{2}$.',
      'Regel: $(e^{x})\' = e^{x}$, $(x^{2})\' = 2x$.',
      'Direktes Ergebnis (ohne Kürzen): $\\dfrac{e^{x} x^{2} - 2x e^{x}}{x^{4}}$.',
    ],
  },
  'ex-abl-2-2-transfer': {
    id: 'ex-abl-2-2-transfer', lessonId: 'abl-2-2', type: 'multiple-choice',
    question: 'Warum ist die Quotientenregel im Grunde nur eine Umformulierung der Produktregel?',
    options: [
      'Weil $\\dfrac{f}{g} = f \\cdot g^{-1}$ — man kann Produkt- und Kettenregel kombinieren und erhält dieselbe Formel',
      'Weil Quotienten keine Ableitung haben',
      'Weil $g$ in jedem Fall $1$ ist',
      'Das stimmt nicht — es sind zwei unabhängige Regeln',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Falsch: Quotienten $\\tfrac{f}{g}$ sind auf dem Definitionsbereich (wo $g\\ne 0$) ganz normal differenzierbar — schließlich gibt es ja die Quotientenregel, die überall anwendbar ist, wo $g(x)\\ne 0$.',
      2: 'Nein, $g$ kann beliebig sein (nur $g\\ne 0$ wird verlangt). Wäre $g=1$ identisch, bräuchte man keine Quotientenregel. Die Frage gilt für allgemeine Quotienten wie $\\tfrac{\\sin x}{x^2+1}$, wo $g$ eine echte Funktion ist.',
      3: 'Doch, die Herleitung $\\tfrac{f}{g} = f\\cdot g^{-1}$ + Produkt- und Kettenregel liefert exakt die Quotientenregel. Viele Lehrbücher stellen die Quotientenregel deshalb als Korollar der Produktregel dar — sie ist keine „eigenständige Entdeckung".',
    },
    explanation: `**Ansatz:** Division lässt sich als Multiplikation mit dem Kehrwert schreiben: $\\dfrac{f}{g} = f \\cdot g^{-1}$.

**Rechnung:** Mit Produkt- und Kettenregel:
$$\\left(\\frac{f}{g}\\right)' = (f \\cdot g^{-1})' = f' g^{-1} + f \\cdot (-1) g^{-2} g' = \\frac{f'}{g} - \\frac{f g'}{g^{2}} = \\frac{f'g - f g'}{g^{2}}.$$

Genau die Quotientenregel.

**Probe:** Für $f(x) = x$, $g(x) = x+1$: Produktregelweg ergibt $1 \\cdot (x+1)^{-1} + x \\cdot (-1)(x+1)^{-2} \\cdot 1 = \\dfrac{1}{x+1} - \\dfrac{x}{(x+1)^{2}} = \\dfrac{1}{(x+1)^{2}}$. Quotientenregel liefert dasselbe. ✓

**Transfer:** Diese Äquivalenz erklärt, warum man Quotienten auch mit Produktregel behandeln kann — manchmal ist es rechnerisch einfacher, besonders wenn man schon die Kettenregel sicher beherrscht. Kritisch bleibt: $g(x) \\neq 0$ im betrachteten Bereich.

**Typischer Fehler:** Die Quotientenregel als neuen "mysteriösen" Mechanismus zu sehen, statt als Kombination bereits bekannter Regeln.`,
    hints: [
      'Wie lässt sich Division durch Multiplikation ausdrücken?',
      'Regel: $\\dfrac{f}{g} = f \\cdot g^{-1}$. Produktregel + Kettenregel auf $g^{-1}$.',
      'Rechne $(f \\cdot g^{-1})\' = f\' g^{-1} + f \\cdot (-1) g^{-2} g\'$ und vereinfache.',
    ],
  },
  'ex-abl-2-2-mastery': {
    id: 'ex-abl-2-2-mastery', lessonId: 'abl-2-2', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$. Leite mit der Quotientenregel ab. $f\'(x) = $',
    options: [
      '$\\dfrac{1}{\\cos^{2}(x)}$',
      '$\\dfrac{1}{\\sin^{2}(x)}$',
      '$\\dfrac{\\cos^{2}(x) + \\sin^{2}(x)}{\\cos(x)}$',
      '$-\\dfrac{1}{\\cos^{2}(x)}$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Im Nenner steht $\\sin^2 x$ statt $\\cos^2 x$ — vermutlich $u$ und $v$ verwechselt (Zähler/Nenner vertauscht). $\\tan x = \\tfrac{\\sin x}{\\cos x}$, also $v=\\cos x$, damit $v^2 = \\cos^2 x$ im Nenner.',
      2: 'Unvereinfacht stehengelassen: $\\sin^2+\\cos^2 = 1$ (Pythagoras), aber im Nenner muss $\\cos^2 x$ stehen, nicht $\\cos x$. Hier wurde vergessen zu quadrieren, und der Zähler wurde nicht zusammengefasst.',
      3: 'Vorzeichenfehler: Das Minus aus $(\\cos x)\' = -\\sin x$ wird bei der Quotientenregel zu einem *Plus* (minus mal minus). Im Zähler: $\\cos^2 x - \\sin x\\cdot(-\\sin x) = \\cos^2 x + \\sin^2 x = +1$, nicht $-1$.',
    },
    explanation: `**Ansatz:** $\\tan x$ als Quotient $\\sin x / \\cos x$. Quotientenregel.

**Rechnung:**
- $u = \\sin x$, $v = \\cos x$
- $u' = \\cos x$, $v' = -\\sin x$
- $f'(x) = \\dfrac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{\\cos^{2} x + \\sin^{2} x}{\\cos^{2} x} = \\dfrac{1}{\\cos^{2} x}$.

Dabei wurde $\\sin^{2} x + \\cos^{2} x = 1$ (Pythagoras) genutzt. Alternative Form: $1 + \\tan^{2} x$.

**Probe:** Bei $x = 0$: $f'(0) = 1/\\cos^{2} 0 = 1$. Tangens steigt bei $0$ mit Steigung $1$. ✓

**Typischer Fehler:** Das Minus aus $(\\cos x)' = -\\sin x$ falsch behandeln — es wird in der Quotientenregel zu Plus.`,
    hints: [
      'Welche Regel? Quotient $\\sin x / \\cos x$ — Quotientenregel.',
      'Regel: $(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$.',
      'Nach Vereinfachung pythagoräisch: $\\sin^{2} + \\cos^{2} = 1$.',
    ],
  },

  // ───────────── Lektion 3: Kettenregel — Schritt für Schritt ─────────────
  'ex-abl-2-3-a': {
    id: 'ex-abl-2-3-a', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: 'Kettenregel: Bei $f(x) = \\sin(3x^{2})$ — was ist die äußere, was die innere Funktion?',
    options: [
      'Äußere: $3x^{2}$, Innere: $\\sin$',
      'Äußere: $\\sin$, Innere: $3x^{2}$',
      'Äußere: $x^{2}$, Innere: $3\\sin$',
      'Äußere: $3$, Innere: $\\sin(x^{2})$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Vertauscht: Die äußere Funktion ist die *zuletzt ausgeführte* Operation — bei $\\sin(3x^2)$ wird zuerst $3x^2$ berechnet, dann $\\sin$ angewandt. Also ist $\\sin$ äußere, $3x^2$ innere (nicht umgekehrt).',
      2: 'Willkürliche Zerlegung: $x^2$ als äußere und $3\\sin$ als innere ergibt keinen Sinn — das würde $(3\\sin x)^2$ bedeuten, nicht $\\sin(3x^2)$. Die Zerlegung muss der *Klammerstruktur* folgen.',
      3: '$3$ ist eine *Konstante* und keine Funktion — kann also nicht die äußere Funktion sein. Außerdem wäre $\\sin(x^2)$ bereits selbst verkettet. Die korrekte Zerlegung ist eindeutig durch die Klammer vorgegeben: außen $\\sin(\\cdot)$, innen $3x^2$.',
    },
    explanation: `**Ansatz:** Die *äußere* Funktion ist die, die zuletzt ausgeführt wird (die "äußerste Klammer"). Die *innere* ist das Argument.

**Rechnung:** Bei $\\sin(3x^{2})$:
- Innere Funktion: $u = 3x^{2}$ (wird zuerst berechnet)
- Äußere Funktion: $\\sin(u)$ (wird danach auf das Ergebnis angewendet)

Ableitung: $f'(x) = \\cos(3x^{2}) \\cdot 6x = 6x\\cos(3x^{2})$.

**Probe:** Bei $x = 0$: $6 \\cdot 0 \\cdot 1 = 0$. $f(x) = \\sin(3x^{2})$ hat Minimum bei $x=0$ → Steigung $0$. ✓

**Typischer Fehler:** Äußere und innere vertauschen — zerstört die Ableitung vollständig.`,
    hints: [
      'Welche Funktion wird *zuletzt* ausgeführt? Das ist die äußere.',
      'Regel: Äußere = letzte Operation, innere = Argument.',
      'Bei $\\sin(3x^{2})$: erst $3x^{2}$ berechnen, dann $\\sin$ anwenden $\\Rightarrow$ $\\sin$ ist äußere.',
    ],
  },
  'ex-abl-2-3-b': {
    id: 'ex-abl-2-3-b', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = (5x^{3} - 2x)^{4}$. Was ist $f\'(x)$?',
    options: [
      '$4(5x^{3} - 2x)^{3}$',
      '$4(15x^{2} - 2)(5x^{3} - 2x)^{3}$',
      '$4(5x^{3} - 2x)^{3} \\cdot (15x^{2} - 2)$',
      '$(20x^{3} - 8x)^{3}$',
    ],
    correctIndex: 2,
    wrongAnswerExplanations: {
      0: 'Innere Ableitung $(5x^3-2x)\' = 15x^2-2$ vergessen. Nur die äußere Potenzregel $4u^3$ angewandt: $4(5x^3-2x)^3$. Der Faktor der inneren Ableitung fehlt — die Kettenregel ist ein *Produkt*.',
      1: 'Diese Antwort ist mathematisch korrekt, äquivalent zu C: $4(15x^2-2)(5x^3-2x)^3 = 4(5x^3-2x)^3\\cdot(15x^2-2)$. Nur die Reihenfolge der Faktoren unterscheidet sich — Multiplikation ist kommutativ, also gleich.',
      3: 'Hier wurde die innere Funktion *in* die äußere gezogen: $(5x^3-2x)^4$ zu $(20x^3-8x)^3$ mit $\\cdot 4$ durchmultipliziert wäre komplett falsch. $(a)^4$ vs. $(4a)^3$ sind ganz unterschiedliche Ausdrücke — die Kettenregel funktioniert nicht so.',
    },
    explanation: `**Ansatz:** Verkettung: außen $u^{4}$, innen $5x^{3}-2x$. Kettenregel.

**Rechnung:**
- Äußere: $(u^{4})' = 4u^{3}$, also $4(5x^{3}-2x)^{3}$.
- Innere: $(5x^{3}-2x)' = 15x^{2} - 2$.
- Kettenregel: $f'(x) = 4(5x^{3}-2x)^{3} \\cdot (15x^{2}-2)$.

Antworten B und C sind äquivalent — nur Reihenfolge der Faktoren unterschiedlich.

**Probe:** Bei $x=1$: $f'(1) = 4 \\cdot 3^{3} \\cdot 13 = 4 \\cdot 27 \\cdot 13 = 1404$. ✓

**Typischer Fehler:** Antwort A vergisst die innere Ableitung. Antwort D potenziert die innere Ableitung fälschlich.`,
    hints: [
      'Welche Struktur? Verkettung $u^{4}$ mit $u = 5x^{3}-2x$ — Kettenregel.',
      'Regel: Äußere $(u^{4})\' = 4u^{3}$, innere $(5x^{3}-2x)\' = 15x^{2} - 2$.',
      'Produkt bilden: $4(5x^{3}-2x)^{3} \\cdot (15x^{2}-2)$.',
    ],
  },
  'ex-abl-2-3-c': {
    id: 'ex-abl-2-3-c', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = e^{\\sin(x)}$. Was ist $f\'(x)$?',
    options: [
      '$e^{\\cos(x)}$',
      '$\\cos(x) \\cdot e^{\\sin(x)}$',
      '$e^{\\sin(x)} \\cdot \\sin(x)$',
      '$\\cos(x) \\cdot e^{\\cos(x)}$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Der Exponent wurde abgeleitet: Bei $e^u$ bleibt $u$ im Exponenten *stehen*, nicht zu $u\'$. $(e^{\\sin x})\' = e^{\\sin x}\\cdot\\cos x$, *nicht* $e^{\\cos x}$. Analog zu $(e^{3x})\'=3e^{3x}$, nicht $e^3$.',
      2: 'Innere Ableitung falsch: $(\\sin x)\' = \\cos x$, nicht $\\sin x$. Hier wurde einfach die innere Funktion kopiert statt abgeleitet. Der Faktor bei der Kettenregel muss die *Ableitung* der inneren Funktion sein.',
      3: 'Beide Fehler zusammen: Der Exponent wurde fälschlich abgeleitet (zu $\\cos x$) *und* die innere Ableitung wurde als $\\cos x$ richtig erkannt, aber die äußere Ableitung ist falsch. $(e^u)\' = e^u$ — $u$ bleibt im Exponenten erhalten.',
    },
    explanation: `**Ansatz:** Verkettung: außen $e^{u}$, innen $\\sin x$. Kettenregel.

**Rechnung:**
- Äußere: $(e^{u})' = e^{u}$, also $e^{\\sin x}$.
- Innere: $(\\sin x)' = \\cos x$.
- Kettenregel: $f'(x) = e^{\\sin x} \\cdot \\cos x = \\cos x \\cdot e^{\\sin x}$.

**Probe:** Bei $x = 0$: $\\cos 0 \\cdot e^{0} = 1 \\cdot 1 = 1$. ✓

**Typischer Fehler:** Antwort A behandelt $e^{u}$ falsch — der Exponent bleibt "$\\sin x$", nicht "$\\cos x$".`,
    hints: [
      'Welche Struktur? Verkettung $e^{(\\ldots)}$ mit $\\sin x$ innen.',
      'Regel: $(e^{u})\' = e^{u}$ (Exponent bleibt!), $(\\sin x)\' = \\cos x$.',
      'Kettenregel: $e^{\\sin x} \\cdot \\cos x$.',
    ],
  },
  'ex-abl-2-3-d': {
    id: 'ex-abl-2-3-d', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: '$f(x) = \\ln(x^{2} + 1)$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{1}{x^{2} + 1}$',
      '$\\dfrac{2x}{x^{2} + 1}$',
      '$\\dfrac{x}{x^{2} + 1}$',
      '$\\dfrac{2}{x^{2} + 1}$',
    ],
    correctIndex: 1,
    wrongAnswerExplanations: {
      0: 'Innere Ableitung $(x^2+1)\' = 2x$ vergessen. Nur $(\\ln u)\' = \\tfrac{1}{u}$ eingesetzt ergibt $\\tfrac{1}{x^2+1}$ — dabei fehlt der Faktor $2x$ aus der Kettenregel. Test bei $x=1$: richtig $\\tfrac{2}{2}=1$, A gibt $\\tfrac{1}{2}$.',
      2: 'Der Faktor $2$ aus der inneren Ableitung wurde halbiert oder vergessen: $(x^2+1)\' = 2x$, nicht $x$. Vermutlich Potenzregel nicht korrekt angewandt — Exponent $2$ wandert als Vorfaktor nach vorn.',
      3: 'Das $x$ aus der inneren Ableitung fehlt: $(x^2)\' = 2x$ (Vorfaktor *und* Variable), nicht nur $2$. Die Potenzregel reduziert den Exponenten von $2$ auf $1$, und $x^1 = x$ muss erhalten bleiben.',
    },
    explanation: `**Ansatz:** Verkettung: außen $\\ln u$, innen $x^{2}+1$. Kettenregel.

**Rechnung:**
- Äußere: $(\\ln u)' = 1/u$, also $\\dfrac{1}{x^{2}+1}$.
- Innere: $(x^{2}+1)' = 2x$.
- Kettenregel: $f'(x) = \\dfrac{1}{x^{2}+1} \\cdot 2x = \\dfrac{2x}{x^{2}+1}$.

**Probe:** Bei $x = 1$: $f'(1) = 2/2 = 1$. Numerisch $\\dfrac{\\ln(1{,}001^{2}+1) - \\ln 2}{0{,}001} \\approx 1$. ✓

**Typischer Fehler:** Innere Ableitung ganz weglassen (Antwort A) oder falsch berechnen.`,
    hints: [
      'Welche Struktur? $\\ln$ einer Funktion — Kettenregel.',
      'Regel: $(\\ln u)\' = 1/u$, innere $(x^{2}+1)\' = 2x$.',
      'Rechenschritt: $\\dfrac{1}{x^{2}+1} \\cdot 2x$.',
    ],
  },
  'ex-abl-2-3-e': {
    id: 'ex-abl-2-3-e', lessonId: 'abl-2-3', type: 'number-input',
    question: '$f(x) = \\sqrt{4x+1} = (4x+1)^{1/2}$. Berechne $f\'(2)$ (auf 2 Dezimalstellen).',
    correctValue: 0.67,
    tolerance: 0.02,
    unit: '',
    explanation: `**Ansatz:** Verkettung: außen $u^{1/2}$, innen $4x+1$. Kettenregel.

**Rechnung:**
- Äußere: $(u^{1/2})' = \\tfrac{1}{2} u^{-1/2}$.
- Innere: $(4x+1)' = 4$.
- Kettenregel: $f'(x) = \\tfrac{1}{2}(4x+1)^{-1/2} \\cdot 4 = \\dfrac{2}{\\sqrt{4x+1}}$.
- Bei $x = 2$: $f'(2) = \\dfrac{2}{\\sqrt{9}} = \\dfrac{2}{3} \\approx 0{,}667$.

**Probe:** Numerisch $\\dfrac{f(2{,}001) - f(2)}{0{,}001} \\approx 0{,}667$. ✓

**Typischer Fehler:** Den Faktor $4$ (innere Ableitung) vergessen — Ergebnis wäre $1/(2\\sqrt{9}) = 1/6$, also $\\approx 0{,}17$.`,
    hints: [
      'Welche Struktur? Wurzel — als Potenz $u^{1/2}$ schreiben und Kettenregel.',
      'Regel: Äußere $(u^{1/2})\' = \\tfrac{1}{2} u^{-1/2}$, innere $(4x+1)\' = 4$.',
      'Einsetzen: bei $x=2$ wird $\\sqrt{9} = 3$.',
    ],
  },
  'ex-abl-2-3-transfer': {
    id: 'ex-abl-2-3-transfer', lessonId: 'abl-2-3', type: 'multiple-choice',
    question: 'Bei mehrfach verketteten Funktionen wie $f(x) = e^{\\cos(3x)}$ — warum muss man die Kettenregel *mehrfach* anwenden, nicht nur einmal?',
    options: [
      'Weil jede zusätzliche Schicht ihren eigenen "Geschwindigkeitsfaktor" (innere Ableitung) beiträgt und alle Faktoren multiplikativ wirken',
      'Weil Exponentialfunktionen schwierig sind',
      'Weil die äußere Ableitung verschwindet',
      'Das stimmt nicht — einmaliges Anwenden reicht',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Die Schwierigkeit der Funktion ist nicht der Grund — die Kettenregel-Logik ist bei $e^{\\cos(3x)}$ genauso wie bei Polynom-Verkettungen. Das „mehrfach anwenden" liegt an der Struktur (drei Schichten), nicht an der Exponentialfunktion an sich.',
      2: 'Die äußere Ableitung verschwindet nicht — $(e^u)\' = e^u$ bleibt bestehen und trägt den Faktor $e^{\\cos(3x)}$ bei. Hier wird nichts null oder verloren; jeder Faktor ist endlich und wichtig.',
      3: 'Nein, bei Mehrfachverkettung reicht einmaliges Anwenden *nicht*. Gegenbeispiel $e^{\\cos(3x)}$: Ohne doppelte Kettenregel fehlt der Faktor $3$ (innerste Ableitung), und das Ergebnis ist um Faktor $3$ zu klein.',
    },
    explanation: `**Ansatz:** Jede Schicht einer Verkettung transformiert ihr Argument mit eigener Rate — diese Raten multiplizieren sich.

**Rechnung:** Für $f(x) = e^{\\cos(3x)}$ sind drei Schichten zu erkennen:
- Äußerste: $e^{w}$ mit $w = \\cos(3x)$, Ableitung $e^{w}$.
- Mittlere: $\\cos v$ mit $v = 3x$, Ableitung $-\\sin v$.
- Innerste: $3x$, Ableitung $3$.

Produkt aller: $f'(x) = e^{\\cos(3x)} \\cdot (-\\sin(3x)) \\cdot 3 = -3\\sin(3x) e^{\\cos(3x)}$.

**Probe:** Bei $x=0$: $-3 \\cdot 0 \\cdot e^{1} = 0$. Da $\\cos(3x)$ bei $x=0$ ein Maximum hat, ist $e^{\\cos(3x)}$ dort ebenfalls maximal $\\Rightarrow$ Steigung $0$. ✓

**Transfer:** Die Kettenregel ist "assoziativ" über Schichten: $[f_{3}(f_{2}(f_{1}(x)))]' = f_{3}'(\\ldots) \\cdot f_{2}'(\\ldots) \\cdot f_{1}'(x)$. Die Zahl der Faktoren entspricht der Tiefe der Verkettung — nützlich in Physik (Substitutionsketten), Regelungstechnik (Kaskadenregelung) und Neuronale Netze (Backpropagation).

**Typischer Fehler:** Nur die äußerste Schicht "ableiten" und alle inneren Ableitungen auf $1$ setzen — führt zu fehlenden Faktoren.`,
    hints: [
      'Wie viele Funktionsschichten hat $e^{\\cos(3x)}$?',
      'Regel: $[f_{3}(f_{2}(f_{1}))]\' = f_{3}\' \\cdot f_{2}\' \\cdot f_{1}\'$ — Produkt aller innerer Ableitungen.',
      'Zähle: $e^{u}$, $\\cos v$, $3x$ — drei Schichten, drei Faktoren.',
    ],
  },
  'ex-abl-2-3-mastery': {
    id: 'ex-abl-2-3-mastery', lessonId: 'abl-2-3', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] Doppelte Kettenregel: $f(x) = e^{\\cos(3x)}$. Was ist $f\'(x)$?',
    options: [
      '$-3\\sin(3x) \\cdot e^{\\cos(3x)}$',
      '$3\\cos(3x) \\cdot e^{\\cos(3x)}$',
      '$-\\sin(3x) \\cdot e^{\\cos(3x)}$',
      '$e^{-\\sin(3x)} \\cdot 3$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Vorzeichenfehler bei $(\\cos)\' = -\\sin$: Hier wurde $(\\cos v)\' = +\\cos v$ genommen. Richtig ist Minus, und die Funktion wechselt von Cosinus zu Sinus — also $-\\sin(3x)\\cdot 3 = -3\\sin(3x)$, nicht $3\\cos(3x)$.',
      2: 'Innerste Ableitung $(3x)\' = 3$ vergessen. Nur zwei Schichten berücksichtigt: $e^{\\cos(3x)}\\cdot(-\\sin(3x))$. Der Faktor $3$ aus der dritten Schicht fehlt — klassischer Fehler bei Dreifach-Verkettung.',
      3: 'Der Exponent von $e$ wurde fälschlich abgeleitet zu $-\\sin(3x)$. Bei $(e^u)\' = e^u$ bleibt $u$ im Exponenten *unverändert*, und $u\'$ kommt als separater Faktor dazu. Richtig: $e^{\\cos(3x)}$ bleibt, *mal* $(-\\sin(3x))\\cdot 3$.',
    },
    explanation: `**Ansatz:** Drei Schichten: $e^{u}$ mit $u = \\cos(v)$ mit $v = 3x$. Kettenregel mehrfach.

**Rechnung:**
- Äußerste: $(e^{u})' = e^{u}$ $\\Rightarrow$ $e^{\\cos(3x)}$.
- Mittlere: $(\\cos v)' = -\\sin v$ $\\Rightarrow$ $-\\sin(3x)$.
- Innerste: $(3x)' = 3$.
- Produkt: $f'(x) = e^{\\cos(3x)} \\cdot (-\\sin(3x)) \\cdot 3 = -3\\sin(3x) \\cdot e^{\\cos(3x)}$.

**Probe:** Bei $x = \\pi/6$: $\\cos(3 \\cdot \\pi/6) = \\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$. $f'(\\pi/6) = -3 \\cdot 1 \\cdot e^{0} = -3$. ✓

**Typischer Fehler:** Nur ein Faktor statt drei — z.B. Antwort C vergisst den Faktor $3$.`,
    hints: [
      'Welche Struktur? Drei Schichten $e^{u}$, $\\cos v$, $3x$ — Kettenregel dreifach.',
      'Regel: Produkt aller Ableitungen: $e^{u} \\cdot (-\\sin v) \\cdot 3$.',
      'Vorzeichen beachten: Minus aus $(\\cos)\' = -\\sin$.',
    ],
  },

  // ───────────── Lektion 4: Gemischte Regeln ─────────────
  'ex-abl-2-4-a': {
    id: 'ex-abl-2-4-a', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = x^{2} \\cdot e^{3x}$. Welche Regeln brauchst du?',
    options: [
      'Nur Kettenregel',
      'Nur Produktregel',
      'Produktregel + Kettenregel',
      'Quotientenregel',
    ],
    correctIndex: 2,
    wrongAnswerExplanations: {
      0: 'Nur Kettenregel reicht nicht — $f$ ist primär ein *Produkt* $x^2\\cdot e^{3x}$ (zwei Faktoren durch Multiplikation verbunden), nicht eine einzelne Verkettung. Kettenregel wird *zusätzlich* für $(e^{3x})\'$ gebraucht.',
      1: 'Nur Produktregel übersieht die Verkettung in $e^{3x}$: $(e^{3x})\' = 3e^{3x}$ (Kettenregel, nicht nur $e^{3x}$). Ohne Kettenregel fehlt der Faktor $3$ — klassischer Fehler bei Exponentialfunktionen mit Faktor im Exponenten.',
      3: 'Kein Quotient vorhanden: $x^2\\cdot e^{3x}$ ist ein Produkt (Multiplikation), keine Division. Quotientenregel wäre nur bei $\\tfrac{x^2}{e^{3x}}$ oder $\\tfrac{e^{3x}}{x^2}$ nötig.',
    },
    explanation: `**Ansatz:** Äußerste Struktur bestimmt die primäre Regel. Innerhalb braucht man ggf. weitere.

**Rechnung:** $f$ ist ein Produkt $x^{2} \\cdot e^{3x}$ — Produktregel als Haupt. Für $(e^{3x})'$ braucht man zusätzlich die Kettenregel ($u = 3x$, innere Ableitung $3$): $(e^{3x})' = 3e^{3x}$.

**Probe:** Ableitung komplett: $f'(x) = 2x \\cdot e^{3x} + x^{2} \\cdot 3e^{3x}$.

**Typischer Fehler:** Nur Produktregel anwenden und $(e^{3x})' = e^{3x}$ ohne Kettenregel schreiben — fehlt der Faktor $3$.`,
    hints: [
      'Welche Struktur liegt vor? Produkt von zwei Funktionen, wobei eine verkettet ist.',
      'Regel: Primär Produktregel (äußerste Struktur). Für $e^{3x}$ zusätzlich Kettenregel.',
      'Zwei Regeln kombinieren: Produkt + Kette.',
    ],
  },
  'ex-abl-2-4-b': {
    id: 'ex-abl-2-4-b', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = x^{2} \\cdot e^{3x}$. Was ist $f\'(x)$?',
    options: [
      '$2x \\cdot e^{3x} + 3x^{2} \\cdot e^{3x}$',
      '$6x \\cdot e^{3x}$',
      '$2x \\cdot 3e^{3x}$',
      '$(2x + 3x^{2}) \\cdot e^{3x}$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Produktregel komplett ignoriert: Hier wurde $x^2\\cdot e^{3x}$ so behandelt, als wäre es eine einzelne verkettete Funktion. $6x\\cdot e^{3x}$ entspricht etwa $(x^2)\'\\cdot(3e^{3x})$, also nur *ein* Summand statt zweien — die Produktregel fehlt.',
      2: 'Klassischer Produktregel-Fehler: nur $u\'\\cdot v\' = 2x\\cdot 3e^{3x}$ gerechnet. Die beiden Hauptsummanden $u\'v = 2xe^{3x}$ und $uv\' = x^2\\cdot 3e^{3x}$ fehlen — bzw. einer ist übrig geblieben.',
      3: 'Ergebnis ist *korrekt* und zu A äquivalent: $2xe^{3x} + 3x^2e^{3x} = (2x+3x^2)e^{3x}$. Das ist nur die ausgeklammerte Form, beide Antworten sind mathematisch gleich.',
    },
    explanation: `**Ansatz:** Produktregel + Kettenregel (siehe vorherige Aufgabe).

**Rechnung:**
- $(x^{2})' = 2x$
- $(e^{3x})' = 3e^{3x}$ (Kettenregel)
- $f'(x) = 2x \\cdot e^{3x} + x^{2} \\cdot 3e^{3x}$.

Ausklammern: $= e^{3x}(2x + 3x^{2}) = xe^{3x}(2 + 3x)$. Antworten A und D sind äquivalent (A direkt, D ausgeklammert).

**Probe:** Bei $x = 0$: $f'(0) = 0 + 0 = 0$. Tatsächlich hat $x^{2}e^{3x}$ bei $x=0$ ein Minimum mit Wert $0$. ✓

**Typischer Fehler:** Nur $u' \\cdot v' = 2x \\cdot 3e^{3x}$ (Antwort C) — klassischer Produktregel-Fehler.`,
    hints: [
      'Welche Regeln? Produktregel mit $u = x^{2}$, $v = e^{3x}$.',
      'Regel: $u\' = 2x$. Für $v\' = (e^{3x})\'$ Kettenregel $\\Rightarrow 3e^{3x}$.',
      'Zusammensetzen: $2x e^{3x} + x^{2} \\cdot 3e^{3x}$.',
    ],
  },
  'ex-abl-2-4-c': {
    id: 'ex-abl-2-4-c', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: '$f(x) = \\dfrac{\\sin(2x)}{x+1}$. Was ist $f\'(x)$?',
    options: [
      '$\\dfrac{2\\cos(2x)(x+1) - \\sin(2x)}{(x+1)^{2}}$',
      '$\\dfrac{2\\cos(2x)}{x+1}$',
      '$\\dfrac{\\cos(2x)(x+1) - \\sin(2x)}{(x+1)^{2}}$',
      '$\\dfrac{2\\cos(2x) - \\sin(2x)}{(x+1)^{2}}$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Quotientenregel komplett ignoriert: Hier wurde einfach Zähler abgeleitet ($2\\cos(2x)$) und durch den unveränderten Nenner geteilt. Das ist das falsche $\\tfrac{f\'}{g}$-Muster — richtig ist $\\tfrac{f\'g - fg\'}{g^2}$.',
      2: 'Innere Ableitung im Zähler vergessen: $(\\sin(2x))\' = 2\\cos(2x)$ (Kettenregel mit Faktor $2$), nicht $\\cos(2x)$. Ohne den Faktor $2$ ist der erste Term um die Hälfte zu klein.',
      3: 'Im Zähler fehlt der Faktor $(x+1)$ beim ersten Term: Die Quotientenregel multipliziert $u\'$ mit $v = (x+1)$ — nicht nur $u\'$. Richtig: $2\\cos(2x)\\cdot(x+1)$, nicht nur $2\\cos(2x)$.',
    },
    explanation: `**Ansatz:** Quotientenregel (äußerste Struktur ist Bruch) + Kettenregel (für $\\sin(2x)$).

**Rechnung:**
- Zähler $u = \\sin(2x)$, $u' = 2\\cos(2x)$ (Kettenregel).
- Nenner $v = x+1$, $v' = 1$.
- Quotientenregel: $f'(x) = \\dfrac{2\\cos(2x) \\cdot (x+1) - \\sin(2x) \\cdot 1}{(x+1)^{2}}$.

**Probe:** Bei $x = 0$: $f'(0) = \\dfrac{2 \\cdot 1 \\cdot 1 - 0}{1} = 2$. ✓

**Typischer Fehler:** Antwort C vergisst die innere Ableitung bei $(\\sin(2x))'$ (Faktor $2$).`,
    hints: [
      'Welche Struktur? Bruch — Quotientenregel primär.',
      'Regel: Für den Zähler $\\sin(2x)$ zusätzlich Kettenregel: $(\\sin(2x))\' = 2\\cos(2x)$.',
      'NAZ: $2\\cos(2x)(x+1) - \\sin(2x) \\cdot 1$, alles durch $(x+1)^{2}$.',
    ],
  },
  'ex-abl-2-4-d': {
    id: 'ex-abl-2-4-d', lessonId: 'abl-2-4', type: 'number-input',
    question: '$f(x) = (x+1)^{3} \\cdot \\ln(x)$. Berechne $f\'(1)$ (auf 1 Dezimalstelle).',
    correctValue: 8.0,
    tolerance: 0.1,
    unit: '',
    explanation: `**Ansatz:** Produktregel + Kettenregel.

**Rechnung:**
- $u = (x+1)^{3}$, $u' = 3(x+1)^{2}$ (Kettenregel).
- $v = \\ln x$, $v' = 1/x$.
- $f'(x) = 3(x+1)^{2} \\cdot \\ln x + (x+1)^{3} \\cdot \\dfrac{1}{x}$.
- Bei $x = 1$: $\\ln 1 = 0$ vereinfacht den ersten Summanden auf $0$. Nur der zweite bleibt: $f'(1) = 2^{3} \\cdot 1 = 8$.

**Probe:** Numerisch: $\\dfrac{f(1{,}001) - f(1)}{0{,}001} \\approx 8{,}00$. ✓

**Typischer Fehler:** $\\ln 1 \\neq 0$ annehmen oder $(x+1)^{3}$ als $x^{3}+1$ behandeln.`,
    hints: [
      'Welche Regeln? Produktregel + Kettenregel.',
      'Regel: $f\'(x) = 3(x+1)^{2}\\ln x + (x+1)^{3}/x$.',
      'Ausnutzen: $\\ln 1 = 0$ vereinfacht vieles bei $x = 1$.',
    ],
  },
  'ex-abl-2-4-transfer': {
    id: 'ex-abl-2-4-transfer', lessonId: 'abl-2-4', type: 'multiple-choice',
    question: 'Warum ist der Ansatz "erst die äußerste Struktur identifizieren" bei kombinierten Ableitungsregeln entscheidend?',
    options: [
      'Weil die äußerste Struktur bestimmt, *welche* Regel zuerst anzuwenden ist — die inneren Teile werden dann ggf. mit weiteren Regeln abgeleitet',
      'Weil man sonst die Funktion vergisst',
      'Weil die Quotientenregel immer zuerst kommt',
      'Weil das Ergebnis sonst eine andere Einheit hat',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Die Reihenfolge der Regeln hat nichts mit dem „Vergessen der Funktion" zu tun — man wendet alle nötigen Regeln nacheinander an. Der Punkt ist *Strategie*: richtig einzuordnen, welche Regel die äußerste Struktur abdeckt.',
      2: 'Das stimmt nicht: Die Quotientenregel kommt nur, wenn die äußerste Struktur ein *Quotient* ist. Bei Produkten kommt Produktregel zuerst, bei Verkettungen Kettenregel. Es gibt keine feste Hierarchie „immer zuerst".',
      3: 'Einheiten spielen bei der Ableitung keine Rolle in dieser Reihenfolge — die Mathematik sorgt automatisch für Konsistenz, solange man korrekt rechnet. Der Punkt ist reine *Rechenstrategie*, kein physikalisches Argument.',
    },
    explanation: `**Ansatz:** Die Hierarchie von Operationen (außen → innen) bestimmt die Ableitungs-Hierarchie.

**Rechnung:** Beispiel $f(x) = \\dfrac{\\sin(2x)}{x+1}$:
- Äußerste Struktur: Quotient $\\Rightarrow$ Quotientenregel.
- Für den Zähler braucht man innerhalb Kettenregel.
- Für den Nenner: Potenzregel reicht.

Tabelle der äußersten Strukturen:

| Struktur | Primäre Regel |
|----------|---------------|
| $f(x) \\cdot g(x)$ | Produktregel |
| $\\dfrac{f(x)}{g(x)}$ | Quotientenregel |
| $f(g(x))$ | Kettenregel |

**Probe:** Wendet man die primäre Regel falsch an (z.B. Kettenregel auf ein Produkt), kommt Unsinn heraus — die Struktur bestimmt den Weg.

**Transfer:** Diese Heuristik ist essenziell für komplexe Ableitungen in Prüfungen: Zuerst *identifizieren*, dann *anwenden*. Sie verhindert, dass man "wild drauflosrechnet" und sich verheddert.

**Typischer Fehler:** Produktregel auf $\\frac{1}{x \\cdot \\ln x}$ anwenden (falsche Struktur — äußerstes ist der Quotient).`,
    hints: [
      'Welche Operation findet bei der Funktion *zuletzt* statt? Das bestimmt die primäre Regel.',
      'Regel: Äußerste Struktur $\\to$ Produkt-, Quotienten- oder Kettenregel.',
      'Beispiel: $\\sin(2x)/(x+1)$ ist äußerst ein Quotient, nicht ein Produkt.',
    ],
  },
  'ex-abl-2-4-mastery': {
    id: 'ex-abl-2-4-mastery', lessonId: 'abl-2-4', type: 'multiple-choice', isMasteryCheck: true,
    question: '[PRÜFUNG] $f(x) = \\dfrac{e^{2x}}{\\sqrt{x}}$. Vereinfache $f\'(x)$.',
    options: [
      '$\\dfrac{e^{2x}(4x - 1)}{2x\\sqrt{x}}$',
      '$\\dfrac{2e^{2x}}{\\sqrt{x}}$',
      '$\\dfrac{e^{2x}(4x + 1)}{2x\\sqrt{x}}$',
      '$\\dfrac{e^{2x}}{2x\\sqrt{x}}$',
    ],
    correctIndex: 0,
    wrongAnswerExplanations: {
      1: 'Quotientenregel ignoriert: Hier wurde nur der Zähler abgeleitet ($(e^{2x})\' = 2e^{2x}$) und durch den unveränderten Nenner geteilt. Der Term mit $(\\sqrt{x})\' = \\tfrac{1}{2\\sqrt{x}}$ fehlt komplett.',
      2: 'Vorzeichenfehler: Die Quotientenregel subtrahiert, also $+4x - 1$, nicht $+4x+1$. Möglicherweise wurden die Reihenfolge der Terme ($f\'g - fg\'$ statt $fg\' - f\'g$) oder das Minus aus $-\\tfrac{1}{2\\sqrt{x}}$ verwechselt.',
      3: 'Hier wurde die Quotientenregel auf $(e^{2x})\' \\cdot(\\sqrt{x})\'$ reduziert oder ähnlich verkürzt — die beiden Summanden im Zähler fehlen. Nur $\\tfrac{e^{2x}}{2x\\sqrt{x}}$ übrig lässt die Hauptableitung von $e^{2x}$ aus.',
    },
    explanation: `**Ansatz:** Quotientenregel (äußerste Struktur: Bruch) + Kettenregel (für $e^{2x}$) + Potenzregel (für $\\sqrt{x}$).

**Rechnung:**
- Zähler $u = e^{2x}$, $u' = 2e^{2x}$ (Kettenregel).
- Nenner $v = \\sqrt{x} = x^{1/2}$, $v' = \\tfrac{1}{2}x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}$.
- Quotientenregel: $f'(x) = \\dfrac{2e^{2x} \\cdot \\sqrt{x} - e^{2x} \\cdot \\dfrac{1}{2\\sqrt{x}}}{x}$.
- Zähler mit $2\\sqrt{x}$ erweitern: $= \\dfrac{4xe^{2x} - e^{2x}}{2x\\sqrt{x}} = \\dfrac{e^{2x}(4x - 1)}{2x\\sqrt{x}}$.

**Probe:** Bei $x = 1$: $f'(1) = \\dfrac{e^{2}(4-1)}{2 \\cdot 1 \\cdot 1} = \\dfrac{3e^{2}}{2} \\approx 11{,}08$. Numerisch bestätigt. ✓

**Typischer Fehler:** Vorzeichen verwechseln (Antwort C) oder den Faktor $2$ aus Kettenregel vergessen.`,
    hints: [
      'Welche Struktur? Bruch mit verkettetem Zähler und Wurzel im Nenner — Quotienten + Kette + Potenz.',
      'Regel: $(e^{2x})\' = 2e^{2x}$, $(\\sqrt{x})\' = 1/(2\\sqrt{x})$.',
      'Vereinfachen: Zähler mit $2\\sqrt{x}$ multiplizieren und kürzen.',
    ],
  },
}

const lessons_abl_u2 = [
  {
    id: 'abl-2-1', unitId: 'abl-unit-2',
    title: 'Produktregel',
    order: 1, estimatedMinutes: 15,
    learningGoals: [
      'Produktregel verstehen und anwenden',
      'Produkte von Funktionen ableiten',
      'Fehler "$(fg)\' = f\'g\'$" erkennen und vermeiden',
    ],
    prerequisites: [],
    nextLessonId: 'abl-2-2',
    steps: [
      {
        id: 'abl-2-1-s1', type: 'explanation-intuitive', title: 'Die Idee: Fläche eines Rechtecks',
        content: `Stell dir ein Rechteck vor mit den Seiten $f(x)$ und $g(x)$. Die **Fläche** ist $A = f \\cdot g$.

Wenn sich $x$ ein kleines bisschen ändert, ändern sich **beide Seiten** gleichzeitig. Die Flächenänderung setzt sich zusammen aus:

- **Streifen oben:** $f' \\cdot g$ (Seite $f$ wächst, Seite $g$ bleibt)
- **Streifen rechts:** $f \\cdot g'$ (Seite $g$ wächst, Seite $f$ bleibt)
- Ein winziges Eck $f' \\cdot g'$ (vernachlässigbar klein — zweiter Ordnung)

Zusammen:
$$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$$

**Merksatz:** "Erster abgeleitet mal Zweiter plus Erster mal Zweiter abgeleitet."

**Achtung:** Es gilt **nicht** $(f \\cdot g)' = f' \\cdot g'$! Gegenbeispiel: $(x \\cdot x)' = 2x$, aber $(x)' \\cdot (x)' = 1$.`,
      },
      {
        id: 'abl-2-1-s2', type: 'explanation-formal', title: 'Formel und Beispiele',
        content: `**Produktregel:**
$$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$$

**Beispiel 1:** $f(x) = x^{3} \\cdot \\sin(x)$
$$f'(x) = 3x^{2} \\cdot \\sin(x) + x^{3} \\cdot \\cos(x)$$

**Beispiel 2:** $f(x) = x \\cdot e^{x}$
$$f'(x) = 1 \\cdot e^{x} + x \\cdot e^{x} = (1+x) \\cdot e^{x}$$

**Beispiel 3:** $f(x) = x^{2} \\cdot \\ln(x)$
$$f'(x) = 2x \\cdot \\ln(x) + x^{2} \\cdot \\dfrac{1}{x} = 2x\\ln(x) + x$$

**Tipp:** Nach dem Ableiten oft *Ausklammern* — die Ergebnisse werden dadurch viel übersichtlicher.`,
      },
      { id: 'abl-2-1-s3', type: 'exercise', title: 'Aufgabe 1 — Formel', exerciseRef: 'ex-abl-2-1-a' },
      { id: 'abl-2-1-s4', type: 'exercise', title: 'Aufgabe 2 — $x^{2}\\sin x$', exerciseRef: 'ex-abl-2-1-b' },
      { id: 'abl-2-1-s5', type: 'exercise', title: 'Aufgabe 3 — $e^{x}\\ln x$', exerciseRef: 'ex-abl-2-1-c' },
      { id: 'abl-2-1-s6', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-2-1-d' },
      { id: 'abl-2-1-s7', type: 'exercise', title: 'Aufgabe 5 — Transfer: Warum nicht $f\'g\'$?', exerciseRef: 'ex-abl-2-1-transfer' },
      { id: 'abl-2-1-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-1-mastery' },
    ],
  },
  {
    id: 'abl-2-2', unitId: 'abl-unit-2',
    title: 'Quotientenregel',
    order: 2, estimatedMinutes: 15,
    learningGoals: [
      'Quotientenregel anwenden',
      'Brüche von Funktionen ableiten',
      'Verbindung zur Produktregel verstehen',
    ],
    prerequisites: [],
    nextLessonId: 'abl-2-3',
    steps: [
      {
        id: 'abl-2-2-s1', type: 'explanation-intuitive', title: 'Division ableiten',
        content: `Was, wenn eine Funktion ein **Bruch** ist, also $f(x) = \\dfrac{\\text{Zähler}}{\\text{Nenner}}$?

Dafür gibt es die **Quotientenregel**. Man kann sie sich aus der Produktregel herleiten (denn $\\dfrac{f}{g} = f \\cdot g^{-1}$), aber es ist praktischer, die fertige Formel zu nutzen:

$$\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' \\cdot g - f \\cdot g'}{g^{2}}$$

**Eselsbrücke "NAZ":**
- **N**enner $\\times$ **A**bleitung **Z**ähler
- **minus** **Z**ähler $\\times$ **A**bleitung **N**enner
- alles geteilt durch **N**enner **z**um **Q**uadrat

Oder kurz: "NAZ minus ZAN durch $N^{2}$"

**Wichtig:** Die Reihenfolge im Zähler ist entscheidend! $f'g - fg'$ ist *nicht* dasselbe wie $fg' - f'g$.`,
      },
      {
        id: 'abl-2-2-s2', type: 'explanation-formal', title: 'Beispiele',
        content: `**Quotientenregel:**
$$\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' \\cdot g - f \\cdot g'}{g^{2}}$$

**Beispiel 1:** $f(x) = \\dfrac{x^{2}}{x+1}$
$$f'(x) = \\dfrac{2x \\cdot (x+1) - x^{2} \\cdot 1}{(x+1)^{2}} = \\dfrac{x^{2} + 2x}{(x+1)^{2}}$$

**Beispiel 2:** $f(x) = \\dfrac{e^{x}}{x}$
$$f'(x) = \\dfrac{e^{x} \\cdot x - e^{x} \\cdot 1}{x^{2}} = \\dfrac{e^{x}(x-1)}{x^{2}}$$

**Tipp:** Manchmal ist es einfacher, den Bruch als Produkt umzuschreiben und Produkt- + Kettenregel zu nutzen: $\\dfrac{1}{g} = g^{-1}$.`,
      },
      { id: 'abl-2-2-s3', type: 'exercise', title: 'Aufgabe 1 — Formel', exerciseRef: 'ex-abl-2-2-a' },
      { id: 'abl-2-2-s4', type: 'exercise', title: 'Aufgabe 2 — $x/(x+1)$', exerciseRef: 'ex-abl-2-2-b' },
      { id: 'abl-2-2-s5', type: 'exercise', title: 'Aufgabe 3 — $\\sin x / x$', exerciseRef: 'ex-abl-2-2-c' },
      { id: 'abl-2-2-s6', type: 'exercise', title: 'Aufgabe 4 — $e^{x}/x^{2}$', exerciseRef: 'ex-abl-2-2-d' },
      { id: 'abl-2-2-s7', type: 'exercise', title: 'Aufgabe 5 — Transfer: Produkt vs. Quotient', exerciseRef: 'ex-abl-2-2-transfer' },
      { id: 'abl-2-2-s8', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-2-mastery' },
    ],
  },
  {
    id: 'abl-2-3', unitId: 'abl-unit-2',
    title: 'Kettenregel — Schritt für Schritt',
    order: 3, estimatedMinutes: 20,
    learningGoals: [
      'Kettenregel sicher anwenden',
      'Innere und äußere Funktion identifizieren',
      'Mehrfach verkettete Funktionen ableiten',
    ],
    prerequisites: [],
    nextLessonId: 'abl-2-4',
    steps: [
      {
        id: 'abl-2-3-s1', type: 'explanation-intuitive', title: 'Äußere mal innere Ableitung',
        content: `Die Kettenregel hast du in Unit 1 schon kennengelernt. Hier vertiefen wir sie — denn sie ist die **wichtigste** und **häufigste** Ableitungsregel in Klausuren!

**Wann Kettenregel?** Immer, wenn eine Funktion "in einer anderen steckt":
- $\\sin(\\underbrace{3x^{2}}_{\\text{innere}})$ → äußere: $\\sin$, innere: $3x^{2}$
- $e^{\\underbrace{x^{2}+1}_{\\text{innere}}}$ → äußere: $e^{u}$, innere: $x^{2}+1$
- $(\\underbrace{2x-5}_{\\text{innere}})^{7}$ → äußere: $u^{7}$, innere: $2x-5$

**Schritt-für-Schritt-Rezept:**

1. **Identifiziere** äußere und innere Funktion
2. **Äußere ableiten**, innere "stehen lassen"
3. **Multiplizieren** mit der Ableitung der inneren Funktion

$$[f(g(x))]' = \\underbrace{f'(g(x))}_{\\text{äußere abgeleitet}} \\cdot \\underbrace{g'(x)}_{\\text{innere abgeleitet}}$$

**Merksatz:** "Äußere Ableitung mal innere Ableitung"`,
      },
      {
        id: 'abl-2-3-s2', type: 'explanation-formal', title: 'Beispiele und doppelte Kettenregel',
        content: `**Kettenregel:**
$$[f(g(x))]' = f'(g(x)) \\cdot g'(x)$$

**Beispiel 1:** $h(x) = \\cos(x^{3})$
- Äußere: $\\cos(u) \\to -\\sin(u)$
- Innere: $x^{3} \\to 3x^{2}$
- $h'(x) = -\\sin(x^{3}) \\cdot 3x^{2} = -3x^{2} \\sin(x^{3})$

**Beispiel 2:** $h(x) = \\sqrt{1 + x^{2}} = (1+x^{2})^{1/2}$
- Äußere: $u^{1/2} \\to \\tfrac{1}{2}u^{-1/2}$
- Innere: $1+x^{2} \\to 2x$
- $h'(x) = \\tfrac{1}{2}(1+x^{2})^{-1/2} \\cdot 2x = \\dfrac{x}{\\sqrt{1+x^{2}}}$

**Doppelte Kettenregel** (drei Schichten):
$h(x) = e^{\\sin(2x)}$
- Äußerste: $e^{u} \\to e^{u}$
- Mittlere: $\\sin(v) \\to \\cos(v)$
- Innerste: $2x \\to 2$
- $h'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x)e^{\\sin(2x)}$`,
      },
      { id: 'abl-2-3-s3', type: 'exercise', title: 'Aufgabe 1 — Struktur erkennen', exerciseRef: 'ex-abl-2-3-a' },
      { id: 'abl-2-3-s4', type: 'exercise', title: 'Aufgabe 2 — Polynom-Potenz', exerciseRef: 'ex-abl-2-3-b' },
      { id: 'abl-2-3-s5', type: 'exercise', title: 'Aufgabe 3 — $e^{\\sin x}$', exerciseRef: 'ex-abl-2-3-c' },
      { id: 'abl-2-3-s6', type: 'exercise', title: 'Aufgabe 4 — $\\ln(x^{2}+1)$', exerciseRef: 'ex-abl-2-3-d' },
      { id: 'abl-2-3-s7', type: 'exercise', title: 'Aufgabe 5 — Zahleneingabe', exerciseRef: 'ex-abl-2-3-e' },
      { id: 'abl-2-3-s8', type: 'exercise', title: 'Aufgabe 6 — Transfer: Mehrfachverkettung', exerciseRef: 'ex-abl-2-3-transfer' },
      { id: 'abl-2-3-s9', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-3-mastery' },
    ],
  },
  {
    id: 'abl-2-4', unitId: 'abl-unit-2',
    title: 'Gemischte Regeln',
    order: 4, estimatedMinutes: 18,
    learningGoals: [
      'Alle Ableitungsregeln kombiniert anwenden',
      'Komplexere Funktionen sicher ableiten',
      'Struktur erkennen und richtige Regel zuerst wählen',
    ],
    prerequisites: [],
    nextLessonId: null,
    steps: [
      {
        id: 'abl-2-4-s1', type: 'explanation-formal', title: 'Strategie: Welche Regel zuerst?',
        content: `In Klausuren kommen fast immer Funktionen, die **mehrere Regeln gleichzeitig** erfordern. Die Frage ist: **Welche Regel wende ich zuerst an?**

**Strategie:** Schau die **äußerste Verknüpfung** an:

| Äußerste Struktur | Primäre Regel |
|---|---|
| $f(x) \\cdot g(x)$ (Produkt) | **Produktregel** zuerst |
| $\\dfrac{f(x)}{g(x)}$ (Quotient) | **Quotientenregel** zuerst |
| $f(g(x))$ (Verkettung) | **Kettenregel** zuerst |

Innerhalb der Regel brauchst du dann oft **weitere Regeln** für die einzelnen Teile.

**Beispiel:** $h(x) = x^{2} \\cdot e^{\\sin(x)}$

1. Äußerste Struktur: **Produkt** → Produktregel
2. Für $(e^{\\sin(x)})'$: **Kettenregel** (doppelt!)

$h'(x) = 2x \\cdot e^{\\sin(x)} + x^{2} \\cdot e^{\\sin(x)} \\cdot \\cos(x) = x \\cdot e^{\\sin(x)} \\cdot (2 + x\\cos(x))$`,
      },
      { id: 'abl-2-4-s2', type: 'exercise', title: 'Aufgabe 1 — Regeln erkennen', exerciseRef: 'ex-abl-2-4-a' },
      { id: 'abl-2-4-s3', type: 'exercise', title: 'Aufgabe 2 — Produkt + Kette', exerciseRef: 'ex-abl-2-4-b' },
      { id: 'abl-2-4-s4', type: 'exercise', title: 'Aufgabe 3 — Quotient + Kette', exerciseRef: 'ex-abl-2-4-c' },
      { id: 'abl-2-4-s5', type: 'exercise', title: 'Aufgabe 4 — Zahleneingabe', exerciseRef: 'ex-abl-2-4-d' },
      { id: 'abl-2-4-s6', type: 'exercise', title: 'Aufgabe 5 — Transfer: Struktur zuerst', exerciseRef: 'ex-abl-2-4-transfer' },
      { id: 'abl-2-4-s7', type: 'mastery-check', title: 'Prüfungsaufgabe', exerciseRef: 'ex-abl-2-4-mastery' },
    ],
  },
]

export const abl_unit2 = {
  id: 'abl-unit-2',
  title: 'Ableitungsregeln im Detail',
  order: 2,
  description: 'Produktregel, Quotientenregel, Kettenregel vertieft, gemischte Aufgaben',
  unitGoals: [
    'Produktregel $(fg)\' = f\' g + f g\'$ auch bei geschachtelten Produkten korrekt anwenden',
    'Quotientenregel $(f/g)\' = (f\' g - f g\')/g^2$ — Minuszeichen und Reihenfolge niemals verwechseln',
    'Kettenregel „äußere mal innere Ableitung" bei mehrfach geschachtelten Funktionen systematisch durchführen',
    'Bei Mischungen aus Produkt, Quotient und Kette zuerst die äußerste Struktur identifizieren, dann hierarchisch ableiten',
  ],
  lessons: lessons_abl_u2,
  exercises: exercises_abl_u2,
}
