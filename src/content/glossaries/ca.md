---
lang: "ca"
name: "Catalan"
family: null
governance_sha: "1d91ad4"
content_version: "37eb6e6d9799"
published_at: "2026-07-30"
term_count: 107
forum_topic_id: 536
---

# Catalan (ca) glossary

The agreed term list for Catalan. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive**, and every row records who agreed it in the `Agreed by` column. See
`global/workflow.md` § "Glossary writes are additive" for the rules and for what `agent` and
`human` mean.

## Core decisions

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| programming / coding | **programació** | ca | | agent |
| developer | **desenvolupador** | ca | Masculine generic default in flowing prose; see guide § Style notes. | agent |
| streak | **ratxa** | ca | Standard Catalan word for a run/streak (sports, games, daily habits). Medium confidence; single-source, flag for native-speaker confirmation on first real use. | agent |
| tech / tech industry | **sector tecnològic** | ca | Prose form; use plain "tecnologia" for the general field. | agent |
| pitfall | **parany** | ca | Literally "trap"; closest natural fit for "a mistake to watch out for." Medium confidence, flag for review. | agent |

## Localize (use the Catalan term)

These are terms where the Catalan is used in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| value | valor | ca | Ordinary word. | agent |
| number | nombre | ca | Ordinary word. | agent |
| true / false | cert / fals | ca | Medium confidence; not independently cross-verified, flag for review on first real use. | agent |
| character | caràcter | ca | | agent |
| integer | nombre enter | ca | | agent |
| float / decimal | nombre decimal | ca | TERMCAT also has _nombre de coma flotant_ for the floating-point representation specifically; use the simpler _decimal_ form for learner-facing prose. | agent |
| data type | tipus de dades | ca | | agent |
| array / list | llista | ca | Real Catalan CS usage (UPC OCW, Jutge.org) distinguishes _vector_/_taula_ (fixed array), _llista_ (Python-style dynamic list), and _matriu_ (2-D matrix, a different concept). _Llista_ is Jiki's single array/list term since it avoids the matrix collision. | agent |
| string | cadena de caràcters | ca | Use the full form where the source `<define>`s it, then _cadena_ alone. Confirmed by TERMCAT and by direct textbook usage (chapter title "Cadenes de caràcters"). | agent |
| Boolean | booleà | ca | Unlike some languages, Catalan fully localizes this; no need to keep "Boolean" in English. | agent |

### Functions & control flow

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| if statement | condicional | ca | Confirmed by textbook chapter usage ("Condicionals encadenats"). | agent |
| condition | condició | ca | Ordinary word; stands alone. | agent |
| comparison | comparació | ca | Ordinary word; stands alone. | agent |
| expression | expressió | ca | Transparent cognate. | agent |
| operator | operador | ca | Transparent cognate. | agent |
| NOT operator / logical negation | negació lògica | ca | Transparent phrase. | agent |
| statement (executable) | sentència | ca | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | afirmació | ca | The proposition sense: a claim that is true or false. Keep distinct from _sentència_ above; pick by meaning, not by the English word. | agent |
| function | funció | ca | Transparent cognate. The *keyword* `function` in code stays English; the concept in prose is _funció_. | agent |
| to call (a function) | cridar | ca | _cridar la funció_. Medium confidence, standard verb by analogy with other Romance-language CS usage. | agent |
| to define (a function) | definir | ca | Transparent cognate. | agent |
| parameter | paràmetre | ca | Transparent cognate; the declaration-site name. | agent |
| argument | argument | ca | Transparent cognate; the call-site value. | agent |
| input (to a function) | entrada | ca | | agent |
| output | sortida | ca | | agent |
| to return (a value) | retornar | ca | "La funció retorna un valor." | agent |
| return value | valor de retorn | ca | | agent |
| brackets (the two after a function name) | parèntesis | ca | The `()` pair. Catalan names the shapes separately, so the word has to say which: _parèntesis_ are round, _claudàtors_ are square, _claus_ are curly. In running prose: "escriu-ne el nom i, tot seguit, els dos parèntesis". | agent |
| pure function | funció pura | ca | Transparent phrase. | agent |

### Loops, state & program flow

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| keyword | paraula clau | ca | | agent |
| interpreter | intèrpret | ca | **A person doing a job, not a program.** Jiki *is* the intèrpret, so the word has to be able to name a character: _intèrpret_ is the everyday Catalan word for a human interpreter/translator, and it doubles as the CS term, so it works in both senses without sounding like a device. Never a machine-forming coinage (_interpretador_, _programa intèrpret_): those name a tool and cannot name Jiki. | agent |
| instruction (given to Jiki) | instrucció | ca | Everyday word, as in "donar les instruccions correctes al Jiki". Not a formal or legal register word (_ordre_, _directiva_). | agent |
| mental model | model mental | ca | Established Catalan phrase; use it verbatim, not a paraphrase like _manera de pensar_. | agent |
| (programming) language | llenguatge (de programació) | ca | _Llenguatge_ for both senses on a page: the programming language, and "a language a computer understands". Never _idioma_, which is a natural human language. | agent |
| variable | variable | ca | Transparent cognate. | agent |
| assignment | assignació | ca | Transparent cognate; confirmed by textbook usage ("Assignacions repetides"). | agent |
| to assign | assignar | ca | | agent |
| code block | bloc de codi | ca | Transparent phrase. | agent |
| error | error | ca | Transparent cognate. | agent |
| exception | excepció | ca | Transparent cognate; keep distinct from _error_ above (the catchable-error-object sense). | agent |
| nested | niat | ca | e.g. _bucle niat_ = nested loop. Confirmed by textbook usage ("condicionals... niats"). | agent |
| iteration | iteració | ca | Transparent cognate. Verb: _iterar_. | agent |
| to run / execute (code) | executar | ca | | agent |
| loop | bucle | ca | Confirmed dominant term (not _llaç_). | agent |
| for loop | `for` bucle | ca | Keep `for` in backticks (real keyword) + _bucle_. | agent |
| while loop | `while` bucle | ca | As above. | agent |
| for-of loop | `for...of` bucle | ca | As above. | agent |
| loop body | cos del bucle | ca | Transparent phrase. | agent |
| break (loop control) | sortir del bucle | ca | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. | agent |
| increment | incrementar | ca | Transparent cognate. | agent |
| modulo / remainder operator | operador de mòdul | ca | The `%` operator. | agent |
| concatenation / to concatenate | concatenació / concatenar | ca | Transparent cognate. | agent |
| toggle | alternar | ca | Medium confidence; "to alternate/switch." | agent |
| state / stateful | estat / amb estat | ca | Transparent phrase. | agent |
| scope | àmbit | ca | Confirmed by direct textbook usage; no dedicated TERMCAT entry yet, medium confidence. | agent |
| class | classe | ca | Transparent cognate. | agent |
| method | mètode | ca | Transparent cognate; confirmed by textbook usage. | agent |
| property | propietat | ca | Transparent cognate. | agent |
| object | objecte | ca | Transparent cognate. | agent |
| encapsulation | encapsulament | ca | Abstract OOP concept; gloss even though the word is a transparent cognate. | agent |

### Tooling & engineering

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| workflow | flux de treball | ca | | agent |
| auth (authentication / authorization) | autenticació / autorització | ca | Pick by meaning; the two concepts render differently in Catalan. | agent |
| deploy (verb: to deploy) | desplegar | ca | Noun form _desplegament_ is solidly confirmed (Softcatalà); the verb's exact CI/CD sense is lower confidence, no dedicated TERMCAT entry found. Flag for native-speaker confirmation on first real use. | agent |
| tool / tooling | eina / eines | ca | Ordinary word; stands alone. | agent |
| module | mòdul | ca | Transparent cognate. | agent |
| algorithm | algorisme | ca | Transparent cognate (also spelled _algoritme_; prefer _algorisme_ for consistency). | agent |
| edge case | cas límit | ca | Transparent phrase. | agent |
| backwards compatibility | compatibilitat amb versions anteriors | ca | Transparent phrase. | agent |

## Platform & curriculum vocabulary

| English | Catalan | Use (ca/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| feature (platform capability) | funcionalitat | ca | Kept distinct from _funció_ (function) to avoid collision, per `global/terms.md`. | agent |
| lesson | lliçó | ca | | agent |
| exercise | exercici | ca | | agent |
| scenario | escenari | ca | | agent |
| curriculum | currículum | ca | | agent |
| course | curs | ca | The whole Jiki course the learner is taking ("En aquest curs, el teu intèrpret és el Jiki"). Keep distinct from _lliçó_ (lesson) and _currículum_ (curriculum). | agent |
| level | nivell | ca | | agent |
| milestone | fita | ca | | agent |
| pathway | itinerari | ca | Well-established in Catalan education contexts ("itinerari formatiu"). | agent |
| syllabus | temari | ca | | agent |
| mentor / mentoring | mentor / mentoria | ca | | agent |
| track (curriculum path) | recorregut | ca | Kept distinct from _itinerari_ (pathway) even though they're near-synonyms in English too. | agent |
| tutorial | tutorial | ca | Transparent cognate. | agent |
| solution (learner's submission) | solució | ca | | agent |
| canvas (graphics exercises) | llenç | ca | Medium-low confidence; the painting-canvas word. Flag for review since "canvas" as a bare tech loanword is also plausible. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Catalan in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, no gloss.

| Term | Catalan gloss (on `<define>`) | Notes | Agreed by |
|------|--------------------------------|-------|-----------|
| API | _interfície de programació d'aplicacions_ | TERMCAT confirms the acronym is accepted as-is once explained. | agent |
| framework | _entorn de treball_ | "Framework" is what Catalan developers actually say, so it is the ordinary word here (`global/voice.md`); TERMCAT lists it as an accepted synonym alongside _entorn de treball_. | agent |
| CLI | _interfície de línia d'ordres_ | Note: Catalan says "ordres", not "comandos"/"comandes" as Spanish content often does. | agent |
| bootcamp | (no gloss needed, transparent) | Jiki's predecessor intensive program; no natural Catalan equivalent found, kept English like in other languages. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Catalan rendering | Notes | Agreed by |
|-------------------|--------------------|-------|-----------|
| box (value container) | capsa | Small-container word (matchbox-scale); the right physical size for "a value goes in a box." Rejected _caixa_: too many competing technical senses (crate, cash register, gearbox casing). | agent |
| chain (array metaphor) | reguitzell | Confirmed collision blocker: _cadena_ is already the established term for **string** (see above), so it cannot also mean the array/chain metaphor. _Reguitzell_ ("a long series of things," used idiomatically for lining things up in a row) is the replacement; it is more literary and less common in spoken register than _cadena_ would have been, so this is the single highest-priority term to confirm with a native speaker via `/action-forum-post` once used in a real page. | agent |
| input slot | ranura d'entrada | _entrada_ (input, agreed above) + _ranura_ (a slot/opening). Note: Catalan already uses _ranura_ for a hardware expansion slot, which reinforces rather than undermines the metaphor. | agent |
| return chute | conducte de sortida | _sortida_ (output, agreed above) + _conducte_ (a duct/channel). No established term exists since this is a Jiki-only coinage; no collision found. | agent |
| machine (function metaphor) | màquina | Direct cognate; both the general and everyday-appliance senses map onto "takes an input, does work, produces output." | agent |
| crank (machine crank) | maneta | The small hand crank on a machine; the verb phrase is _girar la maneta_ ("girar la maneta i posar-la en marxa"). Ordinary everyday word, no technical double meaning. | agent |
| shelves (storage) | prestatges | Plain word for storage shelves; no technical double meaning found. Singular _prestatge_ for one shelf. | agent |
| warehouse (Jiki's warehouse) | magatzem | The place Jiki hangs out and keeps his machine shelf. Ordinary everyday word for a storeroom/warehouse. | agent |
| board / whiteboard | pissarra | **One object, one word.** The same _pissarra_ everywhere: the board the learner writes instructions on for Jiki to come and follow, and the board where a function keeps its own instructions and notes. Never two different words. Covers both the classroom blackboard and the modern whiteboard sense; no collision with _llista_ (array). | agent |
