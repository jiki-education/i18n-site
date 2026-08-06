---
lang: "hi"
type: "exercise"
slug: "hello"
title: "नमस्ते"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "733c49093bb6"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"sayHello फंक्शन बनाइए"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"sayHello फंक्शन लिखिए जो एक नाम लेता है और 'Hello, [name]!' के प्रारूप में अभिवादन लौटाता है।"}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Aiko को नमस्ते कहिए"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"'Hello, Aiko!' लौटाएँ"},{"key":"helloPriya.name","english":"Greet Priya","target":"Priya को नमस्ते कहिए"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"'Hello, Priya!' लौटाएँ"},{"key":"helloMei.name","english":"Greet Mei","target":"Mei को नमस्ते कहिए"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"'Hello, Mei!' लौटाएँ"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"आप जो उत्तर बनाने की कोशिश कर रहे हैं, उसका मूल ढाँचा क्या है?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"तीन हिस्सों को जोड़कर: एक स्थिर शुरुआत `\"Hello, \"`, फिर नाम, और फिर एक स्थिर अंत `\"!\"`।"},{"key":"joinStrings.question","english":"How do I join strings together?","target":"स्ट्रिंग को आपस में कैसे जोड़ें?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"तीनों हिस्सों को एक स्ट्रिंग में जोड़ने के लिए, `+` से जोड़िए, या `${}` प्लेसहोल्डर वाली टेम्पलेट स्ट्रिंग का इस्तेमाल कीजिए।"}]}]}]
---

अगले दो अभ्यासों में, हम फंक्शन बनाने का अभ्यास जारी रखेंगे और स्ट्रिंग के साथ कुछ काम करना शुरू करेंगे।

सबसे पहले हम सबसे सरल मामला देखेंगे।

आपको एक ऐसा फंक्शन बनाना है जिसे `sayHello(name)` (किसी को नमस्ते कहना) कहते हैं।

यह फंक्शन उस व्यक्ति के लिए एक अभिवादन लौटाना चाहिए। इसलिए यदि आप `sayHello("Jeremy")` लिखते हैं, तो फंक्शन को `"Hello, Jeremy!"` लौटाना चाहिए। यदि आप `sayHello("Nicole")` लिखते हैं, तो उसे `"Hello, Nicole!"` लौटाना चाहिए।

उम्मीद है कि यह एक छोटा-मोटा अभ्यास होगा और अगले, ज़्यादा दिलचस्प अभ्यास की नींव रखेगा।
