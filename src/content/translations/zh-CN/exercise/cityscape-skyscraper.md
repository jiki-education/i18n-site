---
lang: "zh-CN"
type: "exercise"
slug: "cityscape-skyscraper"
title: "摩天大楼"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/cityscape-skyscraper"
en_md5: "f9e50084e5ed2badccc2e35a8a790fc5"
governance_sha: "c80036b"
content_version: "9480dcad9d04"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"totalCells","english":"Expected {{expected}} cells but found {{got}}.","target":"期望 {{expected}} 个单元格，但找到了 {{got}} 个。"},{"key":"groundWalls","english":"The ground floor should have walls at positions (17, 2) and (21, 2).","target":"底层应该在位置 (17, 2) 和 (21, 2) 有墙。"},{"key":"groundGlass","english":"The ground floor should have glass at positions (18, 2) and (20, 2).","target":"底层应该在位置 (18, 2) 和 (20, 2) 有玻璃。"},{"key":"groundEntrance","english":"The ground floor should have an entrance at position (19, 2).","target":"底层应该在位置 (19, 2) 有一个入口。"},{"key":"floorWalls","english":"Floor {{y}} should have walls at positions (17, {{y}}) and (21, {{y}}).","target":"{{y}} 层应该在位置 (17, {{y}}) 和 (21, {{y}}) 有墙。"},{"key":"floorGlass","english":"Floor {{y}} should have glass at positions (18, {{y}}), (19, {{y}}), and (20, {{y}}).","target":"{{y}} 层应该在位置 (18, {{y}})、(19, {{y}}) 和 (20, {{y}}) 有玻璃。"},{"key":"roof","english":"The roof at y={{roofY}} should be all walls.","target":"y={{roofY}} 处的屋顶应该全是墙。"},{"key":"codeQuality.allArgumentsAreVariables","english":"You should use <strong>variables</strong> as arguments to functions, not literal values. Store values in variables first, then pass the variables.","target":"你应该使用<strong>变量</strong>作为函数的参数，而不是字面值。先将值存入变量，再传递变量。"}]},{"name":"tasks","rows":[{"key":"buildSkyscraper.name","english":"Build the skyscraper","target":"建造摩天大楼"},{"key":"buildSkyscraper.description","english":"Build a skyscraper with the correct number of floors, including a ground floor with entrance, upper floors with glass, and a wall roof.","target":"建造一座楼层数正确的摩天大楼，包括有入口的底层、带玻璃的上层楼层和一个全是墙的屋顶。"}]},{"name":"scenarios","rows":[{"key":"floors6.name","english":"6-floor skyscraper","target":"6 层摩天大楼"},{"key":"floors6.description","english":"Build a skyscraper with 6 floors.","target":"建造一座 6 层的摩天大楼。"},{"key":"floors8.name","english":"8-floor skyscraper","target":"8 层摩天大楼"},{"key":"floors8.description","english":"Build a skyscraper with 8 floors.","target":"建造一座 8 层的摩天大楼。"},{"key":"floors10.name","english":"10-floor skyscraper","target":"10 层摩天大楼"},{"key":"floors10.description","english":"Build a skyscraper with 10 floors.","target":"建造一座 10 层的摩天大楼。"},{"key":"floors12.name","english":"12-floor skyscraper","target":"12 层摩天大楼"},{"key":"floors12.description","english":"Build a skyscraper with 12 floors.","target":"建造一座 12 层的摩天大楼。"},{"key":"floors16.name","english":"16-floor skyscraper","target":"16 层摩天大楼"},{"key":"floors16.description","english":"Build a skyscraper with 16 floors.","target":"建造一座 16 层的摩天大楼。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"I don't know where to start.","target":"我不知道从哪里开始。"},{"key":"whereToStart.answer","english":"Firstly try drawing a wall, some glass, and an entrance to check you understand the functions. Then draw the base floor - this is always the same. Then use the `numFloors()` function to find out how many floors there are in total and draw the remaining floors and then the roof.","target":"首先试着画一堵墙、一些玻璃和一个入口，看看你是否理解了这些函数。然后画底层——这始终是一样的。接着用 `numFloors()` 函数查出一共有多少层，然后画剩下的楼层，最后画屋顶。"},{"key":"tooManyTooFewFloors.question","english":"I have too many/too few floors.","target":"我的楼层太多/太少了。"},{"key":"tooManyTooFewFloors.answer","english":"If `numFloors()` returns 5, that should be one entrance floor, 4 glass floors, and 1 roof. Check your logic is correct!","target":"如果 `numFloors()` 返回 5，那应该是一个入口层、4 个玻璃层和一个屋顶。检查你的逻辑是否正确！"}]},{"name":"functions","rows":[{"key":"buildWall.description","english":"Places a **wall block** at grid position (x, y).","target":"在网格位置 (x, y) 放置一个**墙块**。"},{"key":"buildWall.category","english":"Building","target":"建造"},{"key":"buildGlass.description","english":"Places a **glass panel** at grid position (x, y).","target":"在网格位置 (x, y) 放置一块**玻璃板**。"},{"key":"buildGlass.category","english":"Building","target":"建造"},{"key":"buildEntrance.description","english":"Places an **entrance door** at grid position (x, y).","target":"在网格位置 (x, y) 放置一个**入口门**。"},{"key":"buildEntrance.category","english":"Building","target":"建造"},{"key":"numFloors.description","english":"Returns the **number of floors** for this building.","target":"返回该建筑的**楼层数**。"},{"key":"numFloors.category","english":"Info","target":"信息"}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":"在位置 (${arg1}, ${arg2}) 建造了一堵墙"},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":"在位置 (${arg1}, ${arg2}) 建造了一个入口"},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":"在位置 (${arg1}, ${arg2}) 建造了一块玻璃板"},{"key":"numFloors","english":"retrieved the number of floors","target":"获取了楼层数"}]}]},{"heading":"Shared \"cityscape\" messages","note":"Shared by every exercise in the cityscape category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xyMustBeNumbers","english":"x and y must be numbers","target":null},{"key":"xNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `x` as `{{x}}`, which isn't allowed.","target":null},{"key":"yNotWhole","english":"You must use whole numbers for `x` and `y`. You provided `y` as `{{y}}`, which isn't allowed.","target":null},{"key":"outsideGrid","english":"Position ({{x}}, {{y}}) is outside the grid","target":null},{"key":"alreadyBuilt","english":"The builders are stuck. There's already a {{existing}} at the coordinates `({{x}}, {{y}})` so they can't build here!","target":null}]},{"name":"describers","rows":[{"key":"buildWall","english":"built a wall at position (${arg1}, ${arg2})","target":null},{"key":"buildEntrance","english":"built an entrance at position (${arg1}, ${arg2})","target":null},{"key":"buildGlass","english":"built a glass panel at position (${arg1}, ${arg2})","target":null},{"key":"numFloors","english":"retrieved the number of floors","target":null},{"key":"numBuildings","english":"retrieved the number of buildings","target":null}]}]}]
---

这是关于建造摩天大楼的两个练习中的第一个。

在这个练习中，你的任务是在场景中央建造一座摩天大楼。每个场景中摩天大楼的高度都不同。

为了确定要建造多少层，你可以使用 `numFloors()`（总楼层数）函数，它会返回建筑物的总高度。

你可以使用三种组件：墙（`W`）、玻璃（`G`）和入口（`E`）。查看下面的函数，了解如何创建它们。

最靠近地面的楼层（根据你所在的地方，可以叫“底层”或“一楼”！）总是有一个入口夹在两块玻璃和两块外墙之间（`WGEGW`）。其他楼层则有三块玻璃夹在墙之间（`WGGGW`）。在所有楼层之上是屋顶（`WWWWW`）。

所以一座 5 层的摩天大楼包含一个入口层、四个玻璃层和一个屋顶。它应该看起来像这样：

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

摩天大楼的中心应该在第 `19` 列。底层从 `2` 开始（刚好在混凝土地面上方）并向上延伸（所以在上面的例子中，入口层在 `2`，屋顶在 `7`）。

这个练习的一个关键规则是，你输入函数的所有值都必须是变量或公式。你不能直接输入像 `20` 这样的数字。

完成这个练习后，你将解锁一个项目，在其中建造完整的城市天际线，包含不同数量和不同宽度的建筑物。
