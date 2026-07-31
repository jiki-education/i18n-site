---
lang: "el"
name: "Greek"
family: null
stage: "setup"
governance_sha: "91b6986"
content_version: "5abb3f4c9a75"
published_at: "2026-07-31"
term_count: 52
forum_topic_id: 497
---

# Greek (el) glossary

The agreed term list for Greek. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| programming / coding | **προγραμματισμός** | el | Use consistently. "coding" occasionally appears as a casual English loanword; do not mix it in with `προγραμματισμός` in one document. |
| developer | **προγραμματιστής** | el | English "developer" also appears in job titles/marketing but does not displace this in prose. |

## Localize (use the Greek term)

These are terms where the Greek is used in prose, so the "Use (el/en)" column is `el` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| true / false | αληθής / ψευδής | el | Not capitalised in prose. |
| string | συμβολοσειρά | el | Not the school curriculum's `αλφαριθμητικό`. |
| array | πίνακας | el | **Never confuse with `board / whiteboard` in the metaphors table below**, which is always `ασπροπίνακας`, never bare `πίνακας`. |
| list | λίστα | el | Used where the source itself distinguishes "list" from "array". |
| index | θέση | el | Not `δείκτης`, which is reserved for "pointer", a different concept in Greek CS. |

### Functions & control flow

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| if statement | εντολή `if` | el | Keep `if` in backticks (real keyword) + `εντολή`, matching `for` βρόχος below. Not the school-curriculum term `δομή επιλογής`. |
| statement (executable) | εντολή | el | The imperative sense: a line of code that does something and gets executed. Shares the word with `instruction (given to Jiki)` below. |
| statement (logical claim) | πρόταση | el | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | συνάρτηση | el | The *keyword* `function` in code stays English; the concept in prose is `συνάρτηση`. |
| parameter | παράμετρος | el | The declaration-site name. |
| argument | όρισμα | el | The call-site value. |
| return value | τιμή επιστροφής | el | Keep distinct from the verb above. |
| brackets (the two after a function name) | παρενθέσεις | el | Greek names each bracket shape separately (see the Brackets table), so the rendering must say which: the pair written after a function name is always `παρενθέσεις`, e.g. `αυτές τις δύο παρενθέσεις`. Never the generic `αγκύλες`, which is `[]`. |

### Loops, state & program flow

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| keyword | λέξη-κλειδί | el | Not `δεσμευμένη λέξη`. |
| interpreter | διερμηνευτής | el | A **person** who interprets, which is what the term means here (Jiki is the interpreter, and it is "his job to interpret"). Never `διερμηνευτικό πρόγραμμα` or any `-πρόγραμμα`/device compound: those name a tool, so they cannot name Jiki. |
| instruction (given to Jiki) | εντολή | el | The everyday Greek word for something you tell someone to do; the same word as `statement (executable)` above. |
| (programming) language | γλώσσα προγραμματισμού | el | Shorten to bare `γλώσσα` once context is established, including in the "a language a computer understands" framing. Never the English "language". |
| code block | μπλοκ κώδικα | el | |
| exception | εξαίρεση | el | Keep distinct from `σφάλμα` (error), the general term. |
| iteration | επανάληψη | el | Same word covers "loop" as a general concept; context disambiguates. |
| loop | βρόχος | el | The general "repetition" concept is `επανάληψη`; keep `βρόχος` for the loop construct itself. |
| for loop | `for` βρόχος | el | Keep `for` in backticks (real keyword) + `βρόχος`. |
| while loop | `while` βρόχος | el | As above. |
| class | κλάση | el | Not the older, more generic `τάξη`. |

### Platform & curriculum

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| course | μάθημα | el | The whole Jiki course (e.g. "σε αυτό το μάθημα"). Not `σειρά μαθημάτων`. See `lesson` below for the collision this avoids. |
| lesson | ενότητα | el | One lesson inside the course. Not `μάθημα`, which is `course` above. |

### Tooling & engineering

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| CLI (the concept) | γραμμή εντολών | el | Where the source `<define>`s it, explain the concept, not just gloss the term. `τερματικό` (terminal) is the common colloquial synonym once the concept is established. |

## Keep in English

These stay in English in prose: the English word is what Greek developers actually say, so
it is the ordinary word here.

| Term | Greek gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| API | explain what it is in Greek (e.g. "Διεπαφή Προγραμματισμού Εφαρμογών") | Where defined, explain the concept, not just gloss the acronym. |
| framework | _πλαίσιο_ | |
| component | _συστατικό_ | |
| deploy (verb) | explain as "ανάπτυξη σε παραγωγικό περιβάλλον" | The verb inflects around the English word ("κάνω deploy"). Low confidence; revisit with native-speaker feedback. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Greek rendering | Notes |
|-------------------|------------------|-------|
| box (value container) | κουτί | |
| chain (array metaphor) | αλυσίδα | |
| machine (function metaphor) | μηχανή | |
| input slot | θυρίδα | Not the more generic/technical `υποδοχή`. |
| return chute | τσουλήθρα | |
| shelves (storage) | ράφια | |
| warehouse (Jiki's warehouse) | αποθήκη | Where Jiki hangs out and keeps his machine shelf. |
| crank (machine crank) | μανιβέλα | Not the technical `στρόφαλο`. Jiki `γυρίζει τη μανιβέλα`. |
| board / whiteboard | ασπροπίνακας | **One word for one object**: both the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on. **Never bare `πίνακας`**, which is the agreed term for `array` and would collide with it, so the qualified `ασπροπίνακας` is compulsory here. Do not alternate with `λευκός πίνακας`. |

## Brackets

| Glyph | Greek | Notes |
|-------|-------|-------|
| `()` | παρένθεση | Plural `παρενθέσεις`; see `brackets (the two after a function name)` above. |
| `[]` | αγκύλη | |
| `{}` | άγκιστρο | |
| `<>` | γωνιακή αγκύλη | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, per the standing rule in `global/translating.md` step 6 that a
glossary only earns a row where a real choice exists. 34 rows removed: `value`, `number`,
`Boolean`, `character`, `integer`, `float / decimal`, `dictionary`, `element`,
`key-value pair`, `condition`, `comparison`, `expression`, `operator`,
`to call (a function)`, `to define (a function)`, `input (to a function)`, `output`,
`to return (a value)`, `mental model`, `variable`, `assignment`, `to assign`, `error`,
`nested`, `to run / execute (code)`, `loop body`, `scope`, `method`, `property`, `object`,
`exercise`, `workflow`, `module`, `algorithm`. Each had either an empty Notes cell or one
that only glossed the ordinary dictionary word; anything documenting a rejected
alternative, a collision, a register distinction, or a native-speaker/owner decision
(e.g. `interpreter`, `board / whiteboard`, `if statement`, `class`, `index`, `keyword`)
was left in place. A reviewer checking this pass might most want to query `Boolean` and
`module`: both had a rationale note in this log explaining the choice, but the main
glossary row itself carried no decision (no rejected alternative, no collision), so they
were cut along with the rest.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Greek:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. **Greek did not change:** it
  already rendered both as `ασπροπίνακας`, precisely because bare `πίνακας` is the agreed
  word for `array` and a qualifier was already needed to avoid that collision. What changed
  is that the row now records the reason instead of just the choice.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Greek did not change:**
  `διερμηνευτής` was already right, because it is first of all the human interpreter of
  speech, and only secondarily anything else. What changed is that the row now rules out
  `διερμηνευτικό πρόγραμμα` and any other `-πρόγραμμα`/device compound, which name a tool
  and so cannot name Jiki.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Greek glossary filled out for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added**, filling gaps the concept-page pass hit: `instruction (given to Jiki)`,
`mental model`, `(programming) language`, `brackets (the two after a function name)`,
`input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
`board / whiteboard`.

**The `course` / `lesson` collision was resolved by giving `lesson` `ενότητα`.** `μάθημα`
is the ordinary Greek word for a course and the natural choice, being short enough for a
term that recurs on every page, but it is also the everyday word for a single lesson.
Giving `lesson` `ενότητα` instead keeps `μάθημα` free for `course` so the two never
collide.

**Two corrections**, both flagged here rather than left silent:

- `code block` moved from `ενότητα κώδικα` to `μπλοκ κώδικα`, which is what Greek developer
  writing actually says, and also clears a second, unrelated use of `ενότητα` now that the
  word is reserved for `lesson` above.
- `if statement` moved from `δομή επιλογής` to `εντολή` `if` (keeping the real keyword in
  backticks), matching the `for` βρόχος / `while` βρόχος pattern already used for loops.
  `δομή επιλογής` ("selection structure") is the school-curriculum term, and reads as
  textbook register rather than what a beginner reader says.

### 2026-07-30: Open question: `index` and `position` will collide

**Raised by:** agent, in the same pass. Not a decision: nothing has been agreed, and no
Greek rendering for `position` exists yet.

`index` is `θέση`, which literally means "position". `position (in a string/array)` is not
yet a glossary term, but the concept-page pass is working through the curriculum page by
page, and Greek has no other candidate rendering for "position" waiting in reserve. Once a
page introduces `position` as its own term, `θέση` will already be taken by `index` and the
two will read as the same word. Left for a human to resolve when that page comes up, rather
than guessed at now.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `code block`,
`if statement`, `course`, `lesson`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| developer | Standard Greek equivalent. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary Greek words. |
| string | `αλφαριθμητικό` implies "alphanumeric" and is less accurate for the general concept, so `συμβολοσειρά` is preferred. |
| Boolean | Literally "logical value"; well established and unambiguous, with no English-loanword tension for this term in Greek. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Greek words, so they stand alone. |
| statement (executable) / instruction (given to Jiki) | Greek has one ordinary word for both, and splitting them would invent a distinction the reader does not have. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | `λέξη-κλειδί` was chosen over the more technical `δεσμευμένη λέξη` for the friendlier beginner tone; both terms exist in real usage. |
| mental model | The standard Greek rendering, and ordinary enough to read naturally in prose. |
| loop | `βρόχος` is reinforced by the `ΓΛΩΣΣΑ` pseudocode taught in Greek schools. |
| class | `κλάση` is dominant in OOP-specific teaching over the older, more generic `τάξη`. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| module | Well-established specifically for Python modules in Greek teaching material. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| framework | Greek developer speech says "framework". |
| component | React-era Greek developer speech says "component". |
| deploy (verb) | No established native beginner-level term exists; real Greek developers say "κάνω deploy". |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Greek word for "box"; direct and concrete. |
| chain | Ordinary physical chain (bike chain, jewellery chain); the specialist `αλυσίδωση` (hash-table chaining) is obscure enough at university level not to meaningfully collide for beginners. |
| input slot | The everyday word for a small physical opening you post/insert something into (post-office box slot, coin slot). |
| return chute | The everyday word for a playground slide; gives the same "slides down and pops out the bottom" physical image as the input slot. |
| shelves | Direct match, ordinary household word. |
| warehouse | Ordinary word for a storage building. |
| crank | The everyday word for a hand crank you turn (car crank, well crank). |
