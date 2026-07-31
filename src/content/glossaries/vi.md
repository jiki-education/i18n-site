---
lang: "vi"
name: "Vietnamese"
family: null
stage: "setup"
governance_sha: "33fd2de"
content_version: "8750042c7d39"
published_at: "2026-07-31"
term_count: 99
forum_topic_id: 322
video_player_forum_topic_id: 789
---

# Vietnamese (vi) glossary

The agreed term list for Vietnamese. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | lập trình | vi | Use lập trình as the consistent prose term; do not mix with "viết code". |
| developer | lập trình viên | vi | Not "dev", even in casual prose. |
| streak | streak | en | Where the source `<define>`s it, gloss as "chuỗi ngày học liên tục." |
| tech / tech industry | ngành công nghệ | vi | Do not mix with "ngành IT" in one document. |
| pitfall | lỗi thường gặp | vi | Stands alone; no gloss needed. |

## Localize (use the Vietnamese term)

These are terms where the Vietnamese is used in prose, so the "Use (vi/en)" column is `vi` for most rows below (a few exceptions kept `en` are noted inline). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| value | giá trị | vi | |
| number | số | vi | |
| true / false | đúng / sai | vi | The literals `true`/`false` in code stay in code font; this is the prose concept. |
| character | ký tự | vi | `char` is the type name in code. |
| integer | số nguyên | vi | `int` is the type name in code. |
| float / decimal | số thực | vi | `float`/`double` are the type names in code. |
| array | mảng | vi | |
| dictionary | từ điển | vi | Python-specific prose may keep "dict"; do not mix both in one document without a reason tied to the source. |
| element | phần tử | vi | Array element = "phần tử của mảng". |
| index | chỉ số | vi | |
| key-value pair | cặp khóa-giá trị | vi | |
| string | chuỗi | vi | Not "xâu" (dated, competitive-programming register; do not use for beginner content). |
| Boolean | kiểu logic | vi | The concept name; the literal type name `bool`/`Boolean` in code stays as-is. |

### Functions & control flow

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | câu lệnh if | vi | Keep `if` in code font. |
| condition | điều kiện | vi | Stands alone; no gloss needed. |
| comparison | phép so sánh | vi | Stands alone; no gloss needed. |
| expression | biểu thức | vi | |
| operator | toán tử | vi | |
| NOT operator / logical negation | phép phủ định | vi | The keyword `not`/`!` in code stays English. |
| statement (executable) | câu lệnh | vi | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | mệnh đề | vi | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | hàm | vi | The *keyword* `function` in code stays English; the concept in prose is "hàm". |
| to call (a function) | gọi hàm | vi | |
| to define (a function) | định nghĩa hàm | vi | |
| parameter | tham số | vi | The declaration-site name. |
| argument | đối số | vi | The call-site value. Keep distinct from tham số. |
| input (to a function) | đầu vào | vi | The concept, not the `input()` I/O function, which stays as code. |
| output | đầu ra | vi | |
| to return (a value) | trả về | vi | "Hàm trả về một giá trị." The keyword `return` in code stays English. |
| return value | giá trị trả về | vi | Keep distinct from the verb above. |
| brackets (the two after a function name) | dấu ngoặc đơn | vi | The `()` pair. Vietnamese names the shape, so say which: "dấu ngoặc đơn" is `()`, "dấu ngoặc vuông" is `[]`. In prose: "hai dấu ngoặc đơn". |
| pure function | hàm thuần túy | vi | **Low confidence, flagged for native-speaker review**: "hàm thuần khiết" is a competing calque and English "pure function" is also common in practice; source base for this term is thinner than others. |

### Loops, state & program flow

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| keyword | từ khóa | vi | |
| interpreter | thông dịch viên | vi | **A person doing a job, not software.** Never "trình thông dịch" here; keep distinct from the compiler term "trình biên dịch". The verb is "thông dịch". |
| instruction (given to Jiki) | chỉ dẫn | vi | Not "chỉ thị" (directive/formal register) and not "lệnh", which belongs to "câu lệnh" (statement). |
| mental model | mô hình tư duy | vi | |
| (programming) language | ngôn ngữ lập trình | vi | Short form "ngôn ngữ" once established, including in the "a language a computer understands" framing. Never the English borrowing. |
| variable | biến | vi | |
| assignment | phép gán | vi | |
| to assign | gán | vi | "Gán giá trị cho biến." |
| code block | khối lệnh | vi | |
| error | lỗi | vi | |
| nested | lồng nhau | vi | e.g. "vòng lặp lồng nhau" = nested loop. |
| iteration | lần lặp | vi | One pass; "sự lặp lại" for the process as a whole. |
| to run / execute (code) | chạy / thực thi | vi | "Chạy" for the everyday sense, "thực thi" in more formal explanation; do not mix both in one document. |
| loop | vòng lặp | vi | |
| for loop | vòng lặp for | vi | Keep `for` in code font + "vòng lặp". |
| while loop | vòng lặp while | vi | As above, with `while`. |
| loop body | thân vòng lặp | vi | |
| break (loop control) | thoát khỏi vòng lặp | vi | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| increment | tăng | vi | "Tăng giá trị của biến đếm." |
| modulo / remainder operator | phép chia lấy dư | vi | The `%` operator. |
| concatenation / to concatenate | nối chuỗi | vi | |
| state / stateful | trạng thái | vi | **Flagged for native-speaker review**: React/JS-facing Vietnamese prose often keeps English "state" instead. |
| scope | scope | en | Where the source `<define>`s it, gloss as "phạm vi (biến)". |
| class | lớp | vi | |
| method | phương thức | vi | |
| property | thuộc tính | vi | |
| object | đối tượng | vi | |

### Platform & curriculum

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| course | khóa học | vi | The whole Jiki course ("Trong khóa học này..."). Keep distinct from "bài học" (lesson) and "chương trình học" (curriculum). |
| exercise | bài tập | vi | |

### Tooling & engineering

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| workflow | quy trình làm việc | vi | The software-engineering sense (a sequence of dev tasks), distinct from curriculum vocabulary. |
| auth (authentication / authorization) | xác thực / phân quyền | vi | Pick by meaning: xác thực = authentication, phân quyền = authorization. |
| deploy (verb: to deploy) | triển khai | vi | "Triển khai" for the verb and noun. |
| tool / tooling | công cụ | vi | |
| module | mô-đun | vi | Python-specific prose may keep "module"; do not mix both in one document without reason. |
| algorithm | thuật toán | vi | "Giải thuật" is a fully interchangeable synonym; do not mix both in one document. |
| edge case | trường hợp biên | vi | |
| backwards compatibility | khả năng tương thích ngược | vi | |
| debug | gỡ lỗi | vi | Not the bare English verb (common in developer speech). |
| test / testing | kiểm thử | vi | "Test"/"test case" are commonly kept in Vietnamese dev speech; do not mix into prose without reason. |
| bug | lỗi | vi | Same word as "error"; pick by context. |

## Keep in English

These stay in English in Vietnamese prose, with the Vietnamese gloss to use for each.

| Term | Vietnamese gloss (on `<define>`) | Notes |
|------|-----------------------------------|-------|
| API | giao diện lập trình ứng dụng | Not a word a beginner knows; where defined, explain the concept in Vietnamese, not just gloss the acronym. |
| framework | bộ khung / khung làm việc | Where defined, explain it means a reusable structure, then use "framework". |
| CLI (the concept) | giao diện dòng lệnh | Where defined, explain CLI as "giao diện dòng lệnh" (command-line interface), then use "CLI". |
| component | component | UI/framework sense only (e.g. a React component). Where defined, gloss as "một phần giao diện có thể tái sử dụng". For the generic "a part of a system" sense, use "thành phần" instead (localized, no gloss needed). Pick by sense, never mix the two senses under one word. |
| bootcamp | bootcamp | Where defined, gloss as "khóa học lập trình cấp tốc". |
| mentor / mentoring | mentor | Where defined, gloss as "người hướng dẫn, cố vấn". |
| list (Python data type) | list | Distinct from "mảng" (array). Where defined, gloss as "danh sách". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test, Bug | (no gloss) | Only as capitalized keywords/technical tokens (e.g. UI button labels), distinct from the prose words "gỡ lỗi"/"kiểm thử"/"lỗi" above. |
| Code, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Vietnamese rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | hộp | |
| chain (array metaphor) | dây xích | A single link is "mắt xích". |
| input slot | khe | |
| return chute | máng trượt | **Low confidence, flagged for native-speaker review**: "cầu trượt" (playground slide) is a warmer, more childlike alternative if native-speaker feedback finds "máng trượt" too technical-sounding. |
| machine (function metaphor) | máy | |
| crank (machine crank) | tay quay | Phrase the action "vặn tay quay" rather than "quay tay quay". |
| shelves (storage) | kệ | The shelves where variables and functions are stored. |
| warehouse (Jiki's warehouse) | nhà kho | Where Jiki hangs out and keeps his machine shelf. |
| board / whiteboard | bảng | **One object, one word.** The board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word. Never a second word such as "bảng trắng" for the function's board. |

---

## Decision log

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Two decisions from that pass changed Vietnamese renderings, plus a general principle:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Vietnamese moved from **`trình thông dịch`** to **`thông dịch viên`**: `trình` literally
  means "program", so `trình thông dịch` names software and cannot name a character, while
  `thông dịch viên` is the ordinary word for a person who interprets, keeps the link with
  the verb `thông dịch` already on the page, and stays distinct from the compiler term
  `trình biên dịch`.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor; the previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have.
  Vietnamese merged both onto **`bảng`**, the everyday word for a board in a room, which
  does not collide with `mảng` (array).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Agent drafting for the concept-page pass, unconfirmed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows added for the "using functions" concept page:

- `crank (machine crank)` moved from **`tay cầm`** (any handle or grip, as on a game
  controller) to **`tay quay`**, the everyday word for a crank you turn.
- `brackets (the two after a function name)` spelled out as **`dấu ngoặc đơn`**.

One self-contradiction fixed: `Bug` was listed under "Keep in English" as never
translated, while the tooling table rendered it `lỗi`. Both rows now agree: `bug` the prose
noun is `lỗi`, and `Bug` only as a capitalized keyword/technical token (e.g. a UI button
label) stays English.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`, `crank`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | "Coding" specifically is often rendered "viết code" colloquially in speech. |
| developer | "Dev" is common in speech; "lập trình viên" is the standard written form. |
| streak | English "streak" is dominant even in otherwise-Vietnamese prose (e.g. "giữ streak"). |
| tech / tech industry | "ngành IT" is a common alternative. |
| pitfall | Ordinary Vietnamese phrase. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word. |
| mental model | The picture-in-your-head framing ("một người tí hon sống trong máy tính"). |
| state / stateful | We standardise on the native term since Jiki teaches the general concept, not a specific framework. |
| scope | Matches the Hungarian/Japanese pattern of keeping this specific term English; Vietnamese developer prose commonly keeps "scope" too, especially in fixed compounds (block scope, function scope). |

#### Tooling & engineering

| Term | Why |
|------|-----|
| debug | This is beginner-facing teaching content, not dev-forum prose. |
| bug | Bare English "bug" is very common colloquially, but we standardise on "lỗi" for the prose noun. |

#### Keep in English

| Term | Why |
|------|-----|
| framework | Overwhelmingly kept English in Vietnamese dev/ed-tech content. |
| bootcamp | Overwhelmingly kept English in Vietnamese ed-tech. |
| mentor / mentoring | Overwhelmingly kept English in Vietnamese dev-education content. |
| list (Python data type) | Python-specific Vietnamese material overwhelmingly keeps "list" in English even in otherwise-Vietnamese prose. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Vietnamese word for "box"; direct, concrete, and familiar to a child. |
| chain | Standard Vietnamese for a physical chain. |
| input slot | The everyday word for a slot something is inserted into (e.g. a coin slot, "khe bỏ tiền"). |
| return chute | The literal sliding chute an output comes out of. |
| machine | A function modelled as a machine, with an input slot and a return chute. |
| warehouse | Everyday word for a storehouse. |
