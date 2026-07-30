---
lang: "ja"
name: "Japanese"
family: null
governance_sha: "1d91ad4"
content_version: "adda37fd2d80"
published_at: "2026-07-30"
term_count: 118
forum_topic_id: 311
---

# Japanese (ja) glossary

The agreed term list for Japanese. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed. Terms that have not
been agreed simply are not here yet.

## Provenance

The final **`Agreed by`** column on every table below records who decided the row, per
"The provenance column" in `global/workflow.md`: `agent` for an unconfirmed agent draft,
`human (t/<topic>)` for a rendering a native speaker settled on the forum. No Japanese term
has been confirmed by a native speaker yet (the pinned glossary topic, `t/311`, has no
replies), so every row is currently `agent`. Writes are additive: append rows, correct an
`agent` row and report the old value, never silently change a `human` row.

## Core decisions

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| programming / coding | プログラミング | ja | Use プログラミング consistently. 「コーディング」only when the source specifically stresses the casual act of writing code. Never mix both in one document. | agent |
| developer | エンジニア | ja | The common Japanese self-identifier. 「開発者」is a more literal alternative; do not mix both in one document. | agent |
| streak | 連続学習日数 | ja | The "consecutive days practised" sense. 「ストリーク」is understood but 連続学習日数 is clearer for beginners. | agent |
| tech / tech industry | IT業界 | ja | The natural Japanese term. 「テック業界」is emerging but less settled. | agent |
| pitfall | 落とし穴 | ja | Ordinary word; stands alone. Natural Japanese idiom. | agent |

## Localize (use the Japanese term)

These are terms where the Japanese is used in prose, so the "Use (ja/en)" column is `ja` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| value | 値 | ja | Ordinary word (atai). | agent |
| number | 数値 | ja | 数値 in a programming context; 「数」in casual mention. | agent |
| integer | 整数 | ja | | agent |
| float / decimal | 小数 | ja | 「浮動小数点数」when the floating-point nature specifically matters. | agent |
| character | 文字 | ja | A single text character. | agent |
| true / false | `true` / `false` | ja | Keep the literals in code font (Jikiscript tokens). Described conceptually as 真偽; not rewritten to 真/偽 in prose. | agent |
| array / list | 配列 | ja | Exercise prose sometimes says "list" informally for the same concept; render both with 配列, do not introduce a second word. | agent |
| dictionary | 辞書 | ja | | agent |
| element | 要素 | ja | Array element = 配列の要素. | agent |
| index | インデックス | ja | Katakana; no gloss needed. 「添字」is a native alternative; do not mix both in one document. | agent |
| key-value pair | キーと値のペア | ja | The key itself is「キー」(an ordinary word once introduced). | agent |
| template literal | テンプレートリテラル | ja | | agent |
| Boolean | 真偽値 | ja | **Localized to Japanese, not kept in English** (unlike Hungarian/Ukrainian). 「ブール値」is an alternative; do not mix both in one document. | agent |
| string | 文字列 | ja | **Localized to Japanese, not kept in English** (unlike Hungarian/Ukrainian): Japanese has a strong, universal native term. | agent |

### Functions & control flow

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| if statement | `if`文 | ja | Keep `if` in code font + 文. Standard Japanese pattern: keyword + 文. | agent |
| condition | 条件 | ja | Ordinary word; stands alone. | agent |
| comparison | 比較 | ja | Ordinary word; stands alone. | agent |
| expression | 式 | ja | | agent |
| operator | 演算子 | ja | | agent |
| NOT operator / logical negation | 否定 | ja | 「NOT演算子」when the operator itself is meant. | agent |
| statement (executable) | 文 | ja | The imperative sense: a line of code that executes, e.g. `if` 文、代入文. | agent |
| statement (logical claim) | 命題 | ja | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. | agent |
| function | 関数 | ja | The *keyword* `function` in code stays English; the concept in prose is 関数. | agent |
| to call (a function) | 呼び出す | ja | 関数を呼び出す。 | agent |
| to define (a function) | 定義する | ja | | agent |
| parameter | 仮引数 | ja | The declaration-site name. Rarely surfaced; Jiki prose favours 入力. | agent |
| argument | 引数 | ja | The call-site value. | agent |
| input (to a function) | 入力 | ja | Jiki prefers this over parameter/argument in prose. | agent |
| output | 出力 | ja | | agent |
| to return (a value) | 返す | ja | 値を返す。 | agent |
| return value | 戻り値 | ja | Noun form; distinct from the verb "to return". 「返り値」is a common alternative; we standardise on 戻り値. | agent |
| pure function | 純粋関数 | ja | | agent |
| brackets (the two after a function name) | 括弧 | ja | Plain 括弧, not 丸括弧, for the `()` pair written after a function name. Show the glyph on the first mention in a page, 「括弧（`()`）」, then bare 括弧 after that. Do not render "two brackets" as 「2 つの括弧」: 括弧 already names the pair in Japanese. See the Brackets section below. | agent |

### Loops, state & program flow

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| keyword | キーワード | ja | 「予約語」is a more precise alternative; do not mix. | agent |
| interpreter | 通訳 | ja | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (「Jiki の仕事は、書かれたコードを通訳すること」), so the word has to be able to describe a person: 通訳 is the ordinary Japanese word for someone who interprets one language into another, which is exactly Jiki's job (code → 1 と 0). Use 通訳者 only where the person needs to be named explicitly and 通訳 alone would read as the activity. **Do not use インタープリター / インタプリタ**: in Japanese those name the software, so they cannot name Jiki. | agent |
| instruction (given to Jiki) | 指示 | ja | Everyday word. Do not use 命令, which reads as a command in the military/legal register (and as a CPU instruction). | agent |
| mental model | イメージ | ja | The picture-in-your-head framing. 「頭の中のイメージ」when the "in your head" part needs saying. Do not use メンタルモデル (jargon a beginner does not have) and do not drift to 考え方 mid-page: one word per document. | agent |
| (programming) language | プログラミング言語 | ja | The technical compound is プログラミング言語. For the "a language the computer understands" framing, use the ordinary 言葉 (「コンピューターにわかる言葉」), which is warmer and is how Japanese beginner material puts it. These are the two senses the source itself distinguishes, not two words for one thing; never reach for a katakana ランゲージ. | agent |
| variable | 変数 | ja | | agent |
| assignment | 代入 | ja | Noun. | agent |
| to assign | 代入する | ja | Matches 代入. | agent |
| code block | ブロック | ja | 「コードブロック」acceptable. Keep distinct from スコープ (scope). | agent |
| error | エラー | ja | | agent |
| nested | 入れ子 | ja | 入れ子のループ = nested loop. 「ネスト」also used; do not mix both in one document. | agent |
| iteration | 繰り返し | ja | 「反復」/「イテレーション」are alternatives. | agent |
| to run / execute (code) | 実行する | ja | | agent |
| loop | ループ | ja | 「繰り返し」for the verbal "repeat" sense. | agent |
| for loop | `for`ループ | ja | Keep `for` as the real keyword in code font + ループ. | agent |
| while loop | `while`ループ | ja | As above. | agent |
| for-of loop | `for-of`ループ | ja | As above. | agent |
| loop body | ループの本体 | ja | | agent |
| break (loop control) | 抜ける | ja | ループを抜ける。 The keyword `break` in code stays English; this is the prose verb for the concept. | agent |
| increment | インクリメント | ja | 「1 ずつ増やす」also natural in a fuller explanation. | agent |
| modulo / remainder operator | 余り | ja | The `%` operator. 「剰余」is the technical alternative. | agent |
| concatenation / to concatenate | 連結 | ja | 文字列連結 = string concatenation;「つなげる」also natural as a verb. | agent |
| toggle | 切り替える | ja | | agent |
| state / stateful | 状態 | ja | | agent |
| scope | スコープ | ja | Standard katakana; no gloss needed. Keep distinct from ブロック (code block). | agent |
| class | クラス | ja | | agent |
| method | メソッド | ja | | agent |
| property | プロパティ | ja | | agent |
| object | オブジェクト | ja | | agent |

### Tooling & engineering

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| workflow | ワークフロー | ja | The software-engineering sense (a sequence of dev tasks). | agent |
| auth (authentication / authorization) | 認証 / 認可 | ja | Pick by meaning: 認証 = authentication, 認可 = authorization. | agent |
| deploy (verb: to deploy) | デプロイ | ja | Standard Japanese dev term. 「デプロイする」for the verb. | agent |
| tool / tooling | ツール | ja | | agent |
| module | モジュール | ja | | agent |
| algorithm | アルゴリズム | ja | | agent |
| edge case | エッジケース | ja | 「例外的なケース」in a fuller explanation. | agent |
| backwards compatibility | 後方互換性 | ja | Standard, well-established term. | agent |
| comment (code) | コメント | ja | | agent |
| indentation | インデント | ja | | agent |
| framework | フレームワーク | ja | Where the source `<define>`s it, explain that it means a reusable structure (再利用できる骨組み); otherwise use フレームワーク bare. Katakana loanword, well-attested. | agent |
| component | コンポーネント | ja | Where the source `<define>`s it, explain it; otherwise use コンポーネント freely. Established Japanese tech vocabulary. | agent |

### Platform & curriculum vocabulary

| English | Japanese | Use (ja/en) | Notes | Agreed by |
|---------|----------|-------------|-------|-----------|
| feature (platform capability) | 機能 | ja | Different word from 関数 (function); no collision. Never use 関数 for a product feature. | agent |
| lesson | レッスン | ja | | agent |
| exercise | 演習 | ja | 「エクササイズ」is an alternative; do not mix both in one document. | agent |
| scenario | シナリオ | ja | Jiki-specific: a structured variant within an exercise. | agent |
| curriculum | カリキュラム | ja | | agent |
| course | コース | ja | The whole Jiki course the learner is taking (「このコースでの通訳は Jiki です」). Keep distinct from レッスン (lesson) and カリキュラム (curriculum); do not use 講座, which reads as a paid/institutional class. | agent |
| level | レベル | ja | The curriculum's structural unit. | agent |
| milestone | マイルストーン | ja | 「節目」is a native alternative. | agent |
| pathway | 学習パス | ja | A structured learning sequence; near-synonym of "track". | agent |
| bootcamp | ブートキャンプ | ja | | agent |
| syllabus | シラバス | ja | | agent |
| mentor / mentoring | メンター | ja | 「メンタリング」for the activity. | agent |
| track (curriculum path) | トラック | ja | | agent |
| tutorial | チュートリアル | ja | | agent |
| solution (learner's submission) | 解答 | ja | The code the learner writes for an exercise. Avoid 「ソリューション」, which reads as enterprise sales language for this sense. | agent |
| foot-gun | (descriptive) | ja | No clean Japanese equivalent; use a descriptive phrase such as「自滅の元になりやすい機能」rather than forcing a fixed term. | agent |

## Keep in English

These stay in English in prose. This set is deliberately **small in Japanese**: strong native terms cover most concepts (e.g. `string` → 文字列, `Boolean` → 真偽値, `framework` → フレームワーク), so only genuinely Latin-script items live here. Where the source `<define>`s one of these terms, use the Japanese in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Japanese gloss (on `<define>`) | Notes | Agreed by |
|------|--------------------------------|-------|-----------|
| API | explain what it is in Japanese | Not a word a beginner knows; where defined, explain the concept in Japanese (プログラム同士が情報をやり取りする仕組み), not just gloss the acronym. | agent |
| CLI (the concept) | コマンドラインインターフェース | Explain CLI as コマンドラインインターフェース (command-line interface) where the source defines it. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend (as UI labels / product tokens) | (no gloss) | Latin script **only** where these are interface labels or product tokens. In running prose the ordinary Japanese words are the katakana ones, and those are what to use: コード、バグ、フロントエンド、バックエンド (per "Default to the ordinary, common word" in `global/voice.md`). | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical
language. The Jiki world is a physical place with shelves (棚) holding machines (機械) and
boxes (箱), plus a chain, pieces of paper, an input slot, a return chute and a board.

The source names the room itself two different ways, and Japanese follows it rather than
flattening the two into one word: the using-functions page says **warehouse** (倉庫, where
Jiki hangs out and keeps his machine shelf) and the scope page says **workshop** (作業場,
the room he works in). Both rows are below. Do not describe the Jiki world as a "workshop"
generally, and never substitute one for the other on a given page.

| English metaphor | Japanese rendering | Notes | Agreed by |
|-------------------|---------------------|-------|-----------|
| box (value container) | 箱 | The canonical Japanese metaphor for a variable ("put a value into a box"). Direct, concrete, and already how Japanese teaches variables. | agent |
| machine (function) | 機械 | Literal and natural. Jiki's functions are little machines on a shelf. | agent |
| shelf / shelves | 棚 | Literal and natural. | agent |
| warehouse (Jiki's warehouse) | 倉庫 | The place Jiki hangs out and keeps his machine shelf (using-functions page). Ordinary, concrete word. Keep distinct from 作業場 (workshop). | agent |
| workshop (Jiki's workshop) | 作業場 | The room Jiki works in, where the shelves live (scope page). 「工房」sounds artisanal/craft-studio, so prefer 作業場. Keep distinct from 倉庫 (warehouse). | agent |
| board / whiteboard | ホワイトボード | **One object, one word:** the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same thing and take the same word. ホワイトボード is the everyday Japanese word for a writing board in a room, and it does not collide with 配列 (array). Do not use 掲示板 (reads as an online forum), 黒板 (a classroom blackboard), or bare ボード (in Japanese ボード alone reads as a plank, a circuit board, or a board game). | agent |
| crank (machine crank) | ハンドル | Rendered as the verb phrase **「ハンドルを回す」** ("turn the handle") rather than a bare noun: Japanese has no everyday one-word noun for a machine crank, and クランク reads as an engine part. Powering the machine up: 「ハンドルを回して電源を入れる」. | agent |
| paper (a string) | 紙 | Jiki writes each string on a piece of paper. | agent |
| chain (array metaphor) | 鎖 | Physical chain holding things in order; a link is 鎖の輪 (or 輪). **Low confidence:** Japanese usually pictures an array as a row of boxes, so 鎖 is understandable but less idiomatic. Flagged for native-speaker review. | agent |
| input slot | 差し込み口 | The concrete "insertion opening" a function's input goes into. 「入力スロット」is an alternative. **Low confidence:** flagged for native-speaker review. | agent |
| return chute | 返却シュート | The opening a function's output comes out of. Pairs with 差し込み口 into one "machine" mental model. **Low confidence:** 「出力シュート」/「滑り台」are alternatives; flagged for native-speaker review. | agent |

## Brackets

Default to plain **括弧**. Show the glyph in a code tag immediately after, in full-width
parentheses, on the **first mention in a page**: 「括弧（`()`）」, then bare 括弧 after
that. When a specific bracket type matters (disambiguating one kind from another), name the
kind as well: 「角括弧（`[]`）」.

| Glyph | Japanese | Notes | Agreed by |
|-------|----------|-------|-----------|
| `()` | 括弧 · 丸括弧 | Plain 括弧 by default; add 丸 + glyph only when disambiguating. | agent |
| `[]` | 角括弧 | Also 大括弧. | agent |
| `{}` | 波括弧 | Also 中括弧・ブレース. | agent |
| `<>` | 山括弧 | | agent |

Example: 「関数を呼び出すには、関数名のあとに括弧（`()`）を書きます。」
