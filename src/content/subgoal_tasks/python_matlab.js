// ═══════════════════════════════════════════════════════════════════════════
// Python & Matlab — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching } from './_helpers'

export const pythonMatlabSubGoalTasks = {

  // ───────────────────────────────────────────────────────────────────────
  // py-1-1 — Variablen & Datentypen  (4 subGoals)
  // 24 Aufgaben mit pedagogy-Tags (stage × subGoal × type × uses),
  // deckt alle 20 Matrix-Zeilen + 4 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-1': {
    // ── SG 0 — `dyn-typing` — Dynamische Typisierung ────────────────────
    0: [
      // Row 1 · recognize · true-false · uses=[dyn-typing]
      tf(
        "In Python ändert eine erneute Zuweisung wie `x = 5` gefolgt von `x = 'fünf'` den Datentyp von `int` zu `str`.",
        true,
        `**Ansatz:** Python ist dynamisch typisiert — der Typ klebt am aktuellen Wert, nicht am Variablennamen. Eine Neuzuweisung kann jederzeit den Typ wechseln.

**Rechnung:** Nach $x = 5$ zeigt der Name $x$ auf einen $\\text{int}$-Wert. Die zweite Zeile $x = \\text{'fünf'}$ richtet den Namen auf einen neuen Stringwert — der alte int-Wert wird verworfen, $\\text{type}(x) = \\text{str}$.

**Probe:** $\\text{print}(\\text{type}(x))$ liefert nach Zeile 2 buchstäblich \`<class 'str'>\`.

**Typischer Fehler:** Zu denken, eine als int initialisierte Variable bleibe int — das wäre statische Typisierung wie in C/Java. In Python ist genau das anders.`,
        [
          'Python deklariert keinen Typ — woher kommt der Typ dann?',
          'Welcher Wert steht zuletzt im Namen $x$?',
          'Letzte Zuweisung gewinnt: erst int, dann str.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[dyn-typing]
      mc(
        "Du schreibst in Python `wert = 42` und in der nächsten Zeile `wert = 'Antwort'`. Was liefert `print(type(wert))` am Ende?",
        ["`<class 'int'>`", "`<class 'str'>`", "`<class 'NoneType'>`", '`TypeError`'],
        1,
        `**Ansatz:** Bei dynamischer Typisierung gilt: der Typ folgt dem zuletzt zugewiesenen Wert.

**Rechnung:** Zeile 1 setzt $\\text{wert}$ auf den int $42$. Zeile 2 weist denselben Namen einem String zu. $\\text{type}$ schaut den AKTUELLEN Wert an, also den String 'Antwort' — Ergebnis \`<class 'str'>\`.

**Probe:** Im Interpreter ausgeführt: \`>>> wert = 42; wert = 'Antwort'; print(type(wert))\` → \`<class 'str'>\`. ✓

**Typischer Fehler:** Annehmen, der erste Typ "bleibe haften". Python merkt sich nicht, mit welchem Typ eine Variable das erste Mal belegt wurde.`,
        [
          'Welcher Wert ist zuletzt im Namen?',
          '$\\text{type}()$ liest den aktuellen Wert ab, nicht die Historie.',
          'Letzte Zuweisung war ein String — also $\\text{str}$.',
        ],
        {
          '0': "`<class 'int'>` würde gelten, wenn die zweite Zeile fehlte. Mit der Neuzuweisung ist der int-Wert weg — Python speichert keine Typ-Historie.",
          '2': "`<class 'NoneType'>` käme nur, wenn `wert = None` zugewiesen würde. Hier steht stattdessen ein nicht-leerer String, also nie `None`.",
          '3': '`TypeError` tritt auf, wenn man Operationen mit inkompatiblen Typen mischt (z.B. `"a" + 1`). Eine reine Neuzuweisung ist nie ein TypeError — Python erlaubt jedem Namen jeden Typ.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[dyn-typing]
      mc(
        'Welchen Typ hat `c` nach Ausführung von `a = 10; b = 2.5; c = a + b` in Python?',
        ['`int`', '`float`', '`str`', '`complex`'],
        1,
        `**Ansatz:** Bei gemischten Operationen gilt die Type-Promotion-Regel: der "größere" Typ gewinnt. $\\text{int} + \\text{float} \\rightarrow \\text{float}$.

**Rechnung:** $a = 10$ ist int, $b = 2{,}5$ ist float. $c = 10 + 2{,}5 = 12{,}5$ — das Ergebnis ist ein float, weil mindestens ein Operand float ist. $\\text{type}(c) = \\text{float}$.

**Probe:** \`>>> type(10 + 2.5)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Glauben, weil $a$ int ist, sei das Ergebnis int. Sobald EIN Operand float ist, ist das ganze Ergebnis float — Python rundet nicht ab.`,
        [
          'Welchen Typ haben $a$ und $b$ einzeln?',
          'Welche Type-Promotion-Regel gilt bei int + float?',
          'Mindestens ein float im Ausdruck → Ergebnis ist float.',
        ],
        {
          '0': '`int` würde gelten, wenn beide Operanden int wären. $b = 2{,}5$ ist aber float — und $\\text{int} + \\text{float} \\rightarrow \\text{float}$.',
          '2': '`str` käme nur, wenn beide Operanden Strings wären (Konkatenation). Hier sind es Zahlen — Addition, nicht Konkatenation.',
          '3': '`complex` entsteht nur, wenn ein Operand eine komplexe Zahl wie `2 + 3j` ist. Reine Real-Zahlen liefern keinen complex.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[dyn-typing]
      mc(
        'Ein Studierender schreibt in Python: `int x = 5`. Was passiert beim Ausführen?',
        [
          '`SyntaxError` — die Form `Typ Variable = Wert` ist Java/C-Syntax; Python erlaubt keine Typdeklaration vor dem Variablennamen.',
          'Funktioniert: `x` wird als int mit Wert 5 erzeugt.',
          '`NameError` — `x` ist nicht definiert.',
          '`ValueError` — `int` darf nicht 5 als Wert haben.',
        ],
        0,
        `**Ansatz:** Python kennt keine Typdeklaration. Der Parser sieht \`int x = 5\` als drei Tokens und kann sie nicht zu einem Statement zusammenfügen.

**Rechnung:** Korrekte Python-Syntax ist einfach $x = 5$. Python erkennt automatisch $\\text{type}(x) = \\text{int}$ aus dem Wert. \`int x = 5\` wirft \`SyntaxError: invalid syntax\`.

**Probe:** Test im Interpreter: \`>>> int x = 5\` → \`SyntaxError: invalid syntax\`. ✓ Optional: Type-Hints wie \`x: int = 5\` sind erlaubt, werden aber zur Laufzeit NICHT erzwungen.

**Typischer Fehler:** Java/C/C++-Syntax in Python übernehmen. In Python ist die Typangabe vor dem Namen kein gültiges Statement — der Typ kommt automatisch aus dem Wert.`,
        [
          'Welche Sprache braucht $\\text{int}$ vor dem Namen?',
          'Wie lautet die korrekte Python-Form?',
          '$x = 5$ reicht aus — Python erkennt int automatisch.',
        ],
        {
          '1': 'Funktioniert NICHT — `int x = 5` ist nicht parsebar. Python würde stattdessen einfach `x = 5` schreiben.',
          '2': 'Ein NameError tritt nur auf, wenn man eine NICHT zugewiesene Variable LIEST. Hier wird zugewiesen — der Fehler liegt bei der Syntax, bevor `x` überhaupt entstehen könnte.',
          '3': 'ValueError gilt für ungültige Werte (`int("abc")`), nicht für ungültige Syntax. Der Parser bricht hier vor der Wertprüfung ab.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[dyn-typing]
      mc(
        'Welche Aussage über Variablen-Deklaration in Python und Matlab ist KORREKT?',
        [
          'Python ist dynamisch typisiert (Typ folgt dem Wert); Matlab nutzt standardmäßig den Typ `double` für alle Zahlen.',
          'Beide Sprachen verlangen `int x = 5` als Syntax.',
          'Python ist statisch typisiert wie Java.',
          'Matlab erzwingt für jede Variable eine explizite Typdeklaration.',
        ],
        0,
        `**Ansatz:** Python und Matlab gehören beide zu den dynamisch typisierten Sprachen — keine Typangabe nötig. In Matlab ist der Default-Zahlentyp aber speziell: alle Zahlen sind \`double\` (64-bit float), sofern man nichts anderes wählt (z.B. \`int32\`).

**Rechnung:** Python: \`x = 5\` → int, \`y = 3.14\` → float, \`s = "hi"\` → str. Matlab: \`x = 5\` → \`double\`, \`y = 3.14\` → \`double\`, \`s = "hi"\` → \`string\` (oder \`char\`).

**Probe:** In Matlab: \`>> class(5)\` liefert \`'double'\`. In Python: \`>>> type(5)\` liefert \`<class 'int'>\`. ✓

**Typischer Fehler:** Python und Matlab als statisch-typisiert wie Java/C einordnen. Beide kommen ohne Typdeklaration aus.`,
        [
          'Welche Sprachen kennst du, die KEINE Typdeklaration brauchen?',
          'Was ist der Default-Zahlentyp in Matlab?',
          'Python: int/float/str je nach Wert; Matlab: alles standardmäßig double.',
        ],
        {
          '1': '`int x = 5` ist Java/C-Syntax. Weder Python noch Matlab unterstützen das.',
          '2': 'Python ist NICHT statisch typisiert. Die Variable kann jederzeit einen anderen Typ annehmen — genau das ist der Unterschied zu Java.',
          '3': 'Matlab erzwingt KEINE Typdeklaration. `x = 5` reicht — der Typ ist automatisch `double`.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['dyn-typing'] },
      ),
      // Bonus · recognize · true-false · uses=[dyn-typing]
      tf(
        "Auch der umgekehrte Weg ist erlaubt: nach `x = 'Hallo'` (str) darf `x = 42` (int) folgen — der Typ wechselt mit jedem neuen Wert.",
        true,
        `**Ansatz:** Dynamische Typisierung ist symmetrisch: jeder Typenwechsel ist erlaubt, in beide Richtungen.

**Rechnung:** Nach Zeile 1 ist $\\text{type}(x) = \\text{str}$. Zeile 2 überschreibt $x$ mit einem int — $\\text{type}(x) = \\text{int}$.

**Probe:** Auch nach $x = 3{,}14$ würde der Typ wieder wechseln — diesmal zu $\\text{float}$. ✓

**Typischer Fehler:** Glauben, der erste Typ sei "fixiert". Python merkt sich keine Typ-Historie — nur den aktuellen Wert.`,
        [
          'Gibt es in Python eine Typ-Historie pro Variable?',
          'Was zählt: erste Zuweisung oder aktuelle Zuweisung?',
          'Aktuelle Zuweisung gewinnt — egal welcher Typ.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['dyn-typing'] },
      ),
    ],

    // ── SG 1 — `type-funkt` — Typprüfung mit `type(x)` ──────────────────
    1: [
      // Row 6 · recognize · true-false · uses=[type-funkt]
      tf(
        "`type(3.14)` gibt in Python `<class 'float'>` zurück.",
        true,
        `**Ansatz:** $\\text{type}(x)$ liefert die Klasse des aktuellen Wertes — bei einem Literal mit Dezimalpunkt also $\\text{float}$.

**Rechnung:** $3{,}14$ hat einen Punkt → Python wertet das Literal als $\\text{float}$ aus → $\\text{type}(3{,}14)$ liefert \`<class 'float'>\`.

**Probe:** \`>>> type(3.14)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Erwarten, dass $\\text{type}()$ nur den Namen "float" liefert. Tatsächlich kommt das ganze Klassen-Objekt: \`<class 'float'>\`. Den nackten Namen bekommt man mit \`type(3.14).__name__\`.`,
        [
          'Was liefert $\\text{type}()$ als Datentyp?',
          'Welches Literal hat einen Dezimalpunkt?',
          'Punkt im Literal → float-Klasse.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[type-funkt]
      mc(
        'Was liefert `type(2 + 3)` in Python?',
        ["`<class 'int'>`", "`<class 'float'>`", "`<class 'str'>`", "`<class 'bool'>`"],
        0,
        `**Ansatz:** $\\text{type}()$ schaut den AUSGEWERTETEN Wert an — wir müssen also zuerst $2 + 3$ rechnen.

**Rechnung:** $2 + 3 = 5$. Beide Operanden sind int, daher ist auch das Ergebnis int. $\\text{type}(5) = \\text{int}$ → \`<class 'int'>\`.

**Probe:** \`>>> type(2 + 3)\` → \`<class 'int'>\`. ✓

**Typischer Fehler:** Glauben, $\\text{type}()$ analysiere den Ausdruck syntaktisch. $\\text{type}()$ wertet zuerst aus und prüft dann den Typ des Ergebnisses.`,
        [
          'Was wird zuerst gerechnet: $\\text{type}()$ oder $2+3$?',
          'Welchen Typ haben $2$ und $3$ einzeln?',
          'int + int → int.',
        ],
        {
          '1': 'float käme nur, wenn ein Operand float wäre (z.B. $2 + 3{,}0$). Hier sind beide int.',
          '2': 'str käme nur bei Stringwerten ("2" + "3"). Hier sind 2 und 3 Zahlen, kein String.',
          '3': 'bool käme nur bei Wahrheitswerten (`True`/`False`). Reine Zahlen sind nicht bool.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[type-funkt]
      mc(
        'Code: `x = "42"` und `y = type(x)`. Was steht in `y`?',
        ["`<class 'str'>`", "`<class 'int'>`", '`42`', '`Error`'],
        0,
        `**Ansatz:** Anführungszeichen entscheiden — \`"42"\` ist ein String, kein Integer.

**Rechnung:** $x = \\text{'42'}$ → $\\text{type}(x) = \\text{str}$ → $y = $ \`<class 'str'>\`. Der Inhalt der Quotes spielt keine Rolle, solange Quotes da sind.

**Probe:** \`>>> type("42")\` → \`<class 'str'>\`. ✓

**Typischer Fehler:** Die Ziffern im String sehen wie eine Zahl aus, aber Anführungszeichen machen daraus IMMER einen String. Erst eine explizite Konvertierung wie $\\text{int}('42')$ liefert wieder eine Zahl.`,
        [
          'Was bedeuten die Anführungszeichen?',
          'Ist "42" eine Zahl oder ein String?',
          'Quotes → str, ohne Quotes → int.',
        ],
        {
          '1': '`int` käme nur bei `x = 42` ohne Quotes. Mit Quotes ist es ein String — der Inhalt liest sich nur wie eine Zahl.',
          '2': '`42` ist der Wert — aber `type()` liefert NICHT den Wert, sondern die Klasse. Frage war nach `y`, nicht nach `x`.',
          '3': '`type()` wirft keinen Error für gültige Werte — nur wenn man falsche Argumente übergibt (`type()` ohne Argument). Hier ist das Argument ein gültiger String.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[type-funkt]
      mc(
        'Ein Lerner behauptet: "Da `False == 0` in Python gilt, muss `type(False)` ebenfalls `<class \'int\'>` liefern." Was ist daran falsch?',
        [
          'Falsch — `type()` liefert die KONKRETE Klasse, nicht die Basisklasse. `type(False)` ergibt `<class \'bool\'>`, auch wenn `bool` intern Subtyp von `int` ist.',
          'Richtig — die Behauptung ist korrekt.',
          '`type(False)` wirft einen TypeError.',
          '`type(False)` liefert `<class \'integer\'>`.',
        ],
        0,
        `**Ansatz:** $\\text{type}(x)$ und Vergleich mit $==$ haben unterschiedliche Semantik. $==$ vergleicht WERTE (mit Type-Promotion), $\\text{type}()$ liefert die KLASSE.

**Rechnung:** $\\text{type}(\\text{False}) = \\text{bool}$ → \`<class 'bool'>\`. Zwar ist $\\text{bool}$ Unterklasse von $\\text{int}$ (deshalb $\\text{False} == 0 \\rightarrow \\text{True}$), aber $\\text{type}()$ gibt immer die SPEZIELLSTE Klasse zurück, nicht die Basisklasse. Wenn man die Subtyp-Beziehung prüfen will, nimmt man $\\text{isinstance}(\\text{False}, \\text{int}) \\rightarrow \\text{True}$.

**Probe:** \`>>> type(False)\` → \`<class 'bool'>\`. \`>>> isinstance(False, int)\` → \`True\`. Beide Aussagen vertragen sich. ✓

**Typischer Fehler:** Wertgleichheit ($==$) mit Typgleichheit verwechseln. Zwei verschiedene Typen können denselben Wert vergleichen, aber $\\text{type}()$ unterscheidet sie trotzdem.`,
        [
          'Was vergleicht $==$ — Werte oder Klassen?',
          'Was liefert $\\text{type}()$ — Basisklasse oder konkrete Klasse?',
          '$\\text{type}()$ ist immer am spezifischsten — also $\\text{bool}$, nicht $\\text{int}$.',
        ],
        {
          '1': 'Die Behauptung ist falsch. `type(False)` liefert `<class \'bool\'>`, nicht `<class \'int\'>` — auch wenn `False == 0`.',
          '2': '`type()` wirft KEINEN TypeError für `False` — `False` ist ein gültiges Argument.',
          '3': 'Den Klassennamen `integer` gibt es in Python nicht — der int-Typ heißt `int`, der bool-Typ heißt `bool`.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Row 10 · transfer · matching · uses=[type-funkt]
      matching(
        'Ordne jedem Python-Wert den korrekten `type()`-Output zu.',
        [
          { left: '`42`', right: "`<class 'int'>`" },
          { left: '`3.14`', right: "`<class 'float'>`" },
          { left: '`"42"`', right: "`<class 'str'>`" },
          { left: '`True`', right: "`<class 'bool'>`" },
        ],
        `**Ansatz:** Jedes Literal ist eindeutig einem Grundtyp zugeordnet:
- Ziffer ohne Punkt, ohne Quotes → \`int\`
- Ziffer mit Punkt, ohne Quotes → \`float\`
- Mit Quotes → \`str\` (egal was drinsteht)
- Schlüsselwort \`True\`/\`False\` → \`bool\`

**Rechnung:** $\\text{type}(42)$ → int · $\\text{type}(3{,}14)$ → float · $\\text{type}('42')$ → str · $\\text{type}(\\text{True})$ → bool.

**Probe:** Im Interpreter sind alle vier Outputs reproduzierbar — \`<class 'int'>\` ≠ \`<class 'float'>\` etc. ✓

**Typischer Fehler:** \`"42"\` und \`42\` als gleichen Typ einordnen. Quotes ändern alles — ein String mit Ziffern bleibt str.`,
        [
          'Punkt im Literal → welcher Typ?',
          'Quotes um den Wert → welcher Typ?',
          'Schlüsselwort True/False → welcher Typ?',
        ],
        { stage: 'transfer', subGoal: 1, uses: ['type-funkt'] },
      ),
      // Bonus · apply-independent · multiple-choice · uses=[type-funkt]
      mc(
        'Was ergibt `type(3) == type(3.0)` in Python?',
        ['`False`', '`True`', '`Error`', '`None`'],
        0,
        `**Ansatz:** $\\text{type}(3)$ ist int, $\\text{type}(3.0)$ ist float — zwei verschiedene Klassen. Der Vergleich der Klassen mit $==$ liefert False.

**Rechnung:** $\\text{type}(3) = $ \`<class 'int'>\`. $\\text{type}(3.0) = $ \`<class 'float'>\`. \`<class 'int'>\` $\\neq$ \`<class 'float'>\` → False.

**Probe:** \`>>> type(3) == type(3.0)\` → \`False\`. Aber \`>>> 3 == 3.0\` → \`True\` (Wertgleichheit mit Type-Promotion). ✓

**Typischer Fehler:** Wertvergleich ($3 == 3.0$ ist True) mit Typvergleich gleichsetzen. Zwei Werte können wertgleich sein, aber unterschiedliche Typen haben.`,
        [
          'Welchen Typ liefert $\\text{type}(3)$ vs. $\\text{type}(3{,}0)$?',
          'Sind die beiden Klassen identisch?',
          'int $\\neq$ float — also False.',
        ],
        {
          '1': 'True würde bedeuten, dass int und float dieselbe Klasse sind. Sind sie nicht.',
          '2': '`type()` wirft keinen Error für Zahlen.',
          '3': '`None` käme nur, wenn die Funktion bewusst nichts zurückgibt. Vergleichsoperatoren liefern immer bool.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['type-funkt'] },
      ),
    ],

    // ── SG 2 — `konvertier` — explizite Konvertierung ───────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[konvertier]
      tf(
        "`int('3.14')` wirft in Python einen `ValueError`, weil `int()` keine Strings mit Dezimalpunkt parsen kann.",
        true,
        `**Ansatz:** \`int(s)\` parst nur Strings, die EXAKT eine ganze Zahl darstellen — Vorzeichen + Ziffern. Ein Dezimalpunkt ist nicht zulässig.

**Rechnung:** \`int('3.14')\` versucht, den String '3.14' als ganze Zahl zu lesen. Der Punkt ist kein gültiges int-Zeichen → \`ValueError: invalid literal for int() with base 10: '3.14'\`.

**Probe:** Korrekte Reihenfolge für str → int mit Dezimalstellen: erst $\\text{float}('3.14') = 3.14$, dann $\\text{int}(3.14) = 3$ (schneidet ab). ✓

**Typischer Fehler:** Annehmen, \`int()\` runde Strings automatisch. \`int()\` rundet nur bei float-Argumenten (\`int(3.7) = 3\`), nicht bei Strings.`,
        [
          'Welche Zeichen erlaubt $\\text{int}(s)$ im String?',
          'Was passiert, wenn ein Punkt drinsteht?',
          'Strings mit Punkt → ValueError. Korrekt: $\\text{int}(\\text{float}(s))$.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[konvertier]
      mc(
        'Was ergibt `float("2.5")` in Python?',
        ['`2.5` (float)', '`2` (int)', '`ValueError`', '`"2.5"` (str)'],
        0,
        `**Ansatz:** \`float(s)\` parst einen String als Gleitkommazahl. Punkt im String ist erlaubt und wird als Dezimaltrenner gelesen.

**Rechnung:** \`float("2.5")\` → $2{,}5$ als float. $\\text{type}(\\text{float}('2.5')) = \\text{float}$.

**Probe:** \`>>> float("2.5")\` → \`2.5\` mit \`type(...)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** \`float()\` und \`int()\` verwechseln. \`int("2.5")\` würde ValueError werfen — aber \`float("2.5")\` funktioniert problemlos.`,
        [
          'Was parst $\\text{float}()$?',
          'Ist der Punkt im String erlaubt?',
          'Ergebnis ist float, nicht int oder str.',
        ],
        {
          '1': '`2` (int) entstünde nur, wenn man danach `int(...)` aufruft. `float()` allein liefert immer float.',
          '2': '`ValueError` bekäme `int("2.5")`, weil `int()` keinen Punkt akzeptiert. `float()` akzeptiert ihn aber.',
          '3': '`"2.5"` (str) wäre der Eingabewert — `float()` konvertiert ihn aber, gibt also keinen String zurück.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[konvertier]
      mc(
        'Welche der folgenden Konvertierungen läuft in Python OHNE Fehler durch?',
        [
          '`int(3.14)`',
          '`int("3.14")`',
          '`int("hallo")`',
          '`int(None)`',
        ],
        0,
        `**Ansatz:** \`int()\` akzeptiert (a) ganze Zahlen, (b) floats (schneidet ab), (c) Strings, die genau eine ganze Zahl darstellen — sonst Fehler.

**Rechnung:**
- \`int(3.14)\` → $3$ ✓ (float-Argument, Dezimalteil wird abgeschnitten, NICHT gerundet).
- \`int("3.14")\` → ValueError (String mit Punkt).
- \`int("hallo")\` → ValueError (String, der keine Zahl ist).
- \`int(None)\` → TypeError (NoneType ist kein gültiges Argument).

**Probe:** \`>>> int(3.14)\` → \`3\` ✓. Die anderen drei produzieren reproduzierbar Errors.

**Typischer Fehler:** \`int(3.14) = 3\` mit \`round(3.14) = 3\` verwechseln. \`int()\` schneidet IMMER zur Null hin ab: \`int(-3.7) = -3\`, NICHT \`-4\`.`,
        [
          'Welche Argumente erlaubt $\\text{int}()$ ohne Fehler?',
          'Bei float: schneidet ab oder rundet?',
          'Nur das float-Argument läuft durch — die anderen werfen Errors.',
        ],
        {
          '1': '`int("3.14")` wirft ValueError — Strings dürfen keinen Punkt enthalten.',
          '2': '`int("hallo")` wirft ValueError — der String muss eine ganze Zahl darstellen.',
          '3': '`int(None)` wirft TypeError — `NoneType` ist kein konvertierbares Argument.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[konvertier]
      mc(
        'Ein Lerner schreibt `wert = int("12.5")` und erwartet `12` oder `13`. Tatsächlich kommt ein `ValueError`. Was ist die Ursache?',
        [
          '`int()` parst Strings buchstäblich — ein Punkt im String ist nicht zulässig. Korrekt: `int(float("12.5"))` ergibt `12`.',
          'Der Wert "12.5" ist zu groß.',
          'Anführungszeichen sind bei `int()` verboten.',
          'Python kann keine Dezimalzahlen darstellen.',
        ],
        0,
        `**Ansatz:** \`int(s)\` und \`int(x)\` für float \`x\` sind zwei verschiedene Pfade. Strings müssen syntaktisch eine ganze Zahl sein.

**Rechnung:** \`int("12.5")\` → ValueError, weil "12.5" als int-Literal nicht gültig ist. Lösung: erst float-konvertieren, dann int: \`float("12.5")\` → $12{,}5$, dann \`int(12.5)\` → $12$ (Abschneiden zur Null hin).

**Probe:** \`>>> int(float("12.5"))\` → \`12\`. ✓ Wer aufrunden will: \`round(12.5) = 12\` (banker's rounding!) oder \`math.ceil(12.5) = 13\`.

**Typischer Fehler:** Glauben, \`int()\` rufe intern \`round()\` oder \`float()\` auf. Tut es nicht — der String wird buchstäblich geparst.`,
        [
          'Was erlaubt $\\text{int}()$ als String — nur Ganzzahlen oder auch Dezimalzahlen?',
          'Welcher Zwischenschritt löst das Problem?',
          'Erst float, dann int — zwei Aufrufe statt einer.',
        ],
        {
          '1': '"12.5" ist ein winziger Wert für int (Python-int hat keine Größengrenze). Das Problem ist das Format, nicht der Wert.',
          '2': 'Anführungszeichen sind erlaubt — `int("12")` funktioniert ja. Der Punkt ist das Problem.',
          '3': 'Python kann sehr wohl Dezimalzahlen — als float. Das Problem ist nur die String→int-Konvertierung mit Punkt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['konvertier'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[konvertier]
      mc(
        'Ein Sensor liefert die Spannung als String `"5.7"`. Welche Zeile speichert sie korrekt als float in `u`?',
        [
          '`u = float("5.7")`',
          '`u = int("5.7")`',
          '`u = str(5.7)`',
          '`u = "5.7"`',
        ],
        0,
        `**Ansatz:** Ziel: aus dem String "5.7" eine Zahl vom Typ float gewinnen. Genau das macht \`float(s)\`.

**Rechnung:** \`float("5.7")\` parst den String und liefert $5{,}7$ als float. $\\text{type}(u) = \\text{float}$ ✓.

**Probe:** \`>>> u = float("5.7"); type(u)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** \`int("5.7")\` schreiben — wirft ValueError. Oder \`u = "5.7"\` ohne Konvertierung — bleibt String. Mit einem String kann man nicht rechnen: \`"5.7" * 2\` ergibt \`"5.75.7"\` (Konkatenation), nicht \`11.4\`.`,
        [
          'Welche Funktion macht "String → float"?',
          'Was passiert ohne Konvertierung mit dem String "5.7"?',
          'Nur $\\text{float}()$ liefert das, was man messen wollte.',
        ],
        {
          '1': '`int("5.7")` wirft ValueError. Selbst wenn es ginge, würde der Dezimalteil verloren gehen.',
          '2': '`str(5.7)` macht den umgekehrten Weg: float → str. Hier ist die Eingabe schon String, also doppelt verkehrt.',
          '3': '`u = "5.7"` lässt den String unverändert — keine Konvertierung. `u` wäre ein str, kein float.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['konvertier'] },
      ),
      // Bonus · apply-independent · multiple-choice · uses=[konvertier]
      mc(
        'Was steht nach Ausführung in `n`?\n```\ns = "42"\nn = int(s) + 1\n```',
        ['`43`', '`"421"`', '`"43"`', '`TypeError`'],
        0,
        `**Ansatz:** Schritt 1: $\\text{int}(s)$ konvertiert "42" zu int $42$. Schritt 2: $42 + 1 = 43$.

**Rechnung:** \`int("42")\` → $42$ (int). $42 + 1 = 43$ (int + int = int). $n = 43$.

**Probe:** \`>>> n = int("42") + 1\` → \`n == 43\`. ✓

**Typischer Fehler:** Konkatenation ohne Konvertierung: \`"42" + "1" = "421"\` (str + str). Oder \`"42" + 1\` → TypeError (str + int). Erst konvertieren, dann rechnen!`,
        [
          'Welcher Operator wird zuerst ausgeführt — $\\text{int}()$ oder $+$?',
          'Was liefert $\\text{int}(\\text{"42"})$?',
          'Dann normaler Integer-Plus: $42 + 1$.',
        ],
        {
          '1': '`"421"` entsteht durch String-Konkatenation `"42" + "1"`. Hier konvertieren wir aber zu int, bevor wir addieren.',
          '2': '`"43"` wäre nur das Ergebnis, wenn man am Schluss wieder zu str konvertiert. `n = int(s) + 1` liefert aber int.',
          '3': '`TypeError` käme bei `"42" + 1` (str + int). Hier ist `int(s)` schon int, also kein Typenkonflikt.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['konvertier'] },
      ),
    ],

    // ── SG 3 — `naming-conv` — Namenskonventionen ────────────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[naming-conv]
      tf(
        'Die Python-Konvention (PEP 8) für mehrwortige Variablennamen ist `snake_case` mit Kleinbuchstaben und Unterstrich, z.B. `kraft_in_newton`.',
        true,
        `**Ansatz:** PEP 8 ist der offizielle Style-Guide für Python und definiert die Namenskonventionen.

**Rechnung:** Variablen in Python: snake_case → \`kraft_in_newton\`, \`anzahl_iterationen\`. Konstanten: SCREAMING_SNAKE_CASE → \`MAX_KRAFT\`. Klassen: PascalCase → \`KraftBerechner\`. Matlab dagegen nutzt typischerweise camelCase: \`kraftInNewton\`.

**Probe:** Ein Blick in die Python Standard-Library: \`os.path.join\`, \`numpy.linalg.solve\` — alles snake_case. ✓

**Typischer Fehler:** camelCase aus Java/Matlab in Python übernehmen — funktioniert technisch (Python akzeptiert beide), gilt aber als Stilbruch und ärgert Code-Reviewer.`,
        [
          'Wer schreibt den Style-Guide für Python?',
          'snake_case oder camelCase in Python?',
          'snake_case mit Unterstrich für Variablen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[naming-conv]
      mc(
        'Welcher Variablenname für "die maximale Spannung in MPa" entspricht der Python-Konvention?',
        [
          '`max_spannung_mpa`',
          '`maxSpannungMPa`',
          '`MaxSpannungMPa`',
          '`max-spannung-mpa`',
        ],
        0,
        `**Ansatz:** Python nutzt snake_case: alles kleingeschrieben, Wörter mit Unterstrich getrennt. Bindestriche sind in Identifiern nicht erlaubt.

**Rechnung:** "maximale Spannung in MPa" → drei Wörter → \`max_spannung_mpa\`. Alle Buchstaben klein, dazwischen \`_\`.

**Probe:** Konsistent mit \`numpy.linalg.solve\`, \`scipy.optimize.curve_fit\` — Standard-Library-Stil. ✓

**Typischer Fehler:** camelCase oder PascalCase statt snake_case (Java/Matlab-Stil). Oder Bindestriche, die Python als Subtraktion liest.`,
        [
          'snake oder camel?',
          'Klein oder groß geschrieben?',
          'Unterstrich oder Bindestrich?',
        ],
        {
          '1': 'camelCase ist Matlab-Stil, nicht Python. Funktioniert technisch (gültiger Bezeichner), gilt aber als unpythonisch.',
          '2': 'PascalCase ist in Python für KLASSEN reserviert (z.B. `KraftBerechner`). Für Variablen wirkt das wie ein Klassenname.',
          '3': 'Bindestriche sind in Python-Identifiern nicht erlaubt — Python parst `max-spannung-mpa` als Subtraktionsausdruck.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[naming-conv]
      mc(
        'Welcher der folgenden Python-Variablennamen ist sowohl SYNTAKTISCH gültig als auch konventionsgerecht?',
        [
          '`kraft_in_n`',
          '`1_kraft`',
          '`kraftInN`',
          '`kraft-in-n`',
        ],
        0,
        `**Ansatz:** Zwei Anforderungen sind zu erfüllen: (a) gültiger Python-Identifier (beginnt mit Buchstabe oder \`_\`, danach Buchstaben/Ziffern/\`_\`); (b) snake_case-Konvention.

**Rechnung:**
- \`kraft_in_n\` — gültig + snake_case ✓
- \`1_kraft\` — Identifier dürfen NICHT mit Ziffer beginnen → SyntaxError.
- \`kraftInN\` — gültig, aber camelCase (Matlab-Stil), nicht snake_case.
- \`kraft-in-n\` — Bindestrich verboten → SyntaxError.

**Probe:** \`>>> 1_kraft = 5\` → SyntaxError. \`>>> kraft_in_n = 5\` läuft durch. ✓

**Typischer Fehler:** "Funktioniert" mit "konventionsgerecht" verwechseln. \`kraftInN\` läuft, ist aber unpythonisch.`,
        [
          'Welche Zeichen sind erlaubt — am Anfang, in der Mitte?',
          'Welche Schreibweise ist Python-Konvention?',
          'snake_case + gültiger Identifier = beide Bedingungen.',
        ],
        {
          '1': '`1_kraft` ist syntaktisch UNGÜLTIG — Identifier dürfen nicht mit Ziffer beginnen.',
          '2': '`kraftInN` ist syntaktisch gültig, aber camelCase (Matlab) statt snake_case (Python).',
          '3': '`kraft-in-n` ist syntaktisch UNGÜLTIG — Bindestrich ist nicht erlaubt.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[naming-conv]
      mc(
        'Ein Studierender schreibt `mein-wert = 5` in Python. Was meldet der Interpreter?',
        [
          '`SyntaxError` — Python parst `mein-wert` als Subtraktionsausdruck `(mein - wert)`; eine Zuweisung an einen Ausdruck ist nicht zulässig.',
          'Funktioniert: Bindestriche sind in Python-Variablen erlaubt.',
          '`NameError` — `mein` ist nicht definiert.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Python kennt nur \`-\` als Operator (Subtraktion). Ein Bindestrich in einem geplanten Identifier wird als Subtraktion interpretiert.

**Rechnung:** Parser sieht \`mein-wert\` als $\\text{mein} - \\text{wert}$. Die Zeile heißt also "weise einem Ausdruck den Wert 5 zu" → SyntaxError: \`cannot assign to expression\` (bzw. \`cannot assign to operator\`).

**Probe:** Im Interpreter testen: \`>>> mein-wert = 5\` → SyntaxError. ✓ Lösung: \`mein_wert = 5\` (Unterstrich).

**Typischer Fehler:** Bindestrich-getrennte Namen aus HTML/CSS/Kebab-Case in Python übernehmen. In Python ist \`-\` immer Operator.`,
        [
          'Was bedeutet \`-\` für Python?',
          'Wie liest der Parser \`a-b\`?',
          'Bindestrich → Subtraktion → Ausdruck → SyntaxError bei Zuweisung.',
        ],
        {
          '1': 'Bindestriche sind NIE in Python-Identifiern erlaubt — egal an welcher Stelle.',
          '2': 'Selbst wenn `mein` und `wert` definiert wären, würde dieselbe Zeile SyntaxError werfen — nicht NameError. Das Parsen scheitert vor der Namensauflösung.',
          '3': 'IndentationError tritt nur bei falscher Einrückung auf, nicht bei Bindestrichen.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Row 20 · transfer · matching · uses=[naming-conv]
      matching(
        'Ordne die Beschreibung dem konventionsgerechten Variablennamen zu.',
        [
          { left: 'Variable in Python (snake_case)', right: '`anzahl_iterationen`' },
          { left: 'Variable in Matlab (camelCase)', right: '`numIterations`' },
          { left: 'Konstante in Python (PEP 8)', right: '`MAX_KRAFT`' },
          { left: 'Privater Hilfsname in Python (mit Underscore-Prefix)', right: '`_temp`' },
        ],
        `**Ansatz:** Jede Sprache und jeder Kontext hat eine eigene Konvention. PEP 8 definiert für Python:
- normale Variable → snake_case (\`anzahl_iterationen\`)
- Konstante → SCREAMING_SNAKE_CASE (\`MAX_KRAFT\`)
- privater/intern genutzter Name → führender Underscore (\`_temp\`)

Matlab dagegen nutzt camelCase: \`numIterations\`.

**Rechnung:** Vier Beschreibungen, vier eindeutige Namen. Mapping ist eindeutig, weil jede Schreibweise zu genau einer Rolle passt.

**Probe:** Cross-Check mit Standard-Bibliotheken: NumPy (\`np.linalg.norm\`), Matlab (\`numIter\`), Python-Konstante (\`math.pi\` ist Sonderfall, aber \`math.inf\` und benutzerdefinierte \`MAX_*\` folgen PEP 8). ✓

**Typischer Fehler:** Konstanten-Stil und normale-Variable-Stil verwechseln (\`MAX_KRAFT\` vs. \`max_kraft\`). Kleinschreibung = änderbar, Großschreibung = konstant.`,
        [
          'Welche Schreibweise ist Python-Default für Variablen?',
          'Wie kennzeichnet PEP 8 Konstanten?',
          'Was bedeutet ein führender Underscore?',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['naming-conv'] },
      ),
      // Bonus · recognize · true-false · uses=[naming-conv]
      tf(
        'In Matlab ist `mein_wert` ein syntaktisch gültiger Variablenname, aber die typische Matlab-Konvention nutzt camelCase wie `meinWert`.',
        true,
        `**Ansatz:** Matlab erlaubt Unterstriche in Identifiern (anders als manche älteren Sprachen), die Convention der Matlab-Community ist aber camelCase.

**Rechnung:** \`>> mein_wert = 5\` läuft in Matlab problemlos durch. Trotzdem bevorzugen Matlab-Code-Style-Guides (z.B. MathWorks-Doku) camelCase: \`meinWert\`. So sieht man Matlab-typischen Code von Python-typischem auf einen Blick.

**Probe:** Matlab-Standardfunktionen: \`zeros\`, \`linspace\`, \`numel\` — kurze, oft camelCase-Namen. ✓

**Typischer Fehler:** Annehmen, snake_case sei in Matlab "verboten". Es ist nur unüblich, nicht ungültig.`,
        [
          'Erlaubt Matlab Unterstriche in Identifiern?',
          'Was ist die Matlab-Style-Konvention?',
          'Beides geht — Konvention bevorzugt camelCase.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['naming-conv'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // py-1-3 — Listen & Arrays  (4 subGoals)
  // 24 Aufgaben mit pedagogy-Tags · alle 20 Matrix-Zeilen + 4 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-3': {
    // ── SG 0 — `index-base` — Python 0-basiert, Matlab 1-basiert ─────────
    0: [
      // Row 1 · recognize · true-false · uses=[index-base]
      tf(
        'Python indiziert Listen ab 0 — `werte[0]` ist das erste Element. Matlab indiziert Arrays ab 1 — `werte(1)` ist das erste Element.',
        true,
        `**Ansatz:** Die beiden Sprachen nutzen verschiedene Indizierungs-Konventionen. Python folgt dem Stil von C/Java (0-basiert), Matlab dem mathematischen Vektor-Stil (1-basiert).

**Rechnung:** Python: \`werte[0]\` $\\to$ erstes Element, \`werte[-1]\` $\\to$ letztes. Matlab: \`werte(1)\` $\\to$ erstes, \`werte(end)\` $\\to$ letztes.

**Probe:** Für \`a = [10, 20, 30]\` in Python: \`a[0] = 10\`. In Matlab: \`a(1) = 10\`. Beide liefern dasselbe ERSTE Element, aber mit anderem Index. ✓

**Typischer Fehler:** Im Migrationscode den Index unverändert übernehmen — z.B. Matlab \`A(3) = 30\` als Python \`A[3]\` schreiben. Korrekt: \`A[2]\` (Index $-1$).`,
        [
          'Womit fängt Python beim Zählen an?',
          'Womit fängt Matlab beim Zählen an?',
          'Off-by-one zwischen den beiden — Python $i$ entspricht Matlab $i+1$.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['index-base'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[index-base]
      mc(
        'Gegeben `lst = ["a", "b", "c", "d"]` in Python. Was liefert `lst[2]`?',
        ['`"c"`', '`"a"`', '`"b"`', '`"d"`'],
        0,
        `**Ansatz:** Python zählt ab $0$. \`lst[2]\` ist das DRITTE Element.

**Rechnung:** \`lst[0] = "a"\` (1.), \`lst[1] = "b"\` (2.), \`lst[2] = "c"\` (3.), \`lst[3] = "d"\` (4.). Index $2$ → "c".

**Probe:** \`>>> lst = ["a", "b", "c", "d"]; lst[2]\` → \`'c'\` ✓. Insgesamt $4$ Elemente, Indices $0$ bis $3$.

**Typischer Fehler:** Den Index als "zweites Element" lesen (Matlab-Reflex) und "b" sagen. Index $2$ ist das DRITTE Element in Python.`,
        [
          'Welcher Index entspricht dem ERSTEN Element in Python?',
          'Zähle die Elemente durch: 0, 1, 2, ...',
          '$i = 2$ ist die dritte Position.',
        ],
        {
          '1': '`"a"` ist Index $0$ (erstes Element). Hier wird Index $2$ abgefragt.',
          '2': '`"b"` ist Index $1$ (zweites Element) — das wäre die Antwort, wenn Python ab $1$ zählen würde (Matlab-Reflex). Tut es aber nicht.',
          '3': '`"d"` ist Index $3$ (viertes/letztes Element) — Off-by-one in die andere Richtung.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['index-base'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[index-base]
      mc(
        'Welcher Python-Ausdruck liefert das LETZTE Element von `werte = [11, 22, 33, 44]` GARANTIERT, auch wenn die Liste später länger wird?',
        ['`werte[-1]`', '`werte[3]`', '`werte[len(werte)]`', '`werte[4]`'],
        0,
        `**Ansatz:** Python erlaubt negative Indizes — \`werte[-1]\` ist immer das letzte Element, unabhängig von der Länge. \`werte[3]\` funktioniert nur, solange die Liste mindestens 4 Elemente hat.

**Rechnung:** Aktuelle Liste hat 4 Elemente: \`werte[-1]\` $=44$, \`werte[3]\` $=44$ — beide gleich. Wenn aber \`werte.append(55)\`: \`werte[-1]\` $=55$, \`werte[3]\` $=44$ (nicht mehr letztes!).

**Probe:** \`>>> [11, 22, 33, 44][-1]\` → \`44\` ✓. \`>>> [11, 22, 33, 44, 55][-1]\` → \`55\` ✓. Negativer Index passt sich automatisch an.

**Typischer Fehler:** \`werte[len(werte)]\` schreiben — das wirft \`IndexError\`, weil der höchste gültige Index \`len(werte) - 1\` ist (Off-by-one!). Oder \`werte[4]\` mit hartkodiertem Index — bricht beim ersten Längenwechsel.`,
        [
          'Welche Python-Indizierung skaliert automatisch mit der Länge?',
          'Was liefert ein NEGATIVER Index?',
          '$-1$ → letztes, $-2$ → vorletztes, ...',
        ],
        {
          '1': '`werte[3]` liefert aktuell das letzte Element (Index 3 von 4) — aber wenn die Liste auf 5 Elemente wächst, ist \`werte[4]\` das letzte, nicht mehr \`werte[3]\`. Hartkodiert, nicht zukunftssicher.',
          '2': '`werte[len(werte)]` wirft IMMER \`IndexError\`, weil der höchste gültige Index \`len(werte) - 1\` ist. Bei 4 Elementen: gültig 0..3, ungültig 4.',
          '3': '`werte[4]` liefert bei der aktuellen Liste IndexError (gültig sind 0..3). Plus: hartkodiert wie Option 2.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['index-base'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[index-base]
      mc(
        'Ein Lerner schreibt `a = [1, 2, 3]` und ruft `print(a[3])`. Was passiert?',
        [
          '`IndexError: list index out of range` — gültige Indices sind nur 0, 1 und 2.',
          'Es wird `3` ausgegeben.',
          'Es wird `0` ausgegeben (Default für unbelegte Stelle).',
          '`KeyError`',
        ],
        0,
        `**Ansatz:** Bei einer Liste der Länge $n$ sind Indices $0$ bis $n-1$ gültig. \`a[3]\` greift auf den vierten Slot zu — der existiert nicht.

**Rechnung:** \`a = [1, 2, 3]\`: gültig sind \`a[0]=1\`, \`a[1]=2\`, \`a[2]=3\`. \`a[3]\` ist out-of-range → \`IndexError: list index out of range\`.

**Probe:** \`>>> [1, 2, 3][3]\` → \`IndexError: list index out of range\` ✓. Mit \`len([1,2,3]) - 1 = 2\` ist klar, warum Index 3 zu weit ist.

**Typischer Fehler:** Aus Matlab kommen und denken, \`a(3)\` ist das dritte Element — in Python ist das aber Index 3 = viertes Element, das nicht existiert. Off-by-one durch Sprachwechsel.`,
        [
          'Welche Indices sind für eine 3-elementige Liste gültig?',
          'Was passiert bei out-of-range?',
          'Liste hat 3 Elemente → Indices $0$ bis $2$.',
        ],
        {
          '1': 'Index 3 ist NICHT \`3\` — der Index ist die POSITION, nicht der Wert. Selbst wenn dort etwas stünde, wäre es nicht automatisch der Wert 3.',
          '2': 'Python liefert keinen Default — out-of-range wirft Exception. Das Verhalten "Default-Wert" gibt es bei \`dict.get()\`, nicht bei Listen.',
          '3': 'KeyError gilt für Dictionaries (\`{"a": 1}["b"]\`), nicht für Listen. Bei Listen ist es \`IndexError\`.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['index-base'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[index-base]
      mc(
        'In Matlab liefert `M = [10, 20, 30, 40]; M(3)` den Wert `30`. Welche Python-Zeile gibt dasselbe Element?',
        ['`M[2]`', '`M[3]`', '`M[1]`', '`M(3)`'],
        0,
        `**Ansatz:** Off-by-one bei Sprachwechsel — Matlab-Index $i$ entspricht Python-Index $i - 1$.

**Rechnung:** Matlab \`M(3)\` $=$ drittes Element $= 30$. In Python ist das dritte Element \`M[2]\` (weil Python ab 0 zählt).

**Probe:** \`>>> M = [10, 20, 30, 40]; M[2]\` → \`30\` ✓. \`M[3]\` wäre $40$ (viertes Element, Off-by-one zu groß).

**Typischer Fehler:** Den Matlab-Index direkt übernehmen — \`M[3]\` liefert das vierte Element, nicht das dritte. Bei Indexbereichs-Migration immer um $1$ reduzieren.`,
        [
          'Welche Beziehung haben Matlab-Index und Python-Index?',
          'Was ist das DRITTE Element in der Python-Notation?',
          'Matlab $i$ = Python $i-1$.',
        ],
        {
          '1': '\`M[3]\` ist in Python das VIERTE Element ($40$), nicht das dritte. Off-by-one ohne Konversion.',
          '2': '\`M[1]\` wäre das ZWEITE Element ($20$). Falsch um $1$ in die andere Richtung.',
          '3': '\`M(3)\` ist Matlab-Syntax, nicht Python — Python nutzt eckige Klammern für Indizierung.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['index-base'] },
      ),
      // Bonus · apply-independent · number-input · uses=[index-base]
      ni(
        'Welchen INDEX hat der Wert `40` in der Python-Liste `a = [10, 20, 30, 40, 50]`?',
        3, 0, '',
        `**Ansatz:** Python zählt ab 0 — Index = Position - 1.

**Rechnung:** Position 1 → Index 0 (Wert 10), Position 2 → Index 1 (20), Position 3 → Index 2 (30), Position 4 → Index 3 (Wert 40). Antwort: $3$.

**Probe:** \`>>> [10, 20, 30, 40, 50].index(40)\` → \`3\` ✓.

**Typischer Fehler:** Position 4 als Index angeben (Matlab-Reflex). In Python ist die VIERTE Stelle Index $3$.`,
        [
          'Wo fängt die Indizierung in Python an?',
          'Position $p$ → Index $p-1$.',
          '4. Element → Index $3$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['index-base'] },
      ),
    ],

    // ── SG 1 — `slicing` — `liste[a:b]` rechte Grenze exklusiv ───────────
    1: [
      // Row 6 · recognize · true-false · uses=[slicing]
      tf(
        '`liste[a:b]` in Python liefert die Elemente von Index `a` bis `b-1` — die rechte Grenze ist EXKLUSIV.',
        true,
        `**Ansatz:** Python's Slicing-Konvention: Halboffenes Intervall $[a, b)$ — links inklusiv, rechts exklusiv. Identisch zur \`range(a, b)\`-Konvention.

**Rechnung:** Anzahl Elemente: $b - a$. Beispiel: \`werte[1:4]\` liefert genau 3 Elemente (Indices 1, 2, 3 — Index 4 NICHT enthalten).

**Probe:** \`>>> [10,20,30,40,50][1:4]\` → \`[20, 30, 40]\` ✓. $4 - 1 = 3$ Elemente.

**Typischer Fehler:** Erwarten, dass die rechte Grenze inklusiv ist (Matlab-Stil: \`a(2:4)\` liefert Elemente 2, 3, 4 — drei Stück, weil Matlab beidseitig inklusiv ist). Python schließt die rechte Grenze AUS.`,
        [
          'Wie viele Elemente liefert \`liste[a:b]\`?',
          'Welche Indices werden zurückgegeben?',
          'Halb-offen: $[a, b)$ — rechte Grenze NICHT inklusiv.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['slicing'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[slicing]
      mc(
        'Gegeben `werte = [10, 20, 30, 40, 50]`. Was ergibt `werte[1:4]` in Python?',
        ['`[20, 30, 40]`', '`[10, 20, 30]`', '`[20, 30, 40, 50]`', '`[10, 20, 30, 40]`'],
        0,
        `**Ansatz:** \`werte[1:4]\` liefert Indices $1, 2, 3$ — Index $4$ ist EXKLUSIV.

**Rechnung:** \`werte[1] = 20\`, \`werte[2] = 30\`, \`werte[3] = 40\`. Slicing-Ergebnis: \`[20, 30, 40]\`.

**Probe:** Anzahl Elemente: $4 - 1 = 3$ ✓. \`>>> [10,20,30,40,50][1:4]\` → \`[20, 30, 40]\` ✓.

**Typischer Fehler:** Index $4$ mit einbeziehen (Matlab-Reflex) und \`[20, 30, 40, 50]\` antworten — falsch, weil rechte Grenze exklusiv.`,
        [
          'Welche Indices sind in \`werte[1:4]\` enthalten?',
          'Wie viele Elemente sind das?',
          '$1, 2, 3$ — drei Stück.',
        ],
        {
          '1': '`[10, 20, 30]` wären Indices $0, 1, 2$ — also \`werte[0:3]\`. Hier startet aber bei Index $1$.',
          '2': '`[20, 30, 40, 50]` würde Index 4 einschließen — die rechte Grenze ist aber EXKLUSIV. \`werte[1:5]\` wäre die korrekte Slice-Notation für vier Elemente.',
          '3': '`[10, 20, 30, 40]` startet bei Index 0 und endet bei Index 3 — das wäre \`werte[0:4]\`. Hier startet aber Index 1.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['slicing'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[slicing]
      mc(
        'Was ergibt `s[2:5]` für den Python-String `s = "Python"`?',
        ['`"tho"`', '`"yth"`', '`"thon"`', '`"ytho"`'],
        0,
        `**Ansatz:** Strings sind in Python wie Listen indizierbar und sliceable. \`s[2:5]\` liefert die Zeichen an Indices $2, 3, 4$ — Index $5$ exklusiv.

**Rechnung:** \`s = "Python"\`: \`s[0]='P'\`, \`s[1]='y'\`, \`s[2]='t'\`, \`s[3]='h'\`, \`s[4]='o'\`, \`s[5]='n'\`. Slice $[2,5)$ → "t" + "h" + "o" = "tho".

**Probe:** \`>>> "Python"[2:5]\` → \`'tho'\` ✓. Länge: $5 - 2 = 3$ Zeichen ✓.

**Typischer Fehler:** Index $5$ einschließen → "thon" (4 Zeichen). Oder ab Index $1$ starten → "ytho". Beide sind klassische Off-by-one-Fehler beim Slicing.`,
        [
          'Wie viele Zeichen liefert ein Slice $[a, b)$?',
          'Welche Indices haben \`P\`, \`y\`, \`t\`, \`h\`, \`o\`, \`n\`?',
          '$s[2]=$ "t", $s[3]=$ "h", $s[4]=$ "o".',
        ],
        {
          '1': '\`"yth"\` würde bei Index $1$ starten (s[1:4]). Hier startet aber Index $2$.',
          '2': '\`"thon"\` schließt Index $5$ ein (s[2:6]). Die rechte Grenze ist aber EXKLUSIV — Index $5$ ("n") darf nicht dabei sein.',
          '3': '\`"ytho"\` ist s[1:5] — startet falsch bei $1$ statt $2$.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['slicing'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[slicing]
      mc(
        'Ein Studierender will die ERSTEN DREI Elemente von `a = [1, 2, 3, 4, 5]` und schreibt `a[0:2]`. Was hat er falsch gemacht?',
        [
          'Die rechte Grenze ist EXKLUSIV. `a[0:2]` liefert nur Indices 0 und 1 (zwei Elemente). Korrekt: `a[0:3]` oder kürzer `a[:3]`.',
          'Indices müssen mit 1 beginnen.',
          '`a[0:2]` ist syntaktisch falsch.',
          'Slicing funktioniert nicht bei Listen.',
        ],
        0,
        `**Ansatz:** Anzahl Elemente eines Slice $[a, b)$ ist $b - a$. Für drei Elemente brauche ich $b - a = 3$.

**Rechnung:** \`a[0:2]\` → $b - a = 2$, also nur zwei Elemente \`[1, 2]\`. Für drei Elemente: \`a[0:3]\` → \`[1, 2, 3]\`. Oder kürzer: \`a[:3]\` (Start bei Anfang impliziert).

**Probe:** \`>>> [1,2,3,4,5][0:3]\` → \`[1, 2, 3]\` ✓. \`>>> [1,2,3,4,5][:3]\` → \`[1, 2, 3]\` ✓.

**Typischer Fehler:** Anzahl gewünschter Elemente direkt als rechte Grenze nehmen, ohne den Off-by-one-Trick zu beachten. Für $n$ Elemente vom Anfang: \`a[:n]\` (mnemonisch).`,
        [
          'Wie viele Elemente liefert \`a[0:n]\`?',
          'Welche rechte Grenze ergibt drei Elemente?',
          '$3 - 0 = 3$ → \`a[0:3]\`.',
        ],
        {
          '1': 'Indices in Python beginnen bei $0$ (siehe SG 0). Das ist nicht der Fehler hier — der Fehler ist die rechte Grenze.',
          '2': '\`a[0:2]\` ist syntaktisch korrekt — es liefert nur weniger Elemente als gewünscht. Kein Syntaxfehler.',
          '3': 'Slicing funktioniert sehr wohl bei Listen — Strings, Tuples und Listen alle slicebar.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['slicing'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[slicing]
      mc(
        'NumPy: `a = np.arange(10)` liefert die Werte 0..9. Welcher Slicing-Ausdruck gibt die ersten FÜNF Elemente?',
        ['`a[:5]`', '`a[1:5]`', '`a[5:]`', '`a[0:4]`'],
        0,
        `**Ansatz:** "Erste $n$ Elemente": von Anfang bis Index $n$ exklusiv → \`a[:n]\`. Slicing funktioniert bei NumPy genauso wie bei Listen.

**Rechnung:** \`a = np.arange(10)\` → \`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\`. \`a[:5]\` → \`[0, 1, 2, 3, 4]\` (fünf Elemente).

**Probe:** \`>>> np.arange(10)[:5]\` → \`array([0, 1, 2, 3, 4])\` ✓. Länge: $5 - 0 = 5$ ✓.

**Typischer Fehler:** \`a[0:4]\` schreiben — das liefert nur vier Elemente (Off-by-one beim rechten Grenzwert). Oder \`a[5:]\` — das ist die HINTERE Hälfte ab Index 5.`,
        [
          'Wie schreibt man "die ersten $n$" idiomatisch?',
          'Wo liegt die rechte Grenze für 5 Elemente?',
          '\`a[:n]\` für die ersten $n$.',
        ],
        {
          '1': '\`a[1:5]\` startet bei Index $1$ und endet bei $4$ — vier Elemente, nicht fünf, und nicht vom Anfang.',
          '2': '\`a[5:]\` ist genau das GEGENTEIL: alle Elemente AB Index 5 (also die letzten fünf).',
          '3': '\`a[0:4]\` liefert nur vier Elemente (Indices 0..3). Off-by-one bei der rechten Grenze.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['slicing'] },
      ),
      // Bonus · apply-independent · number-input · uses=[slicing]
      ni(
        'Wie viele Elemente hat das Slice `a[1:6]` für die Liste `a = [10, 20, 30, 40, 50, 60, 70]` (Python)?',
        5, 0, '',
        `**Ansatz:** Anzahl Elemente eines Slice $[a, b)$ ist $b - a$ (solange beide Grenzen im gültigen Bereich liegen).

**Rechnung:** $6 - 1 = 5$ Elemente. Konkret: \`a[1:6]\` → \`[20, 30, 40, 50, 60]\` (Indices 1, 2, 3, 4, 5).

**Probe:** \`>>> len([10,20,30,40,50,60,70][1:6])\` → \`5\` ✓.

**Typischer Fehler:** Index 6 mit-zählen → 6 Elemente. Rechte Grenze ist exklusiv.`,
        [
          'Was ist die Formel für Anzahl Elemente eines Slice?',
          '$b - a$ wenn $a$ und $b$ im Bereich.',
          '$6 - 1 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['slicing'] },
      ),
    ],

    // ── SG 2 — `numpy-vec` — vektorisierte Array-Operationen ─────────────
    2: [
      // Row 11 · recognize · true-false · uses=[numpy-vec]
      tf(
        'Bei NumPy-Arrays sind Operationen wie `+`, `-`, `*`, `/` standardmäßig elementweise: `np.array([1, 2, 3]) * 2` ergibt `array([2, 4, 6])`.',
        true,
        `**Ansatz:** NumPy nutzt VEKTORISIERUNG — eine Operation auf ein Array wirkt auf jedes Element gleichzeitig (in C-Schleifen statt Python-Schleifen → schnell).

**Rechnung:** \`np.array([1, 2, 3]) * 2\` wendet $\\cdot 2$ auf jedes Element an: $[1 \\cdot 2,\\ 2 \\cdot 2,\\ 3 \\cdot 2] = [2, 4, 6]$. Das nennt sich "Broadcasting".

**Probe:** \`>>> import numpy as np; np.array([1, 2, 3]) * 2\` → \`array([2, 4, 6])\` ✓.

**Typischer Fehler:** Annehmen, \`*\` zwischen Arrays sei Matrixmultiplikation (Matlab-Reflex). In NumPy ist \`*\` IMMER elementweise; für Matrixmult.: \`@\` oder \`np.matmul\`.`,
        [
          'Was bedeutet "Vektorisierung"?',
          'Wie wirkt \`*\` zwischen NumPy-Array und Skalar?',
          'Auf jedes Element gleichzeitig anwenden.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['numpy-vec'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[numpy-vec]
      mc(
        '`import numpy as np; a = np.array([2, 4, 6])`. Was ergibt `a + 1`?',
        ['`array([3, 5, 7])`', '`array([2, 4, 6, 1])`', '`array([3, 4, 6])`', '`Error`'],
        0,
        `**Ansatz:** Skalar + Array → Broadcasting: der Skalar wird auf jedes Element angewendet.

**Rechnung:** \`np.array([2, 4, 6]) + 1\` → $[2+1, 4+1, 6+1] = [3, 5, 7]$.

**Probe:** \`>>> a = np.array([2, 4, 6]); a + 1\` → \`array([3, 5, 7])\` ✓.

**Typischer Fehler:** Mit Listen-Verhalten verwechseln: \`[2, 4, 6] + [1]\` (Python-Liste) wäre \`[2, 4, 6, 1]\` (Konkatenation). NumPy-Arrays machen aber Arithmetik, nicht Konkatenation.`,
        [
          'Was passiert mit dem Skalar bei Broadcasting?',
          'Auf wie viele Elemente wirkt \`+ 1\`?',
          'Auf jedes — neuer Wert = alter Wert + 1.',
        ],
        {
          '1': '\`array([2, 4, 6, 1])\` wäre Listen-Konkatenation. NumPy-Arrays addieren skalar elementweise, nicht durch Anhängen.',
          '2': '\`array([3, 4, 6])\` würde nur das ERSTE Element addieren — Broadcasting wirkt aber auf ALLE.',
          '3': 'Skalar + Array ist eine Standard-NumPy-Operation, kein Error.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['numpy-vec'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[numpy-vec]
      mc(
        '`import numpy as np; a = np.array([1, 2, 3]); b = np.array([10, 20, 30])`. Was ergibt `a * b` in NumPy?',
        ['`array([10, 40, 90])`', '`140`', '`array([11, 22, 33])`', '`Error`'],
        0,
        `**Ansatz:** Bei zwei NumPy-Arrays gleicher Form ist \`*\` ELEMENTWEISE Multiplikation, nicht Skalarprodukt.

**Rechnung:** $a \\cdot b = [1 \\cdot 10,\\ 2 \\cdot 20,\\ 3 \\cdot 30] = [10, 40, 90]$.

**Probe:** \`>>> np.array([1,2,3]) * np.array([10,20,30])\` → \`array([10, 40, 90])\` ✓. Im Vergleich: \`np.dot(a, b)\` $=$ $10 + 40 + 90 = 140$ (Skalarprodukt).

**Typischer Fehler:** \`*\` als Skalarprodukt interpretieren ($140$). In Matlab-Sprache: \`A*B\` wäre Matrixmultiplikation, \`A.*B\` elementweise. NumPy nutzt \`*\` für elementweise und \`@\` für Matrixmult.`,
        [
          'Wie wirkt \`*\` zwischen zwei NumPy-Arrays?',
          'Elementweise oder Skalarprodukt?',
          '$1 \\cdot 10$, $2 \\cdot 20$, $3 \\cdot 30$.',
        ],
        {
          '1': '\`140\` wäre $1 \\cdot 10 + 2 \\cdot 20 + 3 \\cdot 30$ (Skalarprodukt). Das macht aber \`np.dot(a, b)\` oder \`a @ b\`, nicht \`a * b\`.',
          '2': '\`array([11, 22, 33])\` wäre $a + b$ (elementweise Addition), nicht Multiplikation.',
          '3': 'Beide Arrays haben Shape $(3,)$ — kompatibel für \`*\`. Kein Error.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['numpy-vec'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[numpy-vec]
      mc(
        'Ein Lerner hat zwei NumPy-2D-Arrays `A = np.array([[1,2],[3,4]])` und `B = np.array([[5,6],[7,8]])` und schreibt `C = A * B` für die MATRIX-Multiplikation. Was passiert?',
        [
          '`C` wird elementweise berechnet: `[[5, 12], [21, 32]]`. Für Matrixmultiplikation braucht es `A @ B` oder `np.matmul(A, B)`.',
          '`C` ist die Matrixmultiplikation `[[19, 22], [43, 50]]`.',
          '`Error` — `*` zwischen Matrizen ist nicht definiert.',
          '`C = A` (Matlab-Verhalten).',
        ],
        0,
        `**Ansatz:** NumPy unterscheidet konsequent: \`*\` immer elementweise (Hadamard-Produkt), \`@\` (oder \`np.matmul\`) ist Matrixmultiplikation.

**Rechnung:** Elementweise: $C_{ij} = A_{ij} \\cdot B_{ij}$ → $\\begin{pmatrix} 1 \\cdot 5 & 2 \\cdot 6 \\\\ 3 \\cdot 7 & 4 \\cdot 8 \\end{pmatrix} = \\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$.

Matrixmult.: $A @ B = \\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$.

**Probe:** \`>>> A * B\` → \`[[5, 12], [21, 32]]\`. \`>>> A @ B\` → \`[[19, 22], [43, 50]]\`. Beide werten ohne Fehler aus, aber unterschiedlich. ✓

**Typischer Fehler:** Matlab-Reflex: \`A*B\` ist dort Matrixmultiplikation. In NumPy ist es elementweise — typische Quelle stiller Bugs (Code läuft, Werte falsch).`,
        [
          'Was bedeutet \`*\` zwischen NumPy-Arrays?',
          'Welcher Operator macht Matrixmultiplikation?',
          '\`*\` elementweise · \`@\` Matrixmult.',
        ],
        {
          '1': 'Das wäre richtig für Matlab \`A*B\` oder Python \`A @ B\` — nicht für NumPy \`A*B\`. Das ist genau der typische Bug.',
          '2': 'NumPy wirft KEINEN Fehler — beide Arrays haben kompatible Shape $(2,2)$ für elementweise Operationen.',
          '3': 'NumPy verhält sich nicht wie Matlab in dieser Hinsicht. Operatoren sind klar getrennt.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['numpy-vec'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[numpy-vec]
      mc(
        'Du willst $f(x) = x^2 + 1$ auf jedes Element eines NumPy-Arrays `a = np.array([1, 2, 3, 4])` anwenden. Welche Zeile ist die SAUBERSTE NumPy-Lösung?',
        [
          '`a ** 2 + 1`',
          '`[x**2 + 1 for x in a]`',
          '`for x in a: print(x**2 + 1)`',
          '`np.array(map(lambda x: x**2 + 1, a))`',
        ],
        0,
        `**Ansatz:** NumPy ist auf Vektorisierung optimiert — direkter Operator-Ausdruck ist sowohl idiomatisch als auch um Größenordnungen schneller als explizite Schleifen.

**Rechnung:** \`a ** 2 + 1\` wirkt elementweise: $[1^2+1,\\ 2^2+1,\\ 3^2+1,\\ 4^2+1] = [2, 5, 10, 17]$. Bleibt als NumPy-Array (kein Konversionsschritt nötig).

**Probe:** \`>>> np.array([1, 2, 3, 4]) ** 2 + 1\` → \`array([ 2,  5, 10, 17])\` ✓.

**Typischer Fehler:** Liste mit Comprehension bauen — funktioniert, ist aber (a) langsamer und (b) liefert eine Liste, nicht ein NumPy-Array. Wer mit dem Ergebnis weiterrechnen will, muss erneut \`np.array(...)\` aufrufen.`,
        [
          'Was macht NumPy bei vektorisierten Operationen?',
          'Schleife oder Operator?',
          'Direkter Ausdruck \`a**2 + 1\` reicht.',
        ],
        {
          '1': 'List-Comprehension funktioniert, ist aber für NumPy-Arrays unnötig langsam und liefert eine Python-Liste statt einem NumPy-Array.',
          '2': 'Schleife mit \`print\` druckt Werte, speichert sie aber nicht. Plus: ineffizient für NumPy.',
          '3': '\`map(...)\` mit \`lambda\` ist umständlich und oft langsamer als die direkte vektorisierte Form.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['numpy-vec'] },
      ),
      // Bonus · apply-independent · number-input · uses=[numpy-vec]
      ni(
        'Was ergibt `np.sum(np.array([1, 2, 3, 4]) * 2)` als Zahl?',
        20, 0, '',
        `**Ansatz:** Erst elementweise multiplizieren (Broadcasting), dann summieren.

**Rechnung:** \`np.array([1, 2, 3, 4]) * 2\` → \`[2, 4, 6, 8]\`. \`np.sum([2, 4, 6, 8])\` $= 2 + 4 + 6 + 8 = 20$.

**Probe:** Alternative: $\\sum 2x_i = 2 \\sum x_i = 2 \\cdot (1+2+3+4) = 2 \\cdot 10 = 20$ ✓.

**Typischer Fehler:** Erst summieren, dann multiplizieren — gibt zufällig dasselbe wegen $2 \\cdot \\sum = \\sum 2 \\cdot$, ist aber ein anderer Code-Pfad. Die Frage testet, ob du Vektorisierung + sum kombinieren kannst.`,
        [
          'Was passiert zuerst — \`*\` oder \`np.sum\`?',
          'Berechne erst das Array, dann die Summe.',
          'Array $[2,4,6,8]$, Summe = $20$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['numpy-vec'] },
      ),
    ],

    // ── SG 3 — `dtype-mix` — Liste vs. NumPy-Array ──────────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[dtype-mix]
      tf(
        "Python-Listen können verschiedene Datentypen mischen (z.B. `[1, 'a', 2.5]`); NumPy-Arrays haben einen einzigen `dtype`, der für ALLE Elemente gilt.",
        true,
        `**Ansatz:** Listen sind heterogen (jedes Element kann unterschiedlichen Typ haben), NumPy-Arrays sind homogen (effizient gepackt, ein dtype).

**Rechnung:** \`lst = [1, 'a', 2.5]\` ist eine gültige Liste mit drei verschiedenen Typen. \`np.array([1, 'a', 2.5])\` zwingt NumPy, einen gemeinsamen dtype zu wählen — hier wird alles zu Strings (\`<U32\` oder ähnlich).

**Probe:** \`>>> type(lst[0]), type(lst[1]), type(lst[2])\` → \`(int, str, float)\` für die Liste. \`>>> np.array([1, 'a', 2.5]).dtype\` → \`dtype('<U32')\` (alle als String). ✓

**Typischer Fehler:** Gewohnheit aus Python-Listen mitnehmen und glauben, NumPy lasse Mischtypen zu. Tut es nicht — NumPy wählt den "kleinsten gemeinsamen" Typ.`,
        [
          'Wie viele dtypes hat ein NumPy-Array?',
          'Was passiert bei gemischter Eingabe in NumPy?',
          'Liste: heterogen · NumPy: homogen, ein dtype.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['dtype-mix'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[dtype-mix]
      mc(
        'Was passiert bei `np.array([1, 2.5, 3])` in Python?',
        [
          'Alle Werte werden zu `float64` promoviert: `array([1.0, 2.5, 3.0])`.',
          'Mischtyp-Array: `array([1, 2.5, 3])`.',
          '`Error` — int und float dürfen nicht gemischt werden.',
          'Alle werden zu `int64`: `array([1, 2, 3])` (Abschneiden).',
        ],
        0,
        `**Ansatz:** Bei gemischten Numerischen Typen wählt NumPy den "umfassendsten" gemeinsamen Typ — int und float ergeben float.

**Rechnung:** Int $\\subseteq$ Float (jeder int ist als float darstellbar). Daher \`np.array([1, 2.5, 3])\` → \`array([1., 2.5, 3.])\` mit dtype=float64.

**Probe:** \`>>> np.array([1, 2.5, 3])\` → \`array([1. , 2.5, 3. ])\` ✓. \`>>> _.dtype\` → \`dtype('float64')\` ✓.

**Typischer Fehler:** Erwarten, dass NumPy die "1" als int und "2.5" als float NEBENEINANDER speichert (wie Python-Listen). NumPy promoviert IMMER zu einem gemeinsamen Typ.`,
        [
          'Welcher gemeinsame Typ passt für int und float?',
          'Wird abgeschnitten oder promoviert?',
          'float ist umfassender als int → alle float.',
        ],
        {
          '1': 'NumPy speichert NICHT mischtypisch — das ist genau der Unterschied zu Python-Listen.',
          '2': 'Kein Error — int und float lassen sich problemlos zu float promovieren.',
          '3': 'NumPy schneidet bei der Erstellung NICHT ab. \`int64\`-Promotion gilt nur, wenn alle Werte ganze Zahlen sind. Sobald ein float dabei ist, gewinnt float.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['dtype-mix'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[dtype-mix]
      mc(
        "Was passiert bei `np.array([1, 'a', 2.5])`?",
        [
          'Alle Werte werden zu Strings konvertiert: `array(["1", "a", "2.5"])` mit dtype Unicode.',
          '`Error` — `str` und `float` sind inkompatibel.',
          'Mischtyp-Array bleibt erhalten.',
          'Nur die Zahlen bleiben, das `"a"` wird verworfen.',
        ],
        0,
        `**Ansatz:** Wenn ein String dabei ist, wählt NumPy einen STRING-dtype, der alle Werte als Text-Repräsentation aufnimmt.

**Rechnung:** \`1\` → "1", \`'a'\` → "a", \`2.5\` → "2.5". dtype wird \`<U32\` (Unicode, Länge 32) oder ähnlich.

**Probe:** \`>>> np.array([1, 'a', 2.5])\` → \`array(['1', 'a', '2.5'], dtype='<U32')\` ✓. Achtung: \`array[0] + 1\` würde jetzt einen TypeError werfen (String + int).

**Typischer Fehler:** Erwarten, dass NumPy "schlau" entscheidet und nur die Zahlen behält. NumPy macht stattdessen den breitesten gemeinsamen Typ — String dominiert über Zahlen.`,
        [
          'Welcher Typ nimmt alle drei Werte auf?',
          'String, Zahl oder Mix?',
          'String kann alles als Text speichern.',
        ],
        {
          '1': 'NumPy wirft KEINEN Error — es promoviert. Alles wird zu String.',
          '2': 'Mischtypen erlauben Python-Listen, NumPy NICHT. Genau der Unterschied.',
          '3': 'NumPy verwirft KEINE Werte — alle drei landen im Array, nur als String.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['dtype-mix'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[dtype-mix]
      mc(
        "Ein Studierender misst Spannungen in einem int-Array und schreibt:\n```\nimport numpy as np\nmess = np.array([0, 0, 0])\nmess[0] = 5.7\nprint(mess[0])\n```\nWas wird gedruckt?",
        [
          '`5` — bei `dtype=int64` wird der float-Wert 5.7 still abgeschnitten zu int.',
          '`5.7` — Python wandelt das Array automatisch in float um.',
          '`6` — der Wert wird kaufmännisch gerundet.',
          '`Error` — float-Zuweisung in int-Array ist verboten.',
        ],
        0,
        `**Ansatz:** \`np.array([0, 0, 0])\` hat dtype \`int64\` (alle Eingabewerte int). Spätere float-Zuweisungen werden zu int gecastet — durch Abschneiden zur Null hin (Truncation), NICHT durch Runden.

**Rechnung:** \`mess.dtype\` → \`int64\`. \`mess[0] = 5.7\` ruft intern \`int(5.7) = 5\` auf. Ergebnis: \`mess = [5, 0, 0]\`, \`mess[0] = 5\`.

**Probe:** \`>>> mess = np.array([0, 0, 0]); mess[0] = 5.7; mess[0]\` → \`5\`. ✓ Der Trick: \`np.array([0.0, 0.0, 0.0])\` wäre dtype=float und würde 5.7 korrekt speichern.

**Typischer Fehler:** Vergessen, dass der dtype beim ANLEGEN festgelegt wird und NICHT bei Zuweisungen automatisch wechselt. Diagnostik: \`print(arr.dtype)\` direkt nach \`np.array(...)\`.`,
        [
          'Welchen dtype hat \`np.array([0, 0, 0])\`?',
          'Was passiert bei int-Array $\\leftarrow$ float-Wert?',
          'Truncation (Abschneiden), nicht Rundung.',
        ],
        {
          '1': 'Das Array bleibt int — NumPy ändert den dtype NICHT automatisch bei Zuweisung. Der ursprüngliche dtype gewinnt.',
          '2': 'Es ist KEINE Rundung — sondern Abschneiden. \`int(5.7) = 5\`, nicht 6. Selbst \`int(5.99)\` wäre 5.',
          '3': 'Kein Error — die Zuweisung läuft still durch. Das ist die heimtückische Variante.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['dtype-mix'] },
      ),
      // Row 20 · transfer · matching · uses=[dtype-mix]
      matching(
        'Ordne der Eingabe das resultierende NumPy-dtype-Verhalten zu.',
        [
          { left: 'Python-Liste `[1, "a", 2.5]`', right: 'Heterogen — Mischtypen erlaubt' },
          { left: '`np.array([1, 2.5, 3])`', right: 'Alle Werte zu `float64` promoviert' },
          { left: '`np.array([1, "a"])`', right: 'Alle Werte zu Unicode-String promoviert' },
          { left: '`np.array([True, False, 1])`', right: 'Alle Werte zu `int64` (bool als int interpretiert)' },
        ],
        `**Ansatz:** Vier verschiedene Eingabe-Mixe — vier verschiedene Promotion-Regeln.

**Rechnung:**
- Python-Liste: heterogen, jedes Element behält seinen Typ.
- \`np.array([1, 2.5, 3])\`: int $\\cup$ float → \`float64\`.
- \`np.array([1, "a"])\`: int $\\cup$ str → \`<U21\` (Unicode-String).
- \`np.array([True, False, 1])\`: bool $\\cup$ int → \`int64\` (denn bool ist Subtyp von int, mit int dabei wird alles int).

**Probe:** Reihenfolge der Promotion: bool $\\subset$ int $\\subset$ float $\\subset$ complex $\\subset$ str. Der "größte" Typ in der Eingabe gewinnt. ✓

**Typischer Fehler:** Glauben, dass \`np.array([True, False, 1])\` ein bool-Array bleibt. Sobald ein int dabei ist, wechselt der dtype zu int.`,
        [
          'Heterogen oder homogen?',
          'Welcher Typ ist umfassender — bool, int, float, str?',
          'NumPy nimmt den umfassendsten Typ.',
        ],
        { stage: 'transfer', subGoal: 3, uses: ['dtype-mix'] },
      ),
      // Bonus · recognize · true-false · uses=[dtype-mix]
      tf(
        'Wenn ALLE Elemente eines NumPy-Arrays bool sind (z.B. `np.array([True, False, True])`), ist `dtype = bool`.',
        true,
        `**Ansatz:** Ohne andere Typen in der Eingabe gibt es keinen Promotion-Druck — NumPy nimmt einfach \`bool\`.

**Rechnung:** \`np.array([True, False, True])\` hat \`dtype('bool')\`. Sobald ein int oder float dazukommt, wird zu int/float promoviert (siehe Hauptaufgaben).

**Probe:** \`>>> np.array([True, False, True]).dtype\` → \`dtype('bool')\` ✓. Vergleich: \`np.array([True, False, 1]).dtype\` → \`int64\`.

**Typischer Fehler:** Annehmen, NumPy konvertiere bool IMMER zu int. Tut es nur, wenn ein int (oder größerer Typ) auch in der Eingabe steht.`,
        [
          'Welcher dtype reicht für reines bool?',
          'Wann wird zu int promoviert?',
          'Reine bools → bool · gemischt mit int → int.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['dtype-mix'] },
      ),
    ],
  },
}
