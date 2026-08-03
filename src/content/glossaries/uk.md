---
lang: "uk"
name: "Ukrainian"
family: null
stage: "refining"
governance_sha: "ea7c7e7"
content_version: "8644f82d9c79"
published_at: "2026-08-03"
term_count: 132
category_id: 100
forum_topic_id: 308
video_player_forum_topic_id: 785
---

# Ukrainian (uk) glossary

The agreed term list for Ukrainian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | програмування | uk | |
| developer | розробник | uk | |
| tech / tech industry | IT-індустрія | uk | Not _tech-індустрія_: keep the whole term in Ukrainian script. |
| streak | серія (днів) | uk | |
| journey (e.g. "our journey into the world of programming") | подорож | uk | Prefer _подорож_ over _мандрівка_. |
| Jeremy (the course author) | Джеремі | uk | Transliterate in **prose**, everywhere it occurs, in every content type. Indeclinable: it takes no case endings, exactly like `Jiki` (see guide § Grammar and structure), so case is carried by the surrounding words (_разом із Джеремі_, _Джеремі показав_). **Exception: inside a literal code string value it stays as the English letters `Jeremy`**, untouched, because it is then the string the learner's code produces or compares against (e.g. `twoFer("Jeremy")`, `let name = "Jeremy"`, and the `alt` text describing the paper that string is written on). |

## Localize (use the Ukrainian term)

These are terms where the Ukrainian is used in prose, so the "Use (uk/en)" column is `uk` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| value | значення | uk | |
| number | число | uk | |
| character | символ | uk | |
| integer | ціле число | uk | |
| true / false | правда / неправда | uk | _Істина/хиба_ (a more formal-logic register) is an accepted alternative; do not mix both in one document. Not capitalised in prose. |
| float / decimal | число з плаваючою комою / десяткове число | uk | Use the first form when the floating-point nature matters, the second for the simpler beginner sense. |
| array / list | масив | uk | Exercise prose sometimes says "list" informally for the same concept; render both with _масив_, do not introduce a second word. |
| dictionary | словник | uk | |
| element | елемент | uk | Array element = _елемент масиву_. |
| index | індекс | uk | No clarification parens needed. |
| key-value pair | пара ключ-значення | uk | The key itself is _ключ_ (ordinary word once introduced). |
| template literal | шаблонний рядок | uk | |
| data type | тип даних | uk | Unconfirmed draft (agent, 2026-08-01). |
| compound data type | складений тип даних | uk | Unconfirmed draft (agent, 2026-08-01). Not _складний_ (means "difficult") and not the rarer borrowing _композитний_. |
| default (value) | типове значення / типовий | uk | Unconfirmed draft (agent, 2026-08-01). Not _за замовчуванням_ or _усталений_; do not mix forms in one document. |

### Functions & control flow

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | умовна конструкція / умовний оператор | uk | Not _умовне твердження_ (collides with the "statement (logical claim)" term). |
| condition | умова | uk | Stands alone; no gloss needed. |
| comparison | порівняння | uk | Stands alone; no gloss needed. |
| expression | вираз | uk | |
| operator | оператор | uk | |
| NOT operator / logical negation | заперечення (логічне) | uk | |
| statement (executable) | інструкція | uk | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _оператор_ (operator) to avoid collision. **_Інструкція_ is reserved for this sense**, which is why `instruction (given to Jiki)` below is _вказівка_ and not _інструкція_. |
| statement (logical claim) | твердження | uk | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| function | функція | uk | The *keyword* `function` in code stays English; the concept in prose is _функція_. |
| to call (a function) | викликати (функцію) | uk | |
| to define (a function) | визначати (функцію) | uk | |
| parameter | параметр | uk | |
| argument | аргумент | uk | Call-site value sense. |
| input (to a function) | вхідні дані | uk | |
| output | вихідні дані | uk | |
| to return (a value) | повернути (значення) | uk | |
| return value | повернене значення | uk | Noun form; distinct from the verb "to return." |
| brackets (the two after a function name) | дужки | uk | The `()` pair written after a function name to call it: _написати її назву, а потім ті дві дужки_. Plain _дужки_ here; only name the type when disambiguating (see § Brackets). |
| pure function | чиста функція | uk | |

### Loops, state & program flow

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| keyword | ключове слово | uk | |
| interpreter | інтерпретатор | uk | **A person doing a job, not a program**: in the course Jiki *is* the interpreter. Not _тлумач_ (archaic, scriptural register). Copula sentences about it must be rephrased; see guide § Grammar and structure. |
| instruction (given to Jiki) | вказівка | uk | One thing the learner tells Jiki to do. Everyday word, not formal register. Deliberately **not** _інструкція_, which this glossary binds to `statement (executable)` above; and not _команда_, which collides with "command". |
| mental model | ментальна модель | uk | |
| (programming) language | мова (програмування) | uk | Never a borrowing: _мова програмування_, and _мова, яку розуміє компʼютер_ for the "language a computer understands" framing. |
| variable | змінна | uk | |
| assignment | присвоєння | uk | |
| to assign | присвоювати (значення) | uk | Matches _присвоєння_ above. |
| code block | блок коду | uk | |
| error | помилка | uk | |
| nested | вкладений | uk | e.g. _вкладений цикл_ = nested loop |
| iteration | ітерація | uk | |
| to run / execute (code) | запустити / виконати | uk | |
| loop | цикл | uk | |
| for loop | цикл `for` | uk | _цикл_ + the real keyword, in that order. |
| while loop | цикл `while` | uk | As above. |
| for-of loop | цикл `for-of` | uk | As above. |
| loop body | тіло циклу | uk | |
| break (loop control) | перервати (цикл) | uk | The keyword `break` in code stays English; this is the prose verb for the concept. |
| increment | інкремент | uk | "збільшення на одиницю" also natural in a fuller explanation. |
| modulo / remainder operator | остача (від ділення) | uk | |
| concatenation / to concatenate | конкатенація / зʼєднати (рядки) | uk | |
| to iterate (through an array/string) | перебирати (елементи) | uk | Unconfirmed draft (agent, 2026-08-01). The verb; the noun stays _ітерація_. Not the calque _ітерувати_. |
| toggle | перемикати | uk | |
| state / stateful | стан | uk | |
| scope | область видимості | uk | |
| class | клас | uk | |
| method | метод | uk | |
| property | властивість | uk | |
| object | обʼєкт | uk | Use the modifier letter apostrophe ʼ (U+02BC); see guide § Orthography. |

### Tooling & engineering

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| deploy (verb: to deploy) | розгортання / розгорнути | uk | |
| auth (authentication / authorization) | автентифікація / авторизація | uk | Pick by meaning. |
| module | модуль | uk | |
| algorithm | алгоритм | uk | |
| edge case | крайній випадок | uk | |
| backwards compatibility | зворотна сумісність | uk | |
| tool / tooling | інструмент / інструментарій | uk | |
| workhorse (the idiom: "the workhorse of X") | ключовий інструмент | uk | The English idiom, not the animal. Never the literal _робоча конячка_ / _робочий кінь_, which reads as a joke in Ukrainian prose. Takes _у_ before the thing it is central to: "робить цикли `for` ключовим інструментом у JavaScript". |
| pitfall | пастка | uk | Stands alone; no gloss needed. |

### Platform & curriculum vocabulary

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| feature (platform capability) | можливість | uk | Deliberately distinct from _функція_ (function) to avoid collision. `function` (the programming concept) is _функція_; `feature` (a platform capability) is _можливість_. Never use _функція_ for a product feature. |
| lesson | урок | uk | |
| exercise | вправа | uk | |
| scenario | сценарій | uk | |
| curriculum | навчальна програма | uk | |
| course | курс | uk | The whole Jiki course the learner is taking: _у цьому курсі_. Distinct from _урок_ (lesson) and _навчальна програма_ (curriculum). |
| level | рівень | uk | |
| dashboard | панель керування | uk | Not bare _панель_ (reads badly in context, e.g. _поверніться на панель_). The learner's own landing screen after login (progress, streak, next steps), not an admin area. |
| milestone | віха / етап | uk | |
| pathway | шлях навчання | uk | |
| bootcamp | буткемп | uk | |
| syllabus | силабус | uk | |
| mentor | наставник | uk | _Ментор_ is an accepted alternative; do not mix наставник and ментор in one document. |
| track (curriculum path) | трек (курсу) | uk | |
| tutorial | туторіал / посібник | uk | |
| solution (learner's submission) | рішення | uk | |

### Drawing & colour (exercise family)

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| hue | відтінок | uk | Unconfirmed draft (agent, 2026-08-01). The 0-360 position on the colour wheel; recurs across the "draw" exercise family. |
| lightness | світлість | uk | Unconfirmed draft (agent, 2026-08-01). Deliberately distinct from _яскравість_ (brightness); keep it stable across the whole draw family. |
| canvas (drawing surface) | полотно | uk | Unconfirmed draft (agent, 2026-08-01). The surface drawn on, not the HTML element name. Do not mix with _канва_ / _канвас_ in one document. |
| hex color / hex string | шістнадцятковий колір / шістнадцятковий код кольору | uk | Unconfirmed draft (agent, 2026-08-01). Use the first for the colour itself, the second for the `#rrggbb` string. Not _hex-код_: keep the whole term in Ukrainian script. |
| radial width / radial height (also "horizontal radius / vertical radius") | горизонтальний радіус / вертикальний радіус | uk | An ellipse's `radiusX`/`radiusY`. The English source says "radial width/height" in the describers and "horizontal/vertical radius" in the instructions and function description for the same two values: render **both** wordings with this one pair. Not the formal geometry terms _велика піввісь_ / _мала піввісь_. At the first ellipse occurrence (the Penguin exercise) carry the one-time aside saying these are not the real geometric names; nowhere else. |
| box (drawing/forecast grid cell) | комірка | uk | Unconfirmed draft (agent, 2026-08-01). A numbered cell on the drawing canvas or forecast grid. Never _коробка_, which is reserved for the value-container metaphor. |

### Characters & story vocabulary (exercise family)

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| bouncer (the robot bouncer character) | охоронець | uk | Unconfirmed draft (agent, 2026-08-01). Neutral register; not the crude colloquial _викидайло_. |
| Yuki / Ando (rock-paper-scissors characters) | Юкі / Андо | uk | Unconfirmed draft (agent, 2026-08-01). **Prose only.** The sentinel strings the learner has to type stay Latin: `"Yuki"`, `"Ando"`, `"tie"`. |

## Keep in English

These stay in English in Ukrainian prose. Where the source `<define>`s one of these terms,
use the Ukrainian gloss shown below; with no `<define>`, use the English bare, with no gloss.

| Term | Ukrainian gloss (on `<define>`) | Notes |
|------|-----------------------------------|-------|
| string | _рядок тексту_ | Always gloss as _рядок тексту (англ. string)_ at each first mention per page, then _рядок тексту_ (not bare English _string_) afterwards, because a bare English word reads too jarring against Ukrainian sentences for learners. Do not switch to English-only after the first mention like other "Keep in English" terms. |
| Boolean / Booleans | _булеві значення_ | Always gloss as _булеві значення (англ. Boolean)_ at each first mention per page, then _булеві значення_ (not bare English _Boolean_) afterwards, exactly as `string` above. Singular is _булеве значення_. Do not switch to English-only after the first mention like other "Keep in English" terms. _Логічне значення_ is an accepted synonym if it reads better in context; do not mix both in one document. |
| component | _компонент_ | Where the source defines it, gloss as "component (компонент)". Use _компонент_ freely after that. |
| API | explain what it is in Ukrainian | Not a word a beginner knows; where defined, explain the concept in Ukrainian, not just gloss the acronym. |
| framework | _фреймворк_ | Where the source defines it, explain it means a reusable structure. |
| CLI (the concept) | _інтерфейс командного рядка_ | Where the source defines it, explain CLI as _інтерфейс командного рядка_ (command-line interface). |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| camel case | _горбатий регістр_ | Gloss **once**, at the very first mention across the course (the "Creating and Using Variables" article), as _горбатий регістр_ (_верблюдячий регістр_ is the known alternative; both are named after the animal, as _зміїний регістр_ is for snake case). Every later occurrence, on that page and on every other, uses the English _camel case_ bare. |
| meridiem | _позначка «meridiem»_ | Unconfirmed draft (agent, 2026-08-01). The am/pm indicator; carry it with the noun _позначка_. The sentinel values `am`/`pm` and expected time strings stay verbatim. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Ukrainian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | коробка | Neutral default. _Скринька_ (a warmer, chest/mailbox-adjacent word) is an accepted alternative if a passage wants a softer tone; do not mix both in one document. |
| label (on a variable box) | етикетка | Unconfirmed draft (agent, 2026-08-01). The name stuck on the outside of a _коробка_; part of the box metaphor set, so keep it stable rather than alternating with _підпис_ / _наліпка_ / _ярлик_. |
| chain (array metaphor) | ланцюжок | Not _ланцюг_. |
| piece of paper (string metaphor) | аркуш паперу | Unconfirmed draft (agent, 2026-08-01). Use _аркуш паперу_ consistently; do not alternate with _папірець_ / _листок_ in prose. |
| input slot | щілина | |
| return chute | лоток | |
| machine (function metaphor) | машина | "Little machines" is _маленькі машини_. Not the diminutive _машинка_. |
| crank (machine crank) | ручка | The handle Jiki turns to power a machine up: _покрутити ручку_. Not _корба_. |
| warehouse (Jiki's warehouse) | склад | Where Jiki hangs out and keeps his machine shelf: _склад Jiki_ (Jiki does not decline; see guide § Grammar and structure). |
| shelves (storage) | полиця / полиці | _полиця Jiki_, _машина з полиці_. |
| board / whiteboard | дошка | **One object, one word.** The board the learner puts instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word everywhere: _записувати вказівки на дошці_. No collision with _масив_ (array). |

## Brackets

Default to plain **дужки**. When a specific bracket type matters, name it and show the
glyph in a code tag immediately after: _квадратні дужки (`[]`)_.

| Glyph | Ukrainian | Notes |
|-------|-----------|-------|
| `()` | дужки · круглі дужки | Plain _дужки_ by default; add _круглі_ + glyph only when disambiguating. |
| `[]` | квадратні дужки | |
| `{}` | фігурні дужки | |
| `<>` | кутові дужки | |

---

## Decision log

### 2026-08-03: `Jeremy` transliterated as Джеремі, `workhorse` becomes ключовий інструмент

**Decided by:** iternewo (native speaker) on [t/880 post
28](https://forum.jiki.io/t/880/28), agreed by decard (native speaker) in the same
thread. **Terms affected:** `Jeremy`, `workhorse`.

- **`Jeremy` → Джеремі, in prose, everywhere.** iternewo asked for the name to be
  transliterated rather than left in Latin script, and noted it does not conjugate or
  decline, so it behaves in Ukrainian exactly like `Jiki` already does: no case endings,
  case carried by the surrounding words. Two files already used _Джеремі_ before this
  decision (`app/messages/uk.json`, in `loggedOutDescription` and `deepDiveDescription`),
  so the decision also settles an existing inconsistency rather than introducing a new
  form.

  The **code-string exception** is the reason this needed a Notes column rather than a
  bare row. In several places `Jeremy` is not the man's name in prose but the literal
  contents of a string the learner's code produces or is compared against: the Two Fer
  worked example (`twoFer("Jeremy")` → `"One for Jeremy, one for me."`), the Variables and
  Dictionaries pages (`let name = "Jeremy"`, `person["name"]`), and the Variables page's
  `alt` text, which describes the piece of paper with that string written on it. Those are
  sentinel values under `global/rules.md`, so they stay in Latin letters; transliterating
  them would make the exercise unpassable with no visible cause. Every other locale
  (hu, pl, fr, it, ru) already keeps the `alt`-text occurrence in Latin for the same
  reason, so the exception is consistent with how the rest of the course reads it.

  decard was explicitly waiting on this propagation for the Dress Code exercise, whose
  message catalog was the one place a bare Latin `Jeremy` sat in running Ukrainian prose.

- **`workhorse` → ключовий інструмент.** The existing translation of the For Loops page
  rendered the idiom literally as _робочою конячкою_ ("little workhorse"), which is a
  diminutive animal word and reads as a joke in explanatory prose. iternewo gave the
  worked replacement for the whole sentence ("Саме ця гнучкість робить цикли `for`
  ключовим інструментом у JavaScript"), which also fixes the government: the Ukrainian
  takes _у_ + the language name where English takes "of". The chosen noun deliberately
  reuses _інструмент_, already agreed for `tool`, so the row sits next to it.

### 2026-08-02: Unconfirmed drafts from the first Stage 3 batch (not yet in the glossary)

**Decided by:** nobody yet. These are **proposals**, surfaced by the fable workers that
translated the first 10 Stage 3 exercises (space-invaders-solve-basic, maze-solve-walk,
fix-wall, snowman-basic, foxy-face, penguin, cloud-rain-sun, jumbled-house,
golf-rolling-ball-loop, maze-solve-repeat). **None of them has been written into
`glossary.md`.**

- **alien** (space-invaders family) → **прибулець**. Surfaced independently by more than
  one worker on this batch, so it has more weight than a single proposal. Medium/high
  confidence.
- **laser cannon** → **лазерна гармата**. Medium confidence.
- **ammo** ("wasting ammo") → **заряди**. Medium confidence.
- **target image** (draw-family reference picture) → **цільове зображення**. Medium
  confidence.
- **corner point** (triangle corner) → **вершина**. Medium confidence.
- **charcoal** (prose colour word) → **вугільний (колір)**. Low confidence.
- **face** (animal character's face) → **мордочка**. Medium confidence.
- **iris** (eye part in drawing checks) → **райдужка**. Medium confidence.
- **Drawing Shapes** (function category label) → **Малювання фігур**. Already used
  consistently elsewhere, medium confidence.
- **cloud puff** → **клубочок (хмари)**. Low confidence.
- **instructions** (learner-facing directions, distinct from the existing
  "statement"/"instruction to Jiki" rows) → **вказівки**. Medium confidence.
- **tee** (golf tee) → **кілочок**. Medium confidence.
- **refactor** → **переписати (код)**. Medium confidence.

### 2026-08-02: Two more em-dash workaround patterns confirmed, not a rule exception

**Decided by:** agent, on native speaker decard's Word Count feedback, [t/880 post
2614](https://forum.jiki.io/t/880). **Terms affected:** none (a Style/Grammar guide
pattern, not a glossary row).

decard asked for a literal em dash in two sentences (a repeated predicate, and a
cause-pointing aside). Neither turned out to be grammatically unavoidable: a different verb
for the second clause fixes the first ("а значеннями **слугують** їхні частоти" instead of
repeating "є"), and the correlative **то** fixes the second ("апостроф, **то** символ
належить..."). Since a clean dashless rephrase existed for both, the global no-em-dash rule
stands; no Ukrainian exception was carved out. Both patterns are recorded in the guide next
to the existing copula-sentence workaround, so a future pass doesn't have to re-derive them.
If a genuinely dash-unavoidable case ever surfaces, that would be the trigger to revisit this.

### 2026-08-02: `radial width / radial height` RESOLVED, `camel case` glossed once, `Boolean` localized

**Decided by:** decard (native speaker) on the pinned Ukrainian glossary thread,
[t/308 post 12](https://forum.jiki.io/t/308/12), for the first two; iternewo (native
speaker) on [t/308 post 13](https://forum.jiki.io/t/308/13) for the third.
**Terms affected:** `radial width / radial height`, `camel case`, `Boolean`.

- **`radial width / radial height` → горизонтальний радіус / вертикальний радіус.** This
  **resolves** the low-confidence draft flagged in the 2026-08-01 batch-1 entry below and
  the question raised for this thread; the row is no longer provisional and is now a human
  native speaker's decision. decard traced the English source itself: the describers say
  "a radial width of X, a radial height of Y", while the instructions and the function
  description for the same call say "horizontal radius"/"vertical radius" (`radiusX`,
  `radiusY`), so the two English wordings name the same two values and take one Ukrainian
  pair. The formally correct Ukrainian terms are _велика піввісь_ / _мала піввісь_
  (semi-major / semi-minor axis), but they are unintuitive, uncommon, largely confined to
  mathematical literature, and they contradict the parameter names the learner actually
  types. So the literal, recognizable rendering wins over the technically exact one. Because
  it is not a real geometric term, decard asked for a single explanatory aside where
  ellipses are first introduced (the Penguin exercise), and nowhere else. Her suggested
  wording: _В геометрії вони називаються велика та мала піввісь, але в цьому курсі ми
  будемо використовувати слова «горизонтальний радіус» та «вертикальний радіус» на
  позначення цих відстаней задля наочності._ That aside is prose in a translated file, not
  a term, so it is queued in `state/content-updates-needed.md` for the next Penguin pass
  rather than written into the glossary.
- **`camel case` becomes gloss-once, then English.** The previous row (an unconfirmed agent
  draft, 2026-08-01) kept it in English outright with no gloss. decard's revision: translate
  it once, at its introduction in the "Creating and Using Variables" article, as _горбатий
  регістр_ (also known as _верблюдячий регістр_, named after the animal, in the same way
  snake case is _зміїний регістр_), then keep the English term for every other occurrence.
  This gives the beginner the camel image once without introducing a Ukrainian coinage the
  rest of the course would have to carry.
- **`Boolean` is now translated, not kept in English.** iternewo petitioned for **булеві
  значення**, on the same reasoning that settled `string`: an isolated English word inside
  Ukrainian sentences reads as a mistake rather than a deliberate choice. He notes the
  Ukrainian form is heard in public-school education, so it will not raise eyebrows,
  provided the definition and the English equivalent are given on first encounter. The row
  now follows the `string` pattern exactly (_булеві значення (англ. Boolean)_ at each first
  mention per page, _булеві значення_ afterwards, never bare English). It stays physically
  in the "Keep in English" table next to `string`, which carries the same exception. The
  previous row was an unconfirmed draft (nothing in this log recorded a human deciding it);
  the accepted synonym _логічне значення_ is retained from it.

### 2026-08-01: Stage 2c

**Decided by:** agent proposals from the Stage-2 batch-3 (Stage 2c) translation passes
(concepts else, else-if, for-loops, while-loops, dictionaries; exercises maze-turn-around,
bouncer-dress-code, luhn, digital-root, word-count). Not a forum thread; not
native-speaker-sourced.
**Status:** unconfirmed drafts, logged here only. **Not written to `glossary.md`.** None of
these outrank a later native-speaker call.
**Terms affected:** `else clause`, `initializer`, `infinite loop`, `data structure`,
`spiral notebook sheet (dictionary metaphor)`, `Sensing (maze function category)`,
`valid / invalid`, `checksum`, `formal (dress code)`, `smart (dress code)`,
`to turn away (bouncer action)`, `dress code`, plus two open questions on `bug` and
`true`/`false`.

Proposed rows (all unconfirmed drafts):

- `else clause / else branch` → **гілка else** (medium). Keeps _блок_ free for "code block"
  (блок коду); matches Ukrainian dev writing on if/else branching. Keyword `else` stays
  English. (else pass)
- `initializer (for-loop part)` → **ініціалізатор** (medium). The ordinary developer
  borrowing, chosen over the descriptive _початкове значення_; sets the direction for the
  other loop-part names. (for-loops pass)
- `infinite loop` → **нескінченний цикл** (medium). Alternative _безкінечний_ exists, so
  one form is worth pinning; recurs across loop content. (while-loops pass)
- `data structure` → **структура даних** (high). `<define>`d umbrella term sitting next to
  the agreed _тип даних_ rows; pinned so passes do not conflate the two. (dictionaries pass)
- `spiral notebook sheet (dictionary metaphor)` → **аркуш зі спірального блокнота**
  (medium). The dictionary-metaphor object set, parallel to коробка/ланцюжок.
  (dictionaries pass)
- `Sensing (maze function category)` → **Сприйняття** (medium). Category label shared by
  every maze exercise's function panel; must stay identical family-wide. Movement → Рух is
  obvious and not proposed. (maze-turn-around pass)
- `valid / invalid (number, input)` → **дійсний / недійсний** (medium). Recurs across the
  validation exercises (Luhn, ISBN), which cross-reference each other. (luhn pass)
- `checksum` → **контрольна сума** (low). Likely the one canonical rendering; listed to
  block calques like _чек-сума_. (luhn pass)
- `formal (dress-code category)` → **урочисте вбрання** (medium) and `smart (dress-code
  category)` → **елегантне вбрання** (medium). Shared across all three bouncer exercises;
  the pair must stay stable together. (bouncer-dress-code pass)
- `to turn away (bouncer action)` → **відмовити у вході** (medium). Pairs with _впустити_;
  used across checks, describers, scenarios and instructions of every bouncer exercise.
  (bouncer-dress-code pass)
- `dress code` → **дрес-код** (low). Spelling-variant question only (_дрескод_ vs
  _дрес-код_); appears in an exercise title. (bouncer-dress-code pass)

Open questions (no row proposed):

- `bug` in running prose: the Keep-in-English row ("Bug, no gloss") breaks in inflected
  prose; the while-loops pass used _помилки_. Needs a decision between Latin _bug_,
  Cyrillic _баг_, or folding into _помилка_.
- `true`/`false` in "returns true or false" catalog phrasing: the glossary maps prose
  true/false to _правда/неправда_, but the word-count pass kept the literal returned values
  Latin (`повертає true або false`). The existing row's Notes could record which side wins
  in "returns X" phrasing.

### 2026-08-01: Seven terms added as unconfirmed drafts from the Stage-2 batch-2 passes

**Decided by:** agent, per the standing rule from the owner (iHiD) that translation-pass
proposals are added to the glossary as unconfirmed drafts rather than held back for review.
**Source:** the five Stage-2 batch-2 translation passes (exercise/two-fer, concept/strings,
exercise/digital-clock, concept/arrays, exercise/weather-symbols). Not a forum thread; not
native-speaker-sourced.
**Status:** unconfirmed drafts. None of these outrank a later native-speaker call.
**Terms affected:** `data type`, `compound data type`, `default (value)`,
`to iterate (through an array/string)`, `box (drawing/forecast grid cell)`, `meridiem`,
`piece of paper (string metaphor)`.

- **From the concept/arrays pass:** `data type` → **тип даних** (canonical, pinned because
  it anchors the next row). `compound data type` → **складений тип даних**: _складний_
  means "difficult" (wrong sense) and _композитний_ is a rarer borrowing; sets a precedent
  for the arrays and dictionaries pages. `to iterate` → **перебирати (елементи)**: the
  glossary only had the noun _ітерація_; the everyday verb was chosen over the calque
  _ітерувати_ for beginner prose, and different passes could reasonably diverge without a
  row.
- **From the exercise/two-fer pass:** `default (value)` → **типове значення / типовий**,
  chosen over _за замовчуванням_ and _усталений_; recurs across hints and exercises.
- **From the concept/strings pass:** `piece of paper` (the string metaphor object) →
  **аркуш паперу**, part of the Jiki metaphor set alongside коробка/ланцюжок; _папірець_
  and _листок_ are equally plausible, which is exactly why it needs pinning. The pass
  itself used _аркуш паперу_ in prose but _папірець_ once in an image alt; the row settles
  on _аркуш паперу_.
- **From the exercise/weather-symbols pass:** `box (drawing/forecast grid cell)` →
  **комірка**. This is a distinct sense from the value-container metaphor _коробка_; a
  translator following the metaphor row would collide the two, so the split is recorded
  explicitly.
- **From the exercise/digital-clock pass:** `meridiem` kept in English as **позначка
  «meridiem»**, added under "Keep in English". The exercise teaches the word itself, and a
  Ukrainian coinage would diverge from the sentinel values `am`/`pm` the learner must
  produce.

**Open question for the pinned thread ([t/308](https://forum.jiki.io/t/308)):** the
`string` row mandates _рядок тексту_ in prose, but the uk draw-family base catalog (a
prior decision) uses bare `типу string` in error messages. The weather-symbols pass
followed the family catalog for its sibling error message so the two catalogs read
consistently on one screen. Whether catalog error messages are exempt from the _рядок
тексту_ rule needs a native-speaker call.

### 2026-08-01: Jiki takes masculine verb agreement, especially in `describers`

**Decided by:** decard (native speaker), on forum topic
[t/880](https://forum.jiki.io/t/880), reviewing the rainbow and rock-paper-scissors
exercises. **Terms affected:** none; this is a grammar rule, recorded in `guide.md`.

decard flagged that the uk exercise message catalogs described Jiki's actions with
feminine past-tense verbs (_намалювала_, _очистила_, _перетворила_, _оголосила_,
_повернула_). Jiki is male, so all such verbs take the masculine form. The `describers`
strings are the recurring failure point because the verb starts the string with no visible
subject, so the agreement has nothing nearby to cue it. The rule is not exercise-specific,
which is why it lives in `guide.md` rather than in a per-item reviewer-notes file.

The fix was applied to the shared category catalogs
(`exercise-categories/draw` and `exercise-categories/rock-paper-scissors`), which is where
the describers actually live; a sweep of every uk exercise and category catalog found no
other feminine or neuter forms remaining.

### 2026-08-01: House-style fix in the `string` row

**Decided by:** agent, applying the no-em-dash rule in `CLAUDE.md` and `global/rules.md`.
**Terms affected:** `string` (punctuation of the Notes column only).

The Notes cell used an em dash, which house style bans in these docs; it now reads "…
afterwards, because a bare English word reads too jarring…". The decision itself, iternewo
and decard's call that `string` is always rendered _рядок тексту (англ. string)_ at first
mention per page and _рядок тексту_ afterwards, is untouched and was not re-examined: it is a
native-speaker decision and outranks any agent's opinion, including the general no-auto-gloss
rule in `global/voice.md`.

### 2026-08-01: `guide.md` trimmed to rules only; its rationale recorded here

**Decided by:** iHiD (owner), as a structural clean-up of `languages/uk/guide.md`. No
linguistic decision was changed, reversed or reworded: this entry only records where the
existing material went and the reasoning that was removed from the guide.
**Terms affected:** `journey` (new row), `feature (platform capability)` (Notes column
only).

`guide.md` is loaded in full into the prompt for every Ukrainian item in every pass, so it
now states only rules. Everything below was removed from it.

**Moved to the glossary**

- **`journey`** (as in "our journey into the world of programming") → **подорож**, added to
  "Core decisions" with the decision verbatim: prefer _подорож_ over _мандрівка_. The
  reasoning, from iternewo (native speaker) on [t/784](https://forum.jiki.io/t/784):
  _подорож_ is a journey with a defined plan and goal and has wider register, matching how
  Jiki frames the course; _мандрівка_ emphasizes the emotion and process of wandering and
  reads as tourism-flavored, which is the wrong connotation here.
- **`feature` vs `function`.** The guide carried a Style note saying these must not collide:
  `function` (the programming concept) is _функція_, `feature` (a platform capability) is
  _можливість_, and _функція_ is never used for a product feature. The glossary row for
  `feature` already carried the same decision and pointed back at the guide, a circular
  cross-reference. The instruction now lives only in the `feature` row's Notes column; the
  pointer to the guide is gone.

**Removed as duplication**

- A Style note saying that exercise prose sometimes says "list" where concept pages say
  "array", that both are the same concept, and that both render as _масив_ with no second
  word introduced. This is word for word what the `array / list` glossary row's Notes
  column already says.
- A Style note giving the Ukrainian replacement for an em dash. `global/rules.md` already
  bans em dashes globally; the Ukrainian-specific part of it (a comma for a mid-sentence
  aside, or two sentences) was kept, moved into § Grammar and structure next to the copula
  rule it interacts with.
- An "Audience specifics" section noting that readers are in Ukraine and Ukrainian-speaking
  communities abroad, and that Ukrainian online technical education leans slightly more
  formal than some other markets so readers do not expect overfamiliar address from an
  unknown platform. The second point is the rationale for the Formality section stated ten
  lines below it; the first changes nothing a translator writes.

**Rationale and provenance removed from the guide, kept here**

- **Formality research.** The register choice was made because no strong precedent was found
  for sustained direct informal "ти" addressed to an adult stranger in serious Ukrainian
  programming education. The closest comparable resource, uk.javascript.info (a large,
  actively human-maintained Ukrainian JS tutorial), sidesteps the choice entirely by using
  the collective "ми" plus inclusive imperatives, which is the pattern the guide adopts: it
  keeps the encouraging, inclusive Jiki tone without the ти-to-a-stranger presumptuousness
  or the ви-to-a-beginner coldness. Direct "ти" reads as unusually casual for this genre and
  is unattested in the sources reviewed. Pure formal "ви" is correct and is used by some
  platforms (e.g. Prometheus.org.ua) but reads more distant than the Jiki voice wants. The
  guide also carried a note that this is the first thing to revisit if native-speaker
  feedback surfaces a strong preference either way; that remains true and is recorded here
  rather than in the guide.
- **The handoff-imperative exception** (a standalone instruction to the learner takes the
  plain imperative, додайте, while narrative prose stays inclusive) came from iternewo
  (native speaker) in [t/817 posts 2 and 4](https://forum.jiki.io/t/817), and was confirmed
  there as a one-line-category fix, not a request to drop "ми" generally.
- **Quotation marks.** The « » primary convention is the 2019 official orthography
  (Український правопис). The guide's warning not to carry over a „ "-primary convention was
  originally phrased against Hungarian specifically.
- **Dative -ові/-еві vs -у/-ю**, **conjunction euphony і vs й** and **the analytic future
  tense** all come from iternewo (native speaker) on
  [t/784](https://forum.jiki.io/t/784). He confirmed the dative rule applies generally
  rather than only to "interpreter", gave _створювати і власні машини_ as the euphony
  example, and said the analytic "будемо + infinitive" future reads easier than the
  synthetic form in this kind of prose.
- **_поєднувати_ vs _склеювати_** was confirmed against the English source on
  [t/784](https://forum.jiki.io/t/784): "He can stick things together" sits in a list of
  abstract interpreter capabilities (repeat, conditionals, memory, errors), not in the
  crank/machine scene, so the neutral rendering is correct there. **This rule was left in
  the guide, not moved to the glossary**, because it is conditional on context rather than a
  flat term mapping, and because moving it would put it next to the existing
  `concatenation / to concatenate` → _конкатенація / зʼєднати (рядки)_ row, which it appears
  to overlap with (the guide's rule names string concatenation as a case for _поєднувати_).
  That apparent disagreement is recorded, deliberately not resolved, and needs a
  native-speaker call.

### 2026-08-01: `string` always glossed as _рядок тексту (англ. string)_, never bare English

**Decided by:** native speakers (iternewo and decard, agreed together) on the pinned
Ukrainian glossary thread, forum topic 308, post #11 (https://forum.jiki.io/t/308/11), and
on the new-content thread, topic 880, post #3 (https://forum.jiki.io/t/880/3).
**Terms affected:** `string`.

The row previously followed the usual "Keep in English" pattern: gloss once as _рядок_ on
first mention, then use bare English _string_ afterwards. iternewo and decard say this is
too cognitively jarring for learners across every article that uses it, an isolated English
word standing out of Ukrainian prose reads as a mistake, not a deliberate choice. Changed to
always render _рядок тексту (англ. string)_ at first mention per page and _рядок тексту_
(not bare English) afterwards. Also fixes the target word itself: _рядок тексту_ (line of
text) rather than bare _рядок_ (line), which is ambiguous on its own.

### 2026-08-01: Nine terms added as unconfirmed drafts from the Stage-2 batch-1 passes

**Decided by:** agent, per the standing rule from the owner (iHiD) that translation-pass
proposals are added to the glossary as unconfirmed drafts rather than held back for review:
the only way a native speaker gives feedback is by seeing the term on the published site.
**Source:** the five Stage-2 batch-1 translation passes (concept/variables, concept/if,
concept/repeat, exercise/rock-paper-scissors, exercise/rainbow). Not a forum thread; not
native-speaker-sourced.
**Status:** unconfirmed drafts. None of these outrank a later native-speaker call.
**Terms affected:** `bouncer`, `camel case`, `label`, `hue`, `lightness`, `canvas`,
`hex color / hex string`, `radial width / radial height`, `Yuki / Ando`.

Nine rows added, each filed under the best-fit existing section, with two new subsections
under "Localize" for the groups that had no home:

- **From the exercise/rock-paper-scissors pass:** `bouncer` (the recurring robot-bouncer
  character) → **охоронець**, chosen for neutral register over the crude colloquial
  _викидайло_, which is the word Ukrainian actually uses for a nightclub bouncer but is far
  too coarse for a children's-course character. `Yuki / Ando` → **Юкі / Андо**, transliterated
  in prose only: the sentinel strings the learner has to type (`"Yuki"`, `"Ando"`, `"tie"`)
  stay Latin, because they are compared against literally and translating them would break
  the exercise. Both went into a new "Characters & story vocabulary (exercise family)"
  subsection.
- **From the concept/variables pass:** `camel case` kept in English, added under "Keep in
  English". Real Ukrainian alternatives exist, but the English form is what Ukrainian
  developers actually say, and the camel image the concept page leans on is carried by the
  surrounding explanation rather than by the term itself. `label` (the name stuck on the
  outside of a variable box) → **етикетка**, added to "Jiki physical metaphors" because it
  belongs to the recurring box-metaphor set alongside _коробка_. _Підпис_, _наліпка_ and
  _ярлик_ are all defensible; the point of glossarying it is that this word recurs every
  time variables come up, so it must not drift between pages.
- **From the exercise/rainbow pass, plus the draw-family message catalogs:** `hue` →
  **відтінок** and `lightness` → **світлість**, the two HSL terms. Both were already used
  consistently by the workers across both catalogs. `lightness` is the one with a real
  collision risk: _яскравість_ is "brightness", a different channel, so _світлість_ has to
  stay stable family-wide. `canvas` → **полотно**, likewise already consistent across both
  catalogs, with _канва_ and _канвас_ as the live alternatives. `hex color / hex string` →
  **шістнадцятковий колір / шістнадцятковий код кольору**; _hex-код_ is common in Ukrainian
  dev writing but leaves a bare Latin token inside a Ukrainian word, which this glossary
  avoids elsewhere (see the `tech / tech industry` entry below). All filed under a new
  "Drawing & colour (exercise family)" subsection.
- **`radial width / radial height` → радіальна ширина / радіальна висота is low
  confidence and explicitly needs a native-speaker check.** These render an ellipse's
  `rx`/`ry`. The English is itself a coinage, and the Ukrainian is a literal calque of it,
  so it may read as ambiguous or simply odd to a Ukrainian speaker (the alternative framings
  are a semi-axis reading, or just "width/height of the ellipse"). Flag this one on the
  pinned Ukrainian glossary thread, [t/308](https://forum.jiki.io/t/308), and treat the row
  as provisional until it comes back.

These are agent proposals from live translation work, added immediately per the standing
rule above so that publishing the glossary to i18n is what surfaces them for review.

### 2026-07-31: `dashboard` added as панель керування

**Decided by:** iternewo (native speaker), in
[t/817 posts 2 and 4](https://forum.jiki.io/t/817).
**Terms affected:** `dashboard`.

- iternewo flagged in post 2 that `dashboard` appears in the Solve the Maze exercise but was
  missing from the glossary, and initially suggested _адмін-панель_. Asked to clarify in
  post 3, since Jiki's dashboard is the learner's own landing screen (progress, streak, next
  steps) and not an admin area. In post 4 he confirmed **панель керування** works, and
  separately noted that bare _панель_ (as used in the exercise text, "поверніться на
  панель") reads badly in this context.
- New row: `dashboard` → **панель керування**.

### 2026-07-31: `Test` confirmed staying in English

**Decided by:** iternewo (native speaker), in
[t/308 post 6](https://forum.jiki.io/t/ukrainian-review-glossary/308/6), answering the
clarifying question asked in post 5 of the same thread.

- In [post 4](https://forum.jiki.io/t/ukrainian-review-glossary/308/4) iternewo proposed
  `Test` → _Тест_ alongside the `tech / tech industry` change above. Post 5 asked him to
  clarify whether he meant the word in prose (a straightforward glossary row) or the literal
  label on the editor's Test button (a UI-string decision affecting every language, not just
  a glossary row).
- In post 6 he clarified he was looking at the existing glossary row itself: `Debug, Test`
  under "Keep in English", listed as keywords/technical tokens. He noted he wasn't sure why
  `Test` is kept in English beyond familiarity with English IDEs, but said he is "happy to
  let it stay Test if it makes sense."
- No change to the row: `Test` stays in the "Keep in English" section exactly as it reads
  today. This is now a **settled, native-speaker-confirmed** row, not just a bootstrap
  guess: do not change it to _Тест_ without going back to him on the thread.

### 2026-07-31: `tech / tech industry` becomes IT-індустрія

**Decided by:** iHiD (owner), on iternewo's (native speaker) proposal in
[t/308 post 4](https://forum.jiki.io/t/ukrainian-review-glossary/308/4).
**Terms affected:** `tech / tech industry`.

- **`tech / tech industry`** now renders as **IT-індустрія**, replacing the bootstrap guess
  _tech-індустрія_. The old form left a bare Latin token inside a Ukrainian word, which is
  exactly the thing the rest of this glossary avoids; _IT_ is the initialism Ukrainian
  actually uses for the sector. It also matches the pattern the pl, ro, sr, ko and ja
  glossaries already landed on independently.
- This is a human native speaker's decision and is **settled**: do not revert it to a
  hybrid form without going back to him on the thread.

Also proposed in the same post: `Test` → _Тест_. Not actioned. `Test` is currently listed
under "Keep in English" as a technical token, and it is unclear whether he means the word
in prose or the literal text of a UI button, which would be a UI-string decision rather
than a glossary row. Asked for clarification on the thread; still open.

### 2026-07-12: Native-speaker corrections from forum topic t/308

**Decided by:** iternewo (native speaker), forum topic t/308 (post of 2026-07-12).
**Terms affected:** `for loop`, `while loop`, `for-of loop`, `mentor`.

- **`for loop` / `while loop` / `for-of loop`** all take the pattern _цикл_ + the real
  keyword, in that order: `цикл for`, `цикл while`, `цикл for-of`. The keyword itself stays
  in English, since it is the real JavaScript keyword, not a translated label.
- **`mentor`** renders as **наставник**. The row iternewo submitted is internally
  inconsistent: he put _наставник_ in the target-term column, but his own note calls
  _наставник_ itself "an accepted alternative", which reads as though _ментор_ should be
  primary and _наставник_ the alternative. This entry follows the column he filled in, not
  the prose gloss, so **наставник is recorded as the primary rendering and ментор as the
  accepted alternative**; do not mix both in one document. The ambiguity is recorded here
  rather than resolved, since it was never put back to him for clarification.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`for loop`, `while loop`, `for-of loop`, `mentor`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, unambiguous. |
| developer | Standard Ukrainian equivalent. |
| tech / tech industry | Hybrid, mirroring the Hungarian/Portuguese pattern. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| character | Correction from an earlier community proposal ("знак"); _символ_ is the term used throughout php.org.ua's string-function docs. |
| index | Direct cognate. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Correction from an earlier community proposal ("умовне твердження"). |
| condition, comparison | Ordinary words. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| interpreter | The word carries the person sense natively; СУМ defines _інтерпретатор_ as "той, хто інтерпретує, пояснює що-небудь; тлумач", so the ordinary CS term is also an agent noun for a person and no separate person-word is needed. |
| mental model | Well established in Ukrainian educational and popular-science writing. |
| (programming) language | The ordinary native word. |
| assignment | Correction from an earlier community proposal ("надавання"); _присвоєння_ is the term used on php.org.ua. |
| code block | Correction from an earlier community proposal ("блок програми"), which collided with the term for "scope." |
| modulo / remainder operator | Standard mathematical term. |
| scope | Correction from an earlier community proposal ("блок програми"), which collided with "code block." Confirmed against Ukrainian Wikipedia's dedicated article and php.org.ua's manual, which both use this exact term. |
| method | Corrects a typo in an earlier community proposal ("метд"). |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Correction from an earlier community proposal ("розмістити"); _розгортання/розгорнути_ is the term used in Ukrainian Wikipedia's "Розгортання програмного забезпечення" article. |
| auth | Both _автентифікація_ and _авторизація_ are standard, direct cognates. |
| backwards compatibility | Standard, well-established term. |
| pitfall | Ordinary word. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| bootcamp | Loanword, common in Ukrainian tech-education discourse. |
| syllabus | Loanword used in Ukrainian higher education. |

#### Keep in English

| Term | Why |
|------|-----|
| framework | Kept as a loanword; well-attested in Ukrainian dev writing. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | Not _ланцюг_: the plain word carries real cultural weight (кайдани/shackles, a Shevchenko-era literary association with captivity). _Ланцюжок_ (diminutive) avoids that and already has precedent as a Ukrainian pedagogical device for sequential/ordered things ("логічний ланцюжок," "математичні ланцюжки" in early-grades teaching materials). |
| input slot | The narrow opening you feed something into. СУМ (the standard Ukrainian dictionary) attests an explicit coin/token-slot sense for this word. |
| return chute | The tray/chute image, as in a vending machine's coin return or a delivery chute. Pairs with _щілина_ into one coherent "vending machine" mental model; keeps the input/output asymmetry that English gets from "slot" vs. "chute." |
| machine | _Машинка_ is warmer but reads as a toy car or a sewing machine. |
| crank | _Ручка_ also means "pen", but the collocation and physical context leave no ambiguity. _Корба_ is the precise word for a crank handle but is uncommon and regionally marked. |
| board / whiteboard | Ordinary word for a writing board in a room. |
