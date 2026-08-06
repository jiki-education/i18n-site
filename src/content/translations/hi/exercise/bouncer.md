---
lang: "hi"
type: "exercise"
slug: "bouncer"
title: "बाउंसर"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "e2a1465e48d9"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"व्यक्ति 25 साल का है — उसे अंदर आने देना चाहिए था, लेकिन नहीं आने दिया गया।"},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"व्यक्ति 18 साल का है — उसे अंदर नहीं आने देना चाहिए था, लेकिन आने दिया गया।"},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"व्यक्ति 21 साल का है — उसे अंदर आने देना चाहिए था, लेकिन नहीं आने दिया गया।"},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"व्यक्ति ठीक 20 साल का है — 20 से अधिक नहीं, इसलिए उसे अंदर नहीं आने देना चाहिए था, लेकिन आने दिया गया।"}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"व्यक्ति की उम्र जाँचिए"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"व्यक्ति की उम्र पूछिए और जाँचिए कि क्या उनकी उम्र 20 से अधिक है। यदि हाँ, तो उन्हें अंदर आने दीजिए।"}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"उम्र 25"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"व्यक्ति 25 साल का है — उसे अंदर आने देना चाहिए।"},{"key":"age18.name","english":"Age 18","target":"उम्र 18"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"व्यक्ति 18 साल का है — उसे अंदर नहीं आने देना चाहिए।"},{"key":"age21.name","english":"Age 21","target":"उम्र 21"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"व्यक्ति 21 साल का है — 20 से बस थोड़ा ऊपर, उसे अंदर आने देना चाहिए।"},{"key":"age20.name","english":"Age 20","target":"उम्र 20"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"व्यक्ति ठीक 20 साल का है — 20 से अधिक नहीं, इसलिए उसे अंदर नहीं आने देना चाहिए।"}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"मुझे उनकी उम्र कैसे पता चलेगी?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"`askAge()` फंक्शन का इस्तेमाल करें। यह हर सिनेरियो में एक अलग वैल्यू लौटाएगा।"},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"अलग-अलग स्थितियों में अलग-अलग काम कैसे करूँ?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"`if` स्टेटमेंट का इस्तेमाल करें — अगर ज़्यादा मदद चाहिए तो कॉन्सेप्ट देखें!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"व्यक्ति की उम्र पूछी"},{"key":"letIn","english":"let the person in","target":"व्यक्ति को अंदर आने दिया"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"बाहर इंतज़ार कर रहे व्यक्ति की **उम्र** लौटाता है।"},{"key":"askAge.category","english":"Information","target":"जानकारी"},{"key":"letIn.description","english":"Lets the person in.","target":"व्यक्ति को अंदर आने देता है।"},{"key":"letIn.category","english":"Action","target":"क्रिया"}]}]}]
---

आप The Neon Gates बार के लिए एक रोबोटिक बाउंसर कोड कर रहे हैं। रोबोट का काम किसी की उम्र जाँचना और यह तय करना है कि उसे अंदर आने देना है या नहीं।

आपके पास दो फंक्शन हैं:

- `askAge()` (उम्र पूछना) बाहर इंतज़ार कर रहे व्यक्ति की उम्र लौटाता है
- `letIn()` (अंदर आने देना) उस व्यक्ति को अंदर आने देता है

इस जगह की नीति है कि केवल **21 साल या उससे ज़्यादा उम्र** वालों को ही अंदर आने की अनुमति है।

व्यक्ति की उम्र पूछिए, और यदि वे काफी बड़े हैं तो उन्हें अंदर आने दीजिए।
