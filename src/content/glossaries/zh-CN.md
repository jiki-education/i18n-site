---
lang: "zh-CN"
name: "Simplified Chinese"
family: "zh"
governance_sha: "bb77cbf"
content_version: "6162e1c04362"
published_at: "2026-07-30"
term_count: 116
forum_topic_id: 413
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

# Mainland Simplified Chinese (zh-CN) glossary

The agreed term list for what is distinct about Mainland Simplified Chinese. Read `../zh/glossary.md` first for the terms shared with Taiwan Traditional Chinese (`zh-TW`); this file holds only the terms that diverge between the two locales (by wording, or by script even when the underlying word is the same), plus terms that exist only for Mainland Simplified Chinese. A term lives in **exactly one** glossary file, this one or the family's, **never both**. A locale's effective glossary is `../zh/glossary.md`'s rows plus this file's rows, read together. Why each term was chosen, and who decided it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| programming / coding | 编程 | zh-CN | Use consistently. |
| code (the noun, in prose) | 代码 | zh-CN | "写代码". The UI label `Code` stays English (see § Keep in English). |
| developer | 开发者 | zh-CN | |
| streak | 连续学习天数 | zh-CN | |
| tech / tech industry | 科技 / 科技行业 | zh-CN | 科技 for the general adjective/noun sense, 科技行业 for "the tech industry" specifically. |
| pitfall | 坑 (preferred, informal) / 陷阱 (formal) | zh-CN | Use 陷阱 only where a more formal register is genuinely called for. Do not mix both in one document. |
| frontend / backend | 前端 / 后端 | zh-CN | The English is never used in prose. |

## Localize (use the Chinese term)

These are terms where the Chinese is used in prose, so the "Use (zh-CN/en)" column is `zh-CN` throughout; on `<define>` add the English per `../zh/guide.md` § "Term clarification", e.g. 函数（英语：function）. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| number | 数字 | zh-CN | |
| integer | 整数 | zh-CN | |
| float / decimal | 浮点数 (technical) / 小数 (plain) | zh-CN | Use 小数 where the floating-point nature doesn't matter. |
| character | 字符 | zh-CN | A single text character. |
| array / list | 数组 | zh-CN | Exercise prose that says "list" informally is the same concept; render it with 数组, do not introduce a second word. |
| index | 下标 (primary, array/list indexing) / 索引 (general concept, e.g. database index) | zh-CN | Keep the two senses distinct: 下标 for a position inside an array/list, 索引 for the broader concept. |
| key-value pair | 键值对 | zh-CN | The key itself is 键 (ordinary word once introduced). |
| string | 字符串 | zh-CN | Fully localized per the loanword policy in `../zh/guide.md`; not kept in English. |
| Boolean | 布尔 / 布尔值 | zh-CN | Fully localized; not kept in English. |
| data type | 数据类型 | zh-CN | The general concept, distinct from any specific type name. |

### Functions & control flow

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| if statement | `if` 语句 (primary) / 条件语句 | zh-CN | |
| condition | 条件 | zh-CN | Stands alone; no gloss needed. |
| comparison | 比较 | zh-CN | Stands alone; no gloss needed. |
| expression | 表达式 | zh-CN | |
| operator | 运算符 | zh-CN | |
| statement (executable) | 语句 | zh-CN | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | 断言 | zh-CN | The proposition/assertion sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | 函数 | zh-CN | The *keyword* `function` in code stays English; the concept in prose is 函数. |
| to call (a function) | 调用 | zh-CN | 调用一个函数. |
| to define (a function) | 定义 | zh-CN | |
| parameter | 形参 | zh-CN | Declaration-site name. Keep distinct from 实参 (argument), see below. |
| argument | 实参 | zh-CN | Call-site value. Keep distinct from 形参 (parameter). |
| input (to a function) | 输入 | zh-CN | |
| output | 输出 | zh-CN | |
| to return (a value) | 返回 | zh-CN | "返回一个值。" |
| return value | 返回值 | zh-CN | Noun form; distinct from the verb 返回. |
| brackets (the two after a function name) | 括号 | zh-CN | The `()` pair written after a function name; "写下它的名字，后面加上那对括号". Bare 括号 reads as round brackets in Mainland usage, so no qualifier is needed; write 圆括号 only where the text contrasts them with 方括号 (square brackets). |
| pure function | 纯函数 | zh-CN | |

### Loops, state & program flow

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| keyword | 关键字 | zh-CN | |
| interpreter | 翻译 (the person; 翻译员 where a countable person noun reads better) | zh-CN | **A person doing a job, not a program.** Jiki *is* the interpreter ("你的翻译就是 Jiki", "他的工作就是翻译你写的代码"). If a page ever genuinely means the software, 解释器 is that word, but it is not this term. |
| instruction (given to Jiki) | 指令 | zh-CN | The verb pattern is 给 Jiki 下指令 / 把指令写在白板上. |
| mental model | 思维模型 | zh-CN | |
| (programming) language | 编程语言 | zh-CN | Full form on introduction; the bare 语言 is fine later in the same page once the context is set (e.g. 计算机能听懂的语言). Do not mix in the English word. |
| variable | 变量 | zh-CN | |
| assignment | 赋值 | zh-CN | Noun. |
| to assign | 赋值 / 赋值给 | zh-CN | Verb; matches 赋值 above. |
| code block | 代码块 | zh-CN | Deliberately distinct from 作用域 (scope). |
| error | 错误 | zh-CN | |
| exception | 异常 | zh-CN | The catchable-error-object sense, distinct from 错误 (error) as a general term. |
| nested | 嵌套 | zh-CN | e.g. 嵌套循环 = nested loop. |
| iteration | 迭代 | zh-CN | Distinct from `zh-TW`'s 疊代; not a script variant, a genuinely different word. |
| to run / execute (code) | 运行 (default, casual) / 执行 (formal) | zh-CN | |
| loop | 循环 | zh-CN | Deliberately different from `zh-TW`'s 迴圈. |
| for loop | `for` 循环 | zh-CN | Keep `for` in code font (real keyword) + 循环. |
| while loop | `while` 循环 | zh-CN | As above. |
| for-of loop | `for-of` 循环 | zh-CN | As above. |
| loop body | 循环体 | zh-CN | |
| break (loop control) | 跳出循环 | zh-CN | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| increment | 自增 | zh-CN | |
| modulo / remainder operator | 取模 (primary) / 求余 | zh-CN | The `%` operator. |
| concatenation / to concatenate | 拼接 | zh-CN | |
| toggle | 切换 | zh-CN | |
| state / stateful | 状态 / 有状态的 | zh-CN | |
| scope | 作用域 | zh-CN | Fully translated, not kept in English. Deliberately distinct from 代码块 (code block). `zh-TW` also offers 範圍 as an alternative rendering; this locale uses only 作用域, so the term is kept separate per locale rather than merged. |
| class | 类 | zh-CN | Deliberately different from `zh-TW`'s 類別. |
| property | 属性 | zh-CN | |
| object | 对象 | zh-CN | Deliberately different from `zh-TW`'s 物件. |
| encapsulation | 封装 | zh-CN | The OOP concept of bundling data with the methods that operate on it and hiding internals. |

### Tooling & engineering

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| auth (authentication) | 身份验证 | zh-CN | |
| auth (authorization) | 授权 | zh-CN | Keep distinct from 身份验证 (authentication); pick by meaning. |
| tool / tooling | 工具 | zh-CN | |
| module | 模块 | zh-CN | Deliberately different from `zh-TW`'s 模組. |
| algorithm | 算法 | zh-CN | Deliberately different from `zh-TW`'s 演算法. |
| edge case | 边界情况 | zh-CN | Do not mix with 边缘情况 in the same document. |
| backwards compatibility | 向后兼容 | zh-CN | |
| component | 组件 | zh-CN | Fully localized, not kept in English. |
| bug (a defect, in prose) | bug | en | Keep it lower-case in prose; the UI label `Bug` stays capitalized. |
| repository (git) | 代码仓库 | zh-CN | Always write the full 代码仓库 for the git sense, because bare 仓库 is the Jiki warehouse metaphor (see § Jiki physical metaphors). |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | 功能 | zh-CN | Deliberately distinct from 函数 (function); see `guide.md` § Style notes. Never use 函数 for a product feature. |
| course | 课程 | zh-CN | The whole Jiki course. Counted with 门, and the short form 这门课 is the natural way to say "this course" in running prose, so both are this one term. Distinct from 课 (lesson), 课程体系 (curriculum) and 教程 (tutorial). |
| lesson | 课 | zh-CN | One teaching unit: 第 3 课, 一节课, counted with 节. |
| exercise | 练习 | zh-CN | |
| scenario | 场景 | zh-CN | Jiki-specific: a structured variant within an exercise. |
| curriculum | 课程体系 | zh-CN | |
| level | 关卡 | zh-CN | The gamified sense. |
| milestone | 里程碑 | zh-CN | |
| pathway | 学习路径 | zh-CN | |
| bootcamp | 训练营 | zh-CN | |
| syllabus | 教学大纲 | zh-CN | |
| mentor / mentoring | 导师 / 指导 | zh-CN | |
| track (curriculum path) | 学习路线 | zh-CN | |
| tutorial | 教程 | zh-CN | |
| solution (learner's submission) | 提交的解答 | zh-CN | |
| canvas (graphics exercises) | 画布 | zh-CN | The drawing surface in creative-coding exercises. |
| foot-gun | (descriptive, no fixed term) | zh-CN | Idiomatic; render descriptively per context, e.g. 容易误用的功能. Do not force a glossary row. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the Chinese in the gloss column below (per the format in `global/voice.md`); with no `<define>`, use the English bare, with no gloss. Only the interface labels/tokens below and true acronyms and product/language names count as kept in English; everyday prose words are translated (see § Core decisions and § Tooling & engineering).

| Term | Chinese gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| API | 应用程序接口 | Not a word a beginner knows; where defined, explain the concept in Chinese, not just gloss the acronym. |
| CLI (the concept) | 命令行 | Where the source defines it, explain CLI as 命令行 (command line). In dev-tool contexts after that gloss, `CLI` may be used as the acronym; 命令行 remains the general-prose term. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| `Code`, `Debug`, `Test`, `Bug` (UI labels) | (no gloss) | **Only the interface labels and tokens of those names.** The everyday words in prose are translated: code is 代码, frontend/backend are 前端/后端 (see § Core decisions). Only bare `bug` also stays English in prose (see § Tooling & engineering). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language. See `../zh/glossary.md` for the metaphors shared with `zh-TW` (box, board/whiteboard, input slot, return chute); the rows below are this locale's own glyphs for the metaphors that diverge by script or by word choice (rationale in `../zh/guide.md`).

**board / whiteboard is one term, one word: 白板**, and it lives in `../zh/glossary.md` because it is character-identical in both scripts. The same 白板 covers both uses: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Never use a second word for either.

| English metaphor | Chinese rendering | Notes |
|------------------|--------------------|-------|
| chain (array metaphor) | 链 / 链条 | Link = 链环/链节. |
| machine (function metaphor) | 机器 | The machine a function is modelled as, with its input slot (投入口, shared) and return chute (出料口, shared). |
| shelves (where things are stored) | 货架 | The shelves where variables and functions live. |
| warehouse (Jiki's warehouse) | 仓库 | Where Jiki hangs out and keeps his machine shelf. The collision is with git "repository", which is why that sense is always written in full as 代码仓库 (see § Tooling & engineering). |
| crank (machine crank) | 摇柄 | The crank Jiki turns to power a machine up: 转动摇柄. |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Mainland Simplified Chinese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. This is the one decision that
  changed already-published Chinese text: the row moved from **解释器 to 翻译**. 解释器 is
  wrong for this sense because the 器 suffix marks a device, not a person, and cannot name
  a character; 翻译 is the ordinary Mainland word for the person who translates or
  interprets, and works as both noun and verb, matching the source's "his job to
  interpret". **Open question, not yet resolved:** whether calling Jiki 翻译 will confuse
  learners who later meet 解释器 as the real technical term for interpreter software, since
  the two words now name different things in the same course. Left for native-speaker
  feedback.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Rendered as **白板** for both uses, the
  ordinary word for a writing board in a room, with no collision with 数组 (array). This
  term lives in the shared family file (`../zh/glossary.md`) because it is
  character-identical in both scripts; recorded here too because the decision binds this
  locale's usage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from. This
  is the principle behind keeping `bug` in English below.

### 2026-07-30: Agent drafting for the using-functions concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

- Rows added for the concept page: `mental model`, `instruction (given to Jiki)`,
  `(programming) language`, `brackets (the two after a function name)`, `input (to a
  function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`.
- **`crank` moved from 手柄 to 摇柄.** 手柄 reads first as a game controller in Mainland
  usage, which is the wrong image for the crank Jiki turns to power a machine up; 摇柄 does
  not carry that association.
- **The `course` / `lesson` collision was resolved by correcting `lesson`.** Both had been
  rendered with 课程. `lesson` is now 课 (第 3 课, 一节课, counted with 节), freeing 课程 to
  be the one term for `course` (the whole Jiki course, counted with 门).
- **The "Keep in English" row for `Code`/`Bug`/`Frontend`/`Backend` was narrowed to UI
  labels and tokens only.** The guide's own examples write 代码 and 前端 in prose, so
  keeping the whole set of everyday words in English contradicted the guide it sat next to.
  `code`, `frontend`, and `backend` are now translated in prose (代码, 前端, 后端); only the
  interface labels `Code`/`Debug`/`Test`/`Bug` and code tokens stay English.
- **`bug` was deliberately kept English in prose**, lower-case, as the genuinely ordinary
  word in Mainland developer prose ("修 bug"); 缺陷 reads stiff and bureaucratic for this
  audience. The UI label `Bug` stays capitalized.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date. A term whose reasoning is
already covered by a dated entry above (`interpreter`, `board / whiteboard`, `crank`,
`course`, `lesson`, `bug`, the Keep in English narrowing) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| code (the noun, in prose) | 代码 is the ordinary Mainland word for code in prose. |
| streak | Deliberately not Duolingo-derived: the Duolingo zh-CN string could not be confirmed live during research, so a plain descriptive term was used instead. |
| pitfall | 坑 fits Jiki's warm, informal register; 陷阱 is the fallback for a genuinely formal register. |
| frontend / backend | 前端 and 后端 are the ordinary Mainland words for these concepts. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Mainland words, so they stand alone with no gloss. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word, not a formal or legal register. |
| mental model | 思维模型 is plainer and more transparent for a general reader than the academic 心智模型. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| edge case | 边界情况 is the more established rendering in Mainland technical writing than 边缘情况. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| level | The gamified sense, 关卡, fits Jiki's tone. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | 链 / 链条 is the root of 链表 ("linked list") in standard Chinese data-structures textbooks (e.g. 严蔚敏《数据结构》): an unusually well-grounded, native metaphor, not an import. |
| warehouse | 仓库 is the ordinary word for a warehouse, so it stays; the collision this creates with git "repository" is why that sense is always written in full as 代码仓库. |
