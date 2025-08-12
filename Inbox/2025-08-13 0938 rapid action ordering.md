
>[!tip] Created: [2025-08-13 Wed 09:38]

>[!question] Targets: 

>[!danger] Depends: 

make a block diagram of the chain and show the different components, particularly those components subjected to consensus.

it might pay to instead do a seaprate consensus round that figures out the order of the acctions followed by a second round to agree on the hash of the action ordering.

Makes it cheaper to get alignment since the action pool is very easy to agree to and to reorder, but the execution might be quite expensive.

Have a special kind of action failure that is a consensus failure on running, since if the output hashes are different, we need to figure out why, or agree on a subset.

this kind of fault is a repeatability / determinism fault.

Then bisect the action pool and narrow down what the result is.