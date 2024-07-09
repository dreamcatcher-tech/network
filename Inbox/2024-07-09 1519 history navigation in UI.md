
>[!tip] Created: [2024-07-09 Tue 15:19]

>[!question] Targets: 

>[!danger] Depends: 

The thing that is changing is the threadId that is in focus.
We should cache the thread so that we always have a snappy response.

If the threadId === backchat.id then we show the backchat UI over the top of everything.

We always show the latest version of each thread.

If the thread is not present in artifact, then we clear it and roll back to the default thread that came with backchat.

How will sharing work with these ids?

Are everyones threads shareable ?

If we had the actorId and the threadId, then we could share anything.

We could make shorteners that make friendly links for sharing, once we move to private by default.

When we load up another actors threads, our backchat should be able to inject into them.
Backchat would know we were asking for a thread that wasn't within our actor.
So we would switch our focus where backchat would be called requesting a focus switch to a remote branch, which would pop up the backchat dialog.
Then once the focus has switched, after the thread was validated, the UI switches, and there is now a symlink in our directory pointing at this remote thread.

Backchat could show a loading UI showing it is trying to load a remote thread.

So the thread is the unit of history - whatever thread we are focused on, we will always show that thread in its most recent state.  To view it at a prior state would require a direct command to backchat, and the thread would be limited to a specific commit.  So an extra optional parameter on the hash which loads the thread at a fixed commit rather than head.  Then doing something at that point might fork ? or might require an explicit rollback ?

Backchat could copy the thread to a new thread, which is why the threadId should not be stored in the thread itself.

So no matter what the location of the thread, it would ultimately a threadId inside of this actor.
But then sharing it again would be a different path, since we would make a new threadId ?
If there are collisions, then we need to just make a new name, which is genuinely random, that just points to the other place.

If an actorId was given in the hash url that isn't our actorid, then we make a new thread in our dir to represent this thread.  We always target threads in our home directory, even if they point to other places.