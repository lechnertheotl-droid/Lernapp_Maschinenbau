function mc(question, options, correctIndex, explanation, hints = []) {
  return { type: 'multiple-choice', question, options, correctIndex, explanation, hints }
}

function ni(question, correctAnswer, tolerance, unit, explanation, hints = []) {
  return { type: 'number-input', question, correctAnswer, tolerance, unit, explanation, hints }
}

function tf(statement, correct, explanation, hints = []) {
  return { type: 'true-false', statement, correct, explanation, hints }
}

function matching(question, pairs, explanation, hints = []) {
  return { type: 'matching', question, pairs, explanation, hints }
}

function sorting(question, items, correctOrder, explanation, hints = []) {
  return { type: 'sorting', question, items, correctOrder, explanation, hints }
}

function bank(profile) {
  const sortingSlot = profile.sortingOverride
    ? mc(profile.sortingOverride.question, profile.sortingOverride.options, profile.sortingOverride.correctIndex, profile.sortingOverride.explanation, profile.sortingOverride.hints)
    : sorting(profile.sortingQuestion, profile.sortingItems, profile.sortingOrder, profile.sortingExplanation, profile.sortingHints)

  return [
    mc(profile.conceptQuestion, profile.conceptOptions, profile.conceptCorrect, profile.conceptExplanation, profile.conceptHints),
    ni(profile.calcQuestion, profile.calcAnswer, profile.calcTolerance, profile.calcUnit, profile.calcExplanation, profile.calcHints),
    tf(profile.trueFalseStatement, profile.trueFalseCorrect, profile.trueFalseExplanation, profile.trueFalseHints),
    matching(profile.matchingQuestion, profile.matchingPairs, profile.matchingExplanation, profile.matchingHints),
    sortingSlot,
    mc(profile.errorQuestion, profile.errorOptions, profile.errorCorrect, profile.errorExplanation, profile.errorHints),
    ni(profile.transferQuestion, profile.transferAnswer, profile.transferTolerance, profile.transferUnit, profile.transferExplanation, profile.transferHints),
  ]
}

const profiles = {
  'alg-1-1': {
    explanation: String.raw`**Infoblock: Potenzgesetze sicher anwenden**

**Kernidee:** Potenzen lassen sich nur dann direkt zusammenfassen, wenn Basis oder Exponent zur Regel passen. Bei gleicher Basis addierst du Exponenten beim Multiplizieren und subtrahierst sie beim Dividieren.

**Vorgehen:** Erst Basis prüfen, dann Klammern auflösen, dann negative Exponenten als Kehrwert schreiben.

**Typischer Fehler:** (x³)⁴ wird zu x¹², nicht zu x⁷. Hier werden Exponenten multipliziert, weil eine Potenz potenziert wird.`,
    conceptQuestion: 'Welche Regel passt zu x⁵ · x⁻²?',
    conceptOptions: ['Exponenten addieren: x³', 'Exponenten multiplizieren: x⁻¹⁰', 'Basis addieren: 2x³', 'Exponenten subtrahieren: x⁷'],
    conceptCorrect: 0,
    conceptExplanation: 'Bei gleicher Basis und Multiplikation werden die Exponenten addiert: 5 + (−2) = 3, also x³.',
    conceptHints: ['Die Basis ist in beiden Faktoren x.', 'Multiplikation gleicher Basen bedeutet Exponenten addieren.'],
    calcQuestion: 'Vereinfache (2x³)². Gib den Zahlenfaktor vor x⁶ an.',
    calcAnswer: 4,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: '(2x³)² = 2² · (x³)² = 4x⁶. Der Zahlenfaktor ist 4.',
    calcHints: ['Die Klammer potenziert auch die 2.', '(x³)² = x⁶.'],
    trueFalseStatement: 'x⁴ + x⁴ lässt sich zu x⁸ vereinfachen.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. x⁴ + x⁴ = 2x⁴. Exponenten addierst du bei Multiplikation, nicht bei Addition.',
    trueFalseHints: ['Hier steht ein Pluszeichen.', 'Teste mit x = 2.'],
    matchingQuestion: 'Ordne die Potenzregel dem richtigen Ergebnis zu.',
    matchingPairs: [{ left: 'x² · x⁵', right: 'x⁷' }, { left: 'x⁸ / x³', right: 'x⁵' }, { left: '(x²)³', right: 'x⁶' }],
    matchingExplanation: 'Multiplikation gleicher Basen addiert Exponenten, Division subtrahiert sie, Potenz von Potenz multipliziert sie.',
    matchingHints: ['Achte auf ·, / und Klammern.', 'Jede Operation hat eine andere Exponentenregel.'],
    sortingQuestion: 'Bringe die Vereinfachung von (3a²b⁻¹)² in die richtige Reihenfolge.',
    sortingItems: ['Klammer auf alle Faktoren anwenden', '3² berechnen', '(a²)² vereinfachen', '(b⁻¹)² vereinfachen', 'Ergebnis 9a⁴b⁻² notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: '(3a²b⁻¹)² = 3² · a⁴ · b⁻² = 9a⁴b⁻². Danach kann b⁻² optional als 1/b² geschrieben werden.',
    sortingHints: ['Die äußere 2 trifft jeden Faktor.', 'Negative Exponenten bleiben zunächst erlaubt.'],
    errorQuestion: 'Welche Umformung ist falsch?',
    errorOptions: ['x³ · x⁴ = x¹²', '(x³)⁴ = x¹²', 'x⁷ / x² = x⁵', 'x⁻² = 1/x²'],
    errorCorrect: 0,
    errorExplanation: 'x³ · x⁴ = x⁷, weil bei gleicher Basis multipliziert und die Exponenten addiert werden. x¹² gehört zu (x³)⁴.',
    errorHints: ['Vergleiche Multiplikation mit Potenz von Potenz.', 'Bei x³ · x⁴ steht keine äußere Klammerpotenz.'],
    transferQuestion: 'Vereinfache (10⁶ · 10⁻³) / 10². Gib den Exponenten von 10 im Ergebnis an.',
    transferAnswer: 1,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: '10⁶ · 10⁻³ / 10² = 10^(6−3−2) = 10¹. Der Exponent ist 1.',
    transferHints: ['Multiplizieren: Exponenten addieren.', 'Dividieren: Exponenten subtrahieren.'],
  },
  'alg-1-2': {
    explanation: String.raw`**Infoblock: Wurzeln und gebrochene Exponenten**

**Kernidee:** Eine Wurzel ist eine Potenz: √x = x^(1/2), ∛x = x^(1/3), und x^(m/n) = ⁿ√(xᵐ).

**Vorgehen:** Schreibe Wurzeln bei Rechnungen oft als Potenz. Ziehe perfekte Quadrate oder Kuben aus der Wurzel heraus.

**Typischer Fehler:** √(x²) ist für reelle x gleich |x|, nicht automatisch x. Das Vorzeichen darf nicht verloren gehen.`,
    conceptQuestion: 'Welche Schreibweise ist äquivalent zu √(a⁵) für a ≥ 0?',
    conceptOptions: ['a^(5/2)', 'a^(2/5)', '5a²', 'a⁵/² als Division durch 2 ohne Wurzelbezug'],
    conceptCorrect: 0,
    conceptExplanation: '√(a⁵) = (a⁵)^(1/2) = a^(5/2). Für a ≥ 0 ist die Potenzschreibweise eindeutig.',
    conceptHints: ['√x bedeutet x^(1/2).', 'Potenz von Potenz: Exponenten multiplizieren.'],
    calcQuestion: 'Vereinfache √75 = k√3. Gib k an.',
    calcAnswer: 5,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: '75 = 25 · 3, also √75 = √25 · √3 = 5√3. Damit ist k = 5.',
    calcHints: ['Suche ein Quadrat in 75.', '25 passt in 75.'],
    trueFalseStatement: 'Für alle reellen x gilt √(x²) = x.',
    trueFalseCorrect: false,
    trueFalseExplanation: 'Falsch. √(x²) = |x|. Beispiel: x = −3 ergibt √9 = 3, aber x ist −3.',
    trueFalseHints: ['Die Wurzel liefert die nichtnegative Hauptwurzel.', 'Teste einen negativen Wert.'],
    matchingQuestion: 'Ordne Wurzelschreibweise und Potenzschreibweise zu.',
    matchingPairs: [{ left: '√x', right: 'x^(1/2)' }, { left: '∛x', right: 'x^(1/3)' }, { left: '⁴√(x³)', right: 'x^(3/4)' }],
    matchingExplanation: 'Der Nenner des gebrochenen Exponenten ist der Wurzelgrad, der Zähler ist die Potenz im Radikanden.',
    matchingHints: ['Nenner = Wurzelgrad.', 'Zähler = innere Potenz.'],
    sortingQuestion: 'Bringe die Vereinfachung von √(48a²) für a ≥ 0 in die richtige Reihenfolge.',
    sortingItems: ['48 als 16 · 3 schreiben', '√16 herausziehen', '√(a²) als a schreiben, weil a ≥ 0', 'Faktoren zusammenfassen', 'Ergebnis 4a√3 notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: '√(48a²)=√(16·3·a²)=4a√3, wenn a ≥ 0 gilt.',
    sortingHints: ['Ziehe nur sichere Quadrate heraus.', 'Die Bedingung a ≥ 0 erlaubt √(a²)=a.'],
    errorQuestion: 'Welcher Schritt ist ohne Zusatzannahme falsch?',
    errorOptions: ['√(x²) = x', '√(9x²) = 3|x|', 'x^(1/2) = √x für x ≥ 0', '∛8 = 2'],
    errorCorrect: 0,
    errorExplanation: 'Ohne x ≥ 0 gilt √(x²)=|x|. Das ist ein klassischer Vorzeichenfehler.',
    errorHints: ['Die Wurzel ist nichtnegativ.', 'Was passiert bei x = −1?'],
    transferQuestion: 'Berechne 27^(2/3).',
    transferAnswer: 9,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: '27^(2/3) = (∛27)² = 3² = 9.',
    transferHints: ['Erst die dritte Wurzel ziehen.', '∛27 = 3.'],
  },
  'alg-1-3': {
    explanation: String.raw`**Infoblock: Logarithmen als Umkehrung**

**Kernidee:** log_b(a) fragt: Mit welchem Exponenten muss ich b potenzieren, damit a entsteht?

**Vorgehen:** Bei Gleichungen mit eˣ wendest du ln auf beide Seiten an. Bei Logarithmusgleichungen prüfst du zuerst den Definitionsbereich: Logarithmen brauchen positive Argumente.

**Typischer Fehler:** log(a + b) ist nicht log(a) + log(b). Summen im Logarithmus darfst du nicht auftrennen.`,
    conceptQuestion: 'Was bedeutet log₂(32) = 5?',
    conceptOptions: ['2⁵ = 32', '5² = 32', '32² = 5', '2 + 5 = 32'],
    conceptCorrect: 0,
    conceptExplanation: 'Der Logarithmus liefert den Exponenten. log₂(32)=5 bedeutet genau 2⁵=32.',
    conceptHints: ['Logarithmus fragt nach dem Exponenten.', 'Setze das Ergebnis als Hochzahl zur Basis 2.'],
    calcQuestion: 'Löse ln(x) = 2. Gib x näherungsweise an. Nutze e² ≈ 7,389.',
    calcAnswer: 7.389,
    calcTolerance: 0.01,
    calcUnit: '',
    calcExplanation: 'ln(x)=2 ist äquivalent zu x=e²≈7,389.',
    calcHints: ['ln und eˣ sind Umkehrfunktionen.', 'Exponentiere beide Seiten mit e.'],
    trueFalseStatement: 'ln(a · b) = ln(a) + ln(b) für a > 0 und b > 0.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Produkte werden im Logarithmus zu Summen. Das gilt aber nicht für ln(a + b).',
    trueFalseHints: ['Das Produktgesetz ist erlaubt.', 'Wichtig sind positive Argumente.'],
    matchingQuestion: 'Ordne die Logarithmusregeln zu.',
    matchingPairs: [{ left: 'ln(a · b)', right: 'ln(a)+ln(b)' }, { left: 'ln(a/b)', right: 'ln(a)−ln(b)' }, { left: 'ln(aʳ)', right: 'r·ln(a)' }],
    matchingExplanation: 'Produkt wird Summe, Quotient wird Differenz, Potenz wird Faktor vor dem Logarithmus.',
    matchingHints: ['Produkt/Summe, Quotient/Differenz.', 'Die Hochzahl wandert nach vorne.'],
    sortingQuestion: 'Bringe die Lösung von e^(2x) = 10 in die richtige Reihenfolge.',
    sortingItems: ['ln auf beide Seiten anwenden', 'ln(e^(2x)) = ln(10) schreiben', '2x = ln(10) vereinfachen', 'durch 2 teilen', 'x = ln(10)/2 notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'ln ist die Umkehrfunktion von eˣ. Deshalb wird aus ln(e^(2x)) direkt 2x.',
    sortingHints: ['Die Umkehrfunktion löst den Exponenten.', 'Am Ende steht x alleine.'],
    errorQuestion: 'Welche Umformung ist falsch?',
    errorOptions: ['ln(a + b) = ln(a) + ln(b)', 'ln(a · b) = ln(a) + ln(b)', 'ln(e³) = 3', 'e^(ln(5)) = 5'],
    errorCorrect: 0,
    errorExplanation: 'Für Summen gibt es kein solches Logarithmusgesetz. Nur Produkte dürfen zu Summen werden.',
    errorHints: ['Vergleiche mit dem Produktgesetz.', 'Teste a=b=1.'],
    transferQuestion: 'Ein Wert wächst nach N(t)=N₀e^(0,2t). Nach welcher Zeit ist der Faktor e^(0,2t) = 2? Gib t mit ln(2)≈0,693 an.',
    transferAnswer: 3.465,
    transferTolerance: 0.02,
    transferUnit: '',
    transferExplanation: 'e^(0,2t)=2 → 0,2t=ln(2)≈0,693 → t≈3,465.',
    transferHints: ['ln auf beide Seiten anwenden.', 'Teile am Ende durch 0,2.'],
  },
  'alg-2-1': {
    explanation: String.raw`**Infoblock: Lineare Gleichungen und Textaufgaben**

**Kernidee:** Eine lineare Gleichung löst du mit Äquivalenzumformungen: Was du links machst, musst du rechts auch machen.

**Vorgehen:** Erst Klammern und Brüche beseitigen, dann x-Terme auf eine Seite, Zahlen auf die andere, zuletzt durch den Koeffizienten teilen.

**Typischer Fehler:** Bei Bruchgleichungen wird nicht jeder Term mit dem Hauptnenner multipliziert. Dann entstehen falsche Konstanten.`,
    conceptQuestion: 'Welche Operation ist bei 4x − 7 = 13 der erste sinnvolle Schritt?',
    conceptOptions: ['Auf beiden Seiten 7 addieren', 'Nur links 7 addieren', 'Durch 13 teilen', 'x durch 4 ersetzen'],
    conceptCorrect: 0,
    conceptExplanation: 'Du willst den x-Term isolieren. Dazu addierst du auf beiden Seiten 7: 4x = 20.',
    conceptHints: ['Gleichung wie Waage denken.', 'Die −7 muss weg.'],
    calcQuestion: 'Löse 3(2x − 1) = 21. Gib x an.',
    calcAnswer: 4,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: '3(2x−1)=21 → 2x−1=7 → 2x=8 → x=4.',
    calcHints: ['Teile zuerst durch 3.', 'Danach +1 und durch 2.'],
    trueFalseStatement: 'Bei einer linearen Gleichung darf man dieselbe Zahl auf beiden Seiten addieren, ohne die Lösungsmenge zu ändern.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Das ist eine Äquivalenzumformung. Genau deshalb bleibt die Gleichung gleichwertig.',
    trueFalseHints: ['Denke an die Waage.', 'Wichtig ist: auf beiden Seiten.'],
    matchingQuestion: 'Ordne die Textgrößen einer Weg-Zeit-Aufgabe zu.',
    matchingPairs: [{ left: 'Weg', right: 'v · t' }, { left: 'Geschwindigkeit', right: 'Weg / Zeit' }, { left: 'Zeit', right: 'Weg / Geschwindigkeit' }],
    matchingExplanation: 'Viele lineare Textaufgaben entstehen aus s = v·t und einer unbekannten Zeit oder Strecke.',
    matchingHints: ['Einheiten helfen: km/h · h = km.', 'Löse die Formel bei Bedarf nach der gesuchten Größe.'],
    sortingQuestion: 'Bringe den Lösungsweg für (x + 2)/5 = 4 in die richtige Reihenfolge.',
    sortingItems: ['Gleichung mit 5 multiplizieren', 'x + 2 = 20 erhalten', 'auf beiden Seiten 2 subtrahieren', 'x = 18 notieren', 'Probe einsetzen'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Brüche beseitigt man robust, indem man beide Seiten mit dem Nenner multipliziert. Die Probe verhindert Flüchtigkeitsfehler.',
    sortingHints: ['Erst den Nenner entfernen.', 'Die Probe kommt am Ende.'],
    errorQuestion: 'Was ist der Fehler in: 2x + 5 = 17 → 2x = 22 → x = 11?',
    errorOptions: ['Es wurde 5 addiert statt 5 subtrahiert', 'Man darf nie durch 2 teilen', '17 wurde richtig zu 22', 'Die Lösung 11 ist korrekt'],
    errorCorrect: 0,
    errorExplanation: 'Von 2x + 5 = 17 musst du 5 subtrahieren: 2x = 12, also x = 6.',
    errorHints: ['Die +5 soll verschwinden.', 'Welche Gegenoperation braucht +5?'],
    transferQuestion: 'Ein Behälter enthält 12 l. Er wird mit 3 l/min gefüllt. Nach wie vielen Minuten sind 30 l erreicht?',
    transferAnswer: 6,
    transferTolerance: 0,
    transferUnit: 'min',
    transferExplanation: '12 + 3t = 30 → 3t = 18 → t = 6 min.',
    transferHints: ['Startwert plus Zuwachs pro Minute.', 'Stelle 12 + 3t = 30 auf.'],
  },
  'alg-2-2': {
    explanation: String.raw`**Infoblock: Quadratische Gleichungen**

**Kernidee:** Quadratische Gleichungen beschreiben Nullstellen von Parabeln. Je nach Form löst du durch Faktorisieren, p-q-Formel oder abc-Formel.

**Vorgehen:** Erst auf Nullform bringen. Dann prüfen: Kann ich faktorisieren? Ist die Gleichung normiert? Sonst abc-Formel.

**Typischer Fehler:** Die Diskriminante wird falsch interpretiert: D < 0 bedeutet keine reellen Nullstellen, D = 0 genau eine doppelte, D > 0 zwei reelle.`,
    conceptQuestion: 'Welche Methode ist für x² − 9 = 0 am schnellsten?',
    conceptOptions: ['Differenz zweier Quadrate faktorisieren', 'Immer Newton-Verfahren', 'Logarithmieren', 'Beide Seiten quadrieren'],
    conceptCorrect: 0,
    conceptExplanation: 'x² − 9 = (x−3)(x+3). Daraus folgen x = 3 und x = −3.',
    conceptHints: ['9 ist 3².', 'Nutze a² − b² = (a−b)(a+b).'],
    calcQuestion: 'Berechne die Diskriminante D von x² − 4x + 5 = 0.',
    calcAnswer: -4,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'Hier ist a=1, b=−4, c=5. D=b²−4ac=16−20=−4.',
    calcHints: ['D = b² − 4ac.', 'b = −4, also b² = 16.'],
    trueFalseStatement: 'Wenn die Diskriminante einer quadratischen Gleichung negativ ist, gibt es keine reellen Lösungen.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Die Wurzel aus einer negativen Diskriminante ist im Reellen nicht definiert.',
    trueFalseHints: ['In der Lösungsformel steht √D.', 'Was passiert bei D < 0 in ℝ?'],
    matchingQuestion: 'Ordne die Diskriminante der Anzahl reeller Lösungen zu.',
    matchingPairs: [{ left: 'D > 0', right: 'zwei reelle Lösungen' }, { left: 'D = 0', right: 'eine doppelte reelle Lösung' }, { left: 'D < 0', right: 'keine reelle Lösung' }],
    matchingExplanation: 'Die Diskriminante entscheidet, wie viele Schnittpunkte die Parabel mit der x-Achse hat.',
    matchingHints: ['D steht unter der Wurzel.', 'Null unter der Wurzel liefert eine doppelte Lösung.'],
    sortingQuestion: 'Bringe das Faktorisieren von x² − 5x + 6 = 0 in die richtige Reihenfolge.',
    sortingItems: ['Zwei Zahlen mit Produkt 6 suchen', 'Zusätzlich Summe 5 prüfen', 'Zahlen 2 und 3 erkennen', '(x−2)(x−3)=0 schreiben', 'x=2 oder x=3 notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Bei x² − 5x + 6 sucht man 2 und 3, weil 2·3=6 und 2+3=5. Wegen des Minuszeichens entstehen (x−2)(x−3).',
    sortingHints: ['Vieta hilft.', 'Achte auf die Vorzeichen im Faktor.'],
    errorQuestion: 'Welche Aussage ist falsch?',
    errorOptions: ['D = 0 bedeutet keine reelle Lösung', 'D < 0 bedeutet keine reelle Lösung', 'D > 0 bedeutet zwei reelle Lösungen', 'D = 0 bedeutet eine doppelte reelle Lösung'],
    errorCorrect: 0,
    errorExplanation: 'D = 0 bedeutet genau eine doppelte reelle Lösung, nicht keine Lösung.',
    errorHints: ['√0 ist definiert.', 'Dann fallen + und − in der Formel zusammen.'],
    transferQuestion: 'Ein Rechteck hat Fläche 24 m² und Länge x, Breite x−2. Löse x(x−2)=24. Gib die positive Länge x an.',
    transferAnswer: 6,
    transferTolerance: 0,
    transferUnit: 'm',
    transferExplanation: 'x(x−2)=24 → x²−2x−24=0 → (x−6)(x+4)=0. Positive Länge: x=6 m.',
    transferHints: ['Bringe alles auf eine Seite.', 'Suche Faktoren von −24 mit Summe −2.'],
  },
  'alg-2-3': {
    explanation: String.raw`**Infoblock: Polynome und Polynomdivision**

**Kernidee:** Ist x₀ eine Nullstelle von P(x), dann ist (x − x₀) ein Faktor. Polynomdivision reduziert den Grad und macht weitere Nullstellen sichtbar.

**Vorgehen:** Erst mögliche einfache Nullstellen testen, dann durch den passenden Linearfaktor dividieren, dann den Rest prüfen.

**Typischer Fehler:** Bei einer Nullstelle x₀ = −2 muss durch (x + 2) dividiert werden, nicht durch (x − 2).`,
    conceptQuestion: 'Wenn P(3) = 0 gilt, welcher Faktor gehört zu P(x)?',
    conceptOptions: ['(x − 3)', '(x + 3)', '(3x − 1)', '(x − P)'],
    conceptCorrect: 0,
    conceptExplanation: 'Nach dem Faktorsatz gilt: P(3)=0 genau dann, wenn (x−3) ein Faktor von P(x) ist.',
    conceptHints: ['Nullstelle x₀ führt zu Faktor (x−x₀).', 'Setze x=3 in den Faktor ein.'],
    calcQuestion: 'Berechne P(2) für P(x)=x³−4x.',
    calcAnswer: 0,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'P(2)=2³−4·2=8−8=0. Also ist x=2 eine Nullstelle.',
    calcHints: ['Setze x = 2 ein.', '2³ = 8.'],
    trueFalseStatement: 'Wenn bei der Polynomdivision durch (x−1) ein Rest ungleich 0 bleibt, ist x=1 keine Nullstelle.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der Rest ist P(1). Ist er nicht 0, liegt keine Nullstelle bei x=1 vor.',
    trueFalseHints: ['Restsatz: Rest bei Division durch (x−a) ist P(a).', 'Nullstelle bedeutet Funktionswert 0.'],
    matchingQuestion: 'Ordne Nullstelle und Linearfaktor zu.',
    matchingPairs: [{ left: 'x₀ = 4', right: 'x − 4' }, { left: 'x₀ = −2', right: 'x + 2' }, { left: 'x₀ = 0', right: 'x' }],
    matchingExplanation: 'Der Linearfaktor lautet immer x − x₀. Bei negativen Nullstellen wird daraus ein Plus.',
    matchingHints: ['Setze die Nullstelle in den Faktor ein.', 'Der Faktor muss dann 0 werden.'],
    sortingQuestion: 'Bringe das Lösen von P(x)=x³−3x²−4x+12 in die richtige Reihenfolge.',
    sortingItems: ['Einfache Nullstelle testen', 'P(2)=0 erkennen', 'durch (x−2) dividieren', 'quadratischen Restfaktor lösen', 'alle Nullstellen notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'Nach einer gefundenen Nullstelle reduziert die Division den Grad. Danach bleiben meist quadratische Standardmethoden.',
    sortingHints: ['Teste kleine ganze Zahlen.', 'Erst nach einer Nullstelle dividieren.'],
    errorQuestion: 'Welche Aussage ist falsch?',
    errorOptions: ['Aus x₀ = −5 folgt der Faktor (x − 5)', 'Aus x₀ = 5 folgt der Faktor (x − 5)', 'P(0)=0 bedeutet Faktor x', 'Rest 0 bedeutet passende Nullstelle'],
    errorCorrect: 0,
    errorExplanation: 'Aus x₀ = −5 folgt der Faktor x − (−5) = x + 5.',
    errorHints: ['Achte auf das doppelte Minus.', 'Der Faktor muss bei x = −5 zu 0 werden.'],
    transferQuestion: 'P(x)=x³−6x²+11x−6 hat die Nullstelle x=1. Nach Division bleibt x²−5x+6. Gib die kleinere weitere Nullstelle an.',
    transferAnswer: 2,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: 'x²−5x+6=(x−2)(x−3). Die weiteren Nullstellen sind 2 und 3, die kleinere ist 2.',
    transferHints: ['Faktorisiere den quadratischen Rest.', 'Produkt 6, Summe 5.'],
  },
  'alg-2-4': {
    explanation: String.raw`**Infoblock: Ungleichungen**

**Kernidee:** Ungleichungen funktionieren wie Gleichungen, aber beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Ungleichheitszeichen um.

**Vorgehen:** Bei linearen Ungleichungen sauber umformen. Bei Beträgen Fallunterscheidung nutzen. Bei Produkten oder quadratischen Ausdrücken Nullstellen bestimmen und Vorzeichentabelle erstellen.

**Typischer Fehler:** Aus −3x < 12 wird x < −4. Richtig ist x > −4, weil durch −3 geteilt wird.`,
    conceptQuestion: 'Was passiert mit dem Zeichen, wenn du −2x > 8 durch −2 teilst?',
    conceptOptions: ['Es dreht sich um: x < −4', 'Es bleibt gleich: x > −4', 'Es verschwindet', 'Es wird zu ='],
    conceptCorrect: 0,
    conceptExplanation: 'Beim Dividieren durch eine negative Zahl dreht sich das Ungleichheitszeichen um: x < −4.',
    conceptHints: ['Negative Zahl beim Teilen.', 'Das Zeichen muss kippen.'],
    calcQuestion: 'Löse 5 − 2x ≤ 11. Gib die Grenzzahl an.',
    calcAnswer: -3,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: '5−2x≤11 → −2x≤6 → beim Teilen durch −2: x≥−3. Die Grenzzahl ist −3.',
    calcHints: ['Subtrahiere zuerst 5.', 'Beim Teilen durch −2 Zeichen drehen.'],
    trueFalseStatement: '|x − 4| < 2 bedeutet 2 < x < 6.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der Abstand von x zu 4 ist kleiner als 2, also liegt x zwischen 2 und 6.',
    trueFalseHints: ['Betrag als Abstand lesen.', 'Zwei Einheiten links und rechts von 4.'],
    matchingQuestion: 'Ordne Ungleichung und Lösungsmenge zu.',
    matchingPairs: [{ left: 'x − 3 > 2', right: 'x > 5' }, { left: '−x ≥ 4', right: 'x ≤ −4' }, { left: '|x| < 3', right: '−3 < x < 3' }],
    matchingExplanation: 'Lineare Ungleichungen brauchen Äquivalenzumformungen; Beträge beschreiben Abstände.',
    matchingHints: ['Beim negativen Faktor Zeichen drehen.', 'Betrag kleiner bedeutet Intervall zwischen zwei Grenzen.'],
    sortingQuestion: 'Bringe die Lösung von x² − 1 ≥ 0 in die richtige Reihenfolge.',
    sortingItems: ['Nullstellen −1 und 1 bestimmen', 'Zahlengerade in Intervalle teilen', 'Vorzeichen in jedem Intervall prüfen', 'Außenintervalle als positiv erkennen', 'Lösung x ≤ −1 oder x ≥ 1 notieren'],
    sortingOrder: [0, 1, 2, 3, 4],
    sortingExplanation: 'x²−1=(x−1)(x+1). Das Produkt ist außerhalb der Nullstellen positiv und zwischen ihnen negativ.',
    sortingHints: ['Erst Nullstellen, dann Intervalle.', 'Die Parabel öffnet nach oben.'],
    errorQuestion: 'Welche Lösung ist falsch?',
    errorOptions: ['−4x < 8 → x < −2', '−4x < 8 → x > −2', 'x + 5 ≥ 9 → x ≥ 4', '|x| ≤ 2 → −2 ≤ x ≤ 2'],
    errorCorrect: 0,
    errorExplanation: 'Beim Teilen durch −4 muss das Zeichen drehen: −4x<8 → x>−2.',
    errorHints: ['Negative Division.', 'Das Zeichen muss wechseln.'],
    transferQuestion: 'Löse |2x| ≤ 10. Gib die obere Grenze der Lösungsmenge an.',
    transferAnswer: 5,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: '|2x|≤10 → −10≤2x≤10 → −5≤x≤5. Die obere Grenze ist 5.',
    transferHints: ['Betrag kleiner/gleich wird zu einem Doppelintervall.', 'Teile danach durch 2.'],
  },
  'alg-3-1': {
    explanation: String.raw`**Infoblock: Funktionsbegriff**

**Kernidee:** Eine Funktion ordnet jedem erlaubten Eingang x genau einen Ausgang f(x) zu. Definitionsbereich und Wertebereich gehören zur vollständigen Beschreibung.

**Vorgehen:** Prüfe zuerst, welche x-Werte erlaubt sind. Danach bestimmst du mögliche Funktionswerte und Eigenschaften wie injektiv, surjektiv oder bijektiv.

**Typischer Fehler:** Eine Zuordnung mit einem x-Wert und zwei verschiedenen y-Werten ist keine Funktion.`,
    conceptQuestion: 'Welche Zuordnung ist keine Funktion?',
    conceptOptions: ['x=1 wird sowohl y=2 als auch y=3 zugeordnet', 'x=1 wird y=2 zugeordnet', 'x=2 wird y=4 zugeordnet', 'jedem x wird genau ein y zugeordnet'],
    conceptCorrect: 0,
    conceptExplanation: 'Eine Funktion darf jedem Eingang genau einen Ausgang zuordnen. Zwei Ausgänge für denselben Eingang verletzen die Definition.',
    conceptHints: ['Fokus auf denselben x-Wert.', 'Eine Funktion ist eindeutig.'],
    calcQuestion: 'Für f(x)=2x²−1: Berechne f(3).',
    calcAnswer: 17,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'f(3)=2·3²−1=18−1=17.',
    calcHints: ['Setze x=3 ein.', '3² = 9.'],
    trueFalseStatement: 'f(x)=x² ist auf ℝ nicht injektiv.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Zum Beispiel f(2)=4 und f(−2)=4. Verschiedene Eingaben führen zum gleichen Ausgang.',
    trueFalseHints: ['Injektiv bedeutet: verschiedene x liefern verschiedene y.', 'Teste 2 und −2.'],
    matchingQuestion: 'Ordne die Funktionsbegriffe zu.',
    matchingPairs: [{ left: 'Definitionsbereich', right: 'erlaubte x-Werte' }, { left: 'Wertebereich', right: 'mögliche y-Werte' }, { left: 'bijektiv', right: 'injektiv und surjektiv' }],
    matchingExplanation: 'Diese Begriffe sind Grundlage für Umkehrfunktionen und Modellfunktionen.',
    matchingHints: ['Definition = Eingaben.', 'Wertebereich = Ausgaben.'],
    sortingOverride: {
      question: 'Welcher Schritt muss bei der Funktionsprüfung einer Zuordnung zwingend als erstes erfolgen?',
      options: [
        'Eindeutigkeit prüfen – hat jeder Eingang genau einen Ausgang?',
        'Wertebereich bestimmen',
        'Definitionsbereich notieren',
        'Den Graphen zeichnen',
      ],
      correctIndex: 0,
      explanation: 'Die Eindeutigkeit ist das Kernkriterium einer Funktion. Erst wenn jeder Eingang genau einen Ausgang hat, macht es Sinn, Definitions- und Wertebereich zu bestimmen.',
      hints: ['Eine Funktion ist per Definition eindeutig.', 'Ohne Eindeutigkeitsprüfung ist alles Weitere sinnlos.'],
    },
    errorQuestion: 'Welche Aussage ist falsch?',
    errorOptions: ['Eine Funktion darf einem x-Wert beliebig viele y-Werte zuordnen', 'Eine Funktion hat einen Definitionsbereich', 'f(2) ist der Funktionswert bei x=2', 'Bijektiv bedeutet injektiv und surjektiv'],
    errorCorrect: 0,
    errorExplanation: 'Eine Funktion ist eindeutig: Jeder x-Wert bekommt genau einen y-Wert.',
    errorHints: ['Das Wort genau ist entscheidend.', 'Viele y für ein x ist verboten.'],
    transferQuestion: 'Für f(x)=x² mit Definitionsbereich x≥0: Berechne den x-Wert, der f(x)=25 liefert.',
    transferAnswer: 5,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: 'Bei x≥0 gilt x²=25 → x=5. Die negative Lösung −5 liegt nicht im Definitionsbereich.',
    transferHints: ['Beachte den Definitionsbereich.', 'Nur die nichtnegative Lösung ist erlaubt.'],
  },
  'alg-3-2': {
    explanation: String.raw`**Infoblock: Elementare Funktionen erkennen**

**Kernidee:** Potenz-, Exponential- und Logarithmusfunktionen haben unterschiedliche Rollen: Potenzen haben x in der Basis, Exponentialfunktionen x im Exponenten, Logarithmen sind Umkehrfunktionen von Exponentialfunktionen.

**Vorgehen:** Erst Funktionstyp erkennen, dann Definitionsbereich und Wachstumsverhalten prüfen.

**Typischer Fehler:** ln(x) ist für x ≤ 0 im Reellen nicht definiert.`,
    conceptQuestion: 'Welche Funktion ist eine Exponentialfunktion?',
    conceptOptions: ['f(x)=3·2ˣ', 'f(x)=x²', 'f(x)=ln(x)', 'f(x)=2x+1'],
    conceptCorrect: 0,
    conceptExplanation: 'Bei einer Exponentialfunktion steht die Variable im Exponenten. Das ist bei 3·2ˣ der Fall.',
    conceptHints: ['Suche x in der Hochzahl.', 'x² ist eine Potenzfunktion.'],
    calcQuestion: 'Berechne f(0) für f(x)=5eˣ.',
    calcAnswer: 5,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'e⁰=1, daher f(0)=5·1=5.',
    calcHints: ['Jede positive Basis hoch 0 ist 1.', 'e⁰ = 1.'],
    trueFalseStatement: 'ln(x) hat im Reellen den Definitionsbereich x > 0.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Der natürliche Logarithmus ist im Reellen nur für positive Argumente definiert.',
    trueFalseHints: ['Logarithmusargumente müssen positiv sein.', 'x=0 ist nicht erlaubt.'],
    matchingQuestion: 'Ordne Funktion und Typ zu.',
    matchingPairs: [{ left: 'x³', right: 'Potenzfunktion' }, { left: '2ˣ', right: 'Exponentialfunktion' }, { left: 'ln(x)', right: 'Logarithmusfunktion' }],
    matchingExplanation: 'Der Ort der Variable entscheidet oft über den Funktionstyp: Basis, Exponent oder Logarithmusargument.',
    matchingHints: ['x in der Basis: Potenzfunktion.', 'x im Exponenten: Exponentialfunktion.'],
    sortingQuestion: 'Sortiere das Wachstum für große positive x von langsam nach schnell.',
    sortingItems: ['ln(x)', 'x', 'x²', '2ˣ'],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Für große x wächst ln(x) sehr langsam, lineare Funktionen schneller, Polynome noch schneller und Exponentialfunktionen am schnellsten.',
    sortingHints: ['Logarithmus wächst sehr langsam.', 'Exponential schlägt Potenzen langfristig.'],
    errorQuestion: 'Welche Aussage ist falsch?',
    errorOptions: ['ln(−1) ist im Reellen definiert', 'eˣ ist für alle reellen x positiv', 'x² ist eine Potenzfunktion', '2ˣ ist eine Exponentialfunktion'],
    errorCorrect: 0,
    errorExplanation: 'ln(−1) ist im Reellen nicht definiert, weil das Argument negativ ist.',
    errorHints: ['Prüfe das Logarithmusargument.', 'Es muss positiv sein.'],
    transferQuestion: 'Eine Größe verdoppelt sich nach N(t)=3·2ᵗ. Berechne N(4).',
    transferAnswer: 48,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: 'N(4)=3·2⁴=3·16=48.',
    transferHints: ['Setze t=4 ein.', '2⁴ = 16.'],
  },
  'alg-3-3': {
    explanation: String.raw`**Infoblock: Funktionsoperationen und Transformationen**

**Kernidee:** Transformationen verändern Graphen systematisch: außen an f(x) wirkt vertikal, innen am Argument wirkt horizontal.

**Vorgehen:** Lies eine Funktion von innen nach außen: f(x−a) verschiebt nach rechts um a, f(x)+b nach oben um b, −f(x) spiegelt an der x-Achse.

**Typischer Fehler:** f(x−3) wird als Verschiebung nach links gelesen. Richtig: nach rechts um 3.`,
    conceptQuestion: 'Was macht g(x)=f(x−4)+2 mit dem Graphen von f?',
    conceptOptions: ['4 nach rechts und 2 nach oben', '4 nach links und 2 nach unten', '4 nach rechts und 2 nach unten', '4 nach links und 2 nach oben'],
    conceptCorrect: 0,
    conceptExplanation: 'x−4 im Argument verschiebt nach rechts um 4. +2 außerhalb verschiebt nach oben um 2.',
    conceptHints: ['Innen ist horizontal und wirkt scheinbar gegen das Vorzeichen.', 'Außen ist vertikal und direkt.'],
    calcQuestion: 'Für f(x)=x² und g(x)=3f(x): Berechne g(2).',
    calcAnswer: 12,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'g(2)=3f(2)=3·2²=12.',
    calcHints: ['Erst f(2) berechnen.', 'Danach mit 3 strecken.'],
    trueFalseStatement: 'g(x)=f(x)+5 verschiebt den Graphen von f um 5 nach oben.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Eine Addition außerhalb der Funktion verändert die y-Werte direkt.',
    trueFalseHints: ['Außerhalb von f wirkt vertikal.', 'Alle y-Werte werden um 5 größer.'],
    matchingQuestion: 'Ordne Transformation und Wirkung zu.',
    matchingPairs: [{ left: 'f(x)+3', right: '3 nach oben' }, { left: 'f(x−3)', right: '3 nach rechts' }, { left: '−f(x)', right: 'Spiegelung an der x-Achse' }],
    matchingExplanation: 'Außen: vertikal. Innen: horizontal. Vorzeichen vor der Funktion: Spiegelung an der x-Achse.',
    matchingHints: ['Innen bei x ist horizontal.', 'Ein Minus vor f kippt y-Werte.'],
    sortingQuestion: 'Bringe das Aufstellen von g(x) aus f(x)=x² bei Verschiebung 2 nach rechts und 1 nach unten in die richtige Reihenfolge.',
    sortingItems: ['Ausgangsfunktion f(x)=x² nehmen', 'Rechtsverschiebung als (x−2) einsetzen', 'Abwärtsverschiebung als −1 außen ergänzen', 'g(x)=(x−2)²−1 notieren'],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Nach rechts verschieben heißt im Argument x−2. Nach unten verschieben heißt außen −1.',
    sortingHints: ['Horizontale Verschiebung steht im Argument.', 'Vertikale Verschiebung steht außerhalb.'],
    errorQuestion: 'Welche Interpretation ist falsch?',
    errorOptions: ['f(x−2) verschiebt um 2 nach links', 'f(x)+2 verschiebt um 2 nach oben', '−f(x) spiegelt an der x-Achse', '2f(x) streckt vertikal um Faktor 2'],
    errorCorrect: 0,
    errorExplanation: 'f(x−2) verschiebt um 2 nach rechts, nicht nach links.',
    errorHints: ['Innen wirkt scheinbar entgegengesetzt.', 'Teste den Scheitel von x².'],
    transferQuestion: 'Der Scheitel von f(x)=x² wird durch g(x)=(x−3)²+4 verschoben. Gib die x-Koordinate des neuen Scheitels an.',
    transferAnswer: 3,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: 'g(x)=(x−3)²+4 hat den Scheitel bei (3,4). Die x-Koordinate ist 3.',
    transferHints: ['Scheitelpunktform: (x−a)²+b.', 'a ist die x-Koordinate.'],
  },
  'alg-3-4': {
    explanation: String.raw`**Infoblock: Umkehrfunktionen**

**Kernidee:** Eine Umkehrfunktion macht die Wirkung einer Funktion rückgängig. Sie existiert eindeutig, wenn die Funktion auf dem betrachteten Bereich bijektiv ist.

**Vorgehen:** y=f(x) schreiben, nach x auflösen, dann x und y vertauschen. Danach Definitions- und Wertebereich tauschen.

**Typischer Fehler:** x² wird auf ganz ℝ einfach zu √x umgekehrt. Das geht erst nach Einschränkung auf x ≥ 0 oder x ≤ 0.`,
    conceptQuestion: 'Welche Bedingung ist für eine eindeutige Umkehrfunktion nötig?',
    conceptOptions: ['Die Funktion ist bijektiv auf dem betrachteten Bereich', 'Die Funktion hat nur positive Werte', 'Die Funktion ist immer quadratisch', 'Der Graph darf die y-Achse nie schneiden'],
    conceptCorrect: 0,
    conceptExplanation: 'Eine Umkehrfunktion ist eindeutig, wenn jeder y-Wert genau zu einem x-Wert gehört. Das ist Bijektivität.',
    conceptHints: ['Umkehrung muss eindeutig zurückgehen.', 'Injektivität ist besonders wichtig.'],
    calcQuestion: 'Für f(x)=4x−7: Berechne f⁻¹(5).',
    calcAnswer: 3,
    calcTolerance: 0,
    calcUnit: '',
    calcExplanation: 'Setze 5=4x−7 → 4x=12 → x=3. Also f⁻¹(5)=3.',
    calcHints: ['Frage: Welches x liefert f(x)=5?', 'Löse 4x−7=5.'],
    trueFalseStatement: 'Der Graph von f⁻¹ entsteht durch Spiegelung des Graphen von f an der Geraden y=x.',
    trueFalseCorrect: true,
    trueFalseExplanation: 'Richtig. Beim Umkehren werden x- und y-Koordinaten vertauscht.',
    trueFalseHints: ['Umkehrung tauscht Ein- und Ausgabe.', 'Spiegelachse ist y=x.'],
    matchingQuestion: 'Ordne Funktion und Umkehrfunktion zu.',
    matchingPairs: [{ left: 'f(x)=x+3', right: 'f⁻¹(x)=x−3' }, { left: 'f(x)=2x', right: 'f⁻¹(x)=x/2' }, { left: 'f(x)=eˣ', right: 'f⁻¹(x)=ln(x)' }],
    matchingExplanation: 'Umkehrfunktionen machen die ursprüngliche Operation rückgängig: +3 wird −3, ·2 wird /2, eˣ wird ln(x).',
    matchingHints: ['Denke rückwärts.', 'eˣ und ln(x) sind Umkehrpaare.'],
    sortingQuestion: 'Bringe die Bestimmung von f⁻¹ für f(x)=2x+6 in die richtige Reihenfolge.',
    sortingItems: ['y = 2x + 6 schreiben', 'nach x auflösen: x = (y−6)/2', 'x und y vertauschen', 'f⁻¹(x) = (x−6)/2 notieren'],
    sortingOrder: [0, 1, 2, 3],
    sortingExplanation: 'Die Standardmethode ist: y schreiben, nach x auflösen, Variablen tauschen.',
    sortingHints: ['Nicht sofort x und y tauschen.', 'Erst nach x isolieren.'],
    errorQuestion: 'Welche Aussage ist falsch?',
    errorOptions: ['f(x)=x² hat auf ganz ℝ die Umkehrfunktion √x', 'f(x)=x³ hat auf ℝ eine Umkehrfunktion', 'f(x)=eˣ hat die Umkehrfunktion ln(x)', 'Definitions- und Wertebereich werden bei der Umkehrung vertauscht'],
    errorCorrect: 0,
    errorExplanation: 'x² ist auf ganz ℝ nicht injektiv, weil x und −x denselben Wert liefern. Erst mit Bereichseinschränkung ist eine Umkehrung eindeutig.',
    errorHints: ['Teste x=2 und x=−2.', 'Beide liefern 4.'],
    transferQuestion: 'Für f(x)=√x mit Definitionsbereich x≥0: Berechne f⁻¹(9).',
    transferAnswer: 81,
    transferTolerance: 0,
    transferUnit: '',
    transferExplanation: 'Wenn y=√x, dann x=y². Also f⁻¹(y)=y² und f⁻¹(9)=81.',
    transferHints: ['√x rückgängig machen heißt quadrieren.', 'Setze y=9 in y² ein.'],
  },
}

export const algebraSupplements = Object.fromEntries(
  Object.entries(profiles).map(([lessonId, profile]) => [
    lessonId,
    {
      explanation: profile.explanation,
      exercises: bank(profile),
    },
  ])
)
