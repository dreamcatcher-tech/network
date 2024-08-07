
>[!tip] Created: [2024-08-07 Wed 13:03]

>[!question] Targets: 

>[!danger] Depends: 

Generate the props to render the row viewer using jsonschema and structured outputs.

This might be enough to allow a search thru the results.

Generate a way to run the query of the files we want, like a filter on the ls call, or a sort.

So we should pull down the full file listing, one file at a time probably, using caches.

Then we use the generated filter and sort to modify the list.

This system could be the actual rapid search function.

Downloading multiple files using websocket should be very fast, and could do whole directories.
We could periodically send backpressure signals up the stream so it doesn't choke.
Avoids multiple http requests.

Downloading all the repo is valid, as we might choose to pull the whole git repo to provide light weight client side widgets.  Eject old data.

Provides a way to track changes and subscribe to those changes, by tracking the git commit.

websocket can just send up a range of the directory files it wants, and pull them down in chunks.