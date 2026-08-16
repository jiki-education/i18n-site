---
lang: "bn"
type: "exercise"
slug: "digital-clock"
title: "ডিজিটাল ঘড়ি"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/digital-clock"
en_md5: "a7acc2ab707d93e7824f4b327960c772"
governance_sha: "22c97e3"
content_version: "16d125f7ec60"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"hourNotNumber","english":"<code>hour</code> must be a number","target":"�"},{"key":"minutesNotNumber","english":"<code>minutes</code> must be a number","target":"�"},{"key":"indicatorNotString","english":"<code>indicator</code> must be a string","target":"�"}]},{"name":"checks","rows":[{"key":"notUpdated","english":"The clock didn't get updated. Make sure you use the <code>displayTime</code> function.","target":"�"},{"key":"wrongTime","english":"Expected \"{{expected}}\" but got \"{{got}}\"","target":"�"}]},{"name":"tasks","rows":[{"key":"displayTime.name","english":"Display the time on the clock","target":"�"},{"key":"displayTime.description","english":"Get the current hour and minute, convert to 12-hour format with am/pm, and display it using displayTime().","target":"�"}]},{"name":"scenarios","rows":[{"key":"morning1.name","english":"Early morning","target":"�"},{"key":"morning1.description","english":"Display 6:35 as \"6:35am\"","target":"�"},{"key":"morning2.name","english":"Late morning","target":"�"},{"key":"morning2.description","english":"Display 11:04 as \"11:04am\"","target":"�"},{"key":"afternoon1.name","english":"Early afternoon","target":"�"},{"key":"afternoon1.description","english":"Display 12:19 as \"12:19pm\"","target":"�"},{"key":"afternoon2.name","english":"Late evening","target":"�"},{"key":"afternoon2.description","english":"Display 23:32 as \"11:32pm\"","target":"�"},{"key":"midnight.name","english":"Midnight","target":"�"},{"key":"midnight.description","english":"Display midnight as \"12:00am\"","target":"�"},{"key":"noon.name","english":"Noon","target":"�"},{"key":"noon.description","english":"Display noon as \"12:00pm\"","target":"�"},{"key":"now.name","english":"Display the current time","target":"�"},{"key":"now.description","english":"Display the current time","target":"�"}]},{"name":"hints","rows":[{"key":"gettingStarted.question","english":"I don't know how to get started","target":"�"},{"key":"gettingStarted.answer","english":"Use `currentTimeHour()` and `currentTimeMinute()` to get the current time, then use `displayTime(hour, minutes, \"am\")` with their values to see what happens. Then work out how to set the correct meridiem and the correct hour display.","target":"�"},{"key":"meridiem.question","english":"How does the meridiem work?","target":"�"},{"key":"meridiem.answer","english":"Hours 0-11 are 'am', hours 12-23 are 'pm'. Midnight (hour 0) should display as 12am. Noon (hour 12) should display as 12pm.","target":"�"},{"key":"hourChange.question","english":"When and why does the hour need to change?","target":"�"},{"key":"hourChange.answer","english":"On a 12 hour clock, 13:00 is represented as 1:00pm, 14:00 is represented as 2:00pm, so you need to work out the relationship between 13->1 and 14->2 etc, and amend the clock accordingly!","target":"�"}]},{"name":"describers","rows":[{"key":"currentTimeHour","english":"retrieved the current hour","target":"�"},{"key":"currentTimeMinute","english":"retrieved the current minute","target":"�"},{"key":"displayTime","english":"displayed the time on the clock","target":"�"}]},{"name":"functions","rows":[{"key":"currentTimeHour.description","english":"Returns the current hour using 24-hour time (e.g. 23 for 11pm) as a number.","target":"�"},{"key":"currentTimeHour.category","english":"Time","target":"�"},{"key":"currentTimeMinute.description","english":"Returns the current minute as a number.","target":"�"},{"key":"currentTimeMinute.category","english":"Time","target":"�"},{"key":"displayTime.description","english":"Displays the time on the digital clock. The indicator should be \"am\" or \"pm\".","target":"�"},{"key":"displayTime.category","english":"Action","target":"�"}]}]}]
---

এই অনুশীলনীতে সময় জানার জন্য আপনি দুটি নতুন ফাংশন ব্যবহার করবেন:

- `currentTimeHour()` (বর্তমান সময়ের ঘণ্টা): বর্তমান ঘণ্টাটি ২৪-ঘণ্টার হিসাবে একটি সংখ্যা হিসেবে রিটার্ন করে (যেমন মধ্যরাতের ১৫ মিনিট আগে হলে `23` রিটার্ন করবে)।
- `currentTimeMinute()` (বর্তমান সময়ের মিনিট): বর্তমান মিনিটটি একটি সংখ্যা হিসেবে রিটার্ন করে।

আপনার কাজ হলো এই ফাংশন দুটি যে সংখ্যাই রিটার্ন করুক না কেন, তার ভিত্তিতে একটি ডিজিটাল ঘড়ি আপডেট করা।

ডিজিটাল ঘড়িটি সংখ্যাগুলো ১২-ঘণ্টার ফরম্যাটে আশা করে, সাথে `am` বা `pm` (যাকে বলা হয় "meridiem")।

যেমন:

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

ঘড়িতে সময় দেখাতে আপনি `displayTime(hour, minutes, meridiem)` (সময় দেখানো) ফাংশনটি ব্যবহার করবেন।

প্রতিটি সিনারিওতে বর্তমান সময় বদলে যায়। আপনার কাজ হলো এমন কোড লেখা যাতে সব সিনারিও ঠিকঠাক কাজ করে। শেষ সিনারিওতে আমরা আসল বাস্তব সময় ব্যবহার করি, তাই বাস্তব সময় এক মিনিট এগোলেই সিনারিওটিও বদলে যাবে!
