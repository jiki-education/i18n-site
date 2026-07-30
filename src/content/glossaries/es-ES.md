---
lang: "es-ES"
name: "European Spanish"
family: "es"
governance_sha: "437b15b"
content_version: "97c378c9138a"
published_at: "2026-07-30"
term_count: 60
forum_topic_id: 310
---

# Spanish (es) family glossary

The agreed term list shared by every Spanish locale: Latin American Spanish (`es-419`) and
European Spanish (`es-ES`). Every term here has been agreed and is binding for both
locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own
`glossary.md`, **never both**. A term defaults to the locale file; it only moves here once
its rendering, `Use (es/en)` column, and Notes are confirmed identical across `es-419` and
`es-ES`, not merely assumed to be. When reading a locale's effective glossary, it is this
file's rows plus that locale's own `glossary.md` rows (concatenation, not an override
lookup, because of the one-place rule). If a term is not here, check the relevant locale
file; it has not necessarily gone unagreed, it may simply diverge by locale.

## Core decisions

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programación** | es | Use `programación` consistently. `codificación` exists for the narrow act of writing code but is not natural in the warm register; avoid. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es/en)" column is `es` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| character | carácter | es | Singular _carácter_, plural _caracteres_. Not "sign/mark/letra". |

### Functions & control flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| if statement / conditional | condicional | es | Plural: _condicionales_. The full form _la sentencia condicional_ is available when it reads better. |
| function | función | es | The *keyword* `function` in code stays English; the concept in prose is _función_. |
| to call (a function) | llamar (a una función) | es | Keep the personal _a_: _llamar a una función_. _invocar_ is an acceptable synonym in a fuller explanation. |
| parameter | parámetro | es | Declaration-site name. |
| argument | argumento | es | Call-site value. |
| to return (a value) | devolver | es | Preferred over _retornar_. "La función devuelve un valor." |

### Loops, state & program flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| code block | bloque de código | es | Deliberately distinct from _ámbito_ (scope). |
| loop | bucle | es | Gender: _el bucle_. Not _ciclo_ (a common alternative not used here). |
| for loop | bucle `for` | es | Keep `for` in code font (real keyword) + _bucle_. (The curriculum currently has no `while` loops, only `repeat`, `for`, `for-of`, all following this same pattern.) |
| modulo / remainder operator | resto (de la división) | es | The `%` operator; _módulo_ names the operator, _resto_ names the result. |
| toggle | alternar | es | Verb; _conmutar_ also correct but heavier. |

### Tooling & engineering

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| edge case | caso límite | es | "caso extremo" is an accepted alternative; do not mix both in one document. |

### Platform & curriculum vocabulary

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funcionalidad | es | Deliberately distinct from _función_ (function) to avoid collision; see `guide.md` § Style notes. Never use _función_ for a product feature. |
| scenario | escenario | es | Jiki-specific: a structured variant within an exercise. |
| curriculum | plan de estudios | es | "currículo" is an accepted alternative; do not mix both in one document. |
| syllabus | temario | es | The list of topics; distinct from _plan de estudios_ (curriculum). "programa del curso" also natural. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Spanish in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Spanish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| component | _componente_ | Use _componente_ freely; it is established Spanish tech vocabulary. |
| API | explain what it is in Spanish | Not a word a beginner knows; where defined, explain the concept in Spanish, not just gloss the acronym. |
| CLI (the concept) | _interfaz de línea de comandos_ | Where the source `<define>`s it, explain CLI as _interfaz de línea de comandos_ (command-line interface). |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| Debug, Test | (no gloss) | As keywords / technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Spanish rendering | Notes |
|------------------|-------------------|-------|
| box (value container) | caja | A box that holds a value; plain, concrete Spanish word. |
| chain (array metaphor) | cadena | Physical chain of links; link = _eslabón_. Relies on `string` staying English (see § Keep in English) so _cadena_ is unambiguous here. |
| return chute | rampa de salida | The chute/ramp a value slides out of, as in a vending machine. _Bandeja de salida_ (an output tray) is an alternative if a passage wants the tray image. Low-medium confidence; flag for native-speaker confirmation. |

## Brackets

Shared glyph words. Each locale's own glossary states its default bracket-naming
convention and the divergent `<>` rendering.

| Glyph | Spanish | Notes |
|-------|---------|-------|
| `()` | paréntesis | Same form singular and plural: _un paréntesis_, _los paréntesis_. |
| `[]` | corchetes | |
| `{}` | llaves | |

---

# European Spanish (es-ES) glossary

The agreed term list for what is distinct about European Spanish. Read `../es/glossary.md`
first for the terms shared with Latin American Spanish (`es-419`); this file holds only
the terms that diverge between the two locales, plus terms that exist only for European
Spanish. A term lives in **exactly one** glossary file, this one or the family's, **never
both**. A locale's effective glossary is `../es/glossary.md`'s rows plus this file's rows,
read together. Why each term was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| developer | desarrollador/a | es-ES | _Programador/a_ is an accepted synonym; do not mix both in one document. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es-ES/en)" column is `es-ES` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| float / decimal | número decimal / número de coma flotante | es-ES | Use _decimal_ for the simple beginner sense, _de coma flotante_ (Spain, not _punto flotante_) when the floating-point nature matters. |
| identifier | nombre / identificador | es-ES | In beginner-facing prose the ordinary word is _nombre_ ("escribe su nombre"). Use _identificador_ only where the source itself says "identifier" and the formal sense is meant. |

### Functions & control flow

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| statement (executable) | instrucción | es-ES | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _operador_. Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. |
| statement (logical claim) | afirmación | es-ES | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. _Enunciado_ is an accepted alternative in a more formal-logic register. |
| return value | valor devuelto | es-ES | Noun form; _valor de retorno_ is an accepted alternative. Distinct from the verb "to return". |
| brackets (the two after a function name) | paréntesis | es-ES | English "brackets" is unspecific; Spanish always names the type. The pair written after a function name is _(un par de) paréntesis_ (`()`), never _corchetes_. See § Brackets below. |

### Loops, state & program flow

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| break (loop control) | salir (del bucle) | es-ES | The keyword `break` in code stays English; this is the prose verb for the concept. _Romper el bucle_ also natural. |
| interpreter | intérprete | es-ES | A **person noun**: someone who interprets, exactly as a human interpreter of languages, because Jiki *is* the interpreter ("tu intérprete es Jiki", "su trabajo es interpretar el código"). Never _interpretador_ or any program/device-flavoured coinage: those name a piece of software and cannot name Jiki. |
| instruction (given to Jiki) | instrucción | es-ES | Everyday word, not a formal or legal register. Plural _instrucciones_. Verb: _darle instrucciones a Jiki_. |
| (programming) language | lenguaje (de programación) | es-ES | _Lenguaje_, never _idioma_, for a programming language and for "a language a computer understands". Say _lenguaje de programación_ on the explicit mention and plain _lenguaje_ thereafter; do not mix in the English word. |

### Tooling & engineering

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| backwards compatibility | retrocompatibilidad | es-ES | _Compatibilidad con versiones anteriores_ is the fuller form. |

### Platform & curriculum vocabulary

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| pathway | itinerario | es-ES | _Itinerario formativo_ is the fuller form. Near-synonym of _track_. |
| track (curriculum path) | ruta (de aprendizaje) | es-ES | |
| course | curso | es-ES | The whole Jiki course ("en este curso, tu intérprete es Jiki"). Distinct from _lección_ (lesson) and _plan de estudios_ (curriculum). |

## Keep in English

These stay in English in prose, with the Spanish gloss to use for each.

| Term | Spanish gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _cadena de caracteres_ | Exception: in the string concept, where the source defines it, use _cadena de caracteres_, then _string_ throughout. |
| Boolean | _valor booleano_ | Exception: where the source defines it, explain it means _valor booleano_, then use _Boolean_. |
| array | _matriz_ | NOT _arreglo_ (Latin American). Gender: _el array_, _los arrays_. Exercise prose also says "list" for the same idea; render both with _array_, do not introduce _lista_. |
| scope | _ámbito_ | Exception: in the scope concept, where the source defines it, use _ámbito_, then _scope_ throughout. This is the locale's single decision on `scope`: unlike es-419, the English word stays primary in prose. |
| framework | _marco de trabajo_ | Kept as a loanword. Where the source defines it, explain it means a reusable _marco de trabajo_. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | es-ES rendering | Notes |
|-------------------|------------------|-------|
| input slot | ranura de entrada | |
| machine (function metaphor) | máquina | Gender: _la máquina_. Plural _máquinas_; diminutive _pequeñas máquinas_ for "little machines". |
| warehouse (Jiki's warehouse) | almacén | Gender: _el almacén_. The place Jiki hangs out and keeps his machines. Not _bodega_ (a cellar or wine store in Spain). |
| shelves (storage) | estantería | The shelving unit as a whole is _la estantería_; one individual shelf is _un estante_. "on the shelf" = _en la estantería_. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar la manivela_. Not _palanca_ (a lever). |
| board / whiteboard | pizarra | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Not _tablero_ (a game board or a dashboard) and not _tablón_ (a noticeboard). No collision with `array`, which stays English in this locale. |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show
the glyph in a code tag immediately after: _corchetes (`[]`)_. See `../es/glossary.md` §
Brackets for the shared glyph words (`()`, `[]`, `{}`); this locale's `<>` rendering
diverges from es-419's and is given below.

| Glyph | es-ES | Notes |
|-------|-------|-------|
| `<>` | corchetes angulares | Or name the signs directly (_signos de menor y mayor que_) when clearer. |

Example: _para llamar a una función, escribe su nombre y, a continuación, un par de
paréntesis (`()`)._

---

## Decision log

### 2026-07-31: Pruned ordinary vocabulary

Removed 8 rows that had one obvious canonical rendering with nothing to decide: `tech /
tech industry`, `pitfall`, `element`, `index`, `template literal`, `mental model`, `deploy
(verb / noun)`, `mentor / mentoring`. A reviewer may want to double-check `pitfall`
(_escollo_) and `deploy` (_desplegar / despliegue_), since both had a secondary alternative
noted, but neither alternative amounted to a real fork a translator would need guidance on.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind European Spanish:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. European Spanish merged both
  onto **pizarra**, the everyday word for the board on a wall in Spain, ruling out
  _tablero_ (a game board or a dashboard) and _tablón_ (a noticeboard). No collision with
  `array`, which stays English in this locale.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to
  interpret"), so the word has to be able to name a character. Several languages had
  reached for their term for interpreter *software*, which cannot. **es-ES did not change:**
  _intérprete_ was already right, being the ordinary Spanish word for a human interpreter.
  What changed is that the row now says so, and rules out _interpretador_ or any other
  program/device-flavoured coinage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: es-ES glossary filled out and its self-contradictions fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the terms the using-functions concept page needed: `identifier`,
`brackets (the two after a function name)`, `instruction (given to Jiki)`, `mental model`,
`(programming) language`, `course`, and the metaphor rows `machine`, `warehouse`,
`shelves`, `crank`, alongside the merged `board / whiteboard` row above.

**Two self-contradictions fixed**, both note or placement problems rather than new
renderings:

- `scope` appeared twice with opposite directions: a "Localize" row under Loops, state &
  program flow said `ámbito` was used as-is in prose, while the "Keep in English" row said
  `scope` itself stays English and is only glossed as _ámbito_. The two could not both be
  right for the same term. The "Keep in English" row is correct (it matches how the string
  and Boolean rows are handled) and is now the only one; the duplicate Localize row is
  gone.
- The worked example under § Brackets used _identificador_ ("escribe su identificador"),
  while the beginner-facing page this example illustrates correctly uses the ordinary word
  _nombre_ for the same idea. The example now reads "escribe su nombre", matching the
  `identifier` row's own instruction to prefer _nombre_ in beginner-facing prose.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | _Sector tecnológico_ is natural in Spain; _industria tecnológica_ is heavier. |
| pitfall | Ordinary word, so it stands alone; _escollo_ reads more natural here than a literal translation of "pitfall". |

#### Values & data types

| Term | Why |
|------|-----|
| template literal | _Literal de plantilla_ follows MDN's Spanish documentation (MDN es). |
| index | Direct cognate of the English word, so it needs no clarifying parenthetical. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | _Modelo mental_ is the standard, ordinary collocation in Spanish; nothing more idiomatic exists. |
| (programming) language | _Lenguaje_ is the ordinary Spanish word for a language, matching how English uses its own everyday word; _idioma_ reads as a category error (it names a natural, spoken language). |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Spain-standard rendering; the Spanish Wikipedia entry for the concept is titled "Despliegue de software". |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| pathway | _Itinerario formativo_ is natural in Spain education contexts. |

#### Keep in English

| Term | Why |
|------|-----|
| string | Keeping it English leaves _cadena_ free for the array chain metaphor. |
| array | Spanish developers in Spain keep "array" in prose; it is the ordinary word for them, not a jargon import. |
| framework | _Marco de trabajo_ is well-attested as a loanword gloss in Spanish developer writing. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| input slot | _Ranura_ is exactly a coin/token slot, pairing with the family glossary's _rampa de salida_ (return chute) into one coherent vending-machine mental model. |
