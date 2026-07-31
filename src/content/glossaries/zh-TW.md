---
lang: "zh-TW"
name: "Traditional Chinese"
family: "zh"
stage: "setup"
governance_sha: "8e3de87"
content_version: "3bab23c78d8a"
published_at: "2026-07-31"
term_count: 88
category_id: 200
forum_topic_id: 414
video_player_forum_topic_id: 793
---

# Chinese (zh) family glossary

The agreed term list shared by every Chinese locale: Mainland Simplified (`zh-CN`) and Taiwan Traditional (`zh-TW`). Every term here has been agreed and is binding for both locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own `glossary.md`, **never both**. A term defaults to the locale file; it only moves here once its rendering, `Use (zh/en)` column, and Notes are confirmed **character-identical** across `zh-CN` and `zh-TW`, not merely the same underlying word. Because Mainland writing uses Simplified characters and Taiwan writing uses Traditional characters, most Chinese words that are "the same word" still render as different glyphs (e.g. 数/數, 变/變, 语/語), so this bar is stricter than for other language families in this repo: a term only belongs here if none of its characters have a Simplified/Traditional variant at all. When reading a locale's effective glossary, it is this file's rows plus that locale's own `glossary.md` rows (concatenation, not an override lookup, because of the one-place rule). If a term is not here, check the relevant locale file; it has not necessarily gone unagreed, it may simply diverge by locale or script.

## Localize (use the Chinese term)

These are terms whose Chinese rendering is confirmed identical, character for character, across both locales. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh/en) | Notes |
|---------|---------|-------------|-------|
| value | 值 | zh | Ordinary word. Identical in both scripts. |
| true / false | 真 / 假 | zh | Lowercase-equivalent in prose; code literals stay English. Identical in both scripts. |
| dictionary | 字典 | zh | Identical in both scripts. |
| element | 元素 | zh | Array element. Identical in both scripts. |

### Tooling & engineering

| English | Chinese | Use (zh/en) | Notes |
|---------|---------|-------------|-------|
| method | 方法 | zh | Identical in both scripts. |
| workflow | 工作流程 | zh | The software-engineering sense. Identical in both scripts. |
| deploy | 部署 | zh | Identical in both scripts. |
| framework | 框架 | zh | Fully translated (see § Loanword policy in `guide.md`); not kept as an English loanword. Identical in both scripts. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language. These four are confirmed character-identical across both locales; see `guide.md` § "Jiki physical metaphors" for why chain, machine, and shelves are locale-only instead.

| English metaphor | Chinese rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | 盒子 | A box that holds a value; plain, concrete word. Identical in both scripts. |
| whiteboard (a function's internal notes) | 白板 | Where a function keeps its instructions. Identical in both scripts. |
| input slot | 投入口 | The vending-machine framing: the slot a coin/value goes into. Identical in both scripts; verified none of these three characters have a Simplified/Traditional variant. |
| return chute | 出料口 | The vending-machine framing: the chute a value/item comes out of. Identical in both scripts; verified none of these three characters have a Simplified/Traditional variant. |

---

# Taiwan Traditional Chinese (zh-TW) glossary

The agreed term list for what is distinct about Taiwan Traditional Chinese. Read `../zh/glossary.md` first for the terms shared with Mainland Simplified Chinese (`zh-CN`); this file holds only the terms that diverge between the two locales (by wording, or by script even when the underlying word is the same), plus terms that exist only for Taiwan Traditional Chinese. A term lives in **exactly one** glossary file, this one or the family's, **never both**. A locale's effective glossary is `../zh/glossary.md`'s rows plus this file's rows, read together. Why each term was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| programming / coding | 程式設計 (formal noun) / 寫程式 (casual verb phrase) | zh-TW | Pick by register; do not mix both in one document. |
| code (the prose noun) | 程式碼 | zh-TW | The capitalized token `Code` (a UI label or keyword) stays English, see § Keep in English. |
| developer | 開發者 / 工程師 | zh-TW | Near-synonyms; 工程師 leans toward "engineer" in a job-title sense. |
| streak | 連續學習天數 | zh-TW | Plain descriptive term. |
| tech / tech industry | 科技業 / 科技產業 | zh-TW | Near-synonyms for "the tech industry"; pick either, do not mix both in one document. |
| pitfall | 陷阱 | zh-TW | |

## Localize (use the Chinese term)

These are terms where the Chinese is used in prose, so the "Use (zh-TW/en)" column is `zh-TW` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| number | 數字 | zh-TW | |
| integer | 整數 | zh-TW |  |
| float / decimal | 浮點數 (technical) / 小數 (plain) | zh-TW | Use 小數 where the floating-point nature doesn't matter. |
| character | 字元 | zh-TW | A single text character. |
| array / list | 陣列 | zh-TW | Exercise prose that says "list" informally is the same concept; render it with 陣列, do not introduce a second word. |
| index | 索引 | zh-TW | Use 索引 for both the array-position sense and the general concept. |
| string | 字串 | zh-TW | Fully localized per the loanword policy in `../zh/guide.md`; not kept in English. |
| Boolean | 布林 / 布林值 | zh-TW | Fully localized; not kept in English. |
| data type | 資料型態 / 型別 (dev-community casual) | zh-TW | The general concept, distinct from any specific type name. |

### Functions & control flow

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| if statement | 條件式 / `if` 敘述 | zh-TW |  |
| condition | 條件 | zh-TW | Stands alone; no gloss needed. |
| comparison | 比較 | zh-TW | Stands alone; no gloss needed. |
| expression | 運算式 | zh-TW | |
| operator | 運算子 | zh-TW | |
| statement (executable) | 敘述 | zh-TW | The imperative sense: a line of code that does something and gets executed. |
| function | 函式 | zh-TW | Primary and only term; 函數 is not used, for consistency. The *keyword* `function` in code stays English; the concept in prose is 函式. |
| to call (a function) | 呼叫 | zh-TW | 呼叫一個函式. |
| to define (a function) | 定義 | zh-TW | |
| parameter | 參數 | zh-TW | Declaration-site name. |
| argument | 引數 | zh-TW | Call-site value; distinguishes it from 參數 (parameter). |
| input (to a function) | 輸入 | zh-TW |  |
| output | 輸出 | zh-TW |  |
| to return (a value) | 回傳 | zh-TW | 「回傳一個值。」 |
| return value | 回傳值 | zh-TW | Noun form; distinct from the verb 回傳. |
| brackets (the two after a function name) | 括號 | zh-TW | Chinese needs no round/square disambiguation here: bare 括號 defaults to the round pair. Say 小括號 only where the contrast with 方括號 (square brackets) is actually being drawn. Counted with Arabic numerals: 那兩個括號. |

### Loops, state & program flow

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| keyword | 關鍵字 | zh-TW |  |
| interpreter | 翻譯員 | zh-TW | **The person, not the program.** Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to interpret the code that you write"), so the word has to describe a person doing a job. Never use 直譯器 for Jiki: the 器 suffix names a device, so it cannot name a character the reader is being introduced to as a friend. |
| instruction (given to Jiki) | 指令 | zh-TW | Everyday word for something you tell Jiki to do; not a formal or legal register. Used with 給 (給 Jiki 指令), or as what gets written on the board. |
| mental model | 心智模型 | zh-TW | |
| (programming) language | 程式語言 (full) / 語言 (once context is clear) | zh-TW | Use 語言 alone for "a language a computer understands" where 程式語言 has already been established in the same passage. |
| variable | 變數 | zh-TW | |
| assignment | 賦值 / 指定 | zh-TW | Noun. |
| to assign | 指定 / 賦予 | zh-TW | Verb. |
| code block | 程式區塊 | zh-TW | Deliberately distinct from 作用域/範圍 (scope). |
| error | 錯誤 | zh-TW | |
| nested | 巢狀 | zh-TW | e.g. 巢狀迴圈 = nested loop. |
| iteration | 疊代 | zh-TW | |
| to run / execute (code) | 執行 | zh-TW | |
| loop | 迴圈 | zh-TW | |
| for loop | `for` 迴圈 | zh-TW | Keep `for` in code font (real keyword) + 迴圈. |
| while loop | `while` 迴圈 | zh-TW | As above. |
| scope | 作用域 / 範圍 | zh-TW | Fully translated, not kept in English. This locale allows either form. |
| object | 物件 | zh-TW | |
| class | 類別 | zh-TW | |
| property | 屬性 | zh-TW |  |

### Tooling & engineering

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| module | 模組 | zh-TW | |
| algorithm | 演算法 | zh-TW | |
| database | 資料庫 | zh-TW |  |
| frontend / backend | 前端 / 後端 | zh-TW | The English forms are not used in Chinese prose. |
| debugging (the activity) | 除錯 | zh-TW | The activity, fully localized. The capitalized token `Debug` stays English, see § Keep in English. |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| course | 課程 | zh-TW | The whole Jiki course the learner is taking (在這門課程裡). 課程 is reserved for this sense; a single lesson inside it is 單元, and the syllabus-level sense is 課程大綱. |
| lesson | 單元 | zh-TW | One teaching unit inside a 課程; 一堂課 is fine in casual prose. Must not be 課程, which is "course". |
| exercise | 練習 | zh-TW | |
| curriculum | 課程大綱 / 課綱 | zh-TW | Low-medium confidence: may read as overly "school system" for Jiki's warmer tone. Flag for native-speaker review via `/action-forum-post`. |
| level | 關卡 (preferred, gamified) / 等級 | zh-TW | 關卡 fits Jiki's tone better; use 等級 only where a plain ranking sense is meant. |
| track (curriculum path) | 學習路徑 | zh-TW | |
| mentor / mentoring | 導師 / 引導 | zh-TW | |

## Keep in English

These stay in English in prose. See `../zh/guide.md` § Loanword policy for why this section is short: the loanword policy is "fully localize", so only true acronyms, product/language names, code tokens, and the handful of loanwords Taiwanese developers genuinely write in Chinese prose belong here.

| Term | Chinese gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | 應用程式介面 | Not a word a beginner knows; where the source `<define>`s it, explain the concept in Chinese, not just gloss the acronym. |
| CLI (the concept) | 命令列 | Explain CLI as 命令列 (command line) where the source `<define>`s it. |
| bug | (no gloss) | Do not use 錯誤, which is "error". The activity is localized: 除錯. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| `Debug`, `Test`, `Code` | (no gloss) | Only as capitalized UI labels / technical tokens. The prose words are localized: 除錯, 測試, 程式碼. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language. See `../zh/glossary.md` for the metaphors shared with `zh-CN` (box, the board, input slot, return chute); the rows below are this locale's own glyphs for the metaphors that diverge by script or by word choice (rationale in `../zh/guide.md`).

| English metaphor | Chinese rendering | Notes |
|------------------|--------------------|-------|
| chain (array metaphor) | 鏈子 | A physical chain; explicitly not 鎖鏈, which carries a shackle/prison-chain connotation, the wrong tone for a teaching metaphor. |
| machine (function metaphor) | 機器 | The machine a function is modelled as, with its input slot (投入口, shared) and return chute (出料口, shared). |
| shelves (where things are stored) | 架子 / 置物架 | 架子 for the general shelving image, 置物架 when the whole storage unit is meant. |
| warehouse (Jiki's warehouse) | 倉庫 | Where Jiki hangs out and keeps his machine shelf. |
| crank (machine crank) | 手把 (the handle) / 轉動手把 (to crank it) | Jiki turns the handle to power a machine up: 轉動手把、讓它通電. Not 曲柄, which is engineering vocabulary rather than the everyday word. |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Taiwan Traditional Chinese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to
  interpret the code that you write"), so the word has to be able to name a character.
  **This changed the published rendering**: `interpreter` moves from 直譯器 to **翻譯員**.
  直譯器 takes the 器 suffix, which marks a device, and a device word cannot name a
  character the reader is meeting as a friend. Two alternatives were considered and
  rejected: **直譯員** keeps continuity with the CS term (直譯器) learners meet later in
  more technical contexts, but it is a coinage, not a word anyone actually uses; **口譯員**
  is the ordinary word for a human interpreter, but specifically a *speech* interpreter,
  the wrong domain for code.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. This locale renders both with the shared
  family term 白板 (see `../zh/glossary.md`), so no separate zh-TW rendering was needed.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where Taiwan developer writing genuinely uses the English word, the
  English word is the ordinary word and the right choice (e.g. `bug`); where it does not,
  the Chinese word is (e.g. 除錯 for the activity of debugging). The test is what the
  reader already says, never where the word came from.

### 2026-07-30: Agent drafting for the using-functions concept page (unconfirmed)

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows added or corrected for the using-functions concept page, none changing an existing
human decision:

- Terms the page needed that had not been written down: `instruction (given to Jiki)`,
  `mental model`, `(programming) language`, `brackets (the two after a function name)`,
  `input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`,
  `warehouse`.
- **The `course` / `lesson` collision was resolved.** `lesson` is corrected from 課程 to
  **單元**, which frees 課程 to mean `course` (the whole Jiki course the learner is
  taking), matching Taiwan online-course platform usage for a single teaching unit.
- **The "Keep in English" leftovers were resolved.** `Code`, `Bug`, `Frontend`, `Backend`
  no longer sit blanket-exempted in English: that contradicted both the Chinese family's
  "fully localize" loanword policy (`../zh/guide.md` § Loanword policy) and this guide's
  own worked example. `code` (the prose noun) is now **程式碼**; `frontend` / `backend`
  are **前端** / **後端**; `debugging` (the activity) is **除錯**. `bug` stays English: it
  is the genuinely ordinary word in Taiwan developer prose, where "bug" is said inside
  Chinese sentences rather than 臭蟲 or 程式錯誤. The capitalized tokens `Code`, `Debug`,
  `Test` remain English only as UI labels or technical tokens, kept distinct from the
  now-localized prose words.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date. A term whose reasoning is
already covered by a dated entry above (`interpreter`, `board / whiteboard`, `course`,
`lesson`, `code`, `frontend / backend`, `debugging`, `bug`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| streak | The zh-TW Duolingo app was found to contain Simplified-character contamination and Mainland-register phrasing, so it was not used as a source; 連續學習天數 is a plain descriptive term instead. |

#### Values & data types

| Term | Why |
|------|-----|
| index | Taiwan usage does not distinguish a separate "position" term the way `zh-CN`'s 下标 does. |

#### Functions & control flow

| Term | Why |
|------|-----|
| to return (a value) | Deliberately different from `zh-CN`'s 返回. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The picture-in-your-head framing ("a little man living in the computer"). |
| (programming) language | Deliberately different from `zh-CN`'s 编程语言. |
| variable | Deliberately different from `zh-CN`'s 变量. |
| iteration | Distinct from `zh-CN`'s 迭代; not a script variant, a genuinely different word. |
| loop | Deliberately different from `zh-CN`'s 循环. |
| scope | `zh-CN` uses only 作用域 as its single term, so this term is kept separate per locale rather than merged even though the primary word matches. |
| object | Deliberately different from `zh-CN`'s 对象. |
| class | Deliberately different from `zh-CN`'s 类. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| module | Deliberately different from `zh-CN`'s 模块. |
| algorithm | Deliberately different from `zh-CN`'s 算法. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| warehouse | Plain, concrete word. |
| crank | 手把 is the ordinary word for a handle; 曲柄 is engineering jargon. |
