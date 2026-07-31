---
lang: "ur"
name: "Urdu"
family: null
stage: "setup"
governance_sha: "91b6986"
content_version: "93d59d65729a"
published_at: "2026-07-31"
term_count: 93
forum_topic_id: 476
---

# Urdu (ur) glossary

The agreed term list for Urdu. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| programming / coding | پروگرامنگ | ur | |
| developer | پروگرامر | ur | |
| tech / tech industry | ٹیکنالوجی کی صنعت | ur | |
| streak | لگاتار دن | ur | Low confidence; flag for native-speaker review. |
| pitfall | عام غلطی | ur | Low confidence; flag for native-speaker review. |

## Localize (use the Urdu term)

These are terms where the Urdu form is used in prose, either a settled transliteration of the English loanword or a native Urdu word, so the "Use (ur/en)" column is `ur` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| value | قدر | ur | |
| number | عدد | ur | |
| true / false | صحیح / غلط | ur | |
| character | حرف | ur | |
| integer | عدد صحیح | ur | |
| float / decimal | اعشاریہ | ur | |
| string | سٹرنگ | ur | |
| Boolean | بولین | ur | |
| array / list | زنجیر | ur | Renders via the Jiki chain metaphor; see Jiki physical metaphors below. Use consistently for both "array" and informal "list" per `global/terms.md`. |
| dictionary | لغت | ur | No gloss is needed; the metaphor (word-definition pairs) carries over directly. |
| element | عنصر | ur | Array element = "زنجیر کا عنصر". |
| index | اشاریہ | ur | |
| key-value pair | کلید اور قدر کا جوڑا | ur | |
| data type | ڈیٹا ٹائپ | ur | |

### Functions & control flow

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| if statement | شرطیہ بیان | ur | The keyword `if` itself always stays English in code; this is the prose concept. |
| condition | شرط | ur | Stands alone. |
| comparison | موازنہ | ur | Stands alone. |
| expression | اظہاریہ | ur | |
| operator | عامل | ur | |
| statement (executable) | بیان | ur | The imperative sense: a line of code that does something. Keep distinct from the logical-claim sense below by context. |
| statement (logical claim) | دعویٰ | ur | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | فنکشن | ur | Where the source `<define>`s it, gloss it in the guide § "Term clarification" format, فنکشن (_function_); a term being a settled loanword never suppresses a `<define>` gloss. The keyword `function` in code stays English. |
| to call (a function) | کال کرنا | ur | "فنکشن کال کرنا." |
| brackets (the two after a function name) | قوسین | ur | The round brackets `()` written after a function name. "قوسین" is a dual form and already means the pair, so it needs no counting word; where the kind must be distinguished, "گول قوسین" (round) versus "مربع قوسین" (square). See guide § "Brackets" for the phrasing rule. |
| to define (a function) | تعریف کرنا | ur | |
| parameter | پیرامیٹر | ur | Kept distinct from "argument" below (a real collision risk; keep them separate consistently). |
| argument | آرگیومنٹ | ur | The call-site value, kept distinct from "پیرامیٹر" above. |
| input (to a function) | ان پٹ | ur | |
| output | آؤٹ پٹ | ur | Paired with "ان پٹ" above. |
| to return (a value) | واپس کرنا | ur | "قدر واپس کرنا" (to return a value). |
| return value | واپسی کی قدر | ur | Noun form, distinct from the verb above. |

### Loops, state & program flow

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| keyword | کلیدی لفظ | ur | |
| interpreter | مترجم | ur | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter, so the word has to be able to name a character. Never "انٹرپریٹر" (reads as software) or "ترجمان" (means "spokesperson" in modern Pakistani Urdu). |
| instruction (given to Jiki) | ہدایت | ur | Plural "ہدایات", the everyday word used for instructions on a product or in a classroom, not a legal/formal-register word. "Jiki کو ہدایات دینا" (to give Jiki instructions). |
| mental model | ذہنی ماڈل | ur | |
| (programming) language | زبان | ur | Used for both the "language a computer understands" framing and, with "پروگرامنگ", the programmer's language: "پروگرامنگ کی زبانیں". Do not mix in a transliterated "لینگویج" anywhere. |
| variable | متغیر | ur | |
| assignment | تفویض | ur | |
| to assign | تفویض کرنا | ur | |
| code block | کوڈ بلاک | ur | |
| error | غلطی | ur | |
| nested | تہہ در تہہ | ur | e.g. "تہہ در تہہ لوپ" = nested loop. |
| iteration | تکرار | ur | |
| to run / execute (code) | چلانا | ur | |
| loop | لوپ | ur | |
| for loop | `for` لوپ | ur | Keep `for` in code font (real keyword) + transliterated "لوپ". |
| while loop | `while` لوپ | ur | As above, with `while`. |
| loop body | لوپ کا اندرونی حصہ | ur | |
| scope | دائرہ کار | ur | Keep distinct from "کوڈ بلاک" (code block) above, matching the distinction in `global/terms.md`. |
| class | کلاس | ur | |
| method | میتھڈ | ur | Kept distinct from the generic Urdu word for "way/method" to avoid ambiguity in technical prose. |
| property | خاصیت | ur | Keep distinct from "خصوصیت" (feature, platform sense) below; these are related but different words. |
| object | آبجیکٹ | ur | |

### Tooling & engineering

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| deploy | ڈیپلائے کرنا | ur | |
| module | ماڈیول | ur | |
| algorithm | الگورتھم | ur | |
| framework | فریم ورک | ur | Transliterated into Nastaliq rather than kept Latin-script: only the terms in the "Keep in English" list below stay in Latin script. |
| CLI (the concept) | کمانڈ لائن | ur | |
| component | کمپوننٹ | ur | |

## Keep in English (Latin script)

These stay in Latin script inside Urdu prose: acronyms pronounced as letters, and product/brand/language names.

| Term | Notes |
|------|-------|
| API | Where the source defines it, explain the concept in Urdu ("دو پروگراموں کے آپس میں بات چیت کرنے کا ایک طریقہ"), not just the acronym. |
| CPU, RAM, USB, HTML, CSS, JSON | |
| JavaScript, Python, React | Product/language names, never translated or transliterated, per `global/terms.md`. |
| Debug, Test, Code, Bug, Frontend, Backend | Kept as technical tokens, per `global/terms.md`. |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English/Latin script, including inside prose. Translate only the surrounding explanation. |
| Jiki (character/brand name) | Kept in Latin script; see guide § "Jiki-name handling" for attaching Urdu postpositions. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Urdu rendering | Notes |
|-------------------|-----------------|-------|
| box (value container) | ڈبہ | |
| chain (array metaphor) | زنجیر | |
| machine (function metaphor) | مشین | |
| input slot | ان پٹ سلاٹ | |
| return chute | واپسی کی نالی | |
| shelves (storage) | الماری | |
| warehouse (Jiki's warehouse) | گودام | |
| crank (machine crank) | ہینڈل | The handle Jiki turns to power a machine up. To crank it is "ہینڈل گھمانا" (to turn the handle). |
| board / whiteboard | وائٹ بورڈ | **One object, one word.** The board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same metaphor and take the same word everywhere. No collision with "زنجیر" (array). |

## Platform & curriculum vocabulary

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| lesson | سبق | ur | |
| exercise | مشق | ur | |
| curriculum | نصاب | ur | |
| course | کورس | ur | The whole Jiki course ("اس کورس میں"). Kept distinct from "سبق" (lesson) and "نصاب" (curriculum). |
| level | درجہ | ur | |
| milestone | سنگ میل | ur | |
| track / pathway | راستہ | ur | |
| mentor / mentoring | رہنما | ur | |
| tutorial | ٹیوٹوریل | ur | Kept distinct from "سبق" (lesson) to avoid collision. |
| solution (learner's submission) | حل | ur | |
| scenario | منظرنامہ | ur | Jiki's specific technical sense is a structured variant within an exercise. |
| canvas (graphics exercises) | کینوس | ur | Covers the graphics-exercise drawing surface. |

## Open / low-confidence terms for native-speaker review

Not written into the tables above; flag these via `/action-forum-post` once real native-speaker feedback is available, per `global/rules.md` § "When unsure."

- **streak, pitfall**: descriptive phrases proposed above, not settled single words; genuinely uncertain.
- **foot-gun**: no clean Urdu equivalent found; a descriptive phrase like "خود کو نقصان پہنچانے والی خصوصیت" (a feature that harms yourself) would work but hasn't been verified against any real source. Use a descriptive phrase case by case rather than forcing a fixed term, per `global/terms.md`'s own guidance on this entry.
- **syllabus, bootcamp**: not yet decided; both would need transliteration ("سلیبس", "بوٹ کیمپ") kept distinct from "نصاب" (curriculum) and would need a concept explanation where the source defines them, but neither has appeared in real content yet to confirm against.
- **workflow, auth, tool/tooling, feature (platform), API-adjacent framework/component terms not listed above, edge case, backwards compatibility, encapsulation, pure function, template literal, exception**: not yet researched to the same confidence level as the terms above; decide on first real occurrence in a translation pass and propose via the normal glossary-delta process rather than guessing now.

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Urdu:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have. Urdu
  renders both as **وائٹ بورڈ**, not the page's bare "بورڈ": bare "بورڈ" in Pakistan reads
  first as an examination or education board, so it would mislead rather than clarify.
  "وائٹ بورڈ" is what a writing board in a room is actually called, and it has no collision
  with "زنجیر" (array).
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Urdu's previous rendering,
  the transliteration "انٹرپریٹر", reads as software and is opaque to a beginner, so it
  could not do that job. It moves to **مترجم**, the ordinary Urdu agent noun for "one who
  translates/interprets", which matches the verb the page already uses for the job,
  "ترجمہ کرنا" (to interpret). "مترجم" also means a translator of human languages; that
  overlap is accepted because it is exactly the metaphor the page teaches. "ترجمان" was
  considered and rejected: in modern Pakistani Urdu it means "spokesperson", not
  "interpreter".
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Urdu glossary drafted for the concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

The rows added for the using-functions concept page (the metaphor terms, `mental model`,
`instruction (given to Jiki)`, `(programming) language`, and the rest of the "Functions &
control flow" and "Loops, state & program flow" tables) are draft renderings, not yet
reviewed by a native speaker.

**One contradiction fixed.** The `function` row said the term needed no gloss because it is
a settled transliteration, while the guide's own worked example under "Term clarification"
showed it glossed: فنکشن (_function_). Resolved in favour of the guide: glossing is
triggered by a `<define>` in the source, never by how settled a transliteration is, so a
settled loanword never suppresses a `<define>` gloss. The `function` row now says so.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because none of it dates from a
specific decision anyone made on a day; it is the agent's own drafting rationale from the
language bootstrap. A term whose reasoning is already covered by a dated entry above
(`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Transliterated loanword; this is how real Urdu tutorial/explainer content writes it, not a native coinage. |
| developer | Transliterated "programmer"; more transparent to a beginner than "ڈویلپر" (developer). |
| tech / tech industry | "ٹیکنالوجی" (technology, established loanword) + "صنعت" (industry, native word). |
| streak | Descriptive phrase ("consecutive days"); no single settled Urdu word found for the learning-platform streak concept. |
| pitfall | Descriptive phrase ("common mistake"); Urdu has no single settled word matching the English "pitfall" idiom. |

#### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary, well-established Urdu word. |
| number | The classical Urdu word for "number," standard in school maths. |
| true / false | Ordinary Urdu words for "correct" / "incorrect"; natural fit for the Boolean literals in prose. |
| character | Ordinary Urdu word for a single letter/character. |
| integer | Literally "whole number"; standard school-maths term. |
| float / decimal | Standard Urdu word for "decimal," used in school maths for decimal numbers. |
| string, Boolean | Transliterated loanwords. |
| dictionary | The actual Urdu word for "dictionary." The metaphor (word-definition pairs) carries over directly. |
| element | Standard word for "element" in a collection. |
| index | The standard Urdu word for a book's index; extends naturally to a collection index. |
| key-value pair | "کلید" (key) + "قدر" (value) + "جوڑا" (pair). |
| data type | Transliterated; no settled single native word covers the general concept distinctly from a specific type name. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | "Conditional statement." |
| condition, comparison | Ordinary Urdu words, so they stand alone. |
| expression | Standard Urdu maths term (e.g. "الجبری اظہاریہ" = algebraic expression). |
| operator | Standard Urdu maths term (e.g. "حسابی عامل" = arithmetic operator). |
| statement (executable) | Ordinary word for the imperative sense. |
| statement (logical claim) | The proposition sense, same pattern as the Hungarian precedent for this distinction. |
| function | Settled transliterated loanword. |
| to call (a function) | Transliterated light verb; standard in Pakistani CS teaching. |
| to define (a function) | Light verb: "تعریف" (definition, native word) + "کرنا" (to do). |
| parameter, argument | Transliterated loanwords. |
| input, output | Transliterated loanwords. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | Literally "key word"; native compound. |
| mental model | "ذہنی" (mental, native) + "ماڈل" (established loanword); the everyday way this is said in Urdu explanatory writing, where a fully native coinage would read academic. |
| (programming) language | The ordinary Urdu word for a language. |
| variable | The standard term taught in Pakistani computer-science curricula, not just a Wikipedia-only coinage. |
| assignment | Native word meaning "assignment/delegation," used for the concept of giving a variable its value. |
| to assign | Light verb built from the noun above. |
| code block | "کوڈ" (code, never translated) + "بلاک" (transliterated "block"); self-explanatory once both halves are known. |
| error | Ordinary Urdu word for "mistake/error." Matches Jiki's non-blaming tone well. |
| nested | Native descriptive phrase, "layer within layer." |
| iteration | Native word meaning "repetition." |
| to run / execute (code) | Ordinary Urdu verb, "to run/operate." |
| loop, class, object | Transliterated loanwords, standard in Pakistani CS teaching. |
| loop body | "The loop's inner part," descriptive. |
| scope | Native compound meaning "scope of work/jurisdiction," well established in formal Urdu. |
| method | Transliterated loanword. |
| property | Native word meaning "property/attribute/characteristic," well established. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Transliterated light verb; no settled native equivalent found in South Asian tech usage generally. |
| module, component | Transliterated loanwords. |
| algorithm | Transliterated loanword; universal across languages, no native Urdu equivalent in real use. |
| CLI (the concept) | "Command line," partially transliterated. |

#### Keep in English

| Term | Why |
|------|-----|
| CPU, RAM, USB, HTML, CSS, JSON | Standard practice in Urdu print and digital media to keep these acronyms in Latin script even mid-sentence. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, everyday Urdu word for "box"; direct and concrete. |
| chain | Standard Urdu word for a physical chain. |
| machine | Established loanword, now an ordinary Urdu word for "machine," not a fresh coinage. |
| input slot | "ان پٹ" (input) + transliterated "سلاٹ" (slot). |
| return chute | "واپسی" (return) + "نالی" (a channel/chute/gutter), an apt everyday physical image for something sliding out. |
| shelves | Everyday Urdu word for a cupboard/shelving unit where things are kept; warmer and more concrete than a transliterated "شیلف." |
| warehouse | Ordinary, concrete Urdu word for a warehouse/store-room; the place Jiki hangs out and keeps his machine shelf. |
| crank | "ہینڈل گھمانا" is the everyday phrasing; "دستہ" is the more literary word and reads stiff here. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| lesson | Classic Urdu word for "lesson," used in schools. |
| exercise | Classic Urdu word for "practice/exercise," used in schools. |
| curriculum | Standard Urdu word for "curriculum," used in education. |
| course | The ordinary word Pakistani learners actually use for a course of study. |
| level | Ordinary Urdu word for "level/rank." |
| milestone | Literal, well-established Urdu idiom for "milestone" (a milestone marker on a road); a natural existing match, not a coinage. |
| track / pathway | Ordinary word for "path/way." |
| mentor / mentoring | Native word for "guide," warm and well established for this role. |
| tutorial | Transliterated. |
| solution (learner's submission) | Ordinary Urdu word for "solution/answer." |
| scenario | Native word for "scenario," well established in Urdu media and formal writing. |
| canvas (graphics exercises) | Already an established Urdu loanword for a painting canvas. |
