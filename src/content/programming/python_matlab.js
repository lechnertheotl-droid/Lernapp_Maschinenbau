// ── Python & Matlab für Maschinenbau ────────────────────────────────────────
// Praxisrelevante Programmier-Skills für TU Wien MB-Studium.

function exerciseId(lessonId, index) {
  return `ex-${lessonId}-${String.fromCharCode(97 + index)}`
}

function expandExplanation(lesson) {
  return `${lesson.content}

**Arbeitsmuster für Programmieraufgaben:**
1. Kläre zuerst Eingaben, Ausgabe und Datentypen.
2. Schreibe die Lösung in kleinen Schritten: Variablen anlegen, Berechnung, Ausgabe/Plot.
3. Prüfe Indizes bewusst: Python startet bei 0, Matlab bei 1.
4. Teste den Code mit kleinen Zahlen, deren Ergebnis du im Kopf prüfen kannst.
5. Vergleiche bei NumPy/Matlab elementweise Operatoren mit Matrixoperationen.

**Typische Fehler:** Zuweisung mit Vergleich verwechseln, Stern statt Matrixmultiplikation in NumPy nutzen, in Matlab Potenz statt elementweiser Potenz schreiben, Schleifengrenzen falsch lesen oder Plots ohne Achsen-/Einheitenkontext interpretieren.`
}

function buildTopic(def) {
  const allLessons = def.units.flatMap((unit) => unit.lessons)
  const nextById = Object.fromEntries(allLessons.map((lesson, index) => [lesson.id, allLessons[index + 1]?.id ?? null]))

  const units = def.units.map((unit, unitIndex) => {
    const exercises = {}
    const lessons = unit.lessons.map((lesson, lessonIndex) => {
      const exerciseSteps = lesson.exercises.map((exercise, exerciseIndex) => {
        const id = exerciseId(lesson.id, exerciseIndex)
        exercises[id] = {
          id,
          lessonId: lesson.id,
          isMasteryCheck: exerciseIndex === lesson.exercises.length - 1,
          hints: exercise.hints ?? [],
          ...exercise,
        }
        return {
          id: `${lesson.id}-s${exerciseIndex + 3}`,
          type: exerciseIndex === lesson.exercises.length - 1 ? 'mastery-check' : 'exercise',
          title: exerciseIndex === lesson.exercises.length - 1 ? 'Verständnischeck' : `Aufgabe ${exerciseIndex + 1}`,
          exerciseRef: id,
        }
      })

      return {
        id: lesson.id,
        unitId: unit.id,
        title: lesson.title,
        order: lessonIndex + 1,
        estimatedMinutes: lesson.estimatedMinutes ?? 10,
        learningGoals: lesson.learningGoals,
        ...(lesson.subGoals ? { subGoals: lesson.subGoals } : {}),
        prerequisites: lesson.prerequisites ?? [],
        nextLessonId: nextById[lesson.id],
        steps: [
          {
            id: `${lesson.id}-s1`,
            type: lesson.type ?? 'explanation-formal',
            title: lesson.explanationTitle ?? lesson.title,
            content: expandExplanation(lesson),
          },
          ...exerciseSteps,
        ],
      }
    })

    return {
      id: unit.id,
      title: unit.title,
      order: unitIndex + 1,
      description: unit.description,
      lessons,
      exercises,
    }
  })

  return { ...def.topic, units }
}

// ─────────────────────────────────────────────────────────────────────────────

const pythonMatlabTopic = buildTopic({
  topic: {
    id: 'python-matlab',
    title: 'Python & Matlab',
    description: 'Programmier-Grundlagen und numerische Methoden für Maschinenbau an der TU Wien.',
    subject: 'programming',
    icon: 'PY',
    color: 'blue',
    estimatedHours: 10,
    difficulty: 2,
    level: 'grundlagen',
    prerequisites: [],
    phase: 'semester-1',
    examRelevance: 'pflicht',
    topicGoals: [
      'Python- und Matlab-Syntax parallel lesen (Indentation vs. end-Blöcke, 0- vs. 1-basiertes Indexing)',
      'Variablen, Listen/Arrays und Dicts/Structs situationsgerecht einsetzen und Elementzugriff korrekt schreiben',
      'Kontrollstrukturen (if/else, for, while) und Funktionen/Unterprogramme in beiden Sprachen formulieren',
      'NumPy- bzw. Matlab-Vektor-/Matrix-Operationen anstelle expliziter Schleifen verwenden (Vektorisierung)',
      'Lineare Gleichungssysteme $A x = b$ mit `numpy.linalg.solve` bzw. `A\\\\b` lösen und Dimensionen prüfen',
      'Plots (matplotlib.pyplot bzw. plot) mit Achsenbeschriftung, Legende und mehreren Kurven erstellen',
      'Typische Fehler (Indexing-off-by-one, Broadcasting, Float-Vergleich mit `==`) erkennen und vermeiden',
    ],
  },
  units: [
    // ── Unit 1: Python Grundlagen ──────────────────────────────────────
    {
      id: 'py-unit-1',
      title: 'Python Grundlagen',
      description: 'Variablen, Datentypen, Kontrollstrukturen und Funktionen.',
      lessons: [
        {
          id: 'py-1-1',
          title: 'Variablen & Datentypen',
          learningGoals: ['Variablen zuweisen und benennen', 'int, float, string und bool unterscheiden', 'Typumwandlungen durchführen'],
          subGoals: [
            { label: 'Dynamische Typisierung: keine Typangabe nötig, aber Typ ändert sich mit dem Wert', examRelevance: 'hoch' },
            { label: 'int/float/str/bool mit `type(x)` prüfen', examRelevance: 'mittel' },
            { label: 'Explizite Konvertierung `int("42")`, `float(3)`, `str(3.14)` — `int("3.14")` wirft `ValueError`', examRelevance: 'hoch' },
            { label: '`snake_case` für Variablen in Python; Matlab nutzt `camelCase` oder Unterstrich-frei', examRelevance: 'niedrig' },
          ],
          content: String.raw`In Python brauchst du **keinen Typ** bei der Deklaration — der Interpreter erkennt ihn automatisch.

**Grundtypen:**
| Typ | Beispiel | Beschreibung |
|---|---|---|
| \`int\` | \`x = 42\` | Ganze Zahl |
| \`float\` | \`y = 3.14\` | Dezimalzahl |
| \`str\` | \`s = "Hallo"\` | Zeichenkette |
| \`bool\` | \`b = True\` | Wahrheitswert |

**Typumwandlung:**

\`\`\`python
x = int("42")      # str → int
y = float(7)       # int → float
s = str(3.14)      # float → str
\`\`\`

**Namenskonventionen:** Variablennamen in Python sind \`snake_case\` (Kleinbuchstaben + Unterstriche): \`mein_wert\`, \`kraft_in_newton\`.

**Matlab-Vergleich:** In Matlab gibt es keine explizite Typdeklaration ähnlich wie in Python. Alles ist standardmäßig \`double\`. Strings: \`s = "Hallo"\` oder \`s = 'Hallo'\`.`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welchen Typ hat `x` nach `x = 3.0` in Python?',
              options: ['int', 'float', 'str', 'double'],
              correctIndex: 1,
              explanation: '`3.0` hat einen Dezimalpunkt, daher ist der Typ `float`.',
              hints: ['Achte auf den Dezimalpunkt.'],
              wrongAnswerExplanations: {
                "0": '`int` wäre korrekt bei `x = 3` ohne Dezimalpunkt. Sobald ein Punkt steht (auch `3.0`), erzeugt Python automatisch einen `float`. Regel: Zahlliteral ohne Punkt → `int`, mit Punkt → `float`.',
                "2": '`str` gilt nur, wenn der Wert in Anführungszeichen steht, z.B. `x = "3.0"`. Ohne Quotes ist es eine Zahl. Der Dezimalpunkt macht es zum `float`, nicht zum Text.',
                "3": '`double` ist der Matlab-/C-Name für Gleitkommazahlen. Python nennt diesen Typ `float` (intern ebenfalls 64-bit IEEE 754). Verwechslung mit anderen Sprachen: in Python heisst das Typ-Objekt `<class \'float\'>`.',
              },
            },
            {
              type: 'multiple-choice',
              question: 'Was ergibt `type(True)` in Python?',
              options: ['<class \'int\'>', '<class \'bool\'>', '<class \'str\'>', '<class \'logical\'>'],
              correctIndex: 1,
              explanation: '`True` und `False` sind vom Typ `bool`.',
              hints: ['True und False sind die beiden Wahrheitswerte in Python.'],
              wrongAnswerExplanations: {
                "0": 'Zwar ist `bool` intern eine Unterklasse von `int` (`True == 1`, `False == 0`), aber `type(True)` gibt die konkrete Klasse zurück, nicht die Basisklasse. `type()` liefert immer den genauesten Typ — hier `bool`.',
                "2": '`str` käme nur bei Anführungszeichen heraus, also `type("True")`. Ohne Quotes ist `True` das Python-Schlüsselwort für den Wahrheitswert, nicht ein Text.',
                "3": '`logical` ist der Matlab-Typname für Wahrheitswerte. Python nennt diesen Typ `bool` (nach George Boole). Typisch, wenn Matlab-Wissen unreflektiert auf Python uebertragen wird.',
              },
            },
            {
              type: 'true-false',
              statement: 'In Python muss man den Datentyp einer Variable bei der Deklaration angeben.',
              correct: false,
              explanation: 'Python ist dynamisch typisiert — der Typ wird automatisch erkannt.',
              hints: ['Python ist eine dynamisch typisierte Sprache.'],
            },
          ],
        },
        {
          id: 'py-1-2',
          title: 'Operatoren & Ausdrücke',
          learningGoals: ['Arithmetische Operatoren anwenden', 'Ganzzahldivision und Modulo verstehen', 'Vergleichs- und logische Operatoren verwenden'],
          subGoals: [
            { label: '`/` = Gleitkomma-Division, `//` = Ganzzahl-Division, `%` = Modulo', examRelevance: 'hoch' },
            { label: 'Python: `**` für Potenz; Matlab: `^` (bei Arrays: `.^` elementweise)', examRelevance: 'hoch' },
            { label: 'Logische Operatoren: Python `and/or/not`, Matlab `&&/||/~` (skalar) bzw. `&/|/~` (elementweise)', examRelevance: 'hoch' },
            { label: 'Float-Vergleich mit `==` unzuverlässig — stattdessen `abs(a - b) < 1e-9`', examRelevance: 'hoch' },
            { label: '`0 == False` und `1 == True` in Python — bool ist Subtyp von int', examRelevance: 'niedrig' },
          ],
          content: String.raw`**Arithmetische Operatoren:**
| Operator | Python | Matlab | Bedeutung |
|---|---|---|---|
| Addition | \`+\` | \`+\` | Summe |
| Subtraktion | \`-\` | \`-\` | Differenz |
| Multiplikation | \`*\` | \`*\` | Produkt |
| Division | \`/\` | \`/\` | Quotient (float) |
| Ganzzahldivision | \`//\` | \`floor(a/b)\` | Abgerundeter Quotient |
| Modulo | \`%\` | \`mod(a,b)\` | Rest der Division |
| Potenz | \`**\` | \`^\` | Potenzierung |

**Wichtig:** In Python liefert \`/\` immer ein \`float\`: \`7 / 2 = 3.5\`. Für den ganzzahligen Anteil: \`7 // 2 = 3\`.

**Vergleichsoperatoren:** \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` — liefern \`True\` oder \`False\`.

**Logische Operatoren:**
- Python: \`and\`, \`or\`, \`not\`
- Matlab: \`&&\`, \`||\`, \`~\`

**Operatorreihenfolge:** Wie in Mathe: Klammern → Potenz → Punkt → Strich. Im Zweifel: Klammern setzen!`,
          exercises: [
            {
              type: 'number-input',
              question: 'Was ergibt `17 // 5` in Python?',
              correctValue: 3,
              tolerance: 0,
              unit: '',
              explanation: '`17 // 5 = 3` — Ganzzahldivision rundet ab (17 ÷ 5 = 3.4 → 3).',
              hints: ['`//` rundet immer nach unten ab.', '17 ÷ 5 = 3 Rest 2'],
            },
            {
              type: 'number-input',
              question: 'Was ergibt `17 % 5` in Python?',
              correctValue: 2,
              tolerance: 0,
              unit: '',
              explanation: '`17 % 5 = 2` — der Rest der Division (17 = 3×5 + 2).',
              hints: ['`%` gibt den Rest der Division zurück.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ergibt `2 ** 3 + 1` in Python?',
              options: ['7', '8', '9', '16'],
              correctIndex: 2,
              explanation: '`2 ** 3 = 8`, dann `8 + 1 = 9`. Potenz wird vor Addition ausgewertet.',
              hints: ['Potenz hat höhere Priorität als Addition.'],
              wrongAnswerExplanations: {
                "0": '`7` entsteht durch $2^3 - 1$ — also durch Subtraktion statt Addition. Hier steht aber `+ 1`. Korrekt: $8 + 1 = 9$.',
                "1": '`8` ist nur $2^3$, die `+ 1` wurde vergessen. Der ganze Ausdruck wird ausgewertet, nicht nur die Potenz. Regel: Zuerst Potenz, dann Addition.',
                "3": '`16` entsteht, wenn man $2^{(3+1)} = 2^4 = 16$ rechnet. Das waere die Interpretation, wenn `+ 1` im Exponenten stuende. Ohne Klammer bindet `**` aber nur an die Zahl davor: $2^3 + 1$.',
              },
            },
          ],
        },
        {
          id: 'py-1-3',
          title: 'Listen & Arrays',
          learningGoals: ['Python-Listen erstellen und manipulieren', 'Slicing und Indizierung verstehen', 'NumPy Arrays für Berechnungen nutzen'],
          subGoals: [
            { label: 'Python indiziert ab 0, Matlab ab 1 — Off-by-one-Fehler ist Quelle Nr. 1', examRelevance: 'hoch' },
            { label: 'Slicing `liste[a:b]` liefert Elemente $a$ bis $b-1$ (rechte Grenze exklusiv)', examRelevance: 'hoch' },
            { label: 'NumPy-Arrays: vektorisiert (elementweise `+ - * /`), viel schneller als reine Python-Listen', examRelevance: 'hoch' },
            { label: 'Python-Listen können gemischte Typen; NumPy-Arrays nur einen Datentyp (dtype)', examRelevance: 'mittel' },
          ],
          content: String.raw`**Python-Listen:**
\`\`\`python
werte = [1, 2, 3, 4, 5]
werte[0]       # → 1  (erstes Element!)
werte[-1]      # → 5  (letztes Element)
werte[1:3]     # → [2, 3]  (Slicing: Index 1 bis 2)
werte.append(6)  # → [1, 2, 3, 4, 5, 6]
len(werte)     # → 6
\`\`\`

**WICHTIG:** Python zählt ab **0**, Matlab ab **1**!

| Operation | Python | Matlab |
|---|---|---|
| Erstes Element | \`a[0]\` | \`a(1)\` |
| Letztes Element | \`a[-1]\` | \`a(end)\` |
| Bereich | \`a[1:4]\` | \`a(2:4)\` |
| Länge | \`len(a)\` | \`length(a)\` |

**NumPy Arrays** — der Standard für numerisches Rechnen:
\`\`\`python
import numpy as np
a = np.array([1, 2, 3, 4])
a * 2          # → array([2, 4, 6, 8])  — elementweise!
a ** 2         # → array([1, 4, 9, 16])
np.sum(a)      # → 10
np.mean(a)     # → 2.5
\`\`\`

In **Matlab** sind alle Variablen standardmäßig Arrays/Matrizen:
\`\`\`matlab
a = [1, 2, 3, 4];
a * 2      % → [2, 4, 6, 8]
a .^ 2     % → [1, 4, 9, 16]  (Punkt = elementweise!)
sum(a)     % → 10
mean(a)    % → 2.5
\`\`\``,
          exercises: [
            {
              type: 'number-input',
              question: 'Gegeben: `a = [10, 20, 30, 40, 50]`. Was ergibt `a[2]` in Python?',
              correctValue: 30,
              tolerance: 0,
              unit: '',
              explanation: 'Python zählt ab 0: a[0]=10, a[1]=20, a[2]=30.',
              hints: ['Python beginnt die Indizierung bei 0, nicht bei 1.'],
            },
            {
              type: 'true-false',
              statement: 'In Matlab gibt `a(0)` das erste Element eines Arrays zurück.',
              correct: false,
              explanation: 'Matlab zählt ab 1! Das erste Element ist `a(1)`. `a(0)` gibt einen Fehler.',
              hints: ['Matlab beginnt bei einem anderen Index als Python.'],
            },
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl erzeugt in Python ein NumPy-Array mit den Werten 1 bis 5?',
              options: ['np.array(1, 5)', 'np.arange(1, 6)', 'np.range(1, 5)', 'np.linspace(1, 5)'],
              correctIndex: 1,
              explanation: '`np.arange(1, 6)` erzeugt `[1, 2, 3, 4, 5]`. Der Endwert ist exklusiv!',
              hints: ['`arange` funktioniert ähnlich wie `range` — der Endwert ist nicht enthalten.'],
              wrongAnswerExplanations: {
                "0": '`np.array(1, 5)` gibt einen Fehler: `np.array` erwartet als erstes Argument eine Liste oder ein iterierbares Objekt, nicht zwei Einzelzahlen. Korrekt waere `np.array([1, 2, 3, 4, 5])`.',
                "2": '`np.range` existiert in NumPy nicht. Die Funktion heisst `np.arange` (angelehnt an Pythons eingebautes `range`, aber fuer Arrays). Tippfehler aus Verwechslung mit Pythons `range`.',
                "3": '`np.linspace(1, 5)` erzeugt standardmaessig 50 gleichverteilte Floats zwischen 1 und 5 — nicht die ganzen Zahlen 1..5. Fuer ganze Schritte passt `np.arange` besser.',
              },
            },
          ],
        },
        {
          id: 'py-1-4',
          title: 'Kontrollstrukturen',
          learningGoals: ['if/elif/else Verzweigungen schreiben', 'for- und while-Schleifen anwenden', 'Unterschiede zwischen Python und Matlab kennen'],
          subGoals: [
            { label: 'Python: Einrückung (4 Spaces) definiert Block — kein `end`; Matlab: immer `end`', examRelevance: 'hoch' },
            { label: 'Vergleiche: `==` prüft Gleichheit, `=` weist zu — Verwechslung erzeugt stummen Bug', examRelevance: 'hoch' },
            { label: 'For-Schleife: `for i in range(n)` (0..n-1) in Python, `for i = 1:n` (1..n) in Matlab', examRelevance: 'hoch' },
            { label: 'While-Schleife braucht zwingend einen Abbruch-Mechanismus (Zähler, Bedingung) um Endlos-Loops zu verhindern', examRelevance: 'mittel' },
          ],
          content: String.raw`**If-Verzweigung:**
\`\`\`python
# Python                        # Matlab
if x > 0:                       # if x > 0
    print("positiv")            #     disp('positiv')
elif x == 0:                    # elseif x == 0
    print("null")               #     disp('null')
else:                           # else
    print("negativ")            #     disp('negativ')
                                # end
\`\`\`

**Wichtig:** Python nutzt **Einrückung** statt \`end\`! Matlab nutzt \`end\` zum Schließen.

**For-Schleife:**
\`\`\`python
# Python                        # Matlab
for i in range(5):              # for i = 0:4
    print(i)                    #     disp(i)
                                # end
\`\`\`

**While-Schleife:**
\`\`\`python
# Python                        # Matlab
n = 1                           # n = 1;
while n < 100:                  # while n < 100
    n = n * 2                   #     n = n * 2;
                                # end
\`\`\`

**Häufigster Fehler:** Vergessener Doppelpunkt \`:\` am Ende der if/for/while-Zeile in Python!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was gibt dieser Code aus?\n```python\nfor i in range(3):\n    print(i)\n```',
              options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'],
              correctIndex: 1,
              explanation: '`range(3)` erzeugt 0, 1, 2 — drei Werte, startend bei 0.',
              hints: ['`range(n)` beginnt bei 0 und endet bei n-1.'],
              wrongAnswerExplanations: {
                "0": '`1 2 3` ist der Matlab-Denkansatz: dort startet die Indizierung bei 1. Python-`range(n)` startet dagegen bei 0 und liefert $0, 1, \\dots, n-1$. Anzahl Werte stimmt (3), aber der Start ist falsch.',
                "2": '`0 1 2 3` sind 4 Werte und entspraechen `range(4)`. `range(3)` liefert genau 3 Werte, und der Endwert 3 ist exklusiv — also nicht enthalten.',
                "3": '`1 2` waere `range(1, 3)` (Start bei 1, Stop exklusiv 3). Hier steht aber nur `range(3)` mit einem Argument: Start ist dann implizit 0.',
              },
            },
            {
              type: 'true-false',
              statement: 'In Python wird ein Codeblock durch geschweifte Klammern `{}` definiert.',
              correct: false,
              explanation: 'Python nutzt Einrückung (Indentation) statt Klammern für Codeblöcke.',
              hints: ['Welche Sprache nutzt Klammern, welche Einrückung?'],
            },
            {
              type: 'multiple-choice',
              question: 'Wie lautet das Matlab-Äquivalent zu `for i in range(1, 6):`?',
              options: ['for i = 1:6', 'for i = 1:5', 'for i = 0:5', 'for i in 1:5'],
              correctIndex: 1,
              explanation: '`range(1, 6)` gibt 1,2,3,4,5. In Matlab: `for i = 1:5` (Endwert inklusive).',
              hints: ['In Matlab ist der Endwert inklusive, in Python exklusiv.'],
              wrongAnswerExplanations: {
                "0": '`for i = 1:6` wuerde in Matlab die Werte $1, 2, 3, 4, 5, 6$ liefern — einen zu viel. Der Unterschied: Matlab ist End-inklusiv, Python-`range(1,6)` End-exklusiv, liefert also nur bis 5.',
                "2": '`for i = 0:5` beginnt in Matlab bei 0 — das widerspricht `range(1, 6)`, das bei 1 startet. Auch passt Matlabs 1-basierte Konvention nicht zu Index 0 als Startwert fuer Arrays.',
                "3": '`for i in 1:5` ist Python-Syntax (`in`) mit Matlab-Range-Schreibweise vermischt. Matlab nutzt `=` statt `in`. Korrekte Matlab-Schleife: `for i = 1:5`.',
              },
            },
          ],
        },
        {
          id: 'py-1-5',
          title: 'Funktionen definieren',
          learningGoals: ['Eigene Funktionen schreiben', 'Parameter und Rückgabewerte verstehen', 'Lambda-Ausdrücke kennen'],
          subGoals: [
            { label: 'Python: `def name(param):`, Matlab: `function y = name(x)` ... `end`', examRelevance: 'hoch' },
            { label: 'Rückgabe: Python `return`, Matlab über Zuweisung an Ausgabevariable', examRelevance: 'hoch' },
            { label: 'Default-Parameter: `def f(x, y=0):` — bei Aufruf nicht zwingend angeben', examRelevance: 'hoch' },
            { label: 'Lambda: `sqr = lambda x: x**2` für kurze Inline-Funktionen', examRelevance: 'mittel' },
            { label: 'Docstring (Python) oder Kommentare nach Function-Header (Matlab) dokumentieren', examRelevance: 'mittel' },
          ],
          content: String.raw`**Python-Funktion:**
\`\`\`python
def kraft(masse, beschleunigung=9.81):
    """Berechnet die Kraft F = m · a."""
    return masse * beschleunigung

# Aufruf:
f = kraft(10)        # → 98.1  (Standard g)
f = kraft(10, 5)     # → 50
\`\`\`

**Matlab-Funktion** (in eigener Datei \`kraft.m\`):
\`\`\`matlab
function F = kraft(m, a)
    if nargin < 2
        a = 9.81;
    end
    F = m * a;
end
\`\`\`

**Default-Parameter:** Python erlaubt Standardwerte direkt in der Signatur. In Matlab nutzt man \`nargin\`.

**Lambda-Funktionen** (Einzeiler):
\`\`\`python
quadrat = lambda x: x ** 2
quadrat(5)  # → 25
\`\`\`

Matlab-Äquivalent — **Anonymous Functions:**
\`\`\`matlab
quadrat = @(x) x.^2;
quadrat(5)  % → 25
\`\`\`

**Tipp:** Nutze Funktionen, um Berechnungen wiederverwendbar zu machen. Jede Formel aus dem Maschinenbau kann eine Funktion werden!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Was gibt `kraft(5)` zurück, wenn `def kraft(m, a=9.81): return m * a`?',
              options: ['5', '9.81', '49.05', 'Fehler'],
              correctIndex: 2,
              explanation: '`kraft(5)` nutzt den Standardwert `a=9.81`: 5 × 9.81 = 49.05.',
              hints: ['Wenn `a` nicht angegeben wird, wird der Standardwert verwendet.'],
              wrongAnswerExplanations: {
                "0": '`5` ist nur der uebergebene Wert fuer `m`, ohne jede Rechnung. Die Funktion fuehrt aber `return m * a` aus — hier mit Default `a=9.81` also $5 \\cdot 9{,}81$.',
                "1": '`9.81` ist der Default-Wert von `a` alleine. Die Multiplikation $m \\cdot a$ wird tatsaechlich ausgefuehrt. Ergebnis: $5 \\cdot 9{,}81 = 49{,}05$.',
                "3": 'Kein Fehler: Default-Parameter erlauben den Aufruf mit weniger Argumenten. `kraft(5)` ist voellig legal, weil `a` einen Standardwert hat. Nur ohne Default waere `kraft(5)` ein `TypeError`.',
              },
            },
            {
              type: 'multiple-choice',
              question: 'Wie definiert man in Matlab eine anonyme Funktion f(x) = sin(x)/x?',
              options: ['f = @(x) sin(x)/x', 'f = lambda x: sin(x)/x', 'def f(x) = sin(x)/x', 'function f = sin(x)/x'],
              correctIndex: 0,
              explanation: 'In Matlab: `@(x)` definiert eine anonyme Funktion mit Parameter `x`.',
              hints: ['Matlab nutzt das `@`-Symbol für anonyme Funktionen.'],
              wrongAnswerExplanations: {
                "1": '`lambda x: ...` ist Python-Syntax fuer Lambda-Ausdruecke. Matlab kennt kein `lambda`-Keyword; dort uebernimmt `@(x)` diese Rolle.',
                "2": '`def ... = ...` existiert in keiner der beiden Sprachen. Python nutzt `def f(x): return ...` (mit Body), Matlab nutzt `function` oder `@(x)`. Hier sind zwei Syntaxen vermischt.',
                "3": '`function f = sin(x)/x` ist keine gueltige Matlab-Funktionsdefinition. Eine richtige Matlab-Funktion braucht Kopfzeile, `end` und einen Dateinamen — oder man nimmt die kompakte anonyme Form `@(x) sin(x)/x`.',
              },
            },
            {
              type: 'true-false',
              statement: 'Eine Python-Funktion kann mehrere Werte gleichzeitig zurückgeben.',
              correct: true,
              explanation: 'Ja! `return a, b, c` gibt ein Tuple zurück: `x, y, z = funktion()`.',
              hints: ['Denke an Tuples.'],
            },
          ],
        },
      ],
    },

    // ── Unit 2: Numerisches Rechnen ────────────────────────────────────
    {
      id: 'py-unit-2',
      title: 'Numerisches Rechnen',
      description: 'NumPy, Plotting und numerische Methoden für technische Berechnungen.',
      lessons: [
        {
          id: 'py-2-1',
          title: 'NumPy Grundlagen',
          learningGoals: ['NumPy importieren und Arrays erzeugen', 'Elementweise Operationen durchführen', 'Matrizen erstellen und multiplizieren'],
          subGoals: [
            { label: 'Array erzeugen: `np.array([...])`, `np.zeros`, `np.ones`, `np.eye`, `np.linspace`', examRelevance: 'hoch' },
            { label: 'Elementweise: `*` in NumPy, `.*` in Matlab; Matrixmultiplikation: `@` bzw. `*`', examRelevance: 'hoch' },
            { label: 'Formen: `a.shape` (NumPy), `size(a)` (Matlab)', examRelevance: 'hoch' },
            { label: 'Vektorisierung statt Schleifen: $10$–$100\\times$ schneller', examRelevance: 'hoch' },
            { label: 'Broadcasting: $(n, 1) + (1, m) \\to (n, m)$ automatisch', examRelevance: 'mittel' },
          ],
          content: String.raw`**NumPy** ist die Grundlage für numerisches Rechnen in Python — das Äquivalent zur Matlab-Grundumgebung.

**Arrays erzeugen:**
\`\`\`python
import numpy as np

a = np.array([1, 2, 3])           # aus Liste
z = np.zeros(5)                    # [0, 0, 0, 0, 0]
e = np.ones((3, 3))               # 3×3 Einser-Matrix
I = np.eye(3)                      # 3×3 Einheitsmatrix
x = np.linspace(0, 10, 100)       # 100 Punkte von 0 bis 10
r = np.arange(0, 2*np.pi, 0.01)   # wie range, aber für floats
\`\`\`

**Matlab-Vergleich:**
| Python (NumPy) | Matlab | Beschreibung |
|---|---|---|
| \`np.zeros((3,3))\` | \`zeros(3,3)\` | Nullmatrix |
| \`np.ones((2,4))\` | \`ones(2,4)\` | Einsermatrix |
| \`np.eye(3)\` | \`eye(3)\` | Einheitsmatrix |
| \`np.linspace(0,1,50)\` | \`linspace(0,1,50)\` | Gleichverteilte Punkte |
| \`a.shape\` | \`size(a)\` | Dimensionen |
| \`a @ b\` | \`a * b\` | Matrixmultiplikation |
| \`a * b\` | \`a .* b\` | Elementweise Multiplikation |

**Achtung:** In Python ist \`*\` elementweise und \`@\` die Matrixmultiplikation. In Matlab ist es genau umgekehrt!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl erzeugt eine 3×3 Einheitsmatrix in NumPy?',
              options: ['np.ones((3,3))', 'np.eye(3)', 'np.identity((3,3))', 'np.unit(3)'],
              correctIndex: 1,
              explanation: '`np.eye(3)` erzeugt die 3×3 Einheitsmatrix (1 auf Diagonale, 0 sonst).',
              hints: ['eye = I = Identitätsmatrix'],
              wrongAnswerExplanations: {
                "0": '`np.ones((3,3))` erzeugt eine $3 \\times 3$-Matrix, die ueberall den Wert $1$ hat — nicht nur auf der Diagonale. Die Einheitsmatrix hat dagegen $1$ auf der Hauptdiagonale und $0$ sonst.',
                "2": '`np.identity(3)` waere zwar korrekt, aber hier steht `np.identity((3,3))` mit einem Tupel. Die Funktion erwartet nur eine Zahl (die Groesse), weil die Einheitsmatrix immer quadratisch ist. Mit Tupel gibt es einen Fehler.',
                "3": '`np.unit` existiert in NumPy nicht. Der Name der Einheitsmatrix-Funktion ist `np.eye` (englisch "I" fuer Identity) oder `np.identity`. Wahrscheinlich aus der Uebersetzung "Einheit" entstanden.',
              },
            },
            {
              type: 'true-false',
              statement: 'In NumPy führt `A * B` eine Matrixmultiplikation durch.',
              correct: false,
              explanation: '`A * B` ist elementweise! Für Matrixmultiplikation: `A @ B` oder `np.dot(A, B)`.',
              hints: ['Was bedeutet `*` vs `@` in NumPy?'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `np.linspace(0, 2*np.pi, 100)`?',
              options: ['arange(0, 2*pi, 100)', 'linspace(0, 2*pi, 100)', 'range(0, 2*pi, 100)', '0:0.01:2*pi'],
              correctIndex: 1,
              explanation: '`linspace` funktioniert in beiden Sprachen gleich — Startpunkt, Endpunkt, Anzahl Punkte.',
              hints: ['Diese Funktion heißt in beiden Sprachen gleich.'],
              wrongAnswerExplanations: {
                "0": 'In Matlab existiert `arange` gar nicht — das ist eine NumPy-spezifische Funktion. Zudem waere bei `arange` das dritte Argument die Schrittweite, nicht die Anzahl Punkte.',
                "2": '`range` gibt es in Matlab nicht als Vektorerzeuger. Matlab nutzt entweder `linspace(start, stop, n)` oder die Colon-Syntax `start:schritt:stop`.',
                "3": '`0:0.01:2*pi` erzeugt zwar ebenfalls einen Vektor, aber mit fester Schrittweite $0{,}01$ und resultiert in ca. $629$ Punkten — nicht genau $100$. `linspace` garantiert dagegen exakt $100$ gleichverteilte Werte.',
              },
            },
          ],
        },
        {
          id: 'py-2-2',
          title: 'Matplotlib — Daten visualisieren',
          learningGoals: ['Linien- und Scatterplots erstellen', 'Achsen beschriften und formatieren', 'Mehrere Kurven in einem Plot darstellen'],
          subGoals: [
            { label: 'Basis-Plot: `plt.plot(x, y)`, Titel, `xlabel`, `ylabel`, `legend`, `grid`', examRelevance: 'hoch' },
            { label: 'Farbe/Linienstil: `\'b-\'` blau, `\'r--\'` rot gestrichelt, `\'g:\'` grün gepunktet', examRelevance: 'mittel' },
            { label: 'Mehrere Kurven: mehrere `plt.plot()`-Aufrufe nacheinander', examRelevance: 'hoch' },
            { label: 'Speichern: `plt.savefig(\'name.png\', dpi=150)` **vor** `plt.show()`', examRelevance: 'mittel' },
            { label: 'Plots ohne Achsen-/Einheiten-Beschriftung verlieren in Berichten Punkte', examRelevance: 'hoch' },
          ],
          content: String.raw`**Matplotlib** ist die Standard-Plotbibliothek — funktioniert sehr ähnlich wie Matlab:

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2*np.pi, 100)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y1, 'b-', label='sin(x)')
plt.plot(x, y2, 'r--', label='cos(x)')
plt.xlabel('x [rad]')
plt.ylabel('y')
plt.title('Trigonometrische Funktionen')
plt.legend()
plt.grid(True)
plt.savefig('trig.png', dpi=150)
plt.show()
\`\`\`

**Matlab-Vergleich:**
\`\`\`matlab
x = linspace(0, 2*pi, 100);
plot(x, sin(x), 'b-', x, cos(x), 'r--')
xlabel('x [rad]')
ylabel('y')
title('Trigonometrische Funktionen')
legend('sin(x)', 'cos(x)')
grid on
\`\`\`

**Plottypen:**
| Typ | Python | Matlab |
|---|---|---|
| Linie | \`plt.plot(x, y)\` | \`plot(x, y)\` |
| Punkte | \`plt.scatter(x, y)\` | \`scatter(x, y)\` |
| Balken | \`plt.bar(x, y)\` | \`bar(x, y)\` |
| Histogramm | \`plt.hist(data)\` | \`histogram(data)\` |
| 3D-Fläche | \`ax.plot_surface\` | \`surf(X, Y, Z)\` |`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welcher Befehl fügt eine Legende zu einem Matplotlib-Plot hinzu?',
              options: ['plt.label()', 'plt.legend()', 'plt.annotate()', 'plt.describe()'],
              correctIndex: 1,
              explanation: '`plt.legend()` zeigt die Legende an (Labels aus den `label`-Parametern).',
              hints: ['Der Befehl heißt auch in Matlab so.'],
              wrongAnswerExplanations: {
                "0": '`plt.label()` existiert so nicht. Es gibt `plt.xlabel()` / `plt.ylabel()` fuer Achsenbeschriftungen, aber nicht `plt.label()`. Legende und Achsenbeschriftung sind unterschiedliche Konzepte.',
                "2": '`plt.annotate()` setzt einzelne Textmarkierungen mit Pfeil an einen Punkt im Plot — fuer Hinweise auf eine bestimmte Stelle. Die Gesamtliste der Kurven-Labels liefert dagegen `plt.legend()`.',
                "3": '`plt.describe()` existiert nicht. Verwechslung mit `df.describe()` aus Pandas (Statistik-Zusammenfassung). Fuer die Legende im Plot ist `plt.legend()` zustaendig.',
              },
            },
            {
              type: 'sorting',
              question: 'Bringe die Schritte zum Erstellen eines Plots in die richtige Reihenfolge:',
              items: ['Daten berechnen (y = np.sin(x))', 'plt.figure() aufrufen', 'plt.plot(x, y) aufrufen', 'Achsen beschriften', 'plt.show() aufrufen'],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Erst Daten, dann Figur erstellen, plotten, formatieren, und zuletzt anzeigen.',
              hints: ['Imports müssen zuerst kommen.', '`plt.show()` ist immer der letzte Schritt.'],
            },
            {
              type: 'true-false',
              statement: 'In Matplotlib speichert man einen Plot mit `plt.savefig()` VOR `plt.show()`.',
              correct: true,
              explanation: '`plt.show()` leert die aktuelle Figur — danach ist nichts mehr zum Speichern da.',
              hints: ['Was passiert mit der Figur nach show()?'],
            },
          ],
        },
        {
          id: 'py-2-3',
          title: 'Gleichungen lösen & Optimierung',
          learningGoals: ['Nullstellen mit fsolve finden', 'Lineare Gleichungssysteme lösen', 'Minima/Maxima numerisch finden'],
          subGoals: [
            { label: 'Nullstelle: `scipy.optimize.fsolve(f, x0)` — Startwert sollte nah an Lösung', examRelevance: 'hoch' },
            { label: 'LGS: `np.linalg.solve(A, b)` statt `np.linalg.inv(A) @ b` (schneller, stabiler)', examRelevance: 'hoch' },
            { label: 'Matlab-Pendant: Backslash-Operator `A \\ b`', examRelevance: 'hoch' },
            { label: 'Optimierung: `scipy.optimize.minimize(f, x0)` für Minima (Maxima: `-f`)', examRelevance: 'hoch' },
            { label: 'Dimensionen prüfen vor Solve: `A.shape == (n, n)`, `b.shape == (n,)`', examRelevance: 'mittel' },
          ],
          content: String.raw`**SciPy** erweitert NumPy um wissenschaftliche Algorithmen — das Matlab-Äquivalent für Solver.

**Nullstellensuche:**
\`\`\`python
from scipy.optimize import fsolve

def f(x):
    return x**3 - 2*x - 5

x0 = fsolve(f, 2.0)    # Startwert 2.0
print(x0)               # → [2.0946]
\`\`\`

Matlab: \`fzero(@(x) x^3 - 2*x - 5, 2)\`

**Lineares Gleichungssystem Ax = b:**
\`\`\`python
import numpy as np
A = np.array([[2, 1], [1, 3]])
b = np.array([5, 10])
x = np.linalg.solve(A, b)   # → [1., 3.]
\`\`\`

Matlab: \`x = A \ b\`

**Minimierung:**
\`\`\`python
from scipy.optimize import minimize

def kosten(x):
    return (x[0] - 1)**2 + (x[1] - 2.5)**2

result = minimize(kosten, [0, 0])
print(result.x)  # → [1., 2.5]
\`\`\`

Matlab: \`fminunc(@(x) (x(1)-1)^2 + (x(2)-2.5)^2, [0, 0])\`

**Anwendung im MB:** Festigkeitsnachweise, Auslegungsoptimierung, Strömungsberechnung — überall braucht man Solver!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Wie löst man `Ax = b` in NumPy?',
              options: ['np.solve(A, b)', 'np.linalg.solve(A, b)', 'np.inv(A) * b', 'scipy.solve(A, b)'],
              correctIndex: 1,
              explanation: '`np.linalg.solve(A, b)` löst das System direkt (effizienter als Inverse berechnen).',
              hints: ['Die lineare Algebra-Funktionen sind in `np.linalg`.'],
              wrongAnswerExplanations: {
                "0": '`np.solve` existiert nicht direkt im Top-Level-Namensraum von NumPy. Alle linearen-Algebra-Funktionen liegen im Untermodul `np.linalg`. Richtig: `np.linalg.solve(A, b)`.',
                "2": '`np.inv(A) * b` hat mehrere Probleme: `np.inv` existiert nicht (korrekt waere `np.linalg.inv`), und `*` ist elementweise, nicht Matrix-mal-Vektor (das waere `@`). Ausserdem ist die Inverse zu berechnen numerisch schlechter konditioniert als `solve`.',
                "3": '`scipy.solve` gibt es so nicht als Top-Level-Funktion. Man muesste `scipy.linalg.solve(A, b)` schreiben. Fuer dichte Systeme reicht aber `np.linalg.solve` voellig.',
              },
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `np.linalg.solve(A, b)`?',
              options: ['solve(A, b)', 'A \\ b', 'inv(A) * b', 'linsolve(A, b)'],
              correctIndex: 1,
              explanation: 'Der Backslash-Operator `A \\ b` ist Matlabs elegantester Weg für lineare Systeme.',
              hints: ['Matlab hat einen speziellen Operator dafür.'],
              wrongAnswerExplanations: {
                "0": '`solve` gibt es in Matlab nur in der Symbolic Toolbox fuer symbolische Gleichungen, nicht fuer numerische Matrizen. Fuer $Ax = b$ numerisch: `A \\ b`.',
                "2": '`inv(A) * b` rechnet zwar dasselbe Resultat, ist aber numerisch weniger stabil (Inverse wird vollstaendig aufgestellt, mehr Rundungsfehler). Matlab warnt explizit und empfiehlt `A \\ b`.',
                "3": '`linsolve(A, b)` existiert zwar in Matlab, ist aber eine Low-Level-Variante fuer bestimmte Systeme mit vorausgewaehltem Loesungsverfahren. Der Standard-Weg ist der Backslash-Operator `A \\ b`.',
              },
            },
            {
              type: 'true-false',
              statement: '`scipy.optimize.fsolve` kann nur Funktionen mit einer Variable lösen.',
              correct: false,
              explanation: '`fsolve` kann auch Gleichungssysteme lösen — die Funktion muss dann einen Vektor zurückgeben.',
              hints: ['Was passiert, wenn man einen Vektor als Startwert gibt?'],
            },
          ],
        },
        {
          id: 'py-2-4',
          title: 'Numerische Integration & DGL',
          learningGoals: ['Integrale numerisch berechnen', 'Gewöhnliche DGL mit solve_ivp lösen', 'Ergebnisse plotten und interpretieren'],
          subGoals: [
            { label: 'Bestimmtes Integral: `scipy.integrate.quad(f, a, b)` (adaptive Quadratur)', examRelevance: 'hoch' },
            { label: 'Matlab-Pendant: `integral(@(x) f(x), a, b)`', examRelevance: 'mittel' },
            { label: 'DGL 2. Ordnung → System 1. Ordnung umschreiben, dann `solve_ivp` / `ode45`', examRelevance: 'hoch' },
            { label: 'ODE-Aufruf: `solve_ivp(f, [t0, t1], y0)`; `t_eval=...` für feste Ausgabezeitpunkte', examRelevance: 'hoch' },
            { label: 'Standard-Solver: `RK45` (Python), `ode45` (Matlab) — adaptive Schrittweite, $O(h^5)$', examRelevance: 'mittel' },
          ],
          content: String.raw`**Numerische Integration:**
\`\`\`python
from scipy.integrate import quad

def f(x):
    return np.sin(x)**2

ergebnis, fehler = quad(f, 0, np.pi)
print(ergebnis)  # → 1.5708 (= π/2)
\`\`\`

Matlab: \`integral(@(x) sin(x).^2, 0, pi)\`

**Gewöhnliche Differentialgleichungen** — z.B. gedämpfter Schwinger:

$m\ddot{x} + d\dot{x} + kx = 0$ → als System 1. Ordnung:

\`\`\`python
from scipy.integrate import solve_ivp

def schwinger(t, y, m, d, k):
    x, v = y
    return [v, (-d*v - k*x) / m]

m, d, k = 1.0, 0.5, 10.0
sol = solve_ivp(schwinger, [0, 20], [1, 0],
                args=(m, d, k), dense_output=True,
                t_eval=np.linspace(0, 20, 500))

plt.plot(sol.t, sol.y[0])  # Auslenkung über Zeit
\`\`\`

Matlab: \`[t, y] = ode45(@(t,y) schwinger(t, y, m, d, k), [0 20], [1; 0])\`

**Schlüsselkonzept:** Jede DGL höherer Ordnung wird in ein System 1. Ordnung umgeschrieben!`,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche SciPy-Funktion berechnet ein bestimmtes Integral numerisch?',
              options: ['scipy.integrate.solve', 'scipy.integrate.quad', 'scipy.integrate.trapz', 'scipy.integrate.odeint'],
              correctIndex: 1,
              explanation: '`quad` berechnet $\\int f(x)\\,dx$ numerisch mit adaptiver Quadratur.',
              hints: ['quad = Quadratur = numerische Integration'],
              wrongAnswerExplanations: {
                "0": '`scipy.integrate.solve` existiert nicht. "Solve" klingt nach Gleichungsloeser; fuer die Integration heisst die Funktion `quad` (von "Quadratur"). Verwechslung mit `scipy.linalg.solve`.',
                "2": '`trapz` (Trapezregel) integriert nur vorgegebene Stuetzstellen $y_i$ — kein kontinuierliches $f(x)$. Das ist ein Spezialfall fuer bereits gesampelte Daten. Fuer eine analytisch definierte Funktion `f(x)` passt `quad` besser (hoehere Ordnung, adaptiv).',
                "3": '`odeint` loest gewoehnliche Differentialgleichungen (ODE) als Anfangswertproblem, nicht bestimmte Integrale. Auch wenn Integration und ODE verwandt sind: Fuer reines $\\int f(x)\\,dx$ ist `quad` das richtige Werkzeug.',
              },
            },
            {
              type: 'true-false',
              statement: 'Um eine DGL 2. Ordnung mit solve_ivp zu lösen, muss man sie in ein System 1. Ordnung umschreiben.',
              correct: true,
              explanation: 'solve_ivp (und ode45 in Matlab) lösen nur Systeme 1. Ordnung: y\' = f(t, y).',
              hints: ['Was für Systeme kann solve_ivp direkt lösen?'],
            },
            {
              type: 'multiple-choice',
              question: 'Was ist das Matlab-Äquivalent zu `solve_ivp`?',
              options: ['ode23', 'ode45', 'dsolve', 'integrate'],
              correctIndex: 1,
              explanation: '`ode45` ist der Standard-ODE-Solver in Matlab (Runge-Kutta 4/5).',
              hints: ['Der meistgenutzte ODE-Solver in Matlab.'],
              wrongAnswerExplanations: {
                "0": '`ode23` existiert zwar in Matlab (Bogacki–Shampine, niedrigere Ordnung), ist aber nicht der Standard. Man nutzt ihn nur bei sehr groben Toleranzen oder wenn `ode45` scheitert. Standard ist `ode45`.',
                "2": '`dsolve` loest DGL **symbolisch** (analytisch, wenn moeglich) — Symbolic Toolbox. `solve_ivp` ist jedoch ein **numerischer** Solver. Entsprechend ist `ode45` das richtige numerische Gegenstueck.',
                "3": '`integrate` gibt es so nicht in Matlab als ODE-Funktion (nur `integral` fuer bestimmte Integrale). Fuer Anfangswertprobleme ist `ode45` der Standardname.',
              },
            },
          ],
        },
      ],
    },

    // ── Unit 3: Maschinenbau-Anwendungen ────────────────────────────────
    {
      id: 'py-unit-3',
      title: 'MB-Anwendungen',
      description: 'Praxisnahe Programmieraufgaben aus dem Maschinenbau-Studium.',
      lessons: [
        {
          id: 'py-3-1',
          title: 'Festigkeitsberechnung',
          learningGoals: ['Spannungsberechnung programmieren', 'Querschnittswerte automatisiert berechnen', 'Ergebnisse grafisch darstellen'],
          subGoals: [
            { label: 'Rechteck: $I = bh^3/12$, $W = bh^2/6$ als Funktion', examRelevance: 'hoch' },
            { label: 'Biegespannung $\\sigma_b = M_b/W$ entlang Balken berechnen (Vektor-Operation)', examRelevance: 'hoch' },
            { label: 'Kritische Stelle: $M_\\text{max}$ via `np.max(np.abs(M))`', examRelevance: 'hoch' },
            { label: 'Verschiedene Querschnitte als Funktionen kapseln (DRY-Prinzip)', examRelevance: 'mittel' },
            { label: 'Ergebnis-Plot: Spannungsverlauf über $x$ mit Skalierung & Einheit', examRelevance: 'mittel' },
          ],
          content: String.raw`**Beispiel: Biegebalken — Spannungsverteilung**

Ein Balken mit Rechteckquerschnitt (b × h) wird durch ein Biegemoment $M_b$ belastet.

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Querschnittswerte
b, h = 0.04, 0.08          # Breite × Höhe [m]
I = b * h**3 / 12          # Flächenträgheitsmoment
W = b * h**2 / 6           # Widerstandsmoment

# Biegemoment (z.B. über Balkenlänge)
L = 2.0                    # Balkenlänge [m]
F = 1000                   # Einzellast [N]
x = np.linspace(0, L, 200)
M = F * x * (L - x) / L   # Momentenverlauf (Einfeldt.)

# Maximale Biegespannung
sigma_max = M / W

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(x, M, 'b-', linewidth=2)
plt.fill_between(x, M, alpha=0.2)
plt.xlabel('x [m]'); plt.ylabel('M [Nm]')
plt.title('Momentenverlauf'); plt.grid(True)

plt.subplot(1, 2, 2)
plt.plot(x, sigma_max / 1e6, 'r-', linewidth=2)
plt.xlabel('x [m]'); plt.ylabel('σ [MPa]')
plt.title('Biegespannung'); plt.grid(True)
plt.tight_layout()
plt.show()
\`\`\`

**Matlab-Version:**
\`\`\`matlab
b = 0.04; h = 0.08;
I = b*h^3/12; W = b*h^2/6;
x = linspace(0, 2, 200);
M = 1000 * x .* (2 - x) / 2;
sigma = M / W;
subplot(1,2,1); plot(x, M); title('Moment');
subplot(1,2,2); plot(x, sigma/1e6); title('Spannung');
\`\`\``,
          exercises: [
            {
              type: 'number-input',
              question: 'Ein Rechteckquerschnitt hat b = 40 mm und h = 80 mm. Wie groß ist das Widerstandsmoment $W = bh^2/6$ in $mm^3$? (Ganzzahl)',
              correctValue: 42667,
              tolerance: 1,
              unit: 'mm³',
              explanation: '$W = 40 \\times 80^2 / 6 = 40 \\times 6400 / 6 \\approx 42667\\,mm^3$.',
              hints: ['$W = b \\cdot h^2/6$', 'Setze b = 40 und h = 80 ein.'],
            },
            {
              type: 'multiple-choice',
              question: 'Welches NumPy-Feature macht Festigkeitsberechnungen besonders effizient?',
              options: ['Symbolisches Rechnen', 'Elementweise Array-Operationen', 'Automatische Einheitenkonvertierung', 'Machine Learning'],
              correctIndex: 1,
              explanation: 'Elementweise Operationen erlauben es, ganze Spannungsverteilungen in einer Zeile zu berechnen.',
              hints: ['Was passiert, wenn man ein Array durch eine Zahl teilt?'],
              wrongAnswerExplanations: {
                "0": 'Symbolisches Rechnen bietet SymPy, nicht NumPy. NumPy arbeitet rein numerisch auf Gleitkommazahlen. Fuer schnelle Spannungsverteilungen reicht numerisch — daher sind vektorisierte Array-Ops das entscheidende Feature.',
                "2": 'NumPy hat keine eingebaute Einheitenverwaltung. Einheiten muss man manuell konsistent fuehren (alles in SI) oder Zusatzpakete wie `pint` nutzen. Die Effizienzstaerke liegt in der Vektorisierung.',
                "3": 'Machine Learning ist Domaene von scikit-learn, PyTorch oder TensorFlow — nicht direkt NumPy. Festigkeitsberechnungen sind deterministische Formeln; der Effizienzhebel hier ist, Arrays statt Schleifen zu verwenden.',
              },
            },
            {
              type: 'true-false',
              statement: 'In der Matlab-Version muss man `.^` statt `^` für elementweise Potenzierung verwenden.',
              correct: true,
              explanation: 'In Matlab ist `^` Matrixpotenz, `.^` elementweise Potenz. Bei Vektoren braucht man den Punkt!',
              hints: ['Was bedeutet der Punkt vor Operatoren in Matlab?'],
            },
          ],
        },
        {
          id: 'py-3-2',
          title: 'Datenauswertung & Messdaten',
          learningGoals: ['CSV-Dateien einlesen', 'Statistische Auswertung durchführen', 'Messdaten fitten und interpolieren'],
          subGoals: [
            { label: 'CSV lesen: `np.loadtxt` (einfach), `pd.read_csv` (mit Headern und Typen)', examRelevance: 'hoch' },
            { label: 'Statistik: `np.mean`, `np.std`, `np.median`, `np.max`, `np.min`', examRelevance: 'hoch' },
            { label: 'Polynom-Fit: `np.polyfit(x, y, n)` → Koeffizienten', examRelevance: 'hoch' },
            { label: 'Pandas DataFrames: `df[\'Spalte\']`, `df.describe()` für Überblick', examRelevance: 'mittel' },
            { label: 'Scatter + Fit-Kurve zusammen plotten (Mess vs. Modell)', examRelevance: 'mittel' },
          ],
          content: String.raw`Im MB-Studium wertet man häufig Messdaten aus Laboren aus.

**CSV-Datei einlesen:**
\`\`\`python
import numpy as np
import pandas as pd

# Mit NumPy (einfach):
data = np.loadtxt('messdaten.csv', delimiter=',', skiprows=1)
zeit = data[:, 0]
kraft = data[:, 1]

# Mit Pandas (komfortabler):
df = pd.read_csv('messdaten.csv')
zeit = df['Zeit'].values
kraft = df['Kraft'].values
\`\`\`

Matlab: \`data = readmatrix('messdaten.csv')\`

**Statistik:**
\`\`\`python
mittel = np.mean(kraft)
std = np.std(kraft)
maximum = np.max(kraft)
\`\`\`

**Kurvenanpassung (Curve Fitting):**
\`\`\`python
from numpy.polynomial import polynomial as P

# Polynom-Fit 2. Grades
koeffizienten = np.polyfit(zeit, kraft, 2)
p = np.poly1d(koeffizienten)

# Plot
plt.scatter(zeit, kraft, s=5, label='Messdaten')
t_fit = np.linspace(zeit.min(), zeit.max(), 200)
plt.plot(t_fit, p(t_fit), 'r-', label='Fit')
plt.legend()
\`\`\`

Matlab: \`p = polyfit(zeit, kraft, 2); plot(zeit, polyval(p, zeit))\``,
          exercises: [
            {
              type: 'multiple-choice',
              question: 'Welche Python-Bibliothek ist am besten für tabellarische Messdaten geeignet?',
              options: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib'],
              correctIndex: 1,
              explanation: 'Pandas bietet DataFrames — ideal für spaltenbasierte Messdaten mit Headern.',
              hints: ['Welche Bibliothek hat DataFrames?'],
              wrongAnswerExplanations: {
                "0": 'NumPy ist der Unterbau (homogene numerische Arrays), aber fuer Tabellen mit Spaltennamen, gemischten Datentypen und CSV-Headern ist es zu rudimentaer. Pandas setzt auf NumPy auf und ergaenzt DataFrame-Komfort.',
                "2": 'SciPy ist ein Sammelpaket fuer wissenschaftliche Algorithmen (Optimierung, Integration, Statistik). Fuer das blosse Einlesen und Verwalten tabellarischer Messdaten ist es nicht das richtige Werkzeug — das macht Pandas.',
                "3": 'Matplotlib visualisiert nur Daten, es verwaltet sie nicht. Zum Plotten greift man auf DataFrames aus Pandas (oder NumPy-Arrays) zurueck.',
              },
            },
            {
              type: 'sorting',
              question: 'Bringe die Schritte der Messdatenauswertung in die richtige Reihenfolge:',
              items: ['Datei einlesen', 'Daten auf Ausreißer prüfen', 'Statistik berechnen', 'Kurve fitten', 'Ergebnis plotten'],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Erst einlesen, dann prüfen, analysieren, modellieren, visualisieren.',
              hints: ['Daten müssen vorhanden sein bevor man sie auswertet.', 'Visualisierung kommt nach der Analyse.'],
            },
            {
              type: 'true-false',
              statement: '`np.polyfit(x, y, 3)` fittet ein Polynom 3. Grades an die Daten.',
              correct: true,
              explanation: 'Der dritte Parameter gibt den Grad des Polynoms an.',
              hints: ['Was bedeutet der dritte Parameter von polyfit?'],
            },
          ],
        },
        {
          id: 'py-3-3',
          title: 'Simulation: Feder-Masse-Dämpfer',
          learningGoals: ['Schwingungssystem modellieren', 'Parametervariation durchführen', 'Resonanz erkennen und visualisieren'],
          subGoals: [
            { label: 'Bewegungsgleichung $m\\ddot x + d\\dot x + kx = F(t)$ als System 1. Ordnung', examRelevance: 'hoch' },
            { label: 'Eigenkreisfrequenz $\\omega_0 = \\sqrt{k/m}$, Dämpfungsgrad $D = d/(2\\sqrt{km})$', examRelevance: 'hoch' },
            { label: 'Frequenzgang: Amplitude über $\\Omega$ plotten, Resonanzspitze bei $\\Omega \\approx \\omega_0$', examRelevance: 'hoch' },
            { label: 'Parameter-Loop: Schleife über $\\Omega$, pro Wert ODE lösen', examRelevance: 'mittel' },
            { label: 'Einschwingvorgang ignorieren: nur zweite Hälfte der Zeitreihe auswerten', examRelevance: 'mittel' },
          ],
          content: String.raw`Das **Feder-Masse-Dämpfer-System** ist ein Kernmodell der technischen Mechanik.

**Bewegungsgleichung:** $m\ddot{x} + d\dot{x} + kx = F_0 \cos(\Omega t)$

\`\`\`python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def fmd_system(t, y, m, d, k, F0, omega):
    x, v = y
    return [v, (F0*np.cos(omega*t) - d*v - k*x) / m]

# Parameter
m = 1.0      # Masse [kg]
k = 100.0    # Federsteifigkeit [N/m]
d = 2.0      # Dämpfung [Ns/m]
F0 = 10.0    # Anregungsamplitude [N]

omega_0 = np.sqrt(k/m)  # Eigenkreisfrequenz

# Variation der Anregungsfrequenz
omegas = np.linspace(0.1, 20, 50)
amplituden = []

for omega in omegas:
    sol = solve_ivp(fmd_system, [0, 50], [0, 0],
                    args=(m, d, k, F0, omega),
                    t_eval=np.linspace(40, 50, 1000))
    amplituden.append(np.max(np.abs(sol.y[0])))

plt.plot(omegas, amplituden, 'b-', linewidth=2)
plt.axvline(omega_0, color='r', linestyle='--', label=f'ω₀ = {omega_0:.1f}')
plt.xlabel('Anregungsfrequenz ω [rad/s]')
plt.ylabel('Amplitude [m]')
plt.title('Frequenzgang — Feder-Masse-Dämpfer')
plt.legend(); plt.grid(True); plt.show()
\`\`\`

**Erkenntnis:** Bei $\Omega \approx \omega_0$ tritt **Resonanz** auf — die Amplitude wird maximal!

**Eigenfrequenz:** $\omega_0 = \sqrt{k/m}$ bzw. $f_0 = \omega_0 / (2\pi)$

**Dämpfungsgrad:** $D = d / (2\sqrt{km})$ — bei $D < 1$ schwingt das System.`,
          exercises: [
            {
              type: 'number-input',
              question: 'Berechne die Eigenkreisfrequenz ω₀ für m = 2 kg und k = 200 N/m.',
              correctValue: 10,
              tolerance: 0.1,
              unit: 'rad/s',
              explanation: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{200/2} = \\sqrt{100} = 10$ rad/s.',
              hints: ['$\\omega_0 = \\sqrt{k/m}$', 'Setze die Werte ein und ziehe die Wurzel.'],
            },
            {
              type: 'multiple-choice',
              question: 'Was passiert bei Resonanz (Ω ≈ ω₀)?',
              options: ['Das System steht still', 'Die Amplitude wird minimal', 'Die Amplitude wird maximal', 'Die Frequenz verdoppelt sich'],
              correctIndex: 2,
              explanation: 'Bei Resonanz überträgt die Anregung maximal Energie → maximale Amplitude.',
              hints: ['Resonanz ist ein kritischer Zustand für Ingenieure.'],
              wrongAnswerExplanations: {
                "0": 'Das System steht gerade nicht still — im Gegenteil: Bei Resonanz wird es maximal angeregt. Stillstand kaeme nur bei vollstaendiger Ausloeschung der Anregung heraus (Antiresonanz in gekoppelten Systemen).',
                "1": 'Minimale Amplitude tritt bei $\\Omega$ weit entfernt von $\\omega_0$ auf (sehr tiefe oder sehr hohe Frequenz). Bei $\\Omega \\approx \\omega_0$ wird durch konstruktive Einkopplung maximal Energie zugefuehrt, Amplitude waechst.',
                "3": 'Die Anregungsfrequenz bleibt $\\Omega$, nichts verdoppelt sich. Verwechslung evtl. mit Oberwellen in nichtlinearen Systemen. Im linearen Schwinger bestimmt nur die Amplitude das Resonanzverhalten.',
              },
            },
            {
              type: 'number-input',
              question: 'Berechne den Dämpfungsgrad D für m = 1 kg, d = 4 Ns/m, k = 100 N/m.',
              correctValue: 0.2,
              tolerance: 0.01,
              unit: '',
              explanation: '$D = d / (2\\sqrt{km}) = 4 / (2\\sqrt{100 \\cdot 1}) = 4 / 20 = 0{,}2$.',
              hints: ['$D = d / (2\\sqrt{km})$', '$\\sqrt{100 \\cdot 1} = 10$'],
            },
          ],
        },
      ],
    },

    // ── Unit 4: Prüfungsaufgaben ──────────────────────────────────────
    {
      id: 'py-unit-4',
      title: 'Prüfungsaufgaben',
      description: 'Prüfungsrelevante Programmieraufgaben auf TU-Wien-Niveau.',
      lessons: [
        {
          id: 'py-4-1',
          title: 'Prüfung: Code-Verständnis & Fehlersuche',
          learningGoals: ['Typische Prüfungsfragen zur Programmierung lösen', 'Code lesen und Ausgaben vorhersagen', 'Fehler in Code finden'],
          subGoals: [
            { label: 'Indizierung: Python 0-basiert, Matlab 1-basiert (Off-by-one-Fehler!)', examRelevance: 'hoch' },
            { label: 'Operatoren: `*` vs `@`, `^` vs `.^` — elementweise vs. Matrix', examRelevance: 'hoch' },
            { label: 'Python `range(a, b)`: $a, a+1, \\ldots, b-1$; Matlab `a:b`: $a, a+1, \\ldots, b$', examRelevance: 'hoch' },
            { label: 'Code Zeile-für-Zeile verfolgen, Variablenwerte neben Code notieren', examRelevance: 'hoch' },
            { label: 'Typische Fehler: `=` vs `==`, fehlendes `:` in Python, Semikolon-Ausgabe in Matlab', examRelevance: 'hoch' },
          ],
          type: 'explanation-intuitive',
          content: String.raw`**[PRÜFUNG] — Typische Aufgabenformate:**

1. **Code-Verständnis:** "Was gibt dieser Code aus?"
2. **Fehlersuche:** "Finde den Fehler im Code."
3. **Vervollständigung:** "Ergänze die fehlende Zeile."
4. **Vergleich:** "Übersetze Python-Code nach Matlab (oder umgekehrt)."

**Tipp für die Prüfung:**
- Arbeite den Code **Zeile für Zeile** durch
- Schreibe den Wert jeder Variable neben den Code
- Achte besonders auf **Indizierung** (0 vs 1), **Operatoren** (* vs @) und **Schleifen**
- Bei Matlab: Vergiss nicht den **Strichpunkt** (;) — ohne ihn wird alles ausgegeben!`,
          exercises: [
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\na = [2, 4, 6, 8, 10]\ns = 0\nfor i in range(1, 4):\n    s += a[i]\nprint(s)\n```',
              correctValue: 18,
              tolerance: 0,
              unit: '',
              explanation: 'range(1,4) → i = 1, 2, 3. a[1]=4, a[2]=6, a[3]=8. Summe: 4+6+8 = 18.',
              hints: ['range(1,4) erzeugt 1, 2, 3.', 'a[1] = 4, a[2] = 6, a[3] = 8'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welcher Fehler ist in diesem Matlab-Code?\n```matlab\nx = [1 2 3 4 5];\ny = x^2;\nplot(x, y)\n```',
              options: ['plot-Befehl falsch', '`^` statt `.^` — nicht elementweise', 'x muss transponiert werden', 'Semikolon vergessen'],
              correctIndex: 1,
              explanation: '`x^2` versucht Matrixquadrierung. Für elementweise Potenz: `x.^2`.',
              hints: ['Was passiert, wenn man ^ auf einen Vektor anwendet?'],
              wrongAnswerExplanations: {
                "0": 'Der `plot`-Befehl ist syntaktisch korrekt (`plot(x, y)`). Problem liegt in der vorherigen Zeile — `y` wird wegen `^` gar nicht richtig berechnet. Der Plotbefehl selbst ist unschuldig.',
                "2": 'Transponieren hilft hier nicht: Selbst $x^T \\cdot x$ waere ein Skalar, nicht der Vektor $[1, 4, 9, 16, 25]$. Der Fehler ist die Operatorwahl, nicht die Vektororientierung.',
                "3": 'Das Semikolon unterdrueckt nur die Ausgabe — ohne wuerde Matlab Zwischenwerte anzeigen, aber keinen Rechenfehler erzeugen. Der tatsaechliche Fehler ist `^` statt `.^` (Matrix- vs. elementweise Potenz).',
              },
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt `np.dot(np.array([1,2,3]), np.array([4,5,6]))` zurück?',
              correctValue: 32,
              tolerance: 0,
              unit: '',
              explanation: 'Skalarprodukt: 1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32.',
              hints: ['np.dot berechnet das Skalarprodukt zweier Vektoren.', '1·4 + 2·5 + 3·6 = ?'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Wie übersetzt man `A \\ b` (Matlab) nach Python/NumPy?',
              options: ['A / b', 'np.linalg.solve(A, b)', 'np.divide(A, b)', 'A ** (-1) @ b'],
              correctIndex: 1,
              explanation: 'Der Backslash-Operator in Matlab löst Ax=b. In NumPy: `np.linalg.solve(A, b)`.',
              hints: ['Was löst A\\b in Matlab?'],
              wrongAnswerExplanations: {
                "0": '`A / b` ist in NumPy elementweise Division und entspricht Matlab `A ./ b` oder `A / b` (Rechtsdivision $A \\cdot b^{-1}$). Das ist nicht dasselbe wie das Loesen eines linearen Gleichungssystems.',
                "2": '`np.divide(A, b)` macht elementweise Division — also dasselbe wie `A / b`. Fuer das Gleichungssystem $A x = b$ braucht es `np.linalg.solve`.',
                "3": '`A ** (-1) @ b` rechnet erst die Inverse mit `**(-1)` (was bei Matrizen in NumPy gar nicht die Matrixinverse liefert, sondern elementweise `1/A`) und multipliziert dann. Selbst mit korrekter Inversen waere dieser Weg numerisch ungenauer als `solve`.',
              },
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\nimport numpy as np\nA = np.array([[1,2],[3,4]])\nprint(np.trace(A))\n```',
              correctValue: 5,
              tolerance: 0,
              unit: '',
              explanation: 'np.trace berechnet die Spur (Summe der Diagonalelemente): 1 + 4 = 5.',
              hints: ['Die Spur ist die Summe der Hauptdiagonale.'],
            },
            {
              type: 'true-false',
              statement: '[PRÜFUNG] In Python beginnt die Indizierung bei 0, in Matlab bei 1.',
              correct: true,
              explanation: 'Korrekt. a[0] in Python entspricht a(1) in Matlab.',
              hints: ['Denke an den ersten Zugriff auf ein Array.'],
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt folgender Code aus?\n```python\nx = 10\nfor i in range(3):\n    x = x // 2\nprint(x)\n```',
              correctValue: 1,
              tolerance: 0,
              unit: '',
              explanation: 'Iteration 1: 10//2=5. Iteration 2: 5//2=2. Iteration 3: 2//2=1.',
              hints: ['// ist ganzzahlige Division.', 'Schritt für Schritt durchgehen.'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Welche Funktion löst in SciPy ein Anfangswertproblem (ODE)?',
              options: ['scipy.optimize.fsolve', 'scipy.integrate.solve_ivp', 'scipy.linalg.solve', 'scipy.signal.ode'],
              correctIndex: 1,
              explanation: 'solve_ivp (Initial Value Problem) ist die Standard-Funktion für gewöhnliche DGL in SciPy.',
              hints: ['IVP = Initial Value Problem.'],
              wrongAnswerExplanations: {
                "0": '`scipy.optimize.fsolve` findet Nullstellen einer Funktion $f(x) = 0$ — das ist ein algebraisches Problem, keine DGL. Fuer Differentialgleichungen braucht es einen Integrator wie `solve_ivp`.',
                "2": '`scipy.linalg.solve` loest lineare Gleichungssysteme $Ax = b$ — also ein algebraisches, kein dynamisches Problem. ODEs beschreiben zeitliche Entwicklung und brauchen `solve_ivp`.',
                "3": '`scipy.signal.ode` existiert nicht. Das Signal-Modul von SciPy enthaelt Filter, Transformationen und Systemanalyse, aber keine ODE-Solver. Letztere liegen im `scipy.integrate`-Modul.',
              },
            },
            {
              type: 'number-input',
              question: '[PRÜFUNG] Was gibt `len([x for x in range(10) if x % 3 == 0])` zurück?',
              correctValue: 4,
              tolerance: 0,
              unit: '',
              explanation: 'range(10) = 0..9. Durch 3 teilbar: 0, 3, 6, 9 → 4 Elemente.',
              hints: ['Welche Zahlen von 0 bis 9 sind durch 3 teilbar?'],
            },
            {
              type: 'multiple-choice',
              question: '[PRÜFUNG] Was ist der Unterschied zwischen `*` und `@` bei NumPy-Arrays?',
              options: ['Kein Unterschied', '* ist Matrixmultiplikation, @ ist elementweise', '* ist elementweise, @ ist Matrixmultiplikation', '@ funktioniert nur mit Skalaren'],
              correctIndex: 2,
              explanation: 'Bei NumPy-Arrays: * multipliziert elementweise, @ führt Matrixmultiplikation durch.',
              hints: ['Denke an A * B vs A @ B für 2D-Arrays.'],
              wrongAnswerExplanations: {
                "0": 'Es gibt einen fundamentalen Unterschied: `*` arbeitet Element-fuer-Element, `@` fuehrt das lineare Algebra-Matrixprodukt aus. Bei gleicher Form koennen die Ergebnisse voellig verschieden sein.',
                "1": 'Genau vertauscht: In NumPy ist `*` elementweise, `@` ist Matrixmultiplikation. Diese Verwechslung kommt haeufig aus Matlab, wo `*` die Matrixmultiplikation ist und `.*` die elementweise Variante.',
                "3": '`@` funktioniert gerade nicht nur mit Skalaren — es ist fuer Matrixprodukte gedacht. Fuer Skalare gibt es keinen Unterschied zwischen `*` und `@`; relevant wird es erst bei 2D-Arrays.',
              },
            },
          ],
        },
      ],
    },
  ],
})

export { pythonMatlabTopic }
