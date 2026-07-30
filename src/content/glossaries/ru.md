---
lang: "ru"
name: "Russian"
family: null
governance_sha: "bb77cbf"
content_version: "08ecb4dc5577"
published_at: "2026-07-30"
term_count: 85
forum_topic_id: 467
---

# Russian (ru) glossary

The agreed term list for Russian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **программирование** | ru | "Кодинг" is a casual synonym; use `программирование` consistently and don't mix both in one document. |
| developer | разработчик | ru | |
| tech / tech industry | IT-индустрия | ru | |
| pitfall | подводный камень | ru | |

## Localize (use the Russian term)

These are terms where the Russian is used in prose, so the "Use (ru/en)" column is `ru` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| value | значение | ru | |
| number | число | ru | |
| integer | целое число | ru | |
| float / decimal | дробное число | ru | Use _число с плавающей точкой_ only when the floating-point behavior specifically matters. |
| character | символ | ru | |
| true / false | `true` / `false` (keep English) | en | |
| array / list | массив | ru | Exercise prose that says "list" informally still renders as _массив_. |
| dictionary | словарь | ru | |
| element | элемент | ru | Array element = _элемент массива_. |
| index | индекс | ru | No clarification parens needed. |
| key-value pair | пара «ключ-значение» | ru | |
| string | строка | ru | Unlike Hungarian/Serbian, Russian does **not** keep "string" in English. |
| Boolean | логическое значение | ru | _Булево значение_ is a common dev-community alternative; do not mix the two within a document. |
| data type | тип данных | ru | |

### Functions & control flow

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| if statement | условная конструкция | ru | Avoid "оператор" here, it's reserved for the operator sense below. |
| condition | условие | ru | Stands alone; no gloss needed. |
| comparison | сравнение | ru | Stands alone; no gloss needed. |
| expression | выражение | ru | |
| operator | оператор | ru | Reserve exclusively for the symbol sense (`+`, `===`); never use for "statement." |
| statement (executable) | инструкция | ru | The imperative sense: a line of code that does something. Deliberately distinct from `оператор`; never use `оператор` for this sense. Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. |
| statement (logical claim) | утверждение | ru | The proposition sense: a claim that is true or false; also a test assertion. |
| function | функция | ru | The *keyword* `function` in code stays English; the concept in prose is _функция_. |
| to call (a function) | вызвать (функцию) | ru | |
| to define (a function) | определить (функцию) | ru | |
| input (to a function) | вход / входные данные | ru | Pairs with the `машина`/`автомат` metaphor family below. |
| output | выход / выходные данные | ru | |
| to return (a value) | вернуть (значение) | ru | |
| return value | возвращаемое значение | ru | |
| brackets (the two after a function name) | круглые скобки | ru | Russian must say **which** brackets: bare _скобки_ is ambiguous against square ones. Full form on first mention, short _скобки_ afterwards; see the guide's Style notes. |

### Loops, state & program flow

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| keyword | ключевое слово | ru | |
| interpreter | интерпретатор | ru | Jiki himself, a person doing a job, not a program. Masculine animate: _вашим интерпретатором будет Jiki_, _дружелюбный интерпретатор_. Do not substitute _переводчик_ (that is "translator") or the bookish _толкователь_. |
| instruction (given to Jiki) | инструкция | ru | Plural _инструкции_. Same word as "statement (executable)" above, deliberately: on concept pages the instructions the learner writes on the board *are* the statements. Not _указание_ or _предписание_ (formal/administrative register). |
| mental model | мысленная модель | ru | Not _ментальная модель_, which is management-training jargon in Russian. |
| (programming) language | язык программирования | ru | Short to _язык_ once the context is clear ("на языке, который понимает компьютер"). Do not mix in the English word. |
| variable | переменная | ru | Feminine gender: _новая переменная_, _переменная была объявлена_. |
| assignment | присваивание | ru | |
| to assign | присвоить | ru | |
| code block | блок кода | ru | |
| error | ошибка | ru | |
| exception | исключение | ru | Distinct from the general term "error" above; the catchable-error-object sense. |
| nested | вложенный | ru | e.g. _вложенный цикл_ = nested loop. |
| iteration | итерация | ru | |
| to run / execute (code) | выполнить (код) | ru | |
| loop | цикл | ru | |
| for loop | цикл `for` | ru | Keep `for` in code font. |
| while loop | цикл `while` | ru | As above. |
| loop body | тело цикла | ru | |
| scope | область видимости | ru | Unlike Hungarian/Serbian, Russian does not keep "scope" in English. |
| class | класс | ru | |
| method | метод | ru | |
| property | свойство | ru | |
| object | объект | ru | Masculine gender: _новый объект_. |
| encapsulation | инкапсуляция | ru | |

### Tooling & engineering

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| workflow | рабочий процесс | ru | |
| auth (authentication / authorization) | аутентификация / авторизация | ru | Pick by meaning. |
| deploy (verb: to deploy) | развернуть | ru | "Деплой"/"задеплоить" is common dev slang; prefer _развернуть_ for beginner-facing Jiki content. |
| module | модуль | ru | |
| algorithm | алгоритм | ru | |
| edge case | граничный случай | ru | |
| framework | фреймворк | ru | Write in Cyrillic, not quoted in Latin script. |
| component | компонент | ru | Cyrillic, as with framework above. |

### Platform & curriculum

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| course | курс | ru | The whole Jiki course ("в этом курсе"). Keep distinct from _урок_ (lesson) and _программа обучения_ (curriculum). |
| exercise | упражнение | ru | The platform unit. Where English says "solve the exercises", write _выполнять упражнения_, never _решать задачи_: _задача_ is reserved for the sub-step sense below. |
| task (within an exercise) | задача | ru | A sub-step inside an exercise. Never used for the exercise itself. |

## Keep in English

These stay in English (or as an established English loanword) in Russian prose, with the
Russian gloss to use for each. Where the source `<define>`s one of these terms, use the
Russian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Russian gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | explain the concept in Russian | Explain what an API is (e.g. "набор правил, по которым две программы могут обмениваться данными"), not just expand the acronym. |
| CLI | _командная строка_ | Explain CLI as the text-based way of controlling a computer, i.e. _командная строка_ (command line), where the source defines it. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Russian rendering | Notes |
|-------------------|----------------------|-------|
| machine (function metaphor) | автомат | |
| box (value container) | коробка | |
| chain (array metaphor) | цепочка | Not _цепь_, which reads as a heavy industrial chain. |
| input slot | приёмное отверстие | Pairs with the `автомат` metaphor. |
| return chute | лоток | Pairs with `автомат` and `приёмное отверстие`. |
| shelves (storage) | полки | Singular _полка_ for one shelf. |
| warehouse (Jiki's warehouse) | склад | |
| crank (machine crank) | рукоятка | The handle you turn: _покрутить рукоятку_. Not _кривошип_ (an engineering part) or _ручка_ (ambiguous with "pen" and "door handle"). |
| board / whiteboard | доска | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and a function's own board of instructions and notes. Never introduce a second word for it. |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Russian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Russian had no board row at all before this
  pass, so **доска** was added as a single term covering both senses: the everyday word for
  a board in a room, with no collision against the agreed term for `array` (_массив_).
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Several languages had reached for their term for interpreter *software*, which cannot.
  **Russian did not change, and pushed back rather than complying:** _интерпретатор_ was
  kept, because the `-тор` suffix is agentive in Russian and used of people (_автор_,
  _организатор_), and general dictionaries give "the one who interprets something" as the
  word's primary, animate sense, so it already names a person as readily as a program.
  _переводчик_ ("translator") and the bookish _толкователь_ were both considered and
  rejected: the row now records why the existing word already does the job, rather than
  looking unchanged because nobody checked it.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Russian glossary rows drafted for the using-functions concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows drafted to cover what the concept page needed, not yet reviewed by a native speaker:

- `exercise` and `task (within an exercise)` were separated: _упражнение_ is the platform
  unit, _задача_ the sub-step inside it, with the phrasing rule that Russian does not
  "solve" an упражнение, so "solve the exercises" renders as _выполнять упражнения_, never
  _решать задачи_.
- `framework` and `component` moved out of "Keep in English" to _фреймворк_ / _компонент_,
  written in Cyrillic: the table previously said to keep the English while the Notes column
  told translators to use the Russian, a self-contradiction the move corrects.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| developer | Standard equivalent. |
| tech / tech industry | Everyday loanword register for "tech industry." |
| pitfall | Idiomatic ("hidden reef/rock"), well attested in Russian technical writing. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| true / false | These are the literal keywords learners type; _истина/ложь_ reads archaic and philosophical for this audience. |
| index | Same word in both languages, so nothing needs clarifying. |
| string | Fully native term; unlike Hungarian/Serbian, Russian does not keep "string" in English. |
| Boolean | Beginner-friendly native rendering. |
| key-value pair | Standard phrasing. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words. |
| statement (executable) | Deliberately distinct from `оператор` to avoid the classic RU CS collision: older sources like GOST 28397-89 use "оператор" for both the imperative and the symbol sense; Jiki keeps them separate. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word. |
| mental model | Ordinary, transparent phrasing. |
| (programming) language | Fully native. |
| scope | Fully native; unlike Hungarian/Serbian, Russian does not keep "scope" in English. |
| encapsulation | Established loanword in Russian CS vocabulary. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| auth | Both _аутентификация_ and _авторизация_ are standard, established Russian loanwords. |
| framework, component | Written in Cyrillic, which is what Russian dev writing actually does; this is the ordinary word, not a borrowing to be quoted in Latin script. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| machine | A vending/ticket machine ("автомат") is a familiar, concrete Russian cultural object with exactly this shape: a slot to put something in, a tray where something comes out. |
| box | Plain Russian word for "box"; direct and concrete. |
| chain | The light "chain of things" sense (as in "цепочка событий"). |
| input slot | The coin-slot sense. |
| return chute | The dispensing tray of a vending machine. |
| shelves | Plain Russian word for "shelves." |
| warehouse | Plain Russian word for a warehouse; concrete, and fits a place with shelves in it. |
