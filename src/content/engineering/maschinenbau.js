// ── Maschinenbau-Kernfächer: Aggregator ────────────────────────────────────
// Die einzelnen Topic-Definitionen liegen jeweils in eigenen Dateien
// (engineering/<topic>.js) und werden hier nur noch zusammengeführt und
// durch `buildTopic` in das Engine-Shape transformiert.

import { buildTopic } from './_helpers/buildTopic'
import { technischeMechanikTopicDef } from './technische_mechanik'
import { festigkeitslehreTopicDef } from './festigkeitslehre'
import { thermodynamikTopicDef } from './thermodynamik'
import { fluidmechanikTopicDef } from './fluidmechanik'
import { maschinenelementeTopicDef } from './maschinenelemente'
import { elektrotechnikTopicDef } from './elektrotechnik'
import { regelungstechnikTopicDef } from './regelungstechnik'

const topicDefinitions = [
  technischeMechanikTopicDef,
  festigkeitslehreTopicDef,
  thermodynamikTopicDef,
  fluidmechanikTopicDef,
  maschinenelementeTopicDef,
  elektrotechnikTopicDef,
  regelungstechnikTopicDef,
]

export const engineeringTopics = topicDefinitions.map(buildTopic)
