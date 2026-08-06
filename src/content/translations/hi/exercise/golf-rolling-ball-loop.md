---
lang: "hi"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "गेंद को लुढ़काना"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "81edb8321f19"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"गेंद {{ballX}} तक लुढ़की, जो शुरुआती जगह से 60 कदम दूर नहीं है।"},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"गेंद को 29 से शुरू करते हुए, एक-एक कदम करके हर स्थिति से गुज़रना चाहिए।"},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"आपके हल में बहुत सारी लाइनें हैं। एक लूप का इस्तेमाल करके इसे छोटा कीजिए।"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"गेंद को छेद में लुढ़काइए"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"गेंद को छेद में लुढ़काइए।"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"गेंद को छेद में लुढ़काइए"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"गेंद को छेद में लुढ़काइए।"}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"मुझसे यह हल नहीं हो रहा।"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"आपके पास इस्तेमाल करने के लिए दो टूल हैं:\n- एक `repeat` लूप, जिसे आप `repeat(n) { }` लिखकर इस्तेमाल करते हैं, जहाँ `n` वह संख्या है जितनी बार आप गेंद को लुढ़काना चाहते हैं और जहाँ आप ब्रेसेज़ (`{ }`) के अंदर कुछ भी डाल सकते हैं।\n- एक `roll()` फंक्शन जो गेंद को एक कदम दाईं ओर लुढ़काता है।\n\nआप इन दोनों को कैसे मिलाकर इस्तेमाल कर सकते हैं?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"गेंद को **एक कदम दाईं ओर** लुढ़काता है।"},{"key":"roll.category","english":"Movement","target":"गति"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"गेंद को एक कदम दाईं ओर लुढ़काया।"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

चलिए `repeat` लूप (_loop_) को आज़माते हैं!

एक गोल्फ़ की गेंद टी पर रखी है। आपको उसे लुढ़काकर उस छेद तक पहुँचाना है, जो 60 कदम दूर है।

इस अभ्यास को **तीन लाइन कोड** में हल कीजिए। मज़ा कीजिए!
