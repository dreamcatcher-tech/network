
>[!tip] Created: [2024-01-30 Tue 10:11]

>[!question] Targets: 

>[!danger] Depends: 

pulling down from github seems abusive, since we would hammer the api.
Also would be slow.
Running a local git server can be faster ?
Ultimately we would want it running on deno kv ?


Whilst a full repo is large, just like a full blockchain, each client only cares about a very small subset of these.  Can we use deno kv to store these little snapshots, or 'commits' and the workingtree in a way that they are easily cacheable ?

Advantage is that they do not change, so can be referenced by hash quite easily.
Our DSL should take advantage of this, and fetch things by hash asap ?

Can keep a memfs copy around ?
Use the isolate memory to store it, if the isolate is still around, then use memory to transfer ?
Store it on s3 and decompress it ?

The deploy step could store the repo in the isolate, so it always has the nearest copy of it.
Each user still must have their own repo, as this is their data sovereignty.  We will free them of github in due course, but this is what makes their data theirs.

We could provide a blobcache service that had some kind of backing like s3, where repos or objects were stored in there.  Could even be just instances of deno running sql so it is kv store compatible.  For now, we should just pull down from github.

Use the browser as the persistent data store ?  

Broadcast channels and key waiting allow multiple browsers to know when a new commit has occured.  Also allows triggers on remote chains, between repos.

Each isolate would keep a local git copy in memory, and then would push it when all changes were complete.  It might write to disk if things were getting large.

Ultimate is a kv store in deno that holds git objects.  This could push out to ipfs for some tasks.

Isolate pulls from gh, compresses, sends down to the browser to store it.  Isolate tells it when to dump it and get a new one.  The isolates share in ram their copies from one another maybe.  When the browser pulls it down, it always says what commit it is up to when it talks to the cloud.  Cloud keeps it updated.

If we had a fileserver that had working copy fs and accessed everything by git commit, this would be the ideal storage layer for the isolates to interact with, like a remote passthru filesystem can be presented.
The isolates provide compute and net, but they don't do file storage.
The kv store is the best way to do this.

If we stored by commit, and then compressed what was in there ?
Want to represent git natively on the kv store, since the hashes are keys.

A pure kv store implementation can provide trigger abilities to watch paths and chains.

Use s3 to store commit snapshots.

Do we even need git, if we are just running isolates and helps, and user input ?

Making a separate set of isolates that act like a persistent filesystem ?
So reading from paths etc would be handled by this set of services.
They could be accessed using browser or with clouds.  They could provide triggers.

If the user generates another commit, while a server side commit is in progress, the users side wins.
Force only one browser tab to be active in the session at once time, else hard to trace.

Store the commit hash and branch names of each repo in kv, and trigger based on them.
Then store the full repo down in the browser, so that the isolate can use the browser as its filesystem.

This way, access is always done using the users credentials.  For the isolate to operate, it has to retrieve info from the users browser via socketio or similar.

want things to keep running on the isolate side.
browser could send up a commit, or it could 

A datastructure called a commitslice.  Represents a commit with some changes at a given path.  Browsers can subscribe to these, and they can be streamed down to the browser on request.  So to show chat history, they would request the branch, the number of commits back, and a specific path they are after, and they would get that file as it was in the various commits, along with the commit metadata.  These would not be interactive, so just render raw text.

Splices also have their status, where they are transient, worktree, uncommited, hard commited, and their consensus levels too, later.  This means the UI can determine how to present these things.  The server is responsible for all the verifications, and this could be running on your own hardware.

Splices in a group might refer to prior splices by way of json patches.  In fact if the whole splice model was json patch, then when you request a range of them, you always get patches.  They should also be multi file aware, so the format in a filesystem path, and a set of patches for it.  Git is really just a system for managing patches in a sequence.

So the components are an isolate cloud, and a big ass low latency git server.
The git server is in charge of authentication, the isolate cloud has a small db for coordination

intergit communication still needs to be done.

Could use the github api to request the files more directly, rather than doing a git clone.

Firing up a new isolate we could pass a zip of the current repo in the request, so it doesn't have to make the request again.

Long running isolates could act as the network filesystem from github, so the delay is tiny, and data is efficiently transferred.

Use s3 to store a view of the FS at a given commit ?
Use s3 to store a zip of the .git folder at the latest commit, which gets updated whenever there is a branched added to it.
In browser this is just a blob store on the filesystem, stored by hash, with a single pointer to what latest means.
Need to check the PAT to see if they are allowed access to that commit.
So the cloud needs to keep acting as the user until all its activities are exhausted.

The isolate sticks around a while, so we can rely on memfs to be relevant here.  Seems expensive to offload and then reload, so probably it sticks around.
If we don't have the commit, or our commit doesn't match the latest in the kvstore, then we need to fetch from github.
Store the latest pointer in the kv store, and check it is active as a background task each time it gets accessed.

KV should be used to ensure jobs get done for sure when requested.
Do watch on kv keys, so we can keep our isolate around a long time.

The browser must have no git stuff, since it cannot do anything with it - its job is to cross the bridge into the cloud as quickly and lightly as possible.  What it reads out should be as light as possible too.

Decide when to push back to GH sparingly - like when a large io op has occured, when io is exhausted, when the isolate timer is exhausted.  Once the current task is exhausted, or some timer has expired, or when the filesystem has quiesced ?

So we make a recoverable method of getting the current working branch out.
We do super light checkouts, as minimal as possible.
This might be wrapped as a service at some point, so it has more control.
We do lightweight splice fetching to whatever the client requests.
This means the user can do some interactivity, some stateboard things, can do chat histories, but ultimately the browser is completely a viewer.

We should be able to run browser side tests almost exclusively as api calls.

We should be able to use a cli to interact with the system, which is backed by a gh repo.
For unlogged in users, we can store a zipped filesystem snapshot.  We can also merge this in with user repos periodically, which means fresh isolates don't have to pull much data.
Make a simple shell that shows chat history as simple lines on a terminal, and wraps some core commands in.
CLI is a great model to build the system under, since it avoids pollution with react concepts.
Start the cli, enter a prompt, stream back the splices that resulted from it.
This CLI should be able to show the stateboard.

Could use ink and do a stateboard kind of properly.  Could render the terminal in the browser first, with the only input being the prompt from the user.

Special files, like gpt output, could be streamed back live, so the client can piece together the file as it appears, or just make this the standard way of streaming down files to the client.  There may be some libraries for generating a diff between two versions of a json file. We can use json patch to do this, and generate a stream of patches that comes down, to avoid inefficiencies of sending the whole file each token update.

The stateboard can have some serverside rendering, like query building as the user interacts, which just changes what splices get sent down.

With splices, gradual loading and infinite scroll can be done, 
Splices are designed to be fetched with query parameters.

Isolates will need to give themselves an id - they are the owners of the current branch - and when they want to merge into their parents, they need to send signals to the owner of the parent (or become the parent) to make sure that merge conflicts are not created.  So they would make their commit, push to github on their branch, and then internally cause a PR to occur.  An isolate, once it is branch master, would wait for PR requests addressed to it, to know it has to fetch them.  Then ideally the PR would be in the kv store, or in some underlying store, to avoid calls out to GH.  Could use transient S3 blobs that get deleted once used.  Worst case we can pull in from GH.

Splices should be streamed down, and as changes occur, SSE should update them.  So if the stateboard is showing the latest, and something changes, then they should be made aware of it.  So any query response is always left open for SSE updates.

If we make sure that anything the server does could be done by a webworker in the browser, then we should be safe.  KV ops should be only for things that can only happen in cloud, like multiple isolates running on the same branch.  This can be wrapped as a lock coordinator, which is swapped out based on context.  So broadcast channel could be used in workers, or a central orchestrator, for which we use the KV since we have distribution.  

CLI moves:
must open a new session.
then send in a prompt.
then query for splices since the last one you had, which can be null, with a limit.
keep the query open in case someone else updates it with something, which could be notifications or other triggers, or a peer in a shared session (permissioned by gh).

Calling a prompt is like calling an isolate with some given params.
It would be either spawn or action, and would name the prompt.  So it is just regular IO that names the isolate it wants to trigger, and then causes it to occur.

The CLI is basically the whole app then, since the routes are merely calling that.  All the command line has to do, is be able to interpret the splices that come back down.  It might need to do some auth stuff.
## user input
post to a url on the server, or do a commit and push that up.
From blank:

Mid session:


Transcription:
Require they be logged in, post via the API, then continue the action server side.
This means a round trip back to make a commit is bad, so the input should trigger server side commits to take place.  The users view should be just slices.

anon user as in new user signup for customer portal:

## Stateboard showing a file
This is a special kind of splice, that can be used to show the results of several splices together.
A list of files can be a splice with multiple file paths, which may have been filtered by glob.

## starting a new session
user can either make a commit that starts a new session, or they can send up the instruction to start a new session.

## keep running after the browser closes
Isolates should be able to do a large number of requests, in a large number of branches, 

# V1
isolate pulls the latest commit from gh.
