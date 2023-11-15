
>[!tip] Created: [2023-11-15 Wed 12:44]

>[!question] Targets: 

>[!danger] Depends: 

If someone is sending in erroneous actions, then it shouldn't cause a new pulse just to discard these.  They should be removed at the ingest interpulse level, and sending such actions should result in no further actions being allowed to be sent ?

But then the sender wouldn't know that they had been rejected ?

Next time a legit pulse is sent, then the rogue channel can get a response then ?

Set flow control settings on the channels so there cannot be more than a certain number of unresponded to actions in the queue.

Somehow have a way for the engine to execute them early, and if they error in any way, then send back the discards separately.

Send back errors that are signed by the root but not part of the tree - so they are treated like a fork that is left dangling.