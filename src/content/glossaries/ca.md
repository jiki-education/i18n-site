---
lang: "ca"
name: "Catalan"
family: null
governance_sha: "bb77cbf"
content_version: "47273f7bd5af"
published_at: "2026-07-30"
term_count: 107
forum_topic_id: 536
---

# Catalan (ca) glossary

The agreed term list for Catalan. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| programming / coding | **programació** | ca | |
| developer | **desenvolupador** | ca | Masculine generic default in flowing prose; see guide § Style notes. |
| streak | **ratxa** | ca | |
| tech / tech industry | **sector tecnològic** | ca | Prose form; use plain "tecnologia" for the general field. |
| pitfall | **parany** | ca | |

## Localize (use the Catalan term)

These are terms where the Catalan is used in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| value | valor | ca | |
| number | nombre | ca | |
| true / false | cert / fals | ca | |
| character | caràcter | ca | |
| integer | nombre enter | ca | |
| float / decimal | nombre decimal | ca | Use the simpler _decimal_ form for learner-facing prose. |
| data type | tipus de dades | ca | |
| array / list | llista | ca | _Llista_ is Jiki's single array/list term; keep it distinct from _matriu_ (2-D matrix, a different concept). |
| string | cadena de caràcters | ca | Use the full form where the source `<define>`s it, then _cadena_ alone. |
| Boolean | booleà | ca | Fully localized; do not keep "Boolean" in English. |

### Functions & control flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| if statement | condicional | ca | |
| condition | condició | ca | Stands alone; no gloss needed. |
| comparison | comparació | ca | Stands alone; no gloss needed. |
| expression | expressió | ca | |
| operator | operador | ca | |
| NOT operator / logical negation | negació lògica | ca | |
| statement (executable) | sentència | ca | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | afirmació | ca | The proposition sense: a claim that is true or false. Keep distinct from _sentència_ above; pick by meaning, not by the English word. |
| function | funció | ca | The *keyword* `function` in code stays English; the concept in prose is _funció_. |
| to call (a function) | cridar | ca | _cridar la funció_. |
| to define (a function) | definir | ca | |
| parameter | paràmetre | ca | The declaration-site name. |
| argument | argument | ca | The call-site value. |
| input (to a function) | entrada | ca | |
| output | sortida | ca | |
| to return (a value) | retornar | ca | "La funció retorna un valor." |
| return value | valor de retorn | ca | |
| brackets (the two after a function name) | parèntesis | ca | The `()` pair. Catalan names the shapes separately, so the word has to say which: _parèntesis_ are round, _claudàtors_ are square, _claus_ are curly. In running prose: "escriu-ne el nom i, tot seguit, els dos parèntesis". |
| pure function | funció pura | ca | |

### Loops, state & program flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| keyword | paraula clau | ca | |
| interpreter | intèrpret | ca | **A person doing a job, not a program.** On concept pages Jiki *is* the intèrpret, so the word has to be able to name a character. Never a machine-forming coinage (_interpretador_, _programa intèrpret_): those name a tool and cannot name Jiki. |
| instruction (given to Jiki) | instrucció | ca | Everyday word, as in "donar les instruccions correctes al Jiki". Not a formal or legal register word (_ordre_, _directiva_). |
| mental model | model mental | ca | Use it verbatim, not a paraphrase like _manera de pensar_. |
| (programming) language | llenguatge (de programació) | ca | _Llenguatge_ for both senses on a page: the programming language, and "a language a computer understands". Never _idioma_, which is a natural human language. |
| variable | variable | ca | |
| assignment | assignació | ca | |
| to assign | assignar | ca | |
| code block | bloc de codi | ca | |
| error | error | ca | |
| exception | excepció | ca | Keep distinct from _error_ above (the catchable-error-object sense). |
| nested | niat | ca | e.g. _bucle niat_ = nested loop. |
| iteration | iteració | ca | Verb: _iterar_. |
| to run / execute (code) | executar | ca | |
| loop | bucle | ca | Not _llaç_. |
| for loop | `for` bucle | ca | Keep `for` in backticks (real keyword) + _bucle_. |
| while loop | `while` bucle | ca | As above. |
| for-of loop | `for...of` bucle | ca | As above. |
| loop body | cos del bucle | ca | |
| break (loop control) | sortir del bucle | ca | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| increment | incrementar | ca | |
| modulo / remainder operator | operador de mòdul | ca | The `%` operator. |
| concatenation / to concatenate | concatenació / concatenar | ca | |
| toggle | alternar | ca | |
| state / stateful | estat / amb estat | ca | |
| scope | àmbit | ca | |
| class | classe | ca | |
| method | mètode | ca | |
| property | propietat | ca | |
| object | objecte | ca | |
| encapsulation | encapsulament | ca | Abstract OOP concept; gloss even though the word is a transparent cognate. |

### Tooling & engineering

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| workflow | flux de treball | ca | |
| auth (authentication / authorization) | autenticació / autorització | ca | Pick by meaning; the two concepts render differently in Catalan. |
| deploy (verb: to deploy) | desplegar | ca | |
| tool / tooling | eina / eines | ca | Stands alone; no gloss needed. |
| module | mòdul | ca | |
| algorithm | algorisme | ca | Also spelled _algoritme_; prefer _algorisme_ for consistency. |
| edge case | cas límit | ca | |
| backwards compatibility | compatibilitat amb versions anteriors | ca | |

## Platform & curriculum vocabulary

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | funcionalitat | ca | Kept distinct from _funció_ (function) to avoid collision, per `global/terms.md`. |
| lesson | lliçó | ca | |
| exercise | exercici | ca | |
| scenario | escenari | ca | |
| curriculum | currículum | ca | |
| course | curs | ca | The whole Jiki course the learner is taking ("En aquest curs, el teu intèrpret és el Jiki"). Keep distinct from _lliçó_ (lesson) and _currículum_ (curriculum). |
| level | nivell | ca | |
| milestone | fita | ca | |
| pathway | itinerari | ca | |
| syllabus | temari | ca | |
| mentor / mentoring | mentor / mentoria | ca | |
| track (curriculum path) | recorregut | ca | Kept distinct from _itinerari_ (pathway) even though they're near-synonyms in English too. |
| tutorial | tutorial | ca | |
| solution (learner's submission) | solució | ca | |
| canvas (graphics exercises) | llenç | ca | |

## Keep in English

These stay in English in Catalan prose, with the Catalan gloss to use for each (per the
format in `global/voice.md`); with no `<define>`, use the English bare, no gloss.

| Term | Catalan gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | _interfície de programació d'aplicacions_ | |
| framework | _entorn de treball_ | "Framework" is what Catalan developers actually say, so it is the ordinary word here (`global/voice.md`). |
| CLI | _interfície de línia d'ordres_ | Note: Catalan says "ordres", not "comandos"/"comandes" as Spanish content often does. |
| bootcamp | (no gloss needed, transparent) | |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Catalan rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | capsa | Not _caixa_: too many competing technical senses (crate, cash register, gearbox casing). |
| chain (array metaphor) | reguitzell | **Collision:** _cadena_ is already the established term for **string** (see Values & data types), so it cannot also mean the array/chain metaphor. |
| input slot | ranura d'entrada | |
| return chute | conducte de sortida | |
| machine (function metaphor) | màquina | |
| crank (machine crank) | maneta | Verb phrase: _girar la maneta_ ("girar la maneta i posar-la en marxa"). |
| shelves (storage) | prestatges | Singular _prestatge_ for one shelf. |
| warehouse (Jiki's warehouse) | magatzem | The place Jiki hangs out and keeps his machine shelf. |
| board / whiteboard | pissarra | **One object, one word.** The same _pissarra_ everywhere: the board the learner writes instructions on for Jiki to come and follow, and the board where a function keeps its own instructions and notes. Never two different words. No collision with _llista_ (array). |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Catalan:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Catalan did not change: it already used
  **pissarra** for both, so this row widened to say so explicitly rather than changing the
  rendering.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Catalan did not change: _intèrpret_ was already right, because it is the everyday Catalan
  word for a human interpreter or translator and doubles as the CS term without sounding
  like a device. What changed is that the row now says so, and rules out a
  machine-forming coinage (_interpretador_, _programa intèrpret_), which names a tool and
  cannot name Jiki.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Catalan glossary drafted for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

The rows the using-functions concept page needed were drafted in this pass: the metaphor
rows (`machine`, `crank`, `shelves`, `warehouse`, `box`, `chain`, `input slot`, `return
chute`, `board / whiteboard`), `interpreter`, `instruction (given to Jiki)`, `mental model`,
and `(programming) language`, among others across the file. None of these has been checked
by a native speaker.

**Standing cognate-gloss policy, also unconfirmed:** a prose `<define>` gloss is dropped
when the Catalan is a recognisable cognate of the English (`intèrpret`/interpreter,
`error`/error, `funcions`/functions, and most of the file), on the reasoning that a
parenthetical teaching the reader something they can already see is the same word teaches
nothing. This is a deliberate policy, not an oversight, but it means a Catalan concept page
can carry no English glosses at all, which is an unusual outcome for this repo. The
translator who applied it flagged that it specifically wants a native speaker's view before
being treated as settled.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| streak | Standard Catalan word for a run/streak (sports, games, daily habits). Medium confidence, single source; flagged for native-speaker confirmation on first real use. |
| pitfall | Literally "trap"; closest natural fit for "a mistake to watch out for." Medium confidence, flagged for review. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| true / false | Medium confidence; not independently cross-verified, flagged for review on first real use. |
| float / decimal | TERMCAT also has _nombre de coma flotant_ for the floating-point representation specifically; _decimal_ was chosen as the simpler learner-facing form. |
| array / list | Real Catalan CS usage (UPC OCW, Jutge.org) distinguishes _vector_/_taula_ (fixed array), _llista_ (Python-style dynamic list), and _matriu_ (2-D matrix); _llista_ was chosen as Jiki's single term since it avoids the matrix collision. |
| string | Confirmed by TERMCAT and by direct textbook usage (chapter title "Cadenes de caràcters"). |
| Boolean | Unlike some languages, Catalan fully localizes this term. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |
| if statement | Confirmed by textbook chapter usage ("Condicionals encadenats"). |
| expression, operator, NOT operator, to define, pure function | Transparent cognates or phrases. |
| function | Transparent cognate. |
| to call (a function) | Medium confidence; standard verb by analogy with other Romance-language CS usage. |
| parameter, argument | Transparent cognates. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Established Catalan phrase. |
| variable, assignment, code block, error, exception, iteration, loop body, increment, concatenation, state, class, method, property, object | Transparent cognates or phrases. |
| assignment | Also confirmed by textbook usage ("Assignacions repetides"). |
| nested | Confirmed by textbook usage ("condicionals... niats"). |
| loop | Confirmed dominant term. |
| toggle | Medium confidence; "to alternate/switch." |
| scope | Confirmed by direct textbook usage; no dedicated TERMCAT entry yet, medium confidence. |
| method | Also confirmed by textbook usage. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Noun form _desplegament_ is solidly confirmed (Softcatalà); the verb's exact CI/CD sense is lower confidence, no dedicated TERMCAT entry found. Flagged for native-speaker confirmation on first real use. |
| tool / tooling | Ordinary word. |
| module, edge case, backwards compatibility | Transparent cognates or phrases. |
| algorithm | Transparent cognate. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| pathway | Well-established in Catalan education contexts ("itinerari formatiu"). |
| tutorial | Transparent cognate. |
| canvas | Medium-low confidence; the painting-canvas word. Flagged for review since "canvas" as a bare tech loanword is also plausible. |

#### Keep in English

| Term | Why |
|------|-----|
| API | TERMCAT confirms the acronym is accepted as-is once explained. |
| framework | TERMCAT lists it as an accepted synonym alongside _entorn de treball_. |
| bootcamp | Jiki's predecessor intensive program; no natural Catalan equivalent found, kept English like in other languages. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Small-container word (matchbox-scale); the right physical size for "a value goes in a box." |
| chain | _Reguitzell_ ("a long series of things," used idiomatically for lining things up in a row) is more literary and less common in spoken register than _cadena_ would have been. This is the highest-priority metaphor term to confirm with a native speaker. |
| input slot | _entrada_ (input) + _ranura_ (a slot/opening). Catalan already uses _ranura_ for a hardware expansion slot, which reinforces rather than undermines the metaphor. |
| return chute | _sortida_ (output) + _conducte_ (a duct/channel). No established term exists since this is a Jiki-only coinage; no collision found. |
| machine | Direct cognate; both the general and everyday-appliance senses map onto "takes an input, does work, produces output." |
| crank | The small hand crank on a machine; ordinary everyday word, no technical double meaning. |
| shelves | Plain word for storage shelves; no technical double meaning found. |
| warehouse | Ordinary everyday word for a storeroom/warehouse. |
| board / whiteboard | Covers both the classroom blackboard and the modern whiteboard sense. |
