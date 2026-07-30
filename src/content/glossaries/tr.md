---
lang: "tr"
name: "Turkish"
family: null
governance_sha: "1d91ad4"
content_version: "c6474dc03544"
published_at: "2026-07-30"
term_count: 103
forum_topic_id: 328
---

# Turkish (tr) glossary

The agreed term list for Turkish. Every term here has been agreed and is binding: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed. Terms that have not been agreed simply are not here yet.

Writes are additive, and the final `Agreed by` column on every table records who decided each row. Both are defined in `global/workflow.md`.

## Core decisions

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| programming / coding | programlama | tr | Standard, unambiguous. | agent |
| developer | geliştirici | tr | Standard Turkish equivalent. | agent |
| tech / tech industry | teknoloji sektörü | tr | Natural in Turkish tech media. | agent |
| streak | seri | tr | A run of consecutive days, as in the learning-platform sense. | agent |
| pitfall | tuzak | tr | Ordinary word; stands alone. | agent |
| foot-gun | (descriptive phrase, no fixed term) | tr | Idiomatic English term with no clean one-word Turkish equivalent; use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. | agent |

## Localize (use the Turkish term)

These are terms where the Turkish is used in prose, so the "Use (tr/en)" column is `tr` throughout. Where the source `<define>`s a term, add the English version in brackets, e.g. "fonksiyon (function)". Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| value | değer | tr | Ordinary word. | agent |
| number | sayı | tr | Ordinary word. | agent |
| true / false | doğru / yanlış | tr | Not capitalised in prose. Keywords `true`/`false` stay English in code. | agent |
| character | karakter | tr | Naturalized, ordinary in technical prose. | agent |
| integer | tam sayı | tr |  | agent |
| float / decimal | ondalıklı sayı | tr | Use _kayan noktalı sayı_ only when the IEEE-754 floating-point nature specifically matters. | agent |
| array / list | dizi | tr | Exercise prose sometimes says "list" informally for the same concept; render both as _dizi_, do not introduce a separate word. | agent |
| dictionary | sözlük | tr |  | agent |
| element | eleman | tr | Array element = _dizinin elemanı_. | agent |
| index | indeks | tr | Deliberately not _dizin_, which means "directory" in filesystem contexts and would collide. | agent |
| key-value pair | anahtar-değer çifti | tr | The key itself is _anahtar_ (ordinary word once introduced). | agent |
| string | karakter dizisi | tr | Real Turkish code and docs also show raw "string"; the glossary term is for prose. | agent |
| data type | veri tipi | tr | Chosen over Microsoft's more formal "veri türü" to match majority developer/tutorial usage. | agent |

### Functions & control flow

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| if statement | `if` deyimi | tr | Keep `if` as the real keyword. | agent |
| condition | koşul | tr | Ordinary/established word; stands alone. | agent |
| comparison | karşılaştırma | tr | Ordinary word; stands alone. | agent |
| expression | ifade | tr | | agent |
| operator | operatör | tr | Chosen over TDK's purist "işleç", which real developers do not use. | agent |
| NOT operator / logical negation | değilleme | tr | In code context, the concept is "`!` operatörü"; the `!` symbol stays as-is in code. | agent |
| statement (executable) | deyim | tr | The imperative sense: a line of code that does something and gets executed. | agent |
| statement (logical claim) | önerme | tr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _deyim_ above. | agent |
| function | fonksiyon | tr | The *keyword* `function` in code stays English; the concept in prose is _fonksiyon_. Chosen over TDK's purist "işlev", which real developers do not use. | agent |
| to call (a function) | çağırmak | tr | _fonksiyonu çağırmak_. | agent |
| to define (a function) | tanımlamak | tr | | agent |
| parameter | parametre | tr | Declaration-site name. | agent |
| argument | argüman | tr | Call-site value. Chosen over the more formal "bağımsız değişken", which real developers rarely use. | agent |
| input (to a function) | girdi | tr |  | agent |
| output | çıktı | tr |  | agent |
| to return (a value) | döndürmek | tr | "Bir değer döndürür." | agent |
| return value | dönüş değeri | tr | Noun form; keep distinct from the verb _döndürmek_ above. | agent |
| pure function | saf fonksiyon | tr |  | agent |
| brackets (the two after a function name) | parantez | tr | Bare _parantez_ already means round brackets in Turkish, so it needs no qualifier here; square brackets are _köşeli parantez_ and curly ones _süslü parantez_, so use the qualified form whenever those are meant. Plural: _parantezler_ ("o iki parantez"). | agent |

### Loops, state & program flow

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| keyword | anahtar kelime | tr |  | agent |
| interpreter | yorumlayıcı | tr | The one who interprets, a **person** doing a job (Jiki himself), per `global/terms.md`. The `-yıcı` suffix is agentive and applies to people as readily as to tools (cf. _yönetici_, _koruyucu_, _yayıncı_), so it can name Jiki, and it carries no machine or program morpheme. Deliberately not _çevirmen_/_tercüman_, which mean a person who translates between human languages and lose the "turns it into ones and zeros" sense; and not _yorumcu_, which in everyday Turkish is a commentator or critic. | agent |
| instruction (given to Jiki) | talimat | tr | Everyday register despite looking formal on paper: _talimat vermek_ ("to give instructions") is ordinary workplace and household Turkish, not legal or bureaucratic language. Deliberately not _komut_, which is the word for a CLI command and would collide, nor _yönerge_, which is genuinely bureaucratic. | agent |
| mental model | zihinsel model | tr | The established Turkish rendering; reads naturally in prose ("kafamda kurduğum zihinsel model"). | agent |
| (programming) language | dil / programlama dili | tr | Ordinary native word, which Turkish beginners already know; never the English borrowing. Use full _programlama dili_ on first mention or where ambiguity is possible, and bare _dil_ thereafter, including for the "a language a computer understands" framing (_bilgisayarın anladığı bir dil_). | agent |
| variable | değişken | tr |  | agent |
| assignment | atama | tr |  | agent |
| to assign | atamak | tr | Matches _atama_ above: "bir değeri değişkene atamak." | agent |
| code block | kod bloğu | tr | | agent |
| error | hata | tr | | agent |
| nested | iç içe | tr | e.g. _iç içe döngü_ = nested loop. | agent |
| iteration | yineleme | tr | Verb: _yinelemek_. | agent |
| to run / execute (code) | çalıştırmak | tr | Avoid the colloquial "run etmek" in written prose. | agent |
| loop | döngü | tr |  | agent |
| for loop | `for` döngüsü | tr | Keep `for` as the real keyword + _döngü_. | agent |
| while loop | `while` döngüsü | tr | As above, with `while`. | agent |
| for-of loop | `for-of` döngüsü | tr | As above, with `for-of`. | agent |
| loop body | döngü gövdesi | tr | | agent |
| break (loop control) | `break` deyimi | tr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. | agent |
| increment | artırma | tr | Verb: _artırmak_. | agent |
| modulo / remainder operator | kalan | tr | The resulting value of the `%` operator. Prose register; avoid the colloquial "mod". | agent |
| concatenation / to concatenate | birleştirme / birleştirmek | tr |  | agent |
| state / stateful | durum | tr | The noun is settled; for the adjective "stateful" use a descriptive phrase ("durum tutan") rather than a fixed coinage. | agent |
| scope | kapsam | tr |  | agent |
| class | sınıf | tr |  | agent |
| method | metot | tr | Chosen over TDK's purist "yöntem", which real developers do not use for this OOP sense. | agent |
| property | özellik | tr | Watch for collision with "feature" (platform capability) below, which shares the same Turkish word; disambiguate with context if both appear in the same document. | agent |
| object | nesne | tr |  | agent |

### Tooling & engineering

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| workflow | iş akışı | tr | The software-engineering sense (a sequence of dev tasks). | agent |
| auth (authentication / authorization) | kimlik doğrulama / yetkilendirme | tr | Pick by meaning; both are standard, unambiguous. | agent |
| deploy | dağıtım | tr | Formal-prose noun. The colloquial verb "deploy etmek" exists in developer speech but is not used in written prose. | agent |
| tool / tooling | araç | tr | | agent |
| module | modül | tr | | agent |
| algorithm | algoritma | tr |  | agent |
| backwards compatibility | geriye dönük uyumluluk | tr |  | agent |

### Platform & curriculum vocabulary

| English | Turkish | Use (tr/en) | Notes | Agreed by |
|---------|---------|-------------|-------|-----------|
| feature (platform capability) | özellik | tr | Shares its Turkish word with "property" above; disambiguate with context, do not introduce a separate coinage. | agent |
| course | kurs | tr | The whole Jiki course ("Bu kursta..."). Ordinary, everyday word. Keep distinct from _ders_ (lesson) and _müfredat_ (curriculum); deliberately not _kur_, which in Turkish primarily means an exchange rate. | agent |
| concept (learning unit) | kavram | tr | A Jiki concept page, and also the "one of the fundamental concepts in programming" framing. Ordinary word; no separate coinage for the platform sense. | agent |
| lesson | ders | tr | | agent |
| exercise | alıştırma | tr | Matches the convention used by other Turkish learning platforms (e.g. Duolingo TR). | agent |
| scenario | senaryo | tr | Jiki-specific: a structured variant within an exercise. | agent |
| curriculum | müfredat | tr | Chosen over the more formal, MEB-official "öğretim programı" for a non-government platform's voice. | agent |
| level | seviye | tr | The curriculum's structural unit. | agent |
| milestone | kilometre taşı | tr | A progression checkpoint. | agent |
| mentor / mentoring | mentor / mentorluk | en | Fully naturalized loanword; TDK's native coinage "yönder" is essentially unused in real Turkish. | agent |
| solution (learner's submission) | çözüm | tr | | agent |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Turkish in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Turkish gloss (on `<define>`) | Notes | Agreed by |
|------|----------------------------------|-------|-----------|
| Boolean | _mantıksal değer_ | Exception: where the source defines it, explain it means _mantıksal değer_, then use _Boolean_. | agent |
| API | explain what it is in Turkish | Not a word a beginner knows; where defined, explain the concept in Turkish, not just gloss the acronym. | agent |
| framework | _çerçeve_ | Where defined, explain it means a reusable _çerçeve_, then use _framework_. Native coinages exist only in dictionaries; real Turkish developer writing uses "framework". | agent |
| JavaScript, Python, React | (no gloss) | Product/language names. | agent |
| Debug, Test | (no gloss) | As keywords/technical tokens. | agent |
| Code, Bug, Frontend, Backend | (no gloss) | | agent |
| Variable and function names | (no gloss) | Never translated. | agent |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. | agent |
| CLI (the concept) | _komut satırı arayüzü_ | Where defined, explain CLI as _komut satırı arayüzü_ (command-line interface). | agent |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. | agent |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Turkish rendering | Notes | Agreed by |
|-------------------|----------------------|-------|-----------|
| box (value container) | kutu | Plain, concrete Turkish word for a box. | agent |
| chain (array metaphor) | zincir | Standard Turkish for a physical chain; a single link = _halka_ (not _bakla_, which means "broad bean" in everyday Turkish and would confuse the image). | agent |
| input slot | para deliği | The narrow opening you post a coin into, as on a piggy bank. Generic fallback: _delik_ ("hole") if a context needs a less coin-specific word. Deliberately not _yuva_, which in Turkish (including in computing, e.g. "işlemci yuvası" = CPU socket) means a socket a matching part sits *in*, the wrong physical image for a narrow slot something is posted through. | agent |
| return chute | kaydırak | The everyday word for a playground slide; TDK's own definition also covers a log chute, so the "things slide out here" sense is native to the word, not a stretch. Preferred over _oluk_, whose dominant everyday image is a roof rain-gutter. | agent |
| machine (function metaphor) | makine | A function modelled as a machine, with an input slot and a return chute. | agent |
| crank (machine crank) | kol | The handle Jiki turns to power a machine up. The verb phrase is _kolunu çevirmek_ ("to turn its crank"): _makinenin kolunu çevirip çalıştırmak_. Deliberately not _krank_, which in Turkish means an engine crankshaft, nor _manivela_, which is a lever for prying. | agent |
| shelves (storage) | raf / raflar | The shelves where variables and functions are stored. | agent |
| warehouse (Jiki's warehouse) | depo | Where Jiki hangs out and keeps his machine shelf. Ordinary, concrete word for a storeroom or warehouse; preferred over _ambar_ (grain store, ship's hold) and _antrepo_ (a customs term). | agent |
| board / whiteboard | beyaz tahta | **One object, one word**, per `global/terms.md`: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, are the same board and take the same Turkish word everywhere. Always written in full: bare _tahta_ also means "wood/plank" and reads as a classroom blackboard, so it is never used as a short form. Never _akıllı tahta_ (smartboard), a different object. No collision with _dizi_ (array). | agent |
