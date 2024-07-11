
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

Threads can have summaries, which can include a list of topics that gets continually updated.

If the top level app contains a focus marker, that tracks whatever thread the UI is currently focused on.
If this goes null, then we use the backchat supplied focus ?
back and forwards pops and pushes threadIds into history.
Cancelling backchat is the same as switching the userside focus
Serverfocus is the last thread that the server side backchat connected to

? what happens if serverfocus switches while the userfocus has moved ?
? how can the user rejoin serverfocus, and start tracking the serverfocus ?

Whenever the user is on the current serverfocus, then changes to serverfocus will be applied to the UI.  If they were back in history when this happens, forwards history will be overwritten.
Or, you need to be at the tip of history, where serverfocus is being added to, and only if you are at the tip, will you be pulled forwards by the serverfocus.

If you enter something into a prompt while back in history, this will clear forwards history and you will now be tracking serverfocus.

Backchat would let us subscribe to the serverfocus.
When it changes, we push a new item on the history.
back and forward just sets the focus different.
If we are currently at the highest state in history, then we move ourselves forwards.
So have a flag that is at tip, and if we are not at tip, then do not track the serverfocus.

Same sticky setting can be used for scrolling to the bottom of the page.
If some new content came in AND we are scrolled at the bottom of the page THEN scroll all the way down.  Otherwise wait until the stickiness is restored before tracking page bottom again.

When closing backchat, need to cancel the mic from running.

If the user closes backchat, this should not change history state.  So forwards and back would keep the same movements.

For each step in history, we could store the backchat and the threadId, so the user can toggle between them, with no changes ?

So container manages the hiding and showing of backchat, independent of what the focus is.
One level higher, at the App level, the focus is determined from the history changes and the serverfocus.  Serverfocus changes always pushes onto the stack.
App is always passing down the backchat and the target threads, so no need to show focus, just show if backchat is focused ?
But then we need the last focused item, which sits behind backchat.
So backchat is never the focus, but it can be showing

The prompt needs to be targetted at the given threadId, be that backchat or focus.

Make a test rig that modifies the thread in the page each time prompt goes up.

The only thing that changes history, is when the user triggers the prompt, which will cause a new history state to be pushed, and now you are at the tip.  Then, if you're still at the tip, when a new focus object somes, that is pushed onto history too.

History navigation might highlight what the activity at this point in history was, by tracking the message commit that was new at that point and scrolling it into view.