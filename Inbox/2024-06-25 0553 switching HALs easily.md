
>[!tip] Created: [2024-06-25 Tue 05:53]

>[!question] Targets: 

>[!danger] Depends: 

How can I set what the HAL image used is ?

Store in my actor preferences for a specific bot ?
So in the actor repo, there is a flag for what my preferences are for this bot ?
Used for setting shared images, or setting the image itself ?

Is a bot now a free floating repo every time ? or is it a branch ?

Are bots now the only thing in the whole platform ?
If a branch is a bot, and a session is a child bot ?

So browser comes in an creates an actor account to go with its machine.
In here it stores preferences about bots ?
Store the bots that it has created, which can include forks.
So maybe the bot actually comes with the actor, rather than being a separate standalone thing ?

Merging the actor once authed simply moves the repos over
If the actor repos are executed by the host - trusted - then ownership changes can be done without notifying the child repos.
A master table could be maintained that pointed repos to their owners, and this can be updated outside of the child themselves. 
The child cannot change this, else they could send the bill anywhere.
Could store in the metadata about the repo, accessible by the host only, and so a move of repo writes a redirect and then goes thru all the repos and updates their pointers, then removes the redirect.

? is there any point in a branch being owned individually ?

Maybe each actor should be its own repo, not a branch ?

If we had the default being something broadly acceptable, then Smax can toggle what his default new session bot is, so he can experiment around.
Provide a catalog of known good bots that make good entry point bots.  These can include things like different orchestrations.

If you mess this up, you can call on backchat, who is always listening.

So backchat is stable all the time.

Maybe liferaft is always listening on any untested bot and when you sound like you want to exit, it will jump in ?