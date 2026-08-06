---
lang: "zh-CN"
type: "exercise"
slug: "luhn"
title: "Luhn"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/luhn"
en_md5: "6325652b095bb16f3d5b8950b2c6389a"
governance_sha: "c80036b"
content_version: "0a5d7d7c69c5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"doubleAndSum.name","english":"Double every second digit and sum","target":"翻倍每隔一位数字并求和"},{"key":"doubleAndSum.description","english":"Write a function called valid that ignores spaces, then doubles every second digit counting from the right (subtracting 9 from any result over 9), sums all the digits, and returns true when the total is divisible by 10.","target":"编写一个名为 valid 的函数，忽略空格，然后从右边开始数每隔一位数字翻倍（翻倍结果大于 9 时减去 9），将所有数字相加，当总和能被 10 整除时返回 true。"},{"key":"spotInvalidNumbers.name","english":"Spot invalid numbers","target":"识别无效号码"},{"key":"spotInvalidNumbers.description","english":"Numbers whose digits are all valid but whose checksum doesn't come out divisible by 10 should return false.","target":"所有数字都有效但总和不能被 10 整除的号码应返回 false。"},{"key":"rejectBadInput.name","english":"Reject bad input","target":"拒绝无效输入"},{"key":"rejectBadInput.description","english":"Reject strings that are a single character or shorter, and reject any string containing a character that isn't a digit or a space.","target":"拒绝只含一个字符或更短的字符串，以及任何包含非数字或空格字符的字符串。"}]},{"name":"scenarios","rows":[{"key":"luhnSimpleValid.name","english":"A simple valid number","target":"一个简单的有效号码"},{"key":"luhnSimpleValid.description","english":"A valid number should return true.","target":"有效号码应返回 true。"},{"key":"luhnValidTwoDigit.name","english":"Valid two-digit number","target":"有效的两位数号码"},{"key":"luhnValidTwoDigit.description","english":"A valid two-digit number should return true.","target":"有效的两位数号码应返回 true。"},{"key":"luhnValidCanadianSin.name","english":"Valid Canadian SIN","target":"有效的加拿大 SIN 号码"},{"key":"luhnValidCanadianSin.description","english":"A valid number with spaces should return true.","target":"一个包含空格的有效号码应返回 true。"},{"key":"luhnValidEvenDigits.name","english":"Valid number with an even number of digits","target":"有效的偶数位号码"},{"key":"luhnValidEvenDigits.description","english":"A valid number with an even number of digits should return true.","target":"包含偶数位数字的有效号码应返回 true。"},{"key":"luhnValidVeryLong.name","english":"Very long number","target":"非常长的号码"},{"key":"luhnValidVeryLong.description","english":"A very long valid number should still return true.","target":"一个非常长的有效号码仍应返回 true。"},{"key":"luhnInvalidCanadianSin.name","english":"Invalid Canadian SIN","target":"无效的加拿大 SIN 号码"},{"key":"luhnInvalidCanadianSin.description","english":"A number whose checksum fails should return false.","target":"总和不能被 10 整除的号码应返回 false。"},{"key":"luhnInvalidCreditCard.name","english":"Invalid credit card","target":"无效的信用卡号码"},{"key":"luhnInvalidCreditCard.description","english":"An invalid credit card number should return false.","target":"无效的信用卡号码应返回 false。"},{"key":"luhnInvalidLongRemainderDiv5.name","english":"Invalid long number with a remainder divisible by 5","target":"总和能被 5 整除的无效长号码"},{"key":"luhnInvalidLongRemainderDiv5.description","english":"A long number whose total is divisible by 5 but not 10 should return false.","target":"一个总和能被 5 整除但不能被 10 整除的长号码应返回 false。"},{"key":"luhnSingleDigit.name","english":"Single digit is invalid","target":"一位数无效"},{"key":"luhnSingleDigit.description","english":"A single-digit string can never be valid.","target":"一位数字的字符串永远无效。"},{"key":"luhnZeroWithSpace.name","english":"Single zero with a space","target":"含空格的单个零"},{"key":"luhnZeroWithSpace.description","english":"A single zero with a space is invalid, because only one digit remains once spaces are ignored.","target":"含空格的单个零是无效的，因为忽略空格后只剩一位数字。"},{"key":"luhnTrailingLetter.name","english":"Trailing letter","target":"末尾有字母"},{"key":"luhnTrailingLetter.description","english":"A valid number with a non-digit added at the end becomes invalid.","target":"有效号码末尾添加非数字字符后变为无效。"},{"key":"luhnColon.name","english":"Colon character","target":"冒号字符"},{"key":"luhnColon.description","english":"A colon is one less than the character '0', and must not be treated as a digit.","target":"冒号在字符 '0' 之前一位，不能被视为数字。"},{"key":"luhnPercent.name","english":"Percent character in the middle","target":"中间带有百分号字符"},{"key":"luhnPercent.description","english":"A non-digit, non-space character in the middle makes the number invalid, even when the digits alone would sum to a multiple of 10.","target":"号码中间有任何非数字、非空格字符都会使其无效，即使仅数字部分的总和是 10 的倍数。"}]},{"name":"hints","rows":[{"key":"whatIsLuhn.question","english":"How does the Luhn check actually work?","target":"Luhn 校验究竟如何工作？"},{"key":"whatIsLuhn.answer","english":"Ignore any spaces first. Then, starting from the rightmost digit and moving left, double every second digit. If a doubled value goes above 9, subtract 9. Add all the resulting digits together. If that total divides evenly by 10, the number is valid.","target":"首先忽略所有空格。然后，从最右边的数字开始向左，每隔一位数字翻倍。如果翻倍后的值大于 9，则减去 9。将所有处理后的数字相加。如果总和能被 10 整除，则该号码有效。"},{"key":"stripSpaces.question","english":"What do I do with the spaces?","target":"如何处理空格？"},{"key":"stripSpaces.answer","english":"Spaces are only there for readability. Skip over them with `continue` so they don't count as digits and don't affect the positions of the real digits.","target":"空格仅为可读性添加。使用 `continue` 跳过它们，这样它们不计入位数，也不影响真实数字的位置。"},{"key":"rejectNonDigits.question","english":"How do I reject invalid characters?","target":"如何拒绝无效字符？"},{"key":"rejectNonDigits.answer","english":"As you look at each character, if it isn't a space and isn't one of `0123456789`, you can immediately return `false`. A handy check is `\"0123456789\".includes(char)`.","target":"在检查每个字符时，如果它既不是空格也不是 `0123456789` 中的一个，你可以立即返回 `false`。一个很便利的检查方法是 `\\\"0123456789\\\".includes(char)`。"},{"key":"everySecondDigit.question","english":"Which digits do I double?","target":"我应该翻倍哪些数字？"},{"key":"everySecondDigit.answer","english":"Every second one. It helps to build up a clean string of just the digits first, then loop over it with an index so you can tell each digit's position.","target":"每隔一个。先构建一个只含数字的干净字符串会很有帮助，然后用索引遍历它，这样就能知道每个数字的位置。"},{"key":"fromTheRight.question","english":"But I need to count from the right, not the left.","target":"但我需要从右边开始数，而不是左边。"},{"key":"fromTheRight.answer","english":"If your clean digit string has length `len` and you're at index `i` (counting from 0 on the left), then its distance from the right is `len - 1 - i`. Double the digit whenever that distance is odd.","target":"如果你的干净数字字符串长度为 `len`，且当前索引为 `i`（从左边以 0 开始计数），那么它离右边的距离就是 `len - 1 - i`。当距离为奇数时，就翻倍该数字。"},{"key":"doublingOverNine.question","english":"What happens when doubling gives me a two-digit number?","target":"翻倍后得到两位数会怎样？"},{"key":"doublingOverNine.answer","english":"If doubling makes the digit greater than 9, subtract 9 from it. For example 6 doubles to 12, and 12 - 9 = 3. (This gives the same answer as adding the two digits together.)","target":"如果翻倍后数字大于 9，就减去 9。例如 6 翻倍到 12，12 - 9 = 3。（这等同于将两个数字相加。）"},{"key":"finalCheck.question","english":"What's the final validity check?","target":"最后如何检查有效性？"},{"key":"finalCheck.answer","english":"Add up every digit (doubled or not) and check whether the total is divisible by 10, i.e. `total % 10 === 0`. Remember to also reject strings that have one digit or fewer.","target":"将所有数字（包括翻倍后的）加起来，检查总和是否能被 10 整除，即 `total % 10 === 0`。记得还要拒绝只有一位或更少数字的字符串。"}]},{"name":"checks","rows":[{"key":"mustUseFor","english":"So close! This exercise wants you to solve it using a `for` loop.","target":"差一点！这个练习要求你使用 `for` 循环来解答。"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing a digit to a number","target":"将包含数字的字符串转换为数字"},{"key":"number.category","english":"Type Conversion","target":"类型转换"},{"key":"includes.description","english":"Check whether a string contains a smaller string","target":"检查字符串是否包含子字符串"},{"key":"includes.category","english":"String Operations","target":"字符串操作"},{"key":"length.description","english":"The number of characters in a string","target":"字符串的字符数"},{"key":"length.category","english":"String Operations","target":"字符串操作"}]}]}]
---

我们刚刚学习了如何验证图书的 ISBN 号码。还有一种常见的公式，在许多场景中用来校验号码，这就是 Luhn 算法（英语：_Luhn formula_）。它最出名的应用是捕捉信用卡号码中的输错。

### Luhn 校验

Luhn 校验分为以下几个步骤：

- 从**最右边**的数字开始，向左移动，**每隔一位数字，将其值翻倍**。
- 如果翻倍后得到的数字大于 9，则将其减去 9。
- 然后把所有数字加起来。
- 如果总和能被 10 整除，则该号码有效。

例如，对于 `"067"`，我们按照步骤执行：

```
0   6   7     // 原始数字
0  12   7     // 每隔一位（从右边开始）翻倍
0   3   7     // 12 大于 9，因此减去 9 → 3
       10     // 将所有数字相加
     true     // 10 能被 10 整除，因此 067 有效
```

### 你的任务

创建一个名为 `valid`（验证号码是否有效）的函数，该函数接受一个字符串，如果它通过了 Luhn 校验，则返回 `true`，否则返回 `false`。

这些号码以字符串形式给出，并且可能包含可读性空格（例如 `"4539 1488 0343 6467"`）。这些空格应被忽略。

几个重要的注意事项：

- 输入可能包含空格——你应该忽略它们。
- 如果输入包含任何其他字符，你应该返回 false。
- 长度为 1 或更短（去除空格后）的字符串**不是**有效的。

### 学以致用

虽然有很多方法可以解答这道练习，但我们希望你给出的解法中使用了 `for` 循环。

你还会用到我们在上一道练习中介绍的 <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">`Number(str)`</a> 函数。

玩得开心！
