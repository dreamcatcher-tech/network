
>[!tip] Created: [2024-09-10 Tue 16:42]

>[!question] Targets: 

>[!danger] Depends: 

To allow a url to load anywhere, we need to know:
- the actorId
- the threadId

From these things, we can load up the remote file.

? how will this interact given that you should not lose your base thread ?

Present this thread as a remote thread ?

Within your base thread, you could say that you wanted to make this thread your base thread, but that might be dangerous ?
You could interact with it like it was your base thread.
Could make it your base thread but with neutred permissions ?  This might be just setting a config var to make it appear like it was the primary thread.

Your page would load as usual, and then your internal backchat thread would load.
If the hash fragment specified something that wasn't your target thread, then we would set the target to be this hash fragment.

activate the deferred thread view anyway, then proceed to load it.
Maybe activate a summary of what this thread is.

