---
lang: "th"
name: "Thai"
family: null
stage: "setup"
governance_sha: "a45684f"
content_version: "34faa1c1d52f"
published_at: "2026-08-04"
term_count: 99
category_id: 430
forum_topic_id: 1049
---

# Thai (th) glossary

The agreed term list for Thai. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| programming / coding | การเขียนโปรแกรม | th | Verb: `เขียนโปรแกรม`. `โค้ดดิ้ง` is slangier; never mix both in one document. |
| developer / programmer | โปรแกรมเมอร์ | th | The learner-facing sense, "a person who programs". `นักพัฒนา` is the industry job title; keep it for copy really about the profession. |
| bug | บัค | th | Not `ข้อบกพร่อง`, which is formal-report register. |
| syntax | ไวยากรณ์ | th | Not `ซินแท็กซ์`. `ไวยากรณ์` is the word a beginner already knows from school. English hint on first use: `ไวยากรณ์ (_syntax_)`. |

## Localize (use the Thai term)

These are terms where the Thai is used in prose, so the "Use (th/en)" column is `th` throughout. Split by theme; every table below follows the same columns.

### Values & data types

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| string | สตริง | th | `สายอักขระ` only as the one-time `<define>` gloss where the source defines it, then `สตริง` throughout. |
| character (text) | อักขระ | th | A single text character. Keep distinct from `ตัวอักษร` (letter) and `ตัวละคร` (the game figure). |
| letter (of a string) | ตัวอักษร | th | Distinct from `อักขระ`, matching the English pair. |
| number | ตัวเลข | th | Not `จำนวน`, which is the quantity/mathematical sense. |
| float / decimal | ทศนิยม | th | Not `จำนวนจริง` (school maths) and not `โฟลต`. |
| true / false | จริง / เท็จ | th | Not capitalised in prose. The `true`/`false` literals stay English inside code. |
| Boolean | บูลีน | th | `ค่าความจริง` as the gloss where the source defines it, then `บูลีน` throughout. |
| array / list | อาร์เรย์ | th | Not `แถวลำดับ` (Royal Society) and not `ตัวแปรชุด` (older textbooks). Exercise prose saying "list" informally means the same thing. |
| element | สมาชิก | th | Not `อิลิเมนต์`. |
| index | ดัชนี | th | Not `อินเด็กซ์`. English hint on first use: `ดัชนี (_index_)`. |
| position (in a string/array) | ตำแหน่ง | th | The beginner-facing word taught before `ดัชนี`. Keep the two visibly apart on any page that has both. |
| dictionary | พจนานุกรม | th | Not `ดิกชันนารี`. The everyday word carries the spiral-notebook teaching metaphor. English hint on first use: `พจนานุกรม (_dictionary_)`. |
| key (dictionary key) | คีย์ | th | Never `กุญแจ`, which is a physical door key. |
| data type | ชนิดข้อมูล | th | Not `ประเภทข้อมูล`. Use one form; it recurs on every concept page. |
| compound data type | ชนิดข้อมูลแบบประกอบ | th | Distinct from plain `ชนิดข้อมูล`. English hint on first use: `ชนิดข้อมูลแบบประกอบ (_compound data type_)`. |
| object (JS `{}` literal) | ออบเจ็กต์ | th | Never `วัตถุ` (a physical object). Keep `พจนานุกรม` only where the English itself says "dictionary". |

### Functions & control flow

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| function | ฟังก์ชัน | th | **Spelled `ฟังก์ชัน`, never `ฟังก์ชั่น`.** The *keyword* `function` in code stays English; the concept in prose is `ฟังก์ชัน`. |
| to call (a function) | เรียกใช้ | th | Not bare `เรียก`. |
| to define (a function) | สร้าง / นิยาม | th | `สร้าง` for the warm teaching voice; `นิยาม` only where the source is formal. |
| parameter | พารามิเตอร์ | th | The declaration-site name. |
| argument | อาร์กิวเมนต์ | th | The call-site value. Keep the pair distinct. |
| to return (a value) | คืนค่า | th | Not `ส่งค่ากลับ`. The bracketed `<define>` gloss word must be _return_, never _returning_. |
| return value | ค่าที่คืนออกมา | th | The noun. Keep distinct from the verb above. |
| if statement | คำสั่งเงื่อนไข | th | The `if` keyword stays English. English hint on first use: `คำสั่งเงื่อนไข (_if statement_)`. |
| statement (executable) | คำสั่ง | th | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. English hint on first use: `คำสั่ง (_statement_)`, which also keeps it apart from the CLI-command reading of the bare word. |
| statement (logical claim) | ประพจน์ | th | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | คำสั่ง | th | What the learner puts on the board for Jiki to follow. Everyday Thai. Deliberately the same word as "statement (executable)". |
| expression | นิพจน์ | th | Not `เอ็กซ์เพรสชัน`. English hint on first use: `นิพจน์ (_expression_)`. |
| operator | ตัวดำเนินการ | th | Not `โอเปอเรเตอร์`. |
| to declare / declaration | ประกาศ | th | |
| initializer | ค่าเริ่มต้น | th | |
| placeholder | ตัวแทนค่า | th | English hint on first use: `ตัวแทนค่า (_placeholder_)`. |
| pure (function) | บริสุทธิ์ | th | `ฟังก์ชันบริสุทธิ์` = pure function. When glossed, gloss the full term _pure function_, not the bare adjective. English hint on first use: `ฟังก์ชันบริสุทธิ์ (_pure function_)`. |
| brackets (the two after a function name) | วงเล็บ | th | Plain `วงเล็บ` for the `()` pair written after a function name. Name the specific type only when disambiguating; see the Brackets table. |
| and / or (logical, in prose) | และ / หรือ | th | The keywords and/or/`&&`/`\|\|` stay English. If the source glosses one, the bracket may show the bare English word. |
| ampersand (`&`) | เครื่องหมายแอมเปอร์แซนด์ | th | On `<define>`, show the glyph itself (`&`), not the English word "ampersand". |
| bar / vertical bar (`\|`) | ขีดตั้ง | th | The `\|\|` keyword stays English. On `<define>`, show the glyph itself (`\|`), not the English word "bar". |
| bang (the `!` character) | เครื่องหมายตกใจ | th | The conversational name used on the logical-not concept page. |

### Loops, state & program flow

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| interpreter | ล่าม | th | **A person doing a job, not a program.** On concept pages Jiki *is* the `ล่าม` (`หน้าที่ของ Jiki คือแปลโค้ดที่คุณเขียน`). Never `ตัวแปลภาษา` (the `ตัว` prefix names a thing), never `โปรแกรมแปลคำสั่ง` (machine-only), never `อินเทอร์พรีเตอร์`. |
| loop | ลูป | th | Not `การวนซ้ำ` as the noun and not `วงวน`. `คำสั่งวนลูป` where the statement is meant. |
| loop body | ตัวลูป | th | |
| iteration | การวนรอบ | th | Verb: `วนซ้ำ`. |
| nested | ซ้อนกัน | th | e.g. `ลูปซ้อนกัน` = nested loop. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| keyword | คีย์เวิร์ด | th | Not `คำสงวน`, which is the narrower "reserved word". |
| assignment / to assign | การกำหนดค่า / กำหนดค่า | th | |
| to update (a variable/dict) | อัปเดต | th | **Spelled `อัปเดต`, never `อัพเดท`.** |
| code block | บล็อกโค้ด | th | Keep distinct from `ขอบเขต` (scope). |
| scope | ขอบเขต | th | Not `สโคป`. |
| error | ข้อผิดพลาด | th | Not `เออเรอร์`. |
| exception | ข้อยกเว้น | th | The catchable runtime event. Keep distinct from `ข้อผิดพลาด` (error). |
| to run / execute (code) | รัน | th | Not `ประมวลผล` (formal) and not `ทำงาน`. |
| (programming) language | ภาษาโปรแกรม | th | Use it including in the "a language a computer understands" framing. |
| comment (code comment) | คอมเมนต์ | th | Not `หมายเหตุ`. |
| indentation | การย่อหน้า | th | |
| concatenation / to concatenate | การเชื่อมสตริง | th | |
| mental model | ภาพในหัว | th | Deliberately informal. Not `แบบจำลองความคิด`, which is academic register. |

### Tooling & engineering

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| framework | เฟรมเวิร์ก | th | |
| deploy (verb: to deploy) | ดีพลอย | th | Not `นำขึ้นระบบ`. |
| auth (authentication / authorization) | การยืนยันตัวตน | th | Covers authentication; use `การอนุญาต` where the source specifically means authorization. |

### Platform & curriculum vocabulary

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| course | คอร์ส | th | Covers both the whole Jiki course and a curriculum track. Not `หลักสูตร` (a formal syllabus) or `รายวิชา` (a school subject). |
| concept (learning unit) | คอนเซปต์ | th | The Jiki page type. Keep distinct from `แนวคิด`, the everyday word "concept". |
| exercise | แบบฝึกหัด | th | |
| task (within an exercise) | งานย่อย | th | Distinct from `แบบฝึกหัด` (the exercise itself). |
| scenario (exercise test case) | สถานการณ์ | th | Also the concept title. |
| feature (platform capability) | ฟีเจอร์ | th | Keep visibly apart from `ฟังก์ชัน`. |

## Keep in English

These stay in English in Thai prose, with the Thai gloss to use for each.

| Term | Thai gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| API | explain what it is in Thai | Where defined, explain the concept in Thai, not just gloss the acronym. |
| CLI (the concept) | อินเทอร์เฟซบรรทัดคำสั่ง | Explain CLI as a command-line interface where the source defines it. |
| AI | _ปัญญาประดิษฐ์_ | Use "AI" in prose and marketing, not the Thai term. |
| LLM | explain in Thai | |
| template literal / template string | (no gloss) | The JS construct's own name. |
| widget | (no gloss) | |
| chat | (no gloss) | |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. The ordinary noun in running prose follows the glossary rows above. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Thai rendering | Notes |
|-------------------|----------------|-------|
| box (value container) | กล่อง | |
| chain (array metaphor) | โซ่ | Link = `ข้อโซ่`. |
| machine (function metaphor) | เครื่อง | A function is one of Jiki's `เครื่องเล็กๆ`. |
| input slot | ช่องใส่ | |
| return chute | รางคืนค่า | |
| crank (machine crank) | มือหมุน | Jiki turns the `มือหมุน` to power a machine up. |
| shelves (storage) | ชั้นวาง | Jiki's machines sit on a `ชั้นวาง`. |
| warehouse (Jiki's warehouse) | โกดัง | Warmer and more everyday than `คลังสินค้า`. |
| workshop (Jiki's workshop) | โรงงาน | Never `เวิร์กช็อป`, which in modern Thai means a training seminar. |
| board / whiteboard | กระดาน | **One object, one word.** The board the learner writes instructions on, and the board a function keeps its own instructions on, are the same `กระดาน`. |
| coin (number metaphor) | เหรียญ | |
| piece of paper (string metaphor) | แผ่นกระดาษ | |
| label (on a box/machine) | ป้าย | |
| mini-Jiki | Jiki จิ๋ว | `จิ๋ว` = tiny, in an affectionate register. |
| spiral notebook page (dictionary metaphor) | หน้าสมุดสันห่วง | |
| character (game/maze figure) | ตัวละคร | Keep `อักขระ` for a text character (see "Values & data types"). |

## Brackets

| Glyph | Thai | Notes |
|-------|------|-------|
| `()` | วงเล็บ | Plain `วงเล็บ` by default; add the glyph only when disambiguating. |
| `[]` | วงเล็บเหลี่ยม | |
| `{}` | วงเล็บปีกกา | |
| `<>` | วงเล็บแหลม | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-08-04: English hint in parentheses for terms Thai speakers say in English

**Decided by:** native speaker `faiifaiipuipui` on the pinned glossary thread (https://forum.jiki.io/t/1049, post 3), actioned by agent under the owner's standing instruction to apply clean, uncontested native-speaker recommendations. First native-speaker feedback Thai has had.

He asked whether some rows could show the English word in parentheses as a hint, because for many programming terms Thai speakers say the English even where a Thai word exists, and listed the terms he has "seldom heard someone say in Thai" in a learning-to-program context. The convention itself was already the Thai realisation of `<define>` (Thai first, English in italic brackets); what is new is applying it to a term on first use in a page even where the English source carries no markup. The rule lives in `guide.md` under "Term clarification"; the per-row trigger is the phrase "English hint on first use" in the `Notes` column.

**Rows given the hint (the ones he named where the Thai term itself stands and only the recognition is the problem):** `syntax`, `index`, `dictionary`, `compound data type`, `if statement`, `statement (executable)`, `expression`, `placeholder`, `pure (function)`.

Deliberately not applied to the whole glossary in one pass. Most rows do not need it (transliterations like `สตริง`, `อาร์เรย์`, `ฟังก์ชัน` already read as the English word, and the metaphor vocabulary is ordinary Thai), and a hint on every term would clutter the prose it is meant to help. Further rows get the hint incrementally, as native speakers flag them; he was invited on the thread to name more.

#### Term suggestions from the same post, not actioned here

He also gave concrete Thai alternatives for several rows, which are term changes rather than a presentation change, and each needs its own decision plus a sweep of published content. Recorded so they are not lost:

- `interpreter` `ล่าม` → `อินเทอร์พรีเตอร์` ("ล่าม refers to a person"). This is the exact objection the bootstrap flagged as the first question to put to a native speaker, and the answer came back against the choice. See "The term worth the most argument" below.
- `ampersand` `เครื่องหมายแอมเปอร์แซนด์` → `เครื่องหมายและ` (nobody knows what an "and-per-se" is).
- `bar (|)` `ขีดตั้ง` → show the glyph, or `ท่อ` where a name is needed.
- `loop body` `ตัวลูป` → `ในลูป` / `ด้านในลูป`.
- `to update` `อัปเดต` → `เปลี่ยน` / `แก้ไข`.
- `code block` `บล็อกโค้ด` → `โค้ดบล็อก`, though he notes position is what Thai usually uses to refer to a stretch of code.
- `mental model` `ภาพในหัว` → `โมเดลในหัว` ("much more understandable"). Also a bootstrap open question, answered.
- `statement (logical claim)` `ประพจน์` → `เงื่อนไข` is what is normally said, at least for the if/else sense.

He closed with "There are more I wanted to say but this is what I'm currently able to convey", so expect more.

### 2026-08-02: Thai bootstrapped (every row an unconfirmed draft)

**Decided by:** agent, on the owner's agreement to the researched proposal. **Status: unconfirmed drafts.** No native Thai speaker has seen any row in `glossary.md`, and no row is settled. There was no community glossary submission and no `i18n-th` forum category before this pass, so there was nothing to verify against. Every term below may be corrected by a later pass under the rules in `global/workflow.md`.

**Terms affected:** all of them.

The research rested on: the Microsoft Thai Localization Style Guide (punctuation, pronouns, verbs, and its classic→modern word table); the Royal Society's `หลักเกณฑ์การเว้นวรรค` spacing rules; KMITL's *Python Coding (v02)* Thai beginner textbook (`nemd.kmitl.ac.th/pybook`); Chiang Mai University's *Introduction to Computer Programming* ebook by Somsak Chanaim; TAmemo.com's "รู้จักกับตัวแปลภาษา Compiler และ Interpreter" (Ta, 31 Aug 2018) as a sample of unforced informal Thai developer prose; Thai Wikipedia's `สายอักขระ`, `แถวลำดับ` and `อินเทอร์พรีเตอร์`; Ben Mitchell's "Thai italics part 1: Usage" (The Fontpad, 23 Feb 2015) for the bold-not-italic emphasis rule; and Thiantawan's "UX Writing Challenges: Inclusive Pronouns in Thai Localization" (Medium, 15 Mar 2024) for the pronoun and particle analysis. A number of post-2022 SEO tutorial pages were read and discarded: their Thai tracked English clause order closely enough to be untrustworthy as evidence of natural phrasing.

#### The owner decisions baked in

- **No `ครับ`/`ค่ะ` particles anywhere.** Both are marked for the speaker's gender, so either one would assign Jiki a gender in every sentence it appeared in. Particle-free is the standard register for written Thai software and learning copy, including Microsoft's own Thai samples. This is a voice decision, not a term decision, so it lives in `guide.md`.
- **Developer usage beats Royal Society prescription.** Where the language academy's coinage and the word working Thai developers and university Python courses actually use diverge, the glossary takes the latter: `สตริง` over `สายอักขระ`, `อาร์เรย์` over `แถวลำดับ`. This is `global/voice.md`'s ordinary-word principle applied to Thai. The academy form is kept as the one-time `<define>` gloss, so a reader meets both exactly once. The known cost is that a Thai *schoolteacher* reviewing the glossary may call the choice unofficial, because school textbooks use the purist forms.
- **`Jiki` stays Latin, with a one-time pronunciation gloss.** The owner gave the canonical pronunciation as the Japanese short-vowel `じき` (as in 正直), with a high tone on the first syllable and a low tone on the second. That maps to `จิ๊กิ`: both `จ` and `ก` are mid-class consonants and a short vowel with no final makes a dead syllable, which defaults to low tone, so the second syllable needs no mark and the first takes ไม้ตรี to reach high. See the open questions below.

#### The term worth the most argument: `interpreter` → `ล่าม`

`global/terms.md` requires a word that can name **a person**, and warns off any candidate carrying a device or program morpheme. Thai makes that bite hard, because its three standard renderings all fail it. `ตัวแปลภาษา` is the usual term, but `ตัว` is the classifier and prefix for things and animals, so it literally names an object. `โปรแกรมแปลคำสั่ง` begins with "program" and is disqualified outright. `อินเทอร์พรีเตอร์` is a nine-syllable transliteration that is both machine-flavoured and hostile to a beginner.

That leaves the human-agentive options, `ผู้` being Thai's "-er/-or for people". `ล่าม` was chosen over `ผู้แปลภาษา` because it is a live human interpreter working in real time, line by line, which is precisely Jiki's job, and because it is an everyday word rather than a constructed one. The supporting evidence is that Thai developer writing already reaches for it to explain the English concept: the TAmemo article glosses `Interpreter … แปลว่า "ล่าม"`.

The cost is real and should be stated plainly: `ล่าม` is a *spoken-language* interpreter, so the word carries a domain mismatch. This is deliberately the opposite call to Hungarian, which rejected `tolmács` for exactly that reason. Hungarian had `értelmező` available as a person-word; Thai has no equivalent, so the spoken-language association is the price of getting a person at all. Confidence: medium. This is the first question to put to any native speaker who appears.

#### Other rows with a genuine choice behind them

- **`สตริง` (string).** Three renderings are live: `สตริง` (developers, university courses), `สายอักขระ` (Royal Society, Thai Wikipedia's lead term), `ข้อความ` (the everyday word for "text"). The third was rejected as too vague to name a data type. Confidence: high.
- **`อาร์เรย์` (array).** Against `แถวลำดับ` (Royal Society, used by the CMU ebook) and `ตัวแปรชุด` (older Thai textbooks). Confidence: high.
- **`พจนานุกรม` (dictionary).** Against `ดิกชันนารี`. The native word was preferred here, breaking the transliteration pattern, specifically because the Jiki teaching metaphor models a dictionary as a spiral-notebook page with keys down the left, and the native word is the one that carries the everyday picture of a dictionary book. Confidence: medium.
- **`จริง` / `เท็จ` (true / false).** Cross-verified across several Thai teaching sites and Thai Wikipedia's `ค่าความจริง`. `เท็จ` carries a faint legal or moral flavour ("false" as in untruthful), and `ไม่จริง` would be warmer for a beginner but is two words and less standard. Confidence: medium.
- **`อักขระ` / `ตัวอักษร` / `ตัวละคร`.** Thai has three separate words where English overloads "character", so the glossary keeps three rows: the text character, the letter of a string, and the on-screen game figure. This is a collision the language solves for us rather than one we had to invent around. Confidence: high.
- **`คำสั่ง` used for both "statement (executable)" and "instruction (given to Jiki)".** The same deliberate collapse Hungarian makes with `utasítás`. `ประพจน์` keeps the logical-claim sense separate. Confidence: medium on `ประพจน์`, which is a maths-register word a beginner may not know.
- **`ลูป` (loop).** Against `การวนซ้ำ` and the Royal Society's `วงวน`. KMITL's textbook writes `คำสั่งวนลูป`, which mixes both, and the glossary splits them: `ลูป` for the noun, `วนซ้ำ` reserved as the verb under `iteration`. Confidence: medium.
- **Spelling rows.** `ฟังก์ชัน` (not `ฟังก์ชั่น`) and `อัปเดต` (not `อัพเดท`) are pinned because both misspellings are extremely common in real Thai writing, common enough that different passes would otherwise diverge within one document.

#### Open questions for the first native speaker

These are the rows most likely to be wrong, and the ones to raise first on the pinned thread:

- **`ล่าม` for `interpreter`**, per the argument above.
- **`จิ๊กิ` as the pronunciation gloss for `Jiki`.** The tones were derived from the owner's spec, not heard from a Thai speaker, and two things remain unchecked: whether `จิ๊กิ` carries an unwanted echo of `จิ๊ก` (slang, "to swipe/nick something"), and whether the unaspirated `ก` or an aspirated `ข`/`ค` is the better consonant for the second syllable. The tone pattern survives either consonant.
- **`รางคืนค่า` for `return chute`.** The weakest row in the file. Thai has no everyday one-word noun for a chute, so this is a descriptive compound rather than a real word, and it sits in a load-bearing metaphor.
- **`โรงงาน` for `workshop`.** Chosen only because `เวิร์กช็อป` has drifted in modern Thai to mean a training seminar and is therefore unusable. `โรงงาน` means "factory", which is bigger and more industrial than the room the metaphor wants.
- **`ชนิดข้อมูลแบบประกอบ` for `compound data type`.** Coinage territory; no source confirmed this exact form.
- **`ภาพในหัว` for `mental model`.** Deliberately informal over the academic `แบบจำลองความคิด`, but it may read as too casual to name a concept.
