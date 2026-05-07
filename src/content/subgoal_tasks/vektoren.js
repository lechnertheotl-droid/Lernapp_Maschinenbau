// ═══════════════════════════════════════════════════════════════════════════
// Vektoren — Zielaufgaben pro Sub-Goal
// ═══════════════════════════════════════════════════════════════════════════

import { mc, ni, tf, matching, sorting, tag } from './_helpers'

export const vektorenSubGoalTasks = {
  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-0: Koordinaten, Punkte & Pfeile (Einstieg)
  // SG0: Punkt vs. Vektor · SG1: $\vec{AB}=B-A$ · SG2: Freier Vektor
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-0': {
    // ===== Sub-Goal 0 — Punkt = Ort, Vektor = Verschiebung =====
    0: [
      tag(
        tf(
          'Der Punkt $P=(2,3)$ und der Vektor $\\vec{a}=(2,3)$ sind dasselbe mathematische Objekt — beide beschreiben einfach „2 nach rechts und 3 nach oben".',
          false,
          `**Ansatz:** Schreibweise $\\ne$ Bedeutung. Trenne „Wo liegt etwas?" (Punkt) von „Wie weit/wohin verschiebt sich etwas?" (Vektor).

**Rechnung:** $P=(2,3)$ ist ein **Ort** im Koordinatensystem — fixer Bezug zum Ursprung. $\\vec{a}=(2,3)$ ist eine **Verschiebung** — egal wo gestartet wird, es geht 2 nach rechts und 3 nach oben.

**Probe:** Verschieb $\\vec{a}$ vom Ursprung nach $(5,5)$ — der Pfeil bleibt derselbe Vektor. Verschieb den Punkt $P$ nach $(5,5)$ — er ist ein anderer Punkt.

**Typischer Fehler:** Gleiche Klammernotation $(x,y)$ als „dasselbe Objekt" deuten. Mathematisch sind beide Tupel — aber semantisch trennen wir strikt.`,
          [
            'Frage: Hat das Objekt einen festen Ort, oder beschreibt es nur eine Bewegung?',
            'Punkt $P$ liegt an einer Stelle. Vektor $\\vec{a}$ kann überall starten.',
            'Zwei Pfeile mit Komponenten $(2,3)$, an verschiedenen Stellen gezeichnet, sind derselbe Vektor — zwei Punkte $(2,3)$ und $(5,1)$ sind verschieden.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['punkt-vs-vektor'] },
      ),

      tag(
        mc(
          'Ein Bauteil hat eine **Masse** von $5\\,\\text{kg}$ und ist einer **Gewichtskraft** von $49\\,\\text{N senkrecht nach unten}$ ausgesetzt. Was sind Skalar bzw. Vektor?',
          [
            'Masse ist Skalar (nur Zahl), Gewichtskraft ist Vektor (Betrag $49\\,\\text{N}$ + Richtung „nach unten").',
            'Beide sind Vektoren — Masse zeigt nach unten zur Erde, Gewichtskraft auch.',
            'Beide sind Skalare — beide sind nur Zahlen mit Einheit.',
            'Masse ist Vektor (sie „zieht" nach unten), Gewichtskraft ist Skalar.',
          ],
          0,
          `**Ansatz:** Skalar = nur Betrag. Vektor = Betrag **und** Richtung. Frage: „Ergibt eine Richtungsangabe Sinn?"

**Rechnung:** Masse $m=5\\,\\text{kg}$ — eine Richtungsangabe wäre unsinnig, „Masse nach unten" gibt es nicht. → **Skalar**. Gewichtskraft $\\vec{F}_G$ wirkt auf der Erde immer **nach unten** (Richtung der Erdbeschleunigung) und hat Betrag $49\\,\\text{N}$ → **Vektor**.

**Probe:** Newton $\\vec{F}_G=m\\cdot\\vec{g}$ — links Vektor, rechts Skalar mal Vektor → Vektor. Stimmt.

**Typischer Fehler:** Masse mit Gewicht(skraft) verwechseln. Im Alltag sagt man „mein Gewicht ist $75\\,\\text{kg}$" — physikalisch ist das die **Masse**. Die **Gewichtskraft** wäre $75\\cdot 9{,}81 \\approx 736\\,\\text{N}$.`,
          [
            'Skalar oder Vektor? Frag: „Hat die Größe eine räumliche Richtung?"',
            'Masse ist überall gleich, egal wie das Bauteil orientiert ist. Die Gewichtskraft zeigt aber immer Richtung Erdmittelpunkt.',
            'Im SI-System: Masse in kg (Skalar), Kraft in Newton (Vektor).',
          ],
          {
            1: 'Masse hat keine Richtung — sie ist eine reine Stoffmenge in kg, unabhängig von Lage oder Orientierung. Nur die Gewichts**kraft** zeigt nach unten.',
            2: 'Die Gewichtskraft hat sehr wohl eine Richtung (nach unten zur Erde) — also Vektor, nicht Skalar.',
            3: 'Genau umgekehrt: Masse ist die richtungslose Stoffmenge (Skalar), die Gewichtskraft die nach unten zeigende Kraft (Vektor).',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['punkt-vs-vektor', 'skalar-vs-vektor'] },
      ),

      tag(
        mc(
          'In welchem Quadranten liegt der Punkt $P=(-4,\\,-2)$?',
          ['1. Quadrant', '2. Quadrant', '3. Quadrant', '4. Quadrant'],
          2,
          `**Ansatz:** Vorzeichen von $x$ und $y$ bestimmen den Quadranten — Zählung gegen den Uhrzeigersinn ab rechts oben.

**Rechnung:** $x=-4<0$ und $y=-2<0$ → links unten → **3. Quadrant**.

**Probe:** Q1: $(+,+)$ rechts oben · Q2: $(-,+)$ links oben · Q3: $(-,-)$ links unten · Q4: $(+,-)$ rechts unten. $P=(-4,-2)$ passt zu Q3.

**Typischer Fehler:** Im Uhrzeigersinn statt entgegen zählen — dann landet man auf Q4 statt Q3.`,
          [
            'Vorzeichen-Tabelle: Q1 $(+,+)$ · Q2 $(-,+)$ · Q3 $(-,-)$ · Q4 $(+,-)$.',
            'Welches Vorzeichen hat $x$? Welches $y$?',
            'Beide negativ → links unten → 3. Quadrant.',
          ],
          {
            0: '1. Quadrant wäre $x>0, y>0$ — beide Koordinaten positiv. $P=(-4,-2)$ hat beide negativ.',
            1: '2. Quadrant wäre $x<0, y>0$ — links oben. Hier ist aber auch $y<0$, also nicht Q2.',
            3: '4. Quadrant wäre $x>0, y<0$ — rechts unten. $P$ hat aber $x<0$, liegt also links.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['quadranten', 'koord-2d'] },
      ),

      tag(
        matching(
          'Ordne jede physikalische Größe der richtigen Kategorie (Skalar oder Vektor) zu.',
          [
            { left: 'Geschwindigkeit eines Autos in $\\text{km/h}$ nach Norden', right: 'Vektor (Betrag + Richtung)' },
            { left: 'Temperatur in einer Werkhalle', right: 'Skalar (nur Zahl)' },
            { left: 'Kraft auf einen Balken (Betrag + Wirkungslinie)', right: 'Vektor (mit Wirkungslinie)' },
            { left: 'Volumen eines Behälters', right: 'Skalar (Volumen ist Größe)' },
          ],
          `**Ansatz:** Pro Größe fragen: „Hat sie eine räumliche Richtung?"

**Rechnung:** Geschwindigkeit (km/h **nach Norden**) und Kraft (N entlang einer Wirkungslinie) haben Richtung → Vektoren. Temperatur und Volumen sind reine Zahlen — Richtung wäre unsinnig.

**Probe:** Im Maschinenbau klassisch: Kraft, Geschwindigkeit, Beschleunigung, Verschiebung, Drehmoment = Vektoren. Masse, Volumen, Temperatur, Zeit, Energie = Skalare.

**Typischer Fehler:** Die Einheit als Indikator verwenden. Ein Vektor kann auch eine Einheit haben (N, m/s). Entscheidend ist die Richtungs-Frage, nicht die Einheit.`,
          [
            'Frage pro Begriff: „Kann ich sinnvoll eine Himmelsrichtung dazudenken?"',
            'Wenn ja → Vektor. Wenn nein → Skalar.',
            'Achtung bei Energie: Kinetische Energie $E=\\tfrac{1}{2}mv^2$ ist Skalar, obwohl $v$ Vektor ist (Quadrat hebt Richtung auf).',
          ],
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['skalar-vs-vektor'] },
      ),

      tag(
        ni(
          'In welchem Quadrant liegt der Punkt $P=(7,\\,-3)$? Antworte mit der Quadrantennummer (1, 2, 3 oder 4).',
          4, 0, '',
          `**Ansatz:** Vorzeichenpaar $(x,y)$ → Quadrant ablesen.

**Rechnung:** $x=7>0$ und $y=-3<0$ → rechts unten → **4. Quadrant**.

**Probe:** Bei $y=-3$ liegt $P$ unterhalb der $x$-Achse. Bei $x=7$ rechts der $y$-Achse → Q4.

**Typischer Fehler:** Q4 mit Q2 verwechseln, weil beide ein negatives Vorzeichen tragen — aber Q2 hat $x<0$, Q4 hat $y<0$.`,
          [
            'Quadrantenzählung: gegen den Uhrzeigersinn ab rechts oben (Q1).',
            'Vorzeichenpaar: Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$.',
            'Hier: $x>0, y<0$ — welches Vorzeichenpaar passt?',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['quadranten', 'koord-2d'] },
      ),

      tag(
        tf(
          'Wenn man einen Vektor $\\vec{a}=(3,1)$ vom Punkt $A=(2,4)$ aus zeichnet, endet die Pfeilspitze im Punkt $B=(5,5)$.',
          true,
          `**Ansatz:** Anfangspunkt + Verschiebung = Endpunkt. Komponenten von $\\vec{a}$ werden zu den Koordinaten von $A$ addiert.

**Rechnung:** $B = A + \\vec{a} = (2+3,\\;4+1) = (5,5)$.

**Probe:** $\\vec{AB} = B - A = (5-2,\\;5-4) = (3,1) = \\vec{a}$. ✓

**Typischer Fehler:** Vektor und Punkt verwechseln und z. B. die Komponenten subtrahieren $((2-3,4-1)=(-1,3))$ — Subtraktion ist die Umkehr (vom Endpunkt zum Startpunkt).`,
          [
            'Endpunkt = Startpunkt + Vektor.',
            'Komponentenweise: $A_x + a_x$ und $A_y + a_y$.',
            'Probe per Rückrechnung: $B-A$ muss wieder $\\vec{a}$ ergeben.',
          ],
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['punkt-vs-vektor', 'vektor'] },
      ),
    ],

    // ===== Sub-Goal 1 — Verbindungsvektor $\vec{AB} = B - A$ =====
    1: [
      tag(
        tf(
          'Der Vektor von $A$ nach $B$ wird komponentenweise als $\\vec{AB} = B - A$ berechnet — also Endpunkt **minus** Startpunkt.',
          true,
          `**Ansatz:** „Wohin muss ich von $A$ aus gehen, um bei $B$ zu landen?" → genau die Komponentendifferenzen.

**Rechnung:** $\\vec{AB} = (B_x - A_x,\\;B_y - A_y,\\;B_z - A_z)$. Beispiel: $A=(1,2)$, $B=(4,6)$ → $\\vec{AB}=(3,4)$.

**Probe:** Geh von $A$ um $\\vec{AB}$ weiter: $A+\\vec{AB}=(1+3,2+4)=(4,6)=B$. ✓

**Typischer Fehler:** $A-B$ statt $B-A$ rechnen — dann zeigt der Vektor in die **falsche Richtung** (von $B$ nach $A$). Merksatz: „Endpunkt minus Startpunkt — Spitze minus Schaft."`,
          [
            'Eselsbrücke: „Spitze minus Schaft" — wo der Pfeil hinzeigt, minus wo er startet.',
            'Komponentenweise: jede Koordinate einzeln subtrahieren.',
            'Probe per Addition: $A + \\vec{AB} = B$ muss aufgehen.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        mc(
          'Gegeben sind $A=(2,5)$ und $B=(7,3)$. Wie lautet der Verbindungsvektor $\\vec{AB}$?',
          ['$(5,\\,-2)$', '$(-5,\\,2)$', '$(9,\\,8)$', '$(5,\\,2)$'],
          0,
          `**Ansatz:** Formel $\\vec{AB}=B-A$ komponentenweise anwenden.

**Rechnung:** $\\vec{AB} = (7-2,\\;3-5) = (5,\\,-2)$.

**Probe:** $A + \\vec{AB} = (2+5,\\;5+(-2)) = (7,3) = B$. ✓

**Typischer Fehler:** Vorzeichen der $y$-Komponente unterschlagen, weil $|3-5|=2$ optisch gleich aussieht — aber $3-5 = -2$, nicht $+2$.`,
          [
            '$\\vec{AB} = B - A$, jede Koordinate einzeln.',
            'Pass auf das Vorzeichen auf, wenn $A_y > B_y$.',
            'Probe: $A + \\vec{AB}$ muss $B$ ergeben.',
          ],
          {
            1: 'Du hast $A-B$ gerechnet (Startpunkt minus Endpunkt). Das gibt den **Gegenvektor** $\\vec{BA}$ — er zeigt von $B$ nach $A$.',
            2: 'Du hast addiert statt subtrahiert: $(2+7,5+3)$. Verbindungsvektor verlangt **Differenz**, nicht Summe.',
            3: 'Die $x$-Komponente $5$ ist richtig, aber das Vorzeichen der $y$-Komponente fehlt: $3-5=-2$, nicht $+2$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Gegeben sind $A=(3,\\,-1)$ und $B=(8,\\,7)$ in 2D. Wie groß ist die $y$-Komponente des Verbindungsvektors $\\vec{AB}$?',
          8, 0, '',
          `**Ansatz:** $y$-Komponente von $\\vec{AB}$ ist $B_y - A_y$.

**Rechnung:** $B_y - A_y = 7 - (-1) = 7 + 1 = 8$.

**Probe:** $\\vec{AB} = (8-3,\\;7-(-1)) = (5,8)$. $A + (5,8) = (3+5,\\;-1+8) = (8,7) = B$. ✓

**Typischer Fehler:** Doppeltes Minuszeichen unterschlagen: $7 - (-1) = 6$ rechnen statt $8$. Oder die Reihenfolge $A_y - B_y = -1 - 7 = -8$ vertauschen.`,
          [
            '$y$-Komponente von $\\vec{AB} = B_y - A_y$ — Endpunkt minus Startpunkt.',
            '$A_y$ ist negativ. Doppeltes Minus wird Plus: $7-(-1)=7+1$.',
            'Auf jede Komponente einzeln anwenden, Vorzeichen mitnehmen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        mc(
          'Ein Student berechnet den Vektor von $A=(1,4)$ nach $B=(6,2)$ und schreibt $\\vec{AB} = A - B = (-5,\\,2)$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$\\vec{AB} = (5,\\,-2)$ — der Student hat Endpunkt und Startpunkt vertauscht; $\\vec{AB}=B-A$, nicht $A-B$.',
            '$\\vec{AB} = (-5,\\,2)$ — die Rechnung des Studenten ist richtig, weil man immer Startpunkt minus Endpunkt nimmt.',
            '$\\vec{AB} = (7,\\,6)$ — man addiert die Komponenten.',
            '$\\vec{AB} = (5,\\,2)$ — man rechnet $|B_x-A_x|$ und $|B_y-A_y|$ (Beträge ohne Vorzeichen).',
          ],
          0,
          `**Ansatz:** Konvention: $\\vec{AB}$ zeigt **von $A$ nach $B$**. Definition: $\\vec{AB} = B - A$ (Spitze minus Schaft).

**Rechnung:** $\\vec{AB} = B - A = (6-1,\\;2-4) = (5,\\,-2)$. Der Student rechnete $A-B = (1-6,\\;4-2) = (-5,\\,2)$ — das ist der **Gegenvektor** $\\vec{BA}$, nicht $\\vec{AB}$.

**Probe:** $A + \\vec{AB} = (1+5,\\;4-2) = (6,\\,2) = B$. ✓ Und $A + (-5,2) = (-4,\\,6) \\ne B$.

**Typischer Fehler:** Vorzeichen-Tausch durch falsche Subtraktionsreihenfolge — der Vektor zeigt dann **rückwärts** und alle weiteren Rechnungen kippen.`,
          [
            'Schreib $\\vec{AB}$ und frag: „Wo zeigt der Pfeil hin?" — zur Spitze $B$.',
            'Definition: Endpunkt minus Startpunkt, nicht andersrum.',
            'Probe: $A + \\vec{AB}$ muss $B$ ergeben — wenn $\\ne B$, hast du falsch herum subtrahiert.',
          ],
          {
            1: 'Genau das ist der Fehler: $A-B$ ergibt $\\vec{BA}$ (Gegenvektor, falsche Richtung). Korrekt ist $\\vec{AB} = B-A = (5,-2)$.',
            2: 'Addition gibt nicht die Verschiebung von $A$ nach $B$, sondern den Ortsvektor zum Mittelpunkt-Doppelten o. Ä. Verbindungsvektor verlangt **Differenz**.',
            3: 'Beträge zu nehmen unterdrückt die Richtung — der Verbindungsvektor hat aber Vorzeichen, die anzeigen, ob es nach links/rechts oder oben/unten geht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Gegeben sind die 3D-Punkte $A=(-3,\\,5,\\,2)$ und $B=(4,\\,-1,\\,8)$. Wie groß ist die $y$-Komponente des Verbindungsvektors $\\vec{AB}$?',
          -6, 0, '',
          `**Ansatz:** Auch in 3D gilt $\\vec{AB}=B-A$ — komponentenweise, also auch für die $y$-Komponente.

**Rechnung:** $(\\vec{AB})_y = B_y - A_y = -1 - 5 = -6$.

**Probe:** Vollständig: $\\vec{AB} = (4-(-3),\\;-1-5,\\;8-2) = (7,\\,-6,\\,6)$. $A + \\vec{AB} = (-3+7,\\;5+(-6),\\;2+6) = (4,-1,8) = B$. ✓

**Typischer Fehler:** $A_y - B_y = 5 - (-1) = 6$ statt $-6$ (Reihenfolge vertauscht). Oder die Vorzeichen der negativen Komponenten in der Rechnung „verschlucken".`,
          [
            'Die Formel $\\vec{AB} = B - A$ ist dimensionsunabhängig — gilt in 2D, 3D oder höher.',
            'Auf jede Achse einzeln: $x$-Komponenten subtrahieren, dann $y$, dann $z$.',
            'Bei „Endpunkt minus Startpunkt" — und $B_y$ ist negativ, also $-1-5$ rechnen.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['ab-formel'] },
      ),

      tag(
        ni(
          'Eine Drohne fliegt vom Startpunkt $A=(2,\\,-4)$ zum Punkt $B=(-3,\\,1)$. Wie groß ist die $x$-Komponente des Flugvektors $\\vec{AB}$? (Negative Antwort möglich.)',
          -5, 0, '',
          `**Ansatz:** Flugvektor = Verbindungsvektor von Start zu Ziel: $\\vec{AB}=B-A$.

**Rechnung:** $(\\vec{AB})_x = B_x - A_x = -3 - 2 = -5$.

**Probe:** Vollständig: $\\vec{AB} = (-3-2,\\;1-(-4)) = (-5,\\,5)$. Negative $x$-Komponente bedeutet: die Drohne fliegt nach **links** (in $-x$-Richtung) — passt, denn $B_x=-3<A_x=2$.

**Typischer Fehler:** Beträge statt Differenzen rechnen ($|B_x-A_x|=5$) — dann verliert man die Information, dass der Flug nach links geht.`,
          [
            'Flugrichtung: Ziel minus Start.',
            '$x$-Komponente isoliert: $B_x - A_x$.',
            'Vorzeichen mitnehmen — eine negative Komponente sagt: Bewegung in die negative Achsenrichtung.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['ab-formel'] },
      ),
    ],

    // ===== Sub-Goal 2 — Freier Vektor =====
    2: [
      tag(
        tf(
          'Zwei Pfeile mit gleicher Länge und gleicher Richtung, an verschiedenen Stellen der Ebene gezeichnet, stellen denselben Vektor dar.',
          true,
          `**Ansatz:** Ein Vektor ist nur durch **Betrag** und **Richtung** definiert — der Startpunkt ist egal.

**Rechnung:** Zeichne $\\vec{a}=(3,2)$ einmal vom Ursprung $(0,0)$ zu $(3,2)$ und einmal von $(5,1)$ zu $(8,3)$. Beide Pfeile haben Komponenten $(3,2)$, also denselben Vektor.

**Probe:** Komponenten testen — $\\vec{AB}=B-A=(3-0,2-0)=(3,2)$ und $\\vec{CD}=D-C=(8-5,3-1)=(3,2)$. Identisch ✓.

**Typischer Fehler:** Vektor wie einen Punkt auf den Anfang fixieren. Vektoren sind „frei" — nur Betrag und Richtung zählen.`,
          [
            'Was definiert einen Vektor? Betrag und Richtung — nicht der Startpunkt.',
            'Wenn die Komponenten gleich sind, sind die Vektoren gleich.',
            'Anschaulich: Pfeile parallel, gleich lang, in gleiche Richtung → identischer Vektor.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['vektor-frei'] },
      ),

      tag(
        mc(
          'Der Pfeil von $A=(1,2)$ nach $B=(5,4)$ stellt den Vektor $\\vec{a}$ dar. An welchem anderen Punktpaar $(C,D)$ ist genau **derselbe** Vektor $\\vec{a}$ eingezeichnet?',
          [
            '$C=(2,3)$, $D=(6,5)$',
            '$C=(0,0)$, $D=(2,4)$',
            '$C=(3,1)$, $D=(7,1)$',
            '$C=(5,4)$, $D=(1,2)$',
          ],
          0,
          `**Ansatz:** Komponenten von $\\vec{a}$ bestimmen, dann jedes Punktpaar prüfen — derselbe freie Vektor liegt vor, wenn $\\vec{CD}=D-C$ komponentenweise gleich $\\vec{a}$ ist.

**Rechnung:** $\\vec{a}=\\vec{AB}=(5-1,\\;4-2)=(4,\\,2)$. Prüfe Optionen:
- $C=(2,3), D=(6,5)$: $\\vec{CD}=(6-2,\\;5-3)=(4,2)$ ✓
- $C=(0,0), D=(2,4)$: $\\vec{CD}=(2,4)$ — $x$ und $y$ vertauscht.
- $C=(3,1), D=(7,1)$: $\\vec{CD}=(4,0)$ — $y$-Komponente fehlt.
- $C=(5,4), D=(1,2)$: $\\vec{CD}=(-4,-2)=-\\vec{a}$ — Gegenvektor.

**Probe:** Pfeil von $(2,3)$ um $(4,2)$ verschoben endet bei $(6,5)$ — deckt sich mit $D$. ✓

**Typischer Fehler:** Augenmaß statt Komponentenrechnung — der Pfeil $C\\to D$ bei Option 4 zeigt zwar in *eine* parallele Richtung, aber **antiparallel** (Gegenvektor) — er ist nicht derselbe Vektor.`,
          [
            'Berechne zuerst $\\vec{a}=B-A$ aus den Originalpunkten.',
            'Dann für jedes Paar $(C,D)$: $\\vec{CD}=D-C$ ausrechnen und mit $\\vec{a}$ vergleichen.',
            'Vorzeichen mitnehmen — antiparallele Pfeile sind nicht derselbe Vektor.',
          ],
          {
            1: '$x$- und $y$-Komponente sind vertauscht: $\\vec{CD}=(2,4)$ statt $(4,2)$. Für „derselbe Vektor" müssen die Komponenten in der gleichen Reihenfolge übereinstimmen.',
            2: '$\\vec{CD}=(4,0)$ — Richtung wäre nur waagrecht, $\\vec{a}$ steigt aber $2$ nach oben. Unterschiedliche Richtung → nicht derselbe Vektor.',
            3: '$\\vec{CD}=(-4,-2)=-\\vec{a}$ — der Pfeil zeigt in die **entgegengesetzte** Richtung. Das ist der Gegenvektor, nicht derselbe Vektor.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['vektor-frei', 'ab-formel'] },
      ),

      tag(
        mc(
          'Welche Eigenschaft ist die einzige, die zwei freie Vektoren als „gleich" charakterisiert?',
          [
            'Gleicher Betrag und gleiche Richtung — Startpunkt egal.',
            'Gleicher Startpunkt und gleicher Endpunkt.',
            'Gleicher Betrag — Richtung egal, solange parallel.',
            'Gleiche Richtung — Betrag egal, solange beide nicht null.',
          ],
          0,
          `**Ansatz:** Definition des freien Vektors: nur **Betrag** und **Richtung** zählen.

**Rechnung:** Zwei freie Vektoren $\\vec{a}$ und $\\vec{b}$ sind gleich, wenn $|\\vec{a}|=|\\vec{b}|$ **und** beide in dieselbe Richtung zeigen — egal, wo sie eingezeichnet werden.

**Probe:** Komponentenweise: $\\vec{a}=\\vec{b}\\iff a_x=b_x \\land a_y=b_y$. Das ist äquivalent zu „gleicher Betrag und gleiche Richtung".

**Typischer Fehler:** Startpunkt als Definitionsmerkmal annehmen. Das gilt für gebundene Vektoren (z. B. Ortsvektor an festen Bezugspunkt), aber nicht für den freien Vektor in der Schulgeometrie.`,
          [
            'Was definiert einen Vektor? Pfeil-Eigenschaften — Länge und Richtung.',
            'Antiparallele Pfeile (gleicher Betrag, entgegengesetzte Richtung) sind nicht gleich, sondern Gegenvektoren.',
            'Komponenten-Test: $\\vec{a}=\\vec{b}\\iff$ alle Komponenten gleich.',
          ],
          {
            1: 'Das wäre ein **gebundener** Vektor mit festem Anfangs- und Endpunkt — aber freie Vektoren sind verschiebbar.',
            2: 'Antiparallele Vektoren (z. B. $(3,4)$ und $(-3,-4)$) haben gleichen Betrag aber entgegengesetzte Richtung — sie sind nicht gleich.',
            3: 'Ein Vektor der Länge $1$ und einer der Länge $5$ in derselben Richtung sind nicht gleich — Betrag muss übereinstimmen.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['vektor-frei'] },
      ),

      tag(
        mc(
          'Ein Schüler sagt: „Wenn ich den Vektor $\\vec{a}=(2,3)$ vom Punkt $A=(1,1)$ aus an einer anderen Stelle zeichne, z. B. ab $A\'=(5,5)$, dann habe ich den Vektor verschoben — der neue Pfeil hat dadurch die Komponenten $(7,8)$." Was sagt die Aussage falsch?',
          [
            'Beim Verschieben des Pfeils ändern sich die Komponenten nicht — er bleibt $\\vec{a}=(2,3)$. Verändert hätten sich die Komponenten nur, wenn er den Endpunkt ($A+\\vec{a})=(7,8)$ mit dem Vektor verwechselt.',
            'Das stimmt — der Vektor wird durch Verschieben skaliert, daher $(7,8)$.',
            'Der Vektor ändert sich nur in der Richtung, nicht im Betrag.',
            'Beim Verschieben werden die Komponenten halbiert.',
          ],
          0,
          `**Ansatz:** Freier Vektor — Verschieben ändert **nichts** an den Komponenten. Der Schüler hat den Endpunkt $A'+\\vec{a}=(5+2,5+3)=(7,8)$ mit dem Vektor verwechselt.

**Rechnung:** Egal von welchem Punkt aus gezeichnet — der Vektor $\\vec{a}=(2,3)$ hat immer die Komponenten $(2,3)$. Was sich ändert: der **Endpunkt** des Pfeils. Vom Punkt $A'=(5,5)$ aus liegt die Pfeilspitze bei $(7,8)$, aber der Vektor selbst bleibt $(2,3)$.

**Probe:** $\\vec{A'B'} = B'-A' = (7-5,\\;8-5) = (2,3) = \\vec{a}$. ✓

**Typischer Fehler:** Punkt $\\leftrightarrow$ Vektor verwechseln. Komponenten von Punkten ändern sich beim Verschieben (klar — andere Lage), Komponenten von Vektoren nicht (sie sind frei).`,
          [
            'Frag: Was sind die Komponenten eines Vektors? Differenz Endpunkt-Startpunkt.',
            'Wenn ich Start und Ende **gemeinsam** verschiebe, bleibt die Differenz gleich.',
            'Der Schüler verwechselt den Vektor mit dem **Ortsvektor zum Endpunkt** $(7,8)$.',
          ],
          {
            1: 'Skalierung verändert den Betrag, aber Verschieben ist keine Skalierung — der Vektor ist invariant unter Verschiebung.',
            2: 'Beim Verschieben ändert sich weder Betrag noch Richtung — der Vektor bleibt komplett unverändert.',
            3: 'Halbierung wäre eine Skalarmultiplikation mit $\\tfrac{1}{2}$ — aber Verschieben skaliert nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['vektor-frei', 'punkt-vs-vektor'] },
      ),

      tag(
        sorting(
          'Du sollst überprüfen, ob die beiden eingezeichneten Pfeile (von $A$ nach $B$ und von $C$ nach $D$) denselben Vektor darstellen. Bringe die Schritte in die richtige Reihenfolge.',
          [
            'Berechne $\\vec{AB} = B - A$ komponentenweise.',
            'Berechne $\\vec{CD} = D - C$ komponentenweise.',
            'Vergleiche die Komponenten von $\\vec{AB}$ und $\\vec{CD}$.',
            'Stimmen alle Komponenten überein, sind die Pfeile derselbe Vektor.',
          ],
          [0, 1, 2, 3],
          `**Ansatz:** Freier-Vektor-Test über Komponenten — beide Pfeile in Komponentenform bringen, dann vergleichen.

**Rechnung:** Schritt 1: $\\vec{AB}$ ausrechnen. Schritt 2: $\\vec{CD}$ ausrechnen. Schritt 3: komponentenweise gegenüberstellen. Schritt 4: Schlussfolgerung — alle gleich → identischer Vektor; sonst nicht.

**Probe:** Beispiel $A=(1,1), B=(4,3), C=(0,2), D=(3,4)$ → $\\vec{AB}=(3,2)$, $\\vec{CD}=(3,2)$. Übereinstimmung → derselbe Vektor.

**Typischer Fehler:** Sofort optisch entscheiden („sieht parallel aus") ohne Komponenten zu rechnen — bei kleinen Abweichungen täuscht das Auge. Oder $\\vec{AB}$ und $\\vec{CD}$ vergleichen, **bevor** man beide ausgerechnet hat.`,
          [
            'Wir brauchen für jeden Pfeil seine Komponentenform.',
            'Erst beide Vektoren bestimmen, dann vergleichen — nicht parallel.',
            'Logischer Ablauf: zwei separate Rechnungen → ein Vergleich → ein Urteil.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['vektor-frei', 'ab-formel'] },
      ),

      tag(
        tf(
          'Zwei Pfeile mit gleichem Betrag, aber entgegengesetzten Richtungen (z. B. $\\vec{a}=(3,2)$ und $\\vec{b}=(-3,-2)$) stellen denselben freien Vektor dar.',
          false,
          `**Ansatz:** Gleichheit freier Vektoren verlangt **Betrag UND Richtung**. „Entgegengesetzt" verletzt die Richtung.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+4}=\\sqrt{13}=|\\vec{b}|$ — Beträge gleich. Aber $\\vec{b}=-\\vec{a}$ — die Richtungen sind genau umgekehrt. Komponentenweise: $a_x=3 \\ne b_x=-3$. Also **nicht** derselbe Vektor.

**Probe:** Antiparallele Vektoren mit gleichem Betrag heißen **Gegenvektoren** ($\\vec{b}=-\\vec{a}$), nicht gleiche Vektoren.

**Typischer Fehler:** Glauben, „parallele" Vektoren wären immer gleich — dabei kann „parallel" auch antiparallel bedeuten (z. B. zwei Kräfte, die sich genau gegenseitig aufheben).`,
          [
            'Frag: Sind die Komponenten paarweise identisch?',
            'Negatives Vorzeichen bedeutet Richtungsumkehr.',
            '$\\vec{a}$ und $-\\vec{a}$ sind Gegenvektoren — gleicher Betrag, **entgegengesetzte** Richtung, nicht derselbe Vektor.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['vektor-frei'] },
      ),
    ],
  },
}
