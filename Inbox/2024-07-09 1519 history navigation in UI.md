
>[!tip] Created: [2024-07-09 Tue 15:19]

>[!question] Targets: 

>[!danger] Depends: 

The thing that is changing is the threadId that is in focus.
We should cache the thread so that we always have a snappy response.

If the threadId === backchat.id then we show the backchat UI over the top of everything.

We always show the latest version of each thread.

If the thread is not present in artifact, then we clear it and roll back to the default thread that came with backchat.