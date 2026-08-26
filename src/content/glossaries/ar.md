---
lang: "ar"
name: "Arabic"
family: null
stage: "refining"
governance_sha: "7d77efea"
content_version: "657786644bd5"
published_at: "2026-08-26"
term_count: 51
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
| streak | **المواظبة** | ar | Use the single word; do not render streak with سلسلة. Where the sense needs pinning down, say what is being kept up in the surrounding sentence rather than qualifying the term. Feminine; plural المواظبات. |
| pitfall | **خطأ شائع** | ar | "Common mistake", not "common trap": both words are mandatory as a set phrase. Do not use فخ شائع. Masculine; plural أخطاء شائعة. |
| code | **الكود** | ar | Use `الكود` in prose. The purist `شيفرة`/`رمز` is the wrong direction. The Latin form stays only inside code and for the `Debug`/`Test` tokens. Masculine; plural أكواد. |

## Localize (use the Arabic term)

These are terms where the Arabic is used in prose, so the "Use (ar/en)" column is `ar` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| number | عدد | ar | `عدد` for the data-type sense (`عدد صحيح`, `عدد عشري`); `رقم` is reserved for "digit/numeral", not this term. Masculine; plural أعداد. |
| true / false | صحيح / خطأ | ar | Not capitalised in prose. The literal code keywords `True`/`False` stay in English inside code, per `global/rules.md`. |
| array / list | مصفوفة | ar | Exercise prose that informally says "list" for the same concept as "array" also uses `مصفوفة`; see `global/terms.md`. Distinct from the "chain" physical metaphor, see below. Array sense: feminine; plural مصفوفات. |
| variable (the concept, in prose) | متغير / المتغيرات | ar | Only the concept explained in prose is translated. A literal variable *name* used in a code sample (e.g. `leftPosition`) is a code identifier and stays in English, per the "Keep in English" table below; the two are not the same thing. |
| index | فهرس | ar | Distinct from `مؤشر` (pointer); do not confuse the two. Masculine; plural فهارس. |
| string | سلسلة نصية | ar | Always the full qualified compound; never shortened to bare `سلسلة`. See guide § "The سلسلة collision." Feminine; plural سلاسل نصية. |
| Boolean | قيمة منطقية | ar | Translated fully; see guide § "Loanword policy." Feminine; plural قيم منطقية. |

### Functions & control flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| if statement | جملة شرطية | ar | Feminine; plural جمل شرطية. |
| expression | تعبير | ar | Distinct from "statement" below; an expression evaluates to a value. Masculine; plural تعبيرات. |
| operator | عامل | ar | e.g. `عوامل المقارنة` (comparison operators). Distinct from `معامل` (parameter); do not confuse the two despite the visual similarity. Masculine; plural عوامل. |
| statement (executable) | عبارة | ar | The imperative sense: a line of code that does something and gets executed. Kept distinct from `جملة شرطية` (if statement) and from `تعبير` (expression). |
| statement (logical claim) | قضية | ar | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; kept distinct from `عبارة` above. |
| function | دالة | ar | The *keyword* `function` in code stays English; the concept in prose is `دالة`. Feminine; plural دوال. |
| parameter | معامل | ar | The declaration-site name. Distinct from `عامل` (operator); do not confuse the two. Masculine; plural معاملات. |
| argument | وسيط | ar | The call-site value. Masculine; plural وسائط. |
| to return (a value) | يُرجع (المصدر: إرجاع) | ar | The programming action of a function giving a value back. Not `يعيد`, which in everyday Arabic also reads as "repeats/redoes". `إخراج`/`يُخرج` stays reserved for output/printing to the screen, so that a value handed back to the program and a result shown on screen never blur together for a beginner. The `return chute` metaphor keeps `مجرى الإخراج`, because that names the physical exit the value slides out of, not the action. Set by mirina (t/470/46). |
| brackets (the two after a function name) | الأقواس الهلالية (الأقواس الهلالَين) | ar | The round pair `()` written after a function name to call it. Arabic has a dual, so use it where the pair is meant: `الأقواس الهلالية`, oblique `الأقواس الهلالَين` ("كتبت `move` ثم الأقواس الهلالَين"). Set by mirina (t/470/32), overriding humam-hamdan's earlier bare `الهلالان`: the generic head-word is `قوس`/`أقواس` for every bracket type, with the shape as a qualifier. See the Brackets table below. |

### Loops, state & program flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | مفسّر | ar | **A person doing a job, not a program**: Jiki *is* the interpreter ("مهمته أن يفسّر الكود"). Plural `مفسّرات`; possessive `مفسّرك` (your interpreter). Related verb `يفسّر`. Grammatically masculine, though usable for a person of either gender. |
| instruction (given to Jiki) | تعليمة / تعليمات | ar | Plural `تعليمات` is the natural form in prose ("إعطاء المفسّر التعليمات الصحيحة"). Everyday word; do not use the formal/legal-register `أمر` or `توجيه`. Feminine. |
| (programming) language | لغة (البرمجة) | ar | Used both for "programming language" (`لغات البرمجة`) and for the "language a computer understands" framing (`بلغة يفهمها الحاسوب`). Never the transliteration. Feminine; plural لغات برمجة. |
| assignment | إسناد | ar | Use `إسناد` consistently, not the near-synonym `تعيين`. Masculine; plural إسنادات. |
| exception | استثناء | ar | Kept distinct from `خطأ` (error); an exception is the specific catchable runtime event. Masculine; plural استثناءات. |
| for loop | `for` حلقة | ar | Keep `for` in backticks (real keyword) + `حلقة`. |
| scope | نطاق | ar | Translated fully. Masculine; plural نطاقات. |
| class | صنف | ar | Standardise on `صنف`; do not use the near-synonym `فئة`. Masculine; plural أصناف. |

### Tooling & engineering

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| CLI (the concept) | واجهة سطر الأوامر | ar | Where the source `<define>`s it, explain as `واجهة سطر الأوامر (command-line interface)`; may shorten to `سطر الأوامر` after. Feminine; plural واجهات سطر الأوامر. |

### Platform & curriculum vocabulary

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| course | دورة | ar | The whole Jiki course the learner is taking ("في هذه الدورة، مفسّرك هو Jiki"). Keep distinct from `درس` (lesson) and `منهج` (curriculum). Feminine; plural دورات. |
| dashboard | لوحة التحكم | ar | Confirmed by mirina (t/795/7): not necessarily the most elegant term, but correct and widely understandable. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Arabic in the gloss column; with no `<define>`, use the English bare, no gloss.
This list is deliberately short: given this audience's lower average English proficiency
(see guide § "Loanword policy"), Arabic Jiki content Arabizes core vocabulary by default
rather than keeping it in English.

| Term | Arabic gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | `واجهة برمجة التطبيقات (API)` | Do not replace it with the Arabic phrase on later mentions; keep the Latin acronym in running prose after it is glossed once. Feminine; plural واجهات برمجة التطبيقات. |
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
| box (value container) | صندوق | Masculine; plural صناديق. |
| chain (array metaphor) | سلسلة الحلقات | Always the full qualified compound ("chain of links/rings"); never shortened to bare `سلسلة`. See guide § "The سلسلة collision" for why this qualifier is mandatory. |
| input slot | فتحة الإدخال | Feminine; plural فتحات إدخال. |
| return chute | مجرى الإخراج | |
| machine (function metaphor) | آلة | Feminine; plural آلات. |
| shelves (storage) | رفوف | Masculine; singular رف. |
| board / whiteboard | سبورة | **One object, one word**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word. Do not write `السبورة البيضاء`, and do not use `لوح`. Feminine; plural سبورات. |
| warehouse (Jiki's warehouse) | مستودع | Where Jiki hangs out and keeps his machine shelf. Masculine; plural مستودعات. |
| crank (machine crank) | مقبض | The handle on a machine; the action of cranking it is `يدير المقبض` (turns the handle). Not the transliteration `كرنك`. Masculine; plural مقابض. |

## Brackets

Set by mirina (t/470/32), replacing the earlier humam-hamdan scheme (t/470/16). Every bracket
type shares one head-word and is distinguished by a qualifier naming its shape, matching the
English pattern (`bracket` + shape) and the usage of Arabic educational and technical sources.
**Never use a bare `هلال` or a bare `معقوف` on its own**, and never use `قوس` alone to mean `{}`.

Generic, when no specific type is meant: singular `قوس` (masculine), the pair `القوسان`, plural
`أقواس` / definite `الأقواس`.

| Glyph | Arabic | Notes |
|-------|--------|-------|
| `()` | الأقواس الهلالية (dual: الأقواس الهلالَين) | Parentheses / round brackets. See the `brackets (the two after a function name)` row above; that is this pair after a function call. |
| `[]` | الأقواس المربعة | Square brackets. Note this is a **swap** against the old scheme, where `معقوف` meant `[]`. |
| `{}` | الأقواس المعقوفة | Curly braces. Note this is a **swap** against the old scheme, where `معقوف` meant `[]` and `قوس` alone meant `{}`. Not `مجعد`, and not the descriptive `المنحنية`/`الحاضنات`. |
| `<>` | الأقواس الزاوية | Angle brackets. |

---

## Decision log

### 2026-08-26: `to return (a value)` added as `يُرجع` (t/470, post 46)

**Decided by:** reviewer mirina, forum https://forum.jiki.io/t/470/46, actioned directly.
She pointed out that the glossary had `return chute` (`مجرى الإخراج`) but never named the
verb for the programming action itself, where the French and Spanish (es-ES) glossaries both
carry a `to return (a value)` row, and asked for the same row in Arabic.

#### The term

`يُرجع`, verbal noun `إرجاع`. Added to the "Functions & control flow" table.

#### mirina's reasoning

- **It is the standard term.** `يُرجع` is what the major Arabic learning platforms (Hsoub
  Academy, Elzero Web School, Harmash) and the official standards bodies (ALECSO, and its
  ARABTERM database) use for a function returning a value. She supplied screenshots of each.
- **It keeps return and print apart.** Beginners routinely confuse returning a value with
  printing one to the screen. In Arabic CS writing `إخراج` / `يُخرج` is reserved for
  output/print, so using it for `return` as well would collapse exactly the distinction the
  return-values material exists to teach. `يُرجع` says "gives a value back to the program"
  and nothing else.
- **`يعيد` is ambiguous.** The verb the Arabic content had been using ad hoc also carries
  the everyday sense "repeats / does again", which is a live confusion for an absolute
  beginner reading about loops in the same course.

#### Why this does not disturb `return chute`

`مجرى الإخراج` stays as it is. The metaphor names the physical exit a value slides out of on
Jiki's machine, which is an output image, while `يُرجع` names the action a function performs.
The two do not compete and both stay.

#### Propagation

Not yet swept. The published Arabic content mostly uses `يعيد` / `تعيد` for this sense
(seven files, around seventeen occurrences: the `arrays` concept page, the `digital-clock`,
`rock-paper-scissors`, `two-fer` and `rainbow` exercises), and three places already say
`تُرجع` (the level title "دوال تُرجع قيمًا", the `two-fer` catalog, and the `noReturn` app
message), so the corpus was inconsistent before this decision. A follow-up sweep will bring
the `يعيد` occurrences over; the other senses of `يعيد` / `إعادة` in the corpus ("rebuild",
"rewatch", "reset", "reuse") are untouched by it.

### 2026-08-22: brackets restructured to `قوس` + shape qualifier, overriding the 2026-08-08 scheme (t/470, post 32)

**Decided by:** project owner iHiD, resolving a direct conflict between two native speakers
in mirina's favour. The linguistic case is mirina's (https://forum.jiki.io/t/470/32); the
call to adopt it over humam-hamdan's earlier decision (https://forum.jiki.io/t/470/16) is
iHiD's, made explicitly because the two proposals could not both stand and we had told the
thread (post 34) we would not pick a side unilaterally. **Both humam-hamdan's rows and this
override are native-speaker input; this entry exists so it is on the record that the earlier
rows were replaced by an owner decision, not quietly dropped.**

#### What changed

| Glyph | Was (humam-hamdan, 2026-08-08) | Now (mirina) |
|-------|-------------------------------|--------------|
| `()` | هلال · هلالان (dual: هلالَين) | الأقواس الهلالية (dual: الأقواس الهلالَين) |
| `[]` | معقوف · معقوفان | الأقواس المربعة |
| `{}` | قوس · قوسان | الأقواس المعقوفة |
| `<>` | قوس زاوي | الأقواس الزاوية |

Plus a generic baseline the old scheme deliberately did not have: singular `قوس`, the pair
`القوسان`, plural `أقواس` / `الأقواس`, for use when no specific type is meant.

**Two of these are swaps, not replacements.** `معقوف` meant `[]` under the old scheme and
means `{}` under the new one, and `قوس` alone meant `{}` and is now the generic head-word for
all four. Any future edit touching bracket wording has to read the surrounding glyph rather
than pattern-match the word.

#### mirina's reasoning (t/470/32)

She rejected the premise of humam-hamdan's argument directly: "I do not agree with this
translation or with the argument put forward by humam-hamdan (t/470/16) against translating
'Brackets' as 'قوس' because the word should be reserved for 'Curly brackets.' This argument
is not based on any objective evidence." Her positive case:

- `الهلالان` is real, but its register is grammar and classical typography, not programming:
  "in educational and technical resources, it is systematically replaced by 'الأقواس
  الهلالية' (a morphological description of the bracket type). In programming, the term
  'الهلالَين' is not used as a generic term for brackets."
- Arabic technical writing mirrors the English two-word pattern, `bracket` + shape:
  "قوس + specification (bracket form)".
- `أقواس` as the generic head-word is, in her words, "the generic term validated by all
  Arabic educational platforms (Hsoub, Elzero, Harmash, Mawdoo3), ALECSO and its ARABTERM
  database (Rabat), and textbooks from four countries (Egypt, Morocco, the UAE, and Saudi
  Arabia)", plus Google for Education, Arabic Wikipedia (علامات الترقيم) and the Moroccan
  external translation group. She supplied screenshots of each.
- She specifically warns against the bare-`الأقواس` shortcut for `{}` that Google for
  Education permits, as "it can be a source of confusion in some Arabic-speaking countries",
  which is why every row here keeps its qualifier.

#### Why this is a correction rather than a coin-toss

humam-hamdan's own post named the three types as "الهلالية والمربعة والمعقوفة", i.e. with
exactly the shape adjectives mirina uses, and only then assigned bare nouns that put
`معقوف` on `[]` and `قوس` on `{}`. His descriptive naming and his assigned nouns disagree
with each other about which shape `معقوف` denotes; mirina's scheme is consistent with the
naming both of them started from.

#### mirina's own framing of the disagreement (t/470/36)

She later softened the conflict herself, suggesting both schemes are correct in their own
register: humam-hamdan's bare nouns read as real-world developer shorthand (short forms are
preferred in inline code comments, partly to dodge RTL/LTR rendering bugs around `{}`),
while hers is the formal documentation and teaching register. She asked us to decide which
context Jiki is. **Jiki is teaching material for people who have never programmed**, which
is the formal/educational register, so that framing points the same way as the decision.

#### Propagation

Swept every published Arabic item using the old terms. The base word for true/false and
every other open disagreement on t/470 is untouched by this.

### 2026-08-21: `return chute` changed from `مزلقة الإخراج` to `مجرى الإخراج` (t/470, post 33)

**Decided by:** reviewer mirina, forum t/470, post 33. She proposed replacing `مزلقة
الإخراج` with `مجرى الإخراج`, arguing the new term is simpler and more explicit:
`الإخراج` already illustrates "output" as "exit" in English, and `مزلقة` specifically means
"slide" (as in a playground slide), which she felt was an unnecessary and potentially
ambiguous physical image once paired with `الإخراج`. `مجرى` (channel/duct) keeps the
output/exit sense without that ambiguity. Uncontested by any other reviewer on the thread
(unlike the separate "Brackets" disagreement on the same thread, which this does not touch).
Swept the two already-published pages using the old term (`concept/arrays`,
`concept/dictionaries`) to match.

### 2026-08-20: Grammatical gender and plurals added to existing terms (t/470, post 24)

**Decided by:** reviewer mirina, forum t/470, post 24. She reviewed the existing glossary
term by term and confirmed her proposed grammatical gender and plural form for each Arabic
word already agreed there, without proposing any change to the word itself. This is an
enrichment pass, not a re-decision: every word audited here already matched what was in the
glossary; only the missing gender/plural detail was appended to each row's Notes column. A
handful of terms she also raised turned out to be open conflicts (competing renderings, not
missing detail on an agreed one) and are being tracked and actioned separately rather than
folded into this batch.

### 2026-08-19: Demonstratives settled on هذا/هذه/هذي only, reversing the 2026-08-08 call

**Decided by:** reviewer mirina, forum t/470, post 22, following up on the earlier
"stylistic variation" note below. She researched the short forms ذا/ذه/ذي and found they
belong to classical/literary Arabic (العربية الفصحى), associated with religious and literary
texts, not the living everyday language her reading group actually uses — a poor fit for
this course's tone and its 18-35 audience. She also argued that mixing the two forms
inconsistently reads as confusion, not variety. This supersedes the 2026-08-08 entry below:
**always use the full هذا/هذه/هذي, never the short ذا/ذه/ذي.** Row/rule to be added to
`guide.md`; any existing ar content using the short forms should be swept to the full forms
next time that page is touched.

### 2026-08-19: `variable` (the concept) given its own glossary row

**Decided by:** reviewer mirina's question on forum t/470, post 20. She was reasonably
confused by the "Keep in English" table listing "Variable and function names" as never
translated, having also seen the general word "variable" translated in concept prose. Those
are two different things: the table entry means literal code identifiers (`leftPosition`,
`getCurrentTime`), never the CS concept explained in prose. Checked already-translated
content (`concept/variables`, `concept/dictionaries`) and confirmed متغير/المتغيرات was
already being used consistently for the concept, with code identifiers correctly left in
English throughout — no actual bug, just an undocumented convention. Added a row for it,
matching the existing `array / list` row's pattern, so the distinction is explicit rather
than implicit. Also confirmed (checked front-end curriculum source) that Jiki teaches
JikiScript, not Python: no `tuple` or `Set` type exists anywhere in the taught curriculum, so
her question about those terms needing glossary rows doesn't apply — they're not concepts
this course teaches at all.

### 2026-08-08: brackets split by type; الاقتران is a one-time gloss only; demonstrative register left to the author's judgement (t/470, t/740)

**Decided by:** native speaker humam-hamdan (https://forum.jiki.io/t/470/16), answering four
questions raised while applying his full review of `concept/using-functions` (t/740/3).

#### Brackets: no shared default, each glyph gets its own word (actioned)

Previously `قوس` was the default word for any bracket, disambiguated with a qualifier
(`عادي`, `معقوف`, `مجعد`, `زاوي`) only when the type mattered. humam-hamdan: "فالمسألة أننا
عندنا ثلاث أنواع من الأقواس، الهلالية والمربعة والمعقوفة" (we have three types of brackets),
and assigned each its own word rather than a shared default with qualifiers: `()` is
`هلالان` (not `قوسان`), `[]` is `معقوفان`, `{}` is `قوسان` (reassigning the bare `قوس`/`قوسان`
from its old generic-default role to specifically mean curly braces). `<>` was not
addressed and keeps its previous rendering (`قوس زاوي`). The "brackets after a function
name" row (the `()` pair in `move()`) moves from `القوسان`/`القوسين` to `الهلالان`/`الهلالَين`
accordingly. Propagated to `concept/using-functions`, the only published item using this
term so far.

#### function / الاقتران: not a glossary term, a one-time first-mention gloss

His draft added "(أو الاقتران)" once, next to the first mention of `الدوال`. Asked whether to
adopt `الاقتران` as an alternative rendering site-wide: "ذكرت الاقتران لأن الدالة والاقتران
يستخدمان تبادليا، وذكرتها مرة واحدة فقط، لذا نبقيها في تيك المرة ولا تذكر بعدها" (I mentioned
it because the two are used interchangeably, and mentioned it only once on purpose — keep it
that one time, don't repeat it elsewhere). Not a glossary row: `الدوال` remains the term used
everywhere; the parenthetical synonym is restored at its one first-mention spot in
`concept/using-functions` only, and should not be added anywhere else.

#### Jiki transliteration (چيكي): no preference, left as-is

Asked whether to add "Jiki (چيكي)" on first mention throughout: "إخال لا فرق هنا بين
الاثنين" (I don't think there's a difference between the two). No action; Jiki's name stays
in Latin script, unchanged.

#### Demonstratives (ذا/ذه/ذي vs هذا/هذه/هذي): stylistic variation, not a fixed register rule

Asked whether the shortened colloquial forms are the intended register throughout: "فذي
تعتمد على السياق، وغيّرتُ ما غيرت للتنويع وتقليل الرتابة" (it depends on context; I varied
what I varied for variety, to reduce monotony). Not a rule to codify in the guide: this is
deliberate authorial variation, not a register decision that would make other pages wrong
for using standard `هذا`/`هذه`.

### 2026-08-07: pitfall and streak settled; true/false contested (t/470)

**Decided by:** native speakers humam-hamdan (https://forum.jiki.io/t/470/5) and baharoon
(https://forum.jiki.io/t/470/3), on the pinned Arabic glossary thread. humam-hamdan's post
answers, term by term, the three points baharoon raised the day before and that were left
open in the 2026-08-06 entry below.

#### pitfall: `فخ شائع` → `خطأ شائع` (actioned)

humam-hamdan: "pitfall, since it's a 'frequent mistake' rather than a 'trap', which is
something specifically made to trip people over, i add my voice into خطأ شائع." That is a
second native speaker independently reaching baharoon's suggestion ("more commonly used in
the context of warning about pitfalls in learning"), which is what the earlier entry was
waiting for: the open question was explicitly "a register preference on a single opinion".
Two agreeing reviewers and a semantic argument (a pitfall is an error learners fall into,
not a snare someone laid) outrank the bootstrap rationale for "common trap", so the row is
changed. Both words stay mandatory as a set phrase.

#### streak: `سلسلة الأيام` → `المواظبة` (actioned)

humam-hamdan: "مواظبة is the word we need here, as its meaning (directly) entails 'keeping
it up', while استمرارية is more of a construct with that meaning." baharoon had offered
`الاستمرارية` and `المواظبة` without choosing; humam-hamdan picks between them and gives
the reason, which closes that open question too.

This also resolves, rather than breaks, the سلسلة scheme recorded under "The سلسلة
collision" below. The concern raised in reply to baharoon was that streak was one leg of a
deliberate three-way qualification (`سلسلة الحلقات` / `سلسلة نصية` / `سلسلة الأيام`) and
that moving it might reintroduce ambiguity. `المواظبة` shares no root with سلسلة at all, so
the collision now has two legs instead of three and each is still qualified. `guide.md`
§ "The سلسلة collision" was updated to list the two remaining senses (array metaphor,
string); the rule itself (never bare سلسلة) is unchanged.

The one thing lost is the literal "days" in the old rendering. baharoon had asked for a
hover note explaining what the streak counts; we do not have a mechanism for that on a
glossary term, so the glossary row instead tells the translator to make the sense explicit
in the surrounding sentence where it is not obvious.

#### true/false: NOT actioned, now contested between reviewers

The current row (`صحيح / خطأ`) is **unchanged**, because what began as one reviewer's
correction has turned into a live disagreement between three:

- humam-hamdan, post 5: "صواب / خطأ is the better version, صح is a verb, its noun usage is
  recent." In post 7 he narrows what he is rejecting: "what i'm rejecting is 'صح'. as for
  'صحيح' its rejection is not what i did, abdulrahman did that." In post 12 he does then
  argue against `صحيح` directly, on classical-lexicographic grounds, quoting al-Jawhari's
  الصحاح: `الصحيح` is opposed to `السقيم` (sound vs ailing) while `الصواب` is opposed to
  `الخطأ`, so `صواب/خطأ` is the properly paired antonym set.
- mirina, post 10, argues the opposite: `صحيح` reads as a pure Boolean value while `صواب`
  carries "correct / in the right" connotations (*إجابتك صواب*, *أنت على صواب*), and
  `صحيح/خطأ` is what MDN, W3Schools, Code.org and Khan Academy use. She notes she drafted
  parts of the post with DeepL.
- humam-hamdan, post 11, rejects that line of evidence rather than the conclusion: an
  Arabic translation should not be built on foreign-language sources, and an
  LLM-acceptable rendering is not the bar.

Both the pairing argument and the connotation argument are substantive and neither reviewer
has conceded. Per `orchestrator.md` ("ask first when the analysis is contested between
native speakers", and never post again on a contested point without checking first), this
stays open for the owner, and the reply posted to the thread does not take a side.
baharoon's original grammatical claim (that `صحيح` is "grammatically incorrect" here) is
also still unsupported by anything beyond assertion; humam-hamdan's post 12 restates it as
a question of which antonym pair is idiomatic, which is a different and weaker claim.

### 2026-08-06: Translation engine confirmed as DeepSeek (t/886)

**Decided by:** native speaker humam-hamdan, forum topic 886
("[Arabic Review] Alternative translation model", https://forum.jiki.io/t/886/5), replying to
iHiD's direct question asking him to compare the two candidate versions.

This thread is one of the pre-convention, unlabelled engine-comparison posts from
2026-08-01 (same generating scripts as ja t/887, ko t/885, zh-CN t/888, zh-TW t/902, uk t/903
— see the general mapping in memory). For this batch: **post #1 = gemini-3.1-pro-preview,
post #2 = deepseek-v4-pro**, and the thread's opening post links the then-published (fable)
version for a three-way comparison. humam-hamdan: "So we have the TL from Post 1 and from
Post 2, post 2 is hands down, w/o discussion better." That is a DeepSeek verdict.

**Actioned:** `languages/ar/tracking.json` → `translation_engine: {engine: deepseek, model:
deepseek-v4-pro}`. Arabic was previously unset (stage `setup`, no engine chosen yet), so this
is the language's first engine decision, not a switch.



**Decided by:** baharoon, native-speaker reviewer, on the pinned glossary thread
(https://forum.jiki.io/t/470/3).

**Actioned:** the `pitfall` row was written as `فخ (شائع)`, with شائع in parentheses as if
it were an optional qualifier. baharoon pointed out this is wrong regardless of which
translation wins: the term (whichever wording is used) is a fixed two-word phrase, not
"trap" alone. Fixed the row to `فخ شائع` (no parentheses). This is a formatting correction
only; it does not change the word choice, which stays as previously decided ("common trap
is concrete and natural, matches the informal register", see Term rationale below) pending
resolution of the open question below.

**Left open, not actioned (need more discussion before any target rendering changes):**

- **streak** (`سلسلة الأيام`): baharoon finds this unnatural read literally ("chain of
  days") and suggests `الاستمرارية` or `المواظبة`, tentatively, without committing to
  either ("if it can be clear what the streak is about I can come up with a better
  descriptive term"). The current rendering is not an isolated choice: it is one leg of a
  deliberate three-way `سلسلة` qualification scheme (`سلسلة الحلقات` for the array
  metaphor, `سلسلة نصية` for string, `سلسلة الأيام` for streak) documented further down in
  this file under "The سلسلة collision" (and in `guide.md` § "The سلسلة collision"), chosen
  specifically so the three senses stay distinct. baharoon's
  post does not address that constraint. Needs a reviewer who can propose a term that both
  reads naturally and keeps the three-way distinction, or an explicit decision to break the
  scheme.
- **pitfall** (word choice, as opposed to the formatting fix above): baharoon suggests
  `خطأ شائع` ("common mistake") over the current `فخ شائع` ("common trap"), but
  explicitly says the current term "isn't incorrect", just less commonly used in a
  learning-warning context. This is a register preference, not a correction, and runs
  against the documented reason for the current choice (see Term rationale below). Left for
  discussion rather than actioned.
- **true / false** (`صحيح / خطأ`): baharoon states `صحيح` is grammatically incorrect here
  and offers two alternatives, `صواب/خطأ` or `صح/خطأ`, without picking between them. The
  grammatical claim may well be right, but with no single proposed replacement this is not
  yet a clean, actionable correction. Needs the reviewer (or another native speaker) to
  settle on one of the two before either or another are written to the glossary.

baharoon also said more corrections are coming, "hopefully by this weekend" (post is dated
2026-08-05/06).

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`.

Agreed independently across chunk workers:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| ~~dashboard~~ | ~~لوحة التحكم~~ | **Confirmed by mirina, t/795/7 (2026-08-24), moved to `glossary.md`.** | ~~medium~~ |
| Premium (tier name) | kept Latin | | medium |
| concept | مفهوم | | medium |
| unlock | فتح | | medium |
| upgrade | ترقية | | medium |
| locked / unlocked | مقفل / مفتوح | | medium |
| in progress | قيد التقدم | | medium |
| badge | شارة | | medium |
| sign up | سجّل | | medium |
| milestone | محطة | | medium |
| scrubber | شريط التنقّل | | low |
| Spotlight mode | وضع التركيز | | low |
| method | تابع | | medium |

Two disagreements needing a call before a tidy pass (feature names, recur across namespaces):

| English | Options | Notes |
|---------|---------|-------|
| Deep Dive | الشرح المتعمّق / شرح متعمّق / kept Latin | |
| challenge | تحدٍّ / تحدي | |

Other flags: "Projects" was rendered المشاريع (generic noun) — needs pinning if it's a
branded feature name like "Learn to Build". "Agentic Coding" (footer) has no settled Arabic
term; rendered البرمجة بالوكلاء الذكيين, low confidence. The "bug" keep-in-English glossary
row produces a bare Latin token inside short RTL chips (e.g. "كيفية إصلاح bug"); reviewers may
object, but that's the existing glossary policy, not new to this pass.

**FE flag:** `layout.internalHeader.backToJiki` has a hard-coded `→` in the string, which
points the wrong way in RTL. Move the arrow out of the copy or make the component
direction-aware.

### 2026-08-01: Guide contradiction resolved (first-occurrence auto-gloss)

**Decided by:** agent, applying `global/voice.md` as the higher authority. **Terms
affected:** none.

The guide's "Loanword policy" told the translator to add a one-time English gloss in
parentheses on a jargon term's **first occurrence per file** (_دالة (function)_, then
_دالة_). `global/voice.md` says a gloss is triggered **only** by a `<define>` tag placed by
the author ("there is no first-use auto-detection"), and its no-auto-gloss rule forbids
parenthesising a term on your own initiative; the tidy pass in `global/translating.md` lists
such an auto-gloss as something to remove. The global files outrank the language guide, so
the first-occurrence trigger is gone.

Nothing behavioural was lost. The judgement the bullet carried, which terms are worth
glossing at all (genuine CS jargon a reader must map onto English in code and docs, not
ordinary words like condition, comparison or value, tested by "would a non-programmer
already know this Arabic word?"), was kept in full and re-attached to `<define>` expansion,
where it now serves `voice.md`'s "skip a gloss that would teach nothing". No glossary row was
touched: the `API` row's "glossed once" wording is already `<define>`-conditioned, as is the
`CLI` row. No acronym clause was added, because the Arabic guide never had one to keep.

### 2026-08-01: Guide stripped of research provenance and rationale

**Decided by:** agent, on an audit of `guide.md` against `orchestrator.md` § "Where each
piece of the feedback goes". The guide is loaded into the prompt for every Arabic item in
every pass, and roughly a third of it was a record of the research that produced the rules
rather than the rules themselves. Every instruction was kept; only the supporting material
moved here. Nothing was added, and no glossary row was reworded or removed.

**The research behind the register and mechanical decisions.** The sources surveyed at
bootstrap, and cited in the guide until now, were: Khan Academy Arabic (أكاديمية خان),
freeCodeCamp's Arabic curriculum, Hsoub Academy (أكاديمية حسوب, a long-running pan-Arab
dev-education publisher), ar.javascript.info, and Arabic Wikipedia's CS articles. What
each one settled:

- **MSA, single locale.** MSA (الفصحى) is the standard register for pan-Arab educational
  and technical content, confirmed by every reference checked. Regional dialects
  (Egyptian, Gulf, Levantine, Maghrebi) are reserved for marketing and spoken contexts.
  There was never a dialect decision to make: `ar` targets MSA for everyone.
- **Modern, not classical, MSA.** Hsoub Academy and ar.javascript.info both write short
  sentences, direct address, everyday vocabulary and established technical loanwords.
  Ornate classical constructions, rare vocabulary and dense literary subordination read
  as distant and hard to follow for a beginner, which is why the guide bans them.
- **SVO word order.** MSA allows both VSO (classical-leaning) and SVO (modern
  journalistic); real Arabic tech-education prose consistently favours SVO because it
  reads more directly and matches how technical claims are framed.
- **Masculine default for generic "you".** This is the standard convention in Arabic
  software localization (Google, Microsoft and Facebook Arabic products all default this
  way). It is not a comment on the reader's actual gender.
- **Western digits.** Every source checked uses Western Arabic digits (0-9) for numbers
  and code. This is also the norm across most of the Mashriq and Gulf in tech/software
  contexts specifically (Eastern Arabic-Indic digits ٠-٩ remain common in some print and
  formal contexts), and Western digits dominate in the Maghreb generally.
- **No manual bidi marks around embedded code.** Hsoub Academy and ar.javascript.info
  embed English code and keywords directly in running RTL Arabic prose with no
  directional-override characters and no `<bdi>`-style wrapping in the source; the
  renderer's bidi algorithm copes. What those sources rely on instead, and what the guide
  therefore mandates, is code styling: the monospace run is what visually separates an
  embedded LTR token from the Arabic around it.
- **Arabize by default.** The audience's average English proficiency is lower here than in
  several other Jiki markets outside Gulf elites, so Arabic leans further toward full
  Arabization than some other language guides. `string` (سلسلة نصية) and `Boolean` (قيمة
  منطقية) are fully Arabized in real Arabic CS materials, unlike in some Jiki languages
  that keep such terms in English with a gloss. This is why the "Keep in English" list is
  deliberately short, and why **API** is the notable exception: every Arabic tech source
  checked keeps the Latin acronym even in Arabic sentences, expanding it once
  ("واجهة برمجة التطبيقات (API)") rather than replacing it in running prose.

**The سلسلة collision.** The guide keeps the rule (never bare سلسلة, always the qualified
compound); the sourcing is here. It is a real collision, not a stylistic quibble: Arabic
Wikipedia and every Arabic programming tutorial checked use سلسلة نصية for "string", while
سلسلة alone is the ordinary word for a physical chain, and Jiki uses "chain" as the
load-bearing metaphor for arrays. The three renderings (سلسلة الحلقات for the array
metaphor, سلسلة نصية for string, سلسلة الأيام for streak) read as clearly distinct once
qualified, which is why qualification is mandatory rather than optional. Each is a
glossary row and no longer duplicated in the guide.

**`الكود` versus the purist forms.** The guide's prose ruling out `شيفرة`/`رمز` moved into
the `code` glossary row's Notes, unchanged in substance; the reasoning is in the
2026-07-30 entry below.

**Cut as duplication, not as content:** the guide's restatements of `global/rules.md`
(code and inline backticks are byte-for-byte; keywords stay English; product names are
never translated) and of `global/voice.md` (translate intent not words; explain acronyms
in the target language; specific calls to action). The "CLI" and "PPP pricing" worked
examples went with them: CLI is a glossary row, and PPP was only an illustration of the
`voice.md` acronym principle.

**Left alone deliberately, and flagged for a human:** the guide's "one-time English gloss
in parentheses on first occurrence per file" rule predates the `<define>`/`<literal>`
source-markup model and contradicts `global/voice.md` § "Never auto-gloss". It was kept
verbatim (minus a cross-reference to Hungarian) because resolving that is a decision for
the owner, not an audit.

### 2026-07-31: Pruned of ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed 45
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
| pitfall | The original `فخ شائع` ("common trap") was chosen as concrete and natural, matching the informal register. Superseded on 2026-08-07 by `خطأ شائع`; see the dated entry at the top of this file. |

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
| return chute | `مجرى` (channel/duct) + `الإخراج` (output, the agreed term). On 2026-08-21 this superseded the earlier `مزلقة الإخراج` ("slide"); see the dated entry at the top of this file. |
| machine | Plain, concrete word for a machine. |
| shelves | Plain, concrete, everyday word. |
| warehouse | Everyday word for a warehouse. |
| crank | Concrete and everyday word for the handle, not the transliteration `كرنك`. |
