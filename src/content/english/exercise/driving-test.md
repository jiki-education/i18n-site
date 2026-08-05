---
type: "exercise"
slug: "driving-test"
title: "Driving Test"
en_md5: "98e0dc4c13cbedbd859f1cf05363faa2"
source_repo: "front-end"
source_path: "curriculum/src/exercises/driving-test"
captured_at: "2026-08-05"
---

When you take your driving test in the UK, you get graded on a variety of different areas like observations, technical skills, parking, etc.

You're allowed to make a few small mistakes ("minors") but not any big ones ("majors"). If you make one major, or 5 or more minors, you fail. Otherwise, they send you out on the road!

In your spare time, you administer these Driving Tests. As the student drives, you make notes on each area:

- If they make a minor mistake, you add a ❌ to the chart
- If they make a major mistake, you add a 💥
- If they pass that area without issue, you put down a ✅

Write a function called <define>`didTheyPass`</define> that expects a string containing the pass (✅), minor (❌) and major (💥) symbols as input. It should determine if they pass or not, returning `true` if they do, and `false` if they don't.
