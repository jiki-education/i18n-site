---
lang: "sw"
name: "Swahili"
family: null
governance_sha: "1d91ad4"
content_version: "f098e7f0692d"
published_at: "2026-07-30"
term_count: 100
forum_topic_id: 500
---

# Swahili (sw) glossary

The agreed term list for Swahili. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive**: a pass appends rows, may correct a row marked `agent` (reporting
the old value), and never silently changes a row marked `human`. See "Glossary writes are
additive" in `global/workflow.md`, which also defines the `Agreed by` column every table
below carries.

## A note on sourcing confidence for this bootstrap

Swahili computing terminology is unevenly documented. Terms for older/common concepts
(computer, program, number, class, list, error) are well attested across independent
sources. Many terms for more abstract or newer concepts (variable, parameter, argument,
scope, API, framework, index, string) either have no credible institutional source, or the
sources that exist actively disagree with each other. Rather than presenting a fragile or
contested coinage as settled, this glossary keeps those terms in English (see "Keep in
English" below) and flags them for native-speaker review via `/action-forum-post`. Terms
below marked "medium" or "low" confidence in their row notes should be treated as the first
candidate to revisit once native-speaker feedback arrives, not as final.

No row here has been confirmed by a native speaker yet: every row is marked `agent`.

## Core decisions

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| programming / coding | **kupanga programu** (verb) / **programu** (the software itself) | sw | `programu` also serves as the noun for "program/software"; use `kupanga programu` for the activity of programming. Medium confidence; institutional sources disagree on a single preferred verb form. | agent |
| developer | **msanidi programu** | sw | Well attested across dictionary and community sources. | agent |
| tech industry | **sekta ya teknolojia** | sw | Compositional (`sekta` = sector, `teknolojia` = nativized loanword "technology"); not independently sourced as a fixed phrase but low ambiguity risk. | agent |
| streak | **mfululizo** | sw | Ordinary word for "a series/succession, in a row"; not CS-specific but a natural fit for a daily-use streak. | agent |
| pitfall | **mtego** | sw | Ordinary word ("trap"); natural extension. | agent |

## Term decisions by theme

Terms discussed in prose, split by theme for readability. The "Use (sw/en)" column marks
whether each one is written in Swahili (`sw`) or kept in English (`en`) in prose; the rows
marked `en` are collected again in "Keep in English" below with their glosses. Every table
follows the same columns.

### Values & data types

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| value | thamani | sw | Ordinary word; medium confidence, sourced from Kilinux terminology project. | agent |
| number | namba | sw | Very well established across all sources. `nambari` is an accepted variant. | agent |
| integer | namba kamili | sw | Compositional (`kamili` = whole/complete); confirmed in math-education Swahili, extended to CS by analogy. Medium confidence. | agent |
| float / decimal | desimali | sw | Nativized loanword; confirmed only in math-education sources, not CS-specific. Medium confidence. | agent |
| character | herufi | sw | Ordinary word for "letter/character". Medium confidence. | agent |
| true / false | kweli / sikweli | sw | Low-medium confidence: sourced from two independent hobbyist Swahili-keyword programming languages (Nuru, Jenga on GitHub), not an institutional source. Flag for native-speaker review. | agent |
| array / list | orodha | sw | Ordinary word for "list". Medium confidence. | agent |
| dictionary (data structure) | **(kept English)** | en | No credible CS-specific source found, and real risk of collision with `kamusi` (a literal dictionary/reference book). Give the gloss "kama kamusi, inaunganisha funguo na thamani" (like a dictionary, links keys to values) where the source `<define>`s it. Open question for native-speaker review. | agent |
| element | kipengele | sw | Sourced from a Swahili Wikipedia OOP article. Medium confidence. Note: reserved for the data-structure sense; platform "feature" uses a different word (`huduma`) to avoid collision. | agent |
| index | **(kept English)** | en | No credible source found. Gloss as "nafasi ya kipengele katika orodha" (the position of an element in a list) where the source `<define>`s it. Low confidence / open question. | agent |
| string | **(kept English)** | en | No credible CS-specific source found; `mfuatano` ("sequence") surfaced only as an unconfirmed candidate. Gloss as "mfuatano wa herufi" (a sequence of characters) where the source `<define>`s it, then use `string`. | agent |
| Boolean | **(kept English)** | en | Gloss as "aina ya data yenye thamani mbili tu: kweli au sikweli" (a data type with only two values: true or false) where the source `<define>`s it, then use `Boolean`. | agent |
| data type | aina ya data | sw | Compositional, sourced from a Swahili Wikipedia Python article. Medium confidence. | agent |

### Functions & control flow

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| if statement | kauli ya masharti | sw | Compositional (`kauli` = statement, `masharti` = conditions). The `if` keyword itself always stays English in code, per global rules. Low-medium confidence, not directly sourced. | agent |
| condition | sharti / masharti | sw | Ordinary word. | agent |
| comparison | ulinganisho | sw | Ordinary word, from the verb `kulinganisha` (to compare). Extrapolated, not CS-source-confirmed, but low ambiguity risk. | agent |
| expression | usemi | sw | Ordinary word ("utterance/expression"). Extrapolated. | agent |
| operator | **(kept English)** | en | Candidates (`mwendeshaji`, `kiendeshi`) found only in low-confidence crowd dictionaries. Gloss as "kiendeshi, k.m. `+`, `-`" (an operator, e.g. `+`, `-`) where the source `<define>`s it, then use `operator`. | agent |
| statement (executable) | amri | sw | The imperative sense: a line of code that does something and gets executed. Chosen distinct from `kauli` (below) to avoid the collision `global/terms.md` flags between the two senses of "statement". Low-medium confidence. | agent |
| statement (logical claim) | kauli | sw | The proposition sense: a claim that is true or false. Ordinary word. | agent |
| function | kitendakazi (pl. **vitendakazi**) | sw | Class 7/8, so agreement is `ki-`/`vi-` (`kitendakazi hiki`, `vitendakazi hivi`). Transparent to a reader with no English (`ki-` + `tenda` + `kazi`, "the thing that does the work") and attested in Swahili software-localization usage. Chosen over the earlier `kazi` because `kazi` is the ordinary word for "work/job" and collides with it in running prose: on the using-functions page alone the English source says "it's his job to interpret the code" and "how that machine actually works", both of which want `kazi` in its everyday sense. That collision recurs on every functions page, so it is fixed here once rather than dodged per page. The `function` keyword in code always stays English. Top open question for native-speaker review. | agent |
| to call (a function) | kuita | sw | Ordinary verb ("to call/summon"), natural extension: `kuita kitendakazi` = to call a function. | agent |
| to define (a function) | kuunda | sw | "To create/construct". Low confidence, not directly sourced. | agent |
| parameter | **(kept English)** | en | The candidate `kigezo` is contested (also used loosely for "criterion" and, unresolved, for "variable"). Gloss as "jina la thamani inayotarajiwa na kitendakazi" (the name of the value a function expects) where the source `<define>`s it, then use `parameter`. | agent |
| argument | **(kept English)** | en | No credible source found; kept distinct from `parameter` per `global/terms.md`. Gloss as "thamani halisi inayotolewa wakati wa kuita kitendakazi" (the actual value given when calling a function) where the source `<define>`s it. | agent |
| input (to a function) | ingizo | sw | Native coinage from `kuingiza` (to insert). Medium confidence, sourced from a UDSM thesis (Malagira 2010). | agent |
| output | matokeo | sw | Ordinary word ("results/outcomes"). Low-medium confidence. | agent |
| to return (a value) | kurejesha | sw | Ordinary, transparent verb ("to return/give back"). | agent |
| return value | thamani inayorejeshwa | sw | Compositional ("the value that is returned"), kept distinct from the verb above. Low confidence, but transparent. | agent |
| brackets (the two after a function name) | mabano | sw | The `()` pair written after a function name to call it. `mabano` is the everyday word for brackets, and it is what the using-functions page uses ("those two brackets" = `mabano mawili`). Where the shape has to be explicit, say `mabano ya duara` (round) as against `mabano ya mraba` (square). | agent |

### Loops, state & program flow

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| keyword | **(kept English)** | en | No credible source found. Gloss as "neno muhimu la lugha ya programu" (an important word of the programming language) where the source `<define>`s it. | agent |
| interpreter | mkalimani (pl. **wakalimani**) | sw | **A person who interprets, not a piece of software**: on the concept pages Jiki is the interpreter. `mkalimani` is the ordinary Swahili word for a human interpreter, class 1/2, so it takes the animate agreement Jiki himself takes. Never use a program/device word here. The verb is `kufasiri` (to interpret). | agent |
| instruction (given to Jiki) | agizo (pl. **maagizo**) | sw | Everyday word for something you tell someone to do and they then carry out, which is exactly the board metaphor ("kuweka maagizo kwenye ubao"). Not a formal or legal register word. | agent |
| mental model | modeli ya kiakili | sw | The picture-in-your-head framing. `modeli` is a common nativized loanword. The looser `picha ya kichwani` (picture in your head) is a natural alternative and reads well next to the source's own "in my head" phrasing; flagged for native-speaker review. | agent |
| (programming) language | lugha ya programu | sw | `lugha` is the ordinary Swahili word for a language and beginners already know it, so use it rather than an English borrowing. Say `lugha ya programu` on introduction and plain `lugha` afterwards; the same word also carries "a language that a computer understands". | agent |
| code (in prose) | msimbo | sw | The learner's code as running prose ("the code that you write" = "msimbo unaoandika"). Medium confidence. This does not touch the `Code`, `Test` and `Debug` interface labels and tokens, which stay English (see "Keep in English"). | agent |
| variable | **(kept English)** | en | The single biggest gap found in research: the candidate `kigezo` appears only in math-education sources and also ordinarily means "criterion", causing real ambiguity risk. Gloss as "kigezo" where the source `<define>`s it with the explanation "mahali panapohifadhi thamani" (a place that stores a value), then use `variable`. Flag for native-speaker review; this may become a settled Swahili term once confirmed. | agent |
| assignment / to assign | **(kept English)** | en | Risk of collision with `kugawa` ("to divide/allocate"). Gloss as "kuweka thamani kwenye variable" (to put a value into a variable) where the source `<define>`s it, then use `assignment` / `to assign`. | agent |
| code block | kizuizi cha msimbo | sw | Compositional (`msimbo` = code; `kizuizi` = block/barrier). Low-medium confidence, not directly sourced as a fixed phrase. | agent |
| error | hitilafu | sw | Well attested across multiple sources. `kosa` is an accepted variant. | agent |
| nested | (descriptive phrase, not a fixed term) | sw | Use "uliowekwa ndani ya" (placed inside), e.g. `kitanzi kilichowekwa ndani ya kitanzi kingine` = nested loop. No single-word coinage confirmed; a descriptive phrase is more reliable than forcing one. | agent |
| iteration | marudio | sw | From `kurudia` (to repeat). Low-medium confidence, not CS-source-confirmed. | agent |
| to run / execute (code) | kuendesha | sw | Ordinary verb ("to run/drive"). Extrapolated but low ambiguity risk. | agent |
| loop | kitanzi | sw | Low-medium confidence: converges across three independent crowd dictionaries, but no institutional source confirmed it as the CS term. Flag for native-speaker review. | agent |
| for loop | `for` kitanzi | sw | Keep `for` in backticks (real keyword) + `kitanzi`. | agent |
| while loop | `while` kitanzi | sw | As above, with `while`. | agent |
| loop body | mwili wa kitanzi | sw | Compositional ("body of the loop"). Low confidence, transparent. | agent |
| scope | **(kept English)** | en | Gloss as "wigo" (range/scope, ordinary word) where the source `<define>`s it, then use `scope`. Mirrors the "keep English" treatment other languages give this term. | agent |
| class | darasa | sw | Ordinarily means "classroom/school class"; always clarify where the source `<define>`s it to avoid ambiguity. Medium confidence, sourced from a Swahili Wikipedia Python article. | agent |
| method | metodu | sw | Nativized loanword, transparently recognizable; no clarification needed. Medium confidence. | agent |
| property | sifa | sw | Ordinarily means "quality/attribute/praise"; clarify where the source `<define>`s it. Medium confidence. | agent |
| object | **(kept English)** | en | Two independent Swahili Wikipedia CS articles give conflicting terms (`kiumbile` vs `mfano`), a bad sign for confidence in this cluster. Gloss as "kitu" (thing, generic) where the source `<define>`s it, then use `object`. Flag for native-speaker review. | agent |

### Tooling & engineering

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| workflow | mtiririko wa kazi | sw | Compositional ("flow of work"), using `kazi` in its ordinary "work" sense. Low-medium confidence, not directly sourced. | agent |
| deploy | **(kept English)** | en | Research pattern (SUMAIT 2022 paper) shows newer/web-era terms like this are commonly left bare in real Swahili tech usage. Gloss as "kuweka programu tayari kutumika" (to put a program ready for use) where the source `<define>`s it, then use `deploy`. | agent |
| tool / tooling | kifaa / vifaa | sw | Ordinary word ("tool/instrument"), extrapolated but low ambiguity risk. | agent |
| module | moduli | sw | Nativized loanword, pattern-consistent with `metodu`/`akaunti`/`adapta`, but not independently confirmed for this specific term. Low confidence. | agent |
| algorithm | kanuni | sw | Also ordinarily means "rule/law/principle"; always clarify where the source `<define>`s it to avoid ambiguity. Medium confidence. | agent |
| API | **(kept English)** | en | Research found conflicting coinages (a heavy native-coinage version on Swahili Wikipedia vs a looser, likely machine-translated paraphrase elsewhere). Explain the concept in Swahili where the source `<define>`s it rather than just glossing the acronym, per `global/rules.md`: "njia ambayo programu mbili zinawasiliana" (a way two programs communicate with each other), then use `API`. | agent |
| framework | **(kept English)** | en | The candidate `mfumo` is generic ("system/structure") with real ambiguity risk. Gloss as "mfumo" where the source `<define>`s it, then use `framework`. | agent |
| CLI (the concept) | **(kept English)** | en | Only weakly sourced (`kiolesura cha amri`, single source). Explain the concept where the source `<define>`s it: "njia ya kutumia kompyuta kwa kuandika amri" (a way of using a computer by typing commands), then use `CLI`. | agent |
| component | **(kept English)** | en | Gloss as "sehemu" (part/component, ordinary word) where the source `<define>`s it, then use `component`. | agent |

### Platform & curriculum vocabulary

| English | Swahili | Use (sw/en) | Notes | Agreed by |
|---------|---------|----------|-------|-----------|
| course | kozi | sw | The whole Jiki course the learner is taking ("Katika kozi hii"). Well-established nativized loanword in ordinary use. Keep distinct from `somo` (lesson) and `mtaala` (curriculum). | agent |
| exercise | zoezi (pl. **mazoezi**) | sw | Ordinary word for an exercise or drill, already standard in Swahili schooling. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Swahili in the gloss column below (per the format in `global/voice.md` and the concrete
pattern in `guide.md`); with no `<define>`, use the English bare, with no gloss.

| Term | Swahili gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| string | _mfuatano wa herufi_ (a sequence of characters) | See "Values & data types" table for full note. | agent |
| Boolean | _aina ya data yenye thamani mbili tu: kweli au sikweli_ | See "Values & data types" table for full note. | agent |
| variable | _kigezo (mahali panapohifadhi thamani)_ | See "Loops, state & program flow" table for full note; the single biggest open item from this bootstrap. | agent |
| parameter | _jina la thamani inayotarajiwa na kitendakazi_ | See "Functions & control flow" table for full note. | agent |
| argument | _thamani halisi inayotolewa wakati wa kuita kitendakazi_ | See "Functions & control flow" table for full note. | agent |
| scope | _wigo_ | See "Loops, state & program flow" table for full note. | agent |
| object | _kitu_ | See "Loops, state & program flow" table for full note. | agent |
| index | _nafasi ya kipengele katika orodha_ | See "Values & data types" table for full note. | agent |
| dictionary (data structure) | _kama kamusi, inaunganisha funguo na thamani_ | See "Values & data types" table for full note. | agent |
| keyword | _neno muhimu la lugha ya programu_ | See "Loops, state & program flow" table for full note. | agent |
| assignment / to assign | _kuweka thamani kwenye variable_ | See "Loops, state & program flow" table for full note. | agent |
| operator | _kiendeshi, k.m. `+`, `-`_ | See "Functions & control flow" table for full note. | agent |
| deploy | _kuweka programu tayari kutumika_ | See "Tooling & engineering" table for full note. | agent |
| API | explain what it is in Swahili | See "Tooling & engineering" table for full note. Not a word a beginner knows; where the source `<define>`s it, explain the concept, not just gloss the acronym. | agent |
| framework | _mfumo_ | See "Tooling & engineering" table for full note. | agent |
| CLI | explain what it is in Swahili | See "Tooling & engineering" table for full note. | agent |
| component | _sehemu_ | See "Tooling & engineering" table for full note. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | The interface labels and tokens only. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | The interface labels and tokens only. Running prose about "the code you write" uses `msimbo` (see "Loops, state & program flow"). | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Swahili rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | sanduku | Ordinary, concrete word for a box/crate/chest; already used tech-adjacently in `sanduku la barua pepe` (email inbox, literally "letter-box"). Medium confidence. | agent |
| chain (array metaphor) | mnyororo | Chosen over `mlolongo` (also "sequence/series", but more abstract) because Jiki's metaphor is specifically a *physical* chain image; `mnyororo` is the concrete, physical word (bicycle chain, dog chain). Medium confidence; this is a judgment call, flagged for native-speaker review. | agent |
| machine (function metaphor) | mashine | Everyday, concrete word for household/mechanical machines (`mashine ya kufulia` = washing machine); should transfer naturally. Medium-high confidence. | agent |
| input slot | tundu la ingizo | `tundu` = a small physical opening/hole (concrete, e.g. `tundu la sindano` = eye of a needle) + `ingizo` (input, agreed term above). Low-medium confidence. | agent |
| return chute | mteremko wa matokeo | `mteremko` = a slope/descent + `matokeo` (output, agreed term above). This is the **weakest-verified** metaphor term in this bootstrap; the more literal "chute/slide" candidate (`utelezi`) could not be independently confirmed. Flag strongly for native-speaker review before treating as settled. | agent |
| shelves (storage) | rafu | Ordinary, concrete word for a shelf. Not independently researched for this bootstrap; medium confidence based on general vocabulary. | agent |
| warehouse (Jiki's warehouse) | ghala | Ordinary, concrete word for a warehouse or store where goods are kept, which is exactly the image ("ghala la Jiki"). | agent |
| board / whiteboard | ubao | **One word for both uses**: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on. `ubao` is the everyday word for a board on a wall (`ubao wa darasa`, a classroom board) and needs no qualifier; do not write `ubao mweupe` for one use and `ubao` for the other. No collision risk with "array", which is `orodha`. | agent |
| crank (machine crank) | mpini | The handle itself; "to crank the handle" is `kuzungusha mpini` (to turn the handle). Ordinary, concrete word for a handle you grip and turn. | agent |

## Open questions for native-speaker review

Term-level items that are genuinely unresolved and are the highest-priority candidates for
`/action-forum-post` once native speakers engage:

1. `kitendakazi` for "function": does it read naturally, or does it feel like a
   localization coinage to a Swahili-speaking beginner? The alternatives are the earlier
   `kazi` (rejected here because it collides with the ordinary "work/job" sense) and
   keeping `function` in English as this glossary does for `variable`. This is the single
   most load-bearing term in the whole curriculum, so it is the top question.
2. `mkalimani` for "interpreter": correct as a person-word for Jiki, but is it the word a
   Swahili speaker would reach for when the thing being interpreted is code rather than
   speech?
3. `ubao` as the one word for the board and a function's whiteboard: does the unqualified
   word read as a writing board in a room?
4. `modeli ya kiakili` for "mental model", against the looser `picha ya kichwani`.
5. Is `mnyororo` (physical chain) really the better fit for the array metaphor over
   `mlolongo` (abstract sequence), or does the more abstract word actually read better to
   a Swahili-speaking beginner?
6. Is there a better word than `mteremko` for "return chute"? The literal
   playground-slide sense (`utelezi`) could not be confirmed.
7. Does `kigezo` (currently kept in English with this as the gloss) actually work as the
   Swahili term for "variable" in practice, or does its "criterion" sense make it too
   ambiguous?
8. Do `kweli` / `sikweli` (true/false) read naturally, or is there a more standard pair in
   real use (only sourced from two hobbyist projects, not an institutional source)?
9. Object (`kiumbile` vs `mfano` vs kept-English "object" with `kitu` gloss): which reads
   best to an actual Swahili-speaking beginner?
