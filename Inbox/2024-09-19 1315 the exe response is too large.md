
>[!tip] Created: [2024-09-19 Thu 13:15]

>[!question] Targets: 

>[!danger] Depends: 

Suspect that this is what stops the processing from continuing ?

So every time a message gets enqueued, we have to be aware that it could be very large.

Basically everything except pierce is already inside an io.json, and so it should stay there and be read in.  

This means it won't be leaking non encrypted data everywhere.

Encrypted messages might need to be encrypted before being enqueued, else leaks a lot of transient info.