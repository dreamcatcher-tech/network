
>[!tip] Created: [2024-04-02 Tue 13:04]

>[!question] Targets: 

>[!danger] Depends: 

What if we never tried to pool at all, and just did a single commit for each action ?

Branching would still be unfettered.
Pierce would be unaffected.

It would simplify the code astonishingly.

So then the only purpose of atomic is to ensure the action we want is processed.

So meeting midway, pooling is there if available, but do not do backflips to make it happen - treat it as a nice optimization if available.

So if no addPool option, and actions were only ever held in the messages, then we could just work to ensure this particular action was included in a commit.

The job is always to get a thing included in a commit.

The only way to add a reply to the pool as a result of a request atomically is to make the pools able to reject duplicates.  It would add an extra db write.

Could pending be done better if pool rejected duplicates ?

Replies are always atomic when received.

Could multiple requests be processed in a single request if no fs changes were made ?

Pooling benefits replies coming in, piercing coming in, serial replies maybe (if no fs changes).