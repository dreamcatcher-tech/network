
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