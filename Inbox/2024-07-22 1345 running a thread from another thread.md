
>[!tip] Created: [2024-07-22 Mon 13:45]

>[!question] Targets: 

>[!danger] Depends: 

For example, driving a test.
The driver is given a list of responses to put in to the bot, and some expected output to appraise.

It then starts a new thread, but does not switch the focus to it.  It offers a link to a new tab that can be used to watch the thread run.

It calls message passing functions which show in the UI as such.
The UI of the slave thread would see these messages as coming from the parent thread ?
The thread itself would look like an actor ?
So a thread is an actor of sorts ?

The thread can be clamped, such as the operator having a restricted set of agents to choose from.
The thread has reference internally to its parent thread.

So we would want an automated exerciser, that as we tweak the prompts and functions it reruns and shows us the result, possibly appraising and scoring for us ?

Be able to issue meta commands, like truncate, where the thread gets wiped back to a previous state so you can rerun it.  Optionally branch in git ?.
Clone and restart a thread as a new entity ?

Make a thread comparator tool, so when driving remote threads, then we can compare to known good results, and possibly select a new favourite, or new sections of favourites.

Then, running a remote thread can call other remote threads, which gives us leverage.