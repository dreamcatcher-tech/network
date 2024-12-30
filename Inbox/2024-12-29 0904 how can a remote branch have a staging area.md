
>[!tip] Created: [2024-12-29 Sun 09:04]

>[!question] Targets: 

>[!danger] Depends: 

If I want to make a change to the data, and call commit, must I supply all the files in one hit ?

seems impossible to have a remote staging area, since when would this be committed ?

So the staging area needs to be managed locally, where if I want to make some changes, I would open a snapshot object to do some mutations within, and then when I'm ready, I would call commit on it.

So the commit function should not be called directly, but rather is called on a wrapper object that represents a view of that remote branch.

When we are working with this remote object, we can read from it, and we can write to it, but only when we call commit does something change  ?

Should its transient state be persisted between executions tho ? should it error if uncommitted ?
Error if you exit the function without calling save somewhere ?

Commit and spawn start to look very similar.  Seems only feasible that commit requires a list of files to do the commit with.  Also seems required that there should be a wrapper that gives access to the file as a mutable staging area thing - a working directory - which acts like it is right there with you.

Make it optionally attempt to merge even if you have fallen out of date ?

? How are files passed in to the functions ?
In a cli app, files are implicitly passed by way of the cwd.  The program can do things with these beyond just the calling parameters.  Every invocation is occuring within a snapshot, so it can be mutated, and the commited.  Commit in your own branch would be like calling your own wrapper around your own state and calling commit on it.

Commit should error if there is nothing to commit, unless you tell it to do an empty one ?

If you go to merge and your remote handle on the remote branch has unsaved changes, this should error. 

Reset will discard your changes.

So for all branch related things, you get a handle on the remote branch, and then you get the api.
For local, you can get a remote handle on your own branch, but you also have direct access to it ?

push and pull could require you to switch branches, since it would only work on the current handle you have.

you can only have one handle on a remote branch at a time, so you can't make errors like not committing changes to one handle and then doing a merge or delete with the other.

So the snapshot interface becomes almost all the interface logic you need ??????

The api is by default a snapshot interface, but it also allows you to get handles on other branches ?

Setting remotes can be done at the time you call the function, as well as changed in the settings ?
This would be equivalent to setting the state of the branch ?

If your function is rehydrated, and handles you had open point to snapshots that have changes, what should we do ?
Should we check for conflicts at rehydration time, and automatically tick forwards if we can ?
Should we allow you to commit and create a fork as a side effect, then do a merge ?
What if you pop the changes into a stash, pull the latest changes, and then push the stash back on ?
Ask the snapshot if there are any conflicts that would occur ?
Require the 'ignore conflicts' flag if you are about to overwrite something ?

make a commitAll function so that all open handles are committed to ?

a handle on a process is a superset of a handle on a remote branch, since processes are like a branch within a branch.  Might be like the different between a thread or a fiber, and a branch.

A branch can be a process, or just a data branch.
fibers are independent mini branches on a single branch, managed by a process manager.
Each one can act like a branch, and store arbitrary data, but they are contained within a folder structure on an encapsulating branch.

snapshot interface should give meta about its own state, too, like the alias, the crypto, etc.

?? how can a remote standalone repo be set up ?  do they all have to be attached to an actor repo, which is someone who pays the bills ?  So the crm would create an org, at the host level, and then they would fund that host repo, and then start the crm as a child ?

Can a repo be set free, as in have no parent ?  then in the actors host repo, the link is symbolic rather than hard, and the user may end up with access removed from it.

? mv repo, cp repo ?
can a repo be moved and keep its crypto intact ?
can a repo be found by a path from its host repo ?

So the api object would itself be an address, so it could be passed in as an arg for any of the functions ?

getting access to itself is what happens if a blank connect occurs.