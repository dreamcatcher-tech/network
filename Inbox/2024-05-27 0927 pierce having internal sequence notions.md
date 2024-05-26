
>[!tip] Created: [2024-05-27 Mon 09:27]

>[!question] Targets: 

>[!danger] Depends: 

Given that terminal is the only thing that gets pierced, we should be able to pierce with an external sequence or nonce.

This means that to know if something was executed already, we should be able to read the json file at any point, and then go do some lookups to find what we need.

We could us the ulid as the external ordering source, where it must be monotnically increasing.

We would track in the iojson what ulid we last processed, so a client knows if it should walk backwards ?

Or, the client should know that, if it knows it pushed something in, that it needs to walk backwards since its pierce is definitely there.