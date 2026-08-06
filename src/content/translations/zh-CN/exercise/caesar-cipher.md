---
lang: "zh-CN"
type: "exercise"
slug: "caesar-cipher"
title: "凯撒密码"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "4e15eae10141"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"编码一条消息"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"编写一个编码函数，将消息中的每个字母按给定量移动。空格应保持为空格。移动超过'z'的字母应循环回绕到字母表的开头。"}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"简单移动1位"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"将每个字母向前移动1位：a->b, b->c, c->d。"},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"移动3位"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"将每个字母向前移动3位：h->k, e->h, l->o, o->r。"},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"循环回绕字母表"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"当移动超过'z'时，进行循环回绕：x->a, y->b, z->c。"},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"带空格的消息"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"空格应保持为空格，只有字母会被移动。"},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13加密"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13是凯撒密码的一种特殊情况，其移动量为13。"}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"如何理解将字母移动N位？"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"每个字母在字母表中都有一个位置（a在位置0，b在位置1，依此类推）。要进行移动，找到这个位置，加上移动量，然后通过在字母表中查找，将新位置转回为字母。"},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"如何找到字母在字母表中的位置？"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"你可以使用`indexOf`在字符串中搜索一个较小的片段。在字母表字符串上调用它，可以得到字母的位置；如果未找到字母，则返回-1。反过来，根据位置索引回字母表字符串，就能得到对应的字母。"},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"当移动超过'z'时会发生什么？"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"需要循环回绕到'a'。取模运算符（`%`）非常适合这种情况。将位置对26取模，可以将任何数字带回到0到25的范围内。"},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"如何将这个方法应用到整个消息？"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"循环遍历消息中的每个字符，使用你的单字母辅助函数进行移动，并使用拼接（`+`）将移动后的字母构建成结果字符串。"}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"在字符串中查找一个较小字符串的位置，如果未找到则返回-1（由关卡标准库提供）"},{"key":"indexOf.category","english":"String Operations","target":"字符串操作"}]}]}]
---

凯撒密码是最早且最简单的加密技术之一。尤利乌斯·凯撒曾用它向将军们发送秘密消息。

这个密码通过将消息中的每个字母在字母表中移动固定数量的位置来运作。例如，当偏移量为 3 时，'a' 变成 'd'，'b' 变成 'e'，以此类推。如果偏移超过 'z'，则循环回到字母表的开头。

空格应保持为空格（不进行移动）。

创建一个名为 `encode(message, shift)` 的函数（即编码函数），接收一个小写字母的消息和一个偏移量，返回加密后的消息。

例如：

- `encode("abc", 1)` 返回 `"bcd"`
- `encode("xyz", 3)` 返回 `"abc"`（循环回绕）
- `encode("hello world", 5)` 返回 `"mjqqt btwqi"`

提示：最好将这个问题拆成几个小型的辅助函数！

### 趣闻

我曾在葡萄牙布拉加的一个技术会议上担任主持人。就在我准备上台的五分钟前，组织者有点不好意思地问我，是否介意在当天的第一部分打扮成尤利乌斯·凯撒，以庆祝布拉加的罗马文化遗产。我成功扮得像吗……？

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="打扮成凯撒的 Jeremy"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
