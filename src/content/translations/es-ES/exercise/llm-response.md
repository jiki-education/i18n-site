---
lang: "es-ES"
type: "exercise"
slug: "llm-response"
title: "Respuesta de LLM"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/llm-response"
en_md5: "4e5f49a3319e277f4f28a6e2425b1b90"
governance_sha: "16f805d"
content_version: "519898a881d2"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"blockedUrl","english":"Oh no, you tried to fetch an unexpected URL, which got blocked.","target":null}]},{"name":"describers","rows":[{"key":"fetch","english":"fetched data from the provided URL","target":null}]},{"name":"tasks","rows":[{"key":"formatLlmResponse.name","english":"Format the response","target":null},{"key":"formatLlmResponse.description","english":"Create an askLlm function that takes a question, fetches the LLM response, selects the answer with the highest certainty, and returns a formatted string.","target":null}]},{"name":"scenarios","rows":[{"key":"football.name","english":"The 1966 World Cup","target":null},{"key":"football.description","english":"Return the response to a very important question.","target":null},{"key":"cooking.name","english":"Cooking","target":null},{"key":"cooking.description","english":"Return the best response for a cooking question!","target":null},{"key":"ltc.name","english":"Learn to Code websites","target":null},{"key":"ltc.description","english":"Return the best response for a question with a clear answer!","target":null}]},{"name":"hints","rows":[{"key":"apiCall.question","english":"How do I make the API call?","target":null},{"key":"apiCall.answer","english":"Use `fetch(url, params)` where `params` is a dictionary `{ \"question\": question }`, passing the question you were given as an argument.","target":null},{"key":"responseShape.question","english":"What does the response data look like?","target":null},{"key":"responseShape.answer","english":"It's nested. There's a `\"response\"` key holding an `\"answers\"` list (each answer is a dictionary with `\"text\"` and `\"certainty\"`), and a `\"meta\"` key holding a `\"time\"` string like `\"500ms\"`.","target":null},{"key":"pickBest.question","english":"How do I pick the best answer?","target":null},{"key":"pickBest.answer","english":"Loop through the answers and keep track of the one with the highest `certainty`. Note that the certainty values are strings, so you'll need to convert each to a number before comparing.","target":null},{"key":"convertMs.question","english":"How do I convert '500ms' into seconds?","target":null},{"key":"convertMs.answer","english":"Strip off the 'ms' part to leave just the digits, convert that to a number, then divide by 1000.","target":null},{"key":"putTogether.question","english":"How do I put it all together at the end?","target":null},{"key":"putTogether.answer","english":"Use concatenation (`+`) or a template string to build the final formatted string from the chosen answer's text and the converted time.","target":null}]},{"name":"functions","rows":[{"key":"fetch.description","english":"Fetch data from an API. Takes a URL string and a params dictionary. Returns the API response as a dictionary.","target":null},{"key":"fetch.category","english":"API","target":null},{"key":"stringToNumber.description","english":"Convert a string to a number (provided by level stdlib)","target":null},{"key":"stringToNumber.category","english":"Type Conversion","target":null},{"key":"numberToString.description","english":"Convert a number to a string (provided by level stdlib)","target":null},{"key":"numberToString.category","english":"Type Conversion","target":null}]}]}]
---

Create a function called <define>askLlm</define> that takes one input - the question to ask.

Use the <define>fetch</define>(url, parameters) function to hit the API at "https://myllm.com/api/v2/qanda". The parameters should be a dictionary with one key/value pair for "question".

Explore the data you get back then transform it into the following format:

"The answer to 'Who won the 1966 Football Men's World Cup?' is 'England' (100% certainty in 0.5s)."

Finally, return that string.

A couple of notes:

- You will receive multiple possible answers. Choose the one that the LLM has the highest certainty about.
- 0.78 as a decimal is the same as 78% as a percentage.
- 123ms is the same as 0.123s (there are 1000 milliseconds in a second).
