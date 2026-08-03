---
lang: "fa"
name: "Persian"
family: null
stage: "refining"
governance_sha: "ba33763"
content_version: "5ae2a6f3a944"
published_at: "2026-08-03"
term_count: 38
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
| Boolean | منطقی | fa | Where a noun is needed, write «مقدار منطقی» / «مقادیر منطقی» (boolean value/values); منطقی is an ordinary Persian word and reads naturally however often it repeats. **بولی may be named once, and only once**, on the page that first introduces the concept, so a learner recognizes the word elsewhere in the Iranian ecosystem; every mention after that is منطقی. **Never pluralize بولی as «بولی‌ها»** on that one mention: it is an adjective and takes no plural marker. Keep «مقادیر منطقی» (boolean values) distinct from «عملگرهای منطقی» (logical operators), which is a different thing. |
| pair (key/value, in a dictionary) | جفت | fa | The key-and-value unit on a dictionary page: «چندین جفت» (several pairs), «هر جفت» (each pair). Never زوج. |
| item / element (of an array) | عنصر | fa | **One word for both.** English's "item" and "element" name the same thing on the arrays material, and Persian uses عنصر for both; **never آیتم**, which is a bare transliteration where an ordinary Persian word exists. Plural عنصرها/عناصر. |

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
| instruction (given to Jiki) | دستورالعمل | fa | Plural دستورالعمل‌ها. **Native speaker's decision; do not revert to دستور.** Keep it distinct from **statement** («دستور», as in دستور شرطی for an if statement and «دستور `repeat`»): a statement is a piece of code syntax and stays دستور, an instruction the learner gives Jiki is دستورالعمل. |

### Drawing & colour

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| hue (the H of HSL) | فام | fa | **One term everywhere; never رنگ‌مایه.** Applies in prose, hints, check messages and function descriptions alike. Saturation stays اشباع and lightness روشنایی. |
| draw (a shape) | رسم کردن | fa | **Never کشیدن**, which also reads as "pull". Use رسم کنید for an instruction to the learner, رسم می‌کند for a function description, and رسم شد for a timeline describer. کشیدن is still fine in its non-drawing senses. |
| canvas (the drawing surface) | بوم | fa | The surface the drawing exercises paint on. Keep distinct from تخته (board/whiteboard) below, which is Jiki's instruction board: they are two different objects and must not share a word. |

### Platform & curriculum vocabulary

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| name (of a person, variable, key) | اسم | fa | **Never نام**, in any construction: «به اسم» (called), «با اسم» (with the name), and possessives («اسمم», my name). |
| course | دوره | fa | The whole Jiki course ("در این دوره"). Keep distinct from درس (lesson) and برنامه‌ی درسی (curriculum). |
| choice (the thing chosen) | گزینه | fa | The **noun**: a player's choice, one of the valid choices. The verb "to choose" stays انتخاب کردن, so «قیچی را انتخاب می‌کنند» is correct; only the noun انتخاب is wrong. |
| Jiki | جیکی | fa | The interpreter character and the course's name. Written in Persian script in all prose, unlike the product/language names in the "Keep in English" table (JavaScript, Python, React), which stay Latin. Ezāfe and possessives attach as to any Persian noun («انبار جیکی»). Consistent with «جیکی کوچولو» (mini-Jiki) below. Branded sub-product names (Ask Jiki, Jiki Premium) translate like ordinary UI copy now, per the guide; "Ask Jiki" renders as «از جیکی بپرسید». |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Persian gloss below.

| Term | Persian gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | رابط برنامه‌نویسی کاربردی | Not a word a beginner knows; where defined, explain the concept in Persian, not just gloss the acronym. |
| CLI (the concept) | رابط خط فرمان | Explain as "command-line interface" where the source defines it. |
| AI | هوش مصنوعی | Use "AI" (English) in prose/marketing, not هوش مصنوعی throughout. Gloss it in Persian only where the source `<define>`s it, never on first use of your own initiative. Flag for confirmation once real content surfaces whether this matches how Iranian users actually talk about AI features. |
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

### 2026-08-03: "name" is اسم, not نام; dictionary pairs are جفت

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/1106), actioned by an
agent the same day. **Terms affected:** the new `name` and `pair` rows.
**Protected: اسم is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Dictionaries concept page, he asked to "replace all نام with اسم". Both words
mean "name" and both are ordinary Persian, but نام is the more literary register and اسم is
what people say. The course is spoken-voice throughout, so اسم is the one that matches how
the material sounds, and "name" recurs constantly (the `name` key, variable names, function
names), which is why it earns a row rather than a one-page fix. The row covers every
construction, including «به اسم» where نام is the more common bookish default.

جفت (pair) came out of the same review, on the sentence introducing key-value pairs. It was
not previously in the glossary and will recur across all the dictionary material, so it is
recorded now. جفت is the everyday word for a pair of matched things; زوج is the alternative
and was not used, since it carries a "couple/spouse" reading in ordinary speech.

The same review also produced sentence-level rewording on that page (chain in the singular,
a reordered opening, an added چون, «و الی آخر» for "and so on"), which is item-specific and
so is recorded in `languages/fa/concept/dictionaries.md` rather than here.

### 2026-08-03: Boolean is منطقی, not بولی

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/1095), actioned by an
agent the same day. **Terms affected:** the `Boolean` row, and `guide.md`'s "Boolean values
go in guillemets" rule.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**
It **supersedes the "open, not decided" note in the entry below**, which left this pending.

His words: *"A big change for boolean: I accepted to use بولی for boolean translation. But I
regret choosing that word. If you want to use it one time or just a couple of times, yeah;
But if you want to write it again and again, it's awful to use بولی in the text. I strongly
suggest منطقی instead of بولی."*

The reason is grammatical, not stylistic. بولی is a bare transliteration doing the work of an
adjective, and Persian adjectives do not inflect or pluralize naturally, which is why
«بولی‌ها» had to be banned as a plural on the Arrays page the same day (entry below). Every
place the material needed a plural or an ezafe, the word had to be worked around. منطقی is an
ordinary Persian adjective, so «مقدار منطقی» / «مقادیر منطقی» behave like any other Persian
noun phrase and read naturally however often they repeat, which on this material is often.

**This corrects the agent's own bootstrap research, not a human decision.** بولی came from
Persian Wikipedia's «نوع داده بولی» during the bootstrap (see the "Values & data types" term
rationale below, now amended); no dated entry in this log ever recorded a native speaker
choosing it. mominchezgi's own "I accepted to use بولی" refers to not objecting earlier, and
he is the person withdrawing it. Nobody has argued the other way.

بولی is kept, named **once**, on the page that first introduces the concept (the `if` concept
page), because it is what a learner will meet on Persian Wikipedia, Quera and Faradars.
Everywhere after that first naming the term is منطقی. That is the mirror image of the row's
previous structure, with the two terms swapped in priority.

One collision to watch, recorded on the row: «مقادیر منطقی» (boolean values) and «عملگرهای
منطقی» (logical operators, already in the JavaScript interpreter catalog) are different
things and must keep their distinguishing noun.

### 2026-08-03: چیز is never the default word for "thing"

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/1097), actioned by an
agent the same day. **Terms affected:** none; this is a writing rule, not a term mapping.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

He asked for the point to be a standing rule rather than a per-page correction: English uses
"thing/things/anything" far more freely than Persian uses چیز, so translating it 1:1 stacks
چیز through a paragraph and reads as filler. The instruction is to understand what the
sentence actually means and pick the specific word, and where nothing specific fits, to
prefer a construction that drops the noun («می‌توانند هرچه باشند») over another چیز. The
same point had already been recorded once as a per-page reviewer note on
`concept/using-functions`; it is now an imperative in `guide.md`, "Grammar", and the
per-page note stands as the worked examples for it.

### 2026-08-03: Arrays page corrections (عنصر, بولی plural, bare ordinals)

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/1095), actioned by an
agent the same day. **Terms affected:** the `Boolean` row's plural note and the new
`item / element (of an array)` row.
**Protected: both are a native speaker's decisions and are not to be reversed by an agent.**

- **item/element → عنصر, never آیتم.** He asked for آیتم to be replaced with عنصر
  throughout the Arrays concept page. The page was already using عنصر for the `<define>`d
  "element" and آیتم for English's "item", which are the same thing in this material, so the
  fix is one word for both rather than a two-term split. آیتم was the only Persian content
  anywhere using it (swept: the Arrays page was the sole occurrence across all translated
  Persian files), so the row records a decision rather than triggering a cross-content sweep.
- **بولی takes no plural marker.** «بولی‌ها» is wrong because بولی is an adjective; where
  English writes "Booleans" the Persian is «مقادیر بولی» (boolean values). Recorded on the
  existing `Boolean` row.
- **A bare ordinal or adjective needs its noun.** He flagged «اگر بخواهیم اولین را بیرون
  بیاوریم» (it needs «اولین عنصر»), and made the same point a second time on the thread, so
  it is generalized into `guide.md`, "Grammar", rather than fixed only in place.
- **«درست»/«غلط» in guillemets in a boolean context.** Already a standing rule in
  `guide.md`'s "Style notes" ("Boolean values go in guillemets"); the Arrays page simply was
  not following it. Nothing new was written, the page was corrected.
- **No comma before و.** Likewise already a `guide.md` rule; three violations on the page
  were fixed, two by starting a new sentence.

**Open, not decided: he proposes replacing بولی with منطقی.** That reverses a bootstrap
decision and is deliberately left untouched here, pending a human call. See the `Boolean`
row and the "Values & data types" term rationale below for the existing reasoning.

### 2026-08-03: No English term in brackets after a Persian term, ever

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/752, posts 11-13),
ratified by the owner (iHiD) on 2026-08-03 and actioned by an agent the same day. **Terms
affected:** none; this is a formatting rule, not a term mapping. **Protected: this is a
native speaker's decision and is not to be reversed by an agent.**

mominchezgi objected twice, on the same thread, to the parenthetical-English pattern that
`global/voice.md`'s markup expansion produces for a target-primary term, e.g. «توابع
(_functions_ به انگلیسی)»: *"Sadly I see this ... Please never ever use them"*. Everything
else he raised on that thread had been fixed; this one had not, and our reply on the thread
had defended it as a course-wide styling decision instead. It is not one that survives a
native speaker saying "never ever": the guide defers to the human.

- **`guide.md`, "Term clarification (Persian realisation)".** The Persian-primary bullet no
  longer produces a bracket. It now states the override explicitly, because a worker loads
  `voice.md` as well as the guide and would otherwise follow `voice.md`'s default: Persian
  never appends an English term in brackets after a Persian term, and never writes the
  marker `به انگلیسی` at all, in any content type, whether or not the source `<define>`s
  the term.
- **What is kept.** The two bracket forms whose brackets carry *Persian* are unaffected,
  because the objection was to being shown English the reader did not ask for: an
  English-primary term still glosses into Persian (`_API_ (رابط برنامه‌نویسی کاربردی)`), and
  a code identifier still carries its Persian meaning (`` `turnLeft` `` (به چپ بچرخ)).
- **`guide.md`, "Loanword policy".** The bullet that permitted a bracketed English gloss
  where the source has a `<define>` (itself the narrowed form of the older first-use rule,
  see 2026-08-01 below) is replaced by the flat prohibition.
- **Existing content swept.** 33 occurrences removed across 12 already-translated Persian
  files (10 concept pages, 2 exercise instruction pages). "Never ever" is not a per-page
  request, so the sweep covered everything already translated, not just
  `concepts/using-functions`.
- **Expected checker noise.** `check-translation`'s gloss-count check is a heuristic that
  compares bracketed glosses against the source's `<define>`/`<literal>` count, so Persian
  pages will now WARN with a lower gloss count than tags. That is the rule working, not a
  failure. It is a WARN and never gates a pass.

### 2026-08-03: Hue is فام; "draw" is رسم کردن; "choice" (noun) is گزینه

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/916/4 and
https://forum.jiki.io/t/916/5), actioned by an agent on 2026-08-03. **Terms affected:** the
new `hue`, `draw (a shape)`, `canvas` and `choice` rows.
**Protected: `hue`, `draw` and `choice` are a native speaker's decisions and are not to be
reversed by an agent.** `canvas` (بوم) is the agent's own drafting, see below.

- **hue → فام.** The Rainbow exercise used رنگ‌مایه in its instructions and its own catalog
  but فام in the shared `draw` category catalog, and mominchezgi asked for one term so the
  reader is not left guessing whether they are the same thing. فام is the settled Persian
  equivalent: Persian Wikipedia's article on Hue is titled فام, and its اچ‌اس‌ال و اچ‌اس‌وی
  (HSL/HSV) article names the H component فام رنگی. رنگ‌مایه appears in neither and reads
  closer to "tint/tone", which is a different colour property. Every occurrence in Persian
  content was swept to فام.
- **draw → رسم کردن.** mominchezgi flagged «رنگین‌کمان را بکشید» as ambiguous, because
  کشیدن means both "draw" and "pull". رسم کردن carries only the drawing sense. Applied to
  the task and scenario names, the hints, the instruction prose, the `rectangle` function
  description and its category label.
- **choice (noun) → گزینه.** mominchezgi asked for گزینه rather than انتخاب, quoting the
  `getYukiChoice` describer. The verb is untouched: انتخاب کردن is still how a player
  chooses, and only the noun moved.

**canvas → بوم is the agent's own drafting, and is a deliberate departure from the wording
mominchezgi suggested.** He asked for «بوم را پاک کرد» to be restructured to «الان تخته
خالی است». The restructure was applied, but with بوم kept rather than تخته, because تخته is
already the agreed word for Jiki's instruction board (the 2026-07-30 owner decision below,
whose whole point is that one board is one word), and بوم is what the Rainbow task
description already calls the drawing surface. Using تخته for the canvas would have created
exactly the one-thing-two-words problem he raised about hue, one row further down. The
string now reads «الان بوم خالی است». **This needs his confirmation**; if he wants تخته
after all, that is a decision about the board row too, not just this string.

### 2026-08-02: "instruction" is دستورالعمل, not دستور

**Decided by:** native speaker mominchezgi (https://forum.jiki.io/t/1036/2), actioned by an
agent the same day. **Terms affected:** the `instruction (given to Jiki)` row.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

The row previously said دستور, with a note explicitly rejecting دستورالعمل as reading like
an official manual. That note was an agent's own judgement at bootstrap, never a native
speaker's; mominchezgi asked plainly for the opposite ("don't translate instruction to
دستور, translate it to دستورالعمل") after reading the live pages, so the reviewer's call
stands and the note has been rewritten.

The overlap the old note called deliberate is now a distinction worth keeping: **statement**
stays دستور (دستور شرطی for an if statement, «دستور `repeat`»), because it names a piece of
code syntax, while an **instruction** the learner hands Jiki is دستورالعمل. Nothing that
translates "statement" was changed, in the curriculum or in the JavaScript interpreter's
error catalog (which uses دستور throughout for `statement`, correctly).

### 2026-08-02: "scenario" (سناریو) queried, left open

**Raised by:** native speaker mominchezgi (https://forum.jiki.io/t/1036/2), who disliked the
transliteration سناریو in the app's exercise UI and asked for "a more common and better
word" without naming one. **Status: open, no glossary row written.**

Recorded here so a future pass does not quietly invent a replacement. A Jiki scenario is one
named situation an exercise runs the learner's code against (its own maze, its own inputs),
and the word has to carry every one of «تمام سناریوها با موفقیت انجام شدند» (All Scenarios
Passed), «گزارش سناریو» (Scenario Log) and «یک سناریوی امتیازی» (a bonus scenario). The
obvious candidates each fail on at least one of those: حالت reads as "mode" in «یک حالت
امتیازی» and as "state" in «گزارش حالت»; مورد is too vague to head a panel; آزمون/تست reads
naturally everywhere but renames the product concept into "test", which is a teaching
decision (Jiki deliberately does not call these tests to beginners) and not a translator's
to make. mominchezgi has been asked on the thread to pick.

### 2026-08-01: Guide and glossary contradiction resolved (first-use auto-gloss)

**Decided by:** agent, applying `global/voice.md` as the higher authority. **Terms
affected:** `AI` (Notes column only; the term and its Persian gloss are unchanged).

Two places told the translator to gloss on first use, which `global/voice.md` forbids:
glossing is triggered **only** by a `<define>` tag in the source, and the tidy pass in
`global/translating.md` lists an unprompted parenthetical as something to remove. `voice.md`
outranks the guide, so both were repointed at `<define>`.

- **Guide, "Loanword policy".** "Gloss the English term once per file on first occurrence"
  ("تابع (function)" then "تابع") is replaced by the `<define>`-only rule. The test it
  carried, which terms deserve a gloss at all (genuine CS jargon yes; a word a
  non-programmer already knows, no), was kept in full and re-attached to `<define>`
  expansion, where it serves `voice.md`'s "skip a gloss that would teach nothing".
- **Guide, "Keep in English".** The Latin-script term list said those terms were "glossed
  once in Persian on first use". The list itself is unchanged. The gloss instruction is now
  split: an acronym in that list is still explained in Persian rather than left bare or
  transliterated, because `global/voice.md` mandates that separately under "Acronyms and
  foreign terms"; any other bracketed gloss comes only from a `<define>`.
- **Glossary, `AI` row.** "Gloss once on first use per the glossary" now reads "Gloss it in
  Persian only where the source `<define>`s it, never on first use of your own initiative".
  The decision (English "AI" in prose, هوش مصنوعی as the gloss, flagged for native-speaker
  confirmation) is untouched.

### 2026-08-01: Rationale moved out of `guide.md`

**Decided by:** owner (iHiD), as a guide audit. No rule changed; nothing was re-decided.
`guide.md` is loaded into the prompt for every Persian item in every pass, so the reasoning
behind its rules was moved here and the rules themselves left stated imperatively. About a
third of the file was record-of-the-conversation rather than instruction. What was removed,
and why each choice was made, is below so none of it is lost.

**Where the research came from.** Persian has no Duolingo course and no Duolingo site UI at
all (checked, absent), so unlike most Jiki languages there is no Duolingo tone to benchmark
against; this is the same position as Urdu. The guide was instead built from real Persian
tech-education writing: Quera (quera.org/blog) and Faradars (blog.faradars.org), both
long-running, human-authored Iranian CS-education publishers, cross-checked against Persian
Wikipedia's programming articles and its own house style manual.

**Why formal شما, not informal تو.** This looks like a departure from other Jiki languages'
"use the informal register", and is not. Quera and Faradars, both checked directly,
consistently address the reader with شما, never تو. From an unfamiliar voice like Jiki's,
تو reads as presumptuous rather than warm; شما is the actual modern, everyday-appropriate
register for this kind of instructional writing, not a formality downgrade. Same correction
Urdu documents for Urdu.

**Why Persian-native digits.** Explicit, sourced Persian Wikipedia house style
(ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها و اعداد), corroborated by real tutorial prose (Faradars) and by
Persian Wikipedia's own CS articles. This is the **opposite** convention from Arabic and
Urdu in this repo (both use Western digits): a genuine, deliberate per-language difference,
not an inconsistency for anyone to "fix" later.

**Video-player numerals are an app problem, not a translation one.** UI chrome numerals a
translator never touches, such as the video player's time/duration readout, still
conventionally read as Farsi digits for a Persian audience. That readout is rendered by the
third-party Mux player component (`app/components/ui/JikiMuxPlayer.tsx` in front-end), not
by any translated content, so it is app-level locale-aware number formatting work.

**Why no manual bidi markup.** Real Persian technical sources embed English code and
keywords directly in running RTL prose with no inserted directional-override characters and
rely on the renderer's bidi algorithm, so the guide requires the same.

**Why native Persian primary for core CS vocabulary.** Unlike Arabic (which leans toward
heavy Arabization of nearly everything, given a lower average English proficiency in that
audience), Persian already has comfortable, settled, non-awkward native terms for
programming fundamentals in real everyday use (تابع, متغیر, حلقه, آرایه, رشته, اندیس). These
are not stiff or mocked Academy calques the way some consumer-tech coinages are (compare
دندان آبی for Bluetooth); they are the ordinary words real Iranian developers and CS
educators use.

**Why one link of the chain is never حلقه.** زنجیر is the ordinary, concrete Persian word
for a physical chain and is safe unqualified for the array metaphor as a whole. But the
natural Persian word for one *link* of a chain is حلقه, which is the settled term for
**loop**. Arrays and loops are taught close together, so a bare حلقه for a chain link risks
real confusion between two concepts on one page, hence دانه (bead) or قطعه (segment)
instead. زنجیر itself is never at risk; only "link" is. The rule itself already lives on the
`loop` and `chain` glossary rows, so the guide's copy of it was redundant and was dropped.

**Why Persian guillemets.** «…» are the standard Persian quotation marks (Persian Wikipedia
house style, and universal in Quera/Faradars prose).

**Two native-speaker flags whose rules stay in the guide.** A native speaker flagged the
doubled این in «هدف این تمرین این است» as an audible duplication, and flagged a named UI
element left unquoted in prose as ambiguous (hence wrapping such names in «…»). The rules
are in the guide; the attribution is here.

**Owner precedents.** Product/strand names (descriptive strand names translated, coined and
branded names kept English) and AI terminology (use "AI" in prose, glossed once as
هوش مصنوعی) were both owner decisions following the Hungarian precedent. The AI section was
dropped from the guide entirely because the glossary's `AI` row already carries the same
instruction word for word. The two strand-name renderings in the guide («برنامه‌نویسی یاد
بگیرید», «ساختن یاد بگیرید») are still unconfirmed drafts and worth checking with a native
speaker on their first real use; the guide's inline "confirm on first use" aside was dropped
because the engine that reads the guide has no channel to report on.

**Jiki's name.** The guide's account of the جیکی decision (the forum thread, the reviewer,
the date) duplicated the entry immediately below, which remains the record.

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
covered by a dated entry above (`board / whiteboard`, `interpreter`, `Boolean`) is not
repeated here.

#### Values & data types

| Term | Why |
|------|-----|
| array | Standard Persian CS term; confirmed via Persian Wikipedia, Faradars, sariasan. |
| index (array index) | Dominant generic CS term for an array index; confirmed via Persian Wikipedia, Faradars. |
| string | Already the comfortable, established primary Persian term (unlike some other Jiki languages that keep "string" in English); confirmed via general Persian CS usage. |

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
