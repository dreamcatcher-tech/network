
>[!tip] Created: [2025-01-02 Thu 14:36]

>[!question] Targets: 

>[!danger] Depends: 

Remote repos are handled by push and pull, but we want to not actually download the whole repo, so we are acting like a browser.

A good rule is that the client should not need to know about the internals of git, so they shouldn't need a git library.

We then take on the role of a filesystem provider.

We should use urls to indicate:
* the id or dns name of the repo being fetched
* the branch to fetch on it

query params are used to do different things:
* watch => sends down SSE events when a new commit occurs, starting with latest commit
* latest => returns the latest commit immediately

POST
- objects that have changed on disk, receive back a hash
- commit (supply the commit object) - can only work if head is referenced as the first parent and all the referenced objects are present on disk
- ping - check that the server is alive, pass back auth status - if key is invalid it would reject the call
- createRepo ( name? ) - create a new repo with a random id and optional dns name mapping


push up the objects we want to update.
check if an object exists, since objects could be large, so we might not want to update them.


this seems to be another module, but where would it fit in exactly ?

If we define an ts interface, then we can bridge it across a web interface.


???? is this interface the same as the NappApi interface ?

The mock server should be supplied as part of the live server, or even as part of the interface tests, since remote or mock or files shouldn't matter - the client would look the same.
Should be able to supply a mock fetch so that networking is avoided during the tests.

In the main napps interface, of the artifact api, we should be able to do a bunch of commands, and only when we're ready, send off an actual action.  So opening the branch can be done using any kind of access methods.  The protocol could be bound up in a multiaddress, using our own protocol when it is direct between repos, but it could also be using urls to communicate.  It could be a consensus swarm, so lots of ways.

Diff is important, as well as getting the metadata.

Equals, where we put in a filename and compare it with a file that we have in the snapshot.

flush is good for performance, so we can begin uploading files that have changed, even if we are not ready to commit ?

The repo connection object could include a range of addresses for how to access it, but it would always present the same interface.

Authentication can be different each time as well, sort of like multiaddress but for auth and connectivity.  So we would have an api at the end of the interface, at a url, with a given key being used to connect to it and authenticate.

Might not need to use the queues in deno, since we don't need to do any actual tasks ?  Heavy lifting is using b2.

branch can be awaited, or not.  Branch can be specified with config option to allow the remote side to generate some parts of the name, so we are guaranteed not to have a collision.

If you do a bunch of operations and then the remote comes back with a name error, then what ?

If you don't allow some freedom to choose a free name, then you must await the operation before continuing.  Or, just make it awaitable anyway, and it just goes faster if you allow some freedom.

