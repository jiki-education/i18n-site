---
lang: "nl"
name: "Dutch"
family: null
governance_sha: "1d91ad4"
content_version: "f7c5667e51b9"
published_at: "2026-07-30"
term_count: 61
forum_topic_id: 339
---

# Dutch (nl) glossary

The agreed term list for Dutch. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are **additive**: rows are appended, an `agent` row may be corrected (with the old value reported), and a `human` row is never changed without a human agreeing it. The `Agreed by` column records who decided each row (`agent` = unconfirmed agent draft, `human (t/<topic>)` = confirmed by a native speaker). See `global/workflow.md`.

## Localize (use the Dutch term)

These are terms where the Dutch is used in prose, so the "Use (nl/en)" column is `nl`
throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Dutch | Use (nl/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| value | waarde | nl | Ordinary word; _de waarde_. | agent |
| true / false | waar / onwaar | nl | Not capitalised in prose. Use _onwaar_, not _vals_. | agent |
| integer | geheel getal | nl | _het gehele getal_. | agent |
| float / decimal | reëel getal | nl | _kommagetal_ is an acceptable plainer alternative when the decimal point is the focus. | agent |
| character | teken | nl | A single text character. _teken_ alone can read as "sign", so the English gloss is worth showing where the source `<define>`s it. | agent |

### Functions & control flow

| English | Dutch | Use (nl/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| function | functie | nl | _de functie_. The *keyword* `function` in code stays English; the concept in prose is _functie_. | agent |
| condition | voorwaarde | nl | Ordinary word; stands alone. _de voorwaarde_. | agent |
| comparison | vergelijking | nl | Ordinary word; stands alone. | agent |
| expression | expressie | nl | _uitdrukking_ is an acceptable synonym; pick one per document. | agent |
| operator | operator | nl | Same word; _de operator_. | agent |
| to call (a function) | aanroepen | nl | Separable verb: "je _roept_ de functie _aan_". nl-NL (BE: _oproepen_). | agent |
| to return (a value) | teruggeven | nl | Separable verb: "de functie _geeft_ 30 _terug_". | agent |
| return value | retourwaarde | nl | One word; _de retourwaarde_. | agent |
| input (to a function) | invoer | nl | | agent |
| output | uitvoer | nl | | agent |
| parameter | parameter | nl | Same word; _de parameter_. The declaration-site name. | agent |
| argument | argument | nl | Same word; _het argument_. The call-site value. | agent |
| brackets (the two after a function name) | haakjes | nl | The `()` pair written after a function name: _die twee haakjes_. Plain _haakjes_ by default; see the Brackets section below for when to name the type. | agent |

### Loops, state & program flow

| English | Dutch | Use (nl/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| keyword | sleutelwoord | nl | _het sleutelwoord_. | agent |
| variable | variabele | nl | _de variabele_. | agent |
| loop | lus | nl | Established Dutch term, not _loop_. _de lus_. `for` loop = _for-lus_, `while` loop = _while-lus_ (keep the keyword in backticks/hyphenated). | agent |
| assignment | toewijzing | nl | _de toewijzing_. | agent |
| to assign | toewijzen | nl | Separable verb: "je _wijst_ de waarde _toe_". | agent |
| iteration | iteratie | nl | _de iteratie_. | agent |
| nested | genest | nl | Adjective inflects: _een geneste lus_, _het geneste object_. | agent |
| error | fout | nl | Ordinary word; _de fout_. The `Error` token in code stays English. | agent |
| method | methode | nl | _de methode_. | agent |
| object | object | nl | _het object_. | agent |
| instruction (given to Jiki) | instructie | nl | _de instructie_. Everyday word: "je _geeft_ Jiki _instructies_", "instructies op een whiteboard schrijven". Not the formal _voorschrift_ or _aanwijzing_. Distinct from _statement_ (see Keep in English). | agent |
| mental model | mentaal model | nl | _het mentale model_ (definite, so the adjective takes -e). Ordinary Dutch phrase; do not use the English _mental model_. | agent |
| (programming) language | taal · programmeertaal | nl | _de taal_, _de programmeertaal_ (closed compound). Use plain _taal_ where the context is already programming ("een taal die een computer begrijpt"); the full _programmeertaal_ where it needs saying. Never the English _language_. | agent |

### Platform & curriculum vocabulary

| English | Dutch | Use (nl/en) | Notes | Agreed by |
|---------|-------|-------------|-------|-----------|
| course | cursus | nl | _de cursus_. The whole Jiki course ("in deze cursus is jouw interpreter Jiki"). Keep distinct from _les_ (lesson) and _curriculum_. | agent |
| exercise | opdracht | nl | _de opdracht_. The ordinary word Dutch learning platforms and schools use for a piece of work you are set (_programmeeropdracht_). _oefening_ is rejected: it reads as repetitive drilling rather than a thing to solve. | agent |
| task (within an exercise) | taak | nl | _de taak_. A sub-step of an _opdracht_; keeps _opdracht_ free for the exercise itself. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Dutch in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Dutch gloss (on `<define>`) | Notes | Agreed by |
|------|-----------------------------|-------|-----------|
| string | _tekenreeks_ | Exception: the string concept itself uses _tekenreeks_ where the source defines it, then _string_ throughout. | agent |
| array | _rij_ | Standard in NL dev usage. Where the source `<define>`s it, gloss as _rij_, then use _array_ throughout. Distinct from the "chain" teaching metaphor below. | agent |
| boolean | _booleaanse waarde_ (or _waar/onwaar-waarde_) | Where the source `<define>`s it, explain it means a _waar/onwaar_ value, then use _boolean_ throughout. | agent |
| scope | _bereik_ (or _zichtbaarheid_) | Exception: the scope concept uses the Dutch where the source defines it, then _scope_ throughout. | agent |
| interpreter | _tolk_ | The one who interprets, a **person** doing a job: on concept pages Jiki *is* the interpreter. _interpreter_ is the ordinary word in Dutch dev writing and is an agent noun, so "jouw interpreter is Jiki" reads naturally about a person. _vertaler_ is rejected: it reads as translator/compiler, a different job. Where the source `<define>`s it, gloss as _tolk_ (the everyday Dutch word for a person who interprets between languages), then use _interpreter_ throughout. | agent |
| statement (executable) | _uitvoerbare instructie_ | Dutch technical writing keeps _statement_ (e.g. _if-statement_, _break-statement_). Glossed with the qualifier so it stays distinct from _instruction_ (an instruction given to Jiki), which is plain _instructie_. | agent |
| if statement | (no separate gloss) | Written _if-statement_ (hyphenated, `if` kept). Follows the _statement_ decision above. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Dutch rendering | Notes | Agreed by |
|-------------------|-----------------|-------|-----------|
| box (value container) | doos | Plain Dutch word for a box; direct and concrete. _de doos_. | agent |
| chain (array metaphor) | ketting | Physical chain (a necklace/bike chain), not the abstract _keten_. A single link = _schakel_. | agent |
| input slot | invoergleuf | _invoer_ (input, agreed above) + _gleuf_ (a slot, like a coin slot). One word. | agent |
| return chute | retourglijbaan | _retour_ (return) + _glijbaan_ (a playground slide/chute). One word. | agent |
| machine (function metaphor) | machine | Plain word; _de machine_ with an _invoergleuf_ and a _retourglijbaan_. | agent |
| crank (machine crank) | slinger | _de slinger_, the handle you turn on a machine. The action is "aan de slinger draaien" (turn the crank), and "hem aanzetten" for powering it up. | agent |
| shelves (storage) | planken | The shelves where variables and functions are stored. Singular _plank_. | agent |
| board / whiteboard | whiteboard | **One object, one word**, used for both jobs: what the learner puts instructions on for Jiki to follow, and where a function keeps its own instructions and notes. _het whiteboard_. Kept English because it is the everyday word in Dutch offices and schools; bare _bord_ is rejected because it first reads as a plate or a road sign, and _schoolbord_ is a blackboard in a classroom. | agent |
| warehouse (Jiki's warehouse) | loods | _de loods_. A big practical shed you can walk around in, which fits Jiki hanging out among his machine shelves. _pakhuis_ is rejected as too storage-formal (goods in storage, nobody working there). _werkplaats_ is rejected because it is the agreed rendering of **workshop** (Jiki's workshop, on the scope page), and the two rooms must stay distinct. | agent |
| workshop (Jiki's workshop) | werkplaats | _de werkplaats_. The room Jiki works in, where the _planken_ live (scope page). Kept distinct from _loods_ (warehouse) above. | agent |

## Brackets

Default to plain **haakjes**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _vierkante haakjes (`[]`)_.

| Glyph | Dutch | Notes | Agreed by |
|-------|-------|-------|-----------|
| `()` | haakjes · ronde haakjes | Plain _haakjes_ by default; add _ronde_ + glyph only when disambiguating. | agent |
| `[]` | vierkante haakjes | | agent |
| `{}` | accolades | The standard Dutch word for curly braces. | agent |
| `<>` | punthaken | | agent |

Example: _om een functie aan te roepen, schrijf je de naam van de functie en daarachter die twee haakjes (`()`)._
