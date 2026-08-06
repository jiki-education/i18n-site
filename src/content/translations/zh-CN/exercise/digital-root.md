---
lang: "zh-CN"
type: "exercise"
slug: "digital-root"
title: "数字根"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "1dd1eb9a0612"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"各位求和"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"编写一个名为 digitalRoot 的函数，它接收一个数字并将其各位数字相加。对于已经是一位数的数字，以及各位数字之和为一位数的数字，这第一步就足够了。"},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"持续压缩直至一位数"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"有时候，加一次各位数字之后，结果仍然不止一位数（比如 942 加起来是 15）。那就再把这个结果的各位相加，一直加到只剩一位数为止。"},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"加分挑战：保持简练"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"你的解答已经可以运行了。在这个加分挑战中，请精简一下，让整个函数只占几行，没有多余的杂乱内容。"}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"零"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"0 的数字根是 0。"},{"key":"drSingleDigit.name","english":"Already a single digit","target":"已经是一位数"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"已经是一位数的数字，其数字根就是它自己。"},{"key":"drTwoDigits.name","english":"Two digits","target":"两位数"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 在一次相加后就压缩为 7（1 + 6）。"},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"三位数，一次相加"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 在一次相加后就压缩为 6（1 + 3 + 2）。"},{"key":"drThirtyNine.name","english":"Two passes needed","target":"需要两次相加"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 各位相加得到 12，然后再相加得到 3。"},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"需要第二次相加的数字"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 各位相加得到 15，然后再相加得到 6。"},{"key":"drLarge.name","english":"A larger number","target":"一个更大的数字"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 一直压缩到 2。"},{"key":"drNines.name","english":"All nines","target":"全部是 9"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 各位相加得到 45，然后再相加得到 9。"},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"一个精简、简短的解答"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 压缩到 6（1 + 2 + 3 + 4 + 5 = 15，然后 1 + 5 = 6）。"}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"数字根到底是什么？"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"把这个数字的各位都加起来。如果加完是一位数，这就是答案。如果加完还不止一位数，就把得到的结果的各位再相加，一直这样下去直到只剩一位数。"},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"怎么把数字的各位加起来？"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"把数字转换成字符串，这样你就可以用 `for...of` 循环逐个字符地遍历它。在遍历过程中，维护一个运行总和，每次加上一个数字。"},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"不过，每个数字其实是一个字符，并不是数字。"},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"遍历字符串时，每个字符（比如 `\"4\"`）都是文本。用 `Number(char)` 把它转换成数字 `4`，然后再加到你的总和里。"},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"在不知道需要相加多少次的情况下，怎么让这个循环一直运行下去？"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"你事先并不知道需要把各位相加多少次，所以 `while` 循环特别适合。在数字大于一位数的时候，就一直循环下去。"},{"key":"keepGoing.question","english":"When do I stop?","target":"什么时候停下来？"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"数字变成一位数了就立刻停下来。这个时候，把它返回。"}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"快对了！在这个练习里，我们希望你能用 `while` 循环来反复压缩，直到剩下一位数。"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"差一点！你的解答可以运行，但有点长了。看看能不能再精简一下。"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"把包含数字的字符串转换成数字"},{"key":"number.category","english":"Type Conversion","target":"类型转换"},{"key":"string.description","english":"Convert a number into a string","target":"把数字转换成字符串"},{"key":"string.category","english":"Type Conversion","target":"类型转换"}]}]}]
---

数字根（英语：digital root）是一个数字不断相加它的各位，直到只剩下一位数的结果。

如果加一次结果仍然不止一位数，就把那个结果的各位再相加，继续下去直到只剩一位数。

例如，求 `942` 的数字根：

```
9 + 4 + 2 = 15
1 + 5 = 6
```

所以 `942` 的数字根是 `6`。

本身已经是一位数的数字（比如 `7`）的数字根就是它自己。

创建一个名为 `digitalRoot` 的函数，它接收一个数字，并返回它的数字根。

### `String()` 函数

在最近几课中，你已经能够使用 `Number(str)` 函数把字符串转换为数字。

你也可以反过来，用 `String(num)` 函数把数字转换为字符串。例如：

```js
String(147) === "147"
```

同样，注意它的开头是大写字母，现在不用管为什么！

### 把学到的用起来

虽然这个练习有很多种解法，但我们希望你想出的解是用 `while` 循环。

玩得开心！
