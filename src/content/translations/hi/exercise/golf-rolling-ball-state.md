---
lang: "hi"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "स्थिति-युक्त गेंद"
status: "published"
source_repo: "i18n"
source_path: "locales/hi/curriculum/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "ebe8420"
content_version: "055f87a90432"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"स्थिति एक संख्या होनी चाहिए"}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"गेंद छेद तक नहीं पहुँची। वह स्थिति {{ballX}} पर है, पर उसे स्थिति 88 पर होना चाहिए।"},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"गेंद को हर स्थिति से होकर लुढ़कना चाहिए, न कि सीधे अंत तक पहुँचना चाहिए।"}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"गेंद को छेद में लुढ़काइए"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"गेंद को छेद में लुढ़काइए।"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"गेंद को छेद में लुढ़काइए"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"गेंद को छेद में लुढ़काइए।"}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"मुझे नहीं पता कि कहाँ से शुरू करूँ"},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"मुख्य बात यह है कि हर बार गेंद को एक कदम आगे बढ़ाना है। इसके लिए आप एक वेरिएबल इस्तेमाल कर सकते हैं। सोचिए कि यह कैसे काम कर सकता है।"},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"मुझे अभी भी समझ नहीं आ रहा"},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"आपको एक वेरिएबल बनाना है जो गेंद की स्थिति पर नज़र रखेगा। इसकी शुरुआत वहाँ से होनी चाहिए जहाँ गेंद अभी है, फिर इसे कई बार एक से बढ़ाना है। हर बार जब यह बढ़े, तो इस वेरिएबल को इनपुट के रूप में इस्तेमाल करके `moveTo(...)` करें।"}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"गेंद को **स्थिति** पर ले जाता है।"},{"key":"moveTo.category","english":"Movement","target":"गति"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"गेंद को स्थिति ${arg1} पर पहुँचाया"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":"x एक संख्या होनी चाहिए"},{"key":"yNotNumber","english":"y must be a number","target":"y एक संख्या होनी चाहिए"}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":"गेंद एक यूनिट दाये लुढ़काई"},{"key":"moveTo","english":"moved the ball to the given position","target":"गेंद दी हुई स्तिथि पर पहोचाया"},{"key":"getShotLength","english":"retrieved the shot length","target":"शॉट की लंबाई मिली"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"जश्न के लिए फटाके फोड़े"}]}]}]
---

हम गोल्फ के खेल बनाने की दुनिया में लौट गए हैं। लेकिन इस बार हम जो बना रहे हैं वह बदल गया है।

`roll()` (लुढ़काना) फंक्शन की जगह अब हमारे पास `moveTo(position)` (किसी स्थान पर ले जाना) फंक्शन है। यह फंक्शन गेंद को तुरंत किसी भी जगह पर ले जाता है।

अब जब खिलाड़ी गेंद को मारेगी तो हम उसे सीधे उसकी अंतिम जगह पर ले जा सकते हैं। लेकिन बिना एनीमेशन के ये बहुत असंतुष्टित लगता है। इसलिए हम `moveTo(position)` को कई बार इस्तेमाल करके ऐसा दिखाना चाहते हैं जैसे गेंद लुढ़क रही है।

गेंद स्थिति **28** से शुरू होती है और उसे स्थिति **88** पर पहुँचना है।

आपको इसे **कोड की 5 लाइनों** में हल करना है। शुभकामनाएँ!
