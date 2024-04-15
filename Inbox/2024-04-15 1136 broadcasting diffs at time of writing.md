
>[!tip] Created: [2024-04-15 Mon 11:36]

>[!question] Targets: 

>[!danger] Depends: 

having a small change to a large file at high frequency is always going to be a problem.

File usage should be designed to mitigate this.

But ideally, when writing the file, the diff should be broadcastable at commit.

So, should a broadcast channel be set up, that only broadcasts diffs ?

So each commit, a full diff patch of all the changes is broadcast, then everyone watching can make use of it, and the broadcast will always be the same for all watchers.

So to read, first you listen to the broadcast channel, then you do a splice read of the latest diff, and then you keep watching for changes.

On commit, this patch should be generated as a non atomic operation.
If some are skipped, then it should not be fatal, as a page refresh should fix it.
Clients should periodically, say every 5 minutes, start the process again, and check they are at the current head.

So the request for a splice in the queue is really a request for a patch of a commit.  Start with an active request, then sit back and get the broadcast patches that come out each commit that gets done.

If you can actively ask for any given file, or any commit and get it, and the broadcasts are always the diffs ?

Or just broadcast a splice that has all the changed files in it, and then listeners can just reassemble as required.

One off channels are separate to the general diff channels.

Commit channels send out splices generated for all changes.
Listeners have to take what diffs they want, and deal with them.