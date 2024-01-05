
>[!tip] Created: [2024-01-05 Fri 14:56]

>[!question] Targets: 

>[!danger] Depends: 

If each worker was its own snapshot of the filesystem, which was backed by git, then it could act with impunity.  This is almost a given, since it should be reproducable from the state of the commit it made.

So to execute, it would gain permission from the procman, and then go and operate in a fork, then merge back in with the procman's permission.

Another option is that when merge conflicts occur, the process can go get rerun ?
Some processes could be light like this, others could not be.

The process designer is free to leave syncing as long as they like, but any external functions need to be done after a commit in a branch, so we can recreate the IO.

We might need to use HAMT for the directory structures, if the current ones are not performant.