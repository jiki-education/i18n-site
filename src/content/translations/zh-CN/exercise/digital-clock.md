---
lang: "zh-CN"
type: "exercise"
slug: "digital-clock"
title: "数字时钟"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "c80036b"
content_version: "a22351ae9f00"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"<code>hour</code> 必须是数字"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"<code>minutes</code> 必须是数字"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"<code>indicator</code> 必须是字符串"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"时钟没有被更新。请确保你使用了 <code>displayTime</code> 函数。"},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"预期 \"{{expected}}\"，但得到了 \"{{got}}\""}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"在时钟上显示时间"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"获取当前小时和分钟，转换为12小时制并附上 am/pm，然后使用 displayTime() 显示。"}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"清晨"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"将 6:35 显示为 \"6:35am\""},{"key":"morning2.name","english":"Late morning","target":"上午"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"将 11:04 显示为 \"11:04am\""},{"key":"afternoon1.name","english":"Early afternoon","target":"午后"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"将 12:19 显示为 \"12:19pm\""},{"key":"afternoon2.name","english":"Late evening","target":"深夜"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"将 23:32 显示为 \"11:32pm\""},{"key":"midnight.name","english":"Midnight","target":"午夜"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"将午夜显示为 \"12:00am\""},{"key":"noon.name","english":"Noon","target":"正午"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"将正午显示为 \"12:00pm\""},{"key":"now.name","english":"Display the current time","target":"显示当前时间"},{"key":"now.description","english":"Display the current time","target":"显示当前时间"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"我不知道如何开始"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"使用 `currentTimeHour()` 和 `currentTimeMinute()` 获取当前时间，然后使用 `displayTime(hour, minutes, \"am\")` 并传入它们的值来看看会发生什么。接着找出如何设置正确的午别以及正确的小时显示。"},{"key":"meridiem.question","english":"How does the meridiem work?","target":"午别是如何工作的？"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"小时 0-11 为 'am'，小时 12-23 为 'pm'。午夜（小时 0）应显示为 12am。正午（小时 12）应显示为 12pm。"},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"何时以及为什么小时需要改变？"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"在12小时制时钟上，13:00 表示为 1:00pm，14:00 表示为 2:00pm，因此你需要找出 13->1 和 14->2 等之间的关系，并相应地调整时钟！"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"获取了当前小时"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"获取了当前分钟"},{"key":"displayTime","english":"displayed the time on the clock","target":"在时钟上显示了时间"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"返回24小时制下的当前小时数（例如 23 表示晚上11点），结果是一个数字。"},{"key":"currentTimeHour.category","english":"Time","target":"时间"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"返回当前分钟数，结果是一个数字。"},{"key":"currentTimeMinute.category","english":"Time","target":"时间"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"在数字时钟上显示时间。指示符应为 \"am\" 或 \"pm\"。"},{"key":"displayTime.category","english":"Action","target":"动作"}]}]}]
---

在这个练习中，你将使用两个新函数来获取时间：

- `currentTimeHour()`（当前小时函数）：返回当前小时数，使用24小时制（例如，在离午夜还有15分钟时会返回 `23`），结果是一个数字。
- `currentTimeMinute()`（当前分钟函数）：返回当前分钟数，结果是一个数字。

你的任务是依据这两个函数返回的数字来更新一个数字时钟。

这个数字时钟要求使用12小时制，并附上 `am` 或 `pm`（即“午别”）。

比如：

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

要在时钟上显示时间，你需要使用 `displayTime(hour, minutes, meridiem)`（显示时间）函数。

在每个场景中，当前时间都会变化。你需要编写代码，让所有场景都能成功运行。在最后一个场景里，我们使用的是实际时间，因此实际时间每过一分钟，场景就会随之更新！
