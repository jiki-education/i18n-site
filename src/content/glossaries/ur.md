---
lang: "ur"
name: "Urdu"
family: null
governance_sha: "1d91ad4"
content_version: "22eb7028ab20"
published_at: "2026-07-30"
term_count: 93
forum_topic_id: 476
---

# Urdu (ur) glossary

The agreed term list for Urdu. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes here are additive, and the `Agreed by` column records who decided each row; see `global/workflow.md` § "Glossary writes are additive" for what a pass may and may not change.

## Core decisions

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| programming / coding | پروگرامنگ | ur | Transliterated loanword; this is how real Urdu tutorial/explainer content writes it, not a native coinage. | agent |
| developer | پروگرامر | ur | Transliterated "programmer"; more transparent to a beginner than "ڈویلپر" (developer). | agent |
| tech / tech industry | ٹیکنالوجی کی صنعت | ur | "ٹیکنالوجی" (technology, established loanword) + "صنعت" (industry, native word). | agent |
| streak | لگاتار دن | ur | Descriptive phrase ("consecutive days"); no single settled Urdu word found for the learning-platform streak concept. Low confidence, flag for native-speaker review. | agent |
| pitfall | عام غلطی | ur | Descriptive phrase ("common mistake"); Urdu has no single settled word matching the English "pitfall" idiom. Low confidence, flag for native-speaker review. | agent |

## Localize (use the Urdu term)

These are terms where the Urdu form is used in prose, either a settled transliteration of the English loanword or a native Urdu word, so the "Use (ur/en)" column is `ur` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| value | قدر | ur | Ordinary, well-established Urdu word for "value." | agent |
| number | عدد | ur | The classical Urdu word for "number," standard in school maths. | agent |
| true / false | صحیح / غلط | ur | Ordinary Urdu words for "correct" / "incorrect"; natural fit for the Boolean literals in prose. | agent |
| character | حرف | ur | Ordinary Urdu word for a single letter/character. | agent |
| integer | عدد صحیح | ur | Literally "whole number"; standard school-maths term. | agent |
| float / decimal | اعشاریہ | ur | Standard Urdu word for "decimal," used in school maths for decimal numbers. | agent |
| string | سٹرنگ | ur | Transliterated loanword. | agent |
| Boolean | بولین | ur | Transliterated loanword. | agent |
| array / list | زنجیر | ur | Renders via the Jiki chain metaphor; see Jiki physical metaphors below. Use consistently for both "array" and informal "list" per `global/terms.md`. | agent |
| dictionary | لغت | ur | The actual Urdu word for "dictionary." The metaphor (word-definition pairs) carries over directly, so no gloss is needed. | agent |
| element | عنصر | ur | Standard word for "element" in a collection. Array element = "زنجیر کا عنصر". | agent |
| index | اشاریہ | ur | The standard Urdu word for a book's index; extends naturally to a collection index. | agent |
| key-value pair | کلید اور قدر کا جوڑا | ur | "کلید" (key) + "قدر" (value, agreed above) + "جوڑا" (pair). | agent |
| data type | ڈیٹا ٹائپ | ur | Transliterated; no settled single native word covers the general concept distinctly from a specific type name. | agent |

### Functions & control flow

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| if statement | شرطیہ بیان | ur | "Conditional statement." The keyword `if` itself always stays English in code; this is the prose concept. | agent |
| condition | شرط | ur | Ordinary Urdu word; stands alone. | agent |
| comparison | موازنہ | ur | Ordinary Urdu word; stands alone. | agent |
| expression | اظہاریہ | ur | Standard Urdu maths term for "expression" (e.g. "الجبری اظہاریہ" = algebraic expression). | agent |
| operator | عامل | ur | Standard Urdu maths term for "operator" (e.g. "حسابی عامل" = arithmetic operator). | agent |
| statement (executable) | بیان | ur | The imperative sense: a line of code that does something. Ordinary word; keep distinct from the logical-claim sense below by context. | agent |
| statement (logical claim) | دعویٰ | ur | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word, same as the Hungarian precedent. | agent |
| function | فنکشن | ur | Settled transliterated loanword. Where the source `<define>`s it, gloss it in the guide § "Term clarification" format, فنکشن (_function_); a term being a settled loanword never suppresses a `<define>` gloss. The keyword `function` in code stays English. | agent |
| to call (a function) | کال کرنا | ur | "فنکشن کال کرنا." Transliterated light verb; standard in Pakistani CS teaching. | agent |
| brackets (the two after a function name) | قوسین | ur | The round brackets `()` written after a function name. "قوسین" is a dual form and already means the pair, so it needs no counting word; where the kind must be distinguished, "گول قوسین" (round) versus "مربع قوسین" (square). See guide § "Brackets" for the phrasing rule. | agent |
| to define (a function) | تعریف کرنا | ur | Light verb: "تعریف" (definition, native word) + "کرنا" (to do). | agent |
| parameter | پیرامیٹر | ur | Transliterated loanword, kept distinct from "argument" below (a real collision risk; keep them separate consistently). | agent |
| argument | آرگیومنٹ | ur | Transliterated loanword, the call-site value, kept distinct from "پیرامیٹر" above. | agent |
| input (to a function) | ان پٹ | ur | Transliterated loanword. | agent |
| output | آؤٹ پٹ | ur | Transliterated loanword, paired with "ان پٹ" above. | agent |
| to return (a value) | واپس کرنا | ur | Light verb: "قدر واپس کرنا" (to return a value). | agent |
| return value | واپسی کی قدر | ur | Noun form, distinct from the verb above. | agent |

### Loops, state & program flow

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| keyword | کلیدی لفظ | ur | Literally "key word"; native compound. | agent |
| interpreter | مترجم | ur | **A person doing a job, not a program**: on concept pages Jiki *is* the interpreter, so the word has to describe a person. "مترجم" is the ordinary Urdu agent noun "one who translates/interprets", and it matches the verb already used for the job, "ترجمہ کرنا" (to interpret). Corrected from the transliteration "انٹرپریٹر", which reads as a piece of software and is opaque to a beginner. It also means a translator of human languages; that overlap is acceptable here because it is exactly the metaphor the page teaches. | agent |
| instruction (given to Jiki) | ہدایت | ur | Plural "ہدایات", the everyday word used for instructions on a product or in a classroom, not a legal/formal-register word. "Jiki کو ہدایات دینا" (to give Jiki instructions). | agent |
| mental model | ذہنی ماڈل | ur | "ذہنی" (mental, native) + "ماڈل" (established loanword). The everyday way this is said in Urdu explanatory writing; a fully native coinage would read academic. | agent |
| (programming) language | زبان | ur | The ordinary Urdu word for a language, used for both the "language a computer understands" framing and, with "پروگرامنگ", the programmer's language: "پروگرامنگ کی زبانیں". Do not mix in a transliterated "لینگویج" anywhere. | agent |
| variable | متغیر | ur | The standard term taught in Pakistani computer-science curricula, not just a Wikipedia-only coinage. | agent |
| assignment | تفویض | ur | Native word meaning "assignment/delegation," used for the concept of giving a variable its value. | agent |
| to assign | تفویض کرنا | ur | Light verb built from the noun above. | agent |
| code block | کوڈ بلاک | ur | "کوڈ" (code, never translated) + "بلاک" (transliterated "block"). Self-explanatory once both halves are known. | agent |
| error | غلطی | ur | Ordinary Urdu word for "mistake/error." Matches Jiki's non-blaming tone well. | agent |
| nested | تہہ در تہہ | ur | Native descriptive phrase, "layer within layer." e.g. "تہہ در تہہ لوپ" = nested loop. | agent |
| iteration | تکرار | ur | Native word meaning "repetition." | agent |
| to run / execute (code) | چلانا | ur | Ordinary Urdu verb, "to run/operate." | agent |
| loop | لوپ | ur | Transliterated loanword, standard in Pakistani CS teaching. | agent |
| for loop | `for` لوپ | ur | Keep `for` in code font (real keyword) + transliterated "لوپ". | agent |
| while loop | `while` لوپ | ur | As above, with `while`. | agent |
| loop body | لوپ کا اندرونی حصہ | ur | "The loop's inner part," descriptive. | agent |
| scope | دائرہ کار | ur | Native compound meaning "scope of work/jurisdiction," well established in formal Urdu. Keep distinct from "کوڈ بلاک" (code block) above, matching the distinction in `global/terms.md`. | agent |
| class | کلاس | ur | Transliterated loanword, standard in Pakistani CS teaching. | agent |
| method | میتھڈ | ur | Transliterated loanword, kept distinct from the generic Urdu word for "way/method" to avoid ambiguity in technical prose. | agent |
| property | خاصیت | ur | Native word meaning "property/attribute/characteristic," well established. Keep distinct from "خصوصیت" (feature, platform sense) below; these are related but different words. | agent |
| object | آبجیکٹ | ur | Transliterated loanword, standard in Pakistani CS teaching. | agent |

### Tooling & engineering

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| deploy | ڈیپلائے کرنا | ur | Transliterated light verb; no settled native equivalent found in South Asian tech usage generally. | agent |
| module | ماڈیول | ur | Transliterated loanword. | agent |
| algorithm | الگورتھم | ur | Transliterated loanword; universal across languages, no native Urdu equivalent in real use. | agent |
| framework | فریم ورک | ur | Transliterated into Nastaliq rather than kept Latin-script: only the terms in the "Keep in English" list below stay in Latin script. | agent |
| CLI (the concept) | کمانڈ لائن | ur | "Command line," partially transliterated. | agent |
| component | کمپوننٹ | ur | Transliterated loanword. | agent |

## Keep in English (Latin script)

These stay in Latin script inside Urdu prose: acronyms pronounced as letters, and product/brand/language names. Where the source `<define>`s one of these terms, give the concept explanation in Urdu (per the format in `global/voice.md`); with no `<define>`, use the term bare in Latin script, with no gloss. For an acronym, explain the concept, not just the expanded letters.

| Term | Notes | Agreed by |
|------|-------|-----------|
| API | Where the source defines it, explain the concept in Urdu ("دو پروگراموں کے آپس میں بات چیت کرنے کا ایک طریقہ"), not just the acronym. | agent |
| CPU, RAM, USB, HTML, CSS, JSON | Standard practice in Urdu print and digital media to keep these acronyms in Latin script even mid-sentence. | agent |
| JavaScript, Python, React | Product/language names, never translated or transliterated, per `global/terms.md`. | agent |
| Debug, Test, Code, Bug, Frontend, Backend | Kept as technical tokens, per `global/terms.md`. | agent |
| Variable and function names | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English/Latin script, including inside prose. Translate only the surrounding explanation. | agent |
| Jiki (character/brand name) | Kept in Latin script; see guide § "Jiki-name handling" for attaching Urdu postpositions. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Urdu rendering | Notes | Agreed by |
|-------------------|-----------------|-------|-----------|
| box (value container) | ڈبہ | Plain, everyday Urdu word for "box"; direct and concrete. | agent |
| chain (array metaphor) | زنجیر | Standard Urdu word for a physical chain. | agent |
| machine (function metaphor) | مشین | Established loanword, now an ordinary Urdu word for "machine," not a fresh coinage. | agent |
| input slot | ان پٹ سلاٹ | "ان پٹ" (input, agreed above) + transliterated "سلاٹ" (slot). | agent |
| return chute | واپسی کی نالی | "واپسی" (return) + "نالی" (a channel/chute/gutter), an apt everyday physical image for something sliding out. | agent |
| shelves (storage) | الماری | Everyday Urdu word for a cupboard/shelving unit where things are kept; warmer and more concrete than a transliterated "شیلف." | agent |
| warehouse (Jiki's warehouse) | گودام | Ordinary, concrete Urdu word for a warehouse/store-room; the place Jiki hangs out and keeps his machine shelf. | agent |
| crank (machine crank) | ہینڈل | The handle Jiki turns to power a machine up. To crank it is "ہینڈل گھمانا" (to turn the handle), the everyday phrasing; "دستہ" is the more literary word and reads stiff here. | agent |
| board / whiteboard | وائٹ بورڈ | **One object, one word** (see `global/terms.md`): the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same metaphor and take the same word everywhere. Bare "بورڈ" is rejected because in Pakistan it reads first as an examination or education board; "وائٹ بورڈ" is what a writing board in a room is actually called and is unambiguous. No collision with "زنجیر" (array). | agent |

## Platform & curriculum vocabulary

| English | Urdu | Use (ur/en) | Notes | Agreed by |
|---------|------|----------|-------|-----------|
| lesson | سبق | ur | Classic Urdu word for "lesson," used in schools. | agent |
| exercise | مشق | ur | Classic Urdu word for "practice/exercise," used in schools. | agent |
| curriculum | نصاب | ur | Standard Urdu word for "curriculum," used in education. | agent |
| course | کورس | ur | The whole Jiki course ("اس کورس میں"). The ordinary word Pakistani learners actually use for a course of study; kept distinct from "سبق" (lesson) and "نصاب" (curriculum). | agent |
| level | درجہ | ur | Ordinary Urdu word for "level/rank." | agent |
| milestone | سنگ میل | ur | Literal, well-established Urdu idiom for "milestone" (a milestone marker on a road); a natural existing match, not a coinage. | agent |
| track / pathway | راستہ | ur | Ordinary word for "path/way." | agent |
| mentor / mentoring | رہنما | ur | Native word for "guide," warm and well established for this role. | agent |
| tutorial | ٹیوٹوریل | ur | Transliterated, kept distinct from "سبق" (lesson) to avoid collision. | agent |
| solution (learner's submission) | حل | ur | Ordinary Urdu word for "solution/answer." | agent |
| scenario | منظرنامہ | ur | Native word for "scenario," well established in Urdu media and formal writing; Jiki's specific technical sense is a structured variant within an exercise. | agent |
| canvas (graphics exercises) | کینوس | ur | Already an established Urdu loanword for a painting canvas; extends naturally to the graphics-exercise drawing surface. | agent |

## Open / low-confidence terms for native-speaker review

Not written into the tables above; flag these via `/action-forum-post` once real native-speaker feedback is available, per `global/rules.md` § "When unsure."

- **streak, pitfall**: descriptive phrases proposed above, not settled single words; genuinely uncertain.
- **foot-gun**: no clean Urdu equivalent found; a descriptive phrase like "خود کو نقصان پہنچانے والی خصوصیت" (a feature that harms yourself) would work but hasn't been verified against any real source. Use a descriptive phrase case by case rather than forcing a fixed term, per `global/terms.md`'s own guidance on this entry.
- **syllabus, bootcamp**: not yet decided; both would need transliteration ("سلیبس", "بوٹ کیمپ") kept distinct from "نصاب" (curriculum) and would need a concept explanation where the source defines them, but neither has appeared in real content yet to confirm against.
- **workflow, auth, tool/tooling, feature (platform), API-adjacent framework/component terms not listed above, edge case, backwards compatibility, encapsulation, pure function, template literal, exception**: not yet researched to the same confidence level as the terms above; decide on first real occurrence in a translation pass and propose via the normal glossary-delta process rather than guessing now.
