---
lang: "hi"
type: "exercise"
slug: "random-salad"
title: "रैंडम सलाद"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/random-salad"
en_md5: "e5aaa7fb66d90d3c7074f04bc6296752"
governance_sha: "c80036b"
content_version: "d578468db996"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"leavesNumber","english":"Leaves must be a number","target":null},{"key":"tomatoesNumber","english":"Tomatoes must be a number","target":null},{"key":"croutonsNumber","english":"Croutons must be a number","target":null},{"key":"olivesNumber","english":"Olives must be a number","target":null}]},{"name":"checks","rows":[{"key":"saladNotMade","english":"You didn't make the salad. Make sure you call <code>makeSalad()</code> with all four ingredients.","target":null},{"key":"needLeavesRandomInt","english":"You need to call <code>Math.randomInt(40, 100)</code> to generate the number of leaves.","target":null},{"key":"needTomatoesRandomInt","english":"You need to call <code>Math.randomInt(5, leaves / 5)</code> to generate the number of tomatoes.","target":null},{"key":"needCroutonsRandomInt","english":"You need to call <code>Math.randomInt(tomatoes, tomatoes * 2)</code> to generate the number of croutons.","target":null},{"key":"needOlivesRandomInt","english":"You need to call <code>Math.randomInt(1, tomatoes / 2)</code> to generate the number of olives.","target":null}]},{"name":"tasks","rows":[{"key":"makeRandomSalad.name","english":"Make a random salad","target":null},{"key":"makeRandomSalad.description","english":"Generate a random amount of each ingredient using Math.randomInt() and make the salad.","target":null}]},{"name":"scenarios","rows":[{"key":"randomSalad.name","english":"Random salad","target":null},{"key":"randomSalad.description","english":"Make a salad with random amounts of each ingredient.","target":null}]},{"name":"hints","rows":[{"key":"leavesExample.question","english":"Give me an example of how to work out the leaves","target":null},{"key":"leavesExample.answer","english":"Use `let leaves = Math.randomInt(40, 100)` to generate a random amount of salad leaves that you can then use in the other functions.","target":null},{"key":"leavesCount.question","english":"How many leaves do I need?","target":null},{"key":"leavesCount.answer","english":"Between 40 and 100.","target":null},{"key":"tomatoesCount.question","english":"How many tomatoes do I need?","target":null},{"key":"tomatoesCount.answer","english":"At least 5, but no more than leaves / 5","target":null},{"key":"croutonsCount.question","english":"How many croutons do I need?","target":null},{"key":"croutonsCount.answer","english":"At least as many as tomatoes, up to double the amount of tomatoes","target":null},{"key":"olivesCount.question","english":"How many olives do I need?","target":null},{"key":"olivesCount.answer","english":"At least 1, up to half the number of tomatoes","target":null},{"key":"makeSalad.question","english":"How do I make the salad?","target":null},{"key":"makeSalad.answer","english":"Once you've worked out how many ingredients you need for each, input leaves, tomatoes, croutons, olives into makeSalad().","target":null}]},{"name":"describers","rows":[{"key":"makeSalad","english":"made a salad with ${arg1} leaves, ${arg2} tomatoes, ${arg3} croutons, and ${arg4} olives","target":null}]},{"name":"functions","rows":[{"key":"makeSalad.description","english":"Makes a salad with the given amounts of each ingredient.","target":null},{"key":"makeSalad.category","english":"Action","target":null}]}]}]
---

आप और आपके साथी सलाद में चीज़ों के अनुपात पर कभी सहमत नहीं हो पाते। आपको ढेर सारी पत्तियाँ चाहिए होती हैं, उन्हें ज़्यादा क्राउटन चाहिए, और कोई समझौता नहीं होता। आपने तय कर लिया कि अब से रैंडमनेस ही फ़ैसला करेगी।

आप पत्तियों, टमाटरों, जैतूनों और क्राउटन से एक सलाद बना रहे हैं। आपने कुछ सख्त (और कड़ी बहस के बाद बने!) नियमों पर सहमति जताई है:

- आपके पास आधार के तौर पर 40 से 100 के बीच पत्तियाँ होनी चाहिए।
- बहुत ज़्यादा टमाटर डालने से सलाद गीला और खट्टा हो जाता है। आपके पास कम से कम 5 टमाटर होने चाहिए, लेकिन हर 5 पत्तियों पर एक से ज़्यादा टमाटर नहीं हो सकता।
- टमाटर के रस को सोखने के लिए पर्याप्त क्राउटन चाहिए, लेकिन बहुत ज़्यादा हुए तो सलाद ब्रेड का कटोरा बन जाएगा। आप इस बात पर राज़ी हैं कि क्राउटन कम से कम टमाटर जितने होने चाहिए, लेकिन टमाटरों की संख्या के दोगुने से ज़्यादा नहीं होने चाहिए।
- जैतूनों का स्वाद बहुत तेज़ होता है। इन्हें कम मात्रा में डालें, वरना ये बाकी सब पर हावी हो जाएँगे। आपको कम से कम एक जैतून चाहिए, लेकिन टमाटरों की संख्या के आधे से ज़्यादा नहीं।
- और सबसे ज़रूरी नियम: सभी चीज़ों की मात्रा रैंडमनेस का इस्तेमाल करके तय होनी चाहिए!

पहले कुछ बार **Run Code** पर क्लिक करके देखिए कि सलाद कैसे काम करता है। एक बार आपको इस अभ्यास का स्वाद मिल जाए (यह शब्दों का खेल है), तो `Math.randomInt` (यादृच्छिक पूर्णांक) का इस्तेमाल करके और ऊपर बताए नियमों का पालन करते हुए सही मात्रा में चीज़ें चुनिए:

अलग-अलग मिश्रण आज़माने का मज़ा लीजिए!
