
>[!tip] Created: [2024-10-12 Sat 14:15]

>[!question] Targets: 

>[!danger] Depends: 

These are quite likely to be from the pierce watcher pulling in io.json objects.

The error is that the digest starts before the test starts, but then completes in the middle of the test.

So we need a way to quiesce, so we know the engine has settled before the test proceeds ?

So whenever backchat starts up, whilst we can start doing things immediately, we should, inside tests, wait for the first watch operation to complete.

Once this is done, then we can remove the attempt at an extra delay in engine.stop()

Funny that it always seems to happen inside the guts branching test tho ?

Not worth fixing this until we change how pierce is watched, since this problem might go away then.  Might lighten up the load of watching a lot.