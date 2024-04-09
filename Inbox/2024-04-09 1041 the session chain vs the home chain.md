
>[!tip] Created: [2024-04-09 Tue 10:41]

>[!question] Targets: 

>[!danger] Depends: 

Should all the repo operations only be possible inside of a session chain ?

For testing, can we make 

So the issue is, we don't have a base chain currently.

Cradle boot needs to start a deployment chain, which can be used for repo wide checks.

When the cradle starts in an isolate, it has a default chain that it loads.
When requests come in, it routes them based on the session auth provided.

Because the cradle sets up listening to the queue, we shouldn't make a new one for each isolate.

But, we might start the pure listen system, and then start up a client separately ?

Make two cradles - one is the queue listener, the other is the queue dispatcher.

Cradle create params would say what the root chain was ?
Web should ask for this from the server ?

So the cradle has a server client model too - the server is the queue that starts up, the client is the means of entry into the queue.

Deployment chain is stored in .env vars, and we include this chain in the checks ?
If we can't pierce in because the deployment PID was wrong, we make it ?  Use the repo lock function to create on.

Then all user chains are children of this one ?  Are they branches or full blown repos ?

Admin view shows all the user chains, if you have permission to interact with the deployment chain.
Taking a backup is downloading the git repo of the deployment.

Root chain would have top level balance accounting for all its children.
Any given chain has to pull new credits from its parent, so it gets an allowance, and then needs to do a merge to get more credits.  If the credits go stale, then need to merge to top up.
Can use a little db field to track all this in realtime, so it can have magic coordination type of thing.

At what point do we eject out and have just a pure db ?
Since a pure db is not repeatable, and the actions are not lockable, never ?

The deployment ulid is always the same.
Creating a user should be the admin user by default.
The password for this should be in env vars ?

At boot, make a root chain which is only there to perform supreme admin commands, and to create new user accounts.  A special root user is always created, giving access to the system.

System chain represents the execution boundary the system has booted in to.
Admin chain represents the first user, who is the super user, and can add other users, provision new branches.

? How would I authenticate in the test environment as the super user ?
Should making users suddenly be quite important ?
Can we launch with just a single user, and anyone can join ?
Is there a shortcut we can have in the meantime ?