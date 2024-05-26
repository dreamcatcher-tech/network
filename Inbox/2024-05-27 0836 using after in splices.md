
>[!tip] Created: [2024-05-27 Mon 08:36]

>[!question] Targets: 

>[!danger] Depends: 

Also need to request a specific splice.

Should make catchup of missed splices be the client side job, not server side ?

Clients should be concerned with the latest splice only, and it should be up to them to catch up.

If after is not found, just return the head ?

The best design is to remote the notion of after in splice requests, only allow streaming the head, and provide a means for exact lookup to the clients.

Also recognizing when the db has been reprovisioned seems useful too - just something to restart the polling from scratch.