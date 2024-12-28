
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