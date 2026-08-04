---
lang: "hi"
name: "Hindi"
family: null
stage: "refining"
governance_sha: "d0e4086"
content_version: "0804cf5665e6"
published_at: "2026-08-04"
term_count: 133
category_id: 237
forum_topic_id: 482
video_player_forum_topic_id: 757
---

# Hindi (hi) glossary

The agreed term list for Hindi. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`). See `guide.md` § "Register" for the three-way policy
this glossary applies, and § "Script convention" for why almost every row is Devanagari.

The **Gender** column is binding: Hindi verbs, adjectives and postpositions all agree with
a noun's gender, including for borrowed nouns, so a wrong gender is a grammatical error on
every sentence the term appears in. `m` = masculine, `f` = feminine, `m/f` = agrees with the
person referred to, `-` = not a noun. A gender marked "unconfirmed" in Notes is our best
call, not a verified fact.

## Core decisions

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| coding | कोडिंग | f | hi | Follow the source: render "programming" as प्रोग्रामिंग and "coding" as कोडिंग in the same document, exactly where the English uses each. |
| programming | प्रोग्रामिंग | f | hi | |
| code (the noun, in prose) | कोड | m | hi | Devanagari, not bare Latin. Distinct from the literal UI label / token `Code`, which stays English (see "Keep in English"). |
| developer | डेवलपर | m/f | hi | Agrees with the person: "एक डेवलपर ने लिखा" / "एक डेवलपर ने लिखी" as appropriate. |
| streak | स्ट्रीक | f | hi | Gender and term both low confidence: not source-verified. Flag for native-speaker confirmation on first real use. |
| pitfall | आम गलती | f | hi | Medium confidence: flag for native-speaker review. |

## Localize (use the Hindi term)

These are used in Hindi prose, either as the agreed Devanagari spelling of a borrowed term
or as an ordinary Hindi word. They are Hindi-primary: used bare in prose, with the italic
English in brackets only where the source `<define>`s the term (see `guide.md` § "Term
clarification"). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| value | वैल्यू | f | hi | "वैल्यू रखी जाती है", "वैल्यू बदल जाती है". Confirmed by a native speaker for the "value of a variable" sense; still our own call for the other senses (see below). मान is the school-maths word for the same idea; we use वैल्यू for consistency with the other borrowed technical nouns. |
| number | संख्या | f | hi | Ordinary Hindi word; no borrowing. |
| integer | पूर्णांक | m | hi | Ordinary school-maths word. |
| float / decimal | दशमलव संख्या | f | hi | |
| character (in text) | अक्षर | m | hi | A written letter/character. Kept distinct from पात्र (the on-screen character) below. |
| true / false | सही / गलत | - | hi | Not capitalised in prose. Distinct from the literal code values `true`/`false`, which stay as-is in code. |
| Boolean | बूलियन | m | hi | The सही/गलत data type. |
| data type | डेटा टाइप | m | hi | |
| string | स्ट्रिंग | f | hi | Gender unconfirmed; feminine chosen and used consistently. |
| array / list | ऐरे | m | hi | The Devanagari spelling of "array"; सरणी is never used in real Hindi programming prose. Exercise prose sometimes says "list" informally for the same concept; treat as one term. Not to be confused with the ज़ंजीर metaphor (see Jiki metaphors). |
| element | एलिमेंट | m | hi | An item inside an ऐरे. कड़ी (link) is used only inside the chain metaphor, see Jiki metaphors. |
| index | इंडेक्स | m | hi | The position number of an element. |
| dictionary | डिक्शनरी | f | hi | The key-value data type. शब्दकोश is the everyday word behind the metaphor and can carry the explanation where the source gives one. |
| key-value pair | की-वैल्यू जोड़ा | m | hi | |
| template literal | टेम्पलेट लिटरल | m | hi | Where the source explains it: "एक तरह की स्ट्रिंग जिसमें एक्सप्रेशन इस्तेमाल कर सकते हैं" (wording by @suditi; only the embedded terms' script has changed, see `glossary-notes.md`). |

### Functions & control flow

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| function | फंक्शन | m | hi | फलन is not used in Hindi programming prose. Where the source explains the concept, tie it to the machine metaphor: "एक ऐसी मशीन जैसा कोड जो इनपुट लेकर आउटपुट देता है". The keyword `function` in code always stays English. |
| to define (a function) | बनाना | - | hi | "आप एक फंक्शन बनाते हैं". परिभाषित करना is the formal alternative; use it only where the source is being formal. |
| to call (a function) | कॉल करना | - | hi | "फंक्शन को कॉल करना". |
| parameter | पैरामीटर | m | hi | The declaration-site name: "फंक्शन बनाते समय दिया गया नाम". Kept distinct from आर्गुमेंट. |
| argument | आर्गुमेंट | m | hi | The call-site value: "फंक्शन को कॉल करते समय दी गई वास्तविक वैल्यू". Kept distinct from पैरामीटर. |
| input (to a function) | इनपुट | m | hi | The noun, for where a noun is needed (a `<define>`, a heading, the इनपुट स्लॉट metaphor). In ordinary prose say what the फंक्शन does instead: "फंक्शन दो संख्याएँ लेता है", not "फंक्शन का इनपुट दो संख्याएँ हैं" (see `guide.md` § "Sentence structure"). |
| output | आउटपुट | m | hi | As इनपुट above; in prose, "फंक्शन जोड़ देता है" rather than "फंक्शन का आउटपुट जोड़ है". |
| to return (a value) | लौटाना | - | hi | "यह फंक्शन एक वैल्यू लौटाता है।" Transitive (लौटाना), never the intransitive लौटना or the redundant वापस लौटना. वापस देना is fine where the prose is leaning on the machine metaphor. **Never रिटर्न करना.** |
| return value | रिटर्न वैल्यू | f | hi | Noun form, for where a noun is needed. In prose prefer the verb: "जो वैल्यू यह फंक्शन लौटाता है". |
| pure function | प्योर फंक्शन | m | hi | Advanced term; low confidence, flag for native-speaker review. |
| condition | शर्त | f | hi | Ordinary Hindi word; stands alone. |
| comparison | तुलना | f | hi | |
| if statement | `if` स्टेटमेंट | m | hi | The `if` keyword itself stays in code font; the surrounding noun is Devanagari. |
| statement (executable) | स्टेटमेंट | m | hi | The imperative sense: a line of code that does something. Kept distinct from दावा below. |
| statement (logical claim) | दावा | m | hi | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| expression | एक्सप्रेशन | m | hi | A piece of code that produces a वैल्यू. |
| operator | ऑपरेटर | m | hi | A sign used to calculate or compare. |
| brackets (the two after a function name) | ब्रैकेट | m | hi | The `()` pair, e.g. "उसका नाम लिखिए और उसके बाद वे दो ब्रैकेट लगाइए". Where round and square must be distinguished, say गोल ब्रैकेट (round) and चौकोर ब्रैकेट (square). |
| code block | कोड ब्लॉक | m | hi | Some lines of code that run together. |
| keyword | कीवर्ड | m | hi | A word of the language's own special vocabulary, such as `if` or `for`. |

### Loops, state & program flow

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| loop | लूप | m | hi | पुनरावृत्ति is not used. |
| for loop | `for` लूप | m | hi | Keep `for` in code font (a real keyword) + लूप. |
| while loop | `while` लूप | m | hi | As above, with `while`. |
| for-of loop | `for-of` लूप | m | hi | As above, with `for-of`. |
| loop body | लूप के अंदर का कोड | m | hi | |
| iteration | इटरेशन | m | hi | One round of a loop; where the source explains it, "लूप का एक चक्कर". |
| nested | नेस्टेड | - | hi | e.g. "नेस्टेड लूप". Where the source explains it, "एक के अंदर एक". |
| break (loop control) | `break` | - | hi | The keyword stays English in code; in prose, "लूप से बाहर निकलना". |
| variable | वेरिएबल | m | hi | चर is not used in Hindi programming prose. Where the source explains the concept, tie it to the box metaphor: "एक डिब्बा जिसमें वैल्यू रखी जाती है". |
| to assign | असाइन करना | - | hi | |
| assignment (noun) | असाइनमेंट | m | hi | Collides with the school sense of "homework"; prefer rephrasing with the verb ("वैल्यू असाइन करना") wherever the source allows it. |
| to run / execute (code) | चलाना | - | hi | रन करना is an accepted alternative. निष्पादित करना is the formal textbook verb; use it only where the source is being formal. |
| to display | प्रदर्शित करना | - | hi | Not "डिस्प्ले करना". दिखाना is fine in warmer, less formal prose. |
| to declare | घोषित करना | - | hi | Not "डिक्लेयर करना". |
| to store | संग्रहीत करना | - | hi | रखना is fine, and warmer, in ordinary prose. |
| increment | बढ़ाना | - | hi | इंक्रीमेंट is the technical alternative, glossed only where the source `<define>`s it. |
| error | एरर | f | hi | **Feminine**, confirmed by real usage: "एक एरर मिलती है, जो कहती है...". Never "एरर मिलता है". |
| exception | एक्सेप्शन | m | hi | A special kind of एरर that code can catch. |
| state | स्थिति | f | hi | The information present in the code at a given moment. |
| toggle | टॉगल | m | hi | An on/off style change. |
| scope | स्कोप | m | hi | Where a वेरिएबल can be used. Kept distinct from कोड ब्लॉक. |
| interpreter | इंटरप्रेटर | m | hi | A **person** doing a job, not a program: Jiki is the interpreter. Never gloss it as a प्रोग्राम or सॉफ्टवेयर; it sits with the other person-role loanwords (डेवलपर, मेंटर). दुभाषिया is the native word for a human interpreter (a different job): flag for native-speaker review. |
| instruction (given to Jiki) | निर्देश | m | hi | Plural is also निर्देश ("Jiki को निर्देश देना"). This is the ordinary written Hindi word; इंस्ट्रक्शन is a needless borrowing where Hindi has its own word. |
| mental model | सोचने का तरीका | m | hi | Not मेंटल मॉडल, which is jargon a beginner has not met. Flag for native-speaker review. |
| (programming) language | भाषा | f | hi | Used both for a programming language and for "a language the computer understands". Use it throughout a page; do not mix in लैंग्वेज. |
| algorithm | एल्गोरिदम | m | hi | |

### Objects & structure

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| object | ऑब्जेक्ट | m | hi | Data representing something from the real world. |
| class | क्लास | f | hi | A blueprint for something: "किसी चीज़ का खाका". Gender unconfirmed; feminine chosen (matching the school sense of क्लास) and used consistently. |
| method | मेथड | m | hi | A फंक्शन attached to an ऑब्जेक्ट. Gender unconfirmed. |
| property | प्रॉपर्टी | f | hi | A विशेषता or piece of information belonging to an ऑब्जेक्ट. Kept distinct from फीचर (a platform capability). |
| encapsulation | एनकैप्सुलेशन | m | hi | Advanced/OOP term; low confidence, flag for native-speaker review. |
| module | मॉड्यूल | m | hi | A separate, reusable piece of code. |
| component | कंपोनेंट | m | hi | A small, reusable part of a page. |

### Tooling & engineering

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| to deploy | डिप्लॉय करना | - | hi | |
| framework | फ्रेमवर्क | m | hi | A ready-made structure for building programs. |
| tool / tooling | टूल | m | hi | Programs made to make work easier. |
| workflow | वर्कफ्लो | m | hi | The way or order in which work gets done. |
| auth (authentication / authorization) | ऑथेंटिकेशन | m | hi | The identity-check concept: "पहचान जाँचने की प्रक्रिया". |
| edge case | एज केस | m | hi | Where the source explains it: "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है" (wording by @dazecodes, unchanged). |
| backwards compatibility | बैकवर्ड कंपैटिबिलिटी | f | hi | Low confidence, term and gender; flag for native-speaker review. |

### Platform & curriculum vocabulary

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| exercise | अभ्यास | m | hi | Masculine: "आपके पहले अभ्यास में आपका स्वागत है!". Use it in both instructions and message catalogs; never mix with a bare Latin "exercise" on the same page or across an exercise's files. |
| lesson | पाठ | m | hi | |
| level | लेवल | m | hi | |
| course | कोर्स | m | hi | The whole Jiki course, e.g. "इस कोर्स में आपका इंटरप्रेटर Jiki है". Kept distinct from पाठ (lesson) and पाठ्यक्रम (curriculum). |
| curriculum | पाठ्यक्रम | m | hi | |
| syllabus | सिलेबस | m | hi | Kept distinct from पाठ्यक्रम (curriculum) per `global/terms.md`. |
| milestone | पड़ाव | m | hi | "A stop/stage on a journey." Medium confidence: flag for native-speaker review. |
| track / pathway | रास्ता | m | hi | |
| mentor / mentoring | मेंटर | m/f | hi | Agrees with the person. |
| tutorial | ट्यूटोरियल | m | hi | Kept distinct from पाठ (lesson). |
| solution (learner's submission) | हल | m | hi | |
| scenario | सिनेरियो | m | hi | Jiki-specific: a structured variant within an exercise. Low confidence: flag for native-speaker review. |
| challenge (an optional harder exercise) | चैलेंज | m | hi | **Confirmed by a native speaker.** Never चुनौती for this sense. **Masculine**, so the agreement changes with the word: "चैलेंज पूरा हुआ", never "चुनौती पूरी हुई". Same form in the plural (चैलेंज), oblique plural चैलेंजों, **confirmed by @suditi**: "if you are using plural form for all other English words in Devanagari, you might as well use the plural for challenge." The verb "to challenge yourself" is a different thing and is not this row; write खुद को परखना rather than mixing चुनौती back into a sentence about चैलेंज. |
| page (of the site or app) | पेज | m | hi | **Confirmed by a native speaker.** Never पृष्ठ, which carries the "page of a book" meaning. |
| bootcamp | बूटकैंप | m | hi | Treated close to a proper noun where it names Jiki's predecessor program. |
| canvas (graphics exercises) | कैनवास | m | hi | The drawing surface in creative-coding exercises. |
| feature (platform capability) | फीचर | m | hi | Kept distinct from फंक्शन; no collision risk in Hindi. सुविधा is a good alternative in warmer prose. |
| character (the on-screen figure) | पात्र | m | hi | The little figure the learner moves in an exercise. Never किरदार (see `guide.md` § "Register"). Kept distinct from अक्षर (a text character). |
| maze | भूलभुलैया | f | hi | Always spelled भूलभुलैया. Never "solved" (see the row below). |
| to solve a maze / get through a maze | भूलभुलैया से बाहर निकलना | - | hi | **Never भूलभुलैया हल करना.** Hindi does not say you solved a maze; you got out of it or found a way out. Applies to the title ("भूलभुलैया से बाहर निकलिए"), to the exercise description, and to every later sentence about the task. Transitive, where the learner gets the पात्र out: "पात्र को भूलभुलैया से बाहर निकालना". हल stays correct for a learner's solution to an exercise (see `solution` above). |

### Drawing & colour (creative-coding exercises)

The shapes, colour components and orientations the drawing exercises are built on. They are
already used consistently in shipped Hindi content (`rainbow`, and the shared `draw`
category catalog), and the rows exist so that consistency survives the next pass.

Most of this section has now been ruled on by native speakers. **saturation (संतृप्ति) is
the one row still unconfirmed**, and it is listed under "Open / low-confidence terms" below;
everything else here is settled.

**Every geometry term carries the English in bare brackets on first use** (आयत (rectangle)),
per `guide.md` § "Geometry terms carry an English gloss".

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| rectangle | आयत | m | hi | The school-geometry word. Glossed: "आयत (rectangle)". |
| circle | वृत्त | m | hi | **Confirmed by @suditi**: these are mathematical technical terms, and वृत्त is circle. **Never गोला for the `circle` function**, which she gives as "similar to round", not as circle. गोला stays the maze's green target ("हरे गोले तक"), which is a ball on screen and not a named shape. Glossed: "वृत्त (circle)". |
| triangle | त्रिभुज | m | hi | Glossed: "त्रिभुज (triangle)". |
| ellipse | दीर्घवृत्त | m | hi | Glossed: "दीर्घवृत्त (ellipse)". |
| line (drawn on the canvas) | रेखा | f | hi | "एक रेखा खींची". Kept distinct from a line of code, which is लाइन. |
| radius | त्रिज्या | f | hi | The school-geometry word. The `radius` parameter name itself stays in code font, as any identifier does. |
| hue | मूल रंग | m | hi | **Confirmed by @dazecodes**, who ruled रंगत wrong because it also means a person's complexion. **Masculine** (रंग), so the agreement moved with it: "मूल रंग 0 से 360 के बीच होना चाहिए", never "होनी चाहिए". प्राथमिक रंग is his equally acceptable alternative; we use मूल रंग throughout for consistency. |
| saturation | संतृप्ति | f | hi | **Unconfirmed.** Neither @dazecodes nor @suditi had a view on this one, so it is still a translation pass's draft, unlike the two rows either side of it. Already shipped in `rainbow` and the `draw` catalog. |
| lightness | हल्कापन | m | hi | **Confirmed by @dazecodes**, who ruled चमक wrong because it mainly means the shine of an object. **Masculine**: "हल्कापन 0 से 100 के बीच होना चाहिए". Kept distinct from मूल रंग and संतृप्ति; the three always appear together. |
| hex (colour) | हेक्स | - | hi | **Confirmed by @suditi**: "it is the name of the code so it should be fine." Devanagari, per `guide.md` § "Script convention": "हेक्स रंग", "हेक्स स्ट्रिंग". The `#` and the hex digits themselves are code and stay as they are. |
| horizontal / vertical | आड़ी रेखा / खड़ी रेखा | f | hi | **Confirmed by @dazecodes**: name the noun, so it is clear the adjective describes the line. Not क्षैतिज / ऊर्ध्वाधर, which are the textbook-formal pair. **Where the thing is not a line, keep the adjective and use that thing's own noun**: "खड़ी पट्टियाँ" (vertical stripes), "आड़ी त्रिज्या / खड़ी त्रिज्या" (horizontal / vertical radius), "आड़ी स्थिति" (horizontal position). Never a bare आड़ी / खड़ी with no noun after it. |

### Exercise scenario vocabulary

Real-world nouns that an exercise's story is built on, where the obvious rendering is wrong
or reads clunky in Hindi. Only terms a native speaker has ruled on belong here; ordinary
words an exercise happens to use do not.

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| canapé / canapés | कैनेपे | m | hi | **Same form singular and plural.** Never कैनापेज़ or any other English-style `-s`/`-ज़` plural; plurality is carried by the verb, the adjective or a quantifier, not by the noun. Gender unconfirmed: @suditi ruled on the form, not the gender. |
| guest list (the list of invited people) | गेस्ट लिस्ट | f | hi | Not मेहमानों की सूची. The real-world guest list of an event only. **Not the data structure**: an array or a code-level list is ऐरे (see "Values & data types"), whatever the English calls it. |

## Keep in English (Latin script)

These, and only these, stay in Latin script inside Hindi prose. Anything not listed here is
written in Devanagari, per `guide.md` § "Script convention".

| Term | Notes |
|------|-------|
| API | Where the source `<define>`s it, explain the concept in Hindi ("दो प्रोग्राम के आपस में बात करने का तरीका"), not just the acronym. |
| CLI (the concept) | Where the source `<define>`s it: "कमांड लिखकर कंप्यूटर से बात करने का तरीका". |
| CPU, RAM, USB, HTML, CSS, JSON | Acronyms pronounced as letters. |
| JavaScript, Python, React | Product/language names, never translated or transliterated. |
| Debug, Test, Code, Bug, Frontend, Backend | Only the literal UI label / technical token. The everyday noun "code" in prose is कोड, in Devanagari (see "Core decisions"). |
| Run Code and other on-screen button labels | Whatever the interface actually shows, verbatim. |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English, including inside prose. Translate only the surrounding explanation. |
| Jiki (character/brand name) | Kept in Latin script; see `guide.md` § "Style notes" for attaching Hindi postpositions. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language.

| English metaphor | Hindi rendering | Gender | Notes |
|-------------------|------------------|--------|-------|
| box (value container) | डिब्बा | m | |
| chain (array metaphor) | ज़ंजीर | f | Chain link / array element (in this metaphor) = कड़ी (f). |
| input slot | इनपुट स्लॉट | m | |
| return chute | आउटपुट की फिसलपट्टी | f | |
| machine (function metaphor) | मशीन | f | |
| shelves (storage) | अलमारी | f | |
| warehouse (Jiki's warehouse) | गोदाम | m | |
| crank (machine crank) | हैंडल | m | To crank it is "हैंडल घुमाना". |
| board / whiteboard | बोर्ड | m | **One object, one word.** Both the board the learner puts निर्देश on for Jiki to follow and a function's own board of notes are बोर्ड. Never use व्हाइटबोर्ड alongside it. |

## Open / low-confidence terms for native-speaker review

Flag these via `/action-forum-post` once real native-speaker feedback is available, per
`global/rules.md` § "When unsure."

- **value (वैल्यू vs मान)**: **confirmed by @suditi for the variable-value sense**
  ("the value of a variable"), which is the common case, so the row is settled for ordinary
  use. Still unruled for the other senses: an element's value inside an ऐरे, a रिटर्न
  वैल्यू, and a bare literal. मान is the school-maths alternative. Go back to her with those
  specific sentences rather than reopening the term.
- **The hybrid X-करना verbs (कॉल करना, असाइन करना, क्लिक करना)**: kept, but unconfirmed.
  @shubham-gupta-git ruled that रिटर्न करना is wrong and it has been replaced by लौटाना; he
  did not rule on these three, and no corpus evidence covers them. क्लिक करना has no Hindi
  alternative; कॉल करना and असाइन करना do (बुलाना, नियत करना / सौंपना) and are the two most
  likely to move next.
- **return value (रिटर्न वैल्यू)**: the borrowed noun is kept because technical nouns are
  borrowed, but it now sits next to a Hindi verb (लौटाना). Worth confirming the pair reads
  naturally together.
- **input / output (इनपुट / आउटपुट)**: kept as nouns, contrary to @shubham-gupta-git's
  proposal to drop them, because a `<define>` and the इनपुट स्लॉट metaphor both need a noun.
  His point is carried as a prose rule instead. Needs a native speaker to confirm the bare
  noun is acceptable in the noun-only positions.
- **saturation (संतृप्ति)**: the only row left unconfirmed in "Drawing & colour". @dazecodes
  ruled on the two terms either side of it (hue and lightness) and had no view on this one,
  and @suditi deferred to him on all three, so it is still a translation pass's own call. Ask
  him about this single term rather than reopening the trio.
- **string, class, method, backwards compatibility, streak**: gender unconfirmed.
- **scenario, encapsulation, pure function, backwards compatibility, milestone, streak,
  pitfall**: term choice low confidence.
- **The nukta convention** (`guide.md` § "Orthography"): **low confidence**, a house
  default rather than a rule. @suditi confirmed dropping it on सिर्फ but said the right
  answer depends on the word, so there is no blanket rule available to replace it with. The
  default stands for consistency only; every word other than सिर्फ is challengeable. Collect
  a per-word list from her over time rather than asking her to rule on the convention again.

---

## Decision log

### 2026-08-04: Chandrabindu restored, colour and orientation terms fixed, shapes settled (topic 482)

**Decided by:** @dazecodes and @suditi, on the pinned Hindi glossary thread (topic 482), with
@suditi's introduction on topic 481. **Status: native-confirmed**, and the first of these
**overrules a house default we set ourselves two days earlier**. **Terms affected:** the
nasalization rule in `guide.md` § Orthography, plus `hue`, `lightness`, `horizontal /
vertical`, `circle`, `hex (colour)` and the oblique plural in the `challenge` row.

#### 1. Chandrabindu, not anusvara. This overrules the 2026-08-02 house default.

@dazecodes: **"यहाँ looks better than यहां."** @suditi had already stood aside on exactly this
question, in the same thread: "As for teaching prose, I would defer to @dazecodes's judgement.
I haven't read a Hindi textbook in 13 years." So the one person with a view has ruled, and the
other has explicitly handed him the decision. **The 2026-08-02 entry below is superseded**; it
was our own call, recorded at the time as a medium-confidence house default in mild tension
with the textbook register the guide asks for, and it was that tension that turned out to be
the real signal.

His earlier post in the same thread gives the rule, and it is the standard shirorekha rule
rather than a preference:

> If a vowel stays below the shirorekha (like ा, ु, ू), the full chandrabindu (ँ) is written.
> [...] If a vowel symbol breaks above the shirorekha (like ि, ी, े, ै, ो, ौ), the crescent is
> dropped for space, and only a dot (ं) is written. [...] Female nouns like चिड़िया गुड़िया
> चूहिया are the singular forms. The chandrabindu is added to distinguish the plural forms of
> these from them (चिड़ियाँ गुड़ियाँ चूहियाँ).

That is what `guide.md` § Orthography now states, including his feminine-plural point, which
is what makes पट्टियाँ, आकृतियाँ, अलमारियाँ and स्थितियाँ chandrabindu forms.

**This was reversed word by word, not by a character swap**, because getting it wrong in the
new direction would be exactly as bad: हैं, में, मैं, नहीं, अंत, संख्या, फंक्शन and every
above-the-line form (करें, देखें, दोनों, बाईं) keep the anusvara and never had a chandrabindu
to lose. He also notes his caveat that the anusvara is more common in everyday writing; the
guide's register (textbook, tutorial, Hindi Wikipedia) is what decides it against that.

#### 2. hue: रंगत is wrong. मूल रंग.

@dazecodes: "रंगत can refer to the complexion of a person too, so you may either use मूल रंग /
प्राथमिक रंग which will mean base color / primary color, and would capture the meaning of hue
perfectly." Both of his options are acceptable; **मूल रंग is used everywhere** and प्राथमिक
रंग is recorded in the glossary row as the alternative, so a later pass does not read the
choice as open. The term is masculine where रंगत was feminine, so every agreement around it
moved with it ("मूल रंग ... होना चाहिए").

#### 3. lightness: चमक is wrong. हल्कापन.

@dazecodes: "चमक mainly means the shine of an object. To avoid ambiguity, हल्कापन can be used
for lightness." Masculine, so the same agreement change applies.

#### 4. saturation is still unruled, and stays marked as such.

Neither reviewer had a view. @suditi: "I've no idea about Hindi words for hue, saturation or
lightness", and she then deferred to @dazecodes, who ruled on the other two and said nothing
about this one. संतृप्ति therefore stays, still an unconfirmed draft, and it is now the only
unconfirmed row in the "Drawing & colour" section. Worth going back to him with that single
term rather than reopening the trio.

#### 5. horizontal / vertical: name the noun.

@dazecodes: "Better use आड़ी रेखा / खड़ी रेखा (horizontal lines / vertical lines) to keep
things clear that the preceding words are describing the lines." The row is now the two-word
pair. **Where the thing being described is not a line, his reason still applies but his noun
does not**: the rainbow's bars are पट्टियाँ, so "खड़ी पट्टियाँ" stays; an ellipse's radii are
"आड़ी त्रिज्या / खड़ी त्रिज्या"; and `rainbow`'s "क्षैतिज स्थिति" became "आड़ी स्थिति", which
also clears the one place shipped content contradicted the row. What the rule forbids is a
bare आड़ी or खड़ी with no noun after it.

#### 6. Shape names are right, and keep an English gloss.

@suditi: "All the terms you have used for shapes are mathematical technical terms. वृत्त is
like circle and गोला is similar to round." @dazecodes: "For better understanding you continue
applying the below format: आयत (rectangle) [...] as these mathematical terms are mainly used
in places where Hindi is used as a primary language, other regions of India would not be
familiar with it much."

His reason is regional, not pedagogical: a reader outside the Hindi-medium states knows the
shape and not its Hindi name. That makes it **a deliberate, closed exception** to the guide's
rule against glossing a term the English source did not tag, and `guide.md` states it as such
in its own subsection so it cannot be read as licence to gloss anything else.

#### 7. The `circle` contradiction is resolved: वृत्त, not गोला.

The 2026-08-03 entry logged that `concepts/variables/hi.md` glossed the `circle` function as
गोला while the `draw` catalog and `concepts/strings/hi.md` said वृत्त. @suditi settles it:
गोला is "similar to round", not circle, and the shape names are technical terms. The concept
page now reads "`circle` (वृत्त)". **गोला survives where it is not a shape name**: the maze's
green target ("हरे गोले तक") is a ball on screen, and गोल ब्रैकेट is the agreed name for a
round bracket. Neither was touched.

#### 8. हेक्स confirmed.

@suditi: "As for हेक्स, it is the name of the code so it should be fine." The row's
medium-confidence marker is removed and it comes out of the open-terms list; the worry that
the Devanagari would read worse next to `#` and Latin digits was ours, and she has answered
it.

#### 9. चैलेंजों confirmed.

@suditi, on the oblique plural: "Either is fine. But if you are using plural form for all
other English words in Devanagari, you might as well use the plural for challenge." We do
inflect the other borrowed nouns in the oblique plural (वेरिएबलों, फंक्शनों, एलिमेंटों), so
चैलेंजों stays, now as her call rather than ours.

### 2026-08-03: Drawing and colour vocabulary written down (unconfirmed), plus a comma-splice fix

**Decided by:** us, not a native speaker. **Status: unconfirmed drafts.** **Terms
affected:** `rectangle`, `circle`, `triangle`, `ellipse`, `line (drawn)`, `radius`, `hue`,
`saturation`, `lightness`, `hex (colour)`, `horizontal / vertical` (all new rows, in a new
"Drawing & colour" section of `glossary.md`).

#### Where the rows came from

They are not new choices. Every one of them is already the word shipped Hindi content uses,
in `rainbow` and in the shared `draw` category catalog, and every gender in the table is
confirmed by the agreement in a live string ("पहला आयत", "एक रेखा खींची", "रंगत ... होनी
चाहिए"). They arrived as a translation pass's proposed delta and were never written down,
so nothing stopped the next pass picking a different word for the same shape. That is the
only reason the rows exist.

**They are our judgement, and they are marked as such.** The section says so in its own
words, so that they cannot be mistaken for the rows a native speaker actually ruled on
(कैनेपे, गेस्ट लिस्ट, लौटाना, चैलेंज, पेज, एज केस, टेम्पलेट लिटरल). Forum feedback is the
review; these go up as drafts and wait for it.

#### Two places where shipped content contradicts the rows

Both were found while sanity-checking the rows against live text, and neither is fixed here.

- **`circle`: वृत्त or गोला.** The `draw` catalog and `concepts/strings/hi.md` both gloss
  `circle` as वृत्त; `concepts/variables/hi.md` glosses the same function as गोला. So the
  same drawing function has two names across two concept pages a learner reads days apart.
  The row picks वृत्त, because it matches त्रिभुज and दीर्घवृत्त and keeps the shape names
  in one register, and reserves गोला for the maze's green target, which is a ball rather
  than a named shape. **That leaves `concepts/variables/hi.md` disagreeing with the
  glossary**, and it needs a one-word fix on its next pass (or a reviewer telling us the
  row is wrong).
- **`horizontal`: आड़ी or क्षैतिज.** The `draw` catalog says "आड़ी त्रिज्या / खड़ी त्रिज्या"
  and `rainbow`'s catalog says "खड़ी पट्टियां", but `rainbow`'s own instruction prose says
  "`x` (क्षैतिज स्थिति)". One exercise, two registers, on the same screen. The row picks the
  everyday pair; `rainbow`'s instructions need the same fix.

#### The two rows a reviewer should be asked about first

वृत्त (against गोला) and हेक्स. The reasoning for each is in the glossary's
"Open / low-confidence terms" list rather than repeated here.

#### The comma splice in `maze-solve-basic`, and why the fix is not the old template

`scenarios.maze1.description` still opened with "आपका काम है, ...", the construction
`guide.md` § "Sentence structure" names as the rejected form, in content @suditi has
approved. The obvious repair was the rewrite she gave on topic 804, "आपका काम यह है कि ...",
which is what the reviewer note in `languages/hi/exercise/maze-solve-basic.md` tells a pass
to use.

It was not used, because @aadish-code-create (topic 1063) has since criticised exactly that
shape as still reading like English carried across. Taking one reviewer's repair of one
sentence and stamping it onto every later sentence is how a rewrite becomes a formula, and
a formula is the thing he is objecting to.

What was written instead is "आपको अपने पात्र को भूलभुलैया में से निकालकर हरे रंग के लक्ष्य
वाले खाने तक पहुंचाना है।" Hindi states a task the learner owes with the obligation
construction (आपको ... करना है), not by naming the task with a noun and then attaching it
with a copula. The English's "Your job is to ..." is what forced the copula to the front and
left the comma holding two clauses together; dropping the noun framing removes the second
clause altogether, so no connective is needed and nothing has to be announced. The rest of
the sentence is byte-identical to the approved wording.

The hint `whatAmIMoving.answer` had the same fault in its other common shape: one sentence
carrying an English appositive ("उस छोटे पात्र को, जो ... , ... ले जाना है, और ..."). It is
now a fronted correlative (जो ... , उसे ...), which is how Hindi builds a relative clause,
plus a second sentence for the avoidance. That change is ours, on the guide's "split, don't
carry across" rule, and no reviewer asked for it.

### 2026-08-03: The imperative form settled (-इए vs -एं), plus challenge and page (forum topic 999)

**Decided by:** @suditi (post 5) and @dazecodes (post 6) of forum topic 999 ("[Hindi] First
website copy translated"), both native speakers, answering a question we put to them.
**Status: native-speaker confirmed**, on two independent readings.

**Terms affected:** `challenge` (new row), `page` (new row).

#### Why it was asked

`guide.md` said nothing at all about which आप-form imperative to use. That silence is how a
website-copy pass came to flip several hundred app strings wholesale from -इए (कीजिए,
देखिए, आज़माइए) to -एं (करें, देखें, आज़माएं) with nothing in the guidance to stop it, while
the lesson pages stayed on -इए. Both forms are आप-form and both are correct, so the question
was never right-vs-wrong; it was that one product was spelling the same act two ways.

#### What they said

@suditi:

> "It's okay to use the second form that you've used in the app now. You can use the second
> form for most cases except for the problem name. According to me the first form is politer
> than the second. But it feels weird for the button names or short texts to use the first
> form and ruder to use the second form for problem name."

@dazecodes, agreeing and refining:

> "Yes, I feel too that the first form is much more polite and the second one feels
> polite-direct. I think for short phrases of course the second form wins, but say you are
> requesting something than the first form should take over. फिर से कोशिश करें would be
> totally fine if it means to say 'Try Again' when our code is not working."

#### The rule derived, and where the two framings differ

The rule is in `guide.md` § Formality: -इए for teaching prose, for anything phrased as a
request, and for titles; -एं for the interface's own short labels and for the short messages
the app shows in reply to something the learner just did.

**Their two framings are not identical, and the difference is worth recording.** @suditi
draws the line at *title vs everything else* ("most cases" get -एं, the problem name does
not). @dazecodes draws it at *short label vs request* (short phrases get -एं, requests get
-इए). On every case Jiki actually has they agree, because our titles are also the places we
ask something of the learner, and our -एं strings are all buttons, menu items and reactions.
The guide states both halves rather than picking one framing, and resolves the one place they
could disagree (a short piece of teaching text) in favour of @dazecodes' test, since a hint
that asks something of the learner is a request whatever its length.

**"Problem name" is read as the exercise title**, and by extension the task, scenario and
level titles, which are the same kind of object. That reading is an inference: the question
she was answering did not mention titles, so she introduced the case herself, and Jiki has no
other screen furniture that "problem name" could plausibly mean. If she meant something
narrower, the cost of the wider reading is politeness we did not need, not rudeness.

#### The two terms

Both are **native-speaker confirmed and therefore protected**, per "Glossary writes are
additive" in `global/workflow.md`.

- **`challenge` (an optional harder exercise) → चैलेंज.** Her words: "challenge: चैलेंज. It
  is common enough." This is a **revert**: the website-copy pass had changed चैलेंज to
  चुनौती across 33 keys on its own initiative. The revert is not a word swap, because चुनौती
  is feminine and चैलेंज is masculine, so every agreeing word around it moved too ("चुनौती
  पूरी हुई!" → "चैलेंज पूरा हुआ!", "हाल की चुनौतियां" → "हाल के चैलेंज"). One string carried
  both senses at once ("challenge yourself with Premium Challenges"), which would have read
  as चैलेंज and चुनौती in one sentence; the verb sense was rewritten to खुद को परखें so the
  noun row is not contradicted by the sentence around it.
- **`page` → पेज.** Her words: "page: पेज. Same for this. Plus पृष्ठ gives the pages of a
  book meaning." The catalog was already पेज throughout, so nothing changed in the text.
  The row exists because that spelling was our own guess until now and would have kept
  drifting; it is now settled and protected.

#### An independent second verdict on the engine, on a different thread

@dazecodes has also backed @suditi's translation-quality judgement once before: on **forum
topic 893** ("[Hindi Review] Progress?"), post 7, "I agree, the third is the best of the
three", agreeing with her post 5 on the same three candidates. **That is not a second verdict
on the DeepSeek choice**, which was made on topic 925 from a different, blind A/B/C sample
(see the 2026-08-02 entry below); topic 893 was an earlier, unlabelled three-way comparison
of ungoverned model output. What it is worth is that our two most active Hindi reviewers
independently pick the same Hindi out of a set, which is the assumption the single-reviewer
engine decision rests on. Recorded here because it is the kind of corroboration that is easy
to lose, and easy to overstate.

### 2026-08-02: Chandrabindu vs anusvara settled as anusvara (house default, medium confidence)

> **SUPERSEDED on 2026-08-04.** @dazecodes ruled the other way ("यहाँ looks better than यहां")
> and @suditi deferred to him, so the chandrabindu is now the rule. See the 2026-08-04 entry
> at the top of this file. This entry is kept for the record of what we decided and why.

**Decided by:** us, not a native speaker. **Status: house default, unconfirmed. Needs a
native-speaker ruling** (question drafted at the end of this entry).

**The problem.** The six Hindi items translated on 2026-08-02 were internally inconsistent on
nasalization *within one batch*: the prose wrote हूँ, यहाँ, ढूँढने, पहुँचनी with the
chandrabindu while the message catalogs wrote करूं, यहां, पहुंच with the anusvara. Both are
legitimate Hindi, which is exactly why it had to be settled: this is the same failure mode the
nukta rule already exists to prevent, two pages spelling one word two ways.

**The evidence.** Comparing only the *competing* forms (not raw ं counts, which are dominated
by genuine nasal consonants such as हैं and में and are not an alternative to anything), the
anusvara already won across the Hindi corpus: यहां 12 / यहाँ 3, जांच 10 / जाँच 1, पहुंच 12 /
पहुँच 1, जाएं 8 / जाएँ 1, संख्याएं 6 / संख्याएँ 1, बाएं 8 and दाएं 4 with no chandrabindu
form at all. `guide.md`'s own prose was already anusvara throughout. Chandrabindu occurrences
across all Hindi content totalled 26 against several hundred anusvara ones.

**The decision.** Anusvara everywhere, except where the chandrabindu is lexically required.
26 occurrences were changed and none of them was a minimal pair: हूँ, यहाँ, ऊँचाई, कहूँ, जाँच,
पाँच, जहाँ, ढूँढने, जाएँ, अलमारियाँ, बताएँ, ऊँट, कहाँ, संख्याएँ, पहुँचनी, शुभकामनाएँ, बनाएँ.
**No word in the current corpus needed the chandrabindu kept**, so the exception in the guide
is written for future pages rather than applied to any existing one. The rule is stated in
`guide.md` § Orthography alongside the nukta and danda rules.

**Confidence: medium, and lower than the evidence above makes it look.** The honest caveat is
that this is the *common-practice* spelling, not the *prescriptive* one. Standard prescriptive
Hindi (the Kendriya Hindi Nideshalaya convention that NCERT textbooks and Hindi Wikipedia
follow) uses the chandrabindu for genuine vowel nasalization and reserves the anusvara for a
nasal consonant, replacing ँ with ं only where a vowel sign already occupies the space above
the line (which is why मैं is spelled with ं under either convention). Our guide tells the
translator to model the prose on "a good Hindi tutorial text, a science textbook, or Hindi
Wikipedia", and those sources lean prescriptive, so the house rule is in mild tension with the
register the guide asks for. It was still chosen, because everyday digital Hindi is
overwhelmingly anusvara, both forms read fine to the reader, and consistency is the thing that
actually breaks a page. **The corpus is the weaker half of the argument**: DeepSeek produced
both halves of it, so the anusvara majority is partly a model habit rather than an
independent fact about Hindi.

**Draft question for the pinned Hindi glossary thread (topic 482), for @suditi,
@shubham-gupta-git and @dazecodes:**

> One orthography question we have decided ourselves and would like checked. Our Hindi pages
> were inconsistent about nasalization: some wrote हूँ, यहाँ, पहुँचना with the chandrabindu
> and others wrote हूं, यहां, पहुंचना with the anusvara, sometimes on neighbouring pages. We
> have standardised on the anusvara (हूं, यहां, जांच, पांच, ढूंढना, संख्याएं), keeping the
> chandrabindu only where it changes the word (हँसना vs हंस).
>
> Two things we would like your view on. First, is anusvara-everywhere the right call for
> instructional prose aimed at Hindi-medium learners, or does it read as careless next to a
> textbook, which would spell these with the chandrabindu? Second, if you would prefer the
> chandrabindu, are there words where you would still write the anusvara, so we can write the
> rule as something a translator can apply without judging each word?
>
> Either answer is fine by us. What we cannot leave is two pages spelling the same word two
> ways.

### 2026-08-02: Two cleanups behind rules already agreed

**Decided by:** us. Neither changes a rule; both make an existing rule reach the text it
already governed.

**`रिटर्न करना` swept out of shipped files.** The `to return` row changed to लौटाना mid-batch
(entry below), so two already-shipped files still carried the old hybrid verb. Both were
rewritten rather than word-swapped, because the replacement is a different verb and needs its
own agreement: the level title "Functions That Return Things" became "चीज़ें लौटाने वाले
फंक्शन" (was "रिटर्न करने वाले फ़ंक्शन"), and the test-result string became "[आपके फंक्शन ने
कुछ भी नहीं लौटाया]" (was "...कुछ भी रिटर्न नहीं किया"). A sweep of all Hindi content found no
other रिटर्न used as a verb. `रिटर्न वैल्यू` as a noun is untouched, per the part-of-speech
rule.

**The never-use table now bans roots, not spellings.** It listed आख़िर but not आख़िरी, so the
adjective slipped past a rule that plainly meant to catch it. `guide.md` § Register now says
each row bans the root and everything built on it, with the derived forms named as examples
rather than enumerated as new rows. Two rows also gained the base form they were missing
(ताक़त behind ताक़तवर, असल behind असली), since the table cannot ban a derivative while
leaving its root unlisted.

### 2026-08-02: Provenance and rationale moved out of `guide.md` (second sweep)

**Decided by:** iHiD (guidance-lane audit of `languages/hi/guide.md`).

`guide.md` is loaded into the prompt for every Hindi item in every pass, so it holds
instructions only. It had reacquired provenance since the 2026-08-01 sweep below: reviewer
attributions, quoted forum prose, and "ours vs hers" framing on the worked examples.
**No rule changed. Every instruction survives verbatim in force**; only the record of who
said it, where, and why moved here. Provenance in an instruction file also invites the model
to weigh who said a thing rather than simply follow the rule, and this guide has already
demonstrated (2026-08-01 entry below) that its examples and framing steer output harder than
its rules do.

The underlying decisions are already logged in the topic 804 and topic 925 entries below;
this entry records the exact text that was removed, so nothing is lost.

**Orthography, nukta.** The guide carried @suditi's verdict in full, quoted from post 3/4 of
forum topic 804, ahead of the rule: "@suditi's verdict is that it is decided per word, not by
a blanket policy: 'Nuktas are complicated. For some words, you can drop it because they are
so commonly used that they know what it means even when you don't add the nukta. I guess it's
fine if you drop it for सिर्फ, but for the rest it would depend on the word.'" The
sub-bullet "**Confirmed by a native speaker:** सिर्फ, with no nukta" is now the imperative
"**Write सिर्फ with no nukta.** Settled; do not re-decide it per page." The confidence marker
survives as a rule qualifier ("a **low-confidence house default**"), and the requirement stays
that सिर्फ is the only settled word on the list and that anything looking wrong without its
nukta is reported rather than silently spelled either way. Two clauses of pure rationale were
dropped from the guide and are recorded here instead: that heavy nukta spelling is one of the
signals a page has drifted towards Urdu (evidence in the 2026-08-01 entry below), and that
the confirmed-word list is meant to grow by collecting words from her over time rather than
by asking her to rule on the convention again.

**Grammar, borrowed plurals.** "and @suditi ruled that कैनेपे is likewise its own plural"
became "and कैनेपे is likewise its own plural". Her ruling and her wording are in the topic
925 entry below, and the row itself is protected there. The medium-confidence marker and the
scope caveat (this is a rule about not inventing plurals, not a claim that no Hindi noun
inflects) both stay in the guide, as qualifiers on the rule.

**Sentence structure.** The section opened by quoting her report on the retranslated maze
exercise: "@suditi's report on the retranslated maze exercise was exactly that: 'All the
words are correct but I would reorder them or add some words to make these sentences easier
to read. I see this problem only for the longer and complex sentences.'" That is replaced by
the instruction it implies, "Reorder the words, and add the ones Hindi needs, so that the
sentence is easy to read", with the scope ("only for the longer and complex sentences")
already carried by the next paragraph's "Apply the rules below to every sentence long enough
to carry a subordinate clause, an aside, or a comma."

**The two worked examples are kept in full**, both pairs, both explanatory paragraphs. Only
their labels changed: "Ours:" / "Hers:" became "Do not write:" / "Write:", and "cut exactly
at our comma" became "cut exactly at the comma". The Hindi in both pairs is byte-identical
to what was there before, including the standard spellings कि and भूलभुलैया that were
deliberately kept over her की and भुलभुलिया (see the topic 804 entry below). **That decision
still stands and is not reopened by this edit.**

### 2026-08-02: `return` stops being a hybrid verb; `input`/`output` stay nouns (forum topic 482)

**Decided by:** @shubham-gupta-git, a native speaker and a new third Hindi voice, in post 5
of forum topic 482 (the pinned glossary thread). **Terms affected:** `to return (a value)`
(changed), `return value`, `input (to a function)`, `output` (all three kept, with new
Notes). **Status: native-speaker proposed, one voice.** @suditi and @dazecodes have not
weighed in; every row here stays challengeable and none of them is protected.

He proposed three changes:

| Term | Was | His proposal | His reasoning |
|------|-----|--------------|---------------|
| to return (a value) | रिटर्न करना | वापस देना / वापस करना / वापस लौटना / (just) लौटना | "This is better and pure Hindi for purpose, it is same as saying 'the function gives back …this…' and return translates to वापस or लौटना in Hindi directly." |
| input (to a function) | इनपुट | लेना / लेता / लेगा | "there is no word for input in Hindi but rather inferred based on context like 'sum function takes/needs two numbers'" |
| output | आउटपुट | देना / देता / देगा | "there is no word for output as well in Hindi but in rather inferred based on context like 'sum function gives/returns sum of two numbers'" |

#### `to return`: रिटर्न करना → लौटाना. Applied.

**This is the first native-speaker verdict on the hybrid-verb whitelist, and it agrees with
our own evidence.** The corpus study recorded in the 2026-08-01 entry below found the
Hindi/borrowed split runs by part of speech: technical *nouns* are borrowed (फंक्शन 237 /
फलन 0; वेरिएबल 280 / चर 0; एरर 191 / त्रुटि 1) but technical *verbs* stay Hindi
(निष्पादित 195 / एक्जीक्यूट 59; प्रदर्शित 219 / डिस्प्ले 7; घोषित 100 / डिक्लेयर 2). The
guide then contradicted itself by whitelisting "universal hybrids (रिटर्न/असाइन/कॉल करना)"
as an exception, on no evidence: the only justification the log ever carried for रिटर्न करना
was the Term rationale line "Hybrid verb; extremely standard in real usage", written at
bootstrap by an agent. So the row was an unconfirmed draft resting on an assertion, and a
native speaker has now contradicted the assertion.

The row **was not protected**. @suditi's 2026-07-19 "Rest of the glossary seems okay"
covered a snapshot that contained रिटर्न करना, but the 2026-07-19 entry below already
records, deliberately, that a blanket comment confirms no individual row.

**The form is ours, not his.** He offered four alternatives, and three of them do not work
as written for this sense:

- **लौटना** and **वापस लौटना** are intransitive ("to come back"), so a फंक्शन cannot लौटना
  a वैल्यू; वापस लौटना is also redundant. The transitive causative is **लौटाना** ("to give
  something back"), which is what his intent requires and what Hindi technical prose
  actually uses for this ("यह फंक्शन एक मान लौटाता है").
- **वापस करना** leans towards giving back something borrowed.
- **वापस देना** is good and is exactly his "gives back" gloss, so it is kept in the row's
  Notes as the warmer alternative, especially where the prose is on the machine metaphor
  (Jiki's आउटपुट की फिसलपट्टी).

This is the same treatment @suditi's rewrites got on 2026-08-02 below: take the native
speaker's judgement and keep standard grammar and orthography. **Confidence: high on the
direction** (drop the hybrid), **medium on the exact form** (लौटाना over वापस देना), which
is a question for the thread.

`return value` → रिटर्न वैल्यू is **unchanged**: it is a noun, and the part-of-speech rule
borrows nouns. That leaves a borrowed noun sitting beside a Hindi verb, which is exactly
what the corpus shows real Hindi programming prose doing, but it is worth a native speaker
confirming the pair. Its Notes now ask for the verb phrase where the sentence allows it.

#### The whitelist narrows, it does not go

`guide.md` § "Register" now states the hybrid rule as a last resort with a test (use the
ordinary Hindi verb where one carries the action) rather than as a list of blessed words,
and names लौटाना as the worked case. **कॉल करना, असाइन करना and क्लिक करना are kept**, and
flagged in the glossary's open-questions list:

- **क्लिक करना** is the strongest of the three: Hindi has no ordinary verb for clicking a
  mouse, so there is nothing to prefer over it.
- **कॉल करना** and **असाइन करना** do have Hindi candidates (बुलाना; नियत करना / सौंपना), so
  they are the two most likely to move next. He did not rule on them, no corpus figure
  covers them, and changing them off the back of a verdict about a different verb would be
  inventing a native-speaker opinion. They stay until someone with the language says
  otherwise.

#### `input` / `output`: rows kept, his point taken as a prose rule

**This is a different claim from the `return` one**, and treating the three as one change
would be a mistake. He is not proposing a better word for a noun; he is saying the noun
should not be there at all, and the sentence should be built around a verb. Read literally
that would delete two rows.

We have not done that, for three reasons:

1. **The rule he is describing is real, and it is about prose, not about the lexicon.**
   English states relationships with abstract nouns; Hindi states them with verbs. "फंक्शन
   दो संख्याएं लेता है" is better Hindi than "फंक्शन का इनपुट दो संख्याएं हैं", and his own
   examples are all full sentences, not term mappings. That belongs in `guide.md`, and it
   is now a bullet in § "Sentence structure" alongside the other four rules from @suditi
   that say the same kind of thing.
2. **लेना and देना are not translations of "input" and "output".** They are "to take" and
   "to give". Written into a glossary as the target for those two terms, they would say that
   an इनपुट स्लॉट is a "take slot", which is not what he means.
3. **Some positions need a noun, and Jiki has them.** A `<define>` attaches to a term, and
   the `input slot` / `return chute` metaphors are noun phrases. The `function` row's own
   gloss ("एक ऐसी मशीन जैसा कोड जो इनपुट लेकर आउटपुट देता है") already uses the nouns with
   his verbs, which is the shape we want.

So both rows stay, their Notes now say to build the sentence around the verb wherever the
prose allows and to use the bare noun only where a noun is unavoidable, and the
noun-in-noun-position question is listed as open for a native speaker. **Confidence: medium**
on keeping the rows; this is the part of his post most worth going back to him about.

### 2026-08-02: Translation engine changed to DeepSeek, and two terms ruled on (forum topic 925)

**Decided by:** @suditi, a native speaker, in post 5 of forum topic 925 ("[Hindi Review]
Alternative translation model"), reading a blind three-way comparison. **Status:
native-speaker confirmed**, for the engine and for both terms.

**Terms affected:** `canapé / canapés` (new row), `guest list` (new row).

#### The engine: DeepSeek, not fable

A blind A/B/C comparison was posted using an excerpt from the `bouncer-dress-code` exercise,
chosen deliberately because it is unrelated to the maze-based worked examples in `guide.md`,
so no engine could copy an answer out of its own context. All three engines were given
byte-identical governance context. The mapping, not disclosed on the thread:

- **A = Gemini** (`gemini-3.1-pro-preview`)
- **B = fable** (the subagent path, the incumbent)
- **C = DeepSeek** (`deepseek-v4-pro`)

Her verdict:

> "Both models A and B still follow the English sentence structure, which doesn't always make
> sense in Hindi.
> Model C has the best sentence structure. Plus, the sentences are easy to read, sound natural
> and are concise. This a really good model for translation to Hindi. This might be as good as
> it gets."

`hi`'s `translation_engine` in `tracking.json` is therefore `deepseek` /
`deepseek-v4-pro`.

**This supersedes the 2026-08-01 entry below** ("Confirmed translation engine: fable"), where
an unnamed alternative model was rated worse than fable on topic 925 and the incumbent was
kept. **The two results are not in conflict.** That test ran before the 2026-08-01 guide and
glossary rewrite, so it compared engines working from a guide we have since established was
broken (it prescribed the Urdu-leaning register, see that entry). This test ran on the fixed
guide. What changed is the instructions, not her opinion.

**Objective corroboration, worth keeping.** Gemini reproduced verbatim the exact comma-splice
construction that `guide.md` § "Sentence structure (critical)" names as the rejected form,
"आपका काम है, ...", on content unrelated to the worked example that rule is drawn from, with
that rule sitting in its prompt. DeepSeek and fable both used the corrected "आपका काम यह है
कि". That is a direct rule violation rather than a matter of taste, and it is the hardest
signal in the test.

**Caveat on how much B-vs-C is worth.** The two API engines (A and C) ran at temperature 0.3;
the fable version (B) came from a worker subagent, which has no temperature control. So A-vs-C
is a like-for-like comparison and B-vs-C is a softer one: some of the gap between fable and
DeepSeek may be sampling rather than model. Her verdict on C is unaffected either way, since
it is about what C produced.

#### The two terms

Both are **native-speaker confirmed and therefore protected**, per "Glossary writes are
additive" in `global/workflow.md`: neither changes without fresh agreement from a native
speaker, raised where it was settled.

They matter more than a usual pair of rows because **DeepSeek got both of them wrong in the
sample it won on** (it wrote कैनापेज़ and मेहमानों की सूची). The rows exist to stop the
retranslation reproducing the winning engine's own errors.

- **`canapé / canapés` → कैनेपे.** Her words: "canapés - Plural form in Hindi is not the same
  as it is in English. कैनेपे would be the best as I think it is its own plural in Hindi." So
  the noun does not take an English-style plural in any form (not कैनापेज़, not कैनेपेस);
  singular and plural are the same word and plurality is carried by the verb, an adjective or
  a quantifier. Gender is **not** confirmed: she ruled on the form only, and the row says so.
- **`guest list` → गेस्ट लिस्ट**, not मेहमानों की सूची. Her words: "guest list - गेस्ट लिस्ट
  is a common phrase doesn't feel as clunky as मेहमानों की सूची." The row is scoped to the
  real-world sense (the list of invited people at an event) so it cannot collide with the
  existing `array / list` → ऐरे row, which is the data-structure sense; the existing row is
  untouched.

Her plural point is stated once, generally, as a bullet in `guide.md` § "Grammar": do not
transliterate an English plural onto a borrowed noun, because many are their own plural
(निर्देश already behaved this way in the glossary). It is recorded at **medium confidence**
and deliberately does not claim that Hindi nouns never inflect. Both rows sit in a new
"Exercise scenario vocabulary" section of the glossary, for real-world nouns an exercise's
story is built on.

### 2026-08-02: @suditi answers the open questions (forum topic 804)

**Decided by:** @suditi, a native speaker, in posts 3 and 4 of forum topic 804, after
reading the retranslated `maze-solve-basic`. **Status: native-speaker confirmed**, except
`value`, which she declined to rule on.

**The register rewrite worked.** Her verdict on the retranslation was "This version is
better". The 2026-08-01 rewrite below (the Urdu-in-Devanagari defect) is therefore closed as
a diagnosis: the lexical and script policy it put in place is confirmed by the person who
reported the problem. What follows is what remains on top of it.

#### The new axis: sentence structure

**This is the highest-value item on this page**, because it applies to every long sentence in
every Hindi page and no amount of correct vocabulary fixes it. Her words: "I still see some
sentence structural problems. All the words are correct but I would reorder them or add some
words to make these sentences easier to read. I see this problem only for the longer and
complex sentences."

She gave two before/after pairs, both from `maze-solve-basic`. Read together they say four
things, and those four are now `guide.md` § "Sentence structure", a new section, with both
pairs as its worked examples:

1. Split a long English sentence into two or more Hindi sentences; the English comma is
   usually the cut. Her second pair splits exactly at our comma.
2. Use an explicit connective ("आपका काम यह है कि ...") instead of a comma splice
   ("आपका काम है, ...").
3. Repeat the noun where English pronominalises: "वो पात्र उन निर्देशों का पालन करता है"
   for our "वह उनका पालन करे".
4. Add the words that make the situation concrete rather than tracking the English
   one-to-one. She added "में फंसे हुए" (stuck in the maze) and "बटन" after **Run Code**.

This is guidance about how to write, not a term mapping, so nothing went to `glossary.md`.
The two pairs are also recorded as binding reviewer notes in
`languages/hi/exercise/maze-solve-basic.md`.

**Two spellings in her rewrites are not to be propagated.** She wrote **की** where standard
Hindi wants **कि** (the complementiser: "यह है कि"), and **भुलभुलिया** where the standard
spelling is **भूलभुलैया**. We have taken her structure and kept standard orthography in the
guide, the glossary and the reviewer notes. **This is deliberate. Do not "correct" our
spellings back to hers on the grounds that they came from a native speaker**: she was
demonstrating sentence shape in a forum reply, not proposing an orthography.

#### Solving a maze is the wrong verb in Hindi

**New glossary row**, in "Platform & curriculum vocabulary" next to `maze`: `to solve a maze
/ get through a maze` → **भूलभुलैया से बाहर निकलना**, never भूलभुलैया हल करना. Her words:
"the exercise name would be better translated as 'भुलभुलिया से बाहर निकलिए'. In Hindi, you
don't say that you solved the maze it's more like you escaped/found a way out of it."

This is a semantic error, not a register one, which is why it survived the rewrite: हल करना
is perfectly good Hindi and perfectly wrong here. It has a row rather than only a guide
mention because it will otherwise regress on every future maze pass. It propagates to the
title, the exercise description, and any body sentence that would say "हल करना" about the
भूलभुलैया. `solution (learner's submission)` → हल is unaffected; that is a different sense.

**Not fixed here, flagged for their next pass:** `maze-automated-solve` ("Solve the Maze
Programmatically", no `hi` translation yet), and the shared maze category catalog
(`curriculum/src/exercise-categories/maze/locales/hi/translation.json`), whose three
`describers` still say किरदार where the glossary says पात्र. That catalog is shared by all
six maze exercises, so it is worth fixing before any of them is retranslated.

#### Register: the test is commonness, not etymology

Our "never write" table was too broad. It banned किरदार alongside मक़सद, माहौल and वाक़िफ़,
and she names किरदार as an example of an acceptable word: "unless the loan words or Urdu
words is common like 'किरदार', you should try and stick to Hindi words. Here, though I think
किरदार can be used." Her full framing: "Hindi is one language but there are many dialects and
loan words in it. Some words that are frequently used in one region might not be in another."

So the rule is not about where a word came from, it is about how widely it is used. Restated
in `guide.md` § "Register" as: default to the plain Hindi word; a Perso-Arabic word is
acceptable where it is genuinely common across the whole Hindi-speaking area; the ones to
avoid are the *marked* ones. The three she actually changed in her own rewrite (मक़सद,
माहौल, वाक़िफ़) are the anchor for what "marked" means, and they appear zero times in the
855k-character written-Hindi corpus cited below.

**किरदार comes off the "never write" table**, and the `character` row's note drops the words
"Urdu-leaning". **The agreed term is still पात्र**, unchanged: it is already shipped, it is
unambiguous against अक्षर, and she was rating किरदार rather than asking us to switch to it.
This is a general principle about vocabulary, so it lives in the guide, not in a glossary
row.

#### Answers to the other open questions

- **exercise → अभ्यास. Confirmed, no longer an open question.** She had used a bare Latin
  "exercise" herself only because our original translation did: "if you are keeping
  everything in Hindi it would make more sense to use it than 'exercise'". The row is
  unchanged; the "Open question, see below" note and the open-questions entry are removed.
- **instruction → निर्देश. Confirmed** ("निर्देश here is fine"). Open-questions entry
  removed.
- **The danda (।). Confirmed** ("Yes, please use danda (।) instead of full stop (.)"). The
  rule already lived in `guide.md` § "Orthography" and needed no change; the open-questions
  entry is removed.
- **value → वैल्यू. Confirmed for the variable-value sense only**, which was our weakest
  call and is now settled where it matters most: "if you are using it for 'the value of a
  variable' then its fine." The qualifier is hers and is kept: she has not ruled on the other
  senses (an element's value in an ऐरे, a रिटर्न वैल्यू, a literal), and मान remains the
  school-maths alternative. The row is unchanged; the open-questions entry is narrowed rather
  than removed.
- **Nuktas: our blanket ज़-only rule was too crude.** "Nuktas are complicated. For some
  words, you can drop it because they are so commonly used that they know what it means even
  when you don't add the nukta. I guess it's fine if you drop it for सिर्फ, but for the rest
  it would depend on the word." So it is per word, and no blanket rule is available to
  replace ours with. `guide.md` § "Orthography" now states it honestly: a **low-confidence
  house default** (keep it on ज़, drop it elsewhere) chosen so two pages do not spell the
  same word two ways, plus a confirmed list that currently holds one word, सिर्फ. Recorded
  confidence lowered from medium. The list is meant to grow: collect words from her over
  time rather than asking her to rule on the convention again.

### 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`; they need agreement (ideally a native speaker) before
landing there. Highest-value to settle first (recur across the whole app):

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (platform content type) | चैलेंज | | medium |
| concept (platform content type) | कॉन्सेप्ट | | medium |
| Premium (tier name) | Latin in 20 keys, प्रीमियम in 4 (`codingExercise.*`) | **Cross-chunk inconsistency, needs a script-policy ruling.** Recommend Latin everywhere, treating it as a brand/tier name (matches the majority of keys). | — |
| Deep Dive (feature name) | Latin in 2 keys, डीप डाइव in 3 | Same cross-chunk inconsistency as Premium; recommend Latin everywhere, treating tier/feature names (Premium, Deep Dive, Learn to Build, Projects) as brand names. | — |
| hint | संकेत | | medium |
| subscription | सब्सक्रिप्शन | | medium |
| journey | यात्रा | | medium |
| skills | कौशल | | medium |
| certificate | सर्टिफिकेट | | medium |
| badge | बैज | Distinct from _achievement_ → उपलब्धि. | medium |

Lower-confidence rows, flagged by the workers themselves:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| testimonials | लोगों की राय | Paraphrase; प्रशंसापत्र felt archaic. | low |
| scrubber | स्क्रबर | | low |
| task | टास्क | | low |
| pass / fail / pending (test status) | पास / फेल / बाकी | | low |
| blank | खाली जगह | | low |

**Open question, not a row:** the guide caps hybrid X-करना verbs at an agreed list, but this
pass needed one for `unlock`, `subscribe`, `debug` and `manage`. That list needs extending,
or an explicit native-word ruling for each.

`challenge` (चैलेंज, 33 keys) was the one term the two chunk workers used consistently;
`Premium` and `Deep Dive` were not (see above), a real cost of the pass running as three
separate chunk workers rather than one.

### 2026-08-01: Guide and glossary rewritten: the shipped Hindi was Urdu in Devanagari

**Decided by:** iHiD, after native-speaker review (@suditi, forum topic 893) and a corpus
study. **Terms affected:** the script policy for every technical noun, plus the rows listed
below. **Status: unconfirmed draft**, except the two rows that already carried native
sign-off (`template literal`, `edge case`), which are unchanged in wording.

**The defect.** @suditi reported that our guided Hindi output was worse than what the same
model produces with no guidance at all, and rewrote the first two lines of
`maze-solve-basic`. The root cause is not the model. Compare what we shipped for Hindi with
what we shipped for Urdu, same file:

- hi: इस exercise का मक़सद है कि आप सीखने के इस माहौल से वाक़िफ़ हो जाएं.
- ur: اس مشق کا مقصد یہ ہے کہ آپ سیکھنے کے اس ماحول سے واقف ہو جائیں۔

मक़सद=مقصد, माहौल=ماحول, वाक़िफ़=واقف, and the sentence is word-for-word identical across the
two languages. Also किरदार=کردار, तरफ़=طرف, अमल=عمل, वक़्त=وقت, आख़िर=آخر. **The Hindi we
shipped was effectively the Urdu translation written in Devanagari.** It was worse than the
Urdu in one respect: where Urdu used its own word ہدایات, Hindi wrote इंस्ट्रक्शन, although
Hindi has निर्देश.

**The mechanism.** The old `guide.md` told the model to "write in the same register a
popular Hindi coding YouTuber would use". In Hindi, the informal/spoken register *is* the
Hindustani, Urdu-leaning one, so that single instruction walked the output into Urdu's
lexicon. `hi` was the only one of 32 guides naming a YouTuber register. Its evidence base
(the entry below, "Loanword-vs-Sanskritized research basis") did not survive contact with
evidence: CodeWithHarry's *written* notes are in English, not Hindi, so the sources cited
for a *written* register were not written Hindi at all. **Do not re-derive that policy.**

Compounding it, every pass loaded roughly 600 Devanagari tokens of demonstration prose from
the guide and glossary, all of it written *in* the rejected register ("यह सोचने का एक
ताक़तवर तरीका है", "फ्री में ट्राई करें", "करते वक़्त दी गई असली value"). Examples anchor
harder than rules, which is why the guide lost to no guide at all. Every Hindi example in
the guide now exemplifies the register the guide prescribes; keep it that way.

**The evidence for the replacement policy.** A corpus study of 90 IIT Bombay Spoken Tutorial
Hindi programming scripts (855k characters of professionally produced *written* Hindi
programming instruction, the right comparator for our audience), plus hi.wikipedia and
NCERT/RBSE textbooks:

- *Prose vocabulary is middle Hindustani, not tatsama.* शुरू:प्रारंभ = 98:1, मदद:सहायता =
  40:10, कोशिश:प्रयास = 14:6, तरीका:विधि = 22:7. Those plain words are correct and stay.
  But मक़सद, माहौल, वाक़िफ़ and ताक़तवर appear **zero times in 855k characters**. Sanskritic
  wins only for abstract/quantitative vocabulary: अधिक vs ज़्यादा = 291:7, उपयोग/प्रयोग vs
  इस्तेमाल (abstract sense) = 746:7. Swinging to Sanskritised Hindi is a documented failure
  mode in its own right (MP's Hindi-medium engineering programme fell from 150 first-year
  students to 8; AICTE's Hindi textbooks are described as dense and arcane), so the guide
  warns against both directions.
- *The split is by part of speech.* Technical **nouns** are borrowed and written in
  Devanagari; **verbs** describing what happens to them are Hindi. फंक्शन 237 / फलन 0;
  वेरिएबल 280 / चर 0; एरर 191 / त्रुटि 1; but निष्पादित 195 / एक्जीक्यूट 59; प्रदर्शित 219 /
  डिस्प्ले 7; घोषित 100 / डिक्लेयर 2. Attested: "यहाँ हमने साइज 3 के साथ एक अरै स्टार को
  घोषित और इनिशीलाइज किया है।"
- *The old bare-Latin policy was backwards.* Real readable Hindi technical prose writes
  technical nouns in Devanagari and reserves bare Latin for identifiers, keywords, code and
  UI strings, which is exactly what Jiki's `<literal>` markup already covers. The old guide
  also contradicted itself: it said readers are not fluent readers of English prose, then
  put 61 terms in Latin script, which is precisely what such a reader cannot decode.
- *Coinages are judged one at a time, by whether they already earned their keep in Hindi
  maths teaching.* चर and फलन pass that test (RBSE class 11 uses चर 344 times with zero
  वेरिएबल) but still lose to the borrowed noun in programming prose 280:0 and 237:0, so we
  use वेरिएबल and फंक्शन. सरणी fails both tests: zero occurrences anywhere; real texts write
  अरै/ऐरे. The old blanket "never फलन/चर/पुनरावृत्ति/सरणी" do-not list is gone, replaced by
  the per-term glossary rows.
- *CSTT is not cited as an authority anywhere, deliberately.* Its 1995 and 2005 computing
  glossaries contradict each other on compiler, interpreter, variable and loop, and its own
  14 principles contradict themselves. (For the record: अनुभाषक is compiler, not
  interpreter.)

**What changed in `guide.md`.** The YouTuber sentence is gone. "Audience specifics" now
argues from weak English *reading* fluency to Devanagari, which is the conclusion it always
implied and never drew. "Register" is replaced by the three-way part-of-speech model above,
with an explicit do-not-write list of the Perso-Arabic vocabulary. "Script convention" is
inverted. A new "Orthography" section covers numerals, nukta and sentence-final
punctuation. Formality, grammar, term clarification and style notes are substantially as
they were; every Hindi example has been rewritten in the new register.

**Orthography, previously unpoliced.** The shipped files used full nukta spelling (मक़सद,
तरफ़, वक़्त, सिर्फ़, आख़िर) on 5-7% of tokens, and heavy nukta use is itself an Urdu-leaning
signal. Corpora genuinely disagree on nukta density (BBC 15.4 per 1000 tokens; NCERT, Aaj
Tak and Spoken Tutorial 1.7-3.0), so the guide's ज़-only rule is a house convention chosen
for consistency, at **medium confidence**, not a claim about Hindi.

**Danda.** The old guide settled the period over the danda as binding, with no verified
source behind it. Reopened and reversed: ordinary Hindi sentences end with ।, with a period
allowed where the sentence ends on Latin text or a code span. @suditi used a danda in her
rewrite, and the ungated output she rated best used one throughout; Hindi Wikipedia and the
Hindi Wikibooks C tutorial both use ।. **Confidence: medium-high**, worth confirming.

**Gender.** Recorded nowhere in the Hindi glossary before now, although fr, de and es all
record it. Hindi needs it on every noun, borrowings included, because everything agrees with
it. एरर is feminine (concordance: "हमें एक एरर मिलती है, जो कहती है"), and @suditi's rewrite
treats the loanword `exercise` as feminine ("पहली exercise", twice) where our output wrote
पहले. There is no reliable published rule for Hindi loanword gender, so genders we are
confident about are stated and the rest are marked unconfirmed rather than derived from an
invented rule.

**Rows restored** after the 2026-07-31 prune (entry below) removed them as "ordinary
vocabulary": `exercise`, `error`, `lesson`, `level`, `algorithm`, `developer`,
`programming`. The prune's premise was wrong for Hindi: each of these carries a script
decision and a gender, neither of which is obvious, and two shipped files disagreed with
each other in the meantime (`using-functions/hi.md` said अभ्यास while `maze-solve-basic`
said a bare Latin "exercise"). The old guide also named eight "Localize" exemplars of which
four were no longer rows, leaving the rule unresolvable, which is why the model
transliterated freely.

**Row changes worth naming individually:**

- `instruction`: इंस्ट्रक्शन → निर्देश. The old note called निर्देश "an official notice, the
  wrong register", which was the Urdu-leaning register talking; निर्देश is the ordinary
  written Hindi word, and Urdu's own translation used its native ہدایات here.
- `character`: split into अक्षर (a text character) and पात्र (the on-screen figure). The
  shipped file used किरदार, which is Urdu.
- `argument`: "करते वक़्त दी गई असली value" → "करते समय दी गई वास्तविक वैल्यू".
- `property`: "कोई खासियत" → विशेषता.
- `template literal`: @suditi's wording is unchanged; only the script of the embedded terms
  moved (string → स्ट्रिंग, expressions → एक्सप्रेशन) to follow the new policy. Worth
  re-confirming with her, since it is her sentence.
- `edge case`: @dazecodes's wording is untouched.
- `value`: वैल्यू chosen over मान on consistency with the other borrowed nouns, not on
  evidence. Flagged.
- `exercise`: अभ्यास (masculine) chosen. @suditi kept a Latin "exercise" in her own rewrite
  but rated three outputs that all used अभ्यास as better than ours, so this is genuinely
  ambiguous; it is flagged in the glossary and is a live question for her.

**Governance note.** Only two rows in this glossary have ever carried native sign-off
(`template literal`, `edge case`), and both keep their exact wording, so re-cutting the rest
is cheap: nothing a native speaker decided has been overridden. Everything else here remains
an unconfirmed draft.

### 2026-08-01: `condition` resolved in favour of `शर्त`

**Decided by:** agent. **Status: unconfirmed draft. No native speaker has confirmed this.**
**Terms affected:** none (there is no `condition` row; it was pruned on 2026-07-31).

The "Open tension, left alone" note in the entry below is now closed. The guide's register
section listed "condition" among the core programming nouns kept as English loanwords and,
two paragraphs later, listed `शर्त`/condition among the ordinary Hindi words used natively.
Nobody had resolved which wins, and it was not a native-speaker decision, so leaving the
contradiction in a file that is loaded on every Hindi pass would keep producing inconsistent
output.

Resolved in favour of **`शर्त`**, on what the glossary already does: the `if statement` row's
gloss is "शर्त जांचने का तरीका", so `शर्त` is already the word Hindi Jiki content uses for a
condition, and `condition` was pruned from the glossary as ordinary vocabulary rather than
kept as jargon. `condition` was therefore removed from the guide's English-loanword list; the
ordinary-words sentence naming `शर्त` is untouched. `statement` stays in the loanword list,
now marked as its executable sense, which is what the glossary's two `statement` rows already
distinguish.

Still worth a native speaker confirming explicitly.

Also, house style: an em dash in the "Confirmed translation engine" heading below was
replaced with a colon, per the no-em-dash rule in `CLAUDE.md` and `global/rules.md`.

### 2026-08-01: Research and rationale moved out of `guide.md`

**Decided by:** iHiD (audit of guide files across languages).

`guide.md` is loaded into the prompt for every Hindi item in every pass, so the research
record behind its rules was moved here. No rule changed; only the justification around each
one was removed. What was cut, in guide order:

**Bootstrap history.** The guide carried a "Settled conventions (do not re-decide per page)"
section recording that the first Hindi content (the `using-functions` concept page) had to
settle the आप register, the period-not-danda and Western-digits conventions, and the
Devanagari / bare-Latin script split on the spot, and that later pages inherit them. Each of
those three rules is stated imperatively in its own section, so the record of when they were
first decided is history, not instruction.

**Register ecosystem research.** The audience section named the Hindi-medium
programming-education ecosystem the register is modelled on: YouTube channels and tutorial
sites such as CodeWithHarry, Apna College, javahindi.com and WsCube Tech, which share a
warm, informal, peer-to-peer voice that code-switches freely between Hindi and English
technical vocabulary. The guide now states the target register directly ("the register a
popular Hindi coding YouTuber would use") without naming the survey. It also noted that
English-medium schooling is far less established in the Hindi-belt states than in South
India's IT-hub cities, which is the reason behind the "Hindi carries the understanding" rule,
and that Devanagari is left-to-right with no RTL concerns (true, but nothing a translator
acts on).

**आप vs तुम connotation analysis.** The guide justified the आप rule at length: that आप is
the default, natural way modern Hindi tutorial content addresses a reader it does not know
personally; that this is not the stiff, bureaucratic register "formal" implies in English but
simply the unmarked, respectful way to address a stranger-audience, the equivalent of English
"you" carrying no formality marking at all; that तुम is right for peers, close friends and
younger family but reads as presumptuous or overly familiar for a learner meeting Jiki for
the first time; and that तू is only for very close intimacy or, in the wrong context,
rudeness. A one-line version of this survives in the guide as the boundary condition; the
full analysis lives here.

**आप source basis.** Direct-quoted Hindi tutorial prose (the javahindi.com Python-loops
tutorial) addresses the reader with आप ("अगर आप ... चाहते हो"), matching the general
sociolinguistic pattern that आप, not तुम, is default for an unfamiliar audience in Hindi
(cross-checked against general Hindi formality-register references). The guide also observed
that slipping between आप and तुम endings mid-document is a common inconsistency in casual
source material, which is why the "do not copy it" instruction exists.

**Loanword-vs-Sanskritized research basis.** C-DAC's official Rajbhasha computer-science
glossary and NCERT Hindi-medium Class XI/XII textbooks use coined Sanskrit-derived terms
(फलन for "function", चर for "variable", पुनरावृत्ति for "loop/iteration", सरणी for "array").
These are real, standardized terms, but they are a formal/administrative register, not how
working developers or Hindi-medium coding tutorials actually talk. Every
independently-checked, real-world Hindi-medium programming-education source (CodeWithHarry
course titles and index, javahindi.com's Python tutorial prose quoted directly, WsCube Tech
page titles, and Apna College's explicitly Hinglish house style) instead keeps core
programming nouns as English loanwords. This is corroborated by the platform's own
prioritization rationale: Jiki targets Hindi precisely because it reaches learners with
weaker English-*reading* fluency, not learners unfamiliar with English *technical
vocabulary*, which is already widely absorbed into everyday spoken Hindi tech discourse via
YouTube, WhatsApp and workplace English. The guide recorded **confidence: high** for the
general loanword-over-Sanskritized-coinage call (multiple independent, human-authored,
non-SEO sources agree). The four Sanskritized coinages are still named in the guide, as a
concrete do-not list.

**Script-convention evidence.** Real Hindi-medium prose shows two competing conventions for
writing an English loanword inside a Devanagari sentence: bare Latin script ("for loop एक
entry controlled loop है") or Devanagari transliteration ("C भाषा में **वेरिएबल** क्या हैं?").
Direct-quoted running prose (not just page titles) favors bare Latin script; Devanagari
transliteration shows up more in titles and headings. Jiki's split (Devanagari for "Localize"
terms, bare Latin for "Keep in English" terms) keeps sentences readable, all-Devanagari
except for the specific jargon token, while matching how the strongest prose evidence writes
flowing tutorial text. The guide recorded this section's confidence as **medium-high**.

**Numerals and punctuation rationale.** Western digits are the near-universal convention in
Hindi digital and technical writing, and Devanagari digits read as archaic/formal in this
context. Modern digital and technical Hindi content uses "." throughout; the danda "।" reads
as literary/formal and is out of place here.

**Open tension, left alone.** The guide's register section lists "condition" and "statement"
among the core programming nouns kept as English loanwords, and in the next breath lists
`शर्त`/condition among the ordinary Hindi words used natively. Both statements were in the
original guide and both were kept verbatim; nobody has resolved which wins. In practice the
glossary resolves `statement` (two rows: `दावा` for the logical-claim sense, English for the
executable sense) and leans towards `शर्त` for condition (it is the word used inside the
`if statement` gloss), while `condition` itself was pruned as ordinary vocabulary on
2026-07-31. Worth a native speaker settling explicitly.

### 2026-08-01: Confirmed translation engine: fable (stick with original)

**Decided by:** native speaker (suditi), forum topic 925 ("[Hindi Review] Alternative
translation model"). suditi found the alternative model's version worse than the original:
transliterated sentences that don't read naturally in Hindi, and overly complex sentence
structures not broken up the way Hindi prose normally would be. iHiD confirmed (post #3):
"We'll stick with the first." `hi`'s `translation_engine` is now explicitly set to `fable`
in `tracking.json` (was previously unconfirmed/defaulting to fable; now a confirmed pin).

### 2026-07-31: Glossary pruned of ordinary vocabulary

Removed 21 rows whose Hindi rendering had one obvious canonical form and nothing to decide:
`programming`, `developer`, `tech / tech industry`, `number`, `integer`, `float / decimal`,
`condition`, `comparison`, `error`, `modulo / remainder operator`, `concatenation / to
concatenate`, `deploy (verb)`, `algorithm`, `lesson`, `exercise`, `level`, `pathway`, `mentor
/ mentoring`, `track (curriculum path)`, `tutorial`, `solution (learner's submission)`. The
now-empty "Tooling & engineering" section (deploy, algorithm) was removed along with it. A
reviewer may want to double-check `solution (learner's submission)`: हल was kept over the
loanword सॉल्यूशन for warmth, but that reasoning lived only in rationale, not a Notes-column
flag, so it read as closer to a live register choice than the other cuts.

### 2026-07-30: Native speaker rewords "edge case" (t/482)

**Decided by:** @dazecodes, forum topic 482.
**Terms affected:** `edge case`.

@dazecodes proposed rewording the `<define>` gloss from "कोई असामान्य स्थिति जो कम होती है
पर हो सकती है" to "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है". Applied
as given; the row is now settled.

### 2026-07-30: Four renderings changed after the native-speaker sign-off below, unconfirmed

**Decided by:** agent, in the same pass that applied the two rewordings above and below.
**Status: unconfirmed drafts.**
**Terms affected:** `interpreter`, `instruction (given to Jiki)`, `mental model`, `input (to
a function)`, `output`.

In the same commit that applied @suditi's and @dazecodes's rewordings, an agent also
changed four other renderings, none of which carries any native-speaker sign-off:

- `interpreter` to इंटरप्रेटर, and `instruction` to इंस्ट्रक्शन, both to satisfy the rule
  (from the 28-language using-functions pass) that `interpreter` must be able to name a
  person, not just software.
- `mental model` to सोचने का तरीका, applying the ordinary-word principle.
- `input`/`output` to इनपुट/आउटपुट.

`input` and `output` were already in the version of the glossary posted on 2026-07-18, the
snapshot @suditi's "rest of the glossary seems okay" comment (below) was reacting to.
`interpreter`, `instruction` and `mental model` were not: they were added after that comment,
so it cannot be read as covering them either. None of the four should be treated as
confirmed until a native speaker reviews them specifically.

### 2026-07-19: Native speaker rewords "template literal"; general sign-off is not a row confirmation (t/482)

**Decided by:** @suditi, forum topic 482.
**Terms affected:** `template literal`; and, as a documented limit on scope, every other row
as it stood in the 2026-07-18 snapshot.

@suditi proposed rewording the `<define>` gloss for `template literal` from "expressions को
अंदर लिखने वाली string" to "एक तरह की string जिसमें expressions इस्तमाल कर सकते है", saying
the intent is "a string that can use expressions". Applied with the spelling normalised to
इस्तेमाल / "कर सकते हैं" (the post's इस्तमाल / "कर सकते है" are non-standard spellings of the
same words).

The same post also said "Rest of the glossary seems okay" about the 2026-07-18 snapshot.
That comment does not confirm every other row. It names no row, it does not resolve the
rows that were themselves posted asking for native-speaker review, and the list has since
changed (rows added, and `input`, `output`, `interpreter`, `instruction`, and `mental model`
re-decided, see the entry above). Every row other than `template literal` and `edge case`
stays an unconfirmed draft.

### Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. **This section predates the 2026-08-01 rewrite at the top of this file**; where it
appeals to the old loanword-and-bare-Latin policy, the rewrite entry supersedes it. The
word-level rationale below (which everyday Hindi word, and why) still holds. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. Terms whose reasoning is already
covered by a dated entry above (`edge case`, `interpreter`, `instruction (given to Jiki)`,
`mental model`, `input (to a function)`, `output`, `to return (a value)`, `template
literal`) are not repeated here.

#### Core decisions

| Term | Why |
|------|-----|
| code (the noun, in prose) | कोड is the ordinary word in Hindi tech speech and in this guide's own examples. |
| developer | Fully absorbed Devanagari loanword; standard in Indian tech media. |
| streak | Gamification loanword. |
| tech / tech industry | Hybrid (English "tech" + Hindi "इंडस्ट्री"), mirrors the pattern seen across other languages' tech-media usage. |
| pitfall | Literally "common mistake". Descriptive; no snappy Hindi loanword equivalent found. |

#### Values & data types

| Term | Why |
|------|-----|
| number | Ordinary school-Hindi word. |
| integer | Standard school-math term; the gloss ties it to whole numbers in code. |
| float / decimal | Standard school-math term for decimal numbers. |
| character | Ordinary word for a written character/letter. |

#### Functions & control flow

| Term | Why |
|------|-----|
| condition | Ordinary Hindi word, so it stands alone. |
| comparison | Ordinary word. |
| to define (a function) | Warmer and more beginner-friendly than a loanword; fits the machine metaphor. |
| (programming) language | Ordinary Hindi word. |

#### Loops, state & program flow

| Term | Why |
|------|-----|
| to assign | Hybrid verb, standard usage. |
| error | Fully absorbed Devanagari loanword, spoken constantly in Hindi dev discourse. |
| to run / execute (code) | Warm, ordinary verb. |
| increment | Ordinary, warm verb. |
| modulo / remainder operator | Standard school-math term for "remainder"; ties the `%` operator to a concept students already know. |
| concatenation / to concatenate | "To join"; ordinary verb. |

#### Tooling & engineering

| Term | Why |
|------|-----|
| deploy (verb) | Hybrid verb, standard across Indian dev discourse. |
| algorithm | Fully absorbed Devanagari loanword, common even in general Hindi news media. |

#### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| lesson | Ordinary, standard educational Hindi word. |
| exercise | Ordinary school word for a practice exercise; warmer than the loanword एक्सरसाइज़. |
| curriculum | Standard educational word. |
| syllabus | Common conversational loanword. |
| level | Universal loanword in Indian apps, games, and edtech. |
| milestone | Evocative native word; fits a learning-path metaphor. |
| pathway | "Path/way"; ordinary, warm word. |
| mentor / mentoring | Loanword, standard and modern in Indian edtech/startup register. |
| track (curriculum path) | Loanword, common in Indian edtech UX. |
| tutorial | Fully absorbed loanword, near-universal in this context. |
| solution (learner's submission) | Ordinary school-math word ("हल करना" = to solve); warmer fit than the loanword सॉल्यूशन. |

#### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain, concrete Hindi word for "box"; simple and familiar. |
| chain | Concrete word for a physical chain. |
| input slot | इनपुट (agreed above) + स्लॉट, a familiar concrete image (a coin slot, a ticket slot). |
| return chute | आउटपुट (agreed above) + फिसलपट्टी, the everyday word for a playground slide, mirroring the same concrete, delightful image used in other languages' renderings. |
| machine | Ordinary, universal Hindi word for "machine". |
| shelves | "Cupboard/shelf-unit"; warm, concrete, and familiar (everyone has one at home). |
| warehouse | Ordinary Hindi word for a warehouse/store-room; the place Jiki hangs out, with his machine shelf in it. |
| crank | "To turn the handle": the everyday way to say it. |
