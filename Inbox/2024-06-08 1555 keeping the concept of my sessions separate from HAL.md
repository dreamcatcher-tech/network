
>[!tip] Created: [2024-06-08 Sat 15:55]

>[!question] Targets: 

>[!danger] Depends: 

Currently we have that each actor is given an actor branch, and then they make sessions as children of that.  But then we let different actors come in on each others sessions.

So if all sessions were flat, and the actors tracked which branches they created and controlled, this might be less complications ? 

Or hoist one more level up, where the bot is its own branch, then the bot has actors, and sessions ?

Or a bot could be its own repo ?
HAL is the provisioning system, but when it has made a bot that people like, that can be flung off into its own repo.  HAL can continue to work on it and update the master branch.

So HAL is used to prototype bots, and then when they're ready to be published, they can be set up in their own repos.
Can run bots in HAL using a dedicated url, but this can be moved to be independent eventually.

An actor listing their sessions is meaningless since the actor could have been involved in many other chats they did not create.
This also avoids having to move sessions once an actor becomes authenticated.
so the ownership is stored in the session itself, 

Also passing ownership of a session around would invalidate any addressing info in the PID.

If we have a shared set of files, then we have a set of bots that can work on different aspects of that set of files.  The CRM is such a system.

How would shared files be handled using HAL as a test bed ?

Chatting with a session itself needs to be done in a new session.

Any branch can potentially access every other branch in the whole network.

Bots should be listable in a store.
Hierarchy of bots should be listable, where a composition of different bots is provided.

Marketplace segmentation using drones and agents, where the drones are intended to be used by agents, but agents are intended to be used by humans.