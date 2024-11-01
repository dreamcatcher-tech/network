
>[!tip] Created: [2024-10-30 Wed 16:22]

>[!question] Targets: 

>[!danger] Depends: 

IO handles transmission and execution, with replies.

This should be able to avoid any addressing overlap ?

So IO would be loaded with some addressing functions ?

IO might need a rewrite so it has different keys for its outbox and its inbox.  Outbox would then then have the commit messages inside it, so no separate storage.

So rather than tracking all this info inside of the request, it should be tracked in the io file.

Parents are just snapshotIds, which we can say can be any kind of string, since it doesn't matter so much what they are, so long as they are identifiable using the id.

IO would store an abstraction of thread children that it is managing ?
This keeps the supervisor structure intact.
The git based system is an abstraction, and it sits separate to the data that comes in from git, as execution should always be kept separate from data.
So whenever it wants to make a change to the data branch, it does it using a light touch method, where the commit gets made without pulling in the git structure of the execution branch - it just moves the objects around, and makes a commit that has reference to the execution info, but doesn't link the git structure to it.  So a tool can review the execution, but the data branch is unencumbered by the execution branch.  Here just the snapshot was moved around the place.

Pending would be part of the outbox, and the snapshots assosciated with each is stored here too, so the accumulator gets these fed in 

The datastructure should be the same between the accumulator and the pendings slice.

Then, the commit is just the id of the snapshot that we want to switch to, which the accumulator knows how to switch between.

api and accumulator should actually be the same thing, practically ?

Accumulator includes being given the local filesystem, and the actions.

When fulfilling things like fs reads, do not store them, just fulfill them live.  If they are remote reads, then if they resolved, you would fulfill them live, but using objects from the git object repo.

Is the accumulator useful anywhere else ?
Possibly the mock api gateway system ?
The accumulator is probably the entry point of the recorder for snapshot testing and recording

It never gets injected with resolved promises, only with open requests or settled requests.

Want the fs piece split in two - the backing store and the live dynamic data.
For mocking, we can skip the snapshot part and just use the ram shims.

FS should be separate from git, as this is just an implementation detail.
We could make the same dynamic layer underneath, simply in read only mode, and so we could store these things in ram and connect them up.

So when we want to use git, we just swap out the interface to the dyanamic thing.

FS needs to have a layer that takes persistence commands, where the live ram version is pushed down to deeper storage.  The snapshot id is passed up.
FS needs to know about snapshot references, so that it can move things around by their content reference id, rather than their full value.
How that reference is modelled should be freeform, and it doesn't care about the underlying implementation.

Then we should make a very simplisitic version underneath which just ids everything with a counter.

Instead of making a new accumulator each time, might be simpler to insert directly into the running one, if it exists ?

Reading from the filesystem needs to be fulfilled at runtime, and would only happen to the running accumulator, by fulfilling its promises, so that the filesystem requests are kept as instructions only, and not data.  That data is always fulfilled at runtime, live.

OR should we just implement what we already have, get it working, and then make changes to the system after that ?

But pulling out the distinctions might not be possible without a refactor ?

Internal channels can be the same as the accumulator.

Can we make accumulations for actions that need to close immediately ?

Making everything be the accumulator is an improvement, so we should do it.
What about transporting actions by just the reference to the commit, so they get reconstituted based off of git, which will hopefully hit the cache.

Ideally we only need to send a single trigger action to the recieving chain, that there are messages, then they need to go open the io file to get those messages out.

That merges the accumulator and the api, so we are actually making a disposable api object, which stores promises, and gets injected with accumulator objects.

When an action is output that is a read of something local, then we fulfill it and resume execution.  We could stop execution at any point tho ?

So the io channel is just a tree of accumulators.
The api is just a wrapper around the accumulator.
The exe is the compartment loader and the io channel object.

io represents a single thread of execution, deadling only in messages and snapshots.  It is what creates snapshots.
Still want the ability to only execute one incoming action at a time.
Makes more sense to only allow one trail to be running at a time, so we are in effect single threaded.  We can do things that spawn new threads instantly, since this has no affect on the local state.

Piercing
Addressing externally is the responsbility of that layer, not of the internal system.

Overall issue is that layers of addressing details have been flattened into the request objects, and the io channel is also flat, which makes it hard to reason about, error prone, and difficult to iterate.  It is tanlged up with addressing and snapshotting.

What if requests was an array of accumulations ?
And so the accumulation would be defined recursively ?

Gives us a clean way to see the impact of any given action on the broader system.

Internal id of actions should be opaque and not visible internally.  IO just needs to know how to attach incoming actions at the right place in the structure.  Exe cache would just hold the api that was inserted, which holds the promises that it put in.

Layers are:
1. action layer
2. Addressing layer
3. snapshot layer
4. exe layer
5. pooling
6. queueing

? where should process types go, like when we want to spawn a branch or not ?

DX is clumsy when trying to make a thread and then talk to it.
So threading should actually be a separate thing, and should return a target api object to communicate with the created thing.
The thing could be either created or created upon first action.

threading and remote access becomes the same thing, with the only change being threading starts a new thread, and then returns back a remote interface targettged at that thread.  Then thread lifecycle actions can be sent to it, which get processed differently.

Wrap in the self taget, wrap others in the remote target address.

Should the mergeReply actually just include the filesystem snapshot that came back with the reply ?  Rather than passing back the whole git filestructure, just pass back the filesystem snapshot.