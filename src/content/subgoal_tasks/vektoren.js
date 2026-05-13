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

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-1: Vektoren — Grundbegriffe
  // SG0: Komponenten + Betrag · SG1: Add/Sub/Skalarmul · SG2: Einheitsvektor · SG3: Tech-Größen
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-1': {
    // ===== Sub-Goal 0 — Komponentenform & Betrag =====
    0: [
      tag(
        tf(
          'Der Betrag eines 3D-Vektors $\\vec{v}=(v_x,v_y,v_z)$ ist $|v_x|+|v_y|+|v_z|$ — also einfach die Summe der Beträge der Komponenten.',
          false,
          `**Ansatz:** Betrag = Länge des Pfeils. Pythagoras gilt im Raum, nicht Komponenten-Summe.

**Rechnung:** Korrekt ist $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$. Beispiel $\\vec{v}=(2,3,6)$: $|\\vec{v}|=\\sqrt{4+9+36}=\\sqrt{49}=7$. Falsche Formel würde $|2|+|3|+|6|=11$ liefern — ein anderer Wert.

**Probe:** Für $(3,4)$ in 2D: Pythagoras $\\sqrt{9+16}=5$ vs. Komponenten-Summe $7$ — beide unterschiedlich, also kann nur die Wurzel-Formel stimmen (3-4-5-Dreieck).

**Typischer Fehler:** „Manhattan-Norm" mit „euklidischer Norm" verwechseln — Manhattan summiert Beträge, Euklid macht Pythagoras. In der Schulgeometrie ist „Betrag" immer die euklidische Länge.`,
          [
            'Betrag eines Vektors = Länge des Pfeils — nicht Summe der Komponenten.',
            'Im 2D liefert die Komponenten-Summe für $(3,4)$ den Wert $7$, der Pythagoras aber $5$. Welche Antwort ist die Pfeillänge?',
            'Korrekt: $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$ — quadrieren, summieren, Wurzel ziehen.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag des Vektors $\\vec{a}=(6,\\,8)$.',
          10, 0, '',
          `**Ansatz:** Pythagoras: $|\\vec{a}|=\\sqrt{a_x^2+a_y^2}$.

**Rechnung:** $|\\vec{a}|=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.

**Probe:** $6$-$8$-$10$ ist das verdoppelte $3$-$4$-$5$-Tripel — sauberes pythagoreisches Tripel. ✓

**Typischer Fehler:** $6+8=14$ rechnen (Komponenten addiert ohne Wurzel) oder $\\sqrt{6+8}=\\sqrt{14}$ (zu früh gewurzelt — erst quadrieren, dann summieren, dann Wurzel).`,
          [
            'Längenformel via Pythagoras: $\\sqrt{a_x^2+a_y^2}$.',
            'Reihenfolge: erst quadrieren, dann addieren, dann Wurzel ziehen.',
            'Erkenn das pythagoreische Tripel — $6$-$8$-?',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet den Betrag von $\\vec{a}=(5,\\,12)$ als $|\\vec{a}|=5+12=17$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$|\\vec{a}|=13$ — der Schüler hat die Wurzel und das Quadrieren übersprungen; richtig ist $\\sqrt{25+144}=\\sqrt{169}=13$.',
            '$|\\vec{a}|=17$ — die Rechnung des Schülers ist richtig, weil man die Komponenten einfach summiert.',
            '$|\\vec{a}|=\\sqrt{17}$ — man muss die Wurzel aus der Komponenten-Summe ziehen.',
            '$|\\vec{a}|=169$ — man quadriert und summiert, ohne die Wurzel zu ziehen.',
          ],
          0,
          `**Ansatz:** Korrekte Formel: $|\\vec{a}|=\\sqrt{a_x^2+a_y^2}$. Reihenfolge: quadrieren, summieren, Wurzel.

**Rechnung:** $|\\vec{a}|=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$. Der Schüler hat sowohl das Quadrieren als auch die Wurzel übersprungen und einfach $5+12$ gerechnet.

**Probe:** $5$-$12$-$13$ ist ein klassisches pythagoreisches Tripel ($25+144=169$). ✓

**Typischer Fehler:** Linearität annehmen — $|\\vec{a}+\\vec{b}|\\ne|\\vec{a}|+|\\vec{b}|$. Pythagoras ist nichtlinear: das rechtwinklige Dreieck mit Katheten $5$ und $12$ hat Hypotenuse $13$, nicht $17$.`,
          [
            'Welche Operationen verlangt die Betragsformel?',
            'Drei Schritte: quadrieren — summieren — Wurzel ziehen. In dieser Reihenfolge.',
            'Pythagoreische Tripel: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ — diese Werte zu kennen, beschleunigt das Rechnen.',
          ],
          {
            1: 'Genau das ist der Fehler: Komponenten direkt zu addieren ist die „Manhattan-Distanz", nicht die euklidische Länge. Mit Pythagoras kommt $13$ heraus.',
            2: '$\\sqrt{17}\\approx 4{,}12$ — ein viel zu kleiner Wert für einen Vektor mit Komponente $12$. Erst **quadrieren**, dann summieren, dann Wurzel.',
            3: '$169$ ist $|\\vec{a}|^2$ (Summe der Quadrate). Die letzte Operation — die Wurzel — wurde vergessen.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag des 3D-Vektors $\\vec{v}=(-2,\\,3,\\,-6)$.',
          7, 0, '',
          `**Ansatz:** Pythagoras im Raum: $|\\vec{v}|=\\sqrt{v_x^2+v_y^2+v_z^2}$. Vorzeichen verschwinden durch das Quadrieren.

**Rechnung:** $|\\vec{v}|=\\sqrt{(-2)^2+3^2+(-6)^2}=\\sqrt{4+9+36}=\\sqrt{49}=7$.

**Probe:** Negative Komponenten ändern den Betrag nicht — nur die Richtung. $|(-2,3,-6)|=|(2,3,6)|=7$. ✓

**Typischer Fehler:** Vorzeichen mit ins Quadrat schleppen ($-2^2=-4$ statt $(-2)^2=4$) — beim Quadrieren werden alle Vorzeichen positiv. Oder die $z$-Komponente vergessen, wenn man unbewusst in 2D rechnet ($\\sqrt{4+9}=\\sqrt{13}$ statt $\\sqrt{49}$).`,
          [
            'Auch in 3D: quadrieren — summieren — Wurzel ziehen.',
            'Negative Komponenten quadrieren zu positiven Werten — sie zählen voll mit.',
            'Hier: $4+9+36=49$, also $\\sqrt{49}=7$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['betrag'] },
      ),

      tag(
        ni(
          'Berechne den Betrag von $\\vec{a}=(0,\\,-7)$.',
          7, 0, '',
          `**Ansatz:** Bei einer Null-Komponente reduziert sich Pythagoras auf den Betrag der anderen Komponente.

**Rechnung:** $|\\vec{a}|=\\sqrt{0^2+(-7)^2}=\\sqrt{0+49}=\\sqrt{49}=7$.

**Probe:** Anschaulich: $(0,-7)$ ist ein Pfeil, der gerade nach unten zeigt — Länge $7$, unabhängig vom Vorzeichen. ✓

**Typischer Fehler:** Vorzeichen direkt übernehmen und $-7$ als Antwort schreiben — der Betrag ist immer $\\geq 0$ (Längen sind nie negativ).`,
          [
            'Betrag ist die Länge — Längen sind nie negativ.',
            'Vorzeichen verschwindet durch das Quadrat: $(-7)^2=49$.',
            'Bei $0$-Komponenten: Pythagoras vereinfacht sich, das Ergebnis ist der Betrag der nicht-null Komponente.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['betrag'] },
      ),
    ],

    // ===== Sub-Goal 1 — Addition / Subtraktion / Skalarmultiplikation =====
    1: [
      tag(
        tf(
          'Für beliebige Vektoren $\\vec{a}$ und $\\vec{b}$ gilt $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$ — die Reihenfolge bei der Vektoraddition spielt keine Rolle.',
          true,
          `**Ansatz:** Vektoraddition ist komponentenweise — und Zahlen addieren ist kommutativ.

**Rechnung:** $\\vec{a}+\\vec{b}=(a_x+b_x,\\;a_y+b_y)$ und $\\vec{b}+\\vec{a}=(b_x+a_x,\\;b_y+a_y)$. Da $a_x+b_x=b_x+a_x$ usw. (Kommutativgesetz für Zahlen), gilt $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$.

**Probe:** $\\vec{a}=(2,3),\\,\\vec{b}=(1,-1)$: $\\vec{a}+\\vec{b}=(3,2)$, $\\vec{b}+\\vec{a}=(3,2)$. Identisch. ✓ Geometrisch: Parallelogramm — beide Pfeile spannen dieselbe Diagonale auf, egal in welcher Reihenfolge man sie aneinanderhängt.

**Typischer Fehler:** Mit dem **Kreuzprodukt** verwechseln — dort ist $\\vec a\\times\\vec b\\ne\\vec b\\times\\vec a$ (antikommutativ). Aber für Addition gilt das Kommutativgesetz.`,
          [
            'Vektoraddition arbeitet komponentenweise — also auf Zahlen.',
            'Zahlenaddition ist kommutativ: $a+b=b+a$.',
            'Das überträgt sich auf jede einzelne Komponente.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['add-komp', 'vra-axiome'] },
      ),

      tag(
        ni(
          'Gegeben: $\\vec{a}=(1,\\,2)$ und $\\vec{b}=(3,\\,-1)$. Berechne die $x$-Komponente des Vektors $2\\vec{a}+3\\vec{b}$.',
          11, 0, '',
          `**Ansatz:** Erst Skalarmultiplikation komponentenweise, dann Addition komponentenweise.

**Rechnung:** $2\\vec{a}=(2,4)$, $3\\vec{b}=(9,-3)$. Summe: $2\\vec{a}+3\\vec{b}=(2+9,\\;4-3)=(11,\\,1)$. $x$-Komponente: $\\mathbf{11}$.

**Probe:** Kurzweg auf $x$-Komponente: $2\\cdot a_x+3\\cdot b_x=2\\cdot 1+3\\cdot 3=2+9=11$. ✓

**Typischer Fehler:** Skalar nur auf eine Komponente anwenden ($2\\cdot 1+3=5$) — die Skalarmultiplikation muss **alle** Komponenten treffen. Oder Reihenfolge der Operationen falsch (zuerst addieren, dann skalieren) und mit Distributivgesetz kämpfen.`,
          [
            'Reihenfolge: erst $k\\vec{a}$ und $k\\vec{b}$ einzeln ausrechnen, dann addieren.',
            'Pro Komponente: $2 a_x + 3 b_x$.',
            'Hier $x$-Komponente: $2\\cdot 1 + 3\\cdot 3$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['add-komp', 'skalar-mul'] },
      ),

      tag(
        mc(
          'Ein Student rechnet $\\vec{a}-\\vec{b}$ mit $\\vec{a}=(5,\\,2)$ und $\\vec{b}=(3,\\,-4)$ als $(5-3,\\;2-4)=(2,\\,-2)$. Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$(2,\\,6)$ — der Student hat das Vorzeichen von $b_y=-4$ ignoriert; richtig ist $2-(-4)=2+4=6$.',
            '$(2,\\,-2)$ — die Rechnung des Studenten ist korrekt.',
            '$(8,\\,-2)$ — Subtraktion entspricht komponentenweiser Addition mit gleichem Vorzeichen.',
            '$(-2,\\,2)$ — bei der Subtraktion zieht man immer den ersten vom zweiten ab.',
          ],
          0,
          `**Ansatz:** $\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$ — also komponentenweise $a_i-b_i$. Negative Komponenten erfordern doppeltes Vorzeichen.

**Rechnung:** $\\vec{a}-\\vec{b}=(5-3,\\;2-(-4))=(2,\\;2+4)=(2,\\,6)$. Der Student hat $2-4$ statt $2-(-4)$ gerechnet — ein Vorzeichen verschluckt.

**Probe:** $\\vec{b}+(\\vec{a}-\\vec{b})$ muss $\\vec{a}$ ergeben: $(3,-4)+(2,6)=(5,2)=\\vec{a}$. ✓ Mit dem fehlerhaften $(2,-2)$ wäre $(3,-4)+(2,-2)=(5,-6)\\ne(5,2)$.

**Typischer Fehler:** Doppeltes Minus als einfaches Minus interpretieren — bei $a_y - b_y = 2 - (-4)$ wird $-(-4)=+4$, also $2+4=6$. Klammerung beibehalten ist Pflicht.`,
          [
            'Subtraktion: $\\vec{a}-\\vec{b}=(a_x-b_x,\\;a_y-b_y)$.',
            'Wenn $b_y$ negativ ist, wird das Minus zum Plus: $a_y-(-b)=a_y+b$.',
            'Probe per Rückrechnung: $\\vec{b}+(\\vec{a}-\\vec{b})$ muss $\\vec{a}$ sein.',
          ],
          {
            1: 'Genau das ist der Fehler: $2-(-4)$ ist $2+4=6$, nicht $2-4=-2$. Das doppelte Minus muss beachtet werden.',
            2: 'Subtraktion ist **nicht** Addition — die Vorzeichen werden umgekehrt: $\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$. Dann erst addieren.',
            3: 'Reihenfolge: $\\vec{a}-\\vec{b}$ bedeutet $a-b$ pro Komponente, nicht $b-a$. Das Ergebnis $(-2,2)$ wäre $\\vec{b}-\\vec{a}$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['add-komp', 'sub-komp'] },
      ),

      tag(
        matching(
          'Ordne jeder Vektor-Operation die korrekte geometrische Beschreibung zu.',
          [
            { left: '$2\\vec{a}$ (Skalarmultiplikation mit $k=2$)', right: 'Pfeil doppelt so lang, gleiche Richtung' },
            { left: '$-\\vec{a}$ (Skalarmultiplikation mit $k=-1$)', right: 'Pfeil gleiche Länge, entgegengesetzte Richtung' },
            { left: '$\\vec{a}+\\vec{b}$ (Vektoraddition)', right: 'Pfeile aneinanderhängen, Resultierende vom Start zur Spitze' },
            { left: '$\\vec{a}-\\vec{b}$ (Vektorsubtraktion)', right: 'Addition von $\\vec{a}$ und Gegenvektor von $\\vec{b}$' },
          ],
          `**Ansatz:** Jede Operation hat eine algebraische und eine geometrische Form — geometrisch sind die Auswirkungen am klarsten.

**Rechnung:** Skalarmul mit $k>1$ verlängert (Faktor $|k|$), $k<0$ kehrt zusätzlich die Richtung um, $k=0$ ergibt den Nullvektor. Addition: zwei Pfeile aneinanderhängen, Resultierende = Diagonale eines Parallelogramms. Subtraktion: $\\vec{a}+(-\\vec{b})$ — also den Gegenvektor von $\\vec{b}$ an $\\vec{a}$ anhängen.

**Probe:** Konkret mit $\\vec{a}=(3,1)$: $2\\vec{a}=(6,2)$ doppelt so lang ✓. $-\\vec{a}=(-3,-1)$ Gegenrichtung ✓. Mit $\\vec{b}=(1,2)$: $\\vec{a}+\\vec{b}=(4,3)$ Diagonale ✓.

**Typischer Fehler:** Skalarmul mit Vektoraddition verwechseln (Addition verändert Richtung **und** Länge, Skalarmul nur die Länge bzw. das Vorzeichen). Oder bei $k<0$ vergessen, dass auch die **Richtung** kippt.`,
          [
            'Algebraisch zuerst: Was passiert komponentenweise?',
            'Geometrisch: Skalar streckt/spiegelt, Addition fügt Pfeile zusammen.',
            'Subtraktion = Addition mit Gegenvektor — das löst das Vorzeichen-Problem.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['add-komp', 'add-geo', 'skalar-mul'] },
      ),

      tag(
        ni(
          'Berechne die $y$-Komponente des Vektors $\\vec{c}=4\\vec{a}-2\\vec{b}$ mit $\\vec{a}=(2,\\,-3)$ und $\\vec{b}=(1,\\,5)$.',
          -22, 0, '',
          `**Ansatz:** Linearkombination: erst skalieren, dann subtrahieren — komponentenweise nur auf $y$.

**Rechnung:** $(\\vec{c})_y = 4\\cdot a_y - 2\\cdot b_y = 4\\cdot(-3) - 2\\cdot 5 = -12 - 10 = -22$.

**Probe:** Volle Rechnung: $4\\vec{a}=(8,-12)$, $2\\vec{b}=(2,10)$, $\\vec{c}=4\\vec{a}-2\\vec{b}=(8-2,\\;-12-10)=(6,-22)$. $y$-Komponente $-22$. ✓

**Typischer Fehler:** Vorzeichen verlieren — $-12-10$ statt $-22$ als $-2$ rechnen (Plus statt Minus eingesetzt). Oder Skalar nur auf $\\vec{a}$, nicht auf $\\vec{b}$ anwenden.`,
          [
            'Linearkombinationen: skalieren — dann verknüpfen.',
            'Pro Komponente: $4 a_y - 2 b_y$.',
            'Vorzeichen mitnehmen: $a_y$ ist negativ, also $4\\cdot(-3)=-12$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['add-komp', 'sub-komp', 'skalar-mul'] },
      ),
    ],

    // ===== Sub-Goal 2 — Einheitsvektor =====
    2: [
      tag(
        tf(
          'Ein Einheitsvektor hat per Definition immer Länge $1$ — unabhängig vom Vektor, aus dem er gebildet wird.',
          true,
          `**Ansatz:** Definition des Einheitsvektors: Länge gleich $1$, Richtung wie der Ursprungs-Vektor.

**Rechnung:** Einheitsvektor zu $\\vec{v}\\ne\\vec{0}$: $\\hat{e}=\\vec{v}/|\\vec{v}|$. Dann $|\\hat{e}|=|\\vec{v}|/|\\vec{v}|=1$. ✓ Egal ob $\\vec{v}$ Länge $5$, $13$ oder $0{,}3$ hat — der Einheitsvektor ist normiert auf $1$.

**Probe:** Beispiel $\\vec{v}=(3,4)$, $|\\vec{v}|=5$, $\\hat{e}=(3/5,\\,4/5)=(0{,}6,\\,0{,}8)$. Länge: $\\sqrt{0{,}36+0{,}64}=\\sqrt{1}=1$. ✓

**Typischer Fehler:** „Einheitsvektor heißt: alle Komponenten sind $1$" — falsch. Die Komponenten können beliebige Werte zwischen $-1$ und $1$ annehmen; nur die **Gesamtlänge** ist $1$.`,
          [
            'Was definiert einen Einheitsvektor? Sein Betrag.',
            'Welcher Wert ist das?',
            'Konstruktion über $\\hat{e}=\\vec{v}/|\\vec{v}|$ erzwingt Länge $1$.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['einheitsvektor'] },
      ),

      tag(
        mc(
          'Wie bildet man den Einheitsvektor zum Vektor $\\vec{a}=(3,\\,4)$?',
          [
            '$\\hat{e}=(3/5,\\,4/5)$ — durch den Betrag $|\\vec{a}|=5$ teilen.',
            '$\\hat{e}=(3,\\,4)$ — der Vektor selbst ist schon ein Einheitsvektor.',
            '$\\hat{e}=(3/3,\\,4/4)=(1,\\,1)$ — jede Komponente durch sich selbst teilen.',
            '$\\hat{e}=(3/7,\\,4/7)$ — durch die Komponenten-Summe $3+4=7$ teilen.',
          ],
          0,
          `**Ansatz:** Einheitsvektor = Vektor durch seinen Betrag: $\\hat{e}=\\vec{a}/|\\vec{a}|$.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+16}=5$. $\\hat{e}=(3/5,\\,4/5)=(0{,}6,\\,0{,}8)$.

**Probe:** $|\\hat{e}|=\\sqrt{(3/5)^2+(4/5)^2}=\\sqrt{9/25+16/25}=\\sqrt{25/25}=1$. ✓ Richtung: $(3/5,4/5)$ zeigt in dieselbe Richtung wie $(3,4)$ (positiver Skalar verändert Richtung nicht).

**Typischer Fehler:** Durch eine **Komponente** teilen ($a/a_x$) statt durch den **Betrag** ($a/|\\vec{a}|$). Oder durch die Summe der Komponenten teilen — Manhattan-Norm statt euklidischer.`,
          [
            'Formel: $\\hat{e}=\\vec{a}/|\\vec{a}|$.',
            'Erst $|\\vec{a}|$ ausrechnen — dann durch diese Zahl alle Komponenten teilen.',
            'Hier $3$-$4$-$5$-Tripel: $|\\vec{a}|=5$.',
          ],
          {
            1: '$(3,4)$ hat Länge $5$, nicht $1$. Es ist also kein Einheitsvektor — du musst noch durch $|\\vec a|=5$ teilen.',
            2: 'Du hast jede Komponente durch sich selbst geteilt, das ergibt immer $(1,1)$ — egal welcher Vektor. Aber $(1,1)$ hat Länge $\\sqrt{2}\\ne 1$ und zeigt nicht mehr in dieselbe Richtung wie $\\vec{a}$.',
            3: 'Die **Summe** der Komponenten ist die Manhattan-Norm — die Standardformel verlangt aber den **Betrag** (Pythagoras): $|\\vec{a}|=\\sqrt{9+16}=5$, nicht $7$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),

      tag(
        ni(
          'Berechne die $y$-Komponente des Einheitsvektors zu $\\vec{a}=(8,\\,6)$ und runde auf 3 Nachkommastellen.',
          0.6, 0.001, '',
          `**Ansatz:** $\\hat{e}=\\vec{a}/|\\vec{a}|$ — auf jede Komponente einzeln anwenden.

**Rechnung:** $|\\vec{a}|=\\sqrt{64+36}=\\sqrt{100}=10$. $\\hat{e}=(8/10,\\,6/10)=(0{,}8,\\,0{,}6)$. $y$-Komponente: $\\mathbf{0{,}6}$.

**Probe:** $|\\hat{e}|=\\sqrt{0{,}64+0{,}36}=\\sqrt{1}=1$ — Länge stimmt. ✓ Außerdem $6$-$8$-$10$ ist verdoppeltes $3$-$4$-$5$-Tripel.

**Typischer Fehler:** Durch $a_y=6$ statt durch $|\\vec{a}|=10$ teilen. Oder Komponenten vertauschen (vergessen, dass das eine $y$-Komponente ist) — dann liefert man die $x$-Komponente $0{,}8$ ab.`,
          [
            'Formel: $\\hat{e}_y = a_y / |\\vec{a}|$.',
            'Erst $|\\vec{a}|$ via Pythagoras berechnen — hier $\\sqrt{64+36}$.',
            'Dann $a_y$ durch diesen Wert teilen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),

      tag(
        mc(
          'Eine Schülerin sucht den Einheitsvektor zu $\\vec{a}=(0,\\,4)$ und rechnet $\\hat{e}=(0/4,\\,4/4)=(0,\\,1)$. Sie hat das Ergebnis zwar richtig, aber den **falschen Weg** genommen. Welche Aussage trifft den Fehler in der Methode?',
          [
            'Sie hat durch die Komponente $a_y=4$ statt durch den Betrag $|\\vec{a}|$ geteilt — das funktioniert hier nur zufällig, weil $|\\vec{a}|=4=a_y$. Bei $\\vec{a}=(3,4)$ würde dieselbe Methode falsch enden.',
            'Sie hat richtig durch den Betrag geteilt — nur die Schreibweise ist ungewöhnlich.',
            'Sie hat die Komponenten getauscht — der korrekte Einheitsvektor wäre $(1,0)$.',
            'Sie hätte gar keinen Einheitsvektor bilden müssen — bei einer Null-Komponente ist die Operation nicht definiert.',
          ],
          0,
          `**Ansatz:** Methode prüfen — nicht nur Endergebnis. Korrekt ist immer $\\hat{e}=\\vec{a}/|\\vec{a}|$, **nicht** $\\vec{a}$ durch eine einzelne Komponente.

**Rechnung:** Hier $|\\vec{a}|=\\sqrt{0+16}=4$. $\\hat{e}=(0/4,\\,4/4)=(0,1)$. Zufall: $|\\vec{a}|=a_y=4$, daher liefert „durch $a_y$ teilen" dasselbe Ergebnis wie „durch Betrag teilen".

**Probe:** Gegenbeispiel $\\vec{a}=(3,4)$: $|\\vec{a}|=5$. Korrekt: $\\hat{e}=(3/5,4/5)$. Falsch (durch $a_y=4$): $(3/4,1)$ — das hat Länge $\\sqrt{9/16+1}=\\sqrt{25/16}=5/4\\ne 1$. Methode versagt also bei nicht-zufälligen Vektoren.

**Typischer Fehler:** Zufallstreffer als bewährte Methode ablegen. Wer aus der Methode lernt, dass „durch eine Komponente teilen" funktioniert, scheitert beim nächsten Vektor. Stets durch den **Betrag** teilen.`,
          [
            'Frag: Wäre die Methode bei jedem Vektor erfolgreich — oder nur bei diesem speziellen?',
            'Test mit $\\vec{a}=(3,4)$: liefert „durch Komponente teilen" einen Einheitsvektor?',
            'Korrekt ist und bleibt: $\\hat{e}=\\vec{a}/|\\vec{a}|$.',
          ],
          {
            1: 'Die Methode „durch eine Komponente teilen" ist **nicht** dasselbe wie „durch den Betrag teilen" — sie liefert hier nur zufällig dasselbe Ergebnis. Bei anderen Vektoren versagt sie.',
            2: 'Der korrekte Einheitsvektor zu $(0,4)$ ist $(0,1)$ — die Schülerin hat richtig, aber aus dem falschen Grund. Komponenten zu tauschen wäre eine zusätzliche Modifikation.',
            3: 'Einheitsvektor ist für **jeden** $\\vec{a}\\ne\\vec{0}$ definiert — auch wenn einzelne Komponenten $0$ sind. Verboten ist nur der Nullvektor.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['einheitsvektor'] },
      ),

      tag(
        ni(
          'Bilde einen Vektor der Länge $7$ in derselben Richtung wie $\\vec{a}=(3,\\,4)$. Wie groß ist die $x$-Komponente dieses Vektors?',
          4.2, 0.001, '',
          `**Ansatz:** Vektor mit Länge $L$ in Richtung $\\vec{a}$: $L\\cdot\\hat{e}_a = L\\cdot\\vec{a}/|\\vec{a}|$.

**Rechnung:** $|\\vec{a}|=\\sqrt{9+16}=5$. $\\hat{e}_a=(3/5,\\,4/5)$. Skaliert mit $L=7$: $7\\hat{e}_a=(7\\cdot 3/5,\\;7\\cdot 4/5)=(21/5,\\,28/5)=(4{,}2,\\,5{,}6)$. $x$-Komponente: $\\mathbf{4{,}2}$.

**Probe:** Länge prüfen: $|7\\hat{e}_a|=\\sqrt{4{,}2^2+5{,}6^2}=\\sqrt{17{,}64+31{,}36}=\\sqrt{49}=7$. ✓

**Typischer Fehler:** Direkt $7\\vec{a}=(21,28)$ rechnen — das hat Länge $7\\cdot|\\vec{a}|=35$, nicht $7$. Erst muss man auf den Einheitsvektor normieren, dann mit $L$ skalieren.`,
          [
            'Strategie: Länge $L$ in Richtung $\\vec{a}$ = $L\\cdot\\hat{e}_a$.',
            'Schritt 1: $|\\vec{a}|$ berechnen, Schritt 2: $\\hat{e}_a=\\vec{a}/|\\vec{a}|$, Schritt 3: $\\hat{e}_a$ mit $L$ skalieren.',
            'Hier: $|\\vec{a}|=5$, $\\hat{e}_a=(3/5,4/5)$, dann $7\\cdot 3/5=21/5$.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['einheitsvektor', 'skalar-mul'] },
      ),

      tag(
        ni(
          'Berechne die $z$-Komponente des Einheitsvektors zu $\\vec{a}=(1,\\,2,\\,2)$ und runde auf 3 Nachkommastellen.',
          0.667, 0.001, '',
          `**Ansatz:** $\\hat{e}=\\vec{a}/|\\vec{a}|$ — gilt auch in 3D.

**Rechnung:** $|\\vec{a}|=\\sqrt{1+4+4}=\\sqrt{9}=3$. $\\hat{e}=(1/3,\\,2/3,\\,2/3)\\approx(0{,}333,\\,0{,}667,\\,0{,}667)$. $z$-Komponente: $\\mathbf{2/3\\approx 0{,}667}$.

**Probe:** Längencheck $|\\hat{e}|=\\sqrt{1/9+4/9+4/9}=\\sqrt{9/9}=1$. ✓

**Typischer Fehler:** Wurzel zu früh ziehen ($\\sqrt{1}+\\sqrt{4}+\\sqrt{4}=5$ statt $\\sqrt{9}=3$) — die Wurzel kommt **nach** der Summenbildung, nicht vorher.`,
          [
            'Auch in 3D: $\\hat{e}=\\vec{a}/|\\vec{a}|$ unverändert.',
            '$|\\vec{a}|$ via 3D-Pythagoras: $\\sqrt{1+4+4}$.',
            '$z$-Komponente von $\\hat{e}$ ist $a_z/|\\vec{a}|$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['einheitsvektor', 'betrag'] },
      ),
    ],

    // ===== Sub-Goal 3 — Tech-Größen (Skalar vs. Vektor in Anwendungen) =====
    3: [
      tag(
        tf(
          'Die Beschleunigung $\\vec{a}$ eines Fahrzeugs ist ein Vektor — sie hat Betrag (in $\\text{m/s}^2$) und Richtung (z. B. tangential zur Fahrbahn).',
          true,
          `**Ansatz:** Beschleunigung ist Änderungsrate der Geschwindigkeit — und Geschwindigkeit ist ein Vektor.

**Rechnung:** $\\vec{a}=\\mathrm{d}\\vec{v}/\\mathrm{d}t$. Da $\\vec{v}$ Richtung trägt, trägt auch $\\vec{a}$ Richtung. Beispiel: Bremsen = Beschleunigung **gegen** die Fahrtrichtung; Kurvenfahrt mit konstantem Tempo = Beschleunigung **senkrecht zur Geschwindigkeit** (Zentripetalbeschleunigung).

**Probe:** Newton-Axiom $\\vec{F}=m\\vec{a}$ — Kraft ist Vektor, Masse ist Skalar, daher muss $\\vec{a}$ ein Vektor sein. ✓

**Typischer Fehler:** Beschleunigung mit Geschwindigkeitsbetrag verwechseln und auf den Skalar $|\\vec{a}|$ ($\\text{m/s}^2$-Wert ohne Richtung) reduzieren — das ist nur der Betrag, nicht die ganze physikalische Größe.`,
          [
            'Beschleunigung = Änderung der Geschwindigkeit pro Zeit.',
            'Geschwindigkeit ist Vektor — also ist auch deren Änderung ein Vektor.',
            'Indikator: Hat „Beschleunigung nach links" einen Sinn? Ja — also Vektor.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        matching(
          'Ordne jeder physikalisch-technischen Größe die korrekte Klassifikation samt typischer Notation zu.',
          [
            { left: 'Drehmoment $\\vec{M}=\\vec{r}\\times\\vec{F}$', right: 'Vektor — Größe und Drehachsenrichtung' },
            { left: 'Massendichte $\\rho$ in $\\text{kg/m}^3$', right: 'Skalar — Materialeigenschaft, richtungslos' },
            { left: 'Schwerkraft $\\vec{F}_G=m\\vec{g}$', right: 'Vektor — Betrag $mg$, Richtung zum Erdmittelpunkt' },
            { left: 'Druck $p=F/A$ in $\\text{Pa}$', right: 'Skalar — Kraft pro Fläche, Zahlenwert' },
          ],
          `**Ansatz:** Pro Größe fragen: „Ist eine räumliche Richtung sinnvoll?"

**Rechnung:** Drehmoment ist klassischer Pseudovektor (Richtung = Drehachse via Rechte-Hand-Regel). Schwerkraft zeigt nach unten — Vektor. Massendichte (Stoffeigenschaft) und Druck (Kraft pro Fläche) sind richtungslos — Skalare.

**Probe:** Newton-Gleichungen sind dimensions- und richtungs-konsistent: $\\vec{F}_G=m\\vec{g}$ links Vektor, rechts Skalar mal Vektor → Vektor ✓. $p=F/A$: Skalar = Skalar/Skalar ✓.

**Typischer Fehler:** Druck mit Kraft verwechseln — Druck ist eine skalare Spannung, Kraft ein Vektor. Oder Drehmoment als Skalar behandeln (häufig: man rechnet nur mit dem Betrag $|\\vec{M}|$, vergisst aber die Richtung der Drehachse).`,
          [
            'Frage pro Begriff: „Hat es eine räumliche Richtung?"',
            'Hilft der Einheit zu folgen: $\\text{kg/m}^3$, $\\text{Pa}$ → meist Skalare; $\\text{N}$, $\\text{Nm}$ → meist Vektoren.',
            'Auch Pseudovektoren (Drehmoment, Drehimpuls) sind Vektoren — sie zeigen entlang einer Drehachse.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        mc(
          'Auf einer Werkstatt-Aushang steht: „Werkstück $W_1$: Gewicht $5\\,\\text{kg}$." Was ist physikalisch falsch — und wie wäre es korrekt formuliert?',
          [
            '$\\text{kg}$ ist Einheit der **Masse** (Skalar). Die Gewichtskraft (Vektor) hätte Einheit Newton: $|\\vec{F}_G|=m\\cdot g\\approx 5\\cdot 9{,}81\\,\\text{N}\\approx 49{,}1\\,\\text{N}$. Korrekt: „Masse $5\\,\\text{kg}$" oder „Gewichtskraft $\\approx 49{,}1\\,\\text{N}$".',
            'Nichts ist falsch — „Gewicht" und „Masse" sind im Maschinenbau dasselbe.',
            'Falsch ist nur die Einheit: korrekt wäre „Gewicht $5\\,\\text{N}$".',
            'Falsch ist die Größenordnung: Werkstücke wiegen üblicherweise mehrere $100\\,\\text{kg}$.',
          ],
          0,
          `**Ansatz:** Trennung Masse $m$ (Skalar in $\\text{kg}$) von Gewichtskraft $\\vec{F}_G$ (Vektor in $\\text{N}$) konsequent durchhalten.

**Rechnung:** $\\vec{F}_G=m\\vec{g}$. Mit $m=5\\,\\text{kg}$ und $|\\vec{g}|\\approx 9{,}81\\,\\text{m/s}^2$ ergibt sich $|\\vec{F}_G|\\approx 49{,}1\\,\\text{N}$. Die Aussage „Gewicht $5\\,\\text{kg}$" mischt umgangssprachlich Masse und Gewicht — physikalisch ist das eine Größenverwechslung.

**Probe:** Auf dem Mond ändert sich $|\\vec{g}|\\approx 1{,}62\\,\\text{m/s}^2$ — die Masse bleibt $5\\,\\text{kg}$, die Gewichtskraft sinkt auf $\\approx 8{,}1\\,\\text{N}$. Das zeigt: Masse und Gewichtskraft sind unterschiedliche Größen.

**Typischer Fehler:** Umgangssprachliche Identifikation („Mein Gewicht ist $80\\,\\text{kg}$") in technische Texte übernehmen. Im Maschinenbau muss zwischen Masse (Skalar, kg) und Gewichtskraft (Vektor, N) konsequent unterschieden werden.`,
          [
            'Welche Einheit gehört zur Masse, welche zur (Gewichts-)Kraft?',
            'Newton-Definition: $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$ — Kraft hat eine ganz andere Einheit als Masse.',
            'Alltagssprache vs. Technik: „Gewicht $5\\,\\text{kg}$" ist umgangssprachlich, fachlich falsch.',
          ],
          {
            1: 'Genau diese Verwechslung wollten wir aufdecken — Masse (Skalar) und Gewichtskraft (Vektor) sind verschiedene physikalische Größen mit verschiedenen Einheiten.',
            2: '„Gewicht $5\\,\\text{N}$" wäre mit der falschen Größenordnung formuliert (entspricht $\\approx 0{,}5\\,\\text{kg}$). Das eigentliche Problem ist die Verwechslung der Größe selbst, nicht nur der Zahlenwert.',
            3: 'Größenordnung ist nicht der Punkt — auch ein $5\\,\\text{kg}$-Werkstück existiert. Der Fehler liegt im Vermischen von Masse und Gewichtskraft.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        sorting(
          'Bringe die Schritte zur Berechnung der Gewichtskraft eines Bauteils mit gegebener Masse in die richtige Reihenfolge.',
          [
            'Masse $m$ aus der Aufgabenstellung als Skalar identifizieren (in $\\text{kg}$).',
            'Erdbeschleunigung als Vektor $\\vec{g}\\approx(0,\\,0,\\,-9{,}81)\\,\\text{m/s}^2$ ansetzen (Richtung: zum Erdmittelpunkt).',
            'Gewichtskraft als Skalarmultiplikation $\\vec{F}_G=m\\cdot\\vec{g}$ bilden — Skalar mal Vektor ergibt Vektor.',
            'Betrag $|\\vec{F}_G|=m\\cdot g$ ($g\\approx 9{,}81\\,\\text{m/s}^2$) für skalare Anwendungen ablesen.',
          ],
          [0, 1, 2, 3],
          `**Ansatz:** Zuerst Skalare und Vektoren in der Aufgabe sauber identifizieren, dann gemäß Newton-Formel kombinieren.

**Rechnung:** Schritt 1 stellt die skalare Größe sicher (Masse). Schritt 2 fixiert die vektorielle Komponente (Erdbeschleunigung mit Richtung). Schritt 3 wendet Skalar-mal-Vektor an. Schritt 4 reduziert das Vektor-Ergebnis auf den Betrag, falls nur dieser gefragt ist.

**Probe:** Beispiel $m=5\\,\\text{kg}$: $\\vec{F}_G=5\\cdot(0,0,-9{,}81)\\,\\text{N}=(0,0,-49{,}05)\\,\\text{N}$, Betrag $\\approx 49{,}1\\,\\text{N}$.

**Typischer Fehler:** Direkt $|\\vec{F}_G|=m\\cdot g$ rechnen, ohne das vektorielle Modell zu klären. Im 1D-Fall reicht das, aber bei mehreren Kräften (Hangabtrieb, Seilkräfte) muss man die Richtung kennen.`,
          [
            'Pädagogische Logik: Größen klassifizieren → Modell ansetzen → Operation anwenden → Endwert ablesen.',
            'Skalar und Vektor müssen vor der Operation als solche erkannt sein.',
            'Erst der vektorielle Ansatz, dann die skalare Vereinfachung — nicht umgekehrt.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['tech-groessen'] },
      ),

      tag(
        tf(
          'Druck $p$ in einer hydraulischen Anlage ist ein **Skalar** — er hat zwar eine Einheit ($\\text{Pa}=\\text{N/m}^2$), aber keine räumliche Richtung.',
          true,
          `**Ansatz:** Druck = Kraft pro Fläche. Skalar oder Vektor entscheidet die Richtungs-Frage.

**Rechnung:** $p=F_\\perp/A$ — Kraftbetrag senkrecht zur Fläche durch Fläche. Das Ergebnis ist eine Zahl mit Einheit. Frage: „Druck nach links"? Sinnlos — der Druck wirkt allseitig (Pascal'sches Gesetz). Daher Skalar.

**Probe:** In einem geschlossenen Hydrauliksystem ist der Druck überall gleich groß und allseitig — wäre Druck ein Vektor mit Richtung, hätte das keinen Sinn. Stattdessen: aus dem skalaren Druck $p$ entsteht ein Vektor $\\vec{F}=p\\cdot A\\cdot\\hat{n}$ erst durch Wahl einer Fläche mit Normalvektor $\\hat{n}$.

**Typischer Fehler:** Druck mit Kraft verwechseln — Kraft ist ein Vektor, Druck eine richtungslose Spannung. Oder den Spannungstensor (Tensor 2. Stufe) mit dem Druck (Skalar) gleichsetzen — der Spannungstensor hat tensorielle Struktur, Druck ist nur sein hydrostatischer Anteil.`,
          [
            'Pascalsches Gesetz: Druck wirkt in einem ruhenden Fluid allseitig gleich.',
            'Frage nach Richtung: Hat „Druck nach Norden" einen Sinn? Nein.',
            'Druck $\\rightarrow$ Kraft auf eine konkrete Fläche entsteht erst, wenn man den Flächen-Normalvektor anwendet.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['tech-groessen'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-2: Skalarprodukt
  // SG0: Komponentenform · SG1: Winkelform + Arbeit · SG2: Orthogonalität · SG3: Projektion
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-2': {
    // ===== Sub-Goal 0 — Komponentenform $\vec a\cdot\vec b=\sum a_i b_i$ =====
    0: [
      tag(
        tf(
          'Das Skalarprodukt zweier Vektoren ist eine **Zahl** (Skalar) — kein Vektor.',
          true,
          `**Ansatz:** Definition merken: „Skalar"-Produkt — der Name verrät die Antwort.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=a_xb_x+a_yb_y+a_zb_z$ — Summe von Produkten reeller Zahlen ergibt eine reelle Zahl. Beispiel $\\vec{a}=(2,3),\\vec{b}=(4,-1)$: $\\vec{a}\\cdot\\vec{b}=8-3=5$ — ein Skalar.

**Probe:** Auf einen Vektor angewendete Operationen liefern entweder einen Vektor (Addition, Skalarmul, Kreuzprodukt) oder einen Skalar (Betrag, Skalarprodukt). Das Skalarprodukt gehört zur zweiten Klasse.

**Typischer Fehler:** Mit dem komponentenweisen Produkt verwechseln: $(a_xb_x,\\,a_yb_y)$ liefert ein Tupel — das ist aber **kein** definiertes Vektorprodukt. Das echte Skalarprodukt summiert weiter zu einer Zahl.`,
          [
            'Hör auf den Namen: „Skalar"-Produkt.',
            'Was kommt heraus, wenn man Zahlen multipliziert und summiert? Eine Zahl.',
            'Test: Hat das Ergebnis Komponenten? Wenn nein → Skalar.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['sp-skalar'] },
      ),

      tag(
        ni(
          'Berechne $\\vec{a}\\cdot\\vec{b}$ für $\\vec{a}=(3,\\,-1,\\,2)$ und $\\vec{b}=(2,\\,4,\\,5)$.',
          12, 0, '',
          `**Ansatz:** Komponentenform: $\\vec{a}\\cdot\\vec{b}=a_xb_x+a_yb_y+a_zb_z$.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=3\\cdot 2+(-1)\\cdot 4+2\\cdot 5=6-4+10=12$.

**Probe:** Vorzeichen-Check: zwei positive Beiträge ($6$, $10$), einer negativ ($-4$). Summe positiv → spitzer Winkel zwischen den Vektoren.

**Typischer Fehler:** Negative Komponente ignorieren ($-1\\cdot 4 = +4$ statt $-4$) — das gibt $20$. Oder die $z$-Komponente vergessen, falls man unbewusst in 2D rechnet — das gibt $2$.`,
          [
            'Komponentenform: pro Achse multiplizieren, dann summieren.',
            'In 3D drei Summanden: $a_xb_x+a_yb_y+a_zb_z$.',
            'Vorzeichen mitnehmen — $(-1)\\cdot 4 = -4$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['sp-komp'] },
      ),

      tag(
        mc(
          'Ein Schüler schreibt für $\\vec{a}=(2,\\,3)$ und $\\vec{b}=(4,\\,1)$: „$\\vec{a}\\cdot\\vec{b}=(2\\cdot 4,\\,3\\cdot 1)=(8,\\,3)$." Welche Antwort ist korrekt — und was ist der Fehler?',
          [
            '$\\vec{a}\\cdot\\vec{b}=11$ — der Schüler hat das **komponentenweise Produkt** notiert, statt die Summe zu bilden. Korrekt: $a_xb_x+a_yb_y=8+3=11$ (Skalar).',
            '$\\vec{a}\\cdot\\vec{b}=(8,\\,3)$ — der Schüler hat richtig gerechnet, das Ergebnis ist ein Vektor.',
            '$\\vec{a}\\cdot\\vec{b}=14$ — er hat $a_xb_y+a_yb_x=2\\cdot 1+3\\cdot 4=14$ gerechnet.',
            '$\\vec{a}\\cdot\\vec{b}=10$ — er hat alle vier Komponenten addiert: $2+3+4+1=10$.',
          ],
          0,
          `**Ansatz:** Komponentenweises Produkt $(a_xb_x,a_yb_y)$ ist **kein** Skalarprodukt — die Definition verlangt zusätzlich die **Summe**.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=2\\cdot 4+3\\cdot 1=8+3=\\mathbf{11}$. Der Schüler hat den letzten Schritt — die Summenbildung — vergessen.

**Probe:** Ergebnis muss Skalar sein, kein Tupel. $11$ ist eine Zahl, $(8,3)$ ist eines nicht. Schon das Format zeigt den Fehler.

**Typischer Fehler:** Die zwei Schritte „multiplizieren" und „summieren" vermischen oder einen davon weglassen. Im Kreuzprodukt entsteht ein Vektor, im Skalarprodukt entsteht eine Zahl.`,
          [
            'Welches Ergebnisformat verlangt das Skalarprodukt?',
            'Zwei Schritte: $a_ib_i$ pro Achse → dann **summieren**.',
            'Hier: $8+3$ als Schlussschritt nicht vergessen.',
          ],
          {
            1: 'Ein Tupel $(8,3)$ ist genau der Fehler des Schülers — das **komponentenweise Produkt**. Das echte Skalarprodukt summiert die Produkte zu einer Zahl: $8+3=11$.',
            2: 'Die Formel $a_xb_y+a_yb_x$ existiert nicht in der Standard-Definition. Korrekt: $a_xb_x+a_yb_y=8+3=11$ — gleiche Indizes pro Summand.',
            3: 'Alle Komponenten zu addieren ($2+3+4+1$) ignoriert die paarweise Multiplikation komplett. Skalarprodukt verlangt **erst** $a_ib_i$, **dann** die Summe.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['sp-komp', 'sp-skalar'] },
      ),

      tag(
        ni(
          'Gegeben: $\\vec{a}=(2,\\,1)$, $\\vec{b}=(3,\\,2)$ und $\\vec{c}=(1,\\,-1)$. Berechne $\\vec{a}\\cdot(\\vec{b}+\\vec{c})$ — nutze das Distributivgesetz, falls hilfreich.',
          9, 0, '',
          `**Ansatz:** Zwei gleichwertige Wege — direkt rechnen oder via Distributivgesetz $\\vec{a}\\cdot(\\vec{b}+\\vec{c})=\\vec{a}\\cdot\\vec{b}+\\vec{a}\\cdot\\vec{c}$.

**Rechnung:** Weg A (direkt): $\\vec{b}+\\vec{c}=(3+1,\\,2-1)=(4,\\,1)$. $\\vec{a}\\cdot(4,1)=2\\cdot 4+1\\cdot 1=8+1=9$. Weg B (distributiv): $\\vec{a}\\cdot\\vec{b}=2\\cdot 3+1\\cdot 2=8$, $\\vec{a}\\cdot\\vec{c}=2\\cdot 1+1\\cdot(-1)=1$. Summe $8+1=9$.

**Probe:** Beide Wege liefern $9$ — das bestätigt die Distributivität des Skalarprodukts. ✓

**Typischer Fehler:** Distributivgesetz mit Vektor-Multiplikation verwechseln und „$\\vec{a}\\cdot(\\vec{b}+\\vec{c})=(\\vec{a}\\cdot\\vec{b})+\\vec{c}$" rechnen — das wäre Skalar plus Vektor (nicht definiert). Skalarprodukt ist distributiv **innerhalb** der Klammer.`,
          [
            'Zwei Wege: erst $\\vec{b}+\\vec{c}$ ausrechnen, dann mit $\\vec{a}$ skalarprodukten — oder Distributivgesetz nutzen.',
            'Distributiv: $\\vec{a}\\cdot(\\vec{b}+\\vec{c})=\\vec{a}\\cdot\\vec{b}+\\vec{a}\\cdot\\vec{c}$.',
            'Beide Wege müssen dasselbe ergeben — das ist auch eine Probe.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['sp-komp', 'sp-regeln'] },
      ),

      tag(
        ni(
          'Berechne das Skalarprodukt $\\vec{a}\\cdot\\vec{b}$ für $\\vec{a}=(4,\\,-3)$ und $\\vec{b}=(2,\\,5)$.',
          -7, 0, '',
          `**Ansatz:** $\\vec{a}\\cdot\\vec{b}=a_xb_x+a_yb_y$.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=4\\cdot 2+(-3)\\cdot 5=8-15=-7$.

**Probe:** Vorzeichen-Plausibilität: SP negativ → stumpfer Winkel ($\\varphi>90°$). $\\vec{a}=(4,-3)$ zeigt nach rechts unten, $\\vec{b}=(2,5)$ nach rechts oben — die Vektoren sind „gegenläufig" in $y$, daher negativer Beitrag aus $y$-Komponenten überwiegt. ✓

**Typischer Fehler:** Doppeltes Vorzeichen verlieren — $-3\\cdot 5=-15$, nicht $+15$.`,
          [
            'Komponentenform: $a_xb_x+a_yb_y$.',
            'Vorzeichen: ein negativer Faktor → negativer Beitrag.',
            '$8 + (-15) = 8-15 = -7$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['sp-komp'] },
      ),
    ],

    // ===== Sub-Goal 1 — Winkelform $\vec a\cdot\vec b=|\vec a||\vec b|\cos\varphi$ + Arbeit =====
    1: [
      tag(
        tf(
          'Wenn $\\vec{a}\\cdot\\vec{b}<0$ ist (für $\\vec{a},\\vec{b}\\ne\\vec{0}$), schließen die Vektoren einen stumpfen Winkel ein — also $\\varphi>90°$.',
          true,
          `**Ansatz:** Vorzeichen-Interpretation aus der Winkelform $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi$.

**Rechnung:** Da $|\\vec{a}|>0$ und $|\\vec{b}|>0$, hängt das Vorzeichen allein an $\\cos\\varphi$. $\\cos\\varphi<0$ tritt im Bereich $90°<\\varphi\\le 180°$ auf — also stumpfe Winkel (inkl. antiparallel).

**Probe:** Beispiel $\\vec{a}=(1,0),\\vec{b}=(-1,0)$: SP $=-1$, Winkel $180°$ ✓. Beispiel $\\vec{a}=(1,0),\\vec{b}=(-1,1)$: SP $=-1$, Winkel $135°$ ✓.

**Typischer Fehler:** Stumpf und spitz vertauschen: spitzer Winkel ($\\varphi<90°$) hat $\\cos\\varphi>0$, also SP positiv. Negatives SP heißt **stumpf**.`,
          [
            'Vorzeichen-Tabelle: SP $>0$ spitz, $=0$ rechtwinklig, $<0$ stumpf.',
            'Folgt aus $\\cos\\varphi$: $\\cos$ wechselt das Vorzeichen bei $\\varphi=90°$.',
            'Frage: Wo ist $\\cos\\varphi<0$? Im Bereich $\\varphi\\in(90°,180°]$.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['sp-winkel', 'sp-vorzeichen'] },
      ),

      tag(
        mc(
          'Gegeben sind $|\\vec{a}|=4$, $|\\vec{b}|=3$ und der eingeschlossene Winkel $\\varphi=60°$. Wie groß ist $\\vec{a}\\cdot\\vec{b}$?',
          ['$6$', '$12$', '$10{,}39$', '$0$'],
          0,
          `**Ansatz:** Winkelform: $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos\\varphi$.

**Rechnung:** $\\cos 60°=0{,}5$. $\\vec{a}\\cdot\\vec{b}=4\\cdot 3\\cdot 0{,}5=6$.

**Probe:** Plausibel — SP $=6$, also positiv, also spitzer Winkel. $60°<90°$ ✓.

**Typischer Fehler:** $\\cos$ vergessen ($4\\cdot 3=12$, das wäre Parallelität bei $\\varphi=0°$). Oder $\\cos 30°=\\sqrt{3}/2\\approx 0{,}866$ statt $\\cos 60°=0{,}5$ (Standardwinkel verwechselt).`,
          [
            'Welche Formel verbindet Beträge und Winkel mit dem Skalarprodukt?',
            'Standardwinkel: $\\cos 0°=1,\\cos 30°=\\sqrt 3/2,\\cos 45°=\\sqrt 2/2,\\cos 60°=1/2,\\cos 90°=0$.',
            'Setz Werte ein: $4\\cdot 3\\cdot 0{,}5$.',
          ],
          {
            1: '$12$ ist $|\\vec{a}|\\cdot|\\vec{b}|$ ohne den $\\cos$-Faktor — das wäre nur bei $\\varphi=0°$ (Parallelität) richtig. Hier muss $\\cos 60°=0{,}5$ multipliziert werden.',
            2: '$10{,}39\\approx 12\\cdot 0{,}866=12\\cos 30°$ — du hast $\\cos 30°$ statt $\\cos 60°$ genommen. Standardwinkel: $\\cos 60°=0{,}5$, nicht $\\cos 30°$.',
            3: '$0$ wäre nur bei $\\varphi=90°$ (Orthogonalität). Bei $60°$ ist $\\cos\\varphi=0{,}5\\ne 0$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['sp-winkel'] },
      ),

      tag(
        ni(
          'Gegeben: $\\vec{a}\\cdot\\vec{b}=12$, $|\\vec{a}|=6$, $|\\vec{b}|=4$. Berechne den eingeschlossenen Winkel $\\varphi$ in Grad.',
          60, 0.5, '°',
          `**Ansatz:** Winkelformel umstellen: $\\cos\\varphi=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}$.

**Rechnung:** $\\cos\\varphi=\\dfrac{12}{6\\cdot 4}=\\dfrac{12}{24}=0{,}5$. $\\varphi=\\arccos(0{,}5)=60°$.

**Probe:** Test mit $\\cos 60°=0{,}5$ ✓. Außerdem SP $>0$ → spitzer Winkel — passt zu $60°<90°$.

**Typischer Fehler:** Im Nenner $|\\vec{a}|+|\\vec{b}|$ statt $|\\vec{a}|\\cdot|\\vec{b}|$ verwenden — gäbe $\\cos\\varphi=12/10=1{,}2$, was unmöglich ist (Wertebereich von $\\cos$ ist $[-1,1]$).`,
          [
            'Stell die Winkelform nach $\\cos\\varphi$ um.',
            'Nenner ist das **Produkt** der Beträge.',
            '$\\arccos(0{,}5)$ — Standardwinkel wiedererkennen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['sp-winkel'] },
      ),

      tag(
        mc(
          'Ein Studierender hat $\\vec{a}\\cdot\\vec{b}=-3$ ausgerechnet und schließt: „Die Vektoren stehen senkrecht aufeinander." Welche Aussage trifft den Fehler?',
          [
            'Senkrechtigkeit verlangt $\\vec{a}\\cdot\\vec{b}=0$ (genau null), nicht negativ. SP $=-3<0$ heißt: stumpfer Winkel ($\\varphi>90°$).',
            'Die Aussage ist korrekt — auch negative SP-Werte zeigen Orthogonalität an.',
            'Negatives SP bedeutet, die Vektoren sind antiparallel ($\\varphi=180°$).',
            'Der Studierende hat den Betrag vergessen — $|\\vec{a}\\cdot\\vec{b}|=3>0$ widerspricht Orthogonalität.',
          ],
          0,
          `**Ansatz:** Vorzeichen-Tabelle des Skalarprodukts genau lesen — nur **exakt null** signalisiert Orthogonalität.

**Rechnung:** SP $=0\\Leftrightarrow\\varphi=90°$ (orthogonal). SP $<0\\Leftrightarrow 90°<\\varphi\\le 180°$ (stumpf). Hier: SP $=-3<0$ → stumpf, nicht senkrecht.

**Probe:** Berechnen wir den Winkel, falls $|\\vec{a}|=2$ und $|\\vec{b}|=3$: $\\cos\\varphi=-3/6=-0{,}5$ → $\\varphi=120°$. Stumpf bestätigt. ✓

**Typischer Fehler:** „Negatives SP" als „bedeutsam ungleich null" interpretieren und mit „rechtwinklig" verwechseln. Orthogonalität ist eine **scharfe Bedingung**: SP exakt null.`,
          [
            'Welche Bedingung ist gleichbedeutend mit „senkrecht"?',
            'Vorzeichen-Tabelle: SP $>0$ spitz, $=0$ rechtwinklig, $<0$ stumpf.',
            'Negatives SP ist nicht null — also nicht senkrecht.',
          ],
          {
            1: 'Senkrechtigkeit verlangt SP **exakt null**. SP $\\ne 0$ schließt Orthogonalität aus.',
            2: 'Antiparallel ($\\varphi=180°$) wäre der Extremfall mit SP $=-|\\vec{a}|\\cdot|\\vec{b}|$ (Minimum). Allgemein bedeutet SP $<0$ nur stumpfen Winkel — nicht zwingend antiparallel.',
            3: 'Im Skalarprodukt nimmt man keinen Betrag des Ergebnisses — das Vorzeichen trägt die geometrische Information. SP $=-3$ ist nicht dasselbe wie SP $=+3$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['sp-vorzeichen'] },
      ),

      tag(
        ni(
          'Eine Kraft $|\\vec{F}|=20\\,\\text{N}$ wird unter einem Winkel von $60°$ zur Verschiebung der Länge $|\\vec{s}|=5\\,\\text{m}$ aufgebracht. Berechne die Arbeit $W=\\vec{F}\\cdot\\vec{s}$ in Joule.',
          50, 0, 'J',
          `**Ansatz:** Winkelform der Arbeit: $W=|\\vec{F}|\\cdot|\\vec{s}|\\cdot\\cos\\varphi$ — nur die Kraftkomponente in Wegrichtung leistet Arbeit.

**Rechnung:** $W=20\\cdot 5\\cdot\\cos 60°=100\\cdot 0{,}5=50\\,\\text{J}$.

**Probe:** Aufteilung $\\vec{F}=\\vec{F}_\\parallel+\\vec{F}_\\perp$. Die Parallelkomponente $|\\vec{F}_\\parallel|=20\\cos 60°=10\\,\\text{N}$ leistet entlang $5\\,\\text{m}$: $10\\cdot 5=50\\,\\text{J}$. Die Senkrechtkomponente $|\\vec{F}_\\perp|=20\\sin 60°\\approx 17{,}3\\,\\text{N}$ leistet **keine** Arbeit (steht senkrecht zur Bewegung).

**Typischer Fehler:** $W=|\\vec{F}|\\cdot|\\vec{s}|=100\\,\\text{J}$ rechnen (Winkel ignoriert) — wäre nur bei $\\varphi=0°$ (Kraft entlang Weg) richtig. Oder $\\sin$ statt $\\cos$ verwenden.`,
          [
            'Arbeit = Kraft mal Weg mal $\\cos$ des eingeschlossenen Winkels.',
            'Standardwinkel: $\\cos 60°=0{,}5$.',
            '$20\\cdot 5\\cdot 0{,}5$.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['sp-arbeit', 'sp-winkel'] },
      ),

      tag(
        tf(
          'Wenn zwei Vektoren $\\vec{a}$ und $\\vec{b}$ einen Winkel von $90°$ einschließen, ist ihr Skalarprodukt $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|$.',
          false,
          `**Ansatz:** Winkelform: $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos\\varphi$. Bei $\\varphi=90°$ gilt $\\cos 90°=0$ — das tilgt das Produkt.

**Rechnung:** Bei $\\varphi=90°$: $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|\\cdot 0=\\mathbf{0}$. Die Behauptung „$=|\\vec{a}|\\cdot|\\vec{b}|$" gilt nur bei $\\varphi=0°$ (Parallelität, $\\cos 0°=1$).

**Probe:** $\\vec{a}=(1,0),\\vec{b}=(0,1)$: $|\\vec{a}|=|\\vec{b}|=1$. Behauptung wäre $1$, korrekt ist aber SP $=0$. Klar widerlegt.

**Typischer Fehler:** Das Maximum ($\\cos 0°=1$, parallel) und das Minimum ($\\cos 180°=-1$, antiparallel) bzw. die Null ($\\cos 90°$, orthogonal) verwechseln. $|\\vec{a}|\\cdot|\\vec{b}|$ ist die Obergrenze, $0$ der Spezialfall Orthogonalität.`,
          [
            'Setz $\\varphi=90°$ in die Winkelform ein.',
            '$\\cos 90°=0$ — der Faktor verschwindet.',
            'SP-Maximum $|\\vec{a}|\\cdot|\\vec{b}|$ erreicht man bei $\\varphi=0°$, nicht $90°$.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['sp-winkel', 'sp-vorzeichen'] },
      ),
    ],

    // ===== Sub-Goal 2 — Orthogonalität & Winkelformel =====
    2: [
      tag(
        tf(
          'Zwei Vektoren $\\vec{a},\\vec{b}\\ne\\vec{0}$ stehen senkrecht aufeinander **genau dann, wenn** $\\vec{a}\\cdot\\vec{b}=0$ gilt.',
          true,
          `**Ansatz:** Aus der Winkelform $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi$ folgt: SP $=0$ kann nur an $\\cos\\varphi=0$ liegen, da $|\\vec{a}|,|\\vec{b}|>0$.

**Rechnung:** $\\cos\\varphi=0\\iff\\varphi=90°$ (im Bereich $[0°,180°]$). Also SP $=0\\iff\\vec{a}\\perp\\vec{b}$.

**Probe:** Standard-Basisvektoren $(1,0)$ und $(0,1)$: SP $=0$, sichtbar senkrecht. ✓ Umkehrung: senkrechte Vektoren wie $(2,3)$ und $(-3,2)$: SP $=-6+6=0$. ✓

**Typischer Fehler:** Die Implikation nur in einer Richtung sehen. Tatsächlich ist es eine **Äquivalenz** — beide Richtungen gelten.`,
          [
            'Wann ist $|\\vec{a}||\\vec{b}|\\cos\\varphi=0$? Nicht, wenn die Beträge null sind.',
            '$\\cos\\varphi=0$ tritt nur bei $\\varphi=90°$ auf.',
            'Beide Richtungen prüfen: senkrecht $\\Rightarrow$ SP $=0$ und SP $=0\\Rightarrow$ senkrecht.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['sp-orthogonal'] },
      ),

      tag(
        ni(
          'Berechne den Winkel zwischen $\\vec{a}=(1,\\,2)$ und $\\vec{b}=(3,\\,1)$ in Grad. Runde auf eine Nachkommastelle.',
          45, 0.5, '°',
          `**Ansatz:** $\\cos\\varphi=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}$ — alle drei Bestandteile berechnen.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=1\\cdot 3+2\\cdot 1=5$. $|\\vec{a}|=\\sqrt{1+4}=\\sqrt 5$. $|\\vec{b}|=\\sqrt{9+1}=\\sqrt{10}$. $\\cos\\varphi=\\dfrac{5}{\\sqrt 5\\cdot\\sqrt{10}}=\\dfrac{5}{\\sqrt{50}}=\\dfrac{5}{5\\sqrt 2}=\\dfrac{1}{\\sqrt 2}\\approx 0{,}7071$. $\\varphi=\\arccos(0{,}7071)=45°$.

**Probe:** $\\cos 45°=\\sqrt 2/2=1/\\sqrt 2\\approx 0{,}7071$ ✓. Zudem SP positiv → spitzer Winkel — passt zu $45°$.

**Typischer Fehler:** $\\sqrt 5\\cdot\\sqrt{10}=\\sqrt{50}\\approx 7{,}07$ falsch addieren statt multiplizieren ($\\sqrt 5+\\sqrt{10}\\approx 5{,}40$) — Beträge werden im Nenner **multipliziert**.`,
          [
            'Drei Schritte: SP — Betrag $|\\vec{a}|$ — Betrag $|\\vec{b}|$.',
            '$\\cos\\varphi$ aus der Formel ablesen.',
            'Standardwert $1/\\sqrt 2$ entspricht $45°$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['sp-winkel-formel', 'sp-komp'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet $\\vec{a}\\cdot\\vec{b}=15$ und schließt: „Die Vektoren sind parallel." Was ist der logische Fehler?',
          [
            'Parallelität verlangt $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|$ (das Maximum). SP $>0$ zeigt nur einen spitzen Winkel an, nicht zwingend Parallelität.',
            'Der Schüler hat richtig — positives SP bedeutet immer parallele Vektoren.',
            'Parallelität verlangt $\\vec{a}\\cdot\\vec{b}<0$.',
            'Bei Parallelität ist immer $\\vec{a}\\cdot\\vec{b}=0$.',
          ],
          0,
          `**Ansatz:** Parallelität ist eine **scharfe Bedingung** — nicht „SP irgendwie groß".

**Rechnung:** $\\vec{a}\\parallel\\vec{b}\\iff\\cos\\varphi=\\pm 1\\iff\\vec{a}\\cdot\\vec{b}=\\pm|\\vec{a}|\\cdot|\\vec{b}|$. SP $=15$ ist nur dann maximal-parallel, wenn zufällig $|\\vec{a}|\\cdot|\\vec{b}|=15$ — sonst ist es ein „beliebiger spitzer Winkel".

**Probe:** Beispiel $\\vec{a}=(3,0),\\vec{b}=(5,1)$: SP $=15$, aber Beträge $3\\cdot\\sqrt{26}\\approx 15{,}3>15$ → Vektoren nicht parallel (nur fast). Konkret: $\\cos\\varphi=15/(3\\sqrt{26})\\approx 0{,}981$, $\\varphi\\approx 11{,}3°$.

**Typischer Fehler:** „Großes SP" mit „Parallel" gleichsetzen. Der korrekte Test ist: $|\\vec{a}\\cdot\\vec{b}|=|\\vec{a}|\\cdot|\\vec{b}|$ (Cauchy-Schwarz mit Gleichheit) — oder per Komponenten: $\\vec{a}=k\\vec{b}$ für ein $k$.`,
          [
            'Was ist die scharfe Bedingung für Parallelität?',
            'SP-Wertebereich: $-|\\vec{a}||\\vec{b}|\\le\\vec{a}\\cdot\\vec{b}\\le|\\vec{a}||\\vec{b}|$.',
            'Parallel = Maximum oder Minimum erreicht.',
          ],
          {
            1: 'Positives SP heißt nur, $\\cos\\varphi>0$, also $\\varphi<90°$. Das ist „spitzer Winkel" — nicht zwingend Parallelität ($\\varphi=0°$).',
            2: 'Negatives SP wäre antiparallel-tendierend (stumpfer Winkel) — auch das ist nicht Parallelität, sondern eher das Gegenteil.',
            3: 'SP $=0$ ist Orthogonalität, also genau **das Gegenteil** von Parallelität. Parallel hat SP $=\\pm|\\vec{a}|\\cdot|\\vec{b}|$ (extremal).',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['sp-orthogonal'] },
      ),

      tag(
        matching(
          'Ordne jedem Wert des Skalarprodukts die richtige Aussage über den Winkel zwischen $\\vec{a}$ und $\\vec{b}$ zu (für $\\vec{a},\\vec{b}\\ne\\vec{0}$).',
          [
            { left: '$\\vec{a}\\cdot\\vec{b}>0$', right: 'spitzer Winkel ($0°\\le\\varphi<90°$)' },
            { left: '$\\vec{a}\\cdot\\vec{b}=0$', right: 'rechter Winkel ($\\varphi=90°$, orthogonal)' },
            { left: '$\\vec{a}\\cdot\\vec{b}<0$', right: 'stumpfer Winkel ($90°<\\varphi\\le 180°$)' },
            { left: '$\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|$', right: 'parallel mit gleicher Richtung ($\\varphi=0°$)' },
          ],
          `**Ansatz:** Vier Vorzeichen-/Wert-Bereiche des Skalarprodukts ↔ vier Winkelbereiche.

**Rechnung:** SP $>0\\iff\\cos\\varphi>0\\iff\\varphi<90°$ (spitz). SP $=0\\iff\\cos\\varphi=0\\iff\\varphi=90°$ (rechtwinklig). SP $<0\\iff\\cos\\varphi<0\\iff\\varphi>90°$ (stumpf). SP-Maximum $|\\vec{a}||\\vec{b}|$ ist erreicht bei $\\cos\\varphi=1\\iff\\varphi=0°$ (parallel, gleiche Richtung).

**Probe:** Antiparallel ($\\varphi=180°$) gibt SP $=-|\\vec{a}||\\vec{b}|$ — das ist ein Spezialfall des stumpfen Bereichs (das **Minimum** von SP). Hier nicht zugeordnet, aber wichtig zu wissen.

**Typischer Fehler:** „SP $=|\\vec{a}||\\vec{b}|$" mit „nur betragsmäßig groß" verwechseln — es ist exakt das **Maximum**, das nur bei perfekter Parallelität erreicht wird.`,
          [
            'Vier Fälle: positiv, null, negativ, am Maximum.',
            'Zuordnung läuft über $\\cos\\varphi$.',
            '„parallel mit gleicher Richtung" verlangt SP-Maximum, nicht nur SP $>0$.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['sp-vorzeichen', 'sp-orthogonal'] },
      ),

      tag(
        ni(
          'Bestimme den Wert von $k$, sodass die Vektoren $\\vec{a}=(2,\\,k)$ und $\\vec{b}=(3,\\,1)$ orthogonal zueinander sind.',
          -6, 0, '',
          `**Ansatz:** Orthogonalität $\\iff\\vec{a}\\cdot\\vec{b}=0$. Komponentenform aufstellen, Gleichung nach $k$ lösen.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=2\\cdot 3+k\\cdot 1=6+k$. Setze $=0$: $6+k=0\\Rightarrow k=-6$.

**Probe:** $\\vec{a}=(2,-6),\\vec{b}=(3,1)$: $\\vec{a}\\cdot\\vec{b}=6-6=0$ ✓. Geometrisch: Steigung von $\\vec{b}$ ist $1/3$, also senkrecht dazu Steigung $-3/(\\,1\\,)=-3$. Steigung von $\\vec{a}=(2,-6)$ ist $-6/2=-3$. ✓

**Typischer Fehler:** Vorzeichen verlieren — $k=+6$ liefert $\\vec{a}\\cdot\\vec{b}=12$, also nicht orthogonal. Oder Gleichung mit $\\ne 0$ verwechseln.`,
          [
            'Orthogonalitäts-Bedingung: SP gleich null setzen.',
            'Komponenten ausschreiben: $2\\cdot 3+k\\cdot 1$.',
            'Nach $k$ auflösen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['sp-orthogonal', 'sp-komp'] },
      ),
    ],

    // ===== Sub-Goal 3 — Projektion =====
    3: [
      tag(
        tf(
          'Die vektorielle Projektion $\\vec{a}_b$ von $\\vec{a}$ auf $\\vec{b}$ ist immer parallel zu $\\vec{b}$.',
          true,
          `**Ansatz:** Formel zerlegen: $\\vec{a}_b=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}$ — die Projektion ist ein **skalares Vielfaches** von $\\vec{b}$.

**Rechnung:** $\\vec{a}_b=k\\vec{b}$ mit $k=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\in\\mathbb{R}$. Das ist genau die Definition von Parallelität — gleicher Richtung (oder Gegenrichtung, falls $k<0$).

**Probe:** $\\vec{a}=(2,3),\\vec{b}=(1,0)$: $\\vec{a}_b=2/1\\cdot(1,0)=(2,0)$ — entlang der $x$-Achse, parallel zu $\\vec{b}=(1,0)$. ✓

**Typischer Fehler:** Projektion mit dem **orthogonalen** Anteil verwechseln. Es gibt zwei Anteile: $\\vec{a}=\\vec{a}_b+\\vec{a}_\\perp$ — der erste ist parallel zu $\\vec{b}$, der zweite senkrecht.`,
          [
            'Form der Projektionsformel: skalarer Faktor mal $\\vec{b}$.',
            'Skalares Vielfaches eines Vektors $=$ paralleler Vektor.',
            'Auch bei negativem Skalar: parallel (in Gegenrichtung), nicht senkrecht.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['sp-projektion'] },
      ),

      tag(
        mc(
          'Berechne die vektorielle Projektion $\\vec{a}_b$ von $\\vec{a}=(4,\\,3)$ auf $\\vec{b}=(1,\\,0)$.',
          ['$(4,\\,0)$', '$(0,\\,3)$', '$(4,\\,3)$', '$(1,\\,0)$'],
          0,
          `**Ansatz:** Formel $\\vec{a}_b=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}$. Hier $\\vec{b}$ ist Einheitsvektor entlang $x$-Achse.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=4\\cdot 1+3\\cdot 0=4$. $|\\vec{b}|^2=1$. $\\vec{a}_b=\\dfrac{4}{1}\\cdot(1,0)=(4,\\,0)$.

**Probe:** Anteil von $\\vec{a}$ entlang $\\vec{b}$ — $\\vec{b}$ liegt auf der $x$-Achse, also bleibt nur die $x$-Komponente $4$ stehen. Der orthogonale Rest ist $\\vec{a}-\\vec{a}_b=(0,3)$ — senkrecht zu $\\vec{b}$, plausibel.

**Typischer Fehler:** Den orthogonalen Anteil $\\vec{a}_\\perp=(0,3)$ als Projektion abliefern — er ist genau das Gegenteil. Oder $\\vec{a}$ unverändert zurückgeben (keine Projektion durchgeführt).`,
          [
            'Formel: Skalarprodukt durch Quadrat-Betrag, mal $\\vec{b}$.',
            'Bei $\\vec{b}=(1,0)$ entartet das zu: $x$-Komponente von $\\vec{a}$ als $x$-Komponente, $y=0$.',
            'Probe: $\\vec{a}-\\vec{a}_b$ muss senkrecht auf $\\vec{b}$ stehen.',
          ],
          {
            1: '$(0,3)$ ist der **orthogonale** Anteil $\\vec{a}_\\perp=\\vec{a}-\\vec{a}_b$, nicht die Projektion. Die Projektion liegt immer auf der Linie von $\\vec{b}$.',
            2: '$\\vec{a}=(4,3)$ ist der ursprüngliche Vektor — du hast ihn nicht projiziert. Die Projektion auf $\\vec{b}=(1,0)$ schneidet alles weg, was nicht parallel zu $\\vec{b}$ ist.',
            3: '$(1,0)$ ist $\\vec{b}$ selbst (auch $\\hat{e}_b$, da Einheitsvektor). Die Projektion ist ein **Vielfaches** von $\\vec{b}$ — hier mit Faktor $4$, nicht $1$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 3, uses: ['sp-projektion'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet die vektorielle Projektion $\\vec{a}_b$ von $\\vec{a}=(2,\\,1)$ auf $\\vec{b}=(3,\\,4)$ als $\\vec{a}_b=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}\\,\\vec{b}=\\dfrac{10}{5}\\,(3,\\,4)=(6,\\,8)$. Was ist der Fehler?',
          [
            'Im Nenner muss $|\\vec{b}|^2$ stehen (nicht $|\\vec{b}|$). Korrekt: $\\vec{a}_b=\\dfrac{10}{25}\\,(3,\\,4)=(1{,}2;\\,1{,}6)$.',
            'Die Rechnung ist korrekt; das Ergebnis $(6,\\,8)$ ist die Projektion.',
            'Im Nenner muss $|\\vec{a}|$ statt $|\\vec{b}|$ stehen.',
            'Man muss durch das Skalarprodukt teilen, nicht multiplizieren.',
          ],
          0,
          `**Ansatz:** Formel exakt: $\\vec{a}_b=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}$ — **Quadrat** des Betrags im Nenner, nicht der Betrag selbst.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=2\\cdot 3+1\\cdot 4=10$. $|\\vec{b}|=5$, also $|\\vec{b}|^2=25$. $\\vec{a}_b=\\dfrac{10}{25}\\,(3,4)=0{,}4\\cdot(3,4)=(1{,}2;\\,1{,}6)$.

**Probe:** Längencheck: $|\\vec{a}_b|=\\sqrt{1{,}44+2{,}56}=\\sqrt 4=2$. Skalare Projektion: $|\\vec{a}|\\cos\\varphi=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}=10/5=2$. Stimmt mit $|\\vec{a}_b|=2$ überein. ✓

**Typischer Fehler:** Der Schüler vermischt zwei Formeln: die **skalare Projektion** $\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$ (Zahl) mit der **vektoriellen** $\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\,\\vec{b}$. Die Faktor-Form $\\vec{b}/|\\vec{b}|^2=\\hat{e}_b/|\\vec{b}|$ macht aus dem skalaren Anteil einen vektoriellen mit korrekter Länge.`,
          [
            'Schau die Formel genau an: $|\\vec{b}|$ oder $|\\vec{b}|^2$ im Nenner?',
            'Skalare Projektion ($\\vec{a}\\cdot\\vec{b}/|\\vec{b}|$) liefert Zahl, vektorielle ($\\vec{a}\\cdot\\vec{b}/|\\vec{b}|^2\\cdot\\vec{b}$) liefert Vektor.',
            'Längencheck: $|\\vec{a}_b|$ muss gleich der skalaren Projektion sein.',
          ],
          {
            1: 'Längencheck zeigt das Problem: $|(6,8)|=10$, aber die skalare Projektion ist $\\vec{a}\\cdot\\vec{b}/|\\vec{b}|=10/5=2$. Eine Projektion kann nie länger sein als $|\\vec{a}|=\\sqrt 5\\approx 2{,}24$ — $(6,8)$ ist zu lang.',
            2: '$|\\vec{a}|$ im Nenner gibt es weder bei skalarer noch bei vektorieller Projektion — das wäre die Projektion in **die andere Richtung** (von $\\vec{b}$ auf $\\vec{a}$), und auch die hätte $|\\vec{a}|^2$, nicht $|\\vec{a}|$.',
            3: 'Wir teilen durch eine Zahl ($|\\vec{b}|^2$), nicht durch das Skalarprodukt — das wäre dimensions-unsinnig.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['sp-projektion'] },
      ),

      tag(
        ni(
          'Eine Kraft $\\vec{F}=(3,\\,4)\\,\\text{N}$ wirkt auf einen Körper, der sich um $\\vec{s}=(4,\\,0)\\,\\text{m}$ verschiebt. Berechne die Arbeit $W$ in Joule über die Skalarprodukt-/Projektions-Form.',
          12, 0, 'J',
          `**Ansatz:** Arbeit $=$ Skalarprodukt von Kraft und Verschiebung. Äquivalent: skalare Projektion der Kraft auf $\\vec{s}$ mal $|\\vec{s}|$.

**Rechnung:** Direkt: $W=\\vec{F}\\cdot\\vec{s}=3\\cdot 4+4\\cdot 0=12\\,\\text{J}$. Via Projektion: $\\hat{e}_s=(1,0)$. Skalare Projektion von $\\vec{F}$ auf $\\hat{e}_s$: $\\vec{F}\\cdot\\hat{e}_s=3\\,\\text{N}$. $W=3\\cdot|\\vec{s}|=3\\cdot 4=12\\,\\text{J}$.

**Probe:** Beide Wege liefern $12\\,\\text{J}$ — das bestätigt die Identität $W=\\vec{F}\\cdot\\vec{s}=(\\vec{F}\\cdot\\hat{e}_s)\\cdot|\\vec{s}|$. ✓ Außerdem: nur die $x$-Komponente der Kraft ($3\\,\\text{N}$) leistet Arbeit, weil der Weg nur in $x$-Richtung verläuft.

**Typischer Fehler:** $|\\vec{F}|\\cdot|\\vec{s}|=\\sqrt{25}\\cdot 4=20\\,\\text{J}$ rechnen (Winkel ignoriert) — wäre nur bei $\\varphi=0°$ richtig. Oder die senkrechte Kraftkomponente $F_y=4$ mit einbeziehen.`,
          [
            'Arbeit = Kraft · Weg, aber als **Skalarprodukt**.',
            'Nur die Kraftkomponente in Wegrichtung leistet Arbeit.',
            'Hier: Weg entlang $x$, also zählt nur $F_x=3$. $W=3\\cdot 4=12$.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['sp-projektion', 'sp-arbeit'] },
      ),

      tag(
        ni(
          'Berechne die **skalare Projektion** von $\\vec{a}=(5,\\,12)$ auf $\\vec{b}=(3,\\,4)$. (Skalare Projektion $=\\vec{a}\\cdot\\vec{b}/|\\vec{b}|$.)',
          12.6, 0.05, '',
          `**Ansatz:** Skalare Projektion: $\\vec{a}\\cdot\\hat{e}_b=\\vec{a}\\cdot\\vec{b}/|\\vec{b}|$ — eine Zahl, gibt die Länge des parallelen Anteils an.

**Rechnung:** $\\vec{a}\\cdot\\vec{b}=5\\cdot 3+12\\cdot 4=15+48=63$. $|\\vec{b}|=\\sqrt{9+16}=5$. Skalare Projektion $=63/5=\\mathbf{12{,}6}$.

**Probe:** Vektorielle Projektion zur Kontrolle: $\\vec{a}_b=\\dfrac{63}{25}\\cdot(3,4)=(7{,}56;\\,10{,}08)$. Länge: $|\\vec{a}_b|=\\sqrt{7{,}56^2+10{,}08^2}=\\sqrt{57{,}15+101{,}61}=\\sqrt{158{,}76}\\approx 12{,}6$. ✓ Stimmt mit der skalaren Projektion überein.

**Typischer Fehler:** Skalare und vektorielle Projektion verwechseln und $\\vec{a}_b/|\\vec{b}|^2\\cdot\\vec{b}$ rechnen. Oder $|\\vec{b}|^2=25$ statt $|\\vec{b}|=5$ einsetzen — das gäbe $63/25=2{,}52$, deutlich zu klein.`,
          [
            'Skalare Projektion ist eine Zahl (Länge des parallelen Anteils).',
            'Formel: $\\vec{a}\\cdot\\vec{b}/|\\vec{b}|$ — Skalarprodukt durch **Betrag** (nicht Quadrat).',
            'SP ausrechnen, dann durch $|\\vec{b}|=5$ teilen.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['sp-projektion', 'sp-komp'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-3: Kreuzprodukt
  // SG0: Vektor senkrecht zu a,b · SG1: Betrag/Fläche · SG2: RH-Regel + Antikomm + Parallel · SG3: 3D + Komp.formel
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-3': {
    // ===== Sub-Goal 0 — Kreuzprodukt liefert Vektor senkrecht zu a, b =====
    0: [
      tag(
        tf(
          'Das Kreuzprodukt $\\vec{a}\\times\\vec{b}$ liefert — wie das Skalarprodukt — eine Zahl (Skalar).',
          false,
          `**Ansatz:** Schon der Name verrät es: „Vektor"-Produkt liefert einen Vektor, „Skalar"-Produkt liefert einen Skalar.

**Rechnung:** $\\vec{a}\\times\\vec{b}$ ist per Definition ein **Vektor** in 3D, der senkrecht auf beiden Ausgangsvektoren steht. $\\vec{a}\\cdot\\vec{b}$ hingegen liefert eine **Zahl** (Skalar).

**Probe:** Beispiel $\\vec{a}=(1,0,0),\\vec{b}=(0,1,0)$: $\\vec{a}\\times\\vec{b}=(0,0,1)$ — sichtbar ein Vektor mit drei Komponenten. Skalarprodukt $\\vec{a}\\cdot\\vec{b}=0$ — eine Zahl.

**Typischer Fehler:** Skalar- und Kreuzprodukt namentlich verwechseln. Spickzettel: SP $\\vec{a}\\cdot\\vec{b}\\to$ Zahl; KP $\\vec{a}\\times\\vec{b}\\to$ Vektor (nur 3D).`,
          [
            'Hör auf den Namen — „Skalar"-Produkt vs. „Vektor"-Produkt.',
            'Welcher Operator liefert welchen Ergebnistyp?',
            'Test mit Standard-Basisvektoren: $\\hat{e}_x\\times\\hat{e}_y=\\hat{e}_z$ — Vektor, nicht Zahl.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['kp-vektor', 'kp-vs-sp'] },
      ),

      tag(
        mc(
          'Sei $\\vec{c}=\\vec{a}\\times\\vec{b}$ mit $\\vec{a},\\vec{b}\\ne\\vec{0}$ und nicht parallel. Welche Aussage über $\\vec{c}$ ist **richtig**?',
          [
            '$\\vec{c}\\perp\\vec{a}$ **und** $\\vec{c}\\perp\\vec{b}$ — das Kreuzprodukt steht senkrecht auf beiden Ausgangsvektoren.',
            '$\\vec{c}\\parallel\\vec{a}$ — das Kreuzprodukt zeigt in dieselbe Richtung wie $\\vec{a}$.',
            '$\\vec{c}\\perp\\vec{a}$, aber $\\vec{c}\\parallel\\vec{b}$ — nur einer der Ausgangsvektoren ist senkrecht.',
            '$\\vec{c}=\\vec{a}+\\vec{b}$ — das Kreuzprodukt ist die Resultierende der beiden Vektoren.',
          ],
          0,
          `**Ansatz:** Definitions-Eigenschaft des Kreuzprodukts: $\\vec{c}=\\vec{a}\\times\\vec{b}$ steht **senkrecht auf der Ebene**, die von $\\vec{a}$ und $\\vec{b}$ aufgespannt wird — also senkrecht auf beiden.

**Rechnung:** Test über Skalarprodukt: $\\vec{c}\\cdot\\vec{a}=0$ und $\\vec{c}\\cdot\\vec{b}=0$. Beispiel $\\vec{a}=(1,2,0),\\vec{b}=(0,0,3)$: $\\vec{c}=(6,-3,0)$. $\\vec{c}\\cdot\\vec{a}=6-6+0=0$ ✓ und $\\vec{c}\\cdot\\vec{b}=0$ ✓.

**Probe:** Anwendung: aus zwei Spannvektoren einer Ebene erhält man genau so den **Normalvektor** $\\vec{n}=\\vec{a}\\times\\vec{b}$.

**Typischer Fehler:** Nur Senkrechtigkeit zu **einem** der beiden Vektoren glauben. Tatsächlich gilt es **beide** Senkrechtigkeitsbedingungen gleichzeitig.`,
          [
            'Welche Lage hat das Kreuzprodukt zur aufgespannten Ebene?',
            'Senkrecht zur Ebene heißt: senkrecht zu jedem Vektor in der Ebene.',
            'Probe per SP: $(\\vec{a}\\times\\vec{b})\\cdot\\vec{a}=0$ und $(\\vec{a}\\times\\vec{b})\\cdot\\vec{b}=0$.',
          ],
          {
            1: 'Wäre $\\vec{c}\\parallel\\vec{a}$, läge $\\vec{c}$ in der von $\\vec{a},\\vec{b}$ aufgespannten Ebene — nicht senkrecht zu ihr. Per Definition steht das Kreuzprodukt **senkrecht** zu beiden Spannvektoren.',
            2: 'Asymmetrisch ist falsch: das Kreuzprodukt steht **gleich behandelt** senkrecht zu $\\vec{a}$ und zu $\\vec{b}$. Eine einseitige Senkrechtigkeit gibt es nicht.',
            3: '$\\vec{a}+\\vec{b}$ ist die **Vektorsumme** (Diagonale im Parallelogramm), nicht das Kreuzprodukt. Außerdem liegt $\\vec{a}+\\vec{b}$ in der Ebene, das Kreuzprodukt steht senkrecht dazu.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['kp-orthog'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet $\\vec{a}\\cdot\\vec{b}=5$ für $\\vec{a}=(1,2)$ und $\\vec{b}=(3,1)$ und schreibt: „Damit ist auch $\\vec{a}\\times\\vec{b}=5$." Was ist der Fehler?',
          [
            'Skalar- und Kreuzprodukt sind unterschiedliche Operationen mit unterschiedlichen Ergebnistypen. SP liefert Zahl ($5$), KP liefert Vektor — und ist überdies in 2D nicht klassisch definiert.',
            'Stimmt — beide Produkte liefern denselben Wert, nur das Vorzeichen kann sich unterscheiden.',
            'Der Fehler liegt im Wert: Das Skalarprodukt müsste eigentlich $7$ ergeben.',
            'Es gibt keinen Fehler, solange die Vektoren senkrecht zueinander stehen.',
          ],
          0,
          `**Ansatz:** Operationen klar trennen — Ergebnistyp und Definition prüfen.

**Rechnung:** SP $\\vec{a}\\cdot\\vec{b}=1\\cdot 3+2\\cdot 1=5$ — eine **Zahl**. KP $\\vec{a}\\times\\vec{b}$ ist in 2D nicht klassisch definiert (3D-Operator); in 3D-Einbettung $\\vec{a}=(1,2,0),\\vec{b}=(3,1,0)$ ergäbe $\\vec{a}\\times\\vec{b}=(0,0,1\\cdot 1-2\\cdot 3)=(0,0,-5)$ — ein **Vektor**, nicht der Skalar $5$.

**Probe:** Dimensions-Check: Wenn der Schüler „$\\vec{a}\\times\\vec{b}=5$" schreibt, fehlt die Vektor-Notation. Ein Vektor ist niemals einfach $5$ — er hat (in 3D) drei Komponenten.

**Typischer Fehler:** Das gemeinsame Wort „Produkt" verleitet dazu, beide Operationen als gleichwertig zu sehen. Tatsächlich unterscheiden sie sich in **Ergebnistyp** (Skalar vs. Vektor), **Geometrie** (Winkel vs. Senkrechte) und **Dimension** (alle Dimensionen vs. nur 3D).`,
          [
            'Welchen Ergebnistyp liefert Skalarprodukt? Kreuzprodukt?',
            'Eine Zahl wie $5$ kann niemals ein Vektor sein.',
            'Das klassische Kreuzprodukt verlangt 3D-Vektoren.',
          ],
          {
            1: 'Werte stimmen **nie** automatisch überein — SP ist Skalar, KP ist Vektor. Selbst wenn man beide auf eine Zahl reduziert (Betrag des KP), gilt $|\\vec{a}\\times\\vec{b}|\\ne\\vec{a}\\cdot\\vec{b}$ im Allgemeinen.',
            2: 'Der SP-Wert $5$ ist korrekt: $1\\cdot 3+2\\cdot 1=5$. Der Fehler liegt **nicht** im Zahlenwert, sondern in der falschen Gleichsetzung mit dem Kreuzprodukt.',
            3: 'Bei Senkrechten wäre SP $=0$ — nicht $5$. Auch bei Senkrechten unterscheiden sich SP und KP grundlegend (SP $=0$, KP $\\ne\\vec{0}$).',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['kp-vs-sp'] },
      ),

      tag(
        matching(
          'Ordne jede Aussage der korrekten Operation oder Eigenschaft zu.',
          [
            { left: '$\\vec{a}\\cdot\\vec{b}$ (Skalarprodukt)', right: 'liefert eine Zahl (Skalar)' },
            { left: '$\\vec{a}\\times\\vec{b}$ (Kreuzprodukt)', right: 'liefert einen Vektor (nur 3D)' },
            { left: '$\\vec{a}\\cdot\\vec{b}=0$', right: 'bedeutet $\\vec{a}\\perp\\vec{b}$ (Orthogonalität)' },
            { left: '$\\vec{a}\\times\\vec{b}$ steht senkrecht', right: 'auf $\\vec{a}$ und auf $\\vec{b}$ (orthog. zur Ebene)' },
          ],
          `**Ansatz:** Vier Kernaussagen — zwei zu Operation/Ergebnistyp, zwei zur Geometrie.

**Rechnung:** SP gibt Skalar zurück, KP gibt Vektor zurück. SP $=0$ ist die scharfe Senkrechtigkeitsbedingung. KP-Ergebnis liegt automatisch senkrecht zu beiden Spannvektoren.

**Probe:** Gegenprobe — KP $=\\vec{0}$ (Nullvektor) wäre die scharfe Parallelitätsbedingung. Diese ist hier nicht enthalten, gehört aber zum vollständigen Bild.

**Typischer Fehler:** Senkrechtigkeit von SP $=0$ mit KP-Eigenschaft verwechseln. SP-Test: ist der **Wert** null? KP-Eigenschaft: stehen **Ausgangsvektoren** senkrecht zum Ergebnis?`,
          [
            'SP und KP unterscheiden sich im Ergebnistyp — schon das ist ein Paar.',
            'Die zwei „=0"-Bedingungen testen unterschiedliche geometrische Lagen.',
            'KP-Ergebnis und Spannvektoren stehen orthogonal zueinander.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['kp-vs-sp', 'kp-orthog'] },
      ),

      tag(
        tf(
          'Für beliebige $\\vec{a},\\vec{b}\\in\\mathbb{R}^3$ gilt $(\\vec{a}\\times\\vec{b})\\cdot\\vec{a}=0$.',
          true,
          `**Ansatz:** Das Kreuzprodukt steht per Definition senkrecht auf $\\vec{a}$ — und Skalarprodukt zwischen senkrechten Vektoren ist null.

**Rechnung:** $(\\vec{a}\\times\\vec{b})\\perp\\vec{a}$ heißt $(\\vec{a}\\times\\vec{b})\\cdot\\vec{a}=0$. Beispiel $\\vec{a}=(1,2,3),\\vec{b}=(4,5,6)$: $\\vec{a}\\times\\vec{b}=(2\\cdot 6-3\\cdot 5,\\;3\\cdot 4-1\\cdot 6,\\;1\\cdot 5-2\\cdot 4)=(-3,6,-3)$. SP mit $\\vec{a}$: $-3+12-9=0$ ✓.

**Probe:** Analog $(\\vec{a}\\times\\vec{b})\\cdot\\vec{b}=-12+30-18=0$ ✓ — das Kreuzprodukt steht auch senkrecht zu $\\vec{b}$.

**Typischer Fehler:** Die Senkrechtigkeit nur als Daumenregel statt als algebraische Identität verstehen. Sie folgt **direkt** aus der Komponentenformel und gilt unbedingt.`,
          [
            'Welche Lage hat $\\vec{a}\\times\\vec{b}$ zu $\\vec{a}$?',
            'Senkrecht — und Senkrechtigkeit prüft man per Skalarprodukt.',
            '$\\vec{u}\\perp\\vec{v}\\iff\\vec{u}\\cdot\\vec{v}=0$.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['kp-orthog', 'kp-vektor'] },
      ),
    ],

    // ===== Sub-Goal 1 — Betrag = Parallelogramm-Fläche =====
    1: [
      tag(
        tf(
          'Der Betrag $|\\vec{a}\\times\\vec{b}|$ entspricht dem Flächeninhalt des von $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms.',
          true,
          `**Ansatz:** Geometrische Bedeutung der Formel $|\\vec{a}\\times\\vec{b}|=|\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$.

**Rechnung:** Parallelogramm-Fläche $=$ Grundseite $\\cdot$ Höhe $=|\\vec{a}|\\cdot(|\\vec{b}|\\sin\\varphi)=|\\vec{a}||\\vec{b}|\\sin\\varphi=|\\vec{a}\\times\\vec{b}|$. Die Höhe bekommt man durch Projektion: $\\vec{b}$ um Winkel $\\varphi$ gegen $\\vec{a}$ geneigt, der senkrechte Anteil ist $|\\vec{b}|\\sin\\varphi$.

**Probe:** Spezialfall $\\varphi=90°$: Parallelogramm wird Rechteck, Fläche $=|\\vec{a}||\\vec{b}|\\sin 90°=|\\vec{a}||\\vec{b}|$. ✓ Spezialfall $\\varphi=0°$ (parallel): Fläche $=0$ — kein Parallelogramm.

**Typischer Fehler:** Mit dem Betrag des Skalarprodukts $|\\vec{a}\\cdot\\vec{b}|=|\\vec{a}||\\vec{b}|\\cos\\varphi$ verwechseln — das ist die Projektions-Länge, nicht eine Fläche.`,
          [
            'Welche geometrische Größe verbinden $|\\vec{a}|$, $|\\vec{b}|$ und $\\sin\\varphi$?',
            'Grundseite mal Höhe — das ist die klassische Parallelogramm-Formel.',
            'Höhe = senkrechte Komponente $=|\\vec{b}|\\sin\\varphi$.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['kp-betrag'] },
      ),

      tag(
        mc(
          'Gegeben sind $|\\vec{a}|=4$, $|\\vec{b}|=3$ und der eingeschlossene Winkel $\\varphi=30°$. Wie groß ist $|\\vec{a}\\times\\vec{b}|$?',
          ['$6$', '$12$', '$10{,}39$', '$0$'],
          0,
          `**Ansatz:** Betragsformel: $|\\vec{a}\\times\\vec{b}|=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\sin\\varphi$.

**Rechnung:** $\\sin 30°=0{,}5$. $|\\vec{a}\\times\\vec{b}|=4\\cdot 3\\cdot 0{,}5=6$.

**Probe:** Plausibel: bei $\\varphi=90°$ wäre $|\\vec{a}\\times\\vec{b}|=12$ (Maximum). $30°<90°$ → kleinerer Wert. $6<12$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ vertauschen ($\\cos 30°=\\sqrt{3}/2\\approx 0{,}866\\Rightarrow 12\\cdot 0{,}866\\approx 10{,}39$). Oder $\\sin$ vergessen und einfach $|\\vec{a}|\\cdot|\\vec{b}|=12$ rechnen.`,
          [
            'Welche Trigo-Funktion gehört zur KP-Betragsformel?',
            'Standardwinkel: $\\sin 30°=0{,}5$.',
            'Setz Werte ein: $4\\cdot 3\\cdot 0{,}5$.',
          ],
          {
            1: '$12$ wäre $|\\vec{a}|\\cdot|\\vec{b}|$ ohne Winkelfaktor — das ist das **Maximum** bei $\\varphi=90°$, nicht bei $30°$.',
            2: '$10{,}39\\approx 12\\cos 30°$ — du hast $\\cos$ statt $\\sin$ benutzt. Skalarprodukt nutzt $\\cos$, **Kreuzprodukt** nutzt $\\sin$.',
            3: '$0$ wäre nur bei $\\varphi=0°$ oder $180°$ (parallel/antiparallel). $\\sin 30°=0{,}5\\ne 0$, also kein Nullbetrag.',
          },
        ),
        { stage: 'apply-guided', subGoal: 1, uses: ['kp-betrag'] },
      ),

      tag(
        ni(
          'Berechne den Flächeninhalt des Parallelogramms, das von $\\vec{a}$ mit $|\\vec{a}|=5$ und $\\vec{b}$ mit $|\\vec{b}|=8$ aufgespannt wird, wenn der eingeschlossene Winkel $\\varphi=90°$ beträgt.',
          40, 0, '',
          `**Ansatz:** Parallelogramm-Fläche $=|\\vec{a}\\times\\vec{b}|=|\\vec{a}||\\vec{b}|\\sin\\varphi$.

**Rechnung:** $\\sin 90°=1$. Fläche $=5\\cdot 8\\cdot 1=40$.

**Probe:** Bei $\\varphi=90°$ degeneriert das Parallelogramm zum **Rechteck** mit Seiten $5$ und $8$ — Fläche $=5\\cdot 8=40$. ✓

**Typischer Fehler:** $\\sin 90°=0$ statt $1$ rechnen ($\\cos 90°=0$ verwechselt). Oder Beträge addieren statt multiplizieren ($5+8=13$).`,
          [
            'Was ist $\\sin 90°$?',
            'Bei rechtem Winkel ist die Fläche maximal $=|\\vec{a}|\\cdot|\\vec{b}|$.',
            'Hier: $5\\cdot 8\\cdot 1$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['kp-betrag'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet die Parallelogramm-Fläche als $|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos\\varphi$ statt $\\sin\\varphi$. Bei $|\\vec{a}|=6$, $|\\vec{b}|=4$, $\\varphi=60°$ erhält er Fläche $=12$. Was ist der korrekte Wert — und was ist der Fehler?',
          [
            'Korrekt $|\\vec{a}\\times\\vec{b}|=|\\vec{a}||\\vec{b}|\\sin\\varphi=6\\cdot 4\\cdot\\sin 60°\\approx 20{,}78$. Der Schüler hat $\\sin$ und $\\cos$ vertauscht — Skalarprodukt nutzt $\\cos$, Kreuzprodukt $\\sin$.',
            'Der Schüler hat richtig — beide trigonometrischen Funktionen liefern hier dasselbe Ergebnis.',
            'Korrekt sind beide Wege; $\\sin$ gilt nur in 3D, $\\cos$ funktioniert in 2D.',
            'Der Fehler liegt nicht in $\\cos/\\sin$, sondern darin, dass die Beträge nicht multipliziert wurden.',
          ],
          0,
          `**Ansatz:** Welche Trigo-Funktion gehört zu welchem Vektor-Produkt? SP $\\to\\cos$, KP $\\to\\sin$.

**Rechnung:** $|\\vec{a}\\times\\vec{b}|=6\\cdot 4\\cdot\\sin 60°=24\\cdot\\frac{\\sqrt{3}}{2}=12\\sqrt{3}\\approx 20{,}78$. Schüler-Wert $|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos 60°=24\\cdot 0{,}5=12$ — wäre das Skalarprodukt, nicht der KP-Betrag.

**Probe:** Dimensions-Check: Bei $\\varphi=90°$ liefert die Schüler-Formel mit $\\cos$ den Wert $0$ (kein Parallelogramm), aber tatsächlich ist hier die Fläche maximal! Genau bei $\\varphi=90°$ steht das Parallelogramm „gerade" — die korrekte Formel mit $\\sin$ liefert $|\\vec{a}|\\cdot|\\vec{b}|$, das Maximum.

**Typischer Fehler:** SP- und KP-Formel namentlich vertauschen. Eselsbrücke: **C**os für SP (**C**alculation, Winkel), **S**in für KP (**S**enkrechte, Fläche).`,
          [
            'Welche Trigo-Funktion verbindet $|\\vec{a}|, |\\vec{b}|$ mit dem KP-Betrag?',
            'Standard: $\\sin 60°=\\sqrt 3/2\\approx 0{,}866$.',
            'Eselsbrücke: SP $\\to\\cos$, KP $\\to\\sin$.',
          ],
          {
            1: '$\\cos 60°=0{,}5$ und $\\sin 60°\\approx 0{,}866$ — die Werte unterscheiden sich deutlich. Die Funktionen sind **nicht** austauschbar.',
            2: 'Beide Formeln gelten in den jeweiligen Domänen — aber für Parallelogramm-Fläche ist $\\sin$ die richtige, **immer** und unabhängig von der Dimension.',
            3: 'Beträge wurden korrekt multipliziert ($6\\cdot 4=24$). Der Fehler liegt **ausschließlich** in $\\cos$ statt $\\sin$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['kp-betrag'] },
      ),

      tag(
        ni(
          'Berechne den Flächeninhalt des Dreiecks mit den Spannvektoren $\\vec{a}=(2,0,0)$ und $\\vec{b}=(0,3,0)$. (Hinweis: Dreiecksfläche $=\\tfrac{1}{2}|\\vec{a}\\times\\vec{b}|$.)',
          3, 0, '',
          `**Ansatz:** Dreieck = halbes Parallelogramm. Erst $\\vec{a}\\times\\vec{b}$ berechnen, dann Betrag halbieren.

**Rechnung:** Komponentenformel: $\\vec{a}\\times\\vec{b}=(0\\cdot 0-0\\cdot 3,\\;0\\cdot 0-2\\cdot 0,\\;2\\cdot 3-0\\cdot 0)=(0,0,6)$. $|\\vec{a}\\times\\vec{b}|=6$. Dreiecksfläche $=6/2=3$.

**Probe:** Anschaulich: $\\vec{a}$ entlang $x$-Achse (Länge 2), $\\vec{b}$ entlang $y$-Achse (Länge 3) — rechtwinkliges Dreieck mit Katheten $2$ und $3$. Fläche $=\\tfrac{1}{2}\\cdot 2\\cdot 3=3$. ✓

**Typischer Fehler:** Die $\\tfrac{1}{2}$ vergessen und die volle Parallelogramm-Fläche $6$ als Dreiecksfläche abliefern. Oder das Kreuzprodukt durch Skalarprodukt ersetzen ($\\vec{a}\\cdot\\vec{b}=0$ liefert keine Fläche).`,
          [
            'Beziehung Dreieck $\\leftrightarrow$ Parallelogramm: halbe Fläche.',
            '$\\vec{a}\\times\\vec{b}$ in Komponenten ausrechnen — bei achsenparallelen Vektoren bleibt nur die $z$-Komponente.',
            'Dreieck $=\\tfrac{1}{2}\\cdot 6$.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['kp-betrag', 'kp-komp'] },
      ),
    ],

    // ===== Sub-Goal 2 — Antikommutativität, Rechte-Hand-Regel, Parallelitätstest =====
    2: [
      tag(
        tf(
          'Es gilt $\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})$ — beim Vertauschen der Reihenfolge dreht sich das Vorzeichen um.',
          true,
          `**Ansatz:** Antikommutativität ist eine **Definitionseigenschaft** des Kreuzprodukts.

**Rechnung:** Komponentenformel: $\\vec{a}\\times\\vec{b}=(a_yb_z-a_zb_y,\\;a_zb_x-a_xb_z,\\;a_xb_y-a_yb_x)$. Vertauschung $a\\leftrightarrow b$ kehrt jedes Vorzeichen um (z. B. $a_yb_z-a_zb_y\\to b_ya_z-b_za_y=-(a_yb_z-a_zb_y)$). Also $\\vec{b}\\times\\vec{a}=-(\\vec{a}\\times\\vec{b})$.

**Probe:** Beispiel $\\hat{e}_x\\times\\hat{e}_y=\\hat{e}_z$ vs. $\\hat{e}_y\\times\\hat{e}_x=-\\hat{e}_z$ ✓. Geometrisch: Rechte-Hand-Regel — vertauschte Reihenfolge dreht den Daumen um $180°$.

**Typischer Fehler:** Mit dem Skalarprodukt verwechseln, das **kommutativ** ist ($\\vec{a}\\cdot\\vec{b}=\\vec{b}\\cdot\\vec{a}$). Skalar- und Kreuzprodukt verhalten sich algebraisch unterschiedlich.`,
          [
            'Symmetrie-Eigenschaft prüfen: kommutativ oder antikommutativ?',
            'Welche Operation kehrt das Vorzeichen bei Reihenfolge-Tausch?',
            'Beispiel: $\\hat{e}_x\\times\\hat{e}_y$ vs. $\\hat{e}_y\\times\\hat{e}_x$.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['kp-antikomm'] },
      ),

      tag(
        mc(
          'Per Rechte-Hand-Regel — was ergibt $\\hat{e}_z\\times\\hat{e}_x$?',
          ['$\\hat{e}_y$', '$-\\hat{e}_y$', '$\\hat{e}_z$', '$\\vec{0}$'],
          0,
          `**Ansatz:** Zyklische Reihenfolge $1\\to 2\\to 3\\to 1$ entspricht $x\\to y\\to z\\to x$. Bei zyklischer Reihenfolge: positives Ergebnis.

**Rechnung:** $\\hat{e}_z\\times\\hat{e}_x$ — gehe von $z$ einen Schritt zyklisch weiter zu $x$, das Resultat ist der nächste Schritt: $y$. Also $\\hat{e}_z\\times\\hat{e}_x=\\hat{e}_y$.

**Probe:** Komponentenformel mit $\\hat{e}_z=(0,0,1)$ und $\\hat{e}_x=(1,0,0)$: $\\hat{e}_z\\times\\hat{e}_x=(0\\cdot 0-1\\cdot 0,\\;1\\cdot 1-0\\cdot 0,\\;0\\cdot 0-0\\cdot 1)=(0,1,0)=\\hat{e}_y$ ✓.

**Typischer Fehler:** Antizyklisch lesen ($z\\to x$ als Rückwärts-Sprung) und das negative Vorzeichen dazudenken — das wäre $\\hat{e}_x\\times\\hat{e}_z=-\\hat{e}_y$, aber hier ist $\\hat{e}_z\\times\\hat{e}_x$ in zyklischer Richtung.`,
          [
            'Zyklische Reihenfolge: $x\\to y\\to z\\to x\\to\\dots$',
            '$\\hat{e}_i\\times\\hat{e}_j=\\hat{e}_k$, wenn $(i,j,k)$ zyklisch ist.',
            '$z\\to x$: zyklisch — also Resultat $y$ mit positivem Vorzeichen.',
          ],
          {
            1: '$-\\hat{e}_y$ ergibt sich bei **antizyklischer** Reihenfolge $\\hat{e}_x\\times\\hat{e}_z$. Hier ist $\\hat{e}_z\\times\\hat{e}_x$ zyklisch — also positives $\\hat{e}_y$.',
            2: 'Das KP ist senkrecht zu beiden Ausgangsvektoren — kann also nicht parallel zu $\\hat{e}_z$ sein, da $\\hat{e}_z$ einer der Ausgangsvektoren ist.',
            3: '$\\vec{0}$ tritt nur bei parallelen Vektoren auf. $\\hat{e}_z\\perp\\hat{e}_x$, also $\\sin 90°=1$ und KP ungleich Null.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['kp-rh-regel'] },
      ),

      tag(
        mc(
          'Ein Schüler schreibt: „Da Multiplikation kommutativ ist, gilt $\\vec{a}\\times\\vec{b}=\\vec{b}\\times\\vec{a}$." Was ist der Fehler?',
          [
            'Das **Kreuzprodukt** ist nicht kommutativ, sondern **antikommutativ**: $\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})$. Der Vergleich mit gewöhnlicher Zahlen-Multiplikation ist hier nicht zulässig.',
            'Der Schüler hat richtig — alle Multiplikationen sind kommutativ.',
            'Kreuzprodukt ist nur in 3D antikommutativ; in 2D wäre es kommutativ.',
            'Kreuzprodukt ist halb-kommutativ: gleich, aber mit halbiertem Betrag.',
          ],
          0,
          `**Ansatz:** Kommutativität ist eine **algebraische Eigenschaft**, die für unterschiedliche Operationen unterschiedlich ist.

**Rechnung:** Reelle Zahlen: $a\\cdot b=b\\cdot a$ (kommutativ). Skalarprodukt: $\\vec{a}\\cdot\\vec{b}=\\vec{b}\\cdot\\vec{a}$ (kommutativ). Kreuzprodukt: $\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})$ — **anti**kommutativ.

**Probe:** Beispiel $\\vec{a}=(1,0,0),\\vec{b}=(0,1,0)$: $\\vec{a}\\times\\vec{b}=(0,0,1)$ vs. $\\vec{b}\\times\\vec{a}=(0,0,-1)$ — entgegengesetzt, nicht gleich.

**Typischer Fehler:** Begriffe „Multiplikation" über alle Operationen verallgemeinern. Jede Operation hat ihre eigenen algebraischen Regeln — Kreuzprodukt teilt mit gewöhnlicher Multiplikation den Namen, aber nicht die Kommutativität.`,
          [
            'Welche algebraische Eigenschaft hat das Kreuzprodukt bei Reihenfolge-Tausch?',
            'Antikommutativ heißt: Vorzeichen-Wechsel.',
            'Test mit konkretem Beispiel: $\\hat{e}_x\\times\\hat{e}_y$ vs. $\\hat{e}_y\\times\\hat{e}_x$.',
          ],
          {
            1: 'Reelle Zahlen sind kommutativ — Kreuzprodukt ist es **nicht**. Gleich heißt: für **alle** Vektoren gleicher Wert. Hier ist es genau umgekehrt.',
            2: 'Klassisches Kreuzprodukt existiert nur in 3D. Eine kommutative Variante in 2D gibt es nicht — die antikommutative Eigenschaft folgt direkt aus der Komponentenformel.',
            3: '„Halb-kommutativ" ist keine etablierte Eigenschaft. Antikommutativ ist eine **scharfe** Aussage: Vorzeichenwechsel, nicht Betrags-Halbierung.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['kp-antikomm'] },
      ),

      tag(
        matching(
          'Ordne jedem Kreuzprodukt von Einheitsvektoren das korrekte Resultat zu.',
          [
            { left: '$\\hat{e}_x\\times\\hat{e}_y$', right: '$\\hat{e}_z$' },
            { left: '$\\hat{e}_y\\times\\hat{e}_x$', right: '$-\\hat{e}_z$' },
            { left: '$\\hat{e}_y\\times\\hat{e}_z$', right: '$\\hat{e}_x$' },
            { left: '$\\hat{e}_z\\times\\hat{e}_y$', right: '$-\\hat{e}_x$' },
          ],
          `**Ansatz:** Zyklische Regel + Antikommutativität.

**Rechnung:** Zyklische Reihenfolge $x\\to y\\to z\\to x$: $\\hat{e}_x\\times\\hat{e}_y=\\hat{e}_z$, $\\hat{e}_y\\times\\hat{e}_z=\\hat{e}_x$, $\\hat{e}_z\\times\\hat{e}_x=\\hat{e}_y$. Vertauschte Reihenfolge → negatives Vorzeichen: $\\hat{e}_y\\times\\hat{e}_x=-\\hat{e}_z$, $\\hat{e}_z\\times\\hat{e}_y=-\\hat{e}_x$.

**Probe:** Komponentenformel-Check: $\\hat{e}_z\\times\\hat{e}_y=(0\\cdot 0-1\\cdot 1,\\;1\\cdot 0-0\\cdot 0,\\;0\\cdot 1-0\\cdot 0)=(-1,0,0)=-\\hat{e}_x$ ✓.

**Typischer Fehler:** Vorzeichen vergessen bei der antizyklischen Variante — $\\hat{e}_z\\times\\hat{e}_y$ ist $-\\hat{e}_x$, nicht $+\\hat{e}_x$.`,
          [
            'Zyklisch $x\\to y\\to z$: positives Vorzeichen.',
            'Antizyklisch $z\\to y$ oder $y\\to x$: negatives Vorzeichen.',
            'Antikommutativität: vertauschen $\\to$ Vorzeichen kippen.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['kp-rh-regel', 'kp-antikomm'] },
      ),

      tag(
        tf(
          'Wenn $\\vec{a}\\parallel\\vec{b}$ (parallel oder antiparallel), dann ist $\\vec{a}\\times\\vec{b}=\\vec{0}$.',
          true,
          `**Ansatz:** Bei parallelen Vektoren ist $\\varphi=0°$ oder $180°$ — und $\\sin 0°=\\sin 180°=0$.

**Rechnung:** $|\\vec{a}\\times\\vec{b}|=|\\vec{a}||\\vec{b}|\\sin\\varphi=|\\vec{a}||\\vec{b}|\\cdot 0=0$. Ein Vektor mit Betrag null ist der **Nullvektor**.

**Probe:** Beispiel $\\vec{a}=(1,2,3),\\vec{b}=(2,4,6)=2\\vec{a}$: $\\vec{a}\\times\\vec{b}=2(\\vec{a}\\times\\vec{a})=\\vec{0}$ ✓ (jeder Vektor ist parallel zu sich selbst, $\\vec{a}\\times\\vec{a}=\\vec{0}$).

**Typischer Fehler:** Für **antiparallele** Vektoren ($\\varphi=180°$) zweifeln — auch hier ist $\\sin 180°=0$, also $\\vec{a}\\times\\vec{b}=\\vec{0}$ unverändert.`,
          [
            'Welcher Wert hat $\\sin\\varphi$ bei parallelen Vektoren?',
            '$\\sin 0°=\\sin 180°=0$.',
            'KP-Betrag null $\\Rightarrow$ KP $=\\vec{0}$.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['kp-parallel', 'kp-betrag'] },
      ),
    ],

    // ===== Sub-Goal 3 — 3D + Komponentenformel =====
    3: [
      tag(
        tf(
          'Das klassische Kreuzprodukt ist auch in 2D definiert und liefert dort eine Zahl statt eines Vektors.',
          false,
          `**Ansatz:** Definition prüfen: Kreuzprodukt verlangt drei Dimensionen.

**Rechnung:** Klassisches KP ist nur in **3D** definiert (gibt es eine Verallgemeinerung in 7D, aber nicht in 2D/4D). In 2D verwendet man Hilfskonstruktionen (z. B. Determinanten-Formel $a_xb_y-a_yb_x$ für die orientierte Fläche), aber das Ergebnis ist eine Pseudo-Größe, kein Vektor.

**Probe:** Komponentenformel verlangt $z$-Komponenten — in 2D fehlen die. Man behilft sich, indem man 2D-Vektoren als 3D mit $z=0$ einbettet: $\\vec{a}=(a_x,a_y,0),\\vec{b}=(b_x,b_y,0)$ → $\\vec{a}\\times\\vec{b}=(0,0,a_xb_y-a_yb_x)$ — dann zeigt das Ergebnis aus der $xy$-Ebene heraus.

**Typischer Fehler:** Die 2D-Determinanten-Form als „2D-Kreuzprodukt" missverstehen. Mathematisch bleibt: KP ist eine 3D-Operation.`,
          [
            'In welcher Dimension ist das KP klassisch definiert?',
            'Komponentenformel braucht $a_x,a_y,a_z$ und $b_x,b_y,b_z$.',
            'In 2D fehlen die $z$-Komponenten — die KP-Formel funktioniert nicht direkt.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['kp-3d-only'] },
      ),

      tag(
        ni(
          'Berechne die $z$-Komponente von $\\vec{a}\\times\\vec{b}$ mit $\\vec{a}=(1,\\,2,\\,3)$ und $\\vec{b}=(4,\\,5,\\,6)$.',
          -3, 0, '',
          `**Ansatz:** $z$-Komponente der KP-Formel: $a_xb_y-a_yb_x$.

**Rechnung:** $a_xb_y-a_yb_x=1\\cdot 5-2\\cdot 4=5-8=-3$.

**Probe:** Vollständig: $\\vec{a}\\times\\vec{b}=(2\\cdot 6-3\\cdot 5,\\;3\\cdot 4-1\\cdot 6,\\;1\\cdot 5-2\\cdot 4)=(-3,6,-3)$. $z$-Komponente $=-3$ ✓. Zusatz-Probe: $(\\vec{a}\\times\\vec{b})\\cdot\\vec{a}=-3+12-9=0$ — senkrecht zu $\\vec{a}$, plausibel.

**Typischer Fehler:** Reihenfolge in der $z$-Formel umdrehen ($a_yb_x-a_xb_y=8-5=3$ statt $-3$) — das wäre das negative Vorzeichen.`,
          [
            'Zyklisches Schema: $z$-Komponente nutzt $a_x,b_y,a_y,b_x$.',
            'Formel: $a_xb_y-a_yb_x$ — zuerst der „zyklisch nächste" Term, dann minus.',
            'Vorzeichen-Check: bei $\\vec{a}=(1,2,3),\\vec{b}=(4,5,6)$ ist $a_xb_y=5$ und $a_yb_x=8$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['kp-komp'] },
      ),

      tag(
        mc(
          'Ein Schüler rechnet die $y$-Komponente von $\\vec{a}\\times\\vec{b}$ als $a_xb_z-a_zb_x$ mit $\\vec{a}=(2,1,3),\\,\\vec{b}=(0,1,2)$ und erhält $4-0=4$. Was ist der korrekte Wert — und was ist der Fehler?',
          [
            'Korrekte Formel ist $a_zb_x-a_xb_z=3\\cdot 0-2\\cdot 2=-4$. Der Schüler hat das Vorzeichen vertauscht — die $y$-Komponente verlangt $a_zb_x$ minus $a_xb_z$, nicht andersherum.',
            'Der Schüler hat richtig — beide Reihenfolgen liefern dasselbe.',
            'Der Schüler hat zwar die Reihenfolge vertauscht, aber das Vorzeichen kompensiert sich.',
            'Die $y$-Komponente verlangt $a_xb_y-a_yb_x$ (wie bei der $z$-Komponente).',
          ],
          0,
          `**Ansatz:** Vorzeichen-Schema in der $y$-Komponente präzise lesen.

**Rechnung:** Korrekt: $(\\vec{a}\\times\\vec{b})_y=a_zb_x-a_xb_z=3\\cdot 0-2\\cdot 2=0-4=-4$. Schüler-Variante $a_xb_z-a_zb_x=2\\cdot 2-3\\cdot 0=4$ — entgegengesetztes Vorzeichen.

**Probe:** Vollständig: $\\vec{a}\\times\\vec{b}=(1\\cdot 2-3\\cdot 1,\\;3\\cdot 0-2\\cdot 2,\\;2\\cdot 1-1\\cdot 0)=(-1,-4,2)$. SP-Test: $(-1,-4,2)\\cdot\\vec{a}=-2-4+6=0$ ✓ — bestätigt $-4$.

**Typischer Fehler:** Die zyklische Reihenfolge $x\\to y\\to z\\to x$ lokal anwenden. Die $y$-Komponente kommt aus den Indizes $(z,x)$, nicht $(x,z)$ — das verlangt das negative Vorzeichen, wenn man $a$- und $b$-Komponenten richtig zuordnet.`,
          [
            'Wie lautet die exakte Formel für die $y$-Komponente?',
            'Schema: $y$-Komponente entsteht aus $a_z, b_x, a_x, b_z$ — und in einer **bestimmten** Reihenfolge.',
            'Korrekt: $a_zb_x-a_xb_z$.',
          ],
          {
            1: '$a_xb_z-a_zb_x$ liefert das **Negative** der korrekten $y$-Komponente — die Differenz im Vorzeichen ist nicht egal.',
            2: 'Das stimmt rechnerisch ($-(-4)=4$, also Vorzeichen-Vertauschung), aber „kompensiert sich" ist falsch — das Endergebnis hat ein anderes Vorzeichen, was bei Anwendung (z. B. Drehmoment-Richtung) wichtig ist.',
            3: '$a_xb_y-a_yb_x$ ist die $z$-Komponente, nicht die $y$. Jede Komponente nutzt eigene Indizes.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['kp-komp'] },
      ),

      tag(
        ni(
          'Berechne $|\\vec{a}\\times\\vec{b}|$ für $\\vec{a}=(1,\\,0,\\,0)$ und $\\vec{b}=(0,\\,2,\\,0)$.',
          2, 0, '',
          `**Ansatz:** Erst Kreuzprodukt komponentenweise, dann Betrag via Pythagoras.

**Rechnung:** $\\vec{a}\\times\\vec{b}=(0\\cdot 0-0\\cdot 2,\\;0\\cdot 0-1\\cdot 0,\\;1\\cdot 2-0\\cdot 0)=(0,0,2)$. Betrag $=\\sqrt{0+0+4}=2$.

**Probe:** Geometrisch — $\\vec{a}$ entlang $x$-Achse (Länge 1), $\\vec{b}$ entlang $y$-Achse (Länge 2), eingeschlossener Winkel $90°$. Parallelogramm $=$ Rechteck mit Seiten $1$ und $2$, Fläche $=2$. ✓

**Typischer Fehler:** Direkt $|\\vec{a}|\\cdot|\\vec{b}|=2$ rechnen — funktioniert hier zufällig, weil $\\sin 90°=1$. Bei beliebigem Winkel wäre die Formel ohne $\\sin$ falsch.`,
          [
            'Schritt 1: Komponentenformel anwenden.',
            'Achsenparallele Vektoren ($\\vec{a}$ in $x$, $\\vec{b}$ in $y$): nur $z$-Komponente bleibt stehen.',
            'Schritt 2: Betrag des Resultats $=\\sqrt{0^2+0^2+2^2}=2$.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['kp-komp', 'kp-betrag'] },
      ),

      tag(
        ni(
          'Berechne die $y$-Komponente von $\\vec{a}\\times\\vec{b}$ mit $\\vec{a}=(2,\\,1,\\,3)$ und $\\vec{b}=(0,\\,1,\\,2)$.',
          -4, 0, '',
          `**Ansatz:** $y$-Komponente: $a_zb_x-a_xb_z$.

**Rechnung:** $a_zb_x-a_xb_z=3\\cdot 0-2\\cdot 2=0-4=-4$.

**Probe:** Volles Kreuzprodukt: $\\vec{a}\\times\\vec{b}=(1\\cdot 2-3\\cdot 1,\\;3\\cdot 0-2\\cdot 2,\\;2\\cdot 1-1\\cdot 0)=(-1,-4,2)$. SP $\\vec{a}\\cdot(-1,-4,2)=-2-4+6=0$ ✓ — KP steht senkrecht zu $\\vec{a}$, bestätigt das Ergebnis.

**Typischer Fehler:** Vorzeichen vertauschen ($a_xb_z-a_zb_x=4$ statt $-4$). Die $y$-Komponente hat in der Standard-Komponentenformel die Reihenfolge $(a_z,b_x)$ vor $(a_x,b_z)$.`,
          [
            'Schema: $y$-Komponente nutzt $a_z, b_x, a_x, b_z$.',
            'Formel: $a_zb_x-a_xb_z$ — Reihenfolge **dieser** Indizes.',
            'Hier: $3\\cdot 0-2\\cdot 2$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['kp-komp'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 1-4: Kräfte als Vektoren (Prüfungs-Lesson — alle Aufgaben mit [PRÜFUNG])
  // SG0: Komponenten-Zerlegung · SG1: Resultierende · SG2: Gleichgewicht
  // SG3: Einheitsvektor · SG4: Betrag/Richtung · SG5: Plausibilitäts-Check
  // ───────────────────────────────────────────────────────────────────────
  'vek-1-4': {
    // ===== Sub-Goal 0 — Kraft-Komponenten-Zerlegung =====
    0: [
      tag(
        tf(
          '[PRÜFUNG] Bei einer Kraft $F$ unter dem Winkel $\\alpha$ **zur $x$-Achse** gilt $F_x=F\\cos\\alpha$ und $F_y=F\\sin\\alpha$.',
          true,
          `**Ansatz:** Standard-Zerlegung: Winkel zur $x$-Achse → $\\cos$ liefert $x$-Anteil, $\\sin$ liefert $y$-Anteil.

**Rechnung:** Geometrisch: ein Pfeil der Länge $F$ unter Winkel $\\alpha$ projiziert auf die $x$-Achse die Strecke $F\\cos\\alpha$, auf die $y$-Achse die Strecke $F\\sin\\alpha$. Beispiel $F=100\\,\\text{N},\\,\\alpha=60°$: $F_x=50\\,\\text{N}$, $F_y\\approx 86{,}6\\,\\text{N}$.

**Probe:** Längencheck — $F_x^2+F_y^2=F^2(\\cos^2\\alpha+\\sin^2\\alpha)=F^2$, also $\\sqrt{F_x^2+F_y^2}=F$ ✓ (Pythagoras).

**Typischer Fehler:** Winkel zur **$y$-Achse** statt zur $x$-Achse genommen — dann sind $\\sin$ und $\\cos$ vertauscht. Immer den Bezugswinkel im Bild prüfen.`,
          [
            'Welcher Winkel-Bezug? Hier: Winkel zur $x$-Achse.',
            'Projektionsregel: $\\cos$ → $x$-Achse, $\\sin$ → $y$-Achse.',
            'Probe: $F_x^2+F_y^2$ muss $F^2$ ergeben.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Eine Kraft $F=100\\,\\text{N}$ wirkt unter $\\alpha=60°$ zur $x$-Achse. Wie groß ist die $x$-Komponente $F_x$?',
          ['$50\\,\\text{N}$', '$86{,}6\\,\\text{N}$', '$100\\,\\text{N}$', '$0\\,\\text{N}$'],
          0,
          `**Ansatz:** Komponenten-Formel: $F_x=F\\cos\\alpha$.

**Rechnung:** $F_x=100\\cdot\\cos 60°=100\\cdot 0{,}5=50\\,\\text{N}$.

**Probe:** $F_y=100\\cdot\\sin 60°\\approx 86{,}6\\,\\text{N}$. Pythagoras: $\\sqrt{50^2+86{,}6^2}\\approx\\sqrt{2500+7500}=100$ ✓.

**Typischer Fehler:** $\\sin$ und $\\cos$ verwechselt: $100\\sin 60°\\approx 86{,}6$ wäre $F_y$, nicht $F_x$.`,
          [
            'Formel für $x$-Komponente: $F\\cos\\alpha$.',
            'Standardwert: $\\cos 60°=0{,}5$.',
            '$100\\cdot 0{,}5$.',
          ],
          {
            1: 'Das ist $F_y=F\\sin 60°\\approx 86{,}6$ — du hast $\\sin$ und $\\cos$ vertauscht. Bei Winkel zur $x$-Achse gehört $\\cos$ zu $F_x$.',
            2: '$100\\,\\text{N}$ wäre der gesamte Kraftbetrag — keine Zerlegung. Bei $\\alpha\\ne 0$ liegt nur ein Teil entlang $x$.',
            3: '$0\\,\\text{N}$ entstünde bei $\\cos 90°=0$ — die Kraft müsste also senkrecht zur $x$-Achse stehen. Bei $60°$ ist aber $\\cos 60°=0{,}5$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Eine Kraft $F=200\\,\\text{N}$ wirkt unter $\\alpha=30°$ zur $x$-Achse. Berechne die $y$-Komponente $F_y$ in N.',
          100, 0, 'N',
          `**Ansatz:** $F_y=F\\sin\\alpha$.

**Rechnung:** $F_y=200\\cdot\\sin 30°=200\\cdot 0{,}5=100\\,\\text{N}$.

**Probe:** $F_x=200\\cos 30°\\approx 173{,}2\\,\\text{N}$. Pythagoras: $\\sqrt{173{,}2^2+100^2}\\approx\\sqrt{30000+10000}=200$ ✓.

**Typischer Fehler:** $\\cos 30°=\\sqrt 3/2\\approx 0{,}866$ statt $\\sin 30°=0{,}5$ einsetzen — gibt $\\approx 173{,}2$ statt $100$.`,
          [
            '$F_y$-Formel: $F\\sin\\alpha$.',
            'Standardwert: $\\sin 30°=0{,}5$.',
            '$200\\cdot 0{,}5$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler rechnet die $x$-Komponente von $F=100\\,\\text{N}$ unter $\\alpha=60°$ als $F_x=F\\sin\\alpha\\approx 86{,}6\\,\\text{N}$. Was ist der Fehler — und welcher Wert ist korrekt?',
          [
            '$\\sin$ und $\\cos$ sind vertauscht. Korrekt: $F_x=F\\cos\\alpha=100\\cdot 0{,}5=50\\,\\text{N}$. Der Wert $86{,}6$ wäre $F_y$.',
            'Die Rechnung ist korrekt — bei Winkel zur $x$-Achse gilt $F_x=F\\sin\\alpha$.',
            'Sin ist richtig, aber der numerische Wert: $\\sin 60°=0{,}5$, also $F_x=50$.',
            'Bei $\\alpha=60°$ liefern $\\sin$ und $\\cos$ denselben Wert — der Fehler liegt in der Einheit.',
          ],
          0,
          `**Ansatz:** Zuordnung Trigo-Funktion ↔ Komponente prüfen. Bei Winkel zur $x$-Achse: $\\cos\\to F_x$, $\\sin\\to F_y$.

**Rechnung:** Korrekt: $F_x=100\\cos 60°=50\\,\\text{N}$, $F_y=100\\sin 60°\\approx 86{,}6\\,\\text{N}$. Schüler hat $F_y$ als $F_x$ deklariert.

**Probe:** Anschaulich — bei $\\alpha=60°$ neigt die Kraft sich „eher nach oben" (y-lastig), entsprechend ist $F_y>F_x$. Das passt zu $F_y=86{,}6>F_x=50$.

**Typischer Fehler:** Zwei Verwechslungs-Quellen: (1) Winkel zur $y$-Achse mit Winkel zur $x$-Achse vertauschen, oder (2) blind $\\sin/\\cos$ raten. Eselsbrücke: bei kleinem $\\alpha$ liegt die Kraft fast in $x$-Richtung → $F_x$ groß → braucht $\\cos\\alpha\\approx 1$.`,
          [
            'Welche Trigo-Funktion gehört zu welcher Komponente?',
            'Bei kleinem $\\alpha$ muss $F_x$ fast gleich $F$ sein — welche Funktion ist bei kleinem $\\alpha$ nahe 1?',
            'Anschaulich-Test: bei $\\alpha=0°$ liegt die Kraft entlang $x$, also $F_x=F$. $\\cos 0°=1$ erfüllt das, $\\sin 0°=0$ nicht.',
          ],
          {
            1: '$F_x=F\\sin\\alpha$ ist falsch — die $\\sin$-Funktion ist die $y$-Achsen-Projektion. Bei Winkel zur $x$-Achse gehört $\\cos$ zu $F_x$.',
            2: '$\\sin 60°=\\sqrt 3/2\\approx 0{,}866$, **nicht** $0{,}5$. Auch wenn man die Werte vertauscht, ist die Methode falsch (sin gehört zu $F_y$).',
            3: '$\\sin 60°=0{,}866$ und $\\cos 60°=0{,}5$ — nicht gleich. Bei $\\alpha=45°$ wären $\\sin$ und $\\cos$ gleich, hier nicht.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Eine Kiste wird mit $F=400\\,\\text{N}$ unter einem Winkel von $\\alpha=60°$ über der Horizontalen gezogen. Welche Kraftkomponente $F_x$ wirkt parallel zum Boden (in N)?',
          200, 0, 'N',
          `**Ansatz:** Winkel zur Horizontalen $=$ Winkel zur $x$-Achse. $F_x=F\\cos\\alpha$.

**Rechnung:** $F_x=400\\cdot\\cos 60°=400\\cdot 0{,}5=200\\,\\text{N}$.

**Probe:** $F_y=400\\sin 60°\\approx 346{,}4\\,\\text{N}$ (Hebt die Kiste teilweise vom Boden ab). Pythagoras: $\\sqrt{200^2+346{,}4^2}\\approx 400$ ✓.

**Typischer Fehler:** Anwender verwechseln „Kraft $400$ N" mit „horizontale Kraft" — dann reicht keine Zerlegung. Tatsächlich entlasten sich die $x$- und $y$-Anteile durch den Winkel.`,
          [
            'Winkel zur Horizontalen behandeln wie Winkel zur $x$-Achse.',
            'Parallelkraft = $x$-Komponente.',
            '$400\\cdot 0{,}5$.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['kraft-zerlegung'] },
      ),
    ],

    // ===== Sub-Goal 1 — Resultierende =====
    1: [
      tag(
        tf(
          '[PRÜFUNG] Die Resultierende mehrerer Kräfte erhält man komponentenweise: $R_x=\\sum F_{ix}$ und $R_y=\\sum F_{iy}$.',
          true,
          `**Ansatz:** Vektoraddition wirkt komponentenweise. Resultierende ist die Vektorsumme aller Einzelkräfte.

**Rechnung:** $\\vec R=\\sum_i\\vec F_i\\Rightarrow R_x=F_{1x}+F_{2x}+\\dots,\\;R_y=F_{1y}+F_{2y}+\\dots$. Beispiel $\\vec F_1=(3,0),\\vec F_2=(0,4)$: $R_x=3,R_y=4,\\vec R=(3,4)$.

**Probe:** Geometrisch — Pfeile aneinandersetzen, vom Anfang des ersten zur Spitze des letzten. Algebraisch identisch zur Komponenten-Addition.

**Typischer Fehler:** Beträge addieren ($|\\vec F_1|+|\\vec F_2|+\\dots$) — verliert die Richtungsinformation und überschätzt $|\\vec R|$.`,
          [
            'Wie addiert man Vektoren? Achse für Achse.',
            'Pro Komponente einzeln summieren.',
            'Beträge addieren ist falsch — Richtung würde verloren gehen.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['resultierende'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Zwei Kräfte: $\\vec F_1$ mit $|F_1|=200\\,\\text{N}$ unter $60°$ zur $x$-Achse und $\\vec F_2$ mit $|F_2|=100\\,\\text{N}$ unter $0°$ zur $x$-Achse. Berechne $R_x$ in N.',
          200, 0, 'N',
          `**Ansatz:** Erst zerlegen, dann komponentenweise addieren.

**Rechnung:** $F_{1x}=200\\cos 60°=200\\cdot 0{,}5=100\\,\\text{N}$. $F_{2x}=100\\cos 0°=100\\,\\text{N}$. $R_x=100+100=200\\,\\text{N}$.

**Probe:** $F_{1y}=200\\sin 60°\\approx 173{,}2$, $F_{2y}=0$. $R_y\\approx 173{,}2$. Resultierende $\\vec R\\approx(200;\\,173{,}2)$, $|\\vec R|\\approx\\sqrt{40000+30000}\\approx 264{,}6\\,\\text{N}$. Plausibel: zwischen $|F_1|+|F_2|=300$ (parallel) und $|F_1-F_2|=100$ (antiparallel).

**Typischer Fehler:** Beträge direkt addieren ($200+100=300$) ohne Zerlegung — würde Parallelität voraussetzen.`,
          [
            'Schritt 1: Komponenten via $\\cos\\alpha$ ausrechnen.',
            'Schritt 2: $x$-Komponenten addieren.',
            '$200\\cos 60°+100\\cos 0°$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['resultierende', 'kraft-zerlegung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler hat $\\vec F_1=(3,\\,0)\\,\\text{N}$ und $\\vec F_2=(0,\\,4)\\,\\text{N}$ und rechnet $|\\vec R|=|\\vec F_1|+|\\vec F_2|=3+4=7\\,\\text{N}$. Welcher Wert ist korrekt — und warum?',
          [
            '$|\\vec R|=5\\,\\text{N}$ — der Schüler hat Beträge addiert. Korrekt: erst Komponenten addieren ($\\vec R=(3,4)$), dann Pythagoras: $\\sqrt{9+16}=5$.',
            '$|\\vec R|=7\\,\\text{N}$ — der Schüler hat richtig gerechnet, Beträge addieren funktioniert immer.',
            '$|\\vec R|=12\\,\\text{N}$ — Beträge müssen multipliziert werden.',
            '$|\\vec R|=3{,}5\\,\\text{N}$ — der Schüler hätte den Mittelwert bilden müssen.',
          ],
          0,
          `**Ansatz:** Vektoraddition arbeitet **komponentenweise**, nicht über Beträge. Beträge addieren überschätzt $|\\vec R|$ außer bei Parallelität.

**Rechnung:** $\\vec R=\\vec F_1+\\vec F_2=(3+0,\\,0+4)=(3,4)\\,\\text{N}$. $|\\vec R|=\\sqrt{3^2+4^2}=\\sqrt{25}=5\\,\\text{N}$.

**Probe:** $\\vec F_1$ und $\\vec F_2$ stehen senkrecht aufeinander → klassisches $3$-$4$-$5$-Dreieck. Bei senkrechten Vektoren ist $|\\vec R|<|\\vec F_1|+|\\vec F_2|$ (Dreiecksungleichung), hier $5<7$ ✓.

**Typischer Fehler:** Skalare Addition mit Vektor-Addition verwechseln. Skalar: $3+4=7$; Vektor: erst Komponenten addieren, dann Betrag bilden — $\\sqrt{9+16}=5$.`,
          [
            'Wie addiert man Vektoren mathematisch korrekt?',
            'Schritt 1: $\\vec R=(R_x,R_y)$. Schritt 2: $|\\vec R|$ via Pythagoras.',
            'Bei senkrechten Kräften gilt das $3$-$4$-$5$-Tripel.',
          ],
          {
            1: 'Beträge zu addieren entspricht Parallelität ($\\cos\\varphi=1$). Bei senkrechten Kräften ist $|\\vec R|=\\sqrt{|\\vec F_1|^2+|\\vec F_2|^2}$, nicht die Summe.',
            2: '$3\\cdot 4=12$ ist eine Multiplikation, keine Vektor-Addition. Vektoren werden komponentenweise addiert.',
            3: 'Mittelwert ist keine vektorielle Operation. Korrekt: Komponenten addieren → Betrag.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['resultierende'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Drei Kräfte: $\\vec F_1$ mit $|F_1|=100\\,\\text{N}$ unter $0°$, $\\vec F_2$ mit $|F_2|=50\\,\\text{N}$ unter $90°$, $\\vec F_3$ mit $|F_3|=50\\,\\text{N}$ unter $180°$. Berechne $R_x$ in N.',
          50, 0, 'N',
          `**Ansatz:** Pro Kraft Komponenten ausrechnen, dann $x$-Komponenten summieren.

**Rechnung:** $F_{1x}=100\\cos 0°=100$. $F_{2x}=50\\cos 90°=0$. $F_{3x}=50\\cos 180°=-50$. $R_x=100+0-50=50\\,\\text{N}$.

**Probe:** $R_y=0+50+0=50\\,\\text{N}$. $\\vec R=(50,50)$, $|\\vec R|=\\sqrt{5000}\\approx 70{,}7\\,\\text{N}$. Plausibel: drei Kräfte teilweise gegenläufig.

**Typischer Fehler:** Kraft 3 mit positivem Vorzeichen einsetzen — bei $\\alpha=180°$ ist $\\cos 180°=-1$, also negativer Beitrag.`,
          [
            'Pro Kraft: $F\\cos\\alpha$ für $x$-Komponente.',
            'Standardwerte: $\\cos 0°=1$, $\\cos 90°=0$, $\\cos 180°=-1$.',
            'Vorzeichen mitnehmen — der dritte Beitrag ist negativ.',
          ],
        ),
        { stage: 'transfer', subGoal: 1, uses: ['resultierende', 'kraft-zerlegung'] },
      ),
    ],

    // ===== Sub-Goal 2 — Gleichgewicht =====
    2: [
      tag(
        tf(
          '[PRÜFUNG] Ein Kraftsystem ist genau dann im Gleichgewicht, wenn $\\sum F_x=0$ **und** $\\sum F_y=0$ (in 2D) gleichzeitig erfüllt sind.',
          true,
          `**Ansatz:** Gleichgewicht $\\iff$ Resultierende $=\\vec 0\\iff$ alle Komponenten der Resultierenden sind null.

**Rechnung:** $\\vec R=\\sum\\vec F_i=\\vec 0\\iff R_x=0\\wedge R_y=0$ (in 2D); analog mit $R_z=0$ in 3D. **Jede** Achse muss erfüllt sein, **beide** Bedingungen gleichzeitig.

**Probe:** Wenn nur $\\sum F_x=0$ gilt, kann der Körper noch in $y$-Richtung beschleunigen — kein Gleichgewicht. Erst wenn beide null sind, bleibt er in Ruhe (statisches Gleichgewicht).

**Typischer Fehler:** „**Oder**" statt „**und**" lesen. Eine einzige Achse reicht nicht — alle Achsen müssen gleich null sein.`,
          [
            'Welche Bedingung garantiert, dass keine Beschleunigung auftritt?',
            'Pro Achse separat prüfen.',
            'Logik: alle Bedingungen gleichzeitig (UND), nicht mindestens eine (ODER).',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['gleichgewicht'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Eine Last $G=100\\,\\text{N}$ hängt symmetrisch an zwei Seilen, die beide unter $30°$ zur Horizontalen aufgespannt sind. Welche Spannung $T$ herrscht in jedem Seil (in N)?',
          100, 0, 'N',
          `**Ansatz:** Symmetrie ausnutzen: $T_1=T_2=T$. Gleichgewicht in $y$-Richtung aufstellen, da $\\sum F_x=0$ wegen Symmetrie automatisch erfüllt ist.

**Rechnung:** Beide Seile ziehen den Aufhängepunkt mit Komponenten $T\\sin 30°$ nach oben (jeweils). $\\sum F_y=2T\\sin 30°-G=0\\Rightarrow 2T\\cdot 0{,}5=100\\Rightarrow T=100\\,\\text{N}$.

**Probe:** Beide Seile zusammen tragen $2T\\sin 30°=2\\cdot 100\\cdot 0{,}5=100\\,\\text{N}=G$ ✓. Außerdem: bei flacherem Winkel müsste $T$ größer sein — bei $30°$ ist $T=G$, was bei dieser Geometrie plausibel ist.

**Typischer Fehler:** $\\cos$ statt $\\sin$ einsetzen — bei Winkel zur Horizontalen liefert $\\sin$ den **vertikalen** Anteil, der das Gewicht trägt.`,
          [
            'Symmetrie: beide Seilspannungen gleich.',
            'Gleichgewicht in $y$: vertikale Anteile heben Gewicht auf.',
            '$2T\\sin 30°=G$, also $T=G/(2\\sin 30°)=G$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['gleichgewicht', 'kraft-zerlegung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler prüft das Gleichgewicht eines Kraftsystems nur per $\\sum F_x=0$ und schließt: „System ist im Gleichgewicht." Was ist der Fehler?',
          [
            'Eine Achse reicht nicht — Gleichgewicht erfordert $\\sum F_x=0$ **und** $\\sum F_y=0$ (und in 3D auch $\\sum F_z=0$). Ohne $y$-Check könnte der Körper vertikal beschleunigen.',
            'Der Schüler hat richtig — wenn $\\sum F_x=0$, ist das System automatisch im Gleichgewicht.',
            'Der Schüler hätte zusätzlich nur $\\sum F_y=0$ prüfen müssen, falls er gerade keine $y$-Komponenten hat.',
            'Der Schüler hätte den Betrag der Resultierenden $|\\vec R|=0$ prüfen müssen — die Komponentenform ist nicht aussagekräftig.',
          ],
          0,
          `**Ansatz:** Gleichgewicht ist eine **Mehr-Achsen-Bedingung**. Nur eine Achse reicht nicht.

**Rechnung:** Beispiel: Last $G=100\\,\\text{N}$ nach unten + horizontale Kräfte $\\vec F_1=(10,0),\\vec F_2=(-10,0)$. $\\sum F_x=0$ ✓, aber $\\sum F_y=-100\\ne 0$ → die Last fällt herunter. Kein Gleichgewicht.

**Probe:** Statisches Gleichgewicht im 2D verlangt **zwei** unabhängige skalare Bedingungen ($x$ und $y$). Bei freier Drehung kommt zusätzlich $\\sum M=0$ (Momentensatz).

**Typischer Fehler:** Den Begriff „Gleichgewicht" auf eine Bedingung reduzieren. Tatsächlich prüft man systematisch alle Achsen — fehlt eine, kann der Körper in dieser Richtung beschleunigen.`,
          [
            'Wie viele unabhängige Gleichungen verlangt 2D-Gleichgewicht?',
            'Welche Achsen sind unabhängig?',
            'Probe: gibt es eine Achse, in der eine Resultierende noch wirkt?',
          ],
          {
            1: '$\\sum F_x=0$ allein lässt vertikale Beschleunigung zu — ein freier Fall ist möglich, also kein Gleichgewicht.',
            2: '„Falls keine $y$-Komponenten" reicht nicht — zur Sicherheit muss man **immer** beide Achsen prüfen, auch wenn man auf den ersten Blick keine $y$-Kräfte sieht.',
            3: '$|\\vec R|=0$ ist eine korrekte Formulierung, aber **äquivalent** zu „$R_x=0\\wedge R_y=0$". Die Komponentenform ist genauso aussagekräftig — der Schüler hat aber nur eine Achse geprüft.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['gleichgewicht'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Eine Last $G=200\\,\\text{N}$ hängt an zwei Seilen: Seil 1 zieht unter $60°$ zur Horizontalen nach links-oben, Seil 2 unter $30°$ zur Horizontalen nach rechts-oben. Berechne die Seilspannung $T_2$ in N.',
          100, 0, 'N',
          `**Ansatz:** Zwei Gleichgewichts-Gleichungen für zwei Unbekannte ($T_1,T_2$). Komponenten exakt aufstellen.

**Rechnung:** $\\sum F_x=0$: $-T_1\\cos 60°+T_2\\cos 30°=0\\Rightarrow T_1=T_2\\cdot\\dfrac{\\cos 30°}{\\cos 60°}=T_2\\cdot\\sqrt 3\\approx 1{,}732\\,T_2$. $\\sum F_y=0$: $T_1\\sin 60°+T_2\\sin 30°-200=0$. Einsetzen: $\\sqrt 3 T_2\\cdot\\frac{\\sqrt 3}{2}+T_2\\cdot\\frac{1}{2}=200\\Rightarrow\\frac{3}{2}T_2+\\frac{1}{2}T_2=2T_2=200\\Rightarrow T_2=100\\,\\text{N}$.

**Probe:** $T_1=\\sqrt 3\\cdot 100\\approx 173{,}2\\,\\text{N}$. $\\sum F_y=173{,}2\\cdot 0{,}866+100\\cdot 0{,}5=150+50=200$ ✓.

**Typischer Fehler:** Vorzeichen bei Seil 1 vergessen — wenn das Seil nach links-oben zieht, ist die $x$-Komponente negativ. Sonst wären beide $x$-Anteile positiv und es gäbe kein Gleichgewicht.`,
          [
            'Zwei Seile = zwei Unbekannte. Zwei Gleichungen aus Gleichgewicht.',
            'Pro Achse: $\\sum F_x=0$ und $\\sum F_y=0$.',
            'Aus $\\sum F_x$ folgt $T_1$ in Abhängigkeit von $T_2$, dann $\\sum F_y$ einsetzen.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['gleichgewicht', 'kraft-zerlegung'] },
      ),
    ],

    // ===== Sub-Goal 3 — Einheitsvektor (technisch) =====
    3: [
      tag(
        tf(
          '[PRÜFUNG] Ein Einheitsvektor $\\hat e$ ist dimensionslos und hat per Definition Länge $|\\hat e|=1$ — er beschreibt nur die Richtung, nicht den Betrag.',
          true,
          `**Ansatz:** Definitionseigenschaften: Länge $=1$ und Richtung wie der Ausgangsvektor. Einheitenfrei.

**Rechnung:** Aus $\\hat e=\\vec a/|\\vec a|$: Im Zähler steht ein Vektor mit Einheit (z. B. N), im Nenner derselbe Vektor mit derselben Einheit — die Einheiten kürzen sich. Ergebnis ist dimensionslos.

**Probe:** Beispiel $\\vec F=(30,40)\\,\\text{N}$, $|\\vec F|=50\\,\\text{N}$. $\\hat e=(30/50,40/50)=(0{,}6;\\,0{,}8)$ — keine Einheit, Länge $1$.

**Typischer Fehler:** Einheitsvektoren mit Einheit ($\\text{N}$ o. ä.) versehen — falsch, Einheit kürzt sich beim Normieren.`,
          [
            'Was bedeutet „Einheits"-Vektor?',
            'Konstruktion: Vektor durch eigenen Betrag — Einheiten heben sich auf.',
            'Test: $|\\hat e|$ muss $1$ ergeben (ohne Einheit).',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['einheits-tech'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Berechne die $x$-Komponente des Einheitsvektors zu $\\vec a=(3,\\,4)$.',
          0.6, 0.001, '',
          `**Ansatz:** $\\hat e=\\vec a/|\\vec a|$ — auf jede Komponente einzeln anwenden.

**Rechnung:** $|\\vec a|=\\sqrt{9+16}=5$. $\\hat e=(3/5,\\,4/5)=(0{,}6;\\,0{,}8)$. $x$-Komponente: $\\mathbf{0{,}6}$.

**Probe:** $|\\hat e|=\\sqrt{0{,}36+0{,}64}=\\sqrt 1=1$ ✓. Klassisches $3$-$4$-$5$-Tripel.

**Typischer Fehler:** Durch eine Komponente ($a_x=3$) statt durch den Betrag $|\\vec a|=5$ teilen — das gibt $1$ statt $0{,}6$.`,
          [
            'Schritt 1: $|\\vec a|$ via Pythagoras.',
            'Schritt 2: $\\vec a/|\\vec a|$ komponentenweise.',
            'Hier $3$-$4$-$5$-Tripel: $|\\vec a|=5$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['einheits-tech'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler bildet den Einheitsvektor zu $\\vec a=(3,\\,4)$ als $\\hat e=(3/3,\\,4/4)=(1,\\,1)$. Welche Antwort enthüllt den Fehler?',
          [
            'Längencheck: $|(1,1)|=\\sqrt 2\\approx 1{,}41\\ne 1$ — also kein Einheitsvektor. Korrekt: $\\vec a$ durch den **Betrag** $|\\vec a|=5$ teilen, nicht durch eine einzelne Komponente. $\\hat e=(0{,}6;\\,0{,}8)$.',
            'Die Rechnung ist richtig — bei Vektoren wird jede Komponente durch sich selbst geteilt.',
            'Das Ergebnis $(1,1)$ ist tatsächlich der Einheitsvektor von $(3,4)$.',
            'Der Fehler liegt im Vorzeichen — korrekt wäre $(-1,-1)$.',
          ],
          0,
          `**Ansatz:** Längen-Test ist die einfachste Diagnose: $|\\hat e|$ muss exakt $1$ sein.

**Rechnung:** $\\hat e=(1,1)$ hätte Länge $\\sqrt{1+1}=\\sqrt 2\\approx 1{,}414$ — nicht $1$. Korrekt: $|\\vec a|=5$, $\\hat e=(3/5,4/5)=(0{,}6;\\,0{,}8)$. Längencheck: $\\sqrt{0{,}36+0{,}64}=1$ ✓.

**Probe:** Methodische Diagnose: „durch Komponente teilen" liefert ein Tupel mit Komponenten zwischen $0$ und $1$, **aber** ohne Längen-Garantie. Nur „durch Betrag teilen" garantiert Länge $1$.

**Typischer Fehler:** Operationen auf Vektoren komponentenweise mit Operationen auf Skalaren verwechseln. Beim Normieren ist es **eine** Skalarzahl ($|\\vec a|$), durch die geteilt wird, nicht jeweils die eigene Komponente.`,
          [
            'Was muss ein Einheitsvektor erfüllen?',
            'Längen-Test: $|\\hat e|=1$.',
            'Welche Operation garantiert Länge $1$?',
          ],
          {
            1: 'Komponente durch sich selbst zu teilen liefert immer $1$ (bei nicht-null Komponente) — das gibt keinen Bezug zur Vektorlänge.',
            2: '$(1,1)$ hat Länge $\\sqrt 2$, nicht $1$ — also kein Einheitsvektor.',
            3: 'Vorzeichen-Wechsel ändert Richtung, nicht Länge. $(-1,-1)$ hätte ebenfalls Länge $\\sqrt 2\\ne 1$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['einheits-tech'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Berechne die $y$-Komponente des Einheitsvektors zu $\\vec a=(2,\\,-1,\\,2)$ (3D). Runde auf 3 Nachkommastellen.',
          -0.333, 0.005, '',
          `**Ansatz:** $\\hat e=\\vec a/|\\vec a|$ — auch in 3D unverändert.

**Rechnung:** $|\\vec a|=\\sqrt{4+1+4}=\\sqrt 9=3$. $\\hat e=(2/3,\\,-1/3,\\,2/3)\\approx(0{,}667;\\,-0{,}333;\\,0{,}667)$. $y$-Komponente: $\\mathbf{-1/3\\approx -0{,}333}$.

**Probe:** $|\\hat e|=\\sqrt{4/9+1/9+4/9}=\\sqrt{9/9}=1$ ✓. Vorzeichen-Plausibilität: $a_y=-1<0$, also $\\hat e_y<0$ — passt.

**Typischer Fehler:** Vorzeichen verlieren — $|\\vec a|$ ist immer positiv, aber Komponenten dürfen negativ sein. $\\hat e_y=-1/3$, nicht $1/3$.`,
          [
            'Auch in 3D: $\\hat e=\\vec a/|\\vec a|$.',
            '$|\\vec a|$ via 3D-Pythagoras: $\\sqrt{a_x^2+a_y^2+a_z^2}$.',
            'Hier $|\\vec a|=3$, also $\\hat e_y=-1/3$.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['einheits-tech'] },
      ),
    ],

    // ===== Sub-Goal 4 — Betrag und Richtung der Resultierenden =====
    4: [
      tag(
        tf(
          '[PRÜFUNG] Der Betrag der Resultierenden in 2D ergibt sich zu $|\\vec R|=\\sqrt{R_x^2+R_y^2}$.',
          true,
          `**Ansatz:** Betrag = Pythagoras auf die Komponenten — gilt für jeden Vektor in 2D, also auch für die Resultierende.

**Rechnung:** Standard-Betragsformel angewendet auf $\\vec R=(R_x,R_y)$: $|\\vec R|=\\sqrt{R_x^2+R_y^2}$.

**Probe:** Beispiel $\\vec R=(3,4)$: $|\\vec R|=\\sqrt{9+16}=5$ — klassisches $3$-$4$-$5$-Tripel.

**Typischer Fehler:** $|\\vec R|=R_x+R_y$ rechnen (Manhattan-Norm) — das ist nicht der euklidische Betrag.`,
          [
            'Welche Formel gibt die Länge eines Vektors?',
            'Pythagoras auf die Komponenten.',
            'Für die Resultierende identisch wie für jeden anderen Vektor.',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['r-betrag-richtung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Eine Resultierende beträgt $\\vec R=(3,\\,4)\\,\\text{N}$. Wie groß ist $|\\vec R|$?',
          ['$5\\,\\text{N}$', '$7\\,\\text{N}$', '$25\\,\\text{N}$', '$12\\,\\text{N}$'],
          0,
          `**Ansatz:** $|\\vec R|=\\sqrt{R_x^2+R_y^2}$.

**Rechnung:** $|\\vec R|=\\sqrt{9+16}=\\sqrt{25}=5\\,\\text{N}$.

**Probe:** $3$-$4$-$5$-Tripel — klassisch. ✓

**Typischer Fehler:** Komponenten direkt addieren ($3+4=7$) — Manhattan-Norm, nicht euklidisch. Oder Wurzel vergessen ($\\sqrt{25}=5$, nicht $25$).`,
          [
            'Drei Schritte: quadrieren, summieren, Wurzel ziehen.',
            'Standardtripel: $3$-$4$-?',
            '$\\sqrt{9+16}=\\sqrt{25}$.',
          ],
          {
            1: 'Komponenten direkt zu addieren ($3+4=7$) ist **Manhattan-Norm**, nicht euklidischer Betrag. Pythagoras verlangt erst quadrieren, dann summieren.',
            2: '$25$ ist $|\\vec R|^2$ — die Wurzel am Ende wurde vergessen. $\\sqrt{25}=5$.',
            3: '$3\\cdot 4=12$ ist eine Multiplikation, keine Längenformel. Pythagoras verwendet Quadrate und Wurzel.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['r-betrag-richtung'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Zwei senkrechte Kräfte: $\\vec F_1=(8,\\,0)\\,\\text{N}$ und $\\vec F_2=(0,\\,6)\\,\\text{N}$. Berechne den Betrag der Resultierenden $|\\vec R|$ in N.',
          10, 0, 'N',
          `**Ansatz:** Erst Resultierende, dann Betrag.

**Rechnung:** $\\vec R=(8+0,\\,0+6)=(8,6)$. $|\\vec R|=\\sqrt{64+36}=\\sqrt{100}=10\\,\\text{N}$.

**Probe:** Senkrechte Kräfte → $|\\vec R|^2=|\\vec F_1|^2+|\\vec F_2|^2=64+36=100$ ✓. Außerdem $6$-$8$-$10$ ist verdoppeltes $3$-$4$-$5$-Tripel.

**Typischer Fehler:** Beträge direkt addieren ($8+6=14$) — gilt nur bei Parallelität.`,
          [
            'Schritt 1: $\\vec R$ komponentenweise.',
            'Schritt 2: Pythagoras auf $\\vec R$.',
            'Bei senkrechten Kräften: $|\\vec R|=\\sqrt{|\\vec F_1|^2+|\\vec F_2|^2}$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['r-betrag-richtung', 'resultierende'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler berechnet die Richtung von $\\vec R=(-3,\\,4)$ als $\\alpha=\\arctan(4/(-3))\\approx -53°$ (zur $x$-Achse). Was ist der Fehler?',
          [
            'Bei negativem $R_x$ liefert $\\arctan$ einen Winkel im Q4 statt Q2. Korrekt: $\\alpha=180°-53°=127°$. Standardlösung: $\\operatorname{atan2}(R_y,R_x)$ verwenden, das den Quadranten korrekt behandelt.',
            'Die Rechnung ist korrekt — $\\arctan(R_y/R_x)$ liefert immer den richtigen Winkel.',
            'Korrekt wäre $\\alpha=53°$, weil der Betrag des Winkels zählt.',
            '$\\arctan$ liefert nur Werte in $[0°,\\,90°]$ — der Schüler hätte den Wert positiv übernehmen müssen.',
          ],
          0,
          `**Ansatz:** $\\arctan$ hat **Wertebereich** $(-90°,\\,90°)$ — das umfasst nur Q1 (positiv) und Q4 (negativ). Bei Q2/Q3 muss man $\\pm 180°$ addieren.

**Rechnung:** $\\vec R=(-3,4)$ liegt im **Q2** ($x<0,y>0$). $\\arctan(4/(-3))=\\arctan(-1{,}333)\\approx -53°$ — das ist Q4. Korrektur: $\\alpha=-53°+180°=127°$. Das ist der Winkel zur $+x$-Achse, gemessen gegen den Uhrzeigersinn.

**Probe:** Anschaulich: $\\vec R$ zeigt nach links-oben, also liegt der Winkel zwischen $90°$ und $180°$. $127°$ passt, $-53°$ (Q4, rechts-unten) nicht.

**Typischer Fehler:** Den Quadrant nicht prüfen und $\\arctan$-Output blind übernehmen. Standard-Werkzeug: $\\operatorname{atan2}(R_y,R_x)$ — das liefert Winkel im vollen Bereich $(-180°,\\,180°]$.`,
          [
            'Wertebereich von $\\arctan$ — welche Quadranten deckt es ab?',
            'Bei $R_x<0$ ist Korrektur nötig.',
            'Plausibilität: Skizze zeichnen, Quadrant ablesen.',
          ],
          {
            1: '$\\arctan$ allein deckt nur Q1/Q4 ab. Bei $R_x<0$ landet man im Q4-Wert, obwohl der Vektor im Q2 oder Q3 liegt.',
            2: 'Der Betrag des Winkels reicht nicht — die **Richtung** entscheidet, ob es links oder rechts ist. $-53°$ und $+53°$ zeigen zu unterschiedlichen Stellen.',
            3: '$\\arctan$ liefert Werte in $(-90°,\\,90°)$ — also kann der Output negativ sein. Die Aussage „nur $[0°,\\,90°]$" ist falsch.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['r-betrag-richtung'] },
      ),

      tag(
        ni(
          '[PRÜFUNG] Drei Kräfte: $|F_1|=10\\,\\text{N}$ unter $0°$, $|F_2|=12\\,\\text{N}$ unter $90°$, $|F_3|=5\\,\\text{N}$ unter $180°$. Berechne den Betrag der Resultierenden $|\\vec R|$ in N.',
          13, 0, 'N',
          `**Ansatz:** Pro Kraft Komponenten ausrechnen → komponentenweise summieren → Betrag.

**Rechnung:** $F_{1x}=10,F_{1y}=0$. $F_{2x}=0,F_{2y}=12$. $F_{3x}=-5,F_{3y}=0$. $\\vec R=(10+0-5,\\,0+12+0)=(5,12)$. $|\\vec R|=\\sqrt{25+144}=\\sqrt{169}=13\\,\\text{N}$.

**Probe:** $5$-$12$-$13$ ist klassisches pythagoreisches Tripel ($25+144=169$). ✓

**Typischer Fehler:** Vorzeichen bei Kraft 3 vergessen ($\\cos 180°=-1$, also $F_{3x}=-5$, nicht $+5$). Würde $\\vec R=(15,12)$ und $|\\vec R|\\approx 19{,}2$ liefern.`,
          [
            'Drei Schritte: Komponenten — $\\vec R$ — Betrag.',
            'Standardwinkel: $\\cos 0°=1,\\cos 90°=0,\\cos 180°=-1$.',
            'Pythagoreisches Tripel: $5$-$12$-?',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['r-betrag-richtung', 'resultierende', 'kraft-zerlegung'] },
      ),
    ],

    // ===== Sub-Goal 5 — Plausibilitäts-Check =====
    5: [
      tag(
        tf(
          '[PRÜFUNG] Wenn eine Kraft im 3. Quadranten liegt (Skizze: Pfeil nach links-unten), sind $F_x$ und $F_y$ beide negativ.',
          true,
          `**Ansatz:** Quadranten-Schema: Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$.

**Rechnung:** Q3 $\\Rightarrow x<0,y<0$. Daher $F_x<0,F_y<0$.

**Probe:** Beispiel $\\vec F=(-30,-40)\\,\\text{N}$ liegt im Q3 (Pfeil zeigt nach links-unten). $|\\vec F|=50\\,\\text{N}$, beide Komponenten negativ.

**Typischer Fehler:** Quadranten verwechseln (z. B. Q3 und Q4). Faustregel: Vorzeichen von $x$ entscheidet links/rechts, Vorzeichen von $y$ entscheidet oben/unten.`,
          [
            'Quadranten-Schema in $(x,y)$-Vorzeichen.',
            'Q3 = links unten = beide negativ.',
            'Skizze zeichnen und Vorzeichen ablesen.',
          ],
        ),
        { stage: 'recognize', subGoal: 5, uses: ['plausi-vorzeichen'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Eine Kraft zeigt in der Skizze nach **rechts-unten**. Welche Vorzeichen-Kombination der Komponenten ist plausibel?',
          ['$F_x>0,\\,F_y<0$', '$F_x<0,\\,F_y>0$', '$F_x>0,\\,F_y>0$', '$F_x<0,\\,F_y<0$'],
          0,
          `**Ansatz:** Skizzen-Richtung in Quadrant übersetzen. Rechts $\\to x>0$, unten $\\to y<0$. Das ist Q4.

**Rechnung:** Q4 hat Vorzeichen-Paar $(+,-)$ — $F_x>0$, $F_y<0$.

**Probe:** Beispiel $\\vec F=(40,-30)\\,\\text{N}$ — Pfeil zeigt nach rechts (positiver $x$) und unten (negativer $y$). Passt zur Skizze.

**Typischer Fehler:** „Unten" mit „links" verwechseln und das Vorzeichen falschen Achse zuordnen.`,
          [
            'Quadranten-Schema durchdenken.',
            'Rechts → $x$-Vorzeichen?',
            'Unten → $y$-Vorzeichen?',
          ],
          {
            1: 'Q2 ($-,+$): links-oben. Hier ist die Kraft aber nach rechts-unten gerichtet.',
            2: 'Q1 ($+,+$): rechts-oben. Wir suchen nach rechts-**unten**.',
            3: 'Q3 ($-,-$): links-unten. Wir suchen rechts-unten — $x$ ist dort positiv.',
          },
        ),
        { stage: 'apply-guided', subGoal: 5, uses: ['plausi-vorzeichen'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Eine Kraft $F=50\\,\\text{N}$ wirkt unter $\\alpha=135°$ zur $x$-Achse. Welche Vorzeichen haben die Komponenten?',
          [
            '$F_x<0,\\,F_y>0$ — Q2, denn $\\cos 135°<0$ und $\\sin 135°>0$.',
            '$F_x>0,\\,F_y<0$ — Q4.',
            '$F_x>0,\\,F_y>0$ — Q1.',
            '$F_x<0,\\,F_y<0$ — Q3.',
          ],
          0,
          `**Ansatz:** Winkel $135°$ liegt zwischen $90°$ und $180°$ → Q2.

**Rechnung:** $F_x=50\\cos 135°=50\\cdot(-\\sqrt 2/2)\\approx -35{,}36<0$. $F_y=50\\sin 135°=50\\cdot(\\sqrt 2/2)\\approx 35{,}36>0$. Q2: $(-,+)$.

**Probe:** Quadranten-Skizze — Pfeil zur Stelle $(-35,35)$ zeigt nach links-oben, passt zu Q2.

**Typischer Fehler:** Vorzeichen aus dem Standardwinkel $45°$ ableiten ohne Beachtung des Quadranten — $\\cos 45°>0$, aber $\\cos 135°<0$ wegen Q2.`,
          [
            'Welcher Quadrant deckt den Bereich $90°<\\alpha<180°$ ab?',
            'Vorzeichen von $\\cos$ und $\\sin$ in Q2 nachschlagen.',
            'Q2: $\\cos<0,\\,\\sin>0$.',
          ],
          {
            1: 'Q4 wäre $-90°<\\alpha<0°$ — also nicht $135°$.',
            2: 'Q1 ist $0°<\\alpha<90°$ — $135°$ ist außerhalb.',
            3: 'Q3 wäre $180°<\\alpha<270°$ (oder negativ $-180°$ bis $-90°$) — $135°$ ist im oberen Halbraum, also $\\sin>0$.',
          },
        ),
        { stage: 'apply-independent', subGoal: 5, uses: ['plausi-vorzeichen', 'kraft-zerlegung'] },
      ),

      tag(
        mc(
          '[PRÜFUNG] Ein Schüler hat eine Kraft skizziert, die nach links-oben zeigt, und schreibt $F_x=+50\\,\\text{N}$. Was sollte ihn stutzig machen?',
          [
            'Eine Kraft nach links-oben muss $F_x<0$ haben (Q2). Positives $F_x$ widerspricht der Skizze — wahrscheinlich wurde der Winkel falsch gemessen oder das Vorzeichen vergessen.',
            'Die Skizze ist Geschmackssache — Vorzeichen können willkürlich gewählt werden.',
            'Solange $|F_x|=50$ stimmt, ist das Vorzeichen egal.',
            'Die Skizze muss falsch sein, weil $F_x$ immer positiv ist.',
          ],
          0,
          `**Ansatz:** Plausibilitäts-Check zwischen Skizze und Rechenergebnis ist Pflicht.

**Rechnung:** Links-oben = Q2 = $(-,+)$. $F_x>0$ widerspricht dem direkt. Mögliche Ursachen: (1) Winkel zur Vertikalen statt zur Horizontalen gemessen; (2) Vorzeichen bei der Komponentenzerlegung vergessen ($F_x=F\\cos\\alpha$ — bei $\\alpha\\in(90°,180°)$ ist $\\cos\\alpha<0$); (3) Skizze falsch interpretiert.

**Probe:** Bei jeder Kraftaufgabe nach der Rechnung die Vorzeichen mit der Skizze vergleichen — passt das Vorzeichen-Quartett zum Quadranten? Wenn nicht: Fehler aufspüren, **bevor** man weiterrechnet.

**Typischer Fehler:** Skizze und Rechnung als getrennte Welten behandeln. Tatsächlich ist die Skizze die wichtigste Plausibilitäts-Kontrolle.`,
          [
            'Was sagt die Skizze über die Vorzeichen aus?',
            'Q2 hat welches Vorzeichen-Paar?',
            'Wenn Skizze und Rechnung sich widersprechen: Fehler suchen.',
          ],
          {
            1: 'Vorzeichen sind nicht „Geschmackssache" — sie kodieren Richtungsinformation.',
            2: 'Vorzeichen ist im Maschinenbau **wesentlich** — falsches Vorzeichen kippt die ganze Folgerechnung (Resultierende, Drehmoment, Arbeit).',
            3: '$F_x$ kann sehr wohl negativ sein — bei jeder Kraft, die nach links wirkt.',
          },
        ),
        { stage: 'error-analysis', subGoal: 5, uses: ['plausi-vorzeichen'] },
      ),

      tag(
        sorting(
          '[PRÜFUNG] Bringe die Schritte einer typischen Kraftsystem-Aufgabe (Resultierende mit Plausibilitätscheck) in die richtige Reihenfolge.',
          [
            'Skizze des Kraftsystems mit Koordinatensystem zeichnen — Winkel und Wirkungslinien eintragen.',
            'Pro Kraft Komponenten via $F_x=F\\cos\\alpha,\\,F_y=F\\sin\\alpha$ zerlegen.',
            'Komponenten achsenweise addieren: $R_x=\\sum F_{ix},\\,R_y=\\sum F_{iy}$.',
            'Vorzeichen der Komponenten mit der Skizze vergleichen (Plausibilitäts-Check).',
            'Falls gefragt: Betrag $|\\vec R|=\\sqrt{R_x^2+R_y^2}$ und Richtung $\\alpha=\\arctan(R_y/R_x)$ (Quadrant beachten).',
          ],
          [0, 1, 2, 3, 4],
          `**Ansatz:** Standard-Vorgehen für jede Kraftaufgabe — fünf strukturierte Schritte.

**Rechnung:** (1) Skizze klärt Winkel und Vorzeichen-Konventionen. (2) Zerlegung bringt jede Kraft in Komponentenform. (3) Vektoraddition als komponentenweise Summe. (4) Plausibilität prüft Vorzeichen anhand der Skizze. (5) Endform Betrag/Richtung berechnen, falls gefragt.

**Probe:** Die Reihenfolge ist nicht beliebig — Schritt 4 (Plausibilität) muss **nach** der Rechnung stehen, sonst hat man nichts zu checken. Schritt 5 setzt korrekte Komponenten voraus.

**Typischer Fehler:** Plausibilitätscheck weglassen oder erst am Ende. Empfehlung: nach jedem Zwischenresultat kurz prüfen.`,
          [
            'Skizze zuerst — sonst hat man keinen Bezug.',
            'Komponentenrechnung gehört in die Mitte.',
            'Vorzeichen-Check nach der Rechnung, vor dem Endresultat.',
          ],
        ),
        { stage: 'transfer', subGoal: 5, uses: ['plausi-vorzeichen', 'resultierende'] },
      ),
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // Lektion 2-1: Geradengleichung
  // SG0: Parameterform · SG1: Punkt-Test · SG2: 4 Lagefälle · SG3: Parallel/Identisch
  // SG4: Schnittpunkt · SG5: Windschief
  // ───────────────────────────────────────────────────────────────────────
  'vek-2-1': {
    // ===== Sub-Goal 0 — Parameterform / Stützpunkt / Richtungsvektor =====
    0: [
      tag(
        tf(
          'Für $t=0$ liefert die Geradengleichung $\\vec{r}=\\vec{p}+t\\vec{v}$ den Stützpunkt $\\vec{p}$ — der Stützpunkt liegt also immer auf der Geraden.',
          true,
          `**Ansatz:** Einsetzen $t=0$ in die Parameterform.

**Rechnung:** $\\vec{r}(0)=\\vec{p}+0\\cdot\\vec{v}=\\vec{p}$. Der Stützpunkt $\\vec{p}$ ist somit der spezielle Punkt der Geraden, der bei $t=0$ angenommen wird.

**Probe:** Beispiel $g:\\vec{r}=(2,3,1)+t(1,0,2)$. Für $t=0$: $\\vec{r}=(2,3,1)=\\vec{p}$ ✓. Liegt offensichtlich auf $g$.

**Typischer Fehler:** Glauben, $\\vec p$ wäre nur ein Hilfspunkt außerhalb der Geraden — er ist tatsächlich **der** Bezugspunkt **auf** der Geraden.`,
          [
            'Was passiert bei $t=0$? Der Term $t\\vec{v}$ verschwindet.',
            '$\\vec{r}(0)=\\vec{p}$ — der Stützpunkt selbst.',
            'Stützpunkt = $t=0$-Punkt der Parameterform.',
          ],
        ),
        { stage: 'recognize', subGoal: 0, uses: ['g-paramform', 'g-stuetz'] },
      ),

      tag(
        mc(
          'Welche Gleichung beschreibt die Gerade durch den Punkt $P=(2,1,3)$ in Richtung $\\vec{v}=(1,0,2)$?',
          [
            '$\\vec{r}=(2,1,3)+t(1,0,2)$',
            '$\\vec{r}=(1,0,2)+t(2,1,3)$',
            '$\\vec{r}=(2,1,3)+s(1,0,2)+t(0,1,0)$',
            '$\\vec{r}=(3,1,5)+t(1,0,2)$',
          ],
          0,
          `**Ansatz:** Parameterform $\\vec{r}=\\vec{p}+t\\vec{v}$ — Stützpunkt zuerst, dann Richtungsvektor mal Parameter.

**Rechnung:** Mit $\\vec{p}=(2,1,3)$ und $\\vec{v}=(1,0,2)$ ergibt sich direkt $\\vec{r}=(2,1,3)+t(1,0,2)$.

**Probe:** $t=0$ → $(2,1,3)=P$ ✓. $t=1$ → $(3,1,5)$ (weiterer Punkt). Beide Punkte liegen auf der Geraden, beide Richtungen.

**Typischer Fehler:** Stützpunkt und Richtung vertauschen — beide sind Vektoren der gleichen Dimension, aber haben unterschiedliche Rollen. Faustregel: das, was bei $t=0$ herauskommt, ist der Stützpunkt.`,
          [
            'Form: $\\vec{r}=$ Stützpunkt $+ t \\cdot$ Richtung.',
            '$P$ ist der Stützpunkt, $\\vec{v}$ die Richtung.',
            'Probe mit $t=0$: Ergibt sich $P$?',
          ],
          {
            1: 'Stützpunkt und Richtung sind vertauscht. Bei $t=0$ käme $(1,0,2)$ heraus — nicht $P=(2,1,3)$.',
            2: 'Das ist die Parameterform einer **Ebene** mit zwei Parametern $s,t$. Eine Gerade hat nur einen Parameter.',
            3: '$(3,1,5)$ ist ein **anderer** Punkt auf derselben Geraden (für $t=1$ aus der korrekten Form), kein Stützpunkt für $P$. Beide Formen beschreiben dieselbe Gerade, aber $P=(2,1,3)$ ist Bezugspunkt.',
          },
        ),
        { stage: 'apply-independent', subGoal: 0, uses: ['g-paramform', 'g-richt'] },
      ),

      tag(
        mc(
          'Ein Schüler vergleicht $g_1:\\vec{r}=(0,0,0)+t(1,2,3)$ und $g_2:\\vec{r}=(0,0,0)+s(2,4,6)$ und sagt: „Verschiedene Richtungsvektoren — also verschiedene Geraden." Was ist der Fehler?',
          [
            'Ein Vielfaches des Richtungsvektors beschreibt **dieselbe** Gerade. $\\vec{v}_2=2\\vec{v}_1$ und gleicher Stützpunkt → $g_1=g_2$ (identisch).',
            'Der Schüler hat richtig — verschiedene Richtungsvektoren bedeuten verschiedene Geraden.',
            'Die Geraden sind parallel, aber nicht identisch.',
            'Die Geraden sind windschief.',
          ],
          0,
          `**Ansatz:** Geraden sind durch **Punktmenge** definiert — nicht durch eine bestimmte Schreibweise. Vielfache des Richtungsvektors ändern nur die Parametrisierung, nicht die Gerade.

**Rechnung:** $g_1$ enthält Punkte $(t,2t,3t)$ für $t\\in\\mathbb{R}$. $g_2$ enthält Punkte $(2s,4s,6s)=(s'\\cdot 1,s'\\cdot 2,s'\\cdot 3)$ mit $s'=2s$ — exakt dieselbe Menge. Substitution $s=t/2$ macht beide Gleichungen identisch.

**Probe:** Punkt $(1,2,3)$ auf $g_1$ für $t=1$ ✓. Auch auf $g_2$? $1=2s$ → $s=0{,}5$, $2=4\\cdot 0{,}5$ ✓, $3=6\\cdot 0{,}5$ ✓. ✓ Derselbe Punkt erfüllt beide → identische Gerade.

**Typischer Fehler:** Den Richtungsvektor als „Identität" der Geraden lesen. Tatsächlich ist die Gerade durch ihre Punkte definiert — die Wahl von $\\vec{v}$ ist nicht eindeutig (jede Skalierung erlaubt).`,
          [
            'Was definiert eine Gerade — ihre Punkte oder ihre Schreibweise?',
            'Wenn $\\vec{v}_2=k\\vec{v}_1$, dann ist $\\{\\vec{p}+t\\vec{v}_1\\}=\\{\\vec{p}+t\\vec{v}_2\\}$.',
            'Probe: Liefert $g_2$ dieselben Punkte wie $g_1$, nur mit anderer Parametrisierung?',
          ],
          {
            1: 'Verschiedene Richtungsvektoren können sehr wohl dieselbe Gerade beschreiben — solange sie Vielfache voneinander sind.',
            2: 'Parallel-verschieden würde verlangen, dass die Stützpunkte nicht auf der jeweils anderen Geraden liegen. Hier ist der Stützpunkt $(0,0,0)$ identisch — also identische, nicht parallel-verschiedene Geraden.',
            3: 'Windschief verlangt nicht-parallele Richtungen. Hier sind die Richtungen aber parallel.',
          },
        ),
        { stage: 'error-analysis', subGoal: 0, uses: ['g-richt'] },
      ),

      tag(
        matching(
          'Ordne jedem Element der Geradengleichung $\\vec{r}=(2,3,1)+t(1,0,2)$ seine Rolle zu.',
          [
            { left: '$(2,3,1)$', right: 'Stützpunkt — fester Bezugspunkt auf der Geraden' },
            { left: '$(1,0,2)$', right: 'Richtungsvektor — gibt die Bewegungsrichtung an' },
            { left: '$t$', right: 'Parameter — durchläuft alle reellen Zahlen $\\mathbb{R}$' },
            { left: '$\\vec{r}$', right: 'Ortsvektor zu einem Punkt auf der Geraden' },
          ],
          `**Ansatz:** Vier Bestandteile der Parameterform — jeder hat eine eindeutige Rolle.

**Rechnung:** $(2,3,1)$ tritt für $t=0$ als $\\vec{r}$ auf → Stützpunkt. $(1,0,2)$ wird mit $t$ skaliert → Richtungsvektor. $t$ ist die Variable → Parameter. $\\vec{r}$ ist das Ergebnis links → Ortsvektor zu einem konkreten Geradenpunkt.

**Probe:** Konkret: $t=2$ liefert $\\vec{r}=(2,3,1)+2(1,0,2)=(4,3,5)$. Stützpunkt war $(2,3,1)$, Richtung $(1,0,2)$, der konkrete Punkt $\\vec{r}=(4,3,5)$. Alle Rollen klar.

**Typischer Fehler:** Stützpunkt und Richtung verwechseln. Eselsbrücke: der **Stützpunkt** stützt (wie ein Pfeiler), die **Richtung** zeigt (wie ein Wegweiser).`,
          [
            'Welche Elemente tauchen in der Form $\\vec{r}=\\vec{p}+t\\vec{v}$ auf?',
            'Bei $t=0$ verbleibt nur ein Term — das ist der Stützpunkt.',
            'Der Vektor, der mit $t$ multipliziert wird, ist die Richtung.',
          ],
        ),
        { stage: 'transfer', subGoal: 0, uses: ['g-paramform', 'g-stuetz', 'g-richt'] },
      ),
    ],

    // ===== Sub-Goal 1 — Punkt-Test =====
    1: [
      tag(
        tf(
          'Ein Punkt $Q$ liegt genau dann auf der Geraden $\\vec{r}=\\vec{p}+t\\vec{v}$, wenn das Gleichungssystem $Q=\\vec{p}+t\\vec{v}$ in **allen** Komponenten **dasselbe** $t$ liefert.',
          true,
          `**Ansatz:** Geradenpunkt = Stützpunkt + ein konkretes Vielfaches des Richtungsvektors. Ein einziger Parameterwert muss alle Achsen erfüllen.

**Rechnung:** Aus jeder Komponente $Q_i=p_i+t v_i$ folgt $t=(Q_i-p_i)/v_i$ (für $v_i\\ne 0$). Wenn alle drei Berechnungen denselben Wert liefern, liegt $Q$ auf $g$ — sonst nicht.

**Probe:** Beispiel $g:\\vec{r}=(1,2,3)+t(2,1,2)$, $Q=(5,4,7)$. $t$ aus $x$: $t=(5-1)/2=2$. Aus $y$: $t=(4-2)/1=2$. Aus $z$: $t=(7-3)/2=2$. Alle gleich → $Q$ liegt auf $g$.

**Typischer Fehler:** Nur eine Komponente prüfen und sofort schließen — das übersieht den Fall, dass die anderen Komponenten widersprechen.`,
          [
            'Warum reichen 2 von 3 Komponenten nicht?',
            'Ein konsistenter Parameterwert über alle Achsen.',
            'Methode: $t$ aus jeder Komponente ableiten, vergleichen.',
          ],
        ),
        { stage: 'recognize', subGoal: 1, uses: ['g-punkttest'] },
      ),

      tag(
        ni(
          'Gegeben ist die Gerade $g:\\vec{r}=(1,2,3)+t(2,1,2)$. Der Punkt $Q=(5,4,7)$ liegt auf $g$. Welcher Wert von $t$ liefert $Q$?',
          2, 0, '',
          `**Ansatz:** $t$ aus einer Komponente ablesen, dann mit den anderen verifizieren.

**Rechnung:** Aus $x$: $1+2t=5 \\Rightarrow t=2$. Probe: $y=2+1\\cdot 2=4$ ✓. $z=3+2\\cdot 2=7$ ✓. Alle Komponenten liefern dasselbe $t=2$, also liegt $Q$ tatsächlich auf $g$, und $t=2$ ist der gesuchte Parameter.

**Probe:** $\\vec{p}+2\\vec{v}=(1+4,\\,2+2,\\,3+4)=(5,4,7)=Q$ ✓.

**Typischer Fehler:** $t$ aus der falschen Achse berechnen (z. B. mit $v_y=0$ — hier kein Problem, aber generell). Oder Vorzeichen falsch übernehmen.`,
          [
            'Wähle eine Komponente mit $v_i\\ne 0$.',
            'Stelle nach $t$ um: $t=(Q_i-p_i)/v_i$.',
            'Verifiziere durch Einsetzen in die anderen Komponenten.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 1, uses: ['g-punkttest'] },
      ),

      tag(
        mc(
          'Ein Schüler prüft, ob $Q=(5,99,99)$ auf $g:\\vec{r}=(1,2,3)+t(2,1,2)$ liegt. Aus der $x$-Komponente bekommt er $t=2$ und schließt: „Q liegt auf $g$." Was ist der Fehler?',
          [
            'Der Punkt-Test verlangt **dasselbe** $t$ in **allen** Komponenten. Hier liefert $y$: $2+t=99\\Rightarrow t=97$ — Widerspruch zu $t=2$. Also liegt $Q$ **nicht** auf $g$.',
            'Der Schüler hat richtig — die $x$-Komponente reicht aus.',
            'Die $y$- und $z$-Komponente sind irrelevant, solange $x$ stimmt.',
            'Der Schüler müsste zusätzlich den Betrag $|\\vec{v}|$ prüfen.',
          ],
          0,
          `**Ansatz:** Geradenpunkt → ein einziger Parameter $t$ erfüllt **alle** Komponentengleichungen gleichzeitig.

**Rechnung:** Aus $x=5$: $t=2$. Aus $y=99$: $2+1\\cdot t=99\\Rightarrow t=97$. Zwei verschiedene Werte für denselben Parameter → Widerspruch → $Q$ liegt nicht auf $g$.

**Probe:** $\\vec p+2\\vec v=(5,4,7)\\ne Q=(5,99,99)$ — bestätigt schon ohne LGS, dass die anderen Komponenten nicht passen.

**Typischer Fehler:** Nur die erste passende Komponente prüfen und dann abbrechen. In 3D müssen **alle drei** Achsen denselben Parameter liefern; jede einzelne reicht nicht aus.`,
          [
            'Wie viele Komponenten hat ein 3D-Punkt?',
            'Müssen alle Komponenten denselben Parameter liefern?',
            'Probe: rechne $t$ aus $y$ und $z$ separat aus.',
          ],
          {
            1: 'Die $x$-Komponente allein reicht in **3D** nicht aus — sie bestimmt nur eine Bedingung, aber drei sind nötig.',
            2: 'Doch — alle drei Komponenten müssen denselben Parameter liefern. Sonst liegt der Punkt nicht auf der Geraden.',
            3: 'Der Betrag $|\\vec{v}|$ ist für den Punkt-Test irrelevant; entscheidend ist der **Parameter $t$**, der über alle Komponenten konsistent sein muss.',
          },
        ),
        { stage: 'error-analysis', subGoal: 1, uses: ['g-punkttest'] },
      ),

      tag(
        mc(
          'Welcher der folgenden Punkte liegt auf der Geraden $g:\\vec{r}=(0,0,0)+t(1,2,3)$?',
          ['$(2,4,6)$', '$(1,2,4)$', '$(3,2,1)$', '$(1,1,1)$'],
          0,
          `**Ansatz:** Pro Kandidat: $t$ aus $x$ ableiten, dann $y$ und $z$ verifizieren.

**Rechnung:** $(2,4,6)$: aus $x$ $t=2$; $y=2\\cdot 2=4$ ✓; $z=3\\cdot 2=6$ ✓. Punkt liegt auf $g$. $(1,2,4)$: $t=1$; $y=2$ ✓; $z=3\\ne 4$ ✗. $(3,2,1)$: $t=3$; $y=6\\ne 2$ ✗. $(1,1,1)$: $t=1$; $y=2\\ne 1$ ✗.

**Probe:** $(2,4,6)$ ist exakt $2\\vec{v}$ — bestätigt Lage auf der Geraden ($\\vec{r}(2)=2(1,2,3)=(2,4,6)$ ✓).

**Typischer Fehler:** Nur eine Achse prüfen und vorschnell wählen. $(3,2,1)$ enthält die richtigen Zahlen, aber in falscher Reihenfolge — passt nicht.`,
          [
            'Strategie: $t$ aus der ersten Komponente bestimmen, dann verifizieren.',
            'Bei $\\vec{p}=\\vec{0}$ ist $Q=t\\vec{v}$ direkt — also $Q/t=\\vec{v}$.',
            'Welches Vielfaches von $(1,2,3)$ erscheint in den Optionen?',
          ],
          {
            1: '$t=1$ aus $x=1$; aber $z=3\\cdot 1=3$, nicht $4$ — Widerspruch.',
            2: '$t=3$ aus $x=3$; aber $y=2\\cdot 3=6$, nicht $2$ — Widerspruch.',
            3: '$t=1$ aus $x=1$; aber $y=2\\cdot 1=2$, nicht $1$ — Widerspruch.',
          },
        ),
        { stage: 'transfer', subGoal: 1, uses: ['g-punkttest', 'g-paramform'] },
      ),
    ],

    // ===== Sub-Goal 2 — 4 Lagefälle =====
    2: [
      tag(
        tf(
          'Zwei Geraden im 3D-Raum nehmen genau eine von vier möglichen Lagen ein: identisch, parallel (verschieden), schneidend oder windschief.',
          true,
          `**Ansatz:** Vollständige Klassifikation nach (a) Parallelität der Richtungsvektoren und (b) Existenz eines gemeinsamen Punkts.

**Rechnung:** (i) parallel + gemeinsamer Punkt → identisch; (ii) parallel + kein Punkt → parallel verschieden; (iii) nicht-parallel + Schnittpunkt → schneidend; (iv) nicht-parallel + kein Schnittpunkt → windschief. Genau **vier** disjunkte Fälle.

**Probe:** Beispiel jede Klasse: $g_1=g_2$ identisch · $g_1\\parallel g_2$ aber unterschiedliche Stützpunkte → parallel · zwei Achsen ($x$- und $y$-Achse) → schneidend in $(0,0,0)$ · $x$-Achse und um $z=1$ verschobene $y$-Achse → windschief.

**Typischer Fehler:** Identisch mit „schneidend in allen Punkten" verwechseln — identisch ist ein **eigener** Fall der Klassifikation.`,
          [
            'Wie viele Möglichkeiten gibt es bei zwei Geraden?',
            'Klassifikation läuft über zwei Achsen: Parallelität und Schnittpunkt.',
            'In 2D sind es nur drei Fälle — windschief gibt es dort nicht.',
          ],
        ),
        { stage: 'recognize', subGoal: 2, uses: ['g-lagefall'] },
      ),

      tag(
        mc(
          'Wie liegen die beiden Geraden $g_1:\\vec{r}=(0,0,0)+t(1,1,0)$ und $g_2:\\vec{r}=(1,0,0)+s(0,1,0)$ zueinander?',
          ['Schneidend in $(1,1,0)$', 'Parallel verschieden', 'Identisch', 'Windschief'],
          0,
          `**Ansatz:** Schritt 1 — Parallelitätstest. Schritt 2 — Schnittpunkt-Test.

**Rechnung:** $\\vec{v}_1=(1,1,0),\\vec{v}_2=(0,1,0)$. Nicht-Vielfache → nicht parallel. Setze $g_1=g_2$: $(t,t,0)=(1,s,0)$ → $t=1, s=1, 0=0$ ✓. Lösbar → schneidend bei $(1,1,0)$.

**Probe:** $g_1(1)=(1,1,0)$ und $g_2(1)=(1,1,0)$ — beide liefern denselben Punkt für $t=s=1$. ✓

**Typischer Fehler:** Voreilig „windschief" wählen, weil 3D — aber nicht-parallel und ein Schnittpunkt vorhanden → schneidend.`,
          [
            'Erst Parallelität prüfen.',
            'Dann LGS aus Komponenten gleichsetzen.',
            'Hier: $\\vec{v}_1$ und $\\vec{v}_2$ sind keine Vielfachen voneinander.',
          ],
          {
            1: 'Parallel würde verlangen, dass $\\vec{v}_2=k\\vec{v}_1$. Hier sind sie aber linear unabhängig.',
            2: 'Identisch verlangt **parallel** zusätzlich zum gemeinsamen Punkt. Hier sind die Richtungen nicht parallel.',
            3: 'Windschief verlangt **kein** Schnittpunkt. Hier existiert aber einer bei $(1,1,0)$.',
          },
        ),
        { stage: 'apply-guided', subGoal: 2, uses: ['g-lagefall'] },
      ),

      tag(
        mc(
          'Klassifiziere die Lage von $g_1:\\vec{r}=(0,0,0)+t(1,1,0)$ und $g_2:\\vec{r}=(2,3,0)+s(1,1,0)$.',
          ['Parallel verschieden', 'Identisch', 'Schneidend', 'Windschief'],
          0,
          `**Ansatz:** Parallelitäts- und Identitäts-Test.

**Rechnung:** $\\vec{v}_1=\\vec{v}_2=(1,1,0)$ → parallel. Liegt $(2,3,0)$ auf $g_1$? Aus $x$: $t=2$. Aus $y$: $t=3$. Widerspruch → kein gemeinsamer Punkt → **parallel verschieden**.

**Probe:** $g_1(2)=(2,2,0)\\ne(2,3,0)$ ✓ bestätigt nicht-identisch. Beide Geraden verlaufen in derselben Richtung $(1,1,0)$, aber durch verschiedene Punkte.

**Typischer Fehler:** Aus „parallele Richtung" direkt auf „identisch" schließen, ohne Stützpunkt-Test.`,
          [
            'Richtungsvektoren identisch — also parallel.',
            'Aber identisch oder verschieden? Stützpunkt-Test entscheidet.',
            'Liegt $(2,3,0)$ auf $g_1$?',
          ],
          {
            1: 'Identisch verlangt einen gemeinsamen Punkt — hier ist $(2,3,0)$ aber nicht auf $g_1$.',
            2: 'Schneidend verlangt **nicht-parallele** Richtungen. Hier sind die Richtungen aber identisch (parallel).',
            3: 'Windschief verlangt ebenfalls nicht-parallele Richtungen — hier nicht erfüllt.',
          },
        ),
        { stage: 'apply-independent', subGoal: 2, uses: ['g-lagefall'] },
      ),

      tag(
        mc(
          'Ein Schüler stellt fest: „Zwei Geraden haben parallele Richtungsvektoren — also schneiden sie sich entlang einer ganzen Linie." Welcher Fehler steckt darin?',
          [
            'Parallele Richtungen schließen einen einzelnen Schnittpunkt aus. Die Geraden sind **entweder identisch** (alle Punkte gemeinsam) **oder parallel verschieden** (kein Punkt gemeinsam) — niemals „schneidend entlang einer Linie".',
            'Der Schüler hat richtig — parallele Richtungen erzeugen unendlich viele Schnittpunkte.',
            'Parallele Richtungen erzeugen genau einen Schnittpunkt.',
            'Parallele Richtungen bedeuten, dass die Geraden windschief sind.',
          ],
          0,
          `**Ansatz:** Begriffe sauber trennen — „schneidend" bedeutet **genau ein** Schnittpunkt, „identisch" bedeutet **alle Punkte gemeinsam**.

**Rechnung:** Parallele Richtungen ($\\vec{v}_2=k\\vec{v}_1$) → zwei Fälle: (a) Stützpunkt liegt auf der anderen Geraden → **identisch** (alle Punkte gemeinsam, aber das ist nicht „schneidend"); (b) Stützpunkt nicht auf der anderen → **parallel verschieden** (kein Punkt gemeinsam).

**Probe:** Klassifikationstabelle nochmal: drei Möglichkeiten bei parallelen Richtungen reduzieren sich auf zwei Fälle (identisch / parallel verschieden). „Schneidend entlang Linie" ist kein Fall der Lagefallliste.

**Typischer Fehler:** Den Spezialfall „identische Geraden" als „schneidende mit unendlich vielen Schnittpunkten" missdeuten. Sprachlich getrennt: schneidend = ein Punkt, identisch = alle Punkte.`,
          [
            'Definition „schneidend" — genau ein Schnittpunkt.',
            'Was passiert bei parallelen Richtungen?',
            'Zwei Fälle: identisch oder parallel verschieden.',
          ],
          {
            1: '„Schneidend" ist per Definition **genau ein** Schnittpunkt — nicht unendlich viele. Bei „unendlich vielen" wäre der Begriff **identisch**.',
            2: 'Bei parallelen Richtungen gibt es entweder keinen oder alle Punkte gemeinsam — niemals genau einen Schnittpunkt.',
            3: 'Windschief verlangt **nicht-parallele** Richtungen. Bei parallel ist windschief ausgeschlossen.',
          },
        ),
        { stage: 'error-analysis', subGoal: 2, uses: ['g-lagefall'] },
      ),

      tag(
        sorting(
          'Bringe die Schritte zur Klassifikation der Lage zweier Geraden in die richtige Reihenfolge.',
          [
            'Richtungsvektoren $\\vec{v}_1$ und $\\vec{v}_2$ auf Parallelität prüfen ($\\vec{v}_2=k\\vec{v}_1$?).',
            'Bei Parallelität: Stützpunkt $\\vec{p}_1$ auf $g_2$ testen → identisch oder parallel verschieden.',
            'Bei nicht-Parallelität: LGS $\\vec{p}_1+t\\vec{v}_1=\\vec{p}_2+s\\vec{v}_2$ aufstellen.',
            'LGS lösen — lösbar → schneidend (Schnittpunkt aus $t$ oder $s$ ausrechnen); unlösbar → windschief.',
            'Ergebnis dokumentieren und mit der Aufgabenstellung abgleichen.',
          ],
          [0, 1, 2, 3, 4],
          `**Ansatz:** Klassifikation ist ein Entscheidungsbaum — erst Parallelität (binäre Frage), dann je nach Ergebnis die zweite Frage.

**Rechnung:** (1) Parallelitätstest entscheidet die Verzweigung. (2/3) Je nach Ergebnis geht es weiter zum Identitäts- bzw. Schnittpunkt-Test. (4) Aus dem LGS-Ergebnis ergibt sich die letzte Klassifikation. (5) Abschluss mit Dokumentation/Abgleich.

**Probe:** Die Reihenfolge ist nicht beliebig — Schritt 3 setzt nicht-Parallelität voraus (Ausgang von Schritt 1); Schritt 4 setzt voraus, dass das LGS aufgestellt wurde.

**Typischer Fehler:** LGS direkt aufstellen, ohne Parallelität zu prüfen — funktioniert zwar, aber wenn die Richtungen parallel sind, ergibt das LGS keine eindeutige Lösung (und die richtige Klassifikation wird verschleiert).`,
          [
            'Erst Parallelität — sie verzweigt die Klassifikation.',
            'Stützpunkt-Test nur bei Parallelität nötig.',
            'LGS nur bei Nicht-Parallelität sinnvoll.',
          ],
        ),
        { stage: 'transfer', subGoal: 2, uses: ['g-lagefall'] },
      ),
    ],

    // ===== Sub-Goal 3 — Parallel & identisch =====
    3: [
      tag(
        tf(
          'Die Richtungsvektoren $\\vec{v}_1=(2,4)$ und $\\vec{v}_2=(1,2)$ sind parallel — es gilt $\\vec{v}_1=2\\vec{v}_2$.',
          true,
          `**Ansatz:** Parallel = Vielfache voneinander. Faktor finden: $\\vec{v}_1=k\\vec{v}_2$?

**Rechnung:** $\\vec{v}_1=(2,4),\\vec{v}_2=(1,2)$. $k=2$: $2\\cdot(1,2)=(2,4)=\\vec{v}_1$ ✓. Beide Komponenten passen mit demselben $k$ → linear abhängig → parallel.

**Probe:** Alternativ Kreuzprodukt-Test (in 2D = Determinante): $v_{1x}v_{2y}-v_{1y}v_{2x}=2\\cdot 2-4\\cdot 1=0$ → parallel. ✓

**Typischer Fehler:** Glauben, parallele Richtungen müssten identisch sein — sie können auch Vielfache mit beliebigem Faktor (auch negativ) sein.`,
          [
            'Test: Existiert $k\\in\\mathbb{R}$ mit $\\vec{v}_1=k\\vec{v}_2$?',
            'Hier: $k=2$ funktioniert für beide Komponenten.',
            'Kreuzprodukt (in 2D Determinante) als Test.',
          ],
        ),
        { stage: 'recognize', subGoal: 3, uses: ['g-parallel'] },
      ),

      tag(
        mc(
          'Gegeben: $g_1:\\vec{r}=(1,2,3)+t(2,4,6)$ und $g_2:\\vec{r}=(2,4,6)+s(1,2,3)$. Sind die Geraden identisch oder nur parallel?',
          ['Identisch', 'Parallel verschieden', 'Schneidend', 'Windschief'],
          0,
          `**Ansatz:** Erst Parallelitätstest, dann (falls parallel) Stützpunkt-Test.

**Rechnung:** $\\vec{v}_1=(2,4,6)=2(1,2,3)=2\\vec{v}_2$ → parallel. Liegt $\\vec{p}_2=(2,4,6)$ auf $g_1$? Aus $x$: $1+2t=2\\Rightarrow t=0{,}5$. Aus $y$: $2+4\\cdot 0{,}5=4$ ✓. Aus $z$: $3+6\\cdot 0{,}5=6$ ✓. Alle Komponenten erfüllt → $\\vec{p}_2$ liegt auf $g_1$ → **identisch**.

**Probe:** Auch der Stützpunkt $\\vec p_1=(1,2,3)$ auf $g_2$? Aus $x$: $2+s=1\\Rightarrow s=-1$. $y$: $4+2\\cdot(-1)=2$ ✓. $z$: $6+3\\cdot(-1)=3$ ✓. Auch ja — beide Stützpunkte liegen auf der jeweils anderen Geraden. Identisch bestätigt.

**Typischer Fehler:** Annahme „verschiedene Stützpunkt-Schreibweisen → verschiedene Geraden". Tatsächlich gilt: identische Geraden lassen sich durch beliebig viele verschiedene Parametrisierungen darstellen.`,
          [
            'Parallelitätstest erst.',
            'Dann Stützpunkt-Test — liegt $\\vec{p}_2$ auf $g_1$?',
            'Wenn ja → identisch; wenn nein → parallel verschieden.',
          ],
          {
            1: 'Parallel verschieden würde verlangen, dass die Stützpunkte **nicht** auf der jeweils anderen Geraden liegen. Hier passt aber alles — also identisch.',
            2: 'Schneidend verlangt nicht-parallele Richtungen — hier sind die Richtungen aber parallel ($\\vec{v}_1=2\\vec{v}_2$).',
            3: 'Windschief ebenfalls nicht-parallel — hier ausgeschlossen.',
          },
        ),
        { stage: 'apply-independent', subGoal: 3, uses: ['g-parallel', 'g-identisch'] },
      ),

      tag(
        mc(
          'Ein Schüler stellt fest, dass $\\vec{v}_2=3\\vec{v}_1$ (parallele Richtungen) und schließt sofort: „Die Geraden sind identisch." Welcher Test fehlt?',
          [
            'Identität verlangt zusätzlich, dass ein Stützpunkt der einen Geraden auf der anderen liegt. Sonst sind die Geraden parallel **verschieden** — Punkt-Test ist unverzichtbar.',
            'Der Schüler hat richtig — parallele Richtungen bedeuten automatisch identisch.',
            'Der Schüler muss zusätzlich das Skalarprodukt der Richtungsvektoren prüfen.',
            'Der Schüler muss prüfen, ob die Stützpunkte gleich sind.',
          ],
          0,
          `**Ansatz:** Identität = parallel **und** gemeinsamer Punkt. Parallel allein lässt zwei Fälle offen: identisch oder parallel verschieden.

**Rechnung:** Beispiel $g_1:\\vec r=(0,0,0)+t(1,1,1)$ und $g_2:\\vec r=(5,0,0)+s(3,3,3)$. Richtungen $(3,3,3)=3(1,1,1)$ — parallel ✓. Stützpunkt $(5,0,0)$ auf $g_1$? Aus $x$: $t=5$; aus $y$: $t=0$ — Widerspruch → nicht identisch, sondern **parallel verschieden**. Trotz paralleler Richtungen.

**Probe:** Drei Geraden mit Richtung $(1,1,1)$ durch verschiedene Stützpunkte verlaufen alle parallel zueinander — nur eine davon enthält den Ursprung. Sie sind eine Schar paralleler, aber **verschiedener** Geraden.

**Typischer Fehler:** Den Identitätsbegriff allein auf Parallelität reduzieren. Tatsächlich braucht es **zwei Bedingungen**: parallel **und** gemeinsamer Punkt.`,
          [
            'Welche zwei Bedingungen müssen gleichzeitig gelten?',
            'Beispiel: Schienen einer Bahnstrecke — parallel, aber nicht identisch.',
            'Stützpunkt-Test ist unverzichtbar.',
          ],
          {
            1: 'Parallel bedeutet nur „gleiche Richtung". Identität verlangt zusätzlich einen gemeinsamen Punkt.',
            2: 'Das Skalarprodukt $\\vec{v}_1\\cdot\\vec{v}_2$ misst den Winkel — bei parallelen Vektoren ist es $\\pm|\\vec{v}_1||\\vec{v}_2|$, sagt aber nichts über Identität aus.',
            3: 'Gleiche Stützpunkte sind ein **hinreichender**, aber nicht **notwendiger** Test — verschiedene Stützpunkt-Schreibweisen können dieselbe Gerade darstellen (siehe Aufgabe 18).',
          },
        ),
        { stage: 'error-analysis', subGoal: 3, uses: ['g-identisch'] },
      ),

      tag(
        matching(
          'Ordne jeder Bedingung das resultierende Lagefall-Ergebnis zu.',
          [
            { left: '$\\vec{v}_2=k\\vec{v}_1$ und $\\vec{p}_2$ liegt auf $g_1$', right: 'Identisch (alle Punkte gemeinsam)' },
            { left: '$\\vec{v}_2=k\\vec{v}_1$ und $\\vec{p}_2$ liegt nicht auf $g_1$', right: 'Parallel verschieden (kein Punkt gemeinsam)' },
            { left: '$\\vec{v}_1\\times\\vec{v}_2\\ne\\vec{0}$ und Schnitt-LGS lösbar', right: 'Schneidend (genau ein gemeinsamer Punkt)' },
            { left: '$\\vec{v}_1\\times\\vec{v}_2\\ne\\vec{0}$ und Schnitt-LGS unlösbar', right: 'Windschief (kein Punkt gemeinsam, nur 3D)' },
          ],
          `**Ansatz:** Klassifikationstabelle aus zwei orthogonalen Tests — Parallelität (Richtungen) und Punkt-Gemeinsamkeit (Stützpunkt/LGS).

**Rechnung:** Vier mögliche Kombinationen aus zwei binären Tests ergeben genau die vier Lagefälle. Identisch und windschief sind die „extremen" Diagonalfälle (alle vs. keine Punkte), parallel und schneidend die „mittleren".

**Probe:** Beispiele in der Reihenfolge: $g_1=g_2$ identisch · Bahnschienen parallel · zwei Achsen ($x$ und $y$) schneidend · $x$-Achse + verschobene $y$-Achse windschief.

**Typischer Fehler:** „Parallel" und „identisch" als denselben Fall behandeln — sie sind durch den Stützpunkt-Test getrennt.`,
          [
            'Zwei binäre Tests: parallel? und gemeinsamer Punkt?',
            'Vier Kombinationen → vier Lagefälle.',
            'Windschief ist 3D-exklusiv.',
          ],
        ),
        { stage: 'transfer', subGoal: 3, uses: ['g-parallel', 'g-identisch'] },
      ),
    ],

    // ===== Sub-Goal 4 — Schnittpunkt =====
    4: [
      tag(
        tf(
          'Den Schnittpunkt zweier nicht-paralleler Geraden findet man, indem man $\\vec{p}_1+t\\vec{v}_1=\\vec{p}_2+s\\vec{v}_2$ setzt und das LGS für $t$ und $s$ löst.',
          true,
          `**Ansatz:** Schnittpunkt = gemeinsamer Punkt → derselbe Ortsvektor links und rechts.

**Rechnung:** $\\vec{p}_1+t\\vec{v}_1=\\vec{p}_2+s\\vec{v}_2$. In 3D ergeben sich 3 Gleichungen mit 2 Unbekannten ($t,s$) — überbestimmt. Ist es lösbar, gibt es einen Schnittpunkt; ist es widersprüchlich, sind die Geraden windschief.

**Probe:** Beispiel — $g_1:\\vec r=(0,0)+t(1,1)$, $g_2:\\vec r=(2,0)+s(0,1)$. Gleichsetzen: $t=2$, $t=s$. Lösung $t=2,s=2$, Schnittpunkt $(2,2)$. ✓

**Typischer Fehler:** Das LGS mit drei Unbekannten aufstellen wollen — es sind nur **zwei** ($t$ und $s$). Die drei Gleichungen kommen aus den drei Komponenten.`,
          [
            'Gleichsetzen erzwingt einen gemeinsamen Punkt.',
            'In 3D: 3 Gleichungen, 2 Unbekannte.',
            'Lösbar → schneidend; unlösbar → windschief.',
          ],
        ),
        { stage: 'recognize', subGoal: 4, uses: ['g-schnittpunkt'] },
      ),

      tag(
        mc(
          'Berechne den Schnittpunkt von $g_1:\\vec{r}=(0,0)+t(1,1)$ und $g_2:\\vec{r}=(2,0)+s(0,1)$.',
          ['$(2,2)$', '$(0,0)$', '$(1,1)$', '$(2,0)$'],
          0,
          `**Ansatz:** Gleichsetzen und LGS lösen.

**Rechnung:** $(t,t)=(2,s)$ → $t=2$ und $t=s\\Rightarrow s=2$. Schnittpunkt einsetzen: $g_1(2)=(2,2)$ oder $g_2(2)=(2,2)$. ✓

**Probe:** $g_1(2)=(0,0)+2(1,1)=(2,2)$ ✓. $g_2(2)=(2,0)+2(0,1)=(2,2)$ ✓. Beide Geraden liefern denselben Punkt — der Schnittpunkt.

**Typischer Fehler:** Einen Stützpunkt fälschlich als Schnittpunkt angeben — Stützpunkte sind nur Bezugspunkte, der Schnittpunkt entsteht aus der gemeinsamen Lösung.`,
          [
            'Gleichsetzen: $(t,t)$ und $(2,s)$ → zwei Gleichungen.',
            'Aus $x$: $t=2$. Aus $y$: $t=s$.',
            'Einsetzen in eine Gerade → Schnittpunkt.',
          ],
          {
            1: '$(0,0)$ ist der Stützpunkt von $g_1$ — er liegt zwar auf $g_1$, aber prüfe: auf $g_2$? $(0,0)=(2,0)+s(0,1)\\Rightarrow 0=2$ Widerspruch. Nicht auf $g_2$, also kein Schnittpunkt.',
            2: '$(1,1)$ liegt auf $g_1$ für $t=1$; aber auf $g_2$? $(1,1)=(2,0)+s(0,1)\\Rightarrow 1=2$ Widerspruch.',
            3: '$(2,0)$ ist der Stützpunkt von $g_2$; auf $g_1$? $(2,0)=t(1,1)\\Rightarrow t=2$ aus $x$ und $t=0$ aus $y$ Widerspruch.',
          },
        ),
        { stage: 'apply-guided', subGoal: 4, uses: ['g-schnittpunkt'] },
      ),

      tag(
        ni(
          'Berechne die $x$-Koordinate des Schnittpunkts von $g_1:\\vec{r}=(0,0,0)+t(1,1,0)$ und $g_2:\\vec{r}=(4,0,0)+s(-1,1,0)$.',
          2, 0, '',
          `**Ansatz:** Gleichsetzen, LGS lösen, Schnittpunkt einsetzen.

**Rechnung:** $g_1=(t,t,0)$, $g_2=(4-s,s,0)$. Gleichsetzen: $t=4-s$, $t=s$, $0=0$. Aus $t=s$ und $t=4-s$: $s=4-s\\Rightarrow s=2,t=2$. Schnittpunkt $g_1(2)=(2,2,0)$. $x$-Koordinate: $\\mathbf{2}$.

**Probe:** $g_2(2)=(4-2,2,0)=(2,2,0)$ ✓. Beide Geraden treffen sich bei $(2,2,0)$.

**Typischer Fehler:** Bei $\\vec{v}_2=(-1,1,0)$ das Minuszeichen verlieren — würde $t+s=4$ statt $t=4-s$ ergeben und falsche Werte liefern.`,
          [
            'LGS aus drei Gleichungen (eine pro Achse) für zwei Unbekannte.',
            '$z$-Gleichung $0=0$ ist trivial — bleiben zwei für $t,s$.',
            'Aus $t=4-s$ und $t=s$ folgt $s=2$.',
          ],
        ),
        { stage: 'apply-independent', subGoal: 4, uses: ['g-schnittpunkt'] },
      ),

      tag(
        mc(
          'Ein Schüler stellt das Schnittpunkt-LGS als $\\vec{p}_1+t\\vec{v}_1=\\vec{p}_2-s\\vec{v}_2$ an (Minus statt Plus) und wundert sich über widersprüchliche Lösungen. Was ist der Fehler?',
          [
            'Schnittpunkt-Bedingung verlangt $g_1(t)=g_2(s)$ — also $\\vec{p}_2+s\\vec{v}_2$ (Plus). Mit dem Minuszeichen testet man Punkte auf einer anderen Parametrisierung — die Komponentengleichungen werden falsch aufgestellt.',
            'Das Vorzeichen ist egal, beide Formen liefern dasselbe Ergebnis.',
            'Mit Minus ist die Rechnung effizienter; widersprüchliche Lösungen sind hier normal.',
            'Der Fehler liegt nicht beim Minus, sondern beim Parameter $t$.',
          ],
          0,
          `**Ansatz:** Schnittpunkt-Gleichung muss exakt die Geraden-Definitionen verwenden — keine Vorzeichenänderung beim Richtungsvektor.

**Rechnung:** $g_2(s)=\\vec{p}_2+s\\vec{v}_2$ — Plus per Definition. Schreibt man $\\vec{p}_2-s\\vec{v}_2$, beschreibt man die Gerade mit umgekehrtem Richtungsvektor. Konkret: $g_1=(t,t)$, $g_2=(2,s)$, korrekt $t=2,s=2$, Schnittpunkt $(2,2)$. Mit Minus: $t=2$, $-s=2\\Rightarrow s=-2$, „Schnittpunkt" $g_2(-2)=(2,-2)\\ne(2,2)$. Falsch.

**Probe:** Sobald das Vorzeichen umgedreht wird, ist der gefundene Punkt nicht mehr auf $g_2$ — Verifikation per Punkt-Test entlarvt das.

**Typischer Fehler:** Vorzeichen-Fehler beim Aufstellen des LGS — gehört zu den häufigsten Fehlerquellen bei Schnittpunkt-Berechnungen.`,
          [
            'Wie ist $g_2(s)$ per Definition?',
            'Vergleiche: schreibt man $\\vec{p}_2+s\\vec{v}_2$ oder $\\vec{p}_2-s\\vec{v}_2$?',
            'Bei Vorzeichenänderung: andere Parametrisierung → falsche Komponentengleichungen.',
          ],
          {
            1: 'Vorzeichen ist nicht egal — es ändert die Komponentengleichungen und damit das LGS.',
            2: 'Widersprüchliche Lösungen sind ein Warnsignal, nicht „normal" — sie deuten auf einen Aufstellfehler hin.',
            3: 'Der Parameter $t$ steht korrekt mit Plus; der Fehler liegt im Vorzeichen bei $s$.',
          },
        ),
        { stage: 'error-analysis', subGoal: 4, uses: ['g-schnittpunkt'] },
      ),

      tag(
        ni(
          'Berechne die $z$-Koordinate des Schnittpunkts von $g_1:\\vec{r}=(0,1,0)+t(1,0,1)$ und $g_2:\\vec{r}=(2,1,2)+s(0,0,-1)$.',
          2, 0, '',
          `**Ansatz:** Gleichsetzen, LGS in 3 Gleichungen lösen.

**Rechnung:** $g_1=(t,1,t)$, $g_2=(2,1,2-s)$. Gleichsetzen: $t=2$, $1=1$ (trivial), $t=2-s$. Aus $t=2$ und $t=2-s$: $2=2-s\\Rightarrow s=0$. Schnittpunkt $g_1(2)=(2,1,2)$. $z$-Koordinate: $\\mathbf{2}$.

**Probe:** $g_2(0)=(2,1,2-0)=(2,1,2)$ ✓. Beide Geraden treffen sich bei $(2,1,2)$.

**Typischer Fehler:** Bei $\\vec{v}_2=(0,0,-1)$ das Minus verlieren und $t=2+s$ statt $t=2-s$ rechnen — würde zu falscher $s$-Lösung führen.`,
          [
            'Drei Komponentengleichungen aufstellen.',
            'Die mittlere Gleichung $1=1$ liefert keine neue Info.',
            'Aus den verbleibenden $t=2$ und $t=2-s$ folgt $s=0$.',
          ],
        ),
        { stage: 'transfer', subGoal: 4, uses: ['g-schnittpunkt', 'g-paramform'] },
      ),
    ],

    // ===== Sub-Goal 5 — Windschief =====
    5: [
      tag(
        tf(
          'Windschiefe Geraden gibt es ausschließlich im 3D-Raum — in der Ebene (2D) sind nicht-parallele Geraden immer schneidend.',
          true,
          `**Ansatz:** In 2D liegen alle Geraden in derselben Ebene. Nicht-parallele Geraden müssen sich daher zwangsläufig schneiden.

**Rechnung:** 2D-Fall: zwei Geraden $g_1,g_2$ in der $xy$-Ebene mit nicht-parallelen Richtungen. Gleichsetzen ergibt **zwei** Komponentengleichungen (kein $z$-Anteil) für zwei Unbekannte ($t,s$) — eindeutig lösbar, da das LGS regulär ist. → Schnittpunkt existiert.

**Probe:** Beispiel 3D: $g_1:\\vec r=(0,0,0)+t(1,0,0)$ ($x$-Achse), $g_2:\\vec r=(0,0,1)+s(0,1,0)$ (verschobene $y$-Achse). Nicht parallel, aber $g_1=(t,0,0)$ vs. $g_2=(0,s,1)$: $z$-Komponente $0\\ne 1$ → kein Schnittpunkt → windschief. Geht nur in 3D, weil die Verschiebung in $z$-Richtung den Unterschied macht.

**Typischer Fehler:** Annehmen, „nicht-parallel" sei gleichbedeutend mit „schneidend" — gilt nur in 2D, nicht in 3D.`,
          [
            'In welchen Dimensionen liegen 2D-Geraden?',
            'Können sich 2D-Geraden „verfehlen"? Nein — sie liegen in derselben Ebene.',
            'Windschief ist ein 3D-Phänomen.',
          ],
        ),
        { stage: 'recognize', subGoal: 5, uses: ['g-windschief'] },
      ),

      tag(
        mc(
          'Sind die Geraden $g_1:\\vec{r}=(0,0,0)+t(1,0,0)$ und $g_2:\\vec{r}=(0,0,1)+s(0,1,0)$ windschief?',
          [
            'Ja, windschief — Richtungen nicht parallel, aber kein Schnittpunkt wegen $z$-Komponente.',
            'Nein, parallel.',
            'Nein, schneidend in $(0,0,0)$.',
            'Nein, identisch.',
          ],
          0,
          `**Ansatz:** Schritt 1 — Parallelität. Schritt 2 — Schnittpunkt-LGS.

**Rechnung:** $\\vec{v}_1=(1,0,0),\\vec{v}_2=(0,1,0)$ — nicht parallel. LGS: $g_1=(t,0,0)$, $g_2=(0,s,1)$. Gleichsetzen: $t=0$, $0=s$, $0=1$. Letzte Gleichung widersprüchlich → kein Schnittpunkt → **windschief**.

**Probe:** Anschaulich — $g_1$ ist die $x$-Achse (in der $z=0$-Ebene), $g_2$ ist die nach $z=1$ verschobene $y$-Achse. Beide liegen in unterschiedlichen $z$-Ebenen und können sich nicht treffen.

**Typischer Fehler:** Nur die ersten beiden Komponenten lösen und auf den Schnittpunkt $(0,0,?)$ schließen — die $z$-Komponente $0\\ne 1$ widerlegt das aber.`,
          [
            'Parallelitätstest ergibt: nicht parallel.',
            'LGS aufstellen: Widerspruch in $z$.',
            'Nicht-parallel + kein Schnittpunkt → windschief.',
          ],
          {
            1: 'Parallel würde verlangen $\\vec{v}_2=k\\vec{v}_1$ — hier $(0,1,0)\\ne k(1,0,0)$.',
            2: 'Schneidend in $(0,0,0)$? $(0,0,0)$ liegt auf $g_1$ (für $t=0$), aber **nicht** auf $g_2$: $(0,0,1)+s(0,1,0)=(0,0,0)\\Rightarrow 0=1$ Widerspruch.',
            3: 'Identisch verlangt parallele Richtungen — hier nicht erfüllt.',
          },
        ),
        { stage: 'apply-independent', subGoal: 5, uses: ['g-windschief'] },
      ),

      tag(
        mc(
          'Ein Schüler behauptet: „Zwei nicht-parallele Geraden in der $xy$-Ebene (2D) sind windschief, weil sie verschiedene Richtungen haben." Was ist der Fehler?',
          [
            'Windschief gibt es **nur in 3D**. In 2D liegen nicht-parallele Geraden in derselben Ebene und schneiden sich immer in genau einem Punkt.',
            'Der Schüler hat richtig — verschiedene Richtungen bedeuten in jeder Dimension „windschief".',
            'Verschiedene Richtungen bedeuten „parallel"; windschief verlangt parallele Richtungen.',
            'In 2D heißt der Fall „windschief" stattdessen „antiparallel".',
          ],
          0,
          `**Ansatz:** Definition von windschief beachten — sie verlangt nicht nur „nicht parallel", sondern auch „kein Schnittpunkt" — was in 2D unmöglich ist.

**Rechnung:** In 2D sind alle Geraden in derselben Ebene. Sind zwei Geraden nicht parallel, ergibt das Schnittpunkt-LGS in 2D **zwei** Gleichungen (eine pro Achse) für zwei Unbekannte $t,s$ — und ist regulär. Die Cramersche Regel liefert immer eine Lösung → Schnittpunkt existiert.

**Probe:** Beispiel $g_1:\\vec r=(0,0)+t(1,0)$ und $g_2:\\vec r=(0,1)+s(0,-1)$. Richtungen $(1,0)$ und $(0,-1)$ — nicht parallel. Schnittpunkt: aus $t=0, 0=1-s\\Rightarrow s=1$. Schnittpunkt $(0,0)$. ✓ Selbst „extreme" 2D-Konfigurationen schneiden sich.

**Typischer Fehler:** Den Begriff windschief auf 2D übertragen — eine reine 3D-Eigenschaft.`,
          [
            'In welchen Dimensionen tritt windschief auf?',
            'Lassen sich 2D-Geraden „verfehlen", wenn sie nicht parallel sind?',
            'In 2D: parallel oder schneidend — keine dritte Option.',
          ],
          {
            1: 'In 2D können sich Geraden nicht ausweichen — sie liegen in derselben Ebene. „Verschiedene Richtungen → windschief" gilt nicht.',
            2: 'Verschiedene Richtungen bedeuten **nicht** parallel. Windschief verlangt nicht-parallele Richtungen — aber zusätzlich kein Schnittpunkt.',
            3: '„Antiparallel" bedeutet $\\vec{v}_2=-k\\vec{v}_1$ mit $k>0$ — ein Spezialfall von parallel (in Gegenrichtung), nicht „windschief".',
          },
        ),
        { stage: 'error-analysis', subGoal: 5, uses: ['g-windschief'] },
      ),

      tag(
        mc(
          'Klassifiziere die Lage von $g_1:\\vec{r}=(1,0,0)+t(0,1,0)$ und $g_2:\\vec{r}=(0,1,5)+s(1,0,0)$.',
          ['Windschief', 'Schneidend', 'Parallel verschieden', 'Identisch'],
          0,
          `**Ansatz:** Parallelität + Schnittpunkt-LGS.

**Rechnung:** $\\vec{v}_1=(0,1,0),\\vec{v}_2=(1,0,0)$ — nicht parallel (keine Vielfachen). LGS: $g_1=(1,t,0)$, $g_2=(s,1,5)$. Gleichsetzen: $1=s$, $t=1$, $0=5$. Letzte Gleichung widersprüchlich → kein Schnittpunkt → **windschief**.

**Probe:** Anschaulich: $g_1$ liegt in der $z=0$-Ebene parallel zur $y$-Achse, $g_2$ in der $z=5$-Ebene parallel zur $x$-Achse. Verschiedene $z$-Ebenen, nicht-parallele Richtungen → können sich nie treffen.

**Typischer Fehler:** Die $z$-Komponente unterschätzen und „schneidend in $(1,1,?)$" wählen — der $z$-Widerspruch ($0\\ne 5$) entscheidet die Klassifikation.`,
          [
            'Richtungsvektoren: parallel? Nein.',
            'LGS aufstellen, $z$-Komponente prüfen.',
            'Widersprüchliches LGS bei nicht-parallelen Richtungen → windschief.',
          ],
          {
            1: 'Schneidend würde verlangen, dass das LGS lösbar ist. Hier widerspricht die $z$-Gleichung ($0=5$).',
            2: 'Parallel verschieden verlangt parallele Richtungen — hier nicht erfüllt.',
            3: 'Identisch ebenfalls parallel + gemeinsamer Punkt — beides verletzt.',
          },
        ),
        { stage: 'transfer', subGoal: 5, uses: ['g-windschief', 'g-lagefall'] },
      ),
    ],
  },
}
