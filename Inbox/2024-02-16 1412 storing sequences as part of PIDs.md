
>[!tip] Created: [2024-02-16 Fri 14:12]

>[!question] Targets: 

>[!danger] Depends: 

Then we could handle duplicate message delivery.

We would know if we were an echo, since our sequence number would have been processed.

Prefer an algo that avoids relying on key expiration, and that leaves no dust in the DB.

Counters moving forwards are good for this.

Parallel and remote should be the same thing.
## Parallel reply
apart from initial setup and closure, this should be exactly the same as serial processing.
Setup is turning the origin action into serial processing mode.
Upon serial reply being done, if origin, 

On respond to origin action, do a merge back in.  If the branch is permitted to daemon, then the branch can still receive dispatches.

Might be easier to work on pure git based functions that are independent of queues and locks and other such complications.

To get pidlock is to have the right to order the pool items, by way of a commit.
This includes outcomes.

if qmsg had the commit it came from, it could use this to check it wasn't a duplicate, since 

Get fs, which has a certain version assosciated with it, then get headlock and confirm the version.

Could assign sequences before messages are dispatched, so we can do checks on the messages ?  Or send with it the tip commit we know about, so if this is not the tip when we get to processing time, we should check if we are included or not.

Locking and message duplication is not part of git, so should be kept separate.
Multithreading is also a separate concern, and so an interface should be constructed so we can run each domain component independently of any others.

The reply mechanism for other branches should be the same as the user dispatch awaiting.
So if the user is a dedicated branch, then we can just keep it updated like any other.  Watching for outcomes becomes an independent system.

Reply seems similar to merge - maybe they are the same thing, but a merge carries some extra branch info with it, is all.  Reply to self carries the same branch info with it.  So all replies could carry their pid, and all get treated the same.

Holding io inputs until the output is selected could allow us to gracefully handle double message delivery.  Branching can use the PID to know what input item was.  If it gets the latest git repo and finds that the input has been removed, that means that it is a duplicate message and it should stop immediately.

Tracking a pierced action is a different thing than tracking a branch action.
A pierce action should be tracked using the kv store, so that watchers can

We might be able to efficiently walk git if each action was its own file, with its own id as the name.  Would make watching piercings much easier.
Or, if only piercings were separate files, to allow efficient watching ?
If a pierce got back a sequence number, then it can walk the commit log to find the outcome, if it is missing.
So if inputs are removed only after outputs are given, then duplicate message delivery is simpler.
So watching a pierced action should watch until a sequence was returned, and then from then on, watch that as a separate long running request, which can include what commit you have checked up to ?
Beam down the latest commit hashes while you are watching

Leaving the inputs there also allows efficient tailwalking, since when the commit is done, we can queue up serial actions and always know which ones are still waiting by what is in the io file still, without excessively walking the git log.
If there are no other serial inputs, then we can start immediately.  Otherwise, we can tell it to wait for the highest outstanding item.
Or, could a commit be required to be able to process the next batch of serial processing ?

Unify the queues again - tail waiting is an implementation detail, and shouldn't affect the data structure.  It must be independent of the commit record, else will choke.

Pierce rules of IO should still apply here.

Branch start should atomic check that it is the first to start this branch, after it gets the lock.
Pull in the parent commit, get the action out, copy it over, since need to track its execution.
Begin execution of the action, as tho it was a serial activity.
Queue should decide that it is close enough in proximity, so it will duck under the queue.
When the reply comes in, be sure to act accordingly

Pierce watcher is a postcommit hook, which looks at all piercings that were concluded, and then updates the kv store when it finds something.  This might use the broadcastchannel.
Watching requires the commit and the sequence.  Issue is the timing of the broadcast channel being leaky.
So if you were watching, write down a kv watcher, atomically pegged to the latest commit you checked up to, so that if a new commit comes in, it will definitely know that you want to see the outcome.  It will delete the key you put in to watch, which will trigger your watcher, which will make you get the latest commit and walk backwards until you have your outcome.  The latest commit would tell you if your piercing had completed or not.

Origin actions - when a process is exec
Test for repetition of execution, and when we start, we know that we have to walk the logs and get where it made external requests - these have to be the same - if we have them, we will feed them back in to the system.

Purest way of watching is to watch for commits to update, then read the commit in from disk.  Whilst expensive, this is the cheapest in terms of coding and synchrony, since it rallies around a single sync point - the commit.  The HEAD update value could include the current tail for serial outputs, and the resolved parallel actions, so we can know if we should fetch the whole repo or not.   Again the queue should decide if we can process this locally, so we would be using the cached view of the repo.

The pointers in git should probably match our own.  HEAD and the refs might matter.
Refs would be like procman.