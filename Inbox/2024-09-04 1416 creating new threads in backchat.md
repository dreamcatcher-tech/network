
>[!tip] Created: [2024-09-04 Wed 14:16]

>[!question] Targets: 

>[!danger] Depends: 

Return some params from the thread that gets called.

Then the backchat isolate does the thread creation.

If it was a stopOnTool call that was made by the current thread, then we would 

So now how would we switch back to a previous thread ?

Just send back a signal to tell backchat to do whatever we want, like change focus or make a new thread.

Then we can have some behavioural tests that exercise the system to be able to do these maneouvres.  The NL system would exercise it fully, but the basic mechanics would be worked out using these manually scripted tests.