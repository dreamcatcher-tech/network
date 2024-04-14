
>[!tip] Created: [2024-04-14 Sun 20:42]

>[!question] Targets: 

>[!danger] Depends: 

Load up a test where we cause a large number of commits to rapidly occur in an isolate, and see how long it takes server side and client side to catch up.

Suspect we might have a latency issue between splices taking too long to rebuild when watching for pierces.

We can either do parallel read calls, where the calls happen in parallel.

So the requests all get started as soon as the watch triggers, regardless of whether prior ones have stopped or not.

The trouble is that the commit watcher is in a distant isolate, the rtt is murder.

Broadcast channel for commit watchers, with db as a backup ?

Reads of the git tree seem to be not using a cache for repeat reads ??

Raw commit triggers are being delayed by the reading process.

Make cache be able to be turned off to confirm with testing

Use bcast channels with decorated data from commit as the watcher.
This is faster but less reliable.

Use broadcast channel to populate caches in other isolate zones ?

Watch including pierce change info is the fastest possible lookup, since
Or, for pierce watching, out of order doesn't matter ?

Pierce watching is always intensely with a specific chain.
If there is info to show, we have to go get the i

Pull down the full repo all the time ?
Pull it down to the client ?

Broadcast outcomes, as well as do reading of io.json as backups ?
Only read ones where the pierce results have occured ?

Store the pierce outcomes in the head watch field, so as soon as the dbwatch triggers, the outcomes are available.

Make a dedicated key for pierce outcomes to be written, which can be watched.

Really want to make a single read and get all the dependent keys back too.

If a watch is triggered then we can get individual files updated, to speed up the watch responses.