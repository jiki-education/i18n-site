---
lang: "id"
name: "Indonesian"
family: null
stage: "refining"
governance_sha: "6740b5b"
content_version: "6b6ad36549f5"
published_at: "2026-08-03"
term_count: 64
category_id: 135
forum_topic_id: 325
video_player_forum_topic_id: 761
---

# Indonesian (id) glossary

The agreed term list for Indonesian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| programming / coding | **pemrograman** | id | `koding`/`ngoding` is acceptable only when the source specifically stresses the casual act of writing code; never mix both in one document. |
| developer | **developer** | id | Where the source `<define>`s it, gloss the native _pengembang_. |

## Localize (use the Indonesian term)

These are terms where the Indonesian is used in prose by default; the "Use (id/en)" column marks the exceptions kept in English. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| number | angka | id | Use `angka` for the general sense; `bilangan` also appears in the wild. |
| true / false | benar / salah | id | Used when explaining the concept; the literals `True`/`False` in code stay as code. |
| float / decimal | bilangan pecahan | id | Or _bilangan riil_ if the real-number nature matters more than the fractional one. Pick one per document and stay consistent. |
| index | indeks | id | Use the `indeks` spelling (the Indonesian-orthography form); `index` is also seen. |

### Functions & control flow

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| statement (executable) | pernyataan | id | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | pernyataan | id | The proposition sense: a claim that is true or false. Same Indonesian word as the executable sense above; pick by context. |
| if statement | percabangan `if` | id | Keep the `if` keyword in code font; translate only "percabangan". |
| to define (a function) | mendefinisikan / membuat (fungsi) | id | Either is natural; stay consistent within a document. |
| parameter | parameter | id | Only worth glossing where the source `<define>`s it alongside `argumen`; otherwise self-explanatory. |
| argument | argumen | id | Distinguish from `parameter` where the two are introduced together. |
| input (to a function) | input | en | Where the source `<define>`s it, gloss _masukan_, then use `input`. |
| output | output | en | Where the source `<define>`s it, gloss _keluaran_, then use `output`. |
| brackets (the two after a function name) | tanda kurung | id | `tanda kurung` unmodified is the round pair `()`; never expand it to `tanda kurung biasa` here. Square and curly brackets take their own modifiers (see "Brackets" below). |

### Loops, state & program flow

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| interpreter | interpreter | en | Where the source `<define>`s it, gloss _penerjemah_, then use `interpreter`. Not _juru bahasa_ (specifically spoken-language interpreting between people). |
| instruction (given to Jiki) | instruksi | id | Not _perintah_ (reads as "command/order", a harder register than the board metaphor wants) and not _petunjuk_ ("directions/hints"). |
| (programming) language | bahasa pemrograman | id | Full form on introduction; plain `bahasa` afterwards, including for "a language a computer understands" (_bahasa yang dimengerti komputer_). Never the English `language` in prose. |
| variable | variabel | id | Use `variabel`, not the official/academic coinage `peubah`. |
| assignment | assignment | en | `memberikan nilai` as a paraphrase is also fine for the verb (see below). Where the source `<define>`s the noun, gloss _pengisian nilai_. |
| to assign | memberikan nilai / menginisialisasi | id | Verb form; prefer this over a bare loanword. |
| error | error | en | Kept in code/debugging contexts; use _kesalahan_ when explaining the general concept in plain prose. Do not use _galat_. |
| loop | perulangan | id | Use `perulangan`, not the official coinage `gelung`. |
| scope | scope | en | Where the source `<define>`s it, gloss _cakupan_, then use `scope`. |
| class | kelas | id | The `class` keyword in code stays English. |
| method | method | en | Kept English in dev prose. |
| object | objek | id | Use the `objek` spelling (the Indonesian-orthography default); `object` is also seen. |

### Tooling & engineering

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| auth (authentication / authorization) | autentikasi | id | Covers the login/identity sense; use _otorisasi_ only when the permissions sense specifically is meant. |
| deploy | deploy | en | Where the source `<define>`s it, gloss _menerapkan_. |

## Keep in English

These stay in English in Indonesian prose, with the Indonesian gloss to use for each.

| Term | Indonesian gloss (on `<define>`) | Notes |
|------|-----------------------------------|-------|
| string | _rangkaian_ | Where the source `<define>`s it, gloss _rangkaian_ (a sequence of characters), then use `string`. Not _untai_: technically correct in the dictionary, but it reads as the thread of a necklace or a strand of beads. |
| Boolean | (no gloss needed) | Lower-case in prose (`boolean`), capitalized only as the type name if the source capitalizes it. |
| scope | _cakupan_ | See "Loops, state & program flow" above. |
| interpreter | _penerjemah_ | See "Loops, state & program flow" above. |
| method | (see notes) | See "Loops, state & program flow" above; kept English with no separate gloss needed. |
| component | _komponen_ | Include the gloss where the source `<define>`s the term; optional otherwise. |
| API | _suatu mekanisme yang berfungsi sebagai jembatan penghubung antara dua perangkat lunak agar dapat berkomunikasi dan bertukar data_ | Where the source `<define>`s it, explain the concept with this wording (adapt to fit the sentence), not just expand the acronym as _Antarmuka Pemrograman Aplikasi_. |
| framework | _kerangka kerja_ | Where the source `<define>`s it, gloss _kerangka kerja_ (the structure or guideline used to tackle a task in an organised way), then use `framework`. Always the full _kerangka kerja_, never bare _kerangka_, which reads as a skeleton. |
| CLI | _antarmuka baris perintah_ | Explain CLI as _antarmuka baris perintah_ (command-line interface) where the source `<define>`s it. |
| library | _pustaka_ | Where the source `<define>`s it, gloss _pustaka_, then use `library`. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code | _kode_ | Where the source `<define>`s it, gloss _kode_, then use `code`. |
| Bug, Frontend, Backend | (no gloss) | |

## Platform & curriculum vocabulary

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| lesson | materi | id | `pelajaran` reads more school-flavoured; prefer `materi`. |
| exercise | latihan | id | Use `latihan` for the exercise as a whole; `soal` is narrower ("problem/question"). |
| course | kursus | id | Distinct from `materi` (one lesson) and `kurikulum` (the whole program). Not `kelas`, which is already taken by the OOP `class` row above. |
| curriculum | kurikulum | id | The whole program. |
| syllabus | silabus | id | A single course's outline, distinct from `kurikulum`. |
| level | level | en | `tingkat` is an acceptable native alternative if a document leans more formal. |
| mentor / mentoring | mentor | en | `pembimbing` is a workable native alternative but `mentor` is preferred. |
| tutorial | tutorial | en | Kept English for an interactive, step-by-step lesson; use `panduan` only for a static written guide, not an interactive tutorial. |
| solution (learner's submission) | solusi / penyelesaian / jawaban | id | Context-dependent: `solusi` in general, `penyelesaian` for a worked solution, `jawaban` for a quiz answer. Pick the right one per context; do not force a single word everywhere. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Indonesian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | kotak | |
| chain (array metaphor) | rantai | |
| input slot | lubang | |
| return chute | saluran keluaran | The opening a finished value slides out of. Full form on introduction; plain `saluran` afterwards. Not _perosotan_ (a playground slide), which reads strange for this part of a machine. |
| machine (function metaphor) | mesin | A function modelled as a machine, with an input slot (`lubang`) and a return chute (`saluran keluaran`). |
| crank (machine crank) | tuas | The handle Jiki turns to power a machine up: _memutar tuasnya_. |
| shelves (storage) | rak | Where variables and functions are stored (e.g. `rak buku` = bookshelf). |
| warehouse (Jiki's warehouse) | gudang | Where Jiki hangs out and keeps his machine shelf. |
| board / whiteboard | papan tulis | **One object, one word.** The same board the learner writes instructions on for Jiki to follow, and the one a function keeps its own instructions and notes on. Bare `papan` on its own reads as a plank or a signboard, so it is not an accepted short form even on second mention. |

## Brackets

| Glyph | Indonesian | Notes |
|-------|-----------|-------|
| `()` | tanda kurung | The unmodified form is the round pair, so it needs no "round" modifier. |
| `[]` | tanda kurung siku | |
| `{}` | tanda kurung kurawal | |
| `<>` | tanda kurung sudut | |

How to phrase a bracket in running prose is in `guide.md`.

---

## Decision log

### 2026-08-02: `Code` → `kode` and `input slot` → `lubang` confirmed

**Decided by:** native speaker (deenovita), forum topic 325 (https://forum.jiki.io/t/325/7).
**Terms affected:** `Code`, `input slot`. **No rendering changed.**

Both rows already read as she confirmed. Row status upgraded to human-confirmed, protected.

### 2026-08-02: Native-speaker review of the glossary (deenovita, forum topic 325)

**Decided by:** deenovita, a native Indonesian speaker, reviewing the glossary on
https://forum.jiki.io/t/325 (posts https://forum.jiki.io/t/325/3 and
https://forum.jiki.io/t/325/5). These rows were all unconfirmed agent drafts from the
bootstrap, so this is the first native reading of them and it stands.
**Terms affected:** `string`, `API`, `framework`, `Code`, `return chute`.

- **`string` glosses as _rangkaian_, not _untai_.** _Untai_ is technically correct in the
  formal dictionary, which is why the bootstrap picked it, but it is rare outside its
  everyday context: the thread or strand used to make necklaces, pearls and beads. It
  therefore reads oddly as a sequence of characters. _Rangkaian_ gives the intuitive sense
  of a sequence, which is exactly what the term has to teach. The row itself is unchanged
  in kind: `string` still stays English in prose, only the gloss changed.
- **`API` now carries a real explanation.** The row previously only instructed the
  translator to "explain what it is in Indonesian" without saying how. deenovita supplied
  the wording, which the row now quotes: _suatu mekanisme yang berfungsi sebagai jembatan
  penghubung antara dua perangkat lunak agar dapat berkomunikasi dan bertukar data_. She
  also confirmed the acronym expansion (_Antarmuka Pemrograman Aplikasi_) is real but is
  not on its own an explanation a beginner can use.
- **`framework` glosses as _kerangka kerja_.** The row previously said "(no gloss)". It has
  an ordinary Indonesian rendering after all: _kerangka kerja_ (or interchangeably
  _kerangka_) for the foundation, structure or guideline used to tackle a task in an
  organised way. The full form is mandatory because bare _kerangka_ pulls in the
  skeleton/_kerangka manusia_ reading. `framework` still stays English in prose.
- **`Code` glosses as _kode_.** deenovita noted `code` does have a straightforward
  Indonesian rendering, _kode_, while `Bug`, `Frontend` and `Backend` are rightly left as
  they are; the shared "(no gloss)" row was therefore split. Whether Indonesian prose
  should go further and use _kode_ outright rather than keeping `code` English is asked
  back on the thread and is not yet settled.
- **`return chute` is _saluran keluaran_, not _perosotan_.** The bootstrap chose
  _perosotan_ (a playground slide) for physical playfulness over the drier _luncuran_.
  Shown the actual image of the machine's chute (https://forum.jiki.io/t/325/4), deenovita
  said _perosotan_ sounds strange for it and offered _saluran keluaran_, or _keluaran_
  ("output") or _saluran_ ("channel") alone. _Saluran keluaran_ is the row because bare
  _keluaran_ collides with the existing gloss for `output`, while _saluran_ alone loses the
  sense that a value comes out; _saluran_ is allowed as the short form once the full term
  has been introduced.

Also from the same review: deenovita confirmed the whole `Brackets` table, including plain
`tanda kurung` for `()`, so those rows are no longer unconfirmed drafts. `input slot` ->
_lubang_ is **still open**: she queried it alongside `return chute` as sounding strange, and
her follow-up post only addressed the chute, so the row is unchanged and has been asked
about again on the thread.

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`; they need agreement (ideally a native speaker) before
landing there.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| unlock | membuka / terbuka | Core progression verb, recurs app-wide. | medium |
| upgrade (plan/account) | meng-upgrade (loanword) | Native alternative _tingkatkan_ exists; sets precedent for all billing copy. | medium |
| challenge (platform content type) | tantangan | Completes the content-type set alongside exercise/concept. | high |
| subscription / subscribe | langganan / berlangganan | | high |
| hint | petunjuk | Keeps _instruksi_ free for instructions given to Jiki. | medium |
| Concept Library | Pustaka Konsep | Learner-facing feature name. | medium |
| dashboard | Dasbor | Or keep English; must be settled and match across all namespaces/passes. | low |
| scrubber, frame, breakpoint (coding-exercise UI) | kept English | No settled Indonesian terms. | low |
| Deep Dive | kept English | Treated as a feature/product name. | low |
| Free / Premium (plan names) | paket Free / paket Premium | Plan names kept English, "plan" localized as _paket_. | medium |

`dashboard` and `upgrade` are the two most worth settling before any `tidy` re-pass on this
namespace set; a different pass could reasonably land elsewhere.

### 2026-08-01: Guide pruned of rationale, provenance and duplicated examples

**Decided by:** agent, in the cross-language guide-pruning pass. No rule was changed or
dropped; everything below is reasoning moved out of `guide.md` (which is loaded into the
prompt for every Indonesian item) plus one mechanical fix.

Rationale removed from the guide and kept here:

- **Why "kamu" and not "Anda".** "Kamu" is the standard register of Indonesian
  dev-education tutorials aimed at beginners (Petani Kode, Dicoding, Kelas Terbuka all
  address the reader this way); it reads warm and direct and matches Jiki's mentor voice.
  "Anda" belongs to software/product localization (Mozilla and Microsoft style guides use
  it for UI strings), targets UI copy rather than teaching prose, and reads cold and
  EULA-like in a tutorial.
- **Why the audience register is the tutorial one.** Indonesian dev-education publishers
  (Petani Kode, Dicoding, Codepolitan, Kelas Terbuka) already model the warm, informal
  tutor voice Jiki wants, so their register is the model rather than the more formal
  localization-style-guide register. The guide now states the register directly, without
  naming the sources.
- **Why Jakarta-colloquial slang is banned.** "Gue"/"lo"/"lu" are non-baku and wrong for a
  national learning platform, which is why the informality stops at the address form and
  the grammar and spelling stay baku.
- **Why headings are sentence case.** Indonesian orthography (PUEBI) reserves full
  capitalization for publication titles, not tutorial headings or UI text, so English-style
  Title Case reads as a calque.
- **Where the worked examples came from.** The imperative, phrasing and heading examples in
  the guide were drawn from real Indonesian dev-education tutorials during the language
  bootstrap.

Also done in the same pass:

- **The "Worked examples" section was folded into the rules it illustrated.** Its
  imperatives, word-order and heading examples restated the Formality, Grammar and Style
  bullets verbatim; the two examples that taught something extra (the kamu-vs-Anda phrasing
  pairs, and the heading Title-Case contrast) were moved onto those bullets. No example
  that carried information was lost.
- **Quote glyphs corrected (unconfirmed draft).** The typography rule named curly
  quotation marks but printed ASCII `"` and `'` as its own examples. The glyphs are now the
  real ones, `“…”` and `‘…’`. The rule itself (curly doubles, curly singles nested) is
  unchanged and still awaiting native-speaker confirmation.

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, per the pruning pass over `glossary.md` (see `global/pass-mechanics.md` §
"Proposed glossary delta": only keep rows where a real decision exists). Removed 31 rows that had one
obvious canonical rendering with nothing to decide, e.g. `value`, `character`, `element`,
`condition`, `comparison`, `expression`, `operator`, `function`, `keyword`, `code block`,
`algorithm`, `module`, `workflow`, `property`, and the "for loop"/"while loop"/"to return (a
value)" rows that were mechanical restatements of already-established words. A reviewer
might query the removal of `function` and `to call (a function)`/`to return (a value)`:
these were cut because `fungsi`/`memanggil`/`mengembalikan` have no competing rendering on
record, not because the terms are unimportant. Rows recording a genuine choice, a rejected
alternative, a collision, a register distinction, an English-loanword decision, or the Jiki
metaphor set were all left untouched.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Indonesian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have.
  Indonesian merged both onto **papan tulis**, the everyday word for a writing board in a
  room. Bare `papan` on its own reads as a plank or a signboard, so it is not an accepted
  short form even on second mention.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Indonesian did not change:**
  it kept the English loanword `interpreter`, and the reason is worth recording precisely,
  because it is not simply that the loanword survived the ordinary-word test. The
  Indonesian translation trade itself draws this exact line: `penerjemah` is a written
  translator, while `interpreter` is the person interpreting live, on the spot. So the
  loanword is not a borrowed technical term that happens to work for a person here; it
  already *is* the person-word, in real Indonesian usage, for exactly this job. Not
  `juru bahasa` (spoken-language interpreting between people, a different job again).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Indonesian glossary drafted for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Work done to support the using-functions concept page, none of it yet reviewed by a native
speaker:

- **Rows added for the concept page**, including `instruction (given to Jiki)`,
  `mental model`, `(programming) language`, `brackets (the two after a function name)`,
  `input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`,
  `warehouse`, and `board / whiteboard` (the last per the owner decision above).
- **`class` was corrected.** The row previously offered two words; it now gives a single
  answer, `kelas`, matching Indonesian teaching material that pairs `kelas` with `objek`
  (Dicoding's OOP modules head their material "Kelas dan Objek"), which makes `kelas` the
  consistent partner to the `objek` row.
- **The brackets table was standardised on `tanda kurung`** for the plain `()` pair, with
  `tanda kurung siku` / `kurawal` / `sudut` for the others, so a bracket is always named
  the same way regardless of which document introduces it.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `class`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | `pemrograman` is the standard, formal-but-natural term used throughout academic and dev sources (Munir/ITB, Dicoding). Dicoding's own blog post is titled "Apa itu Coding", which is why the casual `koding`/`ngoding` form is allowed when the source itself leans casual. |
| developer | Extremely common as a loanword in Indonesian tech media and dev tutorials. |

#### Values & data types

| Term | Why |
|------|-----|
| number | `angka` is the more natural default in tutorial prose than `bilangan`. |
| character, element | Naturalized loanwords. |
| float / decimal | No single fixed official term exists in real usage, hence the choice between `bilangan pecahan` and `bilangan riil` per document. |
| index | Naturalized; both `index` and `indeks` spellings are seen, but `indeks` is the Indonesian-orthography form. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Indonesian words, so they stand alone. |
| expression, operator | Naturalized loans; `operator` keeps an identical spelling. |
| statement (logical claim) | English distinguishes this from the executable sense, but Indonesian does not have a clean second word, so both share `pernyataan`. |
| parameter | Naturalized loan, identical spelling. |
| argument | Naturalized spelling (`argumen`, not `argument`). |
| brackets (the two after a function name) | Indonesian needs the shape named, unlike English, which can say "the brackets" unmodified. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday naturalized word, the one Indonesian tutorials use for "instruksi program". |
| variable | `peubah`, the official/academic coinage, is essentially unused outside textbooks; real developers use `variabel`. |
| assignment | Kept English in dev prose for the noun; the verb has a natural paraphrase instead. |
| error | `galat` is the localization-standard term, but it is applied inconsistently even in official Indonesian software localization, so it is avoided here for consistency. |
| iteration | Naturalized. |
| loop | `gelung`, the official coinage, is essentially unused; real developers use `perulangan`. |
| method | `metode`, the formal/dictionary form, reads too formal for this context even as a gloss. |
| object | Naturalized; `object` also appears in the wild, but `objek` is the Indonesian-orthography default. |
| algorithm, module | Naturalized, universal terms. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Kept English as a verb in dev prose; this is the dominant real usage. |
| tool / tooling | `alat` is the natural base word; `tool`/`tools` also appears as a loanword in casual developer prose. |

#### Keep in English

| Term | Why |
|------|-----|
| string | Real developer prose keeps `string`; the gloss is covered by the 2026-08-02 entry above. |
| Boolean | Naturalized as `boolean`, identical spelling; the official coinage `logika` is essentially unused. |
| component | `komponen` (naturalized spelling) is common enough that a gloss is optional. |
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. The explanation itself is in the 2026-08-02 entry above. |
| library | `library` is dominant in real dev prose; `pustaka` sees genuine localization/academic use. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| lesson | `materi` matches Dicoding's platform-native term for a lesson/reading unit; `pelajaran` reads more school-flavoured. |
| exercise | `soal` is narrower ("problem/question") than the exercise as a whole. |
| course | Dicoding uses `kelas` for a course, but that word is already taken by the OOP `class` row, so Indonesian uses `kursus` instead ("Di kursus ini, interpreter-mu adalah Jiki"). |
| level | Kept English in dev-platform UI (e.g. "Level Dasar/Pemula"). |
| mentor / mentoring | `mentor` is dominant in real platform usage over the native `pembimbing`. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Indonesian word for "box". |
| chain | Standard Indonesian for a physical chain. |
| input slot | `lubang` is the concrete, KBBI-backed word for "hole/opening", more intuitive than the loanword `slot`. |
| crank | `tuas` is the everyday word and reads as a thing you grab and turn. `engkol` is the more literal "crank" but pulls in a starter-motor/bicycle image; `pengungkit` is a physics-lesson word. |
| warehouse | Plain everyday Indonesian word. |
