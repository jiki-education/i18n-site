---
lang: "he"
name: "Hebrew"
family: null
stage: "setup"
governance_sha: "0542cec"
content_version: "819d41117a49"
published_at: "2026-08-01"
term_count: 68
category_id: 397
---

# Hebrew (he) glossary

The agreed term list for Hebrew. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| programming / coding | **תכנות** | he | Never `קידוד`, which means character or data encoding and is a false friend. |
| developer / programmer | מתכנת | he | The learner-facing sense, "a person who programs". `מפתח` is the industry job title; keep it for copy that is really about the profession. |
| bug | באג | he | Not the Academy's `תקל`, which is dead in real usage. |

## Localize (use the Hebrew term)

These are terms where the Hebrew is used in prose, so the "Use (he/en)" column is `he` throughout. Split by theme; every table below follows the same columns.

### Values & data types

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| string | מחרוזת | he | Never swap with `שרשרת` (the chain metaphor). See guide § "The שרשרת / מחרוזת collision". |
| character (text) | תו | he | A single text character. Keep distinct from `דמות` (the on-screen game figure). |
| Boolean | בוליאני | he | Not `טיפוס לוגי`. The literal keywords `true`/`false` stay English inside code. |
| float / decimal | עשרוני | he | Follows the current Python curriculum. Not `ממשי`, which is the older schoolbook term. |
| index | אינדקס | he | Not `מציין` and not the Academy's `ציון`, which is unused in practice. |
| object | אובייקט | he | Use `אובייקט` in prose. `עצם` survives only inside the fixed phrase `תכנות מונחה־עצמים`. |

### Functions & control flow

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| function | פונקציה | he | The *keyword* `function` in code stays English; the concept in prose is `פונקציה`. Not `פעולה`, which is the school-textbook term. |
| statement (executable) | הוראה | he | The imperative sense: a line of code that does something and gets executed. Keep distinct from `פסוק` below. |
| statement (logical claim) | פסוק | he | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| assignment | השמה | he | Use `השמה` consistently, not the near-synonym `הצבה`. |
| to declare / declaration | הצהרה | he | Use `הצהרה` for every declared thing, rather than alternating with `הכרזה`. |
| built-in | מובנה | he | Not `מוכן`, and not the spoken `בילט־אין`. |
| brackets (the two after a function name) | סוגריים | he | Plain `סוגריים` for the `()` pair written after a function name. Name the specific type only when disambiguating; see the Brackets table. |

### Loops, state & program flow

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | מפרש | he | **A person doing a job, not a program.** On concept pages Jiki *is* the מפרש (`תפקידו לפרש את הקוד שאתם כותבים`). Because unvocalised `מפרש` is also "sail" and "commentator", make Jiki the subject in following sentences rather than repeating bare `המפרש`. Never `מתרגם`, `מתורגמן` or `מפענח`. |
| exception | חריגה | he | The catchable runtime event. Keep distinct from `שגיאה` (error). |
| iteration | איטרציה | he | Not the Academy's `חִזְרוּר`, which is dead in practice. |
| scope | תחום | he | Plain `תחום`, not the more formal `תחום הכרזה`. |
| debugging | דיבוג | he | What Israeli developers actually say. `ניפוי שגיאות` is the formal alternative; do not mix the two in one document. |

### Tooling & engineering

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| framework | פריימוורק | he | Not `שלד תוכנה`, which is rarely said aloud. |
| component | קומפוננטה | he | The front-end sense. Not the generic `רכיב`. |

### Platform & curriculum vocabulary

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| feature (platform capability) | יכולת | he | Never `תכונה`, which is the Hebrew CS term for an object property and collides. `פיצ'ר` is too informal for lesson prose. |
| level | רמה | he | Reserve `שלב` for a step within something. |
| track / pathway | מסלול | he | Not `נתיב`, which reads as a file path. |
| concept library | מאגר המושגים | he | Not `ספריית המושגים`: `ספרייה` is the word for a code library and collides. |
| plan (subscription tier) | מסלול מנוי | he | Always qualified. Bare `תוכנית` means a computer program and bare `מסלול` is the curriculum track. |
| streak | רצף | he | No relation to `שרשרת` or `מחרוזת`. |
| dashboard | לוח בקרה | he | Not `לוח מחוונים`, which reads as a car dashboard. |
| badge | תג | he | Keep distinct from `תגית` (a tag, including an HTML tag). |
| canvas (graphics exercises) | משטח ציור | he | The drawing surface. `קנבס` has no settled spelling; do not use it in prose. |
| hue | גוון | he | The colour-wheel position. Also the base for "shade"; see below. |
| shade (of a colour) | (no fixed noun) | he | Hebrew has no separate noun for "shade" distinct from hue. Render it as `גוון` plus an adjective (`גוון בהיר יותר`). Never `צל`, which means a literal shadow. |
| lightness | בהירות | he | Hebrew uses one word for lightness and brightness, so qualify it: `בהירות הצבע` versus `בהירות המסך`. Never the Academy's `בהיקות`. |
| slider (UI control) | מחוון | he | Not `סליידר`, which in practice means an image carousel. |
| frame (animation) | פריים | he | Not `מסגרת`, which means a picture border and is a real trap in a drawing course. |

## Keep in English

These stay in English in Hebrew prose. Where the source `<define>`s one of them, use the Hebrew in the gloss column; with no `<define>`, use the English bare, with no gloss.

| Term | Hebrew gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | `ממשק תכנות יישומים` | Explain the concept where it is defined, not just the acronym. Keep the Latin acronym in running prose after that. |
| CLI (the concept) | `ממשק שורת פקודה` | May shorten to `שורת הפקודה` after. |
| AI | `בינה מלאכותית` | Use "AI" in prose and marketing copy. |
| LLM | explain in Hebrew | Latin script dominates in real usage. |
| JavaScript, Python, React | (no gloss) | Product and language names. |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens only. The ordinary noun "bug" in prose is `באג`; see "Core decisions". |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Hebrew rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | קופסה | |
| chain (array metaphor) | שרשרת חוליות | **Always the full qualified compound**; never shortened to bare `שרשרת`. See guide § "The שרשרת / מחרוזת collision". |
| link (of the chain) | חוליה | The everyday word for one link of a chain. |
| machine (function metaphor) | מכונה | |
| input slot | חריץ | The coin-slot word, so the coin metaphor below lands with it. |
| return chute | מגלשה | The ordinary word for a playground slide. |
| crank (machine crank) | ידית | The handle Jiki turns to power a machine up. Not `ארכובה` (engineering register) and not `מנואלה`. |
| shelves (storage) | מדפים | |
| warehouse (Jiki's warehouse) | מחסן | Where Jiki hangs out and keeps his machine shelf. |
| workshop (Jiki's workshop) | סדנה | The room Jiki works in; the shelves live in it. |
| board / whiteboard | לוח | **One object, one word.** The board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same `לוח`. No collision with `מערך` (array). Do not use `טבלה`, which is a data table. |
| coin (number metaphor) | מטבע | |
| label (on a box/machine) | תווית | Not `מדבקה`, which is specifically an adhesive sticker. |
| piece of paper (string metaphor) | פיסת נייר | |
| spiral notebook page (dictionary metaphor) | דף בפנקס ספירלה | |
| mini-Jiki | ג'יקי הקטן | The one place the name is written in Hebrew script, because it takes a Hebrew adjective. Not `מיני־ג'יקי`, which reads as product naming. |
| character (game/maze figure) | דמות | Keep `תו` for a text character; `דמות` is the on-screen figure. |
| cell (of a maze grid) | משבצת | A square on a grid. Not `תא`, which reads as a spreadsheet cell. |

## Brackets

Default to plain **סוגריים**. When a specific bracket type matters, name it and show the glyph in a code span immediately after.

| Glyph | Hebrew | Notes |
|-------|--------|-------|
| `()` | סוגריים · סוגריים עגולים | Plain `סוגריים` by default; add `עגולים` plus the glyph only when disambiguating. |
| `[]` | סוגריים מרובעים | |
| `{}` | סוגריים מסולסלים | |
| `<>` | סוגריים משולשים | |

---

## Decision log

### 2026-08-01: Language bootstrapped

**Decided by:** owner (iHiD), agreeing the researched proposal from the Hebrew bootstrap pass.
**Status: unconfirmed drafts.** No native Hebrew speaker has checked any rendering in this glossary. There is no community glossary submission for Hebrew and no Hebrew forum thread, so every row here is an agent draft that a later pass may correct.

The research rested on the Academy of the Hebrew Language (כללי הפיסוק, approved 1992, published 1994, revised 2017; the transliteration rules of 2007; and its IT term dictionaries, 1990 to 2016), the Israeli Ministry of Education's CS textbooks (`יסודות מדעי המחשב`, C# and Java editions) and its 2021 Python curriculum, Barak Gonen's Python textbook, the Microsoft Hebrew Style Guide, the Gezer and translatewiki Hebrew localization rules, the Firefox Hebrew localization corpus, and Hebrew Wikipedia and Wikibooks. Post-2022 SEO and AI-writing sites were checked and discarded; nothing here rests on them.

Eight decisions were put to the owner and confirmed:

- **Address the reader in the plural** (`אתם`, `לחצו`, `תוכלו`), with first person plural for anything framed as "let's". Hebrew has no gender-neutral second person, so this is forced. Plural address is what Israeli instructional prose has converged on, it is prescribed by Microsoft's Hebrew guide and by the Gezer open-source rules, and the Academy's grammar committee recommended it. Masculine singular was rejected as excluding half the audience and reading as legacy software chrome; slash and dot forms (`משתמש/ת`) were rejected because the Academy, the Open University and every localization guide reject them and they produce unreadable word forms.
- **`function` is `פונקציה`, not `פעולה`.** This is the sharpest fork in Hebrew CS vocabulary: the Ministry of Education's school textbooks use `פעולה` exclusively (0 occurrences of `פונקציה` across two volumes, against 1,056 of `פעולה`), while adult tutorials, real developer speech and the Academy all use `פונקציה`. Jiki teaches a general adult audience rather than replicating school C#/Java pedagogy, so it targets adult industry Hebrew. This is the single row most worth putting to a native speaker.
- **Native Hebrew is primary for core CS vocabulary, but real usage wins term by term.** Hebrew's native words (`משתנה`, `לולאה`, `מערך`, `מחרוזת`, `תו`) are genuinely ordinary, unlike some Academy consumer-tech coinages, so Hebrew sits closer to Persian than to Arabic here. Where real usage is decisively a loanword it takes the loanword: `באג` over the Academy's `תקל`, `דיבוג` over `ניפוי שגיאות`, `בוליאני` over `טיפוס לוגי`, `איטרציה` over `חִזְרוּר`.
- **"Jiki" stays in Latin script** in Hebrew prose, with maqaf-attached prefixes and `של` for possession, introduced once as `Jiki (ג'יקי)` to fix the pronunciation. Transliterating throughout would be out of step with how every Israeli tech source writes product names. `ג'יקי הקטן` is the one place the name is written in Hebrew script, because it takes a Hebrew adjective.
- **The `<define>` gloss marker is `באנגלית:`**, the Hebrew Wikipedia convention (present in thousands of articles), rather than the literary `בלעז`.
- **Punctuation follows the Academy**: Western digits, Latin punctuation, double quotation marks in place of English italics and title case, and the maqaf `־` before a Latin run or a digit.
- **The chain metaphor is always the qualified `שרשרת חוליות`.** Hebrew's word for string (`מחרוזת`) means a beaded necklace and its word for chain (`שרשרת`) means a chain or necklace, which alone would be survivable. What makes it a genuine collision is that Hebrew's term for string concatenation is `שרשור`, the same root as `שרשרת`. The qualifier follows the precedent already set for Arabic, for the same reason.
- **`crank` is `ידית`**, the ordinary word for a handle you turn. `מנואלה` is the more vivid hand-crank loanword and `ארכובה` is engineering register; both were rejected as less widely understood in a beginner context.

Two renderings were chosen specifically to keep a metaphor and a CS term apart, and must not be collapsed by a later pass: `תו` (a text character) against `דמות` (the on-screen game figure), and `לוח` (the board) against `מערך` (array) and `טבלה` (a data table).

Three terms were deliberately **left out** of the glossary rather than guessed at, and are open questions for the first native-speaker review: `deploy` (three live options, no consensus in real usage), `session` in the authentication sense (the standard `הפעלה` literally means "running", which collides with running code), and the cluster with no attested Hebrew term anywhere: key-value pair, entry, `break`, increment, toggle, placeholder and template literal.

### Term rationale

Why individual rows read the way they do, for the reasoning not already carried by the dated entry above. Grouped by the glossary's own sections.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | `קידוד` is a false friend meaning character or data encoding, and it is a trap a translator can fall into unprompted, so the row exists mainly to block it. |
| developer / programmer | `מפתח` is the industry job title and `מתכנת` is "a person who programs". The learner-facing sense is the second one. |

#### Values & data types

| Term | Why |
|------|-----|
| float / decimal | The 2019 to 2021 Ministry curricula shifted from `ממשי` to `עשרוני`, so the newer term is the better signal for a course written now. |
| index | Israeli textbooks mix `מציין` and `אינדקס` inside the same volume; `אינדקס` is closer to what a learner will hear. The Academy's `ציון` is essentially unused. |
| object | `אובייקט` dominates real OOP speech. `עצם` is the schoolbook term and survives in the fixed phrase for object-oriented programming, which is why the row has to say which is which. |

#### Functions & control flow

| Term | Why |
|------|-----|
| statement (executable) / statement (logical claim) | English uses one word for two ideas the course keeps apart. `פסוק` is attested from `תחשיב הפסוקים` (propositional calculus); the alternative `היגד` had no hits in any CS source checked. |
| assignment | `השמה` is the schoolbook standard and `הצבה` is the Academy's. Both are alive, so the row exists to stop passes alternating. |
| to declare / declaration | Hebrew textbooks split `הצהרה` and `הכרזה` by what is being declared, which is a distinction the course does not need and would apply inconsistently. One word, chosen for the commoner case. |
| built-in | `מובנה` is the middle ground between the schoolbook `מוכן` and the spoken `בילט־אין`. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| interpreter | Hebrew is unusually lucky here. `מפרש` is simultaneously the Academy's term, Hebrew Wikipedia's article title, and a live agent noun meaning "one who explains", so unlike several other languages it can name a character rather than only a piece of software. The cost is that unvocalised `מפרש` is also "sail" and "commentator", which is why the row tells a translator to make Jiki the subject rather than repeat the bare noun. If a native reviewer rejects it, `פרשן` is the fallback: unambiguously a person, and the gloss the standard Israeli Python textbook uses, but it under-signals that this is technology. |
| exception | Kept distinct from `שגיאה` because the course teaches errors generally before it teaches catchable exceptions. |
| debugging | The reference Israeli Python textbook has zero occurrences of `ניפוי שגיאות` and uses `דיבוג` throughout. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| framework, component | Both follow the ordinary-word principle: `פריימוורק` and `קומפוננטה` are what Israeli developers say, and the native alternatives are rarely spoken aloud. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| feature (platform capability) | `תכונה` is the Hebrew CS word for an object property, which the course also teaches, so it cannot be used for a platform feature. |
| concept library | `ספרייה` is the word for a code library, so the obvious rendering of "library" collides. |
| plan (subscription tier) | A three-way squeeze: `תוכנית` already means a computer program and `מסלול` is the curriculum track, so this term has to be qualified to survive. |
| shade (of a colour) | Ordinary Hebrew has no noun for "shade" separate from hue. Inventing one would be worse than the periphrasis. `צל` was rejected outright as meaning a literal shadow, which is actively misleading in a graphics context. |
| lightness | Hebrew collapses lightness and brightness into `בהירות`, and the Academy's `בהיקות` is not used by ordinary speakers, so the fix is a qualifier rather than a different word. |
| slider, frame | Both rows exist to block a wrong attractor: `סליידר` means an image carousel in practice, and `מסגרת` means a picture border, which is a real trap in a drawing course. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| input slot, coin | `חריץ` is the ordinary word for the coin slot on a vending machine, which is what makes the coin metaphor land alongside it. |
| return chute | `מגלשה` is the everyday word for a playground slide, so the physical picture is immediate. |
| crank | `ידית` is the ordinary word for a handle; see the dated entry for the rejected alternatives. |
| board / whiteboard | `לוח` is the everyday word for a board in a room and, unlike several other languages, carries no collision with the word for array. The row names `טבלה` so a pass does not drift toward it for a data table. |
| label | `תווית` is a written label; `מדבקה` is specifically an adhesive sticker, which is not what Jiki's labels are. |
| cell (of a maze grid) | `משבצת` is a square on a grid, as on a board game. `תא` reads as a spreadsheet cell, which is the wrong picture in a programming course. |
