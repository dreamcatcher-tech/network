
>[!tip] Created: [2024-09-02 Mon 16:19]

>[!question] Targets: 

>[!danger] Depends: 

To know if backchat got summoned, we need to pass in the whole thread of what the remote thread is ?

Or at least the last few messages of it ?
Or the last messages since the last summary that got mentioned.

? Where should the output of the function go ?
Would heavily pollute the thread if it was there.

In the UI, we almost don't want to show this debug view ? But it could be shown if a flag was triggered in the thread object, or if the UI decided it wanted to show it.

It should be in the base thread, and it should call up the contents of the remote thread.

Then switching to a different thread is not escaping, but is a form of escaping.

So summoner becomes a longthread call, which then changes the longthread thread, perhaps in a hidden way.
Hidden means the summoner functions are stripped from the thread before being sent to the api ? or perhaps just ejected in favour of summarizing anyway.

If the thread is currently deferring to another thread, the summoner runs using the complete thread converted to api params.

If the thread is direct or undeferred, then it will attempt to determine if we should switch between other threads that are in scope.  If nothing found in scope, but we think they might mean to switch to an out of scope thread, the thread searching agent is called in the base thread
