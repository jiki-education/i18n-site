---
lang: "es-ES"
name: "European Spanish"
family: "es"
governance_sha: "1d91ad4"
content_version: "51763371392e"
published_at: "2026-07-30"
term_count: 114
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
| streak | racha | es | The gamification streak of consecutive days. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es/en)" column is `es` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| value | valor | es | Ordinary word. |
| number | número | es | Ordinary word. |
| integer | número entero | es | _entero_ is an acceptable shorter form. |
| character | carácter | es | Singular _carácter_, plural _caracteres_. Not "sign/mark/letra". |
| true / false | verdadero / falso | es | Lowercase in prose. |
| dictionary | diccionario | es | |
| key-value pair | par clave-valor | es | The key itself is _clave_ (an ordinary word once introduced). |

### Functions & control flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| if statement / conditional | condicional | es | Plural: _condicionales_. The full form _la sentencia condicional_ is available when it reads better. |
| condition | condición | es | Ordinary word; stands alone. |
| comparison | comparación | es | Ordinary word; stands alone. |
| expression | expresión | es | |
| operator | operador | es | |
| NOT operator / logical negation | negación (lógica) | es | |
| function | función | es | The *keyword* `function` in code stays English; the concept in prose is _función_. |
| to call (a function) | llamar (a una función) | es | Keep the personal _a_: _llamar a una función_. _invocar_ is an acceptable synonym in a fuller explanation. |
| to define (a function) | definir (una función) | es | |
| parameter | parámetro | es | Declaration-site name. |
| argument | argumento | es | Call-site value. |
| input (to a function) | entrada | es | |
| output | salida | es | |
| to return (a value) | devolver | es | Preferred over _retornar_. "La función devuelve un valor." |
| pure function | función pura | es | |

### Loops, state & program flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| keyword | palabra clave | es | |
| variable | variable | es | Gender: _la variable_. |
| assignment | asignación | es | Noun. |
| to assign | asignar | es | Verb; matches _asignación_ above. |
| code block | bloque de código | es | Deliberately distinct from _ámbito_ (scope). |
| error | error | es | |
| nested | anidado | es | e.g. _bucle anidado_ = nested loop. |
| iteration | iteración | es | Verb: _iterar_; _recorrer_ also natural. |
| to run / execute (code) | ejecutar | es | |
| loop | bucle | es | Gender: _el bucle_. Not _ciclo_ (a common alternative not used here). |
| for loop | bucle `for` | es | Keep `for` in code font (real keyword) + _bucle_. |
| while loop | bucle `while` | es | As above. (The curriculum currently has no `while` loops, only `repeat`, `for`, `for-of`.) |
| for-of loop | bucle `for-of` | es | As above. |
| loop body | cuerpo del bucle | es | |
| increment | incremento | es | Verb: _incrementar_. |
| modulo / remainder operator | resto (de la división) | es | The `%` operator; _módulo_ names the operator, _resto_ names the result. |
| concatenation / to concatenate | concatenación / concatenar | es | |
| toggle | alternar | es | Verb; _conmutar_ also correct but heavier. |
| state / stateful | estado | es | |
| class | clase | es | |
| method | método | es | |
| property | propiedad | es | |
| object | objeto | es | |

### Tooling & engineering

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| workflow | flujo de trabajo | es | The software-engineering sense. |
| auth (authentication / authorization) | autenticación / autorización | es | Pick by meaning; both are standard, direct cognates. |
| tool / tooling | herramienta / herramientas | es | |
| module | módulo | es | |
| algorithm | algoritmo | es | |
| edge case | caso límite | es | "caso extremo" is an accepted alternative; do not mix both in one document. |

### Platform & curriculum vocabulary

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funcionalidad | es | Deliberately distinct from _función_ (function) to avoid collision; see `guide.md` § Style notes. Never use _función_ for a product feature. |
| lesson | lección | es | |
| exercise | ejercicio | es | |
| scenario | escenario | es | Jiki-specific: a structured variant within an exercise. |
| curriculum | plan de estudios | es | "currículo" is an accepted alternative; do not mix both in one document. |
| level | nivel | es | |
| milestone | hito | es | |
| syllabus | temario | es | The list of topics; distinct from _plan de estudios_ (curriculum). "programa del curso" also natural. |
| tutorial | tutorial | es | Loanword, standard in Spanish-language tech writing. |
| bootcamp | bootcamp | es | Loanword, standard in Spanish-language tech-education discourse. |
| solution (learner's submission) | solución | es | |

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
read together. Every term here has been agreed and is binding: use it exactly, with no
synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive**: rows are appended, an `agent` row may be corrected (with the old
value reported), and a `human` row is never changed without a human agreeing to it. The
`Agreed by` column records who decided each row; see `global/workflow.md` §
"Glossary writes are additive" for the full rules and the meaning of each value.

## Core decisions

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| developer | desarrollador/a | es-ES | _Programador/a_ is an accepted synonym; do not mix both in one document. | agent |
| tech / tech industry | sector tecnológico | es-ES | Natural in Spain; _industria tecnológica_ is heavier. | agent |
| pitfall | escollo | es-ES | Ordinary word; stands alone. _Trampa_ also works in context. | agent |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es-ES/en)" column is `es-ES` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| float / decimal | número decimal / número de coma flotante | es-ES | Use _decimal_ for the simple beginner sense, _de coma flotante_ (Spain, not _punto flotante_) when the floating-point nature matters. | agent |
| element | elemento | es-ES | Array element = _elemento del array_. | agent |
| index | índice | es-ES | Keep the tilde; direct cognate. No clarification parens needed. | agent |
| template literal | literal de plantilla | es-ES | MDN es usage. | agent |
| identifier | nombre / identificador | es-ES | In beginner-facing prose the ordinary word is _nombre_ ("escribe su nombre"). Use _identificador_ only where the source itself says "identifier" and the formal sense is meant. | agent |

### Functions & control flow

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| statement (executable) | instrucción | es-ES | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _operador_. Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. | agent |
| statement (logical claim) | afirmación | es-ES | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. _Enunciado_ is an accepted alternative in a more formal-logic register. | agent |
| return value | valor devuelto | es-ES | Noun form; _valor de retorno_ is an accepted alternative. Distinct from the verb "to return". | agent |
| brackets (the two after a function name) | paréntesis | es-ES | English "brackets" is unspecific; Spanish always names the type. The pair written after a function name is _(un par de) paréntesis_ (`()`), never _corchetes_. See § Brackets below. | agent |

### Loops, state & program flow

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| break (loop control) | salir (del bucle) | es-ES | The keyword `break` in code stays English; this is the prose verb for the concept. _Romper el bucle_ also natural. | agent |
| interpreter | intérprete | es-ES | A **person noun**: someone who interprets, exactly as a human interpreter of languages. That is the requirement, because Jiki *is* the interpreter ("tu intérprete es Jiki", "su trabajo es interpretar el código"). Never _interpretador_ or any program/device-flavoured coinage: those name a piece of software and cannot name Jiki. | agent |
| instruction (given to Jiki) | instrucción | es-ES | Everyday word, not a formal or legal register. Plural _instrucciones_. Verb: _darle instrucciones a Jiki_. | agent |
| mental model | modelo mental | es-ES | Standard, ordinary collocation in Spanish. | agent |
| (programming) language | lenguaje (de programación) | es-ES | _Lenguaje_, never _idioma_, for a programming language and for "a language a computer understands". Say _lenguaje de programación_ on the explicit mention and plain _lenguaje_ thereafter; do not mix in the English word. | agent |

### Tooling & engineering

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| deploy (verb / noun) | desplegar / despliegue | es-ES | Spain-standard; Wikipedia es "Despliegue de software". | agent |
| backwards compatibility | retrocompatibilidad | es-ES | _Compatibilidad con versiones anteriores_ is the fuller form. | agent |

### Platform & curriculum vocabulary

| English | es-ES | Use (es-ES/en) | Notes | Agreed by |
|---------|-------|-----------------|-------|-----------|
| pathway | itinerario | es-ES | _Itinerario formativo_ is natural in Spain education. Near-synonym of _track_. | agent |
| track (curriculum path) | ruta (de aprendizaje) | es-ES | | agent |
| mentor / mentoring | mentor / mentoría | es-ES | | agent |
| course | curso | es-ES | The whole Jiki course ("en este curso, tu intérprete es Jiki"). Distinct from _lección_ (lesson) and _plan de estudios_ (curriculum). | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Spanish in the gloss column below (per the format in `global/voice.md`); with no `<define>`,
use the English bare, with no gloss.

| Term | Spanish gloss (on `<define>`) | Notes | Agreed by |
|------|--------------------------------|-------|-----------|
| string | _cadena de caracteres_ | Exception: in the string concept, where the source defines it, use _cadena de caracteres_, then _string_ throughout. Keeping it English leaves _cadena_ free for the array chain metaphor. | agent |
| Boolean | _valor booleano_ | Exception: where the source defines it, explain it means _valor booleano_, then use _Boolean_. | agent |
| array | _matriz_ | NOT _arreglo_ (Latin American). Spanish devs keep "array" in prose. Gender: _el array_, _los arrays_. Exercise prose also says "list" for the same idea; render both with _array_, do not introduce _lista_. | agent |
| scope | _ámbito_ | Exception: in the scope concept, where the source defines it, use _ámbito_, then _scope_ throughout. This is the locale's single decision on `scope`; unlike es-419, the English word is primary in prose. | agent |
| framework | _marco de trabajo_ | Kept as a loanword; well-attested in Spanish dev writing. Where the source defines it, explain it means a reusable _marco de trabajo_. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | es-ES rendering | Notes | Agreed by |
|-------------------|------------------|-------|-----------|
| input slot | ranura de entrada | _ranura_ is exactly a coin/token slot; pairs with _rampa de salida_ into one coherent vending-machine mental model. | agent |
| machine (function metaphor) | máquina | Gender: _la máquina_. Plural _máquinas_; diminutive _pequeñas máquinas_ for "little machines". | agent |
| warehouse (Jiki's warehouse) | almacén | Gender: _el almacén_. The place Jiki hangs out and keeps his machines. Not _bodega_ (a cellar or wine store in Spain). | agent |
| shelves (storage) | estantería | The shelving unit as a whole is _la estantería_; one individual shelf is _un estante_. "on the shelf" = _en la estantería_. | agent |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar la manivela_. Not _palanca_ (a lever). | agent |
| board / whiteboard | pizarra | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. _Pizarra_ is the everyday word for the board on a wall in Spain (_pizarra blanca_ only if the colour matters). Not _tablero_ (a game board or a dashboard) and not _tablón_ (a noticeboard). No collision with `array`, which stays English in this locale. | agent |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show
the glyph in a code tag immediately after: _corchetes (`[]`)_. See `../es/glossary.md` §
Brackets for the shared glyph words (`()`, `[]`, `{}`); this locale's `<>` rendering
diverges from es-419's and is given below.

| Glyph | es-ES | Notes | Agreed by |
|-------|-------|-------|-----------|
| `<>` | corchetes angulares | Or name the signs directly (_signos de menor y mayor que_) when clearer. | agent |

Example: _para llamar a una función, escribe su nombre y, a continuación, un par de
paréntesis (`()`)._
