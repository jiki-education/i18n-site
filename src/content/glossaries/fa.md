---
lang: "fa"
name: "Persian"
family: null
governance_sha: "1d91ad4"
content_version: "109d6f0aaa4b"
published_at: "2026-07-30"
term_count: 42
forum_topic_id: 683
---

# Persian / Farsi (fa) glossary

The agreed term list for Persian. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet. This is a freshly bootstrapped language: only the
terms actually researched and agreed during `/bootstrap-language fa` are written in below.
Anything not covered yet will accrue through normal per-pass glossary deltas.

Writes here are **additive**: rows get appended, an `agent` row may be corrected (with the
old value reported), and a `human` row is never changed without a human agreeing. The
`Agreed by` column records who decided each row; see "The provenance column" in
`global/workflow.md`.

## Localize (use the Persian term)

These are terms where the Persian is used in prose, so the "Use (fa/en)" column is `fa`
throughout. Split by theme for readability; every table below follows the same columns.

### Core / brand voice terms

| English | Persian | Use (fa/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| programming / coding | برنامه‌نویسی | fa | The single ordinary Persian word for both; "coding" has no separate rendering. | agent |
| (programming) language | زبان برنامه‌نویسی | fa | Also the "a language a computer understands" framing: زبانی که کامپیوتر می‌فهمد. Use the native زبان throughout a page; never mix in the English word. | agent |

### Values & data types

| English | Persian | Use (fa/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| array | آرایه | fa | Standard Persian CS term; confirmed via Persian Wikipedia, Faradars, sariasan. | agent |
| index (array index) | اندیس | fa | Dominant generic CS term for an array index; confirmed via Persian Wikipedia, Faradars. | agent |
| string | رشته | fa | Already the comfortable, established primary Persian term (unlike some other Jiki languages that keep "string" in English); confirmed via general Persian CS usage. | agent |
| Boolean | بولی | fa | Already a fully nativized transliteration, written in Persian script and used unremarkably as the primary term (confirmed via Persian Wikipedia's "نوع داده بولی"); not treated as a foreign/English word needing italics. "مقدار منطقی" (logical value) is an acceptable descriptive alternative when introducing the concept, but بولی is the term used consistently afterward. | agent |
| data type | نوع داده | fa | | agent |

### Functions & control flow

| English | Persian | Use (fa/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| function | تابع | fa | The *keyword* `function` in code stays English; the concept in prose is تابع. Plural توابع. Confirmed via Persian Wikipedia, Quera, Faradars, tahlildadeh. | agent |
| if statement | دستور شرطی | fa | Confirmed via Faradars, fa.wikibooks. | agent |
| condition | شرط | fa | Confirmed via Faradars, fa.wikibooks; "دستور شرطی" (if statement) and "شرط" (condition) are distinct, related terms, do not conflate them. | agent |
| brackets (the two after a function name) | پرانتز | fa | The round-bracket pair written after a function name: "دو پرانتز" (two brackets), "پرانتزها" (the brackets). Persian distinguishes bracket kinds, so پرانتز (round) is the required word here; never کروشه (square) or آکولاد (curly). | agent |

### Loops, state & program flow

| English | Persian | Use (fa/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| variable | متغیر | fa | Confirmed via Persian Wikipedia, Quera, Faradars. | agent |
| loop | حلقه | fa | Confirmed via Persian Wikipedia, Quera, Faradars. **Never use this word for an individual link of the "chain" array metaphor** (see the metaphors table below); the two would collide. | agent |
| nested | تو در تو | fa | e.g. "حلقه‌ی تو در تو" = nested loop. Confirmed via Faradars ("if-elseهای تو در تو" for nested if-else). | agent |
| interpreter | مفسر | fa | **A person doing a job, not a program**: in the course Jiki *is* the interpreter ("کار او این است که کد را تفسیر کند"). مفسر is an agent noun (the one who interprets/expounds) and is used of people first, so it fits Jiki; it carries no device or program morpheme. Never use مفسر with a program word attached (برنامه‌ی مفسر) or a machine-suffixed coinage. The verb is تفسیر کردن. | agent |
| instruction (given to Jiki) | دستور | fa | Everyday Persian for an instruction/command that someone is told to carry out; plural دستورها. Not a formal/legal register word (never دستورالعمل, which reads as an official manual). Note the deliberate overlap with دستور شرطی (if statement): دستور is the ordinary word in both and that is fine. | agent |
| error | خطا | fa | The standard Persian CS term; ordinary enough that a beginner reads it without help. | agent |
| mental model | مدل ذهنی | fa | The picture-in-your-head framing ("یک آدم کوچک داخل کامپیوتر زندگی می‌کند"). The ordinary Persian phrase, used as-is in Persian writing about learning. | agent |

### Platform & curriculum vocabulary

| English | Persian | Use (fa/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| course | دوره | fa | The whole Jiki course ("در این دوره"). Keep distinct from درس (lesson) and برنامه‌ی درسی (curriculum). | agent |
| exercise | تمرین | fa | One exercise the learner solves; plural تمرین‌ها. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Persian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Persian gloss (on `<define>`) | Notes | Agreed by |
|------|-------------------------------|-------|-----------|
| API | رابط برنامه‌نویسی کاربردی | Not a word a beginner knows; where defined, explain the concept in Persian, not just gloss the acronym. | agent |
| CLI (the concept) | رابط خط فرمان | Explain as "command-line interface" where the source defines it. | agent |
| AI | هوش مصنوعی | Owner precedent, following the Hungarian decision: use "AI" (English) in prose/marketing, not هوش مصنوعی throughout. Gloss once on first use per the glossary. Flag for confirmation once real content surfaces whether this matches how Iranian users actually talk about AI features. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language. These are original Jiki coinages with no prior Persian precedent to
verify against (the same position Hungarian's bootstrap was in); confirm each on first
real use in a translated file and flag anything that reads awkwardly for native-speaker
review.

| English metaphor | Persian rendering | Notes | Agreed by |
|-------------------|--------------------|-------|-----------|
| chain (array metaphor) | زنجیر | Ordinary, concrete Persian word for a physical chain (bicycle chain, door chain, keychain); safe and unqualified for this metaphor. **Never use حلقه (loop) for an individual link of the chain**, that word is reserved for the loop concept above. If a page ever needs to name one link, use **دانه** (bead) or **قطعه** (segment) instead. | agent |
| box (value container) | جعبه | Plain Persian word for "box"; direct and concrete. | agent |
| input slot | دهانه ورودی | ورودی (input, agreed CS term above) + دهانه (an opening/mouth). | agent |
| return chute | سرسره خروجی | خروجی (output) + سرسره (a playground slide), the same warm, concrete move as Hungarian's "kimeneti csúszda". | agent |
| machine (function metaphor) | دستگاه | Reads as "apparatus/mechanism", a good fit for a box-with-crank; ماشین was considered but reads more like a car/vehicle generically. | agent |
| crank (machine crank) | دسته | The handle Jiki pulls to turn a machine on: "دسته‌اش را بچرخاند" (crank the handle). | agent |
| coin (number metaphor) | سکه | Numbers are coins dropped into a machine's input slot. | agent |
| shelves (storage) | قفسه | Where variables and functions are stored. | agent |
| warehouse (Jiki's warehouse) | انبار | Where Jiki hangs out and keeps his machine shelf. | agent |
| workshop (Jiki's workshop) | کارگاه | The room where Jiki works; the shelves live in it. | agent |
| board / whiteboard | تخته | **One object, one word.** The same board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. تخته is the ordinary Persian word for a board you write on in a room (the classroom board: «پای تخته»), needs no qualifier, and does not collide with آرایه (array). Never split this into two words, and never use تابلو (which reads as a painting, plaque, or road sign, not a board you write instructions on) or تخته سفید. | agent |
| spiral notebook page (dictionary metaphor) | دفترچه فنری | A real, recognizable Iranian school item: a spiral-bound notebook, keys down the left, values on the right. | agent |
| piece of paper (string metaphor) | برگه | Strings are pieces of paper Jiki writes text on. | agent |
| mini-Jiki | جیکی کوچولو | "Little Jiki"; کوچولو is the standard warm Persian diminutive for small/cute characters, a good register fit for the small Jiki who works inside a function machine. | agent |

## Terminology

All term choices above are agreed and binding. Apply them exactly. Anything not yet
covered here follows the policy in `guide.md` (native Persian primary for core CS
vocabulary, glossed once per file) and surfaces as a proposed delta the next time a pass
needs it.
