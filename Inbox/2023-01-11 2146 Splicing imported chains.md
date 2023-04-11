
>[!tip] Created: [2023-01-11 Wed 21:46]

>[!question] Targets: 

>[!danger] Depends: 

## Options

### As a hardlink
But then it won't be updated when changes occur below.

### As a special child
Mark the channel as forked, and point to the origin, then the next pulse that gets made will be an update.
So whenever any chain needs its next pulse, we walk down from root noting that it was forked, and then go make our own next pulse with the note that it forked.
We then update the parent with 'fork' notice, and all the way back to the root.
So new chainIds are generated only when the data is new.
When accessing the chain from outside, need to refer to its new approot as the reference - access by path should simply just work ?

Should be able to make a forked child of the running app by simply pointing at the last known root pulse for it.

### As a plain child
Act like nothing happened and just slap it in as a child ?
So long as the keys are the same, or so long as lineage checking isn't present, should be fine ?
Basically right now, it would work because no checking occurs on the public keys.

Could not update the parent by looking at the child.

So if a new pulse is made in any of the children, we need to immediately update the parent chain all the way back to root.

If we don't, then the same chainId could exist in multiple places in the system.

If we change how updates work, and make them go not from child up, but from root down, then we can handle forks just being slapped straight in to the complex.