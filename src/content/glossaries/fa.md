---
lang: "fa"
name: "Persian"
family: null
stage: "setup"
governance_sha: "0f18507"
content_version: "aab9077860ac"
published_at: "2026-08-01"
term_count: 31
category_id: 331
forum_topic_id: 683
video_player_forum_topic_id: 753
---

# Persian / Farsi (fa) glossary

The agreed term list for Persian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Localize (use the Persian term)

These are terms where the Persian is used in prose, so the "Use (fa/en)" column is `fa`
throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| Boolean | بولی | fa | Not treated as a foreign/English word needing italics. «مقدار منطقی» (logical value) is an acceptable descriptive alternative when introducing the concept, but بولی is the term used consistently afterward. |

### Functions & control flow

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| function | تابع | fa | The *keyword* `function` in code stays English; the concept in prose is تابع. Plural توابع. |
| condition | شرط | fa | «دستور شرطی» (if statement) and «شرط» (condition) are distinct, related terms; do not conflate them. |
| brackets (the two after a function name) | پرانتز | fa | The round-bracket pair written after a function name: "دو پرانتز" (two brackets), "پرانتزها" (the brackets). Persian distinguishes bracket kinds, so پرانتز (round) is the required word here; never کروشه (square) or آکولاد (curly). |

### Loops, state & program flow

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| loop | حلقه | fa | **Never use this word for an individual link of the "chain" array metaphor** (see the metaphors table below); the two would collide. |
| interpreter | مفسر | fa | **A person doing a job, not a program**: in the course Jiki *is* the interpreter (کار او این است که کد را تفسیر کند). Never use مفسر with a program word attached (برنامه‌ی مفسر) or a machine-suffixed coinage. The verb is تفسیر کردن. |
| instruction (given to Jiki) | دستور | fa | Plural دستورها. Not a formal/legal register word (never دستورالعمل, which reads as an official manual). Note the deliberate overlap with دستور شرطی (if statement): دستور is the ordinary word in both and that is fine. |

### Platform & curriculum vocabulary

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| course | دوره | fa | The whole Jiki course ("در این دوره"). Keep distinct from درس (lesson) and برنامه‌ی درسی (curriculum). |
| Jiki | جیکی | fa | The interpreter character and the course's name. Written in Persian script in all prose, unlike the product/language names in the "Keep in English" table (JavaScript, Python, React), which stay Latin. Ezāfe and possessives attach as to any Persian noun («انبار جیکی»). Consistent with «جیکی کوچولو» (mini-Jiki) below. Branded sub-product names (Ask Jiki, Jiki Premium) stay English per the guide. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Persian gloss below.

| Term | Persian gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | رابط برنامه‌نویسی کاربردی | Not a word a beginner knows; where defined, explain the concept in Persian, not just gloss the acronym. |
| CLI (the concept) | رابط خط فرمان | Explain as "command-line interface" where the source defines it. |
| AI | هوش مصنوعی | Use "AI" (English) in prose/marketing, not هوش مصنوعی throughout. Gloss once on first use per the glossary. Flag for confirmation once real content surfaces whether this matches how Iranian users actually talk about AI features. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language. These are original Jiki coinages with no prior Persian precedent to
verify against (the same position Hungarian's bootstrap was in); confirm each on first
real use in a translated file and flag anything that reads awkwardly for native-speaker
review.

| English metaphor | Persian rendering | Notes |
|-------------------|--------------------|-------|
| chain (array metaphor) | زنجیر | **Never use حلقه (loop) for an individual link of the chain**, that word is reserved for the loop concept above. If a page ever needs to name one link, use **دانه** (bead) or **قطعه** (segment) instead. |
| box (value container) | جعبه | |
| input slot | دهانه ورودی | |
| return chute | سرسره خروجی | |
| machine (function metaphor) | دستگاه | |
| crank (machine crank) | دسته | The handle Jiki pulls to turn a machine on: «دسته‌اش را بچرخاند» (crank the handle). |
| coin (number metaphor) | سکه | Numbers are coins dropped into a machine's input slot. |
| shelves (storage) | قفسه | Where variables and functions are stored. |
| warehouse (Jiki's warehouse) | انبار | Where Jiki hangs out and keeps his machine shelf. |
| workshop (Jiki's workshop) | کارگاه | The room where Jiki works; the shelves live in it. |
| board / whiteboard | تخته | **One object, one word.** The board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same تخته. Needs no qualifier. Never split this into two words, and never use تابلو or تخته سفید. |
| spiral notebook page (dictionary metaphor) | دفترچه فنری | Keys down the left, values on the right. |
| piece of paper (string metaphor) | برگه | Strings are pieces of paper Jiki writes text on. |
| mini-Jiki | جیکی کوچولو | «Little Jiki». |

---

## Decision log

### 2026-08-01: "Jiki" is written in Persian script (جیکی)

**Decided by:** native speaker mominchezgi, actioned by the owner (iHiD).
**Terms affected:** the new `Jiki` row, and the guide's Jiki-name handling section.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

"Jiki" was previously kept as a Latin product name in Persian prose, on the general
never-translate-product-names rule. mominchezgi asked for جیکی instead, plainly ("I prefer
جیکی", https://forum.jiki.io/t/752/4) and then confirmed they would back it as the standard
for every page (https://forum.jiki.io/t/752/6).

The reason is specific and not the general bidi question the guide already answers: a
single LTR Latin token dropped into RTL Persian running text breaks the reading flow, and
"Jiki" is not an occasional token but a word that recurs several times per paragraph on
almost every page. Code tokens are a different case, because inline-code styling marks them
as foreign on purpose; a character's name carries no such signal and simply reads as an
interruption. جیکی was also already in use in «جیکی کوچولو» (mini-Jiki), so keeping the
bare name Latin was internally inconsistent as well.

The guide had recorded this as an open question pending discussion on the pinned fa
glossary thread (topic 683). That discussion never happened, so iHiD made the call directly
on 2026-08-01 from the reviewer feedback already on record. The two files already using the
Latin name (the using-functions concept page and the maze-solve-basic instructions
description) were updated in the same pass.

### 2026-07-31: Pruned ordinary vocabulary

Removed 12 rows that had one obvious canonical Persian rendering and nothing to decide:
programming/coding, (programming) language, array, index (array index), string, data type,
if statement, variable, nested, error, mental model, exercise. A reviewer might query "if
statement" (دستور شرطی), cut because its own Notes were empty; the collision it guards
against is still recorded on the surviving `condition` and `instruction` rows. No protected
or dated-decision row (board/whiteboard, interpreter, Boolean, Keep in English, the
metaphors) was touched.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Persian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Persian moved from **تابلو** to **تخته**:
  تابلو reads as a painting, plaque, or road sign, not something you write instructions on,
  while تخته is the ordinary Persian word for a board you write on in a room (the classroom
  board: «پای تخته») and does not collide with آرایه (array).
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  **Persian did not change:** مفسر was already right, because it is an agent noun (the one
  who interprets/expounds) that is used of people first and carries no device or program
  morpheme.

A third decision, "default to the ordinary, common word" whatever its etymology, now lives
in `global/voice.md` as a general principle rather than a per-language note.

### 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.
**Terms affected:** the rows this pass added for the Using Functions concept page (the
Functions & control flow and Jiki physical metaphors sections in particular), and the
guide's quotation-mark examples.

The rows this pass needed for the concept page were drafted and added rather than
correcting any existing decision. Separately, the guide's quotation examples were changed
from the German-style low quotes `„…"` to Persian guillemets `«…»`, because guillemets are
the standard Persian quotation mark (Persian Wikipedia house style, and universal in
Quera/Faradars prose), not because anything about the previous examples had been agreed
with a native speaker.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Values & data types

| Term | Why |
|------|-----|
| array | Standard Persian CS term; confirmed via Persian Wikipedia, Faradars, sariasan. |
| index (array index) | Dominant generic CS term for an array index; confirmed via Persian Wikipedia, Faradars. |
| string | Already the comfortable, established primary Persian term (unlike some other Jiki languages that keep "string" in English); confirmed via general Persian CS usage. |
| Boolean | Already a fully nativized transliteration, written in Persian script and used unremarkably as the primary term (confirmed via Persian Wikipedia's «نوع داده بولی»). |

#### Functions & control flow

| Term | Why |
|------|-----|
| function | Confirmed via Persian Wikipedia, Quera, Faradars, tahlildadeh. |
| if statement | Confirmed via Faradars, fa.wikibooks. |
| condition | Confirmed via Faradars, fa.wikibooks. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| variable | Confirmed via Persian Wikipedia, Quera, Faradars. |
| loop | Confirmed via Persian Wikipedia, Quera, Faradars. |
| nested | Confirmed via Faradars («if-elseهای تو در تو» for nested if-else). |
| instruction (given to Jiki) | Everyday Persian for an instruction/command that someone is told to carry out. |
| error | The standard Persian CS term; ordinary enough that a beginner reads it without help. |
| mental model | The picture-in-your-head framing («یک آدم کوچک داخل کامپیوتر زندگی می‌کند»). The ordinary Persian phrase, used as-is in Persian writing about learning. |

#### Keep in English

| Term | Why |
|------|-----|
| AI | Owner precedent, following the Hungarian decision. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | Ordinary, concrete Persian word for a physical chain (bicycle chain, door chain, keychain); safe and unqualified for this metaphor. |
| box | Plain Persian word for "box"; direct and concrete. |
| input slot | ورودی (input, agreed CS term above) + دهانه (an opening/mouth). |
| return chute | خروجی (output) + سرسره (a playground slide), the same warm, concrete move as Hungarian's "kimeneti csúszda". |
| machine | Reads as "apparatus/mechanism", a good fit for a box-with-crank; ماشین was considered but reads more like a car/vehicle generically. |
| spiral notebook page (dictionary metaphor) | A real, recognizable Iranian school item: a spiral-bound notebook. |
| mini-Jiki | کوچولو is the standard warm Persian diminutive for small/cute characters, a good register fit for the small Jiki who works inside a function machine. |
