---
lang: "es-ES"
type: "exercise"
slug: "spotify"
title: "Datos de Spotify"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/spotify"
en_md5: "8ef21fb5f52024d13ae055ac1ceab376"
governance_sha: "16f805d"
content_version: "5bb6c63e707c"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"fetch","english":"fetched data from the provided URL","target":null}]},{"name":"tasks","rows":[{"key":"formatResponse.name","english":"Format the response","target":null},{"key":"formatResponse.description","english":"Create a favoriteArtists function that takes a username, fetches their data from the Spotify API, and returns a formatted sentence listing their favorite artists.","target":null}]},{"name":"scenarios","rows":[{"key":"spotifyFred.name","english":"Fred's favourites","target":null},{"key":"spotifyFred.description","english":"Retrieve and format Fred's favourite artists.","target":null},{"key":"spotifyIhid.name","english":"iHiD's favourites","target":null},{"key":"spotifyIhid.description","english":"Retrieve and format iHiD's favourite artists.","target":null},{"key":"spotifyGriffin.name","english":"griffin is hiding","target":null},{"key":"spotifyGriffin.description","english":"Handle an unknown user error gracefully.","target":null}]},{"name":"hints","rows":[{"key":"fetchUserData.question","english":"How do I fetch the user's data?","target":null},{"key":"fetchUserData.answer","english":"Use `fetch()` with the user endpoint URL. The URL is built by concatenating the base URL with the username you're given as input.","target":null},{"key":"handleUnknownUser.question","english":"How do I handle the case where the user doesn't exist?","target":null},{"key":"handleUnknownUser.answer","english":"The response might come back with an `\"error\"` key. Use `hasKey()` to check for it before trying to process any items. If it's there, return whatever the spec asks for in that case.","target":null},{"key":"getArtistNames.question","english":"How do I get artist names from the items?","target":null},{"key":"getArtistNames.answer","english":"Each item contains an artist API URL. Loop through the items, fetch each artist URL individually, and pull the artist name out of each artist response.","target":null},{"key":"buildFinalSentence.question","english":"How do I build the final sentence?","target":null},{"key":"buildFinalSentence.answer","english":"Join the artist names with commas, but put `\", and \"` before the very last one (e.g. `\"Adele, Beyoncé, and Coldplay\"`). You'll need special handling for the last item in the loop.","target":null}]},{"name":"functions","rows":[{"key":"fetch.description","english":"Fetch data from an API. Takes a URL string and a params dictionary. Returns the API response as a dictionary.","target":null},{"key":"fetch.category","english":"API","target":null},{"key":"push.description","english":"Add an element to a list and return the new list (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null},{"key":"hasKey.description","english":"Check if a key exists in a dictionary, returns true or false (provided by level stdlib)","target":null},{"key":"hasKey.category","english":"Dictionary Operations","target":null}]}]}]
---

In this exercise, you'll parse data from a mock Spotify API.

The API requires two types of requests:

1. **User request**: Fetch a user's favorite tracks from `https://api.spotify.com/v1/users/{username}`. This returns a dictionary with an `items` list, where each item has a `urls` dictionary containing a `spotify_api` URL.

2. **Artist request**: Fetch artist details from the URL in the previous response. This returns a dictionary with a `name` key.

Create a function called <define>`favoriteArtists`</define> that takes a username and returns a sentence like:

```
"fred's most listened to artists are: Glee, NSYNC, Beethoven, and Limp Bizkit!"
```

If there is an error from the API, return the error prefixed with `"Error: "`.

The <define>`fetch(url, params)`</define> function is provided. For this exercise, params should always be an empty dictionary `{}`.
