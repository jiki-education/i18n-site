---
lang: "zh-TW"
name: "Traditional Chinese"
family: "zh"
governance_sha: "1d91ad4"
content_version: "b320929b9538"
published_at: "2026-07-30"
term_count: 88
forum_topic_id: 414
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

The agreed term list for what is distinct about Taiwan Traditional Chinese. Read `../zh/glossary.md` first for the terms shared with Mainland Simplified Chinese (`zh-CN`); this file holds only the terms that diverge between the two locales (by wording, or by script even when the underlying word is the same), plus terms that exist only for Taiwan Traditional Chinese. A term lives in **exactly one** glossary file, this one or the family's, **never both**. A locale's effective glossary is `../zh/glossary.md`'s rows plus this file's rows, read together. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are **additive**: a pass appends missing rows, may correct a row marked `agent` (reporting the old value and why), and never changes a row marked `human`. The `Agreed by` column on every table records who decided the row; see `global/workflow.md` § "Glossary writes are additive" for the full rule. A missing or empty cell means `agent`.

## Core decisions

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| programming / coding | 程式設計 (formal noun) / 寫程式 (casual verb phrase) | zh-TW | Pick by register; do not mix both in one document. | agent |
| code (the prose noun) | 程式碼 | zh-TW | The ordinary Taiwan word; nobody writes English "code" in Chinese prose here. The capitalized token `Code` (a UI label or keyword) stays English, see § Keep in English. | agent |
| developer | 開發者 / 工程師 | zh-TW | Near-synonyms; 工程師 leans toward "engineer" in a job-title sense. | agent |
| streak | 連續學習天數 | zh-TW | Deliberately not Duolingo-derived: the zh-TW Duolingo app was found to contain Simplified-character contamination and Mainland-register phrasing, so it is not a trustworthy source for this locale. Plain descriptive term. | agent |
| tech / tech industry | 科技業 / 科技產業 | zh-TW | Near-synonyms for "the tech industry"; pick either, do not mix both in one document. | agent |
| pitfall | 陷阱 | zh-TW | | agent |

## Localize (use the Chinese term)

These are terms where the Chinese is used in prose, so the "Use (zh-TW/en)" column is `zh-TW` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| number | 數字 | zh-TW | Ordinary word. | agent |
| integer | 整數 | zh-TW |  | agent |
| float / decimal | 浮點數 (technical) / 小數 (plain) | zh-TW | Use 小數 where the floating-point nature doesn't matter. | agent |
| character | 字元 | zh-TW | A single text character. | agent |
| array / list | 陣列 | zh-TW | Exercise prose that says "list" informally is the same concept; render it with 陣列, do not introduce a second word. | agent |
| index | 索引 | zh-TW | Taiwan usage does not distinguish a separate "position" term the way `zh-CN`'s 下标 does; use 索引 for both the array-position sense and the general concept. | agent |
| string | 字串 | zh-TW | Fully localized per the loanword policy in `../zh/guide.md`; not kept in English. | agent |
| Boolean | 布林 / 布林值 | zh-TW | Fully localized; not kept in English. | agent |
| data type | 資料型態 / 型別 (dev-community casual) | zh-TW | The general concept, distinct from any specific type name. | agent |

### Functions & control flow

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| if statement | 條件式 / `if` 敘述 | zh-TW |  | agent |
| condition | 條件 | zh-TW | Ordinary word; stands alone. | agent |
| comparison | 比較 | zh-TW | Ordinary word; stands alone. | agent |
| expression | 運算式 | zh-TW | | agent |
| operator | 運算子 | zh-TW | | agent |
| statement (executable) | 敘述 | zh-TW | The imperative sense: a line of code that does something and gets executed. | agent |
| function | 函式 | zh-TW | Primary and only term; 函數 is not used, for consistency. The *keyword* `function` in code stays English; the concept in prose is 函式. | agent |
| to call (a function) | 呼叫 | zh-TW | 呼叫一個函式. | agent |
| to define (a function) | 定義 | zh-TW | | agent |
| parameter | 參數 | zh-TW | Declaration-site name. | agent |
| argument | 引數 | zh-TW | Call-site value; distinguishes it from 參數 (parameter). | agent |
| input (to a function) | 輸入 | zh-TW |  | agent |
| output | 輸出 | zh-TW |  | agent |
| to return (a value) | 回傳 | zh-TW | "回傳一個值。" Deliberately different from `zh-CN`'s 返回. | agent |
| return value | 回傳值 | zh-TW | Noun form; distinct from the verb 回傳. | agent |
| brackets (the two after a function name) | 括號 | zh-TW | Chinese needs no round/square disambiguation here: bare 括號 defaults to the round pair. Say 小括號 only where the contrast with 方括號 (square brackets) is actually being drawn. Counted with Arabic numerals: 那兩個括號. | agent |

### Loops, state & program flow

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| keyword | 關鍵字 | zh-TW |  | agent |
| interpreter | 翻譯員 | zh-TW | **The person, not the program.** Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to interpret the code that you write"), so the word has to be able to describe a person doing a job. 翻譯員 is the ordinary word for exactly that. Never use 直譯器 for Jiki: the 器 suffix names a device, so it cannot name a character the reader is being introduced to as a friend. | agent |
| instruction (given to Jiki) | 指令 | zh-TW | Everyday word for something you tell Jiki to do; not a formal or legal register. Used with 給 (給 Jiki 指令), or as what gets written on the board. | agent |
| mental model | 心智模型 | zh-TW | The picture-in-your-head framing ("a little man living in the computer"). | agent |
| (programming) language | 程式語言 (full) / 語言 (once context is clear) | zh-TW | Deliberately different from `zh-CN`'s 编程语言. Use 語言 alone for "a language a computer understands" where 程式語言 has already been established in the same passage. | agent |
| variable | 變數 | zh-TW | Deliberately different from `zh-CN`'s 变量. | agent |
| assignment | 賦值 / 指定 | zh-TW | Noun. | agent |
| to assign | 指定 / 賦予 | zh-TW | Verb. | agent |
| code block | 程式區塊 | zh-TW | Deliberately distinct from 作用域/範圍 (scope). | agent |
| error | 錯誤 | zh-TW | | agent |
| nested | 巢狀 | zh-TW | e.g. 巢狀迴圈 = nested loop. | agent |
| iteration | 疊代 | zh-TW | Distinct from `zh-CN`'s 迭代; not a script variant, a genuinely different word. | agent |
| to run / execute (code) | 執行 | zh-TW | | agent |
| loop | 迴圈 | zh-TW | Deliberately different from `zh-CN`'s 循环. | agent |
| for loop | `for` 迴圈 | zh-TW | Keep `for` in code font (real keyword) + 迴圈. | agent |
| while loop | `while` 迴圈 | zh-TW | As above. | agent |
| scope | 作用域 / 範圍 | zh-TW | Fully translated, not kept in English. `zh-CN` uses only 作用域 as its single term; this locale allows either, so the term is kept separate per locale rather than merged even though the primary word matches. | agent |
| object | 物件 | zh-TW | Deliberately different from `zh-CN`'s 对象. | agent |
| class | 類別 | zh-TW | Deliberately different from `zh-CN`'s 类. | agent |
| property | 屬性 | zh-TW |  | agent |

### Tooling & engineering

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| module | 模組 | zh-TW | Deliberately different from `zh-CN`'s 模块. | agent |
| algorithm | 演算法 | zh-TW | Deliberately different from `zh-CN`'s 算法. | agent |
| database | 資料庫 | zh-TW |  | agent |
| frontend / backend | 前端 / 後端 | zh-TW | The ordinary Taiwan words; the English forms are not used in Chinese prose. | agent |
| debugging (the activity) | 除錯 | zh-TW | The activity, fully localized. The capitalized token `Debug` stays English, see § Keep in English. | agent |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-TW/en) | Notes | Agreed by |
|---------|---------|----------------|-------|-----------|
| course | 課程 | zh-TW | The whole Jiki course the learner is taking (在這門課程裡). 課程 is the ordinary Taiwan word for a course, so it is reserved for this sense; a single lesson inside it is 單元, and the syllabus-level sense is 課程大綱. | agent |
| lesson | 單元 | zh-TW | One teaching unit inside a 課程, matching Taiwan online-course platform usage; 一堂課 is fine in casual prose. Must not be 課程, which is "course". | agent |
| exercise | 練習 | zh-TW | | agent |
| curriculum | 課程大綱 / 課綱 | zh-TW | Low-medium confidence: may read as overly "school system" for Jiki's warmer tone. Flag for native-speaker review via `/action-forum-post`. | agent |
| level | 關卡 (preferred, gamified) / 等級 | zh-TW | 關卡 fits Jiki's tone better; use 等級 only where a plain ranking sense is meant. | agent |
| track (curriculum path) | 學習路徑 | zh-TW | | agent |
| mentor / mentoring | 導師 / 引導 | zh-TW | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the Chinese in the gloss column below (per the format in `global/voice.md`); with no `<define>`, use the English bare, with no gloss. See `../zh/guide.md` § Loanword policy for why this section is short: the loanword policy is "fully localize", so only true acronyms, product/language names, code tokens, and the handful of loanwords Taiwanese developers genuinely write in Chinese prose belong here.

| Term | Chinese gloss (on `<define>`) | Notes | Agreed by |
|------|-------------------------------|-------|-----------|
| API | 應用程式介面 | Not a word a beginner knows; where the source `<define>`s it, explain the concept in Chinese, not just gloss the acronym. | agent |
| CLI (the concept) | 命令列 | Explain CLI as 命令列 (command line) where the source `<define>`s it. | agent |
| bug | (no gloss) | Kept English because that *is* the ordinary word: Taiwan developer writing says "bug" inside Chinese prose rather than 臭蟲 or 程式錯誤. Do not use 錯誤, which is "error". The activity is localized: 除錯. | agent |
| JavaScript, Python, React | (no gloss) | Product / language names. | agent |
| `Debug`, `Test`, `Code` | (no gloss) | Only as capitalized UI labels / technical tokens. The prose words are localized: 除錯, 測試, 程式碼. | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language. See `../zh/glossary.md` for the metaphors shared with `zh-CN` (box, the board, input slot, return chute); the rows below are this locale's own glyphs for the metaphors that diverge by script or by word choice (rationale in `../zh/guide.md`).

| English metaphor | Chinese rendering | Notes | Agreed by |
|------------------|--------------------|-------|-----------|
| chain (array metaphor) | 鏈子 | A physical chain; explicitly not 鎖鏈, which carries a shackle/prison-chain connotation, the wrong tone for a teaching metaphor. | agent |
| machine (function metaphor) | 機器 | The machine a function is modelled as, with its input slot (投入口, shared) and return chute (出料口, shared). | agent |
| shelves (where things are stored) | 架子 / 置物架 | 架子 for the general shelving image, 置物架 when the whole storage unit is meant. | agent |
| warehouse (Jiki's warehouse) | 倉庫 | Where Jiki hangs out and keeps his machine shelf. Plain, concrete word. | agent |
| crank (machine crank) | 手把 (the handle) / 轉動手把 (to crank it) | Jiki turns the handle to power a machine up: 轉動手把、讓它通電. Not 曲柄, which is engineering vocabulary rather than the everyday word. | agent |
