---
type: "exercise"
slug: "lookup-time"
title: "Lookup Time"
en_md5: "31b37a74b65e7568fcceb065f8b9c953"
source_repo: "front-end"
source_path: "curriculum/src/exercises/lookup-time"
captured_at: "2026-08-08"
---

Create a function called <define>`getTime`</define> which takes a city as its input, uses the <define>`fetch`</define> function to get the time in that city, then returns it as part of a string.

The URL of the API is "https://timeapi.io/api/time/current/city".
The params for `fetch` should have one <define>`key`</define> "city" set to the string passed into `getTime`.

You should turn the response into a string formatted like: "The time on this Sunday in Amsterdam is 00:28"

If the response contains an "error" key, return the error message instead.
