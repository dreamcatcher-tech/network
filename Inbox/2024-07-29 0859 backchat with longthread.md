
>[!tip] Created: [2024-07-29 Mon 08:59]

>[!question] Targets: 

>[!danger] Depends: 

Seems there is still a need for backchat ui.
We need a way to locate any other app we want to start a thread in, since in most use cases, a new thread is always the same, but for us, it is very different.

So rules are:

- when passing thru the backchat thread, we always ask the question "does this sound like a call to backchat, taking in to account the previous set of messages that have passed thru."
- if the ai query determines it is summoning backchat, then the message is redirected, and rephrased, to go back into backchat
- backchat is the thread used to start other threads, and it does have several agents available for it to use.
- The checker for backchat can also do the choosing of agents for the thread as well
- if we determine that

? should the backchat thread be with HAL ?
Should it be able to do arbitrarily anything, with the only different being that it always tries to intercept ?

Steps:
- intercept the prompt in the backchat branch
- call the `once` completion to determine if we should send the prompt to the current focus, or back to backchat

Backchat could have some buttons showing the most recent threads we were accessing.