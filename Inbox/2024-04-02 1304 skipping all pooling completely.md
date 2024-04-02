
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