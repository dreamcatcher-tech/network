
>[!tip] Created: [2024-07-26 Fri 09:20]

>[!question] Targets: 

>[!danger] Depends: 

Saving files to the parent branch seems essentially the same as writing a bot and running it.

Then being able to push and pull from github.

Running it in a new thread seems different to just running it on the current thread.

Switchboard acts as safety so the bot can't go too crazy.

? How to save an agent, then run it, but in a new thread that is controlled by the parent ?
Start a new thread in the parent branch.
Copy over the updated agent that we want.
Configure that thread as being controlled, by way of permissions, so only we can talk to it.
send instructions to it, which might be canned responses that we want to drive.
Could set up another agent, running in a another thread, or a drone process.

Want to not have child threads, since gets very difficult to manage.
