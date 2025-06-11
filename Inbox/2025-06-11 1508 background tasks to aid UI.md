
>[!tip] Created: [2025-06-11 Wed 15:08]

>[!question] Targets: 

>[!danger] Depends: 

Responses api has a background task setting, which allows you to resume the streamed result.

this means we could not have to broadcast the stream results to all listeners, but rather could sneakily avoid this requirement, and use the resume function to allow multiple actors to tap the stream.

This will give us very immediate shared streaming between multiple people watching the stream.
We just write to git what the stream id is.