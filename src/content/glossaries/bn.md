---
lang: "bn"
name: "Bengali"
family: null
governance_sha: "1d91ad4"
content_version: "e1a05715a003"
published_at: "2026-07-30"
term_count: 67
forum_topic_id: 473
---

# Bangla (bn) glossary

The agreed term list for Bangla. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are **additive**: rows get appended, an `agent` row may be corrected (with the old
value reported), and a `human` row is never changed unilaterally. The `Agreed by` column
records who decided each row (`agent` = unconfirmed agent draft; `human (t/<id>)` = a
native speaker settled it on that forum topic). See `global/workflow.md` §
"Glossary writes are additive".

## Core decisions

| English | Bangla | Use (bn/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| programming / coding | প্রোগ্রামিং | bn | Universal loanword; no established native alternative in real use. | agent |
| developer | ডেভেলপার | bn | Loanword; standard in Bangla tech writing. | agent |
| streak | ধারাবাহিকতা | bn | Daily-use-streak sense (learning-platform). Native Bangla word meaning "continuity/consistency"; not phonetically self-evident, so it takes the `<define>` gloss (see guide § Glossing a `<define>`). | agent |
| tech / tech industry | টেক ইন্ডাস্ট্রি | bn | Loanword pairing; established in Bangla tech media. | agent |
| pitfall | বিপদ | bn | Native word; plain বিপদ alone reads as generic "danger", so it takes the `<define>` gloss. | agent |

## Localize (use the Bangla term)

Bangla renders core CS vocabulary as English loanwords transliterated into Bengali script.
Ordinary, everyday vocabulary (including curriculum and pedagogy words) uses the ordinary
Bangla word. Which default applies to which kind of term is set out in the guide
(§ Terminology and code-switching); this file records the resulting choice per term. Split
by theme for readability; every table below follows the same columns.

### Values & data types

| English | Bangla | Use (bn/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| value | মান | bn | Ordinary, everyday Bangla word for "value"; not a loanword. | agent |
| number | সংখ্যা | bn | Ordinary word. | agent |
| true / false | ট্রু / ফলস | bn | Loanwords, used as-is in Bangla technical writing; not capitalized in prose. | agent |
| character | ক্যারেক্টার | bn | Loanword; standard in Bangla programming content. | agent |
| integer | ইন্টিজার | bn | Loanword. | agent |
| float / decimal | ফ্লোট / দশমিক সংখ্যা | bn | ফ্লোট (loanword) when the floating-point nature matters; দশমিক সংখ্যা ("decimal number", ordinary compound) otherwise. | agent |
| string | স্ট্রিং | bn | Loanword. | agent |
| Boolean | বুলিয়ান | bn | Loanword. | agent |
| data type | ডেটা টাইপ | bn | Loanword pairing, standard in Bangla technical writing. | agent |
| array / list | অ্যারে | bn | Loanword, the real dev/tutorial-register standard. | agent |

### Functions & control flow

| English | Bangla | Use (bn/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| condition | শর্ত | bn | Native/Sanskrit-derived word, the real tutorial-register standard (more common than কন্ডিশন in careful teaching content). Not phonetically self-evident, so it takes the `<define>` gloss. | agent |
| if statement | `if` স্টেটমেন্ট | bn | Keep the keyword `if` in code font (it is a real keyword); pair with স্টেটমেন্ট. | agent |
| comparison | তুলনা | bn | Ordinary word; stands alone. | agent |
| expression | এক্সপ্রেশন | bn | Loanword. | agent |
| operator | অপারেটর | bn | Loanword. | agent |
| statement (executable) | স্টেটমেন্ট | bn | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | বিবৃতি | bn | The proposition sense: a claim that is true or false. Native word, deliberately distinct from the loanword used for the executable sense above; pick by meaning, not by the English word. Not phonetically self-evident, so it takes the `<define>` gloss. | agent |
| function | ফাংশন | bn | Loanword. The *keyword* `function` in code stays English; the concept in prose is ফাংশন. | agent |
| to call (a function) | কল করা | bn | Loanword verb via করা (see guide § Grammar). | agent |
| to define (a function) | ডিফাইন করা | bn | Loanword verb via করা. | agent |
| parameter | প্যারামিটার | bn | Loanword; the declaration-site name. | agent |
| argument | আর্গুমেন্ট | bn | Loanword; the call-site value. Used near-interchangeably with parameter in casual Bangla dev writing, but keep them distinct per the English meanings. | agent |
| input (to a function) | ইনপুট | bn | Loanword. | agent |
| output | আউটপুট | bn | Loanword. | agent |
| to return (a value) | রিটার্ন করা | bn | Loanword verb via করা. | agent |
| return value | রিটার্ন ভ্যালু | bn | Loanword pairing. | agent |
| brackets (the two after a function name) | বন্ধনী | bn | Ordinary Bangla word for a bracket, and the word the beginner already knows from school maths. Use plain বন্ধনী for the `()` pair when the code is visible beside the prose ("তার নাম লিখবেন, তারপর ওই বন্ধনী দুটি"). Where the *kind* of bracket must be distinguished, use the standard Bangla maths names: প্রথম বন্ধনী `()`, দ্বিতীয় বন্ধনী `{}`, তৃতীয় বন্ধনী `[]`. | agent |

### Loops, state & program flow

| English | Bangla | Use (bn/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| keyword | কিওয়ার্ড | bn | Loanword; confirmed as the real tutorial-register standard over the textbook calque সংরক্ষিত শব্দ. | agent |
| interpreter | ইন্টারপ্রেটার | bn | **A person doing a job, not a program**: on concept pages Jiki *is* the interpreter ("এই কোর্সে আপনার ইন্টারপ্রেটার হলো জিকি"). The bare transliteration carries no machine or program morpheme, so like ডেভেলপার it reads naturally as a role a person holds, and it is what Bangla dev writing actually uses. Never add যন্ত্র or a similar device word, and do not reach for দোভাষী (a spoken-language interpreter). | agent |
| instruction (given to Jiki) | নির্দেশ | bn | Everyday word for an instruction someone gives ("জিকিকে সঠিক নির্দেশ দেওয়া"). Not নির্দেশনা (guidance) and not the legal/administrative register আদেশ. | agent |
| mental model | মানসিক মডেল | bn | Ordinary adjective + loanword noun; the picture-in-your-head framing. | agent |
| (programming) language | (প্রোগ্রামিং) ভাষা | bn | ভাষা is the ordinary Bangla word for "language" and beginners already know it; use প্রোগ্রামিং ভাষা for the programming sense and plain ভাষা for "a language a computer understands". Never the transliteration ল্যাঙ্গুয়েজ, and never mix the two inside one page. | agent |
| variable | ভ্যারিয়েবল | bn | Loanword; confirmed as the real dev/tutorial-register standard over the textbook word চলক. | agent |
| assignment | অ্যাসাইনমেন্ট | bn | Loanword; pattern-matched to the established convention, not independently source-confirmed. Flagged for native-speaker confirmation. | agent |
| to assign | অ্যাসাইন করা | bn | Loanword verb via করা. | agent |
| code block | কোড ব্লক | bn | Loanword pairing; both halves already familiar in Bangla tech writing. | agent |
| loop | লুপ | bn | Loanword, the real dev/tutorial-register standard. | agent |
| error | এরর | bn | Loanword; confirmed as the dev/tutorial-register standard over the more formal word ত্রুটি. | agent |
| nested | নেস্টেড | bn | Loanword; pattern-matched, not independently source-confirmed. Flagged for native-speaker confirmation. | agent |
| iteration | ইটারেশন | bn | Loanword; pattern-matched, not independently source-confirmed. Flagged for native-speaker confirmation. | agent |
| element | এলিমেন্ট | bn | Loanword. On the chain metaphor specifically, see "Jiki physical metaphors" below for how an element is described. | agent |
| class | ক্লাস | bn | Loanword. | agent |
| object | অবজেক্ট | bn | Loanword. | agent |
| to run / execute (code) | রান করা / চালানো | bn | রান করা (loanword verb) is standard; চালানো (native verb, "to run/operate") also natural, especially for "run a loop". Either is fine; do not mix both for the same sentence's action. | agent |

### Platform & curriculum vocabulary

| English | Bangla | Use (bn/en) | Notes | Agreed by |
|---------|--------|----------|-------|-----------|
| course | কোর্স | bn | Loanword, universal in Bangla for a taught course. Keep distinct from lesson and curriculum. | agent |
| exercise | অনুশীলনী | bn | The ordinary Bangla word: it is what Bangladeshi and West Bengali textbooks actually head their exercise sets with, and no learner reaches for এক্সারসাইজ here. Curriculum and pedagogy vocabulary takes the ordinary Bangla word, not the transliteration default that applies to CS jargon (see guide § Terminology and code-switching). | agent |

## Keep in English

These stay in Latin script in prose (acronyms and product/language names), per real Bangla
technical-writing convention. Where the source `<define>`s one of these terms, give the
Bangla explanation from the second column where noted; with no `<define>`, use the English
bare, with no gloss.

| Term | Bangla explanation (on `<define>`) | Notes | Agreed by |
|------|--------------------------------------|-------|-----------|
| API | "একটি প্রোগ্রাম অন্য প্রোগ্রামের সাথে কথা বলার নিয়ম" (the rules by which one program talks to another) | Not a word a beginner knows; explain the concept in Bangla, not just the acronym. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language. Real Bangla tutorial writing independently uses concrete container
metaphors for these same ideas (e.g. খোপ for an array's compartments), which supports these
renderings landing naturally.

| English metaphor | Bangla rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | বাক্স | Plain, universally known Bangla word for "box"; direct and concrete. | agent |
| chain (array metaphor) | চেইন | Loanword, in wide everyday use (e.g. a bicycle chain) and already associated with sequential/linked structures in real Bangla programming content. An element sitting on the chain: চেইনের একটি অংশ ("a part/link of the chain"). শিকল (the literal native word) is a plausible alternative if native-speaker feedback prefers a less loanword-heavy metaphor. | agent |
| input slot | ইনপুট স্লট | ইনপুট (agreed above) + স্লট; mirrors the coin-slot/card-slot machine image common in Bangla daily life. Not independently source-confirmed; flagged for native-speaker review. | agent |
| return chute | রিটার্ন স্লাইড | রিটার্ন (agreed above) + স্লাইড (real Bangla journalism confirms স্লাইড is how a playground slide is named; no single native noun for the object was found). Flagged for native-speaker review, since "chute" and "playground slide" are close but not identical images. | agent |
| machine (function metaphor) | মেশিন | Loanword, universally understood; a function modelled as a machine with an input slot and a return chute. | agent |
| crank (machine crank) | হাতল | The ordinary word for a handle or lever. Cranking it to start the machine: হাতল ঘুরিয়ে চালু করা. | agent |
| shelves (storage) | তাক | Plain, universally known native Bangla word for "shelf". | agent |
| warehouse (Jiki's warehouse) | গুদাম | Ordinary, concrete Bangla word for a warehouse or store-room; the place Jiki hangs out and keeps his machine shelf. | agent |
| board / whiteboard | বোর্ড | **One object, one word.** The same বোর্ড is what the learner writes instructions on for Jiki to follow, and what a function keeps its own instructions and notes on. Bangla already calls a classroom writing board বোর্ড, and it does not collide with অ্যারে. Never use হোয়াইটবোর্ড alongside it (that was previously a second, separate term); never invent a second word for the other use. | agent |

## Open questions for native-speaker review

Flagged here per `global/rules.md` § "When unsure" rather than guessed silently. Every row
in this file is `agent` (no native speaker has confirmed anything yet), but these are the
ones where an agent's best effort is weakest, so they are the first things a Bangla reviewer
should be asked about:

- **assignment** → অ্যাসাইনমেন্ট (pattern-matched, not independently source-confirmed)
- **nested** → নেস্টেড (pattern-matched, not independently source-confirmed)
- **iteration** → ইটারেশন (pattern-matched, not independently source-confirmed)
- **chain metaphor** → চেইন vs the more literal শিকল (both plausible; চেইন chosen for its
  stronger association with sequential/linked structures in real content)
- **input slot** → ইনপুট স্লট (plausible and intuitive, but not independently attested in a
  real Bangla source)
- **return chute** → রিটার্ন স্লাইড (স্লাইড is confirmed as the real word for the physical
  object; the "input slot / return chute" *machine* framing as a pair has not been seen in
  real Bangla content, so confirm it reads naturally together)
- **interpreter** → ইন্টারপ্রেটার as a word for a *person* in that role, not a program
- **board / whiteboard** → বোর্ড as the single word for both uses
