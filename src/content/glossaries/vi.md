---
lang: "vi"
name: "Vietnamese"
family: null
governance_sha: "1d91ad4"
content_version: "5e2bfeb4dc93"
published_at: "2026-07-30"
term_count: 99
forum_topic_id: 322
---

# Vietnamese (vi) glossary

The agreed term list for Vietnamese. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are additive, and the final `Agreed by` column records who decided each row. See "Glossary writes are additive" in `global/workflow.md` for both rules and for what each value means.

## Core decisions

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| programming / coding | lập trình | vi | "Coding" specifically is often rendered "viết code" colloquially; use lập trình as the consistent prose term regardless. | agent |
| developer | lập trình viên | vi | "Dev" is common in speech but lập trình viên is the standard written form. | agent |
| streak | streak | en | Where the source `<define>`s it, gloss as "chuỗi ngày học liên tục." English "streak" is dominant even in otherwise-Vietnamese prose ("giữ streak"). | agent |
| tech / tech industry | ngành công nghệ | vi | "IT"/"ngành IT" is a common alternative; do not mix both in one document. | agent |
| pitfall | lỗi thường gặp | vi | Ordinary phrase; stands alone. | agent |

## Localize (use the Vietnamese term)

These are terms where the Vietnamese is used in prose, so the "Use (vi/en)" column is `vi` for most rows below (a few exceptions kept `en` are noted inline). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| value | giá trị | vi | Ordinary word. | agent |
| number | số | vi | Ordinary word. | agent |
| true / false | đúng / sai | vi | The literals `true`/`false` in code stay in code font; this is the prose concept. | agent |
| character | ký tự | vi | `char` is the type name in code. | agent |
| integer | số nguyên | vi | `int` is the type name in code. | agent |
| float / decimal | số thực | vi | `float`/`double` are the type names in code. | agent |
| array | mảng | vi | | agent |
| dictionary | từ điển | vi | Python-specific prose may keep "dict"; do not mix both in one document without a reason tied to the source. | agent |
| element | phần tử | vi | Array element = "phần tử của mảng". | agent |
| index | chỉ số | vi | | agent |
| key-value pair | cặp khóa-giá trị | vi | | agent |
| string | chuỗi | vi | Not "xâu" (dated, competitive-programming register; do not use for beginner content). | agent |
| Boolean | kiểu logic | vi | The concept name; the literal type name `bool`/`Boolean` in code stays as-is. | agent |

### Functions & control flow

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| if statement | câu lệnh if | vi | Keep `if` in code font. | agent |
| condition | điều kiện | vi | Ordinary word; stands alone. | agent |
| comparison | phép so sánh | vi | Ordinary word; stands alone. | agent |
| expression | biểu thức | vi | | agent |
| operator | toán tử | vi | | agent |
| NOT operator / logical negation | phép phủ định | vi | The keyword `not`/`!` in code stays English. | agent |
| statement (executable) | câu lệnh | vi | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | mệnh đề | vi | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. | agent |
| function | hàm | vi | The *keyword* `function` in code stays English; the concept in prose is "hàm". | agent |
| to call (a function) | gọi hàm | vi | | agent |
| to define (a function) | định nghĩa hàm | vi | | agent |
| parameter | tham số | vi | The declaration-site name. | agent |
| argument | đối số | vi | The call-site value. Keep distinct from tham số. | agent |
| input (to a function) | đầu vào | vi | The concept, not the `input()` I/O function, which stays as code. | agent |
| output | đầu ra | vi | | agent |
| to return (a value) | trả về | vi | "Hàm trả về một giá trị." The keyword `return` in code stays English. | agent |
| return value | giá trị trả về | vi | Keep distinct from the verb above. | agent |
| brackets (the two after a function name) | dấu ngoặc đơn | vi | The `()` pair. Vietnamese names the shape, so say which: "dấu ngoặc đơn" is `()`, "dấu ngoặc vuông" is `[]`. In prose: "hai dấu ngoặc đơn". | agent |
| pure function | hàm thuần túy | vi | **Low confidence, flagged for native-speaker review**: "hàm thuần khiết" is a competing calque and English "pure function" is also common in practice; source base for this term is thinner than others. | agent |

### Loops, state & program flow

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| keyword | từ khóa | vi | | agent |
| interpreter | thông dịch viên | vi | **A person doing a job, not software.** Jiki *is* the interpreter ("Việc của Jiki là thông dịch..."), so the word has to be able to name a person: "thông dịch viên" is the ordinary Vietnamese word for someone who interprets. Never "trình thông dịch" here ("trình" = program), and keep distinct from the compiler term "trình biên dịch". The verb is "thông dịch". | agent |
| instruction (given to Jiki) | chỉ dẫn | vi | Everyday word. Not "chỉ thị" (directive/formal register) and not "lệnh", which belongs to "câu lệnh" (statement). | agent |
| mental model | mô hình tư duy | vi | The picture-in-your-head framing ("một người tí hon sống trong máy tính"). | agent |
| (programming) language | ngôn ngữ lập trình | vi | Short form "ngôn ngữ" once established, including in the "a language a computer understands" framing. Never the English borrowing. | agent |
| variable | biến | vi | | agent |
| assignment | phép gán | vi | | agent |
| to assign | gán | vi | "Gán giá trị cho biến." | agent |
| code block | khối lệnh | vi | | agent |
| error | lỗi | vi | | agent |
| nested | lồng nhau | vi | e.g. "vòng lặp lồng nhau" = nested loop. | agent |
| iteration | lần lặp | vi | One pass; "sự lặp lại" for the process as a whole. | agent |
| to run / execute (code) | chạy / thực thi | vi | "Chạy" for the everyday sense, "thực thi" in more formal explanation; do not mix both in one document. | agent |
| loop | vòng lặp | vi | | agent |
| for loop | vòng lặp for | vi | Keep `for` in code font + "vòng lặp". | agent |
| while loop | vòng lặp while | vi | As above, with `while`. | agent |
| loop body | thân vòng lặp | vi | | agent |
| break (loop control) | thoát khỏi vòng lặp | vi | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. | agent |
| increment | tăng | vi | "Tăng giá trị của biến đếm." | agent |
| modulo / remainder operator | phép chia lấy dư | vi | The `%` operator. | agent |
| concatenation / to concatenate | nối chuỗi | vi | | agent |
| state / stateful | trạng thái | vi | **Flagged for native-speaker review**: React/JS-facing Vietnamese prose often keeps English "state" instead; we standardise on the native term since Jiki teaches the general concept, not a specific framework. | agent |
| scope | scope | en | Where the source `<define>`s it, gloss as "phạm vi (biến)". Matches the Hungarian/Japanese pattern of keeping this specific term English; Vietnamese developer prose commonly keeps "scope" too, especially in fixed compounds (block scope, function scope). | agent |
| class | lớp | vi | | agent |
| method | phương thức | vi | | agent |
| property | thuộc tính | vi | | agent |
| object | đối tượng | vi | | agent |

### Platform & curriculum

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| course | khóa học | vi | The whole Jiki course ("Trong khóa học này..."). Keep distinct from "bài học" (lesson) and "chương trình học" (curriculum). | agent |
| exercise | bài tập | vi | | agent |

### Tooling & engineering

| English | Vietnamese | Use (vi/en) | Notes | Agreed by |
|---------|-----------|-------------|-------|-----------|
| workflow | quy trình làm việc | vi | The software-engineering sense (a sequence of dev tasks), distinct from curriculum vocabulary. | agent |
| auth (authentication / authorization) | xác thực / phân quyền | vi | Pick by meaning: xác thực = authentication, phân quyền = authorization. | agent |
| deploy (verb: to deploy) | triển khai | vi | "Triển khai" for the verb and noun. | agent |
| tool / tooling | công cụ | vi | | agent |
| module | mô-đun | vi | Python-specific prose may keep "module"; do not mix both in one document without reason. | agent |
| algorithm | thuật toán | vi | "Giải thuật" is a fully interchangeable synonym; do not mix both in one document. | agent |
| edge case | trường hợp biên | vi | | agent |
| backwards compatibility | khả năng tương thích ngược | vi | | agent |
| debug | gỡ lỗi | vi | Chosen over the bare English verb (common in developer speech) because this is beginner-facing teaching content, not dev-forum prose. | agent |
| test / testing | kiểm thử | vi | "Test"/"test case" are commonly kept in Vietnamese dev speech; do not mix into prose without reason. | agent |
| bug | lỗi | vi | Same word as "error"; pick by context. Bare English "bug" is very common colloquially but we standardise on "lỗi" for the prose noun. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the Vietnamese in the gloss column below (per the format in `global/voice.md`); with no `<define>`, use the English bare, with no gloss.

| Term | Vietnamese gloss (on `<define>`) | Notes | Agreed by |
|------|-----------------------------------|-------|-----------|
| API | giao diện lập trình ứng dụng | Not a word a beginner knows; where defined, explain the concept in Vietnamese, not just gloss the acronym. | agent |
| framework | bộ khung / khung làm việc | Where defined, explain it means a reusable structure, then use "framework". Overwhelmingly kept English in Vietnamese dev/ed-tech content. | agent |
| CLI (the concept) | giao diện dòng lệnh | Where defined, explain CLI as "giao diện dòng lệnh" (command-line interface), then use "CLI". | agent |
| component | component | UI/framework sense only (e.g. a React component). Where defined, gloss as "một phần giao diện có thể tái sử dụng". For the generic "a part of a system" sense, use "thành phần" instead (localized, no gloss needed). Pick by sense, never mix the two senses under one word. | agent |
| bootcamp | bootcamp | Where defined, gloss as "khóa học lập trình cấp tốc". Overwhelmingly kept English in Vietnamese ed-tech. | agent |
| mentor / mentoring | mentor | Where defined, gloss as "người hướng dẫn, cố vấn". Overwhelmingly kept English in Vietnamese dev-education content. | agent |
| list (Python data type) | list | Distinct from "mảng" (array). Where defined, gloss as "danh sách". Python-specific Vietnamese material overwhelmingly keeps "list" in English even in otherwise-Vietnamese prose. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test, Bug | (no gloss) | Only as capitalized keywords/technical tokens (e.g. UI button labels), distinct from the prose words "gỡ lỗi"/"kiểm thử"/"lỗi" above. | agent |
| Code, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Vietnamese rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | hộp | Plain Vietnamese word for "box"; direct, concrete, and familiar to a child. | agent |
| chain (array metaphor) | dây xích | Standard Vietnamese for a physical chain; a single link is "mắt xích". | agent |
| input slot | khe | The everyday word for a slot something is inserted into (e.g. a coin slot, "khe bỏ tiền"). | agent |
| return chute | máng trượt | The literal sliding chute an output comes out of. **Low confidence, flagged for native-speaker review**: "cầu trượt" (playground slide) is a warmer, more childlike alternative if native-speaker feedback finds "máng trượt" too technical-sounding. | agent |
| machine (function metaphor) | máy | A function modelled as a machine, with an input slot and a return chute. | agent |
| crank (machine crank) | tay quay | The ordinary Vietnamese word for a crank handle you turn. Phrase the action "vặn tay quay" rather than "quay tay quay". | agent |
| shelves (storage) | kệ | The shelves where variables and functions are stored. | agent |
| warehouse (Jiki's warehouse) | nhà kho | Everyday word for a storehouse; where Jiki hangs out and keeps his machine shelf. | agent |
| board / whiteboard | bảng | **One object, one word.** The board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same object and take the same word. "Bảng" is the everyday word for a board in a room and does not collide with "mảng" (array). Never a second word such as "bảng trắng" for the function's board. | agent |
