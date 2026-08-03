---
lang: "tr"
name: "Turkish"
family: null
stage: "refining"
governance_sha: "08a75bf"
content_version: "caa9be6dbd7c"
published_at: "2026-08-03"
term_count: 60
category_id: 136
forum_topic_id: 328
video_player_forum_topic_id: 783
---

# Turkish (tr) glossary

The agreed term list for Turkish. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| foot-gun | (descriptive phrase, no fixed term) | tr | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. |

## Localize (use the Turkish term)

These are terms where the Turkish is used in prose, so the "Use (tr/en)" column is `tr` throughout. Where the source `<define>`s a term, add the English version in brackets, e.g. "fonksiyon (function)". Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| true / false | doğru / yanlış | tr | Not capitalised in prose. Keywords `true`/`false` stay English in code. |
| float / decimal | ondalıklı sayı | tr | Use _kayan noktalı sayı_ only when the IEEE-754 floating-point nature specifically matters. |
| array / list | dizi | tr | Exercise prose sometimes says "list" informally for the same concept; render both as _dizi_, do not introduce a separate word. |
| index | indeks | tr | Deliberately not _dizin_, which means "directory" in filesystem contexts and would collide. |
| string | karakter dizisi | tr | Real Turkish code and docs also show raw "string"; the glossary term is for prose. |
| data type | veri tipi | tr | |

### Functions & control flow

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if` deyimi | tr | Keep `if` as the real keyword. At its first mention on a page that teaches conditionals, write it once as `if` deyimi (koşul ifadesi) so a beginner meets the meaning; every later mention on that page and elsewhere is bare `if` deyimi. |
| operator | operatör | tr | |
| NOT operator / logical negation | değil operatörü | tr | In code context, the concept is "`!` operatörü"; the `!` symbol stays as-is in code. |
| statement (executable) | deyim | tr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | önerme | tr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _deyim_ above. |
| function | fonksiyon | tr | The *keyword* `function` in code stays English; the concept in prose is _fonksiyon_. |
| parameter | parametre | tr | Declaration-site name. |
| argument | argüman | tr | Call-site value. |
| keyword | anahtar kelime | tr | The keyword itself stays English in code and in prose (`repeat` anahtar kelimesi, `if` anahtar kelimesi); this is the carrier noun it takes. Deliberately not _anahtar sözcük_, so one form is used everywhere. |
| `let` (first-mention gloss) | olsun | tr | The keyword `let` itself always stays English, in code and in prose; _olsun_ is only the sense given when it is first introduced, and it is never used as a standalone term afterwards. Never _izin ver_ ("allow / give permission"), which is the wrong sense of English "let". Introduce it by what it does, per the first-use rule in `guide.md`. |
| brackets (the two after a function name) | parantez | tr | Bare _parantez_ already means round brackets in Turkish, so it needs no qualifier here; square brackets are _köşeli parantez_ and curly ones _süslü parantez_, so use the qualified form whenever those are meant. Plural: _parantezler_ ("o iki parantez"). |

### Loops, state & program flow

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | yorumlayıcı | tr | The one who interprets, a **person** doing a job (Jiki himself), not a program. Never _çevirmen_/_tercüman_, which mean a person who translates between human languages; never _yorumcu_, which in everyday Turkish is a commentator or critic. |
| instruction (given to Jiki) | talimat | tr | Deliberately not _komut_, which is the word for a CLI command and would collide, nor _yönerge_, which is genuinely bureaucratic. |
| (programming) language | dil / programlama dili | tr | Never the English borrowing. Use full _programlama dili_ on first mention or where ambiguity is possible, and bare _dil_ thereafter, including for the "a language a computer understands" framing (_bilgisayarın anladığı bir dil_). |
| to run / execute (code) | çalıştırmak | tr | Avoid the colloquial "run etmek" in written prose. |
| for loop | `for` döngüsü | tr | Keep `for` as the real keyword + _döngü_. |
| while loop | `while` döngüsü | tr | As above, with `while`. |
| for-of loop | `for-of` döngüsü | tr | As above, with `for-of`. |
| break (loop control) | `break` deyimi | tr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| modulo / remainder operator | kalan | tr | The resulting value of the `%` operator. Prose register; avoid the colloquial "mod". |
| state / stateful | durum | tr | The noun is settled; for the adjective "stateful" use a descriptive phrase ("durum tutan") rather than a fixed coinage. |
| method | metot | tr | |
| property | özellik | tr | Watch for collision with "feature" (platform capability) below, which shares the same Turkish word; disambiguate with context if both appear in the same document. |

### Tooling & engineering

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| auth (authentication / authorization) | kimlik doğrulama / yetkilendirme | tr | Pick by meaning. |
| deploy | dağıtım | tr | Formal-prose noun. The colloquial verb "deploy etmek" exists in developer speech but is not used in written prose. |

### Platform & curriculum vocabulary

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | özellik | tr | Shares its Turkish word with "property" above; disambiguate with context, do not introduce a separate coinage. |
| course | kurs | tr | The whole Jiki course ("Bu kursta..."). Keep distinct from _ders_ (lesson) and _müfredat_ (curriculum); deliberately not _kur_, which in Turkish primarily means an exchange rate. |
| curriculum | müfredat | tr | |
| mentor / mentoring | mentor / mentorluk | en | |

### Drawing & color (exercise family)

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| hue | renk tonu | tr | Always the two-word form, including inside a compact describer argument list ("renk tonu: ${arg1}"); bare _ton_ is not a short form for it. |
| saturation | doygunluk | tr | |
| lightness | açıklık | tr | The HSL L channel is **always** _açıklık_, including where the English source says "brightness" loosely for the same channel (it does, in the `hsl` and `colors` concepts). Never render it _parlaklık_: that word is reserved for a genuinely separate brightness/luminosity concept, and using it here collapses the two. |
| canvas (drawing surface) | tuval | tr | Takes ordinary case suffixes (_tuvali temizledi_, _tuval boyunca_). |

## Keep in English

These stay in English in Turkish prose, with the Turkish gloss to use for each.

| Term | Turkish gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| Boolean | _mantıksal değer_ | Exception: where the source defines it, explain it means _mantıksal değer_, then use _Boolean_. |
| API | explain what it is in Turkish | Where defined, explain the concept in Turkish, not just gloss the acronym. |
| framework | _çatı_ | Where defined, explain it means a reusable _çatı_, then use _framework_. Never gloss it as _çerçeve_, which is the everyday word for "frame". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| CLI (the concept) | _komut satırı arayüzü_ | Where defined, explain CLI as _komut satırı arayüzü_ (command-line interface). |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Turkish rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | kutu | |
| chain (array metaphor) | zincir | A single link = _halka_ (not _bakla_, which means "broad bean" in everyday Turkish and would confuse the image). |
| input slot | para deliği | The narrow opening you post a coin into, as on a piggy bank. Generic fallback: _delik_ ("hole") if a context needs a less coin-specific word. Deliberately not _yuva_, which in Turkish (including in computing, e.g. "işlemci yuvası" = CPU socket) means a socket a matching part sits *in*, the wrong physical image for a narrow slot something is posted through. |
| return chute | kaydırak | Preferred over _oluk_, whose dominant everyday image is a roof rain-gutter. |
| machine (function metaphor) | makine | A function modelled as a machine, with an input slot and a return chute. |
| crank (machine crank) | kol | The handle Jiki turns to power a machine up. The verb phrase is _kolunu çevirmek_ ("to turn its crank"): _makinenin kolunu çevirip çalıştırmak_. Deliberately not _krank_, which in Turkish means an engine crankshaft, nor _manivela_, which is a lever for prying. |
| shelves (storage) | raf / raflar | The shelves where variables and functions are stored. |
| warehouse (Jiki's warehouse) | depo | Where Jiki hangs out and keeps his machine shelf. Preferred over _ambar_ (grain store, ship's hold) and _antrepo_ (a customs term). |
| move (the character) | götürmek | The verb for moving a character to a place, in the maze family and anywhere else a character is moved. Never _taşımak_, which is the "lift and carry" sense and pictures the learner picking the character up. Covers the `move()` describers and instruction bullets ("karakteri bir hücre ileri götürür"), not just hint prose. Unrelated senses of _taşımak_ are untouched: the "bear a name" idiom (_aynı adı taşımak_) and the noun _taş_ ("stone", as in rock-paper-scissors) are correct as they stand. |
| board / whiteboard | beyaz tahta | **One object, one word**: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, take the same word, always written in full as _beyaz tahta_. Bare _tahta_ also means wood or a plank and reads as a classroom blackboard, so it is never used as a short form. Never _akıllı tahta_ (smartboard), a different object. |

---

## Decision log

### 2026-08-03: Drawing/color terms, `keyword` and `let` confirmed by macroicetr

**Decided by:** native speaker (macroicetr), forum topic 328 ("[Turkish Review] Glossary"),
post 8: https://forum.jiki.io/t/328/8.
**Status:** human-decided, settled. Supersedes the "unconfirmed drafts" status recorded in
the entry below, and closes the open question on `let` recorded there.
**Terms affected:** `hue`, `saturation`, `lightness`, `canvas`, `keyword`, and a new `let`
row.

All five drafted rows were confirmed as they stood, so no rendering moved; what changed is
that they are now protected rather than provisional. The "Unconfirmed draft" marker was
removed from each. Two rows gained reasoning worth keeping, and one new row was added.

- **`lightness` → açıklık, kept distinct from _parlaklık_.** macroicetr explicitly endorsed
  the separation ("makes sense to separate the meanings") and pointed out that Photoshop's
  Turkish interface also uses _açıklık_ for this channel, so the choice matches software a
  learner may already have met. The row's existing guard against _parlaklık_ therefore now
  rests on a native speaker's call, not on an agent's reading of the English sources.
- **`keyword` → anahtar kelime, not _anahtar sözcük_.** macroicetr confirmed _kelime_ is the
  right choice here, which is the same conclusion the row already recorded from usage. The
  two words are synonyms in Turkish, but _kelime_ is the ordinary everyday one and the form
  the content already uses throughout, so nothing had to change.
- **`hue` → renk tonu, `saturation` → doygunluk, `canvas` → tuval.** Confirmed with no
  comment beyond agreement. The `hue` row's insistence on the full two-word form and the
  outstanding content fix to `draw`'s `hsl` describer ("ton: ${arg1}") are unaffected and
  still open.
- **`let` → olsun, not _izin ver_.** macroicetr settled the open question in favour of
  _olsun_. His reasoning against _izin ver_ is that it means "allow / grant permission",
  which is simply the wrong sense of English "let": nothing is being permitted when a
  variable is declared. He accepted _olsun_ as imperfect but correct, and it now has a
  glossary row of its own rather than living only as a one-off gloss on one page.

**Two first-use-explanation instructions came with the confirmations, and both went to
`guide.md`.** They are rules about how to write, not term mappings, and neither is specific
enough to one row to sit in a `Notes` column the way `if statement`'s parenthetical does:

- For _açıklık_, macroicetr asked for a brief one-sentence explanation of what the word
  means at its first mention in content, because the word alone will be unfamiliar to a
  newcomer meeting it as a colour channel.
- For `let`, his point was that since the keyword has no exact Turkish translation, trying
  to translate the word alone is the wrong move. Explain it instead with clear example
  phrases at its first introduction, specifically _değişken tanımlama_ (variable
  declaration) and _değer atama_ (value assignment). Once that logic is established,
  _olsun_ reads naturally.

Both were applied to translated content in the same pass: `concepts/variables/tr.md` now
introduces `let` through those two phrases instead of the bare "(olsun)" parenthetical it
carried, and `exercises/rainbow/instructions/tr.md` now says what _açıklık_ controls at the
point the term is taught. The two exercise message catalogs that use _açıklık_
(`exercises/rainbow` and `exercise-categories/draw`) are short UI strings with no room for
an explanation and were left alone; the concept pages `hsl` and `colors`, the other places
the term would land, have no Turkish translation yet.

### 2026-08-03: `move` (the character) is _götürmek_, never _taşımak_

**Decided by:** native speaker (macroicetr), forum topic 816 ("[Turkish Review] Exercise:
Solve the Maze").
**Status:** human-decided, settled.
**Terms affected:** new `move (the character)` row in "Jiki physical metaphors".

macroicetr's original batch on the maze exercise moved the hint prose from _taşımak_ to
_götürmek_, and they returned to point out that two spots had been missed: the `move()`
bullet in the instructions and the shared `describers.move` message in the maze category
catalog. The distinction is not stylistic. _Taşımak_ is "lift and carry/transport", so it
pictures the learner physically picking the character up and putting it down elsewhere;
_götürmek_ is "take/lead somewhere", which is what actually happens when the character walks
a step forward under instruction. The wrong verb quietly contradicts the whole premise of the
exercise, which is that you instruct the character rather than manipulate it.

This earned a glossary row rather than staying a per-item reviewer note for two reasons.
First, the term is not local to one exercise: `describers.move` lives in
`exercise-categories/maze/locales/tr/`, so it is shared by every exercise in the maze family
and a future maze exercise had nothing to follow. Second, the miss itself shows the failure
mode: a per-exercise note phrased around the hint keys did not stop the same English word
being rendered the old way in the describer and the instructions, because nothing said the
rule was about the verb rather than about those two strings.

A sweep of all Turkish curriculum content, exercise message catalogs and concept pages found
no other occurrence of _taşımak_ in the move-a-character sense. The remaining hits are
different words that must not be "fixed": _taş_ ("stone") throughout
`rock-paper-scissors`, and the ordinary Turkish idiom _aynı adı taşımak_ ("to bear the same
name") in the `variables` concept. The row says so explicitly, so a later reader running the
same grep does not over-correct them.

### 2026-08-03: Drawing/color terms and `keyword` logged from existing content

**Decided by:** nobody yet. These five rows are **unconfirmed drafts** (agent, 2026-08-03),
awaiting native-speaker confirmation on the pinned Turkish glossary topic.
**Terms affected:** `hue`, `saturation`, `lightness`, `canvas`, `keyword`.

All five were already in use in translated Turkish content from earlier passes but had never
been written into `glossary.md`, so the next exercise in the `draw` family had nothing to
follow and would have been free to diverge. Nothing was invented here: each row records what
the content already says, verified against the files before it was written. No existing row
was changed, and no translated file was edited.

- **`hue` → renk tonu.** In use in `exercises/rainbow/locales/tr/translation.json` (checks
  `hueRed`, `huePurple`, the scenario description, the hint Q&A, the HSL function
  description) and in `exercise-categories/draw/locales/tr/translation.json` (`hueRange`).
  The row insists on the full two-word form because one place already disagrees: the shared
  `draw` describer key `hsl` writes bare "ton: ${arg1}" while every other string says _renk
  tonu_. Bare _ton_ in Turkish is the general "tone/shade" word and does not name the HSL H
  channel on its own, so the majority form is the one recorded. Flagged, not fixed: the
  content edit is a separate job.
- **`saturation` → doygunluk.** In use in the same two files (`minSaturationLightness`,
  `saturationRange`, the `hsl` describer, the HSL function description). Consistent
  everywhere.
- **`lightness` → açıklık.** In use in the same two files (`minSaturationLightness`,
  `lightnessRange`, the `hsl` describer, the HSL function description). Consistent
  everywhere, and _parlaklık_ appears nowhere in Turkish content. The collision the row
  guards is upstream rather than in the Turkish: the English `hsl` and `colors` concept
  sources use "brightness" and "lightness" interchangeably for the same HSL channel, so a
  future pass translating those pages could reach for _parlaklık_ for one and _açıklık_ for
  the other and split one channel into two words. The row says the channel is always
  _açıklık_; _parlaklık_ is left free for a real, separate brightness concept if one ever
  appears.
- **`canvas` → tuval.** In use in `draw`'s `clear` describer ("tuvali temizledi") and in the
  rainbow scenario description ("Tuval boyunca"). No competing rendering (_kanvas_, _çizim
  alanı_) appears anywhere in Turkish content.
- **`keyword` → anahtar kelime.** In use across `concepts/repeat/tr.md`, `concepts/if/tr.md`
  and `concepts/variables/tr.md`, always as the carrier noun after an English keyword left in
  code font (`repeat` anahtar kelimesi). The variant _anahtar sözcük_ appears nowhere, so the
  row fixes the form that is actually used rather than opening a choice.

#### Open question: how to gloss `let`

**Not decided, and deliberately not decided here.** `let` is Jiki's variable-declaration
keyword, and like every keyword it stays English in code and prose. The question is only what
one-off Turkish gloss it gets the first time a learner meets it.

What the content does today: `concepts/variables/tr.md` glosses it once, at first mention, as
"`let` (olsun) anahtar kelimesini", and uses bare `let` every time after. That is the only
gloss of it anywhere in Turkish content; _izin ver_ appears nowhere.

What each candidate implies:

- **olsun** is the optative/jussive "let it be", the mathematical "let x = 5" sense. It
  matches what the keyword actually does (bring a named box into existence with a value) and
  it fits the concept page's box metaphor, but it is a bound verb form rather than a noun, so
  it reads oddly standing alone in brackets and cannot be inflected as a term.
- **izin ver** is the everyday "allow / give permission" sense of English "let". It is the
  more recognisable dictionary translation, and a beginner who looks the word up will find
  it, but it means the wrong thing here: nothing is being permitted, and it may teach the
  keyword as a permission rather than a declaration.

To put to a native speaker on the pinned topic: is _olsun_ the right first-mention gloss,
should it be _izin ver_, or is the honest answer that neither works and the keyword is better
introduced by describing what it does ("yeni bir kutu yapar") with no single-word gloss at
all? Whichever way it goes, it is one gloss on one page, so changing it is cheap.

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (content type) | meydan okuma | | high |
| exercise | alıştırma | | high |
| concept / Concept Library | kavram / Kavram Kitaplığı | | medium |
| Deep Dive | Derin İnceleme | | medium |
| dashboard | panel | | medium |
| streak | seri | | high |
| hint | ipucu | | high |
| scenario | senaryo | | high |
| scrubber | oynatma çubuğu | No settled Turkish term. | low |
| unlock | kilidini açmak | | high |
| Learn to Build | Geliştirmeyi Öğren | Product-name call, owner decision. | low |
| quiz | quiz (kept English) | | medium |
| AI / AI assistant | yapay zekâ / yapay zekâ asistanı | | high |

`scrubber` and `Learn to Build` are the two worth putting on the Turkish glossary thread for
native-speaker confirmation.

**FE flag:** `dashboard.exercisePath.completionCert.progress` is "%{percentage} tamamlandı" —
Turkish puts the percent sign before the number, so it now sits directly against the ICU
placeholder; worth confirming next-intl parses that cleanly. Several strings (Meydan
Okumalar, Derin İnceleme, "Kavram Kitaplığı'nı aç", "Yapay zekâ sohbet asistanının kilidini
açın") run much longer than English and want a visual check in nav/tabs/buttons.

### 2026-08-02: Glossary review from macroicetr — applied

**Decided by:** native speaker (macroicetr), forum topic 328 ("[Turkish Review] Glossary"),
post 3: https://forum.jiki.io/t/328/3, raised 2026-08-01 and applied to `glossary.md` on
2026-08-02. Turkish has a single active reviewer and nothing here is contested, so these are
that speaker's own calls on their own language and were actioned directly rather than being
held for the next retranslate. Supersedes the earlier logging of this thread as
"proposed, not applied".

Two rows changed:

- **`NOT operator / logical negation`**: _değilleme_ → **_değil operatörü_**. _değilleme_
  is technically correct but almost never used in everyday speech, so it may confuse a
  beginner at first glance; _değil operatörü_ is the friendlier, more recognisable framing.
  The `!` symbol itself stays as-is in code either way, and the row's existing note about
  "`!` operatörü" in code context is unchanged.
- **`framework`**: defining gloss _çerçeve_ → **_çatı_** (the term still stays English in
  prose after the first definition). _çerçeve_ is the literal rendering of "frame", so
  glossing `framework` with it invites confusion with the everyday picture-frame sense;
  _çatı_ ("roof/superstructure") carries the reusable-scaffolding sense the concept
  actually means. The row's note now says explicitly not to gloss it as _çerçeve_, so the
  superseded word cannot drift back in.

One row gained an instruction but not a new term:

- **`if statement`** stays `if` deyimi. macroicetr asked for a first-use parenthetical,
  "`if` deyimi (koşul ifadesi)", the first time conditionals are taught, so a beginner
  meets the meaning of a conditional expression once before the bare term is used
  throughout. This is a translator-actionable instruction attached to one term, so it lives
  in that glossary row's `Notes`, matching how Greek handles the first-use gloss of `bug`,
  rather than in `guide.md` (which holds language-wide rules, not per-term ones).

Noted, not acted on:

- **`return chute`** (_kaydırak_): macroicetr says the intended meaning is right but it
  "may sound awkward in use", and offered no alternative, saying to let it stand for now
  and keep it in mind. Left unchanged deliberately: an unease with no proposed replacement
  is not enough to move a term. **Open question to put back to macroicetr**: what about it
  reads awkwardly (register? the playground-slide image? the way it inflects in sentences?),
  and is there a word they would reach for instead. Revisit if an alternative appears.
- **`deploy`** (_dağıtım_): explicitly confirmed correct, "these are the exact
  equivalents". macroicetr listed the verb alongside the noun (_dağıtmak / dağıtım_), which
  is the ordinary inflection of the same word rather than a second term, so the row is
  unchanged; the existing note that the colloquial "deploy etmek" is spoken-only still
  holds.

No Turkish translated content used _değilleme_ or _çerçeve_ at the time of the change
(checked across the curriculum sources, the exercise message catalogs and the app UI
catalog), so no published file needed editing.

### 2026-08-01: Confirmed translation engine — fable (stick with original)

**Decided by:** native speaker (macroicetr), forum topic 938 ("[Turkish Review] Alternative
translation model"). The alternative model read more naturally/human-like but produced more
errors, deviated from the original meaning while trying to sound natural, and was harder to
understand as a result; macroicetr said "if I had to choose, I'd prefer the original."
iHiD confirmed (post #3): "OK thank you. We'll lock that in." `tr`'s `translation_engine` is
now explicitly set to `fable` in `tracking.json`.

### 2026-08-01: Quotation-mark example corrected to match the rule

**Decided by:** agent, applying the guide's own imperative rule over its worked example.
**Terms affected:** none.

The Style-notes bullet requires curly double quotes in Turkish prose but wrote its own
parenthetical example with straight ASCII quotes, so the example demonstrated the opposite of
the rule. The rule wins: the example now shows `(“…”)`, and the nested-quote half now shows
`(‘…’)` rather than naming "single quotes" without a glyph. The rest of the bullet, including
the requirement that code spans, string literals and CLI commands keep straight ASCII quotes,
is unchanged.

### 2026-08-01: Rationale moved out of the guide

**Decided by:** agent, authorised by owner (iHiD). `languages/tr/guide.md` is loaded into
the prompt for every Turkish item in every pass, so the reasoning behind its rules was
moved here and the rules left stated imperatively. Every behavioural instruction was kept;
nothing was reworded into a different rule. What was cut, and why it was true:

- **Why the guide targets one written standard.** There is no regional split comparable to
  Spanish or Portuguese: Cyprus Turkish and other regional forms are spoken-register
  variation without a competing written standard, and Azerbaijani is a distinct language,
  not a Turkish variant. The diaspora audience (notably Germany and other parts of Europe)
  reads the same standard written Turkish, so no locale variant is needed.
- **Why the "let's/we" framing carries the warmth.** Real Turkish tutorial culture
  (community sites like Yazbel/İstihza, Django Girls TR, government MEB course material)
  is warm and inclusive, but reaches that warmth through a different grammatical mechanism
  than Hungarian's `te` or French's `tu`: the hortative/optative and first-person-plural
  forms, not a drop to the informal pronoun.
- **Why `sen` is banned.** Unlike French `tu` or Hungarian `te`, Turkish `sen` is not
  simply "the casual register": it signals an already-established intimacy or equal
  footing. Real Turkish tutorials, from community sites to government curricula,
  consistently avoid it in written instructional prose, reserving it for short marketing
  CTAs or content aimed at children. Used in Jiki prose it would read off-register rather
  than warm and modern. `-iniz` was likewise rejected for body prose because it reads
  officious in a warm tutorial.
- **Status of the address system.** The `siz`-only system, with warmth carried by the
  "let's/we" framing, was applied across the first Turkish page (the using-functions
  concept) and is settled, as are the verb-final order, pro-drop, and code-token rules.
  Later pages inherit them; they are not re-opened per page.
- **Why code tokens are rephrased around rather than suffixed.** Turkish suffixes are
  chosen by the token's *pronounced* last vowel, which for an English identifier is a guess
  the reader has to make, and the four-way i/İ/ı/I hazard makes some of those guesses look
  wrong on the page. It is not squeamishness about apostrophes: the rephrased sentence
  reads better in Turkish anyway, because the carrier noun tells the reader what kind of
  thing the token names.
- **Why native verbs beat "X etmek".** Spoken developer Turkish productively forms verbs
  like "compile etmek", "debug etmek", "run etmek", but written tutorials prefer the
  single-word native verb (_derlemek_, _hata ayıklamak_, _çalıştırmak_).

Also removed as duplication, not as a decision: the guide's acronym examples for `CLI` and
`API` (both already glossary rows), and a "Worked examples" block of natural-phrasing and
EN→TR-pitfall lines that repeated examples already given verbatim under Formality and
Grammar. The one non-duplicate example there, "the value in the list" → _listedeki değer_,
was moved up into the case-suffix rule.

### 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, authorised by owner (iHiD). Removed 50 rows whose Turkish rendering
was the one obvious dictionary word with nothing to decide (e.g. `value`, `number`,
`variable`, `class`, `lesson`, `exercise`, `milestone`). Kept every row settling a live
öztürkçe-vs-loanword or register choice (`operator`, `function`, `method`, `data type`,
`(programming) language`, `to run / execute`, `deploy`, `modulo`), a collision or sense
distinction (`index`, `property`/`feature`, `parameter`/`argument`, the two `statement`
rows, `course`), a rejected coinage (`foot-gun`, `state / stateful`), an English-keyword
suffixing pattern (`if statement`, `for`/`while`/`for-of loop`, `break`), and the whole
"Keep in English" and "Jiki physical metaphors" sections untouched. A reviewer querying any
single cut should check `concept (learning unit)`, `exercise`, and `scenario`: their notes
gave context rather than a rejected alternative, so they read as settled vocabulary rather
than open decisions.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Turkish:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Turkish renders both as **beyaz tahta**,
  always written in full: bare _tahta_ also means wood or a plank and reads as a classroom
  blackboard, so it is not a safe short form.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Turkish kept **yorumlayıcı**: the `-yıcı` suffix is agentive and applies to people as
  readily as to tools, as in _yönetici_ or _yayıncı_, so it can name Jiki. Ruled out:
  _çevirmen_/_tercüman_, which mean a person who translates between human languages and
  lose the "turns it into ones and zeros" sense, and _yorumcu_, which means a commentator.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

### 2026-07-30: Turkish glossary drafting in the same pass

**Decided by:** agent. **Status: unconfirmed drafts**, except where the entry above governs.

Rows added for the using-functions concept page, and one deliberate call on a term with no
clean everyday option:

- `instruction (given to Jiki)` settled as **talimat**, despite the catalogue asking for an
  everyday rather than formal register: _talimat_ looks formal on paper, but the
  alternatives are worse. _komut_ is the word for a CLI command and would collide;
  _yönerge_ is more bureaucratic still.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `instruction`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, unambiguous. |
| developer | Standard Turkish equivalent. |
| tech / tech industry | Natural in Turkish tech media. |
| pitfall | Ordinary word. |
| foot-gun | Idiomatic English term with no clean one-word Turkish equivalent. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| character | Naturalized, ordinary in technical prose. |
| data type | Chosen over Microsoft's more formal "veri türü" to match majority developer/tutorial usage. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary/established words, so they stand alone. |
| operator | Chosen over TDK's purist "işleç", which real developers do not use. |
| function | Chosen over TDK's purist "işlev", which real developers do not use. |
| argument | Chosen over the more formal "bağımsız değişken", which real developers rarely use. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The established Turkish rendering; reads naturally in prose ("kafamda kurduğum zihinsel model"). |
| (programming) language | Ordinary native word, which Turkish beginners already know. |
| method | Chosen over TDK's purist "yöntem", which real developers do not use for this OOP sense. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| auth | Both _kimlik doğrulama_ and _yetkilendirme_ are standard, unambiguous terms. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | Ordinary, everyday word. |
| concept (learning unit) | Ordinary word. |
| exercise | Matches the convention used by other Turkish learning platforms (e.g. Duolingo TR). |
| curriculum | Chosen over the more formal, MEB-official "öğretim programı" for a non-government platform's voice. |
| mentor / mentoring | Fully naturalized loanword; TDK's native coinage "yönder" is essentially unused in real Turkish. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows. |
| framework | Native coinages exist only in dictionaries; real Turkish developer writing uses "framework". |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Turkish word for a box. |
| chain | Standard Turkish for a physical chain. |
| return chute | The everyday word for a playground slide; TDK's own definition also covers a log chute, so the "things slide out here" sense is native to the word, not a stretch. |
| warehouse | Ordinary, concrete word for a storeroom or warehouse. |
