
>[!tip] Created: [2024-01-13 Sat 20:00]

>[!question] Targets: 

>[!danger] Depends: 

When a process makes a call out to another process using the IO system, that foreign invocation should have the same view of the filesystem as the original invocation.

It should be an active choice to pull in the state of things currently, since this opens the door to concurrent modifications and might have altered the callers decision to call, so it should be in its own world until it finishes or explicitly asks.

It could ask to sync only a single file.

It could await a lock that gets put on a file, so that it can be guaranteed of no modifications.

It should only merge back when all the IO actions of all children have been removed, since they would have been re-received by the parent process.  Then when the parent merges back to main, it is updating the IO channel with a reply, and the recipient will blank it on the next commit.

Need something to do the continuation once the foreign function has completed.
If there are new replies, then IO should invoke ?

New actions, but also new replies.
When replyIO is called, that should trigger the continuation.
So we need some hook info to get back to the requesting process ?
The requesting worker should have been cached, and should have registered its promises against the request it made, so resolving this request resolves its promise and it can continue.

If the worker was torn down and needs recovery, then the running of the target will realize there is no running requester, and so it will rerun the caller to get it to the state where it made the call and has registered a promise with the remote call, and then it resumes from there.

We need to register what calls went out to other io queues so we can replay and make sure nothing was stray.  However, with isolation, everything in the io queues is due to the parent process, so can figure it out that way - we just don't have a sequence number from the caller that we can review.  So if we stored an array of calls made out, then we can use these to track like hooks to ensure the same thing was done again, but we can also use this as keys for the promise map ?  Might be able to use commits as the means of getting sequence ordering when replaying.

When verifiying, all parent processes would show up as running so they would have been booted first, so the promise map will always be valid.

So in this sense blocking is not related to the execution of processes, they can span multiple blocks and stay loaded.  They might get unloaded if they took too long, and they should be able to rapidly spin back to where there were later, if the devs stuck to good programming practices, which we can AI appraise.