
>[!tip] Created: [2025-04-15 Tue 15:25]

>[!question] Targets: 

>[!danger] Depends: 

This might be significantly better, since can cache, but can also skip the encoding part ?

So the get would include the commit and the path, so we can do permissions checking.

Then when it comes down, it would be raw binary, needing no parsing or anything.

We could even do the decompression server side, or make that one of the options, so the server handles the heavy load.  May still compress during http, but at least we would not have to call on isomorphic-git on the client.

Seems about 75% of the download time is actually the client doing the decompression and parsing.

Also making that work off the main thread would be even more helpful, particularly if shared between tabs.

Plus sharded ls could be a streamer, where it outputs results as soon as they are available, making things a little more lively.