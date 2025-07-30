
>[!tip] Created: [2025-07-31 Thu 09:33]

>[!question] Targets: 

>[!danger] Depends: 

The key model we are pursuing, is multiple nodes running repeatable calculations, and agreeing on the next state.

so if we can make a version of the mcp transport that supports this blockchain style method of redundant comms, then our blockchain can be the mcp blockchain.

basically an mcp blockchain.

BFT messages being part of the commit might complicate things ?
the nodes could all work on an agreed set of messages from the last round, which can be referenced in the signature, which can also call out byzantine proofs.

Or each node stores the message logs locally, which can be downloaded at whim.

properties:
1. no gossip unless something happens
2. messages are available from each node
3. network connection and perf available each node
4. prove byzantine activity
5. stackable, so we can scale high, where a cluster presents as a single participant in a higher set of rounds - allows very high scale whilst keeping algo working at sweet spot
6. replayable for debugging - if a stall occurs, we need to be able to recreate the state of each node so we can  understand what happened
7. watchdogs, so can detech when stalls or faults occur
8. fuzzable, where we can thrash thru some torturous events
9. keep going even if byzantine faults detected, since fault injection tests the safety of the network
10. hookable, so we get a proposal with a hash, we can hook that and go verify this info for ourselves, and we know which node the proposal came from too

wishes:
1. take advantge of git structure to not waste commits that are behind, so making merges be a bit more useful, and allowing high speed nodes to race ahead, with slow nodes catching up later, without holding back the leaders.  The creation of commits shouldn't need to wait for consensus, so a slow node can get a hundred commits, verify them all, then vote.  The commit history should inherit sigs, so if there were a hundred commits, and 99 signed at the top, but one signed at commit 50, then commit 50 is 100% signed, but higher commits are 99% signed - a node shouldn't have to sign every commit, to imply signing all the ones below.
2. data transfer should be minimal - if we have all the inputs to generate the next commit, there is no need to receive the actual commit if we can calculate it.

executors that are allowed to push updates to data may be different from the nodes doing the data synchrony ?  but, the data nodes must be in complete control of the execution nodes.

stage the rollout:
1. pure data - it just reaches agreement on what the next commit is, without checking internal logic
2. execution correctness - reruns executions before deciding that the proposal is correct and valid

broadcast vs point connections
There might be a way to make a consensus mechanism that, instead of having point to point comms between all the nodes (which is a choke point) can take advantage of state replication acting as a bit of a broadcast.  So when these things are made public, that might save some of the gossip ?

sign the commits using a group pgp key that each node adds as their own key or something, so github shows as verified ?
provide our own analysis tools for walking the chains.