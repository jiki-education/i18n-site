---
lang: "uk"
name: "Ukrainian"
family: null
governance_sha: "1d91ad4"
content_version: "78857ea58bbc"
published_at: "2026-07-30"
term_count: 112
forum_topic_id: 308
---

# Ukrainian (uk) glossary

The agreed term list for Ukrainian. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

See `global/workflow.md` for the agreement gate, the additive-write rule, and the meaning of
the `Agreed by` column. In short: nothing is written here without prior agreement, writes
are additive, and a `human` row is never changed by a pass.

## Core decisions

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| programming / coding | програмування | uk | Standard, unambiguous. | agent |
| developer | розробник | uk | Standard Ukrainian equivalent. | agent |
| tech / tech industry | tech-індустрія | uk | Hybrid, mirroring the Hungarian/Portuguese pattern. | agent |
| streak | серія (днів) | uk | | agent |

## Localize (use the Ukrainian term)

These are terms where the Ukrainian is used in prose, so the "Use (uk/en)" column is `uk` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| value | значення | uk | Ordinary word. | agent |
| number | число | uk | Ordinary word. | agent |
| character | символ | uk | Correction from an earlier community proposal ("знак"); _символ_ is the term used throughout php.org.ua's string-function docs. | agent |
| integer | ціле число | uk | | agent |
| true / false | правда / неправда | uk | _Істина/хиба_ (a more formal-logic register) is an accepted alternative; do not mix both in one document. Not capitalised in prose. | agent |
| float / decimal | число з плаваючою комою / десяткове число | uk | Use the first form when the floating-point nature matters, the second for the simpler beginner sense. | agent |
| array / list | масив | uk | Exercise prose sometimes says "list" informally for the same concept; render both with _масив_, do not introduce a second word. | agent |
| dictionary | словник | uk | | agent |
| element | елемент | uk | Array element = _елемент масиву_. | agent |
| index | індекс | uk | Direct cognate; no clarification parens needed. | agent |
| key-value pair | пара ключ-значення | uk | The key itself is _ключ_ (ordinary word once introduced). | agent |
| template literal | шаблонний рядок | uk | | agent |

### Functions & control flow

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| if statement | умовна конструкція / умовний оператор | uk | Correction from an earlier community proposal ("умовне твердження"), which collided with the "statement (logical claim)" term. | agent |
| condition | умова | uk | Ordinary word; stands alone. | agent |
| comparison | порівняння | uk | Ordinary word; stands alone. | agent |
| expression | вираз | uk | | agent |
| operator | оператор | uk | | agent |
| NOT operator / logical negation | заперечення (логічне) | uk | | agent |
| statement (executable) | інструкція | uk | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _оператор_ (operator) to avoid collision. **_Інструкція_ is reserved for this sense**, which is why `instruction (given to Jiki)` below is _вказівка_ and not _інструкція_. | agent |
| statement (logical claim) | твердження | uk | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. | agent |
| function | функція | uk | The *keyword* `function` in code stays English; the concept in prose is _функція_. | agent |
| to call (a function) | викликати (функцію) | uk | | agent |
| to define (a function) | визначати (функцію) | uk | | agent |
| parameter | параметр | uk | | agent |
| argument | аргумент | uk | Call-site value sense. | agent |
| input (to a function) | вхідні дані | uk | | agent |
| output | вихідні дані | uk | | agent |
| to return (a value) | повернути (значення) | uk | | agent |
| return value | повернене значення | uk | Noun form; distinct from the verb "to return." | agent |
| brackets (the two after a function name) | дужки | uk | The `()` pair written after a function name to call it: _написати її назву, а потім ті дві дужки_. Plain _дужки_ here; only name the type when disambiguating (see § Brackets). | agent |
| pure function | чиста функція | uk | | agent |

### Loops, state & program flow

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| keyword | ключове слово | uk | | agent |
| interpreter | інтерпретатор | uk | **A person doing a job, not a program**: in the course Jiki *is* the interpreter. This word carries that sense natively; СУМ defines _інтерпретатор_ as "той, хто інтерпретує, пояснює що-небудь; тлумач", so the ordinary CS term is also an agent noun for a person and no separate person-word is needed. Not _тлумач_ (archaic, scriptural register). Copula sentences about it must be rephrased; see guide § Grammar and structure. | agent |
| instruction (given to Jiki) | вказівка | uk | One thing the learner tells Jiki to do. Everyday word, not formal register. Deliberately **not** _інструкція_, which this glossary binds to `statement (executable)` above; and not _команда_, which collides with "command". | agent |
| mental model | ментальна модель | uk | Well established in Ukrainian educational and popular-science writing. | agent |
| (programming) language | мова (програмування) | uk | The ordinary native word, never a borrowing: _мова програмування_, and _мова, яку розуміє компʼютер_ for the "language a computer understands" framing. | agent |
| variable | змінна | uk | | agent |
| assignment | присвоєння | uk | Correction from an earlier community proposal ("надавання"); _присвоєння_ is the term used on php.org.ua. | agent |
| to assign | присвоювати (значення) | uk | Matches _присвоєння_ above. | agent |
| code block | блок коду | uk | Correction from an earlier community proposal ("блок програми"), which collided with the term for "scope." | agent |
| error | помилка | uk | | agent |
| nested | вкладений | uk | e.g. _вкладений цикл_ = nested loop | agent |
| iteration | ітерація | uk | | agent |
| to run / execute (code) | запустити / виконати | uk | | agent |
| loop | цикл | uk | | agent |
| for loop | цикл `for` | uk | _цикл_ + the real keyword, in that order. | human (t/308) |
| while loop | цикл `while` | uk | As above. | human (t/308) |
| for-of loop | цикл `for-of` | uk | As above. | human (t/308) |
| loop body | тіло циклу | uk | | agent |
| break (loop control) | перервати (цикл) | uk | The keyword `break` in code stays English; this is the prose verb for the concept. | agent |
| increment | інкремент | uk | "збільшення на одиницю" also natural in a fuller explanation. | agent |
| modulo / remainder operator | остача (від ділення) | uk | Standard mathematical term. | agent |
| concatenation / to concatenate | конкатенація / зʼєднати (рядки) | uk | | agent |
| toggle | перемикати | uk | | agent |
| state / stateful | стан | uk | | agent |
| scope | область видимості | uk | Correction from an earlier community proposal ("блок програми"), which collided with "code block." Confirmed against Ukrainian Wikipedia's dedicated article and php.org.ua's manual, which both use this exact term. | agent |
| class | клас | uk | | agent |
| method | метод | uk | Corrects a typo in an earlier community proposal ("метд"). | agent |
| property | властивість | uk | | agent |
| object | обʼєкт | uk | Use the modifier letter apostrophe ʼ (U+02BC); see guide § Orthography. | agent |

### Tooling & engineering

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| deploy (verb: to deploy) | розгортання / розгорнути | uk | Correction from an earlier community proposal ("розмістити"); _розгортання/розгорнути_ is the term used in Ukrainian Wikipedia's "Розгортання програмного забезпечення" article. | agent |
| auth (authentication / authorization) | автентифікація / авторизація | uk | Pick by meaning; both are standard, direct cognates. | agent |
| module | модуль | uk | | agent |
| algorithm | алгоритм | uk | | agent |
| edge case | крайній випадок | uk | | agent |
| backwards compatibility | зворотна сумісність | uk | Standard, well-established term. | agent |
| tool / tooling | інструмент / інструментарій | uk | | agent |
| pitfall | пастка | uk | Ordinary word; stands alone. | agent |

### Platform & curriculum vocabulary

| English | Ukrainian | Use (uk/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| feature (platform capability) | можливість | uk | Deliberately distinct from _функція_ (function) to avoid collision; see guide § Style notes. | agent |
| lesson | урок | uk | | agent |
| exercise | вправа | uk | | agent |
| scenario | сценарій | uk | | agent |
| curriculum | навчальна програма | uk | | agent |
| course | курс | uk | The whole Jiki course the learner is taking: _у цьому курсі_. Distinct from _урок_ (lesson) and _навчальна програма_ (curriculum). | agent |
| level | рівень | uk | | agent |
| milestone | віха / етап | uk | | agent |
| pathway | шлях навчання | uk | | agent |
| bootcamp | буткемп | uk | Loanword, common in Ukrainian tech-education discourse. | agent |
| syllabus | силабус | uk | Loanword used in Ukrainian higher education. | agent |
| mentor | наставник | uk | _Ментор_ is an accepted alternative; do not mix наставник and ментор in one document. | human (t/308) |
| track (curriculum path) | трек (курсу) | uk | | agent |
| tutorial | туторіал / посібник | uk | | agent |
| solution (learner's submission) | рішення | uk | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Ukrainian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Ukrainian gloss (on `<define>`) | Notes | Agreed by |
|------|-----------------------------------|-------|-----------|
| string | _рядок_ | Exception: the string concept itself uses _рядок_ where the source defines it, then _string_ throughout. | agent |
| Boolean | _булеве значення_ | Exception: where the source defines it, explain it means _булеве значення_, then use _Boolean_. _Логічне значення_ is an accepted synonym if it reads better in context; do not mix both in one document. | agent |
| component | _компонент_ | Where the source defines it, gloss as "component (компонент)". Use _компонент_ freely after that. | agent |
| API | explain what it is in Ukrainian | Not a word a beginner knows; where defined, explain the concept in Ukrainian, not just gloss the acronym. | agent |
| framework | _фреймворк_ | Kept as a loanword; well-attested in Ukrainian dev writing. Where the source defines it, explain it means a reusable structure. | agent |
| CLI (the concept) | _інтерфейс командного рядка_ | Where the source defines it, explain CLI as _інтерфейс командного рядка_ (command-line interface). | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Ukrainian rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | коробка | Neutral default. _Скринька_ (a warmer, chest/mailbox-adjacent word) is an accepted alternative if a passage wants a softer tone; do not mix both in one document. | agent |
| chain (array metaphor) | ланцюжок | Not _ланцюг_: the plain word carries real cultural weight (кайдани/shackles, a Shevchenko-era literary association with captivity). _Ланцюжок_ (diminutive) avoids that and already has precedent as a Ukrainian pedagogical device for sequential/ordered things ("логічний ланцюжок," "математичні ланцюжки" in early-grades teaching materials). | agent |
| input slot | щілина | The narrow opening you feed something into. СУМ (the standard Ukrainian dictionary) attests an explicit coin/token-slot sense for this word. | agent |
| return chute | лоток | The tray/chute image, as in a vending machine's coin return or a delivery chute. Pairs with _щілина_ into one coherent "vending machine" mental model; keeps the input/output asymmetry that English gets from "slot" vs. "chute." | agent |
| machine (function metaphor) | машина | "Little machines" is _маленькі машини_. Deliberately **not** the diminutive _машинка_, which is warmer but reads as a toy car or a sewing machine. | agent |
| crank (machine crank) | ручка | The handle Jiki turns to power a machine up: _покрутити ручку_. _Ручка_ also means "pen", but the collocation and the physical context leave no ambiguity. _Корба_ is the precise word for a crank handle and was rejected as uncommon and regionally marked. | agent |
| warehouse (Jiki's warehouse) | склад | Where Jiki hangs out and keeps his machine shelf: _склад Jiki_ (Jiki does not decline; see guide § Grammar and structure). | agent |
| shelves (storage) | полиця / полиці | _полиця Jiki_, _машина з полиці_. | agent |
| board / whiteboard | дошка | **One object, one word.** The board the learner puts instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word everywhere: _записувати вказівки на дошці_. Ordinary word for a writing board in a room, and no collision with _масив_ (array). | agent |

## Brackets

Default to plain **дужки**. When a specific bracket type matters, name it and show the
glyph in a code tag immediately after: _квадратні дужки (`[]`)_.

| Glyph | Ukrainian | Notes | Agreed by |
|-------|-----------|-------|-----------|
| `()` | дужки · круглі дужки | Plain _дужки_ by default; add _круглі_ + glyph only when disambiguating. | agent |
| `[]` | квадратні дужки | | agent |
| `{}` | фігурні дужки | | agent |
| `<>` | кутові дужки | | agent |
