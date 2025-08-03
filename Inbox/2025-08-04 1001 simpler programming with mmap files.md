
>[!tip] Created: [2025-08-04 Mon 10:01]

>[!question] Targets: 

>[!danger] Depends: 

the ideal computer, I wouldn't have to worry about storage, I would treat everything as ram.

lmdb provides a great read experience, since it is direct access to the file as tho it was in ram.

but writing is still async.

Be great if we could treat writes as synchronous too, and we can optionally await a flush.

all the gymnastics we do to get around storage and commiting could be removed.

we could make it so that saving was bound up in consensus, so gaining consensus treats the async flush to disk as just part of the consensus process, and until that point, it's all just in ram.