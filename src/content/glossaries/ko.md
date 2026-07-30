---
lang: "ko"
name: "Korean"
family: null
governance_sha: "1d91ad4"
content_version: "f38927033378"
published_at: "2026-07-30"
term_count: 102
forum_topic_id: 479
---

# Korean (ko) glossary

The agreed term list for Korean. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are **additive**: rows are appended, an `agent` row may be corrected (with the old value reported), and a `human` row is never changed without a human agreeing it. The `Agreed by` column records who decided each row (`agent` = unconfirmed agent draft, `human (t/<topic>)` = confirmed by a native speaker). See `global/workflow.md`.

## Core decisions

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| programming (the discipline) | **프로그래밍** | ko | The general craft/discipline: "프로그래밍 언어", "프로그래밍의 기본 개념". | agent |
| coding (the casual act of writing code) | **코딩** | ko | The hands-on act of writing code, including "learn to code" → "코딩을 배우다" and "coding journey" → "코딩 여정" (this is the ordinary phrasing Korean coding-education brands like Codeit and 생활코딩 use). Both words are ordinary Korean, so a page containing both does not read as mixing: pick by the English word actually used, and never render the same English word two ways in one document. | agent |
| developer | 개발자 | ko | Standard, universal. | agent |
| tech / tech industry | IT (업계) | ko | Korean overwhelmingly says "IT" for the tech industry ("IT기업", "IT업계"), not "테크". Use "IT 업계" for "the tech industry" and "IT" as the adjective ("IT 분야"). | agent |
| streak | 스트릭 | ko | Loanword; matches how Korean learning-app users refer to a daily-use streak. | agent |
| pitfall | 함정 | ko | Ordinary word, "trap/pitfall"; stands alone. | agent |

## Localize (use the Korean term)

These are terms where Korean uses a Hangul term (native Sino-Korean coinage or a Hangul-transliterated loanword) in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| value | 값 | ko | Ordinary word. | agent |
| number | 숫자 | ko | Ordinary word. | agent |
| integer | 정수 | ko | | agent |
| float / decimal | 실수 | ko | "실수" (real number) is the standard beginner-level term; use "부동소수점" only where the IEEE floating-point representation itself is the point. | agent |
| character | 문자 | ko | Ordinary word. | agent |
| true / false | 참 / 거짓 | ko | Not capitalised in prose; the code literals `true`/`false` stay as-is in code. | agent |
| array / list | 배열 | ko | Standard term for both senses; do not introduce a second word for informal "list" prose, use 배열 consistently. | agent |
| dictionary | 딕셔너리 | ko | Loanword; the standard term in Korean beginner material (not "사전", which is only used descriptively, never as the type name). | agent |
| element | 원소 | ko | Standard in array/data-structure context (생활코딩, 위키백과). Kept distinct from a UI/DOM "element", which does not appear in this content. | agent |
| index | 인덱스 | ko | Loanword; the practical everyday term (over the more textbook-formal "색인"/"첨자"). | agent |
| key-value pair | 키-값 쌍 | ko | | agent |
| template literal | 템플릿 리터럴 | ko | Loanword, standard JS terminology. | agent |
| string | 문자열 | ko | **Translated, not kept as a loanword.** MDN Korean and Python Korean docs both render `string` as 문자열, never "스트링". | agent |
| Boolean | 불리언 | ko | Loanword (also seen as "불린"; use "불리언" consistently). | agent |
| data type | 자료형 | ko | Standard general term ("문자열은 자료형의 하나예요" = a string is a data type). | agent |

### Functions & control flow

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| if statement | 조건문 | ko | The code keyword `if` stays English. | agent |
| condition | 조건 | ko | Ordinary word; stands alone. | agent |
| comparison | 비교 | ko | Ordinary word; stands alone. | agent |
| expression | 표현식 | ko | | agent |
| operator | 연산자 | ko | | agent |
| NOT operator / logical negation | NOT 연산자 / 논리 부정 | ko | Keep the keyword `NOT` in code font when referring to the actual operator token; use "논리 부정" when explaining the general concept in prose. | agent |
| statement (executable) | 문장 | ko | The imperative sense: a line of code that does something and gets executed. Ordinary word in this sense; stands alone. | agent |
| statement (logical claim) | 명제 | ko | The proposition sense: a claim that is true or false. Keep distinct from "문장" above; pick by meaning, not by the English word. | agent |
| function | 함수 | ko | The *keyword* `function` in code stays English; the concept in prose is "함수". | agent |
| to call (a function) | 호출하다 | ko | "함수를 호출해요." | agent |
| to define (a function) | 정의하다 | ko | "함수를 정의해요." | agent |
| parameter | 매개변수 | ko | The declaration-site name. | agent |
| argument | 인자 | ko | The call-site value; kept distinct from "매개변수" above. | agent |
| input (to a function) | 입력 | ko | | agent |
| output | 출력 | ko | | agent |
| to return (a value) | 반환하다 | ko | "30을 반환해요." Written/educational default; colloquial "리턴하다" exists but is not used in Jiki prose, to keep one consistent term. | agent |
| return value | 반환값 | ko | | agent |
| pure function | 순수 함수 | ko | | agent |
| brackets (the two after a function name) | 괄호 | ko | The `()` pair written after a function name to call it: "이름을 쓰고 뒤에 괄호 두 개를 붙여요". 괄호 is the everyday generic word and needs no qualifier while the code is on screen; use 소괄호 (round) against 대괄호 (square) only where the two genuinely have to be contrasted. Count with the 개 counter ("괄호 두 개"). | agent |

### Loops, state & program flow

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| keyword | 키워드 | ko | | agent |
| interpreter | 인터프리터 | ko | **The one who interprets: a person doing a job, not a program.** On concept pages Jiki *is* the interpreter ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"; "이 강의를 안내해 줄 친절한 인터프리터, Jiki"). 인터프리터 works for a person because it is a plain transliteration with no device morpheme attached. **Never 해석기**: the -기 suffix names a machine, so it cannot name Jiki. 통역사 is also wrong: it is a person who interprets spoken language, not code. Where a bare apposition reads oddly, 인터프리터 역할 ("the interpreter role") carries it. | agent |
| instruction (given to Jiki) | 지시 | ko | Everyday word: "알맞은 지시를 내려요". Use 지시 사항 for the instructions taken as a set ("지시 사항을 칠판에 적어요"). Not 명령, which is a command from a superior and is also the CS "command" term. | agent |
| mental model | 멘탈 모델 | ko | The established Korean term for the picture-in-your-head framing, so it is the ordinary word despite the loanword shape. 머릿속 모델 was considered and rejected: it is a coinage no reader has met. Prose may still describe the thing plainly where that reads better ("제 머릿속에는..."), but the named term is 멘탈 모델. | agent |
| (programming) language | (프로그래밍) 언어 | ko | 언어 is the ordinary word and covers both senses: "프로그래밍 언어" and "컴퓨터가 알아듣는 언어". Never 랭귀지. | agent |
| variable | 변수 | ko | | agent |
| assignment | 대입 | ko | The noun. "대입 연산자" (assignment operator) is the standard textbook pairing. | agent |
| to assign | 대입하다 | ko | "값을 변수에 대입해요." | agent |
| code block | 코드 블록 | ko | | agent |
| error | 오류 | ko | Ordinary word in written/educational Korean (docs and formal writing favor "오류"; colloquial speech often says "에러", not used in Jiki prose to keep one consistent term). | agent |
| exception | 예외 | ko | The catchable-error-object sense, distinct from "오류" (error) as a general term. | agent |
| nested | 중첩된 | ko | e.g. "중첩된 반복문" = nested loop. | agent |
| iteration | 반복 | ko | Ordinary word; stands alone. Verb: "반복하다". | agent |
| to run / execute (code) | 실행하다 | ko | "코드를 실행해요." | agent |
| loop | 루프 | ko | The general concept of repeated execution ("무한 루프" = infinite loop). Kept distinct from "반복문" below, which names the concrete statement. | agent |
| for loop | `for`문 | ko | Keep `for` in backticks (the real keyword) directly followed by "문"; this compound is the universal Korean form, no space. | agent |
| while loop | `while`문 | ko | As above, with `while`. | agent |
| for-of loop | `for...of`문 | ko | As above. | agent |
| loop body | 반복문 본문 | ko | | agent |
| break (loop control) | 중단하다 | ko | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. | agent |
| increment | 증가시키다 | ko | "값을 1씩 증가시켜요." | agent |
| modulo / remainder operator | 나머지 연산자 | ko | The `%` operator. | agent |
| concatenation / to concatenate | 연결하다 | ko | "문자열을 연결해요." (joining strings) | agent |
| toggle | 전환하다 | ko | | agent |
| state / stateful | 상태 | ko | | agent |
| scope | 스코프 | ko | Loanword; dominant in Korean developer speech over the more formal-document "범위". Kept distinct from "코드 블록" (code block) above. | agent |
| class | 클래스 | ko | | agent |
| method | 메서드 | ko | Use "메서드", not the older spelling "메소드". | agent |
| property | 속성 | ko | | agent |
| object | 객체 | ko | | agent |
| encapsulation | 캡슐화 | ko | | agent |

### Tooling & engineering

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| workflow | 워크플로우 | ko | Loanword, standard in Korean dev writing. | agent |
| auth (authentication / authorization) | 인증 | ko | Standard Korean term for authentication; use "인가" only where authorization specifically (not authentication) is the point. | agent |
| deploy | 배포하다 | ko | "배포" as the noun, "배포하다" as the verb; standard DevOps term. | agent |
| tool / tooling | 도구 | ko | Ordinary word; stands alone. | agent |
| module | 모듈 | ko | | agent |
| algorithm | 알고리즘 | ko | | agent |
| edge case | 엣지 케이스 | ko | Loanword; no established native equivalent in Korean dev writing. | agent |
| backwards compatibility | 하위 호환성 | ko | | agent |
| API | API | en | Universally kept in raw Latin script, never transliterated ("아피" does not exist as a form). Where the source `<define>`s it, explain the concept in Korean for a beginner, not just gloss the acronym. | agent |
| framework | 프레임워크 | ko | Loanword; the standard term (a literal "뼈대" gloss appears only as an explanatory aside in some sources, never as the working term). | agent |
| CLI | CLI | en | Kept in raw Latin script like API. Where the source `<define>`s it, gloss the concept in Korean: "CLI (명령줄 인터페이스)". | agent |
| component | 컴포넌트 | ko | | agent |

### Platform & curriculum vocabulary

| English | Korean | Use (ko/en) | Notes | Agreed by |
|---------|--------|-------------|-------|-----------|
| course | 강의 | ko | The whole Jiki course the learner is taking ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"). 강의 is what Korean online-learning platforms (인프런, 패스트캠퍼스, Codeit) call a course and what learners themselves say. 코스 is rejected: in ordinary Korean it reads as a route, a golf course, or a tasting menu. 과정 is rejected: it collides with 교육 과정 (curriculum). Keep distinct from 커리큘럼 (curriculum). | agent |
| exercise | 연습 문제 | ko | The full term where the exercise is being named or introduced; the plain short form 문제 is what Korean naturally uses on repeat inside the same passage (see the guide's Style notes). | agent |

## Keep in English

Only a small set of terms stay in raw Latin script in Korean prose; everything else that is a loanword is still written in Hangul (see the Localize tables above). Where the source `<define>`s one of these terms, give the Korean gloss noted below; with no `<define>`, use the English bare, no gloss.

| Term | Notes | Agreed by |
|------|-------|-----------|
| API | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. | agent |
| CLI | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. | agent |
| JavaScript, Python, React | Product/language names. | agent |
| Debug, Test | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | | agent |
| Variable and function names | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Korean rendering | Notes | Agreed by |
|-------------------|-------------------|-------|-----------|
| box (value container) | 상자 | Direct precedent: the Korean translation of the Modern JavaScript Tutorial (ko.javascript.info) already teaches variables with "'상자' 안에 데이터를 저장하는데, 이 상자에는 특별한 이름표가 붙어 있다고 상상해 봅시다" (imagine storing data inside a "box" with a name tag). 상자 (native/Sino-Korean) reads warmer and more tutorial-appropriate than the loanword "박스". | agent |
| machine (function metaphor) | 기계 | Direct precedent: Korean functional-programming beginner material models a function as a beverage-packaging machine (기계) that takes materials in and returns a finished product, mapping closely onto Jiki's own function-as-machine framing. | agent |
| input slot | 투입구 | Pairs naturally with 기계: Korean vending machines are labelled with a "동전 투입구" (coin slot), so 투입구 is an immediately familiar, concrete image for "the opening a function's input goes into", not a coinage. Built from 입력/입 (input, agreed term above is 입력; 투입 = "to put in, feed in") + 구 (opening). | agent |
| return chute | 배출구 | Pairs with 투입구 the same way a vending machine has a coin slot (투입구) and a product-dispensing slot (배출구, "product dispensing/ejection opening"). Concrete and familiar; avoids a dry technical rendering of "return". | agent |
| chain (array metaphor) | 사슬 | No direct precedent found in Korean beginner CS material (existing Korean array explanations tend to use a classroom/numbered-seats metaphor instead), but 사슬 is the ordinary, everyday Korean word for a physical chain and carries the same "linked things in a row" image as the English metaphor. Lower confidence than 상자/기계; flagged for a native-speaker gut-check on first real use. | agent |
| shelves (storage) | 선반 | No direct precedent found either way. 선반 is the ordinary native word for "shelf" and is linguistically safe, but untested in this specific teaching context. Flagged for a native-speaker gut-check on first real use. | agent |
| board / whiteboard | 칠판 | **One object, one word.** The same 칠판 is both the board the learner puts instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on; never use two words for it. 칠판 is the everyday Korean word for a board on a wall that you write on and wipe (every Korean reader knows it from a classroom, and it is used loosely of whiteboards too), and it collides with nothing else in this glossary (array is 배열). It replaces the earlier draft 화이트보드, which names a specific office object rather than the everyday teaching image. Flagged for a native-speaker gut-check. | agent |
| warehouse (Jiki's warehouse) | 창고 | Ordinary everyday word for a warehouse or storeroom: "Jiki가 지내는 창고를 들여다보면". | agent |
| crank (machine crank) | 손잡이 (+ 돌리다) | Korean has no single everyday noun for a crank, so use the concrete handle-plus-turn phrasing: "손잡이를 돌려 전원을 켜요" (crank the handle and power it up). Keep the physical image; do not flatten it to 실행하다. | agent |
