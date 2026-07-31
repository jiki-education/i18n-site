---
lang: "ko"
name: "Korean"
family: null
stage: "setup"
governance_sha: "91b6986"
content_version: "7f89335d44f6"
published_at: "2026-07-31"
term_count: 51
forum_topic_id: 479
---

# Korean (ko) glossary

The agreed term list for Korean. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| programming (the discipline) | **프로그래밍** | ko | The general craft/discipline: "프로그래밍 언어", "프로그래밍의 기본 개념". |
| coding (the casual act of writing code) | **코딩** | ko | The hands-on act of writing code, including "learn to code" → "코딩을 배우다" and "coding journey" → "코딩 여정". Both words are ordinary Korean, so a page containing both does not read as mixing: pick by the English word actually used, and never render the same English word two ways in one document. |
| tech / tech industry | IT (업계) | ko | Use "IT 업계" for "the tech industry" and "IT" as the adjective ("IT 분야"). |

## Localize (use the Korean term)

These are terms where Korean uses a Hangul term (native Sino-Korean coinage or a Hangul-transliterated loanword) in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| float / decimal | 실수 | ko | Use "부동소수점" only where the IEEE floating-point representation itself is the point. |
| array / list | 배열 | ko | Do not introduce a second word for informal "list" prose; use 배열 consistently. |
| dictionary | 딕셔너리 | ko | Never "사전", which is only used descriptively, never as the type name. |
| element | 원소 | ko | Kept distinct from a UI/DOM "element", which does not appear in this content. |
| string | 문자열 | ko | **Translated, not kept as a loanword.** Never "스트링". |
| Boolean | 불리언 | ko | Use "불리언" consistently, not "불린". |

### Functions & control flow

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| NOT operator / logical negation | NOT 연산자 / 논리 부정 | ko | Keep the keyword `NOT` in code font when referring to the actual operator token; use "논리 부정" when explaining the general concept in prose. |
| statement (executable) | 문장 | ko | The imperative sense: a line of code that does something and gets executed. Stands alone; no gloss needed. |
| statement (logical claim) | 명제 | ko | The proposition sense: a claim that is true or false. Keep distinct from "문장" above; pick by meaning, not by the English word. |
| parameter | 매개변수 | ko | The declaration-site name. |
| argument | 인자 | ko | The call-site value; kept distinct from "매개변수" above. |
| to return (a value) | 반환하다 | ko | "30을 반환해요." Written/educational default; colloquial "리턴하다" exists but is not used in Jiki prose, to keep one consistent term. |
| brackets (the two after a function name) | 괄호 | ko | The `()` pair written after a function name to call it: "이름을 쓰고 뒤에 괄호 두 개를 붙여요". 괄호 is the everyday generic word and needs no qualifier while the code is on screen; use 소괄호 (round) against 대괄호 (square) only where the two genuinely have to be contrasted. Count with the 개 counter ("괄호 두 개"). |

### Loops, state & program flow

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | 인터프리터 | ko | **The one who interprets: a person doing a job, not a program.** On concept pages Jiki *is* the interpreter ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"; "이 강의를 안내해 줄 친절한 인터프리터, Jiki"). Never 해석기. Never 통역사. Where a bare apposition reads oddly, 인터프리터 역할 ("the interpreter role") carries it. |
| instruction (given to Jiki) | 지시 | ko | Everyday word: "알맞은 지시를 내려요". Use 지시 사항 for the instructions taken as a set ("지시 사항을 칠판에 적어요"). Not 명령, which is a command from a superior and is also the CS "command" term. |
| mental model | 멘탈 모델 | ko | Prose may still describe the thing plainly where that reads better ("제 머릿속에는..."), but the named term is 멘탈 모델. |
| (programming) language | (프로그래밍) 언어 | ko | Covers both senses: "프로그래밍 언어" and "컴퓨터가 알아듣는 언어". Never 랭귀지. |
| error | 오류 | ko | Docs and formal writing favor "오류"; colloquial speech often says "에러", not used in Jiki prose to keep one consistent term. |
| exception | 예외 | ko | The catchable-error-object sense, distinct from "오류" (error) as a general term. |
| loop | 루프 | ko | The general concept of repeated execution ("무한 루프" = infinite loop). Kept distinct from "반복문" below, which names the concrete statement. |
| for loop | `for`문 | ko | Keep `for` in backticks (the real keyword) directly followed by "문"; this compound is the universal Korean form, no space. |
| while loop | `while`문 | ko | As above, with `while`. |
| for-of loop | `for...of`문 | ko | As above. |
| scope | 스코프 | ko | Kept distinct from "코드 블록" (code block) above. |
| method | 메서드 | ko | Use "메서드", not the older spelling "메소드". |

### Tooling & engineering

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| auth (authentication / authorization) | 인증 | ko | Use "인가" only where authorization specifically (not authentication) is the point. |
| API | API | en | Never transliterated ("아피" does not exist as a form). Where the source `<define>`s it, explain the concept in Korean for a beginner, not just gloss the acronym. |
| framework | 프레임워크 | ko | A literal "뼈대" gloss appears only as an explanatory aside in some sources, never as the working term. |
| CLI | CLI | en | Kept in raw Latin script like API. Where the source `<define>`s it, gloss the concept in Korean: "CLI (명령줄 인터페이스)". |

### Platform & curriculum vocabulary

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| course | 강의 | ko | The whole Jiki course the learner is taking ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"). Keep distinct from 커리큘럼 (curriculum). Not 코스; not 과정 (collides with 교육 과정). |
| exercise | 연습 문제 | ko | The full term where the exercise is being named or introduced; the plain short form 문제 is what Korean naturally uses on repeat inside the same passage (see the guide's Style notes). |

## Keep in English

Only a small set of terms stay in raw Latin script in Korean prose; everything else that is a loanword is still written in Hangul (see the Localize tables above).

| Term | Notes |
|------|-------|
| API | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. |
| CLI | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. |
| JavaScript, Python, React | Product/language names. |
| Debug, Test | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Korean rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | 상자 | |
| machine (function metaphor) | 기계 | |
| input slot | 투입구 | Built from 입력/입 (input, agreed term above is 입력; 투입 = "to put in, feed in") + 구 (opening). |
| return chute | 배출구 | Pairs with 투입구 the same way a vending machine has a coin slot (투입구) and a product-dispensing slot (배출구). |
| chain (array metaphor) | 사슬 | Lower confidence than 상자/기계; flagged for a native-speaker gut-check on first real use. |
| shelves (storage) | 선반 | Untested in this specific teaching context; flagged for a native-speaker gut-check on first real use. |
| board / whiteboard | 칠판 | **One object, one word.** The board the learner puts instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same 칠판; never use two words for it. Flagged for a native-speaker gut-check. |
| warehouse (Jiki's warehouse) | 창고 | "Jiki가 지내는 창고를 들여다보면". |
| crank (machine crank) | 손잡이 (+ 돌리다) | Use the concrete handle-plus-turn phrasing: "손잡이를 돌려 전원을 켜요" (crank the handle and power it up). Keep the physical image; do not flatten it to 실행하다. |

---

## Decision log

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, applying the pruning test in `global/translating.md` step 6. Removed
51 rows that had one obvious canonical rendering with nothing to decide (e.g. `developer`,
`value`, `variable`, `class`, `object`, `deploy`, `module`, `algorithm`), keeping only rows
that settle a real choice, record a rejected alternative, distinguish a collision, or belong
to the protected/metaphor sets. Closest calls, kept out on reflection: `assignment` / `to
assign` (대입 vs a plausible 할당 alternative, but no rejection recorded) and `true` / `false`
(a capitalization note that does no real work in a script with no capitals). A reviewer
querying the cut list should look first at `break (loop control)`, `if statement`, and
`function`, whose notes were judged to restate the general "keywords stay English" rule
already covered under "Keep in English" rather than to record a Korean-specific decision.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Korean:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. **Korean merged the two draft
  renderings onto 칠판**, the everyday word for a write-and-wipe board in a room (every
  Korean reader knows it from a classroom, and it is used loosely of whiteboards too), and
  it collides with nothing else in the glossary (`array` is 배열). It retires the earlier
  draft 화이트보드, which named a specific office object rather than the everyday teaching
  image.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Korean did not change:**
  인터프리터 was kept, because the `-기` device suffix in 해석기 cannot name Jiki, and the
  construction 인터프리터 역할 ("the interpreter role") lets the loanword name a person
  where a bare apposition would read oddly.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Korean glossary filled out for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added for the concept page.** The using-functions page needed terms the glossary
did not yet cover: `mental model`, `(programming) language`, `brackets (the two after a
function name)`, `input (to a function)`, `instruction (given to Jiki)`, and the metaphor
rows `machine`, `input slot`, `return chute`, `crank`, `shelves`, `warehouse`.

**`course` moved from 코스 to 강의.** 강의 is what Korean online-learning platforms
(인프런, 패스트캠퍼스, Codeit) call a course and what learners themselves say. 코스 was
rejected: in ordinary Korean it reads as a route, a golf course, or a tasting menu. 과정
was also rejected: it collides with 교육 과정 (curriculum), which Korean keeps as a
separate word (커리큘럼 in this glossary).

**`coding` versus `programming` split by mapping each to the English word actually
present**, rather than treating them as interchangeable. Both 프로그래밍 and 코딩 are
ordinary Korean, so a document using both does not read as mixing, provided each English
term always renders the same way: never render the same English word two ways in one
document. This mirrors the phrasing Korean coding-education brands like Codeit and
생활코딩 already use ("코딩을 배우다", "코딩 여정").

**The gloss format was standardised on 인터프리터(영어: _interpreters_)**, no space before
the parenthesis, against two rival formats present in the guide at the time (a spaced form,
and a bare parenthetical with no 영어: marker). The chosen form is now the only one
described in the guide's Term clarification section.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `course`, `coding` /
`programming`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| developer | Standard, universal Korean term. |
| tech / tech industry | Korean overwhelmingly says "IT" for the tech industry ("IT기업", "IT업계"), not "테크". |
| streak | Loanword; matches how Korean learning-app users refer to a daily-use streak. |
| pitfall | Ordinary word ("trap/pitfall"). |

#### Values & data types

| Term | Why |
|------|-----|
| value, number, character | Ordinary Korean words. |
| float / decimal | "실수" (real number) is the standard beginner-level term. |
| array / list | Standard term for both senses. |
| dictionary | Loanword; the standard term in Korean beginner material. |
| element | Standard in array/data-structure context (생활코딩, 위키백과). |
| index | Loanword; the practical everyday term, over the more textbook-formal "색인"/"첨자". |
| template literal | Loanword, standard JS terminology. |
| string | MDN Korean and Python Korean docs both render `string` as 문자열, never "스트링". |
| Boolean | Loanword (also seen as "불린"). |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Korean words, so they stand alone. |
| statement (executable) | Ordinary word in this sense. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word ("알맞은 지시를 내려요"); 명령 was rejected as a command from a superior that also collides with the CS "command" term. |
| mental model | 멘탈 모델 is the established Korean term for the picture-in-your-head framing, so it is the ordinary word despite the loanword shape. 머릿속 모델 was considered and rejected: it is a coinage no reader has met. |
| (programming) language | 언어 is the ordinary word and covers both senses. |
| error | Ordinary word in written/educational Korean; docs and formal writing favor "오류" over colloquial "에러". |
| iteration | Ordinary word. |
| scope | Loanword; dominant in Korean developer speech over the more formal-document "범위". |

#### Tooling & engineering

| Term | Why |
|------|-----|
| workflow | Loanword, standard in Korean dev writing. |
| auth | Standard Korean term for authentication. |
| deploy | Standard DevOps term. |
| tool / tooling | Ordinary word. |
| edge case | Loanword; no established native equivalent in Korean dev writing. |
| API | "아피" does not exist as a transliterated form, so the acronym is universally kept in raw Latin script. |
| framework | Loanword; the standard term. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Direct precedent: the Korean translation of the Modern JavaScript Tutorial (ko.javascript.info) already teaches variables with "'상자' 안에 데이터를 저장하는데, 이 상자에는 특별한 이름표가 붙어 있다고 상상해 봅시다" (imagine storing data inside a "box" with a name tag). 상자 (native/Sino-Korean) reads warmer and more tutorial-appropriate than the loanword "박스". |
| machine | Direct precedent: Korean functional-programming beginner material models a function as a beverage-packaging machine (기계) that takes materials in and returns a finished product, mapping closely onto Jiki's own function-as-machine framing. |
| input slot | Pairs naturally with 기계: Korean vending machines are labelled with a "동전 투입구" (coin slot), so 투입구 is an immediately familiar, concrete image for "the opening a function's input goes into", not a coinage. |
| return chute | Pairs with 투입구 the same way a vending machine has a coin slot and a product-dispensing slot (배출구, "product dispensing/ejection opening"). Concrete and familiar; avoids a dry technical rendering of "return". |
| chain | No direct precedent found in Korean beginner CS material (existing Korean array explanations tend to use a classroom/numbered-seats metaphor instead), but 사슬 is the ordinary, everyday Korean word for a physical chain and carries the same "linked things in a row" image as the English metaphor. |
| shelves | No direct precedent found either way. 선반 is the ordinary native word for "shelf" and is linguistically safe, but untested in this specific teaching context. |
| warehouse | Ordinary everyday word for a warehouse or storeroom. |
| crank | Korean has no single everyday noun for a crank, so the concrete handle-plus-turn phrasing carries the physical image instead. |
