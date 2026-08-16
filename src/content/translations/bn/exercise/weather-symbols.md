---
lang: "bn"
type: "exercise"
slug: "weather-symbols"
title: "আবহাওয়ার প্রতীক"
status: "published"
source_repo: "i18n"
source_path: "locales/bn/curriculum/exercises/weather-symbols"
en_md5: "8bf4ae32a3a835c12bcd2ba77e3b6ebb"
governance_sha: "22c97e3"
content_version: "7a04e7805132"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"dayIsntCorrect","english":"Day {{day}}'s weather isn't right.","target":"�"}]},{"name":"tasks","rows":[{"key":"drawForecast.name","english":"Draw the forecast","target":"�"},{"key":"drawForecast.description","english":"Draw each day's weather into its own box, using the day's position in the list as the box number.","target":"�"}]},{"name":"scenarios","rows":[{"key":"mixedWeek.name","english":"A Mixed Week","target":"�"},{"key":"mixedWeek.description","english":"A bit of everything across the six days.","target":"�"},{"key":"sunnyWeek.name","english":"A Sunny Week","target":"�"},{"key":"sunnyWeek.description","english":"Lots of sunshine, with a couple of cloudier days.","target":"�"},{"key":"rainyWeek.name","english":"A Rainy Week","target":"�"},{"key":"rainyWeek.description","english":"A soggy week of clouds and rain.","target":"�"},{"key":"snowyWeek.name","english":"A Snowy Week","target":"�"},{"key":"snowyWeek.description","english":"A cold week full of snow.","target":"�"}]},{"name":"hints","rows":[{"key":"loopWithIndex.question","english":"How do I go through the days and know which box each one goes in?","target":"�"},{"key":"loopWithIndex.answer","english":"Loop over `days` with a counter that goes from `0` up to `days.length - 1`. That counter is the box number for each day.","target":"�"},{"key":"descriptionToSymbols.question","english":"How do I turn a description like `\"Miserable 😩\"` into symbols?","target":"�"},{"key":"descriptionToSymbols.answer","english":"Match the description against each possible one and pick the matching list of symbols, for example `[\"cloud\", \"rain\"]`. The instructions list every description and its symbols.","target":"�"},{"key":"weekdaysList.question","english":"How do I get the weekday name for each box?","target":"�"},{"key":"weekdaysList.answer","english":"Make a list of the six weekday names in order, `\"Monday\"` through `\"Saturday\"`, and read the one at your current position using the same counter as the box number.","target":"�"},{"key":"passArgs.question","english":"What do I pass to `draw`?","target":"�"},{"key":"passArgs.answer","english":"Three things: the box number (your counter), the weekday name for that box, and the list of symbols for that day.","target":"�"},{"key":"tidyWithHelper.question","english":"My loop is getting long. How can I tidy it?","target":"�"},{"key":"tidyWithHelper.answer","english":"You can move the description-to-symbols matching into its own function and call it from the loop. This is optional, but it keeps the loop short and easy to read.","target":"�"}]},{"name":"functions","rows":[{"key":"draw.description","english":"Draw the given weather symbols into a forecast box. Takes the box number (0 to 5), the weekday name to label it with, and the list of symbols.","target":"�"},{"key":"draw.category","english":"Drawing","target":"�"}]},{"name":"describers","rows":[{"key":"draw","english":"drew ${arg3} into ${arg2}'s box","target":"�"}]},{"name":"errors","rows":[{"key":"elementsMustBeList","english":"The weather symbols (the third input to draw) must be a list, like [\"sun\", \"cloud\"].","target":"�"},{"key":"elementsMustBeStrings","english":"The weather symbols in the list must all be strings, like \"sun\" or \"rain\".","target":"�"},{"key":"unknownElement","english":"\"{{element}}\" isn't a weather symbol. Use \"sun\", \"cloud\", \"rain\", or \"snow\".","target":"�"},{"key":"indexMustBeNumber","english":"The box number (the first input to draw) must be a number.","target":"�"},{"key":"indexOutOfRange","english":"The box number must be a whole number between 0 and {{max}}.","target":"�"},{"key":"dayMustBeString","english":"The weekday (the second input to draw) must be text, like \"Monday\".","target":"�"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"�"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"�"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"�"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"�"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"�"},{"key":"colorNotString","english":"Color must be a string","target":"�"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"�"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"�"},{"key":"heightPositive","english":"Height must be greater than 0","target":"�"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"�"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"�"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"�"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"�"},{"key":"redRange","english":"Red must be between 0 and 255","target":"�"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"�"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"�"},{"key":"widthPositive","english":"Width must be greater than 0","target":"�"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"�"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"�"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"�"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"�"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"�"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"�"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"�"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"�"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"�"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"�"},{"key":"clear","english":"cleared the canvas","target":"�"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"�"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"�"}]}]}]
---

আপনাকে ছয় দিনের একটি আবহাওয়ার পূর্বাভাস তৈরি করতে বলা হয়েছে। তবে প্রচলিত আবহাওয়ার ডেটা পাওয়ার বদলে, আপনার বস আবহাওয়া নিয়ে তাঁর নিজের অনুভূতির ভিত্তিতে বর্ণনা দিচ্ছেন (যেমন "Snowboarding time! 🏂" বা "Miserable 😩")।

আপনাকে ছয়টি আবহাওয়ার বর্ণনার একটি অ্যারে দেওয়া হয়েছে, প্রতিদিনের জন্য একটি করে, আর আপনার কাজ হলো প্রতিটি দিনের আবহাওয়া তার নিজের বাক্সে এঁকে দেখানো।

পূর্বাভাসটি ছয়টি বাক্সের একটি গ্রিড হিসেবে দেখানো হয়, সোমবার থেকে শনিবার পর্যন্ত প্রতিটি দিনের জন্য একটি করে বাক্স। বর্ণনাগুলো ক্রম অনুযায়ী সাজানো: প্রথমটি (বাক্স `0`) সোমবারের আবহাওয়া, দ্বিতীয়টি (বাক্স `1`) মঙ্গলবারের, এভাবে চলে শনিবার (বাক্স `5`) পর্যন্ত। (আপনার বস রবিবারে বাড়ি থেকে বের হন না, তাই সেদিনের আবহাওয়া নিয়ে তাঁর কোনো মাথাব্যথা নেই, আর আমরাও তাই সেটা কখনো রিপোর্ট করতে পারি না...)

## একটি দিন আঁকা

আমরা আপনাকে একটি `draw` (আঁকা) ফাংশন দিয়েছি, যা আঁকার সব কাজ আপনার হয়ে করে দেয়। আপনার কাজ হলো এর ভেতরে সঠিক কোন এলিমেন্টগুলো দিতে হবে তা বের করা।

```js
draw(box, day, elements)
```

- `box` হলো যে বাক্সে আঁকা হবে (`0` থেকে `5`)।
- `day` হলো যে দিনের নাম দিয়ে বাক্সটিতে লেবেল দেওয়া হবে, যেমন `"Monday"`।
- `elements` হলো যে আবহাওয়ার প্রতীকগুলো দেখানো হবে তার একটি অ্যারে (বিস্তারিত নিচে দেখুন)।

দিনগুলোর নাম, ক্রম অনুযায়ী: `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"` এবং `"Saturday"`।

তাহলে প্রথম দিনটি যদি `"Exciting 🤩"` হয়, আপনি লিখবেন:

```js
draw(0, "Monday", ["cloud", "snow"])
```

## প্রতিটি বর্ণনার মানে কী

প্রতিটি বর্ণনা একটি নির্দিষ্ট প্রতীকের অ্যারের সাথে মিলে যায়:

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## আপনার কাজ

`days` তালিকাটি ধরে একবারে একটি করে দিন এগিয়ে যান। প্রতিটি বর্ণনাকে সঠিক প্রতীকের তালিকায় রূপান্তর করুন এবং মিলে যাওয়া দিনের নাম দিয়ে লেবেল করে সেই দিনের বাক্সে `draw` দিয়ে এঁকে দিন।
