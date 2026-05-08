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
  // py-1-4 — Kontrollstrukturen  (4 subGoals)
  // 24 Aufgaben mit pedagogy-Tags · alle 20 Matrix-Zeilen + 4 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-4': {
    // ── SG 0 — `einrueckung` — Python: Einrückung statt `end` ────────────
    0: [
      // Row 1 · recognize · true-false · uses=[einrueckung]
      tf(
        'In Python definiert KONSISTENTE EINRÜCKUNG (typischerweise 4 Spaces) den Inhalt eines Codeblocks — ein abschließendes `end`-Schlüsselwort wie in Matlab gibt es nicht.',
        true,
        `**Ansatz:** Python erzwingt Einrückung als Teil der Syntax — der Compiler erkennt Blöcke an gleicher Einrücktiefe, nicht an Klammern oder \`end\`.

**Rechnung:** \`if x > 0:\\n    print('positiv')\\n    print('zweite Zeile im Block')\\nprint('außerhalb')\` — die ersten beiden \`print\` gehören zum if-Block (gleiche Einrückung), das dritte nicht. Konvention laut PEP 8: 4 Leerzeichen pro Stufe.

**Probe:** Matlab-Pendant: \`if x > 0\\n    disp('positiv')\\n    disp('zweite Zeile')\\nend\\ndisp('außerhalb')\`. Hier definiert \`end\` das Block-Ende, nicht die Einrückung. ✓

**Typischer Fehler:** Tabs und Spaces mischen — Python wirft \`TabError\` (Python 3) oder \`IndentationError\`. Editor-Einstellungen prüfen, immer entweder Tabs ODER Spaces nutzen.`,
        [
          'Welches Symbol beendet einen Block in Python?',
          'Was definiert die Block-Zugehörigkeit?',
          'Einrückung — kein \`end\`, keine Klammern.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[einrueckung]
      mc(
        'Welcher der folgenden Python-Schnipsel ist syntaktisch KORREKT?',
        [
          '`if x > 0:`<br>`    print("ok")`',
          '`if x > 0`<br>`    print("ok")`<br>`end`',
          '`if x > 0:`<br>`print("ok")`',
          '`if x > 0:`<br>`{`<br>`    print("ok")`<br>`}`',
        ],
        0,
        `**Ansatz:** Korrekte Python-If-Syntax: \`if Bedingung:\` + EINGERÜCKTER Block-Inhalt. Drei Pflicht-Elemente: Bedingung, Doppelpunkt, eingerückter Body.

**Rechnung:** Option A: \`if x > 0:\\n    print("ok")\` — Doppelpunkt ✓, Einrückung ✓.
- B fehlt der Doppelpunkt, hat \`end\` (Matlab).
- C hat Doppelpunkt, aber das \`print\` ist NICHT eingerückt → IndentationError.
- D nutzt geschweifte Klammern (C/Java-Stil) — Python interpretiert \`{\` als Set/Dict, gibt SyntaxError oder unerwartetes Verhalten.

**Probe:** \`>>> x = 5; \\nif x > 0:\\n    print("ok")\` → \`ok\` ✓.

**Typischer Fehler:** Doppelpunkt vergessen oder Einrückung weglassen — beides gibt klare Errors. Selten: Klammern setzen wie in C — Python kommentarlos, aber nicht das Erwartete.`,
        [
          'Welche zwei Markierungen sind Pflicht in Python?',
          'Was passiert ohne Doppelpunkt?',
          'Doppelpunkt + Einrückung — keine Klammern, kein \`end\`.',
        ],
        {
          '1': 'Fehlender Doppelpunkt → \`SyntaxError\`. Plus: \`end\` ist Matlab-Stil, nicht Python.',
          '2': 'Print ohne Einrückung → \`IndentationError: expected an indented block\`. Der Body MUSS eingerückt sein.',
          '3': 'Geschweifte Klammern sind in Python für Sets/Dicts reserviert. \`{...}\` als Codeblock funktioniert nicht.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[einrueckung]
      mc(
        'Was passiert beim Ausführen dieses Python-Codes?\n```\nif x > 0:\nprint("ok")\n```',
        [
          '`IndentationError: expected an indented block` — der Body muss eingerückt sein.',
          'Funktioniert: gibt "ok" aus.',
          '`SyntaxError: unexpected EOF`',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Nach \`:\` erwartet Python einen eingerückten Block. Der \`print\`-Befehl steht aber auf Spalte 0 (gleiche Einrückung wie \`if\`) — also außerhalb des Blocks.

**Rechnung:** Python's Parser sucht nach \`:\` einen eingerückten Body. Findet er stattdessen eine Zeile ohne Einrückung, wirft er \`IndentationError: expected an indented block after 'if' statement\`.

**Probe:** \`>>> if 1 > 0:\\n... print("ok")\` (mit Spalte 0 für print) → \`IndentationError\`. ✓ Korrektur: \`    print("ok")\` (4 Spaces).

**Typischer Fehler:** Aus C/Java kommen, wo \`if (cond) statement;\` ohne Einrückung gültig ist. Python erzwingt strukturelle Einrückung.`,
        [
          'Was erwartet Python nach dem Doppelpunkt?',
          'Steht \`print\` eingerückt?',
          'Body fehlt → IndentationError.',
        ],
        {
          '1': 'Funktioniert NICHT — der Body ist falsch positioniert. Ohne Einrückung wirft Python \`IndentationError\`.',
          '2': 'EOF-Fehler tritt auf, wenn der String/Block unvollständig ist. Hier ist der Block nicht eingerückt — das ist \`IndentationError\`, nicht \`SyntaxError\`.',
          '3': '\`NameError\` würde gelten, wenn \`x\` oder \`print\` undefined wären. Der Fehler ist hier aber struktureller Art (Einrückung), nicht semantisch.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[einrueckung]
      mc(
        'Ein Lerner schreibt diesen Python-Code:\n```\nif x > 0\n    print("ok")\n```\nWas meldet der Interpreter?',
        [
          '`SyntaxError` — der Doppelpunkt am Ende der `if`-Zeile fehlt.',
          'Funktioniert: \"ok\" wird ausgegeben.',
          '`IndentationError`',
          '`NameError: x is not defined`',
        ],
        0,
        `**Ansatz:** Python verlangt nach \`if Bedingung\` ein \`:\` — sonst ist die Zeile keine gültige if-Anweisung.

**Rechnung:** Korrekt: \`if x > 0:\\n    print("ok")\`. Ohne \`:\` wirft Python \`SyntaxError: expected ':'\` (in neueren Versionen mit Hint), in älteren \`SyntaxError: invalid syntax\`.

**Probe:** Test im REPL: \`>>> if 1 > 0\\n... print("ok")\` → \`SyntaxError\`. ✓

**Typischer Fehler:** Aus Matlab/C++/Java mitnehmen, wo Bedingungen ohne nachfolgenden \`:\` stehen. In Python ist der Doppelpunkt Pflicht für \`if\`/\`elif\`/\`else\`/\`for\`/\`while\`/\`def\`/\`class\`.`,
        [
          'Was muss am Ende der if-Zeile stehen?',
          'Welches Symbol fehlt?',
          'Doppelpunkt \`:\` zwingend.',
        ],
        {
          '1': 'Funktioniert NICHT — Python parst die Zeile nicht als if-Anweisung. Der Doppelpunkt ist Pflicht.',
          '2': '\`IndentationError\` käme erst NACH erfolgreichem Parsen. Hier scheitert das Parsen schon bei der if-Zeile (Doppelpunkt fehlt).',
          '3': '\`x\` mag undefiniert sein, aber das wäre ein Laufzeit-Fehler. Hier kommt schon beim Parsen ein \`SyntaxError\`.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[einrueckung]
      mc(
        'Du übersetzt einen Matlab `if-elseif-else-end`-Block nach Python. Welche Aussage ist KORREKT?',
        [
          'In Python heißt es `elif` statt `elseif`; `end` entfällt; jede `if`/`elif`/`else`-Zeile braucht `:`; Block-Inhalt wird eingerückt.',
          'Der Code ist 1:1 übertragbar — Matlab und Python sind gleich.',
          'In Python heißt es `else if` als zwei getrennte Wörter; `end` muss explizit geschrieben werden.',
          'Python verwendet geschweifte Klammern statt Einrückung.',
        ],
        0,
        `**Ansatz:** Vier Migrationsregeln Matlab → Python für if-Konstrukte: Schlüsselwort, Block-Ende, Doppelpunkt, Einrückung.

**Rechnung:**

\`\`\`
% Matlab                  # Python
if x > 0                  if x > 0:
    y = 1;                    y = 1
elseif x == 0             elif x == 0:
    y = 0;                    y = 0
else                      else:
    y = -1;                   y = -1
end                       (kein end)
\`\`\`

**Probe:** Vier Punkte: \`elseif\` → \`elif\` ✓, \`end\` weg ✓, \`:\` an jede Header-Zeile ✓, Body eingerückt ✓. Semikolons in Matlab unterdrücken Output und sind in Python nicht nötig.

**Typischer Fehler:** \`elseif\` direkt schreiben — Python kennt das nicht (\`SyntaxError\`). Oder Java-\`else if\` mit Leerzeichen — auch nicht gültig in Python.`,
        [
          'Wie heißt \`elseif\` in Python?',
          'Was passiert mit \`end\` bei der Migration?',
          'Vier Regeln: Schlüsselwort, end weg, :, Einrückung.',
        ],
        {
          '1': 'Matlab und Python unterscheiden sich syntaktisch deutlich — keine 1:1-Übertragung möglich.',
          '2': '\`else if\` (zwei Wörter) gibt es in Python nicht — heißt zusammen \`elif\`. \`end\` entfällt komplett.',
          '3': 'Python nutzt EINRÜCKUNG, NICHT geschweifte Klammern. Klammern sind für Sets/Dicts reserviert.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['einrueckung'] },
      ),
      // Bonus · recognize · true-false · uses=[einrueckung]
      tf(
        'Python erlaubt sowohl Tabs als auch Spaces zur Einrückung; im selben Codeblock dürfen sie aber NICHT gemischt werden — sonst meldet Python 3 einen `TabError`.',
        true,
        `**Ansatz:** Python ist tolerant bei der Wahl (Tab ODER Spaces), aber strikt bei Konsistenz. Mischung führt zu undefiniertem Block-Layout.

**Rechnung:** PEP 8 empfiehlt 4 Leerzeichen. Python 3 weigert sich, Tabs und Spaces im selben Block zu mischen — wirft \`TabError: inconsistent use of tabs and spaces in indentation\`.

**Probe:** Erste Zeile mit Tab, zweite mit 4 Spaces → \`TabError\`. Beide Zeilen mit 4 Spaces → läuft. ✓

**Typischer Fehler:** In einem Editor mit Auto-Indent verschiedene Einrückungstiefen verwenden, ohne dass die Tab-Setting konsistent ist. Lösung: Editor-Einstellung "Tabs zu Spaces", konsistent 4 Spaces.`,
        [
          'Sind Tabs grundsätzlich verboten?',
          'Was passiert bei Mischung im selben Block?',
          'Konsistenz nötig: nicht mischen, sonst TabError.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['einrueckung'] },
      ),
    ],

    // ── SG 1 — `eq-vs-assign` — `==` Vergleich, `=` Zuweisung ────────────
    1: [
      // Row 6 · recognize · true-false · uses=[eq-vs-assign]
      tf(
        'In Python ist `=` der Zuweisungsoperator (weist einen Wert an einen Namen) und `==` der Vergleichsoperator (liefert `True`/`False`) — eine Verwechslung führt entweder zu `SyntaxError` oder zu einem stillen Bug.',
        true,
        `**Ansatz:** Beide Symbole sehen ähnlich aus, machen aber etwas grundsätzlich Verschiedenes. Pythons strenger Parser hilft, den schlimmsten Fall zu vermeiden.

**Rechnung:** \`x = 5\` setzt $x$ auf $5$ (kein Wert für Ausdrücke). \`x == 5\` testet, ob $x$ gleich $5$ ist, und liefert \`True\` oder \`False\`.

**Probe:** \`>>> x = 5\` → kein Output (Statement). \`>>> x == 5\` → \`True\`. ✓ \`>>> if x = 5:\` → \`SyntaxError: invalid syntax\` ✓.

**Typischer Fehler:** Aus C kommen, wo \`if (x = 5)\` zuweist UND testet. Python verbietet Zuweisung in Bedingungen (außer Walrus \`:=\` ab 3.8) — bewusste Designentscheidung gegen häufige Bugs.`,
        [
          'Was tut \`=\` als Operator?',
          'Was tut \`==\`?',
          'Eines weist zu, das andere vergleicht.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Welche Python-Zeile prüft, ob `x` den Wert `5` HAT (ohne ihn zu verändern)?',
        ['`if x == 5:`', '`if x = 5:`', '`if x is 5:`', '`if x equals 5:`'],
        0,
        `**Ansatz:** Wert-Vergleich in Python = \`==\`. Identitätsvergleich (\`is\`) ist für Objekte gedacht, nicht für Zahlen.

**Rechnung:** \`if x == 5:\` testet Wertgleichheit und liefert \`True\` oder \`False\`. Korrekt für die Frage "hat x den Wert 5?".

**Probe:** \`>>> x = 5\\n>>> if x == 5: print("ja")\` → \`ja\` ✓.

**Typischer Fehler:** \`if x = 5:\` schreiben (C-Stil) — \`SyntaxError\`. Oder \`if x is 5:\` — funktioniert für kleine ints zufällig wegen Integer-Caching, ist aber semantisch falsch (\`is\` testet Identität, nicht Wert) und liefert für andere Werte \`False\`.`,
        [
          'Welcher Operator vergleicht Werte?',
          'Was macht \`=\` allein?',
          '\`==\` für Wertvergleich.',
        ],
        {
          '1': '\`if x = 5:\` gibt \`SyntaxError\` — \`=\` darf NICHT in einer if-Bedingung stehen. Plus: würde es funktionieren, würde es zuweisen, nicht prüfen.',
          '2': '\`is\` testet OBJEKT-Identität, nicht Wertgleichheit. Für kleine ints liefert es zwar oft \`True\` (wegen interner Caches), ist aber semantisch falsch und unzuverlässig (z.B. für $x = 1000$ kann es \`False\` geben).',
          '3': '\`equals\` ist KEIN Python-Schlüsselwort — \`SyntaxError\`. Java hat \`.equals()\` als Methode, Python nutzt \`==\`.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Welche Aussage über `=` und `==` in Python ist KORREKT?',
        [
          '`x = 5` weist `x` den Wert 5 zu (Statement, kein Wert); `x == 5` vergleicht und liefert True oder False (Ausdruck).',
          'Beide weisen zu — `==` ist nur eine Schreibvariante.',
          'Beide vergleichen — `=` ist veraltet.',
          '`==` weist zu, `=` vergleicht (umgekehrte Konvention).',
        ],
        0,
        `**Ansatz:** Ein Operator weist zu (Seiteneffekt), der andere vergleicht (liefert Wert). Wichtig zu unterscheiden.

**Rechnung:** \`x = 5\` ist ein Statement, hat KEINEN Rückgabewert. \`x == 5\` ist ein Ausdruck, liefert \`bool\`.

**Probe:** \`>>> y = (x = 5)\` → \`SyntaxError\` (Zuweisung ist kein Ausdruck). \`>>> y = (x == 5)\` → läuft, $y$ wird \`True\` oder \`False\`. ✓

**Typischer Fehler:** \`=\` und \`==\` als äquivalent ansehen — gerade bei flüchtigem Lesen. Ein einziges Zeichen Unterschied, aber komplett verschiedene Semantik.`,
        [
          'Welcher Operator hat einen Seiteneffekt (verändert)?',
          'Welcher liefert einen Wahrheitswert?',
          '\`=\` Statement (zuweisen) · \`==\` Ausdruck (vergleichen).',
        ],
        {
          '1': '\`==\` weist NICHTS zu — vergleicht nur. Das wäre fatal, wenn \`==\` zuweisen würde.',
          '2': 'Beide vergleichen ist falsch — \`x = 5\` weist 5 an x zu.',
          '3': 'Die Konvention ist \`=\` zuweisen, \`==\` vergleichen — exakt wie in C/Java/JS. Verwechslung gefährlich.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[eq-vs-assign]
      mc(
        'Ein Lerner schreibt `if x = 5:` in Python, in der Erwartung, dass `x` mit `5` verglichen wird. Was meldet Python?',
        [
          '`SyntaxError` — Python erlaubt KEINE Zuweisung in einer if-Bedingung. Korrekt: `if x == 5:`.',
          'Funktioniert: x wird zu 5 gesetzt und der Block ausgeführt.',
          'Funktioniert: x wird mit 5 verglichen.',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Python's Parser erkennt \`=\` als Zuweisungs-Statement. Inside einer Bedingung erwartet er einen AUSDRUCK. Statement statt Ausdruck → SyntaxError.

**Rechnung:** \`if x = 5:\` wirft \`SyntaxError: invalid syntax\` (oder hilfreicher: \`expected ':' after assignment\` in neueren Versionen). Korrektur: \`if x == 5:\` (Vergleich).

**Probe:** \`>>> x = 3\\n>>> if x = 5: print("ja")\` → \`SyntaxError\` ✓.

**Typischer Fehler:** C-Reflex (dort ist \`if (x = 5)\` legal — weist zu UND testet, weil \`=\` einen Wert liefert). Python verbietet das absichtlich, weil es eine häufige Quelle stiller Bugs ist.`,
        [
          'Welche Operation gehört in eine if-Bedingung?',
          'Erlaubt Python Zuweisung in if?',
          'Ausdruck (Vergleich) erforderlich, kein Statement.',
        ],
        {
          '1': 'Funktioniert NICHT — Python verbietet Zuweisung in if. C macht das, Python nicht.',
          '2': 'Vergleich wäre \`==\`, nicht \`=\`. Plus: in dieser Form geht überhaupt nichts durch.',
          '3': '\`NameError\` käme bei undefinierten Namen zur LAUFZEIT. Hier scheitert Python schon beim Parsen.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[eq-vs-assign]
      mc(
        'In C kann man `if (x = berechne()) { ... }` schreiben — das weist zu UND testet. Welcher Python-Code erreicht ein äquivalentes Verhalten OHNE den Walrus-Operator?',
        [
          '`x = berechne()`<br>`if x:`<br>`    ...`',
          '`if x = berechne():`<br>`    ...`',
          '`if x == berechne():`<br>`    ...`',
          '`if x in berechne():`<br>`    ...`',
        ],
        0,
        `**Ansatz:** Da Python Zuweisung in if verbietet, splittet man in zwei Zeilen: erst zuweisen, dann testen.

**Rechnung:** Zwei Zeilen lesen sich als "berechne den Wert und speichere in $x$, dann teste, ob er truthy ist". Funktional äquivalent zum C-Idiom.

**Probe:** Mit Walrus (Python 3.8+): \`if x := berechne():\` macht beides in einer Zeile. Ohne Walrus die zweistufige Form.

**Typischer Fehler:** Direkten C-Code übernehmen → \`SyntaxError\`. Oder \`if x == berechne():\` schreiben — vergleicht $x$ mit dem RÜCKGABEWERT, weist aber NICHTS zu (gefährlich, wenn $x$ vorher undefined oder veraltet).`,
        [
          'Wie weist man in Python zu?',
          'Wie testet man in Python?',
          'Splitten: erst \`x = ...\`, dann \`if x:\`.',
        ],
        {
          '1': '\`if x = berechne():\` ist genau das, was Python verbietet — \`SyntaxError\`.',
          '2': '\`if x == berechne():\` vergleicht $x$ mit der Rückgabe, weist aber NICHTS zu. Wenn $x$ vorher 0 oder undefined ist, falsch.',
          '3': '\`in\` testet Containment in einer Sequenz/Container — nicht das, was hier gefragt ist.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
      // Bonus · recognize · true-false · uses=[eq-vs-assign]
      tf(
        'Der Walrus-Operator `:=` (Python 3.8+) erlaubt Zuweisung INNERHALB eines Ausdrucks: `if (n := len(lst)) > 5:` weist `n` den Wert der Länge zu UND prüft die Bedingung.',
        true,
        `**Ansatz:** \`:=\` (formell "Assignment Expression") füllt die Lücke, die \`=\` in Bedingungen offen ließ — aber explizit mit eigenem Operator-Symbol, damit der Parser nicht raten muss.

**Rechnung:** \`if (n := len(lst)) > 5:\` ist äquivalent zu:
\`\`\`
n = len(lst)
if n > 5:
\`\`\`
... aber in einer Zeile. Klammern um \`(n := ...)\` sind in vielen Kontexten nötig.

**Probe:** \`>>> lst = [1, 2, 3, 4, 5, 6]\\n>>> if (n := len(lst)) > 5: print(f"length {n}")\` → \`length 6\` ✓.

**Typischer Fehler:** Walrus mit \`=\` verwechseln — das Doppelpunkt-Gleich \`:=\` ist explizit. Vor 3.8 gibt es das nicht; bei älteren Python-Versionen wirft das \`SyntaxError\`.`,
        [
          'Seit welcher Python-Version gibt es den Walrus?',
          'Was macht \`:=\` semantisch?',
          'Zuweisen UND Wert liefern in einem Ausdruck.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['eq-vs-assign'] },
      ),
    ],

    // ── SG 2 — `for-range` — Python 0..n-1, Matlab 1..n ─────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[for-range]
      tf(
        '`for i in range(5)` durchläuft in Python die Werte $i = 0, 1, 2, 3, 4$ — also $n$ Werte ab $0$, der Endwert $n$ ist NICHT enthalten.',
        true,
        `**Ansatz:** \`range(n)\` erzeugt das halboffene Intervall $[0, n)$ — links inklusiv, rechts exklusiv. Identisch zur Slicing-Konvention.

**Rechnung:** \`range(5)\` $\\to \\{0, 1, 2, 3, 4\\}$. Insgesamt $5$ Werte ($n - 0 = 5$).

**Probe:** \`>>> list(range(5))\` → \`[0, 1, 2, 3, 4]\` ✓. Anzahl: $5$ ✓.

**Typischer Fehler:** Matlab-Reflex: \`for i = 1:5\` → $1, 2, 3, 4, 5$. Python startet bei 0 und schließt 5 aus.`,
        [
          'Wie viele Werte produziert \`range(n)\`?',
          'Was ist der erste, was der letzte Wert?',
          '0..n-1 — n Werte gesamt.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[for-range]
      mc(
        'Welche Werte durchläuft `i` in `for i in range(2, 7):`?',
        ['`2, 3, 4, 5, 6`', '`2, 3, 4, 5, 6, 7`', '`1, 2, 3, 4, 5`', '`0, 1, 2, ..., 6`'],
        0,
        `**Ansatz:** \`range(a, b)\` erzeugt das halboffene Intervall $[a, b)$ — also $a, a+1, \\ldots, b-1$.

**Rechnung:** \`range(2, 7)\` → $2, 3, 4, 5, 6$. Anzahl: $7 - 2 = 5$ Werte. Endwert $7$ ist EXKLUSIV.

**Probe:** \`>>> list(range(2, 7))\` → \`[2, 3, 4, 5, 6]\` ✓.

**Typischer Fehler:** Endwert mit-zählen → $2, 3, 4, 5, 6, 7$. Oder bei $1$ statt $2$ starten — falsch um $1$ in beide Richtungen.`,
        [
          'Was ist der Startwert?',
          'Was ist der letzte Wert (vor dem Stop)?',
          'Halb-offen $[a, b)$.',
        ],
        {
          '1': 'Endwert $7$ wäre dabei — die rechte Grenze ist aber EXKLUSIV.',
          '2': 'Startwert ist $a = 2$, nicht $1$. Off-by-one in den Anfang.',
          '3': '$0, 1, \\ldots, 6$ wäre \`range(7)\` mit nur einem Argument. Hier sind aber zwei: Start $2$, Stop $7$.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 13 · apply-independent · number-input · uses=[for-range]
      ni(
        'Wie viele Werte produziert `range(3, 12)` in Python?',
        9, 0, '',
        `**Ansatz:** Anzahl Werte in \`range(a, b)\` ist $b - a$ (für $a \\le b$).

**Rechnung:** $12 - 3 = 9$. Konkret: \`range(3, 12)\` → $3, 4, 5, 6, 7, 8, 9, 10, 11$. Neun Werte.

**Probe:** \`>>> len(list(range(3, 12)))\` → \`9\` ✓. \`>>> list(range(3, 12))\` → \`[3, 4, 5, 6, 7, 8, 9, 10, 11]\` ✓.

**Typischer Fehler:** $12$ einschließen → $10$ Werte. Oder $b - a + 1 = 10$ rechnen (Matlab-Formel).`,
        [
          'Was ist die Anzahl-Formel für \`range(a, b)\`?',
          '$b - a$, nicht $b - a + 1$.',
          '$12 - 3 = 9$.',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[for-range]
      mc(
        'Ein Lerner möchte mit Python die Zahlen 1 BIS 5 (inklusiv) durchlaufen und schreibt `for i in range(1, 5):`. Was hat er falsch gemacht?',
        [
          'Die rechte Grenze ist EXKLUSIV — `range(1, 5)` durchläuft nur $1, 2, 3, 4$. Korrekt für $1$ bis $5$ inklusive: `range(1, 6)`.',
          '`range` darf nicht mit zwei Argumenten aufgerufen werden.',
          '`for i in` ist falsch — muss `for i =` sein.',
          'Python kann nur ab 0 zählen.',
        ],
        0,
        `**Ansatz:** Python-\`range\` ist halboffen — wenn man bis $b$ INKLUSIVE will, muss man $b + 1$ als Stop angeben.

**Rechnung:** Gewünscht: $1, 2, 3, 4, 5$ (5 Werte). \`range(1, 5)\` → $1, 2, 3, 4$ (4 Werte). \`range(1, 6)\` → $1, 2, 3, 4, 5$ (5 Werte) ✓.

**Probe:** \`>>> list(range(1, 6))\` → \`[1, 2, 3, 4, 5]\` ✓.

**Typischer Fehler:** Aus Matlab kommen, wo \`for i = 1:5\` GENAU $1, 2, 3, 4, 5$ liefert (inklusiv). Python ist exklusiv — Stop muss um $1$ höher.`,
        [
          'Welche Werte produziert \`range(1, 5)\`?',
          'Welche Anpassung macht den Endwert inklusiv?',
          'Stop um $+1$ erhöhen.',
        ],
        {
          '1': '\`range\` mit zwei Argumenten ist gültig (\`range(start, stop)\`). Das ist nicht der Fehler.',
          '2': '\`for i in\` ist die Python-Syntax für for-Schleifen über Iterables. Matlab nutzt \`for i =\`, Python \`for i in\`.',
          '3': '\`range\` kann auch mit anderem Startwert: \`range(5, 10)\` → $5, 6, 7, 8, 9$. Python-Limitation existiert hier nicht.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['for-range'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[for-range]
      mc(
        'Matlab-Code `for i = 0:4` durchläuft die fünf Werte $0, 1, 2, 3, 4$. Welcher Python-Code macht GENAU dasselbe?',
        ['`for i in range(5):`', '`for i in range(4):`', '`for i in range(0, 4):`', '`for i in range(1, 5):`'],
        0,
        `**Ansatz:** Matlab \`a:b\` ist inklusiv → erzeugt $b - a + 1$ Werte. Python \`range(a, b)\` ist exklusiv → erzeugt $b - a$ Werte. Bei Migration: Stop um $+1$ erhöhen.

**Rechnung:** Matlab \`0:4\` → $0, 1, 2, 3, 4$ (5 Werte). Python-Äquivalent: Werte $0$ bis $4$, also \`range(5)\` (Stop $5$ exklusiv) ODER \`range(0, 5)\`.

**Probe:** \`>>> list(range(5))\` → \`[0, 1, 2, 3, 4]\` ✓. Identisch zu Matlab \`0:4\`. ✓

**Typischer Fehler:** Matlab-Endwert direkt übernehmen → \`range(4)\` (nur $0, 1, 2, 3$ — vier Werte, ein zu wenig).`,
        [
          'Wieviele Werte hat Matlab \`0:4\`?',
          'Welcher Stop in Python liefert dieselbe Menge?',
          'Stop um 1 erhöhen → \`range(5)\`.',
        ],
        {
          '1': '\`range(4)\` → $0, 1, 2, 3$ (vier Werte). Matlab \`0:4\` hat aber FÜNF Werte.',
          '2': '\`range(0, 4)\` ist äquivalent zu \`range(4)\` — vier Werte, immer noch eins zu wenig.',
          '3': '\`range(1, 5)\` → $1, 2, 3, 4$ — startet bei 1 statt 0. Falscher Startwert.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['for-range'] },
      ),
      // Bonus · apply-independent · number-input · uses=[for-range]
      ni(
        'Was ist die Summe aller Werte, die `for i in range(5):` in Python erzeugt?',
        10, 0, '',
        `**Ansatz:** Werte sind $0, 1, 2, 3, 4$ — Summe ausrechnen.

**Rechnung:** $0 + 1 + 2 + 3 + 4 = 10$. Allgemein: $\\sum_{i=0}^{n-1} i = \\frac{n(n-1)}{2}$. Hier: $5 \\cdot 4 / 2 = 10$ ✓.

**Probe:** \`>>> sum(range(5))\` → \`10\` ✓.

**Typischer Fehler:** $1+2+3+4+5 = 15$ rechnen (Matlab-Bereich). Python startet bei 0 und endet bei 4.`,
        [
          'Welche Werte durchläuft \`range(5)\`?',
          'Summen-Formel: $n(n-1)/2$ für $0..n-1$.',
          '$0+1+2+3+4 = ?$',
        ],
        { stage: 'apply-independent', subGoal: 2, uses: ['for-range'] },
      ),
    ],

    // ── SG 3 — `while-abbruch` — Endlos-Schleife verhindern ──────────────
    3: [
      // Row 16 · recognize · true-false · uses=[while-abbruch]
      tf(
        'Eine `while`-Schleife in Python braucht zwingend einen Mechanismus, der die Bedingung irgendwann FALSE werden lässt — sonst entsteht eine Endlos-Schleife.',
        true,
        `**Ansatz:** Eine while-Schleife terminiert nur, wenn die Bedingung im Schleifenkörper irgendwann auf False wechselt. Geschieht das nie, läuft sie endlos.

**Rechnung:** Korrekt: \`i = 0\\nwhile i < 10:\\n    print(i)\\n    i += 1\` — \`i\` wird inkrementiert, irgendwann gilt \`i < 10\` nicht mehr. Falsch (Endlos): \`i = 0\\nwhile i < 10:\\n    print(i)\` — \`i\` bleibt 0.

**Probe:** Faustregel: jede while-Schleife muss MINDESTENS eine Variable in der Bedingung verändern. Notausstieg: \`break\` (springt sofort raus).

**Typischer Fehler:** Inkrement vergessen (häufigster Bug bei Anfängern). Oder Inkrement in falschen Block (z.B. außerhalb der while-Body, also nie ausgeführt).`,
        [
          'Was beendet eine while-Schleife?',
          'Was ist nötig, damit die Bedingung false wird?',
          'Variable im Body verändern, die in der Bedingung steht.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[while-abbruch]
      mc(
        'Welche dieser while-Schleifen läuft GENAU 5 Mal durch und terminiert dann?',
        [
          '`i = 0`<br>`while i < 5:`<br>`    print(i)`<br>`    i = i + 1`',
          '`while True:`<br>`    print("hi")`',
          '`i = 0`<br>`while i < 5:`<br>`    print(i)`',
          '`i = 5`<br>`while i < 5:`<br>`    print(i)`<br>`    i = i + 1`',
        ],
        0,
        `**Ansatz:** Drei Eigenschaften prüfen: Startwert, Bedingung, Update im Body. Alle drei zusammen entscheiden über Iterationszahl.

**Rechnung:** Option A: $i = 0$, $i < 5$, $i$ wird inkrementiert.
- iter 1: $i=0$, druckt 0, $i \\to 1$
- iter 2: $i=1$, druckt 1, $i \\to 2$
- iter 3: $i=2$, druckt 2, $i \\to 3$
- iter 4: $i=3$, druckt 3, $i \\to 4$
- iter 5: $i=4$, druckt 4, $i \\to 5$
- check: $5 < 5$ false → exit. Total: 5 Iterationen ✓.

**Probe:** Equivalent: \`for i in range(5): print(i)\` (5 Iterationen). ✓

**Typischer Fehler:** Inkrement-Position oder -Größe falsch wählen. Oder \`while True\` ohne \`break\` schreiben.`,
        [
          'Wie viele Werte durchläuft \`i\`?',
          'Wird \`i\` im Körper aktualisiert?',
          '$i = 0, 1, 2, 3, 4$ — fünf Werte.',
        ],
        {
          '1': '\`while True\` ohne Inkrement oder \`break\` läuft endlos.',
          '2': 'Ohne Update von \`i\` bleibt \`i = 0\` und die Bedingung \`i < 5\` immer wahr → Endlosschleife.',
          '3': 'Schon zu Beginn ist $i = 5$, also \`5 < 5\` false. Schleife läuft 0 mal — terminiert sofort, aber nicht "5 mal".',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[while-abbruch]
      mc(
        'Wie oft wird der Schleifenkörper von folgendem Code ausgeführt?\n```\nn = 5\nwhile n > 0:\n    n = n - 1\n```',
        ['`5`', '`6`', '`4`', 'Endlos'],
        0,
        `**Ansatz:** Schleife terminiert, wenn \`n > 0\` false wird, also bei $n = 0$. Pro Iteration sinkt $n$ um $1$.

**Rechnung:**
- Start: $n = 5$. \`5 > 0\` true → iter 1: $n \\to 4$.
- $n = 4$ > 0 → iter 2: $n \\to 3$.
- $n = 3$ > 0 → iter 3: $n \\to 2$.
- $n = 2$ > 0 → iter 4: $n \\to 1$.
- $n = 1$ > 0 → iter 5: $n \\to 0$.
- Check: \`0 > 0\` false → exit. Total: 5 Iterationen.

**Probe:** Allgemein bei Start $n_0$ und Bedingung \`n > 0\` mit Update \`n -= 1\`: genau $n_0$ Iterationen. ✓

**Typischer Fehler:** $6$ Iterationen zählen (Off-by-one — vergessen, dass die letzte Iteration $n$ auf $0$ setzt, dann wird die Bedingung getestet und es endet). Oder $4$ — vergessen, dass die Iteration mit $n = 1$ noch läuft.`,
        [
          'Bei welchem $n$ stoppt die Schleife?',
          'Wie verändert sich $n$ pro Iteration?',
          'Von $5$ runter bis $0$ — wie viele Schritte?',
        ],
        {
          '1': '$6$ wäre, wenn auch die Iteration mit $n = 0$ liefe — die Bedingung wird aber VOR der Iteration getestet, $0 > 0$ ist false, also kein zusätzlicher Durchlauf.',
          '2': '$4$ würde nur bis $n = 1$ laufen — aber die Bedingung \`1 > 0\` ist wahr, also läuft auch diese Iteration.',
          '3': 'Die Schleife terminiert, weil $n$ in jedem Schritt verringert wird. Endlos wäre nur ohne Update.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[while-abbruch]
      mc(
        'Ein Studierender schreibt:\n```\ni = 0\nwhile i < 10:\n    print(i)\n```\nWas passiert?',
        [
          'ENDLOSSCHLEIFE — `i` wird im Körper nie verändert, daher bleibt `i < 10` immer wahr.',
          'Druckt `0, 1, 2, ..., 9` und terminiert.',
          'Druckt nur `0` und terminiert.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Zähler-Variable in der Bedingung muss im Körper verändert werden — sonst kein Termination.

**Rechnung:** \`i = 0\` und Bedingung \`i < 10\`. Im Körper steht NUR \`print(i)\` — keine Veränderung von \`i\`. Daher bleibt $i = 0$ ewig, die Bedingung bleibt wahr.

**Probe:** Beim Test im REPL würde der Code \`0\` immer wieder drucken, bis man Strg+C drückt. ✓ Korrektur: \`i = i + 1\` (oder kürzer \`i += 1\`) als zweite Zeile im Body.

**Typischer Fehler:** Inkrement im FALSCHEN Block — z.B. AUSSERHALB der while-Body (auf Spalte 0). Dann wird \`i += 1\` nie ausgeführt, weil die while-Schleife vorher endlos ist.`,
        [
          'Welche Variable muss sich verändern?',
          'Wo in der Schleife passiert das?',
          'Inkrement \`i += 1\` fehlt → Endlos.',
        ],
        {
          '1': 'Würde gelten, wenn \`i\` im Körper inkrementiert wäre. Hier fehlt das Update.',
          '2': 'Ohne Update läuft die Iteration mit $i = 0$ unendlich oft — \`0\` wird wiederholt gedruckt.',
          '3': 'Der Code ist syntaktisch korrekt — \`while\` mit \`:\` und eingerücktem Body. Kein IndentationError.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[while-abbruch]
      mc(
        'In einem iterativen Algorithmus willst du abbrechen, sobald die Differenz `delta` "klein genug" ist (Toleranz $10^{-9}$). Welche while-Bedingung ist BESSER GEEIGNET?',
        [
          '`while delta > 1e-9:` — läuft, solange Differenz noch zu groß ist; terminiert, wenn sie unter Toleranz fällt.',
          '`while delta == 0:` — Floats erreichen exakt 0 fast nie → potenzielle Endlosschleife.',
          '`while delta:` — bricht nur ab, wenn delta exakt 0 ist; bei Floats fast nie.',
          '`while True:` — Endlosschleife ohne Abbruch.',
        ],
        0,
        `**Ansatz:** Numerische Iteration braucht eine RELATIVE oder ABSOLUTE Toleranz als Abbruchkriterium — nicht exakte Gleichheit (Floats erreichen exakt $0$ fast nie).

**Rechnung:** \`while delta > 1e-9:\` läuft, solange die Differenz größer als die Toleranz ist. Im Körper wird $\\delta$ aktualisiert (z.B. neue Iteration berechnen). Sobald $\\delta \\le 10^{-9}$, terminiert die Schleife.

**Probe:** Newton-Verfahren-Pattern: \`while abs(f(x)) > 1e-10: x = x - f(x)/df(x)\`. ✓

**Typischer Fehler:** \`while delta != 0:\` oder \`while delta == 0:\` — beides ist bei Floats wegen Rundungsfehlern unzuverlässig. Toleranz ist die robuste Lösung.`,
        [
          'Welcher Wert ist "klein genug"?',
          'Toleranz oder exakte Gleichheit?',
          'Toleranz: \`> eps\` als while-Bedingung.',
        ],
        {
          '1': '\`while delta == 0:\` läuft NUR, wenn delta exakt 0 ist. Bei numerischer Iteration startet delta meist groß und sinkt — wird selten exakt 0. Plus: missverstanden — sollte \`!= 0\` sein, aber selbst das hat das gleiche Float-Problem.',
          '2': '\`while delta:\` ist gleichwertig zu \`while delta != 0:\` — testet auf "truthy". Bei Floats fast nie 0, also nahezu Endlos.',
          '3': '\`while True:\` ohne \`break\` ist eine echte Endlosschleife — kein Abbruchmechanismus.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['while-abbruch'] },
      ),
      // Bonus · recognize · true-false · uses=[while-abbruch]
      tf(
        '`break` in Python verlässt die innerste umschließende Schleife sofort — ein Notausstieg, falls die normale Bedingung nicht greift.',
        true,
        `**Ansatz:** \`break\` ist ein Sprungbefehl: wird er erreicht, springt der Kontrollfluss aus der INNERSTEN Schleife heraus, OHNE die Bedingung erneut zu testen.

**Rechnung:** Beispiel:
\`\`\`
while True:
    eingabe = input()
    if eingabe == 'q':
        break
    print(eingabe)
\`\`\`
Hier ist die while-Bedingung immer wahr — terminiert wird nur über \`break\`.

**Probe:** Bei verschachtelten Schleifen wirkt \`break\` nur auf die DIREKT umgebende Schleife — die äußere läuft weiter. Für Mehrfach-Ausstieg: Flag-Variable oder Funktion mit \`return\`.

**Typischer Fehler:** Annehmen, \`break\` bricht ALLE Schleifen ab — tut es nicht. Plus: \`continue\` mit \`break\` verwechseln (\`continue\` springt zum Anfang der nächsten Iteration, terminiert nicht).`,
        [
          'Was macht \`break\` mit dem Kontrollfluss?',
          'Wie viele Schleifen verlässt es?',
          'Innerste — sofort raus, ohne Bedingung zu prüfen.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['while-abbruch'] },
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


  // ───────────────────────────────────────────────────────────────────────
  // py-1-2 — Operatoren & Ausdrücke  (5 subGoals)
  // 30 Aufgaben mit pedagogy-Tags · alle 25 Matrix-Zeilen + 5 Bonus.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-2': {
    // ── SG 0 — `div-op` — `/` Float, `//` Integer, `%` Modulo ────────────
    0: [
      // Row 1 · recognize · true-false · uses=[div-op]
      tf(
        'In Python 3 liefert `/` IMMER einen `float`, auch wenn beide Operanden int sind: `4 / 2` ergibt `2.0`, nicht `2`.',
        true,
        `**Ansatz:** Python 3 hat \`/\` und \`//\` strikt getrennt: \`/\` ist die "echte" Division mit float-Ergebnis, \`//\` die Ganzzahldivision (rundet ab).

**Rechnung:** \`4 / 2\` wertet als $4 \\div 2 = 2{,}0$ (float), \`type(4 / 2)\` ist \`<class 'float'>\`. Will man int, schreibt man \`4 // 2\` oder \`int(4 / 2)\`.

**Probe:** \`>>> 4 / 2\` → \`2.0\` (mit Punkt). \`>>> type(4 / 2)\` → \`<class 'float'>\`. ✓

**Typischer Fehler:** Aus Python 2 oder C den Reflex mitbringen, dass int / int → int gilt. Python 3 hat das absichtlich geändert — sicherer, weil man bei Division selten "abrunden" will.`,
        [
          'Welcher Typ kommt bei int / int in Python 3 raus?',
          'Was ist der Unterschied zwischen `/` und `//`?',
          '`/` immer float, `//` int (bei int-Operanden).',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[div-op]
      mc(
        'Was ergibt `25 / 4` in Python 3?',
        ['`6.25`', '`6`', '`6.0`', '`"25/4"`'],
        0,
        `**Ansatz:** \`/\` ist die echte Division — Ergebnis ist float, auch wenn beide Operanden int sind.

**Rechnung:** $25 \\div 4 = 6{,}25$. Python liefert \`6.25\` als float.

**Probe:** \`>>> 25 / 4\` → \`6.25\`. ✓ Im Vergleich: \`>>> 25 // 4\` → \`6\` (int), \`>>> 25 % 4\` → \`1\` (Rest).

**Typischer Fehler:** Dezimalstellen weglassen ("$25 / 4 = 6$ Rest 1") und 6 als Antwort schreiben — das wäre Ganzzahldivision.`,
        [
          'Welcher Operator wird verwendet — `/` oder `//`?',
          'Liefert `/` bei int-Operanden int oder float?',
          '$25 \\div 4 = 6{,}25$ exakt.',
        ],
        {
          '1': '`6` wäre das Ergebnis von `25 // 4` (Ganzzahldivision). Hier steht aber `/`, also volle Division mit Dezimalanteil.',
          '2': '`6.0` würde nur entstehen, wenn $25 / 4$ exakt $6$ wäre — ist es aber nicht. $25 / 4 = 6{,}25$, der Dezimalanteil $0{,}25$ wird beibehalten.',
          '3': 'Python wertet `/` als arithmetische Division aus, nicht als String-Konkatenation. Das wäre nur bei Strings (`"25" + "/" + "4"`) der Fall.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 3 · apply-independent · number-input · uses=[div-op]
      ni(
        'Berechne den Wert von `23 // 4` in Python.',
        5, 0, '',
        `**Ansatz:** \`//\` ist die Ganzzahldivision — sie gibt den abgerundeten Quotienten zurück.

**Rechnung:** $23 \\div 4 = 5{,}75$. \`//\` schneidet zur Null hin ab → $5$. Identitätsprobe: $23 = 5 \\cdot 4 + 3$ (Quotient 5, Rest 3).

**Probe:** \`>>> 23 // 4\` → \`5\`. \`>>> 23 % 4\` → \`3\`. \`>>> 5 * 4 + 3\` → \`23\` ✓.

**Typischer Fehler:** Aufrunden statt abrunden — \`23 // 4\` ist NICHT 6. Bei positiven Werten ist \`//\` immer "Math.floor".`,
        [
          'Wie oft passt 4 ganz in 23?',
          'Quotient · Divisor + Rest = Dividend.',
          '$23 = 5 \\cdot 4 + 3$ → Quotient 5.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[div-op]
      mc(
        'Ein Lerner schreibt in Python 3 `n = 7 / 2` und erwartet `n == 3`. Tatsächlich liefert die Zeile `n = 3.5`. Was ist der Fehler?',
        [
          'In Python 3 ist `/` immer float-Division. Für die ganze Zahl ohne Rest muss `//` verwendet werden: `n = 7 // 2` → `3`.',
          '`7 / 2` ist syntaktisch ungültig in Python.',
          'Python rundet Floats automatisch zur nächsten ganzen Zahl.',
          'Der Fehler liegt bei `n` als Variablenname.',
        ],
        0,
        `**Ansatz:** \`/\` (echte Division) und \`//\` (Ganzzahldivision) sind in Python 3 verschiedene Operatoren mit unterschiedlichem Ergebnistyp.

**Rechnung:** \`7 / 2\` → $3{,}5$ (float). \`7 // 2\` → $3$ (int). Wer "wie oft passt 2 ganz in 7?" rechnen will, braucht \`//\`.

**Probe:** \`>>> type(7 / 2)\` → float, \`>>> type(7 // 2)\` → int. Die Ergebnisse stimmen mit der Python-3-Spezifikation überein. ✓

**Typischer Fehler:** Aus Python 2 oder C/Java mitnehmen, dass int / int → int. Python 3 brach diese Konvention bewusst, um Bugs durch unbeabsichtigtes Abrunden zu vermeiden.`,
        [
          'Welcher Operator schneidet den Rest ab?',
          'Was unterscheidet `/` und `//`?',
          'Für ganze Zahl: `//` benutzen.',
        ],
        {
          '1': '`7 / 2` ist gültig — es ergibt nur eben float, nicht int. Kein Syntaxfehler.',
          '2': 'Python rundet NICHT automatisch — `/` liefert exakt $3{,}5$. Wer runden will, ruft `round()` auf.',
          '3': '`n` ist ein gültiger Variablenname. Das Problem liegt am Operator, nicht am Namen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['div-op'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[div-op]
      mc(
        'Eine Messung dauert 200 Minuten. Welche Python-Zeile berechnet die Anzahl voller Stunden (als ganze Zahl)?',
        [
          '`stunden = 200 // 60`',
          '`stunden = 200 / 60`',
          '`stunden = 200 % 60`',
          '`stunden = 60 // 200`',
        ],
        0,
        `**Ansatz:** "Volle Stunden" = ganzzahliger Quotient von Minuten/60. Genau dafür ist \`//\` da.

**Rechnung:** \`200 // 60\` → $3$ (denn $3 \\cdot 60 = 180$, Rest $20$). Die übrigen $20$ Minuten kommen mit \`200 % 60\` heraus.

**Probe:** $3 \\cdot 60 + 20 = 200$ ✓. Die typische Zeit-Aufteilung: \`stunden, minuten = divmod(200, 60)\` liefert \`(3, 20)\` in einem Aufruf.

**Typischer Fehler:** \`/\` statt \`//\` nimmt — das Ergebnis $3{,}333\\ldots$ ist kein "ganze Stunden". Oder \`%\` statt \`//\` — das gibt den Rest, nicht den Quotienten.`,
        [
          'Was bedeutet "volle Stunden" mathematisch?',
          'Welcher Operator schneidet ab?',
          '$200 //\\ 60$ → wieviele 60er passen ganz?',
        ],
        {
          '1': '`200 / 60` liefert $3{,}333\\ldots$ — keine ganze Zahl. Erwartet ist aber "volle Stunden".',
          '2': '`200 % 60` liefert $20$ — das ist der REST in Minuten, nicht die Anzahl Stunden.',
          '3': '`60 // 200` liefert $0$ — falsche Reihenfolge der Operanden. Die Anzahl Stunden braucht Minuten/60, nicht 60/Minuten.',
        },
        { stage: 'transfer', subGoal: 0, uses: ['div-op'] },
      ),
      // Bonus · apply-independent · number-input · uses=[div-op]
      ni(
        'Was ergibt `17 % 6` in Python?',
        5, 0, '',
        `**Ansatz:** \`%\` liefert den Rest der Ganzzahldivision $a //\\ b$.

**Rechnung:** $17 //\\ 6 = 2$ (denn $2 \\cdot 6 = 12$). Rest = $17 - 12 = 5$. Also \`17 % 6 = 5\`.

**Probe:** Identität: $17 = 2 \\cdot 6 + 5$ ✓.

**Typischer Fehler:** $17 //\\ 6$ als $3$ schätzen ($3 \\cdot 6 = 18 > 17$ — zu groß). Die nächstkleinere ganze Zahl ist $2$.`,
        [
          'Wie oft passt 6 ganz in 17?',
          'Rest = $17 - (\\text{Quotient} \\cdot 6)$.',
          '$2 \\cdot 6 = 12$, Rest $5$.',
        ],
        { stage: 'apply-independent', subGoal: 0, uses: ['div-op'] },
      ),
    ],

    // ── SG 1 — `pot-op` — Python `**`, Matlab `^` / `.^` ─────────────────
    1: [
      // Row 6 · recognize · true-false · uses=[pot-op]
      tf(
        'In Python schreibt man Potenzierung mit `**` (z.B. `2 ** 3 = 8`); Matlab nutzt für skalare Werte `^` und für elementweise Array-Potenz `.^`.',
        true,
        `**Ansatz:** Drei Operatoren über zwei Sprachen — wichtig zum Cross-Lesen von Code.

**Rechnung:** Python: \`2 ** 3\` = $8$. Matlab Skalar: \`2^3\` = $8$. Matlab Array: \`A.^2\` quadriert jedes Element von $A$, während \`A^2\` die Matrix-Potenz $A \\cdot A$ wäre (nur für quadratische Matrizen).

**Probe:** Matlab \`>> A = [1 2; 3 4]; A.^2\` → \`[1 4; 9 16]\` (elementweise). \`>> A^2\` → \`[7 10; 15 22]\` (Matrix-Multiplikation). Unterschiedliche Ergebnisse, gleiche Dimensions-Erwartung. ✓

**Typischer Fehler:** In Python \`^\` schreiben — das ist dort der bitweise XOR-Operator, kein Potenz. \`2 ^ 3\` in Python ergibt $1$ (XOR), nicht $8$.`,
        [
          'Welches Symbol hat Python für Potenz?',
          'Wie unterscheidet Matlab Skalar- und Array-Potenz?',
          '\`**\` Python · \`^\` Matlab Skalar · \`.^\` Matlab elementweise.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[pot-op]
      mc(
        'Was ergibt `3 ** 4` in Python?',
        ['`81`', '`12`', '`64`', '`7`'],
        0,
        `**Ansatz:** \`a ** b\` ist Python-Notation für $a^b$.

**Rechnung:** $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81$.

**Probe:** \`>>> 3 ** 4\` → \`81\`. ✓ Auch über Logarithmen: $\\ln(81) = 4 \\ln(3) \\approx 4 \\cdot 1{,}0986 \\approx 4{,}394$, $e^{4{,}394} \\approx 81$ ✓.

**Typischer Fehler:** \`**\` als Multiplikation lesen ($3 \\cdot 4 = 12$) — typisch, wenn man XOR/Bitoperatoren aus C übernimmt oder \`*\` und \`**\` verwechselt.`,
        [
          'Was bedeutet \`**\` in Python?',
          'Multiplikation oder Potenz?',
          '$3$ vier mal mit sich selbst multipliziert.',
        ],
        {
          '1': '`12` wäre $3 \\cdot 4$ (Multiplikation). \`**\` ist Potenz, nicht Mal.',
          '2': '`64` ist $4^3$, also Basis und Exponent vertauscht. \`a ** b\` heißt $a^b$, nicht $b^a$.',
          '3': '`7` ist $3 + 4$ (Addition). Ganz andere Operation.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 8 · apply-independent · number-input · uses=[pot-op]
      ni(
        'Was ergibt `5 ** 4` in Python?',
        625, 0, '',
        `**Ansatz:** $5^4 = 5 \\cdot 5 \\cdot 5 \\cdot 5$.

**Rechnung:** $5^2 = 25$, $25^2 = 625$. Also $5^4 = 625$.

**Probe:** \`>>> 5 ** 4\` → \`625\`. ✓ Quersumme der Ziffern: $6+2+5 = 13$. Fehlerprobe: $25 \\cdot 25 = 625$ (per Hand: $25 \\cdot 25 = 25 \\cdot (20 + 5) = 500 + 125 = 625$) ✓.

**Typischer Fehler:** $5 \\cdot 4 = 20$ rechnen (Multiplikation statt Potenz) oder $4^5 = 1024$ (Basis und Exponent vertauscht).`,
        [
          'Wieviele Faktoren $5$?',
          'Schreibe als $5^2 \\cdot 5^2$.',
          '$25 \\cdot 25 = 625$.',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[pot-op]
      mc(
        'Ein Studierender schreibt in Python `result = 2 ^ 5` und erwartet `32`, bekommt aber `7`. Was ist passiert?',
        [
          'In Python ist `^` der bitweise XOR-Operator, nicht Potenz: `2 ^ 5` rechnet `010 XOR 101 = 111 = 7`. Korrekt für Potenz: `2 ** 5 = 32`.',
          'Python rundet Potenzen ab.',
          '`^` in Python liefert immer 7.',
          'Der Fehler liegt bei `result` als Variablenname.',
        ],
        0,
        `**Ansatz:** \`^\` und \`**\` sind in Python verschiedene Operatoren — \`^\` bitweises XOR, \`**\` Potenz.

**Rechnung:** Binärdarstellung: $2 = 010_2$, $5 = 101_2$. XOR bit-für-bit: $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $0 \\oplus 1 = 1$ → $111_2 = 7$. Mit \`**\`: $2^5 = 32$.

**Probe:** \`>>> 2 ** 5\` → \`32\` ✓. \`>>> 2 ^ 5\` → \`7\` (XOR). Die beiden sind nur bei sehr speziellen Bit-Mustern gleich, in der Regel verschieden.

**Typischer Fehler:** Matlab-Reflex (\`^\` für Skalar-Potenz) auf Python übertragen. In Matlab funktioniert \`2^5 = 32\`, in Python NICHT.`,
        [
          'Welche Bedeutung hat \`^\` in Python?',
          'Welcher Operator macht in Python Potenzieren?',
          'Matlab-Reflex: in Python ist \`**\` für Potenz.',
        ],
        {
          '1': 'Python rundet keine Potenzen — \`2 ** 5\` ist exakt $32$. Das Ergebnis $7$ kommt vom XOR.',
          '2': '\`^\` liefert nur dann 7, wenn die Bit-Muster genau XOR-7 ergeben — bei anderen Zahlen kommt anderes raus. Es ist ein bitweiser Operator, kein konstanter Rückgabewert.',
          '3': '\`result\` ist ein gültiger Name. Das Problem liegt allein beim Operator.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['pot-op'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[pot-op]
      mc(
        'Was ergibt `(-2) ** 3` in Python?',
        ['`-8`', '`8`', '`6`', '`-6`'],
        0,
        `**Ansatz:** $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2)$. Drei negative Faktoren → Vorzeichen bleibt negativ.

**Rechnung:** $(-2) \\cdot (-2) = 4$, $4 \\cdot (-2) = -8$. Allgemein: bei ungeradem Exponenten bleibt das Vorzeichen, bei geradem wird es positiv: $(-2)^4 = +16$.

**Probe:** \`>>> (-2) ** 3\` → \`-8\` ✓. \`>>> (-2) ** 4\` → \`16\` ✓.

**Typischer Fehler 1:** Klammer weglassen: \`-2 ** 3\` wertet als \`-(2 ** 3) = -8\` — selbes Ergebnis hier, aber bei geradem Exponenten unterschiedlich: \`-2 ** 2\` liefert \`-4\` (nicht $4$), weil Potenz vor unärem Minus bindet. **Typischer Fehler 2:** Vorzeichen vergessen und $8$ schreiben.`,
        [
          'Wieviele negative Faktoren entstehen?',
          'Ungerader Exponent → Vorzeichen?',
          'Drei mal $-2$ → Vorzeichen bleibt negativ.',
        ],
        {
          '1': '`8` wäre $2^3$ ohne Vorzeichen oder $(-2)^4$ mit gerader Potenz. Hier ist Exponent ungerade — Vorzeichen bleibt negativ.',
          '2': '`6` entstünde durch $-2 - 2 - 2$ mit Subtraktion oder durch Multiplikation falsch interpretiert. Potenz heißt aber wiederholte Multiplikation.',
          '3': '`-6` wäre $-(2+2+2)$. Auch falsch — Potenz ist Multiplikation, nicht Addition.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['pot-op'] },
      ),
      // Bonus · apply-independent · number-input · uses=[pot-op]
      ni(
        'Was ergibt `9 ** 0.5` in Python?',
        3, 0.001, '',
        `**Ansatz:** $a^{1/2} = \\sqrt{a}$. Mit \`**\` lassen sich Wurzeln als Potenzen schreiben.

**Rechnung:** $9^{0{,}5} = \\sqrt{9} = 3$.

**Probe:** \`>>> 9 ** 0.5\` → \`3.0\` (float). $3 \\cdot 3 = 9$ ✓.

**Typischer Fehler:** $9 \\cdot 0{,}5 = 4{,}5$ rechnen — das wäre Multiplikation. \`**\` ist Potenz, $9^{0{,}5}$ ist Quadratwurzel.`,
        [
          'Was bedeutet ein Exponent $1/2$?',
          'Schreibe um in Wurzelnotation.',
          '$\\sqrt{9} = ?$',
        ],
        { stage: 'apply-independent', subGoal: 1, uses: ['pot-op'] },
      ),
    ],

    // ── SG 2 — `log-op` — Logische Operatoren ────────────────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[log-op]
      tf(
        'In Python heißen die logischen Operatoren `and`, `or`, `not` (Wörter); in Matlab nutzt man `&&`, `||`, `~` für Skalare.',
        true,
        `**Ansatz:** Python wählt englische Wörter als Operatoren (lesefreundlich), Matlab nutzt Symbole (näher an C/Java).

**Rechnung:** Python: \`if x > 0 and x < 10:\`. Matlab: \`if x > 0 && x < 10\`. Bei Arrays in Matlab elementweise: \`&\`, \`|\`, \`~\`.

**Probe:** Python akzeptiert \`&&\` NICHT — \`if x > 0 && x < 10:\` wirft \`SyntaxError\`. Matlab akzeptiert \`and\` als Funktion (\`and(a, b)\`), aber nicht als Infix-Operator. ✓

**Typischer Fehler:** \`&\` und \`|\` in Python für logische Verknüpfung benutzen — das sind dort BITWEISE Operatoren auf int (z.B. \`5 & 3 = 1\`), nicht logische. Funktioniert für bool zufällig oft, kann aber falsche Ergebnisse liefern bei int-Werten.`,
        [
          'Wörter oder Symbole in Python?',
          'Was schreibt Matlab für skalares "und"?',
          'Python: and/or/not · Matlab: \`&&\`/\`||\`/\`~\`.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[log-op]
      mc(
        'Was ergibt `(5 > 3) and (2 < 1)` in Python?',
        ['`False`', '`True`', '`None`', '`SyntaxError`'],
        0,
        `**Ansatz:** Bei \`A and B\` wird zuerst $A$ ausgewertet, dann $B$. Ergebnis ist nur dann \`True\`, wenn BEIDE wahr sind.

**Rechnung:** $5 > 3$ → True. $2 < 1$ → False. \`True and False\` → False.

**Probe:** Wahrheitstabelle: T ∧ F = F. ✓ Verifikation: \`>>> (5 > 3) and (2 < 1)\` → \`False\`.

**Typischer Fehler:** Nur den ersten Vergleich ansehen ($5 > 3$ ist wahr → Gesamtergebnis True). \`and\` braucht BEIDE Seiten wahr.`,
        [
          'Werte beide Vergleiche einzeln aus.',
          'Was ist die Wahrheitstabelle für AND?',
          'True AND False → ?',
        ],
        {
          '1': 'True würde bedeuten, beide Vergleiche sind wahr. Aber $2 < 1$ ist False.',
          '2': 'None entsteht nicht aus Vergleichen oder Logik — Python liefert immer bool zurück.',
          '3': 'Die Syntax ist gültig (Klammern + and). Kein SyntaxError.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[log-op]
      mc(
        'Was ergibt `not (False or True)` in Python?',
        ['`False`', '`True`', '`0`', '`1`'],
        0,
        `**Ansatz:** Klammern zuerst: \`False or True\`. Dann \`not\` auf das Ergebnis.

**Rechnung:** \`False or True\` → True (denn ein Operand wahr → or wahr). \`not True\` → False.

**Probe:** Negation: \`>>> not True\` → \`False\` ✓. Verifikation: \`>>> not (False or True)\` → \`False\`.

**Typischer Fehler:** \`not\` zuerst auf \`False\` anwenden: \`(not False) or True\` → \`True or True\` → True. Aber \`not\` bindet hier auf die KLAMMER, nicht nur auf \`False\`.`,
        [
          'Klammern zuerst auswerten.',
          'Was ergibt $\\text{False} \\lor \\text{True}$?',
          '$\\lnot \\text{True} = ?$',
        ],
        {
          '1': '`True` würde bedeuten, das or-Ergebnis sei False — aber `False or True` ist True, und `not True` ist False.',
          '2': '`0` ist zwar gleich `False`, aber `not (...)` liefert IMMER bool, nicht int. Python schreibt das als `False`.',
          '3': '`1` würde der Wahrheitswert True entsprechen — wäre nur korrekt, wenn das Gesamtergebnis True wäre. Ist es nicht.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[log-op]
      mc(
        'Ein Studierender schreibt in Python `if x > 0 && x < 10:`. Was passiert?',
        [
          '`SyntaxError` — Python verwendet `and` für logisches UND, nicht `&&`. Korrekt: `if x > 0 and x < 10:`.',
          'Funktioniert: `&&` wird als `and` interpretiert.',
          '`x` muss ein bool sein.',
          '`NameError` — `&&` ist nicht definiert.',
        ],
        0,
        `**Ansatz:** Python's Lexer kennt \`&&\` nicht — er sieht ein einzelnes \`&\` (bitweises UND), erwartet danach einen Ausdruck und stolpert beim zweiten \`&\`.

**Rechnung:** Korrekte Schreibweise:
- Python: \`if x > 0 and x < 10:\` — oder eleganter mit verkettetem Vergleich: \`if 0 < x < 10:\`.
- Matlab: \`if x > 0 && x < 10\`.

**Probe:** Im Python-Interpreter: \`>>> if x > 0 && x < 10:\` → \`SyntaxError: invalid syntax\`. ✓

**Typischer Fehler:** Matlab/C/Java-Reflex auf Python übertragen. Python war eine bewusste Designentscheidung, Wörter statt Symbole zu nutzen.`,
        [
          'Welche Sprache nutzt \`&&\`?',
          'Wie schreibt Python das?',
          'Wort \`and\`, nicht Symbol.',
        ],
        {
          '1': 'Python interpretiert \`&&\` NICHT als \`and\` — es wirft SyntaxError, da der Lexer das Doppel-Symbol nicht kennt.',
          '2': 'Der Typ von \`x\` spielt für die Syntax keine Rolle — der Fehler kommt vor dem Auswerten.',
          '3': 'Python wirft hier SyntaxError beim Parsen, nicht NameError. NameError gäbe es nur, wenn der Parser fertig wäre und der Name nicht definiert wäre.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['log-op'] },
      ),
      // Row 15 · transfer · matching · uses=[log-op]
      matching(
        'Ordne jedem Anwendungsfall die korrekte Schreibweise zu.',
        [
          { left: 'Python — logisches UND zwischen zwei bool-Bedingungen', right: '`a and b`' },
          { left: 'Matlab — UND zwischen zwei skalaren Bedingungen (Kurzschluss)', right: '`a && b`' },
          { left: 'Matlab — elementweises UND zwischen zwei bool-Arrays', right: '`a & b`' },
          { left: 'Python — logisches NICHT', right: '`not a`' },
        ],
        `**Ansatz:** Vier verschiedene Kontexte, vier verschiedene Schreibweisen — gleicher logischer Inhalt, aber Sprache und Datenform entscheiden.

**Rechnung:** Matlab unterscheidet Skalar- und Array-Operatoren: \`&&\` und \`||\` sind nur für Skalare (mit Kurzschluss-Auswertung), \`&\` und \`|\` arbeiten elementweise auf Arrays. Python kennt diese Unterscheidung nicht — \`and\`/\`or\` sind immer skalar mit Kurzschluss; für elementweise auf NumPy-Arrays nutzt man \`&\`/\`|\` (oder \`np.logical_and\`).

**Probe:** Matlab \`>> [1 0 1] & [0 1 1]\` → \`[0 0 1]\` (elementweise). \`>> 1 && 0\` → \`0\` (Skalar). ✓

**Typischer Fehler:** \`&\` in Python für \`and\` benutzen — das ist bitweises UND. Bei int-Werten kann das stille falsche Ergebnisse liefern: \`5 & 3 = 1\`, aber als bool wäre \`bool(5) and bool(3)\` = True.`,
        [
          'Skalar oder Array? Sprache Python oder Matlab?',
          'Wörter (Python) oder Symbole (Matlab)?',
          '\`&&\` Skalar Matlab · \`&\` Array Matlab.',
        ],
        { stage: 'transfer', subGoal: 2, uses: ['log-op'] },
      ),
      // Bonus · recognize · true-false · uses=[log-op]
      tf(
        'Python erlaubt verkettete Vergleiche: `if 0 < x < 10:` ist gültiger Python-Code und entspricht `if (0 < x) and (x < 10):`.',
        true,
        `**Ansatz:** Python ist eine der wenigen Sprachen mit echten Vergleichsketten — die intuitive mathematische Schreibweise funktioniert.

**Rechnung:** \`0 < x < 10\` wird intern als \`(0 < x) and (x < 10)\` ausgewertet, mit dem Vorteil, dass \`x\` nur EINMAL berechnet wird (wichtig bei Funktionsaufrufen).

**Probe:** \`>>> x = 5; 0 < x < 10\` → \`True\`. \`>>> x = 15; 0 < x < 10\` → \`False\`. ✓

**Typischer Fehler:** Glauben, Matlab könne das auch — kann es nicht. Matlab \`if 0 < x < 10\` liest sich als \`((0 < x) < 10)\` (immer True wegen $0$/$1 < 10$) — fast immer ein stiller Bug.`,
        [
          'Funktioniert die mathematische Notation $0 < x < 10$ in Python?',
          'Wie wird sie intern aufgelöst?',
          'Verkette mit \`and\` zwischen den Vergleichen.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['log-op'] },
      ),
    ],

    // ── SG 3 — `float-cmp` — Float-Vergleich mit Toleranz ────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[float-cmp]
      tf(
        'Wegen IEEE-754-Rundungsfehlern liefert `0.1 + 0.2 == 0.3` in Python `False`.',
        true,
        `**Ansatz:** Floats können viele Dezimalbrüche nicht exakt darstellen — $0{,}1$ und $0{,}2$ sind beide unendliche Binärbrüche, gerundet auf 53 Bit.

**Rechnung:** Tatsächlich ist \`0.1 + 0.2\` in Python $0{,}30000000000000004$ (sichtbar mit \`format(0.1 + 0.2, '.17f')\`). Verglichen mit dem float $0{,}3$ (selbst gerundet, aber ANDERS gerundet) ist das nicht gleich.

**Probe:** \`>>> 0.1 + 0.2\` → \`0.30000000000000004\`. \`>>> 0.1 + 0.2 == 0.3\` → \`False\`. ✓ Robuste Lösung: \`abs((0.1 + 0.2) - 0.3) < 1e-9\` → \`True\`.

**Typischer Fehler:** Floats für Geld oder exakte Buchhaltung nutzen. Für solche Fälle ist \`decimal.Decimal\` oder \`fractions.Fraction\` gedacht.`,
        [
          'Können Floats $0{,}1$ exakt darstellen?',
          'Was passiert bei $0{,}1 + 0{,}2$?',
          'Vergleich mit Toleranz statt \`==\`.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[float-cmp]
      mc(
        'Was liefert `(0.1 + 0.2) == 0.3` in Python?',
        ['`False`', '`True`', '`SyntaxError`', '`None`'],
        0,
        `**Ansatz:** Beide Seiten als float darstellbar prüfen. \`0.1\`, \`0.2\` und \`0.3\` sind alle gerundete Binärbrüche.

**Rechnung:** \`0.1 + 0.2\` ergibt $0{,}30000000000000004$ (nach Rundung der Summe). \`0.3\` (alleine) ist $0{,}29999999999999998\\ldots$ (anders gerundet). Beide sind nicht gleich — daher \`False\`.

**Probe:** \`>>> (0.1 + 0.2) - 0.3\` → \`5.55e-17\` (winziger Unterschied). \`>>> abs((0.1 + 0.2) - 0.3) < 1e-9\` → \`True\` (mit Toleranz).

**Typischer Fehler:** Bauchmäßig "$0{,}3 = 0{,}3$, also True" — vergisst, dass Float-Arithmetik und Float-Literale beide Rundungen durchführen, oft auf unterschiedliche Werte.`,
        [
          'Können beide Seiten exakt sein?',
          'Was machen IEEE-754-Rundungen?',
          '\`==\` ist bei Floats unzuverlässig.',
        ],
        {
          '1': 'True würde gelten, wenn Floats $0{,}1$, $0{,}2$ und $0{,}3$ exakt darstellbar wären — sind sie aber nicht.',
          '2': 'Die Syntax ist gültig — Klammern und Vergleichsoperator. Kein Fehler beim Parsen.',
          '3': 'Vergleichsoperatoren liefern in Python immer bool, nicht None.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[float-cmp]
      mc(
        'Welche Zeile prüft zwei float-Werte `a` und `b` ROBUST auf "ungefähr gleich" mit Toleranz $10^{-9}$?',
        [
          '`abs(a - b) < 1e-9`',
          '`a == b`',
          '`int(a) == int(b)`',
          '`a is b`',
        ],
        0,
        `**Ansatz:** Robuster Float-Vergleich nutzt eine Toleranz auf der Differenz, statt direkter Gleichheit.

**Rechnung:** \`abs(a - b) < 1e-9\` liefert True, wenn der Unterschied unter $10^{-9}$ liegt — egal, ob die Floats minimal verschieden gerundet wurden. Standard-Bibliothek: \`math.isclose(a, b, abs_tol=1e-9)\`.

**Probe:** \`a = 0.1 + 0.2; b = 0.3\` → \`abs(a - b) = 5.55e-17\`. Das ist kleiner als $10^{-9}$ → True. ✓

**Typischer Fehler:** Schwellenwert zu klein wählen — z.B. \`< 1e-20\` ist enger als die float-Auflösung selbst und liefert oft False. Faustregel: \`1e-9\` für allgemein, \`1e-6\` bei akkumulierten Rechenfehlern.`,
        [
          'Wie definiert man "ungefähr gleich" mathematisch?',
          'Toleranz auf welcher Größe?',
          'Differenz absolut, dann Schwellwertvergleich.',
        ],
        {
          '1': '\`a == b\` ist genau das, was bei Floats unzuverlässig ist (siehe \`0.1 + 0.2 == 0.3\`).',
          '2': '\`int(a) == int(b)\` schneidet die Nachkommastellen ab und vergleicht ganzen Anteil — verliert Information und unterscheidet $1{,}9$ von $1{,}1$ nicht.',
          '3': '\`a is b\` testet OBJEKT-Identität, nicht Wertgleichheit. Bei Floats fast immer False.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[float-cmp]
      mc(
        'Ein numerischer Algorithmus terminiert nicht, weil `if x == 0.0:` nie True wird — `x` ist nach vielen Iterationen $1 \\cdot 10^{-16}$. Welcher Fix ist korrekt?',
        [
          '`if abs(x) < 1e-9:` — Vergleich mit Toleranz statt exaktem Wert.',
          '`if x = 0.0:` — Zuweisung statt Vergleich.',
          '`if x:` — implizite bool-Konvertierung.',
          '`if int(x) == 0:` — Casten zu int.',
        ],
        0,
        `**Ansatz:** Numerische Algorithmen erreichen aufgrund von Rundungsfehlern nie exakt $0$. Abbruchkriterium braucht eine Toleranz.

**Rechnung:** \`abs(x) < 1e-9\` testet, ob $|x|$ unter der Toleranz liegt — robust gegen Akkumulation kleiner Rundungsfehler. Alternative: \`math.isclose(x, 0.0, abs_tol=1e-9)\`.

**Probe:** Bei $x = 10^{-16}$: \`abs(x) < 1e-9\` → True ✓. Bei $x = 0.5$: \`abs(x) < 1e-9\` → False ✓.

**Typischer Fehler:** Zuweisung \`=\` und Vergleich \`==\` verwechseln. Oder \`if x:\` schreiben, das auch andere falsy-Werte (None, leere Liste) als $0$ behandelt.`,
        [
          'Wann ist ein float "praktisch null"?',
          'Wie definiert man die Schwelle?',
          'Toleranz mit \`abs(x) < eps\`.',
        ],
        {
          '1': '\`if x = 0.0:\` ist syntaktisch ungültig — \`=\` ist Zuweisung, in \`if\` muss ein Ausdruck stehen.',
          '2': '\`if x:\` ist \`True\` für jeden nicht-null-Wert — schließt aber auch \`None\`, leere Listen etc. ein. Hier wollen wir nur Zahlennähe zu null prüfen.',
          '3': '\`int(1e-16)\` ist $0$, also würde der Test False liefern. Aber: bei kleinen positiven Werten wie $0{,}5$ wäre \`int(0.5) == 0\` ebenfalls True — das ist zu lax.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[float-cmp]
      mc(
        'Newton-Verfahren für $f(x) = 0$: warum bricht man bei `abs(f(x)) < 1e-10` ab und nicht bei `f(x) == 0`?',
        [
          'Floats erreichen wegen Rundungsfehlern fast nie exakt $0$ — eine absolute Toleranz akzeptiert "praktisch null" und vermeidet Endlosschleifen.',
          '`==` ist langsamer als `<` bei Floats.',
          '`f(x)` ist immer positiv.',
          'Newton-Verfahren konvergiert nur bei `<`.',
        ],
        0,
        `**Ansatz:** Numerische Verfahren produzieren immer kleine Rundungsfehler. Die Abbruchbedingung muss diese Realität abbilden.

**Rechnung:** Bei jedem Schritt $x_{n+1} = x_n - f(x_n)/f'(x_n)$ gibt es Float-Rundung. Selbst wenn $x^*$ die exakte Wurzel wäre, könnte $f(x^*)$ als $\\pm 10^{-16}$ statt $0$ landen — oder $x_n$ konvergiert um die Wurzel "herum", trifft aber nie exakt.

**Probe:** Beispiel: $f(x) = x^2 - 2$, exakte Wurzel $\\sqrt 2$. Floats können $\\sqrt 2$ nicht exakt darstellen, daher ist $f(\\sqrt 2)$ in Floats $\\approx 4 \\cdot 10^{-16}$ — \`f(x) == 0\` wäre nie True. \`abs(f(x)) < 1e-10\` ✓.

**Typischer Fehler:** Newton ohne Abbruch-Toleranz schreiben — das Verfahren läuft entweder ewig (sehr selten exakt $0$) oder bricht zufällig ab, je nach Start- und Rundungsverhalten.`,
        [
          'Was passiert bei \`f(x) == 0\` in Floats?',
          'Wie nah liegt der iterierte Wert an der Lösung?',
          'Toleranz statt exakter Gleichheit.',
        ],
        {
          '1': 'Performance ist kein Argument — beide Operatoren brauchen ähnlich viel Zeit. Das ist nicht der Grund.',
          '2': '\`f(x)\` kann sehr wohl negativ werden — Newton testet Vorzeichen NICHT, sondern Größe.',
          '3': 'Newton konvergiert (lokal quadratisch) unter Bedingungen — \`<\` vs. \`==\` hat damit nichts zu tun. Es geht um die Repräsentation von $0$ in Floats.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['float-cmp'] },
      ),
      // Bonus · recognize · true-false · uses=[float-cmp]
      tf(
        'Pythons `math.isclose(a, b)` ist die Standard-Funktion für robusten Float-Vergleich; Default-Toleranzen sind `rel_tol=1e-09` und `abs_tol=0.0`.',
        true,
        `**Ansatz:** \`math.isclose(a, b)\` ist seit Python 3.5 in der Standardlib — bessere Wahl als selbstgebauter Vergleich, weil sie sowohl absolute als auch relative Toleranz kombiniert.

**Rechnung:** Default-Verhalten: zwei Floats sind "close", wenn $|a - b| \\le \\max(\\text{rel\\_tol} \\cdot \\max(|a|, |b|),\\ \\text{abs\\_tol})$. Mit \`rel_tol=1e-09\` und \`abs_tol=0.0\` wird die relative Toleranz dominant — der Vergleich skaliert mit der Größe der Werte.

**Probe:** \`>>> import math; math.isclose(0.1 + 0.2, 0.3)\` → \`True\` ✓. Achtung beim Vergleich mit $0$: \`math.isclose(1e-12, 0)\` → \`False\` (relative Toleranz greift nicht bei $0$). Workaround: \`math.isclose(a, 0, abs_tol=1e-9)\`.

**Typischer Fehler:** Beim Vergleich gegen exakt $0$ \`math.isclose(x, 0)\` ohne \`abs_tol\` — das schlägt fehl, weil $0$ keine relative Toleranz hat.`,
        [
          'Welches Modul stellt \`isclose\` bereit?',
          'Welche zwei Toleranzen kombiniert die Funktion?',
          'Default: rel_tol=1e-9, abs_tol=0.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['float-cmp'] },
      ),
    ],

    // ── SG 4 — `bool-int` — bool ist Subtyp von int ─────────────────────
    4: [
      // Row 21 · recognize · true-false · uses=[bool-int]
      tf(
        'In Python sind `True == 1` und `False == 0` jeweils `True`, weil `bool` ein Subtyp von `int` ist.',
        true,
        `**Ansatz:** Python's Klassen-Hierarchie: \`bool\` erbt von \`int\`. Vergleiche und Arithmetik nutzen die int-Werte $1$ (für \`True\`) und $0$ (für \`False\`).

**Rechnung:** \`isinstance(True, int)\` → True (Subtyp-Beziehung). Daher \`True == 1\` → True und \`False == 0\` → True. Konsequenz: \`True + 1 == 2\`, \`False * 5 == 0\`, \`sum([True, False, True]) == 2\`.

**Probe:** \`>>> True == 1\` → \`True\`. \`>>> False == 0\` → \`True\`. \`>>> 1 + True\` → \`2\`. ✓

**Typischer Fehler:** Glauben, \`True == 1\` sei ein Tippfehler oder undefiniert — ist tatsächlich gewollter Sprachdesign-Punkt (genauso in C/C++/Java).`,
        [
          'Welche Beziehung haben \`bool\` und \`int\` in Python?',
          'Welche int-Werte stehen für \`True\` / \`False\`?',
          '\`True\` ↔ $1$, \`False\` ↔ $0$.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 22 · apply-guided · multiple-choice · uses=[bool-int]
      mc(
        'Was ergibt `True + True` in Python?',
        ['`2`', '`True`', '`TypeError`', '`"TrueTrue"`'],
        0,
        `**Ansatz:** \`bool\` ist Subtyp von \`int\` mit \`True == 1\`. Bei \`+\` werden bool-Werte zu int promoviert.

**Rechnung:** \`True + True\` → $1 + 1 = 2$ (int). $\\text{type}(\\text{True} + \\text{True}) = \\text{int}$.

**Probe:** \`>>> True + True\` → \`2\`. \`>>> type(True + True)\` → \`<class 'int'>\`. ✓

**Typischer Fehler:** \`True + True\` als logische ODER-Operation \`True or True == True\` lesen — das wäre korrekt für \`or\`, aber \`+\` macht Arithmetik, kein Logik.`,
        [
          'Welche Operation ist \`+\`?',
          'Welche int-Werte haben \`True\`?',
          '$1 + 1 = ?$',
        ],
        {
          '1': 'True würde der Logik \`True or True\` entsprechen. Hier steht aber arithmetisches \`+\`, nicht logisches \`or\`.',
          '2': 'TypeError gäbe es bei inkompatiblen Typen — \`bool\` und \`bool\` sind beide int-Subtypen, also kompatibel.',
          '3': '\`"TrueTrue"\` wäre das Ergebnis bei String-Konkatenation \`"True" + "True"\`. \`True\` ohne Quotes ist aber bool, kein String.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 23 · apply-independent · multiple-choice · uses=[bool-int]
      mc(
        'Was ergibt `sum([True, False, True, True, False])` in Python?',
        ['`3`', '`5`', '`2`', '`TypeError`'],
        0,
        `**Ansatz:** \`sum\` addiert alle Listenelemente. Da \`bool\` Subtyp von \`int\` ist, summieren sich \`True\` zu $1$ und \`False\` zu $0$.

**Rechnung:** $1 + 0 + 1 + 1 + 0 = 3$. Drei \`True\`-Einträge → Summe $3$.

**Probe:** \`>>> sum([True, False, True, True, False])\` → \`3\`. ✓ Diese Idee ist die Standard-Methode, um Bedingungen zu zählen: \`sum(x > 0 for x in werte)\` zählt positive Werte.

**Typischer Fehler:** $5$ als "Anzahl Elemente" angeben (Listenlänge \`len(...)\`) — \`sum\` summiert WERTE, nicht Elemente. Bei [True, True, True] wäre \`sum\` = 3 = \`len\`, aber bei [False, False] ist \`sum\` = 0 ≠ \`len\` = 2.`,
        [
          'Was machen \`bool\`-Werte bei \`sum()\`?',
          'Wieviele \`True\` sind in der Liste?',
          'Drei mal $1$, zwei mal $0$.',
        ],
        {
          '1': '$5$ ist die LÄNGE der Liste (\`len\`), nicht die SUMME. \`sum\` summiert Werte.',
          '2': '$2$ wäre die Anzahl \`False\` — die werden aber als $0$ gezählt, nicht subtrahiert.',
          '3': '\`sum\` akzeptiert bool-Listen problemlos, weil \`bool\` Subtyp von \`int\` ist. Kein TypeError.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 24 · error-analysis · multiple-choice · uses=[bool-int]
      mc(
        'Ein Lerner glaubt, `if 0:` und `if False:` verhielten sich unterschiedlich. Wie ist die korrekte Einschätzung?',
        [
          'Beide Bedingungen werden NICHT ausgeführt — `0` und `False` sind in Python "falsy" und gleichwertig, weil `False == 0` und `bool` Subtyp von `int` ist.',
          '`if 0:` führt den Block aus, `if False:` nicht.',
          '`if 0:` wirft einen TypeError.',
          'Beide führen den Block IMMER aus.',
        ],
        0,
        `**Ansatz:** Python's "Truthiness"-Regel: bei \`if\` wird der Wert in bool konvertiert. \`bool(0)\` → False, \`bool(False)\` → False. Beide gleichwertig.

**Rechnung:** Wahrheitstabelle der "falsy"-Werte: \`0\`, \`0.0\`, \`False\`, \`None\`, leerer String \`""\`, leere Liste \`[]\`, leeres Dict \`{}\`. Alles andere ist truthy.

**Probe:** \`>>> if 0: print('drin')\` → kein Output. \`>>> if False: print('drin')\` → kein Output. ✓ \`>>> bool(0) == bool(False)\` → \`True\`.

**Typischer Fehler:** Aus Java/C den Reflex mitnehmen, dass \`int\` und \`bool\` ganz verschiedene Typen seien und 0 etwas anderes als False sei. In Python gibt es eine durchdachte Konvertierung.`,
        [
          'Welche Werte sind in Python "falsy"?',
          'Wie konvertiert Python \`int\` zu \`bool\`?',
          '$0 \\equiv$ False, alles andere $\\equiv$ True.',
        ],
        {
          '1': '\`if 0:\` führt den Block NICHT aus — \`0\` ist falsy. Würde nur stimmen, wenn \`0\` truthy wäre (ist es nicht).',
          '2': 'TypeError gäbe es bei inkompatiblen Typen — \`int\` ist als bool-Konvertierung wohldefiniert.',
          '3': '\`if False:\` führt definitiv NICHT aus. Beide Blöcke werden übersprungen, nicht ausgeführt.',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['bool-int'] },
      ),
      // Row 25 · transfer · multiple-choice · uses=[bool-int]
      mc(
        'Wie viele positive Werte enthält die Liste `werte = [3, -1, 5, -2, 7]`? Welche Python-Zeile zählt das mit dem bool-int-Trick?',
        [
          '`sum(x > 0 for x in werte)`',
          '`len(werte)`',
          '`max(werte)`',
          '`werte.count(True)`',
        ],
        0,
        `**Ansatz:** Jeder Vergleich \`x > 0\` liefert \`True\` (1) oder \`False\` (0). \`sum\` über diese bool-Werte zählt die Treffer.

**Rechnung:** Für \`werte = [3, -1, 5, -2, 7]\`: \`x > 0\` liefert \`[True, False, True, False, True]\`. \`sum\` = $1+0+1+0+1 = 3$.

**Probe:** \`>>> sum(x > 0 for x in [3, -1, 5, -2, 7])\` → \`3\` ✓. Direkt überprüfbar: 3, 5, 7 sind positiv → 3 Werte.

**Typischer Fehler:** Schleife mit Zähler schreiben — funktioniert, aber das pythonische Idiom ist \`sum(condition for x in iterable)\`. Sehr lesbar, sehr knapp.`,
        [
          'Was liefert \`x > 0\` als Wert?',
          'Wie zählt man \`True\` mit arithmetischem \`sum\`?',
          'Generator-Expression mit Vergleich, dann \`sum\`.',
        ],
        {
          '1': '\`len(werte)\` ist 5 — Anzahl ALLER Elemente, nicht nur der positiven.',
          '2': '\`max(werte)\` ist 7 — der größte Wert, nicht die Anzahl.',
          '3': '\`werte.count(True)\` zählt, wie oft \`True\` (oder $1$, was bool-äquivalent ist) als Wert in der Liste vorkommt — wäre $0$, da keine \`True\`-Einträge in [3,-1,5,-2,7] sind.',
        },
        { stage: 'transfer', subGoal: 4, uses: ['bool-int'] },
      ),
      // Bonus · recognize · true-false · uses=[bool-int]
      tf(
        '`type(True) == type(1)` liefert in Python `False`, weil `type()` die KONKRETE Klasse zurückgibt — `bool` ist zwar Subtyp von `int`, aber eine andere Klasse.',
        true,
        `**Ansatz:** \`==\` (Wertgleichheit) und \`type()\` (Klassengleichheit) prüfen verschiedene Dinge.

**Rechnung:** \`type(True)\` → \`<class 'bool'>\`. \`type(1)\` → \`<class 'int'>\`. \`<class 'bool'>\` $\\neq$ \`<class 'int'>\` → False.

**Probe:** \`>>> type(True) == type(1)\` → \`False\`. \`>>> isinstance(True, int)\` → \`True\` (Subtyp-Beziehung). Beide Aussagen sind konsistent: bool ist Subtyp, aber eine eigenständige Klasse. ✓

**Typischer Fehler:** Aus \`True == 1\` (Wertgleichheit) auf \`type(True) == type(1)\` (Klassengleichheit) schließen. Das verwechselt zwei verschiedene Vergleichs-Ebenen.`,
        [
          'Was vergleicht \`==\` zwischen Klassen?',
          'Liefert \`type()\` Basisklasse oder konkrete Klasse?',
          'bool ist eigene Klasse, auch als int-Subtyp.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['bool-int'] },
      ),
    ],
  },



  // ───────────────────────────────────────────────────────────────────────
  // py-1-5 — Funktionen definieren  (5 subGoals)
  // 25 Aufgaben mit pedagogy-Tags · alle 25 Matrix-Zeilen.
  // ───────────────────────────────────────────────────────────────────────
  'py-1-5': {
    // ── SG 0 — `def-syntax` — `def name(param):` vs Matlab `function` ────
    0: [
      // Row 1 · recognize · true-false · uses=[def-syntax]
      tf(
        'Eine Python-Funktion wird mit `def name(param):` definiert; der Body ist eingerückt; ein abschließendes `end` gibt es nicht (im Gegensatz zu Matlab).',
        true,
        `**Ansatz:** Python folgt der Block-Syntax mit Doppelpunkt + Einrückung — auch für Funktionsdefinitionen. Matlab nutzt \`function ... end\`.

**Rechnung:** Minimal-Beispiel:
\`\`\`
def quadrat(x):
    return x ** 2
\`\`\`
Drei Pflicht-Elemente: \`def\`, Funktions-Header mit \`:\`, eingerückter Body. Kein \`end\` am Schluss.

**Probe:** \`>>> def f(x): return x*2\\n>>> f(5)\` → \`10\` ✓. Matlab-Pendant in \`f.m\`: \`function y = f(x)\\n    y = x*2;\\nend\`.

**Typischer Fehler:** Matlab-Stil mit \`end\` übernehmen — Python erkennt \`end\` nicht als Block-Marker. Oder Doppelpunkt vergessen → SyntaxError.`,
        [
          'Welches Schlüsselwort startet eine Python-Funktion?',
          'Was steht am Ende der \`def\`-Zeile?',
          'Doppelpunkt + Einrückung, kein \`end\`.',
        ],
        { stage: 'recognize', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 2 · apply-guided · multiple-choice · uses=[def-syntax]
      mc(
        'Welche Python-Zeile definiert KORREKT eine Funktion `quadrat`, die einen Parameter `x` nimmt?',
        ['`def quadrat(x):`', '`function quadrat(x):`', '`def quadrat: x`', '`quadrat(x) = ...`'],
        0,
        `**Ansatz:** Python-Funktions-Header: \`def\` + Name + Parameter in \`()\` + Doppelpunkt.

**Rechnung:** Korrekt: \`def quadrat(x):\` mit anschließend eingerücktem Body (z.B. \`return x ** 2\`).

**Probe:** \`>>> def quadrat(x):\\n...     return x*x\\n>>> quadrat(3)\` → \`9\` ✓.

**Typischer Fehler:** Matlab-/JavaScript-\`function\` statt \`def\` schreiben — Python kennt \`function\` nicht als Schlüsselwort. Oder Klammern um den Parameter weglassen.`,
        [
          'Mit welchem Schlüsselwort beginnt die Python-Funktion?',
          'Wo stehen die Parameter?',
          '\`def Name(...)\:\`.',
        ],
        {
          '1': '\`function\` ist Matlab/JavaScript-Stil. Python nutzt \`def\`.',
          '2': 'Hier fehlen Klammern um den Parameter — \`def quadrat: x\` ist syntaktisch ungültig.',
          '3': 'Math-Stil \`f(x) = ...\` ist nicht direkt Python — funktioniert nicht.',
        },
        { stage: 'apply-guided', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 3 · apply-independent · multiple-choice · uses=[def-syntax]
      mc(
        'Was passiert beim Ausführen?\n```\ndef gruss(name):\n    print(f"Hallo {name}")\n\ngruss("Theo")\n```',
        ['Druckt `Hallo Theo`', 'Druckt nichts (nur definiert)', '`TypeError`', 'Druckt `{name}`'],
        0,
        `**Ansatz:** Zwei Schritte — erst die Funktion definieren, dann aufrufen. Beim Aufruf wird der Body mit dem aktuellen Argument ausgeführt.

**Rechnung:** \`gruss("Theo")\` setzt \`name = "Theo"\` und führt \`print(f"Hallo {name}")\` aus. F-String setzt \`{name}\` ein → \`Hallo Theo\`.

**Probe:** \`>>> def gruss(name): print(f"Hallo {name}")\\n>>> gruss("Theo")\` → \`Hallo Theo\` ✓.

**Typischer Fehler:** Glauben, die \`def\`-Zeile allein druckt etwas. Sie definiert nur — der Aufruf ist nötig. Oder den F-String-Mechanismus nicht kennen und denken, \`{name}\` bleibt als Literal stehen.`,
        [
          'Was passiert bei \`def ...\` allein?',
          'Was bewirkt der Aufruf \`gruss("Theo")\`?',
          'F-String setzt Variablen ein.',
        ],
        {
          '1': 'Die \`def\`-Zeile allein druckt nichts. Aber \`gruss("Theo")\` IST ein Aufruf — also wird gedruckt.',
          '2': '\`gruss\` akzeptiert ein String-Argument. Kein Typenkonflikt.',
          '3': 'F-Strings (\`f"..."\`) ersetzen \`{name}\` durch den Wert von \`name\`. Würde stehen bleiben, wenn das \`f\`-Präfix fehlte.',
        },
        { stage: 'apply-independent', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 4 · error-analysis · multiple-choice · uses=[def-syntax]
      mc(
        'Ein Lerner schreibt:\n```\ndef quadrat(x)\n    return x ** 2\n```\nWelchen Fehler meldet Python?',
        [
          '`SyntaxError` — der Doppelpunkt am Ende der `def`-Zeile fehlt.',
          'Funktioniert.',
          '`IndentationError`',
          '`NameError`',
        ],
        0,
        `**Ansatz:** Jede Block-Header-Zeile in Python (def/if/for/while) braucht ein abschließendes \`:\`.

**Rechnung:** Korrekt: \`def quadrat(x):\\n    return x ** 2\`. Ohne \`:\` → \`SyntaxError: expected ':'\`.

**Probe:** Test im REPL: \`>>> def quadrat(x)\` → \`SyntaxError\` ✓.

**Typischer Fehler:** Matlab-/JavaScript-Stil ohne Doppelpunkt übernehmen.`,
        [
          'Welches Symbol fehlt am Ende der \`def\`-Zeile?',
          'Doppelpunkt nach dem Header.',
          '\`def name(x)\`**:** ← Pflicht.',
        ],
        {
          '1': 'Funktioniert NICHT — fehlender Doppelpunkt ist SyntaxError.',
          '2': 'IndentationError tritt auf bei falscher Einrückung — hier scheitert das Parsen schon an der \`def\`-Zeile.',
          '3': 'NameError wäre Laufzeit. Hier scheitert schon das Parsen.',
        },
        { stage: 'error-analysis', subGoal: 0, uses: ['def-syntax'] },
      ),
      // Row 5 · transfer · multiple-choice · uses=[def-syntax]
      mc(
        'Du übersetzt diese Matlab-Funktion nach Python:\n```\nfunction y = doppel(x)\n    y = 2 * x;\nend\n```\nWelche Python-Form ist KORREKT?',
        [
          '`def doppel(x):`<br>`    return 2 * x`',
          '`def doppel(x) -> y:`<br>`    y = 2 * x`',
          '`function doppel(x):`<br>`    return 2 * x`',
          '`def doppel(x):`<br>`    y = 2 * x`<br>`end`',
        ],
        0,
        `**Ansatz:** Vier Migrationsregeln Matlab → Python für Funktionen: Schlüsselwort \`function\` → \`def\`, kein \`end\`, expliziter \`return\` statt Zuweisung an Output, Doppelpunkt + Einrückung.

**Rechnung:**
- \`function\` → \`def\` ✓
- Output-Variable \`y\` aus Header → \`return\`-Statement ✓
- \`end\` weg ✓
- \`:\` an Header + Body eingerückt ✓

**Probe:** \`>>> def doppel(x): return 2 * x\\n>>> doppel(7)\` → \`14\` ✓.

**Typischer Fehler:** \`end\` in Python schreiben — wird zur Laufzeit entweder als undefinierter Name (NameError) oder still ignoriert, wenn \`end\` im Scope existiert.`,
        [
          'Was wird aus \`function\` in Python?',
          'Wo kommt der Rückgabewert hin?',
          '\`def\`, \`return\`, kein \`end\`, kein Header-Output-Name.',
        ],
        {
          '1': 'Type-Annotation \`-> y\` mit Variablennamen ist ungültig — Python nutzt Typen wie \`-> int\`, nicht Variablen. Plus: \`y = ...\` ohne \`return\` gibt None zurück.',
          '2': '\`function\` ist nicht Pythons Schlüsselwort. Heißt \`def\`.',
          '3': '\`end\` ist Matlab-Syntax. In Python überflüssig (und potenziell NameError).',
        },
        { stage: 'transfer', subGoal: 0, uses: ['def-syntax'] },
      ),
    ],

    // ── SG 1 — `rueckgabe` — Python `return`, Matlab Output-Variable ─────
    1: [
      // Row 6 · recognize · true-false · uses=[rueckgabe]
      tf(
        'Eine Python-Funktion gibt einen Wert mit `return` zurück; eine Matlab-Funktion weist den Wert an die im Header deklarierte Output-Variable zu (z.B. `function y = f(x)` plus `y = ...`).',
        true,
        `**Ansatz:** Beide Sprachen lösen das gleiche Problem unterschiedlich. Python: Rückgabe per Schlüsselwort. Matlab: Rückgabe per Zuweisung an benannte Output-Variable.

**Rechnung:**

Python:
\`\`\`
def f(x):
    return x ** 2
\`\`\`

Matlab:
\`\`\`
function y = f(x)
    y = x ^ 2;
end
\`\`\`

**Probe:** Beide liefern \`f(3) = 9\`. ✓

**Typischer Fehler:** Matlab-Stil in Python: \`def f(x): y = x**2\` (kein \`return\`!) — die Funktion liefert dann \`None\`, nicht den berechneten Wert.`,
        [
          'Welches Schlüsselwort gibt in Python einen Wert zurück?',
          'Wie macht Matlab das?',
          'Python: \`return\`, Matlab: Zuweisung an Header-Variable.',
        ],
        { stage: 'recognize', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 7 · apply-guided · multiple-choice · uses=[rueckgabe]
      mc(
        'Was gibt diese Funktion zurück?\n```\ndef add(a, b):\n    return a + b\n\nadd(3, 4)\n```',
        ['`7`', '`(3, 4)`', '`"34"`', '`None`'],
        0,
        `**Ansatz:** Die Funktion addiert die Argumente und gibt das Ergebnis zurück.

**Rechnung:** \`add(3, 4)\` setzt \`a = 3\`, \`b = 4\`. Body: \`return a + b\` → \`return 3 + 4\` → \`return 7\`.

**Probe:** \`>>> def add(a, b): return a + b\\n>>> add(3, 4)\` → \`7\` ✓.

**Typischer Fehler:** Annehmen, die Funktion gebe ein Tupel \`(3, 4)\` zurück. Komma im \`return\`-Statement würde das tun, hier aber explizit \`a + b\` (eine Zahl). Oder mit String-Konkatenation verwechseln (\`"34"\`) — geht nur, wenn Operanden Strings wären.`,
        [
          'Was tut der \`+\`-Operator hier?',
          'Sind die Operanden Zahlen oder Strings?',
          '$3 + 4 = ?$',
        ],
        {
          '1': '\`(3, 4)\` wäre die Eingabe als Tupel — \`return a + b\` liefert aber den ADDITIVEN Wert, nicht das Tupel.',
          '2': '\`"34"\` käme aus String-Konkatenation. \`a\` und \`b\` sind hier Zahlen, nicht Strings.',
          '3': 'Die Funktion HAT ein \`return\` — gibt also nicht \`None\` zurück.',
        },
        { stage: 'apply-guided', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 8 · apply-independent · multiple-choice · uses=[rueckgabe]
      mc(
        'Was gibt eine Python-Funktion OHNE expliziten `return`-Befehl zurück?',
        ['`None`', '`0`', '`TypeError` beim Aufruf', 'Den Wert des letzten Statements'],
        0,
        `**Ansatz:** Python hat einen impliziten Default-Rückgabewert — und das ist NICHT der letzte Ausdruck (anders als in Ruby/Lisp).

**Rechnung:** \`def f(): pass\\nresult = f()\\nprint(result)\` → \`None\`.

**Probe:** \`>>> def f(x): x*2\\n>>> print(f(5))\` → \`None\` ✓ (der Wert \`10\` wird berechnet, aber nicht zurückgegeben).

**Typischer Fehler:** Aus Ruby/Lisp/CoffeeScript kommen, wo der letzte Ausdruck implizit zurückgegeben wird. Python verlangt explizites \`return\`.`,
        [
          'Was ist der Python-Default ohne \`return\`?',
          'Liefert Python implizit den letzten Wert?',
          'Ohne \`return\` → \`None\`, immer.',
        ],
        {
          '1': '\`0\` wäre der Java-/C-Default für \`int\`. Python hat \`None\` für "nichts".',
          '2': 'TypeError gibt es nicht beim Aufruf einer Funktion ohne \`return\` — sie liefert einfach \`None\`.',
          '3': 'Python ist NICHT Ruby/Lisp — der letzte Wert wird NICHT implizit zurückgegeben. \`return\` muss explizit sein.',
        },
        { stage: 'apply-independent', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 9 · error-analysis · multiple-choice · uses=[rueckgabe]
      mc(
        'Ein Lerner schreibt:\n```\ndef quadrat(x):\n    x ** 2\n\nresult = quadrat(5)\nprint(result)\n```\nWas wird gedruckt?',
        [
          '`None` — `return` fehlt; `x ** 2` wird zwar berechnet, aber nicht zurückgegeben.',
          '`25`',
          'nichts',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** Ohne explizites \`return\` liefert Python \`None\`. Der Lerner-Fehler: das \`return\`-Schlüsselwort vergessen.

**Rechnung:** Body \`x ** 2\` ist ein Ausdruck, der berechnet, aber nicht zurückgegeben wird (kein Side Effect). \`quadrat(5)\` liefert \`None\`. \`print(None)\` druckt \`None\`.

**Probe:** Korrektur: \`def quadrat(x): return x ** 2\`. Dann gibt \`quadrat(5)\` → \`25\` ✓.

**Typischer Fehler:** Den Wert berechnen, aber nicht returnen — sehr häufig bei Anfängern. Plus: \`print(None)\` druckt das Wort \`None\` (keine leere Ausgabe).`,
        [
          'Wo fehlt das Schlüsselwort \`return\`?',
          'Was passiert mit dem Wert von \`x ** 2\`?',
          'Berechnet, nicht zurückgegeben → \`None\`.',
        ],
        {
          '1': '\`25\` wäre die Antwort, wenn \`return\` davor stünde. Tut es nicht.',
          '2': '\`print(None)\` druckt das Wort "None" — also nicht "nichts".',
          '3': 'Kein TypeError — die Berechnung läuft, der Wert wird nur nicht zurückgegeben.',
        },
        { stage: 'error-analysis', subGoal: 1, uses: ['rueckgabe'] },
      ),
      // Row 10 · transfer · multiple-choice · uses=[rueckgabe]
      mc(
        'Eine Python-Funktion soll SUMME und DIFFERENZ zweier Zahlen zurückgeben, sodass der Aufruf `s, d = f(a, b)` direkt entpackt werden kann. Welche Lösung ist KORREKT?',
        [
          '`def f(a, b):`<br>`    return a+b, a-b`',
          '`def f(a, b):`<br>`    print(a+b, a-b)`',
          '`def f(a, b):`<br>`    a+b, a-b`',
          '`def f(a, b):`<br>`    return a+b`<br>`    return a-b`',
        ],
        0,
        `**Ansatz:** \`return a, b\` packt zwei Werte in ein Tupel. Auf der Aufrufseite kann das Tupel mit \`x, y = f(...)\` entpackt werden.

**Rechnung:** \`return a+b, a-b\` → Tupel \`(a+b, a-b)\`. Der Aufruf \`s, d = f(3, 1)\` setzt \`s = 4\`, \`d = 2\`.

**Probe:** \`>>> def f(a, b): return a+b, a-b\\n>>> s, d = f(10, 3)\\n>>> (s, d)\` → \`(13, 7)\` ✓.

**Typischer Fehler:** Zwei separate \`return\`-Statements schreiben — Python verlässt die Funktion beim ERSTEN \`return\`, das zweite wird nie ausgeführt. Oder \`print\` statt \`return\` — druckt, aber gibt \`None\` zurück.`,
        [
          'Was bedeutet \`return a, b\`?',
          'Wo wird der zweite Wert verarbeitet?',
          'Komma → Tupel, eine Zeile.',
        ],
        {
          '1': '\`print\` druckt zur Konsole, gibt aber \`None\` zurück. \`s, d = f(...)\` → \`s, d = None\` → ValueError beim Entpacken.',
          '2': 'Ohne \`return\` werden die berechneten Werte verworfen. Funktion liefert \`None\`.',
          '3': 'Erstes \`return\` verlässt die Funktion sofort — das zweite \`return a-b\` wird nie erreicht.',
        },
        { stage: 'transfer', subGoal: 1, uses: ['rueckgabe'] },
      ),
    ],

    // ── SG 2 — `default-par` — Default-Parameter ────────────────────────
    2: [
      // Row 11 · recognize · true-false · uses=[default-par]
      tf(
        'Default-Parameter erlauben es, eine Python-Funktion auch ohne dieses Argument aufzurufen — der Standardwert wird in der Signatur mit `=` angegeben (z.B. `def f(x, y=0):`).',
        true,
        `**Ansatz:** Default-Parameter machen Argumente OPTIONAL. Wird das Argument beim Aufruf weggelassen, springt der Standardwert ein.

**Rechnung:** \`def f(x, y=0): return x + y\`. Aufruf \`f(5)\` → $5 + 0 = 5$. Aufruf \`f(5, 3)\` → $5 + 3 = 8$.

**Probe:** \`>>> def f(x, y=0): return x + y\\n>>> f(5)\` → \`5\`. \`>>> f(5, 3)\` → \`8\`. ✓

**Typischer Fehler:** Defaults vor Pflicht-Parameter setzen (\`def f(x=0, y):\`) → \`SyntaxError: non-default argument follows default argument\`. Defaults müssen IMMER hinten stehen.`,
        [
          'Was bewirkt \`y=0\` im Header?',
          'Was passiert, wenn \`y\` weggelassen wird?',
          '\`y\` ist optional — Default greift.',
        ],
        { stage: 'recognize', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 12 · apply-guided · multiple-choice · uses=[default-par]
      mc(
        'Was liefert `power(3)` bei dieser Funktion?\n```\ndef power(base, exp=2):\n    return base ** exp\n```',
        ['`9`', '`3`', '`1`', '`TypeError`'],
        0,
        `**Ansatz:** Default \`exp=2\` greift, weil der Aufruf nur \`base\` angibt.

**Rechnung:** \`power(3)\` → \`base = 3\`, \`exp = 2\` (default). Body: \`return 3 ** 2\` → \`9\`.

**Probe:** \`>>> power(3)\` → \`9\` ✓. Mit explizitem zweiten Argument: \`power(3, 4)\` → \`81\`.

**Typischer Fehler:** Annehmen, der Aufruf ohne zweites Argument wirft \`TypeError\` — Default-Parameter machen das Argument optional.`,
        [
          'Was ist der Default-Wert von \`exp\`?',
          'Welche Operation führt \`return base ** exp\` aus?',
          '$3^2 = ?$',
        ],
        {
          '1': '\`3\` wäre nur, wenn Body z.B. \`return base * 1\` wäre. Hier steht aber \`** exp\` mit \`exp = 2\`.',
          '2': '\`1\` wäre $3^0$ (exp=0). Default ist aber 2.',
          '3': 'Kein TypeError — Default-Parameter erlauben den Aufruf ohne zweites Argument.',
        },
        { stage: 'apply-guided', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 13 · apply-independent · multiple-choice · uses=[default-par]
      mc(
        'Was liefert `greeting("Theo", "Hi")`?\n```\ndef greeting(name, msg="Hallo"):\n    return f"{msg}, {name}!"\n```',
        ['`"Hi, Theo!"`', '`"Hallo, Theo!"`', '`"Hi, Hallo!"`', '`TypeError`'],
        0,
        `**Ansatz:** Wird ein Argument explizit übergeben, überschreibt es den Default. Reihenfolge zählt: erstes Argument → erster Parameter (\`name\`), zweites → zweiter (\`msg\`).

**Rechnung:** \`greeting("Theo", "Hi")\` → \`name = "Theo"\`, \`msg = "Hi"\` (überschreibt Default "Hallo"). Body: \`return f"Hi, Theo!"\`.

**Probe:** \`>>> greeting("Theo", "Hi")\` → \`'Hi, Theo!'\` ✓. Mit Default: \`greeting("Theo")\` → \`'Hallo, Theo!'\`.

**Typischer Fehler:** Glauben, Default kann nicht überschrieben werden. Default ist NUR der Fallback, wenn nichts angegeben wird.`,
        [
          'Was passiert, wenn \`msg\` explizit übergeben wird?',
          'Default oder explizites Argument — wer gewinnt?',
          'Explizites Argument überschreibt Default.',
        ],
        {
          '1': '"Hallo" wäre der DEFAULT — wird hier aber durch "Hi" überschrieben.',
          '2': 'Beide Werte sind nicht im selben Slot. \`msg\` hat \`"Hi"\`, nicht beides.',
          '3': 'Kein TypeError — beide Argumente sind valide.',
        },
        { stage: 'apply-independent', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 14 · error-analysis · multiple-choice · uses=[default-par]
      mc(
        'Ein Lerner schreibt:\n```\ndef f(x=0, y):\n    return x + y\n```\nWas meldet Python?',
        [
          '`SyntaxError: non-default argument follows default argument` — Default-Parameter müssen NACH den Pflicht-Parametern stehen.',
          'Funktioniert.',
          '`TypeError` beim Aufruf.',
          '`IndentationError`',
        ],
        0,
        `**Ansatz:** Python verlangt: Pflicht-Parameter zuerst, dann Defaults. Sonst ist beim Aufruf nicht eindeutig, welches Argument welchen Slot füllt.

**Rechnung:** \`def f(x=0, y):\` ist syntaktisch ungültig. Korrekt umsortiert: \`def f(y, x=0):\` — \`y\` ist Pflicht, \`x\` optional.

**Probe:** \`>>> def f(x=0, y): return x + y\` → \`SyntaxError: non-default argument follows default argument\` ✓.

**Typischer Fehler:** Reihenfolge willkürlich wählen, ohne die Pflicht/Optional-Trennung zu beachten.`,
        [
          'Welche Reihenfolge verlangt Python?',
          'Können Pflicht-Parameter NACH Default-Parametern stehen?',
          'Pflicht zuerst, Default dahinter.',
        ],
        {
          '1': 'Funktioniert NICHT — SyntaxError schon beim Parsen.',
          '2': 'Der Fehler entsteht schon BEIM PARSEN, nicht erst beim Aufruf.',
          '3': 'IndentationError gilt für falsche Einrückung — das Problem hier ist die Parameter-Reihenfolge.',
        },
        { stage: 'error-analysis', subGoal: 2, uses: ['default-par'] },
      ),
      // Row 15 · transfer · multiple-choice · uses=[default-par]
      mc(
        'Was wird gedruckt?\n```\ndef append_value(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(append_value(1))\nprint(append_value(2))\n```',
        [
          '`[1]` und `[1, 2]` (mutable Default wird zwischen Aufrufen geteilt).',
          '`[1]` und `[2]`',
          '`[1]` und `[1]`',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** Eine berühmte Python-Falle: mutable Defaults (Listen, Dicts, Sets) werden EINMAL beim Definieren erzeugt und zwischen Aufrufen GETEILT.

**Rechnung:** Aufruf 1: \`lst\` ist die einzige Default-Liste \`[]\`. Append \`1\` → \`[1]\`. Aufruf 2: \`lst\` ist DIESELBE Liste \`[1]\`. Append \`2\` → \`[1, 2]\`. Output: \`[1]\` dann \`[1, 2]\`.

**Probe:** Sichere Variante: \`def append_value(x, lst=None):\\n    if lst is None: lst = []\\n    lst.append(x)\\n    return lst\`. Erzeugt jedes Mal eine neue Liste.

**Typischer Fehler:** Annehmen, der Default \`[]\` werde bei JEDEM Aufruf neu evaluiert. Tut er NICHT — nur einmal beim Definieren.`,
        [
          'Wann wird ein Default-Wert ausgewertet?',
          'Wird die Liste pro Aufruf neu erzeugt?',
          'Mutable Default → einmalige Liste, geteilt zwischen Aufrufen.',
        ],
        {
          '1': 'Würde gelten, wenn jede Aufruf eine NEUE Liste bekäme. Tut er aber nicht.',
          '2': 'Würde gelten, wenn der Default unverändert bliebe — er wird aber zwischen Aufrufen verändert.',
          '3': 'Kein TypeError — der Code läuft, nur das Verhalten überrascht.',
        },
        { stage: 'transfer', subGoal: 2, uses: ['default-par'] },
      ),
    ],

    // ── SG 3 — `lambda` — Lambda-Funktionen ────────────────────────────
    3: [
      // Row 16 · recognize · true-false · uses=[lambda]
      tf(
        'Eine Lambda-Funktion in Python ist eine kompakte, anonyme Inline-Funktion: `quadrat = lambda x: x**2` definiert eine Funktion mit Parameter `x`, die `x**2` zurückgibt — der Body ist auf einen Ausdruck beschränkt.',
        true,
        `**Ansatz:** \`lambda\` erzeugt ein Funktionsobjekt ohne Namen — meist genutzt für kurze Einzeiler oder als Argument an höhere Funktionen wie \`sorted\`, \`map\`, \`filter\`.

**Rechnung:** \`quadrat = lambda x: x**2\` ist äquivalent zu:
\`\`\`
def quadrat(x):
    return x ** 2
\`\`\`
Aber: KEIN \`return\` (implizit), KEIN Block (nur ein Ausdruck), KEIN Body mit Statements.

**Probe:** \`>>> sqr = lambda x: x*x\\n>>> sqr(5)\` → \`25\` ✓. \`>>> type(sqr)\` → \`<class 'function'>\` (ist also eine echte Funktion).

**Typischer Fehler:** \`return\` in einem Lambda schreiben → SyntaxError. Oder mehrzeiliges Verhalten erwarten — Lambda kann nur EINEN Ausdruck.`,
        [
          'Was ist der Body eines Lambdas — Statement oder Ausdruck?',
          'Braucht Lambda \`return\`?',
          'Kein \`return\`, ein Ausdruck, anonym.',
        ],
        { stage: 'recognize', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 17 · apply-guided · multiple-choice · uses=[lambda]
      mc(
        'Was liefert dieser Code?\n```\nsqr = lambda x: x ** 2\nsqr(5)\n```',
        ['`25`', '`5`', '`10`', '`TypeError`'],
        0,
        `**Ansatz:** \`sqr\` ist eine Funktion, die \`x\` quadriert. Aufruf mit \`5\` liefert $5^2 = 25$.

**Rechnung:** \`sqr(5)\` → \`x = 5\` → Body: \`x ** 2\` → \`25\`.

**Probe:** \`>>> sqr = lambda x: x ** 2; sqr(5)\` → \`25\` ✓.

**Typischer Fehler:** Glauben, Lambda sei "etwas anderes" als eine Funktion — ist es nicht. Identisches Verhalten wie \`def\`.`,
        [
          'Was tut \`x ** 2\` für $x = 5$?',
          '$5^2 = ?$',
          '$5 \\cdot 5 = 25$.',
        ],
        {
          '1': '\`5\` wäre, wenn der Body nur \`x\` zurückgäbe (ohne Quadrieren).',
          '2': '\`10\` wäre $2x = 5 \\cdot 2$, also Multiplikation. Body ist aber \`** 2\` (Potenz).',
          '3': 'Kein TypeError — Lambda mit einem Argument akzeptiert eine Zahl.',
        },
        { stage: 'apply-guided', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 18 · apply-independent · multiple-choice · uses=[lambda]
      mc(
        'Was liefert `add(3, 7)` bei `add = lambda a, b: a + b`?',
        ['`10`', '`(3, 7)`', '`21`', '`"37"`'],
        0,
        `**Ansatz:** Lambda mit ZWEI Parametern. Body addiert beide.

**Rechnung:** \`add(3, 7)\` → \`a = 3\`, \`b = 7\` → \`return a + b\` → \`10\`.

**Probe:** \`>>> add = lambda a, b: a + b; add(3, 7)\` → \`10\` ✓.

**Typischer Fehler:** Mehrere Argumente als Tupel verstehen — Lambdas können beliebig viele Parameter haben.`,
        [
          'Wie viele Parameter hat das Lambda?',
          '$3 + 7 = ?$',
          'Zwei Parameter, addieren.',
        ],
        {
          '1': '\`(3, 7)\` wäre die Eingabe — die Funktion gibt aber das ADDITIVE Ergebnis zurück.',
          '2': '\`21\` ist $3 \\cdot 7$ (Multiplikation). Body ist aber \`+\`.',
          '3': '\`"37"\` wäre String-Konkatenation. Hier sind \`a, b\` Zahlen.',
        },
        { stage: 'apply-independent', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 19 · error-analysis · multiple-choice · uses=[lambda]
      mc(
        'Welcher der folgenden Lambda-Ausdrücke ist UNGÜLTIG?',
        [
          '`f = lambda x: return x ** 2`',
          '`f = lambda x: x ** 2`',
          '`f = lambda: 42`',
          '`f = lambda x, y: x + y`',
        ],
        0,
        `**Ansatz:** Der Body eines Lambdas muss ein AUSDRUCK sein, kein Statement. \`return\` ist ein Statement → SyntaxError.

**Rechnung:** Korrekte Lambda-Form: \`lambda <params>: <ausdruck>\`. \`return\` davor ist falsch — der Wert wird IMPLIZIT zurückgegeben.

**Probe:** \`>>> f = lambda x: return x*2\` → \`SyntaxError: invalid syntax\` ✓. Korrektur: \`lambda x: x*2\` (ohne return).

**Typischer Fehler:** \`def\`-Stil ins Lambda übertragen. Lambda ist absichtlich kompakt — kein \`return\`, kein Block, ein Ausdruck.`,
        [
          'Was ist der Body eines Lambdas?',
          'Darf \`return\` darin stehen?',
          'Lambda-Body = Ausdruck, kein \`return\`.',
        ],
        {
          '1': 'Standard-Lambda mit einem Parameter und Ausdruck — gültig.',
          '2': 'Lambda OHNE Parameter (\`lambda:\` direkt mit Body) — gültig. Aufruf: \`f()\` → \`42\`.',
          '3': 'Lambda mit zwei Parametern — gültig.',
        },
        { stage: 'error-analysis', subGoal: 3, uses: ['lambda'] },
      ),
      // Row 20 · transfer · multiple-choice · uses=[lambda]
      mc(
        'Welche Funktion sortiert eine Liste von Tupeln nach dem ZWEITEN Element jedes Tupels?',
        [
          '`sorted(lst, key=lambda t: t[1])`',
          '`sorted(lst, key=t[1])`',
          '`sorted(lst).by(t[1])`',
          '`lst.sort(2)`',
        ],
        0,
        `**Ansatz:** \`sorted\` akzeptiert eine \`key\`-Funktion, die zu jedem Element den Sortierwert liefert. Lambdas sind die idiomatische Wahl für solche Inline-Schlüssel-Extraktoren.

**Rechnung:** \`sorted(lst, key=lambda t: t[1])\` ruft für jedes Tupel \`t\` die Lambda-Funktion auf und sortiert nach \`t[1]\` (zweites Element).

**Probe:** \`>>> sorted([(3, 'b'), (1, 'c'), (2, 'a')], key=lambda t: t[1])\` → \`[(2, 'a'), (3, 'b'), (1, 'c')]\` (nach \`'a'\`/\`'b'\`/\`'c'\` sortiert) ✓.

**Typischer Fehler:** \`key\` direkt auf einen Wert setzen — \`key\` braucht eine FUNKTION. Oder Methodenkette wie \`.by(...)\` — gibt es nicht in Python.`,
        [
          'Wie liefert man \`sorted\` einen Sortierschlüssel?',
          'Was tut die Lambda-Funktion mit einem Tupel?',
          '\`key=lambda t: t[1]\` für 2. Element.',
        ],
        {
          '1': '\`key=t[1]\` ist kein Ausdruck im Scope — \`t\` ist nicht definiert. Plus: \`key\` braucht eine FUNKTION, nicht einen einzelnen Wert.',
          '2': '\`.by(...)\` gibt es in Python nicht. Andere Sprachen (Kotlin, Ruby) haben \`sortBy\`.',
          '3': '\`lst.sort(2)\` macht nichts Definiertes — \`sort\` akzeptiert keine Zahl als Argument.',
        },
        { stage: 'transfer', subGoal: 3, uses: ['lambda'] },
      ),
    ],

    // ── SG 4 — `doc-str` — Docstring/Header-Kommentar ───────────────────
    4: [
      // Row 21 · recognize · true-false · uses=[doc-str]
      tf(
        'Ein Python-Docstring ist ein String direkt nach der `def`-Zeile (typisch in `"""triple-quotes"""`); er beschreibt, was die Funktion tut, und kann mit `help(funktion)` oder `funktion.__doc__` abgerufen werden.',
        true,
        `**Ansatz:** Docstrings sind eine Konvention der Python-Community (PEP 257) — eine standardisierte Stelle für Funktionsdokumentation, die von Tools (\`help()\`, IDE-Tooltips, Sphinx) gelesen wird.

**Rechnung:**
\`\`\`
def kraft(m, a):
    """Berechnet die Kraft F = m · a."""
    return m * a

print(kraft.__doc__)   # → "Berechnet die Kraft F = m · a."
help(kraft)            # zeigt Signatur + Docstring
\`\`\`

**Probe:** Triple-quotes erlauben Mehrzeiler ohne Escape: \`"""Erste Zeile.\\n\\nDetails ..."""\` ✓.

**Typischer Fehler:** \`#\`-Kommentar als Docstring nehmen — wird NICHT als Docstring erkannt, fehlt in \`__doc__\` (\`None\`).`,
        [
          'Wo steht der Docstring in der Funktion?',
          'Welche Quoting-Form ist Konvention?',
          'Erstes Statement nach \`def\` als triple-quoted String.',
        ],
        { stage: 'recognize', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 22 · apply-guided · multiple-choice · uses=[doc-str]
      mc(
        'Wo gehört der Docstring in einer Python-Funktion hin?\n```\ndef f(x):\n    [Position?]\n    return x ** 2\n```',
        [
          'Direkt nach der `def`-Zeile, als ERSTES Statement (vor `return`).',
          'Vor der `def`-Zeile.',
          'Am Ende der Funktion (nach `return`).',
          'In einem `#`-Kommentar.',
        ],
        0,
        `**Ansatz:** Per PEP-257-Konvention ist der Docstring das ERSTE Statement nach \`def\`. Nur dann erkennt Python ihn als Docstring und legt ihn in \`__doc__\` ab.

**Rechnung:**
\`\`\`
def f(x):
    """Quadrat von x."""
    return x ** 2

print(f.__doc__)  # → "Quadrat von x."
\`\`\`

**Probe:** Andere Position: vor \`def\` ist nur ein toter String, nach \`return\` UNERREICHBAR (Funktion ist da schon weg). Beides landet NICHT in \`__doc__\`.

**Typischer Fehler:** Docstring nach Statement-Code platzieren — wird zwar als String-Literal erstellt, aber nicht als Docstring registriert.`,
        [
          'An welcher Position erkennt Python einen Docstring?',
          'Erstes Statement, vor allem anderen Code.',
          'Direkt nach \`def\`-Header.',
        ],
        {
          '1': 'Vor \`def\` ist der String im Module-Scope, nicht im Funktions-Scope — kein Docstring der Funktion.',
          '2': 'Nach \`return\` ist die Zeile UNERREICHBAR. Plus: nicht erstes Statement.',
          '3': '\`#\`-Kommentare sind keine Docstrings. \`__doc__\` bleibt \`None\`.',
        },
        { stage: 'apply-guided', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 23 · apply-independent · multiple-choice · uses=[doc-str]
      mc(
        'Was liefert `f.__doc__` für:\n```\ndef f(x):\n    """Liefert das Quadrat von x."""\n    return x ** 2\n```',
        [
          '`"Liefert das Quadrat von x."`',
          '`None`',
          'Den gesamten Quellcode der Funktion.',
          '`TypeError`',
        ],
        0,
        `**Ansatz:** \`__doc__\` ist ein automatisch gesetztes Attribut jeder Funktion mit Docstring — enthält genau den String aus dem ersten Statement nach \`def\`.

**Rechnung:** Docstring \`"""Liefert das Quadrat von x."""\` → \`f.__doc__\` ist \`"Liefert das Quadrat von x."\` (ohne triple-quotes, die sind nur Quoting).

**Probe:** \`>>> f.__doc__\` → \`'Liefert das Quadrat von x.'\` ✓. \`>>> help(f)\` zeigt zusätzlich die Signatur \`f(x)\` plus den Docstring.

**Typischer Fehler:** Erwarten, dass \`__doc__\` Source Code liefert (das macht \`inspect.getsource(f)\`). Oder dass \`None\` käme — nur ohne Docstring.`,
        [
          'Wo speichert Python den Docstring?',
          'Welcher String wird ohne Quotes zurückgegeben?',
          '\`__doc__\` enthält genau den Docstring.',
        ],
        {
          '1': '\`None\` käme nur, wenn die Funktion KEINEN Docstring hätte. Hier ist klar einer da.',
          '2': 'Source Code liefert \`inspect.getsource(f)\`, nicht \`__doc__\`. Letzteres ist NUR der Doc-String.',
          '3': 'Kein Fehler — \`__doc__\` ist Standard-Attribut jeder Funktion.',
        },
        { stage: 'apply-independent', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 24 · error-analysis · multiple-choice · uses=[doc-str]
      mc(
        'Welche der folgenden Praktiken erzeugt KEINEN gültigen Python-Docstring?',
        [
          'Eine Zeile `# Berechnet ...` direkt nach `def f(x):`.',
          '`"""Berechnet das Quadrat."""` als erstes Statement.',
          '`"""Mehrzeiliger`<br>`Docstring."""` über mehrere Zeilen.',
          '`\'Single-quoted Docstring\'` als erstes Statement.',
        ],
        0,
        `**Ansatz:** Docstrings müssen STRING-LITERALE sein, kein \`#\`-Kommentar. Kommentare und Docstrings sind verschiedene Mechanismen.

**Rechnung:** \`#\`-Kommentar nach \`def\` wird vom Parser ignoriert — der erste echte Statement-Code danach (z.B. \`return\`) lässt \`__doc__ = None\` zurück. String-Literale (Single, Double, Triple-Quotes) werden hingegen als Docstring erkannt, sofern sie das ERSTE Statement sind.

**Probe:** \`>>> def f(x):\\n...     # Berechnet was\\n...     return x*2\\n>>> f.__doc__\` → \`None\` (kein Docstring!). Mit String stattdessen: \`>>> def f(x):\\n...     "Berechnet was"\\n...     return x*2\\n>>> f.__doc__\` → \`'Berechnet was'\` ✓.

**Typischer Fehler:** \`#\`-Kommentar mit Docstring verwechseln. Nur String-Literale (mit Quotes!) werden als Docstring erkannt.`,
        [
          'Was unterscheidet einen Kommentar von einem Docstring?',
          'Welche Notation erkennt Python als Docstring?',
          'Kommentare beginnen mit \`#\` — Docstrings sind String-Literale.',
        ],
        {
          '1': 'Triple-quoted String als erstes Statement — Standard-Konvention für Docstrings. Gültig.',
          '2': 'Mehrzeiliger Docstring mit triple-quotes — gültig und idiomatisch.',
          '3': 'Single-quoted String als erstes Statement IST gültiger Docstring (PEP-257 empfiehlt aber triple-quotes für Konsistenz).',
        },
        { stage: 'error-analysis', subGoal: 4, uses: ['doc-str'] },
      ),
      // Row 25 · transfer · matching · uses=[doc-str]
      matching(
        'Ordne der Sprache die typische Form der Funktions-Dokumentation zu.',
        [
          { left: 'Python (PEP 257)', right: '`"""triple-quoted string"""` als erstes Statement nach `def`' },
          { left: 'Matlab (MathWorks-Konvention)', right: '`%`-Kommentarzeilen direkt nach dem `function`-Header' },
          { left: 'C / C++', right: '`/* ... */` Block-Kommentar über der Funktion' },
          { left: 'Java (Javadoc)', right: '`/** ... */` Kommentar mit `@param`/`@return`-Tags' },
        ],
        `**Ansatz:** Jede Sprache hat eine eigene Doc-Konvention, von Tools (\`help()\`, \`javadoc\`, IDE-Tooltips) lesbar.

**Rechnung:**
- Python: \`def f(x):\\n    """..."""\\n    ...\` — abrufbar mit \`help(f)\` oder \`f.__doc__\`.
- Matlab: \`function y = f(x)\\n    % ...\\n    y = ...\` — abrufbar mit \`help f\`.
- C/C++: \`/* ... */\` direkt vor der Funktion (Doxygen erkennt das mit \`/** ... */\`).
- Java: \`/** @param x ... @return ... */\` — Javadoc generiert HTML-Dokumentation daraus.

**Probe:** Vier Konventionen, vier eindeutige Formen. Tools für jede Sprache bauen auf diese Konvention auf. ✓

**Typischer Fehler:** Konventionen vermischen — z.B. \`#\`-Kommentar in Python für Docs nutzen (verständlich, aber \`__doc__\` bleibt \`None\`).`,
        [
          'Welches Quoting-Symbol nutzt Python?',
          'Wie kommentiert Matlab?',
          'C/C++ vs. Java: \`/*\` vs. \`/**\`?',
        ],
        { stage: 'transfer', subGoal: 4, uses: ['doc-str'] },
      ),
    ],
  },
}
