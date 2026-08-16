---
lang: "bn"
name: "Bengali"
family: null
stage: "refining"
governance_sha: "22c97e3"
content_version: "b3f0fc2c2ace"
published_at: "2026-08-16"
term_count: 68
category_id: 234
forum_topic_id: 473
video_player_forum_topic_id: 743
---

# Bangla (bn) glossary

The agreed term list for Bangla. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| programming / coding | প্রোগ্রামিং | bn | |
| developer | ডেভেলপার | bn | |
| streak | ধারাবাহিকতা | bn | Daily-use-streak sense (learning-platform). Not phonetically self-evident, so it takes the `<define>` gloss (see guide § Glossing a `<define>`). |
| tech / tech industry | টেক ইন্ডাস্ট্রি | bn | |
| pitfall | বিপদ | bn | Takes the `<define>` gloss. |

## Localize (use the Bangla term)

Bangla renders core CS vocabulary as English loanwords transliterated into Bengali script.
Ordinary, everyday vocabulary (including curriculum and pedagogy words) uses the ordinary
Bangla word. Which default applies to which kind of term is set out in the guide
(§ Terminology and code-switching); this file records the resulting choice per term. Split
by theme for readability; every table below follows the same columns.

### Values & data types

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| value | মান | bn | |
| number | সংখ্যা | bn | |
| true / false | ট্রু / ফলস | bn | Not capitalized in prose. |
| character | ক্যারেক্টার | bn | |
| integer | ইন্টিজার | bn | |
| float / decimal | ফ্লোট / দশমিক সংখ্যা | bn | ফ্লোট (loanword) when the floating-point nature matters; দশমিক সংখ্যা ("decimal number", ordinary compound) otherwise. |
| string | স্ট্রিং | bn | |
| Boolean | বুলিয়ান | bn | |
| data type | ডেটা টাইপ | bn | |
| array / list | অ্যারে | bn | |

### Functions & control flow

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| condition | শর্ত | bn | Not phonetically self-evident, so it takes the `<define>` gloss. |
| if statement | `if` স্টেটমেন্ট | bn | Keep the keyword `if` in code font (it is a real keyword); pair with স্টেটমেন্ট. |
| comparison | তুলনা | bn | Stands alone; no gloss needed. |
| expression | এক্সপ্রেশন | bn | |
| operator | অপারেটর | bn | |
| statement (executable) | স্টেটমেন্ট | bn | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | বিবৃতি | bn | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. Not phonetically self-evident, so it takes the `<define>` gloss. |
| function | ফাংশন | bn | The *keyword* `function` in code stays English; the concept in prose is ফাংশন. |
| to call (a function) | কল করা | bn | Loanword verb via করা (see guide § Grammar). |
| to define (a function) | ডিফাইন করা | bn | Loanword verb via করা. |
| parameter | প্যারামিটার | bn | The declaration-site name. |
| argument | আর্গুমেন্ট | bn | The call-site value. Used near-interchangeably with parameter in casual Bangla dev writing, but keep them distinct per the English meanings. |
| input (to a function) | ইনপুট | bn | |
| output | আউটপুট | bn | |
| to return (a value) | রিটার্ন করা | bn | Loanword verb via করা. |
| return value | রিটার্ন ভ্যালু | bn | |
| brackets (the two after a function name) | বন্ধনী | bn | Use plain বন্ধনী for the `()` pair when the code is visible beside the prose ("তার নাম লিখবেন, তারপর ওই বন্ধনী দুটি"). Where the *kind* of bracket must be distinguished, use the standard Bangla maths names: প্রথম বন্ধনী `()`, দ্বিতীয় বন্ধনী `{}`, তৃতীয় বন্ধনী `[]`. |

### Loops, state & program flow

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| keyword | কিওয়ার্ড | bn | |
| interpreter | ইন্টারপ্রেটার | bn | **A person doing a job, not a program**: on concept pages Jiki *is* the interpreter ("এই কোর্সে আপনার ইন্টারপ্রেটার হলো জিকি"). Never add যন্ত্র or a similar device word, and do not reach for দোভাষী (a spoken-language interpreter). |
| instruction (given to Jiki) | নির্দেশ | bn | Not নির্দেশনা (guidance) and not the legal/administrative register আদেশ. E.g. "জিকিকে সঠিক নির্দেশ দেওয়া". |
| mental model | মানসিক মডেল | bn | |
| (programming) language | (প্রোগ্রামিং) ভাষা | bn | Use প্রোগ্রামিং ভাষা for the programming sense and plain ভাষা for "a language a computer understands". Never the transliteration ল্যাঙ্গুয়েজ, and never mix the two inside one page. |
| variable | ভ্যারিয়েবল | bn | |
| assignment | অ্যাসাইনমেন্ট | bn | Confirmed by native-speaker review (see notes). |
| to assign | অ্যাসাইন করা | bn | Loanword verb via করা. |
| code block | কোড ব্লক | bn | |
| loop | লুপ | bn | |
| error | এরর | bn | |
| nested | নেস্টেড | bn | Confirmed by native-speaker review (see notes). |
| iteration | ইটারেশন | bn | Confirmed by native-speaker review (see notes). |
| element | এলিমেন্ট | bn | On the chain metaphor specifically, see "Jiki physical metaphors" below for how an element is described. |
| class | ক্লাস | bn | |
| object | অবজেক্ট | bn | |
| to run / execute (code) | রান করা / চালানো | bn | রান করা (loanword verb) is standard; চালানো (native verb, "to run/operate") also natural, especially for "run a loop". Either is fine; do not mix both for the same sentence's action. |

### Platform & curriculum vocabulary

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| course | কোর্স | bn | Keep distinct from lesson and curriculum. |
| exercise | অনুশীলনী | bn | Curriculum and pedagogy vocabulary takes the ordinary Bangla word, not the transliteration default that applies to CS jargon (see guide § Terminology and code-switching). |
| greeting (email opener) | স্বাগতম! | bn | Never নমস্কার, which reads as a Hindu-coded religious greeting; Jiki is secular. Confirmed by native-speaker review (see notes). |

## Keep in English

These stay in Latin script in prose (acronyms and product/language names), per real Bangla
technical-writing convention, with the Bangla explanation to use for each (where the
source `<define>`s the term).

| Term | Bangla explanation (on `<define>`) | Notes |
|------|--------------------------------------|-------|
| API | "একটি প্রোগ্রাম অন্য প্রোগ্রামের সাথে কথা বলার নিয়ম" (the rules by which one program talks to another) | Not a word a beginner knows; explain the concept in Bangla, not just the acronym. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language.

| English metaphor | Bangla rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | বাক্স | |
| chain (array metaphor) | চেইন | An element sitting on the chain: চেইনের একটি অংশ ("a part/link of the chain"). Not independently source-confirmed; flagged for native-speaker review (a plausible native alternative is শিকল). |
| input slot | ইনপুট স্লট | Not independently source-confirmed; flagged for native-speaker review. |
| return chute | রিটার্ন স্লাইড | Flagged for native-speaker review, since "chute" and "playground slide" are close but not identical images. |
| machine (function metaphor) | মেশিন | A function modelled as a machine with an input slot and a return chute. |
| crank (machine crank) | হাতল | Cranking it to start the machine: হাতল ঘুরিয়ে চালু করা. |
| shelves (storage) | তাক | Jiki's machines sit on a তাক. |
| warehouse (Jiki's warehouse) | গুদাম | The place Jiki hangs out and keeps his machine shelf (জিকির গুদাম). |
| board / whiteboard | বোর্ড | **One object, one word.** The same বোর্ড is what the learner writes instructions on for Jiki to follow, and what a function keeps its own instructions and notes on. Never use হোয়াইটবোর্ড alongside it; never invent a second word for the other use. |

---

## Decision log

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`.

One direct conflict was already resolved during the pass, on governance rather than taste:
the two chunk workers landed on different renderings for **hint** (হিন্ট vs ইঙ্গিত). Standardized
on **ইঙ্গিত** per `languages/bn/guide.md`'s rule that ordinary/pedagogy vocabulary takes the
ordinary Bangla word, not a transliteration — "hint" is pedagogy vocabulary, not CS jargon.
All 7 occurrences now agree. The modals worker's objection (ইঙ্গিত reads too literary for a
UI label) is preserved below for a native speaker to weigh in on.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| hint | ইঙ্গিত | Resolved cross-chunk conflict (see above); worth a native-speaker ruling given the modals worker's objection. | medium |
| concept | কনসেপ্ট | Agreed independently by both chunk workers. | medium |
| scenario | সিনারিও | Agreed independently by both chunk workers. | medium |
| challenge | চ্যালেঞ্জ | | medium |
| lesson | পাঠ | Pedagogy word, ordinary Bangla, not লেসন. | medium |
| instructions (exercise panel) | নির্দেশনা | Deliberately distinct from the glossary's নির্দেশ ("instruction given to Jiki"). | medium |
| to unlock | আনলক করা / হওয়া | | medium |
| subscription / subscribe | সাবস্ক্রিপশন / সাবস্ক্রাইব করা | | medium |
| locked (content state) | লক করা | | medium |
| in progress / not started / completed | চলমান / শুরু হয়নি / সম্পন্ন | Status triple; internal consistency matters more than the individual picks. | medium |
| achievements | অর্জন | Ordinary word over অ্যাচিভমেন্ট. | medium |
| testimonials | শিক্ষার্থীদের মতামত | Alternatives defensible; needs a pick. | low |
| scrubber | স্ক্রাবার | | low |
| Deep Dive | ডিপ ডাইভ or kept Latin | **Workers disagreed**: modals chunk kept Latin, learning chunk transliterated. Unresolved. | low |
| Coding Fundamentals | কোডিং ফান্ডামেন্টালস | Could arguably stay Latin as a product name; needs a ruling. | low |

Flags for a product/FE decision, not glossary rows: sidebar asymmetry ("Learn to Build" and
"Projects" stay Latin, but "Learn to Code" became কোড শিখুন — a Bangla heading directly above
an English one); `lesson.documentTitle` renders the brand as জিকি rather than Latin "Jiki";
`layout.localeBanner.cta` "Change to {language}" was rephrased to "{language} সংস্করণে যান"
because Bangla needs a case ending that can't attach cleanly to the placeholder — only works
if `{language}` is a bare language name, worth Aron confirming.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Bangla:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. Bangla merged both onto
  **বোর্ড**: Bangla already calls a classroom writing board বোর্ড, and it does not
  collide with অ্যারে. হোয়াইটবোর্ড, previously used as a second, separate term, is
  retired.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Bangla did not change:**
  ইন্টারপ্রেটার was already right, because the bare transliteration carries no machine or
  program morpheme, so, like ডেভেলপার, it reads naturally as a role a person holds, and
  it is what Bangla dev writing actually uses. What changed is that the row now says so,
  and rules out যন্ত্র or a similar device word, and দোভাষী (a human spoken-language
  interpreter, a different job).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Bangla glossary filled out for the using-functions concept pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for terms the using-functions concept page needed: `instruction (given to
Jiki)`, `mental model`, `(programming) language`, `brackets (the two after a function
name)`, `input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`,
`warehouse`, `board / whiteboard`.

**The `exercise` question was settled as `অনুশীলনী`**, against the guide's usual
loanword-transliteration default for CS jargon (§ Terminology and code-switching in
`guide.md`). Curriculum and pedagogy vocabulary takes the ordinary Bangla word instead,
and অনুশীলনী is what Bangladeshi and West Bengali textbooks actually head their exercise
sets with; no learner reaches for এক্সারসাইজ here.

### 2026-08-01: Rationale moved out of `guide.md`

**Decided by:** owner (iHiD), as an editorial pass on the guide, not a change to any
decision. **No rule changed and no term changed**; this entry only records the reasoning
that used to sit inside `guide.md` and has been cut from it, because the guide is loaded
into the prompt for every Bangla item in every pass and the reasoning is not something a
translator acts on. Every instruction that was in the guide is still in the guide.

**Why Bangla is one locale, not a language family.** The guide used to open by explaining
this. Bangla is written with the same Eastern Nagari (Bengali) script and the same modern
written standard (চলিত ভাষা, cholit bhasha) across Bangladesh and West Bengal (India).
Research turned up no meaningful divergence in the instructional and connective vocabulary
a beginner coding tutorial actually uses (words like "example", "practice", "however",
"let's begin"): the documented Bangladesh/West Bengal lexical differences sit in everyday
domestic and religious vocabulary (e.g. "water", "salt", "prayer"), not in educated,
Sanskrit-descended tatsama vocabulary or technical loanwords. Bangla is therefore treated
as a single locale (`bn`), not a language family, unlike `es`/`pt`/`zh` in this repo. The
guide keeps only the instruction: write the shared modern written standard, no
region-specific colloquialisms.

**Why আপনি and not তুমি**, despite `global/voice.md` calling for informal address. Bangla
has three address forms: তুই (intimate, can read as rude to a stranger), তুমি
(informal/friendly), and আপনি (formal/respectful). Real Bangla online tutorials and
programming blogs consistently address an unknown learner with আপনি. আপনি is the register
that reads as warm-but-respectful to a stranger; তুমি is reserved for people you already
know, and তুই can read as presumptuous or condescending. So applying the *letter* of the
global principle ("use the register modern online educational content actually uses")
means আপনি here, even though the label "formal" makes it look like the wrong pick at first
glance. আপনি and a warm voice are not in tension in Bangla the way "formal register" and
"warm voice" might seem to be in English. The guide now states the rule imperatively, with
one clause saying it overrides the global wording so nobody "corrects" it back to তুমি.

**Why CS jargon is transliterated rather than Sanskritized.** Transliterating the English
loanword into Bengali script (ফাংশন, ভ্যারিয়েবল, অ্যারে, লুপ) is the real, consistent
convention in Bangla programming tutorials and blogs, as opposed to the Sanskritized
vocabulary of formal school ICT textbooks (চলক for "variable"), which reads as
exam-syllabus register rather than tutorial register. The guide keeps the rule and the চলক
counter-example; the survey behind it is here.

**Why দাঁড়ি (।) rather than a Western period.** It is standard in Bangla digital and
technical writing, not an archaism, which is the objection the guide used to pre-empt.

**Why no gloss on a transliterated loanword.** ইন্টারপ্রেটার, এরর, ফাংশন, স্ট্রিং and the
rest are phonetic Bengali-script renderings of the English word, so a reader who knows the
English term recognizes it on sight and a reader who does not learns nothing from seeing
the Latin spelling next to it. A bracketed "(function)" after ফাংশন is redundant in a way
it is not for, say, Hungarian's _függvény_. Note this is a deliberate Bangla-specific call
against the Japanese コート example in `global/voice.md`: Bengali-script transliteration is
already legible to the reader, so it does not buy what katakana buys.

**Why the Jiki physical metaphors were expected to land in Bangla.** Bangla pedagogical
writing already reaches naturally for concrete container metaphors: real Bangla tutorial
content independently describes an array's slots as খোপ (compartments/pigeonholes, the
same word used for a train berth or a mail pigeonhole). That was the evidence that Jiki's
physical-metaphor approach (box, chain, machine, input slot, return chute) would land
naturally rather than feeling foreign. খোপ is not itself an agreed term and has no
glossary row.

**Why অনুশীলনী for "exercise"** is already recorded in the 2026-07-30 entry above; the
guide's repetition of that argument has been cut, leaving the general rule (curriculum and
pedagogy vocabulary takes the ordinary Bangla word) and the "settled, do not re-argue per
page" instruction.

**Also cut from the guide, as duplication rather than rationale:** the lists of individual
term renderings (all already rows in `glossary.md`, unchanged), the bullet restating
`global/rules.md` on Jikiscript keywords staying English (also a row in the "Keep in
English" table), the worked example repeating the glossary's API explanation verbatim, and
a second copy of the "warmth does not mean downgrading the pronoun" rule that appeared in
both § Formality and § Style notes (kept once, in § Formality).

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `exercise`) is not
repeated here.

**None of this has been confirmed by a native speaker.** Where a row also carries an
open, unresolved question (rather than settled reasoning), that is flagged inline below
and in the row's own Notes column in `glossary.md`, not treated as a decision.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Universal loanword; no established native alternative in real use. |
| developer | Loanword; standard in Bangla tech writing. |
| streak | Native Bangla word meaning "continuity/consistency". |
| tech / tech industry | Loanword pairing; established in Bangla tech media. |
| pitfall | Native word; plain বিপদ alone reads as generic "danger" without the gloss. |

#### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary, everyday Bangla word for "value"; not a loanword. |
| number | Ordinary word. |
| true / false | Loanwords, used as-is in Bangla technical writing. |
| character | Loanword; standard in Bangla programming content. |
| integer | Loanword. |
| string | Loanword. |
| Boolean | Loanword. |
| data type | Loanword pairing, standard in Bangla technical writing. |
| array / list | Loanword, the real dev/tutorial-register standard. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition | Native/Sanskrit-derived word, the real tutorial-register standard (more common than কন্ডিশন in careful teaching content). |
| comparison | Ordinary word. |
| expression | Loanword. |
| operator | Loanword. |
| statement (logical claim) | Native word, deliberately distinct from the loanword used for the executable sense, so the two do not collide. |
| function | Loanword. |
| parameter | Loanword. |
| argument | Loanword. |
| input (to a function) | Loanword. |
| output | Loanword. |
| return value | Loanword pairing. |
| brackets | Ordinary Bangla word for a bracket, and the word the beginner already knows from school maths. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | Loanword; confirmed as the real tutorial-register standard over the textbook calque সংরক্ষিত শব্দ. |
| mental model | Ordinary adjective + loanword noun; the picture-in-your-head framing. |
| (programming) language | ভাষা is the ordinary Bangla word for "language" and beginners already know it. |
| variable | Loanword; confirmed as the real dev/tutorial-register standard over the textbook word চলক. |
| assignment | Loanword, confirmed by native-speaker review 2026-08-15 (sohayelmahmud, forum t/473, post 4948) as the standard over নিয়োগ/কাজ. |
| code block | Loanword pairing; both halves already familiar in Bangla tech writing. |
| loop | Loanword, the real dev/tutorial-register standard. |
| error | Loanword; confirmed as the dev/tutorial-register standard over the more formal word ত্রুটি. |
| nested | Loanword, confirmed by native-speaker review 2026-08-15 (sohayelmahmud, forum t/473, post 4948); use নেস্টেড alone, or নেস্টেড লুপ / লুপের ভিতর লুপ when spelling out "nested loop". |
| iteration | Loanword, confirmed by native-speaker review 2026-08-15 (sohayelmahmud, forum t/473, post 4948) as the standard over পুনরাবৃত্তি. |
| class | Loanword. |
| object | Loanword. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | Loanword, universal in Bangla for a taught course. |
| greeting (email opener) | স্বাগতম! confirmed by native-speaker review 2026-08-15/16 (sohayelmahmud, forum t/1660, t/1661, t/1662, t/1663) over নমস্কার, which he flagged as Hindu-coded and inappropriate for a secular product; he explicitly said "স্বাগতম! is the best for this type of mail, you can lock it in" (t/1661). Applied across the bn mailer files. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, universally known Bangla word for "box"; direct and concrete. |
| chain | **Open:** loanword, in wide everyday use (e.g. a bicycle chain) and already associated with sequential/linked structures in real Bangla programming content. শিকল (the literal native word) is a plausible alternative if native-speaker feedback prefers a less loanword-heavy metaphor. |
| input slot | **Open:** ইনপুট (agreed) + স্লট; mirrors the coin-slot/card-slot machine image common in Bangla daily life, but not independently attested in a real Bangla source. |
| return chute | **Open:** রিটার্ন (agreed) + স্লাইড; real Bangla journalism confirms স্লাইড is how a playground slide is named, and no single native noun for a chute-like object was found. The "input slot / return chute" *machine* framing as a pair has not been seen in real Bangla content. |
| machine | Loanword, universally understood. |
| crank | হাতল is the ordinary word for a handle or lever, not engine jargon. |
| shelves | Plain, universally known native Bangla word for "shelf". |
| warehouse | Ordinary, concrete Bangla word for a warehouse or store-room. |
