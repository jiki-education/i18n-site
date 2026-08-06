---
lang: "zh-CN"
type: "exercise"
slug: "owners-bouquets"
title: "主人的花束"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/owners-bouquets"
en_md5: "412a9f3a6ed5bb6b797c6239d51492be"
governance_sha: "c80036b"
content_version: "1179c97fe6ac"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount_one","english":"The owner expected to see {{count}} flower planted. But you planted {{got}}.","target":"主人期望看到种了 {{count}} 朵花，但你种了 {{got}} 朵。"},{"key":"flowerCount_other","english":"The owner expected to see {{count}} flowers planted. But you planted {{got}}.","target":"主人期望看到种了 {{count}} 朵花，但你种了 {{got}} 朵。"},{"key":"flowerAtPosition","english":"Expected a flower at position {{position}}, but didn't find one.","target":"期望在位置 {{position}} 有一朵花，但没有找到。"},{"key":"strayFlower","english":"Found a flower at position {{position}}, which isn't where the owner wanted one. The flowers should be evenly spaced.","target":"在位置 {{position}} 发现了一朵花，但这不是主人想要的位置。花朵应该均匀分布。"}]},{"name":"tasks","rows":[{"key":"plantFlowersEvenly.name","english":"Plant flowers evenly","target":"均匀种植花朵"},{"key":"plantFlowersEvenly.description","english":"Use askNumberOfFlowers() to find out how many flowers to plant, calculate the gap, and plant them evenly spaced.","target":"使用 askNumberOfFlowers() 询问要种多少朵花，计算间距，然后均匀地种植它们。"}]},{"name":"scenarios","rows":[{"key":"oneFlower.name","english":"The owner wants 1 flower","target":"主人想要 1 朵花"},{"key":"oneFlower.description","english":"In this scenario, `askNumberOfFlowers()` will return 1. Plant 1 flower at position 50.","target":"在这个场景中，`askNumberOfFlowers()` 将返回 1。在位置 50 种植 1 朵花。"},{"key":"threeFlowers.name","english":"The owner wants 3 flowers","target":"主人想要 3 朵花"},{"key":"threeFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 3. Plant 3 flowers at positions 25, 50, and 75.","target":"在这个场景中，`askNumberOfFlowers()` 将返回 3。在位置 25、50 和 75 种植 3 朵花。"},{"key":"fourFlowers.name","english":"The owner wants 4 flowers","target":"主人想要 4 朵花"},{"key":"fourFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 4. Plant 4 flowers at positions 20, 40, 60, and 80.","target":"在这个场景中，`askNumberOfFlowers()` 将返回 4。在位置 20、40、60 和 80 种植 4 朵花。"},{"key":"nineFlowers.name","english":"The owner wants 9 flowers","target":"主人想要 9 朵花"},{"key":"nineFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 9. Plant 9 flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"在这个场景中，`askNumberOfFlowers()` 将返回 9。在位置 10、20、30、40、50、60、70、80 和 90 种植 9 朵花。"}]},{"name":"hints","rows":[{"key":"chooseGap.question","english":"How do I work out where to plant each flower?","target":"如何计算每朵花的种植位置？"},{"key":"chooseGap.answer","english":"First work out the gap between flowers:\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\nThe first flower goes at that position, and each next flower is one more gap along. So if there are 3 flowers the gap is 25, and they go at 25, 50 and 75.","target":"首先计算花朵之间的间距：\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\n第一朵花种在这个位置，之后的每一朵花都再增加一个间距。所以如果有 3 朵花，间距是 25，它们就种在 25、50 和 75。"},{"key":"seeScenarios.question","english":"How do I see the different scenarios","target":"如何查看不同的场景？"},{"key":"seeScenarios.answer","english":"Click on the circles on the left hand side in between your code and the results.","target":"点击代码和结果之间左侧的圆圈。"}]},{"name":"functions","rows":[{"key":"askNumberOfFlowers.description","english":"Returns the **number of flowers** to plant.","target":"返回要种植的**花朵数量**。"},{"key":"askNumberOfFlowers.category","english":"Gardening","target":"园艺"},{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"在指定的**位置**种植一朵花。"},{"key":"plant.category","english":"Gardening","target":"园艺"}]},{"name":"describers","rows":[{"key":"askNumberOfFlowers","english":"asked for the number of flowers to plant","target":"询问了要种植的花朵数量"},{"key":"plant","english":"planted a flower at position ${arg1}","target":"在位置 ${arg1} 种植了一朵花"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

欢迎来到你使用场景的第二个练习。

我们又回到了我们的自动园艺机器。之前，我们总是种植 9 朵花，但现在情况变了。我们需要让机器人能够按照房屋主人告诉它的数量来种花。

为此，我们有了一个名为 `askNumberOfFlowers()`（询问要种多少朵花）的函数。当我们使用它时，我们询问房屋主人要种多少朵花，该函数返回一个数字作为答案。如果函数返回 3，我们就得种 3 朵花。如果返回 8，就得种 8 朵花。

我们有严格的要求，必须保持花园整洁，所以我们需要将花朵均匀地分布在整个花园中。如果有 3 朵花，我们就得把它们种在 25、50 和 75 的位置。如果有 4 朵花，我们就得把它们种在 20、40、60、80 的位置，以此类推。（和往常一样，花园宽 100 个单位）。

### 场景

就像你刚刚解决的高尔夫练习一样，在左侧你会看到四个灰点，代表四个不同的场景。**点击每个灰点**会显示一个不同的场景，但这一次，是 `askNumberOfFlowers()` 每次会返回一个不同的数字。

你的工作是编写一个程序，使其能应对 `askNumberOfFlowers()` 可能返回的所有不同值。

祝你好运！
