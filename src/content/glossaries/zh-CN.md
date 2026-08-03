---
lang: "zh-CN"
name: "Simplified Chinese"
family: "zh"
stage: "refining"
governance_sha: "e0c1dee"
content_version: "3373b3d3e787"
published_at: "2026-08-03"
term_count: 118
category_id: 199
forum_topic_id: 413
video_player_forum_topic_id: 791
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
| dictionary | 字典 | zh | Identical in both scripts. |
| element | 元素 | zh | Array element. Identical in both scripts. |
| character (maze/on-screen figure) | 角色 | zh | The on-screen figure the learner controls in maze exercises. Not 小人 (reads as "a petty/mean person" or an old humble first-person pronoun in Chinese, not a friendly figure). Distinct from the text-character sense (字符 in zh-CN's glossary), so no collision. Identical in both scripts. For the separate "little person imagined inside the computer" mental-model sense, see each locale's own glossary — the two senses may take different words. |

### Tooling & engineering

| English | Chinese | Use (zh/en) | Notes |
|---------|---------|-------------|-------|
| method | 方法 | zh | Identical in both scripts. |
| workflow | 工作流 | zh | The software-engineering sense. Identical in both scripts. |
| deploy | 部署 | zh | Identical in both scripts. |
| framework | 框架 | zh | Fully translated (see § Loanword policy in `guide.md`); not kept as an English loanword. Identical in both scripts. |

## Keep in English

| English | Chinese gloss (on `<define>`) | Notes |
|---------|-------------------------------|-------|
| true / false | 真 / 假 | Real Chinese CS books use `true`/`false` untranslated in prose; keep it that way, only explaining it as 真/假 where the source `<define>`s it. Code literals stay English regardless. Identical in both scripts, so it lives here in the family file. |

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
| if statement | `if` 语句 (primary) / 分支语句 | zh-CN | Do not write 条件语句: 条件 is the separate term for `condition` (see below). |
| condition | 条件 | zh-CN | Stands alone; no gloss needed. |
| comparison | 比较 | zh-CN | Stands alone; no gloss needed. |
| expression | 表达式 | zh-CN | |
| operator | 运算符 | zh-CN | |
| statement (executable) | 语句 | zh-CN | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | 判定 | zh-CN | The proposition/assertion sense: a claim that is true or false, determinable on the spot (e.g. `if (a > b)`). Not 断言 (too formal for young users), not 命题 (implies a full conjecture whose truth isn't yet known, not an immediately-checkable condition). Pick by meaning, not by the English word. |
| function | 函数 | zh-CN | The *keyword* `function` in code stays English; the concept in prose is 函数. |
| to call (a function) | 调用 | zh-CN | 调用一个函数. |
| to define (a function) | 定义 | zh-CN | |
| parameter | 形参 | zh-CN | Declaration-site name. Keep distinct from 实参 (argument), see below. |
| argument | 实参 | zh-CN | Call-site value. Keep distinct from 形参 (parameter). |
| input (to a function) | 输入 | zh-CN | |
| output | 输出 | zh-CN | |
| to return (a value) | 返回 | zh-CN | "返回一个值。" |
| return value | 返回值 | zh-CN | Noun form; distinct from the verb 返回. |
| brackets (the two after a function name) | 括号 | zh-CN | The `()` pair written after a function name; "写下它的名字，后面加上那对括号". Bare 括号 reads as round brackets in Mainland usage, so no qualifier is needed; write 圆括号 (or 小括号) only where the text contrasts them with 方括号 / 中括号 (square brackets, `[]`) or 大括号 / 花括号 (curly braces, `{}`). Pick one name per pair and do not mix both within a document. |
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
| modulo / remainder operator | 求模 (primary) / 求余 | zh-CN | The `%` operator. |
| concatenation / to concatenate | 拼接 | zh-CN | |
| toggle | 切换 | zh-CN | |
| state / stateful | 状态 / 有状态的 | zh-CN | |
| stateless | 无状态的 | zh-CN | The opposite of 有状态的 (stateful); use the pair consistently. |
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
| backwards compatibility | 向下兼容 | zh-CN | Do not write 向后兼容: bare 向后 can read as "towards the future" (cf. 后来 = "later"), which inverts the meaning. |
| component | 组件 | zh-CN | Fully localized, not kept in English. |
| bug (a defect, in prose) | bug | en | Keep it lower-case in prose; the UI label `Bug` stays capitalized. |
| repository (git) | 代码仓库 | zh-CN | Always write the full 代码仓库 for the git sense, because bare 仓库 is the Jiki warehouse metaphor (see § Jiki physical metaphors). |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | 功能 | zh-CN | Deliberately distinct from 函数 (function); the two do not collide in Mainland usage. Never use 函数 for a product feature. |
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

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| Premium (product tier) | kept English | Recurs app-wide ("Premium 会员", "升级到 Premium"); worth pinning as a product name. | medium |
| plan (subscription) | 方案 | Chosen over 套餐/计划. | medium |
| Dashboard | 主页 | 仪表盘 judged too technical for beginners. | medium |
| Deep Dive (walkthrough video) | 深度解析 | Feature name across dashboard, hints panel, modals. | medium |
| Ask Jiki (feature/tab) | 问 Jiki | Header variant: "卡住了？问问 Jiki 吧！". | medium |
| scrubber (execution timeline) | 时间轴 | Picked over 进度条 to avoid colliding with video/lesson progress bars. | medium |
| bonus scenario | 附加场景 | Pairs with existing 场景; bare "Bonus" badge → 附加. | medium |
| unlock / locked (gamified) | 解锁 / 未解锁 | 锁定 was the alternative. | medium |
| Learn to Build (product area) | 学习构建 | Named section in nav and Premium feature lists; must stay identical everywhere. | medium |
| streak (verb phrases) | 连续学习天数 | Reuses the existing glossary noun; the noStreak/oneDayStreak phrasing (开启/累积你的连续学习天数) wants reviewer confirmation. | low |

### 2026-08-01: zh-CN guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). No term rendering changed, and no rule was lost:
everything cut was either rationale, research provenance, or content the locale guide
already inherits unchanged from `../zh/guide.md` or restates from `glossary.md`.

Rationale and provenance removed from `guide.md`, kept for the record:

- **Audience.** The Mainland tech-education market is shaped by long-running,
  human-authored, pre-LLM-era resources such as 廖雪峰的官方网站 and 菜鸟教程 (runoob.com):
  short-sentence, problem-first, no-nonsense prose. That is the research behind this
  locale's plainer register and behind the sparing use of sentence-final particles; the
  behavioural instructions themselves are in `../zh/guide.md` § Writing norms and this
  guide's § Register.
- **Quotation marks.** The curly “ ” convention follows the GB/T 15834—2011 national
  punctuation standard and is standard in Mainland technical writing. It contrasts with
  Taiwan's corner-bracket convention.
- **您.** The full rationale for 你-throughout is in `../zh/glossary-notes.md`.

Duplication removed (behaviour unaffected, the same instruction still exists elsewhere):

- The **"feature" vs "function"** style note (功能 vs 函数) is a term mapping and now lives
  only in `glossary.md`'s `feature (platform capability)` row.
- The **Jiki physical metaphors (zh-CN specifics)** section restated glyphs that are already
  glossary rows (链/链条, 机器, 货架, 仓库, 摇柄) and repeated the board/whiteboard
  one-word-one-object instruction that `glossary.md` § Jiki physical metaphors already
  states in full. Cut from the guide; the glossary is unchanged.
- The pitfall "break long English relative-clause chains into short Chinese sentences" is
  inherited verbatim from `../zh/guide.md` § Writing norms, so the locale copy was cut. The
  的-chain depth pitfall and the dropped-subject pitfall are zh-CN-only and were kept.

### 2026-08-01: `statement (logical claim)` is `判定`, not `断言`

**Decided by:** native speaker taylorren, on forum topic 868, post #3
(https://forum.jiki.io/t/868/3). **Terms affected:** `statement (logical claim)`.

Follow-up to the entry below, which left this one an open question between 判定/判断 and
命题. taylorren recommends 判定/判断 (interchangeable) and explicitly rules out 命题: a
programming condition like `if (a > b)` is immediately checkable true/false, whereas 命题
implies a fuller claim or conjecture whose truth isn't yet known (his example: "every even
number greater than 4 is the sum of two primes"). Picked 判定 as the single settled row
value since he said the two were interchangeable.

### 2026-08-01: Native-speaker review of the Mainland terms (forum topic 868)

**Decided by:** native speaker taylorren, on forum topic 868 ("SC translations discussion and
general view for consideration"), post 1. Applied by agent. Every row touched below was an
unconfirmed agent draft before this entry.
**Terms affected:** `if statement`, `modulo / remainder operator`, `backwards compatibility`,
`stateless`, `brackets`, `streak`, and, as open questions, `statement (logical claim)` and
`curriculum`.

- **`if statement` secondary rendering moved from 条件语句 to 分支语句.** 分支 ("branch") is the
  word Chinese programming books use for this construct, and 条件语句 blurred the row into
  `condition` (条件), which is a separate glossary term. The primary `if` 语句 is unchanged.
- **`modulo / remainder operator` moved from 取模 to 求模.** Native-speaker preference; it also
  makes the row internally consistent with its own secondary 求余. 取模 is also idiomatic, so
  this is a preference call rather than a correction of an error.
- **`backwards compatibility` moved from 向后兼容 to 向下兼容.** 向后 is ambiguous in Chinese: it
  can read as "towards the future" (cf. 后来, "later"), which inverts the intended meaning of
  compatibility with *earlier* versions. 向下兼容 does not carry that reading.
- **`stateless` added as its own row (无状态的).** The reviewer asked that the counterpart to
  有状态的 (stateful) be documented too. Added as a new row rather than folded into the
  `state / stateful` row, so no existing row's English term changes.
- **`brackets` Notes extended with the full set of Mainland bracket names**: 小括号/圆括号 for
  `()`, 中括号/方括号 for `[]`, 大括号/花括号 for `{}`. The rendering 括号 itself is unchanged;
  this only gives a translator the names to use when a page actually names the other pairs.
- **`streak` (连续学习天数) confirmed by a native speaker.** The reviewer floated 连续打卡天数
  ("consecutive clock-in days") as sounding more in-tune, then explicitly said they are happy
  with the current 连续学习天数. The rendering does not move, but the row is now a confirmed
  decision rather than an unconfirmed draft, and it supersedes the "not Duolingo-derived" note
  in the rationale section below as the reason it stands.
- **`statement (logical claim)` (断言) left unchanged, pending a follow-up question.** The
  reviewer said 断言 is "OK but maybe too formal" for very young users and offered 判定/判断
  without choosing between them. Two un-chosen alternatives is not a decision, and there is a
  third candidate (命题, the standard word for a logical proposition), so the row stands until
  the reviewer picks one. Raise it on topic 868.
- **`curriculum` (课程体系) left unchanged; the proposed 课程 cannot be applied.** The reviewer
  suggested shortening 课程体系 to 课程, but 课程 is already this glossary's term for `course`
  (the whole Jiki course), a collision the 2026-07-30 entry below deliberately resolved by
  moving `lesson` to 课. Taking 课程 for `curriculum` would recreate exactly that clash. If
  课程体系 reads too heavy, a different short form is needed; raise it on topic 868.

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
