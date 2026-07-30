---
lang: "ar"
name: "Arabic"
family: null
governance_sha: "1d91ad4"
content_version: "6ab61451ddfd"
published_at: "2026-07-30"
term_count: 94
forum_topic_id: 470
---

# Arabic (ar) glossary

The agreed term list for Arabic. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

## Core decisions

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| programming / coding | **برمجة** | ar | Standard, single established term. | agent |
| streak | **سلسلة الأيام** | ar | Always qualified; never shorten to bare سلسلة. See guide § "The سلسلة collision." | agent |
| tech / tech industry | **التقنية** | ar | e.g. `شركات التقنية` (tech companies). Established in Arabic tech media. | agent |
| developer | **مطوّر** | ar | Standard Arabic equivalent. | agent |
| pitfall | **فخ (شائع)** | ar | "Common trap", concrete and natural; matches the informal register. | agent |
| code | **الكود** | ar | The Arabic-script form of the English word, and the ordinary word in real Arabic developer writing (Hsoub Academy, ar.javascript.info); prefer it over the purist `شيفرة`/`رمز`. This supersedes the old "Keep in English" listing of `Code`: the Latin form stays only inside code and for the `Debug`/`Test` tokens. | agent |

## Localize (use the Arabic term)

These are terms where the Arabic is used in prose, so the "Use (ar/en)" column is `ar` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| value | قيمة | ar | Ordinary word. | agent |
| number | عدد | ar | `عدد` for the data-type sense (`عدد صحيح`, `عدد عشري`); `رقم` is reserved for "digit/numeral", not this term. | agent |
| true / false | صحيح / خطأ | ar | Not capitalised in prose. The literal code keywords `True`/`False` stay in English inside code, per `global/rules.md`. | agent |
| character | حرف | ar | | agent |
| integer | عدد صحيح | ar | | agent |
| float / decimal | عدد عشري | ar | | agent |
| array / list | مصفوفة | ar | Exercise prose that informally says "list" for the same concept as "array" also uses `مصفوفة`; see `global/terms.md`. Distinct from the "chain" physical metaphor, see below. | agent |
| dictionary | قاموس | ar | | agent |
| element | عنصر | ar | e.g. `عناصر المصفوفة` (array elements). | agent |
| index | فهرس | ar | Distinct from `مؤشر` (pointer); do not confuse the two. | agent |
| key-value pair | زوج (مفتاح - قيمة) | ar | | agent |
| string | سلسلة نصية | ar | Always the full qualified compound; never shortened to bare `سلسلة`. See guide § "The سلسلة collision." | agent |
| Boolean | قيمة منطقية | ar | Translated fully, unlike some other Jiki languages that keep "Boolean" in English; see guide § "Loanword policy." | agent |
| data type | نوع البيانات | ar | | agent |

### Functions & control flow

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| if statement | جملة شرطية | ar | | agent |
| condition | شرط | ar | Ordinary word; stands alone. | agent |
| comparison | مقارنة | ar | Ordinary word; stands alone. | agent |
| expression | تعبير | ar | Distinct from "statement" below; an expression evaluates to a value. | agent |
| operator | عامل | ar | e.g. `عوامل المقارنة` (comparison operators). Distinct from `معامل` (parameter); do not confuse the two despite the visual similarity. | agent |
| NOT operator / logical negation | عامل النفي | ar | | agent |
| statement (executable) | عبارة | ar | The imperative sense: a line of code that does something and gets executed. Kept distinct from `جملة شرطية` (if statement) and from `تعبير` (expression). | agent |
| statement (logical claim) | قضية | ar | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; kept distinct from `عبارة` above. | agent |
| function | دالة | ar | The *keyword* `function` in code stays English; the concept in prose is `دالة`. | agent |
| to call (a function) | يستدعي (استدعاء) | ar | | agent |
| to define (a function) | يُعرّف (تعريف) | ar | | agent |
| parameter | معامل | ar | The declaration-site name. Distinct from `عامل` (operator); do not confuse the two. | agent |
| argument | وسيط | ar | The call-site value. | agent |
| input (to a function) | مدخل / مدخلات | ar | Plural `مدخلات` is the natural form in prose. | agent |
| output | مخرج / مخرجات | ar | | agent |
| to return (a value) | يُرجع | ar | | agent |
| return value | القيمة المرجعة | ar | Kept distinct from the verb above. | agent |
| pure function | دالة نقية | ar | | agent |
| brackets (the two after a function name) | القوسان (القوسين) | ar | The round pair `()` written after a function name to call it. Arabic has a dual, so use it: nominative `القوسان`, oblique `القوسين` ("كتبت `move` ثم القوسين"). No need to say "round" here; the plain `قوس` of the Brackets table below already means the round kind. | agent |

### Loops, state & program flow

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| keyword | كلمة مفتاحية | ar | | agent |
| interpreter | مفسّر | ar | **A person doing a job, not a program**: Jiki *is* the interpreter ("مهمته أن يفسّر الكود"). `مفسّر` is the active participle "the one who interprets/explains" and is used of people first (a `مفسّر` of a text, a `مفسّر` at a meeting), so it takes the person sense without strain and carries no device or program morpheme. Plural `مفسّرات`; possessive `مفسّرك` (your interpreter). Related verb `يفسّر`. | agent |
| instruction (given to Jiki) | تعليمة / تعليمات | ar | Plural `تعليمات` is the natural form in prose ("إعطاء المفسّر التعليمات الصحيحة"). Everyday word; do not use the formal/legal-register `أمر` or `توجيه`. | agent |
| mental model | النموذج الذهني | ar | Standard, transparent compound; used for the picture-in-your-head framing. | agent |
| (programming) language | لغة (البرمجة) | ar | Ordinary Arabic word, already familiar to beginners; used both for "programming language" (`لغات البرمجة`) and for the "language a computer understands" framing (`بلغة يفهمها الحاسوب`). Never the transliteration. | agent |
| variable | متغير | ar | | agent |
| assignment | إسناد | ar | More established in Arabic CS-specific usage than the near-synonym `تعيين`; use `إسناد` consistently. | agent |
| to assign | يُسند | ar | | agent |
| code block | كتلة برمجية | ar | | agent |
| error | خطأ | ar | | agent |
| exception | استثناء | ar | Kept distinct from `خطأ` (error); an exception is the specific catchable runtime event. | agent |
| nested | متداخل | ar | e.g. `حلقة متداخلة` = nested loop. | agent |
| iteration | تكرار | ar | | agent |
| to run / execute (code) | يُنفّذ (تنفيذ) | ar | | agent |
| loop | حلقة | ar | | agent |
| for loop | `for` حلقة | ar | Keep `for` in backticks (real keyword) + `حلقة`. | agent |
| while loop | `while` حلقة | ar | As above. | agent |
| for-of loop | `for-of` حلقة | ar | As above. | agent |
| loop body | جسم الحلقة | ar | | agent |
| scope | نطاق | ar | Translated fully, unlike Hungarian's "keep in English" approach for the same term. | agent |
| class | صنف | ar | `فئة` is used interchangeably in some sources; standardise on `صنف` for consistency (matches Arabic Wikipedia's CS-article title). | agent |
| object | كائن | ar | | agent |
| property | خاصية | ar | | agent |

### Tooling & engineering

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| workflow | سير العمل | ar | | agent |
| deploy (verb: to deploy) | يَنشر (نشر) | ar | `انشر` for imperative; `نشر` as noun. | agent |
| module | وحدة | ar | | agent |
| algorithm | خوارزمية | ar | Well established in general vocabulary (from al-Khwarizmi), not just CS jargon; no gloss needed. | agent |
| edge case | حالة حدّية | ar | | agent |
| backwards compatibility | التوافق مع الإصدارات السابقة | ar | Descriptive phrase, standard rendering. | agent |
| framework | إطار عمل | ar | | agent |
| tool / tooling | أداة / أدوات | ar | Used bare in Arabic technical prose; no English gloss needed. | agent |
| component | مكوّن | ar | | agent |
| CLI (the concept) | واجهة سطر الأوامر | ar | Where the source `<define>`s it, explain as `واجهة سطر الأوامر (command-line interface)`; may shorten to `سطر الأوامر` after. | agent |

### Platform & curriculum vocabulary

| English | Arabic | Use (ar/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| course | دورة | ar | The whole Jiki course the learner is taking ("في هذه الدورة، مفسّرك هو Jiki"). `دورة` is the ordinary word for a course of study in Arabic. Keep distinct from `درس` (lesson) and `منهج` (curriculum). | agent |
| exercise | تمرين | ar | Plural `تمارين`. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Arabic in the gloss column; with no `<define>`, use the English bare, no gloss.
This list is deliberately short: given this audience's lower average English proficiency
(see guide § "Loanword policy"), Arabic Jiki content Arabizes core vocabulary by default
rather than keeping it in English.

| Term | Arabic gloss (on `<define>`) | Notes | Agreed by |
|------|-------------------------------|-------|-----------|
| API | `واجهة برمجة التطبيقات (API)` | Every Arabic tech source checked keeps the Latin acronym in running prose after it is glossed; do not replace it with the Arabic phrase on later mentions. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Arabic rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | صندوق | Plain Arabic word for a physical box (cardboard/storage box); direct and concrete. | agent |
| chain (array metaphor) | سلسلة الحلقات | Always the full qualified compound ("chain of links/rings"); never shortened to bare `سلسلة`. See guide § "The سلسلة collision" for why this qualifier is mandatory. | agent |
| input slot | فتحة الإدخال | `فتحة` (opening/slot) + `الإدخال` (input, agreed term above). | agent |
| return chute | مزلقة الإخراج | `مزلقة` is the everyday Arabic word for a slide (as in a playground slide), which carries the same physical image as a vending-machine dispensing chute, + `الإخراج` (output, agreed term above). | agent |
| machine (function metaphor) | آلة | Plain, concrete word for a machine. | agent |
| shelves (storage) | رفوف | Plain, concrete, everyday word. | agent |
| board / whiteboard | سبورة | **One object, one word**, per `global/terms.md`: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same object and take the same Arabic word. `سبورة` is the everyday, pan-Arab word for a writing board in a room, so no qualifier is needed; do not write `السبورة البيضاء` (over-specific) and do not use `لوح` (reads as a plank/panel/tablet, and would split one object into two words). No collision with `مصفوفة` (array). | agent |
| warehouse (Jiki's warehouse) | مستودع | Everyday word for a warehouse; where Jiki hangs out and keeps his machine shelf. | agent |
| crank (machine crank) | مقبض | The handle on a machine; the action of cranking it is `يدير المقبض` (turns the handle). Concrete and everyday, not the transliteration `كرنك`. | agent |

## Brackets

Default to plain **قوس** (bracket/parenthesis, plural أقواس). When a specific bracket type matters, name it and show the glyph in a code tag immediately after.

| Glyph | Arabic | Notes | Agreed by |
|-------|--------|-------|-----------|
| `()` | قوس · قوس عادي | Plain `قوس` by default; add `عادي` + glyph only when disambiguating. | agent |
| `[]` | قوس معقوف | | agent |
| `{}` | قوس مجعد | | agent |
| `<>` | قوس زاوي | | agent |
