
>[!tip] Created: [2023-11-04 Sat 07:56]

>[!question] Targets: 

>[!danger] Depends: 

Set up AWS docker containers as network nodes that make libp2p connections with clients.
Set up lamba plus s3 / dynamo as the storage for a kv store.  Use s3 for blobs perhaps.

Docket maintains the p2p links and handles the authentication checks for pulse requests.  Retreival of pulses is done using lambda functions to process ?
When a new interpulse is received, it is processed using lambda function calls.
Locks are held by dynamodb with liveliness timeouts.

Idea is that we should be able to handle very large load easily, and each docker container should be able to handle large load too.

We in effect make the public chain work using a centralized version.  We supply gpu resources thru this chain, and we work towards making this central chain fully decentralized.

The goal is that it never tells a client that something has been done until it has definitely been done.

We could make the client connect to several docker nodes, and in fact receive gossip about new ones, and then only when multiple nodes have acknowledged its response does it stop trying to send it in.