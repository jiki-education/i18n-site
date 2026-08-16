---
lang: "de"
type: "exercise"
slug: "digital-clock"
title: "Digitaluhr"
status: "published"
source_repo: "i18n"
source_path: "locales/de/curriculum/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "22c97e3"
content_version: "037c65c70b13"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"�"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"�"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"�"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"�"},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"�"}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"�"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"�"}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"�"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"�"},{"key":"morning2.name","english":"Late morning","target":"�"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"�"},{"key":"afternoon1.name","english":"Early afternoon","target":"�"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"�"},{"key":"afternoon2.name","english":"Late evening","target":"�"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"�"},{"key":"midnight.name","english":"Midnight","target":"�"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"�"},{"key":"noon.name","english":"Noon","target":"�"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"�"},{"key":"now.name","english":"Display the current time","target":"�"},{"key":"now.description","english":"Display the current time","target":"�"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"�"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"�"},{"key":"meridiem.question","english":"How does the meridiem work?","target":"�"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"�"},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"�"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"�"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"�"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"�"},{"key":"displayTime","english":"displayed the time on the clock","target":"�"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"�"},{"key":"currentTimeHour.category","english":"Time","target":"�"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"�"},{"key":"currentTimeMinute.category","english":"Time","target":"�"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"�"},{"key":"displayTime.category","english":"Action","target":"�"}]}]}]
---

In dieser Übung verwendest du zwei neue Funktionen, um die Uhrzeit zu bekommen:

- `currentTimeHour()` (aktuelle Stunde): Gibt die aktuelle Stunde im 24-Stunden-Format als Zahl zurück (15 Minuten vor Mitternacht ergibt zum Beispiel `23`).
- `currentTimeMinute()` (aktuelle Minute): Gibt die aktuelle Minute als Zahl zurück.

Deine Aufgabe ist es, eine Digitaluhr anhand der Zahlen zu aktualisieren, die diese Funktionen zurückgeben.

Die Digitaluhr erwartet die Zahlen im 12-Stunden-Format mit einem `am` oder `pm` (dem sogenannten „Meridiem“).

Zum Beispiel:

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

Um die Uhrzeit auf der Uhr anzuzeigen, verwendest du die Funktion `displayTime(hour, minutes, meridiem)` (Zeit anzeigen).

In jedem Szenario ändert sich die aktuelle Uhrzeit. Deine Aufgabe ist es, Code zu schreiben, der alle Szenarien zum Laufen bringt. Im letzten Szenario verwenden wir die tatsächliche echte Uhrzeit, das Szenario ändert sich also jedes Mal, wenn die echte Zeit um eine Minute weiterrückt!
