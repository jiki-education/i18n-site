---
lang: "zh-CN"
type: "exercise"
slug: "niche-named-party"
title: "小众命名派对"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "1011050"
content_version: "10ea8c5c3a66"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"检查名字"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"编写一个 `handleGuest` 函数，检查这个人的名字是否以今晚派对允许的字母开头。如果是，返回 `true`；否则返回 `false`。"},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"用 20 行代码解决"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"加分项：将计算长度的逻辑提取到一个 `handleGuest` 可复用的辅助函数中，整个解决方案可以控制在 20 行以内。你能做到吗？"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S 派对：Sarah 到达"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"今晚只有以 \"S\" 开头的名字才允许进入。Sarah 应该可以进入！"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S 派对：Brad 到达"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"今晚只有以 \"S\" 开头的名字才允许进入。Brad 应该被拒绝入内。"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad 派对：Bradley 到达"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"今晚只有以 \"Brad\" 开头的名字才允许进入。Bradley 应该可以进入！"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley 派对：Brad 到达"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"今晚只有以 \"Bradley\" 开头的名字才允许进入。Brad 的名字太短，所以不允许他进入。"},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad 派对：Brian 到达"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"今晚只有以 \"Brad\" 开头的名字才允许进入。Brian 应该被拒绝入内。"},{"key":"silence.name","english":"S Party: Silence...","target":"S 派对：沉默中……"},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"这个人没有说出自己的名字。空的名称不能以任何东西开头。拒绝他们！"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher 派对：Cher 到达"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"今晚只有以 \"Cher\" 开头的名字才允许进入。Cher 的名字正好是 \"Cher\"。让她进去！"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"干净利落"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"最短的解决方案可以在 20 行内完成。你能找到吗？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"继续加油！看看是否可以用更少的行数来解决。"}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"如何检查一个名字是否以某些字母开头？"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"将允许前缀的每个字符与名字中相同位置的字符进行比较。如果有任何字符不同，则名字不匹配。"},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"如何一次查看一个字符？"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"使用字符串迭代来遍历一个字符串。"},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"如何在另一个单词中找到对应的字母？"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"使用字符串下标来查找特定的字母。"},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"如果允许前缀比名字长怎么办？"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"那个人不匹配，所以你应该返回 `false`。"}]}]}]
---

今晚的派对非常专属，只有名字以特定字母序列开头的人才能入场！

你的任务是写一个名为 `handleGuest`（处理来宾）的函数，它接收两个输入：

- `name` - 门口的人的名字
- `allowedPrefix` - 今晚派对要求的名字开头字母序列

如果该人允许入场，应返回 `true`；如果应该被拒之门外，则返回 `false`。

例如：

- 如果今晚允许的前缀是 `"S"`，那么 Sarah 可以入场（返回 `true`），但 Brad 不行（返回 `false`）。
- 如果允许的前缀是 `"Brad"`，那么 Brad 和 Bradley 可以入场，但 Brian 不行。

### 辅助函数

在完成这个练习的过程中，你会需要计算来宾名字的长度，以及允许前缀的长度。这正是创建一个名为 `getLength(someString)` 的辅助函数的绝佳机会，该函数用于计算字符串中有多少个字母。然后你可以在 `handleGuest(...)` 的不同地方使用这个函数。

奖励场景挑战你用尽可能少的行数来解决这个问题。你可能也会想到其他你偏好的解决方案，它们可能用到更多行。这完全没问题（而且鼓励你探索不同的方法），但也试着找出最短的版本。

玩得开心！
