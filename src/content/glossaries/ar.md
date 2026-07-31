---
lang: "ar"
name: "Arabic"
family: null
stage: "setup"
governance_sha: "8e3de87"
content_version: "316e06f06cdf"
published_at: "2026-07-31"
term_count: 48
category_id: 233
forum_topic_id: 470
video_player_forum_topic_id: 741
---

# Arabic (ar) glossary

The agreed term list for Arabic. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| streak | **سلسلة الأيام** | ar | Always qualified; never shorten to bare سلسلة. See guide § "The سلسلة collision." |
| pitfall | **فخ (شائع)** | ar | |
| code | **الكود** | ar | Use `الكود` in prose. The Latin form stays only inside code and for the `Debug`/`Test` tokens. |

## Localize (use the Arabic term)

These are terms where the Arabic is used in prose, so the "Use (ar/en)" column is `ar` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| number | عدد | ar | `عدد` for the data-type sense (`عدد صحيح`, `عدد عشري`); `رقم` is reserved for "digit/numeral", not this term. |
| true / false | صحيح / خطأ | ar | Not capitalised in prose. The literal code keywords `True`/`False` stay in English inside code, per `global/rules.md`. |
| array / list | مصفوفة | ar | Exercise prose that informally says "list" for the same concept as "array" also uses `مصفوفة`; see `global/terms.md`. Distinct from the "chain" physical metaphor, see below. |
| index | فهرس | ar | Distinct from `مؤشر` (pointer); do not confuse the two. |
| string | سلسلة نصية | ar | Always the full qualified compound; never shortened to bare `سلسلة`. See guide § "The سلسلة collision." |
| Boolean | قيمة منطقية | ar | Translated fully; see guide § "Loanword policy." |

### Functions & control flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| if statement | جملة شرطية | ar | |
| expression | تعبير | ar | Distinct from "statement" below; an expression evaluates to a value. |
| operator | عامل | ar | e.g. `عوامل المقارنة` (comparison operators). Distinct from `معامل` (parameter); do not confuse the two despite the visual similarity. |
| statement (executable) | عبارة | ar | The imperative sense: a line of code that does something and gets executed. Kept distinct from `جملة شرطية` (if statement) and from `تعبير` (expression). |
| statement (logical claim) | قضية | ar | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; kept distinct from `عبارة` above. |
| function | دالة | ar | The *keyword* `function` in code stays English; the concept in prose is `دالة`. |
| parameter | معامل | ar | The declaration-site name. Distinct from `عامل` (operator); do not confuse the two. |
| argument | وسيط | ar | The call-site value. |
| brackets (the two after a function name) | القوسان (القوسين) | ar | The round pair `()` written after a function name to call it. Arabic has a dual, so use it: nominative `القوسان`, oblique `القوسين` ("كتبت `move` ثم القوسين"). No need to say "round" here; the plain `قوس` of the Brackets table below already means the round kind. |

### Loops, state & program flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | مفسّر | ar | **A person doing a job, not a program**: Jiki *is* the interpreter ("مهمته أن يفسّر الكود"). Plural `مفسّرات`; possessive `مفسّرك` (your interpreter). Related verb `يفسّر`. |
| instruction (given to Jiki) | تعليمة / تعليمات | ar | Plural `تعليمات` is the natural form in prose ("إعطاء المفسّر التعليمات الصحيحة"). Everyday word; do not use the formal/legal-register `أمر` or `توجيه`. |
| (programming) language | لغة (البرمجة) | ar | Used both for "programming language" (`لغات البرمجة`) and for the "language a computer understands" framing (`بلغة يفهمها الحاسوب`). Never the transliteration. |
| assignment | إسناد | ar | Use `إسناد` consistently, not the near-synonym `تعيين`. |
| exception | استثناء | ar | Kept distinct from `خطأ` (error); an exception is the specific catchable runtime event. |
| for loop | `for` حلقة | ar | Keep `for` in backticks (real keyword) + `حلقة`. |
| scope | نطاق | ar | Translated fully. |
| class | صنف | ar | Standardise on `صنف`; do not use the near-synonym `فئة`. |

### Tooling & engineering

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| CLI (the concept) | واجهة سطر الأوامر | ar | Where the source `<define>`s it, explain as `واجهة سطر الأوامر (command-line interface)`; may shorten to `سطر الأوامر` after. |

### Platform & curriculum vocabulary

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| course | دورة | ar | The whole Jiki course the learner is taking ("في هذه الدورة، مفسّرك هو Jiki"). Keep distinct from `درس` (lesson) and `منهج` (curriculum). |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Arabic in the gloss column; with no `<define>`, use the English bare, no gloss.
This list is deliberately short: given this audience's lower average English proficiency
(see guide § "Loanword policy"), Arabic Jiki content Arabizes core vocabulary by default
rather than keeping it in English.

| Term | Arabic gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | `واجهة برمجة التطبيقات (API)` | Do not replace it with the Arabic phrase on later mentions; keep the Latin acronym in running prose after it is glossed once. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Arabic rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | صندوق | |
| chain (array metaphor) | سلسلة الحلقات | Always the full qualified compound ("chain of links/rings"); never shortened to bare `سلسلة`. See guide § "The سلسلة collision" for why this qualifier is mandatory. |
| input slot | فتحة الإدخال | |
| return chute | مزلقة الإخراج | |
| machine (function metaphor) | آلة | |
| shelves (storage) | رفوف | |
| board / whiteboard | سبورة | **One object, one word**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word. Do not write `السبورة البيضاء`, and do not use `لوح`. |
| warehouse (Jiki's warehouse) | مستودع | Where Jiki hangs out and keeps his machine shelf. |
| crank (machine crank) | مقبض | The handle on a machine; the action of cranking it is `يدير المقبض` (turns the handle). Not the transliteration `كرنك`. |

## Brackets

Default to plain **قوس** (bracket/parenthesis, plural أقواس). When a specific bracket type matters, name it and show the glyph in a code tag immediately after.

| Glyph | Arabic | Notes |
|-------|--------|-------|
| `()` | قوس · قوس عادي | Plain `قوس` by default; add `عادي` + glyph only when disambiguating. |
| `[]` | قوس معقوف | |
| `{}` | قوس مجعد | |
| `<>` | قوس زاوي | |

---

## Decision log

### 2026-07-31: Pruned of ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/translating.md` step 6. Removed 45
rows whose Arabic rendering was the one obvious dictionary word with nothing to decide
(e.g. `value`, `variable`, `error`, `loop`, `object`, `workflow`, `algorithm`), including
`while loop` and `for-of loop` as mechanical repeats of the `for loop` backtick convention.
Rows kept where two renderings were live, a collision or register distinction was recorded,
or the row was part of the Jiki metaphor set; a reviewer might query cutting `while loop`
and `for-of loop` (mechanical repeats of `for loop`'s stated convention), `deploy`, and
`mental model`, all removed as having no independent decision.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Arabic:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have. Arabic
  merged both onto **سبورة**, the everyday, pan-Arab word for a writing board in a room, so
  no qualifier is needed. This replaced `لوح` on the page (it reads as a plank/panel/tablet,
  and would have split one object into two words) and retired `السبورة البيضاء` (over-specific).
  No collision with `مصفوفة` (array).
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Arabic did not change:**
  `مفسّر` was already right, because it is the active participle "the one who
  interprets/explains" and is used of people first (a `مفسّر` of a text, a `مفسّر` at a
  meeting), so it takes the person sense without strain and carries no device or program
  morpheme. What changed is that the row now says so, confirming `مفسّر` and ruling out any
  reading of it as a machine-only term.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for terms the using-functions concept page needed: `mental model`,
`(programming) language`, `brackets (the two after a function name)`, `input (to a
function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
`board / whiteboard`.

**One contradiction resolved.** The "Keep in English" table had listed `Code`, while the
guide's own worked examples used `الكود` throughout. Resolved to `الكود`: it is the
Arabic-script form of the English word and the ordinary word in real Arabic developer
writing (Hsoub Academy, ar.javascript.info), preferred over the purist `شيفرة`/`رمز`. The
Latin form `Code` survives only inside code and for the `Debug`/`Test` tokens.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, single established term. |
| tech / tech industry | Established in Arabic tech media. |
| developer | Standard Arabic equivalent. |
| pitfall | "Common trap" is concrete and natural, and matches the informal register. |

#### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary word. |
| Boolean | Translated fully, unlike some other Jiki languages that keep "Boolean" in English. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Standard, transparent compound. |
| (programming) language | Ordinary Arabic word, already familiar to beginners. |
| assignment | More established in Arabic CS-specific usage than the near-synonym `تعيين`. |
| scope | Translated fully, unlike Hungarian's "keep in English" approach for the same term. |
| class | `فئة` is used interchangeably in some sources; `صنف` matches Arabic Wikipedia's CS-article title, chosen for consistency. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| algorithm | Well established in general vocabulary (from al-Khwarizmi), not just CS jargon. |
| backwards compatibility | Descriptive phrase, standard rendering. |
| tool / tooling | Used bare in established Arabic technical prose. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | `دورة` is the ordinary word for a course of study in Arabic. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Every Arabic tech source checked keeps the Latin acronym in running prose after glossing it once. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Arabic word for a physical box (cardboard/storage box); direct and concrete. |
| input slot | `فتحة` (opening/slot) + `الإدخال` (input, the agreed term). |
| return chute | `مزلقة` is the everyday Arabic word for a slide (as in a playground slide), the same physical image as a vending-machine dispensing chute, + `الإخراج` (output, the agreed term). |
| machine | Plain, concrete word for a machine. |
| shelves | Plain, concrete, everyday word. |
| warehouse | Everyday word for a warehouse. |
| crank | Concrete and everyday word for the handle, not the transliteration `كرنك`. |
