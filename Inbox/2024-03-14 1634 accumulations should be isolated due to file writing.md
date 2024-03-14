
>[!tip] Created: [2024-03-14 Thu 16:34]

>[!question] Targets: 

>[!danger] Depends: 

If an isolate writes to disk partially, then while it is paused waiting for some other outcomes, it makes no sense to have the disk change to some intermediate state.
So only on the completion of the action should the fs be updated.

Disk for each run should be loaded from the commit where it started from, to avoid any changes which might have occured somehow in another way.  Branch replies might have changed some file contents in the meantime.

BUT if the contents alter during a serial execution, how should this be managed ?

For this reason, it might make sense to make api fs interactions return promises, so that they can be marked as done ?  Means we might avoid some of the stringification overheads ?

How to transfer the changes on the fs along with the pooled response ?
Is there a need for the pool given that serial commits only occur at commit time ?
So could we bounce straight from a serial exe completion into a commit ?

We could do this and wait for the lock definitively, and then update the fs during the commit ?

Transient writes could be written to disk as a binary shapshot ?
Or, then could be added as objects to the repo, tagged as pooled, and then presented as memfs union.
Pooled objects present as available, but if their action gets rejected, the objects are cleaned up.

If they went to fs then can trigger transient watches based on this ?

Partial writes during replays ?
This could cause pointless noise.  So the accumulator should store something to avoid doing replays of writes that have already been broadcast as transients.
Just a count and maybe a cheap hash of the contents ?
or store the array of writes, with the paths in an array, and some kind of content.
? is this a db storage thing, rather than something on chain ?
Since this info only matters at runtime, it should not leave an indelible mark long term.

Simple solution is to not broadcast any transients until the accumulation buffer is exhausted, since we must surely have broadcast already.
Maybe a broadcast channel can exist for latecomers to get a full update, which can be used to help ?
Or, use an event id in the transient, which is tracked in the accumulator, so that the server side filter will ignore double broadcasts.  This is best option.  We might be recovering, so we should still broadcast each runtime, with a different id.