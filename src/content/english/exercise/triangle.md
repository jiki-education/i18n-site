---
type: "exercise"
slug: "triangle"
title: "Triangle"
en_md5: "cccc25a60cf2dba6739f856af8c550fe"
source_repo: "front-end"
source_path: "curriculum/src/exercises/triangle"
captured_at: "2026-08-05"
---

Your task is to create a function that checks whether a triangle is equilateral, isosceles, scalene, or invalid.

### Triangles

- An _equilateral_ triangle has all three sides the same length.
- An _isosceles_ triangle has two sides the same length.
- A _scalene_ triangle has all sides of different lengths.

For a triangle to be valid:

- All sides have to be greater than 0
- If you add together any two sides, the total must be larger than the third side.

### The function

The function must be called <define>`determineTriangleType`</define>. It must take three inputs, which will be numbers for the three sides of the triangle. It must return one of `"invalid"`, `"equilateral"`, `"isosceles"` or `"scalene"`.
