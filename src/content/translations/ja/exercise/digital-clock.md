---
lang: "ja"
type: "exercise"
slug: "digital-clock"
title: "デジタル時計"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "c80036b"
content_version: "fb33bc106911"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"<code>hour</code>は数値でなければなりません。"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"<code>minutes</code>は数値でなければなりません。"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"<code>indicator</code>は文字列でなければなりません。"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"時計が更新されませんでした。<code>displayTime</code>関数を使っているか確認してみてください。"},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"「{{expected}}」が期待されましたが、「{{got}}」が得られました。"}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"時計に時刻を表示する"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"現在の時と分を取得し、12時間形式に変換して午前か午後を付け、displayTime()で表示します。"}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"早朝"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"6:35を「6:35am」と表示させる。"},{"key":"morning2.name","english":"Late morning","target":"午前遅め"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"11:04を「11:04am」と表示させる。"},{"key":"afternoon1.name","english":"Early afternoon","target":"午後早め"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"12:19を「12:19pm」と表示させる。"},{"key":"afternoon2.name","english":"Late evening","target":"夜遅め"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"23:32を「11:32pm」と表示させる。"},{"key":"midnight.name","english":"Midnight","target":"真夜中"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"真夜中を「12:00am」と表示させる。"},{"key":"noon.name","english":"Noon","target":"正午"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"正午を「12:00pm」と表示させる。"},{"key":"now.name","english":"Display the current time","target":"現在の時刻を表示する"},{"key":"now.description","english":"Display the current time","target":"現在の時刻を表示する"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"どう始めたらいいかわかりません。"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"まず、`currentTimeHour()`と`currentTimeMinute()`で現在の時刻を取得し、その値で`displayTime(hour, minutes, \"am\")`を実行して結果を確認します。その後、正しい午前・午後（meridiem）と時刻表示の設定方法を考えてみてください。"},{"key":"meridiem.question","english":"How does the meridiem work?","target":"meridiemの仕組みはどうなっていますか？"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"0～11時は「am」、12～23時は「pm」です。真夜中（0時）は12am、正午（12時）は12pmと表示します。"},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"時刻表示を変える必要があるのはどのような場合ですか？"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"12時間制の時計では、13:00は1:00pm、14:00は2:00pmと表示されます。つまり、13→1や14→2などの関係を考えて、それに合わせて時計を調整する必要があります！"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"現在の「時」を取得しました"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"現在の「分」を取得しました"},{"key":"displayTime","english":"displayed the time on the clock","target":"時計に時刻を表示しました"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"24時間制での現在の「時」を数値で返します（例：午後11時なら23）。"},{"key":"currentTimeHour.category","english":"Time","target":"時刻"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"現在の「分」を数値で返します。"},{"key":"currentTimeMinute.category","english":"Time","target":"時刻"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"デジタル時計に時刻を表示します。indicatorには「am」または「pm」を指定します。"},{"key":"displayTime.category","english":"Action","target":"アクション"}]}]}]
---

この演習では、次の2つの新しい関数を使って時刻を取得します。

- `\`currentTimeHour()\`（現在の「時」を返す）`: 現在の「時」を24時間制の数値として返します（たとえば、真夜中15分前なら`23`を返します）。
- `\`currentTimeMinute()\`（現在の「分」を返す）`: 現在の「分」を数値として返します。

これらの関数が返す数値を使って、デジタル時計を更新します。

デジタル時計には、12時間制の時刻に加えて、`am`か`pm`（いわゆる「meridiem」）の指定が必要です。

たとえば：

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

時刻を時計に表示するには、`\`displayTime(hour, minutes, meridiem)\`（時、分、meridiemを表示する関数）を使います。

各シナリオでは、現在の時刻が変わります。すべてのシナリオで正しく動くコードを書きましょう。最後のシナリオでは、実際の現実の時刻を使うため、現実の時刻が1分進むたびにシナリオも変化します！
