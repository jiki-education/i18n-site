---
lang: "ar"
name: "Arabic"
family: null
stage: "refining"
governance_sha: "4a1b8b3"
content_version: "49acf765a06d"
published_at: "2026-08-09"
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
| streak | **المواظبة** | ar | Use the single word; do not render streak with سلسلة. Where the sense needs pinning down, say what is being kept up in the surrounding sentence rather than qualifying the term. |
| pitfall | **خطأ شائع** | ar | "Common mistake", not "common trap": both words are mandatory as a set phrase. Do not use فخ شائع. |
| code | **الكود** | ar | Use `الكود` in prose. The purist `شيفرة`/`رمز` is the wrong direction. The Latin form stays only inside code and for the `Debug`/`Test` tokens. |

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
| brackets (the two after a function name) | الهلالان (الهلالَين) | ar | The round pair `()` written after a function name to call it. Arabic has a dual, so use it: nominative `الهلالان`, oblique `الهلالَين` ("كتبت `move` ثم الهلالَين"). Confirmed by humam-hamdan (t/470/16): `()` is `هلالان`, not `قوسان`, since `قوس` is reserved for `{}` in the Brackets table below. |

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

Confirmed by humam-hamdan (t/470/16): each bracket type gets its own word, no shared default.

| Glyph | Arabic | Notes |
|-------|--------|-------|
| `()` | هلال · هلالان (dual: هلالَين) | See the `brackets (the two after a function name)` row above; this is the pair after a function call. |
| `[]` | معقوف · معقوفان (dual: معقوفَين) | |
| `{}` | قوس · قوسان (dual: قوسَين) | Not `مجعد`. |
| `<>` | قوس زاوي | Not addressed by t/470/16; kept as previously agreed. |

---

## Decision log

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
| dashboard | لوحة التحكم | | medium |
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
| return chute | `مزلقة` is the everyday Arabic word for a slide (as in a playground slide), the same physical image as a vending-machine dispensing chute, + `الإخراج` (output, the agreed term). |
| machine | Plain, concrete word for a machine. |
| shelves | Plain, concrete, everyday word. |
| warehouse | Everyday word for a warehouse. |
| crank | Concrete and everyday word for the handle, not the transliteration `كرنك`. |
