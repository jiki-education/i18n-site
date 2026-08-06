---
lang: "zh-CN"
type: "exercise"
slug: "plant-the-flowers"
title: "种花"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "884117811a9d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"预期种 9 朵花，但种了 {{got}} 朵。"},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"在位置 10 处缺少一朵花。"},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"在位置 50 处缺少一朵花。"},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"在位置 90 处缺少一朵花。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"你的代码行数太多了。试着缩短它。"}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"种 9 朵花"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"使用一个变量和一个 repeat 循环在位置 10、20、30、...、90 种 9 朵花。"}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"种 9 朵花"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"在位置 10、20、30、40、50、60、70、80 和 90 种花。"}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"我完全卡住了"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"看看最近的视频，了解如何使用 repeat 循环以及如何更新变量来跟踪状态。它们会告诉你所有需要知道的内容。"}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"在给定的**位置**种植一朵花。"},{"key":"plant.category","english":"Gardening","target":"园艺"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"在位置 ${arg1} 种植了一朵花"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

你正在创建一台自动种花机。

它应该在草坪上均匀地种花，间隔为 `10`。因此，第一朵花应在位置 `10`，第二朵在 `20`，以此类推。

你已经有`plant(position)`（种植）函数，它接受一个位置作为输入。例如：`plant(10)` 在位置 10 种植一朵花。

你需要用 **5 行代码**来完成这个练习，所以你需要找到一种方法，而不是仅仅写 `plant(10)`、`plant(20)` 等。

祝你好运！
