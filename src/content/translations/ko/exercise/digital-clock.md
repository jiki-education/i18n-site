---
lang: "ko"
type: "exercise"
slug: "digital-clock"
title: "디지털 시계"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "c80036b"
content_version: "1f7ae316221c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"<code>hour</code>는 숫자여야 해요"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"<code>minutes</code>는 숫자여야 해요"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"<code>indicator</code>는 문자열이어야 해요"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"시계가 갱신되지 않았어요. <code>displayTime</code> 함수를 사용했는지 확인해 보세요."},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"\"{{expected}}\"이어야 하는데 \"{{got}}\"이에요"}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"시계에 시간 표시하기"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"현재 시간과 분을 가져와 12시간제 형식(am/pm)으로 변환한 다음, `displayTime()`으로 표시하세요."}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"이른 아침"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"6:35를 \"6:35am\"으로 표시하세요"},{"key":"morning2.name","english":"Late morning","target":"늦은 아침"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"11:04를 \"11:04am\"으로 표시하세요"},{"key":"afternoon1.name","english":"Early afternoon","target":"이른 오후"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"12:19를 \"12:19pm\"으로 표시하세요"},{"key":"afternoon2.name","english":"Late evening","target":"늦은 저녁"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"23:32를 \"11:32pm\"으로 표시하세요"},{"key":"midnight.name","english":"Midnight","target":"자정"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"자정을 \"12:00am\"으로 표시하세요"},{"key":"noon.name","english":"Noon","target":"정오"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"정오를 \"12:00pm\"으로 표시하세요"},{"key":"now.name","english":"Display the current time","target":"현재 시간 표시하기"},{"key":"now.description","english":"Display the current time","target":"현재 시간을 표시하세요"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"어떻게 시작해야 할지 모르겠어요"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"`currentTimeHour()`와 `currentTimeMinute()`로 현재 시간을 가져온 다음, 그 값을 `displayTime(hour, minutes, \"am\")`에 전달해 어떤 결과가 나오는지 확인해 보세요. 그런 다음 올바른 meridiem과 올바른 시간 표시를 설정하는 방법을 찾아보세요."},{"key":"meridiem.question","english":"How does the meridiem work?","target":"meridiem은 어떻게 동작하나요?"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"0시부터 11시는 'am', 12시부터 23시는 'pm'이에요. 자정(0시)은 12am으로 표시하고, 정오(12시)는 12pm으로 표시해야 해요."},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"시간이 언제, 왜 바뀌어야 하나요?"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"12시간제 시계에서는 13:00을 1:00pm으로, 14:00을 2:00pm으로 표시해요. 따라서 13을 1로, 14를 2로 바꾸는 규칙을 찾아내고 시계를 그에 맞게 수정해야 해요!"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"현재 시간을 가져왔어요"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"현재 분을 가져왔어요"},{"key":"displayTime","english":"displayed the time on the clock","target":"시계에 시간을 표시했어요"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"24시간제로 현재 시간을 숫자로 반환해요 (예: 11pm은 23)."},{"key":"currentTimeHour.category","english":"Time","target":"시간"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"현재 분을 숫자로 반환해요."},{"key":"currentTimeMinute.category","english":"Time","target":"시간"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"디지털 시계에 시간을 표시해요. 표시자는 \"am\" 또는 \"pm\"이어야 해요."},{"key":"displayTime.category","english":"Action","target":"동작"}]}]}]
---

이번 연습 문제에서는 시간을 가져오는 새로운 함수 두 개를 사용할 거예요.

- `currentTimeHour()`(영어: _currentTimeHour()_): 24시간제로 현재 시간을 숫자로 반환해요. 예를 들어 자정 15분 전이면 `23`을 반환해요.
- `currentTimeMinute()`(영어: _currentTimeMinute()_): 현재 분을 숫자로 반환해요.

두 함수가 반환하는 숫자를 바탕으로 디지털 시계를 갱신하는 게 이번 과제예요.

디지털 시계는 12시간제 형식에 `am` 또는 `pm`(이른바 `meridiem`)을 붙인 숫자를 기대해요.

예를 들면 이렇죠.

- `7:45` → `7:45am`
- `19:45` → `7:45pm`

시계에 시간을 표시할 때는 `displayTime(hour, minutes, meridiem)` 함수(영어: _displayTime(hour, minutes, meridiem)_)를 사용해요.

각 시나리오에서 현재 시간이 바뀌어요. 여러 시나리오가 모두 동작하도록 코드를 작성하는 게 목표예요. 마지막 시나리오에서는 실제 시간을 사용하기 때문에, 실제 시간이 1분 지날 때마다 시나리오가 바뀐답니다!
