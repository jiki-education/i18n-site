---
lang: "pl"
name: "Polish"
family: null
stage: "refining"
governance_sha: "4015cb5"
content_version: "df48f15794bd"
published_at: "2026-08-02"
term_count: 104
category_id: 201
forum_topic_id: 417
video_player_forum_topic_id: 771
---

# Polish (pl) glossary

The agreed term list for Polish. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| programming | programowanie | pl | Use consistently. |
| coding (informal) | kodowanie | pl | Use only when the source specifically stresses the casual, hands-on act of writing code. Never mix both in one document. |
| tech / tech industry | branża IT | pl | |
| developer | programista | pl | Do not use `deweloper`, which in general Polish usage means a real-estate developer. |
| streak | seria | pl | |
| pitfall | pułapka | pl | |

## Localize (use the Polish term)

These are terms where the Polish is used in prose, so the "Use (pl/en)" column is `pl` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| value | wartość | pl | |
| number | liczba | pl | |
| integer | liczba całkowita | pl | The keyword `int` in code stays English. |
| float / decimal | liczba zmiennoprzecinkowa | pl | The keywords `float`/`double` in code stay English. |
| character | znak | pl | The keyword `char` in code stays English. |
| true / false | prawda / fałsz | pl | Not capitalised in prose. The keywords `true`/`false` in code stay English. |
| array / list | tablica | pl | Do not use `łańcuch` for this. Because it owns _tablica_, no metaphor term may use that word (see the board row under "Jiki physical metaphors"). |
| dictionary | słownik | pl | |
| element | element | pl | |
| index | indeks | pl | |
| data type | typ danych | pl | The general concept. |

### Functions & control flow

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| if statement | instrukcja warunkowa | pl | The keyword `if` stays English in code. |
| condition | warunek | pl | Stands alone; no gloss needed. |
| comparison | porównanie | pl | Stands alone; no gloss needed. |
| expression | wyrażenie | pl | Distinct from _instrukcja_ (a statement); an expression always evaluates to a value. |
| operator | operator | pl | |
| statement (executable) | instrukcja | pl | The imperative sense: a line of code that does something and gets executed. Keep distinct from _wyrażenie_ (expression) and from the logical-claim sense below. Same word as the "instruction given to Jiki" row below. |
| statement (logical claim) | zdanie / zdanie logiczne | pl | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; never conflate with _instrukcja_. |
| function | funkcja | pl | The keyword `function` in code stays English; the concept in prose is _funkcja_. |
| to call (a function) | wywoływać / wywołać | pl | |
| to define (a function) | definiować / zdefiniować | pl | |
| parameter | parametr | pl | The declaration-site name. Keep distinct from _argument_ even though Polish developers sometimes conflate the two informally. |
| argument | argument | pl | The call-site value. See note on _parametr_ above. |
| input (to a function) | dane wejściowe | pl | |
| output | dane wyjściowe | pl | Where the specific value returned is meant, use _wynik_ or _wartość zwracana_ (see below) instead. |
| to return (a value) | zwracać / zwrócić | pl | The verb; keep distinct from the noun below. |
| return value | wartość zwracana | pl | The noun; fixed standard phrase. |
| brackets (the two after a function name) | nawiasy | pl | The `()` pair written after a function name to call it: _te dwa nawiasy_. Plain _nawiasy_ is enough here, because the round pair is the default; name the type only when disambiguating (see "Brackets" below). |
| pure function | funkcja czysta | pl | |

### Loops, state & program flow

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| keyword | słowo kluczowe | pl | |
| interpreter | interpreter | pl | "The one who interprets", a person doing a job: on concept pages Jiki *is* the interpreter. Never substitute a program-only paraphrase such as _program interpretujący_. Polish-spelled loanword, so it declines normally: _interpretera_, _interpreterem_, _interpreterowi_. Same-script loanword, so it takes no bracketed English gloss (see `guide.md`). |
| instruction (given to Jiki) | instrukcja | pl | The everyday noun: an instruction the learner gives Jiki. Not a formal/legal-register word such as _polecenie służbowe_ or _zarządzenie_. Plural _instrukcje_. Same word as "statement (executable)" above. |
| mental model | model mentalny | pl | Keep it; do not paraphrase as _wyobrażenie_. |
| (programming) language | język (programowania) | pl | Never the English borrowing. Use full _język programowania_ where the source names the category, plain _język_ for the "a language a computer understands" framing. |
| variable | zmienna | pl | |
| assignment | przypisanie | pl | The noun; keep distinct from the verb below. |
| to assign | przypisać / przypisywać | pl | The verb. |
| code block | blok kodu | pl | Keep distinct from _zakres_ (scope) below; they are related but not the same thing. |
| scope | zakres | pl | Keep distinct from _blok kodu_ (code block); a block establishes a scope, it is not the same as one. |
| error | błąd | pl | General error. Keep distinct from _wyjątek_ (exception) below. |
| exception | wyjątek | pl | The specific catchable-error-object sense, distinct from _błąd_ (a general error). |
| nested | zagnieżdżony / zagnieżdżona / zagnieżdżone | pl | Agrees in gender/number with the noun it modifies, e.g. _zagnieżdżona pętla_ = nested loop. |
| iteration | iteracja | pl | |
| to run / execute (code) | uruchomić / uruchamiać | pl | Use for launching a program. |
| element | zob. "Values & data types" | pl | |
| loop | pętla | pl | |
| for loop | pętla `for` | pl | Keep `for` in backticks (real keyword) + _pętla_. |
| while loop | pętla `while` | pl | As above. |
| for-of loop | pętla `for...of` | pl | As above. |
| loop body | ciało pętli | pl | |

### Tooling & engineering

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| increment | inkrementacja (noun) / inkrementować (verb) | pl | |
| modulo / remainder operator | modulo | pl | The `%` operator. The result itself, in plain language, is _reszta z dzielenia_. |
| concatenation | konkatenacja (noun) / konkatenować, łączyć (verb) | pl | Plain alternative: _łączenie ciągów znaków_. |
| toggle | przełączać / przełączenie (verb/noun), przełącznik (control) | pl | |
| state / stateful | stan (noun) / stanowy, bezstanowy (adjective) | pl | |
| class | klasa | pl | |
| method | metoda | pl | |
| property | właściwość | pl | Use _pole_ or _atrybut_ instead for a raw Java field, if that distinction matters in context. |
| object | obiekt | pl | |
| encapsulation | hermetyzacja | pl | |
| workflow | *(kept English)* | en | See "Keep in English" below. |
| auth (authentication / authorization) | uwierzytelnianie (authentication) / autoryzacja (authorization) | pl | Pick by meaning; the two concepts render differently in Polish. |
| deploy (verb: to deploy) | wdrożyć / wdrożenie, wdrażanie | pl | |
| tool / tooling | narzędzie / narzędzia | pl | "Tooling" as an abstract collective renders descriptively (e.g. _ekosystem narzędzi_) rather than as one fixed word. |
| module | moduł | pl | |
| algorithm | algorytm | pl | |
| edge case | przypadek brzegowy | pl | |
| backwards compatibility | kompatybilność wsteczna | pl | |
| component | komponent | pl | |

### Platform & curriculum

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| course | kurs | pl | The whole Jiki course the learner is taking. Keep distinct from _lekcja_ (lesson) and _program nauczania_ (curriculum). |
| Great work! / Great job! (success or congratulation opener) | Dobra robota! | pl | Never _Świetna robota!_: nobody says it in Polish, it reads as a word-for-word calque of "great job". |
| character (the little figure in the maze exercises) | ludzik | pl | **Masculine**, so every agreeing verb, adjective, participle and pronoun is masculine: _ludzik wszedł_, _ludzik nie dotarł_, _jest zwrócony_, _a on skręca_. Declines _ludzika_ (gen./acc.), _ludzikowi_ (dat.). Never _postać_, which is feminine and too abstract for the little person the English describes. |

## Keep in English

These stay in English in Polish prose, with the Polish gloss to use for each.

| Term | Polish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| string | _ciąg znaków_ | Where the source `<define>`s it, explain the concept as _ciąg znaków_, then use _string_ freely afterwards; that's what Polish developers actually say day to day. Deliberately not `łańcuch`, to keep it distinct from the "chain" array metaphor below. |
| framework | _framework_ has no established Polish equivalent; used as-is | No gloss needed beyond noting it is a framework/library ecosystem if the context doesn't make it obvious. |
| API | _interfejs programowania aplikacji_ | Where the source `<define>`s it, explain the concept in Polish, not just gloss the acronym. |
| workflow | _przebieg pracy_ (descriptive gloss only, not a fixed term) | Used as-is after a one-time descriptive gloss. |
| CLI (naming a specific tool) | _interfejs wiersza poleceń_ | When explaining the general concept, translate fully as _interfejs wiersza poleceń_ / _wiersz poleceń_; when naming a specific tool (e.g. "the Jiki CLI"), keep _CLI_. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

Naturalised loanwords that are spelled and declined as Polish words (_interpreter_,
_komponent_, _moduł_, _operator_) are **not** in this table: they are Polish rows above, and
they take no English gloss because the gloss would restate the same word (see `guide.md`).

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Polish rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | pudełko | Neuter. |
| box (draw-family grid cell) | pole | Neuter. A cell of a grid the learner draws into (e.g. the six forecast boxes in `weather-symbols`), not the variable metaphor: never _pudełko_ here, and never _pudełko_'s inflections. „Numer pola", „w polu", „siatka pól". |
| chain (array metaphor) | łańcuch | Where the source `<define>`s it, pair it with _tablica_ (the technical term for array), e.g. „tablica działa jak łańcuch (`tablica`)", so it doesn't get read as a synonym for _ciąg znaków_ (string), which some informal Polish programming material loosely calls "a chain of characters". Masculine. |
| machine (function metaphor) | maszyna | Feminine. |
| input slot | otwór wejściowy | Considered coinage, never validated by a native speaker. Flag for native-speaker review via `/action-forum-post`. |
| return chute | kanał zwrotny | Masculine. Settled by a native speaker: never _zsyp_, which in ordinary Polish is a one-way disposal chute (rubbish, laundry) and so contradicts the idea of something coming back. |
| shelves (storage) | półki | Feminine. |
| crank (machine crank) | korba | Feminine. The action is _zakręcić korbą_ (perfective, one-off). |
| warehouse (Jiki's warehouse) | magazyn | Masculine. |
| bouncer (bar/club door scenario) | ochroniarz | Masculine. Never _bramkarz_, which in everyday Polish reads first as "goalkeeper". Recurs across the `if` concept and the bouncer/guest-list exercises, so keep it identical everywhere, including image `alt` text and the compound _robot-ochroniarz_. |
| board / whiteboard | notatnik | **One object, one word**: the board the learner writes instructions on for Jiki, and the board a function keeps its own instructions and notes on, are the same word. Masculine. Do not reuse `notatnik` for the future dictionary spiral-notepad metaphor. See `glossary-notes.md` for why `tablica` was rejected. |

## Brackets

Default to plain **nawias**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _nawias kwadratowy (`[]`)_.

| Glyph | Polish | Notes |
|-------|--------|-------|
| `()` | nawias · nawias okrągły | Plain _nawias_ by default; add _okrągły_ + glyph only when disambiguating. |
| `[]` | nawias kwadratowy | |
| `{}` | nawias klamrowy | |
| `<>` | nawias ostrokątny (or _nawias trójkątny_) | |

---

## Decision log

### 2026-08-03: the draw-family grid cell is `pole`, never `pudełko`

**Decided by:** native speaker **mlistewnik** on the pinned Polish glossary thread, forum
topic 417, post 11: https://forum.jiki.io/t/417/11
**Terms affected:** `box (draw-family grid cell)` (new row).

We had asked, in the glossary announcement, whether the grid cell a learner draws into should
reuse the value-container metaphor. mlistewnik answered directly: absolutely do not use
_pudełko_ for a grid cell, _pole_ is fine, and gave the everyday reference point of
„pola na szachownicy" (the squares on a chess board). That is exactly the sense the draw
family needs: a flat, bounded area on a marked-out surface, not a container something is put
inside.

Keeping the two senses on separate words also protects the variable metaphor. _Pudełko_ is
load-bearing for "a box on Jiki's shelves that holds one value"; using the same word for a
square of a grid would make a learner read the forecast grid as six containers of values, and
would blur the one image the variables concept is built on. The existing `box (value
container) → pudełko` row is untouched by this decision.

This settles the "priority row to settle" logged as open in the 2026-08-02 Stage 2 batch 2
entry below, which the checker had been warning on for every draw-family pass.

**This row is human-decided.** It changes only by fresh agreement with a native speaker.

Already-published Polish content needed no fix: the only translated item using the grid-cell
sense, `exercise/weather-symbols` (instructions and message catalog), had already rendered it
as _pole_ throughout („numer pola", „w polu", „siatka sześciu pól"). Every occurrence of
_pudełko_ in Polish content (the `variables`, `arrays` and `if` concepts, and the JavaScript
interpreter catalog) is the value-container sense and is correct.

### 2026-08-03: success messages open with `Dobra robota!`, not `Świetna robota!`

**Decided by:** native speaker **mlistewnik** on the website-copy review thread, forum topic
1025, post 7: https://forum.jiki.io/t/1025/7
**Terms affected:** `Great work! / Great job! (success or congratulation opener)` (new row).

The exercise-completion success messages opened with „Świetna robota!". mlistewnik's verdict:
nobody says „świetna robota", it is a 1:1 translation of English "great job"; „dobra robota"
is the idiomatic Polish phrase. The row is written as a phrase mapping rather than a rule
because it is a fixed collocation: the fix is the word, not a principle about register.

Applied to `exerciseCompletion.success.messageExercise` and `.messageChallenge` in
`../front-end/app/messages/pl.json`. The rest of each sentence was already fine and was left
alone.

Deliberately left alone, because they are not the flagged collocation and are ordinary Polish:
„Świetnie!" (`successTitle`), „Świetny postęp!" (`allStartedDescription`), „Te ćwiczenia to
świetny sposób..." (concept-practice description), and „Fantastyczna robota!"
(`congratsFantasticJob`, which is a distinct exclamation, not a rendering of "great work").

### 2026-08-02: no `o` after `zapytaj` before a subordinate clause

**Decided by:** native speaker **mlistewnik** on the website-copy review thread, forum topic
1025, post 4: https://forum.jiki.io/t/1025/4
**Terms affected:** none (grammar rule, recorded in `guide.md` under Grammar).

The app's "Ask about..." prompt in the Ask Jiki panel was translated as „Zapytaj o...”,
followed by an animated rotating phrase („jak podejść do tego ćwiczenia”, „co oznacza ten
błąd”, ...). mlistewnik reported this as a grammatical error: the `o` is a calque of English
"ask about". In Polish, `pytać`/`zapytać` takes `o` only before a **noun** („spytaj o drogę”),
never before a subordinate clause. He noted that a pronoun workaround („Zapytaj o to, jak...”)
would be grammatical but does not fit here, because the prefix is fixed while the second half
of the sentence changes inside the animation, so the correct fix is simply to drop the `o`.

Applied: `codingExercise.canStart.askAbout` in `../front-end/app/messages/pl.json` changed
from „Zapytaj o...” to „Zapytaj...”. The two curriculum/app uses where `o` precedes a noun
(„zapytaj o wiek” in the `if` concept, „Zadawaj pytania o swój kod” in the premium upgrade
modal) are correct and were left alone.

### 2026-08-02: the maze character is `ludzik`, not `postać`

**Decided by:** native speaker **mlistewnik** on the maze-solve-basic review thread, forum
topic 811, post 9: https://forum.jiki.io/t/811/9
**Terms affected:** `character (the little figure in the maze exercises)` (new row).

The English describes a *little person* walking the maze. `postać` is the generic word for a
character/figure in the abstract (a character in a story, a form something takes), and reads
as distant and vague for a small cartoon figure a beginner is steering around a grid.
`ludzik` is the ordinary Polish diminutive for exactly that: a little human figure, the word
Poles use for the small person in a game or on a screen. It also removes the awkwardness of
the source's "small character" needing `mała postać`, since the smallness is already in the
word.

The swap is not lexical only: `postać` is feminine and `ludzik` is masculine, so every
agreeing verb, adjective, participle and pronoun in the surrounding sentence changed with it
(_Postać weszła_ → _Ludzik wszedł_, _jest zwrócona_ → _jest zwrócony_, _a ona skręca_ → _a on
skręca_). That is why the row carries the gender explicitly: a future pass that reaches for
the word without it produces sentences that are wrong rather than merely unidiomatic.

**This row is human-decided.** It changes only by fresh agreement with a native speaker.

`postać` is still correct, and is left alone, in its unrelated senses elsewhere in the Polish
content: "Prognoza ma postać siatki" (weather-symbols instructions) and "Poprawna postać to"
(JavaScript interpreter catalog) both mean *form*, not *character*.

The same reviewer contested `skręcać` in the same post. That is being handled separately and
nothing about it is recorded here.

### 2026-08-02: `input slot` candidate from mlistewnik, not yet confirmed

**Raised by:** mlistewnik (forum topic 417, post 7): https://forum.jiki.io/t/417/7
**Status:** open, one candidate logged, not written to `glossary.md`.

Proposes **szczelina wrzutowa** for `input slot` (currently the unconfirmed coinage `otwór
wejściowy`), citing real vending-machine manuals as the source (a narrow coin/card slot,
closer to Jiki's physical input-slot metaphor than the rounder-sounding `otwór`). Reviewer
disclosed partial LLM assistance in researching it, cross-checked against real manuals
though, so the term itself is worth keeping as a candidate even if the process that found it
isn't the personal-recollection kind we usually ask for. Needs a second, LLM-free native
speaker to independently confirm before it replaces the current row.

Same post also proposed **podajnik odbiorczy** to replace the already-settled `return
chute` → `kanał zwrotny` (see the 2026-07-31 entry below). Declined to act on that one: it
contests a native-speaker-settled row, and came with the same disclosed-LLM-assistance
caveat, so per "guide/glossary defers to humans" it needs a fresh, LLM-free native-speaker
objection before reopening, not just a plausible alternative.

### 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**Priority row to settle (now settled):** `box` (draw-family grid cell) → _pole_, deliberately
distinct from the existing value-container metaphor `box → pudełko`. Confirmed by a native
speaker and written to `glossary.md` on 2026-08-03; see the entry at the top of this file.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| compound data type | złożony typ danych | _złożony_/_zespolony_/_kompozytowy_ all defensible; sets precedent alongside the existing `typ danych` row. | medium |
| Boolean (the data type name) | wartość logiczna | Glossary has _prawda_/_fałsz_ but no row for the type itself; `boolean` kept-English or _typ logiczny_ are alternatives. | medium |
| piece of paper (string metaphor) | kartka papieru | Load-bearing recurring metaphor; over _papier_/_karteczka_ so every page pictures the same object. | medium |
| coin (machine-input metaphor) | moneta | Recurring metaphor for number inputs to machines. | medium |
| template string | kept English, as-is | Polish devs say it in English; consistent with the existing "string stays English" row. MDN-pl uses _literały szablonowe_ as an alternative. | medium |
| line of code | linijka kodu | _linijka_ (informal, matches Jiki voice) vs _wiersz_ (formal); line-count checks recur across exercises. | medium |
| meridiem / am-pm indicator | meridiem (indeclinable); _oznaczenie_ for "indicator" | Keep the Latin term where the source teaches it, paraphrase elsewhere; recurs in clock content. | medium |
| quotation marks | cudzysłów / podwójny cudzysłów | **Ambiguity, not just a term choice**: Polish prose quotes are „…", but the code a learner types uses straight ". Worth deciding whether teaching pages should show the `"` glyph explicitly. | medium |
| string in error-message prose (no `<define>`) | declined loanword, e.g. _stringami_ | Register call: declining the bare loanword vs _ciągami znaków_ in error messages; follows the existing keep-English row but a native speaker may want to settle it. | medium |

Possible `global/terms.md` gaps flagged: "template string", "compound data type", the
paper/coin metaphors.

### 2026-08-01: `guide.md` trimmed to rules only; rationale moved here

**Decided by:** owner (iHiD), as part of the cross-language guide-slimming pass.
**Terms affected:** none (no glossary row changed).

`languages/pl/guide.md` is loaded into the prompt for every Polish item in every pass, so
everything in it that was research provenance, justification or a restatement of another
file was removed. No behavioural instruction was dropped. What came out, and why it is
kept here:

- **Audience specifics section (removed).** It said only that readers are in Poland and
  Polish-speaking regions (Polish has no dialect split the guide needs to arbitrate), plus
  the research finding that the Polish online-education and IT-bootcamp market (e.g.
  Kodilla) already writes to young adult beginners in a direct, informal register, so
  Jiki's voice fits an established norm rather than having to invent one. That research is
  the reason the "Ty" decision was easy; it is not an instruction.
- **Provenance for the "Ty" register (removed from the guide).** The informal-Ty choice
  follows established Polish programming-education sites and professional Polish
  localization style guides for user-facing instructional content.
- **Provenance for the future-tense rule (removed from the guide).** The rule against
  „będziesz potrafić / potrafił / potrafiła budować", and the „nauczysz się budować"
  rephrase in its place, came from a **native speaker** on the forum:
  <https://forum.jiki.io/t/770/2>. The rule itself stays in the guide; this is a
  native-speaker decision and must not be overturned without fresh agreement on that
  thread.
- **Justification for the impersonal/się register (removed).** Using się constructions for
  conceptual explanation is not a contradiction of the informal register; it is how
  informal Polish instructional prose actually distributes direct address.
- **Acronym worked examples (removed).** The guide carried worked examples for `API` and
  `CLI` that duplicated their `glossary.md` "Keep in English" rows. They also said the
  expansion happens on "first use", which conflicts with `global/voice.md` (a gloss is
  triggered only by a `<define>` tag, never by first occurrence). The glossary rows already
  say "where the source `<define>`s it", so deleting the guide copies resolves the conflict
  without changing any decision.
- **Metaphor gender list (removed).** The guide listed _łańcuch_ masculine, _pudełko_
  neuter, _maszyna_ and _półka_ feminine. Every one of those genders is already in the
  glossary's metaphor table, which the guide now points at instead.
- **`interpreter` rationale (removed).** The "person, not a program" reasoning and the ban
  on _program interpretujący_ both live in the glossary row and in the 2026-07-30 entry
  below. The guide keeps only the residual grammatical instruction: agree with the word as
  a person („który", never „które").
- **Word-order example (removed).** "The function returns a value." → „Funkcja zwraca
  wartość." was a straightforward mapping needing no reordering, so it taught nothing the
  rule did not.

**One contradiction fixed.** The guide's quotation-mark rule named the Polish „…" pair,
but every example in the file closed with a straight ASCII `"` instead of U+201D. The rule
won: the closing glyph is now stated as U+201D explicitly and every example in the guide
uses it. This is standard Polish orthography, not an open question, so it is a correction
rather than a draft. Note that some examples inside `glossary.md` still close with a
straight quote; the rows were left untouched rather than reworded.

### 2026-08-01: `string` moves to Keep in English, glossed as `ciąg znaków` on first mention

**Decided by:** native speaker (siling) on the pinned Polish glossary thread, forum topic
417, post #5 (https://forum.jiki.io/t/417/5). **Terms affected:** `string`.

The row previously rendered `string` as `ciąg znaków` throughout prose. siling pointed out
that real Polish programming conversation says "string", reaching for `ciąg znaków` only
when actually defining the concept. This was an unconfirmed agent row (no prior
native-speaker decision on it), so it moves straight to Keep in English: `ciąg znaków` on
first `<define>`, `string` afterwards. `łańcuch` stays excluded, for the same reason as
before: it would collide with the chain/array metaphor.

Also raised in the same post, not actioned: whether `array` and `list` (both currently
`tablica`) should split into two terms, matching Python's distinct `list`/`array` types.
Held as-is: `global/terms.md` already treats "array / list" as one concept project-wide,
because Jiki's own curriculum only has one such data structure and English prose sometimes
calls it "list" informally, not because it introduces a second, Python-style type. Replied
on the thread explaining this rather than changing the row.

### 2026-07-31: `return chute` is `kanał zwrotny`, settled by a native speaker

**Decided by:** owner (iHiD), on the correction of native speaker **bavar** on the pinned
Polish glossary thread: https://forum.jiki.io/t/polish-review-glossary/417/3
**Terms affected:** `return chute` (and, by exclusion, `input slot`).

`return chute` changes from **`zsyp zwrotny`** to **`kanał zwrotny`**. bavar's point is
semantic, not stylistic: in ordinary Polish a _zsyp_ is a one-way disposal chute (the
rubbish or laundry chute in a block of flats), something you throw things down and never
get anything back from, which is the opposite of what the return chute does. `kanał
zwrotny` is ordinary Polish and reads straightforwardly as the channel a value comes back
along. The old rendering was an agent coinage that no native speaker had ever seen, so
there was nothing to overrule.

**This row is now human-decided and settled.** It changes only by fresh agreement with a
human, raised on that thread.

**`input slot` (`otwór wejściowy`) is untouched and still an unconfirmed coinage.** It was
drafted alongside `zsyp zwrotny` in the same pass and nobody has checked it; bavar's post
did not mention it. It still needs native-speaker input in its own right, and the fact that
its pair has now been settled is not evidence for it.

### 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Polish, plus a general principle:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. **Polish is the hardest case of all 28**: it
  has exactly one everyday word for a physical writing board, `tablica`, and `tablica` is
  already the agreed term for `array`. Rather than collide the two, the merged term took
  **`notatnik`** instead, which keeps the "surface you write instructions on that someone
  else then reads and follows" idea, at the cost of losing the board image itself.
  Recorded honestly: a native speaker reviewing this may well prefer to accept the
  collision and use `tablica` for both senses, letting context disambiguate, over losing
  the board picture. That question is open and should go to a native speaker via
  `/action-forum-post`. Whichever way it resolves, the future dictionary spiral-notepad
  metaphor must not reuse `notatnik`, since this decision has already spent it on the
  board/whiteboard sense.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter, so the word has to be able to name a character.
  Polish did not change rendering: the loanword `interpreter` was kept, because it is an
  `-er` agent noun that Polish developer writing genuinely uses for a person, unlike a
  program-only paraphrase such as `program interpretujący`. What changed is that the row
  now says so, and rules that paraphrase out explicitly.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from. This
  is what keeps `interpreter` as a loanword above while other terms stay native Polish.

### 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added**, for the terms the using-functions concept page needed: `instruction (given
to Jiki)`, `mental model`, `(programming) language`, `brackets (the two after a function
name)`, `course` (a new "Platform & curriculum" section), and the metaphor rows `crank` and
`warehouse`.

**One rendering corrected.** `encapsulation` changed from `enkapsulacja` to
**`hermetyzacja`**. The old row justified `enkapsulacja` only by consistency with how other
cognate CS loanwords are handled in this glossary, not by what Polish teaching material
actually says. `hermetyzacja` is the word Polish teaching material and Polish Wikipedia
actually use for the OOP concept; `enkapsulacja` is also current but less common outside
direct translations.

**Two coinages remain open questions, never validated by a native speaker**: `otwór
wejściowy` (input slot) and `zsyp zwrotny` (return chute). Both are flagged in the glossary
for native-speaker review via `/action-forum-post`; neither has been confirmed.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `encapsulation`) is not
repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| programming | The default, neutral term for programming. |
| tech / tech industry | Standard term in Polish tech writing. |
| developer | Standard, gender-neutral-reading term. |
| streak | Confirmed via Duolingo's own Polish product terminology, a comparable gamified daily-habit-learning product. |
| pitfall | Ordinary, idiomatic word; used this way in Polish IT writing. |

#### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| array / list | The unrivalled Polish CS term for array. |
| element, index | Direct cognates. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |
| operator | Direct cognate. |
| statement (executable) | `instrukcja` is the standard Polish CS term for an executable statement. |
| parameter | Jiki's own writing keeps the textbook-correct distinction between parameter and argument, even though Polish developers sometimes conflate the two informally. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Polish has one ordinary word for this and for "statement (executable)", and coining a second would read worse. |
| mental model | The standard Polish rendering, used in Polish psychology and UX writing. |
| (programming) language | Ordinary Polish word, known to every beginner. |
| for-of loop | No independent Polish name exists for this construct. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| modulo | `modulo` is a normal loanword in Polish too, not a code-switch. |
| toggle | Matches current Microsoft Polish UI terminology. |
| class, method, object, module, algorithm | Direct cognates. |
| component | Naturalised spelling, used consistently in general software writing and in frontend/React contexts. |

#### Keep in English

| Term | Why |
|------|-----|
| API | Not a term a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| workflow | Confirmed by Poland's own language authority (PWN) as having no settled Polish rendering for the dev/CI-CD sense. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Polish word for "box"; direct and concrete. |
| crank | Ordinary Polish word for a hand crank. |
| warehouse | Ordinary word for a storeroom/warehouse; the shelves stand in it. |
| input slot | No established Polish pedagogical precedent for this compound. |
| bouncer | Settled by a native speaker (marysska6, forum topic 1012, 2026-08-02): `bramkarz` is ambiguous and reads first as "goalkeeper", so the bar-door scenario misfires. `ochroniarz` is the neutral word for the door-security role. |
| return chute | `zsyp` (a chute an object drops through, e.g. a laundry/garbage chute) fits a returned value better than `zjeżdżalnia` (a slide, which implies a person riding it). |
