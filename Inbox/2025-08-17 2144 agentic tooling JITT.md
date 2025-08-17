
>[!tip] Created: [2025-08-17 Sun 21:44]

>[!question] Targets: 

>[!danger] Depends: 

search
load

load displaces the current loaded tools.

hypothesize retrieve invoke.
confusion rate vs exposed tool count.

we can make some fake little catalogs or something to test effectiveness ?
we need to be gathering perf metrics all the time, like steps before correct result.

we should follow the guidelines of what deep research needs for tool discovery.
https://platform.openai.com/docs/mcp
### `search` tool

The search tool is used to return a list of potentially relevant search results from the data set exposed by your MCP server.

_Arguments:_

A single query string.

_Returns:_

An array of objects with the following properties:

- `id` - a unique ID for the document or search result item
- `title` - a string title for the search result item
- `text` - a relevant snippet of text for the search terms
- `url` - a URL to the document or search result item. Useful for citing specific resources in research.

### `fetch` tool

The fetch tool is used to retrieve the full contents of a search result document or item.

_Arguments:_

A string which is a unique identifier for the search document.

_Returns:_

A single object with the following properties:

- `id` - a unique ID for the document or search result item
- `title` - a string title for the search result item
- `text` - The full text of the document or item
- `url` - a URL to the document or search result item. Useful for citing specific resources in research.
- `metadata` - an optional key/value pairing of data about the result

By being deep reasearch compatible, we can run deep research to find the tools we want.

clipboard can be used to store notes, and files, but can also be saved as a thing unto itself, like a cross context stash of things.

requirements, where some packs require others to be loaded first, so dependencies.

if the clipboard was all about clipping resources, then it can be treated exactly as such, and holds the full scope of each thing that it clips.
notes might be a separate tool, that gets treated differently, and exposes a particular resource.

copy is easily done using just resources.
rm is tool specific
paste is tool specific