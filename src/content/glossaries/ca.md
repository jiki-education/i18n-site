---
lang: "ca"
name: "Catalan"
family: null
stage: "setup"
governance_sha: "33fd2de"
content_version: "8270ae26e7b2"
published_at: "2026-07-31"
term_count: 49
forum_topic_id: 536
video_player_forum_topic_id: 745
---

# Catalan (ca) glossary

The agreed term list for Catalan. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| developer | **desenvolupador** | ca | Masculine generic default in flowing prose; see guide § Style notes. |
| tech / tech industry | **sector tecnològic** | ca | Prose form; use plain "tecnologia" for the general field. |

## Localize (use the Catalan term)

These are terms where the Catalan is used in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| float / decimal | nombre decimal | ca | Use the simpler _decimal_ form for learner-facing prose. |
| array / list | llista | ca | _Llista_ is Jiki's single array/list term; keep it distinct from _matriu_ (2-D matrix, a different concept). |
| Boolean | booleà | ca | Fully localized; do not keep "Boolean" in English. |

### Functions & control flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| statement (executable) | sentència | ca | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | afirmació | ca | The proposition sense: a claim that is true or false. Keep distinct from _sentència_ above; pick by meaning, not by the English word. |
| function | funció | ca | The *keyword* `function` in code stays English; the concept in prose is _funció_. |
| parameter | paràmetre | ca | The declaration-site name. |
| argument | argument | ca | The call-site value. |
| brackets (the two after a function name) | parèntesis | ca | The `()` pair. Catalan names the shapes separately, so the word has to say which: _parèntesis_ are round, _claudàtors_ are square, _claus_ are curly. In running prose: "escriu-ne el nom i, tot seguit, els dos parèntesis". |

### Loops, state & program flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| interpreter | intèrpret | ca | **A person doing a job, not a program.** On concept pages Jiki *is* the intèrpret, so the word has to be able to name a character. Never a machine-forming coinage (_interpretador_, _programa intèrpret_): those name a tool and cannot name Jiki. |
| instruction (given to Jiki) | instrucció | ca | Everyday word, as in "donar les instruccions correctes al Jiki". Not a formal or legal register word (_ordre_, _directiva_). |
| mental model | model mental | ca | Use it verbatim, not a paraphrase like _manera de pensar_. |
| (programming) language | llenguatge (de programació) | ca | _Llenguatge_ for both senses on a page: the programming language, and "a language a computer understands". Never _idioma_, which is a natural human language. |
| error | error | ca | |
| exception | excepció | ca | Keep distinct from _error_ above (the catchable-error-object sense). |
| loop | bucle | ca | Not _llaç_. |
| for loop | `for` bucle | ca | Keep `for` in backticks (real keyword) + _bucle_. |
| while loop | `while` bucle | ca | As above. |
| for-of loop | `for...of` bucle | ca | As above. |
| break (loop control) | sortir del bucle | ca | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| encapsulation | encapsulament | ca | Abstract OOP concept; gloss even though the word is a transparent cognate. |

### Tooling & engineering

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| auth (authentication / authorization) | autenticació / autorització | ca | Pick by meaning; the two concepts render differently in Catalan. |
| algorithm | algorisme | ca | Also spelled _algoritme_; prefer _algorisme_ for consistency. |

## Platform & curriculum vocabulary

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | funcionalitat | ca | Kept distinct from _funció_ (function) to avoid collision, per `global/terms.md`. |
| course | curs | ca | The whole Jiki course the learner is taking ("En aquest curs, el teu intèrpret és el Jiki"). Keep distinct from _lliçó_ (lesson) and _currículum_ (curriculum). |
| pathway | itinerari | ca | |
| track (curriculum path) | recorregut | ca | Kept distinct from _itinerari_ (pathway) even though they're near-synonyms in English too. |
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

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/translating.md` step 6. Removed 58
rows across every section (Core decisions, Values & data types, Functions & control flow,
Loops/state & program flow, Tooling & engineering, Platform & curriculum vocabulary) where
the English term has one obvious Catalan rendering and nothing was left to decide: mostly
transparent cognates (`variable`, `object`, `error`'s neighbours like `class`/`method`/
`property`) and ordinary dictionary words (`streak`, `pitfall`, `value`, `lesson`,
`exercise`). Nothing in the "Keep in English" or "Jiki physical metaphors" sections was
touched, and no row this file records as an owner decision (`board / whiteboard`,
`interpreter`) was removed. A reviewer might query cutting `if statement` (condicional) and
`string` (cadena de caràcters): both were dropped because their Notes column carried no
recorded alternative or collision, even though the renderings aren't literal word-for-word
translations.

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
