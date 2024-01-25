
>[!tip] Created: [2024-01-21 Sun 11:00]

>[!question] Targets: 

>[!danger] Depends: 

The issue is that the signer needs to produce a single coherent stream.
Byzantine nodes produce incoherent streams.

if a node just signs the commit that is highest that it knows about, and includes links to the other nodes highest commits that it knows about, then it is operating as fast as it possible can.

The issue is that if there is a netsplit, and a double spend is detected, and this node includes the spend that isn't supported by quorum, then it needs to switch to the totally different branch now.  But, this leaves its previous signatures of a now invalid chain able to be exploited or presented as byzantine.

So, the node should, upon switching, reference its prior signatures, and write them as invalid.

This structure can look like a single branch that comes from this node, and includes all the data it knows about - the hash of the highest commit, the other signatures it has received.

By way of git, it may be able to fast forward some of its commits that it did in the failed branch, and include them without having to recalculate them.

It would also go on a witch hunt to find out how it was tricked into losing compute time, and it would refuse tx from that source for a bit.

If there is conflict detected, the node simply sides with where its highest performing peers have sided, favouring forming high performance links.  Byzantine branches can be used to bar those accounts from transmitting, if the source is found to have sent conflicting tx.

Having no mempool, but requiring commits based on some prior state, means double spend is detectable.  If it is tx only, like in eth, then it is harder to say since innocent tx could be used, like paying different people until the balance errors, and so the order of tx decides who gets paid.  Using git means double spend would have to be transmitting to different commits, or a state that actually didn't calculate correctly.  Two differing commits is a byzantine action, and can be punished. 

It could be that even to transmit you need to pay a bond, which can greatly decrease the spam and bad actors on the system.  Different validator pools can set these limits.

If you don't pay the bond, your tx processing is slower since we need to check for double spending.