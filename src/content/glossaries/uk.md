---
lang: "uk"
name: "Ukrainian"
family: null
stage: "setup"
governance_sha: "8e3de87"
content_version: "bbd0c9985eb3"
published_at: "2026-07-31"
term_count: 112
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
| pitfall | пастка | uk | Stands alone; no gloss needed. |

### Platform & curriculum vocabulary

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| feature (platform capability) | можливість | uk | Deliberately distinct from _функція_ (function) to avoid collision; see guide § Style notes. |
| lesson | урок | uk | |
| exercise | вправа | uk | |
| scenario | сценарій | uk | |
| curriculum | навчальна програма | uk | |
| course | курс | uk | The whole Jiki course the learner is taking: _у цьому курсі_. Distinct from _урок_ (lesson) and _навчальна програма_ (curriculum). |
| level | рівень | uk | |
| milestone | віха / етап | uk | |
| pathway | шлях навчання | uk | |
| bootcamp | буткемп | uk | |
| syllabus | силабус | uk | |
| mentor | наставник | uk | _Ментор_ is an accepted alternative; do not mix наставник and ментор in one document. |
| track (curriculum path) | трек (курсу) | uk | |
| tutorial | туторіал / посібник | uk | |
| solution (learner's submission) | рішення | uk | |

## Keep in English

These stay in English in Ukrainian prose. Where the source `<define>`s one of these terms,
use the Ukrainian gloss shown below; with no `<define>`, use the English bare, with no gloss.

| Term | Ukrainian gloss (on `<define>`) | Notes |
|------|-----------------------------------|-------|
| string | _рядок_ | Exception: the string concept itself uses _рядок_ where the source defines it, then _string_ throughout. |
| Boolean | _булеве значення_ | Exception: where the source defines it, explain it means _булеве значення_, then use _Boolean_. _Логічне значення_ is an accepted synonym if it reads better in context; do not mix both in one document. |
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

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Ukrainian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | коробка | Neutral default. _Скринька_ (a warmer, chest/mailbox-adjacent word) is an accepted alternative if a passage wants a softer tone; do not mix both in one document. |
| chain (array metaphor) | ланцюжок | Not _ланцюг_. |
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
