---
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
captured_at: "2026-08-01"
---

Now we're going to build on that simple "Hello" exercise and add some extra rules.

In some English accents, when you say 'two for' quickly, it sounds like 'two fer'. Two-for-one is a way of saying that if you buy one, you also get one for free.

Imagine a bakery that has a holiday offer where you can buy two cookies for the price of one. You take the offer and decide to give the extra cookie to someone else.

Your task is to determine what you will say as you give away the extra cookie.

- If you know the person's name (e.g. Alice), then you will say: "One for Alice, one for me."
- If you don't know the person's name, you will say: "One for you, one for me."

Write a function called <define>`twoFer(name)`</define> that returns the appropriate dialogue.

Here are some examples:

| Function call      | Returns                         |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

For the bonus, can you write this using **just 6 lines of code**?

Good luck!
