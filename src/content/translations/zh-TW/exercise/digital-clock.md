---
lang: "zh-TW"
type: "exercise"
slug: "digital-clock"
title: "數位時鐘"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "679b0c2"
content_version: "b63e2d19224b"
published_at: "2026-08-10"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"<code>hour</code> 必須是數字"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"<code>minutes</code> 必須是數字"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"<code>indicator</code> 必須是字串"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"時鐘沒有更新。請確定你有使用 <code>displayTime</code> 函式。"},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"預期為 \"{{expected}}\" 但得到 \"{{got}}\""}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"在時鐘上顯示時間"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"取得目前的小時與分鐘，轉換為帶有 am/pm 的 12 小時制，並使用 displayTime() 顯示出來。"}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"清晨"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"將 6:35 顯示為 \"6:35am\""},{"key":"morning2.name","english":"Late morning","target":"上午"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"將 11:04 顯示為 \"11:04am\""},{"key":"afternoon1.name","english":"Early afternoon","target":"下午"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"將 12:19 顯示為 \"12:19pm\""},{"key":"afternoon2.name","english":"Late evening","target":"深夜"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"將 23:32 顯示為 \"11:32pm\""},{"key":"midnight.name","english":"Midnight","target":"午夜"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"將午夜顯示為 \"12:00am\""},{"key":"noon.name","english":"Noon","target":"中午"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"將中午顯示為 \"12:00pm\""},{"key":"now.name","english":"Display the current time","target":"顯示目前的時間"},{"key":"now.description","english":"Display the current time","target":"顯示目前的時間"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"我不知道該怎麼開始"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"使用 `currentTimeHour()` 和 `currentTimeMinute()` 來取得目前的時間，然後將它們的值放入 `displayTime(hour, minutes, \"am\")` 看看會發生什麼事。接著，想辦法設定正確的上下午（am/pm）以及正確的小時顯示方式。"},{"key":"meridiem.question","english":"How does the meridiem work?","target":"上下午（am/pm）是怎麼運作的？"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"0 到 11 時是 'am'，12 到 23 時是 'pm'。午夜（0 時）應該顯示為 12am。中午（12 時）應該顯示為 12pm。"},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"什麼時候需要改變小時的數字？為什麼？"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"在 12 小時制的時鐘上，13:00 會表示為 1:00pm，14:00 會表示為 2:00pm，所以你需要找出 13 變成 1、14 變成 2 等等之間的關聯，並相應地修改時鐘的顯示喔！"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"取得了目前的小時"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"取得了目前的分鐘"},{"key":"displayTime","english":"displayed the time on the clock","target":"在時鐘上顯示了時間"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"以 24 小時制回傳目前的小時數字（例如晚上 11 點會回傳 23）。"},{"key":"currentTimeHour.category","english":"Time","target":"時間"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"回傳目前的分鐘數字。"},{"key":"currentTimeMinute.category","english":"Time","target":"時間"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"在數位時鐘上顯示時間。標示必須是 \"am\" 或 \"pm\"。"},{"key":"displayTime.category","english":"Action","target":"動作"}]}]}]
---

在這個練習中，你要使用兩個新的函式來取得時間：

- `currentTimeHour()`（目前小時）：以 24 小時制回傳目前的小時數字（例如距離午夜還有 15 分鐘時會回傳`23`）。
- `currentTimeMinute()`（目前分鐘）：回傳目前的分鐘數字。

你的任務是根據這些函式回傳的數字來更新數位時鐘。

數位時鐘預期這些數字會是 12 小時制的格式，並帶有`am`或`pm`（也就是所謂的「上下午」）。

舉例來說：

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

要在時鐘上顯示時間，你可以使用`displayTime(hour, minutes, meridiem)`（顯示時間）函式。

在每個情境中，目前的時間都會改變。你的任務是寫出能讓所有情境都順利運作的程式碼。在最後一個情境裡，我們會使用真實的時間，所以只要真實時間前進了一分鐘，情境就會跟著改變喔！
