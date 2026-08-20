---
lang: "es-ES"
type: "exercise"
slug: "lookup-time"
title: "Consulta la hora"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/lookup-time"
en_md5: "31b37a74b65e7568fcceb065f8b9c953"
governance_sha: "16f805d"
content_version: "a0da0358d749"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"blockedUrl","english":"Oh no, you tried to fetch an unexpected URL, which got blocked.","target":null}]},{"name":"describers","rows":[{"key":"fetch","english":"Fetches data from a URL with the given parameters","target":null}]},{"name":"tasks","rows":[{"key":"fetchAndFormatTime.name","english":"Fetch and format the time","target":null},{"key":"fetchAndFormatTime.description","english":"Write a function that takes a city name, fetches the time data using the API, and returns a formatted time string.","target":null},{"key":"handleErrors.name","english":"Handle errors","target":null},{"key":"handleErrors.description","english":"Handle error responses gracefully. If the response contains an \"error\" key, return the error message instead of building the time string.","target":null}]},{"name":"scenarios","rows":[{"key":"amsterdam.name","english":"Amsterdam","target":null},{"key":"amsterdam.description","english":"Return the time in Amsterdam.","target":null},{"key":"tokyo.name","english":"Tokyo","target":null},{"key":"tokyo.description","english":"Return the time in Tokyo.","target":null},{"key":"lima.name","english":"Lima","target":null},{"key":"lima.description","english":"Return the time in Lima.","target":null},{"key":"error.name","english":"Handle Error","target":null},{"key":"error.description","english":"Handle an error correctly when the city is not found.","target":null}]},{"name":"hints","rows":[{"key":"callApi.question","english":"How do I actually call the API?","target":null},{"key":"callApi.answer","english":"Use the `fetch(url, params)` function. The URL is given to you, and `params` is a dictionary describing what you're asking for.","target":null},{"key":"paramsShape.question","english":"What should the params look like?","target":null},{"key":"paramsShape.answer","english":"A dictionary with a single key `\"city\"`, whose value is the city name you were given as an argument.","target":null},{"key":"responseShape.question","english":"What does the response look like?","target":null},{"key":"responseShape.answer","english":"It's a dictionary. If the city wasn't found, it'll have an `\"error\"` key. Otherwise it'll contain the time info you can use to build the result string.","target":null},{"key":"handleError.question","english":"How do I handle the error case?","target":null},{"key":"handleError.answer","english":"Check for the `\"error\"` key before trying to build the time string. If the error key is present, return whatever the spec asks for in that case.","target":null},{"key":"buildString.question","english":"How do I build the final string?","target":null},{"key":"buildString.answer","english":"Use concatenation (`+`) or a template string to combine the response data with the surrounding text into the format the exercise wants.","target":null}]},{"name":"functions","rows":[{"key":"fetch.description","english":"Fetches data from a URL with the given parameters and returns a dictionary","target":null},{"key":"fetch.category","english":"API","target":null},{"key":"hasKey.description","english":"Check if a key exists in a dictionary, returns true or false (provided by level stdlib)","target":null},{"key":"hasKey.category","english":"Dictionary Operations","target":null}]}]}]
---

Create a function called <define>`getTime`</define> which takes a city as its input, uses the <define>`fetch`</define> function to get the time in that city, then returns it as part of a string.

The URL of the API is "https://timeapi.io/api/time/current/city".
The params for `fetch` should have one <define>`key`</define> "city" set to the string passed into `getTime`.

You should turn the response into a string formatted like: "The time on this Sunday in Amsterdam is 00:28"

If the response contains an "error" key, return the error message instead.
