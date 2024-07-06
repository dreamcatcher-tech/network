
>[!tip] Created: [2024-07-06 Sat 11:07]

>[!question] Targets: 

>[!danger] Depends: 

When the user hits the back button, they are navigating the focus history of the backchat thread.

This should be quick, since we have the cache version of the page, and we fire off a request for any later ones if present, and start a subscription to them.

So flipping back would present the stale version of the thread, and then try load the later version ?

We could pull down the tree of the sessions directly, and look for anything that changed, then keep it all natively in sync ?

Or, just git sync the whole directory all the time maybe ?

The focus stack doesn't need to be stored anywhere, except in the browser history.

HEAD focus is taken from the backchat branch, but all the prior focii are in the browser history, just whatever was displayed - so if it flickered server side, then would not flicker client side, since it is only what the client saw.

If the back button takes you to the backchat view it would show the full current view, not the view at that time.  Seems no value in showing stale information.

backchat might not show when thread switching, since it might interpret and then do an action for you? or would it always show backchat momentarily while it responds ?

? What does calling an agent look like, where you want to do that in the third person ?
This is calling an agent as a function, which we would detect in the UI and decorate differently to a normal tool call.  You could tell backchat that you wanted to jump into that thread and talk to it directly.

? should a thread be upserted, or always created ?
booting backchat should optionally create the first thread
Backchat can be used to start a thread but also can start the thread using its ai tool calls

On disk format of a thread
- the path to the agent it was loaded from
- commits that created each message
- the commits of the tool call branches that occured