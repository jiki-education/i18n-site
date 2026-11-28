---
lang: "sw"
type: "concept"
slug: "creating-functions-with-return-values"
title: "Kuongeza Kurejesha Thamani kwenye Vitendakazi"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/creating-functions-with-return-values/page.md"
en_md5: "51d31f709a7051c29b499a31ad68555e"
governance_sha: "a5ccff6a"
content_version: "95c69aeb2ac1"
published_at: "2026-11-28"
---

Sasa unajua jinsi ya kuunda vitendakazi vyenye ingizo na visivyo na ingizo. Kuna jambo moja la mwisho la kujifunza, na baada ya hapo utakuwa mtaalamu wa kutengeneza vitendakazi, na jambo hilo ni jinsi ya kuipa vitendakazi vyako mteremko wa matokeo.

Tayari umetumia vitendakazi vingi vinavyorejesha vitu. `isAlienAbove` (kama kuna kiumbe cha ajabu juu) hukurejeshea kweli au sikweli. `Math.randomInt(1, 10)` (Math ni hisabati; randomInt ni namba kamili nasibu) hukurejeshea namba nasibu.

Jiki anapotumia vitendakazi hivyo, kuna kitu kinatokea nje kupitia mteremko wa matokeo, ambacho anaweza kukitumia baadaye.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki akikusanya thamani inapotokea kwenye mteremko wa matokeo ya mashine"
  width="500"
  height="312"
/>

Kwa hiyo ili kufanya hivi, tunahitaji keyword nyingine mpya, nayo ni keyword ya `return`.

Keyword ya `return` inamwambia Mini Jiki kusukuma kitu nje kupitia mteremko wa matokeo.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki ndani ya mashine akisukuma thamani 42 nje kupitia mteremko wa matokeo"
  width="500"
  height="335"
/>

Hebu tutengeneze kitendakazi, na tukiite `meaningOfLife` (maana ya maisha), na kazi ya kitendakazi hiki ni kurejesha namba `42` kila wakati. Hakina ingizo lolote. Tunaandika hivi:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Mashine ya meaningOfLife ikituma namba 42 nje kupitia mteremko wake wa matokeo"
  width="500"
  height="323"
/>

Sasa popote tunapotumia `meaningOfLife()` katika msimbo wetu, tunapata namba `42` nyuma ili kuitumia kama thamani nyingine yoyote. Tunaweza kuiweka kwenye sanduku kwa `let`, tunaweza kuipitisha kama ingizo kwa kitendakazi kingine, tunaweza kuilinganisha katika kauli ya masharti.

Vitendakazi vinavyorejesha thamani vinaweza pia kupokea ingizo. Unaweza kuandika kitendakazi `ageBracket(age)` (kikundi cha umri) kinachorejesha `"Sorry, too young"` wakati `age` ni chini ya 18, na `"Welcome"` vinginevyo. Yeyote anayeita kitendakazi hicho hupata string ile ile ambayo kitendakazi kilirejesha.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Thamani ya umri ikiangushwa kwenye tundu la ingizo la mashine ili iweze kuamua nini cha kurejesha"
  width="487"
  height="400"
/>

Hivi ndivyo kupanga programu kunavyofanya kazi kwa msingi wake. Tunatengeneza vitalu vidogo vingi vya ujenzi kama hivi kisha tunaviunganisha pamoja kuwa programu.
