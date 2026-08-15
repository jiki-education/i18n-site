---
type: "exercise"
slug: "llm-response"
title: "LLM Response"
en_md5: "4e5f49a3319e277f4f28a6e2425b1b90"
source_repo: "front-end"
source_path: "curriculum/src/exercises/llm-response"
captured_at: "2026-08-15"
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
