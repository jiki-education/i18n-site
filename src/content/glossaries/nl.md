---
lang: "nl"
name: "Dutch"
family: null
stage: "refining"
governance_sha: "9a0a5eb"
content_version: "e6a51b18aa0c"
published_at: "2026-08-02"
term_count: 38
category_id: 69
forum_topic_id: 339
video_player_forum_topic_id: 769
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
| true / false | waar / onwaar | nl | Not capitalised in prose. Use _onwaar_, not _vals_. |
| decimal | kommagetal | nl | _decimaal getal_ is an acceptable, more formal alternative. Not _reëel getal_, which means "real number", a different concept. |
| float | zwevendekommagetal | nl | Closed compound, the literal "floating point number". Distinct from _decimal_: not every decimal is a float, and floats are abstract enough for new learners that they should always get extra explanatory text, in English and in Dutch alike. |
| character | teken | nl | A single text character. Show the English gloss where the source `<define>`s it. |

### Functions & control flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| function | functie | nl | _de functie_. The *keyword* `function` in code stays English; the concept in prose is _functie_. |
| expression | expressie | nl | _uitdrukking_ is not an acceptable synonym in the programming sense: it reads as an everyday phrase or idiom, not code. |
| to call (a function) | aanroepen | nl | Separable verb: "je _roept_ de functie _aan_". nl-NL (BE: _oproepen_). |
| return value | returnwaarde | nl | One word; _de returnwaarde_. Keeps the English _return_, does not translate it to _retour_; "retourwaarde" is non-existent/non-sensical Dutch in this context. _resultaat_ is a common looser description of the same thing but is not the glossary term. |
| parameter | parameter | nl | _de parameter_. The declaration-site name. |
| argument | argument | nl | _het argument_. The call-site value. |
| brackets (the two after a function name) | haakjes | nl | The `()` pair written after a function name: _die twee haakjes_. Plain _haakjes_ by default; see the Brackets section below for when to name the type. |

### Loops, state & program flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| loop | lus | nl | Not _loop_. _de lus_, for the generic concept. **Do not translate the named loop types**: `for` loop, `while` loop, `do while` loop stay _for-loop_, _while-loop_, _do while-loop_ (keyword in backticks/hyphenated) rather than becoming _for-lus_/_while-lus_; translating half a compound keyword reads worse than translating none of it. |
| instruction (given to Jiki) | instructie | nl | _de instructie_. "je _geeft_ Jiki _instructies_", "instructies op een whiteboard schrijven". Not the formal _voorschrift_ or _aanwijzing_. Distinct from _statement_ (see Keep in English). |
| (programming) language | taal · programmeertaal | nl | _de taal_, _de programmeertaal_ (closed compound). Use plain _taal_ where the context is already programming ("een taal die een computer begrijpt"); the full _programmeertaal_ where it needs saying. Never the English _language_. |

### Platform & curriculum vocabulary

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| course | cursus | nl | _de cursus_. The whole Jiki course ("in deze cursus is jouw interpreter Jiki"). Keep distinct from _les_ (lesson) and _curriculum_. |
| exercise | opdracht | nl | _de opdracht_. Not _oefening_. See `glossary-notes.md`. |
| task (within an exercise) | taak | nl | _de taak_. A sub-step of an _opdracht_; keeps _opdracht_ free for the exercise itself. |

### Drawing & colour (HSL)

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| lightness (HSL) | helderheid | nl | **Never _lichtheid_.** It is the literal translation and is grammatical, but is almost never used for this in Dutch. |
| saturation (HSL) | verzadiging | nl | _de verzadiging_. |
| hue (HSL) | kleurtoon | nl | _de kleurtoon_. Not the bare English _hue_. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Dutch in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Dutch gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| string | _tekenreeks_ | Exception: the string concept itself uses _tekenreeks_ where the source defines it, then _string_ throughout. |
| array | _reeks_ | Where the source `<define>`s it, gloss as _reeks_, then use _array_ throughout. Not _rij_, which reads as confusable with "row"; _array_ itself has entered Dutch and is the ordinary word. Distinct from the "chain" teaching metaphor below. |
| boolean | _booleaanse waarde_ (or _waar/onwaar-waarde_) | Where the source `<define>`s it, explain it means a _waar/onwaar_ value, then use _boolean_ throughout. |
| scope | _bereik_ (or _zichtbaarheid_) | Exception: the scope concept uses the Dutch where the source defines it, then _scope_ throughout. A bare one-word gloss risks reading as narrower than intended (_bereik_ alone suggests "reach"); prefer a short explanatory clause over the single word where there's room, e.g. "het deel van de broncode waarin dit symbool gedefinieerd is (het _bereik_, ook wel _scope_)". |
| interpreter | _tolk_ | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter. Never _vertaler_ (translator/compiler, a different job). Where the source `<define>`s it, gloss as _tolk_, then use _interpreter_ throughout. |
| statement (executable) | _uitvoerbare instructie_ | Dutch technical writing keeps _statement_ (e.g. _if-statement_, _break-statement_). Glossed with the qualifier so it stays distinct from _instruction_ (an instruction given to Jiki), which is plain _instructie_. |
| if statement | (no separate gloss) | Written _if-statement_ (hyphenated, `if` kept). Follows the _statement_ decision above. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Dutch rendering | Notes |
|-------------------|-----------------|-------|
| box (value container) | doos | _de doos_. |
| chain (array metaphor) | ketting | Not the abstract _keten_. A single link = _schakel_. |
| input slot | invoergleuf | |
| return chute | resultaatglijbaan | Not _retourglijbaan_. |
| machine (function metaphor) | machine | _de machine_ with an _invoergleuf_ and a _resultaatglijbaan_. |
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

Example: _om een functie aan te roepen, schrijf je de naam van de functie en daarachter die twee haakjes (`()`)._

---

## Decision log

### 2026-08-02: HSL colour terms — lightness is _helderheid_, not _lichtheid_

**Decided by:** native speaker (quaap), forum topic 979, post 2601
(https://forum.jiki.io/t/979/2601), reviewing the `rainbow` exercise.

- **lightness → helderheid.** The draft used _lichtheid_, the literal translation of
  "lightness". quaap: it is a literal translation "but is almost never used"; the natural
  Dutch term for the HSL component is _helderheid_. No glossary row existed, so the draft
  was an unconfirmed pass decision, not a native-speaker call, and is overturned.
- **saturation → verzadiging** and **hue → kleurtoon** are recorded at the same time. Both
  were already in use across the drawing content and quaap reproduced both unchanged in his
  suggested rewrite while correcting only _lichtheid_, so they are pinned now rather than
  left to be re-derived by each pass. If a reviewer wants either changed, they are the
  weaker of the three rows.

The three terms are one unit: they always appear together in the `hsl(...)` prose and in the
shared `draw` message catalog, so a change to one has to be applied everywhere the group
appears, not just in the exercise the feedback came from.

### 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| data type | datatype | Closed compound, "het datatype". Competing formal rendering "gegevenstype". | high |
| compound data type | samengesteld datatype | Glossed once as "(compound data type in het Engels)"; follows whichever base term wins. | medium |
| coin (number metaphor) | munt | Jiki metaphor: numbers enter the machine as coins. Pin it so no page drifts to "muntje"/"geldstuk". | high |
| concatenation | concatenatie | Alternative is descriptive ("aan elkaar plakken"/"samenvoegen"); recurs in string exercises. | medium |
| property (e.g. `length`) | eigenschap | Leaving "property" bare is also defensible in NL dev writing. | medium |
| to display (on screen) | tonen | Competes with "weergeven"/"laten zien"; mixing them shows up on shared screens. | medium |
| box (grid cell) | vak | **Collides with the agreed `box` → doos.** Different object: a forecast grid cell, not the value-container metaphor. "vaknummer" for "box number". Real teaching-metaphor risk, worth a native check before agreeing. | medium |
| counter (loop counter) | teller | Exercise text deliberately avoids "index". | medium |
| meridiem | meridiem (quoted on first use) | No everyday Dutch word; alternative is glossing once as "de am/pm-aanduiding". | medium |

No disagreements between workers. Possible `global/terms.md` gaps flagged: `concatenation`,
`coin`, `display`, `compound data type`, `property`.

### 2026-08-01: Confirmed translation engine — fable (stick with original)

**Decided by:** native speaker (sleeplessbyte), forum topic 930 ("[Dutch Review] Alternative
translation model"). sleeplessbyte flagged that the alternative version mistranslated "code"
(verb) as "codeer"/"coderen", a common but incorrect rendering that actually means "to
encode" (opposite of "to decode"), not "to write code". Per iHiD: Dutch stays on fable.
`nl`'s `translation_engine` is now explicitly set to `fable` in `tracking.json`.

### 2026-08-01: Guide prune and contradiction fixes

**Decided by:** agent, pruning pass over `guide.md` (no new rules added; every behavioural
instruction kept, in the guide or here as rationale).

Rationale moved out of the guide (the rules it justified stay, stated imperatively):

- **Audience.** Readers are in the Netherlands; the Dutch tech-education market is
  comfortable with English tech vocabulary but values clear, plain, well-structured
  explanation. This is why the guide is happy keeping English terms and why plain
  structure matters; it adds nothing to `global/voice.md`'s audience profile.
- **je/jij.** The informal register is the standard for Dutch online tutorials and
  learning platforms; **u** is wrong for a warm, beginner-facing context.
- **Separable verbs.** Keeping the prefix glued on is a classic anglicism, which is why
  the rule is stated so bluntly.
- **Closed compounds.** Writing a compound as two words is one of the most visible
  anglicism tells in Dutch.
- **Information structure.** Dutch is much closer to English here than a free-word-order
  language such as Hungarian (broadly SVO with V2), so a Dutch pass reorders far less
  aggressively; the voorveld and given-before-new levers are the ones machine translation
  still misses.
- **The English continuous.** "we zijn aan het kijken naar" is banned because it is too
  colloquial and clumsy for instructional prose, not because it is ungrammatical.

Contradictions fixed, on the authority of the native-speaker decisions logged below:

- **`for-lus` / `while-lus` in the guide corrected to `for-loop` / `while-loop`** (two
  places: the compound/hyphen rule and the em-dash style note). Both contradicted the
  `loop` row's rule from topic 908, which keeps the named loop types in English.
- **`retourwaarde` in the guide's compound example corrected to `returnwaarde`**, per the
  `return value` decision from topic 907 ("retourwaarde" is non-sensical Dutch here). The
  contrasting wrong form is now "return waarde".

Unconfirmed draft (nothing here overturns a native-speaker call; a reviewer may want to
settle it):

- **Quote glyphs.** The old rule said `"..."` (ASCII) with `„..."` as an alternative, and
  that alternative paired a typographic opening mark (U+201E) with an ASCII closing one, a
  mismatched pair. The rule now prescribes typographic “...” (U+201C/U+201D), with „...”
  (U+201E/U+201D) acceptable if used consistently for a whole file. Both are current Dutch
  practice (Taalunie/Onze Taal treat the curly double quote as the modern default and the
  low-high pair as the traditional alternative); the curly pair was picked as the default
  because it matches contemporary Dutch web writing. Needs native-speaker confirmation.

### 2026-08-01: Stage 2 batch 1 pass deltas (variables, if, repeat, rock-paper-scissors, rainbow)

**Decided by:** agent (translation workers, fable), aggregated by the batch orchestrator.
**Status: unconfirmed drafts.** Proposed during the Phase 2 batch 1 translation pass;
nothing written to `glossary.md`. To be agreed (native speaker outranks) before any row
lands.

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| variable | variabele | Core term, not yet a glossary row (the guide's gender list implies _de variabele_). The pass also skipped its `<define>` gloss as a near-identical same-script loanword; future passes should do the same consistently. | high |
| equal sign | isgelijkteken | Versus the looser _gelijkteken_ or "het =-teken"; recurs in assignment explanations, worth settling once. | medium |
| `{}` (curly brackets / braces) | accolades | New row for the Brackets table, which currently lists only `()`. Canonical Dutch word; a row would also settle showing the glyph, as "accolades (`{}`)". | high |
| keyword | sleutelwoord | Used per the guide's gender list (_het sleutelwoord_) but not a glossary row; English _keyword_ would also be defensible in Dutch dev writing. | medium |
| statement (assertion sense) | bewering | The `if` concept `<define>`s "statements" in the say-it-aloud/true-or-false sense, distinct from the glossary's "statement (executable)" row (which stays English). Rendered Dutch-primary as "beweringen (_statements_ in het Engels)"; needs confirming that this sense should not also stay English. | medium |
| repeat loop | repeat-loop | Confirm the "do not translate named loop types" rule (for/while/do while) extends to `repeat`, so the concept title stays "De repeat-loop", not "De repeat-lus". | medium |
| to announce (a result, RPS family) | omroepen | Three defensible renderings (omroepen / aankondigen / bekendmaken); family catalog and exercise both use _omroepen_ (separable: "riep ... om"), matching announcing to the _speelzaal_ ("playing hall"; not _speelhal_, which reads as an arcade). | medium |
| hue (HSL) | kleurtoon | _tint_ is equally common in Dutch colour-picker UI (Photoshop nl uses _Kleurtoon_). Must match the draw family catalog and exercises, so needs settling once for the family. | medium |
| lightness (HSL) | lichtheid | _helderheid_ is the everyday word but technically means brightness/value (HSV's V). The precise term was chosen; a native speaker may prefer _helderheid_ for beginners. | medium |

### 2026-08-01: Native-speaker glossary review (forum topic 339 sub-threads)

**Decided by:** native speaker (sleeplessbyte), forum topic 339 ("[Dutch Review] Glossary")
post #2121, and its six linked sub-threads: topics 905, 906, 907, 908, 911, 912.
**Terms affected:** `float`/`decimal`, `expression`, `return value`, `loop`, `array`,
`scope`, `return chute`.

- **`float` / `decimal` split into two separate terms** (topic 905). The single row
  `reëel getal` was wrong on two counts: "reëel getal" means "real number", a different
  mathematical concept, and English itself treats float and decimal as non-synonymous, so
  one Dutch term for both loses a distinction learners need for floating-point
  peculiarities. `decimal` is now **kommagetal** (_decimaal getal_ as an acceptable, more
  formal alternative — the term used when discussing number systems, e.g. _decimaal
  talstelsel_). `float` is now **zwevendekommagetal**, the literal "floating point
  number"; the reviewer flagged _drijvendekommagetal_ as a seen-but-disliked alternative,
  no citation for which is better, so it was not used.
- **`expression`'s "uitdrukking is an acceptable synonym" note was backwards** (topic 906).
  In the programming sense, _uitdrukking_ reads as an everyday phrase or idiom, not code;
  the note now says the opposite of what it said before.
- **`return value`: retourwaarde was reversed to `returnwaarde`** (topic 907). Dutch
  programming usage (confirmed via the Dutch Wikipedia article, titled "Returnwaarde")
  keeps the English word _return_ rather than translating it to _retour_; "retourwaarde"
  is non-existent/non-sensical Dutch in this context. _resultaat_ is a common looser
  description of the same concept in prose but is not the glossary term.
- **`loop`: keep the named loop types in English, only translate the bare word** (topic
  908). The existing row already had _lus_ right for the generic word, but rendered
  `for`/`while` loop as _for-lus_/_while-lus_. The reviewer found references translating
  the bare word as _lus_ but never translating the compound keyword names, and argued
  translating only half a keyword-based compound is worse than translating none of it, so
  `for loop`/`while loop`/`do while loop` now stay _for-loop_/_while-loop_/_do
  while-loop_.
- **`array`'s Keep-in-English gloss moved from `rij` to `reeks`** (topic 911). _rij_ reads
  as confusable with "row"; the reviewer also noted _array_ has itself entered Dutch as an
  ordinary word.
- **`scope`'s Keep-in-English gloss gained a caution against a bare one-word rendering**
  (topic 911). A single word (_bereik_ alone reads narrower, closer to "reach") risks
  making the gloss harder to understand than no gloss at all; the note now recommends a
  short explanatory clause where there's room, per the reviewer's suggested phrasing.
- **`return chute`: retourglijbaan corrected to `resultaatglijbaan`** (topic 912), for the
  same reason as `return value` above: keeping the "retour" framing was the wrong choice
  of Dutch word for what is returned.

### 2026-07-31: Pruned ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed 27
rows that had one obvious canonical Dutch rendering with nothing to decide (e.g. `value`,
`condition`, `keyword`, `variable`, `error`, `object`, and the "no gloss" catalogue of
product names and keywords). Kept every row recording a rejected alternative, a collision,
a register/scope distinction, or Jiki metaphor-set membership. A reviewer may want to
double check the removal of `parameter`/`argument`'s sibling rows `input`/`output`, and of
the individual bracket-glyph rows (`[]`, `{}`, `<>`), since those sat in otherwise-kept
tables.

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
