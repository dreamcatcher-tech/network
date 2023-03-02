
>[!tip] Created: [2023-02-28 Tue 09:11]

>[!question] Targets: [[Request for chainId latest]]

>[!danger] Depends: 

Idea is to produce all pulses at the same time as rippling updates to the approot, then signing only the approot.  Then reference to a particular pulse starts with the approot, a path, then a the rest of the data for the target chain.

Production of pulses should be significantly faster, updates are natural, rather than causing a new pulse.  Also means that as an approot is the point of system recovery, no chain is able to be in a state outside of system recovery.  

Required is a way to ensure that multiple deep chains can have their updates to approot accumulated, for efficienty.  In order to do this, reducers cannot respond to updates of their children, or must do so in a way that can be combined without rerunning the reducer.  Seems the requirement to make the reducer able to run in parallel is essential, so causing state to be something that is explicitly and asynchronously requested is vital to this model.

If updates were idempotent then a swarm of validators can converge rapidly on a final pulse, where each time them receive a modification, it can be merged into the main rather than rejected and causing a restart of consensus.

Solves the problem that latests for a chainId is hard to find.  Sneaky in that the approot is actually included in every chain, rather than just being a reference to a guaranteed stale approot.

This method may remove the need to store the approot in each child chain as a means of 
What it means is that there is only the approot as the snapshot of system state.  Finding what chains are in tension should be much easier under this system, as the rollup is authoritative, rather than possibly outdated.

Each pulse inately knows its current path from approot.  Even if this alters during the update ripple, the path will be correct at time of approot signing.

Results in the database being strongly consistent.  Writing the latest flag for approot may have a 2PC with a pending declaration followed by a finalizing write, to handle DB crash.  DB should be flushed before transmission to other nodes.

Kafka model of writing might be perfect for this approot style writing.  Lambdas executing reducers, then kafka writing approots.

Means signature verification need not be done per child chain pulse, but just once, so no loading public keys and even tho verify is fast, it still requires an extra step.

We can use heavier signature schemes, like schnorr, since the signature to data ration is very much higher if only the approot needs signing.  Signature amplification factor - namely how many signatures are required for writing a single bit of data - is much lower if only approot is signed.

## Reducer isolation
Based on the publisher provenance, we can run covenants in the same isolation boundary to save time.  It should be possible to have different isolation boundaries between different chains in the same approot.

## Nested Approots