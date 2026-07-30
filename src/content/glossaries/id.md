---
lang: "id"
name: "Indonesian"
family: null
governance_sha: "1d91ad4"
content_version: "be42afc7571d"
published_at: "2026-07-30"
term_count: 94
forum_topic_id: 325
---

# Indonesian (id) glossary

The agreed term list for Indonesian. Every term here has been agreed and is binding: use
it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this
file; it surfaces new terms it had to decide on as proposals in its output (a "glossary
delta"). Those proposals are discussed, and only once agreed are they written in (by a
human or by Claude). So everything in this file is, by definition, already agreed. Terms
that have not been agreed simply are not here yet.

Writes are additive, and the final `Agreed by` column records who decided each row
(`agent` = an unconfirmed agent draft, `human` = confirmed by a native speaker, with the
forum topic where that happened). See "Glossary writes are additive" in
`global/workflow.md`.

## Core decisions

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| programming / coding | **pemrograman** | id | Standard, formal-but-natural term used throughout academic and dev sources (Munir/ITB, Dicoding). `koding`/`ngoding` is acceptable only when the source specifically stresses the casual act of writing code (Dicoding's own blog post is titled "Apa itu Coding"); never mix both in one document. | agent |
| developer | **developer** | id | Extremely common as a loanword in Indonesian tech media and dev tutorials. Where the source `<define>`s it, gloss the native _pengembang_. | agent |

## Localize (use the Indonesian term)

These are terms where the Indonesian is used in prose by default; the "Use (id/en)" column marks the exceptions kept in English. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| value | nilai | id | Ordinary word. | agent |
| number | angka | id | Use `angka` for the general sense; `bilangan` also appears but `angka` is the more natural default in tutorial prose. | agent |
| character | karakter | id | Naturalized. | agent |
| true / false | benar / salah | id | Used when explaining the concept; the literals `True`/`False` in code stay as code. | agent |
| integer | bilangan bulat | id | The keyword `int` in code stays English; the concept in prose is _bilangan bulat_. | agent |
| float / decimal | bilangan pecahan | id | Or _bilangan riil_ if the real-number nature matters more than the fractional one. No single fixed official term; pick one per document and stay consistent. | agent |
| element | elemen | id | Naturalized. | agent |
| index | indeks | id | Naturalized; both `index` and `indeks` spellings are seen, but `indeks` is the Indonesian-orthography form. | agent |
| key-value pair | pasangan kunci-nilai | id | | agent |

### Functions & control flow

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| condition | kondisi | id | Ordinary word; stands alone. | agent |
| comparison | perbandingan | id | Ordinary word; stands alone. | agent |
| expression | ekspresi | id | Naturalized. | agent |
| operator | operator | id | Naturalized loan, identical spelling. | agent |
| statement (executable) | pernyataan | id | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | pernyataan | id | The proposition sense: a claim that is true or false. Same Indonesian word as the executable sense above; pick by context, English distinguishes these but Indonesian does not have a clean second word. | agent |
| if statement | percabangan `if` | id | Keep the `if` keyword in code font; translate only "percabangan". | agent |
| function | fungsi | id | The *keyword* `function` in code stays English; the concept in prose is _fungsi_. | agent |
| to call (a function) | memanggil (fungsi) | id | | agent |
| to define (a function) | mendefinisikan / membuat (fungsi) | id | Either is natural; stay consistent within a document. | agent |
| parameter | parameter | id | Naturalized loan, identical spelling. Only worth glossing where the source `<define>`s it alongside `argumen`; otherwise self-explanatory. | agent |
| argument | argumen | id | Naturalized spelling (not `argument`). Distinguish from `parameter` where the two are introduced together. | agent |
| input (to a function) | input | en | Where the source `<define>`s it, gloss _masukan_, then use `input`. | agent |
| output | output | en | Where the source `<define>`s it, gloss _keluaran_, then use `output`. | agent |
| to return (a value) | mengembalikan | id | "Fungsi ini mengembalikan sebuah nilai." | agent |
| return value | nilai kembalian | id | Keep distinct from the verb above. | agent |
| brackets (the two after a function name) | tanda kurung | id | Indonesian needs the shape named, and `tanda kurung` unmodified is the round pair `()`, so it carries "round" already; never expand it to `tanda kurung biasa` here. Square and curly brackets take their own modifiers (see "Brackets" below). | agent |

### Loops, state & program flow

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| keyword | kata kunci | id | Ordinary compound; stands alone. | agent |
| interpreter | interpreter | en | On concept pages the interpreter is Jiki himself, a character whose job is to interpret the code you write, so the term has to be able to name a person. `interpreter` does: Indonesian uses it for the human doing the interpreting as well as for the program (job ads pair "penerjemah dan interpreter" for exactly that split), and it is the ordinary word Indonesian dev writing already uses. Where the source `<define>`s it, gloss _penerjemah_, then use `interpreter`. Not _juru bahasa_ (specifically spoken-language interpreting between people). | agent |
| instruction (given to Jiki) | instruksi | id | Everyday naturalized word, the one Indonesian tutorials use for "instruksi program". Not _perintah_ (reads as "command/order", a harder register than the board metaphor wants) and not _petunjuk_ ("directions/hints"). | agent |
| mental model | model mental | id | The picture-in-your-head framing; ordinary Indonesian compound, modifier follows the noun. | agent |
| (programming) language | bahasa pemrograman | id | Full form on introduction; plain `bahasa` afterwards, including for "a language a computer understands" (_bahasa yang dimengerti komputer_). Never the English `language` in prose. | agent |
| variable | variabel | id | Real developers use `variabel`, not the official/academic coinage `peubah` (essentially unused outside textbooks). | agent |
| assignment | assignment | en | Kept English in dev prose (`memberikan nilai` as a paraphrase is also fine for the verb, see below). Where the source `<define>`s the noun, gloss _pengisian nilai_. | agent |
| to assign | memberikan nilai / menginisialisasi | id | Verb form; prefer this over a bare loanword. | agent |
| code block | blok kode | id |  | agent |
| error | error | en | Kept in code/debugging contexts; use _kesalahan_ when explaining the general concept in plain prose. Do not use _galat_ (localization-standard term, but inconsistently applied even in official Indonesian software localization; avoid it here for consistency). | agent |
| nested | bersarang | id | e.g. _perulangan bersarang_ = nested loop. | agent |
| iteration | iterasi | id | Naturalized; verb form _mengiterasi_ is used but less common than just describing the loop. | agent |
| to run / execute (code) | menjalankan | id | | agent |
| loop | perulangan | id | Real developers use `perulangan`, not the official coinage `gelung` (essentially unused). | agent |
| for loop | perulangan `for` | id | Keep the `for` keyword in code font; translate only "perulangan." | agent |
| while loop | perulangan `while` | id | As above, with `while`. | agent |
| scope | scope | en | Where the source `<define>`s it, gloss _cakupan_, then use `scope`. | agent |
| class | kelas | id | Indonesian teaching material pairs _kelas_ with _objek_ (Dicoding's OOP modules head their material "Kelas dan Objek"), so `kelas` is the consistent partner to the `objek` row below. The `class` keyword in code stays English. | agent |
| method | method | en | Kept English in dev prose; `metode` (the formal/dictionary form) reads too formal for this context. | agent |
| property | properti | id | Naturalized. | agent |
| object | objek | id | Naturalized; `object` also appears but `objek` is the Indonesian-orthography default. | agent |

### Tooling & engineering

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| workflow | alur kerja | id |  | agent |
| algorithm | algoritma | id | Naturalized, universal. | agent |
| module | modul | id | Naturalized, universal. | agent |
| auth (authentication / authorization) | autentikasi | id | Covers the login/identity sense; use _otorisasi_ only when the permissions sense specifically is meant. | agent |
| deploy | deploy | en | Kept English as a verb in dev prose (dominant real usage); where the source `<define>`s it, gloss _menerapkan_. | agent |
| tool / tooling | alat | id | `alat` is the natural base word; `tool`/`tools` also appears as a loanword in casual developer prose. | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Indonesian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, no gloss.

| Term | Indonesian gloss (on `<define>`) | Notes | Agreed by |
|------|-----------------------------------|-------|-----------|
| string | _untai_ | Official coinage exists (`untai`/`untaian`) but real developer prose keeps `string`. Where the source `<define>`s it, gloss _untai_, then use `string`. | agent |
| Boolean | (no gloss needed) | Naturalized as `boolean`, identical spelling; the official coinage `logika` is essentially unused. Lower-case in prose (`boolean`), capitalized only as the type name if the source capitalizes it. | agent |
| scope | _cakupan_ | See "Loops, state & program flow" above. | agent |
| interpreter | _penerjemah_ | See "Loops, state & program flow" above for why the loanword can name Jiki. | agent |
| method | (see notes) | See "Loops, state & program flow" above; kept English with no separate gloss needed since `metode` would read overly formal even as a gloss. | agent |
| component | _komponen_ | `komponen` (naturalized spelling) is common enough that a gloss is optional; include it where the source `<define>`s the term. | agent |
| API | explain what it is in Indonesian | Not a word a beginner knows; where the source `<define>`s it, explain the concept in Indonesian, not just gloss the acronym. | agent |
| framework | (no gloss) | No established native alternative in real use; keep as-is throughout. | agent |
| CLI | _antarmuka baris perintah_ | Explain CLI as _antarmuka baris perintah_ (command-line interface) where the source `<define>`s it. | agent |
| library | _pustaka_ | `library` is dominant in real dev prose; `pustaka` sees genuine localization/academic use. Where the source `<define>`s it, gloss _pustaka_, then use `library`. | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Platform & curriculum vocabulary

| English | Indonesian | Use (id/en) | Notes | Agreed by |
|---------|-----------|----------|-------|-----------|
| lesson | materi | id | Matches Dicoding's platform-native term for a lesson/reading unit; `pelajaran` reads more school-flavoured. | agent |
| exercise | latihan | id | `soal` is narrower ("problem/question"); use `latihan` for the exercise as a whole. | agent |
| course | kursus | id | The whole Jiki course the learner is taking ("Di kursus ini, interpreter-mu adalah Jiki"). Distinct from `materi` (one lesson) and `kurikulum` (the whole program). Not `kelas`, which Dicoding uses for a course but which is already taken by the OOP `class` row above. | agent |
| curriculum | kurikulum | id | The whole program. | agent |
| syllabus | silabus | id | A single course's outline, distinct from `kurikulum`. | agent |
| level | level | en | Kept English in dev-platform UI (e.g. "Level Dasar/Pemula"); `tingkat` is an acceptable native alternative if a document leans more formal. | agent |
| mentor / mentoring | mentor | en | Kept English; `pembimbing` is a workable native alternative but `mentor` is dominant in real platform usage. | agent |
| track (curriculum path) | jalur | id | e.g. _jalur belajar_ (learning path/track). | agent |
| tutorial | tutorial | en | Kept English for an interactive, step-by-step lesson; use `panduan` only for a static written guide, not an interactive tutorial. | agent |
| solution (learner's submission) | solusi / penyelesaian / jawaban | id | Context-dependent: `solusi` in general, `penyelesaian` for a worked solution, `jawaban` for a quiz answer. Pick the right one per context; do not force a single word everywhere. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Indonesian rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | kotak | Plain, concrete Indonesian word for "box". | agent |
| chain (array metaphor) | rantai | Standard Indonesian for a physical chain. | agent |
| input slot | lubang | The concrete, KBBI-backed word for "hole/opening"; more intuitive than the loanword `slot`. | agent |
| return chute | perosotan | The everyday word for a playground slide, chosen for physical intuitiveness over the more formal, dictionary-correct `luncuran`. Mirrors the choice other languages make to pick the playful, concrete word over the technically precise one for this metaphor. | agent |
| machine (function metaphor) | mesin | A function modelled as a machine, with an input slot (`lubang`) and a return chute (`perosotan`). | agent |
| crank (machine crank) | tuas | The handle Jiki turns to power a machine up: _memutar tuasnya_. Everyday word, and it reads as a thing you grab and turn. `engkol` is the more literal "crank" but pulls in a starter-motor/bicycle image; `pengungkit` is a physics-lesson word. | agent |
| shelves (storage) | rak | The shelves where variables and functions are stored (e.g. `rak buku` = bookshelf). | agent |
| warehouse (Jiki's warehouse) | gudang | Where Jiki hangs out and keeps his machine shelf. Plain everyday word. | agent |
| board / whiteboard | papan tulis | **One object, one word.** The same board the learner writes instructions on for Jiki to follow, and the one a function keeps its own instructions and notes on. `papan tulis` is the everyday Indonesian for a writing board in a room; bare `papan` on its own reads as a plank or a signboard, so it is not an accepted short form even on second mention. | agent |

## Brackets

| Glyph | Indonesian | Notes | Agreed by |
|-------|-----------|-------|-----------|
| `()` | tanda kurung | The unmodified form is the round pair, so it needs no "round" modifier. | agent |
| `[]` | tanda kurung siku | | agent |
| `{}` | tanda kurung kurawal | | agent |
| `<>` | tanda kurung sudut | | agent |
