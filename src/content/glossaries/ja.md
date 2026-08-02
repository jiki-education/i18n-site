---
lang: "ja"
name: "Japanese"
family: null
stage: "setup"
governance_sha: "199762c"
content_version: "a4b36a7eb689"
published_at: "2026-08-02"
term_count: 66
category_id: 70
forum_topic_id: 311
video_player_forum_topic_id: 765
---

# Japanese (ja) glossary

The agreed term list for Japanese. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document. Why each term was chosen, and
who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | プログラミング | ja | Use プログラミング consistently. 「コーディング」only when the source specifically stresses the casual act of writing code. Never mix both in one document. |
| developer | エンジニア | ja | 「開発者」is a more literal alternative; do not mix both in one document. |
| streak | 連続学習日数 | ja | The "consecutive days practised" sense. |
| tech / tech industry | IT業界 | ja | Do not switch to 「テック業界」mid-document. |

## Localize (use the Japanese term)

These are terms where the Japanese is used in prose, so the "Use (ja/en)" column is `ja` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| number | 数値 | ja | 数値 in a programming context; 「数」in casual mention. |
| float / decimal | 小数 | ja | 「浮動小数点数」when the floating-point nature specifically matters. |
| true / false | `true` / `false` | ja | Keep the literals in code font (Jikiscript tokens). Described conceptually as 真偽; not rewritten to 真/偽 in prose. |
| array / list | 配列 | ja | Exercise prose sometimes says "list" informally for the same concept; render both with 配列, do not introduce a second word. |
| index | インデックス | ja | No gloss needed. 「添字」is a native alternative; do not mix both in one document. |
| Boolean | 真偽値 | ja | 「ブール値」is an alternative; do not mix both in one document. |

### Functions & control flow

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| if statement | `if`文 | ja | Keep `if` in code font + 文. |
| NOT operator / logical negation | 否定 | ja | 「NOT演算子」when the operator itself is meant. |
| statement (executable) | 文 | ja | The imperative sense: a line of code that executes, e.g. `if` 文、代入文. |
| statement (logical claim) | 命題 | ja | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | 関数 | ja | The *keyword* `function` in code stays English; the concept in prose is 関数. |
| parameter | 仮引数 | ja | The declaration-site name. Rarely surfaced; Jiki prose favours 入力. |
| input (to a function) | 入力 | ja | Jiki prefers this over parameter/argument in prose. |
| return value | 戻り値 | ja | Noun form; distinct from the verb "to return". 「返り値」is a common alternative; use 戻り値, not 返り値. |
| brackets (the two after a function name) | 括弧 | ja | Plain 括弧, not 丸括弧, for the `()` pair written after a function name. Show the glyph on the first mention in a page, 「括弧（`()`）」, then bare 括弧 after that. Do not render "two brackets" as 「2 つの括弧」. See the Brackets section below. |

### Loops, state & program flow

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| keyword | キーワード | ja | 「予約語」is a more precise alternative; do not mix. |
| interpreter (the program) | インタプリタ | ja | The software sense: the thing that turns written code into 1 と 0. Use インタプリタ, not インタープリター: this is an established exception to the guide's keep-the-ー rule. |
| interpreter (the one interpreting, incl. Jiki) | 通訳者 | ja | The personified sense, where the interpreter is named as a someone (Jiki). **Never bare 通訳 here**: 通訳 on its own names the *activity*, so 「このコースでの通訳は Jiki です」reads as Jiki being a kind of interpreting. Bare 通訳 is correct only in activity phrasings (「Jiki が通訳をしてくれます」「通訳の役割を担うプログラム」), and those are usually the more natural rewrite. |
| instruction (given to Jiki) | 指示 | ja | Do not use 命令, which reads as a command in the military/legal register (and as a CPU instruction). |
| mental model | イメージ | ja | 「頭の中のイメージ」when the "in your head" part needs saying. Do not use メンタルモデル and do not drift to 考え方 mid-page: one word per document. |
| (programming) language | プログラミング言語 | ja | The technical compound is プログラミング言語. For the "a language the computer understands" framing, use the ordinary 言葉 (「コンピューターにわかる言葉」). These are the two senses the source itself distinguishes, not two words for one thing; never reach for a katakana ランゲージ. |
| code block | ブロック | ja | 「コードブロック」acceptable. Keep distinct from スコープ (scope). |
| nested | 入れ子 | ja | 入れ子のループ = nested loop. 「ネスト」also used; do not mix both in one document. |
| iteration | 繰り返し | ja | 「反復」/「イテレーション」are alternatives. |
| for loop | `for`ループ | ja | Keep `for` as the real keyword in code font + ループ. |
| while loop | `while`ループ | ja | As above. |
| for-of loop | `for-of`ループ | ja | As above. |
| break (loop control) | 抜ける | ja | ループを抜ける。 The keyword `break` in code stays English; this is the prose verb for the concept. |
| modulo / remainder operator | 余り | ja | The `%` operator. 「剰余」is the technical alternative. |
| scope | スコープ | ja | No gloss needed. Keep distinct from ブロック (code block). |

### Tooling & engineering

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| auth (authentication / authorization) | 認証 / 認可 | ja | Pick by meaning: 認証 = authentication, 認可 = authorization. |
| framework | フレームワーク | ja | Where the source `<define>`s it, explain that it means a reusable structure (再利用できる骨組み); otherwise use フレームワーク bare. |

### Platform & curriculum vocabulary

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| feature (platform capability) | 機能 | ja | Different word from 関数 (function); no collision. Never use 関数 for a product feature. |
| exercise | 演習 | ja | 「エクササイズ」is an alternative; do not mix both in one document. |
| course | コース | ja | The whole Jiki course the learner is taking (「このコースでは、Jiki が通訳をしてくれます」). Keep distinct from レッスン (lesson) and カリキュラム (curriculum); do not use 講座. |
| milestone | マイルストーン | ja | 「節目」is a native alternative. |
| pathway | 学習パス | ja | A structured learning sequence; near-synonym of "track". |
| solution (learner's submission) | 解答 | ja | The code the learner writes for an exercise. Avoid 「ソリューション」. |
| foot-gun | (descriptive) | ja | Use a descriptive phrase such as「自滅の元になりやすい機能」rather than forcing a fixed term. |

## Keep in English

These stay in English in prose. This set is deliberately **small in Japanese**: strong
native terms cover most concepts (e.g. `string` → 文字列, `Boolean` → 真偽値, `framework` →
フレームワーク), so only genuinely Latin-script items live here. Where the source
`<define>`s one of these terms, use the Japanese in the gloss column below; with no
`<define>`, use the English bare, no gloss.

| Term | Japanese gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | explain what it is in Japanese | Where defined, explain the concept in Japanese (プログラム同士が情報をやり取りする仕組み), not just gloss the acronym. |
| CLI (the concept) | コマンドラインインターフェース | Explain CLI as コマンドラインインターフェース (command-line interface) where the source defines it. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend (as UI labels / product tokens) | (no gloss) | Latin script **only** where these are interface labels or product tokens. In running prose the ordinary Japanese words are the katakana ones, and those are what to use: コード、バグ、フロントエンド、バックエンド (per "Default to the ordinary, common word" in `global/voice.md`). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language. The Jiki world is a physical place with shelves (棚) holding machines
(機械) and boxes (箱), plus a chain, pieces of paper, an input slot, a return chute and a
board.

The source names the room itself two different ways: the using-functions page says
**warehouse** (倉庫) and the scope page says **workshop** (作業場). Both rows are below; do
not substitute one for the other on a given page.

| English metaphor | Japanese rendering | Notes |
|-------------------|---------------------|-------|
| box (value container) | 箱 | |
| machine (function) | 機械 | |
| shelf / shelves | 棚 | |
| warehouse (Jiki's warehouse) | 倉庫 | Keep distinct from 作業場 (workshop). |
| workshop (Jiki's workshop) | 作業場 | Keep distinct from 倉庫 (warehouse). |
| board / whiteboard | ホワイトボード | **One object, one word:** the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same thing and take the same word. Do not use 掲示板 (reads as an online forum), 黒板 (a classroom blackboard), or bare ボード. |
| crank (machine crank) | ハンドル | Rendered as the verb phrase **「ハンドルを回す」** ("turn the handle") rather than a bare noun. Powering the machine up: 「ハンドルを回して電源を入れる」. |
| paper (a string) | 紙 | Jiki writes each string on a piece of paper. |
| chain (array metaphor) | 鎖 | A link is 鎖の輪 (or 輪). **Low confidence, flagged for native-speaker review.** |
| input slot | 差し込み口 | 「入力スロット」is an alternative. **Low confidence, flagged for native-speaker review.** |
| return chute | 返却シュート | 「出力シュート」/「滑り台」are alternatives. **Low confidence, flagged for native-speaker review.** |

## Brackets

Default to plain **括弧**. Show the glyph in a code tag immediately after, in full-width
parentheses, on the **first mention in a page**: 「括弧（`()`）」, then bare 括弧 after
that. When a specific bracket type matters (disambiguating one kind from another), name the
kind as well: 「角括弧（`[]`）」.

| Glyph | Japanese | Notes |
|-------|----------|-------|
| `()` | 括弧 · 丸括弧 | Plain 括弧 by default; add 丸 + glyph only when disambiguating. |
| `[]` | 角括弧 | Also 大括弧. |
| `{}` | 波括弧 | Also 中括弧・ブレース. |
| `<>` | 山括弧 | |

Example: 「関数を呼び出すには、関数名のあとに括弧（`()`）を書きます。」

---

## Decision log

### 2026-08-02: `interpreter` splits into インタプリタ (program) and 通訳者 (person)

**Decided by:** owner (iHiD), accepting a native speaker's challenge from
alexfalcon528 on <https://forum.jiki.io/t/japanese-review-glossary/311> (post 3).
**Terms affected:** `interpreter`; the `course` row's example sentence.

**This supersedes the `interpreter` decision in the 2026-07-30 owner-decisions entry
below.** That entry stands as history and is not to be re-applied. It moved the row from
`インタープリター` to `通訳` on the reasoning that Jiki is a character whose job is
interpreting, so a word naming a human interpreter was right. The premise was sound; the
word was not, and a native speaker's read outranks it. iHiD's direction was to trust the
reviewer here.

alexfalcon528, having read the published using-functions page:

> Specifically, the word 「通訳」when used alone does not mean 'interpreter' but
> 'interpretation,' as in the noun form of the verb 'to interpret.' As stated in the current
> glossary entry, the word 「インタプリタ」would more accurately describe 'interpreters,' as
> in the type of program, and 「通訳者」would more accurately describe 'interpreter,' as in the
> human profession.

On the specific sentence 「このコースでの通訳は Jiki です」:

> This sentence in particular feels unnatural to me, as it reads as if "Jiki" is a *type of
> interpretation* instead of the interpreter.

So the one row becomes two: **`インタプリタ`** for the software, **`通訳者`** for the one
doing the interpreting, Jiki included. What the previous entry got right and this one keeps
is that Jiki is a someone, not a program; `通訳者` names that someone, which bare `通訳`
cannot.

Bare `通訳` is not banned, it is just not a noun that names an interpreter. It is the
activity, and it is the more natural rendering wherever the sentence can be turned into a
verb or a role: alexfalcon528's own rewrite of the opening paragraph uses it that way twice
and never needs `通訳者`, replacing 「このコースでの通訳は Jiki です」with 「このコースでは、
Jiki が通訳をしてくれます」and glossing the program as 「インタプリタ、つまり通訳の役割を担う
プログラム」. His rewrite was applied verbatim to the page.

`インタプリタ` without the final ー is a deliberate exception to `guide.md`'s "keep the
long-vowel ー, do not apply the older JIS drop rule". The reviewer wrote it that way, and it
is the entrenched form in Japanese computing writing, so the term wins over the general
orthographic rule. The guide's rule is unchanged; the exception is noted on the glossary row
where a translator will see it.

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| concept (curriculum item) | 概念 | Concept Library → 概念ライブラリ; precedent across all content types. | high |
| challenge (product feature) | チャレンジ | Kept distinct from 演習 (exercise); 課題 would collide. | high |
| lesson | レッスン | Pins the コース / レッスン distinction. | high |
| unlock | アンロック | ~15 keys; alternative was 解放. | medium |
| Premium (tier) | プレミアム | Katakana everywhere rather than Latin. | medium |
| Deep Dive (feature) | ディープダイブ | Katakana rendering of the feature name. | medium |
| Learn to Build | 開発を学ぶ | Paired with Learn to Code → コードを学ぶ. | medium |
| streak (verbal contexts) | 連続学習 | Glossary's 連続学習日数 kept as the noun form. | medium |
| library (Concept Library) | ライブラリ | No final ー (ordinary form); flagged as an exception to the guide's long-vowel rule. | medium |
| Instructions (exercise panel) | 説明 | Deliberately not 指示 (that's what the learner gives Jiki). **Wants a native-speaker check.** | low |

Worth raising with reviewers, not glossary rows: standard politeness formulas (お試しください
/ お待ちください / お問い合わせください) used in error copy — the guide bans honorific keigo,
but these are ubiquitous set phrases, easy to soften if reviewers find them stiff.
`modals.levelMilestone.title` uses game register「レベルクリア！」while statuses elsewhere use
完了. `challenges.empty.inProgressDescription` quotes a "Get started" button rendered
「開始する」, but that button's own key lives in a still-untranslated namespace — must align
once it lands.

### 2026-08-01: Term-clarification example now shows the mandated italics

**Decided by:** agent, applying `global/voice.md` as the higher authority. **Terms
affected:** none.

`global/voice.md` says the English term is **always** set in italics, whether it is the
primary form or the bracketed gloss. The guide's Term-clarification example wrote it bare:
`関数（英: function）`. Japanese typographic convention does not conflict here: what is
italicised is the Latin-script word inside the full-width parentheses, and Japanese
characters are never italicised (the Hebrew guide states the same split for the same reason).
So this was an oversight, not a real conflict, and the example is now `関数（英: _function_）`,
with the Latin-only scope of the italics stated explicitly.

Also in the Orthography section, "full-width parentheses （） for the **first-use** English
gloss" now reads "for the `<define>` English gloss", so the wording cannot be read as
licensing a first-use auto-gloss, which `global/voice.md` forbids.

**Left alone:** the `brackets` row's instruction to show the glyph 「括弧（`()`）」 on first
mention in a page. That is a glyph disambiguation, not a cross-language gloss, so the
no-auto-gloss rule does not reach it.

### 2026-08-01: Rationale moved out of `guide.md`

**Decided by:** owner (iHiD), as part of the guide audits across languages. **Terms
affected:** none; no glossary row changed.

`languages/ja/guide.md` is loaded into the prompt for every Japanese item in every pass, so
the reasoning behind its rules was moved here and the rules left stated imperatively. Nothing
behavioural was dropped. What was removed, and why it is worth keeping:

- **Why です・ます is the "informal, friendly" register in Japanese.** Japanese
  learn-to-code content aimed at beginners (Progate, ドットインストール, Udemy JP) is warm
  and approachable, but it achieves that **within the polite です・ます register**, not by
  dropping into casual speech. The Microsoft Japanese Style Guide likewise mandates
  です・ます for user-facing content. This is why the guide's formality rule reads as the
  opposite of what `global/voice.md`'s "use the informal register" implies elsewhere.
- **Why both plain forms are rejected.** である体 (plain-formal) reads as a dry academic
  textbook or research paper: cold and distancing. だ体 (plain-casual) reads as either blunt
  and curt, or over-familiar, coming from a platform the reader does not know yet.
- **Why keigo is rejected.** Layered honorific/humble keigo (尊敬語・謙譲語) reads as stiff
  and corporate, the opposite of a friendly mentor; plain です・ます is the right level.
- **Why 私 is the one licensed pronoun.** Where the author is genuinely speaking about
  himself, the sentence is *about* him, and dropping the subject loses whose experience it
  is. That is the whole justification, and it is why the exception does not extend to the
  editorial 私たち or to あなた.
- **Why "do not over-kanji-fy".** Modern web writing "opens" formal auxiliaries and formal
  nouns into hiragana; that openness is what keeps the tone warm and readable, whereas heavy
  kanji reads as officious.
- **Why the long-vowel ー is kept.** サーバー/ユーザー/コンピューター is the modern
  web/Microsoft convention, superseding the older JIS "drop the final ー" rule.
- **Why sentence structure gets its own section.** It is the single biggest quality lever in
  Japanese, and the characteristic failure mode of machine-produced Japanese is
  translation-flavoured (翻訳調) prose that tracks English word order.
- **Where the before/after examples came from.** The `if` and arrays concept pages.

Two guide bullets were deleted rather than moved, because the glossary already carries them
as rows: `機能` (feature) vs `関数` (function) not colliding, and "list" as an informal
synonym for "array" both rendering as 配列. The glossary wording was already equivalent, so
no row was edited.

### 2026-07-31: Pruned ordinary vocabulary

53 rows with one obvious canonical rendering and nothing to decide were removed (e.g.
`value`, `error`, `variable`, `class`, `object`, `lesson`, `curriculum`, `to return (a
value)`, `pure function`; full list in the commit diff). A reviewer might query `track
(curriculum path)`: it was cut even though `pathway` (kept) calls it a near-synonym, since
`track` itself carries no distinguishing note of its own. `interpreter` and `board /
whiteboard`, protected as owner decisions above, were untouched.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Japanese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character, not just software. **This
  reverses Japanese's own earlier choice.** The row previously sat at `インタープリター`,
  chosen deliberately *because* `通訳` was rejected, on the reasoning that `通訳` "reads as
  human interpreting," which was judged wrong for a word meant to name a program. That
  reasoning has now inverted: Jiki is a character whose job is interpreting, so a word that
  names a human interpreter is exactly right, not a liability. `通訳` is the ordinary
  Japanese word for a person who interprets one language into another, which is precisely
  Jiki's job (code into 1 と 0), and `インタープリター`/`インタプリタ` are kept only to name
  the software Jiki is not. The row moved to **`通訳`**.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor, and forcing two words for it invents a
  distinction the course does not make. The row moved from **`ボード`** to
  **`ホワイトボード`**: bare `ボード` in Japanese reads as a plank, a circuit board, or a
  board game, none of which is the intended image, while `ホワイトボード` is the everyday
  word for a writing board in a room and does not collide with `配列` (array).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Agent drafting for the concept-page pass (unconfirmed)

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.
**Terms affected:** rows the using-functions concept pages needed (`interpreter`,
`instruction (given to Jiki)`, `mental model`, `(programming) language`,
`brackets (the two after a function name)`, `input (to a function)`, `error`, `character`,
and the metaphor rows `machine`, `shelf / shelves`, `board / whiteboard`), plus `warehouse`
and `workshop`.

Rows were added or filled out to cover what the using-functions concept pages needed. None
of these change an existing decision beyond what the entry above already covers; they fill
gaps the pass hit.

**The warehouse/workshop contradiction.** The English source itself uses two different
words for what reads like the same kind of room: the using-functions page calls it a
**warehouse** ("if we look inside Jiki's warehouse, that's where he hangs out"), and the
scope page calls it a **workshop** ("Jiki creating a new small set of shelves in his
workshop"). Rather than force one Japanese word onto two different English words, the two
are kept as two distinct rows: `warehouse` (倉庫, using-functions page) and `workshop`
(作業場, scope page), each tied to the page that actually uses it.

**Left open:** whether Jiki's warehouse and Jiki's workshop are meant to be the same room.
This is a question about the English source, not something Japanese can resolve alone: the
source itself is inconsistent. If they are meant to be one room, English and every target
language's glossary should settle on a single word together.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| developer | エンジニア is the common Japanese self-identifier for a developer; 開発者 is more literal. |
| streak | 連続学習日数 is clearer for beginners than 「ストリーク」, though ストリーク is understood. |
| tech / tech industry | IT業界 is the natural, settled Japanese term; 「テック業界」is emerging but less settled. |
| pitfall | Ordinary word; natural Japanese idiom. |

#### Values & data types

| Term | Why |
|------|-----|
| value | 値 is the ordinary Japanese word for a value. |
| Boolean | Localized to Japanese, not kept in English (unlike Hungarian/Ukrainian). |
| string | Localized to Japanese, not kept in English (unlike Hungarian/Ukrainian): Japanese has a strong, universal native term. |

#### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Standard Japanese pattern: keyword + 文. |
| condition, comparison | Ordinary Japanese words, so they stand alone. |
| brackets (the two after a function name) | 括弧 already names the pair in Japanese, unlike English "brackets," so "two brackets" never needs rendering as 「2 つの括弧」. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | 指示 is the everyday word; 命令 reads as a military/legal-register command (and as a CPU instruction). |
| mental model | イメージ is the picture-in-your-head framing; メンタルモデル is jargon a beginner does not have. |
| (programming) language | 言葉 is warmer for the "language the computer understands" framing, and is how Japanese beginner material puts it; プログラミング言語 remains the technical compound. |
| scope | Standard katakana. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Standard Japanese dev term. |
| backwards compatibility | Standard, well-established term. |
| framework | Katakana loanword, well-attested. |
| component | Established Japanese tech vocabulary. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| solution (learner's submission) | 「ソリューション」reads as enterprise sales language for this sense. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | The canonical Japanese metaphor for a variable ("put a value into a box"); direct, concrete, and already how Japanese teaches variables. |
| machine | Literal and natural; Jiki's functions are little machines on a shelf. |
| shelf / shelves | Literal and natural. |
| warehouse | The place Jiki hangs out and keeps his machine shelf (using-functions page); ordinary, concrete word. |
| workshop | The room Jiki works in, where the shelves live (scope page); 「工房」sounds artisanal/craft-studio, so 作業場 is preferred. |
| crank | Japanese has no everyday one-word noun for a machine crank, and クランク reads as an engine part. |
| chain | Physical chain holding things in order. Japanese usually pictures an array as a row of boxes, so 鎖 is understandable but less idiomatic. |
| input slot | The concrete "insertion opening" a function's input goes into. |
| return chute | The opening a function's output comes out of; pairs with 差し込み口 into one "machine" mental model. |
