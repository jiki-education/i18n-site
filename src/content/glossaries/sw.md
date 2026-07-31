---
lang: "sw"
name: "Swahili"
family: null
stage: "setup"
governance_sha: "33fd2de"
content_version: "656f97b19689"
published_at: "2026-07-31"
term_count: 100
forum_topic_id: 500
video_player_forum_topic_id: 781
---

# Swahili (sw) glossary

The agreed term list for Swahili. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| programming / coding | **kupanga programu** (verb) / **programu** (the software itself) | sw | `programu` also serves as the noun for "program/software"; use `kupanga programu` for the activity of programming. |
| developer | **msanidi programu** | sw | |
| tech industry | **sekta ya teknolojia** | sw | |
| streak | **mfululizo** | sw | |
| pitfall | **mtego** | sw | |

## Term decisions by theme

Terms discussed in prose, split by theme for readability. Every table follows the same
columns as above.

### Values & data types

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| value | thamani | sw | |
| number | namba | sw | `nambari` is an accepted variant. |
| integer | namba kamili | sw | |
| float / decimal | desimali | sw | |
| character | herufi | sw | |
| true / false | kweli / sikweli | sw | |
| array / list | orodha | sw | |
| dictionary (data structure) | **(kept English)** | en | Give the gloss "kama kamusi, inaunganisha funguo na thamani" (like a dictionary, links keys to values) where the source `<define>`s it. |
| element | kipengele | sw | Reserved for the data-structure sense; platform "feature" uses a different word (`huduma`) to avoid collision. |
| index | **(kept English)** | en | Gloss as "nafasi ya kipengele katika orodha" (the position of an element in a list) where the source `<define>`s it. |
| string | **(kept English)** | en | Gloss as "mfuatano wa herufi" (a sequence of characters) where the source `<define>`s it, then use `string`. |
| Boolean | **(kept English)** | en | Gloss as "aina ya data yenye thamani mbili tu: kweli au sikweli" (a data type with only two values: true or false) where the source `<define>`s it, then use `Boolean`. |
| data type | aina ya data | sw | |

### Functions & control flow

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| if statement | kauli ya masharti | sw | The `if` keyword itself always stays English in code, per global rules. |
| condition | sharti / masharti | sw | |
| comparison | ulinganisho | sw | |
| expression | usemi | sw | |
| operator | **(kept English)** | en | Gloss as "kiendeshi, k.m. `+`, `-`" (an operator, e.g. `+`, `-`) where the source `<define>`s it, then use `operator`. |
| statement (executable) | amri | sw | The imperative sense: a line of code that does something and gets executed. Chosen distinct from `kauli` (below) to avoid the collision `global/terms.md` flags between the two senses of "statement". |
| statement (logical claim) | kauli | sw | The proposition sense: a claim that is true or false. |
| function | kitendakazi (pl. **vitendakazi**) | sw | Class 7/8, so agreement is `ki-`/`vi-` (`kitendakazi hiki`, `vitendakazi hivi`). The `function` keyword in code always stays English. |
| to call (a function) | kuita | sw | `kuita kitendakazi` = to call a function. |
| to define (a function) | kuunda | sw | |
| parameter | **(kept English)** | en | Gloss as "jina la thamani inayotarajiwa na kitendakazi" (the name of the value a function expects) where the source `<define>`s it, then use `parameter`. |
| argument | **(kept English)** | en | Kept distinct from `parameter` per `global/terms.md`. Gloss as "thamani halisi inayotolewa wakati wa kuita kitendakazi" (the actual value given when calling a function) where the source `<define>`s it. |
| input (to a function) | ingizo | sw | |
| output | matokeo | sw | |
| to return (a value) | kurejesha | sw | |
| return value | thamani inayorejeshwa | sw | Kept distinct from the verb above. |
| brackets (the two after a function name) | mabano | sw | The `()` pair written after a function name to call it. Where the shape has to be explicit, say `mabano ya duara` (round) as against `mabano ya mraba` (square). |

### Loops, state & program flow

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| keyword | **(kept English)** | en | Gloss as "neno muhimu la lugha ya programu" (an important word of the programming language) where the source `<define>`s it. |
| interpreter | mkalimani (pl. **wakalimani**) | sw | **A person who interprets, not a piece of software**: on the concept pages Jiki is the interpreter. Class 1/2, so agreement matches a person (`mkalimani huyu`, `wakalimani hawa`). Never use a program/device word here. The verb is `kufasiri` (to interpret). |
| instruction (given to Jiki) | agizo (pl. **maagizo**) | sw | |
| mental model | modeli ya kiakili | sw | |
| (programming) language | lugha ya programu | sw | Say `lugha ya programu` on introduction and plain `lugha` afterwards; the same word also carries "a language that a computer understands". |
| code (in prose) | msimbo | sw | This does not touch the `Code`, `Test` and `Debug` interface labels and tokens, which stay English (see "Keep in English"). |
| variable | **(kept English)** | en | Gloss as "kigezo" where the source `<define>`s it with the explanation "mahali panapohifadhi thamani" (a place that stores a value), then use `variable`. |
| assignment / to assign | **(kept English)** | en | Gloss as "kuweka thamani kwenye variable" (to put a value into a variable) where the source `<define>`s it, then use `assignment` / `to assign`. |
| code block | kizuizi cha msimbo | sw | |
| error | hitilafu | sw | `kosa` is an accepted variant. |
| nested | (descriptive phrase, not a fixed term) | sw | Use "uliowekwa ndani ya" (placed inside), e.g. `kitanzi kilichowekwa ndani ya kitanzi kingine` = nested loop. |
| iteration | marudio | sw | |
| to run / execute (code) | kuendesha | sw | |
| loop | kitanzi | sw | |
| for loop | `for` kitanzi | sw | Keep `for` in backticks (real keyword) + `kitanzi`. |
| while loop | `while` kitanzi | sw | As above, with `while`. |
| loop body | mwili wa kitanzi | sw | |
| scope | **(kept English)** | en | Gloss as "wigo" (range/scope, ordinary word) where the source `<define>`s it, then use `scope`. |
| class | darasa | sw | Always clarify where the source `<define>`s it to avoid ambiguity. |
| method | metodu | sw | No clarification needed. |
| property | sifa | sw | Clarify where the source `<define>`s it. |
| object | **(kept English)** | en | Gloss as "kitu" (thing, generic) where the source `<define>`s it, then use `object`. |

### Tooling & engineering

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| workflow | mtiririko wa kazi | sw | |
| deploy | **(kept English)** | en | Gloss as "kuweka programu tayari kutumika" (to put a program ready for use) where the source `<define>`s it, then use `deploy`. |
| tool / tooling | kifaa / vifaa | sw | |
| module | moduli | sw | |
| algorithm | kanuni | sw | Always clarify where the source `<define>`s it to avoid ambiguity. |
| API | **(kept English)** | en | Explain the concept in Swahili where the source `<define>`s it rather than just glossing the acronym, per `global/rules.md`: "njia ambayo programu mbili zinawasiliana" (a way two programs communicate with each other), then use `API`. |
| framework | **(kept English)** | en | Gloss as "mfumo" where the source `<define>`s it, then use `framework`. |
| CLI (the concept) | **(kept English)** | en | Explain the concept where the source `<define>`s it: "njia ya kutumia kompyuta kwa kuandika amri" (a way of using a computer by typing commands), then use `CLI`. |
| component | **(kept English)** | en | Gloss as "sehemu" (part/component, ordinary word) where the source `<define>`s it, then use `component`. |

### Platform & curriculum vocabulary

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| course | kozi | sw | Keep distinct from `somo` (lesson) and `mtaala` (curriculum). |
| exercise | zoezi (pl. **mazoezi**) | sw | |

## Keep in English

These stay in English in Swahili prose, with the Swahili gloss to use for each. No ordinary
Swahili word was found for any of them (rather than a policy choice), so where the source
`<define>`s one, use the gloss below; with no `<define>`, use the English bare, with no gloss.

| Term | Swahili gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | _mfuatano wa herufi_ (a sequence of characters) | See "Values & data types" table for full note. |
| Boolean | _aina ya data yenye thamani mbili tu: kweli au sikweli_ | See "Values & data types" table for full note. |
| variable | _kigezo (mahali panapohifadhi thamani)_ | See "Loops, state & program flow" table for full note. |
| parameter | _jina la thamani inayotarajiwa na kitendakazi_ | See "Functions & control flow" table for full note. |
| argument | _thamani halisi inayotolewa wakati wa kuita kitendakazi_ | See "Functions & control flow" table for full note. |
| scope | _wigo_ | See "Loops, state & program flow" table for full note. |
| object | _kitu_ | See "Loops, state & program flow" table for full note. |
| index | _nafasi ya kipengele katika orodha_ | See "Values & data types" table for full note. |
| dictionary (data structure) | _kama kamusi, inaunganisha funguo na thamani_ | See "Values & data types" table for full note. |
| keyword | _neno muhimu la lugha ya programu_ | See "Loops, state & program flow" table for full note. |
| assignment / to assign | _kuweka thamani kwenye variable_ | See "Loops, state & program flow" table for full note. |
| operator | _kiendeshi, k.m. `+`, `-`_ | See "Functions & control flow" table for full note. |
| deploy | _kuweka programu tayari kutumika_ | See "Tooling & engineering" table for full note. |
| API | explain what it is in Swahili | See "Tooling & engineering" table for full note. Not a word a beginner knows; where the source `<define>`s it, explain the concept, not just gloss the acronym. |
| framework | _mfumo_ | See "Tooling & engineering" table for full note. |
| CLI | explain what it is in Swahili | See "Tooling & engineering" table for full note. |
| component | _sehemu_ | See "Tooling & engineering" table for full note. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | The interface labels and tokens only. |
| Code, Bug, Frontend, Backend | (no gloss) | The interface labels and tokens only. Running prose about "the code you write" uses `msimbo` (see "Loops, state & program flow"). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Swahili rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | sanduku | |
| chain (array metaphor) | mnyororo | |
| machine (function metaphor) | mashine | |
| input slot | tundu la ingizo | |
| return chute | mteremko wa matokeo | |
| shelves (storage) | rafu | |
| warehouse (Jiki's warehouse) | ghala | |
| board / whiteboard | ubao | **One word for both uses**: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on. Do not write `ubao mweupe` for one use and `ubao` for the other. |
| crank (machine crank) | mpini | "to crank the handle" is `kuzungusha mpini` (to turn the handle). |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Swahili:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have. Swahili
  merges both onto **ubao**, the everyday word for a board on a wall (`ubao wa darasa`, a
  classroom board), dropping the earlier `ubao mweupe` (whiteboard) for the function sense.
  No collision with `array`, which is `orodha`.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. **`mkalimani` was confirmed**: it
  is the ordinary Swahili word for a human interpreter, class 1/2 animate, so it takes the
  same agreement Jiki himself takes (`mkalimani huyu`, `wakalimani hawa`), and it is the
  word an ordinary speaker already knows rather than a coinage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Swahili glossary drafted for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs. Swahili computing terminology is unevenly documented: terms for
older, common concepts (number, error, class) are well attested across independent
sources, while many terms for more abstract or newer concepts either have no credible
institutional source, or the sources that exist disagree with each other. Where a term
looked fragile or contested, this pass kept it in English rather than presenting a
guessed coinage as settled (see "Keep in English" in `glossary.md`), and left it as an
open question for native-speaker review.

**The big one: `function` changed from `kazi` to `kitendakazi`.** `kazi` is also the
ordinary Swahili word for "work/job", and it collided with that everyday sense twice on
the using-functions page alone ("it's his job to interpret the code", "how that machine
actually works"), both of which want `kazi` in its everyday meaning. The translator had to
write around the collision on that one page, and it would recur on every functions page
after it, so this pass fixed it once here rather than dodging it per page.
`kitendakazi` is morphologically transparent (`ki-` + `tenda` + `kazi`, "the thing that
does the work") and appears in Swahili software-localization usage, but the agent found no
hard institutional CS citation for it and rates its own confidence medium. This is a noun
class change, from class 9/10 (`kazi`, no distinct singular/plural form) to class 7/8
(`kitendakazi` / `vitendakazi`), so agreement markers move with it: `kitendakazi hiki`,
`vitendakazi hivi`.

**Honest fallback:** if a native speaker calls `kitendakazi` a bureaucratic coinage that
does not read naturally, keeping `function` in English would be consistent with how this
glossary already treats `variable`, `parameter`, `argument`, `scope` and `object`, all of
which stay English here for the same reason (no confidently-sourced native term). This is
the single most load-bearing term in the curriculum, so it is the top item for
`/action-forum-post` once native speakers engage.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `function`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Medium confidence; institutional sources disagree on a single preferred verb form. |
| developer | Well attested across dictionary and community sources. |
| tech industry | Compositional (`sekta` = sector, `teknolojia` = nativized loanword "technology"), not independently sourced as a fixed phrase but low ambiguity risk. |
| streak | Ordinary word for "a series/succession, in a row", not CS-specific but a natural fit for a daily-use streak. |
| pitfall | Ordinary word ("trap"); natural extension. |

#### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary word; medium confidence, sourced from the Kilinux terminology project. |
| number | Very well established across all sources. |
| integer | Compositional (`kamili` = whole/complete); confirmed in math-education Swahili, extended to CS by analogy. Medium confidence. |
| float / decimal | Nativized loanword; confirmed only in math-education sources, not CS-specific. Medium confidence. |
| character | Ordinary word for "letter/character". Medium confidence. |
| true / false | Low-medium confidence: sourced from two independent hobbyist Swahili-keyword programming languages (Nuru, Jenga on GitHub), not an institutional source. |
| array / list | Ordinary word for "list". Medium confidence. |
| dictionary (data structure) | No credible CS-specific source found, and real risk of collision with `kamusi` (a literal dictionary/reference book). |
| element | Sourced from a Swahili Wikipedia OOP article. Medium confidence. |
| index | No credible source found. |
| string | No credible CS-specific source found; `mfuatano` ("sequence") surfaced only as an unconfirmed candidate. |
| data type | Compositional, sourced from a Swahili Wikipedia Python article. Medium confidence. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Compositional (`kauli` = statement, `masharti` = conditions). Low-medium confidence, not directly sourced. |
| condition | Ordinary word. |
| comparison | Ordinary word, from the verb `kulinganisha` (to compare). Extrapolated, not CS-source-confirmed, but low ambiguity risk. |
| expression | Ordinary word ("utterance/expression"). Extrapolated. |
| operator | Candidates (`mwendeshaji`, `kiendeshi`) found only in low-confidence crowd dictionaries. |
| statement (executable) | Low-medium confidence, not directly sourced. |
| statement (logical claim) | Ordinary word. |
| to call (a function) | Ordinary verb ("to call/summon"), natural extension. |
| to define (a function) | "To create/construct". Low confidence, not directly sourced. |
| parameter | The candidate `kigezo` is contested (also used loosely for "criterion" and, unresolved, for "variable"). |
| argument | No credible source found. |
| input (to a function) | Native coinage from `kuingiza` (to insert). Medium confidence, sourced from a UDSM thesis (Malagira 2010). |
| output | Ordinary word ("results/outcomes"). Low-medium confidence. |
| to return (a value) | Ordinary, transparent verb ("to return/give back"). |
| return value | Compositional ("the value that is returned"). Low confidence, but transparent. |
| brackets (the two after a function name) | `mabano` is the everyday word for brackets, and it is what the using-functions page uses ("those two brackets" = `mabano mawili`). |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | No credible source found. |
| instruction (given to Jiki) | Everyday word for something you tell someone to do and they then carry out, which is exactly the board metaphor ("kuweka maagizo kwenye ubao"). Not a formal or legal register word. |
| mental model | The picture-in-your-head framing. `modeli` is a common nativized loanword. The looser `picha ya kichwani` (picture in your head) is a natural alternative and reads well next to the source's own "in my head" phrasing; an open question for native-speaker review. |
| (programming) language | `lugha` is the ordinary Swahili word for a language and beginners already know it, so it was used rather than an English borrowing. |
| code (in prose) | The learner's code as running prose ("the code that you write" = "msimbo unaoandika"). Medium confidence. |
| variable | The single biggest gap found in research: the candidate `kigezo` appears only in math-education sources and also ordinarily means "criterion", causing real ambiguity risk. This may become a settled Swahili term once confirmed. |
| assignment / to assign | Risk of collision with `kugawa` ("to divide/allocate"). |
| code block | Compositional (`msimbo` = code; `kizuizi` = block/barrier). Low-medium confidence, not directly sourced as a fixed phrase. |
| error | Well attested across multiple sources. |
| nested | No single-word coinage confirmed; a descriptive phrase is more reliable than forcing one. |
| iteration | From `kurudia` (to repeat). Low-medium confidence, not CS-source-confirmed. |
| to run / execute (code) | Ordinary verb ("to run/drive"). Extrapolated but low ambiguity risk. |
| loop | Converges across three independent crowd dictionaries, but no institutional source confirmed it as the CS term. |
| loop body | Compositional ("body of the loop"). Low confidence, transparent. |
| scope | Mirrors the "keep English" treatment other languages give this term. |
| class | Ordinarily means "classroom/school class". Sourced from a Swahili Wikipedia Python article. Medium confidence. |
| method | Nativized loanword, transparently recognizable. Medium confidence. |
| property | Ordinarily means "quality/attribute/praise". Medium confidence. |
| object | Two independent Swahili Wikipedia CS articles give conflicting terms (`kiumbile` vs `mfano`), a bad sign for confidence in this cluster. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| workflow | Compositional ("flow of work"), using `kazi` in its ordinary "work" sense. Low-medium confidence, not directly sourced. |
| deploy | Research pattern (a SUMAIT 2022 paper) shows newer/web-era terms like this are commonly left bare in real Swahili tech usage. |
| tool / tooling | Ordinary word ("tool/instrument"), extrapolated but low ambiguity risk. |
| module | Nativized loanword, pattern-consistent with `metodu`/`akaunti`/`adapta`, but not independently confirmed for this specific term. Low confidence. |
| algorithm | Also ordinarily means "rule/law/principle". Medium confidence. |
| API | Research found conflicting coinages: a heavy native-coinage version on Swahili Wikipedia against a looser, likely machine-translated paraphrase elsewhere. |
| framework | The candidate `mfumo` is generic ("system/structure") with real ambiguity risk. |
| CLI (the concept) | Only weakly sourced (`kiolesura cha amri`, a single source). |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | Well-established nativized loanword in ordinary use. |
| exercise | Ordinary word for an exercise or drill, already standard in Swahili schooling. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Ordinary, concrete word for a box/crate/chest; already used tech-adjacently in `sanduku la barua pepe` (email inbox, literally "letter-box"). Medium confidence. |
| chain | Chosen over `mlolongo` (also "sequence/series", but more abstract) because Jiki's metaphor is specifically a physical chain image; `mnyororo` is the concrete, physical word (bicycle chain, dog chain). Medium confidence; this is a judgment call, an open question for native-speaker review. |
| machine | Everyday, concrete word for household/mechanical machines (`mashine ya kufulia` = washing machine); should transfer naturally. Medium-high confidence. |
| input slot | `tundu` = a small physical opening/hole (concrete, e.g. `tundu la sindano` = eye of a needle) + `ingizo` (input, agreed term above). Low-medium confidence. |
| return chute | `mteremko` = a slope/descent + `matokeo` (output, agreed term above). This is the weakest-verified metaphor term in this bootstrap; the more literal "chute/slide" candidate (`utelezi`) could not be independently confirmed. An open question for native-speaker review. |
| shelves | Ordinary, concrete word for a shelf. Not independently researched for this bootstrap; medium confidence based on general vocabulary. |
| warehouse | Ordinary, concrete word for a warehouse or store where goods are kept, which is exactly the image ("ghala la Jiki"). |
| crank | Ordinary, concrete word for a handle you grip and turn. |
