---
type: "exercise"
slug: "sign-words"
title: "Sign Words"
en_md5: "e3bdbd7e4f4b98d10214042ce5ea5b61"
source_repo: "front-end"
source_path: "curriculum/src/exercises/sign-words"
captured_at: "2026-08-27"
---

A while back you built a program to help a customer with their sign-making business. They've now come back and have a new requirement. They're now making bigger signs where they pre-print each word, and then assemble the words on the business's windows on site.

They need you to make the first step of the program for them - taking the name of the business and breaking it into words, which they can print.

Write a function called <define>`signWords(businessName)`</define> that takes the business's name and returns an array of the words in it. For example, `signWords("Frank's Hotdogs")` should return `["Frank's", "Hotdogs"]`.

Words are things separated by spaces. But one thing to be aware of... Sometimes customers send their business name over with multiple sequential spaces in the name by accident. If that happens, you need to ignore them, so `"Frank's   Hotdogs"` should still return `["Frank's", "Hotdogs"]`

### Push and Split

The key to this exercise is to use the `push` method to build the array. You can also use the `split` method, but you may find it easier to manually do the work of splitting instead. Neither is right or wrong. If you need a reminder of how the methods work, check below.

Have fun!
