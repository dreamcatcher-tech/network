
>[!tip] Created: [2024-07-25 Thu 09:31]

>[!question] Targets: 

>[!danger] Depends: 

If the stateboard is loaded with a given function call, which includes some directory glob patterns, then we can throw up a search component that 

Fetching of the contents of the directory is done using git requests.
The browser cache holds the items that are downloaded.
The incremental search shows a loading icon when items are still being loaded.

Or, have an indexing service that runs on the repo, which continually writes a shadow copy of the filesystem tree, but all shunted up one level.  So in a files directory is the file that describes the contents, so for a directory with 1,000 files, there is a single summary index file.

This index file can contain both NL summaries and vector embeddings.  Embeddings are just a registered type of index.
The type of the file determines how the summary gets made.
An app can register a new type of indexer, so that multiple summary types can be stored, which are useful to different services.

So then if some widget or isolate wants to do something with these files, it can pull down the index, and know that it is current, and then perform useful ops.
Live search using embeddings can embed the vector
It can also fire off a background AI call that rewrites the query to have greater success.
Can futher search by date changed, date created, last recalled.
Streets can be nearby streets and addresses, so distance search.

Live geocoding can just show a component for the geocoding, and have the results come back.
Should show the outline of the property, or a colored pin for the property.
Then the fine adjustment lets you move the pin to be somewhere specific as a separate widget.

Indexing at the start can just be a smoosh of all the text in the records, stored in sharded files to reduce the rewrites when the records change.  

Send an AI call off to create an embedding, and then send this back down to the browser to do searches on the repo embeddings, then insert those results at the top of the stack tagged as AI processed results.

Stateboard should be a function call with some params.

Could do fuzzy string searches client side, with a big smoosh of all the keywords of the records that we want to search.
Index type is just plain text, or template based, where it provides all the words separated by a space, one per line, with the filename at the start.
Then as PK results come back, we pull those records down from the server, using cache if available, showing the raw text in the meantime.
https://www.npmjs.com/package/didyoumean2 is fast and fuzzy
https://www.fusejs.io/ seems highly performant too
fusejs index can be cached as well, if it matches the index shards

Run the matcher in a webworker to avoid blocking the render.