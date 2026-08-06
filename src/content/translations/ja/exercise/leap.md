---
lang: "ja"
type: "exercise"
slug: "leap"
title: "うるう年"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "c80036b"
content_version: "46e60a7fe1ef"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"関数内で、1行を超えるコードを使っています。"}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"うるう年かどうかを判定する"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"年を入力として受け取り、うるう年なら`true`、そうでなければ`false`を返す`isLeapYear`という関数を書いてください。"},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"1行のコードで解く"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"関数内で、コードを1行だけ書いて解けますか？"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"2015年"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015年は4で割り切れないため、うるう年ではありません。"},{"key":"year1970.name","english":"Year 1970","target":"1970年"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970年は4で割り切れないため、うるう年ではありません。"},{"key":"year2100.name","english":"Year 2100","target":"2100年"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100年は100で割り切れますが、400で割り切れないため、うるう年ではありません。"},{"key":"year1900.name","english":"Year 1900","target":"1900年"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900年は100で割り切れますが、400で割り切れないため、うるう年ではありません。"},{"key":"year1800.name","english":"Year 1800","target":"1800年"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800年は100で割り切れますが、400で割り切れないため、うるう年ではありません。"},{"key":"year2000.name","english":"Year 2000","target":"2000年"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000年は400で割り切れるため、うるう年です。"},{"key":"year2400.name","english":"Year 2400","target":"2400年"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400年は400で割り切れるため、うるう年です。"},{"key":"year1996.name","english":"Year 1996","target":"1996年"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996年は4で割り切れますが、100で割り切れないため、うるう年です。"},{"key":"year1960.name","english":"Year 1960","target":"1960年"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960年は4で割り切れますが、100で割り切れないため、うるう年です。"},{"key":"bonus1.name","english":"One line of code","target":"1行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"関数内で、コードを1行だけ使って演習を解きます。"}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"うるう年の基本ルールは何ですか？"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"4で割り切れる年はうるう年です。ですから、`year % 4 === 0`が最初の条件です。"},{"key":"exceptions.question","english":"Are there exceptions?","target":"例外はありますか？"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"はい。100で割り切れる年は、たとえ4で割り切れても、うるう年ではありません。たとえば、1900年はうるう年ではありません。"},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"例外の例外はありますか？"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"はい。400で割り切れる年は、結局うるう年です。たとえば、2000年がそうです。つまり、ルールは「4で割り切れ、かつ100で割り切れない。ただし、400で割り切れる場合はうるう年」という順序になっています。"},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"割り切れるかどうかは、どうやって調べますか？"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"余りの演算子`%`を使います。`year % 4 === 0`は、年が4で割り切れて余りがないときに`true`になります。100や400でも同じ方法が使えます。"}]}]}]
---

この演習では、うるう年について探ってみましょう！

うるう年（グレゴリオ暦）は、次の条件を満たす年です：

- 4で割り切れる年
- ただし、100で割り切れる年は、400でも割り切れる場合に限りうるう年となります。

例をいくつか挙げます：

- 1997年は4で割り切れないため、うるう年ではありません。
- 1900年は400で割り切れないため、うるう年ではありません。
- 2000年はうるう年です！

ここで作るのは、`isLeapYear`（うるう年かどうかを判定する）という関数です。この関数は年を入力として受け取り、うるう年であれば`true`、そうでなければ`false`を返します。

じっくり取り組みましょう。書き始める前に、しっかり考えてみてください！
