
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

BUT must ensure that concurrent ops are really only waiting for a single thing, so we don't do the same op in parallel.

Write the io.json file down as a special path in the repo, where this is what gets watched directly.  So to walk the consequences of any given action,

Best is if we can push the query to something closer to the metal and get a response back ?
So if read became watch, and then read was an active request, which used the queue to make the query close to the db, and avoid all the round trips.
Benefit is:
1. works for any file
2. doesn't alter the git folder structure at all
3. splice generation can benefit from web cache speedups

Maybe broadcast channel ?
Use the queue to send in the splice request, then watch the broadcast channel to get the splice result.
Db watch triggers when head updates, then

Seems fastest, cheapest, and least complicated to make reading a splice be a queue function, and then have commits use the broadcast channel to send out updates when a commit occured ?

Having a db watch is the same as having broadcast, but with more chance of stalling.
Can we trust broadcast channel ?
Given it is only splice watching, is it acceptable to have the odd fail ?

First splice should be a request straight away, for head, then do the watch for all after that.

Read splice sends back on a broadcast channel, since this is safest ?
Or could write it to the db with an expiry ?
What is the recovery process ? should we timeout if something doesn't get done ?
Channel is a ulid

Informational head is of little benefit to the user.  Makes good benchmark results.
Splice reading should be a separate function anyway.

Broadcast io.json on commit anyway, since very common to listen in to.
Watchers can get given this splice by default.

Splice requests should always be via queue, with reply by braodcast, so that it can always do the catchup of the commits, since it is close the db and has cache access.

Hook into the commit broadcast channel, which includes the iojson file.
Then do splice reads if you want more files that that gives ?
Broadcast should not be skipping due to race conditions.

Inside the db is where the bcast channels should be managed.
As long as the db object exists, it should hold the bcast channels.
Delete branch should broadcast the end of the branch.