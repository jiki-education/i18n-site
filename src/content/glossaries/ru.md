---
lang: "ru"
name: "Russian"
family: null
governance_sha: "1d91ad4"
content_version: "01a65ebc200c"
published_at: "2026-07-30"
term_count: 85
forum_topic_id: 467
---

# Russian (ru) glossary

The agreed term list for Russian. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

Writes are additive, and the final `Agreed by` column records who decided each row. Both are
defined in `global/workflow.md`.

## Core decisions

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| programming / coding | **программирование** | ru | "Кодинг" is a casual synonym; use `программирование` consistently and don't mix both in one document. | agent |
| developer | разработчик | ru | Standard. | agent |
| tech / tech industry | IT-индустрия | ru | Everyday loanword register for "tech industry." | agent |
| pitfall | подводный камень | ru | Idiomatic ("hidden reef/rock"), well attested in Russian technical writing. | agent |

## Localize (use the Russian term)

These are terms where the Russian is used in prose, so the "Use (ru/en)" column is `ru` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| value | значение | ru | Ordinary word. | agent |
| number | число | ru | Ordinary word. | agent |
| integer | целое число | ru | | agent |
| float / decimal | дробное число | ru | Use _число с плавающей точкой_ only when the floating-point behavior specifically matters. | agent |
| character | символ | ru | | agent |
| true / false | `true` / `false` (keep English) | en | These are the literal keywords learners type; _истина/ложь_ reads archaic and philosophical for this audience. | agent |
| array / list | массив | ru | Exercise prose that says "list" informally still renders as _массив_. | agent |
| dictionary | словарь | ru | | agent |
| element | элемент | ru | Array element = _элемент массива_. | agent |
| index | индекс | ru | Same word; no clarification parens needed. | agent |
| key-value pair | пара «ключ-значение» | ru | Standard phrasing. | agent |
| string | строка | ru | Fully native term; unlike Hungarian/Serbian, Russian does **not** keep "string" in English. | agent |
| Boolean | логическое значение | ru | Beginner-friendly native rendering. _Булево значение_ is a common dev-community alternative; do not mix the two within a document. | agent |
| data type | тип данных | ru | | agent |

### Functions & control flow

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| if statement | условная конструкция | ru | Avoid "оператор" here, it's reserved for the operator sense below. | agent |
| condition | условие | ru | Ordinary word; stands alone. | agent |
| comparison | сравнение | ru | Ordinary word; stands alone. | agent |
| expression | выражение | ru | | agent |
| operator | оператор | ru | Reserve exclusively for the symbol sense (`+`, `===`); never use for "statement." | agent |
| statement (executable) | инструкция | ru | The imperative sense: a line of code that does something. Deliberately distinct from `оператор` to avoid the classic RU CS collision (older sources like GOST 28397-89 use "оператор" for both senses; Jiki keeps them separate). Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. | agent |
| statement (logical claim) | утверждение | ru | The proposition sense: a claim that is true or false; also a test assertion. | agent |
| function | функция | ru | The *keyword* `function` in code stays English; the concept in prose is _функция_. | agent |
| to call (a function) | вызвать (функцию) | ru | | agent |
| to define (a function) | определить (функцию) | ru | | agent |
| input (to a function) | вход / входные данные | ru | Pairs with the `машина`/`автомат` metaphor family below. | agent |
| output | выход / выходные данные | ru | | agent |
| to return (a value) | вернуть (значение) | ru | | agent |
| return value | возвращаемое значение | ru | | agent |
| brackets (the two after a function name) | круглые скобки | ru | Russian must say **which** brackets: bare _скобки_ is ambiguous against square ones. Full form on first mention, short _скобки_ afterwards; see the guide's Style notes. | agent |

### Loops, state & program flow

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| keyword | ключевое слово | ru | | agent |
| interpreter | интерпретатор | ru | Jiki himself, a person doing a job, not a program. Russian _интерпретатор_ carries the agentive suffix _-тор_ (like _автор_, _организатор_) and general dictionaries give "the one who interprets something" as its primary, animate sense, so it names a person as readily as a program. Masculine animate: _вашим интерпретатором будет Jiki_, _дружелюбный интерпретатор_. Do not substitute _переводчик_ (that is "translator") or the bookish _толкователь_. | agent |
| instruction (given to Jiki) | инструкция | ru | Everyday word, plural _инструкции_. Same word as "statement (executable)" above, deliberately: on concept pages the instructions the learner writes on the board *are* the statements. Not _указание_ or _предписание_ (formal/administrative register). | agent |
| mental model | мысленная модель | ru | Ordinary, transparent phrasing. Not _ментальная модель_, which is management-training jargon in Russian. | agent |
| (programming) language | язык программирования | ru | Short to _язык_ once the context is clear ("на языке, который понимает компьютер"). Fully native; do not mix in the English word. | agent |
| variable | переменная | ru | Feminine gender: _новая переменная_, _переменная была объявлена_. | agent |
| assignment | присваивание | ru | | agent |
| to assign | присвоить | ru | | agent |
| code block | блок кода | ru | | agent |
| error | ошибка | ru | | agent |
| exception | исключение | ru | Distinct from the general term "error" above; the catchable-error-object sense. | agent |
| nested | вложенный | ru | e.g. _вложенный цикл_ = nested loop. | agent |
| iteration | итерация | ru | | agent |
| to run / execute (code) | выполнить (код) | ru | | agent |
| loop | цикл | ru | | agent |
| for loop | цикл `for` | ru | Keep `for` in code font. | agent |
| while loop | цикл `while` | ru | As above. | agent |
| loop body | тело цикла | ru | | agent |
| scope | область видимости | ru | Fully native; unlike Hungarian/Serbian, Russian does not keep "scope" in English. | agent |
| class | класс | ru | | agent |
| method | метод | ru | | agent |
| property | свойство | ru | | agent |
| object | объект | ru | Masculine gender: _новый объект_. | agent |
| encapsulation | инкапсуляция | ru | Established loanword in Russian CS vocabulary. | agent |

### Tooling & engineering

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| workflow | рабочий процесс | ru | | agent |
| auth (authentication / authorization) | аутентификация / авторизация | ru | Pick by meaning; both are standard, established Russian loanwords. | agent |
| deploy (verb: to deploy) | развернуть | ru | "Деплой"/"задеплоить" is common dev slang; prefer _развернуть_ for beginner-facing Jiki content. | agent |
| module | модуль | ru | | agent |
| algorithm | алгоритм | ru | | agent |
| edge case | граничный случай | ru | | agent |
| framework | фреймворк | ru | Written in Cyrillic, which is what Russian dev writing actually does; it is the ordinary word, not a borrowing to be quoted in Latin script. | agent |
| component | компонент | ru | As above: Cyrillic, standard in Russian dev writing. | agent |

### Platform & curriculum

| English | Russian | Use (ru/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| course | курс | ru | The whole Jiki course ("в этом курсе"). Keep distinct from _урок_ (lesson) and _программа обучения_ (curriculum). | agent |
| exercise | упражнение | ru | The platform unit. Where English says "solve the exercises", write _выполнять упражнения_, never _решать задачи_: _задача_ is reserved for the sub-step sense below. | agent |
| task (within an exercise) | задача | ru | A sub-step inside an exercise. Never used for the exercise itself. | agent |

## Keep in English

These stay in English (or as an established English loanword) in prose. Where the source
`<define>`s one of these terms, use the Russian in the gloss column below (per the format in
`global/voice.md`); with no `<define>`, use the English bare, with no gloss.

| Term | Russian gloss (on `<define>`) | Notes | Agreed by |
|------|--------------------------------|-------|-----------|
| API | explain the concept in Russian | Not a word a beginner knows; where the source defines it, explain what an API is (e.g. "набор правил, по которым две программы могут обмениваться данными"), not just expand the acronym. | agent |
| CLI | _командная строка_ | Explain CLI as the text-based way of controlling a computer, i.e. _командная строка_ (command line), where the source defines it. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Russian rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| machine (function metaphor) | автомат | A vending/ticket machine ("автомат") is a familiar, concrete Russian cultural object with exactly this shape: a slot to put something in, a tray where something comes out. | agent |
| box (value container) | коробка | Plain Russian word for "box"; direct and concrete. | agent |
| chain (array metaphor) | цепочка | The light "chain of things" sense (as in "цепочка событий"), not _цепь_, which reads as a heavy industrial chain. | agent |
| input slot | приёмное отверстие | The coin-slot sense; pairs with the `автомат` metaphor. | agent |
| return chute | лоток | The dispensing tray of a vending machine; pairs with `автомат` and `приёмное отверстие`. | agent |
| shelves (storage) | полки | Plain Russian word for "shelves." Singular _полка_ for one shelf. | agent |
| warehouse (Jiki's warehouse) | склад | Plain Russian word for a warehouse; concrete, and fits a place with shelves in it. | agent |
| crank (machine crank) | рукоятка | The handle you turn: _покрутить рукоятку_. Not _кривошип_ (an engineering part) or _ручка_ (ambiguous with "pen" and "door handle"). | agent |
| board / whiteboard | доска | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and a function's own board of instructions and notes. _Доска_ is the everyday word for a board in a room (as in a classroom) and does not collide with any agreed term (array is _массив_). Never introduce a second word for it. | agent |
