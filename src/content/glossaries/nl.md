---
lang: "nl"
name: "Dutch"
family: null
governance_sha: "bb77cbf"
content_version: "66ac1282fd70"
published_at: "2026-07-30"
term_count: 61
forum_topic_id: 339
---

# Dutch (nl) glossary

The agreed term list for Dutch. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document. Why each term was chosen, and
who chose it, is in the decision log (`glossary-notes.md`).

## Localize (use the Dutch term)

These are terms where the Dutch is used in prose, so the "Use (nl/en)" column is `nl`
throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| value | waarde | nl | _de waarde_. |
| true / false | waar / onwaar | nl | Not capitalised in prose. Use _onwaar_, not _vals_. |
| integer | geheel getal | nl | _het gehele getal_. |
| float / decimal | reëel getal | nl | _kommagetal_ is an acceptable plainer alternative when the decimal point is the focus. |
| character | teken | nl | A single text character. Show the English gloss where the source `<define>`s it. |

### Functions & control flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| function | functie | nl | _de functie_. The *keyword* `function` in code stays English; the concept in prose is _functie_. |
| condition | voorwaarde | nl | Stands alone; no gloss needed. _de voorwaarde_. |
| comparison | vergelijking | nl | Stands alone; no gloss needed. |
| expression | expressie | nl | _uitdrukking_ is an acceptable synonym; pick one per document. |
| operator | operator | nl | _de operator_. |
| to call (a function) | aanroepen | nl | Separable verb: "je _roept_ de functie _aan_". nl-NL (BE: _oproepen_). |
| to return (a value) | teruggeven | nl | Separable verb: "de functie _geeft_ 30 _terug_". |
| return value | retourwaarde | nl | One word; _de retourwaarde_. |
| input (to a function) | invoer | nl | |
| output | uitvoer | nl | |
| parameter | parameter | nl | _de parameter_. The declaration-site name. |
| argument | argument | nl | _het argument_. The call-site value. |
| brackets (the two after a function name) | haakjes | nl | The `()` pair written after a function name: _die twee haakjes_. Plain _haakjes_ by default; see the Brackets section below for when to name the type. |

### Loops, state & program flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| keyword | sleutelwoord | nl | _het sleutelwoord_. |
| variable | variabele | nl | _de variabele_. |
| loop | lus | nl | Not _loop_. _de lus_. `for` loop = _for-lus_, `while` loop = _while-lus_ (keep the keyword in backticks/hyphenated). |
| assignment | toewijzing | nl | _de toewijzing_. |
| to assign | toewijzen | nl | Separable verb: "je _wijst_ de waarde _toe_". |
| iteration | iteratie | nl | _de iteratie_. |
| nested | genest | nl | Adjective inflects: _een geneste lus_, _het geneste object_. |
| error | fout | nl | _de fout_. The `Error` token in code stays English. |
| method | methode | nl | _de methode_. |
| object | object | nl | _het object_. |
| instruction (given to Jiki) | instructie | nl | _de instructie_. "je _geeft_ Jiki _instructies_", "instructies op een whiteboard schrijven". Not the formal _voorschrift_ or _aanwijzing_. Distinct from _statement_ (see Keep in English). |
| mental model | mentaal model | nl | _het mentale model_ (definite, so the adjective takes -e). Do not use the English _mental model_. |
| (programming) language | taal · programmeertaal | nl | _de taal_, _de programmeertaal_ (closed compound). Use plain _taal_ where the context is already programming ("een taal die een computer begrijpt"); the full _programmeertaal_ where it needs saying. Never the English _language_. |

### Platform & curriculum vocabulary

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| course | cursus | nl | _de cursus_. The whole Jiki course ("in deze cursus is jouw interpreter Jiki"). Keep distinct from _les_ (lesson) and _curriculum_. |
| exercise | opdracht | nl | _de opdracht_. Not _oefening_. See `glossary-notes.md`. |
| task (within an exercise) | taak | nl | _de taak_. A sub-step of an _opdracht_; keeps _opdracht_ free for the exercise itself. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Dutch in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Dutch gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| string | _tekenreeks_ | Exception: the string concept itself uses _tekenreeks_ where the source defines it, then _string_ throughout. |
| array | _rij_ | Where the source `<define>`s it, gloss as _rij_, then use _array_ throughout. Distinct from the "chain" teaching metaphor below. |
| boolean | _booleaanse waarde_ (or _waar/onwaar-waarde_) | Where the source `<define>`s it, explain it means a _waar/onwaar_ value, then use _boolean_ throughout. |
| scope | _bereik_ (or _zichtbaarheid_) | Exception: the scope concept uses the Dutch where the source defines it, then _scope_ throughout. |
| interpreter | _tolk_ | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter. Never _vertaler_ (translator/compiler, a different job). Where the source `<define>`s it, gloss as _tolk_, then use _interpreter_ throughout. |
| statement (executable) | _uitvoerbare instructie_ | Dutch technical writing keeps _statement_ (e.g. _if-statement_, _break-statement_). Glossed with the qualifier so it stays distinct from _instruction_ (an instruction given to Jiki), which is plain _instructie_. |
| if statement | (no separate gloss) | Written _if-statement_ (hyphenated, `if` kept). Follows the _statement_ decision above. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Dutch rendering | Notes |
|-------------------|-----------------|-------|
| box (value container) | doos | _de doos_. |
| chain (array metaphor) | ketting | Not the abstract _keten_. A single link = _schakel_. |
| input slot | invoergleuf | |
| return chute | retourglijbaan | |
| machine (function metaphor) | machine | _de machine_ with an _invoergleuf_ and a _retourglijbaan_. |
| crank (machine crank) | slinger | The action is "aan de slinger draaien" (turn the crank), and "hem aanzetten" for powering it up. |
| shelves (storage) | planken | The shelves where variables and functions are stored. Singular _plank_. |
| board / whiteboard | whiteboard | **One object, one word**, used for both jobs: what the learner puts instructions on for Jiki to follow, and where a function keeps its own instructions and notes. _het whiteboard_. See `glossary-notes.md`. |
| warehouse (Jiki's warehouse) | loods | _de loods_. Distinct from _werkplaats_ (workshop, below); the two rooms must stay separate. |
| workshop (Jiki's workshop) | werkplaats | _de werkplaats_. Kept distinct from _loods_ (warehouse) above. |

## Brackets

Default to plain **haakjes**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _vierkante haakjes (`[]`)_.

| Glyph | Dutch | Notes |
|-------|-------|-------|
| `()` | haakjes · ronde haakjes | Plain _haakjes_ by default; add _ronde_ + glyph only when disambiguating. |
| `[]` | vierkante haakjes | |
| `{}` | accolades | |
| `<>` | punthaken | |

Example: _om een functie aan te roepen, schrijf je de naam van de functie en daarachter die twee haakjes (`()`)._

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Dutch:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Dutch renders both as **whiteboard**: bare
  _bord_ reads first as a plate or a road sign, and _schoolbord_ is specifically a
  blackboard, while _whiteboard_ is genuinely the everyday Dutch word for the object.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Dutch keeps the English word **interpreter**, because that is what Dutch developer
  writing actually says and it is an agent noun, so "jouw interpreter is Jiki" reads
  naturally about a person. **tolk** is recorded as the define-site gloss precisely because
  it is the everyday Dutch word for a *person* who interprets (between languages), not for
  a program.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Dutch glossary drafting for the concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.
**Terms affected:** `exercise`, `task (within an exercise)`, `statement (executable)`.

Rows added or corrected drafting the concept page:

- **`exercise` settled as `opdracht`**: what Dutch schools and learning platforms call a
  piece of work you are set (_programmeeropdracht_), against `oefening`, which reads as
  repetitive drilling rather than a thing to solve.
- **`task` added as `taak`**, so `opdracht` stays free for the exercise itself rather than
  being reused for a sub-step within one.
- **`statement (executable)` corrected from `_instructie_` to `_uitvoerbare instructie_`**,
  because plain `instructie` now collides with `instruction (given to Jiki)`.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date. A term whose reasoning is
already covered by a dated entry above (`board / whiteboard`, `interpreter`, `exercise`,
`task`, `statement (executable)`) is not repeated here.

#### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary word. |
| character | _teken_ alone can read as "sign". |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |
| operator | Same word in both languages, so it needs no separate gloss. |
| parameter, argument | Same word in both languages. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| loop | Established Dutch term; the English _loop_ would read as an anglicism. |
| error | Ordinary word. |
| instruction (given to Jiki) | Everyday word Dutch already uses for this. |
| mental model | Ordinary Dutch phrase. |

#### Keep in English

| Term | Why |
|------|-----|
| array | Standard in NL dev usage. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Dutch word for a box; direct and concrete. |
| chain | A physical chain (a necklace/bike chain). |
| input slot | _invoer_ (input) + _gleuf_ (a slot, like a coin slot). One word. |
| return chute | _retour_ (return) + _glijbaan_ (a playground slide/chute). One word. |
| machine | Plain word. |
| crank | _de slinger_ is the ordinary word for a handle you turn on a machine, not engine jargon. |
| warehouse | _de loods_ is a big practical shed you can walk around in, fitting Jiki hanging out among his machine shelves. _pakhuis_ is rejected as too storage-formal (goods in storage, nobody working there). |
| workshop | The room Jiki works in, where the _planken_ live (scope page). |

#### Brackets

| Term | Why |
|------|-----|
| `{}` | The standard Dutch word for curly braces. |
