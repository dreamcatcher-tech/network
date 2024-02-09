
>[!tip] Created: [2024-02-08 Thu 09:19]

>[!question] Targets: 

>[!danger] Depends: 

Watching keys is slow.
Broadcast channel is fast but doubtful reliability.
Queues are fast and close to the db.
Watching keys might only be slow due to db RTT
Writes are $++
BroadcastChannels clog if make too many, so one per isolate, or pid seems better.
## Remedies

Return back the versionstamp and key that the dispatch entered the db with, then can use a combination of announce and also key polling then watching to know when this has been processed.  Or, generate a ulid that is passed with the item.  This then is written as the pool, and passed back to the enqueuer to watch for.  This is more reliable than broadcastchannel.

All ops that use the db need to be done via a queue to get close to the DB.
Use atomics with retry to get the lock on the head.
Output updates should send a message back so the sender can close the channel.

Output should subscribe to the broadcast channel of the branch, and then filter messages it doesn't need, then disconnect.

Priors should not use watch - triggering the next action should be with a queue action.  The current action should actively trigger the next action to start.  Unless we want to use poling on the prior key until it is available, which might be faster.

Little benchmarks on the raw performance of deno deploy kv.  
- time to do a single queue round trip
- time to commit to the db
- watch trigger time
- watch trigger time as a function of write latency
- kv read and write count for a single dispatch
- rw counts as the concurrent value goes up, like 1 action vs 1000 actions

Make a broadcast channel for each branch that announces outcomes each time there is a commit.  The channels are closed when db is stopped.

Pool should probably be a broadcast channel where whomever has the headlock tries to process everything it heard on the channel.  It just keeps broadcasting periodically and trying to get lock until someone says it got included.

If you have the headlock, stick around until another pool message is received, since that might be your chance to keep working without burning the lock write again.

Tailkey should be done by using enqueue so that each action enqueues the next one.
Or, per commit, execute them in an array of all the inputs for that commit.  Isolate running could be done by a REST call to another part of the system.
## Possibilities
Make a broadcast channel that is all about a particular branch, then leave it open - use this to coordinate lock contention.

Artifact API should be merely a queue lobbing thing.

Outputs may be better as reading the commits raw, and checking out the io file each time there is a new one.  The PID broadcast channel would signal when a new commit had occured.  Could also message about outputs.

This seems better than setting up a single use channel, which is susceptible to missing messages.  To use broadcast, we should never rely on it, since things might stall.

Output could just poll for a key that signals done.  Most reliable, probably fastest.  If it just keeps polling for the commit hash of the head, then when a new commit is received it just looks in that for its results.  Can do backoff until some slowness threshold when watching becomes the better option.

Eg: if the output hasn't been found using polling with backoff in the first 5 seconds, transition to watching.

If the nonce originated off system, then that system can re-request an update, which would start by looking for the commit that included our dispatch, walking backwards, returning the output if it finds it, or pending, or repooling it if not processed yet.

Outcomes could be handled using splice subscription, so there are hooks and subscriptions that are handled, and outcomes are just another way to use that underlying feature.  Subscriptions to a file path are essential, and so subscribing to `.io.json` amounts to the same thing.  The outputs are given here, so we can just use those.

A subscription would be registered in the db, and then listened to using the broadcast channel.  Each time a commit occured, and subscriptions would be read and the messages  passed out to the appropriate channels.  While a file is being written to, we would be broadcasting out to any watchers with this splice type.
## Future
Something like amazon xray that traces the queue and produces traces of the queues performance that we can analyze to get gantt charts of dependencies and flows.

