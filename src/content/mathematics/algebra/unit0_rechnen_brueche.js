// ── Algebra Unit 0: Rechnen & Brüche (Einstieg/Vorkurs) ─────────────────────
// Ground-up: Grundrechnen, Klammern, Vorrang, Brüche, Prozent, Termumformung.
// Diese Unit ist bewusst einfach gehalten — für Studienbeginner aus der Schule,
// die Mathematik 1 ohne Lücken starten wollen. Alle Erklärungen nutzen das
// 4-Block-Schema (Ansatz / Rechnung / Probe / Typischer Fehler).

export const exercises_alg_u0 = {
  // ───────────── Lektion 0-1: Grundrechnen & Klammern ─────────────
  'ex-alg-0-1-a': {
    id: 'ex-alg-0-1-a', lessonId: 'alg-0-1', type: 'multiple-choice',
    question: 'Berechne: $3 + 4 \\cdot 2$',
    options: ['$11$', '$14$', '$10$', '$24$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Punkt-vor-Strich — erst multiplizieren, dann addieren.

**Rechnung:** $4 \\cdot 2 = 8$, dann $3 + 8 = 11$.

**Probe:** Klammer dazuschreiben macht die Reihenfolge sichtbar: $3 + (4 \\cdot 2) = 3 + 8 = 11$.

**Typischer Fehler:** Von links nach rechts rechnen → $3+4=7$, dann $7 \\cdot 2 = 14$. Das ignoriert die Vorrangregel.`,
    hints: [
      'Welche Rechenart hat Vorrang — Plus oder Mal?',
      'Regel: Punkt-vor-Strich (Multiplikation vor Addition).',
      'Rechne erst $4 \\cdot 2$, dann addiere $3$.',
    ],
    wrongAnswerExplanations: {
      1: 'Klassischer „von links nach rechts"-Fehler: $3+4=7$, dann $7 \\cdot 2 = 14$. Die Vorrangregel sagt aber: zuerst $4 \\cdot 2$.',
      2: 'Das wäre $3 + 4 + 3 = 10$ — keine Rechenoperation im Term passt dazu.',
      3: 'Das wäre $(3+4) \\cdot (2+1)$ oder ähnlich — stimmt nicht mit $3 + 4 \\cdot 2$ überein.',
    },
  },
  'ex-alg-0-1-b': {
    id: 'ex-alg-0-1-b', lessonId: 'alg-0-1', type: 'number-input',
    question: 'Berechne: $2 \\cdot (3 + 4)$',
    correctValue: 14, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Klammer zuerst, dann multiplizieren.

**Rechnung:** $3+4 = 7$, dann $2 \\cdot 7 = 14$.

**Probe:** Distributivgesetz: $2 \\cdot (3+4) = 2 \\cdot 3 + 2 \\cdot 4 = 6 + 8 = 14$. ✓

**Typischer Fehler:** Nur den ersten Summanden multiplizieren: $2 \\cdot 3 + 4 = 10$. Die $2$ wirkt auf die **gesamte** Klammer.`,
    hints: [
      'Was steht in der Klammer? Rechne das zuerst aus.',
      'Danach mit dem $2$ vor der Klammer multiplizieren.',
      'Alternativ: $2 \\cdot 3 + 2 \\cdot 4$ — beide Wege geben dasselbe.',
    ],
  },
  'ex-alg-0-1-c': {
    id: 'ex-alg-0-1-c', lessonId: 'alg-0-1', type: 'multiple-choice',
    question: 'Berechne: $-(3 - 5)$',
    options: ['$2$', '$-2$', '$-8$', '$8$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Klammer zuerst, dann das Minus davor als Vorzeichenwechsel anwenden.

**Rechnung:** $3-5 = -2$, und $-(-2) = +2$.

**Probe:** Alternativ das Minus in die Klammer ziehen: $-(3-5) = -3 + 5 = 2$. ✓

**Typischer Fehler:** Minus nur auf die $3$ anwenden: $-3 - 5 = -8$. Das Minus vor der Klammer wirkt auf **beide** Summanden.`,
    hints: [
      'Was steht in der Klammer? Rechne es zuerst.',
      'Dann: Minus-Zeichen vor der Klammer kehrt das Vorzeichen um.',
      'Alternativ: $-(3-5) = -3 + 5$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast das Ergebnis der Klammer ($-2$) nicht noch einmal negiert. Das Minus vor der Klammer dreht das Vorzeichen um.',
      2: 'Das Minus wurde nur auf die $3$ angewandt: $-3-5=-8$. Es wirkt aber auf beide Summanden in der Klammer.',
      3: 'Das wäre $-3 \\cdot (-5/\\ldots)$ oder ähnlich — nicht $-(3-5)$.',
    },
  },
  'ex-alg-0-1-d': {
    id: 'ex-alg-0-1-d', lessonId: 'alg-0-1', type: 'true-false',
    statement: 'Der Ausdruck $3 + 4 \\cdot 2$ ergibt $14$.',
    correct: false,
    explanation: `**Ansatz:** Vorrangregel prüfen (Punkt vor Strich).

**Rechnung:** $4 \\cdot 2 = 8$ zuerst, dann $3 + 8 = 11$. Das Ergebnis ist $11$, nicht $14$.

**Probe:** Nur wenn die Klammerung $(3+4) \\cdot 2 = 14$ wäre, käme $14$ heraus. Die Klammer fehlt aber.

**Typischer Fehler:** Von links nach rechts rechnen ignoriert die Vorrangregel.`,
    hints: [
      'Punkt-vor-Strich prüfen.',
      'Was müsste geklammert sein, damit $14$ richtig wäre?',
    ],
  },
  'ex-alg-0-1-e': {
    id: 'ex-alg-0-1-e', lessonId: 'alg-0-1', type: 'matching',
    question: 'Ordne jedem Ausdruck den korrekten Wert zu.',
    pairs: [
      { left: '$2 + 3 \\cdot 4$', right: '$14$' },
      { left: '$(2 + 3) \\cdot 4$', right: '$20$' },
      { left: '$-(2 - 5)$', right: '$3$' },
      { left: '$10 - 2 \\cdot 3$', right: '$4$' },
    ],
    explanation: `**Ansatz:** Bei jedem Ausdruck Vorrangregel + Klammern anwenden.

**Rechnung:**
- $2 + 3 \\cdot 4 = 2 + 12 = 14$ (Punkt vor Strich)
- $(2+3) \\cdot 4 = 5 \\cdot 4 = 20$ (Klammer zuerst)
- $-(2-5) = -(-3) = 3$
- $10 - 2 \\cdot 3 = 10 - 6 = 4$

**Probe:** Jedes Ergebnis ergibt sich eindeutig.

**Typischer Fehler:** Klammern ignorieren ändert das Ergebnis dramatisch — siehe erste vs. zweite Zeile.`,
    hints: [
      'Rechne jeden Ausdruck einzeln aus, dann zuordnen.',
      'Bei Klammern: innen zuerst.',
    ],
  },
  'ex-alg-0-1-mastery': {
    id: 'ex-alg-0-1-mastery', lessonId: 'alg-0-1', type: 'number-input', isMasteryCheck: true,
    question: 'Berechne: $-2 \\cdot (3 - 5) + 4$',
    correctValue: 8, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Klammer zuerst, dann Multiplikation, dann Addition.

**Rechnung:** $3-5 = -2$; $-2 \\cdot (-2) = 4$; $4 + 4 = 8$.

**Probe:** Distributivgesetz: $-2 \\cdot (3-5) + 4 = -6 + 10 + 4 = 8$. ✓

**Typischer Fehler:** Das doppelte Minus übersehen → $-2 \\cdot (-2) = -4$ statt $+4$. Minus mal Minus ist Plus.`,
    hints: [
      'Zuerst die Klammer ausrechnen.',
      'Dann multiplizieren — Vorzeichen beachten (Minus mal Minus = Plus).',
      'Zum Schluss $+4$.',
    ],
  },

  // ───────────── Lektion 0-2: Brüche ─────────────
  'ex-alg-0-2-a': {
    id: 'ex-alg-0-2-a', lessonId: 'alg-0-2', type: 'multiple-choice',
    question: 'Kürze: $\\dfrac{6}{9}$',
    options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{6}{9}$ (nicht kürzbar)'],
    correctIndex: 0,
    explanation: `**Ansatz:** Gemeinsamen Teiler von Zähler und Nenner finden und durch ihn teilen.

**Rechnung:** $\\text{ggT}(6, 9) = 3$. Also $\\dfrac{6}{9} = \\dfrac{6/3}{9/3} = \\dfrac{2}{3}$.

**Probe:** $2 \\cdot 9 = 18$ und $3 \\cdot 6 = 18$ — Kreuzprodukt stimmt, Brüche sind wertgleich. ✓

**Typischer Fehler:** Zähler und Nenner vertauschen ($\\tfrac{3}{2}$ ist der Kehrwert, nicht gekürzt).`,
    hints: [
      'Gemeinsamen Teiler von 6 und 9 suchen — teilt beide.',
      'Zähler und Nenner durch denselben Teiler dividieren.',
      'ggT$(6,9) = 3$.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast Zähler und Nenner vertauscht — das wäre der Kehrwert, nicht die gekürzte Form.',
      2: 'Durch 6 geteilt gäbe $1$ im Zähler, aber $9/6$ ist keine ganze Zahl — der ggT ist $3$, nicht $6$.',
      3: '$6$ und $9$ haben den gemeinsamen Teiler $3$. Kürzen ist also möglich.',
    },
  },
  'ex-alg-0-2-b': {
    id: 'ex-alg-0-2-b', lessonId: 'alg-0-2', type: 'multiple-choice',
    question: 'Berechne: $\\dfrac{1}{2} + \\dfrac{1}{3}$',
    options: ['$\\dfrac{5}{6}$', '$\\dfrac{2}{5}$', '$\\dfrac{1}{5}$', '$\\dfrac{2}{6}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Brüche addieren geht nur bei gleichem Nenner — also Hauptnenner bilden.

**Rechnung:** Hauptnenner = $2 \\cdot 3 = 6$. Erweitere: $\\tfrac{1}{2} = \\tfrac{3}{6}$, $\\tfrac{1}{3} = \\tfrac{2}{6}$. Addiere: $\\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$.

**Probe:** Dezimal: $0{,}5 + 0{,}333\\ldots = 0{,}833\\ldots = 5/6$. ✓

**Typischer Fehler:** Zähler und Nenner einfach addieren: $\\tfrac{1+1}{2+3} = \\tfrac{2}{5}$. **Das ist falsch** — bei Brüchen addiert man nur die Zähler, nachdem die Nenner gleich sind.`,
    hints: [
      'Nenner vergleichen — sind sie gleich?',
      'Wenn nicht: beide auf einen gemeinsamen Nenner bringen.',
      'Kleinstmöglicher Hauptnenner ist hier $6$.',
    ],
    wrongAnswerExplanations: {
      1: 'Klassischer Anfängerfehler: du hast Zähler und Nenner einzeln addiert. Richtig: erst gleichnamig machen, dann nur Zähler addieren.',
      2: 'Vermutlich hast du „$1/2$ + $1/3$" als „$1/(2+3)$" gelesen. Das ist keine gültige Regel.',
      3: 'Das wäre $\\tfrac{1+1}{6}$ — aber die Zähler beim Gleichnamigmachen sind $3$ und $2$, nicht $1$ und $1$.',
    },
  },
  'ex-alg-0-2-c': {
    id: 'ex-alg-0-2-c', lessonId: 'alg-0-2', type: 'number-input',
    question: 'Berechne: $\\dfrac{2}{3} \\cdot \\dfrac{3}{4}$. Gib das Ergebnis als Dezimalzahl an.',
    correctValue: 0.5, tolerance: 0.001, unit: '',
    explanation: `**Ansatz:** Brüche multiplizieren: Zähler mal Zähler, Nenner mal Nenner.

**Rechnung:** $\\tfrac{2}{3} \\cdot \\tfrac{3}{4} = \\tfrac{2 \\cdot 3}{3 \\cdot 4} = \\tfrac{6}{12} = \\tfrac{1}{2} = 0{,}5$.

**Probe:** Vor dem Multiplizieren kürzen: $\\tfrac{2}{\\cancel 3} \\cdot \\tfrac{\\cancel 3}{4} = \\tfrac{2}{4} = \\tfrac{1}{2}$. ✓

**Typischer Fehler:** Hauptnenner bilden wie bei Addition — unnötig. Bei Multiplikation reicht direkt Zähler·Zähler / Nenner·Nenner.`,
    hints: [
      'Bei Multiplikation: Zähler·Zähler, Nenner·Nenner.',
      'Kürzen geht auch diagonal (z. B. 3 oben gegen 3 unten).',
      'Endergebnis dezimal umrechnen: $1/2 = 0{,}5$.',
    ],
  },
  'ex-alg-0-2-d': {
    id: 'ex-alg-0-2-d', lessonId: 'alg-0-2', type: 'true-false',
    statement: '$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a+c}{b+d}$ — diese Regel ist für beliebige Brüche korrekt.',
    correct: false,
    explanation: `**Ansatz:** Gegenbeispiel suchen.

**Rechnung:** Setze $a=1, b=2, c=1, d=2$: Linke Seite $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$. Rechte Seite $\\tfrac{1+1}{2+2} = \\tfrac{2}{4} = \\tfrac{1}{2}$. $1 \\neq \\tfrac{1}{2}$.

**Probe:** Die korrekte Regel braucht gemeinsamen Nenner: $\\tfrac{a}{b} + \\tfrac{c}{d} = \\tfrac{a \\cdot d + c \\cdot b}{b \\cdot d}$.

**Typischer Fehler:** Die behauptete „Einfach-addieren"-Regel ist ein klassischer Schulfehler. Sie gilt **nicht**.`,
    hints: [
      'Ein Gegenbeispiel reicht, um eine Regel zu widerlegen.',
      'Teste $\\tfrac{1}{2} + \\tfrac{1}{2}$ — wird das $1$ oder $\\tfrac{2}{4}$?',
    ],
  },
  'ex-alg-0-2-e': {
    id: 'ex-alg-0-2-e', lessonId: 'alg-0-2', type: 'sorting',
    question: 'Bringe die Schritte zur Addition $\\tfrac{1}{4} + \\tfrac{2}{3}$ in die richtige Reihenfolge.',
    items: [
      'Hauptnenner bestimmen: $\\text{kgV}(4, 3) = 12$',
      'Brüche auf den Hauptnenner erweitern: $\\tfrac{3}{12} + \\tfrac{8}{12}$',
      'Zähler addieren: $\\tfrac{3 + 8}{12} = \\tfrac{11}{12}$',
      'Prüfen, ob sich das Ergebnis kürzen lässt',
    ],
    correctOrder: [0, 1, 2, 3],
    explanation: `**Ansatz:** Die Reihenfolge ist bei Bruchaddition immer dieselbe.

**Rechnung:** 1. Hauptnenner, 2. Erweitern, 3. Zähler addieren, 4. Kürzen prüfen.

**Probe:** $\\tfrac{11}{12}$ lässt sich nicht weiter kürzen (ggT$(11,12)=1$).

**Typischer Fehler:** Zähler addieren vor dem Gleichnamigmachen — liefert falsches Ergebnis.`,
    hints: [
      'Addition braucht erst gleiche Nenner.',
      'Erst am Ende schauen, ob sich das Ergebnis kürzen lässt.',
    ],
  },
  'ex-alg-0-2-mastery': {
    id: 'ex-alg-0-2-mastery', lessonId: 'alg-0-2', type: 'multiple-choice', isMasteryCheck: true,
    question: 'Berechne: $\\dfrac{2}{5} + \\dfrac{1}{3} - \\dfrac{1}{15}$',
    options: ['$\\dfrac{2}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{10}{15}$ (ungekürzt, aber gleich zu A)', '$\\dfrac{1}{2}$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Hauptnenner von $5, 3, 15$ ist $15$. Alles erweitern, Zähler addieren/subtrahieren, am Ende kürzen.

**Rechnung:** $\\tfrac{2}{5} = \\tfrac{6}{15}$, $\\tfrac{1}{3} = \\tfrac{5}{15}$. $\\tfrac{6}{15} + \\tfrac{5}{15} - \\tfrac{1}{15} = \\tfrac{10}{15} = \\tfrac{2}{3}$.

**Probe:** Dezimal: $0{,}4 + 0{,}333 - 0{,}067 \\approx 0{,}667 = 2/3$. ✓

**Typischer Fehler:** Das Endergebnis $\\tfrac{10}{15}$ nicht kürzen — gleicher Wert, aber nicht die gefragte einfachste Form.`,
    hints: [
      'Alle drei Brüche auf Nenner 15 bringen.',
      'Dann Zähler zusammenfassen, Vorzeichen beachten.',
      'Endergebnis kürzen.',
    ],
    wrongAnswerExplanations: {
      1: '$\\tfrac{2}{5}$ wäre das Ergebnis, wenn die beiden letzten Summanden sich aufhöben — tun sie aber nicht.',
      2: 'Gleicher Wert wie A, aber nicht gekürzt. Die gefragte einfachste Form ist $\\tfrac{2}{3}$.',
      3: '$\\tfrac{1}{2} = \\tfrac{7{,}5}{15}$ — passt zahlenmäßig nicht zu Zähler $10$ auf Nenner $15$.',
    },
  },

  // ───────────── Lektion 0-3: Prozent & Dreisatz ─────────────
  'ex-alg-0-3-a': {
    id: 'ex-alg-0-3-a', lessonId: 'alg-0-3', type: 'multiple-choice',
    question: 'Was sind $25\\%$ von $80$?',
    options: ['$20$', '$25$', '$55$', '$3{,}2$'],
    correctIndex: 0,
    explanation: `**Ansatz:** $p\\%$ von $G$ = $G \\cdot \\tfrac{p}{100}$.

**Rechnung:** $80 \\cdot \\tfrac{25}{100} = 80 \\cdot 0{,}25 = 20$.

**Probe:** $25\\% = \\tfrac{1}{4}$, und $80/4 = 20$. ✓

**Typischer Fehler:** Prozentzeichen ignorieren und $80 \\cdot 25 = 2000$ rechnen — fehlt der Faktor $1/100$.`,
    hints: [
      'Prozent bedeutet „von Hundert" — also durch 100 teilen.',
      '$25\\%$ sind dasselbe wie $\\tfrac{1}{4}$.',
      '$80 / 4 = ?$',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast die Prozentzahl als absoluten Wert genommen. $25\\%$ ist aber ein *Anteil* — du musst mit $80$ multiplizieren.',
      2: 'Das ist $80 - 25$. Prozent heißt „pro 100", nicht „minus".',
      3: 'Das wäre $80 \\cdot 0{,}04 = 4\\%$ von $80$ — du hast ein Komma verschoben.',
    },
  },
  'ex-alg-0-3-b': {
    id: 'ex-alg-0-3-b', lessonId: 'alg-0-3', type: 'number-input',
    question: 'Ein Pullover kostet $60\\,\\text{€}$ und wird um $15\\%$ reduziert. Wie viel kostet er nach der Reduktion (in €)?',
    correctValue: 51, tolerance: 0.01, unit: '€',
    explanation: `**Ansatz:** Reduktion $=$ Preis $\\times$ Prozent. Neuer Preis $=$ alt $-$ Reduktion (oder alt $\\times$ $(1 - p/100)$).

**Rechnung:** $15\\%$ von $60 = 60 \\cdot 0{,}15 = 9\\,\\text{€}$. Neuer Preis: $60 - 9 = 51\\,\\text{€}$.

**Probe:** Direkter Weg: $60 \\cdot 0{,}85 = 51\\,\\text{€}$. ✓

**Typischer Fehler:** $60 \\cdot 0{,}15 = 9\\,\\text{€}$ als Endpreis statt als Reduktion lesen.`,
    hints: [
      'Erst berechnen, wie viel die Reduktion in Euro ist.',
      'Dann vom ursprünglichen Preis abziehen.',
      'Oder direkt: Preis $\\times (1 - 0{,}15) = $ Preis $\\times 0{,}85$.',
    ],
  },
  'ex-alg-0-3-c': {
    id: 'ex-alg-0-3-c', lessonId: 'alg-0-3', type: 'number-input',
    question: 'Dreisatz: $3$ Pumpen füllen einen Tank in $8$ Stunden. Wie lange brauchen $4$ Pumpen (in Stunden)?',
    correctValue: 6, tolerance: 0.01, unit: 'h',
    explanation: `**Ansatz:** Mehr Pumpen → **weniger** Zeit → **indirekter** Dreisatz (Produkt Pumpen·Zeit bleibt konstant).

**Rechnung:** $3 \\cdot 8 = 24$ Pumpenstunden. Bei $4$ Pumpen: $24 / 4 = 6$ Stunden.

**Probe:** $4 \\cdot 6 = 24$ Pumpenstunden — gleich viel Arbeit. ✓

**Typischer Fehler:** Direkt proportional rechnen: $8 \\cdot 4/3 \\approx 10{,}67$ Stunden. Aber mehr Pumpen machen schneller, nicht langsamer.`,
    hints: [
      'Wird es mit mehr Pumpen schneller oder langsamer?',
      'Schneller → indirekt proportional → Produkt bleibt konstant.',
      'Pumpen · Zeit $=$ konstant. Wie viel sind es hier?',
    ],
  },
  'ex-alg-0-3-d': {
    id: 'ex-alg-0-3-d', lessonId: 'alg-0-3', type: 'true-false',
    statement: 'Wenn ein Wert um $20\\%$ steigt und dann um $20\\%$ fällt, ist der Endwert gleich dem Ausgangswert.',
    correct: false,
    explanation: `**Ansatz:** An konkretem Wert durchrechnen.

**Rechnung:** Start $100$. $+20\\%$: $100 \\cdot 1{,}2 = 120$. $-20\\%$: $120 \\cdot 0{,}8 = 96$. Endwert $96 \\neq 100$.

**Probe:** Allgemein: $x \\cdot 1{,}2 \\cdot 0{,}8 = 0{,}96 \\cdot x$ — immer $4\\%$ unter dem Ausgangswert.

**Typischer Fehler:** Annahme, Prozentveränderungen addieren/subtrahieren sich neutral — sie wirken aber **multiplikativ** auf unterschiedliche Grundwerte.`,
    hints: [
      'Rechne an einem Beispielwert (z. B. 100) durch.',
      'Der zweite Prozentsatz bezieht sich auf den **neuen** Wert, nicht den ursprünglichen.',
    ],
  },
  'ex-alg-0-3-e': {
    id: 'ex-alg-0-3-e', lessonId: 'alg-0-3', type: 'matching',
    question: 'Ordne die Begriffe den Formeln zu.',
    pairs: [
      { left: 'Prozentwert $W$', right: '$G \\cdot p/100$' },
      { left: 'Grundwert $G$', right: '$W \\cdot 100 / p$' },
      { left: 'Prozentsatz $p$', right: '$W \\cdot 100 / G$' },
      { left: 'Wachstumsfaktor bei $+p\\%$', right: '$1 + p/100$' },
    ],
    explanation: `**Ansatz:** Die drei Basisgrößen $W$, $G$, $p$ sind durch $W = G \\cdot p/100$ verknüpft — jeweils nach der gesuchten Größe auflösen.

**Rechnung:** Nach $G$ umgestellt: $G = W \\cdot 100 / p$. Nach $p$ umgestellt: $p = W \\cdot 100 / G$.

**Probe:** Beispiel $G=80$, $p=25$: $W = 80 \\cdot 0{,}25 = 20$. Rückrechnung: $p = 20 \\cdot 100 / 80 = 25$ ✓.

**Typischer Fehler:** Wachstumsfaktor mit $p/100$ verwechseln — der Faktor enthält zusätzlich die $1$ (bei Abnahme $1 - p/100$).`,
    hints: [
      'Grundformel $W = G \\cdot p/100$ — alle anderen Formen durch Umstellen.',
      'Wachstumsfaktor $= 1 + p/100$ (Zunahme) bzw. $1 - p/100$ (Abnahme).',
    ],
  },
  'ex-alg-0-3-mastery': {
    id: 'ex-alg-0-3-mastery', lessonId: 'alg-0-3', type: 'number-input', isMasteryCheck: true,
    question: 'Ein Werkstoff enthält $3{,}5\\%$ Kohlenstoff. In einer Probe von $800\\,\\text{g}$ ist wie viel Kohlenstoff enthalten (in g)?',
    correctValue: 28, tolerance: 0.01, unit: 'g',
    explanation: `**Ansatz:** Prozentwert berechnen: $W = G \\cdot p/100$.

**Rechnung:** $W = 800 \\cdot 3{,}5 / 100 = 800 \\cdot 0{,}035 = 28\\,\\text{g}$.

**Probe:** $28 / 800 = 0{,}035 = 3{,}5\\%$. ✓

**Typischer Fehler:** $3{,}5\\%$ als absoluten Anteil lesen (z. B. $3{,}5\\,\\text{g}$) statt als Prozentanteil vom Gesamtwert.`,
    hints: [
      'Grundwert = $800\\,\\text{g}$, Prozentsatz = $3{,}5$.',
      'Gesucht: Prozentwert $W$.',
      '$W = G \\cdot p/100$.',
    ],
  },

  // ───────────── Lektion 0-4: Termumformung & Gleichungen ─────────────
  'ex-alg-0-4-a': {
    id: 'ex-alg-0-4-a', lessonId: 'alg-0-4', type: 'multiple-choice',
    question: 'Vereinfache: $2x + 3x - x$',
    options: ['$4x$', '$5x$', '$6x$', '$2x^3$'],
    correctIndex: 0,
    explanation: `**Ansatz:** Gleichartige Terme (hier alle mit $x$) zusammenfassen — Koeffizienten addieren, $x$ stehen lassen.

**Rechnung:** $2x + 3x - x = (2 + 3 - 1)\\,x = 4x$.

**Probe:** Setze $x=1$: $2 + 3 - 1 = 4$ und $4 \\cdot 1 = 4$. ✓

**Typischer Fehler:** Exponenten addieren wie bei Potenzen: $x \\cdot x \\cdot x = x^3$. Das gilt nur für **Multiplikation**, nicht für Addition gleicher Variablen.`,
    hints: [
      'Alle Terme enthalten $x$ — nur die Zahlen davor (Koeffizienten) werden verrechnet.',
      '$2 + 3 - 1 = ?$',
      '$x$ bleibt einfach $x$ (nicht $x^2$ oder $x^3$).',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast den Koeffizienten des letzten Terms ($-x = -1 \\cdot x$) nicht abgezogen.',
      2: 'Du hast alle Koeffizienten addiert und das Minus übersehen.',
      3: 'Typische Verwechslung mit Potenzgesetzen. Aber $2x+3x-x$ ist eine Summe, keine Multiplikation — der Exponent bleibt $1$.',
    },
  },
  'ex-alg-0-4-b': {
    id: 'ex-alg-0-4-b', lessonId: 'alg-0-4', type: 'number-input',
    question: 'Löse die Gleichung nach $x$ auf: $2x + 6 = 14$',
    correctValue: 4, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Äquivalenzumformungen — dieselbe Operation auf **beide** Seiten, bis $x$ allein steht.

**Rechnung:**
$$2x + 6 = 14 \\quad | -6 \\\\ 2x = 8 \\quad | :2 \\\\ x = 4$$

**Probe:** Einsetzen: $2 \\cdot 4 + 6 = 14$. ✓

**Typischer Fehler:** Nur auf einer Seite umformen (z. B. nur links $-6$ rechnen, aber rechts $14$ stehen lassen).`,
    hints: [
      'Was musst du von beiden Seiten abziehen, damit links nur noch $2x$ steht?',
      'Danach durch den Koeffizienten teilen — hier durch $2$.',
      'Am Ende Probe machen: Einsetzen und prüfen.',
    ],
  },
  'ex-alg-0-4-c': {
    id: 'ex-alg-0-4-c', lessonId: 'alg-0-4', type: 'multiple-choice',
    question: 'Löse die Formel $F = m \\cdot a$ nach $a$ auf.',
    options: ['$a = F/m$', '$a = F \\cdot m$', '$a = m/F$', '$a = F - m$'],
    correctIndex: 0,
    explanation: `**Ansatz:** $a$ ist mit $m$ multiplikativ verknüpft → durch $m$ dividieren.

**Rechnung:** $F = m \\cdot a \\;\\big|\\;:m \\Rightarrow a = F/m$.

**Probe:** Einheiten-Check: $F$ in N (= kg·m/s²), $m$ in kg → $a = \\text{N}/\\text{kg} = \\text{m/s}^2$. ✓

**Typischer Fehler:** Subtraktion statt Division. $F$ und $m \\cdot a$ sind aber durch Multiplikation verknüpft, nicht Addition.`,
    hints: [
      'Was ist die „Gegenoperation" zu „$m$ mal $a$"?',
      'Teile beide Seiten durch $m$.',
      'Einheit prüfen: $a$ muss in $\\text{m/s}^2$ herauskommen.',
    ],
    wrongAnswerExplanations: {
      1: 'Du hast die Operation nicht umgekehrt — bei Multiplikation ist die Gegenoperation Division, nicht nochmal Multiplikation.',
      2: 'Das ist der Kehrwert. Vermutlich hast du rechts $F/m$, aber Zähler und Nenner vertauscht.',
      3: 'Subtraktion passt zu $F = m + a$, nicht zu $F = m \\cdot a$.',
    },
  },
  'ex-alg-0-4-d': {
    id: 'ex-alg-0-4-d', lessonId: 'alg-0-4', type: 'true-false',
    statement: 'Beim Lösen einer Gleichung darf man beide Seiten mit derselben Zahl multiplizieren, ohne das Gleichheitszeichen zu verlieren (solange die Zahl nicht Null ist).',
    correct: true,
    explanation: `**Ansatz:** Grundprinzip der Äquivalenzumformung.

**Rechnung:** Wenn $A = B$ und $c \\neq 0$, dann auch $A \\cdot c = B \\cdot c$.

**Probe:** $x = 3 \\;\\big|\\; \\cdot 2 \\Rightarrow 2x = 6$ — gleiche Lösungsmenge.

**Typischer Fehler:** Multiplikation mit $0$ — dann steht immer $0 = 0$, und die Gleichung verliert ihren Inhalt. Deshalb **nur mit $c \\neq 0$**.`,
    hints: [
      'Gilt die Regel für **jede** Zahl — auch für $0$?',
    ],
  },
  'ex-alg-0-4-e': {
    id: 'ex-alg-0-4-e', lessonId: 'alg-0-4', type: 'sorting',
    question: 'Bringe die Schritte zur Lösung von $3x - 5 = 10$ in die richtige Reihenfolge.',
    items: [
      '$3x - 5 = 10 \\;|\\;+5$',
      '$3x = 15 \\;|\\;:3$',
      '$x = 5$',
      'Probe: $3 \\cdot 5 - 5 = 10$ ✓',
    ],
    correctOrder: [0, 1, 2, 3],
    explanation: `**Ansatz:** Erst Konstante weg (additiv), dann Koeffizient weg (multiplikativ), dann Probe.

**Rechnung:** siehe Reihenfolge.

**Probe:** Einsetzen liefert die Ausgangsgleichung — bestätigt die Lösung.

**Typischer Fehler:** Erst durch $3$ teilen, bevor die $-5$ weg ist → zwingt zu Bruchrechnen ohne Not.`,
    hints: [
      'Erst die Zahl weg, die **addiert/subtrahiert** wird.',
      'Danach die Zahl weg, die **multipliziert** wird.',
      'Zum Schluss Probe.',
    ],
  },
  'ex-alg-0-4-mastery': {
    id: 'ex-alg-0-4-mastery', lessonId: 'alg-0-4', type: 'number-input', isMasteryCheck: true,
    question: 'Löse: $\\dfrac{x+4}{3} = 5$ nach $x$.',
    correctValue: 11, tolerance: 0, unit: '',
    explanation: `**Ansatz:** Zuerst den Bruch wegbekommen (Multiplikation mit dem Nenner), dann isolieren.

**Rechnung:**
$$\\dfrac{x+4}{3} = 5 \\;\\big|\\; \\cdot 3 \\\\ x + 4 = 15 \\;\\big|\\; -4 \\\\ x = 11$$

**Probe:** $(11 + 4)/3 = 15/3 = 5$. ✓

**Typischer Fehler:** Nur den Zähler mit $3$ multiplizieren, nicht die ganze rechte Seite. Äquivalenzumformung wirkt auf die **ganzen Seiten**.`,
    hints: [
      'Nenner loswerden: beide Seiten mit $3$ multiplizieren.',
      'Danach die $+4$ auf die andere Seite bringen.',
      'Probe nicht vergessen.',
    ],
  },
}

const lessons_alg_u0 = [
  {
    id: 'alg-0-1', unitId: 'alg-unit-0',
    title: 'Grundrechnen, Klammern & Vorrang',
    order: 1, estimatedMinutes: 12,
    learningGoals: [
      'Punkt-vor-Strich sicher anwenden',
      'Klammern korrekt auflösen (innen nach außen)',
      'Minuszeichen vor einer Klammer als Vorzeichenwechsel verstehen',
    ],
    subGoals: [
      { label: 'Vorrangregel Punkt-vor-Strich bei gemischten Termen', examRelevance: 'hoch' },
      { label: 'Minuszeichen vor Klammer auf alle Summanden anwenden', examRelevance: 'hoch' },
      { label: 'Doppel-Minus aufgelöst: $(-a)(-b)=+ab$', examRelevance: 'mittel' },
      { label: 'Klammerschachtelung von innen nach außen abarbeiten', examRelevance: 'mittel' },
    ],
    prerequisites: [],
    nextLessonId: 'alg-0-2',
    steps: [
      {
        id: 'alg-0-1-s1', type: 'explanation-formal', title: 'Rechenreihenfolge & Klammern',
        content: `**Warum Reihenfolge wichtig ist:** $3 + 4 \\cdot 2$ kann je nach Reihenfolge $11$ oder $14$ ergeben. Damit Mathe eindeutig bleibt, gibt es feste Regeln.

**Die Vorrangregel („Punkt vor Strich"):**
1. **Klammern zuerst** — was in der Klammer steht, wird zuerst ausgerechnet.
2. **Potenzen** ($x^n$) vor Punktrechnung.
3. **Punktrechnung** ($\\cdot$, $:$) vor Strichrechnung.
4. **Strichrechnung** ($+$, $-$) zuletzt, von links nach rechts.

**Beispiel:** $3 + 4 \\cdot 2 = 3 + 8 = 11$ (nicht $14$).

**Klammern und Minus:** Ein Minuszeichen vor einer Klammer dreht **alle** Vorzeichen in der Klammer um.
$-(3 - 5) = -3 + 5 = 2$.

**Minus mal Minus = Plus:** $(-2) \\cdot (-3) = +6$. Zwei Vorzeichenwechsel heben sich auf.`,
      },
      {
        id: 'alg-0-1-s2', type: 'explanation-intuitive', title: 'Typische Fallen',
        content: `**Falle 1 — Von links nach rechts rechnen:** $3 + 4 \\cdot 2$ nicht als $3+4=7$ lesen! Erst die Multiplikation.

**Falle 2 — Minus nur auf den ersten Summanden:** $-(3-5) \\neq -3-5$. Das Minus wirkt auf **die gesamte Klammer**.

**Falle 3 — Vorzeichen vergessen bei Doppel-Minus:** $-2 \\cdot (-3) = +6$, nicht $-6$.

**Strategie:** Wenn du unsicher bist, **setze Klammern** um das, was zuerst ausgerechnet wird:
- $3 + 4 \\cdot 2 = 3 + (4 \\cdot 2)$
- $-(3 - 5) = -(−2) = +2$`,
      },
      { id: 'alg-0-1-s3', type: 'exercise', title: 'Aufgabe 1 — Punkt-vor-Strich', exerciseRef: 'ex-alg-0-1-a' },
      { id: 'alg-0-1-s4', type: 'exercise', title: 'Aufgabe 2 — Klammer', exerciseRef: 'ex-alg-0-1-b' },
      { id: 'alg-0-1-s5', type: 'exercise', title: 'Aufgabe 3 — Minus vor Klammer', exerciseRef: 'ex-alg-0-1-c' },
      { id: 'alg-0-1-s6', type: 'exercise', title: 'Aufgabe 4 — Wahr/Falsch', exerciseRef: 'ex-alg-0-1-d' },
      { id: 'alg-0-1-s7', type: 'exercise', title: 'Aufgabe 5 — Zuordnen', exerciseRef: 'ex-alg-0-1-e' },
      { id: 'alg-0-1-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-0-1-mastery' },
    ],
  },
  {
    id: 'alg-0-2', unitId: 'alg-unit-0',
    title: 'Bruchrechnen sicher',
    order: 2, estimatedMinutes: 15,
    learningGoals: [
      'Brüche kürzen, erweitern',
      'Brüche addieren und subtrahieren (Hauptnenner finden)',
      'Brüche multiplizieren und dividieren',
    ],
    subGoals: [
      { label: 'Hauptnenner bei ungleichnamigen Brüchen finden (kgV)', examRelevance: 'hoch' },
      { label: 'Division durch Bruch als Multiplikation mit Kehrwert', examRelevance: 'hoch' },
      { label: 'Doppelbrüche auflösen', examRelevance: 'mittel' },
      { label: 'Bruch vollständig kürzen per ggT', examRelevance: 'mittel' },
    ],
    prerequisites: ['alg-0-1'],
    nextLessonId: 'alg-0-3',
    steps: [
      {
        id: 'alg-0-2-s1', type: 'explanation-formal', title: 'Regeln für Brüche',
        content: `**Kürzen & Erweitern:** Zähler und Nenner durch dieselbe Zahl teilen (kürzen) oder mit derselben Zahl multiplizieren (erweitern) ändert den **Wert nicht**.

$\\dfrac{6}{9} = \\dfrac{6/3}{9/3} = \\dfrac{2}{3}$

**Addition/Subtraktion — Hauptnenner:**
$$\\dfrac{a}{b} \\pm \\dfrac{c}{d} = \\dfrac{a \\cdot d \\pm c \\cdot b}{b \\cdot d}$$

Nur bei **gleichem Nenner** werden Zähler addiert.

**Multiplikation:** $\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{a \\cdot c}{b \\cdot d}$ — direkt Zähler mal Zähler, Nenner mal Nenner.

**Division:** Mit dem Kehrwert multiplizieren: $\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c}$.`,
      },
      {
        id: 'alg-0-2-s2', type: 'explanation-intuitive', title: 'Der häufigste Schul-Fehler',
        content: `**Falsch:** $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{1+1}{2+3} = \\dfrac{2}{5}$.

**Warum?** Das ignoriert, dass $\\tfrac{1}{2}$ und $\\tfrac{1}{3}$ **unterschiedlich große Stücke** sind — man kann sie erst zusammenzählen, wenn man sie auf die gleiche „Stückgröße" bringt.

**Richtig:** Hauptnenner $6$, dann $\\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$.

**Merkspruch:** *„Bei Addition Nenner gleich, dann nur Zähler rechnen."*`,
      },
      { id: 'alg-0-2-s3', type: 'exercise', title: 'Aufgabe 1 — Kürzen', exerciseRef: 'ex-alg-0-2-a' },
      { id: 'alg-0-2-s4', type: 'exercise', title: 'Aufgabe 2 — Addition', exerciseRef: 'ex-alg-0-2-b' },
      { id: 'alg-0-2-s5', type: 'exercise', title: 'Aufgabe 3 — Multiplikation', exerciseRef: 'ex-alg-0-2-c' },
      { id: 'alg-0-2-s6', type: 'exercise', title: 'Aufgabe 4 — Wahr/Falsch', exerciseRef: 'ex-alg-0-2-d' },
      { id: 'alg-0-2-s7', type: 'exercise', title: 'Aufgabe 5 — Reihenfolge', exerciseRef: 'ex-alg-0-2-e' },
      { id: 'alg-0-2-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-0-2-mastery' },
    ],
  },
  {
    id: 'alg-0-3', unitId: 'alg-unit-0',
    title: 'Prozent & Dreisatz',
    order: 3, estimatedMinutes: 12,
    learningGoals: [
      'Prozentwert, Grundwert, Prozentsatz berechnen',
      'Direkte vs. indirekte Proportionalität erkennen',
      'Dreisatz auf Alltagsprobleme anwenden',
    ],
    subGoals: [
      { label: 'Grundformel: $W = G \\cdot p/100$, nach $G$: $G = 100 W/p$, nach $p$: $p = 100 W/G$', examRelevance: 'hoch' },
      { label: 'Wachstumsfaktor: $+p\\% \\to \\times(1 + p/100)$, $-p\\% \\to \\times(1 - p/100)$', examRelevance: 'hoch' },
      { label: 'Zwei aufeinanderfolgende Änderungen multiplizieren sich, nicht addieren ($+10\\%$ dann $-10\\% \\neq 0$)', examRelevance: 'hoch' },
      { label: 'Direkt proportional: $x_1/y_1 = x_2/y_2$; indirekt: $x_1 y_1 = x_2 y_2$', examRelevance: 'hoch' },
      { label: 'Prozentpunkt vs. Prozent: $15\\%$ auf $10\\%$ erhöht ist $11{,}5\\%$, nicht $25\\%$', examRelevance: 'mittel' },
    ],
    prerequisites: ['alg-0-2'],
    nextLessonId: 'alg-0-4',
    steps: [
      {
        id: 'alg-0-3-s1', type: 'explanation-formal', title: 'Prozent = pro Hundert',
        content: `**Definition:** $p\\%$ bedeutet $\\dfrac{p}{100}$. Also $25\\% = 0{,}25 = \\tfrac{1}{4}$.

**Die drei Größen:**

| Symbol | Name | Beispiel |
|---|---|---|
| $G$ | Grundwert (das Ganze) | $80\\,\\text{€}$ Gesamtpreis |
| $p$ | Prozentsatz | $25\\%$ Rabatt |
| $W$ | Prozentwert (der Anteil) | $20\\,\\text{€}$ Rabatt |

**Grundformel:** $W = G \\cdot \\dfrac{p}{100}$.

**Nach $G$ oder $p$ umstellen:** $G = \\dfrac{W \\cdot 100}{p}$, \\; $p = \\dfrac{W \\cdot 100}{G}$.

**Wachstumsfaktor:** Für $+p\\%$ rechnet man $\\times (1 + p/100)$, für $-p\\%$ entsprechend $\\times (1 - p/100)$. Beispiel: $15\\%$ Rabatt auf $60\\,\\text{€}$: $60 \\cdot 0{,}85 = 51\\,\\text{€}$.`,
      },
      {
        id: 'alg-0-3-s2', type: 'explanation-formal', title: 'Dreisatz — direkt vs. indirekt',
        content: `**Direkt proportional:** Mehr $\\to$ mehr. Beispiel: Preis pro kg. Formel: $\\dfrac{x_1}{y_1} = \\dfrac{x_2}{y_2}$.

**Indirekt proportional:** Mehr $\\to$ weniger. Beispiel: Mehr Pumpen $\\to$ kürzere Zeit. Formel: $x_1 \\cdot y_1 = x_2 \\cdot y_2$ (das **Produkt** bleibt konstant).

**Fragecheck:** „Wenn mehr, dann mehr oder weniger?" — entscheidet den Typ.`,
      },
      { id: 'alg-0-3-s3', type: 'exercise', title: 'Aufgabe 1 — Prozentwert', exerciseRef: 'ex-alg-0-3-a' },
      { id: 'alg-0-3-s4', type: 'exercise', title: 'Aufgabe 2 — Rabatt', exerciseRef: 'ex-alg-0-3-b' },
      { id: 'alg-0-3-s5', type: 'exercise', title: 'Aufgabe 3 — Indirekter Dreisatz', exerciseRef: 'ex-alg-0-3-c' },
      { id: 'alg-0-3-s6', type: 'exercise', title: 'Aufgabe 4 — Prozentfalle', exerciseRef: 'ex-alg-0-3-d' },
      { id: 'alg-0-3-s7', type: 'exercise', title: 'Aufgabe 5 — Formel-Matching', exerciseRef: 'ex-alg-0-3-e' },
      { id: 'alg-0-3-s8', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-0-3-mastery' },
    ],
  },
  {
    id: 'alg-0-4', unitId: 'alg-unit-0',
    title: 'Termumformung & Gleichungen',
    order: 4, estimatedMinutes: 15,
    learningGoals: [
      'Gleichartige Terme zusammenfassen',
      'Äquivalenzumformungen sicher anwenden',
      'Formeln nach einer Variable umstellen',
    ],
    subGoals: [
      { label: 'Gleichartige Terme: gleiche Variable + gleicher Exponent; nur Koeffizienten addieren', examRelevance: 'hoch' },
      { label: 'Distributivgesetz: $a(b+c) = ab + ac$ (Aus­klammern/Aus­multi­plizieren)', examRelevance: 'hoch' },
      { label: 'Binomische Formeln: $(a\\pm b)^2 = a^2 \\pm 2ab + b^2$, $(a+b)(a-b) = a^2 - b^2$', examRelevance: 'hoch' },
      { label: 'Äquivalenzumformungen: auf beiden Seiten dasselbe tun, nicht durch Null teilen', examRelevance: 'hoch' },
      { label: 'Beim Quadrieren Probe nötig (Scheinlösungen möglich)', examRelevance: 'mittel' },
    ],
    prerequisites: ['alg-0-2'],
    nextLessonId: null,
    steps: [
      {
        id: 'alg-0-4-s1', type: 'explanation-formal', title: 'Terme vereinfachen',
        content: `**Gleichartige Terme** haben dieselbe Variable mit demselben Exponenten. Nur ihre **Koeffizienten** werden addiert/subtrahiert.

$2x + 3x - x = (2 + 3 - 1)\\,x = 4x$

**Nicht verwechseln mit Potenzen:** $x \\cdot x \\cdot x = x^3$ (Multiplikation), aber $x + x + x = 3x$ (Addition).

**Distributivgesetz:** $a(b + c) = a \\cdot b + a \\cdot c$. Wird beim Ausklammern und Ausmultiplizieren gebraucht.`,
      },
      {
        id: 'alg-0-4-s2', type: 'explanation-formal', title: 'Gleichungen lösen — Äquivalenzumformung',
        content: `**Prinzip:** Jede Operation, die du auf die **linke** Seite anwendest, musst du auch auf die **rechte** Seite anwenden. Dann bleibt die Gleichung gleichwertig.

**Erlaubte Operationen:**
- Addition/Subtraktion derselben Zahl auf beiden Seiten.
- Multiplikation/Division mit derselben Zahl $\\neq 0$.
- Beide Seiten auf eine Potenz heben (mit Vorsicht bei Wurzeln/negativen Seiten).

**Standard-Muster:** Zuerst alle $x$-Terme auf eine Seite, alle Konstanten auf die andere. Dann durch den Koeffizienten von $x$ teilen.

**Probe ist Pflicht:** Das gefundene $x$ in die Ausgangsgleichung einsetzen.`,
      },
      {
        id: 'alg-0-4-s3', type: 'explanation-intuitive', title: 'Formel nach Variable umstellen',
        content: `**Ingenieur-Alltag:** Formeln wie $F = m \\cdot a$ werden oft nach anderen Größen umgestellt. Vorgehen:

1. **Markiere die gesuchte Variable** (hier z. B. $a$).
2. **Alle anderen Terme** mit Äquivalenzumformungen auf die andere Seite.
3. Operationen werden **umgekehrt**: aus Multiplikation wird Division, aus Addition wird Subtraktion.

**Beispiel:** $F = m \\cdot a \\;\\big|\\;:m \\Rightarrow a = \\dfrac{F}{m}$.

**Einheiten-Check:** Stimmt die Einheit des Ergebnisses? $a = \\text{N}/\\text{kg} = \\text{m/s}^2$ ✓.`,
      },
      { id: 'alg-0-4-s4', type: 'exercise', title: 'Aufgabe 1 — Terme zusammenfassen', exerciseRef: 'ex-alg-0-4-a' },
      { id: 'alg-0-4-s5', type: 'exercise', title: 'Aufgabe 2 — Gleichung lösen', exerciseRef: 'ex-alg-0-4-b' },
      { id: 'alg-0-4-s6', type: 'exercise', title: 'Aufgabe 3 — Formel umstellen', exerciseRef: 'ex-alg-0-4-c' },
      { id: 'alg-0-4-s7', type: 'exercise', title: 'Aufgabe 4 — Äquivalenz', exerciseRef: 'ex-alg-0-4-d' },
      { id: 'alg-0-4-s8', type: 'exercise', title: 'Aufgabe 5 — Reihenfolge', exerciseRef: 'ex-alg-0-4-e' },
      { id: 'alg-0-4-s9', type: 'mastery-check', title: 'Verständnischeck', exerciseRef: 'ex-alg-0-4-mastery' },
    ],
  },
]

export const alg_unit0 = {
  id: 'alg-unit-0',
  title: 'Rechnen & Brüche (Vorkurs-Einstieg)',
  order: 0,
  description: 'Grundrechnen, Klammern, Brüche, Prozent, Termumformung — die Basis für alles Weitere.',
  unitGoals: [
    'Punkt-vor-Strich und Klammer-Vorrang sicher in komplexen Termen anwenden',
    'Brüche erweitern, kürzen und auf gemeinsamen Nenner bringen',
    'Prozentrechnung mit Grundwert/Prozentwert/Prozentsatz in Anwendungsaufgaben lösen',
    'Terme durch Ausmultiplizieren, Ausklammern und Zusammenfassen vereinfachen',
  ],
  lessons: lessons_alg_u0,
  exercises: exercises_alg_u0,
}
