---
lang: "zh-CN"
type: "exercise"
slug: "triangle"
title: "三角形"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/triangle"
en_md5: "cccc25a60cf2dba6739f856af8c550fe"
governance_sha: "c80036b"
content_version: "a59beaff4313"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"invalidTriangles.name","english":"Invalid triangles","target":"无效三角形"},{"key":"invalidTriangles.description","english":"Detect invalid triangles. A triangle is invalid if any side is zero, or if the sum of any two sides is less than or equal to the third side.","target":"识别无效三角形。如果任何边为零，或任意两边之和小于等于第三边，则该三角形无效。"},{"key":"equilateralTriangles.name","english":"Equilateral triangles","target":"等边三角形"},{"key":"equilateralTriangles.description","english":"Detect equilateral triangles where all three sides are the same length.","target":"识别三条边都相等的等边三角形。"},{"key":"isoscelesTriangles.name","english":"Isosceles triangles","target":"等腰三角形"},{"key":"isoscelesTriangles.description","english":"Detect isosceles triangles where exactly two sides are the same length.","target":"识别刚好有两条边长度相等的等腰三角形。"},{"key":"scaleneTriangles.name","english":"Scalene triangles","target":"不等边三角形"},{"key":"scaleneTriangles.description","english":"Detect scalene triangles where all three sides have different lengths.","target":"识别三条边长度都不同的不等边三角形。"}]},{"name":"scenarios","rows":[{"key":"invalidEquilateralAllZero.name","english":"Equilateral with all sides zero (0, 0, 0)","target":"所有边为零的等边三角形（0, 0, 0）"},{"key":"invalidEquilateralAllZero.description","english":"A triangle with all sides zero should return \"invalid\".","target":"所有边都为零的三角形应返回 \"invalid\"。"},{"key":"isoscelesFirstInequality.name","english":"Isosceles with invalid side lengths (1, 1, 3)","target":"等腰三角形边长无效（1, 1, 3）"},{"key":"isoscelesFirstInequality.description","english":"A triangle with too short sides should return \"invalid\".","target":"边长过短的三角形应返回 \"invalid\"。"},{"key":"isoscelesSecondInequality.name","english":"Isosceles with invalid side lengths (1, 3, 1)","target":"等腰三角形边长无效（1, 3, 1）"},{"key":"isoscelesSecondInequality.description","english":"A triangle with too short sides should return \"invalid\".","target":"边长过短的三角形应返回 \"invalid\"。"},{"key":"isoscelesThirdInequality.name","english":"Isosceles with invalid side lengths (3, 1, 1)","target":"等腰三角形边长无效（3, 1, 1）"},{"key":"isoscelesThirdInequality.description","english":"A triangle with too short sides should return \"invalid\".","target":"边长过短的三角形应返回 \"invalid\"。"},{"key":"scaleneTriangleInequality.name","english":"Scalene with invalid side lengths (7, 3, 2)","target":"不等边三角形边长无效（7, 3, 2）"},{"key":"scaleneTriangleInequality.description","english":"A triangle with too short sides should return \"invalid\".","target":"边长过短的三角形应返回 \"invalid\"。"},{"key":"validEquilateral.name","english":"Equilateral triangle (2, 2, 2)","target":"等边三角形（2, 2, 2）"},{"key":"validEquilateral.description","english":"A triangle with all sides equal should return \"equilateral\".","target":"所有边相等的三角形应返回 \"equilateral\"。"},{"key":"validIsoscelesFirstTwoEqual.name","english":"Isosceles triangle (4, 4, 3)","target":"等腰三角形（4, 4, 3）"},{"key":"validIsoscelesFirstTwoEqual.description","english":"A triangle with the first two sides equal should return \"isosceles\".","target":"前两条边相等的三角形应返回 \"isosceles\"。"},{"key":"validIsoscelesLastTwoEqual.name","english":"Isosceles triangle (3, 4, 4)","target":"等腰三角形（3, 4, 4）"},{"key":"validIsoscelesLastTwoEqual.description","english":"A triangle with the last two sides equal should return \"isosceles\".","target":"后两条边相等的三角形应返回 \"isosceles\"。"},{"key":"validIsoscelesFirstAndLastEqual.name","english":"Isosceles triangle (4, 3, 4)","target":"等腰三角形（4, 3, 4）"},{"key":"validIsoscelesFirstAndLastEqual.description","english":"A triangle with the same first and last sides should return \"isosceles\".","target":"第一条和最后一条边相等的三角形应返回 \"isosceles\"。"},{"key":"validScalene.name","english":"Scalene triangle (5, 4, 6)","target":"不等边三角形（5, 4, 6）"},{"key":"validScalene.description","english":"A triangle with all sides different should return \"scalene\".","target":"所有边都不相等的三角形应返回 \"scalene\"。"}]},{"name":"hints","rows":[{"key":"whatMakesInvalid.question","english":"What makes a triangle invalid?","target":"什么情况会使三角形无效？"},{"key":"whatMakesInvalid.answer","english":"Two things. First, any side being zero. Second, the sum of any two sides being less than or equal to the third (the triangle inequality). Check this first, since there's no point classifying a shape that isn't actually a triangle.","target":"有两个原因。第一，任何一条边为零。第二，任意两边之和小于或等于第三边（三角形不等式）。先检查这个，因为如果不是一个有效的三角形，分类就没有意义。"},{"key":"checkOrder.question","english":"What order should I check the categories?","target":"我应该按什么顺序检查这些分类？"},{"key":"checkOrder.answer","english":"Most specific first: equilateral (all three sides equal), then isosceles (any two sides equal), then everything else is scalene. Doing them in the wrong order means equilateral triangles get wrongly classified as isosceles.","target":"从最具体的开始：等边（三条边都相等），然后是等腰（任意两条边相等），其他都是不等边。如果顺序搞错了，等边三角形会被错误地归类为等腰三角形。"},{"key":"checkAnyTwoEqual.question","english":"How do I check 'any two sides are equal' for isosceles?","target":"如何检查等腰三角形的“任意两条边相等”？"},{"key":"checkAnyTwoEqual.answer","english":"Three comparisons: a === b, b === c, or a === c. Any one of those being true is enough.","target":"三个比较：a === b、b === c 或 a === c。其中任何一个为 true 就满足条件了。"},{"key":"knowScalene.question","english":"How do I know it's scalene?","target":"如何知道它是不等边三角形？"},{"key":"knowScalene.answer","english":"If you've ruled out invalid, equilateral, and isosceles, scalene is the only thing left. Return it without further checks.","target":"如果你已经排除了无效、等边和等腰，那么剩下的就只有不等边了。直接返回它，无需进一步检查。"}]}]}]
---

你需要创建一个函数，用来判断一个三角形是等边、等腰、不等边还是无效三角形。

### 三角形

- 一个 _equilateral_ 三角形的三条边长度都相等。
- 一个 _isosceles_ 三角形有两条边长度相等。
- 一个 _scalene_ 三角形的所有边长度都不相等。

要使三角形有效，需要满足：

- 所有边都必须大于 0
- 任意两边之和必须大于第三边。

### 函数

函数必须命名为 `determineTriangleType`（确定三角形类型）。它需要接收三个输入，也就是代表三角形三条边的数字。它必须返回 `"invalid"`、`"equilateral"`、`"isosceles"` 或 `"scalene"` 其中之一。
