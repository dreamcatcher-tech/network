
>[!tip] Created: [2024-04-07 Sun 21:58]

>[!question] Targets: 

>[!danger] Depends: 

The final action of an effect might include something that can't be easily undone, so we want it to happen at the same time as we make the effect as done, somehow.

If we release the repo lock, but then crash before the exeresult was included, how will we know to roll back ?

So maybe true repo lock requires a commit to be made ?

API could signal that the side effect portion has completed ?

When you're done, the lock gets updated with the status, so we know that it was successful or not, which means the next repeat might only need to do a cleanup, and then its good to go ?

But, what if it had exe results that need to be committed ?  For this reason, fs writing should be prohibited, since exe locking is hard enough.  So we would also bad artifact action requests, and instead require a commit to be done to start those.  Effects should be pure effects, and be request reply type things ?

But if we want to download some massive file, we should be able to put that in files, and have that commited back ?

Only because these actions affect the repos themselves, do we need to merge in the ending of the repo lock with the atomic commit of the action being processed.

Fundamentally, what the commits give us, is guaranteed execution in a distributed system, with replay ability, and data in a standard universally accepted format.

Aborts might be applied to the fs, ?

If we were doing something not tangled up in the commits, our locking mechnism would be in the commits.  So since we are affecting the commits directly, being special seems required here ?
Inside these particular effects, we have direct access to the db.

Could repo lock be a thing that gets done via the api ?
Should any user function ever be able to lock the repo ?