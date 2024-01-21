
>[!tip] Created: [2024-01-20 Sat 14:27]

>[!question] Targets: 

>[!danger] Depends: 

The agreement is only on a hash, where signing a given hash guarantees acceptance of all past hashes, and so a commit can be considered finalized even without signatures directly on it.

This means that each node can just sign everything that it knows about, at the highest level it has.
It can be testing future commits before it sends the signal to the network that it accepts something.  It can be running multiple branches in parallel on different machines, then when they merge it can send signature out.

If each node is just signing whatever it believes is the latest, and there are quorum rules inside the data, then this surely should work ?

The flood of messages is like gossip flood, and need not be rigid nor synchrnonous.  Netsplit nodes can just carry on with the only change being what they decide quorum is.  If a big enough split occured, they could agree to do a merge or a rebase with the commits that didn't cause conflict.

If a double spend occured, it would go back to the last place it did agree, and replay from there, doing catchup, if it had found itself forked from quorum.

This should be a very simple protocol, enabled by git's ability to merge ?

Then anyone can make their own decisions about what the highest trustable commit is, since they can apply different rules to how they assess that.

Stake should be allowed with any asset, and probably will require a blend of assets.

When gossiping, they always gossip the highest signature from the other nodes that they have.

They should be able to detect byzantine behaviour and prove it amongst themselves with the conflicting signatures.